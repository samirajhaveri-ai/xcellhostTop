const fs = require('node:fs');
const path = require('node:path');

if (!process.argv[2]) throw new Error('Pass the supplied red-hat.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const originalMain = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
// Include the supplied FAQ, quotation form and vendor hubs immediately after the builder.
let content = originalMain;
const routeAliases = {
  '/sap-s4hana-private-cloud': '/sap-s4-hana-private-cloud',
  '/sap-b1-hana-on-cloud': '/sap-b1-cloud',
};
function localRoute(href) {
  let route = href.replace(/^https?:\/\/(?:www\.)?(?:xcellhost\.cloud|xcellhost\.top)/, '');
  route = route.replace(/\.html(?=$|#)/, '').replace(/^\/xcellhost-/, '/');
  return routeAliases[route] || route || '/';
}
content = content.replace(/href="([^"]+)"/g, (attribute, href) => {
  if (/^https?:\/\/(?:www\.)?(?:xcellhost\.cloud|xcellhost\.top)(?:\/|$)/.test(href) || href.startsWith('/')) {
    return 'href="' + localRoute(href) + '" target="_top"';
  }
  if (/^[a-z0-9-]+\.html(?:#|$)/.test(href)) return 'href="' + localRoute('/' + href) + '" target="_top"';
  return attribute;
});
// Link the new vendor cards to the hubs already used by the site's vendor menu.
const vendorHubs = new Set(['acronis', 'microsoft-365', 'tsplus', 'microsoft-azure', 'amazon-web-services', 'google-cloud', 'ibm-multicloud', 'digicert', 'sectigo']);
content = content.replace(/(<a class="rh-v rv" href=")\/([^"/]+)"/g,
  (attribute, start, slug) => vendorHubs.has(slug) ? start + '/vendor-partners/' + slug + '"' : attribute);
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const existing = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = existing.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'Red Hat enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
let runtime = [...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0]
  .replace(/\binnerHeight\b/g, 'parent.innerHeight');
// Scroll the host page to the new form, retaining the source's prefill and focus behavior.
runtime = runtime.replace("q.scrollIntoView({behavior:R?'auto':'smooth',block:'center'})", "window.hostingJumpTo('rhQuote')");
const overrides = `<style>
  #rhHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}
  #rhHero .lh-title .nm{display:inline}
  #import-status:empty{display:none}
  #import-status{position:absolute;bottom:18px;left:24px;z-index:300;background:#041e42;color:#fff;border-radius:10px;padding:12px 18px}
</style>`;
const bridge = `<script>
  XH.toast=function(message){var status=document.getElementById('import-status');status.textContent=message;clearTimeout(status._timer);status._timer=setTimeout(function(){status.textContent='';},3000);};
  document.addEventListener('click',function(event){var a=event.target.closest('a[href^="/"]');if(a)a.target='_top';});
  document.addEventListener('submit',function(event){
    var form=event.target;if(!form.matches('form[data-xhform="redhat-quote"]'))return;
    event.preventDefault();event.stopImmediatePropagation();if(!form.reportValidity())return;
    var submit=form.querySelector('[type="submit"]');if(submit.disabled)return;
    var payload=Object.fromEntries(new FormData(form));payload.servers=document.getElementById('rhHosts').value;
    var status=document.getElementById('rhQuoteStatus');
    if(!status){status=document.createElement('div');status.id='rhQuoteStatus';status.setAttribute('role','status');status.setAttribute('aria-live','polite');form.after(status);}
    status.textContent='Preparing your quotation request…';submit.disabled=true;
    document.dispatchEvent(new CustomEvent('import-enquiry',{detail:{payload:payload,complete:function(result){
      submit.disabled=false;status.replaceChildren();
      if(result.ok&&!result.skipped){status.textContent='Quotation request received. Reference: '+result.ref;return;}
      status.append(document.createTextNode('Your quotation request is ready. '));
      var link=document.createElement('a');link.href=result.fallbackUrl;link.textContent='Email it to our team';link.className='btn btn-orange btn-sm';status.append(link);
    }}}));
  },true);
</script>`;
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Red Hat | XcellHost</title>' + fonts + styles + overrides + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main>' + content + '</main><p id="import-status" role="status" aria-live="polite"></p><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-red-hat.html'), html);
console.log('Imported Red Hat hero, Stack Builder, FAQs, quotation form and vendor hubs.');
