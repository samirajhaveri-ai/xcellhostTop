import { DNS_LOOKUP_RESOLVERS, DnsLookupReport, DnsResolverId, lookupDns, normalizeDnsDomain } from './dns-lookup';
import { readTxtValue } from './txt-lookup';
import { DmarcLookupReport, lookupDmarc } from './dmarc-lookup';
import { dnsCsv } from './dns-report-export';

export const BIMI_LIMITS = { aliases: 5, records: 50, recordLength: 16384, timeoutMs: 25000, assetTimeoutMs: 10000, assetBytes: 256 * 1024 } as const;
export interface BimiRecord { tags: { name: string; value: string; meaning: string }[]; logo: string; evidence: string; state: 'PUBLISHED' | 'DECLINED' | 'INVALID'; errors: string[]; warnings: string[]; }
export interface BimiEntry { owner: string; ttl: number; raw: string; value: string; record: BimiRecord; }
export interface BimiSvgReport { state: 'PREFLIGHT_PASS' | 'REVIEW' | 'INVALID'; title: string; viewBox: string; checks: { label: string; passed: boolean; detail: string }[]; previewAllowed: boolean; }
export interface BimiAsset {
  kind: 'logo' | 'evidence'; url: string; state: 'NOT_REQUESTED' | 'NOT_PUBLISHED' | 'READABLE' | 'UNREADABLE' | 'INVALID';
  note: string; bytes: number; contentType: string; svg?: BimiSvgReport; content?: string;
  certificate?: { subject: string; issuer: string; notBefore: string; notAfter: string; dateStatus: string; fingerprint: string; chainLength: number };
}
export interface BimiLookupReport extends DnsLookupReport {
  selector: string; hostname: string; owner: string; entries: BimiEntry[]; aliases: { name: string; target: string }[];
  state: 'FOUND' | 'MISSING' | 'MULTIPLE' | 'INVALID' | 'ERROR'; note: string;
  inspectAssets: boolean; logo: BimiAsset; evidence: BimiAsset; dmarc: DmarcLookupReport | null; limits: string[];
}
export function normalizeBimiSelector(input: string): string {
  const value = input.trim().toLowerCase();
  if (!value || value.length > 253 || !value.split('.').every(label => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label))) throw new Error('Enter a selector such as default, without _bimi or a domain name.');
  return value;
}
/** The tool fetches only public HTTPS domain names, without credentials or redirects. */
export function bimiAssetUrl(input: string): string {
  if (!input || input.length > 4096 || /[\s\\,\x00-\x1f\x7f]/.test(input)) throw new Error('Use one HTTPS URL; encode spaces and commas in its path.');
  const url = new URL(input), host = url.hostname.toLowerCase();
  if (url.protocol !== 'https:' || url.username || url.password || url.hash || url.port && url.port !== '443' || /^[\d.]+$/.test(host) || host.includes(':') || /(?:^|\.)(localhost|local|internal|invalid|test)$/.test(host) || normalizeDnsDomain(host) !== host || host.includes('_')) throw new Error('Use a public HTTPS domain without credentials, fragments or a non-standard port.');
  return url.href;
}
export function parseBimiRecord(value: string): BimiRecord {
  const result: BimiRecord = { tags: [], logo: '', evidence: '', state: 'INVALID', errors: [], warnings: [] };
  if (value.length > BIMI_LIMITS.recordLength) { result.errors.push('Record exceeds the 16 KiB inspection limit.'); return result; }
  const text = value.replace(/\r\n(?=[ \t])/g, '');
  if (/[\x00-\x08\x0a-\x1f\x7f]/.test(text)) { result.errors.push('Unexpected control characters in TXT data.'); return result; }
  const pieces = text.split(';'); if (!pieces.at(-1)?.trim()) pieces.pop();
  const tags = new Map<string, string>();
  const meanings: Record<string, string> = { v: 'BIMI version. The first tag must be exactly v=BIMI1.', l: 'HTTPS location of the brand indicator SVG. Empty values need to be interpreted with a.', a: 'Optional HTTPS evidence-document location, commonly a VMC or CMC certificate.' };
  for (const piece of pieces) {
    const match = /^\s*([A-Za-z][A-Za-z0-9_]*)\s*=\s*([^;]*?)\s*$/.exec(piece);
    if (!match) { result.errors.push('Malformed tag in the assertion record.'); continue; }
    const [, name, content] = match; if (tags.has(name)) result.errors.push('Duplicate ' + name + ' tag.'); tags.set(name, content);
    result.tags.push({ name, value: content, meaning: meanings[name] || 'Extension tag retained for inspection; this tool does not evaluate it.' });
    if (!meanings[name]) result.warnings.push('Extension ' + name + ' is not evaluated.');
  }
  if (!/^\s*v\s*=\s*BIMI1(?:\s*;|\s*$)/.test(text) || tags.get('v') !== 'BIMI1') result.errors.push('The first tag must be v=BIMI1 with the exact version value.');
  if (!tags.has('l')) result.errors.push('The l tag is missing.');
  for (const [tag, field] of [['l', 'logo'], ['a', 'evidence']] as const) {
    const url = tags.get(tag) || ''; if (!url) continue;
    try { result[field] = bimiAssetUrl(url); }
    catch { result.errors.push(tag + ' must contain one supported public HTTPS URL.'); }
  }
  if (!result.errors.length) result.state = !result.logo && !result.evidence ? 'DECLINED' : 'PUBLISHED';
  if (result.state === 'PUBLISHED' && !result.logo) result.warnings.push('No standalone logo URL; evidence-only assertions require receiver-specific evidence processing. This tool does not extract a logo from a certificate.');
  if (result.state === 'PUBLISHED' && !result.evidence) result.warnings.push('No evidence document is published. Support for self-asserted logos varies by mailbox provider.');
  if (result.logo && !/\.svgz?$/i.test(new URL(result.logo).pathname)) result.warnings.push('Logo URL has no SVG/SVGZ filename suffix; inspect the actual response format.');
  return result;
}
/** Inert XML inspection, deliberately a preflight rather than full SVG Tiny P/S schema validation. */
export function inspectBimiSvg(text: string, parser: DOMParser): BimiSvgReport {
  const result: BimiSvgReport = { state: 'INVALID', title: '', viewBox: '', checks: [], previewAllowed: false };
  const check = (label: string, passed: boolean, detail: string) => result.checks.push({ label, passed, detail });
  if (new TextEncoder().encode(text).length > BIMI_LIMITS.assetBytes || /<!DOCTYPE|<!ENTITY|<\?xml-stylesheet/i.test(text)) { check('XML document', false, 'Oversized data, DTDs, entity declarations or stylesheet processing instructions are not accepted.'); return result; }
  const doc = parser.parseFromString(text, 'image/svg+xml'), root = doc.documentElement;
  if (doc.querySelector('parsererror') || root?.localName !== 'svg' || root.namespaceURI !== 'http://www.w3.org/2000/svg') { check('SVG document', false, 'The response is not a well-formed SVG document.'); return result; }
  check('SVG document', true, 'Well-formed SVG in the SVG namespace.');
  check('Declared profile', root.getAttribute('baseProfile') === 'tiny-ps' && root.getAttribute('version') === '1.2', 'Expected version="1.2" and baseProfile="tiny-ps".');
  const title = Array.from(root.children).find(element => element.localName === 'title'); result.title = title?.textContent?.trim() || '';
  check('Accessible title', !!result.title, 'A non-empty title identifies the brand indicator.');
  result.viewBox = root.getAttribute('viewBox') || ''; const box = result.viewBox.trim().split(/[\s,]+/).map(Number);
  check('Square viewBox', box.length === 4 && box.every(Number.isFinite) && box[2] > 0 && box[2] === box[3], 'Expected a positive square viewBox.');
  const elements = [root, ...Array.from(root.querySelectorAll('*'))];
  const allowed = new Set(['svg','g','defs','title','desc','metadata','path','rect','circle','ellipse','line','polyline','polygon','linearGradient','radialGradient','stop','solidColor','clipPath','use','text','tspan']);
  let portable = elements.length <= 10000;
  for (const element of elements) {
    if (!allowed.has(element.localName) || element.namespaceURI !== root.namespaceURI) portable = false;
    for (const attribute of Array.from(element.attributes)) {
      const name = attribute.localName, value = attribute.value.trim();
      if (/^on/i.test(name) || name === 'base' || name === 'href' && !/^#[A-Za-z_][\w:.-]*$/.test(value)) portable = false;
      if (/url\s*\(/i.test(value) && !/^url\(\s*#[A-Za-z_][\w:.-]*\s*\)$/i.test(value)) portable = false;
      if (name === 'style' && !value.split(';').filter(item => item.trim()).every(item => /^\s*(?:fill|fill-rule|fill-opacity|stroke|stroke-width|stroke-opacity|stroke-linecap|stroke-linejoin|stroke-miterlimit|opacity|stop-color|stop-opacity)\s*:\s*[-#.,()%\sa-z0-9]+$/i.test(item))) portable = false;
      if (/\\|(?:https?:|data:|javascript:)/i.test(value) && !['xmlns', 'namespaceURI'].includes(attribute.name) && attribute.namespaceURI !== 'http://www.w3.org/2000/xmlns/') portable = false;
    }
  }
  check('Portable content preflight', portable, 'Checks a conservative element set and rejects scripts, events, embedded images, animation and external references. Some legitimate SVG features require specialist validation.');
  result.previewAllowed = result.checks.every(item => item.passed); result.state = result.previewAllowed ? 'PREFLIGHT_PASS' : 'REVIEW'; return result;
}
export async function fetchBimiAsset(kind: BimiAsset['kind'], url: string, signal?: AbortSignal, parser?: DOMParser): Promise<BimiAsset> {
  const result: BimiAsset = { kind, url, state: url ? 'NOT_REQUESTED' : 'NOT_PUBLISHED', note: '', bytes: 0, contentType: '' };
  if (!url) { result.note = 'No ' + kind + ' URL published.'; return result; }
  let reader: ReadableStreamDefaultReader<Uint8Array> | undefined;
  try {
    const safeUrl = bimiAssetUrl(url), combined = signal ? AbortSignal.any([signal, AbortSignal.timeout(BIMI_LIMITS.assetTimeoutMs)]) : AbortSignal.timeout(BIMI_LIMITS.assetTimeoutMs);
    const response = await fetch(safeUrl, { method: 'GET', mode: 'cors', credentials: 'omit', redirect: 'error', referrerPolicy: 'no-referrer', cache: 'no-store', signal: combined });
    if (!response.ok) throw new Error('Asset server returned HTTP ' + response.status + '.');
    if (Number(response.headers.get('content-length')) > BIMI_LIMITS.assetBytes) throw new Error('Asset exceeds the 256 KiB inspection limit.');
    result.contentType = response.headers.get('content-type') || 'Not supplied';
    if (!response.body) throw new Error('Asset response body is unavailable.');
    reader = response.body.getReader(); const chunks: Uint8Array[] = [];
    while (true) { combined.throwIfAborted(); const chunk = await reader.read(); if (chunk.done) break; result.bytes += chunk.value.length; if (result.bytes > BIMI_LIMITS.assetBytes) throw new Error('Asset exceeds the 256 KiB inspection limit.'); chunks.push(chunk.value); }
    const bytes = new Uint8Array(result.bytes); let offset = 0; for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
    if (kind === 'logo' && bytes[0] === 0x1f && bytes[1] === 0x8b) {
      result.state = 'UNREADABLE'; result.note = 'Raw SVGZ/gzip data received. This preflight inspects uncompressed SVG responses; use a dedicated validator for this compressed asset.'; return result;
    }
    const text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    result.state = 'READABLE'; result.note = 'HTTPS response was readable by this browser. This does not establish brand ownership or mailbox acceptance.';
    if (kind === 'logo') {
      if (!parser) { result.note += ' SVG inspection requires a browser XML parser.'; return result; }
      result.svg = inspectBimiSvg(text, parser); if (result.svg.state === 'INVALID') result.state = 'INVALID';
      if (result.svg.previewAllowed) result.content = text;
    } else {
      const blocks = [...text.matchAll(/-----BEGIN CERTIFICATE-----\s*[A-Za-z0-9+/=\s]+?\s*-----END CERTIFICATE-----/g)];
      if (!blocks.length || blocks.length > 10 || text.replace(/-----BEGIN CERTIFICATE-----\s*[A-Za-z0-9+/=\s]+?\s*-----END CERTIFICATE-----/g, '').trim()) throw new Error('Expected a PEM certificate chain with up to ten CERTIFICATE blocks.');
      const { inspectCertificate } = await import('./certificate-fingerprint'); const certificate = inspectCertificate(blocks[0][0]);
      result.certificate = { subject: certificate.subject, issuer: certificate.issuer, notBefore: certificate.notBefore, notAfter: certificate.notAfter, dateStatus: certificate.dateStatus, fingerprint: certificate.fingerprints.find(item => item.algorithm === 'SHA-256')!.hex, chainLength: blocks.length };
      result.note = 'First certificate decoded; chain length ' + blocks.length + '. Trust chain, mark-certificate type, revocation, domain authorization and embedded-logo match are not verified.';
    }
  } catch (error) {
    signal?.throwIfAborted(); result.state = error instanceof TypeError || error instanceof DOMException && ['TimeoutError','AbortError'].includes(error.name) ? 'UNREADABLE' : 'INVALID';
    result.note = error instanceof TypeError ? 'Browser could not read this asset. CORS, redirects, TLS or network restrictions may be responsible; this is not proof that the URL is down.' : error instanceof Error ? error.message : 'Asset could not be inspected.';
  } finally { await reader?.cancel().catch(() => undefined); }
  return result;
}
export async function lookupBimi(input: string, selectorInput: string, resolverId: DnsResolverId, inspectAssets: boolean, signal?: AbortSignal, progress?: (message: string) => void, parser?: DOMParser): Promise<BimiLookupReport> {
  signal?.throwIfAborted(); const domain = normalizeDnsDomain(input), selector = normalizeBimiSelector(selectorInput), hostname = selector + '._bimi.' + domain;
  if (domain.includes('_') || hostname.length > 253) throw new Error('Use the email From domain without _bimi; selector and domain must fit in a DNS hostname.');
  const resolver = DNS_LOOKUP_RESOLVERS.find(item => item.id === resolverId); if (!resolver) throw new Error('Choose a supported DNS resolver.');
  const start = performance.now(), timeout = AbortSignal.timeout(BIMI_LIMITS.timeoutMs), combined = signal ? AbortSignal.any([signal, timeout]) : timeout;
  const asset = (kind: BimiAsset['kind']): BimiAsset => ({ kind, url: '', state: 'NOT_REQUESTED', note: 'No asset requested.', bytes: 0, contentType: '' });
  const report: BimiLookupReport = { domain, type: 'TXT', resolver: resolver.name, checkedAt: new Date().toISOString(), durationMs: 0, hosts: [], selector, hostname, owner: hostname, entries: [], aliases: [], state: 'MISSING', note: '', inspectAssets, logo: asset('logo'), evidence: asset('evidence'), dmarc: null, limits: [] };
  const dns = async () => {
    const seen = new Set<string>(); let owner = hostname;
    try {
      for (let depth = 0; depth <= BIMI_LIMITS.aliases; depth++) {
        if (seen.has(owner)) throw new Error('CNAME loop detected.');
        progress?.('Reading BIMI TXT at ' + owner); const response = await lookupDns(owner, 'TXT', resolverId, false, combined); report.hosts.push(response.hosts[0]); const host = response.hosts[0];
        if (host.status === 'ERROR') throw new Error(host.error || 'DNS request failed.');
        if (host.status === 'NXDOMAIN') { report.note = 'NXDOMAIN at the selected policy name. Other selectors or organizational-domain records are not searched.'; return; }
        while (true) {
          if (seen.has(owner)) throw new Error('CNAME loop detected.'); seen.add(owner); report.owner = owner;
          const aliases = host.records.filter(item => item.name.toLowerCase() === owner && item.type === 'CNAME'), records = host.records.filter(item => item.name.toLowerCase() === owner && item.type === 'TXT');
          if (aliases.length > 1 || aliases.length && records.length) throw new Error('Ambiguous CNAME/TXT answer.');
          if (records.length > BIMI_LIMITS.records) throw new Error('TXT answer count exceeds the inspection limit.');
          if (records.length) {
            for (const rr of records) {
              const decoded = readTxtValue(rr.value); if (!/^\s*v\s*=\s*BIMI\d+(?:\s*;|\s*$)/i.test(decoded.value)) continue;
              const record = parseBimiRecord(decoded.value); if (!decoded.parsed) { record.state = 'INVALID'; record.errors.push('Malformed DNS TXT string encoding.'); }
              report.entries.push({ owner, ttl: rr.ttl, raw: rr.value, value: decoded.value, record });
            }
            report.state = report.entries.length > 1 ? 'MULTIPLE' : report.entries.length ? report.entries[0].record.state === 'INVALID' ? 'INVALID' : 'FOUND' : 'MISSING';
            report.note = report.state === 'MULTIPLE' ? 'Multiple BIMI-like records returned. No asset is selected from ambiguous publication.' : report.state === 'MISSING' ? 'No BIMI assertion at this exact name. Other selectors or organizational-domain fallback are not searched.' : report.state === 'INVALID' ? 'Review the assertion record errors.' : 'One assertion record found at the selected name.'; return;
          }
          if (!aliases.length) { report.note = 'No BIMI assertion at this exact name. Other selectors or organizational-domain fallback are not searched.'; return; }
          if (report.aliases.length >= BIMI_LIMITS.aliases) throw new Error('CNAME alias limit reached.');
          const target = normalizeDnsDomain(aliases[0].value.replace(/\.$/, '')); report.aliases.push({ name: owner, target }); owner = target;
          if (!host.records.some(item => item.name.toLowerCase() === owner)) break;
        }
      }
      throw new Error('CNAME query limit reached.');
    } catch (error) { signal?.throwIfAborted(); report.state = 'ERROR'; report.note = timeout.aborted ? 'The snapshot deadline was reached.' : error instanceof Error ? error.message : 'DNS lookup failed.'; }
  };
  await Promise.all([dns(), (async () => { try { progress?.('Reading DMARC policy context'); report.dmarc = await lookupDmarc(domain, resolverId, combined); } catch { signal?.throwIfAborted(); report.limits.push('DMARC context could not be completed.'); } })()]);
  if (report.state === 'FOUND' && report.entries[0].record.state === 'PUBLISHED') {
    const record = report.entries[0].record;
    if (inspectAssets && !combined.aborted) {
      progress?.('Inspecting referenced HTTPS assets');
      try { [report.logo, report.evidence] = await Promise.all([fetchBimiAsset('logo', record.logo, combined, parser), fetchBimiAsset('evidence', record.evidence, combined)]); }
      catch { signal?.throwIfAborted(); report.limits.push('Asset inspection stopped at the snapshot deadline.'); for (const [kind, url] of [['logo', record.logo], ['evidence', record.evidence]] as const) report[kind] = { ...asset(kind), url, state: url ? 'UNREADABLE' : 'NOT_PUBLISHED', note: 'Asset inspection did not complete before the snapshot deadline.' }; }
    }
    else { for (const [kind, url] of [['logo', record.logo], ['evidence', record.evidence]] as const) { report[kind] = { ...asset(kind), url, state: url ? 'NOT_REQUESTED' : 'NOT_PUBLISHED', note: url ? 'Asset inspection was not requested or the snapshot deadline was reached.' : 'No URL published.' }; } }
  }
  signal?.throwIfAborted(); if (timeout.aborted) report.limits.push('The 25-second snapshot deadline was reached.'); report.durationMs = Math.round(performance.now() - start); return report;
}
export function bimiAnalysis(report: BimiLookupReport) {
  const record = report.state === 'FOUND' ? report.entries[0]?.record : null, dm = report.dmarc, policy = dm?.selected?.record;
  const legacyPct = policy?.tags.find(tag => tag.name === 'pct')?.value;
  const enforced = !!policy && ['quarantine','reject'].includes(dm!.effective || '') && ['quarantine','reject'].includes(policy.subdomain) && !policy.testing && (legacyPct === undefined || legacyPct === '100');
  const checks: { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'FAIL' | 'INFO' }[] = [
    { label: 'BIMI assertion', detail: report.note, state: report.state === 'FOUND' ? 'PASS' : report.state === 'INVALID' || report.state === 'MULTIPLE' ? 'FAIL' : 'REVIEW' },
    { label: 'Publication intent', detail: record?.state === 'DECLINED' ? 'This selector explicitly declines logo publication.' : record ? 'Logo URL ' + (record.logo ? 'published' : 'absent') + '; evidence URL ' + (record.evidence ? 'published.' : 'absent.') : 'No single usable assertion selected.', state: 'INFO' },
    { label: 'DMARC policy context', detail: policy ? 'Policy at ' + dm!.policyDomain + '; requested treatment ' + (dm!.effective || 'unresolved') + '; sp=' + policy.subdomain + '. ' + (enforced ? 'This snapshot has enforcement-oriented settings; organizational-domain coverage and actual message authentication are not established.' : 'Review monitoring, testing, subdomain coverage or legacy percentage settings before BIMI rollout.') : 'No usable DMARC policy selected in this snapshot.', state: enforced ? 'PASS' : 'REVIEW' },
    { label: 'Logo retrieval / preflight', detail: report.logo.note + (report.logo.svg ? ' Preflight: ' + report.logo.svg.state + '. Full SVG Tiny P/S schema validation is not performed.' : ''), state: report.logo.svg?.state === 'PREFLIGHT_PASS' ? 'PASS' : report.logo.state === 'INVALID' ? 'FAIL' : 'REVIEW' },
    { label: 'Evidence document', detail: report.evidence.note, state: 'INFO' },
    { label: 'Mailbox display', detail: 'Not verified. Providers apply their own evidence, reputation, message-authentication and display requirements. A successful DNS or asset check does not guarantee a logo.', state: 'INFO' },
  ];
  if (report.evidence.certificate) {
    const cert = report.evidence.certificate;
    checks.push({ label: 'Certificate date window', detail: cert.notBefore + ' to ' + cert.notAfter + '; ' + cert.dateStatus + '. The device clock is used; a current date window is not a trust validation.', state: cert.dateStatus === 'within' ? 'INFO' : 'REVIEW' });
  }
  checks.push({ label: 'Query scope', detail: report.hosts.length + ' BIMI TXT query/queries; ' + (report.dmarc?.hosts.length || 0) + ' DMARC-context queries. PDF record tables contain the BIMI answers; JSON includes the DMARC trace.', state: 'INFO' });
  return { checks, badge: record?.state === 'DECLINED' ? 'DECLINED' : report.state === 'FOUND' ? 'DNS SNAPSHOT' : 'REVIEW BIMI', summary: 'BIMI selector, asset and DMARC-context snapshot. Brand ownership and mailbox display are not verified.', tips: [
    'Publish one intended BIMI assertion for the selector used by your outbound messages. Only the requested selector/domain is inspected here.',
    'Use a square SVG Tiny P/S logo and confirm DMARC enforcement across the organizational domain and subdomains. Validate actual mail separately.',
    "Confirm your provider's VMC/CMC requirements. Certificate decoding does not validate trust, logo ownership, revocation or the embedded mark.",
    'If an asset is unreadable here, inspect its public HTTPS hosting and CORS settings. Browser restrictions are not evidence that the endpoint is offline.',
  ] };
}
export function bimiReportCsv(report: BimiLookupReport): string {
  return dnsCsv([
    ['XcellHost BIMI snapshot', report.domain, report.selector, report.checkedAt, report.resolver],
    ['Query hostname', 'Owner', 'State', 'TTL seconds', 'TXT value', 'Errors', 'Warnings'],
    ...report.entries.map(entry => [report.hostname, entry.owner, entry.record.state, String(entry.ttl), entry.value, entry.record.errors.join(' '), entry.record.warnings.join(' ')]),
    [], ['Asset', 'URL', 'Read status', 'Bytes', 'Details'], ...[report.logo, report.evidence].map(asset => [asset.kind, asset.url, asset.state, String(asset.bytes), asset.note]),
    [], ['Diagnostic', 'State', 'Detail'], ...bimiAnalysis(report).checks.map(check => [check.label, check.state, check.detail]),
  ]);
}
