
/* XcellSecure | IAM Assessment · page runtime (one shared rAF loop, pauses offscreen) */
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,d=document;
  function cl(v,a,b){return v<a?a:v>b?b:v;}
  function ph(t,s,du){return cl((t-s)/du,0,1);}
  function eo(x){return 1-Math.pow(1-x,3);}
  function eio(x){return x<.5?4*x*x*x:1-Math.pow(-2*x+2,3)/2;}
  function spr(x){if(x<=0)return 0;if(x>=1)return 1;return 1-Math.cos(x*Math.PI*2.5)*Math.exp(-x*5.5);}
  function inr(n){return XH.inr(Math.round(n));}
  function fmt(n){return Math.round(n).toLocaleString('en-IN');}
  function segVal(s,def){if(!s)return def;if(s.dataset.value!=null)return s.dataset.value;var b=$('button.on',s);return b?b.getAttribute('data-v'):def;}
  function setSeg(s,v){if(!s)return;$$('button',s).forEach(function(b){var on=b.getAttribute('data-v')===String(v);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});s.dataset.value=v;s.dispatchEvent(new CustomEvent('change',{bubbles:true}));}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}

  /* ---------- one shared rAF loop ---------- */
  var T=[],raf=0,last=0;
  function ticker(fn){var o={on:false,fn:fn};T.push(o);return o;}
  function frame(now){raf=0;var dt=last?Math.min(.1,(now-last)/1000):.016;last=now;var any=false;
    for(var i=0;i<T.length;i++){if(T[i].on){any=true;T[i].fn(dt,now);}}
    if(any)raf=requestAnimationFrame(frame);else last=0;}
  function wake(){if(!raf&&!R)raf=requestAnimationFrame(frame);}
  function bindVis(o,el){if(!el)return;XH.whenVisible(el,function(v){o.on=v&&!R;if(o.on)wake();});}
  ['#iaHero .ia-rings','#iaOrb'].forEach(function(s){var el=$(s);if(el)XH.whenVisible(el,function(v){el.classList.toggle('paused',!v);});});

  /* magnetic CTAs */
  if(XH.fine&&!R)$$('.ia-mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left)/r.width-.5)*8+'px,'+((e.clientY-r.top)/r.height-.5)*6+'px)';});b.addEventListener('pointerleave',function(){b.style.transform='';});});

  /* =====================================================================
     HERO · IAM maturity lab — 5 rotating live scenes on one canvas
     ===================================================================== */
  var lab=$('#iaLab'),scr=$('#iaScr'),cv=$('#iaCv');
  if(lab&&cv){
    var cx=cv.getContext('2d'),W=0,H=0,K=1,VW=600,VH=380,MOB=false,dpr=Math.min(2,window.devicePixelRatio||1);
    var C={b:'#0066FF',o:'#FF8A00',r:'#c0392b',g:'#16a34a',tx:'#E9EFFB',mu:'rgba(233,239,251,.6)',ln:'rgba(255,255,255,.12)',pn:'#121C3D',bt:'rgba(0,102,255,.5)'};
    var MONO='"IBM Plex Mono",monospace',DISP='Sora,sans-serif';
    function size(){var r=cv.getBoundingClientRect();W=r.width;H=r.height;if(!W)return;MOB=W<460;VW=MOB?400:600;K=W/VW;VH=H/K;cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);}
    function rr(x,y,w,h,r){r=Math.min(r,w/2,h/2);cx.beginPath();cx.moveTo(x+r,y);cx.arcTo(x+w,y,x+w,y+h,r);cx.arcTo(x+w,y+h,x,y+h,r);cx.arcTo(x,y+h,x,y,r);cx.arcTo(x,y,x+w,y,r);cx.closePath();}
    function box(x,y,w,h,o){o=o||{};if(w<=0||h<=0)return;rr(x,y,w,h,o.r==null?8:o.r);if(o.fill){cx.fillStyle=o.fill;cx.fill();}if(o.stroke){cx.strokeStyle=o.stroke;cx.lineWidth=o.lw||1;cx.setLineDash(o.dash||[]);cx.stroke();cx.setLineDash([]);}}
    function font(o){return (o.w||500)+' '+((o.s||11)*(MOB?1.04:1.08)).toFixed(1)+'px '+(o.f==='d'?DISP:MONO);}
    function tx(s,x,y,o){o=o||{};cx.font=font(o);cx.fillStyle=o.c||C.tx;cx.textAlign=o.a||'left';cx.textBaseline='alphabetic';cx.fillText(s,x,y);}
    function tw(s,o){cx.font=font(o||{});return cx.measureText(s).width;}
    function dot(x,y,r,c,glow){if(glow){var g=cx.globalAlpha;cx.globalAlpha=g*.22;cx.fillStyle=c;cx.beginPath();cx.arc(x,y,r*2.6,0,6.283);cx.fill();cx.globalAlpha=g;}cx.fillStyle=c;cx.beginPath();cx.arc(x,y,r,0,6.283);cx.fill();}
    function line(x1,y1,x2,y2,c,w,dash,off){cx.strokeStyle=c;cx.lineWidth=w||1;cx.setLineDash(dash||[]);cx.lineDashOffset=off||0;cx.beginPath();cx.moveTo(x1,y1);cx.lineTo(x2,y2);cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;}
    function fade(t,s,du,fn){var a=eo(ph(t,s,du||.5));if(a<=0)return;var g=cx.globalAlpha;cx.globalAlpha=g*a;fn(a);cx.globalAlpha=g;}
    function head(s){tx(s,MOB?14:18,24,{s:MOB?9:9.5,w:600,c:C.o});}
    function check(x,y,c,sz){sz=sz||1;cx.strokeStyle=c;cx.lineWidth=2;cx.lineCap='round';cx.beginPath();cx.moveTo(x-4*sz,y);cx.lineTo(x-1*sz,y+3*sz);cx.lineTo(x+5*sz,y-4*sz);cx.stroke();cx.lineCap='butt';}
    function pill(s,x,y,bg,o){o=o||{};var fs=o.s||9,w=tw(s,{s:fs,w:700})+14;if(o.a==='right')x-=w;if(o.a==='center')x-=w/2;box(x,y-12,w,17,{fill:bg,r:5});tx(s,x+7,y,{s:fs,w:700,c:'#fff'});return w;}
    function quad(x1,y1,qx,qy,x2,y2,p){var a=1-p;return [a*a*x1+2*a*p*qx+p*p*x2,a*a*y1+2*a*p*qy+p*p*y2];}
    function curve(x1,y1,qx,qy,x2,y2,p,col,w,dash,off){if(p<=0)return;cx.strokeStyle=col;cx.lineWidth=w||1.4;cx.setLineDash(dash||[]);cx.lineDashOffset=off||0;cx.beginPath();cx.moveTo(x1,y1);for(var i=1;i<=20;i++){var q=quad(x1,y1,qx,qy,x2,y2,i/20*p);cx.lineTo(q[0],q[1]);}cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;}

    /* ---- scene 0 : identity discovery ---- */
    var SRC=[['Entra ID','1,214 users','Entra'],['Active Directory','1,486 objects','AD'],['Google Workspace','182 users','Google'],['HR system','1,402 staff','HR'],['SaaS apps','38 apps','SaaS'],['Service accts','437 found','Service']];
    var TYP=[['Employees',1402],['Contractors',284],['Guests',318],['Service & app',437],['Shared',45]];
    function s0(t){
      head(MOB?'IDENTITY DISCOVERY · SAMPLE':'IDENTITY DISCOVERY · 6 SOURCES · SAMPLE ORGANISATION');
      var hx=MOB?200:300,hy=MOB?228:198,hr=MOB?40:46,P=[];
      if(MOB){for(var i=0;i<6;i++)P.push([14+(i%3)*126,44+Math.floor(i/3)*52,118,42]);}
      else{for(var j=0;j<6;j++)P.push([18,44+j*53,150,42]);}
      var tot=Math.round(2486*eo(ph(t,.9,1.9)));
      /* flows */
      P.forEach(function(p,i){var sx=MOB?p[0]+p[2]/2:p[0]+p[2],sy=MOB?p[1]+p[3]:p[1]+p[3]/2,qx=MOB?(sx+hx)/2:(sx+hx)/2+10,qy=MOB?(sy+hy)/2:sy;
        var dp=eo(ph(t,.35+i*.08,.7));curve(sx,sy,qx,qy,hx,hy,dp,'rgba(0,102,255,.45)',1.3);
        if(dp>=1&&t<4.6){for(var k=0;k<2;k++){var u=((t*.55)+i*.17+k*.5)%1,q=quad(sx,sy,qx,qy,hx,hy,u);dot(q[0],q[1],2.4,k?C.o:'#fff',true);}}});
      P.forEach(function(p,i){fade(t,.05+i*.07,.4,function(){box(p[0],p[1],p[2],p[3],{fill:C.pn,stroke:'rgba(255,255,255,.16)',r:9});
        tx(MOB?SRC[i][2]:SRC[i][0],p[0]+10,p[1]+17,{s:MOB?10:11,w:700,f:'d'});tx(SRC[i][1],p[0]+10,p[1]+32,{s:MOB?8.5:9,c:C.mu});
        if(i===5&&t>2.6&&!MOB)pill('NON-EXPIRING',p[0]+p[2]-6,p[1]-3,C.o,{a:'right',s:8});});});
      /* hub */
      var pu=(t*.6)%1,g=cx.globalAlpha;cx.globalAlpha=g*(1-pu)*.5;cx.strokeStyle=C.b;cx.lineWidth=1.4;cx.beginPath();cx.arc(hx,hy,hr+pu*30,0,6.283);cx.stroke();cx.globalAlpha=g;
      fade(t,.2,.5,function(){cx.fillStyle=C.b;cx.beginPath();cx.arc(hx,hy,hr*(.85+.15*spr(ph(t,.2,.9))),0,6.283);cx.fill();
        tx(fmt(tot),hx,hy+5,{s:MOB?15:17,w:800,f:'d',a:'center',c:'#fff'});tx('identities',hx,hy+19,{s:8.5,a:'center',c:'rgba(255,255,255,.85)'});});
      if(!MOB){var px=408,py=44,pw=VW-px-16;
        fade(t,.6,.5,function(){box(px,py,pw,300,{fill:C.pn,stroke:'rgba(255,255,255,.14)',r:12});tx('BY TYPE',px+14,py+22,{s:9,w:600,c:C.mu});
          TYP.forEach(function(ty,i){var y=py+46+i*36,f=eo(ph(t,1+i*.18,1));tx(ty[0],px+14,y,{s:10,w:600,f:'d'});tx(fmt(ty[1]*f),px+pw-14,y,{s:10,w:700,a:'right'});
            box(px+14,y+7,pw-28,6,{fill:'rgba(255,255,255,.08)',r:3});box(px+14,y+7,(pw-28)*ty[1]/1402*f,6,{fill:i===2?C.o:C.b,r:3});});
          fade(t,2.6,.5,function(a){var y=py+238;pill('312 STALE · 90+ DAYS',px+14,y,C.o,{s:8.5});pill('41 ORPHANED',px+14,y+26,C.r,{s:8.5});tx('no HR match (sample)',px+14,y+46,{s:8.5,c:C.mu});});});}
      else{fade(t,.9,.5,function(){var y=292,x=14,gw=VW-28,f=eo(ph(t,.9,1.4));tx('BY TYPE',x,y-8,{s:8.5,w:600,c:C.mu});TYP.forEach(function(ty,i){var w=gw*ty[1]/2486*f;box(x,y,Math.max(0,w-2),12,{fill:[C.b,C.bt,C.o,'rgba(255,255,255,.55)',C.r][i],r:3});x+=w;});
        tx('employees · contractors · guests · service · shared',14,y+28,{s:8.5,c:C.mu});});
        fade(t,2.4,.5,function(){var y=VH-36;pill('312 STALE',14,y,C.o);pill('41 ORPHANED',112,y,C.r);tx('of 2,486 identities · sample',14,y+22,{s:9,c:C.mu});});}
    }

    /* ---- scene 1 : maturity radar ---- */
    var AX=['Lifecycle','MFA','SSO','Privileged','Governance','External','Workload','Monitoring'],AXm=['Life','MFA','SSO','Priv','Gov','Ext','Wkld','Mon'];
    var CUR=[2.1,2.4,1.6,1.3,1.2,2.0,1.4,1.9],TGT=[3.2,3.5,3.0,3.0,2.8,3.0,2.7,3.1];
    function s1(t){
      head(MOB?'MATURITY RADAR · 8 PILLARS · SAMPLE':'IAM MATURITY RADAR · 8 PILLARS · 4 STAGES · SAMPLE');
      var ox=MOB?200:200,oy=MOB?196:206,rad=MOB?118:128;
      function pt(i,v){var a=-Math.PI/2+i*Math.PI/4,r=rad*v/4;return [ox+Math.cos(a)*r,oy+Math.sin(a)*r];}
      fade(t,.05,.5,function(){for(var lv=1;lv<=4;lv++){cx.beginPath();for(var i=0;i<8;i++){var p=pt(i,lv);i?cx.lineTo(p[0],p[1]):cx.moveTo(p[0],p[1]);}cx.closePath();cx.strokeStyle=lv===4?'rgba(255,255,255,.2)':C.ln;cx.lineWidth=1;cx.stroke();}
        for(var j=0;j<8;j++){var e=pt(j,4);line(ox,oy,e[0],e[1],C.ln);var l=pt(j,4.55);tx(MOB?AXm[j]:AX[j],l[0],l[1]+4,{s:MOB?9:9.5,w:600,a:Math.abs(l[0]-ox)<8?'center':l[0]>ox?'left':'right',c:C.mu});}});
      var g0=spr(ph(t,.3,1.2)),m=eio(ph(t,2.6,1.3));
      fade(t,1.4,.5,function(){cx.beginPath();for(var i=0;i<8;i++){var p=pt(i,TGT[i]);i?cx.lineTo(p[0],p[1]):cx.moveTo(p[0],p[1]);}cx.closePath();cx.strokeStyle=C.o;cx.lineWidth=1.6;cx.setLineDash([5,4]);cx.lineDashOffset=-t*12;cx.stroke();cx.setLineDash([]);cx.lineDashOffset=0;});
      if(g0>0){var V=CUR.map(function(v,i){return (v+(TGT[i]-v)*m)*g0;});
        cx.beginPath();for(var i=0;i<8;i++){var p=pt(i,Math.max(.05,V[i]));i?cx.lineTo(p[0],p[1]):cx.moveTo(p[0],p[1]);}cx.closePath();
        cx.fillStyle=m>0?'rgba(22,163,74,'+(.12+.14*m)+')':'rgba(0,102,255,.3)';cx.fill();cx.strokeStyle=m>.5?C.g:C.b;cx.lineWidth=2.2;cx.stroke();
        for(var k=0;k<8;k++){var q=pt(k,Math.max(.05,V[k]));dot(q[0],q[1],3.2,k===4&&m<.2?C.o:'#fff');}}
      var ov=1.74+(3.04-1.74)*m;
      if(!MOB){var px=410,py=56,pw=VW-px-16;fade(t,.5,.5,function(){box(px,py,pw,290,{fill:C.pn,stroke:'rgba(255,255,255,.14)',r:12});
        tx('OVERALL',px+14,py+24,{s:9,w:600,c:C.mu});tx(ov.toFixed(1)+' / 4',px+14,py+56,{s:24,w:800,f:'d',c:'#fff'});tx(m>.5?'Advanced (target)':'Initial',px+14,py+76,{s:10,w:600,c:m>.5?C.g:C.o});
        line(px+14,py+92,px+pw-14,py+92,C.ln);tx('STAGES',px+14,py+112,{s:9,w:600,c:C.mu});
        [['1','Traditional'],['2','Initial'],['3','Advanced'],['4','Optimal']].forEach(function(s,i){var y=py+134+i*24;box(px+14,y-11,16,16,{fill:i===1&&m<.5||i===2&&m>=.5?C.b:'rgba(255,255,255,.08)',r:4});tx(s[0],px+22,y+1,{s:9,w:700,a:'center'});tx(s[1],px+38,y+1,{s:10,w:600,f:'d'});});
        fade(t,1.6,.4,function(){var y=py+250;box(px+14,y-8,14,3,{fill:C.o,r:1});tx('90-day target',px+34,y-3,{s:9,c:C.mu});
          if(m<.3)pill('LOWEST · GOVERNANCE 1.2',px+14,y+22,C.o,{s:8});else pill('ROADMAP APPLIED',px+14,y+22,C.g,{s:8});});});}
      else fade(t,.5,.5,function(){tx('overall '+ov.toFixed(1)+' / 4 · '+(m>.5?'Advanced (target)':'Initial'),14,VH-16,{s:10.5,w:700,c:m>.5?C.g:'#fff'});});
    }

    /* ---- scene 2 : MFA coverage ---- */
    var GR=[['Admins','41'],['Employees','1,402'],['Contractors','284'],['Guests','318']];
    var MB=[[10,55,35],[5,78,17],[0,52,48],[0,40,60]],MA=[[100,0,0],[62,38,0],[35,65,0],[0,92,8]];
    function s2(t){
      head(MOB?'MFA COVERAGE · BY GROUP · SAMPLE':'MFA COVERAGE BY USER GROUP · CURRENT → 90-DAY TARGET · SAMPLE');
      var x0=MOB?14:130,x1=MOB?VW-14:VW-18,y0=MOB?64:62,rh=MOB?56:52,bh=MOB?18:22,m=eio(ph(t,2.5,1.3));
      var COL=[C.b,C.bt,C.r];
      GR.forEach(function(g,i){var y=y0+i*rh;fade(t,.05+i*.08,.4,function(){
        if(MOB){tx(g[0],x0,y,{s:10.5,w:700,f:'d'});tx(g[1],x1,y,{s:9,a:'right',c:C.mu});}else{tx(g[0],18,y+bh/2+2,{s:11,w:700,f:'d'});tx(g[1]+' users',18,y+bh/2+16,{s:8.5,c:C.mu});}
        var by=MOB?y+8:y,gw=x1-x0,x=x0,gr=eo(ph(t,.3+i*.15,.8));box(x0,by,gw,bh,{fill:'rgba(255,255,255,.06)',r:6});
        for(var k=0;k<3;k++){var v=(MB[i][k]+(MA[i][k]-MB[i][k])*m)/100*gw*gr;if(v>.5){box(x,by,v,bh,{fill:COL[k],r:k===0||v>=gw-1?6:3});if(v>34)tx(Math.round(v/gw/gr*100)+'%',x+6,by+bh/2+4,{s:9,w:700,c:'#fff'});}x+=v;}
        if(i===0&&m>=1)check(x1-12,by+bh/2,'#fff');});});
      var ly=y0+4*rh+(MOB?8:4);
      fade(t,.2,.4,function(){var x=MOB?14:130;[[C.b,'phishing-resistant'],[C.bt,'other MFA'],[C.r,'no MFA']].forEach(function(l){box(x,ly-8,10,10,{fill:l[0],r:2});tx(l[1],x+15,ly+1,{s:9,c:C.mu});x+=tw(l[1],{s:9})+34;});});
      var lg=Math.round(1240*(1-eio(ph(t,2.7,1.2))));
      fade(t,1.2,.5,function(){var y=ly+(MOB?30:34),x=MOB?14:130;box(x,y-14,MOB?VW-28:VW-148,30,{fill:C.pn,stroke:lg?'rgba(192,57,43,.6)':'rgba(22,163,74,.6)',r:8});
        tx('legacy authentication sign-ins / day',x+12,y+5,{s:9.5,c:C.mu});tx(fmt(lg),(MOB?VW-14:VW-18)-12,y+6,{s:13,w:800,f:'d',a:'right',c:lg?'#fff':C.g});});
    }

    /* ---- scene 3 : privilege & SoD matrix ---- */
    var RL=[['Global admin ×14','Gl. admin'],['Finance approver','Finance'],['Vendor support','Vendor'],['Helpdesk','Helpdesk'],['Payroll admin','Payroll']];
    var PC=[['Create','vendor'],['Approve','payment'],['Reset','passwords'],['Change','payroll'],['Manage','roles']];
    var GM=[[1,1,1,1,1],[2,4,0,0,0],[0,0,1,3,3],[0,0,1,0,0],[0,2,0,4,0]];
    function s3(t){
      head(MOB?'PRIVILEGE & SoD MATRIX · SAMPLE':'PRIVILEGE & SEGREGATION-OF-DUTIES MATRIX · SAMPLE');
      var lx=MOB?14:18,mx=MOB?92:168,cw=MOB?60:74,chh=MOB?44:44,my=MOB?82:78,fix=eio(ph(t,3,.9)),scan=ph(t,.6,2.1);
      fade(t,.05,.4,function(){PC.forEach(function(p,j){var x=mx+j*cw+cw/2;tx(p[0],x,my-24,{s:MOB?8.5:9,w:600,a:'center',c:C.mu});tx(p[1],x,my-12,{s:MOB?8.5:9,w:600,a:'center',c:C.mu});});});
      RL.forEach(function(r,i){var y=my+i*chh;fade(t,.1+i*.07,.4,function(){tx(MOB?r[1]:r[0],lx,y+chh/2+4,{s:MOB?9.5:10.5,w:700,f:'d',c:i===0&&fix>.5?C.g:'#fff'});
        for(var j=0;j<5;j++){var x=mx+j*cw,v=GM[i][j],cxm=x+cw/2,cym=y+chh/2;box(x+3,y+3,cw-6,chh-6,{fill:'rgba(255,255,255,.035)',stroke:C.ln,r:7});
          if(!v)continue;var seen=scan*5>i+.5||t>2.8;
          if(v===1){var on=i===0&&fix>0?1-fix*.7:1,g=cx.globalAlpha;cx.globalAlpha=g*on;box(x+9,y+9,cw-18,chh-18,{fill:C.b,r:5});cx.globalAlpha=g;if(i===0&&fix>.5)tx('JIT',cxm,cym+4,{s:8.5,w:700,a:'center',c:'#fff'});}
          else{var keep=v===4,bad=v===3?C.o:C.r,a=keep?1:1-fix;if(a>0){var g2=cx.globalAlpha;cx.globalAlpha=g2*a;box(x+9,y+9,cw-18,chh-18,{fill:seen&&!(keep&&fix>.5)?bad:C.b,r:5});cx.globalAlpha=g2;}
            if(seen&&fix<1){var pu=(t*1.4)%1,g3=cx.globalAlpha;cx.globalAlpha=g3*(1-pu)*(1-fix);rr(x+5-pu*4,y+5-pu*4,cw-10+pu*8,chh-10+pu*8,8);cx.strokeStyle=bad;cx.lineWidth=1.6;cx.stroke();cx.globalAlpha=g3;}
            if(!keep&&fix>.6){var g4=cx.globalAlpha;cx.globalAlpha=g4*ph(fix,.6,.4);box(x+9,y+9,cw-18,chh-18,{stroke:C.g,dash:[3,3],r:5});tx('removed',cxm,cym+3,{s:MOB?7:7.5,w:700,a:'center',c:C.g});cx.globalAlpha=g4;}}}});});
      if(scan>0&&scan<1){var sy=my+scan*5*chh;line(mx,sy,mx+5*cw,sy,C.o,1.6);}
      var bottom=my+5*chh+(MOB?26:24);
      fade(t,1,.5,function(){if(fix<.5){pill(MOB?'2 SoD CONFLICTS':'2 SoD CONFLICTS',lx,bottom,C.r);pill(MOB?'2 EXCESS':'2 EXCESS RIGHTS',lx+(MOB?118:126),bottom,C.o);}
        else{pill('CONFLICTS REMOVED',lx,bottom,C.g);if(!MOB)tx('global admins 14 → 4 standing · rest just-in-time (sample)',lx+140,bottom,{s:9.5,c:C.mu});}
        if(MOB&&fix>=.5)tx('global admins 14 → 4 · rest just-in-time',lx,bottom+20,{s:9,c:C.mu});});
    }

    /* ---- scene 4 : 30-60-90 roadmap ---- */
    var RM=[['Block legacy authentication','Legacy auth',0,15,1],['Phishing-resistant MFA · admins','Admin MFA',0,30,1],['Disable 312 stale accounts','Stale accts',5,30,1],['Just-in-time admin roles','JIT roles',30,60,0],['Quarterly access reviews','Reviews',45,90,0],['HR-driven joiner-mover-leaver','JML',50,90,0]];
    function s4(t){
      head(MOB?'ROADMAP · 30-60-90 DAYS · SAMPLE':'REMEDIATION ROADMAP · 30-60-90 DAYS · SAMPLE');
      var lx=MOB?14:18,gx=MOB?100:210,gx1=MOB?VW-14:418,gy=MOB?70:72,rh=MOB?40:40,bh=16;
      function X(dd){return gx+(gx1-gx)*dd/90;}
      fade(t,.05,.4,function(){[0,30,60,90].forEach(function(dd){line(X(dd),gy-14,X(dd),gy+6*rh-8,C.ln,1,[3,4]);tx(dd?dd+'d':'day 0',X(dd),gy-20,{s:8.5,a:dd===90?'right':dd?'center':'left',c:C.mu});});});
      RM.forEach(function(r,i){var y=gy+i*rh;fade(t,.1+i*.06,.4,function(){tx(MOB?r[1]:r[0],lx,y+bh/2+4,{s:MOB?9.5:10,w:600,f:'d'});});
        var p=eo(ph(t,.5+i*.35,.7));if(p<=0)return;var x=X(r[2]),w=(X(r[3])-x)*p;box(x,y,w,bh,{fill:r[4]?C.o:C.b,r:5});
        if(p>=1){if(r[4]&&t>3.2){check(x+w-10,y+bh/2,'#fff',.8);}}});
      var sc=1.7+1.3*eo(ph(t,1,3.2));
      if(!MOB){var px=436,py=60,pw=VW-px-16;fade(t,.4,.5,function(){box(px,py,pw,270,{fill:C.pn,stroke:'rgba(255,255,255,.14)',r:12});
        var ox=px+pw/2,oy=py+92,rad=48;cx.lineWidth=9;cx.strokeStyle='rgba(255,255,255,.08)';cx.beginPath();cx.arc(ox,oy,rad,Math.PI*.75,Math.PI*2.25);cx.stroke();
        cx.lineCap='round';cx.strokeStyle=sc>=2.95?C.g:C.b;cx.beginPath();cx.arc(ox,oy,rad,Math.PI*.75,Math.PI*.75+Math.PI*1.5*sc/4);cx.stroke();cx.lineCap='butt';
        tx(sc.toFixed(1),ox,oy+7,{s:22,w:800,f:'d',a:'center',c:'#fff'});tx('maturity / 4',ox,oy+24,{s:8.5,a:'center',c:C.mu});
        tx('QUICK WINS',px+14,py+176,{s:9,w:600,c:C.mu});box(px+14,py+184,10,10,{fill:C.o,r:2});tx('≤ 30 days',px+30,py+193,{s:9.5,c:'#fff'});
        box(px+14,py+202,10,10,{fill:C.b,r:2});tx('30–90 days',px+30,py+211,{s:9.5,c:'#fff'});
        fade(t,3.6,.5,function(){pill('1.7 → 3.0 TARGET',px+14,py+248,C.g,{s:8.5});});});}
      else fade(t,.4,.5,function(){tx('maturity '+sc.toFixed(1)+' / 4'+(t>3.6?' · target reached':''),14,VH-18,{s:11,w:700,c:t>3.6?C.g:'#fff'});});
    }

    var SC=[s0,s1,s2,s3,s4],DUR=5.5,si=0,st=0,hold=false;
    var META=[
      {t:'01 · Discover',k:'identities found',v:'2,486',p:100,c:'',fp:'LIFECYCLE',fs:'High',fc:'',ft:'312 stale accounts',fn:'no sign-in for 90+ days (sample)',log:['Read-only exports received · 6 identity sources (sample)','HR leaver list reconciled · 41 orphaned accounts (sample)','437 service accounts · 96 with non-expiring passwords (sample)']},
      {t:'02 · Radar',k:'overall maturity',v:'1.7 → 3.0',p:43,c:'wr',fp:'GOVERNANCE',fs:'High',fc:'',ft:'No access reviews on record',fn:'lowest pillar · 1.2 of 4 (sample)',log:['8 pillars scored · CISA ZTMM stages (sample)','Strongest · MFA 2.4 · weakest · governance 1.2 (sample)','90-day target modelled · overall 3.0 (sample)']},
      {t:'03 · MFA',k:'admins phishing-resistant',v:'10→100%',p:100,c:'ok',fp:'AUTHENTICATION',fs:'Critical',fc:'c',ft:'Legacy authentication allowed',fn:'1,240 legacy sign-ins a day (sample)',log:['Authentication methods exported · 2,045 users (sample)','35% of admins on SMS or no MFA (sample)','Target · passkeys / FIDO2 for every admin (sample)']},
      {t:'04 · Privilege',k:'standing global admins',v:'14 → 4',p:71,c:'ok',fp:'PRIVILEGED ACCESS',fs:'Critical',fc:'c',ft:'2 duties conflicts',fn:'create vendor + approve payment (sample)',log:['Role assignments mapped · 5 sensitive roles (sample)','2 segregation-of-duties conflicts flagged (sample)','Plan · just-in-time roles, 4 standing admins (sample)']},
      {t:'05 · Roadmap',k:'90-day target',v:'3.0 / 4',p:75,c:'ok',fp:'ROADMAP',fs:'Plan',fc:'b',ft:'3 quick wins in 30 days',fn:'owners & licence impact listed (sample)',log:['Findings ranked by risk and effort (sample)','30-day quick wins · legacy auth, admin MFA, stale (sample)','Readout booked · re-score in 6 months (sample)']}
    ];
    var dots=$$('#iaDots button'),ttl=$('#iaTitle'),logEl=$('#iaLog'),fc=$('#iaFc'),rg=$('#iaRg'),rv=$('#iaRv'),rk=$('#iaRk'),prog=$('#iaProg'),logI=0,logT=0;
    function setCards(i,first){var m=META[i];ttl.textContent=m.t;rk.textContent=m.k;rv.textContent=m.v;rv.classList.toggle('lg',m.v.length>6);rg.setAttribute('class','fg'+(m.c?' '+m.c:''));
      dots.forEach(function(b,k){b.classList.toggle('on',k===i);b.classList.toggle('done',k<i);b.setAttribute('aria-selected',k===i);});
      function fill(){$('#iaFp').textContent=m.fp+' · sample';var s=$('#iaFs');s.textContent=m.fs;s.className='ia-sv'+(m.fc?' '+m.fc:'');$('#iaFt').textContent=m.ft;$('#iaFn').textContent=m.fn;fc.classList.remove('sw');}
      if(first||R)fill();else{fc.classList.add('sw');setTimeout(fill,280);}
      logI=0;logT=0;swapLog(m.log[0],first);}
    function swapLog(s,now){if(now||R){logEl.textContent=s;return;}logEl.classList.add('sw');setTimeout(function(){logEl.textContent=s;logEl.classList.remove('sw');},260);}
    function go(i){si=(i+5)%5;st=0;setCards(si);}
    function draw(){if(!W)return;cx.setTransform(dpr*K,0,0,dpr*K,0,0);cx.clearRect(0,0,VW,VH);
      var fi=ph(st,0,.45),fo=1-ph(st,DUR-.4,.4);cx.globalAlpha=R?1:Math.min(fi,fo);SC[si](R?5:st);cx.globalAlpha=1;}
    function ring(){var m=META[si],p=R?1:eo(ph(st,.3,2));rg.style.strokeDashoffset=100-m.p*p;}
    size();addEventListener('resize',function(){size();draw();});
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){size();draw();});
    setCards(0,true);
    if(R){st=5;draw();ring();}
    else{
      var hero=ticker(function(dt){if(!hold){st+=dt;if(st>=DUR)go(si+1);}
        if(prog)prog.style.transform='scaleX('+cl(st/DUR,0,1).toFixed(3)+')';
        if(!hold){logT+=dt;if(logT>1.8&&logI<2){logT=0;logI++;swapLog(META[si].log[logI]);}}
        draw();ring();});
      bindVis(hero,scr);
      var stage=$('#iaStage');
      stage.addEventListener('mouseenter',function(){hold=true;lab.classList.add('hold');});
      stage.addEventListener('mouseleave',function(){hold=false;lab.classList.remove('hold');});
      var sx0=null,sy0=0;
      scr.addEventListener('pointerdown',function(e){sx0=e.clientX;sy0=e.clientY;});
      scr.addEventListener('pointerup',function(e){if(sx0==null)return;var dx=e.clientX-sx0,dy=e.clientY-sy0;sx0=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))go(si+(dx<0?1:-1));});
      scr.addEventListener('touchstart',function(e){var p=e.touches[0];sx0=p.clientX;sy0=p.clientY;},{passive:true});
      scr.addEventListener('touchend',function(e){if(sx0==null)return;var p=e.changedTouches[0],dx=p.clientX-sx0,dy=p.clientY-sy0;sx0=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))go(si+(dx<0?1:-1));},{passive:true});
    }
    dots.forEach(function(b){b.addEventListener('click',function(){go(+b.getAttribute('data-s'));if(R){st=5;draw();ring();}});});
    /* test hook: jump to a scene and time */
    window.__iaScene=function(i,tm){si=i;st=tm||4.2;setCards(i,true);hold=true;draw();ring();};
  }

  /* ---------- pillars explorer ---------- */
  var PIL=[
    {h:'Identity lifecycle',p:'How accounts are created, changed and removed when people join, move or leave, and whether HR is the source of truth.',l:['HR-to-directory reconciliation','Leaver disablement time','Mover access clean-up','Contractor end dates'],f:['Leavers still enabled','Orphaned accounts with no HR record','Movers keeping old group memberships'],m:['NIST CSF PR.AA-01','CIS 5.1, 5.3','ISO 27001 A.5.16']},
    {h:'Authentication & MFA',p:'Which methods people use to sign in, how strong they are, and where MFA can be skipped.',l:['MFA registration and enforcement','Phishing-resistant methods (passkeys, FIDO2)','Legacy protocols','Password policy and banned lists'],f:['Admins on SMS codes or no MFA','Legacy authentication still allowed','MFA exclusions nobody owns'],m:['NIST SP 800-63B-4 AAL2/AAL3','CIS 6.3–6.5','ISO 27001 A.8.5']},
    {h:'SSO & access policy',p:'Whether apps sign in through a central identity provider, and whether access decisions use device, location and risk.',l:['App SSO coverage','Conditional Access or equivalent policies','Local app accounts','Session and device controls'],f:['Business apps with local passwords','Policies in report-only for months','No device compliance check'],m:['NIST CSF PR.AA-03','CIS 6.7','CISA ZTMM Identity']},
    {h:'Privileged access',p:'How many people hold admin rights, whether those rights are standing or just in time, and how emergency access works.',l:['Admin role and group membership','Just-in-time activation','Break-glass account design','Admin workstation separation'],f:['Too many standing global or domain admins','Admins using daily accounts','Break-glass accounts never tested'],m:['CIS 5.4, 6.8','ISO 27001 A.8.2','Microsoft enterprise access model']},
    {h:'Governance & reviews',p:'Whether access is approved, reviewed and recertified, and whether conflicting duties are prevented.',l:['Access request and approval flow','Periodic access reviews','Segregation of duties','Entitlement packages'],f:['No access-review evidence','Finance duties not separated','Group owners unknown'],m:['NIST CSF PR.AA-05','ISO 27001 A.5.18','RBI / SEBI CSCRF review expectations']},
    {h:'External identities',p:'Guests, partners and vendors: how they are invited, what they can reach, and when their access ends.',l:['Guest invitation settings','Vendor and partner accounts','External sharing','Expiry and sponsor ownership'],f:['Guests never reviewed','Vendor accounts with no end date','Anyone can invite guests'],m:['CIS 5.3','ISO 27001 A.5.19–5.20','DPDP Act access safeguards']},
    {h:'Workload identities',p:'Service accounts, app registrations, secrets and certificates that software uses to authenticate.',l:['Service account inventory and owners','App secret and certificate expiry','Permissions granted to apps','Managed identity use'],f:['Service accounts with non-expiring passwords','Secrets past expiry or never rotated','Apps with tenant-wide permissions'],m:['CIS 5.5','NIST CSF PR.AA-01','ISO 27001 A.5.17']},
    {h:'Monitoring & detection',p:'Whether sign-in and audit logs are kept, watched and acted on, and how risky sign-ins are handled.',l:['Sign-in and audit log retention','Risky sign-in and user detections','Alert routing to SOC','Log location'],f:['Sign-in logs kept 30 days, not 180','No alert on new admin assignment','Risk detections not reviewed'],m:['CERT-In 180-day logs','CIS 8.2','NIST CSF DE.CM']}
  ];
  var plg=$$('#iaPlg button');
  function pickP(i){var p=PIL[i];plg.forEach(function(b,k){b.classList.toggle('on',k===i);b.setAttribute('aria-selected',k===i);});
    $('#iaPk').textContent='Pillar 0'+(i+1);$('#iaPh').textContent=p.h;$('#iaPp').textContent=p.p;
    $('#iaPl1').innerHTML=p.l.map(function(x){return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg><span>'+x+'</span></li>';}).join('');
    $('#iaPl2').innerHTML=p.f.map(function(x){return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg><span>'+x+'</span></li>';}).join('');
    $('#iaPm').innerHTML=p.m.map(function(x){return '<em>'+x+'</em>';}).join('');}
  if(plg.length){plg.forEach(function(b){b.addEventListener('click',function(){pickP(+b.getAttribute('data-p'));});});pickP(0);}

  /* ---------- method · scroll-linked line ---------- */
  var mt=$('#iaMt');
  if(mt){var mli=$$('ol li',mt),mfg=$('#iaMfg'),mq=0;
    var mUpd=function(){mq=0;var r=mt.getBoundingClientRect(),vh=innerHeight,p=cl((vh*.65-r.top)/r.height,0,1);mfg.style.strokeDashoffset=100-p*100;
      mli.forEach(function(l,i){l.classList.toggle('on',p>=(i+.35)/mli.length);});};
    if(R){mfg.style.strokeDashoffset=0;mli.forEach(function(l){l.classList.add('on');});}
    else{addEventListener('scroll',function(){if(!mq){mq=1;requestAnimationFrame(mUpd);}},{passive:true});mUpd();}}

  /* ---------- engagement scorecard ---------- */
  var card=$('#iaCard');
  if(card){var rows=$$('.ia-cdr',card),cdDone=false;
    var cdGo=function(){rows.forEach(function(r,i){var v=+r.getAttribute('data-v'),tg=+r.getAttribute('data-t');setTimeout(function(){$('u',r).style.transform='scaleX('+(tg/4)+')';$('s',r).style.transform='scaleX('+(v/4)+')';},R?0:i*120);});};
    if(R)cdGo();else XH.whenVisible(card,function(v){if(v&&!cdDone){cdDone=true;cdGo();}});}

  /* ---------- configurator · #oAdd ---------- */
  var PR={core:99999,plus:149999},ADD={src:29999,ub:19999,pam:39999,re:49999},PN={core:'IAM Assessment',plus:'IAM Assessment Plus'};
  $$('[data-pr]').forEach(function(e){e.textContent=inr(PR[e.getAttribute('data-pr')]);});
  var cPk=$('#cPk'),cQ=$('#cQ'),cSrc=$('#cSrc'),cUb=$('#cUb'),cPam=$('#cPam'),cRe=$('#cRe');
  function iv(e,mn,mx){return Math.max(mn,Math.min(mx,parseInt(e&&e.value,10)||0));}
  function cfgState(){var p=segVal(cPk,'core'),plus=p==='plus';return {p:p,plus:plus,src:iv(cSrc,0,10),ub:iv(cUb,0,20),pam:plus||cPam.checked,re:plus||cRe.checked,q:Math.max(1,iv(cQ,1,10))};}
  function cfgUnit(s){return PR[s.p]+s.src*ADD.src+s.ub*ADD.ub+(s.plus?0:(s.pam?ADD.pam:0)+(s.re?ADD.re:0));}
  function cfg(){if(!cPk)return;var s=cfgState(),u=cfgUnit(s),sub=u*s.q;
    [cPam,cRe].forEach(function(c){c.disabled=s.plus;if(s.plus)c.checked=true;c.closest('.ia-ad').classList.toggle('inc',s.plus);});
    $('#cPkL').textContent=PN[s.p];$('#cQL').textContent=s.q+' assessment'+(s.q>1?'s':'');
    var rows=[[PN[s.p],inr(PR[s.p])]];if(s.src)rows.push([s.src+' extra source'+(s.src>1?'s':'')+' × ₹29,999',inr(s.src*ADD.src)]);if(s.ub)rows.push([s.ub+' × 1,000-user block',inr(s.ub*ADD.ub)]);
    if(s.pam)rows.push(['Privileged access deep-dive',s.plus?'included':inr(ADD.pam)]);if(s.re)rows.push(['Re-score after 6 months',s.plus?'included':inr(ADD.re)]);
    $('#cRows').innerHTML=rows.map(function(r){return '<div><span>'+r[0]+'</span><b>'+r[1]+'</b></div>';}).join('');
    $('#cU').textContent=inr(u);$('#cSubL').textContent='× '+s.q;$('#cSub').textContent=inr(sub);$('#cGst').textContent=inr(sub*.18);$('#cTot').textContent=inr(sub*1.18);}
  if(cPk){[cQ,cSrc,cUb].forEach(function(e){e.addEventListener('input',cfg);e.addEventListener('change',cfg);});[cPam,cRe].forEach(function(e){e.addEventListener('change',cfg);});cPk.addEventListener('change',cfg);cfg();}
  var oAdd=$('#oAdd');if(oAdd)oAdd.addEventListener('click',function(){var s=cfgState(),u=cfgUnit(s),parts=[];
    if(s.src)parts.push('+'+s.src+' source'+(s.src>1?'s':''));if(s.ub)parts.push('+'+s.ub*1000+' users');if(!s.plus&&s.pam)parts.push('privileged deep-dive');if(!s.plus&&s.re)parts.push('6-month re-score');
    XH.cart.add({key:'iam-'+s.p+'-'+s.src+'-'+s.ub+'-'+(s.pam?1:0)+(s.re?1:0),name:PN[s.p],sub:(parts.length?parts.join(' · '):'standard scope')+' · scorecard, report & roadmap',price:u,qty:s.q});});
  $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){setSeg(cPk,b.getAttribute('data-pick'));cfg();});});

  /* ---------- free trial form ---------- */
  XH.onForm('iam-trial',function(data,f){var nm=data.name?String(data.name).split(' ')[0]:'there';
    f.insertAdjacentHTML('afterend','<div class="done"><div class="dk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><h4>Free discovery call requested</h4><p>Thanks, '+esc(nm)+'. An XcellHost identity consultant will contact you at '+esc(data.email||'your email')+' within one business day to book your free 1-hour IAM discovery call*. Reference: IAM-'+String(Date.now()).slice(-6)+'.</p></div>');
    f.parentNode.removeChild(f);XH.toast('Free trial request received');return false;});

  /* ---------- tool 1 · maturity quiz ---------- */
  var QZ=[
    {p:'Lifecycle',q:'When someone leaves, how is their access removed?',o:['Manually, when IT hears about it','Ticket from HR, done within a week','Same day, HR-triggered, mostly automated','Automatic from HR, including apps'],g:'Drive leaver disablement from HR data so accounts close the same day.'},
    {p:'MFA',q:'How do administrators sign in?',o:['Password only for some admins','MFA by SMS or app codes','Authenticator app with number matching','Passkeys / FIDO2 keys, enforced'],g:'Move every admin to phishing-resistant MFA (passkeys or FIDO2 keys) first.'},
    {p:'SSO',q:'How many business apps sign in through your identity provider?',o:['Few or none','About a quarter','Most, with access policies','All, with device and risk checks'],g:'Bring priority apps under SSO and retire local app passwords.'},
    {p:'Privileged',q:'How are admin rights held?',o:['Many permanent admins','Fewer, but still permanent','Just-in-time for most roles','Just-in-time with approval and recording'],g:'Cut standing admins and move to just-in-time role activation.'},
    {p:'Governance',q:'How often is access reviewed and recertified?',o:['Never formally','Once a year, on spreadsheets','Quarterly for key apps, tracked','Continuous, with duties conflicts blocked'],g:'Start quarterly access reviews for admin roles and finance apps.'},
    {p:'External',q:'How are guest and vendor accounts handled?',o:['Anyone invites, no expiry','IT invites, rarely reviewed','Sponsor-owned, reviewed yearly','Time-bound with automatic expiry'],g:'Give every guest a sponsor and an end date, and review them.'},
    {p:'Workload',q:'What do you know about service accounts and app secrets?',o:['No inventory','Partial list, passwords never expire','Owned inventory, secrets rotated','Managed identities, short-lived credentials'],g:'Inventory service accounts and app secrets, assign owners, rotate.'},
    {p:'Monitoring',q:'How are sign-in logs and risky sign-ins handled?',o:['Default retention, nobody watches','Kept, checked after incidents','180 days, alerts to a team','Kept, correlated and responded to 24×7'],g:'Keep sign-in logs 180 days and send risk alerts to a monitored queue.'}
  ],ST=['Traditional','Initial','Advanced','Optimal'],ans=[];
  var ql=$('#qzList'),NS='http://www.w3.org/2000/svg',QO=150,QRd=100,qCur=[0,0,0,0,0,0,0,0],qFrom=null,qTo=null,qT=1;
  function qpt(i,v){var a=-Math.PI/2+i*Math.PI/4,r=QRd*v/4;return [QO+Math.cos(a)*r,QO+Math.sin(a)*r];}
  function qpoly(V){return V.map(function(v,i){var p=qpt(i,Math.max(.12,v));return p[0].toFixed(1)+','+p[1].toFixed(1);}).join(' ');}
  if(ql){
    var gg=$('#qzGrid'),lab2=$('#qzLab'),pts=$('#qzPts');
    for(var lv=1;lv<=4;lv++){var pg=d.createElementNS(NS,'polygon');pg.setAttribute('class','gr');pg.setAttribute('points',qpoly([lv,lv,lv,lv,lv,lv,lv,lv]));gg.appendChild(pg);}
    for(var ai=0;ai<8;ai++){var e=qpt(ai,4),ln=d.createElementNS(NS,'line');ln.setAttribute('class','ax');ln.setAttribute('x1',QO);ln.setAttribute('y1',QO);ln.setAttribute('x2',e[0]);ln.setAttribute('y2',e[1]);gg.appendChild(ln);
      var lp=qpt(ai,4.62),tt=d.createElementNS(NS,'text');tt.setAttribute('x',lp[0]);tt.setAttribute('y',lp[1]+3);tt.setAttribute('text-anchor',Math.abs(lp[0]-QO)<6?'middle':lp[0]>QO?'start':'end');tt.textContent=QZ[ai].p;lab2.appendChild(tt);
      var c=d.createElementNS(NS,'circle');c.setAttribute('class','pt');c.setAttribute('r','3.5');pts.appendChild(c);}
    $('#qzTgt').setAttribute('points',qpoly([3,3,3,3,3,3,3,3]));
    ql.innerHTML=QZ.map(function(q,i){return '<li data-i="'+i+'"><div class="ia-qh"><span>'+(i+1)+'</span><p>'+q.q+'<small>'+q.p+'</small></p></div><div class="ia-qb" role="group" aria-label="Answer">'+q.o.map(function(o,k){return '<button type="button" data-v="'+(k+1)+'"><b>'+ST[k]+'</b>'+o+'</button>';}).join('')+'</div></li>';}).join('');
    ql.addEventListener('click',function(ev){var b=ev.target.closest('button[data-v]');if(!b)return;var li=b.closest('li'),i=+li.getAttribute('data-i');ans[i]=+b.getAttribute('data-v');
      $$('button',li).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});li.classList.add('ans');quiz();});
    var qtk=ticker(function(dt){qT=Math.min(1,qT+dt/.7);var e2=spr(qT);for(var i=0;i<8;i++)qCur[i]=qFrom[i]+(qTo[i]-qFrom[i])*e2;qDraw();if(qT>=1)qtk.on=false;});
    function qDraw(){$('#qzPoly').setAttribute('points',qpoly(qCur));$$('circle',pts).forEach(function(c,i){var p=qpt(i,Math.max(.12,qCur[i]));c.setAttribute('cx',p[0].toFixed(1));c.setAttribute('cy',p[1].toFixed(1));});}
    function quiz(){var n=0,s=0,V=QZ.map(function(q,i){if(ans[i]!=null){n++;s+=ans[i];return ans[i];}return 0;});
      if(R){qCur=V.slice();qDraw();}else{qFrom=qCur.slice();qTo=V;qT=0;qtk.on=true;wake();}
      var avg=n?s/n:0;$('#qzScore').textContent=n?avg.toFixed(1)+' / 4':'—';$('#qzN').textContent=n+'/8';
      $('#qzStage').textContent=!n?'answer to begin':ST[avg<1.75?0:avg<2.5?1:avg<3.25?2:3]+' stage';
      var gaps=QZ.map(function(q,i){return {q:q,v:ans[i],i:i};}).filter(function(x){return x.v!=null&&x.v<3;}).sort(function(a,b){return a.v-b.v||a.i-b.i;}).slice(0,3);
      $('#qzGaps').innerHTML=!n?'<p class="ia-qe">Your three weakest pillars will appear here.</p>':gaps.length?gaps.map(function(x){return '<p><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg><span><b>'+x.q.p+' · '+ST[x.v-1]+'.</b> '+x.q.g+'</span></p>';}).join(''):'<p class="ia-qe">No pillar below Advanced in your answers. An assessment verifies it with evidence.</p>';
      var plus=(ans[3]!=null&&ans[3]<=2)||(ans[6]!=null&&ans[6]<=2);
      $('#qzRec').innerHTML=n<3?'Answer at least 3 questions for a recommendation.':'<b>Suggested:</b> '+(plus?'IAM Assessment Plus · privileged and workload gaps':'IAM Assessment'+(avg>=3?' with a 6-month re-score':''));}
    qFrom=qCur.slice();qTo=qCur.slice();qDraw();quiz();}

  /* ---------- tool 2 · scope estimator ---------- */
  var DRV={gen:'General hygiene',iso:'ISO 27001 audit',reg:'RBI / SEBI / IRDAI'},EST={};
  function est(){var eU=$('#eU');if(!eU)return;var U=+eU.value,S=iv($('#eS'),1,10),A=+$('#eA').value,pv=segVal($('#eP'),'std'),dr=segVal($('#eD'),'gen');
    $('#eUL').textContent=fmt(U);$('#eAL').textContent=A;$('#ePL').textContent=pv==='deep'?'Deep-dive':'Standard review';$('#eDL').textContent=DRV[dr];
    var col=2+S*1.2,int=3+(S>2?1:0)+(A>40?1:0)+(dr==='reg'?1:0),ana=3+U/1500+A*.05+(pv==='deep'?3:0),rep=2+(dr!=='gen'?1.5:0),days=Math.round(col+int+ana+rep);
    var wk=Math.max(3,Math.round(days/5)+1),intv=5+(S>2?1:0)+(A>40?1:0)+(dr==='reg'?1:0);
    var plus=pv==='deep'||S>=3,inc=plus?3:2,xs=Math.max(0,S-inc),ub=Math.max(0,Math.ceil((U-1000)/1000)),price=PR[plus?'plus':'core']+xs*ADD.src+ub*ADD.ub;
    EST={plus:plus,xs:xs,ub:ub};
    $('#eDays').textContent=days;$('#eWk').textContent=wk;$('#eInt').textContent=intv;
    var bs=$$('#eBar span');[col,int,ana,rep].forEach(function(v,i){bs[i].style.flexGrow=v.toFixed(2);});
    var rows=[['Package',plus?'IAM Assessment Plus':'IAM Assessment'],['Identity sources',xs?S+' · '+inc+' included, +'+xs+' extra':S+' · within the '+inc+' included'],['Users',fmt(U)+(ub?' · +'+ub+' × 1,000-user block':' · within 1,000')],['Apps in SSO review',A>25?A+' · first 25 included, rest sampled*':A],['Mapping',DRV[dr]+' + NIST CSF 2.0 · CIS · CISA']];
    $('#eRows').innerHTML=rows.map(function(r){return '<div><span>'+r[0]+'</span><b>'+r[1]+'</b></div>';}).join('');
    $('#ePr').textContent=inr(price)+'*';}
  ['#eU','#eS','#eA'].forEach(function(s){var e=$(s);if(e){e.addEventListener('input',est);e.addEventListener('change',est);}});
  ['#eP','#eD'].forEach(function(s){var e=$(s);if(e)e.addEventListener('change',est);});
  var eUse=$('#eUse');if(eUse)eUse.addEventListener('click',function(){setSeg(cPk,EST.plus?'plus':'core');cSrc.value=EST.xs;cUb.value=EST.ub;cQ.value=1;if(!EST.plus){cPam.checked=false;cRe.checked=false;}cfg();
    var t=$('#configure');if(t)t.scrollIntoView({behavior:R?'auto':'smooth',block:'center'});XH.flash&&XH.flash(t);XH.toast('Estimate applied to the configurator');});
  est();
})();

