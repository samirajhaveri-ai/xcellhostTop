const fs=require('fs');
const strip=s=>s.replace(/<[^>]*>/g,'').replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&nbsp;/g,' ').trim();
let core=fs.readFileSync('output/import-review/core.txt','utf8');
core=core.replace(/  \/\* ---------- forms[\s\S]*?  \/\* ---------- search/,`  XH.onForm=function(){};\n  var cartEl=null;function cartOpen(){}\n  document.addEventListener('submit',function(e){var f=e.target.closest('[data-xhform]');if(!f)return;e.preventDefault();if(!f.reportValidity())return;document.dispatchEvent(new CustomEvent('import-callback',{detail:'Podcast enquiry: '+f.getAttribute('data-xhform')}));});\n  /* ---------- search`);
const bridge=`\n(function(){var open=XH.open;XH.open=function(id,opts){if(id==='xhCallback'){document.dispatchEvent(new CustomEvent('import-callback',{detail:opts&&opts.topic}));return;}open(id,opts);};XH.cart={add:function(item){document.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};})();`;
const caps=`h1,h2,h3,h4{text-transform:capitalize}.import-assurance h2,.import-assurance h3{text-transform:uppercase}.rv{opacity:1!important;transform:none!important}main{display:flow-root}body{margin:0}`;
for(const name of ['kubernetes','podcasts']){
 const source=fs.readFileSync('C:/Users/VibhaTiwari/Downloads/xcellhost-'+name+'.html','utf8');
 let main=source.match(/<main\b[\s\S]*?<\/main>/)[0];let js=fs.readFileSync('output/import-review/'+name+'-script.txt','utf8');
 const styles=[...source.matchAll(/<style[^>]*>[\s\S]*?<\/style>/g)].map(m=>m[0]).join('\n');
 const fonts=[...source.matchAll(/<link[^>]*href="https:\/\/fonts[^>]*>/g)].map(m=>m[0]).join('\n');
 if(name==='kubernetes'){
 const faq=main.slice(main.indexOf('<!-- ================= FAQ'));
 const pairs=[...faq.matchAll(/<div class="fq[^\"]*"><button[^>]*>([\s\S]*?)<i>[\s\S]*?<div class="fa"><p>([\s\S]*?)<\/p>/g)].map(m=>[strip(m[1]),strip(m[2])]);
 fs.writeFileSync('src/app/data/managed-kubernetes-faq.data.ts',"import { Faq } from './models';\nexport const MANAGED_KUBERNETES_FAQS: Faq[] = "+JSON.stringify(pairs,null,2)+';\n');
 main='<main>'+main.slice(main.indexOf('<!-- ================= WHAT'),main.indexOf('<!-- ================= COMPLIANCE'))+'</main>';
 }else{
 const extra=`<section class="sec import-assurance"><div class="wrap"><div class="sh"><h2>SECURITY &amp; PRIVACY — THE CLOUD PODCAST</h2><p>Episodes share general information. Keep customer data, credentials and confidential incidents out of guest submissions. Guests review their episode before publication; company-specific security or compliance questions can be discussed with our engineers.</p></div><div class="g3"><article class="card"><h3>Guest Review</h3><p>Review Your Recorded Conversation Before Publication.</p></article><article class="card"><h3>Responsible Sharing</h3><p>Use Anonymised Examples And Respect Customer Confidentiality.</p></article><article class="card"><h3>Practical Context</h3><p>Validate Recommendations Against Your Own Environment.</p></article></div><div class="sh"><h2>WHY LISTEN TO XCELLHOST</h2><p>Conversations With Cloud Architecture, Security Operations And Platform Teams Covering Indian Business Workloads.</p></div><div class="sh"><h2>LISTEN IN ACTION</h2><p>Explore The Episode Library, Read Show Notes And Play An Episode Brief Using The Player Above.</p><a class="btn btn-primary" href="#episodes">Explore Episodes</a></div><div class="sh"><h2>WHAT LISTENERS SAY</h2><p>Have Feedback On An Episode? Suggest A Topic Or Share Your Experience With The Podcast Team.</p><button class="btn btn-primary" data-open="podGuest">Share Feedback</button></div></div></section>`;
 main=main.replace('<!-- ================= FAQ',extra+'<!-- ================= FAQ');
 // Preserve illustrative labels; do not claim an email subscription was submitted.
 js=js.replace(/  XH.onForm\('podcast-subscribe',[\s\S]*?\n  var pgType=/,'  var pgType=');
 }
 main=main.replace(/href="xcellhost-([^"#]+)\.html"/g,(_,slug)=>'href="/'+({'kubernetes':'managed-kubernetes','podcasts':'under-construction/podcasts'}[slug]||slug)+'" target="_top"');
 const extra=name==='kubernetes'?'.sec{padding:36px 0}.wrap{width:100%;max-width:none}':'';
 fs.writeFileSync('public/imported-'+name+'.html','<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+fonts+styles+'<style>'+caps+extra+'</style></head><body>'+main+'<div class="toast" id="xhToast"><span id="xhToastT"></span></div><script>'+core+bridge+'</script><script>'+js+'</script></body></html>');
 console.log(name,'generated');
}
