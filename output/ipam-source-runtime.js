
(function(){
'use strict';
var $=function(s,r){return (r||document).querySelector(s);},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s));};
var $id=function(i){return document.getElementById(i);};
var inr=function(n){return window.XH&&XH.inr?XH.inr(Math.round(n)):'₹'+Math.round(n).toLocaleString('en-IN');};
var clamp=function(v,a,b){return v<a?a:v>b?b:v;};
var esc=function(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});};
var RED=!!(window.XH&&XH.reduce);
var toast=function(m){if(window.XH&&XH.toast)XH.toast(m);};
var num=function(el,d){var v=parseFloat(el&&el.value);return isFinite(v)?v:d;};
var fmt=function(n){return Number(n).toLocaleString('en-IN');};
function cartAdd(o){if(window.XH&&XH.cart)XH.cart.add(o);}

/* single source of truth — ₹ per month excl. GST. Tier prices and add-ons are indicative placeholders (*).
   Managed DNS 199 / 699 / 1,999 are the exact prices on the XcellHost Managed DNS page. */
var T={st:{n:'Starter',p:2999,ips:1024,sub:64,cl:0},bz:{n:'Business',p:8999,ips:8192,sub:512,cl:2},en:{n:'Enterprise',p:24999,ips:65536,sub:Infinity,cl:10}};
var P={pack:999,cloud:999,col:1499,mig:14999};
var DNSN={'199':'Basic','699':'Pro','1999':'Business'};

/* =====================================================================
   HERO background — a faint address map
   ===================================================================== */
(function(){var m=$id('iaMap');if(!m)return;var h='';for(var i=0;i<160;i++){var o=(i*37)%11===0;h+='<i'+(o?' class="o"':'')+' style="animation-delay:-'+((i*0.73)%9).toFixed(2)+'s"></i>';}m.innerHTML=h;
  if(RED)$$('i',m).forEach(function(e){e.style.animation='none';});})();

/* =====================================================================
   HERO — one canvas, one rAF loop, five drawn scenes (RFC 1918 sample data)
   ===================================================================== */
(function hero(){
  var cv=$id('iaCv'),wrap=$id('iaCvw');if(!cv||!wrap)return;
  var c=cv.getContext('2d');if(!c)return;
  var SCN=5500,TR=460;
  var CAP=['Subnet tree · supernet → site → VLAN','Discovery · ping, SNMP, ARP, NDP','DHCP ↔ DNS · one lease, three records','Conflict · two devices, one address','Heatmap · utilisation and fill forecast'];
  var dots=$$('#iaDots button'),rail=$$('#iaRail li'),pz=$id('iaPz'),capT=$id('iaCap'),nT=$id('iaN');
  var W=0,H=0,dpr=1,cur=0,from=0,q=1,el=0,userPause=false,hov=false,vis=true,raf=0,last=0;
  var F='"Sora",system-ui,sans-serif',M='"IBM Plex Mono",ui-monospace,monospace';
  var BL='#0066FF',LB='#7fb0ff',OR='#FF8A00',GR='#16a34a',RD='#c0392b',MUTE='#B6C2DA',LINE='rgba(255,255,255,.14)',SOFT='rgba(255,255,255,.06)';
  function size(){var r=wrap.getBoundingClientRect();W=Math.max(220,r.width);H=Math.max(220,r.height);dpr=Math.min(2,window.devicePixelRatio||1);cv.width=Math.round(W*dpr);cv.height=Math.round(H*dpr);}
  function eo(t){return 1-Math.pow(1-clamp(t,0,1),3);}
  function sg(p,a,b){return clamp((p-a)/(b-a),0,1);}
  function rr(x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function box(x,y,w,h,r,f,s,lw,dash){rr(x,y,w,h,r);if(f){c.fillStyle=f;c.fill();}if(s){c.save();c.lineWidth=lw||1;c.strokeStyle=s;if(dash)c.setLineDash(dash);c.stroke();c.restore();}}
  function tx(t,x,y,f,col,al){c.font=f;c.fillStyle=col;c.textAlign=al||'left';c.textBaseline='alphabetic';c.fillText(t,x,y);}
  function fit(t,maxW,f){c.font=f;if(c.measureText(t).width<=maxW)return t;while(t.length>2&&c.measureText(t+'…').width>maxW)t=t.slice(0,-1);return t+'…';}
  function ln(x1,y1,x2,y2,col,w,dash){c.save();c.strokeStyle=col;c.lineWidth=w||1;if(dash)c.setLineDash(dash);c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();c.restore();}
  function dot(x,y,r,col){c.beginPath();c.arc(x,y,r,0,7);c.fillStyle=col;c.fill();}
  function tick(x,y,s,col){c.save();c.strokeStyle=col;c.lineWidth=2;c.lineCap='round';c.beginPath();c.moveTo(x-s*.5,y);c.lineTo(x-s*.12,y+s*.38);c.lineTo(x+s*.55,y-s*.4);c.stroke();c.restore();}
  function stamp(x,y,t,col,a,al){if(a<=0)return;c.save();c.globalAlpha=a;c.font='700 10px '+M;var w=c.measureText(t).width+16;var bx=al==='right'?x-w:al==='center'?x-w/2:x;box(bx,y-13,w,19,6,col);tx(t,bx+8,y+1,'700 10px '+M,'#fff');c.restore();}
  function foot(t,ok,bad){var y=H-22;box(12,y-12,W-24,26,8,ok?'rgba(22,163,74,.16)':bad?'rgba(192,57,43,.16)':SOFT,ok?'rgba(22,163,74,.55)':bad?'rgba(192,57,43,.6)':LINE);dot(26,y+1,4,ok?GR:bad?RD:OR);tx(fit(t,W-60,'600 11px '+F),38,y+5,'600 11px '+F,'#fff');}
  function nar(){return W<420;}
  function elbow(x1,y1,x2,y2,col,a){if(a<=0)return;c.save();c.globalAlpha=a;c.strokeStyle=col;c.lineWidth=1.3;var my=(y1+y2)/2;c.beginPath();c.moveTo(x1,y1);c.lineTo(x1,my);c.lineTo(x2,my);c.lineTo(x2,y2);c.stroke();c.restore();}

  /* 0 · subnet tree */
  function s0(p){var n=nar(),gx=14,gw=W-28,cols=5,gap=6,cw=(gw-(cols-1)*gap)/cols;
    var ra=sg(p,0,.12),rw=n?170:210,ry=14;
    c.save();c.globalAlpha=ra;box(W/2-rw/2,ry,rw,40,10,'rgba(0,102,255,.2)',BL,1.5);tx('10.20.0.0/16',W/2,ry+18,'700 13px '+M,'#fff','center');tx('supernet · 65,536 addresses',W/2,ry+32,'500 9px '+M,MUTE,'center');c.restore();
    var sy=ry+80,sh=40;
    var cx=function(i){return gx+i*(cw+gap)+cw/2;};
    var SITES=[{l:n?'Mumbai':'Mumbai DC',s:'/18',x:cx(1),w:cw*2.4,a:sg(p,.12,.26)},{l:'Pune',s:'/18',x:cx(3),w:cw,a:sg(p,.18,.32)},{l:'free',s:'/17',x:cx(4),w:cw,a:sg(p,.24,.38),free:1}];
    SITES.forEach(function(s){elbow(W/2,ry+40,s.x,sy,s.free?LINE:'rgba(127,176,255,.6)',s.a);
      if(s.a<=0)return;c.save();c.globalAlpha=s.a;var y=sy+(1-eo(s.a))*8;
      box(s.x-s.w/2,y,s.w,sh,9,s.free?null:'rgba(0,102,255,.12)',s.free?'rgba(255,255,255,.3)':'rgba(0,102,255,.7)',1.2,s.free?[4,3]:null);
      tx(s.l,s.x,y+17,'700 '+(n?10.5:11.5)+'px '+F,s.free?MUTE:'#fff','center');
      tx(s.free?(n?'/17':'10.20.128.0/17'):(s.l==='Pune'?(n?'/18':'10.20.64.0/18'):(n?'10.20.0.0/18':'10.20.0.0/18')),s.x,y+31,'500 '+(n?8.5:9)+'px '+M,s.free?MUTE:LB,'center');c.restore();});
    var ly=sy+sh+46,lh=n?82:88;
    var LV=[{t:'VLAN 10',c:'10.20.0.0/22',k:'users',u:.62,par:0},{t:'VLAN 20',c:'10.20.4.0/24',k:'servers',u:.41,par:0},{t:'VRF mgmt',c:'10.20.8.0/24',k:'out-of-band',u:.18,par:0},{t:'VLAN 10',c:'10.20.64.0/22',k:'users',u:.55,par:1}];
    LV.forEach(function(L,i){var a=sg(p,.36+i*.07,.5+i*.07),x=gx+i*(cw+gap),par=SITES[L.par];elbow(par.x,sy+sh,x+cw/2,ly,'rgba(127,176,255,.5)',a);
      if(a<=0)return;c.save();c.globalAlpha=a;var y=ly+(1-eo(a))*8;
      box(x,y,cw,lh,9,i===2?'rgba(255,138,0,.12)':SOFT,i===2?'rgba(255,138,0,.7)':LINE,1.2);
      var f1='700 '+(n?9.5:11)+'px '+F,f2='600 '+(n?8:9.5)+'px '+M;
      tx(fit(L.t,cw-10,f1),x+cw/2,y+17,f1,'#fff','center');
      tx(fit(n?L.c.replace(/^10\.20\./,'.'):L.c,cw-8,f2),x+cw/2,y+32,f2,LB,'center');
      tx(fit(L.k,cw-8,'500 '+(n?8:9)+'px '+M),x+cw/2,y+46,'500 '+(n?8:9)+'px '+M,MUTE,'center');
      var bw=cw-16,bu=sg(p,.6,.85)*L.u;box(x+8,y+lh-22,bw,6,3,'rgba(255,255,255,.1)');if(bu>0)box(x+8,y+lh-22,bw*bu,6,3,L.u>.6?OR:BL);
      tx(Math.round(bu*100)+'%',x+cw/2,y+lh-6,'600 '+(n?8.5:9.5)+'px '+M,'#fff','center');c.restore();});
    var ok=p>.86;
    foot(ok?(n?'4 subnets placed · /17 still free':'4 subnets placed, no overlaps · 10.20.128.0/17 still free'):(n?'Splitting the supernet…':'Splitting the supernet into sites, VLANs and a VRF…'),ok);}

  /* 1 · discovery sweep */
  var FOUND={};(function(){var L=[[1,'p'],[2,'s'],[3,'a'],[5,'p'],[6,'p'],[9,'s'],[10,'a'],[12,'p'],[14,'n'],[17,'p'],[18,'a'],[21,'s'],[22,'p'],[25,'a'],[28,'n'],[30,'p'],[33,'p'],[34,'s'],[37,'u'],[40,'a'],[41,'p'],[44,'p'],[47,'n'],[50,'a'],[53,'p'],[57,'s'],[60,'p'],[62,'a']];L.forEach(function(e){FOUND[e[0]]=e[1];});})();
  var MC={p:BL,s:LB,a:OR,n:'#ffffff',u:RD},MN={p:'ping',s:'SNMP',a:'ARP',n:'NDP'};
  function s1(p){var n=nar(),gx=14,gw=W-28,g=4,cols=8,cw=(gw-(cols-1)*g)/cols,top=34,avail=H-top-92,ch=Math.min(26,(avail-7*g)/8);
    tx('10.20.4.0/26 · sweep',gx,22,'600 '+(n?10:11)+'px '+M,LB);if(!n)tx('collector · mumbai-c1',W-14,22,'500 9.5px '+M,MUTE,'right');
    var sw=sg(p,.04,.7),cnt={p:0,s:0,a:0,n:0,u:0};
    for(var i=0;i<64;i++){var r=Math.floor(i/cols),col=i%cols,x=gx+col*(cw+g),y=top+r*(ch+g),pos=(i+.5)/64,seen=sw>=pos,f=FOUND[i];
      var fl=f&&seen?MC[f]:null;
      if(fl){cnt[f]++;box(x,y,cw,ch,4,f==='u'?'rgba(192,57,43,.25)':f==='n'?'rgba(255,255,255,.2)':f==='a'?'rgba(255,138,0,.3)':f==='s'?'rgba(127,176,255,.28)':'rgba(0,102,255,.4)',fl,1.2);}
      else box(x,y,cw,ch,4,seen?'rgba(255,255,255,.03)':SOFT,seen?'rgba(255,255,255,.08)':null);
      if(cw>34&&ch>=18)tx('.'+i,x+cw/2,y+ch/2+3.5,'600 9px '+M,fl?'#fff':'rgba(182,194,218,.55)','center');}
    if(sw>0&&sw<1){var cell=Math.floor(sw*64),r2=Math.floor(cell/cols),c2=cell%cols;box(gx+c2*(cw+g)-1,top+r2*(ch+g)-1,cw+2,ch+2,5,null,'#fff',2);}
    var ly=top+8*(ch+g)+10,keys=['p','s','a','n'],lw=gw/4;
    keys.forEach(function(k,i){var x=gx+i*lw;box(x,ly,10,10,2,MC[k]);tx(MN[k]+' '+cnt[k],x+15,ly+9,'600 '+(n?9.5:10.5)+'px '+M,'#fff');});
    var u=cnt.u>0&&p>.72;if(u)stamp(W/2,ly+34,n?'.37 · NOT IN IPAM':'10.20.4.37 · UNKNOWN DEVICE · NOT IN IPAM',RD,sg(p,.72,.78),'center');
    var tot=cnt.p+cnt.s+cnt.a+cnt.n+cnt.u;
    foot(p>.72?(n?tot+' live · 1 unknown flagged':tot+' live hosts found · 1 unknown device flagged for review'):(n?'Sweeping '+Math.round(sw*64)+'/64…':'Sweeping the subnet — '+Math.round(sw*64)+' of 64 addresses checked…'),false,p>.72);}

  /* 2 · DHCP ↔ IPAM ↔ DNS */
  function s2(p){var n=nar(),x=14,w=W-28;
    var L1=n?'DHCPACK 10.20.4.42 · lap-fin-07':'DHCPACK 10.20.4.42 → 3c:52:82:1a:9f:04 · lap-fin-07 · 8h';
    tx('dhcp · lease',x,20,'600 10px '+M,LB);box(x,26,w,30,8,SOFT,LINE);
    var t1=sg(p,.02,.22);tx(L1.slice(0,Math.floor(L1.length*t1)),x+10,45,'600 '+(n?9.5:11)+'px '+M,'#fff');
    var a1=sg(p,.22,.3);if(a1>0){ln(W/2,58,W/2,58+18*a1,OR,1.6);if(a1>=1){c.beginPath();c.moveTo(W/2-5,72);c.lineTo(W/2+5,72);c.lineTo(W/2,78);c.closePath();c.fillStyle=OR;c.fill();}}
    var iy=82,ih=n?84:92,ia=sg(p,.28,.36);
    if(ia>0){c.save();c.globalAlpha=ia;box(x,iy,w,ih,10,'rgba(0,102,255,.14)',BL,1.4);tx('ipam · record',x+12,iy+17,'700 10px '+M,LB);
      var FD=[['address','10.20.4.42'],['mac',n?'3c:52:…:9f:04':'3c:52:82:1a:9f:04'],['host','lap-fin-07'],['owner','Finance · VLAN 20'],['state','leased · 8h']];
      var cols=n?1:2,cw2=(w-24)/cols;
      FD.forEach(function(f,i){if(n&&i>3)return;var a=sg(p,.36+i*.05,.42+i*.05),cx2=x+12+(i%cols)*cw2,cy=iy+34+Math.floor(i/cols)*(n?13:18);
        if(a<=0)return;c.save();c.globalAlpha=a;tx(f[0],cx2,cy,'500 '+(n?8.5:9.5)+'px '+M,MUTE);tx(f[1],cx2+(n?54:62),cy,'600 '+(n?9.5:10.5)+'px '+M,'#fff');c.restore();});c.restore();}
    var dy=iy+ih+22,a2=sg(p,.6,.68);
    if(a2>0){ln(x+w*.25,iy+ih,x+w*.25,dy,OR,1.4,[3,3]);ln(x+w*.75,iy+ih,x+w*.75,dy,OR,1.4,[3,3]);}
    var bw=(w-10)/2,bh=n?52:56;
    [['A','lap-fin-07.corp.example','→ 10.20.4.42'],['PTR','42.4.20.10.in-addr.arpa','→ lap-fin-07.corp.example']].forEach(function(r,i){
      var a=sg(p,.66+i*.06,.74+i*.06),bx=x+i*(bw+10);if(a<=0){box(bx,dy,bw,bh,9,SOFT,LINE,1,[4,3]);return;}
      c.save();c.globalAlpha=Math.max(.3,a);box(bx,dy,bw,bh,9,a>=1?'rgba(22,163,74,.14)':SOFT,a>=1?'rgba(22,163,74,.6)':LINE,1.3);
      tx('dns · '+r[0],bx+10,dy+16,'700 10px '+M,LB);var f2='600 '+(n?8.5:10)+'px '+M;tx(fit(r[1],bw-20,f2),bx+10,dy+31,f2,'#fff');tx(fit(r[2],bw-20,f2),bx+10,dy+45,f2,'#fff');if(a>=1)tick(bx+bw-16,dy+13,9,GR);c.restore();});
    var ok=p>.84;if(ok)stamp(W/2,dy+bh+22,n?'IN SYNC · NO TICKET':'LEASE, RECORD AND DNS IN SYNC · NO TICKET RAISED',GR,sg(p,.84,.9),'center');
    foot(ok?(n?'One lease, three records':'One lease updated IPAM and both DNS records'):(n?'Lease issued…':'A laptop gets a DHCP lease…'),ok);}

  /* 3 · conflict alert → resolved */
  function s3(p){var n=nar(),x=14,w=W-28,dw=n?104:140,dh=58,dy=Math.max(20,Math.round((H-60-(n?186:190))/2)),lx=x,rx=W-x-dw;
    function dev(X,name,sub,st){box(X,dy,dw,dh,10,st==='bad'?'rgba(192,57,43,.14)':st==='ok'?'rgba(22,163,74,.14)':'rgba(0,102,255,.12)',st==='bad'?RD:st==='ok'?GR:BL,1.4);
      tx(name,X+dw/2,dy+24,'700 '+(n?10.5:11.5)+'px '+F,'#fff','center');tx(fit(sub,dw-10,'500 '+(n?8.5:9.5)+'px '+M),X+dw/2,dy+40,'500 '+(n?8.5:9.5)+'px '+M,MUTE,'center');}
    var cl=sg(p,.2,.3),res=sg(p,.62,.74),done=res>=1;
    dev(lx,'printer-3F',n?'static':'static · aa:10:4e…','');
    dev(rx,'cam-lobby',done?(n?'→ .4.61':'moved → 10.20.4.61'):(n?'DHCP':'DHCP · 5c:f2:07…'),done?'ok':cl>0?'bad':'');
    var py=dy+dh+40,pw=n?118:140;
    var flash=cl>0&&!done?(0.55+0.45*Math.abs(Math.sin(el/220))):1;
    c.save();c.globalAlpha=flash;box(W/2-pw/2,py-14,pw,28,14,done?GR:cl>0?RD:OR);tx('10.20.4.50',W/2,py+5,'700 12px '+M,'#fff','center');c.restore();
    ln(lx+dw/2,dy+dh,W/2-pw/4,py-14,'rgba(127,176,255,.6)',1.4);
    if(cl>0)ln(rx+dw/2,dy+dh,W/2+pw/4,py-14,done?'rgba(255,255,255,.15)':RD,1.4,done?[3,4]:null);
    var ay=py+30,ah=n?58:62,aa=sg(p,.3,.4);
    if(aa>0){c.save();c.globalAlpha=aa;box(x,ay,w,ah,10,done?'rgba(22,163,74,.12)':'rgba(192,57,43,.14)',done?GR:RD,1.4);
      tx(done?'RESOLVED':'CONFLICT',x+12,ay+18,'700 10.5px '+M,done?GR:'#fff');
      var l1=done?(n?'.4.50 reserved for printer-3F':'10.20.4.50 reserved for printer-3F · DHCP exclusion added'):(n?'2 MACs on ARP for .4.50':'2 MAC addresses answer ARP for 10.20.4.50'),
          l2=done?(n?'cam-lobby re-leased .4.61':'cam-lobby re-leased 10.20.4.61 · owner notified'):(n?'alert → NOC + network team':'alert sent to NOC and the network team · 09:42 (sample)');
      tx(fit(l1,w-24,'600 '+(n?9.5:11)+'px '+F),x+12,ay+35,'600 '+(n?9.5:11)+'px '+F,'#fff');tx(fit(l2,w-24,'500 '+(n?8.5:9.5)+'px '+M),x+12,ay+50,'500 '+(n?8.5:9.5)+'px '+M,MUTE);c.restore();}
    if(res>0&&!done){var tw=w*res;box(x,ay+ah+8,w,4,2,'rgba(255,255,255,.1)');box(x,ay+ah+8,tw,4,2,OR);}
    foot(done?(n?'Fixed before the helpdesk call':'Fixed before anyone raised a ticket'):cl>0?(n?'Duplicate address detected':'Duplicate address — two devices claim 10.20.4.50'):(n?'Watching ARP and DHCP…':'IPAM compares ARP tables with DHCP and static records…'),done,cl>0&&!done);}

  /* 4 · utilisation heatmap + forecast */
  var UT=[.22,.41,.58,.35,.12,.66,.48,.92,.31,.74,.18,.55,.83,.27,.61,.44,.09,.7,.38,.52,.87,.25,.63,.46];
  function s4(p){var n=nar(),x=14,w=W-28,cols=n?4:6,rows=UT.length/cols,g=5,cw=(w-(cols-1)*g)/cols,top=30,chartH=n?62:70,ch=Math.min(32,(H-top-chartH-70-(rows-1)*g)/rows);
    tx('24 subnets · 10.20.0.0/19',x,20,'600 '+(n?10:11)+'px '+M,LB);if(!n)tx('alert at 85%',W-14,20,'500 9.5px '+M,MUTE,'right');
    var gr=eo(sg(p,.02,.4));
    UT.forEach(function(u,i){var r=Math.floor(i/cols),cc=i%cols,X=x+cc*(cw+g),Y=top+r*(ch+g),v=u*gr;
      var col=v>=.85?OR:BL,al=v>=.85?.35+.6*v:.08+.75*v;
      box(X,Y,cw,ch,5,col==='#FF8A00'?'rgba(255,138,0,'+al.toFixed(2)+')':'rgba(0,102,255,'+al.toFixed(2)+')',i===7&&p>.45?'#fff':null,1.6);
      if(cw>30)tx((cw>54?'.'+i+'.0 ':'')+Math.round(v*100)+'%',X+cw/2,Y+ch/2+3.5,'600 '+(n?8.5:9.5)+'px '+M,'#fff','center');});
    var cy=top+rows*(ch+g)+14,cx0=x,cw2=w,fa=sg(p,.45,.55);chartH=Math.max(chartH,H-48-cy);var yv=function(v){return (v-.5)/.5;};
    if(fa>0){c.save();c.globalAlpha=fa;box(cx0,cy,cw2,chartH,9,SOFT,LINE);
      var px=cx0+10,pw=cw2-20,py=cy+12,ph=chartH-24;
      ln(px,py,px+pw,py,'rgba(192,57,43,.5)',1,[3,3]);tx('100%',px+pw,py-3,'600 8.5px '+M,RD,'right');
      var hist=[.61,.64,.66,.7,.73,.76,.8,.84,.88,.92],k=hist.length,hx=pw*.62;tx('50%',px+pw,py+ph+9,'600 8.5px '+M,MUTE,'right');
      c.save();c.strokeStyle=OR;c.lineWidth=2;c.beginPath();hist.forEach(function(v,j){var X=px+hx*j/(k-1),Y=py+ph*(1-yv(v));if(j)c.lineTo(X,Y);else c.moveTo(X,Y);});c.stroke();c.restore();
      var fp=sg(p,.55,.8),ex=px+hx+(pw-hx)*fp,ey=py+ph*(1-yv(.92+.08*fp));ln(px+hx,py+ph*(1-yv(.92)),ex,ey,'rgba(255,138,0,.8)',1.6,[4,3]);
      dot(px+hx,py+ph*(1-yv(.92)),3.5,OR);
      tx(n?'10.20.7.0/24':'10.20.7.0/24 · last 10 weeks',px+pw-30,cy+chartH-9,'500 8.5px '+M,MUTE,'right');c.restore();}
    var ok=p>.82;if(ok)stamp(x+10+(w-20)*(n?.3:.26),cy+(n?22:26),n?'FULL IN ~6 WEEKS':'FORECAST · FULL IN ~6 WEEKS',OR,sg(p,.82,.88),'center');
    foot(ok?(n?'Plan the next /24 now':'Alert raised at 92% — plan the next /24 before it fills'):(n?'Reading utilisation…':'Utilisation from DHCP leases and discovery…'),false,false);}

  var SC=[s0,s1,s2,s3,s4];
  function draw(){c.setTransform(dpr,0,0,dpr,0,0);c.clearRect(0,0,W,H);
    var ease=eo(q),pp=RED?1:clamp(el/SCN,0,1);
    if(q<1&&from!==cur){c.save();c.globalAlpha=1-ease;c.translate(-14*ease,0);SC[from](1);c.restore();
      c.save();c.globalAlpha=ease;c.translate(14*(1-ease),0);SC[cur](pp);c.restore();}
    else SC[cur](pp);}
  function prog(){rail.forEach(function(li,i){var u=$('u',li);if(u)u.style.setProperty('--p',i===cur?(RED?1:clamp(el/SCN,0,1)):0);});}
  function setUI(){dots.forEach(function(d,i){var on=i===cur;d.classList.toggle('on',on);d.setAttribute('aria-selected',on?'true':'false');});
    rail.forEach(function(li,i){li.classList.toggle('on',i===cur);});prog();if(capT)capT.textContent=CAP[cur];if(nT)nT.textContent='0'+(cur+1)+' / 05';}
  function go(k){k=((k%5)+5)%5;if(k!==cur){from=cur;cur=k;q=RED?1:0;}el=RED?SCN:0;setUI();if(RED)draw();else kick();}
  function running(){return !userPause&&!hov&&vis;}
  function frame(now){raf=0;var dt=last?Math.min(64,now-last):16;last=now;
    if(q<1)q=Math.min(1,q+dt/TR);
    if(running()){el+=dt;if(el>=SCN)go(cur+1);}
    draw();prog();
    if(vis&&!RED)raf=requestAnimationFrame(frame);else last=0;}
  function kick(){if(!raf&&vis&&!RED){last=0;raf=requestAnimationFrame(frame);}}
  dots.forEach(function(b){b.addEventListener('click',function(){go(+b.getAttribute('data-k'));});});
  rail.forEach(function(li){li.addEventListener('click',function(){go(+li.getAttribute('data-k'));});});
  if(pz)pz.addEventListener('click',function(){userPause=!userPause;pz.classList.toggle('paused',userPause);pz.setAttribute('aria-label',userPause?'Play scenes':'Pause scenes');kick();});
  var st=$id('iaStage');
  if(st&&window.matchMedia&&window.matchMedia('(hover:hover)').matches){st.addEventListener('mouseenter',function(){hov=true;});st.addEventListener('mouseleave',function(){hov=false;kick();});}
  var sx=null,sy0=null;
  wrap.addEventListener('pointerdown',function(e){sx=e.clientX;sy0=e.clientY;});
  wrap.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy0;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))go(cur+(dx<0?1:-1));});
  wrap.addEventListener('pointercancel',function(){sx=null;});
  size();
  if(window.ResizeObserver)new ResizeObserver(function(){size();draw();}).observe(wrap);else window.addEventListener('resize',function(){size();draw();});
  if(window.XH&&XH.whenVisible)XH.whenVisible(wrap,function(v){vis=v;if(v)kick();else if(raf){cancelAnimationFrame(raf);raf=0;last=0;}});
  if(RED){el=SCN;q=1;setUI();draw();if(pz)pz.hidden=true;}else{setUI();draw();kick();}
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(function(){draw();});
  window.__aoHero=window.__iaHero={go:function(k){go(k);},pause:function(b){userPause=b!==false;if(pz)pz.classList.toggle('paused',userPause);kick();},seek:function(t){el=clamp(+t||0,0,SCN);q=1;draw();setUI();}};
})();

/* =====================================================================
   in-page nav highlight
   ===================================================================== */
(function(){var links=$$('.ia-nt a');if(!links.length||!('IntersectionObserver' in window))return;
  var map={};links.forEach(function(a){map[a.getAttribute('href').slice(1)]=a;});
  var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){links.forEach(function(a){a.classList.remove('on');});var a=map[e.target.id];if(a)a.classList.add('on');}});},{rootMargin:'-45% 0px -50% 0px'});
  Object.keys(map).forEach(function(id){var s=$id(id);if(s)io.observe(s);});})();

/* =====================================================================
   02 · capabilities
   ===================================================================== */
(function(){var list=$id('capList'),out=$id('capOut');if(!list||!out)return;
  var C=[
   {h:'Subnet, VLAN and VRF hierarchy',p:'Model the network the way it is built: supernets split into sites, sites into VLANs, each inside a VRF. Overlapping private ranges in different VRFs stay separate.',l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>','Nested blocks with owner, site, purpose and tags'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>','VLAN IDs and VRFs as first-class objects'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>','Find the next free /24 inside any block in one click']],ex:'10.20.0.0/16        supernet · India\n └ 10.20.0.0/18     site · Mumbai DC\n    ├ 10.20.0.0/22  <b>VLAN 10</b> · users\n    └ 10.20.4.0/24  <b>VLAN 20</b> · servers'},
   {h:'Automated discovery',p:'Collectors sweep each subnet on a schedule and read switch and router tables, so the record shows what is really on the wire.',l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>','ICMP ping sweeps for live hosts'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>','SNMP reads of ARP, MAC and interface tables'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>','IPv6 neighbours from NDP caches'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>','Unknown devices and stale records flagged for review']],ex:'sweep 10.20.4.0/26   ping 14 · <b>SNMP 6</b> · ARP 7 · NDP 3\nnew   10.20.4.37  5c:f2:07:..  <b>no record — review</b>'},
   {h:'IPv4 + IPv6 planning',p:'Plan both families side by side. IPv4 is sized by host count; IPv6 LANs are always /64, so you plan prefixes per site rather than counting hosts.',l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>','VLSM sizing for IPv4 — try the planner below'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>','IPv6 /48 per site, /56 per building, /64 per VLAN'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>','Dual-stack view: each VLAN shows its IPv4 subnet and its /64']],ex:'VLAN 20 · servers\n  IPv4  10.20.4.0/24      254 usable\n  IPv6  2001:db8:4f00:<b>14</b>::/64'},
   {h:'DHCP lease and DNS record sync',p:'Leases, reservations and DNS records come from the same address record, so they cannot drift apart.',l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>','DHCP scopes, reservations and exclusions managed from IPAM'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>','A, AAAA and PTR records created on assignment and removed on release'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>','Works with <a href="managed-dns.html">XcellHost Managed DNS</a> zones']],ex:'lease  10.20.4.42 → lap-fin-07  8h\n<b>A</b>      lap-fin-07.corp.example  10.20.4.42\n<b>PTR</b>    42.4.20.10.in-addr.arpa  lap-fin-07'},
   {h:'Conflict detection',p:'IPAM compares ARP tables, DHCP leases and static assignments and alerts as soon as two devices claim one address.',l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>','Duplicate IPs, duplicate MACs and rogue DHCP servers'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>','Blocks a new assignment that is already live'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v6a6 6 0 006 6h6M15 12l3 3-3 3M6 21v-6"/></svg>','Overlap check on every new subnet, across VRFs and clouds']],ex:'<b>CONFLICT</b>  10.20.4.50\n  printer-3F  static  aa:10:4e:..\n  cam-lobby   DHCP    5c:f2:07:..'},
   {h:'Utilisation alerts and capacity forecasting',p:'Each subnet and DHCP scope shows used, reserved and free addresses, with a fill-date forecast from its recent growth.',l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>','Alerts at the thresholds you set — for example 80% and 90%'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>','Forecast date when a scope or subnet will run out'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>','Monthly utilisation report by site and owner']],ex:'10.20.7.0/24   used 92%   <b>full in ~6 weeks</b>\nscope users-3F  used 81%  alert sent'},
   {h:'Multi-cloud IPAM',p:'Read VPC and VNet CIDRs from XcellHost and public cloud accounts into the same tree, and check every new range for overlaps before you peer or connect it.',l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>','XcellHost <a href="virtual-networks.html">Virtual Networks</a>, AWS*, Azure* and GCP* address plans in one view'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3v6a6 6 0 006 6h6M15 12l3 3-3 3M6 21v-6"/></svg>','Overlap check before VPC peering, VPN or <a href="directconnect.html">DirectConnect</a>'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>','Per-cloud reserved addresses applied when sizing subnets']],ex:'XcellHost vpc-prod   10.10.0.0/16\nAWS* vpc-app         10.0.64.0/18  <b>overlaps Mumbai DC 10.0.0.0/16</b>'},
   {h:'RBAC and audit logs',p:'Give each team only the ranges it should change, and keep a record of every change.',l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>','Roles by block, site or VRF — view, assign, admin'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/></svg>','Single sign-on with your identity provider'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>','Audit log with user, time, before and after values, exportable']],ex:'09:41  r.mehta  assign  10.20.4.61 → cam-lobby\n09:42  <b>system</b>   exclude 10.20.4.50 from scope users-3F'},
   {h:'API, IaC, CMDB and ITSM integration',p:'Let pipelines request addresses instead of people. Push assignments to your CMDB and raise tickets from alerts.',l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>','REST API and webhooks: next-free IP, reserve, release'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7M18 10.5c0 4-6 3-10 6"/></svg>','Infrastructure-as-code: request subnets from Terraform* modules'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg>','CMDB and ITSM sync for asset records and change tickets']],ex:'POST /api/blocks/10.20.4.0%2F24/next\n→ { "ip": "10.20.4.62", "state": "<b>reserved</b>" }'},
   {h:'RPKI, ROA and registry records',p:'Keep public space in the same tree as private space, with its registry allocation and RPKI status beside it.',l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>','IRINN and APNIC allocation records stored with each public block'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>','ROA origin and max-length recorded per prefix'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>','Public addresses and BYOIP from <a href="public-ip.html">XcellHost Public IP</a> — IPv4 at ₹299 a month']],ex:'198.51.100.0/24   IRINN allocation\n  ROA  origin AS64500  max /24  <b>valid</b>'}
  ];
  var btns=$$('button',list);
  function show(i){btns.forEach(function(b,j){var on=j===i;b.classList.toggle('on',on);b.setAttribute('aria-selected',on?'true':'false');});
    var d=C[i];out.innerHTML='<h3>'+d.h+'</h3><p>'+d.p+'</p><ul class="ilist">'+d.l.map(function(x){return '<li><i>'+x[0]+'</i><span>'+x[1]+'</span></li>';}).join('')+'</ul><div class="ia-ex">'+d.ex+'</div>';}
  btns.forEach(function(b,i){b.addEventListener('click',function(){show(i);});});show(0);})();

/* =====================================================================
   IP helpers — IPv4 as Number, IPv6 / generic as BigInt
   ===================================================================== */
function p4(s){var m=/^\s*(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})\s*$/.exec(s);if(!m)return null;var v=0;for(var i=1;i<5;i++){var o=+m[i];if(o>255||(m[i].length>1&&m[i][0]==='0'))return null;v=v*256+o;}return v;}
function s4(v){return [Math.floor(v/16777216)%256,Math.floor(v/65536)%256,Math.floor(v/256)%256,v%256].join('.');}
var HAS_BI=typeof BigInt==='function';
function p6(s){if(!HAS_BI)return null;s=String(s).trim().toLowerCase();if(!/^[0-9a-f:.]+$/.test(s)||s.indexOf(':')<0)return null;
  var dc=s.split('::');if(dc.length>2)return null;
  function grp(x){if(!x)return [];var g=x.split(':'),o=[];for(var i=0;i<g.length;i++){if(g[i].indexOf('.')>=0){var v=p4(g[i]);if(v===null||i!==g.length-1)return null;o.push(Math.floor(v/65536).toString(16),(v%65536).toString(16));}else{if(!/^[0-9a-f]{1,4}$/.test(g[i]))return null;o.push(g[i]);}}return o;}
  var L=grp(dc[0]),R=dc.length>1?grp(dc[1]):[];if(!L||!R)return null;
  var miss=8-L.length-R.length;if(dc.length>1){if(miss<1)return null;}else if(miss!==0)return null;
  var all=L.concat(new Array(dc.length>1?miss:0).fill('0'),R),v=BigInt(0);
  for(var k=0;k<8;k++)v=(v<<BigInt(16))|BigInt(parseInt(all[k],16));return v;}
function h6(v){var g=[];for(var i=7;i>=0;i--)g.push(Number((v>>BigInt(i*16))&BigInt(65535)).toString(16));
  var bs=-1,bl=0,cs=-1,cl=0;for(var j=0;j<8;j++){if(g[j]==='0'){if(cs<0)cs=j;cl++;if(cl>bl){bl=cl;bs=cs;}}else{cs=-1;cl=0;}}
  if(bl<2)return g.join(':');return (g.slice(0,bs).join(':')+'::'+g.slice(bs+bl).join(':'));}
/* parse "addr/len" → {fam,bits,n,start,end (BigInt),host:bool,text} */
function cidr(s){if(!HAS_BI)return null;var m=/^\s*([0-9a-fA-F:.]+)\s*(?:\/\s*(\d{1,3}))?\s*$/.exec(s||'');if(!m)return null;
  var a=m[1],v,fam,bits;var v4=p4(a);
  if(v4!==null){v=BigInt(v4);fam=4;bits=32;}else{v=p6(a);if(v===null)return null;fam=6;bits=128;}
  var n=m[2]===undefined?bits:+m[2];if(n>bits)return null;
  var B=BigInt(bits),N=BigInt(n),one=BigInt(1),size=one<<(B-N),start=(v>>(B-N))<<(B-N);
  return {fam:fam,bits:bits,n:n,start:start,end:start+size-one,size:size,host:start!==v,text:(fam===4?s4(Number(start)):h6(start))+'/'+n};}
function ctext(fam,start,n){return (fam===4?s4(Number(start)):h6(start))+'/'+n;}
window.__iaMath={p4:p4,s4:s4,p6:p6,h6:h6,cidr:cidr};

/* =====================================================================
   03 · VLSM subnet planner
   ===================================================================== */
var RES={classic:{r:2,min:30,lo:1,hi:1,lab:'on-prem (network + broadcast)'},aws:{r:5,min:28,lo:4,hi:1,lab:'AWS* (first 4 + last 1)'},azure:{r:5,min:29,lo:4,hi:1,lab:'Azure* (first 4 + last 1)'},gcp:{r:4,min:29,lo:2,hi:2,lab:'GCP* (first 2 + last 2)'}};
function needPrefix(h,r,min){var t=h+r,p=32;while(p>0&&Math.pow(2,32-p)<t)p--;return Math.min(p,min);}
function toBlocks(a,b){var out=[];while(a<=b){var p=32;while(p>0){var sz=Math.pow(2,33-p);if(a%sz!==0||a+sz-1>b)break;p--;}out.push([a,p]);a+=Math.pow(2,32-p);}return out;}
function vlsm(sup,reqs,mode){var R=RES[mode]||RES.classic,start=Number(sup.start),end=Number(sup.end);
  var L=reqs.map(function(q,i){var p=needPrefix(q.h,R.r,R.min);return {i:i,name:q.name,h:q.h,p:p,size:Math.pow(2,32-p)};});
  var order=L.slice().sort(function(a,b){return b.size-a.size||a.i-b.i;}),cur=start,placed=[],fail=[];
  order.forEach(function(s){if(s.p<sup.n||cur+s.size-1>end){fail.push(s);return;}s.net=cur;s.bc=cur+s.size-1;s.usable=s.size-R.r;s.first=cur+R.lo;s.last=s.bc-R.hi;cur+=s.size;placed.push(s);});
  var free=cur<=end?toBlocks(cur,end):[];
  var alloc=placed.reduce(function(t,s){return t+s.size;},0),need=placed.reduce(function(t,s){return t+s.h;},0);
  return {placed:placed,fail:fail,free:free,alloc:alloc,need:need,total:end-start+1,R:R,freeN:end-start+1-alloc};}
window.__iaVlsm=function(supS,reqs,mode){var s=cidr(supS);if(!s||s.fam!==4)return null;return vlsm(s,reqs,mode);};
(function(){var sup=$id('plSup'),v6=$id('plV6'),seg=$id('plRes'),box=$id('plReq');if(!sup||!box)return;
  var sum=$id('plSum'),bar=$id('plBar'),tbl=$id('plTbl'),err=$id('plErr');
  var EX=[['Users · Mumbai',300],['Servers',120],['Wi-Fi guests',200],['CCTV',60],['VoIP phones',90],['Management',20],['WAN links',2]];
  function row(nm,h){var d=document.createElement('div');d.className='ia-rq';d.innerHTML='<input class="ia-in" aria-label="Subnet name" maxlength="40"><input class="ia-in" type="number" min="1" max="16777214" aria-label="Hosts needed"><button type="button" aria-label="Remove subnet"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg></button>';
    var ins=$$('input',d);ins[0].value=nm;ins[1].value=h;$('button',d).addEventListener('click',function(){if($$('.ia-rq',box).length<=1){toast('Keep at least one subnet');return;}d.remove();run();});
    ins.forEach(function(i){i.addEventListener('input',deb);});return d;}
  function load(L){box.innerHTML='<div class="ia-rqh"><span>Subnet</span><span>Hosts needed</span><span></span></div>';L.forEach(function(e){box.appendChild(row(e[0],e[1]));});}
  var tmr=0;function deb(){clearTimeout(tmr);tmr=setTimeout(run,250);}
  function run(){err.textContent='';sup.classList.remove('bad');v6.classList.remove('bad');
    var s=cidr(sup.value);if(!s||s.fam!==4||s.n<8){sup.classList.add('bad');err.textContent='Enter an IPv4 supernet between /8 and /30, e.g. 10.20.0.0/21';return;}
    if(s.n>30){sup.classList.add('bad');err.textContent='The supernet must be /30 or larger';return;}
    var reqs=[],bad=false;$$('.ia-rq',box).forEach(function(d,i){var ins=$$('input',d),h=Math.round(num(ins[1],0));ins[1].classList.toggle('bad',!(h>=1));if(!(h>=1))bad=true;reqs.push({name:(ins[0].value||'Subnet '+(i+1)).trim(),h:Math.max(1,h)});});
    if(bad)err.textContent='Each subnet needs at least 1 host';
    var mode=seg.dataset.value||'classic',r=vlsm(s,reqs,mode);
    var six=null,v6s=(v6.value||'').trim();
    if(v6s){var c6=cidr(v6s);if(!c6||c6.fam!==6||c6.n>64){v6.classList.add('bad');err.textContent=(err.textContent?err.textContent+' · ':'')+'IPv6 prefix must be /64 or shorter, e.g. 2001:db8:4f00::/56';}else six=c6;}
    var cnt64=six?(BigInt(1)<<BigInt(64-six.n)):null;
    var eff=r.alloc?r.need/r.alloc:0;
    sum.innerHTML='<div><small>Supernet</small><b>'+esc(s.text)+'</b><span>'+fmt(r.total)+' addresses'+(s.host?' · host bits cleared':'')+'</span></div>'+
      '<div class="'+(r.fail.length?'bad':'ok')+'"><small>Placed</small><b>'+r.placed.length+' of '+reqs.length+'</b><span>'+(r.fail.length?r.fail.length+' do not fit':'all subnets fit')+'</span></div>'+
      '<div><small>Allocated</small><b>'+fmt(r.alloc)+'</b><span>'+(r.total?Math.round(r.alloc/r.total*1000)/10:0)+'% of supernet · '+fmt(r.freeN)+' free</span></div>'+
      '<div><small>Host fit</small><b>'+Math.round(eff*1000)/10+'%</b><span>'+fmt(r.need)+' hosts in '+fmt(r.alloc)+' addresses</span></div>'+
      (six?'<div class="w"><small>IPv6 · '+esc(six.text)+'</small><b>'+(cnt64>BigInt(1e15)?'2^'+(64-six.n):Number(cnt64).toLocaleString('en-IN'))+' × /64</b><span>'+reqs.length+' used, one per subnet'+(BigInt(reqs.length)>cnt64?' — not enough /64s, use a shorter prefix':'')+' · each /64 holds 2^64 addresses</span></div>':'');
    var segs=r.placed.map(function(p){var pr=function(x){return (x/p.size*100).toFixed(3)+'%';};return '<div style="flex:0 0 '+(p.size/r.total*100).toFixed(4)+'%" title="'+esc(p.name+' · '+s4(p.net)+'/'+p.p)+'"><i class="r" style="width:'+pr(r.R.r)+'"></i><i class="u" style="width:'+pr(p.h)+'"></i><i class="s" style="flex:1"></i></div>';}).join('');
    if(r.freeN>0)segs+='<div class="fr" style="flex:1 1 '+(r.freeN/r.total*100).toFixed(4)+'%" title="free"></div>';
    bar.innerHTML=segs;
    var rows=r.placed.slice().sort(function(a,b){return a.net-b.net;});
    var idx={};rows.forEach(function(p,j){idx[p.i]=j;});
    var h='<div class="tbl-w"><table class="tbl"><thead><tr><th>Subnet</th><th>Hosts</th><th>CIDR</th><th>Usable range</th><th>Mask</th><th>Usable</th><th>Utilisation</th>'+(six?'<th>IPv6 /64</th>':'')+'</tr></thead><tbody>';
    rows.forEach(function(p){var u=p.h/p.usable,m=s4(Math.pow(2,32)-Math.pow(2,32-p.p));
      var v6c=six?h6(six.start+(BigInt(idx[p.i])<<BigInt(64)))+'/64':'';
      if(six&&BigInt(idx[p.i])>=cnt64)v6c='—';
      h+='<tr><td>'+esc(p.name)+'</td><td class="m">'+fmt(p.h)+'</td><td class="m"><b>'+s4(p.net)+'/'+p.p+'</b></td><td class="m">'+(p.usable>0?s4(p.first)+' – '+s4(p.last):'—')+'</td><td class="m">'+m+'</td><td class="m">'+fmt(p.usable)+'</td><td><div class="ia-ub"><span><i class="'+(u>.85?'hi':'')+'" style="width:'+Math.min(100,u*100).toFixed(1)+'%"></i></span><em>'+Math.round(u*100)+'%</em></div></td>'+(six?'<td class="m">'+v6c+'</td>':'')+'</tr>';});
    r.fail.forEach(function(p){h+='<tr><td>'+esc(p.name)+'</td><td class="m">'+fmt(p.h)+'</td><td class="m" colspan="'+(six?6:5)+'" style="color:#c0392b;font-weight:600">Needs a /'+p.p+' ('+fmt(p.size)+' addresses) — does not fit in what is left</td></tr>';});
    h+='</tbody></table></div>';
    if(r.free.length)h+='<p class="ia-freel">Free blocks left: '+r.free.slice(0,12).map(function(b){return '<code>'+s4(b[0])+'/'+b[1]+'</code>';}).join(' ')+(r.free.length>12?' …':'')+'</p>';
    h+='<p class="ia-freel">Reserved per subnet: '+r.R.r+' — '+esc(r.R.lab)+'. Smallest subnet: /'+r.R.min+'.</p>';
    tbl.innerHTML=h;}
  load(EX);
  $id('plAdd').addEventListener('click',function(){box.appendChild(row('Subnet '+($$('.ia-rq',box).length+1),50));run();});
  $id('plEx').addEventListener('click',function(){sup.value='10.20.0.0/21';v6.value='2001:db8:4f00::/56';load(EX);run();});
  $id('plGo').addEventListener('click',run);
  [sup,v6].forEach(function(i){i.addEventListener('input',deb);i.addEventListener('keydown',function(e){if(e.key==='Enter')run();});});
  seg.addEventListener('change',run);
  run();})();

/* =====================================================================
   04 · CIDR overlap checker
   ===================================================================== */
function overlaps(L){var C=[];for(var i=0;i<L.length;i++)for(var j=i+1;j<L.length;j++){var a=L[i],b=L[j];if(a.fam!==b.fam)continue;
  if(a.start<=b.end&&b.start<=a.end){var lo=a.start>b.start?a.start:b.start,hi=a.end<b.end?a.end:b.end,kind=a.start===b.start&&a.end===b.end?'same':(a.start<=b.start&&a.end>=b.end)?'acontains':'bcontains';C.push({i:i,j:j,kind:kind,count:hi-lo+BigInt(1)});}}return C;}
function suggest(L,pool,n){var P=cidr(pool);if(!P||P.fam!==4||n<P.n)return null;var sz=BigInt(1)<<BigInt(32-n),v4=L.filter(function(x){return x.fam===4;});
  for(var s=P.start;s+sz-BigInt(1)<=P.end;s+=sz){var e=s+sz-BigInt(1),ok=true;for(var k=0;k<v4.length;k++){if(s<=v4[k].end&&v4[k].start<=e){ok=false;break;}}if(ok)return ctext(4,s,n);}return null;}
function parseLines(t){var out=[],errs=[];String(t||'').split(/\r?\n/).forEach(function(line,ln){var raw=line.trim();if(!raw||raw[0]==='#')return;
  var m=/([0-9a-fA-F]*[:.][0-9a-fA-F:.]*(?:\/\d{1,3})?)\s*$/.exec(raw);if(!m){errs.push('Line '+(ln+1)+': no CIDR found');return;}
  var c=cidr(m[1]);if(!c){errs.push('Line '+(ln+1)+': "'+m[1]+'" is not a valid CIDR');return;}
  var name=raw.slice(0,m.index).replace(/[\s,;:\t|=-]+$/,'').trim()||('Range '+(out.length+1));c.name=name;c.line=ln+1;c.inp=m[1];out.push(c);});return {L:out,errs:errs};}
window.__iaOverlap=function(t){var r=parseLines(t);return {list:r.L.map(function(x){return x.name+' '+x.text;}),errs:r.errs,conf:overlaps(r.L).map(function(c){return [r.L[c.i].name,r.L[c.j].name,c.kind,String(c.count)];})};};
window.__iaSuggest=function(t,pool,n){return suggest(parseLines(t).L,pool,n);};
(function(){var ta=$id('ovTx'),out=$id('ovOut'),err=$id('ovErr');if(!ta||!out)return;
  var S=['Mumbai DC core, 10.0.0.0/16\nXcellHost VPC prod, 10.10.0.0/16\nXcellHost VPC dev, 10.10.128.0/20\nAWS* ap-south-1 VPC, 10.0.64.0/18\nAzure* Central India VNet, 172.16.0.0/16\nGCP* asia-south1 VPC, 10.20.0.0/16\nPune office LAN, 192.168.1.0/24\nDelhi office LAN, 192.168.1.0/24\nBranch VPN pool, 10.20.30.0/24',
         'Mumbai DC core, 10.0.0.0/16\nXcellHost VPC prod, 10.1.0.0/16\nAWS* VPC, 10.2.0.0/16\nAzure* VNet, 172.16.0.0/20\nPune office LAN, 192.168.10.0/24',
         'Site A, 2001:db8:100::/48\nSite A DMZ, 2001:db8:100:20::/60\nSite B, 2001:db8:200::/48\nULA lab, fd00:1234::/32\nCloud VPC v6, 2001:db8:200:ff00::/56'];
  var KIND={same:'identical to',acontains:'contains',bcontains:'sits inside'};
  function big(n){var s=n.toString();return s.length>15?'2^'+(n.toString(2).length-1)+'+':Number(n).toLocaleString('en-IN');}
  function run(){err.textContent='';var r=parseLines(ta.value),L=r.L;if(r.errs.length)err.textContent=r.errs.slice(0,3).join(' · ');
    if(!L.length){out.innerHTML='<div class="ia-ovs bad"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg></i><div><b>No ranges to check</b><span>Paste one range per line as name, CIDR</span></div></div>';return;}
    var C=overlaps(L),hit={};C.forEach(function(c){hit[c.i]=(hit[c.i]||0)+1;hit[c.j]=(hit[c.j]||0)+1;});
    var h='<div class="ia-ovs'+(C.length?' bad':'')+'"><i>'+(C.length?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>')+'</i><div><b>'+(C.length?C.length+' overlap'+(C.length>1?'s':'')+' found':'No overlaps')+'</b><span>'+L.length+' ranges checked · '+L.filter(function(x){return x.fam===4;}).length+' IPv4, '+L.filter(function(x){return x.fam===6;}).length+' IPv6</span></div></div>';
    h+='<div class="ia-ovl">'+L.map(function(x,i){var w=x.host;return '<div class="ia-ovr'+(hit[i]?' cx':w?' w':'')+'"><b title="'+esc(x.name)+'">'+esc(x.name)+'</b><code>'+esc(x.text)+'</code><em>'+(hit[i]?hit[i]+' clash'+(hit[i]>1?'es':''):w?'host bits':'ok')+'</em></div>';}).join('')+'</div>';
    C.forEach(function(c){var a=L[c.i],b=L[c.j];h+='<div class="ia-cl"><b>'+esc(a.name)+'</b> <code>'+esc(a.text)+'</code> '+KIND[c.kind]+' <b>'+esc(b.name)+'</b> <code>'+esc(b.text)+'</code> — '+big(c.count)+' shared addresses. '+(c.kind==='same'?'Re-number one side or NAT between them.':'Routing between them will break; give the inner range a new block or NAT it.')+'</div>';});
    L.forEach(function(x){if(x.host)h+='<div class="ia-cl" style="border-left-color:#FF8A00"><b>'+esc(x.name)+'</b>: <code>'+esc(x.inp)+'</code> has host bits set; checked as <code>'+esc(x.text)+'</code>.</div>';});
    if(C.length){h+='<div class="ia-ovm"><span class="ia-k">Overlap map</span><div class="ia-trk">'+C.map(function(c){var a=L[c.i],b=L[c.j],mn=a.start<b.start?a.start:b.start,mx=a.end>b.end?a.end:b.end,span=mx-mn+BigInt(1);
        var pc=function(v){return Number(v*BigInt(100000)/span)/1000;};
        return [a,b].map(function(x){return '<div class="cx"><span style="left:'+pc(x.start-mn).toFixed(3)+'%;width:'+Math.max(.6,pc(x.size)).toFixed(3)+'%"></span><small>'+esc(x.name)+' · '+esc(x.text)+'</small></div>';}).join('')+'<i></i>';}).join('')+'</div></div>';}
    var n=+$id('ovSz').value,pool=$id('ovPool').value,sg=suggest(L,pool,n);
    h+='<div class="ia-sug">'+(sg?'Next free /'+n+' in '+esc(pool)+': <code>'+sg+'</code><small>Clear of every IPv4 range above — a safe CIDR for your next VPC or site.</small>':'No free /'+n+' left in '+esc(pool)+'.')+'</div>';
    out.innerHTML=h;}
  ta.value=S[0];
  $$('.ia-ovx button').forEach(function(b){b.addEventListener('click',function(){ta.value=S[+b.getAttribute('data-s')];run();});});
  $id('ovGo').addEventListener('click',run);
  ['ovSz','ovPool'].forEach(function(id){$id(id).addEventListener('change',run);});
  var t=0;ta.addEventListener('input',function(){clearTimeout(t);t=setTimeout(run,400);});
  run();})();

/* =====================================================================
   05 · plan cards → cart
   ===================================================================== */
$$('[data-add]').forEach(function(b){b.addEventListener('click',function(){var k=b.getAttribute('data-add'),t=T[k];if(!t)return;
  cartAdd({key:'ipam-'+k,name:'XcellCloud IPAM '+t.n,sub:fmt(t.ips)+' IPs · '+(t.sub===Infinity?'unlimited':fmt(t.sub))+' subnets · per month · indicative',price:t.p,qty:1});});});

/* =====================================================================
   06 · configurator — monthly INR + GST, #oAdd
   ===================================================================== */
function fitTier(ips,subs){if(ips<=T.st.ips&&subs<=T.st.sub)return 'st';if(ips<=T.bz.ips&&subs<=T.bz.sub)return 'bz';return 'en';}
window.__iaFit=fitTier;
(function(){var ips=$id('cfIps'),sub=$id('cfSub'),tier=$id('cfTier'),cl=$id('cfCl'),col=$id('cfCol'),dns=$id('cfDns'),term=$id('cfTerm'),mig=$id('cfMig');if(!ips||!tier)return;
  var rows=$id('cfRows'),fitEl=$id('cfFit');
  function calc(){var I=clamp(Math.round(num(ips,256)),1,200000),S=clamp(Math.round(num(sub,1)),1,20000),k=tier.dataset.value==='auto'?fitTier(I,S):tier.dataset.value,t=T[k];
    var packs=I>t.ips?Math.ceil((I-t.ips)/1024):0,C=clamp(Math.round(num(cl,0)),0,50),V=clamp(Math.round(num(col,0)),0,50),D=+(dns.dataset.value||0),Y=+(term.dataset.value||2);
    var L=[{key:'ipam-'+k,name:'XcellCloud IPAM '+t.n,sub:fmt(t.ips)+' IPs · '+(t.sub===Infinity?'unlimited':fmt(t.sub))+' subnets · '+Y+'-year term · per month · indicative',price:t.p,qty:1,lab:'IPAM '+t.n,note:fmt(t.ips)+' IPs included'}];
    if(packs)L.push({key:'ipam-pack',name:'IPAM extra 1,024-IP pack',sub:'per month · indicative',price:P.pack,qty:packs,lab:packs+' × extra 1,024 IPs',note:'₹999* each'});
    if(C)L.push({key:'ipam-cloud',name:'IPAM cloud account connector',sub:'VPC / VNet CIDR read + overlap checks · per month · indicative',price:P.cloud,qty:C,lab:C+' × cloud account',note:'₹999* each, beyond '+t.cl+' in plan'});
    if(V)L.push({key:'ipam-col',name:'IPAM on-prem discovery collector (VM)',sub:'ping · SNMP · ARP · NDP · per month · indicative',price:P.col,qty:V,lab:V+' × discovery collector',note:'₹1,499* each'});
    if(D)L.push({key:'mdns-'+D,name:'Managed DNS '+DNSN[String(D)],sub:'per account · per month · as on Managed DNS page',price:D,qty:1,lab:'Managed DNS '+DNSN[String(D)],note:'₹'+fmt(D)+' · Managed DNS page'});
    var one=mig.checked?{key:'ipam-onb',name:'IPAM onboarding — spreadsheet & DHCP import',sub:'one-time · indicative',price:P.mig,qty:1}:null;
    var m=L.reduce(function(a,l){return a+l.price*l.qty;},0),o=one?one.price:0;
    return {L:L,one:one,m:m,o:o,k:k,t:t,I:I,S:S,packs:packs,Y:Y};}
  function render(){var r=calc();
    rows.innerHTML=r.L.map(function(l){return '<div class="crow"><span>'+esc(l.lab)+'<small>'+esc(l.note)+'</small></span><b>'+inr(l.price*l.qty)+'</b></div>';}).join('')+(r.one?'<div class="crow"><span>Onboarding &amp; import<small>one-time · ₹14,999*</small></span><b>'+inr(r.o)+'</b></div>':'');
    var first=r.m+r.o;
    $id('cfMon').textContent=inr(r.m);$id('cfOne').textContent=inr(r.o);$id('cfGst').textContent=inr(first*.18);$id('cfTot').textContent=inr(first*1.18);
    $id('cfSubL').textContent=r.o?'first bill incl. 18% GST · then '+inr(r.m*1.18)+' a month':'per month incl. 18% GST';
    var ui=Math.min(1,r.I/(r.t.ips+r.packs*1024)),us=r.t.sub===Infinity?0:Math.min(1,r.S/r.t.sub),over=r.t.sub!==Infinity&&r.S>r.t.sub;
    fitEl.innerHTML='<b>'+r.t.n+'</b> '+(tier.dataset.value==='auto'?'fits':'selected')+' — '+fmt(r.I)+' of '+fmt(r.t.ips+r.packs*1024)+' IPs'+(r.packs?' (incl. '+r.packs+' extra pack'+(r.packs>1?'s':'')+')':'')+', '+fmt(r.S)+' of '+(r.t.sub===Infinity?'unlimited':fmt(r.t.sub))+' subnets.'+(over?' <b style="color:#c0392b">Subnets exceed this plan — pick a larger one or Auto-fit.</b>':'')+
      '<div class="m"><span><i class="'+(ui>.85?'hi':'')+'" style="width:'+(ui*100).toFixed(1)+'%"></i></span><span><i class="'+(us>.85?'hi':'')+'" style="width:'+(us*100).toFixed(1)+'%"></i></span></div>';
    $id('cfTermN').textContent=r.Y+' Year'+(r.Y>1?'s':'')+' Plan — Custom quote. Multi-year discounts are indicative and confirmed on the quote. Indicative · excl. 18% GST until the total · * placeholder to confirm';}
  [ips,sub,cl,col].forEach(function(e){e.addEventListener('input',render);e.addEventListener('change',render);});
  [tier,dns,term].forEach(function(e){e.addEventListener('change',render);});mig.addEventListener('change',render);
  $id('oAdd').addEventListener('click',function(){var r=calc();r.L.forEach(function(l){cartAdd({key:l.key,name:l.name,sub:l.sub,price:l.price,qty:l.qty});});if(r.one)cartAdd(r.one);});
  render();})();

/* =====================================================================
   11 · enquiry form
   ===================================================================== */
(function(){var X=window.XH;if(!X||!X.onForm)return;
  X.onForm('ipam-enquiry',function(data,f){var b=document.createElement('div');b.className='done ia-done';b.innerHTML='<div class="dk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><h4>Enquiry received</h4><p></p>';
    $('p',b).textContent='Thanks '+String(data.name||'').split(' ')[0]+'. An XcellHost network engineer will reply to '+(data.email||'you')+' within one business day with an import plan and an INR quote'+(/overlap/i.test(String(data.topic||''))?' — keep a list of your VPC and site CIDRs handy.':'.');
    f.hidden=true;f.parentNode.insertBefore(b,f);toast('Enquiry received');return false;});
})();
})();
