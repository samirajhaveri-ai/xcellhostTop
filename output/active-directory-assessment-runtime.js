
/* XcellSecure | Active Directory Assessment · page runtime (one shared rAF loop, pauses offscreen) */
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,d=document;
  function cl(v,a,b){return v<a?a:v>b?b:v;}
  function ph(t,s,du){return cl((t-s)/du,0,1);}
  function eo(x){return 1-Math.pow(1-x,3);}
  function eio(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}
  function spr(x){if(x<=0)return 0;if(x>=1)return 1;return 1-Math.cos(x*Math.PI*2.5)*Math.exp(-x*5.5);}
  function inr(n){return XH.inr?XH.inr(Math.round(n)):'₹'+Math.round(n).toLocaleString('en-IN');}
  function fmt(n){return Math.round(n).toLocaleString('en-IN');}
  function segVal(s,def){if(!s)return def;if(s.dataset.value!=null)return s.dataset.value;var b=$('button.on',s);return b?b.getAttribute('data-v'):def;}
  function setSeg(s,v){if(!s)return;$$('button',s).forEach(function(b){var on=b.getAttribute('data-v')===String(v);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});s.dataset.value=v;s.dispatchEvent(new CustomEvent('change',{bubbles:true}));}

  /* ---------- one shared rAF loop ---------- */
  var T=[],raf=0,last=0;
  function ticker(fn){var o={on:false,fn:fn};T.push(o);return o;}
  function frame(now){raf=0;var dt=last?Math.min(.1,(now-last)/1000):.016;last=now;var any=false;
    for(var i=0;i<T.length;i++){if(T[i].on){any=true;T[i].fn(dt,now);}}
    if(any)raf=requestAnimationFrame(frame);else last=0;}
  function wake(){if(!raf&&!R)raf=requestAnimationFrame(frame);}
  function bindVis(o,el){if(!el)return;XH.whenVisible(el,function(v){o.on=v&&!R;if(o.on)wake();});}
  ['#adHero .ad-roots','#adEam','#adHy'].forEach(function(s){var el=$(s);if(el)XH.whenVisible(el,function(v){el.classList.toggle('paused',!v);});});

  /* magnetic CTAs */
  if(XH.fine&&!R)$$('.ad-mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left)/r.width-.5)*8+'px,'+((e.clientY-r.top)/r.height-.5)*6+'px)';});b.addEventListener('pointerleave',function(){b.style.transform='';});});

  /* =====================================================================
     HERO · directory health map — 5 rotating live scenes on one canvas
     ===================================================================== */
  var map=$('#adMap'),scr=$('#adScr'),cv=$('#adCv');
  if(map&&cv){
    var cx=cv.getContext('2d'),W=0,H=0,K=1,VW=720,VH=360,MOB=false,dpr=Math.min(2,window.devicePixelRatio||1);
    var C={b:'#0066FF',bl:'#8fb8ff',o:'#FF8A00',ol:'#ffc27a',r:'#c0392b',rl:'#ff7a6b',g:'#16a34a',gl:'#3ccf7a',tx:'#E9EFFB',mu:'rgba(233,239,251,.58)',ln:'rgba(255,255,255,.12)',pn:'#121C3D',pn2:'#18244B'};
    var MONO='"IBM Plex Mono",monospace',DISP='Sora,sans-serif';
    function size(){var w0=scr.getBoundingClientRect().width;if(!w0)return;var mb=w0<520,ar=mb?'420/330':'720/360';if(scr.style.aspectRatio!==ar)scr.style.aspectRatio=ar;
      var r=cv.getBoundingClientRect();W=r.width;H=r.height;if(!W)return;MOB=mb;VW=MOB?420:720;K=W/VW;VH=H/K;cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);}
    function rr(x,y,w,h,r){cx.beginPath();cx.moveTo(x+r,y);cx.arcTo(x+w,y,x+w,y+h,r);cx.arcTo(x+w,y+h,x,y+h,r);cx.arcTo(x,y+h,x,y,r);cx.arcTo(x,y,x+w,y,r);cx.closePath();}
    function box(x,y,w,h,o){o=o||{};rr(x,y,w,h,o.r==null?8:o.r);if(o.fill){cx.fillStyle=o.fill;cx.fill();}if(o.stroke){cx.strokeStyle=o.stroke;cx.lineWidth=o.lw||1;cx.setLineDash(o.dash||[]);cx.lineDashOffset=o.off||0;cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;}}
    function font(o){return (o.w||500)+' '+((o.s||11)*(MOB?1.16:1.1)).toFixed(1)+'px '+(o.f==='d'?DISP:MONO);}
    function tx(s,x,y,o){o=o||{};cx.font=font(o);cx.fillStyle=o.c||C.tx;cx.textAlign=o.a||'left';cx.textBaseline='alphabetic';cx.fillText(s,x,y);}
    function tw(s,o){cx.font=font(o||{});return cx.measureText(s).width;}
    function dot(x,y,r,c,glow){if(glow){var g=cx.globalAlpha;cx.globalAlpha=g*.22;cx.fillStyle=c;cx.beginPath();cx.arc(x,y,r*2.6,0,6.283);cx.fill();cx.globalAlpha=g;}cx.fillStyle=c;cx.beginPath();cx.arc(x,y,r,0,6.283);cx.fill();}
    function line(x1,y1,x2,y2,c,w,dash,off){cx.strokeStyle=c;cx.lineWidth=w||1;cx.setLineDash(dash||[]);cx.lineDashOffset=off||0;cx.beginPath();cx.moveTo(x1,y1);cx.lineTo(x2,y2);cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;}
    function fade(t,s,du,fn){var a=eo(ph(t,s,du||.5));if(a<=0)return;var g=cx.globalAlpha;cx.globalAlpha=g*a;fn(a);cx.globalAlpha=g;}
    function alpha(a,fn){if(a<=0)return;var g=cx.globalAlpha;cx.globalAlpha=g*Math.min(1,a);fn();cx.globalAlpha=g;}
    function head(s){tx(s,MOB?14:20,24,{s:MOB?9.5:10,w:600,c:C.ol});}
    function check(x,y,c,sz){sz=sz||1;cx.strokeStyle=c;cx.lineWidth=2;cx.lineCap='round';cx.beginPath();cx.moveTo(x-4*sz,y);cx.lineTo(x-1*sz,y+3*sz);cx.lineTo(x+5*sz,y-4*sz);cx.stroke();cx.lineCap='butt';}
    function pill(s,x,y,bg,o){o=o||{};var fs=o.s||9.5,w=tw(s,{s:fs,w:700})+14;if(o.a==='right')x-=w;if(o.a==='center')x-=w/2;box(x,y-12,w,17,{fill:bg,r:5});tx(s,x+7,y,{s:fs,w:700,c:'#fff'});return w;}
    function quad(x1,y1,qx,qy,x2,y2,p){var a=1-p;return [a*a*x1+2*a*p*qx+p*p*x2,a*a*y1+2*a*p*qy+p*p*y2];}
    function curve(x1,y1,qx,qy,x2,y2,p,col,w,dash,off){if(p<=0)return;cx.strokeStyle=col;cx.lineWidth=w||1.6;cx.setLineDash(dash||[]);cx.lineDashOffset=off||0;cx.beginPath();cx.moveTo(x1,y1);var n=22;for(var i=1;i<=n;i++){var q=quad(x1,y1,qx,qy,x2,y2,i/n*p);cx.lineTo(q[0],q[1]);}cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;}
    function srv(x,y,c){box(x-9,y-11,18,22,{fill:C.pn2,stroke:c,lw:1.2,r:3});line(x-5,y-4,x+5,y-4,c,1.2);line(x-5,y+1,x+5,y+1,c,1.2);dot(x+4,y+7,1.4,c);}
    function panel(x,y,w,h){box(x,y,w,h,{fill:C.pn,stroke:'rgba(143,184,255,.25)',r:12});}

    /* ---- scene 0 : discover the forest ---- */
    var CNT=[['Users',1860],['Groups',412],['Computers',1140],['GPOs',96],['Domain controllers',6],['Trusts',1]];
    function s0(t){
      head(MOB?'DISCOVERY · FOREST INVENTORY · SAMPLE':'DISCOVERY · FOREST, DOMAINS & OUs · READ-ONLY · SAMPLE');
      var root,dom,ou,ouN,bw,dw,ow,bh=MOB?28:32;
      if(MOB){root=[210,62];dom=[[110,126],[310,126]];ou=[[50,190],[110,190],[170,190],[250,190],[310,190],[370,190]];ouN=['Users','Servers','Admins','Users','PCs','Svc'];bw=156;dw=150;ow=56;}
      else{root=[245,66];dom=[[130,150],[360,150]];ou=[[62,236],[132,236],[202,236],[292,236],[362,236],[432,236]];ouN=['Users','Servers','Admins','Users','PCs','Service'];bw=184;dw=160;ow=64;}
      var dn=MOB?['mum.corp.local','pune.corp.local']:['mum.corp.local','pune.corp.local'];
      /* edges root -> domains */
      for(var i=0;i<2;i++){var p=eo(ph(t,.35+i*.12,.7));curve(root[0],root[1]+bh/2,root[0],(root[1]+dom[i][1])/2+6,dom[i][0],dom[i][1]-bh/2,p,'rgba(143,184,255,.55)',1.5);
        if(p>=1){var k=(t*.55+i*.5)%1,q=quad(root[0],root[1]+bh/2,root[0],(root[1]+dom[i][1])/2+6,dom[i][0],dom[i][1]-bh/2,k);dot(q[0],q[1],2.6,C.o,true);}}
      for(var j=0;j<6;j++){var dd=dom[j<3?0:1],p2=eo(ph(t,1.05+j*.1,.6));curve(dd[0],dd[1]+bh/2,dd[0],(dd[1]+ou[j][1])/2,ou[j][0],ou[j][1]-bh/2+2,p2,'rgba(143,184,255,.4)',1.2);}
      fade(t,.05,.4,function(){box(root[0]-bw/2,root[1]-bh/2,bw,bh,{fill:'rgba(255,138,0,.16)',stroke:C.o,lw:1.5,r:9});tx(MOB?'corp.local · root':'corp.local · forest root',root[0],root[1]+4,{s:MOB?10:11.5,w:700,f:'d',a:'center'});});
      dom.forEach(function(p,i){fade(t,.6+i*.12,.45,function(){box(p[0]-dw/2,p[1]-bh/2,dw,bh,{fill:C.pn,stroke:C.b,lw:1.4,r:9});tx(dn[i],p[0],p[1]+4,{s:MOB?9.5:11,w:600,f:'d',a:'center'});});});
      ou.forEach(function(p,j){fade(t,1.3+j*.1,.4,function(){var adm=j===2;box(p[0]-ow/2,p[1]-(bh-4)/2,ow,bh-4,{fill:adm?'rgba(255,138,0,.12)':'rgba(255,255,255,.05)',stroke:adm?'rgba(255,194,122,.7)':C.ln,r:7});tx(ouN[j],p[0],p[1]+4,{s:MOB?8.8:9.8,w:600,a:'center',c:adm?C.ol:C.tx});});});
      /* DCs row */
      var dcy=MOB?226:298;
      fade(t,2.1,.5,function(){for(var k=0;k<6;k++){var x=(MOB?60:72)+k*(MOB?60:72),a=spr(ph(t,2.1+k*.09,.6));alpha(a,function(){srv(x,dcy,k<4?C.bl:C.ol);});}
        if(!MOB)tx('6 domain controllers · 2 sites · replication healthy (sample)',20,dcy+34,{s:9.5,w:600,c:C.mu});});
      /* counters */
      if(!MOB){var px=498,py=42,pw=VW-px-16;fade(t,.25,.5,function(){panel(px,py,pw,VH-py-16);tx('OBJECTS DISCOVERED',px+14,py+22,{s:9.5,w:600,c:C.mu});
        CNT.forEach(function(c,i){var y=py+50+i*42,f=eo(ph(t,.5+i*.22,1.8));tx(c[0],px+14,y,{s:10,w:600});tx(fmt(c[1]*f),px+pw-14,y,{s:13,w:800,f:'d',a:'right',c:i===4?C.ol:'#fff'});
          box(px+14,y+8,pw-28,5,{fill:'rgba(255,255,255,.08)',r:3});box(px+14,y+8,(pw-28)*f*(i===0?1:i===2?.62:i===1?.4:.25),5,{fill:i%2?C.o:C.b,r:3});});});}
      else fade(t,.25,.5,function(){var y0=VH-62;CNT.forEach(function(c,i){var col=i%3,row=Math.floor(i/3),x=14+col*134,y=y0+row*30,f=eo(ph(t,.5+i*.2,1.8));box(x,y-15,126,24,{fill:C.pn,stroke:C.ln,r:7});tx(c[0]==='Domain controllers'?'DCs':c[0],x+8,y+1,{s:9,c:C.mu});tx(fmt(c[1]*f),x+118,y+1,{s:11,w:800,f:'d',a:'right'});});});
    }

    /* ---- scene 1 : tiering map ---- */
    var TB=[['TIER 0','control',['DCs ×6','AD CS','Entra Connect']],['TIER 1','management',['File server','ERP','SQL']],['TIER 2','user & data',['Laptops','Desktops','Kiosks']]];
    function s1(t){
      head(MOB?'TIERING MAP · ENTERPRISE ACCESS MODEL · SAMPLE':'TIERING MAP · ADMIN SIGN-INS BY PLANE · ENTERPRISE ACCESS MODEL · SAMPLE');
      var bx=MOB?14:132,bw=MOB?VW-28:VW-148,by0=MOB?42:44,bh=MOB?78:88,bg=MOB?10:10,fix=ph(t,2.8,.8),fixe=eo(fix);
      var ax=MOB?VW-48:VW-62,aw=MOB?56:76,ah=MOB?24:28;
      var assets=[];
      TB.forEach(function(b,i){var y=by0+i*(bh+bg);fade(t,.05+i*.12,.45,function(){
        box(bx,y,bw,bh,{fill:i===0?'rgba(255,138,0,.08)':'rgba(0,102,255,.07)',stroke:i===0?'rgba(255,194,122,.55)':'rgba(143,184,255,.3)',r:12});
        if(MOB){tx(b[0],bx+12,y+18,{s:10.5,w:800,f:'d',c:i===0?C.ol:'#fff'});tx(b[1],bx+64,y+18,{s:9,c:C.mu});}
        else{tx(b[0],20,y+bh/2-2,{s:13,w:800,f:'d',c:i===0?C.ol:'#fff'});tx(b[1],20,y+bh/2+14,{s:9.5,c:C.mu});}});
        b[2].forEach(function(nm,k){var w=MOB?88:112,x=MOB?bx+12+k*(w+8):bx+18+k*(w+14),yy=MOB?y+30:y+bh/2-15;if(MOB&&k>2)return;assets.push([x+w/2,yy+15,i]);
          fade(t,.25+i*.12+k*.06,.4,function(){box(x,yy,w,30,{fill:C.pn,stroke:C.ln,r:8});if(i===0&&k===0)srv(x+14,yy+15,C.ol);tx(nm,x+(i===0&&k===0?28:10),yy+19,{s:MOB?9:10,w:600});});});});
      /* BEFORE: one admin, cross-plane sign-ins */
      var aY=[by0+bh/2,by0+bh+bg+bh/2,by0+2*(bh+bg)+bh/2];
      if(fix<1)alpha(1-fixe,function(){var x=ax,y=aY[2];
        fade(t,.9,.4,function(){box(x-aw/2,y-ah/2,aw,ah,{fill:'rgba(192,57,43,.22)',stroke:C.rl,lw:1.5,r:8});tx('it-admin',x,y+4,{s:MOB?9:10,w:700,a:'center'});});
        var tgt=[[assets[0][0],aY[0]-8],[assets[4][0]||assets[3][0],aY[1]-8],[assets[2][0],aY[0]+8]];
        tgt.forEach(function(p,i){var pr=eo(ph(t,1.1+i*.3,.7));curve(x-aw/2,y-4,(x+p[0])/2,(y+p[1])/2-30,p[0]+20,p[1]+10,pr,C.rl,1.8,[6,5],-t*30);
          if(pr>=1){var k=(t*.8+i*.33)%1,q=quad(x-aw/2,y-4,(x+p[0])/2,(y+p[1])/2-30,p[0]+20,p[1]+10,k);dot(q[0],q[1],2.8,C.rl,true);}});
        fade(t,1.9,.4,function(){pill(MOB?'TIER 0 CREDS ON A LAPTOP':'TIER 0 CREDENTIAL USED ON A WORKSTATION',MOB?VW-14:VW-16,by0+3*(bh+bg)+(MOB?6:8),C.r,{a:'right',s:MOB?8.5:9});});});
      /* AFTER: separate admin per plane + PAW */
      if(fix>0)alpha(fixe,function(){['adm-t0','adm-t1','adm-t2'].forEach(function(nm,i){var y=aY[i],s=spr(ph(t,2.9+i*.15,.6)),x=ax;
          alpha(s,function(){box(x-aw/2,y-ah/2,aw,ah,{fill:'rgba(22,163,74,.2)',stroke:C.gl,lw:1.5,r:8});tx(nm,x,y+4,{s:MOB?9:10,w:700,a:'center'});});
          var tgtX=MOB?bx+12+2*96+88:bx+18+2*126+112;line(tgtX+4,y,x-aw/2-4,y,C.gl,1.6,[4,4],-t*20);});
        if(!MOB)fade(t,3.6,.4,function(){pill('PAW',ax-aw/2,aY[0]-ah/2-8,C.o);});
        fade(t,3.8,.4,function(){pill(MOB?'CROSS-TIER 7 → 0':'CROSS-TIER SIGN-INS 7 → 0',MOB?VW-14:VW-16,by0+3*(bh+bg)+(MOB?6:8),C.g,{a:'right',s:MOB?8.5:9});});});
    }

    /* ---- scene 2 : stale account clean-up ---- */
    var STL=(function(){var s=[],seed=7;for(var i=0;i<98;i++){seed=(seed*9301+49297)%233280;s.push(seed/233280<.19);}return s;})();
    function s2(t){
      head(MOB?'STALE ACCOUNTS · 90+ DAYS · SAMPLE':'STALE & DORMANT ACCOUNTS · NO SIGN-IN FOR 90+ DAYS · SAMPLE');
      var cols=MOB?14:14,rows=MOB?5:7,ts=MOB?22:26,g=MOB?5:6,gx=MOB?(VW-(cols*(ts+g)-g))/2:22,gy=MOB?44:48,gw=cols*(ts+g)-g,gh=rows*(ts+g)-g,n=cols*rows;
      var sweep=ph(t,.3,1.9),sx=gx+sweep*gw,move=ph(t,2.7,1.2);
      var bX=MOB?14:500,bY=MOB?gy+gh+16:58,bW=MOB?VW-28:VW-516,bH=MOB?VH-(gy+gh+16)-30:150;
      fade(t,.05,.4,function(){box(bX,bY,bW,bH,{fill:'rgba(255,138,0,.06)',stroke:'rgba(255,194,122,.55)',dash:[5,5],r:12});tx(MOB?'QUARANTINE OU':'OU=Quarantine · disabled',bX+12,bY+18,{s:9.5,w:700,c:C.ol});});
      var si=0,stale=0;
      for(var i=0;i<n;i++){var c=i%cols,r=Math.floor(i/cols),x=gx+c*(ts+g),y=gy+r*(ts+g),isS=STL[i%98],seen=sx>x+ts/2||t>2.3;if(isS)stale++;
        var a=eo(ph(t,.02+(c+r)*.02,.35));if(a<=0)continue;
        if(isS&&seen&&move>0){var bc=MOB?13:8,tsz=MOB?16:18,bxp=bX+14+(si%bc)*(tsz+5),byp=bY+(MOB?28:32)+Math.floor(si/bc)*(tsz+5),m=eio(cl((move-si*.025)/.6,0,1));si++;
          box(x+(bxp-x)*m,y+(byp-y)*m,ts+(tsz-ts)*m,ts+(tsz-ts)*m,{fill:m>=1&&t>4?'rgba(255,255,255,.16)':C.o,r:5});
          if(m<1)box(x,y,ts,ts,{stroke:'rgba(255,255,255,.12)',dash:[3,3],r:5});continue;}
        if(isS)si++;
        alpha(a,function(){box(x,y,ts,ts,{fill:isS&&seen?C.o:'rgba(0,102,255,.55)',r:5});if(isS&&seen&&!MOB)tx('90+',x+ts/2,y+ts/2+3,{s:7.5,w:700,a:'center',c:'#fff'});});}
      if(sweep>0&&sweep<1){line(sx,gy-6,sx,gy+gh+6,C.o,1.6);alpha(.12,function(){cx.fillStyle=C.o;cx.fillRect(sx-18,gy-6,18,gh+12);});}
      var flagged=Math.round(312*ph(t,.3,2));
      if(!MOB){fade(t,.4,.5,function(){var px=bX,py=bY+bH+12,pw=bW,ph2=VH-py-16;panel(px,py,pw,ph2);
        tx('STALE ENABLED ACCOUNTS',px+14,py+22,{s:9.5,w:600,c:C.mu});
        var v=t<4?flagged:Math.round(312*(1-eo(ph(t,4,.8))));tx(fmt(v),px+14,py+54,{s:26,w:800,f:'d',c:v?C.ol:C.gl});
        tx(t<4?'flagged of 1,860 users':'312 → 0 after owner review',px+14,py+74,{s:9.5,c:C.mu});
        fade(t,4.3,.4,function(){pill('DISABLED · REMOVE AFTER 30 DAYS',px+14,py+ph2-14,C.g,{s:8.5});});});
        fade(t,.3,.4,function(){tx('each tile ≈ 19 accounts · orange = no sign-in 90+ days (sample)',gx,gy+gh+22,{s:9.5,c:C.mu});});}
      else fade(t,.3,.4,function(){tx(t<4?'flagged '+flagged+' of 1,860 (sample)':'stale enabled 312 → 0 (sample)',14,VH-10,{s:10,w:700,c:t<4?C.ol:C.gl});});
    }

    /* ---- scene 3 : privileged groups ---- */
    var PG=[['Domain Admins','DA',18,3],['Enterprise Admins','EA',6,0],['Schema Admins','SA',4,0],['Administrators','Admins',22,5],['Account Operators','Acct Ops',9,0],['Backup Operators','Backup Ops',7,2],['Protected Users','Protected',0,8]];
    function s3(t){
      head(MOB?'PRIVILEGED GROUPS · BEFORE → AFTER · SAMPLE':'PRIVILEGED GROUP MEMBERSHIP · NESTED MEMBERS RESOLVED · BEFORE → AFTER · SAMPLE');
      var lx=MOB?14:20,bx0=MOB?118:178,bx1=MOB?VW-46:500,y0=MOB?48:52,rh=MOB?(VH-80)/7:38,mx=24;
      var tot0=0,tot1=0,cur=0;
      PG.forEach(function(p,i){var y=y0+i*rh,a=eo(ph(t,.1+i*.08,.5)),m=spr(ph(t,2.2+i*.14,1.1)),v=p[2]+(p[3]-p[2])*m,pu=i===6;
        if(!pu){tot0+=p[2];tot1+=p[3];cur+=v;}
        alpha(a,function(){tx(MOB?p[1]:p[0],lx,y+14,{s:MOB?10:11.5,w:700,f:'d',c:pu?C.bl:'#fff'});
          box(bx0,y+3,bx1-bx0,14,{fill:'rgba(255,255,255,.06)',r:7});
          var w=(bx1-bx0)*Math.max(0,v)/mx*eo(ph(t,.3+i*.08,.9));if(w>1)box(bx0,y+3,w,14,{fill:pu?C.b:m>.5?(p[3]?C.bl:C.gl):C.o,r:7});
          if(!pu&&m>0&&p[2]&&!MOB)box(bx0+(bx1-bx0)*p[2]/mx-1,y+1,2,18,{fill:'rgba(255,194,122,.7)',r:1});
          tx(String(Math.max(0,Math.round(v*eo(ph(t,.3+i*.08,.9))))),bx1+(MOB?28:14),y+15,{s:MOB?11:12,w:800,f:'d',a:MOB?'right':'left',c:pu?C.bl:m>=1&&p[3]===0?C.gl:'#fff'});});});
      if(!MOB){var px=556,py=44,pw=VW-px-16;fade(t,.3,.5,function(){panel(px,py,pw,VH-py-16);
        tx('PRIVILEGED',px+14,py+22,{s:9.5,w:600,c:C.mu});tx('MEMBERS',px+14,py+36,{s:9.5,w:600,c:C.mu});
        tx(String(Math.round(cur)),px+14,py+70,{s:28,w:800,f:'d',c:t>3.2?C.gl:C.ol});tx(tot0+' at start',px+14,py+88,{s:9.5,c:C.mu});
        line(px+14,py+102,px+pw-14,py+102,C.ln);
        tx('NESTED GROUPS',px+14,py+124,{s:9.5,w:600,c:C.mu});tx(t>3.4?'11 → 0':'11',px+14,py+148,{s:16,w:800,f:'d'});
        tx('PROTECTED USERS',px+14,py+176,{s:9.5,w:600,c:C.mu});tx(t>3.4?'0 → 8':'0',px+14,py+200,{s:16,w:800,f:'d',c:C.bl});
        fade(t,3.9,.4,function(){pill('TIER 0 REVIEWED',px+14,VH-30,C.g,{s:8.5});});});}
      else fade(t,.3,.4,function(){tx('privileged members '+Math.round(cur)+(t>3.4?' · was '+tot0:''),14,VH-10,{s:10,w:700,c:t>3.4?C.gl:C.ol});});
    }

    /* ---- scene 4 : directory health radar ---- */
    var AX=[['Privileged access','Privileged',38,88],['Account hygiene','Accounts',45,90],['Authentication','Auth',30,84],['Group Policy','GPO',55,86],['DC health','DC health',62,92],['Hybrid sync','Hybrid',50,85],['Monitoring','Logging',35,80]];
    function s4(t){
      head(MOB?'DIRECTORY HEALTH · BEFORE → AFTER · SAMPLE':'DIRECTORY HEALTH SCORE · REPORT → RETEST · SAMPLE');
      var ox=MOB?210:212,oy=MOB?(VH+20)/2:200,rad=MOB?Math.min(100,(VH-110)/2):104,n=AX.length,a0=eo(ph(t,.2,1)),m=eio(ph(t,2,1.5));
      function pt(i,v){var an=-Math.PI/2+i/n*6.283;return [ox+Math.cos(an)*rad*v/100,oy+Math.sin(an)*rad*v/100];}
      fade(t,.05,.4,function(){[25,50,75,100].forEach(function(v){cx.strokeStyle=C.ln;cx.lineWidth=1;cx.beginPath();for(var i=0;i<=n;i++){var p=pt(i%n,v);if(i)cx.lineTo(p[0],p[1]);else cx.moveTo(p[0],p[1]);}cx.stroke();});
        for(var i=0;i<n;i++){var p=pt(i,100);line(ox,oy,p[0],p[1],C.ln);var q=pt(i,MOB?122:116);tx(AX[i][1],q[0],q[1]+4,{s:MOB?9:9.5,w:600,a:Math.abs(q[0]-ox)<8?'center':q[0]>ox?'left':'right',c:C.mu});}});
      function poly(vals,fill,stroke){cx.beginPath();vals.forEach(function(v,i){var p=pt(i,v);if(i)cx.lineTo(p[0],p[1]);else cx.moveTo(p[0],p[1]);});cx.closePath();cx.fillStyle=fill;cx.fill();cx.strokeStyle=stroke;cx.lineWidth=2;cx.stroke();}
      if(a0>0){poly(AX.map(function(x){return x[2]*a0;}),'rgba(255,138,0,.18)',C.o);}
      if(m>0){var vv=AX.map(function(x){return x[2]+(x[3]-x[2])*m;});poly(vv,'rgba(0,102,255,.3)',C.bl);vv.forEach(function(v,i){var p=pt(i,v);dot(p[0],p[1],3,'#fff');});}
      var sc=Math.round((45*a0)+(87-45)*m);
      if(MOB){box(ox-30,oy-18,60,34,{fill:'rgba(11,19,43,.85)',r:9});tx(String(sc),ox,oy+8,{s:20,w:800,f:'d',a:'center',c:m>=1?C.gl:'#fff'});}
      if(!MOB){var px=440,py=44,pw=VW-px-16;fade(t,.3,.5,function(){panel(px,py,pw,VH-py-16);
        tx('HEALTH SCORE',px+14,py+22,{s:9.5,w:600,c:C.mu});tx(String(sc),px+14,py+60,{s:32,w:800,f:'d',c:m>=1?C.gl:'#fff'});tx('/ 100',px+14+tw(String(sc),{s:32,w:800,f:'d'})+8,py+60,{s:11,c:C.mu});
        AX.forEach(function(x,i){var y=py+90+i*26,v=Math.round(x[2]+(x[3]-x[2])*m);tx(x[0],px+14,y,{s:9.5,w:600});tx(x[2]+' → '+(m>0?v:'…'),px+pw-14,y,{s:9.5,w:700,a:'right',c:m>=1?C.gl:C.mu});});});
        fade(t,.2,.4,function(){var y=50;box(20,y-8,12,6,{fill:C.o,r:2});tx('at report',38,y-1,{s:9.5,c:C.mu});box(20,y+8,12,6,{fill:C.b,r:2});tx('after retest',38,y+15,{s:9.5,c:C.mu});});
        fade(t,3.8,.4,function(){pill('RETEST VERIFIED',px+14,VH-30,C.g,{s:8.5});});}
      else fade(t,.2,.4,function(){tx('orange: at report · blue: after retest',14,VH-10,{s:9.5,c:C.mu});});
    }

    var SC=[s0,s1,s2,s3,s4],DUR=5.5,si=0,st=0,hold=false;
    var META=[
      {t:'01 · Discover the forest',k:'Objects discovered',v:'3,515',p:1,c:'INVENTORY',sc:'b',sv:'Info',h:'2 domains, 6 DCs, 2 sites, 1 external trust',x:'baseline captured for the report (sample)',log:['Collector on a domain-joined jump host · read-only (sample)','corp.local forest · 2 domains · 6 DCs (sample)','1,860 users · 412 groups · 96 GPOs collected (sample)']},
      {t:'02 · Tiering map',k:'Cross-tier admin sign-ins',v:'7 → 0',p:1,c:'TIERING',sc:'c',sv:'Critical',h:'Tier 0 admin account used on workstations',x:'separate admin accounts per plane + PAW (sample)',log:['Admin sign-in locations mapped by plane (sample)','it-admin signs in to DCs, servers and laptops (sample)','Split into adm-t0 / adm-t1 / adm-t2 · PAW for Tier 0 (sample)']},
      {t:'03 · Stale accounts',k:'Stale enabled accounts',v:'312 → 0',p:1,c:'ACCOUNT HYGIENE',sc:'',sv:'High',h:'Enabled accounts with no sign-in for 90+ days',x:'quarantined, then removed after owner review',log:['Last sign-in dates compared across all DCs (sample)','312 enabled accounts idle 90+ days (sample)','Moved to Quarantine OU · disabled · owners notified (sample)']},
      {t:'04 · Privileged groups',k:'Privileged members',v:'66 → 10',p:.85,c:'PRIVILEGED ACCESS',sc:'c',sv:'Critical',h:'Domain Admins with 18 members via nested groups',x:'reduced to 3 named admins, nesting removed (sample)',log:['Nested membership resolved for 7 groups (sample)','Domain Admins 18 · Enterprise Admins 6 (sample)','Members trimmed · 8 admins added to Protected Users (sample)']},
      {t:'05 · Health score',k:'Directory health',v:'45 → 87',p:.87,c:'RETEST',sc:'ok',sv:'Verified',h:'Retest confirms fixes across 7 areas',x:'closure note issued · collected data deleted (sample)',log:['Retest · same checks, same scope (sample)','Legacy NTLMv1 blocked · weak Kerberos types removed (sample)','Closure note issued · collector removed (sample)']}
    ];
    var dots=$$('#adDots button'),ttl=$('#adTitle'),logEl=$('#adLog'),fd=$('#adFd'),mK=$('#adMK'),mV=$('#adMV'),mB=$('#adMB'),logI=0,logT=0;
    function setCards(i,first){var m=META[i];ttl.textContent=m.t;mK.textContent=m.k;mV.textContent=m.v;
      dots.forEach(function(b,k){b.classList.toggle('on',k===i);b.classList.toggle('done',k<i);b.setAttribute('aria-selected',k===i);var ii=$('i',b);if(ii)ii.style.setProperty('--p',k<i?1:0);});
      function fill(){$('#adFC').textContent=m.c+' · sample';var s=$('#adFS');s.textContent=m.sv;s.className='ad-sv'+(m.sc?' '+m.sc:'');$('#adFT').textContent=m.h;$('#adFX').textContent=m.x;fd.classList.remove('sw');}
      if(first||R)fill();else{fd.classList.add('sw');setTimeout(fill,280);}
      logI=0;logT=0;swapLog(m.log[R?2:0],first);}
    function swapLog(s,now){if(now||R){logEl.textContent=s;return;}logEl.classList.add('sw');setTimeout(function(){logEl.textContent=s;logEl.classList.remove('sw');},260);}
    function go(i){si=(i+5)%5;st=0;setCards(si);}
    function draw(){if(!W)return;cx.setTransform(dpr*K,0,0,dpr*K,0,0);cx.clearRect(0,0,VW,VH);
      var fi=ph(st,0,.45),fo=1-ph(st,DUR-.4,.4);cx.globalAlpha=R?1:Math.min(fi,fo);SC[si](R?5:st);cx.globalAlpha=1;}
    function meter(){var m=META[si],p=R?1:eo(ph(st,.3,2.2));mB.style.transform='scaleX('+(m.p*p).toFixed(3)+')';}
    size();addEventListener('resize',function(){size();draw();});
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){size();draw();});
    setCards(0,true);
    if(R){st=5;draw();meter();}
    else{
      var hero=ticker(function(dt){if(!hold){st+=dt;if(st>=DUR){go(si+1);}}
        var ii=$('i',dots[si]);if(ii)ii.style.setProperty('--p',cl(st/DUR,0,1).toFixed(3));
        if(!hold){logT+=dt;if(logT>1.7&&logI<2){logT=0;logI++;swapLog(META[si].log[logI]);}}
        draw();meter();});
      bindVis(hero,scr);
      var stage=$('#adStage');
      stage.addEventListener('mouseenter',function(){hold=true;map.classList.add('hold');});
      stage.addEventListener('mouseleave',function(){hold=false;map.classList.remove('hold');});
      var sx0=null,sy0=0;
      scr.addEventListener('pointerdown',function(e){sx0=e.clientX;sy0=e.clientY;});
      scr.addEventListener('pointerup',function(e){if(sx0==null)return;var dx=e.clientX-sx0,dy=e.clientY-sy0;sx0=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))go(si+(dx<0?1:-1));});
      scr.addEventListener('touchstart',function(e){var p=e.touches[0];sx0=p.clientX;sy0=p.clientY;},{passive:true});
      scr.addEventListener('touchend',function(e){if(sx0==null)return;var p=e.changedTouches[0],dx=p.clientX-sx0,dy=p.clientY-sy0;sx0=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))go(si+(dx<0?1:-1));},{passive:true});
    }
    dots.forEach(function(b){b.addEventListener('click',function(){go(+b.getAttribute('data-s'));if(R){st=5;draw();meter();}});});
    /* test hook: jump to a scene at a given time (used by screenshots) */
    window.__adScene=function(i,tt){si=i;st=tt==null?4.6:tt;setCards(i,true);draw();meter();};
  }

  /* ---------- overview · enterprise access model before/after ---------- */
  var eam=$('#adEam');
  if(eam){var eUser=false,eVis=false,mode='b',badP=$('.bad path',eam),pk=$('.pk',eam),plen=badP&&badP.getTotalLength?badP.getTotalLength():0,pt=0;
    var setE=function(m){mode=m;eam.classList.toggle('after',m==='a');$$('.ad-seg2 button',eam).forEach(function(b){var on=b.getAttribute('data-m')===m;b.classList.toggle('on',on);b.setAttribute('aria-selected',on);});};
    $$('.ad-seg2 button',eam).forEach(function(b){b.addEventListener('click',function(){eUser=true;setE(b.getAttribute('data-m'));});});
    if(R)setE('a');else{
      var et=0,eo2=ticker(function(dt){et+=dt;if(!eUser&&et>3.8){et=0;setE(mode==='b'?'a':'b');}
        if(plen&&pk){pt=(pt+dt*.45)%1;var p=badP.getPointAtLength(plen*(1-pt));pk.setAttribute('transform','translate('+p.x.toFixed(1)+','+p.y.toFixed(1)+')');}});
      bindVis(eo2,eam);}
  }

  /* ---------- how it works · pipeline stepping ---------- */
  var pipe=$('#adPipe');
  if(pipe){var li=$$('ol li',pipe),fg=$('.ad-pl .fg',pipe),k=-1,pv=false,hold2=0;
    var stepP=function(n){li.forEach(function(l,i){l.classList.toggle('on',i<=n);l.classList.toggle('cur',i===n);});if(fg)fg.style.strokeDashoffset=n<0?100:100-(n/(li.length-1))*100;};
    if(R)stepP(li.length-1);else{XH.whenVisible(pipe,function(v){pv=v;});setInterval(function(){if(!pv)return;if(k>=li.length-1){if(++hold2<4)return;hold2=0;k=-1;stepP(-1);return;}k++;stepP(k);},1100);}}

  /* ---------- integrations · hybrid sync packets + countdown ---------- */
  var hy=$('#adHy');
  if(hy){var k1=$('.k1',hy),k2=$('.k2',hy),l2=$('.ln.l2',hy),l2len=l2&&l2.getTotalLength?l2.getTotalLength():0,hc=$('#adHyC'),cd=1800,hp=0,hp2=0,done=0;
    var put=function(el,x,y){if(el)el.setAttribute('transform','translate('+x.toFixed(1)+','+y.toFixed(1)+')');};
    var showC=function(){if(done>0){hc.innerHTML='Sync cycle · <b>delta sync complete</b> · sample';return;}var m=Math.floor(cd/60),s=Math.floor(cd%60);hc.innerHTML='Sync cycle · next run in <b>'+(m<10?'0':'')+m+':'+(s<10?'0':'')+s+'</b>';};
    if(R){put(k1,260,130);if(l2len){var p0=l2.getPointAtLength(l2len*.5);put(k2,p0.x,p0.y);}showC();}
    else{var ht=ticker(function(dt){hp=(hp+dt*.32)%1;var x=148+hp*224;put(k1,x,130);
        if(l2len){hp2=(hp2+dt*.28)%1;var p=l2.getPointAtLength(l2len*hp2);put(k2,p.x,p.y);}
        if(done>0){done-=dt;if(done<=0){cd=1800;}}else{cd-=dt*240;if(cd<=0){cd=0;done=2.4;}}showC();});
      bindVis(ht,hy);}
  }

  /* ---------- capabilities · tap to reveal on touch ---------- */
  $$('.ad-cap button').forEach(function(b){b.addEventListener('click',function(){var on=!b.classList.contains('on');$$('.ad-cap button').forEach(function(x){x.classList.remove('on');});b.classList.toggle('on',on);});});

  /* ---------- configurator · #oAdd ---------- */
  var PR={base:74999,blk:9999,hyb:24999,adcs:19999};
  $$('[data-pr]').forEach(function(e){e.textContent=inr(PR[e.getAttribute('data-pr')]);});
  var cF=$('#cF'),cU=$('#cU'),cHy=$('#cHy'),cCs=$('#cCs'),CFG={};
  function forests(){return Math.max(1,Math.min(10,parseInt(cF&&cF.value,10)||1));}
  function cfg(){if(!cF)return;var f=forests(),u=+cU.value,bl=Math.max(0,Math.ceil((u-2000)/1000)),ao=(cHy.checked?PR.hyb:0)+(cCs.checked?PR.adcs:0),unit=PR.base+bl*PR.blk+ao,sub=unit*f,g=Math.round(sub*.18);
    CFG={f:f,u:u,bl:bl,unit:unit};
    $('#cFL').textContent=f+' forest'+(f>1?'s':'');$('#cUL').textContent=fmt(u);
    $('#cB').textContent=inr(PR.base);$('#cXN').textContent=bl+' × 1,000';$('#cX').textContent=inr(bl*PR.blk);$('#cAo').textContent=inr(ao);
    $('#cQn').textContent=f;$('#cUn').textContent=inr(unit);$('#cSub').textContent=inr(sub);$('#cGst').textContent=inr(g);$('#cTot').textContent=inr(sub+g);}
  if(cF){[cF,cU].forEach(function(e){e.addEventListener('input',cfg);e.addEventListener('change',cfg);});[cHy,cCs].forEach(function(e){e.addEventListener('change',cfg);});cfg();}
  var oAdd=$('#oAdd');if(oAdd)oAdd.addEventListener('click',function(){cfg();var ad=[];if(cHy.checked)ad.push('hybrid');if(cCs.checked)ad.push('AD CS');
    XH.cart.add({key:'ada-'+CFG.u+'-'+(cHy.checked?'h':'')+(cCs.checked?'c':''),name:'Active Directory Assessment · per forest',sub:'Up to '+fmt(Math.max(2000,CFG.u))+' users'+(ad.length?' · + '+ad.join(' + '):'')+' · retest included',price:CFG.unit,qty:CFG.f});});

  /* ---------- free trial form ---------- */
  XH.onForm('adtrial',function(data,f){var msg=f.getAttribute('data-done');var nm=data.name?data.name.split(' ')[0]:'';
    f.innerHTML='<div class="done"><div class="dk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><h4>Free trial booked'+(nm?', '+nm.replace(/[<>&"]/g,''):'')+'</h4><p>'+msg+'</p></div>';
    XH.toast('Free trial request received');return false;});

  /* ---------- tool 1 · AD health checklist ---------- */
  var CQ=[
    {a:0,q:'Do Domain Admins and Enterprise Admins hold only a handful of named people, with no nested groups?',s:'Privileged access',g:'Trim Domain and Enterprise Admins to a few named accounts and remove nested groups.'},
    {a:0,q:'Do admins use separate admin accounts that never sign in to everyday workstations?',s:'Privileged access',g:'Give admins separate per-tier accounts and keep Tier 0 sign-ins off workstations.'},
    {a:1,q:'Are accounts with no sign-in for 90 days disabled and reviewed regularly?',s:'Account hygiene',g:'Disable stale accounts after 90 days and review them with their owners.'},
    {a:1,q:'Are leavers disabled on their last day through a joiner-mover-leaver process?',s:'Account hygiene',g:'Tie account disablement to HR exits so leavers are switched off on day one.'},
    {a:2,q:'Are legacy LM and NTLMv1 authentication blocked across the domain?',s:'Authentication',g:'Audit NTLM use, then block LM and NTLMv1 and plan to reduce NTLM overall.'},
    {a:2,q:'Do service accounts use managed service accounts or long, regularly rotated passwords?',s:'Authentication',g:'Move service accounts to gMSA where possible and rotate the rest.'},
    {a:3,q:'Is a security baseline GPO applied to domain controllers, servers and workstations?',s:'Group Policy',g:'Apply CIS or Microsoft security baselines through Group Policy, by tier.'},
    {a:3,q:'Is the local administrator password unique per machine (Windows LAPS)?',s:'Group Policy',g:'Deploy Windows LAPS so every machine has a unique local admin password.'},
    {a:4,q:'Are all domain controllers on a supported Windows Server version with healthy replication?',s:'DC health & recovery',g:'Upgrade unsupported DCs and fix replication errors before anything else.'},
    {a:4,q:'Is there a tested, offline-protected backup and forest recovery plan?',s:'DC health & recovery',g:'Keep offline system-state backups and rehearse an AD forest recovery.'},
    {a:5,q:'Is the Entra Connect server treated as Tier 0, with privileged users kept out of sync?',s:'Hybrid & monitoring',g:'Harden the Entra Connect server as Tier 0 and keep cloud admins cloud-only.'},
    {a:5,q:'Are changes to privileged groups alerted on, with DC logs kept for 180 days?',s:'Hybrid & monitoring',g:'Alert on privileged group changes and keep DC logs 180 days for CERT-In.'}
  ],CA=['Privileged','Accounts','Auth','GPO','DC & recovery','Hybrid & logs'],cans=[];
  var cl2=$('#ckList');
  if(cl2){cl2.innerHTML=CQ.map(function(q,i){return '<li data-i="'+i+'"><span>'+(i+1)+'</span><p>'+q.q+'<small>'+q.s+'</small></p><div class="ad-qb" role="group" aria-label="Answer"><button type="button" data-v="2">Yes</button><button type="button" data-v="1">Partly</button><button type="button" data-v="0">No / not sure</button></div></li>';}).join('');
    cl2.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;var li=b.closest('li'),i=+li.getAttribute('data-i');cans[i]=+b.getAttribute('data-v');
      $$('button',li).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});li.classList.add('ans');ck(CQ[i].a);});
    $('#ckReset').addEventListener('click',function(){cans=[];$$('li',cl2).forEach(function(li){li.classList.remove('ans');$$('button',li).forEach(function(x){x.classList.remove('on');x.setAttribute('aria-pressed',false);});});ck();});
    ck();}
  function ck(changed){var n=0,s=0,ar=CA.map(function(){return {n:0,s:0};});
    CQ.forEach(function(q,i){if(cans[i]==null)return;n++;s+=cans[i];ar[q.a].n++;ar[q.a].s+=cans[i];});
    var pct=n?Math.round(s/(n*2)*100):0,arc=$('#ckArc');
    $('#ckPct').textContent=pct;arc.style.strokeDashoffset=100-pct;arc.style.stroke=!n||pct>=70?'#0066FF':'#FF8A00';
    $('#ckBand').textContent=!n?'answer to begin':pct<40?'high risk':pct<70?'needs work':pct<90?'good base':'strong';
    $('#ckHm').innerHTML=CA.map(function(a,i){var v=ar[i].n?Math.round(ar[i].s/(ar[i].n*2)*100):null,c=v==null?'':v<40?'r':v<70?'o':'b';return '<div class="'+c+(changed===i?' pop':'')+'"><small>'+a+'</small><b>'+(v==null?'—':v+'%')+'</b></div>';}).join('');
    if(changed!=null)setTimeout(function(){var p=$('#ckHm .pop');if(p)p.classList.remove('pop');},420);
    var gaps=CQ.map(function(q,i){return {q:q,v:cans[i],i:i};}).filter(function(x){return x.v!=null&&x.v<2;}).sort(function(a,b){return a.v-b.v||a.i-b.i;}).slice(0,3);
    $('#ckGaps').innerHTML=!n?'<p class="ad-qe">Your top priorities will appear here as you answer.</p>':gaps.length?gaps.map(function(x){return '<p><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg><span>'+x.q.g+'</span></p>';}).join(''):'<p class="ad-qe">No gaps in your answers so far. An assessment confirms it across every domain and DC.</p>';
    $('#ckDone').textContent=n+' of 12 answered';}

  /* ---------- tool 2 · scope & effort estimator ---------- */
  var DRV={gen:'General hygiene',iso:'ISO 27001 audit',reg:'RBI / SEBI / IRDAI'};
  function num(id,mn,mx){var e=$(id);return Math.max(mn,Math.min(mx,parseInt(e&&e.value,10)||mn));}
  var EST={},gT=0;
  function est(){var eU=$('#eU');if(!eU)return;var F=num('#eF',1,10),D=Math.max(F,num('#eD',1,40)),Cn=num('#eC',1,200),U=+eU.value,hyb=segVal($('#eH'),'yes')==='yes',dr=segVal($('#eR'),'gen');
    $('#eUL').textContent=fmt(U);$('#eHL').textContent=hyb?'Yes · Entra Connect':'No, on-prem only';$('#eRL').textContent=DRV[dr];
    var obj=Math.round(U*2.45+D*140+Cn*12),chk=180*F+40*D+6*Cn+(hyb?60:0)+(dr==='reg'?40:dr==='iso'?20:0),days=Math.ceil(6+F*3+(D-F)*1.2+Cn*.15+U/2500+(hyb?1.5:0)+(dr==='reg'?2:dr==='iso'?1:0));
    var perU=U/F,bl=Math.max(0,Math.ceil((perU-2000)/1000)),unit=PR.base+bl*PR.blk+(hyb?PR.hyb:0),price=unit*F;
    EST={F:F,perU:perU,hyb:hyb};
    $('#eObj').textContent='~'+fmt(obj);$('#eChk').textContent='~'+fmt(chk);$('#eDays').textContent=days;
    var ph2=[['Authorise',0,.12],['Collect',.12,.12],['Analyse',.24,.48],['Readout',.72,.08],['Retest*',.86,.14]];
    $('#eGantt').innerHTML=ph2.map(function(p){return '<div><span>'+p[0]+'</span><i><s style="left:'+(p[1]*100)+'%;width:'+(p[2]*100)+'%"></s></i></div>';}).join('');
    var g=$('#eGantt');g.classList.remove('go');clearTimeout(gT);if(R)g.classList.add('go');else gT=setTimeout(function(){g.classList.add('go');},40);
    var rows=[['Scope',F+' forest'+(F>1?'s':'')+' · '+D+' domain'+(D>1?'s':'')+' · '+Cn+' DC'+(Cn>1?'s':'')],['Users per forest','~'+fmt(perU)+(bl?' · '+bl+' extra block'+(bl>1?'s':''):' · within base')],['Hybrid review',hyb?'included · Entra Connect + tenant check':'not needed'],['Mapping',DRV[dr]+' · CIS · NIST CSF 2.0'],['Retest','included · within 60 days*']];
    $('#eRows').innerHTML=rows.map(function(r){return '<div><span>'+r[0]+'</span><b>'+r[1]+'</b></div>';}).join('');
    $('#ePr').textContent=inr(price)+'*';
    $('#eRec').innerHTML=F>=3||D>=8?'<b>Recommended:</b> start with the free discovery call. With '+F+' forests and '+D+' domains, a consolidation review alongside the assessment often saves more than it costs.':dr==='reg'?'<b>Recommended:</b> assessment plus the hybrid add-on, then quarterly health checks to keep evidence current for your regulator.':Cn>F*8?'<b>Recommended:</b> assessment with extra focus on DC health and replication; '+Cn+' DCs is a lot for '+fmt(U)+' users and some may be retirable.':'<b>Recommended:</b> '+F+' × AD Assessment'+(hyb?' with the hybrid add-on':'')+'. Book the free discovery call first to confirm scope.';}
  ['#eF','#eD','#eC','#eU'].forEach(function(s){var e=$(s);if(e){e.addEventListener('input',est);e.addEventListener('change',est);}});
  ['#eH','#eR'].forEach(function(s){var e=$(s);if(e)e.addEventListener('change',est);});
  var eUse=$('#eUse');if(eUse)eUse.addEventListener('click',function(){if(!cF)return;cF.value=EST.F;cU.value=Math.max(500,Math.min(20000,Math.ceil(EST.perU/500)*500));XH.fillRange&&XH.fillRange(cU);cHy.checked=EST.hyb;cfg();
    var t=$('#configure');if(t)t.scrollIntoView({behavior:R?'auto':'smooth',block:'center'});XH.flash&&XH.flash(t);XH.toast('Estimate copied to the configurator');});
  est();
})();

