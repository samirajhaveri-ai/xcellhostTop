import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

// Import only the guide content; the Angular application supplies the site shell.
const directory = process.argv[2];
if (!directory) throw new Error('Pass the directory containing the three licensing guide HTML files.');
const closingReference = fs.readFileSync(path.join(directory, 'microsoft-365-licensing-guide.html'), 'utf8');
const closingTemplate = closingReference.match(/<section class="sec" id="contact">[\s\S]*?<\/section>/)?.[0];
if (!closingTemplate) throw new Error('Missing licensing advice section.');
const selectedFaqs = {
  'acronis-licensing-guide': [1, 2, 3, 4, 5, 7, 8, 10, 11, 15],
  'microsoft-csp-licensing-guide': [1, 2, 3, 4, 5, 6, 8, 14, 15, 17],
  'microsoft-365-licensing-guide': [1, 2, 3, 4, 6, 8, 10, 11, 13, 17],
};
for (const slug of ['acronis-licensing-guide', 'microsoft-csp-licensing-guide', 'microsoft-365-licensing-guide']) {
  const source = fs.readFileSync(path.join(directory, slug + '.html'), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0];
  const styles = [...source.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/g)].map(m => m[1]).join('\n');
  const scripts = [...source.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)].filter(m => !m[1].includes('application/ld+json'));
  const core = scripts.find(m => m[2].includes('XcellHost v2 core runtime'))?.[2];
  const runtime = scripts.at(-1)?.[2];
  if (!main || !styles || !core || !runtime) throw new Error('Unexpected guide structure: ' + slug);
  // Give the complete title its own grid row above the copy and illustration.
  const heading = main.match(/<div class="crumb"[^>]*>[\s\S]*?<\/div>\s*<h1\b[^>]*>[\s\S]*?<\/h1>/)?.[0];
  if (!heading) throw new Error('Missing guide heading: ' + slug);
  main = main.replace(heading, '').replace(/(<div class="hero-grid [^"]+">)/,
    '$1<div class="licensing-guide-heading">' + heading + '</div>');
  // The shared banner installer supplies the three buttons and five AI icons.
  main = main.replace(/<div class="lh-ctas"[^>]*>[\s\S]*?<\/div>\s*<div class="lh-ask"[^>]*>[\s\S]*?<\/div>/,
    '<div class="xh-banner-actions" data-banner-added-actions></div>');
  main = main.replace(/data-product="[^"]*"/, 'data-product="' +
    (slug.startsWith('microsoft-') ? 'All Microsoft Services' : 'All Acronis Services') + '"');
  main = main.replace(/<div class="lh-powered(?: [^"]*)?"[^>]*>[\s\S]*?<\/div>/g, '');
  let faqIndex = 0;
  main = main.replace(/<div class="fq(?: open)?">[\s\S]*?<\/div>\s*<\/div>/g,
    faq => selectedFaqs[slug].includes(++faqIndex) ? faq : '');
  const faqCount = (main.match(/class="fq(?: open)?"/g) || []).length;
  if (faqCount !== 10) throw new Error('Guide must include exactly 10 FAQs: ' + slug);
  // The Angular page renders Insights and the advice panel after this document.
  main = main.replace(closingTemplate, '');
  for (const code of [core, runtime]) new vm.Script(code, { filename: slug });
  const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(s => /fonts\.(googleapis|gstatic)\.com/.test(s)).join('\n');
  const title = source.match(/<title>([\s\S]*?)<\/title>/)?.[1] || slug;
  const bridge = `(function(){
    const open=XH.open;
    XH.open=function(id,options){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:options?.topic||${JSON.stringify(title)}}));return;}open(id,options);};
    XH.cart={add:item=>document.dispatchEvent(new CustomEvent('import-cart',{detail:item}))};
    document.addEventListener('submit',event=>{const form=event.target;if(!form.matches('[data-xhform]'))return;event.preventDefault();event.stopImmediatePropagation();if(!form.reportValidity())return;document.dispatchEvent(new CustomEvent('import-training-enquiry',{detail:Object.fromEntries(new FormData(form))}));},true);
    document.addEventListener('click',event=>{const a=event.target.closest('a[href]');if(!a||a.getAttribute('href').startsWith('#'))return;const url=new URL(a.href,location.href);if(url.origin===location.origin||/^(?:www\\.)?xcellhost\\.(?:cloud|top)$/.test(url.hostname)){a.href=url.pathname.replace(/\\.html$/,'')+url.search+url.hash;a.target='_top';}},true);
  })();`;
  // Retain notifications used by the calculators and download buttons.
  const toast = '<div class="toast" id="xhToast" role="status"><span id="xhToastT"></span></div>';
  const css = `html,body{margin:0;overflow-x:clip}main{display:flow-root}.rv{opacity:1;transform:none}
    .hero.lh.ag-hero,.hero.lh.cg-hero,.hero.lh.lg-hero{min-height:0;padding-bottom:24px}
    .hero.lh .stage{min-height:0;padding:0;margin-bottom:0}
    .hero.lh .hero-grid{column-gap:32px;row-gap:10px;align-items:start;grid-template-columns:minmax(0,1.5fr) minmax(0,1fr)}
    .licensing-guide-heading{grid-column:1/-1;min-width:0}
    .hero.lh .lh-title{font-size:clamp(18px,2vw,28px)!important;white-space:nowrap;margin-bottom:0!important}
    .hero.lh .lh-title .nm{display:inline}
    .hero.lh .xh-banner-actions .xh-banner-button{min-height:44px;padding:12px 14px;font-size:12px;border-radius:11px}
    .hero.lh .xh-banner-ai{margin-top:22px;padding:11px 14px;border-radius:18px}

    @media(max-width:980px){.hero.lh .hero-grid{grid-template-columns:minmax(0,1fr)}}
    @media(max-width:640px){.hero.lh .lh-title{white-space:normal;font-size:clamp(20px,4.5vw,26px)!important}.hero.lh .xh-banner-actions .xh-banner-button{padding:10px 9px;font-size:10px}}
  `;
  fs.writeFileSync(`public/imported-${slug}.html`, `<!doctype html><html lang="en-IN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title>${fonts}<style>${styles}\n${css}</style></head><body>${main}${toast}<script>${core}</script><script>${bridge}</script><script>${runtime}</script></body></html>`);
  console.log('Imported ' + slug + ' with ' + faqCount + ' FAQs');
}
