const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

if (!process.argv[2]) throw Error('Pass the supplied enterprise-dpdp-platform.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, key) => node.attrs?.find(item => item.name === key)?.value || '';
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const text = node => node.value || (node.childNodes || []).map(text).join('');
const main = nodes.find(node => node.tagName === 'main');
if (!main || !main.childNodes.some(node => attr(node, 'id') === 'related')) throw Error('Missing supplied hero-to-related content.');
const aliases = {
  'xcellhost-managed-grc': 'managed-grc', 'xcellhost-vdpo': 'vdpo-as-a-service',
  'xcellhost-iso-27018': 'iso-27018-pii-public-cloud',
  'dpo-genie365-services': 'vendor-partners/dpo-genie',
};
const content = slice(main)
  .replaceAll('DPDP Compliance Platform', 'Enterprise DPDP Platform')
  .replace('<main id="main">', '<main id="main" data-preserve-copy>')
  .replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:cloud|top)\/([^"\s]*)"/g, (_, route) => `href="/${route}" target="_top"`)
  .replace(/href="([a-z0-9-]+)\.html"/g, (_, route) => `href="/${aliases[route] || route}" target="_top"`);
const scripts = nodes.filter(node => node.tagName === 'script' && !attr(node, 'type')).map(text);
const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
const runtime = scripts.at(-1).replace("c.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", "window.dpdpJumpTo('configure')");
if (!core || !runtime.includes('__aoHero')) throw Error('Missing supplied animation runtime.');
for (const script of [core, runtime]) new vm.Script(script);
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n');
const toast = nodes.find(node => attr(node, 'id') === 'xhToast');
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' + slice(nodes.find(node => node.tagName === 'title')) + fonts + styles +
  '<link rel="stylesheet" href="/assets/styles/enterprise-dpdp-platform-imported.css"></head><body>' + content + (toast ? slice(toast) : '') +
  '<script>' + core + '</script><script src="/assets/scripts/enterprise-dpdp-platform-imported.js"></script><script>' + runtime + '</script></body></html>\n';
fs.writeFileSync(path.join(root, 'public/imported-enterprise-dpdp-platform.html'), output);
console.log('Imported Enterprise DPDP Platform: all 19 supplied sections through Related, including animations and sandbox tools.');
