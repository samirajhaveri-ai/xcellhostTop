const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the supplied xcellhost-register-a-domain-name.html file.');
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
main = main.replace('<i></i>Live check</em>', '<i></i>Demo preview</em>');
main = main.replace('Ask AI about domains from XcellHost', 'Ask AI About Domains');
main = main.replace('Register a Domain Name</span>', 'Register A Domain Name</span>');
main = main.replace('<form class="dm-cmd"', '<p class="dm-preview-note" role="note">Search preview: availability is simulated. Our team confirms availability and final pricing before registration.</p><form class="dm-cmd"');
main = main.replace('<div class="lh-ask"', '<div class="xh-banner-actions" data-banner-added-actions></div><div class="lh-ask"');
const extras = `<section class="sec alt dm-site-section" id="security-compliance"><div class="wrap"><div class="sh"><span class="eyebrow">SECURITY &amp; COMPLIANCE</span><h2>Protect Your Domain And Its Ownership</h2></div><div class="dm-site-grid"><article><h3>Ownership Records</h3><p>Register in your organisation's name and keep registrant contact details up to date.</p></article><article><h3>Account And Transfer Controls</h3><p>Use strong account authentication and review registrar-lock and transfer requirements before moving a domain.</p></article><article><h3>Renewal And Privacy</h3><p>Review renewal dates, DNS settings and the privacy options supported by your chosen extension.</p></article></div></div></section><section class="sec dm-site-section" id="why-xcellhost"><div class="wrap"><div class="sh"><span class="eyebrow">WHY XCELLHOST</span><h2>Why Register Your Domain With XcellHost?</h2></div><div class="dm-site-grid"><article><h3>Extension Choices</h3><p>Compare Indian, global and specialist extensions in one catalogue.</p></article><article><h3>Clear INR Estimates</h3><p>Review first-year, renewal and transfer prices before requesting confirmation.</p></article><article><h3>Bulk Planning</h3><p>Shortlist multiple names together for your brands, projects and teams.</p></article><article><h3>Transfer Assistance</h3><p>Discuss authorisation codes, domain eligibility and DNS continuity with our team.</p></article><article><h3>DNS And Email Setup</h3><p>Plan the records needed for your website, email and verification services.</p></article><article><h3>One Contact</h3><p>Ask XcellHost about domain registration, renewals and related hosting requirements.</p></article></div></div></section>`;

main = main.replace('<section class="sec" id="faq">', extras + '<section class="sec" id="faq">');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
const runtime = scripts.at(-1).replace('/* ---------- search + results ---------- */', 'document.addEventListener("domain-cart-sync",()=>sync());\n/* ---------- search + results ---------- */').replaceAll('window.scrollTo(', 'window.scrollOuter(') + '\nwindow.addEventListener("storage",()=>document.dispatchEvent(new CustomEvent("domain-cart-sync")));';
const bridge = String.raw`(function(){
 const open=XH.open;
 XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:'Register A Domain Name: '+(options?.topic||'Domain registration enquiry')}));return;}open(id,options);};
 XH.cart={items:()=>{try{return JSON.parse(localStorage.getItem('xh_cart_v1')||'[]').filter(l=>l.pricing?.domain).map(l=>{const dm=l.pricing.domain;return {key:'dom:'+dm.name,name:dm.name,qty:l.qty,price:dm.type==='register'?(l.pricing.unitAmount+dm.renew*(l.qty-1))/l.qty:l.pricing.unitAmount,dm:{...dm,reg:dm.register}}})}catch{return []}},add:item=>document.dispatchEvent(new CustomEvent('import-cart',{detail:item})),open:()=>document.dispatchEvent(new CustomEvent('import-cart-open'))};
 const providers={chatgpt:['https://chatgpt.com/?q=','chatgpt.com'],claude:['https://claude.ai/new?q=','claude.ai'],perplexity:['https://www.perplexity.ai/search/new?q=','perplexity.ai'],google:['https://www.google.com/search?udm=50&q=','gemini.google.com'],copilot:['https://copilot.microsoft.com/?q=','copilot.microsoft.com']};
 document.querySelectorAll('.lh-ask').forEach(box=>box.querySelectorAll('[data-ai]').forEach(a=>{const p=providers[a.dataset.ai];if(!p)return;a.title='Ask '+a.textContent.trim();a.setAttribute('aria-label',a.title);a.href=p[0]+encodeURIComponent(box.dataset.q);a.target='_blank';a.rel='noopener noreferrer';const img=document.createElement('img');img.src='https://www.google.com/s2/favicons?domain='+p[1]+'&sz=64';img.alt='';img.width=18;img.height=18;a.replaceChildren(img);}));
 document.addEventListener('click',event=>{const a=event.target.closest('a[href^="/"]');if(a)a.target='_top';},true);
 function fit(){const h=document.querySelector('#hero h1');if(!h)return;h.style.setProperty('--dm-heading-size','32px');const range=document.createRange();range.selectNodeContents(h);h.style.setProperty('--dm-heading-size',Math.min(32,32*(h.clientWidth-2)/Math.max(1,range.getBoundingClientRect().width))+'px');}
 document.fonts.ready.then(fit);window.addEventListener('resize',fit);fit();
})();`;
for (const code of [core, bridge, runtime]) new vm.Script(code);
const dock = html(nodes.find(n => attr(n, 'id') === 'dock'));
const toast = '<div class="toast" id="xhToast" role="status"><span id="xhToastT"></span></div>';
fs.writeFileSync(path.join(root, 'public/imported-register-a-domain-name.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Register A Domain Name | XcellHost</title>' + fonts + styles + '<link rel="stylesheet" href="/assets/styles/register-a-domain-name.css"></head><body>' + main + dock + toast + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + core + '</script><script>' + bridge + '</script><script>' + runtime + '</script></body></html>');
console.log('Imported domain catalogue, search preview, transfer tools and FAQ.');
