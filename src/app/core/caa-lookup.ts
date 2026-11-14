import { DnsLookupReport, DnsResolverId, lookupDns } from './dns-lookup';
import { dnsCsv } from './dns-report-export';
import { readTxtValue } from './txt-lookup';

export interface CaaProperty {
  flags: number; tag: string; value: string; critical: boolean; reservedBits: number;
  issuer: string | null; parameters: string | null; issueValid: boolean | null; reportingValid: boolean | null;
}
export interface CaaEntry { name: string; ttl: number; rawValue: string; property: CaaProperty | null; }
export interface CaaLookupReport extends DnsLookupReport { entries: CaaEntry[]; }
interface CaaDiagnostic { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'INFO' | 'FAIL'; }
const knownTags = ['issue', 'issuewild', 'iodef'];

/** Decode one CAA value, retaining the original presentation separately. */
export function parseCaaValue(raw: string): CaaProperty | null {
  const match = raw.trim().match(/^(\d{1,3})\s+([a-z0-9]{1,255})\s+([\s\S]+)$/i);
  if (!match || Number(match[1]) > 255) return null;
  const flags = Number(match[1]), tag = match[2].toLowerCase(), presentation = match[3].trim();
  if (!presentation.startsWith('"') && !/^(?:\\[\s\S]|[^\s"\\])+$/.test(presentation)) return null;
  const decoded = readTxtValue(presentation.startsWith('"') ? presentation : '"' + presentation + '"');
  if (!decoded.parsed || decoded.chunks.length !== 1) return null;
  const value = decoded.value;
  let issuer: string | null = null, parameters: string | null = null, issueValid: boolean | null = null, reportingValid: boolean | null = null;
  if (tag === 'issue' || tag === 'issuewild') {
    const trimWsp = (text: string) => text.replace(/^[ \t]+|[ \t]+$/g, '');
    const [name, ...parts] = value.split(';'); const domain = trimWsp(name);
    const issuerValid = !domain || domain.split('.').every(label => /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(label));
    const paramsValid = !parts.length || parts.length === 1 && !trimWsp(parts[0]) || parts.every(part => /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?[ \t]*=[ \t]*[\x21-\x3a\x3c-\x7e]*$/i.test(trimWsp(part)));
    issueValid = issuerValid && paramsValid;
    issuer = issueValid && domain ? domain.toLowerCase() : null; parameters = parts.length ? parts.join(';').trim() : null;
  }
  if (tag === 'iodef') {
    try { const url = new URL(value); reportingValid = ['http:', 'https:', 'mailto:'].includes(url.protocol) && !/[\s\x00-\x1f]/.test(value) && (url.protocol === 'mailto:' ? !!url.pathname && url.pathname.includes('@') : !!url.hostname && !url.username && !url.password); }
    catch { reportingValid = false; }
  }
  return { flags, tag, value, critical: (flags & 128) !== 0, reservedBits: flags & 127, issuer, parameters, issueValid, reportingValid };
}

export async function lookupCaa(input: string, resolver: DnsResolverId, signal?: AbortSignal): Promise<CaaLookupReport> {
  signal?.throwIfAborted(); const report = await lookupDns(input, 'CAA', resolver, false, signal); signal?.throwIfAborted();
  return { ...report, entries: report.hosts[0].records.filter(record => record.type === 'CAA').map(record => ({ name: record.name, ttl: record.ttl, rawValue: record.value, property: parseCaaValue(record.value) })) };
}

export function caaSetSummary(entries: CaaEntry[], wildcard: boolean) {
  const properties = entries.flatMap(entry => entry.property ? [entry.property] : []);
  const explicitWildcard = wildcard && properties.some(property => property.tag === 'issuewild');
  const source = explicitWildcard ? 'issuewild' : 'issue';
  const grants = properties.filter(property => property.tag === source);
  const issuers = [...new Set(grants.flatMap(property => property.issuer ? [property.issuer] : []))];
  const unknownCritical = properties.some(property => property.critical && !knownTags.includes(property.tag));
  const undecoded = entries.some(entry => !entry.property);
  const title = undecoded || unknownCritical ? 'Review required' : !grants.length ? 'No ' + source + ' restriction in this set' : issuers.length ? 'Named issuers in this set' : 'No issuer grant in this set';
  const detail = undecoded ? 'At least one value could not be decoded. A reliable rule summary is unavailable.' : unknownCritical ? 'An additional critical tag requires issuer support. A CA that does not understand it must not issue.' : !grants.length ? 'No applicable issuance property was returned in this RRset. Other authorization requirements still apply.' : issuers.length ? 'Issuer grants are additive. Parameters may further constrain each issuer, and are shown in the records below.' : 'Applicable properties contain no valid issuer name. Empty or malformed issue values grant no issuance authority.';
  return { title, detail, issuers, source, fallback: wildcard && !explicitWildcard, review: undecoded || unknownCritical };
}

export function caaAnalysis(report: CaaLookupReport) {
  const host = report.hosts[0], properties = report.entries.flatMap(entry => entry.property ? [entry.property] : []);
  const owners = [...new Set(report.entries.map(entry => entry.name.toLowerCase()))];
  const sets = owners.map(owner => { const entries = report.entries.filter(entry => entry.name.toLowerCase() === owner); return { owner, normal: caaSetSummary(entries, false), wildcard: caaSetSummary(entries, true) }; });
  const invalid = report.entries.length - properties.length, malformedIssues = properties.filter(property => property.issueValid === false).length;
  const criticalOther = properties.filter(property => property.critical && !knownTags.includes(property.tag));
  const reserved = properties.filter(property => property.reservedBits).length;
  const badReports = properties.filter(property => property.reportingValid === false).length;
  const diagnostics: CaaDiagnostic[] = [
    { label: 'CAA response', detail: host.status === 'ERROR' ? host.error || 'Resolver request failed.' : host.status === 'NXDOMAIN' ? 'This exact name does not exist according to the resolver. The parent policy has not been evaluated.' : report.entries.length ? report.entries.length + ' CAA record(s) returned across ' + owners.length + ' owner name(s).' : 'No CAA returned at this name. Parent rules may apply; this is not evidence that issuance is unrestricted.', state: host.status === 'ERROR' ? 'FAIL' : host.status === 'NXDOMAIN' ? 'REVIEW' : report.entries.length ? 'PASS' : 'INFO' },
    { label: 'Presentation and issue values', detail: invalid || malformedIssues ? invalid + ' undecoded record(s); ' + malformedIssues + ' malformed issue / issuewild value(s). Originals are retained. A malformed issue value grants no issuer authority.' : properties.length ? 'Flags, tags and values were decoded. Issuer-specific parameters are retained without interpreting their meaning.' : 'No CAA values to inspect.', state: invalid || malformedIssues ? 'REVIEW' : properties.length ? 'PASS' : 'INFO' },
    { label: 'Ordinary certificate rules', detail: sets.length ? sets.map(set => set.owner + ': ' + set.normal.title + (set.normal.issuers.length ? ' - ' + set.normal.issuers.join(', ') : '')).join(' | ') : 'No returned RRset to summarize.', state: sets.some(set => set.normal.review) ? 'REVIEW' : 'INFO' },
    { label: 'Wildcard certificate rules', detail: sets.length ? sets.map(set => set.owner + ': ' + set.wildcard.title + ' (uses ' + set.wildcard.source + ')').join(' | ') : 'No returned RRset to summarize. Wildcard authorization is not established.', state: sets.some(set => set.wildcard.review) ? 'REVIEW' : 'INFO' },
    { label: 'Issuer-critical flag', detail: criticalOther.length ? criticalOther.map(property => property.tag).join(', ') + ': critical tags outside this tool\'s issue / issuewild / iodef interpretation. Issuers must support them before issuing.' : 'Critical means bit 128 is set. No additional critical tag was identified in decoded records.', state: criticalOther.length ? 'REVIEW' : 'INFO' },
    { label: 'Reserved flag bits', detail: reserved ? reserved + ' record(s) have reserved bits set. Publishers should clear these; interpreters ignore them. Flag 1 is not the issuer-critical flag.' : 'No reserved flag bits were set in decoded records.', state: reserved ? 'REVIEW' : 'INFO' },
    { label: 'Reporting destinations', detail: badReports ? badReports + ' iodef value(s) do not match supported mailto / HTTP / HTTPS destination syntax. No report is sent by this tool.' : properties.some(property => property.tag === 'iodef') ? 'Reporting destinations were parsed. Their availability and reporting behavior are not tested.' : 'No iodef destination was returned. Reporting does not grant issuance authority.', state: badReports ? 'REVIEW' : 'INFO' },
    { label: 'Lookup scope', detail: 'Only CAA at ' + report.domain + ' was queried through ' + report.resolver + '. Parent names, alias-chain completeness, issuer parameters and TLS certificates were not evaluated.', state: 'INFO' },
    { label: 'DNSSEC authentication', detail: host.authenticated ? 'The resolver authenticated this response.' : 'The response was not authenticated by the resolver; this alone does not establish a DNSSEC failure.', state: host.authenticated ? 'PASS' : 'INFO' },
  ];
  const recommendations = [
    host.status === 'ERROR' ? 'Retry or choose another resolver before making an authorization decision.' : !report.entries.length ? 'Check parent CAA records and alias resolution before concluding that no issuance restrictions apply.' : invalid || malformedIssues || criticalOther.length ? 'Review undecoded values, malformed issuer grants and additional critical tags with your certificate provider before editing the policy.' : 'Compare the named issuers and any parameters with your certificate provider settings. These summaries are scoped to each returned owner name.',
    'For wildcard requests, an explicit issuewild property takes precedence over issue in the same relevant RRset. An empty issuer grant does not cancel other valid grants.',
    'CAA controls issuance policy; it does not validate or revoke an existing certificate. Confirm the complete relevant RRset and the CA requirements before requesting a certificate.',
  ];
  return { sets, diagnostics, recommendations, issuerCount: new Set(properties.flatMap(property => property.issuer ? [property.issuer] : [])).size, issueCount: properties.filter(property => property.tag === 'issue').length, wildcardCount: properties.filter(property => property.tag === 'issuewild').length };
}

export function caaReportCsv(report: CaaLookupReport): string {
  const rows: (string | number)[][] = [['Queried hostname', 'Record owner', 'Flags', 'Issuer critical', 'Tag', 'Decoded value', 'Issuer name', 'Parameters', 'Issue syntax', 'TTL (seconds)', 'Original CAA value', 'DNS status', 'Detail', 'Resolver', 'Checked at (UTC)']];
  for (const entry of report.entries) { const property = entry.property; rows.push([report.domain, entry.name, property?.flags ?? '', property ? property.critical ? 'Yes' : 'No' : '', property?.tag ?? '', property?.value ?? '', property?.issuer ?? '', property?.parameters ?? '', property?.issueValid === null || !property ? '' : property.issueValid ? 'Valid' : 'Malformed; no grant', entry.ttl, entry.rawValue, report.hosts[0].status, property ? 'Decoded; exact query only' : 'Original retained; decoding unavailable', report.resolver, report.checkedAt]); }
  if (!report.entries.length) rows.push([report.domain, '', '', '', '', '', '', '', '', '', '', report.hosts[0].status, report.hosts[0].error || 'No CAA returned; parent policy not evaluated', report.resolver, report.checkedAt]);
  return dnsCsv(rows);
}
