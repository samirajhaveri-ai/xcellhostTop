
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
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function num(el,def){var v=parseInt(el&&el.value,10);return isNaN(v)?def:v;}
  var MONO='"IBM Plex Mono"',SANS='"IBM Plex Sans"',DISP='Sora';
  var BL='#0066FF',OR='#FF8A00',NV='#0B132B',GR='#16a34a',RD='#c0392b';
  function th(){return dark()?{ink:'#EAF1FF',mut:'#93A4C4',line:'rgba(255,255,255,.16)',soft:'rgba(255,255,255,.07)',surf:'#13224A',bl:'#5C9DFF',ot:'#FFB15C',gr:'#5FE08D',rd:'#ff8a80',key:'#1d3366',bar:'#0B1733'}:{ink:NV,mut:'#55617A',line:'rgba(11,19,43,.15)',soft:'rgba(11,19,43,.05)',surf:'#ffffff',bl:BL,ot:'#C46A00',gr:GR,rd:RD,key:NV,bar:'#EEF3FB'};}

  /* ===== one shared rAF ticker ===== */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function watch(el,on){if(!el)return;var vis=false;XH.whenVisible(el,function(v){vis=v;on(v&&!d.hidden);});d.addEventListener('visibilitychange',function(){on(vis&&!d.hidden);});}

  /* ===== canvas helpers ===== */
  function fitC(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function txt(c,s,x,y,font,col,al){c.font=font;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  var GA=1;function ga(c,a){c.globalAlpha=clamp(a,0,1)*GA;}
  function pill(c,s,x,y,font,bg,fg,al){c.font=font;var w=c.measureText(s).width+14,h=18,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,9);c.fillStyle=bg;c.fill();txt(c,s,x0+7,y+.5,font,fg);return w;}
  function stamp(c,s,x,y,t0,t,col,fs){if(t<t0)return;var u=spring((t-t0)/600),k=lerp(1.7,1,clamp(u,0,1.2));c.save();c.translate(x,y);c.rotate(-.04);c.scale(k,k);ga(c,(t-t0)/180);var f='800 '+fs+'px '+MONO;c.font=f;var w=c.measureText(s).width+18;rr(c,-w/2,-12,w,24,5);c.fillStyle=dark()?'rgba(10,20,44,.96)':'rgba(255,255,255,.97)';c.fill();c.strokeStyle=col;c.lineWidth=2;c.stroke();txt(c,s,0,1,f,col,'center');c.restore();ga(c,1);}
  function tick(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(x-s*.45,y);c.lineTo(x-s*.1,y+s*.35);c.lineTo(x+s*.5,y-s*.35);c.stroke();c.lineCap='butt';}
  function cross(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.4;c.lineCap='round';c.beginPath();c.moveTo(x-s*.4,y-s*.4);c.lineTo(x+s*.4,y+s*.4);c.moveTo(x+s*.4,y-s*.4);c.lineTo(x-s*.4,y+s*.4);c.stroke();c.lineCap='butt';}
  function badge(c,x,y,r,col,kind){c.fillStyle=col;c.beginPath();c.arc(x,y,r,0,TAU);c.fill();if(kind==='x')cross(c,x,y,r*1.3,'#fff');else tick(c,x,y,r*1.3,'#fff');}
  function packet(c,x1,y1,x2,y2,u,col,arc){if(u<=0||u>=1)return;var A=arc===undefined?10:arc;
    for(var k=4;k>0;k--){var e2=eio(clamp(u-k*.035,0,1));ga(c,.12*(5-k));c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e2),lerp(y1,y2,e2)-Math.sin(e2*Math.PI)*A,2.8,0,TAU);c.fill();}
    var e=eio(u);ga(c,1);c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A,4.4,0,TAU);c.fill();c.fillStyle='rgba(255,255,255,.85)';c.beginPath();c.arc(lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A,1.6,0,TAU);c.fill();}
  function dash(c,x1,y1,x2,y2,col,arc){c.strokeStyle=col;c.lineWidth=1.4;c.setLineDash([4,5]);c.beginPath();c.moveTo(x1,y1);c.quadraticCurveTo((x1+x2)/2,(y1+y2)/2-(arc||10)*2,x2,y2);c.stroke();c.setLineDash([]);}
  function card(c,x,y,w,h,T,stroke){rr(c,x,y,w,h,10);c.fillStyle=T.surf;c.fill();c.strokeStyle=stroke||T.line;c.lineWidth=stroke?1.8:1.1;c.stroke();}
  /* browser window: returns content top */
  function browser(c,x,y,w,h,url,T,urlCol,lockCol,f){card(c,x,y,w,h,T);rr(c,x,y,w,26,10);c.fillStyle=T.bar;c.fill();c.fillRect(x,y+16,w,10);
    for(var i=0;i<3;i++){c.fillStyle=['#c0392b','#FF8A00','#16a34a'][i];ga(c,.7);c.beginPath();c.arc(x+11+i*9,y+13,2.6,0,TAU);c.fill();}ga(c,1);
    rr(c,x+38,y+5,w-46,16,8);c.fillStyle=T.surf;c.fill();c.strokeStyle=urlCol||T.line;c.lineWidth=urlCol?1.4:1;c.stroke();
    var lx=x+47,ly=y+13;c.strokeStyle=lockCol||T.gr;c.lineWidth=1.3;c.beginPath();c.arc(lx,ly-1.5,2.4,Math.PI,0);c.stroke();c.fillStyle=lockCol||T.gr;c.fillRect(lx-3.2,ly-1.5,6.4,5);
    c.save();rr(c,x+38,y+5,w-46,16,8);c.clip();txt(c,url,x+55,y+13.5,'600 '+f+'px '+MONO,urlCol||T.ink);c.restore();return y+34;}
  /* horizontal key: connector on the left */
  function key(c,x,y,s,T,o){o=o||{};var bw=s*1.2,bh=s*.5,x0=x-bw/2,y0=y-bh/2;
    c.fillStyle='#9aa7bf';rr(c,x0-s*.2,y-s*.12,s*.24,s*.24,2);c.fill();
    rr(c,x0,y0,bw,bh,bh*.32);c.fillStyle=o.col||T.key;c.fill();c.strokeStyle=dark()?'rgba(127,176,255,.45)':'rgba(11,19,43,.25)';c.lineWidth=1.2;c.stroke();
    c.strokeStyle='rgba(255,255,255,.55)';c.lineWidth=2;c.beginPath();c.arc(x0+bw-bh*.36,y,bh*.16,0,TAU);c.stroke();
    var px=x0+bw*.42,pr=bh*.3;
    if(o.bio){c.fillStyle='rgba(255,255,255,.1)';rr(c,px-pr*1.25,y-pr*1.25,pr*2.5,pr*2.5,6);c.fill();
      var prog=o.scan===undefined?1:o.scan;c.strokeStyle='rgba(127,176,255,.3)';c.lineWidth=1.4;for(var r0=1;r0<=4;r0++){c.beginPath();c.arc(px,y+pr*.25,pr*.28*r0,Math.PI*1.05,Math.PI*1.95);c.stroke();}c.strokeStyle=o.match?GR:'#7FB0FF';for(var r=1;r<=4;r++){var rr2=pr*.28*r;c.beginPath();c.arc(px,y+pr*.25,rr2,Math.PI*1.05,Math.PI*1.05+Math.PI*.9*clamp(prog*1.4-(r-1)*.15,0,1));c.stroke();}
      if(o.scan>0&&o.scan<1){var sy=lerp(y-pr*1.1,y+pr*1.1,o.scan);c.strokeStyle=GR;c.lineWidth=2;c.beginPath();c.moveTo(px-pr*1.15,sy);c.lineTo(px+pr*1.15,sy);c.stroke();}}
    else if(o.lcd){c.fillStyle='#0a1430';rr(c,x0+bw*.12,y0+bh*.18,bw*.62,bh*.64,4);c.fill();txt(c,o.lcd,x0+bw*.43,y+1,'800 '+Math.round(s*.17)+'px '+MONO,o.lcdCol||'#7FB0FF','center');}
    else if(o.pki){txt(c,o.pki,x0+bw*.4,y,'700 '+Math.round(s*.1)+'px '+MONO,'#cfe0ff','center');c.fillStyle=o.led||GR;c.beginPath();c.arc(x0+bw*.82,y-bh*.22,2.6,0,TAU);c.fill();}
    else{var g=o.glow||0;if(g>0){ga(c,.5*g);c.fillStyle=OR;c.beginPath();c.arc(px,y,pr*(1.4+g*.9),0,TAU);c.fill();ga(c,1);}
      c.fillStyle=OR;c.beginPath();c.arc(px,y,pr,0,TAU);c.fill();c.strokeStyle='rgba(255,255,255,.6)';c.lineWidth=1;c.beginPath();c.arc(px,y,pr*.6,0,TAU);c.stroke();}
    return {px:px,py:y,left:x0-s*.2,right:x0+bw,top:y0,bot:y0+bh};}
  function finger(c,x,y,u,T){if(u<=0)return;var yy=lerp(y-60,y-6,eio(u<.5?u*2:1-(u-.5)*2*0+1));ga(c,u<.85?1:(1-u)/.15);c.fillStyle=dark()?'rgba(255,214,180,.85)':'rgba(246,196,160,.95)';rr(c,x-9,yy-34,18,38,9);c.fill();c.strokeStyle=dark()?'rgba(255,255,255,.4)':'rgba(11,19,43,.25)';c.lineWidth=1;c.stroke();ga(c,1);}
  function fingerAt(c,x,y,t,t0,t1,T){if(t<t0||t>t1+300)return;var u=seg(t0,t0+350,t),out=seg(t1,t1+300,t),yy=lerp(y-58,y-4,eo(u)-eo(out));ga(c,1-out);c.fillStyle=dark()?'rgba(255,214,180,.88)':'rgba(240,190,152,.98)';rr(c,x-9,yy-36,18,40,9);c.fill();c.strokeStyle=dark()?'rgba(255,255,255,.4)':'rgba(11,19,43,.25)';c.lineWidth=1;c.stroke();ga(c,1);}
  function field(c,x,y,w,label,val,T,f,on,col){txt(c,label,x,y-9,'600 '+(f-1)+'px '+SANS,T.mut);rr(c,x,y-2,w,18,5);c.fillStyle=T.soft;c.fill();c.strokeStyle=on?(col||BL):T.line;c.lineWidth=on?1.6:1;c.stroke();if(val)txt(c,val,x+7,y+7,'600 '+f+'px '+MONO,T.ink);}

  /* ======================================================================
     HERO · five token scenes on one canvas (sample users)
     ====================================================================== */
  var DUR=5500,FADE=480;
  var SC=[
    {cap:'Touch to sign in · Microsoft 365',ph:'FIDO2',k:'FIDO2 security key',ml:'Phishing resistance',
     lg:[[500,'challenge sent by site',''],[1700,'touch detected on key','w'],[2300,'signed for the real origin','g'],[3100,'signed in · 0 codes typed','g']]},
    {cap:'Look-alike page gets nothing',ph:'Phish test',k:'Same key · fake site',ml:'Phishing resistance',
     lg:[[500,'micros0ft-login.co asks key','r'],[1500,'origin ≠ registered site','r'],[2300,'no signature released','g'],[3200,'nothing to replay','g']]},
    {cap:'Fingerprint for admin step-up',ph:'Admin',k:'Biometric FIDO2 key',ml:'Phishing resistance',
     lg:[[400,'policy: phishing-resistant MFA',''],[1700,'fingerprint read on key','w'],[2600,'match · print stays on key','g'],[3300,'admin portal opened','g']]},
    {cap:'OTP token for a legacy VPN',ph:'OTP',k:'OATH TOTP token',ml:'Phishing resistance',
     lg:[[400,'VPN asks for a code',''],[1300,'6 digits typed from token','w'],[2900,'code accepted · connected','g'],[4300,'code rolls over · old expires','w']]},
    {cap:'DSC signing on a FIPS 140-3 token',ph:'DSC',k:'PKI USB token · Class 3 DSC',ml:'Key protection',
     lg:[[600,'return hashed · SHA-256',''],[1200,'token PIN entered','w'],[2400,'hash signed on the token','g'],[3800,'filed · digitally signed','g']]}
  ];
  var hero=$id('tkHero'),cv=$id('tkCv'),scr=$id('tkScr'),dotsEl=$id('tkDots'),con=$id('tkCon');
  var dots=dotsEl?$$('button',dotsEl):[],logEl=$id('tkLog'),met=$id('tkMet'),metV=$id('tkMetV'),sv=$id('tkSv');

  /* scene 0 · FIDO2 touch to sign in */
  function s0(c,w,h,t){var T=th(),nar=w<340,f=nar?8.5:9.5,bx=10,by=46,bw=w*(nar?.6:.58),bh=h-58;
    var top=browser(c,bx,by,bw,bh,'login.microsoftonline.com',T,null,null,nar?8:9);
    var cx=bx+12;txt(c,'Sign in',cx,top+12,'800 '+(nar?13:15)+'px '+DISP,T.ink);
    field(c,cx,top+40,bw-24,'Account','priya@company.in',T,f,false);
    var kx=w*(nar?.82:.81),ky=h*.55,ks=nar?60:86;
    var g=t>1650&&t<2400?1-seg(1650,2400,t):0;
    var K=key(c,kx,ky,ks,T,{glow:g});
    fingerAt(c,K.px,K.top,t,1150,2050,T);
    dash(c,bx+bw,ky-6,K.left,ky-6,T.line,6);
    packet(c,bx+bw,ky-6,K.left,ky-6,seg(500,1250,t),T.bl,12);
    packet(c,K.left,ky-6,bx+bw,ky-6,seg(2250,3000,t),OR,12);
    if(t>500&&t<1250)pill(c,'challenge',(bx+bw+K.left)/2,ky-40,'700 8.5px '+MONO,BL,'#fff','center');
    if(t>2250&&t<3100)pill(c,nar?'signed':'signed · this site',(bx+bw+K.left)/2,ky-40,'700 8.5px '+MONO,OR,'#fff','center');
    var py=top+74;
    if(t<3000){var pu=eo(seg(600,1000,t));ga(c,pu);rr(c,cx,py,bw-24,36,8);c.fillStyle=dark()?'rgba(92,157,255,.12)':'rgba(0,102,255,.07)';c.fill();
      var bl=.55+.45*Math.sin(t/180);c.fillStyle=OR;ga(c,pu*(t>1650?1:bl));c.beginPath();c.arc(cx+14,py+18,5,0,TAU);c.fill();ga(c,pu);
      txt(c,t<1650?(nar?'Touch your key':'Insert & touch your key'):(nar?'Verifying…':'Verifying with the key…'),cx+26,py+18,'700 '+f+'px '+SANS,T.ink);ga(c,1);}
    else{var su=eo(seg(3000,3400,t));ga(c,su);badge(c,cx+12,py+16,8,GR);txt(c,nar?'Signed in':'Signed in · welcome, Priya',cx+26,py+16,'800 '+(f+1)+'px '+DISP,T.gr);
      var ap=['Outlook','Teams','Files','Admin'];for(var i=0;i<(nar?3:4);i++){var au=eo(seg(3300+i*120,3650+i*120,t)),tw=(bw-24-(nar?2:3)*6)/(nar?3:4);ga(c,au);rr(c,cx+i*(tw+6),py+34+(1-au)*8,tw,24,6);c.fillStyle=i%2?OR:BL;c.fill();txt(c,ap[i],cx+i*(tw+6)+tw/2,py+46+(1-au)*8,'700 '+(nar?8:8.5)+'px '+SANS,'#fff','center');}ga(c,1);}
    stamp(c,'0 CODES TYPED',kx,ky+ks*.62,3800,t,T.gr,nar?9.5:10.5);
    return {v:t<500?'Waiting for sign-in…':t<1650?'Touch the key':t<2250?'Checking origin…':t<3000?'Signed for this site':'Signed in',m:.96,mv:'High · origin-bound',mc:'g'};}

  /* scene 1 · phishing page blocked */
  function s1(c,w,h,t){var T=th(),nar=w<340,f=nar?8.5:9.5,bx=10,by=46,bw=w*(nar?.6:.58),bh=h-58;
    var bad=t>1500,top=browser(c,bx,by,bw,bh,nar?'micros0ft-login.co':'micros0ft-login.co/sign-in',T,bad?T.rd:null,bad?T.rd:T.mut,nar?8:9);
    var cx=bx+12;txt(c,'Sign in',cx,top+12,'800 '+(nar?13:15)+'px '+DISP,T.ink);
    field(c,cx,top+40,bw-24,'Account','priya@company.in',T,f,false);
    if(bad){ga(c,eo(seg(1500,1900,t)));c.font='800 '+(nar?13:15)+'px '+DISP;pill(c,'LOOK-ALIKE',cx+c.measureText('Sign in').width+10,top+12,'800 8px '+MONO,RD,'#fff');ga(c,1);}
    var kx=w*(nar?.82:.81),ky=h*.47,ks=nar?60:86,g=t>1000&&t<1500?1-seg(1000,1500,t):0;
    var K=key(c,kx,ky,ks,T,{glow:g});fingerAt(c,K.px,K.top,t,600,1300,T);
    dash(c,bx+bw,ky-6,K.left,ky-6,T.line,6);
    packet(c,bx+bw,ky-6,K.left,ky-6,seg(400,1150,t),T.rd,12);
    if(t>400&&t<2050)pill(c,'challenge',(bx+bw+K.left)/2,ky-40,'700 8.5px '+MONO,RD,'#fff','center');
    // origin check rows under key
    var rx=nar?w*.64:w*.64,ry=ky+ks*.5,rw=w-rx-8;
    if(t>1300){var u1=eo(seg(1300,1650,t)),u2=eo(seg(1650,2000,t));
      ga(c,u1);rr(c,rx,ry,rw,22,6);c.fillStyle=T.soft;c.fill();badge(c,rx+11,ry+11,6,GR);txt(c,nar?'registered':'registered site',rx+22,ry+11,'600 '+(nar?7.5:8.5)+'px '+MONO,T.ink);
      ga(c,u2);rr(c,rx,ry+27,rw,22,6);c.fillStyle=dark()?'rgba(255,138,128,.14)':'rgba(192,57,43,.08)';c.fill();badge(c,rx+11,ry+38,6,RD,'x');txt(c,nar?'asking site':'asking site ≠',rx+22,ry+38,'600 '+(nar?7.5:8.5)+'px '+MONO,T.rd);ga(c,1);}
    if(t>2100){var mx=(bx+bw+K.left)/2;ga(c,eo(seg(2100,2400,t)));cross(c,mx,ky-6,16,T.rd);pill(c,nar?'NO SIG':'NO SIGNATURE',mx,ky-40,'800 8.5px '+MONO,GR,'#fff','center');ga(c,1);}
    var py=top+74;ga(c,1);rr(c,cx,py,bw-24,36,8);c.fillStyle=t>2300?(dark()?'rgba(255,138,128,.12)':'rgba(192,57,43,.06)'):T.soft;c.fill();
    txt(c,t<2300?(nar?'Waiting for key…':'Waiting for your key…'):(nar?'Key refused':'Key refused · nothing sent'),cx+12,py+18,'700 '+f+'px '+SANS,t<2300?T.mut:T.rd);
    if(t>3000){var au=eo(seg(3000,3400,t));ga(c,au);txt(c,nar?'attacker: nothing to replay':'attacker relay gets nothing to replay',cx,py+52,'600 '+(nar?7.5:8.5)+'px '+MONO,T.mut);ga(c,1);}
    stamp(c,'PHISHING BLOCKED',bx+bw/2,by+bh-20,3600,t,T.gr,nar?9.5:10.5);
    return {v:t<1300?'Sign-in requested':t<2100?'Origin does not match':t<3200?'No signature released':'Phishing blocked',m:.96,mv:'High · fake site refused',mc:'g'};}

  /* scene 2 · biometric key + phishing-resistant policy */
  function s2(c,w,h,t){var T=th(),nar=w<340,f=nar?8:9,px=10,py=46,pw=w*(nar?.6:.58),ph=h-58,ok=t>3000;
    card(c,px,py,pw,ph,T,ok?GR:null);txt(c,'CONDITIONAL ACCESS',px+10,py+14,'800 '+(nar?7.5:8.5)+'px '+MONO,T.mut);
    txt(c,nar?'Admin portal':'Admins · admin portals',px+10,py+33,'800 '+(nar?11:12.5)+'px '+DISP,T.ink);
    var rows=[['Users','Global admins'],['Apps','Admin portals'],['Grant',nar?'Phish-resistant MFA':'Phishing-resistant MFA']];
    rows.forEach(function(r,i){var y=py+52+i*(nar?26:28),u=eo(seg(300+i*350,650+i*350,t));ga(c,.3+.7*u);rr(c,px+10,y,pw-20,22,6);c.fillStyle=i===2&&t>950?(dark()?'rgba(92,157,255,.16)':'rgba(0,102,255,.08)'):T.soft;c.fill();
      txt(c,r[0],px+18,y+11,'700 '+f+'px '+MONO,T.mut);txt(c,r[1],px+(nar?60:66),y+11,'700 '+(f+.5)+'px '+SANS,i===2?T.bl:T.ink);ga(c,1);});
    var ry=py+52+3*(nar?26:28)+4;
    if(ok){var u=eo(seg(3000,3400,t));ga(c,u);badge(c,px+20,ry+10,7,GR);txt(c,nar?'Access granted':'Access granted · strength met',px+32,ry+10,'800 '+(f+1.5)+'px '+DISP,T.gr);ga(c,1);}
    else{txt(c,t<1500?'Waiting for authentication…':'Reading fingerprint…',px+10,ry+10,'600 '+f+'px '+SANS,T.mut);}
    var kx=w*(nar?.82:.81),ky=h*.5,ks=nar?62:88,scan=seg(1700,2600,t);
    var K=key(c,kx,ky,ks,T,{bio:true,scan:t<1700?0:scan,match:t>2600});
    fingerAt(c,K.px,K.top,t,1450,2600,T);
    dash(c,px+pw,ky,K.left,ky,T.line,6);
    packet(c,K.left,ky,px+pw,ky,seg(2650,3150,t),OR,12);
    if(t>2600){ga(c,eo(seg(2600,2900,t)));pill(c,nar?'match':'match · on key',kx,ky+ks*.52,'800 8.5px '+MONO,GR,'#fff','center');ga(c,1);}
    if(t>1700&&t<2600){txt(c,'scanning',kx,ky+ks*.52,'700 8.5px '+MONO,T.mut,'center');}
    stamp(c,nar?'AAL3-CAPABLE':'PHISHING-RESISTANT',kx-(nar?6:4),ky-ks*.62,3700,t,T.gr,nar?9:10);
    return {v:t<1500?'Policy requires phishing-resistant MFA':t<2600?'Reading fingerprint on key':t<3000?'Fingerprint matched':'Admin portal opened',m:1,mv:'Highest · bio + hardware',mc:'g'};}

  /* scene 3 · OTP token for a VPN */
  function s3(c,w,h,t){var T=th(),nar=w<340,f=nar?8.5:9.5,vx=10,vy=46,vw=w*(nar?.6:.58),vh=h-58;
    var con2=t>2900;card(c,vx,vy,vw,vh,T,con2?GR:null);
    txt(c,'REMOTE ACCESS VPN',vx+10,vy+14,'800 '+(nar?7.5:8.5)+'px '+MONO,T.mut);
    var fx=vx+10,fw=vw-20;field(c,fx,vy+40,fw,'Username','r.mehta',T,f,false);field(c,fx,vy+74,fw,'Password','••••••••',T,f,false);
    var code='482913',typed=Math.floor(clamp((t-1300)/200,0,6)),shown=code.slice(0,typed);
    field(c,fx,vy+108,fw,'One-time code',shown.length>3?shown.slice(0,3)+' '+shown.slice(3):shown,T,f,t>1100&&t<2900,OR);
    if(t>1100&&t<2500&&typed<6){var cxp=fx+7+c.measureText(shown).width+(typed>3?6:0);if(Math.floor(t/300)%2){c.fillStyle=T.ink;c.fillRect(fx+8+typed*(f*.62)+(typed>3?f*.6:0),vy+109,1.4,12);}}
    var by=vy+134;rr(c,fx,by,fw,22,7);var pr=t>2600&&t<2900;c.fillStyle=con2?GR:pr?'#0052cc':BL;c.fill();
    txt(c,con2?'Connected':'Connect',fx+fw/2,by+11,'800 '+f+'px '+DISP,'#fff','center');if(con2)tick(c,fx+fw/2-(nar?36:40),by+11,9,'#fff');
    var kx=w*(nar?.82:.81),ky=h*.5,ks=nar?62:88,roll=t>4300,cd=roll?'107 526':'482 913';
    var K=key(c,kx,ky,ks,T,{lcd:cd,lcdCol:roll?'#5FE08D':'#7FB0FF',col:NV});
    // countdown ring
    var rr0=nar?13:15,rx=kx,ry2=ky+ks*.62,u=roll?seg(4300,5200,t)*.1:seg(0,4300,t);
    c.lineWidth=3;c.strokeStyle=T.line;c.beginPath();c.arc(rx,ry2,rr0,0,TAU);c.stroke();
    c.strokeStyle=roll?T.gr:(u>.8?T.rd:OR);c.lineCap='round';c.beginPath();c.arc(rx,ry2,rr0,-Math.PI/2,-Math.PI/2+TAU*(1-u));c.stroke();c.lineCap='butt';
    txt(c,String(Math.max(1,Math.round(30*(1-u))))+'s',rx,ry2+1,'700 '+(nar?8:9)+'px '+MONO,T.ink,'center');
    if(t>1300&&t<2500){var du=((t-1300)%400)/400;packet(c,K.left,ky,vx+vw,vy+114,du,OR,14);}
    if(roll){ga(c,eo(seg(4300,4600,t)));pill(c,'482 913 expired',kx,ky-ks*.5,'700 8px '+MONO,RD,'#fff','center');ga(c,1);}
    stamp(c,'ACCEPTED',vx+vw/2,vy+vh-24,3100,t,T.gr,nar?9.5:10.5);
    return {v:t<1300?'VPN asks for a code':t<2600?'Typing the 6-digit code':t<4300?'Code accepted · connected':'New code every 30 s',m:.5,mv:'Medium · code can be relayed',mc:'o'};}

  /* scene 4 · DSC signing on a PKI token */
  function s4(c,w,h,t){var T=th(),nar=w<340,f=nar?8:9,dx=10,dy=46,dw=w*(nar?.56:.52),dh=h-58,signed=t>3600;
    card(c,dx,dy,dw,dh,T,signed?GR:null);txt(c,'GSTR-3B',dx+10,dy+16,'800 '+(nar?11:12.5)+'px '+DISP,T.ink);txt(c,'sample return',dx+10,dy+31,'600 '+(f-.5)+'px '+MONO,T.mut);
    for(var i=0;i<5;i++){var lw=(dw-20)*(i%2?.62:.86);rr(c,dx+10,dy+44+i*13,lw,6,3);c.fillStyle=T.soft;c.fill();}
    var hy=dy+44+5*13+8;if(t>600){var hu=eo(seg(600,1000,t));ga(c,hu);rr(c,dx+10,hy,dw-20,20,6);c.fillStyle=dark()?'rgba(92,157,255,.14)':'rgba(0,102,255,.07)';c.fill();txt(c,nar?'SHA-256 9f2c…a71e':'SHA-256 · 9f2c…a71e',dx+16,hy+10,'700 '+f+'px '+MONO,T.bl);ga(c,1);}
    var sy=hy+28;if(signed){var su=eo(seg(3600,4000,t));ga(c,su);badge(c,dx+18,sy+10,7,GR);txt(c,nar?'Signed · DSC':'Signed · Class 3 DSC',dx+30,sy+10,'800 '+(f+1.5)+'px '+DISP,T.gr);ga(c,1);}
    var kx=w*(nar?.8:.79),ky=h*.42,ks=nar?64:90;
    var K=key(c,kx,ky,ks,T,{pki:nar?'DSC':'CLASS 3 DSC',led:t>2300&&t<3000&&Math.floor(t/120)%2?OR:GR,col:NV});
    txt(c,'FIPS 140-3',kx,K.bot+11,'700 '+(nar?7.5:8.5)+'px '+MONO,T.mut,'center');
    // PIN pad
    var pinY=K.bot+30,pn=Math.floor(clamp((t-1200)/180,0,6)),pw=nar?78:96;rr(c,kx-pw/2,pinY-11,pw,22,7);c.fillStyle=T.soft;c.fill();c.strokeStyle=t>1200&&t<2400?BL:T.line;c.lineWidth=1.2;c.stroke();
    for(var k=0;k<6;k++){c.fillStyle=k<pn?T.ink:T.line;c.beginPath();c.arc(kx-pw/2+12+k*((pw-24)/5),pinY,3,0,TAU);c.fill();}
    txt(c,'PIN',kx-pw/2-6,pinY,'700 8px '+MONO,T.mut,'right');
    dash(c,dx+dw,ky,K.left,ky,T.line,6);
    packet(c,dx+dw,hy+10,K.left,ky,seg(2300,2900,t),T.bl,14);
    packet(c,K.left,ky,dx+dw,sy+10,seg(3000,3600,t),OR,14);
    if(t>2900){ga(c,eo(seg(2900,3200,t)));pill(c,nar?'key stays':'private key stays here',kx,K.top-14,'800 8px '+MONO,NV,'#fff','center');ga(c,1);}
    stamp(c,'DIGITALLY SIGNED',dx+dw/2,dy+dh-18,4000,t,T.gr,nar?9:10);
    return {v:t<1200?'Return ready to sign':t<2300?'Entering token PIN':t<3600?'Signing on the token':'Filed · digitally signed',m:.94,mv:'Non-exportable key',mc:'g'};}
  var DRAW=[s0,s1,s2,s3,s4];

  var cur=0,prev=-1,tS=0,tLast=0,fadeT=FADE,paused=false,lastV='',lastM=-1;
  function buildLog(k){if(!logEl)return;logEl.innerHTML=SC[k].lg.map(function(e){return '<li class="'+e[2]+'">'+esc(e[1])+'</li>';}).join('');}
  function logAt(t){if(!logEl)return;var lg=SC[cur].lg,li=logEl.children;for(var i=0;i<lg.length;i++){var on=R||t>=lg[i][0];if(li[i]&&li[i].classList.contains('in')!==on)li[i].classList.toggle('in',on);}}
  function setScene(k,user){k=(k+5)%5;if(k===cur&&!user)return;prev=cur;cur=k;tS=0;fadeT=R?FADE:0;
    dots.forEach(function(b,i){var on=i===cur;b.classList.toggle('on',on);b.classList.toggle('done',i<cur);b.setAttribute('aria-selected',on);b.style.setProperty('--p','0');});
    var S=SC[cur];setT('tkCapN','0'+(cur+1));setT('tkCapT',S.cap);setT('tkPh',S.ph);setT('tkSk',S.k);setT('tkMetL',S.ml);buildLog(cur);lastV='';lastM=-1;if(R)render();}
  function side(g){if(g.v!==lastV){var was=lastV;setT(sv,g.v);if(was!=='')bump(sv);lastV=g.v;}
    if(g.m!==lastM&&met){met.style.width=Math.round(g.m*100)+'%';met.style.background=g.mc==='o'?'#FF8A00':'#16a34a';metV.style.color=g.mc==='o'?'#FFB15C':'#5FE08D';setT(metV,g.mv);lastM=g.m;}}
  function render(){var f=cv&&fitC(cv);if(!f)return;var c=f.c,w=f.w,h=f.h;c.clearRect(0,0,w,h);
    var t=R?5200:tS,fading=prev>=0&&fadeT<FADE,g;
    var k=clamp(h/262,1,1.18);c.save();c.scale(k,k);w=w/k;h=h/k;
    if(fading){var u=fadeT/FADE;GA=1-eo(Math.min(1,u*1.4));c.globalAlpha=GA;c.save();c.translate(0,-u*10);DRAW[prev](c,w,h,5200);c.restore();GA=eo(u);c.globalAlpha=GA;c.save();c.translate(0,(1-u)*10);g=DRAW[cur](c,w,h,t);c.restore();GA=1;c.globalAlpha=1;}
    else{GA=1;g=DRAW[cur](c,w,h,t);}
    c.restore();
    side(g);logAt(t);}
  var heroOn=loop(function(now){var dt=tLast?Math.min(64,now-tLast):16;tLast=now;
    if(!paused){tS+=dt;if(dots[cur])dots[cur].style.setProperty('--p',Math.min(1,tS/DUR).toFixed(3));if(tS>=DUR)setScene(cur+1);}
    if(fadeT<FADE)fadeT+=dt;
    if(!paused||fadeT<FADE+20)render();});
  function setPause(p){paused=p;tLast=0;if(con)con.classList.toggle('paused',p);}
  if(hero&&cv){
    setScene(0,true);prev=-1;
    dots.forEach(function(b,i){b.addEventListener('click',function(){setScene(i,true);});});
    if(R){render();addEventListener('resize',render);}
    else{
      watch(hero,function(v){tLast=0;heroOn(v);});
      var stg=$id('tkStage');stg.addEventListener('mouseenter',function(){setPause(true);});stg.addEventListener('mouseleave',function(){setPause(false);});
      stg.addEventListener('focusin',function(e){var fv=false;try{fv=e.target.matches(':focus-visible');}catch(x){}if(fv)setPause(true);});stg.addEventListener('focusout',function(){setPause(false);});
      addEventListener('resize',function(){render();});
      var sx=null,sy=null;
      scr.addEventListener('pointerdown',function(e){if(e.pointerType==='touch')return;sx=e.clientX;sy=e.clientY;});
      scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))setScene(cur+(dx<0?1:-1),true);});
      scr.addEventListener('touchstart',function(e){var p=e.touches[0];sx=p.clientX;sy=p.clientY;},{passive:true});
      scr.addEventListener('touchend',function(e){if(sx===null)return;var p=e.changedTouches[0],dx=p.clientX-sx,dy=p.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){setScene(cur+(dx<0?1:-1),true);setPause(false);}},{passive:true});
      dotsEl.addEventListener('keydown',function(e){var k=e.key;if(k==='ArrowRight'){setScene(cur+1,true);dots[cur].focus();e.preventDefault();}else if(k==='ArrowLeft'){setScene(cur-1,true);dots[cur].focus();e.preventDefault();}});
    }
    new MutationObserver(function(){render();}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
  }

  /* ===== magnetic CTAs + card tilt ===== */
  if(!R&&matchMedia('(hover:hover)').matches){$$('.tk-mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;b.style.transform='translate('+(x*8).toFixed(1)+'px,'+(y*6).toFixed(1)+'px)';});b.addEventListener('mouseleave',function(){b.style.transform='';});});
    $$('.tk-fc,.tk-pc').forEach(function(cd){cd.addEventListener('mousemove',function(e){var r=cd.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cd.style.transform='translateY(-4px) perspective(700px) rotateX('+(-y*5).toFixed(2)+'deg) rotateY('+(x*6).toFixed(2)+'deg)';});cd.addEventListener('mouseleave',function(){cd.style.transform='';});});}

  /* ===== draw-on-view illustrations ===== */
  ['tkTl','tkSteps'].forEach(function(id){var el=$id(id);if(!el)return;if(R){el.classList.add('in');return;}XH.whenVisible(el,function(v){if(v)el.classList.add('in');});});

  /* ===== challenge-response packets (illustration) ===== */
  (function(){var svg=$id('tkCr'),g=$id('tkCrPk'),tch=$id('tkTch');if(!svg||!g)return;var NS='http://www.w3.org/2000/svg';
    var P=[1,2,3,4].map(function(i){return $id('tkP'+i);}),L=P.map(function(p){return p.getTotalLength();}),cols=['#0066FF','#0066FF','#FF8A00','#16a34a'],dts=[];
    for(var i=0;i<4;i++){var cc=d.createElementNS(NS,'circle');cc.setAttribute('r','7');cc.setAttribute('fill',cols[i]);cc.setAttribute('opacity','0');g.appendChild(cc);dts.push(cc);}
    var tc=tch.querySelector('circle');
    function draw(now){var t=now%6600,win=[[0,1100],[1100,2200],[3100,4200],[4200,5300]];
      for(var i=0;i<4;i++){var u=seg(win[i][0],win[i][1],t),on=u>0&&u<1,p=P[i].getPointAtLength(L[i]*eio(u));dts[i].setAttribute('cx',p.x.toFixed(1));dts[i].setAttribute('cy',p.y.toFixed(1));dts[i].setAttribute('opacity',on?'1':'0');}
      var tu=seg(2200,3100,t),pu=tu>0&&tu<1?Math.sin(tu*Math.PI):0;tc.setAttribute('r',(12+pu*8).toFixed(1));tc.style.opacity=(.25+.65*pu).toFixed(2);}
    if(R){draw(2650);return;}var on=loop(draw);watch(svg,on);})();

  /* ======================================================================
     CONFIGURATOR (#configure)
     ====================================================================== */
  var PR={q1:4999,q2:7999,q3:1999,q4:1499},DEP=24999;
  var NM={q1:'FIDO2 security key',q2:'FIDO2 NFC / biometric key',q3:'OTP hardware token (OATH TOTP)',q4:'PKI USB token · FIPS 140-3 (DSC / code signing)'};
  var CL={q1:'#0066FF',q2:'#7FB0FF',q3:'#FF8A00',q4:'#16a34a'};
  var Q={q1:$id('kQ1'),q2:$id('kQ2'),q3:$id('kQ3'),q4:$id('kQ4')},kDep=$id('kDep');
  function calc(){var items=[],units=0;Object.keys(Q).forEach(function(k){var q=clamp(num(Q[k],0),0,5000);units+=q;if(q>0)items.push({key:'tk-'+k,name:NM[k],sub:'per unit · indicative*',price:PR[k],qty:q,col:CL[k],lab:NM[k].split(' (')[0].split(' ·')[0]+' × '+q});});
    if(segV(kDep)==='1')items.push({key:'tk-deploy',name:'Token deployment & enrolment by XcellHost',sub:'one-time · indicative*',price:DEP,qty:1,col:'#FFB15C',lab:'Deployment & enrolment'});
    var sub=items.reduce(function(a,i){return a+i.price*i.qty;},0),gst=Math.round(sub*.18);return {items:items,units:units,sub:sub,gst:gst,tot:sub+gst,dep:segV(kDep)==='1'};}
  function renderCfg(){if(!Q.q1)return;var s=calc();
    setT('kName',s.units+' token'+(s.units===1?'':'s')+(s.dep?' + deployment':''));
    $id('kList').innerHTML=s.items.map(function(i){return '<li><i style="background:'+i.col+'"></i><span>'+esc(i.lab)+'</span><b>'+inr(i.price*i.qty)+'</b></li>';}).join('')||'<li><i></i><span>Add at least one token</span><b>₹0</b></li>';
    $id('kBars').innerHTML=s.items.map(function(i){return '<i style="width:'+(s.sub?(100*i.price*i.qty/s.sub):0).toFixed(1)+'%;background:'+i.col+'"></i>';}).join('');
    var a=$id('kTot'),pv=a.textContent;setT('kSub',inr(s.sub));setT('kGst',inr(s.gst));setT(a,inr(s.tot));if(pv!==a.textContent)bump(a);
    $id('kVol').hidden=s.units<100;}
  if(Q.q1){Object.keys(Q).forEach(function(k){Q[k].addEventListener('input',renderCfg);Q[k].addEventListener('change',renderCfg);});kDep.addEventListener('change',renderCfg);kDep.addEventListener('click',function(){setTimeout(renderCfg,0);});
    $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-pick');if(num(Q[k],0)<1)Q[k].value=k==='q2'?2:10;renderCfg();goCfg();});});
    $id('oAdd').addEventListener('click',function(){var s=calc();if(!s.units){XH.toast('Add at least one token first.');return;}s.items.forEach(function(i){XH.cart.add({key:i.key,name:i.name,sub:i.sub,price:i.price,qty:i.qty});});});
    $id('kQuote').addEventListener('click',function(){var s=calc();try{var ta=$('#xhCallback textarea');if(ta)ta.value='Security hardware token estimate: '+s.items.map(function(i){return i.lab;}).join(' · ')+' · subtotal '+inr(s.sub)+' excl. GST';}catch(e){}});
    renderCfg();}
  function goCfg(){var cf=$id('configure');scrollTo({top:cf.getBoundingClientRect().top+scrollY-110,behavior:R?'auto':'smooth'});XH.flash&&XH.flash(cf);}

  /* ======================================================================
     FREE TRIAL (#trial)
     ====================================================================== */
  XH.onForm('tk-trial',function(data,f){var first=(data.name||'there').split(' ')[0];
    f.setAttribute('data-done','Thanks, '+esc(first)+'! An XcellHost engineer will call to confirm your '+esc(data.token||'evaluation key')+' trial for '+esc(String(data.users||''))+' users — duration and scope are confirmed by XcellHost.');});

  /* ======================================================================
     TOOL 1 · Token picker
     ====================================================================== */
  (function(){var uEl=$id('pUse'),dEl=$id('pDev');if(!uEl)return;var pU=$id('pU'),pA=$id('pA'),pS=$id('pS'),last=null;
    function vals(el){return $$('input:checked',el).map(function(i){return i.value;});}
    function run(){var use=vals(uEl),dev=vals(dEl),U=clamp(num(pU,0),0,20000),A=clamp(num(pA,0),0,500),S=clamp(num(pS,0),0,2000);
      var mix={q1:0,q2:0,q3:0,q4:0},why=[],rows=[];
      if(use.indexOf('wf')>=0&&U>0){if(dev.indexOf('mob')>=0){mix.q2+=U;rows.push(['q2','NFC','NFC keys for staff',U,'same key taps on phones and plugs into laptops','']);}
        else{var con=dev.indexOf('usbc')>=0&&dev.indexOf('usba')>=0?'USB-A + USB-C mix':dev.indexOf('usbc')>=0?'USB-C':'USB-A';mix.q1+=U;rows.push(['q1','KEY','FIDO2 keys for staff',U,con+' · touch + PIN','']);}}
      if(use.indexOf('ad')>=0&&A>0){mix.q2+=A*2;rows.push(['q2','BIO','Biometric keys for admins',A*2,'2 per admin · primary + backup','o']);}
      if(use.indexOf('vpn')>=0){var n=U||A;if(n>0){mix.q3+=n;rows.push(['q3','OTP','OTP tokens for the VPN',n,'only where FIDO2 is not supported','n']);}}
      if((use.indexOf('dsc')>=0||use.indexOf('cs')>=0)&&S>0){mix.q4+=S;rows.push(['q4','PKI','PKI USB tokens',S,(use.indexOf('dsc')>=0?'Class 3 DSC':'')+(use.indexOf('dsc')>=0&&use.indexOf('cs')>=0?' · ':'')+(use.indexOf('cs')>=0?'code signing':'')+' · FIPS 140-3','gr']);}
      var key=JSON.stringify(rows);
      if(key!==last){$id('pMix').innerHTML=rows.length?rows.map(function(r,i){return '<li class="'+r[5]+'" style="animation-delay:'+(R?0:i*.08)+'s"><span class="g">'+r[1]+'</span><span><b>'+esc(r[2])+'</b><small>'+esc(r[4])+'</small></span><em>×'+r[3]+'</em></li>';}).join(''):'<li class="n"><span class="g">?</span><span><b>Pick a job and add people</b><small>the mix appears here</small></span><em>0</em></li>';last=key;}
      var fido=mix.q1+mix.q2,otp=mix.q3,pr=fido+otp?Math.round(100*(fido+otp*.45)/(fido+otp)):0;
      var bar=$id('pBar');bar.style.width=(fido+otp?pr:0)+'%';bar.style.background=pr>=85?'#16a34a':pr>=60?'#FF8A00':'#c0392b';
      setT('pPr',fido+otp?(pr+'% · '+(pr>=85?'phishing-resistant':pr>=60?'mostly phishing-resistant':'codes can still be relayed')):'n/a · signing tokens only');$id('pPr').style.color=pr>=85?'#5FE08D':'#FFB15C';
      var cost=mix.q1*PR.q1+mix.q2*PR.q2+mix.q3*PR.q3+mix.q4*PR.q4;setT('pCost',inr(cost));
      if(otp&&fido)why.push('Keep OTP tokens only for the VPN until it supports FIDO2, then retire them.');
      if(use.indexOf('ad')>=0)why.push('Admins first: require phishing-resistant authentication strength on admin portals.');
      if(use.indexOf('dsc')>=0)why.push('New DSCs must be issued on FIPS 140-3 tokens from 21 Sept 2026.');
      if(!why.length)why.push('Start with a free trial key and a pilot group.');
      setT('pWhy',why.join(' '));
      return mix;}
    [uEl,dEl].forEach(function(e){e.addEventListener('change',run);});[pU,pA,pS].forEach(function(e){e.addEventListener('input',run);e.addEventListener('change',run);});
    $id('pSend').addEventListener('click',function(){var m=run();if(!(m.q1+m.q2+m.q3+m.q4)){XH.toast('Pick at least one job and add people first.');return;}Object.keys(m).forEach(function(k){if(Q[k])Q[k].value=m[k];});renderCfg();goCfg();XH.toast('Token mix copied to the configurator');});
    run();})();

  /* ======================================================================
     TOOL 2 · Spares & rollout planner
     ====================================================================== */
  (function(){var nU=$id('nU');if(!nU)return;var nA=$id('nA'),nS=$id('nS'),nSp=$id('nSp'),nBk=$id('nBk'),shown=0,tw0=0,twF=0,twT=0;
    var twOn=loop(function(now){if(!tw0)tw0=now;var u=eo((now-tw0)/700);shown=Math.round(lerp(twF,twT,u));setT('nTot',String(shown));if(u>=1)twOn(false);});
    function run(){var U=clamp(num(nU,1),1,20000),A=clamp(num(nA,0),0,500),S=clamp(num(nS,1),1,200),sp=+(segV(nSp)||10),bk=segV(nBk)||'ad';
      var prim=U+A,back=bk==='all'?U+A:bk==='ad'?A:0,spare=Math.ceil(prim*sp/100),tot=prim+back+spare;
      var parts=[['Primary keys',prim,'#0066FF'],['Backup keys',back,'#FF8A00'],['Spare pool',spare,'#16a34a']];
      $id('nStk').innerHTML=parts.map(function(p){return '<i style="width:'+(100*p[1]/tot).toFixed(1)+'%;background:'+p[2]+'"></i>';}).join('');
      $id('nStl').innerHTML=parts.map(function(p){return '<li><i style="background:'+p[2]+'"></i>'+p[0]+' · '+p[1]+'</li>';}).join('');
      var enrol=Math.max(1,Math.ceil(U/150+(S-1)*.5)),ph=[['Pilot · trial key',0,1,'#7FB0FF'],['Admins enforced',1,1,'#FF8A00'],['Staff enrolment',1,enrol,'#0066FF'],['Enforce for all',1+enrol,1,'#16a34a'],['Hypercare',2+enrol,2,'#9fb6de']],W=4+enrol;
      $id('nGt').innerHTML=ph.map(function(p){return '<div><span>'+p[0]+'</span><span class="tr"><i style="left:'+(100*p[1]/W).toFixed(1)+'%;width:'+(100*p[2]/W).toFixed(1)+'%;background:'+p[3]+'"></i></span></div>';}).join('')+'<div><span></span><span class="ax"><span>wk 0</span><span>wk '+Math.round(W/2)+'</span><span>wk '+W+'</span></span></div>';
      setT('nNote','About '+W+' weeks end to end. Assumes ~150 enrolments a week and half a week per extra site; spares cover loss and new joiners. Indicative — '+inr(tot*PR.q1)+' at the FIDO2 key price*, excl. GST.');
      if(R){setT('nTot',String(tot));shown=tot;return;}twF=shown;twT=tot;tw0=0;twOn(true);}
    [nU,nA,nS].forEach(function(e){e.addEventListener('input',run);});[nSp,nBk].forEach(function(e){e.addEventListener('change',run);e.addEventListener('click',function(){setTimeout(run,0);});});
    run();})();
})();

