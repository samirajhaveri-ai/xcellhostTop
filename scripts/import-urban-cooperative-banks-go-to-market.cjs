const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

if (!process.argv[2]) throw Error('Pass the supplied urban-cooperative-banks-go-to-market-strategy.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, key) => node.attrs?.find(item => item.name === key)?.value || '';
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const text = node => node.value || (node.childNodes || []).map(text).join('');
const main = nodes.find(node => node.tagName === 'main');
if (!main || !main.childNodes.some(node => attr(node, 'id') === 'contact')) throw Error('Missing supplied hero-to-next-step content.');
const scripts = nodes.filter(node => node.tagName === 'script' && !attr(node, 'type')).map(text);
const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
const runtime = scripts.at(-1)
  .replaceAll('window.scrollY', 'window.ucbScrollY()')
  .replaceAll('window.innerHeight', '(window.parent.innerHeight)')
  .replace("window.scrollTo({top:t.offsetTop-((hdr?hdr.offsetHeight:0)+50),behavior:REDUCE?'auto':'smooth'});", "window.ucbJumpTo('verticals');");
if (!core || !runtime.includes('__vgHero')) throw Error('Missing supplied animation runtime.');
for (const script of [core, runtime]) new vm.Script(script);
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n');
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8">' +
  '<meta name="viewport" content="width=device-width,initial-scale=1">' +
  slice(nodes.find(node => node.tagName === 'title')) + fonts + styles +
  '<link rel="stylesheet" href="/assets/styles/urban-cooperative-banks-go-to-market.css"></head><body>' +
  slice(main).replace('<main id="main">', '<main id="main" data-preserve-copy data-customer-testimonials="off">') +
  '<script>' + core + '</script><script src="/assets/scripts/urban-cooperative-banks-go-to-market.js"></script>' +
  '<script>' + runtime + '</script></body></html>\n';
fs.writeFileSync(path.join(root, 'public/imported-urban-cooperative-banks-go-to-market-strategy.html'), output);
console.log('Imported all 14 UCB strategy sections, including the map, revenue model, heatmap and Next step banner.');
