const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

// Import only the supplied page content; the Angular shell supplies navigation and footer.
const input = process.argv[2];
if (!input) throw new Error('Pass the folder containing the two supplied marketplace HTML files.');
const root = path.resolve(__dirname, '..');
for (const slug of ['asset-tokenization-platform', 'fractional-chief-ai-officer']) {
  const source = fs.readFileSync(path.join(input, slug + '.html'), 'utf8');
  const main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0];
  if (!main || !main.includes('class="xsibs"')) throw new Error('Incomplete supplied page: ' + slug);
  const title = source.match(/<title>([\s\S]*?)<\/title>/)[0];
  const fonts = [...source.matchAll(/<link\b[^>]*>/g)]
    .map(match => match[0]).filter(link => /fonts\.(googleapis|gstatic)\.com/.test(link)).join('\n');
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(match => match[0]).join('\n');
  const runtimes = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].slice(-2);
  for (const [index, script] of runtimes.entries()) new vm.Script(script[1], { filename: slug + '-' + index });
  const content = main
    .replace(/<section\b[^>]*\bid="watch"[^>]*>[\s\S]*?<\/section>/g, '')
    .replace(/href="https:\/\/www\.xcellhost\.top\/([^"#]*)"/g, (_, route) => `href="/${route}" target="_top"`)
    .replace(/src="https:\/\/www\.xcellhost\.top\/assets\//g, 'src="/assets/');
  const toast = source.match(/<div class="toast" id="xhToast"[\s\S]*?<\/div>/)?.[0] || '';
  const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
    '<meta name="viewport" content="width=device-width,initial-scale=1">' + title + fonts + styles +
    '<link rel="stylesheet" href="/assets/styles/software-marketplace-imported.css"></head><body>' +
    content + toast + runtimes.map(match => match[0]).join('\n') +
    '<script src="/assets/scripts/software-marketplace-imported.js"></script></body></html>\n';
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), output);
  console.log('Imported ' + slug + ': hero, animations, demos and closing related-service cards preserved.');
}
