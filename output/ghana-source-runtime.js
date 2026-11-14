
(function(){
'use strict';
var d=document,XH=window.XH||{};
var $=function(s,c){return (c||d).querySelector(s);},$$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));};
var REDUCE=!!XH.reduce||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
var ICONS={building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg>',route:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H16a3 3 0 000-6H8a3 3 0 010-6h7.5"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 006 0zM18 7l-3 7a3 3 0 006 0z"/></svg>',doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>',trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/></svg>',rupee:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',robot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>','shield-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13-8z"/></svg>',cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',disk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',certificate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="13" rx="2"/><circle cx="12" cy="17" r="3"/><path d="M10.5 19.5L10 23l2-1 2 1-.5-3.5M7 7h10M7 10h6"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',bug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg>',mobile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg>',chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>',server:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>','id-card':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h4M5 17a3.5 3.5 0 016 0"/></svg>'};

/* build3 has no robots support; strategy briefings must stay out of search indexes */
(function(){try{if(!d.querySelector('meta[name="robots"]')){var m=d.createElement('meta');m.name='robots';m.content='noindex, nofollow';d.head.appendChild(m);}}catch(e){}})();

/* ---------- formatting ---------- */
var FX_DASH=95.17; // ₹ per US$, close 26 Oct 2026 (Pound Sterling Live) — dashboard labels; GH¢11.65 per US$ BoG interbank 3 Nov 2026
function inr(usd,fx){var v=usd*(fx||FX_DASH);
  if(v>=1e12)return '₹'+(v/1e12).toFixed(2)+' lakh crore';
  if(v>=1e7){var c=v/1e7;return '₹'+(c>=100?Math.round(c).toLocaleString('en-IN'):c.toFixed(1))+' crore';}
  return '₹'+(v/1e5).toFixed(1)+' lakh';}
function usdS(v){if(v>=1e9)return 'US$'+(v/1e9).toFixed(2).replace(/\.?0+$/,'')+'B';if(v>=1e6)return 'US$'+(v/1e6).toFixed(2).replace(/\.?0+$/,'')+'M';if(v>=1e3)return 'US$'+Math.round(v/1e3)+'k';return 'US$'+Math.round(v);}
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

/* =====================================================================
   DATA — services (slug → [name, pillar, note]); pillars C S D T A L
   ===================================================================== */
var P={C:['Cloud','cloud'],S:['Cyber Security','shield'],D:['Data Protection','disk'],T:['Digital Trust','certificate'],A:['AI','brain'],L:['Training','book']};
var PK=['C','S','D','T','A','L'];
var SV={
 'bfsi-cloud':['BFSI Cloud','C','Regulated cloud with audit evidence for BoG reviews'],
 'insurance-cloud':['Insurance Cloud','C','Policy, claims and core-system hosting'],
 'vortex-soc':['Vortex SOC (SIEM · SOAR · UEBA)','S','24×7 detection and incident reporting'],
 'waap-as-a-service':['WAAP as a Service','S','WAF, API and DDoS protection'],
 'privileged-access-management':['Privileged Access Management','S','Vaulted admin access, session recording'],
 'cloud-hsm':['Cloud HSM','T','Keys for payments, signing and encryption'],
 'mobile-app-security':['Mobile App Security','S','Protect banking and wallet apps'],
 'xcellhost-pci-dss':['PCI DSS Compliance','S','Card-data scope and evidence'],
 'resilience-operations':['Managed Resilience Operations','D','Backup, DR and measured drills'],
 'red-team-assessment':['Red Team Assessment','S','Adversary simulation and resilience testing'],
 'ai-training-insurance-professionals':['AI Training for Insurance Professionals','L','Underwriting, claims and service teams'],
 'media-entertainment-cloud':['Media & Entertainment Cloud','C','Streaming, content and ad platforms'],
 'cdn-cloud':['CDN Cloud','C','Fast delivery for peak traffic'],
 'kubernetes-api':['Managed Kubernetes','C','Containers for digital services'],
 'threat-intelligence':['Threat Intelligence','S','Early warning on fraud and attack campaigns'],
 'xcellhost-iot-pki':['IoT PKI','T','Machine identity for devices and meters'],
 'digital-risk-monitoring':['Digital Risk Monitoring','S','Fake apps, domains and data leaks'],
 'xcellhost-dmarc':['DMARC','S','Stop brand and invoice spoofing'],
 'gpu-servers':['GPU Servers','A','AI training, render and analytics'],
 'xcellhost-dedicated-inference':['Dedicated Inference','A','Private model serving'],
 'ot-assessment':['OT Security Assessment','S','IEC 62443-aligned plant review'],
 'acronis-ot':['Acronis OT','D','Backup and recovery for OT systems'],
 'iot-cloud':['IoT Cloud','C','Sensor and SCADA telemetry'],
 'edge-cloud':['Edge Cloud','C','Compute at field, depot and plant'],
 'private-cloud':['Private Cloud','C','Dedicated, segregated clusters'],
 'dfir':['DFIR','S','Incident response and forensics'],
 'managed-sd-wan':['Managed SD-WAN','C','Branch, depot and site links'],
 'cyber-range-as-a-service':['Cyber Range as a Service','L','Live-fire SOC and IR exercises'],
 'government-cloud':['Government Cloud','C','Segregated cloud, hosted in Ghana'],
 'cyber-security-audit':['Cyber Security Audit','S','CII and audit preparation'],
 'xcellhost-managed-grc':['Managed GRC','S','Risk register, policies and evidence'],
 'xcellhost-managed-pki':['Managed PKI','T','Private CA operations'],
 'hsm-hardware-security-module':['HSM (on-premises)','T','Keys kept in Ghana'],
 'crypto-agility-and-post-quantum-cryptography-readiness':['PQC Readiness','T','Crypto-agility and post-quantum roadmap'],
 'ai-training-live-online':['AI Training Live Online','L','AI literacy for staff'],
 'healthcare-cloud':['Healthcare Cloud','C','HIS, PACS and EMR hosting'],
 'pharmaceutical-cloud':['Pharmaceutical Cloud','C','GxP-ready hosting for pharma'],
 'acronis-cyber-platform':['Acronis Cyber Platform','D','Backup, DR and anti-ransomware'],
 'scrutiny-dlp':['Scrutiny DLP','D','Stop personal-data leakage'],
 'multi-factor-authentication':['Multi-Factor Authentication','S','Strong sign-in for staff and partners'],
 'email-encryption':['Email Encryption','D','Protect records in transit'],
 'xcellhost-vdpo':['vDPO as a Service','D','Privacy operations, adapted to Act 843'],
 'ai-training-medical-doctors':['AI Training for Doctors','L','Safe clinical use of AI'],
 'enterprise-rag-as-a-service':['Enterprise RAG as a Service','A','Grounded AI assistants on your documents'],
 'higher-education-cloud':['Higher Education Cloud','C','LMS, portals and research hosting'],
 'managed-microsoft-365':['Managed Microsoft 365','C','Licences, security and admin'],
 'cloud-desktop-enterprise-vdi':['Cloud Desktop (VDI)','C','Secure desktops for labs and staff'],
 'email-security-smb':['Email Security','S','Phishing and BEC protection'],
 'xcellhost-acronis-direct-cloud-backup':['Acronis Direct Cloud Backup','D','Endpoint and server backup'],
 'ai-training-educators':['AI Training for Educators','L','AI in teaching and assessment'],
 'ai-training-integrated-program':['Integrated AI Training Program','L','12-week blended GenAI course'],
 'security-awareness-lms':['Security Awareness LMS','L','Phishing and Act 843 awareness training'],
 'manufacturing-cloud':['Manufacturing Cloud','C','ERP, MES and plant apps'],
 'sap-hosting':['SAP Hosting','C','SAP on managed cloud'],
 'scrutiny-edr':['Scrutiny EDR','S','Endpoint detection and response'],
 'industry-5-smart-manufacturing':['Industry 5.0 Smart Manufacturing','A','AI vision and predictive maintenance'],
 'third-party-risk-management':['Third-Party Risk Management','S','Supplier assurance for audits'],
 'retail-cloud':['Retail Cloud','C','Commerce, POS and loyalty platforms'],
 'logistics-cloud':['Logistics Cloud','C','TMS, WMS and last-mile apps'],
 'xcellhost-47-day-ssl':['47-Day SSL Automation','T','Ready for 200, 100 and 47-day certificates'],
 'ai-as-a-service':['AI as a Service','A','Forecasting, routing and document AI'],
 'smb-cloud':['SMB Cloud','C','Simple servers for small firms'],
 'cloud-disaster-recovery-smb':['Cloud DR for SMB','D','Replicate servers, fail over in minutes'],
 'smb-cloud-desktop':['SMB Cloud Desktop','C','Desktops for small teams'],
 'xcellhost-gcc-cloud':['GCC Cloud','C','Cloud and security for capability centres'],
 'managed-azure':['Managed Azure','C','Azure landing zone and 24×7 operations'],
 'xcellhost-iso-27001':['ISO 27001 Consulting','S','ISMS for group and client audits'],
 'xcellhost-vciso':['vCISO as a Service','S','Security leadership and board reporting'],
 'entra-id-backup':['Entra ID Backup','D','Recover identities and policies']
};
function fn(n){return '<a class="fn" href="#s'+n+'">'+n+'</a>';}
/* verticals */
var V=[
 {k:'bfsi',n:'BFSI & fintech',full:'Banks, savings and loans, fintechs, insurers',ic:'rupee',wave:1,
  why:[['building','Banking assets reached <b>GH¢500.2bn</b> in Aug 2026, up 20.47% on a year earlier, across <b>23</b> banks.'+fn(14)],
       ['zap','Mobile money reached <b>GH¢4.54 trillion</b> in 2025, up 50.8%, with 491,057 active agents.'+fn(9)],
       ['alert','Financial-sector fraud cases rose to <b>24,778</b> in 2025, with about GH¢101M at risk; banks and SDIs recovered 5%.'+fn(15)]],
  regs:['BoG CISD 2026','Act 843 + DPC renewals','CSA licensing (Act 1038)','CII Directive 2021'],
  buy:['CIO / CTO','CISO','Chief risk officer','Board cyber-risk member','Procurement'],
  svc:['bfsi-cloud','vortex-soc','waap-as-a-service','privileged-access-management','cloud-hsm','mobile-app-security','xcellhost-pci-dss','resilience-operations','red-team-assessment','ai-training-insurance-professionals'],
  trg:['Moving core systems and sensitive data into Ghana under CISD 2026'+fn(32),'A board seat that needs verifiable cyber-risk expertise'+fn(31),'A CII incident that must be reported within 24 hours'+fn(25),'A two-year DPC registration falling due for renewal'+fn(27),'TLS certificates capped at 100 days from 15 Mar 2027'+fn(47)],
  calc:[30,8,40000]},
 {k:'ind',n:'Indian & global subsidiaries',full:'Indian-owned and global firms with Ghanaian operations',ic:'globe',wave:1,
  why:[['trend','India–Ghana trade was about <b>US$3B</b> in 2024, per India\'s High Commissioner.'+fn(16)],
       ['globe','Indian firms have invested nearly <b>US$2B</b> of FDI in over 900 projects, plus about US$1B of concessional credit.'+fn(16)],
       ['building','The GIPA Act 2026 removed the general minimum foreign capital for non-trading companies.'+fn(43)]],
  regs:['Act 843 registration','CSA licensing for security work','VAT Act 2025 + RTVAT','Group ISO / SOC 2 audits'],
  buy:['Country MD','Group CIO (often in India)','Finance head','Group CISO'],
  svc:['xcellhost-gcc-cloud','managed-azure','managed-microsoft-365','sap-hosting','vortex-soc','xcellhost-iso-27001','xcellhost-vciso','entra-id-backup','enterprise-rag-as-a-service','ai-training-integrated-program'],
  trg:['A group decision to consolidate IT with one India-linked provider','Payment providers withholding VAT on cross-border digital services from 15 Oct 2026'+fn(40),'A review of the 20% withholding on intra-group service fees'+fn(41),'Windows Server 2016 extended support ends 12 Jan 2027'+fn(46)],
  calc:[35,12,30000]},
 {k:'edu',n:'Education & skills',full:'Universities, technical universities, private schools, training providers',ic:'book',wave:1,
  why:[['building','GTEC lists <b>306</b> tertiary and professional institutions, and more than 100,000 students graduate each year.'+fn(51)],
       ['users','The One Million Coders Programme had about <b>140,000</b> registrations and 10,000+ completions by Sep 2026.'+fn(18)],
       ['shield','The CSA trained 427 university ICT leaders and assessed CII institutions in education in H1 2026.'+fn(19)]],
  regs:['Act 843','CII Directive (education)','National AI Strategy','CSA licensing for cyber training'],
  buy:['Vice-chancellor / registrar','ICT director','Finance officer','Programme heads'],
  svc:['higher-education-cloud','managed-microsoft-365','cloud-desktop-enterprise-vdi','email-security-smb','multi-factor-authentication','xcellhost-acronis-direct-cloud-backup','ai-training-educators','ai-training-integrated-program','cyber-range-as-a-service','security-awareness-lms'],
  trg:['A new academic year or a new online programme','A CII vulnerability assessment by the CSA'+fn(19),'Ransomware or portal outages at admission time','AI in the education system under the National AI Strategy'+fn(17)],
  calc:[20,10,15000]},
 {k:'sme',n:'SMEs',full:'Small and mid-size businesses',ic:'building',wave:1,
  why:[['doc','All service providers must register for VAT regardless of turnover under the VAT Act 2025.'+fn(38)],
       ['alert','CERT-GH responded to <b>3,363</b> cyber security incidents in the first half of 2026.'+fn(19)],
       ['trend','The 24-Hour Economy programme had about <b>US$5.5B</b> of signed investment agreements by May 2026.'+fn(50)]],
  regs:['Act 843','VAT Act 2025','CSA licensing (buy from licensed providers)'],
  buy:['Owner / director','Finance & admin','Outsourced IT provider'],
  svc:['smb-cloud','managed-microsoft-365','email-security-smb','xcellhost-dmarc','multi-factor-authentication','scrutiny-edr','cloud-disaster-recovery-smb','xcellhost-acronis-direct-cloud-backup','smb-cloud-desktop','ai-training-live-online'],
  trg:['Business email compromise or invoice fraud','Microsoft 365 renewals','A bank or large customer asking for security evidence','VAT registration and the new 20% computation from 1 Jan 2026'+fn(38)],
  calc:[100,8,4000]},
 {k:'tel',n:'Telecom & digital media',full:'Mobile operators, ISPs, broadcasters, streaming',ic:'video',wave:2,
  why:[['globe','Data subscriptions reached <b>30.7 million</b> in Jun 2026, a 90.17% penetration rate; MTN held 80.1%.'+fn(12)],
       ['chart','The telecom sector paid about <b>GH¢15bn</b> in taxes and levies in 2025 and invested over GH¢5bn in networks.'+fn(13)],
       ['server','MTN plans US$1.1B of investment in Ghana over three years and is seeking partners for large data centres.'+fn(54)]],
  regs:['CII Directive (ICT)','Act 843','CSA licensing','NITA bill (draft)'],
  buy:['CTO','CISO','Head of digital','DPO','Procurement'],
  svc:['media-entertainment-cloud','cdn-cloud','kubernetes-api','vortex-soc','threat-intelligence','xcellhost-iot-pki','digital-risk-monitoring','xcellhost-dmarc','gpu-servers','xcellhost-dedicated-inference'],
  trg:['A CII audit or 24-hour incident report'+fn(25),'Peak events and DDoS on streaming','GenAI features for customer care','TLS validity cut to 200 days (2026) and 100 days (2027)'+fn(47)],
  calc:[8,10,60000]},
 {k:'mine',n:'Mining, oil & energy',full:'Gold mining, upstream oil and gas, power and utilities',ic:'zap',wave:2,
  why:[['trophy','Gold output hit a record <b>6 million oz</b> in 2025, about 3.1M oz of it from small-scale mining.'+fn(48)],
       ['chart','Crude oil output fell to <b>37.3M barrels</b> in 2025, from a 71.44M peak in 2019.'+fn(49)],
       ['shield','Utilities are among the CII institutions the CSA assessed for vulnerabilities in H1 2026.'+fn(19)]],
  regs:['CII Directive (utilities)','Act 843','CSA licensing'],
  buy:['IT / OT heads','HSE and operations','Group CISO','Procurement'],
  svc:['ot-assessment','acronis-ot','iot-cloud','edge-cloud','private-cloud','vortex-soc','dfir','threat-intelligence','managed-sd-wan','cyber-range-as-a-service'],
  trg:['A CSA vulnerability assessment of a CII site'+fn(19),'An OT incident or near miss','New mines, fields or power projects','Windows Server 2016 end of support (12 Jan 2027)'+fn(46)],
  calc:[15,7,50000]},
 {k:'hc',n:'Healthcare & pharma',full:'Hospitals, diagnostics, insurers, pharma makers',ic:'heart',wave:2,
  why:[['alert','In Oct 2025 the health ministry replaced LHIMS with GHIMS, citing outages and cloud hosting outside Ghana.'+fn(53)],
       ['shield','Health is among the CII sectors the CSA assessed for vulnerabilities in H1 2026.'+fn(19)],
       ['users','About <b>19.4M</b> citizens are enrolled for the Ghana Card, over 92% of adults, with 262+ institutions integrated.'+fn(52)]],
  regs:['Act 843 (health data)','CII Directive (health)','Government data localisation aim'],
  buy:['Medical director','CIO / IT head','Medical records lead','DPO'],
  svc:['healthcare-cloud','pharmaceutical-cloud','acronis-cyber-platform','scrutiny-dlp','multi-factor-authentication','email-encryption','vortex-soc','xcellhost-vdpo','ai-training-medical-doctors','enterprise-rag-as-a-service'],
  trg:['A hospital system migration to GHIMS'+fn(53),'Ransomware on hospital or lab systems','A DPC inspection or spot check'+fn(28),'AI tools under the National AI Strategy'+fn(17)],
  calc:[12,8,20000]},
 {k:'mfg',n:'Manufacturing & agro-processing',full:'Food, beverages, cocoa processing, cement, consumer goods',ic:'cpu',wave:2,
  why:[['trend','The 24-Hour Economy programme signed about <b>US$5.5B</b> of agreements; four projects alone target 160,000+ jobs.'+fn(50)],
       ['chart','The economy grew <b>6.0%</b> in 2025; services were 45.9% of output.'+fn(11)],
       ['doc','A Ghanaian company pays 25% CIT plus a 2.5% Growth and Sustainability Levy in most sectors.'+fn(42)]],
  regs:['Act 843 (HR data)','VAT Act 2025','GIPA Act 2026'],
  buy:['Plant IT / OT head','Group CIO','Plant manager','Finance','Procurement'],
  svc:['manufacturing-cloud','sap-hosting','ot-assessment','acronis-ot','managed-sd-wan','scrutiny-edr','industry-5-smart-manufacturing','third-party-risk-management','acronis-cyber-platform','ai-training-integrated-program'],
  trg:['A new plant or shift pattern under the 24-Hour Economy'+fn(50),'Ransomware on plant IT or OT','A group audit or supplier questionnaire','Windows Server 2016 end of support (12 Jan 2027)'+fn(46)],
  calc:[20,10,25000]},
 {k:'ecom',n:'E-commerce, retail & logistics',full:'Marketplaces, retail chains, delivery and port logistics',ic:'cart',wave:2,
  why:[['doc','Since 15 Oct 2026, payment providers withhold VAT on cross-border digital services paid with Ghanaian instruments.'+fn(40)],
       ['globe','Accra is connected to six subsea cables; 2Africa landed near Accra in 2025.'+fn(6)],
       ['zap','Mobile money values grew 50.8% in 2025 to GH¢4.54 trillion.'+fn(9)]],
  regs:['VAT Act 2025 + RTVAT','Act 843','Electronic Transactions Act'],
  buy:['CTO','Head of e-commerce','CISO','DPO','Operations'],
  svc:['retail-cloud','logistics-cloud','cdn-cloud','waap-as-a-service','xcellhost-pci-dss','xcellhost-dmarc','digital-risk-monitoring','acronis-cyber-platform','xcellhost-47-day-ssl','ai-as-a-service'],
  trg:['Peak-season sales such as Christmas','Bot, credential-stuffing or DDoS attacks','Checkout changes for real-time VAT'+fn(40),'TLS validity cut to 100 days (2027)'+fn(47)],
  calc:[15,10,20000]},
 {k:'gov',n:'Government & public sector',full:'Ministries, agencies, assemblies, state enterprises',ic:'flag',wave:3,
  why:[['server','The government aims to move state data held abroad onto servers in Ghana.'+fn(35)],
       ['shield-check','AI systems bought by public bodies will get a central technical review, led on scoping by NITA.'+fn(37)],
       ['id-card','About 19.4M citizens are enrolled for the Ghana Card, and 262+ institutions are integrated with it.'+fn(52)]],
  regs:['Data localisation aim','DC & cloud framework (draft)','NITA bill (draft)','CII Directive','Act 843'],
  buy:['MDA ICT directors','NITA','Metropolitan assemblies','Ghanaian prime contractors'],
  svc:['government-cloud','resilience-operations','vortex-soc','cyber-security-audit','xcellhost-managed-grc','xcellhost-managed-pki','hsm-hardware-security-module','crypto-agility-and-post-quantum-cryptography-readiness','cyber-range-as-a-service','ai-training-live-online'],
  trg:['Final DC and cloud regulatory framework'+fn(34),'A public AI procurement under the new review'+fn(37),'A CSA vulnerability assessment of a CII body'+fn(19),'A major incident or audit finding'],
  calc:[6,5,60000]}
];

/* ---------- verticals: selector + panels ---------- */
var vsel=$('#vgVsel'),vpan=$('#vgVpanels');
if(vsel&&vpan){
  vsel.innerHTML=V.map(function(v,i){return '<button type="button" role="tab" aria-selected="'+(i?'false':'true')+'" class="'+(i?'':'on')+'" data-v="'+v.k+'"><i>'+ICON(v.ic)+'</i><span>'+v.n+'</span></button>';}).join('');
  vpan.innerHTML=V.map(function(v,i){
    var pc={};v.svc.forEach(function(s){var p=SV[s][1];pc[p]=(pc[p]||0)+1;});
    return '<article class="vg-vp'+(i?'':' on')+'" data-v="'+v.k+'" role="tabpanel" aria-label="'+v.n+'">'+
      '<header class="vg-vph"><span class="ico">'+ICON(v.ic)+'</span><div><h3>'+v.n+'</h3><p>'+v.full+'</p></div><span class="vg-wave w'+v.wave+'">Wave '+v.wave+(v.wave===1?' · first 6 months':v.wave===2?' · months 6–12':' · months 12–18')+'</span></header>'+
      '<div class="vg-vpg"><div class="vg-vcol">'+
        '<h4>'+ICON('search')+'Why it matters</h4><ul class="ilist">'+v.why.map(function(w){return '<li><i>'+ICON(w[0])+'</i><span>'+w[1]+'</span></li>';}).join('')+'</ul>'+
        '<h4>'+ICON('scale')+'Regulatory drivers</h4><div class="chips vg-rch">'+v.regs.map(function(r){return '<span class="chip"><i>'+ICON('doc')+'</i>'+r+'</span>';}).join('')+'</div>'+
        '<h4>'+ICON('users')+'Buying centre</h4><div class="chips vg-bch">'+v.buy.map(function(r){return '<span class="chip"><i>'+ICON('user')+'</i>'+r+'</span>';}).join('')+'</div>'+
        '<h4>'+ICON('bell')+'Key buying triggers</h4><ul class="ilist vg-trl">'+v.trg.map(function(t){return '<li><i>'+ICON('zap')+'</i><span>'+t+'</span></li>';}).join('')+'</ul>'+
      '</div><div class="vg-vcol">'+
        '<h4>'+ICON('trophy')+'Recommended top 10 services</h4><ol class="vg-svc">'+v.svc.map(function(s,j){var x=SV[s];return '<li><a href="'+s+'.html"><span class="n">'+(j<9?'0':'')+(j+1)+'</span><span class="t">'+x[0]+'<small>'+x[2]+'</small></span><em class="pt p'+x[1]+'">'+P[x[1]][0]+'</em></a></li>';}).join('')+'</ol>'+
        '<div class="vg-mix">'+PK.map(function(p){return '<span class="p'+p+'" style="flex:'+(pc[p]||0)+'" title="'+P[p][0]+': '+(pc[p]||0)+'"></span>';}).join('')+'</div><p class="vg-mixl">Pillar mix: '+PK.filter(function(p){return pc[p];}).map(function(p){return P[p][0]+' '+pc[p];}).join(' · ')+'</p>'+
      '</div></div></article>';}).join('');
  vsel.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;showV(b.getAttribute('data-v'),true);});
}
function showV(k,focus){$$('button',vsel).forEach(function(b){var on=b.getAttribute('data-v')===k;b.classList.toggle('on',on);b.setAttribute('aria-selected',on);});
  $$('.vg-vp',vpan).forEach(function(p){p.classList.toggle('on',p.getAttribute('data-v')===k);});
  if(focus){var b=$('button[data-v="'+k+'"]',vsel);if(b&&b.scrollIntoView)vsel.scrollTo({left:b.offsetLeft-20,behavior:'smooth'});}}
function ICON(n){return (ICONS[n]||ICONS.doc);}

/* ---------- trigger calendar ---------- */
var TODAY=new Date('2026-11-07');
var TR=[
 ['2012-10-01','law','Data Protection Act 2012 (Act 843) takes effect',[3],'Oct 2012'],
 ['2020-12-29','law','Cybersecurity Act 2020 (Act 1038) in force',[24]],
 ['2021-10-01','law','CSA directive for critical information infrastructure: 24-hour incident reporting',[25]],
 ['2023-03-01','law','CSA starts licensing cybersecurity service providers',[20]],
 ['2025-07-02','market','24-Hour Economy programme launched',[50],'Jul 2025'],
 ['2025-10-29','market','Health ministry replaces LHIMS with GHIMS',[53]],
 ['2025-11-14','law','Consultation closes on the draft Cybersecurity (Amendment) Bill 2025',[26]],
 ['2025-11-15','market','Digital Realty opens ACR2 near Accra (1.7 MW)',[6],'Nov 2025'],
 ['2026-01-01','law','VAT Act 2025 in effect; COVID levy repealed',[38]],
 ['2026-01-31','law','CSA strictly enforces licensing; unlicensed providers face sanctions',[22]],
 ['2026-03-15','tech','Maximum public TLS certificate validity falls to 200 days',[47]],
 ['2026-03-25','law','Bank of Ghana launches CISD 2026: sensitive data stays in Ghana',[31,32],'Mar 2026'],
 ['2026-04-24','law','National AI Strategy 2025–2035 launched',[17]],
 ['2026-07-15','law','GIPA Act 2026 assented: general minimum foreign capital removed',[43]],
 ['2026-08-18','market','CSA fines EY Ghana GH¢360,000 for unlicensed services',[23]],
 ['2026-10-02','law','Central review announced for AI systems bought by public bodies',[37]],
 ['2026-10-15','law','Real-time VAT collection on cross-border digital services',[40]],
 ['2027-01-12','tech','Windows Server 2016 extended support ends',[46]],
 ['2027-03-15','tech','Maximum public TLS certificate validity falls to 100 days',[47]],
 ['2029-03-15','tech','Maximum public TLS certificate validity falls to 47 days',[47]]
];
var MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var tline=$('#vgTline');
if(tline){var nowDone=false,h='';
  TR.forEach(function(t){var dt=new Date(t[0]),past=dt<=TODAY;
    if(!past&&!nowDone){nowDone=true;h+='<li class="vg-now" data-t="all"><span>Today · 7 Nov 2026</span></li>';}
    var lab=t[4]||((+t[0].slice(8))+' '+MON[+t[0].slice(5,7)-1]+' '+t[0].slice(0,4));
    h+='<li class="vg-ti '+(past?'past':'next')+' t-'+t[1]+'" data-t="'+t[1]+'"><time datetime="'+t[0]+'">'+lab+'</time><span class="vg-tt"><em>'+(t[1]==='law'?'Law & regulation':t[1]==='tech'?'Technology':'Market')+(past?' · in effect':' · upcoming')+'</em>'+t[2]+t[3].map(fn).join('')+'</span></li>';});
  tline.innerHTML=h;}
filterGroup('#vgTfil',function(f){$$('li',tline).forEach(function(li){var t=li.getAttribute('data-t');li.style.display=(f==='all'||t===f||t==='all')?'':'none';});});
filterGroup('#vgLawf',function(f){$$('#vgLtbl tbody tr').forEach(function(tr){tr.style.display=(f==='all'||tr.getAttribute('data-c')===f)?'':'none';});});
function filterGroup(sel,cb){var g=$(sel);if(!g)return;g.addEventListener('click',function(e){var b=e.target.closest('button[data-f]');if(!b)return;$$('button',g).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});cb(b.getAttribute('data-f'));});}

/* ---------- charts (inline SVG) ---------- */
var NS='http://www.w3.org/2000/svg';
function svg(w,h,inner){return '<svg viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="xMidYMid meet" xmlns="'+NS+'">'+inner+'</svg>';}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');}
(function(){
  var el=$('#vgChRange');if(el){var rows=[['ICT services',1500,1500,'US$1,500M+'],['Cyber security',43,96,'US$43M (2023) – 96M (2028)'],['DC revenue',12,12,'US$12M a year']];
    var W=520,H=170,x0=130,x1=500,mx=1600,sx=function(v){return x0+(x1-x0)*v/mx;},o='';
    for(var g=0;g<=4;g++){var gv=g*400,gx=sx(gv);o+='<line class="gl" x1="'+gx+'" y1="10" x2="'+gx+'" y2="'+(H-28)+'"/><text class="ax" x="'+gx+'" y="'+(H-10)+'" text-anchor="middle">'+gv.toLocaleString('en-US')+'</text>';}
    rows.forEach(function(r,i){var y=24+i*40,a=sx(r[1]),b=sx(r[2]),w=Math.max(8,b-a);
      o+='<text class="lb" x="'+(x0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o+='<rect class="trk" x="'+x0+'" y="'+(y-7)+'" width="'+(x1-x0)+'" height="14" rx="7"/>';
      o+='<rect class="br grow c'+i+'" x="'+(r[1]===r[2]?x0:a)+'" y="'+(y-7)+'" width="'+(r[1]===r[2]?Math.max(8,a-x0):w)+'" height="14" rx="7" style="transition-delay:'+(i*0.08)+'s"/>';
      var big=b>x1-60;o+='<text class="vl" x="'+(big?x1-2:Math.max(b,x0+8)+8)+'" y="'+(big?y+24:y+5)+'" text-anchor="'+(big?'end':'start')+'">'+r[3]+'</text>';});
    el.innerHTML=svg(W,H,o);}
  el=$('#vgChGmv');if(el){var g2=[['2022',1.07,''],['2023',1.912,''],['2024',3.01,''],['2025',4.54,'+50.8%']];
    var W2=520,H2=210,a0=80,a1=440,o2='';
    g2.forEach(function(r,i){var y=28+i*42,w=(a1-a0)*r[1]/4.54;
      o2+='<text class="lb" x="'+(a0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o2+='<rect class="br grow '+(i<3?'cb':'co')+'" x="'+a0+'" y="'+(y-11)+'" width="'+w+'" height="22" rx="5" style="transition-delay:'+(i*0.08)+'s"/>';
      var ins=a0+w+8>a1-60;o2+='<text class="vl" x="'+(ins?a0+w:a0+w+8)+'" y="'+(ins?y+28:y+5)+'"'+(ins?' text-anchor="end"':'')+'>GH¢'+r[1].toFixed(2)+'tn '+(r[2]?'<tspan class="mut">('+r[2]+')</tspan>':'')+'</text>';});
    o2+='<text class="ax" x="'+a0+'" y="'+(H2-6)+'">2025 ≈ US$390B at GH¢11.65 per US$ (Nov 2026 rate)</text>';
    el.innerHTML=svg(W2,H2,o2);}
  el=$('#vgChDc');if(el){var dc=[['2019 · live',[[2.3,'cb']],'2.3'],['2021 · live',[[2.9,'cb']],'2.9'],['2024E · live + build',[[4.8,'cb'],[7,'co']],'4.8 + 7'],['ADC Accra · planned',[[30,'cp']],'30']];
    var W3=520,H3=230,b0=170,b1=470,mx3=35,o3='';
    for(var g3=0;g3<=30;g3+=10){var gx3=b0+(b1-b0)*g3/mx3;o3+='<line class="gl" x1="'+gx3+'" y1="12" x2="'+gx3+'" y2="'+(H3-30)+'"/><text class="ax" x="'+gx3+'" y="'+(H3-12)+'" text-anchor="middle">'+g3+' MW</text>';}
    dc.forEach(function(r,i){var y=34+i*44,x=b0;o3+='<text class="lb" x="'+(b0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      r[1].forEach(function(s,j){var w=(b1-b0)*s[0]/mx3;o3+='<rect class="br grow '+s[1]+'" x="'+x+'" y="'+(y-10)+'" width="'+w+'" height="20" rx="4" style="transition-delay:'+(i*0.08+j*0.1)+'s"/>';x+=w;});
      o3+='<text class="vl" x="'+Math.min(x+8,b1+40)+'" y="'+(y+5)+'" text-anchor="'+(x>b1-20?'end':'start')+'"'+(x>b1-20?' dx="-10" dy="22"':'')+'>'+r[2]+' MW</text>';});
    el.innerHTML=svg(W3,H3,o3);}
  el=$('#vgChLine');if(el){var S=[['Cyber security',2023,43,2028,96,'lc'],['DC revenue',2024,12,2030,12*Math.pow(1.22,6),'lo']];
    var W4=520,H4=230,l0=46,l1=490,t0=16,t1=H4-34,my=110,px=function(yr){return l0+(l1-l0)*(yr-2023)/7;},py=function(v){return t1-(t1-t0)*v/my;},o4='';
    for(var gy=0;gy<=100;gy+=25){o4+='<line class="gl" x1="'+l0+'" y1="'+py(gy)+'" x2="'+l1+'" y2="'+py(gy)+'"/><text class="ax" x="'+(l0-6)+'" y="'+(py(gy)+4)+'" text-anchor="end">'+gy+'</text>';}
    [2023,2025,2027,2030].forEach(function(yr){o4+='<text class="ax" x="'+px(yr)+'" y="'+(H4-12)+'" text-anchor="middle">'+yr+'</text>';});
    S.forEach(function(s){var n=s[3]-s[1],gr=Math.pow(s[4]/s[2],1/n),pts=[];for(var i=0;i<=n;i++)pts.push(px(s[1]+i).toFixed(1)+','+py(s[2]*Math.pow(gr,i)).toFixed(1));
      o4+='<polyline class="ln '+s[5]+'" points="'+pts.join(' ')+'" pathLength="100"/>';
      o4+='<circle class="dt '+s[5]+'" cx="'+px(s[1])+'" cy="'+py(s[2])+'" r="4"/><circle class="dt '+s[5]+'" cx="'+px(s[3])+'" cy="'+py(s[4])+'" r="4"/>';
      o4+='<text class="vl" x="'+(px(s[3])-8)+'" y="'+(py(s[4])-10)+'" text-anchor="end">'+s[0]+' '+Math.round(s[4])+' ('+s[3]+')</text>';});
    o4+='<text class="vl mut" x="'+(px(2023)+4)+'" y="'+(py(32))+'">Cyber 43 (2023) · DC revenue 12 (2024)</text>';
    el.innerHTML=svg(W4,H4,o4);}
})();

/* ---------- revenue model ---------- */
var TAM=1.5e9; // Ghana ICT services market, US$1.5bn+ (Xalam Analytics, Jul 2025) — upper bound
var mt=$('#vgMtbl tbody'),scn=1;
function mrow(v){return '<tr data-v="'+v.k+'"><td>'+v.n+'</td>'+
  '<td><input type="number" class="vg-mi" data-f="0" min="0" max="5000" step="1" value="'+v.calc[0]+'" aria-label="'+v.n+' target accounts"></td>'+
  '<td><input type="number" class="vg-mi" data-f="1" min="0" max="100" step="0.5" value="'+v.calc[1]+'" aria-label="'+v.n+' win rate percent"></td>'+
  '<td><input type="number" class="vg-mi w" data-f="2" min="0" max="5000000" step="500" value="'+v.calc[2]+'" aria-label="'+v.n+' annual contract value in US dollars"></td>'+
  '<td class="o" data-o="won">0</td><td class="o" data-o="rev">0</td></tr>';}
function buildModel(){if(mt)mt.innerHTML=V.map(mrow).join('');}
buildModel();
var RES=[];
function calc(){if(!mt)return;var fx=+$('#vgFx').value||FX_DASH,samP=Math.max(0,Math.min(100,+$('#vgSamIn').value||0)),ta=0,tw=0,tr=0;RES=[];
  $$('tr',mt).forEach(function(r,i){var ins=$$('input',r).map(function(x){return Math.max(0,+x.value||0);});
    var wr=Math.min(100,ins[1]*scn),won=ins[0]*wr/100,rev=won*ins[2];ta+=ins[0];tw+=won;tr+=rev;
    $('[data-o="won"]',r).textContent=won.toFixed(1);$('[data-o="rev"]',r).textContent=usdFull(rev);RES.push([V[i].n,ins[0],wr,ins[2],won,rev]);});
  var sam=TAM*samP/100;
  $('#vgTA').textContent=ta.toLocaleString('en-US');$('#vgTW').textContent=tw.toFixed(1);$('#vgTR').textContent=usdFull(tr);
  $('#vgOutUsd').textContent=usdS(tr);$('#vgOutInr').textContent='≈ '+inr(tr,fx)+' at ₹'+fx.toFixed(2)+' per US$';
  $('#vgOutAcc').textContent=Math.round(tw);$('#vgOutAcv').textContent=usdFull(tw?tr/tw:0);$('#vgOutSam').textContent=usdS(sam);
  var sh=sam?tr/sam*100:0;$('#vgOutShare').textContent=(sh<1?sh.toFixed(2):sh.toFixed(1))+'%';
  // TAM/SAM/SOM block + goals
  set('#vgTam',usdS(TAM));set('#vgTamI','≈ '+inr(TAM));set('#vgSam',usdS(sam));set('#vgSamP',samP+'%');set('#vgSamI','≈ '+inr(sam));
  set('#vgSom',usdS(tr));set('#vgSomP',(sh<1?sh.toFixed(2):sh.toFixed(1))+'%');set('#vgSomI','≈ '+inr(tr,fx));
  set('#vgGoalAcc',String(Math.round(tw)));set('#vgGoalRev',usdS(tr));set('#vgGoalRevI','≈ '+inr(tr,fx));
  var mx=Math.max.apply(null,RES.map(function(r){return r[5];}).concat([1]));
  $('#vgBars').innerHTML=RES.slice().sort(function(a,b){return b[5]-a[5];}).map(function(r){return '<div class="vg-bar"><span>'+r[0]+'</span><i><u style="width:'+(r[5]/mx*100).toFixed(1)+'%"></u></i><b>'+usdS(r[5])+'</b></div>';}).join('');
  if(XH.flash)XH.flash($('#vgOutUsd'));}
function set(s,t){var e=$(s);if(e)e.textContent=t;}
if(mt){mt.addEventListener('input',calc);$('#vgFx').addEventListener('input',calc);$('#vgSamIn').addEventListener('input',calc);
  var sg=$('#vgScn');sg.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;$$('button',sg).forEach(function(x){x.classList.toggle('on',x===b);});scn=+b.getAttribute('data-v');
    $('#vgScnL').textContent=b.firstChild.textContent+' · win rate ×'+scn.toFixed(1);calc();});
  $('#vgReset').addEventListener('click',function(){buildModel();$('#vgFx').value='95.17';$('#vgSamIn').value='10';scn=1;$$('#vgScn button').forEach(function(x){x.classList.toggle('on',x.getAttribute('data-v')==='1');});$('#vgScnL').textContent='Base · win rate ×1.0';calc();if(XH.toast)XH.toast('Revenue model reset to default assumptions');});
  $('#vgCsv').addEventListener('click',function(){var fx=+$('#vgFx').value||FX_DASH,rows=[['Vertical','Target accounts','Win rate % (after scenario)','ACV USD','Accounts won','Revenue USD','Revenue INR']];
    RES.forEach(function(r){rows.push([r[0],r[1],r[2].toFixed(1),r[3],r[4].toFixed(2),Math.round(r[5]),Math.round(r[5]*fx)]);});
    rows.push([]);rows.push(['Assumptions: illustrative, not a forecast. TAM = Ghana ICT services US$1.5B+ (Xalam Analytics, Jul 2025). FX ₹'+fx+' per US$.']);
    var csv=rows.map(function(r){return r.map(function(c){c=String(c==null?'':c);return /[",]/.test(c)?'"'+c.replace(/"/g,'""')+'"':c;}).join(',');}).join('\n');
    if(XH.download)XH.download('xcellhost-ghana-revenue-model.csv',csv,'text/csv');});
  calc();}

/* ---------- heatmap ---------- */
var LAWP=[ // [law, pillars, verticals ('*' = all)]
 ['Data Protection Act 2012 (Act 843)','DS','*'],['DPC enforcement & two-year renewals','D',['bfsi','tel','hc','edu','ind','ecom']],
 ['Cybersecurity Act 2020 · CSA licensing','SL','*'],['CII Directive 2021 (24-hour reporting)','CSD',['bfsi','tel','mine','hc','gov','edu']],
 ['BoG CISD 2026','CSD',['bfsi']],['Government data localisation aim + DC/cloud framework (draft)','C',['gov','hc','bfsi']],
 ['Electronic Transactions Act 2008 + draft ETA Bill 2025','T',['bfsi','gov','ecom']],
 ['National AI Strategy 2025–2035 + public AI review','AL','*'],['Cybersecurity (Amendment) Bill 2025 (draft)','SA',['tel','bfsi','gov']],
 ['VAT Act 2025 + real-time VAT','C',['sme','ecom','ind','mfg']],['GIPA Act 2026','C',['ind','mfg']]];
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
  hdet.innerHTML='<b>'+v.n+' × '+P[p][0]+'</b><div class="vg-hdg"><div><small>Mapped services ('+sv.length+')</small>'+(sv.length?'<ul>'+sv.map(function(s){return '<li><a href="'+s+'.html">'+SV[s][0]+'</a></li>';}).join('')+'</ul>':'<p>None in this vertical\'s top 10.</p>')+'</div>'+
    '<div><small>Laws driving this pillar ('+lw.length+')</small>'+(lw.length?'<ul>'+lw.map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul>':'<p>No law in our table targets this pillar here.</p>')+'</div></div>'+
    '<button type="button" class="vg-hgo" data-v="'+v.k+'">Open '+v.n+' in the vertical selector →</button>';});
  hdet.addEventListener('click',function(e){var b=e.target.closest('.vg-hgo');if(!b)return;showV(b.getAttribute('data-v'),true);var t=$('#verticals');window.scrollTo({top:t.offsetTop-((hdr?hdr.offsetHeight:0)+50),behavior:REDUCE?'auto':'smooth'});});
  var hm=$('#vgHmode');hm.addEventListener('click',function(e){var b=e.target.closest('button[data-v]');if(!b)return;$$('button',hm).forEach(function(x){x.classList.toggle('on',x===b);});hmode=b.getAttribute('data-v');drawHeat();
    hdet.innerHTML='<b>Select a cell</b><span>'+(hmode==='fit'?'Counts of top-10 services per pillar.':'Counts of laws in our table that drive each pillar.')+'</span>';});}

/* =====================================================================
   HERO — one rAF loop: drawn Ghana outline, city pins, flows to Mumbai
   ===================================================================== */
var PL=[[-2.93,10.96],[-2.2,11.0],[-1.4,11.0],[-0.7,10.99],[-0.15,11.13],[0.03,11.0],[0.37,10.35],[0.3,9.75],[0.25,9.2],[0.5,8.85],[0.65,8.35],[0.6,7.7],[0.53,7.0],[0.65,6.55],[1.19,6.1],
 [0.95,5.95],[0.6,5.78],[0.0,5.63],[-0.2,5.53],[-0.62,5.34],[-1.25,5.08],[-1.75,4.88],[-2.1,4.74],[-2.35,4.9],[-2.8,5.0],[-3.1,5.1],
 [-3.05,5.7],[-3.25,6.3],[-3.15,7.0],[-2.95,7.6],[-2.75,8.0],[-2.6,8.3],[-2.7,9.0],[-2.75,9.6],[-2.85,10.3],[-2.93,10.96]];
var CITY=[['Accra',-0.19,5.60,'r'],['Kumasi',-1.62,6.69,'r'],['Tamale',-0.84,9.40,'r'],['Takoradi',-1.76,4.90,'l'],['Ho',0.47,6.60,'r']];
var SC=[
 {t:'Market · where the money is',s:'Simplified outline, not to scale · figures sourced below',
  c:'<span class="vg-ck">Sourced · latest available</span><div class="vg-cr"><b>US$1.5B+</b><span>ICT services market</span></div><div class="vg-cr"><b>US$43–96M</b><span>cyber security, 2023–28</span></div><div class="vg-cr"><b>4.8 MW</b><span>live DC IT load, 2024E</span></div><div class="vg-cr"><b>GH¢4.54tn</b><span>mobile money, 2025</span></div>'},
 {t:'Verticals · who buys first',s:'Wave 1 in the first 6 months, then waves 2 and 3',
  c:'<span class="vg-ck">Wave 1 · months 0–6</span><div class="vg-cch"><i>BFSI &amp; fintech</i><i>Indian subsidiaries</i><i>Education</i><i>SMEs</i></div><span class="vg-ck">Waves 2–3</span><div class="vg-cch m"><i>Telecom</i><i>Mining &amp; energy</i><i>Healthcare</i><i>Manufacturing</i><i>E-commerce</i><i>Government</i></div>'},
 {t:'Laws · the licensing era',s:'Customer data stays in Ghana · licensed partner delivers security',
  c:'<span class="vg-ck">In force</span><div class="vg-cl"><b>29 Dec 2020</b><span>Cybersecurity Act 1038</span></div><div class="vg-cl"><b>1 Jan 2026</b><span>VAT Act 2025</span></div><div class="vg-cl"><b>31 Jan 2026</b><span>CSA licensing enforced</span></div><div class="vg-cl"><b>Mar 2026</b><span>BoG CISD 2026</span></div>'},
 {t:'Roadmap · 18 months',s:'Partner DCs in Accra · second line from Mumbai',
  c:'<span class="vg-ck">Partner-led entry · goals</span><div class="vg-cp"><span>0–6 m · Prove</span><i><u style="--w:100%"></u></i></div><div class="vg-cp"><span>6–12 m · Establish</span><i><u style="--w:66%"></u></i></div><div class="vg-cp"><span>12–18 m · Scale</span><i><u style="--w:33%"></u></i></div><div class="vg-cr g"><b id="vgHeroRev">US$0.5M</b><span>annualised revenue goal</span></div>'}];
var cv=$('#vgMap'),stage=$('#vgStage'),card=$('#vgCard'),dots=$$('#vgDots [data-k]'),pz=$('#vgPz');
if(cv&&cv.getContext){
  var ctx=cv.getContext('2d'),W=0,H=0,DPR=1,proj=null,pts=[],segL=[],totL=0,cityP=[],mum=null;
  var k=0,t0=performance.now(),sceneT=0,visible=true,paused=false,hover=false,raf=0,DUR=5600,last=t0,drawn=REDUCE?1:0,sceneStart=t0;
  function size(){var r=cv.parentNode.getBoundingClientRect();DPR=Math.min(2,window.devicePixelRatio||1);W=Math.max(280,r.width);H=Math.max(260,r.height);
    cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);ctx.setTransform(DPR,0,0,DPR,0,0);
    var narrow=W<520,mx0=narrow?W*0.40:W*0.36,mx1=W*0.97,my0=H*0.05,my1=H*0.95,lon0=-3.7,lon1=1.7,lat0=4.4,lat1=11.4,cf=Math.cos(8*Math.PI/180);
    var s=Math.min((mx1-mx0)/((lon1-lon0)*cf),(my1-my0)/(lat1-lat0)),ox=mx0+((mx1-mx0)-(lon1-lon0)*cf*s)/2,oy=my0+((my1-my0)-(lat1-lat0)*s)/2;
    proj=function(lo,la){return [ox+(lo-lon0)*cf*s,oy+(lat1-la)*s];};
    pts=PL.map(function(p){return proj(p[0],p[1]);});segL=[];totL=0;for(var i=1;i<pts.length;i++){var l=Math.hypot(pts[i][0]-pts[i-1][0],pts[i][1]-pts[i-1][1]);segL.push(l);totL+=l;}
    cityP=CITY.map(function(c){var q=proj(c[1],c[2]);return {n:c[0],x:q[0],y:q[1],a:c[3]};});
    mum={x:Math.max(W*0.12,58),y:H*0.46};}
  function curve(a,b){var mx=(a.x+b.x)/2,my=Math.min(a.y,b.y)-H*0.22;return [mx,my];}
  function qpt(a,c,b,t){var u=1-t;return [u*u*a.x+2*u*t*c[0]+t*t*b.x,u*u*a.y+2*u*t*c[1]+t*t*b.y];}
  function draw(now){var dt=now-last;last=now;
    if(!paused&&!hover&&!REDUCE){sceneT+=dt;if(sceneT>DUR){sceneT=0;go((k+1)%SC.length);}}
    if(drawn<1)drawn=Math.min(1,drawn+dt/1700);
    var T=REDUCE?0:now/1000,e=1-Math.pow(1-drawn,3);
    ctx.clearRect(0,0,W,H);
    // graticule
    ctx.strokeStyle='rgba(255,255,255,0.06)';ctx.lineWidth=1;ctx.beginPath();
    for(var lo=-3;lo<=1;lo+=1){var a=proj(lo,4.4),b=proj(lo,11.4);ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);}
    for(var la=5;la<=11;la+=2){var c=proj(-3.7,la),dd=proj(1.7,la);ctx.moveTo(c[0],c[1]);ctx.lineTo(dd[0],dd[1]);}ctx.stroke();
    // outline: progressive stroke, then fill
    var lim=totL*e,acc=0;ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);
    for(var i=1;i<pts.length;i++){var L=segL[i-1];if(acc+L<=lim){ctx.lineTo(pts[i][0],pts[i][1]);acc+=L;}else{var f=(lim-acc)/L;ctx.lineTo(pts[i-1][0]+(pts[i][0]-pts[i-1][0])*f,pts[i-1][1]+(pts[i][1]-pts[i-1][1])*f);break;}}
    if(e>=1){ctx.closePath();ctx.fillStyle=k===2?'rgba(0,102,255,0.24)':'rgba(0,102,255,0.16)';ctx.fill();}
    ctx.strokeStyle='#0066FF';ctx.lineWidth=2;ctx.lineJoin='round';ctx.stroke();
    if(k===2&&e>=1){ctx.save();ctx.setLineDash([4,6]);ctx.lineDashOffset=-T*14;ctx.strokeStyle='rgba(255,138,0,0.75)';ctx.lineWidth=1.4;ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);for(var j=1;j<pts.length;j++)ctx.lineTo(pts[j][0],pts[j][1]);ctx.closePath();ctx.stroke();ctx.restore();}
    // Mumbai node
    var al=Math.min(1,Math.max(0,(drawn-0.35)/0.5));ctx.globalAlpha=al;
    ctx.fillStyle='rgba(255,138,0,0.14)';ctx.beginPath();ctx.arc(mum.x,mum.y,16+(REDUCE?0:Math.sin(T*2)*2),0,6.283);ctx.fill();
    ctx.fillStyle='#FF8A00';ctx.beginPath();ctx.arc(mum.x,mum.y,6,0,6.283);ctx.fill();
    ctx.font='600 11px "IBM Plex Mono",monospace';ctx.fillStyle='#ffffff';ctx.textAlign='center';ctx.fillText('MUMBAI',mum.x,mum.y+30);
    ctx.font='400 10px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(182,194,218,0.9)';ctx.fillText('Tier IV · NOC/SOC',mum.x,mum.y+44);
    // flows
    cityP.forEach(function(cp,ci){var cc=curve(mum,cp);ctx.save();
      if(k===2){ctx.setLineDash([3,7]);ctx.strokeStyle='rgba(255,255,255,0.22)';}else{ctx.strokeStyle='rgba(0,102,255,0.55)';}
      ctx.lineWidth=1.3;ctx.beginPath();ctx.moveTo(mum.x,mum.y);ctx.quadraticCurveTo(cc[0],cc[1],cp.x,cp.y);ctx.stroke();ctx.restore();
      if(!REDUCE&&k!==2){for(var q=0;q<2;q++){var tt=((T*0.32+ci*0.29+q*0.5)%1),p=qpt(mum,cc,cp,tt);ctx.fillStyle=q?'#ffffff':'#FF8A00';ctx.beginPath();ctx.arc(p[0],p[1],2.6,0,6.283);ctx.fill();}}
      if(k===2){var p2=qpt(mum,cc,cp,0.5);ctx.fillStyle='#0B132B';ctx.strokeStyle='rgba(255,138,0,0.9)';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(p2[0],p2[1],9,0,6.283);ctx.fill();ctx.stroke();
        ctx.fillStyle='#FF8A00';ctx.fillRect(p2[0]-3.5,p2[1]-1,7,5.5);ctx.strokeStyle='#FF8A00';ctx.lineWidth=1.3;ctx.beginPath();ctx.arc(p2[0],p2[1]-1.5,2.6,Math.PI,0);ctx.stroke();}});
    // city pins
    cityP.forEach(function(cp,ci){var ph=REDUCE?0.5:((T*0.8+ci*0.33)%1);
      ctx.strokeStyle='rgba(255,255,255,'+(0.55*(1-ph)).toFixed(3)+')';ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(cp.x,cp.y,5+ph*14,0,6.283);ctx.stroke();
      ctx.fillStyle=(k===3)?'#FF8A00':'#ffffff';ctx.beginPath();ctx.arc(cp.x,cp.y,4.5,0,6.283);ctx.fill();
      ctx.font='600 11px "Sora",sans-serif';ctx.fillStyle='#ffffff';ctx.textAlign=cp.a==='l'?'right':'left';
      var lx=cp.a==='l'?cp.x-10:cp.x+10;ctx.fillText(cp.n,lx,cp.y+4);
      if(k===3&&ci===0){ctx.font='400 9.5px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.fillText('partner DC',lx,cp.y+17);}
});
    ctx.globalAlpha=1;
    if(k===2&&e>=1){ctx.font='600 10px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.textAlign='center';var c0=proj(-1.3,8.2);ctx.fillText('DATA IN GHANA',c0[0],c0[1]);}
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
