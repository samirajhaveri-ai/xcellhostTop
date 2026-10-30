const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');

const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw new Error('Pass the supplied data-center-build-services.html file.');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value || '';
const hasClass = (node, name) => attr(node, 'class').split(/\s+/).includes(name);
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
function descendants(node) { return [node, ...(node.childNodes || []).flatMap(descendants)]; }

// Keep the site's existing hero, credentials and standard closing sections.
const sections = nodes.filter(n => n.tagName === 'section' &&
  ['overview', 'scope', 'powerpath', 'process', 'deliver', 'india', 'plans', 'configure', 'estimator', 'airflow', 'planner', 'vs'].includes(attr(n, 'id')));
if (sections.length !== 12) throw new Error('Incomplete service content.');
let main = sections.map(slice).join('\n');
const localLinks = html => html.replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html(#[^"]*)?"/g,
  'href="/$1$2" target="_top"').replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/');
main = localLinks(main);

const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
const faqs = descendants(faq).filter(n => hasClass(n, 'fq')).map(n => {
  const children = descendants(n);
  return [text(children.find(c => c.tagName === 'button')).trim(), text(children.find(c => hasClass(c, 'fa'))).trim()];
});
if (faqs.length < 8) throw new Error('Incomplete FAQs.');
fs.writeFileSync(path.join(root, 'src/app/data/data-center-build-faq.data.ts'),
  '// Questions and answers from the supplied Data Center Build Services HTML.\n' +
  'export const DATA_CENTER_BUILD_FAQS: [string, string][] = ' + JSON.stringify(faqs, null, 2) + ';\n');

const styles = nodes.filter(n => n.tagName === 'style').map(slice).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(n, 'href'))).map(slice).join('\n');
// Reuse the established runtime and its parent-page callback/cart bridge.
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let runtime = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
runtime = localLinks(runtime).replace("if(t)t.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});", "if(t)window.hostingJumpTo(id);");
const bridge = `<script>
XH.toast=function(message){var el=document.getElementById('dcbToast');el.textContent=message;el.hidden=false;clearTimeout(window.dcbToastTimer);window.dcbToastTimer=setTimeout(function(){el.hidden=true;},3500);};
document.querySelector('[data-xhform="dcbQuote"]').addEventListener('submit',function(event){
  event.preventDefault();
  event.stopPropagation();
  if(!this.reportValidity())return;
  var fields=Array.from(new FormData(this).entries()).map(function(pair){return pair[0]+': '+pair[1];}).join('\\n');
  document.dispatchEvent(new CustomEvent('import-callback',{detail:'Data Center Build Services: '+fields}));
});
</script>`;
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Data Center Build Services | XcellHost</title>' + fonts + styles +
  '<style>html,body{height:auto;min-height:0}body{overflow-x:clip}.sec{padding:48px 0}.wrap{padding:0 20px}#overview .pp-cols{grid-template-columns:minmax(0,1fr);gap:18px}#dcbToast{position:fixed;bottom:20px;left:20px;z-index:100;background:#0B132B;color:#fff;padding:12px 20px;border-radius:10px;max-width:calc(100% - 40px)}</style></head><body><main>' + main +
  '</main><div id="dcbToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + '<script>' + runtime + '</script>' + bridge + '</body></html>';
for (const [i, match] of [...output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].entries()) new vm.Script(match[1], { filename: 'data-center-build-' + i });
fs.writeFileSync(path.join(root, 'public/imported-data-center-build-services.html'), output);
const stage = nodes.find(n => attr(n, 'id') === 'dcbStage');
if (!stage) throw new Error('Missing supplied hero visual.');
const hero = '<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' + fonts + styles +
  '<style>html,body{margin:0;width:100%;height:100%;background:transparent;overflow:hidden}body{display:flex;align-items:center}#dcbHero{width:100%;padding:20px 16px;min-height:0;background:transparent;overflow:visible}#dcbStage{width:100%;min-width:0;margin:0;opacity:1;transform:none;animation:none}.dcb-stage .lh-chip{font-size:10px}.dcb-tw,.dcb-sheet{width:100%;min-width:0;max-width:100%}.dcb-shd{min-width:0;padding-inline:10px}.dcb-dwg{min-width:0;flex:1}.dcb-dwg em{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dcb-scr{height:230px}.dcb-under{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:10px}.dcb-under>*{min-width:0}.dcb-pw{position:relative;inset:auto;margin:0;font-size:10px}.dcb-pw span{white-space:normal}.dcb-log{max-height:100px;overflow:hidden}.lh-orbit{max-width:100%}@media(max-width:400px){.dcb-idx button{padding-inline:4px}.dcb-idx button span{font-size:8px}.dcb-tb>div{padding-inline:6px}.dcb-pw span{font-size:11px}}</style></head><body><section class="hero lh dcb-hero" id="dcbHero">' + slice(stage) + '</section>' + core + '<script>' + runtime + '</script></body></html>';
fs.writeFileSync(path.join(root, 'public/data-center-build-hero.html'), hero);
console.log('Imported ' + sections.length + ' service sections and ' + faqs.length + ' FAQs.');
