const fs = require('node:fs');
const path = require('node:path');

const input = process.argv[2];
if (!input) throw new Error('Pass the supplied SSL Installation Service HTML file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(input, 'utf8');
const coreSource = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = coreSource.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'SSL Installation Service enquiry:');
const destinations = {
  'xcellhost-47-day-ssl': '47-days-ssl',
  'digicert-standard-ssl': 'digicert-standard-ssl',
  'geotrust-quickssl-premium': 'geotrust-quickssl-premium',
  'xcellhost-rapidssl': 'rapidssl-ssl-certificates',
  'xcellhost-thawte-ssl': 'thawte-ssl-certificates',
  'xcellhost-zoho-assist': 'company/remote-assist',
  'xcellhost-ssl-installation-service': 'ssl-installation-service',
};
function routeLinks(html) {
  return html.replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g,
    (_, slug) => 'href="/' + (destinations[slug] || slug.replace(/^xcellhost-/, '')) + '" target="_top"');
}
let main = routeLinks(source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0])
  .replaceAll('href="https://www.xcellhost.top/"', 'href="/" target="_top"')
  .replace('href="#">Digital Trust', 'href="/category/digital-trust" target="_top">Digital Trust')
  .replace('class="sl-sub"', 'class="sl-sub product-section-nav"');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
// Retain the supplied particle network and pointer tilt alongside the page-specific carousel.
const heroEffects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + heroEffects + '})();</script>';
let runtime = [...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/window\.scrollTo\(/g, 'window.scrollOuter(');
// The parent scrolls the growing embedded document. Section navigation is supplied by the app.
runtime = runtime.replace('var y=nav.getBoundingClientRect().bottom+20', 'var y=window.hostingViewportFocus()');
const overrides = `<style>
  #import-status:empty{display:none}
  #import-status{position:fixed;bottom:24px;left:24px;z-index:500;background:var(--navy);color:white;padding:12px 20px;border-radius:12px}
  .sl-sub{--sl-hh:0px}
  @media(min-width:981px){
    #slHero .lh-title{font-size:var(--hosting-title-size,28px)!important;white-space:nowrap}
    #slHero .lh-title .nm{display:inline}
  }
  @media(prefers-reduced-motion:reduce){html{scroll-behavior:auto}}
</style>`;
const bridge = `<script>
  XH.toast=function(message){var status=document.getElementById('import-status');status.textContent=message;clearTimeout(status._timer);status._timer=setTimeout(function(){status.textContent='';},3000);};
</script>`;
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>SSL Installation Service | XcellHost</title>' + links + styles + overrides + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/section-navigation-flow.css"></head><body>' + main + '<p id="import-status" role="status" aria-live="polite"></p><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-ssl-installation-service.html'), html);
console.log('Imported SSL Installation Service with five hero scenes, page tools and related certificates.');
