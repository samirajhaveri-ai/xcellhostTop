const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the supplied Nigeria NDPA HTML file.');
const source = fs.readFileSync(process.argv[2], 'utf8'), nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const aliases = { 'xcellhost-vdpo': 'vdpo-as-a-service', 'xcellhost-vciso': 'vciso-as-a-service', 'xcellhost-iso-27001': 'iso-27001-consulting', 'xcellhost-reseller-program': 'reseller-program', 'xcellhost-checkout': 'checkout' };
const local = slug => '/' + (aliases[slug] || slug);
let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-customer-testimonials="off"');
// Remove only the closing blocks identified in the user's screenshot.
for (const node of nodes.filter(n => attr(n, 'class').split(/\s+/).some(c => ['nd-src', 'nd-rel', 'nd-tm'].includes(c)))) {
  main = main.replace(html(node), '');
}
main = main.replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => 'href="' + local(slug) + '" target="_top"');
main = main.replace('href="https://www.xcellhost.top/"', 'href="/" target="_top"');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let runtime = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
runtime = runtime.replace(/(['"])([a-z0-9-]+)\.html\1/g, (_, quote, slug) => quote + local(slug) + quote);
runtime = runtime.replace("window.scrollTo({top:cf.getBoundingClientRect().top+scrollY-60,behavior:RED?'auto':'smooth'});", "window.hostingJumpTo('configure');");
const bridge = String.raw`<script>(function(){
 const originalOpen=XH.open;
 XH.open=function(id,options){if(id==='xhCallback'){let topic=options?.topic||'NDPA enquiry';if(/quote|quotation/i.test(topic)){topic+='\n'+Array.from(document.querySelectorAll('#cfRows .crow')).map(row=>Array.from(row.children).map(el=>el.textContent).join(': ')).join('\n')+'\nSubtotal: '+document.getElementById('cfSub').textContent+'\nGST: '+document.getElementById('cfGst').textContent+'\nTotal: '+document.getElementById('cfTot').textContent;}document.dispatchEvent(new CustomEvent('import-callback',{detail:'Nigeria Data Protection Act (NDPA): '+topic}));return;}originalOpen(id,options);};
 const providers={chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search/new?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
 const domains={chatgpt:'chatgpt.com',claude:'claude.ai',perplexity:'perplexity.ai',google:'gemini.google.com',copilot:'copilot.microsoft.com'};
 document.querySelectorAll('.lh-ask').forEach(box=>box.querySelectorAll('[data-ai]').forEach(a=>{const label='Ask '+a.textContent.trim();a.href=providers[a.dataset.ai]+encodeURIComponent(box.dataset.q);a.target='_blank';a.rel='noopener noreferrer';a.title=label;a.setAttribute('aria-label',label);const img=document.createElement('img');img.src='https://www.google.com/s2/favicons?domain='+domains[a.dataset.ai]+'&sz=64';img.alt='';img.width=18;img.height=18;a.replaceChildren(img);}));
 document.addEventListener('click',e=>{const a=e.target.closest('a[href^="/"]');if(a)a.target='_top';},true);
})();</script>`;
const output = '<!doctype html><html lang="en" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Nigeria Data Protection Act (NDPA) | XcellHost</title>' + fonts + styles + '<link rel="stylesheet" href="/assets/styles/nigeria-ndpa-integration.css"></head><body>' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + '<script>' + runtime + '</script></body></html>';
for (const m of output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(m[1]);
fs.writeFileSync(path.join(root, 'public/imported-nigeria-data-protection-act-ndpa.html'), output);
console.log('Imported the complete Nigeria NDPA page, styling and interactive tools.');
