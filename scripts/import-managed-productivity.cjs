const fs = require('node:fs');
const path = require('node:path');
const directory = process.argv[2];
if (!directory) throw new Error('Pass the directory containing the four supplied managed-service HTML files.');
const root = path.resolve(__dirname, '..');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const pages = [
  ['managed-gws', 'managed-google-workspace', 'Managed Google Workspace', 'gw', 'Google Workspace', 'google-business/logo.svg'],
  ['managed-mdm', 'managed-mdm', 'Managed MDM', 'md', 'Microsoft Intune / Your Chosen MDM', 'code-signing-tools/microsoft.svg'],
  ['managed-intune-services', 'managed-intune-services', 'Managed Intune Services', 'mi', 'Microsoft Intune', 'code-signing-tools/microsoft.svg'],
  ['managed-phishing-simulation', 'managed-phishing-simulation (1)', 'Managed Phishing Simulation', 'ps', 'Microsoft Defender for Office 365', 'code-signing-tools/microsoft.svg'],
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
for (const [slug, filename, title, prefix, vendor, logo] of pages) {
  const source = fs.readFileSync(path.join(directory, filename + '.html'), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
  main = main.replace(/<section\b[^>]*id="(?:watch|contact|family|related)"[^>]*>[\s\S]*?<\/section>/g, '');
  main = main.replace(/<div class="lh-powered\b[^>]*>[\s\S]*?<\/div>/g, '');
  main = main.replace(/class="lh-ask([^"]*)"/g, 'class="lh-ask$1 xh-developer-ask"');
  main = main.replace(/(<div class="lh-ask\b[^>]*>[\s\S]*?<\/div>)/, '$1<div class="managed-powered"><span>Powered by</span><span aria-hidden="true">|</span><span class="managed-vendor"><img src="/assets/images/' + logo + '" alt="' + (prefix === 'gw' ? 'Google' : 'Microsoft') + '" width="22" height="22"><span>' + vendor + '</span></span></div>');
  main = main.replace(/<section\b[^>]*class="hero[^>]*>[\s\S]*?<\/section>/, hero => {
    const wrap = div(hero, 'wrap');
    let copy = inner(div(hero, prefix + '-hl'));
    if (prefix === 'gw') copy += div(hero, 'lh-ask') + div(hero, 'managed-powered');
    if (prefix === 'mi' || prefix === 'ps') copy += inner(div(hero, prefix === 'mi' ? 'mi-basebar' : 'ps-base'));
    const stage = div(hero, prefix + '-stage');
    return hero.replace(wrap, '<div class="wrap"><div class="managed-hero-grid"><div class="managed-copy">' + div(hero, 'crumb') + copy + '</div>' + stage + '</div></div>');
  });
  main = main.replace(/<nav\b[^>]*aria-label="On this page"[^>]*>/g, tag => tag.replace(/class="([^"]*)"/, 'class="$1 product-section-nav"'));
  main = main.replace(/(<section\b[^>]*id="(?:security|compliance)"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>SECURITY &amp; COMPLIANCE</h2><p class="hosting-section-intro">$2</p>');
  main = main.replace(/(<section\b[^>]*id="why"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>Why XcellHost For ' + title + '</h2><p class="hosting-section-intro">$2</p>');
  if (prefix === 'ps') {
    const controls = [
      ['Approved Campaigns', 'Agree the recipients, schedule and simulation scope before a campaign is launched.'],
      ['Safe Test Domains', 'Use simulated messages and test domains for awareness exercises.'],
      ['Credential Protection', 'Do not collect or store real passwords during simulations.'],
      ['Reporting Access', 'Agree which administrators can view individual and department results.'],
      ['Training Follow-Up', 'Assign relevant training and review completion with your designated team.'],
      ['Evidence & Retention', 'Agree report retention and the evidence required for your internal awareness programme.'],
    ];
    main = main.replace(/(<section\b[^>]*id="faq")/, '<section class="sec" id="security"><div class="wrap"><div class="sh rv"><h2>SECURITY &amp; COMPLIANCE</h2><p>Run phishing-awareness exercises with an agreed scope, safe simulations and controlled access to results.</p></div><div class="hosting-reasons">' + controls.map(([h,p]) => '<article><h3>' + h + '</h3><p>' + p + '</p></article>').join('') + '</div></div></section>$1');
  }
  if (!/<section\b[^>]*id="why"/.test(main)) {
    const reasons = [
      ['Agreed Service Scope', 'Define the devices, users and responsibilities covered by your managed service.'],
      ['Planned Onboarding', 'Review your current setup and agree the rollout with the XcellHost team.'],
      ['Ongoing Operations', 'Coordinate routine administration and change requests through one service team.'],
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
  const labels = { overview: 'Overview', scope: 'Service Scope', migrate: 'Migration', onboard: 'Onboarding', onboarding: 'Onboarding', ops: 'Operations', operations: 'Operations', security: 'Security', compliance: 'Security', india: 'Use Cases', pricing: 'Pricing', plans: 'Plans', configure: 'Configurator', tools: 'Tools', quiz: 'Awareness Quiz', planner: 'Campaign Planner', vs: 'Compare', steps: 'Get Started', why: 'Why XcellHost', faq: 'FAQs' };
  const sections = [...main.matchAll(/<section\b[^>]*id="([^"]+)"/g)].map(m => m[1]).filter(id => labels[id]);
  main = main.replace(/(<section\b[^>]*id="overview")/, '<nav class="product-section-nav managed-bookmarks" aria-label="Page sections"><div class="wrap">' + sections.map(id => '<a href="#' + id + '">' + labels[id] + '</a>').join('') + '</div></nav>$1');
  main = localLinks(main);
  let script = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]);
  script = script.replace(/\binnerHeight\b/g, 'parent.innerHeight')
    .replace("c.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", "window.hostingJumpTo('configure')")
    .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
    .replace('y=parent.innerHeight*.32', 'y=window.hostingViewportFocus()');
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
  const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
  const css = ['consulting-faq', 'hero-ask-ai', 'section-navigation-flow', 'hosting-tools', 'managed-productivity'].map(name => '<link rel="stylesheet" href="/assets/styles/' + name + '.css">').join('');
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | XcellHost</title>' + links + styles + css + '</head><body data-managed-productivity="' + slug + '">' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', title + ' enquiry:') + script + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>');
  console.log(slug + ': preserved source tools and FAQ answers');
}
