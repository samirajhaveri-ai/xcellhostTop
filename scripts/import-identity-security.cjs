const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) throw new Error('Pass the directory containing the eight supplied Identity Security documents.');

const pages = require('./identity-security-import-config.cjs');
const aliases = {'identity-access-management':'identity-and-access-management','identity-governance-administration':'identity-governance-and-administration','xcellhost-entra-id-p1':'microsoft-entra-id-p1','xcellhost-entra-id-p2':'microsoft-entra-id-p2','xcellhost-entra-id-governance':'microsoft-entra-id-governance','xcellhost-entra-suite':'microsoft-entra-suite','xcellhost-managed-sentinel':'managed-microsoft-sentinel','xcellhost-iso-27001':'iso-27001-consulting','xcellhost-managed-grc':'managed-grc','sectigo-code-signing-certificate':'sectigo-code-signing','digicert-code-signing-certificate':'digicert-code-signing'};
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const reference = fs.readFileSync(path.join(root, 'public/imported-microsoft-defender.html'), 'utf8');
const reviews = reference.match(/<section\b[^>]*id="customer-feedback"[^>]*>[\s\S]*?<\/section>/)[0].replaceAll('defender-', 'identity-');
const cards = items => '<div class="hosting-reasons">' + items.map(([h,p]) => '<article><h3>'+h+'</h3><p>'+p+'</p></article>').join('') + '</div>';

for (const [slug, config] of Object.entries(pages)) {
  const source = fs.readFileSync(path.join(input, config.file + '.html'), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0];
  if (!main) throw new Error('Missing main in ' + slug);
  main = main.replace(/<div class="crumb"[^>]*>[\s\S]*?<\/div>/, '');
  const mark = config.microsoft ? '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#f25022" d="M1 1h10v10H1z"/><path fill="#7fba00" d="M13 1h10v10H13z"/><path fill="#00a4ef" d="M1 13h10v10H1z"/><path fill="#ffb900" d="M13 13h10v10H13z"/></svg>' : '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M12 2 4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5z"/><path d="m8 12 3 3 5-6"/></svg>';
  main = main.replace(/<span class="(?:mf-mt|ia-mt|pm-mt|ig-mt|pm-g|ia-tile|ad-tile|tk-mt)"[^>]*>[A-Z]<\/span>/, '<span class="identity-platform-mark">'+mark+'</span>');
  main = main.replace(/href="([a-z0-9-]+)\.html"/g, (_, s) => 'href="/' + (aliases[s] || s) + '" target="_top"');
  main = main.replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/');
  const useCasesIndex = main.search(/<section[^>]*id="usecases"/);
  main = main.replace(/<section\b[^>]*id="(?:why|whyxh|whyx|watch)"[^>]*>[\s\S]*?<\/section>/g, (section, offset) => offset > useCasesIndex ? '' : section);
  config.controls.push(['Access Governance','Agree named administrators, least-privilege roles and authentication requirements.'],['Evidence Handling','Agree secure transfer, access restrictions and retention for reports and operational records.'],['Review & Escalation','Document control owners, review intervals and escalation contacts.']);
  const security = '<section class="sec identity-extra" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>'+config.intro+'</p></div>'+cards(config.controls)+'<p class="identity-certification">XcellHost is ISO 27001 and ISO 20000-1 certified · 24×7 NOC and SOC · Confirm data residency and regulatory requirements during scoping.</p></div></section>';
  const reasons = [
    ['Since 1999', '27 years supporting production IT and cloud services for Indian businesses.'],
    ['Service Planning', 'Scope '+config.title.toLowerCase()+' around your users, systems and operational requirements.'],
    ['Licence Planning', 'Match the selected Identity Security services and deployment scope to your environment.'],
    ['24×7 Support', 'Coordinate support and escalation with engineers in English and Hindi.'],
    ['Guided Onboarding', 'Agree responsibilities, test the setup and hand over operating guidance.'],
    ['One Partner', 'Bring licensing, deployment, operations and support together.'],
  ];
  const why = '<section class="sec alt identity-extra" id="why-xcellhost"><div class="wrap"><div class="sh"><h2>Why XcellHost For '+config.title+'</h2></div>'+cards(reasons)+'</div></section>';
  main = main.replace(/<section\b[^>]*id="faq"[^>]*>[\s\S]*?<\/section>/, section => {
    const items = [...section.matchAll(/<div class="fq(?: open)?"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0].replace('class="fq open"','class="fq"').replace('aria-expanded="true"','aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/,'<i aria-hidden="true">+</i>'));
    if (items.length < 8) throw new Error('Incomplete FAQ in ' + slug);
    const split = Math.ceil(items.length / 2);
    return security + why + reviews + '<section class="sec '+config.prefix+'-fq" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">'+[items.slice(0,split),items.slice(split)].map(col=>'<div class="hosting-faq-column">'+col.join('')+'</div>').join('')+'</div></div></section>';
  });
  main = main.replace(/<section\b[^>]*id="(?:contact|related|family)"[^>]*>[\s\S]*?<\/section>/g, '');
  let runtime = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
  runtime = runtime.replace(/(?:window\.)?scrollTo\(\{top:cf\.getBoundingClientRect\(\)\.top\+scrollY-110,behavior:R\?'auto':'smooth'\}\)/g, "window.hostingJumpTo('configure')");
  runtime = runtime.replace(/(?:cf|t|\$\('#configure'\))\.scrollIntoView\(\{behavior:(?:R|RM)\?'auto':'smooth',block:'(?:start|center)'\}\)/g, "window.hostingJumpTo('configure')");
  const bridge = `<script>
(function(){
  var title=${JSON.stringify(config.title)}, open=XH.open;
  XH.onForm=function(){};
  XH.open=function(id,opts){
    if(id==='xhCallback') {
      var topic=opts&&opts.topic||title;
      if(/trial/i.test(topic)){document.dispatchEvent(new CustomEvent('import-trial',{detail:title}));return;}
      var button=document.activeElement;
      if(button && (button.id==='qGo'||/quotation/.test(topic))){
        var estimate=document.querySelector('#configure');
        if(estimate) topic=title+': '+estimate.innerText;
      }
      opts={topic:topic==='Book a demo'?title+' — demo':topic};
    }
    open(id,opts);
  };
  XH.toast=function(message){var t=document.getElementById('identityToast');t.textContent=message;t.hidden=false;clearTimeout(window.identityToastTimer);window.identityToastTimer=setTimeout(function(){t.hidden=true;},3500);};
  var providers={chatgpt:'https://chatgpt.com/?q=',perplexity:'https://www.perplexity.ai/search/new?q=',claude:'https://claude.ai/new?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
  document.querySelectorAll('[data-ai]').forEach(function(a){a.href=providers[a.dataset.ai]+encodeURIComponent(a.closest('[data-q]').dataset.q);a.target='_blank';a.rel='noopener noreferrer';});
  document.addEventListener('submit',function(e){
    var f=e.target.closest('[data-xhform]');if(!f)return;
    e.preventDefault();e.stopImmediatePropagation();if(!f.reportValidity())return;
    var payload=Object.fromEntries(new FormData(f));payload.summary=Object.entries(payload).filter(function(pair){return !['name','email','phone','company'].includes(pair[0]);}).map(function(pair){return pair[0]+': '+pair[1];}).join('\\n');
    var button=f.querySelector('[type="submit"]');button.disabled=true;
    var status=f.querySelector('[role="status"]');if(!status){status=document.createElement('p');status.setAttribute('role','status');status.className='full';f.appendChild(status);}status.textContent='Sending your request…';
    document.dispatchEvent(new CustomEvent('import-identity-enquiry',{detail:{payload:payload,complete:function(result){
      button.disabled=false;status.replaceChildren();
      if(result.ok&&!result.skipped){status.textContent='Request received. Reference: '+result.ref;return;}
      status.textContent='Your request has not been sent. ';var a=document.createElement('a');a.href=result.fallbackUrl;a.textContent='Send your request by email';status.appendChild(a);
    }}}));
  },true);
})();</script>`;
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m=>m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g,(_,n)=>'calc(var(--page-vh,1vh) * '+n+')');
  const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).filter(l=>!l.includes('canonical')).join('\n');
  const css = ['consulting-faq','faq-layout','hosting-tools','identity-security-integration'].map(n=>'<link rel="stylesheet" href="/assets/styles/'+n+'.css">').join('');
  const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+config.title+' | XcellHost</title>'+links+styles+css+'</head><body>'+main+'<div id="identityToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script>'+core+bridge+'<script>'+runtime+'</script></body></html>';
  for (const [i,m] of [...output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].entries()) new vm.Script(m[1],{filename:slug+'-'+i});
  fs.writeFileSync(path.join(root,'public/imported-'+slug+'.html'),output);
  console.log('Imported '+slug);
}
