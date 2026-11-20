
(function(){
  'use strict';
  var XH=window.XH,$=XH.$||function(s,r){return (r||document).querySelector(s);},$$=XH.$$||function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));},R=!!XH.reduce,FINE=XH.fine!==undefined?XH.fine:(window.matchMedia&&matchMedia('(pointer:fine)').matches),d=document;
  function $id(i){return d.getElementById(i);}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function seg01(a,b,t){return clamp((t-a)/(b-a),0,1);}
  function eo(t){return 1-Math.pow(1-t,3);}
  function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function fmt(n){return Math.round(n).toLocaleString('en-IN');}
  function inr(n){n=Math.round(n);return XH.inr?XH.inr(n):'₹'+fmt(n);}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function setT(id,v){var e=$id(id);if(e&&e.textContent!==String(v))e.textContent=v;}
  function sw(el){if(!el||R)return;el.classList.remove('sw');void el.offsetWidth;el.classList.add('sw');}
  function segV(el){if(!el)return null;var b=$('button.on',el);return el.dataset.value||(b?b.getAttribute('data-v'):null);}
  function setSeg(el,v){if(!el)return;$$('button',el).forEach(function(x){x.classList.toggle('on',x.getAttribute('data-v')===v);});el.dataset.value=v;}
  function onSeg(el,fn){if(!el)return;el.addEventListener('change',fn);el.addEventListener('click',function(e){if(e.target.closest('button'))setTimeout(fn,0);});}

  /* ---------- one shared rAF loop ---------- */
  var subs=[],raf=0;
  function frame(t){var any=false;for(var i=0;i<subs.length;i++){if(subs[i].on){subs[i].fn(t);any=true;}}raf=any?requestAnimationFrame(frame):0;}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v&&!raf)raf=requestAnimationFrame(frame);};}

  /* ---------- canvas helpers ---------- */
  var DPR=Math.min(2,window.devicePixelRatio||1),TAU=Math.PI*2,MONO='"IBM Plex Mono",ui-monospace,monospace',DISP='Sora,system-ui,sans-serif';
  var C={bl:'#0066FF',bl2:'#7FB0FF',nv:'#0B132B',or:'#FF8A00',gr:'#3DD47A',rd:'#FF6B5B',wh:'#FFFFFF',mut:'#8FA6CF',ln:'rgba(127,176,255,.22)',grid:'rgba(127,176,255,.06)',card:'#101C3A',card2:'#0D1730'};
  function fit(cv){var w=cv.clientWidth,h=cv.clientHeight;if(!w||!h)return null;var W=Math.round(w*DPR),H=Math.round(h*DPR);if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H;}var s=clamp(w/580,.7,1.2),c=cv.getContext('2d');c.setTransform(DPR*s,0,0,DPR*s,0,0);return {c:c,w:w/s,h:h/s};}
  function F(wt,sz,fam){return wt+' '+sz+'px '+(fam||MONO);}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,h/2,w/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function txt(c,s,x,y,f,col,al){c.font=f;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='middle';c.fillText(s,x,y);}
  function dot(c,x,y,r,col){c.beginPath();c.arc(x,y,r,0,TAU);c.fillStyle=col;c.fill();}
  function card(c,x,y,w,h,r,bd){rr(c,x,y,w,h,r||10);c.fillStyle=C.card;c.fill();c.strokeStyle=bd||C.ln;c.lineWidth=1;c.stroke();}
  function tick(c,x,y,s,col){dot(c,x,y,s,col);c.strokeStyle='#fff';c.lineWidth=Math.max(1.4,s*.24);c.lineCap='round';c.lineJoin='round';c.beginPath();c.moveTo(x-s*.42,y);c.lineTo(x-s*.1,y+s*.32);c.lineTo(x+s*.45,y-s*.3);c.stroke();}
  function cross(c,x,y,s,col){dot(c,x,y,s,col);c.strokeStyle='#fff';c.lineWidth=Math.max(1.4,s*.24);c.lineCap='round';c.beginPath();c.moveTo(x-s*.35,y-s*.35);c.lineTo(x+s*.35,y+s*.35);c.moveTo(x+s*.35,y-s*.35);c.lineTo(x-s*.35,y+s*.35);c.stroke();}
  function pill(c,s,x,y,f,bg,fg,al){c.font=f;var w=c.measureText(s).width+16,h=20,x0=al==='center'?x-w/2:al==='right'?x-w:x;rr(c,x0,y-h/2,w,h,10);c.fillStyle=bg;c.fill();txt(c,s,x0+8,y,f,fg);return w;}
  function bg(c,w,h){c.fillStyle='#08101F';c.fillRect(0,0,w,h);c.strokeStyle=C.grid;c.lineWidth=1;c.beginPath();for(var x=24;x<w;x+=24){c.moveTo(x+.5,0);c.lineTo(x+.5,h);}for(var y=24;y<h;y+=24){c.moveTo(0,y+.5);c.lineTo(w,y+.5);}c.stroke();}
  function rgba(hex,a){var n=parseInt(hex.slice(1),16);return 'rgba('+(n>>16)+','+(n>>8&255)+','+(n&255)+','+a+')';}
  function env(c,x,y,s,col){rr(c,x-s,y-s*.68,s*2,s*1.36,2);c.fillStyle=col;c.fill();c.strokeStyle='rgba(255,255,255,.85)';c.lineWidth=1.2;c.beginPath();c.moveTo(x-s,y-s*.6);c.lineTo(x,y+s*.1);c.lineTo(x+s,y-s*.6);c.stroke();}
  function keyI(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2.2;c.beginPath();c.arc(x-s*.45,y,s*.45,0,TAU);c.moveTo(x,y);c.lineTo(x+s,y);c.moveTo(x+s*.7,y);c.lineTo(x+s*.7,y+s*.4);c.stroke();}
  function bugI(c,x,y,s,col){c.fillStyle=col;c.beginPath();c.ellipse(x,y,s*.55,s*.75,0,0,TAU);c.fill();c.strokeStyle=col;c.lineWidth=1.6;c.beginPath();for(var k=-1;k<=1;k++){c.moveTo(x-s*.5,y+k*s*.4);c.lineTo(x-s,y+k*s*.55);c.moveTo(x+s*.5,y+k*s*.4);c.lineTo(x+s,y+k*s*.55);}c.stroke();}
  function lockI(c,x,y,s,col){c.strokeStyle=col;c.lineWidth=2;c.beginPath();c.arc(x,y-s*.3,s*.45,Math.PI,0);c.stroke();rr(c,x-s*.65,y-s*.3,s*1.3,s*.95,2);c.fillStyle=col;c.fill();}
  function person(c,x,y,s,col){dot(c,x,y-s*.55,s*.38,col);c.beginPath();c.arc(x,y+s*.55,s*.7,Math.PI,0);c.fillStyle=col;c.fill();}

  /* ---------- HERO scenes ---------- */
  var DUR=5500;
  function s0(c,w,h,t){ // cloud migration
    var ox=w*.05,oy=h*.2,ow=w*.32,oh=h*.62;
    card(c,ox,oy,ow,oh,12);txt(c,'YOUR OFFICE',ox+12,oy+16,F(700,10),C.mut);
    for(var r=0;r<2;r++)for(var k=0;k<5;k++){rr(c,ox+12+k*(ow-24)/5,oy+30+r*14,(ow-24)/5-6,8,2);c.fillStyle='rgba(127,176,255,'+(.12+.1*Math.sin(t/700+k+r))+')';c.fill();}
    var items=['Tally on one PC','Mail on free accounts','Backup on a USB drive'],rows=['Tally on Cloud','Microsoft 365','Daily backup · India','Cloud desktops'];
    var cx=w*.56,cy=h*.1,cw=w*.39,ch=h*.8;
    c.save();c.shadowColor='rgba(0,102,255,.4)';c.shadowBlur=28;card(c,cx,cy,cw,ch,14,'rgba(0,102,255,.6)');c.restore();
    rr(c,cx,cy,cw,30,14);c.fillStyle='rgba(0,102,255,.25)';c.fill();
    txt(c,'XcellHost · Mumbai Tier IV',cx+12,cy+15,F(700,11.5,DISP),C.wh);
    items.forEach(function(s,i){var t0=500+i*1300,p=R?1:seg01(t0,t0+900,t),y=oy+72+i*44;
      rr(c,ox+12,y,ow-24,32,8);c.fillStyle=p>=1?'rgba(255,255,255,.03)':'rgba(255,107,91,.12)';c.fill();c.strokeStyle=p>=1?'rgba(127,176,255,.12)':'rgba(255,107,91,.45)';c.stroke();
      txt(c,s,ox+22,y+16,F(500,11),p>=1?'rgba(143,166,207,.6)':C.wh);
      if(p>=1){c.strokeStyle='rgba(143,166,207,.6)';c.lineWidth=1.2;c.beginPath();c.moveTo(ox+22,y+16);c.lineTo(ox+22+c.measureText(s).width,y+16);c.stroke();}
      if(p>0&&p<1){var sx=ox+ow-14,sy=y+16,ex=cx+14,ey=cy+56+i*48,mx=(sx+ex)/2,my=Math.min(sy,ey)-40,u=eio(p);
        c.strokeStyle='rgba(127,176,255,.25)';c.setLineDash([3,5]);c.lineWidth=1.2;c.beginPath();c.moveTo(sx,sy);c.quadraticCurveTo(mx,my,ex,ey);c.stroke();c.setLineDash([]);
        for(var q=0;q<5;q++){var uu=Math.max(0,u-q*.04),a1=(1-uu)*(1-uu),b1=2*(1-uu)*uu,c1=uu*uu;dot(c,a1*sx+b1*mx+c1*ex,a1*sy+b1*my+c1*ey,3.4-q*.5,rgba(C.or,1-q*.18));}}
    });
    rows.forEach(function(s,i){var t0=i<3?1400+i*1300:4300,p=R?1:seg01(t0,t0+400,t),y=cy+42+i*48;
      c.globalAlpha=.25+.75*p;rr(c,cx+12,y,cw-24,36,9);c.fillStyle=p>=1?'rgba(61,212,122,.1)':'rgba(255,255,255,.04)';c.fill();c.strokeStyle=p>=1?'rgba(61,212,122,.45)':C.ln;c.stroke();
      txt(c,s,cx+24,y+18,F(600,11.5,DISP),C.wh);if(p>=1)tick(c,cx+cw-26,y+18,8,'#16a34a');c.globalAlpha=1;});
    var n=R?0:3-[1400,2700,4000].filter(function(x){return t>=x+400;}).length;
    pill(c,'Data only on one PC: '+n,ox,oy+oh+18,F(700,10),n?'rgba(255,107,91,.18)':'rgba(61,212,122,.18)',n?'#FFB4AA':'#9BE8B9');
  }
  var THR=[['ok',-1],['ph',0],['ok',-1],['key',1],['ok',-1],['bug',2],['rw',3],['ok',-1]],LAY=['Email filter','MFA','EDR','Immutable backup'];
  function s1(c,w,h,t){
    var top=h*.2,bot=h*.86,lx=[.32,.47,.62,.77].map(function(f){return w*f;}),sx=w*.07,ex=w*.94;
    txt(c,'INTERNET',sx,top-14,F(700,10),C.mut,'center');txt(c,'YOUR TEAM',ex,top-14,F(700,10),C.mut,'center');
    for(var p=0;p<3;p++)person(c,ex,top+40+p*((bot-top-60)/2),11,'rgba(127,176,255,.75)');
    var blocked=0,hit=[0,0,0,0];
    THR.forEach(function(it,i){var t0=200+i*560,dur=2200,u=R?1:seg01(t0,t0+dur,t),stop=it[1],y=lerp(top+24,bot-14,((i*37)%8)/7);
      var endX=stop<0?ex-22:lx[stop]-12,x=lerp(sx+14,endX,eio(u));
      if(stop>=0&&u>=1){blocked++;hit[stop]=Math.max(hit[stop],R?.4:Math.max(0,1-(t-(t0+dur))/900));}
      var col=stop<0?C.bl2:C.rd;
      if(stop>=0&&u>=1){cross(c,x,y,7,'#c0392b');return;}
      if(it[0]==='ok'||it[0]==='ph')env(c,x,y,8,stop<0?'rgba(127,176,255,.9)':C.rd);else if(it[0]==='key')keyI(c,x,y,8,col);else if(it[0]==='bug')bugI(c,x,y,8,col);else lockI(c,x,y,8,col);
      if(stop<0&&u>=1){}
    });
    LAY.forEach(function(L,i){var x=lx[i],g=hit[i];c.save();c.shadowColor=g>0?'rgba(0,102,255,.9)':'transparent';c.shadowBlur=20*g;rr(c,x-6,top,12,bot-top,6);c.fillStyle=i===3?rgba('#16a34a',.45+.5*g):rgba(C.bl,.45+.5*g);c.fill();c.restore();
      txt(c,L,x,bot+16,F(600,10),C.wh,'center');});
    pill(c,'Blocked: '+blocked,w*.5,top-14,F(700,10),'rgba(255,138,0,.2)','#FFB15C','center');
    if(R||t>4400){pill(c,'Restore point safe',lx[3],top+16,F(700,9.5),'rgba(22,163,74,.85)','#fff','center');}
  }
  function s2(c,w,h,t){
    var ins=[['WhatsApp','Quote request · 40 units'],['Email','Invoice PDF · vendor'],['PDF','GST notice · 3 pages']],outs=['Draft quote ready','Ledger entry drafted','Summary · 5 points'];
    var aiX=w*.5,aiY=h*.44,lw=w*.3,lx=w*.04,rx=w*.66,rw=w*.3;
    txt(c,'COMING IN',lx,h*.12,F(700,10),C.mut);txt(c,'GOING OUT · AFTER APPROVAL',rx,h*.12,F(700,10),C.mut);
    var pr=R?1:.5+.5*Math.sin(t/300);c.beginPath();c.arc(aiX,aiY,30+6*pr,0,TAU);c.strokeStyle='rgba(0,102,255,.35)';c.lineWidth=2;c.stroke();
    c.save();c.shadowColor='rgba(0,102,255,.8)';c.shadowBlur=24;dot(c,aiX,aiY,26,C.bl);c.restore();txt(c,'AI',aiX,aiY-3,F(800,15,DISP),'#fff','center');txt(c,'Worker',aiX,aiY+12,F(600,8.5),'#fff','center');
    var done=0;
    ins.forEach(function(it,i){var t0=200+i*1100,y=h*.18+i*h*.22,a=R?1:seg01(t0,t0+400,t),mv=R?1:seg01(t0+500,t0+1100,t);
      c.globalAlpha=a;card(c,lx,y,lw,h*.17,9);txt(c,it[0].toUpperCase(),lx+10,y+14,F(700,8.5),C.or);txt(c,it[1],lx+10,y+31,F(500,10.5,DISP),C.wh);c.globalAlpha=1;
      if(mv>0&&mv<1){var u=eio(mv);dot(c,lerp(lx+lw,aiX-28,u),lerp(y+h*.085,aiY,u),4,C.or);}
      var o0=t0+1300,oa=R?1:seg01(o0,o0+400,t),ap=R?1:seg01(o0+700,o0+1000,t),oy=y;
      if(oa>0){c.globalAlpha=oa;var mv2=R?1:seg01(o0-200,o0+200,t);if(mv2<1){var u2=eio(mv2);dot(c,lerp(aiX+28,rx,u2),lerp(aiY,oy+h*.085,u2),4,C.bl2);}
        card(c,rx,oy,rw,h*.17,9,ap>=1?'rgba(61,212,122,.5)':C.ln);txt(c,outs[i],rx+10,oy+h*.06,F(600,10.5,DISP),C.wh);
        if(ap>0){pill(c,ap>=1?'Approved by you':'Awaiting approval',rx+10,oy+h*.13,F(700,8.5),ap>=1?'rgba(22,163,74,.85)':'rgba(255,138,0,.25)',ap>=1?'#fff':'#FFB15C');if(ap>=1)done++;}
        c.globalAlpha=1;}
    });
    var hrs=R?11.5:11.5*eo(seg01(600,5200,t));
    var bx=w*.3,by=h*.9,bw=w*.4;rr(c,bx,by-5,bw,10,5);c.fillStyle='rgba(255,255,255,.08)';c.fill();rr(c,bx,by-5,bw*hrs/11.5,10,5);c.fillStyle=C.or;c.fill();
    txt(c,'Hours saved this week · '+hrs.toFixed(1)+' h',w*.5,by-16,F(700,10),C.wh,'center');
  }
  var SRC=[['Google Business Profile',C.or],['Website form',C.bl2],['WhatsApp',C.gr],['Email campaign','#FFFFFF']];
  function s3(c,w,h,t){
    var lx=w*.04,fx=w*.34,fw=w*.2,top=h*.16,bot=h*.86,cx=w*.6,cw=w*.36;
    txt(c,'SOURCES',lx,top-6,F(700,10),C.mut);
    SRC.forEach(function(s,i){var y=top+18+i*((bot-top-20)/4);dot(c,lx+6,y,5,s[1]);txt(c,s[0],lx+16,y,F(500,10.5,DISP),C.wh);});
    // funnel
    c.beginPath();c.moveTo(fx,top+6);c.lineTo(fx+fw,top+6);c.lineTo(fx+fw*.68,bot-30);c.lineTo(fx+fw*.32,bot-30);c.closePath();c.fillStyle='rgba(0,102,255,.14)';c.fill();c.strokeStyle='rgba(0,102,255,.6)';c.lineWidth=1.4;c.stroke();
    var st=['Enquiries','Qualified','Quotes'],vals=[96,58,31];
    st.forEach(function(s,i){var y=top+28+i*((bot-top-70)/3)+10,p=R?1:seg01(1200+i*700,1800+i*700,t);txt(c,s,fx+fw/2,y,F(600,10,DISP),C.wh,'center');txt(c,String(Math.round(vals[i]*p)),fx+fw/2,y+14,F(800,12),i===2?C.or:C.bl2,'center');});
    if(!R)for(var k=0;k<14;k++){var ph=((t/2600)+k/14)%1,si=k%4,y0=top+18+si*((bot-top-20)/4),x=lerp(lx+150,fx+fw/2,eio(ph)),y=lerp(y0,top+16,eio(ph));if(x>lx+150)dot(c,x,y,3,SRC[si][1]);}
    // chart
    card(c,cx,top,cw,bot-top,12);txt(c,'Enquiries / week',cx+12,top+16,F(700,10),C.mut);
    var pts=[12,13,12,15,17,16,19,22,21,25,27,30],n=pts.length,gx=cx+14,gw=cw-28,gy=top+34,gh=bot-top-62,p2=R?1:seg01(300,4600,t),show=1+(n-1)*eio(p2);
    c.strokeStyle='rgba(127,176,255,.12)';c.lineWidth=1;c.beginPath();for(var g=0;g<=3;g++){c.moveTo(gx,gy+gh*g/3);c.lineTo(gx+gw,gy+gh*g/3);}c.stroke();
    c.strokeStyle=C.or;c.lineWidth=2.4;c.lineJoin='round';c.beginPath();var lastX=gx,lastY=gy+gh;
    for(var j=0;j<n;j++){if(j>show)break;var fr=Math.min(1,show-j+1),xx=gx+gw*j/(n-1),yy=gy+gh-(pts[j]-8)/26*gh;if(j===0)c.moveTo(xx,yy);else{var px=gx+gw*(j-1)/(n-1),py=gy+gh-(pts[j-1]-8)/26*gh;if(fr<1){xx=lerp(px,xx,fr);yy=lerp(py,yy,fr);}c.lineTo(xx,yy);}lastX=xx;lastY=yy;}
    c.stroke();dot(c,lastX,lastY,4.5,C.or);
    txt(c,'W1',gx,bot-16,F(500,9),C.mut);txt(c,'W12',gx+gw,bot-16,F(500,9),C.mut,'right');
    if(R||t>3600)pill(c,'DMARC p=reject · inbox ✓',cx+cw/2,bot+14,F(700,9),'rgba(22,163,74,.85)','#fff','center');
  }
  var LANES=[['Cloud',['M365 + backup','Tally on cloud','DR tested']],['Cyber',['MFA + EDR','24×7 SOC','DMARC reject']],['AI',['AI policy','First AI Worker','3 processes']],['Marketing',['Profile + WhatsApp','New website','Clean leads']]];
  function s4(c,w,h,t){
    var lx=w*.04,x0=w*.2,x1=w*.8,top=h*.18,rh=(h*.8-top)/4,cols=[.17,.5,.83].map(function(f){return lerp(x0,x1,f);}),labs=['90 days','6 months','12 months'];
    labs.forEach(function(l,i){txt(c,l.toUpperCase(),cols[i],top-14,F(700,9.5),i===0?C.or:i===1?C.bl2:C.gr,'center');});
    var cur=R?1:eio(seg01(300,4700,t)),cxp=lerp(x0,x1,cur),lit=0;
    LANES.forEach(function(L,i){var y=top+rh*i+rh*.45;txt(c,L[0],lx,y,F(700,11,DISP),C.wh);
      c.strokeStyle='rgba(127,176,255,.18)';c.lineWidth=3;c.lineCap='round';c.beginPath();c.moveTo(x0,y);c.lineTo(x1,y);c.stroke();
      c.strokeStyle=C.bl;c.beginPath();c.moveTo(x0,y);c.lineTo(cxp,y);c.stroke();
      L[1].forEach(function(m,j){var on=cxp>=cols[j]-1;if(on)lit++;dot(c,cols[j],y,on?7:5,on?(j===0?C.or:j===1?C.bl:'#16a34a'):'#1B2A4F');if(on)tick(c,cols[j],y,5.5,j===0?C.or:j===1?C.bl:'#16a34a');txt(c,m,cols[j],y+16,F(500,9.5,DISP),on?C.wh:C.mut,'center');});});
    c.strokeStyle='rgba(255,138,0,.6)';c.lineWidth=1.2;c.setLineDash([4,4]);c.beginPath();c.moveTo(cxp,top-4);c.lineTo(cxp,top+rh*4-8);c.stroke();c.setLineDash([]);
    var lv=lit>=12?3:lit>=8?2:lit>=4?1.5:1;var gx=w*.9,gy=h*.5;
    c.beginPath();c.arc(gx,gy,26,Math.PI*.75,Math.PI*2.25);c.strokeStyle='rgba(255,255,255,.1)';c.lineWidth=6;c.stroke();
    c.beginPath();c.arc(gx,gy,26,Math.PI*.75,Math.PI*.75+Math.PI*1.5*(lit/12));c.strokeStyle=C.or;c.stroke();
    txt(c,'L'+(lv===1.5?'2':Math.floor(lv)),gx,gy-2,F(800,15),C.wh,'center');txt(c,'LEVEL',gx,gy+14,F(700,7.5),C.mut,'center');
    pill(c,lit+' / 12 milestones',w*.5,h*.92,F(700,9.5),'rgba(0,102,255,.25)','#BFD6FF','center');
  }
  var SC=[{ttl:'Cloud · office to Mumbai Tier IV',sub:'Sample · Tally, mail and backups move off single PCs',chip:['Books on the cloud','Tally · M365 · backup']},
          {ttl:'Cybersecurity · four layers, one SOC',sub:'Sample · phish, stolen password, malware, ransomware',chip:['Threats stopped early','filter · MFA · EDR · backup']},
          {ttl:'AI · drafts in, approvals out',sub:'Sample · AI Worker with human approval',chip:['A person approves','quotes · ledger · summaries']},
          {ttl:'Digital marketing · enquiries you can track',sub:'Sample · profile, site, WhatsApp, email → pipeline',chip:['Leads by source','profile · site · WhatsApp']},
          {ttl:'Roadmap · 90 days, 6 months, 12 months',sub:'Sample · all four pillars to Level 3',chip:['12 milestones','90 d · 6 m · 12 m']}];
  var MV=[[86,30,18,24],[40,88,18,24],[40,45,84,24],[40,45,40,86],[92,94,88,90]];
  (function(){var hero=$id('sdHero'),scr=$id('sdScr');if(!hero||!scr)return;
    var cvs=[$id('sdCvA'),$id('sdCvB')],act=0,cur=0,el=0,last=0,paused=false,hover=false,hidden=true,dots=$$('#sdDots button[data-k]'),pz=$id('sdPz'),meters=$$('.sd-mt');
    function draw(k,cv,tt){var f=fit(cv);if(!f)return;var c=f.c;c.clearRect(0,0,f.w,f.h);bg(c,f.w,f.h);[s0,s1,s2,s3,s4][k](c,f.w,f.h,tt);}
    function paint(tt){draw(cur,cvs[act],tt);var b=dots[cur];if(b){var i=$('i',b);if(i)i.style.setProperty('--p',R?1:clamp(tt/DUR,0,1));}}
    function labels(){var s=SC[cur];setT('sdCapN','0'+(cur+1));setT('sdTitle',s.ttl);setT('sdSub',s.sub);setT('sdChAt',s.chip[0]);setT('sdChAs',s.chip[1]);sw($id('sdTitle'));sw($id('sdChA'));
      dots.forEach(function(b,i){b.classList.toggle('on',i===cur);b.classList.toggle('past',i<cur);b.setAttribute('aria-selected',i===cur?'true':'false');var ii=$('i',b);if(ii&&i!==cur)ii.style.setProperty('--p',0);});
      meters.forEach(function(m,i){m.classList.toggle('on',cur<4?i===cur:true);var b=$('i',m);if(b)b.style.width=MV[cur][i]+'%';});}
    function go(k){k=(k+5)%5;var old=cvs[act];act=1-act;cvs[act].classList.add('on');old.classList.remove('on');cur=k;el=0;labels();paint(R?DUR:0);}
    var run=loop(function(now){if(!last)last=now;var dt=Math.min(64,now-last);last=now;if(!(paused||hover))el+=dt;if(el>=DUR){go(cur+1);return;}paint(el);});
    function setRun(){var on=!R&&!hidden;if(on)last=0;run(on);}
    dots.forEach(function(b){b.addEventListener('click',function(){var k=+b.getAttribute('data-k');if(k===cur){el=0;paint(R?DUR:0);return;}go(k);});});
    if(pz)pz.addEventListener('click',function(){paused=!paused;pz.classList.toggle('paused',paused);pz.setAttribute('aria-label',paused?'Play scenes':'Pause scenes');});
    var stage=$id('sdStage');stage.addEventListener('mouseenter',function(){hover=true;});stage.addEventListener('mouseleave',function(){hover=false;});
    var sx=null;scr.addEventListener('pointerdown',function(e){sx=e.clientX;});scr.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));});
    scr.addEventListener('touchstart',function(e){sx=e.touches[0].clientX;},{passive:true});scr.addEventListener('touchend',function(e){if(sx===null)return;var dx=e.changedTouches[0].clientX-sx;sx=null;if(Math.abs(dx)>40)go(cur+(dx<0?1:-1));});
    labels();
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){paint(R?DUR:el);});
    if(R){if(pz)pz.hidden=true;paint(DUR);addEventListener('resize',function(){paint(DUR);});}
    else{paint(0);(XH.whenVisible||function(e,cb){cb(true);})(hero,function(v){hidden=!v;setRun();});addEventListener('resize',function(){paint(el);});}
    window.__sdHero={go:go,pause:function(p){paused=!!p;},seek:function(tt){el=tt;paint(tt);}};
  })();

  /* ---------- sub-nav spy & magnetic buttons ---------- */
  (function(){var links=$$('#sdSubnav a');if(!links.length)return;var secs=links.map(function(a){return $id(a.getAttribute('href').slice(1));}),tk=false;
    function spy(){tk=false;var y=scrollY+180,on=-1;secs.forEach(function(s,i){if(s&&s.getBoundingClientRect().top+scrollY<=y)on=i;});links.forEach(function(a,i){a.classList.toggle('on',i===on);});}
    addEventListener('scroll',function(){if(!tk){tk=true;requestAnimationFrame(spy);}},{passive:true});spy();})();
  if(FINE&&!R)$$('.sd-mag').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.16)+'px,'+((e.clientY-r.top-r.height/2)*.22)+'px)';});b.addEventListener('pointerleave',function(){b.style.transform='';});});

  /* ---------- pillar tabs, maturity stair, verticals ---------- */
  function tabset(btnSel,attr,panSel,pattr){var bs=$$(btnSel);bs.forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute(attr);bs.forEach(function(x){var on=x===b;x.classList.toggle('on',on);if(x.hasAttribute('aria-selected'))x.setAttribute('aria-selected',on?'true':'false');});$$(panSel).forEach(function(p){p.classList.toggle('on',p.getAttribute(pattr)===k);});});});}
  tabset('#pTabs button','data-p','.sd-pp','data-pp');
  tabset('#vtChips button','data-v','.sd-vp','data-vp');
  (function(){var lv=$$('#mmStair .sd-lv'),g=$id('mmGrid');lv.forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-l');lv.forEach(function(x){x.classList.toggle('on',x===b);});$$('.sd-mc',g).forEach(function(m){m.classList.toggle('on',m.getAttribute('data-l')===k);});g.classList.add('pick');});});})();

  /* ---------- catalogue (prices exactly as on the linked XcellHost pages) ---------- */
  // b: m = monthly, y = annual (billed upfront), o = one-time
  var CAT=[
    ['c_m365e','cloud','Managed Microsoft 365 · Essential','per user / month* · + licence · min 10*',149,'m','managed-microsoft-365.html'],
    ['c_m365p','cloud','Managed Microsoft 365 · Professional','per user / month* · + licence',299,'m','managed-microsoft-365.html'],
    ['c_gwe','cloud','Managed Google Workspace* · Essential','per user / month* · + licence',129,'m','managed-google-workspace.html'],
    ['c_gwp','cloud','Managed Google Workspace* · Professional','per user / month* · + licence',249,'m','managed-google-workspace.html'],
    ['c_tally','cloud','Tally on Cloud · XcellTally Secure','per user / month · TSplus* + Windows licence incl.',499,'m','ca-cloud.html'],
    ['c_cdl','cloud','Cloud desktop · Lite','per user / month* · min 3 users*',899,'m','smb-cloud-desktop.html'],
    ['c_cds','cloud','Cloud desktop · Standard','per user / month*',1499,'m','smb-cloud-desktop.html'],
    ['c_vps','cloud','NVMe VPS · V2','2 vCPU · 8 GB · per month',799,'m','xcellhost-vps-hosting.html'],
    ['c_bkm','cloud','Backup · Microsoft 365 seat','per seat / month',99,'m','smb-cloud.html'],
    ['c_bkp','cloud','Backup · PC','per PC / month',199,'m','smb-cloud.html'],
    ['c_bks','cloud','Backup · server','per server / month',999,'m','smb-cloud.html'],
    ['c_drw','cloud','Managed DR · Warm','per workload / month* · + backup + standby',2499,'m','cloud-disaster-recovery-smb.html'],
    ['c_obj','cloud','Object storage · Bucket','per TB / month',1999,'m','cloud-object-storage.html'],
    ['c_objl','cloud','Object storage · Bucket Plus (Object Lock)','per TB / month*',2299,'m','cloud-object-storage.html'],
    ['s_esb','cyber','Email Security · Essentials','per mailbox / month* · min 10*',99,'m','email-security-smb.html'],
    ['s_esz','cyber','Email Security · Business','per mailbox / month*',199,'m','email-security-smb.html'],
    ['s_esm','cyber','Email Security · Managed','per mailbox / month*',299,'m','email-security-smb.html'],
    ['s_edr','cyber','Acronis* Advanced EDR','₹999 per user / year · billed annually',999,'y','endpoint-security.html'],
    ['s_mfa','cyber','Multi-factor authentication','per user / month*',99,'m','multi-factor-authentication.html'],
    ['s_soc','cyber','24×7 SOC · Essential','per endpoint / month*',199,'m','security-operations.html'],
    ['s_vfw','cyber','Virtual firewall','from · per month',1199,'m','virtual-firewalls.html'],
    ['s_dmarc','cyber','DMARC · Basic','per month · 2 domains',1499,'m','xcellhost-dmarc.html'],
    ['s_ssl','cyber','RapidSSL* certificate','per year',1299,'y','xcellhost-rapidssl.html'],
    ['s_phish','cyber','Phishing simulation','per user / year* · min 25',299,'y','managed-phishing-simulation.html'],
    ['s_gap','cyber','Cyber security gap assessment','one-time*',74999,'o','cyber-security-audit.html'],
    ['s_audit','cyber','Cyber security audit','from · one-time*',199999,'o','cyber-security-audit.html'],
    ['s_csa','cyber','Cloud security assessment','per account · one-time*',49999,'o','cloud-security-assessment.html'],
    ['s_cir','cyber','Cyber insurance readiness assessment','one-time* · up to 100 users',39999,'o','cyber-insurance-for-businesses.html'],
    ['s_vdpo','cyber','vDPO · Programme','8 hours / month',19999,'m','xcellhost-vdpo.html'],
    ['a_awt','ai','AI Workers · Team','per user / month*',999,'m','ai-workers.html'],
    ['a_awb','ai','AI Workers · Business','per user / month*',2499,'m','ai-workers.html'],
    ['a_trn','ai','AI training · Live Online','per learner · one-time*',14999,'o','ai-training-live-online.html'],
    ['a_csp','ai','Copilot Studio agent pilot','one-time* · 4 weeks',249999,'o','azure-ai-foundry-copilot-studio.html'],
    ['a_a365','ai','Agent 365 inventory assessment','one-time*',49999,'o','microsoft-agent-365.html'],
    ['a_call','ai','DeepCall AI call centre · Sarv*','per agent / month · billed yearly',699,'m','xcellhost-sarv-deepcall.html'],
    ['a_naam','ai','Naam* AI caller ID · team','per user / month*',99,'m','naam-ai-caller-id.html'],
    ['d_web1','mkt','Website · Starter','one-time* · up to 5 pages',14999,'o','website-design-packages.html'],
    ['d_web2','mkt','Website · Business','one-time* · up to 10 pages',24999,'o','website-design-packages.html'],
    ['d_web3','mkt','Website · Professional','one-time* · up to 15 pages',39999,'o','website-design-packages.html'],
    ['d_web4','mkt','Website · E-commerce','one-time*',49999,'o','website-design-packages.html'],
    ['d_b2b','mkt','B2B data enrichment · Starter','per month* · billed annually',1875,'m','b2b-data-enrichment.html']
  ];
  var BY={};CAT.forEach(function(r){BY[r[0]]={k:r[0],g:r[1],n:r[2],s:r[3],p:r[4],b:r[5],u:r[6]};});
  var PRE={
    starter:{c_m365e:10,s_esb:10,c_bkm:10,s_mfa:10,s_dmarc:1,s_edr:10,s_ssl:1,d_web1:1},
    growth:{c_m365p:25,s_esz:25,c_bkm:25,c_bks:2,c_tally:5,s_mfa:25,s_soc:25,s_vfw:1,s_dmarc:1,a_awt:5,s_edr:25,s_phish:25,s_cir:1,d_web2:1,a_trn:2},
    scale:{c_m365p:75,s_esm:75,c_bkm:75,c_bks:6,c_cds:20,c_drw:4,c_objl:2,s_mfa:75,s_soc:75,s_vfw:1,s_dmarc:1,s_vdpo:1,a_awb:10,d_b2b:1,s_edr:75,s_phish:75,s_audit:1,d_web3:1,a_trn:5}};
  var DEFQ={c_m365e:10,c_m365p:10,c_gwe:10,c_gwp:10,c_tally:5,c_cdl:3,c_cds:3,s_esb:10,s_esz:10,s_esm:10,s_phish:25,s_mfa:10,s_soc:10,s_edr:10,c_bkm:10,c_bkp:5,a_awt:5,a_awb:5,a_naam:10,a_call:2,a_trn:2};
  function totals(q){var m=0,o=0;Object.keys(q).forEach(function(k){var it=BY[k];if(!it||!q[k])return;var v=it.p*q[k];if(it.b==='m')m+=v;else o+=v;});return {m:m,o:o};}
  window.__sdCalc={CAT:BY,PRE:PRE,totals:totals};
  // keep bundle cards in sync with the catalogue
  ['starter','growth','scale'].forEach(function(b,i){var T=totals(PRE[b]),u=[10,25,75][i];setT('bTm'+i,inr(T.m));setT('bTo'+i,inr(T.o));setT('bTu'+i,inr(T.m/u));});

  /* ---------- configurator ---------- */
  var ST={},GRP=['cloud','cyber','ai','mkt'],curG='cloud';
  CAT.forEach(function(r){ST[r[0]]={on:false,q:DEFQ[r[0]]||1};});
  function bl(b){return b==='m'?'/mo':b==='y'?'/yr':' once';}
  function renderList(){var L=$id('cfList');if(!L)return;
    L.innerHTML=CAT.filter(function(r){return r[1]===curG;}).map(function(r){var it=BY[r[0]],s=ST[r[0]];
      return '<div class="sd-ci'+(s.on?' on':'')+'" data-k="'+it.k+'"><input type="checkbox" class="sd-chk" aria-label="Add '+esc(it.n)+'"'+(s.on?' checked':'')+'>'+
      '<div class="sd-cin"><b>'+esc(it.n)+'</b><small>'+esc(it.s)+' · <a href="'+it.u+'">page →</a></small></div>'+
      '<div class="sd-cip"><span>'+inr(it.p)+bl(it.b)+'</span><div class="stp"><button type="button" data-step="-1" aria-label="Less">−</button><input type="number" min="1" max="5000" value="'+s.q+'" aria-label="Quantity for '+esc(it.n)+'"><button type="button" data-step="1" aria-label="More">+</button></div></div></div>';}).join('');}
  function calc(){var m=0,o=0,rows=[],n=[0,0,0,0];CAT.forEach(function(r){var s=ST[r[0]],it=BY[r[0]];if(!s.on)return;var v=it.p*s.q;if(it.b==='m')m+=v;else o+=v;n[GRP.indexOf(it.g)]++;rows.push([it,s.q,v]);});return {m:m,o:o,rows:rows,n:n};}
  function out(){var r=calc();setT('oM',inr(r.m));setT('oMg',inr(r.m*.18));setT('oMt',inr(r.m*1.18));setT('oO',inr(r.o));setT('oOg',inr(r.o*.18));setT('oOt',inr(r.o*1.18));setT('oY',inr((r.m*12+r.o)*1.18));
    r.n.forEach(function(x,i){setT('cfN'+i,x);});
    var R2=$id('cfRows');if(R2)R2.innerHTML=r.rows.length?r.rows.map(function(x){return '<li><span>'+esc(x[0].n)+' × '+x[1]+'</span><b>'+inr(x[2])+bl(x[0].b)+'</b></li>';}).join(''):'<li class="e">Nothing selected yet — pick a bundle or tick a service.</li>';
    roi();}
  function load(b){CAT.forEach(function(r){ST[r[0]].on=false;ST[r[0]].q=DEFQ[r[0]]||1;});if(PRE[b])Object.keys(PRE[b]).forEach(function(k){ST[k].on=true;ST[k].q=PRE[b][k];});setSeg($id('cfPre'),PRE[b]?b:'none');renderList();out();}
  (function(){var L=$id('cfList');if(!L)return;
    L.addEventListener('change',function(e){var row=e.target.closest('.sd-ci');if(!row)return;var k=row.getAttribute('data-k');if(e.target.classList.contains('sd-chk')){ST[k].on=e.target.checked;row.classList.toggle('on',ST[k].on);}out();});
    L.addEventListener('input',function(e){var row=e.target.closest('.sd-ci');if(!row||e.target.type!=='number')return;var k=row.getAttribute('data-k'),v=Math.round(+e.target.value||1);ST[k].q=clamp(v,1,5000);if(!ST[k].on){ST[k].on=true;row.classList.add('on');var cb=$('.sd-chk',row);if(cb)cb.checked=true;}out();});
    L.addEventListener('click',function(e){var b=e.target.closest('[data-step]');if(!b)return;var row=b.closest('.sd-ci'),inp=$('input[type=number]',row);setTimeout(function(){var k=row.getAttribute('data-k');ST[k].q=clamp(Math.round(+inp.value||1),1,5000);if(!ST[k].on){ST[k].on=true;row.classList.add('on');$('.sd-chk',row).checked=true;}out();},0);});
    $$('#cfTabs button').forEach(function(b){b.addEventListener('click',function(){curG=b.getAttribute('data-g');$$('#cfTabs button').forEach(function(x){x.classList.toggle('on',x===b);});renderList();});});
    var pre=$id('cfPre');$$('button',pre).forEach(function(b){b.addEventListener('click',function(){load(b.getAttribute('data-v'));});});
    $$('[data-preset]').forEach(function(b){b.addEventListener('click',function(){load(b.getAttribute('data-preset'));var t=$id('configure');if(t)t.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});});});
    $id('oAdd').addEventListener('click',function(){var r=calc();if(!r.rows.length){XH.toast&&XH.toast('Pick at least one service first');return;}
      r.rows.forEach(function(x){XH.cart.add({key:'sdt-'+x[0].k,name:x[0].n,sub:(x[0].b==='m'?'Monthly':x[0].b==='y'?'Annual':'One-time')+' · SMB Digital Transformation · indicative',price:x[0].p,qty:x[1]});});});
    load('growth');})();

  /* ---------- maturity assessment ---------- */
  var PIL=[['Cloud','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>'],['Cybersecurity','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>'],['AI','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>'],['Digital marketing','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>']];
  var QS=[['Email runs on our own domain in Microsoft 365 or Google Workspace','Accounting (Tally / ERP) is reachable securely from anywhere, not tied to one PC','Business data is backed up daily and we have tested a restore'],
          ['Every user and admin account uses MFA','Laptops and PCs have EDR and are patched automatically','Someone watches security alerts 24×7 and we know how to report to CERT-In within 6 hours'],
          ['We have a written policy on what data may go into AI tools','At least one repetitive process uses AI with a person approving the output','Staff have had practical AI training'],
          ['Our website works well on phones and captures enquiries','Google Business Profile and WhatsApp Business are set up and answered','Our sending domain has SPF, DKIM and DMARC, and leads are tracked by source']];
  var QW=[['Move mail to Microsoft 365 or Workspace on your domain','Back up every seat and PC daily, in India','Put Tally on a cloud desktop with MFA'],
          ['Turn on MFA for every account','Put email security in front of all mailboxes','Deploy EDR on every laptop and PC'],
          ['Write a one-page AI use policy','Pilot one AI Worker with approval on send','Train 2–3 AI champions'],
          ['Claim your Google Business Profile','Add a WhatsApp button and enquiry form','Publish DMARC at p=none and read the reports']];
  var LVN=['Ad hoc','Basic','Managed','Integrated','Optimised'],BN=['Starter','Growth','Scale'],BK=['starter','growth','scale'],ANS=[];
  var recB='growth';
  function assess(){var sc=[0,0,0,0];for(var p=0;p<4;p++){var s=0;for(var q=0;q<3;q++)s+=ANS[p*3+q];sc[p]=s/3;}
    var ov=(sc[0]+sc[1]+sc[2]+sc[3])/4,lv=Math.min(4,Math.floor(ov+1e-9)),sz=segV($id('asSz'))||'small',base=sz==='micro'?0:sz==='medium'?2:1,rec=base,why;
    if(ov>=3&&base<2){rec=base+1;why='You already have strong basics, so the next tier\'s integrated controls (SOC, DR, AI with approvals) are the logical step for a team your size.';}
    else if(ov<1&&base>0){rec=base-1;why='Most foundation controls are missing. Start with the smaller bundle for quick wins in 90 days, then grow into the '+BN[base]+' bundle.';}
    else why='Matched to your team size, with the services that lift your weakest pillar first.';
    var wk=0;for(var i=1;i<4;i++)if(sc[i]<sc[wk])wk=i;
    return {sc:sc,ov:ov,lv:lv,rec:rec,why:why,wk:wk,sz:sz};}
  function showAs(){var r=assess();recB=BK[r.rec];setT('asLv','L'+r.lv);setT('asLn',LVN[r.lv]);var arc=$id('asArc');if(arc)arc.style.strokeDashoffset=String(314.16*(1-r.ov/4));
    $id('asBars').innerHTML=r.sc.map(function(s,i){return '<div class="sd-ab'+(i===r.wk?' lo':'')+'"><span>'+PIL[i][0]+'</span><u><i style="width:'+Math.round(s/4*100)+'%"></i></u><b>'+Math.round(s/4*100)+'%</b></div>';}).join('');
    setT('asRec',BN[r.rec]+' bundle');setT('asWhy',r.why);setT('asWk',PIL[r.wk][0]+' · '+Math.round(r.sc[r.wk]/4*100)+'%');
    $id('asWl').innerHTML=QW[r.wk].map(function(x){return '<li>'+esc(x)+'</li>';}).join('');
    var h=$id('eqAs');if(h)h.value='Level L'+r.lv+' · '+r.sc.map(function(s,i){return PIL[i][0]+' '+Math.round(s/4*100)+'%';}).join(', ')+' · recommended '+BN[r.rec];
    return r;}
  (function(){var Q=$id('asQ');if(!Q)return;var html='';
    PIL.forEach(function(p,pi){html+='<div class="sd-aqg"><h4>'+p[1]+esc(p[0])+'</h4>';QS[pi].forEach(function(q,qi){var n=pi*3+qi;ANS[n]=0;
      html+='<div class="sd-aq"><p>'+esc(q)+'</p><div class="seg" data-q="'+n+'" role="group" aria-label="'+esc(q)+'"><button type="button" data-v="0" class="on">No</button><button type="button" data-v="1">Started</button><button type="button" data-v="2">Partly</button><button type="button" data-v="3">Mostly</button><button type="button" data-v="4">Yes</button></div></div>';});html+='</div>';});
    Q.innerHTML=html;
    Q.addEventListener('click',function(e){var b=e.target.closest('.seg button');if(!b)return;var sg=b.parentNode,n=+sg.getAttribute('data-q');setSeg(sg,b.getAttribute('data-v'));ANS[n]=+b.getAttribute('data-v');showAs();});
    onSeg($id('asSz'),showAs);
    $id('asLoad').addEventListener('click',function(){load(recB);var t=$id('configure');if(t)t.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});});
    $id('asDl').addEventListener('click',function(){var r=showAs(),L=['XcellHost · SMB digital maturity result','Date: '+new Date().toISOString().slice(0,10),'Team size: '+r.sz,'Overall level: L'+r.lv+' ('+LVN[r.lv]+')',''];
      r.sc.forEach(function(s,i){L.push(PIL[i][0]+': '+Math.round(s/4*100)+'%');});L.push('','Recommended start: '+BN[r.rec]+' bundle','Why: '+r.why,'','Weakest pillar: '+PIL[r.wk][0]);QW[r.wk].forEach(function(x){L.push(' - '+x);});
      L.push('','Answers:');QS.forEach(function(g,pi){g.forEach(function(q,qi){L.push(' ['+['No','Started','Partly','Mostly','Yes'][ANS[pi*3+qi]]+'] '+q);});});L.push('','Indicative — confirm with XcellHost. +91 22 6711 1555 · sales@xcellhost.cloud');
      if(XH.download)XH.download('smb-digital-maturity.txt',L.join('\n'),'text/plain');});
    window.__sdAssess={set:function(a){a.forEach(function(v,i){ANS[i]=v;setSeg($('[data-q="'+i+'"]',Q),String(v));});return showAs();}};
    showAs();})();

  /* ---------- ROI estimator ---------- */
  function num(id,def){var e=$id(id);var v=e?parseFloat(e.value):NaN;return isNaN(v)?def:v;}
  function roi(){if(!$id('rE'))return null;var E=clamp(num('rE',25),1,1000),H=num('rH',6),A=num('rA',25),Cc=clamp(num('rC',400),0,1e6),D=clamp(num('rD',16),0,1e4),Rv=clamp(num('rR',10000),0,1e9),inv=segV($id('rInv'))||'cfg';
    setT('rHv',H+' h');setT('rAv',A+'%');
    var T=inv==='cfg'?calc():totals(PRE[inv]),mc=T.m,oc=T.o;
    var hrs=E*H*(A/100)*52/12,val=hrs*Cc,dt=D*Rv/12,ben=val+dt,net=ben-mc,pb=net>0?oc/net:Infinity;
    setT('rOh',fmt(hrs)+' h');setT('rOv',inr(val));setT('rOd',inr(dt));setT('rOn',(net<0?'−':'')+inr(Math.abs(net)));
    var mx=Math.max(ben,mc,1),bb=$id('rBb'),bc=$id('rBc');if(bb)bb.style.width=(ben/mx*100)+'%';if(bc)bc.style.width=(mc/mx*100)+'%';setT('rBbv',inr(ben));setT('rBcv',inr(mc));
    var x;if(net>0)x='At these inputs, time saved and downtime avoided are worth '+inr(ben)+' a month against '+inr(mc)+' of monthly services — a net '+inr(net)+'. '+(oc>0?'The annual and one-time items ('+inr(oc)+') pay back in about '+(pb<1?'less than a month':(Math.round(pb*10)/10)+' months')+'.':'');
    else x='At these inputs the monthly services ('+inr(mc)+') cost more than the time and downtime they save ('+inr(ben)+'). Try fewer services, a smaller bundle, or check the hourly cost you entered.';
    setT('rOx',x);return {hrs:hrs,val:val,dt:dt,net:net,pb:pb,mc:mc,oc:oc};}
  window.__sdRoi=roi;
  ['rE','rH','rA','rC','rD','rR'].forEach(function(id){var e=$id(id);if(e){e.addEventListener('input',roi);e.addEventListener('change',roi);}});
  $$('#roi .stp button').forEach(function(b){b.addEventListener('click',function(){setTimeout(roi,0);});});
  onSeg($id('rInv'),roi);
  roi();

  /* ---------- enquiry form ---------- */
  if(XH.onForm)XH.onForm('smb-dt-enquiry',function(data){try{var h=$id('eqAs');if(h&&!h.value)showAs();}catch(e){}});
})();
