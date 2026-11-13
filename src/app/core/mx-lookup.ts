import { DnsHostResult, DnsLookupRecord, DnsLookupReport, DnsResolverId, lookupDns, normalizeDnsDomain } from './dns-lookup';
import { DnsExportReport, dnsCsv } from './dns-report-export';

export interface MxExchange {
  name: string; value: string; ttl: number; preference: number | null; exchange: string;
  valid: boolean; nullMx: boolean;
}
export interface MxAddressCheck {
  name: string; ipv4: DnsHostResult | null; ipv6: DnsHostResult | null; skippedReason?: string;
}
export interface MxLookupReport extends DnsLookupReport {
  exchangers: MxExchange[]; addressChecks: MxAddressCheck[]; resolveAddresses: boolean; queryCount: number;
}
export type MxCheckState = 'PASS' | 'REVIEW' | 'INFO' | 'FAIL';
export interface MxDiagnostic { label: string; detail: string; state: MxCheckState; }
export const MX_ADDRESS_LIMIT = 16;

export function parseMxRecord(record: DnsLookupRecord): MxExchange {
  const match = record.value.trim().match(/^(\d{1,5})\s+(\S+)$/);
  const preference = match && Number(match[1]) <= 65535 ? Number(match[1]) : null;
  const rawExchange = match?.[2] || record.value;
  const exchange = rawExchange === '.' ? '.' : rawExchange.replace(/\.$/, '').toLowerCase();
  let valid = preference !== null;
  if (exchange === '.') valid = valid && preference === 0;
  else {
    try { valid = valid && normalizeDnsDomain(exchange) === exchange && exchange.split('.').every(label => /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i.test(label)); }
    catch { valid = false; }
  }
  return { name: record.name, value: record.value, ttl: record.ttl, preference, exchange, valid, nullMx: valid && exchange === '.' };
}

/** Browser DNS queries only: no SMTP connections, messages or mailbox probes. */
export async function lookupMx(input: string, resolver: DnsResolverId, resolveAddresses = true, signal?: AbortSignal, progress?: (message: string) => void): Promise<MxLookupReport> {
  const start = performance.now(); signal?.throwIfAborted();
  progress?.('Finding mail exchangers…');
  const base = await lookupDns(input, 'MX', resolver, false, signal);
  const exchangers = base.hosts[0].records.filter(record => record.type === 'MX').map(parseMxRecord)
    .sort((a, b) => (a.preference ?? Infinity) - (b.preference ?? Infinity) || a.exchange.localeCompare(b.exchange));
  const names = [...new Set(exchangers.filter(item => item.valid && !item.nullMx).map(item => item.exchange))];
  const addressChecks: MxAddressCheck[] = names.map((name, index) => ({ name, ipv4: null, ipv6: null,
    skippedReason: !resolveAddresses ? 'Address checks were turned off.' : index >= MX_ADDRESS_LIMIT ? 'Address checks are limited to the first ' + MX_ADDRESS_LIMIT + ' unique mail servers.' : undefined,
  }));
  let queryCount = 1, next = 0, completed = 0;
  const targets = addressChecks.filter(check => !check.skippedReason);
  const worker = async () => {
    while (next < targets.length) {
      signal?.throwIfAborted(); const target = targets[next++];
      progress?.('Resolving mail-server addresses · ' + completed + ' of ' + targets.length);
      const [ipv4, ipv6] = await Promise.all([
        lookupDns(target.name, 'A', resolver, false, signal),
        lookupDns(target.name, 'AAAA', resolver, false, signal),
      ]);
      signal?.throwIfAborted(); target.ipv4 = ipv4.hosts[0]; target.ipv6 = ipv6.hosts[0]; queryCount += 2;
      progress?.('Resolving mail-server addresses · ' + ++completed + ' of ' + targets.length);
    }
  };
  await Promise.all(Array.from({ length: Math.min(4, targets.length) }, worker));
  signal?.throwIfAborted();
  return { ...base, checkedAt: new Date().toISOString(), durationMs: Math.round(performance.now() - start), exchangers, addressChecks, resolveAddresses, queryCount };
}

export const mxAddresses = (check: MxAddressCheck | undefined, family: 'A' | 'AAAA') =>
  (family === 'A' ? check?.ipv4 : check?.ipv6)?.records.filter(record => record.type === family).map(record => record.value) || [];

export function mxAnalysis(report: MxLookupReport) {
  const host = report.hosts[0], entries = report.exchangers;
  const servers = entries.filter(item => item.valid && !item.nullMx);
  const invalid = entries.filter(item => !item.valid);
  const nullMx = entries.some(item => item.nullMx);
  const nullConflict = nullMx && entries.length !== 1;
  const preferences = [...new Set(servers.map(item => item.preference!))].sort((a, b) => a - b);
  const primaryPreference = preferences[0] ?? null;
  const addressFailures = report.addressChecks.filter(check => check.ipv4?.status === 'ERROR' || check.ipv6?.status === 'ERROR');
  const unresolved = report.addressChecks.filter(check => !check.skippedReason && !mxAddresses(check, 'A').length && !mxAddresses(check, 'AAAA').length);
  const aliases = report.addressChecks.filter(check => [check.ipv4, check.ipv6].some(answer => answer?.records.some(record => record.type === 'CNAME')));
  const resolved = report.addressChecks.filter(check => mxAddresses(check, 'A').length || mxAddresses(check, 'AAAA').length).length;
  const skipped = report.addressChecks.filter(check => check.skippedReason).length;
  const diagnostics: MxDiagnostic[] = [
    { label: 'MX response', detail: host.status === 'ERROR' ? host.error || 'The resolver request failed.' : host.status === 'NXDOMAIN' ? 'The queried DNS name does not exist.' : nullMx && !nullConflict ? 'Null MX (0 .): the domain explicitly accepts no mail.' : entries.length ? entries.length + ' MX record(s) returned by the resolver.' : 'No MX returned. SMTP may use implicit A/AAAA fallback; that fallback is not tested here.', state: host.status === 'ERROR' ? 'FAIL' : host.status === 'NXDOMAIN' ? 'REVIEW' : entries.length && !nullMx ? 'PASS' : 'INFO' },
    { label: 'Record format', detail: nullConflict ? 'Null MX must be the only MX record for a name.' : invalid.length ? invalid.length + ' malformed MX value(s). Review the original values below.' : entries.length ? 'Preference numbers and exchange names have valid syntax.' : 'No MX records to validate.', state: nullConflict || invalid.length ? 'FAIL' : entries.length ? 'PASS' : 'INFO' },
    { label: 'Preference order', detail: preferences.length ? 'Lowest preference: ' + primaryPreference + '. ' + preferences.length + ' preference group(s); equal values share a preference.' : 'No mail-server preference order to compare.', state: 'INFO' },
    { label: 'Server addresses', detail: !report.addressChecks.length ? 'No mail-server address lookups were needed.' : `${resolved} of ${report.addressChecks.length} unique targets have A or AAAA answers.${addressFailures.length ? ' ' + addressFailures.length + ' target(s) had a failed address query.' : ''}${unresolved.length ? ' ' + unresolved.length + ' target(s) have no captured address.' : ''}${skipped ? ' ' + skipped + ' target(s) were not checked.' : ''}`, state: addressFailures.length || unresolved.length ? 'REVIEW' : skipped || !report.addressChecks.length ? 'INFO' : 'PASS' },
    { label: 'MX target aliases', detail: aliases.length ? aliases.length + ' target(s) returned CNAME aliases. An MX destination should have its own address records.' : report.addressChecks.some(check => !check.skippedReason) ? 'No CNAME aliases were returned in the captured address answers.' : 'Address answers were not available to check aliases.', state: aliases.length ? 'REVIEW' : 'INFO' },
    { label: 'DNSSEC authentication', detail: host.authenticated ? 'The resolver authenticated the MX response.' : 'The resolver did not authenticate the MX response; this alone does not prove a DNSSEC problem.', state: host.authenticated ? 'PASS' : 'INFO' },
  ];
  const recommendations: string[] = [];
  if (host.status === 'ERROR') recommendations.push('Retry the MX query or choose the other resolver. A failed request is not evidence that a domain has no mail servers.');
  else if (host.status === 'NXDOMAIN') recommendations.push('Check the domain spelling and registration or delegation before changing mail routing.');
  else if (nullConflict || invalid.length) recommendations.push('Review the published MX records at your DNS provider. Correct malformed values and remove any mix of Null MX with other exchangers.');
  else if (nullMx) recommendations.push('Keep Null MX if this domain should reject incoming email. If it should receive mail, replace it with the exact MX settings supplied by your email provider.');
  else recommendations.push("Compare the exchange names and preference values with your email provider's instructions. One hostname can represent a resilient platform; the record count alone does not measure redundancy.");
  if (addressFailures.length || unresolved.length || aliases.length) recommendations.push('Review the address-query details for each target. Retry failed queries and confirm that MX destinations resolve to their own A or AAAA records.');
  else recommendations.push('DNS answers do not test SMTP reachability, TLS, spam filtering or delivery to a mailbox. Use mail-service monitoring to check those separately.');
  recommendations.push('After changing records, allow the cached TTL to expire and compare another public resolver. SPF and DMARC are separate TXT-based policies.');
  return { diagnostics, recommendations, primaryPreference, nullMx, nullConflict, resolved, serverCount: new Set(servers.map(item => item.exchange)).size };
}

export function mxReportCsv(report: MxLookupReport): string {
  const analysis = mxAnalysis(report);
  const rows: (string | number)[][] = [['Domain', 'Record name', 'Preference', 'Mail exchanger', 'Order', 'IPv4 addresses', 'IPv6 addresses', 'MX TTL (seconds)', 'Original MX value', 'MX DNS status', 'Address detail', 'Resolver', 'Checked at (UTC)']];
  for (const entry of report.exchangers) {
    const check = report.addressChecks.find(check => check.name === entry.exchange);
    const detail = check?.skippedReason || [check?.ipv4 && 'A: ' + check.ipv4.status + (check.ipv4.error ? ' ' + check.ipv4.error : ''), check?.ipv6 && 'AAAA: ' + check.ipv6.status + (check.ipv6.error ? ' ' + check.ipv6.error : '')].filter(Boolean).join(' | ');
    rows.push([report.domain, entry.name, entry.preference ?? '', entry.exchange, !entry.valid ? 'Invalid' : entry.nullMx ? 'Null MX' : entry.preference === analysis.primaryPreference ? 'Preferred' : 'Fallback', mxAddresses(check, 'A').join(' | '), mxAddresses(check, 'AAAA').join(' | '), entry.ttl, entry.value, report.hosts[0].status, detail, report.resolver, report.checkedAt]);
  }
  if (!report.exchangers.length) rows.push([report.domain, report.domain, '', '', '', '', '', '', '', report.hosts[0].status, report.hosts[0].error || 'No MX answers returned', report.resolver, report.checkedAt]);
  return dnsCsv(rows);
}

export function mxExportReport(report: MxLookupReport): DnsExportReport {
  const root = { ...report.hosts[0], records: [...report.hosts[0].records].sort((a, b) => (a.type === 'MX' ? parseMxRecord(a).preference ?? Infinity : -1) - (b.type === 'MX' ? parseMxRecord(b).preference ?? Infinity : -1)) };
  const hosts: DnsHostResult[] = [root, ...report.addressChecks.filter(check => !check.skippedReason).map(check => ({
    name: check.name,
    records: [...(check.ipv4?.records || []), ...(check.ipv6?.records || [])].filter((record, index, all) => all.findIndex(other => other.name === record.name && other.type === record.type && other.value === record.value) === index),
    status: check.ipv4?.status === 'ERROR' || check.ipv6?.status === 'ERROR' ? 'ERROR' as const : check.ipv4?.status === 'NXDOMAIN' && check.ipv6?.status === 'NXDOMAIN' ? 'NXDOMAIN' as const : 'NOERROR' as const,
    authenticated: !!check.ipv4?.authenticated && !!check.ipv6?.authenticated,
    error: [check.ipv4?.error && 'A: ' + check.ipv4.error, check.ipv6?.error && 'AAAA: ' + check.ipv6.error].filter(Boolean).join(' | ') || undefined,
  }))];
  return { ...report, hosts };
}
