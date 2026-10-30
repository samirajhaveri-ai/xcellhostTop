const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw new Error('Pass the supplied managed-identity-service (1).html file.');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, key) => n.attrs?.find(a => a.name === key)?.value || '';
const hasClass = (n, name) => attr(n, 'class').split(/\s+/).includes(name);
const slice = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const text = n => n.nodeName === '#text' ? n.value : (n.childNodes || []).map(text).join('');
function descendants(n) { return [n, ...(n.childNodes || []).flatMap(descendants)]; }
const sections = nodes.filter(n => n.tagName === 'section' && ['overview', 'start', 'components', 'delivery', 'why', 'catalogue', 'sla', 'india', 'plans', 'configure', 'quiz', 'cost', 'vs', 'steps', 'related'].includes(attr(n, 'id')));
if (sections.length !== 15) throw new Error('Incomplete Managed Identity Service content.');
const localLinks = html => html.replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html(#[^"]*)?"/g, 'href="/$1$2" target="_top"').replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/');
const orderedSections = sections.filter(n => attr(n, 'id') !== 'why').concat(sections.filter(n => attr(n, 'id') === 'why'));
const main = localLinks(orderedSections.map(slice).join('\n'));
const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
const faqs = descendants(faq).filter(n => hasClass(n, 'fq')).map(n => {
  const children = descendants(n);
  return [text(children.find(c => c.tagName === 'button')).trim(), text(children.find(c => hasClass(c, 'fa'))).trim()];
});
if (faqs.length < 8) throw new Error('Incomplete Managed Identity Service FAQs.');
fs.writeFileSync(path.join(root, 'src/app/data/managed-identity-service-faq.data.ts'), '// FAQs from the supplied Managed Identity Service document.\nexport const MANAGED_IDENTITY_FAQS: [string, string][] = ' + JSON.stringify(faqs, null, 2) + ';\n');
const styles = nodes.filter(n => n.tagName === 'style').map(slice).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(n, 'href'))).map(slice).join('\n');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let runtime = localLinks([...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1]);
runtime = runtime.replace("window.scrollTo({top:el.getBoundingClientRect().top+scrollY-140,behavior:R?'auto':'smooth'});", 'window.hostingJumpTo(el.id);');
const bridge = `<script>(function(){
XH.toast=function(message){var el=document.getElementById('managed-identity-serviceToast');if(!el)return;el.textContent=message;el.hidden=false;clearTimeout(window.managedIdentityToastTimer);window.managedIdentityToastTimer=setTimeout(function(){el.hidden=true;},3500);};
var open=XH.open;XH.open=function(id,opts){if(id!=='xhCallback')return open(id,opts);var topic=opts&&opts.topic||'Managed Identity Service consultation';if(/quot|proposal/i.test(topic)){var summary=document.getElementById('configure');if(summary)topic+='\\n'+summary.innerText;}document.dispatchEvent(new CustomEvent('import-callback',{detail:'Managed Identity Service as a Service: '+topic}));};

})();</script>`;
const head = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Managed Identity Service as a Service | XcellHost</title>' + fonts + styles;
const output = head + '<style>html,body{height:auto;min-height:0}body{overflow-x:clip}.sec{padding:48px 0}#overview .pp-cols{grid-template-columns:minmax(0,1fr);gap:18px}#managed-identity-serviceToast{position:fixed;bottom:20px;left:20px;z-index:100;background:#0B132B;color:white;padding:12px 20px;border-radius:10px;max-width:calc(100% - 40px)}</style></head><body><main>' + main + '</main><div id="managed-identity-serviceToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + '<script>' + runtime + '</script></body></html>';
const heroNode = nodes.find(n => attr(n, 'id') === 'miHero');
const stage = descendants(heroNode).find(n => hasClass(n, 'stage'));
if (!stage) throw new Error('Missing Managed Identity Service command deck.');
let hero = head + '<style>html,body{margin:0;width:100%;height:100%;background:transparent;overflow:hidden}body{display:flex;align-items:center}#miHero{width:100%;min-height:0;padding:20px 12px;background:transparent;overflow:visible}#miStage{width:100%;max-width:100%;min-width:0;margin:0;padding:8px 0;opacity:1;transform:none;animation:none;grid-template-columns:minmax(0,1fr) auto}#miHero .lh-tilt{width:100%;min-width:0}#miHero .mi-scr{height:230px}#miHero .mi-log{padding:8px;gap:6px}#miHero .lh-orbit{max-width:100%}#miHero .lh-chip{display:none}</style></head><body><section class="hero lh mi-hero" id="miHero">' + slice(stage) + '</section>' + core + '<script>' + runtime + '</script></body></html>';
hero = hero.replace('</body>', '<script>(function(){var hero=document.getElementById("miHero");function fit(){var height=hero.scrollHeight;if(height)hero.style.transform="scale("+Math.min(1,(innerHeight-8)/height)+")";}addEventListener("resize",fit);new ResizeObserver(fit).observe(hero);if(document.fonts)document.fonts.ready.then(fit);fit();})();</script></body>');
for (const html of [output, hero]) for (const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(m[1]);
fs.writeFileSync(path.join(root, 'public/imported-managed-identity-service.html'), output);
fs.writeFileSync(path.join(root, 'public/managed-identity-service-hero.html'), hero);

console.log('Imported 15 Managed Identity Service sections, ' + faqs.length + ' FAQs and the animated hero.');
