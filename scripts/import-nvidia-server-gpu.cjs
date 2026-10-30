const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the supplied NVIDIA Server GPU HTML file.');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const slice = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const text = n => n.value || (n.childNodes || []).map(text).join('');
const descendants = n => [n, ...(n.childNodes || []).flatMap(descendants)];
const byId = id => nodes.find(n => attr(n, 'id') === id);
const faq = descendants(byId('faq')).filter(n => attr(n, 'class').split(/\s+/).includes('fq')).map(n => {
  const children = descendants(n);
  return [text(children.find(c => c.tagName === 'button')).trim(), text(children.find(c => attr(c, 'class') === 'fa')).trim()];
});
if (!faq.length) throw Error('Missing supplied FAQs.');
fs.writeFileSync(path.join(root, 'src/app/data/nvidia-server-gpu-faq.data.ts'), '// FAQs from the supplied NVIDIA Server GPU comparison document.\nexport const NVIDIA_GPU_FAQS: [string, string][] = ' + JSON.stringify(faq, null, 2) + ';\n');
const styles = nodes.filter(n => n.tagName === 'style').map(slice).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(n, 'href'))).map(slice).join('\n');
const scripts = nodes.filter(n => n.tagName === 'script' && !attr(n, 'type')).map(text);
const core = scripts.find(s => s.includes('core runtime'));
const runtime = scripts.at(-1)
  .replace(/(['"])([a-z0-9-]+)\.html\1/g, (m, q, slug) => q + '/' + slug + q)
  .replace(/\blocation\./g, '(window.frameElement?parent.location:location).')
  .replace(/\bhistory\.replaceState/g, '(window.frameElement?parent.history:history).replaceState');
const heroRuntime = runtime.slice(0, runtime.indexOf('  /*', runtime.indexOf('window.__nvHero'))) + '})();';
if (!core || !runtime.includes('NV_GPUS')) throw Error('Missing comparison runtime.');
const localLinks = html => html
  .replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:cloud|top)\/([^"#]*)"/g, 'href="/$1" target="_top"')
  .replace(/href="([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"');
const keep = new Set(['families', 'compare', 'nvTray', 'nvDrawer', 'usecases', 'finder', 'fit', 'gens', 'glossary', 'servers', 'nvQuote']);
const main = localLinks(byId('main').childNodes.filter(n => keep.has(attr(n, 'id'))).map(slice).join('\n'));
const bridge = `<script>(function(){
var originalOpen=XH.open;XH.open=function(id,opts){if(id==='nvQuote'||id==='xhCallback'){
var cpu=document.getElementById('nvQGpu'),sockets=document.getElementById('nvQN');
document.dispatchEvent(new CustomEvent('import-callback',{detail:'NVIDIA Server GPU Comparison: '+(id==='nvQuote'?'Server quotation: '+(cpu&&cpu.value||'GPU server')+'; '+(sockets&&sockets.value||''):(opts&&opts.topic||'Consultation'))}));return;}return originalOpen(id,opts);};
XH.toast=function(message){var e=document.getElementById('nvHostToast');e.textContent=message;e.hidden=false;clearTimeout(window.nvToastTimer);window.nvToastTimer=setTimeout(function(){e.hidden=true;},3500);};
document.addEventListener('click',function(event){var a=event.target.closest('a[href]');if(a&&a.getAttribute('href').startsWith('/'))a.target='_top';},true);
})();</script>`;
const viewport = `<script>(function(){if(!window.frameElement)return;var f=frameElement;
window.scrollTo=function(opts,y){var top=typeof opts==='object'?opts.top||0:y||0;parent.scrollTo({top:f.getBoundingClientRect().top+parent.scrollY+top,behavior:opts&&opts.behavior||'smooth'});};
function fit(){var y=Math.max(0,90-f.getBoundingClientRect().top),h=Math.max(300,parent.innerHeight-110);document.documentElement.style.setProperty('--page-vh',parent.innerHeight/100+'px');
['nvDrawer','nvScrim'].forEach(function(id){var e=document.getElementById(id);if(e){e.style.position='absolute';e.style.top=y+'px';e.style.bottom='auto';e.style.height=h+'px';}});
var tray=document.getElementById('nvTray');if(tray){tray.style.position='absolute';tray.style.bottom='auto';tray.style.top=Math.max(y,y+h-tray.offsetHeight)+'px';}
var filters=document.getElementById('nvFilters');if(filters&&parent.innerWidth<=700){filters.style.position='absolute';filters.style.top=y+'px';filters.style.bottom='auto';filters.style.maxHeight=h+'px';}
var toast=document.getElementById('nvHostToast');toast.style.top=(y+h-70)+'px';}
parent.addEventListener('scroll',fit,{passive:true});parent.addEventListener('resize',fit);new MutationObserver(fit).observe(document.body,{subtree:true,attributes:true,attributeFilter:['hidden']});addEventListener('pagehide',function(){parent.removeEventListener('scroll',fit);parent.removeEventListener('resize',fit);});fit();
})();</script>`;
const head = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NVIDIA Server GPU Comparison | XcellHost</title>'+fonts+styles;
const output = head+'<style>html,body{height:auto;min-height:0}body{overflow-x:clip}.sec{padding:48px 0}.rv{opacity:1;transform:none}[hidden]{display:none!important}#nvHostToast{position:absolute;left:20px;z-index:1200;background:#0B132B;color:white;padding:12px 20px;border-radius:10px;max-width:calc(100% - 40px)}</style></head><body><main>'+main+'</main><div id="nvHostToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script><script>'+core+'</script>'+bridge+'<script>'+runtime+'</script>'+viewport+'</body></html>';
const stage = byId('nvStage');
const hero = head+'<style>html,body{margin:0;width:100%;height:100%;background:transparent;overflow:hidden}body{display:flex;align-items:center}#nvHero{width:100%;min-height:0;padding:24px 16px;background:transparent;overflow:visible}#nvStage{margin:0;width:100%;min-height:0;opacity:1;transform:none;animation:none;padding:24px 0 50px}#nvHero .lh-tilt{width:100%;min-width:0}.lh-chip{max-width:48%}.lh-orbit{max-width:100%}</style></head><body><section class="hero lh nv-hero" id="nvHero">'+slice(stage)+'</section><script>'+core+'</script><script>'+heroRuntime+'</script></body></html>';
for (const html of [output, hero]) for (const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(m[1]);
fs.writeFileSync(path.join(root, 'public/imported-nvidia-server-gpu-comparison.html'), output);
const fittedHero = hero.replace('</head>', '<style>#nvHero{position:absolute;top:50%;left:50%;width:640px!important;padding:28px 18px!important;transform-origin:center}#nvStage{grid-template-columns:minmax(0,1fr) 135px!important;grid-template-rows:1fr auto!important;padding:32px 0 10px!important}#nvStage>.lh-tilt{grid-column:1!important;grid-row:1/3!important}.nv-scr{height:330px!important}</style></head>').replace('</body>', '<script>(function(){var e=document.getElementById("nvHero");function fit(){var scale=Math.min(innerWidth/640,(innerHeight-16)/e.offsetHeight,1);e.style.transform="translate(-50%,-50%) scale("+scale+")";}new ResizeObserver(fit).observe(e);addEventListener("resize",fit);document.fonts.ready.then(fit);fit();})();</script></body>');
fs.writeFileSync(path.join(root, 'public/nvidia-server-gpu-hero.html'), fittedHero.replace('</head>', '<style>#nvStage>.nv-side{grid-column:2!important;grid-row:1!important;display:grid!important;grid-template-columns:1fr!important;width:100%;gap:10px}#nvStage>.nv-pw{grid-column:2!important;grid-row:2!important;justify-self:stretch!important}</style></head>'));
console.log('Imported NVIDIA Server GPU comparison tools, animated hero and '+faq.length+' FAQs.');
