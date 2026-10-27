import fs from 'node:fs';
import vm from 'node:vm';
import { parse } from 'parse5';

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied dedicated-ai-servers.html file.');
const source = fs.readFileSync(sourcePath, 'utf8');
const nodes = [];
function visit(node) { nodes.push(node); node.childNodes?.forEach(visit); }
visit(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(item => item.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes ?? []).map(text).join('');
const original = node => {
  if (!node?.sourceCodeLocation) throw new Error('Missing requested Dedicated AI Servers source content.');
  return source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
};
const sections = ['overview', 'included', 'gpus', 'catalogue', 'vram', 'picker', 'features', 'usecases', 'vs', 'how', 'configure', 'os', 'why'];
const hero = original(nodes.find(node => attr(node, 'id') === 'daHero'))
  .replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"');
const content = sections.map(id => original(nodes.find(node => node.tagName === 'section' && attr(node, 'id') === id))).join('\n');
const faqSection = nodes.find(node => node.tagName === 'section' && attr(node, 'id') === 'faq');
const faqItems = [];
function collectFaq(node) {
  if (node.tagName === 'div' && attr(node, 'class')?.split(' ').includes('fq')) {
    const button = node.childNodes.find(child => child.tagName === 'button');
    const answer = node.childNodes.find(child => child.tagName === 'div' && attr(child, 'class') === 'fa');
    faqItems.push([text(button).trim(), text(answer).replace(/\s+/g, ' ').trim()
      .replace('In-stock builds are typically delivered in x business days* after order confirmation;', 'Delivery dates are confirmed on quotation;')]);
  }
  node.childNodes?.forEach(collectFaq);
}
if (!faqSection) throw new Error('Missing supplied Dedicated AI Servers FAQs.');
collectFaq(faqSection);
fs.writeFileSync('src/app/data/dedicated-ai-servers-faqs.data.ts', `// Imported from the supplied Dedicated AI Servers page.\nexport const DEDICATED_AI_SERVERS_FAQS: readonly (readonly [string, string])[] = ${JSON.stringify(faqItems, null, 2)};\n`);
const fonts = nodes.filter(node => node.tagName === 'link' && attr(node, 'rel') === 'stylesheet').map(original).join('\n');
const styles = nodes.filter(node => node.tagName === 'style').map(original).join('\n');
const productRuntime = nodes.filter(node => node.tagName === 'script').map(text).find(script => script.includes("$id('daCard')") && script.includes('var XH=window.XH'));
if (!productRuntime) throw new Error('Missing supplied Dedicated AI Servers animation and tool runtime.');
let sharedRuntime = nodes.filter(node => node.tagName === 'script').map(text).find(script => script.includes('core runtime — exposes window.XH'));
if (!sharedRuntime) throw new Error('Missing supplied core runtime.');
// Keep the source's typewriter, Ask AI links and animation helpers. Valid quotes
// continue in the site's enquiry dialog instead of the source's local demo inbox.
sharedRuntime = sharedRuntime.replace(/\/\* ---------- forms[\s\S]*?(?=\/\* ---------- cart ---------- \*\/)/,
  `XH.onForm=function(){};
  d.addEventListener('submit',function(e){var f=e.target.closest('[data-xhform]');if(!f)return;e.preventDefault();if(!f.reportValidity())return;d.dispatchEvent(new CustomEvent('import-ai-server-request',{detail:Object.fromEntries(new FormData(f).entries())}));});
  `);
sharedRuntime += `\n(function(){var open=XH.open;XH.open=function(id,opts){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:opts&&opts.topic}));return;}open(id,opts);};})();`;
if (!sharedRuntime.includes('import-ai-server-request')) throw new Error('Missing quotation form integration.');
for (const runtime of [sharedRuntime, productRuntime]) new vm.Script(runtime);
const head = `<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${fonts}${styles}`;
const scripts = `<script>${sharedRuntime}</script><script>${productRuntime}</script>`;
const common = 'html,body{height:auto;min-height:0}body{margin:0}main{display:flow-root}.rv{opacity:1!important;transform:none!important}';
fs.writeFileSync('public/dedicated-ai-servers-hero.html', `${head}<title>Dedicated AI Servers: animated provisioning, training, inference, model fit and India residency</title><style>${common}#daHero{padding-bottom:32px}#daHero .lh-title{display:block;white-space:nowrap!important;text-wrap:nowrap!important;font-size:var(--ai-title-size,30px)!important}#daHero .lh-title .nm{display:inline;white-space:nowrap}</style></head><body data-preserve-copy><main>${hero}</main>${scripts}</body></html>\n`);
fs.writeFileSync('public/dedicated-ai-servers-content.html', `${head}<title>Dedicated AI Servers: NVIDIA GPUs, catalogue, VRAM calculator, GPU picker, quotation and XcellHost support</title><style>${common}.sec{padding-block:32px}.da-ch{translate:none!important}.da-vs{overflow:clip}.da-vs.in ul.ok li{transform:none}</style></head><body data-preserve-copy><main>${content}</main>${scripts}</body></html>\n`);
console.log('Imported the supplied five-scene Dedicated AI Servers hero and sections through Why XcellHost.');
