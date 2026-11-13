import { DnsHostResult, DnsLookupRecord, DnsLookupReport, DnsResolverId, lookupDns } from './dns-lookup';
import { DnsExportReport, dnsCsv } from './dns-report-export';

export interface PtrAddress { ip: string; family: 4 | 6; expanded: string; reverseName: string; }
export interface PtrEntry { name: string; value: string; hostname: string; ttl: number; valid: boolean; hint: string | null; }
export interface PtrForwardCheck { name: string; result: DnsHostResult | null; addresses: string[]; state: 'MATCH' | 'MISMATCH' | 'NO_ADDRESS' | 'NXDOMAIN' | 'ERROR' | 'NOT_CHECKED'; skippedReason?: string; }
export interface PtrLookupReport extends DnsLookupReport { address: PtrAddress; entries: PtrEntry[]; forwardChecks: PtrForwardCheck[]; confirm: boolean; queryCount: number; }
interface PtrDiagnostic { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'INFO' | 'FAIL'; }
export const PTR_FORWARD_LIMIT = 16;
const ipv4Parts = (value: string): number[] | null => /^(?:0|[1-9]\d{0,2})(?:\.(?:0|[1-9]\d{0,2})){3}$/.test(value) && value.split('.').every(part => Number(part) <= 255) ? value.split('.').map(Number) : null;

/** Strict IP parsing: no URLs, CIDR prefixes, scope IDs, ports or legacy IPv4 forms. */
export function parsePtrAddress(input: string): PtrAddress {
  let value = input.trim();
  const invalid = () => new Error('Enter a valid IPv4 or IPv6 address, such as 8.8.8.8 or 2001:4860:4860::8888.');
  if (!value || value.length > 80 || /[\s/%]/.test(value)) throw invalid();
  if (value.startsWith('[') && value.endsWith(']') && value.includes(':')) value = value.slice(1, -1);
  const v4 = ipv4Parts(value);
  if (v4) return { ip: value, family: 4, expanded: value, reverseName: [...v4].reverse().join('.') + '.in-addr.arpa' };
  if (!value.includes(':')) throw invalid();
  if (value.includes('.')) {
    const split = value.lastIndexOf(':'), tail = ipv4Parts(value.slice(split + 1));
    if (!tail) throw invalid();
    value = value.slice(0, split + 1) + ((tail[0] << 8) | tail[1]).toString(16) + ':' + ((tail[2] << 8) | tail[3]).toString(16);
  }
  const halves = value.split('::'); if (halves.length > 2) throw invalid();
  const left = halves[0] ? halves[0].split(':') : [], right = halves[1] ? halves[1].split(':') : [];
  const missing = 8 - left.length - right.length;
  if ((halves.length === 1 && missing !== 0) || (halves.length === 2 && missing < 1) || [...left, ...right].some(part => !/^[a-f0-9]{1,4}$/i.test(part))) throw invalid();
  const groups = [...left, ...Array(halves.length === 2 ? missing : 0).fill('0'), ...right].map(part => Number.parseInt(part, 16).toString(16));
  let best = -1, length = 1;
  for (let at = 0; at < groups.length;) {
    if (groups[at] !== '0') { at++; continue; }
    let end = at; while (groups[end] === '0') end++;
    if (end - at > length) { best = at; length = end - at; } at = end;
  }
  const expanded = groups.map(part => part.padStart(4, '0')).join(':');
  const ip = best < 0 ? groups.join(':') : groups.slice(0, best).join(':') + '::' + groups.slice(best + length).join(':');
  return { ip, family: 6, expanded, reverseName: expanded.replace(/:/g, '').split('').reverse().join('.') + '.ip6.arpa' };
}

export function ptrHostnameHint(value: string): string | null {
  const name = value.toLowerCase().replace(/\.$/, '');
  const hints: [string, string[]][] = [
    ['Google hostname', ['dns.google', 'googleusercontent.com', '1e100.net']],
    ['Cloudflare hostname', ['one.one.one.one', 'cloudflare.com']],
    ['Amazon AWS hostname', ['amazonaws.com']], ['Microsoft Azure hostname', ['cloudapp.net', 'cloudapp.azure.com']],
    ['DigitalOcean hostname', ['digitalocean.com']], ['Hetzner hostname', ['clients.your-server.de']],
    ['Akamai hostname', ['akamaitechnologies.com', 'akamaiedge.net']], ['OVHcloud hostname', ['ovh.net']],
  ];
  return hints.find(([, suffixes]) => suffixes.some(suffix => name === suffix || name.endsWith('.' + suffix)))?.[0] || null;
}

export function parsePtrRecord(record: DnsLookupRecord): PtrEntry {
  const hostname = record.value.toLowerCase().replace(/\.$/, '');
  const valid = hostname.length <= 253 && hostname.includes('.') && !/^[\d.]+$/.test(hostname) && hostname.split('.').every(label => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label));
  return { name: record.name, value: record.value, hostname, ttl: record.ttl, valid, hint: valid ? ptrHostnameHint(hostname) : null };
}

export async function lookupPublicIp(signal?: AbortSignal): Promise<string> {
  signal?.throwIfAborted();
  const response = await fetch('https://api64.ipify.org?format=json', { cache: 'no-store', credentials: 'omit', referrerPolicy: 'no-referrer', signal: signal ? AbortSignal.any([signal, AbortSignal.timeout(8000)]) : AbortSignal.timeout(8000) });
  if (!response.ok) throw new Error('The public IP service could not be reached. Enter your address manually.');
  const data: unknown = await response.json(); signal?.throwIfAborted();
  if (!data || typeof data !== 'object' || !('ip' in data) || typeof data.ip !== 'string') throw new Error('The public IP service returned an unexpected response. Enter your address manually.');
  return parsePtrAddress(data.ip).ip;
}

export async function lookupPtr(input: string, resolver: DnsResolverId, confirm = true, signal?: AbortSignal, progress?: (message: string) => void): Promise<PtrLookupReport> {
  signal?.throwIfAborted(); const address = parsePtrAddress(input), start = performance.now(); progress?.('Looking up the reverse DNS name...');
  const base = await lookupDns(address.reverseName, 'PTR', resolver, false, signal);
  const entries = base.hosts[0].records.filter(record => record.type === 'PTR').map(parsePtrRecord);
  const names = [...new Set(entries.filter(entry => entry.valid).map(entry => entry.hostname))];
  const forwardChecks: PtrForwardCheck[] = names.map((name, index) => ({ name, result: null, addresses: [], state: 'NOT_CHECKED', skippedReason: !confirm ? 'Forward confirmation was switched off.' : index >= PTR_FORWARD_LIMIT ? 'Only the first ' + PTR_FORWARD_LIMIT + ' unique hostnames are checked.' : undefined }));
  const targets = forwardChecks.filter(check => !check.skippedReason); let next = 0, completed = 0;
  const type = address.family === 4 ? 'A' : 'AAAA';
  const worker = async () => {
    while (next < targets.length) {
      signal?.throwIfAborted(); const check = targets[next++]; progress?.('Confirming forward DNS: ' + completed + ' of ' + targets.length);
      check.result = (await lookupDns(check.name, type, resolver, false, signal)).hosts[0]; signal?.throwIfAborted();
      check.addresses = check.result.records.filter(record => record.type === type).map(record => record.value);
      const matches = check.addresses.some(value => { try { const candidate = parsePtrAddress(value); return candidate.family === address.family && candidate.expanded === address.expanded; } catch { return false; } });
      check.state = check.result.status === 'ERROR' ? 'ERROR' : check.result.status === 'NXDOMAIN' ? 'NXDOMAIN' : matches ? 'MATCH' : check.addresses.length ? 'MISMATCH' : 'NO_ADDRESS';
      progress?.('Confirming forward DNS: ' + ++completed + ' of ' + targets.length);
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, targets.length) }, worker)); signal?.throwIfAborted();
  return { ...base, domain: address.ip, address, entries, forwardChecks, confirm, queryCount: 1 + targets.length, checkedAt: new Date().toISOString(), durationMs: Math.round(performance.now() - start) };
}

export function ptrAnalysis(report: PtrLookupReport) {
  const host = report.hosts[0], matched = report.forwardChecks.filter(check => check.state === 'MATCH').length;
  const checked = report.forwardChecks.filter(check => !check.skippedReason), failed = checked.filter(check => check.state === 'ERROR').length;
  const invalid = report.entries.filter(entry => !entry.valid).length;
  const hints = [...new Set(report.entries.map(entry => entry.hint).filter((hint): hint is string => !!hint))];
  const diagnostics: PtrDiagnostic[] = [
    { label: 'PTR response', detail: host.status === 'ERROR' ? host.error || 'The resolver request failed.' : host.status === 'NXDOMAIN' ? 'The reverse DNS name does not exist according to this resolver. This does not mean the IP address is unassigned.' : report.entries.length ? report.entries.length + ' PTR answer(s) returned for ' + report.address.ip + '.' : 'No PTR answer returned. An IP address can exist without a published reverse hostname.', state: host.status === 'ERROR' ? 'FAIL' : host.status === 'NXDOMAIN' ? 'REVIEW' : report.entries.length ? 'PASS' : 'INFO' },
    { label: 'Reverse DNS name', detail: 'IPv' + report.address.family + ': ' + report.address.reverseName, state: 'INFO' },
    { label: 'Hostname syntax', detail: invalid ? invalid + ' target(s) have an unsupported hostname format. Originals are retained and no forward query is sent for them.' : report.entries.length ? 'Returned targets have supported hostname syntax.' : 'No PTR targets to inspect.', state: invalid ? 'REVIEW' : report.entries.length ? 'PASS' : 'INFO' },
    { label: 'Forward confirmation', detail: checked.length ? matched + ' of ' + checked.length + ' checked hostname(s) return the original IP in ' + (report.address.family === 4 ? 'A' : 'AAAA') + ' answers. ' + failed + ' query failure(s). Matching DNS is not proof of identity or service availability.' : 'No forward-confirmation queries were performed.', state: checked.length && matched === checked.length ? 'PASS' : checked.length ? 'REVIEW' : 'INFO' },
    { label: 'Hostname hints', detail: hints.length ? hints.join(', ') + '. Based on PTR-name suffixes, not verified IP-block ownership or location.' : 'No known provider-name suffix matched. Custom hostnames can be valid.', state: 'INFO' },
    { label: 'DNSSEC authentication', detail: host.authenticated ? 'The resolver authenticated the PTR response.' : 'The resolver did not authenticate the PTR response; this alone does not establish a DNSSEC failure.', state: host.authenticated ? 'PASS' : 'INFO' },
    { label: 'Lookup scope', detail: 'Public DNS only. Port connectivity, mail delivery, blacklist listings, geolocation and address-block ownership were not tested.', state: 'INFO' },
  ];
  const recommendations = [
    host.status === 'ERROR' ? 'Retry or choose another resolver before treating the PTR as missing.' : !report.entries.length ? 'Ask the IP-block operator or hosting provider whether a reverse hostname should be published for this address.' : invalid || checked.length && matched < checked.length ? 'Review unsupported hostnames and forward-query details. Fix intended address mismatches with the DNS and reverse-zone operators.' : 'Compare the returned hostnames with your hosting configuration. Retain the timestamped snapshot when reviewing a change.',
    'For forward-confirmed reverse DNS, the PTR hostname must resolve back to the original IP in its corresponding address family. A failed query is different from a confirmed mismatch.',
    'PTR and forward DNS results alone do not guarantee email acceptance or prove who owns an IP address. Use the relevant service and registry checks for those questions.',
  ];
  return { diagnostics, recommendations, matched, checked: checked.length, invalid, hints };
}

export function ptrReportCsv(report: PtrLookupReport): string {
  const rows: (string | number)[][] = [['Input IP', 'IP family', 'Reverse DNS name', 'Record owner', 'PTR hostname', 'Hostname hint', 'Forward confirmation', 'Forward addresses', 'Forward detail', 'PTR TTL (seconds)', 'Original PTR value', 'PTR status', 'Resolver', 'Checked at (UTC)']];
  for (const entry of report.entries) { const check = report.forwardChecks.find(check => check.name === entry.hostname); rows.push([report.address.ip, 'IPv' + report.address.family, report.address.reverseName, entry.name, entry.hostname, entry.hint || '', !entry.valid ? 'UNSUPPORTED' : check?.state || 'NOT_CHECKED', check?.addresses.join(' | ') || '', !entry.valid ? 'Unsupported hostname' : check?.skippedReason || check?.result?.error || check?.result?.status || '', entry.ttl, entry.value, report.hosts[0].status, report.resolver, report.checkedAt]); }
  if (!report.entries.length) rows.push([report.address.ip, 'IPv' + report.address.family, report.address.reverseName, '', '', '', '', '', report.hosts[0].error || 'No PTR answer returned', '', '', report.hosts[0].status, report.resolver, report.checkedAt]);
  return dnsCsv(rows);
}

export function ptrExportReport(report: PtrLookupReport): DnsExportReport {
  const hosts = new Map<string, DnsHostResult>();
  for (const host of [...report.hosts, ...report.forwardChecks.flatMap(check => check.result ? [check.result] : [])]) {
    const previous = hosts.get(host.name); hosts.set(host.name, previous ? { name: host.name, records: [...previous.records, ...host.records], status: previous.status === 'ERROR' || host.status === 'ERROR' ? 'ERROR' : previous.status === 'NXDOMAIN' || host.status === 'NXDOMAIN' ? 'NXDOMAIN' : 'NOERROR', authenticated: previous.authenticated && host.authenticated, error: [previous.error, host.error].filter(Boolean).join(' | ') || undefined } : host);
  }
  return { ...report, hosts: [...hosts.values()] };
}
