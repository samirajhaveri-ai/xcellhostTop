/* Imported from vortex-soc.html; shared chrome uses the Angular shell. */
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
  XH.open=function(id,opts){d.dispatchEvent(new CustomEvent('import-callback',{detail:opts&&opts.topic||'Vortex SOC Services'}));};
  XH.cart={add:function(item){d.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};
  XH.toast=function(message){var toast=$('#vortexSocToast');toast.textContent=message;toast.hidden=false;clearTimeout(XH.toastTimer);XH.toastTimer=setTimeout(function(){toast.hidden=true;},3000);};
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

/* Vortex SOC · mission-control page runtime (one shared rAF loop) */
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,d=document;
  function cl(v,a,b){return v<a?a:v>b?b:v;}
  function ph(t,s,du){return cl((t-s)/du,0,1);}
  function eo(x){return 1-Math.pow(1-x,3);}
  function eio(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}
  function fmt(n){return Math.round(n).toLocaleString('en-IN');}
  function setSeg(s,v){if(!s)return;$$('button',s).forEach(function(b){var on=b.getAttribute('data-v')===String(v);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});s.dataset.value=v;s.dispatchEvent(new CustomEvent('change',{bubbles:true}));}

  /* ---------- one shared rAF loop ---------- */
  var T=[],raf=0,last=0;
  function ticker(fn){var o={on:false,fn:fn};T.push(o);return o;}
  function frame(now){raf=0;var dt=last?Math.min(.1,(now-last)/1000):.016;last=now;var any=false;
    for(var i=0;i<T.length;i++){if(T[i].on){any=true;T[i].fn(dt,now);}}
    if(any)raf=requestAnimationFrame(frame);else last=0;}
  function wake(){if(!raf&&!R)raf=requestAnimationFrame(frame);}
  function bindVis(o,el,extra){XH.whenVisible(el,function(v){o.vis=v;o.on=v&&(!extra||extra());if(o.on)wake();});}
  /* CSS-animated illustrations pause offscreen */
  ['#vsRiver','#vsOrb','#vsPp','#vsTopo','#overview .vs-kin'].forEach(function(s){var el=$(s);if(el)XH.whenVisible(el,function(v){el.classList.toggle('paused',!v);});});

  /* =====================================================================
     HERO · rotating live-scene ops wall
     ===================================================================== */
  var mon=$('#vsMon'),scr=$('#vsScr'),cv=$('#vsCv');
  if(mon&&cv){
    var cx=cv.getContext('2d'),W=0,H=0,K=1,LH=600,VW=1000,Z=1,MOB=false,dpr=Math.min(2,window.devicePixelRatio||1);
    var C={cy:'#22D3EE',vi:'#A78BFA',vi2:'#7C3AED',gr:'#34D399',rd:'#F43F5E',am:'#FBBF24',tx:'#E6EDFB',mu:'#8190B0',ln:'rgba(160,180,230,.18)',pn:'#0D1536',pn2:'#111B45'};
    var MONO='"IBM Plex Mono",monospace',DISP='Sora,sans-serif';
    var CAM=[[[300,300],[740,300]],[[300,300],[740,300]],[[300,285],[740,285]],[[300,300],[740,300]],[[300,300],[740,300]]];
    function size(){var r=cv.getBoundingClientRect();W=r.width;H=r.height;if(!W)return;MOB=W<600;Z=MOB?1.9:1;K=W/1000*Z;VW=W/K;LH=H/K;cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);}
    function cam(i,t){if(!MOB)return [500,300];var k=CAM[i],u=eio(ph(t,.5,4.4));return [cl(k[0][0]+(k[1][0]-k[0][0])*u,VW/2,1000-VW/2),cl(k[0][1]+(k[1][1]-k[0][1])*u,LH/2,600-LH/2)];}
    function rr(x,y,w,h,r){cx.beginPath();cx.moveTo(x+r,y);cx.arcTo(x+w,y,x+w,y+h,r);cx.arcTo(x+w,y+h,x,y+h,r);cx.arcTo(x,y+h,x,y,r);cx.arcTo(x,y,x+w,y,r);cx.closePath();}
    function box(x,y,w,h,o){o=o||{};rr(x,y,w,h,o.r==null?8:o.r);if(o.fill){cx.fillStyle=o.fill;cx.fill();}if(o.stroke){cx.strokeStyle=o.stroke;cx.lineWidth=o.lw||1;cx.setLineDash(o.dash||[]);cx.stroke();cx.setLineDash([]);}}
    function tx(s,x,y,o){o=o||{};cx.font=(o.w||500)+' '+Math.max(10,(o.s||11)*1.15).toFixed(1)+'px '+(o.f==='d'?DISP:MONO);cx.fillStyle=o.c||C.tx;cx.textAlign=o.a||'left';cx.textBaseline='alphabetic';cx.fillText(s,x,y);}
    function dot(x,y,r,c,glow){if(glow){var g=cx.globalAlpha;cx.globalAlpha=g*.22;cx.fillStyle=c;cx.beginPath();cx.arc(x,y,r*2.8,0,6.283);cx.fill();cx.globalAlpha=g;}cx.fillStyle=c;cx.beginPath();cx.arc(x,y,r,0,6.283);cx.fill();}
    function line(x1,y1,x2,y2,c,w,dash,off){cx.strokeStyle=c;cx.lineWidth=w||1;cx.setLineDash(dash||[]);cx.lineDashOffset=off||0;cx.beginPath();cx.moveTo(x1,y1);cx.lineTo(x2,y2);cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;}
    function qpt(p0,p1,p2,u){var a=1-u;return [a*a*p0[0]+2*a*u*p1[0]+u*u*p2[0],a*a*p0[1]+2*a*u*p1[1]+u*u*p2[1]];}
    function qcurve(p0,p1,p2,c,w,dash,off){cx.strokeStyle=c;cx.lineWidth=w||1;cx.setLineDash(dash||[]);cx.lineDashOffset=off||0;cx.beginPath();cx.moveTo(p0[0],p0[1]);cx.quadraticCurveTo(p1[0],p1[1],p2[0],p2[1]);cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;}
    function head(s,x,y){tx(s,x||40,y||52,{s:10.5,w:600,c:C.cy});}
    function fade(t,s,du,fn){var a=eo(ph(t,s,du||.5));if(a<=0)return;var g=cx.globalAlpha;cx.globalAlpha=g*a;fn(a);cx.globalAlpha=g;}
    function check(x,y,c){cx.strokeStyle=c;cx.lineWidth=2;cx.beginPath();cx.moveTo(x-4,y);cx.lineTo(x-1,y+3);cx.lineTo(x+5,y-4);cx.stroke();}
    /* seeded random */
    var seed=7;function rnd(){seed=(seed*16807)%2147483647;return (seed-1)/2147483646;}

    /* ---- scene 0 : telemetry → data lake ---- */
    var SRC=[['Endpoints','Windows · macOS · Linux',C.cy],['Cloud','AWS · Azure · GCP · OCI',C.vi],['Identity','AD · Entra ID · MFA',C.cy],['Network','firewall · DNS · proxy',C.vi],['Applications','web · database · SaaS',C.cy]];
    var ROWS=['ts    src   entity','02:14 idnt  finance-07','02:14 net   fw-edge-01','02:15 endp  LAP-114','02:15 cloud storage-prd','02:16 app   erp-web'];
    function epsAt(t){return 12480*eo(ph(t,.4,2.6))+(t>3?Math.sin(t*3)*60:0);}
    function s0(t){
      fade(t,0,.5,function(){head('TELEMETRY · 5 SOURCE FAMILIES → ONE DATA LAKE · SAMPLE');});
      var lx=600,ly=212,lrx=104,lry=22,lh=230;
      for(var i=0;i<5;i++){var y=84+i*88,sa=eo(ph(t,.1+i*.1,.45));if(sa<=0)continue;var g=cx.globalAlpha;cx.globalAlpha=g*sa;
        box(40,y,196,58,{fill:C.pn,stroke:C.ln,r:10});dot(58,y+21,4,SRC[i][2],true);
        tx(SRC[i][0],72,y+25,{s:13,w:700,f:'d'});tx(SRC[i][1],58,y+44,{s:9.5,c:C.mu});
        for(var b=0;b<6;b++){var hh=4+10*Math.abs(Math.sin(t*3+i*1.7+b*1.1));box(186+b*7,y+30-hh,4,hh,{fill:SRC[i][2],r:1});}
        var P0=[236,y+29],P1=[420,y+29],P2=[lx-lrx+6,ly+60+i*22];
        qcurve(P0,P1,P2,'rgba(160,180,230,.16)',1.4,[4,6],-t*30);
        if(t>.5)for(var p=0;p<4;p++){var u=((t*.55+p/4+i*.13)%1),q=qpt(P0,P1,P2,u);dot(q[0],q[1],2.6,SRC[i][2],true);}
        cx.globalAlpha=g;}
      /* lake cylinder */
      fade(t,.3,.6,function(){
        var lvl=.18+.55*eo(ph(t,.6,3)),wy=ly+lh-(lh-10)*lvl;
        cx.save();rr(lx-lrx,ly,lrx*2,lh,18);cx.clip();
        cx.fillStyle='rgba(34,211,238,.10)';cx.beginPath();cx.moveTo(lx-lrx,wy);
        for(var x=0;x<=lrx*2;x+=8)cx.lineTo(lx-lrx+x,wy+Math.sin(x/22+t*2.2)*4);cx.lineTo(lx+lrx,ly+lh);cx.lineTo(lx-lrx,ly+lh);cx.closePath();cx.fill();
        cx.restore();
        cx.strokeStyle=C.cy;cx.lineWidth=1.6;cx.beginPath();cx.ellipse(lx,ly,lrx,lry,0,0,6.283);cx.stroke();
        cx.beginPath();cx.moveTo(lx-lrx,ly);cx.lineTo(lx-lrx,ly+lh);cx.ellipse(lx,ly+lh,lrx,lry,0,Math.PI,0,true);cx.lineTo(lx+lrx,ly);cx.stroke();
        tx('UNIFIED DATA LAKE',lx,ly-46,{s:11,w:700,a:'center',c:'#fff'});tx('one schema · one query language',lx,ly-30,{s:9.5,a:'center',c:C.mu});
        var nr=Math.min(ROWS.length,Math.floor(ph(t,.9,2.4)*ROWS.length+.01));
        for(var r=0;r<nr;r++){tx(ROWS[r],lx-84,ly+42+r*22,{s:9.2,c:r?'#b9c6e2':C.cy,w:r?400:600});}
      });
      /* retention tiers */
      var TI=[['HOT','30 days · search in seconds',C.cy,.92],['WARM','180 days · CERT-In ready',C.vi,.74],['ARCHIVE','1 year+ · immutable',C.mu,.5]];
      for(i=0;i<3;i++){(function(i){fade(t,1.6+i*.3,.5,function(){var y=232+i*82;
        box(760,y,200,62,{fill:C.pn,stroke:C.ln,r:10});tx(TI[i][0],776,y+22,{s:11,w:700,c:TI[i][2]});tx(TI[i][1],776,y+38,{s:9.2,c:C.mu});
        box(776,y+46,168,6,{fill:'rgba(160,180,230,.12)',r:3});box(776,y+46,168*TI[i][3]*eo(ph(t,1.8+i*.3,1.2)),6,{fill:TI[i][2],r:3});
        line(lx+lrx,330,760,y+31,'rgba(167,139,250,.28)',1.2,[3,5],-t*24);});})(i);}
      fade(t,.4,.5,function(){tx('EPS',960,92,{s:10,w:600,c:C.mu,a:'right'});tx(fmt(epsAt(t)),960,128,{s:32,w:800,f:'d',a:'right',c:'#fff'});tx('events / second · sample',960,148,{s:9.5,c:C.cy,a:'right'});});
    }

    /* ---- scene 1 : correlation 40 alerts → 1 case ---- */
    var AL=[];seed=11;for(var a=0;a<40;a++){AL.push({x:60+rnd()*440,y:96+rnd()*400,k:a%5,dl:rnd()*.9});}
    var AK=[C.cy,C.vi,C.am,C.rd,C.gr],AN=['risky sign-in','privilege change','unusual data access','beacon-like traffic','endpoint alert'];
    var EX=600,EY=300;
    function alertsLeft(t){return t<2.2?40:Math.max(1,Math.round(40-39*eo(ph(t,2.2,1.4))));}
    function s1(t){
      fade(t,0,.5,function(){head('CORRELATION ENGINE · RULES + UEBA + THREAT INTEL · SAMPLE');});
      var conv=eio(ph(t,2.1,1.5));
      /* cluster links */
      if(t>1.2&&conv<1){var la=eo(ph(t,1.2,.6))*(1-conv);var g=cx.globalAlpha;cx.globalAlpha=g*la;
        for(var i=0;i<40;i++){var A=AL[i],B=AL[(i+5)%40];if(A.k===B.k){var ax=A.x+(EX-A.x)*conv,ay=A.y+(EY-A.y)*conv,bx=B.x+(EX-B.x)*conv,by=B.y+(EY-B.y)*conv;line(ax,ay,bx,by,AK[A.k],.8);}}
        cx.globalAlpha=g;}
      if(conv>0){var gg=cx.globalAlpha;cx.globalAlpha=gg*.22*conv;for(i=0;i<40;i++){dot(AL[i].x,AL[i].y,2.2,AK[AL[i].k]);if(i%3===0)line(AL[i].x,AL[i].y,EX,EY,'rgba(167,139,250,.35)',.6);}cx.globalAlpha=gg;}
      for(i=0;i<40;i++){var A2=AL[i],pa=eo(ph(t,.15+A2.dl,.35));if(pa<=0)continue;var x=A2.x+(EX-A2.x)*conv,y=A2.y+(EY-A2.y)*conv,gl=cx.globalAlpha;
        cx.globalAlpha=gl*pa*(1-ph(t,3.3,.4));dot(x,y,3.6+(1-pa)*4,AK[A2.k],true);cx.globalAlpha=gl;}
      fade(t,.9,.4,function(){var gl=cx.globalAlpha;cx.globalAlpha=gl*(1-eo(ph(t,2,.4)));
        for(var j=0;j<5;j++){var A3=AL[j*7];box(A3.x+8,A3.y-22,AN[A3.k].length*6.2+14,18,{fill:'rgba(5,9,26,.85)',stroke:AK[A3.k],r:9});tx(AN[A3.k],A3.x+15,A3.y-9,{s:9.5,c:AK[A3.k]});}
        cx.globalAlpha=gl;});
      /* engine */
      fade(t,.2,.6,function(){var pr=t>2.1&&t<3.6?1+.08*Math.sin(t*14):1;
        cx.strokeStyle='rgba(167,139,250,.5)';cx.lineWidth=1.5;cx.setLineDash([8,8]);cx.lineDashOffset=-t*30;cx.beginPath();cx.arc(EX,EY,54*pr,0,6.283);cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;
        cx.strokeStyle=C.vi;cx.lineWidth=2;cx.beginPath();cx.arc(EX,EY,38,t*2,t*2+4.2);cx.stroke();
        cx.fillStyle='rgba(124,58,237,.22)';cx.beginPath();cx.arc(EX,EY,30,0,6.283);cx.fill();
        tx(String(alertsLeft(t)),EX,EY+6,{s:20,w:800,f:'d',a:'center',c:'#fff'});tx(alertsLeft(t)>1?'alerts':'case',EX,EY+76,{s:10,a:'center',c:C.mu});});
      tx('ALERTS '+alertsLeft(t)+'  →  CASES '+(t>3.4?1:0),40,560,{s:10,w:600,c:C.mu});
      /* case card */
      fade(t,3.3,.6,function(e){var ox=(1-e)*40;var x=700+ox,y=150;
        box(x,y,260,300,{fill:C.pn2,stroke:'rgba(244,63,94,.6)',r:14});
        tx('CASE #2481',x+18,y+30,{s:12,w:700,c:'#fff'});box(x+196,y+16,46,20,{fill:C.rd,r:6});tx('P1',x+219,y+30,{s:11,w:700,a:'center',c:'#fff'});
        tx('risky sign-in → bulk data access',x+18,y+52,{s:9.6,c:C.mu});
        var rk=Math.round(87*eo(ph(t,3.5,.8)));tx('risk',x+18,y+86,{s:10,c:C.mu});tx(String(rk),x+18,y+118,{s:32,w:800,f:'d',c:C.rd});
        box(x+90,y+100,150,8,{fill:'rgba(160,180,230,.12)',r:4});box(x+90,y+100,150*rk/100,8,{fill:C.rd,r:4});
        var EN=[['user','finance-07'],['host','LAP-114'],['cloud','storage-prod'],['ATT&CK','TA0001 · TA0009']];
        for(var j=0;j<4;j++){var ea=eo(ph(t,3.7+j*.15,.4)),gl=cx.globalAlpha;cx.globalAlpha=gl*ea;tx(EN[j][0],x+18,y+152+j*26,{s:9.5,c:C.mu});tx(EN[j][1],x+82,y+152+j*26,{s:10.5,w:600,c:C.tx});cx.globalAlpha=gl;}
        tx('40 alerts merged · evidence attached',x+18,y+272,{s:9.5,c:C.cy});
        line(EX+54,EY,x,y+150,'rgba(244,63,94,.4)',1.4,[4,5],-t*30);});
    }

    /* ---- scene 2 : SOAR playbook ---- */
    var PB=[['Trigger','case ≥ P2',.2],['Enrich','intel · asset · user',.7],['Approve','analyst gate',1.5],['Contain','isolate · block',2.9],['Close','report · learn',4]];
    var PX=[110,300,500,700,890],PY=180;
    function gateState(t){return t<1.5?0:t<2.6?1:2;}
    function pbStep(t){var s=0;for(var i=0;i<PB.length;i++)if(t>=PB[i][2])s=i;return s;}
    function s2(t){
      fade(t,0,.5,function(){head('SOAR PLAYBOOK · AUTO-CONTAIN · CASE #2481 · SAMPLE');});
      var secs=Math.floor(cl(t,0,4.6)*11);tx('T+00:00:'+(secs<10?'0':'')+secs,960,52,{s:12,w:600,a:'right',c:'#fff'});
      /* connectors */
      for(var i=0;i<4;i++){var on=t>=PB[i+1][2];line(PX[i]+70,PY+40,PX[i+1]-70,PY+40,on?'rgba(34,211,238,.6)':'rgba(160,180,230,.18)',2,[6,6],on?-t*30:0);}
      /* token */
      var tk=t<.7?0:t<1.3?eio(ph(t,.7,.6)):t<1.5?1+eio(ph(t,1.3,.2)):t<2.6?2:t<2.9?2+eio(ph(t,2.6,.3)):t<3.8?3:3+eio(ph(t,3.8,.2));
      tk=Math.min(4,tk);var ix=Math.floor(tk),fr=tk-ix,txp=ix<4?PX[ix]+(PX[ix+1]-PX[ix])*fr:PX[4];
      for(i=0;i<5;i++){var st=t>=PB[i][2]+.45?2:t>=PB[i][2]?1:0;if(i===2){st=gateState(t)===2?2:gateState(t)===1?1:0;}
        var na=eo(ph(t,.05+i*.08,.4));if(na<=0)continue;var g=cx.globalAlpha;cx.globalAlpha=g*na;
        var col=i===2?C.am:C.cy,stc=st===2?(i===2?'rgba(251,191,36,.75)':'rgba(52,211,153,.7)'):st===1?col:C.ln;
        box(PX[i]-70,PY,140,80,{fill:st?'rgba(17,27,69,.95)':C.pn,stroke:stc,lw:st?1.6:1,r:14});
        tx(PB[i][0],PX[i],PY+34,{s:14,w:700,f:'d',a:'center',c:st?'#fff':'#9aa7c4'});tx(PB[i][1],PX[i],PY+54,{s:9,a:'center',c:C.mu});
        if(st===2&&i!==2)check(PX[i]+52,PY+16,C.gr);
        cx.globalAlpha=g;}
      if(t>.2&&t<4.6){dot(txp,PY+40,6,C.cy,true);}
      /* gate ring */
      var gs=gateState(t);
      if(gs>=1){var gx=PX[2],gy=PY+128;
        if(gs===1){var u=ph(t,1.5,1.1);cx.strokeStyle='rgba(251,191,36,.25)';cx.lineWidth=4;cx.beginPath();cx.arc(gx,gy,18,0,6.283);cx.stroke();cx.strokeStyle=C.am;cx.beginPath();cx.arc(gx,gy,18,-1.57,-1.57+6.283*u);cx.stroke();
          tx('awaiting analyst approval',gx,gy+40,{s:10,a:'center',c:C.am});}
        else{cx.fillStyle='rgba(52,211,153,.15)';cx.beginPath();cx.arc(gx,gy,18,0,6.283);cx.fill();check(gx,gy,C.gr);tx('approved · SOC shift B',gx,gy+40,{s:10,a:'center',c:C.gr});}}
      /* enrich details */
      fade(t,.9,.4,function(){var E=['intel match · known-bad (sample)','asset · finance laptop · high value','user · no travel on record'];for(var j=0;j<3;j++){var ea=eo(ph(t,.95+j*.18,.3)),gl=cx.globalAlpha;cx.globalAlpha=gl*ea;tx('› '+E[j],PX[1]-70,PY+120+j*20,{s:9.2,c:'#b9c6e2'});cx.globalAlpha=gl;}});
      /* contain actions */
      fade(t,2.95,.4,function(){var A=['isolate host','disable account','revoke sessions','block at firewall'];
        for(var j=0;j<4;j++){var ea=ph(t,3+j*.22,.3),y=PY+112+j*28,gl=cx.globalAlpha;cx.globalAlpha=gl*eo(ea);box(PX[3]-82,y,164,24,{fill:'rgba(5,9,26,.8)',stroke:ea>=1?'rgba(52,211,153,.5)':C.ln,r:6});tx(A[j],PX[3]-72,y+16,{s:9.2,c:ea>=1?C.tx:C.mu});if(ea>=1)check(PX[3]+68,y+12,C.gr);cx.globalAlpha=gl;}});
      fade(t,4.1,.4,function(){box(PX[4]-80,PY+112,160,60,{fill:'rgba(52,211,153,.1)',stroke:C.gr,r:10});tx('case closed',PX[4],PY+136,{s:12,w:700,f:'d',a:'center',c:C.gr});tx('report attached',PX[4],PY+154,{s:9.5,a:'center',c:C.mu});});
      fade(t,.3,.5,function(){box(40,470,920,52,{fill:'rgba(13,21,54,.7)',stroke:C.ln,r:12});
        var pct=Math.round(100*ph(t,.2,4.2));tx('playbook progress',60,500,{s:10,c:C.mu});box(190,492,640,8,{fill:'rgba(160,180,230,.12)',r:4});box(190,492,640*pct/100,8,{fill:C.cy,r:4});tx(pct+'%',940,501,{s:12,w:700,a:'right',c:'#fff'});});
    }

    /* ---- scene 3 : UEBA entity risk ---- */
    var NB=[['LAP-114','host',-1.9],['file-srv-02','file server',-.95],['storage-prod','cloud',0],['vpn-gw','remote access',.95],['mail','email',1.9]];
    function riskAt(u){var b=18+4*Math.sin(u*3.1)+2*Math.sin(u*7.7);if(u>1.5&&u<3)b+=73*eo(cl((u-1.5)/.9,0,1));else if(u>=3)b+=73*(1-eo(cl((u-3)/1,0,1)));return cl(b,2,99);}
    function s3(t){
      fade(t,0,.5,function(){head('UEBA · ENTITY RISK · USER finance-07 · BASELINE 30 DAYS · SAMPLE');});
      var cxp=230,cyp=310,rk=riskAt(cl(t,0,4.8)),hot=rk>60;
      for(var i=0;i<5;i++){var an=NB[i][2],nx=cxp+Math.cos(an)*165,ny=cyp+Math.sin(an)*165*.95,na=eo(ph(t,.2+i*.1,.4));if(na<=0)continue;var g=cx.globalAlpha;cx.globalAlpha=g*na;
        var bad=hot&&(i===1||i===2);line(cxp,cyp,nx,ny,bad?'rgba(244,63,94,.7)':'rgba(160,180,230,.25)',bad?2:1.2,bad?[5,5]:[],bad?-t*30:0);
        if(bad){var u2=(t*.8+i*.3)%1;dot(cxp+(nx-cxp)*u2,cyp+(ny-cyp)*u2,2.6,C.rd,true);}
        box(nx-54,ny-20,108,40,{fill:C.pn,stroke:bad?'rgba(244,63,94,.6)':C.ln,r:10});tx(NB[i][0],nx,ny-2,{s:10.5,w:600,a:'center'});tx(NB[i][1],nx,ny+12,{s:8.8,a:'center',c:C.mu});
        cx.globalAlpha=g;}
      var rc=rk>60?C.rd:rk>35?C.am:C.gr;
      cx.fillStyle='rgba(124,58,237,.18)';cx.beginPath();cx.arc(cxp,cyp,44,0,6.283);cx.fill();
      cx.strokeStyle='rgba(160,180,230,.18)';cx.lineWidth=6;cx.beginPath();cx.arc(cxp,cyp,50,0,6.283);cx.stroke();
      cx.strokeStyle=rc;cx.beginPath();cx.arc(cxp,cyp,50,-1.57,-1.57+6.283*rk/100);cx.stroke();
      tx(String(Math.round(rk)),cxp,cyp+4,{s:24,w:800,f:'d',a:'center',c:'#fff'});tx('finance-07',cxp,cyp+20,{s:9,a:'center',c:C.mu});
      /* chart */
      var gx=500,gy=110,gw=440,gh=300;
      fade(t,.2,.5,function(){box(gx-24,gy-26,gw+48,gh+76,{fill:'rgba(13,21,54,.6)',stroke:C.ln,r:12});tx('risk score · last 24 h',gx,gy-6,{s:10,w:600,c:C.tx});
        for(var j=0;j<=4;j++){var yy=gy+gh-gh*j/4;line(gx,yy,gx+gw,yy,'rgba(160,180,230,.08)',1);tx(String(j*25),gx-6,yy+3,{s:8.8,c:C.mu,a:'right'});}
        cx.fillStyle='rgba(52,211,153,.07)';cx.fillRect(gx,gy+gh-gh*.32,gw,gh*.22);tx('baseline',gx+gw-4,gy+gh-gh*.32+12,{s:8.8,c:C.gr,a:'right'});
        line(gx,gy+gh-gh*.6,gx+gw,gy+gh-gh*.6,C.am,1.2,[5,5]);tx('case threshold 60',gx+gw-4,gy+gh-gh*.6-6,{s:8.8,c:C.am,a:'right'});});
      var N=90,hd=Math.min(N,Math.floor(cl(t/4.8,0,1)*N));
      if(hd>1){cx.lineWidth=2.4;cx.lineJoin='round';cx.strokeStyle=C.vi;cx.beginPath();
        for(var k=0;k<=hd;k++){var x=gx+gw*k/N,y=gy+gh-gh*riskAt(k/N*4.8)/100;if(k)cx.lineTo(x,y);else cx.moveTo(x,y);}cx.stroke();
        var hx=gx+gw*hd/N,hy=gy+gh-gh*riskAt(hd/N*4.8)/100;dot(hx,hy,4.5,rk>60?C.rd:C.vi,true);}
      if(t>3){var mx=gx+gw*(3/4.8);fade(t,3,.4,function(){line(mx,gy,mx,gy+gh,C.gr,1.4,[3,4]);box(mx+6,gy+6,104,22,{fill:'rgba(52,211,153,.15)',stroke:C.gr,r:11});tx('auto-contained',mx+58,gy+21,{s:9.5,w:600,a:'center',c:C.gr});});}
      if(t>1.9&&t<3.2){fade(t,1.9,.3,function(){box(gx+gw*(2.2/4.8)-70,gy+gh+12,170,22,{fill:'rgba(244,63,94,.14)',stroke:C.rd,r:11});tx('off-hours bulk download',gx+gw*(2.2/4.8)+15,gy+gh+27,{s:9.5,a:'center',c:C.rd});});}
    }

    /* ---- scene 4 : MITRE coverage heatmap + compliance report ---- */
    var TAS=['IA','EX','PE','PR','DE','CA','DI','LM','CO','C2','EF','IM'],CELL=[];seed=29;
    for(var c0=0;c0<12;c0++)for(var r0=0;r0<5;r0++)CELL.push({c:c0,r:r0,v:.35+rnd()*.65,on:rnd()<.8,d:c0*.14+r0*.05+rnd()*.2});
    function covAt(t){var n=0;for(var i=0;i<CELL.length;i++)if(CELL[i].on&&t>=.5+CELL[i].d)n++;return n;}
    function s4(t){
      fade(t,0,.5,function(){head('MITRE ATT&CK COVERAGE · 12 TACTICS × 5 TECHNIQUES · SAMPLE');});
      var gx=40,gy=104,cw=46,chh=58,gp=4;
      fade(t,.1,.4,function(){for(var c=0;c<12;c++)tx(TAS[c],gx+c*(cw+gp)+cw/2,gy-10,{s:9.5,w:600,a:'center',c:C.mu});});
      for(var i=0;i<CELL.length;i++){var e=CELL[i],x=gx+e.c*(cw+gp),y=gy+e.r*(chh+gp),lit=e.on?eo(ph(t,.5+e.d,.35)):0;
        box(x,y,cw,chh,{fill:'rgba(160,180,230,.06)',r:6});
        if(lit>0){var g=cx.globalAlpha;cx.globalAlpha=g*lit*(.35+.65*e.v);box(x,y,cw,chh,{fill:e.v>.75?C.vi2:C.cy2||'#0891B2',r:6});cx.globalAlpha=g;}
        if(lit>=1&&e.v>.75)dot(x+cw-8,y+8,2.2,'#fff');}
      var cv2=Math.round(covAt(t)/CELL.length*100);
      fade(t,.4,.5,function(){tx('coverage',gx,gy+5*(chh+gp)+24,{s:10,c:C.mu});tx(cv2+'%',gx+70,gy+5*(chh+gp)+26,{s:18,w:800,f:'d',c:'#fff'});
        box(gx+140,gy+5*(chh+gp)+14,250,8,{fill:'rgba(160,180,230,.12)',r:4});box(gx+140,gy+5*(chh+gp)+14,250*cv2/100,8,{fill:C.cy,r:4});
        var ly2=gy+5*(chh+gp)+14;box(gx+410,ly2,10,10,{fill:'#0891B2',r:2});tx('mapped',gx+426,ly2+9,{s:9,c:C.mu});box(gx+490,ly2,10,10,{fill:C.vi2,r:2});tx('high-confidence',gx+506,ly2+9,{s:9,c:C.mu});});
      /* report doc */
      fade(t,2.2,.7,function(e){var x=660,y=96+(1-e)*50;
        box(x,y,300,400,{fill:'#F4F7FD',r:12});box(x,y,300,52,{fill:'#1B2050',r:12});cx.fillStyle='#1B2050';cx.fillRect(x,y+30,300,22);
        tx('MONTHLY COMPLIANCE PACK',x+18,y+24,{s:10.5,w:700,c:'#fff'});tx('Vortex SOC · generated · sample',x+18,y+40,{s:9,c:'#a9b3e6'});
        var L=[['CERT-In · incident log & timeline','6-hour window'],['CERT-In · 180-day log retention','in India'],['DPDP Act · breach register','up to date'],['RBI / SEBI CSCRF · SOC metrics','attached'],['ATT&CK coverage · gaps & fixes','3 new rules']];
        for(var j=0;j<5;j++){var la=ph(t,2.7+j*.3,.3),yy=y+82+j*54;var g=cx.globalAlpha;cx.globalAlpha=g*eo(la);
          box(x+16,yy,268,42,{fill:'#fff',stroke:'#dde3f1',r:8});tx(L[j][0],x+30,yy+18,{s:10,w:600,c:'#0B1232'});tx(L[j][1],x+30,yy+33,{s:9,c:'#5b6788'});
          if(la>=1){cx.fillStyle='rgba(52,211,153,.18)';cx.beginPath();cx.arc(x+262,yy+21,10,0,6.283);cx.fill();check(x+262,yy+21,'#0f9a6a');}
          cx.globalAlpha=g;}
        if(t>4.3){var sa=eo(ph(t,4.3,.4)),g2=cx.globalAlpha;cx.globalAlpha=g2*sa;cx.save();cx.translate(x+210,y+372);cx.rotate(-.12);box(-62,-16,124,30,{stroke:C.vi2,lw:2,r:6});tx('SENT · CISO',0,4,{s:11,w:700,a:'center',c:C.vi2});cx.restore();cx.globalAlpha=g2;}
      });
    }
    var SC=[s0,s1,s2,s3,s4];
    var TITLES=['01 · Telemetry → data lake','02 · Correlation · 40 → 1','03 · SOAR playbook','04 · UEBA entity risk','05 · ATT&CK coverage + report'];
    /* floating cards & log per scene */
    var F=[[$('#vsF0'),$('#vsF0s')],[$('#vsF1'),$('#vsF1s')],[$('#vsF2'),$('#vsF2s')],[$('#vsF3'),$('#vsF3s')]],FC=$$('#vsFc .vs-fc');
    var FD=[['EPS · 12,480','events / sec · sample'],['Case #2481 · P1','40 alerts → 1 case'],['Playbook · auto-contain','approval gate on'],['MTTR ↓','target · with automation']];
    var FS=[
      {hot:[0],f:function(t){return {0:['EPS · '+fmt(epsAt(t)),'events / sec · sample']};}},
      {hot:[1],f:function(t){return {1:['Case #2481 · P1',t>=3.4?'40 alerts → 1 case':alertsLeft(t)+' alerts · correlating']};}},
      {hot:[2,3],f:function(t){var s=pbStep(t),g=gateState(t);return {2:['Playbook · auto-contain',t>=4?'case closed · sample':s===3?'containing…':g===1?'awaiting approval':g===2?'approved':'enriching…'],3:['MTTR ↓','minutes, not hours · target']};}},
      {hot:[1],f:function(t){return {1:['Case #2481 · P1','UEBA risk '+Math.round(riskAt(cl(t,0,4.8)))+' · finance-07']};}},
      {hot:[3],f:function(t){return {3:['MTTR ↓','coverage '+Math.round(covAt(t)/60*100)+'% · report sent']};}}];
    var LOG=[
      [[.3,'i','INGEST','5 source families connected · sample'],[1,'i','NORMALISE','common schema applied to all events'],[2,'ok','EPS','12,480 events / sec · steady (sample)'],[2.9,'v','RETAIN','hot 30 d · warm 180 d · archive 1 yr']],
      [[.6,'w','RULE','risky sign-in · finance-07 (sample)'],[1.4,'v','UEBA','risk +32 · unusual data access'],[2.4,'i','CORRELATE','40 alerts → Case #2481'],[3.6,'r','CASE #2481','P1 · owner SOC shift B (sample)']],
      [[.3,'i','PLAYBOOK','auto-contain started · Case #2481'],[1,'i','ENRICH','threat intel · asset · user history'],[2.6,'ok','GATE','analyst approval received'],[3.5,'ok','CONTAIN','host isolated · account disabled (sample)'],[4.2,'ok','CASE #2481','auto-contained · closed (sample)']],
      [[.4,'i','BASELINE','30 days · finance-07'],[1.9,'r','ANOMALY','off-hours bulk download (sample)'],[2.5,'w','RISK','91 · above case threshold'],[3.2,'ok','CONTAIN','sessions revoked · risk back to baseline']],
      [[.5,'i','COVERAGE','ATT&CK techniques mapped (sample)'],[1.8,'w','GAP','3 rules suggested · detection eng.'],[3,'ok','REPORT','CERT-In incident pack generated'],[4.4,'ok','SENT','monthly compliance pack (sample)']]];
    var cur=0,prev=-1,st=0,pst=0,tr=1,hold=false,DUR=5.5,logi=0,fT=0,clkT=0,mx=0,my=0,tmx=0,tmy=0;
    var dots=$$('#vsDots button'),logEl=$('#vsLog'),titleEl=$('#vsTitle');
    function setF(t){var s=FS[cur],o=s.f(t);for(var i=0;i<4;i++){var v=o[i]||FD[i];if(F[i][0].textContent!==v[0])F[i][0].textContent=v[0];if(F[i][1].textContent!==v[1])F[i][1].textContent=v[1];}}
    function setHot(){FC.forEach(function(c,i){c.classList.toggle('hot',FS[cur].hot.indexOf(i)>=0);});}
    function pushLog(e){var li=d.createElement('li');li.className=e[1];li.innerHTML='<b>'+e[2]+'</b>'+e[3];logEl.appendChild(li);while(logEl.children.length>3)logEl.removeChild(logEl.firstChild);}
    function go(n,user){n=(n+5)%5;if(n===cur&&!user)return;if(n!==cur){prev=cur;pst=st;tr=0;}cur=n;st=0;logi=0;
      dots.forEach(function(b,i){b.classList.toggle('on',i===cur);b.setAttribute('aria-selected',i===cur);$('i',b).style.transform='scaleX(0)';});
      titleEl.textContent=TITLES[cur];setHot();
      if(R){st=6;tr=1;prev=-1;logEl.innerHTML='';LOG[cur].forEach(pushLog);setF(6);paint();}}
    function scene(i,t,al,s){if(al<=0)return;var c=cam(i,t);cx.save();cx.globalAlpha=al;cx.translate(VW/2+mx,LH/2+my);cx.scale(s,s);cx.translate(-c[0],-c[1]);SC[i](t);cx.restore();}
    function paint(){if(!W)return;cx.setTransform(dpr*K,0,0,dpr*K,0,0);cx.clearRect(0,0,VW,LH);
      if(tr<1&&prev>=0){var e=eio(tr);scene(prev,pst,1-e,1+.07*e);scene(cur,st,e,.93+.07*e);}else scene(cur,st,1,1);}
    function clock(){var s;try{s=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata',hour12:false});}catch(e){s=new Date().toTimeString().slice(0,8);}$('#vsClk').textContent=s;}
    var hero=ticker(function(dt,now){
      st+=dt;if(tr<1){tr=Math.min(1,tr+dt/.9);pst+=dt;}
      mx+=(tmx-mx)*.08;my+=(tmy-my)*.08;
      while(logi<LOG[cur].length&&st>=LOG[cur][logi][0]){pushLog(LOG[cur][logi]);logi++;}
      if(now-fT>120){fT=now;setF(st);}
      if(now-clkT>1000){clkT=now;clock();}
      $('i',dots[cur]).style.transform='scaleX('+cl(st/DUR,0,1)+')';
      paint();
      if(!hold&&st>=DUR)go(cur+1);
    });
    size();clock();setHot();
    dots.forEach(function(b,i){b.addEventListener('click',function(){go(i,true);});});
    mon.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse'){hold=true;mon.classList.add('hold');}});
    mon.addEventListener('pointerleave',function(){hold=false;mon.classList.remove('hold');tmx=tmy=0;});
    if(XH.fine&&!R)scr.addEventListener('pointermove',function(e){var r=scr.getBoundingClientRect();tmx=((e.clientX-r.left)/r.width-.5)*-16;tmy=((e.clientY-r.top)/r.height-.5)*-10;});
    var sx=null,sy=0;
    scr.addEventListener('pointerdown',function(e){sx=e.clientX;sy=e.clientY;});
    scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))go(cur+(dx<0?1:-1),true);});
    scr.addEventListener('pointercancel',function(){sx=null;});
    addEventListener('resize',function(){size();if(R)paint();});
    if(R){st=6;LOG[0].forEach(pushLog);setF(6);paint();if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){size();paint();});}
    else{bindVis(hero,mon);if(d.fonts&&d.fonts.ready)d.fonts.ready.then(size);}
  }


  /* Keep navigation and the maturity summary tied to the outer viewport. */
  (function(){
    var sub=$('#vsSub'),links=$$('#vsSub a'),sections=links.map(function(a){return $(a.getAttribute('href'));}),current=-1,queued=false;
    var panel=$('.vs-mto'),group=panel&&panel.parentElement;
    function update(){
      queued=false;var embedded=window.frameElement,offset=embedded?embedded.getBoundingClientRect().top:0;
      var y=embedded?110:sub.getBoundingClientRect().bottom+30,index=-1;
      sections.forEach(function(section,i){if(section&&section.getBoundingClientRect().top+offset<=y)index=i;});
      if(index!==current){current=index;links.forEach(function(a,i){a.classList.toggle('on',i===index);if(i===index)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
        var active=links[index];if(active&&active.parentNode.scrollWidth>active.parentNode.clientWidth)active.parentNode.scrollTo({left:active.offsetLeft-40,behavior:R?'auto':'smooth'});
      }
      if(panel&&embedded){
        var shift=innerWidth>980?cl(140-offset-group.getBoundingClientRect().top,0,Math.max(0,group.offsetHeight-panel.offsetHeight)):0;
        panel.style.transform='translate3d(0,'+shift.toFixed(1)+'px,0)';
      }
    }
    function schedule(){if(!queued){queued=true;requestAnimationFrame(update);}}
    addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);update();
  })();
  /* ---------- pillars · key caps (auto-cycles until touched) ---------- */
  var keys=$$('#vsKeys .vs-kc button'),kps=$$('#vsKp>div'),kCur=0,kUser=false,kT=0;
  function kSet(i){kCur=i;keys.forEach(function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-selected',j===i);});kps.forEach(function(p,j){p.classList.toggle('on',j===i);});}
  keys.forEach(function(b,i){b.addEventListener('click',function(){kUser=true;kSet(i);});});
  if(keys.length&&!R){var kTick=ticker(function(dt){if(kUser)return;kT+=dt;if(kT>5.2){kT=0;kSet((kCur+1)%4);}});bindVis(kTick,$('#vsKeys'),function(){return !kUser;});}

  /* ---------- capability filter ---------- */
  $$('#vsFlt button').forEach(function(b){b.addEventListener('click',function(){var f=b.getAttribute('data-f');
    $$('#vsFlt button').forEach(function(x){x.classList.toggle('on',x===b);});
    $$('#vsCaps article').forEach(function(a){a.classList.toggle('off',f!=='all'&&a.getAttribute('data-f')!==f);});});});

  /* ---------- workflow · travelling case ---------- */
  var wf=$('#vsWf'),wl=$('.vs-wl',wf),cs=$('#vsCase'),bar=$('#vsWfBar'),wli=$$('#vsWs li'),csS=$('#vsCaseS'),csR=$('#vsCaseR');
  var WS=[['New alert','risk 42'],['Investigating','risk 87'],['Contained','risk 35'],['Documented','evidence 6'],['Closed · rule tuned','risk 12']];
  var wT=0,wSt=-1,wW=0;
  function wSize(){wW=wl?wl.clientWidth:0;}
  function wStep(i){if(i===wSt)return;wSt=i;wli.forEach(function(li,j){li.classList.toggle('on',j===i);li.classList.toggle('dn',j<i);});csS.textContent=WS[i][0];csR.textContent=WS[i][1];}
  function wPaint(){var cyc=wT%11,seg=Math.min(4,Math.floor(cyc/2)),f=cyc-seg*2,p;
    if(cyc>=10){p=1;wStep(4);}else{var mv=seg<4&&f>1.5?eio((f-1.5)/.5):0;p=(seg+mv)/4;wStep(seg+(mv>.5?1:0));}
    if(wW){cs.style.transform='translateX('+(p*wW)+'px)';bar.style.transform='scaleX('+p+')';}}
  if(wf){wSize();addEventListener('resize',wSize);
    if(R){wStep(4);if(wW){cs.style.transform='translateX('+wW+'px)';bar.style.transform='none';}}
    else{var wTick=ticker(function(dt){wT+=dt;wPaint();});bindVis(wTick,wf);}}

  /* ---------- MITRE ATT&CK matrix ---------- */
  var TA=[
    ['TA0001','Initial Access',[['T1566.001','Spearphishing Attachment'],['T1566.002','Spearphishing Link'],['T1190','Exploit Public-Facing Application'],['T1133','External Remote Services'],['T1078','Valid Accounts']],
      ['Email gateway, web proxy, identity sign-ins, VPN and internet-facing application logs.','Rules and threat-intel matches on delivery and first access, scored against each user\'s and asset\'s baseline.','One timeline from first contact to first sign-in or host activity, with affected users and assets linked.','Quarantine the message, block the sender or source at the gateway, reset credentials and raise an ITSM ticket.']],
    ['TA0002','Execution',[['T1059.001','PowerShell'],['T1059','Command and Scripting Interpreter'],['T1203','Exploitation for Client Execution'],['T1047','Windows Management Instrumentation'],['T1053.005','Scheduled Task']],
      ['Endpoint telemetry via Scrutiny EDR or your EDR, server logs and script / job audit logs.','Behavioural rules flag execution that is unusual for the host, correlated with the user and how the host was reached.','Host timeline and parent-child activity in one view, with the triggering case and entity risk.','Isolate the host through the endpoint bridge, stop the activity and collect evidence for the case.']],
    ['TA0003','Persistence',[['T1547.001','Registry Run Keys / Startup Folder'],['T1053','Scheduled Task/Job'],['T1136','Create Account'],['T1098','Account Manipulation'],['T1574','Hijack Execution Flow']],
      ['Endpoint and server change telemetry, directory audit logs and cloud IAM logs.','Change-monitoring and sequence rules flag new start-up items, accounts or jobs outside approved change windows.','Compare the change with approved change records and the entity\'s history.','Revert or disable the change, disable the account and open a change-review task.']],
    ['TA0004','Privilege Escalation',[['T1068','Exploitation for Privilege Escalation'],['T1134','Access Token Manipulation'],['T1548','Abuse Elevation Control Mechanism'],['T1574','Hijack Execution Flow'],['T1055','Process Injection']],
      ['Directory and privileged-access logs, endpoint telemetry and cloud IAM.','Privilege-change rules plus UEBA spikes when an account gains or uses rights it never used before.','Who gained what, when and from where — on one entity timeline.','Remove the added privilege, force re-authentication and notify the asset owner.']],
    ['TA0005','Defense Evasion',[['T1027','Obfuscated Files or Information'],['T1070','Indicator Removal'],['T1112','Modify Registry'],['T1036','Masquerading'],['T1218','System Binary Proxy Execution']],
      ['Endpoint health, log-pipeline health and configuration-change telemetry.','Alerts when logging stops, security tools change state or files look tampered — missing data is a signal too.','Gap analysis on the timeline shows what went quiet and when.','Restore logging or the agent, isolate the host and escalate to an analyst.']],
    ['TA0006','Credential Access',[['T1003','OS Credential Dumping'],['T1555','Credentials from Password Stores'],['T1110','Brute Force'],['T1056','Input Capture'],['T1556','Modify Authentication Process']],
      ['Identity sign-ins, MFA logs, endpoint telemetry and password-vault audit logs.','Threshold and anomaly rules on failed sign-ins, MFA prompts and access to credential stores.','Which accounts were targeted, from where, and whether any sign-in succeeded afterwards.','Lock or reset affected accounts, revoke sessions and enforce MFA.']],
    ['TA0007','Discovery',[['T1082','System Information Discovery'],['T1083','File and Directory Discovery'],['T1057','Process Discovery'],['T1046','Network Service Discovery'],['T1018','Remote System Discovery']],
      ['Network flow metadata (NBAD), endpoint telemetry and directory query logs.','NBAD spots unusual fan-out across the network; UEBA flags accounts enumerating far beyond their norm.','The source host and account, with everything they touched in the same window.','Contain the source host, raise the account\'s risk and start a threat hunt.']],
    ['TA0008','Lateral Movement',[['T1021','Remote Services'],['T1570','Lateral Tool Transfer'],['T1550','Use Alternate Authentication Material'],['T1210','Exploitation of Remote Services'],['T1534','Internal Spearphishing']],
      ['Remote-access logs, east-west traffic (NBAD), identity and endpoint telemetry.','Sequence rules link a sign-in on one host to new remote sessions on others.','Hop-by-hop path across hosts on one map, with the account used at each step.','Isolate the hosts in the path, disable the account and block internal paths at the firewall.']],
    ['TA0009','Collection',[['T1005','Data from Local System'],['T1113','Screen Capture'],['T1115','Clipboard Data'],['T1560','Archive Collected Data'],['T1074','Data Staged']],
      ['File-server and SaaS audit logs, DLP events from Scrutiny DLP and endpoint telemetry.','UEBA on data-access volume and unusual staging, correlated with endpoint and DLP alerts.','What data was touched, by whom, and whether it moved — sized for a DPDP assessment.','Suspend the session, isolate the host and preserve evidence for HR or legal.']],
    ['TA0011','Command and Control',[['T1071','Application Layer Protocol'],['T1095','Non-Application Layer Protocol'],['T1573','Encrypted Channel'],['T1105','Ingress Tool Transfer'],['T1001','Data Obfuscation']],
      ['DNS, proxy, firewall, NBAD and threat-intelligence feeds.','Beaconing analytics and intel matches on outbound traffic, scored by asset value.','All hosts talking to the same destination, and since when.','Block the destination at firewall and DNS, isolate hosts and add the indicator to watch lists.']],
    ['TA0010','Exfiltration',[['T1041','Exfiltration Over C2 Channel'],['T1048','Exfiltration Over Alternative Protocol'],['T1567','Exfiltration Over Web Service'],['T1020','Automated Exfiltration'],['T1030','Data Transfer Size Limits']],
      ['Firewall, proxy, cloud-storage logs, DLP and NBAD.','Volume anomalies on outbound and cloud-upload traffic, correlated with what was collected earlier.','How much left, where it went and which records — for DPDP and CERT-In reporting.','Block the channel, revoke cloud sessions and start the breach-assessment playbook.']],
    ['TA0040','Impact',[['T1486','Data Encrypted for Impact'],['T1490','Inhibit System Recovery'],['T1489','Service Stop'],['T1499','Endpoint Denial of Service'],['T1565','Data Manipulation']],
      ['Endpoint and file-share telemetry, backup logs, service health and APM.','Rapid file-change and service-stop patterns, backup-deletion attempts and availability anomalies.','Blast radius across hosts, shares and services on one timeline.','Isolate hosts at scale, protect backups, run the ransomware playbook and start CERT-In reporting.']]];
  var mxG=$('#vsMxG'),mxT=$('#vsMxT'),mxD=$('#vsMxD'),mSel=[0,0],mUser=false;
  if(mxG){
    var gh='',th='';
    TA.forEach(function(t,ci){gh+='<div class="th" data-c="'+ci+'"><b>'+t[1]+'</b><small>'+t[0]+'</small></div>';
      t[2].forEach(function(q,ri){gh+='<button type="button" class="tc" data-c="'+ci+'" data-r="'+ri+'"><small>'+q[0]+'</small>'+q[1]+'</button>';});
      th+='<button type="button" role="tab" data-c="'+ci+'">'+t[1]+'<small>'+t[0]+'</small></button>';});
    mxG.innerHTML=gh;mxT.innerHTML=th;
    var cells=$$('.tc',mxG),heads=$$('.th',mxG),tabs=$$('button',mxT);
    function mShow(c,r,pulse){mSel=[c,r];var t=TA[c],q=t[2][r];
      cells.forEach(function(b){var bc=+b.getAttribute('data-c'),br=+b.getAttribute('data-r');b.classList.toggle('on',bc===c&&br===r);b.classList.toggle('col',bc===c&&br!==r);b.classList.toggle('x',bc===c);});
      heads.forEach(function(h){var hc=+h.getAttribute('data-c');h.classList.toggle('on',hc===c);h.classList.toggle('x',hc===c);});
      tabs.forEach(function(b){b.classList.toggle('on',+b.getAttribute('data-c')===c);});
      if(pulse){var pc=cells[c*5+r];pc.classList.remove('pulse');void pc.offsetWidth;pc.classList.add('pulse');}
      mxD.innerHTML='<div class="id"><small>'+q[0]+' · '+t[1]+' ('+t[0]+')</small><h3>'+q[1]+'</h3><p>How Vortex SOC handles this technique — the defensive view.</p><span class="tg"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>ATT&amp;CK-mapped rule library</span></div>'+
        '<div class="fl"><div><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>Correlate</span><p>'+t[3][0]+'</p></div><div><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>Detect</span><p>'+t[3][1]+'</p></div><div><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Investigate</span><p>'+t[3][2]+'</p></div><div><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Respond</span><p>'+t[3][3]+'</p></div></div>'+
        '<p class="sum">Vortex SOC correlates endpoint, identity, cloud, network, application and log telemetry, raises entity risk, opens a case with evidence and triggers response actions for containment and reporting.</p>';}
    mxG.addEventListener('click',function(e){var b=e.target.closest('.tc');if(!b)return;mUser=true;mShow(+b.getAttribute('data-c'),+b.getAttribute('data-r'));});
    mxT.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;mUser=true;mShow(+b.getAttribute('data-c'),0);b.scrollIntoView&&mxT.scrollTo({left:b.offsetLeft-20,behavior:'smooth'});});
    mShow(0,0);
    /* idle demo: walks the matrix until the visitor picks something */
    if(!R){var mT=0,mk=0,mTick=ticker(function(dt){if(mUser)return;mT+=dt;if(mT>3.6){mT=0;mk=(mk+7)%60;mShow(Math.floor(mk/5),mk%5,true);}});bindVis(mTick,mxG,function(){return !mUser;});}
  }

  /* ---------- screenshot tour ---------- */
  var tourU=['vortex-soc · overview','vortex-soc · cases / #2481','vortex-soc · playbooks / auto-contain','vortex-soc · hunt'];
  $$('#vsTour .vs-tt button').forEach(function(b,i){b.addEventListener('click',function(){$$('#vsTour .vs-tt button').forEach(function(x){x.classList.toggle('on',x===b);});$$('#vsTour .vs-tp').forEach(function(p,j){p.classList.toggle('on',j===i);});$('#vsTourU').textContent=tourU[i];});});

  /* ---------- SOC sizing estimator ---------- */
  var ZK=[['zU','Users',.012,'#22D3EE'],['zE','Endpoints',.025,'#0891B2'],['zS','Servers & VMs',.6,'#A78BFA'],['zN','Network',2.5,'#7C3AED'],['zC','Cloud',1.8,'#FBBF24'],['zA','Other',.6,'#34D399']];
  var EPSK=16.5,zGB=0;
  function band(g){var B=[[0,10],[10,25],[25,50],[50,100],[100,250],[250,500],[500,1000],[1000,5000]];for(var i=0;i<B.length;i++)if(g<B[i][1])return B[i];return [5000,10000];}
  function zCalc(){var tot=0,parts=[];ZK.forEach(function(k){var v=+$('#'+k[0]).value;$('#'+k[0]+'L').textContent=fmt(v);var g=v*k[2];parts.push(g);tot+=g;});
    zGB=tot;$('#zGB').textContent=tot<10?tot.toFixed(1):fmt(tot);
    var eps=tot*EPSK;$('#zEPS').textContent=fmt(Math.floor(eps*.8/50)*50)+'–'+fmt(Math.ceil(eps*1.25/50)*50);
    var b=band(tot);$('#zBand').textContent=b[0]+'–'+fmt(b[1])+' GB/d';
    var tb=tot*180/5/1000;$('#zSt').textContent=tb<1?Math.round(tb*1000)+' GB':tb.toFixed(1)+' TB';
    var fr=Math.log10(tot+1)/Math.log10(1001);$('#zArc').style.strokeDashoffset=String(100-cl(fr,0,1)*100);$('#zArc').style.stroke=tot>250?'#A78BFA':'#22D3EE';
    $('#zMix').innerHTML=parts.map(function(p,i){return '<i style="width:'+(tot?p/tot*100:0).toFixed(1)+'%;background:'+ZK[i][3]+'"></i>';}).join('');
    var lg=$('#zMixL');if(!lg){lg=d.createElement('div');lg.className='vs-mixl';lg.id='zMixL';$('#zMix').after(lg);}
    lg.innerHTML=parts.map(function(p,i){return '<span style="--c:'+ZK[i][3]+'">'+ZK[i][1]+' '+(tot?Math.round(p/tot*100):0)+'%</span>';}).join('');}
  ZK.forEach(function(k){var el=$('#'+k[0]);if(el)el.addEventListener('input',zCalc);});
  if($('#zU'))zCalc();

  /* ---------- alert-fatigue calculator ---------- */
  function fCalc(){var A=+$('#fA').value,P=+$('#fP').value/100,M=+$('#fM').value,Rr=+$('#fR').value/100;
    $('#fAL').textContent=fmt(A);$('#fPL').textContent=Math.round(P*100)+'%';$('#fML').textContent=M+' min';$('#fRL').textContent=Math.round(Rr*100)+'%';
    var now=A*M/60,nw=now*(1-Rr),saved=(now-nw)*30,waste=A*P*M/60*30;
    $('#fNowV').textContent=(now<10?now.toFixed(1):fmt(now))+' h/day';$('#fNewV').textContent=(nw<10?nw.toFixed(1):fmt(nw))+' h/day';
    $('#fNow').style.transform='scaleX(1)';$('#fNew').style.transform='scaleX('+(now?nw/now:0)+')';
    $('#fSaved').textContent=fmt(saved);$('#fFte').textContent=(saved/160).toFixed(1);$('#fWaste').textContent=fmt(waste);}
  ['fA','fP','fM','fR'].forEach(function(k){var el=$('#'+k);if(el)el.addEventListener('input',fCalc);});
  if($('#fA'))fCalc();

  /* ---------- SOC maturity score ---------- */
  var MQ=[['Do you collect logs from endpoints, servers, network, cloud and identity in one place?','Centralise endpoint, server, network, cloud and identity logs into one data lake.'],
    ['Are logs kept for at least 180 days, in India?','Set 180-day retention in India to meet the CERT-In directions.'],
    ['Is someone watching alerts 24×7, including nights and weekends?','Cover nights and weekends — co-managed SOC is the quickest route.'],
    ['Are detections mapped to MITRE ATT&CK and reviewed regularly?','Map detections to ATT&CK and review gaps every quarter.'],
    ['Do you have written playbooks for phishing, ransomware and account takeover?','Write playbooks for your top three incident types.'],
    ['Is any of your response automated — enrichment, containment or ticketing?','Automate enrichment and ticketing first; containment with approval gates next.'],
    ['Could you file a CERT-In incident report within 6 hours today?','Rehearse a CERT-In 6-hour report with a tabletop exercise.'],
    ['Do you hunt proactively and hold post-incident reviews?','Start a monthly threat hunt and a short review after every P1.']];
  var mtQ=$('#mtQ'),ans=[];
  if(mtQ){mtQ.innerHTML=MQ.map(function(q,i){ans.push(0);return '<div class="q" data-i="'+i+'"><span>0'+(i+1)+'</span><p>'+q[0]+'</p><div class="seg" data-q="'+i+'"><button data-v="2">Yes</button><button data-v="1">Partly</button><button data-v="0">No</button></div></div>';}).join('');
    var LV=[[25,'Level 1 · Initial'],[45,'Level 2 · Developing'],[65,'Level 3 · Defined'],[85,'Level 4 · Managed'],[101,'Level 5 · Optimised']];
    function mtCalc(){var s=0,recs=[];ans.forEach(function(a,i){s+=a*6.25;if(a<2)recs.push(MQ[i][1]);});s=Math.round(s);
      $('#mtS').textContent=s;$('#mtArc').style.strokeDashoffset=String(100-s);$('#mtArc').style.stroke=s>=65?'#22D3EE':'#A78BFA';
      for(var i=0;i<LV.length;i++)if(s<LV[i][0]){$('#mtL').textContent=LV[i][1];break;}
      $('#mtR').innerHTML=(recs.length?recs.slice(0,3):['Strong position — consider an independent review, or co-managed overflow for peak load.']).map(function(r){return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>'+r+'</span></li>';}).join('');}
    mtQ.addEventListener('change',function(e){var sg=e.target.closest('.seg');if(!sg)return;var i=+sg.getAttribute('data-q');ans[i]=+sg.dataset.value;sg.parentNode.classList.add('a');mtCalc();});
    mtCalc();}

  /* ---------- deployment tabs + topology ---------- */
  var DPT=[['Local console','HA pair','Central mgmt','multi-site',false],['Your tenancy','private cloud','XcellHost SOC','optional 24×7',false],['Central console','one view','Cloud storage','long-term tier',false],['Isolated console','no internet','Update mirror','offline · signed',true]];
  $$('#vsDp .vs-dpt button').forEach(function(b,i){b.addEventListener('click',function(){$$('#vsDp .vs-dpt button').forEach(function(x){x.classList.toggle('on',x===b);});$$('#vsDpp>div').forEach(function(p,j){p.classList.toggle('on',j===i);});
    var m=DPT[i];$('#vsTopoC').textContent=m[0];$('#vsTopoS').textContent=m[1];$('#vsTopoE').textContent=m[2];$('#vsTopoES').textContent=m[3];$('#vsTopo').classList.toggle('air',m[4]);});});
  (function(){var m=DPT[0];$('#vsTopoE').textContent=m[2];$('#vsTopoES').textContent=m[3];})();

  /* ---------- configurator → quotation ---------- */
  var cUnit=$('#cUnit'),cVol=$('#cVol'),cRet=$('#cRet'),cDep=$('#cDep'),cSvc=$('#cSvc');
  var RET=['Hot 30 d · warm 150 d','Hot 30 d · warm 180 d · archive 1 yr','Hot 90 d · warm 365 d · archive 3 yr'];
  var DEP={cloud:'Cloud (XcellHost India)',onprem:'On-premise',private:'Private cloud (your tenancy)',hybrid:'Hybrid',air:'Air-gapped'};
  var SVC={lic:'Licence only (self-run)',co:'Co-managed SOC',mg:'Fully managed SOC 24×7'};
  function unit(){return cUnit.dataset.value||'gb';}
  function volGB(){var v=+cVol.value||0;return unit()==='gb'?v:v/EPSK;}
  function cfg(){var u=unit(),v=+cVol.value||0,g=volGB();
    cVol.step=u==='gb'?5:100;$('#cUnitL').textContent=u==='gb'?'GB per day':'events per second';
    $('#cVolL').textContent=fmt(v)+(u==='gb'?' GB / day':' EPS');$('#cVolH').textContent=u==='gb'?'≈ '+fmt(v*EPSK)+' EPS':'≈ '+(g<10?g.toFixed(1):fmt(g))+' GB / day';
    var src=+$('#cSrc').value,ep=+$('#cEp').value;$('#cSrcL').textContent=fmt(src);$('#cEpL').textContent=fmt(ep);
    var rt=RET[+cRet.dataset.value||0],dp=DEP[cDep.dataset.value]||'',sv=SVC[cSvc.dataset.value]||'',trial=$('#cTrial').checked;
    $('#cRetL').textContent=rt;$('#cDepL').textContent=dp;$('#cSvcL').textContent=SVC[cSvc.dataset.value].replace(' (self-run)','');
    var b=band(g),rows=[['Log volume',(u==='gb'?fmt(v)+' GB/day':fmt(v)+' EPS')],['Sizing band',b[0]+'–'+fmt(b[1])+' GB/day'],['Log sources',fmt(src)],['Endpoints',fmt(ep)],['Retention',rt],['Deployment',dp],['Service model',sv],['Free trial / PoV*',trial?'Requested':'Not requested'],['Price','On quote']];
    $('#oRows').innerHTML=rows.map(function(r){return '<div class="crow"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>';}).join('');
    var sum=rows.slice(0,8).map(function(r){return r[0]+': '+r[1];}).join(' · ');$('#qS').value=sum;$('#qSum').textContent=sum;}
  if(cVol){
    cUnit.addEventListener('change',function(){var u=unit(),v=+cVol.value||0;cVol.max=u==='gb'?100000:2000000;cVol.value=u==='eps'?Math.round(v*EPSK/100)*100:Math.max(1,Math.round(v/EPSK));cfg();});
    [cVol,$('#cSrc'),$('#cEp'),$('#cTrial')].forEach(function(el){el.addEventListener('input',cfg);el.addEventListener('change',cfg);});
    [cRet,cDep,cSvc].forEach(function(s){s.addEventListener('change',cfg);});
    $$('[data-pick]').forEach(function(a){a.addEventListener('click',function(){setSeg(cSvc,a.getAttribute('data-pick'));});});
    $('#zUse').addEventListener('click',function(){setSeg(cUnit,'gb');cVol.value=Math.max(1,Math.round(zGB));
      var src=+$('#zS').value+ +$('#zN').value+ +$('#zC').value+ +$('#zA').value+3,sr=$('#cSrc');sr.value=cl(Math.round(src/5)*5,5,1000);XH.fillRange(sr);
      var ce=$('#cEp');ce.value=cl(+$('#zE').value,0,10000);XH.fillRange(ce);cfg();
      var t=$('#configure');scrollTo({top:t.getBoundingClientRect().top+scrollY-130,behavior:R?'auto':'smooth'});setTimeout(function(){XH.flash&&XH.flash($('#configure .cout'));},500);XH.toast('Estimate copied to the configurator');});
    $('#oQuote').addEventListener('click',function(){cfg();var f=$('#vsQf');f.hidden=false;window.scrollTo({top:f.getBoundingClientRect().top+scrollY-130,behavior:R?'auto':'smooth'});setTimeout(function(){var n=$('#qN');n&&n.focus({preventScroll:true});},450);});
    cfg();}
})();


