const fs = require('node:fs');
const path = require('node:path');

if (!process.argv[2]) throw new Error('Pass the supplied ot-assessment.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const originalMain = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
const boundary = originalMain.search(/<section\b[^>]*id="faq"/);
if (boundary < 0) throw new Error('The supplied OT Assessment page must contain its FAQ boundary.');
// Copy through How to engage; retain the Angular page's existing FAQ and closing sections.
function localLinks(html) {
  return html.replace(/href="([^"]+)"/g, (attribute, href) => {
    if (href === '#contact') return 'href="#ppCtaT"';
    if (href === '#faq') return 'href="#ppFaq"';
    if (/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)(?:\/|$)/.test(href) || /^[a-z0-9-]+\.html(?:#|$)/.test(href)) {
      let route = href.replace(/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)/, '').replace(/\.html(?=$|#)/, '').replace(/^\/?xcellhost-/, '/');
      if (!route.startsWith('/')) route = '/' + route;
      if (route === '/purple-team') route = '/purple-team-assessment';
      return 'href="' + route + '" target="_top"';
    }
    return attribute;
  });
}
const content = localLinks(originalMain.slice(0, boundary))
  .replace('href="#">Security', 'href="/category/security" target="_top">Security')
  .replace('href="#">Security Assessment', 'href="/category/security" target="_top">Security Assessment');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const titleStyles = '<style>#otHero .ot-top>*{min-width:0}#otHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#otHero .lh-title .nm{display:inline}</style>';
const existing = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = existing.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'OT Assessment enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0])
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
  .replace('(vh*.82-r.top)', '(vh*.82-r.top-(window.frameElement?frameElement.getBoundingClientRect().top:0))');
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>OT Assessment | XcellHost</title>' + fonts + styles + titleStyles + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main">' + content + '</main><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-ot-assessment.html'), html);
console.log('Imported OT Assessment hero through How to engage, with five animated industrial scenes, Purdue explorer, scroll-linked methodology, site pricing, site scoper, IEC 62443 zone checklist and engagement steps.');

