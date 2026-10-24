const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) throw new Error('Pass the supplied aws-services.html file.');
const source = fs.readFileSync(input, 'utf8');
const destinations = {
  'amazon-web-services': '/vendor-partners/amazon-web-services',
  'aws-services': '/vendor-partners/amazon-web-services',
  'azure-services': '/vendor-partners/microsoft-azure',
  'google-cloud': '/vendor-partners/google-cloud',
  'red-hat': '/vendor-partners/red-hat',
  'digicert': '/vendor-partners/digicert',
  'managed-sentinel': '/managed-microsoft-sentinel',
  'druva': '/explore-druva-platform',
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
const content = localLinks(source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1]);
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, n) => 'calc(var(--page-vh,1vh) * ' + n + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'Amazon Web Services enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0])
  .replace(/(['"])([a-z0-9-]+)\.html\1/g, (_, quote, slug) => quote + localRoute(slug + '.html') + quote)
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
  .replace('TOP=hdr?Math.round(hdr.getBoundingClientRect().height):0', "TOP=Math.round(parent.document.querySelector('.xh-header')?.getBoundingClientRect().height||80)+16")
  .replace('if(el.getBoundingClientRect().top<=m)', 'if(el.getBoundingClientRect().top+(window.frameElement?frameElement.getBoundingClientRect().top:0)<=m)')
  .replace("el3.scrollIntoView({block:'nearest',behavior:R?'auto':'smooth'})", 'window.hostingJumpTo(el3.id)');
const bridge = `<script>
document.addEventListener('submit',function(event){
  var form=event.target;if(!form.matches('form[data-xhform="aws-stack"]'))return;
  event.preventDefault();event.stopImmediatePropagation();if(!form.reportValidity())return;
  var submit=form.querySelector('[type="submit"]');if(submit.disabled)return;
  var status=document.getElementById('awsQuoteStatus');
  if(!status){status=document.createElement('p');status.id='awsQuoteStatus';status.setAttribute('role','status');status.setAttribute('aria-live','polite');form.after(status);}
  status.textContent='Preparing your quotation request...';submit.disabled=true;
  document.dispatchEvent(new CustomEvent('import-enquiry',{detail:{payload:Object.assign(Object.fromEntries(new FormData(form)),{summary:form.elements.services.value}),complete:function(result){
    submit.disabled=false;status.replaceChildren();
    if(result.ok&&!result.skipped){status.textContent='Quotation request received. Reference: '+result.ref;return;}
    status.append(document.createTextNode('Your quotation request is ready. '));
    var link=document.createElement('a');link.href=result.fallbackUrl;link.textContent='Email it to our team';link.className='btn btn-orange';status.append(link);
  }}}));
},true);
</script>`;
const integration = fs.readFileSync(path.join(root, 'scripts/aws-services-integration.js'), 'utf8');
const overrides = '<style>#awHero .aw-hg>*{min-width:0}#awHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#awHero .lh-title .nm{display:inline}#awsQuoteStatus{margin-top:16px;line-height:1.6}#import-status:empty{display:none}#import-status{position:absolute;left:18px;max-width:calc(100% - 36px);z-index:500;background:#0b132b;color:white;padding:12px 18px;border-radius:10px}</style>';
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Amazon Web Services in India | XcellHost</title>' + fonts + styles + overrides + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main" data-customer-testimonials="off">' + content + '</main><p id="import-status" role="status" aria-live="polite"></p><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + visuals + runtime + '<script>' + integration + '</script><script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
for (const script of html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)) new Function(script[1]);
fs.writeFileSync(path.join(root, 'public/imported-aws-services.html'), html);
console.log('Imported the supplied AWS page, including catalogue, animations, tools, partners, certifications, FAQs and contact content.');
