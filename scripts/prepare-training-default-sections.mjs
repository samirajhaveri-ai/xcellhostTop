import fs from 'node:fs';
import { parse } from 'parse5';

// Preserve imported course content outside the obsolete default sections.
const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value;
const text = node => (node.value ?? (node.childNodes ?? []).map(text).join('')).replace(/\s+/g, ' ').trim();
const accountantFaqs = [];
for (const slug of ['integrated-program', 'medical-doctors', 'insurance-professionals', 'chartered-accountants']) {
  const file = `public/imported-ai-training-${slug}.html`;
  const source = fs.readFileSync(file, 'utf8');
  const document = parse(source, { sourceCodeLocationInfo: true });
  const ranges = [];
  function visit(node) {
    if (slug === 'chartered-accountants' && (attr(node, 'class') ?? '').split(/\s+/).includes('fq')) {
      const question = node.childNodes.find(child => child.tagName === 'button');
      const answer = node.childNodes.find(child => (attr(child, 'class') ?? '').split(/\s+/).includes('fa'));
      if (question && answer) accountantFaqs.push([text(question), text(answer)]);
    }
    if (node.tagName === 'section' && ['security', 'why-xcellhost', 'faq'].includes(attr(node, 'id'))) ranges.push([node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset]);
    for (const child of node.childNodes ?? []) visit(child);
  }
  visit(document);
  let result = source;
  for (const [start, end] of ranges.sort((a, b) => b[0] - a[0])) result = result.slice(0, start) + result.slice(end);
  fs.writeFileSync(file, result);
}
if (accountantFaqs.length) fs.writeFileSync('src/app/data/accountant-training-faqs.data.ts', "import { Faq } from './models';\nexport const ACCOUNTANT_TRAINING_FAQS: Faq[] = " + JSON.stringify(accountantFaqs, null, 2) + ';\n');
