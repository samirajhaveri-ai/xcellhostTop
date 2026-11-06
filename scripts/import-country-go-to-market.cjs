const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

const [, , sourceFile, slug, country] = process.argv;
if (!sourceFile || !slug || !country) {
  throw Error('Usage: node scripts/import-country-go-to-market.cjs <source.html> <slug> <country>');
}
if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) throw Error(`Invalid route slug: ${slug}`);

const root = path.join(__dirname, '..');
const source = fs.readFileSync(sourceFile, 'utf8');
const nodes = [];
function walk(node) {
  nodes.push(node);
  (node.childNodes || []).forEach(walk);
}
walk(parse(source, { sourceCodeLocationInfo: true }));

const attr = (node, key) => node.attrs?.find((item) => item.name === key)?.value || '';
const slice = (node) => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const text = (node) => node.value || (node.childNodes || []).map(text).join('');
const classList = (node) => attr(node, 'class').split(/\s+/);

const mainNode = nodes.find((node) => node.tagName === 'main');
if (!mainNode) throw Error('Missing main content.');
let main = slice(mainNode);

const why = nodes.find((node) => node.tagName === 'div' && classList(node).includes('vg-diff'));
const faq = nodes.find((node) => node.tagName === 'section' && attr(node, 'id') === 'faq');
if (!why || !faq) throw Error('Missing Why XcellHost or FAQ section.');

main = main.replace(slice(why), '');
const whyContent = slice(why).replace(
  /<div class="vg-diffh">[\s\S]*?<\/div>/,
  `<div class="vg-diffh"><h2 class="eyebrow">Why XcellHost for ${country} Go-to-Market Strategy</h2></div>`,
);
main = main.replace(
  slice(faq),
  `<section class="sec vg-why" id="why-xcellhost"><div class="wrap">${whyContent}</div></section>\n${slice(faq)}`,
);

// The Angular application supplies the page header, footer and closing contact
// section, so only the source document's main strategy experience is retained.
for (const node of nodes.filter(
  (item) =>
    item.tagName === 'section' &&
    (attr(item, 'id') === 'contact' || classList(item).includes('lnl-wrap')),
)) {
  main = main.replace(slice(node), '');
}
for (const node of nodes.filter(
  (item) => item.tagName === 'div' && classList(item).some((name) => name === 'lh-ctas' || name === 'lh-ask'),
)) {
  main = main.replace(
    slice(node),
    classList(node).includes('lh-ctas')
      ? '<div class="xh-banner-actions" data-banner-added-actions></div>'
      : '',
  );
}
if (!main.includes('data-banner-added-actions')) throw Error('Missing hero actions.');

const styles = nodes.filter((node) => node.tagName === 'style').map(slice).join('\n');
const fonts = nodes
  .filter((node) => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href')))
  .map(slice)
  .join('\n');
const scripts = nodes.filter((node) => node.tagName === 'script' && !attr(node, 'type')).map(text);
const core = scripts.find((script) => script.includes('XcellHost v2 core runtime'));
const sourceRuntime = scripts.at(-1);
if (!core || !sourceRuntime) throw Error('Missing source runtime.');
const runtime = sourceRuntime.replace(
  "window.scrollTo({top:t.offsetTop-((hdr?hdr.offsetHeight:0)+50),behavior:REDUCE?'auto':'smooth'});",
  "window.hostingJumpTo('verticals');",
);
const bridge = `(function(){
XH.open=function(id,options){if(id==='xhCallback')document.dispatchEvent(new CustomEvent('import-callback',{detail:options?.topic||'${country} Go-to-Market Strategy consultation'}));};
document.addEventListener('click',function(e){const a=e.target.closest('a[href]');if(!a)return;const u=new URL(a.href,location.href);if(u.origin!==location.origin&&!/^(?:www\\.)?xcellhost\\.(?:cloud|top)$/.test(u.hostname))return;if(a.getAttribute('href').startsWith('#'))return;let p=u.pathname.replace(/\\.html$/,'');const aliases={'/ai-apps-builder':'/ai-app-builder','/aiops':'/aiops-as-a-service','/xcellhost-vcaio':'/vcaio-as-a-service','/acronis':'/vendor-partners/acronis'};p=aliases[p]||p;if(p.startsWith('/xcellhost-'))p='/'+p.slice(11);a.href=p+u.search+u.hash;a.target='_top';},true);
})();`;
const overrides = `<style>html,body{margin:0;height:auto;overflow-x:clip}main{display:flow-root}.rv{opacity:1;transform:none}[hidden]{display:none!important}#vgHero>.wrap{max-width:1240px;width:100%}#vgHero .hero-grid{align-items:center;grid-template-columns:minmax(0,640px) minmax(0,500px);gap:40px}#vgHero .vg-copy{min-width:0;container-type:inline-size}#vgHero .lh-title{font-size:clamp(18px,4cqi,30px)!important}#vgHero .lh-tag{font-size:16px;line-height:1.5}#vgHero .lh-tag2{font-size:14px;line-height:1.6}#vgHero .xh-banner-actions{margin-top:20px}#vgHero .xh-banner-ai{max-width:100%}@media(max-width:900px){#vgHero .hero-grid{grid-template-columns:minmax(0,1fr);gap:28px}}</style>`;
const html =
  '<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
  `<title>${country} Go-to-Market Strategy | XcellHost</title>` +
  fonts +
  styles +
  overrides +
  '<link rel="stylesheet" href="/assets/styles/consulting-faq.css"><link rel="stylesheet" href="/assets/styles/country-why-xcellhost.css"></head><body>' +
  main +
  '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' +
  core +
  '</script><script>' +
  bridge +
  '</script><script>' +
  runtime +
  '</script></body></html>';

for (const match of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(match[1]);
const output = path.join(root, 'public', `imported-${slug}.html`);
fs.writeFileSync(output, html);
console.log(`Imported ${country} strategy without the source header or footer.`);
