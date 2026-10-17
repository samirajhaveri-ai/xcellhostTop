/* Imported from dfir.html; shared chrome uses the Angular shell. */
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
  XH.open=function(id,opts){d.dispatchEvent(new CustomEvent('import-callback',{detail:opts&&opts.topic||'Digital Forensics & Incident Response Services'}));};
  XH.cart={add:function(item){d.dispatchEvent(new CustomEvent('import-cart',{detail:item}));}};
  XH.toast=function(message){var toast=$('#dfirToast');toast.textContent=message;toast.hidden=false;clearTimeout(XH.toastTimer);XH.toastTimer=setTimeout(function(){toast.hidden=true;},3000);};
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
  function $id(i){return d.getElementById(i);}
  function setT(id,t){var e=typeof id==='string'?$id(id):id;if(e&&e.textContent!==t)e.textContent=t;}
  function setH(e,h){if(e&&e._h!==h){e._h=h;e.innerHTML=h;}}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function fmt(n){return Math.round(n).toLocaleString('en-IN');}
  function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function eo(t){return 1-Math.pow(1-t,3);}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function restart(el,cls){if(R||!el)return;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls);}
  var NS='http://www.w3.org/2000/svg';
  function sv(tag,at,par){var e=d.createElementNS(NS,tag);for(var k in at)e.setAttribute(k,at[k]);if(par)par.appendChild(e);return e;}
  function tx(par,x,y,s,at){var a={x:x,y:y};for(var k in at)a[k]=at[k];var e=sv('text',a,par);e.textContent=s;return e;}
  function A(e,k,v){if(e._a===undefined)e._a={};if(e._a[k]!==v){e._a[k]=v;e.setAttribute(k,v);}}
  function op(e,v){v=+(+v).toFixed(3);if(e._o!==v){e._o=v;e.setAttribute('opacity',v);}}
  function prog(t,a,b){return clamp((t-a)/(b-a),0,1);}
  function samp(p,n){var L=p.getTotalLength(),o=[];for(var i=0;i<=n;i++){var q=p.getPointAtLength(L*i/n);o.push([q.x,q.y]);}return o;}
  function atS(S,u){var f=clamp(u,0,1)*(S.length-1),i=Math.floor(f),r=f-i,a=S[i],b=S[Math.min(i+1,S.length-1)];return [a[0]+(b[0]-a[0])*r,a[1]+(b[1]-a[1])*r];}
  function p2(n){return (n<10?'0':'')+n;}
  function hms(s){s=Math.max(0,Math.round(s));return Math.floor(s/3600)+':'+p2(Math.floor(s%3600/60))+':'+p2(s%60);}
  function topic(t){XH.open('xhCallback',{topic:t});}

  /* =========================================================
     Shared ticker — one requestAnimationFrame for every loop
     ========================================================= */
  var subs=[],raf=0,last=0;
  function frame(t){raf=0;var dt=last?Math.min(100,t-last):16;last=t;var any=false;
    for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){any=true;s.fn(t,dt);}}
    if(any)raf=requestAnimationFrame(frame);else last=0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}

  var IC={clk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',disk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>',net:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>',fp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>',sig:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c3-1 4-8 6-8s0 8 3 8 3-4 5-4 2 3 4 3"/><path d="M3 21h18"/></svg>',tgt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/></svg>',doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',pres:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>',usr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>',sh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',act:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>',mon:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',srv:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',cld:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg>',list:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>',ref:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'};
  var CO={b:'#9fc0ff',g:'#5FE08D',o:'#FFB15C',r:'#ff8a7d',v:'#c9bbff',a:'#6fd3ff'};

  /* =========================================================
     1. HERO — 5 rotating live IR scenes (all sample data)
     ========================================================= */
  (function(){
    var stage=$id('dfStage'),card=$id('dfCard'),scr=$id('dfScr');if(!stage||!card||!scr)return;
    var slides=$$('.df-sl',scr),kbs=slides.map(function(s){return $('.kb',s);}),dots=$$('#dfDots button'),tiles=$$('#dfTiles>div'),bars=[$id('dfBar0'),$id('dfBar1')],
        feed=$id('dfFeed'),logS=$id('dfLogS'),pill=$id('dfPill'),pillS=$id('dfPillS'),scN=$id('dfScN'),scT=$id('dfScT'),
        bgL=$$('#dfBg i'),bgW=$id('dfBg'),pf=$id('dfPf'),hero=$id('dfHero'),sats=[0,1,2,3].map(function(i){return $id('dfSat'+i);}),lnk=$id('dfLnk');
    var DUR=5600,N=5,paths=null;
    function sat(k,ic,b,s,cls){var el=sats[k];if(!el)return;el.classList.remove('hot','red','ok','pu');if(cls)el.classList.add(cls);
      var i=el.children[0],be=$('b',el),se=$('small',el);
      if(ic!=null&&i._ic!==ic){i._ic=ic;i.innerHTML=IC[ic];restart(i,'sw');}
      if(b!=null&&be.textContent!==b){be.textContent=b;restart(be,'sw');}
      if(s!=null&&se.textContent!==s){se.textContent=s;restart(se,'sw');}
      if(paths&&paths[k]){paths[k].el.setAttribute('class',cls||'');paths[k].dot.setAttribute('class',cls==='red'?'r':cls==='ok'?'g':cls==='pu'?'p':cls==='hot'?'o':'');}}
    function tile(k,b,s,cls){var el=tiles[k];if(!el)return;var be=el.children[0],se=el.children[1];
      if(b!=null&&be.textContent!==b){be.textContent=b;restart(be,'sw');}
      if(s!=null&&se.textContent!==s)se.textContent=s;
      if(cls!==undefined){el.classList.remove('hit','good','bad');if(cls)el.classList.add(cls);}}
    function tileV(k,b){var be=tiles[k].children[0];if(be.textContent!==b)be.textContent=b;}
    function bar(k,lbl,v,txt){var el=bars[k];if(!el)return;var l=el.children[0],s=el.children[1].children[0],b=el.children[2];
      if(lbl!=null&&l.textContent!==lbl){l.textContent=lbl;restart(l,'sw');}
      if(v!=null){v=clamp(v,0,1);var tr='scaleX('+v.toFixed(3)+')';if(s._t!==tr){s._t=tr;s.style.transform=tr;}setT(b,txt!=null?txt:Math.round(v*100)+'%');}}
    function barC(k,c){var s=bars[k].children[1].children[0];if(s._c!==c){s._c=c;s.style.background=c||'';}}
    function log(tag,txt,c,ok){if(!feed)return;var li=d.createElement('li');li.style.setProperty('--c',c);li.innerHTML='<span>'+esc(tag)+'</span><b>'+esc(txt)+'</b><em>'+(ok?'✓':'')+'</em>';feed.insertBefore(li,feed.firstChild);while(feed.children.length>5)feed.removeChild(feed.lastChild);}
    function logHead(h,c){setH(logS,'<i style="background:'+c+'"></i>'+h);logS.style.color=c;}
    function panel(svg,x,y,w,h,f,s){return sv('rect',{x:x,y:y,width:w,height:h,rx:9,fill:f||'rgba(127,176,255,.05)',stroke:s||'rgba(127,176,255,.18)'},svg);}
    function head(svg,x,y,a,b){tx(svg,x,y,a,{'font-size':10,fill:'#fff','class':'t'});if(b)tx(svg,x,y+11,b,{'font-size':7.2,'class':'m'});}
    function mmss(s){s=Math.round(s);return p2(Math.floor(s/60))+':'+p2(s%60);}
    function baseSats(){sat(0,'clk','Ack · 15 min','Critical target','');sat(1,'lock','Host · isolated','Containment','');sat(2,'disk','Image · hash verified','Evidence','');sat(3,'flag','CERT-In · 6 h clock','Reporting window','');}

    var SC=[];
    /* ===== 1. Alert → triage ===== */
    SC.push((function(){
      var svg=$id('dfV0');
      panel(svg,8,8,170,204);head(svg,18,25,'Alert queue','SOC · Mumbai · sample');
      var AL=[['P1','#ff6b5e','Critical alert · FIN-LT-07','Pune · endpoint'],['P2','#FFB15C','Login anomaly · HR-LT-12','Delhi · identity'],['P3','#7fb0ff','Large download · MKT-PC-04','Mumbai · data'],['P4','#5FE08D','Patch overdue · SRV-DB-02','Mumbai · server']];
      var rows=AL.map(function(a,i){var y=46+i*41,g=sv('g',{},svg);
        var r=sv('rect',{x:14,y:y,width:158,height:35,rx:7,fill:'rgba(127,176,255,.05)',stroke:'rgba(127,176,255,.14)'},g);
        sv('rect',{x:20,y:y+9,width:20,height:16,rx:4,fill:a[1],'fill-opacity':.2,stroke:a[1]},g);
        tx(g,30,y+20,a[0],{'font-size':7.5,'text-anchor':'middle',fill:a[1],'class':'t'});
        tx(g,46,y+15,a[2],{'font-size':7.5,fill:'#fff','class':'t'});tx(g,46,y+26,a[3],{'font-size':6.8,'class':'m'});
        var st=tx(g,166,y+26,'',{'font-size':6.6,'text-anchor':'end',fill:'#5FE08D','class':'t'});return {g:g,r:r,st:st};});
      panel(svg,186,8,126,204);head(svg,196,25,'Acknowledge','Target · 15 min');
      var cx=249,cy=80,R0=28;
      sv('circle',{cx:cx,cy:cy,r:R0,fill:'none',stroke:'rgba(255,255,255,.08)','stroke-width':6},svg);
      var arc=sv('circle',{cx:cx,cy:cy,r:R0,fill:'none',stroke:'#FFB15C','stroke-width':6,'stroke-linecap':'round',pathLength:100,'stroke-dasharray':'0 100',transform:'rotate(-90 '+cx+' '+cy+')'},svg);
      var tm=tx(svg,cx,cy+3,'00:00',{'font-size':12,'text-anchor':'middle',fill:'#fff','class':'t'}),tl=tx(svg,cx,cy+13,'elapsed',{'font-size':6.4,'text-anchor':'middle','class':'m'});
      var CK=['Severity · P1','Scope · 1 host','IR lead assigned','Client called'];
      var cks=CK.map(function(c,i){var y=124+i*20,b=sv('rect',{x:196,y:y,width:12,height:12,rx:3,fill:'rgba(127,176,255,.1)',stroke:'rgba(127,176,255,.35)'},svg),
        m=sv('path',{d:'M199 '+(y+6)+' l2.5 2.5 l4.5 -5',fill:'none',stroke:'#fff','stroke-width':1.6,'stroke-linecap':'round',opacity:0},svg),l=tx(svg,213,y+9,c,{'font-size':7.3,fill:'#9fb6de','class':'t'});return {b:b,m:m,l:l};});
      var ACK=2600,AS=702,CT=[2900,3400,3900,4400];
      return {title:'ALERT · TRIAGE',bg:0,pc:'#ff8a7d',pill:'+91 22 6711 1555 · call now',
        init:function(){baseSats();sat(0,'clk','Ack · 15 min','Timer running','hot');
          tile(0,'New','STATUS','bad');tile(1,'P1','SEVERITY','');tile(2,'—','ACK TIME','');tile(3,'15 min','ACK TARGET','');
          bar(0,'TRIAGE',0,'0%');bar(1,'ACK SLA',0,'0%');barC(0,'#5FE08D');barC(1,'#FF8C1A');logHead('SAMPLE',CO.r);
          log('Alert','Critical alert · FIN-LT-07 · Pune',CO.r,0);},
        ev:[[ACK,function(){sat(0,'clk','Ack · 11 min 42 s','Inside 15-min target','ok');tile(0,'Acknowledged','STATUS','hit');tile(2,'11:42','ACK TIME','good');log('Ack','Analyst on case · 11 min 42 s',CO.g,1);}],
            [CT[0],function(){log('Triage','Severity P1 · business impact high',CO.o,1);}],
            [CT[1],function(){sat(1,'lock','Host · isolating','FIN-LT-07 · queued','hot');}],
            [CT[2],function(){log('Triage','IR lead assigned · scope 1 host',CO.b,1);}],
            [CT[3],function(){tile(0,'Triaged','STATUS','good');sat(3,'flag','CERT-In · 6 h clock','Started at detection','hot');log('Notify','Client IT head called',CO.g,1);}]],
        draw:function(t){var p=eo(prog(t,150,650));op(rows[0].g,p);A(rows[0].g,'transform','translate('+((1-p)*-18).toFixed(1)+' 0)');
          for(var i=1;i<4;i++)op(rows[i].g,.35+.25*prog(t,i*150,i*150+400));
          var fl=t<ACK?(.5+.5*Math.sin(t/140)):0;A(rows[0].r,'stroke',t<ACK?'rgba(255,107,94,'+(.35+.6*fl).toFixed(2)+')':'#5FE08D');A(rows[0].r,'fill',t<ACK?'rgba(255,107,94,'+(.06+.08*fl).toFixed(2)+')':'rgba(95,224,141,.08)');
          setT(rows[0].st,t<ACK?'':t<CT[3]?'Acknowledged':'Triaged');
          var el=AS*eio(prog(t,400,ACK));setT(tm,mmss(el));A(arc,'stroke-dasharray',(el/900*100).toFixed(1)+' 100');A(arc,'stroke',t>=ACK?'#5FE08D':'#FFB15C');setT(tl,t>=ACK?'ack ✓':'elapsed');A(tl,'fill',t>=ACK?'#5FE08D':'#9fb6de');
          var n=0;cks.forEach(function(c,i){var on=t>=CT[i];if(on)n++;A(c.b,'fill',on?'#16a34a':'rgba(127,176,255,.1)');A(c.b,'stroke',on?'#5FE08D':'rgba(127,176,255,.35)');op(c.m,on?1:0);A(c.l,'fill',on?'#fff':'#9fb6de');});
          bar(0,null,n/4);bar(1,null,el/900,Math.round(el/900*100)+'%');}};
    })());

    /* ===== 2. Containment ===== */
    SC.push((function(){
      var svg=$id('dfV1');
      tx(svg,12,20,'Network · head office',{'font-size':10,fill:'#fff','class':'t'});tx(svg,12,31,'9 hosts · sample',{'font-size':7.2,'class':'m'});
      var ND=[[56,52,'MKT-PC-04'],[150,40,'HR-LT-12'],[258,54,'FS-01'],[36,118,'ACC-PC-02'],[160,110,'FIN-LT-07'],[282,114,'SRV-DB-02'],[70,172,'PRN-01'],[168,176,'DEV-PC-09'],[262,170,'AP-02']],H=4;
      var ED=[[4,0],[4,1],[4,2],[4,3],[4,5],[4,7],[0,1],[1,2],[3,6],[6,7],[7,8],[5,8],[2,5],[0,3]];
      var eg=sv('g',{},svg),ng=sv('g',{},svg);
      var edges=ED.map(function(e){var a=ND[e[0]],b=ND[e[1]];return {h:e[0]===H,a:a,b:b,l:sv('line',{x1:a[0],y1:a[1],x2:b[0],y2:b[1],stroke:'rgba(127,176,255,.3)','stroke-width':1.2},eg)};});
      var hx=edges.filter(function(e){return e.h;});
      var pul=hx.map(function(){return sv('circle',{r:3,fill:'#ff6b5e',opacity:0},eg);});
      var xs=hx.map(function(e){var mx=(e.a[0]+e.b[0])/2,my=(e.a[1]+e.b[1])/2,g=sv('g',{opacity:0},eg);sv('circle',{cx:mx,cy:my,r:5,fill:'#c0392b'},g);sv('path',{d:'M'+(mx-2)+' '+(my-2)+' l4 4 M'+(mx+2)+' '+(my-2)+' l-4 4',stroke:'#fff','stroke-width':1.3},g);return g;});
      var nodes=ND.map(function(n,i){var g=sv('g',{},ng);var c=sv('rect',{x:n[0]-11,y:n[1]-9,width:22,height:18,rx:5,fill:'#0d2a5c',stroke:'#7fb0ff','stroke-width':1},g);
        sv('rect',{x:n[0]-6,y:n[1]-4,width:12,height:7,rx:1.2,fill:'none',stroke:'#cfe0ff','stroke-width':.9},g);
        tx(g,n[0],n[1]+19,n[2],{'font-size':6.4,'text-anchor':'middle',fill:i===H?'#ffb3aa':'#9fb6de','class':'t'});return {c:c};});
      var hr=ND[H],ring=sv('circle',{cx:hr[0],cy:hr[1],r:24,fill:'rgba(255,107,94,.06)',stroke:'#ff6b5e','stroke-width':2,pathLength:100,'stroke-dasharray':'0 100',transform:'rotate(-90 '+hr[0]+' '+hr[1]+')'},svg);
      var iso=sv('g',{opacity:0},svg);sv('rect',{x:hr[0]-26,y:hr[1]-40,width:52,height:13,rx:4,fill:'#c0392b'},iso);tx(iso,hr[0],hr[1]-31,'ISOLATED',{'font-size':6.8,'text-anchor':'middle',fill:'#fff','class':'t'});
      var bn=sv('g',{opacity:0},svg);sv('rect',{x:196,y:10,width:116,height:24,rx:7,fill:'rgba(22,163,74,.18)',stroke:'#5FE08D'},bn);tx(bn,254,25,'Spread stopped · 0 new',{'font-size':7.6,'text-anchor':'middle',fill:'#b6f5cd','class':'t'});
      var RG=[1200,2200],CUT=2300,CLN=3000,BN=3500;
      return {title:'CONTAINMENT · STOP THE SPREAD',bg:1,pc:'#FFB15C',pill:'Stop the spread first',
        init:function(){baseSats();sat(1,'lock','Host · isolating','FIN-LT-07','red');sat(0,'clk','Ack · 15 min','Acknowledged','ok');
          tile(0,'9 / 9','HOSTS ONLINE','');tile(1,'0','ISOLATED','');tile(2,'0','LINKS CUT','');tile(3,'Active','SPREAD','bad');
          bar(0,'CONTAIN',0,'0%');bar(1,'SPREAD RISK',.8,'High');barC(0,'#5FE08D');barC(1,'#ff6b5e');logHead('CONTAINING',CO.o);
          log('Contain','Isolation started · FIN-LT-07',CO.o,0);},
        ev:[[RG[1],function(){tile(1,'1','ISOLATED','hit');tile(0,'8 / 9','HOSTS ONLINE','');sat(1,'lock','Host · isolated','FIN-LT-07 · Pune','ok');log('Contain','Host isolated from network',CO.g,1);}],
            [CUT,function(){tile(2,'6','LINKS CUT','hit');log('Contain','6 connections blocked',CO.b,1);}],
            [CLN,function(){log('Check','Neighbour hosts · no spread',CO.g,1);}],
            [BN,function(){tile(3,'Stopped','SPREAD','good');log('Status','Spread stopped · 0 new hosts',CO.g,1);}]],
        draw:function(t){var cut=t>=CUT;
          edges.forEach(function(e){A(e.l,'stroke',e.h?(cut?'rgba(127,176,255,.18)':t<RG[1]?'rgba(255,107,94,.55)':'rgba(255,107,94,.35)'):'rgba(127,176,255,.3)');A(e.l,'stroke-dasharray',e.h&&cut?'2 4':'none');});
          hx.forEach(function(e,i){var ph=((t/900)+i*.17)%1,lim=t<RG[1]?.62:.62*(1-prog(t,RG[1],CUT)),u=ph*lim;A(pul[i],'cx',lerp(e.a[0],e.b[0],u).toFixed(1));A(pul[i],'cy',lerp(e.a[1],e.b[1],u).toFixed(1));op(pul[i],t<CUT?(1-ph)*.95:0);op(xs[i],eo(prog(t,CUT,CUT+400)));});
          var rp=eio(prog(t,RG[0],RG[1]));A(ring,'stroke-dasharray',(rp*100).toFixed(1)+' 100');A(ring,'r',(30-6*rp).toFixed(1));
          var pz=t<RG[1]?.5+.5*Math.sin(t/120):0;A(nodes[H].c,'fill',t<RG[1]?'rgba(192,57,43,'+(.35+.4*pz).toFixed(2)+')':'#5a1e1a');A(nodes[H].c,'stroke','#ff6b5e');
          op(iso,eo(prog(t,RG[1],RG[1]+300)));
          var cl=t>=CLN?(.5+.5*Math.cos((t-CLN)/160)):0;nodes.forEach(function(n,i){if(i===H)return;A(n.c,'stroke',t>=CLN?'#5FE08D':'#7fb0ff');A(n.c,'fill',t>=CLN?'rgba(22,163,74,'+(.12+.12*cl*(t<CLN+900?1:0)).toFixed(2)+')':'#0d2a5c');});
          op(bn,eo(prog(t,BN,BN+400)));
          bar(0,null,prog(t,RG[0],BN));var sr=lerp(.8,.04,prog(t,RG[0],BN));bar(1,null,sr,sr>.5?'High':sr>.2?'Falling':'Low');}};
    })());

    /* ===== 3. Evidence ===== */
    SC.push((function(){
      var svg=$id('dfV2');
      panel(svg,8,8,166,204);head(svg,18,25,'Acquisition','FIN-LT-07 · write-blocked');
      function pbar(y,lbl,sz,col){tx(svg,18,y,lbl,{'font-size':7.6,fill:'#fff','class':'t'});tx(svg,164,y,sz,{'font-size':6.8,'text-anchor':'end','class':'m'});
        sv('rect',{x:18,y:y+5,width:146,height:7,rx:3.5,fill:'rgba(255,255,255,.08)'},svg);var b=sv('rect',{x:18,y:y+5,width:0,height:7,rx:3.5,fill:col},svg);var pc=tx(svg,18,y+22,'0%',{'font-size':6.8,'class':'m'});return {b:b,pc:pc};}
      var mem=pbar(58,'Memory capture','16 GB','#c9bbff'),dsk=pbar(96,'Disk image','512 GB','#7fb0ff');
      sv('rect',{x:16,y:132,width:150,height:72,rx:7,fill:'rgba(3,10,26,.7)',stroke:'rgba(127,176,255,.18)'},svg);
      tx(svg,22,145,'SHA-256 · acquired',{'font-size':6.6,'class':'m'});var h1=tx(svg,22,156,'',{'font-size':6.6,fill:'#cfe0ff'});
      tx(svg,22,172,'SHA-256 · verified',{'font-size':6.6,'class':'m'});var h2=tx(svg,22,183,'',{'font-size':6.6,fill:'#cfe0ff'});
      var mt=tx(svg,22,198,'',{'font-size':7.4,fill:'#5FE08D','class':'t'});
      var HX='3b7e9c1f40a2d85e…c1f09a6b3e7d2485';
      panel(svg,182,8,130,204);head(svg,192,25,'Chain of custody','EV-001 · sample');
      var FR=[['Item','Disk image · EV-001'],['Collected by','A. Rao (sample)'],['Received by','S. Khan (sample)'],['Time','14:32 IST · sample']];
      var fr=FR.map(function(f,i){var y=50+i*26;tx(svg,192,y,f[0],{'font-size':6.4,'class':'m'});sv('line',{x1:192,y1:y+12,x2:302,y2:y+12,stroke:'rgba(127,176,255,.2)'},svg);return tx(svg,192,y+9,'',{'font-size':7.4,fill:'#fff','class':'t'});});
      tx(svg,192,162,'Signature',{'font-size':6.4,'class':'m'});
      var sg=sv('path',{d:'M196 186 c4 -12 8 4 12 -4 s6 -10 10 0 s5 8 9 -3 s6 -6 9 2 s6 3 14 -6',fill:'none',stroke:'#fff','stroke-width':1.4,'stroke-linecap':'round',pathLength:1,'stroke-dasharray':'1 1','stroke-dashoffset':1},svg);
      var stp=sv('g',{opacity:0},svg);sv('rect',{x:252,y:172,width:52,height:20,rx:5,fill:'none',stroke:'#5FE08D','stroke-width':1.6,transform:'rotate(-8 278 182)'},stp);tx(stp,278,185,'SIGNED',{'font-size':8,'text-anchor':'middle',fill:'#5FE08D','class':'t',transform:'rotate(-8 278 182)'});
      var M=[300,1500],D=[600,2700],H1=[2700,3300],H2=[3300,3900],MT=4000,FT=[1700,2300,2900,3500],SG=[3800,4600],ST=4700;
      return {title:'EVIDENCE · IMAGING & CUSTODY',bg:2,pc:'#c9bbff',pill:'Evidence preserved · 24×7',
        init:function(){baseSats();sat(1,'lock','Host · isolated','FIN-LT-07','ok');sat(2,'disk','Image · acquiring','Memory first','hot');sat(0,'clk','Ack · 15 min','Acknowledged','ok');
          tile(0,'0','EVIDENCE ITEMS','');tile(1,'0%','IMAGE','');tile(2,'—','HASH','');tile(3,'Open','CUSTODY','');
          bar(0,'MEMORY',0,'0%');bar(1,'DISK',0,'0%');barC(0,'#a48bff');barC(1,'#4d8dff');logHead('PRESERVING',CO.v);
          log('Evidence','Memory capture started · 16 GB',CO.v,0);},
        ev:[[M[1],function(){tile(0,'1','EVIDENCE ITEMS','');log('Evidence','Memory image complete',CO.v,1);}],
            [D[1],function(){tile(0,'2','EVIDENCE ITEMS','');log('Evidence','Disk image complete · 512 GB',CO.b,1);}],
            [MT,function(){tile(2,'Match','HASH','good');tile(0,'3','EVIDENCE ITEMS','hit');sat(2,'disk','Image · hash verified','SHA-256 match','ok');log('Verify','Image hashed · match (sample)',CO.g,1);}],
            [ST,function(){tile(3,'Signed','CUSTODY','good');log('Custody','EV-001 form signed',CO.g,1);}]],
        draw:function(t){var pm=eio(prog(t,M[0],M[1])),pd=eio(prog(t,D[0],D[1]));
          A(mem.b,'width',(146*pm).toFixed(1));setT(mem.pc,pm>=1?'100% · done':Math.round(pm*100)+'%');A(dsk.b,'width',(146*pd).toFixed(1));setT(dsk.pc,pd>=1?'100% · done':Math.round(pd*100)+'%');
          var n1=Math.round(HX.length*prog(t,H1[0],H1[1])),n2=Math.round(HX.length*prog(t,H2[0],H2[1]));setT(h1,HX.slice(0,n1));setT(h2,HX.slice(0,n2));setT(mt,t>=MT?'✓ acquired = verified':'');
          FR.forEach(function(f,i){var c=Math.round(f[1].length*prog(t,FT[i],FT[i]+450));setT(fr[i],f[1].slice(0,c));});
          A(sg,'stroke-dashoffset',(1-eio(prog(t,SG[0],SG[1]))).toFixed(3));var sp=prog(t,ST,ST+350);op(stp,sp);
          bar(0,null,pm);bar(1,null,pd);tileV(1,Math.round(pd*100)+'%');}};
    })());

    /* ===== 4. Root cause ===== */
    SC.push((function(){
      var svg=$id('dfV3');
      tx(svg,12,20,'Attack timeline',{'font-size':10,fill:'#fff','class':'t'});tx(svg,12,31,'Plain language · sample',{'font-size':7.2,'class':'m'});
      var X=[42,122,202,282],Y=92,LB=['Phishing email','Credential misuse','Blocked','Isolated'],TM=['09:12','09:40','10:05','10:07'],CL=['#FFB15C','#ff8a7d','#7fb0ff','#5FE08D'];
      sv('line',{x1:28,y1:Y,x2:296,y2:Y,stroke:'rgba(127,176,255,.25)','stroke-width':2},svg);
      var prg=sv('line',{x1:28,y1:Y,x2:28,y2:Y,stroke:'#FF8C1A','stroke-width':2.4,'stroke-linecap':'round'},svg);
      var nd=X.map(function(x,i){var c=sv('circle',{cx:x,cy:Y,r:9,fill:'#0d2a5c',stroke:'rgba(127,176,255,.45)','stroke-width':1.5},svg);
        var l=tx(svg,x,Y-18,LB[i],{'font-size':7.4,'text-anchor':'middle',fill:'#9fb6de','class':'t'}),m=tx(svg,x,Y+24,TM[i],{'font-size':6.8,'text-anchor':'middle','class':'m'});
        var k=tx(svg,x,Y+3,String(i+1),{'font-size':7.5,'text-anchor':'middle',fill:'#fff','class':'t'});return {c:c,l:l};});
      var tok=sv('circle',{cx:28,cy:Y,r:4,fill:'#fff',opacity:0},svg);
      var rc=sv('g',{opacity:0},svg);sv('rect',{x:X[0]-28,y:42,width:56,height:14,rx:4,fill:'#FF8C1A'},rc);tx(rc,X[0],52,'ROOT CAUSE',{'font-size':6.8,'text-anchor':'middle',fill:'#fff','class':'t'});
      panel(svg,8,132,304,80);
      tx(svg,18,149,'Root cause · sample',{'font-size':7,'class':'m'});var rt=tx(svg,18,163,'',{'font-size':8.6,fill:'#fff','class':'t'});
      var RT='A phished password was used where MFA was not on.';
      var CH=[['Enforce MFA',18,'#5FE08D'],['Reset credentials',96,'#7fb0ff'],['Filter look-alike mail',192,'#FFB15C']];
      var ch=CH.map(function(c){var g=sv('g',{opacity:0},svg),w=c[0].length*4.3+16;sv('rect',{x:c[1],y:176,width:w,height:18,rx:9,fill:c[2],'fill-opacity':.15,stroke:c[2]},g);tx(g,c[1]+w/2,188,c[0],{'font-size':7.2,'text-anchor':'middle',fill:'#fff','class':'t'});return g;});
      var T0=300,T1=3000,RC=3200,RX=[3300,3900],CT=[3900,4300,4700];
      return {title:'ROOT CAUSE · TIMELINE',bg:3,pc:'#7fb0ff',pill:'Root cause, in plain language',
        init:function(){baseSats();sat(1,'lock','Host · isolated','FIN-LT-07','ok');sat(2,'disk','Image · hash verified','Analysing','ok');sat(0,'clk','Ack · 15 min','Acknowledged','ok');
          tile(0,'0','EVENTS','');tile(1,'—','ENTRY POINT','');tile(2,'—','DWELL · SAMPLE','');tile(3,'Searching','ROOT CAUSE','hit');
          bar(0,'TIMELINE',0,'0%');bar(1,'FINDINGS',0,'0/3');barC(0,'#4d8dff');barC(1,'#FF8C1A');logHead('INVESTIGATING',CO.b);
          log('Analyse','Timeline built from 4 sources',CO.b,0);},
        ev:[[900,function(){tile(1,'Email','ENTRY POINT','');log('Finding','Phishing email · 09:12 IST',CO.o,1);}],
            [1800,function(){log('Finding','Credential misuse · 09:40 IST',CO.r,1);}],
            [2600,function(){tile(2,'55 min','DWELL · SAMPLE','');log('Finding','Activity blocked · host isolated',CO.g,1);}],
            [RC,function(){tile(3,'Found','ROOT CAUSE','good');log('Root cause','Phished password · no MFA',CO.o,1);}],
            [CT[2],function(){log('Fix','3 remediation steps agreed',CO.g,1);}]],
        draw:function(t){var u=eio(prog(t,T0,T1)),x=lerp(28,296,u);A(prg,'x2',x.toFixed(1));A(tok,'cx',x.toFixed(1));op(tok,t>T0&&t<T1+200?1:0);
          var n=0;nd.forEach(function(o,i){var on=x>=X[i]-1;if(on)n++;A(o.c,'fill',on?CL[i]:'#0d2a5c');A(o.c,'stroke',on?CL[i]:'rgba(127,176,255,.45)');A(o.l,'fill',on?'#fff':'#9fb6de');A(o.c,'r',on&&i===0&&t>=RC?(10+1.5*Math.sin(t/160)).toFixed(2):9);});
          tileV(0,String(n));op(rc,eo(prog(t,RC,RC+300)));setT(rt,RT.slice(0,Math.round(RT.length*prog(t,RX[0],RX[1]))));
          var c=0;ch.forEach(function(g,i){var p=prog(t,CT[i],CT[i]+300);if(p>=1)c++;op(g,p);A(g,'transform','translate(0 '+((1-eo(p))*6).toFixed(1)+')');});
          bar(0,null,u);bar(1,null,c/3,c+'/3');}};
    })());

    /* ===== 5. Regulatory ===== */
    SC.push((function(){
      var svg=$id('dfV4');
      tx(svg,12,20,'Reporting',{'font-size':10,fill:'#fff','class':'t'});tx(svg,12,31,'Regulator clocks · sample',{'font-size':7.2,'class':'m'});
      var cx=72,cy=112,RR=52;
      sv('circle',{cx:cx,cy:cy,r:RR+8,fill:'rgba(127,176,255,.04)',stroke:'rgba(127,176,255,.14)'},svg);
      for(var i=0;i<24;i++){var a=i/24*Math.PI*2,r1=RR+3,r2=RR+(i%4?6:9);sv('line',{x1:(cx+Math.sin(a)*r1).toFixed(1),y1:(cy-Math.cos(a)*r1).toFixed(1),x2:(cx+Math.sin(a)*r2).toFixed(1),y2:(cy-Math.cos(a)*r2).toFixed(1),stroke:i%4?'rgba(255,255,255,.25)':'#fff','stroke-width':i%4?1:1.6},svg);}
      sv('circle',{cx:cx,cy:cy,r:RR-6,fill:'none',stroke:'rgba(255,255,255,.08)','stroke-width':7},svg);
      var arc=sv('circle',{cx:cx,cy:cy,r:RR-6,fill:'none',stroke:'#FF8C1A','stroke-width':7,'stroke-linecap':'round',pathLength:100,'stroke-dasharray':'100 100',transform:'rotate(-90 '+cx+' '+cy+')'},svg);
      var hand=sv('line',{x1:cx,y1:cy,x2:cx,y2:cy-RR+14,stroke:'#fff','stroke-width':2,'stroke-linecap':'round'},svg);sv('circle',{cx:cx,cy:cy,r:3.5,fill:'#FF8C1A'},svg);
      var lt=tx(svg,cx,cy+20,'',{'font-size':10,'text-anchor':'middle',fill:'#fff','class':'t'});tx(svg,cx,cy+30,'time left',{'font-size':6.3,'text-anchor':'middle','class':'m'});
      var rdy=sv('g',{opacity:0},svg);sv('rect',{x:cx-38,y:194,width:76,height:16,rx:8,fill:'rgba(22,163,74,.2)',stroke:'#5FE08D'},rdy);tx(rdy,cx,205,'Ready to file',{'font-size':7.4,'text-anchor':'middle',fill:'#b6f5cd','class':'t'});
      var DC=[['CERT-In incident report','Generated · draft','#FFB15C'],['DPDP breach notice','Drafted · for review','#7fb0ff'],['Board summary.pdf','10 slides · ready','#c9bbff']];
      var docs=DC.map(function(c,i){var y=44+i*56,g=sv('g',{opacity:0},svg);sv('rect',{x:146,y:y,width:166,height:48,rx:9,fill:'rgba(127,176,255,.06)',stroke:'rgba(127,176,255,.2)'},g);
        sv('rect',{x:154,y:y+9,width:22,height:28,rx:3,fill:c[2],'fill-opacity':.18,stroke:c[2]},g);[0,1,2].forEach(function(k){sv('rect',{x:158,y:y+15+k*6,width:14,height:2.4,rx:1.2,fill:c[2],'fill-opacity':.7},g);});
        tx(g,184,y+18,c[0],{'font-size':7.8,fill:'#fff','class':'t'});var s=tx(g,184,y+29,'',{'font-size':6.6,'class':'m'});
        sv('rect',{x:184,y:y+35,width:100,height:4,rx:2,fill:'rgba(255,255,255,.08)'},g);var b=sv('rect',{x:184,y:y+35,width:0,height:4,rx:2,fill:c[2]},g);
        var ck=sv('g',{opacity:0},g);sv('circle',{cx:298,cy:y+24,r:7,fill:'#16a34a'},ck);sv('path',{d:'M294.5 '+(y+24)+' l2.5 2.5 l4.5 -5',fill:'none',stroke:'#fff','stroke-width':1.6,'stroke-linecap':'round'},ck);
        return {g:g,s:s,b:b,ck:ck,sub:c[1]};});
      var E0=40*60,E1=72*60,W=6*3600,DA=[400,1700,3000],RD=4300;
      return {title:'REGULATORY · CERT-IN 6 H',bg:4,pc:'#6fd3ff',pill:'CERT-In-ready reports',
        init:function(){baseSats();sat(1,'lock','Host · isolated','FIN-LT-07','ok');sat(2,'disk','Image · hash verified','EV-001 · signed','ok');sat(0,'clk','Ack · 15 min','Acknowledged','ok');sat(3,'flag','CERT-In · 6 h clock','Report drafting','hot');
          tile(0,'Drafting','CERT-IN REPORT','hit');tile(1,'—','DPDP NOTICE','');tile(2,'—','BOARD PDF','');tile(3,hms(W-E0),'TIME LEFT','');
          bar(0,'REPORTS',0,'0/3');bar(1,'6 H WINDOW',E0/W,'');barC(0,'#5FE08D');barC(1,'#FF8C1A');logHead('REPORTING',CO.a);
          log('Report','CERT-In draft started',CO.a,0);},
        ev:[[DA[0]+900,function(){tile(0,'Ready','CERT-IN REPORT','good');log('Report','CERT-In incident report generated',CO.o,1);}],
            [DA[1]+900,function(){tile(1,'Drafted','DPDP NOTICE','good');log('Notice','DPDP notice drafted · counsel review',CO.b,1);}],
            [DA[2]+900,function(){tile(2,'Ready','BOARD PDF','good');log('Brief','Board summary.pdf ready',CO.v,1);}],
            [RD,function(){sat(3,'flag','CERT-In · ready to file','Inside the 6 h window','ok');log('Status','Ready to file · client submits',CO.g,1);}]],
        draw:function(t){var el=lerp(E0,E1,prog(t,0,DUR)),f=el/W;A(arc,'stroke-dasharray',((1-f)*100).toFixed(2)+' 100');
          var ang=f*360;A(hand,'transform','rotate('+ang.toFixed(2)+' '+cx+' '+cy+')');setT(lt,hms(W-el));tileV(3,hms(W-el));
          var n=0;docs.forEach(function(o,i){var a=prog(t,DA[i],DA[i]+350),p=eio(prog(t,DA[i]+150,DA[i]+900));op(o.g,a);A(o.g,'transform','translate('+((1-eo(a))*14).toFixed(1)+' 0)');A(o.b,'width',(100*p).toFixed(1));op(o.ck,p>=1?1:0);setT(o.s,p>=1?o.sub:p>0?'Preparing… '+Math.round(p*100)+'%':'');if(p>=1)n++;});
          op(rdy,eo(prog(t,RD,RD+400)));bar(0,null,n/3,n+'/3');bar(1,null,f,Math.round(f*100)+'%');}};
    })());

    /* ---------------- satellite link lines ---------------- */
    function linkLayout(){if(!lnk)return;var tilt=$('.lh-tilt',stage);if(getComputedStyle(lnk).display==='none'||getComputedStyle(sats[0]).display==='none'||getComputedStyle(sats[0]).position!=='absolute'){paths=null;lnk.innerHTML='';return;}
      var cx=tilt.offsetLeft+tilt.offsetWidth/2,cy=tilt.offsetTop+tilt.offsetHeight*.4;lnk.setAttribute('viewBox','0 0 '+stage.offsetWidth+' '+stage.offsetHeight);
      lnk.innerHTML='';paths=sats.map(function(s){var sx=s.offsetLeft+s.offsetWidth/2,sy=s.offsetTop+s.offsetHeight/2,mx=(sx+cx)/2,my=Math.min(sy,cy)-20;
        var p=sv('path',{d:'M'+sx.toFixed(0)+' '+sy.toFixed(0)+' Q'+mx.toFixed(0)+' '+my.toFixed(0)+' '+cx.toFixed(0)+' '+cy.toFixed(0)},lnk);
        var c=sv('circle',{r:3},lnk);return {el:p,dot:c,S:samp(p,48)};});
      sats.forEach(function(s,k){var cls=['hot','red','ok','pu'].filter(function(c){return s.classList.contains(c);})[0]||'';paths[k].el.setAttribute('class',cls);paths[k].dot.setAttribute('class',cls==='red'?'r':cls==='ok'?'g':cls==='pu'?'p':cls==='hot'?'o':'');});}
    function linkDots(t){if(!paths)return;for(var j=0;j<paths.length;j++){var pq=paths[j],hot=sats[j].classList.contains('hot')||sats[j].classList.contains('red'),spd=hot?1300:2600,u=((t/spd)+j*.27)%1,q=atS(pq.S,u);A(pq.dot,'cx',q[0].toFixed(1));A(pq.dot,'cy',q[1].toFixed(1));}}

    /* ---------------- carousel engine ---------------- */
    var cur=-1,T=0,adv=0,ei=0,hold=false,outTmr=0,clock=0;
    var KB=[[1,-1],[-1,1],[1,1],[-1,-1],[0,-1]];
    function kb(k,p){var e=kbs[k],v=KB[k],s=1.01+.03*p,tr='scale('+s.toFixed(4)+') translate('+(v[0]*p*.8).toFixed(2)+'%,'+(v[1]*p*.7).toFixed(2)+'%)';if(e._t!==tr){e._t=tr;e.style.transform=tr;}}
    function go(k,dir){k=(k+N)%N;if(k===cur)return;var old=cur;cur=k;T=0;adv=0;ei=0;
      slides.forEach(function(s,i){s.classList.remove('out','bk');if(i!==k&&i!==old)s.classList.remove('on');});
      if(old>=0){slides[old].classList.remove('on');slides[old].classList.add('out');if(dir<0)slides[old].classList.add('bk');slides[old].setAttribute('aria-hidden','true');clearTimeout(outTmr);outTmr=setTimeout(function(){slides.forEach(function(s,i){if(i!==cur)s.classList.remove('out','bk');});},1050);}
      if(dir<0&&old>=0){slides[k].classList.add('bk');void slides[k].offsetWidth;slides[k].classList.remove('bk');}
      slides[k].classList.add('on');slides[k].removeAttribute('aria-hidden');
      dots.forEach(function(b,i){b.classList.toggle('on',i===k);b.classList.toggle('dn',i<k);b.setAttribute('aria-selected',i===k?'true':'false');b.style.removeProperty('--p');});
      var s=SC[k];setT(scN,'0'+(k+1));setT(scT,s.title);restart(scT,'sw');
      if(pillS.textContent!==s.pill){pillS.textContent=s.pill;restart(pill,'sw');}
      bgL.forEach(function(l,i){l.classList.toggle('on',i===s.bg);});hero.style.setProperty('--dfc',s.pc);
      s.init();s.draw(0);}
    function step(t,dt){clock+=dt;if(!hold)adv+=dt;T+=dt;
      var s=SC[cur];while(ei<s.ev.length&&T>=s.ev[ei][0]){s.ev[ei][1]();ei++;}
      s.draw(Math.min(T,DUR));kb(cur,eio(clamp(T/DUR,0,1)));
      var dp=clamp(adv/DUR,0,1).toFixed(3);if(dots[cur]._p!==dp){dots[cur]._p=dp;dots[cur].style.setProperty('--p',dp);}
      linkDots(clock);
      if(T>=DUR){if(!hold&&adv>=DUR)go(cur+1,1);else if(hold){T=0;ei=0;s.init();}}
      else if(adv>=DUR&&!hold)go(cur+1,1);}
    SC.forEach(function(s){s.ev.sort(function(a,b){return a[0]-b[0];});s.draw(0);});
    linkLayout();if(d.fonts&&d.fonts.ready)d.fonts.ready.then(linkLayout);
    var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(linkLayout,150);});
    function staticShow(k){go(k,1);var s=SC[k];s.init();s.ev.forEach(function(e){e[1]();});s.draw(DUR);kb(k,0);dots.forEach(function(b){b.style.removeProperty('--p');});}
    dots.forEach(function(b,i){b.addEventListener('click',function(){if(R){staticShow(i);return;}go(i,i<cur?-1:1);});
      b.addEventListener('keydown',function(e){var k=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(!k)return;e.preventDefault();var n=(cur+k+N)%N;dots[n].focus();dots[n].click();});});
    window._dfGo=function(k){if(R)staticShow(k);else go(k,1);};
    if(R){staticShow(0);bgW.classList.add('paused');if(pf)pf.classList.add('paused');return;}
    go(0,1);
    function setHold(v){hold=v;stage.classList.toggle('hold',v);}
    if(FINE){stage.addEventListener('pointerenter',function(e){if(e.pointerType==='mouse')setHold(true);});stage.addEventListener('pointerleave',function(e){if(e.pointerType==='mouse')setHold(false);});}
    stage.addEventListener('focusin',function(){setHold(true);});stage.addEventListener('focusout',function(e){if(!stage.contains(e.relatedTarget))setHold(false);});
    var sx0=null,sy0=0;
    scr.addEventListener('pointerdown',function(e){sx0=e.clientX;sy0=e.clientY;});
    scr.addEventListener('pointerup',function(e){if(sx0===null)return;var dx=e.clientX-sx0,dy=e.clientY-sy0;sx0=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))go(cur+(dx<0?1:-1),dx<0?1:-1);});
    scr.addEventListener('pointercancel',function(){sx0=null;});
    var on=loop(step);XH.whenVisible(card,function(v){on(v);bgW.classList.toggle('paused',!v);if(pf)pf.classList.toggle('paused',!v);});
    d.addEventListener('visibilitychange',function(){if(d.hidden)on(false);else{var r=card.getBoundingClientRect();if(r.bottom>0&&r.top<innerHeight)on(true);}});
  })();

  /* =========================================================
     2. Micro-interactions & reveals
     ========================================================= */
  $$('.df-kin').forEach(function(h){var i=0;h.setAttribute('aria-label',h.textContent.replace(/\s+/g,' ').trim());
    (function walk(n){Array.prototype.slice.call(n.childNodes).forEach(function(c){
      if(c.nodeType===3){var f=d.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(p){if(!p)return;if(/^\s+$/.test(p))f.appendChild(d.createTextNode(p));else{var s=d.createElement('span');s.className='w';s.setAttribute('aria-hidden','true');s.style.setProperty('--i',i++);s.textContent=p;f.appendChild(s);}});c.parentNode.replaceChild(f,c);}
      else if(c.nodeType===1)walk(c);});})(h);});
  $$('.df-draw svg').forEach(function(s){$$('path,circle,line,rect,polyline,polygon,ellipse',s).forEach(function(p){p.setAttribute('pathLength','1');});});
  if(!R){
    var shs=$$('main .sec .df-ch'),ptick=false;
    var para=function(){ptick=false;var vh=innerHeight;shs.forEach(function(e){var r=e.getBoundingClientRect();if(r.bottom<-80||r.top>vh+80)return;var p=(r.top+r.height/2-vh*.5)/vh;e.style.translate='0 '+(clamp(p,-1,1)*-14).toFixed(1)+'px';});};
    addEventListener('scroll',function(){if(!ptick){ptick=true;requestAnimationFrame(para);}},{passive:true});para();
  }
  function bindFx(root){if(!FINE||R)return;
    $$('.df-mag',root).forEach(function(b){if(b._fx)return;b._fx=1;
      b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.classList.add('mg');b.style.translate=(x*16).toFixed(1)+'px '+(y*11).toFixed(1)+'px';});
      b.addEventListener('pointerleave',function(){b.classList.remove('mg');b.style.translate='';});});
    $$('.df-tl',root).forEach(function(c){if(c._fx)return;c._fx=1;
      c.addEventListener('pointermove',function(e){if(c.classList.contains('rv')&&!c.classList.contains('in'))return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
        c.classList.add('tilting');c.style.transform='perspective(900px) rotateX('+((.5-y)*6).toFixed(2)+'deg) rotateY('+((x-.5)*7).toFixed(2)+'deg) translateY(-4px)';c.style.setProperty('--gx',(x*100).toFixed(1)+'%');c.style.setProperty('--gy',(y*100).toFixed(1)+'%');});
      c.addEventListener('pointerleave',function(){c.classList.remove('tilting');c.style.transform='';});});}
  ['dfVs','dfOc'].forEach(function(id){var el=$id(id);if(el)XH.whenVisible(el,function(v){if(v)el.classList.add('in');});});
  /* tooling marquee (generic categories + XcellHost's own products only) */
  (function(){var m=$id('dfMq');if(!m)return;var IT=[['EDR telemetry','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>','#1565D8'],['SIEM · Managed Sentinel','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>','#FF8C1A'],['Scrutiny EDR','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>','#041E42'],['M365 audit logs','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>','#0C3E8F'],['Cloud audit trails','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>','#6c4bd8'],['Disk imaging','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>','#c0392b'],['Memory capture','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="1.5"/><path d="M6 11v2M10 11v2M14 11v2M18 11v2M5 17v3M19 17v3"/></svg>','#16a34a'],['Hash verification','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>','#1565D8'],['Email trace','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>','#FF8C1A'],['Firewall & VPN logs','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>','#041E42'],['Timeline analysis','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>','#0C3E8F'],['Case & custody log','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c3-1 4-8 6-8s0 8 3 8 3-4 5-4 2 3 4 3"/><path d="M3 21h18"/></svg>','#6c4bd8']];
    var one=function(h){return IT.map(function(x){return '<span'+(h?' aria-hidden="true"':'')+'><i style="background:'+x[2]+'">'+x[1]+'</i>'+esc(x[0])+'</span>';}).join('');};m.innerHTML=one(0)+one(1);
    var w=m.parentNode;if(R){w.classList.add('paused');return;}XH.whenVisible(w,function(v){w.classList.toggle('paused',!v);});})();
  function cycle(box,sel,ms){if(!box||R)return;var ss=$$(sel,box),k=-1,tmr=0,vis=false;
    function st(){if(!vis)return;k=(k+1)%(ss.length+1);ss.forEach(function(s,i){s.classList.toggle('lit',i===k);});tmr=setTimeout(st,k===ss.length?900:ms);}
    XH.whenVisible(box,function(v){vis=v;clearTimeout(tmr);if(v)tmr=setTimeout(st,900);else ss.forEach(function(s){s.classList.remove('lit');});});}
  cycle($id('dfSp'),'.sp',1200);cycle($id('dfOc'),'.oc',1300);cycle($id('dfSc'),'.srw',900);cycle($id('dfInv'),'.iv',700);
  /* overview stat rings */
  (function(){var box=$id('dfSt');if(!box)return;var done=false,bs=$$('.df-rd b[data-to]',box);
    XH.whenVisible(box,function(v){if(!v||done)return;done=true;box.classList.add('go');
      bs.forEach(function(b,i){var to=+b.getAttribute('data-to'),suf=b.getAttribute('data-suf')||'',f=function(x){return fmt(x)+suf;};
        if(R){b.textContent=f(to);return;}var t0=null,ms=1400+i*220;
        (function g(t){t0=t0||t;var p=Math.min(1,(t-t0)/ms);b.textContent=f(to*eo(p));if(p<1)requestAnimationFrame(g);else b.parentNode.classList.add('done');})(performance.now());});});})();
  /* deliverables: fanning evidence stack + hash check */
  (function(){var st=$id('dvSt'),hs=$id('dvHash'),okE=$id('dvOk');if(!st)return;var cs=$$('.dc',st),k=0,tmr=0,HX='3b7e9c1f40a2d85e6f1b…c1f09a6b3e7d2485';
    if(R){st.classList.add('fan');hs.textContent=HX;okE.classList.add('on');return;}
    function run(){st.classList.toggle('fan');cs.forEach(function(c,i){c.classList.toggle('lit',i===k);});k=(k+1)%cs.length;
      okE.classList.remove('on');var n=0;(function ty(){if(n>HX.length){okE.classList.add('on');return;}hs.textContent=HX.slice(0,n);n+=2;tmr2=setTimeout(ty,28);})();tmr=setTimeout(run,2600);}
    var tmr2=0;XH.whenVisible(st,function(v){clearTimeout(tmr);clearTimeout(tmr2);if(v)run();});})();
  /* regulatory clock */
  (function(){var svg=$id('rgClk');if(!svg)return;var tk=$id('rgTicks'),hand=$id('rgHand'),arc=$id('rgArc'),tt=$id('rgT'),cards=$$('#dfRg .rgc');
    for(var i=0;i<24;i++){var a=i/24*Math.PI*2,r1=72,r2=i%4?77:80;sv('line',{x1:(100+Math.sin(a)*r1).toFixed(1),y1:(100-Math.cos(a)*r1).toFixed(1),x2:(100+Math.sin(a)*r2).toFixed(1),y2:(100-Math.cos(a)*r2).toFixed(1),'class':i%4?'':'h'},tk);}
    var W=21600,el=0,lastCard=-1;
    function draw(){var f=el/W;arc.setAttribute('stroke-dasharray',((1-f)*100).toFixed(2)+' 100');hand.setAttribute('transform','rotate('+(f*360).toFixed(2)+' 100 100)');tt.textContent=hms(W-el);
      var c=Math.floor(f*cards.length*1.0);if(c!==lastCard&&cards[c]){if(cards[lastCard])cards[lastCard].classList.remove('tick');cards[c].classList.add('tick');lastCard=c;}}
    if(R){el=W*.3;draw();return;}
    var on=loop(function(t,dt){el+=dt*2.4;if(el>=W)el=0;draw();});XH.whenVisible(svg,function(v){on(v);});draw();})();
  bindFx(d);

  /* =========================================================
     3. Lifecycle — scroll-pinned network narrative
     ========================================================= */
  (function(){
    var pin=$id('dfPin'),box=$id('dfPv'),svg=$id('pvSvg');if(!pin||!box||!svg)return;
    var steps=$$('.ps',pin),rail=$id('pnRail'),cur=-1,vis=false,auto=true,at=0;
    var NAMES=['Prepare','Identify','Contain','Eradicate','Recover','Lessons learned'];
    var FOOT=['Playbooks, contacts and log sources agreed before anything happens.','Alert confirmed on FIN-LT-07 · severity P1 · regulator clocks started (sample).','FIN-LT-07 isolated · links cut · the other 7 hosts keep working.','Entry point closed · credentials reset · persistence removed.','Restored from a clean, verified source · heightened monitoring on.','Report, board briefing and a free re-test to prove findings are closed.'];
    var ND=[[70,70],[190,52],[320,72],[54,170],[210,150],[360,170],[110,250],[290,248]],K=4,ED=[[4,0],[4,1],[4,2],[4,3],[4,5],[4,6],[4,7],[0,1],[1,2],[0,3],[3,6],[6,7],[5,7],[2,5]];
    var h='<g transform="translate(0 14)"><g class="swp"><circle cx="210" cy="150" r="120" class="ghost"/><path d="M210 150 L210 30 A120 120 0 0 1 314 90 Z"/></g><circle cx="210" cy="150" r="120" class="rr"/><circle cx="210" cy="150" r="70" class="rr"/><g class="pv-ed">';
    ED.forEach(function(e){var a=ND[e[0]],b=ND[e[1]];h+='<line x1="'+a[0]+'" y1="'+a[1]+'" x2="'+b[0]+'" y2="'+b[1]+'" class="'+(e[0]===K?'k':'')+'"/>';});
    h+='</g><circle cx="'+ND[K][0]+'" cy="'+ND[K][1]+'" r="34" class="pv-ring" pathLength="100"/><g class="pv-nd">';
    ND.forEach(function(n,i){h+='<g class="nd'+(i===K?' k':'')+'" transform="translate('+n[0]+' '+n[1]+')"><rect class="bx" x="-17" y="-13" width="34" height="26" rx="7"/><rect class="sc" x="-9" y="-7" width="18" height="10" rx="1.5"/><path class="st" d="M-5 7 h10"/></g>';});
    h+='</g>';
    h+='<g class="ov o1"><rect x="160" y="100" width="100" height="20" rx="6" class="am"/><text x="210" y="114" text-anchor="middle">ALERT · P1</text></g>';
    h+='<g class="ov o2"><rect x="168" y="100" width="84" height="20" rx="6" class="rd"/><text x="210" y="114" text-anchor="middle">ISOLATED</text></g>';
    h+='<g class="ov o3"><rect x="136" y="100" width="148" height="20" rx="6" class="bl"/><text x="210" y="114" text-anchor="middle">ENTRY POINT CLOSED</text></g>';
    h+='<g class="ov o4"><rect x="160" y="100" width="100" height="20" rx="6" class="gr"/><text x="210" y="114" text-anchor="middle">RESTORED ✓</text></g></g>';
    h+='<g class="ov o0"><rect x="8" y="6" width="198" height="52" rx="9"/><text x="20" y="24">IR playbook · ready</text><text x="20" y="38" class="m">✓ Contacts  ✓ Log sources</text><text x="20" y="51" class="m">✓ Tabletop  ✓ Retainer</text></g>';
    h+='<g class="ov o5"><rect x="110" y="40" width="220" height="222" rx="14" class="rp"/><text x="128" y="66">Incident report · sample</text>';
    [['Executive summary',1],['Timeline & root cause',.86],['Remediation plan',.72],['Regulator summary',.6],['Board briefing',.5]].forEach(function(r,i){var y=88+i*30;h+='<text x="128" y="'+y+'" class="m">'+r[0]+'</text><rect x="128" y="'+(y+6)+'" width="184" height="6" rx="3" class="tk"/><rect x="128" y="'+(y+6)+'" width="'+(184*r[1]).toFixed(0)+'" height="6" rx="3" class="br" style="transition-delay:'+(i*.12+.2).toFixed(2)+'s"/>';});
    h+='<rect x="236" y="234" width="80" height="18" rx="9" class="gr"/><text x="276" y="247" text-anchor="middle">RE-TEST ✓</text></g>';
    svg.innerHTML=h;
    function sel(s,fromScroll){if(s===cur)return;cur=s;
      box.setAttribute('data-s',s);setT('pvH',NAMES[s]);restart($id('pvH'),'sw');setT('pvC',(s+1)+' / 6');setT('pvF',FOOT[s]);restart($id('pvF'),'sw');
      steps.forEach(function(st,i){st.classList.toggle('on',i===s);st.classList.toggle('dn',i<s);});
      if(rail&&!fromScroll)rail.style.transform='scaleY('+((s+1)/6).toFixed(3)+')';}
    function wide(){return innerWidth>900;}
    var panel=box.parentElement,tk=false;
    function viewportHeight(){return window.frameElement?window.parent.innerHeight:innerHeight;}
    function onScroll(){tk=false;
      if(!wide()){panel.style.transform='';return;}
      var embedded=window.frameElement,vh=viewportHeight(),ft=embedded?embedded.getBoundingClientRect().top:0,mid=vh*.5,k=0;
      if(embedded){
        var top=Math.max(112,(vh-panel.offsetHeight)/2);
        var shift=clamp(top-ft-pin.getBoundingClientRect().top,0,Math.max(0,pin.offsetHeight-panel.offsetHeight));
        panel.style.transform='translate3d(0,'+shift.toFixed(1)+'px,0)';
      }
      steps.forEach(function(st,i){if(st.getBoundingClientRect().top+ft<mid)k=i;});
      var first=steps[0].getBoundingClientRect(),last=steps[steps.length-1].getBoundingClientRect(),p=clamp((mid-ft-first.top)/(last.bottom-first.top),0,1);
      if(rail)rail.style.transform='scaleY('+p.toFixed(3)+')';sel(k,true);
    }
    function schedule(){if(!tk){tk=true;requestAnimationFrame(onScroll);}}
    addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
    steps.forEach(function(st,i){st.addEventListener('click',function(){if(wide()){var r=st.getBoundingClientRect();window.scrollTo({top:r.top+scrollY-viewportHeight()*.5+40,behavior:R?'auto':'smooth'});}else{auto=false;sel(i);}});});
    sel(0);onScroll();
    XH.whenVisible(box,function(v){vis=v;box.classList.toggle('run',v&&!R);});
    var ap=0;XH.whenVisible(pin,function(v){clearInterval(ap);if(v&&!R)ap=setInterval(function(){if(!wide()&&auto&&vis)sel((cur+1)%6);},3400);});
  })();

  /* =========================================================
     4. Retainer rows (Tally style) — price on quote only
     ========================================================= */
  var TERM={1:'1-year retainer',2:'2-year retainer',3:'3-year retainer'};
  var PLANS=[
    {k:'em',n:'Emergency IR',s:'No retainer',f:'For an incident now',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>',c:'#c0392b',cb:'rgba(192,57,43,.08)',em:true,
     g:[['Mobilisation','Same-day*'],['Retainer','None'],['Hotline','24×7'],['Containment','Yes'],['Forensic imaging','Hash-verified'],['Chain of custody','Yes'],['Root-cause report','Yes'],['Regulator summary','Yes'],['Billing','Fixed proposal']]},
    {k:'ess',n:'DFIR Retainer',s:'Essential',f:'For SMBs',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',c:'#1565D8',cb:'rgba(21,101,216,.08)',
     g:[['Pre-agreed hours','40 h / yr*'],['Response SLA','4 h remote*'],['Hotline','24×7'],['Critical ack','15 min'],['Imaging & custody','Included'],['Reports','Exec + technical'],['Readiness review','Annual*'],['Free re-test','Yes'],['Term','—']]},
    {k:'pro',n:'Retainer',s:'Professional',f:'For mid-size orgs',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',c:'#F57C00',cb:'rgba(245,124,0,.09)',pop:true,
     g:[['Pre-agreed hours','80 h / yr*'],['Response SLA','2 h remote*'],['Compromise assessment','Annual'],['Tabletop exercise','Annual'],['Critical ack','15 min'],['Regulator templates','CERT-In · DPDP'],['Imaging & custody','Included'],['Free re-test','Yes'],['Term','—']]},
    {k:'ent',n:'Retainer',s:'Enterprise',f:'For large & BFSI',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',c:'#041E42',cb:'rgba(4,30,66,.08)',
     g:[['Pre-agreed hours','160 h / yr*'],['Named engineer','Yes'],['Critical ack','15 min'],['Readiness reviews','Quarterly'],['Compromise assessment','Annual'],['Tabletop exercise','Bi-annual*'],['On-site mobilisation','Pan-India*'],['Board briefing','Included'],['Term','—']]}];
  var PL={};PLANS.forEach(function(p){PL[p.k]=p;});
  var curTerm=2,selTier='pro',syncCfg=null;
  (function(){var G=$id('ptG'),bt=$id('ptBill');if(!G)return;
    function render(){var h='';PLANS.forEach(function(p){h+='<div class="pr-r rv in'+(p.pop?' pop':'')+(p.em?' em':'')+(p.k===selTier?' sel':'')+'" data-k="'+p.k+'" style="--c:'+p.c+';--cb:'+p.cb+'">'+
        '<div class="pr-l"><span class="fr2">'+esc(p.f)+'</span><div class="pn"><i>'+p.ic+'</i><span><b>'+esc(p.n)+'</b><small>'+esc(p.s)+'</small></span></div>'+(p.pop?'<span class="pf">Most popular</span>':'')+'</div>'+
        '<div class="pr-g">'+p.g.map(function(c){var v=c[0]==='Term'?TERM[curTerm]:c[1];return '<div><span>'+esc(c[0])+'</span><b'+(c[0]==='Term'?' class="sw"':'')+'>'+esc(v)+'</b></div>';}).join('')+'</div>'+
        '<div class="pr-p"><span class="am">Price on quote<small>'+(p.em?'per engagement · fixed scope':esc(TERM[curTerm])+' · excl. GST')+'</small></span><button type="button" class="q" data-q="'+p.k+'">Get quote →</button><a href="#configure" class="nt" data-cf="'+p.k+'">Configure scope →</a></div></div>';});
      G.innerHTML=h;}
    render();
    function setTerm(v){curTerm=v;$$('button',bt).forEach(function(b){var on=+b.getAttribute('data-v')===v;b.classList.toggle('on',on);b.setAttribute('aria-selected',on);});bt.setAttribute('data-term',v);
      render();}
    bt.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;setTerm(+b.getAttribute('data-v'));if(syncCfg)syncCfg({term:curTerm});});
    G.addEventListener('click',function(e){var q=e.target.closest('button[data-q]');if(q){var p=PL[q.getAttribute('data-q')];topic(p.em?'DFIR — emergency incident response':'DFIR — quotation');return;}
      var c=e.target.closest('a[data-cf]');if(c&&syncCfg){syncCfg({tier:c.getAttribute('data-cf')});}});
    window._dfRows={setTerm:setTerm,sel:function(k){selTier=k;render();}};
    setTerm(2);})();

  /* =========================================================
     5. Configurator — scope summary, price on quote
     ========================================================= */
  (function(){var calc=$id('dfCalc');if(!calc)return;
    var cSz=$id('cSz'),cQ=$id('cQty'),cQR=$id('cQtyR'),cTier=$id('cTier'),cTerm=$id('cTerm'),rows=$id('oRows'),clk=$id('oClk'),cx=$id('oCx'),cxB=$id('oCxB'),qf=$id('dfQf');
    var SZ={1:'Under 200 staff',2:'200–1,000 staff',3:'1,000–5,000 staff',4:'5,000+ staff'};
    var TIERS=['ess','pro','ent','em'];
    cTier.innerHTML=TIERS.map(function(k){var p=PL[k];return '<button type="button" role="radio" data-k="'+k+'"><b>'+esc(p.k==='em'?'Emergency IR':p.s)+'</b><small>'+esc(p.f)+'</small><em>'+(p.em?'No retainer':'Price on quote')+'</em></button>';}).join('');
    function chk(id){return $$('#'+id+' input:checked').map(function(i){return i.value;});}
    function seg(el){return +(el.dataset.value||$('button.on',el).getAttribute('data-v'));}
    function setSeg(el,v){$$('button',el).forEach(function(b){b.classList.toggle('on',+b.getAttribute('data-v')===v);});el.dataset.value=v;}
    function devs(){return clamp(Math.round(+cQ.value||10),10,50000);}
    var tier='pro';
    function render(){var sz=seg(cSz),n=devs(),cl=chk('cCloud'),rg=chk('cReg'),ad=chk('cAdd'),tm=seg(cTerm),p=PL[tier];
      setT('cSzL',SZ[sz]);setT('cQtyL',fmt(n)+' devices');setT('cTierL',tier==='em'?'Emergency IR':'Retainer '+p.s);setT('cTermL',tier==='em'?'Not applicable':tm+(tm>1?' years':' year'));
      cTerm.classList.toggle('off',tier==='em');
      $$('button',cTier).forEach(function(b){var on=b.getAttribute('data-k')===tier;b.classList.toggle('on',on);b.setAttribute('aria-checked',on);});
      var score=clamp(sz*14+Math.log10(n)*12+cl.length*6+(rg.length-1)*7+ad.length*3-20,4,100),lv=score<30?'Low':score<55?'Medium':score<78?'High':'Very high';
      setT(cx,lv);cxB.style.transform='scaleX('+(score/100).toFixed(3)+')';
      var rec=score<34?'ess':score<70?'pro':'ent';
      var R2=[['Tier',tier==='em'?'Emergency IR · no retainer':'Retainer '+p.s+(rec!==tier&&tier!=='em'?' (suggested: '+PL[rec].s+')':'')],['Term',tier==='em'?'Per engagement':TERM[tm]],['Organisation',SZ[sz]],['Endpoints & servers',fmt(n)],['Cloud & SaaS',cl.length?cl.join(', '):'None'],['Regulators',rg.join(', ')],['Add-ons',ad.length?ad.join(', '):'None'],['Price','On quote · fixed proposal']];
      rows.innerHTML=R2.map(function(r){return '<div class="crow"><span>'+esc(r[0])+'</span><b>'+esc(r[1])+'</b></div>';}).join('');
      var CK={'CERT-In':'CERT-In · 6 h','RBI':'RBI · 6 h','SEBI':'SEBI · 6 h','IRDAI':'IRDAI · 6 h','DPDP':'DPDP · Board intimation'};
      clk.innerHTML=rg.map(function(r,i){return '<span'+(r==='DPDP'?' class="d"':'')+' style="animation-delay:'+(i*.05)+'s"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'+esc(CK[r])+'</span>';}).join('');
      calc._sum=R2.map(function(r){return r[0]+': '+r[1];}).join(' · ');calc._tier=tier;calc._tm=tm;calc._n=n;
      if(!qf.hidden){setT('qfSum',calc._sum);$id('qS').value=calc._sum;}
      if(window._dfRows&&tier!=='em'&&selTier!==tier){window._dfRows.sel(tier);}
    }
    cSz.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;setSeg(cSz,+b.getAttribute('data-v'));render();});
    cTerm.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;setSeg(cTerm,+b.getAttribute('data-v'));if(window._dfRows)window._dfRows.setTerm(+b.getAttribute('data-v'));render();});
    cTier.addEventListener('click',function(e){var b=e.target.closest('button[data-k]');if(!b)return;tier=b.getAttribute('data-k');render();});
    cQ.addEventListener('input',function(){cQR.value=Math.min(devs(),5000);render();});
    cQR.addEventListener('input',function(){cQ.value=cQR.value;render();});
    ['cCloud','cReg','cAdd'].forEach(function(id){$id(id).addEventListener('change',render);});
    syncCfg=function(o){if(o.term){setSeg(cTerm,o.term);}if(o.tier){tier=o.tier;}render();};
    $id('oQuote').addEventListener('click',function(){qf.hidden=false;setT('qfSum',calc._sum);$id('qS').value=calc._sum;
      var nav=$id('dfSub'),hdr=$('.hdr');window.scrollTo({top:qf.getBoundingClientRect().top+scrollY-((nav?nav.offsetHeight:0)+(hdr?hdr.offsetHeight:78)+12),behavior:R?'auto':'smooth'});setTimeout(function(){var f=$id('qN');if(f)f.focus({preventScroll:true});},R?0:500);});
    $id('oAdd').addEventListener('click',function(){var p=PL[calc._tier];XH.cart.add({key:'dfir-'+calc._tier+'-'+calc._tm,name:'DFIR — '+(p.em?'Emergency IR':'Retainer '+p.s),sub:(p.em?'Per engagement':TERM[calc._tm])+' · '+fmt(calc._n)+' devices · price on quote',price:0,qty:1});});
    setSeg(cSz,2);setSeg(cTerm,2);render();
  })();

  /* =========================================================
     6. Tools tabs
     ========================================================= */
  var toolInit={};
  (function(){var tt=$id('dfTt');if(!tt)return;var bs=$$('button',tt),ps=$$('#tools .df-tp');
    function show(k){bs.forEach(function(b){var on=b.getAttribute('data-t')===k;b.classList.toggle('on',on);b.setAttribute('aria-selected',on);});
      ps.forEach(function(p){var on=p.getAttribute('data-t')===k;p.hidden=!on;p.classList.toggle('on',on);if(on)restart(p,'sw');});if(toolInit[k])toolInit[k]();}
    tt.addEventListener('click',function(e){var b=e.target.closest('button[data-t]');if(b)show(b.getAttribute('data-t'));});
    tt.addEventListener('keydown',function(e){var k=e.key==='ArrowRight'?1:e.key==='ArrowLeft'?-1:0;if(!k)return;var i=bs.indexOf(d.activeElement);if(i<0)return;e.preventDefault();var n=bs[(i+k+bs.length)%bs.length];n.focus();n.click();});
    toolInit.show=show;})();

  /* ---------- 6a. Incident severity triage (illustrative) ---------- */
  (function(){var box=$id('trCat');if(!box)return;
    var CAT=[['rw','Ransomware','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',3],['bec','Business email compromise','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',2],['ins','Insider data theft','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',2],['cld','Cloud account compromise','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',2],['web','Web defacement / data leak','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',2],['dev','Lost or stolen device','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>',1],['unk','Suspicious activity — not sure','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',1]];
    var STEPS={rw:['Disconnect affected machines from the network — don\'t power them off','Suspend remote access and shared drives for affected accounts','Protect backups: take them offline and don\'t restore yet','Preserve logs and note what you saw and when','Call the hotline — we\'ll walk you through a recovery-first decision framework'],
      bec:['Call your bank at once to try to hold or recall the payment','Reset the mailbox password and sign out all sessions','Keep the emails — don\'t delete anything','Ask finance to confirm any payment-change request by phone','Call the hotline to trace the mailbox activity'],
      ins:['Don\'t confront or alert the person yet','Preserve their devices and accounts exactly as they are','Bring in HR and legal before any action','Restrict access quietly, where approved','Call us for a documented, discreet investigation'],
      cld:['Reset credentials and revoke active sessions','Confirm MFA on admin and finance accounts','Export audit logs before retention runs out','Review recent sharing and permission changes','Call the hotline to reconstruct the activity'],
      web:['Take a copy of the site and server logs before restoring','Restore from a known-clean version','Rotate site, hosting and admin credentials','Check whether personal data was exposed','Call us to scope the leak and prepare notices'],
      dev:['Record device details, last user and last known location','Remote-lock the device if it\'s managed','Reset the user\'s passwords and sessions','List what data was on the device','Call us if data exposure is likely'],
      unk:['Write down what you saw, where and when','Don\'t run clean-up tools yet — they can erase evidence','Disconnect the device if it\'s behaving oddly','Preserve logs','Call the hotline for triage']};
    var cat='rw';box.innerHTML=CAT.map(function(c){return '<button type="button" data-k="'+c[0]+'"'+(c[0]===cat?' class="on"':'')+'>'+c[2]+'<span>'+esc(c[1])+'</span></button>';}).join('');
    var sc=$id('trSc'),dt=$id('trData'),ops=$id('trOps'),reg=$id('trReg'),sev=$id('trSev'),sv1=$id('trSv'),last='';
    function run(){var c=CAT.filter(function(x){return x[0]===cat;})[0],s=+(sc.dataset.value||1),ds=$$('input:checked',dt).map(function(i){return i.value;});
      var score=c[3]+(s-1)+Math.min(2,ds.filter(function(v){return v!=='ip';}).length)+(ds.indexOf('ip')>=0?1:0)+(ops.checked?2:0);
      var P=score>=6?1:score>=4?2:score>=2?3:4,NM={1:'Critical',2:'High',3:'Medium',4:'Low'},WH={1:'Mobilise now — call the breach hotline.',2:'Respond today — containment first.',3:'Investigate promptly — preserve evidence.',4:'Monitor and record — escalate if it grows.'};
      sv1.textContent='P'+P;sv1.className='sv p'+P;setT('trSt',NM[P]+' severity');setT('trSw',WH[P]);
      if(last!==P+cat){last=P+cat;restart(sev,'sw');}
      $id('trSteps').innerHTML=STEPS[cat].map(function(t,i){return '<li style="animation-delay:'+(i*.05)+'s">'+esc(t)+'</li>';}).join('');
      var ck=['CERT-In · 6 h if reportable'];if(reg.checked)ck.push('Sector regulator · 6 h');if(ds.indexOf('pd')>=0||ds.indexOf('hl')>=0)ck.push('DPDP · Board & principals');if(cat==='bec'||ds.indexOf('fin')>=0)ck.push('Bank · immediately');
      var h=ck.map(function(x,i){return '<span style="animation-delay:'+(i*.05)+'s">'+esc(x)+'</span>';}).join('')+'<span class="n">Cyber insurer · per policy</span>';$id('trClk').innerHTML=h;}
    box.addEventListener('click',function(e){var b=e.target.closest('button[data-k]');if(!b)return;cat=b.getAttribute('data-k');$$('button',box).forEach(function(x){x.classList.toggle('on',x===b);});run();});
    sc.addEventListener('change',run);sc.addEventListener('click',function(){setTimeout(run,0);});dt.addEventListener('change',run);ops.addEventListener('change',run);reg.addEventListener('change',run);run();})();

  /* ---------- 6b. Regulatory clock (guidance only) ---------- */
  (function(){var inp=$id('ckT');if(!inp)return;var L=$id('ckL'),S=$id('ckS'),tmr=0,shown=false,vis=false;
    var IST=330*60000;
    function toIn(ms){return new Date(ms+IST).toISOString().slice(0,16);}
    function fromIn(v){var m=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)/.exec(v);if(!m)return null;return Date.UTC(+m[1],m[2]-1,+m[3],+m[4],+m[5])-IST;}
    function fmtIST(ms){var x=new Date(ms+IST);var M=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];return x.getUTCDate()+' '+M[x.getUTCMonth()]+', '+p2(x.getUTCHours())+':'+p2(x.getUTCMinutes())+' IST';}
    inp.value=toIn(Date.now()-3600000);
    var RG=[['cert','CERT-In','Report reportable incidents',6],['rbi','RBI','Regulated entities',6],['sebi','SEBI CSCRF','Regulated entities',6],['irdai','IRDAI','Insurers',6],['dpdp','DPDP · detailed report','Board intimation without delay; details within 72 h*',72]];
    function build(){var on=$$('input:checked',S).map(function(i){return i.value;});
      L.innerHTML=RG.filter(function(r){return on.indexOf(r[0])>=0;}).map(function(r,i){return '<div class="ck-r" data-h="'+r[3]+'" style="animation-delay:'+(i*.06)+'s"><svg viewBox="0 0 60 60"><circle cx="30" cy="30" r="24" class="t"/><circle cx="30" cy="30" r="24" class="f" pathLength="100" stroke-dasharray="100 100"/></svg><span><b>'+esc(r[1])+' · '+r[3]+' h</b><small>'+esc(r[2])+'</small><small class="dd"></small></span><em>—</em></div>';}).join('');tick();}
    function tick(){var t0=fromIn(inp.value);$$('.ck-r',L).forEach(function(r){var H=+r.getAttribute('data-h')*3600000,f=$('.f',r),em=$('em',r),dd=$('.dd',r);if(t0===null){em.textContent='—';return;}
      var dl=t0+H,left=dl-Date.now(),fr=clamp(left/H,0,1);f.setAttribute('stroke-dasharray',(fr*100).toFixed(2)+' 100');dd.textContent='Due '+fmtIST(dl);
      r.classList.toggle('late',left<0);r.classList.toggle('warn',left>=0&&fr<.33);em.innerHTML=left<0?'Overdue<small>'+hms(-left/1000)+'</small>':hms(left/1000)+'<small>left</small>';});}
    function loopOn(){clearInterval(tmr);if(shown&&vis&&!d.hidden)tmr=setInterval(tick,1000);}
    inp.addEventListener('input',tick);S.addEventListener('change',build);
    $id('ckNow').addEventListener('click',function(){inp.value=toIn(Date.now());tick();});
    $id('ckAgo').addEventListener('click',function(){inp.value=toIn(Date.now()-7200000);tick();});
    toolInit.clock=function(){shown=true;build();loopOn();};
    var others=['triage','readiness','delay'];others.forEach(function(k){var prev=toolInit[k];toolInit[k]=function(){shown=false;loopOn();if(prev)prev();};});
    XH.whenVisible($id('clock'),function(v){vis=v;loopOn();});d.addEventListener('visibilitychange',loopOn);build();})();

  /* ---------- 6c. DFIR readiness score ---------- */
  (function(){var ol=$id('rdQ');if(!ol)return;
    var Q=[['Do you have a written incident response plan with named contacts?','Write a short IR plan with named owners and phone numbers.'],
      ['Can someone make containment decisions 24×7?','Agree who can authorise isolating systems at night and on holidays.'],
      ['Are ICT logs kept for at least 180 days?','CERT-In expects 180 days of logs — check firewall, VPN, server and cloud retention.'],
      ['Are offline or immutable backups tested in the last 6 months?','Test a restore from a backup the incident can\'t reach.'],
      ['Is MFA on for email, admin and finance accounts?','Turn on MFA for every privileged and finance account first.'],
      ['Is EDR running on endpoints and servers?','Deploy EDR (e.g. Scrutiny EDR) so you can see and isolate devices.'],
      ['Are logs collected centrally (SIEM)?','Centralise logs (e.g. Managed Sentinel) so timelines can be built fast.'],
      ['Do you have an inventory of critical systems and data?','List crown-jewel systems, owners and where personal data lives.'],
      ['Have you run a tabletop exercise in the last 12 months?','Rehearse a ransomware or BEC scenario with leadership and IT.'],
      ['Do you have a DFIR retainer or a known responder?','Put a retainer in place so help, terms and an NDA are ready.']];
    var A=Q.map(function(){return -1;});
    ol.innerHTML=Q.map(function(q,i){return '<li><span>'+esc(q[0])+'</span><div class="seg" data-i="'+i+'"><button type="button" data-v="2">Yes</button><button type="button" data-v="1">Partly</button><button type="button" data-v="0">No</button></div></li>';}).join('');
    var arc=$id('rdArc'),nd=$id('rdNd'),sE=$id('rdS'),bE=$id('rdB'),gp=$id('rdGp'),lastB='';
    function run(){var ans=A.filter(function(a){return a>=0;}).length,sc=Math.round(A.reduce(function(s,a){return s+(a>0?a*5:0);},0));
      arc.setAttribute('stroke-dasharray',sc+' 100');arc.style.stroke=sc>=75?'#16a34a':sc>=45?'#FF8C1A':'#c0392b';nd.style.transform='rotate('+(-90+sc*1.8)+'deg)';sE.textContent=sc;
      var b=!ans?'Answer the questions':sc>=75?'Well prepared':sc>=45?'Partly ready':'High exposure';if(b!==lastB){lastB=b;bE.textContent=b+(ans&&ans<10?' · '+ans+'/10 answered':'');restart(bE,'sw');}else bE.textContent=b+(ans&&ans<10?' · '+ans+'/10 answered':'');
      var gaps=Q.map(function(q,i){return {i:i,a:A[i],t:q[1]};}).filter(function(g){return g.a>=0&&g.a<2;});
      gp.innerHTML=gaps.length?gaps.slice(0,6).map(function(g,i){return '<li style="animation-delay:'+(i*.04)+'s"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg><span>'+esc(g.t)+'</span></li>';}).join(''):(ans?'<li class="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg><span>No gaps in what you answered — keep testing it.</span></li>':'');}
    ol.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;var s=b.parentNode,i=+s.getAttribute('data-i');A[i]=+b.getAttribute('data-v');$$('button',s).forEach(function(x){x.classList.toggle('on',x===b);});run();});
    run();})();

  /* ---------- 6d. Cost of delay (illustrative, relative only) ---------- */
  (function(){var h=$id('dlH');if(!h)return;var gr=$id('dlGr'),bars=$id('dlBars'),cells=[];
    for(var i=0;i<200;i++){var c=d.createElement('i');gr.appendChild(c);cells.push(c);}
    var ord=cells.map(function(c,i){var x=i%20-9.5,y=Math.floor(i/20)-4.5;return {i:i,r:Math.sqrt(x*x+y*y*2.2)+((i*37)%7)/10};}).sort(function(a,b){return a.r-b.r;}).map(function(o){return o.i;});
    var B=[['Systems affected','spread'],['Data exposure','data'],['Recovery effort','rec'],['Evidence lost','ev']];
    bars.innerHTML=B.map(function(b){return '<div class="bb"><span class="bl1">'+b[0]+'<small>relative</small></span><span class="tr"><span class="stk"><i data-k="'+b[1]+'"></i></span></span><b data-v="'+b[1]+'">—</b></div>';}).join('');
    function lv(v){return v<.25?'Low':v<.5?'Moderate':v<.75?'High':'Severe';}
    function col(v){return v<.25?'#16a34a':v<.5?'#FF8C1A':v<.75?'#e06f00':'#c0392b';}
    function run(){var H=+h.value,bk=$id('dlB').checked,lg=$id('dlL').checked,rt=$id('dlR').checked,he=rt?Math.max(1,H-4):H;
      setT('dlHL',H<24?H+(H>1?' hours':' hour'):(H/24).toFixed(H%24?1:0)+' days');
      var V={spread:1-Math.exp(-he/30)};V.data=clamp(V.spread*.85+.05,0,1);V.rec=clamp(V.spread*(bk?.55:1)+(bk?0:.12),0,1);V.ev=lg?(1-Math.exp(-he/96))*.5:clamp(.3+.7*(1-Math.exp(-he/40)),0,1);
      B.forEach(function(b){var v=V[b[1]],i=$('i[data-k="'+b[1]+'"]',bars),e=$('b[data-v="'+b[1]+'"]',bars);i.style.width=(Math.max(.04,v)*100).toFixed(1)+'%';i.style.background=col(v);e.textContent=lv(v);e.style.color=col(v);});
      var n=Math.round(V.spread*200),hit=Math.round(Math.min(n,6));ord.forEach(function(ix,k){cells[ix].className=k<hit?'b':k<n?'a':'';});
      var avg=(V.spread+V.data+V.rec+V.ev)/4,vb=$id('dlVb');vb.textContent=lv(avg);vb.className='vv '+(avg<.25?'g':avg<.5?'o':'');
      setT('dlVt',avg<.25?'Contained early — impact stays small.':avg<.5?'Impact is growing — every hour counts.':avg<.75?'Wide impact — recovery gets harder.':'Severe — spread, exposure and lost evidence compound.');
      setT('dlVp',(rt?'With a retainer, the first hours aren\'t spent finding and contracting help. ':'Without a retainer, finding help adds hours before containment starts. ')+(bk?'Offline backups keep recovery possible.':'Without offline backups, recovery depends on affected systems.'));}
    h.addEventListener('input',run);['dlB','dlL','dlR'].forEach(function(id){$id(id).addEventListener('change',run);});run();})();

  /* =========================================================
     7. Sticky sub-nav
     ========================================================= */
  (function(){var nav=$id('dfSub');if(!nav)return;var hdr=$('.hdr'),links=$$('a',nav),secs=links.map(function(a){return $id(a.getAttribute('href').slice(1));}),cur=-1,tick=false;
    function hh(){var h=hdr?hdr.getBoundingClientRect().height:78;d.documentElement.style.setProperty('--df-hh',Math.round(h)+'px');}
    function upd(){tick=false;var y=window.frameElement?110-window.frameElement.getBoundingClientRect().top:nav.getBoundingClientRect().bottom+20,k=-1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top<=y)k=i;});if(k!==cur){cur=k;links.forEach(function(a,i){a.classList.toggle('on',i===k);});var a=links[k];if(a){var t=a.parentNode,l=a.offsetLeft-t.clientWidth/2+a.offsetWidth/2;t.scrollTo({left:l,behavior:R?'auto':'smooth'});}}}
    hh();addEventListener('resize',hh);addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd);}},{passive:true});upd();
    function jump(id){var t=$id(id);if(!t)return false;if(t.classList.contains('df-tp')){if(toolInit.show)toolInit.show(id);t=$id('tools');}window.scrollTo({top:t.getBoundingClientRect().top+scrollY-(nav.getBoundingClientRect().height+(hdr?hdr.getBoundingClientRect().height:78)+6),behavior:R?'auto':'smooth'});return true;}
    links.forEach(function(a){a.addEventListener('click',function(e){if(jump(a.getAttribute('href').slice(1)))e.preventDefault();});});
    $$('main a[href^="#"]').forEach(function(a){var id=a.getAttribute('href').slice(1);if(!id||a.closest('#dfSub')||a.hasAttribute('data-open'))return;a.addEventListener('click',function(e){if(jump(id))e.preventDefault();});});
    $id('ptG')&&$id('ptG').addEventListener('click',function(e){var a=e.target.closest('a[data-cf]');if(a){e.preventDefault();jump('configure');}});
  })();
})();


