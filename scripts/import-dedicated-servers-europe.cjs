const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the supplied Dedicated Servers in Europe HTML file.');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const slice = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const text = n => n.value || (n.childNodes || []).map(text).join('');
const descendants = n => [n, ...(n.childNodes || []).flatMap(descendants)];
const byId = id => nodes.find(n => attr(n, 'id') === id);
const has = (n, c) => attr(n, 'class').split(/\s+/).includes(c);
const faqs = descendants(byId('faq')).filter(n => has(n, 'fq')).map(n => {
  const children = descendants(n);
  return [text(children.find(c => c.tagName === 'button')).trim(), text(children.find(c => has(c, 'fa'))).trim()];
});
if (!faqs.length || !byId('dsStage')) throw Error('Missing supplied FAQ or animated hero.');
fs.writeFileSync(path.join(root, 'src/app/data/dedicated-servers-europe-faq.data.ts'), '// FAQs from the supplied Dedicated Servers in Europe document.\nexport const DEDICATED_EUROPE_FAQS: [string, string][] = ' + JSON.stringify(faqs, null, 2) + ';\n');
const localLinks = html => html.replace(/href="(?:https:\/\/(?:www\.)?xcellhost\.(?:top|cloud)\/)?([a-z0-9-]+)\.html(#[^"]*)?"/g, 'href="/$1$2" target="_top"');
const styles = nodes.filter(n => n.tagName === 'style').map(slice).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(n, 'href'))).map(slice).join('\n');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let runtime = nodes.filter(n => n.tagName === 'script' && !attr(n, 'type')).map(text).at(-1).replaceAll("$id('configure').scrollIntoView({behavior:R?'auto':'smooth'});", "window.hostingJumpTo('configure');");
runtime = runtime.replace("scrollTo({top:y,behavior:R?'auto':'smooth'});", "window.hostingJumpTo('configure');");
const heroRuntime = runtime.slice(0, runtime.indexOf('  /*', runtime.indexOf('window.__dsHero'))) + '})();';
const sections = nodes.filter(n => n.tagName === 'section' && ['cities','plans','configure','residency','included','deploy','locations','globe','related'].includes(attr(n, 'id')));
if (sections.length !== 9) throw Error('Incomplete supplied content.');
const head = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dedicated Servers in Europe | XcellHost</title>' + fonts + styles;
const bridge = `<script>XH.open=function(id,opts){if(id==='xhCallback'||id==='dsQuote')document.dispatchEvent(new CustomEvent('import-callback',{detail:'Dedicated Servers in Europe: '+(opts&&opts.topic||'Consultation')+'; '+(document.getElementById('cMeta')?.textContent||'')}));};XH.toast=function(message){var e=document.getElementById('dsToast');e.textContent=message;e.hidden=false;clearTimeout(window.dsToastTimer);window.dsToastTimer=setTimeout(function(){e.hidden=true;},3500);};</script>`;
const localNavigation = `<script>document.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a)return;var u=new URL(a.href,location.href);if(u.origin!==location.origin&&!/^(www\\.)?xcellhost\\.(cloud|top)$/.test(u.hostname))return;if(a.getAttribute('href').startsWith('#'))return;var p=u.pathname.replace(/\\.html$/,'');if(p==='/dedicated-servers')p='/bare-metal-servers';a.href=p+u.search+u.hash;a.target='_top';},true);</script>`;
const output = head + '<style>html,body{height:auto;min-height:0}body{overflow-x:clip}.sec{padding:48px 0}.rv{opacity:1;transform:none}[hidden]{display:none!important}#dsToast{position:fixed;bottom:20px;left:20px;z-index:100;background:#0b132b;color:white;padding:12px 20px;border-radius:10px;max-width:calc(100% - 40px)}</style></head><body><main id="main">' + localLinks(sections.map(slice).join('\n')) + '</main><div id="dsToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + localNavigation + '<script>' + runtime + '</script></body></html>';
const hero = head + '<style>html,body{margin:0;width:100%;height:100%;background:transparent;overflow:hidden}#dsHero{position:absolute;top:50%;left:50%;width:640px!important;padding:30px 18px!important;min-height:0;background:transparent;transform-origin:center;overflow:visible}#dsStage>.lh-tilt{width:100%!important;max-width:none!important}#dsStage{width:100%;min-width:0;margin:0;opacity:1;transform:none;animation:none}#dsHero .lh-tilt{width:100%;min-width:0}.lh-chip{max-width:48%}</style></head><body><main id="main"><section class="hero lh ds-hero" id="dsHero">' + slice(byId('dsStage')) + '</section></main>' + core + '<script>' + heroRuntime + '</script><script>(function(){var e=document.getElementById("dsHero");function fit(){e.style.transform="translate(-50%,-50%) scale("+Math.min(innerWidth/676,(innerHeight-16)/e.offsetHeight,1)+")";}new ResizeObserver(fit).observe(e);addEventListener("resize",fit);document.fonts.ready.then(fit);fit();})();</script></body></html>';
for (const html of [output, hero]) for (const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
  if (/type=["']application\/(?:ld\+)?json["']/.test(m[1])) JSON.parse(m[2]);
  else new vm.Script(m[2]);
}
fs.writeFileSync(path.join(root, 'public/imported-dedicated-servers-europe.html'), output);
const fittedHero = hero.replace('</head>', '<style>#dsStage{grid-template-columns:minmax(0,1fr) 148px!important}#dsStage>.lh-tilt{grid-column:1!important;grid-row:1!important}#dsStage>.ds-side{grid-column:2!important;grid-row:1!important;flex-direction:column!important;max-width:none!important}#dsStage>.ds-log{grid-column:1!important;grid-row:2!important;max-width:none!important}</style></head>');
fs.writeFileSync(path.join(root, 'public/dedicated-servers-europe-hero.html'), fittedHero.replace('</head>', '<style>#dsStage>.ds-side{display:grid!important;grid-template-columns:minmax(0,1fr)!important}#dsStage .ds-sc b{font-size:18px;white-space:normal}</style></head>'));
console.log('Imported 9 sections, animated hero and ' + faqs.length + ' FAQs.');
