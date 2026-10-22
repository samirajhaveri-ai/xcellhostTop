const fs = require('node:fs');
const path = require('node:path');
const { products, aliases, localLinks } = require('./sectigo-import-config.cjs');
const root = path.resolve(__dirname, '..');
function div(html, cls) {
  let start = -1, depth = 0;
  for (const m of html.matchAll(/<div\b[^>]*>|<\/div>/g)) {
    if (start < 0) {
      if (!m[0].match(/class="([^"]+)"/)?.[1].split(/\s+/).includes(cls)) continue;
      start = m.index;
    }
    depth += m[0].startsWith('</') ? -1 : 1;
    if (!depth) return html.slice(start, m.index + m[0].length);
  }
  throw new Error('Missing ' + cls);
}
const controls = {
  ssl: [['Validation','Complete domain-control checks and the organisation checks required by the selected DV, OV or EV certificate.'],['Private Keys','Restrict private-key access to authorised administrators and use a secure key-generation process.'],['Hostname Coverage','Check every required domain and subdomain against the certificate coverage before ordering.'],['TLS Configuration','Review server compatibility and install the complete certificate chain.'],['Renewal Planning','Track expiry, reissues and validation requirements throughout the purchased term.'],['Deployment Evidence','Record installation checks and ownership so future changes can be reviewed.']],
  acme: [['Domain Control','Complete the required domain validation for certificate issuance.'],['Automation Credentials','Restrict ACME account keys and DNS API credentials to the systems that need them.'],['Supported Coverage','Confirm domain coverage, client compatibility and any service limits before rollout.'],['Renewal Monitoring','Monitor issuance and renewal results and alert on failures before expiry.'],['Controlled Deployment','Test certificate installation and reload steps on the intended web servers.'],['Change Records','Document account ownership, automation settings and recovery procedures.']],
  backup: [['Scoped Access','Provide only the website and database access required for the backup job.'],['Backup Coverage','Confirm which files and databases are included in the selected plan.'],['Retention Planning','Review the plan limits and retention requirements before onboarding.'],['Restore Testing','Test recovery using an agreed destination and validate the restored website.'],['Change Monitoring','Review backup status and investigate unexpected website changes.'],['Data Requirements','Confirm storage location, access and retention requirements for your organisation.']],
  scan: [['Authorised Scope','Confirm ownership and permission before scanning the public IPs or hosts in scope.'],['Asset Inventory','Keep the scanning target list aligned with the systems under review.'],['Report Access','Limit vulnerability reports to the nominated technical and compliance contacts.'],['Remediation Tracking','Assign findings to owners and verify fixes with a follow-up scan.'],['Compliance Scope','Confirm which reports and assessment requirements apply to your environment.'],['Evidence Retention','Keep scan history and remediation records according to your audit requirements.']],
  signing: [['Verified Identity','Complete the organisation and authorised-contact checks for the signing certificate.'],['Key Protection','Use the supported signing token or key-storage option and restrict access to signing keys.'],['Signing Permissions','Limit who can sign release artefacts and manage the signing workflow.'],['Release Integrity','Verify signatures on the intended binaries and installers before distribution.'],['Timestamp Planning','Configure supported timestamping and test the resulting signatures.'],['Renewal & Revocation','Document certificate ownership, renewal dates and the response to suspected key compromise.']],
  installation: [['Approved Access','Agree the administrator access required for the installation and remove temporary access afterward.'],['CSR & Private Key','Generate the request securely and protect the associated private key.'],['Certificate Chain','Install the appropriate certificate and intermediate chain for the server.'],['Hostname Checks','Verify the certificate covers the required domains and subdomains.'],['Change Window','Agree a deployment window and rollback steps before making server changes.'],['Post-Install Testing','Check certificate validity, chain delivery and HTTPS behaviour after deployment.']],
};
const core = fs.readFileSync(path.join(root,'public/imported-digicert-standard-ssl.html'),'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
for (const p of products) {
  const source = fs.readFileSync(path.join(process.argv[2],p.file+'.html'),'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
  const name = main.match(/data-product="([^"]+)"/)[1];
  main = main.replace(div(main,'crumb'),'').replace(/<section\b[^>]*id="watch"[^>]*>[\s\S]*?<\/section>/g,'');
  main = main.replace(div(main,'lh-powered'),'');
  main = main.replace(div(main,'lh-ask'),block=>block+'<div class="hosting-powered"><span>Powered by</span><img src="/assets/images/sectigo.svg" alt="Sectigo" width="140" height="38"></div>');
  const type = div(main,'lh-type');
  main = main.replace(type,'<div class="sg-highlight">'+JSON.parse(type.match(/data-words='([^']+)'/)[1])[0]+'</div>');
  const providers = {chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
  main = main.replace(/<a data-ai="([^"]+)" href="#">/g,(_,k)=>'<a data-ai="'+k+'" href="'+(providers[k]+encodeURIComponent('Explain '+name+', its features, pricing and support from XcellHost.')).replaceAll('&','&amp;')+'" target="_blank" rel="noopener noreferrer">');
  main = main.replace(/<!-- LOGO SLOT:[\s\S]*?--><span class="(?:sg-lt|sgt|sx-tile)" aria-hidden="true">S<\/span>/g,'<img class="sg-brand-logo" src="/assets/images/sectigo.svg" alt="Sectigo" width="112" height="30">');
  const security = '<section class="sec" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Plan '+name+' with clear access, ownership and verification responsibilities. Agree the deployment scope and evidence needed for your environment before implementation.</p></div><div class="hosting-reasons">'+controls[p.kind].map(([h,t])=>'<article><h3>'+h+'</h3><p>'+t+'</p></article>').join('')+'</div></div></section>';
  let why = main.match(/<section\b[^>]*id="why"[^>]*>[\s\S]*?<\/section>/)?.[0];
  if (why) main = main.replace(why,'');
  else {
    const reasons = [['Plan Selection','Review coverage, service limits and the options suitable for your environment.'],['Onboarding Support','Coordinate prerequisites, validation and the steps needed to get started.'],['Implementation Help','Agree the supported deployment scope with the technical team.'],['Lifecycle Planning','Document ownership, renewal requirements and operational handover.'],['INR Quotation','Review the selected term, applicable taxes and optional services before ordering.'],['One Support Contact','Coordinate product questions and implementation support through XcellHost.']];
    why = '<section class="sec" id="why"><div class="wrap"><div class="sh"><h2>Why XcellHost</h2></div><div class="hosting-reasons">'+reasons.map(([h,t])=>'<article><h3>'+h+'</h3><p>'+t+'</p></article>').join('')+'</div></div></section>';
  }
  why = why.replace(/<h2[\s\S]*?<\/h2>/,'<h2>Why XcellHost For '+name+'</h2>');
  const feedback = '<section class="sec" id="customer-feedback"><div class="wrap"><div class="sh"><h2>What Customers Say</h2><p>Ask for customer references relevant to your '+name+' requirements.</p></div><button type="button" class="btn btn-orange" data-open="xhCallback" data-topic="'+name+': Customer references">Request Customer References</button></div></section>';
  main = main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/,section=>{
    const items = [...section.matchAll(/<div class="fq(?: open)?"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m=>m[0].replace('class="fq open"','class="fq"').replace('aria-expanded="true"','aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/,'<i aria-hidden="true">+</i>'));
    if(items.length<6)throw new Error('FAQ extraction failed: '+p.file);
    const half=Math.ceil(items.length/2);
    return security+why+feedback+'<section class="sec" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">'+[items.slice(0,half),items.slice(half)].map(col=>'<div class="hosting-faq-column">'+col.join('')+'</div>').join('')+'</div></div></section>';
  });
  let runtime=[...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
  runtime=runtime.replace(/\b(?:el|t)\.scrollIntoView\(\{behavior:R\?'auto':'smooth',block:'start'\}\)/g,"window.hostingJumpTo('buy')");
  runtime=runtime.replace('<span class="sgt" aria-hidden="true">S</span><b>Sectigo</b>','<img class="sg-brand-logo" src="/assets/images/sectigo.svg" alt="Sectigo" width="112" height="30">');
  const bridge=`<script>
  (function(){
    var title=${JSON.stringify(name)},aliases=${JSON.stringify(aliases)};
    document.addEventListener('submit',function(e){var form=e.target.closest('form[data-xhform]');if(!form||!/renew/.test(form.dataset.xhform))return;
      e.preventDefault();e.stopImmediatePropagation();if(!form.reportValidity())return;var data=Object.fromEntries(new FormData(form));
      var close=document.querySelector('.sg-mod.open [data-sgclose],.sx-mod.open [data-sxclose]');if(close)close.click();
      XH.open('xhCallback',{topic:title+': Renewal request\\n'+Object.keys(data).map(function(k){return k+': '+data[k];}).join('\\n')});
    },true);
    document.addEventListener('click',function(e){var a=e.target.closest('a[href]');if(!a)return;var m=a.getAttribute('href').match(/^([a-z0-9-]+)\\.html(#[^ ]*)?$/);if(m){a.href='/'+(aliases[m[1]]||m[1])+(m[2]||'');a.target='_top';}},true);
    var outer=window.frameElement?parent:window;
    document.querySelectorAll('.sg-mod,.sx-mod').forEach(function(modal){
      function position(){if(!modal.classList.contains('open'))return;var top=window.frameElement?-frameElement.getBoundingClientRect().top:outer.scrollY;modal.style.top=Math.max(0,top+100)+'px';modal.style.height=Math.max(280,outer.innerHeight-116)+'px';}
      new MutationObserver(position).observe(modal,{attributes:true,attributeFilter:['class']});outer.addEventListener('scroll',position,{passive:true});outer.addEventListener('resize',position);
    });
  })();</script>`;
  const styles=[...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m=>m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g,(_,n)=>'calc(var(--page-vh,1vh) * '+n+')');
  const fonts=[...source.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).filter(s=>!s.includes('canonical')).join('\n');
  const css=['consulting-faq','faq-layout','hosting-tools','sectigo-catalogue-integration'].map(n=>'<link rel="stylesheet" href="/assets/styles/'+n+'.css">').join('');
  const result='<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+name+' | XcellHost</title>'+fonts+styles+css+'</head><body>'+localLinks(main)+'<script src="/assets/scripts/hosting-tools-viewport.js"></script>'+core+bridge+'<script>'+localLinks(runtime)+'</script></body></html>';
  for(const [i,s] of [...result.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].entries())new(require('node:vm').Script)(s[1],{filename:p.slug+'-'+i});
  fs.writeFileSync(path.join(root,'public/imported-sectigo-supplied-'+p.slug+'.html'),result);
  console.log('Imported '+name);
}
