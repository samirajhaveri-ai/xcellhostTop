/* Imported from vortex-seg.html; shared chrome uses the Angular shell. */
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
  XH.open=function(id,opts){d.dispatchEvent(new CustomEvent('import-callback',{detail:opts&&opts.topic||'Vortex SEG Services'}));};
  XH.cart={add:function(item){d.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};
  XH.toast=function(message){var toast=$('#vortexSegToast');toast.textContent=message;toast.hidden=false;clearTimeout(XH.toastTimer);XH.toastTimer=setTimeout(function(){toast.hidden=true;},3000);};
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
  function setT(e,t){if(typeof e==='string')e=$id(e);if(e&&e.textContent!==t)e.textContent=t;}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function eo(t){t=clamp(t,0,1);return 1-Math.pow(1-t,3);}
  function eio(t){t=clamp(t,0,1);return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function spring(u){return u<=0?0:u>1.6?1:1-Math.exp(-6*u)*Math.cos(9*u);}
  function seg(a,b,t){return clamp((t-a)/(b-a),0,1);}
  function fmt(n){return Math.round(n).toLocaleString('en-IN');}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function dark(){return d.documentElement.getAttribute('data-theme')==='dark';}
  function segV(el){if(!el)return null;var b=$('button.on',el);return el.dataset.value||(b?b.getAttribute('data-v'):null);}
  function segSet(el,v){if(!el)return;var b=$('button[data-v="'+v+'"]',el);if(b&&!b.classList.contains('on'))b.click();}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function txt(c,s,x,y,font,col,al){c.font=font;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  function fitC(cv){var w=cv.clientWidth||cv.parentNode.clientWidth,h=cv.clientHeight||cv.parentNode.clientHeight;if(!w||!h)return null;if(cv.width!==Math.round(w*DPR)||cv.height!==Math.round(h*DPR)){cv.width=Math.round(w*DPR);cv.height=Math.round(h*DPR);}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function seeded(s){return function(){s=(s*9301+49297)%233280;return s/233280;};}

  var BL='#1565D8',OR='#FF8C1A',GR='#16a34a',RD='#E5484D';
  function th(){return dark()?{ink:'#EAF1FF',mut:'#93A4C4',line:'rgba(255,255,255,.14)',soft:'rgba(255,255,255,.06)',surf:'#0F2246',bg:'#081630',bl:'#8AB4F8',ot:'#FFB066',rd:'#FF6B6B'}:{ink:'#041E42',mut:'#51607A',line:'rgba(4,30,66,.16)',soft:'rgba(4,30,66,.05)',surf:'#ffffff',bg:'#F2F6FC',bl:BL,ot:'#C25E00',rd:RD};}

  /* ===== one shared rAF ticker ===== */
  var subs=[],raf=0,last=0;
  function frame(t){var dt=last?Math.min(64,Math.max(0,t-last)):16;last=t;var any=false;
    for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t,dt);any=true;}}
    if(any)raf=requestAnimationFrame(frame);else{raf=0;last=0;}}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}

  /* ===== canvas glyphs ===== */
  function env(c,x,y,s,stroke,fill,a){c.save();c.globalAlpha=a===undefined?1:a;c.translate(x,y);c.scale(s,s);rr(c,-13,-9,26,18,3);c.fillStyle=fill;c.fill();c.lineWidth=1.6/s;c.strokeStyle=stroke;c.stroke();c.beginPath();c.moveTo(-12,-7.5);c.lineTo(0,1.5);c.lineTo(12,-7.5);c.stroke();c.restore();}
  function shield(c,x,y,s,col){c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-11);c.lineTo(9,-7);c.lineTo(9,0);c.quadraticCurveTo(9,8,0,12);c.quadraticCurveTo(-9,8,-9,0);c.lineTo(-9,-7);c.closePath();c.fillStyle=col;c.fill();c.strokeStyle='#fff';c.lineWidth=1.8;c.beginPath();c.moveTo(-4,0);c.lineTo(-1,3.5);c.lineTo(5,-3.5);c.stroke();c.restore();}
  function lock(c,x,y,s,col){c.save();c.translate(x,y);c.scale(s,s);rr(c,-7,-2,14,11,2.5);c.fillStyle=col;c.fill();c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.arc(0,-2,4.6,Math.PI,0);c.stroke();c.restore();}
  function doc(c,x,y,s,stroke,fill){c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(-11,-14);c.lineTo(5,-14);c.lineTo(11,-8);c.lineTo(11,14);c.lineTo(-11,14);c.closePath();c.fillStyle=fill;c.fill();c.strokeStyle=stroke;c.lineWidth=1.6/s;c.stroke();c.beginPath();for(var i=0;i<4;i++){c.moveTo(-7,-5+i*5);c.lineTo(i===3?1:7,-5+i*5);}c.stroke();c.restore();}
  function tick(c,x,y,r,ok,col){c.save();c.strokeStyle='#fff';c.lineWidth=2.4;c.lineCap='round';c.beginPath();if(ok){c.moveTo(x-r*.4,y);c.lineTo(x-r*.1,y+r*.32);c.lineTo(x+r*.45,y-r*.35);}else{c.moveTo(x-r*.35,y-r*.35);c.lineTo(x+r*.35,y+r*.35);c.moveTo(x+r*.35,y-r*.35);c.lineTo(x-r*.35,y+r*.35);}c.stroke();c.restore();}
  function pill(c,s,x,y,font,bg,fg,al){c.font=font;var w=c.measureText(s).width+14,h=18,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,9);c.fillStyle=bg;c.fill();txt(c,s,x0+7,y+.5,font,fg);return w;}
  function dash(c,x1,y1,x2,y2,col,off){c.save();c.setLineDash([5,6]);c.lineDashOffset=off||0;c.strokeStyle=col;c.lineWidth=1.5;c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();c.restore();}
  function mono(w){return Math.round(clamp(w/52,8.5,10.5));}

  /* ===== HERO · five live scenes ===== */
  var hero=$id('sgHero');
  var SC=[
    {cap:'Inbound · phish quarantined, clean mail delivered',mx:'mx · yourcompany.example',
     A:['Phish · quarantined','sample sender · .test domain'],B:['Clean mail · delivered','verdict in 0.8 s (sample)'],
     L:['Messages scanned','Delivered clean','Quarantined','Avg verdict'],
     log:[['QUAR','Phish · billing@paym3nt-example.test · quarantined',0],['DELIV','Invoice from known vendor · delivered',1],['SCAN','Links rewritten · time-of-click check on',2],['QUAR','Lookalike domain · display-name mismatch',0],['DELIV','Newsletter · moved to bulk folder',1]]},
    {cap:'Sandbox · attachment opened in isolation',mx:'sandbox · isolated detonation',
     A:['Sandbox · detonated in isolation','before delivery'],B:['Verdict · malicious · blocked','message delivered without it'],
     L:['Attachments detonated','Engines flagged','Time to verdict','Unsafe delivered'],
     log:[['SCAN','Unknown attachment sent to sandbox',2],['SCAN','Static, behaviour and network checks running',2],['BLOCK','Verdict: malicious · attachment removed',0],['DELIV','Message delivered without the attachment',1],['INFO','Verdict shared with XcellSOC',2]]},
    {cap:'Outbound DLP · OCR finds an Aadhaar-like pattern',mx:'outbound · DLP policy',
     A:['DLP · Aadhaar pattern masked','found inside a scanned image'],B:['Secure portal · encrypted','password-controlled link'],
     L:['Outbound inspected','Images OCR’d','Patterns masked','Sent via portal'],
     log:[['OCR','Scanned image attachment read by OCR',2],['DLP','Aadhaar-like pattern XXXX-XXXX-1234 · masked',3],['ENC','Delivered via secure portal · password link',1],['DLP','PAN-like pattern · held for reviewer',3],['PASS','Internal mail · no sensitive data',1]]},
    {cap:'SPF · DKIM · DMARC · spoofed display name rejected',mx:'auth · SPF · DKIM · DMARC',
     A:['DMARC · p=reject','your domain can’t be borrowed'],B:['Spoofed display name · stopped','fake sample sender'],
     L:['SPF','DKIM','DMARC','Spoofs blocked'],
     log:[['REJ','Spoofed display name · DMARC fail · rejected',0],['PASS','SPF pass · DKIM aligned · DMARC pass',1],['INFO','Aggregate DMARC report received',2],['REJ','Unauthorised sender for yourcompany.example',0],['INFO','Policy p=reject applied to 100% of mail',2]]},
    {cap:'Archive · legal hold search · verdicts to SOC',mx:'archive · legal hold',
     A:['Archive · 7 yrs*','retention per policy'],B:['Verdicts → XcellSOC','evidence correlated'],
     L:['Archived','Retention','Legal holds','Verdicts → SOC'],
     log:[['ARCH','Messages archived this hour · tamper-evident',2],['SRCH','Archive search · 4 results in 0.6 s',2],['HOLD','Legal hold applied · matter L-07',3],['SOC','Verdicts and evidence forwarded to XcellSOC',1],['HOLD','Retention policy · 7 years*',3]]}
  ];
  var DUR=5500;

  /* scene 0 · inbound gateway */
  var SP0=430;
  function s0(c,w,h,t){var T=th(),gx=w*.52,lanes=[.38,.56,.74],ib={x:w*.88,y:h*.48},qb={x:w*.72,y:h*.86},fs=mono(w);
    txt(c,'INTERNET',w*.05,h*.24,'600 '+fs+'px "IBM Plex Mono"',T.mut);
    lanes.forEach(function(l){dash(c,0,h*l,gx-16,h*l,T.line,-t*.04);});
    dash(c,gx+16,h*.56,ib.x-30,ib.y,T.line,-t*.04);
    // gate
    rr(c,gx-15,h*.24,30,h*.6,10);c.fillStyle=dark()?'rgba(21,101,216,.25)':'rgba(21,101,216,.10)';c.fill();c.strokeStyle=T.bl;c.lineWidth=1.6;c.stroke();
    shield(c,gx,h*.54,1,BL);
    txt(c,'VORTEX SEG',gx,h*.2,'700 '+fs+'px "IBM Plex Mono"',T.bl,'center');
    // inbox + quarantine
    rr(c,ib.x-28,ib.y-26,56,52,10);c.fillStyle=T.surf;c.fill();c.strokeStyle=GR;c.lineWidth=1.6;c.stroke();
    txt(c,'Inbox',ib.x,ib.y+38,'600 '+fs+'px "IBM Plex Mono"',T.mut,'center');
    for(var tr=0;tr<3;tr++){c.fillStyle=dark()?'rgba(22,163,74,.28)':'rgba(22,163,74,.16)';rr(c,ib.x-18,ib.y-16+tr*11,36,7,3);c.fill();}
    c.save();c.setLineDash([4,4]);rr(c,qb.x-34,qb.y-14,68,24,8);c.strokeStyle=OR;c.stroke();c.restore();
    txt(c,'QUARANTINE',qb.x,qb.y-1,'700 '+(fs-1)+'px "IBM Plex Mono"',T.ot,'center');
    var i0=Math.max(0,Math.floor((t-3200)/SP0)),i1=Math.floor(t/SP0),lastPh=-1,inG=0;
    for(var i=i0;i<=i1;i++){var age=t-i*SP0;if(age<0)continue;var ph=i%5===3,ly=h*lanes[i%3],x,y=ly,a=1,s=1,col=T.bl,fill=T.surf;
      if(age<1500){x=lerp(-20,gx-36,age/1500);}
      else if(age<1800){x=gx-36;var sp=(age-1500)/300;c.strokeStyle=ph?OR:T.bl;c.lineWidth=2;c.beginPath();c.arc(x,y,17,-Math.PI/2,-Math.PI/2+TAU*sp);c.stroke();inG++;}
      else if(age<2050){x=lerp(gx-36,gx+30,(age-1800)/250);y=ly;}
      else if(!ph){var u=eio((age-2050)/950);x=lerp(gx+30,ib.x,u);y=lerp(ly,ib.y,u);s=lerp(1,.6,u);a=age>2850?clamp(1-(age-2850)/150,0,1):1;col=GR;}
      else{var v=eio((age-2050)/850);x=lerp(gx+30,qb.x,v);y=lerp(ly,qb.y-2,v)-Math.sin(v*Math.PI)*16;s=lerp(1,.7,v);a=age>2800?clamp(1-(age-2800)/200,0,1):1;col=OR;lastPh=i;}
      if(age>=1800&&ph){col=OR;fill=dark()?'rgba(255,140,26,.18)':'#FFF3E6';}
      if(a>0)env(c,x,y,s,col,fill,a);
      if(ph&&age>=1800&&age<2600){c.globalAlpha=1;txt(c,'!',x+12*s,y-10*s,'800 11px Sora',OR,'center');}
    }
    // latest phish sender tag
    var lp=Math.floor((t-2050)/SP0);while(lp>=0&&lp%5!==3)lp--;
    if(lp>=0){var ag=t-lp*SP0;if(ag<4200){c.globalAlpha=clamp((ag-2050)/300,0,1)*clamp((4200-ag)/300,0,1);pill(c,'billing@paym3nt-example.test',w-8,qb.y-30,'600 '+(fs-.5)+'px "IBM Plex Mono"',dark()?'rgba(255,107,107,.18)':'rgba(229,72,77,.10)',T.rd,'right');c.globalAlpha=1;}}
    var n=t>=1800?Math.floor((t-1800)/SP0)+1:0,q=n>=4?Math.floor((n-4)/5)+1:0;
    return [fmt(18240+n),fmt(17905+n-q),fmt(335+q),'0.8 s'];
  }
  /* scene 1 · sandbox */
  function s1(c,w,h,t){var T=th(),fs=mono(w),x0=w*.33,x1=w*.71,y0=h*.2,y1=h*.76,cx=(x0+x1)/2,cy=(y0+y1)/2+4;
    // incoming message
    env(c,w*.1,h*.5,1.15,T.bl,T.surf);txt(c,'message',w*.1,h*.5+22,'500 '+fs+'px "IBM Plex Mono"',T.mut,'center');
    // chamber
    rr(c,x0,y0,x1-x0,y1-y0,14);c.fillStyle=dark()?'rgba(255,255,255,.04)':'rgba(21,101,216,.05)';c.fill();c.save();c.setLineDash([6,5]);c.lineDashOffset=-t*.03;c.strokeStyle=T.bl;c.lineWidth=1.6;c.stroke();c.restore();
    c.save();rr(c,x0,y0,x1-x0,y1-y0,14);c.clip();c.strokeStyle=T.soft;c.lineWidth=1;for(var gx=x0+14;gx<x1;gx+=18){c.beginPath();c.moveTo(gx,y0);c.lineTo(gx,y1);c.stroke();}c.restore();
    txt(c,'SANDBOX · ISOLATED',cx,y0+14,'700 '+fs+'px "IBM Plex Mono"',T.bl,'center');
    var mv=eo(t/1000),dx=lerp(w*.1+16,cx,mv),dy=lerp(h*.5,cy,mv),sc=lerp(.8,1.25,seg(900,1300,t)),bad=t>3500;
    // behaviour particles
    var an=seg(1100,1500,t)*(1-seg(3400,3700,t));
    if(an>0){for(var i=0;i<14;i++){var px=cx+Math.sin(t*.0021*(1+i*.07)+i*2.1)*(x1-x0)*.36,py=cy+Math.cos(t*.0017*(1+i*.05)+i)*(y1-y0)*.3,hot=seg(1400+i*130,1700+i*130,t);
      c.globalAlpha=an*.85;c.fillStyle=hot>.5?OR:T.bl;c.beginPath();c.arc(px,py,2.4,0,TAU);c.fill();}c.globalAlpha=1;}
    if(t<4200||!bad){doc(c,dx,dy,sc,bad?RD:T.bl,bad?(dark()?'rgba(255,107,107,.15)':'#FFECEC'):T.surf);}
    else{var fo=1-seg(4200,4500,t);c.globalAlpha=fo;doc(c,cx,cy,sc,RD,dark()?'rgba(255,107,107,.15)':'#FFECEC');c.globalAlpha=1;}
    // stage chips
    var st=['Static','Behaviour','Network','Verdict'],cw=w*.6/4,flagged=0;
    for(var k=0;k<4;k++){var on=t>1200+k*700,xx=w*.22+cw*k+cw/2;if(on)flagged=k+1;
      c.globalAlpha=1;pill(c,st[k],xx,h*.88,'600 '+(fs-.5)+'px "IBM Plex Mono"',on?(k===3&&bad?RD:BL):T.soft,on?'#fff':T.mut,'center');}
    // verdict stamp
    if(t>3500){var u=spring((t-3500)/600);c.save();c.translate(cx,cy-4);c.rotate(-.12);c.scale(lerp(1.8,1,clamp(u,0,1.2)),lerp(1.8,1,clamp(u,0,1.2)));c.globalAlpha=clamp((t-3500)/200,0,1);
      var sw=Math.min(x1-x0-16,170);rr(c,-sw/2,-15,sw,30,6);c.strokeStyle=RD;c.lineWidth=2.4;c.stroke();c.fillStyle=dark()?'rgba(40,10,14,.85)':'rgba(255,255,255,.9)';c.fill();txt(c,'MALICIOUS · BLOCKED',0,1,'800 '+(fs+.5)+'px "IBM Plex Mono"',RD,'center');c.restore();c.globalAlpha=1;}
    // delivered without attachment
    rr(c,w*.86-24,h*.5-22,48,44,9);c.fillStyle=T.surf;c.fill();c.strokeStyle=GR;c.lineWidth=1.5;c.stroke();
    txt(c,'Inbox',w*.86,h*.5+34,'600 '+fs+'px "IBM Plex Mono"',T.mut,'center');
    if(t>3900){var m=eio((t-3900)/900);env(c,lerp(x1,w*.86,m),h*.5,lerp(1,.75,m),GR,T.surf,1);if(t>4800)txt(c,'no attachment',w*.86,h*.5-34,'600 '+(fs-1)+'px "IBM Plex Mono"',GR,'center');}
    var secs=t<1100?0:Math.min(38,Math.round((t-1100)/2400*38));
    return [fmt(1284+(t>900?1:0)),flagged+' / 4',t>3500?'38 s':secs+' s','0'];
  }
  /* scene 2 · outbound DLP + OCR */
  function s2(c,w,h,t){var T=th(),fs=mono(w),cx0=w*.05,cx1=w*.44,cy0=h*.17,cy1=h*.88;
    var ap=eo(t/600);c.globalAlpha=ap;
    rr(c,cx0,cy0,cx1-cx0,cy1-cy0,12);c.fillStyle=T.surf;c.fill();c.strokeStyle=T.line;c.lineWidth=1.2;c.stroke();
    txt(c,'OUTBOUND · EXTERNAL',cx0+12,cy0+15,'700 '+(fs-.5)+'px "IBM Plex Mono"',T.mut);
    c.fillStyle=T.soft;rr(c,cx0+12,cy0+28,(cx1-cx0)*.6,6,3);c.fill();rr(c,cx0+12,cy0+40,(cx1-cx0)*.42,6,3);c.fill();
    // scanned image
    var ix=cx0+12,iy=cy0+56,iw=cx1-cx0-24,ih=cy1-iy-12;
    c.save();c.translate(ix+iw/2,iy+ih/2);c.rotate(-.03);rr(c,-iw/2,-ih/2,iw,ih,6);c.fillStyle=dark()?'#1A2B4C':'#EEF1F6';c.fill();c.strokeStyle=T.line;c.stroke();
    c.fillStyle=dark()?'rgba(255,255,255,.18)':'rgba(4,30,66,.18)';for(var i=0;i<4;i++){if(i===2)continue;rr(c,-iw/2+10,-ih/2+12+i*(ih/5),iw*(i%2?.5:.72),5,2);c.fill();}
    var ny=-ih/2+12+2*(ih/5)+2,det=t>2200;
    txt(c,'XXXX-XXXX-1234',-iw/2+10,ny,'700 '+(fs+.5)+'px "IBM Plex Mono"',T.ink);
    if(det){c.font='700 '+(fs+.5)+'px "IBM Plex Mono"';var tw=c.measureText('XXXX-XXXX-1234').width;var pu=spring((t-2200)/500);c.globalAlpha=ap*clamp(pu,0,1);rr(c,-iw/2+6,ny-9,tw+8,18,4);c.strokeStyle=OR;c.lineWidth=2;c.stroke();c.fillStyle='rgba(255,140,26,.18)';c.fill();c.globalAlpha=ap;}
    // OCR beam
    if(t>600&&t<2300){var bx=lerp(-iw/2,iw/2,seg(600,2200,t));c.fillStyle=BL;c.globalAlpha=ap*.9;c.fillRect(bx-1.5,-ih/2,3,ih);c.globalAlpha=ap*.12;c.fillRect(bx-24,-ih/2,24,ih);c.globalAlpha=ap;}
    c.restore();c.globalAlpha=1;
    txt(c,'scanned image · OCR',ix,cy1+10,'500 '+(fs-1)+'px "IBM Plex Mono"',T.mut);
    if(det){c.globalAlpha=seg(2300,2600,t);pill(c,'Aadhaar-like pattern',cx1+8,h*.36,'700 '+(fs-.5)+'px "IBM Plex Mono"','rgba(255,140,26,.16)',T.ot);c.globalAlpha=1;}
    // policy
    var px=w*.6;if(t>2800){c.globalAlpha=seg(2800,3100,t);pill(c,'mask + encrypt',px,h*.56,'700 '+(fs-.5)+'px "IBM Plex Mono"',BL,'#fff','center');c.globalAlpha=1;}
    // portal
    var ox0=w*.72,ox1=w*.96,oy0=h*.26,oy1=h*.76,ocx=(ox0+ox1)/2;
    rr(c,ox0,oy0,ox1-ox0,oy1-oy0,12);c.fillStyle=T.surf;c.fill();c.strokeStyle=t>4500?GR:T.line;c.lineWidth=1.6;c.stroke();
    c.fillStyle=T.soft;rr(c,ox0,oy0,ox1-ox0,16,12);c.fill();
    lock(c,ocx,(oy0+oy1)/2-6,1.5,t>4500?GR:T.mut);
    txt(c,'Secure portal',ocx,oy1-16,'600 '+fs+'px "IBM Plex Mono"',T.ink,'center');
    if(t>3300&&t<4600){var m=eio((t-3300)/1200),ex=lerp(cx1+10,ocx,m),ey=lerp(h*.56,(oy0+oy1)/2,m)-Math.sin(m*Math.PI)*24;env(c,ex,ey,1,GR,T.surf);lock(c,ex+10,ey-8,.7,GR);}
    if(t>4500){c.globalAlpha=seg(4500,4800,t);txt(c,'password link sent',ocx,oy1+12,'600 '+(fs-1)+'px "IBM Plex Mono"',GR,'center');c.globalAlpha=1;}
    return [fmt(6420+Math.floor(t/420)),fmt(214+(t>2200?1:0)),fmt(37+(t>2200?1:0)),fmt(12+(t>4500?1:0))];
  }
  /* scene 3 · SPF / DKIM / DMARC */
  function s3(c,w,h,t){var T=th(),fs=mono(w),A=t<3400,tt=A?t:t-3400,ly=h*.52,lights=[w*.5,w*.65,w*.8],nm=['SPF','DKIM','DMARC'],res=[];
    // envelope path
    var ex,ey=ly,a=1,col=A?OR:T.bl;
    if(A){if(tt<700)ex=lerp(-10,w*.34,eo(tt/700));else if(tt<2600)ex=w*.34;else{var b=eio((tt-2600)/700);ex=lerp(w*.34,w*.08,b);a=1-seg(3000,3350,tt);}}
    else{if(tt<300)ex=lerp(-10,w*.34,eo(tt/300));else if(tt<1000)ex=w*.34;else{var g=eio((tt-1000)/900);ex=lerp(w*.34,w*.94,g);ey=ly;a=1-seg(1800,2100,tt);col=GR;}}
    // sender label
    c.globalAlpha=A?1-seg(3000,3350,tt):1-seg(1800,2100,tt);
    var l1=A?'“Finance Head”':'Accounts · Supplier',l2=A?'finance@yourc0mpany-example.test':'accounts@supplier.example';
    var ly0=Math.max(h*.2,58);txt(c,l1,w*.05,ly0,'700 '+(fs+1.5)+'px Sora',T.ink);txt(c,l2,w*.05,ly0+16,'500 '+(fs-.5)+'px "IBM Plex Mono"',A?T.rd:T.mut);
    c.globalAlpha=1;
    // check lights
    for(var k=0;k<3;k++){var at=A?900+k*600:450+k*180,done=tt>at,ok=!A,x=lights[k];
      c.beginPath();c.arc(x,ly,17,0,TAU);c.fillStyle=done?(ok?GR:RD):T.soft;c.fill();c.strokeStyle=done?'transparent':T.line;c.lineWidth=1.4;c.stroke();
      if(done){var u=clamp(spring((tt-at)/400),0,1.3);c.save();c.translate(x,ly);c.scale(u,u);tick(c,0,0,17,ok);c.restore();}
      else{var pu=(Math.sin(t*.008)+1)/2;c.globalAlpha=.4+.4*pu;c.beginPath();c.arc(x,ly,4,0,TAU);c.fillStyle=T.mut;c.fill();c.globalAlpha=1;}
      txt(c,nm[k],x,ly+30,'700 '+fs+'px "IBM Plex Mono"',done?(ok?GR:T.rd):T.mut,'center');res.push(done?(ok?'pass':'fail'):'…');}
    dash(c,w*.38,ly,w*.86,ly,T.line,-t*.03);
    if(a>0)env(c,ex,ey,1.15,col,T.surf,a);
    if(A&&tt>2300){c.globalAlpha=seg(2300,2500,tt)*(1-seg(3100,3350,tt));pill(c,'p=reject',lights[2],ly-34,'700 '+fs+'px "IBM Plex Mono"',RD,'#fff','center');
      if(tt>2600){c.save();c.translate(w*.2,ly-30);c.rotate(-.1);var sw=82;rr(c,-sw/2,-12,sw,24,5);c.strokeStyle=RD;c.lineWidth=2;c.stroke();txt(c,'REJECTED',0,1,'800 '+fs+'px "IBM Plex Mono"',RD,'center');c.restore();}c.globalAlpha=1;}
    if(!A&&tt>1000){c.globalAlpha=seg(1000,1200,tt);pill(c,'aligned · delivered',lights[2],ly-34,'700 '+fs+'px "IBM Plex Mono"',GR,'#fff','center');c.globalAlpha=1;}
    return [res[0],res[1],A?(tt>2100?'p=reject':'checking'):(tt>810?'pass':'checking'),fmt(128+(t>2600?1:0))];
  }
  /* scene 4 · archive vault + SOC */
  function s4(c,w,h,t){var T=th(),fs=mono(w),vx0=w*.04,vx1=w*.54,vy0=h*.16,vy1=h*.9,cols=8,rows=4;
    rr(c,vx0,vy0,vx1-vx0,vy1-vy0,12);c.fillStyle=T.surf;c.fill();c.strokeStyle=T.line;c.lineWidth=1.2;c.stroke();
    // search bar
    var q='invoice AND vendor-x 2025',qn=Math.floor(clamp((t-500)/1400,0,1)*q.length);
    rr(c,vx0+10,vy0+10,vx1-vx0-20,24,7);c.fillStyle=T.bg;c.fill();c.strokeStyle=t>500&&t<2100?BL:T.line;c.stroke();
    txt(c,(q.slice(0,qn)||'search archive…')+(t>500&&t<2100&&Math.floor(t/350)%2?'|':''),vx0+20,vy0+22,'500 '+(fs-.5)+'px "IBM Plex Mono"',qn?T.ink:T.mut);
    var gx0=vx0+12,gy0=vy0+44,cw=(vx1-vx0-24)/cols,ch=(vy1-gy0-10)/rows,filled=Math.min(cols*rows,14+Math.floor(t/120)),hits=[3,10,17,22],holds=[10,17,22];
    for(var i=0;i<cols*rows;i++){var x=gx0+(i%cols)*cw,y=gy0+Math.floor(i/cols)*ch,on=i<filled,hit=t>2200&&hits.indexOf(i)>=0,hold=t>2900&&holds.indexOf(i)>=0;
      rr(c,x+2,y+2,cw-4,ch-4,4);c.fillStyle=on?(hit?(dark()?'rgba(138,180,248,.35)':'rgba(21,101,216,.18)'):T.soft):'transparent';c.fill();
      c.strokeStyle=hit?BL:T.line;c.lineWidth=hit?1.8:1;c.stroke();
      if(on&&!hit){c.globalAlpha=.55;env(c,x+cw/2,y+ch/2,.42,T.mut,'transparent');c.globalAlpha=1;}
      if(hit)env(c,x+cw/2,y+ch/2,.48,BL,T.surf);
      if(hold){var u=clamp(spring((t-2900-holds.indexOf(i)*150)/500),0,1.2);c.save();c.translate(x+cw-7,y+8);c.scale(u,u);c.beginPath();c.arc(0,0,7,0,TAU);c.fillStyle=OR;c.fill();lock(c,0,0,.5,'#fff');c.restore();}}
    if(t>2900){c.globalAlpha=seg(2900,3200,t);pill(c,'legal hold',vx1-6,vy1+1,'700 '+(fs-1)+'px "IBM Plex Mono"',OR,'#fff','right');c.globalAlpha=1;}
    // SOC node
    var sx=w*.83,sy=h*.5,R=26;
    c.beginPath();for(var k=0;k<6;k++){var an=Math.PI/6+k*Math.PI/3;c[k?'lineTo':'moveTo'](sx+R*Math.cos(an),sy+R*Math.sin(an));}c.closePath();c.fillStyle=dark()?'#0F2246':'#041E42';c.fill();c.strokeStyle=OR;c.lineWidth=2;c.stroke();
    var pul=(Math.sin(t*.005)+1)/2;c.globalAlpha=.25*pul;c.beginPath();c.arc(sx,sy,R+8+pul*6,0,TAU);c.strokeStyle=OR;c.stroke();c.globalAlpha=1;
    txt(c,'SOC',sx,sy+1,'800 '+(fs+1)+'px "IBM Plex Mono"','#fff','center');
    txt(c,'XcellSOC',sx,sy+R+14,'600 '+fs+'px "IBM Plex Mono"',T.ink,'center');
    dash(c,vx1+6,sy,sx-R-4,sy,T.line,-t*.05);
    txt(c,'verdicts & evidence',(vx1+sx-R)/2,sy-16,'500 '+(fs-1)+'px "IBM Plex Mono"',T.mut,'center');
    var arrived=0;for(var p=0;p<12;p++){var pt=(t-p*480);if(pt<0)continue;if(pt>900){arrived++;continue;}var pu2=pt/900;c.beginPath();c.arc(lerp(vx1+6,sx-R-4,pu2),sy,3.4,0,TAU);c.fillStyle=p%2?OR:BL;c.fill();}
    return [fmt(241830+filled*7),'7 yrs*',String(2+(t>2900?1:0)),fmt(9412+arrived)];
  }
  var SF=[s0,s1,s2,s3,s4];

  if(hero){
    var slides=$$('#sgScr .sg-sl'),dots=$$('#sgDots button'),cv=slides.map(function(s){return $('canvas',s);});
    var cur=0,prev=-1,el=0,fade=1e9,paused=false,hover=false,lastK=['','','',''],logI=0,logT=0,kT=0;
    var K=[0,1,2,3].map(function(i){return $id('sgK'+i);}),KL=[0,1,2,3].map(function(i){return $id('sgL'+i);});
    var capN=$id('sgCapN'),capT=$id('sgCapT'),capEl=$id('sgCap'),mxEl=$id('sgMx'),logEl=$id('sgLog');
    var chA=$id('sgChA'),chB=$id('sgChB'),stage=$id('sgStage');
    function drawScene(k,t){var f=fitC(cv[k]);if(!f)return null;f.c.clearRect(0,0,f.w,f.h);f.c.globalAlpha=1;return SF[k](f.c,f.w,f.h,t);}
    function updK(v){if(!v)return;for(var i=0;i<4;i++){if(v[i]!==lastK[i]){if(lastK[i]&&i!==3)bump(K[i]);setT(K[i],v[i]);lastK[i]=v[i];}}}
    function pushLog(){var L=SC[cur].log[logI%SC[cur].log.length];logI++;var li=d.createElement('li');li.innerHTML='<b class="k'+L[2]+'">'+esc(L[0])+'</b><span>'+esc(L[1])+' (sample)</span>';logEl.insertBefore(li,logEl.firstChild);while(logEl.children.length>3)logEl.removeChild(logEl.lastChild);}
    function chips(k){var S=SC[k];[[chA,S.A,'sgChA'],[chB,S.B,'sgChB']].forEach(function(p,j){var c=p[0];if(!c)return;if(R){setT(p[2]+'t',p[1][0]);setT(p[2]+'s',p[1][1]);return;}
      c.classList.add('sw');setTimeout(function(){setT(p[2]+'t',p[1][0]);setT(p[2]+'s',p[1][1]);c.classList.remove('sw');},280+j*120);});}
    function setScene(k,user){if(k===cur&&!user&&el<DUR)return;
      if(k!==cur){prev=cur;fade=0;slides[prev].classList.remove('on');slides[prev].classList.add('out');}
      cur=k;el=0;slides.forEach(function(s,i){if(i!==prev)s.classList.remove('out');s.classList.toggle('on',i===k);});
      dots.forEach(function(b,i){b.classList.toggle('on',i===k);b.classList.toggle('done',i<k);b.setAttribute('aria-selected',i===k);b.style.setProperty('--p',i<k?1:0);});
      setT(capN,'0'+(k+1));setT(capT,SC[k].cap);capEl.classList.remove('sw');void capEl.offsetWidth;capEl.classList.add('sw');setT(mxEl,SC[k].mx);
      SC[k].L.forEach(function(l,i){setT(KL[i],l);});lastK=['','','',''];chips(k);logI=0;pushLog();logT=0;}
    dots.forEach(function(b){b.addEventListener('click',function(){setScene(+b.getAttribute('data-k'),true);});});
    var pz=$id('sgPz');pz.addEventListener('click',function(){paused=!paused;pz.classList.toggle('p',paused);pz.setAttribute('aria-label',paused?'Play scenes':'Pause scenes');});
    stage.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')hover=true;});stage.addEventListener('pointerleave',function(){hover=false;});
    var scr=$id('sgScr'),sx=null;
    scr.addEventListener('pointerdown',function(e){if(e.pointerType==='mouse')sx=e.clientX;});
    scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40)setScene((cur+(dx<0?1:4))%5,true);});
    scr.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});
    scr.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>40)setScene((cur+(dx<0?1:4))%5,true);},{passive:true});

    /* background: envelopes gliding along mail lanes, pointer parallax */
    var bgc=$id('sgBg'),BP=[],mx=0,my=0,pmx=0,pmy=0;
    (function(){var r=seeded(11);for(var i=0;i<24;i++)BP.push({x:r(),y:.08+r()*.84,z:.35+r()*.8,s:.5+r()*.6,o:r()<.3});})();
    function drawBg(t){var f=fitC(bgc);if(!f)return;var c=f.c,T=th();c.clearRect(0,0,f.w,f.h);pmx+=(mx-pmx)*.06;pmy+=(my-pmy)*.06;
      for(var i=0;i<BP.length;i++){var b=BP[i],x=((b.x*f.w+t*.02*b.z)%(f.w+60))-30+pmx*b.z*-26,y=b.y*f.h+pmy*b.z*-14;
        env(c,x,y,b.s*b.z+.25,b.o?'rgba(255,140,26,.55)':(dark()?'rgba(138,180,248,.45)':'rgba(21,101,216,.38)'),'transparent',.18+.3*b.z);}
    }
    hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();mx=(e.clientX-r.left)/r.width-.5;my=(e.clientY-r.top)/r.height-.5;});

    setScene(0,true);
    if(R){updK(drawScene(0,3000));drawBg(0);addEventListener('resize',function(){drawScene(cur,3000);drawBg(0);});
      dots.forEach(function(b){b.addEventListener('click',function(){setTimeout(function(){updK(drawScene(cur,4800));},0);});});}
    else{var hl=0,heroOn=loop(function(t,dt){
        drawBg(t);
        var rdt=hl?Math.min(250,Math.max(0,t-hl)):16;hl=t;var run=!paused&&!hover;if(run)el+=rdt;var p=Math.min(1,el/DUR);
        dots[cur].style.setProperty('--p',p.toFixed(3));
        if(fade<1000&&prev>=0){fade+=dt;drawScene(prev,DUR);}
        var v=drawScene(cur,el);kT+=dt;if(kT>120){kT=0;updK(v);}
        logT+=run?rdt:0;if(logT>1400){logT=0;pushLog();}
        if(el>=DUR)setScene((cur+1)%5);
      });
      XH.whenVisible(hero,function(vv){hl=0;heroOn(vv);});}
  }

  /* ===== sticky sub-nav ===== */
  (function(){var nav=$id('sgSub');if(!nav)return;var hdr=$('.hdr'),links=$$('a',nav),secs=links.map(function(a){return $id(a.getAttribute('href').slice(1));}),cur2=-1,tk=false;
    function hh(){var h=hdr?hdr.getBoundingClientRect().height:80;d.documentElement.style.setProperty('--sg-hh',Math.round(h)+'px');}
    function upd(){tk=false;var y=window.frameElement?110-window.frameElement.getBoundingClientRect().top:nav.getBoundingClientRect().bottom+30,k=-1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<=y)k=i;});if(k!==cur2){cur2=k;links.forEach(function(a,i){a.classList.toggle('on',i===k);});var a=links[k];if(a){var tr=a.parentNode;tr.scrollTo({left:a.offsetLeft-tr.clientWidth/2+a.offsetWidth/2,behavior:R?'auto':'smooth'});}}}
    function jump(id){var t=$id(id);if(!t)return false;window.scrollTo({top:t.getBoundingClientRect().top+scrollY-(nav.getBoundingClientRect().height+(hdr?hdr.getBoundingClientRect().height:80)+4),behavior:R?'auto':'smooth'});return true;}
    hh();addEventListener('resize',hh);addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(upd);}},{passive:true});upd();
    $$('main a[href^="#"]').forEach(function(a){var id=a.getAttribute('href').slice(1);if(!id||!$id(id))return;a.addEventListener('click',function(e){if(a.hasAttribute('data-open'))return;if(jump(id))e.preventDefault();});});
    XH.sgJump=jump;
  })();

  /* ===== micro-interactions ===== */
  if(FINE&&!R){
    $$('.sg-mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;b.style.transform='translate('+(x*.16).toFixed(1)+'px,'+(y*.28).toFixed(1)+'px)';});b.addEventListener('pointerleave',function(){b.style.transform='';});});
    $$('.sg-pc,.sg-pkc').forEach(function(c){c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(900px) rotateY('+(x*4).toFixed(2)+'deg) rotateX('+(-y*4).toFixed(2)+'deg) translateY(-4px)';});c.addEventListener('pointerleave',function(){c.style.transform='';});});
  }
  $$('[data-kin]').forEach(function(h){var n=0;function split(node){[].slice.call(node.childNodes).forEach(function(ch){if(ch.nodeType===3){var f=d.createDocumentFragment();ch.textContent.split(/(\s+)/).forEach(function(w){if(!w)return;if(/^\s+$/.test(w)){f.appendChild(d.createTextNode(w));return;}var s=d.createElement('span');s.className='w';s.textContent=w;s.style.transitionDelay=(n++*45)+'ms';f.appendChild(s);});node.replaceChild(f,ch);}else if(ch.nodeType===1)split(ch);});}
    split(h);if(R){h.classList.add('go');return;}XH.whenVisible(h,function(v){if(v)h.classList.add('go');});});

  /* CSS illustrations run only on screen */
  var prot=$id('protect');if(prot){if(R)prot.classList.add('sg-run-static');else XH.whenVisible(prot,function(v){prot.classList.toggle('sg-run',v);});}

  /* ===== how a message travels — token pipeline ===== */
  (function(){var pipe=$id('sgPipe');if(!pipe)return;var btns=$$('#sgNodes button'),tok=$id('sgTok'),trk=$id('sgTrk'),pd=$id('sgPd'),track=$('.sg-track',pipe);
    var ST=[
      {t:'Sender',p:'Anyone can send you mail — a customer, a supplier, or someone pretending to be one. Vortex SEG assumes nothing about the sender until it has checked.',c:['Any domain','Any device','Any country']},
      {t:'Internet → MX / relay',p:'Your MX record (or an API or relay connector) points mail at the gateway first, so every message is inspected before your mail server ever sees it.',c:['MX gateway','API integration','SMTP relay','Journaling']},
      {t:'Vortex SEG',p:'The message is authenticated, scored and opened safely: SPF, DKIM and DMARC checks, reputation and impersonation analysis, link rewriting, multi-engine anti-virus, sandboxing, DLP and OCR — then the policy decides: deliver, quarantine, encrypt or reject. Every verdict is logged.',c:['Detect','Enforce','Protect','Log','Archive']},
      {t:'Mail server',p:'Only clean, policy-checked mail is handed to Microsoft 365, Google Workspace, Zoho Mail, Exchange or Zimbra. Nothing about your mailboxes changes.',c:['M365','Google','Zoho','Exchange','Zimbra']},
      {t:'Recipient',p:'Your colleague receives a clean message — with an external-sender banner where helpful, links that are re-checked at the time of click, and unsafe attachments removed.',c:['Clean message','Safe links','Banner warnings']},
      {t:'XcellSOC',p:'Verdicts and evidence flow to XcellSOC, where they are correlated with endpoint, identity and network signals — so a phish that slipped past one user becomes one investigated case.',c:['Verdict feed','Evidence','Correlated case'],l:'vortex-soc.html'}
    ];
    var P=[],cur=0,ph=0,pt=0,hold=0,meas=0,TR=700,DW=2100;
    function measure(){var pr=pipe.getBoundingClientRect();P=btns.map(function(b){var r=$('i',b).getBoundingClientRect();return [r.left-pr.left+r.width/2,r.top-pr.top+r.height/2];});}
    function detail(k){var s=ST[k];pd.innerHTML='<div class="h bd"><span>0'+(k+1)+'</span><b>'+esc(s.t)+'</b></div><p class="bd">'+esc(s.p)+(s.l?' <a href="'+s.l+'" style="color:var(--sg-b);font-weight:600">Explore XcellSOC →</a>':'')+'</p><ul>'+s.c.map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul>';}
    function mark(k){btns.forEach(function(b,i){b.classList.toggle('on',i===k);b.classList.toggle('past',i<k);});detail(k);}
    function place(x,y){tok.style.transform='translate3d('+(x-17).toFixed(1)+'px,'+(y-12-44).toFixed(1)+'px,0)';
      if(track&&P.length){var tx0=P[0][0],tx1=P[5][0];trk.style.transform='scaleX('+clamp((x-tx0)/(tx1-tx0),0,1).toFixed(3)+')';}}
    btns.forEach(function(b,i){b.addEventListener('click',function(){cur=i;ph=1;pt=0;hold=12000;mark(i);measure();place(P[i][0],P[i][1]);tok.classList.toggle('cl',i>2);});});
    measure();mark(0);place(P[0][0],P[0][1]);addEventListener('resize',function(){measure();place(P[cur][0],P[cur][1]);});
    if(R){return;}
    var on=loop(function(t,dt){meas+=dt;if(meas>600){meas=0;measure();}
      if(hold>0){hold-=dt;place(P[cur][0],P[cur][1]);return;}
      pt+=dt;
      if(ph===1){if(pt>DW){pt=0;ph=0;}place(P[cur][0],P[cur][1]-(cur===2?Math.sin(pt/160)*3:0));if(cur===2&&pt>DW*.6)tok.classList.add('cl');}
      else{var nx=(cur+1)%6;if(nx===0){tok.style.opacity='0';if(pt>380){cur=0;ph=1;pt=0;tok.classList.remove('cl');mark(0);tok.style.opacity='';}return;}
        var u=eio(pt/TR),a=P[cur],b=P[nx];place(lerp(a[0],b[0],u),lerp(a[1],b[1],u)-Math.sin(u*Math.PI)*12);
        if(pt>=TR){cur=nx;ph=1;pt=0;mark(cur);}}
    });
    XH.whenVisible(pipe,function(v){if(v)measure();on(v);});
  })();

  /* ===== phishing spotter quiz ===== */
  (function(){var root=$id('sgQz');if(!root)return;
    var Q=[
      {a:'phish',from:'Accounts Payable',addr:'<span data-f="1">billing@paym3nt-example.test</span>',to:'you@yourcompany.example',sj:'URGENT: Invoice overdue — pay within 2 hours',
       body:'<p>Dear customer,</p><p>Your account will be suspended today. <span data-f="2">Pay the overdue amount within 2 hours</span> to avoid penalty charges.</p><span class="lnk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg> View invoice</span><span class="hov">Link points to: <span data-f="3">paym3nt-example.test/secure-login</span></span>',
       f:['Lookalike domain — "paym3nt" swaps a letter for a digit.','Artificial urgency and a threat of suspension.','The button leads to a sign-in page on the same lookalike domain.'],
       seg:'Lookalike-domain and urgency scoring → quarantined before delivery.'},
      {a:'phish',from:'Managing Director',addr:'<span data-f="1">md.office.desk@freemail-example.test</span>',to:'you@yourcompany.example',sj:'Quick favour — are you at your desk?',
       body:'<p>I\'m in a board meeting and can\'t take calls.</p><p><span data-f="2">I need you to buy gift cards for a client today</span> and send me the codes by reply.</p><p><span data-f="3">Please keep this between us</span> until I\'m back.</p>',
       f:['An executive\'s title on a free external mailbox — classic display-name fraud.','An unusual payment request outside normal approval.','Secrecy and pressure to skip verification.'],
       seg:'Executive-impersonation check flags the external address → warning banner or quarantine.'},
      {a:'legit',from:'IT Helpdesk',addr:'<span data-f="1">helpdesk@yourcompany.example</span>',to:'all-staff@yourcompany.example',sj:'Planned maintenance — Saturday 10 pm to midnight',
       body:'<p>Email may be slow during the window. <span data-f="2">No action is needed from you.</span></p><p>Questions? <span data-f="3">Call extension 2100 or raise a ticket in the usual portal.</span></p>',
       f:['Your own internal domain, sent from a known team.','No link, attachment or request for a password.','Points you to channels you already know.'],
       seg:'Passes SPF, DKIM and DMARC from your own domain → delivered.'},
      {a:'phish',from:'Courier Desk',addr:'<span data-f="1">tracking@parcel-update-example.test</span>',to:'you@yourcompany.example',sj:'Delivery failed — open the attached form to reschedule',
       body:'<p>We could not deliver your parcel today.</p><p><span data-f="2">Open the attached form and sign in with your email password</span> to confirm your address.</p><span class="att"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg> <span data-f="3">Delivery_Form.html</span></span>',
       f:['A sender you have no shipment with.','Asks for your mailbox password — no real courier needs it.','An unexpected HTML attachment, a common way to show a fake sign-in page.'],
       seg:'Attachment detonated in the sandbox → removed; message quarantined.'},
      {a:'phish',from:'Accounts · Supplier Co',addr:'accounts@supplierco.example',rt:'<span data-f="1">accounts@supplierco-payments.test</span>',to:'payables@yourcompany.example',sj:'Updated bank details for future payments',
       body:'<p>Please note our bank account has changed.</p><p><span data-f="2">Update our account details before releasing this month\'s payment.</span></p><p><span data-f="3">Please confirm by email only — our phones are down this week.</span></p>',
       f:['Replies go to a different domain from the sender.','A bank-detail change right before a payment — business email compromise.','Discourages the phone call that would expose it. Verify on a number you already have.'],
       seg:'Reply-to mismatch and payment-change language scored → held for review.'}
    ];
    var mail=$id('sgMail'),qa=$id('sgQa'),fb=$id('sgQf'),nx=$id('sgQnx'),prog=$id('sgQp'),ring=$id('sgQr'),qn=$id('sgQn'),i=0,score=0,ans=[];
    prog.innerHTML=Q.map(function(){return '<i></i>';}).join('');var pis=$$('i',prog);
    function show(k,first){var q=Q[k];var h='<div class="sg-mh"><div><small>From</small><span><b>'+esc(q.from)+'</b> &lt;'+q.addr+'&gt;</span></div>'+(q.rt?'<div><small>Reply-to</small><span>'+q.rt+'</span></div>':'')+'<div><small>To</small><span>'+esc(q.to)+'</span></div><div><small>Subject</small><span class="sj">'+esc(q.sj)+'</span></div></div><div class="sg-mb">'+q.body+'</div>';
      var go=function(){mail.innerHTML=h;mail.className='sg-mail'+(first||R?'':' pre');if(!first&&!R)requestAnimationFrame(function(){requestAnimationFrame(function(){mail.classList.remove('pre');});});};
      if(first||R)go();else{mail.classList.add('pre');setTimeout(go,260);}
      pis.forEach(function(p,j){p.classList.toggle('cur',j===k&&ans[j]===undefined);});
      $$('button',qa).forEach(function(b){b.disabled=false;});nx.hidden=true;
      fb.innerHTML='<p class="sg-qh"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg><span>Email '+(k+1)+' of '+Q.length+'. Read the sender, the reply-to, the request and the link — then choose.</span></p>';}
    function sc(){qn.textContent=score+'/'+ans.length;ring.style.strokeDashoffset=(314-314*(ans.length?score/Q.length:0)).toFixed(1);}
    qa.addEventListener('click',function(e){var b=e.target.closest('button[data-a]');if(!b||b.disabled)return;var q=Q[i],ok=b.getAttribute('data-a')===q.a;ans[i]=ok;if(ok)score++;
      $$('button',qa).forEach(function(x){x.disabled=true;});mail.classList.add('rev');if(q.a==='legit')mail.classList.add('lg');
      pis[i].classList.remove('cur');pis[i].classList.add(ok?'ok':'no');
      fb.innerHTML='<div class="sg-qv '+(ok?'ok':'no')+'">'+(ok?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> Correct':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg> Not quite')+' — '+(q.a==='phish'?'this is phishing':'this one is legitimate')+'</div><ul class="sg-ql'+(q.a==='legit'?' lg':'')+'">'+q.f.map(function(f,j){return '<li><b>'+(j+1)+'</b><span>'+esc(f)+'</span></li>';}).join('')+'</ul><p class="sg-qseg"><b>Vortex SEG:</b> '+esc(q.seg)+'</p>';
      nx.hidden=false;nx.innerHTML=i<Q.length-1?'Next email <span class="ar">→</span>':'See your score <span class="ar">→</span>';sc();});
    nx.addEventListener('click',function(){if(i<Q.length-1){i++;show(i);return;}
      nx.hidden=true;$$('button',qa).forEach(function(x){x.disabled=true;});
      fb.innerHTML='<div class="sg-qend"><h3>'+score+' of '+Q.length+' spotted</h3><p>'+(score===Q.length?'Sharp eyes. Most teams aren\'t this consistent on a busy Monday — that\'s what the gateway is for.':'Even careful people miss some. A gateway catches these before anyone has to decide.')+'</p><button type="button" class="btn btn-line" id="sgQre"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg> Try again</button><a class="btn btn-orange" href="#configure">Protect my team →</a></div>';
      $id('sgQre').addEventListener('click',function(){i=0;score=0;ans=[];pis.forEach(function(p){p.className='';});sc();show(0);});});
    show(0,true);sc();
  })();

  /* ===== DMARC / SPF record builder ===== */
  (function(){var dom=$id('dmDom');if(!dom)return;
    var INC={m365:'include:spf.protection.outlook.com',google:'include:_spf.google.com',zoho:'include:zoho.in',seg:'include:<your-seg-relay-host>',esp:'include:<your-esp-spf-domain>'};
    var pAll=$id('dmAll'),pAl=$id('dmAl'),pP=$id('dmP'),pct=$id('dmPct'),rua=$id('dmRua'),snd=$id('dmSnd');
    var spfEl=$id('dmSpf'),dmEl=$id('dmDm'),c1=$id('dmC1'),c2=$id('dmC2'),h1=$id('dmH1'),h2=$id('dmH2'),wn=$id('dmWarn'),mk=$id('dmMk'),spfN=$id('dmSpfN'),dmN=$id('dmDmN');
    var prevS=[],prevD=[];
    function clean(v){v=String(v||'').trim().toLowerCase().replace(/^https?:\/\//,'').replace(/\/.*$/,'').replace(/^www\./,'');return /^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(v)?v:'';}
    function render(el,toks,prev){el.innerHTML=toks.map(function(tk){var h=esc(tk).replace(/&lt;[^&]+&gt;/g,function(m){return '<span class="ph">'+m+'</span>';});return prev.indexOf(tk)<0&&!R?'<span class="t">'+h+'</span>':h;}).join(el===spfEl?' ':'; ');}
    function upd(){var D=clean(dom.value),bad=!D;D=D||'yourcompany.in';dom.parentNode.classList.toggle('err',bad&&dom.value.trim()!=='');
      var on=$$('input:checked',snd).map(function(i){return i.value;}),all=segV(pAll),al=segV(pAl),p=segV(pP),pc=+pct.value,r=(rua.value.trim()||'dmarc-reports@'+D).toLowerCase();
      rua.placeholder='dmarc-reports@'+D;
      var st=['v=spf1'].concat(on.map(function(k){return INC[k];})).concat([all]);
      var dt=['v=DMARC1','p='+p];if(pc<100)dt.push('pct='+pc);dt.push('rua=mailto:'+r);if(al==='s'){dt.push('adkim=s');dt.push('aspf=s');}
      render(spfEl,st,prevS);render(dmEl,dt,prevD);prevS=st;prevD=dt;
      var sv=st.join(' '),dv=dt.join('; ');c1.setAttribute('data-copy',sv);c2.setAttribute('data-copy',dv);setT(h1,D);setT(h2,'_dmarc.'+D);
      spfN.innerHTML='Include terms: <b'+(on.length>4?' class="w"':'')+'>'+on.length+'</b> · keep total DNS lookups (including nested) ≤ 10';
      dmN.innerHTML='Policy <b'+(p==='none'?' class="w"':'')+'>'+p+'</b> · '+pc+'% · '+(al==='s'?'strict':'relaxed')+' alignment';
      setT('dmPctL',pc+'% of failing mail');
      var L=['none','quarantine','reject'],ix=L.indexOf(p);$$('.sg-lad span').forEach(function(s,j){s.classList.toggle('on',j===ix);s.classList.toggle('past',j<ix);});mk.style.transform='translateX('+(ix*100)+'%)';
      var W=[];function w(t,g,ic){W.push('<li'+(g?' class="g"':'')+'><i>'+(ic||(g?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>'))+'</i><span>'+t+'</span></li>');}
      if(!on.length)w('No senders selected — an SPF record with no includes authorises nobody to send for '+esc(D)+'.');
      if(on.indexOf('seg')>=0||on.indexOf('esp')>=0)w('Replace the highlighted <b>&lt;placeholders&gt;</b> with the values XcellHost or your provider gives you.');
      if(p==='none')w('Monitoring only: spoofed mail is still delivered. Read the aggregate reports, fix failing senders, then move to quarantine.');
      if(p==='quarantine')w('Good step — failing mail goes to spam. Move to reject once reports show only legitimate mail passing.',true);
      if(p!=='none'&&pc<100)w('Only '+pc+'% of failing mail gets the policy. Raise to 100% when you are confident.');
      if(p==='reject'&&pc===100)w('Full enforcement: mail that fails authentication and claims to be '+esc(D)+' is refused.',true,'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>');
      if(al==='s'&&(on.indexOf('esp')>=0||on.indexOf('google')>=0))w('Strict alignment can fail mail from third-party senders that sign with their own sub-domain.');
      var rd=(r.split('@')[1]||'');
      if(rd&&rd!==D&&rd.slice(-D.length-1)!=='.'+D)w('Reports go to another domain — <b>'+esc(rd)+'</b> must publish <code>'+esc(D)+'._report._dmarc.'+esc(rd)+'</code> TXT "v=DMARC1" to accept them.');
      wn.innerHTML=W.join('');
    }
    [dom,rua,pct].forEach(function(e){e.addEventListener('input',upd);});snd.addEventListener('change',upd);[pAll,pAl,pP].forEach(function(e){e.addEventListener('change',upd);});
    upd();
  })();

  /* ===== mail-estate sizing → quotation summary ===== */
  (function(){var mb=$id('cMb');if(!mb)return;
    var mbR=$id('cMbR'),dm=$id('cDm'),pf=$id('cPf'),dp=$id('cDp'),dlp=$id('cDlp'),ar=$id('cAr'),op=$id('cOp'),rows=$id('oRows'),pk=$id('oPk'),pkS=$id('oPkS'),arT=$id('oArT'),arB=$id('oArB'),qS=$id('qS'),mbx=$id('cMbx');
    var PF={m365:['Microsoft 365','API + MX / transport rules'],gws:['Google Workspace','SMTP relay + inbound routing'],zoho:['Zoho Mail','MX gateway + SMTP relay'],exch:['Microsoft Exchange','MX gateway / next hop'],zim:['Zimbra','MX gateway / next hop'],smtp:['Other SMTP server','MX gateway / relay']};
    var DP={cloud:'Cloud · Indian Tier-4 DC*',onprem:'On-premise · your network',hybrid:'Hybrid'};
    mbx.innerHTML=new Array(201).join('<i></i>');var cells=$$('i',mbx),lastPk='';
    function upd(src){var n=clamp(Math.round(+mb.value||10),10,20000);if(src===mbR){n=+mbR.value;mb.value=n;}else if(src===mb){mbR.value=Math.min(3000,n);mbR.dispatchEvent(new Event('input'));}
      var D=clamp(Math.round(+dm.value||1),1,200),P=segV(pf),De=segV(dp),dl=dlp.checked,Y=+segV(ar),man=segV(op)==='man';
      setT('cMbL',fmt(n)+' mailboxes');setT('cDmL',D+(D===1?' domain':' domains'));setT('cArL',Y?Y+(Y===1?' year':' years'):'off');
      var on=Math.ceil(Math.min(n,3000)/15);cells.forEach(function(c,i){c.classList.toggle('on',i<on);});
      var ed=(dl||Y)?'Gateway + DLP/OCR + Archival':'Gateway',name=man?'Managed SEG':ed,sub=man?ed+', operated by XcellHost 24×7':'Licence · your team runs it';
      if(name!==lastPk){lastPk=name;pk.textContent=name;pk.classList.remove('sw');void pk.offsetWidth;pk.classList.add('sw');}setT(pkS,sub);
      var gb=n*1.5*Y,tb=gb/1024;setT(arT,Y?(tb>=1?tb.toFixed(tb>=10?0:1)+' TB':Math.round(gb)+' GB'):'—');
      if(Y){var h='';for(var k=1;k<=Y;k++)h+='<i style="height:'+(8+38*k/Y).toFixed(1)+'px" title="Year '+k+'"></i>';arB.innerHTML=h;}else arB.innerHTML='<em>Archival off</em>';
      var R2=[['Mailboxes',fmt(n)],['Domains',String(D)],['Platform',PF[P][0]],['Integration',PF[P][1]],['Deployment',DP[De]],['DLP + OCR + secure messaging',dl?'Included':'Not included'],['Archival',Y?Y+(Y===1?' year':' years')+' · ~'+arT.textContent:'Off'],['Operations',man?'Managed 24×7 by XcellHost':'Self-run · licence only'],['Onboarding',D===1?'24–48 h after access*':'Phased · '+D+' domains']];
      rows.innerHTML=R2.map(function(r){return '<div class="crow"><span>'+esc(r[0])+'</span><b>'+esc(r[1])+'</b></div>';}).join('');
      qS.value='Vortex SEG sizing — '+name+' | '+R2.map(function(r){return r[0]+': '+r[1];}).join(' | ');
    }
    mb.addEventListener('input',function(){upd(mb);});mbR.addEventListener('input',function(e){if(e.isTrusted)upd(mbR);});dm.addEventListener('input',function(){upd();});
    [pf,dp,ar,op].forEach(function(e){e.addEventListener('change',function(){upd();});});dlp.addEventListener('change',function(){upd();});
    upd();
    $$('[data-pk]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-pk');
      if(k==='gw'){dlp.checked=false;segSet(ar,'0');segSet(op,'self');}else if(k==='dlp'){dlp.checked=true;segSet(ar,'7');segSet(op,'self');}else{dlp.checked=true;segSet(ar,'7');segSet(op,'man');}
      upd();if(XH.sgJump)XH.sgJump('configure');setTimeout(function(){XH.flash&&XH.flash($('.sg-out'));},R?0:600);});});
  })();
})();


