// @ts-nocheck
// Adapted interactive demos from the supplied HTML; queries stay inside this component.
export function initializePrivateAccess(root: ShadowRoot, heroMode: boolean, quote: (topic: string) => void, add: (line: any) => void): () => void {
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
    const callback = e.target.closest('[data-open]'); if (callback) { e.preventDefault(); quote(callback.dataset.topic || 'Microsoft Entra Private Access'); }
    const link = e.target.closest('a[href]'); if (link && link.getAttribute('href').startsWith('#')) { const target = root.getElementById(link.getAttribute('href').slice(1)); if (target) {e.preventDefault(); target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});} }
    const copy = e.target.closest('[data-copy]'); if (copy) navigator.clipboard?.writeText(copy.dataset.copy);
  };
  root.addEventListener('click', click);

  XH.observe = () => {};
  XH.toast = message => { let notice=$('.demo-toast');if(!notice){notice=document.createElement('div');notice.className='demo-toast';notice.setAttribute('role','status');root.querySelector('.private-shell').appendChild(notice);}notice.textContent=message; };
  XH.download = (name,content,type) => { const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); };
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function tween(el,to,fmt){fmt=fmt||XH.inr;var from=+(el.dataset.v||0);el.dataset.v=to;
    if(reduce||from===to){el.textContent=fmt(to);return;}
    cancelAnimationFrame(el._tw);var t0=null;
    function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/480),e=1-Math.pow(1-p,3);el.textContent=fmt(Math.round(from+(to-from)*e));if(p<1)el._tw=requestAnimationFrame(f);}
    el._tw=requestAnimationFrame(f);}

  /* ================= Pricing table (from the family brief) ================= */
  var P={m:378,y:4382,listM:415};P.listY=P.listM*12;
  var saveY=Math.round((P.listY-P.y)/P.listY*100),saveM=Math.round((P.listM-P.m)/P.listM*100);

  /* ================= 2. Hero visual: VPN vs Private Access ================= */
  var zt=$('#zt');
  if(zt){
    var W=220,H=356,C={user:[110,30],pwd:[110,86],gw:[110,170],hub:[110,278],s0:[58,252],s1:[162,252],s2:[58,304],s3:[162,304],chk:[110,86],edge:[110,142],conn:[110,200]};
    var vPk=$('#vPk'),ePk=$('#ePk'),ph=$('#ztPh'),vN=$('#vN'),eN=$('#eN'),eNl=$('#eNl'),scs=$$('.pa-sc',zt);
    function at(el,p){el.style.left=(p[0]/W*100)+'%';el.style.top=(p[1]/H*100)+'%';}
    function on(id,c){var e=root.getElementById(id);if(e)e.classList.add(c||'on');}
    function phase(t,done){ph.textContent=t;ph.classList.toggle('done',!!done);}
    var EV=[
      [150,function(){phase('Signing in…');vPk.classList.add('on');ePk.classList.add('on');on('vL1');}],
      [600,function(){on('vPwd');}],
      [700,function(){phase('Checking identity…');on('eC0','ok');}],
      [1050,function(){on('eC1','ok');}],
      [1100,function(){on('vGw');on('vL2');}],
      [1400,function(){on('eC2','ok');on('eChk');on('eL1');}],
      [1600,function(){on('vHub');vPk.classList.remove('on');}],
      [1900,function(){on('eEdge');on('eL2');}]
    ];
    [0,1,2,3].forEach(function(i){var t=1850+i*430;EV.push([t,function(){on('vX'+i);}]);EV.push([t+330,function(){on('vS'+i,'hit');vN.textContent=(i+1)+'/4';vN.classList.add('bad');}]);});
    EV.push([2350,function(){on('eConn');on('eL3');}]);
    EV.push([2850,function(){on('eS0','ok');ePk.classList.remove('on');eN.textContent='1/4';eN.classList.add('good');eNl.textContent='only SAP ERP';phase('Granted: SAP ERP only',true);}]);
    EV.push([8300,function(){scs.forEach(function(s){s.classList.add('fade');});}]);
    EV.sort(function(a,b){return a[0]-b[0];});
    var MV=[[vPk,C.user,C.pwd,150,450],[vPk,C.pwd,C.gw,600,500],[vPk,C.gw,C.hub,1100,500],
            [ePk,C.user,C.chk,150,500],[ePk,C.chk,C.edge,1450,450],[ePk,C.edge,C.conn,1900,450],[ePk,C.conn,C.s0,2350,500]];
    var LOOP=9000,t=0,idx=0,run=false,last=0;
    function reset(){
      $$('.on,.ok,.hit,.bad,.good',zt).forEach(function(e){if(e!==ph)e.classList.remove('on','ok','hit','bad','good');});
      scs.forEach(function(s){s.classList.remove('fade');});
      vN.textContent='0/4';eN.textContent='0/4';eNl.textContent='apps reachable';phase('Signing in…');
      at(vPk,C.user);at(ePk,C.user);t=0;idx=0;
    }
    function ease(p){return p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2;}
    function frame(ts){
      if(!run)return;
      var dt=last?Math.min(ts-last,60):16;last=ts;t+=dt;
      while(idx<EV.length&&EV[idx][0]<=t){EV[idx][1]();idx++;}
      MV.forEach(function(m){if(t>=m[3]&&t<=m[3]+m[4]+20){var p=ease(Math.min(1,(t-m[3])/m[4]));at(m[0],[m[1][0]+(m[2][0]-m[1][0])*p,m[1][1]+(m[2][1]-m[1][1])*p]);}});
      if(t>=LOOP)reset();
      requestAnimationFrame(frame);
    }
    reset();
    if(reduce){EV.forEach(function(e){if(e[0]<8000)e[1]();});vPk.classList.remove('on');ePk.classList.remove('on');}
    else XH.whenVisible(zt,function(v){if(v&&!run){run=true;last=0;requestAnimationFrame(frame);}else if(!v)run=false;});
  }

  /* ================= 3. How-it-works flow: pause offscreen ================= */
  var flow=$('#flow');if(flow)XH.whenVisible(flow,function(v){flow.classList.toggle('paused',!v);});

  /* ================= 4. App segment planner ================= */
  var TYPES={web:['Web app','443','TCP','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>'],rdp:['RDP','3389','TCP','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'],ssh:['SSH','22','TCP','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/></svg>'],smb:['SMB file share','445','TCP','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>'],sap:['SAP','3200-3299','TCP','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3l5 3-5 3-5-3 5-3zM17 3l5 3-5 3-5-3 5-3zM12 12l5 3-5 3-5-3 5-3z"/><path d="M2 6v5l5 3M22 6v5l-5 3M7 15v4l5 3 5-3v-4"/></svg>'],db:['Database','1433','TCP','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>'],custom:['Custom TCP/UDP','','TCP','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>']};
  var GRPS=['All staff','Finance','IT admins','Engineering','HR','Vendors'];
  var GIC={'All staff':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>','Finance':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>','IT admins':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/></svg>','Engineering':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>','HR':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>','Vendors':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>'};
  var PRESETS=[
    {name:'SAP ERP',type:'sap',host:'sap-erp.yourco.local',port:'3200-3299',proto:'TCP',site:'Mumbai DC',grp:'Finance',mode:'app'},
    {name:'RDP jump host',type:'rdp',host:'10.20.4.15',port:'3389',proto:'TCP',site:'Mumbai DC',grp:'IT admins',mode:'app'},
    {name:'Branch subnet',type:'custom',host:'10.40.0.0/16',port:'1-65535',proto:'TCP + UDP',site:'Bengaluru branch',grp:'All staff',mode:'quick'},
    {name:'Finance file share',type:'smb',host:'fs01.yourco.local',port:'445',proto:'TCP',site:'Mumbai DC',grp:'Finance',mode:'app'},
    {name:'Git over SSH',type:'ssh',host:'git.yourco.local',port:'22',proto:'TCP',site:'Azure · Central India',grp:'Engineering',mode:'app'},
    {name:'HR database',type:'db',host:'hrdb.yourco.local',port:'1433',proto:'TCP',site:'Mumbai DC',grp:'HR',mode:'app'},
    {name:'Intranet portal',type:'web',host:'intranet.yourco.local',port:'443',proto:'TCP',site:'Pune office',grp:'All staff',mode:'app'},
    {name:'Tally server',type:'custom',host:'tally.yourco.local',port:'9000',proto:'TCP',site:'Pune office',grp:'Finance',mode:'app'}
  ];
  var apps=[],doneSet={},MAXA=20;
  var plForm=$('#plForm');
  if(plForm){
    var fName=$('#plName'),fType=$('#plType'),fHost=$('#plHost'),fPort=$('#plPort'),fProto=$('#plProto'),fSite=$('#plSite'),fGrp=$('#plGrp'),fMode=$('#plMode');
    $('#plPresets').innerHTML=PRESETS.map(function(p,i){return '<button type="button" data-pre="'+i+'"><i>'+TYPES[p.type][3]+'</i>'+esc(p.name)+'</button>';}).join('');
    fType.addEventListener('change',function(){var d=TYPES[fType.value];fPort.value=d[1];if(fType.value!=='custom')fProto.value='TCP';fPort.placeholder=d[1]||'e.g. 8080 or 9000-9010';valid(fPort,true);});
    fType.dispatchEvent(new Event('change'));

    function okHost(h){h=h.trim();if(!h||h.length>253)return false;
      var ip=h.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})(?:\/(\d{1,2}))?$/);
      if(ip){for(var i=1;i<5;i++)if(+ip[i]>255)return false;if(ip[5]!==undefined&&(+ip[5]<8||+ip[5]>32))return false;return true;}
      if(/^\d+(\.\d+)*$/.test(h))return false;
      return /^(\*\.)?([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)(\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i.test(h);}
    function okPort(p){p=p.replace(/\s/g,'');if(!p)return false;return p.split(',').every(function(x){var m=x.match(/^(\d{1,5})(?:-(\d{1,5}))?$/);if(!m)return false;var a=+m[1],b=m[2]?+m[2]:a;return a>=1&&b<=65535&&a<=b;});}
    function valid(inp,ok,msg){var w=inp.closest('.fi');w.classList.toggle('err',!ok);if(msg)$('.em',w).textContent=msg;return ok;}
    var EMH='Enter a valid hostname, IPv4 address or CIDR range.';
    function check(){
      var a=valid(fName,!!fName.value.trim()&&fName.value.trim().length<=40);
      var hv=okHost(fHost.value),dup=hv&&apps.some(function(x){return x.host.toLowerCase()===fHost.value.trim().toLowerCase()&&x.port===fPort.value.replace(/\s/g,'');});
      var b=valid(fHost,hv&&!dup,dup?'This host and port are already in your list.':EMH);
      var c=valid(fPort,okPort(fPort.value));
      return a&&b&&c;
    }
    [fName,fHost,fPort].forEach(function(i){i.addEventListener('input',function(){if(i.closest('.fi').classList.contains('err'))check();});});
    function add(o,quiet){
      if(apps.length>=MAXA){XH.toast('Planner holds up to '+MAXA+' apps — talk to us for larger estates');return false;}
      apps.push(o);render();if(!quiet)XH.toast('Added '+o.name);return true;
    }
    plForm.addEventListener('submit',function(e){e.preventDefault();e.stopPropagation();
      if(!check()){var f=$('.fi.err input',plForm);if(f)f.focus();return;}
      if(add({name:fName.value.trim(),type:fType.value,host:fHost.value.trim(),port:fPort.value.replace(/\s/g,''),proto:fProto.value,site:fSite.value,grp:fGrp.value,mode:fMode.dataset.value||'app'})){fName.value='';fHost.value='';fName.focus();}
    });
    $('#plPresets').addEventListener('click',function(e){var b=e.target.closest('[data-pre]');if(!b)return;var p=PRESETS[+b.getAttribute('data-pre')];
      if(apps.some(function(x){return x.name===p.name;})){XH.toast(p.name+' is already in your list');return;}
      add(JSON.parse(JSON.stringify(p)));});
    $('#plApps').addEventListener('click',function(e){var b=e.target.closest('[data-rm]');if(!b)return;var i=+b.getAttribute('data-rm');var n=apps[i].name;apps.splice(i,1);render();XH.toast('Removed '+n);});
    $('#plChk').addEventListener('click',function(e){var li=e.target.closest('li');if(!li)return;var k=li.getAttribute('data-k');doneSet[k]=!doneSet[k];li.classList.toggle('done',!!doneSet[k]);});
    $('#plReset').addEventListener('click',function(){apps=[];doneSet={};[0,1,2].forEach(function(i){apps.push(JSON.parse(JSON.stringify(PRESETS[i])));});$$('.fi.err',plForm).forEach(function(w){w.classList.remove('err');});render();XH.toast('Sample plan restored');});

    function plan(){
      var seg=apps.filter(function(a){return a.mode==='app';}),qa=apps.filter(function(a){return a.mode==='quick';});
      var sites={};apps.forEach(function(a){sites[a.site]=(sites[a.site]||0)+1;});
      var sl=Object.keys(sites),cons=sl.map(function(s){return {s:s,n:sites[s]>=6?3:2,a:sites[s]};});
      var grps=GRPS.filter(function(g){return apps.some(function(a){return a.grp===g;});});
      var adm=seg.filter(function(a){return a.type==='rdp'||a.type==='ssh'||a.type==='db';});
      var dns={};apps.forEach(function(a){if(!/^\d/.test(a.host)&&a.host.indexOf('.')>0){var s=a.host.replace(/^\*\./,'').split('.');s.shift();if(s.length)dns[s.join('.')]=1;}});
      var dl=Object.keys(dns),cn=cons.reduce(function(x,c){return x+c.n;},0);
      var L=[];
      L.push(['lic','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h4M5 17a3.5 3.5 0 016 0"/></svg>','<b>Licences:</b> Entra ID P1/P2 + Private Access for everyone in '+grps.length+(grps.length===1?' group':' groups')+' ('+grps.join(', ')+')']);
      L.push(['con','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>','<b>Install '+cn+' connectors</b> on Windows Server across '+sl.length+(sl.length===1?' site':' sites')+' — outbound 443 only, no inbound rules']);
      if(qa.length)L.push(['qa','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>','<b>Enable Quick Access</b> with '+qa.length+(qa.length===1?' segment: ':' segments: ')+qa.map(function(a){return esc(a.host);}).join(', ')]);
      if(seg.length)L.push(['seg','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>','<b>Create '+seg.length+' per-app '+(seg.length===1?'app':'apps')+'</b> and assign each to its group']);
      if(adm.length)L.push(['adm','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>','<b>Admin protocols:</b> require phishing-resistant MFA + compliant device for '+adm.map(function(a){return esc(a.name);}).join(', ')]);
      L.push(['ca','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>','<b>Conditional Access:</b> '+(seg.length+(qa.length?1:0))+' app '+((seg.length+(qa.length?1:0))===1?'policy':'policies')+' requiring MFA'+(apps.some(function(a){return a.grp==='Vendors';})?' — time-bound for vendors':'')]);
      if(dl.length)L.push(['dns','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>','<b>Private DNS suffixes:</b> '+dl.map(esc).join(', ')]);
      L.push(['gsa','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>','<b>Deploy the Global Secure Access client</b> via Intune to a pilot group']);
      L.push(['pilot','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>','<b>Pilot for a week,</b> review traffic logs, then widen group by group']);
      L.push(['vpn','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>','<b>Retire the VPN:</b> close inbound ports and stop the appliance renewal']);
      return {seg:seg,qa:qa,cons:cons,cn:cn,grps:grps,L:L};
    }
    function render(){
      $('#plCount').textContent=apps.length;
      $('#plApps').innerHTML=apps.length?apps.map(function(a,i){var q=a.mode==='quick';return '<div class="pa'+(q?' q':'')+'"><span class="pi">'+TYPES[a.type][3]+'</span><div style="min-width:0"><b>'+esc(a.name)+'</b><small>'+esc(a.host)+' : '+esc(a.port)+' · '+esc(a.proto)+'</small></div><div class="pm"><span class="tagm">'+(q?'Quick Access':'Per-app')+'</span><span class="pg">'+esc(a.grp)+' · '+esc(a.site)+'</span></div><button class="rm" type="button" data-rm="'+i+'" aria-label="Remove '+esc(a.name)+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg></button></div>';}).join(''):'<div class="pl-empty">No apps yet — use Quick add or the form above.</div>';
      $$('#plPresets [data-pre]').forEach(function(b){var p=PRESETS[+b.getAttribute('data-pre')];b.classList.toggle('used',apps.some(function(x){return x.name===p.name;}));});
      var r=plan();
      tween($('#plSeg'),r.seg.length,String);tween($('#plQa'),r.qa.length,String);tween($('#plCg'),apps.length?r.cons.length:0,String);tween($('#plCn'),apps.length?r.cn:0,String);
      $('#plMap').innerHTML=r.grps.length?r.grps.map(function(g){return '<div class="mp"><div class="mg"><i>'+GIC[g]+'</i>'+esc(g)+'</div><div class="ma">'+apps.filter(function(a){return a.grp===g;}).map(function(a){return '<span'+(a.mode==='quick'?' class="q"':'')+'>'+TYPES[a.type][3]+esc(a.name)+(a.mode==='quick'?' <em>QA</em>':'')+'</span>';}).join('')+'</div></div>';}).join(''):'<div class="pl-none">Add an app to see who can reach what.</div>';
      $('#plCgL').innerHTML=apps.length?r.cons.map(function(c){return '<div class="cgx"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg></i><div>'+esc(c.s)+'<small>'+c.n+' connectors · '+c.a+(c.a===1?' app':' apps')+'</small></div></div>';}).join(''):'<div class="pl-none">One group per site, two connectors minimum.</div>';
      $('#plChk').innerHTML=apps.length?r.L.map(function(x){return '<li data-k="'+x[0]+'" class="'+(doneSet[x[0]]?'done':'')+'"><i>'+x[1]+'</i><span>'+x[2]+'</span></li>';}).join(''):'';
    }
    $('#plDl').addEventListener('click',function(){
      if(!apps.length){XH.toast('Add at least one app first');return;}
      var r=plan(),t='Microsoft Entra Private Access — rollout plan\nPrepared with the XcellHost planner · '+new Date().toLocaleDateString('en-IN')+'\n\nAPPS\n';
      apps.forEach(function(a,i){t+=(i+1)+'. '+a.name+' ['+TYPES[a.type][0]+'] '+a.host+':'+a.port+' '+a.proto+' — '+(a.mode==='quick'?'Quick Access':'Per-app')+' — group: '+a.grp+' — site: '+a.site+'\n';});
      t+='\nACCESS MAP\n';r.grps.forEach(function(g){t+=g+': '+apps.filter(function(a){return a.grp===g;}).map(function(a){return a.name;}).join(', ')+'\n';});
      t+='\nCONNECTOR GROUPS\n';r.cons.forEach(function(c){t+=c.s+': '+c.n+' connectors ('+c.a+' apps)\n';});
      t+='\nROLLOUT CHECKLIST\n';r.L.forEach(function(x,i){t+=(i+1)+'. '+x[2].replace(/<[^>]+>/g,'').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"')+'\n';});
      t+='\nXcellHost · sales@xcellhost.cloud · +91 22 6711 1555\n';
      XH.download('entra-private-access-plan.txt',t,'text/plain');XH.toast('Plan downloaded');
    });
    [0,1,2].forEach(function(i){apps.push(JSON.parse(JSON.stringify(PRESETS[i])));});
    render();
  }

  /* ================= 5. VPN replacement estimator ================= */
  var esU=$('#esU');
  if(esU){
    var esUR=$('#esUR'),ids=['esV','esA','esT','esM','esH','esR'],P1Y=6125;
    function num(id,max){var el=$('#'+id),v=el.value===''?NaN:+el.value,ok=isFinite(v)&&v>=0&&v<=max;el.closest('.fi').classList.toggle('err',!ok);return ok?v:0;}
    function est(){
      var u=Math.max(1,Math.min(5000,Math.round(+esU.value||1)));
      $('#esUL').textContent=u+(u===1?' user':' users');$('#esUs').textContent=u;
      var vpn=num('esV',100000),app=num('esA',100000000),tk=num('esT',100000),mn=num('esM',600),hr=num('esH',100000),rd=num('esR',100);
      var lic=u*vpn*12,help=Math.round(tk*12*mn/60*hr),cur=lic+app+help;
      var pa=u*P.y,p1=$('#esP1').checked?0:u*P1Y,rest=Math.round(help*(1-rd/100)),nw=pa+p1+rest,diff=cur-nw;
      $('#esR1').textContent=XH.inr(lic);$('#esR2').textContent=XH.inr(app);$('#esR3').textContent=XH.inr(help);
      $('#esR4').textContent=XH.inr(pa);$('#esR5').textContent=p1?XH.inr(p1):'already licensed';$('#esR6').textContent=XH.inr(rest);
      $('#esP1Row span').textContent=p1?'Entra ID P1 · '+u+' × ₹6,125':'Entra ID P1 prerequisite';
      tween($('#esCur'),cur);tween($('#esNew'),nw);
      var mx=Math.max(cur,nw,1);$('#esCurB').style.width=(cur/mx*100)+'%';$('#esNewB').style.width=(nw/mx*100)+'%';
      var d=$('#esDiff');d.classList.toggle('neg',diff<0);tween(d,Math.abs(diff));
      $('#esDiffL').textContent=diff>=0?'estimated yearly saving, excl. GST ('+(cur?Math.round(diff/cur*100):0)+'% less)':'more per year than today — in exchange for per-app Zero Trust, MFA and no inbound ports';
    }
    esU.addEventListener('input',function(){var v=Math.max(1,Math.min(5000,+esU.value||1));esUR.value=Math.min(1000,v);XH.fillRange(esUR);est();});
    esUR.addEventListener('input',function(){esU.value=esUR.value;est();});
    ids.forEach(function(id){$('#'+id).addEventListener('input',est);});
    $('#esP1').addEventListener('change',est);
    est();
  }

  if (!heroMode) {
  /* ================= 6. Seat calculator + plan card ================= */
  var scN=$('#scN');
  $('#pcList').textContent=XH.inr(P.listM);$('#pcM').textContent=XH.inr(P.m);$('#pcY').textContent=XH.inr(P.y);$('#pcSave').textContent='Save up to '+Math.max(saveY,saveM)+'%';
  $('#pfL').textContent=XH.inr(P.listY);$('#pfX').textContent=XH.inr(P.y);$('#pfS').textContent=XH.inr(P.listY-P.y)+' ('+saveY+'%)';
  if(scN){
    var scR=$('#scR'),scB=$('#scB');
    $('#scBm').textContent=XH.inr(P.m)+' / user / mo · save '+saveM+'%';
    $('#scBy').textContent=XH.inr(P.y)+' / user / yr · save '+saveY+'%';
    function seats(){return Math.max(1,Math.min(1000,Math.round(+scN.value||1)));}
    function calc(){
      var n=seats(),b=scB.dataset.value||'y',per=P[b],list=b==='y'?P.listY:P.listM,tot=n*per,lt=n*list,sv=lt-tot,gst=Math.round(tot*.18);
      $('#scNL').textContent=n+(n===1?' user':' users');
      $('#scLine').textContent=n+(n===1?' user':' users')+' × '+XH.inr(per)+(b==='y'?' / yr':' / mo');
      $('#scPer').textContent=XH.inr(tot);
      $('#scList').textContent=XH.inr(lt);$('#scList').parentNode.previousElementSibling.textContent='Microsoft list for '+n+(n===1?' user':' users');
      $('#scSave').textContent='−'+XH.inr(sv)+' ('+Math.round(sv/lt*100)+'%)';
      $('#scGst').textContent=XH.inr(gst);tween($('#scPay'),tot+gst);
      $('#scSub').textContent=(b==='y'?'per year, paid upfront':'per month, billed monthly')+' · excl. GST';
      $('#scBh').textContent=b==='y'?'Yearly is '+XH.inr(P.m*12-P.y)+' per user cheaper than 12 monthly payments.':'Yearly upfront would cost '+XH.inr(P.y)+' per user instead of '+XH.inr(P.m*12)+'.';
      tween($('#scTot'),tot);
      return {n:n,b:b,per:per,tot:tot};
    }
    scN.addEventListener('input',function(){scR.value=seats();XH.fillRange(scR);calc();});
    scR.addEventListener('input',function(){scN.value=scR.value;calc();});
    scB.addEventListener('change',calc);
    calc();
    $('#scAdd').addEventListener('click',function(){var c=calc();
      XH.cart.add({key:'entra-private-access-'+(c.b==='y'?'yearly':'monthly')+'-'+c.n,name:'Microsoft Entra Private Access — '+c.n+(c.n===1?' seat':' seats'),sub:(c.b==='y'?'Yearly':'Monthly')+' · '+XH.inr(c.per)+'/seat',price:c.tot,qty:1});});
  }

  /* ================= 7. Entra family strip ================= */
  var fam=$('#famGrid');
  if(fam){
    var F=[['xcellhost-entra-id-p1','Entra ID P1','Conditional Access, MFA and SSO — the prerequisite',528,'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>',''],
           ['xcellhost-entra-id-p2','Entra ID P2','Risk-based sign-in protection and PIM',755,'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>','n'],
           ['xcellhost-entra-internet-access','Internet Access','Identity-aware secure web gateway',378,'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>','o'],
           ['xcellhost-entra-id-governance','ID Governance','Joiner-mover-leaver workflows and access reviews',528,'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>','g'],
           ['xcellhost-entra-workload-id','Workload ID','Protect apps, service principals and AI agents',228,'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>',''],
           ['xcellhost-entra-suite','Entra Suite','Private + Internet Access, Governance and more',910,'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>','n']];
    fam.innerHTML=F.map(function(f,i){return '<a class="fm rv" data-d="'+(i%3)+'" href="'+f[0]+'.html"><span class="ico '+f[5]+'">'+f[4]+'</span><b>'+f[1]+'<em>from '+XH.inr(f[3])+'/mo</em></b><span class="ds">'+f[2]+'</span></a>';}).join('');
    XH.observe(fam);
  }

  }

  $$('a[href]').forEach(a=>{const h=a.getAttribute('href');if(h.startsWith('xcellhost-entra-'))a.setAttribute('href',h.includes('workload-id')?'/microsoft-entra-workload-id':h.includes('internet-access')?'/microsoft-entra-internet-access':h.includes('private-access')?'/microsoft-entra-private-access':'/microsoft-entra-id');});
  return () => { disposed=true;root.removeEventListener('click',click);observers.forEach(o=>o.disconnect());scheduledTimers.forEach(window.clearTimeout);frames.forEach(window.cancelAnimationFrame); };
}
