import { jsPDF } from 'jspdf';
import { GeneratedDmarcPolicy } from './dmarc-generator';

/** Publication worksheet, not a DNS query result or DMARC authentication verdict. */
export function dmarcGeneratorPdf(policy: GeneratedDmarcPolicy): ArrayBuffer {
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  pdf.setProperties({ title: policy.domain + ' DMARC configuration', author: 'XcellHost', subject: 'Generated DMARC TXT record; not published or tested' });
  const ink = '#193957', muted = '#7186a2', line = '#dce7f5'; let y = 0;
  const text = (value: string, x: number, top: number, size = 9, color = ink, bold = false, mono = false) => { pdf.setFont(mono ? 'courier' : 'helvetica', bold ? 'bold' : 'normal'); pdf.setFontSize(size); pdf.setTextColor(color); pdf.text(value.replace(/[^\x20-\x7e\n]/g, character => '\\u' + character.charCodeAt(0).toString(16).padStart(4,'0')),x,top); };
  const wrap = (value: string, width: number, size = 9, mono = false): string[] => { pdf.setFont(mono ? 'courier' : 'helvetica','normal'); pdf.setFontSize(size); return pdf.splitTextToSize(value,width); };
  const nextPage = () => { pdf.addPage(); pdf.setFillColor('#102847'); pdf.rect(0,0,210,22,'F'); text('XCELLHOST / DMARC CONFIGURATION',14,11,9,'#fff',true); text(policy.domain,14,17,8,'#bed0e6',false,true); y=32; };
  const reserve = (height: number) => { if (y+height>279) nextPage(); };
  const paragraph = (value: string, size = 8.5, color = muted, mono = false) => { for (const row of wrap(value,182,size,mono)) { reserve(5); text(row,14,y,size,color,false,mono); y+=4.5; } y+=4; };
  const heading = (value: string) => { reserve(15); text(value,14,y,8,muted,true,true); y+=7; };
  const domain = wrap(policy.domain,180,19,true), height = Math.max(50,35+domain.length*7);
  pdf.setFillColor('#102847'); pdf.rect(0,0,210,height,'F'); text('XCELLHOST / DMARC RECORD GENERATOR',14,12,8,'#a7c0dd',true,true);
  domain.forEach((row,index)=>text(row,14,24+index*7,19,'#fff',true,true));
  text('GENERATED CONFIGURATION - NOT PUBLISHED OR TESTED',14,height-13,8,'#f9b46b',true); text(policy.generatedAt,14,height-5,8,'#b1c8e1');
  y=height+12; heading('DNS PUBLICATION FIELDS'); paragraph('Type: TXT   |   Owner: '+policy.owner+'   |   TTL: '+policy.ttl+' seconds',9,ink); paragraph('Declared policy: '+policy.settings.policy+'   |   Standard: '+policy.settings.standard+'   |   TXT value: '+policy.bytes+' bytes',8,ink);
  paragraph('Current-standard requested treatment: '+policy.requestedPolicy+' (receiver handling can differ)',8,ink);
  heading('TXT VALUE - COPY AS ONE LOGICAL RECORD');
  for (const row of wrap(policy.record,174,9,true)) { reserve(6); pdf.setFillColor('#f1f6fe'); pdf.setDrawColor(line); pdf.rect(14,y-4,182,6,'FD'); text(row,18,y,9,'#275fa5',false,true); y+=5.8; } y+=10;
  heading('ZONE-FILE FORM'); paragraph(policy.zoneFile.trim(),8,ink,true);
  heading('TAG BREAKDOWN');
  for (const tag of policy.tags) { reserve(12); paragraph(tag.name+'='+tag.value,8,ink,true); paragraph(tag.meaning,8); }
  if (policy.warnings.length) { heading('REVIEW BEFORE PUBLISHING'); for (const warning of policy.warnings) paragraph('- '+warning,8,'#9f7136'); }
  heading('PUBLICATION NOTES'); for (const [index,note] of policy.notes.entries()) paragraph((index+1)+'. '+note,8);
  const pages = pdf.getNumberOfPages();
  for (let page=1;page<=pages;page++) { pdf.setPage(page); pdf.setDrawColor(line); pdf.line(14,285,196,285); text('XcellHost | Generated locally - no live DNS result',14,291,7,muted); text(page+' / '+pages,183,291,7,muted); pdf.setFontSize(7); pdf.textWithLink('xcellhost.cloud/tools/dmarc-generator',14,296,{url:'https://xcellhost.cloud/tools/dmarc-generator?domain='+encodeURIComponent(policy.domain)}); }
  return pdf.output('arraybuffer');
}
