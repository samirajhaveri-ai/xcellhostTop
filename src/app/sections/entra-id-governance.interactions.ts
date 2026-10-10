// @ts-nocheck
// Adapted interactive demos from the supplied HTML; queries stay inside this component.
export function initializeIdGovernance(root: ShadowRoot, heroMode: boolean, quote: (topic: string) => void, add: (line: any) => void): () => void {
  const observers = [], scheduledTimers = new Set(), frames = new Set();
  let disposed = false;
  const setTimeout = (fn, delay) => { const id = window.setTimeout(() => { scheduledTimers.delete(id); if (!disposed) fn(); }, delay); scheduledTimers.add(id); return id; };
  const requestAnimationFrame = fn => { const id = window.requestAnimationFrame(t => { frames.delete(id); if (!disposed) fn(t); }); frames.add(id); return id; };
  const $ = (s, scope = root) => scope.querySelector(s), $$ = (s, scope = root) => Array.from(scope.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const XH = { $, $$, reduce, inr: n => '₹' + Math.round(n).toLocaleString('en-IN'), flash: () => {},
    fillRange: r => r.style.setProperty('--p', ((+r.value - +r.min) / (+r.max - +r.min) * 100) + '%'),
    whenVisible: (el, cb) => { if (!el) return; const observer = new IntersectionObserver(es => es.forEach(e => cb(e.isIntersecting)), {threshold: .05}); observer.observe(el); observers.push(observer); },
    cart: { add }
  };
  $$('.seg').forEach(seg => { const active = $('button.on', seg) || $('button', seg); seg.dataset.value = active.dataset.v; $$('button', seg).forEach(b => { b.setAttribute('aria-pressed', String(b === active)); b.addEventListener('click', () => { $$('button', seg).forEach(x => { x.classList.toggle('on', x === b); x.setAttribute('aria-pressed', String(x === b)); }); seg.dataset.value = b.dataset.v; seg.dispatchEvent(new Event('change')); }); }); });
  $$('input.rng').forEach(r => { XH.fillRange(r); r.addEventListener('input', () => XH.fillRange(r)); });
  const click = e => {
    const b = e.target.closest('.stp button');
    if (b) { const inp = $('input', b.parentNode); inp.value = Math.max(+(inp.min || 0), Math.min(+(inp.max || 9999), +inp.value + +(inp.step || 1) * +b.dataset.step)); inp.dispatchEvent(new Event('input', {bubbles: true})); }
    const callback = e.target.closest('[data-open]'); if (callback) { e.preventDefault(); quote(callback.dataset.topic || 'Microsoft Entra ID Governance'); }
    const link = e.target.closest('a[href]'); if (link && link.getAttribute('href').startsWith('#')) { const target = root.getElementById(link.getAttribute('href').slice(1)); if (target) {e.preventDefault(); target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});} }
    const copy = e.target.closest('[data-copy]'); if (copy) navigator.clipboard?.writeText(copy.dataset.copy);
  };
  root.addEventListener('click', click);

  XH.observe = () => {};
  XH.toast = message => { let notice=$('.demo-toast');if(!notice){notice=document.createElement('div');notice.className='demo-toast';notice.setAttribute('role','status');root.querySelector('.governance-shell').appendChild(notice);}notice.textContent=message; };
  XH.download = (name,content,type) => { const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); };
  const listeners=[];
  const addEventListener=(name,fn)=>{window.addEventListener(name,fn);listeners.push([name,fn]);};
  var IC={building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',key:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/></svg>',boxes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3l5 3-5 3-5-3 5-3zM17 3l5 3-5 3-5-3 5-3zM12 12l5 3-5 3-5-3 5-3z"/><path d="M2 6v5l5 3M22 6v5l-5 3M7 15v4l5 3 5-3v-4"/></svg>',swap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4l-4 4 4 4M3 8h14M17 20l4-4-4-4M21 16H7"/></svg>',review:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',
    chat:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>',layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>',doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',disk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',id:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h4M5 17a3.5 3.5 0 016 0"/></svg>',rupee:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>',
    user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',dot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>',fp:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>',x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>'};
  function n(x){return Math.round(x).toLocaleString('en-IN');}

  /* ================= 1. Hero: identity lifecycle timeline ================= */
  var ACC_ICON={'Entra account':'fp','Temporary Access Pass':'key'};
  function accIcon(a){if(ACC_ICON[a])return IC[ACC_ICON[a]];if(/Teams/.test(a))return IC.chat;if(/SAP/.test(a))return IC.layers;if(/SharePoint/.test(a))return IC.doc;if(/Power BI/.test(a))return IC.chart;return IC.boxes;}
  var STAGES=[
    {t:'HR record created',s:'Workday / SuccessFactors · joins in 14 days',tm:'T−14d',ic:'building',st:['Pre-hire',''],tasks:1},
    {t:'Pre-hire workflow',s:'Account enabled · Temporary Access Pass to manager',tm:'T−7d',ic:'key',st:['Pre-hire',''],add:['Entra account','Temporary Access Pass'],tasks:3},
    {t:'Day 1 access package',s:'Auto-assigned: Teams, SAP role, SharePoint site',tm:'Day 1 · 06:00',ic:'boxes',st:['Active','act'],out:['Temporary Access Pass'],add:['Teams · Finance','SAP · FI analyst','SharePoint · Finance','Power BI · Finance'],tasks:6},
    {t:'Mover: Finance → Procurement',s:'Old access removed, new package added',tm:'Month 8',ic:'swap',st:['Moved','mov'],role:'Analyst · Procurement · Mumbai',out:['Teams · Finance','SAP · FI analyst','SharePoint · Finance'],add:['Teams · Procurement','SAP · MM buyer','SharePoint · Procurement'],tasks:6},
    {t:'Quarterly access review',s:'Manager accepts the suggestion in one click',ai:'No sign-in in 90 days — recommend remove',tm:'Q3 review',ic:'review',st:['Active','act'],flag:'Power BI · Finance',tasks:2},
    {t:'Leaver: access removed',s:'Account disabled within minutes, apps deprovisioned',tm:'Exit · +4 min',ic:'lock',st:['Disabled','off'],outAll:true,bad:true,tasks:7}
  ];
  var lc=$('#lc'),lcT=$('#lcT'),acc=$('#lcAcc'),fill=$('#lcFill'),ph=$('#lcPh'),stEl=$('#lcSt'),roleEl=$('#lcRole'),tkEl=$('#lcTk');
  if(lc){
    lcT.insertAdjacentHTML('beforeend',STAGES.map(function(s,i){return '<div class="ev'+(s.bad?' bad':'')+'" data-i="'+i+'"><span class="dt">'+IC[s.ic]+'</span><span class="tx"><b>'+s.t+'</b><small>'+s.s+'</small>'+(s.ai?'<span class="ai">'+IC.brain+s.ai+'</span>':'')+'</span><span class="tm">'+s.tm+'</span></div>';}).join(''));
    var evs=$$('.ev',lcT),centers=[],held=[],tasks=0,si=-1,running=false,timer=null,subT=[];
    function measure(){centers=evs.map(function(e){var d=$('.dt',e);return e.offsetTop+d.offsetTop+d.offsetHeight/2;});
      var r=$('.rail',lcT);r.style.top=centers[0]+'px';r.style.height=(centers[centers.length-1]-centers[0])+'px';}
    function paintAcc(){
      if(!held.length&&!$('.ax',acc)){acc.innerHTML='<span class="none">'+(si===STAGES.length-1?'All access removed — account disabled':'No access yet — waiting for HR')+'</span>';return;}
      var none=$('.none',acc);if(none)none.remove();
    }
    function addChip(a,flag){held.push(a);var el=document.createElement('span');el.className='ax'+(flag?' flag':'');el.setAttribute('data-a',a);el.innerHTML=accIcon(a)+a;var none=$('.none',acc);if(none)none.remove();acc.appendChild(el);}
    function outChip(a){held=held.filter(function(x){return x!==a;});var el=$('.ax[data-a="'+a+'"]',acc);if(!el)return;el.classList.add('out');setTimeout(function(){if(el.parentNode)el.remove();paintAcc();},reduce?0:600);}
    function setStatus(s){stEl.textContent=s[0];stEl.className='st'+(s[1]?' '+s[1]:'');}
    function go(i){
      si=i;var s=STAGES[i];
      evs.forEach(function(e,j){e.classList.toggle('on',j===i);e.classList.toggle('pass',j<i);});
      var span=centers[centers.length-1]-centers[0]||1;
      fill.style.transform='scaleY('+((centers[i]-centers[0])/span)+')';
      ph.style.transform='translateY('+(centers[i]-17)+'px)';ph.classList.add('on');
      setStatus(s.st);
      if(s.role){roleEl.textContent=s.role;roleEl.classList.add('chg');}
      tasks+=s.tasks;tkEl.textContent=tasks;
      var d=reduce?0:1;
      if(s.out){s.out.forEach(function(a,k){subT.push(setTimeout(function(){outChip(a);},d*(250+k*120)));});}
      if(s.add){s.add.forEach(function(a,k){subT.push(setTimeout(function(){addChip(a);},d*((s.out?900:300)+k*180)));});}
      if(s.flag){subT.push(setTimeout(function(){var el=$('.ax[data-a="'+s.flag+'"]',acc);if(el)el.classList.add('flag');},d*700));
        subT.push(setTimeout(function(){outChip(s.flag);},d*2000));}
      if(s.outAll){held.slice().forEach(function(a,k){subT.push(setTimeout(function(){outChip(a);},d*(300+k*140)));});}
    }
    function reset(){
      si=-1;subT.forEach(clearTimeout);subT=[];held=[];tasks=0;tkEl.textContent=0;acc.innerHTML='';paintAcc();
      roleEl.textContent='Analyst · Finance · Mumbai';roleEl.classList.remove('chg');
      evs.forEach(function(e){e.classList.remove('on','pass');});
      fill.style.transform='scaleY(0)';ph.classList.remove('on');ph.style.transform='translateY('+(centers[0]-17)+'px)';setStatus(['Pre-hire','']);si=-1;
    }
    function tick(){
      clearTimeout(timer);
      if(!running){timer=setTimeout(tick,400);return;}
      if(si>=STAGES.length-1){timer=setTimeout(function(){reset();timer=setTimeout(tick,700);},2600);return;}
      go(si+1);
      timer=setTimeout(tick,STAGES[si].flag?3200:2800);
    }
    measure();reset();
    addEventListener('resize',function(){measure();if(si>=0){var span=centers[centers.length-1]-centers[0]||1;fill.style.transform='scaleY('+((centers[si]-centers[0])/span)+')';ph.style.transform='translateY('+(centers[si]-17)+'px)';}});
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{if(!disposed)measure();});
    if(reduce){for(var k=0;k<=4;k++){go(k);}subT.forEach(function(){});}
    else{XH.whenVisible(lc,function(v){running=v;});timer=setTimeout(tick,900);}
  }

  /* ================= 2. Joiner / Mover / Leaver simulator ================= */
  var DEPT={
    fin:{n:'Finance',apps:[['Teams · Finance Ops','chat'],['SAP · FI role','layers'],['SharePoint · Finance','doc'],['Power BI · Finance','chart']]},
    sales:{n:'Sales',apps:[['Teams · Sales India','chat'],['CRM · Sales user','users'],['SharePoint · Sales kit','doc'],['SAP · SD order entry','layers']]},
    eng:{n:'Plant engineering',apps:[['Teams · Plant Engg','chat'],['SAP · PM maintenance','layers'],['SharePoint · Drawings','doc'],['Historian · read-only','disk']]},
    hr:{n:'Human resources',apps:[['Teams · People team','chat'],['HRMS · HR partner','id'],['SharePoint · HR policies','doc'],['Payroll · view only','rupee']]}
  };
  var ROLE={staff:'Analyst',mgr:'Manager',ctr:'Contractor'};
  var jEv=$('#jEv'),jDept=$('#jDept'),jRole=$('#jRole'),jLoc=$('#jLoc'),jTo=$('#jTo'),jToW=$('#jToW'),jList=$('#jList'),jClock=$('#jClock'),jRun=$('#jRun');
  var jT=[],jStarted=false;
  function appNames(k){return DEPT[k].apps.map(function(a){return a[0];}).join(', ');}
  function empId(){var s=jDept.value+jRole.value+jLoc.value,h=0;for(var i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))%9000;return 'EMP-'+(20000+h);}
  function plan(){
    var ev=jEv.dataset.value||'join',d=jDept.value,D=DEPT[d],r=jRole.value,R=ROLE[r],loc=jLoc.value,to=jTo.value;
    if(ev==='move'&&to===d){var ks=Object.keys(DEPT);to=ks[(ks.indexOf(d)+1)%ks.length];jTo.value=to;}
    var T=DEPT[to],steps,head,auto,man,manS;
    var roleTask=r==='mgr'?['Approver role set','Made first-stage approver for '+D.n+' access requests in My Access']:
      r==='ctr'?['Expiry and sponsor set','Contractor package expires in 90 days; sponsor gets a renewal prompt']:
      ['Microsoft 365 licence assigned','Group-based licensing — mailbox, Teams and OneDrive ready'];
    if(ev==='join'){
      head=['Joiner workflow','Pre-hire to day one'];
      steps=[
        ['HR hire record received','Workday / SuccessFactors → Entra ID inbound provisioning · '+R+', '+D.n+', '+loc,'T−7d 02:00'],
        ['Account created','UPN generated, manager linked, department and location set','T−7d 02:01'],
        ['Pre-hire workflow ran','Temporary Access Pass emailed to the manager for day-one sign-in','T−7d 09:00'],
        ['Groups assigned by attribute','All-Staff · DEP-'+D.n.split(' ')[0]+' · LOC-'+loc.split(' ')[0],'Day 1 06:00'],
        ['Access package auto-assigned',D.n+' — '+R+' starter: '+appNames(d),'Day 1 06:00'],
        ['Apps provisioned','Accounts created over SCIM and the SAP connector — no admin console logins','Day 1 06:03'],
        [roleTask[0],roleTask[1],'Day 1 06:04'],
        ['Welcome sent','New hire and manager notified; laptop request raised through a Logic App','Day 1 06:05']];
      auto='~5 min';man='2–4 days';manS='≈ 6 tickets across IT, app owners and HR';
    } else if(ev==='move'){
      head=['Mover workflow',D.n+' → '+T.n];
      steps=[
        ['HR transfer recorded','Department '+D.n+' → '+T.n+', effective today','09:00:00'],
        ['Mover workflow triggered','Change to the department attribute detected','09:00:40'],
        ['Old access package removed',appNames(d),'09:01:10'],
        ['New access package assigned',T.n+' — '+R+': '+appNames(to),'09:01:15'],
        ['Groups updated','DEP-'+D.n.split(' ')[0]+' removed · DEP-'+T.n.split(' ')[0]+' added','09:01:20'],
        ['Apps re-provisioned','SAP roles swapped via connector; SaaS accounts updated over SCIM','09:03:05'],
        ['Managers notified','Both managers get a summary; anything extra goes through My Access','09:03:30']];
      auto='~4 min';man='Often never';manS='Old access usually stays — privilege creep surfaces at audit';
    } else {
      head=['Leaver workflow',r==='ctr'?'Contract end date':'Last working day'];
      steps=[
        ['HR exit recorded',(r==='ctr'?'Contract end date':'Last working day')+' reached · leaver workflow starts','18:00:00'],
        ['Account disabled','Sign-in blocked for '+empId(),'18:00:05'],
        ['Sessions revoked','Refresh tokens invalidated on every device','18:00:08'],
        ['Access packages and groups removed',appNames(d),'18:00:20'],
        ['Apps deprovisioned','SaaS accounts disabled over SCIM; SAP user locked','18:02:40'],
        ['Licences reclaimed','Microsoft 365 licence returned to the pool','18:03:00'],
        ['Files handed to manager','OneDrive shared with the manager; account deleted after 30 days','18:03:30']];
      auto='~4 min';man='Days to weeks';manS='Accounts often stay live until someone notices';
    }
    return {ev:ev,steps:steps,head:head,auto:auto,man:man,manS:manS,d:d,r:r,loc:loc,to:to};
  }
  function renderJ(){
    jT.forEach(clearTimeout);jT=[];
    var p=plan(),D=DEPT[p.d];
    jToW.classList.toggle('off',p.ev!=='move');
    $('#jCard').innerHTML='<span class="av">'+IC.user+'</span><span><b>Sample employee · '+empId()+'</b><small>'+ROLE[p.r]+' · '+D.n+' · '+p.loc+'</small></span>';
    var pk=p.ev==='move'?p.to:p.d;
    $('#jPkgK').textContent=p.ev==='leave'?'Access to be removed':(p.ev==='move'?'New access package · '+DEPT[pk].n:'Access package · '+D.n+' '+ROLE[p.r]);
    $('#jPkg').innerHTML=DEPT[pk].apps.map(function(a,i){return '<span class="chip"><i'+(i%2?' style="background:#041E42"':'')+'>'+IC[a[1]]+'</i>'+a[0]+'</span>';}).join('')+(p.r==='ctr'&&p.ev!=='leave'?'<span class="chip"><i style="background:#FF8C1A">'+IC.clock+'</i>Expires in 90 days</span>':'');
    $('#jK').textContent=p.head[0];$('#jTitle').textContent=p.head[1];
    jList.innerHTML=p.steps.map(function(s){return '<li><span class="s">'+IC.check+'</span><span><b>'+s[0]+'</b><small>'+s[1]+'</small></span><span class="t">—</span></li>';}).join('');
    jClock.textContent='Ready';jClock.classList.remove('run');
    $('#jAuto').textContent=p.auto;$('#jAutoS').textContent=p.steps.length+' tasks · 0 tickets';
    $('#jMan').textContent=p.man;$('#jManS').textContent=p.manS;
    return p;
  }
  function playJ(){
    var p=renderJ(),lis=$$('li',jList);
    if(reduce){lis.forEach(function(li,i){li.classList.add('ok');$('.t',li).textContent=p.steps[i][2];});jClock.textContent=p.steps[p.steps.length-1][2];return;}
    jClock.classList.add('run');
    lis.forEach(function(li,i){
      jT.push(setTimeout(function(){li.classList.add('run');jClock.textContent=p.steps[i][2];},i*620));
      jT.push(setTimeout(function(){li.classList.remove('run');li.classList.add('ok');$('.t',li).textContent=p.steps[i][2];
        if(i===lis.length-1){jClock.classList.remove('run');XH.flash($('#jAuto'));}},i*620+460));
    });
  }
  if(jList){
    [jEv].forEach(function(s){s.addEventListener('change',playJ);});
    [jDept,jRole,jLoc,jTo].forEach(function(s){s.addEventListener('change',playJ);});
    jRun.addEventListener('click',playJ);
    renderJ();
    XH.whenVisible($('#jml'),function(v){if(v&&!jStarted){jStarted=true;setTimeout(playJ,500);}});
  }

  /* ================= 3. Access-review effort calculator ================= */
  var ASSIST=0.25; // minutes to bulk-accept a recommendation (assumption)
  var rEmp=$('#rEmp'),rApps=$('#rApps'),rFreq=$('#rFreq'),rMin=$('#rMin'),rRate=$('#rRate'),rPct=$('#rPct');
  var savedShown=0,rtw=null;
  function rTween(to){var el=$('#rSaved');if(reduce){el.textContent=n(to)+' h';savedShown=to;return;}var from=savedShown,t0=null;cancelAnimationFrame(rtw);
    function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/450),e=1-Math.pow(1-p,3);el.textContent=n(from+(to-from)*e)+' h';if(p<1)rtw=requestAnimationFrame(f);else savedShown=to;}rtw=requestAnimationFrame(f);}
  function rCalc(){
    var E=+rEmp.value,A=+rApps.value,F=+(rFreq.dataset.value||4),m=Math.max(1,+rMin.value||1),rate=Math.max(0,+rRate.value||0),p=+rPct.value/100;
    var dec=E*A*F,man=dec*m/60,autoD=dec*p,ai=(autoD*ASSIST+(dec-autoD)*m)/60,saved=man-ai,val=saved*rate;
    $('#rEmpL').textContent=n(E);$('#rAppsL').textContent=A;$('#rPctL').textContent=Math.round(p*100)+'%';
    rTween(saved);
    $('#rSavedS').textContent='worth '+XH.inr(val)+' at '+XH.inr(rate)+'/hour';
    $('#rHM').textContent=n(man)+' h';$('#rHA').textContent=n(ai)+' h';
    $('#rBarM').style.width=(man>0?100:0)+'%';$('#rBarA').style.width=(man>0?ai/man*100:0)+'%';
    $('#rDec').textContent=n(dec);$('#rAuto').textContent=n(autoD);$('#rVal').textContent=XH.inr(val);$('#rDays').textContent=n(saved/8);
    $('#rFormula').innerHTML='<b>Decisions</b> = '+n(E)+' people × '+A+' items × '+F+' reviews = '+n(dec)+'<br><b>Saved</b> = '+n(dec)+' × '+Math.round(p*100)+'% × ('+m+' − '+ASSIST+' min) ÷ 60 = '+n(saved)+' h<br><span>Bulk-accepting a recommendation assumed at 15 seconds.</span>';
  }
  if(rEmp){
    [rEmp,rApps,rPct,rMin,rRate].forEach(function(i){i.addEventListener('input',rCalc);});
    rFreq.addEventListener('change',rCalc);
    rCalc();
  }

  /* comparison table: labels for stacked mobile layout */
  $$('.ctbl tbody tr').forEach(function(tr){var c=tr.children;if(c[1])c[1].setAttribute('data-label','Entra ID P2');if(c[2])c[2].setAttribute('data-label','+ ID Governance');});

  if (!heroMode) {
  /* ================= 4. Pricing: plan card + seat calculator ================= */
  var PRICE={mo:528,yr:6125,list:580};
  var LISTYR=PRICE.list*12;
  function pct(save,list){return Math.round(save/list*100);}
  var yrSave=LISTYR-PRICE.yr,moSave=PRICE.list-PRICE.mo;
  $('#msList').textContent=XH.inr(PRICE.list);$('#msMo').textContent=XH.inr(PRICE.mo);$('#msYr').textContent=XH.inr(PRICE.yr);
  $('#msSave').textContent='Save '+XH.inr(yrSave)+' · '+pct(yrSave,LISTYR)+'%';
  $('#pfL').textContent=XH.inr(LISTYR);$('#pfX').textContent=XH.inr(PRICE.yr);$('#pfS').textContent=XH.inr(yrSave)+' ('+pct(yrSave,LISTYR)+'%)';
  $('#sMoSub').textContent=XH.inr(PRICE.mo)+' / user / mo · save '+pct(moSave,PRICE.list)+'%';
  $('#sYrSub').textContent=XH.inr(PRICE.yr)+' / user / yr · save '+pct(yrSave,LISTYR)+'%';
  $('#suiteP').textContent=XH.inr(910);$('#suiteSep').textContent=XH.inr(PRICE.mo+378+378);

  var sN=$('#sSeatsN'),sR=$('#sSeats'),sBill=$('#sBill'),totShown=0,stw=null;
  function sTween(to){var el=$('#sTot');if(reduce){el.textContent=XH.inr(to);totShown=to;return;}var from=totShown,t0=null;cancelAnimationFrame(stw);
    function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/450),e=1-Math.pow(1-p,3);el.textContent=XH.inr(from+(to-from)*e);if(p<1)stw=requestAnimationFrame(f);else totShown=to;}stw=requestAnimationFrame(f);}
  function sCalc(){
    var seats=Math.max(1,Math.min(1000,Math.round(+sN.value||1))),b=sBill.dataset.value||'y',y=b==='y';
    var per=y?PRICE.yr:PRICE.mo,list=(y?LISTYR:PRICE.list)*seats,tot=per*seats,save=list-tot,gst=Math.round(tot*.18);
    $('#sSeatsL').textContent=seats+(seats===1?' user':' users');
    $('#sSub').textContent='per '+(y?'year':'month')+' for '+seats+(seats===1?' user':' users')+', excl. GST';
    $('#sPer').textContent=XH.inr(per)+(y?' / yr':' / mo');
    $('#sList').textContent=XH.inr(list);
    $('#sSave').textContent=XH.inr(save)+' · '+pct(save,list)+'%';
    $('#sGst').textContent=XH.inr(gst);$('#sPay').textContent=XH.inr(tot+gst);
    sTween(tot);
    return {seats:seats,b:b,y:y,per:per,tot:tot};
  }
  sN.addEventListener('input',function(){var v=Math.max(1,Math.min(1000,Math.round(+sN.value||1)));if(sN.value!==''&&+sN.value>=1){sR.value=v;XH.fillRange(sR);}sCalc();});
  sR.addEventListener('input',function(){sN.value=sR.value;sCalc();});
  sBill.addEventListener('change',sCalc);
  sCalc();
  $('#sAdd').addEventListener('click',function(){var c=sCalc();
    XH.cart.add({key:'entra-idgov-'+c.b+'-'+c.seats,name:'Microsoft Entra ID Governance — '+c.seats+(c.seats===1?' seat':' seats'),sub:(c.y?'Yearly':'Monthly')+' · '+XH.inr(c.per)+'/seat',price:c.tot,qty:1});});

  }

  return () => { disposed=true;root.removeEventListener("click",click);listeners.forEach(([name,fn])=>window.removeEventListener(name,fn));observers.forEach(o=>o.disconnect());scheduledTimers.forEach(window.clearTimeout);frames.forEach(window.cancelAnimationFrame); };
}
