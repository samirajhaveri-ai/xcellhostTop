
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,d=document;
  var DPR=Math.min(2,window.devicePixelRatio||1);
  function $id(i){return d.getElementById(i);}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function seg(a,b,t){return clamp((t-a)/(b-a),0,1);}
  function eo(t){return 1-Math.pow(1-t,3);}
  function dark(){return d.documentElement.getAttribute('data-theme')==='dark';}
  function setT(id,v){var e=$id(id);if(e&&e.textContent!==String(v)){e.textContent=v;return true;}return false;}
  function esc(s){return String(s).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c];});}
  function num(n){return Math.round(n).toLocaleString('en-IN');}
  var ICO={check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'};

  /* =====================================================================
     DATA — plan sheet mirrored 2026-11-17 (INR, billed annually):
     Free ₹0 · 30 credits · 1 seat | Starter ₹1,875/mo = ₹22,500/yr · 3 seats · 3,000 credits/yr
     Growth ₹3,600/mo = ₹43,200/yr · 5 seats · 7,200 credits/yr | Scale custom · 10,000+ credits/yr
     Email reveal 1 credit · phone reveal 5 credits. USD at ₹95.17/US$ (26 Oct 2026, as github-services).
     Setup services are XcellHost indicative prices (*).
     ===================================================================== */
  var PLAN={st:{n:'XcellEnrich Starter · annual',s:'3 seats · 3,000 credits a year',p:22500,c:3000},gr:{n:'XcellEnrich Growth · annual',s:'5 seats · 7,200 credits a year',p:43200,c:7200}};
  var ADD={cfCrm:['CRM connection and field mapping',14999],cfCmp:['Compliance pack · opt-out, notices, retention',9999],cfTrn:['Team onboarding session',4999],cfApi:['API integration support · 8 hours',19999]};
  var CR_EMAIL=1,CR_PHONE=5;

  /* ---------- one rAF loop ---------- */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v&&!raf)raf=requestAnimationFrame(frame);};}

  /* ---------- canvas helpers ---------- */
  function fit(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function TH(){return dark()?{bg:'#0B1A38',card:'#10244A',card2:'#0E1F42',ink:'#EAF1FF',mut:'#93A4C4',line:'#243A66',bl:'#7FB0FF',blF:'#0066FF',blS:'rgba(0,102,255,.26)',or:'#FF8A00',orS:'rgba(255,138,0,.22)',gr:'#16a34a',grT:'#5fd68a',grS:'rgba(22,163,74,.24)',rd:'#c0392b',rdT:'#ff8a7e',rdS:'rgba(192,57,43,.28)',trk:'rgba(255,255,255,.10)'}
    :{bg:'#FFFFFF',card:'#F4F7FC',card2:'#EAF1FF',ink:'#0B132B',mut:'#5B6782',line:'#D3DCEB',bl:'#0066FF',blF:'#0066FF',blS:'rgba(0,102,255,.12)',or:'#FF8A00',orS:'rgba(255,138,0,.14)',gr:'#16a34a',grT:'#16a34a',grS:'rgba(22,163,74,.13)',rd:'#c0392b',rdT:'#c0392b',rdS:'rgba(192,57,43,.12)',trk:'rgba(11,19,43,.08)'};}
  var SANS='"Sora",system-ui,sans-serif',MONO='"IBM Plex Mono",ui-monospace,monospace',BODY='"IBM Plex Sans",system-ui,sans-serif';
  function F(px,wt,fam){return (wt||600)+' '+px+'px '+(fam||SANS);}
  function rr(c,x,y,w,h,r){r=Math.min(r,h/2,w/2);c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function box(c,x,y,w,h,r,fill,stroke){rr(c,x,y,w,h,r);if(fill){c.fillStyle=fill;c.fill();}if(stroke){c.strokeStyle=stroke;c.lineWidth=1;c.stroke();}}
  function txt(c,s,x,y,f,col,al){c.font=f;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  function clip(c,s,maxW){if(c.measureText(s).width<=maxW)return s;while(s.length>1&&c.measureText(s+'…').width>maxW)s=s.slice(0,-1);return s+'…';}
  function txtC(c,s,x,y,f,col,maxW,al){c.font=f;txt(c,clip(c,s,maxW),x,y,f,col,al);}
  function tick(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2;c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(x-s*.5,y);c.lineTo(x-s*.12,y+s*.38);c.lineTo(x+s*.55,y-s*.4);c.stroke();}
  function cross(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2;c.lineCap='round';c.beginPath();c.moveTo(x-s*.4,y-s*.4);c.lineTo(x+s*.4,y+s*.4);c.moveTo(x+s*.4,y-s*.4);c.lineTo(x-s*.4,y+s*.4);c.stroke();}
  function pill(c,s,x,y,f,fg,bg,al){c.font=f;var w=c.measureText(s).width+14,h=18,x0=al==='right'?x-w:x;box(c,x0,y-h/2,w,h,9,bg);txt(c,s,x0+7,y,f,fg);return w;}

  var ROWS=[['Priya Mehta','Acme Pumps','p.mehta@acmepumps.in','+91 98•• ••210'],['Rahul Iyer','Delta Agro','rahul@deltaagro.co.in','+91 97•• ••584'],['Sana Khan','Nova Labs','sana.k@novalabs.in','—'],['Vikram Rao','Indus Fab','v.rao@indusfab.com','+91 99•• ••037'],['Neha Joshi','Kite Logistics','—','+91 90•• ••662']];
  var chip=['',''];

  /* ----- table used by scenes 1 and 5 ----- */
  function table(c,x,y,w,T,t,fill,rowsIn,hideCol){
    var sm=w<400,cols=sm?[0,.36,1]:[0,.27,.5,.8,1],rh=sm?32:30,hd=24;
    box(c,x,y,w,hd+rh*5+4,10,T.bg,T.line);
    box(c,x+1,y+1,w-2,hd,9,T.card2);
    var heads=sm?['Name','Email · Phone']:['Name','Company','Work email','Phone'];
    for(var k=0;k<heads.length;k++)txt(c,heads[k].toUpperCase(),x+10+w*cols[k],y+hd/2+1,F(8.5,600,MONO),T.mut);
    for(var i=0;i<5;i++){var a=clamp(rowsIn(i),0,1);if(a<=0)continue;c.globalAlpha=a;var ry=y+hd+i*rh+(1-a)*8,cy=ry+rh/2,r=ROWS[i];
      if(i)c.fillStyle=T.line,c.fillRect(x+8,ry,w-16,1);
      if(sm){txtC(c,r[0],x+10,cy-6,F(10.5,600),T.ink,w*.34);txtC(c,r[1],x+10,cy+7,F(9,500,BODY),T.mut,w*.34);
        var fe=fill(i,0),fp=fill(i,1),ex=x+10+w*cols[1];
        cell(c,r[2],ex,cy-6,w*.6,fe,T,9.5);cell(c,r[3],ex,cy+7,w*.6,fp,T,9.5);}
      else{txtC(c,r[0],x+10,cy,F(11,600),T.ink,w*.25);txtC(c,r[1],x+10+w*cols[1],cy,F(10.5,500,BODY),T.mut,w*.21);
        cell(c,r[2],x+10+w*cols[2],cy,w*.29,fill(i,0),T,10);cell(c,r[3],x+10+w*cols[3],cy,w*.19,fill(i,1),T,10);}
      c.globalAlpha=1;}
    return hd+rh*5+4;}
  function cell(c,s,x,y,mw,st,T,fs){ // st: 0 empty, 0..1 filling, 1 filled, -1 not found, -2 suppressed
    if(st===-1||s==='—'&&st>0){txt(c,'not found',x,y,F(fs-.5,500,MONO),T.mut);return;}
    if(st===-2){c.font=F(fs-.5,500,MONO);var sw=Math.min(mw,c.measureText(s).width);txtC(c,s,x,y,F(fs-.5,500,MONO),T.rdT,mw);c.strokeStyle=T.rdT;c.lineWidth=1.2;c.beginPath();c.moveTo(x,y);c.lineTo(x+sw,y);c.stroke();return;}
    if(st<=0){c.setLineDash([3,3]);c.strokeStyle=T.line;c.lineWidth=1;rr(c,x-3,y-8,Math.min(mw,92),16,5);c.stroke();c.setLineDash([]);return;}
    var n=Math.max(1,Math.round(s.length*clamp(st,0,1)));txtC(c,s.slice(0,n),x,y,F(fs-.5,500,MONO),st>=1?T.ink:T.bl,mw);}

  /* ----- scene 1 · upload a list with gaps ----- */
  function s1(c,w,h,T,t){
    var pad=16,sm=w<400;
    var a=eo(seg(0,700,t)),fy=pad+6-(1-a)*20;c.globalAlpha=a;
    box(c,pad,fy,w-pad*2,46,12,T.card,T.line);
    box(c,pad+10,fy+9,22,28,4,T.blS);txt(c,'CSV',pad+21,fy+23,F(7.5,700,MONO),T.bl,'center');
    txtC(c,'leads_q4.csv · 24 rows · 2 columns to fill',pad+42,fy+16,F(sm?10:11,600),T.ink,w-pad*2-60);
    var p=eo(seg(800,2100,t));box(c,pad+42,fy+30,w-pad*2-60,5,2.5,T.trk);box(c,pad+42,fy+30,Math.max(5,(w-pad*2-60)*p),5,2.5,p>=1?T.gr:T.blF);
    c.globalAlpha=1;
    table(c,pad,pad+66,w-pad*2,T,t,function(){return 0;},function(i){return seg(2000+i*260,2400+i*260,t);});
    if(t>3600){var b=eo(seg(3600,4100,t));c.globalAlpha=b;pill(c,'18 emails missing',pad,h-pad-6,F(9.5,600,MONO),T.or,T.orS);pill(c,'21 phones missing',w-pad,h-pad-6,F(9.5,600,MONO),T.or,T.orS,'right');c.globalAlpha=1;}
    chip=['24 rows loaded','18 emails · 21 phones missing'];
  }

  /* ----- scene 2 · sequential provider lookup ----- */
  function s2(c,w,h,T,t){
    var pad=16,sm=w<400,cw=sm?w-pad*2:w*.36,cx=pad,cy=pad+4;
    box(c,cx,cy,cw,sm?54:110,12,T.card,T.line);
    txt(c,'CONTACT',cx+12,cy+15,F(8.5,600,MONO),T.mut);
    txtC(c,'Priya Mehta',cx+12,cy+33,F(sm?13:14,700),T.ink,cw-24);
    if(sm)txtC(c,'Head of Purchase · Acme Pumps',cx+110,cy+33,F(9.5,500,BODY),T.mut,cw-122);
    else{txtC(c,'Head of Purchase',cx+12,cy+52,F(10,500,BODY),T.mut,cw-24);txtC(c,'Acme Pumps · Pune',cx+12,cy+68,F(10,500,BODY),T.mut,cw-24);
      pill(c,'needs email',cx+12,cy+91,F(9,600,MONO),T.or,T.orS);}
    var lx=sm?pad:cx+cw+18,lw=sm?w-pad*2:w-lx-pad,ly=sm?cy+66:cy,lh=sm?34:38,gap=sm?6:8;
    var P=[['Provider A',0],['Provider B',0],['Provider C',1],['Provider D',2]];
    for(var i=0;i<4;i++){var y=ly+i*(lh+gap),st=P[i][1],t0=500+i*800,t1=t0+700,act=t>=t0&&(i<3?true:false),pr=seg(t0,t1,t);
      var on=i<3&&t>=t0,done=i<3&&t>=t1,skip=i===3&&t>2900;
      box(c,lx,y,lw,lh,10,on?T.bg:T.card,on&&!done?T.blF:T.line);
      if(on&&!done){box(c,lx+1,y+1,Math.max(8,(lw-2)*pr),lh-2,9,T.blS);}
      txt(c,P[i][0],lx+12,y+lh/2,F(sm?10.5:11,600),skip?T.mut:T.ink);
      var rx=lx+lw-12;
      if(done&&st===0){cross(c,rx-6,y+lh/2,9,T.rdT);txt(c,'no match · 0 cr',rx-18,y+lh/2,F(9,500,MONO),T.mut,'right');}
      else if(done&&st===1){tick(c,rx-6,y+lh/2,10,T.grT);txt(c,'match',rx-18,y+lh/2,F(9,600,MONO),T.grT,'right');}
      else if(skip){txt(c,'not needed',rx,y+lh/2,F(9,500,MONO),T.mut,'right');}
      else if(on){txt(c,'asking…',rx,y+lh/2,F(9,500,MONO),T.bl,'right');}
      if(i<3&&on&&!done){var py=y+lh/2,px=lx+8+(lw-16)*pr;c.beginPath();c.arc(px,py,3.5,0,7);c.fillStyle=T.or;c.fill();}
    }
    var fy=ly+4*(lh+gap)+(sm?2:10);
    if(t>2900){var a=eo(seg(2900,3300,t));c.globalAlpha=a;box(c,pad,fy,w-pad*2,36,10,T.grS);
      txt(c,'WORK EMAIL',pad+12,fy+18,F(8.5,600,MONO),T.grT);
      var s='p.mehta@acmepumps.in',n=Math.round(s.length*seg(3200,4200,t));txtC(c,s.slice(0,Math.max(1,n)),pad+(sm?86:96),fy+18,F(sm?10.5:11.5,600,MONO),T.ink,w-pad*2-(sm?96:110));c.globalAlpha=1;}
    chip=t>2900?['Found at provider 3','2 misses · 0 credits']:['Looking up in sequence','Stops at the first match'];
  }

  /* ----- scene 3 · email checks ----- */
  function s3(c,w,h,T,t){
    var pad=16,sm=w<400;
    box(c,pad,pad+4,w-pad*2,48,12,T.card,T.line);
    txt(c,'CHECKING',pad+12,pad+19,F(8.5,600,MONO),T.mut);
    txtC(c,'p.mehta@acmepumps.in',pad+12,pad+37,F(sm?12:13.5,700,MONO),T.ink,w-pad*2-24);
    var CK=[['Syntax','format and characters'],['Domain','domain exists · mail records'],['Mailbox','server accepts the address'],['Catch-all test','domain does not accept everything']];
    var y0=pad+66,rh=sm?40:42;
    for(var i=0;i<4;i++){var t0=400+i*800,p=seg(t0,t0+650,t),y=y0+i*(rh+6);
      box(c,pad,y,w-pad*2,rh,10,T.bg,p>=1?T.grS:T.line);
      var cx=pad+20,cyy=y+rh/2;c.beginPath();c.arc(cx,cyy,9,0,7);c.strokeStyle=p>=1?T.gr:T.line;c.lineWidth=2;c.stroke();
      if(p>0&&p<1){c.beginPath();c.arc(cx,cyy,9,-Math.PI/2,-Math.PI/2+Math.PI*2*p);c.strokeStyle=T.blF;c.stroke();}
      if(p>=1)tick(c,cx,cyy,9,T.grT);
      txt(c,CK[i][0],pad+38,cyy-(sm?7:0),F(sm?11:12,600),T.ink);
      if(sm)txtC(c,CK[i][1],pad+38,cyy+8,F(9,500,BODY),T.mut,w-pad*2-50);
      else txtC(c,CK[i][1],w-pad-12,cyy,F(10,500,BODY),T.mut,(w-pad*2)*.55,'right');}
    var fy=y0+4*(rh+6)+4;
    if(t>3700){var a=eo(seg(3700,4200,t));c.globalAlpha=a;c.save();c.translate(w/2,fy+16);c.scale(.85+.15*a,.85+.15*a);
      box(c,-70,-15,140,30,15,T.gr);txt(c,'VALID · 1 CREDIT',0,1,F(10.5,700,MONO),'#fff','center');c.restore();c.globalAlpha=1;}
    chip=t>3700?['Email valid','4 of 4 checks passed']:['Checking the email','Before any credit is used'];
  }

  /* ----- scene 4 · phone ownership + opt-out screen ----- */
  function s4(c,w,h,T,t){
    var pad=16,sm=w<400,half=sm?w-pad*2:(w-pad*2-14)/2;
    // left: phone ownership
    var x=pad,y=pad+4,bh=sm?92:150;
    box(c,x,y,half,bh,12,T.card,T.line);
    txt(c,'PHONE OWNER',x+12,y+15,F(8.5,600,MONO),T.mut);
    var a=eo(seg(200,900,t));
    txtC(c,'Priya Mehta',x+12,y+36,F(12,700),T.ink,half*.5);
    txt(c,'+91 98•• ••210',x+half-12,y+36,F(10.5,600,MONO),T.ink,'right');
    var ly=sm?y+58:y+70,p=seg(900,2000,t);
    c.strokeStyle=T.line;c.lineWidth=2;c.beginPath();c.moveTo(x+12,ly);c.lineTo(x+half-12,ly);c.stroke();
    c.strokeStyle=p>=1?T.gr:T.blF;c.beginPath();c.moveTo(x+12,ly);c.lineTo(x+12+(half-24)*p*a,ly);c.stroke();
    if(p>=1){if(sm){tick(c,x+18,y+76,9,T.grT);txt(c,'Name matches the line holder',x+30,y+76,F(10,600,BODY),T.grT);}
      else{box(c,x+12,y+90,half-24,44,10,T.grS);tick(c,x+26,y+112,10,T.grT);txtC(c,'Name matches',x+40,y+105,F(11,700),T.grT,half-60);txtC(c,'the line holder',x+40,y+120,F(10,500,BODY),T.mut,half-60);}}
    // right: opt-out screen
    var rx=sm?pad:pad+half+14,ry=sm?y+bh+10:y,rh2=sm?h-ry-pad-30:bh;
    box(c,rx,ry,half,rh2,12,T.bg,T.line);
    txt(c,'OPT-OUT LIST',rx+12,ry+15,F(8.5,600,MONO),T.mut);
    var L=[['Priya Mehta',0],['Rahul Iyer',1],['Vikram Rao',0]],sy=ry+30,rr2=sm?24:30;
    for(var i=0;i<3;i++){var t0=2100+i*600,q=seg(t0,t0+450,t),yy=sy+i*rr2+rr2/2;
      if(t<t0-100){txt(c,L[i][0],rx+12,yy,F(10.5,600),T.mut);continue;}
      if(q<1){box(c,rx+6,yy-rr2/2+2,half-12,rr2-4,7,T.blS);txt(c,L[i][0],rx+12,yy,F(10.5,600),T.ink);txt(c,'screening',rx+half-12,yy,F(9,500,MONO),T.bl,'right');continue;}
      if(L[i][1]){box(c,rx+6,yy-rr2/2+2,half-12,rr2-4,7,T.rdS);c.font=F(10.5,600);var tw=c.measureText(L[i][0]).width;txt(c,L[i][0],rx+12,yy,F(10.5,600),T.rdT);c.strokeStyle=T.rdT;c.lineWidth=1.3;c.beginPath();c.moveTo(rx+12,yy);c.lineTo(rx+12+tw,yy);c.stroke();txt(c,'opted out',rx+half-12,yy,F(9,600,MONO),T.rdT,'right');}
      else{txt(c,L[i][0],rx+12,yy,F(10.5,600),T.ink);tick(c,rx+half-18,yy,9,T.grT);}}
    if(t>4100){var b=eo(seg(4100,4600,t));c.globalAlpha=b;txtC(c,'Calls and SMS only from registered headers or the 140 series',w/2,h-pad-8,F(sm?9:10,500,BODY),T.mut,w-pad*2,'center');c.globalAlpha=1;}
    chip=t>3400?['1 contact suppressed','Never revealed or exported']:['Phone + opt-out check','Before delivery'];
  }

  /* ----- scene 5 · deliver to CRM / sheet / API ----- */
  function s5(c,w,h,T,t){
    var pad=16,sm=w<400;
    var D=[['CRM'],['Sheet'],['API']],dw=sm?(w-pad*2-16)/3:w*.25,dx=sm?pad:w-pad-dw,dh=sm?44:52;
    var tw=sm?w-pad*2:w-pad*2-dw-28,ty=pad+4;
    var tb=table(c,pad,ty,tw,T,t,function(i,k){var r=ROWS[i];if(i===1)return -2;if(k===0&&r[2]==='—')return -1;if(k===1&&r[3]==='—')return -1;return 1;},function(){return 1;});
    var dy0=sm?ty+tb+12:ty+8;
    var cnt=[0,0,0];
    for(var i=0;i<3;i++){var bx=sm?pad+i*(dw+8):dx,by=sm?dy0:dy0+i*(dh+12);
      var got=Math.min(22,Math.floor(22*seg(700+i*250,3600+i*250,t)));cnt[i]=got;
      box(c,bx,by,dw,dh,10,T.card,got>=22?T.gr:T.line);
      txt(c,D[i][0],bx+10,by+(sm?14:17),F(sm?10:11,700),T.ink);
      txt(c,String(got),bx+dw-10,by+dh-(sm?13:16),F(sm?14:17,800),got>=22?T.grT:T.bl,'right');
      txt(c,'rows',bx+10,by+dh-(sm?12:15),F(8.5,500,MONO),T.mut);
      if(!R&&t>600&&t<4000){var k=((t+i*330)%900)/900,sx=sm?bx+dw/2:pad+tw,sy=sm?ty+tb:ty+40+((i*37+Math.floor(t/900)*53)%110),ex=sm?bx+dw/2:bx,ey=sm?by:by+dh/2;
        var px=sx+(ex-sx)*eo(k),py=sy+(ey-sy)*eo(k);c.globalAlpha=1-k*.5;c.beginPath();c.arc(px,py,3,0,7);c.fillStyle=T.or;c.fill();c.globalAlpha=1;}}
    var my=sm?dy0+dh+12:ty+tb+12,mw=w-pad*2,u=Math.round(48*seg(600,3900,t));
    box(c,pad,my,mw,sm?40:34,10,T.card2);
    txtC(c,sm?'18 emails ×1 + 6 phones ×5':'Credits: 18 emails × 1 + 6 phones × 5',pad+12,my+(sm?20:17),F(sm?9.5:10.5,500,MONO),T.mut,mw-90);
    txt(c,u+' cr',pad+mw-12,my+(sm?20:17),F(sm?13:14,800),T.ink,'right');
    chip=t>3600?['22 contacts delivered','48 credits used · 1 suppressed']:['Delivering','CRM · sheet · API'];
  }

  var SCN=[s1,s2,s3,s4,s5],DUR=5500;
  var FILES=['leads_q4.csv','priya.mehta · lookup','p.mehta@acmepumps.in','+91 98•• ••210','delivery · 22 contacts'];
  var STEP=['1 / 5 · Upload','2 / 5 · Lookup','3 / 5 · Email checks','4 / 5 · Phone & opt-out','5 / 5 · Deliver'];
  var CAPS=['Upload a list with gaps','Ask providers in turn until one matches','Check the email before you pay','Match the phone, screen the opt-out list','Send to CRM, sheet or API'];

  (function(){
    var hero=$id('deHero'),scr=$id('deScr'),cv=$id('deCv');if(!scr||!cv)return;
    var cur=0,el=0,last=0,paused=false,hover=false,hidden=true;
    var dots=$$('#deDots button'),pz=$id('dePz');
    function paint(tm){var f=fit(cv);if(!f)return;var T=TH(),c=f.c;c.clearRect(0,0,f.w,f.h);c.fillStyle=T.bg;c.fillRect(0,0,f.w,f.h);SCN[cur](c,f.w,f.h,T,tm);
      var ch=setT('deChipT',chip[0]);ch=setT('deChipS',chip[1])||ch;if(ch&&!R){var e=$id('deChip');e.classList.remove('sw');void e.offsetWidth;e.classList.add('sw');}}
    function labels(){setT('deFile',FILES[cur]);setT('deStep',STEP[cur]);setT('deCap',CAPS[cur]);
      dots.forEach(function(b,i){b.classList.toggle('on',i===cur);b.classList.toggle('done',i<cur);b.setAttribute('aria-selected',i===cur);var ii=$('i',b);if(ii)ii.style.setProperty('--p',i===cur&&R?1:0);});}
    function go(k){cur=(k+5)%5;el=0;labels();paint(R?DUR:0);}
    function tickF(now){if(!last)last=now;var dt=Math.min(64,now-last);last=now;if(!(paused||hover))el+=dt;if(el>=DUR){go(cur+1);return;}paint(el);var ii=$('i',dots[cur]);if(ii)ii.style.setProperty('--p',(el/DUR).toFixed(3));}
    var run=loop(tickF);
    function setRun(){var on=!R&&!hidden;if(on)last=0;run(on);}
    dots.forEach(function(b){b.addEventListener('click',function(){go(+b.getAttribute('data-k'));});});
    pz.addEventListener('click',function(){paused=!paused;pz.classList.toggle('paused',paused);pz.setAttribute('aria-label',paused?'Play scenes':'Pause scenes');});
    var stage=$id('deStage');stage.addEventListener('mouseenter',function(){hover=true;});stage.addEventListener('mouseleave',function(){hover=false;});
    var sx=null;
    scr.addEventListener('pointerdown',function(e){if(e.pointerType==='mouse')sx=e.clientX;});
    scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));});
    scr.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});
    scr.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));});
    labels();
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){paint(R?DUR:el);});
    if(R){pz.hidden=true;paint(DUR);addEventListener('resize',function(){paint(DUR);});}
    else{paint(0);XH.whenVisible(hero,function(v){hidden=!v;setRun();});addEventListener('resize',function(){paint(el);});}
    new MutationObserver(function(){paint(R?DUR:el);}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
    window.__aoHero=window.__deHero={go:go,pause:function(p){paused=p;},seek:function(t){el=t;paint(t);}};
  })();

  /* =====================================================================
     PLANS · billing toggle
     ===================================================================== */
  (function(){
    var sg=$id('deBill');if(!sg)return;
    function upd(){var m=(sg.dataset.value||'y')==='m';
      $$('#plans [data-y]').forEach(function(e){e.innerHTML=e.getAttribute(m?'data-m':'data-y');});
      setT('deBillN',m?'No monthly price is published. Monthly billing is quoted on request.*':'Prices shown per month, billed once a year.');}
    sg.addEventListener('change',upd);$$('button',sg).forEach(function(b){b.addEventListener('click',function(){setTimeout(upd,0);});});
  })();

  /* =====================================================================
     CONFIGURE
     ===================================================================== */
  (function(){
    var sg=$id('cfPlan'),q=$id('cfYrs');if(!sg)return;
    function plan(){return PLAN[sg.dataset.value||'st']||PLAN.st;}
    function n(){var v=Math.round(+q.value||1);return clamp(v,1,20);}
    function lines(){var p=plan(),L=[{key:'de-plan-'+(sg.dataset.value||'st'),name:p.n,sub:p.s+' · indicative',price:p.p,qty:n()}];
      Object.keys(ADD).forEach(function(id){var e=$id(id);if(e&&e.checked)L.push({key:'de-'+id,name:ADD[id][0],sub:'One-time · indicative*',price:ADD[id][1],qty:1});});return L;}
    function calc(){var L=lines(),sub=0,h='';L.forEach(function(l){sub+=l.price*l.qty;h+='<div class="crow"><span>'+esc(l.name)+(l.qty>1?' × '+l.qty:'')+'</span><b>'+XH.inr(l.price*l.qty)+'</b></div>';});
      var gst=Math.round(sub*0.18);h+='<div class="crow"><span>GST 18%</span><b>'+XH.inr(gst)+'</b></div>';
      $id('cfRows').innerHTML=h;setT('cfTot',XH.inr(sub+gst));setT('cfName',(sg.dataset.value==='gr'?'Growth':'Starter'));
      setT('cfSub','first year, incl. 18% GST · '+XH.inr(sub)+' before GST');}
    sg.addEventListener('change',calc);$$('button',sg).forEach(function(b){b.addEventListener('click',function(){setTimeout(calc,0);});});
    q.addEventListener('input',calc);q.addEventListener('change',function(){q.value=n();calc();});
    Object.keys(ADD).forEach(function(id){var e=$id(id);if(e)e.addEventListener('change',calc);});
    $id('oAdd').addEventListener('click',function(){lines().forEach(function(l){XH.cart.add(l);});});
    $$('[data-pick]').forEach(function(a){a.addEventListener('click',function(){var b=$('button[data-v="'+a.getAttribute('data-pick')+'"]',sg);if(b)b.click();});});
    calc();
  })();

  /* =====================================================================
     TOOLS · credit estimator + time saved
     ===================================================================== */
  function val(id){return +$id(id).value;}
  (function(){
    if(!$id('ceRec'))return;
    function run(){var rec=val('ceRec'),em=val('ceEm')/100,ph=val('cePh')/100,fr=val('ceFr')/100;
      setT('ceRecV',num(rec));setT('ceEmV',Math.round(em*100)+'%');setT('cePhV',Math.round(ph*100)+'%');setT('ceFrV',Math.round(fr*100)+'%');
      var mo=rec*fr*(em*CR_EMAIL+ph*CR_PHONE),yr=mo*12;
      setT('ceMo',num(mo));setT('ceYr',num(yr));
      var pl,note;
      if(yr<=30){pl='Free';note='30 credits cover a one-off test.';}
      else if(yr<=3000){pl='Starter';note='3,000 credits a year · '+XH.inr(22500)+' + GST · about '+XH.inr(22500/Math.max(1,rec*fr*12),2)+' per found contact';}
      else if(yr<=7200){pl='Growth';note='7,200 credits a year · '+XH.inr(43200)+' + GST · about '+XH.inr(43200/Math.max(1,rec*fr*12),2)+' per found contact';}
      else{pl='Scale';note='Over 7,200 credits a year · custom quote';}
      setT('cePl',pl);setT('cePlN',note);}
    ['ceRec','ceEm','cePh','ceFr'].forEach(function(i){$id(i).addEventListener('input',run);});run();
  })();
  (function(){
    if(!$id('roN'))return;var sg=$id('roP');
    function run(){var N=val('roN'),M=val('roM'),r=val('roR'),p=+(sg.dataset.value||22500);
      setT('roNV',num(N));setT('roMV',M);setT('roRV',XH.inr(r));
      var hrs=N*Math.max(0,M-1)/60,v=hrs*r*12;
      setT('roH',hrs.toFixed(1));setT('roV',XH.inr(v));
      if(v<=0){setT('roX','—');setT('roXN','Manual time is already at the review time.');return;}
      var mths=p/(v/12);setT('roX',(v/p).toFixed(1)+'× the plan cost');
      setT('roXN',XH.inr(v)+' of time a year vs '+XH.inr(p)+' plan · pays back in about '+(mths<1?'under a month':mths.toFixed(1)+' months'));}
    ['roN','roM','roR'].forEach(function(i){$id(i).addEventListener('input',run);});
    sg.addEventListener('change',run);$$('button',sg).forEach(function(b){b.addEventListener('click',function(){setTimeout(run,0);});});run();
  })();

  /* =====================================================================
     v2 · STICKY SECTION NAV + scrollspy
     ===================================================================== */
  (function(){
    var toc=$id('deToc'),lst=$id('deTocL');if(!toc||!lst)return;
    var hdr=$('.hdr');
    function top(){var h=hdr?Math.round(hdr.getBoundingClientRect().height):0;if(h>0&&h<160)toc.style.top=h+'px';}
    top();addEventListener('resize',top);
    var links=$$('a',lst),map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
    var cur=null;
    function set(id){if(id===cur)return;cur=id;links.forEach(function(a){a.classList.toggle('on',a===map[id]);a.removeAttribute('aria-current');});
      var a=map[id];if(!a)return;a.setAttribute('aria-current','true');var l=a.offsetLeft-lst.offsetLeft,w=a.offsetWidth;
      if(l<lst.scrollLeft+8||l+w>lst.scrollLeft+lst.clientWidth-24)lst.scrollLeft=Math.max(0,l-24);}
    if(!('IntersectionObserver' in window))return;
    var vis={};
    var io=new IntersectionObserver(function(es){es.forEach(function(e){vis[e.target.id]=e.isIntersecting?e.intersectionRatio:0;});
      var best=null;Object.keys(map).forEach(function(k){if(vis[k]>0&&best===null)best=k;});if(best)set(best);},{rootMargin:'-140px 0px -55% 0px',threshold:[0,.01]});
    Object.keys(map).forEach(function(k){var s=$id(k);if(s)io.observe(s);});
  })();

  /* ---------- before / after record + field filter ---------- */
  (function(){
    var sg=$id('deBA'),rec=$id('deRec');
    if(sg&&rec)sg.addEventListener('change',function(){rec.setAttribute('data-s',sg.dataset.value||'a');});
    var ff=$id('deFf'),ft=$id('deFt');
    if(ff&&ft)ff.addEventListener('change',function(){var v=ff.dataset.value||'all';$$('tbody tr',ft).forEach(function(r){r.hidden=!(v==='all'||r.getAttribute('data-k')===v);});});
  })();

  /* =====================================================================
     v2 · WATERFALL DIAGRAM (SVG, animated in the shared rAF loop)
     ===================================================================== */
  (function(){
    var host=$id('wfD'),sc=$id('wfSc'),logEl=$id('wfLog'),res=$id('wfRes');if(!host||!sc)return;
    var NS='http://www.w3.org/2000/svg';
    var LBL={in:['Input','name + company'],p1:['Provider 1','lookup'],p2:['Provider 2','lookup'],p3:['Provider 3','lookup'],ver:['Verify','email · phone'],scr:['Screen','opt-out list'],out:['Deliver','CRM · API'],miss:['Not found','0 credits*']};
    var L={
      h:{vb:[940,270],n:{in:[0,110,112,58],p1:[150,110,112,58],p2:[290,110,112,58],p3:[430,110,112,58],ver:[590,110,112,58],scr:[728,110,98,58],out:[842,110,98,58],miss:[430,212,112,50]},
         e:{in_p1:['in','r','p1','l'],p1_p2:['p1','r','p2','l',0,1],p2_p3:['p2','r','p3','l',0,1],p3_miss:['p3','b','miss','t',0,1],p1_ver:['p1','t','ver','t',110,0,-26],p2_ver:['p2','t','ver','t',70,0,0],p3_ver:['p3','r','ver','l'],ver_scr:['ver','r','scr','l'],scr_out:['scr','r','out','l']}},
      v:{vb:[340,560],n:{in:[105,0,130,50],p1:[0,90,136,50],p2:[0,180,136,50],p3:[0,270,136,50],miss:[0,372,136,50],ver:[204,270,136,50],scr:[204,372,136,50],out:[204,474,136,50]},
         e:{in_p1:['in','b','p1','t'],p1_p2:['p1','b','p2','t',0,1],p2_p3:['p2','b','p3','t',0,1],p3_miss:['p3','b','miss','t',0,1],p1_ver:['p1','r','ver','t',0,0,-34],p2_ver:['p2','r','ver','t',0,0,0],p3_ver:['p3','r','ver','l'],ver_scr:['ver','b','scr','t'],scr_out:['scr','b','out','t']}}};
    var SC={
      a:{r:'Delivered · <b>1 credit</b>',s:[[null,'in','act','Input normalised','Priya Mehta · acmepumps.in'],['in_p1','p1','ok','Provider 1: match','Work email found; later providers skipped'],['p1_ver','ver','ok','Verified: valid','Syntax, domain and mailbox checks passed'],['ver_scr','scr','ok','Screen: clear','Not on your opt-out list'],['scr_out','out','ok','Delivered to CRM','1 credit · source and date stored']]},
      b:{r:'Delivered after 2 misses · <b>1 credit</b>',s:[[null,'in','act','Input normalised','Priya Mehta · acmepumps.in'],['in_p1','p1','miss','Provider 1: no match','0 credits*'],['p1_p2','p2','miss','Provider 2: no match','0 credits*'],['p2_p3','p3','ok','Provider 3: match','Work email found'],['p3_ver','ver','ok','Verified: valid','Syntax, domain and mailbox checks passed'],['ver_scr','scr','ok','Screen: clear','Not on your opt-out list'],['scr_out','out','ok','Delivered to CRM','1 credit · source: provider 3']]},
      c:{r:'Not found · <b>0 credits*</b>',s:[[null,'in','act','Input normalised','Priya Mehta · acmepumps.in'],['in_p1','p1','miss','Provider 1: no match','0 credits*'],['p1_p2','p2','miss','Provider 2: no match','0 credits*'],['p2_p3','p3','miss','Provider 3: no match','0 credits*'],['p3_miss','miss','warn','Marked not found','No credits used*; try again later or another route']]},
      d:{r:'Delivered as catch-all · <b>credit use: confirm*</b>',s:[[null,'in','act','Input normalised','Priya Mehta · acmepumps.in'],['in_p1','p1','miss','Provider 1: no match','0 credits*'],['p1_p2','p2','ok','Provider 2: match','Work email found'],['p2_ver','ver','warn','Verify: catch-all','The domain accepts every address, so the mailbox cannot be confirmed'],['ver_scr','scr','ok','Screen: clear','Not on your opt-out list'],['scr_out','out','warn','Delivered, flagged catch-all','Send in small batches; watch bounces']]},
      e:{r:'Suppressed · <b>never delivered</b>',s:[[null,'in','act','Input normalised','Priya Mehta · acmepumps.in'],['in_p1','p1','ok','Provider 1: match','Work email found'],['p1_ver','ver','ok','Verified: valid','Checks passed'],['ver_scr','scr','miss','Screen: on opt-out list','Stopped. Not revealed, exported or charged*'],[null,'scr','miss','Opt-out record kept','The person will not be re-enriched or re-imported']]}};
    var lay=null,nodes={},paths={},tok=null,st=null;
    function anc(r,s){var x=r[0],y=r[1],w=r[2],h=r[3];return s==='r'?[x+w,y+h/2,1,0]:s==='l'?[x,y+h/2,-1,0]:s==='t'?[x+w/2,y,0,-1]:[x+w/2,y+h,0,1];}
    function el(n,a,p){var e=d.createElementNS(NS,n);for(var k in a)e.setAttribute(k,a[k]);if(p)p.appendChild(e);return e;}
    function build(){
      var k=host.clientWidth<640?'v':'h';if(k===lay&&host.firstChild)return false;lay=k;var Ld=L[k];
      host.innerHTML='';var svg=el('svg',{viewBox:'0 0 '+Ld.vb[0]+' '+Ld.vb[1],'aria-hidden':'true'},host);
      var ge=el('g',{},svg),gl=el('g',{},svg),gn=el('g',{},svg);nodes={};paths={};
      Object.keys(Ld.e).forEach(function(id){var e=Ld.e[id],A=Ld.n[e[0]],B=Ld.n[e[2]],a=anc(A,e[1]),b=anc(B,e[3]);
        if(e[6])b[0]+=e[6];
        var dist=Math.hypot(b[0]-a[0],b[1]-a[1]),kk=e[4]||Math.max(18,dist*.45);
        var dd='M'+a[0]+' '+a[1]+' C'+(a[0]+a[2]*kk)+' '+(a[1]+a[3]*kk)+' '+(b[0]+b[2]*kk)+' '+(b[1]+b[3]*kk)+' '+b[0]+' '+b[1];
        var p=el('path',{d:dd,'class':'ed'+(e[5]?' m':'')},ge);paths[id]=p;
        var lab=e[5]?'miss':(/_ver$/.test(id)?'match':'');
        if(lab){var len=p.getTotalLength(),pt=p.getPointAtLength(len/2),t=el('text',{x:pt.x+(k==='v'&&e[5]?8:0),y:pt.y-(k==='v'&&e[5]?0:7),'class':'el','text-anchor':k==='v'&&e[5]?'start':'middle'},gl);t.textContent=lab;}});
      Object.keys(Ld.n).forEach(function(id){var r=Ld.n[id],g=el('g',{'class':'nd idle'},gn);el('rect',{x:r[0],y:r[1],width:r[2],height:r[3],rx:12},g);
        var t1=el('text',{x:r[0]+r[2]/2,y:r[1]+r[3]/2-5,'text-anchor':'middle'},g);t1.textContent=LBL[id][0];
        var t2=el('text',{x:r[0]+r[2]/2,y:r[1]+r[3]/2+12,'text-anchor':'middle','class':'s'},g);t2.textContent=LBL[id][1];nodes[id]=g;});
      tok=el('circle',{r:7,'class':'tk',cx:0,cy:0,visibility:'hidden'},svg);
      return true;}
    function mark(id,c){var g=nodes[id];if(g)g.setAttribute('class','nd '+c);}
    function logLine(s){var li=d.createElement('li');li.className=s[2];li.innerHTML=esc(s[3])+'<small>'+esc(s[4])+'</small>';logEl.appendChild(li);logEl.scrollTop=logEl.scrollHeight;}
    function reset(){Object.keys(nodes).forEach(function(k){mark(k,'idle');});Object.keys(paths).forEach(function(k){paths[k].setAttribute('class',paths[k].getAttribute('class').replace(' on',''));});logEl.innerHTML='';res.innerHTML='';if(tok)tok.setAttribute('visibility','hidden');}
    function arrive(s){mark(s[1],s[2]);logLine(s);}
    function finish(k){res.innerHTML=SC[k].r;}
    var MOVE=650,HOLD=420,run=loop(tickW);
    function tickW(now){if(!st){run(false);return;}if(!st.t0)st.t0=now;var s=SC[st.k].s[st.i],dt=now-st.t0;
      if(s&&s[0]&&dt<MOVE){var p=paths[s[0]],len=p.getTotalLength(),pt=p.getPointAtLength(len*eo(dt/MOVE));tok.setAttribute('visibility','visible');tok.setAttribute('cx',pt.x);tok.setAttribute('cy',pt.y);return;}
      if(!st.arr){if(s){if(s[0]){p=paths[s[0]];p.setAttribute('class',p.getAttribute('class')+' on');}arrive(s);}st.arr=1;}
      if(dt<(s&&s[0]?MOVE:0)+HOLD)return;
      st.i++;st.t0=now;st.arr=0;if(st.i>=SC[st.k].s.length){finish(st.k);st=null;run(false);}}
    function play(k,instant){build();reset();
      if(instant||R){var ss=SC[k].s;ss.forEach(function(s){if(s[0]){var p=paths[s[0]];p.setAttribute('class',p.getAttribute('class')+' on');}arrive(s);});
        var last=null;for(var i=ss.length-1;i>=0;i--)if(ss[i][0]){last=ss[i][0];break;}
        if(last){var p=paths[last],pt=p.getPointAtLength(p.getTotalLength());tok.setAttribute('visibility','visible');tok.setAttribute('cx',pt.x);tok.setAttribute('cy',pt.y);}finish(k);return;}
      st={k:k,i:0,t0:0,arr:0};run(true);}
    sc.addEventListener('change',function(){play(sc.dataset.value||'a');});
    $id('wfPlay').addEventListener('click',function(){play(sc.dataset.value||'a');});
    var started=false;
    XH.whenVisible(host,function(v){if(v&&!started){started=true;play(sc.dataset.value||'a');}});
    var rt=0;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){var k=host.clientWidth<640?'v':'h';if(k!==lay){st=null;run(false);lay=null;play(sc.dataset.value||'a',true);}},150);});
    build();if(R)play('a',true);
    window.__deWf={play:play};
  })();

  /* ---------- copy helpers ---------- */
  function copyText(t){function ok(){XH.toast('Copied to clipboard');}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(t).then(ok,function(){fb();});}else fb();
    function fb(){var ta=d.createElement('textarea');ta.value=t;ta.setAttribute('readonly','');ta.style.position='fixed';ta.style.opacity='0';d.body.appendChild(ta);ta.select();try{d.execCommand('copy');ok();}catch(e){XH.toast('Copy not available');}d.body.removeChild(ta);}}
  $$('.de-cp').forEach(function(b){b.addEventListener('click',function(){var p=$id(b.getAttribute('data-cp'));if(p)copyText(p.textContent);});});
  (function(){var b=$id('bqCp');if(!b)return;b.addEventListener('click',function(){var t='Questions for an enrichment vendor\n\n';
    $$('#bqL li').forEach(function(li,i){var q=$('b',li),a=$('em',li);t+=(i+1)+'. '+q.textContent+'\n   Look for: '+a.textContent+'\n';});copyText(t);});})();

  /* =====================================================================
     v2 · LIST PLANNER
     ===================================================================== */
  (function(){
    if(!$id('plN'))return;
    function run(){var N=val('plN'),Ls=val('plL'),E=val('plE')/100,P=val('plP')/100,H=val('plH')/100;
      setT('plNV',num(N));setT('plLV',Ls);setT('plEV',Math.round(E*100)+'%');setT('plPV',Math.round(P*100)+'%');setT('plHV',Math.round(H*100)+'%');
      var ce=N*E*CR_EMAIL,cp=N*P*H*CR_PHONE,per=ce+cp,yr=per*Ls;
      setT('plCe',num(ce));setT('plCp',num(cp));setT('plCr',num(per));setT('plYr',num(yr));
      $id('plBe').style.width=(per>0?ce/per*100:0)+'%';$id('plBp').style.width=(per>0?cp/per*100:0)+'%';
      var pl,price=0,cap=0,note;
      if(yr<=30){pl='Free';note='Fits in the 30 free credits.';}
      else if(yr<=3000){pl='Starter';price=22500;cap=3000;}
      else if(yr<=7200){pl='Growth';price=43200;cap=7200;}
      else{pl='Scale';note=num(yr)+' credits a year is above Growth\'s 7,200 · custom quote.';}
      if(cap)note='Uses '+Math.round(yr/cap*100)+'% of '+pl+'\'s '+num(cap)+' credits · '+XH.inr(price)+' a year + GST';
      setT('plPlan',pl);setT('plNote',note);
      if(price&&yr>0){var pc=price/Math.min(yr,cap);setT('plEm',XH.inr(pc*CR_EMAIL,2));setT('plPh',XH.inr(pc*CR_PHONE,2));}
      else if(pl==='Free'){setT('plEm','₹0');setT('plPh','₹0');}
      else{setT('plEm','Quoted');setT('plPh','Quoted');}}
    ['plN','plL','plE','plP','plH'].forEach(function(i){$id(i).addEventListener('input',run);});run();
  })();

  /* =====================================================================
     v2 · RESPONSIBLE-USE CHECKLIST + GLOSSARY FILTER
     ===================================================================== */
  (function(){
    var L=$id('rucL');if(!L)return;var cb=$$('input',L),KEY='xh-de-ruc';
    try{var sv=JSON.parse(localStorage.getItem(KEY)||'[]');cb.forEach(function(c,i){c.checked=sv.indexOf(i)>-1;});}catch(e){}
    function upd(){var n=0,on=[];cb.forEach(function(c,i){if(c.checked){n++;on.push(i);}});setT('rucN',n);$id('rucB').style.width=(n/cb.length*100)+'%';
      try{localStorage.setItem(KEY,JSON.stringify(on));}catch(e){}}
    cb.forEach(function(c){c.addEventListener('change',upd);});upd();
    $id('rucCp').addEventListener('click',function(){var t='Responsible-use checklist (B2B data enrichment)\n\n';cb.forEach(function(c){t+=(c.checked?'[x] ':'[ ] ')+c.parentNode.textContent.trim()+'\n';});copyText(t);});
  })();
  (function(){
    var q=$id('gsQ'),gl=$id('gsL');if(!q||!gl)return;
    var items=$$('div',gl).map(function(e){var dt=$('dt',e),dd=$('dd',e);return {e:e,dt:dt,dd:dd,a:dt.textContent,b:dd.textContent};});
    function hl(s,k){if(!k)return esc(s);var i=s.toLowerCase().indexOf(k);if(i<0)return esc(s);return esc(s.slice(0,i))+'<mark>'+esc(s.slice(i,i+k.length))+'</mark>'+esc(s.slice(i+k.length));}
    q.addEventListener('input',function(){var k=q.value.trim().toLowerCase(),n=0;
      items.forEach(function(it){var m=!k||(it.a+' '+it.b).toLowerCase().indexOf(k)>-1;it.e.hidden=!m;if(m)n++;it.dt.innerHTML=hl(it.a,k);it.dd.innerHTML=hl(it.b,k);});
      setT('gsN',n+(n===1?' term':' terms'));$id('gsNo').hidden=n>0;});
  })();

  /* =====================================================================
     ENQUIRY FORM
     ===================================================================== */
  XH.onForm('de-enq',function(data,f){var nm=data.name?String(data.name).split(' ')[0]:'there',ref='XEN-'+String(Date.now()).slice(-6);
    var w=d.createElement('div');w.className='de-end';w.setAttribute('role','status');
    w.innerHTML='<b>'+ICO.check+' Enquiry received</b><p>Thanks, '+esc(nm)+'. XcellHost will email '+esc(data.email||'you')+' within one business day with a secure link for a sample of your list'+(data.plan?' and details of the '+esc(data.plan)+' plan':'')+'.</p><code>Reference '+ref+'</code>';
    f.parentNode.replaceChild(w,f);XH.toast('Enquiry received');return false;});
})();
