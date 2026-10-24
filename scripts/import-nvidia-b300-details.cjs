const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw new Error('Pass the supplied nvidia-b300-gpu.html.');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value;
const slice = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const sections = nodes.filter(n => n.tagName === 'section');
const start = sections.find(n => attr(n, 'id') === 'overview');
const end = sections.find(n => attr(n, 'id') === 'steps');
if (!start || !end) throw new Error('Missing requested B300 content boundaries.');
let content = source.slice(start.sourceCodeLocation.startOffset, end.sourceCodeLocation.endOffset);
// Keep supplied product content and isolate its styles from the existing page.
content = content.replace(/href="([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"');
const styles = nodes.filter(n => n.tagName === 'style').map(slice).join('\n');
const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href') || '')).map(slice).join('\n');
const scripts = nodes.filter(n => n.tagName === 'script');
let runtime = slice(scripts.at(-1)).replace(/^<script[^>]*>|<\/script>$/g, '');
const from = runtime.indexOf('  function toPre(');
const to = runtime.indexOf('  var qGet=', from);
if (from < 0 || to < 0) throw new Error('Missing quotation bridge boundary.');
runtime = runtime.slice(0, from) + `  function toPre(cfg,q,dep,note,sum){
  parent.postMessage({type:'b300-enquiry',configuration:'NVIDIA B300: '+(sum||note||'Pre-booking and allocation enquiry')+(dep?' · Deployment: '+dep:'')},location.origin);
  }
` + runtime.slice(to);
const bridge = `
(function(){
 const d=document;
 const $=(s,r=d)=>r.querySelector(s), $$=(s,r=d)=>Array.from(r.querySelectorAll(s));
 window.XH={$, $$, reduce:matchMedia('(prefers-reduced-motion: reduce)').matches, fine:matchMedia('(pointer:fine)').matches,
 whenVisible(el,fn){if(!el)return;const io=new IntersectionObserver(es=>es.forEach(e=>fn(e.isIntersecting)),{threshold:0});io.observe(el);},
 download(name,text,type){const url=URL.createObjectURL(new Blob([text],{type})),a=d.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);},
 toast(){},onForm(){}
 };
 $$('.rv').forEach(el=>el.classList.add('in','is-in'));
 $$('[data-count]').forEach(el=>{el.textContent=Number(el.dataset.count).toLocaleString('en-IN',{minimumFractionDigits:Number(el.dataset.dec)||0,maximumFractionDigits:Number(el.dataset.dec)||0});});
 $$('.seg button').forEach(b=>{b.type='button';b.setAttribute('aria-pressed',b.classList.contains('on'));});
 d.addEventListener('click',e=>{
  const segment=e.target.closest('.seg button');
  if(segment){const group=segment.parentElement;$$('button',group).forEach(b=>{const on=b===segment;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});group.dataset.value=segment.dataset.v;group.dispatchEvent(new Event('change',{bubbles:true}));}
  const step=e.target.closest('[data-step]');
  if(step){const field=$('input',step.parentElement);if(field){field.value=String(Math.max(Number(field.min)||1,Math.min(Number(field.max)||999,Number(field.value)+Number(step.dataset.step))));field.dispatchEvent(new Event('input',{bubbles:true}));}}
  const callback=e.target.closest('[data-open]');
  if(callback){e.preventDefault();parent.postMessage({type:'b300-enquiry',configuration:'NVIDIA B300: '+(callback.dataset.topic||'Book a sales call')},location.origin);return;}
  const a=e.target.closest('a[href^="#"]');
  if(a&&a.hash&&a.hash!=='#prebook'){e.preventDefault();parent.postMessage({type:'b300-scroll',target:a.hash.slice(1)},location.origin);}
 });
})();`;
new vm.Script(bridge); new vm.Script(runtime);
const integration = `<style>html,body{margin:0;padding:0;overflow-x:hidden}main{display:flow-root}.wrap{max-width:1200px;width:100%;box-sizing:border-box}.rv{opacity:1!important;transform:none!important}.sec{padding:44px 0}.bx-kin .w{opacity:1!important;transform:none!important}@media(max-width:600px){.sec{padding:30px 0}.wrap{padding-left:16px;padding-right:16px}}</style>`;
fs.writeFileSync(path.join(root, 'public/assets/animations/nvidia-b300-details.html'), `<!doctype html><html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NVIDIA B300 specifications, configurations and reservation tools</title>${fonts}${styles}${integration}</head><body><main id="main">${content}</main><script>${bridge}</script><script>${runtime}</script></body></html>`, 'utf8');
console.log('Imported B300 overview through pre-booking steps, with source styling and interactive tools.');

const heroNode = sections.find(n => attr(n, 'id') === 'bxHero');
if (!heroNode) throw new Error('Missing supplied B300 banner.');
const insideHero = n => n.sourceCodeLocation?.startOffset > heroNode.sourceCodeLocation.startOffset && n.sourceCodeLocation?.endOffset < heroNode.sourceCodeLocation.endOffset;
const heroClass = name => nodes.find(n => insideHero(n) && (attr(n, 'class') || '').split(/\s+/).includes(name));
const ask = heroClass('lh-ask'), powered = heroClass('bx-pw'), crumb = heroClass('crumb');
if (!ask || !powered) throw new Error('Missing B300 Ask AI or Powered by block.');
const poweredMarkup = '<div class="b300-powered-line" data-in="5"><span>Powered by</span><span class="pipe" aria-hidden="true">|</span><img src="/assets/images/a100-logos/nvidia.svg" alt="" width="30" height="30"><strong>NVIDIA Blackwell Ultra</strong></div>';
let hero = slice(heroNode).replace(slice(ask), '').replace(slice(powered), slice(ask) + poweredMarkup);
if (crumb) hero = hero.replace(slice(crumb), '');
hero = hero.replace('<span class="bx-tile" aria-hidden="true">N</span>', '<img src="/assets/images/a100-logos/nvidia.svg" alt="" width="30" height="30">');
const heroBridge = `
(function(){
 const providers={chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search/new?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
 document.querySelectorAll('.lh-ask[data-q]').forEach(box=>{const q=encodeURIComponent(box.dataset.q);box.querySelectorAll('[data-ai]').forEach(a=>{a.href=providers[a.dataset.ai]+q;a.target='_blank';a.rel='noopener noreferrer';a.title='Ask '+a.textContent.trim();});});
 document.querySelectorAll('.lh-type[data-words]').forEach(el=>{const words=JSON.parse(el.dataset.words);el.querySelector('.tw').textContent=words[0];});
})();`;
new vm.Script(heroBridge);
const heroStyles = `<style>
html,body{padding:0;margin:0;overflow-x:hidden}main{display:flow-root}.hero.lh.bx-hero{padding:32px 0 26px}.wrap{width:100%;max-width:1320px;box-sizing:border-box}
.bx-top>*{min-width:0}
#bxHero .bx-copy{container-type:inline-size}
#bxHero .lh-title{white-space:nowrap;font-size:clamp(14px,5.9cqw,44px)!important}
#bxHero .lh-title .nm{display:inline!important}
@media(min-width:1201px){.bx-top{grid-template-columns:minmax(0,1.45fr) minmax(0,1fr);gap:28px}}
@media(max-width:1200px){.bx-top{grid-template-columns:minmax(0,1fr)}}
#bxHero .bx-copy .lh-ask{margin-top:18px;width:max-content;max-width:100%;min-width:0;box-sizing:border-box;gap:10px;flex-wrap:nowrap!important;white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;scrollbar-width:thin}
#bxHero .bx-copy .lh-ask .k{flex:none;white-space:nowrap!important}
#bxHero .bx-copy .lh-ask .chips{flex:none;min-width:0;flex-wrap:nowrap!important;white-space:nowrap!important}
#bxHero .bx-copy .lh-ask a{flex:none;white-space:nowrap;padding:0 8px}
.b300-powered-line{display:flex;align-items:center;flex-wrap:nowrap;gap:10px;margin-top:18px;color:#c7d5ec;white-space:nowrap;max-width:100%;overflow-x:auto;scrollbar-width:thin;font:400 13px/1.4 var(--f-body)}
.b300-powered-line>*{flex:none}.b300-powered-line .pipe{font-size:23px;color:#a9b8ce}.b300-powered-line img{display:block;object-fit:contain;background:#fff;border-radius:4px;padding:3px}.b300-powered-line strong{color:#fff;font:700 19px/1.4 var(--f-disp)}
#bxHero .bx-ctas{display:flex;align-items:center;flex-wrap:nowrap!important;max-width:100%;gap:8px;overflow-x:auto!important;overflow-y:hidden!important;scrollbar-width:thin}#bxHero .bx-ctas>.btn,#bxHero .bx-ctas .xh-banner-button{flex:none;white-space:nowrap}#bxHero .bx-ctas .xh-banner-actions{display:contents!important}
.bx-base{margin-top:16px}.hero [data-in]{opacity:1;transform:none}.lh-type{min-height:24px}
@media(max-width:600px){.hero.lh.bx-hero{padding:24px 0}.wrap{padding-left:16px;padding-right:16px}.b300-powered-line{gap:8px;font-size:12px}.b300-powered-line strong{font-size:16px}}
</style>`;
fs.writeFileSync(path.join(root, 'public/assets/animations/nvidia-b300-banner.html'), `<!doctype html><html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NVIDIA HGX B300 — XcellHost</title>${fonts}${styles}${heroStyles}</head><body><main id="main">${hero}</main><script>${bridge}</script><script>${heroBridge}</script><script>${runtime}</script></body></html>`, 'utf8');
console.log('Imported source B300 banner with Ask AI immediately above Powered by.');
