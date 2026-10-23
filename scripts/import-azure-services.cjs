const fs = require('node:fs');
const path = require('node:path');

if (!process.argv[2]) throw new Error('Pass the supplied azure-services.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const originalMain = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
const boundary = originalMain.search(/<section\b[^>]*id="faq"/);
if (boundary < 0) throw new Error('The supplied Microsoft Azure Services page must contain its FAQ boundary.');
// Include the FAQ, contact call-to-action and related links after Partners & ecosystem.
const destinations = {
  'microsoft-azure': '/vendor-partners/microsoft-azure',
  'microsoft-365': '/vendor-partners/microsoft-365',
  'acronis': '/vendor-partners/acronis',
  'red-hat': '/vendor-partners/red-hat',
  'digicert': '/vendor-partners/digicert',
  'managed-sentinel': '/managed-microsoft-sentinel',
};
function localRoute(href) {
  const slug = href.replace(/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)/, '').replace(/\.html(?=$|#)/, '').replace(/^\/?xcellhost-/, '').replace(/^\//, '');
  return destinations[slug] || '/' + slug;
}
function localLinks(html) {
  return html.replace(/href="([^"]+)"/g, (attribute, href) => {
    if (/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)(?:\/|$)/.test(href) || /^[a-z0-9-]+\.html(?:#|$)/.test(href)) {
      const route = localRoute(href);
      return 'href="' + route + '" target="_top"';
    }
    return attribute;
  });
}
const content = localLinks(originalMain)
  .replace('href="#">Vendors', 'href="/category/marketplace" target="_top">Vendors');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const titleStyles = '<style>#azHero .az-hg>*{min-width:0}#azHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#azHero .lh-title .nm{display:inline}</style>';
const existing = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = existing.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'Microsoft Azure Services enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0])
  .replace(/(['"])([a-z0-9-]+)\.html\1/g, (_, quote, slug) => quote + localRoute(slug + '.html') + quote)
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
  .replace("TOP=hdr?Math.round(hdr.getBoundingClientRect().height):0", "TOP=Math.round(parent.document.querySelector('.xh-header')?.getBoundingClientRect().height||80)+16")
  .replace('return r.bottom>-80&&r.top<parent.innerHeight+80;', 'var ft=window.frameElement?frameElement.getBoundingClientRect().top:0;return r.bottom+ft>-80&&r.top+ft<parent.innerHeight+80;')
  .replace('if(s.getBoundingClientRect().top<=m)', 'if(s.getBoundingClientRect().top+(window.frameElement?frameElement.getBoundingClientRect().top:0)<=m)')
  .replace("c.scrollIntoView({block:'nearest',inline:'center',behavior:R?'auto':'smooth'})", "c.parentNode.scrollTo({left:c.offsetLeft-c.parentNode.clientWidth/2+c.clientWidth/2,behavior:R?'auto':'smooth'})");
const bridge = `<script>
  document.addEventListener('submit',function(event){
    var form=event.target;if(!form.matches('form[data-xhform="azure-stack"]'))return;
    event.preventDefault();event.stopImmediatePropagation();if(!form.reportValidity())return;
    var submit=form.querySelector('[type="submit"]');if(submit.disabled)return;
    var status=document.getElementById('azureQuoteStatus');
    if(!status){status=document.createElement('p');status.id='azureQuoteStatus';status.setAttribute('role','status');status.setAttribute('aria-live','polite');form.after(status);}
    status.textContent='Preparing your quotation request...';submit.disabled=true;
    document.dispatchEvent(new CustomEvent('import-enquiry',{detail:{payload:Object.assign(Object.fromEntries(new FormData(form)),{summary:form.elements.services.value}),complete:function(result){
      submit.disabled=false;status.replaceChildren();
      if(result.ok&&!result.skipped){status.textContent='Quotation request received. Reference: '+result.ref;return;}
      status.append(document.createTextNode('Your quotation request is ready. '));
      var link=document.createElement('a');link.href=result.fallbackUrl;link.textContent='Email it to our team';link.className='btn btn-orange';status.append(link);
    }}}));
  },true);
</script>`;
const integration = fs.readFileSync(path.join(root, 'scripts/azure-services-integration.js'), 'utf8');
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Microsoft Azure Services | XcellHost</title>' + fonts + styles + titleStyles + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main">' + content + '</main><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + visuals + runtime + '<script>' + integration + '</script><script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-azure-services.html'), html);
console.log('Imported Microsoft Azure Services with the catalogue, partner ecosystem, two-column FAQ, contact call-to-action and related links.');

