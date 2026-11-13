import { jsPDF } from 'jspdf';
import { GeneratedCaaPolicy, quoteCaaValue } from './caa-generator';

/** A publication worksheet, explicitly distinct from a captured DNS lookup. */
export function caaGeneratorPdf(policy: GeneratedCaaPolicy): ArrayBuffer {
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  pdf.setProperties({ title: policy.domain + ' CAA configuration', author: 'XcellHost', subject: 'Generated CAA records; not published or queried' });
  const ink = '#193957', muted = '#7890ab', line = '#dce7f5'; let y = 66;
  const text = (value: string, x: number, top: number, size = 9, color = ink, bold = false, mono = false) => {
    pdf.setFont(mono ? 'courier' : 'helvetica', bold ? 'bold' : 'normal'); pdf.setFontSize(size); pdf.setTextColor(color); pdf.text(value.replace(/[^\x20-\x7e\n]/g, char => '\\u' + char.charCodeAt(0).toString(16).padStart(4, '0')), x, top);
  };
  const wrap = (value: string, width: number, size = 9, mono = false): string[] => { pdf.setFont(mono ? 'courier' : 'helvetica', 'normal'); pdf.setFontSize(size); return pdf.splitTextToSize(value, width); };
  const nextPage = () => { pdf.addPage(); pdf.setFillColor('#102847'); pdf.rect(0, 0, 210, 22, 'F'); text('XCELLHOST / CAA CONFIGURATION', 14, 11, 9, '#ffffff', true); text(policy.domain, 14, 17, 8, '#bed0e6', false, true); y = 32; };
  const reserve = (height: number) => { if (y + height > 279) nextPage(); };
  const domain = wrap(policy.domain, 180, 19, true), heroHeight = Math.max(54, 36 + domain.length * 7);
  y = heroHeight + 12;
  pdf.setFillColor('#102847'); pdf.rect(0, 0, 210, heroHeight, 'F'); text('XCELLHOST / CAA RECORD GENERATOR', 14, 12, 8, '#a7c0dd', true, true);
  let titleY = 24;
  for (const row of domain) { text(row, 14, titleY, 19, '#ffffff', true, true); titleY += 7; }
  text('GENERATED CONFIGURATION - NOT PUBLISHED OR QUERIED', 14, Math.max(39, titleY + 2), 8, '#f9b46b', true);
  text(new Date(policy.generatedAt).toISOString() + ' | ' + policy.records.length + ' records', 14, heroHeight - 5, 8, '#b1c8e1');
  const paragraph = (value: string, size = 9, color = muted) => {
    for (const row of wrap(value, 182, size)) { reserve(5); text(row, 14, y, size, color); y += 4.6; } y += 4;
  };
  text('POLICY SUMMARY', 14, y, 8, muted, true, true); y += 7;
  paragraph('Ordinary certificates: ' + (policy.ordinaryBlocked ? 'No issuer grants in this generated set.' : policy.ordinaryIssuers.join(', ')), 9, ink);
  paragraph('Wildcard certificates: ' + (policy.wildcardBlocked ? 'No issuer grants in this generated set.' : policy.wildcardIssuers.join(', ')) + (policy.settings.wildcard === 'inherit' ? ' (inherits issue rules)' : ''), 9, ink);
  const tableHeader = () => { reserve(12); pdf.setFillColor('#f2f7fd'); pdf.setDrawColor(line); pdf.rect(14, y, 182, 8, 'FD'); text('TAG', 17, y + 5.2, 7.5, muted, true, true); text('FLAGS', 44, y + 5.2, 7.5, muted, true, true); text('TTL', 64, y + 5.2, 7.5, muted, true, true); text('VALUE (ZONE-FILE QUOTING)', 87, y + 5.2, 7.5, muted, true, true); y += 8; };
  text('GENERATED CAA RECORDS', 14, y, 8, muted, true, true); y += 5; tableHeader();
  for (const record of policy.records) {
    const rows = wrap(quoteCaaValue(record.value), 105, 8, true);
    for (let start = 0; start < rows.length;) {
      if (y + 12 > 279) { nextPage(); tableHeader(); }
      const count = Math.max(1, Math.min(rows.length - start, Math.floor((279 - y - 7) / 4.1))), height = count * 4.1 + 7;
      pdf.setDrawColor(line); pdf.rect(14, y, 182, height); text(start ? 'continued' : record.tag, 17, y + 5.5, 8, '#2765b1', true, true);
      if (!start) { text(String(record.flags), 44, y + 5.5, 8, ink, false, true); text(String(record.ttl), 64, y + 5.5, 7.5, ink, false, true); }
      rows.slice(start, start + count).forEach((row, index) => text(row, 87, y + 5.5 + index * 4.1, 8, ink, false, true)); y += height; start += count;
    }
  }
  y += 12; reserve(15); text('PUBLISHING NOTES', 14, y, 8, muted, true, true); y += 7;
  for (const [index, note] of policy.notes.entries()) paragraph((index + 1) + '. ' + note, 8);
  paragraph('Add these records at your DNS provider for ' + policy.domain + '. Use the provider fields or the downloaded zone-file snippet. Verify the published CAA records after the update.', 8);
  const pages = pdf.getNumberOfPages();
  for (let page = 1; page <= pages; page++) { pdf.setPage(page); pdf.setDrawColor(line); pdf.line(14, 285, 196, 285); text('XcellHost | Generated locally - no live DNS result', 14, 291, 7, muted); text(page + ' / ' + pages, 183, 291, 7, muted); pdf.setFontSize(7); pdf.textWithLink('xcellhost.cloud/tools/caa-generator', 14, 296, { url: 'https://xcellhost.cloud/tools/caa-generator?domain=' + encodeURIComponent(policy.domain) }); }
  return pdf.output('arraybuffer');
}
