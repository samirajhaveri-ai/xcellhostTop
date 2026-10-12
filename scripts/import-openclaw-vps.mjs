import fs from 'node:fs';
import { parse } from 'parse5';

// Import only the requested sections; the Angular page owns its shared sections.
const source = fs.readFileSync(process.argv[2], 'utf8');
const tree = parse(source, { sourceCodeLocationInfo: true });
const nodes = [];
function visit(node) {
  nodes.push(node);
  for (const child of node.childNodes || []) visit(child);
}
visit(tree);
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const css = nodes.filter(n => n.tagName === 'style').map(n => n.childNodes.map(c => c.value || '').join('')).join('\n');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(n,'href') || '')).map(slice).join('');
const scripts = nodes.filter(n => n.tagName === 'script').map(n => n.childNodes.map(c => c.value || '').join(''));
const product = scripts.find(s => s.includes('P=C.plans'));
const config = product.slice(product.indexOf('var C='), product.indexOf('var hv='));
const actions = product.slice(product.indexOf('/* ===== plan cards'), product.lastIndexOf('})();'));
const bootstrap = `
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const dispatch = (name, detail) => document.dispatchEvent(new CustomEvent(name, {detail}));
const XH = {
  inr: n => new Intl.NumberFormat('en-IN', {style:'currency',currency:'INR',maximumFractionDigits:0}).format(n),
  flash: el => { el.animate?.([{opacity:.5},{opacity:1}], {duration:250}); },
  fillRange: el => { el.style.setProperty('--p', ((+el.value - (+el.min || 0)) / ((+el.max || 100) - (+el.min || 0)) * 100) + '%'); },
  toast: message => { $('#status').textContent = message; },
  cart: {add: item => dispatch('import-cart', item)}
};
function inr(n) { return XH.inr(Math.round(n)); }
document.addEventListener('click', e => {
  const button = e.target.closest('[data-open]');
  if (button) dispatch('import-callback', button.dataset.topic || 'OpenClaw VPS enquiry');
});
`;
const ids = ['overview','pricing','configure','features','uses','setup','compare'];
const sections = ids.map(id => slice(nodes.find(n => n.tagName === 'section' && attr(n,'id') === id))).join('\n');
const nav = `<nav class="openclaw-nav" aria-label="OpenClaw VPS sections">${ids.map((id,i) => `<a href="#${id}">${['Overview','Plans & pricing','Build your server','Included with every plan','Pick your workload','Get started','Compare'][i]}</a>`).join('')}<a href="#openclawFaq" aria-label="Frequently asked questions">?</a></nav>`;
const shell = (title, body, js, extraCss='') => `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>${fonts}<style>${css}\nbody{margin:0}.rv{opacity:1!important;transform:none!important}.openclaw-nav{display:flex;flex-wrap:wrap;gap:10px;padding:18px 24px;background:#eef4ff}.openclaw-nav a{padding:8px 12px;border-radius:8px;color:#0a2540;font-weight:700;background:white}#status{position:fixed;bottom:12px;left:12px;background:#0a2540;color:white;border-radius:8px;padding:8px;z-index:20}#status:empty{display:none}${extraCss}</style></head><body><main>${body}</main><div id="status" role="status" aria-live="polite"></div><script>${js}</script></body></html>`;
fs.writeFileSync('public/imported-openclaw-vps.html', shell('OpenClaw VPS plans and server builder', nav + sections, bootstrap + config + actions));
const stage = nodes.find(n => attr(n,'class') === 'stage' && attr(n,'data-in') === '4');
const heroScript = product.slice(product.indexOf("if(M==='agent')"), product.indexOf("if(M==='flow')"));
fs.writeFileSync('public/imported-openclaw-vps-hero.html', shell('OpenClaw agent console', `<div class="hero lh" id="vpHero">${slice(stage)}</div>`, bootstrap + "var M='agent';function every(fn,ms){fn();if(!reduce)setInterval(fn,ms);}" + heroScript,
  'html,body{background:transparent!important}.hero.lh{padding:44px 26px 32px!important;background:transparent!important;min-height:0!important}.hero.lh .stage{margin:0!important;min-height:290px!important}.hero.lh .stage[data-in]{opacity:1!important;transform:none!important}.lh-chip{right:0!important}.lh-powered{position:absolute!important;left:4%!important;bottom:-8px!important;margin:0!important}.lh-tilt{transform:none!important}.lh-orbit{display:none}'));
console.log('Imported seven OpenClaw sections and the supplied hero console.');
