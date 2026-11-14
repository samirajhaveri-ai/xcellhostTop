import { DNS_LOOKUP_RESOLVERS, DnsResolverId, DnsLookupRecord, normalizeDnsDomain } from './dns-lookup';
import { dnsCsv, DnsExportReport } from './dns-report-export';

interface WireRecord { name: string; type: number; TTL: number; data: string; }
export interface DnssecResponse { Status: number; AD?: boolean; CD?: boolean; TC?: boolean; Answer?: WireRecord[]; Authority?: WireRecord[]; Comment?: string; }
export interface DnssecQuery {
  name: string; type: 'A' | 'SOA' | 'DNSKEY' | 'DS'; checkingDisabled: boolean;
  status: number | null; authenticated: boolean; records: (DnsLookupRecord & { section: 'Answer' | 'Authority' })[];
  raw?: DnssecResponse; error?: string;
}
export interface DnssecKey { flags: number; protocol: number; algorithm: number; publicKey: string; keyTag: number | null; zoneKey: boolean; secureEntry: boolean; revoked: boolean; }
export interface DnssecDs { keyTag: number; algorithm: number; digestType: number; digest: string; }
export interface DnssecSignature { covered: string; algorithm: number; labels: number; originalTtl: number; keyTag: number; signer: string; inception: string; expiration: string; timing: 'CURRENT' | 'EXPIRED' | 'NOT_YET' | 'UNKNOWN'; }
export interface DnssecEntry<T> { name: string; ttl: number; rawValue: string; parsed: T | null; diagnostic: boolean; }
export interface DnssecDsEntry extends DnssecEntry<DnssecDs> { match: 'MATCH' | 'NO_MATCH' | 'UNSUPPORTED' | 'NOT_CHECKED' | 'UNDECODED'; }
export interface DnssecReport {
  domain: string; zone: string | null; resolver: string; checkedAt: string; durationMs: number;
  queries: DnssecQuery[]; keys: DnssecEntry<DnssecKey>[]; delegations: DnssecDsEntry[]; signatures: DnssecEntry<DnssecSignature>[];
  outcome: 'VALIDATED' | 'UNSIGNED' | 'INCOMPLETE' | 'SUSPECTED_FAILURE' | 'NXDOMAIN' | 'INDETERMINATE';
}
const names: Record<number, string> = { 1: 'A', 2: 'NS', 5: 'CNAME', 6: 'SOA', 28: 'AAAA', 39: 'DNAME', 43: 'DS', 46: 'RRSIG', 47: 'NSEC', 48: 'DNSKEY', 50: 'NSEC3' };
const cleanName = (name: string) => name.toLowerCase().replace(/\.$/, '');
const validName = (name: string) => name === '.' || name.length <= 254 && cleanName(name).split('.').every(label => /^[a-z0-9_](?:[a-z0-9_-]{0,61}[a-z0-9_])?$/i.test(label));
const uint = (value: string, max: number) => /^\d+$/.test(value) && Number(value) <= max;
const base64 = (value: string) => value.length > 0 && value.length <= 8192 && /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/.test(value);
const fields = (raw: string) => raw.replace(/[()]/g, ' ').trim().split(/\s+/);
function keyBytes(key: Pick<DnssecKey, 'flags' | 'protocol' | 'algorithm' | 'publicKey'>): Uint8Array<ArrayBuffer> {
  const bytes = Uint8Array.from(atob(key.publicKey), char => char.charCodeAt(0));
  return new Uint8Array([key.flags >>> 8, key.flags & 255, key.protocol, key.algorithm, ...bytes]);
}
export function parseDnssecKey(raw: string): DnssecKey | null {
  const [flags, protocol, algorithm, ...parts] = fields(raw); const publicKey = parts.join('');
  if (!uint(flags || '', 65535) || !uint(protocol || '', 255) || !uint(algorithm || '', 255) || !base64(publicKey)) return null;
  const key = { flags: +flags, protocol: +protocol, algorithm: +algorithm, publicKey };
  const bytes = keyBytes(key); let sum = 0;
  for (let i = 0; i < bytes.length; i++) sum += i & 1 ? bytes[i] : bytes[i] << 8;
  sum += (sum >>> 16) & 65535;
  // The historical algorithm-1 tag is intentionally not interpreted here.
  return { ...key, keyTag: key.algorithm === 1 ? null : sum & 65535, zoneKey: !!(key.flags & 256), secureEntry: !!(key.flags & 1), revoked: !!(key.flags & 128) };
}
export function parseDnssecDs(raw: string): DnssecDs | null {
  const [tag, algorithm, digestType, ...parts] = fields(raw), digest = parts.join('').toUpperCase();
  if (!uint(tag || '', 65535) || !uint(algorithm || '', 255) || !uint(digestType || '', 255) || !/^(?:[0-9A-F]{2})+$/.test(digest) || digest.length > 256) return null;
  const length = ({ 1: 40, 2: 64, 4: 96 } as Record<number, number>)[+digestType];
  if (length && digest.length !== length) return null;
  return { keyTag: +tag, algorithm: +algorithm, digestType: +digestType, digest };
}
function dnsTime(value: string): number | null {
  if (/^\d{1,10}$/.test(value) && +value <= 4294967295) return +value;
  if (!/^\d{14}$/.test(value)) return null;
  const date = new Date(value.slice(0, 4) + '-' + value.slice(4, 6) + '-' + value.slice(6, 8) + 'T' + value.slice(8, 10) + ':' + value.slice(10, 12) + ':' + value.slice(12, 14) + 'Z');
  if (!Number.isFinite(date.getTime()) || date.toISOString().replace(/[-:T]/g, '').slice(0, 14) !== value) return null;
  return (date.getTime() / 1000) >>> 0;
}
export function parseDnssecSignature(raw: string, now = Date.now()): DnssecSignature | null {
  const [covered, algorithm, labels, ttl, exp, inc, tag, signer, ...signature] = fields(raw);
  if (!/^(?:[A-Z][A-Z0-9]*|\d{1,5})$/i.test(covered || '') || !uint(algorithm || '', 255) || !uint(labels || '', 255) || !uint(ttl || '', 4294967295) || !uint(tag || '', 65535) || !validName(signer || '') || !base64(signature.join(''))) return null;
  const end = dnsTime(exp), start = dnsTime(inc); if (end === null || start === null) return null;
  const epoch = Math.floor(now / 1000), clock = epoch >>> 0, span = (end - start) >>> 0;
  const timing = span >= 2147483648 ? 'UNKNOWN' : ((clock - start) >>> 0) <= span ? 'CURRENT' : ((clock - start) | 0) < 0 ? 'NOT_YET' : 'EXPIRED';
  const iso = (time: number) => new Date((epoch + ((time - clock) | 0)) * 1000).toISOString();
  return { covered: names[+covered] || covered.toUpperCase(), algorithm: +algorithm, labels: +labels, originalTtl: +ttl, keyTag: +tag, signer: cleanName(signer) || '.', inception: iso(start), expiration: iso(end), timing };
}
export function dnssecAlgorithm(value: number): string {
  return ({ 1: 'RSA/MD5 (legacy)', 5: 'RSA/SHA-1', 7: 'RSA/SHA-1 NSEC3', 8: 'RSA/SHA-256', 10: 'RSA/SHA-512', 13: 'ECDSA P-256 / SHA-256', 14: 'ECDSA P-384 / SHA-384', 15: 'Ed25519', 16: 'Ed448' } as Record<number, string>)[value] || 'Algorithm ' + value;
}
/** Compare the DS digest with canonical owner-name + DNSKEY RDATA, not just a key-tag match. */
export async function dnssecDigest(owner: string, key: DnssecKey, digestType: number): Promise<string | null> {
  const algorithm = ({ 1: 'SHA-1', 2: 'SHA-256', 4: 'SHA-384' } as Record<number, string>)[digestType];
  if (!algorithm || key.algorithm === 1 || !validName(owner) || !globalThis.crypto?.subtle) return null;
  const wire: number[] = [];
  if (owner !== '.') for (const label of cleanName(owner).split('.')) { wire.push(label.length, ...Array.from(label, char => char.charCodeAt(0))); }
  wire.push(0); const data = new Uint8Array([...wire, ...keyBytes(key)]);
  try { return Array.from(new Uint8Array(await crypto.subtle.digest(algorithm, data)), byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase(); }
  catch { return null; }
}
async function query(name: string, type: DnssecQuery['type'], resolver: DnsResolverId, checkingDisabled: boolean, signal: AbortSignal): Promise<DnssecQuery> {
  const result: DnssecQuery = { name, type, checkingDisabled, status: null, authenticated: false, records: [] };
  try {
    signal.throwIfAborted(); const provider = DNS_LOOKUP_RESOLVERS.find(item => item.id === resolver)!;
    const url = new URL(provider.endpoint); url.searchParams.set('name', name); url.searchParams.set('type', type); url.searchParams.set('do', '1'); url.searchParams.set('cd', checkingDisabled ? '1' : '0');
    if (resolver === 'google') url.searchParams.set('edns_client_subnet', '0.0.0.0/0');
    const response = await fetch(url, { headers: { Accept: 'application/dns-json' }, cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer', signal: AbortSignal.any([signal, AbortSignal.timeout(10000)]) });
    if (!response.ok) throw new Error('Resolver returned HTTP ' + response.status + '.');
    const raw: DnssecResponse = await response.json();
    if (!raw || !Number.isInteger(raw.Status) || raw.Status < 0 || raw.Status > 65535) throw new Error('The resolver returned an invalid DNS response.');
    result.status = raw.Status; result.raw = raw;
    result.authenticated = raw.AD === true && !checkingDisabled && raw.CD !== true && !raw.TC && [0, 3].includes(raw.Status);
    for (const section of ['Answer', 'Authority'] as const) {
      const records = raw[section]; if (records !== undefined && !Array.isArray(records)) throw new Error('The resolver returned an invalid record section.');
      for (const record of (records || []).slice(0, 256)) {
        if (!record || typeof record.name !== 'string' || typeof record.data !== 'string' || record.data.length > 16384 || !Number.isInteger(record.type) || !Number.isFinite(record.TTL) || record.TTL < 0) continue;
        result.records.push({ name: cleanName(record.name) || '.', type: names[record.type] || 'TYPE' + record.type, ttl: record.TTL, value: record.data, section });
      }
    }
    if (![0, 3].includes(raw.Status)) result.error = 'Resolver reported ' + (({ 1: 'FORMERR', 2: 'SERVFAIL', 5: 'REFUSED' } as Record<number, string>)[raw.Status] || 'DNS error') + ' (' + raw.Status + ').';
    if (raw.TC) result.error = 'The DNS response is truncated. Retry with another resolver.';
  } catch (error) {
    if (signal.aborted) throw error;
    result.authenticated = false; result.status = null; result.records = [];
    result.error = error instanceof Error && error.name === 'TimeoutError' ? 'Resolver request timed out. Please retry.' : error instanceof TypeError ? 'Could not reach the DNS resolver. Check your connection or choose another resolver.' : error instanceof Error ? error.message : 'DNS request failed.';
  }
  return result;
}
export async function checkDnssec(input: string, resolver: DnsResolverId, signal?: AbortSignal, progress?: (message: string) => void): Promise<DnssecReport> {
  const domain = normalizeDnsDomain(input), provider = DNS_LOOKUP_RESOLVERS.find(item => item.id === resolver);
  if (!provider) throw new Error('Choose a supported DNS resolver.');
  signal?.throwIfAborted(); const deadline = AbortSignal.timeout(30000), combined = signal ? AbortSignal.any([signal, deadline]) : deadline;
  const started = performance.now(), queries: DnssecQuery[] = [];
  progress?.('Checking the answer and discovering its DNS zone...');
  async function inspect(name: string, type: DnssecQuery['type']): Promise<DnssecQuery> {
    const checked = await query(name, type, resolver, false, combined); queries.push(checked);
    if (checked.status === 2) { const diagnostic = await query(name, type, resolver, true, combined); queries.push(diagnostic); return diagnostic; }
    return checked;
  }
  const [answer, soa] = await Promise.all([inspect(domain, 'A'), inspect(domain, 'SOA')]);
  const zoneCandidates = soa.records.filter(record => record.type === 'SOA' && (domain === record.name || domain.endsWith('.' + record.name))).map(record => record.name);
  // A signer name is useful evidence when a resolver returns no SOA, but never guess the registrable domain.
  if (!zoneCandidates.length) for (const record of answer.records.filter(record => record.type === 'RRSIG')) {
    const signature = parseDnssecSignature(record.value); if (signature && signature.signer !== '.' && (domain === signature.signer || domain.endsWith('.' + signature.signer))) zoneCandidates.push(signature.signer);
  }
  const zone = zoneCandidates.sort((a, b) => b.length - a.length)[0] || null;
  let keyQuery: DnssecQuery | undefined, dsQuery: DnssecQuery | undefined;
  if (zone) { progress?.('Inspecting zone keys, delegation digests and signatures...'); [keyQuery, dsQuery] = await Promise.all([inspect(zone, 'DNSKEY'), inspect(zone, 'DS')]); }
  combined.throwIfAborted(); const checkedAt = new Date().toISOString();
  const keys: DnssecEntry<DnssecKey>[] = (keyQuery?.records || []).filter(record => record.type === 'DNSKEY' && record.name === zone).slice(0, 64).map(record => ({ name: record.name, ttl: record.ttl, rawValue: record.value, parsed: parseDnssecKey(record.value), diagnostic: !!keyQuery?.checkingDisabled }));
  const delegations: DnssecDsEntry[] = (dsQuery?.records || []).filter(record => record.type === 'DS' && record.name === zone).slice(0, 64).map(record => ({ name: record.name, ttl: record.ttl, rawValue: record.value, parsed: parseDnssecDs(record.value), diagnostic: !!dsQuery?.checkingDisabled, match: 'NOT_CHECKED' }));
  progress?.('Comparing DS digests with the published DNSKEY records...');
  for (const entry of delegations) {
    combined.throwIfAborted(); const ds = entry.parsed;
    if (!ds) { entry.match = 'UNDECODED'; continue; }
    if (![1, 2, 4].includes(ds.digestType) || ds.algorithm === 1) { entry.match = 'UNSUPPORTED'; continue; }
    if (!keyQuery || keyQuery.error || ![0, 3].includes(keyQuery.status ?? -1)) continue;
    const candidates = keys.flatMap(key => key.parsed && key.parsed.protocol === 3 && key.parsed.zoneKey && !key.parsed.revoked && key.parsed.keyTag === ds.keyTag && key.parsed.algorithm === ds.algorithm ? [key.parsed] : []);
    const digests = await Promise.all(candidates.map(key => dnssecDigest(zone!, key, ds.digestType)));
    entry.match = digests.some(digest => digest === ds.digest) ? 'MATCH' : digests.some(digest => digest === null) ? 'NOT_CHECKED' : keys.some(key => !key.parsed) ? 'NOT_CHECKED' : 'NO_MATCH';
  }
  const signatures: DnssecEntry<DnssecSignature>[] = []; const seen = new Set<string>();
  for (const response of queries) for (const record of response.records.filter(record => record.type === 'RRSIG')) {
    const id = record.name + '|' + record.value; if (seen.has(id)) continue; seen.add(id);
    signatures.push({ name: record.name, ttl: record.ttl, rawValue: record.value, parsed: parseDnssecSignature(record.value, Date.parse(checkedAt)), diagnostic: response.checkingDisabled });
  }
  combined.throwIfAborted(); const checked = queries.find(item => item.type === 'A' && !item.checkingDisabled)!;
  const failedComparison = checked.status === 2 && [0, 3].includes(answer.status ?? -1) && answer.checkingDisabled;
  const zoneSignatures = signatures.some(entry => entry.parsed?.signer === zone || !entry.parsed && entry.name === zone);
  const unsigned = checked.status === 0 && !checked.error && !!zone && !!keyQuery && !!dsQuery && !keyQuery.error && !dsQuery.error && keyQuery.status === 0 && dsQuery.status === 0 && !keys.length && !delegations.length && !zoneSignatures;
  const outcome: DnssecReport['outcome'] = checked.authenticated ? 'VALIDATED' : failedComparison ? 'SUSPECTED_FAILURE' : checked.status === 3 ? 'NXDOMAIN' : checked.error || !zone ? 'INDETERMINATE' : unsigned ? 'UNSIGNED' : keys.length || delegations.length || signatures.length ? 'INCOMPLETE' : 'INDETERMINATE';
  return { domain, zone, resolver: provider.name, checkedAt, durationMs: Math.round(performance.now() - started), queries, keys, delegations, signatures, outcome };
}
export function dnssecAnalysis(report: DnssecReport) {
  const primary = report.queries.find(item => item.type === 'A' && !item.checkingDisabled)!;
  const descriptions = {
    VALIDATED: primary.status === 3 ? ['Authenticated denial of existence', 'The resolver authenticated an NXDOMAIN response. This name does not exist; its absence is protected by DNSSEC.'] : ['Validated by resolver', 'The selected resolver set the AD flag for the queried A response. Its configured DNSSEC validation authenticated this answer.'],
    UNSIGNED: ['No signing records observed', 'This response was not authenticated. No zone DNSKEY or DS records were returned in these successful queries.'],
    INCOMPLETE: ['Signing evidence, answer not authenticated', 'DNSSEC-related records were observed, but the queried answer was not authenticated. Presence alone does not establish a working trust chain.'],
    SUSPECTED_FAILURE: ['DNSSEC validation failure suspected', 'The validating request returned SERVFAIL while a checking-disabled retry returned a DNS answer. This suggests a validation problem; the retry is diagnostic data, not trusted output.'],
    NXDOMAIN: ['Name does not exist', 'The resolver returned NXDOMAIN without an authenticated answer. This is different from a DNSSEC validation failure.'],
    INDETERMINATE: ['Check could not establish a result', 'A request failed, the response was incomplete, or the zone could not be identified. Retry or compare another resolver.'],
  };
  const [title, summary] = descriptions[report.outcome];
  const warnings = report.queries.filter(item => !item.checkingDisabled && item.error);
  const mismatches = report.delegations.filter(entry => entry.match === 'NO_MATCH');
  const timingIssues = report.signatures.filter(entry => entry.parsed && entry.parsed.timing !== 'CURRENT');
  const malformed = [...report.keys, ...report.delegations, ...report.signatures].filter(entry => !entry.parsed).length;
  const diagnostics: { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'INFO' | 'FAIL' }[] = [
    { label: 'Resolver validation', detail: title + '. ' + summary, state: report.outcome === 'VALIDATED' ? 'PASS' : report.outcome === 'SUSPECTED_FAILURE' ? 'FAIL' : 'REVIEW' },
    { label: 'Zone discovery', detail: report.zone ? 'Zone ' + report.zone + ' identified from SOA or signer evidence. This is not an assumption based on the last two labels.' : 'No ancestor SOA or relevant signer name identified the input zone. Zone-level checks were not guessed.', state: report.zone ? 'PASS' : 'REVIEW' },
    { label: 'DNSKEY records', detail: report.keys.length + ' key(s) returned; ' + report.keys.filter(entry => entry.parsed?.zoneKey && entry.parsed.protocol === 3 && !entry.parsed.revoked).length + ' decoded protocol-3, non-revoked zone key(s). SEP is a key flag, not proof of a trusted delegation.', state: report.keys.length ? 'INFO' : 'REVIEW' },
    { label: 'DS digest comparison', detail: report.delegations.length ? report.delegations.filter(entry => entry.match === 'MATCH').length + ' match(es); ' + mismatches.length + ' unmatched; ' + report.delegations.filter(entry => !['MATCH', 'NO_MATCH'].includes(entry.match)).length + ' undecoded, unsupported or not checked. A digest match alone does not validate the chain.' : 'No DS record returned for the identified zone, or the query could not be completed.', state: mismatches.length ? 'REVIEW' : report.delegations.some(entry => entry.match === 'MATCH') ? 'PASS' : 'INFO' },
    { label: 'Signature timing', detail: report.signatures.length ? report.signatures.length + ' distinct signature(s); ' + timingIssues.length + ' outside the current time window or ambiguous. Timing is checked using your device clock; signatures are verified by the resolver.' : 'No RRSIG was returned in the captured answer or authority sections.', state: timingIssues.length ? 'REVIEW' : report.signatures.length ? 'PASS' : 'INFO' },
    { label: 'Record decoding', detail: malformed ? malformed + ' record(s) could not be decoded; original values are retained below.' : 'Returned DNSSEC record presentations were decoded. This is not an independent signature verification.', state: malformed ? 'REVIEW' : 'INFO' },
    { label: 'Query completeness', detail: warnings.length ? warnings.map(item => item.type + ' ' + item.name + ': ' + item.error).join(' | ') : 'All captured validating requests completed without a reported DNS or transport error.', state: warnings.length ? 'REVIEW' : 'PASS' },
    { label: 'Validation scope', detail: 'Public recursive-resolver snapshot, with DNSSEC data requested (DO=1) and validation enabled (CD=0). SERVFAIL retries use CD=1 only for diagnosis. This browser does not independently traverse every parent delegation or cryptographically verify RRSIGs.', state: 'INFO' },
  ];
  const recommendations = [
    report.outcome === 'VALIDATED' ? 'Keep DNS host signing and registrar DS records coordinated during key rollovers. Recheck after changes.' : report.outcome === 'SUSPECTED_FAILURE' ? 'Compare another resolver, then review signing, DS records and signature validity with the DNS host and registrar. SERVFAIL can have other causes.' : report.outcome === 'UNSIGNED' ? 'If you want DNSSEC, enable signing at your DNS host and publish its supplied DS records through your registrar. Recheck after the update.' : 'Review the query log and compare another resolver before changing signing or delegation records.',
    'DNSKEY and DS can change between requests during a rollover. A key tag is not unique: this tool compares supported DS digests as well as tags and algorithms.',
    'DNSSEC authenticates DNS data; it does not encrypt DNS, validate a TLS certificate or prove that a website is safe. No mail, port or website health tests are performed here.',
  ];
  return { title, summary, diagnostics, recommendations };
}
export function dnssecReportCsv(report: DnssecReport): string {
  const rows: (string | number)[][] = [['Domain', 'Zone', 'Query name', 'Query type', 'Checking disabled', 'DNS status', 'Authenticated', 'Section', 'Owner', 'Type', 'TTL (seconds)', 'Original value', 'Detail', 'Outcome', 'Resolver', 'Checked at (UTC)']];
  for (const query of report.queries) for (const record of query.records.length ? query.records : [null]) rows.push([report.domain, report.zone || '', query.name, query.type, query.checkingDisabled ? 'Yes' : 'No', query.status ?? 'Request failed', query.authenticated ? 'Yes' : 'No', record?.section || '', record?.name || '', record?.type || '', record?.ttl ?? '', record?.value || '', query.error || '', report.outcome, report.resolver, report.checkedAt]);
  return dnsCsv(rows);
}
export function dnssecExportReport(report: DnssecReport): DnsExportReport {
  return { domain: report.domain, type: 'DNSSEC', resolver: report.resolver, checkedAt: report.checkedAt, durationMs: report.durationMs, hosts: report.queries.map(query => ({ name: query.type + ' ' + query.name + (query.checkingDisabled ? ' (CD=1 diagnostic)' : ' (CD=0)'), status: query.error ? 'ERROR' : query.status === 3 ? 'NXDOMAIN' : 'NOERROR', authenticated: query.authenticated, error: query.error, records: query.records.map(record => ({ ...record, name: record.name + ' [' + record.section + ']' })) })) };
}
