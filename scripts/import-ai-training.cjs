const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
const directory = process.argv[2];
if (!directory) throw Error('Pass the directory containing the three supplied training HTML files.');
const pages = [
  ['integrated-program', 'synapsem-ai-training-integrated-program', 'Integrated AI Training Program'],
  ['medical-doctors', 'ai-training-for-medical-doctors', 'AI Training For Medical Doctors'],
  ['insurance-professionals', 'ai-training-for-insurance-professionals', 'AI Training For Insurance Professionals'],
];
const links = Object.fromEntries(pages.map(([file, route]) => ['ai-training-' + file, route]));
Object.assign(links, {'ai-training-live-online': 'synapsem-ai-training-live-online', 'ai-training-educators': 'ai-training-for-educators', 'xcellhost-iso-42001': 'iso-42001ai-risk'});
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
for (const [key, route, title] of pages) {
  const source = fs.readFileSync(path.join(directory, 'ai-training-' + key + '.html'), 'utf8');
  const nodes = [];
  function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
  walk(parse(source, {sourceCodeLocationInfo: true}));
  const attr = (node, key) => node.attrs?.find(a => a.name === key)?.value || '';
  const has = (node, name) => attr(node, 'class').split(/\s+/).includes(name);
  const html = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
  const mainNode = nodes.find(n => n.tagName === 'main');
  let main = html(mainNode);
  const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
  const items = nodes.filter(n => has(n, 'fq') && n.sourceCodeLocation.startOffset > faq.sourceCodeLocation.startOffset && n.sourceCodeLocation.endOffset < faq.sourceCodeLocation.endOffset).map(n => html(n).replace('class="fq open"', 'class="fq"').replace('aria-expanded="true"', 'aria-expanded="false"'));
  if (items.length < 8) throw Error('Incomplete FAQs: ' + key);
  const half = Math.ceil(items.length / 2);
  const faqHtml = '<section class="sec" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
  const cards = values => '<div class="training-cards">' + values.map(([heading, text]) => '<article><h3>' + heading + '</h3><p>' + text + '</p></article>').join('') + '</div>';
  const security = '<section class="sec alt" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Responsible AI is part of the course and every practical exercise. Use the supplied training material, protect confidential information and review AI output before using it.</p></div>' + cards([
    ['Training Data', key === 'medical-doctors' ? 'Practise on synthetic cases; do not upload real patient records.' : key === 'insurance-professionals' ? 'Work with synthetic policy and claim files rather than policyholder records.' : 'Use sample or synthetic material in labs rather than customer or confidential business data.'],
    ['Human Review', 'Check accuracy, omissions and source material before accepting an AI-generated draft.'],
    ['Approved Tools', 'Use approved accounts and follow your organisation\'s AI and information-security policies.'],
    ['Prompt Privacy', 'Keep personal identifiers and confidential information out of public AI prompts.'],
    ['Source Checking', 'Verify references and claims against the original material; do not rely on generated citations alone.'],
    ['Responsible Use', 'Apply the governance and professional boundaries covered in the course. AI supports human judgement.'],
  ]) + '</div></section>';
  const why = '<section class="sec" id="why-xcellhost"><div class="wrap"><div class="sh"><h2>Why XcellHost For ' + title + '</h2></div>' + cards([
    ['XcellAI Academy', 'Training delivered by XcellHost\'s AI practice in Mumbai.'],
    ['Hands-On Learning', 'Practise course concepts in guided labs with sample material.'],
    ['Workplace Context', key === 'medical-doctors' ? 'Exercises for documentation, reading and communication in medical practice.' : key === 'insurance-professionals' ? 'Exercises for claims, underwriting and customer-service teams.' : 'Build practical AI skills through lessons, labs and a capstone project.'],
    ['Flexible Formats', 'Choose from the delivery formats listed for your course or ask about a private cohort.'],
    ['Clear Pricing', 'Review seat pricing, options and GST in the course configurator before requesting a quote.'],
    ['Responsible AI', 'Data privacy, verification and human oversight are taught alongside practical skills.'],
  ]) + '</div></section>';
  main = main.replace(html(faq), security + why + faqHtml);
  main = main.slice(0, main.indexOf(faqHtml) + faqHtml.length) + '</main>';
  for (const node of nodes.filter(n => has(n, 'crumb'))) main = main.replace(html(node), '');
  const powered = nodes.find(n => has(n, 'lh-powered'));
  if (powered) main = main.replace(html(powered), '');
  const ask = nodes.find(n => has(n, 'lh-ask'));
  main = main.replace(html(ask), html(ask) + '<div class="training-powered"><span>Powered by</span><span aria-hidden="true">|</span><strong>XcellAI Academy</strong></div>');
  main = main.replace('<main', '<main data-customer-testimonials="off"');
  main = main.replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => 'href="/' + (links[slug] || slug) + '" target="_top"');
  // Keep course forms, but let the visitor review and send through the real site enquiry flow.
  main = main.replace(/(<button\b[^>]*type="submit"[^>]*>)[\s\S]*?(<\/button>)/g, '$1Continue To Enquiry &rarr;$2');
  main = main.replace(/(<form\b[^>]*data-xhform[^>]*>)/g, '$1<p class="training-form-note">Review your details in the enquiry form before sending. No request is sent by this step.</p>');
  const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, number) => 'calc(var(--page-vh,1vh) * ' + number + ')');
  const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
  let runtime = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
  runtime = runtime.replace(/(\b\w+)\.scrollIntoView\(\{[^}]*\}\)/g, 'window.hostingJumpTo($1.id)');
  runtime = runtime.replace("scrollTo({top:r.top+scrollY-110,behavior:R?'auto':'smooth'})", 'window.hostingJumpTo(el.id)');
  const bridge = String.raw`<script>(function(){
    const title=${JSON.stringify(title)},route=${JSON.stringify(route)};
    const originalOpen=XH.open;
    XH.open=function(id,options){if(id==='xhCallback'){let topic=options?.topic||'Course enquiry';if(/quote|quotation/i.test(topic)){const configurator=document.getElementById('configure');topic+='\nSeats: '+configurator.querySelector('input[type=number]').value+'\nFormat: '+Array.from(configurator.querySelectorAll('.seg button.on')).map(e=>e.textContent.trim()).join(', ');const extras=Array.from(configurator.querySelectorAll('input[type=checkbox]:checked')).map(e=>e.closest('label')?.textContent.trim()||e.value);if(extras.length)topic+='\nOptions: '+extras.join('; ');topic+='\nSubtotal: '+document.getElementById('cfSub').textContent+'\nGST (18%): '+document.getElementById('cfGst').textContent+'\nTotal: '+document.getElementById('cfTot').textContent;}document.dispatchEvent(new CustomEvent('import-callback',{detail:title+': '+topic}));return;}originalOpen(id,options);};
    const providers={chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search/new?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
    document.querySelectorAll('.lh-ask').forEach(box=>box.querySelectorAll('[data-ai]').forEach(a=>{a.href=providers[a.dataset.ai]+encodeURIComponent(box.dataset.q);a.target='_blank';a.rel='noopener noreferrer';}));
    document.addEventListener('submit',e=>{const form=e.target.closest('form[data-xhform]');if(!form)return;e.preventDefault();e.stopImmediatePropagation();if(!form.reportValidity())return;document.dispatchEvent(new CustomEvent('import-training-enquiry',{detail:Object.fromEntries(new FormData(form))}));},true);
    document.addEventListener('click',e=>{const a=e.target.closest('a[href="#contact"]');if(a){e.preventDefault();XH.open('xhCallback',{topic:'Course enquiry'});}});
    function fit(){const h=document.querySelector('.hero h1');if(!h)return;h.style.setProperty('--training-title-size','34px');const range=document.createRange();range.selectNodeContents(h);const width=range.getBoundingClientRect().width;h.style.setProperty('--training-title-size',Math.min(34,34*(h.clientWidth-2)/Math.max(1,width))+'px');}
    document.fonts.ready.then(fit);window.addEventListener('resize',fit);fit();
  })();</script>`;
  const css = ['consulting-faq', 'faq-layout', 'hosting-tools', 'section-navigation-flow', 'ai-training-integration'].map(name => '<link rel="stylesheet" href="/assets/styles/' + name + '.css">').join('');
  const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | XcellHost</title>' + fonts + styles + css + '</head><body>' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + '<script>' + runtime + '</script></body></html>';
  for (const script of output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(script[1]);
  fs.writeFileSync(path.join(root, 'public/imported-ai-training-' + key + '.html'), output);
  console.log(route + ': imported course content and ' + items.length + ' original FAQs');
}
