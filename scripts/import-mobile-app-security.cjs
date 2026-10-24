const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw new Error('Pass the supplied mobile-app-security.html file.');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(node) { nodes.push(node); (node.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (node, name) => node.attrs?.find(a => a.name === name)?.value || '';
const hasClass = (node, name) => attr(node, 'class').split(/\s+/).includes(name);
const slice = node => source.slice(node.sourceCodeLocation.startOffset, node.sourceCodeLocation.endOffset);
const mainNode = nodes.find(n => n.tagName === 'main');
if (!mainNode) throw new Error('Missing supplied main content.');
let main = slice(mainNode);
for (const node of nodes.filter(n => hasClass(n, 'crumb') || (n.tagName === 'section' && ['whyxh', 'contact', 'built', 'related'].includes(attr(n, 'id'))))) {
  main = main.replace(slice(node), '');
}
const powered = nodes.find(n => hasClass(n, 'ma-pw'));
if (!powered) throw new Error('Missing mobile platform branding.');
const askAi = nodes.find(n => hasClass(n, 'lh-ask'));
if (!askAi) throw new Error('Missing mobile AI links.');
main = main.replace(slice(askAi), '');
main = main.replace(slice(powered), slice(askAi) + '<div class="mobile-powered" data-in="5"><span>Powered by</span><span aria-hidden="true">|</span><img src="/assets/images/vendor-partners/75-protectt-ai.png" alt="Protectt.ai" width="140" height="40"><strong>Protectt.ai</strong></div>');
main = main.replace('class="ma-sub"', 'class="ma-sub product-section-nav"');

const controls = [
  ['App Integrity', 'Review runtime integrity checks, obfuscation and policies for tampered or repackaged Android and iOS builds.'],
  ['Device & SIM Binding', 'Define registration, device-change and SIM-change checks around your customer authentication flows.'],
  ['Mobile API Protection', 'Connect app-attestation signals to your API controls so the back end can evaluate the calling app.'],
  ['Access & Audit', 'Agree administrator roles, MFA, policy-change approvals and the audit evidence your team needs.'],
  ['Telemetry & Privacy', 'Confirm collected signals, retention, hosting location and access permissions before connecting production users.'],
  ['Release Validation', 'Test security policies on supported devices and app versions, with a staged rollout and recovery plan.'],
];
const reasons = [
  ['Since 1999', 'Experienced cloud and security support for Indian businesses.'],
  ['Guided SDK Integration', 'Work with your developers to integrate the platform into Android and iOS release workflows.'],
  ['Policy Tuning', 'Balance fraud controls, compatibility and the experience of legitimate customers.'],
  ['24×7 Support', 'Coordinate monitoring and escalation with engineers in English and Hindi.'],
  ['Release Support', 'Plan testing, staged releases and policy reviews as your app changes.'],
  ['One Partner', 'Bring application security, cloud infrastructure and operational support together.'],
];
const cards = rows => '<div class="hosting-reasons">' + rows.map(([h, p]) => `<article><h3>${h}</h3><p>${p}</p></article>`).join('') + '</div>';
const closing = '<section class="sec mobile-extra" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Set the controls for your mobile application before onboarding. XcellHost helps your team scope SDK integration, security policies, access and audit requirements. Coverage depends on the selected platform modules and the agreed service scope.</p></div>' + cards(controls) + '<p class="mobile-certification">XcellHost is ISO 27001 and ISO 20000-1 certified · 24×7 NOC and SOC · Confirm data residency and regulatory requirements during scoping.</p></div></section>' +
  '<section class="sec ma-tint mobile-extra" id="whyxh"><div class="wrap"><div class="sh"><h2>Why XcellHost For Mobile App Security</h2></div>' + cards(reasons) + '</div></section>';
const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
if (!faq) throw new Error('Missing supplied FAQs.');
const items = nodes.filter(n => hasClass(n, 'fq') && n.sourceCodeLocation.startOffset > faq.sourceCodeLocation.startOffset && n.sourceCodeLocation.endOffset < faq.sourceCodeLocation.endOffset).map(slice);
if (items.length < 8) throw new Error('Incomplete FAQ extraction.');
const split = Math.ceil(items.length / 2);
main = main.replace(slice(faq), closing + '<section class="sec ma-tint" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0, split), items.slice(split)].map(col => '<div class="hosting-faq-column">' + col.map(item => item.replace('class="fq open"', 'class="fq"').replace('aria-expanded="true"', 'aria-expanded="false"')).join('') + '</div>').join('') + '</div></div></section>');
if (!main.includes('hosting-faq-column') || !main.includes('id="security"')) throw new Error('FAQ integration failed.');
main = main.replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => `href="/${slug}" target="_top"`);
main = main.replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/');

const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\.(googleapis|gstatic)\.com/.test(attr(n, 'href'))).map(slice).join('\n');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let runtime = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
runtime = runtime.replace("if(t)t.scrollIntoView({behavior:R?'auto':'smooth',block:'center'});", "if(t)window.hostingJumpTo('configure');");
const bridge = `<script>(function(){
  var open=XH.open;
  XH.open=function(id,opts){
    if(id==='xhCallback'){
      var topic=opts&&opts.topic||'Mobile App Security';
      if(/quotation/i.test(topic)){var summary=document.getElementById('zNote');if(summary)topic+=': '+summary.textContent;}
      document.dispatchEvent(new CustomEvent('import-callback',{detail:'Mobile App Security: '+topic}));return;
    }
    open(id,opts);
  };
  XH.toast=function(message){var el=document.getElementById('mobileSecurityToast');el.textContent=message;el.hidden=false;clearTimeout(window.mobileSecurityToastTimer);window.mobileSecurityToastTimer=setTimeout(function(){el.hidden=true;},3500);};
  var providers={chatgpt:'https://chatgpt.com/?q=',perplexity:'https://www.perplexity.ai/search/new?q=',claude:'https://claude.ai/new?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
  document.querySelectorAll('[data-ai]').forEach(function(a){if(!providers[a.dataset.ai])return;a.href=providers[a.dataset.ai]+encodeURIComponent('Explain Mobile App Security from XcellHost: Android and iOS runtime protection, device and SIM binding, mobile API security, SDK integration and managed support. What should a business confirm before deployment?');a.target='_blank';a.rel='noopener noreferrer';});
})();</script>`;
const css = ['consulting-faq', 'faq-layout', 'hosting-tools', 'section-navigation-flow', 'mobile-app-security-integration'].map(n => `<link rel="stylesheet" href="/assets/styles/${n}.css">`).join('');
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Mobile App Security | XcellHost</title>' + fonts + styles + css + '</head><body>' + main + '<div id="mobileSecurityToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + '<script>' + runtime + '</script></body></html>';
for (const [index, match] of [...output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].entries()) new vm.Script(match[1], { filename: 'mobile-app-security-' + index });
fs.writeFileSync(path.join(root, 'public/imported-mobile-app-security.html'), output);
console.log(`Imported Mobile App Security with ${items.length} original FAQs and the supplied demos, risk quiz and plan calculator.`);
