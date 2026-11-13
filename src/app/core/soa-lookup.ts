import { DnsLookupReport, DnsResolverId, lookupDns } from './dns-lookup';
import { dnsCsv } from './dns-report-export';

export interface SoaFields {
  primary: string; rname: string; contact: string | null; serial: number;
  refresh: number; retry: number; expire: number; minimum: number;
}
export interface SoaEntry { name: string; ttl: number; rawValue: string; fields: SoaFields | null; negativeCacheBound: number | null; }
export interface SoaLookupReport extends DnsLookupReport { entries: SoaEntry[]; }
interface SoaDiagnostic { label: string; detail: string; state: 'PASS' | 'REVIEW' | 'INFO' | 'FAIL'; }

function nameLabels(value: string): string[] | null {
  if (value === '.') return [];
  const labels: string[] = [], encoder = new TextEncoder();
  let bytes: number[] = [], wireLength = 1;
  const finish = () => {
    if (!bytes.length || bytes.length > 63) return false;
    wireLength += bytes.length + 1;
    try { labels.push(new TextDecoder('utf-8', { fatal: true, ignoreBOM: true }).decode(Uint8Array.from(bytes))); }
    catch { return false; }
    bytes = []; return wireLength <= 255;
  };
  for (let i = 0; i < value.length;) {
    if (value[i] === '.') { if (!finish()) return null; i++; continue; }
    if (value[i] === '\\') {
      i++; if (i === value.length) return null;
      const decimal = value.slice(i).match(/^\d{3}/);
      if (decimal) { const byte = Number(decimal[0]); if (byte > 255) return null; bytes.push(byte); i += 3; continue; }
    }
    const char = String.fromCodePoint(value.codePointAt(i)!); bytes.push(...encoder.encode(char)); i += char.length;
  }
  if (bytes.length && !finish()) return null;
  return labels.length ? labels : null;
}

/** SOA presentation contains two DNS names and five unsigned 32-bit integers. */
export function parseSoaValue(raw: string): SoaFields | null {
  const tokens: string[] = []; let token = '';
  for (let i = 0; i < raw.length; i++) {
    if (raw[i] === '\\') { if (++i === raw.length) return null; token += '\\' + raw[i]; }
    else if (/\s/.test(raw[i])) { if (token) tokens.push(token); token = ''; }
    else token += raw[i];
  }
  if (token) tokens.push(token);
  if (tokens.length !== 7 || !tokens.slice(2).every(value => /^\d+$/.test(value) && Number(value) <= 0xffffffff)) return null;
  const primary = nameLabels(tokens[0]), contact = nameLabels(tokens[1]);
  if (!primary || !contact) return null;
  const [serial, refresh, retry, expire, minimum] = tokens.slice(2).map(Number);
  return { primary: primary.join('.') || '.', rname: tokens[1], contact: contact.length >= 2 ? contact[0] + '@' + contact.slice(1).join('.') : null, serial, refresh, retry, expire, minimum };
}

export function soaDuration(seconds: number): string {
  if (!Number.isInteger(seconds) || seconds < 0) return 'Not available';
  const values: string[] = [];
  for (const [unit, size] of [['d', 86400], ['h', 3600], ['m', 60], ['s', 1]] as const) {
    const count = Math.floor(seconds / size); seconds %= size; if (count) values.push(count + unit);
  }
  return values.join(' ') || '0s';
}

export async function lookupSoa(input: string, resolver: DnsResolverId, signal?: AbortSignal): Promise<SoaLookupReport> {
  signal?.throwIfAborted();
  const report = await lookupDns(input, 'SOA', resolver, false, signal);
  signal?.throwIfAborted();
  const entries = report.hosts[0].records.filter(record => record.type === 'SOA').map(record => {
    const fields = parseSoaValue(record.value);
    return { name: record.name, ttl: record.ttl, rawValue: record.value, fields,
      negativeCacheBound: fields && Number.isInteger(record.ttl) && record.ttl >= 0 ? Math.min(record.ttl, fields.minimum) : null };
  });
  return { ...report, entries };
}

export function soaAnalysis(report: SoaLookupReport) {
  const host = report.hosts[0], entries = report.entries, parsed = entries.filter(entry => entry.fields);
  const first = parsed[0], fields = first?.fields, invalid = entries.length - parsed.length;
  const owners = new Map<string, Set<string>>();
  entries.forEach(entry => { const name = entry.name.toLowerCase(); const values = owners.get(name) || new Set<string>(); values.add(entry.rawValue); owners.set(name, values); });
  const multiple = [...owners].some(([, values]) => values.size > 1);
  const timerReview = parsed.some(entry => entry.fields!.retry > entry.fields!.refresh || entry.fields!.expire <= entry.fields!.refresh || entry.fields!.refresh === 0 || entry.fields!.retry === 0);
  const diagnostics: SoaDiagnostic[] = [
    { label: 'SOA response', detail: host.status === 'ERROR' ? host.error || 'The resolver request failed.' : host.status === 'NXDOMAIN' ? 'The queried hostname does not exist according to this resolver.' : entries.length ? entries.length + ' SOA answer(s) returned. ' + (multiple ? 'Different SOA values were returned for the same owner; review the response.' : 'Record owners are shown in the result.') : 'No SOA answer returned. Try the actual zone apex; a subdomain need not have its own SOA.', state: host.status === 'ERROR' ? 'FAIL' : host.status === 'NXDOMAIN' || multiple ? 'REVIEW' : entries.length ? 'PASS' : 'INFO' },
    { label: 'Field decoding', detail: invalid ? invalid + ' value(s) could not be decoded as two DNS names and five unsigned 32-bit integers. Original values are preserved.' : parsed.length ? 'The SOA fields were decoded successfully.' : 'No SOA fields to decode.', state: invalid ? 'REVIEW' : parsed.length ? 'PASS' : 'INFO' },
    { label: 'Primary and contact', detail: fields ? fields.primary + ' | ' + (fields.contact || 'No mailbox could be displayed from RNAME: ' + fields.rname) + '. These are published DNS fields, not verified contacts.' : 'Not available from a decoded answer.', state: 'INFO' },
    { label: 'Zone serial', detail: fields ? String(fields.serial) + '. A zone version number; its value alone is not evidence of the last update date or nameserver agreement.' : 'No decoded serial available.', state: 'INFO' },
    { label: 'Refresh / retry / expire', detail: fields ? 'Refresh ' + soaDuration(fields.refresh) + ' | Retry ' + soaDuration(fields.retry) + ' | Expire ' + soaDuration(fields.expire) + '. ' + (timerReview ? 'Review zero refresh/retry, retry above refresh, or expire at/below refresh against your DNS provider settings.' : 'These timers describe secondary-server maintenance, not a browser cache deadline.') : 'No decoded timers available.', state: timerReview ? 'REVIEW' : 'INFO' },
    { label: 'Negative caching', detail: fields ? 'MINIMUM ' + fields.minimum + 's; SOA TTL ' + first.ttl + 's. ' + (first.negativeCacheBound === null ? 'No usable TTL for a comparison.' : 'The smaller value in this snapshot is ' + first.negativeCacheBound + 's (' + soaDuration(first.negativeCacheBound) + ').') + ' Actual negative-answer TTLs and cached answers can differ.' : 'No decoded MINIMUM available.', state: 'INFO' },
    { label: 'Query scope', detail: 'Only SOA at ' + report.domain + ' was queried through ' + report.resolver + '. Authoritative servers were not contacted directly or compared, and parent zones were not searched.', state: 'INFO' },
    { label: 'DNSSEC authentication', detail: host.authenticated ? 'The resolver authenticated this response.' : 'This response was not authenticated by the resolver; that alone does not establish a DNSSEC failure.', state: host.authenticated ? 'PASS' : 'INFO' },
  ];
  const recommendations = [
    host.status === 'ERROR' ? 'Retry or choose the other public resolver before treating the SOA as missing.' : !entries.length ? 'Check the zone name at your DNS provider. Enter that zone apex directly; the website hostname may belong to a parent zone.' : invalid || multiple ? 'Review the original SOA response with your DNS provider before relying on the decoded values.' : 'Compare the published primary server and serial with your DNS provider settings. Use direct authoritative-server checks if you need to verify synchronization.',
    'Keep the SOA record TTL and MINIMUM separate. The negative-cache TTL is constrained by both; this lookup is not a measurement of every resolver cache.',
    'Retain this timestamped report when investigating a change, then compare another resolver after relevant cached answers expire.',
  ];
  return { diagnostics, recommendations, parsedCount: parsed.length, multiple, timerReview };
}

export function soaReportCsv(report: SoaLookupReport): string {
  const rows: (string | number)[][] = [['Queried hostname', 'Zone / record owner', 'Primary nameserver', 'RNAME', 'Contact display', 'Serial', 'Refresh (seconds)', 'Retry (seconds)', 'Expire (seconds)', 'MINIMUM (seconds)', 'SOA TTL (seconds)', 'Smaller TTL / MINIMUM (seconds)', 'Original SOA value', 'DNS status', 'Detail', 'Resolver', 'Checked at (UTC)']];
  for (const entry of report.entries) { const f = entry.fields; rows.push([report.domain, entry.name, f?.primary ?? '', f?.rname ?? '', f?.contact ?? '', f?.serial ?? '', f?.refresh ?? '', f?.retry ?? '', f?.expire ?? '', f?.minimum ?? '', entry.ttl, entry.negativeCacheBound ?? '', entry.rawValue, report.hosts[0].status, f ? 'Decoded' : 'Original response retained; decoding unavailable', report.resolver, report.checkedAt]); }
  if (!report.entries.length) rows.push([report.domain, '', '', '', '', '', '', '', '', '', '', '', '', report.hosts[0].status, report.hosts[0].error || 'No SOA answer returned', report.resolver, report.checkedAt]);
  return dnsCsv(rows);
}
