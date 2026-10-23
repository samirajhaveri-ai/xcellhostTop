
(function(){
  'use strict';
  var d=document,XH=window.XH,$=function(s,c){return (c||d).querySelector(s);},$$=function(s,c){return [].slice.call((c||d).querySelectorAll(s));};
  var RM=XH.reduce;

  /* ---------- one shared rAF loop ---------- */
  var tasks=[],running=false,last=0;
  function loop(ts){var dt=Math.min(.1,(ts-(last||ts))/1000);last=ts;var any=false;
    for(var i=0;i<tasks.length;i++){var t=tasks[i];if(t.on){any=true;t.fn(dt,ts);}}
    if(any)requestAnimationFrame(loop);else{running=false;last=0;}}
  function kick(){if(!running){running=true;last=0;requestAnimationFrame(loop);}}
  function task(fn){var t={on:false,fn:fn};tasks.push(t);return {set:function(v){t.on=v;if(v)kick();},get on(){return t.on;}};}
  function clamp(v,a,b){return Math.max(a,Math.min(b,v));}
  function ease(x){x=clamp(x,0,1);return 1-Math.pow(1-x,3);}
  function inr(n){return XH.inr(Math.round(n));}

  /* ================= HERO CAROUSEL ================= */
  var pmv=$('#pmv');
  if(pmv){
    var scenes=$$('.pms',pmv),rail=$$('#pmvRail button'),dots=$$('#pmvDots button'),fill=$('#pmvFill'),log=$('#pmvLog'),pz=$('#pmvPz');
    var DUR=5.5,STEPS=[.25,1.05,1.9,2.8];
    var LOGS=[
      ['vault: checkout requested · sa@db-prod-01','mfa: push approved on registered device','approval: IT head approved · window 60 min','vault: credential released to gateway','session: credential injected · not displayed'],
      ['gateway: ssh app-srv-03 · recording on','cmd: systemctl status nginx · allowed','cmd: tail error.log · allowed','cmd: tail error.log · allowed','policy: "stop auditd" blocked · SOC ticket raised'],
      ['jit: 42 standing admin accounts found','jit: a.khan Domain Admin → eligible','jit: vendor-erp → 2 h windows only','jit: standing rights removed · 39 accounts','jit: 3 break-glass accounts kept · vaulted'],
      ['discovery: scanning 12 systems','discovery: privileged accounts found','discovery: shared & weak passwords flagged','rotate: new credentials set & verified','rotate: all accounts rotated · sample'],
      ['report: October privileged access · sample','report: sessions indexed for replay','report: approvals reconciled','report: blocked commands summarised','evidence: 180-day logs retained in India']
    ];
    var cur=0,t=0,paused=false,vis=true,hover=false,lastSt=-1;
    var T1=$('#pmT1'),T2=$('#pmT2'),K3=$('#pmK3'),K4a=$('#pmK4a'),K4b=$('#pmK4b'),K4c=$('#pmK4c'),K5=[$('#pmK5a'),$('#pmK5b'),$('#pmK5c'),$('#pmK5d')];
    var tiles=$$('.s4-grid span',pmv),sweep=$('.s4-grid .sweep',pmv),head=$('.s2-tl .hd',pmv);
    function stepOf(tt){var s=0;for(var i=0;i<STEPS.length;i++)if(tt>=STEPS[i])s=i+1;return s;}
    function pad(n){return (n<10?'0':'')+n;}
    function render(tt){
      var sc=scenes[cur],st=stepOf(tt);
      if(st!==lastSt){sc.setAttribute('data-st',st);if(log)log.textContent=LOGS[cur][st];lastSt=st;}
      fill.style.transform='scaleX('+((cur+clamp(tt/DUR,0,1))/scenes.length)+')';
      if(cur===0){var left=st>=4?Math.max(0,3600-Math.floor((tt-STEPS[3])*7)):3600;T1.textContent=pad(Math.floor(left/60))+':'+pad(left%60);}
      else if(cur===1){var s=Math.floor(tt*11);T2.textContent=pad(Math.floor(s/60))+':'+pad(s%60);head.style.setProperty('--hp',clamp(tt/DUR,0,1).toFixed(3));}
      else if(cur===2){K3.textContent=Math.round(42-39*ease((tt-1.9)/1.6));}
      else if(cur===3){var p=clamp((tt-.2)/2.4,0,1);sweep.style.setProperty('--sx',p.toFixed(3));sweep.style.setProperty('--so',p>0&&p<1?1:0);
        tiles.forEach(function(e,i){var col=(i%4)/4+.12;e.classList.toggle('f',p>=col&&tt<STEPS[3]+(i*.12));e.classList.toggle('r',tt>=STEPS[3]+(i*.12));});
        K4a.textContent=Math.round(186*ease(p));K4c.textContent=Math.round(27*ease((tt-1.05)/1.2));K4b.textContent=Math.round(186*ease((tt-STEPS[3])/1.6));}
      else if(cur===4){var e5=ease((tt-.3)/2.6);K5[0].textContent=Math.round(412*e5);K5[1].textContent=Math.round(100*e5)+'%';K5[2].textContent=Math.round(3*ease((tt-1.9)/.8));K5[3].textContent=Math.round(186*ease((tt-2.8)/1.6));}
    }
    function show(i,manual){
      cur=(i+scenes.length)%scenes.length;t=RM?DUR:0;lastSt=-1;
      scenes.forEach(function(s,k){s.classList.toggle('on',k===cur);if(k!==cur)s.setAttribute('data-st','0');});
      rail.forEach(function(b,k){b.classList.toggle('on',k===cur);});
      dots.forEach(function(b,k){b.classList.toggle('on',k===cur);b.setAttribute('aria-current',k===cur?'true':'false');});
      render(t);
      if(manual&&!RM)XH.flash&&XH.flash(scenes[cur]);
    }
    var hero=task(function(dt){
      if(paused||hover||!vis||d.hidden)return;
      t+=dt;if(t>=DUR){show(cur+1);return;}render(t);
    });
    function upd(){if(pz)pz.textContent=RM?'manual':(hover?'paused':'auto');hero.set(!RM&&vis);}
    rail.concat(dots).forEach(function(b){b.addEventListener('click',function(){show(+b.getAttribute('data-go'),true);});});
    var stage=$('#pmStage');
    stage.addEventListener('mouseenter',function(){hover=true;upd();});
    stage.addEventListener('mouseleave',function(){hover=false;upd();});
    var sx=null,sy=null;
    pmv.addEventListener('pointerdown',function(e){sx=e.clientX;sy=e.clientY;});
    pmv.addEventListener('pointerup',function(e){if(sx===null)return;var dx=e.clientX-sx,dy=e.clientY-sy;sx=null;if(Math.abs(dx)>40&&Math.abs(dx)>Math.abs(dy))show(cur+(dx<0?1:-1),true);});
    pmv.addEventListener('keydown',function(e){if(e.key==='ArrowRight')show(cur+1,true);if(e.key==='ArrowLeft')show(cur-1,true);});
    XH.whenVisible(pmv,function(v){vis=v;upd();});
    if(RM){scenes.forEach(function(s){s.setAttribute('data-st','4');});}
    show(0);upd();
  }

  /* ================= HOW IT WORKS FLOW ================= */
  var flow=$('#pmFlow');
  if(flow){
    var P=[0,1,2,3,4,5].map(function(i){return $('#pmP'+i);}),dot=$('#pmDot'),nodes=$$('.nd',flow),lis=$$('#pmSt li');
    var L=P.map(function(p){return p.getTotalLength();});
    var ft=0,tgt=0;
    // segments: [path, duration, step, nodeLit]
    function seq(){return [[0,1.1,0,0],[null,.7,1,1],[1,1,2,2],[null,.5,3,2],[2+tgt,1,3,3+tgt],[null,.6,3,3+tgt],[5,1.2,4,6],[null,.8,4,6]];}
    var S=seq(),si=0,ss=0,litStep=-1;
    function setStep(k){if(k===litStep)return;litStep=k;lis.forEach(function(l,i){l.classList.toggle('on',i===k);});}
    function lit(n){nodes.forEach(function(e,i){e.classList.toggle('on',i===n);});}
    function placeAt(pi,f){var pt=P[pi].getPointAtLength(L[pi]*f);dot.setAttribute('cx',pt.x);dot.setAttribute('cy',pt.y);}
    var fl=task(function(dt){
      ss+=dt;var sg=S[si];
      if(sg[0]!==null){placeAt(sg[0],ease(ss/sg[1]));P[sg[0]].classList.add('lit');}
      setStep(sg[2]);lit(sg[3]);
      if(ss>=sg[1]){ss=0;si++;if(si>=S.length){si=0;P.forEach(function(p){p.classList.remove('lit');});tgt=(tgt+1)%3;S=seq();}}
    });
    if(RM){P.forEach(function(p){p.classList.add('lit');});placeAt(2,1);setStep(2);lit(2);}
    else XH.whenVisible(flow,function(v){fl.set(v);});
    lis.forEach(function(l,i){l.addEventListener('mouseenter',function(){if(RM){setStep(i);}});});
  }

  /* ================= CONFIGURATOR ================= */
  var RATE={ess:1499,ses:1999,mgd:2499},NAME={ess:'PAM Essentials',ses:'PAM + Sessions',mgd:'Managed PAM'},DISC={1:0,2:.08,3:.12};
  var P2=755,PIMSET=49999,IMP=149999;
  var cPlan=$('#cPlan'),cTerm=$('#cTerm'),cAcc=$('#cAcc'),cAccR=$('#cAccR'),cImp=$('#cImp'),cPim=$('#cPim'),cPimN=$('#cPimN'),cPimF=$('#cPimF');
  var calcState=null;
  function calc(){
    var plan=cPlan.dataset.value||'ses',yrs=+(cTerm.dataset.value||1),acc=clamp(Math.round(+cAcc.value||10),10,5000),adm=clamp(Math.round(+cPimN.value||1),1,200);
    var per=Math.round(RATE[plan]*(1-DISC[yrs])),mo=yrs*12;
    var lines=[{key:'pam-'+plan+'-'+yrs+'y',name:NAME[plan]+' — '+yrs+'-year term',sub:inr(per)+' / account / month × '+mo+' months',price:per*mo,qty:acc,rec:true}];
    if(cImp.checked)lines.push({key:'pam-implementation',name:'PAM implementation (from)',sub:'One-time · up to 100 accounts*',price:IMP,qty:1});
    if(cPim.checked){lines.push({key:'entra-p2-pim-'+yrs+'y',name:'Microsoft Entra ID P2 — PIM for cloud admins',sub:inr(P2)+' / admin / month × '+mo+' months',price:P2*mo,qty:adm,rec:true});
      lines.push({key:'pim-setup',name:'Entra PIM configuration',sub:'One-time',price:PIMSET,qty:1});}
    var rec=0,one=0;lines.forEach(function(l){if(l.rec)rec+=l.price*l.qty;else one+=l.price*l.qty;});
    var monthly=per*acc+(cPim.checked?P2*adm:0),sub=rec+one,gst=sub*.18;
    $('#cPlanL').textContent=NAME[plan];$('#cAccL').textContent=acc+' accounts';$('#cTermL').textContent=yrs+(yrs>1?' years':' year');$('#cPimL').textContent=adm+(adm>1?' admins':' admin');
    cPimF.classList.toggle('on',cPim.checked);
    $('#oTot').textContent=inr(monthly);$('#oSub').textContent='per month, excl. GST'+(one?' · + '+inr(one)+' one-time':'');
    $('#oRows').innerHTML=lines.map(function(l){return '<div class="crow ln"><span>'+l.name+(l.qty>1?' × '+l.qty:'')+'</span><b>'+inr(l.price*l.qty)+'</b></div>';}).join('');
    $('#oRec').textContent=inr(rec);$('#oOne').textContent=inr(one);$('#oCt').textContent=inr(sub);$('#oGst').textContent=inr(gst);$('#oPay').textContent=inr(sub+gst);
    $$('#pmPlans article').forEach(function(a){a.classList.toggle('sel',a.getAttribute('data-plan')===plan);});
    calcState={lines:lines,sub:sub};
  }
  if(cPlan){
    [cPlan,cTerm].forEach(function(s){s.addEventListener('change',calc);});
    cAcc.addEventListener('input',function(){cAccR.value=Math.min(1000,+cAcc.value||10);calc();});
    cAccR.addEventListener('input',function(){cAcc.value=cAccR.value;calc();});
    [cImp,cPim].forEach(function(c){c.addEventListener('change',calc);});
    cPimN.addEventListener('input',calc);
    $('#oAdd').addEventListener('click',function(){calc();calcState.lines.forEach(function(l){XH.cart.add({key:l.key,name:l.name,sub:l.sub,price:l.price,qty:l.qty});});});
    $$('[data-pick]').forEach(function(b){b.addEventListener('click',function(){var v=b.getAttribute('data-pick');var t=$('#cPlan button[data-v="'+v+'"]');if(t)t.click();$('#configure').scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});});});
    calc();
  }

  /* ================= TRIAL FORM ================= */
  XH.onForm('pam-trial',function(data,f){
    var ref='PAM-'+String(Date.now()).slice(-6);
    f.innerHTML='<div class="done"><div class="dk">'+'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'+'</div><h4>Free trial request received</h4><p>Thanks, '+(data.name||'there').split(' ')[0]+'. Your reference is <b>'+ref+'</b>. XcellHost will call you within one business day* to confirm trial scope and duration.</p></div>';
    XH.toast('Free trial requested · '+ref);return false;
  });

  /* ================= SIZER ================= */
  var Z={win:$('#zWin'),lin:$('#zLin'),db:$('#zDb'),net:$('#zNet'),cl:$('#zCl'),ven:$('#zVen')};
  var ZC={srv:['Servers','#0066FF'],db:['Databases','#7fb0ff'],net:['Network','#FF8A00'],cl:['Cloud','#16a34a'],svc:['Service accts','#ffc27a'],ven:['Vendors','#c0392b']};
  var zShown=0,zTarget=0,zSug='ses';
  var zTw=task(function(dt){zShown+=(zTarget-zShown)*Math.min(1,dt*8);if(Math.abs(zTarget-zShown)<.5){zShown=zTarget;zTw.set(false);}$('#zTot').textContent=Math.round(zShown).toLocaleString('en-IN');});
  function size(){
    var v={};Object.keys(Z).forEach(function(k){v[k]=Math.max(0,Math.round(+Z[k].value||0));});
    var parts={srv:2*(v.win+v.lin),db:2*v.db,net:v.net,cl:3*v.cl,svc:Math.round(.3*(v.win+v.lin)),ven:v.ven};
    var tot=0;Object.keys(parts).forEach(function(k){tot+=parts[k];});
    $$('#zStk i').forEach(function(i){var k=i.getAttribute('data-k');i.style.width=(tot?parts[k]/tot*100:0)+'%';i.style.background=ZC[k][1];});
    $('#zLg').innerHTML=Object.keys(parts).map(function(k){return '<span><i style="background:'+ZC[k][1]+'"></i>'+ZC[k][0]+' '+parts[k]+'</span>';}).join('');
    var why;
    if(tot>300){zSug='mgd';why='Large estate — let XcellHost run approvals and session watch 24×7.';}
    else if(v.ven>0||v.db>0){zSug='ses';why=v.ven>0?'You have vendors with admin access — record their sessions.':'Database admin sessions are worth recording.';}
    else{zSug='ess';why='Start with vaulting and rotation; add sessions later.';}
    var bill=Math.max(10,tot);
    $('#zPlan').textContent=NAME[zSug];$('#zWhy').textContent=why;$('#zCost').textContent=inr(bill*RATE[zSug])+' / month*';
    zTarget=tot;if(RM){zShown=tot;$('#zTot').textContent=tot.toLocaleString('en-IN');}else zTw.set(true);
    return bill;
  }
  if(Z.win){Object.keys(Z).forEach(function(k){Z[k].addEventListener('input',size);});size();
    $('#zUse').addEventListener('click',function(){var bill=size();cAcc.value=bill;cAccR.value=Math.min(1000,bill);var b=$('#cPlan button[data-v="'+zSug+'"]');if(b)b.click();calc();$('#configure').scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});XH.flash&&XH.flash($('#configure .cout'));});}

  /* ================= READINESS ================= */
  var FIX=['Move shared and root passwords into the PAM vault','Enforce MFA on every privileged login (Entra MFA, Accops HyID or FIDO2 keys)','Replace standing admins with just-in-time access','Broker and record vendor sessions','Turn on automatic rotation after each checkout','Discover service accounts and assign owners','Stream privileged activity to your SIEM / SOC for 180 days','Run quarterly privileged-access reviews'];
  var rq=$$('#rQ input');
  function ready(){
    var sc=0,gaps=[];rq.forEach(function(c,i){var w=+c.getAttribute('data-w');if(c.checked)sc+=w;else gaps.push([w,i]);});
    gaps.sort(function(a,b){return b[0]-a[0];});
    $('#rSc').textContent=sc;var arc=$('#rArc');arc.style.strokeDashoffset=(1-sc/100).toFixed(3);arc.style.stroke=sc<40?'#c0392b':sc<75?'#FF8A00':'#0066FF';
    $('#rLv').textContent=sc<40?'Starting out':sc<75?'Getting there':sc<100?'Well controlled':'Audit-ready';
    $('#rGap').innerHTML=gaps.length?gaps.slice(0,3).map(function(g){return '<li>'+FIX[g[1]]+'<span>+'+g[0]+' points</span></li>';}).join(''):'<li>No gaps found — ask us for an independent review.<span>Consider an IAM assessment</span></li>';
  }
  if(rq.length){rq.forEach(function(c){c.addEventListener('change',ready);});ready();}

  /* ================= MICRO-INTERACTIONS ================= */
  if(XH.fine&&!RM){
    $$('.pm-mag').forEach(function(b){
      b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.transform='translate('+((e.clientX-r.left-r.width/2)*.18).toFixed(1)+'px,'+((e.clientY-r.top-r.height/2)*.28).toFixed(1)+'px)';});
      b.addEventListener('pointerleave',function(){b.style.transform='';});
    });
    $$('.pm-caps article,.pm-plans article').forEach(function(c){
      c.addEventListener('pointermove',function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform='perspective(800px) rotateX('+(-y*6).toFixed(2)+'deg) rotateY('+(x*6).toFixed(2)+'deg) translateY(-4px)';});
      c.addEventListener('pointerleave',function(){c.style.transform='';});
    });
  }
})();

