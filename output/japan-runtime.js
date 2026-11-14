
(function(){
'use strict';
var d=document,XH=window.XH||{};
var $=function(s,c){return (c||d).querySelector(s);},$$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));};
var REDUCE=!!XH.reduce||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
var ICONS={server:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',network:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>',eye:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/></svg>',building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg>',route:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H16a3 3 0 000-6H8a3 3 0 010-6h7.5"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 006 0zM18 7l-3 7a3 3 0 006 0z"/></svg>',doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>',trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/></svg>',rupee:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',robot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>','shield-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13-8z"/></svg>',cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',disk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',certificate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="13" rx="2"/><circle cx="12" cy="17" r="3"/><path d="M10.5 19.5L10 23l2-1 2 1-.5-3.5M7 7h10M7 10h6"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',bug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg>',mobile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg>'};

/* build3 has no robots support; strategy briefings must stay out of search indexes */
(function(){try{if(!d.querySelector('meta[name="robots"]')){var m=d.createElement('meta');m.name='robots';m.content='noindex, nofollow';d.head.appendChild(m);}}catch(e){}})();

/* ---------- formatting ---------- */
var FX_DASH=93.91; // ₹ per US$, close 6 Nov 2026 — dashboard labels; ¥157.95 per US$ (BoJ 17:00 rate, 6 Nov 2026)
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
 'third-party-risk-management':['Third-Party Risk Management','S','Supplier assurance and SCS evidence'],
 'sap-hosting':['SAP Hosting','C','SAP landscapes, managed 24×7'],
 'industry-5-smart-manufacturing':['Industry 5.0 Smart Operations','A','AI vision and predictive maintenance'],
 'security-awareness-lms':['Security Awareness LMS','L','Staff phishing and privacy training'],
 'xcellhost-gcc-cloud':['GCC Cloud','C','Cloud and security for capability centres'],
 'global-cloud':['Global Cloud (Tokyo partner DC)','C','In-country VMs managed from Mumbai'],
 'managed-azure':['Managed Azure','C','Azure landing zone and 24×7 operations'],
 'managed-microsoft-365':['Managed Microsoft 365','C','Licences, security and admin'],
 'dpdp-compliance-platform':['DPDP Compliance Platform','D','India data-protection duties for subsidiaries'],
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
 'government-cloud':['Government Cloud','C','Segregated cloud via SIer partners'],
 'cyber-security-audit':['Cyber Security Audit','S','Audit against the unified standards'],
 'xcellhost-managed-grc':['Managed GRC','S','Risk register, policies and evidence'],
 'xcellhost-iso-42001':['ISO 42001 Consulting','A','AI management system for the AI Basic Plan era'],
 'ai-training-live-online':['AI Training Live Online','L','AI literacy for staff']
};
function fn(n){return '<a class="fn" href="#s'+n+'">'+n+'</a>';}
/* verticals */
var V=[
 {k:'mfg',n:'Manufacturing & automotive',full:'Car makers, machinery, materials and their SME suppliers',ic:'building',wave:1,
  why:[['alert','Manufacturing reported <b>91</b> of the 226 ransomware cases in 2025, about 40%. SMEs were about 60% of victims.'+fn(9)],
       ['scale','METI plans its <b>SCS ★3/★4</b> supplier rating by the end of FY2026. Buyers will set the star level each supplier needs.'+fn(26)],
       ['users','Japan has <b>3.37 million</b> SMEs, 99.7% of all enterprises, and many sit in manufacturing supply chains.'+fn(8)]],
  regs:['SCS star rating (by Mar 2027)','Economic Security Promotion Act','APPI 2026','Active Cyber Defense (if designated)'],
  buy:['Plant & OT managers','IT department (jōhō shisutemu-bu)','Procurement / supplier management','CISO'],
  svc:['manufacturing-cloud','ot-security','ot-assessment','acronis-ot','scrutiny-edr','vortex-soc','third-party-risk-management','sap-hosting','industry-5-smart-manufacturing','security-awareness-lms'],
  trg:['An OEM asks suppliers for an SCS ★3 or ★4 rating'+fn(26),'Ransomware at a plant or a supplier'+fn(9),'Windows Server 2016 extended support ends 12 Jan 2027'+fn(38),'A new plant or JV in India'+fn(12)],
  calc:[40,6,45000]},
 {k:'ind',n:'Japanese firms & India corridor',full:'Japanese parents of Indian subsidiaries, plants and GCCs',ic:'globe',wave:1,
  why:[['globe','About <b>1,434</b> Japanese companies are registered in India, around half of them manufacturers, with some 5,200 establishments.'+fn(12)],
       ['trend','Japan and India agreed a <b>¥10 trillion</b> private investment target for the next decade in Aug 2025.'+fn(13)],
       ['rupee','Japan is India\'s fifth-largest FDI source: <b>US$47.59B</b> from Apr 2000 to Dec 2025.'+fn(13)]],
  regs:['APPI Art. 28 (transfers)','India DPDP Act','India–Japan DTAA','HQ audits (ISO 27001)'],
  buy:['India MD / country head','Japan HQ IT department','CFO / finance','Group procurement'],
  svc:['xcellhost-gcc-cloud','global-cloud','managed-azure','managed-microsoft-365','sap-hosting','vortex-soc','dpdp-compliance-platform','xcellhost-iso-27001','cloud-desktop-enterprise-vdi','ai-training-integrated-program'],
  trg:['A new Indian subsidiary, plant or GCC','An HQ security audit or questionnaire','India DPDP compliance deadlines for the subsidiary','Investment under the ¥10 trillion target'+fn(13)],
  calc:[60,12,40000]},
 {k:'game',n:'Gaming, media & SaaS',full:'Game studios, streaming and media, software and SaaS vendors',ic:'play',wave:1,
  why:[['users','The 2026 APPI amendment requires consent through a legal representative for <b>under-16s</b> and gives minors stronger erasure rights.'+fn(18)],
       ['doc','Online games, SNS and video sharing have been covered by the external-transmission (cookie) rules since <b>16 Jun 2023</b>.'+fn(32)],
       ['cloud','Public cloud grew <b>20.3%</b> to ¥4.49 trillion in 2025, with AI raising workloads.'+fn(1)]],
  regs:['APPI 2026 (minors, biometrics)','Telecommunications Business Act','ISMAP-LIU (government SaaS)','Consumption tax on digital services'],
  buy:['CTO','Head of platform / live ops','CISO','Legal & privacy'],
  svc:['gaming-dedicated-server','media-entertainment-cloud','cdn-cloud','waap-as-a-service','kubernetes-api','gpu-servers','xcellhost-cloud-code-signing','digital-risk-monitoring','ai-red-teaming-services','xcellhost-soc-2'],
  trg:['A title launch or live event','A DDoS or account-takeover wave','Minors\' data rules due by Jul 2028'+fn(18),'GPU capacity for AI features','TLS validity cut to 100 days from 15 Mar 2027'+fn(39)],
  calc:[30,8,35000]},
 {k:'semi',n:'Semiconductors & electronics',full:'Chip makers, equipment and materials, electronics brands',ic:'cpu',wave:2,
  why:[['cpu','Japan plans <b>¥10 trillion</b> (about US$65B) of public support for chips and AI by FY2030.'+fn(35)],
       ['building','Mass production of cutting-edge chips is planned in Hokkaido from <b>2027</b>.'+fn(35)],
       ['server','Greater Tokyo has a <b>2,544 MW</b> data-centre pipeline, driven by AI demand.'+fn(6)]],
  regs:['Economic Security Promotion Act','SCS star rating','APPI'],
  buy:['Fab & R&D IT heads','CISO','Security / export-control office','VP engineering'],
  svc:['xcellhost-iot-pki','xcellhost-cloud-code-signing','hsm-hardware-security-module','cloud-hsm','crypto-agility-and-post-quantum-cryptography-readiness','ot-security','gpu-servers','insider-threat','data-security-posture-mgmt','threat-intelligence'],
  trg:['A new fab or R&D site under the ¥10 trillion plan'+fn(35),'A customer asks for SCS ★4'+fn(26),'An IP-theft or insider incident','TLS validity cut to 100 days (2027)'+fn(39)],
  calc:[15,7,70000]},
 {k:'bfsi',n:'BFSI',full:'Banks, insurers, securities, card companies, fintech',ic:'rupee',wave:2,
  why:[['doc','The FSA\'s cybersecurity guidelines of <b>4 Oct 2024</b> list 177 items, more than 100 of them basic measures.'+fn(27)],
       ['shield','Finance and credit cards are among the <b>14 sectors</b> where outsourcing of critical facilities is screened in advance.'+fn(25)],
       ['bell','Designated operators report incidents from <b>1 Oct 2026</b>: promptly, then in detail within about 30 days.'+fn(22)]],
  regs:['FSA cybersecurity guidelines','FISC Security Guidelines','Economic Security Promotion Act','Active Cyber Defense','APPI 2026'],
  buy:['CIO','CISO','Risk management','Third-party risk / procurement'],
  svc:['bfsi-cloud','insurance-cloud','vortex-soc','privileged-access-management','cloud-hsm','cryptographic-posture-management','resilience-operations','red-team-assessment','third-party-risk-management','ai-training-insurance-professionals'],
  trg:['FSA review against the 2024 guidelines'+fn(27),'An outsourcing notice under economic-security screening'+fn(25),'Incident reporting under active cyber defence since 1 Oct 2026'+fn(22),'Crypto inventory and PQC programmes'],
  calc:[20,5,90000]},
 {k:'ret',n:'Retail & e-commerce',full:'Retailers, marketplaces, D2C brands, convenience chains',ic:'cart',wave:2,
  why:[['cart','EMV 3-D Secure was due, in principle, at every e-commerce merchant by <b>end Mar 2025</b>.'+fn(28)],
       ['scale','APPI surcharges will apply to serious violations affecting more than <b>1,000</b> people.'+fn(18)],
       ['eye','New biometric rules cover face data: advance notice, and a right to stop its use.'+fn(18)]],
  regs:['Credit Card Security Guidelines','APPI 2026 (surcharge, biometrics)','Telecommunications Business Act (cookies)','PCI DSS (industry)'],
  buy:['CTO / head of digital','CISO','Payments lead','Privacy officer'],
  svc:['retail-cloud','cdn-cloud','waap-as-a-service','xcellhost-pci-dss','xcellhost-dmarc','digital-risk-monitoring','acronis-cyber-platform','xcellhost-47-day-ssl','enterprise-rag-as-a-service','scrutiny-dlp'],
  trg:['A card-fraud spike or acquirer review'+fn(28),'Face-recognition or loyalty projects under the biometric rules'+fn(18),'Peak sale events','TLS validity cut to 100 days from 15 Mar 2027'+fn(39)],
  calc:[30,7,35000]},
 {k:'hc',n:'Healthcare & pharma',full:'Hospitals, clinics, diagnostics, pharma and medical devices',ic:'heart',wave:2,
  why:[['scale','Since <b>1 Apr 2023</b>, hospitals and clinics must take cybersecurity measures under the Medical Care Act regulation.'+fn(29)],
       ['doc','The MHLW safety guideline for medical information systems, version <b>6.0</b>, was finalised on 31 May 2023.'+fn(29)],
       ['alert','Hospital ransomware has caused EMR outages lasting about two months, in one case through an unpatched VPN.'+fn(29)]],
  regs:['Medical Care Act regulation (2023)','MHLW guideline 6.0','APPI (special-care data)','AI Promotion Act'],
  buy:['Hospital director','Medical information systems office','Pharma CIO','Privacy officer'],
  svc:['healthcare-cloud','pharmaceutical-cloud','acronis-cyber-platform','scrutiny-dlp','multi-factor-authentication','privileged-access-management','vortex-soc','dfir','email-encryption','ai-training-medical-doctors'],
  trg:['Inspection against the cybersecurity duty'+fn(29),'Ransomware on EMR or VPN equipment'+fn(29),'Clinical AI pilots under the AI Basic Plan'+fn(31),'Windows Server 2016 end of support (12 Jan 2027)'+fn(38)],
  calc:[20,6,40000]},
 {k:'tel',n:'Telecom & data centres',full:'Carriers, ISPs, data-centre and colocation operators',ic:'network',wave:3,
  why:[['server','Greater Tokyo has <b>1,086 MW</b> operating and a 2,544 MW pipeline; Japan has over 1.8 GW.'+fn(6)+fn(5)],
       ['shield','Telecommunications is one of the <b>14 sectors</b> under economic-security screening.'+fn(25)],
       ['bell','Designated operators notify key systems and report incidents from <b>1 Oct 2026</b>.'+fn(22)]],
  regs:['Active Cyber Defense','Economic Security Promotion Act','Telecommunications Business Act','APPI'],
  buy:['CTO / network operations','CISO','DC operations head','Procurement'],
  svc:['data-center-build-services','liquid-cooled-ai-data-center','edge-cloud','ndr','ng-siem','threat-intelligence','xcellhost-managed-pki','crypto-agility-and-post-quantum-cryptography-readiness','cyber-range-as-a-service','waap-as-a-service'],
  trg:['Critical-infrastructure reporting since 1 Oct 2026'+fn(22),'New AI data-centre halls in Tokyo and Osaka'+fn(6)+fn(7),'An outsourcing notice for critical facilities'+fn(25),'SOC staffing gaps'],
  calc:[12,6,90000]},
 {k:'log',n:'Logistics & transport',full:'Freight, shipping, ports, airlines, rail and 3PLs',ic:'route',wave:3,
  why:[['route','Road freight, ocean cargo, aviation, airports and railways are among the <b>14 screened sectors</b>.'+fn(25)],
       ['bell','Designated transport operators report incidents under active cyber defence from <b>1 Oct 2026</b>.'+fn(22)],
       ['alert','Over half of 2025 ransomware victims spent <b>¥10 million</b> or more to recover.'+fn(9)]],
  regs:['Economic Security Promotion Act','Active Cyber Defense','SCS star rating','APPI'],
  buy:['Operations director','IT / OT head','CISO','Procurement'],
  svc:['logistics-cloud','iot-cloud','edge-cloud','managed-sd-wan','ot-assessment','acronis-cyber-platform','vortex-soc','xcellhost-iot-pki','digital-twin','secure-file-transfer'],
  trg:['An outage at a depot, port or hub','Shipper requests for an SCS rating'+fn(26),'Incident reporting since 1 Oct 2026'+fn(22),'Telematics and IoT roll-outs'],
  calc:[20,6,40000]},
 {k:'gov',n:'Public sector',full:'Local governments, agencies and public bodies, via SIers',ic:'flag',wave:3,
  why:[['shield-check','Government Cloud runs on <b>five services</b>; Sakura Cloud became the first domestic one in Mar 2026.'+fn(15)],
       ['flag','Of 34,366 local systems, <b>10,013</b> (29.1%) got more time to migrate, about five years.'+fn(17)],
       ['doc','ISMAP-LIU lists SaaS for low-risk work, with a lighter audit cycle.'+fn(16)]],
  regs:['ISMAP / ISMAP-LIU','Government Cloud','Basic Act on Cybersecurity (NCO)','AI Basic Plan'],
  buy:['Local government IT divisions','Digital Agency programmes','System integrators (SIers)','CISO'],
  svc:['government-cloud','vortex-soc','cyber-security-audit','xcellhost-managed-grc','xcellhost-managed-pki','crypto-agility-and-post-quantum-cryptography-readiness','threat-intelligence','xcellhost-iso-42001','ai-training-live-online','cyber-range-as-a-service'],
  trg:['Late migrations: about five more years to move'+fn(17),'AI Basic Plan programmes'+fn(31),'ISMAP-LIU listing for SaaS partners'+fn(16),'An incident or audit finding'],
  calc:[10,5,80000]}
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
var TODAY=new Date('2026-11-13');
var TR=[
 ['2015-10-01','law','Consumption tax reverse charge for B2B electronic services from abroad',[33]],
 ['2022-04-01','law','Amended APPI in force: mandatory breach reports and transfer information duties',[20,21]],
 ['2023-04-01','law','Medical Care Act regulation: cybersecurity duty for hospitals and clinics',[29]],
 ['2023-05-31','law','MHLW safety guideline for medical information systems, version 6.0',[29]],
 ['2023-06-16','law','Telecommunications Business Act external transmission (cookie) rules apply',[32]],
 ['2024-03-15','law','Credit Card Security Guidelines revised: EMV 3-D Secure plan',[28]],
 ['2024-05-17','law','Economic Security Promotion Act: prior screening of critical infrastructure starts',[25]],
 ['2024-10-04','law','FSA Cybersecurity Guidelines for the financial sector published',[27]],
 ['2024-11-12','market','¥10 trillion public support plan for chips and AI to FY2030 reported',[35]],
 ['2025-03-31','law','EMV 3-D Secure due, in principle, at all e-commerce merchants',[28]],
 ['2025-05-16','law','Active Cyber Defense laws enacted',[23]],
 ['2025-06-04','law','AI Promotion Act promulgated; parts take effect',[30]],
 ['2025-07-01','law','National Cyber Office replaces NISC',[24,23],'Jul 2025'],
 ['2025-08-29','market','India–Japan ¥10 trillion private investment target agreed',[13]],
 ['2025-09-01','law','AI Promotion Act fully in force; AI Strategy Headquarters set up',[30]],
 ['2025-12-23','law','AI Basic Plan adopted by Cabinet',[31]],
 ['2026-03-12','market','IDC Japan: public cloud ¥4.49T in 2025, ¥10.1T by 2030',[1]],
 ['2026-03-15','tech','Maximum public TLS certificate validity falls to 200 days',[39]],
 ['2026-03-31','law','Target for local governments to move 20 core systems (end FY2025)',[17]],
 ['2026-03-31','market','Sakura Cloud certified as a Government Cloud service',[15],'Mar 2026'],
 ['2026-07-17','law','APPI amendment (Act No. 56 of 2026) promulgated',[18,19]],
 ['2026-10-01','law','Active cyber defence: critical-infrastructure reporting and neutralisation measures start',[22,23]],
 ['2027-01-12','tech','Windows Server 2016 extended support ends',[38]],
 ['2027-01-17','law','APPI amendment: penalty changes take effect',[18]],
 ['2027-03-15','tech','Maximum public TLS certificate validity falls to 100 days',[39]],
 ['2027-03-31','law','SCS supply-chain security star rating due to launch (end FY2026)',[26],'By Mar 2027'],
 ['2027-11-30','law','Active cyber defence measures fully staged in',[23],'By Nov 2027'],
 ['2028-07-17','law','APPI amendment: main reforms in force at the latest',[18],'By 17 Jul 2028'],
 ['2029-03-15','tech','Maximum public TLS certificate validity falls to 47 days',[39]]
];
var MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var tline=$('#vgTline');
if(tline){var nowDone=false,h='';
  TR.forEach(function(t){var dt=new Date(t[0]),past=dt<=TODAY;
    if(!past&&!nowDone){nowDone=true;h+='<li class="vg-now" data-t="all"><span>Today · 13 Nov 2026</span></li>';}
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
var JPY=157.95; // ¥ per US$, Bank of Japan 17:00 rate 6 Nov 2026
(function(){
  var el=$('#vgChRange');if(el){var rows=[['Public cloud',4493/JPY,10096.2/JPY,'2025 → 2030'],['Cyber security',743.439/JPY,1947.1/JPY,'products → all']];
    var W=520,H=150,x0=130,x1=500,mx=70,sx=function(v){return x0+(x1-x0)*v/mx;},o='';
    for(var g=0;g<=70;g+=10){var gx=sx(g);o+='<line class="gl" x1="'+gx+'" y1="10" x2="'+gx+'" y2="'+(H-28)+'"/><text class="ax" x="'+gx+'" y="'+(H-10)+'" text-anchor="middle">'+g+'</text>';}
    rows.forEach(function(r,i){var y=28+i*48,a=sx(r[1]),b=sx(r[2]),w=Math.max(8,b-a);
      o+='<text class="lb" x="'+(x0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o+='<rect class="trk" x="'+x0+'" y="'+(y-7)+'" width="'+(x1-x0)+'" height="14" rx="7"/>';
      o+='<rect class="br grow c'+i+'" x="'+a+'" y="'+(y-7)+'" width="'+w+'" height="14" rx="7" style="transition-delay:'+(i*0.08)+'s"/>';
      o+='<text class="vl" x="'+a+'" y="'+(y+22)+'" text-anchor="start">'+r[1].toFixed(1)+'–'+r[2].toFixed(1)+' <tspan class="mut">('+r[3]+')</tspan></text>';});
    el.innerHTML=svg(W,H,o);}
  el=$('#vgChGmv');if(el){var g2=[['2024 (derived)',4.493/1.203,'derived','cn'],['2025',4.493,'+20.3%','cb'],['2030 forecast',10.0962,'CAGR 17.6%','co']];
    var W2=520,H2=190,a0=130,a1=420,o2='';
    g2.forEach(function(r,i){var y=30+i*44,w=Math.max(3,(a1-a0)*r[1]/11);
      o2+='<text class="lb" x="'+(a0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o2+='<rect class="br grow '+r[3]+'" x="'+a0+'" y="'+(y-11)+'" width="'+w+'" height="22" rx="5" style="transition-delay:'+(i*0.08)+'s"/>';
      o2+='<text class="vl" x="'+(a0+w+8)+'" y="'+(y+5)+'">¥'+r[1].toFixed(2)+'T <tspan class="mut">('+r[2]+')</tspan></text>';});
    o2+='<text class="ax" x="'+a0+'" y="'+(H2-10)+'">2025 ¥4.49T ≈ US$'+(4493/JPY).toFixed(1)+'B at ¥'+JPY+' per US$</text>';
    el.innerHTML=svg(W2,H2,o2);}
  el=$('#vgChDc');if(el){var dc=[['CBRE · Greater Tokyo, Q1 2026',[[1086,'cb'],[2544,'co']],'1,086 + 2,544'],['C&W · Japan, 2026',[[1800,'cb'],[3500,'co']],'1,800+ + 3,500']];
    var W3=520,H3=150,b0=190,b1=470,mx3=6000,o3='';
    for(var g3=0;g3<=6000;g3+=2000){var gx3=b0+(b1-b0)*g3/mx3;o3+='<line class="gl" x1="'+gx3+'" y1="12" x2="'+gx3+'" y2="'+(H3-30)+'"/><text class="ax" x="'+gx3+'" y="'+(H3-12)+'" text-anchor="middle">'+(g3?(g3/1000)+' GW':'0')+'</text>';}
    dc.forEach(function(r,i){var y=34+i*48,x=b0;o3+='<text class="lb" x="'+(b0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      r[1].forEach(function(s,j){var w=(b1-b0)*s[0]/mx3;o3+='<rect class="br grow '+s[1]+'" x="'+x+'" y="'+(y-10)+'" width="'+w+'" height="20" rx="4" style="transition-delay:'+(i*0.08+j*0.1)+'s"/>';x+=w;});
      o3+='<text class="vl" x="'+b0+'" y="'+(y+24)+'">'+r[2]+' MW</text>';});
    el.innerHTML=svg(W3,H3,o3);}
  el=$('#vgChLine');if(el){var S=[['Security products',743.439,'IDC Japan 2025 · +13.8%','cn'],['Whole market',1947.1,'Yano FY2025 · +9.2%','cb']];
    var W4=520,H4=170,c0=150,c1=440,o4='';
    for(var g4=0;g4<=2000;g4+=500){var gx4=c0+(c1-c0)*g4/2000;o4+='<line class="gl" x1="'+gx4+'" y1="10" x2="'+gx4+'" y2="'+(H4-30)+'"/><text class="ax" x="'+gx4+'" y="'+(H4-12)+'" text-anchor="middle">'+g4+'</text>';}
    S.forEach(function(s,i){var y=34+i*52,w=(c1-c0)*s[1]/2000;
      o4+='<text class="lb" x="'+(c0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(s[0])+'</text>';
      o4+='<rect class="br grow '+s[3]+'" x="'+c0+'" y="'+(y-9)+'" width="'+Math.max(3,w)+'" height="18" rx="4" style="transition-delay:'+(i*0.1)+'s"/>';
      o4+='<text class="vl" x="'+c0+'" y="'+(y+24)+'">¥'+Math.round(s[1]).toLocaleString('en-US')+'B <tspan class="mut">('+s[2]+')</tspan></text>';});
    el.innerHTML=svg(W4,H4,o4);}
})();

/* ---------- revenue model ---------- */
var TAM=(4.493e12+1.9471e12)/JPY; // 2025: IDC Japan public cloud + Yano FY2025 cyber security, ¥ → US$
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
  $('#vgReset').addEventListener('click',function(){buildModel();$('#vgFx').value='93.91';$('#vgSamIn').value='3';scn=1;$$('#vgScn button').forEach(function(x){x.classList.toggle('on',x.getAttribute('data-v')==='1');});$('#vgScnL').textContent='Base · win rate ×1.0';calc();if(XH.toast)XH.toast('Revenue model reset to default assumptions');});
  $('#vgCsv').addEventListener('click',function(){var fx=+$('#vgFx').value||FX_DASH,rows=[['Vertical','Target accounts','Win rate % (after scenario)','ACV USD','Accounts won','Revenue USD','Revenue INR']];
    RES.forEach(function(r){rows.push([r[0],r[1],r[2].toFixed(1),r[3],r[4].toFixed(2),Math.round(r[5]),Math.round(r[5]*fx)]);});
    rows.push([]);rows.push(['Assumptions: illustrative, not a forecast. TAM = IDC Japan 2025 public cloud + Yano FY2025 cyber security at ¥'+JPY+' per US$. FX ₹'+fx+' per US$.']);
    var csv=rows.map(function(r){return r.map(function(c){c=String(c==null?'':c);return /[",]/.test(c)?'"'+c.replace(/"/g,'""')+'"':c;}).join(',');}).join('\n');
    if(XH.download)XH.download('xcellhost-japan-revenue-model.csv',csv,'text/csv');});
  calc();}

/* ---------- heatmap ---------- */
var LAWP=[ // [law, pillars, verticals ('*' = all)]
 ['APPI (2020 amendment, breach reporting)','DS','*'],['APPI amendment 2026 (surcharges, minors, AI data)','DA','*'],
 ['APPI Art. 28 cross-border transfers','DC',['ind','game','bfsi','hc','ret']],['Telecommunications Business Act (external transmission)','DS',['game','ret','tel']],
 ['Active Cyber Defense laws','SD',['bfsi','tel','log','gov','mfg']],['Basic Act on Cybersecurity / NCO','S',['gov','tel','bfsi']],
 ['Economic Security Promotion Act','CST',['bfsi','tel','log','semi']],['SCS supply-chain star rating','SL',['mfg','semi','log','ind']],
 ['FSA cybersecurity guidelines / FISC','CSD',['bfsi']],['Credit Card Security Guidelines','ST',['ret','bfsi']],
 ['Medical Care Act regulation + MHLW 6.0','CSD',['hc']],['AI Promotion Act + AI Basic Plan','AL','*'],
 ['ISMAP / ISMAP-LIU','C',['gov','game']],['Government Cloud','C',['gov']],['Consumption tax reverse charge','C',['ind','game']]];
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
   HERO — one rAF loop: drawn Japan outline (4 main islands), city pins, flows to Mumbai
   ===================================================================== */
var ISL=[
 [[141.5,41.4],[140.9,41.5],[140.0,40.6],[140.0,39.6],[139.6,38.8],[139.4,38.2],[138.6,37.8],[137.3,37.5],[136.8,37.3],[136.7,36.7],[136.0,36.0],[135.3,35.7],[134.2,35.6],[133.0,35.5],[132.0,35.2],[131.2,34.5],[130.9,34.1],[131.8,34.0],[132.6,34.3],[133.5,34.4],[134.4,34.7],[135.2,34.6],[135.1,34.2],[135.3,33.7],[135.8,33.5],[136.3,34.2],[136.9,34.6],[137.3,34.7],[138.2,34.6],[138.8,34.6],[139.1,35.2],[139.7,35.2],[139.9,35.0],[140.4,35.2],[140.8,35.7],[140.6,36.4],[141.0,37.0],[141.0,38.3],[141.6,38.9],[141.9,39.6],[141.4,40.6],[141.5,41.4]],
 [[141.2,41.8],[140.0,41.5],[140.1,42.6],[139.8,43.2],[141.4,43.3],[141.6,45.4],[142.0,45.4],[143.3,44.4],[145.3,44.3],[145.2,43.6],[145.8,43.3],[144.0,42.9],[143.2,42.0],[141.8,42.6],[141.2,41.8]],
 [[130.9,33.9],[130.3,33.6],[129.7,33.4],[129.8,32.7],[130.2,32.4],[130.2,31.3],[130.7,31.0],[131.1,31.4],[131.5,31.9],[131.7,32.6],[132.0,33.0],[131.6,33.6],[130.9,33.9]],
 [[132.5,33.0],[132.9,33.9],[133.6,34.3],[134.6,34.2],[134.7,33.8],[134.2,33.3],[133.6,33.4],[133.0,32.8],[132.5,33.0]]];
var CITY=[['Tokyo',139.69,35.69,'r'],['Osaka',135.5,34.69,'l'],['Nagoya',136.91,35.18,'b'],['Fukuoka',130.4,33.59,'l'],['Sapporo',141.35,43.06,'l']];
var SC=[
 {t:'Market · where the money is',s:'Simplified outline, not to scale · figures sourced below',
  c:'<span class="vg-ck">2025 · ¥ · sourced</span><div class="vg-cr"><b>¥4.49T</b><span>public cloud</span></div><div class="vg-cr"><b>¥1.95T</b><span>cyber security</span></div><div class="vg-cr"><b>1.8 GW+</b><span>operational DC capacity</span></div><div class="vg-cr"><b>3.37M</b><span>SMEs, 99.7% of firms</span></div>'},
 {t:'Verticals · who buys first',s:'Wave 1 in the first 6 months, then waves 2 and 3',
  c:'<span class="vg-ck">Wave 1 · months 0–6</span><div class="vg-cch"><i>Manufacturing</i><i>India corridor</i><i>Gaming &amp; SaaS</i></div><span class="vg-ck">Waves 2–3</span><div class="vg-cch m"><i>Semiconductors</i><i>BFSI</i><i>Retail</i><i>Healthcare</i><i>Telecom &amp; DCs</i><i>Logistics</i><i>Public sector</i></div>'},
 {t:'Laws · the Japanese compliance wave',s:'Customer data stays in Japan · support from Mumbai under contract',
  c:'<span class="vg-ck">Dates</span><div class="vg-cl"><b>1 Oct 2026</b><span>Active cyber defence reporting</span></div><div class="vg-cl"><b>17 Jan 2027</b><span>APPI penalty changes</span></div><div class="vg-cl"><b>Mar 2027</b><span>SCS star rating due</span></div><div class="vg-cl"><b>Jul 2028</b><span>APPI main reforms, latest</span></div>'},
 {t:'Roadmap · 18 months',s:'Tokyo partner DC · second line from Mumbai',
  c:'<span class="vg-ck">Partner-led entry · goals</span><div class="vg-cp"><span>0–6 m · Prove</span><i><u style="--w:100%"></u></i></div><div class="vg-cp"><span>6–12 m · Establish</span><i><u style="--w:66%"></u></i></div><div class="vg-cp"><span>12–18 m · Scale</span><i><u style="--w:33%"></u></i></div><div class="vg-cr g"><b id="vgHeroRev">US$0.92M</b><span>annualised revenue goal</span></div>'}];
var cv=$('#vgMap'),stage=$('#vgStage'),card=$('#vgCard'),dots=$$('#vgDots [data-k]'),pz=$('#vgPz');
if(cv&&cv.getContext){
  var ctx=cv.getContext('2d'),W=0,H=0,DPR=1,proj=null,isl=[],cityP=[],mum=null;
  var LON0=128.8,LON1=146.4,LAT0=30.6,LAT1=45.9;
  var k=0,t0=performance.now(),sceneT=0,visible=true,paused=false,hover=false,raf=0,DUR=5600,last=t0,drawn=REDUCE?1:0,sceneStart=t0;
  function size(){var r=cv.parentNode.getBoundingClientRect();DPR=Math.min(2,window.devicePixelRatio||1);W=Math.max(280,r.width);H=Math.max(260,r.height);
    cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);ctx.setTransform(DPR,0,0,DPR,0,0);
    var narrow=W<520,mx0=narrow?W*0.36:W*0.34,mx1=W*0.95,my0=H*0.06,my1=H*0.94,cf=Math.cos(38*Math.PI/180);
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
    for(var lo=130;lo<=146;lo+=4){var a=proj(lo,LAT0),b=proj(lo,LAT1);ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);}
    for(var la=32;la<=45;la+=3){var c=proj(LON0,la),dd=proj(LON1,la);ctx.moveTo(c[0],c[1]);ctx.lineTo(dd[0],dd[1]);}ctx.stroke();
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
      if(k===3&&ci===0){ctx.font='400 9.5px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.fillText('partner DC',lx,ly+13);}
});
    ctx.globalAlpha=1;
    if(k===2&&e>=1){ctx.font='600 10px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.textAlign='center';var c0=proj(143.9,37.6);ctx.fillText('DATA IN JAPAN',c0[0],c0[1]);}
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
