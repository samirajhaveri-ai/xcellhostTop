(function(){
  'use strict';
  const scope=document.getElementById('eventExtras');
  const $=(s,c)=>(c||scope).querySelector(s),$$=(s,c)=>Array.from((c||scope).querySelectorAll(s));
  const motion=matchMedia('(prefers-reduced-motion: reduce)');
  let reduce=motion.matches,scheduled=0,activeModal=null,lastFocus=null,savedOverflow=null;
  const watchers=[],timers=[],handlers={};
  function status(message){$('.event-status').textContent=message;}
  function placeModal(){
    if(!activeModal)return;
    const frameTop=window.frameElement.getBoundingClientRect().top;
    const headerBottom=Math.max(0,parent.document.querySelector('xh-header header')?.getBoundingClientRect().bottom||0);
    const height=parent.innerHeight-headerBottom;
    activeModal.style.top=Math.max(0,headerBottom-frameTop)+'px';
    activeModal.style.height=height+'px';
    activeModal.style.setProperty('--dialog-height',height+'px');
  }
  function close(){
    if(!activeModal)return;
    activeModal.classList.remove('open');activeModal=null;
    if(savedOverflow!==null){parent.document.body.style.overflow=savedOverflow;savedOverflow=null;}
    lastFocus?.focus({preventScroll:true});
  }
  const XH={$, $$,reduce,
    store:function(key,value){try{if(arguments.length>1){localStorage.setItem(key,JSON.stringify(value));return value;}return JSON.parse(localStorage.getItem(key)||'null');}catch{return null;}},
    toast:status,onForm:function(name,handler){handlers[name]=handler;},
    open:function(id){
      const modal=$('#'+id);if(!modal)return;
      if(activeModal)activeModal.classList.remove('open');else{lastFocus=document.activeElement;savedOverflow=parent.document.body.style.overflow;}
      activeModal=modal;parent.document.body.style.overflow='hidden';placeModal();modal.classList.add('open');
      modal.querySelector('button,input:not([type=hidden]),select,a[href]')?.focus({preventScroll:true});
    },close,
    whenVisible:function(el,callback){if(el){watchers.push({el,callback,visible:null});schedule();}},
    download:function(name,text,type){const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([text],{type}));a.download=name;document.body.appendChild(a);a.click();timers.push(setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},500));}
  };
  function visibility(){
    scheduled=0;placeModal();
    const f=window.frameElement.getBoundingClientRect();
    for(const w of watchers){const r=w.el.getBoundingClientRect(),visible=!parent.document.hidden&&r.bottom+f.top>0&&r.top+f.top<parent.innerHeight&&r.height>0;
      if(visible!==w.visible){w.visible=visible;w.callback(visible);}}
  }
  function schedule(){if(!scheduled)scheduled=requestAnimationFrame(visibility);}
  $$('.rv').forEach(el=>XH.whenVisible(el,visible=>{if(visible||reduce)el.classList.add('in');}));
  parent.addEventListener('scroll',schedule,{passive:true});parent.addEventListener('resize',schedule);parent.document.addEventListener('visibilitychange',schedule);
  const observer=new ResizeObserver(schedule);observer.observe(scope);
  motion.addEventListener('change',event=>{reduce=event.matches;if(reduce)$$('.rv').forEach(el=>el.classList.add('in'));});
  function keydown(event){
    if(!activeModal)return;
    if(event.key==='Escape'){event.preventDefault();close();return;}
    if(event.key==='Tab'){
      const controls=$$('a[href],button:not([disabled]),input:not([type=hidden]),select,textarea,[tabindex="0"]',activeModal).filter(el=>el.getClientRects().length);
      const first=controls[0],last=controls.at(-1);if(!first)return;
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus({preventScroll:true});}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus({preventScroll:true});}
    }
  }
  document.addEventListener('keydown',keydown);parent.document.addEventListener('keydown',keydown);
  scope.addEventListener('click',event=>{
    if(event.target.closest('[data-close]'))close();
    const reg=event.target.closest('[data-reg]'),detail=event.target.closest('[data-detail]'),replay=event.target.closest('[data-replay]');
    if(reg)openReg(reg.dataset.reg);else if(detail)openDetail(detail.dataset.detail);else if(replay)openReplay(replay.dataset.replay);
  });
  scope.addEventListener('submit',event=>{
    const form=event.target.closest('[data-xhform]');if(!form)return;event.preventDefault();
    let first=null;$$('input,select,textarea',form).forEach(input=>{const ok=input.checkValidity()&&!(input.required&&!input.value.trim());input.closest('.fi')?.classList.toggle('err',!ok);if(!ok&&!first)first=input;});
    if(first){first.focus({preventScroll:true});return;}
    const data=Object.fromEntries(new FormData(form));handlers[form.dataset.xhform]?.(data,form);
  });
  scope.addEventListener('input',event=>event.target.closest('.fi.err')?.classList.remove('err'));
  const TZ='Asia/Kolkata';
  function p2(n){return (n<10?'0':'')+n;}
  /* ================= data ================= */
  var FMT={
    webinar:{l:'Webinar',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>'},
    workshop:{l:'Workshop',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg>'},
    masterclass:{l:'Masterclass',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>'},
    office:{l:'Office hours',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>'},
    summit:{l:'Summit',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>'}
  };
  var LV=['','Beginner','Intermediate','Advanced'];
  /* Illustrative schedule — every time is IST (+05:30). */
  var EV=[
    /* ---- past (shown greyed in the calendar, linked to replays) ---- */
    {id:'m365-backup',dt:'2026-09-15T16:00:00+05:30',dur:55,f:'webinar',lv:1,rep:'r-m365',
     t:'Microsoft 365 backup: what Microsoft doesn’t keep',s:'Retention policies are not backups. What Microsoft 365 actually keeps, for how long, and how to restore a mailbox, site or Teams chat on your terms.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>','The shared-responsibility gap in Microsoft 365'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>','Backing up Exchange, OneDrive, SharePoint and Teams'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 19l-9-7 9-7zM22 19l-9-7 9-7z"/></svg>','Granular restores in minutes']],sp:['Data Protection Consultant, XcellHost'],tags:'backup m365 microsoft 365 exchange onedrive data protection'},
    {id:'edr-alert',dt:'2026-09-24T16:00:00+05:30',dur:70,f:'masterclass',lv:2,rep:'r-edr',
     t:'Reading an EDR alert like a SOC analyst',s:'Walk through real alert timelines and learn to tell a false positive from an intrusion in under five minutes.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>','Process trees and what “normal” looks like'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>','Triage questions our SOC asks first'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>','Containment without breaking the business']],sp:['SOC Lead, XcellHost','Security Analyst, XcellHost SOC'],tags:'edr endpoint security soc alert triage'},
    {id:'vm-migration',dt:'2026-09-30T15:30:00+05:30',dur:110,f:'workshop',lv:2,rep:'r-mig',
     t:'Moving a VM estate to an Indian cloud: a dry run',s:'A hands-on rehearsal of a lift-and-shift: discovery, wave planning, replication and a cut-over you can roll back.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>','Discovery and dependency mapping'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4l-4 4 4 4M3 8h14M17 20l4-4-4-4M21 16H7"/></svg>','Replication and test cut-overs'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>','Rollback plans that actually work']],sp:['Migration Architect, XcellHost'],tags:'migration vm cloud lift and shift hands-on lab'},
    {id:'bimi',dt:'2026-10-06T16:00:00+05:30',dur:52,f:'webinar',lv:1,rep:'r-bimi',
     t:'Verified logos in the inbox: BIMI, VMC and CMC',s:'How to get your logo next to every email you send — the DMARC prerequisites, mark certificates and DNS records involved.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h4M5 17a3.5 3.5 0 016 0"/></svg>','VMC vs CMC: which mark certificate fits'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>','Publishing the BIMI record'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>','Which inboxes show the logo']],sp:['Email Security Specialist, XcellHost'],tags:'bimi vmc cmc email logo dmarc digital trust'},

    /* ---- upcoming ---- */
    {id:'acme-ssl',dt:'2026-10-14T16:00:00+05:30',dur:60,f:'webinar',lv:2,
     t:'Automating SSL before certificate lifetimes shrink',s:'Public certificates drop to 100-day validity in March 2027 and 47 days by 2029. See ACME clients issue, install and renew certificates with nobody watching the calendar.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>','How ACME issuance and renewal work, end to end'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M14 9l2 2"/></svg>','Setting up EAB credentials with Certbot and cert-manager'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>','When to use DNS-01 instead of HTTP-01'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>','Alerting, so a failed renewal never becomes an outage']],
     sp:['SSL & PKI Specialist, XcellHost','DevOps Engineer, XcellHost NOC'],tags:'acme ssl tls certificate certbot cert-manager pki digital trust'},
    {id:'k8s-ingress',dt:'2026-10-22T15:30:00+05:30',dur:120,f:'workshop',lv:2,
     t:'Managed Kubernetes, from image to ingress',s:'A hands-on lab: push an image to a private registry, deploy it to a managed cluster, autoscale it and expose it over HTTPS — in two hours.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>','Push and pull from a private container registry'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l8.5 5v10L12 22l-8.5-5V7z"/></svg>','Deployments, services and pod autoscaling'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>','Ingress with automatic TLS certificates'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-4"/><path d="M3.3 17a9 9 0 1117.4 0"/></svg>','Reading cluster metrics before go-live']],
     sp:['Kubernetes Platform Engineer, XcellHost','Principal Cloud Architect, XcellHost'],tags:'kubernetes k8s containers helm ingress autoscaling cloud devops hands-on lab',note:'Bring a laptop with a browser and SSH client — we provide the sandbox cluster.'},
    {id:'dmarc-reject',dt:'2026-10-27T16:00:00+05:30',dur:60,f:'webinar',lv:2,
     t:'DMARC to p=reject without breaking email',s:'Move your domain from monitoring to enforcement safely — find every legitimate sender, fix SPF and DKIM alignment, then lock spoofers out.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>','Reading aggregate reports to find every sender'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>','Fixing SPF and DKIM alignment for SaaS senders'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>','A staged path from p=none to p=reject'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h4M5 17a3.5 3.5 0 016 0"/></svg>','Where BIMI and verified logos fit in']],
     sp:['Email Security Specialist, XcellHost','Messaging Engineer, XcellHost'],tags:'dmarc spf dkim bimi email spoofing phishing deliverability digital trust'},
    {id:'office-oct',dt:'2026-10-29T16:00:00+05:30',dur:45,f:'office',lv:1,
     t:'Office hours: ask the NOC and SOC anything',s:'No slides, no pitch. Bring your backup, monitoring, patching or incident questions and get straight answers from the teams on shift.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>','Open Q&A — questions taken live and in advance'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>','How our NOC triages an alert at 3 am'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>','What the SOC checks first in an incident'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg>','Fixes you can apply the same day']],
     sp:['Head of NOC, XcellHost','SOC Lead, XcellHost'],tags:'office hours q&a noc soc monitoring incident support patching'},
    {id:'zero-trust',dt:'2026-11-04T16:00:00+05:30',dur:75,f:'masterclass',lv:2,
     t:'Zero Trust for Indian SMBs',s:'A practical Zero Trust roadmap for 50–500 person companies: identity first, device health next, then the network — using licences you probably own.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>','Conditional access and MFA staff actually accept'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>','Device compliance from Intune and EDR signals'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>','Replacing flat VPN access with per-app access'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>','A 90-day rollout plan sized for SMB IT teams']],
     sp:['Security Architect, XcellHost','Microsoft 365 Solutions Lead, XcellHost'],tags:'zero trust security identity entra id mfa vpn sme smb conditional access'},
    {id:'ransomware',dt:'2026-11-17T16:00:00+05:30',dur:60,f:'webinar',lv:1,
     t:'Ransomware recovery with Acronis: hours, not days',s:'Watch a live restore after a simulated attack — immutable backups, clean-point recovery and the runbook that gets a business back online.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>','Immutable and air-gapped backup, explained simply'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 19l-9-7 9-7zM22 19l-9-7 9-7z"/></svg>','Finding a clean restore point after an attack'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>','Full-machine recovery to new hardware or the cloud'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>','A one-page ransomware runbook to keep']],
     sp:['Data Protection Consultant, XcellHost','SOC Lead, XcellHost'],tags:'ransomware backup acronis cyber protect recovery disaster recovery data protection security'},
    {id:'supply-chain',dt:'2026-11-19T15:30:00+05:30',dur:120,f:'workshop',lv:3,
     t:'Container supply-chain security: scan, sign, admit',s:'Build a pipeline that scans every image for CVEs, signs what passes and lets only signed images run in your cluster.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg>','Vulnerability scanning in a private registry'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17c3-1 4-8 6-8s0 8 3 8 3-4 5-4 2 3 4 3"/><path d="M3 21h18"/></svg>','Signing images and verifying signatures'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>','Admission policies that block unsigned images'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><circle cx="18" cy="8" r="2.5"/><path d="M6 8.5v7M18 10.5c0 4-6 3-10 6"/></svg>','Wiring it all into your CI pipeline']],
     sp:['DevSecOps Engineer, XcellHost','Kubernetes Platform Engineer, XcellHost'],tags:'container registry scanning signing sbom cve supply chain kubernetes devsecops security hands-on lab',note:'Bring a laptop with a browser and SSH client — we provide the registry and cluster.'},
    {id:'copilot-ready',dt:'2026-11-24T16:00:00+05:30',dur:60,f:'webinar',lv:1,
     t:'Microsoft 365 Copilot readiness: data, licences, guardrails',s:'Copilot sees what your users can see. Clean up permissions, label sensitive data and pick the right licences before you switch it on.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>','Finding oversharing in SharePoint and OneDrive'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>','Sensitivity labels that Copilot respects'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>','Licence options and what they cost in INR'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 10V8M11 6h2M17 6h2M3 21l12-12"/></svg>','A pilot plan for your first 25 users']],
     sp:['Microsoft 365 Solutions Lead, XcellHost','Modern Workplace Consultant, XcellHost'],tags:'microsoft 365 copilot ai productivity sharepoint licences governance'},
    {id:'summit-mumbai',dt:'2026-11-27T09:30:00+05:30',dur:480,f:'summit',lv:2,loc:'Mumbai',seats:64,cap:200,
     t:'XcellHost CloudSecure Summit, Mumbai',s:'A full day in person with our architects and SOC team: keynotes, a live ransomware drill, a DPDP Act panel and one-to-one architecture clinics.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>','Keynote: the state of security for Indian businesses'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>','Live drill: a ransomware attack, from breach to recovery'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>','Panel: DPDP Act readiness in practice'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>','One-to-one clinics with our cloud and security architects']],
     sp:['XcellHost leadership team','Principal Cloud Architect, XcellHost','SOC Lead, XcellHost','Data protection & compliance advisors'],tags:'summit in person mumbai conference security cloud dpdp networking keynote',note:'Venue will be emailed to registrants once confirmed. Breakfast and lunch included.'},
    {id:'genai-dpdp',dt:'2026-12-02T16:00:00+05:30',dur:75,f:'masterclass',lv:2,
     t:'GenAI governance and the DPDP Act',s:'Staff are already pasting customer data into AI tools. Map where personal data flows, set a usage policy and put technical guardrails in place.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>','Finding the Shadow AI tools already in use'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>','What the DPDP Act means for prompts and personal data'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>','Stopping sensitive data before it reaches a model'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>','An AI acceptable-use policy template']],
     sp:['AI Governance Advisor, XcellHost','Data Protection Consultant, XcellHost'],tags:'genai ai governance dpdp privacy shadow ai compliance policy'},
    {id:'cloud-cost',dt:'2026-12-08T16:00:00+05:30',dur:60,f:'webinar',lv:2,
     t:'Cloud cost control for AWS and Azure',s:'Where cloud bills leak and how to stop it — rightsizing, commitments, storage tiers and the tags that make spend visible by team.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>','Reading the bill: the five lines that matter most'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="6" height="8" rx="1"/><rect x="15" y="8" width="6" height="8" rx="1"/><path d="M9 12h6M12 9l3 3-3 3"/></svg>','Rightsizing and scheduling non-production workloads'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>','Savings plans and reservations without regret'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>','Tagging so every rupee has an owner']],
     sp:['FinOps Specialist, XcellHost','AWS & Azure Solutions Architect, XcellHost'],tags:'finops cost aws azure cloud billing savings rightsizing'},
    {id:'gpu-inference',dt:'2026-12-10T16:00:00+05:30',dur:60,f:'webinar',lv:3,
     t:'GPU cloud for AI inference: sizing, latency, cost',s:'Choosing GPUs for serving models in production — memory, batching and quantisation trade-offs, with benchmark walk-throughs.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="11" rx="2"/><circle cx="8" cy="12.5" r="2.5"/><circle cx="15.5" cy="12.5" r="2.5"/><path d="M5 18v3M19 18v3"/></svg>','Matching GPU memory to model size'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg>','Batching and quantisation for lower latency'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>','Hosting models in Indian data centres'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>','Cost per thousand requests, worked through']],
     sp:['GPU Infrastructure Engineer, XcellHost','AI Solutions Architect, XcellHost'],tags:'gpu ai inference llm models latency cloud machine learning'},
    {id:'office-dec',dt:'2026-12-15T16:00:00+05:30',dur:45,f:'office',lv:1,
     t:'Office hours: year-end security check-up',s:'Bring your 2027 plans and open questions. We run through a quick year-end checklist — backups, patching, certificates and access reviews.',
     l:[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>','A ten-point year-end checklist'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>','Certificates and licences due for renewal'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>','Access reviews for leavers and role changes'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>','Your questions, answered live']],
     sp:['Head of NOC, XcellHost','Security Architect, XcellHost'],tags:'office hours q&a security checklist year end patching backup'}
  ];
  EV.forEach(function(e){e.s0=new Date(e.dt);e.e0=new Date(e.s0.getTime()+e.dur*60000);e.loc=e.loc||'Online';});
  EV.sort(function(a,b){return a.s0-b.s0;});
  var BY={};EV.forEach(function(e){BY[e.id]=e;});

  var TOP={
    security:{l:'Security',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>'},cloud:{l:'Cloud',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>'},trust:{l:'Email & trust',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>'},
    data:{l:'Data protection',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>'},ai:{l:'AI',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>'},productivity:{l:'Productivity',i:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>'}
  };
  var REC=[
    {id:'r-bimi',ev:'bimi',tp:'trust',ch:[['00:00','Why a logo in the inbox matters'],['09:40','DMARC enforcement prerequisites'],['24:15','VMC vs CMC, step by step'],['41:30','Q&A']]},
    {id:'r-mig',ev:'vm-migration',tp:'cloud',ch:[['00:00','Lab setup and the sample estate'],['18:20','Discovery and wave planning'],['52:10','Replication and test cut-over'],['1:31:00','Rollback drill and Q&A']]},
    {id:'r-edr',ev:'edr-alert',tp:'security',ch:[['00:00','Anatomy of an EDR alert'],['16:45','Three real timelines, triaged'],['44:00','Containment options'],['58:30','Q&A']]},
    {id:'r-m365',ev:'m365-backup',tp:'data',ch:[['00:00','What Microsoft keeps — and what it doesn’t'],['14:20','Backing up mail, files and Teams'],['33:05','Live granular restore'],['46:00','Q&A']]},
    {id:'r-entra',d:'2026-08-26T16:00:00+05:30',dur:58,f:'webinar',lv:2,tp:'productivity',t:'Conditional access with Entra ID P1 and P2',s:'Policies that block risky sign-ins without locking out your own staff — and when the P2 risk signals are worth paying for.',sp:['Identity Specialist, XcellHost'],tags:'entra id azure ad conditional access mfa identity',ch:[['00:00','P1 vs P2 in plain terms'],['12:30','Five policies every tenant needs'],['35:10','Risk-based sign-in, live'],['49:00','Q&A']]},
    {id:'r-obj',d:'2026-08-12T16:00:00+05:30',dur:47,f:'webinar',lv:1,tp:'cloud',t:'S3-compatible object storage for backups and logs',s:'Using object storage in Indian data centres as a cheap, durable target for backups, logs and media — with lifecycle rules and object lock.',sp:['Storage Engineer, XcellHost'],tags:'object storage s3 backup logs cloud',ch:[['00:00','Buckets, keys and endpoints'],['11:50','Pointing backup tools at S3'],['27:30','Lifecycle rules and object lock'],['39:40','Q&A']]},
    {id:'r-shadow',d:'2026-07-29T16:00:00+05:30',dur:61,f:'masterclass',lv:2,tp:'ai',t:'Shadow AI: finding the GenAI tools staff already use',s:'Discover which AI apps are in use across your company, what data is going into them and how to steer people to approved tools.',sp:['AI Governance Advisor, XcellHost'],tags:'shadow ai genai governance dlp ai',ch:[['00:00','How Shadow AI shows up in logs'],['15:00','Classifying risky prompts'],['38:20','Policy and approved alternatives'],['52:00','Q&A']]},
    {id:'r-wa',d:'2026-07-15T16:00:00+05:30',dur:44,f:'webinar',lv:1,tp:'productivity',t:'WhatsApp Business API for support teams',s:'Shared inboxes, templates and automation for handling customer support on WhatsApp at scale, with the opt-in rules you must follow.',sp:['Messaging Solutions Consultant, XcellHost'],tags:'whatsapp business api support messaging productivity',ch:[['00:00','App vs API: what changes'],['10:15','Templates and opt-in rules'],['24:40','Routing and automation demo'],['37:00','Q&A']]},
    {id:'r-mon',d:'2026-06-24T16:00:00+05:30',dur:50,f:'webinar',lv:1,tp:'cloud',t:'Server monitoring that wakes the right person',s:'Thresholds, escalation and on-call rotas that cut alert noise — the way our NOC watches thousands of servers around the clock.',sp:['Head of NOC, XcellHost'],tags:'monitoring noc alerts on-call servers',ch:[['00:00','Signals worth alerting on'],['13:30','Escalation that respects sleep'],['31:00','Dashboards our NOC actually uses'],['42:10','Q&A']]}
  ];
  REC.forEach(function(r){
    var e=r.ev&&BY[r.ev];
    if(e){r.t=e.t;r.s=e.s;r.dur=e.dur;r.f=e.f;r.lv=e.lv;r.sp=e.sp;r.tags=e.tags;r.d0=e.s0;}
    else r.d0=new Date(r.d);
  });
  var RBY={};REC.forEach(function(r){RBY[r.id]=r;});

  /* ================= time helpers ================= */
  var fmtCache={};
  function F(opts,tz){var k=JSON.stringify(opts)+(tz||'');if(!fmtCache[k]){var o=Object.assign({},opts);if(tz)o.timeZone=tz;fmtCache[k]=new Intl.DateTimeFormat('en-IN',o);}return fmtCache[k];}
  function istDay(d){return F({weekday:'short',day:'numeric',month:'short'},TZ).format(d);}
  function istLong(d){var o={};F({weekday:'long',day:'numeric',month:'long',year:'numeric'},TZ).formatToParts(d).forEach(function(p){o[p.type]=p.value;});return o.weekday+', '+o.day+' '+o.month+' '+o.year;}
  function istTime(d){return F({hour:'numeric',minute:'2-digit',hour12:true},TZ).format(d);}
  function istParts(d){var o={};F({year:'numeric',month:'numeric',day:'numeric',weekday:'short'},TZ).formatToParts(d).forEach(function(p){o[p.type]=p.value;});return {y:+o.year,m:+o.month-1,d:+o.day,wd:o.weekday};}
  function keyOf(y,m,d){return y+'-'+(m<9?'0':'')+(m+1)+'-'+(d<10?'0':'')+d;}
  function istKey(d){var p=istParts(d);return keyOf(p.y,p.m,p.d);}
  function monShort(d){return F({month:'short'},TZ).format(d);}
  var LOCAL_TZ='';try{LOCAL_TZ=Intl.DateTimeFormat().resolvedOptions().timeZone||'';}catch(x){}
  function isElsewhere(d){return d.getTimezoneOffset()!==-330;}
  function localStr(d){return F({weekday:'short',day:'numeric',month:'short',hour:'numeric',minute:'2-digit',hour12:true,timeZoneName:'short'}).format(d);}
  function whenIST(e){return istDay(e.s0)+' · '+istTime(e.s0)+(e.dur>=240?' – '+istTime(e.e0):'')+' IST';}
  function durStr(m){if(m>=240)return 'Full day';if(m<=90)return m+' min';var h=Math.floor(m/60),r=m%60;return h+(h>1?' hours':' hour')+(r?' '+r+' min':'');}
  function now(){return new Date();}
  function isPast(e){return e.e0<=now();}
  function isLive(e){var n=now();return e.s0<=n&&n<e.e0;}
  function upcoming(){var n=now();return EV.filter(function(e){return e.e0>n;});}
  function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
  function fb(f){return '<span class="fb f-'+f+'">'+FMT[f].i+FMT[f].l+'</span>';}
  function lvl(n){return '<span class="lvl l'+n+'"><span class="br"><i></i><i></i><i></i></span>'+LV[n]+'</span>';}

  /* registrations + summit seats (per browser) */
  var REG={};
  function isReg(id){return !!REG[id];}
  var seatsTaken=0;
  function seatsLeft(e){return Math.max(0,(e.seats||0)-seatsTaken);}

  /* ================= calendar exports ================= */
  function utc(d){return d.toISOString().replace(/[-:]/g,'').replace(/\.\d{3}/,'');}
  function icsEsc(s){return String(s).replace(/\\/g,'\\\\').replace(/;/g,'\\;').replace(/,/g,'\\,').replace(/\r?\n/g,'\\n');}
  var enc=window.TextEncoder?new TextEncoder():null;
  function fold(line){var out='',n=0;Array.from(line).forEach(function(ch){var b=enc?enc.encode(ch).length:(ch.charCodeAt(0)>127?3:1);if(n+b>75){out+='\r\n ';n=1;}out+=ch;n+=b;});return out;}
  function locStr(e){return e.loc==='Mumbai'?'Mumbai, India — venue to be announced':'Online — joining link emailed to registrants';}
  function pageUrl(e){return 'https://www.xcellhost.top/xcellhost-events.html#ev-'+e.id;}
  function descStr(e){
    return e.s+'\n\nWhat you’ll learn:\n'+e.l.map(function(x){return '• '+x[1];}).join('\n')+
      '\n\nSpeakers: '+e.sp.join('; ')+'\nFormat: '+FMT[e.f].l+' · '+LV[e.lv]+' · '+durStr(e.dur)+
      (e.note?'\n\n'+e.note:'')+'\n\n'+(e.loc==='Mumbai'?'Venue details will be emailed to registrants.':'Your joining link is emailed after registration.')+
      '\nQuestions: sales@xcellhost.cloud · +91 22 6711 1555\n'+pageUrl(e);
  }
  function vevent(e){
    return ['BEGIN:VEVENT','UID:'+e.id+'-'+utc(e.s0).toLowerCase()+'@events.xcellhost.cloud','DTSTAMP:'+utc(now()),'DTSTART:'+utc(e.s0),'DTEND:'+utc(e.e0),
      'SUMMARY:'+icsEsc('XcellHost '+FMT[e.f].l+': '+e.t),'DESCRIPTION:'+icsEsc(descStr(e)),'LOCATION:'+icsEsc(locStr(e)),'URL:'+pageUrl(e),
      'ORGANIZER;CN=XcellHost Events:mailto:sales@xcellhost.cloud','STATUS:CONFIRMED','TRANSP:OPAQUE',
      'BEGIN:VALARM','ACTION:DISPLAY','TRIGGER:-PT30M','DESCRIPTION:'+icsEsc('Starts in 30 minutes: '+e.t),'END:VALARM','END:VEVENT'];
  }
  function ics(list){
    var L=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//XcellHost Cloud Services//Events and Webinars//EN','CALSCALE:GREGORIAN','METHOD:PUBLISH','X-WR-CALNAME:XcellHost Events','X-WR-TIMEZONE:Asia/Kolkata'];
    list.forEach(function(e){L=L.concat(vevent(e));});L.push('END:VCALENDAR');
    return L.map(fold).join('\r\n')+'\r\n';
  }
  function gcal(e){
    return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent('XcellHost '+FMT[e.f].l+': '+e.t)+
      '&dates='+utc(e.s0)+'/'+utc(e.e0)+'&details='+encodeURIComponent(descStr(e))+'&location='+encodeURIComponent(locStr(e))+'&ctz='+encodeURIComponent(TZ);
  }
  function dlIcs(list,name){XH.download(name,ics(list),'text/calendar;charset=utf-8');}
  window.XH_EVENTS={ics:ics,gcal:gcal,events:EV};


  function paintReserve(btn,e,big){
    if(!btn)return;
    if(isReg(e.id)){btn.className='btn '+(big?'':'btn-sm ')+'btn-reg';btn.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> Registered';btn.setAttribute('aria-label','Registered — view calendar links');}
    else{btn.className='btn '+(big?'':'btn-sm ')+'btn-orange';btn.innerHTML=(big?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4M12 12v6M9 15h6"/></svg> ':'')+'Reserve my seat';btn.removeAttribute('aria-label');}
  }

  /* ================= 4. event detail modal ================= */
  function openDetail(id){
    var e=BY[id];if(!e)return;
    var past=isPast(e),live=isLive(e);
    $('#edTags').innerHTML=fb(e.f)+lvl(e.lv)+(live?'<span class="regd" style="color:#c0392b">● Live now</span>':'')+(past?'<span class="lvl">Ended</span>':'')+(isReg(e.id)&&!past?'<span class="regd"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> You’re registered</span>':'');
    $('#edT').textContent=e.t;$('#edS').textContent=e.s;
    var facts=[
      ['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>','Date',istLong(e.s0)],
      ['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>','Time (IST)',istTime(e.s0)+' – '+istTime(e.e0)],
      isElsewhere(e.s0)?['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>','Your time',localStr(e.s0)]:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12M6 22h12M7 2v4a5 5 0 005 5 5 5 0 005-5V2M7 22v-4a5 5 0 015-5 5 5 0 015 5v4"/></svg>','Duration',durStr(e.dur)+(e.dur<240?'':' · 8 hours')],
      ['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>','Location',e.loc==='Mumbai'?'Mumbai — venue TBA':'Online · link by email'],
      ['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>','Level',LV[e.lv]],
      e.seats?['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>','Seats left',past?'—':seatsLeft(e)+' of '+e.cap]:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>','Fee','Free']
    ];
    if(isElsewhere(e.s0))facts[4]=['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h12M6 22h12M7 2v4a5 5 0 005 5 5 5 0 005-5V2M7 22v-4a5 5 0 015-5 5 5 0 015 5v4"/></svg>','Duration',durStr(e.dur)];
    var html='<div class="dfacts">'+facts.map(function(f){return '<div><i>'+f[0]+'</i><span><small>'+f[1]+'</small><b>'+esc(f[2])+'</b></span></div>';}).join('')+'</div>'+
      '<div class="mcol"><div><span class="mk">What you’ll learn</span><ul class="ilist">'+e.l.map(function(x){return '<li><i>'+x[0]+'</i><span>'+esc(x[1])+'</span></li>';}).join('')+'</ul></div>'+
      '<div><span class="mk">Speakers</span><div class="spk">'+e.sp.map(function(s){return '<div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg></i>'+esc(s)+'</div>';}).join('')+'</div></div></div>'+
      (e.note?'<div class="mnote"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg><span>'+esc(e.note)+'</span></div>':'')+
      '<div class="mact">'+(past?(e.rep?'<button type="button" class="btn btn-blue" data-replay="'+e.rep+'"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13-8z"/></svg> Watch the replay</button>':'')+'<button type="button" class="btn btn-ghost" data-close>Close</button>'
        :'<button type="button" class="btn '+(isReg(e.id)?'btn-reg':'btn-orange')+'" id="edReg">'+(isReg(e.id)?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg> Registered — calendar links':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4M12 12v6M9 15h6"/></svg> Reserve my seat')+'</button><button type="button" class="btn btn-ghost" id="edIcs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg> Download .ics</button><a class="btn btn-ghost" href="'+esc(gcal(e))+'" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg> Google Calendar</a>')+'</div>';
    $('#edBody').innerHTML=html;
    var r=$('#edReg');if(r)r.addEventListener('click',function(){openReg(e.id);});
    var ic=$('#edIcs');if(ic)ic.addEventListener('click',function(){dlIcs([e],'xcellhost-'+e.id+'.ics');XH.toast('Calendar file downloaded');});
    if(location.hash!=='#ev-'+e.id)try{history.replaceState(null,'','#ev-'+e.id);}catch(x){}
    XH.open('evDetail');
  }
  $('#evDetail').addEventListener('click',function(e){if(e.target.closest('[data-close]'))clearHash();});
  function clearHash(){if(/^#ev-/.test(location.hash))try{history.replaceState(null,'',location.pathname+location.search);}catch(x){}}


  var regForm=$('#regForm'),regDone=$('#regDone'),regEv=null;
  function openReg(id){
    var e=BY[id];if(!e)return;
    if(isPast(e)){openDetail(id);return;}
    regEv=e;if($('#evDetail').classList.contains('open'))XH.close('evDetail');
    var p=istParts(e.s0);
    $('#regEv').className='re f-'+e.f;
    $('#regEv').innerHTML='<div class="d">'+monShort(e.s0)+'<b>'+p.d+'</b>'+p.wd+'</div><div class="tt"><b>'+esc(e.t)+'</b><small>'+FMT[e.f].l+' · '+istTime(e.s0)+' IST · '+durStr(e.dur)+(e.seats?' · '+seatsLeft(e)+' seats left':'')+'</small>'+(isElsewhere(e.s0)?'<small>Your time: '+esc(localStr(e.s0))+'</small>':'')+'</div>';
    $('#regId').value=e.id;
    if(isReg(e.id)){return;}
    else{
      regForm.hidden=false;regDone.hidden=true;$('#regEv').hidden=false;$('#erP').textContent='Free · takes 30 seconds · joining link by email';$('#erT').textContent=e.f==='summit'?'Reserve your summit seat':'Reserve your seat';
      $$('.fi.err',regForm).forEach(function(x){x.classList.remove('err');});
      var last=XH.store('xh-ev-me');if(last){['name','email','phone','company','role','city'].forEach(function(k){var i=regForm.elements[k];if(i&&last[k]&&!i.value)i.value=last[k];});}
    }
    XH.open('evReg');
  }

  /* ================= 6. summit block ================= */
  var SUM=BY['summit-mumbai'];
  function paintSummit(){
    if(!SUM)return;var left=seatsLeft(SUM);
    $('#smSeats').textContent=left;$('#smCap').textContent=SUM.cap;
    var sm=$('.sm');if(sm&&sm.classList.contains('in'))$('#smBar').style.width=(left/SUM.cap*100)+'%';
    var d=Math.ceil((SUM.s0-now())/86400000);
    $('#smIn').textContent=isPast(SUM)?'Concluded — replays coming soon':isLive(SUM)?'Happening now':d<=1?'Tomorrow':d+' days';
    $('#smDate').textContent=istLong(SUM.s0);
    $$('[data-reg="summit-mumbai"]').forEach(function(b){if(b.closest('.sm-act'))paintReserve(b,SUM,true);});
  }
  $$('.ag li').forEach(function(li,i){li.style.setProperty('--i',i);});
  XH.whenVisible($('.sm'),function(v){if(v)setTimeout(paintSummit,350);});
  paintSummit();

  /* ================= 7. on-demand catalogue ================= */
  var rs={tp:'all',q:''},recG=$('#recG'),recF=$('#recF');
  function wave(id,n){var s=0;for(var i=0;i<id.length;i++)s=(s*31+id.charCodeAt(i))%9973;var out=[];for(var j=0;j<n;j++){s=(s*9301+49297)%233280;out.push(18+Math.round(s/233280*82));}return out;}
  function fmtDur(m){var h=Math.floor(m/60),r=m%60;return h?h+':'+p2(r)+':00':r+':00';}
  function rMatch(r){if(rs.tp!=='all'&&r.tp!==rs.tp)return false;if(!rs.q)return true;var hay=(r.t+' '+r.s+' '+r.tags+' '+TOP[r.tp].l+' '+r.sp.join(' ')).toLowerCase();return rs.q.split(/\s+/).every(function(w){return hay.indexOf(w)>-1;});}
  function renderRecChips(){
    var keys=['all'].concat(Object.keys(TOP));
    recF.innerHTML=keys.map(function(k){var c=REC.filter(function(r){return k==='all'||r.tp===k;}).length;
      return '<button type="button" class="fc tp-'+k+(rs.tp===k?' on':'')+'" data-tp="'+k+'" aria-pressed="'+(rs.tp===k)+'" style="--fc:'+(k==='all'?'#0066FF':'var(--tc)')+'"><i>'+(k==='all'?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>':TOP[k].i)+'</i>'+(k==='all'?'All':TOP[k].l)+'<em>'+c+'</em></button>';}).join('');
  }
  function renderRec(){
    var list=REC.filter(rMatch);
    recG.innerHTML=list.length?list.map(function(r,i){
      var dt=F({day:'numeric',month:'short',year:'numeric'},TZ).format(r.d0);
      return '<article class="vc tp-'+r.tp+'" tabindex="0" role="button" data-rec="'+r.id+'" style="--i:'+i+'" aria-label="Watch replay: '+esc(r.t)+'">'+
        '<div class="vth"><span class="tg">'+TOP[r.tp].i+TOP[r.tp].l+'</span><span class="big">'+TOP[r.tp].i+'</span>'+
        '<span class="wv">'+wave(r.id,28).map(function(h){return '<i style="--h:'+h+'"></i>';}).join('')+'</span>'+
        '<span class="pb"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span><span class="du">'+fmtDur(r.dur)+'</span></div>'+
        '<div class="vb"><div class="vm">'+fb(r.f)+lvl(r.lv)+'</div><h3>'+esc(r.t)+'</h3><p>'+esc(r.s)+'</p>'+
        '<div class="vf"><span>'+dt+'</span><span>Watch replay <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg></span></div></div></article>';
    }).join(''):'<div class="vg-empty"><b style="color:var(--ink)">No replays match.</b><br>Try another topic, or <a href="#private" style="color:#0066FF;font-weight:600">ask us for a private session</a>.</div>';
  }
  recF.addEventListener('click',function(e){var b=e.target.closest('.fc');if(!b)return;rs.tp=b.getAttribute('data-tp');renderRecChips();renderRec();});
  var rqT;$('#recQ').addEventListener('input',function(){var v=this.value.trim().toLowerCase();clearTimeout(rqT);rqT=setTimeout(function(){rs.q=v;renderRec();},140);});
  recG.addEventListener('click',function(e){var c=e.target.closest('[data-rec]');if(c)openReplay(c.getAttribute('data-rec'));});
  recG.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches('[data-rec]')){e.preventDefault();openReplay(e.target.getAttribute('data-rec'));}});
  renderRecChips();renderRec();

  /* replay modal with placeholder player */
  var pl={r:null,t:0,playing:false,raf:null,last:0};
  function sec(ts){var p=ts.split(':').map(Number);return p.length===3?p[0]*3600+p[1]*60+p[2]:p[0]*60+p[1];}
  function hms(s){s=Math.floor(s);var h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+':'+p2(m):m)+':'+p2(x);}
  function openReplay(id){
    var r=RBY[id];if(!r)return;pl.r=r;pl.t=0;stopPlay();
    var total=r.dur*60;
    $('#rpTags').innerHTML='<span class="fb" style="background:var(--chip);color:#0066FF">'+TOP[r.tp].i+TOP[r.tp].l+'</span>'+fb(r.f)+lvl(r.lv);
    $('#rpT').textContent=r.t;
    $('#rpM').textContent='Recorded '+F({day:'numeric',month:'long',year:'numeric'},TZ).format(r.d0)+' · '+durStr(r.dur)+' · '+FMT[r.f].l;
    $('#rpBody').innerHTML='<div class="pl16 tp-'+r.tp+'" id="plr"><span class="wv">'+wave(r.id,56).map(function(h){return '<i style="--h:'+h+'"></i>';}).join('')+'</span>'+
      '<div class="ctr"><div><button type="button" class="bp" id="plBig" aria-label="Play replay"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button><div class="ph">Replay preview · request the recording below</div></div></div>'+
      '<div class="bar2"><button type="button" id="plTg" aria-label="Play"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button><div class="trk" id="plTrk">'+r.ch.map(function(c){return '<b style="left:'+(sec(c[0])/total*100)+'%"></b>';}).join('')+'<i id="plFill"></i></div><span class="tc" id="plTc">0:00 / '+hms(total)+'</span></div></div>'+
      '<div class="mcol"><div><p class="rp-s">'+esc(r.s)+'</p><span class="mk">Chapters</span><div class="chs" id="plCh">'+r.ch.map(function(c,i){return '<button type="button" data-t="'+sec(c[0])+'"'+(i===0?' class="on"':'')+'><span>'+c[0]+'</span>'+esc(c[1])+'</button>';}).join('')+'</div></div>'+
      '<div><div class="slb" id="slb"><h5><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v12M7 10l5 5 5-5M4 21h16"/></svg> Get the slides</h5><p>Request the recording, deck and templates from our events team.</p>'+
      '<form class="form" data-xhform="event-slides" novalidate><input type="hidden" name="recording" value="'+r.id+'"><div class="fi"><label for="slEmail">Work email</label><input id="slEmail" name="email" type="email" required autocomplete="email"><span class="em">Enter a valid email</span></div><div class="fi"><label for="slCo">Company</label><input id="slCo" name="company" required autocomplete="organization"><span class="em">Please enter your company</span></div><button class="btn btn-blue btn-block" type="submit">Request recording &amp; slides</button></form></div>'+
      '<div class="spk" style="margin-top:16px">'+r.sp.map(function(s){return '<div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg></i>'+esc(s)+'</div>';}).join('')+'</div></div></div>';
    var me=XH.store('xh-ev-me');if(me){$('#slEmail').value=me.email||'';$('#slCo').value=me.company||'';}
    $('#plBig').addEventListener('click',togglePlay);$('#plTg').addEventListener('click',togglePlay);
    $('#plTrk').addEventListener('click',function(ev){var b=this.getBoundingClientRect();seek((ev.clientX-b.left)/b.width*total);});
    $('#plCh').addEventListener('click',function(ev){var b=ev.target.closest('button');if(b){seek(+b.getAttribute('data-t'));if(!pl.playing)togglePlay();}});
    XH.open('evReplay');
  }
  function seek(t){pl.t=Math.max(0,Math.min(pl.r.dur*60,t));paintPlayer();}
  function paintPlayer(){
    var r=pl.r;if(!r||!$('#plFill'))return;var total=r.dur*60,f=pl.t/total;
    $('#plFill').style.width=(f*100)+'%';$('#plTc').textContent=hms(pl.t)+' / '+hms(total);
    var bars=$$('#plr .wv i'),on=Math.floor(f*bars.length);bars.forEach(function(b,i){b.classList.toggle('on',i<on);});
    var chs=$$('#plCh button'),ci=0;chs.forEach(function(b,i){if(pl.t>=+b.getAttribute('data-t'))ci=i;});chs.forEach(function(b,i){b.classList.toggle('on',i===ci);});
  }
  function togglePlay(){
    pl.playing=!pl.playing;var plr=$('#plr');plr.classList.toggle('playing',pl.playing);
    $('#plTg').innerHTML=pl.playing?'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>':'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>';$('#plTg').setAttribute('aria-label',pl.playing?'Pause':'Play');
    if(pl.playing){pl.last=performance.now();cancelAnimationFrame(pl.raf);pl.raf=requestAnimationFrame(step);}
    else cancelAnimationFrame(pl.raf);
  }
  function step(t){var dt=(t-pl.last)/1000;pl.last=t;pl.t+=dt*24;if(pl.t>=pl.r.dur*60){pl.t=pl.r.dur*60;paintPlayer();togglePlay();return;}paintPlayer();pl.raf=requestAnimationFrame(step);}
  function stopPlay(){pl.playing=false;cancelAnimationFrame(pl.raf);}
  var rpM=$('#evReplay');
  new MutationObserver(function(){if(!rpM.classList.contains('open'))stopPlay();}).observe(rpM,{attributes:true,attributeFilter:['class']});

  var pvTopic=$('#pvTopic');
  if(pvTopic){
    var seen={};pvTopic.innerHTML=upcoming().concat(EV.filter(isPast)).filter(function(e){return e.f!=='summit'&&e.f!=='office';}).map(function(e){if(seen[e.t])return '';seen[e.t]=1;return '<option>'+esc(e.t)+'</option>';}).join('')+'<option>Something else — we’ll describe it</option>';
  }
  var pvW=$('#pvWhere');if(pvW)pvW.addEventListener('change',function(){$('#pvWhereV').value=pvW.dataset.value;});

  const where=$('#pvWhere');
  where.setAttribute('role','group');where.setAttribute('aria-label','Session location');
  $$('button',where).forEach(button=>{button.setAttribute('aria-pressed',button.classList.contains('on'));button.addEventListener('click',function(){
    $$('button',where).forEach(item=>{item.classList.toggle('on',item===button);item.setAttribute('aria-pressed',item===button);});
    where.dataset.value=button.dataset.v;where.dispatchEvent(new Event('change',{bubbles:true}));
  });});
  function requestEmail(subject,body,form){
    const message='Send the request in your email app. Our events team will reply to confirm.';
    let label=form.querySelector('.form-status');if(!label){label=document.createElement('p');label.className='form-status';label.setAttribute('role','status');form.appendChild(label);}label.textContent=message;
    const email=document.createElement('a');email.href='mailto:sales@xcellhost.cloud?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);email.hidden=true;form.appendChild(email);email.click();email.remove();status(message);
  }
  XH.onForm('event-register',function(data,form){const event=BY[data.event];requestEmail('Summit registration request: '+event.t,'Please register me for '+event.t+' on '+istLong(event.s0)+' at '+istTime(event.s0)+' IST.\n\n'+Object.entries(data).filter(([key])=>key!=='event').map(([key,value])=>key+': '+value).join('\n'),form);});
  XH.onForm('event-slides',function(data,form){requestEmail('Recording and slides request: '+RBY[data.recording].t,'Please send the recording and slides for '+RBY[data.recording].t+' to '+data.email+'.\nCompany: '+data.company,form);});
  XH.onForm('event-private',function(data,form){requestEmail('Private session request: '+data.topic,'Please arrange a private session for our team.\n\n'+Object.entries(data).map(([key,value])=>key+': '+value).join('\n'),form);});
  function pauseWhenHidden(){if(parent.document.hidden)stopPlay();}
  parent.document.addEventListener('visibilitychange',pauseWhenHidden);
  window.addEventListener('pagehide',function(){close();stopPlay();clearTimeout(rqT);timers.forEach(clearTimeout);cancelAnimationFrame(scheduled);observer.disconnect();parent.removeEventListener('scroll',schedule);parent.removeEventListener('resize',schedule);parent.document.removeEventListener('visibilitychange',schedule);parent.document.removeEventListener('visibilitychange',pauseWhenHidden);parent.document.removeEventListener('keydown',keydown);});
})();