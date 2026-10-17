/* Imported from managed-google-cloud.html; shared chrome uses the Angular shell. */
(function(){
  'use strict';
  var d=document,root=d.documentElement;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia('(pointer:fine)').matches;
  function $(s,c){return (c||d).querySelector(s);}
  function $$(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));}
  var XH=window.XH={reduce:reduce,fine:fine,$:$,$$:$$};
  XH.inr=function(n,dec){n=+n||0;return '₹'+n.toLocaleString('en-IN',{minimumFractionDigits:dec||0,maximumFractionDigits:dec||0});};
  XH.dark=function(){return root.getAttribute('data-theme')==='dark';};
  XH.open=function(id,opts){d.dispatchEvent(new CustomEvent('import-callback',{detail:opts&&opts.topic||'Managed Google Cloud Services'}));};
  XH.cart={add:function(item){d.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};
  XH.toast=function(message){var toast=$('#gcpToast');toast.textContent=message;toast.hidden=false;clearTimeout(XH.toastTimer);XH.toastTimer=setTimeout(function(){toast.hidden=true;},3000);};
  d.addEventListener('click',function(event){var button=event.target.closest('[data-open]');if(button){event.preventDefault();XH.open(button.getAttribute('data-open'),{topic:button.getAttribute('data-topic')});}});
  /* ---------- reveal, counters ---------- */
  var io='IntersectionObserver' in window?new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');if(x.target.hasAttribute('data-count'))countUp(x.target);io.unobserve(x.target);}});},{threshold:.14,rootMargin:'0px 0px -40px 0px'}):null;
  XH.observe=function(scope){$$('.rv,[data-count],.step',scope).forEach(function(el){if(io)io.observe(el);else el.classList.add('in');});};
  function countUp(el){var to=parseFloat(el.getAttribute('data-count')),dec=+(el.getAttribute('data-dec')||0),pre=el.getAttribute('data-pre')||'',suf=el.getAttribute('data-suf')||'';
    if(reduce){el.textContent=pre+to.toLocaleString('en-IN',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;return;}
    var t0=null,dur=1400;function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,4);el.textContent=pre+(to*e).toLocaleString('en-IN',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
  XH.observe();

  /* ---------- FAQ ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('.fq > button');if(!b)return;var q=b.parentNode,a=$('.fa',q),o=!q.classList.contains('open');q.classList.toggle('open',o);b.setAttribute('aria-expanded',o);a.style.maxHeight=o?a.scrollHeight+'px':'0px';});
  $$('.fq.open .fa').forEach(function(a){a.style.maxHeight=a.scrollHeight+'px';});

  /* ---------- tabs: <div data-tabs="g"><button data-tab="k">…  panels: <div data-panel="k" data-group="g"> ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('[data-tabs] [data-tab]');if(!b)return;var bar=b.closest('[data-tabs]'),g=bar.getAttribute('data-tabs'),k=b.getAttribute('data-tab');
    $$('[data-tab]',bar).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b);});
    $$('[data-panel][data-group="'+g+'"]').forEach(function(p){p.classList.toggle('on',p.getAttribute('data-panel')===k);});
    bar.dispatchEvent(new CustomEvent('xh:tab',{detail:{key:k}}));});

  /* ---------- segmented controls: <div class="seg" data-name="x"><button data-v="..."> ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('.seg button');if(!b)return;var s=b.parentNode;$$('button',s).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});s.dataset.value=b.getAttribute('data-v');s.dispatchEvent(new CustomEvent('change',{bubbles:true}));});
  $$('.seg').forEach(function(s){var on=$('button.on',s)||$('button',s);if(on){on.classList.add('on');s.dataset.value=on.getAttribute('data-v');}});

  /* ---------- range fill + steppers ---------- */
  function fillRange(r){var p=(r.value-r.min)/(r.max-r.min)*100;r.style.setProperty('--p',p+'%');}
  $$('input[type=range].rng').forEach(function(r){fillRange(r);r.addEventListener('input',function(){fillRange(r);});});
  XH.fillRange=fillRange;
  d.addEventListener('click',function(e){var b=e.target.closest('.stp button');if(!b)return;var inp=$('input',b.parentNode),mn=+(inp.min||0),mx=+(inp.max||9999),st=+(inp.step||1);inp.value=Math.max(mn,Math.min(mx,(+inp.value||0)+st*(+b.getAttribute('data-step'))));inp.dispatchEvent(new Event('input',{bubbles:true}));});
  d.addEventListener('change',function(e){var i=e.target;if(i.closest&&i.closest('.stp')){var mn=+(i.min||0),mx=+(i.max||9999);i.value=Math.max(mn,Math.min(mx,Math.round(+i.value||mn)));i.dispatchEvent(new Event('input',{bubbles:true}));}});

  /* ---------- copy ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('[data-copy]');if(!b)return;var t=b.getAttribute('data-copy')||location.href;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){XH.toast('Copied to clipboard');},function(){var ta=d.createElement('textarea');ta.value=t;d.body.appendChild(ta);ta.select();try{d.execCommand('copy');XH.toast('Copied to clipboard');}catch(x){}ta.remove();});});

  /* ---------- flash a value change ---------- */
  XH.flash=function(el){if(!el||reduce)return;el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');};

  /* ---------- download helper ---------- */
  XH.download=function(name,text,type){var b=new Blob([text],{type:type||'text/plain'});var a=d.createElement('a');a.href=URL.createObjectURL(b);a.download=name;d.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},500);};

  /* ---------- visibility helper for animations ---------- */
  XH.whenVisible=function(el,cb){if(!el)return;if(!('IntersectionObserver' in window)){cb(true);return;}new IntersectionObserver(function(en){en.forEach(function(x){cb(x.isIntersecting);});},{threshold:.05}).observe(el);};
})();


/* XcellHost live-UI runtime additions (typewriter, Ask-AI, chatbot, video embeds) */
(function(){
  'use strict';
  var d=document,XH=window.XH,$=XH.$,$$=XH.$$;

  /* typewriter: <div class="lh-type" data-words='["a","b"]'><span class="tw"></span><span class="cur"></span></div> */
  $$('.lh-type[data-words]').forEach(function(el){
    var words;try{words=JSON.parse(el.getAttribute('data-words'));}catch(e){return;}
    var out=$('.tw',el)||el,wi=0,ci=0,del=false,vis=true,tm;
    if(XH.reduce){out.textContent=words[0];return;}
    function tick(){if(!vis){tm=setTimeout(tick,400);return;}
      var w=words[wi];ci+=del?-1:1;out.textContent=w.slice(0,ci);
      var t=del?28:55;if(!del&&ci===w.length){del=true;t=1700;}else if(del&&ci===0){del=false;wi=(wi+1)%words.length;t=350;}
      tm=setTimeout(tick,t);}
    XH.whenVisible(el,function(v){vis=v;});tick();
  });

  /* Ask AI chips: <div class="lh-ask" data-q="question"> with <a data-ai="chatgpt|claude|perplexity|google|copilot"> */
  var AI={chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
  $$('.lh-ask[data-q]').forEach(function(box){var q=encodeURIComponent(box.getAttribute('data-q'));
    $$('a[data-ai]',box).forEach(function(a){var k=a.getAttribute('data-ai');if(AI[k]){a.href=AI[k]+q;a.target='_blank';a.rel='noopener';}});});

  /* click-to-play YouTube: any [data-yt] frame */
  function play(fr){var id=fr.getAttribute('data-yt');if(!id||fr.querySelector('iframe'))return;
    var f=d.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';f.allow='autoplay; encrypted-media; picture-in-picture';f.allowFullscreen=true;f.title='Video';fr.appendChild(f);}
  d.addEventListener('click',function(e){var fr=e.target.closest('[data-yt]');if(fr&&!fr.classList.contains('cvid'))play(fr);});
  d.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('[data-yt]')){e.preventDefault();play(e.target);}});

  /* hero network canvas (live "net") + pointer tilt */
  $$('.hero.lh canvas.lh-net').forEach(function(cv){
    var hero=cv.closest('.hero'),cx=cv.getContext('2d'),W,H,dpr=Math.min(2,window.devicePixelRatio||1),P=[],run=true,mx=-999,my=-999;
    function size(){W=hero.offsetWidth;H=hero.offsetHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);var n=Math.round(Math.min(90,W*H/16000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+.6,o:Math.random()<.12});}
    function draw(){cx.clearRect(0,0,W,H);for(var i=0;i<P.length;i++){var a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
      for(var k=i+1;k<P.length;k++){var b=P[k],dx=a.x-b.x,dy=a.y-b.y,dd=dx*dx+dy*dy;if(dd<12000){cx.strokeStyle='rgba(127,176,255,'+(.16*(1-dd/12000))+')';cx.lineWidth=1;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke();}}
      var ex=a.x-mx,ey=a.y-my,ed=ex*ex+ey*ey;if(ed<26000){cx.strokeStyle='rgba(255,140,26,'+(.35*(1-ed/26000))+')';cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(mx,my);cx.stroke();}
      cx.fillStyle=a.o?'rgba(255,140,26,.85)':'rgba(160,200,255,.75)';cx.beginPath();cx.arc(a.x,a.y,a.r,0,6.283);cx.fill();}
      if(run)requestAnimationFrame(draw);}
    size();addEventListener('resize',size);
    hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;});
    hero.addEventListener('pointerleave',function(){mx=my=-999;});
    if(XH.reduce){run=false;draw();return;}
    XH.whenVisible(hero,function(v){var was=run;run=v;if(v&&!was)requestAnimationFrame(draw);});requestAnimationFrame(draw);
  });
  if(XH.fine&&!XH.reduce)$$('.hero.lh .stage').forEach(function(st){var t=$('.lh-tilt',st);if(!t)return;
    st.addEventListener('pointermove',function(e){var r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform='rotateY('+(x*7)+'deg) rotateX('+(-y*7)+'deg)';});
    st.addEventListener('pointerleave',function(){t.style.transform='';});});

})();

(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,FINE=XH.fine,d=document;
  var DPR=Math.min(2,window.devicePixelRatio||1),TAU=Math.PI*2;
  function $id(i){return d.getElementById(i);}
  function setT(id,t){var e=typeof id==='string'?$id(id):id;if(e&&e.textContent!==t)e.textContent=t;}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function fmt(n){return Math.round(n).toLocaleString('en-IN');}
  function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function eo(t){return 1-Math.pow(1-t,3);}
  function sstep(t){return t*t*(3-2*t);}
  function spring(u){return u<=0?0:u>1.4?1:1-Math.exp(-7*u)*Math.cos(8*u);}
  function rgba(c,a){return 'rgba('+c[0]+','+c[1]+','+c[2]+','+(+a).toFixed(3)+')';}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function dark(){return d.documentElement.getAttribute('data-theme')==='dark';}
  function segV(el){if(!el)return null;var b=$('button.on',el);return el.dataset.value||(b?b.getAttribute('data-v'):null);}
  function segSet(el,v){if(!el)return;var b=$('button[data-v="'+v+'"]',el);if(b&&!b.classList.contains('on'))b.click();}
  function lakh(n){return n>=100000?'₹'+(n/100000).toFixed(n>=1000000?0:1).replace(/\.0$/,'')+' L':XH.inr(n);}

  /* ---------- indicative prices (INR, excl. 18% GST) — single source ---------- */
  var P={ess:14999,pro:39999,assess:49999,lz:149999,gke:7999,bq:6999,bk:5999,fo:4999,sp:9999,dr:9999,xEss:999,xPro:799,env:4999,pct:.08,min:14999};
  var INC={ess:10,pro:40,ent:0};
  $$('[data-pr]').forEach(function(e){var k=e.getAttribute('data-pr');if(P[k])e.textContent=XH.inr(P[k]);});

  var B=[66,133,244],RD=[234,67,53],Y=[251,188,4],G=[52,168,83],COLS=[B,RD,Y,G];
  function th(){return dark()?{ink:'#EAF1FF',mut:'#8fa3c7',line:'rgba(255,255,255,.09)',grid:'rgba(255,255,255,.05)',surf:'#0F1F3D',dot:'rgba(255,255,255,.10)'}:{ink:'#0B132B',mut:'#5B6782',line:'rgba(11,19,43,.10)',grid:'rgba(11,19,43,.05)',surf:'#ffffff',dot:'rgba(11,19,43,.10)'};}

  /* =========================================================
     One shared requestAnimationFrame ticker for every loop
     ========================================================= */
  var subs=[],raf=0,last=0;
  function frame(t){var dt=last?Math.min(64,Math.max(0,t-last)):16;last=t;
    for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on)s.fn(t,dt);}
    var any=false;for(i=0;i<subs.length;i++)if(subs[i].on){any=true;break;}
    if(any)raf=requestAnimationFrame(frame);else{raf=0;last=0;}}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  var tweens={},twId=0,twOn=loop(function(t,dt){var any=false;for(var k in tweens){var o=tweens[k];o.p=Math.min(1,o.p+dt/(o.ms||650));o.el.textContent=o.f(o.a+(o.b-o.a)*eo(o.p));if(o.p<1)any=true;else delete tweens[k];}if(!any)twOn(false);});
  function tween(el,to,f,ms){if(!el)return;if(!el._tw)el._tw='t'+(twId++);var from=el._v===undefined?0:el._v;el._v=to;if(R||from===to){el.textContent=f(to);delete tweens[el._tw];return;}tweens[el._tw]={el:el,a:from,b:to,p:0,f:f,ms:ms};twOn(true);}
  function fitC(cv){var w=cv.clientWidth||cv.parentNode.clientWidth,h=cv.clientHeight||cv.parentNode.clientHeight;if(!w||!h)return null;if(cv.width!==Math.round(w*DPR)||cv.height!==Math.round(h*DPR)){cv.width=Math.round(w*DPR);cv.height=Math.round(h*DPR);}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function seeded(s){return function(){s=(s*9301+49297)%233280;return s/233280;};}
  function quad(a,c,b,t){var u=1-t;return [u*u*a[0]+2*u*t*c[0]+t*t*b[0],u*u*a[1]+2*u*t*c[1]+t*t*b[1]];}
  function txt(c,s,x,y,font,col,al){c.font=font;c.fillStyle=col;c.textAlign=al||'left';c.fillText(s,x,y);}

  var hero=$id('gcHero');

  /* =========================================================
     HERO · five live scenes
     ========================================================= */
  var slides=$$('#gcScr .gc-sl'),dots=$$('#gcDots button'),chips=$$('#gcOrbit .gc-oc');
  var SC=[
    {cap:'GKE · cluster autoscaler adds a node',reg:'asia-south1 · Mumbai',c:B,L:['Nodes','Pods running','CPU · HPA target 60%','Release channel'],
     log:[['HPA','checkout-api scaled 4 → 8 pods'],['CA','node-pool-a +1 node (n2-standard-4)'],['MAINT','upgrade window Sun 02:00 IST'],['PDB','disruption budget respected · 0 errors'],['IMG','Artifact Registry scan · 0 critical']]},
    {cap:'BigQuery · partitioning cuts bytes scanned',reg:'asia-south1 · dataset sales',c:Y,L:['Queries / min','Avg scanned / query','Slot utilisation','Est. cost / day'],
     log:[['QUERY','7f3a scanned 92 GB · full table'],['FIX','sales_txn partitioned by order_date'],['FIX','clustered on region, sku'],['QUOTA','custom quota 2 TB/day per user'],['QUERY','9c1e scanned 4.1 GB · pruned']]},
    {cap:'Cloud Run · burst, scale out, scale to zero',reg:'asia-south1 · service orders',c:G,L:['Requests / s','Instances','p95 latency','Cold starts'],
     log:[['BURST','0 → 1,800 req/s in 40 s'],['SCALE','instances 1 → 11 (max 20)'],['REV','orders-00042 · 100% traffic'],['P95','182 ms at peak'],['IDLE','traffic quiet · scaled to zero']]},
    {cap:'Network · Google backbone into Mumbai & Delhi',reg:'asia-south1 + asia-south2',c:B,L:['India regions','Zones in use','Edge → Mumbai','DR copy → Delhi'],
     log:[['LB','global LB → asia-south1 · healthy'],['LINK','Interconnect · your DC ↔ Mumbai · up'],['DR','snapshot copy → asia-south2 done'],['VPN','office HA VPN · 2 tunnels up'],['TEST','failover runbook drill · passed']]},
    {cap:'FinOps · on-demand spend moves to commitments',reg:'billing account · INR',c:RD,L:['Monthly bill','CUD coverage','Idle VMs removed','Savings'],
     log:[['RIGHT','14 VMs n2-std-8 → n2-std-4'],['CUD','1-yr commitment sized to 60% of baseline'],['SCHED','non-prod off 20:00–08:00'],['BUDGET','alert at 80% · team-payments'],['SPOT','batch jobs moved to Spot VMs']]}
  ];
  var cv=slides.map(function(s){return $('canvas',s);}),cur=0,prev=-1,el=0,fade=1e9,DUR=5500,paused=false,hover=false,st=[{},{},{},{},{}];
  var capN=$id('gcCapN'),capT=$id('gcCapT'),capEl=$id('gcCap'),regEl=$id('gcReg'),tick=$id('gcTick');
  var K=[0,1,2,3].map(function(i){return $id('gcK'+i);}),KL=[0,1,2,3].map(function(i){return $id('gcL'+i);}),SP=[0,1,2,3].map(function(i){var s=$id('gcS'+i);s.innerHTML=new Array(9).join('<i></i>');return $$('i',s);});

  function reset(k){var s=st[k];
    if(k===0){s.pods=[];s.on=[-1e4,-1e4,-1e4,-1,-1];s.parts=[];s.sp=0;}
    if(k===1){s.bars=[];s.mark=null;}
    if(k===2){s.inst=[];for(var i=0;i<12;i++)s.inst.push({v:0,on:false});s.parts=[];s.cold=0;}
    if(k===3){}
    if(k===4){}
  }
  /* ---- scene 0 · GKE autoscaling ---- */
  function s0(c,w,h,t,p,dt){var s=st[0],T=th();
    var load=.25+.75*sstep(clamp(p*1.3,0,1)),target=Math.round(8+19*sstep(clamp(p*1.25,0,1))),need=Math.max(3,Math.min(5,Math.ceil(target/6)));
    for(var i=3;i<5;i++)if(i<need&&s.on[i]<0)s.on[i]=t;
    var act=0;for(i=0;i<5;i++)if(s.on[i]!==-1)act++;
    var ix=16,iw=Math.max(78,w*.13),top=62,bot=h-18,x0=ix+iw+26,x1=w-14,sw=(x1-x0)/5,ny=top+18,nh=bot-ny;
    /* ingress */
    rr(c,ix,ny,iw,nh,14);c.fillStyle=T.surf;c.fill();c.strokeStyle=T.line;c.lineWidth=1;c.stroke();
    txt(c,'Ingress',ix+iw/2,ny+22,'700 12px Sora',T.ink,'center');txt(c,'HTTPS LB',ix+iw/2,ny+37,'500 9.5px IBM Plex Mono',T.mut,'center');
    var lh=(nh-64)*load;rr(c,ix+iw/2-9,ny+nh-12-lh,18,lh,6);c.fillStyle=rgba(B,.85);c.fill();
    txt(c,Math.round(load*100)+'% load',ix+iw/2,ny+nh-16-lh-6,'600 9.5px IBM Plex Mono',T.mut,'center');
    txt(c,'node-pool-a · autoscaling 3 → 5 nodes',x0+4,ny-8,'500 10px IBM Plex Mono',T.mut);
    /* nodes */
    var nodes=[];for(i=0;i<5;i++){var nx=x0+i*sw+5,nw=sw-10,live=s.on[i]!==-1,sc=live?spring((t-s.on[i])/650):0;
      if(!live){c.save();c.setLineDash([4,5]);rr(c,nx,ny,nw,nh,12);c.strokeStyle=T.line;c.stroke();c.restore();txt(c,'capacity',nx+nw/2,ny+nh/2,'500 9.5px IBM Plex Mono',T.mut,'center');continue;}
      c.save();c.translate(nx+nw/2,ny+nh/2);c.scale(sc,sc);c.translate(-(nx+nw/2),-(ny+nh/2));
      rr(c,nx,ny,nw,nh,12);c.fillStyle=T.surf;c.fill();var isNew=t-s.on[i]<1800&&s.on[i]>0;c.strokeStyle=isNew?rgba(G,.9):T.line;c.lineWidth=isNew?2:1;c.stroke();
      txt(c,'node-'+(i+1),nx+10,ny+18,'700 11px Sora',T.ink);if(isNew){rr(c,nx+nw-40,ny+7,32,15,7);c.fillStyle=rgba(G,.18);c.fill();txt(c,'NEW',nx+nw-24,ny+18,'700 9px IBM Plex Mono',rgba(G,1),'center');}
      c.restore();nodes.push({x:nx,w:nw,i:i});}
    /* pods */
    while(s.pods.length<target)s.pods.push({x:ix+iw,y:ny+nh/2,t:t,c:s.pods.length%4});
    var ps=Math.max(10,Math.min((sw-10-26)/2,(nh-40)/3.6)),k=Math.min(1,dt*.006);
    for(i=0;i<s.pods.length;i++){var pd=s.pods[i],nd=nodes[i%nodes.length],slot=Math.floor(i/nodes.length),cx=nd.x+9+(slot%2)*(ps+8),cy=ny+30+Math.floor(slot/2)*(ps+8);
      if(cy+ps>ny+nh-6){cy=ny+nh-6-ps;}
      pd.x+=(cx-pd.x)*k;pd.y+=(cy-pd.y)*k;var g=spring((t-pd.t)/500);
      c.save();c.translate(pd.x+ps/2,pd.y+ps/2);c.scale(g,g);rr(c,-ps/2,-ps/2,ps,ps,5);c.fillStyle=rgba(COLS[pd.c],.88);c.fill();c.restore();}
    /* request packets */
    s.sp+=dt*load*.022;while(s.sp>1&&s.parts.length<60){s.sp--;var tp=s.pods[(Math.random()*s.pods.length)|0];s.parts.push({a:[ix+iw,ny+20+Math.random()*(nh-40)],tp:tp,t:0,c:tp.c});}
    for(i=s.parts.length-1;i>=0;i--){var q=s.parts[i];q.t+=dt/700;if(q.t>=1){s.parts.splice(i,1);continue;}
      var bb=[q.tp.x+ps/2,q.tp.y+ps/2],cc=[(q.a[0]+bb[0])/2,Math.min(q.a[1],bb[1])-30],pt=quad(q.a,cc,bb,eo(q.t));
      c.beginPath();c.arc(pt[0],pt[1],2.4,0,TAU);c.fillStyle=rgba(COLS[q.c],1-q.t*.5);c.fill();}
    var cpu=Math.round(clamp(38+46*load-(act-3)*12,30,79));
    return [String(act),String(s.pods.length),cpu+'%','Regular'];
  }
  /* ---- scene 1 · BigQuery bars ---- */
  function s1(c,w,h,t,p,dt){var s=st[1],T=th(),x0=20,x1=w-18,y0=62,y1=h-30,gh=y1-y0;
    for(var g=0;g<=4;g++){var gy=y1-gh*g/4;c.strokeStyle=T.grid;c.lineWidth=1;c.beginPath();c.moveTo(x0,gy);c.lineTo(x1,gy);c.stroke();}
    txt(c,'GB scanned per query',x0,y0-8,'500 10px IBM Plex Mono',T.mut);
    var sp=.065*dt,lastB=s.bars[s.bars.length-1];
    if(!lastB||lastB.x<x1-17){var aft=p>=.45;s.bars.push({x:x1,v:aft?.05+Math.random()*.15:.5+Math.random()*.45,c:aft?(Math.random()<.5?3:0):(Math.random()<.55?1:2),t:t});}
    if(p>=.45&&!s.mark)s.mark={x:x1};
    var sum=0,n=0;
    for(var i=s.bars.length-1;i>=0;i--){var b=s.bars[i];b.x-=sp;if(b.x<x0-12){s.bars.splice(i,1);continue;}
      var hh=b.v*gh*spring((t-b.t)/500);rr(c,b.x,y1-hh,10,hh,3);c.fillStyle=rgba(COLS[b.c],.85);c.fill();if(b.x<x1-20){sum+=b.v;n++;}}
    if(s.mark){s.mark.x-=sp;if(s.mark.x>x0){c.save();c.setLineDash([4,4]);c.strokeStyle=rgba(G,.9);c.lineWidth=1.5;c.beginPath();c.moveTo(s.mark.x,y0);c.lineTo(s.mark.x,y1);c.stroke();c.restore();
      var lx=Math.min(s.mark.x+8,x1-150);rr(c,lx,y0+4,148,20,6);c.fillStyle=rgba(G,.16);c.fill();txt(c,'partition + cluster applied',lx+74,y0+18,'600 9.5px IBM Plex Mono',dark()?'#81C995':'#1E8A3E','center');}}
    var avg=n?sum/n:.7,ay=y1-avg*gh;c.save();c.setLineDash([6,4]);c.strokeStyle=T.ink;c.globalAlpha=.5;c.beginPath();c.moveTo(x0,ay);c.lineTo(x1,ay);c.stroke();c.restore();
    var gb=Math.round(avg*120);rr(c,x1-78,ay-22,76,18,6);c.fillStyle=T.surf;c.fill();c.strokeStyle=T.line;c.stroke();txt(c,'avg '+gb+' GB',x1-40,ay-9,'700 10px IBM Plex Mono',T.ink,'center');
    return [String(112+Math.round(8*Math.sin(t/700))),gb+' GB',(gb>40?88+Math.round(4*Math.sin(t/500)):34+Math.round(4*Math.sin(t/500)))+'%','₹'+fmt(gb*58)];
  }
  /* ---- scene 2 · Cloud Run bursts ---- */
  function s2(c,w,h,t,p,dt){var s=st[2],T=th();
    var r=p>.86?0:.06+.94*Math.exp(-Math.pow((p-.42)/.17,2)),want=p>.86?0:Math.max(1,Math.ceil(r*11));
    var gx0=w*.55,gx1=w-16,gy0=62,gy1=h-18,cw=(gx1-gx0)/4,ch=(gy1-gy0)/3;
    for(var i=0;i<12;i++){var it=s.inst[i],on=i<want;if(on&&!it.on){it.on=true;s.cold++;}if(!on)it.on=false;it.v+=((on?1:0)-it.v)*Math.min(1,dt*.007);
      var cx=gx0+(i%4)*cw+cw/2,cy=gy0+Math.floor(i/4)*ch+ch/2,bw=cw-12,bh=ch-12;it.x=cx;it.y=cy;
      c.save();c.setLineDash([3,4]);rr(c,cx-bw/2,cy-bh/2,bw,bh,10);c.strokeStyle=T.line;c.stroke();c.restore();
      if(it.v>.02){c.save();c.globalAlpha=it.v;c.translate(cx,cy);c.scale(.6+.4*it.v,.6+.4*it.v);rr(c,-bw/2,-bh/2,bw,bh,10);c.fillStyle=T.surf;c.fill();c.strokeStyle=rgba(COLS[i%4],.9);c.lineWidth=1.6;c.stroke();
        c.beginPath();c.moveTo(-5,-7);c.lineTo(7,0);c.lineTo(-5,7);c.closePath();c.fillStyle=rgba(COLS[i%4],.95);c.fill();txt(c,'inst-'+(i+1),0,bh/2-6,'500 9px IBM Plex Mono',T.mut,'center');c.restore();}}
    txt(c,'instances · max 20',gx0,gy0-8,'500 10px IBM Plex Mono',T.mut);
    /* request history curve */
    var hx0=20,hx1=w*.46,hy1=h-22,hy0=h-92;txt(c,'requests / s',hx0,hy0-8,'500 10px IBM Plex Mono',T.mut);
    c.beginPath();for(var j=0;j<=60;j++){var pp=p*j/60,rv=pp>.86?0:.06+.94*Math.exp(-Math.pow((pp-.42)/.17,2)),xx=hx0+(hx1-hx0)*pp,yy=hy1-(hy1-hy0)*rv;if(j)c.lineTo(xx,yy);else c.moveTo(xx,yy);}c.strokeStyle=rgba(G,.95);c.lineWidth=2.2;c.stroke();
    c.strokeStyle=T.line;c.lineWidth=1;c.beginPath();c.moveTo(hx0,hy1);c.lineTo(hx1,hy1);c.stroke();
    var cxp=hx0+(hx1-hx0)*p,cyp=hy1-(hy1-hy0)*r;c.beginPath();c.arc(cxp,cyp,4,0,TAU);c.fillStyle=rgba(G,1);c.fill();
    /* request particles */
    var actv=s.inst.filter(function(x){return x.on;});
    if(actv.length){var nsp=r*dt*.09;while(nsp-->Math.random()&&s.parts.length<110){var tg=actv[(Math.random()*actv.length)|0];s.parts.push({x:-4,y:70+Math.random()*(h-190),tg:tg,c:(Math.random()*4)|0,v:.35+Math.random()*.25});}}
    for(i=s.parts.length-1;i>=0;i--){var q=s.parts[i];var dx=q.tg.x-q.x,dy=q.tg.y-q.y,dd=Math.sqrt(dx*dx+dy*dy);if(dd<10||!q.tg.on){s.parts.splice(i,1);continue;}q.x+=dx/dd*q.v*dt;q.y+=dy/dd*q.v*dt*.9;
      c.beginPath();c.arc(q.x,q.y,2.2,0,TAU);c.fillStyle=rgba(COLS[q.c],.9);c.fill();}
    if(p>.88){var a=clamp((p-.88)/.05,0,1);c.globalAlpha=a;rr(c,gx0+(gx1-gx0)/2-70,gy0+(gy1-gy0)/2-15,140,30,15);c.fillStyle=rgba(G,.16);c.fill();txt(c,'scaled to zero',gx0+(gx1-gx0)/2,gy0+(gy1-gy0)/2+4,'700 12px Sora',dark()?'#81C995':'#1E8A3E','center');c.globalAlpha=1;}
    return [fmt(r*1800),String(want),(want?Math.round(120+70*r):0)+' ms',String(s.cold)];
  }
  /* ---- scene 3 · network into Mumbai & Delhi ---- */
  var POP=[{x:.08,y:.34,l:'Users · Bengaluru',to:'M'},{x:.1,y:.8,l:'Users · Pune',to:'M'},{x:.3,y:.2,l:'Global LB edge',to:'M'},{x:.3,y:.2,l:'',to:'D'},{x:.92,y:.24,l:'Office · HA VPN',to:'M'},{x:.9,y:.82,l:'Your DC · Interconnect',to:'M'},{x:.34,y:.9,l:'Mobile app users',to:'M'}];
  function s3(c,w,h,t,p,dt){var T=th();c.fillStyle=T.dot;for(var gx=12;gx<w;gx+=18)for(var gy=56;gy<h;gy+=18){c.fillRect(gx,gy,1.4,1.4);}
    var M=[w*.56,h*.68],D=[w*.66,h*.36],hubs={M:M,D:D};
    for(var i=0;i<POP.length;i++){var o=POP[i],a=[o.x*w,o.y*h],b=hubs[o.to],cc=[(a[0]+b[0])/2,(a[1]+b[1])/2-40],dr=clamp((p-i*.04)/.25,0,1);
      c.beginPath();c.moveTo(a[0],a[1]);for(var j=1;j<=24;j++){if(j/24>dr)break;var q=quad(a,cc,b,j/24);c.lineTo(q[0],q[1]);}c.strokeStyle=rgba(COLS[i%4],.55);c.lineWidth=1.6;c.stroke();
      if(dr>=1){for(var k=0;k<2;k++){var tt=((t/1500)+i*.17+k*.5)%1,q2=quad(a,cc,b,tt);c.beginPath();c.arc(q2[0],q2[1],2.8,0,TAU);c.fillStyle=rgba(COLS[i%4],1);c.fill();}}
      if(o.l){c.beginPath();c.arc(a[0],a[1],5,0,TAU);c.fillStyle=T.surf;c.fill();c.strokeStyle=rgba(COLS[i%4],.9);c.lineWidth=2;c.stroke();
        var al=o.x>.6?'right':'left',lx=o.x>.6?a[0]-10:a[0]+10;txt(c,o.l,lx,a[1]-9,'600 10px IBM Plex Mono',T.mut,al);}}
    /* DR arc */
    c.save();c.setLineDash([7,6]);c.lineDashOffset=-t*.03;c.strokeStyle=rgba(G,.95);c.lineWidth=3;c.beginPath();c.moveTo(M[0]+12,M[1]-20);c.quadraticCurveTo(M[0]+70,(M[1]+D[1])/2,D[0]+6,D[1]+24);c.stroke();c.restore();
    var lx2=M[0]+62,ly2=(M[1]+D[1])/2+4;rr(c,lx2,ly2-13,118,20,6);c.fillStyle=rgba(G,.16);c.fill();txt(c,'async copy → Delhi',lx2+59,ly2+1,'600 9.5px IBM Plex Mono',dark()?'#81C995':'#1E8A3E','center');
    [['M',M,'Mumbai','asia-south1',B],['D',D,'Delhi','asia-south2',RD]].forEach(function(hb,n){var x=hb[1][0],y=hb[1][1];
      c.beginPath();c.arc(x,y,24+2*Math.sin(t/400+n),0,TAU);c.fillStyle=rgba(hb[4],.14);c.fill();c.beginPath();c.arc(x,y,15,0,TAU);c.fillStyle=rgba(hb[4],.95);c.fill();
      for(var z=0;z<3;z++){var an=t/2600+z*TAU/3+n;c.beginPath();c.arc(x+Math.cos(an)*31,y+Math.sin(an)*31*.55,3.6,0,TAU);c.fillStyle=T.surf;c.fill();c.strokeStyle=rgba(hb[4],1);c.lineWidth=1.6;c.stroke();}
      c.font='500 9.5px IBM Plex Mono';var lw3=Math.max(64,c.measureText(hb[3]+' · 3 zones').width+14);rr(c,x-40-lw3,y-11,lw3,34,8);c.fillStyle=T.surf;c.fill();c.strokeStyle=T.line;c.lineWidth=1;c.stroke();txt(c,hb[2],x-47,y+3,'700 12px Sora',T.ink,'right');txt(c,hb[3]+' · 3 zones',x-47,y+16,'500 9.5px IBM Plex Mono',T.mut,'right');});
    var sync=p<.55?Math.round(60+40*p/.55)+'%':'in sync';
    return ['2','6',(17+Math.round(2*Math.sin(t/600)))+' ms',sync];
  }
  /* ---- scene 4 · FinOps donut ---- */
  var FA=[.84,0,.12,.04],FB=[.30,.46,.12,.12],FL=['On-demand','Committed use','Sustained use','Spot VMs'],FC=[RD,B,Y,G];
  function s4(c,w,h,t,p,dt){var T=th(),q=eio(clamp((p-.12)/.55,0,1)),sh=FA.map(function(a,i){return lerp(a,FB[i],q);});
    var cx=w*.25,cy=h*.58,Rr=Math.min(h*.31,w*.17),lw=Rr*.36,a0=-Math.PI/2+t/9000;
    c.beginPath();c.arc(cx,cy,Rr,0,TAU);c.strokeStyle=T.line;c.lineWidth=lw;c.stroke();
    for(var i=0;i<4;i++){var a1=a0+sh[i]*TAU;if(sh[i]>.004){c.beginPath();c.arc(cx,cy,Rr,a0+.02,a1-.02);c.strokeStyle=rgba(FC[i],.95);c.lineWidth=lw;c.stroke();}a0=a1;}
    var bill=10-2.4*q;txt(c,'₹'+bill.toFixed(1)+' L',cx,cy+5,'800 '+Math.round(Rr*.3)+'px Sora',T.ink,'center');if(Rr>70)txt(c,'monthly bill · sample',cx,cy+Rr*.3,'500 9.5px IBM Plex Mono',T.mut,'center');
    var lx=w*.5,lw2=w-24-lx-110,ly=74;
    for(i=0;i<4;i++){var y=ly+i*40;c.beginPath();c.arc(lx+5,y-4,5,0,TAU);c.fillStyle=rgba(FC[i],1);c.fill();txt(c,FL[i],lx+16,y,'600 11.5px Sora',T.ink);
      txt(c,Math.round(sh[i]*100)+'%',w-24,y,'700 11.5px IBM Plex Mono',T.ink,'right');rr(c,lx+16,y+7,lw2+90,6,3);c.fillStyle=T.line;c.fill();rr(c,lx+16,y+7,Math.max(2,(lw2+90)*sh[i]),6,3);c.fillStyle=rgba(FC[i],.9);c.fill();}
    var by=ly+4*40+6,bw=w-24-lx-16;txt(c,'before',lx+16,by+10,'500 9.5px IBM Plex Mono',T.mut);rr(c,lx+64,by+2,bw-48,10,4);c.fillStyle=rgba(RD,.35);c.fill();
    txt(c,'after',lx+16,by+28,'500 9.5px IBM Plex Mono',T.mut);rr(c,lx+64,by+20,(bw-48)*(bill/10),10,4);c.fillStyle=rgba(G,.85);c.fill();
    return ['₹'+bill.toFixed(1)+' L',Math.round(q*46)+'%',String(Math.round(q*14)),Math.round(q*24)+'%'];
  }
  var SF=[s0,s1,s2,s3,s4];

  /* captions, KPIs, ticker */
  var logI=0,logT=0,kT=0,spT=0,lastK=['','','',''];
  function pushLog(){if(!tick)return;var L=SC[cur].log[logI%SC[cur].log.length];logI++;var old=$$('li',tick);old.forEach(function(o){o.classList.add('out');setTimeout(function(){if(o.parentNode)o.parentNode.removeChild(o);},650);});
    var li=d.createElement('li');li.className='in';li.innerHTML='<em>'+new Date().toTimeString().slice(0,8)+'</em><b>'+esc(L[0])+'</b><span>'+esc(L[1])+'</span>';li.style.setProperty('--ct','rgb('+SC[cur].c.join(',')+')');tick.appendChild(li);}
  function setScene(k,user){if(k===cur&&!user)return;prev=cur;cur=k;el=0;fade=0;reset(k);logI=0;
    slides.forEach(function(s,i){s.classList.toggle('on',i===k);});
    dots.forEach(function(b,i){b.classList.toggle('on',i===k);b.setAttribute('aria-selected',i===k);b.style.setProperty('--p',i<k?1:0);});
    chips.forEach(function(ch){ch.classList.toggle('on',+ch.getAttribute('data-s')===k);});
    setT(capN,'0'+(k+1));setT(capT,SC[k].cap);setT(regEl,SC[k].reg);capEl.classList.remove('sw');void capEl.offsetWidth;capEl.classList.add('sw');
    $('b',capEl).style.background='rgb('+SC[k].c.join(',')+')';
    SC[k].L.forEach(function(l,i){setT(KL[i],l);});lastK=['','','',''];pushLog();logT=0;if(R)updK(drawScene(k,4000,1,16));}
  function drawScene(k,t,p,dt){var f=fitC(cv[k]);if(!f)return null;f.c.clearRect(0,0,f.w,f.h);return SF[k](f.c,f.w,f.h,t,p,dt);}
  function updK(vals){if(!vals)return;for(var i=0;i<4;i++){if(vals[i]!==lastK[i]){if(lastK[i]&&vals[i].replace(/\d/g,'')===lastK[i].replace(/\d/g,'')&&i<2&&cur!==1)bump(K[i]);setT(K[i],vals[i]);lastK[i]=vals[i];}}}
  function spark(){SP.forEach(function(bars){bars.forEach(function(b){b.style.height=(4+Math.random()*18)+'px';});});}

  /* orbit chips */
  var orbW=$('.gc-orbwrap'),ring=$id('gcRing'),stage=$id('gcStage'),card=$id('gcCard'),OA=0,orbOn=window.matchMedia('(min-width:981px)'),geo=null,cw=[];
  function measure(){if(!orbW)return;var W=orbW.clientWidth,H=orbW.clientHeight,cy=stage.offsetTop+card.offsetHeight/2,cwid=card.offsetWidth,ch=card.offsetHeight;
    geo={cx:W/2,cy:cy,rx:Math.min(W/2-80,cwid/2+190),ry:ch/2+36};cw=chips.map(function(c){return [c.offsetWidth,c.offsetHeight];});
    var e=$$('ellipse',ring);if(e[0]){e[0].setAttribute('cx',geo.cx);e[0].setAttribute('cy',geo.cy);e[0].setAttribute('rx',geo.rx);e[0].setAttribute('ry',geo.ry);e[1].setAttribute('cx',geo.cx);e[1].setAttribute('cy',geo.cy);e[1].setAttribute('rx',geo.rx+16);e[1].setAttribute('ry',geo.ry+10);}}
  function orbit(){if(!geo||!orbOn.matches)return;var n=chips.length;for(var i=0;i<n;i++){var a=OA+i*TAU/n,z=(Math.sin(a)+1)/2,s=.8+.2*z,x=geo.cx+geo.rx*Math.cos(a)-cw[i][0]/2,y=geo.cy+geo.ry*Math.sin(a)-cw[i][1]/2;
    chips[i].style.transform='translate3d('+x.toFixed(1)+'px,'+y.toFixed(1)+'px,0) scale('+s.toFixed(3)+')';chips[i].style.opacity=(.45+.55*z).toFixed(2);}}

  /* hero background: four-colour data points drifting, with pointer parallax */
  var bgc=$id('gcBg'),BP=[],mx=0,my=0,pmx=0,pmy=0;
  (function(){var rnd=seeded(7);for(var i=0;i<46;i++)BP.push({x:rnd(),y:rnd(),r:1.5+rnd()*3.2,z:.3+rnd()*.9,c:i%4,ph:rnd()*TAU,sq:rnd()<.3});})();
  function drawBg(t){var f=fitC(bgc);if(!f)return;var c=f.c;c.clearRect(0,0,f.w,f.h);pmx+=(mx-pmx)*.06;pmy+=(my-pmy)*.06;
    for(var i=0;i<BP.length;i++){var b=BP[i],x=((b.x*f.w+t*.008*b.z)%(f.w+40))-20+pmx*b.z*-22,y=b.y*f.h+Math.sin(t/2200+b.ph)*10*b.z+pmy*b.z*-16;
      c.globalAlpha=.22+.25*b.z;c.fillStyle=rgba(COLS[b.c],1);if(b.sq){rr(c,x-b.r,y-b.r,b.r*2,b.r*2,1.5);c.fill();}else{c.beginPath();c.arc(x,y,b.r,0,TAU);c.fill();}}
    c.globalAlpha=1;}

  if(hero&&slides.length){
    dots.forEach(function(b){b.addEventListener('click',function(){setScene(+b.getAttribute('data-k'),true);});});
    var pz=$id('gcPz');pz.addEventListener('click',function(){paused=!paused;pz.classList.toggle('p',paused);pz.setAttribute('aria-label',paused?'Play scenes':'Pause scenes');});
    stage.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')hover=true;});stage.addEventListener('pointerleave',function(){hover=false;});
    var sx=null,scr=$id('gcScr');scr.addEventListener('pointerdown',function(e){sx=e.clientX;});scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40)setScene((cur+(dx<0?1:4))%5,true);});
    scr.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});scr.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>40)setScene((cur+(dx<0?1:4))%5,true);},{passive:true});
    hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5;});
    d.addEventListener('xh:theme',function(){if(R){updK(drawScene(cur,4000,1,16));drawBg(0);}});reset(0);setScene(0,true);setTimeout(measure,60);addEventListener('resize',function(){measure();orbit();});if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){measure();orbit();});
    if(R){var v=drawScene(0,4000,1,16);updK(v);measure();orbit();spark();drawBg(0);}
    else{var hl=0,heroOn=loop(function(t,dt){
        drawBg(t);
        var rdt=hl?Math.min(250,Math.max(0,t-hl)):16;hl=t;var run=!paused&&!hover;if(run){el+=rdt;}var p=Math.min(1,el/DUR);
        dots[cur].style.setProperty('--p',p.toFixed(3));
        if(fade<900&&prev>=0){fade+=dt;drawScene(prev,t,1,dt);}
        var vals=drawScene(cur,t,p,run?dt:0);
        kT+=dt;if(kT>140){kT=0;updK(vals);}
        spT+=dt;if(spT>520){spT=0;spark();}
        logT+=run?rdt:0;if(logT>1300){logT=0;pushLog();}
        OA+=dt*.00011;if(pmx||pmy){orbW.style.transform='translate3d('+(pmx*-10).toFixed(1)+'px,'+(pmy*-6).toFixed(1)+'px,0)';}orbit();
        if(el>=DUR)setScene((cur+1)%5);
      });
      XH.whenVisible(hero,function(vv){hl=0;heroOn(vv);});}
  }

  /* =========================================================
     Sticky sub-nav
     ========================================================= */
  (function(){var nav=$id('gcSub');if(!nav)return;var hdr=$('.hdr'),links=$$('a',nav),secs=links.map(function(a){return $id(a.getAttribute('href').slice(1));}),cur2=-1,tk=false,CC=['b','r','y','g'];
    links.forEach(function(a,i){a.setAttribute('data-c',CC[i%4]);});
    function hh(){var h=hdr?hdr.getBoundingClientRect().height:80;d.documentElement.style.setProperty('--gc-hh',Math.round(h)+'px');}
    function upd(){tk=false;var y=window.frameElement?110-window.frameElement.getBoundingClientRect().top:nav.getBoundingClientRect().bottom+24,k=-1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<=y)k=i;});if(k!==cur2){cur2=k;links.forEach(function(a,i){a.classList.toggle('on',i===k);});var a=links[k];if(a){var tr=a.parentNode;tr.scrollTo({left:a.offsetLeft-tr.clientWidth/2+a.offsetWidth/2,behavior:R?'auto':'smooth'});}}}
    function jump(id){var t=$id(id);if(!t)return false;window.scrollTo({top:t.getBoundingClientRect().top+scrollY-(nav.getBoundingClientRect().height+(hdr?hdr.getBoundingClientRect().height:80)+4),behavior:R?'auto':'smooth'});return true;}
    hh();addEventListener('resize',hh);addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(upd);}},{passive:true});upd();
    $$('main a[href^="#"]').forEach(function(a){var id=a.getAttribute('href').slice(1);if(!id||!$id(id))return;a.addEventListener('click',function(e){if(a.hasAttribute('data-open'))return;if(jump(id))e.preventDefault();});});
  })();

  /* =========================================================
     Micro-interactions: magnetic CTAs, tilt on bento tiles, kinetic heading
     ========================================================= */
  if(FINE&&!R){
    $$('.gc-mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;b.style.transform='translate('+(x*.18).toFixed(1)+'px,'+(y*.3).toFixed(1)+'px)';});b.addEventListener('pointerleave',function(){b.style.transform='';});});
    $$('.gc-bt').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(900px) rotateY('+(x*5).toFixed(2)+'deg) rotateX('+(-y*5).toFixed(2)+'deg) translateY(-3px)';});c.addEventListener('pointerleave',function(){c.style.transform='';});});
  }
  $$('[data-kin]').forEach(function(h){var n=0;function split(node){[].slice.call(node.childNodes).forEach(function(ch){if(ch.nodeType===3){var f=d.createDocumentFragment();ch.textContent.split(/(\s+)/).forEach(function(w){if(!w)return;if(/^\s+$/.test(w)){f.appendChild(d.createTextNode(w));return;}var s=d.createElement('span');s.className='w';s.textContent=w;s.style.transitionDelay=(n++*45)+'ms';f.appendChild(s);});node.replaceChild(f,ch);}else if(ch.nodeType===1)split(ch);});}
    split(h);if(R){h.classList.add('go');return;}XH.whenVisible(h,function(v){if(v)h.classList.add('go');});});

  /* =========================================================
     Bento: live service graph + mini bars
     ========================================================= */
  (function(){var g=$id('gcGraph');if(!g)return;
    var N=[{k:'lb',l:'Load balancer',x:.1,y:.5,c:B},{k:'run',l:'Cloud Run',x:.34,y:.22,c:G},{k:'gke',l:'GKE',x:.34,y:.78,c:B},{k:'ps',l:'Pub/Sub',x:.6,y:.14,c:Y},{k:'sql',l:'Cloud SQL',x:.6,y:.52,c:RD},{k:'bq',l:'BigQuery',x:.88,y:.28,c:Y},{k:'gcs',l:'Cloud Storage',x:.88,y:.76,c:G},{k:'mon',l:'Monitoring',x:.6,y:.9,c:RD}];
    var M={};N.forEach(function(n){M[n.k]=n;});
    var E=[['lb','run'],['lb','gke'],['run','sql'],['gke','sql'],['run','ps'],['ps','bq'],['sql','bq'],['gke','gcs'],['mon','gke',1],['mon','sql',1]];
    function draw(t){var f=fitC(g);if(!f)return;var c=f.c,w=f.w,h=f.h,T=th(),px=function(n){return [24+n.x*(w-48),20+n.y*(h-40)];};c.clearRect(0,0,w,h);
      var cyc=(t%7000)/7000,alert=cyc>.45&&cyc<.7,fixed=cyc>=.7&&cyc<.9;
      E.forEach(function(e,i){var a=px(M[e[0]]),b=px(M[e[1]]);c.save();if(e[2])c.setLineDash([3,5]);c.strokeStyle=T.line;c.lineWidth=1.6;c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.stroke();c.restore();
        if(!e[2]){for(var k=0;k<2;k++){var tt=((t/1800)+i*.13+k*.5)%1;c.beginPath();c.arc(lerp(a[0],b[0],tt),lerp(a[1],b[1],tt),2.6,0,TAU);c.fillStyle=rgba(M[e[0]].c,.95);c.fill();}}});
      N.forEach(function(n,i){var p=px(n),r=13+Math.sin(t/500+i)*1.2;
        if(n.k==='sql'&&(alert||fixed)){var pr=((t%1000)/1000);c.beginPath();c.arc(p[0],p[1],r+6+pr*14,0,TAU);c.strokeStyle=rgba(alert?RD:G,1-pr);c.lineWidth=2;c.stroke();}
        c.beginPath();c.arc(p[0],p[1],r,0,TAU);c.fillStyle=T.surf;c.fill();c.strokeStyle=rgba(n.c,.95);c.lineWidth=2.4;c.stroke();c.beginPath();c.arc(p[0],p[1],4.5,0,TAU);c.fillStyle=rgba(n.c,1);c.fill();
        var al=n.x>.8?'right':n.x<.2?'left':'center',lx=n.x>.8?p[0]+16:n.x<.2?p[0]-12:p[0];txt(c,n.l,al==='right'?p[0]+14:lx,p[1]+r+14,'600 10.5px Sora',T.ink,al==='right'?'right':al);});
      var sp=px(M.sql);if(alert||fixed){var lb=alert?'alert · CPU 94%':'resolved · 4 min';rr(c,sp[0]+18,sp[1]-28,104,18,6);c.fillStyle=rgba(alert?RD:G,.16);c.fill();txt(c,lb,sp[0]+70,sp[1]-15,'600 9.5px IBM Plex Mono',alert?(dark()?'#F28B82':'#C5321F'):(dark()?'#81C995':'#1E8A3E'),'center');}
    }
    if(R){draw(5000);return;}var on=loop(draw);XH.whenVisible(g,function(v){on(v);});
  })();
  (function(){var m=$id('gcMini');if(!m)return;$$('i',m).forEach(function(b,i){b.style.animationDelay=(-i*.19)+'s';b.style.height=(35+((i*37)%60))+'%';});if(R)return;XH.whenVisible(m,function(v){m.classList.toggle('play',v);});})();

  /* =========================================================
     Lifecycle dial — scroll-linked
     ========================================================= */
  (function(){var box=$id('gcLc'),gS=$id('gcDialS');if(!box||!gS)return;var steps=$$('.gc-st',box),labs=$$('#gcDl li'),cols=['#4285F4','#EA4335','#FBBC04','#34A853','#4285F4'],segs=[],r=96,cx=120,cy=120,NM=['Assess','Migrate','Operate','Optimise','Secure'];
    for(var i=0;i<5;i++){var a0=i*TAU/5+.03,a1=(i+1)*TAU/5-.03,p=d.createElementNS('http://www.w3.org/2000/svg','path');
      p.setAttribute('d','M'+(cx+r*Math.cos(a0))+' '+(cy+r*Math.sin(a0))+' A'+r+' '+r+' 0 0 1 '+(cx+r*Math.cos(a1))+' '+(cy+r*Math.sin(a1)));p.setAttribute('stroke',cols[i]);gS.appendChild(p);var L=r*(a1-a0);p.style.strokeDasharray=L;p.style.strokeDashoffset=L;segs.push({p:p,L:L});}
    var panel=box.querySelector('.gc-lcv'),tk=false,ck=-1;
    function upd(){
      tk=false;
      var embedded=window.frameElement,vh=embedded?window.parent.innerHeight:innerHeight;
      var ft=embedded?embedded.getBoundingClientRect().top:0,anchor=vh*.5;
      var centers=steps.map(function(s){var rc=s.getBoundingClientRect();return ft+rc.top+rc.height/2;});
      var phase=0;
      for(var j=0;j<centers.length-1;j++){
        if(anchor>=centers[j])phase=j+clamp((anchor-centers[j])/(centers[j+1]-centers[j]),0,1);
      }
      var k=Math.round(phase),pr=(phase+1)/steps.length;
      // Native sticky positioning cannot follow a parent document's scroll.
      if(window.matchMedia('(min-width:981px)').matches){
        var pinTop=Math.max(112,(vh-panel.offsetHeight)/2);
        var shift=clamp(pinTop-ft-box.getBoundingClientRect().top,0,Math.max(0,box.offsetHeight-panel.offsetHeight));
        panel.style.transform='translate3d(0,'+shift.toFixed(1)+'px,0)';
      }else panel.style.transform='';
      segs.forEach(function(s,i){var f=clamp(pr*5-i,0,1);s.p.style.strokeDashoffset=(s.L*(1-f)).toFixed(1);});
      if(k!==ck){ck=k;steps.forEach(function(s,i){s.classList.toggle('on',i===k);});labs.forEach(function(l,i){l.classList.toggle('on',i<=k);});setT('gcDcS','Stage '+(k+1)+' of 5');setT('gcDcT',NM[k]);}
      setT('gcDcP',Math.round(pr*100)+'% handed over');}
    addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(upd);}},{passive:true});addEventListener('resize',upd);upd();
  })();

  /* =========================================================
     24×7 ops lane — sample incident on a loop
     ========================================================= */
  (function(){var ln=$id('gcLane');if(!ln)return;var ev=$$('.ev',ln),lf=$$('.ln-f span',ln),cur3=$('.ln-cur',ln),clk=$id('gcLnClk'),T0=[800,2300,3900,5800],CL=['02:14','02:16','02:31','02:52'],tt=0;
    function at(t){for(var i=0;i<4;i++){ev[i].classList.toggle('on',t>=T0[i]);if(lf[i])lf[i].classList.toggle('on',t>=T0[i]);}var k=0;for(i=0;i<4;i++)if(t>=T0[i])k=i;setT(clk,CL[k]);
      var tr=$('.trk',ln),w=tr?tr.clientWidth:300;cur3.style.transform='translateX('+(clamp(t/7000,0,1)*w*.78).toFixed(1)+'px)';cur3.style.opacity=t>8400?0:1;}
    if(R){at(7000);return;}var on=loop(function(t,dt){tt+=dt;if(tt>9200)tt=0;at(tt);});XH.whenVisible(ln,function(v){on(v);});
  })();

  /* =========================================================
     FinOps chart — before vs after, drawn on view
     ========================================================= */
  (function(){var sv=$id('gcFoSvg');if(!sv)return;var box=sv.parentNode,xs=[],bf=[],af=[],rnd=seeded(3);
    for(var i=0;i<12;i++){var x=30+i*(280/11);xs.push(x);var b=150-i*4-rnd()*14;bf.push(b);af.push(i<3?b:Math.min(190,b+38+i*1.6+rnd()*6));}
    function path(arr){return arr.map(function(y,i){return (i?'L':'M')+xs[i].toFixed(1)+' '+(190-(190-y)*0.9).toFixed(1);}).join(' ');}
    var pb=path(bf),pa=path(af);$id('gcFoL').setAttribute('d',pb);$id('gcFoB').setAttribute('d',pa);
    $id('gcFoA').setAttribute('d',pb+' '+af.slice().reverse().map(function(y,i){var j=11-i;return 'L'+xs[j].toFixed(1)+' '+(190-(190-y)*0.9).toFixed(1);}).join(' ')+' Z');
    var ap=$id('gcFoB'),L=ap.getTotalLength(),dot=$id('gcFoD');ap.style.strokeDasharray=L;ap.style.strokeDashoffset=R?0:L;
    var q=ap.getPointAtLength(L);dot.setAttribute('cx',q.x);dot.setAttribute('cy',q.y);
    if(R){box.classList.add('go');return;}var tt=0,on=loop(function(t,dt){tt+=dt;var f=clamp(tt/1800,0,1),k=eio(f);ap.style.strokeDashoffset=(L*(1-k)).toFixed(1);var pt=ap.getPointAtLength(L*k);dot.setAttribute('cx',pt.x.toFixed(1));dot.setAttribute('cy',pt.y.toFixed(1));if(f>=1){box.classList.add('go');on(false);}});
    XH.whenVisible(box,function(v){if(v&&tt===0)on(true);});
  })();

  /* =========================================================
     TOOL · BigQuery-style cost explorer (illustrative)
     ========================================================= */
  (function(){var sp=$id('exSp');if(!sp)return;
    var SV=[['Compute Engine','b'],['GKE','y'],['Cloud Run','g'],['BigQuery','b'],['Cloud SQL','r'],['Cloud Storage','y'],['Networking','g']];
    var MIX={web:[.40,.08,.10,.04,.18,.08,.12],data:[.18,.06,.04,.38,.12,.14,.08],k8s:[.14,.42,.10,.06,.12,.06,.10],mix:[.28,.18,.06,.16,.14,.08,.10]};
    var LV={rs:{0:[.08,.15],1:[.06,.12],4:[.05,.10]},sch:{0:[.04,.09],1:[.03,.07],4:[.02,.05]},spot:{0:[.03,.08],1:[.02,.06]},bq:{3:[.15,.30]},st:{5:[.10,.25]},c1:{0:[.10,.15],1:[.08,.13],4:[.06,.10]},c3:{0:[.18,.28],1:[.15,.24],4:[.12,.18]}};
    var rows=$id('exRows'),sql=$id('exSql'),built=false,shown=false,typed='',full='',tyP=0;
    rows.innerHTML=SV.map(function(s,i){return '<div class="rw" data-c="'+s[1]+'"><span class="sv"><i></i>'+s[0]+'</span><span class="mo" data-r="c">₹0</span><span class="br"><s></s><u></u><em></em></span><span class="pc">0%</span></div>';}).join('');
    var RW=$$('.rw',rows);
    function spend(){return Math.round(50000*Math.pow(10,2*(+sp.value)/100)/1000)*1000;}
    function hl(s){return esc(s).replace(/(--[^\n]*)/g,'<span class="c">$1</span>').replace(/('[^'\n]*'?)/g,'<span class="s">$1</span>').replace(/\b(SELECT|SUM|AS|FROM|WHERE|AND|IN|GROUP BY|ORDER BY|DESC|ROUND|CASE|WHEN|THEN|ELSE|END)\b/g,'<span class="k">$1</span>').replace(/\b(\d+(?:\.\d+)?)\b/g,'<span class="n">$1</span>').replace(/(`[^`]*`?)/g,'<span class="f">$1</span>');}
    function calc(){var S=spend(),mx=MIX[segV($id('exMix'))||'web'],cud=segV($id('exCud'))||'1',lev=$$('#exLev input').filter(function(i){return i.checked;}).map(function(i){return i.value;});
      if(cud==='1')lev.push('c1');if(cud==='3')lev.push('c3');
      setT('exSpV',XH.inr(S));var tl=0,th2=0,mxc=0,res=[];
      mx.forEach(function(sh,i){var c=S*sh,lo=1,hi=1;lev.forEach(function(l){var r=LV[l]&&LV[l][i];if(r){lo*=1-r[0];hi*=1-r[1];}});res.push({c:c,lo:c*(1-lo),hi:c*(1-hi)});mxc=Math.max(mxc,c);tl+=c*(1-lo);th2+=c*(1-hi);});
      res.forEach(function(r,i){var w=RW[i],mid=(r.lo+r.hi)/2,after=r.c-mid;tween($('.mo',w),r.c,function(v){return XH.inr(Math.round(v/100)*100);},700);
        $('.br s',w).style.width=(r.c/mxc*100).toFixed(1)+'%';$('.br u',w).style.width=(after/mxc*100).toFixed(1)+'%';$('.br em',w).textContent=mid>0?'−'+lakh(Math.round(mid/100)*100):'';setT($('.pc',w),r.c?Math.round(mid/r.c*100)+'%':'0%');});
      setT('exSav',XH.inr(Math.round(tl/100)*100)+' – '+XH.inr(Math.round(th2/100)*100));setT('exPct',Math.round(tl/S*100)+'–'+Math.round(th2/S*100)+'%');
      var lvN={rs:'rightsizing',sch:'nonprod_schedules',spot:'spot_batch',bq:'bq_partition_cluster',st:'storage_lifecycle',c1:'cud_1yr',c3:'cud_3yr'};
      full="-- illustrative · XcellHost cost explorer\nSELECT service.description AS service,\n       ROUND(SUM(cost)) AS cost_inr\nFROM `billing_export.gcp_costs`\nWHERE invoice.month = '202610'\n  AND project.labels.env IN ('prod','nonprod')\nGROUP BY service\nORDER BY cost_inr DESC;\n-- levers: "+(lev.length?lev.map(function(l){return lvN[l];}).join(', '):'none');
      if(R||!shown){sql.innerHTML=hl(full);typed=full;}else{tyP=0;typeOn(true);}}
    var typeOn=loop(function(t,dt){tyP+=dt*.22;var n=Math.min(full.length,Math.floor(tyP));sql.innerHTML=hl(full.slice(0,n))+(n<full.length?'<span class="cur"></span>':'');if(n>=full.length)typeOn(false);});
    sp.addEventListener('input',calc);['exMix','exCud'].forEach(function(id){$id(id).addEventListener('change',calc);$id(id).addEventListener('click',function(){setTimeout(calc,0);});});
    $$('#exLev input').forEach(function(i){i.addEventListener('change',calc);});
    calc();
    var box=$('.gc-exo');XH.whenVisible(box,function(v){if(v&&!shown){shown=true;RW.forEach(function(w,i){setTimeout(function(){w.classList.add('in');},R?0:120+i*90);});if(!R){tyP=0;typeOn(true);}}});
    if(R)RW.forEach(function(w){w.classList.add('in');});
  })();

  /* =========================================================
     Billing invoice — assembles on view
     ========================================================= */
  (function(){var inv=$id('gcInv');if(!inv)return;var ls=$$('.il',inv),sub=0,tm=[];ls.forEach(function(l){sub+=+$('b',l).getAttribute('data-v');});
    function play(){tm.forEach(clearTimeout);tm=[];ls.forEach(function(l){l.classList.remove('in');var b=$('b',l);b._v=0;b.textContent='₹0';});var G=$id('gcInvG'),T=$id('gcInvT');G._v=0;T._v=0;G.textContent='₹0';T.textContent='₹0';$id('gcInvS').classList.remove('on');
      ls.forEach(function(l,i){tm.push(setTimeout(function(){l.classList.add('in');var b=$('b',l);tween(b,+b.getAttribute('data-v'),function(v){return XH.inr(Math.round(v));},600);},R?0:200+i*260));});
      tm.push(setTimeout(function(){tween(G,Math.round(sub*.18),function(v){return XH.inr(Math.round(v));},700);tween(T,Math.round(sub*1.18),function(v){return XH.inr(Math.round(v));},900);},R?0:200+ls.length*260));
      tm.push(setTimeout(function(){$id('gcInvS').classList.add('on');},R?0:1300+ls.length*260));}
    if(R){play();return;}var was=false;XH.whenVisible(inv,function(v){if(v&&!was)play();was=v;});
  })();

  /* =========================================================
     Plans — flat vs % of spend
     ========================================================= */
  function planMode(m){var pct=m==='pct';
    $$('[data-plp]').forEach(function(b){var k=b.getAttribute('data-plp');b.textContent=pct?'8%':XH.inr(P[k]);bump(b);});
    $$('[data-plu]').forEach(function(s){var k=s.getAttribute('data-plu');s.textContent=pct?' of monthly cloud spend · min '+XH.inr(P.min)+'*':'/month · up to '+INC[k]+' resources*';});
    setT('plModeN',pct?'Fee is 8% of your monthly Google Cloud spend, never less than '+XH.inr(P.min)+' — resource count does not change it.':'Fixed fee per month, sized by the number of managed resources.');}
  (function(){var s=$id('plMode');if(!s)return;function on(){var m=segV(s);planMode(m);segSet($id('cfMode'),m);}s.addEventListener('change',on);s.addEventListener('click',function(){setTimeout(on,0);});
    $$('.gc-pb[data-plan]').forEach(function(a){a.addEventListener('click',function(){segSet($id('cfPlan'),a.getAttribute('data-plan'));});});
    $$('[data-once]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-once');XH.cart.add({key:'mgcp-'+k,name:k==='assess'?'Cloud readiness assessment · Google Cloud':'Landing zone setup · Google Cloud',sub:'One-time · indicative · excl. GST',price:P[k],qty:1});});});
  })();

  /* =========================================================
     Configurator
     ========================================================= */
  (function(){var pl=$id('cfPlan');if(!pl)return;var mo=$id('cfMode'),rs=$id('cfRes'),spE=$id('cfSp'),en=$id('cfEnv'),adds=$$('#cfAdd label'),add=$id('oAdd'),rowsE=$id('cfRows'),bar=$id('cfBar'),last=null;
    var NAMES={ess:'Essential',pro:'Professional',ent:'Enterprise'},AN={gke:'GKE cluster management',bq:'BigQuery optimisation',bk:'Backup management',fo:'Monthly FinOps review',sp:'Security posture management',dr:'Quarterly DR drill'};
    var INCL={ess:[],pro:['bk','fo'],ent:['bk','fo','sp','dr']};
    bar.innerHTML='<i style="background:#4285F4"></i><i style="background:#EA4335"></i><i style="background:#FBBC04"></i><i style="background:#34A853"></i>';var BI=$$('i',bar);
    function calc(){var plan=segV(pl)||'pro',m=segV(mo)||'flat',n=clamp(parseInt(rs.value,10)||1,1,500),S=+(segV(spE)||300000),E=+(segV(en)||2),lines=[],base=0,ext=0,env=0,ad=0;
      if(String(n)!==rs.value)rs.value=n;
      setT('cfInc',plan==='ent'?'sized in quote':m==='pct'?'not used in spend model':INC[plan]+' included');
      adds.forEach(function(l){var k=l.getAttribute('data-k'),inc=INCL[plan].indexOf(k)>=0,cb=$('input',l);l.classList.toggle('inc',inc);var em=$('em',l);em.textContent=inc?'included':XH.inr(P[k]);cb.disabled=inc;});
      if(plan==='ent'){lines.push(['Enterprise · named engineer, posture, DR drills, FinOps','Quote']);lines.push(['Resources · '+n+' · environments · '+E,'Scoped']);
        adds.forEach(function(l){var cb=$('input',l);if(cb.checked&&!cb.disabled)lines.push([AN[l.getAttribute('data-k')],'In quote']);});
        rowsE.innerHTML=lines.map(function(r){return '<div class="crow"><span>'+esc(r[0])+'</span><b>'+r[1]+'</b></div>';}).join('');
        setT('cfTot','Custom quote');setT('cfSub','Enterprise is sized to your estate');setT('cfGst','—');setT('cfPay','—');BI.forEach(function(b){b.style.width='25%';});
        add.disabled=true;add.style.opacity=.5;setT('cfRec','Enterprise pricing depends on estate size and compliance scope — tap Get quotation and we\'ll respond within one business day.');last=null;return;}
      add.disabled=false;add.style.opacity='';
      if(m==='pct'){base=Math.max(Math.round(S*P.pct),P.min);lines.push([NAMES[plan]+' scope · 8% of '+lakh(S)+' spend'+(S*P.pct<P.min?' (minimum applies)':''),base]);}
      else{base=P[plan];lines.push([NAMES[plan]+' plan · '+INC[plan]+' resources',base]);var x=Math.max(0,n-INC[plan]);if(x){ext=x*(plan==='ess'?P.xEss:P.xPro);lines.push(['Extra resources · '+x+' × '+XH.inr(plan==='ess'?P.xEss:P.xPro),ext]);}}
      if(E>1){env=(E-1)*P.env;lines.push(['Extra environments · '+(E-1)+' × '+XH.inr(P.env),env]);}
      adds.forEach(function(l){var k=l.getAttribute('data-k'),cb=$('input',l);if(cb.checked&&!cb.disabled){ad+=P[k];lines.push([AN[k],P[k]]);}});
      var sub=base+ext+env+ad;
      rowsE.innerHTML=lines.map(function(r){return '<div class="crow"><span>'+esc(r[0])+'</span><b>'+XH.inr(r[1])+'</b></div>';}).join('');
      tween($id('cfTot'),sub,function(v){return XH.inr(Math.round(v));},600);setT('cfSub','per month · excl. GST · '+NAMES[plan]+(m==='pct'?' · spend-based':''));
      setT('cfGst',XH.inr(Math.round(sub*.18)));setT('cfPay',XH.inr(Math.round(sub*1.18)));
      [base,ext,env,ad].forEach(function(v,i){BI[i].style.width=(v/sub*100).toFixed(1)+'%';});
      var flat=P[plan]+Math.max(0,n-INC[plan])*(plan==='ess'?P.xEss:P.xPro),pct=Math.max(Math.round(S*P.pct),P.min),rec='';
      if(plan==='ess'&&n>INC.ess*2.5)rec='With '+n+' resources, Professional ('+XH.inr(P.pro)+' for 40) includes incident response and patching — worth comparing.';
      else if(m==='flat'&&pct<flat)rec='Tip: at '+lakh(S)+' spend, the spend-based model would be '+XH.inr(pct)+' — lower than this flat fee.';
      else if(m==='pct'&&flat<pct)rec='Tip: the flat '+NAMES[plan]+' fee would be '+XH.inr(flat)+' for '+n+' resources — lower than 8% of spend.';
      else if(S>=1000000)rec='At this spend, Enterprise adds a named engineer and a full FinOps practice — ask for a quote.';
      setT('cfRec',rec);
      last={key:'mgcp-'+plan+'-'+m+'-'+n+'-'+E+'-'+lines.length,name:'Managed Google Cloud · '+NAMES[plan],sub:(m==='pct'?'8% of '+lakh(S)+' spend':n+' resources')+' · '+E+' env'+(ad?' · add-ons':'')+' · first month · indicative',price:sub};}
    [pl,mo,spE,en].forEach(function(s){s.addEventListener('change',calc);s.addEventListener('click',function(){setTimeout(calc,0);});});
    mo.addEventListener('click',function(){setTimeout(function(){var m=segV(mo);if(segV($id('plMode'))!==m){segSet($id('plMode'),m);planMode(m);}},0);});
    rs.addEventListener('input',calc);rs.addEventListener('change',calc);$$('#cfAdd input').forEach(function(i){i.addEventListener('change',calc);});
    add.addEventListener('click',function(){if(!last)return;XH.cart.add({key:last.key,name:last.name,sub:last.sub,price:last.price,qty:1});});
    $id('cfQ').addEventListener('click',function(){});
    calc();
  })();

  /* =========================================================
     TOOL · migration readiness quiz
     ========================================================= */
  (function(){var body=$id('qzBody');if(!body)return;
    var Q=[
      ['How many servers or VMs are you planning to move?','Size drives the wave plan.',[['Fewer than 20',2],['20 to 100',1],['More than 100',0]]],
      ['Do you have an up-to-date inventory of servers, apps and dependencies?','Unknown dependencies are the top cause of cutover surprises.',[['Yes — complete and current',2],['Partly',1],['No',0]]],
      ['What is your operating system and database mix?','Some stacks move as-is; others need re-platforming.',[['Mostly Linux with MySQL / PostgreSQL',2],['Windows Server with SQL Server',1],['Legacy OS or proprietary databases',0]]],
      ['How do users and admins sign in today?','Identity has to be ready before the first project.',[['Google Workspace or Cloud Identity',2],['Microsoft Entra ID (we can federate)',1],['On-prem Active Directory only',0]]],
      ['How will your offices or data centre connect to Mumbai / Delhi?','Network is usually the longest lead-time item.',[['VPN or Interconnect already planned',2],['Over the internet for now',1],['Not sure yet',0]]],
      ['Which compliance rules apply to you?','Regulated data changes logging, keys and contracts.',[['Standard — DPDP basics',2],['DPDP plus CERT-In logging and reporting',1],['RBI / SEBI / IRDAI regulated',0]]],
      ['How much downtime can you accept at cutover?','Shorter windows need replication and rehearsals.',[['A weekend window is fine',2],['A few hours',1],['Near-zero',0]]],
      ['How much Google Cloud experience does your team have?','We operate either way — this shapes hand-over.',[['Certified or hands-on team',2],['Some experience',1],['None yet',0]]]
    ];
    var TIP=['Group servers into waves of related apps — start with a low-risk pilot wave.','Run automated discovery for 2–4 weeks to map dependencies before planning waves.','Plan re-platforming for legacy stacks; check licensing for SQL Server and other proprietary databases.','Set up Cloud Identity or federate Microsoft Entra ID before creating projects.','Order HA VPN or Interconnect early; agree IP ranges for the shared VPC.','Design log sinks, CMEK keys and outsourcing documentation up front with your compliance team.','Use replication-based migration and rehearse the cutover on a copy.','Pair your team with XcellHost engineers during the first waves and keep runbooks.'];
    var A=[],q=0,cols=['b','r','y','g'];
    var ticks=$id('qzTicks');for(var i=0;i<=10;i++){var a=Math.PI+i*Math.PI/10,l=d.createElementNS('http://www.w3.org/2000/svg','line');l.setAttribute('x1',110+Math.cos(a)*72);l.setAttribute('y1',115+Math.sin(a)*72);l.setAttribute('x2',110+Math.cos(a)*64);l.setAttribute('y2',115+Math.sin(a)*64);ticks.appendChild(l);}
    var arc=$id('qzArc'),ndl=$id('qzNeedle'),sc=$id('qzScore');
    function gauge(s,done){var col=s<45?'#EA4335':s<70?'#FBBC04':'#34A853';arc.style.strokeDashoffset=(283*(1-s/100)).toFixed(1);arc.style.stroke=col;ndl.style.transform='rotate('+(-90+180*s/100).toFixed(1)+'deg)';
      tween(sc,s,function(v){return Math.round(v)+(done?'':'')+'';},900);
      setT('qzBand',done?(s>=70?'Ready to move':s>=45?'Ready with preparation':'Assessment first'):'Running score · '+A.length+' of 8 answered');}
    function score(){var t=0;A.forEach(function(v){t+=v;});return A.length?Math.round(t/(A.length*2)*100):0;}
    function result(){var s=score(),path=s>=70?'Rehost now, then modernise to GKE or Cloud Run':s>=45?'Landing zone and a pilot wave first':'Readiness assessment before any move';
      if(A[2]===0&&s>=45)path='Re-platform legacy stacks, rehost the rest';
      setT('qzPath',path);var weak=[];A.forEach(function(v,i){if(v<2)weak.push({i:i,v:v});});weak.sort(function(a,b){return a.v-b.v;});var tips=weak.slice(0,3).map(function(w){return TIP[w.i];});
      if(tips.length<3)tips.push('Book a readiness assessment to get a dated wave plan and a Google Cloud cost forecast.');if(tips.length<3)tips.push('Set budgets and labels from day one so the first bill has no surprises.');
      $id('qzNext').innerHTML=tips.slice(0,3).map(function(t){return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M16 8l-2 6-6 2 2-6z"/></svg>'+esc(t)+'</li>';}).join('');gauge(s,true);}
    function render(dir){var Qn=Q[q],h='<div class="gc-qq'+(dir&&!R?' pre':'')+'"><h3>'+esc(Qn[0])+'</h3><p>'+esc(Qn[1])+'</p><div class="os">'+Qn[2].map(function(o,i){return '<button type="button" data-c="'+cols[i]+'" data-s="'+o[1]+'"'+(A[q]!==undefined&&A[q]===o[1]?' class="sel"':'')+'><b>'+'ABC'[i]+'</b>'+esc(o[0])+'</button>';}).join('')+'</div></div>';
      body.innerHTML=h;var qq=$('.gc-qq',body);if(dir&&!R)requestAnimationFrame(function(){requestAnimationFrame(function(){qq.classList.remove('pre');});});
      setT('qzN','Question '+(q+1)+' of 8');var bw=$('.qp i').clientWidth||400;$id('qzP').style.setProperty('--bw',bw+'px');$id('qzP').style.width=(A.length/8*100)+'%';$id('qzBack').disabled=q===0;
      $$('.os button',body).forEach(function(b){b.addEventListener('click',function(){$$('.os button',body).forEach(function(x){x.classList.remove('sel');});b.classList.add('sel');A[q]=+b.getAttribute('data-s');A.length=Math.max(A.length,q+1);
        $id('qzP').style.width=(A.filter(function(v){return v!==undefined;}).length/8*100)+'%';
        if(q<7){gauge(score(),false);qq.classList.add('out');setTimeout(function(){q++;render(1);},R?0:320);}else{result();setT('qzN','Done · 8 of 8');}});});}
    $id('qzBack').addEventListener('click',function(){if(q>0){q--;render(1);}});
    $id('qzReset').addEventListener('click',function(){A=[];q=0;render(1);arc.style.strokeDashoffset=283;ndl.style.transform='rotate(-90deg)';sc._v=0;sc.textContent='—';setT('qzBand','Answer to see your score');setT('qzPath','—');$id('qzNext').innerHTML='<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M16 8l-2 6-6 2 2-6z"/></svg>Your next steps appear here.</li>';});
    $id('qzAdd').addEventListener('click',function(){XH.cart.add({key:'mgcp-assess',name:'Cloud readiness assessment · Google Cloud',sub:'One-time · indicative · excl. GST',price:P.assess,qty:1});});
    render(0);
  })();

  /* =========================================================
     Landing zone hierarchy — builds as you scroll
     ========================================================= */
  (function(){var box=$id('gcTree');if(!box)return;var gL=$id('gcTreeL'),gN=$id('gcTreeN'),NS='http://www.w3.org/2000/svg';
    var N=[{id:'org',x:320,y:34,w:200,t:'Organisation',s:'yourcompany.in',c:'#4285F4'},
      {id:'fs',x:110,y:112,w:150,t:'Shared services',s:'folder',c:'#EA4335',p:'org'},{id:'fp',x:320,y:112,w:150,t:'Production',s:'folder',c:'#34A853',p:'org'},{id:'fn',x:530,y:112,w:150,t:'Non-production',s:'folder',c:'#FBBC04',p:'org'},
      {id:'p1',x:60,y:192,w:96,t:'net-host',s:'shared VPC',c:'#EA4335',p:'fs'},{id:'p2',x:162,y:192,w:96,t:'log-sec',s:'logs · SCC',c:'#EA4335',p:'fs'},{id:'p3',x:270,y:192,w:96,t:'app-prod',s:'GKE · Run',c:'#34A853',p:'fp'},{id:'p4',x:372,y:192,w:96,t:'data-prod',s:'BigQuery · SQL',c:'#34A853',p:'fp'},{id:'p5',x:480,y:192,w:96,t:'app-dev',s:'scheduled off',c:'#FBBC04',p:'fn'},{id:'p6',x:582,y:192,w:96,t:'sandbox',s:'budget cap',c:'#FBBC04',p:'fn'},
      {id:'vpc',x:215,y:282,w:330,t:'Shared VPC · Mumbai + Delhi subnets',s:'firewall policies · Cloud NAT · VPN / Interconnect',c:'#4285F4',p:['p1','p3','p4','p5']},
      {id:'snk',x:540,y:282,w:170,t:'Log sink → bucket in India',s:'locked · 180+ days',c:'#4285F4',p:['p2']}];
    var M={},links=[];N.forEach(function(n){M[n.id]=n;});
    N.forEach(function(n,i){var ps=n.p?[].concat(n.p):[];ps.forEach(function(pid){var a=M[pid],pa=d.createElementNS(NS,'path'),y1=a.y+20,y2=n.y-20,my=(y1+y2)/2;pa.setAttribute('d','M'+a.x+' '+y1+' C'+a.x+' '+my+' '+n.x+' '+my+' '+n.x+' '+y2);gL.appendChild(pa);var L=pa.getTotalLength();pa.style.strokeDasharray=L;pa.style.strokeDashoffset=L;links.push({p:pa,L:L,i:i});});
      var g=d.createElementNS(NS,'g');g.setAttribute('class','nd');g.innerHTML='<rect x="'+(n.x-n.w/2)+'" y="'+(n.y-20)+'" width="'+n.w+'" height="40" rx="10"/><rect class="bar" x="'+(n.x-n.w/2)+'" y="'+(n.y-20)+'" width="5" height="40" rx="2" fill="'+n.c+'"/><text x="'+(n.x-n.w/2+13)+'" y="'+(n.y-3)+'">'+esc(n.t)+'</text><text class="s" x="'+(n.x-n.w/2+13)+'" y="'+(n.y+11)+'">'+esc(n.s)+'</text>';gN.appendChild(g);n.g=g;});
    var tk=false,lastK=-1;
    function upd(){tk=false;var vh=window.frameElement?window.parent.innerHeight:innerHeight,rc=box.getBoundingClientRect(),ft=window.frameElement?window.frameElement.getBoundingClientRect().top:0,pr=R?1:clamp((vh*.95-rc.top-ft)/(rc.height*.85),0,1),k=Math.floor(pr*(N.length+1.5));if(k===lastK)return;lastK=k;
      N.forEach(function(n,i){n.g.classList.toggle('on',i<k);});links.forEach(function(l){var on=l.i<k;l.p.style.strokeDashoffset=on?0:l.L;l.p.classList.toggle('on',on);});}
    addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(upd);}},{passive:true});addEventListener('resize',upd);upd();
  })();

  /* timeline line */
  (function(){var tl=$id('gcTl');if(!tl)return;if(R){tl.classList.add('go');return;}XH.whenVisible(tl,function(v){if(v)tl.classList.add('go');});})();
})();


