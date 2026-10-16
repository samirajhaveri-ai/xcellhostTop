import fs from 'node:fs';
import { parse } from 'parse5';

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied zoom-conferenceing.html file.');
const source = fs.readFileSync(sourcePath, 'utf8');
const nodes = [];
function visit(node) {
  nodes.push(node);
  node.childNodes?.forEach(visit);
}
visit(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const original = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const textContent = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(textContent).join('');
const faqSection = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'faq');
if (!faqSection) throw new Error('Missing supplied Zoom FAQ section.');
const faqs = nodes.filter(node => attr(node, 'class')?.split(' ').includes('fq')
  && node.sourceCodeLocation.startOffset > faqSection.sourceCodeLocation.startOffset
  && node.sourceCodeLocation.endOffset < faqSection.sourceCodeLocation.endOffset).map(node => {
  const question = node.childNodes.find(child => child.tagName === 'button');
  const answer = node.childNodes.find(child => attr(child, 'class') === 'fa');
  if (!question || !answer) throw new Error('Invalid supplied Zoom FAQ item.');
  return [textContent(question).trim(), textContent(answer).trim()];
});
if (!faqs.length) throw new Error('No supplied Zoom FAQ entries found.');
fs.writeFileSync('src/app/data/zoom-conferenceing-faq.data.ts', `// Generated from the supplied Zoom HTML by scripts/import-zoom-conferenceing.mjs.\nimport { Faq } from './models';\n\nexport const ZOOM_CONFERENCEING_FAQS: Faq[] = ${JSON.stringify(faqs, null, 2)};\n`);
const overview = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'overview');
const steps = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'steps');
const stage = nodes.find(node => attr(node, 'class')?.split(' ').includes('zm-stage'));
if (!overview || !steps || !stage) throw new Error('Missing requested Zoom source sections.');
const stepsWrap = steps.childNodes.find(node => node.tagName === 'div');
const children = stepsWrap.childNodes.filter(node => node.tagName);
const appsStart = children.findIndex(node => original(node).includes('Works With'));
if (appsStart < 0) throw new Error('Missing app integrations and included features.');
const apps = children.slice(appsStart).map(original).join('\n');
const onboarding = children.slice(0, appsStart).map(original).join('\n');
const commerce = ['workplace', 'pricing', 'configure', 'features', 'finder', 'phone', 'webinars', 'cc', 'consolidate', 'usecases', 'why', 'vs'].map(id => {
  const section = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id);
  if (!section) throw new Error(`Missing Zoom section: ${id}`);
  return original(section);
}).join('\n');
const fonts = nodes.filter(node => node.tagName === 'link' && attr(node, 'rel') === 'stylesheet').map(original).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(original).join('\n');
const runtimes = nodes.filter(node => node.tagName === 'script').map(node => node.childNodes?.[0]?.value ?? '');
const productRuntime = runtimes.findLast(script => script.includes("$id('zmCard')") && script.includes('var XH=window.XH'));
if (!productRuntime) throw new Error('Missing supplied Zoom animation runtime.');
const sharedDocument = fs.readFileSync('public/imported-certificate-management.html', 'utf8');
const sharedRuntime = [...sharedDocument.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g)][0][1];
const head = `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${fonts}${styles}`;
const scripts = `<script>${sharedRuntime}</script><script>${productRuntime}</script>`;
const common = 'html,body{height:auto;min-height:0}body{margin:0}main{display:flow-root}.rv{opacity:1!important;transform:none!important}';
fs.writeFileSync('public/zoom-conferenceing-content.html', `${head}<title>Zoom Workplace plans, tools, cost comparison, industries and onboarding</title>
<style>${common}.wrap{width:100%;max-width:none;padding:0}.sec{padding:0 0 32px}.zm-ch{translate:none!important}.zm-vs{overflow:clip}.zm-vs.in ul.ok li{transform:none}</style>
</head><body><main>${original(overview)}${commerce}<section class="sec" id="steps"><div class="wrap">${onboarding}</div></section><section class="sec" id="integrations"><div class="wrap">${apps}</div></section></main>${scripts}</body></html>\n`);
fs.writeFileSync('public/zoom-conferenceing-hero.html', `${head}<title>Zoom Workplace animated meeting, AI, chat, phone and rooms</title>
<style>${common}html,body{background:transparent}#zmHero{background:transparent;padding:0;min-height:0;overflow:hidden}
#zmHero .zm-stage{width:100%;margin:0;opacity:1;transform:none}#zmHero .lh-tilt{transform:none!important}
@media(min-width:480px){
  #zmHero .zm-stage{flex-direction:column;flex-wrap:nowrap;gap:0;padding:44px 8px 12px}
  #zmHero .zm-stage>.lh-tilt{width:min(364px,68%);order:0}
  #zmHero .zm-from{width:auto;margin-bottom:-14px}
  #zmHero .zm-sat{display:flex;position:absolute;animation:none}
  #zmHero .zm-sat.s1{left:0!important;right:auto!important;top:150px!important}
  #zmHero .zm-sat.s2{right:0!important;left:auto!important;top:112px!important}
  #zmHero .zm-sat.s3{left:0!important;right:auto!important;top:296px!important}
  #zmHero .zm-sat.s4{right:0!important;left:auto!important;top:404px!important}
  #zmHero .zm-lnk,#zmHero .zm-orb{display:block}
  #zmHero .zm-log{width:min(440px,94%);order:0}
}
@media(max-width:479px){#zmHero .zm-stage{padding:12px 8px;gap:14px}#zmHero .zm-stage>.lh-tilt{width:100%}#zmHero .zm-log{width:100%;margin:0}}
</style></head><body><main><section class="hero lh zm-hero" id="zmHero">${original(stage)}</section></main>${scripts}</body></html>\n`);
console.log('Imported the Zoom overview, product cards, pricing, configurator, features, plan finder, phone, webinars, contact center, cost calculator, industries, benefits, comparison, onboarding, integrations and supplied hero animation.');
