const fs = require('node:fs');
const path = require('node:path');
const directory = process.argv[2];
if (!directory) throw new Error('Pass the directory containing the supplied Microsoft 365 plan documents.');
const root = path.resolve(__dirname, '..');
const pages = [
  ['office-365-e1', 'Office 365 E1'],
  ['office-365-e3', 'Office 365 E3'],
  ['office-365-f3', 'Office 365 F3'],
  ['microsoft-365-f3', 'Microsoft 365 F3'],
  ['office-365-e3-nonprofit', 'Office 365 E3 Nonprofit'],
  ['microsoft-365-business-premium-nonprofit', 'Microsoft 365 Business Premium Nonprofit'],
  ['microsoft-365-e3-nonprofit', 'Microsoft 365 E3 Nonprofit'],
  ['microsoft-365-f3-nonprofit', 'Microsoft 365 F3 Nonprofit'],
  ['microsoft-365-e5-nonprofit', 'Microsoft 365 E5 Nonprofit'],
];
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
// Plans without a supplied detail document return to their existing catalogue.
const aliases = {
  'microsoft-365': 'microsoft-365-enterprise',
  'microsoft-365-e3': 'microsoft-365-enterprise#plans',
  'microsoft-365-e5': 'microsoft-365-enterprise#plans',
  'microsoft-365-f1': 'microsoft-365-enterprise-frontline#plans',
  'office-365-e5': 'microsoft-365-enterprise-office365#plans',
  'xcellhost-microsoft-visio': 'microsoft-visio',
  'xcellhost-microsoft-viva': 'microsoft-viva',
  'xcellhost-project-server': 'microsoft-project-server',
  'xcellhost-managed-sentinel': 'managed-microsoft-sentinel',
  'xcellhost-entra-id-p1': 'microsoft-entra-id-p1',
  'xcellhost-entra-id-p2': 'microsoft-entra-id-p2',
  'xcellhost-entra-suite': 'microsoft-entra-suite',
  'mxdr-for-microsoft': 'managed-microsoft-xdr',
};
function localLinks(html) {
  return html.replace(/href="(?:https?:\/\/(?:www\.)?(?:xcellhost\.top|xcellhost\.cloud)\/)([^"?#]*)(#[^"]*)?"/g,
    (_, slug, hash = '') => 'href="/' + (aliases[slug.replace(/\.html$/, '')] || slug.replace(/\.html$/, '')) + hash + '" target="_top"')
    .replace(/href="([a-z0-9-]+)\.html"/g, (_, slug) => 'href="/' + (aliases[slug] || slug) + '" target="_top"')
    .replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/');
}
function askAiLinks(html) {
  const providers = {
    chatgpt: 'https://chatgpt.com/?q=',
    claude: 'https://claude.ai/new?q=',
    perplexity: 'https://www.perplexity.ai/search?q=',
    google: 'https://www.google.com/search?udm=50&q=',
    copilot: 'https://copilot.microsoft.com/?q=',
  };
  const entities = { amp: '&', quot: '"', apos: "'", lt: '<', gt: '>' };
  return html.replace(/<div class="lh-ask\b[^>]*data-q="([^"]+)"[^>]*>[\s\S]*?<\/div>/g, (bar, attribute) => {
    const prompt = attribute.replace(/&(#x[0-9a-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (_, entity) => {
      if (entity[0] !== '#') return entities[entity.toLowerCase()];
      return String.fromCodePoint(entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : parseInt(entity.slice(1), 10));
    });
    return bar.replace(/<a data-ai="([^"]+)" href="#">/g, (_, provider) => {
      if (!providers[provider]) throw new Error('Unknown Ask AI provider: ' + provider);
      const url = (providers[provider] + encodeURIComponent(prompt)).replaceAll('&', '&amp;');
      return '<a data-ai="' + provider + '" href="' + url + '" target="_blank" rel="noopener noreferrer">';
    });
  });
}
const labels = { overview: 'Overview', included: 'What Is Included', rights: 'Licence Rights', fit: 'Use Cases', day: 'Daily Workflows', shared: 'Shared Devices', compare: 'Compare', track: 'Plan Picker', bridge: 'Plan Picker', eligibility: 'Eligibility', addons: 'Add-Ons', configure: 'Configurator', pricing: 'Pricing', tools: 'Tools', mailbox: 'Mailbox Sizing', mixer: 'Licence Mix', mix: 'Licence Mix', chooser: 'Plan Picker', savings: 'Savings', baseline: 'Security Baseline', devices: 'Devices', upgrade: 'Upgrade Planner', steps: 'Get Started', migrate: 'Migration', india: 'Security', why: 'Why XcellHost', 'customer-feedback': 'Customer References', faq: 'FAQs' };
function removeBannerPrice(html) {
  const start = html.search(/<div class="[a-z0-9]+-price"/);
  if (start < 0 || start > html.indexOf('</section>')) return html;
  const tags = /<div\b[^>]*>|<\/div>/g;
  tags.lastIndex = start;
  let depth = 0;
  for (let tag; (tag = tags.exec(html));) {
    depth += tag[0].startsWith('</') ? -1 : 1;
    if (depth === 0) return html.slice(0, start).replace(/[ \t]+$/, '') + html.slice(tags.lastIndex);
  }
  throw new Error('Unclosed banner price block');
}
for (const [slug, title] of pages) {
  const source = fs.readFileSync(path.join(directory, slug + '.html'), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
  main = removeBannerPrice(main);
  main = main.replace(/<section\b[^>]*id="(?:watch|contact|related|more)"[^>]*>[\s\S]*?<\/section>/g, '');
  main = main.replace(/class="lh-ask([^"]*)"/g, 'class="lh-ask$1 xh-developer-ask"');
  // Give the single-line title the full banner width, including long nonprofit plan names.
  const heading = main.match(/<div class="crumb"[^>]*>[\s\S]*?<\/div>\s*<h1\b[^>]*>[\s\S]*?<\/h1>/);
  if (heading) {
    main = main.replace(heading[0], '');
    main = main.replace('<div class="wrap">', '<div class="wrap"><div class="plan-heading">' + heading[0] + '</div>');
  }
  main = main.replace(/<div class="lh-powered\b[^>]*>[\s\S]*?<\/div>/g,
    '<div class="plan-powered"><span>Powered by</span><span aria-hidden="true">|</span><span class="plan-microsoft"><img src="/assets/images/smb-powered-by/microsoft365-wordmark.webp" alt="Microsoft 365 logo" width="100" height="25"></span><strong class="plan-brand-name">Microsoft 365</strong></div>');
  // Retain each document's own compliance copy; place it with the supporting sections before FAQ.
  let compliance = '';
  main = main.replace(/<section\b[^>]*id="india"[^>]*>[\s\S]*?<\/section>/, section => {
    compliance = section.replace(/<h2[^>]*>([\s\S]*?)<\/h2>/, '<h2>SECURITY &amp; COMPLIANCE</h2><p class="hosting-section-intro">$1</p>');
    return '';
  });
  const reasons = [
    ['Plan Advice', 'Match licences to each user’s applications, mailbox, device and security needs.'],
    ['Migration Planning', 'Plan mailbox moves, DNS changes and user onboarding with the XcellHost team.'],
    ['Tenant Configuration', 'Agree the access policies, collaboration settings and administration required for your deployment.'],
    ['Security Review', 'Identify the controls included in your selected plan and any additional licences required.'],
    ['Support & Operations', 'Arrange ongoing support and escalation for your Microsoft 365 environment.'],
    ['INR Billing With GST', 'Request a quotation covering licences, migration and support in rupees.'],
  ];
  const supporting = compliance + '<section class="sec" id="why"><div class="wrap"><div class="sh rv"><h2>Why XcellHost For ' + title + '</h2></div><div class="hosting-reasons">' + reasons.map(([h,p]) => '<article><h3>' + h + '</h3><p>' + p + '</p></article>').join('') + '</div></div></section>'
    + '<section class="sec" id="customer-feedback"><div class="wrap"><div class="sh rv"><h2>What Customers Say</h2><p>Ask for customer references relevant to your ' + title + ' deployment and support needs.</p></div><button class="btn btn-orange" data-open="xhCallback" data-topic="' + title + ' customer references">Request Customer References</button></div></section>';
  main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
    section = section.replaceAll('class="fq open"', 'class="fq"').replaceAll('aria-expanded="true"', 'aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/g, '<i aria-hidden="true">+</i>');
    const items = [...section.matchAll(/<div class="fq"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0]);
    if (!items.length || items.length !== (section.match(/class="fq"/g) || []).length) throw new Error(slug + ': FAQ extraction mismatch');
    const half = Math.ceil(items.length / 2);
    return supporting + '<section class="sec" id="faq"><div class="wrap"><div class="sh rv"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
  });
  const sections = [...main.matchAll(/<section\b[^>]*id="([^"]+)"/g)].map(m => m[1]).filter(id => labels[id]);
  main = main.replace(/(<section\b[^>]*id="overview")/, '<nav class="product-section-nav" aria-label="Page sections"><div class="wrap">' + sections.map(id => '<a href="#' + id + '">' + labels[id] + '</a>').join('') + '</div></nav>$1');
  main = askAiLinks(localLinks(main));
  let script = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]);
  script = script.replace(/(['"])([a-z0-9-]+)\.html\1/g, (_, quote, destination) => quote + '/' + (aliases[destination] || destination) + quote)
    .replace(/(['"])https:\/\/xcellhost\.cloud\/([a-z0-9-]+)\1/g, (_, quote, destination) => quote + '/' + (aliases[destination] || destination) + quote)
    .replace(/href="'\+([^\n]+?)\+'"/g, 'href="\'+$1+\'" target="_top"')
    .replace(/XH\.open\('(?:oeQuote|bpQuote|fnQuote)'\)/g, "XH.open('xhCallback',{topic:NAME+' — quotation · '+cfgText()})")
    .replace(/function goQuote\(\)\{[^\n]+\}/g, "function goQuote(){XH.open('xhCallback',{topic:NAME+' — quotation · '+summary()});}");
  script = script.replace(/([a-zA-Z]+)\.scrollIntoView\(\{behavior:R\?'auto':'smooth',block:'start'\}\)/g, 'window.hostingJumpTo($1.id)')
    .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(');
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
  const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
  const css = ['consulting-faq', 'faq-layout', 'section-navigation-flow', 'hosting-tools', 'microsoft-365-plans'].map(name => '<link rel="stylesheet" href="/assets/styles/' + name + '.css">').join('');
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | XcellHost</title>' + links + styles + css + '</head><body>' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', title + ' enquiry:') + script + '</body></html>');
  console.log(slug + ': imported original content, tools and FAQ answers');
}
