
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
  var MONO='"IBM Plex Mono"',SANS='"IBM Plex Sans"',DISP='Sora';
  var BL='#0066FF',OR='#FF8A00',NV='#0B132B',GR='#16a34a',RD='#c0392b';
  function th(){return dark()?{ink:'#EAF1FF',mut:'#93A4C4',line:'rgba(255,255,255,.16)',soft:'rgba(255,255,255,.07)',surf:'#13224A',bl:'#5C9DFF',ot:'#FFB15C',gr:'#5FE08D',rd:'#ff8a80',hub:'#0B132B'}:{ink:NV,mut:'#55617A',line:'rgba(11,19,43,.15)',soft:'rgba(11,19,43,.05)',surf:'#ffffff',bl:BL,ot:'#C46A00',gr:GR,rd:RD,hub:NV};}

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
  function cross(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.lineCap='round';c.beginPath();c.moveTo(x-s*.4,y-s*.4);c.lineTo(x+s*.4,y+s*.4);c.moveTo(x+s*.4,y-s*.4);c.lineTo(x-s*.4,y+s*.4);c.stroke();c.lineCap='butt';}
  function badge(c,x,y,r,bg,kind){c.fillStyle=bg;c.beginPath();c.arc(x,y,r,0,TAU);c.fill();if(kind==='x')cross(c,x,y,r*1.3,'#fff');else tick(c,x,y,r*1.3,'#fff');}
  function packet(c,x1,y1,x2,y2,u,col,arc){if(u<=0||u>=1)return;var A=arc===undefined?8:arc;
    for(var k=4;k>0;k--){var e2=eio(clamp(u-k*.035,0,1));ga(c,.12*(5-k));c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e2),lerp(y1,y2,e2)-Math.sin(e2*Math.PI)*A,2.8,0,TAU);c.fill();}
    var e=eio(u);ga(c,1);c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A,4.2,0,TAU);c.fill();c.fillStyle='rgba(255,255,255,.85)';c.beginPath();c.arc(lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A,1.5,0,TAU);c.fill();}
  function card(c,x,y,w,h,T,stroke){rr(c,x,y,w,h,10);c.fillStyle=T.surf;c.fill();c.strokeStyle=stroke||T.line;c.lineWidth=stroke?1.8:1.1;c.stroke();}
  function person(c,x,y,s,col){c.fillStyle=col;c.beginPath();c.arc(x,y-s*.28,s*.22,0,TAU);c.fill();c.beginPath();c.arc(x,y+s*.36,s*.38,Math.PI,0);c.fill();}
  function lockI(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.arc(x,y-s*.12,s*.26,Math.PI,0);c.stroke();rr(c,x-s*.38,y-s*.12,s*.76,s*.56,3);c.fillStyle=col;c.fill();}
  function keyI(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.4;c.beginPath();c.arc(x-s*.25,y,s*.22,0,TAU);c.stroke();c.beginPath();c.moveTo(x-s*.03,y);c.lineTo(x+s*.5,y);c.moveTo(x+s*.36,y);c.lineTo(x+s*.36,y+s*.18);c.moveTo(x+s*.5,y);c.lineTo(x+s*.5,y+s*.2);c.stroke();}
  /* identity hub: navy rounded square with person */
  function hub(c,x,y,s,T,glow,col){if(glow>0){ga(c,glow*.35);c.fillStyle=BL;c.beginPath();c.arc(x,y,s*.95,0,TAU);c.fill();ga(c,1);}rr(c,x-s*.55,y-s*.55,s*1.1,s*1.1,s*.28);c.fillStyle=T.hub;c.fill();c.strokeStyle=col||BL;c.lineWidth=2;c.stroke();person(c,x,y+s*.05,s*.62,'#fff');}
  /* app tile */
  function app(c,x,y,w,h,name,st,T,nar){var col=st==='on'?T.gr:st==='off'?T.mut:st==='bad'?T.rd:st==='new'?T.bl:T.line;rr(c,x,y,w,h,9);c.fillStyle=T.surf;c.fill();c.strokeStyle=col;c.lineWidth=st&&st!=='idle'?1.8:1.1;c.stroke();
    var ic=nar?14:16;rr(c,x+7,y+(h-ic)/2,ic,ic,4);c.fillStyle=st==='off'?T.soft:col===T.line?T.soft:col;ga(c,st==='off'?1:.9);c.fill();ga(c,1);
    txt(c,name,x+ic+12,y+h/2,'600 '+(nar?9:10.5)+'px '+SANS,st==='off'?T.mut:T.ink);
    if(st==='off'){c.strokeStyle=T.mut;c.lineWidth=1.2;c.beginPath();c.moveTo(x+ic+12,y+h/2);c.lineTo(x+w-18,y+h/2);c.stroke();}}

  /* ======================================================================
     HERO · five identity scenes on one canvas (sample tenant)
     ====================================================================== */
  var DUR=5500,FADE=480;
  var APPS=['Microsoft 365','Teams','ERP · Tally','Expenses','HRMS','File share'];
  var SC=[
    {cap:'New joiner provisioned',ph:'Joiner',lt:'PROVISIONING LOG',k:'a.mehta@sample · Finance',ini:'AM',
     lg:[[300,'09:00','HR record · starts Monday','received',''],[1300,'09:00','identity created in Entra ID','created','g'],[2000,'09:01','dynamic group · dept = Finance','added',''],[3000,'09:02','SCIM · 6 app accounts','provisioning','w'],[4400,'09:04','6 of 6 apps ready','done','g']]},
    {cap:'One sign-in, every app',ph:'SSO',lt:'SIGN-IN LOG',k:'a.mehta@sample · My Apps',ini:'AM',
     lg:[[300,'09:30','sign-in · Authenticator push','MFA ✓','g'],[1300,'09:30','token issued · SAML / OIDC','token',''],[2400,'09:30','6 apps opened · no new password','SSO','g'],[4300,'09:31','sign-in logged centrally','logged','']]},
    {cap:'Conditional Access decides',ph:'Policy',lt:'POLICY EVALUATION',k:'a.mehta@sample · personal laptop',ini:'AM',
     lg:[[300,'21:12','sign-in · ERP from home, India','request',''],[1300,'21:12','device not managed','warn','w'],[2300,'21:12','policy → require MFA','MFA','w'],[3500,'21:12','number match 42 approved','passed','g'],[4300,'21:12','granted · web-only session','allow','g']]},
    {cap:'Mover: access follows the role',ph:'Mover',lt:'ACCESS CHANGES',k:'a.mehta@sample · Finance → Sales',ini:'AM',
     lg:[[300,'10:05','HR · department changed','Sales','w'],[1500,'10:05','removed · ERP, Expenses','revoked','r'],[2700,'10:06','added · CRM, Sales drive','granted','g'],[4200,'10:06','access matches new role','done','g']]},
    {cap:'Leaver locked out everywhere',ph:'Leaver',lt:'DEPROVISIONING LOG',k:'r.iyer@sample · last day',ini:'RI',
     lg:[[300,'18:00','HR · last working day','exit',''],[1100,'18:00','account disabled','disabled','r'],[1900,'18:00','sessions & tokens revoked','revoked','w'],[2700,'18:02','SCIM · 6 app accounts removed','removing','w'],[4400,'18:04','0 orphan accounts','clean','g']]}
  ];
  var hero=$id('iaHero'),cv=$id('iaCv'),scr=$id('iaScr'),railEl=$id('iaRail'),con=$id('iaCon');
  var tabs=railEl?$$('button',railEl):[],logEl=$id('iaLog'),ring=$id('iaRing'),vb=$id('iaVb'),vk=$id('iaVk'),vs=$id('iaVs'),ini=$id('iaIni');

  function grid(w,h,nar,x0){var cols=2,rows=3,gx=x0,gw=w-gx-(nar?8:14),tw=(gw-8)/cols,th2=nar?28:34,top=nar?52:56,gap=(h-top-48-rows*th2)/(rows-1);var out=[];for(var i=0;i<6;i++){var col=i%cols,row=Math.floor(i/cols);out.push([gx+col*(tw+8),top+row*(th2+gap),tw,th2]);}return out;}

  /* --- scene 0: joiner provisioning --- */
  function s0(c,w,h,t){var T=th(),nar=w<420,top=50;
    var hx=nar?20:28,hw=nar?110:136,hy=top+6,hh=nar?62:70;
    var inU=eo(seg(0,600,t));ga(c,inU);card(c,hx,hy,hw,hh,T,t<1300?OR:null);txt(c,'HR · NEW JOINER',hx+10,hy+14,'800 '+(nar?7.5:8.5)+'px '+MONO,T.mut);
    txt(c,'A. Mehta',hx+10,hy+32,'700 '+(nar?11:13)+'px '+DISP,T.ink);txt(c,'Finance · Mon',hx+10,hy+50,'500 '+(nar?8.5:10)+'px '+MONO,T.mut);ga(c,1);
    var ix=hx+hw/2,iy=h*.68,S=nar?36:44,cU=spring((t-1300)/700);
    packet(c,ix,hy+hh,ix,iy-S*.6,seg(600,1300,t),OR,0);
    if(t>1300){c.save();c.translate(ix,iy);c.scale(clamp(cU,0,1.2),clamp(cU,0,1.2));hub(c,0,0,S,T,t<2200?1-seg(1300,2200,t):0);c.restore();txt(c,'Entra ID',ix,iy+S*.85,'700 '+(nar?8.5:9.5)+'px '+MONO,T.mut,'center');}
    if(t>2000){var gu=eo(seg(2000,2400,t));ga(c,gu);pill(c,nar?'grp: Finance':'group: Finance',ix,iy-S*.95,'700 '+(nar?8:9)+'px '+MONO,BL,'#fff','center');ga(c,1);}
    var G=grid(w,h,nar,nar?w*.44:w*.46),ready=0;
    G.forEach(function(g,i){var tp=3000+i*230,st=t>tp+260?'on':t>tp?'new':'idle';if(st==='on')ready++;
      if(t>2600){var ax=g[0],ay=g[1]+g[3]/2;c.strokeStyle=T.line;c.lineWidth=1.1;c.setLineDash([3,5]);c.beginPath();c.moveTo(ix+S*.6,iy);c.lineTo(ax,ay);c.stroke();c.setLineDash([]);packet(c,ix+S*.6,iy,ax,ay,seg(tp-500,tp,t),BL,6);}
      app(c,g[0],g[1],g[2],g[3],nar?APPS[i].split(' ')[0]:APPS[i],st,T,nar);
      if(st==='on'){var bu=spring((t-tp-260)/500);c.save();c.translate(g[0]+g[2]-10,g[1]+g[3]/2);c.scale(bu,bu);badge(c,0,0,7,GR);c.restore();}});
    stamp(c,'READY FOR DAY ONE',nar?w*.5:w*.62,h-14,4500,t,T.gr,nar?9.5:11);
    var f=t<1300?.1:t<3000?.25+.1*seg(1300,3000,t):.35+.65*ready/6;
    return {f:f,v:t<1300?'HR record received':t<2000?'Identity created':t<3000?'Group assigned':ready<6?'Provisioning apps…':'Ready for day one',s:ready+' of 6 apps',c:t<3000?'':ready<6?'o':'g'};}

  /* --- scene 1: SSO --- */
  function s1(c,w,h,t){var T=th(),nar=w<420,top=50;
    var ux=nar?44:62,uy=h*.55,S=nar?34:42;
    person(c,ux,uy-6,S,T.bl);txt(c,'one sign-in',ux,uy+S*.62,'700 '+(nar?8.5:9.5)+'px '+MONO,T.mut,'center');
    // MFA phone
    var pu=eo(seg(200,800,t));if(pu>0){var px=ux,py=top+18;ga(c,pu);rr(c,px-14,py-2,28,44,6);c.fillStyle=T.surf;c.fill();c.strokeStyle=T.bl;c.lineWidth=1.6;c.stroke();
      if(t>800)badge(c,px,py+20,8,GR);else{c.fillStyle=OR;c.beginPath();c.arc(px,py+20,5,0,TAU);c.fill();}ga(c,1);}
    // key / token
    var kx=nar?w*.36:w*.34,ky=uy-4;packet(c,ux+S*.5,uy-6,kx-18,ky,seg(900,1400,t),BL,10);
    if(t>1300){var ku=spring((t-1300)/600);c.save();c.translate(kx,ky);c.scale(clamp(ku,0,1.2),clamp(ku,0,1.2));c.fillStyle=T.hub;c.beginPath();c.arc(0,0,nar?17:21,0,TAU);c.fill();keyI(c,2,0,nar?20:24,'#FFB15C');c.restore();txt(c,'token',kx,ky+(nar?28:32),'700 '+(nar?8.5:9.5)+'px '+MONO,T.mut,'center');}
    // fan of apps (arc)
    var opened=0;
    for(var i=0;i<6;i++){var tw=nar?78:120,thh=nar?24:28,ay=lerp(top+4,h-50-thh,i/5),ax=w-tw-(nar?10:22)-Math.sin(i/5*Math.PI)*(nar?14:46);var tp=2000+i*200,st=t>tp+250?'on':t>tp?'new':'idle';if(st==='on')opened++;
      if(t>1500)packet(c,kx+20,ky,ax,ay+thh/2,seg(tp-450,tp,t),OR,4);
      app(c,ax,ay,tw,thh,nar?APPS[i].split(' ')[0]:APPS[i],st,T,nar);}
    // passwords counter
    var pwN=t<2000?6:Math.max(1,6-opened);
    if(t>2000){txt(c,'passwords',nar?16:22,h-30,'700 '+(nar?8:9)+'px '+MONO,T.mut);txt(c,(t>3400?'6 → 1':String(pwN)),nar?16:22,h-15,'800 '+(nar?13:15)+'px '+DISP,t>3400?T.gr:T.ot);}
    stamp(c,'1 SIGN-IN · 6 APPS',nar?w*.6:w*.62,h-14,4300,t,T.gr,nar?9.5:11);
    return {f:t<1300?.2*seg(0,1300,t)+.05:.3+.7*opened/6,v:t<900?'Approve sign-in':t<2000?'Token issued':opened<6?'Opening apps · '+opened+'/6':'Signed in to 6 apps',s:t<3400?'no app passwords typed':'passwords: 6 → 1',c:t<2000?'':opened<6?'o':'g'};}

  /* --- scene 2: Conditional Access --- */
  var SIG=[['User','staff · Finance','ok'],['Device','personal · unmanaged','wn'],['Location','home · India','ok'],['App','ERP · Tally','ok'],['Risk','low','ok']];
  function s2(c,w,h,t){var T=th(),nar=w<420,top=48;
    var lx=nar?12:20,lw=nar?w*.44:w*.4;top=top+6;var rowH=(h-top-34)/5;
    txt(c,'SIGNALS',lx,top+8,'800 '+(nar?7.5:8.5)+'px '+MONO,T.mut);
    SIG.forEach(function(s,i){var y=top+12+i*rowH,tp=500+i*260,u=eo(seg(tp,tp+300,t));ga(c,.25+.75*u);rr(c,lx,y,lw,rowH-6,8);c.fillStyle=T.soft;c.fill();
      txt(c,s[0],lx+10,y+(rowH-6)/2,'700 '+(nar?8.5:10)+'px '+MONO,T.ink);
      if(!nar||true)txt(c,nar?s[1].split(' · ')[0]:s[1],lx+(nar?58:74),y+(rowH-6)/2,'500 '+(nar?8.5:10)+'px '+SANS,T.mut);
      if(u>=1){var col=s[2]==='ok'?GR:OR;c.fillStyle=col;c.beginPath();c.arc(lx+lw-12,y+(rowH-6)/2,6,0,TAU);c.fill();if(s[2]==='ok')tick(c,lx+lw-12,y+(rowH-6)/2,8,'#fff');else txt(c,'!',lx+lw-12,y+(rowH-6)/2+.5,'800 10px '+MONO,'#fff','center');}
      ga(c,1);});
    // scan beam
    if(t>500&&t<1900){var by=top+12+((t-500)/1400)*(rowH*5);ga(c,.5);c.fillStyle=BL;c.fillRect(lx,by,lw,2);ga(c,1);}
    // policy engine
    var px=lx+lw+(nar?14:30),pw=nar?w-px-10:w*.24,py=h*.36,ph=nar?56:64;
    card(c,px,py,pw,ph,T,t>1900?OR:BL);txt(c,'POLICY',px+pw/2,py+16,'800 '+(nar?8:9)+'px '+MONO,T.mut,'center');
    txt(c,t<1900?'evaluating…':'require MFA',px+pw/2,py+38,'800 '+(nar?10:12)+'px '+DISP,t<1900?T.ink:T.ot,'center');
    for(var k=0;k<5;k++)packet(c,lx+lw,top+12+k*rowH+(rowH-6)/2,px,py+ph/2,seg(700+k*260,1300+k*260,t),k===1?OR:BL,0);
    // phone number match
    if(!nar||t>0){var fx=nar?px+pw/2:px+pw+((w-px-pw)/2),fy=nar?py+ph+50:py+ph/2,fu=eo(seg(2300,2700,t));
      if(fu>0){ga(c,fu);rr(c,fx-22,fy-34,44,68,8);c.fillStyle=T.surf;c.fill();c.strokeStyle=t>3500?GR:OR;c.lineWidth=1.8;c.stroke();txt(c,'42',fx,fy-6,'800 18px '+DISP,T.ink,'center');txt(c,t>3500?'approved':'match?',fx,fy+18,'700 8px '+MONO,t>3500?T.gr:T.ot,'center');ga(c,1);
        if(!nar)packet(c,px+pw,py+ph/2,fx-22,fy,seg(2100,2500,t),OR,6);}}
    if(t>4100)pill(c,'GRANTED · WEB-ONLY SESSION',nar?w*.5:px+pw/2+40,h-12,'800 '+(nar?8:9)+'px '+MONO,GR,'#fff','center');
    var n=Math.min(5,Math.max(0,Math.floor((t-500)/260)+1));
    return {f:t<1900?.08*n:t<3500?.5+.2*seg(2300,3500,t):1,v:t<1900?'Checking '+n+' of 5 signals':t<2300?'Policy: require MFA':t<3500?'Number match sent':'Access granted',s:t<4100?'device unmanaged → step-up':'web-only · 8 h session (sample)',c:t<1900?'':t<3500?'o':'g'};}

  /* --- scene 3: mover --- */
  function s3(c,w,h,t){var T=th(),nar=w<420,top=50;
    var cx=w/2,cy=nar?top+40:top+46,S=nar?32:38;
    hub(c,cx,cy,S,T,0,t>1000&&t<1500?OR:BL);
    var mu=eo(seg(600,1300,t));var dep=mu<.5?'Finance':'Sales';ga(c,mu<.5?1-mu*2:(mu-.5)*2);pill(c,dep,cx,cy+S*.95,'800 '+(nar?8.5:9.5)+'px '+MONO,mu<.5?T.mut:OR,'#fff','center');ga(c,1);
    var colW=nar?(w-36)/2:w*.36,lx=nar?12:w*.08,rx=w-colW-(nar?12:w*.08),ry=cy+S*(nar?1.75:1.5),th2=nar?26:30,gp=6;
    txt(c,'REMOVED',lx,ry-8,'800 '+(nar?7.5:8.5)+'px '+MONO,T.rd);txt(c,'ADDED',rx,ry-8,'800 '+(nar?7.5:8.5)+'px '+MONO,T.gr);
    var rem=['ERP · Tally','Expenses'],add=['CRM','Sales drive'],keep=['Microsoft 365','Teams'];
    rem.forEach(function(nm,i){var y=ry+i*(th2+gp),tp=1500+i*300,st=t>tp+300?'off':t>tp?'bad':'idle';app(c,lx,y,colW,th2,nm,st,T,nar);if(t>tp)packet(c,cx-S*.5,cy,lx+colW,y+th2/2,seg(tp-400,tp,t),RD,4);});
    add.forEach(function(nm,i){var y=ry+i*(th2+gp),tp=2700+i*300,u=eo(seg(tp,tp+300,t));if(u<=0)return;ga(c,u);app(c,rx,y,colW,th2,nm,t>tp+300?'on':'new',T,nar);ga(c,1);packet(c,cx+S*.5,cy,rx,y+th2/2,seg(tp-400,tp,t),GR,4);});
    keep.forEach(function(nm,i){var y=ry+2*(th2+gp)+4,x=i?rx:lx;ga(c,.85);app(c,x,y,colW,th2,nm+' · kept','idle',T,nar);ga(c,1);});
    stamp(c,'ACCESS MATCHES ROLE',w/2,h-14,4200,t,T.gr,nar?9.5:11);
    var done=(t>1800?1:0)+(t>2100?1:0)+(t>3000?1:0)+(t>3300?1:0);
    return {f:.15+.85*done/4,v:t<1300?'Role change from HR':t<2700?'Removing Finance apps':t<4200?'Adding Sales apps':'Access matches role',s:done+' of 4 changes',c:t<1300?'':t<4200?'o':'g'};}

  /* --- scene 4: leaver --- */
  function s4(c,w,h,t){var T=th(),nar=w<420,top=50;
    var ix=nar?56:w*.2,iy=h*.56,S=nar?36:44;
    var dis=t>1100;hub(c,ix,iy,S,T,0,dis?RD:BL);
    if(dis){var lu=spring((t-1100)/500);c.save();c.translate(ix+S*.5,iy-S*.5);c.scale(clamp(lu,0,1.2),clamp(lu,0,1.2));c.fillStyle=T.surf;c.beginPath();c.arc(0,0,12,0,TAU);c.fill();lockI(c,0,1,16,RD);c.restore();}
    txt(c,dis?'disabled':'r.iyer',ix,iy+S*.85,'700 '+(nar?8.5:9.5)+'px '+MONO,dis?T.rd:T.mut,'center');
    // revoke wave
    if(t>1900&&t<3300){var wu=seg(1900,3300,t);for(var k=0;k<3;k++){var u=(wu*1.6-k*.25);if(u<=0||u>=1)continue;ga(c,.5*(1-u));c.strokeStyle=OR;c.lineWidth=2;c.beginPath();c.arc(ix,iy,S*.7+u*w*.55,0,TAU);c.stroke();}ga(c,1);}
    if(t>300){var hu=eo(seg(300,700,t));ga(c,hu);pill(c,'last day · 18:00',ix,top+10,'700 '+(nar?8:9)+'px '+MONO,NV,'#fff','center');ga(c,1);}
    var G=grid(w,h,nar,nar?w*.4:w*.42),gone=0;
    G.forEach(function(g,i){var tp=2700+i*260,st=t>tp+260?'off':t>tp?'bad':'on';if(st==='off')gone++;
      app(c,g[0],g[1],g[2],g[3],nar?APPS[i].split(' ')[0]:APPS[i],st,T,nar);
      if(st==='off'){var bu=spring((t-tp-260)/500);c.save();c.translate(g[0]+g[2]-10,g[1]+g[3]/2);c.scale(bu,bu);badge(c,0,0,7,RD,'x');c.restore();}});
    stamp(c,'0 ORPHAN ACCOUNTS',nar?w*.5:w*.62,h-14,4500,t,T.gr,nar?9.5:11);
    return {f:t<1100?.1:t<2700?.3+.1*seg(1100,2700,t):.4+.6*gone/6,v:t<1100?'Exit date reached':t<1900?'Account disabled':t<2700?'Sessions revoked':gone<6?'Removing app accounts…':'Locked out of all apps',s:(6-gone)+' active app accounts',c:t<1100?'':gone<6?'r':'g'};}
  var DRAW=[s0,s1,s2,s3,s4];

  var cur=0,prev=-1,tS=0,tLast=0,fadeT=FADE,paused=false,lastG={v:'',c:'_'};
  function buildLog(k){if(!logEl)return;logEl.innerHTML=SC[k].lg.map(function(e){return '<li class="'+e[4]+'"><b>'+e[1]+'</b><span>'+esc(e[2])+'</span><em>'+esc(e[3])+'</em></li>';}).join('');}
  function logAt(t){if(!logEl)return;var lg=SC[cur].lg,li=logEl.children;for(var i=0;i<lg.length;i++){var on=R||t>=lg[i][0];if(li[i]&&li[i].classList.contains('in')!==on)li[i].classList.toggle('in',on);}}
  function setScene(k,user){k=(k+5)%5;if(k===cur&&!user)return;prev=cur;cur=k;tS=0;fadeT=R?FADE:0;
    tabs.forEach(function(b,i){var on=i===cur;b.classList.toggle('on',on);b.classList.toggle('done',i<cur);b.setAttribute('aria-selected',on);b.style.setProperty('--p','0');});
    var S=SC[cur];setT('iaCapN','0'+(cur+1));setT('iaCapT',S.cap);setT('iaPh',S.ph);setT('iaLt',S.lt);setT(vk,S.k);setT(ini,S.ini);buildLog(cur);lastG={v:'',c:'_'};if(R)render();}
  function gauge(g){if(!ring)return;var f=clamp(g.f,0,1);ring.style.strokeDashoffset=(100*(1-f)).toFixed(1);if(g.c!==lastG.c)ring.setAttribute('class','fg'+(g.c?' '+g.c:''));
    if(g.v!==lastG.v){var was=lastG.v;setT(vb,g.v);if(was!=='')bump(vb);}setT(vs,g.s);lastG={v:g.v,c:g.c};}
  function render(){var f=cv&&fitC(cv);if(!f)return;var c=f.c,w=f.w,h=f.h;c.clearRect(0,0,w,h);
    var t=R?5200:tS,fading=prev>=0&&fadeT<FADE,g;
    if(fading){var u=fadeT/FADE;GA=1-eo(Math.min(1,u*1.4));c.globalAlpha=GA;c.save();c.translate(0,-u*10);DRAW[prev](c,w,h,5200);c.restore();GA=eo(u);c.globalAlpha=GA;c.save();c.translate(0,(1-u)*10);g=DRAW[cur](c,w,h,t);c.restore();GA=1;c.globalAlpha=1;}
    else{GA=1;g=DRAW[cur](c,w,h,t);}
    gauge(g);logAt(t);}
  var heroOn=loop(function(now){var dt=tLast?Math.min(64,now-tLast):16;tLast=now;
    if(!paused){tS+=dt;if(tabs[cur])tabs[cur].style.setProperty('--p',Math.min(1,tS/DUR).toFixed(3));if(tS>=DUR)setScene(cur+1);}
    if(fadeT<FADE)fadeT+=dt;
    if(!paused||fadeT<FADE+20)render();});
  function setPause(p){paused=p;tLast=0;if(con)con.classList.toggle('paused',p);}
  if(hero&&cv){
    setScene(0,true);prev=-1;
    tabs.forEach(function(b,i){b.addEventListener('click',function(){setScene(i,true);});});
    window.iaScene=function(k,t){setScene(k,true);prev=-1;tS=t||0;render();};
    if(R){render();addEventListener('resize',render);}
    else{
      watch(hero,function(v){tLast=0;heroOn(v);});
      var stg=$id('iaStage');stg.addEventListener('mouseenter',function(){setPause(true);});stg.addEventListener('mouseleave',function(){setPause(false);});
      stg.addEventListener('focusin',function(){setPause(true);});stg.addEventListener('focusout',function(){setPause(false);});
      addEventListener('resize',function(){render();});
      var sx=null,sy=null;
      scr.addEventListener('pointerdown',function(e){if(e.pointerType==='touch')return;sx=e.clientX;sy=e.clientY;});
      scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))setScene(cur+(dx<0?1:-1),true);});
      scr.addEventListener('touchstart',function(e){var p=e.touches[0];sx=p.clientX;sy=p.clientY;},{passive:true});
      scr.addEventListener('touchend',function(e){if(sx===null)return;var p=e.changedTouches[0],dx=p.clientX-sx,dy=p.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){setScene(cur+(dx<0?1:-1),true);setPause(false);}},{passive:true});
      railEl.addEventListener('keydown',function(e){var k=e.key;if(k==='ArrowDown'||k==='ArrowRight'){setScene(cur+1,true);tabs[cur].focus();e.preventDefault();}else if(k==='ArrowUp'||k==='ArrowLeft'){setScene(cur-1,true);tabs[cur].focus();e.preventDefault();}});
    }
    new MutationObserver(function(){render();}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
  }

  /* ===== magnetic CTAs + tap-reveal ===== */
  if(!R&&matchMedia('(hover:hover)').matches){$$('.ia-mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;b.style.transform='translate('+(x*8).toFixed(1)+'px,'+(y*6).toFixed(1)+'px)';});b.addEventListener('mouseleave',function(){b.style.transform='';});});
    $$('.ia-cc').forEach(function(cd){cd.addEventListener('mousemove',function(e){var r=cd.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cd.style.transform='translateY(-4px) perspective(700px) rotateX('+(-y*5).toFixed(2)+'deg) rotateY('+(x*6).toFixed(2)+'deg)';});cd.addEventListener('mouseleave',function(){cd.style.transform='';});});}
  $$('.ia-cc').forEach(function(cd){cd.addEventListener('click',function(e){if(e.target.closest('a'))return;cd.classList.toggle('tap');});});

  /* ===== kinetic heading ===== */
  $$('.ia-kin').forEach(function(h){var nodes=[].slice.call(h.childNodes),i=0;h.innerHTML='';nodes.forEach(function(n){if(n.nodeType===3){n.textContent.split(/(\s+)/).forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){h.appendChild(d.createTextNode(p));return;}var s=d.createElement('span');s.className='w2';s.style.transitionDelay=(i++*45)+'ms';s.textContent=p;h.appendChild(s);});}else{var acc=n.cloneNode(false);n.textContent.split(/(\s+)/).forEach(function(p){if(!p)return;if(/^\s+$/.test(p)){acc.appendChild(d.createTextNode(p));return;}var s=d.createElement('span');s.className='w2';s.style.transitionDelay=(i++*45)+'ms';s.textContent=p;acc.appendChild(s);});h.appendChild(acc);}});
    if(R){h.classList.add('in');return;}XH.whenVisible(h,function(v){if(v)h.classList.add('in');});});

  /* ===== sub nav active ===== */
  (function(){var links=$$('.ia-sub a');if(!links.length||!('IntersectionObserver' in window))return;var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.remove('on');});var a=map[x.target.id];if(a)a.classList.add('on');}});},{rootMargin:'-40% 0px -55% 0px'});
    Object.keys(map).forEach(function(id){var s=$id(id);if(s)io.observe(s);});})();

  /* ===== identity fabric (illustration 1) ===== */
  (function(){var svg=$id('iaFab'),g=$id('iaFabPk');if(!svg||!g)return;var NS='http://www.w3.org/2000/svg';
    var paths=[0,1,2,3,4,5,6].map(function(i){return $id('fp'+i);}),L=paths.map(function(p){return p.getTotalLength();}),dots=[];
    var sig=$$('.sig circle',svg),apps=$$('.app rect',svg);
    for(var i=0;i<7;i++){var cc=d.createElementNS(NS,'circle');cc.setAttribute('r',i===3?6:4.5);cc.setAttribute('fill',i<3?'#0066FF':i===3?'#FF8A00':'#16a34a');g.appendChild(cc);dots.push(cc);}
    // 4.8 s cycle: sources 0-1.4s, hub→policy 1.4-2.2, signals 2.2-3.2, policy→apps 3.2-4.4
    function draw(now){var t=now%4800;
      for(var i=0;i<7;i++){var u=i<3?seg(i*200,1200+i*200,t):i===3?seg(1500,2200,t):seg(3200+(i-4)*120,4300+(i-4)*120,t);var e=eio(u),p=paths[i].getPointAtLength(L[i]*e);dots[i].setAttribute('cx',p.x.toFixed(1));dots[i].setAttribute('cy',p.y.toFixed(1));dots[i].setAttribute('opacity',(u<=0||u>=1)?0:1);}
      sig.forEach(function(s,k){var on=t>2200+k*220&&t<4600;if(s.classList.contains('on')!==on)s.classList.toggle('on',on);});
      apps.forEach(function(a,k){var on=t>4200+k*120||t<300;if(a.classList.contains('on')!==on)a.classList.toggle('on',on);});}
    if(R){draw(4500);return;}var on=loop(draw);watch(svg,on);})();

  /* ===== lifecycle ring (illustration 2) ===== */
  (function(){var w=$id('iaRingW');if(!w)return;var btns=$$('.ia-st',w),pr=$id('iaLcP'),dot=$id('iaLcDot'),ol=$id('iaLcL');
    var ST=[{n:'Joiner',t:'day one',h:'New hire created in HR',f:'Needs Entra ID P1 for HR-driven provisioning; Lifecycle Workflows (pre-hire tasks, welcome email) need Entra ID Governance.',l:[['HR record flows into Entra ID','auto'],['Account, mailbox &amp; licence assigned','auto'],['Groups by department &amp; location','rule'],['App accounts created via SCIM','SCIM'],['MFA registration on first sign-in','policy']]},
      {n:'Mover',t:'role change',h:'Department or manager changes',f:'Dynamic groups (P1) re-evaluate automatically when HR attributes change.',l:[['HR attribute updated','auto'],['Old groups &amp; app access removed','auto'],['New role\'s apps granted','auto'],['Manager notified of the change','workflow'],['Change recorded in audit log','log']]},
      {n:'Leaver',t:'exit hour',h:'Last working day reached',f:'Session revocation and SCIM deprovisioning work on P1; scheduled leaver workflows use Entra ID Governance.',l:[['Account disabled at exit time','auto'],['Sessions &amp; refresh tokens revoked','auto'],['App accounts disabled via SCIM','SCIM'],['Mailbox handed to manager','workflow'],['Licence reclaimed','₹ saved']]}];
    var cur=0,t0=0,pause=false,ang=[-90,30,150];
    function show(k){cur=k;btns.forEach(function(b,i){b.classList.toggle('on',i===k);});var s=ST[k];setT('iaLcN',s.n);setT('iaLcT',s.t);setT('iaLcH',s.h);$id('iaLcF').textContent=s.f;
      ol.innerHTML=s.l.map(function(x){return '<li>'+x[0]+'<em>'+x[1]+'</em></li>';}).join('');var lis=$$('li',ol);lis.forEach(function(li,i){if(R)li.classList.add('in');else setTimeout(function(){li.classList.add('in');},80+i*120);});}
    function pos(a){var r=a*Math.PI/180;dot.setAttribute('transform','translate('+(160+120*Math.cos(r)).toFixed(1)+','+(160+120*Math.sin(r)).toFixed(1)+')');}
    btns.forEach(function(b,i){b.addEventListener('click',function(){show(i);t0=performance.now();});});
    w.addEventListener('mouseenter',function(){pause=true;});w.addEventListener('mouseleave',function(){pause=false;});
    show(0);
    if(R){pr.style.strokeDashoffset='200';pos(-90);return;}
    var last=0;var on=loop(function(now){if(!t0)t0=now;if(pause){t0+=now-(last||now);last=now;return;}last=now;var e=now-t0;if(e>5000){show((cur+1)%3);t0=now;e=0;}
      var u=eio(e/5000),a=ang[cur]+u*120;pos(a);pr.style.strokeDashoffset=(300-(cur*100+u*100)).toFixed(1);});
    watch(w,function(v){last=0;on(v);});})();

  /* ===== gantt draw ===== */
  (function(){var g=$id('iaGt');if(!g)return;if(R){g.classList.add('in');return;}XH.whenVisible(g,function(v){if(v)g.classList.add('in');});})();

  /* ======================================================================
     PRICING · configurator (#configure)
     ====================================================================== */
  var LIC={none:[0,0],p1:[528,6125],p2:[755,8765],gov:[1056,12250]},IMPL=49999,MAN=99;
  var LN={p1:'Microsoft Entra ID P1',p2:'Microsoft Entra ID P2',gov:'Entra ID P1 + ID Governance'};
  var cLic=$id('cLic'),cUsers=$id('cUsers'),cApps=$id('cApps'),cTerm=$id('cTerm'),cImpl=$id('cImpl'),cMan=$id('cMan'),cTermF=$id('cTermF');
  function num(el,def){var v=parseInt(el&&el.value,10);return isNaN(v)?def:v;}
  function calc(){var lic=segV(cLic)||'none',u=clamp(num(cUsers,1),1,10000),apps=clamp(num(cApps,1),1,200),term=segV(cTerm)||'m',items=[];
    if(lic!=='none'){var y=term==='y';items.push({key:'iam-lic-'+lic+'-'+term,name:LN[lic],sub:'per user · '+(y?'12 months, paid upfront':'per month'),unit:LIC[lic][y?1:0],qty:u,col:'#0066FF',lab:LN[lic]+' × '+u});}
    if(cMan.checked)items.push({key:'iam-managed',name:'Managed IAM',sub:'per user · per month · indicative*',unit:MAN,qty:u,col:'#FF8A00',lab:'Managed IAM × '+u});
    if(cImpl.checked)items.push({key:'iam-impl',name:'IAM implementation (SSO + provisioning)',sub:'one-time · up to 10 apps & 300 users · indicative*',unit:IMPL,qty:1,col:'#16a34a',lab:'Implementation · one-time'});
    var sub=items.reduce(function(a,i){return a+i.unit*i.qty;},0),gst=Math.round(sub*.18);
    return {lic:lic,u:u,apps:apps,term:term,items:items,sub:sub,gst:gst,tot:sub+gst};}
  function render2(){if(!cLic)return;var s=calc();cTermF.style.opacity=s.lic==='none'?.45:1;
    setT('cAppsN',s.apps>10?'beyond 10 · quoted after discovery':'within implementation scope');
    setT('cName','IAM · '+s.u+' users · '+s.apps+' apps');
    $id('cList').innerHTML=s.items.map(function(i){return '<li><i style="background:'+i.col+'"></i><span>'+esc(i.lab)+'</span><b>'+inr(i.unit*i.qty)+'</b></li>';}).join('')||'<li><i></i><span>Pick a licence or service</span><b>₹0</b></li>';
    $id('cBars').innerHTML=s.items.map(function(i){return '<i style="width:'+(s.sub?(100*i.unit*i.qty/s.sub):0).toFixed(1)+'%;background:'+i.col+'"></i>';}).join('');
    setT('cSubL',s.lic!=='none'&&s.term==='y'?'Subtotal · licences 12 months + first month + one-time':'Subtotal · first month + one-time');
    var a=$id('cSub'),pv=a.textContent;setT(a,inr(s.sub));setT('cGst',inr(s.gst));setT('cTot',inr(s.tot));if(pv!==a.textContent)bump($id('cTot'));
    var notes=[];if(s.lic==='none')notes.push('Using licences you already have (Business Premium, E3 or E5 include Entra ID P1).');if(s.apps>10)notes.push((s.apps-10)+' apps beyond the implementation scope are quoted after discovery.');if(s.u>300&&cImpl.checked)notes.push('Over 300 users: implementation scope confirmed in the quote.');
    setT('cNote',notes.join(' '));}
  if(cLic){[cLic,cTerm].forEach(function(e){e.addEventListener('change',render2);});[cUsers,cApps].forEach(function(e){e.addEventListener('input',render2);});[cImpl,cMan].forEach(function(e){e.addEventListener('change',render2);});
    $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-pick');if(k==='impl')cImpl.checked=true;if(k==='man')cMan.checked=true;render2();var cf=$id('configure');scrollTo({top:cf.getBoundingClientRect().top+scrollY-110,behavior:R?'auto':'smooth'});XH.flash&&XH.flash(cf);});});
    $id('oAdd').addEventListener('click',function(){var s=calc();if(!s.items.length){XH.toast('Choose a licence or a service first.');return;}s.items.forEach(function(i){XH.cart.add({key:i.key,name:i.name,sub:i.sub,price:i.unit,qty:i.qty});});});
    $id('cQuote').addEventListener('click',function(){var s=calc();setTimeout(function(){try{var ta=$('#xhCallback textarea');if(ta)ta.value='IAM estimate: '+s.u+' users, '+s.apps+' apps · '+s.items.map(function(i){return i.lab;}).join(' · ')+' · subtotal '+inr(s.sub)+' excl. GST';}catch(e){}},50);});
    render2();}

  /* ===== free trial form ===== */
  XH.onForm('iam-trial',function(data){try{XH.toast('Free trial request received — we will call you shortly.');}catch(e){}});

  /* ======================================================================
     TOOL 1 · SSO savings calculator
     ====================================================================== */
  (function(){var ids=['sU','sA','sT','sC','sM','sR'],el={};ids.forEach(function(k){el[k]=$id(k);});if(!el.sU)return;var HR=400,DAYS=220,lastA=-1;
    function run(){var U=+el.sU.value,A=+el.sA.value,T=+el.sT.value,C=+el.sC.value,M=+el.sM.value,Rr=+el.sR.value/100;
      setT('sUv',String(U));setT('sAv',String(A));setT('sTv',String(T));setT('sCv',inr(C));setT('sMv',String(M));setT('sRv',Math.round(Rr*100)+'%');setT('sPw0',String(A));setT('sHr',String(HR));
      var hrs=U*M/60*DAYS,now=U*T*C+hrs*HR,with1=now*(1-Rr),save=now-with1,cost=IMPL+MAN*12*U;
      var mx=Math.max(now,1);$id('sB0').style.width=(100*now/mx).toFixed(1)+'%';$id('sB1').style.width=(100*with1/mx).toFixed(1)+'%';
      setT('sN0',inr(now));setT('sN1',inr(with1));setT('sSave',inr(save));setT('sHrs',Math.round(hrs*Rr).toLocaleString('en-IN'));setT('sCost',inr(cost));
      var pay=save>0?cost/(save/12):Infinity;setT('sPay',!isFinite(pay)?'—':pay<1?'< 1 month':pay>36?'> 36 months':Math.ceil(pay)+' months');
      if(A!==lastA){lastA=A;var dt=$id('sDots');dt.innerHTML=new Array(A+1).join('<i></i>');var is=$$('i',dt);if(R){is.forEach(function(x,i){x.classList.add(i?'gone':'k');});}else setTimeout(function(){is.forEach(function(x,i){setTimeout(function(){x.classList.add(i?'gone':'k');},i*45);});},250);}}
    ids.forEach(function(k){el[k].addEventListener('input',run);});run();})();

  /* ======================================================================
     TOOL 2 · Conditional Access simulator
     ====================================================================== */
  (function(){var qU=$id('qU'),qD=$id('qD'),qL=$id('qL'),qA=$id('qA'),qR=$id('qR');if(!qU)return;var pk=$id('caPk'),box=$id('caBox'),anim=null;
    function decide(u,dv,l,a,r){var rs=[],p2=false,dec='allow',why;
      if(r==='high'){p2=true;dec='blk';why='High sign-in risk — the risk-based policy blocks the sign-in until an admin reviews it.';rs.push(['Risk-based Conditional Access (P2)','#c0392b']);}
      else if(a==='portal'&&u!=='admin'){dec='blk';why='Admin portals are limited to accounts holding an admin role.';rs.push(['Block non-admins from admin portals','#c0392b']);}
      else if(u==='admin'&&dv==='byod'){dec='blk';why='Admins must sign in from a compliant company device.';rs.push(['Admins: compliant device required','#c0392b']);}
      else if(u==='guest'&&a==='fin'){dec='blk';why='Guests have no access to finance systems unless an access package grants it.';rs.push(['Guests: finance apps not assigned','#c0392b']);}
      else if(l==='abroad'&&a==='fin'){dec='blk';why='Finance apps are allowed from India only in this sample policy set.';rs.push(['Finance: allowed countries = India','#c0392b']);}
      else if(a==='fin'&&dv==='byod'){dec='dev';why='Finance apps need a compliant, managed device. The user is asked to enrol the device first.';rs.push(['Finance: require compliant device','#0066FF']);}
      else{
        if(u==='admin'){dec='mfa';why='Admins always step up with phishing-resistant MFA (passkey or FIDO2 key).';rs.push(['Admins: phishing-resistant MFA','#FF8A00']);}
        if(l==='abroad'){dec='mfa';why='Unusual country — the user must pass MFA before access.';rs.push(['Unfamiliar location: require MFA','#FF8A00']);}
        if(r==='med'){p2=true;dec='mfa';why='Medium sign-in risk — step-up MFA clears it.';rs.push(['Medium risk: require MFA (P2)','#FF8A00']);}
        if(u==='guest'){dec='mfa';why=why||'Guests complete MFA under your tenant\'s policy.';rs.push(['Guests: require MFA','#FF8A00']);}
        if(dv==='byod'){if(dec==='allow'){dec='mfa';why='Personal device — MFA is required and the session is web-only, with no downloads.';}rs.push(['Unmanaged device: web-only session','#FF8A00']);}
        if(dec==='allow'){why='Known user on a compliant company device in the office — access is granted; MFA is remembered on this device.';rs.push(['Baseline: MFA registered, compliant device','#16a34a']);}}
      return {dec:dec,why:why,rs:rs,p2:p2};}
    var LBL={allow:'Allow',mfa:'Require MFA',dev:'Enrol device',blk:'Block'},HD={allow:'Access granted',mfa:'Step-up: require MFA',dev:'Compliant device required',blk:'Access blocked'};
    function sig(id,cls){var e=$id(id);if(e)e.setAttribute('class',cls);}
    function run(){var u=segV(qU),dv=segV(qD),l=segV(qL),a=segV(qA),r=segV(qR),o=decide(u,dv,l,a,r);
      sig('cs0',u==='guest'?'wn':'ok');sig('cs1',dv==='byod'?'wn':'ok');sig('cs2',l==='abroad'?'bd':l==='home'?'wn':'ok');sig('cs3',a==='portal'?'wn':a==='fin'?'wn':'ok');sig('cs4',r==='high'?'bd':r==='med'?'wn':'ok');
      setT('caH',HD[o.dec]);setT('caW',o.why);$id('caR').innerHTML=o.rs.map(function(x){return '<li style="--c:'+x[1]+'">'+esc(x[0])+'</li>';}).join('');
      setT('caLic','Licence: '+(o.p2?'risk-based policies need Entra ID P2 (₹755/user/month) or Microsoft 365 E5.':'Conditional Access needs Entra ID P1 (₹528/user/month) — included in Business Premium, E3 and E5.')+' Sample policy set; XcellHost tailors yours.');
      var tx=$id('caTxt');box.setAttribute('class','out '+(o.dec==='allow'?'':o.dec==='mfa'?'mfa':o.dec==='dev'?'dev':'blk'));
      if(R){setT(tx,LBL[o.dec]);pk.setAttribute('cx','300');return;}
      setT(tx,'…');if(anim)cancelAnimationFrame(anim);var t0=performance.now();
      (function st(now){var u2=eio((now-t0)/700);pk.setAttribute('cx',(74+226*u2).toFixed(1));if(u2<1)anim=requestAnimationFrame(st);else{setT(tx,LBL[o.dec]);anim=null;}})(t0);}
    [qU,qD,qL,qA,qR].forEach(function(e){e.addEventListener('change',run);});run();})();
})();

