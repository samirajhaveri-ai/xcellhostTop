import { jsPDF } from 'jspdf';
import type { DnsExportReport } from './dns-report-export';

type CheckState = 'PASS' | 'REVIEW' | 'INFO' | 'FAIL';
interface Diagnostic { label: string; detail: string; state: CheckState; }
interface PdfCell { text: string; mono?: boolean; bold?: boolean; color?: string; right?: boolean; dot?: string; }
const COLORS = { navy: '#102847', ink: '#163254', muted: '#7286a2', blue: '#226cff', line: '#dce6f3', pale: '#f5f8fc', green: '#18935d', amber: '#cb780c', red: '#c7434a', white: '#ffffff' };
const stateColor = (state: CheckState) => ({ PASS: COLORS.green, REVIEW: COLORS.amber, INFO: COLORS.blue, FAIL: COLORS.red })[state];
const ipv4 = (value: string) => /^(?:0|[1-9]\d{0,2})(?:\.(?:0|[1-9]\d{0,2})){3}$/.test(value) && value.split('.').every(n => Number(n) <= 255);
const specialIpv4 = (value: string) => {
  const [a, b, c] = value.split('.').map(Number);
  return a === 0 || a === 10 || a === 127 || a >= 224 || (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && (b === 168 || (b === 0 && (c === 0 || c === 2)))) ||
    (a === 198 && (b === 18 || b === 19 || (b === 51 && c === 100))) || (a === 203 && b === 0 && c === 113);
};

/** Findings derived from the captured answers; no additional DNS or IP-provider claims. */
export function dnsReportAnalysis(report: DnsExportReport) {
  const all = report.hosts.flatMap(host => host.records);
  const requested = report.type === 'ALL' ? all : all.filter(record => record.type === report.type);
  const rootCount = report.hosts[0]?.records.filter(record => report.type === 'ALL' || record.type === report.type).length || 0;
  const typeLabel = report.type === 'ALL' ? 'DNS' : report.type;
  const failures = report.hosts.filter(host => host.status === 'ERROR');
  const missing = report.hosts.filter(host => host.status === 'NXDOMAIN');
  const ttls = requested.map(r => r.ttl).filter(ttl => Number.isFinite(ttl) && ttl >= 0);
  const ttlRange = ttls.length ? Math.min(...ttls) === Math.max(...ttls) ? Math.min(...ttls) + 's' : Math.min(...ttls) + '-' + Math.max(...ttls) + 's' : 'Not returned';
  const authenticated = report.hosts.filter(host => host.authenticated).length;
  const checks: Diagnostic[] = [
    { label: 'Requested records', detail: `${requested.length} ${typeLabel} answer${requested.length === 1 ? '' : 's'} across ${report.hosts.length} queried hostname${report.hosts.length === 1 ? '' : 's'}`, state: requested.length ? 'PASS' : 'REVIEW' },
    { label: 'DNS responses', detail: report.hosts.map(host => `${host.name === report.domain ? '@' : host.name === 'www.' + report.domain ? 'www' : host.name}: ${host.status}${host.error ? ' - ' + host.error : ''}`).join(' | '), state: failures.length ? 'FAIL' : missing.length ? 'REVIEW' : 'PASS' },
  ];
  if (report.type === 'A') {
    const invalid = requested.filter(record => !ipv4(record.value));
    checks.push({ label: 'IPv4 address format', detail: !requested.length ? 'No A addresses returned to validate' : invalid.length ? `${invalid.length} address value(s) are not valid IPv4` : 'All returned A addresses are well-formed', state: !requested.length ? 'INFO' : invalid.length ? 'FAIL' : 'PASS' });
    const special = requested.filter(record => ipv4(record.value) && specialIpv4(record.value));
    checks.push({ label: 'IPv4 address scope', detail: invalid.length ? 'Not assessed for malformed addresses' : !requested.length ? 'No A addresses returned to assess' : special.length ? `${special.length} private or special-purpose address value(s)` : 'No common private or special-purpose ranges detected', state: invalid.length || !requested.length ? 'INFO' : special.length ? 'REVIEW' : 'PASS' });
  }
  checks.push(
    { label: 'TTL / cache lifetime', detail: `${ttlRange}${ttls.length ? ' remaining in the resolver answer' : ''}`, state: ttls.length ? 'PASS' : 'INFO' },
    { label: 'DNSSEC authentication', detail: authenticated ? report.type === 'ALL' ? `All captured queries authenticated for ${authenticated} of ${report.hosts.length} hostnames` : `${authenticated} of ${report.hosts.length} responses authenticated by the resolver` : 'The resolver did not authenticate these responses', state: authenticated === report.hosts.length && authenticated > 0 ? 'PASS' : 'INFO' },
    { label: report.type === 'ALL' ? 'Query coverage' : report.type === 'AAAA' ? 'IPv6 lookup' : 'Other record types', detail: report.type === 'ALL' ? report.queriedTypes || 'Common DNS types at the supplied name' : report.type === 'AAAA' ? `${requested.length} AAAA answers returned` : `Only ${report.type} was queried; ${report.type === 'A' ? 'IPv6 (AAAA)' : 'other types'} were not checked`, state: 'INFO' },
    { label: 'Lookup duration', detail: `${report.durationMs} ms for the complete lookup`, state: 'INFO' },
  );
  const tips: string[] = [];
  if (failures.length) tips.push('One or more resolver requests failed. Retry the lookup or choose another resolver before drawing conclusions about the domain.');
  else if (missing.length) tips.push('A queried hostname returned NXDOMAIN. Check its spelling and whether that exact name should exist in your DNS configuration.');
  else if (report.type === 'A' && rootCount === 1) tips.push('A single A record can front a redundant load balancer or CDN. Confirm the platform\'s failover design separately; DNS alone cannot establish resilience.');
  else tips.push('Compare the returned destinations with the settings at your DNS provider. Multiple addresses or aliases can be intentional.');
  if (report.type === 'ALL') tips.push('This snapshot covers the supplied name and _dmarc. Other subdomains, DKIM selectors and the complete zone were not enumerated. Empty record types can be intentional.');
  else if (report.hosts.length > 1) tips.push('Review the root and www answers together. Different endpoints can be valid, but both names should match your intended domain setup.');
  tips.push(ttls.length ? 'When checking a recent change, repeat the lookup after the cached TTL expires and compare another public resolver if needed.' : 'If you expected a record, verify the selected type and hostname. A successful DNS response can still contain no matching answers.');
  return {
    rootCount, answerCount: all.length, ttlRange, checks, tips,
    badge: failures.length ? 'PARTIAL / ERROR' : missing.length ? 'REVIEW HOSTNAMES' : requested.length ? 'ANSWERS RECEIVED' : 'NO MATCHING ANSWERS',
    summary: rootCount ? `${rootCount} ${typeLabel} answer${rootCount === 1 ? '' : 's'} at the queried domain. ${report.hosts.length} hostname${report.hosts.length === 1 ? '' : 's'} checked.` : `No ${typeLabel} answers at the queried domain. Review the captured responses below.`,
  };
}

/** Branded A4 report with actual-answer diagnostics and repeated table headers. */
export function dnsReportPdf(report: DnsExportReport, options: { analysis?: ReturnType<typeof dnsReportAnalysis>; toolPath?: 'dns-lookup' | 'all-dns-records' | 'mx-lookup' } = {}): ArrayBuffer {
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  pdf.setProperties({ title: report.domain + (report.type === 'ALL' ? ' all DNS records' : ' DNS lookup'), author: 'XcellHost', subject: report.type + ' DNS report via ' + report.resolver });
  const analysis = options.analysis || dnsReportAnalysis(report);
  const mxLabels = options.toolPath === 'mx-lookup' ? new Map(report.hosts.map((host, index) => [host.name, index ? 'MX' + index : '@'])) : null;
  const margin = 12, width = 186, bottom = 280;
  const reportTitle = report.type === 'ALL' ? 'ALL DNS RECORDS REPORT' : 'DNS ' + report.type + ' RECORD REPORT';
  let y = 0;
  const printable = (value: string) => value.replace(/[\x00-\x08\x0b\x0c\x0e-\x1f]/g, '').replace(/[^\x00-\x7f]/g, c => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
  const font = (size: number, bold = false, mono = false) => { pdf.setFont(mono ? 'courier' : 'helvetica', bold ? 'bold' : 'normal'); pdf.setFontSize(size); pdf.setCharSpace(0); };
  const text = (value: string, x: number, top: number, size = 9, color = COLORS.ink, bold = false, mono = false, right = false) => {
    font(size, bold, mono); pdf.setTextColor(color); pdf.text(printable(value), x, top, { align: right ? 'right' : 'left' });
  };
  const wrap = (value: string, available: number, size = 9, bold = false, mono = false): string[] => { font(size, bold, mono); return pdf.splitTextToSize(printable(value), Math.max(1, available)); };
  const continuation = () => {
    pdf.addPage(); pdf.setFillColor(COLORS.navy); pdf.rect(0, 0, 210, 21, 'F');
    text('XCELLHOST / ' + reportTitle, margin, 10, 8, '#b8cce7', true, true);
    const shortDomain = report.domain.length > 100 ? report.domain.slice(0, 97) + '...' : report.domain;
    text(shortDomain, margin, 16, 8, COLORS.white); y = 30;
  };
  const reserve = (height: number) => { if (y + height > bottom) continuation(); };
  const label = (value: string) => { text(value.toUpperCase(), margin, y, 7.6, COLORS.muted, true, true); y += 4.5; };

  // Hero: domain, capture context and one primary metric.
  const domainLines = wrap(report.domain, 142, 20, true, true);
  const summaryLines = wrap(analysis.summary, 142, 8.7);
  const heroHeight = Math.max(43, 15 + domainLines.length * 7.2 + summaryLines.length * 4.3 + 13);
  pdf.setFillColor(COLORS.navy); pdf.rect(0, 0, 210, heroHeight, 'F');
  text('XCELLHOST / ' + reportTitle, margin, 11, 7.5, '#9db4d3', true, true);
  let heroY = 21;
  for (const line of domainLines) { text(line, margin, heroY, 20, COLORS.white, true, true); heroY += 7.2; }
  heroY += 1;
  for (const line of summaryLines) { text(line, margin, heroY, 8.7, '#b5c8e2'); heroY += 4.3; }
  const checked = new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: 'short', day: '2-digit', hour: 'numeric', minute: '2-digit', hour12: true }).format(new Date(report.checkedAt));
  text(checked + ' IST', margin, heroHeight - 5, 8, '#7faef5', false, true);
  pdf.setDrawColor('#284464'); pdf.line(163, 10, 163, heroHeight - 9);
  font(28, true, true);
  text(String(analysis.rootCount), 182 - pdf.getTextWidth(String(analysis.rootCount)) / 2, 22, 28, '#ff961f', true, true);
  text(report.type === 'ALL' ? 'DNS ANSWERS' : report.type + ' RECORDS', 167, 28, 7, '#b6c9e3', true, true);
  pdf.setFillColor(COLORS.white); pdf.roundedRect(166, 33, 32, 6, 1.5, 1.5, 'F');
  const badgeLines = wrap(analysis.badge, 30, 5.7, true, true);
  text(badgeLines[0], 168, 37, 5.7, '#bd6a0c', true, true);

  // Overview strip.
  pdf.setFillColor(COLORS.pale); pdf.rect(0, heroHeight, 210, 18, 'F');
  pdf.setDrawColor(COLORS.line); pdf.line(0, heroHeight + 18, 210, heroHeight + 18);
  const stats = [['RESOLVER', report.resolver], ['TTL RANGE (' + report.type + ')', analysis.ttlRange], ['HOSTNAMES CHECKED', String(report.hosts.length)]];
  stats.forEach(([name, value], index) => {
    const x = margin + index * 62;
    text(name, x, heroHeight + 6, 6.8, COLORS.muted, true, true);
    text(value, x, heroHeight + 12, 9.3, COLORS.ink, true, index > 0);
    if (index) { pdf.setDrawColor('#e9eef6'); pdf.line(x - 6, heroHeight + 4, x - 6, heroHeight + 14); }
  });
  y = heroHeight + 27;

  const table = (title: string, headings: string[], widths: number[], rows: PdfCell[][]) => {
    const padding = 3, lineHeight = 3.9;
    const head = (continued = false) => {
      label(title + (continued ? ' / continued' : ''));
      pdf.setFillColor(COLORS.pale); pdf.setDrawColor(COLORS.line); pdf.setLineWidth(.2);
      pdf.roundedRect(margin, y, width, 8, 2, 2, 'FD');
      let x = margin;
      headings.forEach((heading, i) => { text(heading.toUpperCase(), x + padding, y + 5.2, 6.5, COLORS.muted, true, true); x += widths[i]; });
      y += 8;
    };
    reserve(24); head();
    rows.forEach((row, rowIndex) => {
      const sizes = row.map(cell => cell.dot ? 8.2 : cell.right ? 7.3 : 8.3);
      const lines = row.map((cell, i) => wrap(cell.text, widths[i] - padding * 2 - (cell.dot ? 3 : 0), sizes[i], !!cell.bold, !!cell.mono));
      const maxLines = Math.max(1, ...lines.map(l => l.length));
      let offset = 0;
      while (offset < maxLines) {
        if (bottom - y < 11) { continuation(); head(true); }
        const capacity = Math.max(1, Math.floor((bottom - y - padding * 2) / lineHeight));
        const count = Math.min(maxLines - offset, capacity);
        const height = Math.max(10, count * lineHeight + padding * 2);
        pdf.setDrawColor(COLORS.line); pdf.setFillColor(rowIndex % 2 ? '#fbfcfe' : COLORS.white); pdf.rect(margin, y, width, height, 'FD');
        let x = margin;
        row.forEach((cell, index) => {
          if (cell.dot && offset === 0) { pdf.setFillColor(cell.dot); pdf.circle(x + padding + .6, y + 5.2, .85, 'F'); }
          const chunk = lines[index].slice(offset, offset + count);
          chunk.forEach((line, lineIndex) => text(line, cell.right ? x + widths[index] - padding : x + padding + (cell.dot ? 3 : 0), y + 6 + lineIndex * lineHeight, sizes[index], cell.color || COLORS.ink, !!cell.bold, !!cell.mono, !!cell.right));
          x += widths[index];
        });
        y += height; offset += count;
        if (offset < maxLines) { continuation(); head(true); }
      }
    });
    y += 8;
  };

  const recordRows: PdfCell[][] = [];
  for (const host of report.hosts) {
    const hostName = mxLabels?.get(host.name) || (host.name === report.domain ? '@' : host.name === 'www.' + report.domain ? 'www' : report.type === 'ALL' && host.name === '_dmarc.' + report.domain ? '_dmarc' : host.name);
    if (!host.records.length) recordRows.push([
      { text: hostName, mono: true }, { text: report.type, mono: true },
      { text: host.error || (host.status === 'NXDOMAIN' ? 'NXDOMAIN: hostname not found' : 'No matching records returned'), color: host.status === 'ERROR' ? COLORS.red : COLORS.muted },
      { text: host.name, mono: true }, { text: '-', right: true },
    ]);
    for (const record of host.records) recordRows.push([
      { text: hostName, mono: true, color: COLORS.muted }, { text: record.type, mono: true, bold: true, color: COLORS.blue },
      { text: record.value, mono: true, bold: record.type === 'A' || record.type === 'AAAA' },
      { text: record.name, mono: true, color: COLORS.muted }, { text: record.ttl + 's', mono: true, right: true, color: COLORS.muted },
    ]);
  }
  table('DNS records / ' + report.type + ' lookup', ['Host', 'Type', 'Answer / value', 'Record name', 'TTL'], report.type === 'ALL' ? [20, 17, 80, 49, 20] : [16, 17, 84, 49, 20], recordRows);
  const key = wrap(mxLabels ? [...mxLabels].map(([name, alias]) => alias + ' = ' + name).join(' | ') : '@ = ' + report.domain + (report.type === 'ALL' ? ' | _dmarc = its DMARC policy hostname' : ' | www = its www hostname'), width, 7.2);
  reserve(key.length * 3.5 + 8);
  key.forEach(line => { text(line, margin, y - 3, 7.2, COLORS.muted); y += 3.5; }); y += 3;

  if (report.type === 'ALL') reserve(95);
  table('Diagnostics', ['Check', 'Observed result', 'Status'], [53, 113, 20], analysis.checks.map(check => [
    { text: check.label, dot: stateColor(check.state) },
    { text: check.detail, mono: true },
    { text: check.state, mono: true, bold: true, right: true, color: stateColor(check.state) },
  ]));

  reserve(24); label('Recommendations');
  analysis.tips.forEach((tip, index) => {
    const lines = wrap(tip, width - 16, 8.3);
    let offset = 0;
    while (offset < lines.length) {
      if (bottom - y < 12) { continuation(); label('Recommendations / continued'); }
      const count = Math.min(lines.length - offset, Math.max(1, Math.floor((bottom - y - 6) / 3.9)));
      const height = count * 3.9 + 6;
      pdf.setFillColor('#f0f6ff'); pdf.setDrawColor('#d8e7ff'); pdf.roundedRect(margin, y, width, height, 2, 2, 'FD');
      text(String(index + 1), margin + 3.5, y + 6, 8, COLORS.blue, true, true);
      lines.slice(offset, offset + count).forEach((line, i) => text(line, margin + 10, y + 6 + i * 3.9, 8.3, '#3263bd'));
      y += height + 2; offset += count;
    }
  });

  const totalPages = pdf.getNumberOfPages();
  for (let page = 1; page <= totalPages; page++) {
    pdf.setPage(page); pdf.setDrawColor(COLORS.line); pdf.line(margin, 286, 198, 286);
    text('XCELLHOST | Resolver snapshot - ' + analysis.answerCount + ' returned DNS answers', margin, 291, 7, COLORS.muted);
    text(page + ' / ' + totalPages, 198, 291, 7, COLORS.muted, false, true, true);
    font(7); pdf.setTextColor(COLORS.blue);
    const toolPath = options.toolPath || (report.type === 'ALL' ? 'all-dns-records' : 'dns-lookup');
    pdf.textWithLink('xcellhost.cloud/tools/' + toolPath, margin, 295, { url: 'https://xcellhost.cloud/tools/' + toolPath + '?domain=' + encodeURIComponent(report.domain) + (report.type === 'ALL' ? '' : '&type=' + report.type) });
  }
  return pdf.output('arraybuffer');
}
