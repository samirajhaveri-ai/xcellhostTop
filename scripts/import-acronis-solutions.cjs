const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) throw new Error('Pass the directory containing the three supplied Acronis documents.');

const pages = {
  'acronis-cyber-intelligence': {
    title: 'Acronis Cyber Intelligence', prefix: 'ci',
    intro: 'Agree who can access dashboards, which customer data is included and how reports are shared before enabling reporting for your team.',
    controls: [
      ['Tenant Scope', 'Review customer and group-company boundaries before publishing dashboards or scheduled reports.'],
      ['Access Governance', 'Agree named administrators, reporting roles and authentication requirements.'],
      ['Report Distribution', 'Review recipients, export permissions and delivery schedules for each customer.'],
      ['Data Coverage', 'Confirm which licensed Acronis services and connected workloads contribute to each report.'],
      ['Retention & Location', 'Confirm the selected tenancy and reporting retention against your organisation’s requirements.'],
      ['Evidence & Review', 'Agree review intervals, report owners and the evidence required for internal governance.'],
    ],
    reason: ['Reporting Setup', 'Build dashboards and scheduled reports around the services your team actually uses.'],
  },
  'acronis-cyber-frame': {
    title: 'Acronis Cyber Frame', prefix: 'cf',
    intro: 'Plan infrastructure access, workload protection and recovery responsibilities together. The agreed deployment location and service scope determine the controls available for your environment.',
    controls: [
      ['Deployment Location', 'Agree whether workloads run in a cloud tenancy, provider cluster or supported local infrastructure.'],
      ['Access Governance', 'Define administrator roles, tenant access and authentication requirements before handover.'],
      ['Workload Protection', 'Review the backup, recovery and security policies selected for each workload.'],
      ['Network Separation', 'Plan tenant networks, management access and workload connectivity with your infrastructure team.'],
      ['Recovery Validation', 'Agree recovery objectives and test procedures for the workloads in scope.'],
      ['Operational Evidence', 'Document change ownership, monitoring and the reporting needed for internal reviews.'],
    ],
    reason: ['Migration Planning', 'Assess workloads, size the deployment and plan a phased migration with your team.'],
  },
  'acronis-workflow-automation': {
    title: 'Acronis Workflow Automation', prefix: 'wa',
    intro: 'Define approval boundaries before automating operational or security actions. Start with an agreed workflow scope, test its conditions and review the impact before wider deployment.',
    controls: [
      ['Authorised Actions', 'Agree which actions may run automatically and which require an operator’s approval.'],
      ['Tenant Boundaries', 'Review target customers, devices and services before propagating workflows.'],
      ['Change Control', 'Keep workflow owners, version changes and rollout decisions documented.'],
      ['Safe Testing', 'Test triggers, conditions and failure handling on an agreed pilot scope first.'],
      ['Execution Review', 'Review workflow results, failed actions and escalation responsibilities with your team.'],
      ['Service Permissions', 'Confirm the licences, service access and permissions needed by each workflow.'],
    ],
    reason: ['Workflow Design', 'Build and test repeatable workflows around your onboarding, protection and response processes.'],
  },
};
const aliases = {
  'xcellhost-acronis-ai': 'acronis-ai',
  'xcellhost-acronis-direct-cloud-backup': 'acronis-direct-cloud-backup',
};
const core = fs.readFileSync(path.join(root, 'public/imported-digicert-standard-ssl.html'), 'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
const reference = fs.readFileSync(path.join(root, 'public/imported-microsoft-defender.html'), 'utf8');
const reviews = reference.match(/<section\b[^>]*id="customer-feedback"[^>]*>[\s\S]*?<\/section>/)[0].replaceAll('defender-', 'acronis-');
const cards = items => '<div class="hosting-reasons">' + items.map(([h,p]) => '<article><h3>'+h+'</h3><p>'+p+'</p></article>').join('') + '</div>';

for (const [slug, config] of Object.entries(pages)) {
  const source = fs.readFileSync(path.join(input, slug + '.html'), 'utf8');
  let main = source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)?.[0];
  if (!main) throw new Error('Missing main in ' + slug);
  main = main.replace(/<div class="crumb"[^>]*>[\s\S]*?<\/div>/, '');
  main = main.replace(/<span class="(?:ci|cf|wa)-at"[^>]*>A<\/span>Acronis/, '<img class="acronis-logo" src="/assets/images/smb-powered-by/acronis-wordmark.webp" width="112" height="36" alt="Acronis">');
  main = main.replace(/href="([a-z0-9-]+)\.html"/g, (_, s) => 'href="/' + (aliases[s] || s) + '" target="_top"');
  main = main.replace(/href="https:\/\/xcellhost\.cloud\/(acronis-xdr|acronis-mdr|acronis-remote-monitoring-management-rmm-sla|acronis-cyber-frame-hci)"(?:\s+target="[^"]*")?/g, (_, s) => 'href="/' + s + '" target="_top"');
  main = main.replaceAll('src="https://www.xcellhost.top/assets/', 'src="/assets/');
  main = main.replace(/<section\b[^>]*id="(?:why|watch)"[^>]*>[\s\S]*?<\/section>/g, '');
  const security = '<section class="sec acronis-extra" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>'+config.intro+'</p></div>'+cards(config.controls)+'<p class="acronis-certification">XcellHost is ISO 27001 and ISO 20000-1 certified · 24×7 NOC and SOC · Confirm data residency and regulatory requirements during scoping.</p></div></section>';
  const reasons = [
    ['Since 1999', '27 years supporting production IT and cloud services for Indian businesses.'],
    config.reason,
    ['Licence Planning', 'Match the selected Acronis services and deployment scope to your environment.'],
    ['24×7 Support', 'Coordinate support and escalation with engineers in English and Hindi.'],
    ['Guided Onboarding', 'Agree responsibilities, test the setup and hand over operating guidance.'],
    ['One Partner', 'Bring licensing, deployment, operations and support together.'],
  ];
  const why = '<section class="sec alt acronis-extra" id="why"><div class="wrap"><div class="sh"><h2>Why XcellHost For '+config.title+'</h2></div>'+cards(reasons)+'</div></section>';
  main = main.replace(/<section\b[^>]*id="faq"[^>]*>[\s\S]*?<\/section>/, section => {
    const items = [...section.matchAll(/<div class="fq(?: open)?"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m => m[0].replace('class="fq open"','class="fq"').replace('aria-expanded="true"','aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/,'<i aria-hidden="true">+</i>'));
    if (items.length < 8) throw new Error('Incomplete FAQ in ' + slug);
    const split = Math.ceil(items.length / 2);
    return security + why + reviews + '<section class="sec '+config.prefix+'-fq" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">'+[items.slice(0,split),items.slice(split)].map(col=>'<div class="hosting-faq-column">'+col.join('')+'</div>').join('')+'</div></div></section>';
  });
  main = main.replace(/(<div class="lcta rv">)/, '$1<img class="acronis-support-art" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost customer support" width="180" height="180">');
  main = main.replace(/<div class="seal">[\s\S]*?<\/div>/g, '');
  let runtime = [...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
  runtime = runtime.replace("window.scrollTo({top:e.getBoundingClientRect().top+scrollY-90,behavior:R?'auto':'smooth'})", 'window.hostingJumpTo(id)');
  runtime = runtime.replaceAll("cf.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})", "window.hostingJumpTo('configure')");
  runtime = runtime.replaceAll("q.scrollIntoView({behavior:R?'auto':'smooth',block:'center'})", "window.hostingJumpTo('waQuote')");
  // The standalone document's success-only form callback must not simulate a submission.
  runtime = runtime.replace(/XH\.onForm\('wa-quote',[\s\S]*?return false;\}\);/, '');
  const bridge = `<script>
(function(){
  var title=${JSON.stringify(config.title)}, open=XH.open;
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
  XH.toast=function(message){var t=document.getElementById('acronisToast');t.textContent=message;t.hidden=false;clearTimeout(window.acronisToastTimer);window.acronisToastTimer=setTimeout(function(){t.hidden=true;},3500);};
  var providers={chatgpt:'https://chatgpt.com/?q=',perplexity:'https://www.perplexity.ai/search/new?q=',claude:'https://claude.ai/new?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
  document.querySelectorAll('[data-ai]').forEach(function(a){a.href=providers[a.dataset.ai]+encodeURIComponent(a.closest('[data-q]').dataset.q);a.target='_blank';a.rel='noopener noreferrer';});
  document.addEventListener('submit',function(e){
    var f=e.target.closest('[data-xhform="wa-quote"]');if(!f)return;
    e.preventDefault();e.stopImmediatePropagation();if(!f.reportValidity())return;
    var payload=Object.fromEntries(new FormData(f));payload.summary=payload.sizing;
    var button=f.querySelector('[type="submit"]');button.disabled=true;
    var status=f.querySelector('[role="status"]');if(!status){status=document.createElement('p');status.setAttribute('role','status');status.className='full';f.appendChild(status);}status.textContent='Sending your quotation request…';
    document.dispatchEvent(new CustomEvent('import-enquiry',{detail:{payload:payload,complete:function(result){
      button.disabled=false;status.replaceChildren();
      if(result.ok&&!result.skipped){status.textContent='Quotation request received. Reference: '+result.ref;return;}
      status.textContent='Your request has not been sent. ';var a=document.createElement('a');a.href=result.fallbackUrl;a.textContent='Send your quotation request by email';status.appendChild(a);
    }}}));
  },true);
})();</script>`;
  const styles = [...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m=>m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g,(_,n)=>'calc(var(--page-vh,1vh) * '+n+')');
  const links = [...source.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).filter(l=>!l.includes('canonical')).join('\n');
  const css = ['consulting-faq','faq-layout','hosting-tools','acronis-solutions-integration'].map(n=>'<link rel="stylesheet" href="/assets/styles/'+n+'.css">').join('');
  const output = '<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+config.title+' | XcellHost</title>'+links+styles+css+'</head><body>'+main+'<div id="acronisToast" role="status" hidden></div><script src="/assets/scripts/hosting-tools-viewport.js"></script>'+core+bridge+'<script>'+runtime+'</script></body></html>';
  for (const [i,m] of [...output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].entries()) new vm.Script(m[1],{filename:slug+'-'+i});
  fs.writeFileSync(path.join(root,'public/imported-'+slug+'.html'),output);
  console.log('Imported '+slug);
}
