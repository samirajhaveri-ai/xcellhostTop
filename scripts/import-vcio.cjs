const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw new Error('Pass the supplied xcellhost-vcio.html file.');
const source = fs.readFileSync(process.argv[2], 'utf8').replace(/XcellLead/gi, 'XcellConsult');
const nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, key) => n.attrs?.find(a => a.name === key)?.value || '';
const hasClass = (n, name) => attr(n, 'class').split(/\s+/).includes(name);
const slice = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const text = n => n.nodeName === '#text' ? n.value : (n.childNodes || []).map(text).join('');
function descendants(n) { return [n, ...(n.childNodes || []).flatMap(descendants)]; }
const sections = nodes.filter(n => n.tagName === 'section' && ['overview', 'how', 'journey', 'scope', 'deliverables', 'optimiser', 'health', 'who', 'compare', 'india', 'qbr', 'pricing', 'why'].includes(attr(n, 'id')));
if (sections.length !== 13) throw new Error('Incomplete vCIO content.');
const localLinks = html => html.replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html(#[^"]*)?"/g, 'href="/$1$2" target="_top"').replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/');
const main = localLinks(sections.map(slice).join('\n'));
const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
const faqs = descendants(faq).filter(n => hasClass(n, 'fq')).map(n => {
  const children = descendants(n);
  return [text(children.find(c => c.tagName === 'button')).trim(), text(children.find(c => hasClass(c, 'fa'))).trim()];
});
if (faqs.length < 8) throw new Error('Incomplete vCIO FAQs.');
fs.writeFileSync(path.join(root, 'src/app/data/vcio-faq.data.ts'), '// FAQs from the supplied vCIO document.\nexport const VCIO_FAQS: [string, string][] = ' + JSON.stringify(faqs, null, 2) + ';\n');
const styles = nodes.filter(n => n.tagName === 'style').map(slice).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(n, 'href'))).map(slice).join('\n');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let runtime = localLinks([...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1]);
runtime = runtime.replace("window.scrollTo({top:c.getBoundingClientRect().top+scrollY-90,behavior:R?'auto':'smooth'});", 'window.hostingJumpTo(c.id);')
  .replace('vh=innerHeight,run=r.height-vh,y=scrollY+r.top+', 'vh=window.frameElement?parent.innerHeight:innerHeight,run=r.height-vh,y=scrollY+r.top+')
  .replace("window.scrollTo({top:y,behavior:R?'auto':'smooth'});", "window.scrollOuter({top:y,behavior:R?'auto':'smooth'});")
  .replace('var r=jt.getBoundingClientRect(),vh=innerHeight,run=', 'var r=jt.getBoundingClientRect(),vh=window.frameElement?parent.innerHeight:innerHeight;if(window.frameElement)r={top:r.top+frameElement.getBoundingClientRect().top,height:r.height};var run=');
const bridge = `<script>(function(){
XH.toast=function(message){var el=document.getElementById('vcioToast');if(!el)return;el.textContent=message;el.hidden=false;clearTimeout(window.vcioToastTimer);window.vcioToastTimer=setTimeout(function(){el.hidden=true;},3500);};
var open=XH.open;XH.open=function(id,opts){if(id!=='xhCallback')return open(id,opts);var topic=opts&&opts.topic||'vCIO consultation';if(/quotation/i.test(topic)){var summary=document.getElementById('configure');if(summary)topic+='\\n'+summary.innerText;}document.dispatchEvent(new CustomEvent('import-callback',{detail:'vCIO as a Service: '+topic}));};
if(window.frameElement){var track=document.getElementById('voJt'),panel=track&&track.querySelector('.vo-jp');if(panel){panel.style.position='relative';panel.style.top='0';function pin(){if(innerWidth<=900){panel.style.transform='';return;}var top=track.getBoundingClientRect().top+frameElement.getBoundingClientRect().top;var offset=Math.min(Math.max(0,track.offsetHeight-panel.offsetHeight),Math.max(0,92-top));panel.style.transform='translateY('+offset+'px)';}addEventListener('scroll',pin,{passive:true});addEventListener('resize',pin);pin();}}
})();</script>`;
const head = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>vCIO as a Service | XcellHost</title>' + fonts + styles;
const output = head + '<style>html,body{height:auto;min-height:0}body{overflow-x:clip}.sec{padding:48px 0}#overview .pp-cols{grid-template-columns:minmax(0,1fr);gap:18px}#vcioToast{position:fixed;bottom:20px;left:20px;z-index:100;background:#0B132B;color:white;padding:12px 20px;border-radius:10px;max-width:calc(100% - 40px)}</style></head><body><main>' + main + '</main><div id="vcioToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + '<script>' + runtime + '</script></body></html>';
const heroNode = nodes.find(n => attr(n, 'id') === 'voHero');
const stage = descendants(heroNode).find(n => hasClass(n, 'stage'));
if (!stage) throw new Error('Missing vCIO command deck.');
const hero = head + '<style>html,body{margin:0;width:100%;height:100%;background:transparent;overflow:hidden}body{display:flex;align-items:center}#voHero{width:100%;min-height:0;padding:24px 16px;background:transparent;overflow:visible}#voHero .stage{margin:0;width:100%;min-height:0;opacity:1;transform:none;animation:none;padding:12px 0 65px}#voHero .lh-tilt{width:100%;min-width:0}#voHero .vov{width:100%;max-width:100%}#voHero .lh-powered{position:absolute;bottom:0;left:12px;margin:0}#voHero .lh-chip{max-width:100%}.lh-orbit{max-width:100%}</style></head><body><section class="hero lh" id="voHero">' + slice(stage) + '</section>' + core + '<script>' + runtime + '</script></body></html>';
const whyNode = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'why');
if (!whyNode) throw new Error('Missing supplied Why XcellHost section.');
const why = head + '<style>html,body{height:auto;min-height:0}body{overflow-x:clip}#why{padding:30px 0}.wrap{padding-inline:0}.rv{opacity:1;transform:none}@media(max-width:700px){.wrap{padding-inline:8px}}</style></head><body><main>' + localLinks(slice(whyNode)) + '</main>' + core + '<script>' + runtime + '</script></body></html>';
for (const html of [output, hero, why]) for (const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(m[1]);
fs.writeFileSync(path.join(root, 'public/imported-vcio-as-a-service.html'), output);
fs.writeFileSync(path.join(root, 'public/vcio-hero.html'), hero);
fs.writeFileSync(path.join(root, 'public/imported-vcio-why.html'), why);
console.log('Imported 13 vCIO sections, including Why XcellHost, ' + faqs.length + ' FAQs and the animated hero.');
