import fs from 'node:fs';
import { parse } from 'parse5';

// Keep the site's Angular header and shared sections; import only the requested range.
const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied cpanel-vps.html file path.');
const source = fs.readFileSync(sourcePath, 'utf8');
const nodes = [];
function visit(node) {
  nodes.push(node);
  for (const child of node.childNodes || []) visit(child);
}
visit(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(attribute => attribute.name === name)?.value;
const slice = node => {
  if (!node?.sourceCodeLocation) throw new Error('The supplied cPanel section is missing.');
  return source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
};
const css = nodes.filter(node => node.tagName === 'style')
  .map(node => node.childNodes.map(child => child.value || '').join('')).join('\n');
const fonts = nodes.filter(node => node.tagName === 'link' &&
  /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(node, 'href') || '')).map(slice).join('');
const product = nodes.filter(node => node.tagName === 'script')
  .map(node => node.childNodes.map(child => child.value || '').join(''))
  .find(script => script.includes('P=C.plans'));
if (!product) throw new Error('The supplied cPanel configurator script is missing.');
const config = product.slice(product.indexOf('var C='), product.indexOf('var hv='));
let actions = product.slice(product.indexOf('/* ===== plan cards'), product.lastIndexOf('})();'));
// A cPanel plan needs the selected licence when purchased directly from a plan card.
actions = actions.replace(
  "$$('[data-buy]').forEach(function(b){b.addEventListener('click',function(){add(b.dataset.buy);});});",
  () => "$$('[data-buy]').forEach(function(b){b.addEventListener('click',function(){add(b.dataset.buy);var panel=cp||'cpa';XH.cart.add({key:C.slug+'-panel-'+panel,name:C.panels[panel].n+' licence',sub:C.tn[term],price:C.panels[panel].p*(+term),qty:1});});});",
);
const bootstrap = `
const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const dispatch = (name, detail) => document.dispatchEvent(new CustomEvent(name, {detail}));
const XH = {
  inr: amount => new Intl.NumberFormat('en-IN', {style:'currency',currency:'INR',maximumFractionDigits:0}).format(amount),
  flash: element => { element.animate?.([{opacity:.5},{opacity:1}], {duration:250}); },
  fillRange: element => element.style.setProperty('--p', ((+element.value - (+element.min || 0)) / ((+element.max || 100) - (+element.min || 0)) * 100) + '%'),
  toast: message => { $('#status').textContent = message; },
  cart: {add: item => dispatch('import-cart', item)}
};
function inr(amount) { return XH.inr(Math.round(amount)); }
document.addEventListener('click', event => {
  const button = event.target.closest('[data-open]');
  if (button) dispatch('import-callback', button.dataset.topic || 'cPanel VPS enquiry');
});
`;
const ids = ['overview', 'pricing', 'configure', 'features', 'uses', 'setup', 'compare'];
const labels = ['Overview', 'Plans & pricing', 'Build your server', 'Included with every plan', 'Pick your workload', 'Get started', 'Compare'];
const sections = ids.map(id => slice(nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id))).join('\n');
const nav = `<nav class="cpanel-bookmarks" aria-label="cPanel VPS page sections"><div class="cpanel-bookmark-track">${ids.map((id, index) => `<a href="#${id}">${labels[index]}</a>`).join('')}<a href="#cpanelFaq">FAQs</a></div></nav>`;
const navCss = `.cpanel-bookmarks{padding:10px 20px;border-bottom:1px solid #e7ebf1;background:#fff;box-shadow:0 5px 18px rgba(4,30,66,.06)}.cpanel-bookmark-track{display:flex;align-items:center;justify-content:center;gap:2px;width:max-content;max-width:100%;margin:0 auto;padding:4px;overflow-x:auto;border-radius:999px;background:#f2f3f6;scrollbar-width:none}.cpanel-bookmark-track::-webkit-scrollbar{display:none}.cpanel-bookmark-track a{flex:0 0 auto;padding:9px 15px;border-radius:999px;color:#3d4759;font:600 13px/1.25 var(--f-body);white-space:nowrap}.cpanel-bookmark-track a:hover,.cpanel-bookmark-track a:focus-visible{color:#075fc7;background:#fff}.cpanel-bookmark-track a:focus-visible{outline:2px solid #1d73df;outline-offset:1px}@media(max-width:900px){.cpanel-bookmarks{padding-inline:12px}.cpanel-bookmark-track{justify-content:flex-start}.cpanel-bookmark-track a{padding:9px 13px;font-size:12px}}`;
const shell = (title, body, script, extraCss = '') => `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>${fonts}<style>${css}\nbody{margin:0}.rv{opacity:1!important;transform:none!important}#status{position:fixed;bottom:12px;left:12px;background:#0a2540;color:#fff;border-radius:8px;padding:8px;z-index:20}#status:empty{display:none}${extraCss}</style></head><body><main>${body}</main><div id="status" role="status" aria-live="polite"></div><script>${script}</script></body></html>`;
const layoutCss = `
@media(min-width:901px){#pricing .vpg{grid-template-columns:repeat(4,minmax(0,1fr))}#pricing .vpc{padding:16px}}
#compare .tbl th:not(:first-child),#compare .tbl td:not(:first-child){text-align:center;vertical-align:middle}
`;

fs.writeFileSync('public/imported-cpanel-vps.html', shell(
  'cPanel VPS plans and server builder', nav + sections, bootstrap + config + actions, navCss + layoutCss,
));
const stage = nodes.find(node => attr(node, 'class') === 'stage' && attr(node, 'data-in') === '4');
const heroStart = product.indexOf("if(M==='panel')");
const heroEnd = product.indexOf("if(M==='speed')", heroStart);
if (heroStart < 0 || heroEnd < 0) throw new Error('The supplied WHM hero animation is missing.');
const heroScript = product.slice(heroStart, heroEnd);
const heroCss = 'html,body{background:transparent!important}.hero.lh{padding:44px 26px 32px!important;background:transparent!important;min-height:0!important}.hero.lh .stage{margin:0!important;min-height:290px!important;padding-bottom:76px!important;grid-template-columns:minmax(0,1fr)}.hero.lh .stage[data-in]{opacity:1!important;transform:none!important}.lh-chip{right:0!important}.lh-powered{position:absolute!important;left:4%!important;bottom:-8px!important;margin:0!important}.hero.lh .lh-tilt{transform:none!important;width:560px;max-width:100%;min-width:0}.hero.lh .mk-panel{width:100%;min-width:0}.lh-orbit{display:none}';
fs.writeFileSync('public/imported-cpanel-vps-hero.html', shell(
  'cPanel hosting console', `<div class="hero lh" id="vpHero">${slice(stage)}</div>`,
  bootstrap + "var M='panel';function every(fn,ms){fn();if(!reduce)setInterval(fn,ms);}" + heroScript,
  heroCss,
));
console.log('Imported Overview through Compare and the animated WHM hero from ' + sourcePath);
