import { DNS_LOOKUP_TYPES, DnsHostResult, DnsLookupRecord, DnsResolverId, lookupDns, normalizeDnsDomain } from './dns-lookup';
import { dnsCsv, DnsExportReport } from './dns-report-export';

export const ALL_DNS_SECTIONS = [
  { key: 'A', title: 'IPv4 addresses', description: 'Addresses used for IPv4 connections.', icon: 'dns' },
  { key: 'AAAA', title: 'IPv6 addresses', description: 'Addresses used for IPv6 connections.', icon: 'public' },
  { key: 'MX', title: 'Mail servers', description: 'Mail destinations, preceded by their delivery priority.', icon: 'mail' },
  { key: 'TXT', title: 'Text records', description: 'Verification strings and other published text.', icon: 'notes' },
  { key: 'CNAME', title: 'Canonical names', description: 'Aliases returned for the queried hostname.', icon: 'link' },
  { key: 'NS', title: 'Nameservers', description: 'DNS servers listed for this domain.', icon: 'account_tree' },
  { key: 'SOA', title: 'Start of authority', description: 'Zone authority, serial number and timing values.', icon: 'admin_panel_settings' },
  { key: 'CAA', title: 'Certificate authorities', description: 'Certificate issuance rules published at this name.', icon: 'verified_user' },
  { key: 'SPF', title: 'Sender policy', description: 'SPF policies found in the domain’s TXT answers.', icon: 'mark_email_read' },
  { key: 'DMARC', title: 'Email policy', description: 'DMARC policies published at _dmarc for this domain.', icon: 'policy' },
] as const;
export type DnsSectionKey = typeof ALL_DNS_SECTIONS[number]['key'];
export interface DnsRecordSection extends DnsHostResult { key: DnsSectionKey; queryType: string; }
export interface AllDnsReport {
  domain: string; resolver: string; checkedAt: string; durationMs: number; queryCount: number;
  sections: DnsRecordSection[];
}
const recordKey = (record: DnsLookupRecord) => JSON.stringify([record.name, record.type, record.value]);
export const uniqueDnsRecords = (records: DnsLookupRecord[]) => [...new Map(records.map(record => [recordKey(record), record])).values()];

/** Query explicit types rather than ANY; SPF reuses TXT and DMARC has its own name. */
export async function lookupAllDns(input: string, resolver: DnsResolverId, signal?: AbortSignal, progress?: (completed: number) => void): Promise<AllDnsReport> {
  const domain = normalizeDnsDomain(input), start = performance.now();
  let completed = 0;
  const queries = [...DNS_LOOKUP_TYPES.map(type => ({ key: type, name: domain, type })), { key: 'DMARC' as const, name: '_dmarc.' + domain, type: 'TXT' as const }];
  const results = await Promise.all(queries.map(async query => {
    const result = await lookupDns(query.name, query.type, resolver, false, signal);
    signal?.throwIfAborted(); progress?.(++completed);
    return { key: query.key, queryType: query.type, resolver: result.resolver, ...result.hosts[0] };
  }));
  signal?.throwIfAborted();
  const sections: DnsRecordSection[] = ALL_DNS_SECTIONS.map(definition => {
    const source = results.find(query => query.key === (definition.key === 'SPF' ? 'TXT' : definition.key))!;
    const records = source.records.filter(record => {
      if (definition.key === 'SPF') return record.type === 'TXT' && /^v=spf1(?:\s|$)/i.test(record.value.replace(/^"/, ''));
      if (definition.key === 'DMARC') return record.type === 'TXT' && /^v=DMARC1\s*;/i.test(record.value.replace(/^"/, ''));
      return record.type === definition.key;
    });
    return { key: definition.key, queryType: source.queryType, name: source.name, status: source.status, authenticated: source.authenticated, error: source.error, records: uniqueDnsRecords(records) };
  });
  return { domain, resolver: results[0].resolver, checkedAt: new Date().toISOString(), durationMs: Math.round(performance.now() - start), queryCount: queries.length, sections };
}

/** A hostname-level view for the shared PDF; retain partial query failures. */
export function allDnsExportReport(report: AllDnsReport): DnsExportReport {
  const sections = report.sections.filter(section => section.key !== 'SPF');
  const hosts = [...new Set(sections.map(section => section.name))].map(name => {
    const queries = sections.filter(section => section.name === name);
    const failed = queries.filter(query => query.status === 'ERROR');
    return {
      name, records: uniqueDnsRecords(queries.flatMap(query => query.records)),
      status: failed.length ? 'ERROR' as const : queries.some(query => query.status === 'NXDOMAIN') ? 'NXDOMAIN' as const : 'NOERROR' as const,
      error: failed.length ? failed.map(query => query.key + ': ' + query.error).join(' | ') : undefined,
      authenticated: queries.every(query => query.authenticated),
    };
  });
  return { ...report, type: 'ALL', hosts, queriedTypes: 'A, AAAA, MX, TXT, CNAME, NS, SOA, CAA; SPF from TXT; DMARC at _dmarc' };
}

export function allDnsReportCsv(report: AllDnsReport): string {
  const rows: (string | number)[][] = [['Section', 'Queried hostname', 'Query type', 'DNS status', 'Record name', 'Record type', 'TTL (seconds)', 'Value', 'Detail', 'Resolver', 'Checked at (UTC)']];
  for (const section of report.sections) {
    const context = [section.key, section.name, section.queryType, section.status];
    const metadata = [section.error || '', report.resolver, report.checkedAt];
    if (!section.records.length) rows.push([...context, '', '', '', '', ...metadata]);
    for (const record of section.records) rows.push([...context, record.name, record.type, record.ttl, record.value, ...metadata]);
  }
  return dnsCsv(rows);
}
