const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the supplied career-handbook.html file.');
const source = fs.readFileSync(process.argv[2], 'utf8'), nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-customer-testimonials="off"');
// Keep the supplied product tools and content; use the site's shared closing panel.
for (const id of ['contact', 'sources']) {
  const section = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === id);
  if (section) main = main.replace(html(section), '');
}
const aliases = { 'careers-overview': '/company/careers-overview', 'xcellhost-iso-27001': '/company/trust-center', 'xcellhost-podcast': '/under-construction/podcasts-catalog' };
main = main.replace(/href="([a-z0-9-]+)\.html(#[^"]*)?"/g, (_, slug, hash) => 'href="' + (slug === 'careers-overview' && hash === '#apply' ? '/company/apply-for-job' : (aliases[slug] || '/' + slug) + (hash === '#match' ? '#career-role-matcher' : hash || '')) + '" target="_top"');
main = main.replace(/href="https:\/\/(?:www\.)?xcellhost\.(?:top|cloud)\/(#[^"]*)?"/g, (_, hash) => 'href="/' + (hash || '') + '" target="_top"');
// Career navigation uses the supplied role-finder, career-path and checklist actions.
main = main.replace('id="cbHero"', 'id="cbHero" data-banner-actions="off"');
main = main.replace('Ask AI to prep my interview', 'Ask AI About Careers');

const extras = `<section class="sec alt cb-site-section" id="security-compliance"><div class="wrap"><div class="sh"><span class="eyebrow">SECURITY &amp; COMPLIANCE</span><h2>Responsible Work And A Respectful Workplace</h2><p>The conduct chapter above explains how customer information, access credentials and workplace concerns should be handled. Confirm role-specific policies and reporting channels during onboarding.</p></div><div class="cb-site-grid"><article><h3>Customer Confidentiality</h3><p>Use approved tools and follow the access and data-handling guidance for your role.</p></article><article><h3>Clear Escalation</h3><p>Know who to contact when an incident, security concern or workplace issue needs attention.</p></article><article><h3>Offer And Policy Clarity</h3><p>Confirm benefits, working arrangements and applicable policies in your written offer and onboarding information.</p></article></div></div></section>
<section class="sec cb-site-section" id="why-xcellhost"><div class="wrap"><div class="sh"><span class="eyebrow">WHY XCELLHOST</span><h2>Explore A Career At XcellHost</h2></div><div class="cb-site-grid"><article><h3>Different Career Paths</h3><p>Explore technical, customer-facing and business teams using the role cards and finder.</p></article><article><h3>Learning On The Job</h3><p>Review the handbook's learning and certification guidance for your chosen role.</p></article><article><h3>Visible Growth Steps</h3><p>Use the career ladder to discuss responsibilities, skills and possible next steps.</p></article><article><h3>Interview Preparation</h3><p>Build and download a checklist with questions relevant to the team you want to join.</p></article><article><h3>Structured Onboarding</h3><p>Explore the illustrative first 30, 60 and 90 days with your manager.</p></article><article><h3>Work That Matters</h3><p>Learn how cloud, security and support teams help customers keep their businesses running.</p></article></div></div></section>`;

main = main.replace('<section class="sec cb-fqs" id="faq">', extras + '<section class="sec cb-fqs" id="faq">');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
const scripts = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(m => m[1]);
const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
const runtime = scripts.at(-1).replaceAll('window.scrollTo(', 'window.scrollOuter(');
const bridge = String.raw`(function(){
 const open=XH.open;
 XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:'Career Handbook: '+(options?.topic||'Career enquiry')}));return;}open(id,options);};
 const providers={chatgpt:['https://chatgpt.com/?q=','chatgpt.com'],claude:['https://claude.ai/new?q=','claude.ai'],perplexity:['https://www.perplexity.ai/search/new?q=','perplexity.ai'],google:['https://www.google.com/search?udm=50&q=','gemini.google.com'],copilot:['https://copilot.microsoft.com/?q=','copilot.microsoft.com']};
 document.querySelectorAll('.lh-ask').forEach(box=>box.querySelectorAll('[data-ai]').forEach(a=>{const p=providers[a.dataset.ai];if(!p)return;a.title='Ask '+a.textContent.trim();a.setAttribute('aria-label',a.title);a.href=p[0]+encodeURIComponent(box.dataset.q);a.target='_blank';a.rel='noopener noreferrer';const img=document.createElement('img');img.src='https://www.google.com/s2/favicons?domain='+p[1]+'&sz=64';img.alt='';img.width=18;img.height=18;a.replaceChildren(img);}));
 document.addEventListener('click',event=>{const a=event.target.closest('a[href^="/"]');if(a)a.target='_top';},true);
 function fit(){const h=document.querySelector('#cbHero h1');if(!h)return;h.style.setProperty('--cb-heading-size','32px');const range=document.createRange();range.selectNodeContents(h);h.style.setProperty('--cb-heading-size',Math.min(32,32*(h.clientWidth-2)/Math.max(1,range.getBoundingClientRect().width))+'px');}
 document.fonts.ready.then(fit);window.addEventListener('resize',fit);fit();
})();`;
for (const code of [core, bridge, runtime]) new vm.Script(code);
const toast = '<div class="toast" id="xhToast" role="status"><span id="xhToastT"></span></div>';
fs.writeFileSync(path.join(root, 'public/imported-career-handbook.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Career Handbook | XcellHost</title>' + fonts + styles + '<link rel="stylesheet" href="/assets/styles/career-handbook.css"></head><body>' + main + toast + '<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>' + core + '</script><script>' + bridge + '</script><script>' + runtime + '</script></body></html>');
console.log('Imported career handbook chapters, role tools, checklist and FAQ.');
