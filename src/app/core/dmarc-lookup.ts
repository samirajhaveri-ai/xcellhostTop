import { DNS_LOOKUP_RESOLVERS, DnsHostResult, DnsLookupReport, DnsResolverId, lookupDns, normalizeDnsDomain } from './dns-lookup';
import { readTxtValue } from './txt-lookup';
import { dnsCsv } from './dns-report-export';

export type DmarcPolicy = 'none' | 'quarantine' | 'reject';
export type DmarcPreview = 'domain' | 'subdomain' | 'nonexistent';
export const DMARC_LIMITS = { queries: 32, aliases: 5, timeoutMs: 20000, recordLength: 16384, records: 50 } as const;
export interface DmarcTag { name: string; value: string; meaning: string; source: 'Published' | 'Default'; }
export interface DmarcRecord {
  tags: DmarcTag[]; errors: string[]; warnings: string[]; usable: boolean;
  policy: DmarcPolicy; subdomain: DmarcPolicy; nonexistent: DmarcPolicy;
  adkim: 'r' | 's'; aspf: 'r' | 's'; testing: boolean; psd: 'y' | 'n' | 'u';
  destinations: { tag: string; uri: string; valid: boolean; note: string }[];
}
export interface DmarcEntry { value: string; raw: string; owner: string; ttl: number; parsed: boolean; record: DmarcRecord; }
export interface DmarcStep { domain: string; hostname: string; entries: DmarcEntry[]; state: 'FOUND' | 'MISSING' | 'MULTIPLE' | 'INVALID' | 'ERROR'; note: string; }
export interface DmarcLookupReport extends DnsLookupReport {
  steps: DmarcStep[]; selected: DmarcEntry | null; policyDomain: string | null;
  inherited: boolean; existence: 'EXISTS' | 'NONEXISTENT' | 'UNKNOWN'; effective: DmarcPolicy | null;
  queryCount: number; limits: string[];
}
const meanings: Record<string, string> = {
  v: 'DMARC version; DMARC1 must be the first tag.', p: 'Requested disposition for failing mail using this domain.',
  sp: 'Requested disposition for existing subdomains when this is their organizational/PSD policy.',
  np: 'Requested disposition for non-existent subdomains when inherited.',
  adkim: 'DKIM alignment: r = same organizational domain; s = exact domain.',
  aspf: 'SPF alignment: r = same organizational domain; s = exact domain.',
  t: 'Testing: y requests one level less strict treatment; n applies the declared policy.',
  psd: 'Policy boundary: y = public suffix; n = organizational domain; u = unspecified.',
  rua: 'Aggregate-report destinations. Publication does not verify authorization or receipt.',
  ruf: 'Failure-report destinations. Support and privacy handling vary by receiver.',
  fo: 'Failure-report triggers; relevant only when ruf is published.',
  pct: 'Legacy percentage tag; removed by RFC 9989, retained here for inspection.',
  ri: 'Legacy report-interval tag; removed by RFC 9989.', rf: 'Legacy report-format tag; removed by RFC 9989.',
};
const policyValue = (value: string): value is DmarcPolicy => ['none', 'quarantine', 'reject'].includes(value);
const defaults = { v: 'DMARC1', p: 'none', sp: '', np: '', adkim: 'r', aspf: 'r', t: 'n', psd: 'u', fo: '0' };
export function parseDmarcRecord(value: string): DmarcRecord {
  const result: DmarcRecord = { tags: [], errors: [], warnings: [], usable: false, policy: 'none', subdomain: 'none', nonexistent: 'none', adkim: 'r', aspf: 'r', testing: false, psd: 'u', destinations: [] };
  if (value.length > DMARC_LIMITS.recordLength) { result.errors.push('Record exceeds the 16 KiB parsing limit.'); return result; }
  const unfolded = value.replace(/\r\n(?=[ \t])/g, '');
  if (/[\x00-\x08\x0a-\x1f\x7f]/.test(unfolded)) { result.errors.push('Unexpected control characters in TXT data.'); return result; }
  const pieces = unfolded.split(';'); if (!pieces.at(-1)?.trim()) pieces.pop();
  const tags = new Map<string, string>();
  for (const [index, piece] of pieces.entries()) {
    const match = /^\s*([A-Za-z][A-Za-z0-9_]*)\s*=\s*([^;]*?)\s*$/.exec(piece);
    if (!match) { result.warnings.push('Malformed tag ignored: ' + piece.slice(0, 80)); continue; }
    const [, name, content] = match;
    if (index === 0 && (name !== 'v' || content !== 'DMARC1')) result.errors.push('The first tag must be exactly v=DMARC1.');
    if (tags.has(name)) result.errors.push('Duplicate tag: ' + name + '. Resolve the ambiguity before relying on this record.');
    tags.set(name, content);
    result.tags.push({ name, value: content, meaning: meanings[name] || 'Unrecognized tag; ignored by this interpretation.', source: 'Published' });
  }
  if (tags.get('v') !== 'DMARC1' || !/^\s*v\s*=\s*DMARC1(?:\s*;|\s*$)/.test(unfolded)) result.errors.push('Missing, misplaced or unsupported DMARC version.');
  // Tag names/version are case-sensitive; the enumerated ABNF values are not.
  const setting = (name: string) => tags.get(name)?.toLowerCase();
  for (const name of ['rua', 'ruf']) {
    if (!tags.has(name)) continue;
    for (const uri of tags.get(name)!.split(',').map(item => item.trim())) {
      let valid = false, note = 'Invalid reporting URI.';
      // URI syntax only: do not follow links, send reports or disclose any message data.
      try {
        const cleaned = uri.replace(/!\d+[kmgt]?$/i, ''); const parsed = new URL(cleaned);
        valid = !/[\s\x00-\x1f]/.test(uri) && /^[A-Za-z][A-Za-z0-9+.-]*:/.test(cleaned) && !!parsed.pathname;
        if (parsed.protocol === 'mailto:') valid = valid && /^[^?@,]+@[^?@,]+$/.test(parsed.pathname) && !parsed.search && !parsed.hash && normalizeDnsDomain(parsed.pathname.split('@')[1]) === parsed.pathname.split('@')[1].toLowerCase();
        note = valid ? parsed.protocol === 'mailto:' ? 'Mailbox syntax recognized. External-destination authorization and delivery are not checked.' : 'URI syntax recognized; receiver support is not assured.' : note;
      } catch { valid = false; }
      result.destinations.push({ tag: name, uri, valid, note });
      if (!valid) result.warnings.push(name + ' contains an invalid reporting URI.');
    }
  }
  let policyInvalid = false;
  for (const name of ['p', 'sp', 'np']) if (tags.has(name) && !policyValue(setting(name)!)) { policyInvalid = true; result.warnings.push('Invalid ' + name + ' policy.'); }
  if (policyInvalid) {
    if (result.destinations.some(item => item.tag === 'rua' && item.valid)) result.warnings.push('RFC 9989 fallback: invalid policy with a valid rua URI is interpreted as p=none.');
    else result.errors.push('Invalid policy without a valid rua URI: no usable DMARC policy.');
  }
  result.policy = !policyInvalid && policyValue(setting('p') || '') ? setting('p') as DmarcPolicy : 'none';
  result.subdomain = !policyInvalid && policyValue(setting('sp') || '') ? setting('sp') as DmarcPolicy : result.policy;
  result.nonexistent = !policyInvalid && policyValue(setting('np') || '') ? setting('np') as DmarcPolicy : result.subdomain;
  if (!tags.has('p')) result.warnings.push('No p tag: RFC 9989 defaults to none; older receivers may ignore the record. Publish p explicitly for interoperability.');
  for (const name of ['adkim', 'aspf'] as const) {
    const alignment = setting(name); if (alignment === 'r' || alignment === 's') result[name] = alignment;
    else if (alignment !== undefined) result.warnings.push('Invalid ' + name + ': using the relaxed default.');
  }
  if (setting('t') === 'y') result.testing = true;
  else if (tags.has('t') && setting('t') !== 'n') result.warnings.push('Invalid t: using the non-testing default.');
  const psd = setting('psd'); if (psd === 'y' || psd === 'n') result.psd = psd;
  else if (psd !== undefined && psd !== 'u') result.warnings.push('Invalid psd: using unspecified boundary.');
  const fo = setting('fo'); if (fo !== undefined && (!/^[01ds](?::[01ds])*$/.test(fo) || new Set(fo.split(':')).size !== fo.split(':').length || fo.includes('0') && fo.includes('1'))) result.warnings.push('Invalid fo value; the default failure-report trigger is 0.');
  for (const name of ['pct', 'ri', 'rf']) if (tags.has(name)) result.warnings.push(name + ' is a legacy tag removed by RFC 9989; it does not control this interpretation.');
  if (tags.has('pct') && (!/^\d+$/.test(tags.get('pct')!) || Number(tags.get('pct')) > 100)) result.warnings.push('Legacy pct is outside its former 0–100 range.');
  for (const [name, fallback] of Object.entries(defaults)) if (!tags.has(name)) result.tags.push({ name, value: name === 'sp' ? result.subdomain : name === 'np' ? result.nonexistent : fallback, meaning: meanings[name], source: 'Default' });
  result.usable = !result.errors.length;
  return result;
}
export function dmarcTreatment(policy: DmarcPolicy, testing: boolean): DmarcPolicy { return !testing ? policy : policy === 'reject' ? 'quarantine' : 'none'; }
export function dmarcTreeNames(domain: string): string[] {
  const labels = domain.split('.'), names = [domain];
  let remaining = labels.length > 8 ? labels.slice(-7) : labels.slice(1);
  while (remaining.length) { names.push(remaining.join('.')); remaining = remaining.slice(1); }
  return names;
}
export async function lookupDmarc(input: string, resolverId: DnsResolverId, signal?: AbortSignal, progress?: (message: string) => void): Promise<DmarcLookupReport> {
  const domain = normalizeDnsDomain(input);
  if (domain.split('.').some(label => label.includes('_')) || domain.startsWith('_dmarc.') || ('_dmarc.' + domain).length > 253) throw new Error('Enter the email From domain only, without _dmarc or underscores.');
  const resolver = DNS_LOOKUP_RESOLVERS.find(item => item.id === resolverId); if (!resolver) throw new Error('Choose a supported DNS resolver.');
  const start = performance.now(), timeout = AbortSignal.timeout(DMARC_LIMITS.timeoutMs), combined = signal ? AbortSignal.any([signal, timeout]) : timeout;
  const report: DmarcLookupReport = { domain, type: 'TXT', resolver: resolver.name, checkedAt: new Date().toISOString(), durationMs: 0, hosts: [], steps: [], selected: null, policyDomain: null, inherited: false, existence: 'UNKNOWN', effective: null, queryCount: 0, limits: [] };
  const query = async (name: string, type: 'TXT' | 'A') => {
    signal?.throwIfAborted(); combined.throwIfAborted();
    if (report.queryCount >= DMARC_LIMITS.queries) throw new Error('DNS query limit reached.');
    report.queryCount++; progress?.('Reading ' + type + ' at ' + name);
    const answer = await lookupDns(name, type, resolverId, false, combined); report.hosts.push(answer.hosts[0]); return answer.hosts[0];
  };
  const step = async (name: string): Promise<DmarcStep> => {
    const item: DmarcStep = { domain: name, hostname: '_dmarc.' + name, entries: [], state: 'MISSING', note: '' };
    let owner = item.hostname, aliasCount = 0; const seen = new Set<string>();
    try {
      for (let depth = 0; depth <= DMARC_LIMITS.aliases; depth++) {
        if (seen.has(owner)) throw new Error('CNAME loop detected.'); seen.add(owner);
        const host = await query(owner, 'TXT');
        if (host.status === 'ERROR') throw new Error(host.error || 'DNS request failed.');
        if (host.status === 'NXDOMAIN') { item.note = 'NXDOMAIN: this policy name does not exist.'; break; }
        let records = host.records; const answerSeen = new Set<string>();
        while (true) {
          if (answerSeen.has(owner)) throw new Error('CNAME loop detected.'); answerSeen.add(owner);
          const aliases = records.filter(record => record.name.toLowerCase() === owner && record.type === 'CNAME');
          const txt = records.filter(record => record.name.toLowerCase() === owner && record.type === 'TXT');
          if (txt.length && aliases.length || aliases.length > 1) throw new Error('Ambiguous TXT/CNAME answer.');
          if (txt.length > DMARC_LIMITS.records) throw new Error('TXT answer count exceeds the inspection limit.');
          if (txt.length) {
            for (const record of txt) {
              const decoded = readTxtValue(record.value);
              if (!/^\s*v\s*=\s*DMARC1(?:\s*;|\s*$)/.test(decoded.value)) continue;
              const parsed = parseDmarcRecord(decoded.value); if (!decoded.parsed) { parsed.usable = false; parsed.errors.push('Malformed DNS TXT string encoding.'); }
              item.entries.push({ value: decoded.value, raw: record.value, owner, ttl: record.ttl, parsed: decoded.parsed, record: parsed });
            }
            item.state = item.entries.length > 1 ? 'MULTIPLE' : item.entries[0]?.record.usable ? 'FOUND' : item.entries.length ? 'INVALID' : 'MISSING';
            item.note = item.state === 'MULTIPLE' ? 'Multiple DMARC records: this name is discarded during discovery.' : item.state === 'INVALID' ? 'The candidate policy is not usable; inspect its errors.' : item.state === 'MISSING' ? 'No DMARC1 policy in the TXT answers.' : 'One usable DMARC policy found.';
            return item;
          }
          if (!aliases.length) { item.note = 'No DMARC TXT record returned.'; return item; }
          if (++aliasCount > DMARC_LIMITS.aliases) throw new Error('CNAME delegation limit reached.');
          owner = normalizeDnsDomain(aliases[0].value.replace(/\.$/, ''));
          if (seen.has(owner)) throw new Error('CNAME loop detected.');
          if (!records.some(record => record.name.toLowerCase() === owner)) break;
        }
      }
      if (!item.note) throw new Error('CNAME delegation limit reached.');
    } catch (error) {
      signal?.throwIfAborted(); item.state = 'ERROR'; item.note = error instanceof Error ? error.message : 'DNS lookup failed.';
      if (timeout.aborted || report.queryCount >= DMARC_LIMITS.queries) report.limits.push('Snapshot incomplete: time or query limit reached.');
    }
    return item;
  };
  for (const name of dmarcTreeNames(domain)) {
    const item = await step(name); report.steps.push(item);
    if (item.state === 'ERROR') break;
    if (name === domain && item.state === 'FOUND') { report.selected = item.entries[0]; report.policyDomain = name; break; }
    if (item.state === 'FOUND' && item.entries[0].record.psd !== 'u') break;
  }
  if (!report.selected && !report.steps.some(item => item.state === 'ERROR')) {
    const found = report.steps.filter(item => item.state === 'FOUND');
    const boundary = found.find(item => item.entries[0].record.psd === 'n');
    const psd = found.find(item => item.entries[0].record.psd === 'y');
    const below = psd ? domain.split('.').slice(-(psd.domain.split('.').length + 1)).join('.') : '';
    const selected = boundary || (psd ? found.find(item => item.domain === below) || psd : found.at(-1));
    if (selected) { report.selected = selected.entries[0]; report.policyDomain = selected.domain; report.inherited = selected.domain !== domain; }
  }
  if (report.selected) {
    if (report.inherited) {
      try { const host = await query(domain, 'A'); report.existence = host.status === 'NOERROR' ? 'EXISTS' : host.status === 'NXDOMAIN' ? 'NONEXISTENT' : 'UNKNOWN'; }
      catch { signal?.throwIfAborted(); report.limits.push('Author-domain existence could not be checked; inherited disposition is unresolved.'); }
    }
    const record = report.selected.record;
    const policy = !report.inherited ? record.policy : report.existence === 'EXISTS' ? record.subdomain : report.existence === 'NONEXISTENT' ? record.nonexistent : null;
    report.effective = policy === null ? null : dmarcTreatment(policy, record.testing);
  }
  signal?.throwIfAborted(); report.durationMs = Math.round(performance.now() - start); return report;
}
export function dmarcAnalysis(report: DmarcLookupReport) {
  const record = report.selected?.record;
  const checks: { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'FAIL' | 'INFO' }[] = [
    { label: 'Policy discovery', detail: report.selected ? 'Policy at ' + report.policyDomain + (report.inherited ? ' is inherited.' : ' is published directly.') : 'No usable policy selected in this snapshot.', state: report.selected ? 'PASS' : 'REVIEW' },
    { label: 'Requested treatment', detail: report.effective ? report.effective + (record?.testing ? ' after t=y testing adjustment.' : ' requested for DMARC-failing mail. Receiver decisions can differ.') : 'No definite disposition; review DNS and parsing results.', state: report.effective === 'none' ? 'REVIEW' : report.effective ? 'PASS' : 'INFO' },
    { label: 'SPF / DKIM alignment', detail: record ? 'SPF ' + (record.aspf === 's' ? 'strict' : 'relaxed') + '; DKIM ' + (record.adkim === 's' ? 'strict' : 'relaxed') + '. No message authentication was performed.' : 'Not assessed without a usable policy.', state: 'INFO' },
    { label: 'Aggregate reporting', detail: record?.destinations.some(item => item.tag === 'rua' && item.valid) ? 'A syntactically valid rua URI is published. Destination authorization and delivery are not checked.' : 'No syntactically valid aggregate-report destination in the selected policy.', state: record?.destinations.some(item => item.tag === 'rua' && item.valid) ? 'PASS' : 'REVIEW' },
    { label: 'DNS snapshot', detail: report.queryCount + ' read-only queries. ' + (report.steps.some(item => item.state === 'ERROR') ? 'A DNS/delegation error prevents a complete result.' : 'Policy queries completed. AD flags are resolver assertions, not independent DNSSEC validation.'), state: report.steps.some(item => item.state === 'ERROR') ? 'REVIEW' : 'INFO' },
  ];
  if (record?.warnings.length) checks.push({ label: 'Policy compatibility', detail: record.warnings.join(' '), state: 'REVIEW' });
  return { checks, badge: !record ? 'POLICY REVIEW' : report.effective === 'none' ? 'MONITORING' : record.testing ? 'TEST MODE' : 'POLICY FOUND', summary: record ? 'Published DMARC policy snapshot. Message authentication and delivery are not tested.' : 'No usable DMARC policy selected. Inspect the discovery trace before drawing conclusions.', tips: [
    'Verify that each legitimate sender produces an aligned SPF or DKIM pass before tightening policy.',
    'Review aggregate reports and authorize external report destinations. This tool never contacts reporting endpoints.',
    'RFC 9989 uses DNS-tree discovery and t for testing; legacy receivers may still use RFC 7489 rules and pct.',
  ] };
}
/** Examples use assumed authentication outcomes and a shared organizational domain, never real mail. */
export function dmarcScenarios(record: DmarcRecord) {
  return [
    { name: 'Your own mail server', spf: 'Pass, exact domain', dkim: 'Pass, exact domain', outcome: 'PASS (illustration)', detail: 'Both authenticated identifiers match the visible From domain.' },
    { name: 'ESP using sibling domains', spf: 'Pass, same organization', dkim: 'Pass, same organization', outcome: record.aspf === 'r' || record.adkim === 'r' ? 'PASS (illustration)' : 'FAIL (illustration)', detail: 'Assumes both identifiers share the From domain’s organizational domain. Strict mode needs an exact match.' },
    { name: 'Forwarded, signature preserved', spf: 'Fail after forwarding', dkim: 'Pass, exact domain', outcome: 'PASS (illustration)', detail: 'One aligned DKIM pass is sufficient even when SPF fails.' },
    { name: 'Spoofed, neither aligned', spf: 'No aligned pass', dkim: 'No aligned pass', outcome: 'FAIL (illustration)', detail: 'Requested treatment follows the applicable policy; receiver local policy can override it.' },
  ];
}
export function dmarcReportCsv(report: DmarcLookupReport): string {
  return dnsCsv([
    ['XcellHost DMARC policy snapshot', report.domain, report.checkedAt, report.resolver],
    ['Policy domain', report.policyDomain || '', 'Requested treatment', report.effective || 'Unresolved'],
    ['Query domain', 'Discovery state', 'Owner', 'TTL', 'TXT value', 'Errors', 'Warnings'],
    ...report.steps.flatMap(step => step.entries.length ? step.entries.map(entry => [step.domain, step.state, entry.owner, String(entry.ttl), entry.value, entry.record.errors.join(' '), entry.record.warnings.join(' ')]) : [[step.domain, step.state, '', '', '', step.note, '']]),
    [], ['Diagnostic', 'State', 'Detail'], ...dmarcAnalysis(report).checks.map(check => [check.label, check.state, check.detail]),
  ]);
}
