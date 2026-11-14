const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the supplied xcellhost-podcast.html file.');
const source = fs.readFileSync(process.argv[2], 'utf8'), nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-customer-testimonials="off"');
// Angular supplies the shared closing panel. Keep the episode content and sources intact.
for (const n of nodes.filter(n => n.tagName === 'section' && ['contact', 'related'].includes(attr(n, 'id')))) main = main.replace(html(n), '');
const aliases = { 'xcellhost-vdpo': 'vdpo-as-a-service', 'ai-training-chartered-accountants': 'ai-training-for-chartered-accountants', 'identity-access-management': 'identity-and-access-management', 'xcellhost-serverless-inference': 'serverless-inference' };
const local = slug => '/' + (aliases[slug] || slug);
main = main.replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => 'href="' + local(slug) + '" target="_top"');
main = main.replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:top|cloud)\/"/g, 'href="/" target="_top"');
main = main.replace('<div class="lh-ask"', '<div class="xh-banner-actions" data-banner-added-actions></div><div class="lh-ask"');
const supportSections = `<section class="sec alt pc-site-section" id="podcast-security"><div class="wrap"><div class="sh"><span class="eyebrow">SECURITY &amp; COMPLIANCE</span><h2>Responsible Participation And Editorial Standards</h2><p>Podcast conversations should share practical experience without exposing confidential business information. The supplied guest application asks speakers to clear confidential material with their employer before taking part.</p></div><div class="pc-site-grid"><article><h3>Guest Consent</h3><p>Confirm that you can speak on the record before sending your application.</p></article><article><h3>Source Transparency</h3><p>The editorial plan calls for original sources, labelled partner content and visible corrections.</p></article><article><h3>Clear Preview Labels</h3><p>Season 1 topics are planned. The studio scenes and player preview are illustrative, with no recorded episode presented as live.</p></article></div></div></section>
<section class="sec pc-site-section" id="why-podcast"><div class="wrap"><div class="sh"><span class="eyebrow">WHY XCELLHOST</span><h2>Why Follow The XcellHost Podcast?</h2></div><div class="pc-site-grid"><article><h3>India-Focused Topics</h3><p>Cloud, security, data and AI decisions for Indian organisations.</p></article><article><h3>Practitioner Conversations</h3><p>Planned discussions with XcellHost experts and invited practitioners.</p></article><article><h3>One Decision Per Episode</h3><p>A focused brief and practical questions for every planned topic.</p></article><article><h3>Accessible Format</h3><p>The production plan includes chapters, show notes, transcripts and video captions.</p></article><article><h3>Suggest A Topic</h3><p>Share the questions your team wants the podcast to cover.</p></article><article><h3>Independent Guest Selection</h3><p>Guest slots are not sold, and partners do not choose questions or edits.</p></article></div></div></section>`;
main = main.replace('<section class="sec pc-fq" id="faq">', supportSections + '<section class="sec pc-fq" id="faq">');
// Headings use title case while retaining brand names and acronyms.
main = main.replace(/(<h[1-6]\b[^>]*>)([\s\S]*?)(<\/h[1-6]>)/g, (_, open, body, close) => open + body.replace(/(^|>)([^<]+)/g, (_, prefix, text) => prefix + text.split(/(&[^;\s]+;)/).map((part, index) => index % 2 ? part : part.replace(/\b[a-z][a-z]*/g, word => word[0].toUpperCase() + word.slice(1))).join('')) + close);
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
let runtime = scripts.at(-1);
runtime = runtime.replace(/(['"])([a-z0-9-]+)\.html\1/g, (_, quote, slug) => quote + local(slug) + quote);
const bridge = String.raw`(function(){
  const originalOpen=XH.open;
  XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:'The XcellHost Podcast: '+(options?.topic||'Podcast enquiry')}));return;}originalOpen(id,options);};
  XH.cart={add:item=>document.dispatchEvent(new CustomEvent('import-cart',{detail:item}))};
  document.addEventListener('submit',event=>{const form=event.target;if(!form.matches('[data-xhform]'))return;event.preventDefault();event.stopImmediatePropagation();if(!form.reportValidity())return;document.dispatchEvent(new CustomEvent('import-training-enquiry',{detail:{...Object.fromEntries(new FormData(form)),request:'Notify me when The XcellHost Podcast launches'}}));},true);
  const newsletter=document.querySelector('[data-xhform="podcast-newsletter"]');if(newsletter){const note=document.createElement('p');note.className='fine';note.textContent='Continue to the enquiry form to review and send your launch notification request.';newsletter.after(note);}
  const providers={chatgpt:['https://chatgpt.com/?q=','chatgpt.com'],claude:['https://claude.ai/new?q=','claude.ai'],perplexity:['https://www.perplexity.ai/search/new?q=','perplexity.ai'],google:['https://www.google.com/search?udm=50&q=','gemini.google.com'],copilot:['https://copilot.microsoft.com/?q=','copilot.microsoft.com']};
  document.querySelectorAll('.lh-ask').forEach(box=>box.querySelectorAll('[data-ai]').forEach(a=>{const p=providers[a.dataset.ai];if(!p)return;a.title='Ask '+a.textContent.trim();a.setAttribute('aria-label',a.title);a.href=p[0]+encodeURIComponent(box.dataset.q);a.target='_blank';a.rel='noopener noreferrer';const img=document.createElement('img');img.src='https://www.google.com/s2/favicons?domain='+p[1]+'&sz=64';img.alt='';img.width=18;img.height=18;a.replaceChildren(img);}));
  document.addEventListener('click',event=>{const a=event.target.closest('a[href^="/"]');if(a)a.target='_top';},true);
  function fit(){const h=document.querySelector('#pcHero h1');if(!h)return;h.style.setProperty('--pc-heading-size','32px');const range=document.createRange();range.selectNodeContents(h);h.style.setProperty('--pc-heading-size',Math.min(32,32*(h.clientWidth-2)/Math.max(1,range.getBoundingClientRect().width))+'px');}
  document.fonts.ready.then(fit);window.addEventListener('resize',fit);fit();
})();`;
for (const code of [core, bridge, runtime]) new vm.Script(code);
const toast = '<div class="toast" id="xhToast" role="status"><span id="xhToastT"></span></div>';
fs.writeFileSync(path.join(root, 'public/imported-podcast-catalog.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>The XcellHost Podcast | XcellHost</title>' + fonts + styles + '<link rel="stylesheet" href="/assets/styles/podcast-catalog.css"></head><body>' + main + toast + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + core + '</script><script>' + bridge + '</script><script>' + runtime + '</script></body></html>');
console.log('Imported podcast catalogue with 12 planned topics, player preview and podcast-specific sections.');
