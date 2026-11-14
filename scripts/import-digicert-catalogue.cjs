const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm'),{parse}=require('parse5');
const root=path.resolve(__dirname,'..');
if(!process.argv[2])throw Error('Pass the supplied DigiCert catalogue HTML file.');
const source=fs.readFileSync(process.argv[2],'utf8'),nodes=[];
function walk(n){nodes.push(n);(n.childNodes||[]).forEach(walk)}walk(parse(source,{sourceCodeLocationInfo:true}));
const attr=(n,k)=>n.attrs?.find(a=>a.name===k)?.value||'',html=n=>source.slice(n.sourceCodeLocation.startOffset,n.sourceCodeLocation.endOffset);
let main=html(nodes.find(n=>n.tagName==='main')).replace('<main','<main data-customer-testimonials="off"');
const links={standard:'/digicert-standard-ssl',ev:'/digicert-ev-ssl',wildcard:'/digicert-wildcard-ssl',md:'/digicert-multi-domain-ssl',evmd:'/digicert-ev-multi-domain-ssl',ssf:'/digicert-secure-site-ssl/checkout?quantity=1',ssev:'/digicert-secure-site-ev-ssl',ssw:'/digicert-secure-site-wildcard-ssl',ssmd:'/digicert-secure-site-multi-domain-ssl',pro:'/digicert-secure-site-pro-ssl',proev:'/digicert-secure-site-pro-ev-ssl'};
const aliases={'digicert-services':'vendor-partners/digicert','geotrust-services':'geotrust-ssl-certificates'};
main=main.replace(/href="([a-z0-9-]+)\.html"/g,(_,slug)=>'href="/'+(aliases[slug]||slug)+'" target="_top"');
const styles=nodes.filter(n=>n.tagName==='style').map(html).join('\n').replace(/(\d*\.?\d+)vh\b/g,(_,n)=>'calc(var(--page-vh,1vh) * '+n+')');
const fonts=nodes.filter(n=>n.tagName==='link'&&/fonts\.(googleapis|gstatic)/.test(attr(n,'href'))).map(html).join('\n');
const core=fs.readFileSync(path.join(root,'public/imported-digicert-standard-ssl.html'),'utf8').match(/<script\b[^>]*>[\s\S]*?<\/script>/)[0];
let runtime=[...source.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].at(-1)[1];
// Only navigation changes: the supplied edition names, coverage, warranty and prices stay intact.
runtime=runtime.replace("var BY={};P.forEach",'var productLinks='+JSON.stringify(links)+';P.forEach(function(x){x.u=productLinks[x.k]||"#configure";});\n  var BY={};P.forEach');
runtime=runtime.replaceAll("href=\"'+x.u+'\"", "href=\"'+x.u+'\" '+(productLinks[x.k]?'target=\"_top\"':'data-cfg=\"'+x.k+'\"')+'");
runtime=runtime.replace("var a=$id('cLink');a.href=x.u;", "var a=$id('cLink');a.href=x.u;if(productLinks[x.k]){a.target='_top';a.removeAttribute('data-cfg');}else{a.removeAttribute('target');a.setAttribute('data-cfg',x.k);}");
runtime=runtime.replace("window.scrollTo({top:s.getBoundingClientRect().top+scrollY-120,behavior:R?'auto':'smooth'});",'window.hostingJumpTo(id);');
runtime=runtime.replace('href="geotrust-services.html"','href="/geotrust-ssl-certificates" target="_top"');
const bridge=String.raw`<script>(function(){
 const originalOpen=XH.open;
 XH.open=function(id,options){if(id==='xhCallback'){let topic=options?.topic||'Certificate enquiry';if(/quote|quotation/i.test(topic)){topic+='\n'+document.getElementById('cName').textContent+'\nQuantity: '+document.getElementById('cQty').value+'\nServers: '+document.getElementById('cSrv').value+'\n'+Array.from(document.querySelectorAll('#cList li')).map(li=>Array.from(li.children).map(el=>el.textContent).join(': ')).join('\n')+'\nSubtotal: '+document.getElementById('cSub').textContent+'\nGST: '+document.getElementById('cGst').textContent+'\nTotal: '+document.getElementById('cTot').textContent;}document.dispatchEvent(new CustomEvent('import-callback',{detail:'DigiCert SSL Certificates: '+topic}));return;}originalOpen(id,options);};
 const providers={chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search/new?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
 document.querySelectorAll('.lh-ask').forEach(box=>box.querySelectorAll('[data-ai]').forEach(a=>{a.href=providers[a.dataset.ai]+encodeURIComponent(box.dataset.q);a.target='_blank';a.rel='noopener noreferrer';}));
 document.addEventListener('click',e=>{if(e.target.closest('a[data-cfg]'))e.preventDefault();},true);
 function fit(){const h=document.querySelector('#dcHero h1');if(!h)return;h.style.setProperty('--dc-title-size','34px');const range=document.createRange();range.selectNodeContents(h);h.style.setProperty('--dc-title-size',Math.min(34,34*(h.clientWidth-2)/Math.max(1,range.getBoundingClientRect().width))+'px');}
 document.fonts.ready.then(fit);window.addEventListener('resize',fit);fit();
})();</script>`;
const output='<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>DigiCert SSL Certificates | XcellHost</title>'+fonts+styles+'<link rel="stylesheet" href="/assets/styles/digicert-catalogue-integration.css"></head><body>'+main+'<script src="/assets/scripts/hosting-tools-viewport.js"></script>'+core+bridge+'<script>'+runtime+'</script></body></html>';
for(const m of output.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
fs.writeFileSync(path.join(root,'public/imported-digicert-catalogue.html'),output);
console.log('Imported the complete DigiCert catalogue with 17 editions and local product anchors.');
