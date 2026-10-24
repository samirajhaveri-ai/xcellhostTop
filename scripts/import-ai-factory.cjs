const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) throw new Error('Pass the supplied ai-factory.html file.');
const source = fs.readFileSync(input, 'utf8');
function localLinks(html) {
  return html.replace(/href="([^"]+)"/g, (attribute, href) => {
    if (!/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)(?:\/|$)/.test(href) && !/^[a-z0-9-]+\.html(?:#|$)/.test(href)) return attribute;
    let slug = href.replace(/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)/, '').replace(/\.html(?=$|#)/, '').replace(/^\/?xcellhost-/, '').replace(/^\//, '');
    if (slug === 'iso-42001') slug = 'iso-42001ai-risk';
    return 'href="/' + slug + '" target="_top"';
  });
}
const main = localLinks(source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1])
  .replace(/<!-- ================= VIDEO ================= -->\s*<section\b[^>]*\bid="watch"[^>]*>[\s\S]*?<\/section>\s*/, '');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const integration = fs.readFileSync(path.join(root, 'scripts/ai-factory-integration.js'), 'utf8');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = [...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]
  .replace(/function go2\(sel\)\{[^\n]*\}/, "function go2(sel){var e=$(sel);if(e)window.hostingJumpTo(e.id);}")
  .replace('var y=scrollY+200,cur=0;', 'var y=Math.max(0,window.frameElement?-frameElement.getBoundingClientRect().top:scrollY)+200,cur=0;')
  .replace("gU.addEventListener('input',gcalc);gMax.addEventListener('change',gcalc);gcalc();", "function updateGauge(){gcalc();if(R){cur=tgt;gdraw();}}gU.addEventListener('input',updateGauge);gMax.addEventListener('change',updateGauge);gcalc();")
  .replace(/\binnerHeight\b/g, 'parent.innerHeight');
const overrides = '<style>#afHero .af-top>*{min-width:0}#afHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#afHero .lh-title .nm{display:inline}#import-status:empty{display:none}#import-status{position:absolute;left:18px;max-width:calc(100% - 36px);z-index:500;background:#0b132b;color:white;padding:12px 18px;border-radius:10px}#aiFactoryQuoteStatus{margin:16px 0;line-height:1.6}#aiFactoryQuoteStatus a{color:#0066ff}</style>';
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>AI Factory | XcellHost</title>' + fonts + styles + overrides + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main">' + main + '</main><p id="import-status" role="status" aria-live="polite"></p><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', 'AI Factory enquiry:') + '<script>' + integration + '</script>' + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new Function(script[1]);
fs.writeFileSync(path.join(root, 'public/imported-ai-factory.html'), html);
console.log('Imported AI Factory from hero through related services, with supplied animations and tools.');
