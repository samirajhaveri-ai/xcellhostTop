import { DnsLookupReport, DnsResolverId, lookupDns } from './dns-lookup';
import { dnsCsv } from './dns-report-export';

export const TXT_PURPOSES = ['SPF', 'DKIM', 'DMARC', 'Verification', 'Other'] as const;
export type TxtPurpose = typeof TXT_PURPOSES[number];
export interface TxtEntry {
  name: string; ttl: number; rawValue: string; value: string; chunks: string[];
  parsed: boolean; purpose: TxtPurpose; hint: string;
}
export interface TxtLookupReport extends DnsLookupReport { entries: TxtEntry[]; }
export interface TxtDiagnostic { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'INFO' | 'FAIL'; }

/** Decode DNS presentation strings, not JavaScript/JSON escapes. Raw data stays intact. */
export function readTxtValue(raw: string): { value: string; chunks: string[]; parsed: boolean } {
  const input = raw.trim();
  if (!input.startsWith('"')) return { value: raw, chunks: [raw], parsed: true };
  const fallback = () => ({ value: raw, chunks: [] as string[], parsed: false });
  const encoder = new TextEncoder(), decoder = new TextDecoder('utf-8', { fatal: true, ignoreBOM: true });
  const chunks: string[] = [];
  let at = 0;
  while (at < input.length) {
    while (/\s/.test(input[at] || '') && at < input.length) at++;
    if (at === input.length) break;
    if (input[at++] !== '"') return fallback();
    const bytes: number[] = []; let closed = false;
    while (at < input.length) {
      if (input[at] === '"') { at++; closed = true; break; }
      if (input[at] === '\\') {
        at++; if (at === input.length) return fallback();
        const decimal = input.slice(at).match(/^\d{3}/);
        if (decimal) {
          const byte = Number(decimal[0]); if (byte > 255) return fallback();
          bytes.push(byte); at += 3; continue;
        }
      }
      const character = String.fromCodePoint(input.codePointAt(at)!);
      bytes.push(...encoder.encode(character)); at += character.length;
    }
    if (!closed) return fallback();
    try { chunks.push(decoder.decode(Uint8Array.from(bytes), { stream: true })); }
    catch { return fallback(); }
  }
  try { chunks[chunks.length - 1] += decoder.decode(); }
  catch { return fallback(); }
  return { value: chunks.join(''), chunks, parsed: true };
}

export function txtPurpose(value: string, name: string): { purpose: TxtPurpose; hint: string } {
  if (/^v=spf1(?:\s|$)/i.test(value)) return { purpose: 'SPF', hint: 'Sender policy prefix (v=spf1).' };
  if (/^v=DMARC1\s*;/i.test(value)) return { purpose: 'DMARC', hint: 'Domain mail-policy prefix (v=DMARC1).' };
  if (/^v=DKIM1(?:\s*;|$)/i.test(value) || (/\._domainkey\./i.test(name) && /(?:^|;)\s*p\s*=/.test(value))) return { purpose: 'DKIM', hint: 'Mail-signing key tags; a selector-specific record.' };
  if (/^(?:google-site-verification|ms|facebook-domain-verification|apple-domain-verification|atlassian-domain-verification|adobe-idp-site-verification|docusign|stripe-verification|zoho-verification|protonmail-verification|onetrust-domain-verification)=/i.test(value)) return { purpose: 'Verification', hint: 'Recognizable service-verification prefix; ownership is not tested.' };
  return { purpose: 'Other', hint: 'General TXT data or an unrecognized format.' };
}

export async function lookupTxt(input: string, resolver: DnsResolverId, signal?: AbortSignal): Promise<TxtLookupReport> {
  signal?.throwIfAborted();
  const report = await lookupDns(input, 'TXT', resolver, false, signal);
  signal?.throwIfAborted();
  const entries = report.hosts[0].records.filter(record => record.type === 'TXT').map(record => {
    const decoded = readTxtValue(record.value);
    return { name: record.name, ttl: record.ttl, rawValue: record.value, ...decoded,
      ...(decoded.parsed ? txtPurpose(decoded.value, record.name) : { purpose: 'Other' as const, hint: 'Original response shown because the presentation could not be decoded safely.' }),
    };
  });
  return { ...report, entries };
}

export function txtAnalysis(report: TxtLookupReport) {
  const host = report.hosts[0], entries = report.entries;
  const counts = Object.fromEntries(TXT_PURPOSES.map(purpose => [purpose, entries.filter(entry => entry.purpose === purpose).length])) as Record<TxtPurpose, number>;
  const owners = new Map<string, number>();
  entries.filter(entry => entry.purpose === 'SPF').forEach(entry => owners.set(entry.name.toLowerCase(), (owners.get(entry.name.toLowerCase()) || 0) + 1));
  const duplicateSpf = [...owners].filter(([, count]) => count > 1);
  const unreadable = entries.filter(entry => !entry.parsed).length;
  const split = entries.filter(entry => entry.chunks.length > 1).length;
  const diagnostics: TxtDiagnostic[] = [
    { label: 'TXT response', detail: host.status === 'ERROR' ? host.error || 'Resolver request failed.' : host.status === 'NXDOMAIN' ? 'The queried DNS name does not exist.' : entries.length ? entries.length + ' TXT record(s) returned.' : 'The name exists, but no TXT records were returned for this query.', state: host.status === 'ERROR' ? 'FAIL' : host.status === 'NXDOMAIN' ? 'REVIEW' : entries.length ? 'PASS' : 'INFO' },
    { label: 'Text presentation', detail: unreadable ? unreadable + ' value(s) could not be safely decoded. Their original responses are retained.' : entries.length ? split + ' multi-string record(s) joined without inserting spaces. Original values are available below.' : 'No TXT values to decode.', state: unreadable ? 'REVIEW' : entries.length ? 'PASS' : 'INFO' },
    { label: 'Purpose labels', detail: TXT_PURPOSES.filter(purpose => counts[purpose]).map(purpose => purpose + ': ' + counts[purpose]).join(' | ') || 'No purpose labels to show. Labels use text patterns, not policy validation.', state: 'INFO' },
    { label: 'SPF record count', detail: duplicateSpf.length ? duplicateSpf.map(([name, count]) => name + ': ' + count + ' SPF records').join(' | ') + '. Publish one combined SPF policy per owner name.' : counts.SPF ? 'No owner name in this answer has multiple SPF policies.' : 'No SPF prefix found in the returned TXT values. Other names were not checked.', state: duplicateSpf.length ? 'REVIEW' : counts.SPF ? 'PASS' : 'INFO' },
    { label: 'Lookup scope', detail: 'Only ' + report.domain + ' was queried. DMARC names, DKIM selectors and other subdomains are not scanned automatically.', state: 'INFO' },
    { label: 'DNSSEC authentication', detail: host.authenticated ? 'The resolver authenticated this TXT response.' : 'The resolver did not authenticate this response; that alone does not prove a DNSSEC failure.', state: host.authenticated ? 'PASS' : 'INFO' },
  ];
  const recommendations = [
    host.status === 'ERROR' ? 'Retry the lookup or switch resolvers before concluding that a record is missing.' : host.status === 'NXDOMAIN' ? 'Check the exact hostname spelling and DNS configuration. A missing subdomain does not mean the entire domain is absent.' : duplicateSpf.length ? 'Review the duplicate SPF policies with your mail provider and combine the authorized senders into a single policy for each name.' : 'Compare the returned text with the exact value supplied by your service provider. A verification-like token is not proof that ownership has been confirmed.',
    'For DMARC, query _dmarc.example.com. For DKIM, use the real selector supplied by your email provider, such as selector._domainkey.example.com.',
    'Purpose labels are hints, not full SPF, DKIM or DMARC validation. After a change, account for cached TTLs and compare another resolver if needed.',
  ];
  return { counts, duplicateSpf: duplicateSpf.length, diagnostics, recommendations, splitCount: split, purposeCount: TXT_PURPOSES.filter(purpose => counts[purpose]).length };
}

export function txtReportCsv(report: TxtLookupReport): string {
  const rows: (string | number)[][] = [['Queried hostname', 'Record name', 'Purpose', 'Decoded TXT value', 'Original TXT response', 'String chunks', 'TTL (seconds)', 'DNS status', 'Detail', 'Resolver', 'Checked at (UTC)']];
  for (const entry of report.entries) rows.push([report.domain, entry.name, entry.purpose, entry.value, entry.rawValue, entry.chunks.length, entry.ttl, report.hosts[0].status, entry.parsed ? entry.hint : 'Original response retained; decode not available', report.resolver, report.checkedAt]);
  if (!report.entries.length) rows.push([report.domain, report.domain, '', '', '', '', '', report.hosts[0].status, report.hosts[0].error || 'No TXT answers returned', report.resolver, report.checkedAt]);
  return dnsCsv(rows);
}
