const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

if (!process.argv[2]) throw new Error('Pass the supplied AI Workers HTML file.');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value || '';
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const text = node => node.value || (node.childNodes || []).map(text).join('');
const main = nodes.find(node => node.tagName === 'main');
const scripts = nodes.filter(node => node.tagName === 'script' && !attr(node, 'type')).map(text);
const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
const runtime = scripts.at(-1);
if (!main || !core || !runtime.includes('__awQuiz')) throw new Error('Missing AI Workers content or runtime.');
// hosting-tools-viewport.js already animates .tw. Keep a single timer writing
// to it, rather than letting the supplied runtime compete with that animation.
const integratedCore = core.replace(/  \/\* typewriter:[\s\S]*?(?=  \/\* Ask AI chips:)/, '');
if (integratedCore === core) throw new Error('Could not remove the duplicate AI Workers typewriter.');
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n')
  .replace('grid-template-columns:minmax(0,.82fr) minmax(0,1.18fr)', 'grid-template-columns:repeat(2,minmax(0,1fr))')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
// Let the shared banner controls provide the three standard actions and AI bar.
let mainContent = slice(main);
const faqHeading = nodes.find(node => node.tagName === 'h2' && text(node).trim() === 'AI workers in your channels, answered.');
if (!faqHeading) throw new Error('Missing AI Workers FAQ heading.');
mainContent = mainContent.replace(slice(faqHeading), '');
const faqLabel = nodes.find(node => node.tagName === 'span' && attr(node, 'class') === 'eyebrow' && text(node) === 'FAQ');
if (!faqLabel) throw new Error('Missing AI Workers FAQ label.');
mainContent = mainContent.replace(slice(faqLabel), '<h2 class="eyebrow" id="aiWorkersFaqTitle">Frequently Asked Questions</h2>');
const faqSection = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'faq');
const faqCards = [];
function collectFaq(node) {
  if (node.tagName === 'div' && attr(node, 'class').split(/\s+/).includes('fq')) faqCards.push(node);
  (node.childNodes || []).forEach(collectFaq);
}
if (!faqSection) throw new Error('Missing AI Workers FAQ section.');
collectFaq(faqSection);
faqCards.forEach((card, index) => {
  const id = `aiWorkersFaqAnswer${index}`;
  const updated = slice(card).replace('class="fq open"', 'class="fq"')
    .replace(/<button aria-expanded="(?:true|false)">/, `<button type="button" aria-expanded="false" aria-controls="${id}">`)
    .replace('<div class="fa">', `<div class="fa" id="${id}">`)
    .replace('<path d="M6 9l6 6 6-6"/>', '<path d="M12 5v14M5 12h14"/>');
  mainContent = mainContent.replace(slice(card), updated);
});
const contact = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'contact');
if (!contact) throw new Error('Missing AI Workers closing banner.');
// The Angular page supplies the shared Laughing Buddha support strip.
mainContent = mainContent.replace(slice(contact), '');
const proof = nodes.find(node => node.tagName === 'div' && attr(node, 'class').split(/\s+/).includes('aw-proof'));
if (!proof) throw new Error('Missing AI Workers trust strip.');
mainContent = mainContent.replace(slice(proof), `<div class="lh-trust aw-proof"><div class="wrap">
  <span><b>ISO 27001 &amp; 20000-1</b> certified</span>
  <span>Microsoft <b>Gold Partner</b></span>
  <span><b>10,000+</b> customers</span>
  <span><b>Since 1999</b></span>
  <span><b>99.95% uptime SLA</b></span>
  <span><b>24×7</b> NOC + SOC</span>
</div></div>`);
// Reuse the site's rounded section navigation while retaining workspace links.
mainContent = mainContent.replace('class="aw-sub"', 'class="aw-sub product-section-nav"');
for (const className of ['lh-ctas', 'lh-ask']) {
  const row = nodes.find(node => node.tagName === 'div' && attr(node, 'class').split(/\s+/).includes(className));
  if (!row) throw new Error(`Missing AI Workers hero ${className}.`);
  mainContent = mainContent.replace(slice(row), '');
}
const content = mainContent.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g,
  (_, route, hash = '') => `href="/${route}${hash}" target="_top"`);
const bridge = `(function(){
  var open=XH.open;
  XH.open=function(id,options){
    if(id==='xhCallback'){
      document.dispatchEvent(new CustomEvent('import-callback',{detail:options&&options.topic||'AI Workers Workspace'}));
      return;
    }
    open(id,options);
  };
})();`;
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI Workers Workspace | XcellHost</title>'
  + fonts + styles + '<style>html,body{margin:0;height:auto;overflow-x:clip}main{display:flow-root}[hidden]{display:none!important}#awHero{min-height:0;padding-bottom:0}#awHero .aw-stage{padding-bottom:0}@media(min-width:601px){#awHero .lh-title{font-size:clamp(20px,2vw,30px)!important;white-space:nowrap}#awHero .lh-title .nm{display:inline}}</style></head><body>'
  + '<link rel="stylesheet" href="/assets/styles/faq-layout.css"><link rel="stylesheet" href="/assets/styles/ai-workers-integration.css">' + content + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + integratedCore + '</script><script>' + bridge + '</script><script>' + runtime + '</script></body></html>';
for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(script[1]);
fs.writeFileSync(path.resolve(__dirname, '../public/imported-ai-workers.html'), html);
console.log('Imported AI Workers content, animations, catalogue, configurator, ROI calculator and readiness quiz.');
