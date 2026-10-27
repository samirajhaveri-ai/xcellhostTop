const fs = require('node:fs');
const path = require('node:path');

if (!process.argv[2]) throw new Error('Pass the supplied microsoft-365-f1.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const originalMain = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
// Copy through Other Microsoft 365 plans; the shared plan page supplies insights below.
function localLinks(html) {
  return html.replace(/href="([^"]+)"/g, (attribute, href) => {
    if (/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)(?:\/|$)/.test(href) || /^[a-z0-9-]+\.html(?:#|$)/.test(href)) {
      let route = href.replace(/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)/, '').replace(/\.html(?=$|#)/, '').replace(/^\/?xcellhost-/, '/');
      if (!route.startsWith('/')) route = '/' + route;
      const aliases = {
        '/microsoft-365': '/microsoft-365-enterprise',
        '/office-365-e5': '/microsoft-365-enterprise-office365#plans',
        '/entra-id-p2': '/microsoft-entra-id-p2',
        '/entra-id-governance': '/microsoft-entra-id-governance',
        '/entra-suite': '/microsoft-entra-suite',
        '/mxdr-for-microsoft': '/managed-microsoft-xdr',
        '/managed-sentinel': '/managed-microsoft-sentinel',
        '/project-server': '/microsoft-project-server',
      };
      const hashAt = route.indexOf('#');
      const slug = hashAt < 0 ? route : route.slice(0, hashAt);
      if (aliases[slug]) route = aliases[slug] + (hashAt < 0 || aliases[slug].includes('#') ? '' : route.slice(hashAt));
      return 'href="' + route + '" target="_top"';
    }
    return attribute;
  });
}
const content = localLinks(originalMain)
  .replace('href="#">Cloud', 'href="/category/cloud" target="_top">Cloud');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const titleStyles = '<style>#f1Hero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#f1Hero .lh-title .nm{display:inline}</style>';
const existing = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = existing.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'Microsoft 365 F1 enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0])
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/window\.scrollTo\(/g, 'window.scrollOuter(')
  .replace('(parent.innerHeight*.85-r.top)', '(parent.innerHeight*.85-r.top-(window.frameElement?frameElement.getBoundingClientRect().top:0))')
  .replace("s.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", 'window.hostingJumpTo(s.id)')
  .replace(/(['"])([a-z0-9-]+)\.html\1/g, (_, quote, slug) => quote + ('/' + slug) + quote)
  .replace("setT('chB',N[best]);", "setT('chB',N[best]);$id('chGo').target=best==='f1'?'_self':'_top';")
  .replace("XH.open('xhCallback',{topic:topic});", "XH.open('xhCallback',{topic:topic+' · '+summary(c)});");
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Microsoft 365 F1 | XcellHost</title>' + fonts + styles + titleStyles + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main">' + content + '</main><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-microsoft-365-f1.html'), html);
console.log('Imported Microsoft 365 F1 hero through Other Microsoft 365 plans, with five animated scenes, frontline mix planner, plan chooser, configurator, FAQs and related plans.');



