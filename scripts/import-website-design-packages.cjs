const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the Website Design Packages HTML file.');
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
main = main.replace('id="wdHero"', 'id="wdHero" data-banner-actions="off"');
const powered = nodes.find(n => has(n, 'wd-pw'));
const ask = nodes.find(n => has(n, 'lh-ask'));
main = main.replace(html(powered), '').replace(html(ask), html(ask) + html(powered));
for (const n of nodes.filter(n => has(n, 'crumb') || (n.tagName === 'section' && (attr(n, 'id') === 'contact' || has(n, 'lnl-wrap'))))) main = main.replace(html(n), '');
const grid = nodes.find(n => has(n, 'faq') && n.sourceCodeLocation.startOffset > faq.sourceCodeLocation.startOffset && n.sourceCodeLocation.endOffset < faq.sourceCodeLocation.endOffset);
const items = grid.childNodes.filter(n => has(n, 'fq')).map(html);
if (!items.length) throw Error('Missing source FAQ answers');
const half = Math.ceil(items.length / 2);
const faqHtml = html(faq).replace(html(grid), '<div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('\n') + '</div>').join('') + '</div>');
const security = `<section class="sec alt" id="security-compliance"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Include security and privacy requirements in the website scope, from enquiry forms to the handover of administrator access.</p></div><div class="wd-service-grid"><article><h3>Secure Access</h3><p>Plan HTTPS, administrator roles and access handover for the chosen platform.</p></article><article><h3>Privacy And Forms</h3><p>Agree what data forms collect, who receives it and which consent and privacy notices are needed.</p></article><article><h3>Maintenance And Recovery</h3><p>Confirm hosting, backup, update and restoration responsibilities in the selected hosting and maintenance scope.</p></article></div></div></section>`;
const why = `<section class="sec" id="why-xcellhost"><div class="wrap"><div class="sh"><h2>Why XcellHost For Website Design</h2></div><div class="wd-service-grid"><article><h3>Clear Scope</h3><p>Choose from five packages and confirm your sitemap, features and written quote before the build.</p></article><article><h3>One Team</h3><p>Coordinate design, development and optional hosting and maintenance through XcellHost.</p></article><article><h3>Room To Grow</h3><p>Plan extra pages, content, integrations and an online store around your business requirements.</p></article></div></div></section>`;
main = main.replace(html(faq), security + why + faqHtml);
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\./.test(attr(n, 'href'))).map(html).join('\n');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => `calc(var(--page-vh,1vh) * ${n})`);
const scripts = nodes.filter(n => n.tagName === 'script' && !attr(n, 'type')).map(text);
const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
let runtime = scripts.at(-1);
// Enquiries continue into the site's real enquiry flow; do not claim a local form was sent.
const formStart = runtime.indexOf("(function(){if(!(window.XH&&XH.onForm))return;");
if (formStart < 0) throw Error('Source enquiry handler changed');
runtime = runtime.slice(0, formStart) + `
(function(){const f=d.getElementById('wdForm');if(!f)return;
f.removeAttribute('data-xhform');
f.addEventListener('submit',function(e){e.preventDefault();if(!f.reportValidity())return;
document.dispatchEvent(new CustomEvent('import-training-enquiry',{detail:Object.fromEntries(new FormData(f).entries())}));});
})();
})();`;
runtime = runtime.replace(/(t2|t)\.scrollIntoView\(\{[^}]*\}\);/g, 'window.hostingJumpTo($1.id);');
// Remove the attribute before the core installs its generic form handler.
main = main.replace('data-xhform="wd-enquiry"', '');
main = main.replace(/(<button[^>]*type="submit"[^>]*>)([\s\S]*?)(<\/button>)/, '$1Review Enquiry →$3');
for (const code of [core, runtime]) { if (!code) throw Error('Missing source runtime'); new vm.Script(code); }
const css = ['consulting-faq', 'faq-layout', 'website-design-packages'].map(n => `<link rel="stylesheet" href="/assets/styles/${n}.css">`).join('');
fs.writeFileSync(path.join(root, 'public/imported-website-design-packages.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Website Design Packages | XcellHost</title>${fonts}${styles}${css}</head><body>${main}<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>${core}</script><script src="/assets/scripts/website-design-packages-integration.js"></script><script>${runtime}</script></body></html>`);
console.log(`Imported Website Design Packages: ${items.length} original FAQs and original pricing tools.`);
