
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,d=document;
  var DPR=Math.min(2,window.devicePixelRatio||1),TAU=Math.PI*2,NS='http://www.w3.org/2000/svg';
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
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function txt(c,s,x,y,font,col,al){c.font=font;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  function fitC(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function pill(c,s,x,y,font,bg,fg,al){c.font=font;var w=c.measureText(s).width+12,h=17,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,8.5);c.fillStyle=bg;c.fill();txt(c,s,x0+6,y+.5,font,fg);return w;}
  function bz(a,b,cc,dd,u){var v=1-u;return v*v*v*a+3*v*v*u*b+3*v*u*u*cc+u*u*u*dd;}
  var BL='#0066FF',OR='#FF8A00',NV='#0B132B',GR='#16a34a',RD='#c0392b';
  function th(){return dark()?{ink:'#EAF1FF',mut:'#93A4C4',line:'rgba(255,255,255,.14)',soft:'rgba(255,255,255,.07)',card:'#13224A',bl:'#5C9DFF',ot:'#FFB15C',gr:'#5FE08D',rd:'#FF8A80',lb:'rgba(92,157,255,.35)',nv:'#22345F'}:{ink:NV,mut:'#55617A',line:'rgba(11,19,43,.13)',soft:'rgba(11,19,43,.06)',card:'#ffffff',bl:BL,ot:'#C46A00',gr:GR,rd:RD,lb:'rgba(0,102,255,.22)',nv:NV};}
  function stamp(c,s,x,y,t0,t,col,fs){if(t<t0)return;var u=spring((t-t0)/600),k=lerp(1.7,1,clamp(u,0,1.2));c.save();c.translate(x,y);c.rotate(-.035);c.scale(k,k);c.globalAlpha=clamp((t-t0)/180,0,1);var f='800 '+fs+'px "IBM Plex Mono"';c.font=f;var w=c.measureText(s).width+18;rr(c,-w/2,-12,w,24,5);c.fillStyle=dark()?'rgba(10,20,44,.95)':'rgba(255,255,255,.97)';c.fill();c.strokeStyle=col;c.lineWidth=2;c.stroke();txt(c,s,0,1,f,col,'center');c.restore();c.globalAlpha=1;}
  function tick(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2;c.lineCap='round';c.beginPath();c.moveTo(x-s*.45,y);c.lineTo(x-s*.1,y+s*.35);c.lineTo(x+s*.5,y-s*.35);c.stroke();c.lineCap='butt';}
  function lockI(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=1.6;c.beginPath();c.arc(x,y-s*.25,s*.3,Math.PI,0);c.stroke();rr(c,x-s*.45,y-s*.22,s*.9,s*.7,2);c.fillStyle=col;c.fill();}
  function card(c,x,y,w,h,T,stroke){rr(c,x,y,w,h,9);c.fillStyle=T.card;c.fill();c.strokeStyle=stroke||T.line;c.lineWidth=stroke?1.8:1;c.stroke();}

  /* ===== one shared rAF ticker ===== */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function vis(el,on){if(!el)return;XH.whenVisible(el,function(v){el._v=v;on(v&&!d.hidden);});d.addEventListener('visibilitychange',function(){on(!!el._v&&!d.hidden);});}
  function svg(tag,attrs,parent){var e=d.createElementNS(NS,tag);for(var k in attrs)e.setAttribute(k,attrs[k]);if(parent)parent.appendChild(e);return e;}

  /* ======================================================================
     HERO · five Cyber Intelligence scenes on one canvas (sample data)
     ====================================================================== */
  var DUR=5500,FADE=450,CPS=26;
  var SC=[
    {cap:'Prompt → widget',ph:'Building',dn:'Saved',q:'Show patch status by client, last 30 days',ft:'AI ACTIVITY',ml:'Avg. patch compliance',
     ins:[[2400,'<b>Client C</b> has 20% of patches pending — highest this month','w'],[3000,'5% failed installs on <b>Client E</b> servers','r'],[3600,'Clients A, B and D above 90% patched','g']],
     lg:[[300,'10:02','prompt received · Acronis AI','ai',''],[1600,'10:02','query · RMM patch data · 5 tenants','run',''],[2500,'10:02','widget built · stacked bars','ok','g'],[3900,'10:03','saved to widget catalogue','✓','g']]},
    {cap:'Every service, one view',ph:'Monitoring',dn:'Summarised',q:'Where do my clients need attention today?',ft:'OVERVIEW',ml:'Items needing attention',
     ins:[[1800,'<b>3 backup failures</b> at Client B since Tuesday','r'],[2600,'<b>17 open tickets</b>, 5 older than three days','w'],[3400,'Security: 2 incidents, both contained','g']],
     lg:[[300,'09:00','overview refreshed · all tenants','sync',''],[1400,'09:00','backup · 3 failed jobs','alert','r'],[2200,'09:01','service desk · 17 open','warn','w'],[3300,'09:01','AI summary ready','✓','g']]},
    {cap:'Quarterly review, drafted',ph:'Drafting',dn:'Draft ready',q:"Build Client A's Q3 review with next steps",ft:'REPORT BUILDER',ml:'Report pages drafted',
     ins:[[1500,'Backups: <b>99%</b> job success across the quarter','g'],[2400,'<b>212 patches</b> installed, 6 deferred','w'],[3300,'Next step: protect <b>2 new laptops</b>','']],
     lg:[[300,'11:20','QBR template · Client A','start',''],[1200,'11:20','data · Jul–Sep · 3 months','run',''],[2600,'11:21','AI summary drafted','ok','g'],[3800,'11:21','draft ready for review','✓','g']]},
    {cap:'Gaps & growth',ph:'Scanning',dn:'Found',q:'Which workloads have no backup or endpoint protection?',ft:'COVERAGE SCAN',ml:'Opportunities found',
     ins:[[1500,'<b>2 servers</b> with no backup plan','w'],[2200,'<b>3 laptops</b> without endpoint protection','w'],[2900,'<b>6 Microsoft 365 licences</b> unused for 30+ days','']],
     lg:[[300,'15:10','scan · Client D · 7 workloads','scan',''],[1600,'15:10','2 servers · no backup','gap','w'],[2300,'15:11','3 laptops · no EDR','gap','w'],[3500,'15:11','recommendation drafted','✓','g']]},
    {cap:'Scheduled · own data only',ph:'Sending',dn:'Delivered',q:'Send each client its monthly report on the 1st',ft:'DELIVERY',ml:'Reports delivered',
     ins:[[1300,'Per-tenant filter applied before sending',''],[2700,'<b>3 of 3</b> clients received only their own data','g'],[3500,'Next run: <b>1st of next month, 09:00</b>','']],
     lg:[[300,'09:00','schedule · monthly · 1st','run',''],[1500,'09:00','Client A · PDF · own data','sent','g'],[2200,'09:00','Client B · Excel · own data','sent','g'],[2900,'09:01','Client C · HTML · own data','sent','g']]}
  ];
  var hero=$id('ciHero'),con=$id('ciCon'),cv=$id('ciCv'),scr=$id('ciScr'),segEl=$id('ciSeg');
  var tabs=segEl?$$('button',segEl):[],logEl=$id('ciLog'),insEl=$id('ciIns'),qEl=$id('ciQ'),mvEl=$id('ciMV'),mbEl=$id('ciMB');
  var CL=['Client A','Client B','Client C','Client D','Client E'];

  /* scene 0 · prompt → widget */
  var P0=[[96,3,1],[92,6,2],[78,20,2],[97,3,0],[88,7,5]];
  function s0(c,w,h,t){var T=th(),nar=w<360,fs=nar?8.5:9.5,top=42,x0=10,W=w-20;
    // existing mini tiles
    var tw=(W-8)/2;for(var k=0;k<2;k++){var tx=x0+k*(tw+8);card(c,tx,top,tw,38,T);txt(c,k?'OPEN TICKETS':'BACKUP SUCCESS',tx+9,top+11,'700 '+(fs-2)+'px "IBM Plex Mono"',T.mut);txt(c,k?'17':'98%',tx+9,top+27,'800 '+(fs+3)+'px Sora',T.ink);
      for(var b=0;b<7;b++){var bh=4+((b*7+k*3)%9);c.fillStyle=k?T.lb:T.lb;rr(c,tx+tw-62+b*7,top+31-bh,4,bh,1);c.fill();}}
    var y0=top+48,hh=h-y0-10;
    if(t<1500){c.setLineDash([5,5]);rr(c,x0,y0,W,hh,10);c.strokeStyle=T.bl;c.globalAlpha=.55+.3*Math.sin(t/220);c.lineWidth=1.6;c.stroke();c.setLineDash([]);c.globalAlpha=1;
      txt(c,'+ new widget',x0+W/2,y0+hh/2-8,'700 '+(fs+2)+'px Sora',T.bl,'center');txt(c,'describe it to Acronis AI',x0+W/2,y0+hh/2+10,'500 '+(fs-1)+'px "IBM Plex Mono"',T.mut,'center');return ['—',0,''];}
    card(c,x0,y0,W,hh,T,t<2100?T.bl:null);
    if(t<2100){var sh=(t-1500)/600;for(var r=0;r<5;r++){rr(c,x0+12,y0+30+r*((hh-56)/5),W*(.5+.08*((r*3)%5)),9,4);c.fillStyle=T.soft;c.fill();}
      var gx=x0+lerp(-60,W,sh%1);c.fillStyle=dark()?'rgba(255,255,255,.06)':'rgba(0,102,255,.07)';c.fillRect(Math.max(x0,gx),y0+20,60,hh-40);
      txt(c,'Acronis AI · building widget…',x0+12,y0+14,'700 '+(fs-1.5)+'px "IBM Plex Mono"',T.bl);return ['…',0,''];}
    txt(c,'PATCH STATUS BY CLIENT · 30 DAYS',x0+12,y0+14,'800 '+(fs-1.5)+'px "IBM Plex Mono"',T.ink);
    var lw=nar?50:58,bx=x0+12+lw,bw=W-24-lw-(nar?26:32),rh=(hh-52)/5,avg=0,gp=0;
    for(var i=0;i<5;i++){var y=y0+30+i*rh,p=eio(seg(2100+i*130,2900+i*130,t)),d0=P0[i];gp+=p;
      txt(c,CL[i],x0+12,y+rh/2-2,'600 '+(fs-.5)+'px "IBM Plex Sans"',T.ink);
      var acc=0,cols=[T.bl,OR,T.rd];for(var j=0;j<3;j++){var ww=bw*d0[j]/100*p;if(ww>0.5){rr(c,bx+bw*acc/100*p,y+rh/2-7,ww,12,j===0?4:2);c.fillStyle=cols[j];c.fill();}acc+=d0[j];}
      if(p>=1){txt(c,d0[0]+'%',bx+bw+6,y+rh/2-1,'700 '+(fs-1)+'px "IBM Plex Mono"',d0[0]<85?T.ot:T.mut);}
      if(i===2&&t>2400){c.strokeStyle=OR;c.lineWidth=1.6;c.globalAlpha=.5+.5*Math.sin(t/160);rr(c,x0+6,y-2,W-12,rh,6);c.stroke();c.globalAlpha=1;}
      avg+=d0[0]*p;}
    var ly=y0+hh-12,lx=x0+12,L=[['patched',T.bl],['pending',OR],['failed',T.rd]];for(var q=0;q<3;q++){c.fillStyle=L[q][1];rr(c,lx,ly-4,8,8,2);c.fill();txt(c,L[q][0],lx+12,ly,'600 '+(fs-2)+'px "IBM Plex Mono"',T.mut);lx+=nar?58:66;}
    if(t>3900)stamp(c,nar?'SAVED TO CATALOGUE':'WIDGET SAVED TO CATALOGUE',x0+W/2,y0+hh/2+6,3900,t,T.gr,nar?8.5:9.5);
    return [Math.round(avg/5)+'%',gp/5*.9,t>3900?'ok':''];}

  /* scene 1 · cross-service overview */
  var P1=[['BACKUP','97%','3 failed jobs','r'],['SECURITY','2','incidents · contained','g'],['PATCHING','41','pending patches','w'],['SERVICE DESK','17','open tickets','w'],['MICROSOFT 365','150','seats · 6 unused','w'],['TENANTS','5','clients in view','']];
  function s1(c,w,h,t){var T=th(),nar=w<360,fs=nar?8.5:9.5,top=42,x0=10,W=w-20,cols=nar?2:3,rows=nar?3:2,gap=8;
    var tw=(W-gap*(cols-1))/cols,thh=(h-top-14-gap*(rows-1))/rows,att=0;
    for(var i=0;i<6;i++){var a=eo(seg(150+i*200,650+i*200,t));if(a<=0)continue;var cx=x0+(i%cols)*(tw+gap),cy=top+Math.floor(i/cols)*(thh+gap),D=P1[i];
      c.save();c.globalAlpha=a;c.translate(cx+tw/2,cy+thh/2);c.scale(lerp(.9,1,a),lerp(.9,1,a));c.translate(-(cx+tw/2),-(cy+thh/2));
      var hl=i===0&&t>3000;card(c,cx,cy,tw,thh,T,hl?OR:null);
      txt(c,D[0],cx+9,cy+12,'700 '+(fs-2.5)+'px "IBM Plex Mono"',T.mut);
      txt(c,D[1],cx+9,cy+thh*.46,'800 '+(nar?16:19)+'px Sora',T.ink);
      txt(c,D[2],cx+9,cy+thh*.46+(nar?17:19),'500 '+(fs-1.5)+'px "IBM Plex Sans"',T.mut);
      // spark bars
      var sb=thh<70?0:7,sw=(tw-18)/7;for(var b=0;b<sb;b++){var v=.25+.6*Math.abs(Math.sin(b*1.7+i*2.1)),bh2=Math.min(thh*.2,16)*v;c.fillStyle=D[3]==='r'&&b===sb-1?T.rd:T.lb;rr(c,cx+9+b*sw,cy+thh-6-bh2,sw-3,bh2,1.5);c.fill();}
      if(D[3]&&t>1300){var pu=.5+.5*Math.sin(t/180+i);c.beginPath();c.arc(cx+tw-12,cy+12,4+pu*2,0,TAU);c.fillStyle=D[3]==='r'?T.rd:D[3]==='w'?OR:T.gr;c.globalAlpha=a*(.5+pu*.5);c.fill();c.globalAlpha=a;if(D[3]!=='g')att++;}
      c.restore();}
    if(t>3000){var u=eo(seg(3000,3400,t));c.globalAlpha=u;pill(c,'INVESTIGATE →',x0+tw-6,top+thh*.46,'800 '+(fs-2.5)+'px "IBM Plex Mono"',OR,'#fff','right');c.globalAlpha=1;}
    if(t>3900)stamp(c,nar?'4 ITEMS · 1 VIEW':'4 ITEMS TO ACT ON · ONE VIEW',x0+W/2,h-22,3900,t,T.bl,nar?8.5:9.5);
    var n=t>1300?Math.min(4,att):0;return [n?String(n):'0',n/4,t>3900?'ok':''];}

  /* scene 2 · QBR report */
  function s2(c,w,h,t){var T=th(),nar=w<360,fs=nar?8.5:9.5,top=42,x0=10,W=w-20;
    // 3-month timeline
    var ty=top+8,M=['JUL','AUG','SEP'],mw=W/3,sp=eio(seg(300,1500,t));
    rr(c,x0,ty-5,W,10,5);c.fillStyle=T.soft;c.fill();rr(c,x0,ty-5,W*sp,10,5);c.fillStyle=T.bl;c.fill();
    for(var m=0;m<3;m++){txt(c,M[m],x0+m*mw+mw/2,ty+15,'700 '+(fs-2)+'px "IBM Plex Mono"',sp*3>m+.5?T.bl:T.mut,'center');}
    // report document
    var dx=x0,dy=top+32,dw=nar?W*.62:W*.6,dh=h-dy-10;card(c,dx,dy,dw,dh,T);
    rr(c,dx,dy,dw,22,9);c.fillStyle=NV;c.fill();c.fillRect(dx,dy+12,dw,10);txt(c,'Q3 REVIEW · CLIENT A',dx+10,dy+11,'800 '+(fs-2)+'px "IBM Plex Mono"','#fff');
    var cp=eio(seg(1300,2300,t)),chH=dh*.34,cy0=dy+30;
    for(var b=0;b<9;b++){var v=[.6,.7,.66,.8,.78,.9,.86,.95,.97][b],bh=chH*v*cp;rr(c,dx+10+b*((dw-20)/9),cy0+chH-bh,(dw-20)/9-4,bh,2);c.fillStyle=b>5?T.bl:T.lb;c.fill();}
    txt(c,'backup success · weekly',dx+10,cy0+chH+10,'500 '+(fs-2.5)+'px "IBM Plex Mono"',T.mut);
    // AI summary lines typing
    var sy=cy0+chH+24;txt(c,'✦ AI SUMMARY',dx+10,sy,'800 '+(fs-2.5)+'px "IBM Plex Mono"',OR);
    var lines=[.92,.8,.88,.55],lh=nar?9:10;for(var l=0;l<lines.length;l++){var lp=eo(seg(2300+l*300,2700+l*300,t)),yy=sy+11+l*lh;if(yy>dy+dh-6)break;rr(c,dx+10,yy-2,(dw-20)*lines[l]*lp,4,2);c.fillStyle=T.line;c.fill();}
    // page thumbnails flying in
    var px=dx+dw+(nar?10:16),pw=x0+W-px,P=['Protection','Patching','Tickets','Next steps'],n=0;
    for(var i=0;i<4;i++){var a=eo(seg(1200+i*380,1750+i*380,t));if(a<=0)continue;n++;var ph2=(dh-14)/4.4,yy2=dy+i*(ph2+5),xx=lerp(w+20,px,a);
      card(c,xx,yy2,pw,ph2,T,i===3&&t>3300?OR:null);c.fillStyle=i%2?OR:T.bl;rr(c,xx+6,yy2+6,pw*.28,ph2-12,2);c.fill();
      c.font='600 '+(fs-2)+'px "IBM Plex Sans"';txt(c,P[i],xx+pw*.28+11,yy2+ph2/2,'600 '+(fs-2)+'px "IBM Plex Sans"',T.ink);}
    if(t>3900)stamp(c,nar?'DRAFT READY':'DRAFT READY · EDIT & SEND',x0+W/2,h-24,3900,t,T.gr,nar?8.5:9.5);
    return [n+' of 4',n/4,t>3900?'ok':''];}

  /* scene 3 · gaps */
  var P3=[['SRV-DB-01','server','ok'],['SRV-FS-02','server','nobk'],['SRV-APP-03','server','nobk'],['LT-SALES-07','laptop','noedr'],['LT-HR-03','laptop','noedr'],['LT-OPS-11','laptop','noedr'],['M365 · 150 seats','m365','unused']];
  function s3(c,w,h,t){var T=th(),nar=w<360,fs=nar?8.5:9.5,top=40,x0=10,W=w-20,cardH=t>3000?40:0,y1=h-12-(t>3000?46:0)*0;
    var rowsB=h-60,rh=(rowsB-top)/7,sp=seg(500,2700,t),scanY=lerp(top,rowsB,sp),found=0;
    for(var i=0;i<7;i++){var y=top+i*rh,D=P3[i],rev=scanY>y+rh*.5;
      rr(c,x0,y+1,W,rh-3,6);c.fillStyle=i%2?T.soft:'transparent';c.fill();
      c.fillStyle=D[1]==='server'?T.nv:D[1]==='laptop'?T.bl:GR;rr(c,x0+6,y+rh/2-5,10,10,2);c.fill();
      txt(c,D[0],x0+22,y+rh/2,'600 '+(fs-1)+'px "IBM Plex Mono"',T.ink);
      if(rev){var lab=D[2]==='ok'?'protected':D[2]==='nobk'?'no backup':D[2]==='noedr'?'no EDR':'6 unused',bg=D[2]==='ok'?T.gr:D[2]==='unused'?BL:OR;pill(c,lab,x0+W-6,y+rh/2,'800 '+(fs-2.5)+'px "IBM Plex Mono"',bg,'#fff','right');if(D[2]!=='ok')found++;}}
    if(sp>0&&sp<1){c.fillStyle=dark()?'rgba(92,157,255,.16)':'rgba(0,102,255,.10)';c.fillRect(x0,scanY-14,W,14);c.fillStyle=T.bl;c.fillRect(x0,scanY-1,W,2);}
    // recommendation card
    var a=eo(seg(3000,3500,t));if(a>0){var cy=lerp(h+10,h-50,a);rr(c,x0,cy,W,42,9);c.fillStyle=NV;c.fill();if(dark()){c.strokeStyle='rgba(255,177,92,.6)';c.lineWidth=1.4;c.stroke();}
      txt(c,'RECOMMEND',x0+10,cy+13,'800 '+(fs-2.5)+'px "IBM Plex Mono"','#FFB15C');
      txt(c,nar?'Backup ×2 · EDR ×3 · 6 seats':'Backup for 2 servers · EDR for 3 laptops · reclaim 6 seats',x0+10,cy+29,'600 '+(fs-1)+'px "IBM Plex Sans"','#fff');}
    if(t>3900)stamp(c,nar?'FROM CLIENT DATA':'EVIDENCE FROM CLIENT DATA',x0+W/2,top+rh*3.5,3900,t,OR,nar?8.5:9.5);
    var opp=found>=6?3:found>=3?2:found>=1?1:0;return [String(opp),opp/3,t>3900?'ok':''];}

  /* scene 4 · scheduled delivery */
  function s4(c,w,h,t){var T=th(),nar=w<360,fs=nar?8.5:9.5,top=44,x0=10,W=w-20;
    var dw=nar?60:70,dh=nar?78:88,dx=x0+2,dy=top+18;
    card(c,dx,dy,dw,dh,T,T.bl);rr(c,dx,dy,dw,14,9);c.fillStyle=BL;c.fill();c.fillRect(dx,dy+7,dw,7);
    for(var l=0;l<5;l++){rr(c,dx+8,dy+22+l*11,(dw-16)*[.9,.7,.85,.6,.75][l],4,2);c.fillStyle=T.line;c.fill();}
    txt(c,'REPORT',dx+dw/2,dy+dh+11,'800 '+(fs-2)+'px "IBM Plex Mono"',T.ink,'center');
    pill(c,'1st · 09:00',dx+dw/2,dy+dh+30,'800 '+(fs-2.5)+'px "IBM Plex Mono"',dark()?'#0066FF':NV,'#fff','center');
    // filter gate
    var fx=nar?w*.44:w*.43,fy=top+18+dh/2,gh=dh+30;rr(c,fx-9,fy-gh/2,18,gh,9);c.fillStyle=T.soft;c.fill();c.strokeStyle=T.bl;c.lineWidth=1.4;c.setLineDash([3,3]);c.stroke();c.setLineDash([]);
    txt(c,'tenant filter',fx,fy+gh/2+11,'700 '+(fs-2.5)+'px "IBM Plex Mono"',T.bl,'center');
    // mailboxes
    var mw=nar?92:112,mx=x0+W-mw,mh=nar?36:40,CC=[BL,OR,GR],F=['PDF','Excel','HTML'],n=0;
    for(var i=0;i<3;i++){var my=top+6+i*(mh+12),t0=1200+i*700,got=t>t0+600;
      card(c,mx,my,mw,mh,T,got?CC[i]:null);c.fillStyle=CC[i];rr(c,mx,my,5,mh,2);c.fill();
      txt(c,CL[i],mx+12,my+12,'700 '+(fs-1)+'px Sora',T.ink);
      txt(c,got?F[i]+' · own data':'waiting…',mx+12,my+mh-10,'500 '+(fs-2.5)+'px "IBM Plex Mono"',got?T.mut:T.mut);
      if(got){n++;lockI(c,mx+mw-13,my+mh/2+1,10,CC[i]);}
      var p=seg(t0,t0+600,t);if(p>0&&p<1){var u=eio(p),sx=dx+dw,sy=dy+dh/2,ex=mx-2,ey=my+mh/2,px,py,col;
        if(u<.5){var v=u/.5;px=lerp(sx,fx,v);py=lerp(sy,fy,v);col=NV;}else{var v2=(u-.5)/.5;px=bz(fx,fx+30,ex-30,ex,v2);py=bz(fy,fy,ey,ey,v2);col=CC[i];}
        rr(c,px-8,py-6,16,12,2);c.fillStyle=dark()&&col===NV?'#5C9DFF':col;c.fill();c.strokeStyle='#fff';c.lineWidth=1;c.beginPath();c.moveTo(px-8,py-6);c.lineTo(px,py);c.lineTo(px+8,py-6);c.stroke();}
      c.strokeStyle=got?CC[i]:T.line;c.lineWidth=1.2;c.setLineDash(got?[]:[3,4]);c.beginPath();c.moveTo(fx+9,fy);c.bezierCurveTo(fx+40,fy,mx-40,my+mh/2,mx,my+mh/2);c.stroke();c.setLineDash([]);}
    c.strokeStyle=T.line;c.lineWidth=1.2;c.beginPath();c.moveTo(dx+dw,dy+dh/2);c.lineTo(fx-9,fy);c.stroke();
    // formats
    var fmts=['PDF','Excel','CSV','HTML'],xx=x0+2,yb=h-16;for(var q=0;q<4;q++){var lit=Math.floor(t/600)%4===q&&t<3900;xx+=pill(c,fmts[q],xx,yb,'800 '+(fs-2.5)+'px "IBM Plex Mono"',lit?OR:(dark()?'#22345F':'#55617A'),'#fff')+5;}
    if(t>3900)stamp(c,nar?'OWN DATA ONLY':'EACH CLIENT · OWN DATA ONLY',nar?x0+W*.62:x0+W*.6,h-17,3900,t,T.gr,nar?8.5:9.5);
    return [n+' of 3',n/3,t>3900?'ok':''];}
  var DRAW=[s0,s1,s2,s3,s4];

  var cur=0,prev=-1,tS=0,tLast=0,fadeT=FADE,paused=false,lastM='',lastSt='',lastQ=-1,lastB=-1;
  function buildSide(k){var S=SC[k];
    if(logEl)logEl.innerHTML=S.lg.map(function(e){return '<li class="'+e[4]+'"><b>'+e[1]+'</b><span>'+e[2]+'</span><em>'+e[3]+'</em></li>';}).join('');
    if(insEl)insEl.innerHTML=S.ins.map(function(e){return '<li class="'+e[2]+'"><i></i><span>'+e[1]+'</span></li>';}).join('');}
  function sideAt(t){var S=SC[cur],li=logEl?logEl.children:[],ii=insEl?insEl.children:[];
    for(var i=0;i<S.lg.length;i++){var on=R||t>=S.lg[i][0];if(li[i]&&li[i].classList.contains('in')!==on)li[i].classList.toggle('in',on);}
    for(var j=0;j<S.ins.length;j++){var o2=R||t>=S.ins[j][0];if(ii[j]&&ii[j].classList.contains('in')!==o2)ii[j].classList.toggle('in',o2);}
    var q=S.q,n=R?q.length:Math.min(q.length,Math.floor(t/1000*CPS));if(n!==lastQ){lastQ=n;setT(qEl,q.slice(0,n));}
    var sent=R||t>q.length*1000/CPS+150&&t<q.length*1000/CPS+700;con.classList.toggle('sent',!!sent&&!R);}
  function setScene(k,user){k=(k+5)%5;if(k===cur&&!user)return;prev=cur;cur=k;tS=0;fadeT=R?FADE:0;lastQ=-1;
    tabs.forEach(function(b,i){var on=i===cur;b.classList.toggle('on',on);b.setAttribute('aria-selected',on);b.style.setProperty('--p','0%');});
    var S=SC[cur];setT('ciCapN','0'+(cur+1));setT('ciCapT',S.cap);setT('ciPh',S.ph);setT('ciLt',S.ft);setT('ciML',S.ml);lastM='';lastSt='';
    buildSide(cur);if(R)render();}
  function render(){var f=cv&&fitC(cv);if(!f)return;var c=f.c,w=f.w,h=f.h;c.clearRect(0,0,w,h);
    var t=R?5200:tS,fading=prev>=0&&fadeT<FADE;
    if(fading){var u=fadeT/FADE;c.globalAlpha=1-eo(Math.min(1,u*1.4));c.save();DRAW[prev](c,w,h,5200);c.restore();c.globalAlpha=1;c.save();c.globalAlpha=eo(u);}
    var kp=DRAW[cur](c,w,h,t);if(fading)c.restore();c.globalAlpha=1;
    if(kp[0]!==lastM){var was=lastM;setT(mvEl,kp[0]);if(was!==''&&was!=='—'&&was!=='…')bump(mvEl);lastM=kp[0];}
    var bb=Math.round(kp[1]*100);if(bb!==lastB&&mbEl){mbEl.style.transform='scaleX('+(bb/100)+')';lastB=bb;}
    if(kp[2]!==lastSt){con.classList.toggle('ok',kp[2]==='ok');setT('ciPh',kp[2]==='ok'?SC[cur].dn:SC[cur].ph);lastSt=kp[2];}
    sideAt(t);}
  var heroOn=loop(function(now){var dt=tLast?Math.min(64,now-tLast):16;tLast=now;
    if(!paused){tS+=dt;if(tabs[cur])tabs[cur].style.setProperty('--p',Math.min(100,tS/DUR*100).toFixed(1)+'%');if(tS>=DUR)setScene(cur+1);}
    if(fadeT<FADE)fadeT+=dt;
    if(!paused||fadeT<FADE+20)render();});
  if(hero&&cv){
    buildSide(0);setT('ciML',SC[0].ml);
    tabs.forEach(function(b,i){b.addEventListener('click',function(){setScene(i,true);if(R)render();});});
    if(R){render();addEventListener('resize',render);}
    else{
      var visH=false;XH.whenVisible(hero,function(v){visH=v;tLast=0;heroOn(v&&!d.hidden);});
      d.addEventListener('visibilitychange',function(){tLast=0;heroOn(visH&&!d.hidden);});
      var stg=$id('ciStage');stg.addEventListener('mouseenter',function(){paused=true;});stg.addEventListener('mouseleave',function(){paused=false;tLast=0;});
      stg.addEventListener('focusin',function(){paused=true;});stg.addEventListener('focusout',function(){paused=false;tLast=0;});
      addEventListener('resize',function(){render();});
      var sx=null,sy=null;
      scr.addEventListener('pointerdown',function(e){if(e.pointerType==='touch')return;sx=e.clientX;sy=e.clientY;});
      scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))setScene(cur+(dx<0?1:-1),true);});
      scr.addEventListener('touchstart',function(e){var p=e.touches[0];sx=p.clientX;sy=p.clientY;},{passive:true});
      scr.addEventListener('touchend',function(e){if(sx===null)return;var p=e.changedTouches[0],dx=p.clientX-sx,dy=p.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy)){setScene(cur+(dx<0?1:-1),true);paused=false;}},{passive:true});
      segEl.addEventListener('keydown',function(e){var k=e.key;if(k==='ArrowRight'){setScene(cur+1,true);tabs[cur].focus();e.preventDefault();}else if(k==='ArrowLeft'){setScene(cur-1,true);tabs[cur].focus();e.preventDefault();}});
    }
    new MutationObserver(function(){render();}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
  }

  /* ===== how it works · question → widget → schedule ===== */
  (function(){var fl=$id('ciFlow');if(!fl)return;var dg=$id('cfDots'),pk=[],stE=$$('.ci-sx'),Q='patch status by client',qE=$id('cfQ'),B=[[$id('cfB0'),150],[$id('cfB1'),110],[$id('cfB2'),170],[$id('cfB3'),80]],E=$id('cfE'),S=$id('cfS');
    for(var i=0;i<6;i++){var r=svg('rect',{width:14,height:10,rx:3},dg);if(i%3===1)r.setAttribute('class','o');pk.push(r);}
    var CYC=7500,lastStg=-1,lq=-1;
    function at(now){var p=(now%CYC)/CYC,stg=p<.33?0:p<.66?1:2;
      var n=Math.round(clamp(p/.25,0,1)*Q.length);if(n!==lq){lq=n;qE.textContent=Q.slice(0,n);}
      var bp=eio(seg(.33,.55,p));B.forEach(function(b,k){b[0].setAttribute('width',(b[1]*clamp(bp*1.2-k*.07,0,1)).toFixed(1));});
      S.setAttribute('opacity',(p>.55?1:0).toString());E.setAttribute('opacity',(p>.7?1:.25).toString());
      for(var i=0;i<pk.length;i++){var u=(p*3+i/pk.length)%1,x=lerp(272,708,u);pk[i].setAttribute('x',(x-7).toFixed(1));pk[i].setAttribute('y',(100+Math.sin(u*TAU+i)*4).toFixed(1));pk[i].setAttribute('opacity',(u<.05||u>.95||(x>362&&x<598)?0:.95).toString());}
      if(stg!==lastStg){lastStg=stg;stE.forEach(function(e,k){e.classList.toggle('lit',k===stg);});}}
    if(R)at(CYC*.9);else vis(fl,loop(at));})();

  /* ===== features · data sources → Cyber Intelligence → outputs ===== */
  (function(){var hb=$id('ciHub');if(!hb)return;var src=$id('hbSrc'),out=$id('hbOut'),dg=$id('hbDots'),pulse=$id('hbP'),core=$('.core',hb);
    var SRC=['Backup & DR','Security · EDR/XDR','Acronis RMM','PSA · service desk','Microsoft 365','Google Workspace'],OUT=['Dashboards','Scheduled reports','AI insights'];
    var mode='',paths=[],pk=[];
    function build(){var narrow=hb.clientWidth<560,m=narrow?'n':'w';if(m===mode)return;mode=m;src.innerHTML='';out.innerHTML='';dg.innerHTML='';paths=[];pk=[];
      var W,H,C,sp=[],op=[];
      if(!narrow){W=960;H=250;C=[480,125];SRC.forEach(function(s,i){sp.push([40,22+i*36.5,170,28]);});OUT.forEach(function(s,i){op.push([770,52+i*58,160,34]);});}
      else{W=360;H=520;C=[180,262];SRC.forEach(function(s,i){sp.push([12+(i%2)*174,14+Math.floor(i/2)*46,162,32]);});OUT.forEach(function(s,i){op.push([12+(i%2)*174+(i===2?87:0),392+Math.floor(i/2)*52,162,34]);});}
      hb.setAttribute('viewBox','0 0 '+W+' '+H);core.setAttribute('transform','translate('+C[0]+' '+C[1]+')');
      sp.forEach(function(r,i){var g=svg('g',{'class':'sn'},src);svg('rect',{x:r[0],y:r[1],width:r[2],height:r[3],rx:8},g);svg('circle',{cx:r[0]+13,cy:r[1]+r[3]/2,r:4},g);var t=svg('text',{x:r[0]+24,y:r[1]+r[3]/2+4},g);t.textContent=SRC[i];
        var a=narrow?[r[0]+r[2]/2,r[1]+r[3]]:[r[0]+r[2],r[1]+r[3]/2],b=narrow?[C[0]+(i%2?40:-40),C[1]-58]:[C[0]-96,C[1]+(i-2.5)*14];
        var dstr=narrow?'M'+a[0]+' '+a[1]+' C'+a[0]+' '+(a[1]+40)+' '+b[0]+' '+(b[1]-40)+' '+b[0]+' '+b[1]:'M'+a[0]+' '+a[1]+' C'+(a[0]+80)+' '+a[1]+' '+(b[0]-80)+' '+b[1]+' '+b[0]+' '+b[1];
        paths.push(svg('path',{d:dstr,'class':'wl'},src));});
      op.forEach(function(r,i){var g=svg('g',{'class':'on'},out);svg('rect',{x:r[0],y:r[1],width:r[2],height:r[3],rx:9},g);svg('circle',{cx:r[0]+14,cy:r[1]+r[3]/2,r:4},g);var t=svg('text',{x:r[0]+26,y:r[1]+r[3]/2+4},g);t.textContent=OUT[i];
        var a=narrow?[C[0],C[1]+58]:[C[0]+96,C[1]+(i-1)*20],b=narrow?[r[0]+r[2]/2,r[1]]:[r[0],r[1]+r[3]/2];
        var dstr=narrow?'M'+a[0]+' '+a[1]+' C'+a[0]+' '+(a[1]+30)+' '+b[0]+' '+(b[1]-30)+' '+b[0]+' '+b[1]:'M'+a[0]+' '+a[1]+' C'+(a[0]+70)+' '+a[1]+' '+(b[0]-70)+' '+b[1]+' '+b[0]+' '+b[1];
        paths.push(svg('path',{d:dstr,'class':'wl'},out));});
      paths.forEach(function(p,i){p._L=p.getTotalLength();var r=svg('rect',{width:10,height:7,rx:2},dg);if(i>=SRC.length)r.setAttribute('class','o');r._p=p;r._o=i*.37;pk.push(r);});}
    function at(now){if(!paths.length)return;var ns=SRC.length;
      for(var i=0;i<pk.length;i++){var r=pk[i],isOut=i>=ns,u=((now/(isOut?2600:3200))+r._o)%1,pt=r._p.getPointAtLength(u*r._p._L);r.setAttribute('x',(pt.x-5).toFixed(1));r.setAttribute('y',(pt.y-3.5).toFixed(1));r.setAttribute('opacity',(u<.04||u>.96?0:.95).toString());}
      var pu=(now%2200)/2200;pulse.setAttribute('r',(70+pu*40).toFixed(1));pulse.setAttribute('opacity',(1-pu).toFixed(2));}
    build();addEventListener('resize',function(){build();if(R)at(1800);});
    if(R)at(1800);else vis(hb,loop(at));})();

  /* ===== share · tenant hierarchy, own data only ===== */
  (function(){var tr=$id('ciTree');if(!tr)return;var L=$id('trL'),N=$id('trN'),D=$id('trD'),CC=['#0066FF','#FF8A00','#16a34a'],X=[90,260,430],nodes=[],paths=[],pk=[];
    svg('rect',{x:20,y:132,width:480,height:34,rx:10,'class':'tl2'},L);var ft=svg('text',{x:260,y:153,'class':'t3','text-anchor':'middle'},L);ft.textContent='tenant filter · role-based access';
    X.forEach(function(x,i){var p=svg('path',{d:'M260 72 C260 130 '+x+' 160 '+x+' 218','class':'tl2'},L);paths.push(p);
      var g=svg('g',{'class':'cn',transform:'translate('+x+' 250)'},N);var bx=svg('rect',{x:-72,y:-32,width:144,height:64,rx:12,'class':'box'},g);
      var t1=svg('text',{y:-6,'class':'t1'},g);t1.textContent='Client '+'ABC'[i];var t2=svg('text',{y:14,'class':'t3'},g);t2.textContent='own data only';
      var lk=svg('path',{d:'M50 -14 v-4 a6 6 0 0 1 12 0 v4 M47 -14 h18 v13 h-18 z','class':'lk',stroke:CC[i],opacity:'.25'},g);nodes.push({bx:bx,lk:lk});});
    paths.forEach(function(p,i){p._L=p.getTotalLength();for(var k=0;k<2;k++){var r=svg('rect',{width:14,height:10,rx:3},D);r._p=p;r._i=i;r._o=k*.5+i*.17;pk.push(r);}});
    function at(now){for(var j=0;j<pk.length;j++){var r=pk[j],u=((now/3000)+r._o)%1,pt=r._p.getPointAtLength(u*r._p._L);r.setAttribute('x',(pt.x-7).toFixed(1));r.setAttribute('y',(pt.y-5).toFixed(1));r.style.fill=pt.y>150?CC[r._i]:(dark()?'#7FB0FF':'#0B132B');r.setAttribute('opacity',(u<.03||u>.97?0:1).toString());}
      for(var i=0;i<3;i++){var ph=((now/3000)+i*.17)%.5*2,gl=ph>.9||ph<.1;nodes[i].bx.style.stroke=gl?CC[i]:'';nodes[i].lk.setAttribute('opacity',gl?'1':'.45');}}
    if(R)at(2900);else vis(tr,loop(at));})();

  /* ===== benefits · tab underline + issue heatmap ===== */
  (function(){var tb=$('.ci-tabs');if(!tb)return;var ul=$('.ci-ul',tb);
    function mv(){var b=$('button.on',tb);if(!b)return;ul.style.width=b.offsetWidth+'px';ul.style.transform='translateX('+b.offsetLeft+'px)';}
    $$('button',tb).forEach(function(b){b.addEventListener('click',function(){setTimeout(mv,0);});});mv();addEventListener('resize',mv);
    var hm=$id('ciHm');if(!hm)return;var cells=[];for(var i=0;i<25;i++){var e=d.createElement('i');hm.appendChild(e);cells.push(e);}
    var BAD=[[1,0,'r'],[2,2,'h'],[3,2,'h'],[1,3,'h'],[4,4,'h'],[2,1,'h']],lastPh=-1;
    function paint(ph){cells.forEach(function(e,k){var r=Math.floor(k/5),c2=k%5,s=null;BAD.forEach(function(b){if(b[0]===r&&b[1]===c2)s=b[2];});
      var cool=ph>=2&&s&&(r+c2)%2===0;e.className=s&&!cool?s:'';e.style.opacity=s&&!cool?(ph===0?'.35':'.9'):(.1+((r*3+c2*7)%5)*.05).toFixed(2);});}
    function at(now){var ph=Math.floor((now%7800)/2600);if(ph!==lastPh){lastPh=ph;paint(ph);}}
    if(R)paint(1);else vis(hm,loop(at));})();

  /* ===== magnetic primary CTA ===== */
  if(!R)$$('.ci-mag').forEach(function(b){b.addEventListener('mousemove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;b.style.transform='translate('+(x*8).toFixed(1)+'px,'+(y*6).toFixed(1)+'px)';});b.addEventListener('mouseleave',function(){b.style.transform='';});});

  /* ===== helpers for tools ===== */
  function segV(el){if(!el)return null;var b=$('button.on',el);return el.dataset.value||(b?b.getAttribute('data-v'):null);}
  function setSeg(el,v){if(!el)return;$$('button',el).forEach(function(b){var on=b.getAttribute('data-v')===v;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});el.dataset.value=v;}
  function num(id){var e=$id(id);return e?Math.max(0,Math.round(+e.value||0)):0;}
  function setNum(id,v){var e=$id(id);if(e)e.value=v;}
  function onIn(ids,fn){ids.forEach(function(id){var e=$id(id);if(!e)return;e.addEventListener('input',fn);e.addEventListener('change',fn);});}
  function segChange(ids,fn){ids.forEach(function(id){var e=$id(id);if(!e)return;e.addEventListener('change',fn);e.addEventListener('click',function(ev){if(ev.target.closest('button'))setTimeout(fn,0);});});}
  function goTo(id){var e=$id(id);if(e)window.scrollTo({top:e.getBoundingClientRect().top+scrollY-90,behavior:R?'auto':'smooth'});}

  /* ===== tool 1 · coverage quiz ===== */
  (function(){var box=$id('cqS');if(!box)return;
    var NAME={bk:'Acronis backup & DR',sec:'Acronis security',rmm:'Acronis RMM',psa:'Acronis PSA',m365:'Microsoft 365',gws:'Google Workspace',xrmm:"Other vendor's RMM",xpsa:"Other vendor's PSA"},NO={xrmm:1,xpsa:1};
    var G=$id('cqG'),lastP=-1;
    function calc(){var ch=$$('input:checked',box).map(function(i){return i.value;}),tot=ch.length,ok=ch.filter(function(v){return !NO[v];}).length,p=tot?Math.round(ok/tot*100):0;
      if(p!==lastP){setT('cqP',p+'%');bump($id('cqP'));lastP=p;}G.style.strokeDashoffset=(314.16*(1-p/100)).toFixed(1);
      $id('cqL').innerHTML=ch.map(function(v){return NO[v]?'<span class="no"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>'+NAME[v]+' · not combined yet</span>':'<span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'+NAME[v]+'</span>';}).join('');
      var T=+segV($id('cqT')),H=segV($id('cqH')),Q=segV($id('cqQ')),r,dsc;
      if(!tot){r='Tick at least one tool';dsc='The score shows how much of what you run Cyber Intelligence can report on in early access.';}
      else if(p>=80){r='Strong fit — start with the Overview dashboard';dsc='Almost all of your data is Acronis-native, so dashboards and reports can cover it today.';}
      else if(p>=50){r='Good fit — report on Acronis data now';dsc='Start with your Acronis services; third-party RMM or PSA data is not combined in early access, so keep those reports separate for now.';}
      else{r='Partial fit — consolidate first';dsc='Most of your tools sit outside Acronis. Moving RMM or ticketing onto Acronis would bring them into the same reports — XcellHost can plan that.';}
      if(tot){if(T===1)dsc+=' For a single company, XcellHost managed reports or a tenant per entity may suit better.';else dsc+=' With '+(T===10?'2–20':T===50?'21–100':'100+')+' clients, scheduled per-client reports are the quickest win.';
        if(H==='xl')dsc+=' Replacing spreadsheet exports saves the most time.';else if(H==='bi')dsc+=' You may be able to retire a separate BI subscription — check terms on your quote.';
        if(Q!=='n')dsc+=' Use the QBR template for '+(Q==='y'?'every':'selected')+' client reviews.';}
      setT('cqR',r);setT('cqD',dsc);}
    box.addEventListener('change',calc);segChange(['cqT','cqH','cqQ'],calc);calc();
    $id('cqGo').addEventListener('click',function(){var T=+segV($id('cqT'))||8;setNum('zT',T===10?8:T);if(window.ciSize)window.ciSize(true);goTo('sizing');});})();

  /* ===== tool 2 · sizing → quote ===== */
  var PR={W:349,S:1499,V:999,M:149},ONB=24999,CC4=['#0066FF','#0B132B','#7FB0FF','#16a34a'];
  (function(){if(!$id('zT'))return;
    function calc(fl){var T=Math.max(1,num('zT')),Rp=num('zR'),W=num('zW'),S=num('zS'),V=num('zV'),M=num('zM'),Q=+segV($id('zQ'));
      var wl=W+S+V+M,rep=T*Rp,qbr=Math.round(T*Q*4),mon=W*PR.W+S*PR.S+V*PR.V+M*PR.M,onb=ONB;
      setT('zoW',wl.toLocaleString('en-IN'));setT('zoR',String(rep));setT('zoQ',String(qbr));setT('zoL',inr(mon));setT('zoO',inr(onb));
      var parts=[W*PR.W,S*PR.S,V*PR.V,M*PR.M];$id('zoB').innerHTML=mon?parts.map(function(v,i){return v?'<span style="width:'+(v/mon*100).toFixed(1)+'%;background:'+CC4[i]+'"></span>':'';}).join(''):'';
      var plan=T>=20||rep>=40?'mgd':'onb';$id('zoP').dataset.plan=plan;
      setT('zoP',plan==='mgd'?'Suggested: Managed reporting — XcellHost runs the monthly cycle for '+T+' tenants':'Suggested: Guided onboarding for '+T+' tenant'+(T>1?'s':''));
      if(fl===true)['zoW','zoR','zoQ','zoL','zoO'].forEach(function(i){XH.flash($id(i));});}
    window.ciSize=calc;onIn(['zT','zR','zW','zS','zV','zM'],calc);segChange(['zQ'],calc);calc();
    $id('zGo').addEventListener('click',function(){setNum('qT',Math.max(1,num('zT')));setNum('qW',num('zW'));setNum('qS',num('zS'));setNum('qV',num('zV'));setNum('qM',num('zM'));setSeg($id('qP'),$id('zoP').dataset.plan||'onb');if(window.ciCalc)window.ciCalc(true);goTo('configure');});})();

  /* ===== configurator + cart ===== */
  (function(){if(!$id('configure'))return;var lines=[];
    var WN=[['qW','Workstation',PR.W],['qS','Server',PR.S],['qV','Virtual machine',PR.V],['qM','Microsoft 365 seat',PR.M]],PN={lic:'Acronis services',onb:'Guided onboarding',mgd:'Managed reporting'};
    function calc(fl){var plan=segV($id('qP'))||'onb',T=Math.max(1,num('qT')),sub=0,mix=[];lines=[];
      WN.forEach(function(x,i){var n=num(x[0]);if(n>0){lines.push({key:'aci-'+x[0],name:'Acronis '+x[1]+' (Essentials)',sub:'per '+x[1].toLowerCase()+' / month · indicative',price:x[2],qty:n,lab:n.toLocaleString('en-IN')+' × '+x[1]+(n>1?'s':'')+' · '+inr(x[2])});sub+=x[2]*n;mix.push([x[2]*n,CC4[i]]);}});
      if(plan!=='lic'){lines.push({key:'aci-onboarding',name:'Cyber Intelligence onboarding by XcellHost',sub:'one-time · tenants, roles, dashboards & reports · indicative',price:ONB,qty:1,lab:'Onboarding · one-time · '+T+' tenant'+(T>1?'s':'')});sub+=ONB;mix.push([ONB,'#FF8A00']);}
      $id('qList').innerHTML=lines.map(function(l){return '<li><span>'+l.lab+'</span><b>'+inr(l.price*l.qty)+'</b></li>';}).join('')||'<li><span>Add workloads to see an estimate</span><b>—</b></li>';
      $id('qBar').innerHTML=sub?mix.map(function(m){return '<span style="width:'+(m[0]/sub*100).toFixed(1)+'%;background:'+m[1]+'"></span>';}).join(''):'';
      setT('qName',PN[plan]+' · '+T+' tenant'+(T>1?'s':''));setT('qSub',inr(sub));setT('qGst',inr(sub*.18));setT('qTot',inr(sub*1.18));setT('qMg',plan==='mgd'?'On quote · per workload':'Not selected');
      if(fl===true)['qSub','qGst','qTot','qName'].forEach(function(i){XH.flash($id(i));});}
    window.ciCalc=calc;onIn(['qT','qW','qS','qV','qM'],calc);segChange(['qP'],calc);calc();
    $$('[data-plan]').forEach(function(b){b.addEventListener('click',function(){setSeg($id('qP'),b.getAttribute('data-plan'));calc(true);goTo('configure');});});
    $id('oAdd').addEventListener('click',function(){if(!lines.length){XH.toast('Add at least one workload first');return;}lines.forEach(function(l){XH.cart.add({key:l.key,name:l.name,sub:l.sub,price:l.price,qty:l.qty});});});})();
})();

