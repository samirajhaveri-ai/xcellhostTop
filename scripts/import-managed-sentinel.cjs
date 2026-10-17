const { removePoweredByLogos } = require('./powered-by-text.cjs');
const fs = require('node:fs');
const path = require('node:path');

const input = process.argv[2];
if (!input) throw new Error('Pass the supplied Managed Sentinel HTML file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(input, 'utf8');
const reference = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = reference.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
// Keep the breadcrumb beside the heading, independent of the illustration height.
main = main.replace(/(<div class="crumb"[^>]*>[\s\S]*?<\/div>)\s*(<div class="hero-grid">\s*<div[^>]*>)/, '$2$1');
for (const id of ['watch', 'contact', 'family']) {
  main = main.replace(new RegExp('<section\\b[^>]*id="' + id + '"[^>]*>[\\s\\S]*?<\\/section>'), '');
}
main = main.replace(/<div class="lh-powered\b[^>]*>[\s\S]*?<\/div>/, '');
main = main.replace('class="lh-ask"', 'class="lh-ask xh-developer-ask" data-ai-product="Managed Sentinel"');
main = main.replace(/(<div class="lh-ask\b[^>]*>[\s\S]*?<\/div>)/, '$1<div class="sentinel-powered"><span>Powered by</span><span aria-hidden="true">|</span><span class="sentinel-vendor"><span class="msq" aria-hidden="true"><i></i><i></i><i></i><i></i></span>Microsoft Sentinel</span></div>');
const bookmarks = [
  ['overview', 'Overview'], ['journey', 'How It Works'], ['simulate', 'Attack Simulator'],
  ['kql', 'Threat Hunting'], ['dashboard', 'Dashboard'], ['estimate', 'Log Estimator'],
  ['deliver', 'Service Coverage'], ['raci', 'Responsibilities'], ['compare', 'Compare'],
  ['onboard', 'Get Started'], ['india', 'India Readiness'], ['pricing', 'Pricing'],
  ['security', 'Security'], ['why', 'Why XcellHost'], ['faq', 'FAQs'],
];
main = main.replace(/(<section\b[^>]*id="overview")/, '<nav class="product-section-nav" aria-label="Page sections"><div class="sentinel-bookmarks">' + bookmarks.map(([id, label]) => '<a href="#' + id + '">' + label + '</a>').join('') + '</div></nav>$1');
const controls = [
  ['Workspace Ownership', 'Your Sentinel workspace, rules and playbooks remain in your Azure tenant and subscription.'],
  ['Administrative Access', 'Delegated, role-based access can be reviewed and revoked by your organisation.'],
  ['Response Approvals', 'Agree approved automation at onboarding and escalation contacts for business-critical actions.'],
  ['Incident Evidence', 'Retain investigation timelines, hunting queries and playbook activity for incident review.'],
  ['Data Location & Retention', 'Confirm the Azure India region, table tiers and retention settings for your deployment.'],
  ['Operational Readiness', 'Document reporting responsibilities, escalation paths and evidence requirements in your runbook.'],
];
const security = '<section class="sec" id="security"><div class="wrap"><div class="sh rv"><h2>SECURITY &amp; COMPLIANCE</h2><p>Managed Microsoft Sentinel combines centralised security monitoring with an agreed operating model for access, incident response and evidence handling.</p></div><div class="sentinel-security-grid">' + controls.map(([label, text]) => '<article><h3>' + label + '</h3><p>' + text + '</p></article>').join('') + '</div></div></section>';
main = main.replace(/(<section\b[^>]*id="why")/, security + '$1');
main = main.replace(/(<section\b[^>]*id="faq")/, '<section class="sec" id="customer-feedback"><div class="wrap"><div class="sh rv"><h2>What Customers Say</h2><p>Request customer references relevant to your Microsoft Sentinel deployment and SOC requirements.</p></div><button class="btn" data-open="xhCallback" data-topic="Managed Microsoft Sentinel customer references">Request Customer References</button></div></section>$1');
main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
  section = section.replace(/<div class="sh rv">[\s\S]*?<\/div>/, '<div class="sh rv"><h2>Frequently Asked Questions</h2></div>')
    .replaceAll('class="fq open"', 'class="fq"').replaceAll('aria-expanded="true"', 'aria-expanded="false"')
    .replace(/<i><svg[\s\S]*?<\/svg><\/i>/g, '<i aria-hidden="true">+</i>');
  const items = [...section.matchAll(/<div class="fq">[\s\S]*?<div class="fa">[\s\S]*?<\/div><\/div>/g)].map(m => m[0]);
  if (!items.length) throw new Error('FAQ content not found');
  const half = Math.ceil(items.length / 2);
  return '<section class="sec" id="faq"><div class="wrap"><div class="sh rv"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="sentinel-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
});
main = main.replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"').replace(/href="([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"');
let script = [...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0];
script = script.replaceAll('BUY NOW', 'Buy Now').replace(/\binnerHeight\b/g, 'parent.innerHeight').replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(');
script = script.replace('y=scrollY+vh*.5,cs=', 'y=scrollY+vh*.5-(frameElement?frameElement.getBoundingClientRect().top:0),cs=');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
fs.writeFileSync(path.join(root, 'public/imported-managed-microsoft-sentinel.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Managed Microsoft Sentinel | XcellHost</title>' + links + styles + '<link rel="stylesheet" href="/assets/styles/consulting-faq.css"><link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/section-navigation-flow.css"><link rel="stylesheet" href="/assets/styles/managed-sentinel.css"></head><body>' + main + '<script src="/assets/scripts/managed-sentinel-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', 'Managed Microsoft Sentinel enquiry:') + script + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>');
fs.writeFileSync(path.join(root, 'public/imported-managed-microsoft-sentinel.html'), removePoweredByLogos(fs.readFileSync(path.join(root, 'public/imported-managed-microsoft-sentinel.html'), 'utf8')));
console.log('Imported Managed Microsoft Sentinel with original interactive tools.');
