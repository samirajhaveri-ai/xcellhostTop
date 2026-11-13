import { DnsHostResult, DnsLookupRecord, DnsLookupReport, DnsResolverId, lookupDns } from './dns-lookup';
import { DnsExportReport, dnsCsv } from './dns-report-export';

export interface NsEntry { name: string; value: string; server: string; valid: boolean; ttl: number; provider: string | null; inZone: boolean; }
export interface NsAddressCheck { name: string; ipv4: DnsHostResult | null; ipv6: DnsHostResult | null; skippedReason?: string; }
export interface NsLookupReport extends DnsLookupReport { entries: NsEntry[]; addressChecks: NsAddressCheck[]; resolveAddresses: boolean; queryCount: number; }
interface NsDiagnostic { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'INFO' | 'FAIL'; }
export const NS_ADDRESS_LIMIT = 16;

/** A recognizable suffix is a naming hint, not verified account ownership. */
export function nsProvider(name: string): string | null {
  const server = name.toLowerCase().replace(/\.$/, '');
  const suffixes: [string, string[]][] = [
    ['Cloudflare', ['ns.cloudflare.com']], ['Google Cloud DNS', ['googledomains.com']],
    ['Microsoft Azure DNS', ['azure-dns.com', 'azure-dns.net', 'azure-dns.org', 'azure-dns.info']],
    ['NS1', ['nsone.net']], ['DNS Made Easy', ['dnsmadeeasy.com']], ['Akamai', ['akam.net']],
    ['GoDaddy', ['domaincontrol.com']], ['DigitalOcean', ['digitalocean.com']],
  ];
  if (/(?:^|\.)awsdns-\d+\.(?:com|net|org|co\.uk)$/.test(server)) return 'Amazon Route 53';
  return suffixes.find(([, values]) => values.some(suffix => server === suffix || server.endsWith('.' + suffix)))?.[0] || null;
}

export function parseNsRecord(record: DnsLookupRecord): NsEntry {
  const server = record.value.toLowerCase().replace(/\.$/, '');
  const valid = server.length <= 253 && server.includes('.') && !/^[\d.]+$/.test(server) && server.split('.').every(label => /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/.test(label));
  const owner = record.name.toLowerCase().replace(/\.$/, '');
  return { name: record.name, value: record.value, server, valid, ttl: record.ttl, provider: valid ? nsProvider(server) : null, inZone: valid && (server === owner || server.endsWith('.' + owner)) };
}

/** Queries the exact input through a recursive resolver; never fabricates parent/glue checks. */
export async function lookupNs(input: string, resolver: DnsResolverId, resolveAddresses = true, signal?: AbortSignal, progress?: (message: string) => void): Promise<NsLookupReport> {
  const start = performance.now(); signal?.throwIfAborted(); progress?.('Finding published nameservers...');
  const base = await lookupDns(input, 'NS', resolver, false, signal);
  const entries = base.hosts[0].records.filter(record => record.type === 'NS').map(parseNsRecord).sort((a, b) => a.server.localeCompare(b.server));
  const names = [...new Set(entries.filter(entry => entry.valid).map(entry => entry.server))];
  const addressChecks: NsAddressCheck[] = names.map((name, index) => ({ name, ipv4: null, ipv6: null, skippedReason: !resolveAddresses ? 'Address checks were switched off.' : index >= NS_ADDRESS_LIMIT ? 'Only the first ' + NS_ADDRESS_LIMIT + ' unique nameservers are checked.' : undefined }));
  const targets = addressChecks.filter(check => !check.skippedReason);
  let queryCount = 1, next = 0, completed = 0;
  const worker = async () => {
    while (next < targets.length) {
      signal?.throwIfAborted(); const target = targets[next++];
      progress?.('Resolving nameserver addresses: ' + completed + ' of ' + targets.length);
      const [ipv4, ipv6] = await Promise.all([lookupDns(target.name, 'A', resolver, false, signal), lookupDns(target.name, 'AAAA', resolver, false, signal)]);
      signal?.throwIfAborted(); target.ipv4 = ipv4.hosts[0]; target.ipv6 = ipv6.hosts[0]; queryCount += 2;
      progress?.('Resolving nameserver addresses: ' + ++completed + ' of ' + targets.length);
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, targets.length) }, worker)); signal?.throwIfAborted();
  return { ...base, entries, addressChecks, resolveAddresses, queryCount, checkedAt: new Date().toISOString(), durationMs: Math.round(performance.now() - start) };
}

export const nsAddresses = (check: NsAddressCheck | undefined, family: 'A' | 'AAAA') =>
  (family === 'A' ? check?.ipv4 : check?.ipv6)?.records.filter(record => record.type === family).map(record => record.value) || [];

export function nsAnalysis(report: NsLookupReport) {
  const host = report.hosts[0], invalid = report.entries.filter(entry => !entry.valid);
  const names = [...new Set(report.entries.filter(entry => entry.valid).map(entry => entry.server))];
  const providers = [...new Set(report.entries.map(entry => entry.provider).filter((provider): provider is string => !!provider))];
  const checked = report.addressChecks.filter(check => !check.skippedReason);
  const resolved = checked.filter(check => nsAddresses(check, 'A').length || nsAddresses(check, 'AAAA').length).length;
  const failed = checked.filter(check => check.ipv4?.status === 'ERROR' || check.ipv6?.status === 'ERROR').length;
  const aliases = checked.filter(check => [check.ipv4, check.ipv6].some(result => result?.records.some(record => record.type === 'CNAME'))).length;
  const inZone = report.entries.filter(entry => entry.inZone).length;
  const diagnostics: NsDiagnostic[] = [
    { label: 'NS response', detail: host.status === 'ERROR' ? host.error || 'The query failed.' : host.status === 'NXDOMAIN' ? 'This exact hostname does not exist according to the resolver.' : report.entries.length ? report.entries.length + ' NS record(s) returned by ' + report.resolver + '.' : 'No NS answer returned. A subdomain may use a parent zone without publishing NS records at this exact name.', state: host.status === 'ERROR' ? 'FAIL' : host.status === 'NXDOMAIN' ? 'REVIEW' : report.entries.length ? 'PASS' : 'INFO' },
    { label: 'Nameserver format', detail: invalid.length ? invalid.length + ' target(s) do not have a supported fully qualified hostname format. Their values are retained, and no address queries are sent for them.' : names.length ? 'Returned targets use supported hostname syntax.' : 'No nameserver targets to inspect.', state: invalid.length ? 'REVIEW' : names.length ? 'PASS' : 'INFO' },
    { label: 'Unique nameservers', detail: names.length + ' distinct valid target(s). ' + (names.length === 1 ? 'Review this single target with your DNS provider; a name can represent infrastructure this lookup cannot see.' : 'Record counts do not establish network independence or availability.'), state: names.length === 1 ? 'REVIEW' : 'INFO' },
    { label: 'Server addresses', detail: checked.length ? resolved + ' of ' + checked.length + ' checked targets have A or AAAA answers. ' + failed + ' target(s) had a failed address query. These are recursive DNS answers, not direct reachability tests.' : 'No address checks were performed.', state: checked.length && (failed || resolved < checked.length) ? 'REVIEW' : checked.length ? 'PASS' : 'INFO' },
    { label: 'Nameserver aliases', detail: aliases ? aliases + ' nameserver target(s) returned CNAME aliases. Nameserver destinations should have their own address records.' : checked.length ? 'No CNAME was returned in the captured address answers.' : 'Address answers were not available to inspect for aliases.', state: aliases ? 'REVIEW' : 'INFO' },
    { label: 'Provider-name hints', detail: providers.length ? providers.join(', ') + '. Matched by hostname suffix; provider identity and account ownership are not verified.' : 'No known provider suffix matched. Custom nameserver names can be valid.', state: 'INFO' },
    { label: 'In-zone names / glue', detail: inZone ? inZone + ' target(s) are within their NS record owner name. Confirm required glue at the parent with your registrar; the address answers here are not proof of parent glue.' : 'No in-zone names were identified among valid returned targets. Parent glue was not queried.', state: 'INFO' },
    { label: 'Delegation scope', detail: 'Only NS at ' + report.domain + ' and optional target addresses were queried. Parent and child NS sets, authoritative-server agreement and DNS-server reachability were not compared.', state: 'INFO' },
    { label: 'DNSSEC authentication', detail: host.authenticated ? 'The selected resolver authenticated the NS response.' : 'The resolver did not authenticate this response; that alone does not establish a DNSSEC failure.', state: host.authenticated ? 'PASS' : 'INFO' },
  ];
  const recommendations = [
    host.status === 'ERROR' ? 'Retry or choose another resolver before treating nameserver records as absent.' : !report.entries.length ? 'Enter the zone name from your DNS provider. This tool keeps your exact hostname and does not guess its registrable domain.' : invalid.length || aliases ? 'Review unsupported target values and nameserver aliases with your DNS provider before changing the delegation.' : 'Compare these nameserver names with your DNS provider and registrar settings. A provider-name hint alone is not a configuration check.',
    inZone ? 'For nameservers within the delegated zone, verify the parent glue records separately. Ordinary A and AAAA lookups do not establish what the parent publishes.' : 'For a full delegation audit, compare the parent referral with the child authoritative NS set using a tool that queries those servers directly.',
    'Allow relevant cached answers to expire after a change and compare another resolver. NS TTLs here are not a global propagation deadline.',
  ];
  return { diagnostics, recommendations, serverCount: names.length, resolved, providers, invalidCount: invalid.length };
}

export function nsReportCsv(report: NsLookupReport): string {
  const rows: (string | number)[][] = [['Queried hostname', 'Record owner', 'Nameserver', 'Provider-name hint', 'Within record owner', 'IPv4 addresses', 'IPv6 addresses', 'NS TTL (seconds)', 'Original NS value', 'DNS status', 'Address details', 'Resolver', 'Checked at (UTC)']];
  for (const entry of report.entries) {
    const check = report.addressChecks.find(check => check.name === entry.server);
    const detail = !entry.valid ? 'Unsupported hostname; not queried' : check?.skippedReason || [check?.ipv4 && 'A: ' + check.ipv4.status + (check.ipv4.error ? ' ' + check.ipv4.error : ''), check?.ipv6 && 'AAAA: ' + check.ipv6.status + (check.ipv6.error ? ' ' + check.ipv6.error : '')].filter(Boolean).join(' | ');
    rows.push([report.domain, entry.name, entry.server, entry.provider || '', entry.inZone ? 'Yes; parent glue not checked' : 'No', nsAddresses(check, 'A').join(' | '), nsAddresses(check, 'AAAA').join(' | '), entry.ttl, entry.value, report.hosts[0].status, detail, report.resolver, report.checkedAt]);
  }
  if (!report.entries.length) rows.push([report.domain, '', '', '', '', '', '', '', '', report.hosts[0].status, report.hosts[0].error || 'No NS answer returned', report.resolver, report.checkedAt]);
  return dnsCsv(rows);
}

export function nsExportReport(report: NsLookupReport): DnsExportReport {
  const hosts: DnsHostResult[] = [report.hosts[0], ...report.addressChecks.filter(check => !check.skippedReason).map(check => ({
    name: check.name,
    records: [...(check.ipv4?.records || []), ...(check.ipv6?.records || [])].filter((record, index, all) => all.findIndex(other => other.name === record.name && other.type === record.type && other.value === record.value) === index),
    status: check.ipv4?.status === 'ERROR' || check.ipv6?.status === 'ERROR' ? 'ERROR' as const : check.ipv4?.status === 'NXDOMAIN' && check.ipv6?.status === 'NXDOMAIN' ? 'NXDOMAIN' as const : 'NOERROR' as const,
    authenticated: !!check.ipv4?.authenticated && !!check.ipv6?.authenticated,
    error: [check.ipv4?.error && 'A: ' + check.ipv4.error, check.ipv6?.error && 'AAAA: ' + check.ipv6.error].filter(Boolean).join(' | ') || undefined,
  }))];
  const unique = new Map<string, DnsHostResult>();
  for (const host of hosts) {
    const previous = unique.get(host.name);
    unique.set(host.name, previous ? {
      name: host.name,
      records: [...previous.records, ...host.records].filter((record, index, all) => all.findIndex(other => other.name === record.name && other.type === record.type && other.value === record.value) === index),
      status: previous.status === 'ERROR' || host.status === 'ERROR' ? 'ERROR' : previous.status === 'NXDOMAIN' || host.status === 'NXDOMAIN' ? 'NXDOMAIN' : 'NOERROR',
      authenticated: previous.authenticated && host.authenticated,
      error: [previous.error, host.error].filter(Boolean).join(' | ') || undefined,
    } : host);
  }
  return { ...report, hosts: [...unique.values()] };
}
