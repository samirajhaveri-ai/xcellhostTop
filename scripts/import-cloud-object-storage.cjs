const fs = require('node:fs'), path = require('node:path'), vm = require('node:vm'), { parse } = require('parse5');
const root = path.resolve(__dirname, '..');
if (!process.argv[2]) throw Error('Pass the supplied Cloud Object Storage HTML file.');
const source = fs.readFileSync(process.argv[2], 'utf8'), nodes = [];
function walk(n) { nodes.push(n); (n.childNodes || []).forEach(walk); }
walk(parse(source, { sourceCodeLocationInfo: true }));
const attr = (n, k) => n.attrs?.find(a => a.name === k)?.value || '';
const has = (n, c) => attr(n, 'class').split(/\s+/).includes(c);
const html = n => source.slice(n.sourceCodeLocation.startOffset, n.sourceCodeLocation.endOffset);
const section = id => nodes.find(n => n.tagName === 'section' && attr(n, 'id') === id);
let main = html(nodes.find(n => n.tagName === 'main'));
for (const n of nodes.filter(n => has(n, 'crumb'))) main = main.replace(html(n), '');
const faq = section('faq');
const items = nodes.filter(n => has(n, 'fq') && n.sourceCodeLocation.startOffset > faq.sourceCodeLocation.startOffset && n.sourceCodeLocation.endOffset < faq.sourceCodeLocation.endOffset).map(n => html(n).replace('class="fq open"', 'class="fq"').replace('aria-expanded="true"', 'aria-expanded="false"'));
if (items.length !== 12) throw Error('Expected all 12 original FAQs');
const cards = entries => '<div class="cos-support-grid">' + entries.map(([title, text]) => '<article><h3>' + title + '</h3><p>' + text + '</p></article>').join('') + '</div>';
const security = '<section class="sec alt" id="security"><div class="wrap"><h2>SECURITY &amp; COMPLIANCE</h2><p class="sub">Protect object data with encryption, scoped access and retention controls. Choose a storage class and retention policy that fit your backup, archive and application requirements.</p>' + cards([
  ['Encryption', 'AES-256 at rest and TLS 1.3 in transit.'],
  ['Access Controls', 'Use scoped access keys and bucket policies for each application.'],
  ['Object Lock', 'Plus variants support governance and compliance retention modes.'],
  ['Data Residency', 'Mumbai buckets keep your data in India; replication depends on the selected plan.'],
  ['Versioning', 'Retain object versions to help recover from accidental changes.'],
  ['Retention Planning', 'Configure lifecycle and lock periods to match your records policy.']
]) + '</div></section>';
const why = '<section class="sec" id="why"><div class="wrap"><h2>Why XcellHost For Cloud Object Storage</h2>' + cards([
  ['India-Based Storage', 'Connect your tools to an S3-compatible Mumbai endpoint.'],
  ['INR Billing', 'Plan storage costs in rupees with a GST invoice.'],
  ['Migration Assistance', 'Move existing buckets with checksum verification and engineer support.'],
  ['Flexible Storage Classes', 'Choose Standard, Replicated or Published storage, with Plus options for Object Lock.'],
  ['24×7 Support', 'Get help with access, backup tools and storage configuration.'],
  ['Try Your Workload', 'Test your application or backup tool with a 7-day trial bucket.']
]) + '</div></section>';
const faqHtml = '<section class="sec alt" id="faq"><div class="wrap"><h2>Frequently Asked Questions</h2><div class="faq">' + [items.slice(0, 6), items.slice(6)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
main = main.replace(html(faq), security + why + faqHtml);
main = main.slice(0, main.indexOf(faqHtml) + faqHtml.length) + '</main>';
// Product-specific quotes are supplied separately; do not substitute unrelated reviews.
main = main.replace('<main', '<main data-customer-testimonials="off"');
const powered = nodes.find(n => has(n, 'lh-powered')), ask = nodes.find(n => has(n, 'lh-ask'));
if (powered) main = main.replace(html(powered), '');
main = main.replace(html(ask), html(ask) + '<div class="cos-powered"><span>Powered By</span><span aria-hidden="true">|</span><strong>XcellHost Cloud</strong></div>');
const routes = { 'xcellhost-acronis-direct-cloud-backup': 'acronis-direct-cloud-backup', 'commvault-services': 'commvault-overview', 'veeam-services': 'vendor-partners/veeam' };
main = main.replace(/href="(?:https:\/\/(?:www\.)?xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, (_, slug) => 'href="/' + (routes[slug] || slug) + '" target="_top"');
const styles = nodes.filter(n => n.tagName === 'style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = nodes.filter(n => n.tagName === 'link' && /fonts\.(googleapis|gstatic)/.test(attr(n, 'href'))).map(html).join('\n');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let runtime = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
runtime = runtime.replace(/(\b\w+)\.scrollIntoView\(\{[^}]*\}\)/g, 'window.hostingJumpTo($1.id)');
runtime = runtime.replace(/'([a-z0-9-]+)\.html'/g, (_, slug) => "'/" + (routes[slug] || slug) + "'");
runtime = runtime.replace('<a href="\'+t[2]+\'">', '<a target="_top" href="\'+t[2]+\'">');
const bridge = '<script src="/assets/scripts/cloud-object-storage-integration.js"></script>';
const css = ['consulting-faq', 'faq-layout', 'hosting-tools', 'section-navigation-flow', 'cloud-object-storage-integration'].map(name => '<link rel="stylesheet" href="/assets/styles/' + name + '.css">').join('');
const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cloud Object Storage | XcellHost</title>' + fonts + styles + css + '</head><body>' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + '<script>' + runtime + '</script></body></html>';
for (const m of output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new vm.Script(m[1]);
fs.writeFileSync(path.join(root, 'public/imported-cloud-object-storage.html'), output);
console.log('Imported Cloud Object Storage with 12 original FAQs and original tools.');
