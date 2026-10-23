
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,d=document;
  var DPR=Math.min(2,window.devicePixelRatio||1),TAU=Math.PI*2;
  var FINE=window.matchMedia&&matchMedia('(pointer:fine)').matches;
  function $id(i){return d.getElementById(i);}
  function setT(e,t){if(typeof e==='string')e=$id(e);if(e&&e.textContent!==t)e.textContent=t;}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function eo(t){t=clamp(t,0,1);return 1-Math.pow(1-t,3);}
  function eio(t){t=clamp(t,0,1);return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function spring(u){return u<=0?0:u>1.6?1:1-Math.exp(-6*u)*Math.cos(9*u);}
  function seg(a,b,t){return clamp((t-a)/(b-a),0,1);}
  function inr(n){return XH.inr(Math.round(n));}
  function dark(){return d.documentElement.getAttribute('data-theme')==='dark';}
  function segV(el){if(!el)return null;var b=$('button.on',el);return el.dataset.value||(b?b.getAttribute('data-v'):null);}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  var MONO='"IBM Plex Mono"',SANS='"IBM Plex Sans"',DISP='Sora';
  var BL='#0066FF',OR='#FF8A00',NV='#0B132B',GR='#16a34a',RD='#c0392b';
  function th(){return dark()?{ink:'#EAF1FF',mut:'#93A4C4',line:'rgba(255,255,255,.16)',soft:'rgba(255,255,255,.07)',surf:'#13224A',bl:'#5C9DFF',ot:'#FFB15C',gr:'#5FE08D',rd:'#ff8a80',nv:'#E8EEFF',nvf:'#0066FF'}:{ink:NV,mut:'#55617A',line:'rgba(11,19,43,.15)',soft:'rgba(11,19,43,.05)',surf:'#ffffff',bl:BL,ot:'#C46A00',gr:GR,rd:RD,nv:NV,nvf:NV};}

  /* ===== one shared rAF ticker ===== */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function watch(el,on){if(!el)return;var vis=false;XH.whenVisible(el,function(v){vis=v;on(v&&!d.hidden);});d.addEventListener('visibilitychange',function(){on(vis&&!d.hidden);});}

  /* ===== canvas helpers ===== */
  function fitC(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  var GA=1;function ga(c,a){c.globalAlpha=clamp(a,0,1)*GA;}
  function txt(c,s,x,y,font,col,al){c.font=font;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  function pill(c,s,x,y,font,bg,fg,al){c.font=font;var w=c.measureText(s).width+14,h=18,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,9);c.fillStyle=bg;c.fill();txt(c,s,x0+7,y+.5,font,fg);return w;}
  function stamp(c,s,x,y,t0,t,col,fs){if(t<t0)return;var u=spring((t-t0)/600),k=lerp(1.7,1,clamp(u,0,1.2));c.save();c.translate(x,y);c.rotate(-.04);c.scale(k,k);ga(c,(t-t0)/180);var f='800 '+fs+'px '+MONO;c.font=f;var w=c.measureText(s).width+18;rr(c,-w/2,-12,w,24,5);c.fillStyle=dark()?'rgba(10,20,44,.96)':'rgba(255,255,255,.97)';c.fill();c.strokeStyle=col;c.lineWidth=2;c.stroke();txt(c,s,0,1,f,col,'center');c.restore();ga(c,1);}
  function tick(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(x-s*.45,y);c.lineTo(x-s*.1,y+s*.35);c.lineTo(x+s*.5,y-s*.35);c.stroke();c.lineCap='butt';}
  function cross(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.lineCap='round';c.beginPath();c.moveTo(x-s*.4,y-s*.4);c.lineTo(x+s*.4,y+s*.4);c.moveTo(x+s*.4,y-s*.4);c.lineTo(x-s*.4,y+s*.4);c.stroke();c.lineCap='butt';}
  function packet(c,x1,y1,x2,y2,u,col,arc){if(u<=0||u>=1)return;var A=arc===undefined?10:arc;
    for(var k=4;k>0;k--){var e2=eio(clamp(u-k*.035,0,1));ga(c,.12*(5-k));c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e2),lerp(y1,y2,e2)-Math.sin(e2*Math.PI)*A,2.8,0,TAU);c.fill();}
    var e=eio(u);ga(c,1);c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A,4.4,0,TAU);c.fill();c.fillStyle='rgba(255,255,255,.9)';c.beginPath();c.arc(lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A,1.6,0,TAU);c.fill();}
  function card(c,x,y,w,h,T,stroke,dash){rr(c,x,y,w,h,10);c.fillStyle=T.surf;c.fill();c.strokeStyle=stroke||T.line;c.lineWidth=stroke?1.8:1.1;if(dash)c.setLineDash(dash);c.stroke();c.setLineDash([]);}
  function person(c,x,y,s,col){c.fillStyle=col;c.beginPath();c.arc(x,y-s*.28,s*.22,0,TAU);c.fill();c.beginPath();c.arc(x,y+s*.36,s*.38,Math.PI,0);c.fill();}
  function lockI(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=1.8;c.beginPath();c.arc(x,y-s*.12,s*.24,Math.PI,0);c.stroke();rr(c,x-s*.36,y-s*.12,s*.72,s*.54,2.5);c.fillStyle=col;c.fill();}
  function clockI(c,x,y,r,col,ang){c.strokeStyle=col;c.lineWidth=1.6;c.beginPath();c.arc(x,y,r,0,TAU);c.stroke();c.beginPath();c.moveTo(x,y);c.lineTo(x+Math.cos(ang)*r*.7,y+Math.sin(ang)*r*.7);c.moveTo(x,y);c.lineTo(x,y-r*.55);c.stroke();}
  function env(c,x,y,s,col,T){rr(c,x-s*.6,y-s*.4,s*1.2,s*.8,3);c.fillStyle=T.surf;c.fill();c.strokeStyle=col;c.lineWidth=1.6;c.stroke();c.beginPath();c.moveTo(x-s*.6,y-s*.36);c.lineTo(x,y+s*.06);c.lineTo(x+s*.6,y-s*.36);c.stroke();}
  function keyI(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.beginPath();c.arc(x-s*.25,y,s*.22,0,TAU);c.stroke();c.beginPath();c.moveTo(x-s*.03,y);c.lineTo(x+s*.45,y);c.moveTo(x+s*.3,y);c.lineTo(x+s*.3,y+s*.18);c.moveTo(x+s*.44,y);c.lineTo(x+s*.44,y+s*.14);c.stroke();}

  /* ======================================================================
     HERO · five PIM scenes on one canvas (sample tenant)
     ====================================================================== */
  var DUR=5500,FADE=520;
  var SC=[
    {cap:'Standing admin rights removed',ph:'Least privilege',lt:'ROLE ASSIGNMENTS',k:'Role assignments',
     lg:[[400,'09:00','8 permanent admin assignments found','scan',''],[1300,'09:02','adm-01 · Global Admin → eligible','eligible','g'],[2600,'09:05','4 more roles converted','eligible','g'],[3600,'09:06','2 break-glass accounts · monitored','kept','w'],[4500,'09:07','standing named admins: 0','done','g']]},
    {cap:'Just-in-time request + MFA',ph:'Request',lt:'ACTIVATION REQUEST',k:'Activation request',
     lg:[[300,'10:14','adm-01 · Exchange Administrator','request',''],[1400,'10:14','duration 2 h · justification added','reason',''],[2700,'10:15','ticket INC-4821 recorded','ticket',''],[3900,'10:15','MFA number match · 42','verified','g']]},
    {cap:'Approval from named approvers',ph:'Approval',lt:'APPROVAL FLOW',k:'Approval',
     lg:[[400,'10:15','request routed to 2 approvers','pending','w'],[1800,'10:16','email + Teams notification sent','notify',''],[2700,'10:18','IT head approved · reason checked','approved','g'],[3700,'10:18','role activating for adm-01','active','g']]},
    {cap:'Active for 2 h, then gone',ph:'Time-bound',lt:'ACTIVE ROLE',k:'Exchange Administrator',
     lg:[[400,'10:18','role active · expires 12:18','active',''],[1900,'11:30','mailbox migration task done','work',''],[3600,'12:18','window closed','expired','w'],[4300,'12:18','role removed automatically','eligible','g']]},
    {cap:'Quarterly review + audit export',ph:'Review',lt:'ACCESS REVIEW · Q3',k:'Access review',
     lg:[[600,'01 Oct','4 eligible assignments to review','review',''],[1700,'03 Oct','3 kept · still needed','approve','g'],[2500,'03 Oct','vendor-02 · unused 90 days','remove','r'],[3900,'04 Oct','audit history exported · CSV','export','g']]}
  ];
  var hero=$id('pmHero'),cv=$id('pmCv'),scr=$id('pmScr'),rail=$id('pmRail'),con=$id('pmCon'),stage=$id('pmStage');
  var tabs=rail?$$('button',rail):[],dots=$$('#pmDots i'),logEl=$id('pmLog'),ring=$id('pmRing'),ringV=$id('pmRingV'),sb=$id('pmSb'),sk=$id('pmSk'),ss=$id('pmSs');

  /* --- scene 0: standing → eligible --- */
  function s0(c,w,h,t){var T=th(),nar=w<420,top=50,bot=h-12;
    var cols=4,rows=2,gx=nar?8:14,gy=12,cw=(w-gx*2-(cols-1)*8)/cols,ch=Math.min(92,(bot-top-34-gy)/rows);
    var roles=['Global Admin','Exchange','Security','User Admin','Global Admin','Azure Owner','Break-glass','Break-glass'];
    var conv=0;
    txt(c,'STANDING NAMED ADMINS',gx,top+6,'800 '+(nar?8:9)+'px '+MONO,T.mut);
    for(var i=0;i<8;i++){var r=Math.floor(i/cols),k=i%cols,x=gx+k*(cw+8),y=top+22+r*(ch+gy);
      var bg=i>=6,tc=1300+i*380,u=bg?eo(seg(3400,3900,t)):eo(seg(tc,tc+420,t));if(!bg&&u>=1)conv++;
      var col=bg?(u>0?T.nvf:OR):(u>.5?T.bl:OR);
      var dash=!bg&&u>.5?[5,4]:null;
      card(c,x,y,cw,ch,T,col,dash);
      if(!bg&&u>0&&u<1){ga(c,(1-u)*.6);c.strokeStyle=T.bl;c.lineWidth=2;rr(c,x-4*u,y-4*u,cw+8*u,ch+8*u,12);c.stroke();ga(c,1);}
      var cx=x+cw/2,py=y+ch*.28;person(c,cx,py,nar?18:22,bg?T.mut:(u>.5?T.bl:OR));
      txt(c,bg?'bg-0'+(i-5):(i<5?'adm-0'+(i+1):'adm-06'),cx,y+ch*.52,'700 '+(nar?8:9)+'px '+MONO,T.ink,'center');
      txt(c,roles[i],cx,y+ch*.52+11,'500 '+(nar?7.5:8.5)+'px '+SANS,T.mut,'center');
      var lab=bg?(u>0?'MONITORED':'PERMANENT'):(u>.5?'ELIGIBLE':'PERMANENT');
      var pc=bg?(u>0?T.nvf:OR):(u>.5?BL:OR);
      if(ch>70)pill(c,lab,cx,y+ch-11,'800 '+(nar?6.5:7.5)+'px '+MONO,pc,pc===OR?NV:'#fff','center');
      if(bg&&u>0){lockI(c,x+cw-11,y+11,14,T.nvf);}
      if(!bg&&u>.5){clockI(c,x+cw-11,y+11,6,T.bl,t/400);}}
    var left=6-conv;
    var bx=w-gx,byy=top+6;txt(c,left+' left',bx,byy,'800 '+(nar?10:11)+'px '+MONO,left?OR:T.gr,'right');
    if(t>4200)stamp(c,'0 STANDING · 2 BREAK-GLASS',w/2,top+22+ch+gy/2,4200,t,T.gr,nar?9:10.5);
    var f=conv/6;return {f:f,v:conv<6?'Converting · '+conv+'/6 eligible':'All named admins eligible',s:'2 break-glass accounts kept apart',c:conv<6?'o':'g',n:conv+'/6'};}

  /* --- scene 1: request with justification + MFA number match --- */
  function s1(c,w,h,t){var T=th(),nar=w<420,top=50,bot=h-12;
    var fx=nar?8:16,fw=nar?w*.6:w*.58,fy=top+2,fh=bot-fy;card(c,fx,fy,fw,fh,T,null);
    var lx=fx+12,lw=fw-24,rowH=(fh-50)/4,fs=nar?8:9.5;
    txt(c,'ACTIVATE ROLE',lx,fy+14,'800 '+(nar?8:9)+'px '+MONO,T.mut);
    function field(i,label,val,u,hl){var y=fy+28+i*rowH;txt(c,label,lx,y+4,'600 '+(nar?7.5:8.5)+'px '+MONO,T.mut);rr(c,lx,y+11,lw,rowH-18,6);c.fillStyle=T.soft;c.fill();if(hl){c.strokeStyle=T.bl;c.lineWidth=1.5;c.stroke();}
      if(val){c.save();rr(c,lx,y+11,lw,rowH-18,6);c.clip();txt(c,val,lx+8,y+11+(rowH-18)/2,'600 '+fs+'px '+SANS,T.ink);c.restore();}return y+11+(rowH-18)/2;}
    field(0,'ROLE','Exchange Administrator',1,t<500);
    // duration slider
    var du=eo(seg(500,1300,t)),dy=fy+28+rowH;txt(c,'DURATION',lx,dy+4,'600 '+(nar?7.5:8.5)+'px '+MONO,T.mut);
    var sy=dy+11+(rowH-18)/2,sw=lw-46;c.strokeStyle=T.line;c.lineWidth=4;c.lineCap='round';c.beginPath();c.moveTo(lx+4,sy);c.lineTo(lx+4+sw,sy);c.stroke();c.strokeStyle=T.bl;c.beginPath();c.moveTo(lx+4,sy);c.lineTo(lx+4+sw*du*(2/8),sy);c.stroke();c.lineCap='butt';
    c.fillStyle=T.bl;c.beginPath();c.arc(lx+4+sw*du*(2/8),sy,6,0,TAU);c.fill();
    txt(c,(du*2).toFixed(1).replace('.0','')+' h',lx+lw,sy,'800 '+fs+'px '+MONO,T.bl,'right');
    // justification typing
    var J='Mailbox migration, Pune office',n=Math.floor(J.length*seg(1300,2500,t));
    var jy=field(2,'JUSTIFICATION',J.slice(0,n)+(t>1300&&t<2600&&Math.floor(t/260)%2?'|':''),1,t>1300&&t<2600);
    var tk='INC-4821',m=Math.floor(tk.length*seg(2500,2900,t));field(3,'TICKET NUMBER',tk.slice(0,m),1,t>2500&&t<3000);
    // activate button
    var by=fy+fh-20,pr=t>3000&&t<3250;rr(c,lx,by-11,lw,22,8);c.fillStyle=t>3000?GR:OR;ga(c,pr?.75:1);c.fill();ga(c,1);
    txt(c,t>3000?'Request sent':'Activate',lx+lw/2,by,'800 '+(nar?9:10)+'px '+DISP,t>3000?'#fff':NV,'center');
    // phone with number match
    var px=fx+fw+(nar?10:22),pw=w-px-(nar?8:16),ph=Math.min(fh,pw*1.7),py=fy+(fh-ph)/2;
    var pu=eo(seg(3000,3400,t));
    packet(c,lx+lw,by,px,py+ph/2,seg(3000,3400,t),T.bl,24);
    ga(c,.25+.75*pu);rr(c,px,py,pw,ph,14);c.fillStyle=dark()?'#0A1430':NV;c.fill();rr(c,px+5,py+12,pw-10,ph-24,9);c.fillStyle=T.surf;c.fill();
    var cx=px+pw/2;
    if(t>3300){txt(c,'Approve sign-in?',cx,py+30,'700 '+(nar?7.5:9)+'px '+SANS,T.ink,'center');txt(c,'enter the number',cx,py+44,'500 '+(nar?7:8)+'px '+SANS,T.mut,'center');
      var nu=spring((t-3300)/500);c.save();c.translate(cx,py+ph*.52);c.scale(nu,nu);txt(c,'42',0,0,'800 '+(nar?22:28)+'px '+MONO,T.bl,'center');c.restore();
      if(t>3900){var vu=eo(seg(3900,4200,t));c.fillStyle=GR;ga(c,vu);c.beginPath();c.arc(cx,py+ph-34,12,0,TAU);c.fill();tick(c,cx,py+ph-34,12,'#fff');ga(c,1);}}
    else{fingerprint(c,cx,py+ph/2,pw*.26,T.mut);}
    ga(c,1);
    if(t>4400)stamp(c,'MFA VERIFIED',fx+fw/2,fy+fh-48,4400,t,T.gr,nar?10:11);
    var f=t<500?.1:t<1300?.25:t<2600?.5:t<3000?.7:t<3900?.85:1;
    return {f:f,v:t<1300?'Choosing role & duration':t<2600?'Adding justification':t<3000?'Ticket number':t<3900?'MFA · number matching':'Request verified',s:'Exchange Administrator · 2 h',c:t<3900?'o':'g',n:Math.round(f*100)+'%'};}
  function fingerprint(c,x,y,r,col){c.strokeStyle=col;c.lineWidth=1.6;for(var i=1;i<=4;i++){c.beginPath();c.arc(x,y+r*.1,r*i/4,Math.PI*1.1,Math.PI*1.9+i*.05);c.stroke();}}

  /* --- scene 2: approval --- */
  function s2(c,w,h,t){var T=th(),nar=w<420,top=56,bot=h-16,my=(top+bot)/2;
    var rx=nar?36:56,hx=w*.47,ax=w-(nar?54:84),a1y=lerp(top,bot,.2),a2y=lerp(top,bot,.8),S=nar?20:24;
    // links
    [[rx,my,hx,my],[hx,my,ax,a1y],[hx,my,ax,a2y]].forEach(function(L,i){c.strokeStyle=T.line;c.lineWidth=1.4;c.setLineDash([4,5]);c.beginPath();c.moveTo(L[0],L[1]);c.lineTo(L[2],L[3]);c.stroke();c.setLineDash([]);});
    packet(c,rx+S,my,hx-S,my,seg(300,1100,t),OR,0);
    packet(c,hx+S,my,ax-S,a1y,seg(1200,1900,t),OR,6);packet(c,hx+S,my,ax-S,a2y,seg(1250,1950,t),OR,-6);
    packet(c,ax-S,a1y,hx+S,my,seg(2700,3200,t),GR,-6);packet(c,hx-S,my,rx+S,my,seg(3200,3800,t),GR,0);
    // requester
    var appr=t>3800;c.fillStyle=T.soft;c.beginPath();c.arc(rx,my,S+6,0,TAU);c.fill();person(c,rx,my,S*1.3,appr?T.gr:T.bl);
    txt(c,'adm-01',rx,my+S+16,'700 '+(nar?8:9)+'px '+MONO,T.ink,'center');
    pill(c,appr?'APPROVED':t>300?'PENDING':'REQUEST',rx,my-S-16,'800 '+(nar?7:8)+'px '+MONO,appr?GR:OR,appr?'#fff':NV,'center');
    // hub
    var hu=t>300&&t<3800?.5+.5*Math.sin(t/180):0;c.fillStyle=dark()?'#0A1430':NV;rr(c,hx-S-4,my-S-4,(S+4)*2,(S+4)*2,12);c.fill();if(hu){ga(c,hu*.6);c.strokeStyle=OR;c.lineWidth=2;rr(c,hx-S-8,my-S-8,(S+8)*2,(S+8)*2,14);c.stroke();ga(c,1);}
    keyI(c,hx,my,S*1.2,'#fff');txt(c,'PIM',hx,my+S+16,'800 '+(nar?8:9)+'px '+MONO,T.ink,'center');
    // approvers
    [[a1y,'IT head',2700,true],[a2y,'CISO',0,false]].forEach(function(A,i){var y=A[0],cw=nar?78:104,chh=nar?44:50,x=ax-cw/2;
      var ok=A[3]&&t>A[2],na=!A[3]&&t>2900;card(c,x,y-chh/2,cw,chh,T,ok?GR:na?null:t>1900?OR:null);
      person(c,x+16,y,16,ok?T.gr:na?T.mut:T.bl);txt(c,A[1],x+30,y-7,'700 '+(nar?8.5:10)+'px '+SANS,T.ink);
      txt(c,ok?'approved':na?'not needed':t>1900?'notified':'approver',x+30,y+8,'600 '+(nar?7:8)+'px '+MONO,ok?T.gr:T.mut);
      if(t>1900&&!ok&&!na){var bu=(t%900)/900;ga(c,1-bu);c.strokeStyle=OR;c.lineWidth=1.5;c.beginPath();c.arc(x+cw-10,y-chh/2+10,4+bu*7,0,TAU);c.stroke();ga(c,1);c.fillStyle=OR;c.beginPath();c.arc(x+cw-10,y-chh/2+10,4,0,TAU);c.fill();}
      if(t>1700&&t<2700){env(c,lerp(hx+S,x-10,.62),lerp(my,y,.62),nar?12:14,OR,T);} });
    if(t>2700)stamp(c,'APPROVED · 10:18',hx,top+6,2700,t,T.gr,nar?9.5:11);
    var f=t<300?.1:t<1900?.35:t<2700?.6:t<3800?.85:1;
    return {f:f,v:t<1900?'Routing to approvers':t<2700?'Waiting for a decision':t<3800?'Approved by IT head':'Role activating',s:'2 approvers · 1 decision needed',c:t<2700?'o':'g',n:Math.round(f*100)+'%'};}

  /* --- scene 3: active with expiry timer --- */
  function s3(c,w,h,t){var T=th(),nar=w<420,top=54,bot=h-14,cy=(top+bot)/2+4,cx=nar?w*.32:w*.3,R=Math.min(nar?54:70,(bot-top)/2-8);
    var tu=eio(seg(600,3800,t)),left=1-tu,exp=t>3800;var mins=Math.round(left*120),hh=Math.floor(mins/60),mm=mins%60;
    c.strokeStyle=T.line;c.lineWidth=10;c.beginPath();c.arc(cx,cy,R,0,TAU);c.stroke();
    if(!exp){c.strokeStyle=left<.2?OR:T.bl;c.lineCap='round';c.beginPath();c.arc(cx,cy,R,-Math.PI/2,-Math.PI/2+TAU*left);c.stroke();c.lineCap='butt';
      var ea=-Math.PI/2+TAU*left;c.fillStyle='#fff';c.beginPath();c.arc(cx+Math.cos(ea)*R,cy+Math.sin(ea)*R,3,0,TAU);c.fill();}
    for(var q=0;q<12;q++){var a=q/12*TAU;c.strokeStyle=T.line;c.lineWidth=1.2;c.beginPath();c.moveTo(cx+Math.cos(a)*(R-14),cy+Math.sin(a)*(R-14));c.lineTo(cx+Math.cos(a)*(R-19),cy+Math.sin(a)*(R-19));c.stroke();}
    txt(c,exp?'0:00':hh+':'+(mm<10?'0':'')+mm,cx,cy-4,'800 '+(nar?20:26)+'px '+MONO,exp?T.mut:T.ink,'center');
    txt(c,exp?'expired':'remaining',cx,cy+16,'600 '+(nar?8:9)+'px '+MONO,T.mut,'center');
    pill(c,'TIME-LAPSE',cx,cy+R+16,'800 '+(nar?7:7.5)+'px '+MONO,T.soft,T.mut,'center');
    // role badge + privileges
    var bx=cx+R+(nar?14:30),bw=w-bx-(nar?8:16),y0=top+4;
    rr(c,bx,y0,bw,34,9);c.fillStyle=exp?T.soft:BL;c.fill();
    txt(c,'Exchange Administrator',bx+10,y0+12,'700 '+(nar?8.5:10.5)+'px '+SANS,exp?T.mut:'#fff');
    txt(c,exp?'ELIGIBLE · not active':'ACTIVE · ends 12:18',bx+10,y0+25,'700 '+(nar?7:8)+'px '+MONO,exp?T.mut:'#cfe1ff');
    var P=['Mailboxes','Mail flow rules','Retention','Distribution lists'];
    for(var i=0;i<4;i++){var yy=y0+46+i*(nar?24:28),on=!exp&&t>400+i*150;rr(c,bx,yy,bw,nar?19:22,6);c.fillStyle=T.soft;c.fill();
      c.fillStyle=on?T.bl:T.mut;c.beginPath();c.arc(bx+10,yy+(nar?9.5:11),3.5,0,TAU);c.fill();
      txt(c,P[i],bx+20,yy+(nar?9.5:11),'600 '+(nar?8:9.5)+'px '+SANS,on?T.ink:T.mut);
      if(exp){var xu=eo(seg(3900+i*90,4200+i*90,t));ga(c,xu);c.strokeStyle=T.mut;c.lineWidth=1.2;c.beginPath();c.moveTo(bx+18,yy+(nar?9.5:11));c.lineTo(lerp(bx+18,bx+bw-10,xu),yy+(nar?9.5:11));c.stroke();ga(c,1);}}
    if(exp)stamp(c,'AUTO-REMOVED',cx,cy-R-2,4000,t,T.gr,nar?9.5:11);
    var f=exp?1:left;
    return {f:f,v:exp?'Expired → eligible again':'Active · '+hh+' h '+(mm<10?'0':'')+mm+' m left',s:exp?'nothing for anyone to remove':'privilege only inside the window',c:exp?'g':left<.2?'o':'',n:exp?'off':hh+':'+(mm<10?'0':'')+mm};}

  /* --- scene 4: access review + audit export --- */
  function s4(c,w,h,t){var T=th(),nar=w<420,top=50,bot=h-12;
    var lx=nar?8:16,lw=nar?w*.7:w*.66,rh=Math.min(44,(bot-top-22)/4);
    txt(c,'ELIGIBLE ASSIGNMENTS · Q3',lx,top+6,'800 '+(nar?8:9)+'px '+MONO,T.mut);
    var R=[['adm-01','Exchange Admin','used 6×',1],['adm-03','Security Admin','used 2×',1],['vendor-02','User Admin','unused 90 d',0],['adm-05','Azure Owner','used 4×',1]];
    var kept=0,rem=0,G=eo(seg(2900,3400,t));
    for(var i=0;i<4;i++){var dt=900+i*520,du=eo(seg(dt,dt+260,t)),r=R[i];
      var gone=!r[3]?G:0;if(r[3]&&du>=1)kept++;if(!r[3]&&du>=1)rem++;
      var y=top+20+i*rh-(i>2?G*rh:0);
      ga(c,1-gone);rr(c,lx-gone*30,y,lw,rh-6,8);c.fillStyle=T.soft;c.fill();
      if(du>0){c.strokeStyle=r[3]?T.gr:T.rd;c.lineWidth=1.5;ga(c,du*(1-gone));c.stroke();ga(c,1-gone);}
      person(c,lx+16-gone*30,y+(rh-6)/2,14,r[3]?T.bl:OR);
      txt(c,r[0]+' · '+r[1],lx+30-gone*30,y+(rh-6)/2-6,'700 '+(nar?8:9.5)+'px '+SANS,T.ink);
      txt(c,r[2],lx+30-gone*30,y+(rh-6)/2+7,'500 '+(nar?7:8)+'px '+MONO,r[3]?T.mut:T.ot);
      if(du>0)pill(c,r[3]?'KEEP':'REMOVE',lx+lw-8-gone*30,y+(rh-6)/2,'800 '+(nar?7:8)+'px '+MONO,r[3]?GR:RD,'#fff','right');
      ga(c,1);}
    // audit export
    var fx=lx+lw+(nar?10:20),fw=w-fx-(nar?8:16),fcx=fx+fw/2,fy=lerp(top,bot,.62);
    // auditor folder
    rr(c,fcx-fw*.36,fy-14,fw*.72,40,6);c.fillStyle=dark()?'rgba(255,177,92,.18)':'rgba(255,138,0,.16)';c.fill();c.strokeStyle=OR;c.lineWidth=1.5;c.stroke();
    rr(c,fcx-fw*.36,fy-22,fw*.3,10,3);c.fillStyle=OR;c.fill();
    txt(c,'AUDITOR',fcx,fy+6,'800 '+(nar?7:8.5)+'px '+MONO,T.ot,'center');
    var eu=eio(seg(3400,4100,t)),dx=lerp(lx+lw*.5,fcx,eu),dyy=lerp(top+20+rh*2,fy-30,eu)-Math.sin(eu*Math.PI)*34;
    if(t>3400&&t<4200){ga(c,1);rr(c,dx-11,dyy-14,22,28,3);c.fillStyle=T.surf;c.fill();c.strokeStyle=T.bl;c.lineWidth=1.5;c.stroke();txt(c,'CSV',dx,dyy+2,'800 7px '+MONO,T.bl,'center');}
    if(t>=4100){var su=spring((t-4100)/500);c.save();c.translate(fcx,fy-34);c.scale(su,su);rr(c,-11,-14,22,28,3);c.fillStyle=T.surf;c.fill();c.strokeStyle=T.gr;c.lineWidth=1.5;c.stroke();txt(c,'CSV',0,2,'800 7px '+MONO,T.gr,'center');c.restore();}
    if(t>4300)stamp(c,'3 KEPT · 1 REMOVED',lx+lw/2,bot-12,4300,t,T.gr,nar?9.5:11);
    var f=(kept+rem)/4*.8+(t>4100?.2:0);
    return {f:f,v:kept+rem<4?'Reviewing · '+(kept+rem)+'/4':t<4100?'Exporting audit history':'Review complete',s:'reviewer: IT head · sample',c:kept+rem<4?'o':'g',n:(kept+rem)+'/4'};}

  var SCENES=[s0,s1,s2,s3,s4];

  if(hero&&cv){
    var cur=0,prev=-1,t=0,last=0,paused=false,shown=-1,logN=0,st0=null;
    function addLog(e){var li=d.createElement('li');li.innerHTML='<time>'+e[1]+'</time><span>'+e[2]+'</span><b class="'+e[4]+'">'+e[3]+'</b>';logEl.appendChild(li);while(logEl.children.length>3)logEl.removeChild(logEl.firstChild);}
    function setScene(k,instant){prev=instant?-1:cur;cur=(k+SCENES.length)%SCENES.length;t=0;logN=0;logEl.innerHTML='';
      tabs.forEach(function(b,i){b.classList.toggle('on',i===cur);b.setAttribute('aria-selected',i===cur);b.classList.toggle('done',i<cur);b.style.setProperty('--p',0);});
      dots.forEach(function(x,i){x.classList.toggle('on',i===cur);});
      var S=SC[cur];setT('pmCapN','0'+(cur+1));setT('pmCapT',S.cap);setT('pmPh',S.ph);setT('pmLt',S.lt);setT(sk,S.k);
      if(R){t=DUR-1;S.lg.forEach(addLog);logN=S.lg.length;draw();}}
    function state(s){if(!s)return;if(ring){ring.style.strokeDashoffset=String(100-clamp(s.f,0,1)*100);ring.setAttribute('class','fg'+(s.c?' '+s.c:''));}setT(ringV,s.n);setT(sb,s.v);setT(ss,s.s);}
    function draw(){var F=fitC(cv);if(!F)return;var c=F.c;c.clearRect(0,0,F.w,F.h);
      var s;
      if(prev>=0&&t<FADE){GA=1-t/FADE;ga(c,1);SCENES[prev](c,F.w,F.h,DUR-1);GA=t/FADE;ga(c,1);s=SCENES[cur](c,F.w,F.h,t);}
      else{prev=-1;GA=1;ga(c,1);s=SCENES[cur](c,F.w,F.h,t);}
      GA=1;c.globalAlpha=1;state(s);
      var S=SC[cur];while(logN<S.lg.length&&S.lg[logN][0]<=t){addLog(S.lg[logN]);logN++;}
      if(tabs[cur])tabs[cur].style.setProperty('--p',(t/DUR).toFixed(3));}
    var run=loop(function(now){var dt=last?Math.min(200,now-last):16;last=now;if(!paused){t+=dt;if(t>=DUR){setScene(cur+1);}}draw();});
    tabs.forEach(function(b,i){b.addEventListener('click',function(){setScene(i,true);});
      b.addEventListener('keydown',function(e){if(e.key==='ArrowDown'||e.key==='ArrowRight'){e.preventDefault();setScene(cur+1,true);tabs[cur].focus();}if(e.key==='ArrowUp'||e.key==='ArrowLeft'){e.preventDefault();setScene(cur-1,true);tabs[cur].focus();}});});
    con.addEventListener('mouseenter',function(){paused=true;con.classList.add('paused');});
    con.addEventListener('mouseleave',function(){paused=false;con.classList.remove('paused');});
    scr.addEventListener('pointerdown',function(e){st0={x:e.clientX,y:e.clientY};});
    scr.addEventListener('pointerup',function(e){if(!st0)return;var dx=e.clientX-st0.x,dy=e.clientY-st0.y;st0=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))setScene(cur+(dx<0?1:-1),true);});
    scr.addEventListener('pointercancel',function(){st0=null;});
    setScene(0,true);
    if(R){draw();window.addEventListener('resize',draw);d.addEventListener('xh:theme',draw);}
    else watch(stage,function(v){last=0;run(v);});
    new MutationObserver(function(){if(R)draw();}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
    // pointer parallax on the console
    var tilt=$('.lh-tilt',stage);
    if(FINE&&!R&&tilt){stage.addEventListener('pointermove',function(e){var r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;tilt.style.transform='perspective(1100px) rotateY('+(x*5).toFixed(2)+'deg) rotateX('+(-y*4).toFixed(2)+'deg)';});
      stage.addEventListener('pointerleave',function(){tilt.style.transform='';});}
  }

  /* ===== micro-interactions: magnetic CTAs, card tilt + spotlight ===== */
  if(FINE&&!R){
    $$('.pm-mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;b.style.transform='translate('+(x*.18).toFixed(1)+'px,'+(y*.3).toFixed(1)+'px)';});b.addEventListener('pointerleave',function(){b.style.transform='';});});
    $$('.pm-cc').forEach(function(el){el.addEventListener('pointermove',function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.setProperty('--mx',(x*100).toFixed(1)+'%');el.style.setProperty('--my',(y*100).toFixed(1)+'%');el.style.transform='perspective(800px) rotateX('+((.5-y)*6).toFixed(2)+'deg) rotateY('+((x-.5)*7).toFixed(2)+'deg) translateY(-3px)';});el.addEventListener('pointerleave',function(){el.style.transform='';});});
  }

  /* ===== sub-nav highlight ===== */
  (function(){var links=$$('.pm-sub a');if(!links.length||!('IntersectionObserver' in window))return;var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.remove('on');});var a=map[x.target.id];if(a)a.classList.add('on');}});},{rootMargin:'-45% 0px -50% 0px'});
    Object.keys(map).forEach(function(id){var s=$id(id);if(s)io.observe(s);});})();

  /* ===== stat radials ===== */
  (function(){var box=$('.pm-stat');if(!box)return;function fill(){$$('.pm-rad',box).forEach(function(r){var fg=$('.fg',r);if(fg)fg.style.strokeDashoffset=String(100-(+r.getAttribute('data-p')||0));});}
    if(R){fill();return;}var done=false;XH.whenVisible(box,function(v){if(v&&!done){done=true;setTimeout(fill,200);}});})();

  /* ===== lifecycle: scroll-linked packet ===== */
  (function(){var box=$id('pmLc'),path=$id('pmLcPath'),lit=$id('pmLcLit'),act=$id('pmLcAct'),pk=$id('pmLcPk');if(!box||!path)return;
    var nodes=$$('#pmLcN > div'),len=0;try{len=path.getTotalLength();}catch(e){}
    nodes.forEach(function(n){if(!len)return;var pt=path.getPointAtLength(len*(+n.getAttribute('data-at'))/100);n.style.left=(pt.x/10).toFixed(2)+'%';n.style.top=(pt.y/3).toFixed(2)+'%';});
    var target=0,p=0;
    function measure(){var r=box.getBoundingClientRect(),vh=innerHeight;target=clamp((vh*.85-r.top)/(r.height+vh*.35),0,1);}
    function paint(v){lit.style.strokeDashoffset=String(100-v*100);
      var a=clamp(v*100-58,0,16)*(v*100<74?1:clamp(1-(v*100-74)/8,0,1));act.style.strokeDasharray=a.toFixed(2)+' 200';act.style.strokeDashoffset='-58';
      if(len){var pt=path.getPointAtLength(v*len);pk.style.transform='translate('+(pt.x/1000*box.clientWidth).toFixed(1)+'px,'+(pt.y/300*box.clientHeight).toFixed(1)+'px)';}
      pk.classList.toggle('hot',v>.58&&v<.74);
      nodes.forEach(function(n){var at=+n.getAttribute('data-at');n.classList.toggle('on',v*100>=at-1);n.classList.toggle('hot',at===58&&v>.57&&v<.75);});}
    if(R){paint(1);return;}
    var run=loop(function(){p+=(target-p)*.12;if(Math.abs(target-p)<.001)p=target;paint(p);});
    var vis=false;window.addEventListener('scroll',function(){if(vis)measure();},{passive:true});
    watch(box,function(v){vis=v;if(v)measure();run(v);});
    paint(0);})();

  /* ===== configurator ===== */
  var P2M=755,P2Y=8765,LISTM=830,LISTY=830*12,IMPL=49999,MAN=9999;
  var cLic=$id('cLic'),cBill=$id('cBill'),cEl=$id('cEl'),cAp=$id('cAp'),cRv=$id('cRv'),cImpl=$id('cImpl'),cMan=$id('cMan');
  function num(el,mn){var v=Math.round(+el.value||0);return Math.max(mn||0,v);}
  function calc(){var lic=segV(cLic),bill=segV(cBill),users=num(cEl,1)+num(cAp)+num(cRv),items=[];
    if(lic==='p2'){var pr=bill==='y'?P2Y:P2M;items.push({key:'pim-p2-'+bill,name:'Microsoft Entra ID P2',sub:(bill==='y'?'per user / year':'per user / month')+' · '+users+' users · for PIM',unit:pr,qty:users,col:'#0066FF',lab:'Entra ID P2 × '+users+(bill==='y'?' · year':' · month')});}
    if(cImpl.checked)items.push({key:'pim-impl',name:'PIM implementation',sub:'one-time · one tenant · indicative',unit:IMPL,qty:1,col:'#FF8A00',lab:'PIM implementation*'});
    if(cMan.checked)items.push({key:'pim-managed',name:'Managed PIM operations',sub:'first month · indicative',unit:MAN,qty:1,col:'#16a34a',lab:'Managed PIM ops* · month'});
    var sub=items.reduce(function(a,b){return a+b.unit*b.qty;},0);return {items:items,sub:sub,gst:sub*.18,tot:sub*1.18,users:users,lic:lic,bill:bill};}
  function render(){var s=calc();$id('cWho').classList.toggle('off',s.lic!=='p2');
    var nm=s.lic==='p2'?'Entra ID P2 × '+s.users+' users':'Services only';if(cImpl.checked)nm+=' + implementation';if(cMan.checked)nm+=' + managed ops';setT('cName',nm);
    $id('cList').innerHTML=s.items.length?s.items.map(function(i){return '<li><span><i style="background:'+i.col+'"></i>'+i.lab+'</span><b>'+inr(i.unit*i.qty)+'</b></li>';}).join(''):'<li><span>Nothing selected yet</span><b>₹0</b></li>';
    $id('cBars').innerHTML=s.items.map(function(i){return '<i style="flex-grow:'+(i.unit*i.qty)+';background:'+i.col+'"></i>';}).join('');
    setT('cSubL',s.bill==='y'&&s.lic==='p2'?'Subtotal · first year licences':'Subtotal · first month');
    setT('cSub',inr(s.sub));setT('cGst',inr(s.gst));var tot=$id('cTot');if(tot.textContent!==inr(s.tot)){tot.textContent=inr(s.tot);bump(tot);}
    var note='';if(s.lic==='p2')note=s.bill==='y'?'Saves '+inr((LISTY-P2Y)*s.users)+' a year vs Microsoft list (₹9,960/user/year).':'Saves '+inr((LISTM-P2M)*s.users)+' a month vs Microsoft list (₹830/user/month).';else note='PIM is already licensed through your P2, E5 or ID Governance seats.';
    setT('cNote',note);return s;}
  if(cLic){[cLic,cBill].forEach(function(x){x.addEventListener('change',render);});[cEl,cAp,cRv].forEach(function(x){x.addEventListener('input',render);});[cImpl,cMan].forEach(function(x){x.addEventListener('change',render);});
    render();
    $id('oAdd').addEventListener('click',function(){var s=calc();if(!s.items.length){XH.toast('Choose a licence or a service first.');return;}s.items.forEach(function(i){XH.cart.add({key:i.key,name:i.name,sub:i.sub,price:i.unit,qty:i.qty});});});
    $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-pick');if(k==='impl')cImpl.checked=true;if(k==='man')cMan.checked=true;render();var cf=$id('configure');cf.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});XH.flash&&XH.flash(cf);});});}

  /* ===== free trial form ===== */
  XH.onForm('pim-trial',function(data,f){f.setAttribute('data-done','Thanks, '+(data.name?String(data.name).split(' ')[0]:'there')+'! An XcellHost identity engineer will email '+(data.email||'you')+' within one business day to confirm trial scope and dates for '+(data.company||'your company')+' ('+(data.users||'your')+' admins).');});

  /* ===== tool A: standing-admin risk calculator ===== */
  var rAcc=$id('rAcc'),rGa=$id('rGa'),rHr=$id('rHr'),rMfa=$id('rMfa'),rSync=$id('rSync'),rBg=$id('rBg'),rView=$id('rView'),rCv=$id('rCv');
  var wk={u:0,to:0,from:0,t0:0,res:null};
  function riskCalc(){var acc=num(rAcc,1),gA=Math.min(num(rGa),acc),hr=+rHr.value||4,mfa=segV(rMfa),sync=segV(rSync),bg=+segV(rBg);
    var stand=acc*168,jit=acc*Math.min(hr,168),cut=1-jit/stand;
    var exp=Math.min(1,acc/25)*35,gaP=gA>4?Math.min(20,(gA-4)*4):0,mfaP=mfa==='all'?0:mfa==='some'?15:28,syP=sync==='yes'?8:0,bgP=bg===0?10:bg===1?5:0;
    var before=clamp(Math.round(exp+gaP+mfaP+syP+bgP+12),0,100);
    var after=clamp(Math.round(exp*(1-cut)+gaP*.3+mfaP*.2+syP*.6+2),0,100);
    return {acc:acc,ga:gA,hr:hr,mfa:mfa,sync:sync,bg:bg,stand:stand,jit:jit,cut:cut,before:before,after:after};}
  function rec(i,cls,t){return '<li style="animation-delay:'+(i*70)+'ms"><i class="'+cls+'">'+(cls==='g'?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>')+'</i><span>'+t+'</span></li>';}
  function riskRender(){if(!rAcc)return;var r=riskCalc();if(+rGa.value>r.acc)rGa.value=r.acc;wk.res=r;
    setT('rHrV',r.hr+' h');setT('rScore',String(r.before));setT('rAfter',String(r.after));setT('rStand',r.stand.toLocaleString('en-IN')+' h');setT('rJit',r.jit.toLocaleString('en-IN')+' h');setT('rCut',Math.round(r.cut*100)+'%');
    var a=$id('rArc'),a2=$id('rArc2');a.style.strokeDashoffset=String(100-r.before);a.style.stroke=r.before>=60?'#c0392b':r.before>=35?'#FF8A00':'#16a34a';a2.style.strokeDashoffset=String(100-r.after);
    var L=[],i=0;
    if(r.ga>=5)L.push(rec(i++,'','Cut Global Admins from '+r.ga+' to 4 or fewer — Microsoft recommends fewer than five.'));
    if(r.mfa!=='all')L.push(rec(i++,'','Turn on MFA for every admin; PIM then asks for it at each activation.'));
    if(r.sync==='yes')L.push(rec(i++,'','Move admin roles to cloud-only accounts, not synced on-prem ones.'));
    if(r.bg<2)L.push(rec(i++,'','Create two cloud-only emergency access accounts and monitor their use.'));
    L.push(rec(i++,'g','Make '+Math.max(0,r.acc-Math.min(r.bg,2))+' admin'+(r.acc===1?'':'s')+' eligible with '+(r.hr<=8?'1–2':'4–8')+' h activation windows.'));
    L.push(rec(i++,'g','Schedule quarterly access reviews for every eligible assignment.'));
    $id('rRec').innerHTML=L.join('');wkGo();}
  function rowsFor(r){var rows=[],n=Math.min(r.acc,10);for(var k=0;k<n;k++){var segs=[],left=r.hr,seed=(k*7+3)%11,day=seed%3;
      while(left>0&&segs.length<8){var len=Math.min(left,1+((seed+segs.length*5)%3));var start=day*24+9+((seed+segs.length)%7);segs.push([start%168,len]);left-=len;day=(day+1+((seed+segs.length)%2))%7;}
      rows.push({ga:k<r.ga,segs:segs});}return rows;}
  var wkRun=loop(function(now){var u=clamp((now-wk.t0)/650,0,1);wk.u=lerp(wk.from,wk.to,eio(u));wkDraw();if(u>=1)wkRun(false);});
  function wkGo(){var to=segV(rView)==='a'?1:0;if(R){wk.u=to;wkDraw();return;}wk.from=wk.u;wk.to=to;wk.t0=performance.now();wkRun(true);}
  function wkDraw(){if(!rCv||!wk.res)return;var F=fitC(rCv);if(!F)return;var c=F.c,w=F.w,h=F.h,r=wk.res,rows=rowsFor(r);c.clearRect(0,0,w,h);
    var lx=58,top=18,rh=Math.min(16,(h-top-24)/Math.max(rows.length,1)),aw=w-lx-4,u=wk.u;
    var days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    for(var dd=0;dd<7;dd++){var x=lx+aw*dd/7;c.fillStyle='rgba(255,255,255,.04)';if(dd%2)c.fillRect(x,top-2,aw/7,rows.length*rh+2);txt(c,days[dd],x+aw/14,8,'600 9px '+MONO,'#7fa6e6','center');}
    rows.forEach(function(row,i){var y=top+i*rh;txt(c,(row.ga?'GA ':'')+'adm-'+(i<9?'0':'')+(i+1),4,y+rh/2,'600 9px '+MONO,row.ga?'#FFB15C':'#9fb6de');
      row.segs.forEach(function(s){var x0=lerp(0,s[0],u),x1=lerp(168,s[0]+s[1],u);var X0=lx+aw*x0/168,X1=lx+aw*Math.min(168,x1)/168;rr(c,X0,y+2,Math.max(2.5,X1-X0),rh-4,2);c.fillStyle=u<.5?(row.ga?'#c0392b':'#FF8A00'):'#16a34a';c.globalAlpha=u<.5?.85:1;c.fill();c.globalAlpha=1;});});
    txt(c,u<.5?'privilege held: 24 × 7':'privilege held: only when activated',w-4,Math.min(h-8,top+rows.length*rh+12),'700 9px '+MONO,u<.5?'#FFB15C':'#5FE08D','right');}
  if(rAcc){[rAcc,rGa,rHr].forEach(function(x){x.addEventListener('input',riskRender);});[rMfa,rSync,rBg].forEach(function(x){x.addEventListener('change',riskRender);});rView.addEventListener('change',wkGo);
    riskRender();window.addEventListener('resize',wkDraw);new MutationObserver(wkDraw).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
    d.addEventListener('xh:tab',function(e){if(e.detail&&e.detail.key==='risk')setTimeout(wkDraw,30);});
    if(!R){var once=false;XH.whenVisible(rCv,function(v){if(v&&!once){once=true;wkDraw();setTimeout(function(){var b=$('button[data-v=a]',rView);if(b&&segV(rView)==='b'){b.click();}},900);}});}}

  /* ===== tool B: role-settings designer ===== */
  var PRE={ga:{n:'Global Administrator',t:0,dur:2,app:1,ctx:1,tk:1,ex:'180 days'},pra:{n:'Privileged Role Administrator',t:0,dur:2,app:1,ctx:1,tk:1,ex:'180 days'},
    sec:{n:'Security Administrator',t:1,dur:4,app:0,ctx:1,tk:0,ex:'365 days'},exo:{n:'Exchange Administrator',t:1,dur:4,app:0,ctx:0,tk:1,ex:'365 days'},
    usr:{n:'User Administrator',t:1,dur:4,app:0,ctx:0,tk:0,ex:'365 days'},hd:{n:'Helpdesk Administrator',t:2,dur:8,app:0,ctx:0,tk:0,ex:'365 days'},
    own:{n:'Azure subscription Owner',t:0,dur:2,app:1,ctx:1,tk:1,ex:'180 days'},ctr:{n:'Azure Contributor',t:2,dur:8,app:0,ctx:0,tk:1,ex:'365 days'}};
  var TIER=['Tier 0 · control plane','Tier 1 · workload admin','Tier 2 · operations'];
  var dRole=$id('dRole'),dDur=$id('dDur'),dApp=$id('dApp'),dCtx=$id('dCtx'),dTk=$id('dTk'),flowT=[];
  function roleKey(){var b=$('button.on',dRole);return b?b.getAttribute('data-v'):'ga';}
  function applyPreset(k){var p=PRE[k];dDur.value=p.dur;dApp.checked=!!p.app;dCtx.checked=!!p.ctx;dTk.checked=!!p.tk;dDur.dispatchEvent(new Event('input',{bubbles:true}));}
  function esc(s){return String(s).replace(/[&<>]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;'}[c];});}
  var codeTxt='';
  function roleRender(anim){if(!dRole)return;var k=roleKey(),p=PRE[k],dur=+dDur.value,app=dApp.checked,ctx=dCtx.checked,tk=dTk.checked;
    setT('dDurV',dur+' h');setT('dName',p.n);var tier=$id('dTier');tier.textContent=TIER[p.t];tier.className='pm-tier'+(p.t?' t'+p.t:'');
    var warn=[];if(p.t===0&&!app)warn.push('Tier 0 without approval — we recommend at least two named approvers.');if(p.t===0&&dur>4)warn.push('Long windows on Tier 0 roles weaken just-in-time.');if(p.t===0&&!ctx)warn.push('Consider phishing-resistant sign-in for Tier 0.');
    setT('dNote',warn.length?warn[0]:'Baseline (sample) · tuned in the design workshop');
    var steps=[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>','Eligible',''],[ctx?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>',ctx?'Phish-resistant':'MFA','o'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>','Reason','']];
    if(tk)steps.push(['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>','Ticket','']);if(app)steps.push(['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>','Approval','o']);steps.push(['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>','Active ≤ '+dur+' h','g'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12M6 22h12M7 2v4a5 5 0 005 5 5 5 0 005-5V2M7 22v-4a5 5 0 015-5 5 5 0 015 5v4"/></svg>','Expire','']);
    var fl=$id('dFlow');fl.innerHTML=steps.map(function(s,i){return (i?'<em></em>':'')+'<span class="'+s[2]+'"><i>'+s[0]+'</i>'+s[1]+'</span>';}).join('');
    flowT.forEach(clearTimeout);flowT=[];var sp=$$('span',fl);
    if(R||!anim)sp.forEach(function(x){x.classList.add('on');});else sp.forEach(function(x,i){flowT.push(setTimeout(function(){x.classList.add('on');},80+i*140));});
    var lines=[['# PIM role settings · '+p.n,'c'],['# XcellHost baseline (sample) · '+TIER[p.t],'c'],
      ['activation.maxDuration      ','PT'+dur+'H'],['activation.authentication   ',ctx?'auth context · phishing-resistant':'MFA'],['activation.justification    ','required'],
      ['activation.ticketInfo       ',tk?'required':'optional'],['activation.approval         ',app?'required · 2 approvers':'not required'],
      ['assignment.eligible.expiry  ',p.ex],['assignment.active.permanent ','not allowed'],['notifications               ','approvers + security mailbox']];
    codeTxt=lines.map(function(l){return l[1]==='c'?l[0]:l[0]+'= '+l[1];}).join('\n');
    $id('dCode').innerHTML=lines.map(function(l){return l[1]==='c'?'<span class="c">'+esc(l[0])+'</span>':'<span class="k">'+esc(l[0])+'</span>= <span class="v">'+esc(l[1])+'</span>';}).join('\n');}
  if(dRole){dRole.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;$$('button',dRole).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});applyPreset(b.getAttribute('data-v'));roleRender(true);});
    dDur.addEventListener('input',function(){roleRender(false);});dDur.addEventListener('change',function(){roleRender(true);});[dApp,dCtx,dTk].forEach(function(x){x.addEventListener('change',function(){roleRender(true);});});
    $id('dReset').addEventListener('click',function(){applyPreset(roleKey());roleRender(true);XH.toast('Reset to XcellHost baseline');});
    $id('dCopy').addEventListener('click',function(){var ok=function(){XH.toast('Settings copied');};if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(codeTxt).then(ok,ok);else ok();});
    applyPreset('ga');roleRender(false);
    d.addEventListener('xh:tab',function(e){if(e.detail&&e.detail.key==='role')roleRender(true);});}
})();

