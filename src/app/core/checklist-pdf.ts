import { jsPDF } from 'jspdf';
import { ChecklistResource, checklistCount } from '../data/checklists.data';

const C = { navy: '#102b4f', blue: '#1769d6', ink: '#233c5a', muted: '#687f99', line: '#dce5f1', pale: '#f4f8fd' };
function text(value: string): string { return value.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"').replace(/[\u2013\u2014]/g, '-').replace(/\u2022/g, '-').replace(/[^\x20-\x7e\n]/g, ' '); }
export function checklistPdf(resource: ChecklistResource): Uint8Array {
  const pdf = new jsPDF({ unit: 'mm', format: 'a4', compress: true });
  pdf.setProperties({ title: resource.title, subject: 'XcellHost team review checklist', author: resource.author, creator: 'XcellHost' });
  const write = (value: string, x: number, y: number, width: number, size = 11, color = C.ink, bold = false): number => {
    pdf.setFont('helvetica', bold ? 'bold' : 'normal'); pdf.setFontSize(size); pdf.setTextColor(color);
    const lines = pdf.splitTextToSize(text(value), width) as string[]; pdf.text(lines, x, y); return y + lines.length * size * .45;
  };
  const heading = (label: string): void => { pdf.setFillColor(C.navy); pdf.rect(0, 0, 210, 31, 'F'); write('XcellHost', 18, 15, 100, 17, '#ffffff', true); write(label, 18, 24, 175, 9, '#c5dbf6'); };
  heading('CHECKLIST LIBRARY | ' + resource.topic.toUpperCase());
  let y = write(resource.title, 18, 54, 174, 27, C.navy, true) + 10;
  y = write(resource.description, 18, y, 170, 12, C.muted) + 12;
  pdf.setFillColor(C.pale); pdf.roundedRect(18, y, 174, 23, 3, 3, 'F'); write(checklistCount(resource) + ' review points  |  ' + resource.sections.length + ' phases  |  PDF workbook', 24, y + 14, 160, 12, C.blue, true); y += 38;
  y = write('Use this checklist with your team', 18, y, 174, 15, C.navy, true) + 7;
  for (const instruction of ['Name a review owner and agree the scope.', 'Review evidence before marking an item complete.', 'Record gaps, action owners and target dates.', 'Agree the next review before closing the discussion.']) { if (y > 244) { pdf.addPage(); heading('REVIEW SETUP'); y = 47; } y = write('- ' + instruction, 20, y, 168, 11) + 5; }
  y += 8;
  if (y + 44 > 256) { pdf.addPage(); heading('REVIEW SETUP'); y = 47; }
  ['Review owner', 'Organisation / team', 'Review date', 'Services in scope'].forEach((label, index) => { const x = index % 2 ? 110 : 18, top = y + Math.floor(index / 2) * 22; write(label, x, top, 80, 10, C.muted); pdf.setDrawColor(C.line); pdf.line(x, top + 10, x + 80, top + 10); });
  write('Keep this workbook with the supporting evidence, review date and agreed actions. Adapt the review points to the services and workloads in scope.', 18, 264, 174, 9, C.muted);
  let number = 0;
  for (let index = 0; index < resource.sections.length; index++) {
    const section = resource.sections[index]; pdf.addPage(); heading('TEAM REVIEW | ' + String(index + 1).padStart(2, '0') + ' / ' + resource.sections.length);
    y = write(section.title, 18, 48, 174, 24, C.navy, true) + 7;
    if (section.summary) y = write(section.summary, 18, y, 174, 11, C.muted) + 9;
    for (const item of section.items) {
      pdf.setFont('helvetica', 'normal'); pdf.setFontSize(11); const lines = pdf.splitTextToSize(text(item), 153) as string[];
      const height = Math.max(26, lines.length * 5 + 15);
      if (y + height > 265) { pdf.addPage(); heading(section.title.toUpperCase() + ' | CONTINUED'); y = 47; }
      number++; pdf.setDrawColor('#9cb6d4'); pdf.roundedRect(18, y - 3.5, 4, 4, .6, .6); write(String(number).padStart(2, '0'), 26, y, 10, 9, C.blue, true);
      write(item, 38, y, 153, 11); const bottom = y + height - 9;
      write('Owner:', 38, bottom, 19, 8, C.muted); pdf.setDrawColor(C.line); pdf.line(50, bottom + 1, 104, bottom + 1);
      write('Due:', 112, bottom, 15, 8, C.muted); pdf.line(121, bottom + 1, 188, bottom + 1); y += height;
    }
    if (y < 237) { y += 9; write('Evidence, exceptions and follow-up actions', 18, y, 174, 10, C.muted, true); for (let n = 0; n < 3 && y + 14 < 264; n++) { y += 14; pdf.setDrawColor(C.line); pdf.line(18, y, 192, y); } }
  }
  const pages = pdf.getNumberOfPages();
  for (let page = 1; page <= pages; page++) { pdf.setPage(page); pdf.setDrawColor(C.line); pdf.line(18, 279, 192, 279); write('XcellHost | xcellhost.cloud | ' + resource.slug, 18, 286, 155, 8, C.muted); write(page + ' / ' + pages, 176, 286, 18, 8, C.muted); }
  return new Uint8Array(pdf.output('arraybuffer'));
}
