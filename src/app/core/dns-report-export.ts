import type { DnsLookupReport, DnsLookupType, DnsResolverId } from './dns-lookup';

export type DnsExportReport = Omit<DnsLookupReport, 'type'> & { type: DnsLookupType | 'ALL'; queriedTypes?: string; };

export function dnsCsv(rows: (string | number)[][]): string {
  const cell = (value: string | number) => {
    let text = String(value).replace(/\x00/g, '');
    // Quoting alone does not prevent spreadsheet formulas from being evaluated.
    if (/^\s*[=+\-@]/.test(text)) text = "'" + text;
    return '"' + text.replace(/"/g, '""') + '"';
  };
  return '\ufeff' + rows.map(row => row.map(cell).join(',')).join('\r\n');
}

export function dnsReportCsv(report: DnsLookupReport): string {
  const rows: (string | number)[][] = [['Queried hostname', 'Record name', 'Type', 'TTL (seconds)', 'Value', 'DNS status', 'Detail', 'Resolver', 'Checked at (UTC)']];
  for (const host of report.hosts) {
    if (!host.records.length) rows.push([host.name, '', report.type, '', '', host.status, host.error || '', report.resolver, report.checkedAt]);
    for (const record of host.records) rows.push([host.name, record.name, record.type, record.ttl, record.value, host.status, '', report.resolver, report.checkedAt]);
  }
  return dnsCsv(rows);
}

export function dnsShareUrl(base: string, domain: string, type: DnsLookupType, resolver: DnsResolverId, includeWww: boolean): string {
  const url = new URL(base);
  url.search = new URLSearchParams({ domain, type, resolver, www: includeWww ? '1' : '0' }).toString();
  url.hash = '';
  return url.href;
}
