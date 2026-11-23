
(function(){
'use strict';
var d=document,XH=window.XH||{};
var $=function(s,c){return (c||d).querySelector(s);},$$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));};
var REDUCE=!!XH.reduce||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
var ICONS={building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg>',route:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H16a3 3 0 000-6H8a3 3 0 010-6h7.5"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 006 0zM18 7l-3 7a3 3 0 006 0z"/></svg>',doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>',trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/></svg>',rupee:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>','shield-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',disk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',certificate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="13" rx="2"/><circle cx="12" cy="17" r="3"/><path d="M10.5 19.5L10 23l2-1 2 1-.5-3.5M7 7h10M7 10h6"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',boxes:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3l5 3-5 3-5-3 5-3zM17 3l5 3-5 3-5-3 5-3zM12 12l5 3-5 3-5-3 5-3z"/><path d="M2 6v5l5 3M22 6v5l-5 3M7 15v4l5 3 5-3v-4"/></svg>',chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>',server:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',x:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>'};

/* build3 has no robots support; strategy briefings must stay out of search indexes */
(function(){try{if(!d.querySelector('meta[name="robots"]')){var m=d.createElement('meta');m.name='robots';m.content='noindex, nofollow';d.head.appendChild(m);}}catch(e){}})();

/* ---------- formatting ---------- */
var FX_DASH=92.97; // ₹ per US$: cross rate from Bank of Russia official rates for 21 Nov 2026 (82.1911 ₽/US$ ÷ 0.884061 ₽/₹)
var FX_RUB=82.19;  // ₽ per US$: Bank of Russia official rate for 21 Nov 2026 (82.1911)
function inr(usd,fx){var v=usd*(fx||FX_DASH);
  if(v>=1e12)return '₹'+(v/1e12).toFixed(2)+' lakh crore';
  if(v>=1e7){var c=v/1e7;return '₹'+(c>=100?Math.round(c).toLocaleString('en-IN'):c.toFixed(1))+' crore';}
  return '₹'+(v/1e5).toFixed(1)+' lakh';}
function usdS(v){if(v>=1e9)return 'US$'+(v/1e9).toFixed(2).replace(/\.?0+$/,'')+'B';if(v>=1e6)return 'US$'+(v/1e6).toFixed(2).replace(/\.?0+$/,'')+'M';if(v>=1e3)return 'US$'+Math.round(v/1e3)+'k';return 'US$'+Math.round(v);}
function rubS(v){if(v>=1e9)return '₽'+(v/1e9).toFixed(2)+'B';if(v>=1e6)return '₽'+(v/1e6).toFixed(2)+'M';if(v>=1e3)return '₽'+Math.round(v/1e3)+'k';return '₽'+Math.round(v);}
function usdFull(v){return 'US$'+Math.round(v).toLocaleString('en-US');}
$$('.inr[data-usd]').forEach(function(el){el.textContent=inr(+el.getAttribute('data-usd'));});

/* ---------- header offset + TOC scroll-spy + print ---------- */
var hdr=d.getElementById('xhHdr'),root=d.documentElement;
function hh(){root.style.setProperty('--vg-hh',(hdr?hdr.offsetHeight:0)+'px');}
hh();window.addEventListener('resize',hh);
var toc=$('#vgToc'),tlinks=$$('#vgToc a'),secs=tlinks.map(function(a){return d.querySelector(a.getAttribute('href'));}),tbar=$('#vgTocBar'),spyQ=false;
function spy(){spyQ=false;var y=window.scrollY+(hdr?hdr.offsetHeight:0)+(toc?toc.offsetHeight:0)+40,cur=-1;
  secs.forEach(function(s,i){if(s&&s.offsetTop<=y)cur=i;});
  tlinks.forEach(function(a,i){a.classList.toggle('on',i===cur);});
  if(cur>=0&&toc){var a=tlinks[cur],box=a.parentNode;if(a.offsetLeft<box.scrollLeft||a.offsetLeft+a.offsetWidth>box.scrollLeft+box.clientWidth)box.scrollTo({left:a.offsetLeft-24,behavior:'smooth'});}
  if(tbar){var st=secs[0]?secs[0].offsetTop:0,en=d.documentElement.scrollHeight-window.innerHeight;var p=Math.max(0,Math.min(1,(window.scrollY-st+400)/Math.max(1,en-st+400)));tbar.style.transform='scaleX('+p.toFixed(3)+')';}}
window.addEventListener('scroll',function(){if(!spyQ){spyQ=true;setTimeout(spy,60);}},{passive:true});spy();
$$('[data-print]').forEach(function(b){b.addEventListener('click',function(){window.print();});});
window.addEventListener('beforeprint',function(){$$('.fq .fa').forEach(function(a){a.style.maxHeight='none';});$$('.rv').forEach(function(r){r.classList.add('in');});});

/* ---------- "before any engagement" checklist (session only, nothing stored) ---------- */
(function(){var box=$('#vgChk');if(!box)return;var cbs=$$('input[type="checkbox"]',box),n=$('#vgChkN'),bar=$('#vgChkBar');
  function upd(){var c=cbs.filter(function(x){return x.checked;}).length;n.textContent=c+' of '+cbs.length+' checked'+(c===cbs.length?' · now take it to counsel':'');bar.style.width=(c/cbs.length*100).toFixed(1)+'%';box.classList.toggle('done',c===cbs.length);}
  box.addEventListener('change',upd);upd();})();

/* =====================================================================
   DATA — services (slug → [name, pillar, note]); pillars C S D T A L
   Only XcellHost-delivered services, India-side hosting, and vendors (*) whose
   Russia terms must still be confirmed. No suspended-vendor products.
   ===================================================================== */
var P={C:['Cloud','cloud'],S:['Cyber Security','shield'],D:['Data Protection','disk'],T:['Digital Trust','certificate'],A:['AI','brain'],L:['Training','book']};
var PK=['C','S','D','T','A','L'];
var SV={
 'xcellhost-managed-grc':['Managed GRC','S','Risk register with sanctions and export-control controls'],
 'third-party-risk-management':['Third-Party Risk Management','S','Counterparty and supplier due-diligence workflow'],
 'xcellhost-iso-27001':['ISO 27001 Consulting','S','ISMS evidence for audits and bank due diligence'],
 'xcellhost-vciso':['vCISO','S','Security leadership and board risk reporting'],
 'xcellhost-vdpo':['vDPO as a Service','D','Privacy operations; 152-FZ points mapped with Russian counsel'],
 'cyber-security-audit':['Cyber Security Audit','S','Gap review of India-side systems'],
 'threat-intelligence':['Threat Intelligence','S','Early warning on campaigns against corridor firms'],
 'digital-risk-monitoring':['Digital Risk Monitoring','S','Spoofed domains and leaked data'],
 'xcellhost-iso-22301':['ISO 22301 Consulting','D','Continuity for payment and supply disruption'],
 'private-cloud':['Private Cloud (Mumbai)','C','India-side data only, never Russian citizens\' personal data'],
 'ot-assessment':['OT Security Assessment','S','IEC 62443-aligned review of Indian plants'],
 'red-team-assessment':['Red Team Assessment','S','Adversary simulation on the India-side estate'],
 'blue-team-assessment':['Blue Team Assessment','S','Detection and response maturity review'],
 'dfir':['DFIR','S','Incident response and forensics in India'],
 'cyber-range-as-a-service':['Cyber Range as a Service','L','Live-fire SOC and IR exercises'],
 'dedicated-servers-india':['Dedicated Servers India','C','India-side workloads in Mumbai Tier IV'],
 'xcellhost-vcio':['vCIO','C','IT roadmap with a vendor-licence exposure map'],
 'xcellhost-pci-dss':['PCI DSS Consulting','S','Card-data controls for Indian payment teams'],
 'xcellhost-soc-2':['SOC 2 Readiness','T','Assurance reports for foreign counterparties'],
 'xcellhost-soc-1':['SOC 1 Readiness','T','Controls reports for finance processes'],
 'xcellhost-zoho-assist':['Zoho Assist*','C','Indian vendor; Russia terms to confirm'],
 'accops-digital-workspace':['Accops Digital Workspace*','C','Indian VDI/ZTNA vendor; Russia terms to confirm'],
 'accops-hyid':['Accops HyID*','S','Indian MFA vendor; Russia terms to confirm'],
 'xcellhost-iso-42001':['ISO/IEC 42001 Consulting','A','AI governance for India-side AI use'],
 'xcellhost-vcto':['vCTO','C','Architecture reviews that separate restricted tools'],
 'crypto-agility-and-post-quantum-cryptography-readiness':['PQC Readiness (advisory)','T','Crypto inventory and roadmap; advisory only, no crypto products'],
 'xcellhost-iso-27018':['ISO 27018 Consulting','D','Controls for personal data in cloud'],
 'zoho-workdrive':['Zoho WorkDrive*','C','Indian vendor; Russia terms to confirm'],
 'xcellhost-sarv-workspace':['Sarv Workspace*','C','Indian email and docs; Russia terms to confirm'],
 'xcellhost-sarv-deepcall':['Sarv DeepCall*','C','Indian contact-centre vendor; Russia terms to confirm'],
 'kaspersky-services':['Kaspersky*','S','Russian-origin vendor; territory terms and any US restrictions to review']
};
function fn(n){return '<a class="fn" href="#s'+n+'">'+n+'</a>';}
/* segments (wave 1/2 = India-side; wave 3 = Russia-facing, on hold) */
var V=[
 {k:'pharma',n:'Pharma & life sciences',full:'Indian pharmaceutical exporters and their distributors',ic:'heart',wave:1,
  why:[['heart','Pharmaceuticals lead the list of Indian exports to Russia. Indian investment in Russia is mainly in oil and gas and <b>pharmaceuticals</b>.'+fn(30)],
       ['alert','The EU added <b>3 Indian entities</b> to its Annex IV export-restriction list in October 2025, so counterparties need screening.'+fn(5)],
       ['lock','Russian patients\' or customers\' personal data must be recorded and stored in Russia from 1 Jul 2025.'+fn(17)]],
  regs:['EU / US / UK counterparty screening','152-FZ (if Russian personal data)','RBI INR settlement route','DTAA Art. 12'],
  buy:['Export compliance head','CFO / treasury','CIO','CISO','Legal'],
  svc:['xcellhost-managed-grc','third-party-risk-management','xcellhost-iso-27001','xcellhost-vciso','xcellhost-vdpo','cyber-security-audit','threat-intelligence','digital-risk-monitoring','xcellhost-iso-22301','private-cloud'],
  trg:['A new Russian distributor or tender','Each new EU package or US designation round'+fn(7),'Bank questions on a Russia-linked payment'+fn(16),'A customer or auditor sanctions questionnaire'],
  calc:[15,8,15000]},
 {k:'energy',n:'Oil, gas & refining (India-side)',full:'Indian refiners, importers and traders. Russian energy companies are not pursued.',ic:'zap',wave:1,
  why:[['zap','Oil and petroleum products lead Indian imports from Russia, which were <b>US$55.4B</b> in the latest year.'+fn(30)],
       ['alert','EU packages list third-country banks, ports and intermediaries.'+fn(5)+fn(7)],
       ['building','Russian investment in India is mainly in oil and gas, petrochemicals, banking, railways and steel.'+fn(30)]],
  regs:['EU / US / UK sanctions and listings','EU Annex XLV (banks)','RBI INR settlement route','US EO 14114 (secondary risk)'],
  buy:['CISO','OT / plant head','Trade compliance','Treasury','Board risk committee'],
  svc:['ot-assessment','red-team-assessment','blue-team-assessment','dfir','threat-intelligence','xcellhost-managed-grc','third-party-risk-management','xcellhost-iso-22301','xcellhost-vciso','cyber-range-as-a-service'],
  trg:['A new sanctions package touching energy trade'+fn(7),'A counterparty listing'+fn(5),'An OT incident or audit finding','Bank or insurer due-diligence requests'],
  calc:[6,8,25000]},
 {k:'eng',n:'Engineering, iron & steel',full:'Indian engineering, iron and steel exporters',ic:'cpu',wave:1,
  why:[['cpu','Iron and steel are among India\'s main exports to Russia.'+fn(30)],
       ['alert','The US bars IT support and cloud services for enterprise-management and design and manufacturing software to persons in Russia.'+fn(1)],
       ['trend','Russian manufacturing grew 3.9% in 2025; growth was led by defence-related products, which raise end-use questions.'+fn(31)]],
  regs:['EU / US / UK screening','EU Annex IV (dual-use)','OFAC IT services determination','RBI INR settlement route'],
  buy:['Export compliance head','CIO','Plant IT / OT head','CISO','Legal'],
  svc:['third-party-risk-management','xcellhost-managed-grc','ot-assessment','xcellhost-iso-27001','cyber-security-audit','red-team-assessment','xcellhost-vcio','dedicated-servers-india','accops-digital-workspace','accops-hyid'],
  trg:['An end-user or end-use question from a bank','A new export order to Russia','Annex IV listing of a buyer'+fn(7),'A customer security audit'],
  calc:[10,8,12000]},
 {k:'it',n:'Indian IT & software firms',full:'Indian IT services and software companies with any Russian enquiries',ic:'code',wave:1,
  why:[['code','OFAC bars IT consultancy and design services to persons in Russia from the US or by US persons, from 12 Sep 2024.'+fn(1)],
       ['x','The EU bans IT consultancy, covered software, AI and HPC, and managed cyber security services for Russia.'+fn(3)+fn(5)+fn(6)],
       ['users','Outsourcing a prohibited service counts as indirect provision, so firms with EU staff or subsidiaries need delivery controls.'+fn(4)]],
  regs:['EU Art. 5n services bans','OFAC IT services determination','UK reg. 54C','BIS software controls'],
  buy:['CEO / COO','General counsel','Delivery head','CISO','Export compliance'],
  svc:['xcellhost-managed-grc','xcellhost-iso-27001','xcellhost-soc-2','xcellhost-iso-42001','third-party-risk-management','xcellhost-vciso','xcellhost-vcto','crypto-agility-and-post-quantum-cryptography-readiness','red-team-assessment','cyber-security-audit'],
  trg:['A Russian enquiry to an Indian firm','A Western client\'s sanctions clause or audit','A new EU package'+fn(7),'An export-control classification question'+fn(2)],
  calc:[10,10,12000]},
 {k:'chem',n:'Chemicals & fertilisers',full:'Indian chemical exporters and fertiliser importers',ic:'boxes',wave:2,
  why:[['boxes','Organic and inorganic chemicals are among Indian exports; fertilisers are among imports from Russia.'+fn(30)],
       ['alert','The EU\'s Annex IV lists entities subject to tighter dual-use export restrictions, including some in India.'+fn(7)],
       ['trend','In Russia, mining, energy and utilities declined in 2025 while manufacturing grew.'+fn(31)]],
  regs:['EU / US / UK screening','EU Annex IV (dual-use)','RBI INR settlement route','DTAA Art. 12'],
  buy:['Plant IT / OT head','Export compliance','CFO','CISO'],
  svc:['ot-assessment','xcellhost-iso-27001','third-party-risk-management','xcellhost-managed-grc','cyber-security-audit','xcellhost-iso-22301','dfir','threat-intelligence','dedicated-servers-india','xcellhost-vcio'],
  trg:['A new product or customer in Russia','An end-use questionnaire','Ransomware on plant systems','A counterparty listing'+fn(7)],
  calc:[10,8,12000]},
 {k:'bfsi',n:'Banks & trade finance (India-side)',full:'Indian banks with Vostro accounts, NBFCs and trade-finance teams',ic:'rupee',wave:2,
  why:[['rupee','The RBI has allowed trade invoicing and settlement in INR through Special Rupee Vostro Accounts since 11 Jul 2022.'+fn(16)],
       ['alert','The EU listed third-country banks and payment providers in Annex XLV in its 19th package.'+fn(5)],
       ['shield','US Russia-related sanctions include an authority over foreign financial institutions (EO 14114).'+fn(10)]],
  regs:['RBI INR settlement','EU Annex XLV','US EO 14114 (FFIs)','EU / US / UK screening'],
  buy:['Chief risk officer','CISO','Head of trade finance','Sanctions compliance','Internal audit'],
  svc:['xcellhost-pci-dss','xcellhost-soc-2','xcellhost-soc-1','xcellhost-managed-grc','third-party-risk-management','red-team-assessment','threat-intelligence','dfir','xcellhost-vciso','xcellhost-iso-27001'],
  trg:['A new Annex XLV listing'+fn(5),'Correspondent-bank questionnaires','An RBI inspection finding','An incident in a payment system'],
  calc:[4,6,35000]},
 {k:'log',n:'Shipping, logistics & ports',full:'Indian shipping lines, freight forwarders, ports and 3PLs',ic:'route',wave:2,
  why:[['route','Coking coal, oil and fertilisers are among Indian imports from Russia.'+fn(30)],
       ['alert','The EU can now list foreign ports and locks under Annex XLVII Part C.'+fn(5)],
       ['users','More than 60,000 Indian workers arrived in Russia in 2025, many in logistics and delivery.'+fn(30)]],
  regs:['EU / US / UK screening','EU Annex XLVII (ports)','RBI INR settlement route','152-FZ (if Russian personal data)'],
  buy:['COO','CIO','Port / terminal IT','Trade compliance','CISO'],
  svc:['third-party-risk-management','ot-assessment','xcellhost-managed-grc','cyber-security-audit','digital-risk-monitoring','dfir','xcellhost-iso-27001','xcellhost-iso-22301','xcellhost-zoho-assist','private-cloud'],
  trg:['A vessel, port or counterparty listing'+fn(5),'A new route or charter','Ransomware on port or TMS systems','Insurer due diligence'],
  calc:[10,8,10000]},
 {k:'edu',n:'Education & student mobility',full:'Indian admissions agencies and universities with Russian programmes',ic:'book',wave:2,
  why:[['book','About <b>20,000</b> Indian students study in Russia, most of them in medicine.'+fn(30)],
       ['lock','Data collected from Russian citizens must be recorded and stored in Russia first.'+fn(17)],
       ['globe','More than 90,000 Indians visited Russia in 2025.'+fn(30)]],
  regs:['152-FZ (Russian citizens\' data)','Cross-border notices (266-FZ)','EU / US / UK screening','DPDP Act (India), see India GTM'],
  buy:['Registrar','IT head','DPO','Agency founder','Finance'],
  svc:['xcellhost-vdpo','xcellhost-iso-27018','zoho-workdrive','xcellhost-sarv-workspace','accops-hyid','digital-risk-monitoring','cyber-security-audit','cyber-range-as-a-service','xcellhost-iso-27001','xcellhost-zoho-assist'],
  trg:['Admissions season','A data-handling complaint','A partner university\'s data request','Phishing against students'],
  calc:[8,8,6000]},
 {k:'travel',n:'Travel, hospitality & labour mobility',full:'Indian hotels, tour operators and recruiters',ic:'globe',wave:2,
  why:[['globe','More than <b>170,000</b> Russians visited India in 2025.'+fn(30)],
       ['users','The annual quota for Indian workers in Russia was raised to 72,000.'+fn(30)],
       ['lock','Indian firms collecting Russian citizens\' data should check with counsel whether 152-FZ localisation applies to them.'+fn(17)]],
  regs:['152-FZ (Russian citizens\' data)','420-FZ leak fines','EU / US / UK screening','DPDP Act (India), see India GTM'],
  buy:['Owner / MD','IT head','DPO','Finance'],
  svc:['xcellhost-vdpo','xcellhost-iso-27018','xcellhost-pci-dss','digital-risk-monitoring','xcellhost-sarv-workspace','zoho-workdrive','cyber-security-audit','third-party-risk-management','xcellhost-iso-27001','threat-intelligence'],
  trg:['Peak tourist season','A booking-platform breach','A card-data audit','Recruitment drives for Russia'],
  calc:[10,8,6000]},
 {k:'ru',n:'Russia-domiciled firms (on hold)',full:'Private Russian companies, only after written clearance. CII and state-related bodies are out of scope.',ic:'lock',wave:3,
  why:[['x','Microsoft, Acronis, Fortinet and AWS suspended Russian business in 2022.'+fn(12)+fn(13)+fn(14)+fn(15)],
       ['lock','Personal data stays in Russia, so Mumbai cannot be its primary store.'+fn(17)],
       ['server','Significant CII must use registered Russian software, so CII is out of scope.'+fn(21)]],
  regs:['EU / US / UK services bans','152-FZ + 23-FZ localisation','187-FZ CII','VAT 22% + DTAA'],
  buy:['CIO','CISO','General counsel','Procurement'],
  svc:['kaspersky-services','accops-digital-workspace','accops-hyid','xcellhost-sarv-workspace','xcellhost-sarv-deepcall','zoho-workdrive','xcellhost-zoho-assist','xcellhost-iso-27001','xcellhost-iso-22301','cyber-range-as-a-service'],
  trg:['Only after written clearance','Re-screen at each package'+fn(7),'Written vendor confirmation for each product','Stop on any listing'],
  calc:[5,5,10000]}
];
var WAVE={1:'India-side · first',2:'India-side · months 6–18',3:'Russia-facing · on hold until clearance'};

/* ---------- verticals: selector + panels ---------- */
var vsel=$('#vgVsel'),vpan=$('#vgVpanels');
if(vsel&&vpan){
  vsel.innerHTML=V.map(function(v,i){return '<button type="button" role="tab" aria-selected="'+(i?'false':'true')+'" class="'+(i?'':'on')+'" data-v="'+v.k+'"><i>'+ICON(v.ic)+'</i><span>'+v.n+'</span></button>';}).join('');
  vpan.innerHTML=V.map(function(v,i){
    var pc={};v.svc.forEach(function(s){var p=SV[s][1];pc[p]=(pc[p]||0)+1;});
    return '<article class="vg-vp'+(i?'':' on')+'" data-v="'+v.k+'" role="tabpanel" aria-label="'+v.n+'">'+
      '<header class="vg-vph"><span class="ico">'+ICON(v.ic)+'</span><div><h3>'+v.n+'</h3><p>'+v.full+'</p></div><span class="vg-wave w'+v.wave+'">'+WAVE[v.wave]+'</span></header>'+
      '<div class="vg-vpg"><div class="vg-vcol">'+
        '<h4>'+ICON('search')+'Why it matters</h4><ul class="ilist">'+v.why.map(function(w){return '<li><i>'+ICON(w[0])+'</i><span>'+w[1]+'</span></li>';}).join('')+'</ul>'+
        '<h4>'+ICON('scale')+'Regulatory drivers</h4><div class="chips vg-rch">'+v.regs.map(function(r){return '<span class="chip"><i>'+ICON('doc')+'</i>'+r+'</span>';}).join('')+'</div>'+
        '<h4>'+ICON('users')+'Buying centre</h4><div class="chips vg-bch">'+v.buy.map(function(r){return '<span class="chip"><i>'+ICON('user')+'</i>'+r+'</span>';}).join('')+'</div>'+
        '<h4>'+ICON('bell')+'Key buying triggers</h4><ul class="ilist vg-trl">'+v.trg.map(function(t){return '<li><i>'+ICON('zap')+'</i><span>'+t+'</span></li>';}).join('')+'</ul>'+
      '</div><div class="vg-vcol">'+
        '<h4>'+ICON('trophy')+'Top 10 services · subject to sanctions and vendor-licence review</h4><ol class="vg-svc">'+v.svc.map(function(s,j){var x=SV[s];return '<li><a href="'+s+'.html"><span class="n">'+(j<9?'0':'')+(j+1)+'</span><span class="t">'+x[0]+'<small>'+x[2]+'</small></span><em class="pt p'+x[1]+'">'+P[x[1]][0]+'</em></a></li>';}).join('')+'</ol>'+
        '<div class="vg-mix">'+PK.map(function(p){return '<span class="p'+p+'" style="flex:'+(pc[p]||0)+'" title="'+P[p][0]+': '+(pc[p]||0)+'"></span>';}).join('')+'</div><p class="vg-mixl">Pillar mix: '+PK.filter(function(p){return pc[p];}).map(function(p){return P[p][0]+' '+pc[p];}).join(' · ')+'</p>'+
      '</div></div></article>';}).join('');
  vsel.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;showV(b.getAttribute('data-v'),true);});
}
function showV(k,focus){$$('button',vsel).forEach(function(b){var on=b.getAttribute('data-v')===k;b.classList.toggle('on',on);b.setAttribute('aria-selected',on);});
  $$('.vg-vp',vpan).forEach(function(p){p.classList.toggle('on',p.getAttribute('data-v')===k);});
  if(focus){var b=$('button[data-v="'+k+'"]',vsel);if(b&&b.scrollIntoView)vsel.scrollTo({left:b.offsetLeft-20,behavior:'smooth'});}}
function ICON(n){return (ICONS[n]||ICONS.doc);}

/* ---------- compliance calendar ---------- */
var TODAY=new Date('2026-11-23');
var TR=[
 ['2016-07-07','law','"Yarovaya" amendments to the telecom law and 149-FZ signed (data in Russia, retention, decryption)',[22]],
 ['2017-07-26','law','Federal Law 187-FZ on the security of critical information infrastructure adopted',[21]],
 ['2022-03-04','tech','Microsoft suspends new sales in Russia; Acronis suspends all operations in Russia',[12,13]],
 ['2022-03-07','tech','Fortinet suspends operations in Russia',[14]],
 ['2022-03-08','tech','Amazon stops accepting new AWS customers in Russia and Belarus (approximate date)',[15]],
 ['2022-03-31','law','Decree 166: covered organisations may not buy foreign software for CII without approval',[20]],
 ['2022-07-11','market','RBI allows trade invoicing and settlement in INR (Special Rupee Vostro Accounts)',[16]],
 ['2022-07-21','law','UK bans management consultancy, accounting and PR services to persons connected with Russia',[8]],
 ['2022-10-06','law','EU 8th package: IT consultancy ban applies (Art. 5n)',[3]],
 ['2022-12-16','law','UK bans IT consultancy and design, architecture, engineering, advertising and auditing services',[8]],
 ['2023-03-01','law','152-FZ cross-border transfer rules: assessment and Roskomnadzor notice before first transfer',[18]],
 ['2023-12-18','law','EU 12th package: ban on enterprise-management and industrial design software (Annex XXXIX)',[3]],
 ['2024-03-20','law','EU software wind-down for earlier contracts ends',[3,4]],
 ['2024-09-12','law','OFAC IT consultancy, IT support and cloud services ban takes effect',[1]],
 ['2024-09-16','law','BIS export controls on EAR99 enterprise software to Russia and Belarus take effect',[2]],
 ['2025-01-01','law','Decree 166: covered organisations may not use foreign software for CII. Profit tax rate 25%',[20,25]],
 ['2025-04-24','law','UK publishes sectoral software sanctions guidance (SaaS and downloads covered)',[9]],
 ['2025-05-30','law','420-FZ leak fines apply, including 1–3% of revenue for repeat leaks',[19]],
 ['2025-07-01','law','23-FZ: foreign databases may not be used to record and store Russian citizens\' personal data',[17]],
 ['2025-07-18','market','MEA: India does not subscribe to unilateral sanction measures',[11]],
 ['2025-09-01','law','58-FZ: significant CII must use software from the Russian software register',[21]],
 ['2025-10-23','law','EU 19th package adopted; 3 Indian entities added to Annex IV',[5]],
 ['2025-11-25','law','EU ban on AI, HPC and quantum computing services applies',[4,5]],
 ['2026-01-01','law','Russian VAT rises from 20% to 22% (425-FZ)',[23]],
 ['2026-03-01','law','325-FZ: CII may also use software on a planned register of in-house Russian software',[21]],
 ['2026-04-23','law','EU 20th package adopted: managed cyber security services ban',[6]],
 ['2026-05-20','law','UK construction services ban applies',[8]],
 ['2026-06-19','market','MEA bilateral brief: trade US$59.9B in FY2025–26 after a US$68.7B record',[30]],
 ['2026-07-24','law','EU 21st package in force; more Annex IV intermediaries, including from India',[7]],
 ['2026-11-21','market','Bank of Russia rate: ₽82.19 per US$',[28]],
 ['2030-12-31','market','India–Russia leaders\' target: US$100B bilateral trade by 2030',[30]]
];
var MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var tline=$('#vgTline');
if(tline){var nowDone=false,h='';
  TR.forEach(function(t){var dt=new Date(t[0]),past=dt<=TODAY;
    if(!past&&!nowDone){nowDone=true;h+='<li class="vg-now" data-t="all"><span>Today · 23 Nov 2026</span></li>';}
    var lab=t[0]==='2030-12-31'?'By 2030':(+t[0].slice(8))+' '+MON[+t[0].slice(5,7)-1]+' '+t[0].slice(0,4);
    h+='<li class="vg-ti '+(past?'past':'next')+' t-'+t[1]+'" data-t="'+t[1]+'"><time datetime="'+t[0]+'">'+lab+'</time><span class="vg-tt"><em>'+(t[1]==='law'?'Sanctions & law':t[1]==='tech'?'Vendors & technology':'Market & policy')+(past?' · in effect':' · upcoming')+'</em>'+t[2]+t[3].map(fn).join('')+'</span></li>';});
  if(!nowDone)h+='<li class="vg-now" data-t="all"><span>Today · 23 Nov 2026</span></li>';
  tline.innerHTML=h;}
filterGroup('#vgTfil',function(f){$$('li',tline).forEach(function(li){var t=li.getAttribute('data-t');li.style.display=(f==='all'||t===f||t==='all')?'':'none';});});
filterGroup('#vgLawf',function(f){$$('#vgLtbl tbody tr').forEach(function(tr){tr.style.display=(f==='all'||tr.getAttribute('data-c')===f)?'':'none';});});
function filterGroup(sel,cb){var g=$(sel);if(!g)return;g.addEventListener('click',function(e){var b=e.target.closest('button[data-f]');if(!b)return;$$('button',g).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});cb(b.getAttribute('data-f'));});}

/* ---------- charts (inline SVG) ---------- */
var NS='http://www.w3.org/2000/svg';
function svg(w,h,inner){return '<svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="xMidYMid meet" xmlns="'+NS+'">'+inner+'</svg>';}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}
function hbars(el,rows,mx,step,x0,x1,W,H,unit,gap){var o='',sx=function(v){return x0+(x1-x0)*v/mx;};
  for(var g=0;g<=mx;g+=step){var gx=sx(g);o+='<line class="gl" x1="'+gx+'" y1="10" x2="'+gx+'" y2="'+(H-28)+'"/><text class="ax" x="'+gx+'" y="'+(H-10)+'" text-anchor="middle">'+g+'</text>';}
  rows.forEach(function(r,i){var y=34+i*(gap||44),w=sx(r[1])-x0;
    o+='<text class="lb" x="'+(x0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
    o+='<rect class="br grow '+r[2]+'" x="'+x0+'" y="'+(y-10)+'" width="'+Math.max(4,w)+'" height="20" rx="4" style="transition-delay:'+(i*0.08)+'s"/>';
    var ex=x0+w>x1-70;o+='<text class="vl" x="'+(ex?x0+w-6:x0+w+8)+'" y="'+(ex?y+24:y+5)+'" text-anchor="'+(ex?'end':'start')+'">'+r[3]+unit+'</text>';});
  el.innerHTML=svg(W,H,o);}
(function(){
  var el=$('#vgChRange');if(el)hbars(el,[['FY2024–25',68.7,'cb','68.7'],['FY2025–26',59.863,'cn','59.9']],80,20,150,480,520,150,'B',44);
  el=$('#vgChGmv');if(el)hbars(el,[['Indian imports',55.369,'cb','55.4'],['Indian exports',4.88,'co','4.9']],60,15,150,480,520,150,'B',44);
  el=$('#vgChDc');if(el)hbars(el,[['Mobile connections',225,'cn','225'],['Population',144,'cb','144'],['Internet users',136,'cb','136'],['Social media IDs',106,'co','106']],250,50,170,470,520,230,'M',44);
  el=$('#vgChLine');if(el){var F=[['Failure to notify a leak',1,3],['Leak · 1k–10k people',3,5],['Leak · 10k–100k',5,10],['Leak · over 100k',10,15],['Biometric data leak',15,20],['Repeat leak (1–3% revenue)',20,500]];
    var W4=520,H4=290,x0=190,x1=490,l0=Math.log(1),l1=Math.log(600),sx=function(v){return x0+(x1-x0)*(Math.log(v)-l0)/(l1-l0);},o4='';
    [1,3,10,30,100,500].forEach(function(g){var gx=sx(g);o4+='<line class="gl" x1="'+gx+'" y1="10" x2="'+gx+'" y2="'+(H4-30)+'"/><text class="ax" x="'+gx+'" y="'+(H4-12)+'" text-anchor="middle">'+g+'</text>';});
    F.forEach(function(r,i){var y=30+i*40,a=sx(r[1]),b=sx(r[2]);
      o4+='<text class="lb" x="'+(x0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o4+='<rect class="br grow '+(i===5?'co':'cb')+'" x="'+a+'" y="'+(y-9)+'" width="'+Math.max(4,b-a)+'" height="18" rx="4" style="transition-delay:'+(i*0.07)+'s"/>';
      var ex=b>x1-60;o4+='<text class="vl" x="'+(ex?a-6:b+7)+'" y="'+(y+5)+'" text-anchor="'+(ex?'end':'start')+'">₽'+r[1]+'–'+r[2]+'M</text>';});
    o4+='<text class="ax" x="'+x1+'" y="'+(H4-0)+'" text-anchor="end">log scale, ₽ million</text>';
    el.innerHTML=svg(W4,H4+4,o4);}
})();

/* ---------- revenue model (no TAM; bottom-up only) ---------- */
var mt=$('#vgMtbl tbody'),scn=1;
function mrow(v){return '<tr data-v="'+v.k+'"><td>'+v.n+(v.wave===3?' <small class="vg-hold">needs clearance</small>':'')+'</td>'+
  '<td><input type="number" class="vg-mi" data-f="0" min="0" max="5000" step="1" value="'+v.calc[0]+'" aria-label="'+v.n+' target accounts"></td>'+
  '<td><input type="number" class="vg-mi" data-f="1" min="0" max="100" step="0.5" value="'+v.calc[1]+'" aria-label="'+v.n+' win rate percent"></td>'+
  '<td><input type="number" class="vg-mi w" data-f="2" min="0" max="5000000" step="500" value="'+v.calc[2]+'" aria-label="'+v.n+' annual contract value in US dollars"></td>'+
  '<td class="o" data-o="won">0</td><td class="o" data-o="rev">0</td></tr>';}
function buildModel(){if(mt)mt.innerHTML=V.map(mrow).join('');}
buildModel();
var RES=[];
function calc(){if(!mt)return;var fx=+$('#vgFx').value||FX_DASH,fxr=+$('#vgFxR').value||FX_RUB,ta=0,tw=0,tr=0,ru=0;RES=[];
  $$('tr',mt).forEach(function(r,i){var ins=$$('input',r).map(function(x){return Math.max(0,+x.value||0);});
    var wr=Math.min(100,ins[1]*scn),won=ins[0]*wr/100,rev=won*ins[2];ta+=ins[0];tw+=won;tr+=rev;if(V[i].wave===3)ru+=rev;
    $('[data-o="won"]',r).textContent=won.toFixed(1);$('[data-o="rev"]',r).textContent=usdFull(rev);RES.push([V[i].n,ins[0],wr,ins[2],won,rev,V[i].wave===3]);});
  $('#vgTA').textContent=ta.toLocaleString('en-US');$('#vgTW').textContent=tw.toFixed(1);$('#vgTR').textContent=usdFull(tr);
  $('#vgOutUsd').textContent=usdS(tr);$('#vgOutInr').textContent='≈ '+inr(tr,fx)+' at ₹'+fx.toFixed(2)+' per US$';
  set('#vgOutRub',rubS(tr*fxr));$('#vgOutAcc').textContent=Math.round(tw);$('#vgOutAcv').textContent=usdFull(tw?tr/tw:0);
  set('#vgOutInd',usdS(tr-ru));var sh=tr?ru/tr*100:0;$('#vgOutShare').textContent=sh.toFixed(1)+'%';
  set('#vgSom',usdS(tr));set('#vgSomP',(tr?Math.round((tr-ru)/tr*100):0)+'%');set('#vgSomI','≈ '+inr(tr,fx));
  set('#vgGoalAcc',String(Math.round(tw)));set('#vgGoalRev',usdS(tr));set('#vgGoalRevI','≈ '+inr(tr,fx));
  var mx=Math.max.apply(null,RES.map(function(r){return r[5];}).concat([1]));
  $('#vgBars').innerHTML=RES.slice().sort(function(a,b){return b[5]-a[5];}).map(function(r){return '<div class="vg-bar'+(r[6]?' hold':'')+'"><span>'+r[0]+'</span><i><u style="width:'+(r[5]/mx*100).toFixed(1)+'%"></u></i><b>'+usdS(r[5])+'</b></div>';}).join('');
  if(XH.flash)XH.flash($('#vgOutUsd'));}
function set(s,t){var e=$(s);if(e)e.textContent=t;}
if(mt){mt.addEventListener('input',calc);$('#vgFx').addEventListener('input',calc);$('#vgFxR').addEventListener('input',calc);
  var sg=$('#vgScn');sg.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;$$('button',sg).forEach(function(x){x.classList.toggle('on',x===b);});scn=+b.getAttribute('data-v');
    $('#vgScnL').textContent=b.firstChild.textContent+' · win rate ×'+scn.toFixed(1);calc();});
  $('#vgReset').addEventListener('click',function(){buildModel();$('#vgFx').value='92.97';$('#vgFxR').value='82.19';scn=1;$$('#vgScn button').forEach(function(x){x.classList.toggle('on',x.getAttribute('data-v')==='1');});$('#vgScnL').textContent='Base · win rate ×1.0';calc();if(XH.toast)XH.toast('Revenue model reset to default assumptions');});
  $('#vgCsv').addEventListener('click',function(){var fx=+$('#vgFx').value||FX_DASH,fxr=+$('#vgFxR').value||FX_RUB,rows=[['Segment','Target accounts','Win rate % (after scenario)','ACV USD','Accounts won','Revenue USD','Revenue RUB','Revenue INR','Needs clearance']];
    RES.forEach(function(r){rows.push([r[0],r[1],r[2].toFixed(1),r[3],r[4].toFixed(2),Math.round(r[5]),Math.round(r[5]*fxr),Math.round(r[5]*fx),r[6]?'yes':'no']);});
    rows.push([]);rows.push(['Illustrative, subject to sanctions and vendor-licence review. Not a forecast. FX ₹'+fx+' and ₽'+fxr+' per US$ (Bank of Russia, 21 Nov 2026).']);
    var csv=rows.map(function(r){return r.map(function(c){c=String(c==null?'':c);return /[",]/.test(c)?'"'+c.replace(/"/g,'""')+'"':c;}).join(',');}).join('\n');
    if(XH.download)XH.download('xcellhost-russia-revenue-model.csv',csv,'text/csv');});
  calc();}

/* ---------- heatmap ---------- */
var LAWP=[ // [law, pillars, segments ('*' = all)] — only laws in the table above
 ['EU Reg. 833/2014 Art. 5n services bans','CSA','*'],['US OFAC IT services + BIS software controls','CS','*'],['UK reg. 54C + sectoral software','CS','*'],
 ['Secondary sanctions & third-country listings','S',['pharma','energy','chem','bfsi','log','eng','it']],
 ['152-FZ Art. 18(5) localisation (23-FZ)','CD',['edu','travel','ru','pharma','log']],['152-FZ notices & cross-border (266-FZ)','D',['edu','travel','ru']],
 ['420-FZ leak fines','DS',['ru','travel','edu']],['187-FZ CII','CS',['ru']],['Decree 166 (foreign software in CII)','CS',['ru']],
 ['149-FZ + Yarovaya amendments','CD',['ru','it']],['RBI INR settlement','S',['bfsi','pharma','energy','chem','eng','log']]];
var hg=$('#vgHgrid'),hdet=$('#vgHdet'),hmode='fit';
function hval(v,p){if(hmode==='fit')return v.svc.filter(function(s){return SV[s][1]===p;}).length;
  return LAWP.filter(function(l){return l[1].indexOf(p)>-1&&(l[2]==='*'||l[2].indexOf(v.k)>-1);}).length;}
function hlaws(v,p){return LAWP.filter(function(l){return l[1].indexOf(p)>-1&&(l[2]==='*'||l[2].indexOf(v.k)>-1);}).map(function(l){return l[0];});}
function drawHeat(){if(!hg)return;var mx=1;V.forEach(function(v){PK.forEach(function(p){mx=Math.max(mx,hval(v,p));});});
  var h='<div class="vg-hc hh"></div>'+PK.map(function(p){return '<div class="vg-hc hh" role="columnheader"><i>'+ICON(P[p][1])+'</i><span>'+P[p][0]+'</span></div>';}).join('');
  V.forEach(function(v){h+='<div class="vg-hc hr" role="rowheader">'+v.n+'</div>';
    PK.forEach(function(p){var n=hval(v,p),lv=n?Math.max(1,Math.round(n/mx*4)):0;
      h+='<button type="button" class="vg-hc hx l'+lv+'" data-v="'+v.k+'" data-p="'+p+'" aria-label="'+v.n+', '+P[p][0]+': '+n+'"><b>'+n+'</b></button>';});});
  hg.innerHTML=h;}
drawHeat();
if(hg){hg.addEventListener('click',function(e){var b=e.target.closest('.hx');if(!b)return;$$('.hx',hg).forEach(function(x){x.classList.toggle('sel',x===b);});
  var v=V.filter(function(x){return x.k===b.getAttribute('data-v');})[0],p=b.getAttribute('data-p'),sv=v.svc.filter(function(s){return SV[s][1]===p;}),lw=hlaws(v,p);
  hdet.innerHTML='<b>'+v.n+' × '+P[p][0]+'</b><div class="vg-hdg"><div><small>Mapped services ('+sv.length+')</small>'+(sv.length?'<ul>'+sv.map(function(s){return '<li><a href="'+s+'.html">'+SV[s][0]+'</a></li>';}).join('')+'</ul>':'<p>None in this segment\'s top 10.</p>')+'</div>'+
    '<div><small>Laws bearing on this pillar ('+lw.length+')</small>'+(lw.length?'<ul>'+lw.map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul>':'<p>No law in our table targets this pillar here.</p>')+'</div></div>'+
    '<button type="button" class="vg-hgo" data-v="'+v.k+'">Open '+v.n+' in the segment selector →</button>';});
  hdet.addEventListener('click',function(e){var b=e.target.closest('.vg-hgo');if(!b)return;showV(b.getAttribute('data-v'),true);var t=$('#verticals');window.scrollTo({top:t.offsetTop-((hdr?hdr.offsetHeight:0)+50),behavior:REDUCE?'auto':'smooth'});});
  var hm=$('#vgHmode');hm.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;$$('button',hm).forEach(function(x){x.classList.toggle('on',x===b);});hmode=b.getAttribute('data-v');drawHeat();
    hdet.innerHTML='<b>Select a cell</b><span>'+(hmode==='fit'?'Counts of top-10 services per pillar.':'Counts of laws in our table that bear on each pillar.')+'</span>';});}

/* =====================================================================
   HERO — one rAF loop: simplified outline of Russia (internationally
   recognised borders, not to scale), city pins, corridor links to Mumbai
   ===================================================================== */
var PL=[[28.0,60.5],[29.6,61.2],[30.6,62.3],[29.6,63.6],[30.1,64.6],[29.6,65.6],[30.0,66.9],[29.1,68.0],[28.7,69.0],[30.9,69.6],[33.0,69.4],[36.5,69.1],[40.4,67.8],[41.2,66.6],[44.0,66.2],[43.8,68.3],[46.3,68.1],[49.0,67.8],[53.5,68.6],[57.0,68.6],[60.5,69.4],[64.5,69.4],[67.5,68.6],[68.5,70.4],[67.6,72.0],[69.5,73.0],[72.6,72.8],[73.8,71.6],[76.5,72.0],[80.5,73.5],[86.5,74.6],[92.0,75.7],[98.0,76.3],[104.3,77.7],[108.0,76.8],[112.5,76.4],[113.5,73.8],[119.0,73.1],[126.5,72.8],[129.0,71.6],[132.5,71.5],[139.0,72.4],[146.0,72.3],[152.0,70.9],[159.5,70.8],[165.0,69.7],[170.5,70.0],[176.0,69.6],[180.0,68.9],[180.0,65.2],[177.5,64.6],[178.8,62.6],[175.0,62.1],[170.5,60.0],[165.0,60.2],[163.5,59.0],[163.0,57.3],[162.3,56.0],[160.0,54.0],[158.5,52.6],[156.7,51.0],[156.0,53.2],[155.6,56.5],[156.8,57.8],[159.5,61.0],[155.0,59.6],[151.0,59.4],[145.5,59.3],[142.0,59.0],[138.0,56.5],[136.8,54.6],[140.5,53.6],[141.2,51.5],[140.3,48.6],[138.6,47.0],[135.5,43.8],[133.0,42.8],[131.8,43.0],[130.7,42.4],[131.1,44.8],[133.0,45.0],[134.8,48.3],[131.0,47.8],[127.6,49.7],[125.6,53.0],[121.0,53.3],[119.5,51.0],[117.0,49.6],[114.5,50.2],[110.5,49.2],[107.5,49.8],[104.0,50.3],[98.3,50.2],[97.4,49.7],[92.0,50.7],[88.0,49.4],[86.7,49.8],[83.3,51.0],[80.0,50.8],[77.0,53.4],[73.4,53.5],[73.7,54.8],[70.5,55.2],[65.5,54.6],[61.5,54.0],[61.0,51.8],[57.5,50.9],[54.6,51.0],[50.7,51.6],[48.0,50.0],[46.6,48.6],[47.3,47.6],[48.2,46.6],[47.6,45.6],[47.3,44.3],[47.8,43.3],[48.6,41.9],[46.6,41.8],[44.8,42.6],[42.5,43.2],[40.0,43.4],[38.6,44.6],[37.3,45.0],[38.2,46.4],[38.6,47.1],[39.8,47.8],[40.1,48.9],[39.6,49.6],[38.2,50.0],[36.5,50.3],[35.4,50.6],[34.2,51.3],[33.6,52.3],[32.2,52.1],[31.7,52.9],[32.7,53.4],[31.3,54.2],[30.9,55.6],[28.3,56.1],[27.7,57.3],[27.4,58.0],[28.0,59.0],[28.0,59.5],[30.2,59.9],[29.0,60.2],[28.0,60.5]];
/* [name, lon, lat, label side, minor (hidden label when narrow), corridor highlight, scene-3 note] */
var CITY=[['Moscow',37.62,55.75,'b',0,1,'capital'],['St Petersburg',30.32,59.94,'l',0,1,'Baltic port'],['Kazan',49.11,55.79,'n',1,0,''],['Yekaterinburg',60.6,56.84,'t',1,0,''],['Novosibirsk',82.92,55.03,'b',1,0,''],['Vladivostok',131.89,43.12,'l',0,1,'Pacific port']];
var SC=[
 {t:'Sanctions · screen first',s:'EU, US and UK services bans · checked against sources below',
  c:'<span class="vg-ck">Before any engagement</span><div class="vg-cl"><b>6 Oct 2022</b><span>EU IT consultancy ban</span></div><div class="vg-cl"><b>16 Dec 2022</b><span>UK IT consultancy ban</span></div><div class="vg-cl"><b>12 Sep 2024</b><span>US OFAC IT services ban</span></div><div class="vg-cl"><b>23 Apr 2026</b><span>EU managed cyber ban</span></div>'},
 {t:'Market · sourced facts',s:'Simplified outline, not to scale · DataReportal, Rosstat',
  c:'<span class="vg-ck">Late 2025 · sourced</span><div class="vg-cr"><b>136M</b><span>internet users</span></div><div class="vg-cr"><b>94.4%</b><span>penetration</span></div><div class="vg-cr"><b>144M</b><span>population</span></div><div class="vg-cr"><b>~1%</b><span>GDP growth, 2025</span></div>'},
 {t:'Laws · personal data stays in Russia',s:'Mumbai cannot be the primary store of Russian citizens\' data',
  c:'<span class="vg-ck">Russian law · in force</span><div class="vg-cl"><b>1 Mar 2023</b><span>Cross-border notice</span></div><div class="vg-cl"><b>30 May 2025</b><span>Turnover-based leak fines</span></div><div class="vg-cl"><b>1 Jul 2025</b><span>23-FZ localisation</span></div><div class="vg-cl"><b>1 Sep 2025</b><span>CII registry software</span></div>'},
 {t:'Corridor · India–Russia trade',s:'Links show the trade corridor, not data transfers · MEA',
  c:'<span class="vg-ck">US$ · MEA, Jun 2026</span><div class="vg-cr"><b>68.7B</b><span>trade, FY2024–25</span></div><div class="vg-cr"><b>59.9B</b><span>trade, FY2025–26</span></div><div class="vg-cr"><b>55.4B</b><span>Indian imports</span></div><div class="vg-cr"><b>4.9B</b><span>Indian exports</span></div>'},
 {t:'Roadmap · conditional',s:'No Russia-facing sales before written clearance',
  c:'<span class="vg-ck">Illustrative · subject to review</span><div class="vg-cp"><span>0–6 m · Clear</span><i><u style="--w:100%"></u></i></div><div class="vg-cp"><span>6–12 m · India-side</span><i><u style="--w:66%"></u></i></div><div class="vg-cp"><span>12–18 m · Review</span><i><u style="--w:33%"></u></i></div><div class="vg-cr g"><b id="vgHeroRev">US$89k</b><span>revenue goal</span></div>'}];
var cv=$('#vgMap'),stage=$('#vgStage'),card=$('#vgCard'),dots=$$('#vgDots [data-k]'),pz=$('#vgPz');
if(cv&&cv.getContext){
  var NARROW=false,ctx=cv.getContext('2d'),W=0,H=0,DPR=1,proj=null,pts=[],segL=[],totL=0,cityP=[],mum=null;
  var k=0,visible=true,paused=false,hover=false,raf=0,DUR=5600,last=performance.now(),sceneT=0,drawn=REDUCE?1:0;
  var LON0=26,LON1=181,LAT0=41,LAT1=78.5;
  function size(){var r=cv.parentNode.getBoundingClientRect();DPR=Math.min(2,window.devicePixelRatio||1);W=Math.max(280,r.width);H=Math.max(240,cv.getBoundingClientRect().height||r.height);
    cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);ctx.setTransform(DPR,0,0,DPR,0,0);
    var narrow=W<520,mx0=narrow?W*0.05:W*0.18,mx1=W*0.97,my0=H*0.06,my1=narrow?H*0.66:H*0.74,cf=Math.cos(60*Math.PI/180);
    var s=Math.min((mx1-mx0)/((LON1-LON0)*cf),(my1-my0)/(LAT1-LAT0)),ox=mx0+((mx1-mx0)-(LON1-LON0)*cf*s)/2,oy=my0+((my1-my0)-(LAT1-LAT0)*s)/2;
    proj=function(lo,la){return [ox+(lo-LON0)*cf*s,oy+(LAT1-la)*s];};
    pts=PL.map(function(p){return proj(p[0],p[1]);});segL=[];totL=0;for(var i=1;i<pts.length;i++){var l=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);segL.push(l);totL+=l;}
    cityP=CITY.map(function(c){var q=proj(c[1],c[2]);return {n:c[0],x:q[0],y:q[1],a:c[3],m:!!c[4],hl:!!c[5],note:c[6]};});NARROW=narrow;
    mum={x:narrow?W*0.10:W*0.10,y:H*0.86};}
  function curve(a,b){var mx=(a.x+b.x)/2,my=Math.min(a.y,b.y)-H*0.10;return [mx,my];}
  function qpt(a,c,b,t){var u=1-t;return [u*u*a.x+2*u*t*c[0]+t*t*b.x,u*u*a.y+2*u*t*c[1]+t*t*b.y];}
  function lockAt(x,y){ctx.fillStyle='#0B132B';ctx.strokeStyle='rgba(255,138,0,0.9)';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(x,y,9,0,6.283);ctx.fill();ctx.stroke();
    ctx.fillStyle='#FF8A00';ctx.fillRect(x-3.5,y-1,7,5.5);ctx.strokeStyle='#FF8A00';ctx.lineWidth=1.3;ctx.beginPath();ctx.arc(x,y-1.5,2.6,Math.PI,0);ctx.stroke();}
  function draw(now){var dt=now-last;last=now;
    if(!paused&&!hover&&!REDUCE){sceneT+=dt;if(sceneT>DUR){sceneT=0;go((k+1)%SC.length);}}
    if(drawn<1)drawn=Math.min(1,drawn+dt/1700);
    var T=REDUCE?0:now/1000,e=1-Math.pow(1-drawn,3),gate=(k===0||k===2);
    ctx.clearRect(0,0,W,H);
    // graticule
    ctx.strokeStyle='rgba(255,255,255,0.06)';ctx.lineWidth=1;ctx.beginPath();
    for(var lo=30;lo<=180;lo+=15){var a=proj(lo,LAT0),b=proj(lo,LAT1);ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);}
    for(var la=45;la<=75;la+=10){var c=proj(LON0,la),dd=proj(LON1,la);ctx.moveTo(c[0],c[1]);ctx.lineTo(dd[0],dd[1]);}ctx.stroke();
    // outline: progressive stroke, then fill
    var lim=totL*e,acc=0;ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);
    for(var i=1;i<pts.length;i++){var L=segL[i-1];if(acc+L<=lim){ctx.lineTo(pts[i][0],pts[i][1]);acc+=L;}else{var f=(lim-acc)/L;ctx.lineTo(pts[i-1][0]+(pts[i][0]-pts[i-1][0])*f,pts[i-1][1]+(pts[i][1]-pts[i-1][1])*f);break;}}
    if(e>=1){ctx.closePath();ctx.fillStyle=k===2?'rgba(0,102,255,0.26)':'rgba(0,102,255,0.15)';ctx.fill();}
    ctx.strokeStyle='#0066FF';ctx.lineWidth=1.8;ctx.lineJoin='round';ctx.stroke();
    if(k===2&&e>=1){ctx.save();ctx.setLineDash([4,6]);ctx.lineDashOffset=-T*14;ctx.strokeStyle='rgba(255,138,0,0.75)';ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(var j=1;j<pts.length;j++)ctx.lineTo(pts[j][0],pts[j][1]);ctx.closePath();ctx.stroke();ctx.restore();}
    // Mumbai node
    var al=Math.min(1,Math.max(0,(drawn-0.35)/0.5));ctx.globalAlpha=al;
    ctx.fillStyle='rgba(255,138,0,0.14)';ctx.beginPath();ctx.arc(mum.x,mum.y,15+(REDUCE?0:Math.sin(T*2)*2),0,6.283);ctx.fill();
    ctx.fillStyle='#FF8A00';ctx.beginPath();ctx.arc(mum.x,mum.y,6,0,6.283);ctx.fill();
    ctx.textAlign='left';ctx.font='600 11px "IBM Plex Mono",monospace';ctx.fillStyle='#ffffff';ctx.fillText('MUMBAI',mum.x+16,mum.y-2);
    ctx.font='400 10px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(182,194,218,0.9)';ctx.fillText(k===2?'Indian data only':'Tier IV · NOC/SOC',mum.x+16,mum.y+12);
    // corridor links (trade, not data)
    cityP.forEach(function(cp,ci){if(NARROW&&cp.m)return;var cc=curve(mum,cp);ctx.save();
      if(gate){ctx.setLineDash([3,7]);ctx.strokeStyle='rgba(255,255,255,0.22)';}else{ctx.setLineDash([2,5]);ctx.strokeStyle=k===3&&cp.hl?'rgba(255,138,0,0.7)':'rgba(0,102,255,0.55)';}
      ctx.lineWidth=1.2;ctx.beginPath();ctx.moveTo(mum.x,mum.y);ctx.quadraticCurveTo(cc[0],cc[1],cp.x,cp.y);ctx.stroke();ctx.restore();
      if(!REDUCE&&!gate&&(k!==3||cp.hl)){var tt=((T*0.28+ci*0.29)%1),p=qpt(mum,cc,cp,tt);ctx.fillStyle=k===3?'#FF8A00':'#ffffff';ctx.beginPath();ctx.arc(p[0],p[1],2.4,0,6.283);ctx.fill();}
      if(gate&&e>=1&&(ci===0||ci===5||(!NARROW&&ci===3))){var p2=qpt(mum,cc,cp,0.42);lockAt(p2[0],p2[1]);}});
    // city pins
    cityP.forEach(function(cp,ci){var ph=REDUCE?0.5:((T*0.8+ci*0.33)%1);
      ctx.strokeStyle='rgba(255,255,255,'+(0.5*(1-ph)).toFixed(3)+')';ctx.lineWidth=1.3;ctx.beginPath();ctx.arc(cp.x,cp.y,4+ph*12,0,6.283);ctx.stroke();
      var hot=(k===4&&ci===0)||(k===3&&cp.hl);
      ctx.fillStyle=hot?'#FF8A00':'#ffffff';ctx.beginPath();ctx.arc(cp.x,cp.y,hot?5.5:4,0,6.283);ctx.fill();
      if((NARROW&&cp.m)||cp.a==='n')return;
      ctx.font='600 11px "Sora",sans-serif';ctx.fillStyle='#ffffff';
      var lx,ly;if(cp.a==='l'){ctx.textAlign='right';lx=cp.x-9;ly=cp.y+4;}else if(cp.a==='r'){ctx.textAlign='left';lx=cp.x+9;ly=cp.y+4;}else if(cp.a==='t'){ctx.textAlign='center';lx=cp.x;ly=cp.y-10;}else{ctx.textAlign='center';lx=cp.x;ly=cp.y+19;}
      ctx.fillText(cp.n,lx,ly);
      if(k===3&&cp.hl&&cp.note&&!NARROW){ctx.font='400 9.5px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.fillText(cp.note,lx,ly+13);}
      if(k===4&&ci===0&&!NARROW){ctx.font='400 9.5px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.fillText('review gate',lx,ly+13);}});
    ctx.globalAlpha=1;
    if(gate&&e>=1){ctx.font='600 10px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.textAlign='center';ctx.textAlign='right';
      ctx.fillText(k===0?'SCREEN BEFORE ANY ENGAGEMENT':'PERSONAL DATA STAYS IN RUSSIA',W-14,H-14);}
    if(visible&&!REDUCE)raf=requestAnimationFrame(draw);else raf=0;}
  function render(){var s=SC[k];$('#vgTitle').textContent=s.t;$('#vgSub').textContent=s.s;$('#vgCapN').textContent='0'+(k+1);
    card.classList.remove('in');void card.offsetWidth;card.innerHTML=s.c;card.classList.add('in');
    var hr=$('#vgHeroRev'),gr=$('#vgGoalRev');if(hr&&gr)hr.textContent=gr.textContent;
    dots.forEach(function(b,i){b.classList.toggle('on',i===k);b.setAttribute('aria-selected',i===k);});}
  function go(n){k=n;sceneT=0;render();if(REDUCE||!raf)draw(performance.now());}
  function kick(){if(!raf&&visible&&!REDUCE){last=performance.now();raf=requestAnimationFrame(draw);}}
  size();render();
  if(REDUCE){drawn=1;draw(performance.now());}else kick();
  dots.forEach(function(b){b.addEventListener('click',function(){go(+b.getAttribute('data-k'));});});
  if(pz)pz.addEventListener('click',function(){paused=!paused;pz.classList.toggle('paused',paused);pz.setAttribute('aria-label',paused?'Play scenes':'Pause scenes');});
  stage.addEventListener('mouseenter',function(){hover=true;});stage.addEventListener('mouseleave',function(){hover=false;});
  var sx0=null;stage.addEventListener('touchstart',function(e){sx0=e.touches[0].clientX;},{passive:true});
  stage.addEventListener('touchend',function(e){if(sx0==null)return;var dx=e.changedTouches[0].clientX-sx0;if(Math.abs(dx)>40)go((k+(dx<0?1:SC.length-1))%SC.length);sx0=null;},{passive:true});
  var rt;window.addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){size();if(!raf)draw(performance.now());},120);});
  if(XH.whenVisible)XH.whenVisible(stage,function(v){visible=v;if(v)kick();});
  if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){if(!raf)draw(performance.now());});
  window.__vgHero={go:function(n){go(n);},pause:function(p){paused=!!p;},seek:function(ms){drawn=1;sceneT=0;if(!raf)draw(performance.now());}};
}
})();
