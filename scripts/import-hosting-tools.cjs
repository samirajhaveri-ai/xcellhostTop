const { replaceReferenceSections } = require('./customer-testimonials.cjs');
const fs = require('node:fs');
const path = require('node:path');

const inputDirectory = process.argv[2];
if (!inputDirectory) throw new Error('Pass the directory containing the six supplied HTML files.');
const root = path.resolve(__dirname, '..');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const pages = [
  ['cpanel-control-panel', 'cPanel Control Panel', 'cp', 'cpanel-wordmark.svg', 'cPanel'],
  ['plesk-control-panel', 'Plesk Control Panel', 'pk', 'plesk-wordmark.svg', 'Plesk'],
  ['webuzo-control-panel', 'Webuzo Control Panel', 'wz', 'webuzo-logo.png', 'Webuzo'],
  ['cloudlinux', 'CloudLinux OS Licence', 'cl', 'cloudlinux-logo.webp', 'CloudLinux'],
  ['plesk-servers', 'Plesk Servers', 'ps', 'plesk-wordmark.svg', 'Plesk'],
  ['cpanel-servers', 'cPanel Servers', 'cx', 'cpanel-wordmark.svg', 'cPanel'],
];
// Reuse the repository's vector logos with a wordmark-sized viewBox.
for (const [source, target, box, fill] of [
  ['ssl-platforms/cpanel.svg', 'cpanel-wordmark.svg', '0 8 24 8', '#ff6c2c'],
  ['plesk-servers/reference-2.svg', 'plesk-wordmark.svg', '0 6 24 12', '#52bbe6'],
]) {
  let svg = fs.readFileSync(path.join(root, 'public/assets/images', source), 'utf8').replace('viewBox="0 0 24 24"', 'viewBox="' + box + '"');
  svg = svg.replace(/<svg\b[^>]*>/, tag => tag.replace(/ fill="[^"]*"/, '').replace('<svg', '<svg fill="' + fill + '"'));
  fs.writeFileSync(path.join(root, 'public/assets/images', target), svg);
}

for (const [slug, title, prefix, logo, vendor] of pages) {
  const source = fs.readFileSync(path.join(inputDirectory, slug + (slug.endsWith('-servers') ? ' (1)' : '') + '.html'), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
  // End the imported content at FAQ; the app provides the shared page footer.
  main = main.replace(/<section\b[^>]*id="(?:watch|contact|family|related)"[^>]*>[\s\S]*?<\/section>/g, '');
  main = main.replace(/<div class="lh-powered\b[^>]*>[\s\S]*?<\/div>/g, '');
  main = main.replace(/class="lh-ask([^"]*)"/g, 'class="lh-ask$1 xh-developer-ask"');
  main = main.replace(/(<div class="lh-ask\b[^>]*>[\s\S]*?<\/div>)/, '$1<div class="hosting-powered"><span>Powered by</span><span aria-hidden="true">|</span><img src="/assets/images/' + logo + '" alt="' + vendor + '" width="140" height="38"></div>');
  // Keep the breadcrumb with the text column rather than above the taller illustration.
  main = main.replace(/(<div class="crumb"[^>]*>[\s\S]*?<\/div>)\s*(<div class="hero-grid">\s*<div[^>]*>)/, '$2$1');
  main = main.replace(new RegExp('class="' + prefix + '-sub"'), 'class="' + prefix + '-sub product-section-nav"');
  main = main.replace(/(<section\b[^>]*id="security"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>SECURITY &amp; COMPLIANCE</h2><p class="hosting-section-intro">$2</p>');
  if (!/<section\b[^>]*id="why"/.test(main)) {
    const reasons = [
      ['INR Billing', 'Plesk licences and agreed services on a rupee invoice from XcellHost.'],
      ['Edition Selection', 'Choose Web Admin, Web Pro or Web Host around your domain count and toolkit requirements.'],
      ['Installation Support', 'Plan licence activation and panel installation with the implementation team.'],
      ['Migration Planning', 'Review websites, mailboxes and databases before agreeing a migration scope.'],
      ['WordPress Operations', 'Plan staging, updates and maintenance around the WP Toolkit features in your edition.'],
      ['One Support Contact', 'Coordinate panel licensing, hosting and related service enquiries with XcellHost.'],
    ];
    main = main.replace(/(<section\b[^>]*id="faq")/, '<section class="sec" id="why"><div class="wrap"><div class="sh rv"><h2>Why XcellHost For ' + title + '</h2></div><div class="hosting-reasons">' + reasons.map(([h, p]) => '<article><h3>' + h + '</h3><p>' + p + '</p></article>').join('') + '</div></div></section>$1');
  } else {
    main = main.replace(/(<section\b[^>]*id="why"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>Why XcellHost For ' + title + '</h2><p class="hosting-section-intro">$2</p>');
  }
  const feedback = '<section class="sec" id="customer-feedback"><div class="wrap"><div class="sh rv"><h2>What Customers Say</h2><p>Request customer references relevant to your ' + title + ' deployment and support requirements.</p></div><button class="btn btn-orange" data-open="xhCallback" data-topic="' + title + ' customer references">Request Customer References</button></div></section>';
  main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
    section = section.replaceAll('class="fq open"', 'class="fq"').replaceAll('aria-expanded="true"', 'aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/g, '<i aria-hidden="true">+</i>');
    const items = [...section.matchAll(/<div class="fq"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0]);
    if (items.length !== 12) throw new Error(slug + ': expected 12 FAQs, found ' + items.length);
    return feedback + '<section class="sec" id="faq"><div class="wrap"><div class="sh rv"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0, 6), items.slice(6)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
  });
  main = main.replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"')
    .replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"')
    .replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/')
    .replaceAll('BUY NOW', 'Buy Now');
  let script = [...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0];
  script = script.replaceAll('BUY NOW', 'Buy Now').replace(/\binnerHeight\b/g, 'parent.innerHeight')
    .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
    .replace(/nav\.getBoundingClientRect\(\)\.bottom\+(?:30|40)/g, 'window.hostingViewportFocus()')
    .replace('y=parent.innerHeight*.32', 'y=window.hostingViewportFocus()')
    .replace(/\$\('#configure'\)\.scrollIntoView\(\{behavior:R\?'auto':'smooth'\}\)/g, "window.hostingJumpTo('configure')");
  script = script.replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"');
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
  const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
  const document = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | XcellHost</title>' + links + styles + '<link rel="stylesheet" href="/assets/styles/consulting-faq.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"><link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/section-navigation-flow.css"><link rel="stylesheet" href="/assets/styles/hosting-tools.css"></head><body data-hosting-tool="' + slug + '">' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', title + ' enquiry:') + script + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), replaceReferenceSections(document, path.join(root, 'public/imported-' + slug + '.html')));
console.log(slug + ': preserved source tools, 12 FAQs and product-specific security content');
}
