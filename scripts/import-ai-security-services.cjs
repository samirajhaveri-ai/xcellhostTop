const { replaceReferenceSections } = require('./customer-testimonials.cjs');
const fs = require('node:fs');
const path = require('node:path');
const directory = process.argv[2];
if (!directory) throw new Error('Pass the directory containing the five supplied AI-security HTML files.');
const root = path.resolve(__dirname, '..');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const pages = [
  ['ai-identity-security', 'AI Identity Security', 'aid', 'aid-hl'],
  ['ai-security-platform', 'AI Security Platform', 'ap', 'ap-copy'],
  ['ai-security-audit', 'AI Security Audit', 'au', 'au-copy'],
  ['ai-security-assessment', 'AI Security Assessment', 'asa', 'asa-copy'],
  ['ai-red-teaming-services', 'AI Red Teaming Services', 'rt', 'rt-copy'],
];
// Extract a complete div without mistaking nested children for its closing tag.
function div(html, className) {
  const tags = [...html.matchAll(/<div\b[^>]*>|<\/div>/g)];
  const start = tags.findIndex(m => m[0].match(/class="([^"]+)"/)?.[1].split(/\s+/).includes(className));
  if (start < 0) throw new Error('Missing div: ' + className);
  let depth = 0;
  for (let i = start; i < tags.length; i++) {
    depth += tags[i][0].startsWith('</') ? -1 : 1;
    if (!depth) return html.slice(tags[start].index, tags[i].index + tags[i][0].length);
  }
  throw new Error('Unclosed div: ' + className);
}
function inner(markup) { return markup.slice(markup.indexOf('>') + 1, -6); }
for (const [slug, title, prefix, copyClass] of pages) {
  const source = fs.readFileSync(path.join(directory, slug + '.html'), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
  main = main.replace(/<section\b[^>]*id="(?:watch|contact|family|related)"[^>]*>[\s\S]*?<\/section>/g, '');
  main = main.replace(/<div class="lh-powered\b[^>]*>[\s\S]*?<\/div>/g, '');
  main = main.replace(/class="lh-ask([^"]*)"/g, 'class="lh-ask$1 xh-developer-ask"');
  main = main.replace(/(<div class="lh-ask\b[^>]*>[\s\S]*?<\/div>)/, '$1<div class="managed-powered"><span>Powered by</span><span aria-hidden="true">|</span><span class="ai-security-vendor"><img src="/assets/images/xcellhost-login-logo.png" alt="XcellHost" width="106" height="44"><span>' + (prefix === 'ap' ? 'AI Security Platform' : 'AI Security Lab') + '</span></span></div>');
  main = main.replace(/<section\b[^>]*class="hero[^>]*>[\s\S]*?<\/section>/, hero => {
    const wrap = div(hero, 'wrap');
    let copy = inner(div(hero, copyClass));
    const crumb = div(hero, 'crumb');
    copy = copy.replace(crumb, '');
    if (prefix === 'rt') copy += inner(div(hero, 'rt-base'));
    if (prefix === 'aid') copy += div(hero, 'lh-ask') + div(hero, 'managed-powered');
    const stage = div(hero, prefix + '-stage');
    return hero.replace(wrap, '<div class="wrap"><div class="managed-hero-grid"><div class="managed-copy">' + crumb + copy + '</div>' + stage + '</div></div>');
  });
  main = main.replace(/<nav\b[^>]*aria-label="On this page"[^>]*>/g, tag => tag.replace(/class="([^"]*)"/, 'class="$1 product-section-nav"'));
  main = main.replace(/(<section\b[^>]*id="(?:security|compliance)"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>SECURITY &amp; COMPLIANCE</h2><p class="hosting-section-intro">$2</p>');
  main = main.replace(/(<section\b[^>]*id="why"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>Why XcellHost For ' + title + '</h2><p class="hosting-section-intro">$2</p>');
  const controls = prefix === 'ap' ? [
    ['Approved AI Use', 'Agree allowed applications, user groups and data-handling policies before rollout.'],
    ['Prompt & Response Controls', 'Configure detection and masking policies around the data your organisation handles.'],
    ['Administrative Access', 'Assign policy administration and review permissions to designated owners.'],
    ['Event Evidence', 'Review policy events and agree logging access and retention for your deployment.'],
    ['Phased Enforcement', 'Validate policies with a pilot group before extending enforcement.'],
    ['Incident Follow-Up', 'Agree escalation contacts and the response process for flagged activity.'],
  ] : [
    ['Agreed Scope', 'Document the AI systems, identities, environments and activities included in the engagement.'],
    ['Authorised Access', 'Agree the accounts and permissions required for the scoped review or testing.'],
    ['Sensitive Data Handling', 'Agree safe test data and handling rules for prompts, outputs and supporting evidence.'],
    ['Evidence Access', 'Limit access to collected findings and agree their storage and retention.'],
    ['Control Mapping', 'Map relevant findings to the frameworks selected for your engagement.'],
    ['Remediation Review', 'Assign owners to prioritised actions and agree the validation or follow-up scope.'],
  ];
  const security = '<section class="sec" id="security"><div class="wrap"><div class="sh rv"><h2>SECURITY &amp; COMPLIANCE</h2><p>' + title + ' follows an agreed scope for access, data handling, evidence and follow-up.</p></div><div class="hosting-reasons">' + controls.map(([h,p]) => '<article><h3>' + h + '</h3><p>' + p + '</p></article>').join('') + '</div></div></section>';
  main = main.replace(/(<section\b[^>]*id="(?:why|faq)")/, security + '$1');
  if (!/<section\b[^>]*id="why"/.test(main)) {
    const reasons = [
      ['Agreed Service Scope', 'Define the AI applications, users and responsibilities covered by your managed service.'],
      ['Planned Onboarding', 'Review your current setup and agree the rollout with the XcellHost team.'],
      ['Ongoing Operations', 'Coordinate policy administration and change requests through one service team.'],
      ['Support & Escalation', 'Agree support contacts and escalation paths for your organisation.'],
      ['Useful Reporting', 'Review service activity and follow-up actions against your agreed requirements.'],
      ['INR Billing', 'Receive a rupee quotation with the selected services and applicable GST clearly identified.'],
    ];
    main = main.replace(/(<section\b[^>]*id="faq")/, '<section class="sec" id="why"><div class="wrap"><div class="sh rv"><h2>Why XcellHost For ' + title + '</h2></div><div class="hosting-reasons">' + reasons.map(([h,p]) => '<article><h3>' + h + '</h3><p>' + p + '</p></article>').join('') + '</div></div></section>$1');
  }
  const feedback = '<section class="sec" id="customer-feedback"><div class="wrap"><div class="sh rv"><h2>What Customers Say</h2><p>Request customer references relevant to your ' + title + ' deployment and support requirements.</p></div><button class="btn btn-orange" data-open="xhCallback" data-topic="' + title + ' customer references">Request Customer References</button></div></section>';
  main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
    section = section.replaceAll('class="fq open"', 'class="fq"').replaceAll('aria-expanded="true"', 'aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/g, '<i aria-hidden="true">+</i>');
    const items = [...section.matchAll(/<div class="fq"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0]);
    const expected = (section.match(/class="fq"/g) || []).length;
    if (!expected || items.length !== expected) throw new Error(slug + ': FAQ extraction mismatch');
    const half = Math.ceil(items.length / 2);
    return feedback + '<section class="sec" id="faq"><div class="wrap"><div class="sh rv"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
  });
  function localLinks(html) {
    return html.replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"')
      .replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"')
      .replaceAll('href="/managed-google-workspace"', 'href="/managed-gws"')
      .replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/').replaceAll('BUY NOW', 'Buy Now');
  }
  const labels = { overview: 'Overview', risks: 'Risks', scope: 'Scope', cover: 'Coverage', capabilities: 'Capabilities', method: 'Methodology', how: 'How It Works', process: 'Process', frameworks: 'Frameworks', deliverables: 'Deliverables', pricing: 'Pricing', tools: 'Tools', configure: 'Configurator', mapper: 'Coverage Mapper', quiz: 'Readiness Quiz', inventory: 'AI Inventory', readiness: 'Readiness', evidence: 'Evidence', compare: 'Compare', vs: 'Compare', steps: 'Get Started', start: 'Get Started', security: 'Security', why: 'Why XcellHost', faq: 'FAQs' };
  main = main.replace(/<nav class="(?:rt-sub|au-idx)[^"]*"[\s\S]*?<\/nav>/g, '');
  const sections = [...main.matchAll(/<section\b[^>]*id="([^"]+)"/g)].map(m => m[1]).filter(id => labels[id]);
  main = main.replace(/(<section\b[^>]*id="overview")/, '<nav class="product-section-nav managed-bookmarks" aria-label="Page sections"><div class="wrap">' + sections.map(id => '<a href="#' + id + '">' + labels[id] + '</a>').join('') + '</div></nav>$1');
  main = localLinks(main);
  let script = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]);
  script = script.replace(/\binnerHeight\b/g, 'parent.innerHeight')
    .replace(/(?:c|cf)\.scrollIntoView\(\{behavior:R\?'auto':'smooth',block:'start'\}\)/g, "window.hostingJumpTo('configure')")
    .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
    .replace('y=parent.innerHeight*.32', 'y=window.hostingViewportFocus()');
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
  const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
  const css = ['consulting-faq', 'faq-layout', 'hero-ask-ai', 'section-navigation-flow', 'hosting-tools', 'managed-productivity', 'ai-security-services'].map(name => '<link rel="stylesheet" href="/assets/styles/' + name + '.css">').join('');
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), replaceReferenceSections('<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | XcellHost</title>' + links + styles + css + '</head><body data-ai-security-service="' + slug + '">' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', title + ' enquiry:') + script + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>', path.join(root, 'public/imported-' + slug + '.html')));
console.log(slug + ': preserved source tools and FAQ answers');
}
