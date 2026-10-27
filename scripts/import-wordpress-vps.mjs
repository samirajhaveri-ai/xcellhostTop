import fs from 'node:fs';
import vm from 'node:vm';
import { parse } from 'parse5';

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied wordpress-vps.html path.');
const source = fs.readFileSync(sourcePath, 'utf8');
const nodes = [];
function visit(node) { nodes.push(node); for (const child of node.childNodes || []) visit(child); }
visit(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const hasClass = (node, name) => (attr(node, 'class') || '').split(/\s+/).includes(name);
const slice = node => {
  if (!node?.sourceCodeLocation) throw new Error('Missing supplied WordPress VPS section.');
  return source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
};
const section = id => nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id);
function between(script, start, end) {
  const a = script.indexOf(start), b = script.indexOf(end, a + start.length);
  if (a < 0 || b < 0) throw new Error('Missing runtime boundary: ' + start);
  return script.slice(a, b);
}
const css = nodes.filter(node => node.tagName === 'style').map(text).join('\n');
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(node, 'href') || '')).map(slice).join('');
const scripts = nodes.filter(node => node.tagName === 'script').map(text);
const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
const product = scripts.find(script => script.includes('P=C.plans'));
if (!core || !product) throw new Error('Missing WordPress VPS runtime.');
const reveal = between(core, '  /* ---------- reveal, counters ---------- */', '  /* ---------- FAQ ---------- */');
const controls = between(core, '  /* ---------- tabs:', '  /* ---------- visibility helper for animations ---------- */');
const heroUi = '(function(){var d=document,XH=window.XH,$=XH.$,$$=XH.$$;\n' + between(core, '  /* typewriter:', '  /* chatbot */') + '\n})();';
const config = between(product, 'var C=', 'var hv=');
const actions = product.slice(product.indexOf('/* ===== plan cards'), product.lastIndexOf('})();'));
const speed = between(product, "if(M==='speed')", "if(M==='ping')");
const bootstrap = `(function(){
var d=document,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
function $(selector,scope){return (scope||d).querySelector(selector)}
function $$(selector,scope){return Array.from((scope||d).querySelectorAll(selector))}
var observers=[];
var XH=window.XH={$:$,$$:$$,reduce:reduce,fine:matchMedia('(pointer:fine)').matches,
 inr:function(n){return new Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',maximumFractionDigits:0}).format(n)},
 whenVisible:function(element,callback){if(!element)return;if(!('IntersectionObserver' in window)){callback(true);return;}var o=new IntersectionObserver(function(en){callback(en[0].isIntersecting)},{threshold:.05});o.observe(element);observers.push(o)},
 toast:function(message){var status=$('#status'),frame=window.frameElement;if(frame){status.style.position='absolute';status.style.bottom='auto';status.style.top=Math.max(0,parent.innerHeight-frame.getBoundingClientRect().top-70)+'px';}status.textContent=message;setTimeout(function(){status.textContent=''},2600)},
 cart:{add:function(item){d.dispatchEvent(new CustomEvent('import-cart',{detail:item}))}}};
${reveal}
${controls}
d.addEventListener('click',function(event){
 var button=event.target.closest('[data-open]');
 if(button){event.preventDefault();d.dispatchEvent(new CustomEvent('import-callback',{detail:button.dataset.topic||'WordPress VPS enquiry'}));return;}
 var anchor=event.target.closest('a[href^="#"]');if(!anchor)return;
 var id=anchor.getAttribute('href').slice(1);if(id==='lead'){event.preventDefault();d.dispatchEvent(new CustomEvent('import-callback',{detail:'WordPress VPS server consultation'}));return;}
 var target=d.getElementById(id),frame=window.frameElement;
 if(!target&&frame){var other=parent.document.querySelector('iframe[src="/imported-wordpress-vps.html"]');target=other?.contentDocument?.getElementById(id);if(target)frame=other;}
 if(!target&&window.frameElement){target=parent.document.getElementById(id);if(target)frame=null;}
 if(!target)return;event.preventDefault();
 if(window.frameElement)parent.scrollTo({top:parent.scrollY+(frame?frame.getBoundingClientRect().top:0)+target.getBoundingClientRect().top-148,behavior:reduce?'auto':'smooth'});
 else target.scrollIntoView({behavior:reduce?'auto':'smooth'});
});
addEventListener('pagehide',function(){if(io)io.disconnect();observers.forEach(function(o){o.disconnect()})},{once:true});
})();
function inr(n){return XH.inr(Math.round(n));}
`;
const heroScript = bootstrap + 'var $=XH.$,$$=XH.$$,reduce=XH.reduce;\n' + config + "var M='speed',hv=true;XH.whenVisible($('#vpHero'),function(v){hv=v});function every(fn,ms){fn();if(!XH.reduce)setInterval(function(){if(hv)fn()},ms);}\n" + speed + heroUi;
const bodyScript = bootstrap + 'var $=XH.$,$$=XH.$$,reduce=XH.reduce;\n' + config + actions;
// Source pricing functions are extracted from their IIFE and use the shared XH helpers.
for (const script of [heroScript, bodyScript]) new vm.Script(script);
const ids = ['overview','pricing','configure','features','uses','setup','compare','india'];
const body = ids.map(id => slice(section(id))).join('\n');
const routes = {
  'wordpress-vps.html': '/wordpress-vps', 'cpanel-vps.html': '/cpanel-vps',
  'openclaw-vps.html': '/openclaw-vps', 'windows-vps.html': '/windows-vps',
  'linux-vps.html': '/linux-vps', 'n8n-vps.html': '/n8n-vps',
};
function rewriteLinks(html) {
  for (const [file, route] of Object.entries(routes)) html = html.replaceAll(`href="${file}"`, `href="${route}" target="_top"`);
  return html.replaceAll('href="https://xcellhost.cloud/"', 'href="/" target="_top"');
}
const shell = (title, content, script, extraCss = '') => `<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>${fonts}<style>${css}\nmain{display:flow-root}#status{position:fixed;bottom:12px;left:12px;background:#0a2540;color:#fff;border-radius:8px;padding:8px;z-index:200}#status:empty{display:none}${extraCss}</style></head><body><main data-preserve-copy>${rewriteLinks(content)}</main><div id="status" role="status" aria-live="polite"></div><script>${script}</script></body></html>`;
fs.writeFileSync('public/imported-wordpress-vps.html', shell('WordPress VPS plans, server builder and Why XcellHost', body, bodyScript, 'main{padding-bottom:36px}'));
fs.writeFileSync('public/imported-wordpress-vps-hero.html', shell('WordPress VPS animated hero and speed preview', slice(section('vpHero')), heroScript, '.lh-type .tw{background:transparent;border:0;border-radius:0;overflow:visible}'));
const faq = section('faq');
const faqs = nodes.filter(node => hasClass(node, 'fq') && node.sourceCodeLocation.startOffset > faq.sourceCodeLocation.startOffset && node.sourceCodeLocation.endOffset < faq.sourceCodeLocation.endOffset)
  .map(node => [text(node.childNodes.find(child => child.tagName === 'button')).trim(),text(node.childNodes.find(child => hasClass(child, 'fa'))).trim()]);
if (!faqs.length) throw new Error('Missing WordPress VPS FAQs.');
fs.writeFileSync('src/app/data/wordpress-vps-faq.data.ts', `// Imported from the supplied WordPress VPS page.\nexport const WORDPRESS_VPS_FAQS: [string, string][] = ${JSON.stringify(faqs, null, 2)};\n`);
console.log('Imported the WordPress VPS hero, Overview through Why XcellHost, and product FAQs.');
