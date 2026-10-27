const fs = require('node:fs');
const path = require('node:path');

if (!process.argv[2]) throw new Error('Pass the supplied teams-essentials-frontline.html file.');
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
  .replace('href="#">Cloud', 'href="/category/cloud" target="_top">Cloud');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const titleStyles = '<style>#tefHero .hero-grid>*{min-width:0}#tefHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#tefHero .lh-title .nm{display:inline}</style>';
const existing = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = existing.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'Teams Essentials for Frontline enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0])
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(');
const bridge = `<script>
  document.addEventListener('submit',function(event){
    var form=event.target;if(!form.matches('form[data-xhform="teams-essentials-quote"]'))return;
    event.preventDefault();event.stopImmediatePropagation();if(!form.reportValidity())return;
    var submit=form.querySelector('[type="submit"]');if(submit.disabled)return;
    var status=document.getElementById('teamsQuoteStatus');
    if(!status){status=document.createElement('p');status.id='teamsQuoteStatus';status.setAttribute('role','status');status.setAttribute('aria-live','polite');form.after(status);}
    status.textContent='Preparing your quotation request...';submit.disabled=true;
    document.dispatchEvent(new CustomEvent('import-enquiry',{detail:{payload:Object.fromEntries(new FormData(form)),complete:function(result){
      submit.disabled=false;status.replaceChildren();
      if(result.ok&&!result.skipped){status.textContent='Quotation request received. Reference: '+result.ref;return;}
      status.append(document.createTextNode('Your quotation request is ready. '));
      var link=document.createElement('a');link.href=result.fallbackUrl;link.textContent='Email it to our team';link.className='btn tef-cta';status.append(link);
    }}}));
  },true);
</script>`;
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Teams Essentials for Frontline | XcellHost</title>' + fonts + styles + titleStyles + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main">' + content + '</main><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-teams-essentials-frontline.html'), html);
console.log('Imported Teams Essentials for Frontline hero through Other plans, with five animated crew scenes, crew cost calculator, plan chooser, configurator, FAQs and related plans.');



