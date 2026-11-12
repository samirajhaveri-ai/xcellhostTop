const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the supplied secure-file-transfer.html file.');
const source = fs.readFileSync(process.argv[2], 'utf8'), nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-customer-testimonials="off"');
// Keep the supplied product tools and content; use the site's shared closing panel.
for (const id of ['contact', 'related']) {
  const section = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === id);
  if (section) main = main.replace(html(section), '');
}
main = main.replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => 'href="/' + slug + '" target="_top"');
main = main.replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:top|cloud)\/(#[^"]*)?"/g, (_, hash) => 'href="/' + (hash || '') + '" target="_top"');
main = main.replace('<div class="lh-ask"', '<div class="xh-banner-actions" data-banner-added-actions></div><div class="lh-ask"');
const extras = `<section class="sec alt sf-site-section" id="security-compliance"><div class="wrap"><div class="sh"><span class="eyebrow">SECURITY &amp; COMPLIANCE</span><h2>Controlled Sharing For Sensitive Files</h2><p>Combine the encryption and residency options described above with your team's access policies. Confirm the deployment, integration and retention requirements in your quotation.</p></div><div class="sf-site-grid"><article><h3>Encryption And Key Ownership</h3><p>Review client-side encryption and key recovery arrangements before moving sensitive files.</p></article><article><h3>Sharing Controls</h3><p>Set link expiry, passwords and download limits to suit each recipient and document.</p></article><article><h3>Audit And Access Reviews</h3><p>Use activity records and access reviews to manage sharing and remove access when people leave.</p></article></div></div></section>
<section class="sec sf-site-section" id="why-xcellhost"><div class="wrap"><div class="sh"><span class="eyebrow">WHY XCELLHOST</span><h2>Why Choose XcellHost For Secure File Transfer?</h2></div><div class="sf-site-grid"><article><h3>India Hosting Options</h3><p>Discuss Mumbai hosting and the residency requirements for your organisation.</p></article><article><h3>Team-Sized Plans</h3><p>Compare personal, professional, business and enterprise requirements in one configurator.</p></article><article><h3>Clear INR Estimates</h3><p>See licence, storage and service estimates with applicable GST before requesting a quote.</p></article><article><h3>Policy Setup</h3><p>Add onboarding and sharing-policy setup to your rollout when needed.</p></article><article><h3>Identity Integration</h3><p>Scope Microsoft Entra ID SSO and other integrations with your existing environment.</p></article><article><h3>User Training</h3><p>Include training sessions to help your team adopt secure file-sharing habits.</p></article></div></div></section>`;
main = main.replace('<section class="sec alt" id="faq">', extras + '<section class="sec alt" id="faq">');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
const runtime = scripts.at(-1).replaceAll('window.scrollTo(', 'window.scrollOuter(');
const bridge = String.raw`(function(){
 const open=XH.open;let quoteFromConfigurator=false;
 document.addEventListener('click',event=>{quoteFromConfigurator=!!event.target.closest('#configure [data-open="xhCallback"]');},true);
 XH.open=function(id,options){if(id==='xhCallback'){const receipt=document.getElementById('cfRows');const selected=document.getElementById('cfName');const topic=quoteFromConfigurator?'XcellVault plan quotation':options?.topic||'File sharing enquiry';const details=topic+(quoteFromConfigurator&&receipt?'\nConfigured plan: '+selected.textContent+'\n'+receipt.innerText+'\nFirst month including GST: '+document.getElementById('cfTot').textContent:'');document.dispatchEvent(new CustomEvent('import-callback',{detail:'Secure File Transfer: '+details}));return;}open(id,options);};
 XH.cart={add:item=>document.dispatchEvent(new CustomEvent('import-cart',{detail:item}))};
 const providers={chatgpt:['https://chatgpt.com/?q=','chatgpt.com'],claude:['https://claude.ai/new?q=','claude.ai'],perplexity:['https://www.perplexity.ai/search/new?q=','perplexity.ai'],google:['https://www.google.com/search?udm=50&q=','gemini.google.com'],copilot:['https://copilot.microsoft.com/?q=','copilot.microsoft.com']};
 document.querySelectorAll('.lh-ask').forEach(box=>box.querySelectorAll('[data-ai]').forEach(a=>{const p=providers[a.dataset.ai];if(!p)return;a.title='Ask '+a.textContent.trim();a.setAttribute('aria-label',a.title);a.href=p[0]+encodeURIComponent(box.dataset.q);a.target='_blank';a.rel='noopener noreferrer';const img=document.createElement('img');img.src='https://www.google.com/s2/favicons?domain='+p[1]+'&sz=64';img.alt='';img.width=18;img.height=18;a.replaceChildren(img);}));
 document.addEventListener('click',event=>{const a=event.target.closest('a[href^="/"]');if(a)a.target='_top';},true);
 function fit(){const h=document.querySelector('#sfHero h1');if(!h)return;h.style.setProperty('--sf-heading-size','32px');const range=document.createRange();range.selectNodeContents(h);h.style.setProperty('--sf-heading-size',Math.min(32,32*(h.clientWidth-2)/Math.max(1,range.getBoundingClientRect().width))+'px');}
 document.fonts.ready.then(fit);window.addEventListener('resize',fit);fit();
})();`;
for (const code of [core, bridge, runtime]) new vm.Script(code);
const toast = '<div class="toast" id="xhToast" role="status"><span id="xhToastT"></span></div>';
fs.writeFileSync(path.join(root, 'public/imported-secure-file-transfer.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Secure File Transfer | XcellHost</title>' + fonts + styles + '<link rel="stylesheet" href="/assets/styles/secure-file-transfer.css"></head><body>' + main + toast + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + core + '</script><script>' + bridge + '</script><script>' + runtime + '</script></body></html>');
console.log('Imported Secure File Transfer, encryption demo, calculators, plans and FAQ.');
