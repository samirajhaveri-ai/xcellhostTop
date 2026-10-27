
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
  function num(n){return Math.round(n).toLocaleString('en-IN');}
  function dark(){return d.documentElement.getAttribute('data-theme')==='dark';}
  function segV(el){if(!el)return null;var b=$('button.on',el);return el.dataset.value||(b?b.getAttribute('data-v'):null);}
  function setSeg(el,v){if(!el)return;$$('button',el).forEach(function(x){var on=x.getAttribute('data-v')===String(v);x.classList.toggle('on',on);x.setAttribute('aria-pressed',on);});el.dataset.value=String(v);el.dispatchEvent(new CustomEvent('change',{bubbles:true}));}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function iv(id,def){var e=$id(id);var v=e?parseFloat(e.value):NaN;return isNaN(v)?def:v;}
  var MONO='"IBM Plex Mono"',SANS='"IBM Plex Sans"',DISP='Sora';
  var BL='#0066FF',OR='#FF8A00',NV='#0B132B',GR='#16a34a',RD='#c0392b';
  function th(){return dark()?{ink:'#EAF1FF',mut:'#93A4C4',line:'rgba(255,255,255,.16)',soft:'rgba(255,255,255,.07)',surf:'#13224A',bl:'#5C9DFF',ot:'#FFB15C',gr:'#5FE08D',rd:'#ff8a80'}:{ink:NV,mut:'#55617A',line:'rgba(11,19,43,.15)',soft:'rgba(11,19,43,.05)',surf:'#ffffff',bl:BL,ot:'#C46A00',gr:GR,rd:RD};}

  /* ===== one shared rAF ticker ===== */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function watch(el,on){if(!el)return;var vis=false;XH.whenVisible(el,function(v){vis=v;on(v&&!d.hidden);});d.addEventListener('visibilitychange',function(){on(vis&&!d.hidden);});}
  function once(el,fn){if(!el)return;var done=false;XH.whenVisible(el,function(v){if(v&&!done){done=true;fn();}});}

  /* ===== canvas helpers ===== */
  function fitC(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function txt(c,s,x,y,font,col,al){c.font=font;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  var GA=1;function ga(c,a){c.globalAlpha=clamp(a,0,1)*GA;}
  function pill(c,s,x,y,font,bg,fg,al){c.font=font;var w=c.measureText(s).width+14,h=18,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,9);c.fillStyle=bg;c.fill();txt(c,s,x0+7,y+.5,font,fg);return w;}
  function opill(c,s,x,y,font,col,al){c.font=font;var w=c.measureText(s).width+14,h=18,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,9);c.strokeStyle=col;c.lineWidth=1.4;c.stroke();txt(c,s,x0+7,y+.5,font,col);return w;}
  function stamp(c,s,x,y,t0,t,col,fs){if(t<t0)return;var u=spring((t-t0)/600),k=lerp(1.7,1,clamp(u,0,1.2));c.save();c.translate(x,y);c.rotate(-.04);c.scale(k,k);ga(c,(t-t0)/180);var f='800 '+fs+'px '+MONO;c.font=f;var w=c.measureText(s).width+18;rr(c,-w/2,-12,w,24,5);c.fillStyle=dark()?'rgba(10,20,44,.96)':'rgba(255,255,255,.97)';c.fill();c.strokeStyle=col;c.lineWidth=2;c.stroke();txt(c,s,0,1,f,col,'center');c.restore();ga(c,1);}
  function tick(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(x-s*.45,y);c.lineTo(x-s*.1,y+s*.35);c.lineTo(x+s*.5,y-s*.35);c.stroke();c.lineCap='butt';}
  function cross(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.lineCap='round';c.beginPath();c.moveTo(x-s*.4,y-s*.4);c.lineTo(x+s*.4,y+s*.4);c.moveTo(x+s*.4,y-s*.4);c.lineTo(x-s*.4,y+s*.4);c.stroke();c.lineCap='butt';}
  function packet(c,x1,y1,x2,y2,u,col,arc){if(u<=0||u>=1)return;var A=arc===undefined?8:arc;
    for(var k=4;k>0;k--){var e2=eio(clamp(u-k*.035,0,1));ga(c,.12*(5-k));c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e2),lerp(y1,y2,e2)-Math.sin(e2*Math.PI)*A,2.8,0,TAU);c.fill();}
    var e=eio(u);ga(c,1);c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A,4.2,0,TAU);c.fill();c.fillStyle='rgba(255,255,255,.85)';c.beginPath();c.arc(lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A,1.5,0,TAU);c.fill();}
  function card(c,x,y,w,h,T,stroke){rr(c,x,y,w,h,10);c.fillStyle=T.surf;c.fill();c.strokeStyle=stroke||T.line;c.lineWidth=stroke?1.8:1.1;c.stroke();}
  function avatar(c,x,y,r,col,ini){c.fillStyle=col;c.beginPath();c.arc(x,y,r,0,TAU);c.fill();txt(c,ini,x,y+.5,'800 '+Math.round(r*.85)+'px '+DISP,'#fff','center');}
  function lockI(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.arc(x,y-s*.12,s*.26,Math.PI,0);c.stroke();rr(c,x-s*.38,y-s*.12,s*.76,s*.56,3);c.fillStyle=col;c.fill();}
  function shield(c,x,y,s,col,fill){c.beginPath();c.moveTo(x,y-s*.55);c.lineTo(x+s*.45,y-s*.35);c.lineTo(x+s*.4,y+s*.15);c.quadraticCurveTo(x+s*.25,y+s*.45,x,y+s*.6);c.quadraticCurveTo(x-s*.25,y+s*.45,x-s*.4,y+s*.15);c.lineTo(x-s*.45,y-s*.35);c.closePath();if(fill){c.fillStyle=fill;c.fill();}c.strokeStyle=col;c.lineWidth=2;c.stroke();}

  /* ======================================================================
     HERO · five governance scenes on one canvas (sample tenant)
     ====================================================================== */
  var DUR=5500,FADE=480;
  var SC=[
    {cap:'Quarterly access review',ph:'Reviewing',lt:'CAMPAIGN LOG',k:'Access review · Q3',
     lg:[[300,'Day 1','Q3 review opened · 6 members',''],[1500,'Day 1','ML helpers: 4 approve · 2 deny','w'],[3100,'Day 6','Manager accepts recommendations',''],[4300,'Day 6','2 accounts removed · auto-apply','g']]},
    {cap:'Leaver auto-revoke',ph:'Leaver',lt:'WORKFLOW RUN',k:'Lifecycle workflow',
     lg:[[300,'18:00','HR: last working day recorded','w'],[1300,'18:00','Leaver workflow started',''],[2400,'18:01','Sessions revoked · groups removed',''],[3900,'18:02','6 of 6 app accounts disabled','g']]},
    {cap:'Inactive & outlier clean-up',ph:'Insights',lt:'REVIEW INSIGHTS',k:'Review helpers',
     lg:[[400,'Scan','5 people × 5 apps analysed',''],[2300,'Insight','Neha · inactive 96 days','w'],[2600,'Insight','Ravi · Payroll · peer outlier','w'],[3600,'Apply','4 entitlements removed','g']]},
    {cap:'SoD conflict blocked',ph:'Request',lt:'REQUEST TRAIL',k:'Separation of duties',
     lg:[[300,'11:20','Request: Procurement · Buyer',''],[1800,'11:20','SoD check vs AP Approver',''],[2400,'11:20','Incompatible packages','r'],[3400,'11:21','Blocked · manager notified','g']]},
    {cap:'Audit evidence pack',ph:'Evidence',lt:'EVIDENCE BUILD',k:'Audit evidence',
     lg:[[300,'Q3','Collecting review & workflow history',''],[2000,'Q3','Mapped to 4 control areas',''],[3400,'Q3','Evidence pack exported · PDF + CSV','g'],[4300,'Q3','Audit logs streaming to SIEM','g']]}
  ];
  var hero=$id('igHero'),cv=$id('igCv'),scr=$id('igScr'),dotsEl=$id('igDots'),con=$id('igCon');
  var dots=dotsEl?$$('button',dotsEl):[],logEl=$id('igLog'),ring=$id('igRing'),ringV=$id('igRingV'),vb=$id('igVb'),vk=$id('igVk'),vs=$id('igVs');

  /* --- scene 0: quarterly access review --- */
  var P0=[['A. Mehta','AM','signed in 2 d ago',1],['R. Iyer','RI','signed in today',1],['S. Khan','SK','inactive 104 d',0],['P. Nair','PN','signed in 5 d ago',1],['V. Rao','VR','contract ended',0],['K. Shah','KS','signed in 1 d ago',1]];
  function s0(c,w,h,t){var T=th(),nar=w<380,x0=12,x1=w-12,top=16;
    txt(c,nar?'Q3 · SAP FI role':'Q3 review · SAP FI role · 6 members',x0,top+6,'800 '+(nar?10:11.5)+'px '+DISP,T.ink);
    var dec=0;P0.forEach(function(p,i){if(t>3200+i*140)dec++;});
    rr(c,x0,top+20,x1-x0,5,3);c.fillStyle=T.soft;c.fill();var pf=(x1-x0)*(t<3200?seg(600,2600,t)*.33:.33+.67*dec/6);rr(c,x0,top+20,Math.max(5,pf),5,3);c.fillStyle=dec===6?T.gr:BL;c.fill();
    if(t>2500&&t<3400){var pu=.5+.5*Math.sin(t/110);ga(c,.75+.25*pu);pill(c,nar?'ACCEPT ALL':'ACCEPT 6 RECOMMENDATIONS',x1,top+6,'800 '+(nar?8:8.5)+'px '+MONO,OR,'#fff','right');ga(c,1);}
    var y0=top+36,rh=(h-y0-10)/6;
    P0.forEach(function(p,i){var y=y0+i*rh,cy=y+rh/2-2,au=eo(seg(100+i*90,500+i*90,t));if(au<=0)return;
      var applied=t>3200+i*140,denied=!p[3];ga(c,au*(applied&&denied?lerp(1,.45,seg(3200+i*140,3600+i*140,t)):1));
      rr(c,x0,y,x1-x0,rh-5,9);c.fillStyle=applied&&!denied?(dark()?'rgba(95,224,141,.08)':'rgba(22,163,74,.06)'):T.soft;c.fill();
      avatar(c,x0+16,cy,nar?9:10.5,denied?T.mut:BL,p[1]);
      txt(c,p[0],x0+32,cy-(nar?6:7),'700 '+(nar?9.5:10.5)+'px '+SANS,T.ink);
      txt(c,p[2],x0+32,cy+(nar?6:7),'500 '+(nar?8:8.5)+'px '+MONO,denied?T.ot:T.mut);
      if(applied&&denied){c.strokeStyle=T.rd;c.lineWidth=1.4;var lu=seg(3200+i*140,3550+i*140,t);c.beginPath();c.moveTo(x0+32,cy-(nar?6:7));c.lineTo(x0+32+lu*(nar?50:62),cy-(nar?6:7));c.stroke();}
      var ru=seg(800+i*260,1100+i*260,t);if(ru>0){ga(c,au*eo(ru));
        if(applied){if(denied)pill(c,'removed',x1-8,cy,'700 '+(nar?7.5:8.5)+'px '+MONO,RD,'#fff','right');else{c.fillStyle=GR;c.beginPath();c.arc(x1-16,cy,8,0,TAU);c.fill();tick(c,x1-16,cy,9,'#fff');}}
        else opill(c,denied?'✕ Deny':'✓ Approve',x1-8,cy,'700 '+(nar?7.5:8.5)+'px '+MONO,denied?T.rd:T.gr,'right');}
      ga(c,1);});
    stamp(c,'REVIEW COMPLETE',w/2,h*.55,4500,t,T.gr,nar?10:11);
    var f=t<3200?.33*seg(600,2600,t):.33+.67*dec/6;
    return {f:f,v:t<800?'Campaign opened':t<2500?'Recommendations ready':t<3200?'Manager reviewing':dec<6?'Applying decisions':'Review complete',s:t<3200?'reviewer: Finance manager':'4 kept · 2 removed',c:t<2500?'':t<4300?'o':'g',n:t<3200?'0/6':dec+'/6'};}

  /* --- scene 1: leaver auto-revoke --- */
  var APPS1=['Microsoft 365','Teams','SAP','CRM','VPN','HRMS'];
  function s1(c,w,h,t){var T=th(),nar=w<380,midY=h/2;
    var hw=nar?84:112,hx=10,hy=midY-34;
    card(c,hx,hy,hw,68,T,t>300?OR:null);txt(c,'HR · EXIT',hx+9,hy+13,'800 '+(nar?7.5:8.5)+'px '+MONO,T.ot);
    avatar(c,hx+18,hy+38,nar?9:11,T.mut,'DJ');txt(c,nar?'EMP-30418':'EMP-30418',hx+34,hy+33,'700 '+(nar?8:9.5)+'px '+MONO,T.ink);txt(c,nar?'exit today':'last day · today',hx+34,hy+47,'500 '+(nar?7.5:8.5)+'px '+MONO,T.mut);
    var cx=nar?w*.43:w*.42,cr=nar?24:30;
    var gx0=w*.58,gw=w-gx0-10,cols=2,tw=(gw-8)/2,thh=nar?34:Math.min(56,(h-60)/3-8),rows=3,gh=rows*thh+(rows-1)*8,gy=midY-gh/2;
    packet(c,hx+hw,midY,cx-cr,midY,seg(300,1000,t),OR,10);
    var revoked=0,tiles=[];
    APPS1.forEach(function(a,i){var r=Math.floor(i/cols),k=i%cols,x=gx0+k*(tw+8),y=gy+r*(thh+8);tiles.push([x,y]);
      var ts=1300+i*380;c.strokeStyle=T.line;c.lineWidth=1;c.setLineDash([3,4]);c.beginPath();c.moveTo(cx+cr,midY);c.lineTo(x,y+thh/2);c.stroke();c.setLineDash([]);
      packet(c,cx+cr,midY,x,y+thh/2,seg(ts,ts+420,t),RD,0);if(t>ts+420)revoked++;});
    // hub
    c.fillStyle=NV;c.beginPath();c.arc(cx,midY,cr,0,TAU);c.fill();c.strokeStyle=t>1000?OR:BL;c.lineWidth=2.4;c.stroke();
    if(t>1000&&t<4000){var a=(t/260)%TAU;c.strokeStyle=OR;c.lineWidth=3;c.beginPath();c.arc(cx,midY,cr+5,a,a+1.6);c.stroke();}
    txt(c,String(6-revoked),cx,midY-4,'800 '+(nar?15:18)+'px '+DISP,'#fff','center');txt(c,'active',cx,midY+11,'600 '+(nar?7:8)+'px '+MONO,'#9cc3ff','center');
    txt(c,nar?'Leaver flow':'Leaver workflow',cx,midY+cr+14,'700 '+(nar?8:9)+'px '+MONO,T.mut,'center');
    APPS1.forEach(function(a,i){var x=tiles[i][0],y=tiles[i][1],ts=1300+i*380+420,off=t>ts,u=eo(seg(ts,ts+300,t));
      rr(c,x,y,tw,thh,8);c.fillStyle=off?T.soft:T.surf;c.fill();c.strokeStyle=off?T.line:BL;c.lineWidth=off?1:1.6;c.stroke();
      ga(c,off?.55:1);txt(c,tw<104&&a==='Microsoft 365'?'M365':a,x+8,y+thh/2-(nar?5:6),'700 '+(nar?8.5:9.5)+'px '+SANS,T.ink);ga(c,1);
      txt(c,off?'disabled':'active',x+8,y+thh/2+(nar?7:8),'600 '+(nar?7:8)+'px '+MONO,off?T.rd:T.gr);
      if(off){c.save();c.translate(x+tw-11,y+11);var k=spring(u);c.scale(k,k);lockI(c,0,0,nar?11:13,RD);c.restore();}});
    stamp(c,'0 ORPHANED ACCOUNTS',w/2,nar?h-16:h-18,4300,t,T.gr,nar?9.5:11);
    return {f:t<1300?.15*seg(300,1300,t):.15+.85*revoked/6,v:t<1000?'Exit recorded in HR':t<1300?'Workflow triggered':revoked<6?'Revoking · '+revoked+'/6 apps':'All access removed',s:'EMP-30418 · sample leaver',c:t<1300?'o':revoked<6?'o':'g',n:revoked+'/6'};}

  /* --- scene 2: access matrix · inactive + peer outlier --- */
  var NM2=['Asha','Ravi','Neha','Imran','Kiran'],AP2=['Mail','Finance','SAP FI','Payroll','Admin'];
  var M2=[[1,1,1,0,0],[1,1,1,1,0],[1,1,1,0,0],[1,1,1,0,0],[1,1,1,0,1]];
  function rm2(r,k){return (r===2&&M2[r][k])||(r===1&&k===3);}
  function s2(c,w,h,t){var T=th(),nar=w<380,lx=nar?46:58,top=nar?40:44,gw=w-lx-(nar?12:110),cw=gw/5,ch=Math.min(34,(h-top-16)/5),cs=Math.min(cw,ch)-8;
    AP2.forEach(function(a,k){txt(c,nar?a.slice(0,5):a,lx+k*cw+cw/2,top-12,'700 '+(nar?7.5:8.5)+'px '+MONO,T.mut,'center');});
    var scan=seg(700,2200,t),sx=lx+scan*gw,removed=0;
    NM2.forEach(function(n,r){var y=top+r*ch+ch/2,inact=r===2&&t>2300;
      ga(c,inact?.6:1);txt(c,n,lx-8,y,'700 '+(nar?8.5:9.5)+'px '+SANS,T.ink,'right');ga(c,1);
      for(var k=0;k<5;k++){var x=lx+k*cw+cw/2,au=eo(seg(100+(r*5+k)*30,400+(r*5+k)*30,t));
        rr(c,x-cs/2,y-cs/2,cs,cs,5);c.strokeStyle=T.line;c.lineWidth=1;c.stroke();
        if(!M2[r][k]||au<=0)continue;
        var flag=rm2(r,k)&&t>(r===2?2300:2600),rmu=rm2(r,k)?seg(3200+k*80,3700+k*80,t):0;if(rmu>=1){removed++;cross(c,x,y,cs*.5,T.mut);continue;}
        var s=cs*au*(1-rmu);var col=flag?OR:(x<sx&&t<2400?T.bl:BL);
        ga(c,flag?1:(t>700&&x<sx&&t<2300?1:.8));rr(c,x-s/2,y-s/2,s,s,4);c.fillStyle=col;c.fill();ga(c,1);
        if(flag&&rmu===0&&r===1){var pu=(t%900)/900;ga(c,.6*(1-pu));c.strokeStyle=OR;c.lineWidth=2;rr(c,x-cs/2-pu*6,y-cs/2-pu*6,cs+pu*12,cs+pu*12,6);c.stroke();ga(c,1);}}
      if(r===2&&t>2300&&!nar){var tu=eo(seg(2300,2600,t));ga(c,tu);pill(c,'inactive 96 d',lx+gw+8,y,'700 8.5px '+MONO,OR,'#fff');ga(c,1);}
      if(r===1&&t>2600&&!nar){var tu2=eo(seg(2600,2900,t));ga(c,tu2);pill(c,'peer outlier',lx+gw+8,y,'700 8.5px '+MONO,OR,'#fff');ga(c,1);}});
    if(t>700&&t<2300){ga(c,.5);c.strokeStyle=T.bl;c.lineWidth=2;c.beginPath();c.moveTo(sx,top-4);c.lineTo(sx,top+5*ch);c.stroke();ga(c,1);}
    if(nar&&t>2300)pill(c,t<3200?'1 INACTIVE · 1 OUTLIER':'4 REMOVED',w/2,h-12,'800 8px '+MONO,t<3200?OR:GR,'#fff','center');
    stamp(c,'CLEANED UP',lx+gw/2,top+ch*2.5,4400,t,T.gr,nar?10:11);
    return {f:t<2300?.5*scan:t<3200?.6:.6+.4*removed/4,v:t<2300?'Scanning access':t<3200?'2 findings':'Removed '+removed+' entitlements',s:'Finance team · sample',c:t<2300?'':t<3700?'o':'g',n:t<3200?(t<2300?'…':'2'):String(removed)};}

  /* --- scene 3: separation of duties --- */
  function s3(c,w,h,t){var T=th(),nar=w<380,midY=h*.46,ux=nar?36:52;
    avatar(c,ux,midY-6,nar?15:18,BL,'MS');txt(c,'M. Shah',ux,midY+(nar?18:22),'700 '+(nar?8.5:9.5)+'px '+SANS,T.ink,'center');
    var hx=ux-(nar?28:38),hy=midY+(nar?30:36),hw=nar?92:120;rr(c,hx,hy,hw,nar?32:36,8);c.fillStyle=dark()?'rgba(92,157,255,.14)':'rgba(0,102,255,.08)';c.fill();c.strokeStyle=BL;c.lineWidth=1.4;c.stroke();
    txt(c,'HOLDS',hx+8,hy+10,'800 7px '+MONO,T.mut);txt(c,nar?'AP Approver':'Finance · AP Approver',hx+8,hy+(nar?22:25),'700 '+(nar?8:9)+'px '+SANS,T.ink);
    var gx=w*(nar?.5:.5),gs=nar?40:50;
    var conflict=t>2300,checking=t>1700&&t<2300;
    shield(c,gx,midY,gs,conflict?RD:(checking?OR:BL),conflict?(dark()?'rgba(255,138,128,.15)':'rgba(192,57,43,.08)'):T.surf);
    if(checking){var a=(t/120)%TAU;c.strokeStyle=OR;c.lineWidth=2.4;c.beginPath();c.arc(gx,midY,gs*.75,a,a+1.8);c.stroke();}
    txt(c,'SoD',gx,midY+1,'800 '+(nar?10:12)+'px '+MONO,conflict?T.rd:T.ink,'center');
    if(t>1700){var ru=eo(seg(1700,2000,t));ga(c,ru);txt(c,nar?'Buyer ✕ AP Approver':'rule: Buyer ✕ AP Approver',gx,midY-gs*.85,'600 '+(nar?7.5:8.5)+'px '+MONO,T.mut,'center');ga(c,1);}
    // request card travels
    var rw=nar?90:122,rh=nar?36:40,startX=w-rw-10,gateX=gx+gs*.6,rx;
    if(t<1700)rx=lerp(startX,gateX,eio(seg(300,1700,t)));else if(t<2300)rx=gateX;else rx=lerp(gateX,startX,eo(seg(2300,3000,t)));
    var ry=midY-rh/2,rc=conflict?RD:BL;
    if(t>2300&&t<2600){var sh=Math.sin((t-2300)/22)*3*(1-seg(2300,2600,t));rx+=sh;}
    card(c,rx,ry,rw,rh,T,rc);txt(c,conflict?'BLOCKED':'REQUEST',rx+8,ry+11,'800 7px '+MONO,conflict?T.rd:T.mut);txt(c,nar?'Proc. · Buyer':'Procurement · Buyer',rx+8,ry+(nar?25:27),'700 '+(nar?8:9)+'px '+SANS,T.ink);
    if(conflict)pill(c,'SOD CONFLICT',gx,midY+gs*.95,'800 '+(nar?8:9)+'px '+MONO,RD,'#fff','center');
    if(t>3300){var lu=eo(seg(3300,3700,t));ga(c,lu);var lw=nar?w-24:w*.52,lx=nar?12:w-lw-12,ly=h-(nar?34:38);rr(c,lx,ly,lw,26,8);c.fillStyle=T.soft;c.fill();c.fillStyle=GR;c.beginPath();c.arc(lx+13,ly+13,7,0,TAU);c.fill();tick(c,lx+13,ly+13,8,'#fff');
      txt(c,nar?'Logged · manager notified':'Logged for audit · manager notified',lx+26,ly+13,'600 '+(nar?8:9)+'px '+MONO,T.ink);ga(c,1);}
    stamp(c,'BLOCKED AT REQUEST',w/2,nar?24:26,4300,t,T.rd,nar?9.5:11);
    return {f:t<1700?.35*seg(300,1700,t):t<2300?.55:t<3300?.8:1,v:t<1700?'Access requested':t<2300?'Checking SoD rules':t<3300?'Conflict found':'Request blocked',s:'M. Shah · sample requester',c:t<1700?'':t<2300?'o':t<3300?'r':'g',n:t<2300?'?':'✕'};}

  /* --- scene 4: audit evidence pack --- */
  var SRC4=[['Review decisions','1,284'],['Workflow runs','212'],['Audit log events','38k']];
  var CHK4=[['RBI · periodic user-access review','RBI · access review'],['DPDP · access minimisation','DPDP · minimisation'],['ISO 27001 · 5.18 access rights','ISO 27001 · 5.18'],['CERT-In · logs to SIEM, 180 days','CERT-In · 180-d logs']];
  function s4(c,w,h,t){var T=th(),nar=w<380,sx=10,sw=nar?96:128,sh=nar?40:46,gap=(h-28-3*sh)/2,top=14;
    var dx=sx+sw+(nar?22:36),dw=w-dx-10,dy=top,dh=h-top-12;
    SRC4.forEach(function(s,i){var y=top+i*(sh+gap),au=eo(seg(100+i*150,500+i*150,t));ga(c,au);
      card(c,sx,y,sw,sh,T);txt(c,s[0],sx+9,y+sh/2-(nar?6:7),'700 '+(nar?8:9)+'px '+SANS,T.ink);txt(c,s[1]+' · sample',sx+9,y+sh/2+(nar?7:8),'600 '+(nar?7.5:8.5)+'px '+MONO,T.mut);ga(c,1);
      for(var k=0;k<2;k++){var u=((t+i*300+k*900)%1800)/1800;if(t<2600)packet(c,sx+sw,y+sh/2,dx,dy+30+i*14,u,i===2?OR:BL,0);}});
    card(c,dx,dy,dw,dh,T,t>3400?GR:BL);
    txt(c,'EVIDENCE PACK · Q3',dx+10,dy+14,'800 '+(nar?7.5:8.5)+'px '+MONO,T.mut);
    var lines=Math.round(5*eo(seg(400,2000,t)));for(var l=0;l<lines;l++){rr(c,dx+10,dy+26+l*7,(dw-20)*(l%2?.7:.9),3,2);c.fillStyle=T.soft;c.fill();}
    var cy0=dy+(nar?66:70),crh=(dh-(nar?66:70)-8)/4;
    CHK4.forEach(function(k,i){var y=cy0+i*crh+crh/2,tt=2000+i*350,u=eo(seg(tt,tt+300,t));ga(c,.3+.7*u);
      c.fillStyle=u>=1?GR:T.soft;c.beginPath();c.arc(dx+18,y,7,0,TAU);c.fill();if(u>=1)tick(c,dx+18,y,9,'#fff');
      txt(c,nar||dw<230?k[1]:k[0],dx+31,y,'600 '+(nar?8:9.5)+'px '+SANS,T.ink);ga(c,1);});
    stamp(c,'EVIDENCE READY',dx+dw/2,dy+dh*.36,4300,t,T.gr,nar?10:11);
    var done=0;CHK4.forEach(function(k,i){if(t>2300+i*350)done++;});
    return {f:t<2000?.4*seg(100,2000,t):.4+.6*done/4,v:t<2000?'Collecting evidence':done<4?'Mapping controls · '+done+'/4':'Evidence pack ready',s:'Q3 · sample tenant',c:t<2000?'':done<4?'o':'g',n:done+'/4'};}
  var DRAW=[s0,s1,s2,s3,s4];

  var cur=0,prev=-1,tS=0,tLast=0,fadeT=FADE,paused=false,lastG={v:'',c:'_'};
  function buildLog(k){if(!logEl)return;logEl.innerHTML=SC[k].lg.map(function(e){return '<li class="'+e[3]+'"><b>'+esc(e[1])+'</b>'+esc(e[2])+'</li>';}).join('');}
  function logAt(t){if(!logEl)return;var lg=SC[cur].lg,li=logEl.children;for(var i=0;i<lg.length;i++){var on=R||t>=lg[i][0];if(li[i]&&li[i].classList.contains('in')!==on)li[i].classList.toggle('in',on);}}
  function setScene(k,user){k=(k+5)%5;if(k===cur&&!user)return;prev=cur;cur=k;tS=0;fadeT=R?FADE:0;
    dots.forEach(function(b,i){var on=i===cur;b.classList.toggle('on',on);b.classList.toggle('done',i<cur);b.setAttribute('aria-selected',on);b.style.setProperty('--p','0');});
    var S=SC[cur];setT('igCapN','0'+(cur+1));setT('igCapT',S.cap);setT('igPh',S.ph);setT('igLt',S.lt);setT(vk,S.k);buildLog(cur);lastG={v:'',c:'_'};if(R)render();}
  function gauge(g){if(!ring)return;var f=clamp(g.f,0,1);ring.style.strokeDashoffset=(100*(1-f)).toFixed(1);if(g.c!==lastG.c)ring.setAttribute('class','fg'+(g.c?' '+g.c:''));
    setT(ringV,g.n);if(g.v!==lastG.v){var was=lastG.v;setT(vb,g.v);if(was!=='')bump(vb);}setT(vs,g.s);lastG={v:g.v,c:g.c};}
  function render(){var f=cv&&fitC(cv);if(!f)return;var c=f.c,w=f.w,h=f.h;c.clearRect(0,0,w,h);
    var t=R?5200:tS,fading=prev>=0&&fadeT<FADE,g;
    if(fading){var u=fadeT/FADE;GA=1-eo(Math.min(1,u*1.4));c.globalAlpha=GA;c.save();c.translate(0,-u*10);DRAW[prev](c,w,h,5200);c.restore();GA=eo(u);c.globalAlpha=GA;c.save();c.translate(0,(1-u)*10);g=DRAW[cur](c,w,h,t);c.restore();GA=1;c.globalAlpha=1;}
    else{GA=1;g=DRAW[cur](c,w,h,t);}
    gauge(g);logAt(t);}
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
      var stg=$id('igStage');stg.addEventListener('mouseenter',function(){setPause(true);});stg.addEventListener('mouseleave',function(){setPause(false);});
      stg.addEventListener('focusin',function(){setPause(true);});stg.addEventListener('focusout',function(){setPause(false);});
      addEventListener('resize',function(){render();});
      var sx=null,sy=null;
      scr.addEventListener('pointerdown',function(e){if(e.pointerType==='touch')return;sx=e.clientX;sy=e.clientY;});
      scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))setScene(cur+(dx<0?1:-1),true);});
      scr.addEventListener('touchstart',function(e){var p=e.touches[0];sx=p.clientX;sy=p.clientY;},{passive:true});
      scr.addEventListener('touchend',function(e){if(sx===null)return;var p=e.changedTouches[0],dx=p.clientX-sx,dy=p.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){setScene(cur+(dx<0?1:-1),true);setPause(false);}},{passive:true});
      dotsEl.addEventListener('keydown',function(e){var k=e.key;if(k==='ArrowRight'){setScene(cur+1,true);dots[cur].focus();e.preventDefault();}else if(k==='ArrowLeft'){setScene(cur-1,true);dots[cur].focus();e.preventDefault();}});
    }
    new MutationObserver(function(){render();}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
    window.__igScene=function(k,t){setScene(k,true);prev=-1;tS=t||0;fadeT=FADE;paused=true;render();};
  }

  /* ===== magnetic CTAs + tilt ===== */
  if(!R&&matchMedia('(hover:hover)').matches){$$('.ig-mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;b.style.transform='translate('+(x*8).toFixed(1)+'px,'+(y*6).toFixed(1)+'px)';});b.addEventListener('mouseleave',function(){b.style.transform='';});});
    $$('.ig-cc,.ig-pc').forEach(function(cd){cd.addEventListener('mousemove',function(e){var r=cd.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cd.style.transform='translateY(-4px) perspective(700px) rotateX('+(-y*5).toFixed(2)+'deg) rotateY('+(x*6).toFixed(2)+'deg)';});cd.addEventListener('mouseleave',function(){cd.style.transform='';});});}

  /* ===== sub nav active ===== */
  (function(){var links=$$('.ig-sub a');if(!links.length||!('IntersectionObserver' in window))return;var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.remove('on');});var a=map[x.target.id];if(a)a.classList.add('on');}});},{rootMargin:'-40% 0px -55% 0px'});
    Object.keys(map).forEach(function(id){var s=$id(id);if(s)io.observe(s);});})();

  /* ===== draw-once reveals ===== */
  $$('.ig-cc').forEach(function(el){once(el,function(){el.classList.add('vis');});});
  once($id('igGt'),function(){$id('igGt').classList.add('vis');});
  once($id('igStp'),function(){$id('igStp').classList.add('vis');});

  /* ===== illustration 1 · lifecycle pipeline packets ===== */
  (function(){var svg=$('#igPipe svg'),g=$id('igPk');if(!svg||!g)return;var NS='http://www.w3.org/2000/svg';
    var P=[0,1,2,3,4,5].map(function(i){return $id('igP'+i);}),L=P.map(function(p){return p.getTotalLength();});
    // trips: [colour, [path ids], start ms]
    var TR=[['#0066FF',[0,1,4],0],['#FF8A00',[0,2],1700],['#c0392b',[0,3,5],3400],['#16a34a',[4],5600]];
    var CYC=7600,LEG=900,dots=TR.map(function(tr){var cc=d.createElementNS(NS,'circle');cc.setAttribute('r',7);cc.setAttribute('fill',tr[0]);cc.setAttribute('stroke','#fff');cc.setAttribute('stroke-width','2');cc.setAttribute('opacity','0');g.appendChild(cc);return cc;});
    function draw(now){var t=now%CYC;TR.forEach(function(tr,i){var lt=t-tr[2],legs=tr[1],tot=legs.length*LEG,dot=dots[i];
      if(lt<0||lt>tot){dot.setAttribute('opacity','0');return;}
      var li=Math.min(legs.length-1,Math.floor(lt/LEG)),u=eio((lt-li*LEG)/LEG),pi=legs[li],pt=P[pi].getPointAtLength(L[pi]*u);
      dot.setAttribute('cx',pt.x.toFixed(1));dot.setAttribute('cy',pt.y.toFixed(1));dot.setAttribute('opacity',(lt<120?lt/120:lt>tot-120?(tot-lt)/120:1).toFixed(2));});}
    if(R){draw(400);return;}var on=loop(draw);watch(svg,on);})();

  /* ===== illustration 2 · review cycle ===== */
  (function(){var box=$id('igCyc');if(!box)return;var NS='http://www.w3.org/2000/svg',ng=$id('igCyN'),mk=$id('igCyM'),pg=$id('igCyP'),items=$$('#igCyL > div');
    var ST=[['Scope','SAP FI role · all members'],['Recommend','inactive 90 d · peer outliers'],['Decide','manager → app owner · 14 days'],['Apply','denied access auto-removed'],['Evidence','history exported for audit']];
    var nodes=ST.map(function(s,i){var a=-Math.PI/2+i*TAU/5,x=160+118*Math.cos(a),y=160+118*Math.sin(a),gg=d.createElementNS(NS,'g');gg.setAttribute('class','nd');gg.innerHTML='<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="17"/><text x="'+x.toFixed(1)+'" y="'+y.toFixed(1)+'">0'+(i+1)+'</text>';ng.appendChild(gg);return gg;});
    var last=-1;
    function step(k){if(k===last)return;last=k;nodes.forEach(function(n,i){n.setAttribute('class','nd'+(i===k?' on':i<k?' done':''));});items.forEach(function(it,i){it.classList.toggle('on',i===k);});
      setT('igCyS','STEP '+(k+1)+' OF 5');setT('igCyT',ST[k][0]);setT('igCyD',ST[k][1]);}
    function draw(now){var u=(now%12000)/12000,a=-Math.PI/2+u*TAU;mk.setAttribute('cx',(160+118*Math.cos(a)).toFixed(1));mk.setAttribute('cy',(160+118*Math.sin(a)).toFixed(1));pg.style.strokeDashoffset=(100*(1-u)).toFixed(2);step(Math.min(4,Math.floor(u*5+.02)));}
    items.forEach(function(it,i){it.addEventListener('mouseenter',function(){step(i);});});
    if(R){pg.style.strokeDashoffset='0';mk.setAttribute('cx','160');mk.setAttribute('cy','42');step(0);return;}
    var on=loop(draw);watch(box,on);})();

  /* ===== configurator ===== */
  var PR={gov:{m:528,y:6125},p1:{m:528,y:6125},p2:{m:755,y:8765},qs:99999,pro:199999,mng:24999};
  var cUsers=$id('cUsers'),cBill=$id('cBill'),cPre=$id('cPre'),cImp=$id('cImp'),cMng=$id('cMng');
  var BC={gov:'#0066FF',pre:'#7FB0FF',imp:'#FF8A00',mng:'#16a34a'};
  function calc(){var U=Math.max(1,Math.round(iv('cUsers',1))),b=segV(cBill)||'m',pre=segV(cPre)||'have',imp=segV(cImp)||'none',m=cMng&&cMng.checked,items=[],per=b==='m'?'month':'year';
    items.push({key:'iga-gov-'+b,name:'Microsoft Entra ID Governance',sub:'per user / '+per+' · annual commitment',unit:PR.gov[b],qty:U,c:'gov'});
    if(pre==='p1'||pre==='p2')items.push({key:'iga-'+pre+'-'+b,name:'Microsoft Entra ID '+pre.toUpperCase(),sub:'prerequisite · per user / '+per,unit:PR[pre][b],qty:U,c:'pre'});
    if(imp!=='none')items.push({key:'iga-imp-'+imp,name:imp==='qs'?'IGA Quick Start (implementation)':'IGA Professional (implementation)',sub:'one-time · indicative*',unit:PR[imp],qty:1,c:'imp'});
    if(m)items.push({key:'iga-mng',name:'Managed review operations',sub:'per month · indicative*',unit:PR.mng,qty:1,c:'mng'});
    var sub=items.reduce(function(a,i){return a+i.unit*i.qty;},0);
    var licYr=items.filter(function(i){return i.c==='gov'||i.c==='pre';}).reduce(function(a,i){return a+i.unit*i.qty*(b==='m'?12:1);},0);
    return {U:U,b:b,pre:pre,imp:imp,m:m,items:items,sub:sub,gst:sub*.18,tot:sub*1.18,licYr:licYr};}
  function paint(){if(!cUsers)return;var s=calc();
    setT('cName',(s.imp==='qs'?'IGA Quick Start':s.imp==='pro'?'IGA Professional':'ID Governance licences')+' × '+num(s.U)+' users');
    $id('cList').innerHTML=s.items.map(function(i){return '<li><span><i style="background:'+BC[i.c]+'"></i>'+esc(i.name)+(i.qty>1?' × '+num(i.qty):'')+'</span><b>'+inr(i.unit*i.qty)+'</b></li>';}).join('');
    $id('cBars').innerHTML=s.items.map(function(i){return '<i style="width:'+(s.sub?(i.unit*i.qty/s.sub*100):0).toFixed(2)+'%;background:'+BC[i.c]+'"></i>';}).join('');
    var t=$id('cTot'),was=t.textContent;setT('cSub',inr(s.sub));setT('cGst',inr(s.gst));setT(t,inr(s.tot));if(was!==t.textContent)bump(t);
    setT('cYr','Licences per year: '+inr(s.licYr)+(s.m?' · managed operations '+inr(PR.mng*12)+'/year':'')+' · excl. GST');
    var h=$id('cHint'),msg='',warn=false;
    if(s.imp==='qs'){msg='Quick Start covers up to 500 users*.';if(s.U>500){msg='Over 500 users — IGA Professional is the better fit*.';warn=true;}}
    else if(s.imp==='pro'){msg='Professional covers up to 2,000 users*.';if(s.U>2000){msg='Above 2,000 users we quote after discovery.';warn=true;}}
    else msg='Licences only — add an implementation package for design and rollout.';
    setT(h,msg);h.classList.toggle('w',warn);}
  if(cUsers){[cBill,cPre,cImp].forEach(function(e){e.addEventListener('change',paint);e.addEventListener('click',function(){setTimeout(paint,0);});});
    cUsers.addEventListener('input',paint);cUsers.addEventListener('change',paint);cMng.addEventListener('change',paint);paint();
    $id('oAdd').addEventListener('click',function(){var s=calc();s.items.forEach(function(i){XH.cart.add({key:i.key,name:i.name,sub:i.sub,price:i.unit,qty:i.qty});});});
    $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-pick');if(k==='mng'){cMng.checked=true;}else setSeg(cImp,k);paint();var cf=$id('configure');if(cf)cf.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});XH.flash&&XH.flash($('.ig-cfo'));});});}

  /* ===== tool 1 · review effort ===== */
  (function(){var ids=['eUsers','eEnt','eMin','eAdm','eRec','eRate'],fq=$id('eFreq');if(!fq)return;
    function run(){var U=iv('eUsers',0),E=iv('eEnt',0),F=+(segV(fq)||4),mn=iv('eMin',2),adm=iv('eAdm',40),rec=iv('eRec',60)/100,rate=iv('eRate',900);
      setT('eMinV',mn.toFixed(1));setT('eAdmV',String(adm));setT('eRecV',Math.round(rec*100)+'%');
      var D=U*E*F,man=D*mn/60+adm*F,ig=D*(rec*mn*.25+(1-rec)*mn)/60+adm*F*.2,sv=Math.max(0,man-ig);
      setT('eSaved',num(sv)+' h');setT('eVal',inr(sv*rate));setT('eHM',num(man)+' h');setT('eHI',num(ig)+' h');setT('eDec',num(D));setT('eDays',num(sv/8));setT('eLen',num(D*rec));
      var mx=Math.max(man,1);$id('eBarM').style.width=(man/mx*100).toFixed(1)+'%';$id('eBarI').style.width=(ig/mx*100).toFixed(1)+'%';bump($id('eSaved'));}
    ids.forEach(function(i){var e=$id(i);if(e)e.addEventListener('input',run);});fq.addEventListener('change',run);fq.addEventListener('click',function(){setTimeout(run,0);});run();})();

  /* ===== tool 2 · licence sizer ===== */
  (function(){var hv=$id('zHave');if(!hv)return;var ppl=$id('zPpl'),lastL=-1;
    function run(){var st=Math.max(0,iv('zStaff',0)),co=Math.max(0,iv('zCon',0)),rv=Math.max(0,iv('zRev',0)),ap=Math.max(0,iv('zApp',0)),gu=Math.max(0,iv('zGuest',0)),have=hv.value;
      var tot=st+co+rv+ap,lic=have==='suite'?0:tot;
      setT('zLic',num(lic));setT('zMo',inr(lic*528));setT('zYr',inr(lic*6125));setT('zG',num(gu));
      var pre=$id('zPre'),warn=false,msg;
      if(have==='suite')msg='Microsoft Entra Suite already includes ID Governance — no add-on needed for these '+num(tot)+' users.';
      else if(have==='none'){warn=true;msg='Prerequisite missing: '+num(tot)+' users also need Entra ID P1 (₹528/user/month) or P2 (₹755).';}
      else if(have==='e5'||have==='p2')msg='P2 prerequisite met. Microsoft also sells a Governance step-up for P2 tenants — we check which SKU is cheaper for you.';
      else msg='P1 prerequisite met through your current plan.';
      pre.className='ig-zs'+(warn?' w':'');pre.innerHTML=(warn?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>')+'<span>'+esc(msg)+'</span>';
      setT('zNote',gu?num(gu)+' guests are billed by Microsoft through Azure on monthly active users, not per seat.':'Guests are billed by Microsoft through Azure on monthly active users, not per seat.');
      var key=[st,co,rv,ap].join();if(key!==lastL){lastL=key;var per=Math.max(1,Math.ceil(tot/60)),parts=[[st,''],[co,'c'],[rv,'r'],[ap,'a']],h='';
        parts.forEach(function(p){for(var i=0;i<Math.ceil(p[0]/per);i++)h+='<i class="'+p[1]+'"></i>';});ppl.innerHTML=h;var ii=$$('i',ppl);
        ii.forEach(function(el,i){if(R)el.classList.add('in');else setTimeout(function(){el.classList.add('in');},i*14);});}
      return {lic:tot,have:have};}
    ['zStaff','zCon','zRev','zApp','zGuest'].forEach(function(i){$id(i).addEventListener('input',run);});hv.addEventListener('change',run);run();
    $id('zApply').addEventListener('click',function(){var r=run();if(!cUsers)return;cUsers.value=Math.max(1,r.lic);setSeg(cPre,r.have==='none'?'p1':'have');paint();var cf=$id('configure');if(cf)cf.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});XH.toast(r.have==='suite'?'Entra Suite already includes ID Governance — only implementation applies':'Estimate updated — '+num(Math.max(1,r.lic))+' users');});})();

  /* ===== free trial form ===== */
  XH.onForm('igaTrial',function(data){d.dispatchEvent(new CustomEvent('ig:trial',{detail:data}));});
})();

