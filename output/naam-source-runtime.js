
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,d=document;
  var DPR=Math.min(2,window.devicePixelRatio||1),TAU=Math.PI*2;
  function $id(i){return d.getElementById(i);}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function seg(a,b,t){return clamp((t-a)/(b-a),0,1);}
  function eo(t){return 1-Math.pow(1-t,3);}
  function fade(t,a,b){return eo(seg(a,b,t));}
  function fmt(n){return Math.round(n).toLocaleString('en-IN');}
  function inr(n){return XH.inr?XH.inr(Math.round(n)):'₹'+fmt(n);}
  function setT(id,v){var e=$id(id);if(e&&e.textContent!==String(v))e.textContent=v;}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function sw(el){if(!el||R)return;el.classList.remove('sw');void el.offsetWidth;el.classList.add('sw');}
  function segV(el){if(!el)return null;var b=$('button.on',el);return el.dataset.value||(b?b.getAttribute('data-v'):null);}
  function setSeg(el,v){if(!el)return;$$('button',el).forEach(function(x){x.classList.toggle('on',x.getAttribute('data-v')===v);});el.dataset.value=v;el.dispatchEvent(new Event('change'));}
  function num(id,def){var e=$id(id);if(!e)return def;var v=parseFloat(e.value);if(isNaN(v))v=def;var mn=parseFloat(e.min),mx=parseFloat(e.max);if(!isNaN(mn))v=Math.max(mn,v);if(!isNaN(mx))v=Math.min(mx,v);return v;}
  function dark(){return d.documentElement.getAttribute('data-theme')==='dark';}

  /* ---------- the ONE rAF loop ---------- */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}

  /* ---------- canvas helpers ---------- */
  function fit(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function TH(){return dark()?{bg:'#0E1A36',card:'#16264A',card2:'#1B2D57',ink:'#E8EEFA',mut:'#93A3C4',line:'#2C3D68',bl:'#4D94FF',blA:'rgba(77,148,255,.2)',or:'#FF9F33',orA:'rgba(255,159,51,.16)',rd:'#FF6B5B',rdA:'rgba(255,107,91,.16)',rdS:'#7A2A23',gr:'#3DD47A',grA:'rgba(61,212,122,.16)',nv:'#22325e'}
    :{bg:'#F4F7FC',card:'#FFFFFF',card2:'#EEF4FF',ink:'#0B132B',mut:'#5B6782',line:'#D3DCEB',bl:'#0066FF',blA:'rgba(0,102,255,.10)',or:'#FF8A00',orA:'rgba(255,138,0,.12)',rd:'#c0392b',rdA:'rgba(192,57,43,.08)',rdS:'#c0392b',gr:'#16a34a',grA:'rgba(22,163,74,.1)',nv:'#0B132B'};}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,h/2,w/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function txt(c,s,x,y,f,col,al){c.font=f;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  function dot(c,x,y,r,col){c.beginPath();c.arc(x,y,r,0,TAU);c.fillStyle=col;c.fill();}
  function tick(c,x,y,s,col){dot(c,x,y,s,col);c.strokeStyle='#fff';c.lineWidth=Math.max(1.4,s*.22);c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(x-s*.42,y);c.lineTo(x-s*.1,y+s*.32);c.lineTo(x+s*.45,y-s*.3);c.stroke();}
  function cross(c,x,y,s,col){dot(c,x,y,s,col);c.strokeStyle='#fff';c.lineWidth=Math.max(1.4,s*.22);c.lineCap='round';c.beginPath();c.moveTo(x-s*.35,y-s*.35);c.lineTo(x+s*.35,y+s*.35);c.moveTo(x+s*.35,y-s*.35);c.lineTo(x-s*.35,y+s*.35);c.stroke();}
  function pill(c,s,x,y,f,bg,fg,al){c.font=f;var w=c.measureText(s).width+18,h=22,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,11);c.fillStyle=bg;c.fill();txt(c,s,x0+9,y,f,fg);return w;}
  var PH=typeof Path2D!=='undefined'?new Path2D('M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'):null;
  function handset(c,x,y,s,col,rot){if(!PH)return;var k=s/30;c.save();c.translate(x,y);c.rotate(rot||0);c.scale(k,k);c.translate(-12,-12);c.strokeStyle=col;c.lineWidth=2/k*.9;c.lineJoin='round';c.lineCap='round';c.stroke(PH);c.restore();}
  var SORA='Sora,system-ui,sans-serif',MONO='"IBM Plex Mono",ui-monospace,monospace',BODY='"IBM Plex Sans",system-ui,sans-serif';
  function F(w,s,f){return w+' '+s+'px '+(f||SORA);}
  function status(c,w,T,label){txt(c,'10:42',22,22,F(700,11),T.ink);txt(c,label||'',w-20,22,F(600,9.5,MONO),T.mut,'right');}
  function callBtns(c,w,h,t,T,state){var y=h-62,a=w*.28,b=w*.72;
    if(state!=='blocked'){dot(c,a,y,22,T.rd);handset(c,a,y,24,'#fff',Math.PI*.75);}
    var p=R?0:(Math.sin(t/180)+1)/2;if(state==='ring'){c.globalAlpha=.25*(1-p);dot(c,b,y,22+p*12,T.gr);c.globalAlpha=1;}
    if(state!=='blocked'){dot(c,b,y,22,T.gr);handset(c,b,y,24,'#fff',0);}
    txt(c,'Decline',a,y+36,F(500,10,BODY),T.mut,'center');if(state!=='blocked')txt(c,state==='talk'?'On call':'Accept',b,y+36,F(500,10,BODY),T.mut,'center');}
  function rings(c,x,y,r,t,col){if(R)return;for(var i=0;i<3;i++){var p=((t/1600)+i/3)%1;c.globalAlpha=.35*(1-p);c.beginPath();c.arc(x,y,r+p*44,0,TAU);c.strokeStyle=col;c.lineWidth=2;c.stroke();}c.globalAlpha=1;}
  function sample(c,w,h,T,rt){if(rt)pill(c,'SAMPLE',w-14,54,F(700,8,MONO),T.card2,T.mut,'right');else pill(c,'SAMPLE',14,44,F(700,8,MONO),T.card2,T.mut);}

  /* scene 1: unknown caller identified */
  function s0(c,w,h,t,T){c.fillStyle=T.bg;c.fillRect(0,0,w,h);status(c,w,T,'INCOMING');
    var cx=w/2,ay=118;txt(c,'Incoming call',cx,56,F(600,11,BODY),T.mut,'center');
    rings(c,cx,ay,36,t,T.bl);var id=fade(t,1300,1800);
    dot(c,cx,ay,36,id>0?T.bl:T.line);
    if(id<1){c.globalAlpha=1-id;txt(c,'?',cx,ay+1,F(800,28),T.mut,'center');c.globalAlpha=1;}
    if(id>0){c.globalAlpha=id;txt(c,'PS',cx,ay+1,F(800,22),'#fff','center');c.globalAlpha=1;}
    /* scanning sweep */
    var sc=seg(500,1300,t);if(sc>0&&sc<1&&!R){c.save();c.beginPath();c.arc(cx,ay,40,0,TAU);c.clip();c.fillStyle=T.blA;c.fillRect(cx-40,ay-40+sc*80-6,80,12);c.restore();}
    txt(c,'+91 98•• •• 4210',cx,176,F(600,13,MONO),T.mut,'center');
    c.globalAlpha=id;txt(c,'Priya S.',cx,206,F(800,21),T.ink,'center');
    txt(c,'Procurement Manager',cx,232,F(600,12,BODY),T.ink,'center');
    txt(c,'Sample Industries Pvt Ltd',cx,250,F(500,11.5,BODY),T.mut,'center');
    pill(c,'Pune · Business profile',cx,280,F(600,9.5,MONO),T.blA,T.bl,'center');c.globalAlpha=1;
    var a2=fade(t,2400,2900);if(a2>0){c.globalAlpha=a2;rr(c,18,306,w-36,46,12);c.fillStyle=T.card;c.fill();c.strokeStyle=T.line;c.stroke();tick(c,38,329,9,T.gr);txt(c,'No spam reports',54,322,F(700,11.5),T.ink);txt(c,'Name, designation, location',54,338,F(500,9.5,BODY),T.mut);c.globalAlpha=1;}
    callBtns(c,w,h,t,T,'ring');sample(c,w,h,T);
    return {v:[id>.5?'Found':'Checking…','None',t>2900?'Ring':'—'],b:[id,t>2400?1:seg(500,2400,t)*.6,t>2900?1:0],cls:['','ok','']};}

  /* scene 2: spam flagged and blocked */
  function s1(c,w,h,t,T){var red=fade(t,700,1300);c.fillStyle=T.bg;c.fillRect(0,0,w,h);
    if(red>0){c.globalAlpha=red;c.fillStyle=T.rdS;c.fillRect(0,0,w,h*.58);c.globalAlpha=1;}
    var top=red>.5?'#fff':T.ink,sub=red>.5?'rgba(255,255,255,.8)':T.mut;
    txt(c,'10:42',22,22,F(700,11),top);txt(c,'INCOMING',w-20,22,F(600,9.5,MONO),sub,'right');
    var cx=w/2,ay=110;rings(c,cx,ay,34,t,red>.5?'#fff':T.rd);dot(c,cx,ay,34,red>.5?'rgba(255,255,255,.18)':T.line);
    /* warning triangle */
    c.save();c.translate(cx,ay);c.globalAlpha=Math.max(.3,red);c.beginPath();c.moveTo(0,-16);c.lineTo(17,13);c.lineTo(-17,13);c.closePath();c.fillStyle=red>.5?'#fff':T.rd;c.fill();c.fillStyle=red>.5?T.rdS:'#fff';c.fillRect(-1.5,-6,3,10);c.fillRect(-1.5,7,3,3);c.restore();c.globalAlpha=1;
    txt(c,'+91 70•• •• 1187',cx,166,F(600,13,MONO),sub,'center');
    c.globalAlpha=red;txt(c,'Likely spam',cx,196,F(800,22),'#fff','center');
    txt(c,'Heavily reported by users',cx,220,F(500,11.5,BODY),'rgba(255,255,255,.85)','center');
    pill(c,'Loan offer',cx-46,248,F(700,9.5,MONO),'rgba(255,255,255,.2)','#fff','center');pill(c,'Fake KYC',cx+46,248,F(700,9.5,MONO),'rgba(255,255,255,.2)','#fff','center');c.globalAlpha=1;
    var bl=fade(t,2500,3000);
    if(bl<1){c.globalAlpha=1-bl;callBtns(c,w,h,t,T,'ring');c.globalAlpha=1;}
    if(bl>0){c.globalAlpha=bl;var y=h*.58+40;cross(c,cx,y+8,24,T.rd);txt(c,'Number blocked',cx,y+50,F(700,13),T.ink,'center');txt(c,'Added to your block list',cx,y+70,F(500,10.5,BODY),T.mut,'center');c.globalAlpha=1;}
    var tst=fade(t,3500,3900);if(tst>0){c.globalAlpha=tst;var ty=h-40+(1-tst)*16;rr(c,16,ty-18,w-32,36,10);c.fillStyle=T.nv;c.fill();txt(c,'Reported as spam',w/2,ty,F(600,10.5),'#fff','center');c.globalAlpha=1;}
    sample(c,w,h,T);
    return {v:['Not registered',red>.5?'High':'Checking…',bl>.5?'Blocked':'—'],b:[1,red,bl],cls:['','red','red']};}

  /* scene 3: dialer names numbers */
  var DIG='9820013579';
  function s2(c,w,h,t,T){c.fillStyle=T.bg;c.fillRect(0,0,w,h);status(c,w,T,'DIALER');
    var n=R?10:Math.min(10,Math.floor(seg(300,3300,t)*10.99)),s=DIG.slice(0,n);
    var shown=s.length>5?s.slice(0,5)+' '+s.slice(5):s;
    txt(c,shown||' ',w/2,66,F(700,24,MONO),T.ink,'center');
    if(!R&&n<10&&Math.floor(t/400)%2===0){c.font=F(700,24,MONO);var tw=c.measureText(shown).width;c.fillStyle=T.bl;c.fillRect(w/2+tw/2+3,54,2,24);}
    var m=fade(t,1900,2400);
    if(m>0){c.globalAlpha=m;var y=92+(1-m)*10;rr(c,16,y,w-32,52,12);c.fillStyle=T.card;c.fill();c.strokeStyle=T.bl;c.lineWidth=1.5;c.stroke();dot(c,40,y+26,15,T.bl);txt(c,'RM',40,y+26,F(800,10),'#fff','center');txt(c,'Rakesh M.',62,y+19,F(700,12.5),T.ink);txt(c,'Accounts · Sample Logistics',62,y+36,F(500,10,BODY),T.mut);dot(c,w-30,y+26,4,T.gr);c.globalAlpha=1;}
    else txt(c,'Type a number',w/2,118,F(500,11,BODY),T.mut,'center');
    var keys='123456789*0#',kw=(w-56)/3,kh=46,ky=166,last=n>0?DIG[n-1]:null,lt=300+(n-1)*300;
    for(var i=0;i<12;i++){var r=Math.floor(i/3),col=i%3,x=28+col*kw+kw/2,y2=ky+r*kh+kh/2,k=keys[i];
      var hot=!R&&k===last&&t-lt<260&&n<10;dot(c,x,y2,19,hot?T.bl:T.card);if(!hot){c.strokeStyle=T.line;c.lineWidth=1;c.beginPath();c.arc(x,y2,19,0,TAU);c.stroke();}
      txt(c,k,x,y2+1,F(700,16),hot?'#fff':T.ink,'center');}
    var cy=ky+4*kh+30;dot(c,w/2,cy,22,T.gr);handset(c,w/2,cy,24,'#fff',0);
    sample(c,w,h,T);
    return {v:[n+'/10',m>.5?'Found':'—',t>3400?'Call':'—'],b:[n/10,m,t>3400?1:0],cls:['','ok','']};}

  /* scene 4: reverse lookup of a number not in the call log */
  var RQ='9867004215';
  function s3(c,w,h,t,T){c.fillStyle=T.bg;c.fillRect(0,0,w,h);status(c,w,T,'SEARCH');
    txt(c,'Search a number',20,54,F(800,15),T.ink);txt(c,'Not in your call log',20,73,F(500,9.5,BODY),T.mut);
    var n=R?10:Math.min(10,Math.floor(seg(300,2000,t)*10.99)),q=RQ.slice(0,n),sh=q.length>5?q.slice(0,5)+' '+q.slice(5):q;
    rr(c,14,90,w-28,42,12);c.fillStyle=T.card;c.fill();c.strokeStyle=T.bl;c.lineWidth=1.5;c.stroke();
    c.beginPath();c.arc(34,111,6,0,TAU);c.strokeStyle=T.mut;c.lineWidth=1.6;c.stroke();c.beginPath();c.moveTo(38.5,115.5);c.lineTo(43,120);c.stroke();
    txt(c,sh?'+91 '+sh:'Type a number',52,111,F(600,12,sh?MONO:BODY),sh?T.ink:T.mut);
    var f=fade(t,2300,2800);
    if(f<1&&f>=0&&t>2000&&t<2800&&!R){var p=(t/90)%TAU;c.beginPath();c.arc(w-34,111,7,p,p+4.2);c.strokeStyle=T.bl;c.lineWidth=2;c.stroke();}
    if(f>0){c.globalAlpha=f;var y=148+(1-f)*10;rr(c,14,y,w-28,128,14);c.fillStyle=T.card;c.fill();c.strokeStyle=T.line;c.lineWidth=1;c.stroke();
      dot(c,46,y+34,20,T.bl);txt(c,'AK',46,y+35,F(800,13),'#fff','center');
      txt(c,'Anil K.',76,y+26,F(800,14),T.ink);txt(c,'Branch Manager',76,y+44,F(600,11,BODY),T.ink);
      txt(c,'Sample Finance Ltd · Nagpur',28,y+78,F(500,10.5,BODY),T.mut);
      pill(c,'No spam reports',28,y+104,F(700,9,MONO),T.grA,T.gr,'left');c.globalAlpha=1;}
    var a=fade(t,3400,3800);if(a>0){c.globalAlpha=a;callBtns(c,w,h,t,T,'ring');c.globalAlpha=1;}
    sample(c,w,h,T,1);
    return {v:[n+'/10',f>.5?'Found':'—',a>.5?'Call back':'—'],b:[n/10,f,a],cls:['','ok','']};}

  /* scene 5: lead list checked by API */
  var LK=[['+91 98•• ••1022','Genuine · business','g'],['+91 99•• ••7731','Genuine','b'],['+91 70•• ••1187','Reported spam','r'],['+91 80•• ••4410','No profile','m'],['+91 91•• ••6608','Reported fraud','o'],['+91 93•• ••2259','Genuine','b']];
  function s4(c,w,h,t,T){c.fillStyle=T.bg;c.fillRect(0,0,w,h);status(c,w,T,'LEAD CHECK');
    txt(c,'Lead list · today',20,54,F(800,15),T.ink);txt(c,'Checked one by one · 6 numbers',20,73,F(500,9,MONO),T.mut);
    var y0=92,rh=46,done=0,held=0;
    for(var i=0;i<LK.length;i++){var r=LK[i],st=500+i*480,a=fade(t,st,st+300),y=y0+i*rh;
      rr(c,14,y,w-28,rh-6,10);c.fillStyle=T.card;c.fill();c.strokeStyle=T.line;c.lineWidth=1;c.stroke();
      txt(c,r[0],24,y+(rh-6)/2,F(600,10.5,MONO),T.ink);
      if(a>0){done++;if(r[2]==='r'||r[2]==='m'||r[2]==='o')held++;c.globalAlpha=a;var col=r[2]==='g'?T.gr:r[2]==='b'?T.bl:r[2]==='r'?T.rd:r[2]==='o'?T.or:T.mut;var bg=r[2]==='g'?T.grA:r[2]==='b'?T.blA:r[2]==='r'?T.rdA:r[2]==='o'?T.orA:T.card2;
        pill(c,r[1],w-22,y+(rh-6)/2,F(700,8.5,MONO),bg,col,'right');c.globalAlpha=1;}
      else if(!R&&t>st-480){var p=(t/90)%TAU;c.beginPath();c.arc(w-34,y+(rh-6)/2,6,p,p+4.2);c.strokeStyle=T.bl;c.lineWidth=2;c.stroke();}}
    var f=fade(t,3600,4000);if(f>0){c.globalAlpha=f;var fy=y0+6*rh+8;rr(c,14,fy,w-28,40,10);c.fillStyle=T.nv;c.fill();txt(c,'3 ready to call · 3 held back',w/2,fy+20,F(700,11),'#fff','center');c.globalAlpha=1;}
    sample(c,w,h,T,1);
    return {v:[done+'/6',String(held),f>.5?'3':'—'],b:[done/6,held/6,f*.5],cls:['','red','ok']};}

  var SCN=[s0,s1,s2,s3,s4],DUR=5500;
  var SC=[
    {L:['Caller profile','Spam reports','Action'],pt:'Unknown caller · identified'},
    {L:['Caller profile','Spam reports','Action'],pt:'Spam call · flagged'},
    {L:['Digits typed','Name match','Action'],pt:'Dialer · names as you type'},
    {L:['Digits typed','Profile found','Action'],pt:'Reverse lookup'},
    {L:['Numbers checked','Held back','Ready to call'],pt:'Lead validation'}
  ];

  (function(){
    var hero=$id('ciHero'),scr=$id('ciScr');if(!hero||!scr)return;
    var cvs=[$id('ciCvA'),$id('ciCvB')],act=0,cur=0,el=0,last=0,paused=false,hover=false,hidden=false,lastV=['','',''];
    var dots=$$('#ciDots button[data-k]'),pz=$id('ciPz'),rows=$$('.ci-r');
    function paint(tt){var f=fit(cvs[act]);if(!f)return;var r=SCN[cur](f.c,f.w,f.h,tt,TH());
      for(var i=0;i<3;i++){var b=$id('ciK'+i);if(b&&b.textContent!==r.v[i]){b.textContent=r.v[i];if(lastV[i]!==''&&r.v[i]!=='—')bump(b);lastV[i]=r.v[i];}
        var br=$id('ciB'+i);if(br)br.style.transform='scaleX('+clamp(r.b[i],0,1).toFixed(3)+')';
        var rw=rows[i];if(rw){rw.classList.toggle('red',r.cls[i]==='red');rw.classList.toggle('ok',r.cls[i]==='ok');}}}
    function labels(){var s=SC[cur];for(var i=0;i<3;i++)setT('ciL'+i,s.L[i]);setT('ciPT',s.pt);lastV=['','',''];
      dots.forEach(function(b,i){b.classList.toggle('on',i===cur);b.classList.toggle('past',i<cur);b.setAttribute('aria-selected',i===cur);var ii=$('i',b);if(ii)ii.style.setProperty('--p',i===cur&&R?1:0);});}
    function go(k){k=(k+5)%5;var old=cvs[act];act=1-act;cvs[act].classList.add('on');old.classList.remove('on');cur=k;el=0;labels();paint(R?DUR:0);}
    function tickF(now){if(!last)last=now;var dt=Math.min(64,now-last);last=now;if(!(paused||hover))el+=dt;
      if(el>=DUR){go(cur+1);return;}paint(el);var ii=$('i',dots[cur]);if(ii)ii.style.setProperty('--p',(el/DUR).toFixed(3));}
    var run=loop(tickF);
    function setRun(){var on=!R&&!hidden;if(on)last=0;run(on);}
    dots.forEach(function(b){b.addEventListener('click',function(){var k=+b.getAttribute('data-k');if(k===cur){el=0;paint(R?DUR:0);return;}go(k);});});
    pz.addEventListener('click',function(){paused=!paused;pz.classList.toggle('paused',paused);pz.setAttribute('aria-label',paused?'Play scenes':'Pause scenes');});
    var stage=$id('ciStage');stage.addEventListener('mouseenter',function(){hover=true;});stage.addEventListener('mouseleave',function(){hover=false;});
    var sx=null;scr.addEventListener('pointerdown',function(e){sx=e.clientX;});scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));});
    scr.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});scr.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));});
    labels();
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){paint(R?DUR:el);});
    if(R){if(pz)pz.hidden=true;paint(DUR);addEventListener('resize',function(){paint(DUR);});}
    else{paint(0);XH.whenVisible(hero,function(v){hidden=!v;setRun();});addEventListener('resize',function(){paint(el);});}
    new MutationObserver(function(){paint(R?DUR:el);}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
    window.__aoHero={go:go,pause:function(p){paused=p;},seek:function(t){el=t;paint(t);}};
  })();

  /* ---------- sub-nav scrollspy ---------- */
  (function(){var links=$$('#ciSub a');if(!links.length)return;var secs=links.map(function(a){return $id(a.getAttribute('href').slice(1));}),tk=false;
    function spy(){tk=false;var y=scrollY+170,on=-1;secs.forEach(function(s,i){if(s&&s.offsetTop<=y)on=i;});links.forEach(function(a,i){a.classList.toggle('on',i===on);});}
    addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(spy);}},{passive:true});spy();})();

  /* ---------- staged reveal of the 4 steps ---------- */
  (function(){var w=$id('ciFlow');if(!w)return;var li=$$('li',w);if(R){li.forEach(function(l){l.classList.add('on');});return;}
    var done=false;XH.whenVisible(w,function(v){if(!v||done)return;done=true;li.forEach(function(l,i){setTimeout(function(){l.classList.add('on');},120+i*200);});});})();

  /* ---------- use cases ---------- */
  var UC={
    sales:{t:'Sales teams',p:'Reps recognise buyers calling back and stop losing time to robocalls.',b:'Unknown numbers ignored, including real prospects calling back',a:'Prospect named on screen, spam flagged red',l:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h4M5 17a3.5 3.5 0 016 0"/></svg>Callbacks from prospects recognised','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>Lead numbers validated before follow-up','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Reverse lookup for numbers from forms or notes','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>Recurring pests blocked by each rep']},
    cc:{t:'Support desks',p:'Agents on mobile phones see who is calling and skip spam inbound.',b:'Spam inbound handled like a customer call',a:'Spam flagged before pickup; customers named where Naam has a profile',l:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>Spam and fraud warnings on inbound calls','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>Spam warnings on SMS and MMS','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>Names shown as agents dial','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0118 0v6"/><rect x="2" y="15" width="5" height="7" rx="2"/><rect x="17" y="15" width="5" height="7" rx="2"/></svg>XcellHost help desk for install questions']},
    field:{t:'Field and delivery teams',p:'Drivers and technicians tell a customer call from a scam call while on the road.',b:'Customers unreachable because staff ignore unknown numbers',a:'Caller names shown; scam calls flagged',l:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>Names on unknown numbers','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>App in a regional language','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>No contact, location or media syncing','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>One-tap blocking of repeat spam']},
    fin:{t:'Finance and BFSI',p:'Staff are prime targets for impersonation and fake-KYC calls.',b:'Fraud calls reach accounts and branch staff',a:'Fraud-reported numbers flagged red with their report history',l:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>Fraud call and spam message detection','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>Number history shows how it was reported','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>Quarterly fraud-call briefing from XcellHost*','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>Hosted on Indian servers, per Naam']},
    desk:{t:'Front desks and clinics',p:'Receptionists triage dozens of calls; knowing who is calling sets priority.',b:'Every unknown ring answered the same way',a:'Supplier, patient or spam visible before pickup',l:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>Designation and organisation shown','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>Telemarketers blocked','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>Names shown as numbers are dialled','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Less time on calls that should not happen']},
    lead:{t:'Founders and leadership',p:'Leaders get the most cold and fraudulent calls, and miss the ones that matter.',b:'Personal mobile flooded by unknown and spam calls',a:'Important callers named, spam flagged',l:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h4M5 17a3.5 3.5 0 016 0"/></svg>Role and organisation of unknown callers','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Scam and fraud warnings','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>Contacts never synced, per Naam','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Reverse lookup before returning a call']}
  };

  (function(){var p=$id('ciUcp'),bs=$$('#ciUct button');if(!p)return;
    function show(k){var u=UC[k];p.innerHTML='<h3>'+u.t+'</h3><p>'+u.p+'</p><div class="ci-ba"><div class="b"><small>Before</small><span>'+u.b+'</span></div><div class="a"><small>With Naam</small><span>'+u.a+'</span></div></div><ul>'+u.l.map(function(x){var m=x.match(/^(<svg[\s\S]*?<\/svg>)([\s\S]*)$/);return m?'<li>'+m[1]+'<span>'+m[2]+'</span></li>':'<li>'+x+'</li>';}).join('')+'</ul>';sw(p);
      bs.forEach(function(b){var on=b.getAttribute('data-u')===k;b.classList.toggle('on',on);b.setAttribute('aria-selected',on);});}
    bs.forEach(function(b){b.addEventListener('click',function(){show(b.getAttribute('data-u'));});});show('sales');})();

  /* ---------- prices (indicative placeholders, INR excl. GST) ---------- */
  var P={team:{m:99,y:999,n:'Team rollout'},biz:{m:199,y:1999,n:'Business rollout'},onb:9999};

  /* plans toggle */
  (function(){var s=$id('plBill');if(!s)return;
    function upd(){var v=segV(s)||'m';$$('#plans [data-pm]').forEach(function(b){var val=v==='y'?+b.getAttribute('data-py'):+b.getAttribute('data-pm');b.textContent=inr(val);sw(b);});
      $$('#plans .ci-per').forEach(function(e){e.textContent=v==='y'?'/ user / year*':'/ user / month*';});
      var cb=$id('cBi');if(cb&&segV(cb)!==v)setSeg(cb,v);}
    s.addEventListener('change',upd);$$('button',s).forEach(function(b){b.addEventListener('click',function(){setTimeout(upd,0);});});})();
  $$('[data-plan]').forEach(function(b){b.addEventListener('click',function(){setSeg($id('cPl'),b.getAttribute('data-plan'));var t=$id('configure');if(t)t.scrollIntoView({behavior:R?'auto':'smooth'});});});

  /* ---------- configurator ---------- */
  function cfg(){var u=Math.round(num('cUsr',25)),pl=segV($id('cPl'))||'biz',bi=segV($id('cBi'))||'m',on=$id('cOn')&&$id('cOn').checked;
    var L=[],pp=P[pl];
    L.push({key:'naam-'+pl+'-'+bi,name:'Naam through XcellHost · '+pp.n,sub:(bi==='y'?'per user / year':'per user / month')+' · indicative',price:pp[bi],qty:u});
    if(on)L.push({key:'naam-onb',name:'Naam onboarding through XcellHost',sub:'one-time · indicative',price:P.onb,qty:1});
    var sub=0;L.forEach(function(l){sub+=l.price*l.qty;});return {L:L,sub:sub,u:u,pl:pl,bi:bi};}
  function renderCfg(){var r=cfg();setT('cName',P[r.pl].n+' · '+fmt(r.u)+' users · '+(r.bi==='y'?'annual':'monthly'));
    var ul=$id('cList');if(ul)ul.innerHTML=r.L.map(function(l){return '<li><span>'+l.name+'<small>'+inr(l.price)+' × '+fmt(l.qty)+' · '+l.sub.replace(' · indicative','')+'</small></span><b>'+inr(l.price*l.qty)+'</b></li>';}).join('');
    setT('cSub',inr(r.sub));setT('cGst',inr(r.sub*.18));setT('cTot',inr(r.sub*1.18));}
  ['cUsr'].forEach(function(id){var e=$id(id);if(e){e.addEventListener('input',renderCfg);e.addEventListener('change',renderCfg);}});
  ['cPl','cBi'].forEach(function(id){var e=$id(id);if(e){e.addEventListener('change',renderCfg);$$('button',e).forEach(function(b){b.addEventListener('click',function(){setTimeout(renderCfg,0);});});}});
  var cOn=$id('cOn');if(cOn)cOn.addEventListener('change',renderCfg);
  var oAdd=$id('oAdd');if(oAdd)oAdd.addEventListener('click',function(){cfg().L.forEach(function(l){XH.cart.add({key:l.key,name:l.name,sub:l.sub,price:l.price,qty:l.qty});});});
  renderCfg();

  /* ---------- tool 1: spam-time calculator ---------- */
  function roi(){var S=num('rS',25),C=num('rC',4),T=num('rT',90),H=num('rH',400),B=num('rB',60),pl=segV($id('rPl'))||'biz';
    setT('rSO',fmt(S));setT('rCO',fmt(C));setT('rTO',T+' s');setT('rHO',inr(H));setT('rBO',B+'%');
    var hrs=S*C*T/3600*22,rec=hrs*B/100,lost=hrs*H,val=rec*H,cost=S*P[pl].m,net=val-cost;
    setT('rHr',fmt(hrs)+' h');setT('rRc',fmt(rec)+' h');setT('rPc',inr(cost));setT('rNet',(net<0?'−':'')+inr(Math.abs(net)));setT('rNs',net>=0?'net value after plan cost':'plan costs more than the time it saves');
    var mx=Math.max(lost,val,cost,1),bars=[['Cost of spam time now',lost,'#c0392b'],['Value of time recovered',val,'#16a34a'],['Plan cost',cost,'#FF8A00']],w=$id('rBars');
    if(w){if(!w.children.length)w.innerHTML=bars.map(function(b,i){return '<div class="ci-bar"><small><span>'+b[0]+'</span><b id="rBv'+i+'"></b></small><u><i id="rBi'+i+'" style="background:'+b[2]+'"></i></u></div>';}).join('');
      bars.forEach(function(b,i){setT('rBv'+i,inr(b[1]));var e=$id('rBi'+i);if(e)e.style.transform='scaleX('+(b[1]/mx).toFixed(3)+')';});}
    return {hrs:hrs,rec:rec,net:net,cost:cost};}
  ['rS','rC','rT','rH','rB'].forEach(function(id){var e=$id(id);if(e)e.addEventListener('input',roi);});
  var rPl=$id('rPl');if(rPl){rPl.addEventListener('change',roi);$$('button',rPl).forEach(function(b){b.addEventListener('click',function(){setTimeout(roi,0);});});}
  roi();
  var rUse=$id('rUse');if(rUse)rUse.addEventListener('click',function(){var e=$id('cUsr');e.value=Math.round(num('rS',25));renderCfg();setSeg($id('cPl'),segV($id('rPl'))||'biz');XH.flash&&XH.flash($('.ci-cfo'));$id('configure').scrollIntoView({behavior:R?'auto':'smooth'});});

  /* ---------- tool 2: rollout planner ---------- */
  function look(){var N=Math.max(0,Math.round(num('kL',50))),Pc=num('kP',80),M=Math.max(1,Math.round(num('kD',12))),ob=+(segV($id('kF'))||1),pl=segV($id('kPl'))||'biz';
    setT('kPO',Pc+'%');
    var cov=Math.round(N*Pc/100),oth=N-cov,mon=cov*P[pl].m,onb=ob?P.onb:0,sup=mon*M,tot=sup+onb;
    setT('kNeed',inr(tot));setT('kNew',fmt(cov));setT('kRe',fmt(oth));setT('kInc',inr(mon));setT('kPk',inr(onb));setT('kCost',inr(sup));setT('kPer',cov?'₹'+(tot/cov/M).toFixed(2):'—');
    return {cov:cov,oth:oth,mon:mon,onb:onb,tot:tot,pl:pl,ob:ob};}
  ['kL','kP','kD'].forEach(function(id){var e=$id(id);if(e){e.addEventListener('input',look);e.addEventListener('change',look);}});
  ['kF','kPl'].forEach(function(id){var e=$id(id);if(e){e.addEventListener('change',look);$$('button',e).forEach(function(b){b.addEventListener('click',function(){setTimeout(look,0);});});}});
  look();
  var kUse=$id('kUse');if(kUse)kUse.addEventListener('click',function(){var r=look(),e=$id('cUsr');e.value=Math.max(1,r.cov);setSeg($id('cPl'),r.pl);var co=$id('cOn');if(co)co.checked=!!r.ob;renderCfg();XH.flash&&XH.flash($('.ci-cfo'));$id('configure').scrollIntoView({behavior:R?'auto':'smooth'});});

  /* ---------- enquiry form ---------- */
  if(XH.onForm)XH.onForm('caller-id-enquiry',function(){if(XH.toast)XH.toast('Thanks. A specialist will reply within one business day.');});

  window.__ciTest={cfg:cfg,roi:roi,look:look};
})();
