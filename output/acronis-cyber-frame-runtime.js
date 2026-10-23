
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
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function inr(n){return XH.inr(Math.round(n));}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function num(id,def){var e=$id(id),v=e?parseFloat(e.value):NaN;return isFinite(v)?v:def;}

  /* ===== one shared rAF ticker ===== */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function whenOn(el,setOn){if(!el)return;var vis=false;XH.whenVisible(el,function(v){vis=v;setOn(v&&!d.hidden);});d.addEventListener('visibilitychange',function(){setOn(vis&&!d.hidden);});}

  /* ===== canvas helpers (hero console is always dark) ===== */
  var BL='#0066FF',BL2='#7FB0FF',OR='#FF8A00',OR2='#FFB15C',GR2='#5FE08D',RD2='#ff8a80',NV2='#1B2A52';
  var INK='#ffffff',MUT='#9fb6de',LINE='rgba(127,176,255,.2)',SOFT='rgba(255,255,255,.06)',PAN='rgba(255,255,255,.045)';
  var RGB={b:'0,102,255',b2:'127,176,255',o:'255,138,0',g:'22,163,74',r:'192,57,43',gy:'150,165,195'};
  var GA=1;function ga(c,a){c.globalAlpha=clamp(a,0,1)*GA;}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function txt(c,s,x,y,font,col,al){c.font=font;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  function clip(c,s,maxW){if(c.measureText(s).width<=maxW)return s;while(s.length>2&&c.measureText(s+'…').width>maxW)s=s.slice(0,-1);return s+'…';}
  function ftxt(c,s,x,y,font,col,maxW,al){c.font=font;txt(c,clip(c,s,maxW),x,y,font,col,al);}
  function fitC(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function panel(c,x,y,w,h,r,stroke,fill){rr(c,x,y,w,h,r);c.fillStyle=fill||PAN;c.fill();c.strokeStyle=stroke||LINE;c.lineWidth=1.2;c.stroke();}
  function tick(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2;c.lineCap='round';c.beginPath();c.moveTo(x-s*.45,y);c.lineTo(x-s*.1,y+s*.35);c.lineTo(x+s*.5,y-s*.35);c.stroke();c.lineCap='butt';}
  function cross(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.lineCap='round';c.beginPath();c.moveTo(x-s*.4,y-s*.4);c.lineTo(x+s*.4,y+s*.4);c.moveTo(x+s*.4,y-s*.4);c.lineTo(x-s*.4,y+s*.4);c.stroke();c.lineCap='butt';}
  function pill(c,s,x,y,font,bg,fg,al,bd){c.font=font;var w=c.measureText(s).width+14,h=18,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,6);c.fillStyle=bg;c.fill();if(bd){c.strokeStyle=bd;c.lineWidth=1;c.stroke();}txt(c,s,x0+7,y+.5,font,fg);return w;}
  function stamp(c,s,x,y,t0,t,col,fs){if(t<t0)return;var u=spring((t-t0)/600),k=lerp(1.6,1,clamp(u,0,1.2));c.save();c.translate(x,y);c.rotate(-.04);c.scale(k,k);ga(c,(t-t0)/180);var f='800 '+fs+'px "IBM Plex Mono"';c.font=f;var w=c.measureText(s).width+18;rr(c,-w/2,-12,w,24,5);c.fillStyle='rgba(7,14,34,.96)';c.fill();c.strokeStyle=col;c.lineWidth=2;c.stroke();txt(c,s,0,1,f,col,'center');c.restore();ga(c,1);}
  function dotTrail(c,x1,y1,x2,y2,u,col,arc){if(u<=0||u>=1)return;var A=arc===undefined?18:arc;function P(e){return[lerp(x1,x2,e),lerp(y1,y2,e)-Math.sin(e*Math.PI)*A];}
    var e=eio(u),p=P(e);for(var k=4;k>0;k--){var q=P(eio(clamp(u-k*.035,0,1)));ga(c,.13*(5-k));c.fillStyle=col;c.beginPath();c.arc(q[0],q[1],3,0,TAU);c.fill();}
    ga(c,1);c.fillStyle=col;c.beginPath();c.arc(p[0],p[1],4.2,0,TAU);c.fill();c.fillStyle='rgba(255,255,255,.85)';c.beginPath();c.arc(p[0],p[1],1.5,0,TAU);c.fill();}
  function gShield(c,x,y,s,col){c.beginPath();c.moveTo(x,y-s*.5);c.lineTo(x+s*.42,y-s*.32);c.lineTo(x+s*.36,y+s*.14);c.quadraticCurveTo(x+s*.2,y+s*.42,x,y+s*.52);c.quadraticCurveTo(x-s*.2,y+s*.42,x-s*.36,y+s*.14);c.lineTo(x-s*.42,y-s*.32);c.closePath();c.fillStyle=col;c.fill();}

  /* ===== isometric projection ===== */
  var IS={S:30,ox:0,oy:0};
  function ip(x,y,z){return [IS.ox+(x-y)*.866*IS.S,IS.oy+((x+y)*.5-z)*IS.S];}
  function fitIso(rx,ry,rw,rh,x0,x1,y0,y1,z1,maxS){var X0=(x0-y1)*.866,X1=(x1-y0)*.866,Y0=(x0+y0)*.5-z1,Y1=(x1+y1)*.5;
    IS.S=Math.min(rw/(X1-X0),rh/(Y1-Y0),maxS||60);IS.ox=rx+rw/2-IS.S*(X0+X1)/2;IS.oy=ry+rh/2-IS.S*(Y0+Y1)/2;}
  function poly(c,pts){c.beginPath();c.moveTo(pts[0][0],pts[0][1]);for(var i=1;i<pts.length;i++)c.lineTo(pts[i][0],pts[i][1]);c.closePath();}
  function box(c,x,y,z,wx,wy,hz,rgb,a,edge){
    var t=[ip(x,y,z+hz),ip(x+wx,y,z+hz),ip(x+wx,y+wy,z+hz),ip(x,y+wy,z+hz)],
        l=[ip(x,y+wy,z),ip(x+wx,y+wy,z),ip(x+wx,y+wy,z+hz),ip(x,y+wy,z+hz)],
        r=[ip(x+wx,y,z),ip(x+wx,y+wy,z),ip(x+wx,y+wy,z+hz),ip(x+wx,y,z+hz)];
    c.strokeStyle=edge||'rgba(255,255,255,.22)';c.lineWidth=1;
    poly(c,l);c.fillStyle='rgba('+rgb+','+(a*.62).toFixed(3)+')';c.fill();c.stroke();
    poly(c,r);c.fillStyle='rgba('+rgb+','+(a*.4).toFixed(3)+')';c.fill();c.stroke();
    poly(c,t);c.fillStyle='rgba('+rgb+','+(a*.9).toFixed(3)+')';c.fill();c.stroke();}
  /* a hyperconverged node: storage · compute · network layers */
  var NW=1,NZ=1.36;
  function node(c,x,y,zo,al,state,t){if(al<=0)return;ga(c,al);var dn=state==='down',z=zo;
    box(c,x,y,z,NW,NW,.52,dn?RGB.r:RGB.b,dn?.55:.75);
    box(c,x,y,z+.6,NW,NW,.44,dn?RGB.r:RGB.o,dn?.4:.6);
    box(c,x,y,z+1.12,NW,NW,.24,dn?RGB.r:RGB.b2,dn?.35:.55);
    // status LEDs on the front-left face
    for(var k=0;k<3;k++){var zz=z+[.26,.82,1.24][k],p=ip(x+.16,y+NW,zz),on=dn?(Math.sin(t/120)>0):((t/400+k*.7+x)%2)>.5;
      c.fillStyle=dn?RD2:(on?GR2:'rgba(95,224,141,.35)');c.beginPath();c.arc(p[0],p[1]+1,Math.max(1.6,IS.S*.045),0,TAU);c.fill();}
    ga(c,1);}
  function slot(nx,s){return [nx+.1+(s%2)*.46,.1+Math.floor(s/2)*.46];}
  function vm(c,x,y,z,rgb,al,sz){sz=sz||.34;ga(c,al);box(c,x,y,z,sz,sz,.3,rgb,.95,'rgba(255,255,255,.35)');ga(c,1);}
  function vmTop(x,y,z,sz){sz=sz||.34;return ip(x+sz/2,y+sz/2,z+.3);}
  function nodeLabel(c,nx,s,col,nar){var p=ip(nx+.5,NW+.15,0);txt(c,s,p[0]-IS.S*.3,p[1]+14,'600 '+(nar?8:9)+'px "IBM Plex Mono"',col||MUT,'center');}
  function legend(c,x,y,nar){var L=[['network',BL2],['compute',OR],['storage',BL]];L.forEach(function(l,i){c.fillStyle=l[1];rr(c,x,y+i*14,8,8,2);c.fill();txt(c,l[0],x+13,y+i*14+4.5,'600 '+(nar?7.5:8.5)+'px "IBM Plex Mono"',MUT);});}

  /* ======================================================================
     HERO · five scenes (sample data)
     ====================================================================== */
  var DUR=5500,FADE=450,NS=5;
  var SC=[
    {cap:'Three nodes, one cluster',ph:'Forming',lt:'cluster events',L:['Nodes','Usable pool','HA · tolerates'],
     lg:[[300,'node-01 joined · compute + storage','ok','g'],[750,'node-02 joined','ok','g'],[1200,'node-03 joined','ok','g'],[2400,'storage pool · 3 replicas','created',''],[3900,'HA enabled · 1-node tolerance','ready','g']]},
    {cap:'Self-service VMs & tenants',ph:'Provisioning',lt:'self-service',L:['VMs running','Tenants','Quota used · A'],
     lg:[[400,'tenant-a · vm web-01 · 4 vCPU','create',''],[1100,'volume 100 GB → web-01','attach',''],[1700,'tenant-b · vm erp-01 · 8 vCPU','create',''],[3000,'private nets · 10.10.0.0/24 · 10.20.0.0/24','isolated','g'],[3600,'floating IP → web-01','assigned','w']]},
    {cap:'Protected by default',ph:'Protecting',lt:'protection',L:['Agents','Backed up','Blocked'],
     lg:[[300,'agent preinstalled on 6 VMs','ok','g'],[1400,'backup plan · daily + hourly','run',''],[3200,'erp-01 · suspicious process','alert','r'],[3700,'EDR · process stopped, file quarantined','blocked','g'],[4400,'6 of 6 VMs · protected','ok','g']]},
    {cap:'Node failure, then scale-out',ph:'Self-healing',lt:'ha events',L:['Healthy nodes','VMs running','Usable capacity'],
     lg:[[900,'node-02 · heartbeat lost','down','r'],[1500,'2 VMs restarted on node-01, node-03','HA','g'],[2200,'replicas rebuilding','sync','w'],[3200,'node-04 added · scale-out','join',''],[3900,'cluster healthy · 4 nodes','ok','g']]},
    {cap:'Migrate off a legacy hypervisor',ph:'Migrating',lt:'migration wizard',L:['VMs migrated','Wizard step','Rollback copy'],
     lg:[[400,'discover · 5 VMs on legacy host','scan',''],[1300,'replicate disks · wave 1','copy',''],[2300,'convert drivers · boot test','ok','g'],[3300,'cut over · protection applied','live','g'],[4400,'rollback copy kept 7 days','kept','w']]}
  ];
  var hero=$id('cfHero'),cv=$id('cfCv'),scr=$id('cfScr'),rail=$id('cfRail');
  var tabs=rail?$$('button',rail):[],logEl=$id('cfLog');
  var K=[$id('cfK0'),$id('cfK1'),$id('cfK2')],LB=[$id('cfL0'),$id('cfL1'),$id('cfL2')];

  /* scene 0 · cluster forms */
  function s0(c,w,h,t){var nar=w<400,n=3,sp=1.7,top=38,started=0;
    fitIso(nar?8:70,top,w-(nar?16:84),h-top-22,-.45,(n-1)*sp+1.45,-.45,1.45,NZ+.6,nar?44:52);
    if(!nar)legend(c,12,h-52,nar);
    // storage pool slab
    var pa=eo(seg(2200,2800,t));if(pa>0){ga(c,pa);box(c,-.45,-.45,-.24,(n-1)*sp+1.9,1.9,.18,RGB.b,.32+.25*Math.sin(clamp((t-2200)/900,0,1)*Math.PI));ga(c,1);
      var fp=seg(2400,3800,t),a=ip(-.3,1.3,-.06),b=ip((n-1)*sp+1.3,1.3,-.06);c.strokeStyle=OR;c.lineWidth=3;c.lineCap='round';ga(c,pa);c.beginPath();c.moveTo(a[0],a[1]);c.lineTo(lerp(a[0],b[0],fp),lerp(a[1],b[1],fp));c.stroke();c.lineCap='butt';ga(c,1);}
    for(var i=0;i<n;i++){var t0=200+i*450,u=(t-t0)/700,zo=(1-clamp(spring(u),0,1.3))*3.2,al=eo(seg(t0,t0+260,t));if(t>t0)started++;
      node(c,i*sp,0,Math.max(-.2,zo),al,'ok',t);if(al>.5)nodeLabel(c,i*sp,'node-0'+(i+1),MUT,nar);}
    // network mesh between node tops
    if(t>1700){var ma=eo(seg(1700,2100,t));for(var j=0;j<n;j++)for(var k=j+1;k<n;k++){var p1=ip(j*sp+.5,.5,NZ),p2=ip(k*sp+.5,.5,NZ);ga(c,ma*.7);c.strokeStyle=BL2;c.lineWidth=1.3;c.setLineDash([3,4]);c.beginPath();c.moveTo(p1[0],p1[1]);c.quadraticCurveTo((p1[0]+p2[0])/2,Math.min(p1[1],p2[1])-IS.S*(k-j)*.55,p2[0],p2[1]);c.stroke();c.setLineDash([]);
        var uu=((t-1700)/1100+j*.3)%1,mx=(p1[0]+p2[0])/2,my=Math.min(p1[1],p2[1])-IS.S*(k-j)*.55,e=uu,bx=(1-e)*(1-e)*p1[0]+2*(1-e)*e*mx+e*e*p2[0],by=(1-e)*(1-e)*p1[1]+2*(1-e)*e*my+e*e*p2[1];ga(c,ma);c.fillStyle=OR;c.beginPath();c.arc(bx,by,3,0,TAU);c.fill();}
      ga(c,1);}
    if(pa>0){var lp=ip(((n-1)*sp+1)/2,1.6,-.24);ga(c,pa);pill(c,nar?'storage pool · 3 replicas':'software-defined storage pool · 3 replicas',lp[0],lp[1]+(nar?10:12),'700 '+(nar?7.5:8.5)+'px "IBM Plex Mono"','rgba(7,14,34,.92)',BL2,'center','rgba(127,176,255,.35)');ga(c,1);}
    if(t>4000)stamp(c,'CLUSTER READY · HA',w/2,top+(nar?14:18),4000,t,GR2,nar?8.5:10);
    var tb=seg(2400,3800,t)*12.8;
    return [String(started),t<2400?'—':tb.toFixed(1)+' TB',t<3900?(t<2400?'—':'Configuring'):'1 node down'];
  }
  /* scene 1 · self-service VMs and tenants */
  var V1=[[0,0,'b',400],[0,1,'b',800],[1,0,'o',1700],[1,2,'b',1200],[2,0,'o',2100],[2,1,'o',2500],[0,2,'b',2800]];
  function s1(c,w,h,t){var nar=w<400,n=3,sp=1.7,top=38,pw=nar?0:Math.min(150,w*.3),cnt=0,qa=0;
    fitIso(pw+(nar?8:22),top+6,w-pw-(nar?16:30),h-top-20,-.2,(n-1)*sp+1.2,-.2,1.2,NZ+1.4,nar?44:50);
    // portal panel
    if(!nar){var px=10,py=top+4,ph=h-top-16;panel(c,px,py,pw,ph,12);txt(c,'Self-service portal',px+12,py+16,'700 9px "IBM Plex Mono"',MUT);
      [['tenant-a','b',BL,[0,1,3,6]],['tenant-b','o',OR,[2,4,5]]].forEach(function(tn,i){var y=py+36+i*58,n2=0;tn[3].forEach(function(ix){if(t>V1[ix][3])n2++;});
        rr(c,px+10,y,pw-20,48,9);c.fillStyle=SOFT;c.fill();c.fillStyle=tn[2];c.beginPath();c.arc(px+22,y+14,4,0,TAU);c.fill();
        txt(c,tn[0],px+32,y+14,'700 10px Sora',INK);txt(c,n2+' VMs',px+pw-18,y+14,'600 9px "IBM Plex Mono"',MUT,'right');
        var q=n2/(tn[3].length+2);rr(c,px+18,y+30,pw-36,6,3);c.fillStyle='rgba(255,255,255,.08)';c.fill();rr(c,px+18,y+30,(pw-36)*q,6,3);c.fillStyle=tn[2];c.fill();
        txt(c,'quota',px+18,y+42,'500 7.5px "IBM Plex Mono"',MUT);});
      ga(c,eo(seg(3400,3800,t)));panel(c,px+10,py+156,pw-20,Math.min(42,ph-166),9,'rgba(255,138,0,.45)','rgba(255,138,0,.08)');if(ph>196){txt(c,'security group · web',px+20,py+170,'600 8px "IBM Plex Mono"',OR2);txt(c,'allow 443 · deny all else',px+20,py+184,'500 7.5px "IBM Plex Mono"',MUT);}ga(c,1);}
    var tops=[];
    for(var i=0;i<n;i++){node(c,i*sp,0,0,.85,'ok',t);nodeLabel(c,i*sp,'node-0'+(i+1),MUT,nar);
      V1.forEach(function(v,ix){if(v[0]!==i)return;var t0=v[3];if(t<t0)return;var u=(t-t0)/650,s=slot(i*sp,v[1]),zz=NZ+(1-clamp(spring(u),0,1.3))*2.4;vm(c,s[0],s[1],zz,RGB[v[2]],eo(seg(t0,t0+200,t)));if(u>1){cnt++;if(v[2]==='b')qa++;tops[ix]=vmTop(s[0],s[1],NZ);}});}
    // isolated tenant networks
    if(t>3000){var na=eo(seg(3000,3400,t));['b','o'].forEach(function(tn){var pts=[];V1.forEach(function(v,ix){if(v[2]===tn&&tops[ix])pts.push(tops[ix]);});if(pts.length<2)return;
      ga(c,na);c.strokeStyle=tn==='b'?BL2:OR;c.lineWidth=1.6;c.setLineDash([4,4]);c.lineDashOffset=-t/60;c.beginPath();c.moveTo(pts[0][0],pts[0][1]-IS.S*.5);for(var k=1;k<pts.length;k++)c.lineTo(pts[k][0],pts[k][1]-IS.S*.5);c.stroke();c.setLineDash([]);c.lineDashOffset=0;
      pts.forEach(function(p){c.fillStyle=tn==='b'?BL2:OR;c.beginPath();c.arc(p[0],p[1]-IS.S*.5,2.6,0,TAU);c.fill();});});ga(c,1);}
    if(t>3600&&tops[0]){var fa=eo(seg(3600,3900,t));ga(c,fa);var fp=tops[0];c.strokeStyle=OR2;c.lineWidth=1;c.beginPath();c.moveTo(fp[0],fp[1]-4);c.lineTo(fp[0]-12,fp[1]-IS.S*1.1);c.stroke();pill(c,'203.0.113.24',fp[0]-12,fp[1]-IS.S*1.1-8,'700 '+(nar?7.5:8.5)+'px "IBM Plex Mono"','rgba(7,14,34,.95)',OR2,'center','rgba(255,138,0,.5)');ga(c,1);}
    if(t>4300)stamp(c,nar?'2 TENANTS · ISOLATED':'2 TENANTS · ISOLATED · SELF-SERVICE',pw+(w-pw)/2,top+(nar?14:16),4300,t,BL2,nar?8:9.5);
    return [String(cnt),'2',Math.round(qa/6*100)+'%'];
  }
  /* scene 2 · protected by default */
  var V2=[[0,0,'b'],[0,1,'b'],[1,0,'o'],[1,2,'b'],[2,0,'o'],[2,1,'o']];
  function s2(c,w,h,t){var nar=w<400,n=3,sp=1.7,top=38,bw=nar?78:Math.min(124,w*.24),bx=w-bw-10,by=top+18,bh=nar?80:h-top-60,ag=0,bk=0,blk=t>3700?1:0;
    fitIso(nar?6:18,top+10,bx-(nar?14:34),h-top-24,-.2,(n-1)*sp+1.2,-.2,1.2,NZ+1.2,nar?40:50);
    if(nar){by=h-bh-30;}
    // backup storage target
    ga(c,eo(seg(800,1200,t)));panel(c,bx,by,bw,bh,12,'rgba(127,176,255,.35)','rgba(0,102,255,.10)');txt(c,'Backup storage',bx+bw/2,by+15,'800 '+(nar?8.5:10)+'px Sora',INK,'center');
    txt(c,nar?'local · cloud':'local cluster · cloud',bx+bw/2,by+28,'600 '+(nar?7:8)+'px "IBM Plex Mono"',MUT,'center');
    var cx0=bx+bw/2,cy0=by+bh-(nar?22:30),cr=nar?14:18;c.strokeStyle=t>3000?GR2:BL2;c.lineWidth=1.6;c.beginPath();c.ellipse(cx0,cy0-8,cr,5,0,0,TAU);c.stroke();c.beginPath();c.moveTo(cx0-cr,cy0-8);c.lineTo(cx0-cr,cy0+8);c.ellipse(cx0,cy0+8,cr,5,0,Math.PI,0,true);c.lineTo(cx0+cr,cy0-8);c.stroke();ga(c,1);
    if(!nar){var ry0=by+42,rgap=Math.min(22,(cy0-30-ry0)/6);for(var q=0;q<6;q++){var b1=1400+q*230,pq=seg(b1,b1+900,t),ry=ry0+q*rgap;ga(c,eo(seg(800,1200,t)));ftxt(c,['web-01','web-02','erp-01','app-01','db-01','file-01'][q],bx+10,ry+5,'600 7.5px "IBM Plex Mono"',pq>=1?GR2:MUT,bw*.5);rr(c,bx+bw*.52,ry+3,bw*.4,4,2);c.fillStyle=SOFT;c.fill();if(pq>0){rr(c,bx+bw*.52,ry+3,bw*.4*pq,4,2);c.fillStyle=pq>=1?GR2:BL2;c.fill();}}ga(c,1);}
    var tops=[];
    for(var i=0;i<n;i++){node(c,i*sp,0,0,.85,'ok',t);if(!nar)nodeLabel(c,i*sp,'node-0'+(i+1),MUT,nar);
      V2.forEach(function(v,ix){if(v[0]!==i)return;var s=slot(i*sp,v[1]);var hit=ix===2&&t>3200&&t<3700;vm(c,s[0],s[1],NZ,hit?RGB.r:RGB[v[2]],1);tops[ix]=vmTop(s[0],s[1],NZ);});}
    V2.forEach(function(v,ix){var p=tops[ix],t0=300+ix*170;if(t>t0){ag++;var u=spring((t-t0)/500);c.save();c.translate(p[0],p[1]-IS.S*.62);c.scale(u,u);gShield(c,0,0,nar?10:13,ix===2&&t>3200&&t<3700?OR:GR2);c.restore();}
      var b0=1400+ix*230;if(t>b0)dotTrail(c,p[0],p[1]-IS.S*.3,bx+4,by+bh*.55+ix*3,(t-b0)/900,ix%2?BL2:OR,24);if(t>b0+900)bk++;});
    // threat
    if(t>3200&&tops[2]){var tp=tops[2],u2=eo(seg(3200,3600,t)),sx=lerp(nar?20:40,tp[0],u2),sy=lerp(top+20,tp[1]-IS.S*.62,u2);
      if(t<3700){c.fillStyle=RD2;c.beginPath();c.arc(sx,sy,4+Math.sin(t/60),0,TAU);c.fill();}
      else{var ra=1-seg(3700,4300,t);ga(c,ra);c.strokeStyle=RD2;c.lineWidth=2;c.beginPath();c.arc(tp[0],tp[1]-IS.S*.62,10+(1-ra)*22,0,TAU);c.stroke();ga(c,1);cross(c,tp[0]+18,tp[1]-IS.S*.9,9,GR2);
        ga(c,eo(seg(3700,3950,t)));pill(c,'EDR · blocked',tp[0]+28,tp[1]-IS.S*.9,'700 '+(nar?7.5:8.5)+'px "IBM Plex Mono"','rgba(7,14,34,.95)',GR2,'left','rgba(95,224,141,.5)');ga(c,1);}}
    if(t>4400)stamp(c,'PROTECTED BY DEFAULT',(bx)/2+(nar?20:10),top+(nar?14:16),4400,t,GR2,nar?8.5:10);
    return [ag+'/6',bk+'/6',String(blk)];
  }
  /* scene 3 · node failure, HA restart, scale-out */
  var V3=[[0,0,'b'],[1,0,'o'],[1,1,'b'],[2,0,'o'],[0,1,'o'],[2,1,'b']];
  var MV3={1:[0,2],2:[2,3]};
  function s3(c,w,h,t){var nar=w<400,sp=1.55,top=38,DOWN=900,MOV=1400,ADD=3200,FIX=3800,run=6,hn='3/3',cap=12.8;
    fitIso(nar?6:20,top+8,w-(nar?12:40),h-top-26,-.2,3*sp+1.2,-.2,1.2,NZ+1,nar?40:48);
    var down=t>DOWN&&t<FIX;
    if(t>DOWN&&t<MOV+700)run=4;if(t>DOWN)hn=t<ADD?'2/3':t<FIX?'3/4':'4/4';if(t>ADD)cap=lerp(12.8,17.1,seg(ADD,ADD+900,t));
    for(var i=0;i<4;i++){var nx=i*sp;if(i===3){if(t<ADD)continue;var u=(t-ADD)/650;node(c,nx+(1-clamp(spring(u),0,1.3))*2,0,0,eo(seg(ADD,ADD+250,t)),'ok',t);if(t>ADD+300)nodeLabel(c,nx,'node-04',OR2,nar);}
      else{var st=i===1&&down?'down':'ok';node(c,nx,0,0,st==='down'?.75:.9,st,t);nodeLabel(c,nx,'node-0'+(i+1),st==='down'?RD2:MUT,nar);}
      V3.forEach(function(v,ix){if(v[0]!==i)return;var s=slot(nx,v[1]),m=MV3[ix];
        if(m&&t>DOWN){var sd=slot(m[0]*sp,m[1]),uu=seg(MOV,MOV+700,t),a=ip(s[0]+.17,s[1]+.17,NZ+.15),b=ip(sd[0]+.17,sd[1]+.17,NZ+.15);
          if(t<MOV){vm(c,s[0],s[1],NZ,RGB.r,.6+.3*Math.sin(t/90));}
          else if(uu<1){dotTrail(c,a[0],a[1],b[0],b[1],uu,ix===1?OR:BL2,IS.S*.9);}
          return;}
        vm(c,s[0],s[1],NZ,RGB[v[2]],1);});}
    // moved VMs land on their new nodes
    if(t>=MOV+700){Object.keys(MV3).forEach(function(k){var m=MV3[k],sd=slot(m[0]*sp,m[1]),fl=1-seg(MOV+700,MOV+1200,t);vm(c,sd[0],sd[1],NZ,RGB[V3[k][2]],1);if(fl>0){var p=vmTop(sd[0],sd[1],NZ);ga(c,fl);c.strokeStyle=GR2;c.lineWidth=2;c.beginPath();c.arc(p[0],p[1]-4,8+(1-fl)*12,0,TAU);c.stroke();ga(c,1);}});}
    // rebuild bar
    if(t>2100&&t<FIX+500){var ba=eo(seg(2100,2400,t))*(1-seg(FIX,FIX+500,t)),bw=nar?w-24:Math.min(220,w*.4),bxx=nar?12:w-bw-14,byy=h-24;ga(c,ba);rr(c,bxx,byy,bw,14,7);c.fillStyle='rgba(255,255,255,.07)';c.fill();rr(c,bxx,byy,bw*seg(2200,FIX,t),14,7);c.fillStyle=OR;c.fill();
      txt(c,'replicas rebuilding '+Math.round(seg(2200,FIX,t)*100)+'%',bxx+8,byy+7.5,'700 8px "IBM Plex Mono"',INK);ga(c,1);}
    if(t>DOWN&&t<MOV+400){var p1=ip(sp+.5,.5,NZ+.8);ga(c,eo(seg(DOWN,DOWN+200,t)));pill(c,'node-02 · offline',p1[0],p1[1]-10,'700 '+(nar?7.5:8.5)+'px "IBM Plex Mono"','rgba(7,14,34,.95)',RD2,'center','rgba(255,138,128,.5)');ga(c,1);}
    if(t>4400)stamp(c,nar?'SELF-HEALED · SCALED OUT':'SELF-HEALED · SCALED OUT TO 4 NODES',w/2,top+(nar?14:16),4400,t,GR2,nar?8:9.5);
    return [hn,run+'/6',cap.toFixed(1)+' TB'];
  }
  /* scene 4 · migration from a legacy hypervisor */
  var M4=['app-01 · Windows','db-01 · Linux','file-01 · Windows','erp-01 · Windows','web-01 · Linux'],MS=[[0,0],[0,1],[1,0],[1,1],[2,0]],ST4=['Discover','Replicate','Convert','Cut over'];
  function s4(c,w,h,t){var nar=w<400,top=38,lw=nar?w*.42:Math.min(176,w*.34),lx=10,ly=top+6,stepY=h-22,lh=stepY-ly-18,sp=1.5,mig=0,step=t<1300?0:t<2300?1:t<3300?2:3;
    fitIso(lx+lw+(nar?4:24),top+(nar?30:34),w-lx-lw-(nar?8:34),stepY-top-(nar?46:50),-.2,2*sp+1.2,-.2,1.2,NZ+.6,nar?34:46);
    panel(c,lx,ly,lw,lh,12,'rgba(150,165,195,.35)','rgba(150,165,195,.08)');txt(c,nar?'Legacy host':'Legacy hypervisor',lx+12,ly+15,'700 '+(nar?8.5:9.5)+'px Sora',INK);
    var rh=Math.min(28,(lh-34)/5-4);
    for(var i=0;i<3;i++){node(c,i*sp,0,0,.9,'ok',t);if(!nar)nodeLabel(c,i*sp,'node-0'+(i+1),MUT,nar);}
    M4.forEach(function(nm,i){var y=ly+30+i*(rh+4),t0=1500+i*420,u=seg(t0,t0+750,t),done=u>=1;if(done)mig++;
      rr(c,lx+8,y,lw-16,rh,7);c.fillStyle=done?'rgba(22,163,74,.14)':SOFT;c.fill();if(done){c.strokeStyle='rgba(95,224,141,.45)';c.lineWidth=1;c.stroke();}
      ftxt(c,nm,lx+16,y+rh/2,'600 '+(nar?7.5:8.5)+'px "IBM Plex Mono"',done?GR2:'#c9d8f2',lw-(done?48:30));
      if(done)tick(c,lx+lw-22,y+rh/2,9,GR2);
      else if(t>1300&&t<t0){var pg=seg(1300,t0,t);rr(c,lx+lw-38,y+rh/2-2,22,4,2);c.fillStyle='rgba(255,255,255,.1)';c.fill();rr(c,lx+lw-38,y+rh/2-2,22*pg,4,2);c.fillStyle=OR;c.fill();}
      var s=slot(MS[i][0]*sp,MS[i][1]);
      if(u>0&&u<1){var b=vmTop(s[0],s[1],NZ);dotTrail(c,lx+lw-8,y+rh/2,b[0],b[1],u,i%2?BL2:OR,30);}
      if(done){var k=spring((t-t0-750)/500);vm(c,s[0],s[1],NZ+(1-clamp(k,0,1.2))*1.2,RGB.b,1);if(t>t0+900){var p=vmTop(s[0],s[1],NZ);gShield(c,p[0],p[1]-IS.S*.55,nar?9:11,GR2);}}});
    // wizard steps
    var sw=(w-20)/4;ST4.forEach(function(s,i){var x=10+i*sw,on=i<=step,cur=i===step;rr(c,x+2,stepY-10,sw-4,20,7);c.fillStyle=cur?'rgba(255,138,0,.18)':on?'rgba(0,102,255,.2)':SOFT;c.fill();c.strokeStyle=cur?OR:on?'rgba(127,176,255,.5)':LINE;c.lineWidth=1;c.stroke();
      ftxt(c,(i+1)+' · '+s,x+sw/2,stepY,'700 '+(nar?7.5:8.5)+'px "IBM Plex Mono"',cur?OR2:on?INK:MUT,sw-12,'center');});
    if(t>4500)stamp(c,nar?'5 VMs MIGRATED':'5 VMs MIGRATED · PROTECTED',lx+lw+(w-lx-lw)/2,top+(nar?14:16),4500,t,GR2,nar?8:9.5);
    return [mig+'/5',ST4[step],t>3300?'Kept':'—'];
  }
  var DRAW=[s0,s1,s2,s3,s4];

  var cur=0,prev=-1,tS=0,tLast=0,fadeT=FADE,paused=false,lastKp=['','',''];
  function buildLog(k){if(!logEl)return;logEl.innerHTML=SC[k].lg.map(function(e){return '<li class="'+e[3]+'"><span>'+esc(e[1])+'</span><em>'+esc(e[2])+'</em></li>';}).join('');}
  function logAt(t){if(!logEl)return;var lg=SC[cur].lg,li=logEl.children;for(var i=0;i<lg.length;i++){var on=R||t>=lg[i][0];if(li[i]&&li[i].classList.contains('in')!==on)li[i].classList.toggle('in',on);}}
  function setScene(k,user){k=(k+NS)%NS;if(k===cur&&!user)return;prev=cur;cur=k;tS=0;fadeT=R?FADE:0;
    tabs.forEach(function(b,i){var on=i===cur;b.classList.toggle('on',on);b.classList.toggle('done',i<cur);b.setAttribute('aria-selected',on);b.style.setProperty('--p','0%');});
    var S=SC[cur];setT('cfCapN','0'+(cur+1));setT('cfCapT',S.cap);setT('cfPh',S.ph);setT('cfLogT',S.lt);
    for(var i=0;i<3;i++){setT(LB[i],S.L[i]);lastKp[i]='';}buildLog(cur);if(R)render();}
  function render(){var f=cv&&fitC(cv);if(!f)return;var c=f.c,w=f.w,h=f.h;c.clearRect(0,0,w,h);
    var t=R?5300:tS,fading=prev>=0&&fadeT<FADE,kp;
    if(fading){var u=fadeT/FADE;GA=1-eo(Math.min(1,u*1.4));c.globalAlpha=GA;DRAW[prev](c,w,h,5300);GA=eo(u);c.globalAlpha=GA;kp=DRAW[cur](c,w,h,t);GA=1;c.globalAlpha=1;}
    else{GA=1;kp=DRAW[cur](c,w,h,t);}
    for(var i=0;i<3;i++){if(kp[i]!==lastKp[i]){var was=lastKp[i];setT(K[i],kp[i]);if(was!==''&&!R&&!/^[\d.]/.test(kp[i]))bump(K[i]);lastKp[i]=kp[i];}}
    logAt(t);}
  var heroOn=loop(function(now){var dt=tLast?Math.min(64,now-tLast):16;tLast=now;
    if(!paused){tS+=dt;if(tabs[cur])tabs[cur].style.setProperty('--p',Math.min(100,tS/DUR*100).toFixed(1)+'%');if(tS>=DUR)setScene(cur+1);}
    if(fadeT<FADE)fadeT+=dt;
    render();});
  if(hero&&cv){
    setScene(0,true);prev=-1;
    tabs.forEach(function(b,i){b.addEventListener('click',function(){setScene(i,true);});});
    if(R){render();addEventListener('resize',render);}
    else{
      var visH=false;XH.whenVisible(hero,function(v){visH=v;tLast=0;heroOn(v&&!d.hidden);});
      d.addEventListener('visibilitychange',function(){tLast=0;heroOn(visH&&!d.hidden);});
      var stg=$id('cfStage');stg.addEventListener('mouseenter',function(){paused=true;});stg.addEventListener('mouseleave',function(){paused=false;tLast=0;});
      stg.addEventListener('focusin',function(){paused=true;});stg.addEventListener('focusout',function(){paused=false;tLast=0;});
      addEventListener('resize',function(){render();});
      var sx=null,sy=null;
      scr.addEventListener('pointerdown',function(e){if(e.pointerType==='touch')return;sx=e.clientX;sy=e.clientY;});
      scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))setScene(cur+(dx<0?1:-1),true);});
      scr.addEventListener('touchstart',function(e){var p=e.touches[0];sx=p.clientX;sy=p.clientY;},{passive:true});
      scr.addEventListener('touchend',function(e){if(sx===null)return;var p=e.changedTouches[0],dx=p.clientX-sx,dy=p.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){setScene(cur+(dx<0?1:-1),true);paused=false;}},{passive:true});
      rail.addEventListener('keydown',function(e){var k=e.key;if(k==='ArrowDown'||k==='ArrowRight'){setScene(cur+1,true);tabs[cur].focus();e.preventDefault();}else if(k==='ArrowUp'||k==='ArrowLeft'){setScene(cur-1,true);tabs[cur].focus();e.preventDefault();}});
    }
  }

  /* ===== magnetic CTAs ===== */
  if(!R&&matchMedia('(hover:hover)').matches){$$('.cf-mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;b.style.transform='translate('+(x*8).toFixed(1)+'px,'+(y*6).toFixed(1)+'px)';});b.addEventListener('mouseleave',function(){b.style.transform='';});});}
  // tap to reveal capability detail on touch
  $$('.cf-f').forEach(function(f){f.addEventListener('click',function(){f.classList.toggle('tap');});});

  /* ===== lower illustration 1 · VM lifecycle ring ===== */
  var life=$id('cfLife'),lifeP=$id('cfLifeP'),lifeD=$id('cfLifeD'),lifeSt=life?$$('.st',life):[],lifeLi=$$('#cfLifeL li');
  var LC=804.2,LSTEP=1700,lT=0,lLast=0;
  function lifeSet(k,frac){lifeSt.forEach(function(g,i){g.classList.toggle('on',i<k);g.classList.toggle('cur',i===k);});lifeLi.forEach(function(li,i){li.classList.toggle('on',i===k);});}
  var lifeK=-1;
  function lifeDraw(t){var tot=LSTEP*5,u=(t%tot)/tot,k=Math.floor(u*5),local=(u*5)-k,move=eio(clamp((local-.55)/.45,0,1)),ang=(k+move)/5*TAU-Math.PI/2,pos=(k+move)/5;
    if(k!==lifeK){lifeK=k;lifeSet(k);}
    if(lifeD){lifeD.setAttribute('cx',(180+128*Math.cos(ang)).toFixed(1));lifeD.setAttribute('cy',(180+128*Math.sin(ang)).toFixed(1));}
    if(lifeP)lifeP.style.strokeDashoffset=(LC*(1-pos)).toFixed(1);}
  if(life){if(R){lifeSt.forEach(function(g){g.classList.add('on');});if(lifeP)lifeP.style.strokeDashoffset='0';lifeLi.forEach(function(li){li.classList.add('on');});}
    else{var lifeOn=loop(function(now){var dt=lLast?Math.min(64,now-lLast):16;lLast=now;lT+=dt;lifeDraw(lT);});whenOn(life,function(v){lLast=0;lifeOn(v);});}}

  /* ===== lower illustration 2 · deployment topology ===== */
  var topo=$id('cfTopo'),tSel=$id('cfTopoSel'),tCap=$id('cfTopoCap');
  var TP=[$id('cfTp0'),$id('cfTp1'),$id('cfTp2')],TK=[$id('cfTk0'),$id('cfTk1'),$id('cfTk2')],TL=TP.map(function(p){return p&&p.getTotalLength?p.getTotalLength():0;});
  var TOPT=[{s:0,p:[[0,-1],[1,1]],cap:'Cloud failover · DR Lite restore to Cloud'},{s:1,p:[[2,-1],[0,1]],cap:'HA across nodes · local DR · cloud failover'},{s:2,p:[[1,1]],cap:'No local failover · recover to Cloud if configured'}];
  var topoK=0,tpT=0,tpLast=0;
  function topoSet(k){topoK=k;var o=TOPT[k];if(topo)$$('.site',topo).forEach(function(g,i){g.classList.toggle('on',i===o.s);g.classList.toggle('dim',i!==o.s);});
    TP.forEach(function(p,i){if(p)p.classList.toggle('on',o.p.some(function(q){return q[0]===i;}));});setT(tCap,o.cap);
    $$('#cfOptTbl [data-c]').forEach(function(td){td.classList.toggle('pick',+td.getAttribute('data-c')===k);});
    if(R)topoDraw(900);}
  function topoDraw(t){var o=TOPT[topoK];TK.forEach(function(k,i){if(!k)return;var q=null;o.p.forEach(function(x){if(x[0]===i)q=x;});if(!q||!TL[i]){k.style.opacity='0';return;}
    var u=((t/1800)+i*.33)%1;if(q[1]<0)u=1-u;var pt=TP[i].getPointAtLength(eio(u)*TL[i]);k.setAttribute('cx',pt.x.toFixed(1));k.setAttribute('cy',pt.y.toFixed(1));k.style.opacity=(1-Math.abs(eio(u)-.5)*1.4).toFixed(2);});}
  if(topo){if(tSel)tSel.addEventListener('change',function(){topoSet(+tSel.dataset.value||0);});topoSet(0);
    if(!R){var topoOn=loop(function(now){var dt=tpLast?Math.min(64,now-tpLast):16;tpLast=now;tpT+=dt;topoDraw(tpT);});whenOn(topo,function(v){tpLast=0;topoOn(v);});}}

  /* ===== story race (CSS transitions, re-run when visible) ===== */
  var race=$id('cfRace');
  if(race){var fast=$$('.cf-lane:not(.b) .cf-rt i',race),slow=$('.cf-lane.b .cf-rt i',race),timers=[];
    function raceRun(){timers.forEach(clearTimeout);timers=[];fast.forEach(function(i){i.style.transition='none';i.style.width='0';});if(slow){slow.style.transition='none';slow.style.width='0';}void race.offsetWidth;
      var full=race.querySelector('.cf-rt').clientWidth-10,one=(full-12)/3;
      if(R){fast.forEach(function(i){i.style.width=one+'px';});if(slow)slow.style.width=one+'px';return;}
      if(slow){slow.style.transition='width 3s linear';slow.style.width=one+'px';}
      fast.forEach(function(i,k){timers.push(setTimeout(function(){i.style.transition='width 1s linear';i.style.width=one+'px';},k*1000));});}
    XH.whenVisible(race,function(v){if(v)raceRun();});}

  /* ===== steps progress line ===== */
  var stepsEl=$id('cfSteps');if(stepsEl)XH.whenVisible(stepsEl,function(v){if(v)stepsEl.style.setProperty('--sp','1');});

  /* ======================================================================
     TOOL · cluster sizer
     ====================================================================== */
  var PROF={s:{c:32,r:256,t:16,n:'32 cores · 256 GB · 16 TB'},m:{c:64,r:512,t:32,n:'64 cores · 512 GB · 32 TB'},l:{c:96,r:1024,t:64,n:'96 cores · 1 TB · 64 TB'}};
  function sizeCluster(vms,cpu,ram,diskGB,rep,prof,oc){var p=PROF[prof]||PROF.m,vcpu=vms*cpu,cores=vcpu/oc,ramT=vms*ram,usable=vms*diskGB/1024,raw=usable*rep/.8;
    var nC=Math.ceil(cores/p.c),nR=Math.ceil(ramT/(p.r*.9)),nS=Math.ceil(raw/p.t),nComp=Math.max(nC,nR)+1,N=Math.max(3,nComp,nS);
    var why=N===3&&nComp<=3&&nS<=3?'minimum of 3 nodes':nS>=nComp?'storage-bound':(nC>=nR?'CPU-bound':'RAM-bound')+' · incl. N+1';
    return {N:N,vcpu:vcpu,cores:cores,ram:ramT,usable:usable,raw:raw,p:p,why:why,cpuU:cores/(N*p.c),ramU:ramT/(N*p.r),stU:raw*.8/(N*p.t)};}
  var zIds=['zVm','zCpu','zRam','zDisk'],zNodes=$id('zNodes'),zShown=0,lastSize=null;
  function fmtTB(v){return v<10?v.toFixed(1):Math.round(v).toLocaleString('en-IN');}
  function sizer(){if(!$id('zVm'))return;var vm=num('zVm',40),cpu=num('zCpu',4),ram=num('zRam',16),dk=num('zDisk',250),rep=+($id('zRep').dataset.value||3),pf=$id('zProf').dataset.value||'m',oc=+($id('zOc').dataset.value||4);
    setT('zVmO',String(vm));setT('zCpuO',String(cpu));setT('zRamO',String(ram));setT('zDiskO',dk.toLocaleString('en-IN'));
    var r=sizeCluster(vm,cpu,ram,dk,rep,pf,oc);lastSize={vm:vm,r:r,rep:rep,pf:pf};
    var nEl=$id('zN');if(nEl&&nEl.textContent!==String(r.N)){nEl.textContent=r.N;XH.flash&&XH.flash(nEl.parentNode);}
    setT('zWhy',r.why);
    var bd=$id('zBadge'),ha2=r.N>=5&&rep===3;if(bd){bd.textContent=ha2?'HA · survives 2 nodes':r.N>=5?'HA · survives 1 node':'HA · survives 1 node · 5+ for production';bd.classList.toggle('w',r.N<5);}
    // node icons (animate only new ones)
    if(zNodes){var show=Math.min(r.N,14);if(show!==zShown||!zNodes.children.length){var h='';for(var i=0;i<show;i++){h+='<span class="cf-node'+(i>=zShown?' in':'')+(i===show-1&&r.N<=14?' ha':'')+'" style="animation-delay:'+((i>=zShown?i-zShown:0)*60)+'ms"><em>'+(i===show-1&&r.N<=14?'N+1':'n'+(i+1))+'</em><s></s><s></s><s></s></span>';}
      if(r.N>14)h+='<span class="cf-more">+'+(r.N-14)+' more</span>';zNodes.innerHTML=h;zShown=show;}}
    function bar(id,v){var e=$id(id),t=$id(id+'t');if(e)e.style.width=Math.min(100,v*100).toFixed(1)+'%';if(t)t.textContent=Math.round(v*100)+'%';}
    bar('zbC',r.cpuU);bar('zbR',r.ramU);bar('zbS',r.stU);
    var L=[['Total vCPU',r.vcpu.toLocaleString('en-IN')+' ('+oc+':1 → '+Math.ceil(r.cores)+' cores)'],['Total RAM',(r.ram>=1024?(r.ram/1024).toFixed(1)+' TB':r.ram+' GB')],['Usable storage',fmtTB(r.usable)+' TB'],['Raw needed',fmtTB(r.raw)+' TB ('+rep+' replicas, 20% free)'],['Node profile',r.p.n]];
    var zl=$id('zList');if(zl)zl.innerHTML=L.map(function(x){return '<li><span>'+x[0]+'</span><b>'+esc(x[1])+'</b></li>';}).join('');
    var cp=$id('zCopy');if(cp)cp.setAttribute('data-copy','Acronis Cyber Frame sizing (XcellHost estimate): '+vm+' VMs, '+cpu+' vCPU / '+ram+' GB RAM / '+dk+' GB disk avg; '+rep+' replicas; node '+r.p.n+'; '+oc+':1 vCPU per core → '+r.N+' nodes ('+r.why+'). Usable '+fmtTB(r.usable)+' TB, raw '+fmtTB(r.raw)+' TB.');
    quote();}
  zIds.forEach(function(i){var e=$id(i);if(e)e.addEventListener('input',sizer);});
  ['zRep','zProf','zOc'].forEach(function(i){var e=$id(i);if(e)e.addEventListener('change',sizer);});
  var zUse=$id('zUse');if(zUse)zUse.addEventListener('click',function(){if(!lastSize)return;var v=$id('qVm'),tb=$id('qTb');if(v)v.value=Math.min(2000,lastSize.vm);if(tb)tb.value=Math.max(1,Math.min(2000,Math.ceil(lastSize.r.usable)));
    var qd=$id('qD');if(qd){var b=$('button[data-v="dc"]',qd);if(b)b.click();}quote();var cf=$id('configure');if(cf)cf.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});XH.toast('Sizing copied into the quotation');});

  /* ======================================================================
     CONFIGURATOR · quotation
     ====================================================================== */
  var SV={as:{n:'Cyber Frame HCI assessment',p:49999,u:'one-time'},on:{n:'Cyber Frame onboarding',p:24999,u:'one-time'}};
  var QQ={mg:'Managed service per workload',mi:'VMware migration',dr:'DR failover capacity'};
  var DN={cloud:'Cloud',dc:'Local · data centre',edge:'Local · edge'};
  var qLast=null,qShown=-1;
  function quote(){var qd=$id('qD');if(!qd)return;var dep=qd.dataset.value||'dc',vm=Math.max(1,Math.round(num('qVm',24))),tb=Math.max(1,num('qTb',10)),on=Math.max(1,Math.round(num('qOn',2)));
    var items=[];$$('#qX input').forEach(function(x){if(!x.checked)return;var s=SV[x.value],q=1;items.push({k:x.value,n:s.n,p:s.p,q:q,u:s.u});});
    var quoted=[];$$('#qQ input').forEach(function(x){if(x.checked)quoted.push(QQ[x.value]);});
    var sub=items.reduce(function(a,b){return a+b.p*b.q;},0),gst=Math.round(sub*.18);
    setT('qName',DN[dep]+' · '+vm+' VMs · '+tb+' TB');
    // nodes hint
    var zc=num('zCpu',4),zr=num('zRam',16),zp=($id('zProf')&&$id('zProf').dataset.value)||'m',zrep=+(($id('zRep')&&$id('zRep').dataset.value)||3),zo=+(($id('zOc')&&$id('zOc').dataset.value)||4);
    var nn=dep==='edge'?1:dep==='cloud'?0:sizeCluster(vm,zc,zr,tb*1024/vm,zrep,zp,zo).N,qn=$id('qNodes');
    if(qn&&nn!==qShown){qn.innerHTML=new Array(Math.min(nn,24)+1).join('<i></i>');qShown=nn;}
    setT('qNodesT',dep==='cloud'?'Cloud: no hardware — capacity runs in an Acronis data centre':dep==='edge'?'Edge: one compatible server at your site, recovery to cloud':'Suggested starting point: '+nn+' nodes ('+zc+' vCPU · '+zr+' GB per VM avg, '+zrep+' replicas — from the sizer)');
    var ql=$id('qList');if(ql)ql.innerHTML=items.map(function(it){return '<li><span>'+esc(it.n)+(it.q>1?' × '+it.q:'')+'</span><b>'+inr(it.p*it.q)+'*</b></li>';}).join('')+quoted.map(function(n){return '<li class="q"><span>'+esc(n)+'</span><b>On quote</b></li>';}).join('')+'<li class="q"><span>Acronis Cyber Frame licences · '+esc(DN[dep])+'</span><b>On quote</b></li>';
    setT('qSub',inr(sub));setT('qGst',inr(gst));setT('qTot',inr(sub+gst));
    qLast={dep:dep,vm:vm,tb:tb,items:items,quoted:quoted,sub:sub};}
  ['qVm','qTb','qOn'].forEach(function(i){var e=$id(i);if(e)e.addEventListener('input',quote);});
  $$('#qX input,#qQ input').forEach(function(e){e.addEventListener('change',quote);});
  var qdEl=$id('qD');if(qdEl)qdEl.addEventListener('change',quote);
  $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){var v=b.getAttribute('data-pick'),qd=$id('qD');if(qd){var x=$('button[data-v="'+v+'"]',qd);if(x)x.click();}var cf=$id('configure');if(cf)cf.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});});});
  var oAdd=$id('oAdd');if(oAdd)oAdd.addEventListener('click',function(){quote();if(!qLast||!qLast.items.length){XH.toast('Tick at least one XcellHost service to add it to the cart');return;}
    qLast.items.forEach(function(it){XH.cart.add({key:'acronis-cyber-frame-'+it.k,name:'Acronis Cyber Frame · '+it.n.replace('Cyber Frame ',''),sub:it.u+' · '+DN[qLast.dep]+' · XcellHost service · indicative, excl. GST',price:it.p,qty:it.q});});});
  var qGo=$id('qGo');if(qGo)qGo.addEventListener('click',function(){if(!qLast)return;setTimeout(function(){var ta=d.querySelector('#xhCallback textarea');if(ta&&!ta.value)ta.value='Cyber Frame '+DN[qLast.dep]+': '+qLast.vm+' VMs, '+qLast.tb+' TB usable. Services: '+(qLast.items.map(function(i){return i.n+(i.q>1?' ×'+i.q:'');}).join(', ')||'none')+(qLast.quoted.length?'. Also quote: '+qLast.quoted.join(', '):'')+'.';},60);});

  /* ======================================================================
     TOOL · 3-year cost compare (illustrative)
     ====================================================================== */
  var tIds=['tVm','tHv','tBk','tSc','tTools','tHr','tRate','tCf'];
  function tco(){if(!$id('tVm'))return;var yrs=+($id('tYrs').dataset.value||3),vm=Math.max(0,num('tVm',40)),hv=Math.max(0,num('tHv',0)),bk=Math.max(0,num('tBk',0)),sc=Math.max(0,num('tSc',0)),tools=Math.max(1,num('tTools',4)),hr=Math.max(0,num('tHr',10)),rate=Math.max(0,num('tRate',1200)),cf=Math.max(0,num('tCf',0));
    var aH=hv*yrs,aB=(bk+sc)*vm*12*yrs,aA=tools*hr*rate*12*yrs,A=aH+aB+aA,bF=cf*vm*12*yrs,bA=1*hr*rate*12*yrs,B=bF+bA,mx=Math.max(A,B,1);
    function stk(id,parts,tot){var col=$id(id);if(!col)return;var s=$('.stk',col);s.style.setProperty('--h',Math.max(4,tot/mx*100).toFixed(1)+'%');$$('s',s).forEach(function(e,i){e.style.setProperty('--s',(tot?parts[i]/tot*100:0).toFixed(1)+'%');e.style.height='var(--s)';});}
    stk('tcA',[aH,aB,aA],A);stk('tcB',[bF,bA],B);
    setT('tcAv',inr(A));setT('tcBv',inr(B));
    var df=A-B,dEl=$id('tcD');setT('tcDv',inr(Math.abs(df)));setT('tcDt',(df>=0?'lower with Cyber Frame':'higher with Cyber Frame')+' over '+yrs+(yrs>1?' years':' year')+' · illustrative');if(dEl)dEl.classList.toggle('neg',df<0);setT('tcH',yrs+'-year view · illustrative');}
  tIds.forEach(function(i){var e=$id(i);if(e)e.addEventListener('input',tco);});
  var ty=$id('tYrs');if(ty)ty.addEventListener('change',tco);

  sizer();quote();tco();
})();

