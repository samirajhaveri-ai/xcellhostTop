const fs = require('node:fs');
const path = require('node:path');

if (!process.argv[2]) throw new Error('Pass the supplied cyber-security-audit.html file.');
const root = path.resolve(__dirname, '..');
const source = fs.readFileSync(process.argv[2], 'utf8');
const originalMain = source.match(/<main\b[^>]*>([\s\S]*?)<\/main>/)[1];
const boundary = originalMain.search(/<section\b[^>]*id="faq"/);
if (boundary < 0) throw new Error('The supplied Cyber Security Audit page must contain its FAQ boundary.');
// Copy through seven engagement steps; retain the Angular page's existing FAQ and closing sections.
function localLinks(html) {
  return html.replace(/href="([^"]+)"/g, (attribute, href) => {
    if (href === '#contact') return 'href="#ppCtaT"';
    if (href === '#faq') return 'href="#ppFaq"';
    if (/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)(?:\/|$)/.test(href) || /^[a-z0-9-]+\.html(?:#|$)/.test(href)) {
      let route = href.replace(/^https?:\/\/(?:www\.)?xcellhost\.(?:cloud|top)/, '').replace(/\.html(?=$|#)/, '').replace(/^\/?xcellhost-/, '/');
      if (!route.startsWith('/')) route = '/' + route;
      return 'href="' + route + '" target="_top"';
    }
    return attribute;
  });
}
const content = localLinks(originalMain.slice(0, boundary))
  .replace('href="#">Security', 'href="/category/security" target="_top">Security')
  .replace('href="#">Security Assessment', 'href="/category/security" target="_top">Security Assessment');
const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m => m[0]).join('\n')
  .replace(/(\d*\.?\d+)vh\b/g, (_, value) => 'calc(var(--page-vh,1vh) * ' + value + ')');
const fonts = [...source.matchAll(/<link\b[^>]*>/g)].map(m => m[0]).filter(link => !link.includes('canonical')).join('\n');
const titleStyles = '<style>#caHero .ca-top>*{min-width:0}#caHero .lh-title{font-size:var(--hosting-title-size,44px)!important;white-space:nowrap}#caHero .lh-title .nm{display:inline}</style>';
const existing = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8');
const core = existing.match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0]
  .replaceAll('Podcast enquiry:', 'Cyber Security Audit enquiry:');
const effects = source.match(/\/\* hero network canvas[\s\S]*?(?=\/\* chatbot \*\/)/)[0];
const visuals = '<script>(function(){var XH=window.XH,$=XH.$,$$=XH.$$;' + effects + '})();</script>';
const runtime = localLinks([...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0])
  .replace(/\binnerHeight\b/g, 'parent.innerHeight')
  .replace(/(?<![\w.])(?:window\.)?scrollTo\(/g, 'window.scrollOuter(')
  .replace("f.scrollIntoView({behavior:R?'auto':'smooth',block:'center'})", 'window.hostingJumpTo(f.id)')
  .replace("c.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", 'window.hostingJumpTo(c.id)');
const bridge = `<script>
  document.addEventListener('submit',function(event){
    var form=event.target;if(!form.matches('form[data-xhform="audit-quote"]'))return;
    event.preventDefault();event.stopImmediatePropagation();if(!form.reportValidity())return;
    var submit=form.querySelector('[type="submit"]');if(submit.disabled)return;
    var status=document.getElementById('auditQuoteStatus');
    if(!status){status=document.createElement('p');status.id='auditQuoteStatus';status.setAttribute('role','status');status.setAttribute('aria-live','polite');form.after(status);}
    status.textContent='Preparing your quotation request...';submit.disabled=true;
    document.dispatchEvent(new CustomEvent('import-enquiry',{detail:{payload:Object.assign(Object.fromEntries(new FormData(form)),{summary:form.elements.scope.value}),complete:function(result){
      submit.disabled=false;status.replaceChildren();
      if(result.ok&&!result.skipped){status.textContent='Quotation request received. Reference: '+result.ref;return;}
      status.append(document.createTextNode('Your quotation request is ready. '));
      var link=document.createElement('a');link.href=result.fallbackUrl;link.textContent='Email it to our team';link.className='btn btn-orange';status.append(link);
    }}}));
  },true);
</script>`;
const html = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Cyber Security Audit | XcellHost</title>' + fonts + styles + titleStyles + '<link rel="stylesheet" href="/assets/styles/hero-ask-ai.css"><link rel="stylesheet" href="/assets/styles/faq-layout.css"></head><body><main id="main">' + content + '</main><script src="/assets/scripts/hosting-tools-viewport.js"></script>' + core + bridge + visuals + runtime + '<script src="/assets/scripts/hero-ask-ai.js"></script></body></html>';
fs.writeFileSync(path.join(root, 'public/imported-cyber-security-audit.html'), html);
console.log('Imported Cyber Security Audit hero through seven engagement steps, with five animated audit scenes, framework scope filter, methodology timeline, sampling illustration, pricing, quotation form, scope estimator and readiness checker.');

