
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,FINE=XH.fine,d=document;
  function $id(i){return d.getElementById(i);}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function seg(a,b,t){return clamp((t-a)/(b-a),0,1);}
  function eo(t){return 1-Math.pow(1-t,3);}
  function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function fade(t,a,b){return eo(seg(a,b,t));}
  function fmt(n){return Math.round(n).toLocaleString('en-IN');}
  function inr(n){return XH.inr?XH.inr(Math.round(n)):'₹'+fmt(n);}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function setT(id,v){var e=$id(id);if(e&&e.textContent!==String(v))e.textContent=v;}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function sw(el){if(!el||R)return;el.classList.remove('sw');void el.offsetWidth;el.classList.add('sw');}
  function segV(el){if(!el)return null;var b=$('button.on',el);return el.dataset.value||(b?b.getAttribute('data-v'):null);}
  function setSeg(el,v){if(!el)return;$$('button',el).forEach(function(x){x.classList.toggle('on',x.getAttribute('data-v')===v);});el.dataset.value=v;el.dispatchEvent(new Event('change'));}
  function dark(){return d.documentElement.getAttribute('data-theme')==='dark';}
  function ckLabels(scope){$$('label',scope).forEach(function(l){var i=$('input[type=checkbox]',l);if(i)l.classList.toggle('ck',i.checked);});}

  /* ---------- one shared rAF loop ---------- */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){s.fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}

  /* ---------- canvas helpers ---------- */
  var DPR=Math.min(2,window.devicePixelRatio||1),TAU=Math.PI*2,MONO='"IBM Plex Mono",ui-monospace,monospace';
  function fit(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var c=cv.getContext('2d');c.setTransform(DPR,0,0,DPR,0,0);return {c:c,w:w,h:h};}
  function TH(){return dark()?{card:'#16264A',ink:'#E8EEFA',mut:'#93A3C4',line:'#2C3D68',grid:'rgba(255,255,255,.05)',bl:'#4D94FF',blA:'rgba(77,148,255,.2)',or:'#FF9F33',orA:'rgba(255,159,51,.18)',rd:'#FF6B5B',rdA:'rgba(255,107,91,.18)',gr:'#3DD47A',grA:'rgba(61,212,122,.18)',nv:'#0A1430'}
    :{card:'#FFFFFF',ink:'#0B132B',mut:'#5B6B8C',line:'#D3DCEB',grid:'rgba(11,19,43,.05)',bl:'#0066FF',blA:'rgba(0,102,255,.12)',or:'#FF8A00',orA:'rgba(255,138,0,.15)',rd:'#c0392b',rdA:'rgba(192,57,43,.12)',gr:'#16a34a',grA:'rgba(22,163,74,.13)',nv:'#0B132B'};}
  function F(wt,s){return wt+' '+s+'px '+MONO;}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,h/2,w/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function clip(c,s,mw){if(c.measureText(s).width<=mw)return s;while(s.length>1&&c.measureText(s+'…').width>mw)s=s.slice(0,-1);return s+'…';}
  function txt(c,s,x,y,f,col,al,mw){c.font=f;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(mw?clip(c,s,mw):s,x,y);}
  function dot(c,x,y,r,col){c.beginPath();c.arc(x,y,r,0,TAU);c.fillStyle=col;c.fill();}
  function tick(c,x,y,s,col){dot(c,x,y,s,col);c.strokeStyle='#fff';c.lineWidth=Math.max(1.4,s*.22);c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(x-s*.42,y);c.lineTo(x-s*.1,y+s*.32);c.lineTo(x+s*.45,y-s*.3);c.stroke();}
  function cross(c,x,y,s,col){dot(c,x,y,s,col);c.strokeStyle='#fff';c.lineWidth=Math.max(1.4,s*.22);c.lineCap='round';c.beginPath();c.moveTo(x-s*.35,y-s*.35);c.lineTo(x+s*.35,y+s*.35);c.moveTo(x+s*.35,y-s*.35);c.lineTo(x-s*.35,y+s*.35);c.stroke();}
  function pill(c,s,x,y,f,bg,fg,al){c.font=f;var w=c.measureText(s).width+14,h=19,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,9.5);c.fillStyle=bg;c.fill();txt(c,s,x0+7,y,f,fg);return w;}
  function grid(c,w,h,T){c.strokeStyle=T.grid;c.lineWidth=1;c.beginPath();for(var x=24;x<w;x+=24){c.moveTo(x+.5,0);c.lineTo(x+.5,h);}for(var y=24;y<h;y+=24){c.moveTo(0,y+.5);c.lineTo(w,y+.5);}c.stroke();}
  function card(c,x,y,w,h,T,stroke,lw,fill){rr(c,x,y,w,h,9);c.fillStyle=fill||T.card;c.fill();c.strokeStyle=stroke||T.line;c.lineWidth=lw||1.2;c.stroke();}
  function dash(c,pts,col,p,t,lw){if(p<=0)return;c.strokeStyle=col;c.lineWidth=lw||1.6;c.setLineDash([4,4]);c.lineDashOffset=R?0:-(t||0)/60;c.beginPath();var x1=pts[0],y1=pts[1],x2=pts[2],y2=pts[3];c.moveTo(x1,y1);c.lineTo(lerp(x1,x2,p),lerp(y1,y2,p));c.stroke();c.setLineDash([]);c.lineDashOffset=0;}
  function qpt(x1,y1,cx,cy,x2,y2,p){var a=1-p;return [a*a*x1+2*a*p*cx+p*p*x2,a*a*y1+2*a*p*cy+p*p*y2];}
  function qcurve(c,x1,y1,cx,cy,x2,y2,p,col,lw,dsh,t){if(p<=0)return;c.strokeStyle=col;c.lineWidth=lw||1.6;if(dsh){c.setLineDash(dsh);c.lineDashOffset=R?0:-(t||0)/60;}c.beginPath();c.moveTo(x1,y1);for(var i=1;i<=24;i++){var q=qpt(x1,y1,cx,cy,x2,y2,p*i/24);c.lineTo(q[0],q[1]);}c.stroke();c.setLineDash([]);c.lineDashOffset=0;}
  function docI(c,x,y,s,col){c.save();c.translate(x,y);c.fillStyle=col;c.beginPath();c.moveTo(-s*.6,-s*.8);c.lineTo(s*.25,-s*.8);c.lineTo(s*.6,-s*.45);c.lineTo(s*.6,s*.8);c.lineTo(-s*.6,s*.8);c.closePath();c.fill();c.strokeStyle='rgba(255,255,255,.85)';c.lineWidth=1.2;c.beginPath();c.moveTo(-s*.32,-s*.1);c.lineTo(s*.32,-s*.1);c.moveTo(-s*.32,s*.25);c.lineTo(s*.32,s*.25);c.stroke();c.restore();}
  function shield(c,x,y,s,col){c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,-11);c.lineTo(9,-7);c.lineTo(9,1);c.quadraticCurveTo(9,8,0,12);c.quadraticCurveTo(-9,8,-9,1);c.lineTo(-9,-7);c.closePath();c.fillStyle=col;c.fill();c.strokeStyle='#fff';c.lineWidth=2;c.lineCap='round';c.beginPath();c.moveTo(-4,0);c.lineTo(-1,3);c.lineTo(4,-3);c.stroke();c.restore();}

  var DUR=5500;

  /* Scene 0 · Discover: radar sweep across connectors, shadow copy found */
  var ST=[['S3 · ap-south-1','1.8 TB · 9 PII types','bl'],['Azure SQL · crm','120 GB · 6 types','bl'],['Microsoft 365','14 lakh files','bl'],['Salesforce','2.1 M records','bl'],['File share · FS01','6.4 TB · old HR','bl'],['Snowflake · dwh','3.2 TB · 11 types','bl']];
  function s0(c,w,h,t,T,nar,fs){
    var nw=nar?110:136,nh=36,bot=h-44,cx=w/2,cy=12+(bot-12)*(nar?.40:.46),rx=Math.min(w/2-nw/2-8,210),ry=(bot-12)*(nar?.29:.36),hr=nar?22:27;
    var P=[[cx-rx,cy-ry],[cx-rx,cy],[cx-rx,cy+ry],[cx+rx,cy-ry],[cx+rx,cy],[cx+rx,cy+ry]],SH=[cx,cy+ry+(nar?46:14)];
    // sweep
    var ang=R?-.6:(t/1000)*TAU*.42-Math.PI/2;
    if(!R&&t<3600){c.globalAlpha=.9;c.beginPath();c.moveTo(cx,cy);c.arc(cx,cy,rx+40,ang-.55,ang);c.closePath();c.fillStyle=T.blA;c.fill();c.globalAlpha=1;}
    c.strokeStyle=T.line;c.lineWidth=1;c.setLineDash([2,5]);c.beginPath();c.ellipse(cx,cy,rx*.62,ry*.95,0,0,TAU);c.stroke();c.setLineDash([]);
    for(var i=0;i<6;i++){var at=400+i*420,a=fade(t,at,at+350),p=P[i],pol=t>=3900+i*120;
      dash(c,[cx,cy,p[0],p[1]],a>0?(pol?T.gr:T.bl):T.line,a>0?eio(seg(at,at+400,t)):1,t,1.4);}
    // hub
    dot(c,cx,cy,hr+6,T.blA);dot(c,cx,cy,hr,T.nv);txt(c,'DSPM',cx,cy-4,F(700,fs-1),'#fff','center');txt(c,'scan',cx,cy+9,F(500,fs-3.5),'#9fb6de','center');
    for(i=0;i<6;i++){var at2=400+i*420,a2=fade(t,at2,at2+350),p2=P[i],x=p2[0]-nw/2,y=p2[1]-nh/2,pol2=t>=3900+i*120;
      if(a2<=0){c.strokeStyle=T.line;c.lineWidth=1;c.setLineDash([3,3]);rr(c,x,y,nw,nh,9);c.stroke();c.setLineDash([]);txt(c,'?',p2[0],p2[1],F(700,fs),T.mut,'center');continue;}
      c.globalAlpha=a2;card(c,x,y,nw,nh,T,pol2?T.gr:T.line,pol2?1.6:1.2);
      dot(c,x+11,y+nh/2,4,pol2?T.gr:T.bl);txt(c,ST[i][0],x+20,y+12,F(700,fs-2),T.ink,'left',nw-26);txt(c,ST[i][1],x+20,y+25,F(500,fs-3.5),T.mut,'left',nw-26);c.globalAlpha=1;}
    // shadow copy
    var sa=fade(t,3100,3450);
    if(sa>0){var sw2=nar?150:178,sx=SH[0]-sw2/2,sy=SH[1]-nh/2,fixed=t>=4400;c.globalAlpha=sa;
      if(!fixed&&!R){var pu=((t-3100)%1000)/1000;c.globalAlpha=sa*(1-pu)*.6;rr(c,sx-pu*8,sy-pu*8,sw2+pu*16,nh+pu*16,12);c.strokeStyle=T.or;c.lineWidth=2;c.stroke();c.globalAlpha=sa;}
      card(c,sx,sy,sw2,nh,T,fixed?T.gr:T.or,1.8);
      txt(c,'prod-copy-2023 · unmanaged',sx+10,sy+12,F(700,fs-2),T.ink,'left',sw2-20);txt(c,fixed?'owner set · access cut · policy on':'48 L Aadhaar · open to dev team',sx+10,sy+25,F(500,fs-3.5),fixed?T.gr:T.or,'left',sw2-20);
      pill(c,fixed?'UNDER POLICY':'SHADOW DATA',SH[0],sy-12,F(700,fs-3.5),fixed?T.gr:T.or,fixed?'#fff':'#0B132B','center');c.globalAlpha=1;}
  }
  /* Scene 1 · Classify: scan line labels Indian PII */
  var FLD=[['aadhaar_no','3812 0457 4821','●●●● ●●●● 4821','AADHAAR','or'],['pan','ABCPE1234F','●●●●●1234●','PAN','bl'],['gstin','27ABCPE1234F1ZB','27●●●●●●●●●●1ZB','GSTIN','bl'],['upi_id','sample.user@okaxis','sa●●●●●●●●@okaxis','UPI','bl'],['diagnosis','Type 2 diabetes','●●●● ●●●●●●●●','HEALTH','rd'],['city','Pune','Pune','NOT PII','mut']];
  function s1(c,w,h,t,T,nar,fs){
    var x0=12,W=w-24,top=12,hh=22,rh=nar?27:31,n=FLD.length,tb=top+hh+n*rh,vx=x0+(nar?86:140);
    card(c,x0,top,W,hh+n*rh,T);
    rr(c,x0,top,W,hh,9);c.fillStyle=T.blA;c.fill();
    txt(c,'customers_v3 · 12.4 L rows',x0+10,top+hh/2,F(700,fs-2.5),T.bl,'left',W*.6);txt(c,'label',x0+W-10,top+hh/2,F(700,fs-2.5),T.mut,'right');
    var sy=lerp(top+hh,tb,eio(seg(300,3300,t)));
    for(var i=0;i<n;i++){var y=top+hh+i*rh,cy=y+rh/2,f=FLD[i],done=sy>=cy||R;
      if(i)c.strokeStyle=T.line,c.lineWidth=1,c.beginPath(),c.moveTo(x0+1,y+.5),c.lineTo(x0+W-1,y+.5),c.stroke();
      txt(c,f[0],x0+10,cy,F(500,fs-2.5),T.mut,'left',vx-x0-14);
      var lt=done?fade(t,300+3000*((cy-top-hh)/(tb-top-hh)),300+3000*((cy-top-hh)/(tb-top-hh))+300):0,sens=f[3]!=='NOT PII';
      txt(c,(done&&sens)?f[2]:f[1],vx,cy,F(600,fs-1.5),T.ink,'left',W-(vx-x0)-(nar?78:96));
      if(done){c.globalAlpha=R?1:lt;var col=f[4]==='mut'?T.line:T[f[4]];pill(c,f[3],x0+W-10,cy,F(700,fs-3.5),col,f[4]==='or'?'#0B132B':f[4]==='mut'?T.ink:'#fff','right');c.globalAlpha=1;}}
    if(!R&&t>=300&&t<3300){c.strokeStyle=T.or;c.lineWidth=2;c.beginPath();c.moveTo(x0+2,sy);c.lineTo(x0+W-2,sy);c.stroke();dot(c,x0+4,sy,3.5,T.or);}
    var ba=fade(t,3500,3900);
    if(ba>0){var by=tb+12,bw=W,S=[[.38,'or','Aadhaar'],[.22,'bl','PAN'],[.08,'bl','GSTIN'],[.17,'bl','UPI'],[.15,'rd','Health']],bx=x0;c.globalAlpha=ba;
      for(var k=0;k<S.length;k++){var ww=bw*S[k][0]*eio(seg(3500,4300,t));rr(c,bx,by,Math.max(0,ww-2),10,3);c.fillStyle=T[S[k][1]];c.globalAlpha=ba*(k===2?.6:1);c.fill();c.globalAlpha=ba;bx+=bw*S[k][0]*eio(seg(3500,4300,t));}
      txt(c,nar?'sensitive values by type · sample':'share of sensitive values by type · sample · masked in console',x0,by+22,F(500,fs-3.5),T.mut,'left',W);c.globalAlpha=1;}
  }
  /* Scene 2 · Access: identity graph, risky paths cut */
  var ID=[['Finance team','owner · 6 users','bl',0],['svc-reporting','service account','bl',0],['Contractors-ext','unused 120 days','rd',1],['Anyone with link','public share','rd',1]];
  function s2(c,w,h,t,T,nar,fs){
    var bot=h-44,lw=nar?118:156,lh=nar?34:38,gap=nar?10:14,tot=ID.length*lh+(ID.length-1)*gap,y0=12+(bot-12-tot)/2,fw=nar?104:150,fh=nar?64:72,fx=w-12-fw,fy=12+(bot-12-fh)/2;
    for(var i=0;i<ID.length;i++){var y=y0+i*(lh+gap),cy=y+lh/2,risky=ID[i][3],a=fade(t,250+i*200,550+i*200),flag=risky&&t>=1800,cut=risky&&t>=3200,ca=cut?1-fade(t,3200,3700):1,
      x1=12+lw,y1=cy,x2=fx,y2=fy+fh/2+(i-1.5)*10,mx=(x1+x2)/2;
      c.globalAlpha=a*(cut?Math.max(ca,.0):1);
      if(ca>0)qcurve(c,x1,y1,mx,y1,x2,y2,eio(seg(300+i*200,1300+i*200,t)),flag?T.rd:T.bl,flag?2.2:1.6,flag?null:[4,4],t);
      if(cut&&ca>0){var q=qpt(x1,y1,mx,y1,x2,y2,.5);c.globalAlpha=a;cross(c,q[0],q[1],8,T.rd);}
      else if(flag&&!cut&&!nar){var q2=qpt(x1,y1,mx,y1,x2,y2,.5);c.globalAlpha=a*fade(t,1800,2100);pill(c,i===3?'public link':'stale access',q2[0],q2[1]-12,F(700,fs-3.5),T.rd,'#fff','center');}
      c.globalAlpha=a;
      var stroke=cut?T.line:flag?T.rd:T.line;card(c,12,y,lw,lh,T,stroke,flag&&!cut?1.6:1.2);
      dot(c,24,cy,5,cut?T.line:flag?T.rd:T.bl);
      txt(c,ID[i][0],34,cy-(nar?6:7),F(700,fs-2),cut?T.mut:T.ink,'left',lw-30);txt(c,cut?'revoked · owner approved':ID[i][1],34,cy+(nar?7:8),F(500,fs-3.5),cut?T.gr:flag?T.rd:T.mut,'left',lw-30);c.globalAlpha=1;}
    // file
    var fa=fade(t,150,450);c.globalAlpha=fa;card(c,fx,fy,fw,fh,T,T.or,1.8);docI(c,fx+18,fy+20,11,T.or);
    txt(c,'payroll_2026.xlsx',fx+32,fy+16,F(700,fs-2),T.ink,'left',fw-40);txt(c,'PAN · bank a/c',fx+32,fy+30,F(500,fs-3.5),T.mut,'left',fw-40);
    var pth=t<3200?4:t<3700?4-Math.round(seg(3200,3700,t)*2):2;txt(c,pth+' access paths',fx+12,fy+fh-14,F(700,fs-2.5),pth>2?T.rd:T.gr,'left',fw-20);c.globalAlpha=1;
    var ra=fade(t,4000,4300);if(ra>0){c.globalAlpha=ra;pill(c,nar?'4 paths → 2':'Access reduced · 4 paths → 2 · audit trail kept',fx+fw,fy-14,F(700,fs-3.5),T.gr,'#fff','right');c.globalAlpha=1;}
  }
  /* Scene 3 · Flows: payment data leaving India, kept in Mumbai */
  function s3(c,w,h,t,T,nar,fs){
    var bot=h-44,g=nar?10:16,bw=(w-24-g)/2,bh=bot-20,ix=12,ox=12+bw+g,by=14,nw=bw-(nar?16:28),nh=nar?30:34;
    card(c,ix,by,bw,bh,T,T.bl,1.6,T.blA);card(c,ox,by,bw,bh,T,T.line,1.2,T.card);
    txt(c,nar?'INDIA · MUMBAI':'INDIA · MUMBAI REGION',ix+10,by+14,F(700,fs-3),T.bl,'left',bw-20);txt(c,nar?'OVERSEAS':'OVERSEAS REGION',ox+10,by+14,F(700,fs-3),T.mut,'left',bw-20);
    var rowY=function(k){return by+34+k*((bh-44)/3)+nh/2;},nx=function(b){return b+(bw-nw)/2;};
    function node(x,y,a,b,st,col){card(c,x,y-nh/2,nw,nh,T,col||T.line,col?1.6:1.2);txt(c,a,x+10,y-6,F(700,fs-2.5),st?T.mut:T.ink,'left',nw-18);txt(c,b,x+10,y+7,F(500,fs-3.8),st?T.mut:T.mut,'left',nw-18);}
    var y1=rowY(0),y2=rowY(1),y3=rowY(2),fixed=t>=3000;
    // flows
    var p1=eio(seg(300,1200,t));dash(c,[nx(ix)+nw,y2,nx(ox),y2],T.bl,p1,t,1.6);
    var red=t>=1800,ra=fixed?1-fade(t,3000,3500):1,p2=eio(seg(600,1600,t));
    if(ra>0){c.globalAlpha=ra;dash(c,[nx(ix)+nw,y1,nx(ox),y1],red?T.rd:T.bl,p2,t,red?2.2:1.6);c.globalAlpha=1;}
    if(t>=3000){var p3=eio(seg(3000,3800,t));c.strokeStyle=T.gr;c.lineWidth=2.2;c.setLineDash([4,4]);c.lineDashOffset=R?0:-t/60;c.beginPath();c.moveTo(nx(ix)+nw*.5,y1+nh/2);c.lineTo(nx(ix)+nw*.5,lerp(y1+nh/2,y3-nh/2,p3));c.stroke();c.setLineDash([]);c.lineDashOffset=0;}
    node(nx(ix),y1,'payments-db','UPI + card data',0,T.bl);node(nx(ix),y2,'crm-db','contact data',0);
    var ma=fixed?fade(t,3600,3900):0;node(nx(ix),y3,'analytics-mum',ma>0?'payments analytics':'not used yet',ma<=0,ma>0?T.gr:null);
    var ea=ra;c.globalAlpha=Math.max(.35,ea);node(nx(ox),y1,'analytics-eu',fixed?'copy deleted':'payments copy',fixed,red&&!fixed?T.rd:null);c.globalAlpha=1;
    node(nx(ox),y2,'email-saas',p1>=1?'contact data · logged':'campaign tool',0);
    if(red&&ra>0){c.globalAlpha=fade(t,1800,2100)*ra;pill(c,nar?'stored abroad':'payment data stored abroad',w/2,y1-nh/2-8,F(700,fs-3.5),T.rd,'#fff','center');c.globalAlpha=1;}
    var ka=fade(t,4200,4500);if(ka>0){c.globalAlpha=ka;pill(c,nar?'Kept in India':'Payment data kept in India · RBI',ix+bw/2,y3+nh/2+14,F(700,fs-3.5),T.gr,'#fff','center');c.globalAlpha=1;}
  }
  /* Scene 4 · AI: PII held back from the vector index, answer redacted */
  var DOCS=[['policy.pdf',0],['salaries.xlsx',1],['faq.docx',0]];
  function s4(c,w,h,t,T,nar,fs){
    var bot=h-44,dw=nar?92:124,dh=nar?26:30,dg=nar?8:10,top=14,fxp=nar?w*.43:w*.40,ixp=nar?w*.66:w*.64,lx=w-(nar?30:44),my=top+(3*dh+2*dg)/2;
    for(var i=0;i<3;i++){var y=top+i*(dh+dg),cy=y+dh/2,bad=DOCS[i][1],st=300+i*380,a=fade(t,st-200,st+100),held=bad&&t>=st+700;
      c.globalAlpha=a;card(c,12,y,dw,dh,T,held?T.rd:T.line,held?1.6:1.2);docI(c,24,cy,7,bad?T.or:T.bl);txt(c,DOCS[i][0],34,cy,F(600,fs-2.5),T.ink,'left',dw-30);
      var pp=eio(seg(st,st+700,t));if(t>st&&!R)dash(c,[12+dw,cy,fxp-16,my],T.line,pp,t,1.2);else if(R)dash(c,[12+dw,cy,fxp-16,my],T.line,1,t,1.2);
      if(!R&&pp<1&&t>st)dot(c,lerp(12+dw,fxp-16,pp),lerp(cy,my,pp),3.5,bad?T.or:T.bl);
      c.globalAlpha=1;}
    // filter
    shield(c,fxp,my,nar?1.05:1.3,T.bl);txt(c,'DSPM',fxp,my+(nar?22:26),F(700,fs-3.5),T.bl,'center');
    var hb=fade(t,1060,1350);if(hb>0){c.globalAlpha=hb;cross(c,fxp+(nar?14:18),my-(nar?12:15),7,T.rd);pill(c,nar?'held · PAN':'held back · PAN found',fxp,top-2+(nar?0:0)+ (3*dh+2*dg)+16,F(700,fs-3.8),T.rd,'#fff','center');c.globalAlpha=1;}
    // index
    var iw=nar?52:76,ih=nar?40:46,ia=fade(t,900,1200);var ip=eio(seg(1100,1700,t));
    dash(c,[fxp+16,my,ixp-iw/2,my],ip>0?T.gr:T.line,R?1:ip,t,1.4);
    c.globalAlpha=Math.max(.4,ia);card(c,ixp-iw/2,my-ih/2,iw,ih,T,T.or,1.6);for(var k=0;k<3;k++){rr(c,ixp-iw/2+8,my-ih/2+8+k*9,iw-16,5,2);c.fillStyle=k<(t>=1700?2:t>=1400?1:0)?T.or:T.line;c.fill();}
    txt(c,nar?'index':'vector index',ixp,my+ih/2+10,F(600,fs-3.8),T.mut,'center');c.globalAlpha=1;
    dash(c,[ixp+iw/2,my,lx-16,my],T.line,1,t,1.2);
    dot(c,lx,my,nar?15:18,T.nv);txt(c,'LLM',lx,my,F(700,fs-3),'#fff','center');
    // prompt and answer
    var py=bot-(nar?62:66),pa=fade(t,2400,2700);
    if(pa>0){c.globalAlpha=pa;var pw=nar?w*.52:w*.42;card(c,12,py,pw,26,T,T.bl,1.4);txt(c,'“List staff PAN numbers”',22,py+13,F(600,fs-2.5),T.ink,'left',pw-20);
      var pp2=eio(seg(2700,3300,t));qcurve(c,12+pw,py+13,lx,py+13,lx,my+(nar?16:19),pp2,T.bl,1.4,[4,4],t);c.globalAlpha=1;}
    var aa=fade(t,3500,3850);
    if(aa>0){c.globalAlpha=aa;var aw=nar?w*.6:w*.5,ax=w-12-aw,ay=bot-(nar?28:30);card(c,ax,ay,aw,26,T,T.gr,1.6);txt(c,'PAN: ●●●●●1234● · ask HR',ax+10,ay+13,F(600,fs-2.5),T.ink,'left',aw-20);
      if(t>=3900)pill(c,'PII redacted',ax+aw,ay-11,F(700,fs-3.8),T.or,'#0B132B','right');c.globalAlpha=1;}
  }
  var SCN=[s0,s1,s2,s3,s4];
  var SC=[
    {cap:'Discover every store, even shadow copies',ttl:'xh-dspm · discovery · 6 connectors',live:'SCANNING',chip:'sample estate · 7 stores',sc:[48,56],L:['Stores found','Shadow','Under policy'],K:function(t){var f=0;for(var i=0;i<6;i++)if(t>=400+i*420)f++;if(t>=3100)f++;var p=0;for(i=0;i<6;i++)if(t>=3900+i*120)p++;if(t>=4400)p++;return [f,t>=3100?1:0,p];}},
    {cap:'Classify Aadhaar, PAN, GSTIN, UPI and health data',ttl:'xh-dspm · classify · customers_v3',live:'CLASSIFYING',chip:'5 sensitive types found',sc:[56,64],L:['Rows scanned','PII fields','Masked'],K:function(t){var n=0;for(var i=0;i<5;i++)if(t>=300+3000*((i+.5)/6))n++;return [Math.round(eio(seg(300,4800,t))*1240000),n,t>=3500?n:Math.max(0,n-1)];}},
    {cap:'Take back access nobody uses',ttl:'xh-dspm · access · payroll_2026.xlsx',live:'REVIEWING',chip:'owner review · finance',sc:[64,72],L:['Access paths','Risky','Revoked'],K:function(t){return [t<3200?Math.min(4,Math.floor(seg(250,1050,t)*4+(t>=250?1:0))):4-Math.round(seg(3200,3700,t)*2),t>=1800&&t<3700?2:0,t>=3700?2:t>=3200?1:0];}},
    {cap:'Map flows and keep regulated data in India',ttl:'xh-dspm · lineage · payments',live:'MAPPING',chip:'residency · RBI & DPDP',sc:[72,80],L:['Flows mapped','Violations','Kept in India'],K:function(t){return [(t>=1200?1:0)+(t>=1600?1:0)+(t>=3800?1:0),t>=1800&&t<3500?1:0,t>=4200?1:0];}},
    {cap:'Keep personal data out of AI answers',ttl:'xh-dspm · ai · hr-assistant',live:'GUARDING',chip:'DSPM for AI · RAG',sc:[80,88],L:['Docs checked','Held back','Redacted'],K:function(t){var n=0;for(var i=0;i<3;i++)if(t>=1000+i*380)n++;return [n,t>=1060?1:0,t>=3900?1:0];}}
  ];
  function drawScene(k,c,w,h,t,T){c.clearRect(0,0,w,h);grid(c,w,h,T);var nar=w<430,fs=nar?11:12;SCN[k](c,w,h,t,T,nar,fs);}

  /* ---------- hero controller ---------- */
  (function(){
    var hero=$id('dsHero'),scr=$id('dsScr');if(!hero||!scr)return;
    var cvs=[$id('dsCvA'),$id('dsCvB')],act=0,cur=0,el=0,last=0,paused=false,hover=false,hidden=true,dots=$$('#dsDots button[data-k]'),pz=$id('dsPz'),kv=[-1,-1,-1],sv=-1;
    function kpis(tt){var s=SC[cur],v=s.K(tt);for(var i=0;i<3;i++){var e=$id('dsK'+i);if(kv[i]!==v[i]){if(kv[i]!==-1&&i>0&&v[i]>kv[i])bump(e);kv[i]=v[i];e.textContent=fmt(v[i]);}}
      var sc=Math.round(lerp(s.sc[0],s.sc[1],seg(0,DUR,tt)));if(sc!==sv){sv=sc;setT('dsScore',sc);}}
    function paint(tt){var f=fit(cvs[act]);if(f)drawScene(cur,f.c,f.w,f.h,tt,TH());kpis(tt);
      var p=clamp(tt/DUR,0,1);var ii=$('i',dots[cur]);if(ii)ii.style.setProperty('--p',p.toFixed(3));}
    function labels(){var s=SC[cur];setT('dsCapN','0'+(cur+1));setT('dsCapT',s.cap);setT('dsTitle',s.ttl);setT('dsChipS',s.chip);
      var lv=$('.ds-live',hero);if(lv)lv.lastChild.textContent=s.live;
      for(var i=0;i<3;i++)setT('dsL'+i,s.L[i]);kv=[-1,-1,-1];
      sw($id('dsCap'));sw($('#dsTitle'));
      dots.forEach(function(b,i){b.classList.toggle('on',i===cur);b.classList.toggle('past',i<cur);b.setAttribute('aria-selected',i===cur);var ii=$('i',b);if(ii)ii.style.setProperty('--p',i===cur&&R?1:0);});}
    function go(k){k=(k+5)%5;if(k===cur&&el>0)return;var old=cvs[act];act=1-act;cvs[act].classList.add('on');old.classList.remove('on');cur=k;el=0;labels();paint(R?DUR:0);}
    function tickF(now){if(!last)last=now;var dt=Math.min(64,now-last);last=now;if(!(paused||hover))el+=dt;
      if(el>=DUR+300){go(cur+1);return;}paint(Math.min(el,DUR));}
    var run=loop(tickF);
    function setRun(){var on=!R&&!hidden;if(on)last=0;run(on);}
    dots.forEach(function(b){b.addEventListener('click',function(){var k=+b.getAttribute('data-k');if(k===cur){el=0;paint(R?DUR:0);return;}go(k);});});
    pz.addEventListener('click',function(){paused=!paused;pz.classList.toggle('paused',paused);pz.setAttribute('aria-label',paused?'Play scenes':'Pause scenes');});
    var stage=$id('dsStage');stage.addEventListener('mouseenter',function(){hover=true;});stage.addEventListener('mouseleave',function(){hover=false;});
    var sx=null;scr.addEventListener('pointerdown',function(e){sx=e.clientX;});scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));});
    scr.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});scr.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));});
    labels();
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){paint(R?DUR:el);});
    if(R){if(pz)pz.hidden=true;paint(DUR);addEventListener('resize',function(){paint(DUR);});}
    else{paint(0);XH.whenVisible(hero,function(v){hidden=!v;setRun();});addEventListener('resize',function(){paint(el);});}
    new MutationObserver(function(){paint(R?DUR:Math.min(el,DUR));}).observe(d.documentElement,{attributes:true,attributeFilter:['data-theme']});
    window.__dsHero={go:go,pause:function(p){paused=p;},seek:function(t){el=t;paint(Math.min(t,DUR));}};
  })();

  /* sub-nav scroll spy + magnetic buttons */
  (function(){var links=$$('#dsSub a');if(!links.length)return;var secs=links.map(function(a){return $id(a.getAttribute('href').slice(1));}),tk=false;
    function spy(){tk=false;var y=scrollY+170,on=-1;secs.forEach(function(s,i){if(s&&s.offsetTop<=y)on=i;});links.forEach(function(a,i){a.classList.toggle('on',i===on);});
      var a=links[on];if(a&&a.parentNode.scrollWidth>a.parentNode.clientWidth){var p=a.parentNode,l=a.offsetLeft-p.clientWidth/2+a.clientWidth/2;if(Math.abs(p.scrollLeft-l)>40)p.scrollLeft=l;}}
    addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(spy);}},{passive:true});spy();})();
  if(FINE&&!R)$$('.ds-mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18)+'px,'+((e.clientY-r.top-r.height/2)*.25)+'px)';});b.addEventListener('pointerleave',function(){b.style.transform='';});});

  var Y='<span class="y" title="Covered"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span>',P='<span class="p" title="Partial or platform-dependent"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg></span>',N='<span class="n" title="Not applicable"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg></span>';
  var MARK={y:Y,p:P,n:N};

  /* ---------- COVERAGE MAP ---------- */
  var CM={
    sql:{n:'Cloud SQL databases',m:'api',h:'Read-only API · snapshot scan',c:'yyyyn',x:['cloud-security-assessment','cloud-native-security-platform']},
    nosql:{n:'NoSQL / document DBs',m:'api',h:'Read-only API',c:'yyypn',x:['cloud-native-security-platform']},
    obj:{n:'Object storage & backups',m:'api',h:'Read-only API · sampling',c:'yyyyn',x:['cloud-security-assessment','cloud-native-security-platform']},
    vmdb:{n:'Databases on VMs',m:'sc',h:'Scanner in your network',c:'yyppn',x:['cloud-native-security-platform']},
    m365:{n:'Microsoft 365',m:'api',h:'Graph API · app consent',c:'yyypp',x:['microsoft-purview-dlp','microsoft-security-posture-management']},
    gws:{n:'Google Workspace',m:'api',h:'Workspace API · admin consent',c:'yyypn',x:[]},
    sfdc:{n:'Salesforce',m:'api',h:'Connected app · read-only',c:'yyypn',x:[]},
    fs:{n:'File shares / NAS',m:'sc',h:'Scanner in your network',c:'yyypn',x:['scrutiny-dlp']},
    dwh:{n:'Data warehouse',m:'api',h:'Read-only role · query scan',c:'yyyyp',x:['cloud-native-security-platform']},
    vec:{n:'Vector database',m:'both',h:'API or in-VPC scanner',c:'ypppy',x:['ai-vector-database']},
    rag:{n:'RAG / Copilot sources',m:'api',h:'Source connectors',c:'yyypy',x:['rag-as-a-service','microsoft-purview-dlp']},
    train:{n:'Training data sets',m:'api',h:'Storage API · notebook scan',c:'yyppy',x:['ai-vector-database']}
  };
  var XL={'cloud-security-assessment':['scan','Cloud Security Assessment'],'cloud-native-security-platform':['cloud','Cloud-Native Security'],'microsoft-purview-dlp':['shield','Microsoft Purview DLP'],'microsoft-security-posture-management':['gauge','Security Posture Mgmt'],'scrutiny-dlp':['monitor','Scrutiny DLP'],'ai-vector-database':['layers','AI Vector Database'],'rag-as-a-service':['robot','RAG as a Service'],'xcellhost-managed-sentinel':['activity','Managed Sentinel'],'dpdp-compliance-platform':['shield-check','DPDP Compliance Platform']};
  var XLI={scan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg>',cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',gauge:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-4"/><path d="M3.3 17a9 9 0 1117.4 0"/></svg>',monitor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>',robot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>',activity:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>','shield-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>'};
  function cov(keys){var a=0,s=0,pts=0,links=[];keys.forEach(function(k){var e=CM[k];if(!e)return;if(e.m==='api')a++;else s++;e.c.split('').forEach(function(ch){pts+=ch==='y'?1:ch==='p'?.5:0;});e.x.forEach(function(l){if(links.indexOf(l)<0)links.push(l);});});
    if(keys.length){['xcellhost-managed-sentinel','dpdp-compliance-platform'].forEach(function(l){if(links.indexOf(l)<0)links.push(l);});}
    return {n:keys.length,api:a,sc:s,pct:keys.length?Math.round(pts/(keys.length*5)*100):0,links:links};}
  (function(){var box=$id('dsCmi');if(!box)return;var rows=$id('dsCmRows');
    function sel(){return $$('input',box).filter(function(i){return i.checked;}).map(function(i){return i.value;});}
    function render(){var k=sel(),r=cov(k);ckLabels(box);setT('dsCmN',r.n);setT('dsCmA',r.api);setT('dsCmS',r.sc);setT('dsCmP',r.pct+'%');
      rows.innerHTML=k.length?k.map(function(key,i){var e=CM[key],tag=e.m==='api'?'<i>AGENTLESS</i>':e.m==='sc'?'<i class="sc">SCANNER</i>':'<i>API</i><i class="sc">OR SCANNER</i>';
        return '<div class="ds-cmr" role="row" style="animation-delay:'+(i*40)+'ms"><span class="nm" role="cell">'+esc(e.n)+'<small>'+esc(e.h)+'</small></span><span class="hw" role="cell">'+tag+'</span>'+e.c.split('').map(function(ch){return '<span role="cell">'+MARK[ch]+'</span>';}).join('')+'</div>';}).join('')
        :'<div class="ds-cme">Tick at least one data store to see its coverage.</div>';
      var x=$id('dsCmX');x.innerHTML=r.links.length?'<small>Closes the loop</small>'+r.links.map(function(l){return '<a href="'+l+'.html">'+XLI[XL[l][0]]+esc(XL[l][1])+'</a>';}).join(''):'';}
    box.addEventListener('change',render);
    $id('dsCmAll').addEventListener('click',function(){$$('input',box).forEach(function(i){i.checked=true;});render();});
    $id('dsCmNone').addEventListener('click',function(){$$('input',box).forEach(function(i){i.checked=false;});render();});
    $id('dsCmUse').addEventListener('click',function(){var n=Math.max(5,sel().length);if(window.__dsSetStores)window.__dsSetStores(n);var cf=$id('configure');if(cf)cf.scrollIntoView({behavior:R?'auto':'smooth'});XH.toast(n+' data stores set in the configurator');});
    render();window.__dsCov=function(keys){$$('input',box).forEach(function(i){i.checked=keys.indexOf(i.value)>-1;});render();return cov(keys);};})();

  /* ---------- CLASSIFIER ---------- */
  var VD=[[0,1,2,3,4,5,6,7,8,9],[1,2,3,4,0,6,7,8,9,5],[2,3,4,0,1,7,8,9,5,6],[3,4,0,1,2,8,9,5,6,7],[4,0,1,2,3,9,5,6,7,8],[5,9,8,7,6,0,4,3,2,1],[6,5,9,8,7,1,0,4,3,2],[7,6,5,9,8,2,1,0,4,3],[8,7,6,5,9,3,2,1,0,4],[9,8,7,6,5,4,3,2,1,0]],
      VP=[[0,1,2,3,4,5,6,7,8,9],[1,5,7,6,2,8,3,0,9,4],[5,8,0,3,7,9,6,1,4,2],[8,9,1,6,0,4,3,5,2,7],[9,4,5,3,1,2,6,8,7,0],[4,2,8,6,5,7,3,9,1,0],[2,7,9,3,8,0,6,4,1,5],[7,0,4,6,9,1,3,2,5,8]];
  function verhoeff(s){var c=0,a=s.replace(/\D/g,'').split('').reverse();for(var i=0;i<a.length;i++)c=VD[c][VP[i%8][+a[i]]];return c===0;}
  function luhn(s){var a=s.replace(/\D/g,''),sum=0,alt=false;for(var i=a.length-1;i>=0;i--){var n=+a[i];if(alt){n*=2;if(n>9)n-=9;}sum+=n;alt=!alt;}return a.length>=13&&sum%10===0;}
  var GC='0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  function gstOk(s){var sum=0;for(var i=0;i<14;i++){var p=GC.indexOf(s[i])*((i%2)?2:1);sum+=Math.floor(p/36)+p%36;}return GC[(36-sum%36)%36]===s[14];}
  var PANT={P:'person',C:'company',H:'HUF',F:'firm',A:'AOP',T:'trust',B:'BOI',L:'local authority',J:'artificial juridical person',G:'government'};
  function mask(s,keep){var digs=s.replace(/[\s-]/g,'');var out='',k=0,n=digs.length;for(var i=0;i<s.length;i++){var ch=s[i];if(/[\s-]/.test(ch)){out+=ch;continue;}out+=(k>=n-keep)?ch:'●';k++;}return out;}
  function classify(text){var src=text,res=[];
    function take(re,fn){src=src.replace(re,function(m){var off=arguments[arguments.length-2],r=fn(m,off);if(r===false)return m;if(r)res.push(r);return m.replace(/[^\n]/g,' ');});}
    take(/\b\d{2}[A-Z]{5}\d{4}[A-Z][1-9A-Z]Z[0-9A-Z]\b/g,function(m){var st=+m.slice(0,2),ok=st>=1&&st<=38&&gstOk(m);return {t:'GSTIN',v:m.slice(0,2)+'●●●●●●●●●●'+m.slice(12),n:'state code '+m.slice(0,2)+' · checksum '+(ok?'✓':'✗'),c:ok?'':'no'};});
    take(/\b\d{2}-\d{4}-\d{4}-\d{4}\b/g,function(m){return {t:'ABHA',v:mask(m,4),n:'14-digit health ID',c:'hi'};});
    take(/\b(?:\d[ -]?){12,18}\d\b/g,function(m,off){var dg=m.replace(/\D/g,''),ctx=text.slice(Math.max(0,off-12),off).toLowerCase();if(/a\/c|account|acct/.test(ctx)||dg.length<13||dg.length>19||!luhn(m))return false;return {t:'CARD',v:mask(m,4),n:'Luhn ✓ · PCI DSS scope',c:'hi'};});
    take(/\b[Xx*●]{4}[ -]?[Xx*●]{4}[ -]?\d{4}\b/g,function(m){return {t:'AADHAAR',v:m,n:'already masked · low risk',c:''};});
    take(/\b[2-9]\d{3}[ -]?\d{4}[ -]?\d{4}\b/g,function(m){var ok=verhoeff(m);return ok?{t:'AADHAAR',v:mask(m,4),n:'Verhoeff ✓',c:'hi'}:{t:'12 DIGITS',v:mask(m,4),n:'Verhoeff ✗ · not Aadhaar',c:'no'};});
    take(/\b[A-Z]{3}[PCHFATBLJG][A-Z]\d{4}[A-Z]\b/g,function(m){return {t:'PAN',v:'●●●●●'+m.slice(5,9)+'●',n:'holder: '+PANT[m[3]],c:'hi'};});
    take(/\b[A-Z]{4}0[A-Z0-9]{6}\b/g,function(m){return {t:'IFSC',v:m,n:'bank branch code',c:''};});
    take(/[\w.+-]+@[A-Za-z0-9-]+\.[A-Za-z.]{2,}/g,function(m){return {t:'EMAIL',v:m.replace(/^(.{2}).*(@.*)$/,'$1●●●●$2'),n:'contact data',c:''};});
    take(/\b[\w.-]{2,}@[A-Za-z]{2,}\b/g,function(m){return {t:'UPI',v:m.replace(/^(.{2})[^@]*(@.*)$/,'$1●●●●$2'),n:'payment handle',c:'hi'};});
    take(/(?:\+91[ -]?)?\b[6-9]\d{4}[ -]?\d{5}\b/g,function(m){return {t:'MOBILE',v:mask(m,2),n:'Indian mobile',c:''};});
    take(/\b\d{9,18}\b/g,function(m,off){var ctx=text.slice(Math.max(0,off-40),off).toLowerCase();if(!/a\/c|account|acct|ifsc/.test(ctx))return false;return {t:'BANK A/C',v:mask(m,4),n:'near account keyword',c:'hi'};});
    take(/\b(diagnos\w*|diabetes|hypertension|prescription|HIV|cancer|blood group|pregnan\w*)\b/gi,function(m){return {t:'HEALTH',v:m,n:'health term · sensitive',c:'hi'};});
    return res;}
  (function(){var tx=$id('dsTx'),o=$id('dsTxO');if(!tx)return;
    function run(){var r=classify(tx.value),hit=r.filter(function(x){return x.c!=='no';}),types={};hit.forEach(function(x){types[x.t]=1;});
      o.innerHTML=r.length?r.map(function(x,i){return '<li class="'+x.c+'" style="animation-delay:'+(i*45)+'ms"><i>'+esc(x.t)+'</i><code>'+esc(x.v)+'</code><small>'+esc(x.n)+'</small></li>';}).join(''):'<li class="no"><i>NONE</i><code>No sensitive values found</code><small>try adding a PAN or UPI ID</small></li>';
      setT('dsTxS',hit.length+' sensitive · '+Object.keys(types).length+' types'+(r.length>hit.length?' · '+(r.length-hit.length)+' rejected':''));}
    $id('dsTxRun').addEventListener('click',run);$id('dsTxClr').addEventListener('click',function(){tx.value='';run();tx.focus();});
    var tm=0;tx.addEventListener('input',function(){clearTimeout(tm);tm=setTimeout(run,350);});
    run();window.__dsClass=function(s){return classify(s);};})();

  /* ---------- RISK CALCULATOR ---------- */
  var SEN={1:.25,2:.5,3:.8,4:1},EXP={1:.2,2:.5,3:.75,4:1},CTL={enc:.12,mfa:.15,mon:.12,ret:.06};
  function nice(n){var p=Math.pow(10,Math.floor(Math.log10(n))-1);return Math.round(n/p)*p;}
  function risk(o){var Rf=clamp((o.lg-2)/6,0,1),S=SEN[o.s],E=EXP[o.e],cf=1;o.c.forEach(function(k){cf-=CTL[k]||0;});cf=Math.max(.55,cf);
    var sc=Math.round(100*Math.cbrt(Math.max(Rf,.02)*S*E)*cf);return {R:Rf,S:S,E:E,cf:cf,score:clamp(sc,0,100),band:sc<25?'lo':sc<50?'md':sc<70?'hi':'cr'};}
  (function(){var rec=$id('dsRec');if(!rec)return;var sen=$id('dsSen'),exp=$id('dsExp'),ctl=$id('dsCtl'),BN={lo:'Low',md:'Moderate',hi:'High',cr:'Critical'};
    function inp(){return {lg:+rec.value,s:+segV(sen),e:+segV(exp),c:$$('input',ctl).filter(function(i){return i.checked;}).map(function(i){return i.value;})};}
    function render(){var o=inp(),r=risk(o),n=nice(Math.pow(10,o.lg));ckLabels(ctl);
      setT('dsRecV',fmt(n));setT('dsRkS',r.score);setT('dsF0',r.R.toFixed(2));setT('dsF1',r.S.toFixed(2));setT('dsF2',r.E.toFixed(2));setT('dsF3','×'+r.cf.toFixed(2));
      var arc=$id('dsRkArc');arc.style.strokeDashoffset=100-r.score;arc.setAttribute('class','vl '+r.band);
      var b=$id('dsRkB');b.textContent=BN[r.band]+' risk';b.className='ds-rkb '+r.band;
      var p='If this store were breached because reasonable security safeguards were missing, the DPDP Act Schedule allows a penalty of up to ₹250 crore; not notifying the Board and affected people can add up to ₹200 crore.';
      if(o.s===4)p+=' Breaching the extra duties for children\'s data can also attract up to ₹200 crore.';
      if(o.s<=1&&o.e<=2)p='Contact data held tightly is lower risk, but it is still personal data: the same DPDP safeguard duty applies, with a Schedule maximum of ₹250 crore for failures.';
      p+=' The Board weighs the nature, gravity and duration of a breach, the data affected and mitigation.';
      setT('dsRkP',p);
      var fx=[];if(o.e===4)fx.push('Remove public links and public bucket access first.');if(o.e===3)fx.push('Review external guests and vendor access; set expiry dates.');if(o.e===2)fx.push('Replace organisation-wide access with named groups.');
      if(o.c.indexOf('mfa')<0)fx.push('Enforce MFA and least privilege on every identity that can read this store.');if(o.c.indexOf('enc')<0)fx.push('Turn on encryption at rest with keys you control.');
      if(o.c.indexOf('mon')<0)fx.push('Send access alerts to your SIEM and add DLP rules for these labels.');if(o.lg>=6&&o.s>=3)fx.push('Mask or tokenise fields this store does not need.');if(o.c.indexOf('ret')<0)fx.push('Set retention and delete records past their purpose.');
      if(!fx.length)fx.push('Keep monitoring for drift: new copies, new access and new flows.');
      $id('dsRkL').innerHTML=fx.slice(0,3).map(function(f){return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg><span>'+esc(f)+'</span></li>';}).join('');}
    [sen,exp].forEach(function(s){s.addEventListener('change',render);s.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(b)setTimeout(render,0);});});
    rec.addEventListener('input',render);ctl.addEventListener('change',render);render();
    window.__dsRisk=function(o){return risk(o);};})();

  /* ---------- READINESS QUIZ ---------- */
  var QZ=[
    ['Do you have an up-to-date inventory of every store holding personal data, including SaaS and test copies?','Build a complete data inventory, including shadow copies','#stores'],
    ['Is sensitive data classified automatically with Indian types such as Aadhaar, PAN, GSTIN, bank and health?','Classify with India-specific detectors','#classify'],
    ['Does every sensitive data store have a named business owner?','Give each sensitive store an owner','#access'],
    ['Do you review access to sensitive data at least quarterly, including service accounts and guests?','Start quarterly access reviews','#access'],
    ['Can you find public or "anyone" links and public buckets within a day?','Detect public links and buckets daily','#access'],
    ['Do you know which personal data leaves India, and is payment data kept in India?','Map data flows and residency','#flows'],
    ['Do you control what data copilots, chatbots and RAG indexes can read?','Put DSPM for AI in front of your AI tools','#ai'],
    ['Do data labels drive your DLP policies and SIEM alerts?','Connect labels to DLP and SIEM','#integrate']];
  var STG=[[25,'Stage 1 · Ad hoc','You are relying on people remembering where data is. Start with a one-time assessment to build the inventory.'],[50,'Stage 2 · Aware','You know the main stores, but shadow data and access drift are likely. Continuous discovery is the next step.'],[75,'Stage 3 · Defined','Good foundations. Close the gaps in flows, AI and enforcement so findings turn into fixes automatically.'],[101,'Stage 4 · Managed','Strong posture. Keep it measured with continuous monitoring and monthly reporting.']];
  (function(){var ol=$id('dsQz');if(!ol)return;var A=QZ.map(function(){return null;});
    ol.innerHTML=QZ.map(function(q,i){return '<li data-q="'+i+'"><p>'+esc(q[0])+'</p><div class="seg" data-qs="'+i+'"><button type="button" data-v="2">Yes</button><button type="button" data-v="1">Partly</button><button type="button" data-v="0">No</button></div></li>';}).join('');
    function stage(p){for(var i=0;i<STG.length;i++)if(p<STG[i][0])return STG[i];return STG[3];}
    function res(){var n=0,s=0;A.forEach(function(a){if(a!==null){n++;s+=a;}});var p=Math.round(s/16*100),g=[];
      A.forEach(function(a,i){if(a===0)g.push(i);});A.forEach(function(a,i){if(a===1)g.push(i);});return {n:n,pct:p,stage:n?stage(p):null,gaps:g.slice(0,3)};}
    function render(){var r=res();setT('dsQzS',r.pct+'%');setT('dsQzA',r.n+' of 8 answered');$id('dsQzBar').style.transform='scaleX('+(r.pct/100)+')';
      setT('dsQzSt',r.stage?r.stage[1]:'Answer the questions to see your stage');setT('dsQzD',r.stage?r.stage[2]:'Each answer is scored Yes 2, Partly 1, No 0.');
      $id('dsQzG').innerHTML=r.gaps.map(function(i){return '<li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg><span><a href="'+QZ[i][2]+'">'+esc(QZ[i][1])+'</a></span></li>';}).join('');
      $$('li[data-q]',ol).forEach(function(li,i){li.classList.toggle('ans',A[i]!==null);});}
    ol.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;var sg=b.closest('[data-qs]'),i=+sg.getAttribute('data-qs');
      $$('button',sg).forEach(function(x){x.classList.toggle('on',x===b);});A[i]=+b.getAttribute('data-v');render();});
    $id('dsQzRs').addEventListener('click',function(){A=A.map(function(){return null;});$$('button',ol).forEach(function(x){x.classList.remove('on');});render();});
    $id('dsQzDl').addEventListener('click',function(){var r=res(),L=['XcellSecure DSPM readiness — self-assessment','Score: '+r.pct+'% ('+r.n+' of 8 answered)','Stage: '+(r.stage?r.stage[1]:'not enough answers'),''];
      QZ.forEach(function(q,i){L.push((i+1)+'. '+q[0]+' — '+(A[i]===2?'Yes':A[i]===1?'Partly':A[i]===0?'No':'Not answered'));});
      L.push('','First gaps to close:');r.gaps.forEach(function(i){L.push('- '+QZ[i][1]);});L.push('','Illustrative self-assessment, not an audit. XcellHost · +91 22 6711 1555 · sales@xcellhost.cloud');
      XH.download('dspm-readiness.txt',L.join('\n'),'text/plain');});
    render();window.__dsQuiz=function(ans){A=ans.slice();render();return res();};})();

  /* ---------- CONFIGURATOR ---------- */
  var PR={assess:149999,store:2999,tb:499,ai:9999,acc:49999,dlp:89999,dpdp:14999,siem:49999};
  (function(){var st=$id('cStart');if(!st)return;var dep=$id('cDep'),adds=$id('cAdds');
    function num(id,mn,mx){var e=$id(id);return clamp(Math.round(+e.value||0),mn,mx);}
    function cfg(){var s=segV(st),n=num('cSt',5,500),tb=num('cTb',1,5000),ai=num('cAi',0,50),acc=num('cAcc',0,50),dp=segV(dep),ad=$$('input',adds).filter(function(i){return i.checked;}).map(function(i){return i.value;}),L=[],Q=[];
      if(s==='assess'||s==='both')L.push({key:'dspm-assess',name:'DSPM Assessment',sub:'one-time · per 10 data stores · '+n+' stores',price:PR.assess,qty:Math.ceil(n/10),one:1});
      if(s==='managed'||s==='both'){L.push({key:'dspm-managed',name:'Managed DSPM',sub:'per data store / month · 1 TB each included',price:PR.store,qty:n});
        if(tb>n)L.push({key:'dspm-tb',name:'Additional scanned data',sub:'per TB / month',price:PR.tb,qty:tb-n});}
      if(ai>0)L.push({key:'dspm-ai',name:'DSPM for AI add-on',sub:'per AI app or pipeline / month',price:PR.ai,qty:ai});
      if(acc>0)L.push({key:'dspm-csa',name:'Cloud security assessment',sub:'per cloud account · one-time',price:PR.acc,qty:acc,one:1});
      if(ad.indexOf('dlp')>-1)L.push({key:'dspm-pdlp',name:'Microsoft Purview DLP Quick Start',sub:'per tenant · one-time',price:PR.dlp,qty:1,one:1});
      if(ad.indexOf('dpdp')>-1)L.push({key:'dspm-dpdp',name:'XcellPrivacy Starter (DPDP)',sub:'per month',price:PR.dpdp,qty:1});
      if(ad.indexOf('siem')>-1)L.push({key:'dspm-siem',name:'Managed Sentinel Essentials',sub:'per month',price:PR.siem,qty:1});
      Q.push('DSPM platform licence');if(dp==='onp')Q.push('On-prem scanner install');if(dp==='xh')Q.push('Mumbai private cloud scanner hosting');
      var mon=0,one=0;L.forEach(function(l){var v=l.price*l.qty;if(l.one)one+=v;else mon+=v;});var sub=mon+one,gst=Math.round(sub*.18);
      var nm=s==='assess'?'DSPM Assessment · '+n+' stores':s==='both'?'Assessment + Managed DSPM · '+n+' stores':'Managed DSPM · '+n+' stores';if(ai>0)nm+=' · '+ai+' AI';
      return {L:L,Q:Q,mon:mon,one:one,sub:sub,gst:gst,tot:sub+gst,name:nm};}
    var lastTot=-1;
    function render(){var r=cfg();ckLabels(adds);setT('cName',r.name);
      $id('cList').innerHTML=r.L.map(function(l){return '<li><span>'+esc(l.name)+(l.qty>1?' × '+fmt(l.qty):'')+'</span><b>'+inr(l.price*l.qty)+(l.one?'':'/mo')+'</b></li>';}).join('')+r.Q.map(function(q){return '<li class="q"><span>'+esc(q)+'</span><b>on quote</b></li>';}).join('');
      setT('cMon',inr(r.mon));setT('cOne',inr(r.one));setT('cSub',inr(r.sub));setT('cGst',inr(r.gst));setT('cTot',inr(r.tot));if(lastTot!==-1&&lastTot!==r.tot)bump($id('cTot'));lastTot=r.tot;
      $id('oAdd').disabled=!r.L.length;}
    [st,dep].forEach(function(s){s.addEventListener('change',render);s.addEventListener('click',function(e){if(e.target.closest('button[data-v]'))setTimeout(render,0);});});
    ['cSt','cTb','cAi','cAcc'].forEach(function(id){$id(id).addEventListener('input',render);$id(id).addEventListener('change',render);});
    adds.addEventListener('change',render);
    $id('oAdd').addEventListener('click',function(){var r=cfg();r.L.forEach(function(l){XH.cart.add({key:l.key,name:l.name,sub:l.sub,price:l.price,qty:l.qty});});});
    function toCfg(){var c=$id('configure');if(c)c.scrollIntoView({behavior:R?'auto':'smooth'});}
    $$('[data-plan]').forEach(function(b){b.addEventListener('click',function(){var p=b.getAttribute('data-plan');
      if(p==='assess')setSeg(st,'assess');else if(p==='managed')setSeg(st,'managed');else{if(segV(st)==='assess')setSeg(st,'managed');var a=$id('cAi');if(+a.value<1)a.value=1;}
      render();toCfg();});});
    window.__dsSetStores=function(n){var e=$id('cSt');e.value=clamp(n,5,500);var t=$id('cTb');if(+t.value<n)t.value=n;render();};
    render();window.__dsCfg=cfg;})();
})();
