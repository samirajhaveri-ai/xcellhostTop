
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,d=document;
  var DPR=Math.min(2,window.devicePixelRatio||1),TAU=Math.PI*2;
  function $id(i){return d.getElementById(i);}
  function setT(e,t){if(typeof e==='string')e=$id(e);if(e&&e.textContent!==t)e.textContent=t;}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function eo(t){t=clamp(t,0,1);return 1-Math.pow(1-t,3);}
  function eio(t){t=clamp(t,0,1);return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function spring(u){return u<=0?0:u>1.6?1:1-Math.exp(-6*u)*Math.cos(9*u);}
  function seg(a,b,t){return clamp((t-a)/(b-a),0,1);}
  function inr(n){return XH.inr?XH.inr(Math.round(n)):'₹'+Math.round(n).toLocaleString('en-IN');}
  function dark(){return d.documentElement.getAttribute('data-theme')==='dark';}
  function segV(el){if(!el)return null;var b=$('button.on',el);return el.dataset.value||(b?b.getAttribute('data-v'):null);}
  function setSeg(el,v){if(!el)return;$$('button',el).forEach(function(x){var on=x.getAttribute('data-v')===String(v);x.classList.toggle('on',on);x.setAttribute('aria-pressed',on);});el.dataset.value=String(v);el.dispatchEvent(new CustomEvent('change',{bubbles:true}));}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  var MONO='"IBM Plex Mono"',SANS='"IBM Plex Sans"',DISP='Sora';
  var BL='#0066FF',OR='#FF8A00',NV='#0B132B',GR='#16a34a',RD='#c0392b';
  function th(){return dark()?{ink:'#EAF1FF',mut:'#93A4C4',line:'rgba(255,255,255,.16)',soft:'rgba(255,255,255,.07)',surf:'#13224A',bl:'#5C9DFF',ot:'#FFB15C',gr:'#5FE08D',rd:'#ff8a80',bg:'#0C1834'}:{ink:NV,mut:'#55617A',line:'rgba(11,19,43,.15)',soft:'rgba(11,19,43,.05)',surf:'#ffffff',bl:BL,ot:'#C46A00',gr:GR,rd:RD,bg:'#F3F6FC'};}

  /* ===== one shared rAF ticker ===== */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function watch(el,on){if(!el)return;var vis=false;XH.whenVisible(el,function(v){vis=v;on(v&&!d.hidden);});d.addEventListener('visibilitychange',function(){on(vis&&!d.hidden);});}
  function onceIn(el,fn){if(!el)return;if(R){fn();return;}var done=false;XH.whenVisible(el,function(v){if(v&&!done){done=true;fn();}});}

  /* ===== canvas helpers ===== */
  function fitC(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function txt(c,s,x,y,font,col,al){c.font=font;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  var GA=1;function ga(c,a){c.globalAlpha=clamp(a,0,1)*GA;}
  function pill(c,s,x,y,font,bg,fg,al){c.font=font;var w=c.measureText(s).width+14,h=18,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,9);c.fillStyle=bg;c.fill();txt(c,s,x0+7,y+.5,font,fg);return w;}
  function stamp(c,s,x,y,t0,t,col,fs){if(t<t0)return;var u=spring((t-t0)/600),k=lerp(1.7,1,clamp(u,0,1.2));c.save();c.translate(x,y);c.rotate(-.04);c.scale(k,k);ga(c,(t-t0)/180);var f='800 '+fs+'px '+MONO;c.font=f;var w=c.measureText(s).width+18;rr(c,-w/2,-12,w,24,5);c.fillStyle=dark()?'rgba(10,20,44,.96)':'rgba(255,255,255,.97)';c.fill();c.strokeStyle=col;c.lineWidth=2;c.stroke();txt(c,s,0,1,f,col,'center');c.restore();ga(c,1);}
  function tick(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(x-s*.45,y);c.lineTo(x-s*.1,y+s*.35);c.lineTo(x+s*.5,y-s*.35);c.stroke();c.lineCap='butt';}
  function cross(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.lineCap='round';c.beginPath();c.moveTo(x-s*.4,y-s*.4);c.lineTo(x+s*.4,y+s*.4);c.moveTo(x+s*.4,y-s*.4);c.lineTo(x-s*.4,y+s*.4);c.stroke();c.lineCap='butt';}
  function badge(c,x,y,r,bg,kind){c.fillStyle=bg;c.beginPath();c.arc(x,y,r,0,TAU);c.fill();if(kind==='x')cross(c,x,y,r*1.2,'#fff');else if(kind==='!'){txt(c,'!',x,y+.5,'800 '+(r*1.5)+'px '+MONO,'#fff','center');}else tick(c,x,y,r*1.3,'#fff');}
  function packet(c,x1,y1,x2,y2,u,col,arc){if(u<=0||u>=1)return;var A=arc===undefined?10:arc;
    for(var k=4;k>0;k--){var e2=eio(clamp(u-k*.035,0,1));ga(c,.12*(5-k));c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e2),lerp(y1,y2,e2)-Math.sin(e2*Math.PI)*A,2.8,0,TAU);c.fill();}
    var e=eio(u),px=lerp(x1,x2,e),py=lerp(y1,y2,e)-Math.sin(e*Math.PI)*A;ga(c,1);c.fillStyle=col;c.beginPath();c.arc(px,py,4.4,0,TAU);c.fill();c.fillStyle='rgba(255,255,255,.9)';c.beginPath();c.arc(px,py,1.6,0,TAU);c.fill();}
  function card(c,x,y,w,h,T,stroke,r){rr(c,x,y,w,h,r||10);c.fillStyle=T.surf;c.fill();c.strokeStyle=stroke||T.line;c.lineWidth=stroke?1.8:1.1;c.stroke();}
  // laptop-style window with title bar; returns inner top y
  function win(c,x,y,w,h,T,title,stroke){card(c,x,y,w,h,T,stroke,12);rr(c,x,y,w,20,12);c.fillStyle=dark()?'rgba(255,255,255,.06)':'rgba(11,19,43,.05)';c.fill();
    for(var i=0;i<3;i++){c.fillStyle=[RD,OR,GR][i];ga(c,.7);c.beginPath();c.arc(x+11+i*9,y+10,2.6,0,TAU);c.fill();}ga(c,1);
    if(title){txt(c,title,x+w/2+10,y+10.5,'600 9px '+MONO,T.mut,'center');}return y+20;}
  function phone(c,x,y,w,h,T,stroke){rr(c,x,y,w,h,18);c.fillStyle=dark()?'#0A1430':'#0B132B';c.fill();rr(c,x+4,y+4,w-8,h-8,15);c.fillStyle=T.surf;c.fill();if(stroke){rr(c,x,y,w,h,18);c.strokeStyle=stroke;c.lineWidth=2;c.stroke();}
    rr(c,x+w/2-14,y+7,28,5,3);c.fillStyle=dark()?'#1d2b52':'#0B132B';c.fill();return {x:x+4,y:y+16,w:w-8,h:h-20};}
  function lockI(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=1.8;c.beginPath();c.arc(x,y-s*.12,s*.26,Math.PI,0);c.stroke();rr(c,x-s*.38,y-s*.12,s*.76,s*.56,2);c.fillStyle=col;c.fill();}
  function person(c,x,y,s,col){c.fillStyle=col;c.beginPath();c.arc(x,y-s*.28,s*.22,0,TAU);c.fill();c.beginPath();c.arc(x,y+s*.36,s*.38,Math.PI,0);c.fill();}
  function finger(c,x,y,r,col,u,T){c.lineCap='round';for(var i=0;i<4;i++){var rr2=r*(.3+i*.22);c.strokeStyle=T.line;c.lineWidth=2;c.beginPath();c.arc(x,y+r*.15,rr2,Math.PI*1.1,Math.PI*1.9);c.stroke();}
    if(u>0){c.save();c.beginPath();c.rect(x-r*1.2,y+r*1.1-u*r*2.2,r*2.4,u*r*2.2+2);c.clip();for(var j=0;j<4;j++){var r3=r*(.3+j*.22);c.strokeStyle=col;c.lineWidth=2.2;c.beginPath();c.arc(x,y+r*.15,r3,Math.PI*1.1,Math.PI*1.9);c.stroke();}c.restore();}
    c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.arc(x,y,r*1.05,0,TAU);c.stroke();c.lineCap='butt';}
  function usbKey(c,x,y,s,col,T){rr(c,x-s*.32,y-s*.9,s*.64,s*1.3,s*.2);c.fillStyle=dark()?'#1d2b52':'#0B132B';c.fill();rr(c,x-s*.2,y+s*.4,s*.4,s*.45,2);c.fillStyle=T.mut;c.fill();c.fillStyle=col;c.beginPath();c.arc(x,y-s*.3,s*.18,0,TAU);c.fill();}

  /* ======================================================================
     HERO · five MFA scenes on one canvas (sample tenant)
     ====================================================================== */
  var DUR=5500,FADE=480;
  var SC=[
    {cap:'Push approved by number matching',ph:'Verifying',lt:'SIGN-IN LOG',mk:'Method · Authenticator push',
     lg:[[300,'09:02','priya@ · password accepted','1st factor',''],[1000,'09:02','push sent · number 47 shown','MFA','w'],[2900,'09:02','47 typed in Authenticator','match','g'],[3900,'09:02','signed in · Mumbai · Outlook','granted','g']]},
    {cap:'Passkey works only on the real site',ph:'Passkey',lt:'PASSKEY LOG',mk:'Method · Passkey in Authenticator',
     lg:[[500,'10:14','login.yourco.in · passkey request','challenge',''],[2000,'10:14','fingerprint verified on phone','signed','g'],[2700,'10:14','origin matches · signed in','granted','g'],[3900,'10:31','look-alike site · no passkey match','refused','r']]},
    {cap:'Risky sign-in steps up to a security key',ph:'Step-up',lt:'CONDITIONAL ACCESS',mk:'Method · FIDO2 security key',
     lg:[[300,'18:40','new device · unfamiliar network','risk','w'],[1900,'18:40','policy: finance · payments app','match',''],[2400,'18:40','require phishing-resistant MFA','step-up','w'],[3700,'18:41','security key tapped · 1 h session','granted','g']]},
    {cap:'Push flood fails · user reports it',ph:'Fatigue',lt:'IDENTITY ALERTS',mk:'Method · Authenticator push',
     lg:[[400,'02:11','7 pushes in 2 min · unfamiliar IP','flood','r'],[2600,'02:12','user: "No, it’s not me"','denied','g'],[3300,'02:12','suspicious activity reported','flagged','w'],[4000,'02:13','password reset · SOC ticket opened','contained','g']]},
    {cap:'Rollout: registration up, SMS down',ph:'Rollout',lt:'WEEKLY REPORT',mk:'Coverage · all users',
     lg:[[400,'Wk 1','registration campaign started','41%',''],[1600,'Wk 3','passkeys overtake SMS','shift','w'],[2800,'Wk 4','legacy sign-ins blocked','0 left','g'],[4000,'Wk 5','Conditional Access enforced','97%','g']]}
  ];

  /* --- scene 0: number matching --- */
  function s0(c,w,h,t){var T=th(),nar=w<420,top=46,bot=h-12;
    var lx=nar?8:w*.04,lw=nar?w*.54:w*.52,ly=top,lh=bot-top;
    var pw=nar?w*.36:Math.min(150,w*.3),px=w-pw-(nar?8:w*.05),py=top-4,ph=bot-py;
    var iy=win(c,lx,ly,lw,lh,T,nar?'':'login.yourco.in');
    var cx=lx+lw/2,fs=nar?11:13;
    txt(c,'Sign in',lx+14,iy+18,'700 '+(nar?13:15)+'px '+DISP,T.ink);
    rr(c,lx+14,iy+32,lw-28,22,6);c.strokeStyle=T.line;c.lineWidth=1;c.stroke();txt(c,'priya@yourco.in',lx+22,iy+43,'500 '+(nar?9:10.5)+'px '+SANS,T.mut);
    rr(c,lx+14,iy+60,lw-28,22,6);c.stroke();var nd=Math.min(9,Math.floor(t/80));for(var i=0;i<nd;i++){c.fillStyle=T.ink;c.beginPath();c.arc(lx+24+i*9,iy+71,2.6,0,TAU);c.fill();}
    var by=iy+(nar?108:120);
    if(t>800&&t<3900){var u=spring((t-800)/500);txt(c,nar?'Approve in app':'Approve the sign-in request',cx,iy+96,'600 '+(nar?9:10.5)+'px '+SANS,T.mut,'center');
      c.save();c.translate(cx,by+16);c.scale(u,u);rr(c,-30,-20,60,40,10);c.fillStyle=dark()?'rgba(92,157,255,.15)':'rgba(0,102,255,.08)';c.fill();c.strokeStyle=T.bl;c.lineWidth=2;c.stroke();txt(c,'47',0,1,'800 24px '+DISP,T.bl,'center');c.restore();
      if(t<3200){var dd=(Math.floor(t/400)%3)+1,s='';for(var q=0;q<dd;q++)s+='•';txt(c,'waiting '+s,cx,by+52,'600 9px '+MONO,T.mut,'center');}}
    if(t>=3900){var u2=spring((t-3900)/500);c.save();c.translate(cx,by+12);c.scale(u2,u2);badge(c,0,0,17,GR);c.restore();txt(c,'Signed in',cx,by+44,'700 '+fs+'px '+DISP,T.gr,'center');}
    // phone
    var P=phone(c,px,py,pw,ph,T,t>1700&&t<3900?T.bl:null);
    txt(c,'Authenticator',P.x+P.w/2,P.y+10,'700 '+(nar?8.5:9.5)+'px '+MONO,T.mut,'center');
    if(t<1700){ga(c,.45);lockI(c,P.x+P.w/2,P.y+P.h*.45,26,T.mut);ga(c,1);}
    else{var a=eo(seg(1700,2100,t));ga(c,a);var ty=P.y+24+(1-a)*10;
      txt(c,nar?'Signing in?':'Are you signing in?',P.x+P.w/2,ty+6,'700 '+(nar?9.5:11)+'px '+DISP,T.ink,'center');
      txt(c,'yourco.in · Mumbai',P.x+P.w/2,ty+22,'500 '+(nar?7.5:8.5)+'px '+MONO,T.mut,'center');
      var bw2=nar?20:24,gx=P.x+P.w/2-bw2-3,gy=ty+32;
      for(var k=0;k<2;k++){rr(c,gx+k*(bw2+6),gy,bw2,bw2+4,5);c.strokeStyle=(t>2400&&k===0)||(t>2800&&k===1)?T.bl:T.line;c.lineWidth=1.6;c.stroke();
        var dg=k===0?(t>2400?'4':''):(t>2800?'7':'');if(dg)txt(c,dg,gx+k*(bw2+6)+bw2/2,gy+(bw2+4)/2+1,'800 '+(nar?12:14)+'px '+DISP,T.ink,'center');}
      // keypad
      var ky=gy+bw2+14,kh=Math.max(12,(P.y+P.h-ky-34)/4),kw=(P.w-20)/3,keys='123456789 0 ';
      for(var r=0;r<4;r++)for(var q2=0;q2<3;q2++){var ch=keys.charAt(r*3+q2);if(ch===' ')continue;var kx=P.x+10+q2*kw,kyy=ky+r*kh,hot=(ch==='4'&&t>2250&&t<2550)||(ch==='7'&&t>2650&&t<2950);
        rr(c,kx+2,kyy+1,kw-4,kh-3,4);c.fillStyle=hot?T.bl:T.soft;c.fill();txt(c,ch,kx+kw/2,kyy+kh/2,'600 '+(nar?8:9)+'px '+MONO,hot?'#fff':T.ink,'center');}
      var yb=P.y+P.h-26,yh=t>3150&&t<3400;rr(c,P.x+10,yb,P.w-20,20,10);c.fillStyle=t>2900?(yh?GR:T.bl):T.line;c.fill();txt(c,'Yes',P.x+P.w/2,yb+10.5,'700 9.5px '+DISP,'#fff','center');
      ga(c,1);}
    packet(c,lx+lw,ly+lh*.5,px,py+ph*.4,seg(1000,1700,t),T.bl,14);
    packet(c,px,py+ph*.75,lx+lw,ly+lh*.62,seg(3250,3900,t),GR,-10);
    stamp(c,'NUMBER MATCHED',nar?w*.5:lx+lw*.5,top+12,4400,t,T.gr,nar?9.5:11);
    return {l:t<1000?1:2,pr:false,v:t<1000?'Password entered…':t<1700?'Push sent · number 47':t<3200?'Typing the number…':t<3900?'Number matched':'Signed in',k:SC[0].mk};}

  /* --- scene 1: passkey on real vs look-alike site --- */
  function s1(c,w,h,t){var T=th(),nar=w<420,top=46,bot=h-12;
    var bx=nar?8:w*.04,bw=nar?w*.56:w*.54,bh1=(bot-top)*.5-5,by=top;
    var pw=nar?w*.34:Math.min(140,w*.28),px=w-pw-(nar?8:w*.05),py=top-4,ph=bot-py;
    var good=t>2700,fakeIn=eo(seg(3100,3500,t));
    var iy=win(c,bx,by,bw,bh1,T,'',good&&t<3100?T.gr:null);
    lockI(c,bx+16,iy+12,12,T.gr);txt(c,'login.yourco.in',bx+26,iy+12,'600 '+(nar?8.5:10)+'px '+MONO,T.ink);
    var btY=iy+(bh1-20)/2+8;
    if(!good){rr(c,bx+14,btY-12,bw-28,24,12);c.fillStyle=t>500&&t<800?NV:T.bl;c.fill();txt(c,'Sign in with a passkey',bx+bw/2,btY+.5,'700 '+(nar?9:10.5)+'px '+DISP,'#fff','center');}
    else{var u=spring((t-2700)/500);c.save();c.translate(bx+30,btY);c.scale(u,u);badge(c,0,0,11,GR);c.restore();txt(c,nar?'Signed in':'Origin verified · signed in',bx+48,btY,'700 '+(nar?9.5:11)+'px '+DISP,T.gr);}
    // fake site
    if(fakeIn>0){var fy=by+bh1+10+(1-fakeIn)*20;ga(c,fakeIn);var iy2=win(c,bx,fy,bw,bh1,T,'',t>3900?T.rd:null);
      txt(c,'!',bx+16,iy2+12,'800 11px '+MONO,T.rd,'center');txt(c,nar?'yourco-login.help':'yourco-login.help/signin',bx+26,iy2+12,'600 '+(nar?8.5:10)+'px '+MONO,T.rd);
      var b2=iy2+(bh1-20)/2+8;
      if(t<3900){rr(c,bx+14,b2-12,bw-28,24,12);c.fillStyle=T.bl;c.fill();txt(c,'Sign in with a passkey',bx+bw/2,b2+.5,'700 '+(nar?9:10.5)+'px '+DISP,'#fff','center');}
      else{badge(c,bx+30,b2,11,RD,'x');txt(c,nar?'Nothing to steal':'No passkey · nothing to steal',bx+48,b2,'700 '+(nar?9.5:11)+'px '+DISP,T.rd);}
      ga(c,1);}
    // phone
    var P=phone(c,px,py,pw,ph,T,t>900&&t<2000?T.bl:null),fx=P.x+P.w/2,fy2=P.y+P.h*.48,fr=Math.min(26,P.w*.26);
    var ph2=t<3400?0:1,msg;
    if(t<900){msg='Ready';finger(c,fx,fy2,fr,T.bl,0,T);}
    else if(t<2700){msg=t<2000?'Touch to sign in':'Passkey used';finger(c,fx,fy2,fr,t<2000?T.bl:T.gr,eo(seg(900,1900,t)),T);}
    else if(ph2===0){msg='Done';finger(c,fx,fy2,fr,T.gr,1,T);}
    else if(t<3900){msg='Checking site…';finger(c,fx,fy2,fr,T.mut,0,T);}
    else{msg='No passkey for this site';finger(c,fx,fy2,fr,T.rd,0,T);var u3=spring((t-3900)/500);c.save();c.translate(fx+fr*.9,fy2-fr*.9);c.scale(u3,u3);badge(c,0,0,9,RD,'x');c.restore();}
    txt(c,'yourco.in',fx,P.y+14,'700 '+(nar?8:9)+'px '+MONO,T.mut,'center');
    c.font='600 '+(nar?8:9.5)+'px '+SANS;var m2=msg;while(c.measureText(m2).width>P.w-10&&m2.length>4)m2=m2.slice(0,-2);
    txt(c,m2===msg?msg:m2+'…',fx,P.y+P.h-16,'600 '+(nar?8:9.5)+'px '+SANS,t>=3900?T.rd:T.ink,'center');
    packet(c,bx+bw,by+bh1*.5,px,py+ph*.35,seg(600,1100,t),T.bl,12);
    packet(c,px,py+ph*.55,bx+bw,by+bh1*.6,seg(2000,2650,t),GR,-8);
    if(fakeIn>=1)packet(c,bx+bw,by+bh1*1.5+10,px,py+ph*.65,seg(3450,3900,t),OR,-10);
    stamp(c,nar?'PHISH REFUSED':'PHISHING PAGE REFUSED',nar?w*.5:bx+bw*.5,top+12,4400,t,T.gr,nar?9.5:11);
    return {l:t<2000?1:2,pr:t>=2000,v:t<900?'Passkey requested':t<2000?'Fingerprint on phone':t<3400?'Signed in · origin bound':t<3900?'Look-alike site asks…':'Phishing page refused',k:SC[1].mk};}

  /* --- scene 2: Conditional Access step-up --- */
  var CHK=[['User','finance group','i'],['Device','not compliant','!'],['Location','outside India','!'],['App','payments portal','i']];
  function s2(c,w,h,t){var T=th(),nar=w<420,top=46,bot=h-12;
    var sx=nar?8:w*.03,sw=nar?w-16:w*.27,sy=top,sh=nar?44:bot-top;
    var cx0=nar?8:w*.33,cw=nar?w*.6:w*.38,cy0=nar?top+52:top,ch=nar?bot-cy0:bot-top;
    var kx=nar?w*.82:w*.86,ky=nar?cy0+ch*.42:top+(bot-top)*.42;
    // sign-in card
    var su=eo(seg(100,600,t));ga(c,su);card(c,sx,sy,sw,sh,T,t<2300?T.ot:null);
    if(nar){person(c,sx+18,sy+sh/2,18,T.ot);txt(c,'Sign-in · new device · unfamiliar network',sx+34,sy+sh/2,'600 9px '+SANS,T.ink);}
    else{person(c,sx+sw/2,sy+40,30,T.ot);txt(c,'Sign-in attempt',sx+sw/2,sy+70,'700 11px '+DISP,T.ink,'center');
      var ln=['new device','unfamiliar network','priya@yourco.in'];ln.forEach(function(s,i){txt(c,s,sx+sw/2,sy+92+i*16,'500 9px '+MONO,T.mut,'center');});
      if(t>3700){ga(c,eo(seg(3700,4100,t)));pill(c,'1 h session',sx+sw/2,sy+sh-22,'700 9px '+MONO,GR,'#fff','center');}}
    ga(c,1);
    // policy card
    card(c,cx0,cy0,cw,ch,T,t>2300&&t<3700?OR:null);txt(c,'CONDITIONAL ACCESS',cx0+10,cy0+13,'800 '+(nar?7.5:8.5)+'px '+MONO,T.mut);
    var rh=(ch-60)/4;
    CHK.forEach(function(r,i){var t0=700+i*400,u=eo(seg(t0,t0+300,t));if(u<=0)return;var y=cy0+28+i*rh;ga(c,u);
      rr(c,cx0+8,y,cw-16,rh-5,7);c.fillStyle=T.soft;c.fill();var col=r[2]==='!'?OR:T.bl;badge(c,cx0+20,y+(rh-5)/2,7,col,r[2]==='!'?'!':'');
      txt(c,r[0],cx0+33,y+(rh-5)/2-(nar?0:6),'700 '+(nar?8.5:10)+'px '+DISP,T.ink);if(!nar)txt(c,r[1],cx0+33,y+(rh-5)/2+7,'500 8.5px '+MONO,T.mut);else txt(c,r[1],cx0+cw-12,y+(rh-5)/2,'500 7.5px '+MONO,T.mut,'right');ga(c,1);});
    if(t>2300){var du=spring((t-2300)/500);c.save();c.translate(cx0+cw/2,cy0+ch-16);c.scale(du,du);pill(c,t<3700?(nar?'NEED PHISH-RESISTANT':'REQUIRE PHISHING-RESISTANT MFA'):'GRANTED · AAL3',0,0,'800 '+(nar?7.5:8.5)+'px '+MONO,t<3700?OR:GR,t<3700?NV:'#fff','center');c.restore();}
    // flow packets
    if(!nar)packet(c,sx+sw,sy+sh*.4,cx0,cy0+ch*.4,seg(400,900,t),T.ot,10);
    packet(c,cx0+cw,cy0+ch-16,kx,ky,seg(2500,3000,t),OR,14);
    // security key
    var S=nar?30:40,tap=t>3000&&t<3700;usbKey(c,kx,ky,S,t>3700?GR:tap?OR:T.bl,T);
    if(tap){var pu=((t-3000)%700)/700;ga(c,.6*(1-pu));c.strokeStyle=OR;c.lineWidth=2;c.beginPath();c.arc(kx,ky-S*.3,S*(.3+pu*.7),0,TAU);c.stroke();ga(c,1);
      txt(c,'tap',kx,ky+S*1.15,'700 9px '+MONO,T.ot,'center');}
    if(t>=3700){txt(c,'FIDO2',kx,ky+S*1.15,'700 9px '+MONO,T.gr,'center');var u4=spring((t-3700)/500);c.save();c.translate(kx+S*.45,ky-S*.85);c.scale(u4,u4);badge(c,0,0,8,GR);c.restore();}
    else if(!tap)txt(c,'key',kx,ky+S*1.15,'700 9px '+MONO,T.mut,'center');
    stamp(c,'STEPPED UP',nar?kx-6:cx0+cw/2,nar?cy0+14:top+12,4400,t,T.gr,nar?9.5:11);
    return {l:t<2300?1:t<3700?2:3,pr:t>=3700,v:t<700?'Unusual sign-in':t<2300?'Evaluating policy…':t<3000?'Step-up required':t<3700?'Tap your security key':'Granted · 1 h session',k:SC[2].mk};}

  /* --- scene 3: MFA fatigue blocked --- */
  function s3(c,w,h,t){var T=th(),nar=w<420,top=46,bot=h-12;
    var ax=nar?8:w*.04,aw=nar?w*.5:w*.44,ay=top,ah=nar?78:(bot-top)*.46;
    var pw=nar?w*.4:Math.min(160,w*.32),px=w-pw-(nar?8:w*.05),py=top-4,ph=bot-py;
    var N=Math.min(7,Math.max(0,Math.floor((t-300)/300)+1));if(t<300)N=0;var stop=t>3400;
    card(c,ax,ay,aw,ah,T,!stop?T.rd:T.line);person(c,ax+22,ay+(nar?24:30),nar?18:24,T.rd);
    txt(c,nar?'Has the password':'Someone has the password',ax+40,ay+(nar?20:24),'700 '+(nar?9:11)+'px '+DISP,T.ink);
    txt(c,'unfamiliar IP · sample',ax+40,ay+(nar?34:40),'500 '+(nar?7.5:9)+'px '+MONO,T.mut);
    pill(c,'pushes sent × '+N,ax+12,ay+ah-(nar?14:18),'700 '+(nar?8:9)+'px '+MONO,stop?T.mut:RD,'#fff');
    for(var i=0;i<7;i++){var t0=300+i*300;packet(c,ax+aw,ay+ah*.5,px,py+ph*.3,seg(t0,t0+280,t),RD,8);}
    // account outcome card
    var oy=ay+ah+10,oh=bot-oy;
    if(t>3500){var u=eo(seg(3500,3900,t));ga(c,u);card(c,ax,oy+(1-u)*10,aw,oh,T,T.gr);
      var lh2=Math.min(18,(oh-10)/3);
      [['Account flagged for review',3500],['Password reset required',3800],['XcellHost SOC ticket opened',4100]].forEach(function(r,k){if(t<r[1])return;var y=oy+10+k*lh2+lh2/2;ga(c,u*eo(seg(r[1],r[1]+300,t)));badge(c,ax+16,y,6,GR);txt(c,nar?r[0].replace('XcellHost ','').replace(' for review',''):r[0],ax+28,y,'600 '+(nar?8:9.5)+'px '+SANS,T.ink);});ga(c,1);}
    // phone with stacked prompts
    var P=phone(c,px,py,pw,ph,T,stop?T.gr:T.rd);txt(c,'Authenticator',P.x+P.w/2,P.y+8,'700 '+(nar?8:9)+'px '+MONO,T.mut,'center');
    var col=seg(3400,3700,t),vis=Math.min(N,4);
    for(var k=vis-1;k>=0;k--){var yy=P.y+20+k*(nar?8:10)*(1-col)+k*0,cy=yy+(1-col)*0;ga(c,(1-col)*(1-k*.18));rr(c,P.x+6+k*3,cy,P.w-12-k*6,nar?44:52,8);c.fillStyle=T.surf;c.fill();c.strokeStyle=T.line;c.lineWidth=1;c.stroke();
      if(k===0){txt(c,'Sign-in request',P.x+12,cy+12,'700 '+(nar?8:9.5)+'px '+DISP,T.ink);txt(c,nar?'Enter number shown':'Enter the number shown',P.x+12,cy+26,'500 '+(nar?7:8)+'px '+SANS,T.mut);
        for(var q=0;q<2;q++){rr(c,P.x+12+q*18,cy+(nar?32:36),14,nar?9:11,2);c.strokeStyle=T.line;c.stroke();}}}
    ga(c,1);
    var by2=P.y+P.h-(nar?44:52);
    if(t>2300&&t<3400){var no=t>2500&&t<2800;rr(c,P.x+8,by2,P.w-16,18,9);c.fillStyle=no?RD:T.soft;c.fill();txt(c,"No, it's not me",P.x+P.w/2,by2+9.5,'700 '+(nar?8:9)+'px '+DISP,no?'#fff':T.rd,'center');
      if(t>2850){var rp=t>3100&&t<3400;rr(c,P.x+8,by2+22,P.w-16,18,9);c.fillStyle=rp?OR:T.soft;c.fill();txt(c,'Report it',P.x+P.w/2,by2+31.5,'700 '+(nar?8:9)+'px '+DISP,rp?NV:T.ot,'center');}}
    if(stop){var u5=spring((t-3500)/500);c.save();c.translate(P.x+P.w/2,P.y+P.h*.42);c.scale(u5,u5);badge(c,0,0,16,GR);c.restore();txt(c,'Prompts stopped',P.x+P.w/2,P.y+P.h*.42+30,'700 '+(nar?8.5:10)+'px '+DISP,T.gr,'center');}
    stamp(c,'0 APPROVED',ax+aw*.62,ay+ah*.5,4400,t,T.gr,nar?9.5:11);
    return {l:2,pr:false,v:t<2300?'Push flood · '+N+' prompts':t<3400?'User denies & reports':'Fatigue attack blocked',k:SC[3].mk};}

  /* --- scene 4: rollout dashboard --- */
  var MIX0=[38,14,40,6,2],MIX1=[4,8,34,46,8],MIXC=function(T){return [RD,T.mut,BL,GR,OR];},MIXN=['SMS','OTP','Push','Passkey','Key'];
  function s4(c,w,h,t){var T=th(),nar=w<420,top=46,bot=h-12,g=10;
    var lx=nar?8:w*.04,lw=nar?w-16:w*.4,ly=top,lh=nar?(bot-top)*.42:bot-top;
    var rx=nar?8:lx+lw+g,rw=nar?w-16:w-rx-w*.04,ry=nar?ly+lh+g:top,rh=nar?bot-ry:bot-top;
    var cov=Math.round(lerp(41,97,eio(seg(300,3600,t))));
    // coverage ring
    card(c,lx,ly,lw,lh,T);txt(c,'MFA REGISTERED',lx+10,ly+13,'800 8.5px '+MONO,T.mut);
    var rcx=nar?lx+lh*.55:lx+lw/2,rcy=nar?ly+lh*.58:ly+lh*.52,rad=nar?lh*.32:Math.min(lw,lh)*.27;
    c.lineWidth=nar?9:12;c.strokeStyle=T.line;c.beginPath();c.arc(rcx,rcy,rad,0,TAU);c.stroke();
    c.strokeStyle=cov>90?GR:BL;c.lineCap='round';c.beginPath();c.arc(rcx,rcy,rad,-Math.PI/2,-Math.PI/2+TAU*cov/100);c.stroke();c.lineCap='butt';
    txt(c,cov+'%',rcx,rcy,'800 '+(nar?16:22)+'px '+DISP,T.ink,'center');
    if(nar){txt(c,'of 250 users',lx+lh*1.1,rcy-8,'600 9px '+MONO,T.mut);txt(c,'sample · 5 weeks',lx+lh*1.1,rcy+8,'600 9px '+MONO,T.mut);}
    else{txt(c,'of 250 users · sample',rcx,ly+lh-16,'600 9px '+MONO,T.mut,'center');}
    // mix bar
    var mh=nar?rh*.5:rh*.46;card(c,rx,ry,rw,mh,T);txt(c,'SIGN-INS BY METHOD',rx+10,ry+13,'800 8.5px '+MONO,T.mut);
    var mu=eio(seg(900,3200,t)),bx=rx+10,bw=rw-20,byy=ry+24,bh=nar?12:16,acc=0,cols=MIXC(T);
    for(var i=0;i<5;i++){var v=lerp(MIX0[i],MIX1[i],mu),ww=bw*v/100;c.fillStyle=cols[i];c.fillRect(bx+acc,byy,Math.max(0,ww-1),bh);acc+=ww;}
    var lgY=byy+bh+(nar?10:14),cw=bw/5;for(var j=0;j<5;j++){var vv=Math.round(lerp(MIX0[j],MIX1[j],mu));c.fillStyle=cols[j];c.fillRect(bx+j*cw,lgY-4,8,8);txt(c,MIXN[j],bx+j*cw+11,lgY,'600 '+(nar?7:8.5)+'px '+MONO,T.ink);if(!nar||mh>60)txt(c,vv+'%',bx+j*cw+11,lgY+(nar?11:13),'700 '+(nar?7.5:9)+'px '+MONO,T.mut);}
    // legacy sign-ins
    var ly2=ry+mh+g,lh2=ry+rh-ly2;card(c,rx,ly2,rw,lh2,T);txt(c,'LEGACY-AUTH SIGN-INS / WEEK',rx+10,ly2+13,'800 8.5px '+MONO,T.mut);
    var leg=Math.round(312*(1-eio(seg(1400,3300,t))));txt(c,String(leg),rx+rw-14,ly2+13,'800 '+(nar?11:14)+'px '+DISP,leg===0?T.gr:T.rd,'right');
    var sx0=rx+12,sw=rw-24,sy0=ly2+24,shh=lh2-32,pts=[312,290,240,180,96,20,0];
    if(shh>8){c.strokeStyle=T.rd;c.lineWidth=2;c.beginPath();var shown=eo(seg(1400,3300,t))*6;for(var p=0;p<=6;p++){if(p>shown+1)break;var px2=sx0+sw*p/6,py2=sy0+shh*(1-pts[p]/312);if(p===0)c.moveTo(px2,py2);else c.lineTo(px2,py2);}c.stroke();}
    stamp(c,'ENFORCED · WK 5',rx+rw/2,ly2+lh2*.6,4300,t,T.gr,nar?9.5:11);
    var prs=Math.round(lerp(MIX0[3]+MIX0[4],MIX1[3]+MIX1[4],mu));
    return {l:mu>.6?3:2,pr:prs>=50,v:'Coverage '+cov+'% · phishing-resistant '+prs+'%',k:SC[4].mk};}

  var DRAW=[s0,s1,s2,s3,s4];
  var hero=$id('mfHero'),cv=$id('mfCv'),scr=$id('mfScr'),rail=$id('mfRail'),dev=$id('mfDev');
  var tabs=rail?$$('button',rail):[],logEl=$id('mfLog'),segs=$id('mfSeg')?$$('span',$id('mfSeg')):[],vb=$id('mfVb'),prE=$id('mfPr'),mk=$id('mfMk');
  var cur=0,prev=-1,tS=0,tLast=0,fadeT=FADE,paused=false,lastG={v:'',l:-1,pr:null};
  function buildLog(k){if(!logEl)return;logEl.innerHTML=SC[k].lg.map(function(e){return '<li class="'+e[4]+'"><b>'+e[1]+'</b><span>'+esc(e[2])+'</span><em>'+esc(e[3])+'</em></li>';}).join('');}
  function logAt(t){if(!logEl)return;var lg=SC[cur].lg,li=logEl.children;for(var i=0;i<lg.length;i++){var on=R||t>=lg[i][0];if(li[i]&&li[i].classList.contains('in')!==on)li[i].classList.toggle('in',on);}}
  function setScene(k,user){k=(k+5)%5;if(k===cur&&!user)return;prev=cur;cur=k;tS=0;fadeT=R?FADE:0;
    tabs.forEach(function(b,i){var on=i===cur;b.classList.toggle('on',on);b.classList.toggle('done',i<cur);b.setAttribute('aria-selected',on);b.style.setProperty('--p','0');});
    var S=SC[cur];setT('mfCapN','0'+(cur+1));setT('mfCapT',S.cap);setT('mfPh',S.ph);setT('mfLt',S.lt);buildLog(cur);lastG={v:'',l:-1,pr:null};if(R)render();}
  function gauge(g){if(g.l!==lastG.l){segs.forEach(function(s,i){s.classList.toggle('on',i<g.l);s.classList.toggle('top',i===2&&g.l===3);});}
    if(g.pr!==lastG.pr&&prE){prE.className=g.pr?'yes':'no';prE.textContent='Phishing-resistant · '+(g.pr?'yes':'no');}
    setT(mk,g.k);if(g.v!==lastG.v){var was=lastG.v;setT(vb,g.v);if(was!=='')bump(vb);}lastG={v:g.v,l:g.l,pr:g.pr};}
  function render(){var f=cv&&fitC(cv);if(!f)return;var c=f.c,w=f.w,h=f.h;c.clearRect(0,0,w,h);
    var t=R?5200:tS,fading=prev>=0&&fadeT<FADE,g;
    if(fading){var u=fadeT/FADE;GA=1-eo(Math.min(1,u*1.4));c.globalAlpha=GA;c.save();c.translate(-u*14,0);DRAW[prev](c,w,h,5200);c.restore();GA=eo(u);c.globalAlpha=GA;c.save();c.translate((1-u)*14,0);g=DRAW[cur](c,w,h,t);c.restore();GA=1;c.globalAlpha=1;}
    else{GA=1;g=DRAW[cur](c,w,h,t);}
    gauge(g);logAt(t);}
  var heroOn=loop(function(now){var dt=tLast?Math.min(64,now-tLast):16;tLast=now;
    if(!paused){tS+=dt;if(tabs[cur])tabs[cur].style.setProperty('--p',Math.min(1,tS/DUR).toFixed(3));if(tS>=DUR)setScene(cur+1);}
    if(fadeT<FADE)fadeT+=dt;
    if(!paused||fadeT<FADE+20)render();});
  function setPause(p){paused=p;tLast=0;if(dev)dev.classList.toggle('paused',p);}
  if(hero&&cv){
    setScene(0,true);prev=-1;
    tabs.forEach(function(b,i){b.addEventListener('click',function(){setScene(i,true);});});
    if(R){render();addEventListener('resize',render);}
    else{
      watch(hero,function(v){tLast=0;heroOn(v);});
      var stg=$id('mfStage');stg.addEventListener('mouseenter',function(){setPause(true);});stg.addEventListener('mouseleave',function(){setPause(false);});
      stg.addEventListener('focusin',function(){setPause(true);});stg.addEventListener('focusout',function(){setPause(false);});
      addEventListener('resize',function(){render();});
      var sx=null,sy=null;
      scr.addEventListener('pointerdown',function(e){if(e.pointerType==='touch')return;sx=e.clientX;sy=e.clientY;});
      scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))setScene(cur+(dx<0?1:-1),true);});
      scr.addEventListener('touchstart',function(e){var p=e.touches[0];sx=p.clientX;sy=p.clientY;},{passive:true});
      scr.addEventListener('touchend',function(e){if(sx===null)return;var p=e.changedTouches[0],dx=p.clientX-sx,dy=p.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){setScene(cur+(dx<0?1:-1),true);setPause(false);}},{passive:true});
      rail.addEventListener('keydown',function(e){var k=e.key;if(k==='ArrowRight'||k==='ArrowDown'){setScene(cur+1,true);tabs[cur].focus();e.preventDefault();}else if(k==='ArrowLeft'||k==='ArrowUp'){setScene(cur-1,true);tabs[cur].focus();e.preventDefault();}});
    }
    new MutationObserver(function(){render();}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
    window.__mfScene=function(k,t){setScene(k,true);tS=t||0;prev=-1;fadeT=FADE;setPause(true);render();};
  }

  /* ===== magnetic CTAs + card tilt ===== */
  if(!R&&matchMedia('(hover:hover)').matches){$$('.mf-mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;b.style.transform='translate('+(x*8).toFixed(1)+'px,'+(y*6).toFixed(1)+'px)';});b.addEventListener('mouseleave',function(){b.style.transform='';});});
    $$('.mf-cc').forEach(function(cd){cd.addEventListener('mousemove',function(e){var r=cd.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cd.style.transform='translateY(-4px) perspective(700px) rotateX('+(-y*5).toFixed(2)+'deg) rotateY('+(x*6).toFixed(2)+'deg)';});cd.addEventListener('mouseleave',function(){cd.style.transform='';});});}

  /* ===== reveal-driven sections ===== */
  ['.mf-thr','#mfGt','.mf-vs .tbl-w','#mfFlow'].forEach(function(s){var el=$(s);onceIn(el,function(){el.classList.add('in');});});

  /* ===== methods ladder: climber ===== */
  (function(){var lad=$id('mfLad'),cl=$id('mfClimb');if(!lad)return;var rungs=$$('.mf-rg',lad);var idx=rungs.length-1,acc=0,tl=0;
    function place(){rungs.forEach(function(r,i){r.classList.toggle('hot',i===idx);});var r=rungs[idx];if(cl&&r)cl.style.setProperty('--cy',(r.offsetTop+r.offsetHeight/2-16)+'px');}
    onceIn(lad,function(){lad.classList.add('in');place();});
    if(R){idx=0;place();return;}
    var on=loop(function(now){var dt=tl?Math.min(64,now-tl):16;tl=now;acc+=dt;if(acc>1500){acc=0;idx=idx>0?idx-1:rungs.length-1;place();}});
    watch(lad,function(v){tl=0;on(v);});addEventListener('resize',place);})();

  /* ===== how it works: packet along path ===== */
  (function(){var fl=$id('mfFlow'),svg=$id('mfFsv'),p=$id('mfFp'),po=$id('mfFpo'),dot=$id('mfFd'),ft=$id('mfFt');if(!fl||!p)return;var bt=$$('.mf-fn button',fl);
    var TX=['<b>First factor.</b> The user types a password — or, better, skips it entirely with a passkey or Windows Hello. A password alone never finishes the sign-in.',
      '<b>Microsoft Entra ID</b> confirms the account exists, is enabled and not locked, and checks for leaked-credential and sign-in risk signals (risk needs Entra ID P2).',
      '<b>Conditional Access</b> evaluates every matching policy: user and group, app, device compliance, named location and risk. It decides which authentication strength is required — or blocks.',
      '<b>Second factor.</b> Authenticator push with number matching, a passkey, a FIDO2 key or a certificate — whichever meets the required strength. SMS stays a last-resort fallback.',
      '<b>Token issued</b> with session limits such as sign-in frequency. The decision, factor and location are written to the sign-in log, which XcellHost exports for 180-day retention*.'];
    var L=0,cur=-1,man=-1,tl=0,u=0;
    function lay(){var W=fl.clientWidth,H=fl.clientHeight;if(!W)return;svg.setAttribute('viewBox','0 0 '+W+' '+H);var fr=fl.getBoundingClientRect(),P=bt.map(function(b){var r=$('i',b).getBoundingClientRect();return [r.left+r.width/2-fr.left,r.top+r.height/2-fr.top];});
      var dd='M'+P[0][0].toFixed(1)+' '+P[0][1].toFixed(1);for(var i=1;i<P.length;i++){var a=P[i-1],b=P[i],m=(a[0]+b[0])/2;dd+=' C'+m.toFixed(1)+' '+(a[1]-26).toFixed(1)+' '+m.toFixed(1)+' '+(b[1]-26).toFixed(1)+' '+b[0].toFixed(1)+' '+b[1].toFixed(1);}
      p.setAttribute('d',dd);po.setAttribute('d',dd);try{L=p.getTotalLength();}catch(e){L=0;}po.style.strokeDasharray=L;if(!fl.classList.contains('in'))po.style.strokeDashoffset=L;else po.style.strokeDashoffset=0;}
    function put(f){if(!L)return;var pt=p.getPointAtLength(L*f);dot.style.transform='translate('+pt.x.toFixed(1)+'px,'+pt.y.toFixed(1)+'px)';}
    function show(i){if(i===cur)return;cur=i;bt.forEach(function(b,k){b.classList.toggle('on',k===i);b.classList.toggle('lit',k<i);});if(ft)ft.innerHTML=TX[i];}
    bt.forEach(function(b,i){b.addEventListener('click',function(){man=i;show(i);put(i/4);});});
    lay();show(0);put(0);addEventListener('resize',function(){lay();put(man>=0?man/4:eio(clamp(u,0,1)));});if(d.fonts&&d.fonts.ready)d.fonts.ready.then(lay);
    XH.whenVisible(fl,function(v){if(v){lay();setTimeout(function(){po.style.strokeDashoffset=0;},30);}});
    if(R){show(4);put(1);return;}
    var on=loop(function(now){var dt=tl?Math.min(64,now-tl):16;tl=now;if(man>=0)return;u+=dt/6500;if(u>1.12)u=0;var k=eio(clamp(u,0,1));put(k);var s=Math.min(4,Math.floor(k*4+.08));show(s);});
    watch(fl,function(v){tl=0;on(v);});})();

  /* ===== gantt cursor width ===== */
  (function(){var g=$id('mfGt');if(!g)return;function sz(){var h=$('.mf-gh span:nth-child(2)',g),e=$('.mf-gh span:last-child',g);if(h&&e){g.style.setProperty('--gw',(e.getBoundingClientRect().right-h.getBoundingClientRect().left-4)+'px');var now=$('.mf-now',g);if(now)now.style.left=(h.getBoundingClientRect().left-g.getBoundingClientRect().left)+'px';}}sz();addEventListener('resize',sz);})();

  /* ===== tab underline (use cases) ===== */
  (function(){var tb=$('.mf-tabs');if(!tb)return;var ul=$('.mf-ul',tb);function mv(){var b=$('button.on',tb);if(!b||!ul)return;ul.style.width=b.offsetWidth+'px';ul.style.transform='translateX('+b.offsetLeft+'px)';}
    tb.addEventListener('click',function(){setTimeout(mv,10);});addEventListener('resize',mv);setTimeout(mv,60);if(d.fonts&&d.fonts.ready)d.fonts.ready.then(mv);})();

  /* ======================================================================
     CONFIGURATOR
     ====================================================================== */
  var PR={man:99,roll:24999,hyid:149,p1:528,p2:755,key:4999};
  var cEng=$id('cEng'),cLic=$id('cLic'),cUsers=$id('cUsers'),cKeys=$id('cKeys'),cMan=$id('cMan'),cRoll=$id('cRoll'),cLicF=$id('cLicF');
  function num(el,def){var v=parseInt(el&&el.value,10);return isNaN(v)?def:v;}
  var lines=[];
  function calc(){var eng=segV(cEng)||'entra',lic=segV(cLic)||'have',u=clamp(num(cUsers,1),1,20000),k=clamp(num(cKeys,0),0,5000);
    if(cUsers&&String(u)!==cUsers.value&&d.activeElement!==cUsers)cUsers.value=u;
    var L=[];
    if(eng==='entra'){if(lic==='p1')L.push({key:'mfa-p1',name:'Microsoft Entra ID P1',sub:'per user / month · XcellHost price',price:PR.p1,qty:u,mon:1,c:'#0066FF'});
      if(lic==='p2')L.push({key:'mfa-p2',name:'Microsoft Entra ID P2',sub:'per user / month · XcellHost price',price:PR.p2,qty:u,mon:1,c:'#0066FF'});}
    else L.push({key:'mfa-hyid',name:'Accops HyID MFA',sub:'per user / month · indicative',price:PR.hyid,qty:u,mon:1,c:'#7FB0FF'});
    if(cMan&&cMan.checked)L.push({key:'mfa-managed',name:'Managed MFA by XcellHost',sub:'per user / month · indicative',price:PR.man,qty:u,mon:1,c:'#FF8A00'});
    if(cRoll&&cRoll.checked)L.push({key:'mfa-rollout',name:'MFA rollout',sub:'one-time · per 100 users · indicative',price:PR.roll,qty:Math.ceil(u/100),mon:0,c:'#16a34a'});
    if(k>0)L.push({key:'mfa-fido2',name:'FIDO2 security key',sub:'per key · one-time · indicative',price:PR.key,qty:k,mon:0,c:'#c0392b'});
    var mon=0,sub=0;L.forEach(function(l){l.amt=l.price*l.qty;sub+=l.amt;if(l.mon)mon+=l.amt;});
    return {eng:eng,u:u,L:L,mon:mon,sub:sub,gst:sub*.18,tot:sub*1.18};}
  var lastTot=null;
  function render2(){if(!cEng)return;var r=calc();lines=r.L;if(cLicF)cLicF.hidden=r.eng!=='entra';
    setT('cName',(r.eng==='entra'?'Microsoft Entra MFA':'Accops HyID MFA')+' × '+r.u+' user'+(r.u>1?'s':''));
    var list=$id('cList');if(list)list.innerHTML=r.L.length?r.L.map(function(l){return '<li><i style="background:'+l.c+'"></i><span>'+esc(l.name)+' · '+inr(l.price)+' × '+l.qty+'</span><b>'+inr(l.amt)+'</b></li>';}).join(''):'<li><i style="background:#9fb6de"></i><span>Choose at least one item</span><b>₹0</b></li>';
    var bars=$id('cBars');if(bars){bars.innerHTML=r.L.map(function(l){return '<i style="background:'+l.c+';width:'+(r.sub?(l.amt/r.sub*100):0).toFixed(2)+'%"></i>';}).join('');}
    setT('cMon',inr(r.mon));setT('cSub',inr(r.sub));setT('cGst',inr(r.gst));setT('cTot',inr(r.tot));if(lastTot!==null&&lastTot!==r.tot)bump($id('cTot'));lastTot=r.tot;
    var ad=$id('oAdd');if(ad)ad.disabled=!r.L.length;}
  [cEng,cLic].forEach(function(s){if(s)s.addEventListener('change',render2);});
  $$('#configure .seg button').forEach(function(b){b.addEventListener('click',function(){setTimeout(render2,0);});});
  [cUsers,cKeys,cMan,cRoll].forEach(function(e){if(e){e.addEventListener('input',render2);e.addEventListener('change',render2);}});
  $$('#configure [data-step]').forEach(function(b){b.addEventListener('click',function(){setTimeout(render2,0);});});
  $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-pick');
    if(k==='hyid')setSeg(cEng,'hyid');else if(k==='man'){setSeg(cEng,'entra');if(cMan)cMan.checked=true;}else if(k==='roll'){if(cRoll)cRoll.checked=true;}
    render2();var cf=$id('configure');scrollTo({top:cf.getBoundingClientRect().top+scrollY-110,behavior:R?'auto':'smooth'});if(XH.flash)XH.flash(cf);});});
  var oAdd=$id('oAdd');if(oAdd)oAdd.addEventListener('click',function(){var r=calc();if(!r.L.length)return;r.L.forEach(function(l){XH.cart.add({key:l.key,name:l.name,sub:l.sub,price:l.price,qty:l.qty});});});
  render2();

  /* ===== free trial form ===== */
  XH.onForm('mfa-trial',function(data,f){var nm=data.name?String(data.name).split(' ')[0]:'there';var box=f.parentNode;
    f.outerHTML='<div class="mf-tf done" role="status"><div class="dk" style="width:46px;height:46px;border-radius:50%;background:#16a34a;color:#fff;display:grid;place-items:center;margin-bottom:10px"><svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><h4 style="font:700 19px var(--f-disp);color:var(--ink)">Trial request received, '+esc(nm)+'.</h4><p style="font-size:14px;color:var(--text);margin-top:6px;line-height:1.6">An XcellHost identity engineer will call you within one business day to confirm the free trial* scope and pilot group for <b>'+esc(data.company||'your company')+'</b> ('+esc(data.users||'')+' users).</p></div>';
    XH.toast('Free trial request received');return false;});

  /* ======================================================================
     TOOL 1 · method chooser
     ====================================================================== */
  (function(){var g=$id('kGrp'),ph=$id('kPhone'),us=$id('kUsb'),rg=$id('kReg');if(!g)return;
    function pick(){var grp=segV(g)||'office',P=ph.checked,U=us.checked,G=rg.checked,p,ps,b,bs,why;
      if(grp==='admin'){p=U?'FIDO2 security key':'Certificate-based auth / smart card';ps='AAL3 · phishing-resistant';b=P?'Passkey in Authenticator':'Second FIDO2 key';bs='Phishing-resistant';why='Admins are the first target. Require the "phishing-resistant MFA" strength on every admin sign-in and keep two break-glass accounts on hardware keys.';}
      else if(grp==='front'){p=U?'FIDO2 key (tap to sign in)':'Windows Hello for Business';ps='Phishing-resistant';b=P?'Authenticator push + number matching':'OTP hardware token';bs=P?'AAL2':'AAL2 · no phone needed';why='Shared PCs and no phones on the floor: a key or Windows Hello per user keeps sign-in to seconds. OTP tokens cover staff who cannot carry a key.';}
      else if(grp==='vendor'){p=P?'Authenticator push + number matching':'OTP hardware token';ps='AAL2';b=P?'OTP code in Authenticator':'SMS code (fallback only)';bs=P?'AAL2':'Restricted';why='External users: guest accounts with expiry, MFA enforced by your tenant, and access limited to the apps they need.';}
      else if(grp==='exec'){p=P?'Passkey in Authenticator':'FIDO2 security key (NFC)';ps='Phishing-resistant';b=U?'FIDO2 security key':'Authenticator push + number matching';bs=U?'AAL3 · phishing-resistant':'AAL2';why='Executives and their assistants are high-value targets for invoice fraud. Phishing-resistant sign-in plus country-based Conditional Access.';}
      else{p=P?'Passkey in Authenticator':(U?'FIDO2 security key':'OTP hardware token');ps=P||U?'Phishing-resistant':'AAL2';b=P?'Authenticator push + number matching':'OTP hardware token';bs='AAL2';why='Most staff: a passkey on the phone they already carry, with push and number matching as backup. SMS only for recovery.';}
      if(G){if(!/FIDO2|Certificate|Passkey|Hello/.test(p)){p=U?'FIDO2 security key':'Certificate-based auth / smart card';ps='Phishing-resistant';}why+=' Regulated systems: map the policy to RBI, SEBI CSCRF or sector rules and keep sign-in logs for 180 days.';}
      var cards=$$('.mf-rp',$id('kOut'));cards.forEach(function(cd){cd.classList.add('flip');});
      setTimeout(function(){setT('kP',p);setT('kB',b);var a=$id('kPs'),bb=$id('kBs');a.textContent=ps;a.className=/resistant/.test(ps)?'g':/Restricted/.test(ps)?'o':'';bb.textContent=bs;bb.className=/resistant/.test(bs)?'g':/Restricted/.test(bs)?'o':'';setT('kWhy',why);cards.forEach(function(cd){cd.classList.remove('flip');});},R?0:220);}
    g.addEventListener('change',pick);$$('button',g).forEach(function(b){b.addEventListener('click',function(){setTimeout(pick,0);});});[ph,us,rg].forEach(function(e){e.addEventListener('change',pick);});pick();})();

  /* ======================================================================
     TOOL 2 · phishing-resistance score
     ====================================================================== */
  var SCORE=null;
  (function(){var mix=$id('sMix');if(!mix)return;var rows=$$('.mf-mx',mix),leg=$id('sLeg'),adm=$id('sAdm'),arc=$id('sArc'),val=$id('sVal'),gr=$id('sGr'),stk=$id('sStk'),tips=$id('sTips');
    var COL=['#55617A','#c0392b','#FF8A00','#0066FF','#16a34a','#0B132B'],shown=0,target=0,tw0=0,twF=0,tl=0;
    var twOn=R?function(){}:loop(function(now){var dt=tl?Math.min(64,now-tl):16;tl=now;tw0+=dt;var u=eo(tw0/700);shown=Math.round(lerp(twF,target,u));setT(val,String(shown));if(u>=1)twOn(false);});
    function run(){var raw=rows.map(function(r){return parseInt($('input',r).value,10)||0;}),sum=raw.reduce(function(a,b){return a+b;},0)||1;
      var sh=raw.map(function(v){return v/sum*100;}),sc=0;rows.forEach(function(r,i){sc+=sh[i]*parseFloat(r.getAttribute('data-w'))/100;$('output',r).textContent=Math.round(sh[i])+'%';});
      if(leg.checked)sc-=15;if(!adm.checked)sc-=10;sc=Math.round(clamp(sc,0,100));SCORE=sc;
      arc.style.strokeDashoffset=(100-sc).toFixed(1);arc.style.stroke=sc>=75?'#16a34a':sc>=50?'#0066FF':sc>=30?'#FF8A00':'#c0392b';
      gr.textContent=sc>=75?'Strong':sc>=50?'Good':sc>=30?'Fair':'At risk';
      stk.innerHTML=sh.map(function(v,i){return '<i style="width:'+v.toFixed(2)+'%;background:'+COL[i]+'"></i>';}).join('');
      var T=[];if(sh[0]>0)T.push('Get the '+Math.round(sh[0])+'% without MFA registered — start with security defaults or a registration campaign.');
      if(sh[1]>10)T.push('Move SMS users to Microsoft Authenticator; keep SMS only as a recovery fallback.');
      if(leg.checked)T.push('Block legacy authentication — it lets attackers skip MFA entirely.');
      if(!adm.checked)T.push('Put every admin on a FIDO2 key or passkey with a phishing-resistant authentication strength.');
      if(sh[4]+sh[5]<50)T.push('Aim for at least half of sign-ins on passkeys or keys within two quarters.');
      if(!T.length)T.push('Strong position. Keep reviewing exceptions and break-glass accounts monthly.');
      tips.innerHTML=T.slice(0,3).map(function(s){return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>'+esc(s)+'</span></li>';}).join('');
      if(R){shown=sc;setT(val,String(sc));return;}twF=shown;target=sc;tw0=0;tl=0;twOn(true);}
    rows.forEach(function(r){$('input',r).addEventListener('input',run);});[leg,adm].forEach(function(e){e.addEventListener('change',run);});
    onceIn($id('mfScore'),run);if(!R)setTimeout(function(){if(SCORE===null)run();},50);})();
  window.__mfTest=function(){var r=calc();return {sub:r.sub,tot:r.tot,lines:r.L.map(function(l){return [l.key,l.price,l.qty];}),score:SCORE,primary:($id('kP')||{}).textContent};};
})();

