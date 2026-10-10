// @ts-nocheck
// Adapted interactive demos from the supplied HTML; queries stay inside this component.
export function initializeInternetAccess(root: ShadowRoot, heroMode: boolean, quote: (topic: string) => void, add: (line: any) => void): () => void {
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
    const callback = e.target.closest('[data-open]'); if (callback) { e.preventDefault(); quote(callback.dataset.topic || 'Microsoft Entra Internet Access'); }
    const link = e.target.closest('a[href]'); if (link && link.getAttribute('href').startsWith('#')) { const target = root.getElementById(link.getAttribute('href').slice(1)); if (target) {e.preventDefault(); target.scrollIntoView({behavior: reduce ? 'auto' : 'smooth', block: 'start'});} }
    const copy = e.target.closest('[data-copy]'); if (copy) navigator.clipboard?.writeText(copy.dataset.copy);
  };
  root.addEventListener('click', click);

  XH.observe = () => {};
  XH.toast = message => { let notice=$('.demo-toast');if(!notice){notice=document.createElement('div');notice.className='demo-toast';notice.setAttribute('role','status');root.querySelector('.internet-shell').appendChild(notice);}notice.textContent=message; };
  XH.download = (name,content,type) => { const url=URL.createObjectURL(new Blob([content],{type})),a=document.createElement('a');a.href=url;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000); };
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function num(n){return Math.round(n).toLocaleString('en-IN');}
  /* ================= 2. Hero visual: gateway decision stream ================= */
  var I_OK='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>',I_NO='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>';
  var EVENTS=[
    {s:0,who:'Priya · Finance',dst:'sharepoint.com',ok:1,v:'Allowed',r:'M365 profile',pol:'Microsoft traffic profile'},
    {s:2,who:'Pune branch',dst:'Betting site',ok:0,v:'Blocked',r:'Gambling',pol:'All staff profile · 200'},
    {s:1,who:'Neha · Intern',dst:'Unsanctioned AI chatbot',ok:0,v:'Blocked',r:'Shadow AI',pol:'Interns profile · 100'},
    {s:0,who:'Arjun · Developers',dst:'Prompt with injection attempt',ok:0,v:'Blocked',r:'Injection',pol:'Prompt shield · TLS inspected'},
    {s:2,who:'Pune branch',dst:'Malware domain',ok:0,v:'Blocked',r:'Threat intel',pol:'Baseline profile · 65000'},
    {s:1,who:'Arjun · Developers',dst:'github.com',ok:1,v:'Allowed',r:'FQDN rule',pol:'Developers profile · 100'}
  ];
  var gw=$('#gw');
  if(gw){
    var list=$('#gwList'),pk=$('#gwPk'),ring=$('#gwRing'),node=$('#gwNode'),stamp=$('#gwStamp'),lo=$('#gwLo'),dst=$('.scene .dst');
    var srcs=$$('.scene .src'),lines=[$('#gwL0'),$('#gwL1'),$('#gwL2')];
    var C={i:1284,o:1197,n:87},ei=0,visible=false,busy=false,ROWH=57;
    function rowHtml(e,fresh){return '<div class="ev'+(e.ok?'':' no')+(fresh?' fresh':'')+'"><span class="vi">'+(e.ok?I_OK:I_NO)+'</span><div class="m"><b>'+esc(e.dst)+'</b><span>'+esc(e.who)+' → <em>'+esc(e.pol)+'</em></span></div><span class="vd">'+e.v+'<br>'+esc(e.r)+'</span></div>';}
    function paintC(){$('#gwIn').textContent=num(C.i);$('#gwOk').textContent=num(C.o);$('#gwNo').textContent=num(C.n);}
    // seed feed with the last four events (newest first)
    list.innerHTML=[5,4,3,2].map(function(k){return rowHtml(EVENTS[k]);}).join('');paintC();
    function push(e){
      list.classList.remove('slide');list.insertAdjacentHTML('afterbegin',rowHtml(e,true));
      if(!reduce){list.style.transform='translateY(-'+ROWH+'px)';void list.offsetWidth;list.classList.add('slide');list.style.transform='translateY(0)';}
      setTimeout(function(){var r=$$('.ev',list);for(var k=5;k<r.length;k++)r[k].remove();},650);
      C.i+=1+Math.floor(Math.random()*4);if(e.ok)C.o+=1+Math.floor(Math.random()*3);else C.n+=1;C.o=Math.max(C.o,C.i-C.n);paintC();
    }
    function travel(path,dur,done){
      var L=path.getTotalLength(),t0=null;
      function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/dur),e=p<.5?2*p*p:1-Math.pow(-2*p+2,2)/2,q=path.getPointAtLength(L*e);pk.setAttribute('cx',q.x);pk.setAttribute('cy',q.y);if(p<1)requestAnimationFrame(f);else done();}
      requestAnimationFrame(f);
    }
    function reset(){srcs.forEach(function(s){s.classList.remove('on');});lines.forEach(function(l){l.classList.remove('act');});lo.classList.remove('ok');node.classList.remove('ok','no');stamp.className='stamp';dst.classList.remove('on');pk.setAttribute('class','pk');pk.setAttribute('cx',-20);pk.setAttribute('cy',-20);}
    function cycle(){
      if(!visible){busy=false;return;}
      busy=true;var e=EVENTS[ei];ei=(ei+1)%EVENTS.length;reset();
      srcs[e.s].classList.add('on');lines[e.s].classList.add('act');
      travel(lines[e.s],760,function(){
        node.classList.add(e.ok?'ok':'no');pk.setAttribute('class','pk '+(e.ok?'ok':'no'));
        ring.setAttribute('class','ring '+(e.ok?'ok':'no'));ring.getBoundingClientRect();ring.setAttribute('class','ring go '+(e.ok?'ok':'no'));
        stamp.textContent=e.ok?'✓ allowed':'✕ '+e.r.toLowerCase();stamp.className='stamp on'+(e.ok?'':' no');
        push(e);
        if(e.ok){lo.classList.add('ok');setTimeout(function(){travel(lo,480,function(){dst.classList.add('on');setTimeout(next,900);});},260);}
        else{setTimeout(function(){pk.setAttribute('cx',-20);pk.setAttribute('cy',-20);next();},1250);}
      });
    }
    function next(){setTimeout(cycle,380);}
    if(reduce){reset();}
    else XH.whenVisible(gw,function(v){visible=v;if(v&&!busy)cycle();});
  }

  /* ================= 3. Web filtering policy builder & tester ================= */
  var CATS=[
    {id:'gambling',n:'Gambling',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>'},
    {id:'adult',n:'Adult content',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>'},
    {id:'malware',n:'Malware & phishing',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg>'},
    {id:'social',n:'Social media',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>'},
    {id:'video',n:'Video streaming',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>'},
    {id:'genai',n:'Generative AI apps (unsanctioned)',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>'},
    {id:'p2p',n:'Peer-to-peer',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>'},
    {id:'hacking',n:'Hacking tools',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/></svg>'}
  ];
  var CATNAME={biz:'Business & productivity',dev:'Developer tools',aiok:'Generative AI (sanctioned)',files:'File sharing',search:'Search engines',fin:'Banking & finance',gov:'Government',unc:'Uncategorised'};
  CATS.forEach(function(c){CATNAME[c.id]=c.id==='genai'?'Generative AI (unsanctioned)':c.n;});
  var DB={'sharepoint.com':'biz','office.com':'biz','microsoft.com':'biz','microsoft365.com':'biz','copilot.microsoft.com':'aiok','zoho.com':'biz','salesforce.com':'biz',
    'github.com':'dev','npmjs.org':'dev','pypi.org':'dev','stackoverflow.com':'dev','docker.com':'dev',
    'youtube.com':'video','netflix.com':'video','hotstar.com':'video','primevideo.com':'video',
    'facebook.com':'social','instagram.com':'social','x.com':'social','twitter.com':'social','linkedin.com':'social','reddit.com':'social',
    'chatgpt.com':'genai','openai.com':'genai','gemini.google.com':'genai','claude.ai':'genai','perplexity.ai':'genai','deepseek.com':'genai',
    'wetransfer.com':'files','dropbox.com':'files','google.com':'search','bing.com':'search','hdfcbank.com':'fin','icicibank.com':'fin','gov.in':'gov',
    'quickbets-live.example':'gambling','freechat-ai.example':'genai','torrent-swarm.example':'p2p','exploit-kit.example':'hacking','adult-site.example':'adult','login-m1crosoft.example':'malware','cdn-upd4te.example':'unc'};
  var THREAT={'login-m1crosoft.example':1,'cdn-upd4te.example':1};
  var BASELINE=['malware','adult'];
  var USERS={priya:{n:'Priya',g:'finance'},arjun:{n:'Arjun',g:'dev'},neha:{n:'Neha',g:'intern'},rahul:{n:'Rahul',g:'sales'}};
  var GN={all:'All staff',finance:'Finance',dev:'Developers',intern:'Interns',sales:'Sales'};
  var PRESETS={
    office:{group:'all',cats:['gambling','adult','malware','genai','p2p','hacking'],rules:[],tls:true,ti:true},
    finance:{group:'finance',cats:['gambling','adult','malware','social','video','genai','p2p','hacking'],rules:[{a:'allow',p:'*.sharepoint.com'},{a:'block',p:'wetransfer.com'}],tls:true,ti:true},
    dev:{group:'dev',cats:['gambling','adult','malware','genai','p2p'],rules:[{a:'allow',p:'github.com'},{a:'allow',p:'*.npmjs.org'},{a:'allow',p:'pypi.org'}],tls:true,ti:true}
  };
  var SAMPLES=[
    {h:'sharepoint.com',l:'sharepoint.com',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>'},
    {h:'github.com',l:'github.com',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7M18 10.5c0 4-6 3-10 6"/></svg>'},
    {h:'quickbets-live.example',l:'Betting site',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>'},
    {h:'freechat-ai.example',l:'Unsanctioned AI',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>'},
    {h:'copilot.microsoft.com',l:'Copilot + injected prompt',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>',pay:'inject'},
    {h:'cdn-upd4te.example',l:'Malware domain',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg>'},
    {h:'login-m1crosoft.example',l:'Phishing page',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>'},
    {h:'youtube.com',l:'youtube.com',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>'},
    {h:'instagram.com',l:'instagram.com',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>'},
    {h:'dropbox.com',l:'Aadhaar file upload',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V9M7 14l5-5 5 5M4 3h16"/></svg>',pay:'pii'},
    {h:'torrent-swarm.example',l:'Torrent tracker',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>'}
  ];
  var pb=$('#pb');
  if(pb){
    var S={group:'all',cats:[],rules:[],tls:true,ti:true};
    var gSeg=$('#pbGroup'),catBox=$('#pbCats'),rulesBox=$('#pbRules'),fqIn=$('#pbFqdn'),fqW=$('#pbFqW'),actSeg=$('#pbAct'),tls=$('#pbTls'),ti=$('#pbTi');
    var uSel=$('#pbUser'),pSel=$('#pbPay'),urlIn=$('#pbUrl'),urlW=$('#pbUrlW');
    var FQ_RE=/^(\*\.)?([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z][a-z0-9-]{0,61}[a-z0-9]$/;
    var HOST_RE=/^([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z][a-z0-9-]{0,61}[a-z0-9]$/;
    catBox.innerHTML=CATS.map(function(c){return '<button type="button" class="cat" data-c="'+c.id+'" aria-pressed="false"><i>'+c.ic+'</i><span>'+esc(c.n)+'</span><em></em></button>';}).join('');
    $('#pbSamples').innerHTML=SAMPLES.map(function(s,k){return '<button type="button" class="smp" data-k="'+k+'"><i>'+s.ic+'</i>'+esc(s.l)+'</button>';}).join('');

    function pri(){return S.group==='all'?200:100;}
    function paintCfg(){
      $$('.cat',catBox).forEach(function(b){var on=S.cats.indexOf(b.getAttribute('data-c'))>-1;b.setAttribute('aria-pressed',on);$('em',b).textContent=on?'Block':'Allow';});
      $('#pbCatN').textContent=S.cats.length+' of '+CATS.length+' blocked';
      $('#pbPri').textContent=GN[S.group]+' profile · priority '+pri();
      $$('button',gSeg).forEach(function(b){var on=b.getAttribute('data-v')===S.group;b.classList.toggle('on',on);b.setAttribute('aria-pressed',on);});gSeg.dataset.value=S.group;
      rulesBox.innerHTML=S.rules.length?S.rules.map(function(r,k){return '<span class="rule '+r.a+'"><i>'+(r.a==='allow'?I_OK:I_NO)+'</i>'+(r.a==='allow'?'allow':'block')+' · '+esc(r.p)+'<button type="button" data-rm="'+k+'" aria-label="Remove rule '+esc(r.p)+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg></button></span>';}).join(''):'<span class="none">No FQDN rules yet — add one above.</span>';
      tls.checked=S.tls;ti.checked=S.ti;
    }
    function manual(){$$('#pbPresets button').forEach(function(b){b.classList.remove('on');});}
    function applyPreset(k){var p=PRESETS[k];S={group:p.group,cats:p.cats.slice(),rules:p.rules.map(function(r){return {a:r.a,p:r.p};}),tls:p.tls,ti:p.ti};
      $$('#pbPresets button').forEach(function(b){b.classList.toggle('on',b.getAttribute('data-preset')===k);});
      if(k==='finance')uSel.value='priya';else if(k==='dev')uSel.value='arjun';
      paintCfg();run(true);}

    function lookup(h){var parts=h.split('.');for(var i=0;i<parts.length-1;i++){var c=parts.slice(i).join('.');if(DB[c])return DB[c];}
      if(/bet|casino|poker|rummy|lottery/.test(h))return 'gambling';if(/torrent|magnet/.test(h))return 'p2p';if(/porn|xxx|adult/.test(h))return 'adult';
      if(/exploit|hack/.test(h))return 'hacking';if(/phish|login-|verify-/.test(h))return 'malware';if(/chatbot|gpt/.test(h))return 'genai';return 'unc';}
    function ruleMatch(r,h){if(r.p.indexOf('*.')===0){var base=r.p.slice(2);return h===base||h.slice(-(base.length+1))==='.'+base;}return h===r.p;}
    function parseHost(v){v=String(v||'').trim().toLowerCase().replace(/^[a-z]+:\/\//,'').split(/[\/?#]/)[0].replace(/:\d+$/,'').replace(/\.$/,'');return HOST_RE.test(v)?v:null;}

    function evaluate(uk,h,pay){
      var u=USERS[uk],cat=lookup(h),cn=CATNAME[cat],P=pri(),gname=GN[S.group],inScope=S.group==='all'||u.g===S.group;
      var st=[],dec=null,fqAllow=null;
      function add(pr,b,sm,tag,cls){st.push({pr:pr,b:b,sm:sm,tag:tag,cls:cls||''});}
      add('CA','Conditional Access scope',inScope?(u.n+(S.group==='all'?' is staff':' is in '+gname)+' → '+gname+' profile applies'):(u.n+' is in '+GN[u.g]+', not '+gname+' → profile skipped'),inScope?'applies':'skipped');
      if(!inScope){
        ['Threat intelligence','FQDN rules','Web categories','TLS inspection · prompt & file checks'].forEach(function(n){add(P,n,'Profile not applied to '+u.n,'skipped','skip');});
      } else {
        // threat intelligence
        if(!S.ti)add(P,'Threat intelligence','Switched off in this profile','off','skip');
        else if(THREAT[h]){dec={ok:0,r:'Threat intelligence',sub:'Known malicious destination · '+gname+' profile ('+P+')'};add(P,'Threat intelligence','Destination is on the threat-intelligence feed','block','match-no');}
        else add(P,'Threat intelligence','Not a known threat','no match');
        // FQDN rules
        if(dec)add(P,'FQDN rules','','not run','ne');
        else{var m=null;for(var k=0;k<S.rules.length;k++){if(ruleMatch(S.rules[k],h)){m=S.rules[k];break;}}
          if(!m)add(P,'FQDN rules',S.rules.length?'No rule matches '+h:'No FQDN rules in this profile','no match');
          else if(m.a==='block'){dec={ok:0,r:'FQDN block rule',sub:'Rule “'+m.p+'” · '+gname+' profile ('+P+')'};add(P,'FQDN rules','Block rule “'+m.p+'” matches','block','match-no');}
          else{fqAllow=m;add(P,'FQDN rules','Allow rule “'+m.p+'” matches — category check skipped','allow','match-ok');}}
        // categories
        if(dec)add(P,'Web categories','','not run','ne');
        else if(fqAllow)add(P,'Web categories','Skipped — explicit FQDN allow','skipped','skip');
        else if(S.cats.indexOf(cat)>-1){dec={ok:0,r:CATNAME[cat],sub:'Web category block · '+gname+' profile ('+P+')'};add(P,'Web categories','Category: '+cn+' — blocked','block','match-no');}
        else add(P,'Web categories','Category: '+cn+' — not blocked','no match');
        // content
        var cname='TLS inspection · prompt & file checks';
        if(dec)add(P,cname,'','not run','ne');
        else if(pay==='none')add(P,cname,'No prompt or file in this request','n/a');
        else if(!S.tls)add(P,cname,'TLS inspection off — content not visible','not seen','skip');
        else if(pay==='inject'){dec={ok:0,r:'Prompt injection',sub:'Prompt shield on decrypted traffic · '+gname+' profile ('+P+')'};add(P,cname,'Prompt contains an injection attempt','block','match-no');}
        else {dec={ok:0,r:'Sensitive data upload',sub:'File carries Aadhaar numbers · '+gname+' profile ('+P+')'};add(P,cname,'Uploaded file contains Aadhaar numbers','block','match-no');}
        if(!dec&&fqAllow)dec={ok:1,r:'FQDN allow rule',sub:'Rule “'+fqAllow.p+'” · '+gname+' profile ('+P+')'};
      }
      // baseline
      if(dec)add('65000','Baseline profile','','not run','ne');
      else if(BASELINE.indexOf(cat)>-1){dec={ok:0,r:CATNAME[cat],sub:'Baseline profile (65000) applies to all traffic'};add('65000','Baseline profile','Blocks '+cn+' for everyone','block','match-no');}
      else add('65000','Baseline profile','Blocks Malware & phishing, Adult content — no match','no match');
      if(dec)add('—','Default action','','not run','ne');
      else{dec={ok:1,r:'No rule blocked it',sub:'Category: '+cn+(pay!=='none'&&!inScope?' · content not inspected for '+u.n:'')};add('—','Default action','Nothing matched — traffic is allowed','allow','match-ok');}
      return {dec:dec,steps:st,cat:cn};
    }
    var vEl=$('#pbVerdict'),tr=$('#pbTrace');
    function run(anim){
      var h=parseHost(urlIn.value);urlW.classList.toggle('err',!h);if(!h){vEl.className='verdict';$('#pbVi').innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>';$('#pbVb').textContent='Waiting for a valid site';$('#pbVs').textContent='Type a domain such as github.com, or pick a sample';tr.innerHTML='';return;}
      var r=evaluate(uSel.value,h,pSel.value),d=r.dec;
      vEl.className='verdict '+(d.ok?'ok':'no');$('#pbVi').innerHTML=d.ok?I_OK:I_NO;
      $('#pbVb').textContent=(d.ok?'Allowed':'Blocked')+' · '+d.r;$('#pbVs').textContent=h+' — '+d.sub;
      if(anim&&!reduce){void vEl.offsetWidth;vEl.classList.add('pop');}
      tr.innerHTML=r.steps.map(function(s,k){return '<li class="'+s.cls+'" style="animation-delay:'+(anim&&!reduce?k*55:0)+'ms"><span class="pr">'+s.pr+'</span><span class="tx"><b>'+esc(s.b)+'</b>'+(s.sm?'<small>'+esc(s.sm)+'</small>':'')+'</span><span class="st">'+s.tag+'</span></li>';}).join('');
      $$('.smp').forEach(function(b){var sm=SAMPLES[+b.getAttribute('data-k')];b.classList.toggle('on',sm.h===h&&(sm.pay||'none')===pSel.value);});
    }
    catBox.addEventListener('click',function(e){var b=e.target.closest('.cat');if(!b)return;var c=b.getAttribute('data-c'),i=S.cats.indexOf(c);if(i>-1)S.cats.splice(i,1);else S.cats.push(c);manual();paintCfg();run(true);});
    gSeg.addEventListener('change',function(){S.group=gSeg.dataset.value;manual();paintCfg();run(true);});
    tls.addEventListener('change',function(){S.tls=tls.checked;manual();run(true);});
    ti.addEventListener('change',function(){S.ti=ti.checked;manual();run(true);});
    function addRule(){
      var v=fqIn.value.trim().toLowerCase().replace(/^[a-z]+:\/\//,'').split(/[\/?#]/)[0];
      if(!FQ_RE.test(v)){fqW.classList.add('err');fqIn.focus();return;}
      fqW.classList.remove('err');
      var a=actSeg.dataset.value||'allow',ex=S.rules.filter(function(r){return r.p===v;})[0];
      if(ex){ex.a=a;XH.toast('Updated rule for '+v);}
      else{if(S.rules.length>=12){XH.toast('Up to 12 rules in this demo');return;}S.rules.push({a:a,p:v});}
      fqIn.value='';manual();paintCfg();run(true);
    }
    $('#pbAdd').addEventListener('click',addRule);
    fqIn.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();addRule();}});
    fqIn.addEventListener('input',function(){if(fqW.classList.contains('err')&&FQ_RE.test(fqIn.value.trim().toLowerCase()))fqW.classList.remove('err');});
    rulesBox.addEventListener('click',function(e){var b=e.target.closest('[data-rm]');if(!b)return;S.rules.splice(+b.getAttribute('data-rm'),1);manual();paintCfg();run(true);});
    $('#pbPresets').addEventListener('click',function(e){var b=e.target.closest('[data-preset]');if(b)applyPreset(b.getAttribute('data-preset'));});
    $('#pbSamples').addEventListener('click',function(e){var b=e.target.closest('.smp');if(!b)return;var s=SAMPLES[+b.getAttribute('data-k')];urlIn.value=s.h;pSel.value=s.pay||'none';run(true);});
    $('#pbGo').addEventListener('click',function(){run(true);});
    urlIn.addEventListener('keydown',function(e){if(e.key==='Enter'){e.preventDefault();run(true);}});
    urlIn.addEventListener('input',function(){if(urlW.classList.contains('err')&&parseHost(urlIn.value))urlW.classList.remove('err');});
    uSel.addEventListener('change',function(){run(true);});pSel.addEventListener('change',function(){run(true);});
    $('#pbJson').addEventListener('click',function(){
      var o={securityProfile:{name:GN[S.group]+' web policy',priority:pri(),conditionalAccess:{assignTo:S.group==='all'?'All users':'Group: '+GN[S.group]},
        threatIntelligence:S.ti?'enabled':'disabled',tlsInspection:S.tls?'enabled':'disabled',
        webContentFiltering:{fqdnRules:S.rules.map(function(r,k){return {order:k+1,action:r.a,destination:r.p};}),blockedCategories:S.cats.map(function(c){return CATNAME[c];})}},
        baselineProfile:{priority:65000,appliesTo:'All internet traffic',blockedCategories:BASELINE.map(function(c){return CATNAME[c];})},
        note:'Design draft from xcellhost.top — XcellHost engineers validate and build this in your tenant.'};
      XH.download('entra-internet-access-policy.json',JSON.stringify(o,null,2),'application/json');XH.toast('Policy draft downloaded');});
    applyPreset('office');
  }

  if (!heroMode) {
  /* ================= 4. Pricing: plan card + seat calculator ================= */
  var PR={m:378,y:4382,lm:415,ly:415*12};
  function pct(a,b){return Math.round((b-a)/b*100);}
  var ySave=PR.ly-PR.y;
  $('#epcList').textContent=XH.inr(PR.lm);$('#epcM').textContent=XH.inr(PR.m);$('#epcY').textContent=XH.inr(PR.y);
  $('#epcPill').textContent='Save '+pct(PR.y,PR.ly)+'% · '+XH.inr(ySave)+'/yr';
  $('#sBillM').textContent=XH.inr(PR.m)+' / user / mo';$('#sBillY').textContent=XH.inr(PR.y)+' / user / yr · save '+pct(PR.y,PR.ly)+'%';
  var seats=$('#sSeats'),rng=$('#sRange'),bill=$('#sBill'),shown=0,tw=null;
  function tween(el,to){if(reduce){el.textContent=XH.inr(to);shown=to;return;}var from=shown,t0=null;cancelAnimationFrame(tw);function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/450),e=1-Math.pow(1-p,3);el.textContent=XH.inr(from+(to-from)*e);if(p<1)tw=requestAnimationFrame(f);else shown=to;}tw=requestAnimationFrame(f);}
  function calc(){
    var n=Math.max(1,Math.min(1000,Math.round(+seats.value||1))),yr=(bill.dataset.value||'yearly')==='yearly';
    var per=yr?PR.y:PR.m,lper=yr?PR.ly:PR.lm,tot=per*n,list=lper*n,save=list-tot,gst=Math.round(tot*.18);
    $('#sSeatsL').textContent=n+(n===1?' user':' users');
    $('#oSub').textContent=(yr?'for 12 months':'per month')+' · '+n+(n===1?' user':' users')+', excl. GST';
    $('#oLine').textContent=yr?'Per user / year':'Per user / month';
    $('#oPer').textContent=XH.inr(per);$('#oList').textContent=XH.inr(list);
    $('#oSave').textContent=XH.inr(save)+' ('+pct(per,lper)+'%)';
    $('#oGst').textContent=XH.inr(gst);$('#oPay').textContent=XH.inr(tot+gst);
    $('#sHint').classList.toggle('hot',n>300);
    var a=PR.ly*n,b=PR.m*12*n,c=PR.y*n;$('#yvmN').textContent=n+(n===1?' user':' users');
    $('#ybMs').style.width='100%';$('#ybMs').textContent=XH.inr(a);
    $('#ybMo').style.width=(b/a*100).toFixed(1)+'%';$('#ybMo').textContent=XH.inr(b);
    $('#ybYr').style.width=(c/a*100).toFixed(1)+'%';$('#ybYr').textContent=XH.inr(c);
    $('.yb.mo').classList.toggle('sel',!yr);$('.yb.yr').classList.toggle('sel',yr);
    tween($('#oTot'),tot);
    return {n:n,yr:yr,per:per,tot:tot};
  }
  seats.addEventListener('input',function(){var v=Math.max(1,Math.min(1000,Math.round(+seats.value||1)));if(+seats.value>1000)seats.value=v;rng.value=v;XH.fillRange(rng);calc();});
  rng.addEventListener('input',function(){seats.value=rng.value;calc();});
  bill.addEventListener('change',calc);
  calc();
  $('#oAdd').addEventListener('click',function(){var c=calc(),b=c.yr?'yearly':'monthly';
    XH.cart.add({key:'entra-internet-access-'+b+'-'+c.n,name:'Microsoft Entra Internet Access — '+c.n+(c.n===1?' seat':' seats'),sub:(c.yr?'Yearly':'Monthly')+' · '+XH.inr(c.per)+'/seat',price:c.tot,qty:1});});

  /* ================= 5. Entra family strip ================= */
  var FAM=[
    {s:'xcellhost-entra-id-p1',n:'Entra ID P1',p:'Conditional Access, MFA and SSO for every app',m:528,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>',c:''},
    {s:'xcellhost-entra-id-p2',n:'Entra ID P2',p:'Risk-based access and just-in-time admin roles',m:755,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>',c:'n'},
    {s:'xcellhost-entra-private-access',n:'Entra Private Access',p:'Replace VPN with per-app Zero Trust access',m:378,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',c:'o'},
    {s:'xcellhost-entra-id-governance',n:'Entra ID Governance',p:'Automate joiners, movers, leavers and access reviews',m:528,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',c:'g'},
    {s:'xcellhost-entra-workload-id',n:'Entra Workload ID',p:'Secure apps, service principals and AI agents',m:228,u:'identity',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>',c:'n'},
    {s:'xcellhost-entra-suite',n:'Entra Suite',p:'Network access, governance and protection in one licence',m:910,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',c:'o'}
  ];
  var fam=$('#fam');
  if(fam){fam.innerHTML=FAM.map(function(f,k){return '<a class="fm rv" data-d="'+(k%3)+'" href="'+f.s+'.html"><div class="ico '+f.c+'">'+f.ic+'</div><div><b>'+f.n+'</b><p>'+f.p+'</p><div class="fp"><span>from <em>'+XH.inr(f.m)+'</em>/'+(f.u||'user')+'/mo</span><span class="go">View →</span></div></div></a>';}).join('');XH.observe(fam);}

  }

  $$('a[href]').forEach(a => {const href=a.getAttribute('href');if(href.startsWith('xcellhost-entra-'))a.setAttribute('href',href.includes('workload-id')?'/microsoft-entra-workload-id':href.includes('internet-access')?'/microsoft-entra-internet-access':href.includes('private-access')?'/microsoft-entra-private-access':'/microsoft-entra-id');});
  return () => { disposed=true;root.removeEventListener('click',click);observers.forEach(o=>o.disconnect());scheduledTimers.forEach(window.clearTimeout);frames.forEach(window.cancelAnimationFrame); };
}
