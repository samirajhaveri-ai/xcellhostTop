const fs=require('node:fs'),vm=require('node:vm');
const {parseFragment}=require('parse5');
const variants={
 ev:{variant:'ev',slug:'geotrust-true-businessid-ev',name:'GeoTrust True BusinessID with EV',heroId:'geHero'},
 ovFlex:{variant:'ovFlex',slug:'geotrust-true-businessid-ov',name:'GeoTrust TrueBusiness ID OV (FLEX)',heroId:'gtoHero'},
};
const variant=process.argv[3]||'ev';
if(!variants[variant])throw Error('Choose the ev or ovFlex import variant.');
const specs=[variants[variant]];
const sourcePath=process.argv[2];
if(!sourcePath)throw Error('Pass the supplied GeoTrust BusinessID HTML file path.');
const routes=Object.fromEntries([...['geotrust-true-businessid','geotrust-true-businessid-multi-domain','geotrust-true-businessid-ev','geotrust-true-businessid-ev-multi-domain','geotrust-true-businessid-wildcard'],'geotrust-dv-ssl-flex','geotrust-true-businessid-ev-flex','geotrust-ssl-certificates','geotrust-quickssl-premium','geotrust-quickssl-premium-san','geotrust-quickssl-premium-wildcard'].map(s=>[s+'.html','/'+s]));
routes['geotrust-true-businessid-flex.html']='/geotrust-true-businessid-ov';
routes['geotrust-true-businessid-ov.html']='/geotrust-true-businessid-ov';
function between(text,start,end){const a=text.indexOf(start),b=text.indexOf(end,a+start.length);if(a<0||b<0)throw Error('Missing source boundary: '+start);return text.slice(a,b)}
const dataPath='src/app/data/geotrust-businessid.data.ts';
const metadata=fs.readFileSync(dataPath,'utf8');
const dataStart=metadata.indexOf('export const BUSINESSID_PAGES = ')+'export const BUSINESSID_PAGES = '.length;
const data=JSON.parse(metadata.slice(dataStart,metadata.lastIndexOf(' as const;')));
for(const spec of specs){
 const source=fs.readFileSync(sourcePath,'utf8').replace(/\r\n/g,'\n');
 const styles=[...source.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map(m=>m[1]).join('\n');
 const fonts=[...source.matchAll(/<link\b[^>]+>/g)].map(m=>m[0]).filter(s=>/fonts\.(googleapis|gstatic)/.test(s)).join('\n');
 let content=between(source,'<section class="hero lh" id="'+spec.heroId+'"','<section class="sec" id="watch">');
 content=content.replace(/href="(geotrust-[^"#]+\.html)(#[^"]*)?"/g,(_,file,hash)=>'href="'+(routes[file]||'/geotrust-ssl-certificates')+(hash||'')+'" target="_parent"')
  .replace(/href="https:\/\/www\.xcellhost\.top\/"/g,'href="/" target="_parent"');
 const scripts=[...source.matchAll(/<script>([\s\S]*?)<\/script>/g)].map(m=>m[1]);
 const core=scripts.find(s=>s.includes('XcellHost v2 core runtime'));
 let product=scripts.find(s=>s.includes('function calc()'));
 if(!core||!product)throw Error('Missing runtime: '+spec.slug);
 const reveal=between(core,'  /* ---------- reveal, counters ---------- */','  /* ---------- FAQ ---------- */');
 const controls=between(core,'  /* ---------- tabs:', '\n})();');
 const live=between(core,'  /* typewriter:', '  /* chatbot */');
 product=product.replaceAll("window.scrollTo({top:t.getBoundingClientRect().top+scrollY-90,behavior:reduce?'auto':'smooth'});", "parent.postMessage({type:'businessid-scroll',target:'configure'},location.origin);")
 .replaceAll("window.scrollTo({top:el.getBoundingClientRect().top+scrollY-(off||110),behavior:reduce?'auto':'smooth'});", "parent.postMessage({type:'businessid-scroll',target:el.id},location.origin);")
 .replaceAll("window.scrollTo({top:cf.getBoundingClientRect().top+scrollY-90,behavior:reduce?'auto':'smooth'});", "parent.postMessage({type:'businessid-scroll',target:'configure'},location.origin);")
 .replace('(function(){',`(function(){
var importTimeoutIds=new Set(),importIntervalIds=new Set();
function setTimeout(fn,delay){var id=window.setTimeout(function(){importTimeoutIds.delete(id);fn()},delay);importTimeoutIds.add(id);return id}
function setInterval(fn,delay){var id=window.setInterval(fn,delay);importIntervalIds.add(id);return id}
function clearInterval(id){importIntervalIds.delete(id);window.clearInterval(id)}
addEventListener('pagehide',function(){importTimeoutIds.forEach(window.clearTimeout);importIntervalIds.forEach(window.clearInterval)},{once:true});`);
 const helpers=`(function(){
var d=document,root=d.documentElement,reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,fine=matchMedia('(pointer:fine)').matches;
function $(s,c){return (c||d).querySelector(s)}function $$(s,c){return Array.from((c||d).querySelectorAll(s))}
var importTimeoutIds=new Set(),importIntervalIds=new Set(),observers=[];
function setTimeout(fn,delay){var id=window.setTimeout(function(){importTimeoutIds.delete(id);fn()},delay);importTimeoutIds.add(id);return id}
function setInterval(fn,delay){var id=window.setInterval(fn,delay);importIntervalIds.add(id);return id}
function clearInterval(id){importIntervalIds.delete(id);window.clearInterval(id)}
var XH=window.XH={$:$,$$:$$,reduce:reduce,fine:fine,inr:function(n,dec){return '₹'+(+n||0).toLocaleString('en-IN',{minimumFractionDigits:dec||0,maximumFractionDigits:dec||0})},
 whenVisible:function(el,cb){if(!el)return;var o=new IntersectionObserver(function(es){cb(es[0].isIntersecting)},{threshold:.05});o.observe(el);observers.push(o)},
 toast:function(message){var el=$('#importToast');el.textContent=message;el.classList.add('on');parent.postMessage({type:'businessid-toast'},location.origin);setTimeout(function(){el.classList.remove('on')},2600)},
 cart:{add:function(item){parent.postMessage({type:'businessid-cart',item:item},location.origin)}}};
XH.download=function(name,text,type){var blob=new Blob([text],{type:type||'text/plain'}),a=d.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;d.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove()},500)};
${reveal}
${controls}
${live}
d.addEventListener('click',function(event){
 var button=event.target.closest('[data-open]');if(button){event.preventDefault();var topic=button.dataset.topic||${JSON.stringify(spec.name)};
 if(button.closest('#pricing'))topic+=' · '+['oCL','oSL','oWL','oSub','oPay'].map(function(id){var e=d.getElementById(id);return e?e.textContent:''}).filter(Boolean).join(' · ');
 parent.postMessage({type:'businessid-enquiry',configuration:topic},location.origin);return}
 var catalogue=event.target.closest('a[href]');if(catalogue&&/^geotrust-.*\\.html/.test(catalogue.getAttribute('href'))){var file=catalogue.getAttribute('href').split('#')[0];catalogue.href=(${JSON.stringify(routes)})[file]||'/geotrust-ssl-certificates';catalogue.target='_parent'}
 var link=event.target.closest('a[href^="#"]');if(link){event.preventDefault();var target=link.hash.slice(1);if(d.getElementById(target))parent.postMessage({type:'businessid-scroll',target:target},location.origin)}
});
addEventListener('pagehide',function(){importTimeoutIds.forEach(window.clearTimeout);importIntervalIds.forEach(window.clearInterval);observers.forEach(function(o){o.disconnect()});if(io)io.disconnect()},{once:true});
matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',function(){location.reload()});
})();`;
 for(const script of [helpers,product])new vm.Script(script);
 const output=`<!doctype html><html lang="en-IN" data-theme="light"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${spec.name} — XcellHost</title>${fonts}<style>${styles}
html,body{scroll-behavior:auto}main{display:flow-root}
@media(max-width:380px){.gl,.gl-k{grid-template-columns:minmax(0,1fr)}.vcard{min-width:0;overflow-wrap:anywhere}}
#importToast{position:absolute;left:50%;transform:translateX(-50%);max-width:calc(100% - 32px);padding:10px 18px;border-radius:12px;background:var(--navy);color:white;z-index:200;opacity:0;pointer-events:none;transition:opacity .2s}#importToast.on{opacity:1}
@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}.rv{opacity:1!important;transform:none!important}}
</style></head><body><main data-preserve-copy>${content}</main><div id="importToast" role="status"></div><script>${helpers}</script><script>${product}</script></body></html>`;
 fs.writeFileSync('public/assets/animations/'+spec.slug+'-content.html',output);
 const faqBlock=between(source,'<section class="sec" id="faq">','<section class="sec" id="contact">');
 const plain=html=>{const text=node=>node.nodeName==='#text'?node.value:(node.childNodes||[]).map(text).join('');return text(parseFragment(html)).trim()};
 const faqs=[...faqBlock.matchAll(/<div class="fq(?: open)?">([\s\S]*?)<\/p><\/div><\/div>/g)].slice(0,spec.variant==='ovFlex'?Infinity:8).map(m=>({question:plain(m[1].match(/<button[^>]*>([\s\S]*?)<i>/)[1]),answer:plain(m[1].match(/<div class="fa"><p>([\s\S]*)/)[1])}));
 if(faqs.length<8)throw Error('Missing FAQs: '+spec.slug);
 data[spec.variant]={...spec,faqs};
 console.log(spec.slug,Buffer.byteLength(output),'bytes,',faqs.length,'source FAQs');
}
fs.writeFileSync('src/app/data/geotrust-businessid.data.ts','/** Product-specific content copied from the supplied BusinessID reference files. */\nexport const BUSINESSID_PAGES = '+JSON.stringify(data,null,2)+' as const;\nexport type BusinessIdVariant = keyof typeof BUSINESSID_PAGES;\n');
