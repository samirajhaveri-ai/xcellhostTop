const fs = require('node:fs');
const vm = require('node:vm');
const { parse } = require('parse5');
if (!process.argv[2]) throw Error('Pass the supplied RTX PRO 4500 HTML file.');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n,k) => n.attrs?.find(a => a.name === k)?.value || '';
const slice = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const text = n => n.value || (n.childNodes || []).map(text).join('');

let main = slice(nodes.find(n=>n.tagName==='main')).replace('<main','<main data-customer-testimonials="off"');
for(const n of nodes.filter(n=>n.tagName==='section'&&(attr(n,'id')==='contact'||attr(n,'id')==='related'||attr(n,'class').split(/\s+/).includes('lnl-wrap')))) main=main.replace(slice(n),'');
const powered=nodes.find(n=>attr(n,'class').split(/\s+/).includes('r4-pw'));
const ask=nodes.find(n=>attr(n,'class').split(/\s+/).includes('lh-ask'));
main=main.replace(slice(powered),'').replace(slice(ask),slice(ask).replace('class="lh-ask"','class="lh-ask" data-ai-product="RTX PRO 4500"')+'<div class="r4-powered-line"><span>Powered By</span><span aria-hidden="true">|</span><img src="/assets/images/a100-logos/nvidia.svg" alt="NVIDIA" width="28" height="28"><strong>NVIDIA RTX PRO 4500 Blackwell</strong></div>');
main=main.replace('Request INR quote', 'Review Quote Request');
const faq=nodes.find(n=>n.tagName==='section'&&attr(n,'id')==='faq');
const cards=(items)=>items.map(([h,p])=>'<article><h3>'+h+'</h3><p>'+p+'</p></article>').join('');
const security='<section class="sec alt" id="security-compliance"><div class="wrap"><div class="sh"><span class="eyebrow">SECURITY &amp; COMPLIANCE</span><h2>Security And Compliance</h2><p>Plan access, isolation and data handling for your dedicated GPU workload with the XcellHost team.</p></div><div class="r4-service-grid">'+cards([['Private Access','Agree private networking and access controls for your model weights, applications and datasets.'],['Workload Isolation','Choose dedicated GPU capacity or supported MIG partitions to suit your workload.'],['Data Location','Confirm hosting, backup and recovery locations in your deployment agreement.']])+'</div></div></section>';
const why='<section class="sec" id="why-xcellhost"><div class="wrap"><div class="sh"><span class="eyebrow">WHY XCELLHOST</span><h2>Why XcellHost For RTX PRO 4500 Blackwell</h2></div><div class="r4-service-grid">'+cards([['INR Billing','Get a configuration-specific quotation with a GST invoice.'],['Hosted In India','GPU servers hosted in Mumbai for Indian workloads.'],['GPU Stack Support','Help with drivers, frameworks and inference servers.'],['Scale Your Configuration','Choose one, two or four GPUs to suit your model and workload.'],['24/7 Operations','Infrastructure support from the XcellHost operations team.'],['One Partner','GPU hosting, configuration and support through one team.']])+'</div></div></section>';
main=main.replace(slice(faq),security+why+slice(faq));
const styles=nodes.filter(n=>n.tagName==='style').map(slice).join('\n').replace(/(\d*\.?\d+)vh\b/g,(_,n)=>'calc(var(--page-vh,1vh) * '+n+')');
const fonts=nodes.filter(n=>n.tagName==='link'&&/^https:\/\/fonts\./.test(attr(n,'href'))).map(slice).join('\n');
const scripts=nodes.filter(n=>n.tagName==='script'&&!attr(n,'type')).map(text);
const core=scripts.find(s=>s.includes('XcellHost v2 core runtime'));
let runtime=scripts.at(-1).replace("scrollTo({top:y,behavior:R?'auto':'smooth'});","window.hostingJumpTo('quote');");
const bridge=String.raw`(function(){
XH.open=function(id,options){if(id==='xhCallback')document.dispatchEvent(new CustomEvent('import-callback',{detail:options?.topic||'NVIDIA RTX PRO 4500 Blackwell enquiry'}));};
document.addEventListener('submit',function(e){const f=e.target.closest('#r4Form');if(!f)return;e.preventDefault();e.stopImmediatePropagation();if(!f.reportValidity())return;const data=new FormData(f);const summary=Array.from(data.entries()).filter(([k])=>k!=='basket').map(([k,v])=>k+': '+v).join('\n');document.dispatchEvent(new CustomEvent('import-callback',{detail:'NVIDIA RTX PRO 4500 Blackwell: '+(window.__r4Basket?.().text||'')+'\n'+summary}));},true);
document.addEventListener('click',function(e){const a=e.target.closest('a[href]');if(!a)return;const raw=a.getAttribute('href');if(raw.startsWith('#'))return;const u=new URL(a.href,location.href);if(u.origin!==location.origin&&!/^(?:www\.)?xcellhost\.(?:cloud|top)$/.test(u.hostname))return;let p=u.pathname.replace(/\.html$/,'');const aliases={'/nvidia-b300-gpu':'/nvidia-b300','/gpu-servers':'/gpu-servers','/deeptech-india':'/deeptech-india'};a.href=(aliases[p]||p)+u.search+u.hash;a.target='_top';},true);
})();`;
const css=fs.readFileSync('public/assets/styles/nvidia-rtx-pro-4500.css','utf8');
const html='<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NVIDIA RTX PRO 4500 Blackwell | XcellHost</title>'+fonts+styles+'<style>'+css+'</style><link rel="stylesheet" href="/assets/styles/consulting-faq.css"><link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"></head><body>'+main+'<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>'+core+'</script><script>'+bridge+'</script><script>'+runtime+'</script><script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
for(const m of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
fs.writeFileSync('public/imported-nvidia-rtx-pro-4500-blackwell.html',html);
console.log('Imported RTX PRO 4500 content, interactive tools and FAQ.');
