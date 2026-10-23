
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
  function segPick(el,v){if(!el)return;$$('button',el).forEach(function(b){var on=b.getAttribute('data-v')===v;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});el.dataset.value=v;}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function txt(c,s,x,y,font,col,al){c.font=font;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  function clip(c,s,maxW){if(c.measureText(s).width<=maxW)return s;while(s.length>2&&c.measureText(s+'…').width>maxW)s=s.slice(0,-1);return s+'…';}
  function fitC(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function pill(c,s,x,y,font,bg,fg,al){c.font=font;var w=c.measureText(s).width+12,h=17,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,8.5);c.fillStyle=bg;c.fill();txt(c,s,x0+6,y+.5,font,fg);return w;}
  function bz(a,b,cc,dd,u){var v=1-u;return v*v*v*a+3*v*v*u*b+3*v*u*u*cc+u*u*u*dd;}
  var BL='#0066FF',OR='#FF8A00',NV='#0B132B',GR='#16a34a',RD='#c0392b';
  function th(){return dark()?{ink:'#EAF1FF',mut:'#93A4C4',line:'rgba(255,255,255,.16)',soft:'rgba(255,255,255,.07)',surf:'#13224A',bl:'#5C9DFF',ot:'#FFB15C',gr:'#5FE08D',rd:'#FF8A80',lb:'rgba(92,157,255,.45)',dot:'rgba(255,255,255,.07)',nv:'#22345F'}:{ink:NV,mut:'#55617A',line:'rgba(11,19,43,.16)',soft:'rgba(11,19,43,.05)',surf:'#ffffff',bl:BL,ot:'#C46A00',gr:GR,rd:RD,lb:'rgba(0,102,255,.30)',dot:'rgba(11,19,43,.08)',nv:NV};}
  function stamp(c,s,x,y,t0,t,col,fs){if(t<t0)return;var u=spring((t-t0)/600),k=lerp(1.7,1,clamp(u,0,1.2));c.save();c.translate(x,y);c.rotate(-.035);c.scale(k,k);c.globalAlpha=clamp((t-t0)/180,0,1);var f='800 '+fs+'px "IBM Plex Mono"';c.font=f;var w=c.measureText(s).width+18;rr(c,-w/2,-12,w,24,5);c.fillStyle=dark()?'rgba(10,20,44,.94)':'rgba(255,255,255,.96)';c.fill();c.strokeStyle=col;c.lineWidth=2;c.stroke();txt(c,s,0,1,f,col,'center');c.restore();c.globalAlpha=1;}
  function tick(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2;c.lineCap='round';c.beginPath();c.moveTo(x-s*.45,y);c.lineTo(x-s*.1,y+s*.35);c.lineTo(x+s*.5,y-s*.35);c.stroke();c.lineCap='butt';}
  function grid(c,w,h,T){c.fillStyle=T.dot;for(var x=9;x<w;x+=18)for(var y=9;y<h;y+=18)c.fillRect(x,y,1.6,1.6);}

  /* ===== one shared rAF ticker ===== */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function onIn(el,fn){if(!el)return;if(R||!('IntersectionObserver' in window)){fn();return;}var io=new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){fn();io.disconnect();}});},{threshold:.18});io.observe(el);}
  function vis(el,on){if(!el)return;XH.whenVisible(el,function(v){el._v=v;on(v&&!d.hidden);});d.addEventListener('visibilitychange',function(){on(!!el._v&&!d.hidden);});}

  /* ======================================================================
     Workflow node graph primitives (builder canvas look)
     ====================================================================== */
  var KN={t:'TRIGGER',c:'CONDITION',a:'ACTION'};
  /* state: 0 idle · 1 running · 2 done ; p = optional progress 0..1 */
  function node(c,r,k,lab,sub,st,T,nar,p,appear){
    var a=appear===undefined?1:appear;if(a<=0)return;var bi=lab.indexOf('|');if(bi>=0)lab=nar?lab.slice(bi+1):lab.slice(0,bi);c.save();c.globalAlpha=a;
    var x=r.x,y=r.y,w=r.w,h=r.h,col=k==='t'?T.bl:k==='c'?OR:(st===2?T.gr:T.bl);
    if(st===1){c.shadowColor='rgba(255,138,0,.55)';c.shadowBlur=14;}
    rr(c,x,y,w,h,9);c.fillStyle=T.surf;c.fill();c.shadowBlur=0;
    c.strokeStyle=st===1?OR:st===2?T.gr:T.line;c.lineWidth=st?2:1.2;c.stroke();
    rr(c,x,y,5,h,2.5);c.fillStyle=col;c.fill();
    var fs=nar?7.5:8.5;txt(c,KN[k],x+12,y+11,'800 '+(fs-.5)+'px "IBM Plex Mono"',k==='t'?T.bl:k==='c'?T.ot:(st===2?T.gr:T.mut));
    c.font='700 '+(nar?10:11.5)+'px Sora';txt(c,clip(c,lab,w-(st===2?34:18)),x+12,y+h/2+2,'700 '+(nar?10:11.5)+'px Sora',T.ink);
    if(sub){c.font='500 '+fs+'px "IBM Plex Mono"';txt(c,clip(c,sub,w-20),x+12,y+h-10,'500 '+fs+'px "IBM Plex Mono"',T.mut);}
    if(st===2){c.beginPath();c.arc(x+w-14,y+13,8,0,TAU);c.fillStyle=T.gr;c.fill();tick(c,x+w-14,y+13,8,'#fff');}
    else if(st===1){var sp=(performance.now()/160)%TAU;c.strokeStyle=OR;c.lineWidth=2;c.beginPath();c.arc(x+w-14,y+13,6,sp,sp+4);c.stroke();}
    if(p!==undefined&&p>0){rr(c,x+12,y+h-5,w-24,3,1.5);c.fillStyle=T.soft;c.fill();rr(c,x+12,y+h-5,(w-24)*clamp(p,0,1),3,1.5);c.fillStyle=p>=1?T.gr:OR;c.fill();}
    c.restore();}
  function anchor(r,side){return side==='r'?[r.x+r.w,r.y+r.h/2]:side==='l'?[r.x,r.y+r.h/2]:side==='b'?[r.x+r.w/2,r.y+r.h]:[r.x+r.w/2,r.y];}
  /* edge with dashed base + filled progress + travelling token */
  function edge(c,a,b,p,T,vert,col){var x1=a[0],y1=a[1],x2=b[0],y2=b[1],c1x,c1y,c2x,c2y;
    if(vert){c1x=x1;c1y=lerp(y1,y2,.5);c2x=x2;c2y=lerp(y1,y2,.5);}else{var m=(x2-x1)*.5;c1x=x1+m;c1y=y1;c2x=x2-m;c2y=y2;}
    c.strokeStyle=T.line;c.lineWidth=1.6;c.setLineDash([4,4]);c.beginPath();c.moveTo(x1,y1);c.bezierCurveTo(c1x,c1y,c2x,c2y,x2,y2);c.stroke();c.setLineDash([]);
    if(p<=0)return;var n=24,e=Math.round(n*clamp(p,0,1));c.strokeStyle=col||T.bl;c.lineWidth=2.2;c.beginPath();
    for(var i=0;i<=e;i++){var u=i/n,px=bz(x1,c1x,c2x,x2,u),py=bz(y1,c1y,c2y,y2,u);if(i)c.lineTo(px,py);else c.moveTo(px,py);}c.stroke();
    if(p<1){var u2=clamp(p,0,1),tx=bz(x1,c1x,c2x,x2,u2),ty=bz(y1,c1y,c2y,y2,u2);c.beginPath();c.arc(tx,ty,4.5,0,TAU);c.fillStyle=OR;c.fill();c.beginPath();c.arc(tx,ty,8,0,TAU);c.fillStyle='rgba(255,138,0,.22)';c.fill();}
    else{c.beginPath();c.arc(x2,y2,3,0,TAU);c.fillStyle=col||T.bl;c.fill();}}
  function tokenOn(c,a,b,u,col,vert,rad){var x1=a[0],y1=a[1],x2=b[0],y2=b[1],c1x,c1y,c2x,c2y;if(vert){c1x=x1;c1y=lerp(y1,y2,.5);c2x=x2;c2y=lerp(y1,y2,.5);}else{var m=(x2-x1)*.5;c1x=x1+m;c1y=y1;c2x=x2-m;c2y=y2;}
    var tx=bz(x1,c1x,c2x,x2,u),ty=bz(y1,c1y,c2y,y2,u);c.beginPath();c.arc(tx,ty,rad||4,0,TAU);c.fillStyle=col;c.fill();return [tx,ty];}
  /* 3 × 3 grid layout */
  function lay(w,h){var nar=w<420,pad=nar?8:14,gap=nar?18:28,top=46,bot=h-34,cols=3,rows=3,nw=(w-pad*2-gap*(cols-1))/cols,nh=nar?46:52,vg=(bot-top-nh*rows)/(rows-1);
    return {nar:nar,nw:nw,nh:nh,at:function(cx,ry){return {x:pad+cx*(nw+gap),y:top+ry*(nh+vg),w:nw,h:nh};}};}
  function st(t,a,b){return t<a?0:t<b?1:2;}
  function ap(t,a){return eo(seg(a-260,a,t));}

  /* ======================================================================
     HERO · five workflow scenes on one canvas (sample data)
     ====================================================================== */
  var DUR=5500,FADE=450;
  var SC=[
    {cap:'Tenant created → users, roles, welcome mail',ph:'Running',ft:'RUN LOG · ONBOARDING',L:['Steps run','Clicks avoided','Run time'],
     lg:[[300,'10:02','trigger · tenant "Client-07" created','start',''],[1300,'10:02','condition · type = customer · pass','pass','g'],[2500,'10:02','3 users created · roles assigned','ok','g'],[3900,'10:03','welcome email sent to admin','✓','g']]},
    {cap:'Device registered → plan, backup, patch, scan',ph:'Protecting',ft:'RUN LOG · NEW DEVICE',L:['Steps run','First backup','Patches applied'],
     lg:[[300,'11:40','trigger · LAPTOP-114 registered','start',''],[1100,'11:40','protection plan "Workstations" applied','ok','g'],[2600,'11:44','first backup · patch run started','run','w'],[4100,'11:52','malware scan clean · device protected','✓','g']]},
    {cap:'Alert created → dismiss low, escalate high',ph:'Filtering',ft:'RUN LOG · ALERT NOISE',L:['Alerts in','Dismissed','Escalated'],
     lg:[[400,'09:00','14 alerts in 10 min · 6 tenants','in',''],[1500,'09:01','severity low · auto-dismissed','skip','g'],[2600,'09:04','backup failed · SRV-02 · high','alert','r'],[3700,'09:04','escalated · technician notified','✓','g']]},
    {cap:'EDR incident → isolate, scan, notify SOC',ph:'Containing',ft:'RUN LOG · EDR INCIDENT',L:['Device','Files quarantined','SOC review'],
     lg:[[300,'02:17','EDR incident INC-2291 updated · critical','alert','r'],[1300,'02:17','FIN-PC-07 isolated from network','block','r'],[2500,'02:18','malware scan · 3 files quarantined','ok','g'],[3700,'02:18','XcellHost SOC & customer notified','✓','g']]},
    {cap:'Publish v3 once → 12 tenants updated',ph:'Propagating',ft:'RUN LOG · PROPAGATION',L:['Tenants on v3','Per-tenant edits','Overrides kept'],
     lg:[[300,'16:30','workflow "Device protection" v3 saved','save',''],[1200,'16:30','propagation started · 12 tenants','push','w'],[3300,'16:31','11 tenants updated · 1 override kept','ok','g'],[4300,'16:31','v3 live on 12 / 12 tenants','✓','g']]}
  ];

  /* scene 0 · onboarding */
  function s0(c,w,h,t){var T=th(),L=lay(w,h),nar=L.nar;grid(c,w,h,T);
    var R0=L.at(0,1),RC=L.at(1,1),A=[L.at(2,0),L.at(2,1),L.at(2,2)];
    edge(c,anchor(R0,'r'),anchor(RC,'l'),eio(seg(800,1200,t)),T);
    edge(c,anchor(RC,'r'),anchor(A[0],'l'),eio(seg(1500,1900,t)),T);
    edge(c,anchor(A[0],'b'),anchor(A[1],'t'),eio(seg(2400,2700,t)),T,true);
    edge(c,anchor(A[1],'b'),anchor(A[2],'t'),eio(seg(3100,3400,t)),T,true);
    node(c,R0,'t','Tenant created|New tenant','Client-07 · sample',st(t,300,800),T,nar,undefined,ap(t,300));
    node(c,RC,'c','Type = customer|Customer?','role: company',st(t,1200,1500),T,nar,undefined,ap(t,1200));
    node(c,A[0],'a','Create users|Add users','3 users',st(t,1900,2400),T,nar,undefined,ap(t,1900));
    node(c,A[1],'a','Assign roles|Set roles','admin · user',st(t,2700,3100),T,nar,undefined,ap(t,2700));
    node(c,A[2],'a','Send welcome email|Welcome mail','to customer admin',st(t,3400,3900),T,nar,undefined,ap(t,3400));
    // users popping beside "create users"
    for(var i=0;i<3;i++){var pu=spring((t-1950-i*130)/420);if(pu<=0)continue;var ux=A[0].x-14-i*15,uy=A[0].y+A[0].h/2-14,s=clamp(pu,0,1.15)*6;c.beginPath();c.arc(ux,uy,s,0,TAU);c.fillStyle=i===1?OR:T.bl;c.fill();c.beginPath();c.arc(ux,uy+s*1.9,s*1.3,Math.PI,0);c.fill();}
    // envelope flying out
    if(t>3600&&t<4500){var u=eio(seg(3600,4400,t)),ex=lerp(A[2].x+20,R0.x+R0.w*.5,u),ey=lerp(A[2].y+A[2].h/2,R0.y+R0.h+30,u)-Math.sin(u*Math.PI)*30;c.globalAlpha=1-seg(4300,4500,t);rr(c,ex-9,ey-6,18,12,2);c.fillStyle=OR;c.fill();c.strokeStyle='#fff';c.lineWidth=1.3;c.beginPath();c.moveTo(ex-9,ey-6);c.lineTo(ex,ey+1);c.lineTo(ex+9,ey-6);c.stroke();c.globalAlpha=1;}
    if(t>4100)stamp(c,nar?'ONBOARDED · 1 RUN':'CUSTOMER ONBOARDED · ONE RUN',w/2,h-16,4100,t,T.gr,nar?8.5:9.5);
    var n=(t>800)+(t>1500)+(t>2400)+(t>3100)+(t>3900),sec=Math.round(38*eo(seg(300,3900,t)));
    return [n+' / 5',String(Math.round(42*eo(seg(300,3900,t)))),'0:'+(sec<10?'0':'')+sec,''];}

  /* scene 1 · device registered */
  function s1(c,w,h,t){var T=th(),L=lay(w,h),nar=L.nar;grid(c,w,h,T);
    var R0=L.at(0,1),A1=L.at(1,1),A=[L.at(2,0),L.at(2,1),L.at(2,2)];
    // laptop sliding in above trigger
    var la=eo(seg(0,500,t)),lx=R0.x+R0.w/2,ly=R0.y-32+(1-la)*-20;c.globalAlpha=la;rr(c,lx-22,ly-14,44,26,3);c.fillStyle=T.nv;c.fill();rr(c,lx-18,ly-10,36,18,2);c.fillStyle=t>4100?'#0b3a22':'#05091A';c.fill();rr(c,lx-27,ly+12,54,4,2);c.fillStyle=T.nv;c.fill();
    if(t>1100){c.beginPath();c.arc(lx,ly-1,6,0,TAU);c.fillStyle=t>4100?GR:BL;c.fill();tick(c,lx,ly-1,6,'#fff');}c.globalAlpha=1;
    edge(c,anchor(R0,'r'),anchor(A1,'l'),eio(seg(600,1000,t)),T);
    edge(c,anchor(A1,'r'),anchor(A[0],'l'),eio(seg(1300,1700,t)),T);
    edge(c,anchor(A[0],'b'),anchor(A[1],'t'),eio(seg(2000,2300,t)),T,true);
    edge(c,anchor(A[1],'b'),anchor(A[2],'t'),eio(seg(3300,3600,t)),T,true);
    var bp=eio(seg(1700,3700,t)),pp=eio(seg(2300,3300,t)),sp=eio(seg(3600,4100,t));
    node(c,R0,'t','Device registered|New device','LAPTOP-114 · sample',st(t,300,600),T,nar,undefined,ap(t,300));
    node(c,A1,'a','Apply protection plan|Apply plan','"Workstations"',st(t,1000,1300),T,nar,undefined,ap(t,1000));
    node(c,A[0],'a','Start first backup|Backup',nar?'':'to India cloud',bp>=1?2:t>1700?1:0,T,nar,bp,ap(t,1700));
    node(c,A[1],'a','Run patch management|Patch',nar?'':'7 updates',pp>=1?2:t>2300?1:0,T,nar,pp,ap(t,2300));
    node(c,A[2],'a','Run malware scan|Scan',nar?'':'full scan',sp>=1?2:t>3600?1:0,T,nar,sp,ap(t,3600));
    if(t>4200)stamp(c,nar?'PROTECTED ON DAY 0':'PROTECTED ON DAY 0 · NO TICKET RAISED',w/2,h-16,4200,t,T.gr,nar?8.5:9.5);
    var n=(t>600)+(t>1300)+(bp>=1)+(pp>=1)+(sp>=1);
    return [n+' / 5',Math.round(bp*100)+'%',Math.round(pp*7)+' / 7',bp>0&&sp<1?'wr':''];}

  /* scene 2 · alert noise */
  var AL=[[200,0],[520,0],[840,1],[1120,0],[1400,0],[1700,0],[1980,2],[2260,0],[2540,0],[2820,0],[3080,0],[3340,1],[3600,0],[3860,0]];
  function s2(c,w,h,t){var T=th(),L=lay(w,h),nar=L.nar;grid(c,w,h,T);
    var R0=L.at(0,1),RC=L.at(1,1),AE=L.at(2,0),AD=L.at(2,2);
    var aR=anchor(R0,'r'),cL=anchor(RC,'l'),cR=[RC.x+RC.w,RC.y+RC.h/2];
    edge(c,aR,cL,1,T);edge(c,[RC.x+RC.w*.6,RC.y],anchor(AE,'l'),1,T,false,RD);edge(c,[RC.x+RC.w*.6,RC.y+RC.h],anchor(AD,'l'),1,T,false,T.mut);
    txt(c,'yes',RC.x+RC.w*.6+10,RC.y-10,'800 8.5px "IBM Plex Mono"',T.rd);txt(c,'no',RC.x+RC.w*.6+10,RC.y+RC.h+10,'800 8.5px "IBM Plex Mono"',T.mut);
    var inC=0,dis=0,esc2=0,hot=false;
    for(var i=0;i<AL.length;i++){var a=AL[i],t0=a[0],sev=a[1],u0=seg(t0-500,t0,t),u1=seg(t0,t0+420,t),u2=seg(t0+420,t0+1000,t);if(t<t0-500)continue;
      var col=sev===2?RD:sev===1?OR:T.lb;
      if(u0<1){var sx=lerp(-12,R0.x+10,eo(u0)),sy=R0.y+R0.h/2+((i*37)%30)-15;rr(c,sx-10,sy-5,20,10,3);c.fillStyle=col;c.fill();continue;}
      inC++;
      if(u1<1){tokenOn(c,aR,cL,eio(u1),col,false,4);continue;}
      if(sev===2){esc2++;if(u2<1){tokenOn(c,[RC.x+RC.w*.6,RC.y],anchor(AE,'l'),eio(u2),RD,false,4.5);hot=true;}}
      else{dis++;if(u2<1)tokenOn(c,[RC.x+RC.w*.6,RC.y+RC.h],anchor(AD,'l'),eio(u2),T.mut,false,3.5);}}
    node(c,R0,'t','Alert created|New alert','6 tenants · sample',inC?2:1,T,nar);
    node(c,RC,'c','Severity ≥ high?|High?','else dismiss',t>700?(t%900<450?1:2):1,T,nar);
    node(c,AE,'a','Escalate · notify tech|Escalate',esc2?esc2+' escalated':'waiting',esc2?2:0,T,nar);
    node(c,AD,'a','Dismiss alert|Dismiss',dis+' dismissed',dis?2:0,T,nar);
    // noise meter in free cell
    var M=L.at(2,1),f=clamp(dis/12,0,1);txt(c,'NOISE CUT',M.x+4,M.y+M.h/2-8,'800 '+(nar?7.5:8.5)+'px "IBM Plex Mono"',T.mut);
    rr(c,M.x+4,M.y+M.h/2+2,M.w-8,8,4);c.fillStyle=T.soft;c.fill();rr(c,M.x+4,M.y+M.h/2+2,(M.w-8)*f,8,4);c.fillStyle=T.gr;c.fill();
    txt(c,Math.round(f*86)+'%',M.x+M.w-4,M.y+M.h/2-8,'800 '+(nar?8:9)+'px "IBM Plex Mono"',T.gr,'right');
    if(t>4300)stamp(c,nar?'ONLY 2 OF 14 NEED A PERSON':'ONLY 2 OF 14 ALERTS NEED A PERSON',w/2,h-16,4300,t,T.gr,nar?8.5:9.5);
    return [String(inC),String(dis),String(esc2),hot?'al':''];}

  /* scene 3 · EDR incident */
  function s3(c,w,h,t){var T=th(),L=lay(w,h),nar=L.nar;grid(c,w,h,T);
    var R0=L.at(0,1),RC=L.at(1,1),A=[L.at(2,0),L.at(2,1),L.at(2,2)],iso=t>1300;
    // device with network link being cut (top-left cell)
    var D=L.at(0,0),dx=D.x+18,dy=D.y+D.h/2;rr(c,dx-14,dy-11,28,19,3);c.fillStyle=T.nv;c.fill();rr(c,dx-11,dy-8,22,13,2);c.fillStyle=iso?'#3a0f12':'#05091A';c.fill();
    txt(c,'FIN-PC-07',dx+20,dy-5,'700 '+(nar?7.5:8.5)+'px "IBM Plex Mono"',T.ink);
    var nx=D.x+D.w-10;c.strokeStyle=iso?T.rd:T.bl;c.lineWidth=2;c.setLineDash(iso?[3,4]:[]);c.beginPath();c.moveTo(dx+16,dy+6);c.lineTo(nx,dy+6);c.stroke();c.setLineDash([]);
    if(iso){var k=spring((t-1300)/450);pill(c,'ISOLATED',dx+20,dy+16,'800 '+(nar?7:8)+'px "IBM Plex Mono"',RD,'#fff');c.save();c.translate((dx+16+nx)/2,dy+6);c.scale(k,k);c.strokeStyle=T.rd;c.lineWidth=2.4;c.beginPath();c.moveTo(-5,-5);c.lineTo(5,5);c.moveTo(5,-5);c.lineTo(-5,5);c.stroke();c.restore();}
    else{var pu=(t/400)%1;c.beginPath();c.arc(lerp(dx+16,nx,pu),dy+6,3,0,TAU);c.fillStyle=RD;c.fill();}
    edge(c,anchor(R0,'r'),anchor(RC,'l'),eio(seg(500,850,t)),T,false,RD);
    edge(c,anchor(RC,'r'),anchor(A[0],'l'),eio(seg(950,1250,t)),T,false,RD);
    edge(c,anchor(A[0],'b'),anchor(A[1],'t'),eio(seg(1600,1900,t)),T,true);
    edge(c,anchor(A[1],'b'),anchor(A[2],'t'),eio(seg(2800,3100,t)),T,true);
    var sp=eio(seg(1900,2800,t));
    node(c,R0,'t','EDR incident updated|EDR incident','INC-2291 · sample',st(t,150,500),T,nar,undefined,ap(t,150));
    node(c,RC,'c','Severity = critical?|Critical?','yes → contain',st(t,850,950),T,nar,undefined,ap(t,850));
    node(c,A[0],'a','Isolate device|Isolate','network cut',st(t,1250,1600),T,nar,undefined,ap(t,1250));
    node(c,A[1],'a','Scan · quarantine files|Quarantine',nar?'':'malware scan',sp>=1?2:t>1900?1:0,T,nar,sp,ap(t,1900));
    node(c,A[2],'a','Notify SOC & customer|Notify SOC',nar?'':'email · NOC queue',st(t,3100,3500),T,nar,undefined,ap(t,3100));
    // SOC SLA timer (bottom-left free cell)
    var S=L.at(0,2),sec=Math.round(lerp(0,192,seg(3100,4400,t))),run=t>3100&&t<4400,mm=Math.floor(sec/60),ss=sec%60;
    if(t>3100){c.globalAlpha=eo(seg(3100,3400,t));rr(c,S.x,S.y,S.w,S.h,9);c.fillStyle=dark()?'#0F1C3D':'#EAF2FF';c.fill();c.strokeStyle=run?OR:T.gr;c.lineWidth=1.6;c.stroke();
      txt(c,nar?'SOC REVIEW':'XCELLHOST SOC REVIEW',S.x+10,S.y+12,'800 '+(nar?7:8)+'px "IBM Plex Mono"',T.mut);
      txt(c,'0'+mm+':'+(ss<10?'0':'')+ss,S.x+10,S.y+S.h/2+6,'800 '+(nar?14:17)+'px Sora',run?T.ot:T.gr);
      if(!nar)txt(c,'target 15 min',S.x+S.w-8,S.y+S.h/2+7,'600 '+(nar?7:8)+'px "IBM Plex Mono"',T.mut,'right');c.globalAlpha=1;}
    if(t>4500)stamp(c,nar?'CONTAINED IN ONE RUN':'CONTAINED BEFORE ANYONE OPENED A TICKET',w/2,h-16,4500,t,T.gr,nar?8.5:9.5);
    return [iso?'Isolated':'Online',String(Math.round(sp*3)),t>3100?'0'+mm+':'+(ss<10?'0':'')+ss:'—',!iso&&t>150?'al':sp<1&&iso?'wr':''];}

  /* scene 4 · propagation */
  var TN=['Client-01','Client-02','Client-03','Client-04','Client-05','Client-06','Client-07','Client-08','Client-09','Client-10','Client-11','Client-12'];
  function s4(c,w,h,t){var T=th(),nar=w<420,top=46,bot=h-34,pad=nar?8:14;grid(c,w,h,T);
    var mw=nar?w*.34:w*.3,mh=bot-top,mx=pad,my=top;
    rr(c,mx,my,mw,mh,12);c.fillStyle=T.surf;c.fill();c.strokeStyle=t>900?OR:T.bl;c.lineWidth=2;c.stroke();rr(c,mx,my,mw,5,2.5);c.fillStyle=OR;c.fill();
    txt(c,'MASTER',mx+10,my+16,'800 '+(nar?7.5:8.5)+'px "IBM Plex Mono"',T.ot);
    c.font='700 '+(nar?10:12)+'px Sora';txt(c,clip(c,'Device protection',mw-20),mx+10,my+33,'700 '+(nar?10:12)+'px Sora',T.ink);
    var vv=t>700?'v3':'v2',vk=spring((t-700)/500);c.save();c.translate(mx+mw-22,my+16);if(t>700)c.scale(clamp(vk,0,1.2)*.3+.7,clamp(vk,0,1.2)*.3+.7);pill(c,vv,0,0,'800 9px "IBM Plex Mono"',t>700?OR:T.mut,'#fff','center');c.restore();
    var steps=['Device registered','Apply plan','First backup','Patch run'];for(var i=0;i<steps.length;i++){var yy=my+52+i*(nar?24:28);rr(c,mx+8,yy,mw-16,nar?18:21,5);c.fillStyle=T.soft;c.fill();c.font='600 '+(nar?7.5:8.5)+'px "IBM Plex Mono"';txt(c,clip(c,steps[i],mw-30),mx+14,yy+(nar?9:10.5),'600 '+(nar?7.5:8.5)+'px "IBM Plex Mono"',i===3&&t>700?T.ot:T.mut);}
    if(t>700){var ch=eo(seg(700,1000,t));pill(c,nar?'+ retention':'+ edited: patch window',mx+8,my+mh-14,'700 '+(nar?7:8)+'px "IBM Plex Mono"',OR,'#fff');}
    // tenants 4 × 3
    var gx=mx+mw+(nar?14:26),gw=w-gx-pad,cols=nar?3:4,rows=nar?4:3,gp=nar?5:8,tw=(gw-gp*(cols-1))/cols,thh=(mh-gp*(rows-1))/rows,on=0;
    for(var j=0;j<12;j++){var cx=gx+(j%cols)*(tw+gp),cy=my+Math.floor(j/cols)*(thh+gp),tj=1300+j*230,up=t>tj,ov=j===6,u=seg(tj-260,tj,t);
      if(t>1000&&u>0&&u<1){c.strokeStyle='rgba(255,138,0,.55)';c.lineWidth=1.4;c.beginPath();c.moveTo(mx+mw,my+mh/2);c.quadraticCurveTo(lerp(mx+mw,cx,.5),cy+thh/2-20,cx,cy+thh/2);c.stroke();var px=bz(mx+mw,lerp(mx+mw,cx,.5),lerp(mx+mw,cx,.5),cx,u),py=bz(my+mh/2,cy+thh/2-20,cy+thh/2-20,cy+thh/2,u);c.beginPath();c.arc(px,py,3.5,0,TAU);c.fillStyle=OR;c.fill();}
      var k2=up?spring((t-tj)/450):0,sc=up?1+(1-clamp(k2,0,1))*.12:1;c.save();c.translate(cx+tw/2,cy+thh/2);c.scale(sc,sc);c.translate(-tw/2,-thh/2);
      rr(c,0,0,tw,thh,8);c.fillStyle=T.surf;c.fill();c.strokeStyle=up?(ov?OR:T.bl):T.line;c.lineWidth=up?1.8:1.1;c.stroke();
      c.font='600 '+(nar?7:8)+'px "IBM Plex Mono"';txt(c,clip(c,TN[j],tw-10),6,thh/2-7,'600 '+(nar?7:8)+'px "IBM Plex Mono"',T.mut);
      c.beginPath();c.arc(9,thh/2+8,3.5,0,TAU);c.fillStyle=up?T.gr:T.line;c.fill();txt(c,up?'v3':'v2',16,thh/2+8,'800 '+(nar?8:9.5)+'px "IBM Plex Mono"',up?T.bl:T.mut);
      if(ov&&up&&tw>78)txt(c,'override',tw-5,thh/2+8,'700 '+(nar?6.5:7.5)+'px "IBM Plex Mono"',T.ot,'right');
      c.restore();if(up)on++;}
    if(t>4300)stamp(c,nar?'1 EDIT · 12 TENANTS':'ONE EDIT · 12 TENANTS · OVERRIDE KEPT',w/2,h-16,4300,t,T.gr,nar?8.5:9.5);
    return [on+' / 12',t>700?'1 (not 12)':'—',on>6?'1':'0',on>0&&on<12?'wr':''];}
  var DRAW=[s0,s1,s2,s3,s4];

  var hero=$id('waHero'),win=$id('waWin'),cv=$id('waCv'),scr=$id('waScr'),tabBox=$id('waTabs');
  var tabs=tabBox?$$('button',tabBox):[],logEl=$id('waLog'),dots=$$('#waDots i');
  var K=[$id('waK0'),$id('waK1'),$id('waK2')],LB=[$id('waL0'),$id('waL1'),$id('waL2')],KG=[$id('waG0'),$id('waG1'),$id('waG2')];
  var cur=0,prev=-1,tS=0,tLast=0,fadeT=FADE,paused=false,lastKp=['','',''],lastSt='';
  function buildLog(k){if(!logEl)return;logEl.innerHTML=SC[k].lg.map(function(e){return '<li class="'+e[4]+'"><b>'+e[1]+'</b><span>'+esc(e[2])+'</span><em>'+esc(e[3])+'</em></li>';}).join('');}
  function logAt(t){if(!logEl)return;var lg=SC[cur].lg,li=logEl.children;for(var i=0;i<lg.length;i++){var on=R||t>=lg[i][0];if(li[i]&&li[i].classList.contains('in')!==on)li[i].classList.toggle('in',on);}}
  function setScene(k,user){k=(k+5)%5;if(k===cur&&!user)return;prev=cur;cur=k;tS=0;fadeT=R?FADE:0;
    tabs.forEach(function(b,i){var on=i===cur;b.classList.toggle('on',on);b.setAttribute('aria-selected',on);b.style.setProperty('--p','0%');});
    dots.forEach(function(x,i){x.classList.toggle('on',i===cur);});
    var S=SC[cur];setT('waCapN','0'+(cur+1));setT('waCapT',S.cap);setT('waPh',S.ph);setT('waLt',S.ft);
    for(var i=0;i<3;i++){setT(LB[i],S.L[i]);lastKp[i]='';}buildLog(cur);if(R)render();}
  function render(){var f=cv&&fitC(cv);if(!f)return;var c=f.c,w=f.w,h=f.h;c.clearRect(0,0,w,h);
    var t=R?5200:tS,fading=prev>=0&&fadeT<FADE;
    if(fading){var u=fadeT/FADE;c.globalAlpha=1-eo(Math.min(1,u*1.4));c.save();DRAW[prev](c,w,h,5200);c.restore();c.globalAlpha=1;c.save();c.globalAlpha=eo(u);}
    var kp=DRAW[cur](c,w,h,t);if(fading)c.restore();c.globalAlpha=1;
    for(var i=0;i<3;i++){if(kp[i]!==lastKp[i]){var was=lastKp[i];setT(K[i],kp[i]);if(was!==''&&!R&&!/\d/.test(kp[i]))bump(K[i]);lastKp[i]=kp[i];}}
    if(kp[3]!==lastSt){win.classList.toggle('al',kp[3]==='al');win.classList.toggle('wr',kp[3]==='wr');lastSt=kp[3];}
    var pc2=R?1:clamp(t/(DUR*.82),0,1);for(var j=0;j<3;j++){var v=(100.5*(1-clamp(pc2*(1.12-j*.1),0,1))).toFixed(1);if(KG[j]&&KG[j].style.strokeDashoffset!==v)KG[j].style.strokeDashoffset=v;}
    logAt(t);}
  var heroOn=loop(function(now){var dt=tLast?Math.min(64,now-tLast):16;tLast=now;
    if(!paused){tS+=dt;if(tabs[cur])tabs[cur].style.setProperty('--p',Math.min(100,tS/DUR*100).toFixed(1)+'%');if(tS>=DUR)setScene(cur+1);}
    if(fadeT<FADE)fadeT+=dt;
    render();});
  if(hero&&cv){
    buildLog(0);
    tabs.forEach(function(b,i){b.addEventListener('click',function(){setScene(i,true);if(R)render();});});
    if(R){render();addEventListener('resize',render);}
    else{
      var visH=false;XH.whenVisible(hero,function(v){visH=v;tLast=0;heroOn(v&&!d.hidden);});
      d.addEventListener('visibilitychange',function(){tLast=0;heroOn(visH&&!d.hidden);});
      var stg=$id('waStage');stg.addEventListener('mouseenter',function(){paused=true;});stg.addEventListener('mouseleave',function(){paused=false;tLast=0;});
      stg.addEventListener('focusin',function(){paused=true;});stg.addEventListener('focusout',function(){paused=false;tLast=0;});
      addEventListener('resize',function(){render();});
      var sx=null,sy=null;
      scr.addEventListener('pointerdown',function(e){if(e.pointerType==='touch')return;sx=e.clientX;sy=e.clientY;});
      scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))setScene(cur+(dx<0?1:-1),true);});
      scr.addEventListener('touchstart',function(e){var p=e.touches[0];sx=p.clientX;sy=p.clientY;},{passive:true});
      scr.addEventListener('touchend',function(e){if(sx===null)return;var p=e.changedTouches[0],dx=p.clientX-sx,dy=p.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){setScene(cur+(dx<0?1:-1),true);paused=false;}},{passive:true});
      tabBox.addEventListener('keydown',function(e){var k=e.key;if(k==='ArrowRight'){setScene(cur+1,true);tabs[cur].focus();e.preventDefault();}else if(k==='ArrowLeft'){setScene(cur-1,true);tabs[cur].focus();e.preventDefault();}});
    }
    new MutationObserver(function(){render();}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
  }

  /* ======================================================================
     Rule-based rail · same path, every run
     ====================================================================== */
  var rcv=$id('waRule');
  if(rcv){
    var RN=[['t','Event|Event','any tenant'],['c','Rule match|Rule','severity, type'],['a','Action A|Act A','e.g. apply plan'],['a','Action B|Act B','e.g. notify'],['r','Result','same, every run']];
    var CYC=1500,runBase=1280;
    function rule(now){var f=fitC(rcv);if(!f)return;var c=f.c,w=f.w,h=f.h,T=th(),nar=w<460;c.clearRect(0,0,w,h);grid(c,w,h,T);
      var nh=nar?44:50,top=Math.max(nar?96:104,Math.round(h*.3)),pad=10,n=RN.length,gap=nar?8:16,nw=(w-pad*2-gap*(n-1)-(nar?30:0))/n,ry=top;
      // tenants feeding in
      var lanes=5,lx=pad,lw=nw;txt(c,'TENANTS',lx,22,'800 8px "IBM Plex Mono"',T.mut);
      var act=R?0:Math.floor(now/CYC)%lanes;
      for(var l=0;l<lanes;l++){var yy=32+l*12;rr(c,lx,yy,lw*.6,8,4);c.fillStyle=l===act?OR:(l%2?T.lb:T.soft);c.fill();txt(c,'T'+(l+1),lx+lw*.6+4,yy+4,'700 7.5px "IBM Plex Mono"',l===act?T.ot:T.mut);
        if(l===act){c.strokeStyle='rgba(255,138,0,.5)';c.lineWidth=1.4;c.beginPath();c.moveTo(lx+lw*.3,yy+8);c.quadraticCurveTo(lx+lw*.3,top-8,lx+nw*.5,top-1);c.stroke();}}
      // AI suggestion bubble
      var bx=pad+nw+gap,bw=Math.min(nar?140:220,w-bx-pad);rr(c,bx,18,bw,30,8);c.fillStyle=dark()?'#14224a':'#EAF2FF';c.fill();c.strokeStyle=T.lb;c.lineWidth=1.2;c.stroke();
      txt(c,'AI ASSIST',bx+8,28,'800 7.5px "IBM Plex Mono"',T.bl);c.font='600 '+(nar?8:9)+'px Sora';txt(c,clip(c,'"Looks like ransomware — isolate?"',bw-16),bx+8,40,'600 '+(nar?8:9)+'px Sora',T.ink);
      c.strokeStyle=T.lb;c.setLineDash([3,3]);c.beginPath();c.moveTo(bx+30,48);c.lineTo(pad+nw+gap+nw/2,top-2);c.stroke();c.setLineDash([]);
      txt(c,nar?'suggests':'AI suggests · the rule decides',bx+36,62+(nar?0:4),'600 '+(nar?7.5:8.5)+'px "IBM Plex Mono"',T.mut);
      var X=[];for(var i=0;i<n;i++)X.push(pad+i*(nw+gap));
      // rail
      c.strokeStyle=T.line;c.lineWidth=2;c.beginPath();c.moveTo(X[0]+nw/2,ry+nh/2);c.lineTo(X[n-1]+nw/2,ry+nh/2);c.stroke();
      var cyc=R?0:Math.floor(now/CYC),p=R?.999:(now%CYC)/CYC,pos=p*(n-1);
      for(var j=0;j<n;j++){var k=RN[j],r={x:X[j],y:ry,w:nw,h:nh},lit=Math.abs(pos-j)<.45,dn=pos>j+.3;
        if(k[0]==='r'){rr(c,r.x,r.y,r.w,r.h,9);c.fillStyle=dn||lit?(dark()?'rgba(95,224,141,.14)':'rgba(22,163,74,.08)'):T.surf;c.fill();c.strokeStyle=lit?T.gr:T.line;c.lineWidth=lit?2:1.2;c.stroke();
          c.font='700 '+(nar?9:11)+'px Sora';txt(c,clip(c,nar?'Done':k[1],r.w-14),r.x+8,r.y+r.h/2-6,'700 '+(nar?9:11)+'px Sora',T.ink);if(!nar){c.font='500 8px "IBM Plex Mono"';txt(c,clip(c,k[2],r.w-14),r.x+8,r.y+r.h-11,'500 8px "IBM Plex Mono"',T.mut);}
          if(lit||p>.92){c.beginPath();c.arc(r.x+r.w-12,r.y+12,7,0,TAU);c.fillStyle=T.gr;c.fill();tick(c,r.x+r.w-12,r.y+12,7,'#fff');}}
        else node(c,r,k[0],k[1],nar?'':k[2],lit?1:dn?2:0,T,nar);}
      // token
      var tx=lerp(X[0]+nw/2,X[n-1]+nw/2,p);c.beginPath();c.arc(tx,ry+nh/2,6,0,TAU);c.fillStyle=OR;c.fill();c.beginPath();c.arc(tx,ry+nh/2,11,0,TAU);c.fillStyle='rgba(255,138,0,.2)';c.fill();
      // history of runs: identical traces
      var hy=ry+nh+22;txt(c,'LAST RUNS',pad,hy,'800 8px "IBM Plex Mono"',T.mut);
      var rows=Math.max(3,Math.min(8,Math.floor((h-hy-14)/22))),rh2=Math.min(24,(h-hy-18)/rows);
      for(var q=0;q<rows;q++){var yy2=hy+16+q*rh2,num=runBase+cyc-q,partial=q===0;
        txt(c,'#'+num.toLocaleString('en-IN'),pad,yy2,'700 8.5px "IBM Plex Mono"',q===0?T.ot:T.mut);
        for(var z=0;z<n;z++){var xz=X[z]+nw/2,ok=!partial||pos>=z-.05;c.beginPath();c.arc(xz,yy2,4,0,TAU);c.fillStyle=ok?(z===n-1?T.gr:T.bl):T.soft;c.fill();if(z<n-1){c.strokeStyle=ok&&(!partial||pos>z+.5)?T.lb:T.soft;c.lineWidth=2;c.beginPath();c.moveTo(xz+5,yy2);c.lineTo(X[z+1]+nw/2-5,yy2);c.stroke();}}
        txt(c,partial&&p<.95?(nar?'run':'running'):(nar?'same':'identical'),w-pad,yy2,'700 8px "IBM Plex Mono"',partial&&p<.95?T.ot:T.gr,'right');}}
    if(R){rule(0);addEventListener('resize',function(){rule(0);});}else{var rOn=loop(rule);vis(rcv,rOn);}
    new MutationObserver(function(){if(R)rule(0);}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
  }

  /* ======================================================================
     Cross-service hub
     ====================================================================== */
  var hcv=$id('waHub'),hubC=$id('waHubC');
  if(hcv){
    var HN=[['Backup',0],['Disaster Recovery',0],['RMM',0],['EDR · XDR',0],['Acronis PSA',1],['CyberApps',1]];
    var HX=[[2,0,'Device registered','apply protection plan'],[3,3,'EDR incident','isolate device'],[0,0,'Backup failed alert','start backup'],[2,2,'Low-priority alert','dismiss alert'],[2,2,'Device registered','run patch management'],[1,3,'DR alert','notify technician'],[3,0,'Malware found','quarantine files']];
    var HC=2600,lastH=-1;
    function hub(now){var f=fitC(hcv);if(!f)return;var c=f.c,w=f.w,h=f.h;c.clearRect(0,0,w,h);
      var cx=w/2,cy=(h-50)/2+10,rad=Math.min(w*.36,(h-70)*.42),k=R?0:Math.floor(now/HC)%HX.length,p=R?.6:(now%HC)/HC,ex=HX[k];
      if(k!==lastH&&hubC){lastH=k;hubC.innerHTML='<b>'+esc(ex[2])+'</b><span>→</span><b>'+esc(ex[3])+'</b>';}
      // rings
      c.strokeStyle='rgba(127,176,255,.14)';c.lineWidth=1;c.beginPath();c.arc(cx,cy,rad,0,TAU);c.stroke();c.beginPath();c.arc(cx,cy,rad*.55,0,TAU);c.stroke();
      var P=[];for(var i=0;i<HN.length;i++){var a=-Math.PI/2+i*TAU/HN.length+(R?0:now/60000);P.push([cx+Math.cos(a)*rad,cy+Math.sin(a)*rad]);}
      for(var j=0;j<P.length;j++){c.strokeStyle=HN[j][1]?'rgba(255,138,0,.25)':'rgba(127,176,255,.25)';c.setLineDash(HN[j][1]?[3,4]:[]);c.lineWidth=1.2;c.beginPath();c.moveTo(cx,cy);c.lineTo(P[j][0],P[j][1]);c.stroke();c.setLineDash([]);}
      // pulse source → engine → target
      var s=P[ex[0]],tg=P[ex[1]];
      if(p<.42){var u=eio(p/.42);c.beginPath();c.arc(lerp(s[0],cx,u),lerp(s[1],cy,u),5,0,TAU);c.fillStyle='#7FB0FF';c.fill();}
      else if(p>.5&&p<.92){var u2=eio((p-.5)/.42);c.beginPath();c.arc(lerp(cx,tg[0],u2),lerp(cy,tg[1],u2),5,0,TAU);c.fillStyle=OR;c.fill();}
      // engine
      var gl=p>.38&&p<.56?1:0;c.beginPath();c.arc(cx,cy,34+gl*4,0,TAU);c.fillStyle='rgba(0,102,255,'+(.2+gl*.25)+')';c.fill();c.beginPath();c.arc(cx,cy,27,0,TAU);c.fillStyle=BL;c.fill();
      txt(c,'WORKFLOW',cx,cy-5,'800 8px "IBM Plex Mono"','#fff','center');txt(c,'ENGINE',cx,cy+7,'800 8px "IBM Plex Mono"','#fff','center');
      for(var q=0;q<P.length;q++){var on=(q===ex[0]&&p<.45)||(q===ex[1]&&p>.85),soon=HN[q][1],nx=P[q][0],ny=P[q][1];
        c.font='700 11px Sora';var tw=c.measureText(HN[q][0]).width+20,bh=26;rr(c,nx-tw/2,ny-bh/2,tw,bh,13);c.fillStyle=on?(q===ex[1]&&p>.85?OR:BL):'#141F3D';c.fill();c.strokeStyle=soon?'rgba(255,138,0,.55)':'rgba(255,255,255,.18)';c.setLineDash(soon?[3,3]:[]);c.lineWidth=1.2;c.stroke();c.setLineDash([]);
        txt(c,HN[q][0],nx,ny+.5,'700 11px Sora','#fff','center');if(soon)txt(c,'coming soon',nx,ny+bh/2+9,'600 8px "IBM Plex Mono"','#FFB15C','center');}}
    if(R){hub(0);addEventListener('resize',function(){hub(0);});}else{var hOn=loop(hub);vis(hcv,hOn);}
  }

  /* ======================================================================
     Use cases · chain player
     ====================================================================== */
  var UC=[
    {n:'Customer onboarding automation',d:'When a new customer tenant is created, the workflow creates its users, assigns their roles and sends a welcome email — so every customer starts the same way.',
     s:[['t','zap','Tenant created'],['a','users','Create users'],['a','user-check','Assign roles'],['a','mail','Send welcome email|Welcome mail']],f:[['clock','Minutes, not a checklist'],['repeat','Same for every customer']]},
    {n:'Device protection upon registration',d:'A device that registers with the platform gets its protection plan, its first backup and its first security checks straight away — no gap between joining and being protected.',
     s:[['t','monitor','Device registered'],['a','shield-check','Apply protection plan'],['a','cloud-up','Start first backup'],['a','search','Run security checks']],f:[['zap','Protected on day 0'],['refresh','Patch run can follow']]},
    {n:'Alert noise reduction',d:'Low-priority alerts that never need a person are dismissed by rule; important ones are escalated with a notification — technicians see fewer, better alerts.',
     s:[['t','bell','Alert created'],['c','filter','Severity is low?'],['a','x','Dismiss alert'],['a','alert','Else escalate & notify']],f:[['filter','Fewer alerts to read'],['target','Important ones stand out']]},
    {n:'EDR / XDR incident response automation',d:'When an EDR incident is raised or updated, the workflow isolates the device, notifies the right people and runs the follow-up steps — containment starts in the same run.',
     s:[['t','shield','EDR incident updated'],['c','alert','Severity critical?'],['a','lock','Isolate device'],['a','bell','Notify & follow up']],f:[['clock','Containment in seconds'],['headset','XcellHost SOC informed']]}
  ];
  var ucT=$id('waUct'),chain=$id('waChain'),ucI=0,ucT0=0,ucLast=-1;
  var ICO={zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>','user-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>',mail:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',monitor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>','shield-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>','cloud-up':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9"/><path d="M12 12v8M9 15l3-3 3 3"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>',filter:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>',x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',repeat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3"/></svg>',refresh:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',headset:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>',pipeline:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="12" r="2.5"/><circle cx="19" cy="12" r="2.5"/><path d="M7.5 12h9"/><path d="M12 6v12"/></svg>',copy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>',refresh2:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>',bug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg>'};
  var KL={t:'Trigger',c:'Condition',a:'Action'};
  function ucShow(i){ucI=i;var U=UC[i];setT('waUcN',U.n);setT('waUcD',U.d);
    $$('button',ucT).forEach(function(b,k){b.classList.toggle('on',k===i);b.setAttribute('aria-selected',k===i);});
    chain.style.setProperty('--n',U.s.length);chain.innerHTML=U.s.map(function(s){return '<li class="'+s[0]+'"><small>'+KL[s[0]]+'</small><b>'+ICO[s[1]]+esc(s[2])+'</b></li>';}).join('');
    $id('waUcF').innerHTML=U.f.map(function(x){return '<span>'+ICO[x[0]]+esc(x[1])+'</span>';}).join('');
    ucT0=performance.now();ucLast=-1;if(R)$$('li',chain).forEach(function(li){li.classList.add('dn');});}
  if(ucT&&chain){
    $$('button',ucT).forEach(function(b,k){b.addEventListener('click',function(){ucShow(k);});});
    ucShow(0);
    if(!R){var ucOn=loop(function(now){var n=UC[ucI].s.length,e=now-ucT0,step=Math.floor(e/700);if(step>n+3){ucT0=now;step=0;}if(step===ucLast)return;ucLast=step;
      $$('li',chain).forEach(function(li,k){li.classList.toggle('lit',k===step);li.classList.toggle('dn',k<step);});});vis(chain,ucOn);}
  }

  /* ======================================================================
     Propagation tiles
     ====================================================================== */
  var ppT=$id('waPpT');
  if(ppT){var NT=16,tiles=[];for(var i=0;i<NT;i++){var el=d.createElement('div');el.className='wa-tn';el.innerHTML='<small>Tenant '+(i<9?'0':'')+(i+1)+' · sample</small><b>v2</b>';ppT.appendChild(el);tiles.push(el);}
    var PC=9000,lastP=-2,ppS=$id('waPpS'),ppP=$id('waPpP');
    function ppAt(now){var e=now%PC,k=e<900?-1:Math.min(NT,Math.floor((e-900)/280)+1);
      var pct=k<0?0:Math.round(k/NT*100);if(ppP)ppP.style.width=pct+'%';
      if(k===lastP)return;lastP=k;
      tiles.forEach(function(t,j){var up=k>j,ov=j===9;t.classList.toggle('v3',up);t.classList.toggle('ov',up&&ov);$('b',t).textContent=up?'v3':'v2';if(up&&j===k-1){t.classList.remove('ping');void t.offsetWidth;t.classList.add('ping');}});
      setT(ppS,k<0?'Saving v3 in the master…':k<NT?'Propagating v3 · '+k+' / '+NT+' tenants':'v3 live on all '+NT+' tenants · 1 override kept');}
    if(R){ppAt(PC-1);}else{var pOn=loop(ppAt);vis(ppT,pOn);}}

  /* deliver cards top bar + steps line */
  onIn($id('waSteps'),function(){var s=$id('waSteps');if(s)s.classList.add('go');});

  /* ======================================================================
     Configurator · quote
     ====================================================================== */
  var P_ONB=24999,P_SET=24999;
  var cfWho=$id('cfWho'),cfW=$id('cfW'),cfT=$id('cfT'),cfL=$id('cfL'),cfX=$id('cfX'),cfLast=null;
  function iv(el,mn,mx){var v=parseInt(el.value,10);if(isNaN(v))v=mn;return clamp(v,mn,mx);}
  function cfCalc(){if(!cfW)return null;var who=segV(cfWho)||'msp',W=iv(cfW,0,100),Tn=iv(cfT,1,500),Wl=iv(cfL,1,20000);
    var on={};$$('input',cfX).forEach(function(x){on[x.value]=x.checked;});
    var packs=on.set&&W>0?Math.ceil(W/5):0,items=[];
    if(on.onb)items.push({k:'onb',n:'Acronis onboarding',q:1,p:P_ONB});
    if(packs)items.push({k:'setup',n:'Automation setup · 5 workflows',q:packs,p:P_SET});
    var sub=items.reduce(function(a,x){return a+x.p*x.q;},0),gst=Math.round(sub*.18),tot=sub+gst;
    setT('cfWh',W?'= '+Math.ceil(W/5)+' setup pack'+(Math.ceil(W/5)>1?'s':'')+' of 5':'no setup pack');
    setT('cfName',(who==='msp'?'MSP':'IT dept')+' · '+W+' workflow'+(W===1?'':'s')+' · '+Tn+(who==='msp'?' tenant':' site')+(Tn===1?'':'s'));
    $id('cfList').innerHTML=(items.length?items.map(function(x){return '<li><span>'+esc(x.n)+(x.q>1?' × '+x.q:'')+'</span><b>'+inr(x.p*x.q)+'</b></li>';}).join(''):'<li class="z"><span>No priced services selected</span><b>—</b></li>')+'<li class="z"><span>Workflow Automation engine</span><b>Included*</b></li>';
    setT('cfSub',inr(sub));setT('cfGst',inr(gst));var tb=$id('cfTot');if(tb.textContent!==inr(tot)){tb.textContent=inr(tot);bump(tb);}
    $('#cfMr b').textContent=on.mgd?'On quote · '+Wl.toLocaleString('en-IN')+' workloads':'Not selected';
    var bars='';for(var i=0;i<Math.min(W,40);i++)bars+='<i class="'+(on.set?(Math.floor(i/5)%2?'pk':'on'):'')+'"></i>';$id('cfBars').innerHTML=bars+(W>40?'<em style="font:600 11px var(--f-mono);color:var(--muted)">+'+(W-40)+'</em>':'');
    $id('oAdd').disabled=!items.length;
    cfLast={who:who,W:W,Tn:Tn,Wl:Wl,items:items,mgd:on.mgd,sub:sub,
      sum:'Acronis Workflow Automation — '+(who==='msp'?'MSP / reseller':'IT department')+'\nWorkflows to build: '+W+' · '+(who==='msp'?'Tenants':'Sites')+': '+Tn+' · Workloads: '+Wl+'\nServices: '+(items.map(function(x){return x.n+(x.q>1?' × '+x.q:'');}).join('; ')||'none')+(on.mgd?'; Managed automation (quote)':'')+'\nServices subtotal: '+inr(sub)+' + 18% GST = '+inr(tot)+' (indicative)\nAcronis Cyber Platform licences: please quote'};
    var ta=$id('wqS');if(ta&&!ta._e)ta.value=cfLast.sum;return cfLast;}
  function goCfg(){var cf=$id('configure');if(cf)cf.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});XH.flash&&XH.flash($('.wa-cfo'));}
  if(cfW){cfCalc();
    cfWho.addEventListener('change',cfCalc);
    [cfW,cfT,cfL].forEach(function(e){e.addEventListener('input',cfCalc);e.addEventListener('change',cfCalc);});
    cfX.addEventListener('change',cfCalc);
    $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){var v=b.getAttribute('data-pick'),x=$('input[value="'+v+'"]',cfX);if(x)x.checked=true;if(v==='set'&&iv(cfW,0,100)===0)cfW.value=5;cfCalc();goCfg();});});
    var ta=$id('wqS');if(ta)ta.addEventListener('input',function(){ta._e=1;});
    $id('oAdd').addEventListener('click',function(){var q=cfCalc();if(!q||!q.items.length)return;
      q.items.forEach(function(it){XH.cart.add({key:'acronis-wa-'+it.k,name:'Acronis Workflow Automation · '+it.n,sub:(it.k==='onb'?'One-time, per organisation':'One-time, per pack of 5 workflows')+' · XcellHost service · indicative, excl. GST',price:it.p,qty:it.q});});});
    $id('cfGo').addEventListener('click',function(){cfCalc();var q=$id('waQuote'),ta2=$id('wqS');if(ta2){ta2._e=0;ta2.value=cfLast.sum;}
      if(q){q.scrollIntoView({behavior:R?'auto':'smooth',block:'center'});q.classList.remove('flash');void q.offsetWidth;q.classList.add('flash');setTimeout(function(){var n=$id('wqN');if(n)n.focus({preventScroll:true});},R?0:500);}});
    XH.onForm('wa-quote',function(data,f){var nm=data.name?String(data.name).split(' ')[0]:'there';
      f.insertAdjacentHTML('afterend','<div class="done"><div class="dk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><h4>Quotation request received</h4><p>Thanks, '+esc(nm)+'. XcellHost will send an INR quotation for Acronis licences and '+cfLast.W+' workflow'+(cfLast.W===1?'':'s')+' within one business day. Reference: AWA-'+String(Date.now()).slice(-6)+'.</p></div>');f.parentNode.removeChild(f);XH.toast('Quotation request sent');return false;});}

  /* ======================================================================
     Tool 1 · savings calculator
     ====================================================================== */
  var sIn={T:$id('sT'),E:$id('sE'),A:$id('sA'),M:$id('sM'),R:$id('sR')},sMix=$id('sMix'),sLast=null;
  function sCalc(){if(!sIn.T)return;var T=+sIn.T.value,E=+sIn.E.value,A=+sIn.A.value/100,M=+sIn.M.value,Rt=+sIn.R.value,mix=parseFloat(segV(sMix)||'1');
    setT('sTv',String(T));setT('sEv',String(E));setT('sAv',Math.round(A*100)+'%');setT('sMv',M+' min');setT('sRv',inr(Rt));
    var ev=T*E*mix,au=ev*A,h0=ev*M/60,h1=(ev-au)*M/60+au*1/60,hs=Math.max(0,h0-h1),rs=hs*Rt,fte=hs/160;
    var setup=P_SET+P_ONB,pb=rs>0?setup/rs:0;
    setT('sH0',Math.round(h0).toLocaleString('en-IN')+' h');setT('sH1',Math.round(h1).toLocaleString('en-IN')+' h');
    var mx=Math.max(h0,1);$id('sB0').style.width=(h0/mx*100).toFixed(1)+'%';$id('sB1').style.width=(h1/mx*100).toFixed(1)+'%';
    setT('sHs',Math.round(hs).toLocaleString('en-IN')+' h');var rsEl=$id('sRs'),nv=inr(rs);if(rsEl.textContent!==nv){rsEl.textContent=nv;bump(rsEl);}
    setT('sRy',inr(rs*12));setT('sF',fte.toFixed(fte<10?1:0));
    $id('sPb').innerHTML=rs>0?'Setup (one pack + onboarding, '+inr(setup)+'*) pays back in <b>'+(pb<1?'under 1 month':pb.toFixed(1)+' months')+'</b> at these numbers.':'Adjust the inputs to see a payback estimate.';
    sLast={T:T};}
  if(sIn.T){Object.keys(sIn).forEach(function(k){sIn[k].addEventListener('input',sCalc);});sMix.addEventListener('change',sCalc);sCalc();
    onIn($('.wa-svo'),function(){var b0=$id('sB0'),b1=$id('sB1');if(R)return;var w0=b0.style.width,w1=b1.style.width;b0.style.width='0';b1.style.width='0';requestAnimationFrame(function(){requestAnimationFrame(function(){b0.style.width=w0;b1.style.width=w1;});});});
    $id('sGo').addEventListener('click',function(){if(cfT&&sLast){cfT.value=sLast.T;cfCalc();}goCfg();});}

  /* ======================================================================
     Tool 2 · template picker
     ====================================================================== */
  var RC=[
    {n:'Protect every new device',i:'monitor',g:'Day-0 protection',d:'Runs when a workstation or server registers: protection plan first, then the first backup and a patch run, so nothing waits in a queue.',
     s:[['t','zap','Device registered'],['c','filter','Device type = workstation or server'],['a','shield-check','Apply protection plan'],['a','cloud-up','Start backup'],['a','refresh','Run patch management']]},
    {n:'Onboard a new customer',i:'users',g:'Tenant setup',d:'Runs when you create a customer tenant: users, roles and a welcome email, identical for every customer.',
     s:[['t','zap','Tenant created'],['a','users','Create users'],['a','user-check','Assign roles'],['a','mail','Send welcome email|Welcome mail']]},
    {n:'Cut low-priority alert noise',i:'filter',g:'Alert triage',d:'Dismisses informational and low-severity alerts by rule and sends everything else to the on-call technician.',
     s:[['t','bell','Alert created'],['c','filter','Severity = low or informational'],['a','x','Dismiss alert'],['a','bell','Otherwise: send notification']]},
    {n:'Contain an EDR incident',i:'shield',g:'Incident response',d:'When an EDR incident turns critical, the device is isolated, scanned and the XcellHost SOC and your contact are told — in one run.',
     s:[['t','shield','EDR incident updated'],['c','alert','Severity = critical'],['a','lock','Isolate device'],['a','search','Run malware scan'],['a','bell','Send notification']]},
    {n:'Backup failed? Retry and tell someone',i:'cloud-up',g:'Backup hygiene',d:'A failed-backup alert starts a fresh backup and notifies the technician, so a missed night does not become a missed week.',
     s:[['t','bell','Alert created'],['c','filter','Alert type = backup failed'],['a','cloud-up','Start backup'],['a','bell','Send notification']]},
    {n:'Quarantine on malware detection',i:'bug',g:'Endpoint security',d:'A malware alert quarantines the files, runs a full scan on the device and records the outcome for the customer report.',
     s:[['t','bell','Alert created'],['c','filter','Alert type = malware detected'],['a','lock','Quarantine files'],['a','search','Run malware scan'],['a','bell','Send notification']]}
  ];
  var tpl=$id('waTpl'),tpF=$id('waTpF'),tpCur=0,tpSel={0:1,1:1,2:1,3:1,4:1},tpT0=0,tpLast=-1;
  function tpCount(){return Object.keys(tpSel).filter(function(k){return tpSel[k];}).length;}
  function tpSync(){var n=tpCount(),p=Math.ceil(n/5);setT('waTpC',String(n));setT('waTpP',n?'= '+p+' setup pack'+(p>1?'s':''):'= no setup pack');
    $$('.wa-rc',tpl).forEach(function(b,k){b.classList.toggle('sel',!!tpSel[k]);b.classList.toggle('cur',k===tpCur);b.setAttribute('aria-pressed',!!tpSel[k]);});}
  function tpShow(k){tpCur=k;var r=RC[k];setT('waTpN',r.n);setT('waTpD',r.d);
    tpF.innerHTML=r.s.map(function(s){return '<div class="wa-st2 '+s[0]+'"><small>'+KL[s[0]]+'</small><span>'+ICO[s[1]]+esc(s[2])+'</span></div>';}).join('');
    tpT0=performance.now();tpLast=-1;if(R)$$('.wa-st2',tpF).forEach(function(x){x.classList.add('in');});tpSync();}
  if(tpl){
    tpl.innerHTML=RC.map(function(r,k){return '<button type="button" class="wa-rc" data-r="'+k+'" aria-pressed="false"><i>'+ICO[r.i]+'</i><b>'+esc(r.n)+'</b><small>'+esc(r.g)+' · '+r.s.length+' steps</small><span class="ck" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span></button>';}).join('');
    $$('.wa-rc',tpl).forEach(function(b){b.addEventListener('click',function(e){var k=+b.getAttribute('data-r');if(k===tpCur||e.target.closest('.ck'))tpSel[k]=tpSel[k]?0:1;else if(!tpSel[k])tpSel[k]=1;tpShow(k);});});
    tpShow(0);
    if(!R){var tpOn=loop(function(now){var n=RC[tpCur].s.length,st2=Math.floor((now-tpT0)/520);if(st2>n+5){tpT0=now;st2=0;}if(st2===tpLast)return;tpLast=st2;
      $$('.wa-st2',tpF).forEach(function(x,k){x.classList.toggle('in',k<=st2);x.classList.toggle('lit',k===st2);});});vis(tpF,tpOn);}
    $id('waTpGo').addEventListener('click',function(){if(cfW){cfW.value=tpCount();var x=$('input[value="set"]',cfX);if(x&&tpCount())x.checked=true;cfCalc();}goCfg();});}

  /* hide cross-links whose page is not published yet (optional siblings) — none by default */
})();

