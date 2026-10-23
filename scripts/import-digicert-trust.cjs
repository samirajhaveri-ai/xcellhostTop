const { replaceReferenceSections } = require('./customer-testimonials.cjs');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) throw new Error('Pass the folder containing the four supplied DigiCert HTML files.');
const products = [
  { slug: 'digicert-content-trust-manager', prefix: 'ct', name: 'DigiCert Content Trust Manager', short: 'Content Trust',
    intro: 'Build content authenticity into your publishing and signing workflow. Agree signer identities, signing-key access, verification rules and evidence handling before rollout.',
    controls: [['Content Credentials', 'Attach C2PA provenance to supported images and video in the agreed publishing workflow.'], ['Verified Signers', 'Link signing identities to approved people or organisations.'], ['Tamper Detection', 'Verify signatures and hashes to identify changes outside the signed workflow.'], ['Trusted Timestamps', 'Include timestamp evidence where supported by the selected signing service.'], ['Key Access', 'Scope signing permissions and agree key-management responsibilities.'], ['Evidence Handling', 'Agree retention, access and deployment requirements for credentials and audit records.']] },
  { slug: 'digicert-ai-trust-manager', prefix: 'atm', name: 'DigiCert AI Trust Manager', short: 'AI Trust',
    intro: 'Give AI agents accountable identities and controlled access. Scope the agent inventory, human ownership, policy checks and revocation workflow to your environment.',
    controls: [['Agent Inventory', 'Discover and review agents, models, MCP servers and pipelines in scope.'], ['Human Ownership', 'Associate agent identities with responsible owners.'], ['Scoped Access', 'Define the systems, permissions and time limits an agent is allowed to use.'], ['Model Integrity', 'Check model and artefact integrity before use in the agreed workflow.'], ['Revocation', 'Revoke trust and investigate when an agent or dependency fails a policy check.'], ['Audit Evidence', 'Retain identity, policy and response records according to agreed requirements.']] },
  { slug: 'digicert-dns', prefix: 'dn', name: 'DigiCert DNS', short: 'DigiCert DNS',
    intro: 'Protect authoritative DNS with controlled changes, signed responses and tested recovery. Confirm the DNS features, service scope and operational responsibilities in your quotation.',
    controls: [['DNSSEC', 'Sign supported zones and coordinate DS records with your registrar.'], ['Resilient Resolution', 'Use the selected anycast and DDoS-mitigation capabilities for authoritative DNS.'], ['Failover Checks', 'Validate health checks and alternate origins before enabling automatic changes.'], ['Console Access', 'Assign named users and appropriate roles, with MFA and SSO where configured.'], ['Change Records', 'Document zone updates and review access to DNS administration.'], ['Migration Controls', 'Compare records, plan TTL changes and agree rollback before cut-over.']] },
  { slug: 'digicert-quantum-central', prefix: 'qc', name: 'DigiCert Quantum Central', short: 'Quantum Central',
    intro: 'Start post-quantum readiness with a reliable cryptographic inventory. Prioritise the assets, dependencies and migration steps that matter to your business, with an auditable change plan.',
    controls: [['Cryptographic Inventory', 'Collect agreed certificate, key, application and dependency information.'], ['Risk Prioritisation', 'Assess sensitive data, cryptographic exposure and migration dependencies.'], ['Policy Mapping', 'Map the inventory to your organisation’s approved cryptographic policies.'], ['Controlled Migration', 'Pilot compatible algorithms and protocols before broader rollout.'], ['Access & Ownership', 'Assign asset owners and limit access to inventory and integration credentials.'], ['Audit Reporting', 'Keep assessment findings, CBOM exports and remediation progress available for review.']] },
];
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const escape = s => s.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;');
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
const aliases = {
  'digicert-content-trust-manager': 'document-security',
  'xcellhost-managed-pki': 'managed-pki', 'xcellhost-private-ca': 'private-ca',
  'xcellhost-clm-solutions': 'clm-solutions', 'xcellhost-47-day-ssl': '47-days-ssl',
  'xcellhost-iso-42001': 'iso-42001ai-risk',
};
function localLinks(html) {
  return html.replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"')
    .replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, (_, slug) => 'href="/' + (aliases[slug] || slug) + '" target="_top"')
    .replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/');
}
for (const p of products) {
  const source = fs.readFileSync(path.join(input, p.slug + '.html'), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
  main = main.replace(/<section\b[^>]*id="(?:watch|contact)"[^>]*>[\s\S]*?<\/section>/g, '');
  // Keep all original product illustrations, demos, plan data and FAQ answers.
  const powered = div(main, 'lh-powered');
  main = main.replace(powered, '');
  const ask = div(main, 'lh-ask');
  main = main.replace(ask, ask.replace(/Ask AI about[^<]+/, 'Ask AI About ' + p.short) + '<div class="trust-powered"><span>Powered by <span aria-hidden="true">|</span></span><img src="/assets/images/digicert.svg" alt="DigiCert" width="112" height="32"></div>');
  main = main.replace(/<div class="crumb"[^>]*>[\s\S]*?<\/div>/, '');
  main = main.replace(/<div class="lh-type"[^>]*data-words='([^']+)'[^>]*>[\s\S]*?<\/div>/, (_, words) => '<div class="trust-highlight">' + JSON.parse(words)[0] + '</div>');
  main = main.replace(/class="atm-sub"/, 'class="atm-sub product-section-nav"');
  const whyMatch = main.match(/<section\b[^>]*id="why"[\s\S]*?<\/section>/);
  let why;
  if (whyMatch) {
    main = main.replace(whyMatch[0], '');
    why = whyMatch[0].replace(/<h2[^>]*>[\s\S]*?<\/h2>/, '<h2>Why XcellHost For ' + p.name + '</h2>');
  } else {
    const reasons = [['Workflow Assessment', 'Scope the content types, signer identities and publishing systems you need.'], ['Integration Support', 'Connect signing to the agreed CMS, API or document workflow.'], ['Deployment Planning', 'Choose the delivery approach that fits your operational requirements.'], ['INR Billing', 'Get a quotation for licensing and services with GST.'], ['Operational Support', 'Plan monitoring, escalation and signing-policy reviews with our team.'], ['One Partner', 'Coordinate content trust, certificates and ongoing support through XcellHost.']];
    why = '<section class="sec" id="why"><div class="wrap"><div class="sh"><h2>Why XcellHost For ' + p.name + '</h2></div><div class="hosting-reasons">' + reasons.map(([h,t]) => '<article><h3>' + h + '</h3><p>' + t + '</p></article>').join('') + '</div></div></section>';
  }
  const security = '<section class="sec" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>' + p.intro + '</p></div><div class="hosting-reasons">' + p.controls.map(([h,t]) => '<article><h3>' + h + '</h3><p>' + t + '</p></article>').join('') + '</div></div></section>';
  const feedback = '<section class="sec trust-tint" id="customer-feedback"><div class="wrap"><div class="sh"><h2>What Customers Say</h2><p>Ask our team for customer references relevant to your ' + p.short + ' deployment and integration requirements.</p></div><button type="button" class="btn btn-orange" data-open="xhCallback" data-topic="' + p.name + ': Customer references">Request Customer References</button></div></section>';
  main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
    const items = [...section.matchAll(/<div class="fq(?: open)?"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0].replace('class="fq open"', 'class="fq"').replace('aria-expanded="true"', 'aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/, '<i aria-hidden="true">+</i>'));
    if (items.length !== 12) throw new Error(p.slug + ': expected 12 FAQ answers, found ' + items.length);
    return security + why + feedback + '<section class="sec" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0,6),items.slice(6)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
  });
  main = main.replace(/href="#contact"/g, 'href="#" data-open="xhCallback" data-topic="' + p.name + '"');
  const providers = { chatgpt: 'https://chatgpt.com/?q=', claude: 'https://claude.ai/new?q=', perplexity: 'https://www.perplexity.ai/search?q=', google: 'https://www.google.com/search?udm=50&q=', copilot: 'https://copilot.microsoft.com/?q=' };
  main = main.replace(/<a data-ai="([^"]+)" href="#">/g, (_, provider) => '<a data-ai="' + provider + '" href="' + escape(providers[provider] + encodeURIComponent('Explain ' + p.name + ' and XcellHost integration, deployment and support options.')) + '" target="_blank" rel="noopener noreferrer">');
  // Route quotation buttons to the application's real callback form with sizing details.
  let script = [...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0];
  if (p.prefix === 'ct') script = script.replace(/\$id\('oQuote'\)\.addEventListener\('click',function\(\)\{[^\n]+/, "$id('oQuote').addEventListener('click',function(){calc();XH.open('xhCallback',{topic:'DigiCert Content Trust Manager: '+$id('oSum').value});});");
  if (p.prefix === 'atm') script = script.replace(/if\(oQuote&&qf\)oQuote\.addEventListener\('click',function\(\)\{[\s\S]*?\},R\?0:450\);\}\);/, "if(oQuote)oQuote.addEventListener('click',function(){XH.open('xhCallback',{topic:'DigiCert AI Trust Manager: '+sizing(cfg())});});");
  if (p.prefix === 'qc') script = script.replace("$id('qcQs').textContent=s;$id('qcQsz').value=s;XH.open('qcQm',{topic:'Quantum Central — quotation'});", "XH.open('xhCallback',{topic:'DigiCert Quantum Central: '+s});");
  if (p.prefix === 'dn') {
    main = main.replace(/(<button[^>]*id="cQuote"[^>]*)data-open="xhCallback"/, '$1');
    script = script.replace(/\$id\('cQuote'\)\.addEventListener\('click',function\(\)\{[^\n]+/, "$id('cQuote').addEventListener('click',function(){cfgCalc();XH.open('xhCallback',{topic:'DigiCert DNS: '+cfgLast.sum});});}");
    script = script.replace("cf.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", "window.hostingJumpTo('configure')");
  }
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_,n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
  const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
  const css = ['consulting-faq','faq-layout','hosting-tools','section-navigation-flow','digicert-trust'].map(n => '<link rel="stylesheet" href="/assets/styles/' + n + '.css">').join('');
  const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + p.name + ' | XcellHost</title>' + links + styles + css + '</head><body>' + localLinks(main) + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + localLinks(script) + '</body></html>';
  for (const [i,s] of [...output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].entries()) new (require('node:vm').Script)(s[1], {filename:p.slug+'-'+i});
  fs.writeFileSync(path.join(root, 'public/imported-' + p.slug + '.html'), replaceReferenceSections(output, path.join(root, 'public/imported-' + p.slug + '.html')));
  console.log('Imported ' + p.name + ': original tools and 12 FAQs preserved.');
}
