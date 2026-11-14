import 'reflect-metadata';
import { PublicKey } from '@peculiar/x509';
import { DNS_LOOKUP_RESOLVERS, DnsHostResult, DnsLookupReport, DnsResolverId, lookupDns, normalizeDnsDomain } from './dns-lookup';
import { readTxtValue } from './txt-lookup';
import { dnsCsv } from './dns-report-export';

export const DKIM_COMMON_SELECTORS = ['default', 'google', 'selector1', 'selector2', 'k1', 'k2', 's1', 's2'] as const;
export const DKIM_LIMITS = { queries: 30, aliases: 5, timeoutMs: 20000, recordLength: 32768, records: 50 } as const;
export interface DkimTag { name: string; value: string; meaning: string; }
export interface DkimKey {
  tags: DkimTag[]; errors: string[]; warnings: string[]; algorithm: string; bits: number | null; keyFormat: string;
  status: 'DECODED' | 'REVOKED' | 'INVALID' | 'UNSUPPORTED'; testing: boolean; strictIdentity: boolean; publicKey: string;
}
export interface DkimEntry { owner: string; value: string; raw: string; ttl: number; chunks: number; parsed: boolean; candidate: boolean; key: DkimKey | null; }
export interface DkimSelectorResult {
  selector: string; hostname: string; owner: string; entries: DkimEntry[]; aliases: { name: string; target: string }[];
  state: 'KEY_RECORDS' | 'NOT_FOUND' | 'ERROR' | 'LOOP' | 'LIMIT'; note: string; queryIndexes: number[];
}
export interface DkimLookupReport extends DnsLookupReport { selector: string; sweep: boolean; selectors: DkimSelectorResult[]; queryCount: number; limits: string[]; }
export interface DkimCheck { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'INFO' | 'FAIL'; }
const meanings: Record<string, string> = {
  v: 'Key record version; when present, it must be DKIM1 and the first tag.',
  k: 'Public-key algorithm; rsa is the default when this tag is absent.',
  p: 'Base64 public-key data. An empty value revokes this key.',
  h: 'Permitted hash algorithms. SHA-1 is historic for DKIM.',
  s: 'Permitted services; email or * includes email use.',
  t: 'Flags: y is testing mode; s restricts the identity domain relationship.',
  n: 'Publisher notes; informational text, not a verification result.',
};
const dnsName = (value: string) => value.length <= 253 && value.includes('.') && /^[a-z0-9_.-]+$/i.test(value) && value.split('.').every(label => /^[a-z0-9_](?:[a-z0-9_-]{0,61}[a-z0-9_])?$/i.test(label));
export function normalizeDkimSelector(input: string): string {
  const selector = input.trim().toLowerCase();
  if (!selector || selector.length > 253 || !selector.split('.').every(label => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label))) throw new Error('Enter the selector from the DKIM-Signature s= tag, such as google or selector1. Do not include the domain or _domainkey.');
  return selector;
}
function base64Bytes(value: string): Uint8Array {
  const compact = value.replace(/[ \t]/g, '');
  if (!compact || !/^[A-Za-z0-9+/]+={0,2}$/.test(compact) || compact.length % 4 === 1 || compact.includes('=') && compact.length % 4 !== 0) throw new Error('Public-key data is not valid Base64.');
  const padded = compact + '='.repeat((4 - compact.length % 4) % 4);
  const decoded = atob(padded); if (btoa(decoded) !== padded) throw new Error('Public-key Base64 has non-canonical padding bits.');
  return Uint8Array.from(decoded, character => character.charCodeAt(0));
}
function derHeader(bytes: Uint8Array, offset = 0): { tag: number; start: number; end: number } {
  if (offset + 2 > bytes.length) throw new Error('Truncated public-key encoding.');
  const tag = bytes[offset]; let length = bytes[offset + 1], start = offset + 2;
  if (length & 128) {
    const count = length & 127; if (!count || count > 3 || start + count > bytes.length || !bytes[start]) throw new Error('Invalid DER length.');
    length = 0; for (let index = 0; index < count; index++) length = length * 256 + bytes[start++];
    if (length < 128) throw new Error('Non-canonical DER length.');
  }
  if (start + length > bytes.length) throw new Error('Truncated public-key data.');
  return { tag, start, end: start + length };
}
function der(tag: number, body: Uint8Array): Uint8Array<ArrayBuffer> {
  const length = body.length, header = length < 128 ? [tag, length] : length < 256 ? [tag, 0x81, length] : [tag, 0x82, length >>> 8, length & 255];
  return Uint8Array.from([...header, ...body]);
}
/** RSA p= data is seen as either PKCS#1 or SubjectPublicKeyInfo in deployments. */
function rsaDetails(bytes: Uint8Array): { bits: number; format: string } {
  const outer = derHeader(bytes); if (outer.tag !== 0x30 || outer.end !== bytes.length) throw new Error('Expected exactly one DER-encoded RSA public key.');
  let rsa = bytes, format = 'RSA PKCS#1';
  if (bytes[outer.start] === 0x30) {
    const key = new PublicKey(new Uint8Array(bytes), { berOptions: { maxDepth: 16, maxNodes: 100, maxContentLength: DKIM_LIMITS.recordLength } });
    if (key.algorithm.name !== 'RSASSA-PKCS1-v1_5') throw new Error('The decoded public key is not an RSA signing key.');
    const algorithm = derHeader(bytes, outer.start), bitString = derHeader(bytes, algorithm.end);
    if (bitString.tag !== 3 || bitString.end !== outer.end || bytes[bitString.start] !== 0) throw new Error('Invalid RSA SubjectPublicKeyInfo.');
    rsa = bytes.slice(bitString.start + 1, bitString.end); format = 'RSA SubjectPublicKeyInfo';
  }
  const sequence = derHeader(rsa), modulus = derHeader(rsa, sequence.start), exponent = derHeader(rsa, modulus.end);
  if (sequence.tag !== 0x30 || sequence.end !== rsa.length || modulus.tag !== 2 || exponent.tag !== 2 || exponent.end !== sequence.end) throw new Error('Expected an RSA modulus and public exponent.');
  const positiveInteger = (field: { start: number; end: number }) => {
    let value = rsa.slice(field.start, field.end);
    if (!value.length || value[0] & 128 || value.length > 1 && value[0] === 0 && !(value[1] & 128)) throw new Error('Invalid RSA integer encoding.');
    if (value[0] === 0) value = value.slice(1);
    if (!value.length) throw new Error('RSA public values cannot be zero.');
    return value;
  };
  const n = positiveInteger(modulus), e = positiveInteger(exponent);
  if (!(n.at(-1)! & 1) || !(e.at(-1)! & 1) || e.length === 1 && e[0] < 3) throw new Error('Invalid RSA public values.');
  // Feed both encodings through the existing ASN.1 key parser, without importing a private key.
  if (format === 'RSA PKCS#1') {
    const algorithm = Uint8Array.from([0x30,0x0d,0x06,0x09,0x2a,0x86,0x48,0x86,0xf7,0x0d,0x01,0x01,0x01,0x05,0x00]);
    new PublicKey(der(0x30, Uint8Array.from([...algorithm, ...der(3, Uint8Array.from([0, ...rsa]))])), { berOptions: { maxDepth: 16, maxNodes: 100, maxContentLength: DKIM_LIMITS.recordLength } });
  }
  return { bits: (n.length - 1) * 8 + 32 - Math.clz32(n[0]), format };
}
export function parseDkimRecord(value: string): DkimKey {
  const result: DkimKey = { tags: [], errors: [], warnings: [], algorithm: 'rsa', bits: null, keyFormat: '', status: 'INVALID', testing: false, strictIdentity: false, publicKey: '' };
  if (value.length > DKIM_LIMITS.recordLength) { result.errors.push('Record exceeds this tool\'s 32 KiB parsing limit.'); return result; }
  const unfolded = value.replace(/\r\n(?=[ \t])/g, '');
  if (/[^\x20-\x7e\t]/.test(unfolded)) { result.errors.push('DKIM tags must use ASCII text with valid folding whitespace.'); return result; }
  const parts = unfolded.split(';'); if (!parts.at(-1)!.trim()) parts.pop();
  if (parts.length > 50) { result.errors.push('Record exceeds this tool\'s 50-tag parsing limit.'); return result; }
  const tags = new Map<string, string>();
  for (const part of parts) {
    const match = /^\s*([A-Za-z][A-Za-z0-9_]*)[ \t]*=[ \t]*([\x20-\x7e\t]*)$/.exec(part);
    if (!match) { result.errors.push('A tag is empty or does not use name=value syntax.'); continue; }
    const name = match[1], tagValue = match[2].trim();
    if (tags.has(name)) { result.errors.push('Duplicate tag: ' + name); continue; }
    tags.set(name, tagValue); result.tags.push({ name, value: tagValue, meaning: meanings[name] || 'Unrecognized tag; ignored by DKIM.' });
    if (!meanings[name]) result.warnings.push('Unrecognized tag ' + name + ' is not interpreted. Tag names are case-sensitive.');
  }
  if (tags.has('v') && (tags.get('v') !== 'DKIM1' || result.tags[0]?.name !== 'v')) result.errors.push('When present, v=DKIM1 must be the first tag.');
  if (!tags.has('p')) result.errors.push('The required p= public-key tag is missing.');
  result.algorithm = tags.get('k') ?? 'rsa';
  if (!/^[A-Za-z][A-Za-z0-9_-]*$/.test(result.algorithm)) result.errors.push('The k= key type is empty or malformed.');
  for (const name of ['h','s','t']) if (tags.has(name) && !new RegExp(name === 's' ? '^(?:\\*|[A-Za-z][A-Za-z0-9_-]*)(?:[ \\t]*:[ \\t]*(?:\\*|[A-Za-z][A-Za-z0-9_-]*))*$' : '^[A-Za-z][A-Za-z0-9_-]*(?:[ \\t]*:[ \\t]*[A-Za-z][A-Za-z0-9_-]*)*$').test(tags.get(name)!)) result.errors.push('The ' + name + '= list is empty or malformed.');
  const flags = (tags.get('t') || '').split(':').map(flag => flag.trim());
  result.testing = flags.includes('y'); result.strictIdentity = flags.includes('s');
  if (result.testing) result.warnings.push('Testing flag t=y is published; this is not proof that signing works.');
  if (flags.some(flag => flag && !['y','s'].includes(flag))) result.warnings.push('Unrecognized t= flags are not interpreted.');
  const hashes = tags.get('h')?.split(':').map(hash => hash.trim());
  if (hashes && !hashes.includes('sha256')) result.warnings.push('The h= list does not permit sha256; modern DKIM uses SHA-256.');
  if (hashes?.includes('sha1')) result.warnings.push('SHA-1 is historic and must not be used for DKIM signing or verification.');
  const services = tags.get('s')?.split(':').map(service => service.trim());
  if (services && !services.includes('*') && !services.includes('email')) result.warnings.push('The s= service list does not include email.');
  result.publicKey = (tags.get('p') || '').replace(/[ \t]/g, '');
  if (result.errors.length) return result;
  if (!result.publicKey) { result.status = 'REVOKED'; return result; }
  let bytes: Uint8Array;
  try { bytes = base64Bytes(result.publicKey); }
  catch { result.errors.push('The p= public-key value is not canonical Base64.'); return result; }
  if (!['rsa','ed25519'].includes(result.algorithm)) { result.status = 'UNSUPPORTED'; result.warnings.push('This key algorithm is not decoded by the tool.'); return result; }
  try {
    if (result.algorithm === 'ed25519') {
      if (bytes.length !== 32) throw new Error('An Ed25519 DKIM public key must contain exactly 32 raw bytes.');
      result.bits = 256; result.keyFormat = 'Raw Ed25519 public key (point not verified)';
    } else {
      const decoded = rsaDetails(bytes); result.bits = decoded.bits; result.keyFormat = decoded.format;
      if (decoded.bits < 1024) result.warnings.push('RSA key is below the 1024-bit minimum required by RFC 8301.');
      else if (decoded.bits < 2048) result.warnings.push('RSA key is below the 2048-bit size recommended by RFC 8301.');
    }
    result.status = 'DECODED';
  } catch (error) { result.errors.push(error instanceof Error ? error.message : 'The public key could not be decoded.'); }
  return result;
}
export async function lookupDkim(input: string, selectorInput: string, resolver: DnsResolverId, sweep = false, signal?: AbortSignal, progress?: (message: string) => void): Promise<DkimLookupReport> {
  signal?.throwIfAborted(); const domain = normalizeDnsDomain(input), start = performance.now();
  const resolverInfo = DNS_LOOKUP_RESOLVERS.find(item => item.id === resolver); if (!resolverInfo) throw new Error('Choose a supported DNS resolver.');
  const selector = selectorInput.trim() ? normalizeDkimSelector(selectorInput) : sweep ? '' : normalizeDkimSelector(selectorInput);
  const names = [...new Set([...(selector ? [selector] : []), ...(sweep ? DKIM_COMMON_SELECTORS : [])])];
  if (names.some(name => (name + '._domainkey.' + domain).length > 253)) throw new Error('The selector and domain together exceed the DNS hostname length limit.');
  const deadline = AbortSignal.timeout(DKIM_LIMITS.timeoutMs), combined = signal ? AbortSignal.any([signal, deadline]) : deadline;
  const hosts: DnsHostResult[] = [], limits = new Set<string>();
  const cache = new Map<string, Promise<{ host: DnsHostResult; index: number }>>();
  const query = (name: string): Promise<{ host: DnsHostResult; index: number } | null> => {
    signal?.throwIfAborted(); const existing = cache.get(name); if (existing) return existing;
    if (hosts.length >= DKIM_LIMITS.queries || deadline.aborted) { limits.add(deadline.aborted ? 'The 20-second deadline was reached.' : 'The 30-query limit was reached.'); return Promise.resolve(null); }
    const index = hosts.length; hosts.push({ name, status: 'ERROR', records: [], authenticated: false });
    const pending = (async () => {
      try { hosts[index] = (await lookupDns(name, 'TXT', resolver, false, combined)).hosts[0]; }
      catch (error) { signal?.throwIfAborted(); if (!deadline.aborted) throw error; limits.add('The 20-second deadline was reached.'); hosts[index] = { name, status: 'ERROR', records: [], authenticated: false, error: 'The snapshot deadline was reached.' }; }
      return { host: hosts[index], index };
    })(); cache.set(name, pending); return pending;
  };
  const results: DkimSelectorResult[] = names.map(name => ({ selector: name, hostname: name + '._domainkey.' + domain, owner: name + '._domainkey.' + domain, entries: [], aliases: [], state: 'NOT_FOUND', note: '', queryIndexes: [] }));
  const inspect = async (result: DkimSelectorResult) => {
    let name = result.hostname; const seen = new Set<string>();
    while (true) {
      signal?.throwIfAborted();
      const response = await query(name); signal?.throwIfAborted();
      if (!response) { result.state = 'LIMIT'; result.note = 'This selector was not fully checked because a snapshot limit was reached.'; return; }
      result.queryIndexes.push(response.index); const { host } = response;
      if (host.status === 'ERROR') { result.state = 'ERROR'; result.note = host.error || 'DNS request failed.'; return; }
      let followed = false;
      while (true) {
        if (seen.has(name)) { result.state = 'LOOP'; result.note = 'CNAME delegation loops back to a name already visited.'; return; }
        seen.add(name); result.owner = name;
        const aliases = host.records.filter(record => record.type === 'CNAME' && record.name.toLowerCase() === name);
        const text = host.records.filter(record => record.type === 'TXT' && record.name.toLowerCase() === name);
        if (aliases.length) {
          const targets = [...new Set(aliases.map(alias => alias.value.toLowerCase().replace(/\.$/, '')))];
          if (targets.length !== 1 || !dnsName(targets[0]) || text.length) { result.state = 'ERROR'; result.note = 'The DNS answer has ambiguous CNAME/TXT data or an invalid alias target.'; return; }
          if (result.aliases.length === DKIM_LIMITS.aliases) { result.state = 'LIMIT'; result.note = 'The five-alias delegation limit was reached.'; limits.add(result.note); return; }
          result.aliases.push({ name, target: targets[0] }); name = targets[0]; followed = true; continue;
        }
        if (text.length) {
          const unique = [...new Map(text.map(record => [record.value, record])).values()];
          for (const record of unique.slice(0, DKIM_LIMITS.records)) {
            const decoded = typeof record.value === 'string' && record.value.length <= DKIM_LIMITS.recordLength * 2 ? readTxtValue(record.value) : { value: '', chunks: [], parsed: false };
            const candidate = decoded.parsed && /(?:^|;)[ \t]*(?:v[ \t]*=[ \t]*DKIM|[pk][ \t]*=)/.test(decoded.value);
            result.entries.push({ owner: name, value: decoded.value, raw: record.value, ttl: record.ttl, chunks: decoded.chunks.length, parsed: decoded.parsed, candidate, key: candidate ? parseDkimRecord(decoded.value) : null });
          }
          result.state = result.entries.some(entry => entry.candidate) ? 'KEY_RECORDS' : 'NOT_FOUND';
          if (unique.length > DKIM_LIMITS.records || result.entries.some(entry => !entry.parsed)) result.note = 'Some TXT answers exceeded parsing limits or could not be decoded. Inspect the raw snapshot.';
          else if (result.state === 'NOT_FOUND') result.note = 'TXT answers were returned, but no DKIM-like key record was identified.';
          return;
        }
        if (followed && host.status === 'NOERROR') { seen.delete(name); break; }
        result.note = host.status === 'NXDOMAIN' ? 'NXDOMAIN: this selector hostname was not found.' : 'No DKIM key TXT record was returned for this selector.'; return;
      }
    }
  };
  let next = 0, completed = 0;
  const worker = async () => { while (next < results.length) { const result = results[next++]; await inspect(result); progress?.('Checked ' + ++completed + ' of ' + results.length + ' selectors'); } };
  await Promise.all(Array.from({ length: Math.min(3, results.length) }, worker)); signal?.throwIfAborted();
  return { domain, type: 'TXT', resolver: resolverInfo.name, checkedAt: new Date().toISOString(), durationMs: Math.round(performance.now() - start), hosts, selector, sweep, selectors: results, queryCount: hosts.length, limits: [...limits] };
}
export function dkimAnalysis(report: DkimLookupReport) {
  const entries = report.selectors.flatMap(result => result.entries.filter(entry => entry.candidate)), keys = entries.flatMap(entry => entry.key ? [entry.key] : []);
  const decoded = keys.filter(key => key.status === 'DECODED'), invalid = keys.filter(key => key.status === 'INVALID'), revoked = keys.filter(key => key.status === 'REVOKED');
  const failed = report.selectors.filter(result => ['ERROR','LOOP','LIMIT'].includes(result.state)), noted = report.selectors.filter(result => !!result.note && result.state === 'KEY_RECORDS');
  const multiple = report.selectors.filter(result => result.entries.filter(entry => entry.candidate).length > 1);
  const warnings = keys.flatMap(key => key.warnings);
  const checks: DkimCheck[] = [
    { label: 'Selector coverage', detail: report.selectors.length + ' exact selector names checked. ' + (report.sweep ? 'The common-selector list is a limited guess, not discovery of every selector.' : 'Only the supplied selector was requested.'), state: 'INFO' },
    { label: 'DKIM key records', detail: entries.length + ' DKIM-like TXT records identified; ' + multiple.length + ' selector(s) returned more than one. ' + (multiple.length ? 'Review ambiguous publication; publish one intended key record per selector.' : 'Unrelated TXT data is kept in the snapshot.'), state: multiple.length ? 'REVIEW' : entries.length ? 'PASS' : 'REVIEW' },
    { label: 'Key decoding', detail: decoded.length + ' decoded, ' + invalid.length + ' malformed, ' + revoked.length + ' revoked and ' + keys.filter(key => key.status === 'UNSUPPORTED').length + ' unsupported. Decoding does not verify a message signature.', state: invalid.length || revoked.length ? 'FAIL' : decoded.length ? 'PASS' : 'INFO' },
    { label: 'Key configuration', detail: warnings.length ? warnings.join(' | ') : decoded.length ? 'No key-size or flag warning detected in the supported records.' : 'No supported decoded key to assess.', state: warnings.length ? 'REVIEW' : decoded.length ? 'PASS' : 'INFO' },
    { label: 'DNS completion', detail: failed.length || noted.length || report.limits.length ? failed.length + ' selector(s) failed or hit limits; ' + noted.length + ' have incomplete TXT parsing. ' + report.limits.join(' ') : 'The requested selector queries completed. Missing guessed selectors do not prove DKIM is absent for the domain.', state: failed.length || noted.length || report.limits.length ? 'REVIEW' : 'PASS' },
    { label: 'Verification scope', detail: 'No email headers, body, DKIM signature, private key or DMARC alignment was tested. This is a public-key DNS snapshot, not an authentication pass/fail result.', state: 'INFO' },
  ];
  const tips = [
    !entries.length ? 'Read a real outgoing message\'s DKIM-Signature header and retry with its d= domain and s= selector. Common selectors cannot enumerate every provider\'s keys.' : invalid.length || revoked.length ? 'Review malformed or revoked records with the sending provider and rotate selectors if needed.' : 'Compare the selector and signing domain with actual outbound messages and your provider settings.',
    'Use modern signing algorithms. RSA keys must be at least 1024 bits and should be at least 2048 bits under RFC 8301; Ed25519 uses a distinct 32-byte public-key representation.',
    'Verify the complete message separately and review DMARC alignment. A published key alone does not prove that mail is signed, unmodified, trusted or deliverable.',
  ];
  return { entries, decoded: decoded.length, revoked: revoked.length, checks, tips, badge: failed.length || report.limits.length ? 'DNS REVIEW' : invalid.length || revoked.length ? 'KEY ISSUES' : warnings.length || multiple.length || noted.length ? 'REVIEW KEY RECORDS' : decoded.length ? 'KEY SNAPSHOT' : 'NO KEY IDENTIFIED', summary: 'DKIM selector and public-key snapshot. No email signature verification was performed.' };
}
export function dkimReportCsv(report: DkimLookupReport): string {
  const rows: (string | number)[][] = [['Domain','Selector','Query hostname','Record owner','Selector state','TXT value','Key state','Key algorithm','Key bits','Tag','Tag value','TTL seconds','Details','Resolver','Checked at UTC']];
  for (const result of report.selectors) {
    if (!result.entries.length) rows.push([report.domain,result.selector,result.hostname,result.owner,result.state,'','','','','','', '', result.note,report.resolver,report.checkedAt]);
    for (const entry of result.entries) for (const tag of entry.key?.tags.length ? entry.key.tags : [null]) rows.push([report.domain,result.selector,result.hostname,entry.owner,result.state,entry.value,entry.key?.status || 'Not identified',entry.key?.algorithm || '',entry.key?.bits ?? '',tag?.name || '',tag?.value || '',entry.ttl,[result.note,...entry.key?.errors || [],...entry.key?.warnings || []].filter(Boolean).join(' | '),report.resolver,report.checkedAt]);
  }
  return dnsCsv(rows);
}
