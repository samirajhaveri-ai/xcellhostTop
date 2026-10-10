// @ts-nocheck
// Adapted interactive demos from the supplied HTML; queries stay inside this component.
export function initializeIdP1(root: ShadowRoot, heroMode: boolean, quote: (topic: string) => void, add: (line: any) => void): () => void {
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
    const callback = e.target.closest('[data-open]'); if (callback) { e.preventDefault(); quote(callback.dataset.topic || 'Microsoft Entra ID P1'); }
    const link = e.target.closest('a[href]'); if (link && link.getAttribute('href').startsWith('#')) { const target = root.getElementById(link.getAttribute('href').slice(1)); if (target) {e.preventDefault(); target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});} }
    const tab=e.target.closest('[data-tabs] [data-tab]');if(tab){const bar=tab.closest('[data-tabs]'),group=bar.dataset.tabs,key=tab.dataset.tab;$$('[data-tab]',bar).forEach(b=>{const active=b===tab;b.classList.toggle('on',active);b.setAttribute('aria-selected',String(active));});$$('[data-panel]').filter(p=>p.dataset.group===group).forEach(p=>{const active=p.dataset.panel===key;p.classList.toggle('on',active);p.hidden=!active;});}
    const copy = e.target.closest('[data-copy]'); if (copy) navigator.clipboard?.writeText(copy.dataset.copy);
  };
  root.addEventListener('click', click);

  XH.observe = () => {};
  XH.toast = message => { let notice=$('.demo-toast');if(!notice){notice=document.createElement('div');notice.className='demo-toast';notice.setAttribute('role','status');root.querySelector('.p1-shell').appendChild(notice);}notice.textContent=message; };
  XH.download = (name,content,type) => { const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); };
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}

  /* ================= 2. Hero visual: Conditional Access decision feed ================= */
  var ORDER=['legacy','geo','admin','unman','ok'];
  var FEED=[
    {n:'Priya',r:'Finance',app:'Microsoft 365',dv:['monitor','Managed laptop'],loc:'Mumbai',cl:'Browser',k:'ok',t:'Access granted',s:'Compliant device · token issued'},
    {n:'Arjun',r:'Sales',app:'Salesforce',dv:['phone','Personal phone'],loc:'Pune',cl:'Mobile app',bad:'dv',k:'unman',t:'MFA approved',s:'Number match on Authenticator',num:'42'},
    {n:'Kiran',r:'Operations',app:'Exchange Online',dv:['monitor','Office PC'],loc:'Delhi',cl:'IMAP · legacy',bad:'cl',k:'legacy',t:'Blocked',s:'Legacy protocols can’t do MFA'},
    {n:'Neha',r:'Global admin',app:'Azure portal',dv:['monitor','Managed laptop'],loc:'Bengaluru',cl:'Browser',k:'admin',t:'MFA approved',s:'Admins always verify',num:'17'},
    {n:'Sam',r:'Marketing',app:'Microsoft 365',dv:['globe','Unknown browser'],loc:'Blocked country',cl:'Browser',bad:'loc',k:'geo',t:'Blocked',s:'Country not on the allow-list'},
    {n:'Meera',r:'HR',app:'Teams',dv:['phone','Managed phone'],loc:'Chennai',cl:'Mobile app',k:'ok',t:'Access granted',s:'Compliant device · token issued'}
  ];
  var EFF={legacy:'bl',geo:'bl',admin:'mf',unman:'mf',ok:'gr'};
  var IC={dv:{monitor:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>'},pin:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',app:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>',cl:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>',
          gr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',mf:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>',bl:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>',ok:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'};
  var feed=$('#caFeed'),cfIn=$('#cfIn'),cfOut=$('#cfOut'),cfStat=$('#cfStat'),rows=$$('#cfPol .pr');
  var cnt={G:0,M:0,B:0},fi=0,vis=true,timer=null;
  function siHTML(x){
    return '<div class="si"><div class="av">'+x.n.charAt(0)+'</div><div class="wh"><b>'+x.n+'<small>'+x.r+' · '+x.app+'</small></b><div class="sg">'+
      '<span'+(x.bad==='dv'?' class="bad"':'')+'>'+IC.dv[x.dv[0]]+x.dv[1]+'</span>'+
      '<span'+(x.bad==='loc'?' class="bad"':'')+'>'+IC.pin+x.loc+'</span>'+
      '<span'+(x.bad==='cl'?' class="bad"':'')+'>'+IC.cl+x.cl+'</span></div></div></div>';
  }
  function bump(id,key){cnt[key]++;var el=$('#'+id);el.textContent=cnt[key].toLocaleString('en-IN');el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function decide(x,cls){
    cfOut.className='cf-out '+cls;
    if(cls==='mf'){
      cfOut.innerHTML='<div class="dc"><span class="di">'+IC.mf+'</span><span class="tx"><b>MFA required</b><small>Approve on phone · enter '+x.num+'</small></span><span class="cf-ph" id="cfPh"><span class="nm">'+x.num+'</span><span class="ap">APPROVE</span><span class="ok"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></span></span></div>';
      var ph=$('#cfPh');
      if(reduce){ph.classList.add('up','done');setDone();return 0;}
      setTimeout(function(){ph.classList.add('up');},250);
      setTimeout(function(){ph.classList.add('done');setDone();},1500);
      return 1500;
    }
    cfOut.innerHTML='<div class="dc"><span class="di">'+IC[cls]+'</span><span class="tx"><b>'+x.t+'</b><small>'+x.s+'</small></span></div>';
    if(cls==='gr')bump('ctG','G');else bump('ctB','B');
    return 0;
    function setDone(){var tx=$('.tx',cfOut);if(tx)tx.innerHTML='<b>'+x.t+'</b><small>'+x.s+'</small>';var di=$('.di',cfOut);if(di)di.innerHTML=IC.ok;cfOut.className='cf-out gr';bump('ctM','M');}
  }
  function resetRows(){rows.forEach(function(r){r.className='pr';});}
  function later(fn,ms){timer=setTimeout(function run(){if(!vis){timer=setTimeout(run,300);return;}fn();},ms);}
  function runOne(){
    var x=FEED[fi%FEED.length];fi++;
    resetRows();cfOut.className='cf-out';cfOut.innerHTML='<span class="dm">Evaluating…</span>';
    cfIn.innerHTML=siHTML(x);var si=$('.si',cfIn);void si.offsetWidth;si.classList.add('in');
    cfStat.textContent='sign-in from '+x.n;
    var target=ORDER.indexOf(x.k),i=0;
    function scan(){
      rows.forEach(function(r){r.classList.remove('scan');});
      var r=rows[i];
      if(i<target){r.classList.add('scan');later(function(){r.classList.remove('scan');r.classList.add('skip');i++;scan();},300);return;}
      r.classList.add('hit',EFF[x.k]);rows.forEach(function(o,j){if(j>target)o.classList.add('skip');});
      cfStat.textContent='matched policy '+(target+1);
      var extra=decide(x,EFF[x.k]);
      later(function(){si.classList.add('out');later(runOne,420);},1700+extra);
    }
    later(scan,600);
  }
  if(feed){
    if(reduce){
      var x=FEED[1];cfIn.innerHTML=siHTML(x);$('.si',cfIn).classList.add('in');
      rows.forEach(function(r,j){if(j<3)r.classList.add('skip');});rows[3].classList.add('hit','mf');rows[4].classList.add('skip');
      cfStat.textContent='matched policy 4';decide(x,'mf');
    } else {
      XH.whenVisible(feed,function(v){vis=v;});
      setTimeout(runOne,900);
    }
  }

  /* ================= 3. Conditional Access policy builder ================= */
  var SIM=[
    {n:'Priya',tag:'Finance',grp:'finance',app:'m365',appL:'Microsoft 365',plat:'windows',compliant:1,hybrid:1,devL:'Windows laptop · compliant',india:1,trusted:1,locL:'Mumbai office',cl:'browser',clL:'Browser'},
    {n:'Arjun',tag:'Admin',admin:1,app:'m365',appL:'Microsoft 365 admin centre',plat:'macos',devL:'Personal Mac · unmanaged',india:1,trusted:0,locL:'Bengaluru, home',cl:'modern',clL:'Desktop app'},
    {n:'Kiran',tag:'Member',app:'m365',appL:'Exchange Online',plat:'windows',compliant:1,hybrid:1,devL:'Office PC · compliant',india:1,trusted:1,locL:'Delhi branch',cl:'legacy',clL:'IMAP mail client'},
    {n:'Sara',tag:'Guest',guest:1,app:'sf',appL:'Salesforce',plat:'ios',devL:'iPhone · unmanaged',india:0,trusted:0,locL:'Dubai',cl:'modern',clL:'Mobile app'},
    {n:'Neha',tag:'Finance',grp:'finance',app:'m365',appL:'Outlook mobile',plat:'android',approved:1,devL:'Android · approved app',india:1,trusted:0,locL:'Pune, travelling',cl:'modern',clL:'Mobile app'}
  ];
  var L={users:{all:'all users',admins:'admins',guests:'guests',finance:'the Finance group'},
         apps:{m365:'Microsoft 365',sf:'Salesforce',all:'any cloud app'},
         loc:{any:'any location',outIndia:'outside India',outTrusted:'outside trusted IPs'},
         plat:{windows:'Windows',macos:'macOS',ios:'iOS',android:'Android'},
         cli:{browser:'a browser',modern:'mobile & desktop apps',legacy:'legacy auth clients'},
         ctl:{mfa:'MFA',compliant:'a compliant device',hybrid:'a hybrid-joined device',approved:'an approved client app'},
         freq:{'0':'',"4h":'every 4 hours','1d':'every day','7d':'every 7 days'}};
  var TPL={
    admins:{name:'Require MFA for admins',users:'admins',apps:'all',loc:'any',plat:[],cli:['browser','modern','legacy'],mode:'grant',ctl:['mfa'],req:'all',freq:'4h'},
    legacy:{name:'Block legacy authentication',users:'all',apps:'all',loc:'any',plat:[],cli:['legacy'],mode:'block',ctl:[],req:'all',freq:'0'},
    finance:{name:'Require compliant device for Finance',users:'finance',apps:'all',loc:'any',plat:[],cli:['browser','modern'],mode:'grant',ctl:['compliant','hybrid'],req:'one',freq:'1d'}
  };
  var cab=$('#cab');
  if(cab){
    var segU=$('#pUsers'),segA=$('#pApps'),segL=$('#pLoc'),segM=$('#pMode'),segR=$('#pReq'),segF=$('#pFreq'),
        pkP=$('#pPlat'),pkC=$('#pCli'),ctlBox=$('#pCtl'),simEl=$('#sim'),applying=false,tplName=null,prevOut={};
    function picked(pk){return $$('button.on',pk).map(function(b){return b.getAttribute('data-v');});}
    function setSeg(s,v){var b=$('button[data-v="'+v+'"]',s);if(b&&!b.classList.contains('on'))b.click();}
    function setPk(pk,vals){$$('button',pk).forEach(function(b){var o=vals.indexOf(b.getAttribute('data-v'))>-1;b.classList.toggle('on',o);b.setAttribute('aria-pressed',o);});}
    function state(){return {users:segU.dataset.value,apps:segA.dataset.value,loc:segL.dataset.value,plat:picked(pkP),cli:picked(pkC),mode:segM.dataset.value,
      ctl:$$('input:checked',ctlBox).map(function(i){return i.value;}),req:segR.dataset.value,freq:segF.dataset.value};}
    function listJoin(a,w){return a.length<2?a.join(''):a.slice(0,-1).join(', ')+' '+w+' '+a[a.length-1];}
    function evalOne(p,s){
      var u=s.users==='all'||(s.users==='admins'&&p.admin)||(s.users==='guests'&&p.guest)||(s.users==='finance'&&p.grp==='finance');
      if(!u)return {o:'n',w:'User not targeted'};
      if(!(s.apps==='all'||s.apps===p.app))return {o:'n',w:'App not targeted'};
      if(s.loc==='outIndia'&&p.india)return {o:'n',w:'Signing in from India'};
      if(s.loc==='outTrusted'&&p.trusted)return {o:'n',w:'On a trusted IP'};
      if(s.plat.length&&s.plat.indexOf(p.plat)<0)return {o:'n',w:'Platform not targeted'};
      var cli=s.cli.length?s.cli:['browser','modern','legacy'];
      if(cli.indexOf(p.cl)<0)return {o:'n',w:'Client type not targeted'};
      if(s.mode==='block')return {o:'b',w:'Blocked by policy'};
      if(!s.ctl.length)return {o:'g',w:'No controls set'};
      var dev=s.ctl.filter(function(c){return c!=='mfa';}),mfa=s.ctl.indexOf('mfa')>-1,legacy=p.cl==='legacy';
      function has(c){return !!p[c];}
      var miss={compliant:'Device not compliant',hybrid:'Not hybrid-joined',approved:'App not approved'};
      if(s.req==='all'){
        for(var i=0;i<dev.length;i++)if(!has(dev[i]))return {o:'b',w:miss[dev[i]]};
        if(mfa)return legacy?{o:'b',w:'Legacy client can’t do MFA'}:{o:'m',w:'Prompted for MFA, then in'};
        return {o:'g',w:'Device requirements met'};
      }
      for(var j=0;j<dev.length;j++)if(has(dev[j]))return {o:'g',w:({compliant:'Compliant device',hybrid:'Hybrid-joined device',approved:'Approved app'})[dev[j]]};
      if(mfa)return legacy?{o:'b',w:'Legacy client can’t do MFA'}:{o:'m',w:'Prompted for MFA, then in'};
      return {o:'b',w:dev.length?miss[dev[0]]:'Not satisfied'};
    }
    var OC={g:['Granted','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>'],m:['MFA','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>'],b:['Blocked','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'],n:['Not in scope','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/></svg>']};
    function autoName(s){
      if(s.mode==='block'){if(s.cli.length===1&&s.cli[0]==='legacy')return 'Block legacy authentication';if(s.loc==='outIndia')return 'Block sign-ins from outside India';return 'Block '+L.apps[s.apps]+' for '+L.users[s.users];}
      var c=s.ctl.map(function(x){return ({mfa:'MFA',compliant:'compliant device',hybrid:'hybrid-joined device',approved:'approved app'})[x];});
      var head=c.length?'Require '+listJoin(c,s.req==='all'?'and':'or'):'Grant access';
      var where=s.loc==='outTrusted'?' outside the office':s.loc==='outIndia'?' outside India':'';
      return head+' for '+L.users[s.users].replace(/^the /,'')+where;
    }
    function render(){
      var s=state();
      ctlBox.classList.toggle('off',s.mode==='block');
      $('.req',ctlBox).style.display=s.ctl.length>1?'':'none';
      $('#pPlatL').textContent=s.plat.length?s.plat.length+' selected':'any platform';
      $('#pCliL').textContent=(s.cli.length||3)+' of 3';
      $('#poName').textContent=tplName||autoName(s);
      // summary
      var cli=s.cli.length?s.cli:['browser','modern','legacy'];
      var plat=s.plat.length?listJoin(s.plat.map(function(p){return L.plat[p];}),'or'):'any platform';
      var then=s.mode==='block'?'<mark class="r">block access</mark>':s.ctl.length?'grant access but <mark class="'+(s.ctl.indexOf('mfa')>-1?'o':'g')+'">require '+listJoin(s.ctl.map(function(c){return L.ctl[c];}),s.req==='all'?'and':'or')+'</mark>':'<mark class="g">grant access</mark>';
      var html='<span class="kw">IF</span> <mark>'+L.users[s.users]+'</mark> sign in to <mark>'+L.apps[s.apps]+'</mark> from <mark>'+L.loc[s.loc]+'</mark> on <mark>'+plat+'</mark> using <mark>'+listJoin(cli.map(function(c){return L.cli[c];}),'or')+'</mark> <span class="kw">THEN</span> '+then+'.';
      if(s.mode!=='block'&&s.freq!=='0')html+='<span class="ses">Session: ask them to sign in again '+L.freq[s.freq]+'.</span>';
      $('#poSum').innerHTML=html;
      // warnings
      var w='';
      if(s.mode==='grant'&&!s.ctl.length)w='Pick at least one grant control, or switch to Block access.';
      else if(s.mode==='block'&&s.users==='all'&&s.apps==='all'&&s.loc==='any'&&cli.indexOf('browser')>-1)w='This would block everyone, including your admins. Always exclude a break-glass account.';
      else if(s.mode==='grant'&&s.ctl.indexOf('mfa')>-1&&cli.indexOf('legacy')>-1&&!(s.req==='one'&&s.ctl.length>1))w='Legacy clients can’t complete MFA, so those sign-ins will be blocked.';
      var pw=$('#poWarn');pw.hidden=!w;$('span',pw).textContent=w;
      // simulation
      var t={g:0,m:0,b:0,n:0};
      simEl.innerHTML=SIM.map(function(p,i){var r=evalOne(p,s);t[r.o]++;var ch=prevOut[i]!==undefined&&prevOut[i]!==r.o;prevOut[i]=r.o;
        return '<div class="simr'+(ch&&!reduce?' chg':'')+'"><span class="a">'+p.n.charAt(0)+'</span><span class="t"><b>'+p.n+'<small>'+p.tag+'</small></b><span>'+esc(p.appL)+' · '+esc(p.devL)+'</span><em>'+esc(p.locL)+' · '+esc(p.clL)+'</em></span><span class="rs"><span class="oc '+r.o+'">'+OC[r.o][1]+OC[r.o][0]+'</span><small>'+r.w+'</small></span></div>';}).join('');
      var parts=[];if(t.g)parts.push(t.g+' granted');if(t.m)parts.push(t.m+' MFA');if(t.b)parts.push(t.b+' blocked');if(t.n)parts.push(t.n+' not in scope');
      $('#simTally').textContent=parts.join(' · ');
      return s;
    }
    function changed(){if(applying)return;tplName=null;$$('#tplB button').forEach(function(b){b.classList.remove('on');});render();}
    [segU,segA,segL,segM,segR,segF].forEach(function(sg){sg.addEventListener('change',changed);});
    [pkP,pkC].forEach(function(pk){pk.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;var o=!b.classList.contains('on');b.classList.toggle('on',o);b.setAttribute('aria-pressed',o);changed();});});
    ctlBox.addEventListener('change',function(e){if(e.target.type==='checkbox')changed();});
    $('#tplB').addEventListener('click',function(e){
      var b=e.target.closest('[data-tpl]');if(!b)return;var t=TPL[b.getAttribute('data-tpl')];
      applying=true;
      setSeg(segU,t.users);setSeg(segA,t.apps);setSeg(segL,t.loc);setPk(pkP,t.plat);setPk(pkC,t.cli);setSeg(segM,t.mode);
      $$('input',ctlBox).forEach(function(i){i.checked=t.ctl.indexOf(i.value)>-1;});setSeg(segR,t.req);setSeg(segF,t.freq);
      applying=false;tplName=t.name;
      $$('#tplB button').forEach(function(x){x.classList.toggle('on',x===b);});
      render();XH.toast('Template applied — '+t.name);
    });
    $('#poJson').addEventListener('click',function(){
      var s=state(),cli=s.cli.length?s.cli:['browser','modern','legacy'];
      var users=s.users==='all'?{includeUsers:['All'],excludeUsers:['<break-glass-account-id>']}:s.users==='admins'?{includeRoles:['Global Administrator','Security Administrator','Exchange Administrator','User Administrator'],excludeUsers:['<break-glass-account-id>']}:s.users==='guests'?{includeGuestsOrExternalUsers:{guestOrExternalUserTypes:'b2bCollaborationGuest,b2bCollaborationMember'}}:{includeGroups:['<Finance-group-id>']};
      var pol={displayName:tplName||autoName(s),state:'enabledForReportingButNotEnforced',
        conditions:{users:users,applications:{includeApplications:[s.apps==='all'?'All':s.apps==='m365'?'Office365':'<Salesforce-app-id>']},
          clientAppTypes:[].concat(cli.indexOf('browser')>-1?['browser']:[],cli.indexOf('modern')>-1?['mobileAppsAndDesktopClients']:[],cli.indexOf('legacy')>-1?['exchangeActiveSync','other']:[])},
        grantControls:s.mode==='block'?{operator:'OR',builtInControls:['block']}:{operator:s.req==='all'?'AND':'OR',builtInControls:s.ctl.map(function(c){return ({mfa:'mfa',compliant:'compliantDevice',hybrid:'domainJoinedDevice',approved:'approvedApplication'})[c];})}};
      if(s.loc!=='any')pol.conditions.locations={includeLocations:['All'],excludeLocations:[s.loc==='outTrusted'?'AllTrusted':'<India-named-location-id>']};
      if(s.plat.length)pol.conditions.platforms={includePlatforms:s.plat};
      if(s.mode!=='block'&&s.freq!=='0')pol.sessionControls={signInFrequency:{isEnabled:true,value:parseInt(s.freq,10),type:/h/.test(s.freq)?'hours':'days'}};
      XH.download('conditional-access-policy.json',JSON.stringify(pol,null,2),'application/json');XH.toast('Policy JSON downloaded (report-only)');
    });
    render();
  }

  /* ================= 4. SSPR flow animation ================= */
  var flow=$('#ssprFlow');
  if(flow){
    var steps=$$('li',flow),si2=-1,ft=null,fvis=false;
    if(reduce)steps.forEach(function(l){l.classList.add('dn');});
    else{
      function fstep(){
        if(!fvis){ft=null;return;}
        si2++;
        if(si2>=steps.length){ft=setTimeout(function(){steps.forEach(function(l){l.classList.remove('on','dn');});si2=-1;ft=setTimeout(fstep,600);},2600);return;}
        steps.forEach(function(l,j){l.classList.toggle('dn',j<si2);l.classList.toggle('on',j===si2);});
        ft=setTimeout(fstep,950);
      }
      XH.whenVisible(flow,function(v){fvis=v;if(v&&!ft)fstep();});
    }
  }

  /* ================= 5. Pricing: plan card + seat calculator ================= */
  var P={m:528,y:6125,lm:580};P.ly=P.lm*12;
  var pctY=Math.round((P.ly-P.y)/P.ly*100),pctM=Math.round((P.lm-P.m)/P.lm*100);
  var setT=function(id,t){var e=$('#'+id);if(e)e.textContent=t;};
  setT('pcList',XH.inr(P.lm));setT('pcM',XH.inr(P.m));setT('pcY',XH.inr(P.y));
  setT('pcPill','Save '+XH.inr(P.ly-P.y)+' / user / yr');setT('pfL',XH.inr(P.ly));setT('pfX',XH.inr(P.y));setT('pfS',XH.inr(P.ly-P.y)+' ('+pctY+'%)');
  setT('sBillM','save '+pctM+'% vs list');setT('sBillY','save '+pctY+'% vs list');
  var seats=$('#sSeats'),seatsN=$('#sSeatsN'),bill=$('#sBill'),shown=0,tw=null;
  function tween(el,to){if(reduce){el.textContent=XH.inr(to);shown=to;return;}var from=shown,t0=null;cancelAnimationFrame(tw);function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/450),e=1-Math.pow(1-p,3);el.textContent=XH.inr(Math.round(from+(to-from)*e));if(p<1)tw=requestAnimationFrame(f);else shown=to;}tw=requestAnimationFrame(f);}
  function calc(){
    var n=Math.max(1,Math.min(1000,Math.round(+seats.value||1))),b=bill.dataset.value||'y',y=b==='y';
    var per=y?P.y:P.m,lp=y?P.ly:P.lm,tot=per*n,list=lp*n,save=list-tot,gst=Math.round(tot*.18);
    setT('sSeatsL',n+(n===1?' user':' users'));
    setT('oLine','Per user · '+(y?'yearly':'monthly'));setT('oPer',XH.inr(per)+(y?' / yr':' / mo'));
    setT('oList',XH.inr(list));setT('oSave','−'+XH.inr(save)+' ('+(y?pctY:pctM)+'%)');setT('oGst',XH.inr(gst));setT('oPay',XH.inr(tot+gst));
    setT('oSub',(y?'for 12 months':'per month')+', excl. GST');
    setT('cbLv',XH.inr(list));setT('cbXv',XH.inr(tot));
    $('#cbL').style.transform='scaleX(1)';$('#cbX').style.transform='scaleX('+(tot/list).toFixed(4)+')';
    $$('.pc-rows div').forEach(function(d,i){d.classList.toggle('on',(i===1)===y);});
    tween($('#oTot'),tot);
    return {n:n,b:b,y:y,per:per,tot:tot};
  }
  if(seats){
    seats.addEventListener('input',function(){seatsN.value=seats.value;calc();});
    seatsN.addEventListener('input',function(){var v=Math.max(1,Math.min(1000,Math.round(+seatsN.value||1)));if(seatsN.value!==''&&+seatsN.value>=1){seats.value=v;XH.fillRange(seats);calc();}});
    seatsN.addEventListener('blur',function(){var v=Math.max(1,Math.min(1000,Math.round(+seatsN.value||1)));seatsN.value=v;seats.value=v;XH.fillRange(seats);calc();});
    bill.addEventListener('change',function(){calc();XH.flash($('#oTot'));});
    calc();
    $('#oAdd').addEventListener('click',function(){var c=calc();
      XH.cart.add({key:'entra-p1-'+c.b+'-'+c.n,name:'Microsoft Entra ID P1 — '+c.n+(c.n===1?' seat':' seats'),sub:(c.y?'Yearly · '+XH.inr(c.per)+'/seat':'Monthly · '+XH.inr(c.per)+'/seat/mo'),price:c.tot,qty:1});});
  }

  /* ================= 6. Entra family strip ================= */
  var FAM=[
    {s:'xcellhost-entra-id-p2',n:'Entra ID P2',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>',c:'',p:755,d:'Risk-based access, PIM and access reviews on top of P1.'},
    {s:'xcellhost-entra-id-governance',n:'Entra ID Governance',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',c:'n',p:528,d:'Joiner-mover-leaver workflows and advanced access reviews.'},
    {s:'xcellhost-entra-suite',n:'Entra Suite',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',c:'o',p:910,d:'Private + Internet Access, Governance and ID Protection in one.'},
    {s:'xcellhost-entra-private-access',n:'Entra Private Access',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',c:'',p:378,d:'Replace the VPN with per-app Zero Trust access.'},
    {s:'xcellhost-entra-internet-access',n:'Entra Internet Access',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',c:'n',p:378,d:'Identity-aware web gateway for internet, SaaS and AI apps.'},
    {s:'xcellhost-entra-workload-id',n:'Entra Workload ID',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>',c:'o',p:228,d:'Conditional Access and risk detection for apps and service principals.',u:'identity'}
  ];
  var fam=$('#fam');
  if(fam){
    fam.innerHTML=FAM.map(function(f,i){return '<a class="fm rv" data-d="'+(i%3+1)+'" href="'+f.s+'.html"><span class="ico '+f.c+'">'+f.i+'</span><span><b>'+f.n+'</b><span class="fd">'+f.d+'</span><span class="fp"><span>from '+XH.inr(f.p)+' / '+(f.u||'user')+' / mo</span><em>→</em></span></span></a>';}).join('');
    XH.observe(fam);
  }

  const routes={"xcellhost-entra-id-p1.html":"/microsoft-entra-id-p1","xcellhost-entra-workload-id.html":"/microsoft-entra-workload-id","xcellhost-entra-internet-access.html":"/microsoft-entra-internet-access","xcellhost-entra-private-access.html":"/microsoft-entra-private-access","xcellhost-entra-id-governance.html":"/microsoft-entra-id-governance"};$$('a[href]').forEach(a=>{const h=a.getAttribute('href');if(h.startsWith('xcellhost-entra-'))a.setAttribute('href',routes[h]||'/microsoft-entra-id');});
  return () => { disposed=true;root.removeEventListener('click',click);observers.forEach(o=>o.disconnect());scheduledTimers.forEach(window.clearTimeout);frames.forEach(window.cancelAnimationFrame); };
}
