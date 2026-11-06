const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

const [slug, filename] = process.argv.slice(2);
if (!['digital-twin', 'dpdp-compliance-platform', 'cloud-native-security-platform', 'azure-ai-foundry-copilot-studio', 'microsoft-365-governance'].includes(slug) || !filename) {
  throw new Error('Pass a supported service slug, followed by its supplied HTML file.');
}
const source = fs.readFileSync(filename, 'utf8');
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
if (!main || !core || !runtime) throw new Error('Missing supplied content or interactive runtime.');
// The shared viewport helper owns the typewriter, avoiding competing timers.
const integratedCore = core.replace(/  \/\* typewriter:[\s\S]*?(?=  \/\* Ask AI chips:)/, '');
let content = slice(main);
const styledFaq = ['digital-twin', 'cloud-native-security-platform', 'azure-ai-foundry-copilot-studio', 'microsoft-365-governance'].includes(slug);
if (styledFaq) {
  const faq = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'faq');
  if (!faq) throw new Error(`Missing ${slug} FAQs.`);
  const faqNodes = [];
  function collect(node) { faqNodes.push(node); (node.childNodes || []).forEach(collect); }
  collect(faq);
  let updated = slice(faq);
  const heading = faqNodes.find(node => node.tagName === 'h2');
  const label = faqNodes.find(node => node.tagName === 'span' && attr(node, 'class') === 'eyebrow');
  if (!heading || !label) throw new Error(`Missing ${slug} FAQ heading.`);
  updated = updated.replace(slice(heading), '').replace(slice(label), '<h2 class="eyebrow">Frequently Asked Questions</h2>');
  faqNodes.filter(node => node.tagName === 'div' && attr(node, 'class').split(/\s+/).includes('fq')).forEach((card, index) => {
    const id = `${slug}-faq-answer-${index}`;
    updated = updated.replace(slice(card), slice(card)
      .replace('class="fq open"', 'class="fq"')
      .replace(/<button aria-expanded="(?:true|false)">/, `<button type="button" aria-expanded="false" aria-controls="${id}">`)
      .replace('<div class="fa">', `<div class="fa" id="${id}">`)
      .replace('<path d="M6 9l6 6 6-6"/>', '<path d="M12 5v14M5 12h14"/>'));
  });
  content = content.replace(slice(faq), updated);
}
for (const node of nodes.filter(node =>
  (node.tagName === 'section' && attr(node, 'id') === 'contact') ||
  (node.tagName === 'div' && ['lh-ctas', 'lh-ask'].some(c => attr(node, 'class').split(/\s+/).includes(c)))
)) content = content.replace(slice(node), '');
content = content.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g,
  (_, route, hash = '') => `href="/${route}${hash}" target="_top"`)
  .replace(/<nav class="([^"]+)"/g, '<nav class="$1 product-section-nav"');
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\./.test(attr(node, 'href'))).map(slice).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(slice).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const title = nodes.find(node => node.tagName === 'title');
const bridge = `(function(){var open=XH.open;XH.open=function(id,options){
  if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:options&&options.topic||${JSON.stringify(slug)}}));return;}
  open(id,options);
};})();`;
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'
  + (title ? slice(title) : '') + fonts + styles
  + (styledFaq ? '<link rel="stylesheet" href="/assets/styles/workspace-faq-cards.css">' : '')
  + '<link rel="stylesheet" href="/assets/styles/faq-layout.css"><style>html,body{margin:0;height:auto;overflow-x:clip}main{display:flow-root}[hidden]{display:none!important}</style></head><body>'
  + content + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + integratedCore
  + '</script><script>' + bridge + '</script><script>' + runtime + '</script></body></html>';
for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(script[1]);
fs.writeFileSync(path.resolve(__dirname, `../public/imported-${slug}.html`), html);
console.log(`Imported ${slug} content and interactive tools.`);
