/* Imported from managed-aws.html; shared chrome uses the Angular shell. */
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
  XH.open=function(id,opts){d.dispatchEvent(new CustomEvent('import-callback',{detail:opts&&opts.topic||'Managed AWS Services'}));};
  XH.cart={add:function(item){d.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};
  XH.toast=function(message){var toast=$('#awsToast');toast.textContent=message;toast.hidden=false;clearTimeout(XH.toastTimer);XH.toastTimer=setTimeout(function(){toast.hidden=true;},3000);};
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

/* Managed AWS · control-room page runtime (one rAF loop for every animation) */
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,d=document;
  var PR={ess:14999,pro:39999,asmt:49999,lz:149999,spm:9999,fin:7999,xres:999,xenv:4999,pmin:14999,pct:.08};
  $$('[data-pr]').forEach(function(e){var k=e.getAttribute('data-pr');if(PR[k])e.textContent=XH.inr(PR[k]);});
  function cl(v,a,b){return v<a?a:v>b?b:v;}
  function ph(t,s,du){return cl((t-s)/du,0,1);}
  function eo(x){return 1-Math.pow(1-x,3);}
  function eio(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}
  function lakh(n){return '₹'+n.toFixed(1)+' L';}

  /* ---------- one shared rAF loop ---------- */
  var T=[],raf=0,last=0;
  function ticker(fn){var o={on:false,fn:fn};T.push(o);return o;}
  function frame(now){raf=0;var dt=last?Math.min(.1,(now-last)/1000):.016;last=now;var any=false;
    for(var i=0;i<T.length;i++){if(T[i].on){any=true;T[i].fn(dt,now);}}
    if(any)raf=requestAnimationFrame(frame);else last=0;}
  function wake(){if(!raf&&!R)raf=requestAnimationFrame(frame);}
  function bindVis(o,el,extra){XH.whenVisible(el,function(v){o.vis=v;o.on=v&&(!extra||extra());if(o.on)wake();});}

  /* =====================================================================
     HERO · rotating live-scene wall
     ===================================================================== */
  var wall=$('#maWall'),scr=$('#maScr'),cv=$('#maCv');
  if(wall&&cv){
    var cx=cv.getContext('2d'),W=0,H=0,K=1,LH=470,dpr=Math.min(2,window.devicePixelRatio||1);
    var C={amb:'#FFB547',amb2:'#FF9F1C',bl:'#4D94FF',gr:'#34D399',rd:'#F25F5C',tx:'#E6EDF7',mu:'#8794AB',ln:'rgba(160,185,220,.22)',pn:'#111A28',pn2:'#0C121D',sq:'#232F3E'};
    var MONO='"IBM Plex Mono",monospace',DISP='Sora,sans-serif';
    var Z=1,MOB=false,VW=1000;
    var CAM=[[[300,250],[700,235]],[[320,235],[790,215]],[[260,230],[720,235]],[[230,220],[860,220]],[[290,215],[800,215]]];
    function size(){var r=cv.getBoundingClientRect();W=r.width;H=r.height;if(!W)return;MOB=W<640;Z=MOB?1.75:1;K=W/1000*Z;VW=W/K;LH=H/K;cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);}
    function cam(i,t){if(!MOB)return [500,235];var k=CAM[i],u=eio(ph(t,.4,4.4)),x=k[0][0]+(k[1][0]-k[0][0])*u,y=k[0][1]+(k[1][1]-k[0][1])*u;return [cl(x,VW/2,1000-VW/2),cl(y,LH/2,470-LH/2)];}
    function rr(x,y,w,h,r){cx.beginPath();cx.moveTo(x+r,y);cx.arcTo(x+w,y,x+w,y+h,r);cx.arcTo(x+w,y+h,x,y+h,r);cx.arcTo(x,y+h,x,y,r);cx.arcTo(x,y,x+w,y,r);cx.closePath();}
    function box(x,y,w,h,o){o=o||{};rr(x,y,w,h,o.r==null?8:o.r);if(o.fill){cx.fillStyle=o.fill;cx.fill();}if(o.stroke){cx.strokeStyle=o.stroke;cx.lineWidth=o.lw||1;cx.setLineDash(o.dash||[]);cx.stroke();cx.setLineDash([]);}}
    function tx(s,x,y,o){o=o||{};cx.font=(o.w||500)+' '+(o.s||11)+'px '+(o.f==='d'?DISP:MONO);cx.fillStyle=o.c||C.tx;cx.textAlign=o.a||'left';cx.textBaseline=o.b||'alphabetic';cx.fillText(s,x,y);}
    function dot(x,y,r,c,glow){if(glow){cx.globalAlpha*=.25;cx.fillStyle=c;cx.beginPath();cx.arc(x,y,r*2.6,0,6.283);cx.fill();cx.globalAlpha/=.25;}cx.fillStyle=c;cx.beginPath();cx.arc(x,y,r,0,6.283);cx.fill();}
    function qpt(p0,p1,p2,u){var a=1-u;return [a*a*p0[0]+2*a*u*p1[0]+u*u*p2[0],a*a*p0[1]+2*a*u*p1[1]+u*u*p2[1]];}
    function line(x1,y1,x2,y2,c,w,dash,off){cx.strokeStyle=c;cx.lineWidth=w||1;cx.setLineDash(dash||[]);cx.lineDashOffset=off||0;cx.beginPath();cx.moveTo(x1,y1);cx.lineTo(x2,y2);cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;}
    function tile(x,y,w,h,label,sub,state,al){ /* state 0 off,1 warn,2 ok,3 bad */
      var sc=[C.mu,C.amb,C.gr,C.rd][state];cx.globalAlpha*=al;
      box(x,y,w,h,{fill:C.pn,stroke:state===2?'rgba(52,211,153,.45)':state===1?'rgba(255,181,71,.6)':state===3?'rgba(242,95,92,.6)':C.ln,r:7});
      dot(x+13,y+h/2,3.6,sc,state>0);tx(label,x+24,y+h/2-(sub?3:-4),{s:11.5,w:600,c:C.tx});if(sub)tx(sub,x+24,y+h/2+11,{s:9.5,c:C.mu});
      cx.globalAlpha/=al;}

    /* ---- scene 0 : multi-AZ Mumbai + DR Hyderabad ---- */
    function s0(t){
      var a=eo(ph(t,0,.6));cx.globalAlpha*=a;
      box(30,40,640,400,{stroke:'rgba(255,181,71,.45)',dash:[6,6],r:14});
      tx('AWS ASIA PACIFIC (MUMBAI) · ap-south-1',46,64,{s:11,w:600,c:C.amb});
      box(720,70,250,300,{stroke:'rgba(77,148,255,.5)',dash:[6,6],r:14});
      tx('ASIA PACIFIC (HYDERABAD)',736,94,{s:11,w:600,c:C.bl});tx('ap-south-2 · disaster recovery',736,110,{s:9.5,c:C.mu});
      cx.globalAlpha/=a;
      /* ALB + users stream */
      var al=eo(ph(t,.3,.5));cx.globalAlpha*=al;
      box(200,84,300,32,{fill:C.sq,stroke:'rgba(255,181,71,.6)',r:16});tx('Application Load Balancer',350,104,{s:12,w:700,f:'d',a:'center'});
      tx('users · India',560,104,{s:10,c:C.mu});line(552,100,504,100,'rgba(255,181,71,.5)',1.5,[4,4],-t*30);
      cx.globalAlpha/=al;
      var azx=[60,263,466];
      for(var z=0;z<3;z++){var za=eo(ph(t,.45+z*.12,.5));cx.globalAlpha*=za;
        box(azx[z],140,183,280,{stroke:C.ln,dash:[3,5],r:10});tx('ap-south-1'+'abc'[z],azx[z]+12,160,{s:10,w:600,c:C.mu});
        cx.globalAlpha/=za;}
      var names=[['web-01','app-01'],['web-02','app-02'],['web-03','app-03']],k=0;
      for(z=0;z<3;z++)for(var j=0;j<2;j++){var on=ph(t,.8+k*.14,.3);var st=on>=1?2:on>0?1:0;
        tile(azx[z]+12,180+j*58,159,44,names[z][j],j?'c6i.large · app tier':'c6i.large · web tier',st,eo(ph(t,.6+k*.08,.4)));k++;}
      /* ALB → web links with packets */
      if(t>1){for(z=0;z<3;z++){var tx0=azx[z]+92;line(350,116,tx0,180,'rgba(255,181,71,.25)',1);
        for(var p=0;p<2;p++){var u=((t*.7+p*.5+z*.23)%1);dot(350+(tx0-350)*u,116+64*u,2.2,C.amb,true);}}}
      /* databases */
      var da=eo(ph(t,1.4,.5));
      tile(72,326,159,56,'RDS primary','db.r6g.xlarge · Multi-AZ',ph(t,1.6,.2)>=1?2:1,da);
      tile(275,326,159,56,'RDS standby','synchronous · AZ b',ph(t,1.9,.2)>=1?2:1,da);
      tile(478,326,159,56,'ElastiCache','redis · 2 nodes',ph(t,2.1,.2)>=1?2:1,da);
      if(t>1.9){cx.globalAlpha*=da;line(231,354,275,354,C.gr,2,[5,4],-t*24);tx('sync',253,346,{s:9,c:C.gr,a:'center'});cx.globalAlpha/=da;}
      /* DR side */
      var ha=eo(ph(t,2.3,.6));
      tile(740,130,210,52,'RDS read replica','cross-region · async',ph(t,3,.3)>=1?2:1,ha);
      tile(740,196,210,52,'AMIs + backup copies','AWS Backup · copy vault',ph(t,3.3,.3)>=1?2:1,ha);
      tile(740,262,210,52,'Pilot-light stack','scaled to zero · IaC',ph(t,3.6,.3)>=1?2:0,ha);
      if(t>2.4){var P0=[152,382],P1=[520,520],P2=[740,156];cx.globalAlpha*=ha;cx.strokeStyle='rgba(77,148,255,.45)';cx.lineWidth=1.5;cx.setLineDash([6,6]);cx.lineDashOffset=-t*20;cx.beginPath();cx.moveTo(P0[0],P0[1]);cx.quadraticCurveTo(P1[0],P1[1],P2[0],P2[1]);cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;
        for(p=0;p<3;p++){var q=qpt(P0,P1,P2,(t*.35+p/3)%1);dot(q[0],q[1],2.6,C.bl,true);}
        tx('async replication · lag ~0.8 s',845,348,{s:9.5,c:C.bl,a:'center'});cx.globalAlpha/=ha;}
    }
    /* ---- scene 1 : alarm → auto-remediation ---- */
    function cpu(u){var v=40+6*Math.sin(u*1.7)+3*Math.sin(u*4.3);
      if(u>1.2&&u<3.2)v+=58*eo(cl((u-1.2)/.8,0,1));else if(u>=3.2)v+=58*(1-eo(cl((u-3.2)/1,0,1)));return cl(v,4,99);}
    function alarmState(t){return t<1.9?0:t<3.2?1:t<4.1?2:3;}
    function s1(t){
      var a=eo(ph(t,0,.5));cx.globalAlpha*=a;
      box(40,50,560,330,{fill:'rgba(12,18,29,.7)',stroke:C.ln,r:12});
      tx('web-asg · CPUUtilization (%) · 1-minute',58,76,{s:11,w:600,c:C.tx});
      var gx=70,gy=96,gw=510,gh=260;
      for(var i=0;i<=4;i++){var yy=gy+gh-gh*i/4;line(gx,yy,gx+gw,yy,'rgba(160,185,220,.1)',1);tx(String(i*25),gx-8,yy+3,{s:9,c:C.mu,a:'right'});}
      var th=gy+gh-gh*.85;line(gx,th,gx+gw,th,C.amb,1.5,[6,5]);tx('alarm > 85% for 3 min',gx+gw,th-6,{s:9.5,c:C.amb,a:'right'});
      cx.globalAlpha/=a;
      var N=80,head=Math.min(N,Math.floor(cl(t/4.8,0,1)*N));
      if(head>1){cx.lineWidth=2.4;cx.lineJoin='round';
        cx.beginPath();for(i=0;i<=head;i++){var u=i/N*4.8,x=gx+gw*i/N,y=gy+gh-gh*cpu(u)/100;if(i)cx.lineTo(x,y);else cx.moveTo(x,y);}
        var gr=cx.createLinearGradient(0,gy,0,gy+gh);gr.addColorStop(0,C.rd);gr.addColorStop(.18,C.rd);gr.addColorStop(.2,C.gr);gr.addColorStop(1,C.gr);cx.strokeStyle=gr;cx.stroke();
        var hx=gx+gw*head/N,hy=gy+gh-gh*cpu(head/N*4.8)/100;dot(hx,hy,4,cpu(head/N*4.8)>85?C.rd:C.gr,true);}
      var s=alarmState(t),lab=['OK','ALARM','REMEDIATING','OK'][s],col=[C.gr,C.rd,C.amb,C.gr][s];
      var pulse=s===1?.6+.4*Math.abs(Math.sin(t*6)):1;cx.globalAlpha*=pulse;
      box(470,62,112,24,{fill:'rgba(0,0,0,.35)',stroke:col,r:12});tx(lab,526,78,{s:10.5,w:700,c:col,a:'center'});cx.globalAlpha/=pulse;
      /* runbook */
      var ra=eo(ph(t,.3,.5));cx.globalAlpha*=ra;
      box(630,50,330,330,{fill:'rgba(12,18,29,.7)',stroke:C.ln,r:12});
      tx('RUNBOOK · AUTO-REMEDIATION',650,78,{s:10.5,w:600,c:C.amb});
      var steps=[[1.9,'Alarm fired','CloudWatch → XcellHost NOC'],[2.2,'Ticket INC-2041 · P2','assigned · shift B'],[2.6,'Systems Manager runbook','drain + replace instance'],[3.4,'Health checks passing','ALB · 3 of 3 AZs'],[4.2,'Ticket auto-resolved','RCA note queued']];
      for(i=0;i<steps.length;i++){var y0=104+i*54,st=t>=steps[i][0]+.5?2:t>=steps[i][0]?1:0,c=[C.mu,C.amb,C.gr][st];
        cx.globalAlpha*=(st?1:.45);
        cx.strokeStyle=c;cx.lineWidth=2;cx.beginPath();cx.arc(664,y0+12,9,0,6.283);cx.stroke();
        if(st===2){cx.beginPath();cx.moveTo(659,y0+12);cx.lineTo(663,y0+16);cx.lineTo(670,y0+8);cx.stroke();}
        else if(st===1){cx.beginPath();cx.arc(664,y0+12,9,t*6,t*6+2);cx.lineWidth=3;cx.stroke();}
        tx(steps[i][1],684,y0+10,{s:12,w:700,f:'d',c:C.tx});tx(steps[i][2],684,y0+26,{s:9.5,c:C.mu});
        if(i<steps.length-1)line(664,y0+24,664,y0+54-2,'rgba(160,185,220,.18)',1);
        cx.globalAlpha/=(st?1:.45);}
      cx.globalAlpha/=ra;
      tx('● under threshold   ● breach   - - threshold',58,404,{s:9.5,c:C.mu});
    }
    /* ---- scene 2 : cost meter ---- */
    var WF=[['Before',8.4,0],['Rightsize',.8,1],['Savings Plans',.9,1],['Idle',.3,1],['Storage',.3,1],['After',6.1,2]];
    function spend(t){return 8.4-2.3*eio(ph(t,.6,3.4));}
    function s2(t){
      var a=eo(ph(t,0,.5));cx.globalAlpha*=a;
      tx('MONTHLY AWS SPEND · FINOPS LEVERS APPLIED · SAMPLE',40,64,{s:10.5,w:600,c:C.amb});
      var gx=260,gy=268,r=160,v=spend(t),fr=v/10;
      cx.lineCap='round';cx.lineWidth=18;cx.strokeStyle='rgba(160,185,220,.12)';cx.beginPath();cx.arc(gx,gy,r,Math.PI,2*Math.PI);cx.stroke();
      for(var i=0;i<=10;i++){var an=Math.PI+Math.PI*i/10;line(gx+Math.cos(an)*(r-24),gy+Math.sin(an)*(r-24),gx+Math.cos(an)*(r-34),gy+Math.sin(an)*(r-34),'rgba(160,185,220,.3)',1.5);
        if(i%2===0)tx(String(i),gx+Math.cos(an)*(r-48),gy+Math.sin(an)*(r-48)+3,{s:9,c:C.mu,a:'center'});}
      var g=cx.createLinearGradient(gx-r,0,gx+r,0);g.addColorStop(0,C.gr);g.addColorStop(.6,C.amb);g.addColorStop(1,C.rd);
      cx.strokeStyle=g;cx.beginPath();cx.arc(gx,gy,r,Math.PI,Math.PI+Math.PI*fr);cx.stroke();cx.lineCap='butt';
      var na=Math.PI+Math.PI*fr;line(gx,gy,gx+Math.cos(na)*(r-30),gy+Math.sin(na)*(r-30),C.tx,3);dot(gx,gy,7,C.amb);
      tx(lakh(v),gx,gy+58,{s:34,w:800,f:'d',a:'center',c:'#fff'});tx('AWS spend per month · sample',gx,gy+80,{s:10,c:C.mu,a:'center'});
      tx('was ₹8.4 L',gx-r,gy+30,{s:10.5,c:C.mu});tx('saved '+lakh(8.4-v),gx+r,gy+30,{s:10.5,w:600,c:C.gr,a:'right'});
      cx.globalAlpha/=a;
      /* waterfall */
      var bx=540,by=360,bw=58,gap=10,sc=270/9,run=8.4;
      for(i=0;i<WF.length;i++){var w=WF[i],x=bx+i*(bw+gap),p=eo(ph(t,.6+i*.5,.5));if(p<=0){run-=w[2]===1?w[1]:0;continue;}
        var top,hgt,col;
        if(w[2]===0){hgt=w[1]*sc;top=by-hgt;col='#2E3B52';}
        else if(w[2]===1){top=by-run*sc;hgt=w[1]*sc;run-=w[1];col=C.amb;}
        else{hgt=w[1]*sc;top=by-hgt;col=C.gr;}
        cx.globalAlpha*=p;box(x,top+hgt*(1-p),bw,hgt*p,{fill:col,r:4});
        tx(w[2]===1?'−'+w[1].toFixed(1):w[1].toFixed(1),x+bw/2,top-8,{s:10.5,w:600,a:'center',c:'#fff'});
        tx(w[0],x+bw/2,by+16,{s:9,a:'center',c:C.mu});cx.globalAlpha/=p;}
      line(bx-6,by,bx+6*(bw+gap),by,'rgba(160,185,220,.3)',1);
    }
    /* ---- scene 3 : backup vault + cross-region copy ---- */
    function s3(t){
      var a=eo(ph(t,0,.5));cx.globalAlpha*=a;
      tx('AWS BACKUP · DAILY PLAN · VAULT LOCK ON',40,64,{s:10.5,w:600,c:C.amb});cx.globalAlpha/=a;
      var res=[['EC2','18 EBS volumes'],['RDS','3 databases'],['EFS','2 file systems'],['S3','versioned buckets']];
      for(var i=0;i<4;i++){var y=88+i*66;tile(40,y,180,50,res[i][0],res[i][1],t>.5+i*.2?2:0,eo(ph(t,.1+i*.12,.4)));
        if(t>.6){line(220,y+25,330,220,'rgba(255,181,71,.22)',1);var u=((t*.6+i*.27)%1);dot(220+110*u,y+25+(220-y-25)*u,2.4,C.amb,true);}}
      /* Mumbai vault */
      var va=eo(ph(t,.3,.5));cx.globalAlpha*=va;
      box(330,96,230,250,{fill:C.pn2,stroke:'rgba(255,181,71,.55)',r:14});
      tx('Backup vault · Mumbai',445,122,{s:12,w:700,f:'d',a:'center'});
      cx.strokeStyle='rgba(255,181,71,.6)';cx.lineWidth=2;cx.beginPath();cx.arc(445,168,22,0,6.283);cx.stroke();
      for(var k=0;k<8;k++){var an=t*1.2+k*.785;line(445+Math.cos(an)*14,168+Math.sin(an)*14,445+Math.cos(an)*22,168+Math.sin(an)*22,C.amb,2);}
      dot(445,168,4,C.amb);
      var np=Math.min(24,Math.floor(ph(t,.6,2.4)*24));
      for(k=0;k<24;k++){var cx0=352+(k%8)*24,cy0=208+Math.floor(k/8)*24;box(cx0,cy0,18,18,{fill:k<np?'rgba(255,181,71,.85)':'rgba(160,185,220,.08)',r:4});}
      tx(np+' recovery points',445,300,{s:10,c:C.mu,a:'center'});tx('retention 35 days · sample',445,316,{s:9.5,c:C.mu,a:'center'});
      cx.globalAlpha/=va;
      /* Hyderabad copy vault */
      var ha=eo(ph(t,1.2,.6));cx.globalAlpha*=ha;
      box(720,96,240,250,{fill:C.pn2,stroke:'rgba(77,148,255,.55)',r:14});
      tx('Copy vault · Hyderabad',840,122,{s:12,w:700,f:'d',a:'center'});tx('cross-region · cross-account',840,138,{s:9.5,c:C.mu,a:'center'});
      var nc=Math.min(24,Math.floor(ph(t,1.8,2.2)*24));
      for(k=0;k<24;k++){cx0=744+(k%8)*24;cy0=168+Math.floor(k/8)*24;box(cx0,cy0,18,18,{fill:k<nc?'rgba(77,148,255,.85)':'rgba(160,185,220,.08)',r:4});}
      tx(nc+' copies',840,266,{s:10,c:C.mu,a:'center'});
      var P0=[560,130],P1=[640,40],P2=[720,130];cx.strokeStyle='rgba(77,148,255,.5)';cx.lineWidth=1.5;cx.setLineDash([5,5]);cx.lineDashOffset=-t*20;cx.beginPath();cx.moveTo(P0[0],P0[1]);cx.quadraticCurveTo(P1[0],P1[1],P2[0],P2[1]);cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;
      for(k=0;k<2;k++){var q=qpt(P0,P1,P2,(t*.5+k*.5)%1);dot(q[0],q[1],3,C.bl,true);}
      cx.globalAlpha/=ha;
      var ta=eo(ph(t,3.6,.5));if(ta>0){cx.globalAlpha*=ta;box(330,356,230,32,{fill:'rgba(52,211,153,.12)',stroke:C.gr,r:16});tx('✓ restore test passed · 11 min',445,377,{s:11,w:600,c:C.gr,a:'center'});cx.globalAlpha/=ta;}
    }
    /* ---- scene 4 : patch wave ---- */
    function s4(t){
      var a=eo(ph(t,0,.5));cx.globalAlpha*=a;
      tx('EC2 FLEET · PATCH BASELINE: CRITICAL & SECURITY · WINDOW SUN 01:00 IST',40,64,{s:10.5,w:600,c:C.amb});cx.globalAlpha/=a;
      var done=0;
      for(var c=0;c<10;c++)for(var r=0;r<4;r++){var x=40+c*56,y=90+r*56,ts=.7+c*.3+(r===2&&c%3===1?.35:0),
        st=t<ts?0:t<ts+.5?1:2;if(st===2)done++;
        var col=st===0?'rgba(242,95,92,.16)':st===1?'rgba(255,181,71,'+(.35+.35*Math.abs(Math.sin(t*8)))+')':'rgba(52,211,153,.22)',
          sk=st===0?'rgba(242,95,92,.5)':st===1?C.amb:'rgba(52,211,153,.7)';
        cx.globalAlpha*=eo(ph(t,.05+c*.03,.3));box(x,y,46,46,{fill:col,stroke:sk,r:8});
        line(x+12,y+17,x+34,y+17,'rgba(230,237,247,.35)',2);line(x+12,y+25,x+28,y+25,'rgba(230,237,247,.25)',2);
        if(st===2){cx.strokeStyle=C.gr;cx.lineWidth=2;cx.beginPath();cx.moveTo(x+30,y+33);cx.lineTo(x+34,y+37);cx.lineTo(x+40,y+30);cx.stroke();}
        cx.globalAlpha/=eo(ph(t,.05+c*.03,.3));}
      /* wave front */
      var wf=(t-.7)/.3;if(wf>0&&wf<10.5){var wx=40+wf*56;cx.globalAlpha*=.5;line(wx,84,wx,320,C.amb,2);cx.globalAlpha/=.5;}
      box(40,340,546,10,{fill:'rgba(160,185,220,.1)',r:5});box(40,340,546*done/40,10,{fill:C.gr,r:5});
      tx(done+' / 40 instances patched',40,372,{s:10.5,c:C.mu});
      var pc=Math.round(62+38*done/40),gx=800,gy=210,R0=104;
      cx.lineWidth=14;cx.strokeStyle='rgba(160,185,220,.12)';cx.beginPath();cx.arc(gx,gy,R0,0,6.283);cx.stroke();
      cx.lineCap='round';cx.strokeStyle=pc>=100?C.gr:C.amb;cx.beginPath();cx.arc(gx,gy,R0,-Math.PI/2,-Math.PI/2+6.283*pc/100);cx.stroke();cx.lineCap='butt';
      tx(pc+'%',gx,gy+8,{s:38,w:800,f:'d',a:'center',c:'#fff'});tx('patch compliance',gx,gy+30,{s:10,c:C.mu,a:'center'});
      if(pc>=100){tx('✓ baseline met',gx,gy+R0+34,{s:11,w:600,c:C.gr,a:'center'});}
    }
    var SC=[s0,s1,s2,s3,s4];
    var TITLES=['CH-01 · Multi-AZ architecture','CH-02 · Alarm → auto-remediation','CH-03 · Cost meter · FinOps','CH-04 · Backup vault · cross-region DR','CH-05 · Patch wave · EC2 fleet'];
    var KP=[
      [['Healthy targets',function(t){return Math.round(12*eo(ph(t,.8,1.2)))+'/12';},function(){return ['ALB · 3 AZs',''];}],
       ['Replica lag',function(t){return t<2.6?'—':'0.8 s';},function(t){return [t<2.6?'connecting':'to Hyderabad',t<2.6?'w':''];}],
       ['Open incidents',function(){return '0';},function(){return ['all clear',''];}]],
      [['CPU · web-asg',function(t){return Math.round(cpu(cl(t,0,4.8)))+'%';},function(t){var c=cpu(cl(t,0,4.8));return [c>85?'over threshold':'normal',c>85?'r':''];}],
       ['Alarm state',function(t){return ['OK','ALARM','FIXING','OK'][alarmState(t)];},function(t){var s=alarmState(t);return [['watching','paged NOC','runbook','resolved'][s],['','r','w',''][s]];}],
       ['Time to fix',function(t){return t<4.2?'…':'4 min';},function(t){return [t<4.2?'in progress':'sample',t<4.2?'w':''];}]],
      [['Monthly spend',function(t){return lakh(spend(t));},function(){return ['AWS · sample',''];}],
       ['Saved / month',function(t){return lakh(8.4-spend(t));},function(t){return [Math.round((8.4-spend(t))/8.4*100)+'% lower',''];}],
       ['Savings Plan cover',function(t){return Math.round(72*eio(ph(t,1.4,2)))+'%';},function(){return ['steady compute',''];}]],
      [['Recovery points',function(t){return String(Math.min(24,Math.floor(ph(t,.6,2.4)*24)));},function(){return ['vault · Mumbai',''];}],
       ['Copied to Hyderabad',function(t){return String(Math.min(24,Math.floor(ph(t,1.8,2.2)*24)));},function(){return ['cross-region',''];}],
       ['Restore test',function(t){return t<3.6?'…':'PASS';},function(t){return [t<3.6?'running':'11 min · sample',t<3.6?'w':''];}]],
      [['Patch compliance',function(t){var n=0;for(var c=0;c<10;c++)for(var r=0;r<4;r++){if(t>=.7+c*.3+(r===2&&c%3===1?.35:0)+.5)n++;}return Math.round(62+38*n/40)+'%';},function(){return ['baseline · critical',''];}],
       ['Instances',function(){return '40';},function(){return ['Windows + Linux',''];}],
       ['Window',function(){return 'Sun 01:00';},function(){return ['approved · IST','w'];}]]
    ];
    var LOG=[
      [[.3,'i','VPC','3 AZs · 9 subnets · flow logs on'],[1.2,'ok','ALB','12 of 12 targets healthy'],[2,'ok','RDS','Multi-AZ standby in sync'],[2.9,'i','DR','replica in ap-south-2 · lag 0.8 s'],[3.9,'ok','READY','pilot-light stack on file']],
      [[.4,'i','WATCH','CPU alarm armed · 85% / 3 min'],[1.9,'r','ALARM','web-asg CPU above threshold'],[2.2,'w','INC-2041','P2 opened · NOC shift B'],[2.7,'i','SSM','runbook XH-RB-12 · replace node'],[4.2,'ok','OK','alarm cleared · ticket resolved']],
      [[.5,'i','REVIEW','Cost Explorer · last 30 days'],[1.2,'w','RIGHTSIZE','14 instances one size down'],[1.7,'ok','COMMIT','1-yr Compute Savings Plan'],[2.2,'ok','CLEANUP','37 unattached volumes removed'],[2.8,'ok','STORAGE','52 volumes gp2 → gp3'],[3.6,'i','BUDGET','alert set at 80% of forecast']],
      [[.3,'i','PLAN','daily 01:30 · 35-day retention'],[.9,'ok','JOB','EBS + RDS snapshots complete'],[1.9,'i','COPY','to Hyderabad copy vault'],[2.8,'ok','LOCK','vault lock · compliance mode'],[3.7,'ok','RESTORE','test restore passed · 11 min']],
      [[.3,'i','SCAN','40 instances · 15 missing patches'],[.8,'w','WAVE 1','pre-checks + snapshots'],[1.8,'w','REBOOT','3 instances · rolling'],[3.3,'ok','WAVE 3','application health OK'],[4,'ok','DONE','100% compliant · report sent']]
    ];
    var cur=0,prev=-1,st=0,pst=0,tr=1,hold=false,DUR=5.5,logi=0,kpT=0,clkT=0,mx=0,my=0,tmx=0,tmy=0;
    var btns=$$('#maCh button'),logEl=$('#maLog'),titleEl=$('#maTitle');
    var kl=[0,1,2].map(function(i){return [$('#maKl'+i),$('#maKv'+i),$('#maKd'+i)];});
    function setKP(t){for(var i=0;i<3;i++){var k=KP[cur][i],dd=k[2](t);kl[i][0].textContent=k[0];kl[i][1].textContent=k[1](t);kl[i][2].textContent=dd[0];kl[i][2].className=dd[1];kl[i][1].parentNode.classList.toggle('hot',dd[1]==='r'||dd[1]==='w');}}
    function pushLog(e){var li=d.createElement('li');li.className=e[1];li.innerHTML='<b>'+e[2]+'</b>'+e[3];logEl.appendChild(li);while(logEl.children.length>5)logEl.removeChild(logEl.firstChild);}
    function go(n,user){n=(n+5)%5;if(n===cur&&!user)return;if(n!==cur){prev=cur;pst=st;tr=0;}cur=n;st=0;logi=0;logEl.innerHTML='';
      btns.forEach(function(b,i){b.classList.toggle('on',i===cur);b.setAttribute('aria-selected',i===cur);var bar=$('i',b);bar.style.transform='scaleX(0)';});
      titleEl.textContent=TITLES[cur];
      if(R){st=6;tr=1;prev=-1;LOG[cur].forEach(pushLog);setKP(6);paint();}}
    function scene(i,t,al,s){if(al<=0)return;var c=cam(i,t);cx.save();cx.globalAlpha=al;cx.translate(VW/2+mx,LH/2+my);cx.scale(s,s);cx.translate(-c[0],-c[1]);SC[i](t);cx.restore();}
    function paint(){if(!W)return;cx.setTransform(dpr*K,0,0,dpr*K,0,0);cx.clearRect(0,0,VW,LH);
      if(tr<1&&prev>=0){var e=eio(tr);scene(prev,pst,1-e,1+.06*e);scene(cur,st,e,.94+.06*e);}else scene(cur,st,1,1);}
    function clock(){var s;try{s=new Date().toLocaleTimeString('en-GB',{timeZone:'Asia/Kolkata',hour12:false});}catch(e){s=new Date().toTimeString().slice(0,8);}$('#maClk').textContent=s;}
    var hero=ticker(function(dt,now){
      st+=dt;if(tr<1){tr=Math.min(1,tr+dt/.9);pst+=dt;}
      mx+=(tmx-mx)*.08;my+=(tmy-my)*.08;
      while(logi<LOG[cur].length&&st>=LOG[cur][logi][0]){pushLog(LOG[cur][logi]);logi++;}
      if(now-kpT>110){kpT=now;setKP(st);}
      if(now-clkT>1000){clkT=now;clock();}
      var bar=$('i',btns[cur]);bar.style.transform='scaleX('+cl(st/DUR,0,1)+')';
      paint();
      if(!hold&&st>=DUR)go(cur+1);
    });
    size();clock();
    btns.forEach(function(b,i){b.addEventListener('click',function(){go(i,true);});});
    wall.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse'){hold=true;wall.classList.add('hold');}});
    wall.addEventListener('pointerleave',function(){hold=false;wall.classList.remove('hold');tmx=tmy=0;});
    if(XH.fine&&!R)scr.addEventListener('pointermove',function(e){var r=scr.getBoundingClientRect();tmx=((e.clientX-r.left)/r.width-.5)*-14;tmy=((e.clientY-r.top)/r.height-.5)*-10;});
    var sx=null,sy=0;
    scr.addEventListener('pointerdown',function(e){sx=e.clientX;sy=e.clientY;});
    scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))go(cur+(dx<0?1:-1),true);});
    addEventListener('resize',function(){size();if(R)paint();});
    if(R){st=6;LOG[0].forEach(pushLog);setKP(6);
      if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){size();paint();});paint();}
    else{bindVis(hero,wall);if(d.fonts&&d.fonts.ready)d.fonts.ready.then(size);}
  }

  /* =====================================================================
     sticky sub-nav highlight
     ===================================================================== */
  var subA=$$('#maSub a');
  if(subA.length&&'IntersectionObserver' in window){
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){var id=x.target.id;subA.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+id);});}});},{rootMargin:'-45% 0px -50% 0px'});
    subA.forEach(function(a){var s=$(a.getAttribute('href'));if(s)io.observe(s);});
  }

  /* =====================================================================
     service rails: arrows + drag
     ===================================================================== */
  $$('.ma-ra button').forEach(function(b){b.addEventListener('click',function(){var tr=$('#'+b.getAttribute('data-rail'));tr.scrollBy({left:(+b.getAttribute('data-dir'))*296*2,behavior:R?'auto':'smooth'});});});
  $$('.ma-track').forEach(function(tr){var down=false,x0=0,s0=0,moved=0;
    tr.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse')return;down=true;moved=0;x0=e.clientX;s0=tr.scrollLeft;});
    addEventListener('pointermove',function(e){if(!down)return;var dx=e.clientX-x0;if(Math.abs(dx)>4){tr.classList.add('drag');moved=1;}tr.scrollLeft=s0-dx;});
    addEventListener('pointerup',function(){if(!down)return;down=false;tr.classList.remove('drag');});
    tr.addEventListener('click',function(e){if(moved){e.preventDefault();e.stopPropagation();}},true);
    tr.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();tr.scrollBy({left:(e.key==='ArrowRight'?1:-1)*296,behavior:'smooth'});}});
  });

  /* =====================================================================
     lifecycle beacon
     ===================================================================== */
  var lc=$('#maLc');
  if(lc){var path=$('#maLcP'),trc=$('.ma-lc-svg path.tr'),bc=$('#maLcB'),sb=$$('.ma-lc-st button',lc),pans=$$('#maLcPan>div'),L=path.getTotalLength(),stops=[],cl0=0,tg=0,from=0,lt=1,auto=true,since=0,ki=0;
    var SX=[100,300,500,700,900];
    SX.forEach(function(x){var best=0,bd=1e9;for(var l=0;l<=L;l+=4){var p=path.getPointAtLength(l),dd=Math.abs(p.x-x);if(dd<bd){bd=dd;best=l;}}stops.push(best);});
    trc.style.strokeDasharray=L;trc.style.strokeDashoffset=L;
    function put(l){var p=path.getPointAtLength(l);bc.setAttribute('cx',p.x);bc.setAttribute('cy',p.y);trc.style.strokeDashoffset=L-l;}
    function sel(k,user){ki=k;sb.forEach(function(b,i){b.classList.toggle('on',i===k);b.setAttribute('aria-selected',i===k);});pans.forEach(function(p,i){p.classList.toggle('on',i===k);});
      from=cl0;tg=stops[k];lt=0;since=0;if(user)auto=false;if(R){cl0=tg;put(cl0);}else{lcT.on=lcT.vis;wake();}}
    var lcT=ticker(function(dt){if(lt<1){lt=Math.min(1,lt+dt/1.1);cl0=from+(tg-from)*eio(lt);put(cl0);}
      since+=dt;if(auto&&since>4.6)sel((ki+1)%5);});
    sb.forEach(function(b,i){b.addEventListener('click',function(){sel(i,true);});});
    put(stops[0]);cl0=stops[0];
    if(!R)bindVis(lcT,lc);
  }

  /* =====================================================================
     24×7 ops dial
     ===================================================================== */
  var dial=$('#maDial');
  if(dial){var NS='http://www.w3.org/2000/svg',tk=$('#maTicks'),bl=$('#maBlips'),hand=$('#maHand'),dT=$('#maDialT'),dO=$('#maDialO'),dC=$('#maDialC');
    function el(n,a){var e=d.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);return e;}
    for(var h=0;h<24;h++){var an=(h/24)*6.283-Math.PI/2,m=h%6===0;tk.appendChild(el('line',{x1:160+Math.cos(an)*(m?104:110),y1:160+Math.sin(an)*(m?104:110),x2:160+Math.cos(an)*116,y2:160+Math.sin(an)*116,'class':m?'m':''}));
      if(m)tk.appendChild(el('text',{x:160+Math.cos(an)*92,y:160+Math.sin(an)*92})).textContent=String(h).padStart(2,'0');}
    var INC=[.7,2.3,3.1,5.6,7.9,9.2,10.4,11.8,13.5,14.1,16.6,18.2,19.7,21.3,22.8].map(function(hr,i){var an=(hr/24)*6.283-Math.PI/2,rr=i%3===0?140:i%3===1?134:146;var c=el('circle',{cx:160+Math.cos(an)*rr,cy:160+Math.sin(an)*rr,r:4.5,fill:'transparent'});bl.appendChild(c);return {h:hr,c:c,st:0};});
    var hr=0;
    function dpaint(){var a=hr/24*360;hand.setAttribute('transform','rotate('+a+' 160 160)');var H=Math.floor(hr),M=Math.floor((hr-H)*60);dT.textContent=String(H%24).padStart(2,'0')+':'+String(M).padStart(2,'0');
      var o=0,c=0;INC.forEach(function(x){var s=hr>=x.h+1.2?2:hr>=x.h?1:0;if(s>=1)o++;if(s===2)c++;if(s!==x.st){x.st=s;x.c.setAttribute('fill',s===0?'transparent':s===1?'#F25F5C':'#34D399');x.c.setAttribute('r',s===1?6:4.5);}});dO.textContent=o;dC.textContent=c;}
    var dTk=ticker(function(dt){hr+=dt*1.1;if(hr>=25.5){hr=0;}dpaint();});
    if(R){hr=24.99;dpaint();}else bindVis(dTk,dial);
  }

  /* =====================================================================
     FinOps estimator (tool 1)
     ===================================================================== */
  var est=$('#maEst');
  if(est){var eSp=$('#eSp'),eCp=$('#eCp'),wf=$('#eWf'),LV={rs:['Rightsize',.08,.15,'c'],sp:['Savings Plans',.15,.25,'c2'],id:['Idle',.03,.08,'t'],st:['Storage',.02,.06,'t'],sc:['Schedule',.02,.07,'t']},ORD=['rs','sp','id','st','sc'];
    var bars=['Spend'].concat(ORD.map(function(k){return LV[k][0];})).concat(['After']).map(function(n,i){var b=d.createElement('div');b.className='wb'+(i===0?'':i===6?' end':' lv');b.innerHTML='<i></i><em></em><span>'+n+'</span>';wf.appendChild(b);return b;});
    var ax=d.createElement('span');ax.className='ax';wf.appendChild(ax);
    function short(n){return n>=1e7?'₹'+(n/1e7).toFixed(2)+' Cr':n>=1e5?'₹'+(n/1e5).toFixed(1)+' L':'₹'+Math.round(n/1e3)+'k';}
    function calc(){var S=+eSp.value,cp=+eCp.value/100,C=S*cp,on={};$$('#eLv input').forEach(function(i){on[i.getAttribute('data-lv')]=i.checked;});
      var lo=0,hi=0,mid=[],cL=C,cH=C,cM=C;
      ORD.forEach(function(k){var v=LV[k],l=0,h=0,m=0;if(on[k]){if(v[3]==='c'){l=cL*v[1];h=cH*v[2];m=cM*(v[1]+v[2])/2;cL-=l;cH-=h;cM-=m;}else if(v[3]==='c2'){l=cL*v[1];h=cH*v[2];m=cM*(v[1]+v[2])/2;}else{l=S*v[1];h=S*v[2];m=S*(v[1]+v[2])/2;}}lo+=l;hi+=h;mid.push(m);});
      hi=Math.min(hi,S*.6);lo=Math.min(lo,hi);
      $('#eSpL').textContent=XH.inr(S);$('#eCpL').textContent=Math.round(cp*100)+'%';
      $('#eLo').textContent=XH.inr(Math.round(lo/100)*100);$('#eHi').textContent=XH.inr(Math.round(hi/100)*100);
      $('#ePc').textContent=Math.round(lo/S*100)+'–'+Math.round(hi/S*100)+'%';$('#eYr').textContent=XH.inr(Math.round((lo+hi)/2*12/1000)*1000);
      var run=S,tot=mid.reduce(function(a,b){return a+b;},0),af=S-tot,F=Math.max(0,S-2.4*Math.max(tot,S*.05)),Y=function(v){return (1-(v-F)/(S-F))*100;};
      function setB(b,top,h,lab,emTop){var i=$('i',b),em=$('em',b);i.style.top=top+'%';i.style.height=Math.max(h,.6)+'%';em.style.top='calc('+emTop+'% - 16px)';em.textContent=lab;}
      setB(bars[0],0,100,short(S),0);
      ORD.forEach(function(k,j){var m=mid[j],b=bars[j+1],top=Y(run),h=m/(S-F)*100;b.classList.toggle('off',!on[k]);setB(b,top,h,on[k]?'−'+short(m):'off',top);run-=m;});
      setB(bars[6],Y(af),100-Y(af),short(af),Y(af));bars[0].classList.toggle('sp',F>0);ax.textContent=F>0?'axis from '+short(F):'';}
    est.addEventListener('input',calc);est.addEventListener('change',calc);calc();
  }

  /* =====================================================================
     Well-Architected quick check (tool 2)
     ===================================================================== */
  var wa=$('#maWa');
  if(wa){var Q=[
      ['Operational excellence','Ops','pipeline','How do changes reach production?',['Manually in the console','Scripts, partly reviewed','Infrastructure as code + pipelines'],'Move changes to infrastructure as code with peer review and a pipeline.'],
      ['Security','Security','lock','How do people sign in to AWS?',['IAM users with long-lived keys','SSO for some, MFA mostly','SSO + MFA for all, least privilege'],'Switch to IAM Identity Center with MFA and remove long-lived access keys.'],
      ['Reliability','Reliability','repeat','If one availability zone failed today…',['The workload goes down','Some tiers are multi-AZ','Multi-AZ with tested failover'],'Spread every tier across availability zones and test failover; add a Hyderabad DR copy.'],
      ['Performance efficiency','Perf.','speed','How were instance sizes chosen?',['Guessed at launch','Reviewed now and then','From measured utilisation'],'Rightsize from CloudWatch utilisation and move to current-generation instances.'],
      ['Cost optimisation','Cost','rupee','Do you know cost per team or project?',['No','Partly, some tags','Yes — tags, budgets and alerts'],'Enforce cost-allocation tags and set AWS Budgets with anomaly alerts.'],
      ['Sustainability','Sustain.','refresh','Do non-production environments run 24×7?',['Always on','Some schedules','Scheduled or scaled to zero'],'Schedule dev and test off-hours — it cuts both cost and footprint.']
    ],ans=[-1,-1,-1,-1,-1,-1],wcur=[0,0,0,0,0,0],tgt=[0,0,0,0,0,0],qbox=$('#waQ'),poly=$('#waPoly'),NS2='http://www.w3.org/2000/svg';
    var ICON={pipeline:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><path d="M7.5 12h9"/><path d="M12 6v12"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',repeat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3"/></svg>',speed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg>',rupee:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>',refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>'};
    qbox.innerHTML=Q.map(function(q,i){return '<div class="ma-wq" data-i="'+i+'"><h4><i>'+ICON[q[2]]+'</i>'+q[0]+'</h4><p>'+q[3]+'</p><div class="op">'+q[4].map(function(o,j){return '<button type="button" data-j="'+j+'" aria-pressed="false">'+o+'</button>';}).join('')+'</div></div>';}).join('');
    function pt(i,v){var an=-Math.PI/2+i*Math.PI/3;return [150+Math.cos(an)*105*v,150+Math.sin(an)*105*v];}
    var g=$('#waGrid'),lb=$('#waLbl');
    [.33,.66,1].forEach(function(s){var p=d.createElementNS(NS2,'polygon');p.setAttribute('points',[0,1,2,3,4,5].map(function(i){return pt(i,s).join(',');}).join(' '));g.appendChild(p);});
    for(var i=0;i<6;i++){var ln=d.createElementNS(NS2,'line'),e=pt(i,1);ln.setAttribute('x1',150);ln.setAttribute('y1',150);ln.setAttribute('x2',e[0]);ln.setAttribute('y2',e[1]);g.appendChild(ln);
      var t=d.createElementNS(NS2,'text'),p2=pt(i,1.24);t.setAttribute('x',p2[0]);t.setAttribute('y',p2[1]);t.textContent=Q[i][1];lb.appendChild(t);}
    function draw(){poly.setAttribute('points',wcur.map(function(v,i){return pt(i,.12+.88*v).join(',');}).join(' '));}
    var waT=ticker(function(dt){var mv=false;for(var i=0;i<6;i++){var df=tgt[i]-wcur[i];if(Math.abs(df)>.002){wcur[i]+=df*Math.min(1,dt*7);mv=true;}else wcur[i]=tgt[i];}draw();if(!mv)waT.on=false;});
    function upd(){var sc=0,n=0;ans.forEach(function(a,i){tgt[i]=a<0?0:a/2;if(a>=0){sc+=a;n++;}});
      $('#waSc').textContent=Math.round(sc/12*100);
      var rec=Q.map(function(q,i){return {i:i,a:ans[i]};}).filter(function(x){return x.a>=0&&x.a<2;}).sort(function(a,b){return a.a-b.a;}).slice(0,3);
      $('#waRec').innerHTML=n===0?'<li>Answer the questions to see your priorities.</li>':rec.length?rec.map(function(x){return '<li><b>'+Q[x.i][0]+':</b> '+Q[x.i][5]+'</li>';}).join(''):'<li>Strong baseline — a full review would focus on drift and evidence.</li>';
      if(R){wcur=tgt.slice();draw();}else{waT.on=true;wake();}}
    qbox.addEventListener('click',function(e){var b=e.target.closest('.op button');if(!b)return;var w=b.closest('.ma-wq'),i=+w.getAttribute('data-i'),j=+b.getAttribute('data-j');ans[i]=j;
      $$('.op button',w).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});w.classList.add('done');upd();});
    draw();upd();
  }

  /* =====================================================================
     plans: model toggle (cards) + configurator
     ===================================================================== */
  function setSeg(seg,v){$$('button',seg).forEach(function(x){var on=x.getAttribute('data-v')===String(v);x.classList.toggle('on',on);x.setAttribute('aria-pressed',on);});seg.dataset.value=v;}
  var pModel=$('#pModel'),cMod=$('#cMod'),cPlan=$('#cPlan'),cRes=$('#cRes'),cResR=$('#cResR'),cSp=$('#cSp'),cEnv=$('#cEnv');
  function cards(m){
    ['ess','pro'].forEach(function(k){var b=$('[data-f="'+k+'"]'),s=$('[data-fs="'+k+'"]');if(m==='pct'){b.textContent='8%';s.textContent='of monthly AWS spend* · min '+XH.inr(PR.pmin)+'*';}else{b.textContent=XH.inr(PR[k]);s.textContent='/ month* · up to '+(k==='ess'?10:40)+' resources*';}if(!R){b.style.opacity=0;setTimeout(function(){b.style.opacity=1;},160);}});
    $('#pModelN').textContent=m==='pct'?'Fee follows usage: 8% of monthly AWS spend, Professional scope, minimum ₹14,999*.':'Fixed fee per month by number of resources in scope.';}
  if(pModel){pModel.addEventListener('change',function(){var m=pModel.dataset.value;cards(m);setSeg(cMod,m);calc2();});}
  $$('[data-pick]').forEach(function(a){a.addEventListener('click',function(){setSeg(cMod,'flat');setSeg(pModel,'flat');cards('flat');setSeg(cPlan,a.getAttribute('data-pick'));calc2();});});
  var ENVL=['1 · production','2 · prod + staging','3 · prod, staging, dev','4 · prod, staging, dev, DR'],SPL={75000:'up to ₹1 lakh',300000:'₹1–5 lakh',1000000:'₹5–15 lakh',3000000:'₹15–50 lakh'};
  var last2={};
  function calc2(){if(!cMod)return;
    var m=cMod.dataset.value,p=cPlan.dataset.value,res=Math.max(1,+cRes.value||1),sp=+cSp.dataset.value,env=+cEnv.dataset.value,
      spm=$('#cSpm'),fin=$('#cFin'),asm=$('#cAsm').checked,lz=$('#cLz').checked,mig=$('#cMig').checked,rows=[],mo=0,one=0,quote=false;
    $('#cPlanF').classList.toggle('dis',m==='pct');
    var finInc=!(m==='flat'&&p==='ess'),spmInc=(m==='flat'&&p==='ent');
    fin.disabled=finInc;if(finInc)fin.checked=false;spm.disabled=spmInc;if(spmInc)spm.checked=false;
    fin.closest('.tgl').style.opacity=finInc?.5:1;spm.closest('.tgl').style.opacity=spmInc?.5:1;
    if(m==='flat'){
      if(p==='ent'){quote=true;rows.push(['Enterprise management fee','quote']);}
      else{var inc=p==='ess'?10:40,ex=Math.max(0,res-inc);mo+=PR[p];rows.push([(p==='ess'?'Essential':'Professional')+' plan',XH.inr(PR[p])]);
        if(ex){mo+=ex*PR.xres;rows.push([ex+' extra resources × '+XH.inr(PR.xres),XH.inr(ex*PR.xres)]);}}
      if(env>1){mo+=(env-1)*PR.xenv;rows.push([(env-1)+' extra environment'+(env>2?'s':'')+' × '+XH.inr(PR.xenv),XH.inr((env-1)*PR.xenv)]);}
      $('#cResL').textContent=p==='ent'?res+' · per quote':(res+(res>(p==='ess'?10:40)?' · '+(res-(p==='ess'?10:40))+' extra':' · included'));
    }else{var f=Math.max(PR.pmin,Math.round(sp*PR.pct));mo+=f;rows.push(['8% of ~'+XH.inr(sp)+' AWS spend'+(f===PR.pmin?' (minimum)':''),XH.inr(f)]);$('#cResL').textContent=res+' · all in scope';}
    if(spm.checked){mo+=PR.spm;rows.push(['Security posture management',XH.inr(PR.spm)]);}
    if(fin.checked){mo+=PR.fin;rows.push(['FinOps monthly review',XH.inr(PR.fin)]);}
    if(asm){one+=PR.asmt;rows.push(['Readiness assessment · one-time',XH.inr(PR.asmt)]);}
    if(lz){one+=PR.lz;rows.push(['Landing zone setup · one-time',XH.inr(PR.lz)]);}
    if(mig)rows.push(['Migration · per wave','quote']);
    $('#cModL').textContent=m==='pct'?'8% of AWS spend':'Flat plan';$('#cPlanL').textContent={ess:'Essential',pro:'Professional',ent:'Enterprise'}[p];
    $('#cSpL').textContent=SPL[sp];$('#cEnvL').textContent=ENVL[env-1];
    $('#oRows').innerHTML=rows.map(function(r){return '<div class="crow"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>';}).join('');
    $('#oTot').textContent=quote?(mo?XH.inr(mo)+' + quote':'On quote'):XH.inr(mo);
    $('#oSub').textContent=quote?'Enterprise fee on quote · excl. GST':'per month, excl. GST';
    $('#oMo').textContent=XH.inr(mo);$('#oGst').textContent=XH.inr(mo*.18);$('#oPay').textContent=XH.inr(mo*1.18);$('#oOne').textContent=XH.inr(one);
    $('#oSpN').innerHTML='AWS usage of about <b>'+XH.inr(sp)+'</b>/month billed separately at actuals*';
    $('#oAdd').innerHTML=quote?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg> Request Enterprise quote':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg> Add to cart';
    last2={m:m,p:p,res:res,env:env,mo:mo,one:one,quote:quote,asm:asm,lz:lz,mig:mig};}
  if(cMod){
    cMod.addEventListener('change',function(){setSeg(pModel,cMod.dataset.value);cards(cMod.dataset.value);calc2();});
    [cPlan,cSp,cEnv].forEach(function(s){s.addEventListener('change',calc2);});
    cRes.addEventListener('input',function(){cResR.value=Math.min(200,+cRes.value||1);cResR.dispatchEvent(new Event('input'));calc2();});
    cResR.addEventListener('input',function(e){if(e.isTrusted)cRes.value=cResR.value;calc2();});
    $$('#configure .tgl input').forEach(function(i){i.addEventListener('change',calc2);});
    $('#oAdd').addEventListener('click',function(){var L=last2;
      if(L.quote){XH.open('xhCallback',{topic:'Managed AWS — Enterprise quote'});return;}
      var nm=L.m==='pct'?'Managed AWS — 8% of spend':'Managed AWS — '+(L.p==='ess'?'Essential':'Professional');
      if(L.mo>0)XH.cart.add({key:'managed-aws-'+L.m+'-'+L.p+'-'+L.res+'-'+L.env+'-'+L.mo,name:nm,sub:'Monthly management fee · '+L.res+' resources · '+L.env+' env · AWS usage billed at actuals',price:L.mo,qty:1});
      if(L.asm)XH.cart.add({key:'managed-aws-assessment',name:'AWS cloud readiness assessment',sub:'One-time',price:PR.asmt,qty:1});
      if(L.lz)XH.cart.add({key:'managed-aws-landing-zone',name:'AWS landing zone setup',sub:'One-time',price:PR.lz,qty:1});
      if(L.mig)XH.toast('Migration is priced per wave — we will call you with a quote.');});
    calc2();
  }

  /* =====================================================================
     misc: magnetic CTAs, reduced-motion clean-up
     ===================================================================== */
  if(XH.fine&&!R)$$('.ma-mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left)/r.width-.5)*8+'px,'+((e.clientY-r.top)/r.height-.5)*6+'px)';});b.addEventListener('pointerleave',function(){b.style.transform='';});});
  if(R)$$('.ma-tree .pk').forEach(function(p){p.remove();});
})();


