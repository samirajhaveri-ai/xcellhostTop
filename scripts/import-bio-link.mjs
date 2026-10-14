import fs from 'node:fs';
import vm from 'node:vm';
import { parse } from 'parse5';

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied bio-link-digital-visiting-card.html path.');
const source = fs.readFileSync(sourcePath, 'utf8');
const nodes = [];
function visit(node) {
  nodes.push(node);
  for (const child of node.childNodes || []) visit(child);
}
visit(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(attribute => attribute.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const slice = node => {
  if (!node?.sourceCodeLocation) throw new Error('A required Bio Link section is missing.');
  return source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
};
// The frame grows to fit the page; viewport units must use the outer window.
const css = nodes.filter(node => node.tagName === 'style').map(text).join('\n')
  .replace(/(\d+(?:\.\d+)?)vh\b/g, 'calc(var(--host-vh, 9px) * $1)');
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(node, 'href') || '')).map(slice).join('');
const scripts = nodes.filter(node => node.tagName === 'script').map(text);
const core = scripts.find(script => script.includes('XcellHost v2 core runtime'));
let product = scripts.find(script => script.includes('DPR=Math.min') && script.includes("$id('blBd')"));
if (!core || !product) throw new Error('Missing supplied Bio Link animation runtime.');
function between(script, start, end) {
  const a = script.indexOf(start), b = script.indexOf(end, a + start.length);
  if (a < 0 || b < 0) throw new Error('Missing source runtime boundary: ' + start);
  return script.slice(a, b);
}
const reveal = between(core, '  /* ---------- reveal, counters ---------- */', '  /* ---------- FAQ ---------- */');
const controls = between(core, '  /* ---------- tabs:', '  /* ---------- visibility helper for animations ---------- */');
product = product.replace(/\b(bd|cfg)\.scrollIntoView\((\{[^;]*?\})\)/g, 'scrollSection($1,$2)');
product = product.replace(/\binnerHeight\b/g, 'hostHeight()')
  .replace('y=scrollY+vh*.5', 'y=hostCenter()')
  .replace('(r.top+r.height/2-vh*.5)/vh', '(r.top+r.height/2-hostCenter())/vh');
const helpers = `(function(){
var d=document,root=d.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(pointer:fine)').matches;
function $(selector,context){return (context||d).querySelector(selector)}
function $$(selector,context){return Array.from((context||d).querySelectorAll(selector))}
var observers=[];
function viewport(){root.style.setProperty('--host-vh',hostHeight()/100+'px');sticky();}
var stickyOffset=0;
function sticky(){
 var stage=$('#blJrV'),frame=window.frameElement;
 if(!stage||!frame||!stage.offsetParent)return;
 var box=stage.parentElement,origin=stage.getBoundingClientRect().top-stickyOffset;
 stickyOffset=Math.max(0,Math.min(box.clientHeight-stage.clientHeight,148-frame.getBoundingClientRect().top-origin));
 stage.style.transform='translateY('+stickyOffset+'px)';
}
function hostScroll(){sticky();dispatchEvent(new Event('scroll'));}
function hostResize(){viewport();dispatchEvent(new Event('resize'));}
if(window.frameElement){parent.addEventListener('scroll',hostScroll,{passive:true});parent.addEventListener('resize',hostResize);}
viewport();
var XH=window.XH={$:$,$$:$$,reduce:reduce,fine:fine,
 inr:function(amount,dec){return '\u20b9'+(+amount||0).toLocaleString('en-IN',{minimumFractionDigits:dec||0,maximumFractionDigits:dec||0})},
 whenVisible:function(element,callback){if(!element)return;if(!('IntersectionObserver' in window)){callback(true);return;}var observer=new IntersectionObserver(function(entries){callback(entries[0].isIntersecting)},{threshold:.05});observer.observe(element);observers.push(observer)},
 toast:function(message){var status=$('#importStatus'),frame=window.frameElement;if(frame){status.style.position='absolute';status.style.bottom='auto';status.style.top=Math.max(0,hostHeight()-frame.getBoundingClientRect().top-74)+'px';}status.textContent=message;setTimeout(function(){status.textContent=''},2600)},
 download:function(name,contents,type){var anchor=d.createElement('a');anchor.href=URL.createObjectURL(new Blob([contents],{type:type||'text/plain'}));anchor.download=name;d.body.appendChild(anchor);anchor.click();setTimeout(function(){URL.revokeObjectURL(anchor.href);anchor.remove()},500)},
 cart:{add:function(item){d.dispatchEvent(new CustomEvent('import-cart',{detail:item}))}}};
${reveal}
${controls}
d.addEventListener('click',function(event){var button=event.target.closest('[data-open]');if(button){event.preventDefault();d.dispatchEvent(new CustomEvent('import-callback',{detail:button.dataset.topic||'Bio Link + Digital Visiting Card enquiry'}))}});
addEventListener('pagehide',function(){observers.forEach(function(observer){observer.disconnect()});if(io)io.disconnect();if(window.frameElement){parent.removeEventListener('scroll',hostScroll);parent.removeEventListener('resize',hostResize);}},{once:true});
})();
function hostHeight(){return window.frameElement?parent.innerHeight:innerHeight;}
function hostCenter(){return hostHeight()*.5+scrollY-(window.frameElement?window.frameElement.getBoundingClientRect().top:0);}
function scrollSection(element,options){if(!element)return;var frame=window.frameElement;if(frame){parent.scrollTo({top:parent.scrollY+frame.getBoundingClientRect().top+element.getBoundingClientRect().top-148,behavior:options?.behavior||'smooth'})}else element.scrollIntoView(options)}
`;
for (const script of [helpers, product]) new vm.Script(script);
const ids = ['overview','how','builder','journey','analytics','design','themes','nfc','usecases','savings','compare','india','pricing','why'];
const body = ids.map(id => slice(nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id))).join('\n');
const hero = nodes.find(node => attr(node, 'id') === 'blHero');
const stage = nodes.find(node => attr(node, 'class') === 'stage' && node.sourceCodeLocation.startOffset > hero.sourceCodeLocation.startOffset && node.sourceCodeLocation.endOffset < hero.sourceCodeLocation.endOffset);
const shell = (title, content, extraCss = '') => `<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>${fonts}<style>${css}\nmain{display:flow-root}.jr-v{position:relative;top:auto;align-self:start}#importStatus{position:fixed;left:12px;bottom:12px;max-width:calc(100% - 24px);padding:10px 16px;border-radius:10px;background:#0b1736;color:white;z-index:200}#importStatus:empty{display:none}${extraCss}</style></head><body><main>${content}</main><div id="importStatus" role="status" aria-live="polite"></div><script>${helpers}</script><script>${product}</script></body></html>`;
fs.writeFileSync('public/imported-bio-link.html', shell('Bio Link and Digital Visiting Card tools and pricing', body, 'main{padding-bottom:36px}'));
const heroCss = 'html,body{background:transparent!important}.hero.lh{padding:0!important;background:transparent!important;min-height:0!important}.hero.lh .stage{display:block!important;margin:0!important;min-height:0!important;padding:8px 0 70px!important;opacity:1!important;transform:none!important}.hero.lh .lh-tilt{width:100%;min-width:0;transform:none!important}.hero.lh .blv{max-width:none}.lh-orbit,.lh-chip{display:none!important}.hero.lh .lh-powered.bl-pw{position:absolute!important;left:0!important;bottom:4px!important;margin:0!important}';
fs.writeFileSync('public/imported-bio-link-hero.html', shell('XcellCard animated visiting card preview', `<section class="hero lh" id="blHero">${slice(stage)}</section>`, heroCss));
console.log('Imported Overview through Why XcellHost and the supplied Bio Link hero animation.');
