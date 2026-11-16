
(function(){
'use strict';
var d=document,XH=window.XH||{};
var $=function(s,c){return (c||d).querySelector(s);},$$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));};
var REDUCE=!!XH.reduce||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
var ICONS={server:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',network:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg>',route:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H16a3 3 0 000-6H8a3 3 0 010-6h7.5"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 006 0zM18 7l-3 7a3 3 0 006 0z"/></svg>',doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>',trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/></svg>',rupee:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',robot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>','shield-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13-8z"/></svg>',cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',disk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',certificate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="13" rx="2"/><circle cx="12" cy="17" r="3"/><path d="M10.5 19.5L10 23l2-1 2 1-.5-3.5M7 7h10M7 10h6"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',bug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg>',mobile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg>'};

/* build3 has no robots support; strategy briefings must stay out of search indexes */
(function(){try{if(!d.querySelector('meta[name="robots"]')){var m=d.createElement('meta');m.name='robots';m.content='noindex, nofollow';d.head.appendChild(m);}}catch(e){}})();

/* ---------- formatting ---------- */
var FX_DASH=94.20; // ₹ per US$, close 13 Nov 2026 — dashboard labels; Rs 47.16 per US$ (Wise mid-market, 23 Oct 2026)
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
 'manufacturing-cloud':['Manufacturing Cloud','C','ERP, MES and plant data hosting'],
 'ot-security':['OT Security','S','Monitor and segment plant networks'],
 'ot-assessment':['OT Security Assessment','S','IEC 62443-aligned site review'],
 'acronis-ot':['Acronis OT','D','Backup and recovery for OT systems'],
 'scrutiny-edr':['Scrutiny EDR','S','Endpoint detection and response'],
 'vortex-soc':['Vortex SOC (SIEM · SOAR · UEBA)','S','24×7 detection and report-ready evidence'],
 'third-party-risk-management':['Third-Party Risk Management','S','Supplier assurance and audit evidence'],
 'sap-hosting':['SAP Hosting','C','SAP landscapes, managed 24×7'],
 'industry-5-smart-manufacturing':['Industry 5.0 Smart Operations','A','AI vision and predictive maintenance'],
 'security-awareness-lms':['Security Awareness LMS','L','Staff phishing and privacy training'],
 'xcellhost-gcc-cloud':['GCC Cloud','C','Cloud and security for capability centres'],
 'global-cloud':['Global Cloud (island partner DC)','C','In-country VMs managed from Mumbai'],
 'xcellhost-vdpo':['Privacy Operations (vDPO)','D','Tooling and help desk for your in-house DPO'],
 'managed-azure':['Managed Azure','C','Azure landing zone and 24×7 operations'],
 'managed-microsoft-365':['Managed Microsoft 365','C','Licences, security and admin'],
 'dpdp-compliance-platform':['DPDP Compliance Platform','D','India data-protection duties for the parent group'],
 'xcellhost-iso-27001':['ISO 27001 Consulting','S','ISMS for HQ and client audits'],
 'cloud-desktop-enterprise-vdi':['Cloud Desktop (VDI)','C','Secure desktops for delivery teams'],
 'ai-training-integrated-program':['Integrated AI Training Program','L','12-week blended GenAI course'],
 'gaming-dedicated-server':['Gaming Dedicated Servers','C','Low-latency game servers'],
 'media-entertainment-cloud':['Media & Entertainment Cloud','C','Render, storage and streaming'],
 'cdn-cloud':['CDN Cloud','C','Fast delivery for launches and peaks'],
 'waap-as-a-service':['WAAP as a Service','S','WAF, API, bot and DDoS protection'],
 'kubernetes-api':['Managed Kubernetes','C','Containers for SaaS and live ops'],
 'gpu-servers':['GPU Servers','A','Training, inference and build workloads'],
 'xcellhost-cloud-code-signing':['Cloud Code Signing','T','Sign builds and updates with HSM keys'],
 'digital-risk-monitoring':['Digital Risk Monitoring','S','Fake sites, domains and data leaks'],
 'ai-red-teaming-services':['AI Red Teaming','S','Adversarial testing of LLM features'],
 'xcellhost-soc-2':['SOC 2 Readiness','S','Assurance reports for enterprise buyers'],
 'xcellhost-iot-pki':['IoT PKI','T','Device identity for chips and products'],
 'hsm-hardware-security-module':['HSM','T','Hardware key protection on premises'],
 'cloud-hsm':['Cloud HSM','T','Keys for payments, signing and encryption'],
 'crypto-agility-and-post-quantum-cryptography-readiness':['PQC Readiness','T','Crypto-agility and post-quantum roadmap'],
 'insider-threat':['Insider Threat','S','Detect IP theft by insiders'],
 'data-security-posture-mgmt':['Data Security Posture Management','D','Find and protect design data'],
 'threat-intelligence':['Threat Intelligence','S','Early warning on targeted campaigns'],
 'bfsi-cloud':['BFSI Cloud','C','Regulated cloud with audit and exit rights'],
 'insurance-cloud':['Insurance Cloud','C','Policy, claims and core-system hosting'],
 'privileged-access-management':['Privileged Access Management','S','Control and record admin access'],
 'cryptographic-posture-management':['Cryptographic Posture Management','T','Crypto inventory and weak-algorithm risk'],
 'resilience-operations':['Managed Resilience Operations','D','Backup, DR and tested recovery'],
 'red-team-assessment':['Red Team Assessment','S','Adversary simulation and resilience testing'],
 'ai-training-insurance-professionals':['AI Training for Insurance Professionals','L','Underwriting, claims and service teams'],
 'retail-cloud':['Retail Cloud','C','Commerce, POS and loyalty platforms'],
 'xcellhost-pci-dss':['PCI DSS Compliance','S','Card-data scope and evidence'],
 'xcellhost-dmarc':['DMARC','S','Stop brand and invoice spoofing'],
 'acronis-cyber-platform':['Acronis Cyber Platform','D','Backup, DR and anti-ransomware'],
 'xcellhost-47-day-ssl':['47-Day SSL Automation','T','Ready for 200, 100 and 47-day certificates'],
 'enterprise-rag-as-a-service':['Enterprise RAG as a Service','A','Grounded AI assistants on your documents'],
 'scrutiny-dlp':['Scrutiny DLP','D','Stop personal-data leakage'],
 'healthcare-cloud':['Healthcare Cloud','C','EMR and clinical systems hosting'],
 'pharmaceutical-cloud':['Pharmaceutical Cloud','C','GxP-ready research and quality systems'],
 'multi-factor-authentication':['Multi-Factor Authentication','S','Stop VPN and remote-access takeovers'],
 'dfir':['DFIR','S','Incident response and forensics'],
 'email-encryption':['Email Encryption','D','Protect patient and client files'],
 'ai-training-medical-doctors':['AI Training for Doctors','L','Safe clinical use of AI'],
 'data-center-build-services':['Data Centre Build Services','C','Design and build for new halls'],
 'liquid-cooled-ai-data-center':['Liquid-Cooled AI Data Centre','A','High-density AI halls'],
 'edge-cloud':['Edge Cloud','C','Compute at towers, depots and plants'],
 'ndr':['Network Detection & Response','S','Find attackers inside carrier networks'],
 'ng-siem':['Next-Gen SIEM','S','Log analytics at carrier scale'],
 'xcellhost-managed-pki':['Managed PKI','T','Private CA operations'],
 'cyber-range-as-a-service':['Cyber Range as a Service','L','Live-fire SOC and IR exercises'],
 'logistics-cloud':['Logistics Cloud','C','WMS, TMS and tracking platforms'],
 'iot-cloud':['IoT Cloud','C','Sensor and telematics platforms'],
 'managed-sd-wan':['Managed SD-WAN','C','Links for depots, ports and sites'],
 'digital-twin':['Digital Twin','A','Model plants, ports and networks'],
 'secure-file-transfer':['Secure File Transfer','D','Shipping and customs documents'],
 'government-cloud':['Government Cloud','C','Segregated cloud via local prime contractors'],
 'cyber-security-audit':['Cyber Security Audit','S','Independent IT security audit for CII owners'],
 'xcellhost-managed-grc':['Managed GRC','S','Risk register, policies and evidence'],
 'xcellhost-iso-42001':['ISO 42001 Consulting','A','AI management system for responsible AI'],
 'ai-training-live-online':['AI Training Live Online','L','AI literacy for staff']
};
function fn(n){return '<a class="fn" href="#s'+n+'">'+n+'</a>';}
/* verticals */
var V=[
 {k:'fin',n:'Financial services & global business',full:'Banks, insurers, management companies, funds and global business companies',ic:'rupee',wave:1,
  why:[['trend','Financial services were <b>13.4%</b> of GDP in 2025. The centre hosts more than 20,000 global business entities and over 1,000 global funds.'+fn(7)],
       ['scale','The Bank of Mauritius requires systemically important banks to run red-team tests, and all licensees to send audit findings with a remediation plan within <b>90 days</b>.'+fn(10)],
       ['shield','The 2026 critical-infrastructure regulations name <b>financial services</b>, banking and non-banking, as a covered sector.'+fn(11)]],
  regs:['BoM cyber & technology risk guideline','BoM cloud guideline (60 days notice)','FSC cloud guidelines (15 business days)','CII Regulations 2026','DPA 2017 + DPO Regulations'],
  buy:['CISO / head of IT risk','Compliance officer','Data Protection Officer','COO of a management company'],
  svc:['bfsi-cloud','vortex-soc','xcellhost-vdpo','privileged-access-management','red-team-assessment','resilience-operations','cloud-hsm','third-party-risk-management','xcellhost-iso-27001','security-awareness-lms'],
  trg:['A Bank of Mauritius or FSC inspection finding'+fn(10),'A planned move to cloud: 60 days notice to the Bank'+fn(19),'A CII designation notice in the Government Gazette'+fn(11),'A data leak at a peer, as in January 2026'+fn(10)],
  calc:[60,10,28000]},
 {k:'ind',n:'India corridor',full:'Mauritian offices of Indian groups, and firms using Mauritius as an Africa base',ic:'globe',wave:1,
  why:[['globe','India–Mauritius trade was <b>US$887.25 million</b> in FY2024–25, of which Indian exports were US$676.34 million.'+fn(27)],
       ['rupee','Mauritius has sent <b>US$180 billion</b> of FDI to India since 2000, a quarter of the total. Eleven Indian public-sector companies operate in Mauritius.'+fn(27)],
       ['route','UPI and RuPay have linked the two countries since <b>12 Feb 2024</b>'+fn(29)+'. A Mauritian minister says many Indian companies are relocating there to work on Africa.'+fn(30)]],
  regs:['CECPA (in force 1 Apr 2021)','India–Mauritius DTAA + 2024 Protocol','DPA 2017 transfer conditions','India DPDP Act'],
  buy:['Country head / MD','India HQ CIO','CFO / treasury','Group CISO'],
  svc:['xcellhost-gcc-cloud','global-cloud','managed-microsoft-365','managed-azure','dpdp-compliance-platform','xcellhost-vdpo','vortex-soc','sap-hosting','cloud-desktop-enterprise-vdi','ai-training-integrated-program'],
  trg:['An Indian group opens a Mauritius or Africa office'+fn(30),'The 2024 treaty protocol nears entry into force, so real local operations matter more'+fn(25),'An in-house DPO is needed from 1 Jan 2027'+fn(12),'A head-office audit asks for ISO 27001 evidence'],
  calc:[30,15,20000]},
 {k:'bpo',n:'ICT-BPO & fintech',full:'Outsourcing and software firms, fintechs and virtual-asset providers',ic:'code',wave:1,
  why:[['trend','ICT value added reached <b>Rs 36.3 billion</b> in 2025, up 6.9%. ICT service exports rose 21.5% to Rs 9.6 billion.'+fn(1)],
       ['users','The EDB counts more than <b>33,000</b> people and about 975 companies in the wider ICT-BPO sector.'+fn(3)],
       ['flag','The National Fintech Strategy 2026–2030, launched on 25 Jun 2026, has a pillar on digital infrastructure and cyber security.'+fn(31)]],
  regs:['DPA 2017 + DPO Regulations','GDPR alignment / EU adequacy bid','VAITOS Act 2021','Client audits (SOC 2, ISO 27001)'],
  buy:['CTO / head of delivery','Information security manager','Data Protection Officer','Founder / CEO'],
  svc:['cloud-desktop-enterprise-vdi','xcellhost-soc-2','xcellhost-iso-27001','scrutiny-dlp','kubernetes-api','waap-as-a-service','xcellhost-cloud-code-signing','insider-threat','enterprise-rag-as-a-service','ai-training-live-online'],
  trg:['An EU or UK client asks for SOC 2 or ISO 27001','The EU adequacy assessment raises GDPR questions'+fn(15),'An in-house DPO is needed from 1 Jan 2027'+fn(12),'Windows Server 2016 extended support ends 12 Jan 2027'+fn(41)],
  calc:[40,8,18000]},
 {k:'hos',n:'Hospitality & tourism',full:'Hotel groups, resorts, airlines and travel companies',ic:'bell',wave:2,
  why:[['users','Mauritius received <b>1,436,250</b> tourists in 2025, up 3.9%. Arrivals from India rose 33.5%.'+fn(33)],
       ['rupee','Tourism earnings for 2025 were expected to pass <b>Rs 100 billion</b>.'+fn(33)],
       ['trend','Accommodation and food services grew 4.2% in 2025.'+fn(2)]],
  regs:['DPA 2017 + DPO Regulations','PCI DSS (card-scheme rule)','MRA e-invoicing','VAT Act'],
  buy:['Group IT director','Finance director','Head of revenue & e-commerce','Data Protection Officer'],
  svc:['managed-microsoft-365','xcellhost-pci-dss','waap-as-a-service','acronis-cyber-platform','managed-sd-wan','xcellhost-dmarc','digital-risk-monitoring','cdn-cloud','enterprise-rag-as-a-service','security-awareness-lms'],
  trg:['A card acquirer asks for PCI DSS evidence','Fake booking sites or spoofed emails hit guests','An MRA e-invoicing notice'+fn(24),'Public TLS certificates fall to 100 days on 15 Mar 2027'+fn(42)],
  calc:[40,6,15000]},
 {k:'hc',n:'Healthcare',full:'Private hospitals and clinics, laboratories and pharma',ic:'heart',wave:2,
  why:[['heart','Healthcare was <b>2%</b> of GDP in 2024, with 4,400 hospital beds and about 80 laboratories.'+fn(36)],
       ['cloud','The EDB lists telemedicine, cloud-based software and AI in healthcare as investment opportunities.'+fn(36)],
       ['alert','A system whose disruption would interrupt life-sustaining services, such as health, can be designated critical.'+fn(10)]],
  regs:['DPA 2017 (72-hour breach notice)','DPO Regulations 2026','Cybersecurity and Cybercrime Act 2021'],
  buy:['Hospital or clinic CEO','IT manager','Medical director','Data Protection Officer'],
  svc:['healthcare-cloud','acronis-cyber-platform','multi-factor-authentication','scrutiny-dlp','email-encryption','vortex-soc','dfir','xcellhost-vdpo','pharmaceutical-cloud','ai-training-medical-doctors'],
  trg:['Ransomware or a patient-data leak','A new clinic, laboratory or information system','An in-house DPO is needed from 1 Jan 2027'+fn(12),'Windows Server 2016 extended support ends 12 Jan 2027'+fn(41)],
  calc:[20,8,18000]},
 {k:'ret',n:'Retail, e-commerce & SMEs',full:'Retail chains, online sellers, distributors and growing SMEs',ic:'cart',wave:2,
  why:[['users','SMEs produce <b>42%</b> of GDP and about one job in two, according to SME Mauritius.'+fn(37)],
       ['doc','E-invoicing applies above Rs 80 million turnover from 30 Jun 2026 and above <b>Rs 40 million</b> from 1 Sep 2026.'+fn(24)],
       ['scale','The government plans an e-commerce framework to register and license online sellers.'+fn(16)]],
  regs:['DPA 2017 + DPO Regulations','MRA e-invoicing','Planned e-commerce framework','PCI DSS (card-scheme rule)'],
  buy:['Owner / managing director','Head of e-commerce','Finance manager','IT manager'],
  svc:['retail-cloud','xcellhost-pci-dss','waap-as-a-service','cdn-cloud','xcellhost-dmarc','digital-risk-monitoring','acronis-cyber-platform','xcellhost-47-day-ssl','scrutiny-edr','security-awareness-lms'],
  trg:['An MRA e-invoicing notice'+fn(24),'Online-seller registration rules'+fn(16),'A fake shop or brand abuse case','Public TLS certificates fall to 100 days on 15 Mar 2027'+fn(42)],
  calc:[30,6,14000]},
 {k:'tel',n:'Telecom, data centres & utilities',full:'Operators, data-centre owners, broadcasters, energy and water',ic:'network',wave:2,
  why:[['server','Ten data-centre facilities operate across five locations'+fn(5)+'. The market is forecast to grow from 5 MW in 2025 to <b>11 MW</b> by 2030.'+fn(4)],
       ['shield','The 2026 regulations cover <b>ICT and broadcasting</b> and <b>energy and water supply</b>. Owners have until 1 Jun 2027.'+fn(11)],
       ['zap','Budget 2026–27 offers data centres a special electricity tariff in the Côte d\'Or High-Tech zone'+fn(18)+'. SAFE reaches end of life in 2027.'+fn(5)]],
  regs:['CII Regulations 2026','Cybersecurity and Cybercrime Act 2021 (annual audit)','DPA 2017','Regulator directions'],
  buy:['CTO / head of networks','CISO','Data-centre operations manager','Regulatory affairs'],
  svc:['cyber-security-audit','ndr','ng-siem','vortex-soc','ot-security','xcellhost-managed-pki','hsm-hardware-security-module','data-center-build-services','edge-cloud','cyber-range-as-a-service'],
  trg:['CII compliance is due by 1 Jun 2027'+fn(11),'The yearly independent IT security audit'+fn(10),'A new hall, or a site in the Côte d\'Or zone'+fn(18),'Network redesign as T4 replaces SAFE'+fn(5)],
  calc:[10,10,40000]},
 {k:'mfg',n:'Manufacturing & export',full:'Textile and apparel, seafood, light engineering and jewellery exporters',ic:'building',wave:3,
  why:[['building','Manufacturing was <b>12.8%</b> of GDP in 2024 and employs nearly 60,000 people.'+fn(34)],
       ['globe','Mauritius exports 1,500 product lines to 115 countries. Textile and apparel exports were <b>Rs 20.0 billion</b> in 2024.'+fn(34)],
       ['rupee','A 15% investment tax credit for manufacturers now covers AI solutions and runs to 30 Jun 2029.'+fn(18)]],
  regs:['Overseas buyer audits','DPA 2017 + DPO Regulations','Investment tax credit (to 30 Jun 2029)','MRA e-invoicing'],
  buy:['Plant manager','Head of IT','Supply-chain director','Finance director'],
  svc:['manufacturing-cloud','sap-hosting','ot-security','ot-assessment','acronis-ot','scrutiny-edr','third-party-risk-management','secure-file-transfer','industry-5-smart-manufacturing','security-awareness-lms'],
  trg:['An overseas buyer sends a security questionnaire','An ERP refresh or SAP move','Ransomware at a plant','AI investment before the tax credit ends on 30 Jun 2029'+fn(18)],
  calc:[30,5,16000]},
 {k:'log',n:'Logistics, freeport & ports',full:'Freeport operators, shipping, port and airport services',ic:'route',wave:3,
  why:[['route','The freeport has <b>268</b> registered operators and 550,000 m² of infrastructure.'+fn(35)],
       ['trend','Freeport trade was US$797 million and 259,007 tonnes in 2023.'+fn(35)],
       ['flag','<b>Transport</b> is a covered sector in the 2026 regulations'+fn(11)+'. India\'s 2025 package includes a new air-traffic control tower and port redevelopment.'+fn(28)]],
  regs:['CII Regulations 2026 (transport)','Freeport Act','Customs Act','DPA 2017'],
  buy:['Operations director','IT manager','Terminal systems lead','Compliance manager'],
  svc:['logistics-cloud','iot-cloud','managed-sd-wan','secure-file-transfer','vortex-soc','ot-security','acronis-cyber-platform','digital-twin','multi-factor-authentication','cyber-security-audit'],
  trg:['A CII designation notice'+fn(11),'Port and airport upgrade projects'+fn(28),'Network redesign as T4 replaces SAFE'+fn(5),'Ransomware at a shipping or freight partner'],
  calc:[25,6,16000]},
 {k:'gov',n:'Public sector',full:'Ministries, agencies and state-owned bodies, via local prime contractors',ic:'flag',wave:3,
  why:[['shield','<b>Public service</b> is a covered sector in the 2026 critical-infrastructure regulations.'+fn(11)],
       ['rupee','Budget 2026–27 gives Rs 13 million to cyber security, including a cyber forensic laboratory, and trains <b>5,000</b> public officers in responsible AI.'+fn(18)],
       ['brain','The National AI Strategy has a pillar on responsible AI in government'+fn(17)+'. A mobile digital ID was deployed in 2024.'+fn(15)]],
  regs:['Cybersecurity and Cybercrime Act 2021','CII Regulations 2026','DPA 2017','National AI Strategy · FAIR Guidelines'],
  buy:['Ministry IT unit','Head of a state-owned body','Procurement committee','IT security officer'],
  svc:['government-cloud','cyber-security-audit','xcellhost-managed-grc','vortex-soc','xcellhost-managed-pki','xcellhost-iso-42001','enterprise-rag-as-a-service','resilience-operations','ai-training-live-online','cyber-range-as-a-service'],
  trg:['A Budget allocation for cyber security or AI'+fn(18),'A CII designation notice'+fn(11),'The planned National Cyber Resiliency Agency'+fn(16),'AI training programmes for public officers'+fn(18)],
  calc:[10,8,35000]}
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
var TODAY=new Date('2026-11-16');
var TR=[
 ['2018-01-15','law','Data Protection Act 2017 in force',[14]],
 ['2021-04-01','market','India–Mauritius CECPA trade agreement in force',[27]],
 ['2021-12-10','law','Cybersecurity and Cybercrime Act 2021 proclaimed',[10]],
 ['2022-02-07','law','Virtual Asset and Initial Token Offering Services Act in force',[8]],
 ['2022-09-07','law','Bank of Mauritius Guideline on Use of Cloud Services issued',[19]],
 ['2023-05-29','law','Bank of Mauritius Guideline on Cyber and Technology Risk Management in force',[10]],
 ['2023-11-30','law','FSC Cloud Computing Services Guidelines issued',[20]],
 ['2024-02-12','market','RuPay and UPI linkage between Mauritius and India launched',[29]],
 ['2025-07-01','law','Fair Share Contribution period starts',[23]],
 ['2025-09-11','market','India announces a US$680 million special economic package',[28],'Sep 2025'],
 ['2026-01-01','law','VAT applies to digital services from foreign suppliers',[22]],
 ['2026-01-23','market','Bank of Mauritius warns of client data from a non-bank lender on the dark web',[10]],
 ['2026-03-15','tech','Maximum public TLS certificate validity falls to 200 days',[42]],
 ['2026-04-10','law','National AI Strategy 2025–2029 launched',[17]],
 ['2026-06-01','law','Critical Information Infrastructure Designation Regulations in operation',[11]],
 ['2026-06-25','market','National Fintech Strategy 2026–2030 launched',[31]],
 ['2026-06-30','law','MRA e-invoicing applies above Rs 80 million turnover',[24]],
 ['2026-07-17','law','Cabinet agrees to ratify the 2024 Protocol to the India–Mauritius tax treaty',[25]],
 ['2026-09-01','law','MRA e-invoicing applies above Rs 40 million turnover',[24]],
 ['2026-10-01','law','VAT: registration relief for foreign suppliers selling only to VAT-registered persons',[22]],
 ['2027-01-01','law','Data Protection Officers Regulations 2026 take effect: an in-house DPO for every controller',[12,13]],
 ['2027-01-12','tech','Windows Server 2016 extended support ends',[41]],
 ['2027-03-15','tech','Maximum public TLS certificate validity falls to 100 days',[42]],
 ['2027-06-01','law','Critical-infrastructure owners must comply with the 2026 Regulations',[11],'By 1 Jun 2027'],
 ['2027-06-30','law','Six-month moratorium on the DPO Regulations ends',[12],'Mid-2027'],
 ['2027-12-31','tech','SAFE subsea cable reaches end of life; T4 is due to replace it',[5],'2027'],
 ['2028-06-30','law','Fair Share Contribution period ends',[23]],
 ['2029-03-15','tech','Maximum public TLS certificate validity falls to 47 days',[42]]
];
var MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var tline=$('#vgTline');
if(tline){var nowDone=false,h='';
  TR.forEach(function(t){var dt=new Date(t[0]),past=dt<=TODAY;
    if(!past&&!nowDone){nowDone=true;h+='<li class="vg-now" data-t="all"><span>Today · 16 Nov 2026</span></li>';}
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
var MUR=47.16; // Rs per US$, Wise mid-market rate 23 Oct 2026
(function(){
  var el=$('#vgChRange');if(el){var rows=[['ICT value added',33.9e3/MUR,36.3e3/MUR,'2024 → 2025'],['ICT service exports',7.9e3/MUR,9.6e3/MUR,'2024 → 2025']];
    var W=520,H=150,x0=150,x1=500,mx=800,sx=function(v){return x0+(x1-x0)*v/mx;},o='';
    for(var g=0;g<=800;g+=200){var gx=sx(g);o+='<line class="gl" x1="'+gx+'" y1="10" x2="'+gx+'" y2="'+(H-28)+'"/><text class="ax" x="'+gx+'" y="'+(H-10)+'" text-anchor="middle">'+g+'</text>';}
    rows.forEach(function(r,i){var y=28+i*48,a=sx(r[1]),b=sx(r[2]),w=Math.max(8,b-a);
      o+='<text class="lb" x="'+(x0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o+='<rect class="trk" x="'+x0+'" y="'+(y-7)+'" width="'+(x1-x0)+'" height="14" rx="7"/>';
      o+='<rect class="br grow c'+i+'" x="'+a+'" y="'+(y-7)+'" width="'+w+'" height="14" rx="7" style="transition-delay:'+(i*0.08)+'s"/>';
      o+='<text class="vl" x="'+x0+'" y="'+(y+22)+'" text-anchor="start">'+r[1].toFixed(1)+'–'+r[2].toFixed(1)+' <tspan class="mut">('+r[3]+')</tspan></text>';});
    el.innerHTML=svg(W,H,o);}
  el=$('#vgChGmv');if(el){var g2=[['2025 (before rebasing)',743.02,'earlier estimate','cn'],['2025 (rebased)',810.3,'growth 3.5%','cb'],['2026 forecast',873.14,'growth 3.0%','co']];
    var W2=520,H2=190,a0=160,a1=410,o2='';
    g2.forEach(function(r,i){var y=30+i*44,w=Math.max(3,(a1-a0)*r[1]/900);
      o2+='<text class="lb" x="'+(a0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o2+='<rect class="br grow '+r[3]+'" x="'+a0+'" y="'+(y-11)+'" width="'+w+'" height="22" rx="5" style="transition-delay:'+(i*0.08)+'s"/>';
      o2+='<text class="vl" x="'+(a0+w+8)+'" y="'+(y+5)+'">Rs '+r[1].toFixed(1)+'B</text><text class="ax" x="'+a0+'" y="'+(y+25)+'">'+r[2]+'</text>';});
    o2+='<text class="ax" x="'+a0+'" y="'+(H2-8)+'">2025 Rs 810.3B ≈ US$'+(810.3/MUR).toFixed(1)+'B at Rs '+MUR+' per US$</text>';
    el.innerHTML=svg(W2,H2,o2);}
  el=$('#vgChDc');if(el){var dc=[['MT Rose Belle site power',3,'cn','3 MW'],['Market, 2025',5,'cb','5 MW'],['Market, 2030 forecast',11,'co','11 MW · CAGR 17.08%']];
    var W3=520,H3=190,b0=190,b1=470,mx3=12,o3='';
    for(var g3=0;g3<=12;g3+=4){var gx3=b0+(b1-b0)*g3/mx3;o3+='<line class="gl" x1="'+gx3+'" y1="12" x2="'+gx3+'" y2="'+(H3-30)+'"/><text class="ax" x="'+gx3+'" y="'+(H3-12)+'" text-anchor="middle">'+g3+' MW</text>';}
    dc.forEach(function(r,i){var y=30+i*46,w=(b1-b0)*r[1]/mx3;o3+='<text class="lb" x="'+(b0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o3+='<rect class="br grow '+r[2]+'" x="'+b0+'" y="'+(y-10)+'" width="'+w+'" height="20" rx="4" style="transition-delay:'+(i*0.1)+'s"/>';
      o3+='<text class="vl" x="'+b0+'" y="'+(y+24)+'">'+r[3]+'</text>';});
    el.innerHTML=svg(W3,H3,o3);}
  el=$('#vgChLine');if(el){var S=[['Online harassment',1697],['Cyberbullying',761],['Scams and fraud',723],['Fake news',603],['Identity theft',438],['Sextortion',225]];
    var W4=520,H4=230,c0=150,c1=430,o4='';
    for(var g4=0;g4<=2000;g4+=500){var gx4=c0+(c1-c0)*g4/2000;o4+='<line class="gl" x1="'+gx4+'" y1="10" x2="'+gx4+'" y2="'+(H4-28)+'"/><text class="ax" x="'+gx4+'" y="'+(H4-10)+'" text-anchor="middle">'+g4.toLocaleString('en-US')+'</text>';}
    S.forEach(function(s,i){var y=24+i*30,w=(c1-c0)*s[1]/2000;
      o4+='<text class="lb" x="'+(c0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(s[0])+'</text>';
      o4+='<rect class="br grow '+(i?'cn':'cb')+'" x="'+c0+'" y="'+(y-8)+'" width="'+Math.max(3,w)+'" height="16" rx="4" style="transition-delay:'+(i*0.06)+'s"/>';
      o4+='<text class="vl" x="'+(c0+w+8)+'" y="'+(y+5)+'">'+s[1].toLocaleString('en-US')+'</text>';});
    el.innerHTML=svg(W4,H4,o4);}
})();

/* ---------- revenue model ---------- */
var TAM=36.3e9/MUR; // proxy: ICT sector value added 2025 (Statistics Mauritius), Rs → US$
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
  $('#vgReset').addEventListener('click',function(){buildModel();$('#vgFx').value='94.20';$('#vgSamIn').value='6';scn=1;$$('#vgScn button').forEach(function(x){x.classList.toggle('on',x.getAttribute('data-v')==='1');});$('#vgScnL').textContent='Base · win rate ×1.0';calc();if(XH.toast)XH.toast('Revenue model reset to default assumptions');});
  $('#vgCsv').addEventListener('click',function(){var fx=+$('#vgFx').value||FX_DASH,rows=[['Vertical','Target accounts','Win rate % (after scenario)','ACV USD','Accounts won','Revenue USD','Revenue INR']];
    RES.forEach(function(r){rows.push([r[0],r[1],r[2].toFixed(1),r[3],r[4].toFixed(2),Math.round(r[5]),Math.round(r[5]*fx)]);});
    rows.push([]);rows.push(['Assumptions: illustrative, not a forecast. TAM proxy = ICT sector value added 2025 (Statistics Mauritius) at Rs '+MUR+' per US$. FX ₹'+fx+' per US$.']);
    var csv=rows.map(function(r){return r.map(function(c){c=String(c==null?'':c);return /[",]/.test(c)?'"'+c.replace(/"/g,'""')+'"':c;}).join(',');}).join('\n');
    if(XH.download)XH.download('xcellhost-mauritius-revenue-model.csv',csv,'text/csv');});
  calc();}

/* ---------- heatmap ---------- */
var LAWP=[ // [law, pillars, verticals ('*' = all)]
 ['Data Protection Act 2017 (registration, 72-hour breach notice)','DS','*'],['DPO Regulations 2026 (in-house DPO from 1 Jan 2027)','DL','*'],
 ['DPA 2017 conditions for transfers abroad','DC',['fin','ind','bpo','hc','hos']],['GDPR alignment and EU adequacy (planned)','DS',['bpo','fin','ind']],
 ['Cybersecurity and Cybercrime Act 2021 (incident reports, annual audit)','SD',['fin','tel','gov','log','hc']],['CII Designation Regulations 2026','SD',['fin','tel','gov','log']],
 ['Bank of Mauritius cyber and technology risk guideline','SD',['fin']],['Bank of Mauritius cloud guideline','CT',['fin']],
 ['FSC Cloud Computing Services Guidelines','CD',['fin','bpo']],['Virtual Asset and ITO Services Act 2021','ST',['fin','bpo']],
 ['Electronic Transactions Act 2000','T',['fin','gov','log','ret']],['National AI Strategy 2025–2029 and FAIR Guidelines','AL','*'],
 ['VAT on foreign digital services','C',['ind','bpo','ret']],['MRA e-invoicing','CT',['ret','hos','mfg','log']],['India–Mauritius DTAA and CECPA','C',['ind']]];
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
   HERO — one rAF loop: drawn Mauritius outline (main island, simplified), place pins, flows to Mumbai
   ===================================================================== */
var ISL=[
 [[57.61,-19.985],[57.67,-20.005],[57.69,-20.06],[57.71,-20.11],[57.74,-20.16],[57.79,-20.19],[57.80,-20.24],[57.78,-20.29],[57.76,-20.34],[57.73,-20.37],[57.71,-20.41],[57.72,-20.45],[57.68,-20.47],[57.60,-20.50],[57.52,-20.52],[57.49,-20.52],[57.43,-20.50],[57.38,-20.49],[57.33,-20.47],[57.31,-20.45],[57.33,-20.43],[57.36,-20.42],[57.37,-20.37],[57.37,-20.33],[57.36,-20.28],[57.38,-20.24],[57.40,-20.21],[57.44,-20.17],[57.47,-20.16],[57.50,-20.155],[57.51,-20.11],[57.51,-20.06],[57.54,-20.03],[57.58,-20.01],[57.61,-19.985]]];
var CITY=[['Ebène',57.49,-20.245,'l'],['Port Louis',57.50,-20.16,'l'],['Côte d’Or',57.56,-20.225,'r'],['Rose Belle',57.60,-20.40,'r'],['Grand Baie',57.58,-20.01,'r']];
var SC=[
 {t:'Market · where the money is',s:'Simplified outline, not to scale · figures sourced below',
  c:'<span class="vg-ck">2025 · sourced</span><div class="vg-cr"><b>Rs 36.3B</b><span>ICT value added</span></div><div class="vg-cr"><b>13.4%</b><span>of GDP from finance</span></div><div class="vg-cr"><b>5 → 11 MW</b><span>data-centre market to 2030</span></div><div class="vg-cr"><b>20,000+</b><span>global business entities</span></div>'},
 {t:'Verticals · who buys first',s:'Wave 1 in the first 6 months, then waves 2 and 3',
  c:'<span class="vg-ck">Wave 1 · months 0–6</span><div class="vg-cch"><i>Financial services</i><i>India corridor</i><i>ICT-BPO &amp; fintech</i></div><span class="vg-ck">Waves 2–3</span><div class="vg-cch m"><i>Hospitality</i><i>Healthcare</i><i>Retail &amp; SMEs</i><i>Telecom &amp; DCs</i><i>Manufacturing</i><i>Logistics</i><i>Public sector</i></div>'},
 {t:'Laws · the Mauritian compliance wave',s:'Customer data stays in Mauritius · support from Mumbai under contract',
  c:'<span class="vg-ck">Dates</span><div class="vg-cl"><b>1 Jun 2026</b><span>CII regulations in operation</span></div><div class="vg-cl"><b>1 Jan 2027</b><span>In-house DPO mandatory</span></div><div class="vg-cl"><b>1 Jun 2027</b><span>CII owners must comply</span></div><div class="vg-cl"><b>2027</b><span>SAFE cable retires</span></div>'},
 {t:'Roadmap · 18 months',s:'Island partner DC · second line from Mumbai',
  c:'<span class="vg-ck">Partner-led entry · goals</span><div class="vg-cp"><span>0–6 m · Prove</span><i><u style="--w:100%"></u></i></div><div class="vg-cp"><span>6–12 m · Establish</span><i><u style="--w:66%"></u></i></div><div class="vg-cp"><span>12–18 m · Scale</span><i><u style="--w:33%"></u></i></div><div class="vg-cr g"><b id="vgHeroRev">US$0.52M</b><span>annualised revenue goal</span></div>'}];
var cv=$('#vgMap'),stage=$('#vgStage'),card=$('#vgCard'),dots=$$('#vgDots [data-k]'),pz=$('#vgPz');
if(cv&&cv.getContext){
  var ctx=cv.getContext('2d'),W=0,H=0,DPR=1,proj=null,isl=[],cityP=[],mum=null;
  var LON0=57.18,LON1=57.93,LAT0=-20.63,LAT1=-19.90;
  var k=0,t0=performance.now(),sceneT=0,visible=true,paused=false,hover=false,raf=0,DUR=5600,last=t0,drawn=REDUCE?1:0,sceneStart=t0;
  function size(){var r=cv.parentNode.getBoundingClientRect();DPR=Math.min(2,window.devicePixelRatio||1);W=Math.max(280,r.width);H=Math.max(260,r.height);
    cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);ctx.setTransform(DPR,0,0,DPR,0,0);
    var narrow=W<520,mx0=narrow?W*0.36:W*0.34,mx1=W*0.95,my0=H*0.06,my1=H*0.94,cf=Math.cos(20.3*Math.PI/180);
    var s=Math.min((mx1-mx0)/((LON1-LON0)*cf),(my1-my0)/(LAT1-LAT0)),ox=mx0+((mx1-mx0)-(LON1-LON0)*cf*s)/2,oy=my0+((my1-my0)-(LAT1-LAT0)*s)/2;
    proj=function(lo,la){return [ox+(lo-LON0)*cf*s,oy+(LAT1-la)*s];};
    isl=ISL.map(function(P){var p=P.map(function(q){return proj(q[0],q[1]);}),sl=[],tl=0;for(var i=1;i<p.length;i++){var l=Math.hypot(p[i][0]-p[i-1][0],p[i][1]-p[i-1][1]);sl.push(l);tl+=l;}return {p:p,sl:sl,tl:tl};});
    cityP=CITY.map(function(c){var q=proj(c[1],c[2]);return {n:c[0],x:q[0],y:q[1],a:c[3]};});
    mum={x:Math.max(W*0.12,60),y:H*0.62};}
  function curve(a,b){var mx=(a.x+b.x)/2,my=Math.min(a.y,b.y)-H*0.16;return [mx,my];}
  function qpt(a,c,b,t){var u=1-t;return [u*u*a.x+2*u*t*c[0]+t*t*b.x,u*u*a.y+2*u*t*c[1]+t*t*b.y];}
  function poly(p){ctx.beginPath();ctx.moveTo(p[0][0],p[0][1]);for(var j=1;j<p.length;j++)ctx.lineTo(p[j][0],p[j][1]);ctx.closePath();}
  function draw(now){var dt=now-last;last=now;
    if(!paused&&!hover&&!REDUCE){sceneT+=dt;if(sceneT>DUR){sceneT=0;go((k+1)%SC.length);}}
    if(drawn<1)drawn=Math.min(1,drawn+dt/1700);
    var T=REDUCE?0:now/1000,e=1-Math.pow(1-drawn,3);
    ctx.clearRect(0,0,W,H);
    // graticule
    ctx.strokeStyle='rgba(255,255,255,0.06)';ctx.lineWidth=1;ctx.beginPath();
    for(var lo=57.3;lo<=57.91;lo+=0.2){var a=proj(lo,LAT0),b=proj(lo,LAT1);ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);}
    for(var la=-20.5;la<=-19.99;la+=0.25){var c=proj(LON0,la),dd=proj(LON1,la);ctx.moveTo(c[0],c[1]);ctx.lineTo(dd[0],dd[1]);}ctx.stroke();
    // outline: progressive stroke per island, then fill
    var fillC=k===2?'rgba(0,102,255,0.24)':'rgba(0,102,255,0.16)';
    isl.forEach(function(I){var pts=I.p,lim=I.tl*e,acc=0;ctx.beginPath();ctx.moveTo(pts[0][0],pts[0][1]);
      for(var i=1;i<pts.length;i++){var L=I.sl[i-1];if(acc+L<=lim){ctx.lineTo(pts[i][0],pts[i][1]);acc+=L;}else{var f=(lim-acc)/L;ctx.lineTo(pts[i-1][0]+(pts[i][0]-pts[i-1][0])*f,pts[i-1][1]+(pts[i][1]-pts[i-1][1])*f);break;}}
      if(e>=1){ctx.closePath();ctx.fillStyle=fillC;ctx.fill();}
      ctx.strokeStyle='#0066FF';ctx.lineWidth=2;ctx.lineJoin='round';ctx.stroke();
      if(k===2&&e>=1){ctx.save();ctx.setLineDash([4,6]);ctx.lineDashOffset=-T*14;ctx.strokeStyle='rgba(255,138,0,0.75)';ctx.lineWidth=1.4;poly(pts);ctx.stroke();ctx.restore();}});
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
      if(k===2&&ci<3){var p2=qpt(mum,cc,cp,0.42);ctx.fillStyle='#0B132B';ctx.strokeStyle='rgba(255,138,0,0.9)';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(p2[0],p2[1],9,0,6.283);ctx.fill();ctx.stroke();
        ctx.fillStyle='#FF8A00';ctx.fillRect(p2[0]-3.5,p2[1]-1,7,5.5);ctx.strokeStyle='#FF8A00';ctx.lineWidth=1.3;ctx.beginPath();ctx.arc(p2[0],p2[1]-1.5,2.6,Math.PI,0);ctx.stroke();}});
    // city pins
    cityP.forEach(function(cp,ci){var ph=REDUCE?0.5:((T*0.8+ci*0.33)%1);
      ctx.strokeStyle='rgba(255,255,255,'+(0.55*(1-ph)).toFixed(3)+')';ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(cp.x,cp.y,5+ph*14,0,6.283);ctx.stroke();
      ctx.fillStyle=(k===3&&ci===0)?'#FF8A00':'#ffffff';ctx.beginPath();ctx.arc(cp.x,cp.y,4.5,0,6.283);ctx.fill();
      ctx.font='600 11px "Sora",sans-serif';ctx.fillStyle='#ffffff';
      var lx,ly;if(cp.a==='b'){ctx.textAlign='left';lx=cp.x+2;ly=cp.y+21;}else{ctx.textAlign=cp.a==='l'?'right':'left';lx=cp.a==='l'?cp.x-10:cp.x+10;ly=cp.y+4;}
      ctx.fillText(cp.n,lx,ly);
      if(k===3&&ci===0){ctx.font='400 9.5px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.fillText('partner DC · planned',lx,ly+13);}
});
    ctx.globalAlpha=1;
    if(k===2&&e>=1){ctx.font='600 10px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.textAlign='center';var c0=proj(57.56,-20.6);ctx.fillText('DATA IN MAURITIUS',c0[0],c0[1]);}
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
