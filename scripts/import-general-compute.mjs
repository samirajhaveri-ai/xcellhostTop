import fs from 'node:fs';
import vm from 'node:vm';
import { parse } from 'parse5';

const sourcePath = process.argv[2];
if (!sourcePath) throw new Error('Pass the supplied General Compute HTML file path.');
const source = fs.readFileSync(sourcePath, 'utf8');
const nodes = [];
function visit(node) { nodes.push(node); for (const child of node.childNodes || []) visit(child); }
visit(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(attribute => attribute.name === name)?.value;
const text = node => node.nodeName === '#text' ? node.value : (node.childNodes || []).map(text).join('');
const hasClass = (node, name) => (attr(node, 'class') || '').split(/\s+/).includes(name);
const slice = node => {
  if (!node?.sourceCodeLocation) throw new Error('A required General Compute section is missing.');
  return source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
};
function between(script, start, end) {
  const a = script.indexOf(start), b = script.indexOf(end, a + start.length);
  if (a < 0 || b < 0) throw new Error('Missing source runtime boundary: ' + start);
  return script.slice(a, b);
}
const css = nodes.filter(node => node.tagName === 'style').map(text).join('\n');
const fonts = nodes.filter(node => node.tagName === 'link' && /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(node, 'href') || '')).map(slice).join('');
const scripts = nodes.filter(node => node.tagName === 'script').map(text);
const core = scripts.find(script => script.includes('// reveal') && script.includes('// counters'));
const product = scripts.find(script => script.includes('/* hero launcher */') && script.includes('/* pricing */'));
const controls = scripts.find(script => script.includes('// cycle active layer'));
if (!core || !product || !controls) throw new Error('Missing supplied General Compute runtime.');
const reveal = between(core, '// reveal', '// typewriter');
const prefix = product.slice(0, product.indexOf('/* hero launcher */'));
const heroRuntime = prefix + between(product, '/* hero launcher */', '/* pricing */') + '\n})();';
let pricingRuntime = prefix + product.slice(product.indexOf('/* pricing */'));
pricingRuntime = pricingRuntime
  .replace('$("qBox").scrollIntoView({behavior:RM?"auto":"smooth",block:"nearest"})', 'scrollSection($("qBox"))')
  .replace('x.scrollIntoView({block:"nearest",inline:"nearest"})', 'revealTab(x)');
// Carry the source's selected order configuration into the application enquiry.
const orderStart = pricingRuntime.indexOf('$("qGo").addEventListener');
if (orderStart < 0) throw new Error('Missing source order button.');
pricingRuntime = pricingRuntime.slice(0, orderStart) + `$("qGo").addEventListener("click",function(event){
 event.preventDefault();var p=rows()[S.i];
 var configuration=p.code+" ("+p.vcpu+" vCPU / "+p.ram+" GB) · "+(S.o==="win"?"Windows":"Linux")+" · "+S.b+" · +"+$("qS").value+" GB "+SP[S.st].n+
 ($("qBk").checked?" · backup":"")+($("qIp").checked?" · additional IPv4":"")+($("qLb").checked?" · load balancer":"")+($("qM").checked?" · managed server":"")+
 " · "+$("qT").textContent+"/month incl. GST";
 document.dispatchEvent(new CustomEvent('import-callback',{detail:'General Compute order: '+configuration}));
});
})();`;
const helpers = `(function(){var observers=[];
${reveal.replace('o.observe(el)}else go()', 'o.observe(el);observers.push(o)}else go()')}
addEventListener('pagehide',function(){if(io)io.disconnect();observers.forEach(function(o){o.disconnect()})},{once:true});
})();
function scrollSection(element){if(!element)return;var frame=window.frameElement;if(frame){parent.scrollTo({top:parent.scrollY+frame.getBoundingClientRect().top+element.getBoundingClientRect().top-148,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}else element.scrollIntoView({behavior:'smooth'})}
function revealTab(button){var box=button.parentElement;if(button.offsetLeft<box.scrollLeft)box.scrollLeft=button.offsetLeft;else if(button.offsetLeft+button.offsetWidth>box.scrollLeft+box.clientWidth)box.scrollLeft=button.offsetLeft+button.offsetWidth-box.clientWidth;}
`;
for (const script of [helpers, controls, heroRuntime, pricingRuntime]) new vm.Script(script);
const answer = nodes.find(node => attr(node, 'id') === 'answer');
const timeline = nodes.find(node => hasClass(node, 'ox-tl'));
if (!answer || !timeline) throw new Error('Missing Quick Answer or four-step launch timeline.');
let body = source.slice(answer.sourceCodeLocation.startOffset, timeline.sourceCodeLocation.endOffset);
const routes = {
  'cpu-intensive-compute.html': '/cpu-optimized',
  'ram-intensive-compute.html': '/memory-optimized',
  'performance-cloud.html': '/performance-cloud',
  'bare-metal.html': '/bare-metal-servers',
};
for (const [file, route] of Object.entries(routes)) body = body.replaceAll(`href="${file}"`, `href="${route}" target="_top"`);
const hero = nodes.find(node => hasClass(node, 'ai-hero'));
const art = nodes.find(node => hasClass(node, 'glass') && node.sourceCodeLocation.startOffset > hero.sourceCodeLocation.startOffset && node.sourceCodeLocation.endOffset < hero.sourceCodeLocation.endOffset);
const shell = (title, content, runtime, extraCss = '') => `<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>${fonts}<style>${css}\nmain{display:flow-root;padding-bottom:24px}${extraCss}</style></head><body><main data-preserve-copy>${content}</main><script>${helpers}</script><script>${runtime}</script></body></html>`;
fs.writeFileSync('public/imported-general-compute.html', shell('General Compute plans, add-ons and launch steps', `<div class="wrap">${body}</div>`, controls + '\n' + pricingRuntime));
fs.writeFileSync('public/imported-general-compute-hero.html', shell('General Compute interactive deploy preview', slice(art), heroRuntime, 'html,body{background:transparent!important}main{padding:12px 10px 48px}.glass{width:100%;max-width:none;margin:0}'));
console.log('Imported Quick Answer through Launch in four steps and the new interactive deploy preview.');
