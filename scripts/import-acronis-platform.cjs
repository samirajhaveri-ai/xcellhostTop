const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const pages = [
  { source: 'acronis-ai-solution', title: 'Acronis AI Platform', hero: 'acHero', input: process.argv[2] },
  { source: 'acronis-cyberfit-score', title: 'Acronis #CyberFit Score', hero: 'fsHero', input: process.argv[3] },
  { source: 'acronis-ransomware-warranty', title: 'Acronis Anti-Ransomware Warranty', hero: 'awHero', input: process.argv[4] },
];
if (pages.some(page => !page.input)) throw new Error('Pass the three supplied Acronis HTML files: AI, CyberFit Score, ransomware warranty.');
const destinations = {
  'acronis': '/vendor-partners/acronis',
  'acronis-ai': '/acronis-ai',
  'acronis-cyberfit-score': '/cyberfit-score-tool',
  'acronis-ransomware-warranty': '/anti-ransomware-warranty',
  'gen-ai': '/acronis-genai',
};
function localRoute(href) {
  const slug = href.replace(/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)/, '').replace(/\.html(?=$|#)/, '').replace(/^\/?xcellhost-/, '').replace(/^\//, '');
  return destinations[slug] || '/' + slug;
}
function localLinks(html) {
  return html.replace(/href="([^"]+)"/g, (attribute, href) => {
    if (/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)(?:\/|$)/.test(href) || /^[a-z0-9-]+\.html(?:#|$)/.test(href)) return 'href="' + localRoute(href) + '" target="_top"';
    return attribute;
  });
}
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const integration = fs.readFileSync(path.join(root, 'scripts/acronis-solutions-integration.js'), 'utf8');
for (const page of pages) {
  const source = fs.readFileSync(page.input, 'utf8');
  let main = localLinks(source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1])
    .replace('href="#">Solutions', 'href="/category/solutions" target="_top">Solutions')
    .replace('href="#">Acronis', 'href="/vendor-partners/acronis" target="_top">Acronis');
  if (page.source === 'acronis-ai-solution') {
    main = main.replace(/<!-- ================= VIDEO ================= -->\s*<section\b[^>]*\bid="watch"[^>]*>[\s\S]*?<\/section>\s*/, '');
  }
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
    .replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
  const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
  const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
  const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
  let runtime = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0])
    .replace(/(['"])([a-z0-9-]+)\.html\1/g, (_, quote, slug) => quote + localRoute(slug + '.html') + quote)
    .replace(/\binnerHeight\b/g, 'parent.innerHeight')
    .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
    .replaceAll("cf.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", 'window.hostingJumpTo(cf.id)')
    .replaceAll("q.scrollIntoView({behavior:R?'auto':'smooth',block:'center'})", 'window.hostingJumpTo(q.id)')
    .replace('return e.getBoundingClientRect();});\n      shs.forEach', 'var r=e.getBoundingClientRect(),ft=window.frameElement?frameElement.getBoundingClientRect().top:0;return {top:r.top+ft,bottom:r.bottom+ft,height:r.height};});\n      shs.forEach');
  if (page.source === 'acronis-cyberfit-score') {
    runtime = runtime.replace(/var qGo=\$id\('qGo'\);if\(qGo\)qGo\.addEventListener\('click',function\(\)\{[\s\S]*?\},60\);\}\);/, `var qGo=$id('qGo');if(qGo)qGo.addEventListener('click',function(e){e.preventDefault();e.stopPropagation();if(!qLast)return;XH.open('xhCallback',{topic:'Acronis #CyberFit Score: '+qLast.cnt.ws+' workstations, '+qLast.cnt.sv+' servers, '+qLast.cnt.vm+' VMs, '+(qLast.y?'yearly':'monthly')+' billing. Items: '+qLast.lines.map(function(i){return i.n+' × '+i.q;}).concat(qLast.quoted).join(', ')});});`);
  }
  const overrides = `<style>#${page.hero} .hero-grid>*{min-width:0}#${page.hero} .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#${page.hero} .lh-title .nm{display:inline}#import-status:empty{display:none}#import-status{position:absolute;left:18px;max-width:calc(100% - 36px);z-index:500;background:#0b132b;color:white;padding:12px 18px;border-radius:10px}</style>`;
  const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>' + page.title + ' | XcellHost</title>' + fonts + styles + overrides + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main">' + main + '</main><p id="import-status" role="status" aria-live="polite"></p><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core.replaceAll('Podcast enquiry:', page.title + ' enquiry:') + '<script>' + integration + '</script>' + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
  for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new Function(script[1]);
  fs.writeFileSync(path.join(root, 'public/imported-' + page.source + '.html'), html);
  console.log('Imported ' + page.title + ' from hero through related services, with supplied animations, tools, pricing and FAQs.');
}
