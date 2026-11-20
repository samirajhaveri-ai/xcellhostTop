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
let main = html(nodes.find(n => n.tagName === 'main')).replace('<main', '<main data-network-service="commvault-overview" data-service-title="Commvault" data-customer-testimonials="off"');
main = main.replace('id="cmHero"', 'id="cmHero" data-banner-actions="off"');
for (const n of nodes.filter(n => has(n, 'crumb') || has(n, 'lnl-wrap') || has(n, 'cm-cta'))) main = main.replace(html(n), '');
main = main.replace(/data-xhform="([^"]+)"/g, 'data-import-enquiry="$1"');
const faq = nodes.find(n => n.tagName === 'section' && attr(n, 'id') === 'faq');
const grid = nodes.find(n => has(n, 'faq') && n.sourceCodeLocation.startOffset > faq.sourceCodeLocation.startOffset && n.sourceCodeLocation.endOffset < faq.sourceCodeLocation.endOffset);
const items = grid.childNodes.filter(n => has(n, 'fq')).map(html);
if (!items.length) throw Error('Missing original FAQ answers');
const half = Math.ceil(items.length / 2);
const faqHtml = html(faq).replace(html(grid), '<div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('\n') + '</div>').join('') + '</div>');
const why = `<section class="sec" id="why-xcellhost"><div class="wrap"><div class="sh"><h2>Why XcellHost For Commvault</h2></div><div class="ns-service-grid"><article><h3>Plan Around Your Workloads</h3><p>Build a shortlist for your applications, identities and data, then review the right Commvault package with our team.</p></article><article><h3>Define Recovery Requirements</h3><p>Discuss recovery targets, backup retention, restore testing and operational responsibilities before implementation.</p></article><article><h3>One Deployment Conversation</h3><p>Compare SaaS, software and managed operations, and request a quotation for your selected stack.</p></article></div></div></section>`;
main = main.replace(html(faq), why + faqHtml);
main = main.replace('Commvault certifications, <span class="acc">plus XcellHost&#x27;s own.</span>', 'SECURITY &amp; COMPLIANCE');
const fonts = nodes.filter(n => n.tagName === 'link' && /^https:\/\/fonts\./.test(attr(n, 'href'))).map(html).join('\n');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => `calc(var(--page-vh,1vh) * ${n})`);
const scripts = nodes.filter(n => n.tagName === 'script' && !attr(n, 'type')).map(text);
const core = scripts.find(s => s.includes('XcellHost v2 core runtime'));
let runtime = scripts.at(-1)
  .replace("el3.scrollIntoView({block:'nearest',behavior:R?'auto':'smooth'})", 'window.hostingJumpTo(el3.id)')
  .replace(/function toCat\(\)\{[^\n]+\}/, "function toCat(){window.hostingJumpTo('catalog');}")
  .replace(/function toCard\(k\)\{[^\n]+\}/, "function toCard(k){window.hostingJumpTo(CARD[k].id);}")
  .replace("window.scrollTo({top:el0.getBoundingClientRect().top+scrollY-TOP-bar.getBoundingClientRect().height-14,behavior:'instant'})", 'window.hostingJumpTo(el0.id)')
  .replace(/function place\(\)\{[^\n]+\}/, 'function place(){window.hostingJumpTo(s.el.id);}');
for (const code of [core, runtime]) { if (!code) throw Error('Missing runtime'); new vm.Script(code); }
const css = ['consulting-faq', 'faq-layout', 'network-service-pages', 'commvault-overview'].map(n => `<link rel="stylesheet" href="/assets/styles/${n}.css">`).join('');
fs.writeFileSync(path.join(root, 'public/imported-commvault-overview.html'), `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Commvault Overview | XcellHost</title>${fonts}${styles}${css}</head><body>${main}<script src="/assets/scripts/hosting-tools-viewport.js"></script><script>${core}</script><script src="/assets/scripts/commvault-overview-integration.js"></script><script>${runtime}</script></body></html>`);
console.log(`Imported Commvault with ${items.length} original FAQ answers.`);
