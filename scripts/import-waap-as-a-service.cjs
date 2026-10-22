const fs = require('node:fs');
const path = require('node:path');

if (!process.argv[2]) throw new Error('Pass the supplied waap-as-a-service.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const originalMain = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
const boundary = originalMain.search(/<section\b[^>]*id="faq"/);
if (boundary < 0) throw new Error('The supplied WAAP as a Service page must contain its FAQ boundary.');
// Copy through Why XcellHost; retain the Angular page's existing FAQ and closing sections.
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
  .replace('href="#">Security Operations', 'href="/category/security" target="_top">Security Operations');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const titleStyles = '<style>#wpHero .wp-top>*{min-width:0}#wpHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#wpHero .lh-title .nm{display:inline}</style>';
const existing = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = existing.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'WAAP as a Service enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0])
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
  .replace("if(t)t.scrollIntoView({behavior:R?'auto':'smooth',block:'center'})", 'if(t)window.hostingJumpTo(t.id)')
  .replace("return $(a.getAttribute('href'));", "return $(a.getAttribute('href'))||parent.document.getElementById(a.hash.slice(1));")
  .replace("var y=scrollY+170,cur=0;secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i;});", "var y=170,cur=0;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top+(s.ownerDocument===d&&window.frameElement?frameElement.getBoundingClientRect().top:0)<=y)cur=i;});");
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>WAAP as a Service | XcellHost</title>' + fonts + styles + titleStyles + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main">' + content + '</main><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-waap-as-a-service.html'), html);
console.log('Imported WAAP as a Service hero through Why XcellHost, with five animated protection scenes, coverage orbit, engine tabs, managed dashboard, pricing configurator, readiness quiz, traffic sizer, onboarding and Why XcellHost.');

