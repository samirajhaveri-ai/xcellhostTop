
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
  var MONO='"IBM Plex Mono"',SANS='"IBM Plex Sans"';
  var BL='#0066FF',OR='#FF8A00',NV='#0B132B',GR='#16a34a',RD='#c0392b';
  function th(){return dark()?{ink:'#EAF1FF',mut:'#93A4C4',line:'rgba(255,255,255,.16)',soft:'rgba(255,255,255,.07)',surf:'#13224A',bl:'#5C9DFF',ot:'#FFB15C',gr:'#5FE08D',rd:'#ff8a80',bg:'#0C1834'}:{ink:NV,mut:'#55617A',line:'rgba(11,19,43,.15)',soft:'rgba(11,19,43,.05)',surf:'#ffffff',bl:BL,ot:'#C46A00',gr:GR,rd:RD,bg:'#F3F6FC'};}

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
  function packet(c,x1,y1,x2,y2,u,col,arc){if(u<=0||u>=1)return;var A=arc===undefined?8:arc;
    for(var k=4;k>0;k--){var e2=eio(clamp(u-k*.035,0,1));ga(c,.12*(5-k));c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e2),lerp(y1,y2,e2)-Math.sin(e2*Math.PI)*A,2.8,0,TAU);c.fill();}
    var e=eio(u);ga(c,1);c.fillStyle=col;c.beginPath();c.arc(lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A,4.2,0,TAU);c.fill();c.fillStyle='rgba(255,255,255,.85)';c.beginPath();c.arc(lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A,1.5,0,TAU);c.fill();}
  function card(c,x,y,w,h,T,stroke){rr(c,x,y,w,h,10);c.fillStyle=T.surf;c.fill();c.strokeStyle=stroke||T.line;c.lineWidth=stroke?1.8:1.1;c.stroke();}
  function laptop(c,x,y,s,col,T){rr(c,x-s*.55,y-s*.42,s*1.1,s*.7,3);c.fillStyle=T.surf;c.fill();c.strokeStyle=col;c.lineWidth=1.8;c.stroke();rr(c,x-s*.42,y-s*.3,s*.84,s*.46,1.5);c.fillStyle=col;ga(c,.16);c.fill();ga(c,1);c.beginPath();c.moveTo(x-s*.72,y+s*.34);c.lineTo(x+s*.72,y+s*.34);c.strokeStyle=col;c.lineWidth=2.4;c.lineCap='round';c.stroke();c.lineCap='butt';}
  function server(c,x,y,s,col,T){for(var i=0;i<3;i++){rr(c,x-s*.5,y-s*.6+i*s*.42,s,s*.34,3);c.fillStyle=T.surf;c.fill();c.strokeStyle=col;c.lineWidth=1.6;c.stroke();c.fillStyle=col;c.beginPath();c.arc(x+s*.32,y-s*.43+i*s*.42,1.8,0,TAU);c.fill();}}
  function person(c,x,y,s,col){c.fillStyle=col;c.beginPath();c.arc(x,y-s*.28,s*.22,0,TAU);c.fill();c.beginPath();c.arc(x,y+s*.36,s*.38,Math.PI,0);c.fill();}
  function env(c,x,y,s,col,T){rr(c,x-s*.6,y-s*.4,s*1.2,s*.8,3);c.fillStyle=T.surf;c.fill();c.strokeStyle=col;c.lineWidth=1.8;c.stroke();c.beginPath();c.moveTo(x-s*.6,y-s*.36);c.lineTo(x,y+s*.08);c.lineTo(x+s*.6,y-s*.36);c.stroke();}
  function lockI(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.arc(x,y-s*.12,s*.26,Math.PI,0);c.stroke();rr(c,x-s*.38,y-s*.12,s*.76,s*.56,3);c.fillStyle=col;c.fill();}

  /* ======================================================================
     HERO · five Defender scenes on one canvas (sample tenant)
     ====================================================================== */
  var DUR=5500,FADE=480;
  var SC=[
    {cap:'Ransomware behaviour blocked',ph:'Endpoint',lt:'DEVICE TIMELINE',k:'Defender for Endpoint',
     lg:[[300,'10:41','LAPTOP-07 · mass file rename pattern','watch','w'],[1700,'10:41','behaviour blocked · process stopped','blocked','g'],[3000,'10:41','LAPTOP-07 isolated from network','isolated','g'],[4300,'10:42','file server untouched · 0 files lost','safe','g']]},
    {cap:'Phishing detonated & purged',ph:'Email',lt:'MAIL FLOW',k:'Defender for Office 365',
     lg:[[300,'09:12','inbound · "invoice due" · link','scan',''],[1700,'09:12','sandbox detonation · link verdict','malicious','r'],[2500,'09:12','auto purge from delivered inboxes','ZAP','w'],[4300,'09:13','5 of 5 copies removed','done','g']]},
    {cap:'Lateral movement flagged',ph:'Identity',lt:'IDENTITY SIGNALS',k:'Defender for Identity',
     lg:[[500,'02:06','PC-12 → PC-31 · remote logon','hop',''],[1500,'02:06','PC-31 → file server · same account','hop','w'],[2200,'02:07','suspicious lateral movement','high','r'],[3100,'02:07','account disabled · AD + Entra ID','disabled','g']]},
    {cap:'Shadow IT discovered & controlled',ph:'Cloud apps',lt:'CLOUD DISCOVERY',k:'Defender for Cloud Apps',
     lg:[[300,'11:00','firewall logs · 7 days analysed','discover',''],[1800,'11:01','142 cloud apps found · 9 high risk','risk','w'],[2600,'11:01','file-share app marked unsanctioned','block','r'],[3600,'11:02','download blocked · session control','blocked','g']]},
    {cap:'One incident · auto-remediated',ph:'XDR',lt:'INCIDENT #2214',k:'Defender XDR',
     lg:[[400,'14:20','4 alerts correlated · 1 user, 1 device','1 incident',''],[2300,'14:21','automated investigation · 11 items','running',''],[3300,'14:23','device remediated · user contained','fixed','g'],[4400,'14:25','exposure score 62 → 31','lower','g']]}
  ];
  var hero=$id('dfHero'),cv=$id('dfCv'),scr=$id('dfScr'),tabsEl=$id('dfTabs'),con=$id('dfCon');
  var tabs=tabsEl?$$('button',tabsEl):[],logEl=$id('dfLog'),ring=$id('dfRing'),ringV=$id('dfRingV'),vb=$id('dfVb'),vk=$id('dfVk'),vs=$id('dfVs');

  /* --- scene 0: endpoint ransomware blocked + isolated --- */
  function s0(c,w,h,t){var T=th(),nar=w<480,top=46,bot=h-14,midY=(top+bot)/2;
    var gx0=nar?34:58,gx1=w*(nar?.56:.6),sx=w*(nar?.82:.84),sy=midY+4,S=nar?26:32;
    var pts=[];for(var r=0;r<2;r++)for(var k=0;k<3;k++)pts.push([lerp(gx0,gx1,k/2),lerp(top+46,bot-36,r)]);
    var bad=4,isoU=eo(seg(2900,3600,t)),alertU=seg(900,1700,t);
    // links to server
    pts.forEach(function(p,i){var cut=i===bad&&t>2900;c.strokeStyle=cut?T.line:(dark()?'rgba(92,157,255,.35)':'rgba(0,102,255,.25)');c.setLineDash(cut?[3,5]:[]);c.lineWidth=1.4;c.beginPath();c.moveTo(p[0]+S*.6,p[1]);c.lineTo(sx-S*.6,sy);c.stroke();c.setLineDash([]);
      if(!cut){var u=((t+i*430)%1800)/1800;packet(c,p[0]+S*.6,p[1],sx-S*.6,sy,u,i===bad&&t>900&&t<2900?OR:T.bl,0);}
      if(cut){var mx=lerp(p[0]+S*.6,sx-S*.6,.5),my=lerp(p[1],sy,.5);ga(c,isoU);cross(c,mx,my,12,T.rd);ga(c,1);}});
    server(c,sx,sy,S*1.15,T.bl,T);txt(c,'File server',sx,sy+S*.95,'700 '+(nar?9:10)+'px '+MONO,T.mut,'center');
    pts.forEach(function(p,i){var col=T.bl;if(i===bad){col=t<900?T.bl:t<2900?OR:T.rd;}
      if(i===bad&&t>900&&t<2600){var pu=(t%700)/700;ga(c,.5*(1-pu));c.strokeStyle=OR;c.lineWidth=2;c.beginPath();c.arc(p[0],p[1],S*(.8+pu*.6),0,TAU);c.stroke();ga(c,1);}
      laptop(c,p[0],p[1],S,col,T);
      var lab=i===bad?'LAPTOP-07':'PC-0'+(i+1);txt(c,lab,p[0],p[1]+S*.72,'600 '+(nar?8:9)+'px '+MONO,i===bad?col:T.mut,'center');
      if(i!==bad&&t>3800){var u2=eo(seg(3800+i*90,4200+i*90,t));ga(c,u2);c.fillStyle=GR;c.beginPath();c.arc(p[0]+S*.55,p[1]-S*.45,7,0,TAU);c.fill();tick(c,p[0]+S*.55,p[1]-S*.45,9,'#fff');ga(c,1);}});
    // encrypting files flicker
    var bp=pts[bad];if(t>900&&t<2000){for(var f=0;f<4;f++){var fu=((t-900+f*200)%800)/800;ga(c,1-fu);rr(c,bp[0]-S*.9+f*S*.5,bp[1]-S*1.15-fu*12,9,11,2);c.fillStyle=f%2?OR:T.rd;c.fill();}ga(c,1);}
    if(isoU>0){c.strokeStyle=T.rd;c.lineWidth=2;c.setLineDash([5,4]);ga(c,isoU);c.beginPath();c.arc(bp[0],bp[1],S*(.4+1.0*isoU),0,TAU);c.stroke();c.setLineDash([]);ga(c,1);
      pill(c,'ISOLATED',bp[0],bp[1]-S*1.35,'800 '+(nar?8:9)+'px '+MONO,RD,'#fff','center');}
    if(t>1700&&t<2900)pill(c,'BEHAVIOUR BLOCKED',bp[0],bp[1]-S*1.35,'800 '+(nar?8:9)+'px '+MONO,OR,'#fff','center');
    stamp(c,'0 FILES LOST',sx-(nar?18:30),top+14,4300,t,T.gr,nar?10:11);
    var f=t<900?.15:t<1700?.35+.3*alertU:t<2900?.7:t<3600?.7+.3*isoU:1;
    return {f:f,v:t<900?'Watching behaviour…':t<1700?'Ransomware-like activity':t<2900?'Behaviour blocked':'Device isolated',s:t<2900?'LAPTOP-07 · staff user':'other 5 devices clean',c:t<900?'':t<1700?'o':'g',n:Math.round(f*100)+'%'};}

  /* --- scene 1: phishing detonated in sandbox & purged --- */
  function s1(c,w,h,t){var T=th(),nar=w<480,top=48,bot=h-12;
    var bx=nar?w*.08:w*.06,bw=nar?w*.42:w*.38,by=top+16,bh=bot-by-8;
    // sandbox chamber
    card(c,bx,by,bw,bh,T,t>1700&&t<2400?RD:null);txt(c,'SANDBOX',bx+10,by+13,'800 '+(nar?8:9)+'px '+MONO,T.mut);
    var cx=bx+bw/2,cy=by+bh/2+6;
    var inU=eo(seg(200,1100,t));var ex=lerp(-20,cx,inU);
    if(t>1100&&t<1800){for(var i=0;i<4;i++){var yy=by+24+((t*0.12+i*(bh/4))%(bh-30));c.fillStyle=dark()?'rgba(92,157,255,.25)':'rgba(0,102,255,.14)';c.fillRect(bx+6,yy,bw-12,2);}}
    var col=t<1700?T.bl:T.rd;
    if(t<2500){ga(c,t<2200?1:1-seg(2200,2500,t));env(c,ex,cy,nar?30:38,col,T);ga(c,1);}
    if(t>1300){var lu=eo(seg(1300,1700,t));ga(c,lu);txt(c,'link → unknown site',cx,cy+(nar?28:34),'600 '+(nar?8:9.5)+'px '+MONO,T.mut,'center');ga(c,1);}
    if(t>1700)pill(c,'MALICIOUS LINK',cx,by+bh-16,'800 '+(nar?8:9)+'px '+MONO,RD,'#fff','center');
    // inbox list
    var lx=bx+bw+(nar?10:22),lw=w-lx-(nar?8:16),rh=(bh-22)/5;
    txt(c,'DELIVERED TO',lx,by+8,'800 '+(nar?8:9)+'px '+MONO,T.mut);
    var names=nar?['accts@','hr@','ops@','ceo@','sales@']:['accounts@','hr@','operations@','director@','sales@'],purged=0;
    for(var k=0;k<5;k++){var y=by+20+k*rh,tp=2600+k*340,pu=eo(seg(tp,tp+300,t));if(t>tp+300)purged++;
      rr(c,lx,y,lw,rh-5,8);c.fillStyle=T.soft;c.fill();
      env(c,lx+16,y+(rh-5)/2,13,pu>0?T.mut:T.bl,T);
      txt(c,names[k],lx+32,y+(rh-5)/2,'600 '+(nar?8.5:10)+'px '+SANS,T.ink);
      if(pu>0){ga(c,pu);c.strokeStyle=T.rd;c.lineWidth=1.6;c.beginPath();c.moveTo(lx+30,y+(rh-5)/2);c.lineTo(lerp(lx+30,lx+lw-56,pu),y+(rh-5)/2);c.stroke();
        pill(c,'purged',lx+lw-6,y+(rh-5)/2,'700 '+(nar?7.5:8.5)+'px '+MONO,GR,'#fff','right');ga(c,1);}
      else if(t>1700){var pul=.5+.5*Math.sin(t/160+k);ga(c,.4+.4*pul);c.fillStyle=OR;c.beginPath();c.arc(lx+lw-12,y+(rh-5)/2,3.5,0,TAU);c.fill();ga(c,1);}}
    stamp(c,'ZAP · 5 / 5',cx,by+bh*.28,4300,t,T.gr,nar?10:11);
    return {f:t<1700?.3*seg(0,1700,t):.4+.6*(purged/5),v:t<1100?'Inbound message':t<1700?'Detonating in sandbox':purged<5?'Purging inboxes · '+purged+'/5':'Purged from 5 inboxes',s:'Safe Links + Safe Attachments',c:t<1700?'':purged<5?'o':'g',n:purged+'/5'};}

  /* --- scene 2: identity lateral movement --- */
  function s2(c,w,h,t){var T=th(),nar=w<480,top=56,bot=h-26;
    var N=[[.12,.62,'PC-12','pc'],[.38,.32,'PC-31','pc'],[.62,.68,'FILE-SRV','srv'],[.87,.38,'DC-01','dc']];
    var P=N.map(function(n){return [n[0]*w,lerp(top,bot,n[1])];}),S=nar?24:30;
    var hops=[[0,1,500,1300],[1,2,1300,2100],[2,3,2100,2700]],stopAt=2900;
    hops.forEach(function(hp,i){var a=P[hp[0]],b=P[hp[1]],lit=t>hp[2];c.strokeStyle=lit?(t>stopAt?T.line:OR):T.line;c.lineWidth=lit?2.2:1.2;c.setLineDash(lit?[]:[4,5]);c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(b[0],b[1]);c.stroke();c.setLineDash([]);
      if(i<2||t<stopAt)packet(c,a[0],a[1],b[0],b[1],seg(hp[2],hp[3],t),OR,10);});
    if(t>2200&&t<stopAt){var mx=(P[2][0]+P[3][0])/2,my=(P[2][1]+P[3][1])/2;cross(c,mx,my,14,T.rd);}
    N.forEach(function(n,i){var p=P[i],col=T.bl;if(n[3]==='dc')col=t>stopAt?T.gr:T.bl;else if(i<3&&t>hops[Math.max(0,i-1)][2]+(i?800:0))col=t>stopAt?T.mut:OR;
      if(n[3]==='pc')laptop(c,p[0],p[1],S,col,T);else server(c,p[0],p[1],S,col,T);
      txt(c,n[2],p[0],p[1]+S*.85,'700 '+(nar?8:9)+'px '+MONO,T.mut,'center');});
    // account
    var ax=P[0][0]-(nar?4:0),ay=P[0][1]+S*1.55;person(c,ax,ay,nar?16:20,t>stopAt?T.mut:T.bl);txt(c,nar?'svc-backup':'account: svc-backup',ax+(nar?12:16),ay,'600 '+(nar?8:9.5)+'px '+MONO,T.ink);
    if(t>stopAt){var lu=spring((t-stopAt)/500);c.save();c.translate(ax-(nar?14:18),ay);c.scale(lu,lu);lockI(c,0,0,nar?16:18,RD);c.restore();}
    if(t>2200)pill(c,t>stopAt?'ACCOUNT DISABLED':'LATERAL MOVEMENT',w*.5,h-12,'800 '+(nar?8:9)+'px '+MONO,t>stopAt?GR:RD,'#fff','center');
    // DC shield
    if(t>stopAt){var dp=P[3],u=eo(seg(stopAt,stopAt+500,t));ga(c,u);c.fillStyle=GR;c.beginPath();c.arc(dp[0]+S*.6,dp[1]-S*.6,8,0,TAU);c.fill();tick(c,dp[0]+S*.6,dp[1]-S*.6,10,'#fff');ga(c,1);}
    var hop=t<1300?1:t<2100?2:3;
    return {f:t<stopAt?.25*hop:1,v:t<2200?'Hop '+hop+' of 3 · tracing':t<stopAt?'Suspicious lateral movement':'Account disabled',s:t<stopAt?'svc-backup · 3 devices':'domain controller protected',c:t<2200?'o':t<stopAt?'r':'g',n:t<stopAt?hop+'/3':'✓'};}

  /* --- scene 3: cloud apps discovery & session control --- */
  var APPS=[['Mail',1],['CRM',1],['Drive',1],['Chat',2],['Notes',1],['FileX',3],['Design',2],['Forms',1],['PDF',2],['Board',1],['VPN-free',3],['Meet',1]];
  function s3(c,w,h,t){var T=th(),nar=w<480,top=48,cols=nar?4:6,gw=nar?w-24:w*.62,gx=12,tw=(gw-(cols-1)*8)/cols,th2=nar?34:52;
    var cnt=Math.round(142*eo(seg(200,1900,t)));
    APPS.forEach(function(a,i){var r=Math.floor(i/cols),k=i%cols,x=gx+k*(tw+8),y=top+18+r*(th2+8),au=eo(seg(200+i*110,600+i*110,t));if(au<=0)return;
      var risk=a[1],rc=risk===3?T.rd:risk===2?T.ot:T.gr,hl=i===5&&t>2400;
      ga(c,au);c.save();c.translate(x+tw/2,y+th2/2);c.scale(.8+.2*au,.8+.2*au);rr(c,-tw/2,-th2/2,tw,th2,8);c.fillStyle=hl?(dark()?'rgba(255,138,128,.15)':'rgba(192,57,43,.09)'):T.surf;c.fill();c.strokeStyle=hl?RD:T.line;c.lineWidth=hl?2:1;c.stroke();
      txt(c,a[0],-tw/2+8,-3,'700 '+(nar?8.5:9.5)+'px '+SANS,T.ink);c.fillStyle=rc;rr(c,-tw/2+8,6,Math.max(8,(tw-16)*risk/3),4,2);c.fill();c.restore();ga(c,1);});
    var rows=Math.ceil(APPS.length/cols);
    // counter card
    var ky=top+18+rows*(th2+8)+4;if(!nar||ky<h-30){txt(c,cnt+' apps discovered',gx,Math.min(ky+8,h-14),'800 '+(nar?10:12)+'px Sora',T.ink);txt(c,'9 high risk · sample',gx+(nar?120:150),Math.min(ky+8,h-14),'600 '+(nar?8:9)+'px '+MONO,T.ot);}
    if(t>2400&&!nar)pill(c,'UNSANCTIONED',gx+5*(tw+8)+tw/2,top+8,'800 8.5px '+MONO,RD,'#fff','center');
    // session control on right
    if(!nar){var px=w*.7,pw=w-px-14,py=top+18,ph=h-py-40;card(c,px,py,pw,ph,T);txt(c,'SESSION CONTROL',px+10,py+13,'800 9px '+MONO,T.mut);
      person(c,px+26,py+ph*.55,22,T.bl);var fx=px+pw-30,fy=py+ph*.55;rr(c,fx-12,fy-15,24,30,4);c.fillStyle=T.soft;c.fill();c.strokeStyle=T.line;c.stroke();txt(c,'file',fx,fy+22,'600 8.5px '+MONO,T.mut,'center');
      var du=seg(3000,3600,t);if(t>3000){var ax=lerp(fx-14,px+44,eio(Math.min(du,.55)/.55));c.strokeStyle=t>3330?T.rd:T.bl;c.lineWidth=2.4;c.beginPath();c.moveTo(fx-14,fy);c.lineTo(ax,fy);c.stroke();
        if(t>3330){var mx=(fx-14+px+44)/2;cross(c,mx,fy,16,T.rd);pill(c,'DOWNLOAD BLOCKED',px+pw/2,py+ph-14,'800 8.5px '+MONO,GR,'#fff','center');}}}
    else if(t>3000){pill(c,'DOWNLOAD BLOCKED · SESSION',w/2,h-12,'800 8px '+MONO,GR,'#fff','center');}
    return {f:t<2400?.6*seg(200,1900,t):t<3330?.8:1,v:t<2000?cnt+' apps found':t<3330?'1 app unsanctioned':'Download blocked',s:t<3330?'from firewall logs · 7 days':'session control · unmanaged device',c:t<2400?'':t<3330?'o':'g',n:String(cnt)};}

  /* --- scene 4: XDR incident, AIR + exposure score --- */
  function s4(c,w,h,t){var T=th(),nar=w<480,top=48,bot=h-12;
    var src=[['Endpoint',T.bl],['Email',T.ot],['Identity',T.bl],['Cloud apps',T.ot]],sx=12,sw=nar?70:88,sh=nar?24:28,gap=(bot-top-4*sh)/3;
    var ix=sx+sw+(nar?22:36),iw=nar?w-ix-12:w*.36,iy=top+6,ih=bot-iy;
    var alerts=0;
    src.forEach(function(s,i){var y=top+i*(sh+gap),u=seg(300+i*380,1100+i*380,t);if(t>1100+i*380)alerts++;
      rr(c,sx,y,sw,sh,7);c.fillStyle=T.soft;c.fill();c.strokeStyle=T.line;c.lineWidth=1;c.stroke();txt(c,s[0],sx+8,y+sh/2,'700 '+(nar?8:9.5)+'px '+SANS,T.ink);
      c.strokeStyle=T.line;c.setLineDash([3,4]);c.beginPath();c.moveTo(sx+sw,y+sh/2);c.lineTo(ix,iy+ih*.3);c.stroke();c.setLineDash([]);
      packet(c,sx+sw,y+sh/2,ix,iy+ih*.3,u,s[1],0);});
    card(c,ix,iy,iw,ih,T,t>4300?GR:BL);
    txt(c,'INCIDENT #2214',ix+10,iy+14,'800 '+(nar?8:9)+'px '+MONO,T.mut);
    txt(c,alerts+' alerts · 1 incident',ix+10,iy+33,'800 '+(nar?10.5:12.5)+'px Sora',T.ink);
    var steps=['Evidence collected','Device remediated','User contained'],stT=[2400,3000,3600];
    steps.forEach(function(s,i){var y=iy+56+i*(nar?22:26),u=eo(seg(stT[i],stT[i]+300,t));ga(c,.35+.65*u);c.fillStyle=u>=1?GR:T.soft;c.beginPath();c.arc(ix+18,y,7,0,TAU);c.fill();if(u>=1)tick(c,ix+18,y,9,'#fff');else if(t>stT[i]-600&&t>2200){var a=(t/120)%TAU;c.strokeStyle=BL;c.lineWidth=2;c.beginPath();c.arc(ix+18,y,7,a,a+2);c.stroke();}
      txt(c,s,ix+32,y,'600 '+(nar?8.5:10)+'px '+SANS,T.ink);ga(c,1);});
    var sc=Math.round(lerp(62,31,eio(seg(3200,4500,t))));
    if(!nar){var gx=ix+iw+(w-ix-iw)/2,gy=top+ih*.62,gr=Math.min(56,(w-ix-iw)/2-14);
      c.lineWidth=11;c.lineCap='round';c.strokeStyle=T.soft;c.beginPath();c.arc(gx,gy,gr,Math.PI,0);c.stroke();
      var f=sc/100;c.strokeStyle=sc>50?OR:GR;c.beginPath();c.arc(gx,gy,gr,Math.PI,Math.PI+Math.PI*f);c.stroke();c.lineCap='butt';
      txt(c,String(sc),gx,gy-12,'800 22px Sora',T.ink,'center');txt(c,'EXPOSURE SCORE',gx,gy+14,'800 8.5px '+MONO,T.mut,'center');txt(c,'lower is better',gx,gy+28,'500 8.5px '+MONO,T.mut,'center');}
    else txt(c,'Exposure '+sc,ix+10,bot-12,'800 10px '+MONO,sc>50?T.ot:T.gr);
    stamp(c,'REMEDIATED',ix+iw/2,nar?iy+ih-44:iy+ih-18,4400,t,T.gr,nar?10:11);
    return {f:t<2200?.25*alerts:t<4400?.55+.4*seg(2200,4400,t):1,v:t<2200?alerts+' alerts correlating…':t<3800?'Automated investigation':'Exposure score '+sc,s:'1 user · 1 device · auto-remediated',c:t<2200?'':t<4400?'o':'g',n:t<2200?String(alerts):String(sc)};}
  var DRAW=[s0,s1,s2,s3,s4];

  var cur=0,prev=-1,tS=0,tLast=0,fadeT=FADE,paused=false,lastG={v:'',c:'_'};
  function buildLog(k){if(!logEl)return;logEl.innerHTML=SC[k].lg.map(function(e){return '<li class="'+e[4]+'"><b>'+e[1]+'</b><span>'+esc(e[2])+'</span><em>'+esc(e[3])+'</em></li>';}).join('');}
  function logAt(t){if(!logEl)return;var lg=SC[cur].lg,li=logEl.children;for(var i=0;i<lg.length;i++){var on=R||t>=lg[i][0];if(li[i]&&li[i].classList.contains('in')!==on)li[i].classList.toggle('in',on);}}
  function setScene(k,user){k=(k+5)%5;if(k===cur&&!user)return;prev=cur;cur=k;tS=0;fadeT=R?FADE:0;
    tabs.forEach(function(b,i){var on=i===cur;b.classList.toggle('on',on);b.classList.toggle('done',i<cur);b.setAttribute('aria-selected',on);b.style.setProperty('--p','0');});
    var S=SC[cur];setT('dfCapN','0'+(cur+1));setT('dfCapT',S.cap);setT('dfPh',S.ph);setT('dfLt',S.lt);setT(vk,S.k);buildLog(cur);lastG={v:'',c:'_'};if(R)render();}
  function gauge(g){if(!ring)return;var f=clamp(g.f,0,1);ring.style.strokeDashoffset=(100*(1-f)).toFixed(1);if(g.c!==lastG.c)ring.setAttribute('class','fg'+(g.c?' '+g.c:''));
    setT(ringV,g.n);if(g.v!==lastG.v){var was=lastG.v;setT(vb,g.v);if(was!=='')bump(vb);}setT(vs,g.s);lastG={v:g.v,c:g.c};}
  function render(){var f=cv&&fitC(cv);if(!f)return;var c=f.c,w=f.w,h=f.h;c.clearRect(0,0,w,h);
    var t=R?5200:tS,fading=prev>=0&&fadeT<FADE,g;
    if(fading){var u=fadeT/FADE;GA=1-eo(Math.min(1,u*1.4));c.globalAlpha=GA;c.save();c.translate(-u*14,0);DRAW[prev](c,w,h,5200);c.restore();GA=eo(u);c.globalAlpha=GA;c.save();c.translate((1-u)*14,0);g=DRAW[cur](c,w,h,t);c.restore();GA=1;c.globalAlpha=1;}
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
    if(R){render();addEventListener('resize',render);}
    else{
      watch(hero,function(v){tLast=0;heroOn(v);});
      var stg=$id('dfStage');stg.addEventListener('mouseenter',function(){setPause(true);});stg.addEventListener('mouseleave',function(){setPause(false);});
      stg.addEventListener('focusin',function(){setPause(true);});stg.addEventListener('focusout',function(){setPause(false);});
      addEventListener('resize',function(){render();});
      var sx=null,sy=null;
      scr.addEventListener('pointerdown',function(e){if(e.pointerType==='touch')return;sx=e.clientX;sy=e.clientY;});
      scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))setScene(cur+(dx<0?1:-1),true);});
      scr.addEventListener('touchstart',function(e){var p=e.touches[0];sx=p.clientX;sy=p.clientY;},{passive:true});
      scr.addEventListener('touchend',function(e){if(sx===null)return;var p=e.changedTouches[0],dx=p.clientX-sx,dy=p.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){setScene(cur+(dx<0?1:-1),true);setPause(false);}},{passive:true});
      tabsEl.addEventListener('keydown',function(e){var k=e.key;if(k==='ArrowRight'){setScene(cur+1,true);tabs[cur].focus();e.preventDefault();}else if(k==='ArrowLeft'){setScene(cur-1,true);tabs[cur].focus();e.preventDefault();}});
    }
    new MutationObserver(function(){render();}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
  }

  /* ===== magnetic CTAs ===== */
  if(!R&&matchMedia('(hover:hover)').matches){$$('.df-mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;b.style.transform='translate('+(x*8).toFixed(1)+'px,'+(y*6).toFixed(1)+'px)';});b.addEventListener('mouseleave',function(){b.style.transform='';});});
    $$('.df-fc').forEach(function(cd){cd.addEventListener('mousemove',function(e){var r=cd.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;cd.style.transform='translateY(-4px) perspective(700px) rotateX('+(-y*5).toFixed(2)+'deg) rotateY('+(x*6).toFixed(2)+'deg)';});cd.addEventListener('mouseleave',function(){cd.style.transform='';});});}

  /* ===== sub nav active ===== */
  (function(){var links=$$('.df-sub a');if(!links.length||!('IntersectionObserver' in window))return;var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
    var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){links.forEach(function(a){a.classList.remove('on');});var a=map[x.target.id];if(a)a.classList.add('on');}});},{rootMargin:'-40% 0px -55% 0px'});
    Object.keys(map).forEach(function(id){var s=$id(id);if(s)io.observe(s);});})();

  /* ===== threat map ===== */
  (function(){var tl=$$('.df-tml button'),lis=$$('#dfLay li'),tt=$id('dfTmt');if(!tl.length)return;
    // per attack: [ASR, NGAV, EDR, AIR, VM]  s = stops it · p = helps · '' = n/a
    var M=[[['s','s','s','s',''],'Attack surface reduction blocks common entry points; next-gen antivirus catches new variants by behaviour; EDR isolates affected devices; automated investigation cleans up the incident.'],
      [['s','s','p','s',''],'Rules stop scripts launched from email and Office apps; next-gen antivirus blocks malicious attachments; automated investigation cleans up what was opened. Business Premium adds Defender for Office 365 to stop the email itself.'],
      [['s','','s','s',''],'Credential-theft protection guards system memory; EDR flags unusual sign-in tools and remote logons; automated investigation contains the device. Defender for Identity adds Active Directory coverage.'],
      [['p','p','p','','s'],'Vulnerability management finds missing patches and weak settings and ranks them by risk, so the gap is closed before it is used. Other layers catch exploitation attempts.'],
      [['s','p','s','s',''],'Fileless attacks misuse legitimate tools, so signatures miss them. ASR rules limit risky script behaviour, EDR watches what tools actually do, and automated investigation remediates.']];
    var LBL={s:'✓ STOPS IT',p:'◇ HELPS','':'—'};
    function show(a){tl.forEach(function(b,i){b.classList.toggle('on',i===a);b.setAttribute('aria-selected',i===a);});
      lis.forEach(function(li,i){var v=M[a][0][i];li.classList.remove('s','p');void li.offsetWidth;if(v)setTimeout(function(){li.classList.add(v);},R?0:i*110);li.querySelector('em').textContent=LBL[v];});setT(tt,M[a][1]);}
    tl.forEach(function(b,i){b.addEventListener('click',function(){show(i);});});show(0);})();

  /* ===== capabilities: tab underline ===== */
  (function(){var bar=$('.df-ctabs'),ul=$('.df-ul');if(!bar||!ul)return;function mv(){var b=$('button.on',bar);if(!b)return;ul.style.width=b.offsetWidth+'px';ul.style.transform='translateX('+(b.offsetLeft-bar.scrollLeft)+'px)';}
    bar.addEventListener('click',function(e){if(e.target.closest('button'))setTimeout(mv,0);});bar.addEventListener('scroll',mv,{passive:true});addEventListener('resize',mv);setTimeout(mv,300);d.fonts&&d.fonts.ready.then(mv);})();

  /* ===== XDR fusion (illustration 1) ===== */
  (function(){var svg=$id('dfFus'),g=$id('dfFusPk');if(!svg||!g)return;var NS='http://www.w3.org/2000/svg';
    var paths=[0,1,2,3,4,5].map(function(i){return $id('fp'+i);}),L=paths.map(function(p){return p.getTotalLength();}),dots=[];
    for(var i=0;i<6;i++){var cc=d.createElementNS(NS,'circle');cc.setAttribute('r',i<4?4:5);cc.setAttribute('fill',i<4?(i%2?'#FF8A00':'#0066FF'):(i===5?'#FF8A00':'#16a34a'));g.appendChild(cc);dots.push(cc);}
    function draw(now){for(var i=0;i<6;i++){var per=i<4?2200:2600,off=i<4?i*420:1300+(i-4)*500,u=((now+off)%per)/per;if(i>=4)u=eio(u);var p=paths[i].getPointAtLength(L[i]*u);dots[i].setAttribute('cx',p.x.toFixed(1));dots[i].setAttribute('cy',p.y.toFixed(1));dots[i].setAttribute('opacity',(u<.08?u/.08:u>.92?(1-u)/.08:1).toFixed(2));}}
    if(R){draw(900);return;}var on=loop(draw);watch(svg,on);})();

  /* ===== attack-disruption timeline (illustration 3) ===== */
  (function(){var svg=$id('dfDisSvg');if(!svg)return;var NS='http://www.w3.org/2000/svg',stg=$('.stg',svg),mk=$id('dfDisM'),pr=$id('dfDisR'),pb=$id('dfDisB');
    var ST=[[40,'Initial access','phishing link'],[250,'Credential theft','token / password'],[460,'Lateral movement','remote logons'],[670,'Encryption attempt','file shares'],[860,'Impact','business stops']];
    ST.forEach(function(s){var gg=d.createElementNS(NS,'g');gg.setAttribute('class','st');gg.innerHTML='<line x1="'+s[0]+'" y1="40" x2="'+s[0]+'" y2="150" stroke="rgba(255,255,255,.08)"/><circle cx="'+s[0]+'" cy="150" r="5"/><text x="'+s[0]+'" y="172" text-anchor="'+(s[0]>800?'end':s[0]<60?'start':'middle')+'">'+s[1]+'</text><text class="m" x="'+s[0]+'" y="186" text-anchor="'+(s[0]>800?'end':s[0]<60?'start':'middle')+'">'+s[2]+'</text>';stg.appendChild(gg);});
    mk.innerHTML='<g id="dfDX" opacity="0"><circle cx="460" cy="70" r="14" fill="#0066FF"/><path d="M454 64 L466 76 M466 64 L454 76" stroke="#fff" stroke-width="2.6" stroke-linecap="round"/><text x="482" y="66" style="font:700 12px Sora;fill:#fff">Contained</text><text class="m" x="482" y="82">device + user · auto</text></g><text class="m" x="40" y="56">WITH DISRUPTION</text><text class="m" x="40" y="98">WITHOUT XDR</text><g id="dfDR" opacity="0"><circle cx="860" cy="110" r="9" fill="#c0392b"/></g>';
    var dx=$id('dfDX'),drr=$id('dfDR'),LR=pr.getTotalLength(),LB=pb.getTotalLength();pr.style.strokeDasharray=LR;pb.style.strokeDasharray=LB;
    function draw(now){var t=now%9000,ur=eio(seg(300,6800,t)),ub=eio(seg(300,3800,t)),fade=1-seg(8300,9000,t);
      pr.style.strokeDashoffset=(LR*(1-ur)).toFixed(1);pb.style.strokeDashoffset=(LB*(1-ub)).toFixed(1);pr.style.opacity=pb.style.opacity=fade;
      dx.setAttribute('opacity',(seg(3700,4200,t)*fade).toFixed(2));drr.setAttribute('opacity',(seg(6700,7000,t)*fade).toFixed(2));}
    if(R){draw(8000);return;}var on=loop(draw);watch(svg,on);})();

  /* ===== licence-to-coverage map (illustration 2) ===== */
  (function(){var tb=$('#dfMx tbody'),tbl=$id('dfMx');if(!tb)return;
    // y included · a add-on · n not included ; cols: BP, E3, E5, O5, standalone
    var ROWS=[['Defender for Business',['y','n','n','n','y'],['','','P2 instead','','₹250']],
      ['Defender for Endpoint P1',['n','y','y','n','y'],['DfB instead','','via P2','','']],
      ['Defender for Endpoint P2 (EDR, hunting)',['a','a','y','n','y'],['Defender Suite','Defender Suite','','','']],
      ['Defender for Office 365 P1',['y','n','y','y','y'],['','','','','']],
      ['Defender for Office 365 P2',['a','a','y','y','y'],['Defender Suite','Defender Suite','','','']],
      ['Defender for Identity',['a','a','y','n','y'],['Defender Suite','Defender Suite','','','']],
      ['Defender for Cloud Apps',['a','a','y','n','y'],['Defender Suite','Defender Suite','','','']],
      ['Vulnerability Management · premium',['n','a','a','n','y'],['not for DfB','standalone','₹165 add-on','','']],
      ['Defender for Business servers',['a','n','n','n','n'],['₹250/server','','','','']],
      ['Security Copilot inclusion',['n','n','y','n','n'],['','','rolling out','','']]];
    var SYM={y:'●',a:'◐',n:'—'},CN=['Business Premium','Microsoft 365 E3','Microsoft 365 E5','Office 365 E5','Standalone'];
    var NOTE=['Defender for Business and Office 365 P1 built in; the Defender Suite for Business Premium adds P2-level endpoint, email, identity and cloud-app protection.','Defender for Endpoint P1 only — no EDR. Add the Microsoft Defender Suite (₹1,000) or move to E5 for full Defender XDR.','The widest Defender XDR coverage, plus Security Copilot inclusion as Microsoft rolls it out. Premium vulnerability management is an add-on.','Strong on email (Office 365 P2) but no endpoint, identity or cloud-app Defender.','Every component can be bought on its own; most are cheaper inside a plan.'];
    tb.innerHTML=ROWS.map(function(r){return '<tr><td>'+r[0]+'</td>'+r[1].map(function(v,i){return '<td data-c="'+i+'"><span class="d '+v+'" style="transition-delay:'+(Math.random()*0.4).toFixed(2)+'s">'+SYM[v]+'</span>'+(r[2][i]?'<small>'+r[2][i]+'</small>':'')+'</td>';}).join('')+'</tr>';}).join('');
    var ths=$$('#dfMx thead th'),btns=$$('#dfCvp button'),rg=$id('dfCvRing');
    function pick(ci){btns.forEach(function(b){b.classList.toggle('on',+b.getAttribute('data-c')===ci);});ths.forEach(function(th,i){th.classList.toggle('col',i===ci+1);});
      $$('td[data-c]',tb).forEach(function(td){td.classList.toggle('col',+td.getAttribute('data-c')===ci);});
      var yes=ROWS.filter(function(r){return r[1][ci]==='y';}).length,add=ROWS.filter(function(r){return r[1][ci]==='a';}).length;
      if(ci===4){yes=ROWS.filter(function(r){return r[1][4]==='y';}).length;}
      setT('dfCvN',yes+' / '+ROWS.length);setT('dfCvL',CN[ci]+(add?' · +'+add+' via add-on':''));setT('dfCvT',NOTE[ci]);
      rg.style.strokeDashoffset=(100-100*yes/ROWS.length).toFixed(1);}
    btns.forEach(function(b){b.addEventListener('click',function(){pick(+b.getAttribute('data-c'));});});
    pick(2);XH.whenVisible(tbl,function(v){if(v)tbl.classList.add('in');});if(R)tbl.classList.add('in');})();

  /* ===== onboarding line ===== */
  (function(){var o=$id('dfObt');if(!o)return;XH.whenVisible(o,function(v){if(v)o.classList.add('in');});if(R)o.classList.add('in');})();

  /* ======================================================================
     PRICING · configurator (#configure)
     ====================================================================== */
  var PL={dfb:250,bp:1830,e3:3245,e5:4990,o5:3410,none:0},SUITE=1000,SRV=250,MAN={ess:199,pro:449,none:0},DEP=24999;
  var LN={dfb:'Microsoft Defender for Business',bp:'Microsoft 365 Business Premium',e3:'Microsoft 365 E3',e5:'Microsoft 365 E5',o5:'Office 365 E5',none:'Existing licences'};
  var cLic=$id('cLic'),cUsers=$id('cUsers'),cSrv=$id('cSrv'),cSrvF=$id('cSrvF'),cSuite=$id('cSuite'),cSuiteL=$id('cSuiteL'),cTerm=$id('cTerm'),cMan=$id('cMan'),cDev=$id('cDev'),cDevF=$id('cDevF'),cAv=$id('cAv'),cDep=$id('cDep');
  var devTouched=false,st=null;
  function num(el,def){var v=parseInt(el&&el.value,10);return isNaN(v)?def:v;}
  function calc(){var lic=segV(cLic)||'dfb',u=clamp(num(cUsers,1),1,5000),cap=(lic==='dfb'||lic==='bp');
    if(cap&&u>300){u=300;cUsers.value=300;XH.toast('Defender for Business and Business Premium are limited to 300 users.');}
    var srv=cap?clamp(num(cSrv,0),0,60):0,suite=lic==='e3'&&cSuite.checked,term=segV(cTerm)||'m',mt=segV(cMan)||'ess';
    if(!devTouched){cDev.value=u+srv;}var dev=clamp(num(cDev,u+srv),1,20000);
    var mult=term==='y'?12:1,items=[];
    if(lic!=='none')items.push({key:'df-lic-'+lic,name:LN[lic],sub:'per user · '+(term==='y'?'12 months, paid upfront':'per month · annual commitment'),unit:PL[lic]*mult,qty:u,col:'#0066FF',lab:LN[lic]+' × '+u});
    if(suite)items.push({key:'df-suite',name:'Microsoft Defender Suite (E3 add-on)',sub:'per user · '+(term==='y'?'12 months':'per month'),unit:SUITE*mult,qty:u,col:'#5C9DFF',lab:'Defender Suite × '+u});
    if(srv>0)items.push({key:'df-srv',name:'Defender for Business servers',sub:'per server · '+(term==='y'?'12 months':'per month'),unit:SRV*mult,qty:srv,col:'#7FB0FF',lab:'Servers add-on × '+srv});
    if(mt!=='none')items.push({key:'df-man-'+mt,name:'Managed Defender — '+(mt==='pro'?'Professional':'Essential'),sub:'per device · '+(term==='y'?'12 months':'per month')+' · indicative*',unit:MAN[mt]*mult,qty:dev,col:'#FF8A00',lab:'Managed '+(mt==='pro'?'Professional':'Essential')+' × '+dev});
    var depQ=Math.max(1,Math.ceil(dev/100));if(cDep.checked)items.push({key:'df-dep',name:'Defender deployment & hardening',sub:'one-time · per 100 devices · indicative*',unit:DEP,qty:depQ,col:'#16a34a',lab:'Deployment'+(depQ>1?' × '+depQ:'')+' · one-time'});
    var sub=items.reduce(function(a,i){return a+i.unit*i.qty;},0),gst=Math.round(sub*.18);
    st={lic:lic,u:u,srv:srv,dev:dev,term:term,mt:mt,items:items,sub:sub,gst:gst,tot:sub+gst};return st;}
  function render2(){if(!cLic)return;var s=calc(),cap=(s.lic==='dfb'||s.lic==='bp');
    cSrvF.style.opacity=cap?1:.45;cSrv.disabled=!cap;cSuiteL.hidden=s.lic!=='e3';cDevF.style.opacity=s.mt==='none'?.45:1;
    setT('cUsersN',cap?'max 300 for this plan':'no user cap');
    setT('cName',(s.lic==='none'?'XcellHost services':LN[s.lic])+' · '+s.u+' users');
    $id('cList').innerHTML=s.items.map(function(i){return '<li><i style="background:'+i.col+'"></i><span>'+esc(i.lab)+'</span><b>'+inr(i.unit*i.qty)+'</b></li>';}).join('')||'<li><i></i><span>Pick a licence or service</span><b>₹0</b></li>';
    $id('cBars').innerHTML=s.items.map(function(i){return '<i style="width:'+(s.sub?(100*i.unit*i.qty/s.sub):0).toFixed(1)+'%;background:'+i.col+'"></i>';}).join('');
    setT('cSubL',s.term==='y'?'Subtotal · 12 months + one-time':'Subtotal · first month + one-time');
    var a=$id('cSub'),pv=a.textContent;setT(a,inr(s.sub));setT('cGst',inr(s.gst));setT('cTot',inr(s.tot));if(pv!==a.textContent)bump($id('cTot'));
    var av=clamp(num(cAv,0),0,20000);setT('cAvN',av>0&&s.lic!=='none'?'Your current antivirus is about '+inr(av*s.u/12)+' a month for one device per user. '+(s.lic==='e3'&&!$id('cSuite').checked?'E3 adds Defender for Endpoint P1; add the Defender Suite for EDR.':'Defender also adds EDR, attack surface reduction and automated investigation.'):'');}
  if(cLic){[cLic,cTerm,cMan].forEach(function(e){e.addEventListener('change',render2);});[cUsers,cSrv,cAv].forEach(function(e){e.addEventListener('input',render2);});
    cDev.addEventListener('input',function(){devTouched=true;render2();});cSuite.addEventListener('change',render2);cDep.addEventListener('change',render2);
    $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-pick');if(k==='srv'){var cur=segV(cLic);if(cur!=='dfb'&&cur!=='bp')setSeg(cLic,'dfb');if(num(cSrv,0)<1){cSrv.value=2;}}else setSeg(cLic,k);render2();var cf=$id('configure');scrollTo({top:cf.getBoundingClientRect().top+scrollY-110,behavior:R?'auto':'smooth'});XH.flash&&XH.flash(cf);});});
    $id('oAdd').addEventListener('click',function(){var s=calc();if(!s.items.length){XH.toast('Choose a licence or a service first.');return;}s.items.forEach(function(i){XH.cart.add({key:i.key,name:i.name,sub:i.sub,price:i.unit,qty:i.qty});});});
    $id('cQuote').addEventListener('click',function(){var s=calc();try{var ta=$('#xhCallback textarea');if(ta)ta.value='Microsoft Defender estimate: '+s.items.map(function(i){return i.lab;}).join(' · ')+' · subtotal '+inr(s.sub)+' excl. GST';}catch(e){}});
    render2();}

  /* ======================================================================
     TOOL 1 · Which Defender do I need?
     ====================================================================== */
  (function(){var lCur=$id('lCur'),lUsers=$id('lUsers'),nd=$id('lNeeds');if(!lCur)return;
    var NEED={edr:'EDR on devices',mail:'Phishing & attachments',ident:'On-prem AD attacks',saas:'Shadow IT & SaaS',hunt:'Threat hunting',ai:'Security Copilot',srv:'Servers',vmp:'Premium vuln. mgmt'};
    var HAVE={none:{},o3:{},dfb:{edr:'y'},bp:{edr:'y',mail:'y'},e3:{edr:'p'},o5:{mail:'y'},e5:{edr:'y',mail:'y',ident:'y',saas:'y',hunt:'y',ai:'y'}};
    var PRICE={none:0,o3:2165,dfb:250,bp:1830,e3:3245,o5:3410,e5:4990};
    var OPT=[
      {id:'adddfb',name:'Add Defender for Business',cov:['edr'],cap:300,from:['none','o3','o5'],per:function(c){return 250;},why:'Adds next-gen antivirus, EDR and automated investigation to the devices you have.'},
      {id:'bp',name:'Move to Microsoft 365 Business Premium',cov:['edr','mail'],cap:300,from:['none','o3','dfb'],per:function(c){return 1830-PRICE[c];},why:'Defender for Business plus Defender for Office 365 P1, Intune and Entra ID P1 in one licence.'},
      {id:'bpsuite',name:'Business Premium + Defender Suite for Business Premium',cov:['edr','mail','ident','saas','hunt'],cap:300,from:['none','o3','dfb','bp'],per:function(c){return null;},why:'P2-level endpoint, email, identity and cloud-app protection for up to 300 users. India price on quote.'},
      {id:'suite',name:'Add Microsoft Defender Suite to M365 E3',cov:['edr','mail','ident','saas','hunt'],cap:1e9,from:['e3'],per:function(c){return 1000;},why:'Defender for Endpoint P2, Office 365 P2, Identity and Cloud Apps on top of E3 — ₹1,000 per user.'},
      {id:'e5',name:'Move to Microsoft 365 E5',cov:['edr','mail','ident','saas','hunt','ai'],cap:1e9,from:['none','o3','dfb','bp','e3','o5'],per:function(c){return 4990-PRICE[c];},why:'Full Defender XDR plus Security Copilot inclusion as Microsoft rolls it out.'}];
    function run(){var cur=lCur.value,u=clamp(parseInt(lUsers.value,10)||1,1,20000),needs=$$('input:checked',nd).map(function(i){return i.value;}),have=HAVE[cur];
      setT('lUsersN',u>300?'over 300 · enterprise plans':'≤ 300 · SMB plans available');
      $id('lBars').innerHTML=Object.keys(NEED).filter(function(k){return needs.indexOf(k)>=0;}).map(function(k){var v=have[k]||'n';if(k==='srv')v=(cur==='dfb'||cur==='bp')?'a':'n';if(k==='vmp')v=(cur==='e5')?'a':'n';if(k==='edr'&&v==='p')v='a';
        var lab={y:'covered',a:k==='edr'?'P1 · no EDR':'add-on',n:'gap'}[v];return '<li class="'+v+'">'+NEED[k]+'<em>'+lab+'</em><span><i data-w="'+(v==='y'?100:v==='a'?50:12)+'"></i></span></li>';}).join('')||'<li class="y">Tick at least one need<em></em><span><i data-w="0"></i></span></li>';
      requestAnimationFrame(function(){$$('#lBars i').forEach(function(i){i.style.width=i.getAttribute('data-w')+'%';});});
      var core=needs.filter(function(k){return k!=='srv'&&k!=='vmp';}),gap=core.filter(function(k){return have[k]!=='y';});
      var rec,why,cost=0,costTxt;
      if(!gap.length){rec='Your current licence covers these needs';why='Make sure it is fully deployed and tuned — most gaps we find are configuration, not licensing.';}
      else{var c2=OPT.filter(function(o){return o.from.indexOf(cur)>=0&&u<=o.cap&&gap.every(function(k){return o.cov.indexOf(k)>=0;});});
        c2.sort(function(a,b){var pa=a.per(cur),pb=b.per(cur);return (pa===null?900:pa)-(pb===null?900:pb);});
        var best=c2[0];if(!best){rec='Microsoft 365 E5';best=OPT[4];}rec=best.name;why=best.why;cost=best.per(cur);}
      var extra=[];if(needs.indexOf('srv')>=0)extra.push((cur==='dfb'||cur==='bp'||/bp|adddfb/.test(rec))&&u<=300?'servers: Defender for Business servers ₹250/server (up to 60)':'servers: Defender for Servers via Defender for Cloud (quoted)');
      if(needs.indexOf('vmp')>=0)extra.push(cur==='dfb'||cur==='bp'?'premium vulnerability management is not offered with Defender for Business':'premium vulnerability management add-on ₹165/user');
      if(extra.length)why+=' Also: '+extra.join('; ')+'.';
      setT('lRec',rec);setT('lWhy',why);
      if(cost===null){setT('lCost','On quote');setT('lCostS','India price not published · we quote it');}
      else if(cost<0){setT('lCost','−'+inr(-cost*u));setT('lCostS','per month for '+u+' users · saves '+inr(-cost)+'/user vs your current licence · Microsoft India list, GST extra');}
      else{setT('lCost',inr(cost*u));setT('lCostS','per month for '+u+' users · '+(cost>0?inr(cost)+'/user':'no extra licence')+' · Microsoft India list, GST extra');}}
    lCur.addEventListener('change',run);lUsers.addEventListener('input',run);nd.addEventListener('change',run);run();})();

  /* ======================================================================
     TOOL 2 · Security coverage score
     ====================================================================== */
  (function(){var box=$id('sItems');if(!box)return;
    var DOM=['Endpoint','Email','Identity','Cloud','Operations'];
    var IT=[[0,'EDR on every device',12,'Onboard the remaining devices to Defender — EDR only sees what is enrolled.'],[0,'ASR rules in block mode',10,'Move tested ASR rules from audit to block.'],[0,'Tamper protection on',6,'Turn on tamper protection so attackers cannot switch Defender off.'],
      [1,'Safe Links & Safe Attachments',10,'Enable Defender for Office 365 Safe Links and Safe Attachments policies.'],[1,'Phishing simulation for staff',6,'Run quarterly attack simulation training.'],
      [2,'MFA for every user',12,'Enforce MFA with Conditional Access — the single biggest identity win.'],[2,'Identity sensors on domain controllers',8,'Deploy Defender for Identity sensors on every DC.'],
      [3,'Shadow-IT discovery',7,'Connect Defender for Cloud Apps discovery to your firewall or Defender for Endpoint.'],[3,'Cloud posture checks',7,'Turn on Defender for Cloud posture management for Azure/AWS subscriptions.'],
      [4,'24×7 alert monitoring',12,'Put someone on alerts around the clock — XcellHost managed Defender or MXDR.'],[4,'Monthly security report',5,'Review a monthly posture and incident report with management.'],[4,'180-day log retention',5,'Keep 180 days of logs (CERT-In) — retain or stream to Sentinel.']];
    var on0=[0,2,5];
    var html='';DOM.forEach(function(dn,di){html+='<h4>'+dn+'</h4>';IT.forEach(function(it,i){if(it[0]===di)html+='<label><input type="checkbox" value="'+i+'"'+(on0.indexOf(i)>=0?' checked':'')+'><span>'+it[1]+'</span></label>';});});box.innerHTML=html;
    $id('sDom').innerHTML=DOM.map(function(dn){return '<div><span><i></i></span>'+dn+'</div>';}).join('');
    var rg=$id('sRing'),val=$id('sVal'),shown=0;
    function run(){var on=$$('input:checked',box).map(function(i){return +i.value;}),tot=IT.reduce(function(a,i){return a+i[2];},0),sc=Math.round(100*on.reduce(function(a,i){return a+IT[i][2];},0)/tot);
      rg.style.strokeDashoffset=(100-sc).toFixed(1);rg.style.stroke=sc<45?'#c0392b':sc<75?'#FF8A00':'#16a34a';
      setT('sGrade',sc<45?'Exposed — start with the basics':sc<75?'Partly covered — close the gaps':sc<95?'Well covered — keep it tuned':'Strong coverage');
      var bars=$$('#sDom i');DOM.forEach(function(dn,di){var all=IT.filter(function(i){return i[0]===di;}),w=all.reduce(function(a,i){return a+i[2];},0),g=IT.reduce(function(a,it,i){return a+(it[0]===di&&on.indexOf(i)>=0?it[2]:0);},0);bars[di].style.height=(100*g/w).toFixed(0)+'%';});
      var miss=IT.map(function(it,i){return [it,i];}).filter(function(x){return on.indexOf(x[1])<0;}).sort(function(a,b){return b[0][2]-a[0][2];}).slice(0,3);
      $id('sFix').innerHTML=miss.length?miss.map(function(x){return '<li>'+esc(x[0][3])+'</li>';}).join(''):'<li>Nothing obvious left — book a review to test it.</li>';
      if(R){shown=sc;setT(val,String(sc));return;}twF=shown;twT=sc;tw0=0;twOn(true);}
    var twF=0,twT=0,tw0=0,twOn=loop(function(now){if(!tw0)tw0=now;var u=eo((now-tw0)/700);shown=Math.round(lerp(twF,twT,u));setT(val,String(shown));if(u>=1)twOn(false);});
    box.addEventListener('change',run);run();})();
})();

