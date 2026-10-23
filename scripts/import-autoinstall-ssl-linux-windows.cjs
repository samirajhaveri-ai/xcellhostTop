const fs = require('node:fs');
const path = require('node:path');

if (!process.argv[2]) throw new Error('Pass the supplied autoinstall-ssl-for-linux-and-windows.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const originalMain = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
const boundary = originalMain.search(/<section\b[^>]*id="faq"/);
if (boundary < 0) throw new Error('The supplied AutoInstall SSL for Linux & Windows page must contain its FAQ boundary.');
// Copy through Why XcellHost; retain the Angular page's existing FAQ and closing sections.
function localLinks(html) {
  return html.replace(/href="([^"]+)"/g, (attribute, href) => {
    if (href === '#contact') return 'href="#ppCtaT"';
    if (href === '#faq') return 'href="#ppFaq"';
    if (/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)(?:\/|$)/.test(href) || /^[a-z0-9-]+\.html(?:#|$)/.test(href)) {
      let route = href.replace(/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)/, '').replace(/\.html(?=$|#)/, '').replace(/^\/?xcellhost-/, '/');
      if (!route.startsWith('/')) route = '/' + route;
      if (route === '/rapidssl') route = '/rapidssl-ssl-certificates';
      if (route === '/sectigo-acme-caas-dv') route = '/sectigo-acme-certificate-as-a-service';
      if (route === '/47-day-ssl') route = '/47-days-ssl';
      if (route === '/certificate-lifecycle-management-platforms') route = '/certificate-mgmt-solutions';
      return 'href="' + route + '" target="_top"';
    }
    return attribute;
  });
}
const content = localLinks(originalMain.slice(0, boundary))
  .replace('href="#">Digital Trust', 'href="/category/digital-trust" target="_top">Digital Trust')
  .replace('href="#">SSL Automation Tools', 'href="/category/digital-trust" target="_top">SSL Automation Tools');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const titleStyles = '<style>#axlHero .axl-hg>*{min-width:0}#axlHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#axlHero .lh-title .nm{display:inline}</style>';
const existing = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = existing.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'AutoInstall SSL for Linux & Windows enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0])
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
  .replace('h*.85-r.top', 'h*.85-r.top-(window.frameElement?frameElement.getBoundingClientRect().top:0)')
  .replaceAll("'xcellhost-ssl-installation-service.html'", "'/ssl-installation-service'")
  .replaceAll("'autoinstall-ssl-for-web-hosts.html'", "'/autoinstall-ssl-for-web-hosts'")
  .replaceAll("'#contact'", "'#ppCtaT'")
  .replace('go.href=M[3];', "go.href=M[3];go.target=M[3].charAt(0)==='#'?'':'_top';");
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AutoInstall SSL for Linux & Windows | XcellHost</title>' + fonts + styles + titleStyles + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main">' + content + '</main><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-autoinstall-ssl-for-linux-and-windows.html'), html);
console.log('Imported AutoInstall SSL for Linux & Windows hero through Why XcellHost, with five animated server-agent scenes, architecture flow, renewal countdown, per-server pricing configurator, renewal effort calculator, compatibility checker, setup and Why XcellHost.');

