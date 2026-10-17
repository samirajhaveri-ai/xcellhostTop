/* Imported from managed-azure.html; shared chrome uses the Angular shell. */
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
  XH.open=function(id,opts){d.dispatchEvent(new CustomEvent('import-callback',{detail:opts&&opts.topic||'Managed Azure Services'}));};
  XH.cart={add:function(item){d.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};
  XH.toast=function(message){var toast=$('#azureToast');toast.textContent=message;toast.hidden=false;clearTimeout(XH.toastTimer);XH.toastTimer=setTimeout(function(){toast.hidden=true;},3000);};
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
var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,d=document;
function cl(v,a,b){return v<a?a:v>b?b:v;}
function sub(u,a,b){return cl((u-a)/(b-a),0,1);}
function eo(x){return 1-Math.pow(1-x,3);}
function eio(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}
function spring(x){if(x<=0)return 0;if(x>=1)return 1;return 1-Math.cos(x*Math.PI*2.6)*Math.exp(-x*5.2);}
function inr(n){return XH.inr(n);}
function dark(){return d.documentElement.getAttribute('data-theme')==='dark';}

/* ---------------- one shared rAF loop ---------------- */
var tasks=[],running=false,T=0,lastTs=0;
function addTask(el,fn){var t={on:false,fn:fn};tasks.push(t);if(R)return t;XH.whenVisible(el,function(v){t.on=v;kick();});return t;}
function frame(ts){var dt=lastTs?Math.min(.12,(ts-lastTs)/1000):.016;lastTs=ts;T+=dt;var any=false;
  for(var i=0;i<tasks.length;i++){if(tasks[i].on){any=true;tasks[i].fn(dt,T);}}
  if(any)requestAnimationFrame(frame);else{running=false;lastTs=0;}}
function kick(){if(!running&&!R){running=true;requestAnimationFrame(frame);}}

/* ==================================================================
   HERO · isometric canvas, 5 rotating live scenes
   ================================================================== */
var slab=$('#azSlab'),cv=$('#azIso');
if(slab&&cv){
  var cx=cv.getContext('2d'),W=0,H=0,DPR=Math.min(2,window.devicePixelRatio||1),S=30,OX=0,OY=0;
  function size(){W=slab.clientWidth;H=slab.clientHeight;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);cx.setTransform(DPR,0,0,DPR,0,0);
    var m=W<520;S=m?Math.min(W/19,H/16):Math.min(W/21,H/15);OX=W*(m?.5:.48);OY=H*(m?.45:.49);}
  function P(x,y,z){return [OX+(x-y)*S*.866,OY+(x+y)*S*.5-(z||0)*S];}
  var PAL={b:['#4b95ff','#0066FF','#0052cc'],s:['#8edcff','#38BDF8','#0ea5e9'],n:['#33497a','#0B132B','#18264d'],o:['#ffb24d','#FF8A00','#d77400'],g:['#5ee08f','#16a34a','#11803a'],r:['#f07a6e','#c0392b','#9b2b20'],w:['#ffffff','#dcebff','#bcd7fa'],k:['#d5deea','#a8b6ca','#8b9ab0']};
  function th(){return dark()?{pt:'rgba(60,110,200,.30)',pl:'rgba(40,80,160,.55)',pr:'rgba(25,60,130,.65)',gr:'rgba(140,190,255,.14)',lb:'rgba(10,26,58,.92)',li:'#eaf2ff',lm:'#9fb6de',ln:'rgba(140,190,255,.55)',w:['#2a4f8f','#1d3a72','#152c59']}:{pt:'rgba(255,255,255,.62)',pl:'rgba(178,214,250,.75)',pr:'rgba(140,186,240,.75)',gr:'rgba(0,102,255,.11)',lb:'rgba(255,255,255,.95)',li:'#0B132B',lm:'#51607A',ln:'rgba(0,102,255,.45)',w:PAL.w};}
  var TH=th();
  function poly(pts,f,s){cx.beginPath();cx.moveTo(pts[0][0],pts[0][1]);for(var i=1;i<pts.length;i++)cx.lineTo(pts[i][0],pts[i][1]);cx.closePath();if(f){cx.fillStyle=f;cx.fill();}if(s){cx.strokeStyle=s;cx.lineWidth=1;cx.stroke();}}
  function box(x,y,w,dp,h,z,pal){z=z||0;if(h<=0.001)h=0.001;var c=typeof pal==='string'?(pal==='w'?TH.w:PAL[pal]):pal;
    poly([P(x,y+dp,z),P(x+w,y+dp,z),P(x+w,y+dp,z+h),P(x,y+dp,z+h)],c[1]);
    poly([P(x+w,y,z),P(x+w,y+dp,z),P(x+w,y+dp,z+h),P(x+w,y,z+h)],c[2]);
    poly([P(x,y,z+h),P(x+w,y,z+h),P(x+w,y+dp,z+h),P(x,y+dp,z+h)],c[0],'rgba(255,255,255,.35)');}
  var PC=d.createElement('canvas'),pcx=PC.getContext('2d'),pKey='';
  function platform(){var k=W+'x'+H+(dark()?'d':'l');if(k!==pKey){pKey=k;PC.width=cv.width;PC.height=cv.height;var o=cx;cx=pcx;cx.setTransform(DPR,0,0,DPR,0,0);cx.clearRect(0,0,W,H);platformDraw();cx=o;}cx.drawImage(PC,0,0,W,H);}
  function platformDraw(){var e=5.2;
    poly([P(-e,e,0),P(e,e,0),P(e,e,-.35),P(-e,e,-.35)],TH.pl);poly([P(e,-e,0),P(e,e,0),P(e,e,-.35),P(e,-e,-.35)],TH.pr);
    poly([P(-e,-e,0),P(e,-e,0),P(e,e,0),P(-e,e,0)],TH.pt,'rgba(255,255,255,.7)');
    cx.strokeStyle=TH.gr;cx.lineWidth=1;cx.beginPath();for(var i=-4;i<=4;i++){var a=P(i,-e,0),b=P(i,e,0),c=P(-e,i,0),g=P(e,i,0);cx.moveTo(a[0],a[1]);cx.lineTo(b[0],b[1]);cx.moveTo(c[0],c[1]);cx.lineTo(g[0],g[1]);}cx.stroke();}
  function rr(x,y,w,h,r){cx.beginPath();cx.moveTo(x+r,y);cx.arcTo(x+w,y,x+w,y+h,r);cx.arcTo(x+w,y+h,x,y+h,r);cx.arcTo(x,y+h,x,y,r);cx.arcTo(x,y,x+w,y,r);cx.closePath();}
  var MW={};function label(x,y,z,t,kind,al){var p=P(x,y,z),fs=Math.max(9,Math.round(S*.32));cx.font='600 '+fs+'px Sora, sans-serif';var mk=fs+t,w=(MW[mk]||(MW[mk]=cx.measureText(t).width))+fs*1.3,h=fs*1.9;p=[cl(p[0],w/2+4,W-w/2-4),p[1]];
    cx.save();if(al!==undefined)cx.globalAlpha*=al;rr(p[0]-w/2,p[1]-h/2,w,h,h/2);
    cx.fillStyle=kind==='d'?'#0B132B':kind==='o'?'#FF8A00':kind==='g'?'#16a34a':kind==='r'?'#c0392b':kind==='b'?'#0066FF':TH.lb;cx.fill();
    if(!kind){cx.strokeStyle='rgba(0,102,255,.25)';cx.lineWidth=1;cx.stroke();}
    cx.fillStyle=kind?'#fff':TH.li;cx.textAlign='center';cx.textBaseline='middle';cx.fillText(t,p[0],p[1]+.5);cx.restore();}
  function seg3(a,b,pr,col,wd,dash){var p0=P(a[0],a[1],a[2]),p1=P(b[0],b[1],b[2]);cx.save();cx.strokeStyle=col;cx.lineWidth=wd||2;cx.lineCap='round';if(dash)cx.setLineDash(dash);cx.beginPath();cx.moveTo(p0[0],p0[1]);cx.lineTo(p0[0]+(p1[0]-p0[0])*pr,p0[1]+(p1[1]-p0[1])*pr);cx.stroke();cx.restore();}
  function dot(p,r,col,glow){cx.save();if(glow){cx.fillStyle=glow;cx.beginPath();cx.arc(p[0],p[1],r*2.4,0,6.283);cx.fill();}cx.fillStyle=col;cx.beginPath();cx.arc(p[0],p[1],r,0,6.283);cx.fill();cx.restore();}
  function lerp3(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];}
  function ring(x,y,z,rad,col,wd,al){cx.save();cx.globalAlpha*=al;cx.strokeStyle=col;cx.lineWidth=wd;var c=P(x,y,z);cx.beginPath();cx.ellipse(c[0],c[1],rad*S*1.22,rad*S*.705,0,0,6.283);cx.stroke();cx.restore();}

  /* ---- scene 0 · landing zone hub-spoke ---- */
  var SP=[[2.6,-.9,'Prod'],[-.9,2.6,'Non-prod'],[2.6,2.6,'Data'],[-4.2,-.9,'Identity']];
  function s0(u,t){platform();
    var pol=sub(u,.56,.75);if(pol>0){ring(0,0,.02,4.6,'#16a34a',2,pol*.7);ring(0,0,.02,4.6+((t*.6)%1)*.5,'#16a34a',1.5,pol*(1-((t*.6)%1))*.6);}
    for(var i=0;i<SP.length;i++){var a=.16+i*.09,g=eo(sub(u,a,a+.12));if(g<=0)continue;var c=[SP[i][0]+.75,SP[i][1]+.75,.03];
      seg3([0,0,.03],c,g,TH.ln,2.4);
      if(g>=1){for(var k=0;k<2;k++){var q=((t*.55+k*.5+i*.23)%1);dot(P.apply(null,lerp3([0,0,.06],c,q)),2.6,'#FF8A00','rgba(255,138,0,.22)');}}}
    var draw=[];
    for(var j=0;j<SP.length;j++){var a2=.16+j*.09,g2=eo(sub(u,a2,a2+.12));if(g2>0)draw.push({k:SP[j][0]+SP[j][1],f:(function(j,g2){return function(){box(SP[j][0],SP[j][1],1.5,1.5,.9*spring(g2),0,j===3?'s':'b');if(g2>.6)label(SP[j][0]+.75,SP[j][1]+.75,1.55,SP[j][2],null,sub(g2,.6,1));};})(j,g2)});}
    var hg=spring(sub(u,0,.2));draw.push({k:-.5,f:function(){box(-1,-1,2,2,1.25*hg,0,'n');if(hg>.5){var p=P(0,0,1.25*hg);cx.save();cx.globalAlpha*=sub(hg,.5,1);cx.fillStyle='#FF8A00';cx.beginPath();cx.arc(p[0],p[1],S*.18,0,6.283);cx.fill();cx.restore();label(0,0,2.25,'Hub · Azure Firewall','d',sub(hg,.6,1));}}});
    draw.sort(function(a,b){return a.k-b.k;});draw.forEach(function(o){o.f();});
    var mg=W<520?0:eo(sub(u,.42,.6));if(mg>0){label(-5.4,2.4,3.4,'Tenant root',null,mg);seg3([-5.4,2.4,3.1],[-6.1,3.1,2.3],mg,TH.ln,1.5,[3,3]);seg3([-5.4,2.4,3.1],[-4.5,1.5,2.3],mg,TH.ln,1.5,[3,3]);label(-6.3,3.3,2.0,'Platform','b',mg);label(-4.3,1.3,2.0,'Landing zones','b',mg);}
    if(pol>0)label(-3.2,-3.6,.6,'Azure Policy · India-only','g',pol);}

  /* ---- scene 1 · security score rising ---- */
  var RC=['MFA','RDP','Blob','TLS','Defender','Key Vault'];
  function s1(u,t){platform();var items=[];
    for(var i=0;i<6;i++){var ang=-Math.PI*.75+Math.PI/6+i*(Math.PI*2/6),x=Math.cos(ang)*3.5-.45,y=Math.sin(ang)*3.5-.45,fx=sub(u,.14+i*.085,.2+i*.085),up=eo(sub(u,0,.12));
      items.push({k:x+y,x:x,y:y,fx:fx,up:up,i:i});}
    items.push({k:-1,c:1});items.sort(function(a,b){return a.k-b.k;});items.push({g:1});
    var sc=Math.round(52+35*eio(sub(u,.12,.7)));
    items.forEach(function(o){if(o.c){box(-1,-1,2,2,.55,0,'w');return;}if(o.g){var p=P(0,0,.55);
      var gp=P(0,0,4.2),rad=S*1.55,fr=(sc-0)/100;cx.save();cx.lineCap='round';cx.lineWidth=S*.32;cx.strokeStyle=dark()?'rgba(255,255,255,.12)':'rgba(11,59,122,.12)';cx.beginPath();cx.arc(gp[0],gp[1],rad,Math.PI*.75,Math.PI*2.25);cx.stroke();
      cx.strokeStyle=sc<70?'#FF8A00':'#16a34a';cx.beginPath();cx.arc(gp[0],gp[1],rad,Math.PI*.75,Math.PI*.75+Math.PI*1.5*fr);cx.stroke();
      cx.fillStyle=dark()?'#fff':'#0B132B';cx.font='800 '+Math.round(S*.95)+'px Sora, sans-serif';cx.textAlign='center';cx.textBaseline='middle';cx.fillText(sc+'%',gp[0],gp[1]-S*.08);
      cx.font='600 '+Math.max(8,Math.round(S*.26))+'px IBM Plex Mono, monospace';cx.fillStyle=TH.lm;cx.fillText('SECURE SCORE · SAMPLE',gp[0],gp[1]+S*.62);cx.restore();
      cx.save();cx.strokeStyle=TH.ln;cx.setLineDash([3,4]);cx.beginPath();cx.moveTo(p[0],p[1]);cx.lineTo(gp[0],gp[1]+rad);cx.stroke();cx.restore();return;}
      var bump=o.fx>0&&o.fx<1?Math.sin(o.fx*Math.PI)*.35:0;box(o.x,o.y,.9,.9,(.4+bump)*o.up,0,o.fx>=1?'g':'o');
      if(o.fx>0&&o.fx<1){var pp=P(o.x+.45,o.y+.45,.8+o.fx*1.6);cx.save();cx.globalAlpha*=1-o.fx;cx.fillStyle='#16a34a';cx.font='800 '+Math.round(S*.5)+'px Sora';cx.textAlign='center';cx.fillText('✓',pp[0],pp[1]);cx.restore();}
      label(o.x+.45,o.y+.45,1.05,RC[o.i],o.fx>=1?'g':null,o.up);});}

  /* ---- scene 2 · alert -> ticket -> fix ---- */
  function s2(u,t){platform();var bad=u>.1&&u<.68,vx=[-5,-3.6,-2.2,-.8,.6,2.0];
    var noc={x:2.6,y:.6};var nd=[];
    nd.push({k:noc.x+noc.y+2,f:function(){box(noc.x,noc.y,1.8,1.8,1.3,0,'o');label(noc.x+.9,noc.y+.9,2.0,'NOC Mumbai','d');}});
    for(var i=0;i<vx.length;i++){(function(i){var pal=i===3?(bad?'r':(u>=.68?'g':'b')):'b';nd.push({k:vx[i]-2.6,f:function(){box(vx[i],-3.4,1,1,1.05,0,pal);}});})(i);}
    var sc=eo(sub(u,.76,.9));if(sc>0)nd.push({k:2.6-1.6,f:function(){box(2.0,-1.6,1,1,1.05*spring(sc),0,'s');if(sc>.6)label(2.5,-1.1,1.75,'scale-out',null,sub(sc,.6,1));}});
    nd.sort(function(a,b){return a.k-b.k;});nd.forEach(function(o){o.f();});
    if(bad){for(var k=0;k<2;k++){var q=((t*.9+k*.5)%1);ring(-.3,-2.9,.05,.6+q*1.6,'#c0392b',2,1-q);}}
    var path=[[-.3,-2.4,.05],[-.3,1.5,.05],[2.6,1.5,.05]];
    function along(q){var a=path[0],b=path[1],c=path[2];return q<.75?lerp3(a,b,q/.75):lerp3(b,c,(q-.75)/.25);}
    if(u>.22){var g=eo(sub(u,.22,.3));seg3(path[0],path[1],g,TH.ln,2,[5,4]);seg3(path[1],path[2],sub(u,.27,.32),TH.ln,2,[5,4]);}
    var tk=sub(u,.25,.44);if(tk>0&&tk<1){var tp=along(eio(tk));label(tp[0],tp[1],.6,'INC-2041 · P2','r');}
    var fx=sub(u,.5,.66);if(fx>0&&fx<1){var fp=along(1-eio(fx));dot(P(fp[0],fp[1],.4),S*.16,'#16a34a','rgba(22,163,74,.25)');}
    if(u>.08){var cpu=u<.68?97:Math.round(97-56*eo(sub(u,.68,.82)));var bp=P(-.3,-2.9,2.0);var bw=S*2.4,bh=S*.24;cx.save();rr(bp[0]-bw/2,bp[1]-bh/2,bw,bh,bh/2);cx.fillStyle=dark()?'rgba(255,255,255,.12)':'rgba(11,59,122,.12)';cx.fill();rr(bp[0]-bw/2,bp[1]-bh/2,bw*cpu/100,bh,bh/2);cx.fillStyle=cpu>80?'#c0392b':'#16a34a';cx.fill();
      cx.font='600 '+Math.max(9,Math.round(S*.3))+'px IBM Plex Mono, monospace';cx.fillStyle=TH.li;cx.textAlign='center';cx.fillText('CPU '+cpu+'%',bp[0],bp[1]-bh*1.6);cx.restore();}
    if(bad&&u>.1)label(-1.3,-3.9,2.7,'vm-erp-app-02','r');else if(u>=.68)label(-1.3,-3.9,2.7,'vm-erp-app-02 · healthy','g');}

  /* ---- scene 3 · sign-in + conditional access ---- */
  var GX=[-1.9,.1,2.1],GN=['MFA','Device','India'];
  function s3(u,t){platform();var y0=-.4;
    var A=sub(u,.05,.5),B=sub(u,.52,.74),blk=u>.74;
    function tokenPos(q){return [-3.4+q*7.0,y0,.45];}
    var xA=-3.4+eio(A)*7.2,gs=[];for(var i=0;i<3;i++){var gx=GX[i],passA=A>0&&xA>gx+.1;
      var col=(blk&&i===1)?'r':(passA?'g':'k');gs.push({gx:gx,col:col,i:i});}
    seg3([-3.4,y0,.04],[3.8,y0,.04],1,TH.ln,2,[4,5]);
    box(-4.6,-1.1,1.3,1.3,1.2,0,'w');label(-3.95,-.45,1.9,'User',null);
    gs.forEach(function(g){box(g.gx,-1.6,.32,.32,1.6,0,g.col);});
    var tA=A>0&&A<1?tokenPos(eio(A)):null;if(tA)dot(P(tA[0],tA[1],tA[2]),S*.2,'#16a34a','rgba(22,163,74,.25)');
    if(B>0){var stop=-3.4+eio(B)*(GX[1]-.25+3.4);var bo=blk?Math.sin(sub(u,.74,.86)*Math.PI)*-.6:0;var al=blk?1-sub(u,.82,.95):1;cx.save();cx.globalAlpha*=al;dot(P(stop+bo,y0,.45),S*.2,'#c0392b','rgba(192,57,43,.25)');cx.restore();}
    gs.forEach(function(g){box(g.gx,.8,.32,.32,1.6,0,g.col);var a=P(g.gx+.16,-1.44,1.6),b=P(g.gx+.16,.96,1.6);cx.save();cx.strokeStyle=g.col==='g'?'#16a34a':g.col==='r'?'#c0392b':'#a8b6ca';cx.lineWidth=S*.16;cx.lineCap='round';cx.beginPath();cx.moveTo(a[0],a[1]);cx.lineTo(b[0],b[1]);cx.stroke();cx.restore();
      label(g.gx+.16,-.24,2.25,GN[g.i],g.col==='g'?'g':g.col==='r'?'r':null);});
    var app=eo(sub(u,.4,.5));box(3.5,-1.3,1.7,1.7,1.25,0,app>0?'b':'k');label(4.35,-.45,2.0,u>.45?'ERP app · token issued':'ERP app',u>.45?'b':null);
    if(blk)label(-1.4,-3.4,2.6,'Blocked · unknown device','r',sub(u,.74,.8));}

  /* ---- scene 4 · region DR arcs ---- */
  var RG={mum:[-5.2,.4],pun:[-2.9,.7],che:[2.9,-2.0]};
  function s4(u,t){platform();var drill=u>.6,ok=u>.74;
    function pad(p,w,pal){box(p[0],p[1],w,w,.18,0,pal);}
    pad(RG.mum,1.4,'w');pad(RG.pun,2.2,'w');pad(RG.che,2.2,'w');
    var arc=function(a,b,h,q0,q1,col,wd){var pts=[];for(var i=0;i<=24;i++){var q=q0+(q1-q0)*i/24,p=lerp3([a[0],a[1],.2],[b[0],b[1],.2],q);p[2]+=Math.sin(q*Math.PI)*h;pts.push(P(p[0],p[1],p[2]));}
      cx.save();cx.strokeStyle=col;cx.lineWidth=wd;cx.lineCap='round';cx.beginPath();cx.moveTo(pts[0][0],pts[0][1]);for(var k=1;k<pts.length;k++)cx.lineTo(pts[k][0],pts[k][1]);cx.stroke();cx.restore();
      return function(q){var p=lerp3([a[0],a[1],.2],[b[0],b[1],.2],q);p[2]+=Math.sin(q*Math.PI)*h;return P(p[0],p[1],p[2]);};};
    var pc=[RG.pun[0]+1.1,RG.pun[1]+1.1],cc=[RG.che[0]+1.1,RG.che[1]+1.1],mc=[RG.mum[0]+.7,RG.mum[1]+.7];
    var ga=eo(sub(u,.15,.3));if(ga>0){var f=arc(pc,cc,3.2,0,ga,drill?'rgba(255,138,0,.85)':TH.ln,2.4);if(ga>=1){for(var k=0;k<4;k++){var q=(t*.45+k*.25)%1;dot(f(drill?1-q:q),2.6,drill?'#16a34a':'#FF8A00',drill?'rgba(22,163,74,.22)':'rgba(255,138,0,.22)');}}}
    var gm=eo(sub(u,.08,.2));if(gm>0){var f2=arc(mc,pc,1.2,0,gm,TH.ln,1.6);if(gm>=1)dot(f2((t*.7)%1),2,'#38BDF8');}
    var az=[[RG.pun[0]+.2,RG.pun[1]+.2],[RG.pun[0]+1.2,RG.pun[1]+.2],[RG.pun[0]+.7,RG.pun[1]+1.2]];
    az.forEach(function(p,i){var g=spring(sub(u,i*.05,.14+i*.05));box(p[0],p[1],.75,.75,.95*g,.18,drill&&!ok?'k':(drill?'k':'b'));});
    var dr=[[RG.che[0]+.3,RG.che[1]+.4],[RG.che[0]+1.2,RG.che[1]+.6]];
    dr.forEach(function(p,i){var on=ok?'g':drill?'o':'k';box(p[0],p[1],.75,.75,ok?1.0:.6,.18,on);});
    box(RG.mum[0]+.35,RG.mum[1]+.35,.7,.7,.6*spring(sub(u,.05,.18)),.18,'s');
    label(RG.pun[0]+1.1,RG.pun[1]+1.1,2.0,'Central India · Pune',drill&&!ok?'o':'b');
    label(RG.che[0]+1.1,RG.che[1]+1.1,1.9,ok?'South India · Chennai · live':'South India · Chennai',ok?'g':null);
    label(RG.mum[0]+.7,RG.mum[1]+.7,1.35,'West India · Mumbai',null);
    if(drill)label(-1.6,-3.4,2.2,ok?'DR drill passed · sample':'Test failover running…',ok?'g':'o',sub(u,.6,.66));}

  var SC=[
    {k:'01 · Landing zone',t:'Hub-spoke landing zone drawing itself',tag:'LANDING ZONE',draw:s0,
      kp:[['Subscriptions',0,6],['Policies assigned',0,42],['Spokes peered',0,4]],
      log:[['i','MG','mg-platform & mg-landingzones created',.05],['ok','POLICY','Allowed locations → Central & South India',.2],['i','NET','hub-vnet 10.0.0.0/16 · Azure Firewall up',.32],['ok','PEER','spoke-prod ⇄ hub peered',.46],['ok','SUB','sub-erp-prod vended from template',.62]]},
    {k:'02 · Defender for Cloud',t:'Security score rising as fixes land',tag:'SECURITY',draw:s1,
      kp:[['Secure score',52,87,'%'],['Open recs',24,6],['Admin MFA',61,100,'%']],
      log:[['w','REC','24 recommendations open',.05],['ok','FIX','MFA enforced for admin roles',.22],['ok','FIX','RDP 3389 closed to the internet',.36],['ok','FIX','Public blob access disabled',.5],['ok','SCORE','Secure score 87% · sample',.7]]},
    {k:'03 · Azure Monitor',t:'Alert → ticket → fix, around the clock',tag:'INCIDENT',draw:s2,
      kp:[['CPU · app-02',97,41,'%'],['Time to ack',0,4,' min'],['Ticket',0,0,'',function(u){return u<.25?'—':u<.7?'P2 open':'Resolved';}]],
      log:[['e','ALERT','cpu > 90% · vm-erp-app-02',.1],['w','INC','INC-2041 opened · P2',.25],['i','NOC','Mumbai NOC acknowledged',.42],['i','RUN','runbook: recycle app pool',.55],['ok','OK','Resolved · CPU 41% · RCA logged',.72]]},
    {k:'04 · Entra ID',t:'Conditional Access checks every sign-in',tag:'IDENTITY',draw:s3,
      kp:[['Sign-ins checked',0,1284],['Risky blocked',0,1],['CA policies',0,3]],
      log:[['i','SIGNIN','asha@ · Mumbai · managed laptop',.06],['ok','CA','MFA ✓ device ✓ location ✓',.35],['ok','ALLOW','Token issued → ERP app',.5],['e','BLOCK','Unknown device · outside India',.74],['w','RISK','Risky sign-in sent to SOC',.84]]},
    {k:'05 · Site Recovery',t:'Pune → Chennai replication & DR drill',tag:'BACKUP & DR',draw:s4,
      kp:[['Replicated VMs',0,24],['RPO target',0,0,'',function(){return '15 min*';}],['DR drill',0,0,'',function(u){return u<.6?'Scheduled':u<.74?'Running':'Passed';}]],
      log:[['i','ASR','Site Recovery: Pune → Chennai',.08],['ok','SYNC','24 VMs replicating · sample',.3],['i','DRILL','Test failover started',.6],['ok','UP','Chennai copy booted · checks pass',.76],['ok','DONE','Drill report filed',.88]]}
  ];
  var DUR=5.5,cur=0,prev=-1,st=0,tr=1,paused=false,logN=0,uiT=0;
  var capK=$('#azCapK'),capT=$('#azCapT'),logL=$('#azLogL'),logTag=$('#azLogTag'),dots=$$('#azDots button'),kv=[$('#azK0'),$('#azK1'),$('#azK2')],kl=[$('#azK0l'),$('#azK1l'),$('#azK2l')];
  function fmt(n){return n>=1000?n.toLocaleString('en-IN'):String(n);}
  function setUI(u){var s=SC[cur];for(var i=0;i<3;i++){var k=s.kp[i],txt;if(k[4])txt=k[4](u);else{var v=Math.round(k[1]+(k[2]-k[1])*eo(sub(u,.06,.72)));txt=fmt(v)+(k[3]||'');}if(kv[i].textContent!==txt)kv[i].textContent=txt;}
    while(logN<s.log.length&&u>=s.log[logN][3]){var L=s.log[logN],li=d.createElement('li');li.innerHTML='<i class="'+L[0]+'">'+L[1]+'</i><span>'+L[2]+'</span>';logL.appendChild(li);while(logL.children.length>4)logL.removeChild(logL.firstChild);logN++;}}
  function enter(i){prev=cur;cur=i;st=0;tr=0;logN=0;logL.innerHTML='';var s=SC[i];capK.textContent=s.k;capT.textContent=s.t;logTag.textContent=s.tag;for(var k=0;k<3;k++)kl[k].textContent=s.kp[k][0];
    dots.forEach(function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-selected',j===i);if(j!==i)b.style.setProperty('--p',0);});setUI(0);}
  function drawScene(i,u,al,scl,dy){cx.save();cx.globalAlpha=al;cx.translate(W/2,H/2+dy);cx.scale(scl,scl);cx.translate(-W/2,-H/2);SC[i].draw(u,T);cx.restore();}
  function render(){TH=th();cx.clearRect(0,0,W,H);
    if(tr<1&&prev>=0){var p=eio(tr);drawScene(prev,1,1-p,1+.07*p,-10*p);drawScene(cur,st/DUR,p,.93+.07*p,12*(1-p));}
    else drawScene(cur,Math.min(1,st/DUR),1,1,0);}
  size();addEventListener('resize',function(){size();render();});d.addEventListener('xh:theme',render);
  dots.forEach(function(b,j){b.addEventListener('click',function(){if(j!==cur){enter(j);if(R){st=DUR;tr=1;setUI(1);render();}}});
    b.addEventListener('keydown',function(e){if(e.key==='ArrowRight'||e.key==='ArrowLeft'){e.preventDefault();var n=(cur+(e.key==='ArrowRight'?1:4))%5;enter(n);dots[n].focus();if(R){st=DUR;tr=1;setUI(1);render();}}});});
  slab.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')paused=true;});
  slab.addEventListener('pointerleave',function(){paused=false;});
  var sx=null,sy=0;slab.addEventListener('pointerdown',function(e){if(e.pointerType!=='mouse'){sx=e.clientX;sy=e.clientY;}});
  slab.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){enter((cur+(dx<0?1:4))%5);if(R){st=DUR;tr=1;setUI(1);render();}}});
  slab.addEventListener('touchstart',function(e){var t0=e.touches[0];sx=t0.clientX;sy=t0.clientY;},{passive:true});
  slab.addEventListener('touchend',function(e){if(sx===null)return;var t0=e.changedTouches[0],dx=t0.clientX-sx,dy=t0.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))enter((cur+(dx<0?1:4))%5);},{passive:true});
  enter(0);prev=-1;tr=1;
  if(R){st=DUR;setUI(1);render();d.addEventListener('click',function(e){if(e.target.closest('#xhTheme'))setTimeout(render,50);});}
  else addTask($('#azHero'),function(dt){if(!paused)st+=dt;if(tr<1)tr=Math.min(1,tr+dt/.9);
    if(st>=DUR+.0){enter((cur+1)%5);}
    render();uiT+=dt;if(uiT>.08){uiT=0;setUI(Math.min(1,st/DUR));dots[cur].style.setProperty('--p',Math.min(1,st/DUR).toFixed(2));}});
}

/* ---------------- sticky sub-nav active state ---------------- */
var subA=$$('#azSub a'),track=$('#azSub .tr');
if(subA.length&&'IntersectionObserver' in window){var vis={};
  var io=new IntersectionObserver(function(es){es.forEach(function(e){vis[e.target.id]=e.isIntersecting?e.intersectionRatio:0;});
    var best=null,bv=0;subA.forEach(function(a){var id=a.getAttribute('href').slice(1);if((vis[id]||0)>bv){bv=vis[id];best=a;}});
    if(best&&!best.classList.contains('on')){subA.forEach(function(a){a.classList.toggle('on',a===best);});var l=best.offsetLeft-track.clientWidth/2+best.clientWidth/2;track.scrollTo({left:l,behavior:R?'auto':'smooth'});}},{threshold:[0,.15,.35,.6],rootMargin:'-120px 0px -35% 0px'});
  subA.forEach(function(a){var s=$(a.getAttribute('href'));if(s)io.observe(s);});}

/* ---------------- kinetic headings ---------------- */
$$('.az-kin').forEach(function(h){var n=0;
  function split(el){Array.prototype.slice.call(el.childNodes).forEach(function(c){if(c.nodeType===3){var f=d.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(w){if(!w)return;if(/^\s+$/.test(w)){f.appendChild(d.createTextNode(w));return;}var s=d.createElement('span');s.className='w';s.textContent=w;s.style.transitionDelay=(n++*45)+'ms';f.appendChild(s);});el.replaceChild(f,c);}else if(c.nodeType===1)split(c);});}
  split(h);XH.whenVisible(h,function(v){if(v)h.classList.add('in');});});

/* ---------------- magnetic CTAs + tilt cards ---------------- */
if(XH.fine&&!R){$$('.az-mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.28)+'px)';});b.addEventListener('pointerleave',function(){b.style.transform='';});});
  $$('.az-tl').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='rotateY('+(x*6)+'deg) rotateX('+(-y*6)+'deg) translateY(-4px)';});c.addEventListener('pointerleave',function(){c.style.transform='';});});}

/* ---------------- what we manage: family tabs ---------------- */
var FAM=[
  {n:'Compute',p:'Virtual machines and the platforms around them — sized, patched, backed up and watched.',c:[['server','Virtual Machines','Windows Server & Linux VMs, VM Scale Sets, availability zones.','Update Manager · Azure Backup'],['monitor','Azure Virtual Desktop','Host pools, scaling plans, FSLogix profiles, image updates.','for branch & remote teams'],['hex','AKS','Managed Kubernetes clusters, node pool upgrades, container insights.','upgrade cadence agreed'],['cloud','App Service','Web apps & APIs, deployment slots, autoscale rules, TLS certificates.','PaaS · less patching'],['zap','Functions & Container Apps','Event-driven and serverless workloads with alerting on failures.','consumption watched'],['cpu','Dedicated Host & reservations','Licensing-sensitive workloads and steady VMs on commitments.','FinOps reviewed']]},
  {n:'Data',p:'Databases and storage where your business records live — protected first, tuned second.',c:[['dns','Azure SQL & SQL MI','Elastic pools, geo-replication, long-term backup retention, query alerts.','PITR tested'],['dns','PostgreSQL & MySQL','Flexible servers, HA, maintenance windows, slow-query review.','open-source DBs'],['disk','Storage accounts','Blob, Files and Queues — lifecycle tiers, soft delete, private endpoints.','cool/archive tiers'],['boxes','Cosmos DB','Throughput and RU monitoring, backup policy, regional settings.','RU spend watched'],['cloud-up','Azure Backup vaults','Policies per workload, immutable vaults where needed, restore drills.','daily job checks'],['chart','Analytics','Synapse, Data Factory pipelines and Fabric capacities, failure alerts.','pipeline monitoring']]},
  {n:'Networking',p:'The roads between your workloads, offices and users — segmented and logged.',c:[['network','Virtual networks','Hub-spoke or Virtual WAN, peering, NSGs, route tables, IP plans.','landing zone'],['shield','Azure Firewall','Rule collections, threat-intel mode, central logging to Log Analytics.','change-controlled'],['globe','App Gateway & Front Door','WAF policies, TLS, health probes and global routing.','OWASP rules tuned'],['link','VPN & ExpressRoute','Site-to-site VPN to branches, ExpressRoute circuits, gateway health.','office ⇄ Azure'],['dns','Azure DNS & Private DNS','Zones, private endpoint resolution, record change control.','no public leaks'],['lock','Private endpoints & DDoS','Private access to PaaS, DDoS Protection plans where justified.','attack surface ↓']]},
  {n:'Identity & security',p:'Who can get in, from where, and what they can touch — reviewed every month.',c:[['user-check','Microsoft Entra ID','MFA, Conditional Access, guest access, sign-in log review.','Entra P1/P2'],['key','PIM & RBAC','Least-privilege roles, just-in-time admin, access reviews.','admin rights ↓'],['shield-check','Defender for Cloud','Secure score, recommendations, Defender plans for servers & SQL.','monthly posture'],['lock','Key Vault','Secrets, keys and certificates, rotation reminders, purge protection.','no secrets in code'],['eye','Microsoft Sentinel','Optional 24×7 SIEM/SOAR run by our SOC.','Managed Sentinel'],['scale','Azure Policy','Guardrails and regulatory compliance views per subscription.','audit evidence']]},
  {n:'Management',p:'The tooling we use to run your estate — set up in your tenant, visible to you.',c:[['activity','Azure Monitor','Metrics, alerts, action groups, availability tests and workbooks.','alert tuning'],['search','Log Analytics','Central workspace, KQL queries, retention sized for CERT-In.','180-day logs'],['refresh','Update Manager','Patch assessment and schedules for Azure and Arc servers.','ring deployment'],['repeat','Site Recovery','VM replication to a second region and test failovers.','Pune → Chennai'],['link','Azure Arc','On-prem and other-cloud servers under the same controls.','hybrid'],['tag','Cost Management','Budgets, anomaly alerts, tag reports, Advisor recommendations.','FinOps']]},
  {n:'Apps & AI',p:'Application and AI services — governed with the same guardrails as the rest.',c:[['brain','Azure AI services','Azure OpenAI and AI services deployments, quotas and content filters.','India data residency checked'],['code','DevOps pipelines','Azure DevOps or GitHub Actions deploying to your landing zones.','IaC templates'],['boxes','API Management','Gateways, policies and developer portals for partner APIs.','rate limits'],['mail','Logic Apps & Service Bus','Integration workflows and queues with failure alerts.','dead-letter checks'],['robot','Bots & automation','Automation runbooks and scheduled tasks under change control.','runbooks'],['layers','Marketplace apps','Third-party images and SaaS from Azure Marketplace, billed through us.','one invoice']]}
];
var ft=$('#azFt'),fp=$('#azFp'),fu=$('#azFtU');
function famShow(i){var f=FAM[i];if(!fp)return;
  fp.innerHTML='<div class="fp-h"><b>'+f.n+'</b><p>'+f.p+'</p></div><div class="fp-g">'+f.c.map(function(c,k){return '<div class="fc" style="animation-delay:'+(k*60)+'ms"><i>'+ICON(c[0])+'</i><b>'+c[1]+'</b><span>'+c[2]+'</span><em>'+c[3]+'</em></div>';}).join('')+'</div>';
  $$('button',ft).forEach(function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-selected',j===i);if(j===i&&fu){fu.style.transform='translateY('+(b.offsetTop-6)+'px)';fu.style.height=b.offsetHeight+'px';}});}
var ICONS={server:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',monitor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',hex:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8.5 5v10L12 22l-8.5-5V7z"/></svg>',cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>',cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',dns:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>',disk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',boxes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3l5 3-5 3-5-3 5-3zM17 3l5 3-5 3-5-3 5-3zM12 12l5 3-5 3-5-3 5-3z"/><path d="M2 6v5l5 3M22 6v5l-5 3M7 15v4l5 3 5-3v-4"/></svg>','cloud-up':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9"/><path d="M12 12v8M9 15l3-3 3 3"/></svg>',chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>',network:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>','user-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>',key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/></svg>','shield-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',activity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',repeat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3"/></svg>',tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',robot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>',layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>'};
function ICON(n){return ICONS[n]||'';}
if(ft){ft.addEventListener('click',function(e){var b=e.target.closest('button[data-f]');if(b)famShow(+b.getAttribute('data-f'));});famShow(0);addEventListener('resize',function(){var b=$('button.on',ft);if(b&&fu){fu.style.transform='translateY('+(b.offsetTop-6)+'px)';fu.style.height=b.offsetHeight+'px';}});}

/* ---------------- lifecycle loop ---------------- */
var life=$('#azLife'),lp=$('#azLp');
if(life&&lp){var LEN=lp.getTotalLength(),ld=$('#azLdot'),ld2=$('#azLdot2'),lst=$$('.lf-st',life),FR=[0,.2,.42,.58,.8],lcur=-1;
  function lifeAt(p){var pt=lp.getPointAtLength(p*LEN);ld.setAttribute('cx',pt.x);ld.setAttribute('cy',pt.y);ld2.setAttribute('cx',pt.x);ld2.setAttribute('cy',pt.y);
    var a=0;for(var i=0;i<FR.length;i++)if(p>=FR[i])a=i;if(a!==lcur){lcur=a;lst.forEach(function(s,j){s.classList.toggle('on',j===a);});}}
  if(R)lifeAt(0);else{XH.whenVisible(life,function(v){life.classList.toggle('run',v);});addTask(life,function(dt,t){lifeAt((t/14)%1);});}}

/* ---------------- 24x7 dial + flow ---------------- */
var dial=$('#azDial');
if(dial){var NS='http://www.w3.org/2000/svg',tk=$('#azTicks'),bl=$('#azBlips'),hand=$('#azHand'),h='';
  for(var i=0;i<24;i++){var a=i/24*Math.PI*2-Math.PI/2,r1=i%3?124:118;h+='<line x1="'+(160+Math.cos(a)*r1)+'" y1="'+(160+Math.sin(a)*r1)+'" x2="'+(160+Math.cos(a)*130)+'" y2="'+(160+Math.sin(a)*130)+'"/>';if(i%3===0)h+='<text x="'+(160+Math.cos(a)*144)+'" y="'+(160+Math.sin(a)*144)+'">'+('0'+i).slice(-2)+'</text>';}
  var pa=1/24*Math.PI*2-Math.PI/2,pb=3/24*Math.PI*2-Math.PI/2;h+='<path d="M'+(160+Math.cos(pa)*130)+' '+(160+Math.sin(pa)*130)+'A130 130 0 0 1 '+(160+Math.cos(pb)*130)+' '+(160+Math.sin(pb)*130)+'" fill="none" stroke="#0066FF" stroke-width="6" stroke-linecap="round" opacity=".8"/>';
  tk.innerHTML=h;var BH=[2.5,6.2,9.8,13.4,17,20.6,23.2],bh='';BH.forEach(function(x){var a=x/24*Math.PI*2-Math.PI/2;bh+='<circle cx="'+(160+Math.cos(a)*104)+'" cy="'+(160+Math.sin(a)*104)+'" r="6" fill="#16a34a"/>';});bl.innerHTML=bh;
  var bc=$$('circle',bl),fl=$$('#azFlow span'),fe=$$('#azFlow em'),fk=-1;
  function dialAt(t){var deg=(t/16*360)%360;hand.setAttribute('transform','rotate('+deg+' 160 160)');
    BH.forEach(function(x,i){var b=x/24*360,dl=(deg-b+360)%360,c=bc[i];var red=dl<55;c.setAttribute('fill',red?'#c0392b':'#16a34a');c.setAttribute('r',dl<8?6+(8-dl)*.6:6);c.setAttribute('opacity',dl>300?.35:1);});
    var k=Math.floor(t/1.1)%7;if(k!==fk){fk=k;fl.forEach(function(s,j){s.classList.toggle('on',j<=k&&k<5||(k>=5&&j===4));});fe.forEach(function(e,j){e.classList.toggle('on',j<k&&k<5||k>=5);});}}
  if(R)dialAt(4.5);else addTask(dial,function(dt,t){dialAt(t);});}

/* ---------------- FinOps levers chart ---------------- */
var fsvg=$('#azFinSvg');
if(fsvg){var CAT=[['Compute VMs',210000],['Non-prod',60000],['Databases',70000],['Storage',35000],['Network',25000]],lev=[1,1,1,1,1,1],cur2=CAT.map(function(){return {b:0,a:0};});
  function after(){var m=[1,1,1,1,1];if(lev[0]){m[0]*=.85;m[2]*=.92;}if(lev[1])m[1]*=.45;if(lev[2])m[0]*=.82;if(lev[3]){m[2]*=.75;m[0]*=.95;}if(lev[4])m[3]*=.7;if(lev[5]){m=m.map(function(x){return x*.98;});m[4]*=.9;}return CAT.map(function(c,i){return Math.round(c[1]*m[i]/1000)*1000;});}
  var bx=60,bw=82,gap=4,base=260,top=24,max=220000,els=[],sh='';
  for(var g=0;g<=4;g++){var yy=base-(base-top)*g/4;sh+='<line class="gl" x1="40" x2="515" y1="'+yy+'" y2="'+yy+'"/><text x="34" y="'+(yy+3)+'" text-anchor="end">'+(g*55)+'k</text>';}
  CAT.forEach(function(c,i){var x=bx+i*(bw+12);sh+='<rect data-r="b'+i+'" x="'+x+'" width="'+(bw/2-gap)+'" y="'+base+'" height="0" rx="5" fill="#9db7da"/><rect data-r="s'+i+'" x="'+(x+bw/2)+'" width="'+(bw/2-gap)+'" y="'+base+'" height="0" rx="5" fill="#FF8A00" opacity=".9"/><rect data-r="a'+i+'" x="'+(x+bw/2)+'" width="'+(bw/2-gap)+'" y="'+base+'" height="0" rx="5" fill="#0066FF"/><text class="v" data-r="t'+i+'" x="'+(x+bw/2)+'" y="'+(base-8)+'"></text><text x="'+(x+bw/2-2)+'" y="'+(base+18)+'" text-anchor="middle">'+c[0]+'</text>';});
  fsvg.innerHTML=sh;var q=function(s){return fsvg.querySelector('[data-r="'+s+'"]');};
  var tgt=after(),finT=$('#azFinT'),fv=false;
  function finDraw(snap){var A=tgt,tb=0,ta=0;CAT.forEach(function(c,i){var o=cur2[i];if(snap){o.b=c[1];o.a=A[i];}else{o.b+=(c[1]-o.b)*.12;o.a+=(A[i]-o.a)*.12;}
      var hb=(base-top)*o.b/max,ha=(base-top)*o.a/max;q('b'+i).setAttribute('y',base-hb);q('b'+i).setAttribute('height',hb);q('a'+i).setAttribute('y',base-ha);q('a'+i).setAttribute('height',ha);q('s'+i).setAttribute('y',base-hb);q('s'+i).setAttribute('height',Math.max(0,hb-ha));
      var t=q('t'+i);t.setAttribute('y',base-hb-8);var sv=Math.round((c[1]-A[i])/c[1]*100);t.textContent=sv>0?'−'+sv+'%':'';tb+=c[1];ta+=A[i];});
    finT.textContent=inr(tb)+' → '+inr(ta)+' · −'+Math.round((tb-ta)/tb*100)+'%';}
  $('#azLev').addEventListener('click',function(e){var b=e.target.closest('button[data-l]');if(!b)return;var i=+b.getAttribute('data-l');lev[i]=lev[i]?0:1;b.classList.toggle('on',!!lev[i]);tgt=after();if(R)finDraw(true);});
  if(R)finDraw(true);else{finT.textContent=inr(400000)+' → '+inr(tgt.reduce(function(a,b){return a+b;},0));addTask(fsvg,function(){finDraw(false);});}}

/* ---------------- plans model toggle ---------------- */
var model=$('#azModel'),cModel=$('#cModel');
function setModel(m,from){$$('#azPlans .amt,#azPlans .cap2').forEach(function(el){var v=el.getAttribute('data-'+m);if(!v)return;if(R){el.textContent=v;return;}el.classList.add('sw');setTimeout(function(){el.textContent=v;el.classList.remove('sw');},180);});
  if(from!=='plans'&&model)selectSeg(model,m);if(from!=='cfg'&&cModel){selectSeg(cModel,m);calc();}}
function selectSeg(seg,v){$$('button',seg).forEach(function(b){var on=b.getAttribute('data-v')===String(v);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});seg.dataset.value=String(v);}
if(model)model.addEventListener('change',function(){setModel(model.dataset.value,'plans');});
$$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){selectSeg($('#cPlan'),b.getAttribute('data-pick'));calc();var c=$('#configure');window.scrollTo({top:c.getBoundingClientRect().top+scrollY-130,behavior:R?'auto':'smooth'});XH.flash&&XH.flash($('.cf-out'));});});

/* ---------------- configurator ---------------- */
var PR={ess:{n:'Essential',p:14999,max:10},pro:{n:'Professional',p:39999,max:40},ent:{n:'Enterprise',p:0,max:9999}},ASM=49999,LZ=149999,MIN=14999;
function c99(x){return Math.ceil(x/100)*100-1;}
function sv(id){var s=$(id);return s?s.dataset.value:'';}
var cRes=$('#cRes'),oRows=$('#oRows'),oAdd=$('#oAdd'),last=null;
function calc(){if(!oRows)return;var plan=sv('#cPlan')||'pro',res=cl(parseInt(cRes.value,10)||1,1,500),env=+sv('#cEnv')||1,spend=+sv('#cSpend')||300000,m=sv('#cModel')||'flat',asm=$('#cAsm').checked,lz=$('#cLz').checked,mig=$('#cMig').checked;
  var P0=PR[plan],fee=plan==='ent'?0:(m==='pct'?Math.max(MIN,c99(spend*.08)):P0.p),rows=[],hint='';
  if(plan==='ent')rows.push(['Managed Azure · Enterprise','Quote']);
  else rows.push(['Managed Azure · '+P0.n+(m==='pct'?' (8% of ~'+inr(spend)+' spend)':' (up to '+P0.max+' resources)'),inr(fee)+'/mo']);
  rows.push(['Resources · environments',res+' · '+(env===1?'Prod':env===2?'Prod + UAT':'Prod + UAT + Dev')]);
  if(asm)rows.push(['Cloud readiness assessment · one-time',inr(ASM)]);if(lz)rows.push(['Landing zone setup · one-time',inr(LZ)]);if(mig)rows.push(['Migration waves','Quote']);
  rows.push(['Azure consumption','at actuals*']);
  var subT=fee+(asm?ASM:0)+(lz?LZ:0);
  if(plan!=='ent'&&m==='flat'&&res>P0.max)hint=(plan==='ess'?'Essential covers up to 10 resources — Professional fits '+res+'.':'Over 40 resources is usually Enterprise — we\'ll quote it.')+' <a href="#" data-sw="'+(plan==='ess'&&res<=40?'pro':'ent')+'">Switch</a>';
  else if(plan==='ent')hint='Enterprise is scoped with you: named engineer, posture management, DR drills and FinOps. Use Get quotation.';
  else if(env===3)hint='Three environments → we keep Dev, UAT and Prod in separate subscriptions under your landing zone.';
  else if(m==='pct')hint='8% of monthly Azure spend, minimum ₹14,999 — suits estates that change often.*';
  else hint='Professional adds 24×7 incident response, patching and backup management.';
  if(plan==='ess'&&m==='flat'&&res<=10)hint='Essential: monitoring, alerting and a monthly report for up to 10 resources.';
  var key=JSON.stringify([plan,fee,rows.length,asm,lz,mig,env,res]);if(key===last)return;last=key;
  oRows.innerHTML=rows.map(function(r,i){return '<div style="animation-delay:'+(i*40)+'ms"><span>'+r[0]+'</span><b>'+r[1]+'</b></div>';}).join('');
  $('#oPlan').textContent=P0.n+(m==='pct'&&plan!=='ent'?' · % of spend':'');
  if(plan==='ent'&&!(asm||lz)){$('#oSub').textContent='Quote';$('#oGst').textContent='—';$('#oTot').textContent='Quote';}
  else{$('#oSub').textContent=inr(subT)+(plan==='ent'?' + quote':'');$('#oGst').textContent=inr(subT*.18);$('#oTot').textContent=inr(subT*1.18);}
  d.querySelector('.co-t .tt span').textContent=(asm||lz)?'First month total':'Monthly total';
  $('#oBar').style.width=cl(subT/260000*100,4,100)+'%';
  $('#cHint').innerHTML=hint;
  oAdd.disabled=(plan==='ent'&&!(asm||lz));
  $('#oQuote').setAttribute('data-topic','Managed Azure — quotation');
  calc.state={plan:plan,fee:fee,m:m,asm:asm,lz:lz,res:res,env:env,spend:spend};}
if(oRows){['#cPlan','#cEnv','#cSpend'].forEach(function(s){$(s).addEventListener('change',calc);});
  $('#cModel').addEventListener('change',function(){setModel(cModel.dataset.value,'cfg');calc();});
  cRes.addEventListener('input',calc);cRes.addEventListener('change',calc);['#cAsm','#cLz','#cMig'].forEach(function(s){$(s).addEventListener('change',calc);});
  $('#cHint').addEventListener('click',function(e){var a=e.target.closest('a[data-sw]');if(!a)return;e.preventDefault();selectSeg($('#cPlan'),a.getAttribute('data-sw'));calc();});
  oAdd.addEventListener('click',function(){var s=calc.state;if(!s)return;
    if(s.plan!=='ent')XH.cart.add({key:'maz-'+s.plan+'-'+s.m+'-'+s.fee,name:'Managed Azure — '+PR[s.plan].n,sub:(s.m==='pct'?'8% of spend, min ₹14,999':'up to '+PR[s.plan].max+' resources')+' · per month · Azure usage at actuals',price:s.fee,qty:1});
    if(s.asm)XH.cart.add({key:'maz-asm',name:'Azure cloud readiness assessment',sub:'one-time',price:ASM,qty:1});
    if(s.lz)XH.cart.add({key:'maz-lz',name:'Azure landing zone setup',sub:'one-time',price:LZ,qty:1});});
  calc();}

/* ---------------- tool tabs ---------------- */
var tt=$('#tools .az-tt'),ttu=$('#azTtU');
function ttMove(){var b=$('button.on',tt);if(b&&ttu){ttu.style.width=b.offsetWidth+'px';ttu.style.height=b.offsetHeight+'px';ttu.style.transform='translate('+(b.offsetLeft-5)+'px,'+(b.offsetTop-5)+'px)';}}
if(tt){tt.addEventListener('click',function(e){var b=e.target.closest('button[data-t]');if(!b)return;$$('button',tt).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b);});
  $$('#tools .az-tool').forEach(function(p){p.classList.toggle('on',p.getAttribute('data-tp')===b.getAttribute('data-t'));});ttMove();if(b.getAttribute('data-t')==='plan')planR();else lzR();});
  ttMove();addEventListener('resize',ttMove);setTimeout(ttMove,600);}

/* ---------------- landing-zone builder ---------------- */
var lsvg=$('#lSvg');
function esc(s){return String(s).replace(/&amp;/g,'&').replace(/&/g,'&amp;').replace(/</g,'&lt;');}
function lzState(){return {n:cl(parseInt($('#lSubs').value,10)||1,1,8),topo:sv('#lTopo')||'hub',reg:+(sv('#lReg')||2),con:sv('#lCon')||'vpn',pol:$$('#lPol input').filter(function(i){return i.checked;}).map(function(i){return i.getAttribute('data-n').replace(/&amp;/g,'&');})};}
function lzR(){if(!lsvg)return;var s=lzState(),o='',dl=0;
  function nd(x,y,w,h,cls,t,t2){var dly=(dl++*45)+'ms';return '<g class="nd" style="animation-delay:'+dly+'"><rect class="bx '+(cls||'')+'" x="'+(x-w/2)+'" y="'+(y-h/2)+'" width="'+w+'" height="'+h+'" rx="9"/><text class="'+(/[bon]/.test(cls||'')&&cls!=='s'?'w':'')+'" x="'+x+'" y="'+(t2?y-6:y)+'">'+t+'</text>'+(t2?'<text class="m'+(/[bon]/.test(cls||'')&&cls!=='s'?' w':'')+'" x="'+x+'" y="'+(y+8)+'"'+(/[bon]/.test(cls||'')&&cls!=='s'?' style="fill:#dbe7fb"':'')+'>'+t2+'</text>':'')+'</g>';}
  function ln(x1,y1,x2,y2,cls){var l=Math.round(Math.hypot(x2-x1,y2-y1))+2;return '<path class="ln '+(cls||'')+'" style="--l:'+l+';animation-delay:'+(dl*45)+'ms" d="M'+x1+' '+y1+' L'+x2+' '+y2+'"/>';}
  function el(x1,y1,x2,y2,cls){var my=(y1+y2)/2;var l=Math.round(Math.abs(y2-y1)+Math.abs(x2-x1))+4;return '<path class="ln '+(cls||'')+'" style="--l:'+l+';animation-delay:'+(dl*45)+'ms" d="M'+x1+' '+y1+' V'+my+' H'+x2+' V'+y2+'"/>';}
  o+='<text class="h" x="16" y="18">MANAGEMENT GROUPS</text><text class="h" x="340" y="18">NETWORK · CENTRAL INDIA (PUNE)</text>';
  o+=el(160,52,85,92)+el(160,52,235,92);o+=nd(160,40,140,28,'n','Tenant root group');
  o+=nd(85,100,118,28,'b','Platform')+nd(235,100,118,28,'b','Landing zones');
  var px=[32,88,144],pn=['Identity','Mgmt','Connect'];px.forEach(function(x,i){o+=el(85,114,x,150);});px.forEach(function(x,i){o+=nd(x,160,52,24,'',pn[i]);});
  o+=el(235,114,212,150)+el(235,114,276,150);o+=nd(212,160,56,24,'','Corp')+nd(276,160,56,24,'','Online');
  for(var i=0;i<s.n;i++){var col=i%2,row=Math.floor(i/2),x=col?276:212,y=200+row*30;o+=ln(x,172+row*30,x,y-11);o+=nd(x,y,62,22,'s','sub-app-'+(i+1));}
  var py=Math.max(330,200+Math.ceil(s.n/2)*30+22);o+='<text class="h" x="16" y="'+(py-8)+'">POLICY GUARDRAILS · '+s.pol.length+'</text>';
  s.pol.forEach(function(p,i){o+='<g class="nd pol-b" style="animation-delay:'+((dl++)*45)+'ms"><rect x="16" y="'+(py+i*20)+'" width="290" height="17" rx="8"/><text x="26" y="'+(py+i*20+9)+'">✓ '+esc(p)+'</text></g>';});
  if(!s.pol.length)o+='<text class="m" x="160" y="'+(py+10)+'">No guardrails selected — not recommended</text>';
  var hx=468,hy=180;o+=nd(590,58,92,34,'n',s.con==='er'?'Data centre':'Head office',s.con==='er'?'ExpressRoute':'site-to-site VPN');
  o+=ln(560,72,hx+30,hy-26,s.con==='er'?'pk':'');
  var spN=s.n+1,R0=s.topo==='vwan'?118:108;
  for(var k=0;k<spN;k++){var ang=Math.PI*(.08+.84*k/Math.max(1,spN-1))+(spN===1?Math.PI*.42:0),sx=hx+Math.cos(ang)*R0*1.02,sy=hy+Math.sin(ang)*R0*1.05+14;o+=ln(hx,hy,sx,sy,'pk');o+=nd(sx,sy,k===0?82:74,24,k===0?'':'s',k===0?'Identity spoke':'spoke-app-'+k);}
  if(s.topo==='vwan')o+=nd(hx,hy,150,46,'b','Virtual WAN hub','secured hub');else o+=nd(hx,hy,150,46,'n','Hub VNet','Firewall · gateway');
  if(s.reg===2){var dx=510,dy=440;o+='<path class="ln dr" d="M'+hx+' '+(hy+23)+' C '+(hx+120)+' '+(hy+120)+', '+(dx+60)+' '+(dy-80)+', '+(dx+20)+' '+(dy-17)+'"/>';o+=nd(dx+20,dy,150,34,'o','Chennai DR hub','Site Recovery · peering');}
  else o+='<text class="m" x="'+hx+'" y="440">single region — add Chennai for DR</text>';
  o+='<circle class="pk-dot" r="4"><animateMotion dur="2.4s" repeatCount="indefinite" path="M590 72 L'+(hx+30)+' '+(hy-26)+'"/></circle>';
  lsvg.innerHTML=o;
  var tot=3+s.n;$('#lSum').innerHTML='<div class="big"><div><span>'+tot+'</span><small>subscriptions</small></div><div><span>'+(s.n+1)+'</span><small>spokes</small></div><div><span>'+s.pol.length+'</span><small>guardrails</small></div><div><span>'+s.reg+'</span><small>region'+(s.reg>1?'s':'')+'</small></div></div>'+
    '<b>'+(s.topo==='vwan'?'Virtual WAN':'Hub-spoke')+'</b> with '+(s.con==='er'?'ExpressRoute':'site-to-site VPN')+' to your office'+(s.reg===2?', DR to South India (Chennai).':'.')+' Typical one-time build: <b>Landing zone setup ₹1,49,999*</b> (indicative, excl. GST).';}
if(lsvg){['#lTopo','#lReg','#lCon'].forEach(function(s){$(s).addEventListener('change',lzR);});$('#lSubs').addEventListener('input',lzR);$('#lSubs').addEventListener('change',lzR);$('#lPol').addEventListener('change',lzR);
  $('#lDl').addEventListener('click',function(){var s=lzState();var t='XcellHost Managed Azure — landing zone design notes (illustrative)\n\nManagement groups: Tenant root > Platform (Identity, Management, Connectivity) | Landing zones (Corp, Online)\nWorkload subscriptions: '+s.n+' (total incl. platform: '+(3+s.n)+')\nTopology: '+(s.topo==='vwan'?'Virtual WAN (secured hub)':'Hub-spoke (hub VNet with Azure Firewall and gateway)')+'\nPrimary region: Central India (Pune)'+(s.reg===2?'\nDR region: South India (Chennai) — Azure Site Recovery':'')+'\nConnectivity: '+(s.con==='er'?'ExpressRoute':'Site-to-site VPN')+'\nPolicy guardrails:\n'+(s.pol.map(function(p){return ' - '+p;}).join('\n')||' - none selected')+'\n\nIndicative one-time landing zone setup: INR 1,49,999 excl. 18% GST (confirm with XcellHost).\nFinal design agreed during the cloud readiness assessment.\nsales@xcellhost.cloud · +91 22 6711 1555\n';XH.download('managed-azure-landing-zone.txt',t,'text/plain');});
  XH.whenVisible(lsvg,function(v){if(v&&!lsvg.firstChild)lzR();});if(R)lzR();}

/* ---------------- patch & backup planner ---------------- */
var pcal=$('#pCal');
function planR(){if(!pcal)return;var vm=+$('#pVm').value,rings=+(sv('#pRing')||2),w=+(sv('#pWin')),ret=+(sv('#pRet')||30);if(isNaN(w))w=6;$('#pVmV').textContent=vm;
  var wd=w===0?6:w-1;var PT=8,first=PT+1;while(first%7!==wd)first++;
  var names=rings===3?['Dev','UAT','Prod']:rings===2?['UAT','Prod']:['Prod'],cls=rings===3?['p1','p2','p3']:rings===2?['p2','p3']:['p3'],ev={};
  names.forEach(function(n,i){ev[first+i*7]=[n,cls[i]];});
  var h=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(function(x){return '<div class="dw">'+x+'</div>';}).join('');
  for(var i=0;i<28;i++){var e=ev[i],tag='';if(i===PT)tag='<span class="tg2" style="background:#93a4c4">MS release</span>';if(e)tag='<span class="tg2 '+e[1]+'">'+e[0]+' ring</span>';if(i===19)tag+='<span class="tg2 dr">Restore test</span>';
    h+='<div class="c'+(e?' hl':'')+'" style="animation-delay:'+(i*18)+'ms"><span class="d">'+(i+1)+'</span>'+tag+'<i class="bkd" title="daily backup"></i></div>';}
  pcal.innerHTML=h;var prodVm=Math.round(vm*(rings===3?.55:rings===2?.65:1));
  $('#pSum').innerHTML='<div class="big"><div><span>'+names.length+'</span><small>patch windows</small></div><div><span>'+(vm*30).toLocaleString('en-IN')+'</span><small>backup jobs / mo</small></div><div><span>'+ret+'</span><small>days retained</small></div></div>Patches follow Microsoft\'s monthly release; rings run '+names.join(' → ')+' in your <b>'+['Sun 02:00','Mon','Tue','Wed 23:00','Thu','Fri','Sat 01:00'][w]+'</b> window, ~'+prodVm+' VMs in the production ring. Backup storage is part of Azure usage, billed at actuals.';}
if(pcal){['#pRing','#pWin','#pRet'].forEach(function(s){$(s).addEventListener('change',planR);});$('#pVm').addEventListener('input',planR);planR();}

/* ---------------- landing-zone areas cycle ---------------- */
var areas=$$('#azAreas>div');
if(areas.length&&!R){var ak=-1;addTask($('#azAreas'),function(dt,t){var k=Math.floor(t/1.1)%8;if(k!==ak){ak=k;areas.forEach(function(a,i){a.classList.toggle('on',i===k);});}});}

/* ---------------- VS rows stagger ---------------- */
$$('#azVs .vr').forEach(function(r,i){r.style.transitionDelay=(120+i*90)+'ms';});

/* ---------------- steps line: scroll-linked ---------------- */
var stp=$('#azSteps'),spp=$('#azSpP');
if(stp&&spp){var L2=spp.getTotalLength();spp.style.strokeDasharray=L2;function sp(){var r=stp.getBoundingClientRect(),p=cl((innerHeight-r.top)/(innerHeight*.7+r.height*.3),0,1);spp.style.strokeDashoffset=L2*(1-p);}
  if(R)spp.style.strokeDashoffset=0;else{var sq=false;addEventListener('scroll',function(){if(!sq){sq=true;requestAnimationFrame(function(){sq=false;sp();});}},{passive:true});sp();}}

})();


