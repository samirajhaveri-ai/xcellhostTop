const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{parse}=require('parse5');
const root=path.resolve(__dirname,'..');
if(!process.argv[2])throw Error('Pass the supplied Microsoft Agent 365 HTML file.');
const source=fs.readFileSync(process.argv[2],'utf8'),nodes=[];
function walk(n){nodes.push(n);(n.childNodes||[]).forEach(walk)}walk(parse(source,{sourceCodeLocationInfo:true}));
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value||'',has=(n,c)=>attr(n,'class').split(/\s+/).includes(c);
const html=n=>source.slice(n.sourceCodeLocation.startOffset,n.sourceCodeLocation.endOffset);
let main=html(nodes.find(n=>n.tagName==='main'));
for(const n of nodes.filter(n=>has(n,'crumb')))main=main.replace(html(n),'');
const faq=nodes.find(n=>n.tagName==='section'&&attr(n,'id')==='faq');
const items=nodes.filter(n=>has(n,'fq')&&n.sourceCodeLocation.startOffset>faq.sourceCodeLocation.startOffset&&n.sourceCodeLocation.endOffset<faq.sourceCodeLocation.endOffset).map(n=>html(n).replace('class="fq open"','class="fq"').replace('aria-expanded="true"','aria-expanded="false"'));
if(items.length<8)throw Error('Incomplete source FAQs');
const half=Math.ceil(items.length/2),faqHtml='<section class="sec" id="faq"><div class="wrap"><div class="sh"><h2>Frequently Asked Questions</h2></div><div class="faq">'+[items.slice(0,half),items.slice(half)].map(col=>'<div class="hosting-faq-column">'+col.join('')+'</div>').join('')+'</div></div></section>';
const cards=rows=>'<div class="agent-cards">'+rows.map(([title,text])=>'<article><h3>'+title+'</h3><p>'+text+'</p></article>').join('')+'</div>';
const security='<section class="sec alt" id="security"><div class="wrap"><div class="sh"><h2>SECURITY &amp; COMPLIANCE</h2><p>Bring agent ownership, access and activity into your tenant governance. Available controls depend on your Microsoft licences, supported integrations and configured policies.</p></div>'+cards([
 ['Agent Ownership','Maintain an inventory of agents, owners and sponsors so responsibilities are clear.'],
 ['Identity & Access','Use Entra Agent ID and least-privilege permissions with Conditional Access where supported.'],
 ['Data Protection','Configure Purview sensitivity labels and DLP policies for the data your agents can reach.'],
 ['Threat Monitoring','Connect supported agents to Defender protection and review relevant alerts.'],
 ['Audit & Review','Keep activity visible through audit records and regular governance reviews.'],
 ['Agent Lifecycle','Define approval, publishing, review and retirement steps for agents in your tenant.'],
 ])+'</div></section>';
const why='<section class="sec" id="why-xcellhost"><div class="wrap"><div class="sh"><h2>Why XcellHost For Microsoft Agent 365</h2></div>'+cards([
 ['Licence Guidance','Review base licences and Agent 365 or E7 eligibility before rollout.'],
 ['INR Billing','Request a Microsoft CSP quotation and GST invoice in rupees.'],
 ['Inventory First','Identify existing agents and owners before enforcing new policies.'],
 ['Tenant Setup','Get help connecting agent governance with Entra, Defender and Purview.'],
 ['Managed Governance','Discuss ongoing monitoring, policy changes and monthly reporting.'],
 ['24×7 Support','Work with XcellHost engineers in Mumbai for deployment and operational support.'],
 ])+'</div></section>';
main=main.replace(html(faq),security+why+faqHtml);
main=main.slice(0,main.indexOf(faqHtml)+faqHtml.length)+'</main>';
main=main.replace('<main','<main data-customer-testimonials="off"');
const powered=nodes.find(n=>has(n,'lh-powered')),ask=nodes.find(n=>has(n,'lh-ask'));
if(powered)main=main.replace(html(powered),'');
main=main.replace(html(ask),html(ask)+'<div class="agent-powered"><span>Powered by</span><span aria-hidden="true">|</span><img src="/assets/images/microsoft-mark.svg" alt="" width="28" height="28"><strong>Microsoft Agent 365</strong></div>');
main=main.replace(/href="(?:https:\/\/(?:www\.)?xcellhost\.top\/)?([a-z0-9-]+)\.html"/g,(_,slug)=>'href="/'+slug+'" target="_top"');
const styles=nodes.filter(n=>n.tagName==='style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g,(_,n)=>'calc(var(--page-vh,1vh) * '+n+')');
const fonts=nodes.filter(n=>n.tagName==='link'&&/fonts\.(googleapis|gstatic)/.test(attr(n,'href'))).map(html).join('\n');
const core=fs.readFileSync(path.join(root,'public/imported-digicert-standard-ssl.html'),'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let runtime=[...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
runtime=runtime.replace(/(\b\w+)\.scrollIntoView\(\{[^}]*\}\)/g,'window.hostingJumpTo($1.id)');
const bridge=String.raw`<script>(function(){
 const originalOpen=XH.open;
 const amount=id=>{const el=document.getElementById(id);return typeof el._v==='number'?XH.inr(el._v):el.textContent;};
 XH.open=function(id,options){if(id==='xhCallback'){let topic=options?.topic||'Consultation';if(/quote|quotation/i.test(topic)){topic+='\nUsers: '+document.getElementById('cfU').value+'\nAgents: '+document.getElementById('cfA').value+'\n'+Array.from(document.querySelectorAll('#cfList li')).map(li=>Array.from(li.children).map(el=>el.textContent).join(': ')).join('\n')+'\nFixed-price subtotal: '+amount('cfSub')+'\nGST: '+amount('cfGst')+'\nTotal: '+amount('cfTot')+'\n'+document.getElementById('cfQ').textContent;}document.dispatchEvent(new CustomEvent('import-callback',{detail:'Microsoft Agent 365: '+topic}));return;}originalOpen(id,options);};
 const providers={chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search/new?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
 document.querySelectorAll('.lh-ask').forEach(box=>box.querySelectorAll('[data-ai]').forEach(a=>{a.href=providers[a.dataset.ai]+encodeURIComponent(box.dataset.q);a.target='_blank';a.rel='noopener noreferrer';}));
 document.addEventListener('click',e=>{const a=e.target.closest('a[href="#contact"]');if(a){e.preventDefault();XH.open('xhCallback',{topic:'Consultation'});}});
 function fit(){const h=document.querySelector('#a3Hero h1');if(!h)return;h.style.setProperty('--agent-title-size','34px');const range=document.createRange();range.selectNodeContents(h);h.style.setProperty('--agent-title-size',Math.min(34,34*(h.clientWidth-2)/Math.max(1,range.getBoundingClientRect().width))+'px');}
 document.fonts.ready.then(fit);window.addEventListener('resize',fit);fit();
})();</script>`;
const css=['consulting-faq','faq-layout','hosting-tools','section-navigation-flow','microsoft-agent-365-integration'].map(n=>'<link rel="stylesheet" href="/assets/styles/'+n+'.css">').join('');
const output='<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Microsoft Agent 365 | XcellHost</title>'+fonts+styles+css+'</head><body>'+main+'<script src="/assets/scripts/hosting-tools-viewport.js"></script>'+core+bridge+'<script>'+runtime+'</script></body></html>';
for(const m of output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
fs.writeFileSync(path.join(root,'public/imported-microsoft-agent-365.html'),output);
console.log('Imported Microsoft Agent 365 with '+items.length+' original FAQs and interactive tools.');
