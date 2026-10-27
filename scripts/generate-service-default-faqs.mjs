import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'parse5';

const root = process.argv[2];
if (!root) throw new Error('Pass the supplied page-HTML files directory.');
const faqs = {};
const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value;
const text = node => (node.value ?? (node.childNodes ?? []).map(text).join('')).replace(/\s+/g, ' ').trim();
function walk(node, visit) { visit(node); (node.childNodes ?? []).forEach(child => walk(child, visit)); }
for (const folder of ['AI-training', 'Cloud-Connectivity']) {
  for (const file of fs.readdirSync(path.join(root, folder)).filter(file => file.endsWith('.html'))) {
    const document = parse(fs.readFileSync(path.join(root, folder, file), 'utf8'));
    const questions = [];
    walk(document, node => {
      if (!(attr(node, 'class') ?? '').split(/\s+/).includes('fq')) return;
      const question = node.childNodes.find(child => child.tagName === 'button');
      const answer = node.childNodes.find(child => (attr(child, 'class') ?? '').split(/\s+/).includes('fa'));
      if (question && answer) questions.push([text(question), text(answer)]);
    });
    if (questions.length) faqs[file.replace(/\.html$/, '')] = questions;
  }
}
fs.writeFileSync('src/app/data/service-default-faqs.data.ts', '// Original FAQs from the supplied AI Training and Cloud Connectivity pages.\nimport { Faq } from \'./models\';\nexport const SERVICE_DEFAULT_FAQS: Record<string, Faq[]> = ' + JSON.stringify(faqs, null, 2) + ';\n');
console.log(`Extracted original FAQs for ${Object.keys(faqs).length} pages.`);
