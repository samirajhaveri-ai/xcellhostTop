const { replaceReferenceSections } = require('./customer-testimonials.cjs');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const input = process.argv[2];
if (!input) throw new Error('Pass the folder containing the six operations HTML files.');
const products = [
  { slug:'resilience-operations', name:'Resilience Operations', prefix:'ro', focus:'backup, recovery and continuity', controls:[['Recovery Objectives','Agree RPO and RTO targets, dependencies and test schedules for the workloads in scope.'],['Recovery Evidence','Record backup checks, restore tests and remediation actions against the agreed runbooks.']] },
  { slug:'cloud-operations', name:'Cloud Operations', prefix:'co', focus:'cloud estates and day-to-day operations', controls:[['Cloud Access','Assign scoped roles and review service identities across the cloud accounts in scope.'],['Change Control','Review changes, rollback steps and maintenance windows before production execution.']] },
  { slug:'database-operations', name:'Database Operations', prefix:'do', focus:'database availability, maintenance and recovery', controls:[['Database Privileges','Use named accounts and scoped administrative privileges for the database estate.'],['Recovery Validation','Agree backup, restore and replication checks, and document recovery test outcomes.']] },
  { slug:'network-operations', name:'Network Operations', prefix:'nwo', focus:'networks, connectivity and network security', controls:[['Configuration Control','Record approved network configurations, change history and rollback procedures.'],['Segmentation Review','Review routing, firewall and access rules against the agreed connectivity requirements.']] },
  { slug:'security-operations', name:'Security Operations', prefix:'so', focus:'security monitoring, response and remediation', controls:[['Response Authority','Agree who can authorise containment and the escalation path for each incident severity.'],['Evidence Handling','Define access, retention and transfer requirements for incident evidence and telemetry.']] },
  { slug:'workspace-operations', name:'Workspace Operations', prefix:'wo', focus:'user identities, endpoints and collaboration platforms', controls:[['Identity Lifecycle','Define onboarding, role changes and access removal for users and administrators.'],['Endpoint Baselines','Agree device configuration, patching and compliance checks for supported endpoints.']] },
];
const commonControls = [['Least-Privilege Access','Agree named accounts, administrative roles and approval requirements before onboarding.'],['Operational Audit','Record changes, incidents and response actions so the service history can be reviewed.'],['Data Requirements','Confirm data location, retention and access requirements for the selected platforms.'],['Service Reviews','Review risks, outstanding actions and evidence with the nominated service owners.']];
function div(html, cls) {
  let start=-1, depth=0;
  for (const m of html.matchAll(/<div\b[^>]*>|<\/div>/g)) {
    if(start<0){if(!m[0].match(/class="([^"]+)"/)?.[1].split(/\s+/).includes(cls))continue;start=m.index;}
    depth+=m[0].startsWith('</')?-1:1;
    if(!depth)return html.slice(start,m.index+m[0].length);
  }
  throw new Error('Missing '+cls);
}
const aliases={
  'xcellhost-acronis-direct-cloud-backup':'acronis-direct-cloud-backup','xcellhost-druva':'explore-druva-platform','xcellhost-acronis-ai':'acronis-ai',
  'xcellhost-iso-22301':'iso-22301-bmc','xcellhost-iso-20000':'iso-20000-itsm','xcellhost-iso-27001':'iso-27001-consulting',
  'managed-google-cloud':'managed-google-cloud-gcp','xcellhost-managed-sentinel':'managed-microsoft-sentinel','xcellhost-genian-nac':'genian-nac',
  'xcellhost-entra-private-access':'microsoft-entra-private-access','xcellhost-entra-internet-access':'microsoft-entra-internet-access','xcellhost-entra-id-p1':'microsoft-entra-id-p1',
  'xcellhost-managed-grc':'managed-grc','managed-google-workspace':'managed-gws','xcellhost-sarv-workspace':'xcellworkspace','xcellhost-zoho-assist':'company/remote-assist',
  'acronis-cyber-frame':'acronis-cyber-frame-hci','managed-dns':'dns','azure-services':'vendor-partners/microsoft-azure','xcellhost-gcc-cloud':'gcc-cloud',
  'sql-server-editions-comparison':'managed-microsoft-sql','sap-b1-hana-on-cloud':'sap-b1-cloud','sap-s4hana-private-cloud':'sap-s4-hana-private-cloud','sage-300-erp-hosting':'sage-300-hosting',
  'mxdr-for-microsoft':'managed-microsoft-xdr','microsoft-sentinel-implementation':'managed-microsoft-sentinel',
};
function localLinks(s){return s.replace(/href="(?:https:\/\/www\.xcellhost\.top\/)?([a-z0-9-]+)\.html"/g,(_,slug)=>'href="/'+(aliases[slug]||slug)+'" target="_top"').replaceAll('src="https://www.xcellhost.top/assets/','src="/assets/');}
const core=fs.readFileSync(path.join(root,'public/imported-digicert-standard-ssl.html'),'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
for(const p of products){
  const source=fs.readFileSync(path.join(input,p.slug+'.html'),'utf8');
  let main=source.match(/<main\b[^>]*>[\s\S]*?<\/main>/)[0];
  main=main.replace(/<section\b[^>]*id="(?:watch|contact)"[^>]*>[\s\S]*?<\/section>/g,'');
  main=main.replace(div(main,'crumb'),'').replace(div(main,'lh-powered'),'');
  main=main.replace('class="so-grid"','class="so-grid hero-grid"');
  const ask=div(main,'lh-ask');
  main=main.replace(ask,ask.replace(/Ask AI about[^<]+/,'Ask AI About '+p.name.replace(' Operations',' Ops'))+'<div class="ops-powered"><span>Powered by <span aria-hidden="true">|</span></span><strong>NOC + SOC · Mumbai</strong></div>');
  const type=div(main,'lh-type'),words=type.match(/data-words='([^']+)'/);
  if(words)main=main.replace(type,'<div class="ops-highlight">'+JSON.parse(words[1])[0]+'</div>');
  main=main.replace(/(<nav class=")([^"]+)("[^>]*aria-label="On this page")/g,'$1$2 product-section-nav$3');
  const security='<section class="sec" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Set the operational controls for '+p.focus+' before onboarding. XcellHost works with your team to define access, responsibilities, evidence handling and the review process for the agreed service scope.</p></div><div class="hosting-reasons">'+[...p.controls,...commonControls].map(([h,t])=>'<article><h3>'+h+'</h3><p>'+t+'</p></article>').join('')+'</div></div></section>';
  let why=main.match(/<section\b[^>]*id="why"[\s\S]*?<\/section>/)?.[0];
  if(why){main=main.replace(why,'');why=why.replace(/<h2[^>]*>[\s\S]*?<\/h2>/,'<h2>Why XcellHost For '+p.name+'</h2>');}
  else{
    const reasons=[['Defined Service Scope','Agree supported systems, responsibilities and escalation contacts for '+p.focus+'.'],['Planned Onboarding','Document the estate, establish access and prepare the operational runbooks.'],['Operational Visibility','Review incidents, changes and service performance through regular reporting.'],['Engineering Support','Coordinate troubleshooting and approved remediation with the responsible teams.'],['INR Billing','Review the management fee, onboarding scope and applicable taxes in your quotation.'],['One Service Partner','Connect this service with your wider cloud, security and continuity requirements.']];
    why='<section class="sec ops-tint" id="why"><div class="wrap"><div class="sh"><h2>Why XcellHost For '+p.name+'</h2></div><div class="hosting-reasons">'+reasons.map(([h,t])=>'<article><h3>'+h+'</h3><p>'+t+'</p></article>').join('')+'</div></div></section>';
  }
  const feedback='<section class="sec" id="customer-feedback"><div class="wrap"><div class="sh"><h2>What Customers Say</h2><p>Ask for customer references relevant to your '+p.focus+' requirements.</p></div><button type="button" class="btn btn-orange" data-open="xhCallback" data-topic="'+p.name+': Customer references">Request Customer References</button></div></section>';
  main=main.replace(/<section\b[^>]*id="faq"[\s\S]*?<\/section>/,section=>{
    const items=[...section.matchAll(/<div class="fq(?: open)?"[^>]*>[\s\S]*?<div class="fa"[^>]*>[\s\S]*?<\/div><\/div>/g)].map(m=>m[0].replace('class="fq open"','class="fq"').replace('aria-expanded="true"','aria-expanded="false"').replace(/<i><svg[\s\S]*?<\/svg><\/i>/,'<i aria-hidden="true">+</i>'));
    const count=p.prefix==='so'?11:12;if(items.length!==count)throw new Error(p.slug+': expected '+count+' FAQs; found '+items.length);
    const split=Math.ceil(count/2);
    return security+why+feedback+'<section class="sec" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">'+[items.slice(0,split),items.slice(split)].map(col=>'<div class="hosting-faq-column">'+col.join('')+'</div>').join('')+'</div></div></section>';
  });
  main=main.replace(/href="#contact"/g,'href="#" data-open="xhCallback" data-topic="'+p.name+'"');
  const providers={chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
  main=main.replace(/<a data-ai="([^"]+)" href="#">/g,(_,k)=>'<a data-ai="'+k+'" href="'+(providers[k]+encodeURIComponent('Explain XcellHost Managed '+p.name+', service scope, onboarding, plans and support.')).replaceAll('&','&amp;')+'" target="_blank" rel="noopener noreferrer">');
  let script=[...source.matchAll(/<script\b[^>]*>[\s\S]*?<\/script>/g)].at(-1)[0];
  script=script.replace(/(?:window\.)?scrollTo\(\{top:[ct]\.getBoundingClientRect\(\)\.top\+scrollY-\d+,behavior:R\?'auto':'smooth'\}\)/g,"window.hostingJumpTo('configure')")
    .replace("c.scrollIntoView({behavior:R?'auto':'smooth',block:'start'})","window.hostingJumpTo('configure')")
    .replace('var y=scrollY+150,k=-1;','var y=window.hostingViewportFocus(),k=-1;');
  const bridge='<script>(function(){var open=XH.open;XH.open=function(id,opts){if(id==="xhCallback"&&/quot|enterprise/i.test(opts&&opts.topic||"")){var config=document.getElementById("configure"),rows=document.getElementById("oRows"),quantity=document.querySelector("#cQty,#cUsers,#cfS,#cQ"),total=document.getElementById("oTot");var selections=config?Array.from(config.querySelectorAll(".seg button.on,select")).map(function(el){return el.tagName==="SELECT"?el.selectedOptions[0].textContent:el.textContent.trim();}).join(" · "):"";opts={topic:'+JSON.stringify(p.name+': ')+'+[selections,quantity?(quantity.getAttribute("aria-label")||"Quantity")+": "+Math.max(Number(quantity.min)||0,Math.min(Number(quantity.max)||Infinity,Number(quantity.value)||0)):"",rows?rows.innerText:"",total?"Displayed total: "+total.textContent:""].filter(Boolean).join("\\n")};}return open(id,opts);};})();</script>';
  const styles=[...source.matchAll(/<style\b[^>]*>[\s\S]*?<\/style>/g)].map(m=>m[0]).join('\n').replace(/(\d*\.?\d+)vh\b/g,(_,n)=>'calc(var(--page-vh,1vh) * '+n+')');
  const links=[...source.matchAll(/<link\b[^>]*>/g)].map(m=>m[0]).filter(l=>!l.includes('canonical')).join('\n');
  const css=['consulting-faq','faq-layout','hosting-tools','section-navigation-flow','managed-operations'].map(n=>'<link rel="stylesheet" href="/assets/styles/'+n+'.css">').join('');
  const output='<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+p.name+' | XcellHost</title>'+links+styles+css+'</head><body>'+localLinks(main)+'<script src="/assets/scripts/hosting-tools-viewport.js"></script>'+core+bridge+localLinks(script)+'</body></html>';
  for(const [i,s] of [...output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].entries())new(require('node:vm').Script)(s[1],{filename:p.slug+'-'+i});
  fs.writeFileSync(path.join(root,'public/imported-'+p.slug+'.html'),replaceReferenceSections(output.replace(/[ \t]+$/gm,''), path.join(root,'public/imported-'+p.slug+'.html')));
  console.log('Imported '+p.name+' with original tools and FAQ answers.');
}
