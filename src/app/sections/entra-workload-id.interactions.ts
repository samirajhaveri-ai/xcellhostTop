// @ts-nocheck
// Adapted interactive demos from the supplied HTML; queries stay inside this component.
export function initializeWorkload(root: ShadowRoot, heroMode: boolean, quote: (topic: string) => void, add: (line: any) => void): () => void {
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
    const callback = e.target.closest('[data-open]'); if (callback) { e.preventDefault(); quote(callback.dataset.topic || 'Microsoft Entra Workload ID'); }
    const link = e.target.closest('a[href]'); if (link && link.getAttribute('href').startsWith('#')) { const target = root.getElementById(link.getAttribute('href').slice(1)); if (target) {e.preventDefault(); target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});} }
    const copy = e.target.closest('[data-copy]'); if (copy) navigator.clipboard?.writeText(copy.dataset.copy);
  };
  root.addEventListener('click', click);
  /* ================= 0. Hero background: pause circuit pulses offscreen ================= */
  var hero=$('#wlHero');
  XH.whenVisible(hero,function(v){hero.classList.toggle('wl-off',!v);});

  /* ================= 1. Hero: workload sign-in flow ================= */
  var SC=[
    {run:'Run 1 of 2',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7M18 10.5c0 4-6 3-10 6"/></svg>',n:'deploy-api',s:'GitHub Actions',pass:true,
     start:'<em>entra</em> deploy-api requested a token via federation…',
     end:'✓ token issued to deploy-api <em>· rg-pay-prod deployed</em>',
     rows:[['OIDC token · no secret','ok','verified'],['Runner IP · trusted range','ok','allowed'],['No risk detected','ok','low risk'],['Token issued → deployed','ok','deployed']]},
    {run:'Run 2 of 2',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>',n:'sp-recon',s:'Nightly job',pass:false,
     start:'<em>entra</em> sp-recon signing in with a client secret…',
     end:'✕ sign-in blocked <em>· leaked credential · SOC alerted</em>',
     rows:[['Client secret · 14 months old','warn','secret'],['IP 185.220.x.x · unknown','bad','blocked IP'],['Leaked credentials found','bad','high risk'],['Blocked · alert raised','bad','blocked']]}
  ];
  var wfx=$('#wfx');
  if(wfx){
    var rows=$$('.wr',wfx),nd1=$('#nd1'),nd2=$('#nd2'),nd3=$('#nd3'),ln1=$('#ln1'),ln2=$('#ln2'),log=$('#wfLog'),alertEl=$('#wfAlert'),runEl=$('#wfRun');
    var timers=[],sc=0,live=false;
    function clr(){timers.forEach(clearTimeout);timers=[];}
    function at(t,fn){timers.push(setTimeout(fn,t));}
    function reset(s){
      rows.forEach(function(r){r.className='wr';$('.v',r).textContent='—';$('.st',r).textContent='waiting';});
      [nd1,nd2,nd3].forEach(function(n){n.className='nd';});
      [ln1,ln2].forEach(function(l){l.className='ln';});
      alertEl.classList.remove('on');log.classList.remove('bad');
      $('#nd1i').innerHTML=s.ic;$('#nd1n').textContent=s.n;$('#nd1s').textContent=s.s;
      nd1.classList.add('src');if(!s.pass)nd1.classList.add('leak');
      runEl.textContent=s.run;log.innerHTML=s.start;
    }
    function row(i,s){var r=rows[i],d=s.rows[i];r.classList.add('on',d[1]);$('.v',r).textContent=d[0];$('.st',r).textContent=d[2];}
    function finalState(s){
      reset(s);s.rows.forEach(function(d,i){row(i,s);});
      ln1.classList.add('on',s.pass?'ok':'bad');
      if(s.pass){ln2.classList.add('on','ok');nd2.classList.add('ok');nd3.classList.add('ok');}
      else{nd2.classList.add('bad');nd3.classList.add('off');alertEl.classList.add('on');log.classList.add('bad');}
      log.innerHTML=s.end;
    }
    function play(){
      clr();var s=SC[sc];reset(s);
      at(450,function(){ln1.classList.add('run','on');});
      at(1250,function(){nd2.classList.add('act');row(0,s);});
      at(2050,function(){row(1,s);});
      at(2850,function(){row(2,s);});
      if(s.pass){
        at(3650,function(){ln1.classList.add('ok');nd2.classList.remove('act');nd2.classList.add('ok');ln2.classList.add('run','on','ok');});
        at(4450,function(){nd3.classList.add('ok');row(3,s);log.innerHTML=s.end;});
      }else{
        at(3650,function(){nd2.classList.remove('act');nd2.classList.add('bad');ln1.classList.add('bad');nd3.classList.add('off');row(3,s);});
        at(4250,function(){alertEl.classList.add('on');log.classList.add('bad');log.innerHTML=s.end;});
      }
      at(8600,function(){sc=(sc+1)%SC.length;play();});
    }
    if(reduce){finalState(SC[1]);}
    else XH.whenVisible(wfx,function(v){if(v&&!live){live=true;play();}else if(!v&&live){live=false;clr();}});
  }

  /* ================= 2. What-is diagram: pause flow dots offscreen ================= */
  var wi=$('#wiDiag');if(wi)XH.whenVisible(wi,function(v){wi.classList.toggle('paused',!v);});

  /* ================= 3. Secret vs federation explainer ================= */
  var SF={
    secret:{h:'Client secret: a password for your pipeline',file:'.github/workflows/deploy.yml — with a secret',
      steps:[['','<b>Create a client secret</b> on the app registration and copy its value — it is shown only once.'],
             ['risk','<b>Paste it into GitHub</b> as a repository secret — and often a laptop, a wiki or a ticket too.'],
             ['','The workflow sends the secret to Microsoft Entra and receives an access token.'],
             ['risk','<b>Rotate it by hand</b> before it expires, then update every place it was copied.']],
      facts:[['hi','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>','Where it lives','GitHub secrets + every copy made',85,'High'],
             ['hi','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>','Rotation burden','Manual, every 6–24 months',80,'High'],
             ['hi','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>','If it leaks','Works from anywhere until revoked',92,'Critical']],
      note:'<i class="r"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg></i><span><b>If this secret leaks,</b> anyone holding it can sign in as your app. Workload ID’s leaked-credential detection and location-based Conditional Access are your safety net.</span>',
      code:['name: deploy-api','on:','  push:','    branches: [main]','','jobs:','  deploy:','    runs-on: ubuntu-latest','    steps:','      - uses: actions/checkout@v4','      - uses: azure/login@v2','        with:','          # JSON holding clientId, clientSecret, tenantId, subscriptionId','!          creds: ${{ secrets.AZURE_CREDENTIALS }}','      - run: az webapp deploy -g rg-pay-prod -n api-payments --src-path dist.zip']},
    fed:{h:'Federation: trust GitHub’s token instead',file:'.github/workflows/deploy.yml — secretless',
      steps:[['good','<b>Add a federated credential</b> to the app that trusts GitHub for one repo and environment.'],
             ['','The workflow asks GitHub for a <b>short-lived OIDC token</b> — it needs <span class="mono">id-token: write</span>.'],
             ['','Microsoft Entra checks the issuer, subject and audience, then exchanges it for an access token.'],
             ['good','<b>Nothing to store or rotate.</b> Tokens expire within minutes and only work from that repo.']],
      facts:[['lo','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>','Where it lives','Nowhere — no secret exists',6,'None'],
             ['lo','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>','Rotation burden','None',4,'None'],
             ['lo','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>','If it leaks','Short-lived, bound to one repo',18,'Low']],
      note:'<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg></i><span><b>Federated credential</b> — issuer <code>https://token.actions.githubusercontent.com</code>, subject <code>repo:yourorg/payments-api:environment:production</code>, audience <code>api://AzureADTokenExchange</code>. Free with Microsoft Entra ID.</span>',
      code:['name: deploy-api','on:','  push:','    branches: [main]','','+permissions:','+  id-token: write   # lets the job request an OIDC token','  contents: read','','jobs:','  deploy:','    runs-on: ubuntu-latest','    environment: production','    steps:','      - uses: actions/checkout@v4','      - uses: azure/login@v2','        with:','+          client-id: ${{ vars.AZURE_CLIENT_ID }}','+          tenant-id: ${{ vars.AZURE_TENANT_ID }}','+          subscription-id: ${{ vars.AZURE_SUBSCRIPTION_ID }}','      - run: az webapp deploy -g rg-pay-prod -n api-payments --src-path dist.zip']}
  };
  function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}
  function hlLine(raw){
    var mark=raw.charAt(0),line=(mark==='!'||mark==='+')?raw.slice(1):raw;
    var out;
    if(/^\s*#/.test(line))out='<span class="cm">'+esc(line)+'</span>';
    else{
      var cmt='',ci=line.indexOf(' #');if(ci>-1){cmt=line.slice(ci);line=line.slice(0,ci);}
      out=esc(line).replace(/^(\s*-?\s*)([\w.-]+):/,'$1<span class="kk">$2</span>:').replace(/\$\{\{[^}]*\}\}/g,function(m){return '<span class="ex">'+m+'</span>';});
      if(cmt)out+='<span class="cm">'+esc(cmt)+'</span>';
    }
    if(mark==='!')out='<span class="hl">'+out+'</span>';if(mark==='+')out='<span class="ok">'+out+'</span>';
    return out;
  }
  var sf=$('#sf'),sfSeg=$('#sfSeg');
  function sfShow(k){
    var d=SF[k];sf.classList.remove('secret','fed');sf.classList.add(k);
    $('#sfH').textContent=d.h;$('#sfFile').textContent=d.file;
    $('#sfSteps').innerHTML=d.steps.map(function(s,i){return '<li class="'+s[0]+'" style="animation-delay:'+(i*.06)+'s">'+s[1]+'</li>';}).join('');
    $('#sfFacts').innerHTML=d.facts.map(function(f,i){return '<div class="sff '+f[0]+'" style="animation-delay:'+(i*.06)+'s"><span class="k">'+f[1]+f[2]+'</span><b>'+f[3]+'</b><div class="m"><i data-w="'+f[4]+'"></i></div><div class="lv">Risk: '+f[5]+'</div></div>';}).join('');
    requestAnimationFrame(function(){requestAnimationFrame(function(){$$('#sfFacts .m i').forEach(function(m){m.style.width=m.getAttribute('data-w')+'%';});});});
    var pre=$('#sfCode');pre.innerHTML=d.code.map(hlLine).join('\n');pre.style.animation='none';void pre.offsetWidth;pre.style.animation='';
    $('#sfCopy').setAttribute('data-copy',d.code.map(function(l){return /^[!+]/.test(l)?l.slice(1):l;}).join('\n'));
    $('#sfNote').innerHTML=d.note;
  }
  if(sf){sfSeg.addEventListener('change',function(){sfShow(sfSeg.dataset.value);});sfShow(sfSeg.dataset.value||'fed');}

  /* ================= 4. Workload identity risk check ================= */
  var F={CA:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>','Conditional Access'],CAE:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>','Continuous access eval.'],IDP:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>','ID Protection'],AR:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>','Access reviews'],
         AH:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>','App health'],CSA:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>','Security attributes'],FED:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>','Federation · free',1],MI:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>','Managed identities · free',1]};
  var rkN=$('#rkN'),rkS=$('#rkS'),rkC=$('#rkC'),rkP=$('#rkP'),rkOld=$('#rkOld'),rkUn=$('#rkUn'),rkOw=$('#rkOw'),scoreShown=0,stw=null;
  var G=$('#rkG');
  function pt(f,r){var a=Math.PI*f;return [(110-r*Math.cos(a)).toFixed(2),(112-r*Math.sin(a)).toFixed(2)];}
  function arc(f0,f1,r){var a=pt(f0,r),b=pt(f1,r);return 'M'+a[0]+' '+a[1]+' A'+r+' '+r+' 0 0 1 '+b[0]+' '+b[1];}
  if(G){
    G.innerHTML='<path class="trk t1" d="'+arc(0,.3,90)+'"/><path class="trk t2" d="'+arc(.3,.6,90)+'"/><path class="trk t3" d="'+arc(.6,1,90)+'"/>'+
      '<path class="val" id="rkVal" pathLength="100" stroke-dasharray="0 100" d="'+arc(0,1,90)+'"/>'+
      '<g class="ndl" id="rkNdl"><circle cx="110" cy="22" r="8"/></g>'+
      '<text class="tk" x="20" y="126" text-anchor="middle">0</text><text class="tk" x="200" y="126" text-anchor="middle">100</text>';
  }
  function rk(){
    if(!rkN)return;
    var n=+rkN.value,s=+rkS.value,c=+rkC.value,p=Math.max(0,Math.min(50,+rkP.value||0)),old=+(rkOld.dataset.value||0),un=+(rkUn.dataset.value||0),ow=+(rkOw.dataset.value||0),f=100-s-c;
    $('#rkNL').textContent=n.toLocaleString('en-IN');$('#rkPL').textContent=p;
    $('#mxS').style.width=s+'%';$('#mxC').style.width=c+'%';$('#mxF').style.width=f+'%';
    $('#mxSL').textContent=s+'%';$('#mxCL').textContent=c+'%';$('#mxFL').textContent=f+'%';$('#rkMixL').textContent=s+'% secrets';
    var score=s*.30+c*.08+(s>0?[0,8,16,12][old]:0)+Math.min(20,p*4)+[0,6,12,9][un]+[0,4,10,8][ow]+Math.min(8,Math.log10(Math.max(n,1))*2.7);
    score=Math.max(0,Math.min(100,Math.round(score)));
    var band=score>=60?['hi','High']:score>=30?['md','Moderate']:['lo','Low'];
    var col={hi:'#c0392b',md:'#FF8C1A',lo:'#16a34a'}[band[0]];
    var v=$('#rkVal');v.style.strokeDasharray=score+' 100';v.style.stroke=col;
    $('#rkNdl').style.transform='rotate('+(-90+180*score/100)+'deg)';
    var bEl=$('#rkBand');bEl.textContent=band[1]+' risk';bEl.className=band[0];
    tweenScore(score);
    var withSecrets=Math.round(n*s/100);
    $('#rkSum').textContent=(band[0]==='hi'?'High exposure. These fixes close the most common attack paths on machine identities.':band[0]==='md'?'Real exposure in places. A few targeted changes will cut it sharply.':'Good foundations. Workload ID keeps watch for leaks and drift.')+(withSecrets?' About '+withSecrets.toLocaleString('en-IN')+' of your identities still sign in with a secret.':'');
    var R=[
      {w:s*.45,t:'Replace client secrets with federation',p:'Move pipelines to workload identity federation and Azure-hosted code to managed identities.',f:['FED','MI','AH']},
      {w:s>0?[0,14,26,20][old]:0,t:'Expire and replace old secrets',p:'Long-lived secrets are the ones most likely to have leaked. Retire them and watch for exposure.',f:['AH','IDP']},
      {w:Math.min(30,p*6),t:'Review privileged service principals',p:p+' service principal'+(p===1?' holds':'s hold')+' privileged roles. Put them on a recurring review and restrict where they sign in from.',f:['AR','CA']},
      {w:10+(s+c)*.12,t:'Lock sign-ins to known locations',p:'Allow workload sign-ins only from your CI runners and data-centre IP ranges.',f:['CA','CAE']},
      {w:4+s*.2+(old>=1?8:0),t:'Turn on risk-based blocking',p:'Block any workload identity flagged for leaked credentials or suspicious sign-ins.',f:['IDP','CA']},
      {w:[0,12,22,15][un],t:'Clean up unused apps',p:'Disable, then delete, apps with no sign-ins in 90 days — each one is attack surface.',f:['AH','AR']},
      {w:[2,8,20,14][ow],t:ow?'Give every app an owner':'Tag apps by what they touch',p:ow?'Owners answer reviews and receive alerts. Tag apps by data class and business unit.':'Label apps by data class and business unit, then scope policies and reviews by tag.',f:['CSA','AR']}
    ].filter(function(r){return r.w>0;}).sort(function(a,b){return b.w-a.w;}).slice(0,3);
    var key=R.map(function(r){return r.t;}).join('|');
    var list=$('#rkRecs');
    if(list.getAttribute('data-k')!==key){list.setAttribute('data-k',key);
      list.innerHTML=R.map(function(r){return '<li><b>'+r.t+'</b><p>'+r.p+'</p><div class="ft">'+r.f.map(function(k){var x=F[k];return '<span'+(x[2]?' class="fr"':'')+'><i>'+x[0]+'</i>'+x[1]+'</span>';}).join('')+'</div></li>';}).join('');}
    else{var p2=$$('li p',list);R.forEach(function(r,i){if(p2[i])p2[i].textContent=r.p;});}
    $('#rkPriceN').textContent=Math.min(n,1000).toLocaleString('en-IN');
  }
  function tweenScore(to){var el=$('#rkScore');if(reduce){el.textContent=to;scoreShown=to;return;}var from=scoreShown,t0=null;cancelAnimationFrame(stw);
    function f(t){t0=t0||t;var q=Math.min(1,(t-t0)/600),e=1-Math.pow(1-q,3);el.textContent=Math.round(from+(to-from)*e);if(q<1)stw=requestAnimationFrame(f);else scoreShown=to;}stw=requestAnimationFrame(f);}
  if(rkN){
    rkS.addEventListener('input',function(){if(+rkS.value+ +rkC.value>100){rkC.value=100-rkS.value;XH.fillRange(rkC);}rk();});
    rkC.addEventListener('input',function(){if(+rkS.value+ +rkC.value>100){rkS.value=100-rkC.value;XH.fillRange(rkS);}rk();});
    rkN.addEventListener('input',rk);rkP.addEventListener('input',rk);
    [rkOld,rkUn,rkOw].forEach(function(s){s.addEventListener('change',rk);});
    var rkStarted=false;XH.whenVisible($('#rk'),function(v){if(v&&!rkStarted){rkStarted=true;rk();}});
    rk();
  }

  if (!heroMode) {
  /* ================= 5. Pricing: plan card + seat calculator ================= */
  var P={m:228,y:2640},LM=250,L={m:LM,y:LM*12};
  var pctY=Math.round((L.y-P.y)/L.y*100),pctM=Math.round((L.m-P.m)/L.m*100);
  $('#pcList').textContent=XH.inr(LM);
  $('#pcSave').textContent='Save '+pctY+'%';$('#pcM').textContent=XH.inr(P.m);$('#pcY').textContent=XH.inr(P.y);
  $('#cBillM').textContent=XH.inr(P.m)+' / identity / mo · save '+pctM+'%';
  $('#cBillY').textContent=XH.inr(P.y)+' / identity / yr · save '+pctY+'%';
  var seats=$('#cSeats'),seatsN=$('#cSeatsN'),bill=$('#cBill'),totShown=0,tw=null;
  function tween(el,to){if(reduce){el.textContent=XH.inr(to);totShown=to;return;}var from=totShown,t0=null;cancelAnimationFrame(tw);
    function f(t){t0=t0||t;var q=Math.min(1,(t-t0)/450),e=1-Math.pow(1-q,3);el.textContent=XH.inr(from+(to-from)*e);if(q<1)tw=requestAnimationFrame(f);else totShown=to;}tw=requestAnimationFrame(f);}
  function setTxt(id,t){var el=$(id);if(el.textContent!==t){el.textContent=t;XH.flash(el);}}
  function calc(){
    var n=Math.max(1,Math.min(1000,Math.round(+seats.value||1))),b=bill.dataset.value||'y';
    var tot=n*P[b],list=n*L[b],save=list-tot,gst=Math.round(tot*.18),unit=b==='y'?'/yr':'/mo';
    var lbl=n+(n===1?' workload identity':' workload identities');
    $('#cSeatsL').textContent=lbl;
    $('#oSub').textContent=(b==='y'?'for 12 months · ':'per month · ')+lbl+', excl. GST';
    $('#oLine').textContent='Per workload identity';
    setTxt('#oPer',XH.inr(P[b])+unit);setTxt('#oList',XH.inr(list));setTxt('#oSave','−'+XH.inr(save));setTxt('#oGst',XH.inr(gst));setTxt('#oPay',XH.inr(tot+gst));
    var eff=b==='y'?Math.round(P.y/12):P.m,pc=b==='y'?pctY:pctM;
    $('#cCmp').innerHTML='<div><span>Effective/mo</span><b>'+XH.inr(eff)+'</b></div><div><span>MS list price</span><b><s>'+XH.inr(LM)+'</s></b></div><div class="g"><span>You save</span><b>'+pc+'%</b></div>';
    var yr=[['ms','Microsoft list',n*L.y],['mo','Monthly × 12',n*P.m*12],['yr','XcellHost yearly',n*P.y]],mx=n*L.y;
    $('#cBars').innerHTML='<div class="bh">12-month cost for '+lbl+'</div>'+yr.map(function(r){return '<div class="br '+r[0]+'"><span>'+r[1]+'</span><div class="tk"><i style="width:'+(r[2]/mx*100).toFixed(1)+'%"></i></div><b>'+XH.inr(r[2])+'</b></div>';}).join('');
    tween($('#oTot'),tot);
    return {n:n,b:b,tot:tot};
  }
  function setSeats(n,from){n=Math.max(1,Math.min(1000,Math.round(+n||1)));if(from!=='r'){seats.value=n;XH.fillRange(seats);}if(from!=='n'||+seatsN.value!==n&&root.activeElement!==seatsN)seatsN.value=n;calc();}
  seats.addEventListener('input',function(){setSeats(seats.value,'r');});
  seatsN.addEventListener('input',function(){if(seatsN.value==='')return;setSeats(seatsN.value,'n');});
  seatsN.addEventListener('blur',function(){setSeats(seatsN.value);});
  bill.addEventListener('change',calc);
  calc();
  $('#oAdd').addEventListener('click',function(){var c=calc();
    XH.cart.add({key:'entra-workload-id-'+c.b+'-'+c.n,name:'Microsoft Entra Workload ID — '+c.n+(c.n===1?' workload identity':' workload identities'),
      sub:(c.b==='y'?'Yearly · ':'Monthly · ')+XH.inr(P[c.b])+(c.b==='y'?'/identity/yr':'/identity/mo'),price:c.tot,qty:1});});
  var rp=$('#rkPrice');if(rp)rp.addEventListener('click',function(){setSeats(Math.min(+rkN.value,1000));root.getElementById('configure').scrollIntoView({behavior:reduce?'auto':'smooth',block:'center'});XH.flash($('#oTot'));});

  }

  return () => { disposed = true; root.removeEventListener('click', click); observers.forEach(o => o.disconnect()); scheduledTimers.forEach(window.clearTimeout); frames.forEach(window.cancelAnimationFrame); };
}
