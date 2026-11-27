const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const has = (n, c) => attr(n, 'class').split(/\s+/).includes(c);
const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const text = n => n.value || (n.childNodes || []).map(text).join('');
let main = html(nodes.find(n => n.tagName === 'main')).replace('<main>', '<main data-banner-actions="off" data-customer-testimonials="off">');
for (const n of nodes.filter(n => has(n, 'crumb') || has(n, 'pw') || (n.tagName === 'section' && attr(n, 'id') === 'cta'))) main = main.replace(html(n), '');
const ask = nodes.find(n => has(n, 'lh-ask'));
main = main.replace(html(ask), html(ask).replace('Ask AI about S/MIME:', '<span class="ask-label">✦ Ask AI About S/MIME</span>') + '<div class="smime-powered"><span>POWERED BY</span><span aria-hidden="true">|</span><img src="/assets/images/digicert.png" alt="DigiCert" width="104" height="32"></div>');
main = main.replace(/<a([^>]*?)href="#cta"([^>]*)>([\s\S]*?)<\/a>/g, '<button$1type="button" data-callback$2>$3</button>');
const grid = nodes.find(n => has(n, 'faq'));
const items = grid.childNodes.filter(n => has(n, 'q')).map(html);
if (items.length !== 10) throw Error('Expected ten original FAQ answers');
main = main.replace(html(grid), '<div class="faq">' + [items.slice(0, 5), items.slice(5)].map(col => '<div class="hosting-faq-column">' + col.join('\n') + '</div>').join('') + '</div>');
const compliance = `<section class="sec alt" id="security-compliance"><div class="wrap"><div class="sh"><div class="eyebrow">Email Protection</div><h2>SECURITY &amp; COMPLIANCE</h2><p>Protect email content and verify senders with S/MIME. Plan certificate validation, installation and private-key handling alongside your existing email security controls.</p></div><div class="g3">
<article class="card"><h3>Sender Verification</h3><p>Digital signatures link the sender’s email address to a certificate and help recipients check message integrity.</p></article>
<article class="card"><h3>Message Encryption</h3><p>Use the recipient’s certificate to encrypt email content and attachments in compatible mail applications.</p></article>
<article class="card"><h3>Validation Options</h3><p>Choose mailbox validation for Individual certificates or organisation validation for Business certificates.</p></article>
<article class="card"><h3>Private-Key Protection</h3><p>Keep private keys secure when installing certificates or moving them between approved devices.</p></article>
<article class="card"><h3>Certificate Lifecycle</h3><p>Track renewals and reissues, and retain older keys needed to read previously encrypted messages.</p></article>
<article class="card"><h3>Layered Email Security</h3><p>Use S/MIME alongside SPF, DKIM and DMARC for sender verification and domain-level protection.</p></article>
</div></div></section>`;
main = main.replace('<section class="sec" id="faq">', compliance + '<section class="sec" id="faq">');
main = main.replace(/href="https:\/\/xcellhost\.cloud\//g, 'target="_top" href="/');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\./.test(attr(n, 'href'))).map(html).join('\n');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n');
const symbols = nodes.find(n => n.tagName === 'svg' && (n.childNodes || []).some(c => c.tagName === 'defs'));
let runtime = nodes.filter(n => n.tagName === 'script' && !attr(n, 'type')).map(text).find(s => s.includes('/* configurator */'));
runtime = runtime.replace(/\/\* theme \*\/[\s\S]*?(?=\/\* reveal \+ counters \*\/)/, '');
runtime = runtime.slice(0, runtime.indexOf('/* overlays */')) + `
/* Connect to the shared website enquiry and cart. */
$$('[data-callback]').forEach(function(b){b.addEventListener('click',function(e){e.preventDefault();document.dispatchEvent(new CustomEvent('import-callback',{detail:'S/MIME Certificates: Certificate Enquiry'}))})});
$('#addCart').onclick=function(){document.dispatchEvent(new CustomEvent('import-cart',{detail:{name:cur.name,sub:cur.term+'-year term',price:cur.sub/cur.qty,qty:cur.qty}}))};
document.addEventListener('click',function(e){var a=e.target.closest('a[href^="#"]');if(!a)return;var id=a.getAttribute('href').slice(1);if(id&&document.getElementById(id)){e.preventDefault();window.hostingJumpTo(id)}});
})();`;
new vm.Script(runtime);
const toast = nodes.find(n => attr(n, 'id') === 'toast');
fs.writeFileSync(path.join(root, 'public/imported-smime-certificates.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>S/MIME Certificates | XcellHost</title>${fonts}${styles}<link rel="stylesheet" href="/assets/styles/faq-layout.css"><link rel="stylesheet" href="/assets/styles/smime-certificates.css"></head><body>${html(symbols)}${main}${html(toast)}<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>${runtime}</script></body></html>`);
console.log('Imported S/MIME Certificates with ten original FAQ answers, email demo and pricing calculator.');
