/* Imported from managed-oracle-cloud.html; shared chrome uses the Angular shell. */
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
  XH.open=function(id,opts){d.dispatchEvent(new CustomEvent('import-callback',{detail:opts&&opts.topic||'Managed Oracle Cloud Services'}));};
  XH.cart={add:function(item){d.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};
  XH.toast=function(message){var toast=$('#oracleToast');toast.textContent=message;toast.hidden=false;clearTimeout(XH.toastTimer);XH.toastTimer=setTimeout(function(){toast.hidden=true;},3000);};
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
  var DPR=Math.min(2,window.devicePixelRatio||1),PI=Math.PI,TAU=PI*2;
  function $id(i){return d.getElementById(i);}
  function setT(e,t){if(typeof e==='string')e=$id(e);if(e&&e.textContent!==t)e.textContent=t;}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function eo(t){t=clamp(t,0,1);return 1-Math.pow(1-t,3);}
  function eio(t){t=clamp(t,0,1);return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function spring(u){u=Math.max(0,u);return u>1.6?1:1-Math.exp(-6*u)*Math.cos(7.5*u);}
  function rgba(c,a){return 'rgba('+c[0]+','+c[1]+','+c[2]+','+(+a).toFixed(3)+')';}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function inr(n){return XH.inr(Math.round(n));}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}

  /* ---------- indicative prices (INR, excl. 18% GST) — single source ---------- */
  var P={ess:14999,pro:39999,min:14999,assess:49999,lz:149999,dba:24999,spm:9999,drd:7999,log:3999,xEss:999,xPro:799,env:4999};
  var PCT=0.08;
  $$('[data-pr]').forEach(function(e){var k=e.getAttribute('data-pr');if(P[k])e.textContent=inr(P[k]);});
  $$('[data-flat]').forEach(function(e){var k=e.getAttribute('data-flat');if(P[k])e.textContent=inr(P[k]);});

  /* ---------- shared ticker: one requestAnimationFrame for every loop ---------- */
  var subs=[],raf=0,last=0;
  function frame(t){raf=0;var dt=last?Math.min(50,t-last):16;last=t;var any=false;
    for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){any=true;s.fn(t,dt);}}
    if(any)raf=requestAnimationFrame(frame);else last=0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function glow(rgb,size){var c=d.createElement('canvas');c.width=c.height=size;var x=c.getContext('2d'),g=x.createRadialGradient(size/2,size/2,0,size/2,size/2,size/2);
    g.addColorStop(0,'rgba('+rgb+',1)');g.addColorStop(.3,'rgba('+rgb+',.45)');g.addColorStop(1,'rgba('+rgb+',0)');x.fillStyle=g;x.fillRect(0,0,size,size);return c;}
  var tw={},twId=0,twOn=loop(function(t,dt){var any=false;for(var k in tw){var o=tw[k];o.p=Math.min(1,o.p+dt/o.ms);o.el.textContent=o.f(lerp(o.a,o.b,eo(o.p)));if(o.p<1)any=true;else delete tw[k];}if(!any)twOn(false);});
  function tween(el,to,f,ms){if(!el)return;if(!el._tw)el._tw='t'+(twId++);var from=el._v===undefined?0:el._v;el._v=to;if(R||from===to){el.textContent=f(to);delete tw[el._tw];return;}tw[el._tw]={el:el,a:from,b:to,p:0,f:f,ms:ms||700};twOn(true);}

  var RED=[232,106,85],RDD=[199,70,52],AMB=[255,177,92],IVO=[247,232,222],GRN=[95,208,141],BLU=[127,176,255],MUT=[168,150,140];
  var spR=glow('232,106,85',32),spA=glow('255,177,92',32),spG=glow('95,208,141',32),spB=glow('127,176,255',32);
  function sprite(c,sp,x,y,s,a){c.globalAlpha=a==null?1:a;c.drawImage(sp,x-s/2,y-s/2,s,s);c.globalAlpha=1;}
  function txt(c,s,x,y,sz,col,al,wt,fam){c.font=(wt||600)+' '+sz+'px '+(fam||'"IBM Plex Mono",monospace');c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}

  var hero=$id('ocHero');

  /* ---------- sticky sub-nav offset + scroll spy ---------- */
  (function(){
    var sub=$id('ocSub');if(!sub)return;var hdr=$('.hdr');
    function hh(){if(hdr)d.documentElement.style.setProperty('--oc-hh',Math.round(hdr.getBoundingClientRect().height)+'px');}
    hh();addEventListener('resize',hh);
    var links=$$('a',sub),secs=links.map(function(a){return $id(a.getAttribute('href').slice(1));}),cur=-1,tk=false,box=$('.oc-subt',sub);
    function spy(){tk=false;var y=window.frameElement?110-window.frameElement.getBoundingClientRect().top:sub.getBoundingClientRect().bottom+30,k=-1;for(var i=0;i<secs.length;i++){if(secs[i]&&secs[i].getBoundingClientRect().top<y)k=i;}
      if(k!==cur){cur=k;links.forEach(function(a,i){a.classList.toggle('on',i===k);});
        if(k>=0&&box){var a=links[k],l=a.offsetLeft-box.clientWidth/2+a.offsetWidth/2;box.scrollTo({left:l,behavior:R?'auto':'smooth'});}}}
    addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(spy);}},{passive:true});spy();
  })();

  /* ---------- 1. hero background: redo-log strata, three depth layers ---------- */
  (function(){
    var cv=$id('ocBg');if(!cv||!hero)return;var c=cv.getContext('2d'),W=0,H=0,L=[],mx=0,my=0,tx=0,ty=0;
    function build(){W=hero.offsetWidth;H=hero.offsetHeight;if(!W||!H)return;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);L=[];
      var n=W<700?12:22;for(var i=0;i<n;i++){var ly=i%3,y=H*(.06+.9*((i*0.618)%1));L.push({y:y,ly:ly,sp:.018+.022*ly,amp:6+ly*5,ph:i*1.7,pk:[(i*.37)%1,(i*.71+.4)%1]});}}
    function draw(t){if(!W)build();if(!W)return;c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,W,H);tx+=(mx-tx)*.05;ty+=(my-ty)*.05;var s=t/1000;
      for(var i=0;i<L.length;i++){var l=L[i],f=(l.ly+1)*.6,ox=tx*f*14,oy=ty*f*10,y0=l.y+oy;
        c.strokeStyle=rgba(l.ly===2?RED:IVO,l.ly===2?.10:.035+.02*l.ly);c.lineWidth=l.ly===2?1.2:1;c.beginPath();
        for(var x=-20;x<=W+20;x+=40){var yy=y0+Math.sin(x*.004+l.ph+s*.15)*l.amp;if(x<0)c.moveTo(x+ox,yy);else c.lineTo(x+ox,yy);}c.stroke();
        for(var k=0;k<2;k++){var px=((l.pk[k]+s*l.sp)%1)*(W+80)-40,py=y0+Math.sin(px*.004+l.ph+s*.15)*l.amp;sprite(c,k?spA:spR,px+ox,py,10+l.ly*7,.35+.2*l.ly);}}}
    build();addEventListener('resize',build);
    hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5;});
    if(R){draw(0);return;}
    var on=loop(draw);XH.whenVisible(hero,on);
  })();

  /* =========================================================
     2. hero live-scene carousel — 5 drawn scenes
     ========================================================= */
  function grid(c,W,H){c.strokeStyle='rgba(255,225,210,.045)';c.lineWidth=1;c.beginPath();for(var x=0;x<W;x+=24){c.moveTo(x+.5,0);c.lineTo(x+.5,H);}for(var y=0;y<H;y+=24){c.moveTo(0,y+.5);c.lineTo(W,y+.5);}c.stroke();}
  function panel(c,x,y,w,h,stroke,fill){rr(c,x,y,w,h,Math.min(12,h/3));c.fillStyle=fill||'rgba(255,240,230,.04)';c.fill();c.strokeStyle=stroke||'rgba(255,225,210,.14)';c.lineWidth=1;c.stroke();}
  function U(W,H){return Math.min(W/560,H/385);}

  /* S0 — Autonomous Database self-tuning */
  function s0(c,W,H,t){grid(c,W,H);var u=U(W,H),fs=Math.max(9.5,11*u);
    var gx=W*.29,gy=H*.7,Rg=Math.min(W*.17,H*.29);
    panel(c,W*.04,H*.07,W*.5,H*.78);
    txt(c,'AUTONOMOUS DATABASE · ADB-PROD',W*.07,H*.13,fs,'#E86A55','left',600);
    c.lineCap='round';c.lineWidth=Rg*.16;c.strokeStyle='rgba(255,225,210,.09)';c.beginPath();c.arc(gx,gy,Rg,PI,TAU);c.stroke();
    var v=38+54*spring((t-.7)/2.3)+Math.sin(t*2.2)*.6*(t>3?1:0);
    var f=clamp(v/100,0,1),segs=24;for(var i=0;i<segs*f;i++){var a0=PI+PI*i/segs,a1=PI+PI*Math.min(f,(i+.82)/segs),col=i/segs<.4?RED:i/segs<.7?AMB:GRN;c.strokeStyle=rgba(col,.9);c.beginPath();c.arc(gx,gy,Rg,a0,a1);c.stroke();}
    c.lineCap='butt';
    for(i=0;i<=10;i++){var a=PI+PI*i/10;c.strokeStyle='rgba(255,225,210,.3)';c.lineWidth=1;c.beginPath();c.moveTo(gx+Math.cos(a)*(Rg*.72),gy+Math.sin(a)*(Rg*.72));c.lineTo(gx+Math.cos(a)*(Rg*.8),gy+Math.sin(a)*(Rg*.8));c.stroke();}
    var na=PI+PI*f;c.strokeStyle='#fff';c.lineWidth=2.2*u+.6;c.beginPath();c.moveTo(gx,gy);c.lineTo(gx+Math.cos(na)*Rg*.66,gy+Math.sin(na)*Rg*.66);c.stroke();
    c.fillStyle='#fff';c.beginPath();c.arc(gx,gy,4*u+1,0,TAU);c.fill();
    txt(c,Math.round(v)+'%',gx,gy+Rg*.32,Math.max(16,26*u),'#fff','center',800,'Sora,sans-serif');
    txt(c,'WORKLOAD EFFICIENCY · SAMPLE',gx,gy+Rg*.56,fs*.9,'#a8968c','center',600);
    /* auto-index chips */
    var ch=['AUTO_IDX ORDERS(status)','AUTO_IDX CUST(region)','AUTO_IDX INV(due_dt)'];
    for(i=0;i<3;i++){var tt=t-(1.2+i*.65);if(tt<0)continue;var e=spring(tt*1.4),cy=H*(.2+i*.068),cw=W*.36;c.globalAlpha=clamp(tt*3,0,1);
      panel(c,W*.09,cy-H*.028,cw*e,H*.056,'rgba(95,208,141,.45)','rgba(95,208,141,.10)');if(e>.6)txt(c,'+ '+ch[i],W*.11,cy,fs*.92,'#9be8b9','left',600);c.globalAlpha=1;}
    /* latency chart */
    var px=W*.6,pw=W*.35,py=H*.07,ph=H*.4;panel(c,px,py,pw,ph);
    txt(c,'p95 LATENCY · ms',px+10*u,py+14*u,fs,'#a8968c','left',600);
    var rev=clamp(t/3.4,0,1),n=36,x0=px+10*u,x1=px+pw-10*u,yb=py+ph-12*u,yt=py+30*u;
    c.beginPath();for(i=0;i<=n*rev;i++){var xf=i/n,val=xf<.42?40+Math.sin(i*1.9)*5:40-30*eo((xf-.42)/.3)+Math.sin(i*2.3)*1.6,X=lerp(x0,x1,xf),Y=lerp(yb,yt,val/50);if(!i)c.moveTo(X,Y);else c.lineTo(X,Y);}
    c.strokeStyle='#E86A55';c.lineWidth=2;c.stroke();var lx=X,ly=Y;c.lineTo(lx,yb);c.lineTo(x0,yb);c.closePath();c.fillStyle='rgba(232,106,85,.12)';c.fill();
    if(lx)sprite(c,rev>.6?spG:spR,lx,ly,22*u+6,.9);
    /* OCPU autoscale */
    var oy=H*.53,oh=H*.32;panel(c,px,oy,pw,oh);txt(c,'OCPU · AUTOSCALE ≤ 3×',px+10*u,oy+14*u,fs,'#a8968c','left',600);
    var act=2+4*eo((t-2.3)/1.1),bw=(pw-20*u-5*6*u)/6;
    for(i=0;i<6;i++){var on=i<act,part=clamp(act-i,0,1),bx=px+10*u+i*(bw+6*u),bh=oh-44*u;
      rr(c,bx,oy+30*u,bw,bh,4);c.fillStyle='rgba(255,225,210,.06)';c.fill();
      if(part>0){rr(c,bx,oy+30*u+bh*(1-part),bw,bh*part,4);c.fillStyle=i<2?'rgba(232,106,85,.85)':'rgba(255,177,92,.85)';c.fill();}}
  }

  /* S1 — Exadata RAC failover */
  function s1(c,W,H,t){grid(c,W,H);var u=U(W,H),fs=Math.max(9.5,11*u),tf=1.5,tb=4.1;
    var rx=W*.06,ry=H*.08,rw=W*.38,rh=H*.82;panel(c,rx,ry,rw,rh,'rgba(255,225,210,.2)','rgba(255,240,230,.03)');
    txt(c,'EXADATA · VM CLUSTER',rx+12*u,ry+14*u,fs,'#E86A55','left',600);
    var units=[['DB SERVER · RAC NODE 1','n1'],['DB SERVER · RAC NODE 2','n2'],['RoCE FABRIC','sw'],['STORAGE CELL 1','c'],['STORAGE CELL 2','c'],['STORAGE CELL 3','c']];
    var uy=ry+30*u,uh=(rh-40*u)/6.3,nodes={};
    for(var i=0;i<units.length;i++){var k=units[i][1],h=k==='sw'?uh*.55:uh*.84,y=uy;uy+=h+uh*.12;
      var down=k==='n1'&&t>tf&&t<tb,stroke=down?'rgba(232,106,85,'+(.6+.4*Math.sin(t*10))+')':'rgba(255,225,210,.16)';
      panel(c,rx+10*u,y,rw-20*u,h,stroke,down?'rgba(232,106,85,.14)':'rgba(255,240,230,.05)');
      txt(c,units[i][0],rx+20*u,y+h/2,fs*.9,down?'#ffb7a6':'#e2d3ca','left',600);
      for(var l=0;l<3;l++){var blink=(Math.sin(t*(3+l)+i*2)+1)/2,col=down?RED:k==='sw'?BLU:GRN;c.fillStyle=rgba(col,down?.9:.35+.6*blink);c.beginPath();c.arc(rx+rw-24*u-l*9*u,y+h/2,2.4*u+.6,0,TAU);c.fill();}
      if(k==='n1'||k==='n2')nodes[k]={x:rx+rw-10*u,y:y+h/2};}
    /* app tier */
    var ax=W*.6,ay=H*.3,aw=W*.35,ah=H*.28;panel(c,ax,ay,aw,ah,'rgba(127,176,255,.4)','rgba(127,176,255,.07)');
    txt(c,'APP TIER',ax+12*u,ay+16*u,fs,'#9cc3ff','left',600);
    txt(c,t>tf&&t<tb?'Sessions held':'Sessions active',ax+12*u,ay+ah*.55,Math.max(11,14*u),'#fff','left',700,'Sora,sans-serif');
    txt(c,'240 · sample',ax+12*u,ay+ah*.8,fs*.9,'#a8968c','left',500);
    /* session particles */
    var N=24,sx=ax,sy=ay+ah/2;
    for(i=0;i<N;i++){var cyc=t*.6+i/N,p=cyc%1,tc=(Math.floor(cyc)-i/N)/.6,to=(i%2===0&&(tc<tf-.3||tc>tb))?nodes.n1:nodes.n2;if(!to)continue;
      var ex=to.x,ey=to.y,mx=(sx+ex)/2,my=Math.min(sy,ey)-H*.08,q=1-p,X=q*q*sx+2*q*p*mx+p*p*ex,Y=q*q*sy+2*q*p*my+p*p*ey,bad=to===nodes.n1&&t>tf&&t<tb;
      sprite(c,bad?spR:spB,X,Y,(bad?14:11)*u+4,bad?.9*(1-p):.85);}
    /* status */
    var msg=t<tf?'2 of 2 nodes up':t<tb?'Node 1 fault · node 2 serving':'Node 1 rejoined';
    var col=t<tf?'#9be8b9':t<tb?'#ffc98a':'#9be8b9';panel(c,W*.5,H*.7,W*.45,H*.13,'rgba(255,225,210,.14)','rgba(0,0,0,.25)');txt(c,msg,W*.5+10*u,H*.765,fs*.95,col,'left',600);
  }

  /* S2 — FastConnect on-prem → OCI Mumbai */
  function s2(c,W,H,t){grid(c,W,H);var u=U(W,H),fs=Math.max(9.5,11*u),ta=2.6,tb2=4.4,aDown=t>ta&&t<tb2;
    var dx=W*.05,dy=H*.24,dw=W*.2,dh=H*.52;panel(c,dx,dy,dw,dh,'rgba(127,176,255,.4)','rgba(127,176,255,.06)');
    txt(c,'ON-PREM DC',dx+dw/2,dy-12*u,fs,'#9cc3ff','center',600);
    for(var i=0;i<5;i++){var yy=dy+14*u+i*(dh-24*u)/5;rr(c,dx+10*u,yy,dw-20*u,(dh-24*u)/5-6*u,3);c.fillStyle='rgba(255,240,230,.07)';c.fill();c.fillStyle=rgba(GRN,.4+.5*((Math.sin(t*4+i)+1)/2));c.beginPath();c.arc(dx+dw-18*u,yy+((dh-24*u)/5-6*u)/2,2.2*u+.5,0,TAU);c.fill();}
    var ox=W*.64,oy=H*.12,ow=W*.32,oh=H*.76;panel(c,ox,oy,ow,oh,'rgba(232,106,85,.5)','rgba(232,106,85,.07)');
    txt(c,'OCI · INDIA WEST (MUMBAI)',ox+ow/2,oy+14*u,fs*.9,'#E86A55','center',600);
    var subs2=[['App subnet','10.40.1.0/24'],['DB subnet','10.40.2.0/24'],['Mgmt subnet','10.40.9.0/24']];
    for(i=0;i<3;i++){var sy=oy+32*u+i*(oh-44*u)/3;panel(c,ox+10*u,sy,ow-20*u,(oh-44*u)/3-8*u,'rgba(255,225,210,.14)','rgba(255,240,230,.05)');txt(c,subs2[i][0],ox+20*u,sy+12*u,fs*.95,'#fff','left',700,'Sora,sans-serif');txt(c,subs2[i][1],ox+20*u,sy+26*u,fs*.85,'#a8968c','left',500);}
    var x0=dx+dw,y0=dy+dh/2,x1=ox,y1=oy+oh/2,paths=[[x0,y0-8*u,(x0+x1)/2,H*.08,x1,y1-8*u],[x0,y0+8*u,(x0+x1)/2,H*.92,x1,y1+8*u]];
    for(var k=0;k<2;k++){var p=paths[k],dn=k===0&&aDown;c.setLineDash(dn?[5,6]:[]);c.strokeStyle=dn?'rgba(255,177,92,.6)':'rgba(232,106,85,.75)';c.lineWidth=dn?1.5:2.4*u+.4;c.beginPath();c.moveTo(p[0],p[1]);c.quadraticCurveTo(p[2],p[3],p[4],p[5]);c.stroke();c.setLineDash([]);
      var lab=(k?'B':'A')+' · 10 Gb/s'+(dn?' · TEST':''),ly=k?H*.86:H*.14;txt(c,lab,(x0+x1)/2,ly,fs*.9,dn?'#ffc98a':'#e2d3ca','center',600);
      var n=dn?0:(k===1&&aDown?14:8);for(var j=0;j<n;j++){var q=((t*.55+j/n+k*.13)%1),qq=1-q,X=qq*qq*p[0]+2*qq*q*p[2]+q*q*p[4],Y=qq*qq*p[1]+2*qq*q*p[3]+q*q*p[5];sprite(c,j%3?spR:spA,X,Y,12*u+3,.9);}}
    rr(c,(x0+x1)/2-30*u,H*.5-11*u,60*u,22*u,11*u);c.fillStyle='rgba(20,14,12,.9)';c.fill();c.strokeStyle='rgba(255,225,210,.2)';c.stroke();txt(c,'BGP',(x0+x1)/2,H*.5,fs,'#fff','center',700);
  }

  /* S3 — EBS / JD Edwards tier move */
  function s3(c,W,H,t){grid(c,W,H);var u=U(W,H),fs=Math.max(9.5,11*u);
    var Lx=W*.04,Rx=W*.6,zw=W*.36,zy=H*.12,zh=H*.66;
    c.setLineDash([5,5]);panel(c,Lx,zy,zw,zh,'rgba(127,176,255,.35)','rgba(127,176,255,.04)');panel(c,Rx,zy,zw,zh,'rgba(232,106,85,.5)','rgba(232,106,85,.05)');c.setLineDash([]);
    txt(c,'ON-PREM',Lx+12*u,zy+14*u,fs,'#9cc3ff','left',600);txt(c,'OCI MUMBAI',Rx+12*u,zy+14*u,fs,'#E86A55','left',600);
    var tiers=[['Web tier','OHS · load balancer'],['App tier','EBS 12.2 / JDE servers'],['Database tier','Oracle Database 19c']];
    var bw=zw-24*u,bh=zh*.22;
    for(var i=0;i<3;i++){var y=zy+30*u+i*(bh+10*u),st=.5+i*1.15,p=eio((t-st)/1.0),xA=Lx+12*u,xB=Rx+12*u,X=lerp(xA,xB,p),Y=y-Math.sin(p*PI)*H*.1;
      if(p>0){c.setLineDash([3,4]);rr(c,xA,y,bw,bh,8);c.strokeStyle='rgba(255,225,210,.18)';c.stroke();c.setLineDash([]);}
      if(p>0&&p<1){c.strokeStyle='rgba(232,106,85,.35)';c.lineWidth=1.5;c.beginPath();c.moveTo(xA+bw,y+bh/2);c.quadraticCurveTo((xA+xB+bw)/2,y-H*.12,X+bw/2,Y+bh/2);c.stroke();sprite(c,spA,X+bw,Y+bh/2,26*u,.8);}
      var done=p>=1;panel(c,X,Y,bw,bh,done?'rgba(95,208,141,.6)':'rgba(255,225,210,.25)',done?'rgba(95,208,141,.10)':'rgba(40,28,24,.95)');
      txt(c,tiers[i][0],X+12*u,Y+bh*.38,Math.max(10,12.5*u),'#fff','left',700,'Sora,sans-serif');txt(c,tiers[i][1],X+12*u,Y+bh*.72,fs*.88,'#c9b2a7','left',500);
      if(done){var cx=X+bw-16*u,cy=Y+bh/2;c.strokeStyle='#5FD08D';c.lineWidth=2.2;c.beginPath();c.moveTo(cx-5*u,cy);c.lineTo(cx-1*u,cy+4*u);c.lineTo(cx+6*u,cy-5*u);c.stroke();}}
    var pr=clamp((t-.5)/3.5,0,1),by=H*.86;rr(c,Lx,by,W*.92,8*u,4*u);c.fillStyle='rgba(255,225,210,.08)';c.fill();rr(c,Lx,by,W*.92*pr,8*u,4*u);c.fillStyle='#E86A55';c.fill();
    txt(c,pr<1?'CUTOVER · SAT 22:00 · '+Math.round(pr*100)+'%':'USERS BACK · MON 07:00 · SAMPLE',Lx,by+20*u,fs,pr<1?'#e2d3ca':'#9be8b9','left',600);
  }

  /* S4 — Data Guard DR to Hyderabad */
  function s4(c,W,H,t){var u=U(W,H),fs=Math.max(9.5,11*u),ts=2.7,sw=t>ts;
    for(var x=12;x<W;x+=14)for(var y=12;y<H*.9;y+=14){var nx=x/W,ny=y/H,inS=(nx>.18&&nx<.86&&ny>.08&&ny<.86&&(ny-.08)*.9>Math.abs(nx-.52)*1.1-.32);if(!inS)continue;c.fillStyle='rgba(255,225,210,'+(.07+.05*Math.sin(x*.07+y*.05))+')';c.fillRect(x,y,1.6,1.6);}
    var A={x:W*.3,y:H*.4,n:'MUMBAI',r:'ap-mumbai-1'},B={x:W*.68,y:H*.6,n:'HYDERABAD',r:'ap-hyderabad-1'},src=sw?B:A,dst=sw?A:B,mx=(A.x+B.x)/2,my=Math.min(A.y,B.y)-H*.2;
    c.strokeStyle='rgba(232,106,85,.5)';c.lineWidth=2;c.beginPath();c.moveTo(A.x,A.y);c.quadraticCurveTo(mx,my,B.x,B.y);c.stroke();
    var flash=clamp(1-Math.abs(t-ts)*2.2,0,1);
    if(Math.abs(t-ts)>.25)for(var j=0;j<9;j++){var q=(t*.7+j/9)%1,qq=1-q,sx=src===A?A.x:B.x,sy=src===A?A.y:B.y,ex=dst.x,ey=dst.y,X=qq*qq*sx+2*qq*q*mx+q*q*ex,Y=qq*qq*sy+2*qq*q*my+q*q*ey;sprite(c,j%2?spA:spR,X,Y,12*u+3,.9);}
    [A,B].forEach(function(n,i){var prim=(n===A)!==sw;for(var k=0;k<2;k++){var rp=((t*.5+k*.5+i*.25)%1);c.strokeStyle=rgba(prim?RED:BLU,.5*(1-rp));c.lineWidth=1.5;c.beginPath();c.arc(n.x,n.y,8*u+rp*36*u,0,TAU);c.stroke();}
      c.fillStyle=prim?'#E86A55':'#7fb0ff';c.beginPath();c.arc(n.x,n.y,7*u+1,0,TAU);c.fill();
      c.font='600 '+(fs*.9)+'px "IBM Plex Mono",monospace';var bw2=Math.max(c.measureText((prim?'Primary':'Standby')+' · '+n.r).width+22*u,96),bx=i?Math.min(W-bw2-6,n.x+12*u):Math.max(6,n.x-bw2-12*u),by=n.y+16*u;panel(c,bx,by,bw2,44*u,'rgba(255,225,210,.18)','rgba(20,14,12,.9)');
      txt(c,n.n,bx+10*u,by+13*u,fs,prim?'#ffb7a6':'#9cc3ff','left',600);txt(c,(prim?'Primary':'Standby')+' · '+n.r,bx+10*u,by+30*u,fs*.9,'#fff','left',600);});
    if(flash>0){c.strokeStyle='rgba(255,255,255,'+(.8*flash)+')';c.lineWidth=3;c.beginPath();c.arc(mx,my+H*.1,40*u*(2-flash),0,TAU);c.stroke();}
    var lag=sw?(0.6+Math.sin(t*3)*.15):(0.8+Math.sin(t*3)*.2);panel(c,W*.05,H*.8,W*.9,H*.16,'rgba(255,225,210,.14)','rgba(0,0,0,.3)');
    txt(c,'DATA GUARD · APPLY LAG '+lag.toFixed(1)+' s · SAMPLE',W*.08,H*.85,fs,'#e2d3ca','left',600);
    txt(c,t>ts+.6?'SWITCHOVER DRILL · PASSED':'REDO SHIPPING · '+(sw?'HYD → BOM':'BOM → HYD'),W*.08,H*.915,fs,t>ts+.6?'#9be8b9':'#ffc98a','left',600);
  }

  var SC=[
    {f:s0,cap:'Autonomous Database · India West (Mumbai)',kp:[['p95 latency','42 ms','11 ms',2.6],['Auto-indexes','0','3',2.7],['OCPU','2','6',3.4]],
     log:[['02:04','Workload spike on ADB-PROD','alert','w'],['02:05','Auto-index created · ORDERS(status)','auto',''],['02:06','OCPU autoscale 2 → 6 · no restart','ok','']]},
    {f:s1,cap:'Exadata Database Service · RAC',kp:[['RAC nodes up','2 / 2','1 / 2',1.6],['Sessions kept','100%','100%',1.8],['Rejoin','—','4 min · sample',4.2]],
     log:[['03:12','Node 1 heartbeat lost · cluster alert','P1','r'],['03:12','Sessions continue on node 2','ok',''],['03:16','Node 1 restarted · rejoined · RCA opened','ok','']]},
    {f:s2,cap:'FastConnect · on-prem DC to OCI Mumbai',kp:[['Circuits','2 · redundant','1 · test',2.7],['Port speed','10 Gb/s','10 Gb/s',0],['Path','Private peering','Circuit B only',2.8]],
     log:[['09:30','BGP up on circuit A and B','ok',''],['09:41','Failover test · circuit A withdrawn','test','w'],['09:43','Traffic on circuit B · no loss','ok','']]},
    {f:s3,cap:'E-Business Suite / JD Edwards · tier move',kp:[['Tiers moved','0 / 3','3 / 3',3.9],['Cutover','Sat 22:00','on plan',3.9],['Users back','—','Mon 07:00',4.2]],
     log:[['22:00','Change freeze · final backup taken','plan','w'],['23:40','App tier up on OCI · smoke tests','ok',''],['02:10','Database tier live · sign-off','ok','']]},
    {f:s4,cap:'Data Guard · Mumbai to Hyderabad DR',kp:[['Apply lag','0.8 s','0.6 s',3],['RPO target','< 1 min*','< 1 min*',0],['Drill','scheduled','passed',3.4]],
     log:[['06:00','Redo shipping BOM → HYD','sync',''],['06:02','Switchover drill started','drill','w'],['06:09','Roles swapped · drill passed · report sent','ok','']]}
  ];

  (function(){
    var stage=$id('ocStage'),scr=$id('ocScr');if(!stage||!scr)return;
    var els=$$('.oc-sc',scr),cvs=els.map(function(e){return $('canvas',e);}),ctx=cvs.map(function(c){return c.getContext('2d');}),btns=$$('#ocTl button'),dots=$$('#ocDots i');
    var K=0,prev=-1,prevAt=0,tS=0,el=0,DUR=5500,paused=false,vis=false,W=0,H=0,kpE=[0,1,2].map(function(i){return $id('ocK'+i);}),kpL=[0,1,2].map(function(i){return $id('ocK'+i+'l');}),kpS=[0,0,0],logE=$id('ocLog'),logN=0;
    function size(){var r=els[0].getBoundingClientRect();W=Math.round(r.width);H=Math.round(r.height);if(!W||!H)return;cvs.forEach(function(c){c.width=Math.round(W*DPR);c.height=Math.round(H*DPR);});}
    function paint(k,t){var c=ctx[k];c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,W,H);SC[k].f(c,W,H,t);}
    function kp(k,t,force){var s=SC[k];for(var i=0;i<3;i++){var q=s.kp[i],st=t>=q[3]&&q[3]>0?1:0;if(force){setT(kpL[i],q[0]);kpS[i]=-1;}if(kpS[i]!==st){kpS[i]=st;setT(kpE[i],st?q[2]:q[1]);if(st&&!force)bump(kpE[i]);}}
      var want=t<.15?0:t<1.5?1:t<3?2:3;if(force){logE.innerHTML='';logN=0;}
      while(logN<want&&logN<3){var L=s.log[logN],li=d.createElement('li');li.innerHTML='<time>'+L[0]+'</time><em class="'+L[3]+'">'+L[2]+'</em><span>'+L[1]+'</span>';logE.appendChild(li);logN++;}}
    function go(n){n=(n+5)%5;if(n===K){el=0;return;}prev=K;prevAt=0;K=n;tS=0;el=0;
      els.forEach(function(e,i){e.classList.toggle('on',i===K);e.classList.toggle('out',i===prev);});
      btns.forEach(function(b,i){b.classList.toggle('on',i===K);b.setAttribute('aria-selected',i===K);b.style.setProperty('--p',0);});
      dots.forEach(function(x,i){x.classList.toggle('on',i===K);});
      setT('ocCapN','0'+(K+1));setT('ocCapT',SC[K].cap);kp(K,0,true);if(R){paint(K,6);kp(K,6,false);}}
    btns.forEach(function(b,i){b.addEventListener('click',function(){go(i);});});
    dots.forEach(function(x,i){x.addEventListener('click',function(){go(i);});});
    if(FINE){stage.addEventListener('pointerenter',function(){paused=true;stage.classList.add('paused');});stage.addEventListener('pointerleave',function(){paused=false;stage.classList.remove('paused');});}
    var sx=null;scr.addEventListener('pointerdown',function(e){sx=e.clientX;});scr.addEventListener('pointerup',function(e){if(sx==null)return;var dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40)go(K+(dx<0?1:-1));});
    size();addEventListener('resize',function(){size();if(R)paint(K,6);});
    if(window.ResizeObserver)new ResizeObserver(function(){size();if(R)paint(K,6);}).observe(scr);
    setT('ocCapT',SC[0].cap);kp(0,0,true);
    if(R){paint(0,6);kp(0,6,false);return;}
    var lt=0;var on=loop(function(t,dt){if(!W)size();if(!W)return;var rd=lt?Math.min(250,t-lt):dt;lt=t;tS+=rd/1000;if(!paused){el+=rd;}
      paint(K,tS);kp(K,tS,false);var b=btns[K];if(b)b.style.setProperty('--p',clamp(el/DUR,0,1).toFixed(3));
      if(prev>=0){prevAt+=rd;if(prevAt<1100)paint(prev,6+prevAt/1000);else{els[prev].classList.remove('out');prev=-1;}}
      if(el>=DUR)go(K+1);});
    XH.whenVisible(scr,function(v){vis=v;lt=0;on(v);});
  })();

  /* ---------- 3. micro-interactions: magnetic CTAs, tilt ---------- */
  if(FINE&&!R){
    $$('.oc-mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.style.transform='translate('+(x*8).toFixed(1)+'px,'+(y*6-2).toFixed(1)+'px)';});
      b.addEventListener('pointerleave',function(){b.style.transform='';});});
    $$('.oc-tile,.oc-sgc,.oc-plan').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(900px) rotateY('+(x*5).toFixed(2)+'deg) rotateX('+(-y*5).toFixed(2)+'deg) translateY(-4px)';});
      c.addEventListener('pointerleave',function(){c.style.transform='';});});
  }

  /* ---------- 4. underline helper for pill groups ---------- */
  function uline(box,u){var b=$('button.on',box);if(!b||!u)return;u.style.width=b.offsetWidth+'px';u.style.transform='translateX('+(b.offsetLeft-5)+'px)';}

  /* ---------- 5. service families filter ---------- */
  (function(){var f=$id('ocFam'),tiles=$$('#ocTiles .oc-tile'),u=$('.oc-famu',f);if(!f)return;
    f.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;$$('button',f).forEach(function(x){x.classList.toggle('on',x===b);});uline(f,u);var k=b.getAttribute('data-f');
      tiles.forEach(function(t,i){var m=k==='all'||t.getAttribute('data-f')===k;t.classList.toggle('hide',!m);t.classList.remove('pop');if(m&&!R){void t.offsetWidth;t.style.animationDelay=(i%6)*40+'ms';t.classList.add('pop');}});});
    uline(f,u);addEventListener('resize',function(){uline(f,u);});d.fonts&&d.fonts.ready.then(function(){uline(f,u);});
  })();

  /* ---------- 6. overview responsibility bars ---------- */
  (function(){var m=$('.oc-srm');if(!m)return;if(R){m.classList.add('in');return;}XH.whenVisible(m,function(v){if(v)m.classList.add('in');});})();

  /* ---------- 7. lifecycle — scroll-linked timeline ---------- */
  (function(){var lc=$id('ocLc'),fl=$id('ocLcF'),items=$$('.oc-lci',lc);if(!lc)return;var tk=false;
    function upd(){tk=false;var r=lc.getBoundingClientRect(),vh=window.frameElement?window.parent.innerHeight:innerHeight,ft=window.frameElement?window.frameElement.getBoundingClientRect().top:0,p=R?1:clamp((vh*.78-r.top-ft)/(r.height*.9),0,1);fl.style.setProperty('--p',p.toFixed(3));items.forEach(function(it,i){it.classList.toggle('on',p>=i/5+.04);});}
    addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(upd);}},{passive:true});addEventListener('resize',upd);upd();
  })();

  /* ---------- 8. 24×7 shift clock ---------- */
  (function(){var cv=$id('ocClkC'),box=$id('ocClk');if(!cv)return;var c=cv.getContext('2d'),S=0,ink='#041E42',mut='#51607A',line='#E3E9F2',cards=$$('.oc-opc');
    var SEG=[[1,2.5,'Backups',AMB,3],[2.5,4.5,'Patch window',RED,2],[6,6.5,'DR check',BLU,3],[9,9.4,'Daily report',GRN,0],[14,14.6,'Incident · P2',RED,1],[21,21.5,'Capacity check',GRN,0]];
    var EV=[[1,'Backups running',3],[2.5,'Patch window · DB update',2],[6,'Data Guard lag check',3],[9,'Daily report sent',0],[14.1,'Alarm → ticket P2 · sample',1],[21,'Capacity review',0]];
    function theme(){var cs=getComputedStyle(d.documentElement);ink=cs.getPropertyValue('--ink').trim()||ink;mut=cs.getPropertyValue('--muted').trim()||mut;line=cs.getPropertyValue('--line').trim()||line;}
    theme();new MutationObserver(theme).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
    function size(){var r=cv.getBoundingClientRect();S=Math.round(r.width);if(S){cv.width=cv.height=Math.round(S*DPR);}}
    var hot=-1;
    function draw(t){if(!S)size();if(!S)return;var hr=R?14.2:((t/1000)*1.5)%24;c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,S,S);var cx=S/2,cy=S/2,Rr=S*.4,u=S/440;
      c.lineWidth=2;c.strokeStyle=line;c.beginPath();c.arc(cx,cy,Rr,0,TAU);c.stroke();
      c.lineWidth=4*u;c.strokeStyle='rgba(199,70,52,.18)';c.beginPath();c.arc(cx,cy,Rr-16*u,0,TAU);c.stroke();
      for(var h=0;h<24;h++){var a=-PI/2+TAU*h/24,big=h%3===0;c.strokeStyle=big?ink:mut;c.globalAlpha=big?.7:.35;c.lineWidth=big?2:1;c.beginPath();c.moveTo(cx+Math.cos(a)*(Rr+4*u),cy+Math.sin(a)*(Rr+4*u));c.lineTo(cx+Math.cos(a)*(Rr+(big?14:9)*u),cy+Math.sin(a)*(Rr+(big?14:9)*u));c.stroke();c.globalAlpha=1;
        if(big)txt(c,(h<10?'0':'')+h,cx+Math.cos(a)*(Rr+28*u),cy+Math.sin(a)*(Rr+28*u),11*u+2,mut,'center',600);}
      c.lineCap='round';SEG.forEach(function(s){var a0=-PI/2+TAU*s[0]/24,a1=-PI/2+TAU*s[1]/24,act=hr>=s[0]&&hr<=s[1]+.4;c.strokeStyle=rgba(s[3],act?1:.55);c.lineWidth=(act?16:11)*u;c.beginPath();c.arc(cx,cy,Rr-16*u,a0,a1);c.stroke();});c.lineCap='butt';
      var ha=-PI/2+TAU*hr/24;c.strokeStyle='#C74634';c.lineWidth=2.4*u;c.beginPath();c.moveTo(cx+Math.cos(ha)*Rr*.5,cy+Math.sin(ha)*Rr*.5);c.lineTo(cx+Math.cos(ha)*(Rr-4*u),cy+Math.sin(ha)*(Rr-4*u));c.stroke();
      sprite(c,spR,cx+Math.cos(ha)*(Rr-16*u),cy+Math.sin(ha)*(Rr-16*u),34*u,1);
      EV.forEach(function(e){var dd=hr-e[0];if(dd>=0&&dd<1.2){var a=-PI/2+TAU*e[0]/24,pp=dd/1.2;c.strokeStyle='rgba(199,70,52,'+(1-pp)+')';c.lineWidth=2;c.beginPath();c.arc(cx+Math.cos(a)*(Rr-16*u),cy+Math.sin(a)*(Rr-16*u),6*u+pp*22*u,0,TAU);c.stroke();}});
      var hh=Math.floor(hr),mm=Math.floor((hr-hh)*60);setT('ocClkT',(hh<10?'0':'')+hh+':'+(mm<10?'0':'')+mm);
      var cur=null;EV.forEach(function(e){if(hr>=e[0]&&hr<e[0]+2)cur=e;});setT('ocClkE',cur?cur[1]:'Monitoring · all quiet');
      var nh=cur?cur[2]:-1;if(nh!==hot){hot=nh;cards.forEach(function(cd){cd.classList.toggle('hot',+cd.getAttribute('data-e')===hot);});}}
    size();addEventListener('resize',size);
    if(R){draw(0);XH.whenVisible(box,function(v){if(v)draw(0);});return;}
    var on=loop(draw);XH.whenVisible(box,on);
  })();

  /* ---------- 9. FinOps waterfall ---------- */
  (function(){var svg=$id('ocWfSvg');if(!svg)return;var NS='http://www.w3.org/2000/svg',BASE=600000;
    var LV=[['right','Rightsize',.12],['cred','Credits',.09],['byol','BYOL',.14],['sched','Night off',.05],['tier','Tiers',.03]];
    var X0=10,Wd=540,Hb=210,Yb=232,bars=[],seen=false;
    function mk(tag,at,par){var e=d.createElementNS(NS,tag);for(var k in at)e.setAttribute(k,at[k]);(par||svg).appendChild(e);return e;}
    mk('line',{x1:0,x2:560,y1:Yb,y2:Yb});
    var n=LV.length+2,bw=Wd/n-14;
    for(var i=0;i<n;i++){var x=X0+i*(Wd/n),g=mk('g',{});var r=mk('rect',{x:x,y:Yb,width:bw,height:0,rx:6},g);var v=mk('text',{x:x+bw/2,y:Yb-6,'text-anchor':'middle','class':'val'},g);var l=mk('text',{x:x+bw/2,y:Yb+16,'text-anchor':'middle','class':'lbl2'},g);
      l.textContent=i===0?'Today':i===n-1?'After':LV[i-1][1];bars.push({r:r,v:v,x:x});}
    function sc(a){return a/BASE*Hb;}
    function upd(){var on={};$$('[data-lv]').forEach(function(c){on[c.getAttribute('data-lv')]=c.checked;});
      var cur=BASE,tot=0;bars[0].r.style.y=(Yb-sc(BASE))+'px';bars[0].r.style.height=sc(BASE)+'px';bars[0].r.setAttribute('fill','#8a7d75');bars[0].v.textContent='₹6.0 L';bars[0].v.setAttribute('y',Yb-sc(BASE)-6);
      LV.forEach(function(L,i){var b=bars[i+1],s=on[L[0]]?cur*L[2]:0;b.r.setAttribute('fill','#E86A55');b.r.style.opacity=s?1:.25;var top=Yb-sc(cur);b.r.style.y=top+'px';b.r.style.height=Math.max(2,sc(s))+'px';b.v.textContent=s?'−₹'+(s/100000).toFixed(1)+' L':'off';b.v.setAttribute('y',top-6);cur-=s;tot+=s;});
      var lb=bars[n-1];lb.r.setAttribute('fill','#5FD08D');lb.r.style.y=(Yb-sc(cur))+'px';lb.r.style.height=sc(cur)+'px';lb.v.textContent='₹'+(cur/100000).toFixed(1)+' L';lb.v.setAttribute('y',Yb-sc(cur)-6);
      tween($id('ocWfT'),cur,inr,800);setT('ocWfS','−'+Math.round(tot/BASE*100)+'%');}
    $$('[data-lv]').forEach(function(c){c.addEventListener('change',upd);});
    if(R){upd();return;}
    bars.forEach(function(b){b.r.style.y=Yb+'px';b.r.style.height='0px';});
    XH.whenVisible(svg,function(v){if(v&&!seen){seen=true;setTimeout(upd,120);}});
  })();

  /* ---------- 10. plans: pricing model toggle ---------- */
  var cfg={};
  (function(){var pm=$('.oc-pm'),u=pm&&$('.u',pm),sec=$id('pricing');if(!pm)return;
    pm.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;$$('button',pm).forEach(function(x){x.classList.toggle('on',x===b);});uline(pm,u);var m=b.getAttribute('data-m');sec.classList.toggle('pct',m==='pct');if(cfg.setModel)cfg.setModel(m);});
    uline(pm,u);addEventListener('resize',function(){uline(pm,u);});d.fonts&&d.fonts.ready.then(function(){uline(pm,u);});
    $$('[data-plan]').forEach(function(b){b.addEventListener('click',function(){if(cfg.setPlan)cfg.setPlan(b.getAttribute('data-plan'));var t=$id('configure');if(t)scrollTo({top:t.getBoundingClientRect().top+scrollY-130,behavior:R?'auto':'smooth'});});});
    $$('[data-add]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-add');XH.cart.add({key:'mocl-'+k,name:k==='assess'?'Cloud readiness assessment (OCI)':'OCI landing zone setup',sub:'Managed Oracle Cloud · one-time · indicative',price:P[k],qty:1});});});
  })();

  /* ---------- 11. configurator ---------- */
  (function(){var cPl=$id('cPl'),cMo=$id('cMo'),cRs=$id('cRs'),cSp=$id('cSp'),cEn=$id('cEn'),add=$id('oAdd');if(!cPl)return;
    var A=[[$id('cA0'),'dba','Managed Oracle DBA'],[$id('cA1'),'spm','Security posture management'],[$id('cA2'),'drd','Quarterly DR drill'],[$id('cA3'),'log','180-day log archive']];
    var PN={ess:'Essential',pro:'Professional',ent:'Enterprise'},INC={ess:10,pro:40},XR={ess:P.xEss,pro:P.xPro},MID=[150000,350000,1000000,2750000,5000000],SPL=['under ₹2 lakh','₹2–5 lakh','₹5–15 lakh','₹15–40 lakh','₹40 lakh+'],ENL=['Prod only','Prod + Dev/Test','Prod + Dev/Test + DR','Prod + Dev/Test + DR + UAT'];
    var cur={sub:0};
    function seg(s,v){var b=$('button[data-v="'+v+'"]',s);if(b&&!b.classList.contains('on'))b.click();}
    cfg.setPlan=function(p){seg(cPl,p);};cfg.setModel=function(m){seg(cMo,m);};
    function calc(){var pl=cPl.dataset.value||'pro',mo=cMo.dataset.value||'flat',rs=clamp(parseInt(cRs.value,10)||1,1,400),sp=+(cSp.dataset.value||1),en=+(cEn.dataset.value||2),rows=[],sub=0,tip='';
      setT('cPlL',PN[pl]);setT('cMoL',mo==='pct'?'8% of monthly spend':'Flat fee');setT('cRsL',rs+(rs===1?' resource':' resources'));setT('cSpL',SPL[sp]);setT('cEnL',ENL[en-1]);
      var ent=pl==='ent';
      if(ent){rows.push(['Enterprise plan','Quote']);}
      else if(mo==='pct'){var fee=Math.max(P.min,Math.round(MID[sp]*PCT));rows.push([PN[pl]+' · 8% of ~'+inr(MID[sp])+' spend',inr(fee)]);sub+=fee;
        var flat=P[pl]+Math.max(0,rs-INC[pl])*XR[pl]+(en-1)*P.env;if(flat<fee)tip='A flat fee of '+inr(flat)+' would be lower for this spend.';}
      else{rows.push([PN[pl]+' plan · up to '+INC[pl]+' resources',inr(P[pl])]);sub+=P[pl];var ex=Math.max(0,rs-INC[pl]);if(ex){rows.push([ex+' extra resources × '+inr(XR[pl])+'*',inr(ex*XR[pl])]);sub+=ex*XR[pl];}
        if(pl==='ess'&&rs>INC.ess){var pf=P.pro+Math.max(0,rs-INC.pro)*XR.pro;tip=pf<=P.ess+(rs-INC.ess)*XR.ess?'Professional ('+inr(pf)+') covers this size for less and adds patching and 24×7 response.':'Over 10 resources? Professional adds patching, backups and 24×7 incident response.';}
        var fp=Math.max(P.min,Math.round(MID[sp]*PCT));if(!tip&&fp<sub*.85)tip='At this spend, 8% of cloud spend ('+inr(fp)+') may be lower — switch the pricing model to compare.';}
      if(!ent&&en>1){rows.push([(en-1)+' extra environment'+(en>2?'s':'')+' × '+inr(P.env)+'*',inr((en-1)*P.env)]);sub+=(en-1)*P.env;}
      var adn=[];A.forEach(function(a){if(a[0]&&a[0].checked){rows.push([a[2],inr(P[a[1]])]);if(!ent)sub+=P[a[1]];adn.push(a[2]);}});
      $id('oRows').innerHTML=rows.map(function(r){return '<div class="crow"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>';}).join('');
      if(ent){setT('oTot','Quote');setT('oSub','—');setT('oGst','—');setT('oPay','—');add.disabled=true;tip='Enterprise is scoped per tenancy — we send a quotation within one business day.';$id('oTot')._v=undefined;}
      else{add.disabled=false;tween($id('oTot'),sub,inr,600);setT('oSub',inr(sub));setT('oGst',inr(sub*.18));setT('oPay',inr(sub*1.18));}
      setT('oTip',tip);cur={pl:pl,mo:mo,rs:rs,en:en,sub:sub,ad:adn};}
    [cPl,cMo,cSp,cEn].forEach(function(s){s.addEventListener('change',calc);});
    cRs.addEventListener('input',calc);cRs.addEventListener('change',calc);A.forEach(function(a){a[0]&&a[0].addEventListener('change',calc);});
    cMo.addEventListener('change',function(){var m=cMo.dataset.value,pm=$('.oc-pm'),b=pm&&$('button[data-m="'+m+'"]',pm);if(b&&!b.classList.contains('on'))b.click();});
    add.addEventListener('click',function(){if(!cur.sub)return;XH.cart.add({key:'mocl-'+cur.pl+'-'+cur.mo+'-'+cur.rs+'-'+cur.en+'-'+cur.ad.length,name:'Managed Oracle Cloud · '+PN[cur.pl]+(cur.mo==='pct'?' (8% of spend)':''),sub:cur.rs+' resources · '+cur.en+' env'+(cur.ad.length?' · '+cur.ad.join(', '):'')+' · per month · indicative',price:cur.sub,qty:1});});
    calc();
  })();

  /* ---------- 12. OCI fit checker ---------- */
  (function(){var wk=$id('fWk'),sz=$id('fSz'),ha=$id('fHa'),lc=$id('fLc'),svg=$id('fStk');if(!wk)return;var NS='http://www.w3.org/2000/svg';
    svg.setAttribute('viewBox','0 0 150 250');
    var lay=[];for(var i=0;i<4;i++){var g=d.createElementNS(NS,'g'),r=d.createElementNS(NS,'rect'),t1=d.createElementNS(NS,'text'),t2=d.createElementNS(NS,'text');r.setAttribute('x',6);r.setAttribute('width',138);r.setAttribute('rx',10);
      t1.setAttribute('x',75);t1.setAttribute('text-anchor','middle');t1.setAttribute('style','font:700 11px Sora,sans-serif');t2.setAttribute('x',75);t2.setAttribute('text-anchor','middle');t2.setAttribute('style','font:500 9px "IBM Plex Mono",monospace');
      g.appendChild(r);g.appendChild(t1);g.appendChild(t2);svg.appendChild(g);lay.push({g:g,r:r,t1:t1,t2:t2});}
    var DB={oltp:1,dw:1,ebs:1,jde:1,psft:1};
    function rec(w,s,h,l){var o={};
      if(w==='oltp'){o.svc=s===0?'Autonomous Database · Transaction Processing':s===1?'Base Database Service EE or Autonomous (dedicated)':'Exadata Database Service · dedicated infrastructure';o.shp=s===0?'Serverless · scale by ECPU':s===1?'Flex VM DB systems (AMD E5 / E6)':'Exadata VM cluster with RAC';o.st=['Your application','Connection pool','Oracle Database',s>=2?'Exadata · RAC':'OCI compute · storage'];o.hi=[2,3];}
      else if(w==='dw'){o.svc=s>=3?'Exadata Database Service for analytics':'Autonomous Database · Lakehouse';o.shp=s>=3?'Exadata VM cluster':'Serverless · storage scales separately';o.st=['BI / analytics tools','Data loads · ETL','Autonomous Lakehouse','Object Storage · data lake'];o.hi=[2,3];}
      else if(w==='ebs'){o.svc='E-Business Suite on OCI via EBS Cloud Manager';o.shp='Flex VMs for web/app · '+(s>=2?'Exadata':'Base Database')+' for the database';o.st=['EBS web tier','EBS app tier · concurrent mgr','Oracle Database',s>=2?'Exadata':'Base Database'];o.hi=[0,1,2];}
      else if(w==='jde'){o.svc='JD Edwards EnterpriseOne via One-Click Provisioning';o.shp='Flex VMs for enterprise & web servers · Base Database';o.st=['JDE HTML server','Enterprise server','Oracle Database','OCI compute · storage'];o.hi=[0,1,2];}
      else if(w==='psft'){o.svc='PeopleSoft via PeopleSoft Cloud Manager';o.shp='Flex VMs for PIA / app / batch · Base Database';o.st=['PIA web tier','App server · batch','Oracle Database','OCI compute · storage'];o.hi=[0,1,2];}
      else if(w==='app'){o.svc='OCI Compute behind a Load Balancer + WAF';o.shp='AMD E5 Flex or Ampere A1/A2 Flex (Arm)';o.st=['Load balancer · WAF','Java / .NET app VMs','Managed database','VCN · subnets'];o.hi=[0,1];}
      else if(w==='k8s'){o.svc='OCI Kubernetes Engine (OKE)';o.shp='Node pools on Ampere A1 or AMD E5 Flex';o.st=['Ingress · load balancer','OKE workloads','Registry · secrets','Node pools'];o.hi=[1,3];}
      else{o.svc='OCI Compute with Windows Server';o.shp='Intel Standard3 Flex or AMD E5 Flex';o.st=['Users · RDP via Bastion','Windows app servers','SQL Server','Block volumes · backups'];o.hi=[1,2];}
      var isdb=DB[w];
      o.dr=h===0?'Backups to Object Storage · restore in Hyderabad':h===1?(isdb?'In-region HA: RAC or Data Guard across availability / fault domains':'Instances across fault domains behind a load balancer'):(isdb?'Data Guard to Hyderabad (ap-hyderabad-1) + Full Stack DR':'Full Stack DR or replicated stack in Hyderabad');
      if(w==='win')o.lic='Windows Server can be licence-included on OCI; SQL Server licensing follows Microsoft terms — confirm before migration.';
      else if(w==='app'||w==='k8s')o.lic='No Oracle Database licence needed unless the app uses one. Oracle Linux images are available on OCI.';
      else o.lic=l==='byol'?'BYOL may let you use existing Oracle licences on eligible OCI services — eligibility confirmed with Oracle.':l==='li'?'Licence-included pricing is available on many OCI database services — confirm the edition and options with Oracle.':'We review your Oracle agreements in the assessment and compare BYOL with licence-included — confirm with Oracle.';
      o.pl=(s>=2||h===2)?'Enterprise (quote)':(w==='ebs'||w==='jde'||w==='psft')?'Professional + Managed Oracle DBA':(s===0&&h===0&&!isdb)?'Essential':'Professional';
      return o;}
    function run(){var w=($('button.on',wk)||{}).getAttribute?$('button.on',wk).getAttribute('data-v'):'oltp',s=+(sz.dataset.value||1),h=+(ha.dataset.value||1),l=lc.dataset.value||'byol',o=rec(w,s,h,l);
      [['fSvc',o.svc],['fShp',o.shp],['fDr',o.dr],['fLic',o.lic],['fPl',o.pl]].forEach(function(p){var e=$id(p[0]);if(e.textContent!==p[1]){e.textContent=p[1];if(!R){e.classList.remove('fl');void e.offsetWidth;e.classList.add('fl');}}});
      var y=4;lay.forEach(function(L,i){var hi=o.hi.indexOf(i)>=0,hh=hi?66:44;L.r.style.y=y+'px';L.r.style.height=(hh-6)+'px';L.r.setAttribute('y',y);L.r.setAttribute('height',hh-6);
        L.r.style.fill=hi?'rgba(199,70,52,.85)':'rgba(255,240,230,.07)';L.r.style.stroke=hi?'#ffb7a6':'rgba(255,225,210,.2)';
        L.t1.textContent=o.st[i];L.t1.setAttribute('y',y+(hh-6)/2+(hi?-2:3));L.t1.style.fill='#fff';L.t2.textContent=hi?'XcellHost managed':'';L.t2.setAttribute('y',y+(hh-6)/2+14);L.t2.style.fill='#ffd7c9';
        if(o.st[i].length>20)L.t1.setAttribute('style','font:700 9.5px Sora,sans-serif;fill:#fff');else L.t1.setAttribute('style','font:700 11px Sora,sans-serif;fill:#fff');y+=hh;});}
    wk.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;$$('button',wk).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});run();});
    [sz,ha,lc].forEach(function(s){s.addEventListener('change',run);});run();
  })();

  /* ---------- 13. migration runway ---------- */
  (function(){var tb=$id('rTb'),lk=$id('rLk'),dt=$id('rDt'),ap=$id('rAp'),gt=$id('rGt');if(!tb)return;
    function dur(h){return h<1?Math.round(h*60)+' min':h<48?(Math.round(h*10)/10)+' h':(Math.round(h/24*10)/10)+' days';}
    function run(){var T=+tb.value,L=+(lk.dataset.value||10),D=+(dt.dataset.value||2),N=+(ap.dataset.value||2);
      setT('rTbL',T+' TB');setT('rLkL',L===0.3?'Site-to-site VPN ~300 Mb/s':'FastConnect '+L+' Gb/s');setT('rDtL',['Minutes','A few hours','A weekend'][D]);setT('rApL',N+(N>1?' waves':' wave'));
      var ch=T*8000/(L*.7*3600),m,cut;
      if(D===0){m='Online sync then switchover (Data Guard / GoldenGate, or Oracle ZDM online)';cut='~15–30 min';}
      else if(D===1){m='Data Guard standby or RMAN incremental, then switchover';cut='2–4 h';}
      else{if(ch>40){m='Copy too slow for a weekend — seed online with Data Guard, then switch';cut='2–4 h';}else{m='Offline copy (RMAN / Data Pump) in the window';cut=dur(ch+4);}}
      if(L===0.3&&T>30)m+=' · consider an offline seed (OCI Data Transfer)';
      setT('rM',m);setT('rC',dur(ch));setT('rD',cut);
      var cw=Math.max(.3,ch/24/7),tot=Math.ceil(3+2+N*2+1+Math.max(0,cw-1)),rows=[['Assess',0,3,'p'],['Landing zone',2.5,2,''],['Initial copy',4.5,cw,'c']];
      for(var i=0;i<N;i++)rows.push(['Wave '+(i+1),4.5+Math.max(cw,.5)+i*2,2,'']);rows.push(['Hypercare',4.5+Math.max(cw,.5)+N*2,1,'h']);
      tot=Math.ceil(Math.max(tot,rows[rows.length-1][1]+1));setT('rW',tot+' weeks');
      var ax='<div class="ax">';for(var k=0;k<=4;k++)ax+='<span>W'+Math.round(tot*k/4)+'</span>';ax+='</div>';
      gt.innerHTML=ax+rows.map(function(r,j){var l=(r[1]/tot*100).toFixed(2),w=Math.max(2,r[2]/tot*100).toFixed(2);return '<div class="oc-gr '+r[3]+'"><span>'+r[0]+'</span><div class="tk"><i style="left:'+l+'%;width:'+w+'%;transition-delay:'+(j*90)+'ms">'+(r[2]>=1?(r[0]==='Initial copy'?dur(ch):Math.round(r[2]*10)/10+' w'):'')+'</i></div></div>';}).join('');
      gt.classList.remove('go');if(R)gt.classList.add('go');else{void gt.offsetWidth;requestAnimationFrame(function(){gt.classList.add('go');});}}
    tb.addEventListener('input',run);[lk,dt,ap].forEach(function(s){s.addEventListener('change',run);});
    var seen=false;XH.whenVisible(gt,function(v){if(v&&!seen){seen=true;run();}});run();
  })();

  /* ---------- 14. landing zone diagram ---------- */
  (function(){var lz=$id('ocLz');if(!lz)return;var sv=$('svg',lz);if(R){lz.classList.add('in');var pk=$('.pk',lz);if(pk)pk.remove();return;}
    XH.whenVisible(lz,function(v){if(v)lz.classList.add('in');try{v?sv.unpauseAnimations():sv.pauseAnimations();}catch(e){}});})();
})();


