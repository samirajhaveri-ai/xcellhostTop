const { replaceReferenceSections } = require('./customer-testimonials.cjs');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
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
  throw new Error('Missing ' + cls);
}
const { aliases, localLinks } = require('./sectigo-import-config.cjs');
let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
main = main.replace(div(main, 'crumb'), '');
const powered = div(main, 'lh-powered');
main = main.replace(powered, '').replace(div(main, 'lh-ask'), block => block + '<div class="hosting-powered"><span>Powered by</span><img src="/assets/images/sectigo.svg" alt="Sectigo" width="140" height="38"></div>');
const type = div(main, 'lh-type');
main = main.replace(type, '<div class="sg-highlight">' + JSON.parse(type.match(/data-words='([^']+)'/)[1])[0] + '</div>');
const providers = {chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
main = main.replace(/<a data-ai="([^"]+)" href="#">/g, (_, k) => '<a data-ai="' + k + '" href="' + (providers[k] + encodeURIComponent('Compare Sectigo SSL certificates, validation, coverage and support from XcellHost.')).replaceAll('&', '&amp;') + '" target="_blank" rel="noopener noreferrer">');
const controls = [
  ['Domain Validation', 'Complete the required domain-control checks before a certificate is issued.'],
  ['Organisation Identity', 'Choose OV or EV when your certificate needs a verified organisation identity.'],
  ['Private-Key Protection', 'Generate and store private keys securely, with access restricted to authorised administrators.'],
  ['Secure Configuration', 'Install the complete certificate chain and review supported TLS settings on your server.'],
  ['Renewal Planning', 'Track expiry, plan reissues and use compatible automation for the selected certificate.'],
  ['Deployment Checks', 'Check hostname coverage and certificate-chain behaviour after installation.'],
];
const security = '<section class="sec" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Match certificate validation and domain coverage to your website. XcellHost helps coordinate validation, installation and renewal, with the responsibilities and deployment scope agreed for your environment.</p></div><div class="hosting-reasons">' + controls.map(([h,t]) => '<article><h3>' + h + '</h3><p>' + t + '</p></article>').join('') + '</div></div></section>';
main = main.replace(/(<section class="sec" id="why">)/, security + '$1');
main = main.replace(/(<section class="sec" id="why">[\s\S]*?)<h2>[\s\S]*?<\/h2>/, '$1<h2>Why XcellHost For Sectigo SSL Certificates</h2>');
const feedback = '<section class="sec" id="customer-feedback"><div class="wrap"><div class="sh"><h2>What Customers Say</h2><p>Ask our team for customer references relevant to your certificate validation, installation and renewal requirements.</p></div><button type="button" class="btn btn-orange" data-open="xhCallback" data-topic="Sectigo SSL Certificates: Customer references">Request Customer References</button></div></section>';
main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
  const items = [...section.matchAll(/<div class="fq(?: open)?"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0].replace('class="fq open"', 'class="fq"').replace('aria-expanded="true"', 'aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/, '<i aria-hidden="true">+</i>'));
  if (items.length < 6) throw new Error('FAQ extraction failed');
  const half = Math.ceil(items.length / 2);
  return feedback + '<section class="sec" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0,half),items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
});
let runtime = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
runtime = runtime.replace("$id('sgMLink').href=slug+'.html';", "$id('sgMLink').href=window.sectigoProductUrl(slug);$id('sgMLink').target='_top';")
  .replace("$id('fdGo').href=s+'.html';", "$id('fdGo').href=window.sectigoProductUrl(s);$id('fdGo').target='_top';")
  .replace('<span class="sgt" aria-hidden="true">S</span><b>Sectigo</b>', '<img class="sg-brand-logo" src="/assets/images/sectigo.svg" alt="Sectigo" width="112" height="30">');
runtime = runtime.replace(/XH\.onForm\('sg-renew',[\s\S]*?return false;\}\);/, `XH.onForm('sg-renew',function(data){
    document.querySelector('[data-sgclose]').click();
    XH.open('xhCallback',{topic:'Sectigo SSL Certificates: Renewal request\\nProduct: '+data.product+'\\nDomain: '+data.domain+'\\nOrder: '+data.order+'\\nEmail: '+data.email});
    return false;
  });`);
const bridge = `<script>
window.sectigoProductUrl=function(slug){var aliases=${JSON.stringify(aliases)};return '/'+(aliases[slug]||slug);};
(function(){
  document.addEventListener('submit',function(e){var form=e.target.closest('form[data-xhform]');if(!form||!/renew/.test(form.dataset.xhform))return;
    e.preventDefault();e.stopImmediatePropagation();if(!form.reportValidity())return;var data=Object.fromEntries(new FormData(form));
    document.querySelector('[data-sgclose]').click();
    XH.open('xhCallback',{topic:'Sectigo SSL Certificates: Renewal request\\n'+Object.keys(data).map(function(k){return k+': '+data[k];}).join('\\n')});
  },true);
  var modal=document.getElementById('sgMod'),outer=window.frameElement?parent:window;
  function position(){if(!modal.classList.contains('open'))return;var top=window.frameElement?-frameElement.getBoundingClientRect().top:outer.scrollY;modal.style.top=Math.max(0,top+100)+'px';modal.style.height=Math.max(280,outer.innerHeight-116)+'px';}
  new MutationObserver(position).observe(modal,{attributes:true,attributeFilter:['class']});
  outer.addEventListener('scroll',position,{passive:true});outer.addEventListener('resize',position);
})();
</script>`;
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(s => !s.includes('canonical')).join('\n');
const css = ['consulting-faq','faq-layout','hosting-tools','sectigo-catalogue-integration'].map(n => '<link rel="stylesheet" href="/assets/styles/' + n + '.css">').join('');
const result = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Sectigo SSL Certificates | XcellHost</title>' + fonts + styles + css + '</head><body>' + localLinks(main) + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + '<script>' + localLinks(runtime) + '</script></body></html>';
for (const [i,s] of [...result.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].entries()) new(require('node:vm').Script)(s[1], {filename:'sectigo-'+i});
fs.writeFileSync(path.join(root,'public/imported-sectigo-ssl-certificates.html'),replaceReferenceSections(result, path.join(root,'public/imported-sectigo-ssl-certificates.html')));
console.log('Imported Sectigo catalogue, interactive tools and original FAQ answers.');
