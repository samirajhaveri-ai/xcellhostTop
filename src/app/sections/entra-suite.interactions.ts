// @ts-nocheck
// Adapted interactive demos from the supplied HTML; queries stay inside this component.
export function initializeSuite(root: ShadowRoot, heroMode: boolean, quote: (topic: string) => void, add: (line: any) => void): () => void {
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
  $$('input.rng').forEach(r => { XH.fillRange(r); r.addEventListener('input', () => XH.fillRange(r)); });
  const click = e => {
    const segButton=e.target.closest('.seg button');if(segButton){const seg=segButton.closest('.seg');$$('button',seg).forEach(b=>{b.classList.toggle('on',b===segButton);b.setAttribute('aria-pressed',String(b===segButton));});seg.dataset.value=segButton.dataset.v;seg.dispatchEvent(new Event('change',{bubbles:true}));}
    const tab=e.target.closest('[data-tabs] [data-tab]');if(tab){const bar=tab.closest('[data-tabs]'),group=bar.dataset.tabs,key=tab.dataset.tab;$$('[data-tab]',bar).forEach(b=>{b.classList.toggle('on',b===tab);b.setAttribute('aria-selected',String(b===tab));});$$('[data-panel]').filter(p=>p.dataset.group===group).forEach(p=>{const active=p.dataset.panel===key;p.classList.toggle('on',active);p.hidden=!active;});bar.dispatchEvent(new CustomEvent('xh:tab',{detail:{key}}));}

    const b = e.target.closest('.stp button');
    if (b) { const inp = $('input', b.parentNode); inp.value = Math.max(+(inp.min || 0), Math.min(+(inp.max || 9999), +inp.value + +(inp.step || 1) * +b.dataset.step)); inp.dispatchEvent(new Event('input', {bubbles: true})); }
    const callback = e.target.closest('[data-open]'); if (callback) { e.preventDefault(); quote(callback.dataset.topic || 'Microsoft Entra Suite'); }
    const link = e.target.closest('a[href]'); if (link && link.getAttribute('href').startsWith('#')) { const target = root.getElementById(link.getAttribute('href').slice(1)); if (target) {e.preventDefault(); target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});} }
    const copy = e.target.closest('[data-copy]'); if (copy) navigator.clipboard?.writeText(copy.dataset.copy);
  };
  root.addEventListener('click', click);

  XH.observe = () => {};
  XH.toast = message => { let notice=$('.demo-toast');if(!notice){notice=document.createElement('div');notice.className='demo-toast';notice.setAttribute('role','status');root.querySelector('.suite-shell').appendChild(notice);}notice.textContent=message; };
  XH.download = (name,content,type) => { const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); };
  const inr=XH.inr;
  $$('.seg').forEach(seg=>{const active=$('button.on',seg)||$('button',seg);if(active)seg.dataset.value=active.dataset.v;$$('button',seg).forEach(b=>b.setAttribute('aria-pressed',String(b===active)));});
  const listeners=[];const addEventListener=(name,fn)=>{window.addEventListener(name,fn);listeners.push([name,fn]);};
  var P={
    wid:{n:'Entra Workload ID',s:'Workload ID',m:228,y:2640,l:250,slug:'xcellhost-entra-workload-id.html',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>',c:'n',d:'Secure apps, services and AI agents',u:'workload'},
    ia:{n:'Entra Internet Access',s:'Internet Access',m:378,y:4382,l:415,slug:'xcellhost-entra-internet-access.html',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',c:'o',d:'Secure web gateway for web, SaaS and AI',u:'user'},
    pa:{n:'Entra Private Access',s:'Private Access',m:378,y:4382,l:415,slug:'xcellhost-entra-private-access.html',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',c:'',d:'Zero Trust app access that replaces VPN',u:'user'},
    gov:{n:'Entra ID Governance',s:'ID Governance',m:528,y:6125,l:580,slug:'xcellhost-entra-id-governance.html',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',c:'n',d:'Lifecycle workflows and access reviews',u:'user'},
    p1:{n:'Entra ID P1',s:'ID P1',m:528,y:6125,l:580,slug:'xcellhost-entra-id-p1.html',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>',c:'',d:'Conditional Access, MFA and SSO',u:'user'},
    p2:{n:'Entra ID P2',s:'ID P2',m:755,y:8765,l:830,slug:'xcellhost-entra-id-p2.html',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>',c:'r',d:'Risk-based protection and PIM',u:'user'},
    suite:{n:'Entra Suite',s:'Suite',m:910,y:10560,l:1000,slug:'xcellhost-entra-suite.html',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',c:'o',d:'The complete Zero Trust bundle',u:'user'}
  };
  var S=P.suite,UPLIFT=P.p2.m-P.p1.m,UPLIFT_Y=P.p2.y-P.p1.y;
  function pct(a,b){return Math.round((1-a/b)*100);}
  function tween(el,to,fmt,key){
    fmt=fmt||inr;key=key||'_v';var from=el[key]||0;el[key]=to;
    if(reduce||from===to){el.textContent=fmt(to);return;}
    cancelAnimationFrame(el._raf);var t0=null;
    function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/500),e=1-Math.pow(1-p,3);el.textContent=fmt(Math.round(from+(to-from)*e));if(p<1)el._raf=requestAnimationFrame(f);}
    el._raf=requestAnimationFrame(f);
  }


  Object.values(P).forEach(p=>{p.slug={"xcellhost-entra-id-p2.html":"/microsoft-entra-id-p2","xcellhost-entra-id-p1.html":"/microsoft-entra-id-p1","xcellhost-entra-suite.html":"/microsoft-entra-suite","xcellhost-entra-workload-id.html":"/microsoft-entra-workload-id","xcellhost-entra-internet-access.html":"/microsoft-entra-internet-access","xcellhost-entra-private-access.html":"/microsoft-entra-private-access","xcellhost-entra-id-governance.html":"/microsoft-entra-id-governance"}[p.slug]||p.slug;});
  /* ================= 2. Hero visual: one policy, five products ================= */
  (function(){
    var box=$('#upol');if(!box)return;
    var diag=$('#upDiag'),core=$('#upCore'),dec=$('#upDec'),lines=$('#upLines'),pulse=$('#upPulse'),ev=$('#upEv'),clk=$('#upClock');
    var mods=$$('.mod',diag),bars=$$('#upTl i');
    var DEF=mods.map(function(m){return $('span',m).textContent;});
    var EV=[
      {t:'09:00',x:'New hire proves who they are — a live selfie matched to their ID credential.',st:'Match · verified',d:'Grant · verified',k:'ok'},
      {t:'09:15',x:'The Finance access package is assigned automatically from HR data.',st:'Package assigned',d:'Grant · package',k:'ok'},
      {t:'10:40',x:'Opens the internal ERP from home — a per-app tunnel, no VPN.',st:'ERP · no VPN',d:'Grant · compliant',k:'ok'},
      {t:'14:25',x:'Pastes a crafted prompt into an AI app — injection blocked at the gateway.',st:'Prompt blocked',d:'Block · AI policy',k:'blk'},
      {t:'19:50',x:'Signs in from an unfamiliar location — high risk, so MFA is required.',st:'High risk → MFA',d:'Challenge · MFA',k:'chl'}
    ];
    var DUR=3300,cur=0,day=1,timers=[],running=false,L=[],C={x:0,y:0},M=[];
    var NS='http://www.w3.org/2000/svg';
    function later(fn,ms){timers.push(setTimeout(fn,ms));}
    function clear(){timers.forEach(clearTimeout);timers=[];}
    function layout(){
      var W=diag.clientWidth,H=diag.clientHeight;lines.setAttribute('viewBox','0 0 '+W+' '+H);
      C={x:core.offsetLeft,y:core.offsetTop};
      M=mods.map(function(m){return {x:m.offsetLeft,y:m.offsetTop};});
      if(!L.length){lines.innerHTML='';L=M.map(function(){var l=document.createElementNS(NS,'line');lines.appendChild(l);return l;});}
      L.forEach(function(l,i){l.setAttribute('x1',C.x);l.setAttribute('y1',C.y);l.setAttribute('x2',M[i].x);l.setAttribute('y2',M[i].y);});
    }
    function ev_(t,x){ev.innerHTML='<em>'+t+'</em><span>'+x+'</span>';}
    function reset(){
      mods.forEach(function(m,i){m.className='mod';$('span',m).textContent=DEF[i];});
      L.forEach(function(l){l.setAttribute('class','');});
      bars.forEach(function(b){b.className='';});
      dec.className='dec';dec.textContent='Evaluating…';
    }
    function step(k){
      if(k>=EV.length){
        clk.textContent='Day '+day+' · 20:00';
        ev_('20:00','Five decisions, five products — one policy. No VPN, no extra console.');
        dec.className='dec ok';dec.textContent='5 decisions';
        later(function(){day++;reset();cur=0;step(0);},2800);return;
      }
      cur=k;var e=EV[k],m=mods[k],l=L[k];
      clk.textContent='Day '+day+' · '+e.t;ev_(e.t,e.x);
      dec.className='dec';dec.textContent='Evaluating…';
      m.classList.add('act');if(e.k!=='ok')m.classList.add(e.k);
      l.setAttribute('class','act'+(e.k!=='ok'?' '+e.k:''));
      bars[k].style.setProperty('--td',DUR/1000+'s');bars[k].classList.add('on');
      pulse.className='pulse'+(e.k!=='ok'?' '+e.k:'');pulse.style.transition='none';
      pulse.style.transform='translate('+M[k].x+'px,'+M[k].y+'px)';pulse.style.opacity=1;void pulse.offsetWidth;pulse.style.transition='';
      later(function(){pulse.style.transform='translate('+C.x+'px,'+C.y+'px)';},180);
      later(function(){pulse.style.opacity=0;core.classList.remove('hit');void core.offsetWidth;core.classList.add('hit');
        dec.className='dec '+e.k;dec.textContent=e.d;$('span',m).textContent=e.st;},950);
      later(function(){m.classList.remove('act','blk','chl');m.classList.add('done');l.setAttribute('class','done');bars[k].className='done';step(k+1);},DUR);
    }
    function finalState(){
      mods.forEach(function(m,i){m.classList.add('done');$('span',m).textContent=EV[i].st;});
      L.forEach(function(l){l.setAttribute('class','done');});bars.forEach(function(b){b.className='done';});
      dec.className='dec ok';dec.textContent='5 decisions';clk.textContent='Day 1 · 20:00';
      ev_('Day','New hire verified, access granted, ERP opened without VPN, AI prompt blocked, risky sign-in challenged — one policy.');
    }
    layout();
    addEventListener('resize',function(){layout();});
    if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>{if(!disposed)layout();});
    if(reduce){finalState();return;}
    XH.whenVisible(box,function(v){
      if(v&&!running){running=true;clear();
        var m=mods[cur];if(m){m.classList.remove('act','blk','chl');}
        if(bars[cur])bars[cur].className='';
        later(function(){layout();step(cur);},500);}
      else if(!v&&running){running=false;clear();}
    });
  })();

  /* ================= 3. Face Check scenario steps ================= */
  (function(){
    var sec=$('#face-check');if(!sec)return;var lt=[];
    function light(panel){
      lt.forEach(clearTimeout);lt=[];var li=$$('.fsteps li',panel);
      li.forEach(function(x){x.classList.remove('lit');});
      li.forEach(function(x,i){lt.push(setTimeout(function(){x.classList.add('lit');},reduce?0:300+i*420));});
    }
    var seen=false;
    XH.whenVisible(sec,function(v){if(v&&!seen){seen=true;light($('[data-panel].on',sec));}});
    var bar=$('[data-tabs="fc"]',sec);
    if(bar)bar.addEventListener('xh:tab',function(e){light($('[data-panel="'+e.detail.key+'"]',sec));});
  })();

  /* ================= 4. Pricing card ================= */
  (function(){
    if(heroMode)return;
    var save=S.l*12-S.y;
    $('#pcSave').textContent='Save '+inr(save)+'/yr · '+pct(S.y,S.l*12)+'%';
    $('#pcList').textContent=inr(S.l);$('#pcM').textContent=inr(S.m);$('#pcY').textContent=inr(S.y);
    $('#p1Price').textContent=inr(P.p1.m);
  })();

  /* ================= 5. Seat calculator ================= */
  (function(){
    var num=$('#sNum'),rng=$('#sRng'),bill=$('#sBill'),p1=$('#sP1');if(!num)return;
    $('#sBillM').textContent=inr(S.m)+' / user / mo';
    $('#sBillY').textContent=inr(S.y)+' / user · save '+pct(S.y,S.m*12)+'%';
    function seats(){return Math.max(1,Math.min(1000,Math.round(+num.value||1)));}
    function calc(){
      var n=seats(),b=bill.dataset.value||'y',yr=b==='y';
      var per=yr?S.y:S.m,lper=yr?S.l*12:S.l,tot=per*n,list=lper*n,save=list-tot;
      var p1=p1El.checked?(yr?P.p1.y:P.p1.m)*n:0,sub=tot+p1,gst=Math.round(sub*.18);
      $('#sNumL').textContent=n+(n===1?' user':' users');
      $('#oK').textContent=yr?'Your yearly total':'Your monthly total';
      $('#oSub').textContent='for '+n+(n===1?' user':' users')+(yr?', 12 months':', per month')+', excl. GST';
      $('#oPer').textContent=inr(per)+(yr?' / yr':' / mo');
      $('#oList').textContent=inr(list);
      tween($('#oSave'),save,function(v){return inr(v)+' ('+pct(tot,list)+'%)';});
      $('#oP1Row').hidden=!p1;$('#oP1').textContent=inr(p1);
      $('#sP1Rate').textContent=yr?inr(P.p1.y)+' / user / yr':inr(P.p1.m)+' / user / mo';
      $('#oGst').textContent=inr(gst);
      tween($('#oPay'),sub+gst);
      tween($('#oTot'),sub);
      return {n:n,b:b,yr:yr,per:per,tot:tot,p1:p1};
    }
    var p1El=p1;
    function sync(src){var v=Math.max(1,Math.min(1000,Math.round(+src.value||1)));if(src!==num)num.value=v;if(src!==rng){rng.value=v;XH.fillRange(rng);}calc();}
    num.addEventListener('input',function(){sync(num);});
    rng.addEventListener('input',function(){sync(rng);});
    bill.addEventListener('change',calc);p1.addEventListener('change',calc);
    calc();
    $('#oAdd').addEventListener('click',function(){var c=calc(),bl=c.yr?'Yearly':'Monthly';
      XH.cart.add({key:'entra-suite-'+c.b+'-'+c.n,name:'Microsoft Entra Suite — '+c.n+(c.n===1?' seat':' seats'),sub:bl+' · '+inr(c.per)+'/seat',price:c.tot,qty:1});
      if(c.p1)XH.cart.add({key:'entra-p1-'+c.b+'-'+c.n,name:'Microsoft Entra ID P1 — '+c.n+(c.n===1?' seat':' seats'),sub:bl+' · '+inr(c.yr?P.p1.y:P.p1.m)+'/seat · Suite prerequisite',price:c.p1,qty:1});
    });
  })();

  /* ================= 6. Bundle value calculator ================= */
  (function(){
    var root=$('#bv');if(!root)return;
    var num=$('#bNum'),rng=$('#bRng'),idp=$('#bIdp'),has=$('#bHasP1'),sep=$('#bvSep'),sui=$('#bvSuite'),shown=false;
    var NAMES={p1:'Entra ID P1',gov:'ID Governance',ia:'Internet Access',pa:'Private Access',idp:'P2 uplift (ID Protection)',su:'Entra Suite'};
    function seats(){return Math.max(1,Math.min(1000,Math.round(+num.value||1)));}
    function segs(list,el,max,total){
      el.innerHTML=list.map(function(s){return '<span class="sg '+s[0]+'" style="flex:'+s[1]+' 1 0" title="'+NAMES[s[0]]+' '+inr(s[1])+'">'+inr(s[1])+'</span>';}).join('');
      var w=shown?total/max*100:0;el.style.width=w+'%';
      var tw=(el.parentNode.clientWidth||600)*w/100;
      $$('.sg',el).forEach(function(x,i){if(tw*list[i][1]/total<46)x.textContent='';});
    }
    function calc(){
      var n=seats(),own=has.checked,withIdp=idp.checked;
      var A=[];if(!own)A.push(['p1',P.p1.m]);A.push(['gov',P.gov.m],['ia',P.ia.m],['pa',P.pa.m]);if(withIdp)A.push(['idp',UPLIFT]);
      var B=[];if(!own)B.push(['p1',P.p1.m]);B.push(['su',S.m]);
      var a=A.reduce(function(x,y){return x+y[1];},0),b=B.reduce(function(x,y){return x+y[1];},0),d=a-b;
      $('#bNumL').textContent=n+(n===1?' user':' users');
      $('#bvSepPer').textContent=inr(a)+' / user / mo';$('#bvSuitePer').textContent=inr(b)+' / user / mo';
      segs(A,sep,a,a);segs(B,sui,a,b);
      var used={};A.concat(B).forEach(function(s){used[s[0]]=1;});
      $('#bvLegend').innerHTML=Object.keys(NAMES).filter(function(k){return used[k];}).map(function(k){return '<span><i class="sg '+k+'"></i>'+NAMES[k]+'</span>';}).join('');
      tween($('#bvMo'),d*n);tween($('#bvYr'),d*n*12);tween($('#bvPct'),Math.round(d/a*100),function(v){return v+'%';});
      var f='<span class="fk">How we calculate (per user / month, excl. GST)</span>';
      f+='<b>Separately</b> = '+A.map(function(s){return NAMES[s[0]]+' '+inr(s[1]);}).join(' + ')+' <span class="eq">= '+inr(a)+'</span><br>';
      f+='<b>Suite</b> = '+B.map(function(s){return NAMES[s[0]]+' '+inr(s[1]);}).join(' + ')+' <span class="eq">= '+inr(b)+'</span><br>';
      f+='<b>Saving</b> = ('+inr(a)+' − '+inr(b)+') × '+n+' users <span class="eq">= '+inr(d*n)+' / month</span> × 12 <span class="eq">= '+inr(d*n*12)+' / year</span>';
      f+='<span class="nt">'+(own?'You already own P1, so it is left out of both sides.':'P1 ('+inr(P.p1.m)+') is needed in both cases, so it does not change the rupee saving — only the percentage.')+(withIdp?' ID Protection is priced as the difference between P2 ('+inr(P.p2.m)+') and P1 ('+inr(P.p1.m)+').':' ID Protection is excluded from the separate side, yet still included in the Suite.')+' Verified ID premium with Face Check comes with the Suite and is not priced on the separate side.</span>';
      $('#bvFormula').innerHTML=f;
      return n;
    }
    function sync(src){var v=Math.max(1,Math.min(1000,Math.round(+src.value||1)));if(src!==num)num.value=v;if(src!==rng){rng.value=v;XH.fillRange(rng);}calc();}
    num.addEventListener('input',function(){sync(num);});rng.addEventListener('input',function(){sync(rng);});
    idp.addEventListener('change',calc);has.addEventListener('change',calc);
    addEventListener('resize',function(){if(shown)calc();});
    calc();
    XH.whenVisible($('#bvBars'),function(v){if(v&&!shown){shown=true;setTimeout(calc,reduce?0:250);}});
    $('#bvAdd').addEventListener('click',function(){var n=calc();XH.cart.add({key:'entra-suite-m-'+n,name:'Microsoft Entra Suite — '+n+(n===1?' seat':' seats'),sub:'Monthly · '+inr(S.m)+'/seat',price:S.m*n,qty:1});});
  })();

  /* ================= 7. Which Entra plan fits? ================= */
  (function(){
    var qs=$('#recQs');if(!qs)return;
    var Q=[
      {k:'ca',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',q:'Need MFA and Conditional Access?',s:'Require MFA, allow only compliant devices, block legacy sign-in.',d:true},
      {k:'risk',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>',q:'Need risk-based protection and PIM?',s:'React to leaked credentials and risky sign-ins; just-in-time admin roles.'},
      {k:'vpn',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',q:'Want to replace your VPN?',s:'Per-app access to ERP, RDP, file shares and SAP without a VPN.'},
      {k:'web',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',q:'Control web and AI app use?',s:'Filter websites, discover Shadow AI, block prompt injection.'},
      {k:'gov',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',q:'Automate joiners, movers, leavers and access reviews?',s:'HR-driven provisioning, lifecycle workflows, review campaigns.'},
      {k:'face',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h4M5 17a3.5 3.5 0 016 0"/></svg>',q:'Verify identities remotely?',s:'Face Check for help-desk resets and remote onboarding.'}
    ];
    qs.innerHTML=Q.map(function(x,i){return '<div class="q'+(x.d?' qy':'')+'" data-q="'+x.k+'"><span class="qi">'+x.ic+'</span><div><b>'+x.q+'</b><small>'+x.s+'</small></div><div class="seg" role="group" aria-label="'+x.q+'"><button type="button" data-v="1"'+(x.d?' class="on"':'')+'>Yes</button><button type="button" data-v="0"'+(x.d?'':' class="on"')+'>No</button></div></div>';}).join('');
    $$('.q .seg',qs).forEach(function(s){var on=$('button.on',s);s.dataset.value=on.getAttribute('data-v');});
    var has=$('#raHasP1'),nIn=$('#raN'),last=null;
    function need(){var r={};$$('.q',qs).forEach(function(q){r[q.getAttribute('data-q')]=$('.seg',q).dataset.value==='1';});return r;}
    function price(sku,own,yr){var k=yr?'y':'m';if(sku==='p1')return own?0:P.p1[k];if(sku==='p2')return own?(yr?UPLIFT_Y:UPLIFT):P.p2[k];return P[sku][k];}
    function combos(){
      var out=[],adds=['gov','ia','pa'];
      ['p1','p2'].forEach(function(base){for(var m=0;m<8;m++){var c=[base];adds.forEach(function(a,i){if(m&(1<<i))c.push(a);});out.push(c);}});
      out.push(['p1','suite']);return out;
    }
    function covers(c,r){var h=function(x){return c.indexOf(x)>-1;},su=h('suite');
      return (!r.risk||h('p2')||su)&&(!r.vpn||h('pa')||su)&&(!r.web||h('ia')||su)&&(!r.gov||h('gov')||su)&&(!r.face||su);}
    function cost(c,own,yr){return c.reduce(function(a,s){return a+price(s,own,yr);},0);}
    var SHORT={p1:'Entra ID P1',p2:'Entra ID P2',gov:'ID Governance',ia:'Internet Access',pa:'Private Access',suite:'Entra Suite'};
    function label(c,own){return c.filter(function(s){return !(s==='p1'&&own);}).map(function(s){return s==='p2'&&own?'Entra ID P2 step-up':SHORT[s];}).join(' + ')||'Your existing P1';}
    function adds(c){var h=function(x){return c.indexOf(x)>-1;},m=[];if(!h('pa'))m.push('Private Access');if(!h('ia'))m.push('Internet Access');if(!h('gov'))m.push('ID Governance');if(!h('p2'))m.push('ID Protection');m.push('Face Check');return m;}
    function render(){
      var r=need(),own=has.checked,n=Math.max(1,Math.min(1000,Math.round(+nIn.value||1)));
      $$('.q',qs).forEach(function(q){q.classList.toggle('qy',r[q.getAttribute('data-q')]);});
      var any=r.ca||r.risk||r.vpn||r.web||r.gov||r.face,best,alt=null,why=[];
      if(!any){best=null;}
      else{
        var ok=combos().filter(function(c){return covers(c,r);});
        ok.sort(function(a,b){return cost(a,own)-cost(b,own)||a.length-b.length;});
        best=ok[0];
        var other=ok.filter(function(c){return (c.indexOf('suite')>-1)!==(best.indexOf('suite')>-1);})[0];
        if(other)alt={c:other,d:cost(other,own)-cost(best,own)};
      }
      var t=$('#raTitle'),title=best?label(best,own):'Entra ID Free';
      if(title!==last){t.classList.remove('sw');void t.offsetWidth;t.classList.add('sw');last=title;}
      t.textContent=title;
      if(!best){
        $('#raWhy').textContent='Basic MFA via security defaults and SSO come free with Microsoft 365 and Azure. Upgrade to P1 when you need Conditional Access.';
        $('#raSkus').innerHTML='<a href="'+P.p1.slug+'"><i>'+P.p1.ic+'</i>Entra ID P1 — when you\'re ready<em>'+inr(P.p1.m)+'/mo</em></a>';
        $('#raPer').textContent=inr(0);$('#raYr').textContent=inr(0);$('#raAlt').innerHTML='';$('#raTot').textContent=inr(0);$('#raAdd').disabled=true;return;
      }
      $('#raAdd').disabled=false;
      var su=best.indexOf('suite')>-1;
      if(su){why.push(r.face?'Face Check is only available in the Suite':'With '+[r.vpn,r.web,r.gov,r.risk].filter(Boolean).length+' add-on needs, the bundle is cheaper than the parts');}
      else{
        if(best.indexOf('p2')>-1)why.push('P2 adds ID Protection and PIM');else if(own)why.push('Your existing P1 already covers Conditional Access and MFA');else why.push('P1 gives you Conditional Access and MFA');
        if(best.indexOf('pa')>-1)why.push('Private Access retires the VPN');
        if(best.indexOf('ia')>-1)why.push('Internet Access controls web and AI use');
        if(best.indexOf('gov')>-1)why.push('ID Governance automates the access lifecycle');
      }
      $('#raWhy').textContent=why.join('; ')+'.';
      $('#raSkus').innerHTML=best.map(function(s,i){var p=price(s,own),o=s==='p1'&&own;
        return '<a href="'+P[s].slug+'"'+(o?' class="own"':'')+' style="animation-delay:'+(i*60)+'ms"><i>'+P[s].ic+'</i>'+(s==='p2'&&own?'Entra ID P2 · step-up from P1':P[s].n)+'<em>'+(o?'already owned':inr(p)+'/mo')+'</em></a>';}).join('');
      var per=cost(best,own),yr=cost(best,own,true);
      tween($('#raPer'),per);tween($('#raYr'),yr);tween($('#raTot'),per*n);
      var at='';
      if(alt&&alt.c.indexOf('suite')<0)at='Buying the parts separately would cost <b>'+inr(alt.d)+' more</b> per user / month.';
      else if(alt&&alt.d<=400){var mm=adds(best);at='Close call: the Suite costs just <b>'+inr(alt.d)+' more</b> per user / month and adds '+mm.slice(0,-1).join(', ')+(mm.length>1?' and ':'')+mm[mm.length-1]+'.';}
      $('#raAlt').innerHTML=at;
      $('#raAdd').disabled=per===0;
      render.best=best;render.own=own;render.n=n;
    }
    qs.addEventListener('change',render);has.addEventListener('change',render);nIn.addEventListener('input',render);
    render();
    $('#raAdd').addEventListener('click',function(){var b=render.best,own=render.own,n=render.n;if(!b)return;
      b.forEach(function(s){if(s==='p1'&&own)return;var p=price(s,own);
        XH.cart.add({key:'entra-'+s+(s==='p2'&&own?'-stepup':'')+'-m-'+n,name:'Microsoft '+(s==='p2'&&own?'Entra ID P2 (step-up from P1)':P[s].n)+' — '+n+(n===1?' seat':' seats'),sub:'Monthly · '+inr(p)+'/seat · Plan finder',price:p*n,qty:1});});
    });
  })();

  /* ================= 8. Entra family strip ================= */
  (function(){
    var f=$('#fam');if(!f)return;
    f.innerHTML=['p1','p2','gov','ia','pa','wid'].map(function(k,i){var x=P[k];
      return '<a class="fm rv" data-d="'+(i%6)+'" href="'+x.slug+'"><span class="ico '+x.c+'">'+x.ic+'</span><small class="kk">Microsoft Entra</small><b>'+x.n.replace('Entra ','')+'</b><p>'+x.d+'</p><span class="fp"><span><small>from</small><em>'+inr(x.m)+'</em> /'+(x.u==='workload'?'workload':'user')+'/mo</span><span class="ar">→</span></span></a>';}).join('');
    XH.observe(f);
  })();

  return () => { disposed=true;root.removeEventListener("click",click);listeners.forEach(([name,fn])=>window.removeEventListener(name,fn));observers.forEach(o=>o.disconnect());scheduledTimers.forEach(window.clearTimeout);frames.forEach(window.cancelAnimationFrame); };
}
