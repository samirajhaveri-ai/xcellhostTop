// @ts-nocheck
// Adapted interactive demos from the supplied HTML; queries stay inside this component.
export function initializeIdP2(root: ShadowRoot, heroMode: boolean, quote: (topic: string) => void, add: (line: any) => void): () => void {
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
    const callback = e.target.closest('[data-open]'); if (callback) { e.preventDefault(); quote(callback.dataset.topic || 'Microsoft Entra ID P2'); }
    const link = e.target.closest('a[href]'); if (link && link.getAttribute('href').startsWith('#')) { const target = root.getElementById(link.getAttribute('href').slice(1)); if (target) {e.preventDefault(); target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});} }
    const copy = e.target.closest('[data-copy]'); if (copy) navigator.clipboard?.writeText(copy.dataset.copy);
  };
  root.addEventListener('click', click);

  XH.observe = () => {};
  XH.toast = message => { let notice=$('.demo-toast');if(!notice){notice=document.createElement('div');notice.className='demo-toast';notice.setAttribute('role','status');root.querySelector('.p2-shell').appendChild(notice);}notice.textContent=message; };
  XH.download = (name,content,type) => { const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); };
  const heat={burst:()=>{}};
  /* ================= 2. Hero visual: identity-risk console ================= */
  var rcon=$('#rcon');
  if(rcon){
    var evs=$$('.ev',rcon),rss=$$('.rs',rcon),log=$('#rLog'),gF=$('#gFill'),gN=$('#gNeedle'),LEN=252;
    var LV={l:{p:.12,t:'Low'},m:{p:.55,t:'Medium'},h:{p:.93,t:'High'}};
    function lvl(k){var v=LV[k];rcon.setAttribute('data-lv',k);gF.style.strokeDashoffset=(LEN*(1-v.p)).toFixed(1);gN.style.transform='rotate('+(-90+v.p*180).toFixed(1)+'deg)';$('#rLvl').textContent=v.t;}
    function lg(html,cls){log.className='rlog'+(cls?' '+cls:'');log.innerHTML=html;}
    function st(t){$('#rState').textContent=t;}
    function rs(i,c){rss[i].classList.remove('act','fin');if(c)rss[i].classList.add(c);}
    var SEQ=[
      {d:600,f:function(){evs.forEach(function(e){e.classList.remove('on');});rss.forEach(function(x){x.classList.remove('act','fin');});rcon.classList.remove('alarm');$('#rBadge').classList.remove('on');$('#rLive').textContent='Monitoring';lvl('l');st('No active detections');lg('<em>ID Protection</em> evaluating sign-ins for yourco.in…');}},
      {d:1100,f:function(){evs[0].classList.add('on');st('1 sign-in today · no risk');lg('<em>09:02</em> Mumbai · known device · risk none → allowed');}},
      {d:2200,f:function(){evs[1].classList.add('on');lvl('m');st('Sign-in risk: medium');lg('Sign-in risk medium → policy: require MFA','w');heat.burst(false);}},
      {d:1900,f:function(){evs[2].classList.add('on');lvl('h');rcon.classList.add('alarm');$('#rLive').textContent='At risk';st('2 detections · account may be compromised');lg('User risk high → policy: secure password change','r');heat.burst(true);}},
      {d:1600,f:function(){rs(0,'act');lg('<em>Prompting Priya</em> · Authenticator number match…','w');}},
      {d:1500,f:function(){rs(0,'fin');rs(1,'act');lg('✓ MFA passed <em>· now changing password…</em>');}},
      {d:1600,f:function(){rs(1,'fin');rs(2,'act');lg('✓ Password changed <em>· old sessions revoked</em>');}},
      {d:1100,f:function(){rs(2,'fin');evs[3].classList.add('on');lvl('l');rcon.classList.remove('alarm');$('#rLive').textContent='Monitoring';st('Remediated by Priya · 09:17');$('#rBadge').classList.add('on');lg('✓ Risk remediated <em>· no admin ticket needed</em>');}},
      {d:4200,f:function(){}}
    ];
    if(reduce){SEQ.slice(0,8).forEach(function(s){s.f();});}
    else{
      var si=0,tmr=null,run=false;
      function nx(){if(!run){tmr=null;return;}SEQ[si].f();si=(si+1)%SEQ.length;tmr=setTimeout(nx,SEQ[si].d);}
      SEQ[0].f();si=1;
      XH.whenVisible(rcon,function(v){run=v;if(v&&!tmr)tmr=setTimeout(nx,SEQ[si].d);});
    }
  }

  /* ================= 3. Risk simulator ================= */
  var DETS=[
    {k:'leak',n:'Leaked credentials',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/></svg>',t:'user',lv:3,m:'Offline',p:'This user’s username and password turned up in a breach dump or on the dark web.'},
    {k:'anon',n:'Anonymous IP address',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',t:'sign',lv:2,m:'Real-time',p:'The sign-in came through Tor or an anonymising VPN that hides where it really is.'},
    {k:'travel',n:'Atypical travel',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',t:'sign',lv:2,m:'Offline',p:'Two sign-ins from places too far apart to reach in the time between them.'},
    {k:'unfam',n:'Unfamiliar sign-in properties',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',t:'sign',lv:1,m:'Real-time',p:'New device, browser, location or network compared with this user’s history.'},
    {k:'spray',n:'Password spray',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3"/></svg>',t:'sign',lv:3,m:'Offline',p:'One common password tried across many accounts — and it worked on this one.'},
    {k:'mal',n:'Malicious IP address',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>',t:'sign',lv:2,m:'Offline',p:'The IP has a high failure rate or is flagged as hostile by threat intelligence.'}
  ];
  var LN=['None','Low','Medium','High'],LC=['','l-l','l-m','l-h'];
  var dets=$('#dets');
  if(dets){
    dets.innerHTML=DETS.map(function(d){return '<button type="button" class="det" data-k="'+d.k+'" aria-pressed="false"><span class="di">'+d.ic+'</span><span class="db"><span class="dn"><b>'+d.n+'</b><span class="sw"></span></span><p>'+d.p+'</p><span class="dm"><span>'+(d.t==='user'?'User risk':'Sign-in risk')+' · '+d.m+'</span><span class="lt'+d.lv+'">'+LN[d.lv]+'</span></span></span></button>';}).join('');
    var on={},fixed=false,act='allow',pol=$('#polSet'),vd=$('#verdict'),fixB=$('#simFix');
    var ICO={allow:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',low:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',mfa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>',pwd:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',blk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'};
    function meter(id,l,f){var m=$(id);m.setAttribute('data-l',f?0:l);m.classList.toggle('fixed',!!f);$('b',m).textContent=f?'Cleared':LN[l];}
    function compute(){
      var s=0,u=0,ns=0,names=[];
      DETS.forEach(function(d){if(!on[d.k])return;names.push(d.n);if(d.t==='sign'){ns++;s=Math.max(s,d.lv);}else u=Math.max(u,d.lv);});
      if(ns>=2&&s<3)s++;
      u=Math.max(u,s);
      return {s:s,u:u,names:names};
    }
    function decide(r,p){
      if(p==='strict'){if(r.s>=3)return 'blk';if(r.u>=2)return 'pwd';if(r.s>=1)return 'mfa';return 'allow';}
      if(r.u>=3)return 'pwd';if(r.s>=2)return 'mfa';if(r.s===1)return 'low';return 'allow';
    }
    var TXT={
      allow:['Allow','No detections. The sign-in goes through under your normal P1 Conditional Access rules.'],
      low:['Allow — risk logged','Low sign-in risk isn’t challenged in the recommended set. It appears in the risky sign-ins report for review.'],
      mfa:['Require MFA','Sign-in risk is elevated. A successful MFA proves it’s really the user and clears the sign-in risk on the spot.'],
      pwd:['Require secure password change','User risk is high, so the account may be compromised. The user passes MFA, sets a new password and the risk clears itself.'],
      blk:['Block access','High sign-in risk is blocked outright. An admin reviews it, then confirms compromise or dismisses the risk.']
    };
    var FIX={
      mfa:['MFA passed — sign-in allowed','The user approved the Authenticator prompt. Sign-in risk is remediated and logged; no help-desk call.'],
      pwd:['Password changed — risk remediated','MFA, then a new password. User risk drops to none, old sessions are revoked and the report shows Remediated.'],
      blk:['Admin confirmed compromise','The admin reset the password and revoked sessions from the risky users report. The user signs back in with MFA and the new password.']
    };
    function render(pop){
      var r=compute(),p=pol.dataset.value||'rec';act=decide(r,p);
      meter('#mSign',r.s,fixed);meter('#mUser',r.u,fixed);
      var t=fixed?FIX[act]:TXT[act];
      vd.className='verdict '+(fixed?'':(act==='low'?'':act));if(fixed)vd.classList.add('fixedv');
      $('#vIco').innerHTML=fixed?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>':ICO[act];
      if(fixed){$('#vIco').style.background='#16a34a';vd.style.borderColor='rgba(22,163,74,.6)';}else{$('#vIco').style.background='';vd.style.borderColor='';}
      $('#vT').textContent=t[0];$('#vP').textContent=t[1];
      if(pop&&!reduce){vd.classList.remove('pop');void vd.offsetWidth;vd.classList.add('pop');}
      var lv=Math.max(r.s,r.u),row=$('#repRow');
      $('.lv',row).textContent=(lv&&!fixed)?LN[lv]:'—';$('.lv',row).className='lv '+(fixed?'':LC[lv]);
      var sta=$('.sta',row);
      if(!lv){sta.textContent='None';sta.className='sta';}else if(fixed){sta.textContent='Remediated';sta.className='sta ok';}else{sta.textContent=act==='low'?'At risk · low':'At risk';sta.className='sta risk';}
      $('.dtl',row).textContent=r.names.length?r.names.join(', '):'—';$('.dtl',row).title=r.names.join(', ');
      if(pop&&!reduce){row.classList.remove('flash-row');void row.offsetWidth;row.classList.add('flash-row');}
      var can=!fixed&&(act==='mfa'||act==='pwd'||act==='blk');
      fixB.disabled=!can;
      fixB.innerHTML='<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg> '+(act==='blk'?'Play admin’s response':'Play user’s response');
    }
    dets.addEventListener('click',function(e){var b=e.target.closest('.det');if(!b)return;var k=b.getAttribute('data-k');on[k]=!on[k];b.classList.toggle('on',on[k]);b.setAttribute('aria-pressed',on[k]);fixed=false;render(true);});
    pol.addEventListener('change',function(){fixed=false;render(true);});
    fixB.addEventListener('click',function(){fixed=true;render(true);XH.toast(act==='blk'?'Admin remediated the risky user':'User self-remediated — no ticket raised');});
    var PRE={phish:['anon','unfam'],leak:['leak','travel'],none:[]};
    $$('[data-preset]').forEach(function(b){b.addEventListener('click',function(){var l=PRE[b.getAttribute('data-preset')];on={};$$('.det',dets).forEach(function(x){var k=x.getAttribute('data-k'),v=l.indexOf(k)>-1;on[k]=v;x.classList.toggle('on',v);x.setAttribute('aria-pressed',v);});fixed=false;render(true);});});
    render(false);
  }

  /* ================= 4. PIM just-in-time demo ================= */
  var form=$('#pimForm');
  if(form){
    var ROLES={ga:{n:'Global Administrator',a:true},ex:{n:'Exchange Administrator',a:true},ua:{n:'User Administrator',a:false}};
    var dur=$('#pimDur'),jt=$('#pimJ'),go=$('#pimGo'),au=$('#auList'),idle=$('#pfIdle'),live=$('#pfLive'),msg=$('#pfMsg');
    var clk=10*60+30,busy=false,timers=[],raf=0,cur=null;
    function hm(m){m=Math.floor(m)%1440;var h=Math.floor(m/60),mi=m%60;return (h<10?'0':'')+h+':'+(mi<10?'0':'')+mi;}
    function durL(){var v=+dur.value;$('#pimDurL').textContent=v+(v===1?' hour':' hours');}
    dur.addEventListener('input',durL);durL();
    function audit(a,sm,r,rc){var e=$('.empty',au);if(e)e.remove();var li=document.createElement('li');li.innerHTML='<span class="t">'+hm(clk)+'</span><span class="a">'+a+'<small>'+sm+'</small></span><span class="r '+(rc||'')+'">'+r+'</span>';au.insertBefore(li,au.firstChild);}
    function step(k,c,t){var s=$('.pfs[data-s="'+k+'"]');s.classList.remove('act','fin','skip','exp');if(c)s.classList.add(c);$('small',s).textContent=t;}
    function view(w){idle.hidden=w!=='idle';live.hidden=w!=='live';msg.hidden=w!=='msg';}
    function say(cls,ic,b,p,extra){msg.className='pf-msg '+cls;msg.innerHTML='<div class="mi">'+ic+'</div><b>'+b+'</b><p>'+p+'</p>'+(extra||'');view('msg');}
    function later(fn,ms){timers.push(setTimeout(fn,reduce?Math.min(ms,150):ms));}
    function reset(){timers.forEach(clearTimeout);timers=[];cancelAnimationFrame(raf);busy=false;cur=null;form.classList.remove('busy');go.disabled=false;['mfa','appr','act'].forEach(function(k){step(k,'','Waiting');});view('idle');}
    form.addEventListener('submit',function(e){
      e.preventDefault();if(busy)return;
      var w=$('#pimJw'),j=jt.value.trim();
      if(j.length<10){w.classList.add('err');jt.focus();return;}
      w.classList.remove('err');
      var role=ROLES[$('#pimRole').dataset.value||'ga'],h=+dur.value;
      busy=true;form.classList.add('busy');go.disabled=true;
      cur={role:role,h:h};
      audit('Activation requested',role.n+' · '+h+' h · “'+j.replace(/</g,'&lt;')+'”','Request');
      step('mfa','act','Verifying…');step('appr','','Waiting');step('act','','Waiting');
      var num=10+Math.floor(Math.random()*89);
      say('wait','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>','Approve the sign-in on your phone','PIM requires MFA before any role activation.','<span class="num">'+num+'</span>');
      later(function(){
        clk+=1;step('mfa','fin','Authenticator ✓');audit('MFA satisfied','Number match · Microsoft Authenticator','OK','ok');
        if(role.a){
          step('appr','act','With approver…');
          say('wait','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>','Waiting for approval','Security team (sample approver) has been notified by email and Teams.');
          later(function(){clk+=4;step('appr','fin','Approved');audit('Request approved','by Security approver (sample)','OK','ok');activate();},2300);
        }else{step('appr','skip','Not required');later(activate,500);}
      },1700);
    });
    function activate(){
      var total=cur.h*3600,left=total,start=clk;
      step('act','act','Live now');
      audit('Role activated',cur.role.n+' · until '+hm(start+cur.h*60),'Active','ok');
      $('#pfRole').textContent=cur.role.n+' · active';$('#pfUntil').textContent='Expires '+hm(start+cur.h*60)+' IST';
      live.classList.remove('low');view('live');
      var bar=$('#pfBar'),cd=$('#pfCd'),prev=performance.now();
      function paint(){var s=Math.max(0,Math.ceil(left)),hh=Math.floor(s/3600),mm=Math.floor(s%3600/60),ss=s%60;cd.textContent=(hh<10?'0':'')+hh+':'+(mm<10?'0':'')+mm+':'+(ss<10?'0':'')+ss;bar.style.transform='scaleX('+(left/total).toFixed(4)+')';live.classList.toggle('low',left/total<.15);}
      paint();
      function tick(now){var dt=Math.min(100,now-prev);prev=now;left-=dt*.6;clk=start+(total-left)/60;paint();if(left<=0){clk=start+cur.h*60;finish(true);return;}raf=requestAnimationFrame(tick);}
      if(reduce){left=0;clk=start+cur.h*60;paint();finish(true);}else raf=requestAnimationFrame(tick);
    }
    function finish(auto){
      cancelAnimationFrame(raf);
      step('act','exp',auto?'Expired':'Deactivated');
      audit(auto?'Role assignment expired':'Role deactivated',auto?'Removed automatically · no admin action':'Ended early by the user','Ended','ex');
      say('end','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',auto?'Role expired on time':'Role deactivated','Back to zero standing admin access. Everything that happened is in the audit log.','<button type="button" class="btn btn-ghost btn-sm" id="pfNew"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg> New request</button>');
      busy=false;form.classList.remove('busy');go.disabled=false;
    }
    $('#pfStop').addEventListener('click',function(){if(cur)finish(false);});
    msg.addEventListener('click',function(e){if(e.target.closest('#pfNew'))reset();});
    $('#auClear').addEventListener('click',function(){au.innerHTML='<li class="empty">Activity will appear here.</li>';});
    form.addEventListener('click',function(e){if(e.target.closest('.seg button')&&!busy&&$('.pfs.exp'))reset();});
  }

  if (!heroMode) {
  /* ================= 5. Seat calculator + plan card ================= */
  var PRICE={m:755,y:8765},LIST_M=830,LIST_Y=LIST_M*12;
  function pct(p,l){return Math.round((l-p)/l*100);}
  var yrSave=LIST_Y-PRICE.y;
  var pill=$('#pcPill');if(pill)pill.textContent='Save '+XH.inr(yrSave)+'/yr · '+pct(PRICE.y,LIST_Y)+'%';
  $('#pcList').textContent=XH.inr(LIST_M);$('#pcMo').textContent=XH.inr(PRICE.m);$('#pcYr').textContent=XH.inr(PRICE.y);
  $('#sBm').textContent=XH.inr(PRICE.m)+'/mo · save '+pct(PRICE.m,LIST_M)+'%';
  $('#sBy').textContent=XH.inr(PRICE.y)+'/yr · save '+pct(PRICE.y,LIST_Y)+'%';
  var sN=$('#sN'),sR=$('#sR'),bill=$('#sBill'),shown=0,tw=null;
  function tween(el,to){if(reduce){el.textContent=XH.inr(to);shown=to;return;}var from=shown,t0=null;cancelAnimationFrame(tw);function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/450),e=1-Math.pow(1-p,3);el.textContent=XH.inr(Math.round(from+(to-from)*e));if(p<1)tw=requestAnimationFrame(f);else shown=to;}tw=requestAnimationFrame(f);}
  function clampN(v){return Math.max(1,Math.min(1000,Math.round(+v)||1));}
  function calc(){
    var n=clampN(sN.value),b=bill.dataset.value||'y',per=PRICE[b],tot=per*n,list=(b==='y'?LIST_Y:LIST_M)*n,gst=Math.round(tot*.18);
    $('#sNL').textContent=n+(n===1?' user':' users');$('#oN').textContent=n;
    $('#oSub').textContent=(b==='y'?'per year':'per month')+' for '+n+(n===1?' user':' users')+', excl. GST';
    $('#oPer').textContent=XH.inr(per)+(b==='y'?' / yr':' / mo');
    $('#oList').textContent=XH.inr(list);
    $('#oSave').textContent=XH.inr(list-tot)+' ('+pct(tot,list)+'%)';
    $('#oGst').textContent=XH.inr(gst);$('#oPay').textContent=XH.inr(tot+gst);
    $('#vsMs').textContent=XH.inr(list);$('#vsXh').textContent=XH.inr(tot);$('#vsSave').textContent='−'+XH.inr(list-tot);
    $('#vsXhI').style.transform='scaleX('+(tot/list).toFixed(4)+')';
    tween($('#oTot'),tot);
    return {n:n,b:b,per:per,tot:tot};
  }
  sN.addEventListener('input',function(){var v=+sN.value;if(v>=1&&v<=1000){sR.value=v;XH.fillRange(sR);}calc();});
  sN.addEventListener('change',function(){sN.value=clampN(sN.value);sR.value=sN.value;XH.fillRange(sR);calc();});
  sR.addEventListener('input',function(){sN.value=sR.value;calc();});
  bill.addEventListener('change',function(){calc();XH.flash($('#oTot'));});
  calc();
  $('#oAdd').addEventListener('click',function(){var c=calc();
    XH.cart.add({key:'entra-p2-'+(c.b==='y'?'yearly':'monthly')+'-'+c.n,name:'Microsoft Entra ID P2 — '+c.n+(c.n===1?' seat':' seats'),sub:(c.b==='y'?'Yearly · ':'Monthly · ')+XH.inr(c.per)+'/seat',price:c.tot,qty:1});});

  }

  return () => { disposed=true;root.removeEventListener("click",click);observers.forEach(o=>o.disconnect());scheduledTimers.forEach(window.clearTimeout);frames.forEach(window.cancelAnimationFrame); };
}
