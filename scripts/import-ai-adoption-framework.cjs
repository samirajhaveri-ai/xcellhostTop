const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const input = process.argv[2];
if (!input) throw new Error('Pass the supplied ai-adoption-framework.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(input, 'utf8');
let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0];
if (!main || !main.includes('id="related"')) throw new Error('Missing supplied hero-to-related-services content.');
const aliases = { 'xcellhost-iso-42001': 'iso-42001ai-risk' };
main = main
  .replace(/href="https:\/\/www\.xcellhost\.top\/([^"#]*)"/g, (_, route) => `href="/${route}" target="_top"`)
  .replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => `href="/${aliases[slug] || slug}" target="_top"`)
  .replace(/src="https:\/\/www\.xcellhost\.top\/assets\//g, 'src="/assets/');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(match => match[0])
  .filter(link => /fonts\.(googleapis|gstatic)\.com/.test(link)).join('\n');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(match => match[0]).join('\n');
const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].slice(-2).map(match => match[1]);
// Keep the supplied animation and tool logic; scroll against the application's outer viewport.
scripts[1] = scripts[1]
  .replace("f.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", 'window.adoptionJumpTo(f.id)')
  .replace("cart.scrollIntoView({behavior:R?'auto':'smooth',block:'center'})", 'window.adoptionJumpTo(cart.id)');
for (const [index, script] of scripts.entries()) new vm.Script(script, { filename: 'ai-adoption-framework-' + index });
const toast = source.match(/<div class="toast" id="xhToast"[\s\S]*?<\/div>/)?.[0] || '';
const title = source.match(/<title>[\s\S]*?<\/title>/)[0];
const description = source.match(/<meta name="description"[^>]*>/)?.[0] || '';
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' + title + description + fonts + styles +
  '<link rel="stylesheet" href="/assets/styles/software-marketplace-imported.css"></head><body>' + main + toast +
  scripts.map(script => '<script>' + script + '</script>').join('\n') +
  '<script src="/assets/scripts/software-marketplace-imported.js"></script>' +
  '<script src="/assets/scripts/ai-adoption-framework-imported.js"></script></body></html>\n';
fs.writeFileSync(path.join(root, 'public/imported-ai-adoption-framework.html'), output);
console.log('Imported AI Adoption Framework: all 18 supplied sections, animation scenes and interactive tools preserved.');
