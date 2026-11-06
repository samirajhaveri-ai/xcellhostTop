const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const parse5 = require('parse5');

const input = process.argv[2];
if (!input) throw new Error('Pass the supplied cloud-disaster-recovery-smb.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(input, 'utf8');
const document = parse5.parse(source, { sourceCodeLocationInfo: true });
let main, steps, faq;
function visit(node) {
  if (node.tagName === 'main') main = node;
  if (node.tagName === 'section' && node.attrs.some(attr => attr.name === 'id' && attr.value === 'steps')) steps = node;
  if (node.tagName === 'section' && node.attrs.some(attr => attr.name === 'id' && attr.value === 'faq')) faq = node;
  (node.childNodes || []).forEach(visit);
}
visit(document);
if (!main || !steps || !faq) throw new Error('Missing supplied hero, onboarding timeline or FAQ.');
const aliases = {
  'acronis-ransomware-warranty': 'anti-ransomware-warranty',
  'xcellhost-vdpo': 'vdpo-as-a-service',
  'xcellhost-acronis-direct-cloud-backup': 'direct-backup-to-public-cloud-backup',
};
// Replace only the requested opening content, ending at “From first call to first drill.”
const normalizeLinks = html => html
  .replace(/href="https:\/\/xcellhost\.cloud\/"/g, 'href="/" target="_top"')
  .replace(/href="rule-468-daily-backup-books-of-accounts\.html"/g, 'href="https://xcellhost.cloud/rule-468-daily-backup-books-of-accounts.html" target="_top"')
  .replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => `href="/${aliases[slug] || slug}" target="_top"`)
  .replace(/href="#faq"/g, 'href="#ppFaq"');
let content = normalizeLinks(source.slice(main.sourceCodeLocation.startOffset, steps.sourceCodeLocation.endOffset) + '</main>');
// Give the complete title the full hero width while preserving the two-column dashboard below it.
const heading = content.match(/<h1 class="lh-title"[\s\S]*?<\/h1>/)[0];
const breadcrumb = content.match(/<div class="crumb"[\s\S]*?<\/div>/)[0];
content = content.replace(heading, '').replace(breadcrumb, '')
  .replace('<div class="hero-grid dr-hg">', breadcrumb + heading + '<div class="hero-grid dr-hg">');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(match => match[0])
  .filter(link => /fonts\.(googleapis|gstatic)\.com/.test(link)).join('\n');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(match => match[0]).join('\n');
const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].slice(-2).map(match => match[1]);
scripts[1] = scripts[1].replace("e.scrollIntoView({behavior:R?'auto':'smooth'})", 'window.drSmbJumpTo(id)');
for (const [index, script] of scripts.entries()) new vm.Script(script, { filename: 'cloud-disaster-recovery-smb-' + index });
const title = source.match(/<title>[\s\S]*?<\/title>/)[0];
const toast = source.match(/<div class="toast" id="xhToast"[\s\S]*?<\/div>/)?.[0] || '';
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' + title + fonts + styles +
  '<link rel="stylesheet" href="/assets/styles/cloud-disaster-recovery-smb-imported.css"></head><body>' + content + toast +
  '<script>' + scripts[0] + '</script>' +
  '<script src="/assets/scripts/cloud-disaster-recovery-smb-imported.js"></script>' +
  '<script>' + scripts[1] + '</script></body></html>\n';
fs.writeFileSync(path.join(root, 'public/imported-cloud-disaster-recovery-smb-opening.html'), output);
const faqOutput = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' + title + fonts + styles +
  '<link rel="stylesheet" href="/assets/styles/cloud-disaster-recovery-smb-imported.css"></head><body><main>' +
  normalizeLinks(source.slice(faq.sourceCodeLocation.startOffset, faq.sourceCodeLocation.endOffset))
    .replace('class="sec dr-fq" id="faq"', 'class="sec dr-answers" id="drAnswers" data-preserve-copy')
    .replace('class="faq rv"', 'class="dr-answer-list rv"') + '</main>' +
  '<script>' + scripts[0] + '</script>' +
  '<script src="/assets/scripts/cloud-disaster-recovery-smb-imported.js"></script></body></html>\n';
fs.writeFileSync(path.join(root, 'public/imported-cloud-disaster-recovery-smb-faq.html'), faqOutput);
console.log('Imported Cloud DR for SMB: supplied hero through the first-drill timeline, plus the separate FAQ.');
