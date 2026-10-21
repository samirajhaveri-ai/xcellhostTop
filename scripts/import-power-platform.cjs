const fs = require('node:fs');
const path = require('node:path');
const directory = process.argv[2];
if (!directory) throw new Error('Pass the directory containing the four supplied HTML files.');
const root = path.resolve(__dirname, '..');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const pages = ['power-pages', 'power-apps', 'power-automate', 'power-bi'];
for (const slug of pages) {
  const title = 'Microsoft ' + slug.split('-').map(w => w === 'bi' ? 'BI' : w[0].toUpperCase() + w.slice(1)).join(' ');
  const source = fs.readFileSync(path.join(directory, slug + '.html'), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
  main = main.replace(/(<h1\b[^>]*>[\s\S]*?<span class="brd">)Work(<\/span>)/, '$1Power$2');
  if (slug === 'power-bi') {
    main = main.replace(/<section\b[^>]*id="pbHero"[\s\S]*?<\/section>/, hero => {
      // Keep the complete copy in one column and the live report in the other.
      hero = hero.replace(/<\/div>\s*<div class="pb-hr">/, '');
      hero = hero.replace(/<\/div>\s*(<!-- the report window -->)/, '$1');
      return hero.replace(/<\/section>$/, '</div></section>');
    });
  }
  main = main.replace(/<section\b[^>]*id="(?:watch|contact|family|related)"[^>]*>[\s\S]*?<\/section>/g, '');
  // Put the breadcrumb in the heading column, as on Tally on Cloud.
  main = main.replace(/(<div class="crumb"[^>]*>[\s\S]*?<\/div>)\s*(<div class="(?:pa|pb)-top">\s*<div[^>]*>)/, '$2$1');
  main = main.replace(/<div class="lh-powered\b[^>]*>[\s\S]*?<\/div>/g, '');
  main = main.replace(/class="lh-ask([^"]*)"/g, 'class="lh-ask$1 xh-developer-ask"');
  main = main.replace(/(<div class="lh-ask\b[^>]*>[\s\S]*?<\/div>)/, '$1<div class="power-powered"><span>Powered by</span><span aria-hidden="true">|</span><span class="power-vendor"><img src="/assets/images/code-signing-tools/microsoft.svg" alt="Microsoft" width="22" height="22"><span>' + title + '</span></span></div>');
  main = main.replace(/<nav\b[^>]*aria-label="On this page"[^>]*>/g, tag => tag.replace(/class="([^"]*)"/, 'class="$1 product-section-nav"'));
  main = main.replace(/(<section\b[^>]*id="(?:security|govern)"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>SECURITY &amp; COMPLIANCE</h2><p class="hosting-section-intro">$2</p>');
  main = main.replace(/(<section\b[^>]*id="why"[^>]*>[\s\S]*?)<h2[^>]*>([\s\S]*?)<\/h2>/, '$1<h2>Why XcellHost For ' + title + '</h2><p class="hosting-section-intro">$2</p>');
  const feedback = '<section class="sec" id="customer-feedback"><div class="wrap"><div class="sh rv"><h2>What Customers Say</h2><p>Request customer references relevant to your ' + title + ' deployment and support requirements.</p></div><button class="btn btn-orange" data-open="xhCallback" data-topic="' + title + ' customer references">Request Customer References</button></div></section>';
  main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/, section => {
    section = section.replaceAll('class="fq open"', 'class="fq"').replaceAll('aria-expanded="true"', 'aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/g, '<i aria-hidden="true">+</i>');
    const items = [...section.matchAll(/<div class="fq"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0]);
    if (items.length !== 12) throw new Error(slug + ': expected 12 FAQs, found ' + items.length);
    return feedback + '<section class="sec" id="faq"><div class="wrap"><div class="sh rv"><h2>Frequently Asked Questions</h2></div><div class="faq">' + [items.slice(0, 6), items.slice(6)].map(col => '<div class="hosting-faq-column">' + col.join('') + '</div>').join('') + '</div></div></section>';
  });
  function localLinks(html) {
    return html.replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"')
      .replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g, 'href="/$1" target="_top"')
      .replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/').replaceAll('BUY NOW', 'Buy Now');
  }
  main = localLinks(main);
  let script = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]);
  script = script.replace(/\binnerHeight\b/g, 'parent.innerHeight')
    .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
    .replace('y=parent.innerHeight*.32', 'y=window.hostingViewportFocus()');
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
  const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(l => !l.includes('canonical')).join('\n');
  const css = ['consulting-faq', 'hero-ask-ai', 'section-navigation-flow', 'hosting-tools', 'power-platform'].map(name => '<link rel="stylesheet" href="/assets/styles/' + name + '.css">').join('');
  fs.writeFileSync(path.join(root, 'public/imported-' + slug + '.html'), '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + title + ' | XcellHost</title>' + links + styles + css + '</head><body data-power-platform="' + slug + '">' + main + '<script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', title + ' enquiry:') + script + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>');
console.log(slug + ': preserved source tools and 12 FAQs');
}
