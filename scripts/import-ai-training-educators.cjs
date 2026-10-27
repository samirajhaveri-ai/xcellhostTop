const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const parse5 = require('parse5');

const input = process.argv[2];
if (!input) throw new Error('Pass the supplied ai-training-educators.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(input, 'utf8');
const document = parse5.parse(source, { sourceCodeLocationInfo: true });
let main, enrol;
function visit(node) {
  if (node.tagName === 'main') main = node;
  if (node.tagName === 'section' && node.attrs.some(attr => attr.name === 'id' && attr.value === 'enrol')) enrol = node;
  (node.childNodes || []).forEach(visit);
}
visit(document);
if (!main || !enrol) throw new Error('Missing supplied hero or enrolment section.');
// Replace only the existing hero-to-use-cases area; the product page keeps its lower sections.
let content = source.slice(main.sourceCodeLocation.startOffset, enrol.sourceCodeLocation.endOffset) + '</main>';
content = content
  .replace(/href="https:\/\/www\.xcellhost\.top\/([^"#]*)"/g, (_, route) => `href="/${route}" target="_top"`)
  .replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => `href="/${slug}" target="_top"`)
  .replace(/src="https:\/\/www\.xcellhost\.top\/assets\//g, 'src="/assets/');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(match => match[0])
  .filter(link => /fonts\.(googleapis|gstatic)\.com/.test(link)).join('\n');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(match => match[0]).join('\n');
const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].slice(-2).map(match => match[1]);
scripts[1] = scripts[1].replace("$id('configure').scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", "window.educatorsJumpTo('configure')");
for (const [index, script] of scripts.entries()) new vm.Script(script, { filename: 'ai-training-educators-' + index });
const title = source.match(/<title>[\s\S]*?<\/title>/)[0];
const toast = source.match(/<div class="toast" id="xhToast"[\s\S]*?<\/div>/)?.[0] || '';
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' + title + fonts + styles +
  '<link rel="stylesheet" href="/assets/styles/ai-training-educators-imported.css"></head><body>' + content + toast +
  scripts.map(script => '<script>' + script + '</script>').join('\n') +
  '<script src="/assets/scripts/ai-training-educators-imported.js"></script></body></html>\n';
fs.writeFileSync(path.join(root, 'public/imported-ai-training-educators.html'), output);
console.log('Imported AI Training for Educators: supplied hero through enrolment, with original scenes and tools.');
