const fs = require('node:fs');
const path = require('node:path');

if (!process.argv[2]) throw new Error('Pass the supplied office-365-e1-nonprofit.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const originalMain = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
// Copy through Other plans; the shared plan page supplies insights below.
function localLinks(html) {
  return html.replace(/href="([^"]+)"/g, (attribute, href) => {
    if (/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)(?:\/|$)/.test(href) || /^[a-z0-9-]+\.html(?:#|$)/.test(href)) {
      let route = href.replace(/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)/, '').replace(/\.html(?=$|#)/, '').replace(/^\/?xcellhost-/, '/');
      if (!route.startsWith('/')) route = '/' + route;
      const aliases = {
        '/microsoft-365': '/microsoft-365-enterprise',
        '/entra-id-p1': '/microsoft-entra-id-p1',
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
  .replaceAll('href="#configure"', 'href="#pricing"');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const titleStyles = '<style>#e1nHero .hero-grid>*{min-width:0}#e1nHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#e1nHero .lh-title .nm{display:inline}</style>';
const existing = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = existing.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'Office 365 E1 Nonprofit enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0])
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
  .replace("f.scrollIntoView({behavior:R?'auto':'smooth',block:'center'})", 'window.hostingJumpTo(f.id)');
const bridge = `<script>
  document.addEventListener('submit',function(event){
    var form=event.target;if(!form.matches('form[data-xhform="e1n-quote"]'))return;
    event.preventDefault();event.stopImmediatePropagation();if(!form.reportValidity())return;
    var submit=form.querySelector('[type="submit"]');if(submit.disabled)return;
    var status=document.getElementById('e1nQuoteStatus');
    if(!status){status=document.createElement('p');status.id='e1nQuoteStatus';status.setAttribute('role','status');status.setAttribute('aria-live','polite');form.after(status);}
    status.textContent='Preparing your quotation request...';submit.disabled=true;
    document.dispatchEvent(new CustomEvent('import-enquiry',{detail:{payload:Object.assign(Object.fromEntries(new FormData(form)),{summary:form.elements.services.value}),complete:function(result){
      submit.disabled=false;status.replaceChildren();
      if(result.ok&&!result.skipped){status.textContent='Quotation request received. Reference: '+result.ref;return;}
      status.append(document.createTextNode('Your quotation request is ready. '));
      var link=document.createElement('a');link.href=result.fallbackUrl;link.textContent='Email it to our team';link.className='btn btn-orange';status.append(link);
    }}}));
  },true);
</script>`;
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Office 365 E1 Nonprofit | XcellHost</title>' + fonts + styles + titleStyles + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main">' + content + '</main><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-office-365-e1-nonprofit.html'), html);
console.log('Imported Office 365 E1 Nonprofit hero through Nonprofit plans, with five animated scenes, savings calculator, free-tier fit checker, configurator, FAQs and related plans.');



