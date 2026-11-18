const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the B2B Data Enrichment HTML file.');
const source = fs.readFileSync(process.argv[2], 'utf8');
const nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const has = (n, c) => attr(n, 'class').split(/\s+/).includes(c);
const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const text = n => n.value || (n.childNodes || []).map(text).join('');
const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
if (!faq) throw Error('Missing source FAQ');
let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-customer-testimonials="off"');
main = main.replace('id="deHero"', 'id="deHero" data-banner-actions="off"');
for (const n of nodes.filter(n => has(n, 'crumb') || (n.tagName === 'section' && (attr(n, 'id') === 'contact' || has(n, 'lnl-wrap'))))) main = main.replace(html(n), '');
const grid = nodes.find(n => has(n, 'faq') && n.sourceCodeLocation.startOffset > faq.sourceCodeLocation.startOffset && n.sourceCodeLocation.endOffset < faq.sourceCodeLocation.endOffset);
const items = grid.childNodes.filter(n => has(n, 'fq')).map(html);
if (!items.length) throw Error('Missing source FAQ answers');
const half = Math.ceil(items.length / 2);
const faqHtml = html(faq).replace(html(grid), '<div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('\n') + '</div>').join('') + '</div>');
const why = '<section class="sec" id="why-xcellhost"><div class="wrap"><div class="sh"><h2>Why XcellHost For B2B Data Enrichment</h2></div><div class="de-service-grid"><article><h3>Plan Your Credits</h3><p>Estimate email and phone reveal volumes and compare plans before choosing your subscription.</p></article><article><h3>Connect Your Workflow</h3><p>Discuss CRM field mapping, API integration and team onboarding with our team.</p></article><article><h3>Review Responsible Use</h3><p>Plan opt-out handling, retention and access controls alongside your enrichment workflow.</p></article></div></div></section>';
main = main.replace(html(faq), why + faqHtml);
main = main.replace('<span class="eyebrow">Compliance</span>', '<span class="eyebrow">SECURITY &amp; COMPLIANCE</span>');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\./.test(attr(n, 'href'))).map(html).join('\n');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => `calc(var(--page-vh,1vh) * ${n})`);
const scripts = nodes.filter(n => n.tagName === 'script' && !attr(n, 'type')).map(text);
const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
let runtime = scripts.at(-1);
// Enquiries continue into the site's real enquiry flow; do not claim a local form was sent.
const handlerStart = runtime.indexOf("  XH.onForm('de-enq'");
if (handlerStart < 0) throw Error('Source enquiry handler changed');
runtime = runtime.slice(0, handlerStart) + `  (function(){const f=d.getElementById('deEnqF');if(!f)return;f.addEventListener('submit',function(e){e.preventDefault();if(!f.reportValidity())return;document.dispatchEvent(new CustomEvent('import-training-enquiry',{detail:Object.fromEntries(new FormData(f).entries())}));});})();\n})();`;
main = main.replace('data-xhform="de-enq"', '').replace(/data-done="[^"]*"/g, '');
main = main.replace(/(<button[^>]*type="submit"[^>]*>)([\s\S]*?)(<\/button>)/, '$1Review Enquiry &rarr;$3');

for (const code of [core, runtime]) { if (!code) throw Error('Missing source runtime'); new vm.Script(code); }
const css = ['consulting-faq', 'faq-layout', 'b2b-data-enrichment'].map(n => `<link rel="stylesheet" href="/assets/styles/${n}.css">`).join('');
fs.writeFileSync(path.join(root, 'public/imported-b2b-data-enrichment.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>B2B Data Enrichment | XcellHost</title>${fonts}${styles}${css}</head><body>${main}<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>${core}</script><script src="/assets/scripts/b2b-data-enrichment-integration.js"></script><script>${runtime}</script></body></html>`);
console.log(`Imported B2B Data Enrichment: ${items.length} original FAQs and original pricing tools.`);
