const { replaceReferenceSections } = require('./customer-testimonials.cjs');
const fs = require('node:fs');
const path = require('node:path');
const directory = process.argv[2];
if (!directory) throw new Error('Pass the directory containing the six supplied Accops HTML files.');
const root = path.resolve(__dirname, '..');
const pages = [
  ['accops-hyworks', 'Accops HyWorks'],
  ['accops-hysecure', 'Accops HySecure'],
  ['accops-hyid', 'Accops HyID'],
  ['accops-hylabs', 'Accops HyLabs'],
  ['accops-hydesk', 'Accops HyDesk'],
  ['more-from-accops', 'More From Accops'],
];
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const labels = { overview: 'Overview', capabilities: 'Capabilities', how: 'How It Works', deploy: 'Deployment', security: 'Security', usecases: 'Use Cases', pricing: 'Pricing', tools: 'Tools', vs: 'Compare', steps: 'Get Started', why: 'Why XcellHost', 'customer-feedback': 'Customer References', faq: 'FAQs' };
function localLinks(html) {
  return html.replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"')
    .replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"')
    .replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/')
    .replaceAll('BUY NOW', 'Buy Now');
}
for (const [slug, title] of pages) {
  const source = fs.readFileSync(path.join(directory, slug + '.html'), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
  main = main.replace(/<section\b[^>]*id="(?:watch|contact|related)"[^>]*>[\s\S]*?<\/section>/g, '');
  main = main.replace(/class="lh-ask([^"]*)"/g, 'class="lh-ask$1 xh-developer-ask"');
  main = main.replace(/(<div class="lh-ask\b[^>]*>[\s\S]*?<\/div>)/, '$1<div class="accops-powered"><span>Powered by</span><span aria-hidden="true">|</span><span class="accops-logo"><img src="/assets/images/vendor-partners/72-accops.png" alt="Accops" width="180" height="62"></span></div>');
  main = main.replace(/(<section\b[^>]*id="security"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>SECURITY &amp; COMPLIANCE</h2><p class="hosting-section-intro">$2</p>');
  main = main.replace(/(<section\b[^>]*id="why"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>Why XcellHost For ' + title + '</h2><p class="hosting-section-intro">$2</p>');
  if (!/<section\b[^>]*id="why"/.test(main)) {
    const reasons = [
      ['Deployment Planning', 'Plan your Accops environment around your users, applications and existing infrastructure.'],
      ['Pilot Before Rollout', 'Validate application access, desktop performance and user workflows with a pilot group.'],
      ['Hosted Or On-Premises', 'Choose a deployment approach suited to your organisation and support requirements.'],
      ['Migration Support', 'Agree a phased transition for users, applications and access policies.'],
      ['Operations & Support', 'Set clear responsibilities for monitoring, updates and escalation with the XcellHost team.'],
      ['INR Billing With GST', 'Receive a quotation covering your selected licences, infrastructure and support.'],
    ];
    main = main.replace(/(<section\b[^>]*id="faq")/, '<section class="sec" id="why"><div class="wrap"><div class="sh rv"><h2>Why XcellHost For ' + title + '</h2></div><div class="hosting-reasons">' + reasons.map(([h,p]) => '<article><h3>' + h + '</h3><p>' + p + '</p></article>').join('') + '</div></div></section>$1');
  }
  main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
    section = section.replaceAll('class="fq open"', 'class="fq"').replaceAll('aria-expanded="true"', 'aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/g, '<i aria-hidden="true">+</i>');
    const items = [...section.matchAll(/<div class="fq"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0]);
    const expected = (section.match(/class="fq"/g) || []).length;
    if (!expected || items.length !== expected) throw new Error(slug + ': FAQ extraction mismatch');
    const half = Math.ceil(items.length / 2);
    const feedback = '<section class="sec" id="customer-feedback"><div class="wrap"><div class="sh rv"><h2>What Customers Say</h2><p>Ask for customer references relevant to your ' + title + ' deployment and support needs.</p></div><button class="btn btn-orange" data-open="xhCallback" data-topic="' + title + ' customer references">Request Customer References</button></div></section>';
    return feedback + '<section class="sec" id="faq"><div class="wrap"><div class="sh rv"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0, half), items.slice(half)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
  });
  const sections = [...main.matchAll(/<section\b[^>]*id="([^"]+)"/g)].map(m => m[1]).filter(id => labels[id]);
  main = main.replace(/(<section\b[^>]*id="overview")/, '<nav class="product-section-nav" aria-label="Page sections"><div class="wrap">' + sections.map(id => '<a href="#' + id + '">' + labels[id] + '</a>').join('') + '</div></nav>$1');
  main = localLinks(main);
  let script = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]);
  script = script.replace(/(?:c|cf)\.scrollIntoView\(\{behavior:R\?'auto':'smooth',block:'start'\}\)/g, "window.hostingJumpTo('configure')")
    .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(');
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
  const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
  const css = ['consulting-faq', 'faq-layout', 'hero-ask-ai', 'section-navigation-flow', 'hosting-tools', 'accops-products'].map(name => '<link rel="stylesheet" href="/assets/styles/' + name + '.css">').join('');
  const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | XcellHost</title>' + links + styles + css + '</head><body>' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', title + ' enquiry:') + script + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), replaceReferenceSections(html, path.join(root, 'public/imported-' + slug + '.html')));
  console.log(slug + ': imported original sections, tools and FAQ answers');
}

// Link the existing catalogue cards without changing their copy or layout.
const cataloguePath = path.join(root, 'public/imported-accops-digital-workspace.html');
let catalogue = fs.readFileSync(cataloguePath, 'utf8');
for (const [slug, title] of pages) {
  const name = title.replace('More From', 'More from');
  catalogue = catalogue.replace(/<div class="ad-fc rv"[^>]*>[\s\S]*?<\/div>/g, card => card.includes('<b>' + name + '</b>')
    ? card.replace('<div ', '<a href="/' + slug + '" target="_top" ').replace(/<\/div>$/, '</a>') : card);
}
if (!catalogue.includes('id="accops-card-links"')) catalogue = catalogue.replace('</head>', '<style id="accops-card-links">a.ad-fc{display:block;color:inherit;text-decoration:none}a.ad-fc:focus-visible{outline:2px solid #0664ff;outline-offset:4px}</style></head>');
if (!catalogue.includes('/assets/styles/accops-workspace-banner.css')) catalogue = catalogue.replace('</head>', '<link rel="stylesheet" href="/assets/styles/accops-workspace-banner.css"></head>');
catalogue = catalogue.replace(/^[ \t]*<div class="lh-powered ad-pw">[^\r\n]*<\/div>\r?\n/m, '');
const catalogueLogo = '<span class="ad-logo"><img src="/assets/images/vendor-partners/72-accops.png" alt="Accops" width="180" height="62"></span>';
if (!catalogue.includes('class="ad-powered"')) catalogue = catalogue.replace(/(<div class="lh-ask"[^>]*>[\s\S]*?<\/div>)/, '$1<div class="ad-powered"><span>Powered by</span><span aria-hidden="true">|</span>' + catalogueLogo + '</div>');
catalogue = catalogue.replace(/<span class="ad-ft">A<\/span>/g, catalogueLogo);
fs.writeFileSync(cataloguePath, replaceReferenceSections(catalogue, cataloguePath));
