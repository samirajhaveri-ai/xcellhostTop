const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

if (!process.argv[2]) throw Error('Pass the supplied edge-cloud HTML file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, key) => node.attrs?.find(item => item.name === key)?.value || '';
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const text = node => node.value || (node.childNodes || []).map(text).join('');
const main = nodes.find(node => node.tagName === 'main');
const sections = main?.childNodes.filter(node => node.tagName === 'section');
if (sections?.length !== 16 || attr(sections.at(-1), 'id') !== 'related') throw Error('Missing supplied hero-to-related content.');
const aliases = {
  'xcellhost-serverless-inference': 'serverless-inference',
  'xcellhost-dedicated-inference': 'dedicated-inference',
  'xcellhost-model-catalog': 'model-catalog',
  'rag-as-a-service': 'enterprise-rag-as-a-service',
  'industry-5-smart-manufacturing': 'smart-manufacturing',
  'xcellhost-acronis-direct-cloud-backup': 'direct-backup-to-public-cloud-backup',
  'data-centers': 'company/data-centers-global',
  'service-status': 'company/platform-status',
};
const content = slice(main)
  .replace('<main id="main">', '<main id="main" data-preserve-copy data-customer-testimonials="off">')
  .replace('<span class="nm">Edge Cloud</span>', '<span class="nm">Edge Cloud Platform</span>')
  .replace('data-product="XcellHost Edge Cloud"', 'data-product="XcellHost Edge Cloud Platform"')
  .replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:cloud|top)\/([^"\s]*)"/g, (_, route) => `href="/${route}" target="_top"`)
  .replace(/href="([a-z0-9-]+)\.html"/g, (_, route) => `href="/${aliases[route] || route}" target="_top"`);
const scripts = nodes.filter(node => node.tagName === 'script' && !attr(node, 'type')).map(text);
const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
const runtime = scripts.at(-1);
if (!core || !runtime.includes('__ecHero') || !runtime.includes('__ecMap') || !runtime.includes('window.__ec=')) throw Error('Missing supplied animation or calculator runtime.');
for (const script of [core, runtime]) new vm.Script(script);
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n');
const toast = nodes.find(node => attr(node, 'id') === 'xhToast');
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1"><title>Edge Cloud Platform | XcellHost</title>' + fonts + styles +
  '<link rel="stylesheet" href="/assets/styles/edge-cloud-platform-imported.css"></head><body>' + content + (toast ? slice(toast) : '') +
  '<script>' + core + '</script><script src="/assets/scripts/edge-cloud-platform-imported.js"></script><script>' + runtime + '</script></body></html>\n';
fs.writeFileSync(path.join(root, 'public/imported-edge-cloud-platform.html'), output);
console.log('Imported Edge Cloud Platform: all 16 sections from hero through Related, including animations, zone map, pricing calculator and console.');
