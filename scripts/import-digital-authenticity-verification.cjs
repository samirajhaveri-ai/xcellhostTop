const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

if (!process.argv[2]) throw new Error('Pass the supplied digital-authenticity-verification.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
const walk = node => { nodes.push(node); (node.childNodes || []).forEach(walk); };
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, key) => node.attrs?.find(item => item.name === key)?.value || '';
const text = node => node.value || (node.childNodes || []).map(text).join('');
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const main = nodes.find(node => node.tagName === 'main');
const sections = main?.childNodes.filter(node => node.tagName === 'section');
if (sections?.length !== 16 || attr(sections[0], 'id') !== 'daHero' || attr(sections.at(-1), 'id') !== 'related') {
  throw new Error('Expected all 16 supplied sections from the hero through Related.');
}
const aliases = { 'dpdp-compliance-platform': 'dpdpa-for-enterprise' };
const content = slice(main)
  .replace('<main id="main">', '<main id="main" data-preserve-copy data-customer-testimonials="off">')
  .replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:cloud|top)\/([^"\s]*)"/g, (_, route) => `href="/${route}" target="_top"`)
  .replace(/href="([a-z0-9-]+)\.html"/g, (_, route) => `href="/${aliases[route] || route}" target="_top"`);
const scripts = nodes.filter(node => node.tagName === 'script' && !attr(node, 'type')).map(text);
const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
const runtime = scripts.at(-1).replace(
  "function goTo(id){var e=$id(id);if(e)e.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});}",
  'function goTo(id){window.digitalAuthenticityJumpTo(id);}',
);
if (!core || !runtime.includes("$id('daStage')") || !runtime.includes('window.digitalAuthenticityJumpTo(id)')) {
  throw new Error('Missing supplied animation runtime or configurator navigation.');
}
for (const script of [core, runtime]) new vm.Script(script);
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const title = slice(nodes.find(node => node.tagName === 'title'));
const description = slice(nodes.find(node => node.tagName === 'meta' && attr(node, 'name') === 'description'));
const toast = nodes.find(node => attr(node, 'id') === 'xhToast');
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' + title + description + fonts + styles +
  '<link rel="stylesheet" href="/assets/styles/digital-authenticity-verification-imported.css"></head><body>' + content + (toast ? slice(toast) : '') +
  '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' +
  '<script>' + core + '</script><script src="/assets/scripts/digital-authenticity-verification-imported.js"></script>' +
  '<script>' + runtime + '</script></body></html>\n';
fs.writeFileSync(path.join(root, 'public/imported-digital-authenticity-verification.html'), output);
console.log('Imported Digital Authenticity Verification: all 16 supplied sections, original styling, hero scenes, simulator, checklist, deployment wizard and configurator.');
