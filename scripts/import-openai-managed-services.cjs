const { replaceReferenceSections } = require('./customer-testimonials.cjs');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) throw new Error('Pass the supplied openai-managed-services.html file.');
const source = fs.readFileSync(input, 'utf8');
let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
function div(html, cls) {
  let start = -1, depth = 0;
  for (const m of html.matchAll(/<div\b[^>]*>|<\/div>/g)) {
    if (start < 0) {
      if (!m[0].match(/class="([^"]+)"/)?.[1].split(/\s+/).includes(cls)) continue;
      start = m.index;
    }
    depth += m[0].startsWith('</') ? -1 : 1;
    if (!depth) return html.slice(start, m.index + m[0].length);
  }
  throw new Error('Missing block: ' + cls);
}
// Keep the supplied product content and interactive tools; the Angular shell
// supplies navigation, the footer, cart and real lead submission.
main = main.replace(/<section\b[^>]*id="(?:watch|contact)"[^>]*>[\s\S]*?<\/section>/g, '');
main = main.replace(div(main, 'crumb'), '').replace(div(main, 'lh-powered'), '');
const ask = div(main, 'lh-ask');
main = main.replace(ask, ask.replace(/Ask AI about[^<]+/, 'Ask AI About OpenAI Services') + '<div class="oa-brand"><span>Powered by <span aria-hidden="true">|</span></span><span class="oa-brand-logo"><img src="/assets/images/platforms/openai.png" alt="" width="26" height="26"><strong>OpenAI</strong></span><span>Managed by XcellHost</span></div>');
main = main.replace(div(main, 'oa-type'), '<div class="oa-highlight">A Policy Bot That Cites The Page It Read</div>');
main = main.replace('class="oa-sub"', 'class="oa-sub product-section-nav"');
main = main.replace(/(<section\b[^>]*id="why"[\s\S]*?)<h2[^>]*>[\s\S]*?<\/h2>/, '$1<h2>Why XcellHost For OpenAI Managed Services</h2>');
const controls = [
  ['Access & Identity', 'Scope user access, service identities and credentials to each application’s requirements.'],
  ['Data Handling', 'Agree the data allowed in prompts and retrieved context, with masking and retention controls appropriate to the workflow.'],
  ['Grounding & Evaluation', 'Test answers against approved content and evaluation cases before rollout and after changes.'],
  ['Agent Permissions', 'Limit tool access and require human approval for sensitive actions.'],
  ['Monitoring & Audit', 'Define the application events to record, who can review them and how incidents are escalated.'],
  ['Deployment Review', 'Confirm model availability, processing location and contractual requirements for the selected deployment route.'],
];
const security = '<section class="sec" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Define the controls around your assistant before it reaches production. XcellHost helps scope identity, data handling, agent permissions, monitoring and operational ownership for your selected OpenAI or Azure OpenAI deployment.</p></div><div class="hosting-reasons">' + controls.map(([h,t]) => '<article><h3>' + h + '</h3><p>' + t + '</p></article>').join('') + '</div></div></section>';
main = main.replace(/(<section\b[^>]*id="why")/, security + '$1');
const feedback = '<section class="sec alt" id="customer-feedback"><div class="wrap"><div class="sh"><h2>What Customers Say</h2><p>Ask for customer references relevant to your knowledge assistants, chat applications or agent workflows.</p></div><button type="button" class="btn btn-orange" data-open="xhCallback" data-topic="OpenAI Managed Services customer references">Request Customer References</button></div></section>';
main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
  const items = [...section.matchAll(/<div class="fq(?: open)?"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0].replace('class="fq open"', 'class="fq"').replace('aria-expanded="true"', 'aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/, '<i aria-hidden="true">+</i>'));
  if (items.length !== 12) throw new Error('Expected 12 supplied FAQ answers.');
  return feedback + '<section class="sec oa-fq" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0,6),items.slice(6)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
});
main = main.replace(/href="#contact"/g, 'href="#" data-open="xhCallback" data-topic="OpenAI Managed Services"').replace(/[ \t]+$/gm, '');
const aliases = { 'xcellhost-serverless-inference':'serverless-inference', 'xcellhost-dedicated-inference':'dedicated-inference', 'xcellhost-model-catalog':'model-catalog', 'xcellhost-managed-sentinel':'managed-microsoft-sentinel' };
main = main.replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, (_,slug) => 'href="/' + (aliases[slug] || slug) + '" target="_top"');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m=>m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_,n) => 'calc(var(--oa-vh,1vh) * ' + n + ')');
const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).filter(l=>!l.includes('canonical')).join('\n');
const css = ['consulting-faq','faq-layout','hosting-tools','section-navigation-flow','openai-managed-services'].map(n=>'<link rel="stylesheet" href="/assets/styles/' + n + '.css">').join('');
fs.writeFileSync(path.join(root, 'public/openai-managed-services-page.html'), replaceReferenceSections('<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>OpenAI Managed Services | XcellHost</title>' + links + styles + css + '</head><body>' + main + '<div id="openAiToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script><script src="/assets/animations/openai-managed-services-page.js"></script><script>if(window.frameElement)parent.postMessage({type:"xh-openai-managed-services-ready"},location.origin);</script></body></html>', path.join(root, 'public/openai-managed-services-page.html')));
const runtimePath = path.join(root, 'public/assets/animations/openai-managed-services-page.js');
const existing = fs.readFileSync(runtimePath, 'utf8');
const runtimeStart = existing.search(/\(function\(\)\{\r?\n  'use strict';\r?\n  var XH=window.XH,\$=XH\.\$,\$\$=XH\.\$\$,R=XH.reduce,FINE=XH.fine,d=document;/);
if (runtimeStart < 0) throw new Error('Missing existing Angular bridge runtime.');
let runtime = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
// The source's demonstration success handler must not replace real submission.
runtime = runtime.replace(/    XH\.onForm\('oa-quote',function\(data,f\)\{[^\n]+\r?\n/, '');
runtime = runtime.replace('var y=innerHeight*.32,k=-1;', 'var y=window.hostingViewportFocus(),k=-1;');
// Keep segmented-control state in sync when package presets or auto-upgrades run.
runtime = runtime.replace("if(pk==='starter'&&uc>1){pk='growth';", "if(pk==='starter'&&uc>1){pk='growth';$id('qPk').dataset.value=pk;");
runtime = runtime.replace("if(pk==='growth'&&uc>3){pk='ent';", "if(pk==='growth'&&uc>3){pk='ent';$id('qPk').dataset.value=pk;");
runtime = runtime.replace("var v=b.getAttribute('data-pk');", "var v=b.getAttribute('data-pk');$id('qPk').dataset.value=v;");
const combined = existing.slice(0, runtimeStart).replaceAll('OpenAI Managed Services Services', 'OpenAI Managed Services') + runtime;
new (require('node:vm').Script)(combined);
fs.writeFileSync(runtimePath, combined);
console.log('Imported OpenAI Managed Services: original demos, tools, quotation form and 12 FAQs.');
