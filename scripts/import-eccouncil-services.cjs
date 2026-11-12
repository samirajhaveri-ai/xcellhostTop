const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the supplied eccouncil-services.html file.');
const source = fs.readFileSync(process.argv[2], 'utf8'), nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-customer-testimonials="off"');
main = main.replace(/data-product="[^"]*"/, 'data-product="EC-Council Programs"');
const ctas = nodes.find(n => attr(n, 'class').split(/\s+/).includes('lh-ctas'));
if (ctas) main = main.replace(html(ctas), html(ctas) + '<div class="lh-ask" data-q="Explain EC-Council certification paths, exam eligibility, training options and the questions to ask XcellHost before requesting a team training quotation."><span class="k">✦ Ask AI About EC-Council</span><span class="chips"><a data-ai="chatgpt" href="#">ChatGPT</a><a data-ai="claude" href="#">Claude</a><a data-ai="perplexity" href="#">Perplexity</a><a data-ai="google" href="#">Google AI</a><a data-ai="copilot" href="#">Copilot</a></span></div>');
// Replace the supplied closing promotion with the site's shared contact design.
const closing = nodes.find(n => n.tagName === 'section' && attr(n, 'class').split(/\s+/).includes('ec-cta'));
if (closing) main = main.replace(html(closing), '');
const aliases = { 'xcellhost-vciso': 'vciso-as-a-service', 'ai-training-integrated-program': 'synapsem-ai-training-integrated-program', 'ai-training-live-online': 'synapsem-ai-training-live-online', 'xcellhost-certifications': 'certifications' };
const local = slug => '/' + (aliases[slug] || slug);
main = main.replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => 'href="' + local(slug) + '" target="_top"');
main = main.replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:top|cloud)\/"/g, 'href="/" target="_top"');
main = main.replace('<div class="lh-ask"', '<div class="xh-banner-actions" data-banner-added-actions></div><div class="lh-ask"');
const extras = `<section class="sec alt ec-site-section" id="security-compliance"><div class="wrap"><div class="sh"><span class="eyebrow">SECURITY &amp; COMPLIANCE</span><h2>Responsible Training And Certification Planning</h2><p>Use the programme details, eligibility checklist and recognition information above to plan training for your role. Confirm current exam requirements, delivery arrangements and voucher inclusions in your quotation.</p></div><div class="ec-site-grid"><article><h3>Authorised Practice</h3><p>Use dedicated training labs and only test systems you have permission to assess.</p></article><article><h3>Eligibility Checks</h3><p>Review training, experience and application requirements before booking an exam.</p></article><article><h3>Clear Quote Scope</h3><p>Courses and exam vouchers are quoted separately from the indicative lab and skills-test add-ons.</p></article></div></div></section>
<section class="sec ec-site-section" id="why-xcellhost"><div class="wrap"><div class="sh"><span class="eyebrow">WHY XCELLHOST</span><h2>Why Plan EC-Council Training With XcellHost?</h2></div><div class="ec-site-grid"><article><h3>Role-Based Paths</h3><p>Compare certification sequences for technical, operational and leadership roles.</p></article><article><h3>One Team Plan</h3><p>Combine certifications and seat counts in a single quotation request.</p></article><article><h3>Readiness Tools</h3><p>Check the entry requirements and preparation steps for your chosen programme.</p></article><article><h3>Practice Lab Options</h3><p>Include learner lab time alongside your certification plan.</p></article><article><h3>Skills Assessment</h3><p>Add skills or hiring tests when they fit your team's requirements.</p></article><article><h3>Local Quotation</h3><p>Discuss delivery options and receive an INR quotation with applicable GST.</p></article></div><p class="fine">EC-Council partner or authorised training centre status is subject to confirmation, as noted in the supplied programme information.</p></div></section>`;
main = main.replace('<section class="sec alt ec-faq" id="faq">', extras + '<section class="sec alt ec-faq" id="faq">');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
let runtime = scripts.at(-1).replace(/(['"])([a-z0-9-]+)\.html\1/g, (_, quote, slug) => quote + local(slug) + quote);
runtime = runtime.replaceAll('window.scrollTo(', 'window.scrollOuter(');
const bridge = String.raw`(function(){
 const open=XH.open;
 XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:'EC-Council Programs: '+(options?.topic||'Training enquiry')}));return;}open(id,options);};
 XH.cart={add:item=>document.dispatchEvent(new CustomEvent('import-cart',{detail:item}))};
 XH.onForm=function(){};
 document.addEventListener('submit',event=>{const f=event.target;if(!f.matches('[data-xhform]'))return;event.preventDefault();event.stopImmediatePropagation();if(!f.reportValidity())return;document.dispatchEvent(new CustomEvent('import-training-enquiry',{detail:{...Object.fromEntries(new FormData(f)),addOns:document.getElementById('ecOSub').textContent,addOnTotal:document.getElementById('ecOT').textContent}}));},true);
 const providers={chatgpt:['https://chatgpt.com/?q=','chatgpt.com'],claude:['https://claude.ai/new?q=','claude.ai'],perplexity:['https://www.perplexity.ai/search/new?q=','perplexity.ai'],google:['https://www.google.com/search?udm=50&q=','gemini.google.com'],copilot:['https://copilot.microsoft.com/?q=','copilot.microsoft.com']};
 document.querySelectorAll('.lh-ask').forEach(box=>box.querySelectorAll('[data-ai]').forEach(a=>{const p=providers[a.dataset.ai];if(!p)return;a.title='Ask '+a.textContent.trim();a.setAttribute('aria-label',a.title);a.href=p[0]+encodeURIComponent(box.dataset.q);a.target='_blank';a.rel='noopener noreferrer';const img=document.createElement('img');img.src='https://www.google.com/s2/favicons?domain='+p[1]+'&sz=64';img.alt='';img.width=18;img.height=18;a.replaceChildren(img);}));
 const form=document.getElementById('ecQF');if(form){const note=document.createElement('p');note.className='fine';note.textContent='Continue to the enquiry form to review and send your training plan.';form.append(note);}
 document.addEventListener('click',event=>{const a=event.target.closest('a[href^="/"]');if(a)a.target='_top';},true);
 function fit(){const h=document.querySelector('#ecHero h1');if(!h)return;h.style.setProperty('--ec-heading-size','32px');const range=document.createRange();range.selectNodeContents(h);h.style.setProperty('--ec-heading-size',Math.min(32,32*(h.clientWidth-2)/Math.max(1,range.getBoundingClientRect().width))+'px');}
 document.fonts.ready.then(fit);window.addEventListener('resize',fit);fit();
})();`;
for (const code of [core, bridge, runtime]) new vm.Script(code);
const toast = '<div class="toast" id="xhToast" role="status"><span id="xhToastT"></span></div>';
fs.writeFileSync(path.join(root, 'public/imported-eccouncil-services.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>EC-Council Programs | XcellHost</title>' + fonts + styles + '<link rel="stylesheet" href="/assets/styles/eccouncil-services.css"></head><body>' + main + toast + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + core + '</script><script>' + bridge + '</script><script>' + runtime + '</script></body></html>');
console.log('Imported EC-Council programmes, tools, planner and FAQ.');
