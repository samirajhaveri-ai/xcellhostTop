import { DnsHostResult, DnsLookupRecord, DnsLookupReport, DnsResolverId, lookupDns, normalizeDnsDomain } from './dns-lookup';
import { dnsCsv, DnsExportReport } from './dns-report-export';

export const CNAME_HOP_LIMIT = 12;
export type CnameState = 'resolved' | 'direct' | 'loop' | 'limit' | 'invalid' | 'conflict' | 'error' | 'nxdomain';
export interface CnameHop { name: string; target: string; rawValue: string; ttl: number; service: string | null; }
export interface CnameLookupReport extends DnsLookupReport {
  hops: CnameHop[]; state: CnameState; detail: string; terminal: string | null;
  addressChecks: { type: 'A' | 'AAAA'; result: DnsHostResult }[];
  resolveAddresses: boolean;
}
interface CnameDiagnostic { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'INFO' | 'FAIL'; }
const dnsName = (value: string) => value.toLowerCase().replace(/\.$/, '');

/** Accept DNS hostname presentation only, never a URL or an arbitrary query fragment. */
export function cnameTarget(value: string): string | null {
  const name = dnsName(value);
  return name.length <= 253 && name.includes('.') && !/^[\d.]+$/.test(name) && name.split('.').every(label => /^(?:[a-z0-9_]|[a-z0-9_][a-z0-9_-]{0,61}[a-z0-9_])$/.test(label)) ? name : null;
}

/** Suffix hints describe the name, not a verified provider relationship or service health. */
export function cnameService(name: string): string | null {
  const target = dnsName(name);
  const suffixes: [string, string[]][] = [
    ['Amazon CloudFront', ['cloudfront.net']], ['GitHub Pages', ['github.io']],
    ['Cloudflare Pages / Workers', ['pages.dev', 'workers.dev']],
    ['Microsoft Azure', ['azureedge.net', 'azurefd.net', 'trafficmanager.net', 'azurewebsites.net']],
    ['Fastly', ['fastly.net']], ['Akamai', ['edgekey.net', 'edgesuite.net', 'akamaiedge.net']],
    ['Vercel', ['vercel-dns.com']], ['Netlify', ['netlify.app']],
  ];
  return suffixes.find(([, names]) => names.some(suffix => target === suffix || target.endsWith('.' + suffix)))?.[0] || null;
}

export async function lookupCname(input: string, resolver: DnsResolverId, resolveAddresses: boolean, signal?: AbortSignal): Promise<CnameLookupReport> {
  signal?.throwIfAborted();
  const domain = normalizeDnsDomain(input), start = performance.now();
  const deadline = AbortSignal.timeout(30000), combined = signal ? AbortSignal.any([signal, deadline]) : deadline;
  const hosts: DnsHostResult[] = [], pool: DnsLookupRecord[] = [], hops: CnameHop[] = [];
  const queried = new Set<string>(), visited = new Set([domain]);
  let current = domain, state: CnameState = 'direct', detail = '', terminal: string | null = null, resolverName = '';
  const query = async (name: string, type: 'CNAME' | 'A' | 'AAAA'): Promise<DnsHostResult> => {
    signal?.throwIfAborted();
    try {
      combined.throwIfAborted();
      const report = await lookupDns(name, type, resolver, false, combined);
      resolverName = report.resolver; return report.hosts[0];
    } catch (error) {
      signal?.throwIfAborted();
      if (!deadline.aborted) throw error;
      return { name, records: [], status: 'ERROR', authenticated: false, error: 'The 30-second lookup limit was reached. Retry or choose another resolver.' };
    }
  };
  while (true) {
    let records = pool.filter(record => dnsName(record.name) === current);
    if (!records.length && !queried.has(current)) {
      const host = await query(current, 'CNAME'); hosts.push(host); queried.add(current); pool.push(...host.records);
      if (host.status !== 'NOERROR') {
        state = host.status === 'NXDOMAIN' ? 'nxdomain' : 'error';
        detail = host.error || 'The resolver reports that ' + current + ' does not exist.'; break;
      }
      records = pool.filter(record => dnsName(record.name) === current);
    }
    const candidates = records.filter(record => record.type === 'CNAME');
    if (!candidates.length) {
      terminal = current; state = hops.length ? 'resolved' : 'direct';
      detail = hops.length ? 'No further CNAME was returned for ' + current + '.' : 'No CNAME was returned for this hostname. A name can serve a website without being an alias.';
      break;
    }
    if (new Set(candidates.map(record => cnameTarget(record.value) || record.value)).size > 1) {
      state = 'conflict'; detail = 'Different CNAME targets were returned for ' + current + '. The chain was stopped rather than choosing one.'; break;
    }
    const record = candidates[0], target = cnameTarget(record.value);
    if (!target) { state = 'invalid'; detail = 'The target returned for ' + current + ' is not a supported fully qualified hostname. Its original value is retained in the response.'; break; }
    if (hops.length >= CNAME_HOP_LIMIT) { state = 'limit'; detail = 'Stopped after ' + CNAME_HOP_LIMIT + ' aliases. The final target has not been established.'; break; }
    hops.push({ name: current, target, rawValue: record.value, ttl: record.ttl, service: cnameService(target) });
    if (visited.has(target)) { state = 'loop'; detail = 'The alias chain returns to ' + target + '. Check the records forming this loop.'; break; }
    visited.add(target); current = target;
  }
  const addressChecks: CnameLookupReport['addressChecks'] = resolveAddresses && terminal
    ? await Promise.all((['A', 'AAAA'] as const).map(async type => ({ type, result: await query(terminal!, type) }))) : [];
  signal?.throwIfAborted();
  return { domain, type: 'CNAME', resolver: resolverName, checkedAt: new Date().toISOString(), durationMs: Math.round(performance.now() - start), hosts, hops, state, detail, terminal, addressChecks, resolveAddresses };
}

export function cnameAnalysis(report: CnameLookupReport) {
  const complete = report.state === 'resolved' || report.state === 'direct';
  const addresses = report.addressChecks.flatMap(check => check.result.records.filter(record => record.type === check.type));
  const addressErrors = report.addressChecks.filter(check => check.result.status === 'ERROR');
  const changedAlias = report.addressChecks.some(check => check.result.records.some(record => record.type === 'CNAME'));
  const serviceHints = [...new Set(report.hops.map(hop => hop.service).filter((name): name is string => !!name))];
  const diagnostics: CnameDiagnostic[] = [
    { label: 'Alias trace', detail: report.detail, state: complete ? report.hops.length ? 'PASS' : 'INFO' : report.state === 'error' || report.state === 'loop' ? 'FAIL' : 'REVIEW' },
    { label: 'Chain length', detail: report.hops.length + ' alias hop(s) observed; the trace is limited to ' + CNAME_HOP_LIMIT + '. ' + (report.hops.length > 1 ? 'Review whether each intermediate name is needed.' : 'Only names reachable from your input are followed.'), state: report.state === 'limit' ? 'REVIEW' : 'INFO' },
    { label: 'Target addresses', detail: !report.resolveAddresses ? 'Address checks were switched off.' : !report.terminal ? 'Not queried because the alias trace did not reach an endpoint.' : addressErrors.length ? addressErrors.map(check => check.type + ': ' + check.result.error).join(' | ') : changedAlias ? 'An alias appeared during the address checks. DNS may have changed; rerun the trace and compare responses.' : addresses.length ? addresses.length + ' A / AAAA answer(s) returned for ' + report.terminal + '. This is not a website availability test.' : 'No A or AAAA address was returned for the endpoint. Check whether this alias is intended for a non-web service.', state: addressErrors.length || changedAlias ? 'REVIEW' : addresses.length ? 'PASS' : 'INFO' },
    { label: 'Service-name hints', detail: serviceHints.length ? serviceHints.join(', ') + '. Matched by hostname suffix; the service and account ownership are not verified.' : 'No known service suffix matched. A custom target can be valid.', state: 'INFO' },
    { label: 'DNSSEC authentication', detail: report.hosts.every(host => host.authenticated) ? 'The resolver authenticated every captured CNAME query response.' : 'Not every CNAME query response was authenticated. This alone does not establish a DNSSEC failure.', state: report.hosts.every(host => host.authenticated) ? 'PASS' : 'INFO' },
    { label: 'DNS versus HTTP', detail: 'The trace checks DNS aliases, not HTTP redirects, TLS certificates or whether a service account can claim a target.', state: 'INFO' },
  ];
  const recommendations = [
    !complete ? 'Review the last captured DNS response and the reported stopping reason. Retry with another resolver before editing your DNS.' : !report.hops.length ? 'If you expected an alias, enter the exact subdomain, such as www.example.com. An apex can return addresses through provider-side flattening without exposing a CNAME.' : 'Compare each target with the hostname supplied by your hosting provider. Remove obsolete aliases after confirming that no active service depends on them.',
    report.hops.length > 1 ? 'Reduce unnecessary intermediate aliases where your provider supports it. Check the TTL at each step when investigating a recent change.' : 'When changing a target, allow existing resolver caches to expire and compare the result with your DNS provider settings.',
    'DNS results do not prove that a website is reachable or that an unused target is vulnerable. Confirm the service configuration and HTTP behavior separately.',
  ];
  return { diagnostics, recommendations, addresses, serviceHints, complete };
}

export function cnameReportCsv(report: CnameLookupReport): string {
  const rows: (string | number)[][] = [['Queried name', 'Query type', 'Record name', 'Record type', 'Value', 'TTL (seconds)', 'DNS status', 'Detail', 'Trace state', 'Resolver', 'Checked at (UTC)']];
  const queries = [...report.hosts.map(result => ({ type: 'CNAME', result })), ...report.addressChecks];
  for (const { type, result } of queries) {
    for (const record of result.records) rows.push([result.name, type, record.name, record.type, record.value, record.ttl, result.status, result.error || '', report.state, report.resolver, report.checkedAt]);
    if (!result.records.length) rows.push([result.name, type, '', '', '', '', result.status, result.error || 'No matching records returned', report.state, report.resolver, report.checkedAt]);
  }
  return dnsCsv(rows);
}

export function cnameExportReport(report: CnameLookupReport): DnsExportReport {
  // Merge repeated queried names for the PDF; JSON and CSV keep individual responses.
  const hosts = new Map<string, DnsHostResult>();
  for (const result of [...report.hosts, ...report.addressChecks.map(check => check.result)]) {
    const previous = hosts.get(result.name);
    hosts.set(result.name, previous ? {
      name: result.name, status: previous.status === 'ERROR' || result.status === 'ERROR' ? 'ERROR' : previous.status === 'NXDOMAIN' || result.status === 'NXDOMAIN' ? 'NXDOMAIN' : 'NOERROR',
      records: [...previous.records, ...result.records].filter((record, index, all) => all.findIndex(other => other.name === record.name && other.type === record.type && other.value === record.value) === index),
      authenticated: previous.authenticated && result.authenticated,
      error: [previous.error, result.error].filter(Boolean).join(' | ') || undefined,
    } : { ...result });
  }
  return { ...report, hosts: [...hosts.values()] };
}
