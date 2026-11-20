
(function(){
'use strict';
var d=document,$=function(s,r){return (r||d).querySelector(s);},$$=function(s,r){return Array.prototype.slice.call((r||d).querySelectorAll(s));};
var $id=function(i){return d.getElementById(i);};
var X=window.XH||{};
var RED=!!X.reduce;
var inr=function(n){return X.inr?X.inr(Math.round(n)):'₹'+Math.round(n).toLocaleString('en-IN');};
var usd=function(n,dp){dp=dp==null?2:dp;return 'US$'+Number(n).toLocaleString('en-US',{minimumFractionDigits:dp,maximumFractionDigits:dp});};
var clamp=function(v,a,b){return v<a?a:v>b?b:v;};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});};
var toast=function(m){if(X.toast)X.toast(m);};
var num=function(el,dv){var v=parseFloat(el&&el.value);return isFinite(v)?v:dv;};

/* =====================================================================
   DATA — Akamai list prices (USD, excl. taxes), read 18 Nov 2026 from
   akamai.com/cloud/pricing/* . GPU: never priced here — "Price on quote".
   tb = monthly transfer allowance (TB) added to the pool.
   ===================================================================== */
var FAM={sh:'Shared CPU',g6:'Dedicated G6',g7:'Dedicated G7',g8:'Dedicated G8',hm:'High Memory',vpu:'Accelerated (VPU)',gpu:'GPU'};
var PL=[
 ['sh-1','sh','Nanode 1 GB',1,1,25,1,5],['sh-2','sh','Linode 2 GB',1,2,50,2,12],['sh-4','sh','Linode 4 GB',2,4,80,4,24],['sh-8','sh','Linode 8 GB',4,8,160,5,48],
 ['sh-16','sh','Linode 16 GB',6,16,320,8,96],['sh-32','sh','Linode 32 GB',8,32,640,16,192],['sh-64','sh','Linode 64 GB',16,64,1280,20,384],['sh-96','sh','Linode 96 GB',20,96,1920,20,576],
 ['sh-128','sh','Linode 128 GB',24,128,2560,20,768],['sh-192','sh','Linode 192 GB',32,192,3840,20,1152],
 ['g6-4','g6','G6 Dedicated 4 GB',2,4,80,4,36],['g6-8','g6','G6 Dedicated 8 GB',4,8,160,5,72],['g6-16','g6','G6 Dedicated 16 GB',8,16,320,6,144],['g6-32','g6','G6 Dedicated 32 GB',16,32,640,7,288],['g6-64','g6','G6 Dedicated 64 GB',32,64,1280,8,576],
 ['g7-4','g7','G7 Dedicated 4 GB',2,4,80,4,43],['g7-8','g7','G7 Dedicated 8 GB',4,8,160,5,86],['g7-16','g7','G7 Dedicated 16 GB',8,16,320,6,173],['g7-32','g7','G7 Dedicated 32 GB',16,32,640,7,346],['g7-64','g7','G7 Dedicated 64 GB',32,64,1280,8,691],
 ['g8-4','g8','G8 Dedicated 4x2',2,4,40,0,null,0.07],['g8-8','g8','G8 Dedicated 8x4',4,8,80,0,null,0.14],['g8-16','g8','G8 Dedicated 16x8',8,16,160,0,null,0.27],['g8-32','g8','G8 Dedicated 32x16',16,32,320,0,null,0.54],['g8-64','g8','G8 Dedicated 64x32',32,64,640,0,null,1.08],
 ['g8-8b','g8','G8 Dedicated 8x2',2,8,80,0,null,0.11],['g8-16b','g8','G8 Dedicated 16x4',4,16,160,0,null,0.21],['g8-32b','g8','G8 Dedicated 32x8',8,32,320,0,null,0.42],['g8-64b','g8','G8 Dedicated 64x16',16,64,640,0,null,0.84],
 ['hm-24','hm','Linode 24 GB (High Memory)',2,24,20,5,60],['hm-48','hm','Linode 48 GB (High Memory)',2,48,40,6,120],['hm-90','hm','Linode 90 GB (High Memory)',4,90,90,7,240],['hm-150','hm','Linode 150 GB (High Memory)',8,150,200,8,480],['hm-300','hm','Linode 300 GB (High Memory)',16,300,340,9,960],
 ['vpu-1s','vpu','NETINT Quadra T1U x1 Small',8,16,200,0,280],['vpu-1m','vpu','NETINT Quadra T1U x1 Medium',12,24,300,0,352],['vpu-2s','vpu','NETINT Quadra T1U x2 Small',12,24,300,0,488],
 ['vpu-8s','vpu','NETINT Quadra T1U x8 Small',48,96,300,0,1952],['vpu-8m','vpu','NETINT Quadra T1U x8 Medium',64,128,300,0,2240],['vpu-8l','vpu','NETINT Quadra T1U x8 Large',96,192,300,0,2816],
 ['gpu-ada','gpu','NVIDIA RTX 4000 Ada · 1–4 GPUs',null,null,null,0,null,null,'20–80 GB VRAM'],
 ['gpu-pro','gpu','NVIDIA RTX PRO 6000 Blackwell · 1–8 GPUs',null,null,null,0,null,null,'96–768 GB VRAM · LA'],
 ['gpu-q','gpu','NVIDIA Quadro RTX 6000 · 1–4 GPUs',null,null,null,0,null,null,'24–96 GB VRAM · LA'],
 ['gpu-b3','gpu','NVIDIA B300 cluster',null,null,null,0,null,null,'via Akamai sales']
].map(function(a){return {id:a[0],f:a[1],n:a[2],cpu:a[3],ram:a[4],disk:a[5],tb:a[6],mo:a[7],hr:a[8]||null,note:a[9]||'',gpu:a[1]==='gpu'};});
var BY={};PL.forEach(function(p){BY[p.id]=p;});
var USD={blk:0.10,nb:10,eg:0.005,obj:5};
/* XcellHost fees — exact figures reused from managed-aws / managed-oracle-cloud pages */
var XF={ess:14999,pro:39999,extra:999,sec:9999,fin:7999,dr:1999,ass:49999,lz:149999,essN:10,proN:40};
function addCart(o){if(X.cart&&X.cart.add)X.cart.add(o);}

/* =====================================================================
   HERO — one canvas, one rAF loop, five drawn scenes (sample data)
   ===================================================================== */
(function hero(){
  var cv=$id('acCv'),wrap=$id('acCvw');if(!cv||!wrap)return;
  var c=cv.getContext('2d');if(!c)return;
  var SCN=5500,TR=460;
  var CAP=['Deploy · a Dedicated CPU instance in Mumbai','LKE · a node pool scales from 3 to 5 nodes','Edge · cache hits served near users, misses to Mumbai','Transfer · plan allowances add up to one pool','Hybrid DR · nightly copies to XcellHost Mumbai Tier IV'];
  var tabs=$$('#acTabs button[role=tab]'),dots=$$('#acDots i'),pz=$id('acPz'),capT=$id('acCap');
  var W=0,H=0,dpr=1,cur=0,from=0,q=1,el=0,userPause=false,hov=false,vis=true,raf=0,last=0,T=0;
  var F='"Sora",system-ui,sans-serif',M='"IBM Plex Mono",ui-monospace,monospace';
  var BL='#0066FF',LB='#7fb0ff',OR='#FF8A00',GR='#16a34a',MUTE='#B6C2DA',LINE='rgba(255,255,255,.14)',SOFT='rgba(255,255,255,.06)',NV='#0B132B';
  function size(){var r=wrap.getBoundingClientRect();W=Math.max(220,r.width);H=Math.max(220,r.height);dpr=Math.min(2,window.devicePixelRatio||1);cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);}
  function eo(t){t=clamp(t,0,1);return 1-Math.pow(1-t,3);}
  function sg(p,a,b){return clamp((p-a)/(b-a),0,1);}
  function rr(x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function box(x,y,w,h,r,f,s,lw){rr(x,y,w,h,r);if(f){c.fillStyle=f;c.fill();}if(s){c.lineWidth=lw||1;c.strokeStyle=s;c.stroke();}}
  function tx(t,x,y,f,col,al){c.font=f;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='alphabetic';c.fillText(t,x,y);}
  function ln(x1,y1,x2,y2,col,w,dash){c.save();c.strokeStyle=col;c.lineWidth=w||1;if(dash)c.setLineDash(dash);c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();c.restore();}
  function dot(x,y,r,col){c.beginPath();c.arc(x,y,r,0,7);c.fillStyle=col;c.fill();}
  function foot(t,ok){var y=H-22;box(12,y-12,W-24,26,8,ok?'rgba(22,163,74,.16)':SOFT,ok?'rgba(22,163,74,.55)':LINE);dot(26,y+1,4,ok?GR:OR);tx(t,38,y+5,'600 11px '+F,'#fff');}
  function nar(){return W<420;}
  function chip(x,y,t,on,w){w=w||c.measureText(t).width+20;box(x,y,w,24,7,on?'rgba(0,102,255,.22)':SOFT,on?BL:LINE,on?1.5:1);tx(t,x+w/2,y+16,'600 10.5px '+M,on?'#fff':MUTE,'center');return w;}

  /* 0 · deploy in Mumbai */
  function s0(p){var n=nar(),regs=[['ap-west','Mumbai'],['in-bom-2','Mumbai 2'],['in-maa','Chennai'],['sg-sin-2','Singapore 2']];
    tx('REGION',16,26,'700 9.5px '+M,LB);
    var sel=p>.12;if(n)regs=regs.slice(0,2);regs.forEach(function(r,i){var y=36+i*30,on=i===0&&sel;box(14,y,n?W*.42:150,24,7,on?'rgba(0,102,255,.22)':SOFT,on?BL:LINE,on?1.5:1);tx(r[0],24,y+16,'600 10.5px '+M,on?'#fff':MUTE);if(!n)tx(r[1],154,y+16,'500 9.5px '+F,on?'#fff':MUTE,'right');});
    var px=n?14:186,py=n?106:36,pw=n?W-28:W-200,ph=n?H-162-44:H-36-48;
    var a=eo(sg(p,.16,.3));c.save();c.globalAlpha=a;c.translate(0,(1-a)*10);
    box(px,py,pw,ph,12,'rgba(11,19,43,.92)',LINE);
    tx('app-01',px+14,py+24,'700 13px '+F,'#fff');tx('G7 Dedicated 4 GB',px+14,py+40,'500 10px '+M,MUTE);
    var st=p<.45?'provisioning':p<.68?'booting':'running',col=st==='running'?GR:OR;
    var sw=c.measureText(st).width;c.font='700 9.5px '+M;sw=c.measureText(st).width+16;box(px+pw-sw-12,py+12,sw,18,6,col);tx(st,px+pw-12-sw/2,py+25,'700 9.5px '+M,'#fff','center');
    var rows=n?[['vCPU','2 dedicated'],['RAM','4 GB']]:[['vCPU','2 dedicated'],['RAM / disk','4 GB · 80 GB'],['Transfer','4 TB → global pool'],['VPC','10.0.1.0/24'],['IPv4','sample · 203.0.113.24']];
    rows.forEach(function(r,i){var y=py+(n?72:62)+i*(n?17:21),ra=sg(p,.3+i*.06,.4+i*.06);c.globalAlpha=a*ra;tx(r[0],px+14,y,'500 10px '+M,MUTE);tx(r[1],px+pw-14,y,'600 10.5px '+M,'#fff','right');});
    c.globalAlpha=a;var bw=pw-28,bp=sg(p,.3,.68),byy=n?py+50:py+ph-20;box(px+14,byy,bw,6,3,SOFT);box(px+14,byy,Math.max(6,bw*bp),6,3,bp>=1?GR:BL);
    c.restore();
    foot(p>.68?(n?'Running in ap-west · Mumbai':'Running in ap-west · Mumbai — handed to the XcellHost NOC'):'Deploying a Dedicated CPU instance…',p>.68);}

  /* 1 · LKE scaling 3 → 5 */
  function s1(p){var n=nar(),cx=W/2;
    box(cx-90,16,180,40,10,'rgba(0,102,255,.18)',BL,1.5);tx('LKE control plane',cx,34,'700 11.5px '+F,'#fff','center');tx('managed · HA option',cx,48,'500 9.5px '+M,LB,'center');
    var k=p<.35?3:p<.6?4:5,cnt=5,gap=n?6:10,nw=(W-28-gap*(cnt-1))/cnt,ny=96,nh=Math.min(120,H-ny-60);
    for(var i=0;i<cnt;i++){var x=14+i*(nw+gap),on=i<3?1:i===3?eo(sg(p,.35,.48)):eo(sg(p,.6,.73));
      ln(cx,56,x+nw/2,ny,on>0?'rgba(127,176,255,'+(.15+on*.35)+')':'rgba(255,255,255,.06)',1,[3,4]);
      if(on<=0){box(x,ny,nw,nh,9,null,'rgba(255,255,255,.12)',1);c.save();c.setLineDash([4,4]);rr(x,ny,nw,nh,9);c.strokeStyle='rgba(255,255,255,.12)';c.stroke();c.restore();tx('+',x+nw/2,ny+nh/2+5,'600 16px '+F,'rgba(255,255,255,.25)','center');continue;}
      c.save();c.globalAlpha=on;box(x,ny+(1-on)*8,nw,nh,9,'rgba(11,19,43,.95)',LINE);
      tx('node '+(i+1),x+nw/2,ny+18,'700 '+(n?9:10.5)+'px '+M,'#fff','center');
      var pods=i<3?(p<.35?4:3):3,pr=n?3:4;for(var j=0;j<6;j++){var px2=x+nw/2+(j%2?1:-1)*(n?7:12),py2=ny+36+Math.floor(j/2)*(n?16:20);dot(px2,py2,pr,j<pods?BL:'rgba(255,255,255,.1)');}
      c.restore();}
    stamp(W-16,ny+nh+22,'nodes '+k+' / 5',k>3?GR:BL,1,'right');
    tx('pool: G7 Dedicated 8 GB',14,ny+nh+26,'500 10px '+M,MUTE);
    foot(k===5?'Pool scaled out — pods rebalanced across 5 nodes':'CPU pressure rising — autoscaler adds a node',k===5);}
  function stamp(x,y,t,col,a,al){if(a<=0)return;c.save();c.globalAlpha=a;c.font='700 10px '+M;var w=c.measureText(t).width+16;var bx=al==='right'?x-w:al==='center'?x-w/2:x;box(bx,y-13,w,19,6,col);tx(t,bx+8,y+1,'700 10px '+M,'#fff');c.restore();}

  /* 2 · edge + origin */
  var USERS=[[.08,.2],[.1,.46],[.07,.7],[.16,.33],[.15,.6]];
  function s2(p){var n=nar(),ex=W*.44,ox=W-(n?70:96),oy=H*.42;
    tx('USERS · INDIA',14,22,'700 9.5px '+M,LB);
    USERS.forEach(function(u){dot(u[0]*W+8,u[1]*(H-40)+16,5,'#fff');});
    var E=[H*.2,H*.42,H*.64];E.forEach(function(y,i){box(ex-34,y-14,68,28,8,NV,LB,1.3);tx('edge '+(i+1),ex,y+4,'700 10px '+M,'#fff','center');});
    tx('AKAMAI EDGE',ex,22,'700 9.5px '+M,LB,'center');
    box(ox,oy-34,n?60:84,68,10,'rgba(0,102,255,.2)',BL,1.5);tx('origin',ox+(n?30:42),oy-8,'700 11px '+F,'#fff','center');tx('ap-west',ox+(n?30:42),oy+8,'500 9.5px '+M,LB,'center');tx('LKE',ox+(n?30:42),oy+22,'500 9.5px '+M,MUTE,'center');
    E.forEach(function(y){ln(ex+34,y,ox,oy,'rgba(127,176,255,.18)',1,[3,5]);});
    var hit=0,miss=0;
    for(var i=0;i<10;i++){var t=((T/2600)+i/10)%1,u=USERS[i%5],e=E[i%3],sx=u[0]*W+8,sy=u[1]*(H-40)+16,isMiss=i%4===3;
      if(t<.45){var k=eo(t/.45);dot(sx+(ex-34-sx)*k,sy+(e-sy)*k,3,OR);}
      else if(isMiss){var k2=eo((t-.45)/.55);dot(ex+34+(ox-ex-34)*k2,e+(oy-e)*k2,3,LB);}
      else{var k3=eo((t-.45)/.55);dot(ex-34+(sx-ex+34)*k3,e+(sy-e)*k3,3,GR);}
      if(isMiss)miss++;else hit++;}
    var a=sg(p,.2,.35);stamp(ex,H-48,'cached at edge',GR,a,'center');
    foot(n?'Edge serves, origin computes':'Static and cached content served at the edge; only misses reach Mumbai',p>.5);}

  /* 3 · transfer pool */
  function s3(p){var n=nar(),parts=[['Linode 4 GB',4],['G7 Dedicated 8 GB',5],['G7 Dedicated 8 GB',5],['Object Storage',1],['G8 Dedicated 8x4',0]];
    var tot=15,lx=14,lw=n?W-28:W*.46,y0=30;tx('ALLOWANCES · TB / MONTH',lx,22,'700 9.5px '+M,LB);
    parts.forEach(function(r,i){var y=y0+i*(n?22:28),a=sg(p,i*.07,i*.07+.12);c.save();c.globalAlpha=.35+.65*a;box(lx,y,lw,n?18:22,6,SOFT,LINE);tx(r[0],lx+10,y+(n?13:15),'600 '+(n?9.5:10.5)+'px '+M,'#fff');tx(r[1]?'+'+r[1]+' TB':'0 TB · billed',lx+lw-10,y+(n?13:15),'700 '+(n?9.5:10.5)+'px '+M,r[1]?GR:OR,'right');c.restore();});
    var bx=n?14:W*.54,bw=n?W-28:W*.46-14,by=n?y0+5*22+14:y0,bh=n?30:H-y0-60;
    if(n){var fill=sg(p,.35,.85)*0.64;box(bx,by,bw,bh,8,SOFT,LINE);box(bx,by,bw*fill,bh,8,'rgba(0,102,255,.45)');tx('pool 15 TB · used '+(fill*tot).toFixed(1)+' TB',bx+10,by+19,'700 10px '+M,'#fff');}
    else{var pf=eo(sg(p,.05,.4)),uf=eo(sg(p,.4,.88))*0.64;box(bx,by,bw,bh,10,SOFT,LINE);
      var ph=bh*pf;box(bx+6,by+bh-ph,bw-12,ph-6>0?ph-6:0,7,'rgba(127,176,255,.12)',LB,1);
      var uh=bh*uf;if(uh>8)box(bx+14,by+bh-uh,bw-28,uh-14>0?uh-14:0,6,'rgba(0,102,255,.55)');
      tx('global pool',bx+bw/2,by+18,'700 10.5px '+M,LB,'center');tx(Math.round(pf*tot)+' TB',bx+bw/2,Math.max(by+42,by+bh-ph+24),'800 15px '+F,'#fff','center');
      if(uf>.05)tx('used '+(uf*tot).toFixed(1)+' TB',bx+bw/2,by+bh-14,'700 10px '+M,'#fff','center');}
    foot(p>.88?'9.6 TB used of a 15 TB pool — overage US$0.00':'Outbound traffic draws on the shared pool…',p>.88);}

  /* 4 · hybrid DR */
  function s4(p){var n=nar(),aw=n?W*.4:W*.36,ah=H-110,ax=14,ay=28,xw=aw,xx=W-14-xw;
    box(ax,ay,aw,ah,12,'rgba(0,102,255,.14)',BL,1.5);tx('Akamai Cloud',ax+12,ay+20,'700 11.5px '+F,'#fff');tx('ap-west · Mumbai',ax+12,ay+35,'500 9.5px '+M,LB);
    ['VMs','LKE','MySQL'].forEach(function(t,i){box(ax+12,ay+48+i*28,aw-24,22,6,SOFT,LINE);tx(t,ax+22,ay+63+i*28,'600 10px '+M,'#fff');});
    box(xx,ay,xw,ah,12,'rgba(255,138,0,.14)',OR,1.5);tx('XcellHost',xx+12,ay+20,'700 11.5px '+F,'#fff');tx('Tier IV DC · Mumbai',xx+12,ay+35,'500 9.5px '+M,'#FF8A00');
    var fill=eo(sg(p,.15,.7));box(xx+12,ay+48,xw-24,ah-62,8,SOFT,LINE);box(xx+12,ay+48+(ah-62)*(1-fill),xw-24,(ah-62)*fill,8,'rgba(255,138,0,.32)');tx('object storage',xx+xw/2,ay+ah-22,'600 9.5px '+M,'#fff','center');
    var l=ax+aw,r=xx,my=ay+ah/2;ln(l,my,r,my,'rgba(255,255,255,.18)',1.5,[4,5]);
    if(p<.75)for(var i=0;i<4;i++){var t=((T/1400)+i/4)%1;dot(l+(r-l)*t,my,3.5,OR);}
    tx(n?'nightly':'nightly copy · TLS',(l+r)/2,my-10,'600 9.5px '+M,MUTE,'center');
    var checks=[['copy',.72],['restore test',.86]];checks.forEach(function(k,i){var a=sg(p,k[1],k[1]+.06);stamp(14+i*(n?78:110),H-48,'✓ '+k[0],GR,a,'left');});
    foot(p>.86?'Copy verified, restore tested — logged by the NOC':'Backups leave Akamai Cloud for XcellHost Mumbai…',p>.86);}

  var SC=[s0,s1,s2,s3,s4];
  function draw(){c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,W,H);
    var ease=eo(q),pp=RED?1:clamp(el/SCN,0,1);
    if(q<1&&from!==cur){c.save();c.globalAlpha=1-ease;c.translate(0,-12*ease);SC[from](1);c.restore();c.save();c.globalAlpha=ease;c.translate(0,12*(1-ease));SC[cur](pp);c.restore();}
    else SC[cur](pp);}
  function prog(){tabs.forEach(function(b,i){var u=$('u',b);if(u)u.style.setProperty('--p',i===cur?(RED?1:clamp(el/SCN,0,1)):0);});}
  function setUI(){tabs.forEach(function(b,i){var on=i===cur;b.classList.toggle('on',on);b.setAttribute('aria-selected',on?'true':'false');});dots.forEach(function(x,i){x.classList.toggle('on',i===cur);});prog();if(capT)capT.textContent=CAP[cur];}
  function go(k){k=((k%5)+5)%5;if(k!==cur){from=cur;cur=k;q=RED?1:0;}el=RED?SCN:0;setUI();if(RED)draw();else kick();}
  function running(){return !userPause&&!hov&&vis;}
  function frame(now){raf=0;var dt=last?Math.min(64,now-last):16;last=now;
    if(q<1)q=Math.min(1,q+dt/TR);
    if(running()){el+=dt;T+=dt;if(el>=SCN)go(cur+1);}
    draw();prog();
    if(vis&&!RED)raf=requestAnimationFrame(frame);else last=0;}
  function kick(){if(!raf&&vis&&!RED){last=0;raf=requestAnimationFrame(frame);}}
  tabs.forEach(function(b){b.addEventListener('click',function(){go(+b.getAttribute('data-k'));});});
  if(pz)pz.addEventListener('click',function(){userPause=!userPause;pz.classList.toggle('paused',userPause);pz.setAttribute('aria-label',userPause?'Play scenes':'Pause scenes');kick();});
  var st=$id('acStage');
  if(st&&window.matchMedia&&window.matchMedia('(hover:hover)').matches){st.addEventListener('mouseenter',function(){hov=true;});st.addEventListener('mouseleave',function(){hov=false;kick();});}
  var sx=null,sy0=null;
  wrap.addEventListener('pointerdown',function(e){sx=e.clientX;sy0=e.clientY;});
  wrap.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy0;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))go(cur+(dx<0?1:-1));});
  wrap.addEventListener('pointercancel',function(){sx=null;});
  size();
  if(window.ResizeObserver)new ResizeObserver(function(){size();draw();}).observe(wrap);else window.addEventListener('resize',function(){size();draw();});
  if(X.whenVisible)X.whenVisible(wrap,function(v){vis=v;if(v)kick();else if(raf){cancelAnimationFrame(raf);raf=0;last=0;}});
  if(RED){el=SCN;q=1;T=900;setUI();draw();if(pz)pz.hidden=true;}else{setUI();draw();kick();}
  if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){draw();});
  window.__aoHero=window.__acHero={go:function(k){go(k);},pause:function(b){userPause=b!==false;if(pz)pz.classList.toggle('paused',userPause);kick();},seek:function(t){el=clamp(+t||0,0,SCN);T=el;q=1;draw();setUI();}};
})();

/* =====================================================================
   PRODUCT CATALOGUE
   ===================================================================== */
(function(){
  var g=$id('acGrid'),fil=$id('acFil');if(!g)return;
  var Q='Price on quote';
  var P=[
   ['compute','cpu','Shared CPU','1–32 vCPUs on shared cores, 1–192 GB RAM. For dev, staging and low-traffic sites.','GA','from US$5/mo','Nanode 1 GB'],
   ['compute','cpu','Dedicated CPU · G6 / G7 / G8','Your own cores, with no noisy neighbours. 2–256 vCPUs. G8 bills by the hour and includes no transfer.','GA','from US$36/mo','G6 Dedicated 4 GB'],
   ['compute','cpu','G7 Dedicated','Akamai\'s former Premium CPU plans, now part of the Dedicated CPU family.','Renamed','from US$43/mo','G7 Dedicated 4 GB','was "Premium CPU"'],
   ['compute','memory','High Memory','2–16 vCPUs with 24–300 GB RAM. For in-memory databases, caches and analytics.','GA','from US$60/mo','Linode 24 GB'],
   ['compute','gpu','GPU · NVIDIA RTX 4000 Ada','1–4 cards, 20–80 GB of video memory. For inference, machine learning and graphics.','GA',Q,''],
   ['compute','gpu','GPU · NVIDIA RTX PRO 6000 Blackwell','1–8 cards, 96–768 GB of video memory, with 8-GPU configurations added in Q3 2026.','LA',Q,''],
   ['compute','gpu','GPU · NVIDIA Quadro RTX 6000','1–4 cards, 24–96 GB of video memory. Akamai\'s earlier GPU generation.','LA',Q,''],
   ['compute','gpu','GPU · NVIDIA B300 clusters','Blackwell Ultra 8-GPU nodes with 288 GB HBM3e per GPU, available through Akamai Sales.','Sales',Q,''],
   ['compute','video','Accelerated · NETINT VPU','NETINT Quadra T1U video processing units. Encode H.264, HEVC and AV1. Five regions, including Chennai.','Full capacity','from US$280/mo','x1 Small · Akamai notes capacity is temporarily full'],
   ['compute','zap','Akamai Functions','Serverless functions, introduced in Q1 2026.','New','On quote',''],
   ['k8s','helm','LKE','Managed Kubernetes. The standard control plane is free, and an HA control plane costs US$60 per cluster a month.','GA','control plane US$0','HA US$60/cluster/mo'],
   ['k8s','helm','LKE Enterprise','Dedicated control plane for large clusters, which Akamai says support up to 5,000 GPUs. US$300 per cluster a month plus resources.','LA','US$300/cluster/mo','launched LA 5 Jun 2025'],
   ['k8s','layers','App Platform','A Kubernetes-based platform for building, deploying and running apps. GA since 1 Jul 2025, with v6.0 and v6.1 released in Q3 2026.','GA','On quote',''],
   ['storage','disk','Block Storage','Volumes from 10 GB to 16 TB that attach to an instance.','GA','US$0.10/GB/mo',''],
   ['storage','box','Object Storage','S3-compatible. The US$5 base includes 250 GB and adds 1 TB to the transfer pool. E2/E3 are the standard endpoints, and E0/E1 are legacy.','GA','from US$5/mo','+US$0.02/GB over 250 GB'],
   ['storage','refresh','Backups','Managed backups for each instance, priced by plan size.','GA','from US$2/mo','for Linode 1 GB'],
   ['net','network','NodeBalancers','Load balancers. Basic is a flat monthly fee. Premium went GA in Q3 2026, with 10× the concurrent connections of Basic.','GA','from US$10/mo','Premium US$0.225/hr + US$0.005/GB'],
   ['net','grid','VPC','Private networks between your services. VPC traffic does not count against transfer.','GA','On quote',''],
   ['net','shield','Cloud Firewall','Stateful rules for inbound and outbound traffic to instances and NodeBalancers.','GA','On quote',''],
   ['net','link','VLANs','Private layer-2 networks inside a data centre. VLAN traffic is not counted.','GA','On quote',''],
   ['net','dns','DNS Manager','Hosted DNS zones for your domains, managed through Cloud Manager or the API.','GA','On quote',''],
   ['net','tag','Reserved IPv4','Keep a public IPv4 address when you rebuild or replace an instance. Introduced in Q3 2026.','New','On quote',''],
   ['data','disk','Managed Databases · MySQL / PostgreSQL','1 or 3 nodes, automatic failover on 3-node clusters, and daily backups kept for 14 days. Core regions only.','GA','On quote',''],
   ['data','memory','Managed Databases · Valkey','An in-memory key-value store for caching, queues and AI apps.','LA','On quote','added 18 Aug 2026'],
   ['ai','brain','Akamai Inference','Serverless or dedicated model serving through OpenAI-compatible APIs, with 12 open-weight models at launch.','Beta',Q,'launched 27 Oct 2026'],
   ['ai','globe','Akamai Inference Cloud','The edge-to-core AI platform Akamai announced with NVIDIA Blackwell on 28 Oct 2025.','Platform',Q,''],
   ['ai','robot','Agent Sandbox','Runs AI agents and the code they write in WebAssembly isolation, through the open-source Spin framework.','Beta',Q,'']
  ];
  var ST={GA:'g','LA':'o','Beta':'o','New':'b','Renamed':'n','Full capacity':'r','Sales':'n','Platform':'b'};
  var ICO={cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',memory:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="1.5"/><path d="M6 11v2M10 11v2M14 11v2M18 11v2M5 17v3M19 17v3"/></svg>',gpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="2"/><circle cx="8" cy="12.5" r="2.5"/><circle cx="15.5" cy="12.5" r="2.5"/><path d="M5 18v3M19 18v3"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>',helm:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/><path d="M12 4v5.5M12 14.5V20M4 12h5.5M14.5 12H20M6.3 6.3l4 4M13.7 13.7l4 4M17.7 6.3l-4 4M10.3 13.7l-4 4"/></svg>',layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>',disk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>',refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',network:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>',grid:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',link:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>',dns:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>',tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>',brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',robot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>'};
  g.innerHTML=P.map(function(p,i){var q=p[5]===Q;return '<article class="ac-pc rv" data-f="'+p[0]+'" data-d="'+(i%4+1)+'"><div class="ac-pch"><i>'+ICO[p[1]]+'</i><span class="ac-st '+ST[p[4]]+'">'+esc(p[4])+'</span></div><h3>'+esc(p[2])+'</h3>'+(p[7]?'<em class="ac-old">'+esc(p[7])+'</em>':'')+'<p>'+esc(p[3])+'</p><div class="ac-pf"><b class="'+(q?'q':'')+'">'+esc(p[5])+'</b>'+(p[6]?'<small>'+esc(p[6])+'</small>':'')+'</div></article>';}).join('');
  if(X.observe)X.observe(g);
  var cnt={all:P.length};P.forEach(function(p){cnt[p[0]]=(cnt[p[0]]||0)+1;});
  $$('button',fil).forEach(function(b){var e=$('em',b);if(e)e.textContent=cnt[b.getAttribute('data-f')]||0;
    b.addEventListener('click',function(){var f=b.getAttribute('data-f');$$('button',fil).forEach(function(x){x.classList.toggle('on',x===b);});
      $$('.ac-pc',g).forEach(function(c){var on=f==='all'||c.getAttribute('data-f')===f;c.hidden=!on;if(on)c.classList.add('in');});});});
})();

/* =====================================================================
   REGION MAP
   ===================================================================== */
(function(){
  var svg=$id('acMap'),rp=$id('acRp'),rl=$id('acRl');if(!svg)return;
  var NS='http://www.w3.org/2000/svg';
  function P(lon,lat){return [20+(lon-60)*6,20+(45-lat)*(400/90)];}
  var LAND=[
   [[68,23],[70,21],[72.8,19],[73.5,16],[75,12],[77,8.1],[78.5,9],[80,13],[80.3,15.5],[82.5,17],[85,19.5],[87,21.5],[89,22],[92,22.5],[92,26],[88,27],[84,27.5],[80,29],[78,31],[75,33],[74,35],[72,34],[71,32],[70,28],[69,26]],
   [[92,22],[94,17],[97,16.5],[98,12],[98.5,8],[100.5,6.5],[101,3],[103.5,1.3],[104.3,1.5],[103,5],[101.5,6.5],[100.2,13.5],[102,12.5],[105,8.6],[106.5,10.5],[109,12],[108.5,16],[106,20],[108,21.5],[110,21],[113,22.5],[117,23.5],[120,27],[122,30],[121,32],[119.5,35],[122,37],[118,38.5],[121,40.5],[124,40],[127,39],[129,35.2],[129.5,37],[128,38.5],[130.5,42.5],[135,43.5],[140,48],[140,52],[100,52],[90,48],[80,44],[75,40],[74,37],[75,33],[78,31],[80,29],[84,27.5],[88,27],[92,26]],
   [[130,31],[131.5,33],[133,34],[135,33.5],[137,34.5],[139.8,35],[140.8,36],[141,38],[142,40],[141.5,41.5],[140,40.5],[139.8,38.5],[138.5,37.5],[137,37],[136,36],[133,35.5],[131,34.5],[130,33.5]],
   [[95.3,5.5],[98,4],[100,1],[102.5,-1],[104,-2.5],[105.8,-5.8],[104.5,-5.9],[102,-4],[100,-1.5],[98.5,1.5],[96,4]],
   [[105.2,-6.8],[106.5,-6],[108.5,-6.6],[111,-6.6],[113,-7],[114.5,-7.8],[111,-8.2],[108,-7.8],[106,-7.4]],
   [[109,1.8],[110,1.6],[111.5,2.6],[113.5,3.5],[115.5,5],[117,7],[119,5.2],[118,4.2],[118.5,1],[117.5,0],[116.5,-2],[116,-3.8],[114.5,-3.7],[111,-3],[110,-1.5],[109,0]],
   [[114,-22],[114,-26],[115,-34],[117.5,-35],[120,-34],[124,-33],[129,-31.5],[131,-31.5],[134.5,-32.5],[137.5,-35.5],[138.5,-34.8],[140,-38],[144,-38.5],[146,-39],[150,-37.5],[151.2,-33.9],[153,-31],[153.5,-28],[153,-25],[150.5,-22.5],[149,-20.5],[146.5,-19],[145.5,-15],[143.5,-14],[142.5,-10.7],[141.5,-13],[141.5,-16.5],[140,-17.5],[137.5,-16],[136,-12],[132.5,-11.5],[130,-13],[129,-15],[126,-14],[123,-16.5],[122,-18],[119,-20],[116.5,-20.5]],
   [[79.8,9.8],[80.9,9.3],[81.8,7],[81.2,6.1],[80.1,6],[79.8,8]],
   [[120,18.5],[122.2,18.5],[122,16],[121.5,14],[124,13],[123,12.5],[120.6,13.8],[120.4,16]],
   [[131,-1],[134,-0.8],[138,-1.6],[141,-2.6],[145,-4],[147.5,-6],[150,-10.5],[146,-8.5],[143,-9],[140,-8],[138,-7.5],[136,-4.5],[132.5,-3.5]]
  ];
  var R=[
   {id:'ap-west',n:'Mumbai',c:'IN',lon:72.88,lat:19.07,dx:-1,dy:-1,t:'India core site. Akamai says it is optimised for the Indian market.'},
   {id:'in-bom-2',n:'Mumbai Expansion',c:'IN',lon:72.88,lat:19.07,dx:-1,dy:1,t:'A second Mumbai site for Object Storage and newer services.'},
   {id:'in-maa',n:'Chennai',c:'IN',lon:80.27,lat:13.08,dx:1,dy:0,t:'India core site. Also one of five regions with Accelerated (VPU) plans, and has E1/E3 Object Storage endpoints.'},
   {id:'ap-south',n:'Singapore',c:'SG',lon:103.82,lat:1.35,dx:-1,dy:0,t:'Akamai suggests Singapore or Sydney for wider APAC traffic, or for linking to core sites outside India.'},
   {id:'sg-sin-2',n:'Singapore Expansion',c:'SG',lon:103.82,lat:1.35,dx:1,dy:0,t:'A second Singapore site. Akamai notes higher RTX PRO 6000 GPU pricing in Singapore.'},
   {id:'id-cgk',n:'Jakarta',c:'ID',lon:106.85,lat:-6.2,dx:1,dy:1,t:'Region-specific pricing and transfer pool. Akamai has stopped new resource creation here for new customers.',off:1},
   {id:'ap-northeast',n:'Tokyo',c:'JP',lon:139.69,lat:35.69,dx:1,dy:0,t:'Japan core site.'},
   {id:'jp-tyo-3',n:'Tokyo Expansion',c:'JP',lon:139.69,lat:35.69,dx:1,dy:1,t:'A second Tokyo site. E3 Object Storage went GA in Tokyo on 16 Mar 2026.'},
   {id:'jp-osa',n:'Osaka',c:'JP',lon:135.5,lat:34.69,dx:-1,dy:1,t:'Japan core site.'},
   {id:'ap-southeast',n:'Sydney',c:'AU',lon:151.2,lat:-33.87,dx:-1,dy:-1,t:'Australia core site.'},
   {id:'au-mel',n:'Melbourne',c:'AU',lon:144.96,lat:-37.81,dx:-1,dy:1,t:'Australia core site.'}
  ];
  var XH={id:'xcellhost',n:'XcellHost Tier IV DC',c:'IN',lon:72.88,lat:19.07,t:'XcellHost\'s own data centre in Mumbai, and the only one it operates. We use it as the DR target and for hybrid workloads next to Akamai\'s Mumbai region.',x:1};
  function el(n,a){var e=d.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);return e;}
  for(var gx=60;gx<=160;gx+=10){var a=P(gx,45),b=P(gx,-45);svg.appendChild(el('line',{x1:a[0],y1:a[1],x2:b[0],y2:b[1],'class':'ac-gl'}));}
  for(var gy=-40;gy<=40;gy+=10){var a2=P(60,gy),b2=P(160,gy);svg.appendChild(el('line',{x1:a2[0],y1:a2[1],x2:b2[0],y2:b2[1],'class':gy===0?'ac-gl eq':'ac-gl'}));}
  LAND.forEach(function(poly){svg.appendChild(el('polygon',{points:poly.map(function(q){var p=P(q[0],q[1]);return p[0].toFixed(1)+','+p[1].toFixed(1);}).join(' '),'class':'ac-land'}));});
  var nodes=[];
  function pin(r,i){var p=P(r.lon,r.lat),ox=r.x?-14:(r.dx||0)*7,oy=r.x?14:(r.dy||0)*7;
    var g=el('g',{'class':'ac-pin'+(r.x?' x':'')+(r.off?' off':''),tabindex:'0',role:'button','aria-label':r.n+(r.id!=='xcellhost'?' ('+r.id+')':'')});
    g.appendChild(el('circle',{cx:p[0]+ox,cy:p[1]+oy,r:r.x?11:9,'class':'h'}));
    if(r.x)g.appendChild(el('rect',{x:p[0]+ox-6,y:p[1]+oy-6,width:12,height:12,rx:2,'class':'c'}));else g.appendChild(el('circle',{cx:p[0]+ox,cy:p[1]+oy,r:5,'class':'c'}));
    svg.appendChild(g);g.addEventListener('click',function(){sel(i);});g.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();sel(i);}});nodes.push(g);}
  var ALL=R.concat([XH]);ALL.forEach(pin);
  [['India',78,24],['Japan',134,40],['Australia',134,-25],['Indonesia',112,-3.5]].forEach(function(l){var p=P(l[1],l[2]);var t=el('text',{x:p[0],y:p[1],'class':'ac-ml'});t.textContent=l[0];svg.appendChild(t);});
  function sel(i){var r=ALL[i];nodes.forEach(function(n,j){n.classList.toggle('on',j===i);});
    rp.innerHTML='<span class="ac-rk">'+(r.x?'XcellHost · own facility':'Akamai region · '+esc(r.c))+'</span><h3>'+esc(r.n)+'</h3>'+(r.x?'':'<code>'+esc(r.id)+'</code>')+'<p>'+esc(r.t)+'</p>'+(r.x?'<a href="data-centers.html" class="btn btn-ghost btn-sm">Our data centre →</a>':'<a href="#configure" class="btn btn-ghost btn-sm">Plan an estate here →</a>');
    $$('button',rl).forEach(function(b,j){b.classList.toggle('on',j===i);});}
  rl.innerHTML=ALL.map(function(r,i){return '<button type="button" class="'+(r.x?'x':'')+(r.off?' off':'')+'" data-i="'+i+'"><b>'+esc(r.n)+'</b><small>'+(r.x?'XcellHost':esc(r.id))+'</small></button>';}).join('');
  rl.addEventListener('click',function(e){var b=e.target.closest('button');if(b)sel(+b.getAttribute('data-i'));});
  sel(0);
})();

/* =====================================================================
   ARCHITECTURE PATTERNS — SVG drawn from a small spec
   ===================================================================== */
(function(){
  var tabs=$id('acPtab'),svg=$id('acPdia'),info=$id('acPinfo');if(!svg)return;
  /* node: [id,x,y,w,label,sub,kind] kind a=Akamai Cloud, e=Akamai edge, x=XcellHost, u=user/external */
  var PAT=[
   {k:'web',n:'Web app',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',nodes:[['u',10,120,80,'Users','web, mobile','u'],['e',120,120,100,'Akamai edge','CDN + WAF','e'],['nb',250,120,90,'NodeBalancer','Basic','a'],['v1',370,70,80,'VM','Dedicated','a'],['v2',370,170,80,'VM','Dedicated','a'],['db',470,120,80,'Managed DB','MySQL · 3 nodes','a'],['os',250,230,90,'Object Storage','assets','a'],['noc',470,230,80,'XcellHost','24×7 NOC','x']],
    ed:[['u','e'],['e','nb'],['nb','v1'],['nb','v2'],['v1','db'],['v2','db'],['e','os'],['noc','db',1]],
    fit:'Company websites, portals and SaaS front ends with traffic spikes.',ak:'Dedicated CPU, NodeBalancer, Managed Databases (MySQL/PostgreSQL), Object Storage, Cloud Firewall, VPC; App &amp; API Protector at the edge.',xh:'Design, Terraform build, patching, backup checks, WAF tuning with our <a href="waap-as-a-service.html">WAAP</a> team.'},
   {k:'k8s',n:'Kubernetes',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.5"/><path d="M12 4v5.5M12 14.5V20M4 12h5.5M14.5 12H20M6.3 6.3l4 4M13.7 13.7l4 4M17.7 6.3l-4 4M10.3 13.7l-4 4"/></svg>',nodes:[['ci',10,120,80,'CI/CD','git push','u'],['cp',130,50,110,'LKE control plane','free / HA US$60','a'],['np1',290,40,110,'Node pool A','G7 Dedicated','a'],['np2',290,140,110,'Node pool B','autoscale','a'],['nb',130,190,110,'NodeBalancer','ingress','a'],['bs',440,40,100,'Block Storage','PVs','a'],['os',440,140,100,'Object Storage','images, logs','a'],['xh',440,230,100,'XcellHost','upgrades · SOC','x']],
    ed:[['ci','cp'],['cp','np1'],['cp','np2'],['nb','np2'],['np1','bs'],['np2','os'],['xh','np2',1]],
    fit:'Microservices, API platforms and teams moving off a hyperscaler\'s managed Kubernetes.',ak:'LKE or LKE Enterprise, App Platform, Block Storage CSI, NodeBalancers, VPC, Cloud Firewall.',xh:'Cluster design, version upgrades, node patching, backups (Velero-style), posture checks via <a href="cloud-native-security-platform.html">XcellSecure CNAPP</a>.'},
   {k:'media',n:'Media & streaming',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>',nodes:[['up',10,60,80,'Uploads','studio, users','u'],['in',120,60,100,'Object Storage','mezzanine','a'],['vpu',250,60,110,'Accelerated VPU','NETINT transcode','a'],['out',390,60,100,'Object Storage','renditions','a'],['amd',390,180,100,'Akamai edge','media delivery','e'],['vw',250,180,110,'Viewers','HLS / DASH','u'],['xh',120,180,100,'XcellHost','job monitoring','x']],
    ed:[['up','in'],['in','vpu'],['vpu','out'],['out','amd'],['amd','vw'],['xh','vpu',1]],
    fit:'OTT, e-learning video, news and sports clips that need H.264, HEVC or AV1 ladders.',ak:'Accelerated compute (NETINT Quadra T1U, Chennai among its regions), Object Storage, Adaptive Media Delivery.',xh:'Pipeline build, queue and job alerting, capacity planning. VPU capacity is checked at quote time.'},
   {k:'ai',n:'AI inference',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',nodes:[['app',10,120,80,'Your app','chat, search','u'],['e',120,120,100,'Akamai edge','API security','e'],['nb',250,120,90,'NodeBalancer','or gateway','a'],['gpu',370,50,100,'GPU instances','price on quote','a'],['inf',370,190,100,'Akamai Inference','beta · API','a'],['vec',490,120,60,'Vector DB','High Mem','a'],['xh',120,230,100,'XcellHost','GPU ops','x']],
    ed:[['app','e'],['e','nb'],['nb','gpu'],['nb','inf'],['gpu','vec'],['xh','gpu',1]],
    fit:'RAG assistants, document AI and real-time inference close to Indian users.',ak:'GPU plans (RTX 4000 Ada, RTX PRO 6000 Blackwell), Akamai Inference (beta), LKE, High Memory for vector stores, Object Storage for weights.',xh:'Model serving setup, GPU utilisation monitoring, cost reviews. All GPU capacity is priced on quote.'},
   {k:'dr',n:'Backup & DR',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H16a3 3 0 000-6H8a3 3 0 010-6h7.5"/></svg>',nodes:[['p',10,40,140,'Akamai Cloud','ap-west · production','a'],['vm',10,130,140,'VMs + DB','backups, dumps','a'],['dns',10,220,140,'DNS Manager','failover record','a'],['tr',200,130,110,'Encrypted copy','nightly · TLS','u'],['xo',360,40,180,'XcellHost Mumbai','Tier IV · object storage','x'],['xr',360,130,180,'Restore tests','monthly · evidence','x'],['xs',360,220,180,'Standby VMs','hybrid cloud','x']],
    ed:[['p','vm'],['vm','tr'],['tr','xo'],['xo','xr'],['xr','xs'],['dns','xs',1]],
    fit:'Regulated firms that want an independent copy in a named Indian facility outside the primary cloud.',ak:'Backups, Object Storage, DNS Manager in the Akamai Mumbai region.',xh:'Copies to our <a href="cloud-object-storage.html">object storage</a> at ₹1,999/TB/month*, restore drills, standby capacity on <a href="hybrid-cloud.html">hybrid cloud</a>.'}
  ];
  var NS='http://www.w3.org/2000/svg';
  function el(n,a){var e=d.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);return e;}
  tabs.innerHTML=PAT.map(function(p,i){return '<button type="button" role="tab" aria-selected="'+(i?'false':'true')+'" class="'+(i?'':'on')+'" data-i="'+i+'">'+p.ic+'<span>'+esc(p.n)+'</span></button>';}).join('');
  function draw(i){var p=PAT[i],H=46,by={};while(svg.firstChild)svg.removeChild(svg.firstChild);
    var defs=el('defs',{});var mk=el('marker',{id:'acAr',viewBox:'0 0 10 10',refX:'9',refY:'5',markerWidth:'7',markerHeight:'7',orient:'auto-start-reverse'});mk.appendChild(el('path',{d:'M0 0L10 5L0 10z','class':'ac-ah'}));defs.appendChild(mk);svg.appendChild(defs);
    p.nodes.forEach(function(n){by[n[0]]={x:n[1],y:n[2],w:n[3],h:H};});
    p.ed.forEach(function(e,j){var a=by[e[0]],b=by[e[1]];var ax=a.x+a.w/2,ay=a.y+H/2,bx=b.x+b.w/2,bY=b.y+H/2;
      /* clip to box edges */
      function edge(n,tx,ty){var cx=n.x+n.w/2,cy=n.y+H/2,dx=tx-cx,dy=ty-cy;if(!dx&&!dy)return [cx,cy];var sx=(n.w/2)/Math.abs(dx||1e-6),sy=(H/2)/Math.abs(dy||1e-6),s=Math.min(sx,sy);return [cx+dx*s,cy+dy*s];}
      var s=edge(a,bx,bY),t=edge(b,ax,ay);
      svg.appendChild(el('line',{x1:s[0],y1:s[1],x2:t[0],y2:t[1],'class':'ac-ed'+(e[2]?' m':''),'marker-end':e[2]?'':'url(#acAr)',style:'--dl:'+(j*0.08)+'s'}));});
    p.nodes.forEach(function(n,j){var g=el('g',{'class':'ac-nd '+n[6],style:'--dl:'+(j*0.06)+'s'});g.appendChild(el('rect',{x:n[1],y:n[2],width:n[3],height:H,rx:9}));
      var t=el('text',{x:n[1]+n[3]/2,y:n[2]+20,'class':'t'});t.textContent=n[4];g.appendChild(t);var s2=el('text',{x:n[1]+n[3]/2,y:n[2]+35,'class':'s'});s2.textContent=n[5];g.appendChild(s2);svg.appendChild(g);});
    svg.setAttribute('aria-label',p.n+' architecture diagram');
    info.innerHTML='<h3>'+p.ic+esc(p.n)+'</h3><dl><dt>When it fits</dt><dd>'+p.fit+'</dd><dt>Akamai Cloud services</dt><dd>'+p.ak+'</dd><dt>XcellHost runs</dt><dd>'+p.xh+'</dd></dl><div class="ac-lg"><span class="a">Akamai Cloud</span><span class="e">Akamai edge</span><span class="x">XcellHost</span><span class="u">External</span></div><button type="button" class="btn btn-ghost btn-sm" data-open="xhCallback" data-topic="Akamai Cloud — managed services">Discuss this design →</button>';
    svg.classList.remove('go');void svg.getBoundingClientRect();if(!RED)svg.classList.add('go');
    $$('button',tabs).forEach(function(b,j){b.classList.toggle('on',j===i);b.setAttribute('aria-selected',j===i?'true':'false');});}
  tabs.addEventListener('click',function(e){var b=e.target.closest('button');if(b)draw(+b.getAttribute('data-i'));});
  draw(0);
})();

/* =====================================================================
   LIST PRICE REFERENCE TABLE (#plans)
   ===================================================================== */
(function(){
  var tb=$id('acLpt'),t=$id('acLpx');if(!t)return;
  var TABS=[['sh','Shared'],['g7','Dedicated G7'],['g6','Dedicated G6'],['g8','Dedicated G8'],['hm','High Memory'],['vpu','Accelerated'],['gpu','GPU'],['sn','Storage & network']];
  var SN=[['Block Storage','US$0.10 / GB / month','10 GB – 16 TB'],['Object Storage','US$5 / month','250 GB + 1 TB transfer to pool; US$0.02/GB over'],['Backups','from US$2 / month','Linode 1 GB; US$5 for 4 GB plans'],['NodeBalancer · Basic','US$10 / month','no data-processing fee'],['NodeBalancer · Premium','US$0.225 / hour','+ US$0.005/GB outbound processing'],['LKE control plane','US$0','HA control plane US$60/cluster/month'],['LKE Enterprise','US$300 / cluster / month','plus resources used'],['Egress overage','US$0.005 / GB','most regions; Object Storage: Jakarta US$0.015, São Paulo US$0.007']];
  tb.innerHTML=TABS.map(function(x,i){return '<button type="button" class="'+(i?'':'on')+'" data-k="'+x[0]+'">'+esc(x[1])+'</button>';}).join('');
  function show(k){$$('button',tb).forEach(function(b){b.classList.toggle('on',b.getAttribute('data-k')===k);});
    if(k==='sn'){t.innerHTML='<thead><tr><th>Service</th><th>Akamai list (USD)</th><th>Notes</th></tr></thead><tbody>'+SN.map(function(r){return '<tr><td>'+esc(r[0])+'</td><td class="m">'+esc(r[1])+'</td><td>'+esc(r[2])+'</td></tr>';}).join('')+'</tbody>';return;}
    var rows=PL.filter(function(p){return p.f===k;});
    if(k==='gpu'){t.innerHTML='<thead><tr><th>GPU plan</th><th>Spec</th><th>Price</th></tr></thead><tbody>'+rows.map(function(p){return '<tr><td>'+esc(p.n)+'</td><td>'+esc(p.note)+'</td><td class="q">Price on quote</td></tr>';}).join('')+'</tbody>';return;}
    t.innerHTML='<thead><tr><th>Plan</th><th>vCPU</th><th>RAM</th><th>Storage</th><th>Transfer</th><th>Akamai list (USD)</th></tr></thead><tbody>'+rows.map(function(p){return '<tr><td>'+esc(p.n)+'</td><td>'+p.cpu+'</td><td>'+p.ram+' GB</td><td>'+p.disk+' GB</td><td>'+(p.tb?p.tb+' TB':'0 TB · metered')+'</td><td class="m">'+(p.mo!=null?usd(p.mo,2)+' / mo':usd(p.hr,2)+' / hr')+'</td></tr>';}).join('')+'</tbody>';}
  tb.addEventListener('click',function(e){var b=e.target.closest('button');if(b)show(b.getAttribute('data-k'));});
  show('sh');
})();

/* =====================================================================
   CONFIGURATOR (#configure) — cart = XcellHost INR fees only
   ===================================================================== */
var CF=(function(){
  var rowsEl=$id('cfRows'),fam=$id('cfFam'),plan=$id('cfPlan');if(!rowsEl)return null;
  var CFAM=['sh','g7','g6','hm','vpu','gpu'];
  var rows=[{id:'sh-4',q:2},{id:'g7-8',q:2},{id:'hm-24',q:1}];
  fam.innerHTML=CFAM.map(function(f){return '<option value="'+f+'">'+esc(FAM[f])+'</option>';}).join('');
  function fillPlans(){var f=fam.value;plan.innerHTML=PL.filter(function(p){return p.f===f;}).map(function(p){return '<option value="'+p.id+'">'+esc(p.n)+(p.gpu?' · on quote':' · '+usd(p.mo,0)+'/mo')+'</option>';}).join('');}
  fam.addEventListener('change',fillPlans);fillPlans();
  $id('cfAddRow').addEventListener('click',function(){var id=plan.value,ex=rows.filter(function(r){return r.id===id;})[0];if(ex)ex.q++;else rows.push({id:id,q:1});render();});
  function renderRows(){rowsEl.innerHTML=rows.length?rows.map(function(r,i){var p=BY[r.id];return '<div class="ac-row'+(p.gpu?' gpu':'')+'"><div class="ac-rn"><b>'+esc(p.n)+'</b><small>'+esc(FAM[p.f])+(p.gpu?' · price on quote':' · '+usd(p.mo,0)+'/mo each · Akamai list')+'</small></div><div class="stp sm"><button type="button" data-i="'+i+'" data-d="-1" aria-label="Fewer">−</button><input type="number" min="0" max="999" value="'+r.q+'" data-i="'+i+'" aria-label="Quantity"><button type="button" data-i="'+i+'" data-d="1" aria-label="More">+</button></div><button type="button" class="ac-rm" data-rm="'+i+'" aria-label="Remove"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg></button></div>';}).join(''):'<p class="ac-empty">No instances yet — add one below.</p>';}
  rowsEl.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;
    if(b.hasAttribute('data-rm')){rows.splice(+b.getAttribute('data-rm'),1);render();return;}
    var i=+b.getAttribute('data-i');if(isNaN(i))return;rows[i].q=clamp(rows[i].q+(+b.getAttribute('data-d')),0,999);if(!rows[i].q)rows.splice(i,1);render();});
  rowsEl.addEventListener('change',function(e){var t=e.target;if(t.tagName!=='INPUT')return;var i=+t.getAttribute('data-i');rows[i].q=clamp(Math.round(num(t,1)),0,999);if(!rows[i].q)rows.splice(i,1);render();});
  var seg=$id('cfPlanSeg');
  $$('button',seg).forEach(function(b){b.addEventListener('click',function(){$$('button',seg).forEach(function(x){x.classList.toggle('on',x===b);});seg.dataset.value=b.getAttribute('data-v');calc();});});
  ['cfBlk','cfNb','cfDr'].forEach(function(id){var inp=$id(id);inp.addEventListener('input',calc);inp.addEventListener('change',calc);});
  $$('#configure .stp').forEach(function(s){if(s.classList.contains('sm'))return;$$('button',s).forEach(function(b){b.addEventListener('click',function(){var i=$('input',s);var st=+b.getAttribute('data-step');i.value=clamp(num(i,0)+st,+i.min||0,+i.max||1e6);calc();});});});
  ['cfSec','cfFin','cfAss','cfLz'].forEach(function(id){$id(id).addEventListener('change',calc);});
  $$('[data-plan]').forEach(function(a){a.addEventListener('click',function(){var v=a.getAttribute('data-plan');var b=$('button[data-v="'+v+'"]',seg);if(b)b.click();});});
  var state={};
  function calc(){
    var inst=0,gpu=[],usdSum=0;rows.forEach(function(r){var p=BY[r.id];inst+=r.q;if(p.gpu)gpu.push(r);else usdSum+=p.mo*r.q;});
    var blk=clamp(Math.round(num($id('cfBlk'),0)),0,100000),nb=clamp(Math.round(num($id('cfNb'),0)),0,50),dr=clamp(Math.round(num($id('cfDr'),0)),0,500);
    var res=inst+nb;usdSum+=blk*USD.blk+nb*USD.nb;
    var mode=seg.dataset.value||'auto',pl=mode==='auto'?(res<=XF.essN?'ess':res<=XF.proN?'pro':'ent'):mode;
    $id('cfAuto').textContent=mode==='auto'?'auto → '+(pl==='ess'?'Essential':pl==='pro'?'Professional':'Enterprise'):'manual';
    $id('cfCnt').textContent=res+' resource'+(res===1?'':'s');
    var L=[];
    if(pl==='ess')L.push({key:'ak-ess',name:'Managed Akamai Cloud — Essential',sub:'up to 10 resources · monthly · indicative',price:XF.ess,qty:1});
    if(pl==='pro')L.push({key:'ak-pro',name:'Managed Akamai Cloud — Professional',sub:'up to 40 resources · monthly · indicative',price:XF.pro,qty:1});
    var inc=pl==='ess'?XF.essN:pl==='pro'?XF.proN:0,extra=pl==='ent'?0:Math.max(0,res-inc);
    if(extra)L.push({key:'ak-extra',name:'Extra managed resources',sub:'beyond plan allowance · monthly',price:XF.extra,qty:extra});
    var sec=$id('cfSec').checked,fin=$id('cfFin').checked;
    if(sec&&pl!=='ent')L.push({key:'ak-sec',name:'Security posture management',sub:'Akamai Cloud · monthly',price:XF.sec,qty:1});
    if(fin&&pl==='ess')L.push({key:'ak-fin',name:'FinOps monthly review',sub:'Akamai Cloud · monthly',price:XF.fin,qty:1});
    if(dr)L.push({key:'ak-dr',name:'DR copy to XcellHost Mumbai Tier IV',sub:'object storage · per TB per month',price:XF.dr,qty:dr});
    var O=[];if($id('cfAss').checked)O.push({key:'ak-ass',name:'Akamai Cloud readiness assessment',sub:'one-time',price:XF.ass,qty:1});
    if($id('cfLz').checked)O.push({key:'ak-lz',name:'Akamai Cloud landing zone setup',sub:'one-time',price:XF.lz,qty:1});
    var mon=L.reduce(function(a,l){return a+l.price*l.qty;},0),one=O.reduce(function(a,l){return a+l.price*l.qty;},0);
    $id('cfTot').textContent=inr(Math.round(mon*1.18));
    $id('cfPlanName').textContent=pl==='ess'?'Essential':pl==='pro'?'Professional':'Enterprise (quoted)';
    var cr=L.map(function(l){return '<div class="crow"><span>'+esc(l.name)+(l.qty>1?' × '+l.qty:'')+'</span><b>'+inr(l.price*l.qty)+'</b></div>';});
    if(pl==='ent')cr.unshift('<div class="crow"><span>Enterprise plan</span><b>Quote</b></div>');
    if(fin&&pl!=='ess')cr.push('<div class="crow"><span>FinOps review</span><b>included</b></div>');
    if(sec&&pl==='ent')cr.push('<div class="crow"><span>Security posture</span><b>included</b></div>');
    cr.push('<div class="crow"><span>Monthly subtotal</span><b>'+inr(mon)+'</b></div><div class="crow"><span>GST 18%</span><b>'+inr(Math.round(mon*0.18))+'</b></div>');
    if(one)cr.push('<div class="crow"><span>One-time, excl. GST</span><b>'+inr(one)+'</b></div>');
    $id('cfCrows').innerHTML=cr.join('');
    $id('cfUsd').innerHTML='<span>Akamai usage · reference</span><b>'+usd(usdSum,2)+' / mo</b><small>Akamai list price (USD), excl. taxes. XcellHost INR quote on request.'+(gpu.length?' <em>+ '+gpu.reduce(function(a,r){return a+r.q;},0)+' GPU instance(s): price on quote</em>':'')+'</small>';
    state={L:L,O:O,gpu:gpu,pl:pl,res:res,usd:usdSum,blk:blk,nb:nb,dr:dr,mon:mon,one:one};}
  function summary(){var s=state,t=['Akamai Cloud configuration (from xcellhost.cloud/akamai-cloud):'];
    rows.forEach(function(r){var p=BY[r.id];t.push('- '+r.q+' × '+p.n+(p.gpu?' — GPU, price on quote':' (Akamai list '+usd(p.mo,0)+'/mo each)'));});
    t.push('- Block Storage '+s.blk+' GB, NodeBalancers '+s.nb);t.push('- Managed plan: '+(s.pl==='ess'?'Essential':s.pl==='pro'?'Professional':'Enterprise')+' for '+s.res+' resources');
    if(s.dr)t.push('- DR copy to XcellHost Mumbai: '+s.dr+' TB');t.push('Please send an INR quote for Akamai usage and XcellHost fees.');return t.join('\n');}
  function toForm(extra){var m=$id('enM');if(m)m.value=summary()+(extra?'\n'+extra:'');var tp=$id('enT');if(tp&&state.gpu.length)tp.value='GPU or AI inference (price on quote)';}
  $id('oAdd').addEventListener('click',function(){calc();var all=state.L.concat(state.O);
    if(!all.length&&!state.gpu.length){toast('Nothing to add yet');return;}
    all.forEach(function(l){addCart(l);});
    if(state.gpu.length){toForm('GPU lines are a quote request — no price shown.');toast('GPU lines added to your quote request below');}
    else if(state.pl==='ent'){toForm();toast('Enterprise plan is quoted — details copied to the enquiry form');}});
  $id('cfQuote').addEventListener('click',function(){calc();toForm();});
  function render(){renderRows();calc();}
  render();
  return {add:function(id){var ex=rows.filter(function(r){return r.id===id;})[0];if(ex)ex.q++;else rows.push({id:id,q:1});render();},state:function(){return state;}};
})();

/* =====================================================================
   INSTANCE SIZER (#sizer)
   ===================================================================== */
(function(){
  var wl=$id('szWl'),cpu=$id('szCpu'),ram=$id('szRam'),ld=$id('szLoad'),out=$id('szOut');if(!out)return;
  var W='web';
  function famFor(w,load,c,r){if(w==='ai')return 'gpu';if(w==='media')return 'vpu';if(w==='cache')return 'hm';
    if(w==='db'){return r/c>=8&&r>=24?'hm':'g7';}
    if(w==='ci')return load==='burst'?'sh':'g7';
    return load==='burst'?'sh':'g7';}
  function pick(f,c,r){var L=PL.filter(function(p){return p.f===f&&p.cpu>=c&&p.ram>=r;});L.sort(function(a,b){return (a.mo||0)-(b.mo||0);});return L[0]||null;}
  var WHY={sh:'Bursty load suits shared cores. They are the cheapest per GB of RAM.',g7:'Steady CPU use needs dedicated cores. G7 is Akamai\'s newer generation and was formerly Premium CPU.',hm:'Your memory-to-CPU ratio favours High Memory, which has up to 300 GB of RAM per instance.',vpu:'NETINT VPUs transcode in hardware. Akamai notes capacity is temporarily full, so we check before quoting.',gpu:'Inference needs GPUs. These are always priced on quote.'};
  function run(){var c=+cpu.value,r=+ram.value,load=ld.dataset.value||'steady';$id('szCpuV').textContent=c;$id('szRamV').textContent=r+' GB';
    var f=famFor(W,load,c,r),h='';
    if(f==='gpu'){h='<span class="ac-szk">Recommended family</span><h3>GPU · NVIDIA RTX 4000 Ada <small>or RTX PRO 6000 Blackwell</small></h3><p>'+WHY.gpu+' The choice depends on model size: RTX 4000 Ada has 20 GB per card, and RTX PRO 6000 Blackwell has 96 GB per card. You can also try Akamai Inference (beta) for a serverless API.</p><div class="ac-szp q">Price on quote</div><div class="ac-sza"><button type="button" class="btn btn-orange btn-sm" data-sz="gpu-ada">Add to configurator</button><a class="btn btn-ghost btn-sm" href="#enquiry">Request GPU quote</a></div>';out.innerHTML=h;out.setAttribute('data-plan','gpu-ada');return;}
    var p=pick(f,c,r),alt=null;
    if(!p){var fb=['g7','hm','sh'];for(var i=0;i<fb.length&&!p;i++){p=pick(fb[i],c,r);if(p)f=fb[i];}}
    if(!p){out.innerHTML='<span class="ac-szk">No single plan</span><h3>Split across instances or LKE</h3><p>No single Akamai plan in this family has '+c+' vCPUs and '+r+' GB RAM together. Run it as several instances or as an LKE node pool. We can design it.</p>';out.removeAttribute('data-plan');return;}
    if(f==='sh')alt=pick('g7',c,r);else if(f==='g7')alt=pick('sh',c,r);
    h='<span class="ac-szk">Smallest plan that fits</span><h3>'+esc(p.n)+' <small>'+esc(FAM[p.f])+'</small></h3><p>'+WHY[f]+'</p><ul class="ac-szs"><li><b>'+p.cpu+'</b> vCPU</li><li><b>'+p.ram+' GB</b> RAM</li><li><b>'+p.disk+' GB</b> SSD</li><li><b>'+(p.tb?p.tb+' TB':'0 TB')+'</b> transfer</li></ul>'+
      '<div class="ac-szp">'+usd(p.mo,2)+' <small>/ month · Akamai list price (USD), excl. taxes. XcellHost INR quote on request</small></div>'+
      (alt?'<p class="ac-alt">Alternative: <b>'+esc(alt.n)+'</b>, '+usd(alt.mo,0)+'/mo · '+(alt.f==='sh'?'shared cores, cheaper for spiky load':'dedicated cores for sustained load')+'</p>':'')+
      '<div class="ac-sza"><button type="button" class="btn btn-orange btn-sm" data-sz="'+p.id+'">Add to configurator</button></div>';
    out.innerHTML=h;out.setAttribute('data-plan',p.id);}
  $$('button',wl).forEach(function(b){b.addEventListener('click',function(){W=b.getAttribute('data-v');$$('button',wl).forEach(function(x){x.classList.toggle('on',x===b);});
    if(W==='cache'&&+ram.value<24){ram.value=48;}if(W==='media'&&+cpu.value<8){cpu.value=8;ram.value=16;}run();});});
  $$('button',ld).forEach(function(b){b.addEventListener('click',function(){$$('button',ld).forEach(function(x){x.classList.toggle('on',x===b);});ld.dataset.value=b.getAttribute('data-v');run();});});
  cpu.addEventListener('input',run);ram.addEventListener('input',run);
  out.addEventListener('click',function(e){var b=e.target.closest('[data-sz]');if(!b||!CF)return;CF.add(b.getAttribute('data-sz'));toast('Added to the configurator');var cfg=$id('configure');if(cfg)cfg.scrollIntoView({behavior:RED?'auto':'smooth',block:'start'});});
  run();
  window.__acSizer={pick:pick,famFor:famFor};
})();

/* =====================================================================
   EGRESS / TRANSFER ESTIMATOR (#egress)
   ===================================================================== */
(function(){
  var rowsEl=$id('egRows'),sel=$id('egPlan');if(!rowsEl)return;
  var rows=[{id:'sh-4',q:2},{id:'g7-8',q:2},{id:'g8-8',q:1}];
  sel.innerHTML=PL.filter(function(p){return !p.gpu;}).map(function(p){return '<option value="'+p.id+'">'+esc(p.n)+' · '+(p.tb?p.tb+' TB':'0 TB')+'</option>';}).join('')+PL.filter(function(p){return p.gpu;}).map(function(p){return '<option value="'+p.id+'">'+esc(p.n)+' · 0 TB</option>';}).join('');
  $id('egAdd').addEventListener('click',function(){var id=sel.value,ex=rows.filter(function(r){return r.id===id;})[0];if(ex)ex.q++;else rows.push({id:id,q:1});render();});
  function renderRows(){rowsEl.innerHTML=rows.length?rows.map(function(r,i){var p=BY[r.id];return '<div class="ac-row"><div class="ac-rn"><b>'+esc(p.n)+'</b><small>'+(p.tb?'+'+p.tb+' TB each to the pool':'no allowance · all egress billed')+'</small></div><div class="stp sm"><button type="button" data-i="'+i+'" data-d="-1" aria-label="Fewer">−</button><input type="number" min="0" max="999" value="'+r.q+'" data-i="'+i+'" aria-label="Quantity"><button type="button" data-i="'+i+'" data-d="1" aria-label="More">+</button></div><button type="button" class="ac-rm" data-rm="'+i+'" aria-label="Remove"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg></button></div>';}).join(''):'<p class="ac-empty">No plans — the pool is empty.</p>';}
  rowsEl.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-rm')){rows.splice(+b.getAttribute('data-rm'),1);render();return;}var i=+b.getAttribute('data-i');if(isNaN(i))return;rows[i].q=clamp(rows[i].q+(+b.getAttribute('data-d')),0,999);if(!rows[i].q)rows.splice(i,1);render();});
  rowsEl.addEventListener('change',function(e){var t=e.target;if(t.tagName!=='INPUT')return;var i=+t.getAttribute('data-i');rows[i].q=clamp(Math.round(num(t,1)),0,999);if(!rows[i].q)rows.splice(i,1);render();});
  ['egObj','egTb','egRate','egCmp','egFx'].forEach(function(id){var e=$id(id);e.addEventListener('input',calc);e.addEventListener('change',calc);});
  function compute(o){var pool=o.rows.reduce(function(a,r){return a+BY[r.id].tb*r.q;},0)+(o.obj?1:0);
    var over=Math.max(0,o.tb-pool),overGB=over*1024,cost=overGB*o.rate,cmp=o.cmp>0?o.tb*1024*o.cmp:null;return {pool:pool,over:over,overGB:overGB,cost:cost,cmp:cmp};}
  function calc(){var o={rows:rows,obj:$id('egObj').checked,tb:Math.max(0,num($id('egTb'),0)),rate:Math.max(0,num($id('egRate'),0)),cmp:Math.max(0,num($id('egCmp'),0)),fx:Math.max(0,num($id('egFx'),0))};
    var r=compute(o);
    $id('egTot').textContent=usd(r.cost,2);
    $id('egSub').textContent=r.over>0?'overage on Akamai Cloud · '+Math.round(r.overGB).toLocaleString('en-IN')+' GB over the pool':'inside the pool — no overage';
    var frac=r.pool>0?clamp(o.tb/Math.max(r.pool,o.tb),0,1):1,mk=r.pool>0?clamp(r.pool/Math.max(r.pool,o.tb),0,1):0;
    $id('egUse').style.width=(frac*100)+'%';$id('egUse').className=r.over>0?'ov':'';$id('egPoolMk').style.left=(mk*100)+'%';
    var cr=['<div class="crow"><span>Pool this month</span><b>'+(+r.pool.toFixed(2))+' TB</b></div>','<div class="crow"><span>Outbound transfer</span><b>'+(+o.tb.toFixed(2))+' TB</b></div>','<div class="crow"><span>Over the pool</span><b>'+(+r.over.toFixed(2))+' TB</b></div>','<div class="crow"><span>Overage @ '+usd(o.rate,3)+'/GB</span><b>'+usd(r.cost,2)+'</b></div>'];
    if(r.cmp!=null){cr.push('<div class="crow"><span>Same egress @ your rate '+usd(o.cmp,3)+'/GB, no allowance</span><b>'+usd(r.cmp,2)+'</b></div>');var sv=r.cmp-r.cost;cr.push('<div class="crow'+(sv>0?' save':'')+'"><span>Difference</span><b>'+(sv>=0?'':'−')+usd(Math.abs(sv),2)+'</b></div>');}
    if(o.fx>0)cr.push('<div class="crow"><span>Overage at your ₹'+o.fx+'/US$</span><b>'+inr(r.cost*o.fx)+'</b></div>');
    $id('egCrows').innerHTML=cr.join('');}
  function render(){renderRows();calc();}
  render();
  window.__acEgress={compute:compute};
})();

/* =====================================================================
   NAV active state + enquiry form
   ===================================================================== */
(function(){
  var links=$$('.ac-nav a');if(!links.length||!('IntersectionObserver' in window))return;
  var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.remove('on');});var a=map[e.target.id];if(a)a.classList.add('on');}});},{rootMargin:'-45% 0px -50% 0px'});
  Object.keys(map).forEach(function(id){var s=$id(id);if(s)io.observe(s);});
})();
if(X.onForm)X.onForm('akamai-cloud-enquiry',function(data,f){var b=d.createElement('div');b.className='done ac-done';b.innerHTML='<div class="dk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><h4>Enquiry received</h4><p></p>';
  $('p',b).textContent='Thanks '+String(data.name||'').split(' ')[0]+'. An XcellHost cloud engineer will reply to '+(data.email||'you')+' within one business day with a design and an INR quote'+(/GPU/i.test(String(data.topic||'')+String(data.message||''))?'. GPU capacity is priced on quote.':'.');
  f.hidden=true;f.parentNode.insertBefore(b,f);toast('Enquiry received');return false;});
})();
