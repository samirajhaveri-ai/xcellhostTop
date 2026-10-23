const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw new Error('Pass the supplied Microsoft Defender HTML file.');
const source = fs.readFileSync(process.argv[2], 'utf8');
let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0];
if (!main) throw new Error('The supplied document has no main content.');
function div(html, cls) {
  let start = -1, depth = 0;
  for (const m of html.matchAll(/<div\b[^>]*>|<\/div>/g)) {
    if (start < 0) { if (!m[0].match(/class="([^"]+)"/)?.[1].split(/\s+/).includes(cls)) continue; start = m.index; }
    depth += m[0].startsWith('</') ? -1 : 1;
    if (!depth) return html.slice(start, m.index + m[0].length);
  }
  throw new Error('Missing ' + cls);
}
main = main.replace(div(main, 'crumb'), '');
main = main.replace(/<!-- LOGO SLOT:[\s\S]*?--><span class="df-mt"[^>]*>M<\/span>Microsoft Defender/,
  '<img class="defender-logo" src="/assets/images/vendor-partners/45-microsoft-defender-for-endpoint.png" width="160" height="55" alt="Microsoft Defender">');
main = main.replace('class="df-sub"', 'class="df-sub product-section-nav"');
const aliases = {
  'xcellhost-entra-id-p2': 'microsoft-entra-id-p2', 'xcellhost-entra-id-p1': 'microsoft-entra-id-p1',
  'xcellhost-entra-suite': 'microsoft-entra-suite', 'xcellhost-managed-sentinel': 'managed-microsoft-sentinel',
  'mxdr-for-microsoft': 'managed-microsoft-xdr', 'microsoft-sentinel-implementation': 'managed-microsoft-sentinel',
  'microsoft-security-consultancy': 'microsoft-security-posture-management', 'microsoft-365': 'microsoft-365-enterprise',
};
main = main.replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => 'href="/' + (aliases[slug] || slug) + '" target="_top"');
main = main.replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/');

const controls = [
  ['Access Governance', 'Agree named administrator accounts, least-privilege roles and MFA requirements for your Microsoft tenant.'],
  ['Endpoint Protection', 'Review antivirus, attack surface reduction and tamper-protection policies during onboarding.'],
  ['Response Actions', 'Agree device-isolation authority, escalation contacts and the actions covered by the managed service.'],
  ['Audit Evidence', 'Review incident history, response activity and reporting requirements with your security team.'],
  ['Data Location & Retention', 'Confirm the selected Microsoft service’s data location and retention terms against your organisation’s requirements.'],
  ['Deployment Scope', 'Confirm licensed users, supported devices, server add-ons and compatibility with existing endpoint software.'],
];
const security = '<section class="sec defender-extra" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Set the security and operational controls for your Microsoft Defender deployment before onboarding. XcellHost helps your team agree access, endpoint policies, incident handling and the evidence needed for internal reviews. Features and coverage depend on the Microsoft licences and managed-service scope selected.</p></div><div class="hosting-reasons">' + controls.map(([h,p]) => '<article><h3>'+h+'</h3><p>'+p+'</p></article>').join('') + '</div><p class="defender-certification">XcellHost is ISO 27001 and ISO 20000-1 certified · 24×7 NOC and SOC · Confirm data residency and regulatory requirements during scoping.</p></div></section>';
const reasons = [
  ['Since 1999', '27 years supporting production IT and cloud services for Indian businesses.'],
  ['Guided Deployment', 'Plan device onboarding, policy testing and a phased move from your existing protection.'],
  ['Licence Planning', 'Choose the Defender products and server add-ons that match your environment.'],
  ['24×7 Support', 'Coordinate incident escalation and response with engineers in English and Hindi.'],
  ['Policy Tuning', 'Review alerts and attack surface rules around the applications your team uses.'],
  ['One Partner', 'Bring Microsoft licensing, deployment, security operations and support together.'],
];
const why = '<section class="sec alt defender-extra" id="why"><div class="wrap"><div class="sh"><h2>Why XcellHost For Microsoft Defender</h2></div><div class="hosting-reasons">' + reasons.map(([h,p]) => '<article><h3>'+h+'</h3><p>'+p+'</p></article>').join('') + '</div></div></section>';
const quotes = [
  ['AM','Aakash Mehta','IT Manager, Manufacturing Company','We have much better visibility across our employee devices now. Suspicious activity is easier to spot, and our team can respond quickly when something unusual occurs.'],
  ['SK','Sneha Kulkarni','Head of IT, Logistics Company','Managing security across multiple endpoints has become much simpler. Centralized monitoring saves our team time, while clear alerts help us focus on important threats.'],
  ['RA','Rohit Agarwal','Operations Director, Financial Services','The behavioral approach gives us more confidence than relying on traditional antivirus alone. We can identify unusual activity earlier and take action before it affects our operations.'],
];
const reviews = '<section class="sec defender-extra" id="customer-feedback"><div class="wrap"><div class="sh"><h2>What Customers Say</h2></div><div class="defender-reviews">' + quotes.map(([i,n,r,q]) => '<figure><div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>'+q+'</blockquote><figcaption><span class="review-avatar" aria-hidden="true">'+i+'</span><span><strong>'+n+'</strong><small>'+r+'</small></span></figcaption></figure>').join('') + '</div></div></section>';
main = main.replace(/<section\b[^>]*id="why"[^>]*>[\s\S]*?<\/section>/, '');
main = main.replace(/<section\b[^>]*id="faq"[^>]*>[\s\S]*?<\/section>/, section => {
  const items = [...section.matchAll(/<div class="fq(?: open)?"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0].replace('class="fq open"','class="fq"').replace('aria-expanded="true"','aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/,'<i aria-hidden="true">+</i>'));
  if (items.length < 8) throw new Error('FAQ extraction is incomplete.');
  const split = Math.ceil(items.length / 2);
  return security + why + reviews + '<section class="sec df-fq" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0,split),items.slice(split)].map(col => '<div class="hosting-faq-column">'+col.join('')+'</div>').join('') + '</div></div></section>';
});
main = main.replace(/(<div class="lcta rv">)/, '$1<img class="defender-support-art" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost customer support" width="180" height="180">');
const core = fs.readFileSync(path.join(root,'public/imported-digicert-standard-ssl.html'),'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let runtime = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
runtime = runtime.replace("scrollTo({top:cf.getBoundingClientRect().top+scrollY-110,behavior:R?'auto':'smooth'})", "window.hostingJumpTo('configure')");
const bridge = `<script>
(function(){
  var open=XH.open;
  XH.open=function(id,opts){
    if(id==='xhCallback' && /free trial/i.test(opts&&opts.topic||'')) {document.dispatchEvent(new CustomEvent('import-trial',{detail:'Microsoft Defender'}));return;}
    if(id==='xhCallback' && document.getElementById('cQuote')===document.activeElement) {
      opts={topic:'Microsoft Defender: '+document.getElementById('cName').textContent+'\\n'+document.getElementById('cList').innerText+'\\nTotal including GST: '+document.getElementById('cTot').textContent};
    }
    open(id,opts);
  };
  XH.toast=function(message){var toast=document.getElementById('defenderToast');toast.textContent=message;toast.hidden=false;clearTimeout(window.defenderToastTimer);window.defenderToastTimer=setTimeout(function(){toast.hidden=true;},3500);};
  var providers={chatgpt:'https://chatgpt.com/?q=',perplexity:'https://www.perplexity.ai/search/new?q=',claude:'https://claude.ai/new?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
  document.querySelectorAll('[data-ai]').forEach(function(a){a.href=providers[a.dataset.ai]+encodeURIComponent('Explain Microsoft Defender from XcellHost: endpoint protection, Defender XDR, licensing options, deployment and managed support.');a.target='_blank';a.rel='noopener noreferrer';});
})();</script>`;
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m=>m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g,(_,n)=>'calc(var(--page-vh,1vh) * '+n+')');
const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).filter(l=>!l.includes('canonical')).join('\n');
const css = ['consulting-faq','faq-layout','hosting-tools','section-navigation-flow','microsoft-defender-integration'].map(n=>'<link rel="stylesheet" href="/assets/styles/'+n+'.css">').join('');
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Microsoft Defender | XcellHost</title>'+links+styles+css+'</head><body>'+main+'<div id="defenderToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script>'+core+bridge+'<script>'+runtime+'</script></body></html>';
for (const [i,m] of [...output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].entries()) new (require('node:vm').Script)(m[1], {filename:'defender-'+i});
fs.writeFileSync(path.join(root,'public/imported-microsoft-defender.html'),output);
console.log('Imported Microsoft Defender with original product interactions, integrated links and restyled FAQ.');
