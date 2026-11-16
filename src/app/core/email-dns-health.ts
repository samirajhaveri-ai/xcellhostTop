import { DNS_LOOKUP_RESOLVERS, DnsHostResult, DnsLookupRecord, DnsResolverId, DnsLookupType, lookupDns, normalizeDnsDomain } from './dns-lookup';
import { SpfLookupReport, lookupSpf, spfAnalysis } from './spf-lookup';
import { DkimLookupReport, dkimAnalysis, lookupDkim, normalizeDkimSelector } from './dkim-lookup';
import { DmarcLookupReport, lookupDmarc } from './dmarc-lookup';
import { parseMxRecord } from './mx-lookup';
import { parsePtrAddress } from './ptr-lookup';
import { parseBimiRecord } from './bimi-lookup';
import { readTxtValue } from './txt-lookup';
import { dnsCsv } from './dns-report-export';

export const EMAIL_HEALTH_LIMITS = { timeoutMs: 25000, aliases: 3, mailServers: 3, reverseIps: 2, ptrNames: 2, extraQueries: 30, records: 100 } as const;
export interface EmailHealthCheck { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'FAIL' | 'INFO'; }
export interface EmailHealthGroup { id: string; title: string; icon: string; state: EmailHealthCheck['state']; summary: string; checks: EmailHealthCheck[]; records: DnsLookupRecord[]; tool: string; }
export interface EmailHealthMailServer { host: string; priority: number; provider: string; addresses: string[]; note: string; }
export interface EmailHealthReverse { ip: string; names: string[]; matching: string[]; state: 'MATCH' | 'REVIEW' | 'ERROR'; note: string; }
export interface EmailHealthReport {
  domain: string; type: 'ALL'; resolver: string; checkedAt: string; durationMs: number; hosts: (DnsHostResult & { queriedType: DnsLookupType })[];
  selector: string; deep: boolean; groups: EmailHealthGroup[]; servers: EmailHealthMailServer[]; reverse: EmailHealthReverse[];
  spf: SpfLookupReport | null; dkim: DkimLookupReport | null; dmarc: DmarcLookupReport | null; limits: string[];
}
export function normalizeEmailHealthDomain(input: string): string {
  let value = input.trim();
  if (value.includes('@')) {
    if (value.includes('://') || !/^[^\s@<>]+@[^\s@<>/?#]+$/.test(value)) throw new Error('Enter a domain or a plain email address, such as name@example.com.');
    value = value.slice(value.lastIndexOf('@') + 1);
  }
  const domain = normalizeDnsDomain(value);
  if (domain.includes('_') || domain.length > 230) throw new Error('Enter a sending domain without DNS prefixes or underscores (up to 230 characters).');
  return domain;
}
export function emailProviderHint(host: string): string {
  const suffixes: [string, string[]][] = [['Google Workspace / Gmail', ['google.com','googlemail.com']], ['Microsoft 365', ['mail.protection.outlook.com']], ['Zoho Mail', ['zoho.com','zoho.eu','zoho.in']], ['Proton Mail', ['protonmail.ch']], ['Mimecast', ['mimecast.com']], ['Proofpoint', ['pphosted.com']], ['Amazon SES', ['amazonses.com']]];
  return suffixes.find(([, values]) => values.some(suffix => host === suffix || host.endsWith('.' + suffix)))?.[0] || 'Custom / unknown';
}
/** DNS marker syntax, not an HTTPS policy fetch, SMTP probe or report-delivery test. */
export function emailTransportMarker(kind: 'sts' | 'tlsrpt', values: string[]): { state: EmailHealthCheck['state']; detail: string } {
  const version = kind === 'sts' ? 'STSv1' : 'TLSRPTv1', records = values.filter(value => new RegExp('^v=' + version + '(?:\\s*;|$)').test(value));
  if (!records.length) return { state: 'REVIEW', detail: 'No ' + version + ' marker at this exact DNS name. This alone does not prove that mail transport is unencrypted.' };
  if (records.length !== 1) return { state: 'FAIL', detail: 'Multiple ' + version + ' markers make this publication ambiguous.' };
  if (records[0].length > 16384 || /[^\x20-\x7e\t]/.test(records[0])) return { state: 'FAIL', detail: 'Marker is oversized or contains unsupported characters.' };
  const fields = records[0].split(';').map(item => item.trim()); if (!fields.at(-1)) fields.pop();
  const tags = new Map<string, string>();
  for (const field of fields) { const match = /^([a-z][a-z0-9_-]*)\s*=\s*(.*)$/i.exec(field); if (!match || tags.has(match[1])) return { state: 'FAIL', detail: 'Malformed or duplicate marker tag.' }; tags.set(match[1], match[2]); }
  if (kind === 'sts') return tags.has('id') && /^[A-Za-z0-9]{1,32}$/.test(tags.get('id')!) ? { state: 'PASS', detail: 'STSv1 version and update id have supported syntax. The HTTPS policy, MX coverage and actual STARTTLS service were not verified.' } : { state: 'FAIL', detail: 'MTA-STS needs an alphanumeric id of 1-32 characters.' };
  const destinations = tags.get('rua')?.split(',').map(item => item.trim()) || [];
  const valid = destinations.length > 0 && destinations.every(uri => {
    try { const url = new URL(uri); if (/[\s\x00-\x1f]/.test(uri)) return false; if (url.protocol === 'mailto:') return /^[^@?]+@[^@?]+$/.test(url.pathname) && !url.search && !url.hash && normalizeDnsDomain(url.pathname.split('@')[1]) === url.pathname.split('@')[1].toLowerCase(); return url.protocol === 'https:' && !url.username && !url.password && !url.hash && !!normalizeDnsDomain(url.hostname); } catch { return false; }
  });
  return valid ? { state: 'PASS', detail: 'TLSRPTv1 marker has recognized reporting URIs. Destination authorization, delivery and actual TLS sessions were not checked.' } : { state: 'FAIL', detail: 'TLS-RPT needs a non-empty rua list of mailto or HTTPS reporting URIs.' };
}
export async function lookupEmailDnsHealth(input: string, selectorInput: string, resolverId: DnsResolverId, deep: boolean, signal?: AbortSignal, progress?: (message: string) => void): Promise<EmailHealthReport> {
  signal?.throwIfAborted(); const domain = normalizeEmailHealthDomain(input), selector = normalizeDkimSelector(selectorInput);
  const resolver = DNS_LOOKUP_RESOLVERS.find(item => item.id === resolverId); if (!resolver) throw new Error('Choose a supported public resolver.');
  const start = performance.now(), deadline = AbortSignal.timeout(EMAIL_HEALTH_LIMITS.timeoutMs), combined = signal ? AbortSignal.any([signal, deadline]) : deadline;
  const report: EmailHealthReport = { domain, type: 'ALL', resolver: resolver.name, checkedAt: new Date().toISOString(), durationMs: 0, hosts: [], selector, deep, groups: [], servers: [], reverse: [], spf: null, dkim: null, dmarc: null, limits: [] };
  const addLimit = (message: string) => { if (!report.limits.includes(message)) report.limits.push(message); };
  const extras = new Map<string, Promise<DnsHostResult>>();
  const query = (name: string, type: DnsLookupType): Promise<DnsHostResult> => {
    const key = name + ':' + type, existing = extras.get(key); if (existing) return existing;
    const task = (async (): Promise<DnsHostResult> => {
      let host: DnsHostResult;
      try {
        signal?.throwIfAborted(); combined.throwIfAborted(); if (extras.size >= EMAIL_HEALTH_LIMITS.extraQueries) throw new Error('Additional DNS query limit reached.');
        progress?.('Reading ' + type + ' at ' + name); host = (await lookupDns(name, type, resolverId, false, combined)).hosts[0];
        if (host.records.length > EMAIL_HEALTH_LIMITS.records) { host = { ...host, records: host.records.slice(0, EMAIL_HEALTH_LIMITS.records), status: 'ERROR', error: 'Answer exceeds the inspection record limit.' }; addLimit('Oversized DNS answer truncated.'); }
      } catch (error) { signal?.throwIfAborted(); host = { name, status: 'ERROR', records: [], authenticated: false, error: error instanceof Error ? error.message : 'DNS query failed.' }; addLimit('One or more checks stopped at a query or time limit.'); }
      report.hosts.push({ ...host, queriedType: type }); return host;
    })(); extras.set(key, task); return task;
  };
  const scoped = async (name: string, type: DnsLookupType): Promise<{ records: DnsLookupRecord[]; error: string; status: DnsHostResult['status']; alias: boolean }> => {
    let owner = name.toLowerCase(), aliases = 0; const seen = new Set<string>();
    for (let depth = 0; depth <= EMAIL_HEALTH_LIMITS.aliases; depth++) {
      const host = await query(owner, type);
      if (host.status !== 'NOERROR') return { records: [], error: host.error || '', status: host.status, alias: aliases > 0 };
      while (true) {
        if (seen.has(owner)) return { records: [], error: 'CNAME loop detected.', status: 'ERROR', alias: true }; seen.add(owner);
        const records = host.records.filter(rr => rr.name.toLowerCase() === owner && rr.type === type), cnames = host.records.filter(rr => rr.name.toLowerCase() === owner && rr.type === 'CNAME');
        if (cnames.length > 1 || cnames.length && records.length) return { records: [], error: 'Ambiguous alias answer.', status: 'ERROR', alias: aliases > 0 };
        if (records.length || !cnames.length) return { records, error: '', status: host.status, alias: aliases > 0 };
        if (++aliases > EMAIL_HEALTH_LIMITS.aliases) return { records: [], error: 'Alias limit reached.', status: 'ERROR', alias: true };
        try { owner = normalizeDnsDomain(cnames[0].value.replace(/\.$/, '')); } catch { return { records: [], error: 'Invalid CNAME target.', status: 'ERROR', alias: true }; }
        if (!host.records.some(rr => rr.name.toLowerCase() === owner)) break;
      }
    }
    return { records: [], error: 'Alias query limit reached.', status: 'ERROR', alias: true };
  };
  const runAuth = async (kind: 'spf' | 'dkim' | 'dmarc') => {
    try {
      progress?.('Checking ' + kind.toUpperCase() + ' publication');
      if (kind === 'spf') { report.spf = await lookupSpf(domain, resolverId, true, combined); report.hosts.push(...report.spf.hosts.map(host => ({ ...host, queriedType: 'TXT' as const }))); }
      if (kind === 'dkim') { report.dkim = await lookupDkim(domain, selector, resolverId, deep, combined); report.hosts.push(...report.dkim.hosts.map(host => ({ ...host, queriedType: 'TXT' as const }))); }
      if (kind === 'dmarc') { report.dmarc = await lookupDmarc(domain, resolverId, combined); const snapshot = report.dmarc; report.hosts.push(...snapshot.hosts.map((host, index) => ({ ...host, queriedType: snapshot.inherited && index === snapshot.hosts.length - 1 && host.name === domain ? 'A' as const : 'TXT' as const }))); }
    } catch { signal?.throwIfAborted(); addLimit(kind.toUpperCase() + ' check did not complete before the snapshot deadline.'); }
  };
  const mail = async () => {
    const mx = await scoped(domain, 'MX'), entries = mx.records.map(parseMxRecord), normal = entries.filter(item => item.valid && !item.nullMx).sort((a,b) => a.preference! - b.preference!);
    const nullMx = entries.some(item => item.nullMx), conflict = nullMx && entries.length > 1, malformed = entries.some(item => !item.valid);
    const checks: EmailHealthCheck[] = [{ label: 'MX publication', state: mx.status === 'ERROR' ? 'REVIEW' : conflict || malformed ? 'FAIL' : normal.length ? 'PASS' : 'INFO', detail: mx.status === 'ERROR' ? mx.error : conflict ? 'Null MX must be the only MX record.' : malformed ? 'One or more MX preference or target values have invalid syntax.' : nullMx ? 'Null MX: this domain declares that it accepts no mail. This may be intentional.' : normal.length ? normal.length + ' usable MX value(s), ordered by preference.' : 'No explicit MX returned. SMTP may use implicit A/AAAA fallback; that fallback is not assessed.' }];
    const names = [...new Set(normal.map(item => item.exchange))].slice(0, EMAIL_HEALTH_LIMITS.mailServers);
    if (new Set(normal.map(item => item.exchange)).size > names.length) addLimit('Mail-server address checks cover the first three unique MX targets.');
    for (const name of names) {
      const [a, aaaa] = await Promise.all([scoped(name, 'A'), scoped(name, 'AAAA')]);
      const addresses = [...a.records, ...aaaa.records].flatMap(rr => { try { return [parsePtrAddress(rr.value).ip]; } catch { return []; } });
      const note = a.status === 'ERROR' || aaaa.status === 'ERROR' ? 'One or more address lookups failed.' : a.alias || aaaa.alias ? 'MX target uses CNAME delegation; an MX target should have its own address records.' : !addresses.length ? 'No A or AAAA address captured.' : 'Address records found; SMTP availability is not tested.';
      report.servers.push({ host: name, priority: normal.find(item => item.exchange === name)!.preference!, provider: emailProviderHint(name), addresses: [...new Set(addresses)], note });
      checks.push({ label: name, state: addresses.length && a.status !== 'ERROR' && aaaa.status !== 'ERROR' && !a.alias && !aaaa.alias ? 'PASS' : 'REVIEW', detail: note });
    }
    if (mx.alias) checks.push({ label: 'MX query alias', state: 'REVIEW', detail: 'The supplied domain returned a CNAME during MX discovery.' });
    report.groups.push({ id: 'mx', title: 'MX & mail routing', icon: 'dns', state: checks.some(item => item.state === 'FAIL') ? 'FAIL' : checks.some(item => item.state === 'REVIEW') ? 'REVIEW' : normal.length ? 'PASS' : 'INFO', summary: nullMx ? 'Null MX published' : normal.length ? normal.length + ' exchanger(s); ' + report.servers.length + ' address target(s) inspected' : 'No explicit mail exchangers', checks, records: mx.records, tool: 'mx-lookup' });
    const ips = [...new Set(report.servers.flatMap(server => server.addresses))].slice(0, EMAIL_HEALTH_LIMITS.reverseIps);
    if (report.servers.flatMap(server => server.addresses).length > ips.length) addLimit('Reverse DNS samples at most two unique inbound-MX IP addresses.');
    for (const ip of ips) {
      const address = parsePtrAddress(ip), answer = await scoped(address.reverseName, 'PTR'); const names: string[] = [];
      for (const rr of answer.records) { try { const name = normalizeDnsDomain(rr.value.replace(/\.$/, '')); if (!names.includes(name)) names.push(name); } catch { /* Unsupported PTR owner is retained in raw data. */ } }
      const matching: string[] = []; let error = answer.status === 'ERROR';
      for (const name of names.slice(0, EMAIL_HEALTH_LIMITS.ptrNames)) { const forward = await scoped(name, address.family === 4 ? 'A' : 'AAAA'); if (forward.status === 'ERROR') error = true; if (forward.records.some(rr => { try { return parsePtrAddress(rr.value).expanded === address.expanded; } catch { return false; } })) matching.push(name); }
      if (names.length > EMAIL_HEALTH_LIMITS.ptrNames) addLimit('Forward confirmation covers at most two PTR names per sampled IP.');
      report.reverse.push({ ip, names, matching, state: error ? 'ERROR' : matching.length ? 'MATCH' : 'REVIEW', note: error ? 'Reverse or forward DNS was incomplete.' : matching.length ? 'At least one PTR name resolves back to the sampled IP.' : 'No forward-confirmed PTR name captured for this sample.' });
    }
  };
  const transport = async () => {
    const checks: EmailHealthCheck[] = [], records: DnsLookupRecord[] = [];
    for (const kind of ['sts','tlsrpt'] as const) {
      const name = (kind === 'sts' ? '_mta-sts.' : '_smtp._tls.') + domain, result = await scoped(name, 'TXT'); records.push(...result.records);
      const decoded = result.records.map(rr => readTxtValue(rr.value));
      const marker = result.status === 'ERROR' || decoded.some(item => !item.parsed) ? { state: 'REVIEW' as const, detail: result.error || 'Malformed TXT encoding prevents a complete marker check.' } : emailTransportMarker(kind, decoded.map(item => item.value));
      checks.push({ label: kind === 'sts' ? 'MTA-STS DNS marker' : 'TLS reporting DNS marker', ...marker });
    }
    checks.push({ label: 'SMTP / STARTTLS', state: 'INFO', detail: 'Not tested. DNS markers do not establish an active SMTP service, TLS support, trusted server certificates or an enforced HTTPS MTA-STS policy.' });
    report.groups.push({ id: 'transport', title: 'Transport policy DNS', icon: 'enhanced_encryption', state: checks.some(item => item.state === 'FAIL') ? 'FAIL' : checks.some(item => item.state === 'REVIEW') ? 'REVIEW' : 'PASS', summary: 'MTA-STS and TLS-RPT publication', checks, records, tool: 'txt-lookup' });
  };
  const brand = async () => {
    const answer = await scoped('default._bimi.' + domain, 'TXT'), candidates = answer.records.map(rr => ({ rr, decoded: readTxtValue(rr.value) })).filter(item => /^\s*v=BIMI\d+(?:\s*;|$)/i.test(item.decoded.value));
    const parsed = candidates.length === 1 ? parseBimiRecord(candidates[0].decoded.value) : null;
    const state = answer.status === 'ERROR' ? 'REVIEW' : candidates.length > 1 || parsed?.state === 'INVALID' || candidates.some(item => !item.decoded.parsed) ? 'FAIL' : 'INFO';
    report.groups.push({ id: 'bimi', title: 'BIMI brand signal', icon: 'verified', state, summary: parsed?.state === 'PUBLISHED' ? 'Brand assertion published' : parsed?.state === 'DECLINED' ? 'Publication declined' : 'No usable default assertion selected', checks: [{ label: 'Default selector', state, detail: answer.status === 'ERROR' ? answer.error : candidates.length > 1 ? 'Multiple BIMI-like records at the default selector.' : parsed ? parsed.state + '. ' + [...parsed.errors, ...parsed.warnings].join(' ') : 'No assertion at default._bimi. BIMI is optional and other selectors are not searched.' }, { label: 'Display / evidence', state: 'INFO', detail: 'No logo or certificate asset is fetched in this overview. Brand ownership, provider acceptance and mailbox display are not verified.' }], records: answer.records, tool: 'bimi-lookup' });
  };
  await Promise.all([runAuth('spf'), runAuth('dkim'), runAuth('dmarc'), mail(), transport(), brand()]); signal?.throwIfAborted();
  const spf = report.spf, root = spf?.nodes[0], spfChecks = spf ? spfAnalysis(spf).diagnostics : [];
  report.groups.push({ id: 'spf', title: 'SPF sender policy', icon: 'mark_email_read', state: !root || ['ERROR','NONE','LIMIT'].includes(root.state) ? 'REVIEW' : root.state !== 'POLICY' || root.policy?.all === '+all' || spfChecks.some(check => check.state === 'FAIL') ? 'FAIL' : spfChecks.some(check => check.state === 'REVIEW') || spf?.limits.length || root.policy?.warnings.length || !spf?.expansionComplete || root.policy?.all !== '-all' ? 'REVIEW' : 'PASS', summary: root ? root.state + ' - ' + spf!.queryCount + ' DNS queries' : 'SPF check incomplete', checks: spf ? spfChecks : [{ label: 'SPF snapshot', detail: 'No completed SPF snapshot.', state: 'REVIEW' }], records: root?.records.map(rr => ({ name: rr.owner, type: 'TXT', ttl: rr.ttl, value: rr.value })) || [], tool: 'spf-lookup' });
  const dkim = report.dkim, dk = dkim ? dkimAnalysis(dkim) : null;
  report.groups.push({ id: 'dkim', title: 'DKIM key publication', icon: 'key', state: !dk || !dk.decoded ? 'REVIEW' : dk.revoked || dk.checks.some(check => check.state === 'FAIL' || check.state === 'REVIEW') ? 'REVIEW' : 'PASS', summary: dkim ? dkim.selectors.length + ' selector(s) checked; ' + dk!.decoded + ' key(s) decoded' : 'DKIM check incomplete', checks: dk?.checks || [{ label: 'Selector check', detail: 'No completed DKIM snapshot. A missing guess never proves that DKIM is absent.', state: 'REVIEW' }], records: dkim?.selectors.flatMap(item => item.entries.map(entry => ({ name: entry.owner, type: 'TXT', ttl: entry.ttl, value: entry.value }))) || [], tool: 'dkim-lookup' });
  const dmarc = report.dmarc, dm = dmarc?.selected?.record;
  report.groups.push({ id: 'dmarc', title: 'DMARC alignment policy', icon: 'policy', state: !dm || dmarc!.effective === 'none' || !dmarc!.effective || dm.warnings.length ? 'REVIEW' : 'PASS', summary: dm ? (dmarc!.effective || 'Unresolved') + ' requested; policy at ' + dmarc!.policyDomain : 'No usable policy selected', checks: [{ label: 'Policy discovery', state: dm ? 'PASS' : 'REVIEW', detail: dm ? 'Policy at ' + dmarc!.policyDomain + (dmarc!.inherited ? ' is inherited.' : ' is direct.') : 'Review missing policy, DNS errors and the snapshot deadline.' }, { label: 'Requested handling', state: dmarc?.effective && dmarc.effective !== 'none' ? 'PASS' : 'REVIEW', detail: dmarc?.effective ? dmarc.effective + ' requested for DMARC-failing mail; receiver handling may differ.' : 'No definite disposition selected.' }, { label: 'Message alignment', state: 'INFO', detail: dm ? 'SPF ' + (dm.aspf === 's' ? 'strict' : 'relaxed') + '; DKIM ' + (dm.adkim === 's' ? 'strict' : 'relaxed') + '. No message authentication performed. ' + dm.warnings.join(' ') : 'Not assessed without a usable policy.' }], records: dmarc?.selected ? [{ name: dmarc.selected.owner, type: 'TXT', ttl: dmarc.selected.ttl, value: dmarc.selected.value }] : [], tool: 'dmarc-lookup' });
  report.groups.push({ id: 'reverse', title: 'Inbound MX reverse DNS', icon: 'swap_horiz', state: report.reverse.length ? report.reverse.every(item => item.state === 'MATCH') ? 'PASS' : 'REVIEW' : 'INFO', summary: report.reverse.length + ' sampled IP(s), up to two per scan', checks: [{ label: 'Forward-confirmed reverse DNS', state: report.reverse.length && report.reverse.every(item => item.state === 'MATCH') ? 'PASS' : report.reverse.length ? 'REVIEW' : 'INFO', detail: report.reverse.length ? report.reverse.map(item => item.ip + ': ' + item.note).join(' ') : 'No inbound-MX address sample available.' }, { label: 'Sending IP scope', state: 'INFO', detail: 'Inbound MX addresses can differ from outbound sender IPs. This sample is not an audit of your sending infrastructure or IP reputation.' }], records: [], tool: 'ptr-lookup' });
  const order = ['spf','dkim','dmarc','mx','transport','reverse','bimi']; report.groups.sort((a,b) => order.indexOf(a.id) - order.indexOf(b.id));
  if (deadline.aborted) addLimit('The 25-second snapshot deadline was reached; results may be incomplete.');
  report.limits.push(...(report.spf?.limits || []), ...(report.dkim?.limits || []), ...(report.dmarc?.limits || []));
  report.durationMs = Math.round(performance.now() - start); return report;
}
export function emailHealthAnalysis(report: EmailHealthReport) {
  const passed = report.groups.filter(group => group.state === 'PASS').length, review = report.groups.filter(group => group.state === 'REVIEW' || group.state === 'FAIL').length;
  return { passed, review, informational: report.groups.length - passed - review, badge: report.limits.length ? 'PARTIAL SNAPSHOT' : review ? 'REVIEW DNS' : 'DNS SNAPSHOT', summary: passed + ' DNS categories passed their scoped checks; ' + review + ' need review. This is not an inbox-placement or deliverability grade.', checks: [...report.groups.map(group => ({ label: group.title, state: group.state, detail: group.summary + '. ' + group.checks.map(check => check.detail).join(' ') })), { label: 'SMTP and reputation scope', state: 'INFO' as const, detail: 'SMTP availability, STARTTLS negotiation, SMTP certificates, blocklists, sender reputation and actual message authentication were not tested. No A-F deliverability grade is assigned.' }], tips: ['Review explicit DNS errors and incomplete checks before changing records. Missing or null MX can be intentional for non-receiving domains.', 'Use the dedicated SPF, DKIM and DMARC tools to inspect the full policy and selector context. A decoded key does not prove that mail is signed.', 'Confirm HTTPS MTA-STS policy and actual SMTP TLS support using a server-side test. DNS markers alone do not establish transport encryption.', 'Audit the real outbound sending IPs, reputation and message headers separately. The reverse-DNS sample here uses inbound MX addresses only.'] };
}
export function emailHealthReportCsv(report: EmailHealthReport): string {
  return dnsCsv([['XcellHost email DNS snapshot', report.domain, report.checkedAt, report.resolver], ['Category','State','Check','Detail'], ...report.groups.flatMap(group => group.checks.map(check => [group.title,check.state,check.label,check.detail])), [], ['Mail server','Preference','Provider hint','Addresses','Note'], ...report.servers.map(server => [server.host,String(server.priority),server.provider,server.addresses.join(' '),server.note]), [], ['Queried name','Queried type','Owner','Answer type','TTL','Value','DNS status'], ...report.hosts.flatMap(host => host.records.length ? host.records.map(rr => [host.name,host.queriedType,rr.name,rr.type,String(rr.ttl),rr.value,host.status]) : [[host.name,host.queriedType,'','','',host.error || '',host.status]])]);
}
