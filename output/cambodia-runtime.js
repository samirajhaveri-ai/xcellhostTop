
(function(){
'use strict';
var d=document,XH=window.XH||{};
var $=function(s,c){return (c||d).querySelector(s);},$$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));};
var REDUCE=!!XH.reduce||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
var ICONS={building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg>',route:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H16a3 3 0 000-6H8a3 3 0 010-6h7.5"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 006 0zM18 7l-3 7a3 3 0 006 0z"/></svg>',doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>',trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/></svg>',rupee:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',robot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>','shield-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13-8z"/></svg>',cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',disk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',certificate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="13" rx="2"/><circle cx="12" cy="17" r="3"/><path d="M10.5 19.5L10 23l2-1 2 1-.5-3.5M7 7h10M7 10h6"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',bug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg>',mobile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg>',server:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>',home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 9.5V21h14V9.5"/></svg>',box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>',layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>'};

/* build3 has no robots support; strategy briefings must stay out of search indexes */
(function(){try{if(!d.querySelector('meta[name="robots"]')){var m=d.createElement('meta');m.name='robots';m.content='noindex, nofollow';d.head.appendChild(m);}}catch(e){}})();

/* ---------- formatting ---------- */
var FX_DASH=93.89; // ₹ per US$, provisional close 6 Nov 2026 (Telangana Today/PTI); KHR averaged 4,011 per US$ in 2025 (NBC FSR via Khmer Times)
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
 'bfsi-cloud':['BFSI Cloud','C','Bank-grade cloud in a Phnom Penh partner DC'],
 'vortex-soc':['Vortex SOC (SIEM · SOAR · UEBA)','S','24×7 detection and incident response'],
 'cloud-hsm':['Cloud HSM','T','Keys for payments, signing and encryption'],
 'privileged-access-management':['Privileged Access Management','S','Vaulted admin access, session recording'],
 'multi-factor-authentication':['Multi-Factor Authentication','S','Strong sign-in, including cloud admins'],
 'waap-as-a-service':['WAAP as a Service','S','WAF, API and DDoS protection'],
 'red-team-assessment':['Red Team Assessment','S','Scenario testing of defences'],
 'resilience-operations':['Managed Resilience Operations','D','Backup, DR and measured drills'],
 'third-party-risk-management':['Third-Party Risk Management','S','Supplier and outsourcing due diligence'],
 'xcellhost-pci-dss':['PCI DSS Compliance','S','Card-data scope and evidence'],
 'smb-cloud':['SMB Cloud','C','Simple servers for small firms'],
 'retail-cloud':['Retail Cloud','C','Commerce, POS and loyalty platforms'],
 'cdn-cloud':['CDN Cloud','C','Fast delivery for web and apps'],
 'email-security-smb':['Email Security','S','Phishing and BEC protection'],
 'xcellhost-dmarc':['DMARC','S','Stop brand and invoice spoofing'],
 'digital-risk-monitoring':['Digital Risk Monitoring','S','Fake shops, apps, domains and leaks'],
 'cloud-disaster-recovery-smb':['Cloud DR for SMB','D','Replicate servers, fail over in minutes'],
 'managed-microsoft-365':['Managed Microsoft 365','C','Licences, security and admin'],
 'xcellhost-47-day-ssl':['47-Day SSL Automation','T','Ready for 100 and 47-day certificates'],
 'manufacturing-cloud':['Manufacturing Cloud','C','ERP, MES and factory apps'],
 'sap-b1-hana-on-cloud':['SAP Business One on HANA Cloud','C','ERP for mid-sized exporters'],
 'managed-sd-wan':['Managed SD-WAN','C','Factory, branch and site links'],
 'scrutiny-edr':['Scrutiny EDR','S','Endpoint detection and response'],
 'acronis-cyber-platform':['Acronis Cyber Platform','D','Backup, DR and anti-ransomware'],
 'ot-assessment':['OT Security Assessment','S','IEC 62443-aligned plant review'],
 'iot-cloud':['IoT Cloud','C','Sensor and tracker telemetry'],
 'ai-training-integrated-program':['Integrated AI Training Program','L','12-week blended GenAI course'],
 'threat-intelligence':['Threat Intelligence','S','Early warning on campaigns and leaks'],
 'xcellhost-managed-pki':['Managed PKI','T','Private CA operations'],
 'crypto-agility-and-post-quantum-cryptography-readiness':['PQC Readiness','T','Crypto-agility and post-quantum roadmap'],
 'gpu-servers':['GPU Servers','A','Training and inference capacity'],
 'xcellhost-dedicated-inference':['Dedicated Inference','A','Private model serving'],
 'xcellhost-iso-27001':['ISO 27001 Consulting','S','ISMS for customer and regulator audits'],
 'edge-cloud':['Edge Cloud','C','Compute at site, port and depot'],
 'cyber-range-as-a-service':['Cyber Range as a Service','L','Live-fire SOC and IR exercises'],
 'ai-red-teaming-services':['AI Red Teaming','S','Adversarial testing of LLM apps'],
 'hospitality-cloud':['Hospitality Cloud','C','PMS, booking and guest apps'],
 'managed-wifi':['Managed Wi-Fi','C','Guest and staff Wi-Fi, managed'],
 'smb-cloud-desktop':['SMB Cloud Desktop','C','Desktops for small teams'],
 'ai-as-a-service':['AI as a Service','A','Forecasting, routing and document AI'],
 'ai-training-live-online':['AI Training Live Online','L','AI literacy for staff'],
 'digital-twin':['Digital Twin','A','Models of plants, sites and fields'],
 'construction-cloud':['Construction Cloud','C','Project, BIM and site-office apps'],
 'cloud-desktop-enterprise-vdi':['Cloud Desktop (VDI)','C','Secure desktops for design teams'],
 'power-bi':['Power BI','A','Dashboards for cost and progress'],
 'healthcare-cloud':['Healthcare Cloud','C','HIS, PACS and EMR hosting'],
 'scrutiny-dlp':['Scrutiny DLP','D','Stop patient and customer data leakage'],
 'email-encryption':['Email Encryption','D','Protect reports and records in transit'],
 'xcellhost-vdpo':['vDPO as a Service','D','DPO, records and breach playbooks'],
 'ai-training-medical-doctors':['AI Training for Doctors','L','Safe clinical use of AI'],
 'higher-education-cloud':['Higher Education Cloud','C','LMS, portals and research computing'],
 'managed-google-workspace':['Managed Google Workspace','C','Campus mail and collaboration'],
 'security-awareness-lms':['Security Awareness LMS','L','Phishing and fraud awareness for staff'],
 'ai-training-educators':['AI Training for Educators','L','AI in teaching and assessment'],
 'enterprise-rag-as-a-service':['Enterprise RAG as a Service','A','Grounded AI assistants on own documents'],
 'government-cloud':['Government Cloud','C','Segregated cloud patterns for public bodies'],
 'cyber-security-audit':['Cyber Security Audit','S','Audit preparation for new cyber rules'],
 'xcellhost-managed-grc':['Managed GRC','S','Risk register, policies and evidence'],
 'hsm-hardware-security-module':['HSM (on-premises)','T','Keys kept in Cambodia'],
 'dfir':['DFIR','S','Incident response and forensics'],
 'xcellhost-iso-42001':['ISO 42001 Consulting','A','AI management system for public AI use']
};
function fn(n){return '<a class="fn" href="#s'+n+'">'+n+'</a>';}
/* verticals */
var V=[
 {k:'bfsi',n:'Banks, MFIs & payments',full:'Commercial and specialised banks, microfinance, payment providers and insurers',ic:'building',wave:1,
  why:[['building','The banking system held <b>US$101.8B</b> of assets at end-2025, up 9.5%, across 59 commercial banks, 4 specialised banks and 89 MFIs.'+fn(8)],
       ['mobile','<b>18.9 million</b> e-wallet accounts and <b>1.325 billion</b> Bakong transactions in 2025.'+fn(8)],
       ['shield','NBC\'s new Technology and Cyber Risk Management Guidelines replace the 2019 framework.'+fn(10)+fn(11)]],
  regs:['NBC TCRMG (replaces 2019 TRM)','Banking Law Art. 47 (secrecy)','Draft PDP law','Online Scams Law 2026','CamDX e-KYC · Bakong · KHQR'],
  buy:['CIO / CTO','CISO','Head of IT risk','Compliance','Head of digital banking','Procurement'],
  svc:['bfsi-cloud','vortex-soc','cloud-hsm','privileged-access-management','multi-factor-authentication','waap-as-a-service','red-team-assessment','resilience-operations','third-party-risk-management','xcellhost-pci-dss'],
  trg:['TCRMG gaps: cloud asset inventory, MFA for cloud admins, HSM key control'+fn(11),'Fraud and identity-misuse cases under the 2026 Online Scams Law'+fn(18),'Draft PDP law, as drafted: certified DPO and breach notice'+fn(13),'Core-banking, app or KHQR channel launches','Windows Server 2016 extended support ends 12 Jan 2027'+fn(44)],
  calc:[40,10,40000]},
 {k:'dig',n:'Digital, e-commerce & SMEs',full:'Online sellers, platforms, fintech apps and formal SMEs',ic:'cart',wave:1,
  why:[['users','<b>12.0 million</b> internet users (67.3%) and 21.7 million mobile connections in Oct 2025.'+fn(1)],
       ['trend','Retail and e-commerce is the fastest-growing ICT buyer, at a projected <b>8.91%</b> a year to 2031.'+fn(2)],
       ['building','About <b>44,000</b> formally registered MSMEs employ 476,200 people.'+fn(37)]],
  regs:['E-Commerce Law 2019 (MoC licence)','Sub-decree 65 (VAT on e-commerce)','Draft PDP law','Online Scams Law 2026'],
  buy:['Founder / owner','CTO','Head of e-commerce','Finance head','Outsourced IT provider'],
  svc:['smb-cloud','retail-cloud','cdn-cloud','waap-as-a-service','email-security-smb','xcellhost-dmarc','digital-risk-monitoring','cloud-disaster-recovery-smb','managed-microsoft-365','xcellhost-47-day-ssl'],
  trg:['E-commerce licence or permit, plus the MPTC online permit'+fn(20),'Fake shops, phishing domains and payment scams','Public TLS certificate validity falls to 100 days on 15 Mar 2027'+fn(45),'A first security questionnaire from a bank or marketplace','Ransomware or business-email compromise'],
  calc:[80,8,8000]},
 {k:'mfg',n:'Garments & manufacturing',full:'Garment, footwear and travel-goods factories, electronics and SEZ manufacturers',ic:'cpu',wave:1,
  why:[['trend','Garments, footwear and travel goods earned <b>US$15.5B</b> in 2025, up 15.7%, about half of all exports.'+fn(34)],
       ['users','More than <b>1,500</b> factories and branches employ over 900,000 workers.'+fn(34)],
       ['building','CDC approved <b>630</b> projects worth nearly US$10B in 2025, 243 of them inside SEZs.'+fn(31)]],
  regs:['Law on Investment 2021 (QIP)','Draft PDP law (HR and payroll data)','Telecom Law 2015 (connectivity)'],
  buy:['Factory GM','Group CIO (often at HQ abroad)','Finance controller','Brand-audit / compliance lead','Procurement'],
  svc:['manufacturing-cloud','sap-b1-hana-on-cloud','managed-sd-wan','scrutiny-edr','acronis-cyber-platform','ot-assessment','email-security-smb','xcellhost-dmarc','iot-cloud','ai-training-integrated-program'],
  trg:['A new factory or SEZ project approved by CDC'+fn(31),'Buyer and brand audits of supplier IT and data','Invoice and payment-redirect fraud','ERP upgrade or move off on-site servers','Windows Server 2016 end of support on 12 Jan 2027'+fn(44)],
  calc:[40,8,25000]},
 {k:'tel',n:'Telecom, DC & cloud providers',full:'Mobile operators, ISPs, colocation operators and local clouds',ic:'globe',wave:2,
  why:[['zap','5G went live on <b>1 Jan 2026</b> through Cellcard, Metfone and Smart, starting with Phnom Penh and 14 provinces.'+fn(38)],
       ['server','Cambodia had about <b>7 MW</b> of live data-centre capacity in Dec 2024; ByteDC runs 3 MW to a Tier III design.'+fn(5)],
       ['cloud','ByteDC launched a sovereign cloud on Huawei Cloud Stack in Dec 2025; Viettel IDC launched Vcloudia in Aug 2025.'+fn(6)+fn(4)]],
  regs:['Telecom Law 2015 (TRC)','MPTC cloud-service licence','Sub-decree 23 (NIG)','Draft Cybersecurity Law','Draft PDP law'],
  buy:['CTO','Head of DC operations','CISO','Cloud / enterprise product head','Partnerships'],
  svc:['vortex-soc','threat-intelligence','xcellhost-managed-pki','crypto-agility-and-post-quantum-cryptography-readiness','gpu-servers','xcellhost-dedicated-inference','xcellhost-iso-27001','edge-cloud','cyber-range-as-a-service','ai-red-teaming-services'],
  trg:['5G enterprise and IoT offers after the 1 Jan 2026 launch'+fn(38),'Enterprise customers asking for ISO 27001 and SOC 2 evidence','The draft Cybersecurity Law moving to adoption'+fn(16),'New sovereign-cloud and AI capacity that needs managed services'+fn(6),'Post-quantum migration roadmaps'],
  calc:[10,10,50000]},
 {k:'tour',n:'Tourism & hospitality',full:'Hotels, resorts, tour and travel operators, airlines and attractions',ic:'home',wave:2,
  why:[['trend','Tourism earned about <b>US$3.88B</b> in 2025, up 6.6%, from 5.57 million international visitors (down 16.9%).'+fn(35)],
       ['users','Domestic trips rose 11.7% to <b>25.16 million</b> in 2025.'+fn(35)],
       ['alert','International arrivals fell 44% to 2.25 million in Jan–Aug 2026, so operators are cutting costs.'+fn(32)]],
  regs:['Draft PDP law (guest data)','E-Commerce Law 2019 (online booking)','Bakong · KHQR payments'],
  buy:['Owner / GM','Head of IT','Finance director','Revenue / e-commerce manager'],
  svc:['hospitality-cloud','managed-wifi','xcellhost-pci-dss','email-security-smb','waap-as-a-service','smb-cloud-desktop','cloud-disaster-recovery-smb','multi-factor-authentication','ai-as-a-service','ai-training-live-online'],
  trg:['Cost reviews during the 2026 arrivals slump'+fn(32),'PMS or booking-engine migration','Card-scheme and payment-provider security reviews','A guest-data leak or booking-fraud wave','New hotel and resort openings'],
  calc:[30,8,12000]},
 {k:'agri',n:'Agriculture & agro-processing',full:'Rice millers, exporters, plantations and food processors',ic:'box',wave:3,
  why:[['trend','Agricultural exports topped <b>US$6.46B</b> in 2025, up 7.31%.'+fn(36)],
       ['box','Rice exports earned over <b>US$749M</b> in 2025, up from about US$552M in 2024.'+fn(36)],
       ['building','Large-scale agriculture and agro-processing were among the main project types CDC approved in 2025.'+fn(31)]],
  regs:['Law on Investment 2021 (QIP)','E-Commerce Law 2019 (B2B portals)','Draft PDP law'],
  buy:['Owner / MD','Finance head','Export and logistics manager','Mill or plant manager'],
  svc:['iot-cloud','edge-cloud','sap-b1-hana-on-cloud','smb-cloud','ai-as-a-service','digital-twin','managed-sd-wan','acronis-cyber-platform','email-security-smb','xcellhost-dmarc'],
  trg:['Buyer demands for export traceability','A new mill or processing plant','ERP or accounting move to the cloud','Invoice and payment-redirect fraud','Weather risk planning: the World Bank flags El Niño for 2027'+fn(32)],
  calc:[15,7,15000]},
 {k:'con',n:'Construction & real estate',full:'Developers, contractors, SEZ developers and infrastructure projects',ic:'layers',wave:3,
  why:[['building','Approved investment rose 45% to nearly <b>US$10B</b> in 2025, including the Funan Techo Canal, hydropower, solar and dry ports.'+fn(31)],
       ['alert','The World Bank cites a real-estate correction and tighter credit as a drag on 2026 investment.'+fn(32)],
       ['zap','Grid power cost <b>US$0.158 per kWh</b> on the EAC price list cited by Knight Frank, a cost for on-site servers.'+fn(5)]],
  regs:['Law on Investment 2021','Draft PDP law (buyer data)','Online Scams Law 2026 (identity misuse)'],
  buy:['Project director','CFO','Head of IT','Design / BIM lead'],
  svc:['construction-cloud','digital-twin','cloud-desktop-enterprise-vdi','managed-sd-wan','edge-cloud','managed-microsoft-365','power-bi','acronis-cyber-platform','email-security-smb','xcellhost-dmarc'],
  trg:['Mobilisation of a large infrastructure project','Site-office connectivity and shared drawings','Payment-redirect fraud on contractor invoices','BIM and rendering workloads outgrowing laptops','Cost control under tighter credit'+fn(32)],
  calc:[20,7,15000]},
 {k:'hc',n:'Healthcare',full:'Public and private hospitals, clinics, labs and insurers',ic:'heart',wave:2,
  why:[['doc','The National Digital Health Strategy 2024–2035 aims to streamline <b>over 100</b> fragmented health systems.'+fn(39)],
       ['building','Healthcare facilities were among the major project types CDC approved in 2025.'+fn(31)],
       ['shield','Mordor places Cambodia in <b>Tier 4</b> of the ITU Global Cybersecurity Index.'+fn(2)]],
  regs:['National Digital Health Strategy 2024–2035','Draft PDP law','Draft Cybersecurity Law'],
  buy:['Hospital director','Head of IT','Head of medical records','Procurement'],
  svc:['healthcare-cloud','scrutiny-dlp','email-encryption','acronis-cyber-platform','multi-factor-authentication','vortex-soc','resilience-operations','xcellhost-vdpo','ai-as-a-service','ai-training-medical-doctors'],
  trg:['System consolidation under the digital health strategy'+fn(39),'New private hospitals and clinic chains','Ransomware on hospital systems','Insurer and lab integrations','Draft PDP law, as drafted: certified DPO for every controller'+fn(13)],
  calc:[15,8,15000]},
 {k:'edu',n:'Education & skills',full:'Universities, schools, training institutes and corporate L&D',ic:'book',wave:2,
  why:[['brain','MPTC launched an AI readiness assessment report on <b>2 Jul 2025</b> while consulting on the draft AI strategy.'+fn(26)],
       ['book','Human resource development is the first of six priorities in the draft National AI Strategy 2025–2030.'+fn(25)],
       ['globe','India funded a ~US$1.2M Centre of Excellence for software development at the Cambodian Academy of Digital Technology.'+fn(41)]],
  regs:['Draft National AI Strategy 2025–2030','Digital Government Policy 2022–2035','Draft PDP law (student data)'],
  buy:['Rector','CIO','Deans','Corporate L&D heads','Development-partner programme leads'],
  svc:['higher-education-cloud','managed-google-workspace','managed-microsoft-365','security-awareness-lms','cyber-range-as-a-service','ai-training-educators','ai-training-integrated-program','ai-training-live-online','enterprise-rag-as-a-service','multi-factor-authentication'],
  trg:['A new academic year and intake','Annual AI action plans under the draft strategy'+fn(25),'Development-partner funded digital-skills programmes','Phishing and account-takeover incidents','Corporate AI upskilling budgets'],
  calc:[20,10,8000]},
 {k:'gov',n:'Government & public bodies',full:'Ministries, provinces, agencies and state enterprises',ic:'flag',wave:3,
  why:[['building','Government and public sector was the largest ICT buyer in 2025, at <b>21.14%</b> of spend.'+fn(2)],
       ['doc','The Digital Government Policy 2022–2035 was approved on <b>28 Jan 2022</b>; a draft Law on Digital Government was in consultation in Apr 2026.'+fn(24)+fn(15)],
       ['server','Knight Frank expected a US$30M MPTC data centre in 2025; Mordor reports a planned Tier IV National Data Center.'+fn(5)+fn(2)]],
  regs:['Digital Government Policy + draft law','Draft Cybersecurity Law','Draft PDP law','Sub-decree 252 (ID data)','Telecom Law 2015'],
  buy:['Ministry IT departments','Digital Government Committee secretariat','MPTC','Development partners (funding)','Procurement'],
  svc:['government-cloud','cyber-security-audit','xcellhost-managed-grc','xcellhost-managed-pki','hsm-hardware-security-module','vortex-soc','dfir','resilience-operations','xcellhost-iso-42001','security-awareness-lms'],
  trg:['Adoption of the cybersecurity and digital-government laws'+fn(16)+fn(15),'Commissioning of national data-centre capacity'+fn(5),'AI strategy achievement reports planned for 2026 and 2028'+fn(25),'EU, AFD and India-funded capacity programmes'+fn(14)+fn(41),'Partner-led tenders through Cambodian primes'],
  calc:[8,5,50000]}
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
 ['2015-12-17','law','Law on Telecommunications promulgated: telecom services need TRC authorisation',[21]],
 ['2019-11-02','law','Law on Electronic Commerce enacted: MoC licence or permit for online sellers',[20]],
 ['2020-10-28','market','National Bank of Cambodia launches the Bakong payment system',[9],'Oct 2020'],
 ['2021-02-16','law','Sub-decree 23 on the National Internet Gateway issued',[22]],
 ['2021-04-08','law','Sub-decree 65: VAT on e-commerce by non-residents (B2C registration, B2B reverse charge)',[28]],
 ['2021-08-01','market','Huawei becomes the first MPTC-licensed cloud service provider',[7],'Aug 2021'],
 ['2021-10-15','law','Law on Investment promulgated: QIP income-tax exemption of 3–9 years',[30]],
 ['2022-01-28','law','Digital Government Policy 2022–2035 approved',[24]],
 ['2025-07-02','market','MPTC launches the AI readiness assessment report; draft AI strategy in consultation',[26]],
 ['2025-07-23','law','Draft Law on Personal Data Protection released',[13]],
 ['2025-12-05','market','ByteDC launches a sovereign cloud on Huawei Cloud Stack',[6]],
 ['2026-01-01','tech','Commercial 5G goes live: Phnom Penh and 14 provinces',[38]],
 ['2026-03-15','tech','Maximum public TLS certificate validity falls to 200 days',[45]],
 ['2026-04-06','law','Law on Combating Online Scams promulgated and in force',[18,19]],
 ['2026-04-20','law','MPTC consults on the draft PDP, ICT and Digital Government laws',[15]],
 ['2026-05-20','law','NBC presents its new Technology and Cyber Risk Management Guidelines to banks',[10]],
 ['2026-06-02','market','UPI acceptance goes live at KHQR merchants in Phnom Penh',[40]],
 ['2026-07-08','law','MPTC and the Ministry of Justice review the draft Cybersecurity Law',[16]],
 ['2026-08-05','law','Validation workshop on the draft Personal Data Protection law',[14]],
 ['2026-08-24','market','India–Cambodia trade working group meets: trade US$406.78M in 2025-26',[40]],
 ['2027-01-12','tech','Windows Server 2016 extended support ends',[44]],
 ['2027-03-15','tech','Maximum public TLS certificate validity falls to 100 days',[45]],
 ['2029-03-15','tech','Maximum public TLS certificate validity falls to 47 days',[45]],
 ['2030-12-31','market','Draft AI strategy evaluation due by end-2030',[25],'By 2030']
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
(function(){
  var el=$('#vgChRange');if(el){var rows=[['ICT market, 2025',2.34,2.34],['ICT market, 2026',2.51,2.51],['IT services, 2025*',0.83,0.83],['Cloud, 2023 → 2027f',0.197,0.371]];
    var W=520,H=200,x0=150,x1=500,mx=3,sx=function(v){return x0+(x1-x0)*v/mx;},o='';
    for(var g=0;g<=6;g++){var gv=g*0.5,gx=sx(gv);o+='<line class="gl" x1="'+gx+'" y1="10" x2="'+gx+'" y2="'+(H-28)+'"/><text class="ax" x="'+gx+'" y="'+(H-10)+'" text-anchor="middle">'+(g%2?gv.toFixed(1):gv.toFixed(0))+'</text>';}
    rows.forEach(function(r,i){var y=22+i*38,a=sx(r[1]),b=sx(r[2]),w=Math.max(8,b-a);
      o+='<text class="lb" x="'+(x0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o+='<rect class="trk" x="'+x0+'" y="'+(y-7)+'" width="'+(x1-x0)+'" height="14" rx="7"/>';
      o+='<rect class="br grow c'+i+'" x="'+(r[1]===r[2]?a-4:a)+'" y="'+(y-7)+'" width="'+w+'" height="14" rx="7" style="transition-delay:'+(i*0.08)+'s"/>';
      o+='<text class="vl" x="'+(Math.min(b+8,x1-2))+'" y="'+(y+22)+'" text-anchor="'+(b>x1-60?'end':'start')+'">'+(r[1]===r[2]?r[1].toFixed(2):r[1].toFixed(3)+'–'+r[2].toFixed(3))+'</text>';});
    el.innerHTML=svg(W,H,o);}
  el=$('#vgChGmv');if(el){var g2=[['Garments, shoes, bags',15.5,'+15.7%'],['Agricultural exports',6.46,'+7.3%'],['Tourism revenue',3.88,'+6.6%'],['Rice exports',0.75,'+35.7%']];
    var W2=520,H2=200,a0=160,a1=430,o2='';
    g2.forEach(function(r,i){var y=28+i*40,w=Math.max(4,(a1-a0)*r[1]/15.5);
      o2+='<text class="lb" x="'+(a0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o2+='<rect class="br grow '+(i?'co':'cb')+'" x="'+a0+'" y="'+(y-11)+'" width="'+w+'" height="22" rx="5" style="transition-delay:'+(i*0.08)+'s"/>';
      o2+='<text class="vl" x="'+(Math.min(a0+w+8,a1-4))+'" y="'+(i===0?y+28:y+5)+'"'+(i===0?' text-anchor="end"':'')+'>US$'+r[1]+'B <tspan class="mut">('+r[2]+')</tspan></text>';});
    o2+='<text class="ax" x="'+a0+'" y="'+(H2-6)+'">Total trade 2025: US$64.02B, +16.8% (GDCE)</text>';
    el.innerHTML=svg(W2,H2,o2);}
  el=$('#vgChDc');if(el){var dc=[['Population',[[17.9,'cn']],'17.9M'],['Internet users',[[12.0,'cb']],'12.0M · 67.3%'],['Social media identities',[[14.0,'cb']],'14.0M'],['E-wallet accounts (NBC)',[[18.9,'co']],'18.9M'],['Mobile connections',[[21.7,'cn']],'21.7M · 121%']];
    var W3=520,H3=250,b0=190,b1=470,mx3=25,o3='';
    for(var g3=0;g3<=25;g3+=5){var gx3=b0+(b1-b0)*g3/mx3;o3+='<line class="gl" x1="'+gx3+'" y1="12" x2="'+gx3+'" y2="'+(H3-30)+'"/><text class="ax" x="'+gx3+'" y="'+(H3-12)+'" text-anchor="middle">'+(g3?g3+'M':'0')+'</text>';}
    dc.forEach(function(r,i){var y=30+i*40,x=b0;o3+='<text class="lb" x="'+(b0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      r[1].forEach(function(s,j){var w=(b1-b0)*s[0]/mx3;o3+='<rect class="br grow '+s[1]+'" x="'+x+'" y="'+(y-10)+'" width="'+w+'" height="20" rx="4" style="transition-delay:'+(i*0.08+j*0.1)+'s"/>';x+=w;});
      var endR=x>b1-110;o3+='<text class="vl" x="'+(endR?x:x+8)+'" y="'+(endR?y+27:y+5)+'" text-anchor="'+(endR?'end':'start')+'">'+r[2]+'</text>';});
    el.innerHTML=svg(W3,H3,o3);}
  el=$('#vgChLine');if(el){var S=[['ICT',2025,2.34,2031,3.61,'lc'],['Cloud',2023,0.1973,2032,0.9463,'lo']];
    var W4=520,H4=230,l0=46,l1=490,t0=16,t1=H4-34,my=4,Y0=2023,Y1=2032,px=function(yr){return l0+(l1-l0)*(yr-Y0)/(Y1-Y0);},py=function(v){return t1-(t1-t0)*v/my;},o4='';
    for(var gy=0;gy<=4;gy+=1){o4+='<line class="gl" x1="'+l0+'" y1="'+py(gy)+'" x2="'+l1+'" y2="'+py(gy)+'"/><text class="ax" x="'+(l0-6)+'" y="'+(py(gy)+4)+'" text-anchor="end">'+gy+'</text>';}
    [2023,2026,2029,2032].forEach(function(yr){o4+='<text class="ax" x="'+px(yr)+'" y="'+(H4-12)+'" text-anchor="middle">'+yr+'</text>';});
    S.forEach(function(s){var n=s[3]-s[1],gr=Math.pow(s[4]/s[2],1/n),pts=[];for(var i=0;i<=n;i++)pts.push(px(s[1]+i).toFixed(1)+','+py(s[2]*Math.pow(gr,i)).toFixed(1));
      o4+='<polyline class="ln '+s[5]+'" points="'+pts.join(' ')+'" pathLength="100"/>';
      o4+='<circle class="dt '+s[5]+'" cx="'+px(s[1])+'" cy="'+py(s[2])+'" r="4"/><circle class="dt '+s[5]+'" cx="'+px(s[3])+'" cy="'+py(s[4])+'" r="4"/>';
      o4+='<text class="vl" x="'+(px(s[3])-8)+'" y="'+(py(s[4])-10)+'" text-anchor="end">'+s[0]+' '+s[4].toFixed(2)+' ('+s[3]+')</text>';});
    o4+='<text class="vl mut" x="'+(px(2023)+4)+'" y="'+(py(0.1973)-12)+'">Cloud 0.20 (2023)</text>';
    o4+='<text class="vl mut" x="'+(px(2025)+4)+'" y="'+(py(2.34)-12)+'">ICT 2.34 (2025)</text>';
    el.innerHTML=svg(W4,H4,o4);}
})();


/* ---------- revenue model ---------- */
/* ---------- revenue model ---------- */
var TAM=2.34e9*0.3548; // 2025: IT-services share (35.48%) of Mordor's US$2.34B Cambodia ICT market — derived
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
  $('#vgReset').addEventListener('click',function(){buildModel();$('#vgFx').value='93.89';$('#vgSamIn').value='15';scn=1;$$('#vgScn button').forEach(function(x){x.classList.toggle('on',x.getAttribute('data-v')==='1');});$('#vgScnL').textContent='Base · win rate ×1.0';calc();if(XH.toast)XH.toast('Revenue model reset to default assumptions');});
  $('#vgCsv').addEventListener('click',function(){var fx=+$('#vgFx').value||FX_DASH,rows=[['Vertical','Target accounts','Win rate % (after scenario)','ACV USD','Accounts won','Revenue USD','Revenue INR']];
    RES.forEach(function(r){rows.push([r[0],r[1],r[2].toFixed(1),r[3],r[4].toFixed(2),Math.round(r[5]),Math.round(r[5]*fx)]);});
    rows.push([]);rows.push(['Assumptions: illustrative, not a forecast. TAM = IT-services share (35.48%) of the 2025 Cambodia ICT market (Mordor), derived. FX ₹'+fx+' per US$.']);
    var csv=rows.map(function(r){return r.map(function(c){c=String(c==null?'':c);return /[",]/.test(c)?'"'+c.replace(/"/g,'""')+'"':c;}).join(',');}).join('\n');
    if(XH.download)XH.download('xcellhost-cambodia-revenue-model.csv',csv,'text/csv');});
  calc();}

/* ---------- heatmap ---------- */
var LAWP=[ // [law, pillars, verticals ('*' = all)]
 ['Draft PDP law','DS','*'],['NBC TCRMG (2025)','CSDT',['bfsi']],['Online Scams Law 2026','ST',['bfsi','dig','tel','con']],
 ['Draft Cybersecurity Law','S',['gov','bfsi','tel','hc']],['E-Commerce Law 2019','CD',['dig','tour','agri']],['Telecom Law 2015 + TRC','C',['tel']],
 ['MPTC cloud-service licence','C',['tel','gov','bfsi','dig']],['CamDX e-KYC · Bakong · KHQR','T',['bfsi','dig','tour','gov']],
 ['Draft National AI Strategy','AL','*'],['Digital Government Policy + draft law','CST',['gov','hc','edu']],['National Digital Health Strategy','CD',['hc']],
 ['Law on Investment 2021 (QIP)','C',['mfg','agri','con']]];
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
   HERO — one rAF loop: drawn Cambodia outline, city pins, flows to Mumbai
   ===================================================================== */
var MY=[ // simplified outline of Cambodia; not to scale
 [[102.34,13.57],[102.60,14.20],[103.20,14.34],[104.00,14.38],[104.80,14.42],[105.20,14.34],[105.55,14.12],[106.05,14.38],[106.50,14.58],[107.00,14.45],[107.55,14.20],[107.60,13.50],[107.40,12.60],[107.55,12.30],[106.90,11.90],[106.40,11.70],[106.00,11.75],[105.85,11.20],[106.15,10.95],[105.75,10.95],[105.10,10.90],[104.45,10.42],[104.10,10.60],[103.85,10.55],[103.55,10.62],[103.30,10.90],[103.10,11.10],[102.95,11.65],[102.75,12.10],[102.50,12.70],[102.42,13.10],[102.34,13.57]]];
var CITY=[['Battambang',103.20,13.10,'l'],['Siem Reap',103.86,13.36,'a'],['Phnom Penh',104.92,11.56,'r'],['Kampong Cham',105.46,12.00,'a'],['Sihanoukville',103.53,10.63,'b']];
var SC=[
 {t:'Market · where the money is',s:'Simplified outline, not to scale · figures sourced below',
  c:'<span class="vg-ck">US$ · sourced</span><div class="vg-cr"><b>US$2.34B</b><span>ICT market, 2025</span></div><div class="vg-cr"><b>12.0M</b><span>internet users (67.3%)</span></div><div class="vg-cr"><b>US$101.8B</b><span>banking assets, 2025</span></div><div class="vg-cr"><b>~7 MW</b><span>live DC capacity (Dec 2024)</span></div>'},
 {t:'Verticals · who buys first',s:'Wave 1 in the first 6 months, then waves 2 and 3',
  c:'<span class="vg-ck">Wave 1 · months 0–6</span><div class="vg-cch"><i>Banks &amp; MFIs</i><i>Digital &amp; SMEs</i><i>Garments</i></div><span class="vg-ck">Waves 2–3</span><div class="vg-cch m"><i>Telecom &amp; DCs</i><i>Tourism</i><i>Healthcare</i><i>Education</i><i>Agriculture</i><i>Construction</i><i>Government</i></div>'},
 {t:'Laws · three drafts in motion',s:'Bank data in Phnom Penh partner DCs · Mumbai second line',
  c:'<span class="vg-ck">Key dates · 2026</span><div class="vg-cl"><b>6 Apr</b><span>Online Scams Law in force</span></div><div class="vg-cl"><b>20 Apr</b><span>PDP · ICT · digital-govt drafts</span></div><div class="vg-cl"><b>8 Jul</b><span>Cybersecurity draft review</span></div><div class="vg-cl"><b>5 Aug</b><span>PDP draft validation</span></div>'},
 {t:'Roadmap · 18 months',s:'Partner DCs in Phnom Penh · second line from Mumbai',
  c:'<span class="vg-ck">Partner-led entry · goals</span><div class="vg-cp"><span>0–6 m · Prove</span><i><u style="--w:100%"></u></i></div><div class="vg-cp"><span>6–12 m · Establish</span><i><u style="--w:66%"></u></i></div><div class="vg-cp"><span>12–18 m · Scale</span><i><u style="--w:33%"></u></i></div><div class="vg-cr g"><b id="vgHeroRev">US$0.46M</b><span>annualised revenue goal</span></div>'}];
var cv=$('#vgMap'),stage=$('#vgStage'),card=$('#vgCard'),dots=$$('#vgDots [data-k]'),pz=$('#vgPz');
if(cv&&cv.getContext){
  var ctx=cv.getContext('2d'),W=0,H=0,DPR=1,proj=null,polys=[],segs=[],totL=0,cityP=[],mum=null;
  var k=0,t0=performance.now(),sceneT=0,visible=true,paused=false,hover=false,raf=0,DUR=5600,last=t0,drawn=REDUCE?1:0,sceneStart=t0;
  function size(){var r=cv.parentNode.getBoundingClientRect();DPR=Math.min(2,window.devicePixelRatio||1);W=Math.max(280,r.width);H=Math.max(260,r.height);
    cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);ctx.setTransform(DPR,0,0,DPR,0,0);
    var narrow=W<520,mx0=narrow?W*0.30:W*0.34,mx1=W*0.95,my0=H*0.16,my1=H*0.86,lon0=102.1,lon1=107.8,lat0=10.25,lat1=14.75,cf=Math.cos(12.5*Math.PI/180);
    var s=Math.min((mx1-mx0)/((lon1-lon0)*cf),(my1-my0)/(lat1-lat0)),ox=mx0+((mx1-mx0)-(lon1-lon0)*cf*s)/2,oy=my0+((my1-my0)-(lat1-lat0)*s)/2;
    proj=function(lo,la){return [ox+(lo-lon0)*cf*s,oy+(lat1-la)*s];};
    polys=MY.map(function(P){return P.map(function(p){return proj(p[0],p[1]);});});segs=[];totL=0;
    polys.forEach(function(P){var L=[];for(var i=1;i<P.length;i++){var l=Math.hypot(P[i][0]-P[i-1][0],P[i][1]-P[i-1][1]);L.push(l);totL+=l;}segs.push(L);});
    cityP=CITY.map(function(c){var q=proj(c[1],c[2]);return {n:c[0],x:q[0],y:q[1],a:c[3]};});
    mum={x:Math.max(60,W*0.105),y:narrow?H*0.15:H*0.30};}
  function curve(a,b){var mx=(a.x+b.x)/2,my=Math.min(a.y,b.y)-H*0.26;return [mx,Math.max(14,my)];}
  function qpt(a,c,b,t){var u=1-t;return [u*u*a.x+2*u*t*c[0]+t*t*b.x,u*u*a.y+2*u*t*c[1]+t*t*b.y];}
  function outline(closed,lim){var acc=0;ctx.beginPath();
    for(var p=0;p<polys.length;p++){var P=polys[p],L=segs[p];if(!closed&&acc>=lim)break;ctx.moveTo(P[0][0],P[0][1]);
      for(var i=1;i<P.length;i++){var l=L[i-1];if(closed||acc+l<=lim){ctx.lineTo(P[i][0],P[i][1]);acc+=l;}else{var f=(lim-acc)/l;ctx.lineTo(P[i-1][0]+(P[i][0]-P[i-1][0])*f,P[i-1][1]+(P[i][1]-P[i-1][1])*f);acc=lim;break;}}
      if(closed)ctx.closePath();}}
  function draw(now){var dt=now-last;last=now;
    if(!paused&&!hover&&!REDUCE){sceneT+=dt;if(sceneT>DUR){sceneT=0;go((k+1)%SC.length);}}
    if(drawn<1)drawn=Math.min(1,drawn+dt/1700);
    var T=REDUCE?0:now/1000,e=1-Math.pow(1-drawn,3);
    ctx.clearRect(0,0,W,H);
    // graticule
    ctx.strokeStyle='rgba(255,255,255,0.06)';ctx.lineWidth=1;ctx.beginPath();
    for(var lo=103;lo<=107;lo+=1){var a=proj(lo,10.25),b=proj(lo,14.75);ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);}
    for(var la=11;la<=14;la+=1){var c=proj(102.1,la),dd=proj(107.8,la);ctx.moveTo(c[0],c[1]);ctx.lineTo(dd[0],dd[1]);}ctx.stroke();
    // outline: progressive stroke, then fill
    ctx.lineJoin='round';
    if(e>=1){outline(true);ctx.fillStyle=k===2?'rgba(0,102,255,0.24)':'rgba(0,102,255,0.16)';ctx.fill();}
    else outline(false,totL*e);
    ctx.strokeStyle='#0066FF';ctx.lineWidth=2;ctx.stroke();
    if(k===2&&e>=1){ctx.save();ctx.setLineDash([4,6]);ctx.lineDashOffset=-T*14;ctx.strokeStyle='rgba(255,138,0,0.75)';ctx.lineWidth=1.4;outline(true);ctx.stroke();ctx.restore();}
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
      if(k===2){var p2=qpt(mum,cc,cp,0.42+ci*0.11);ctx.fillStyle='#0B132B';ctx.strokeStyle='rgba(255,138,0,0.9)';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(p2[0],p2[1],9,0,6.283);ctx.fill();ctx.stroke();
        ctx.fillStyle='#FF8A00';ctx.fillRect(p2[0]-3.5,p2[1]-1,7,5.5);ctx.strokeStyle='#FF8A00';ctx.lineWidth=1.3;ctx.beginPath();ctx.arc(p2[0],p2[1]-1.5,2.6,Math.PI,0);ctx.stroke();}});
    // city pins
    cityP.forEach(function(cp,ci){var ph=REDUCE?0.5:((T*0.8+ci*0.33)%1);
      ctx.strokeStyle='rgba(255,255,255,'+(0.55*(1-ph)).toFixed(3)+')';ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(cp.x,cp.y,5+ph*14,0,6.283);ctx.stroke();
      ctx.fillStyle=(k===3&&ci===2)?'#FF8A00':'#ffffff';ctx.beginPath();ctx.arc(cp.x,cp.y,4.5,0,6.283);ctx.fill();
      ctx.font='600 11px "Sora",sans-serif';ctx.fillStyle='#ffffff';
      var lx=cp.x,ly=cp.y+4;
      if(cp.a==='l'){ctx.textAlign='right';lx=cp.x-10;}else if(cp.a==='r'){ctx.textAlign='left';lx=cp.x+10;}else{ctx.textAlign='center';ly=cp.a==='a'?cp.y-12:cp.y+20;}
      ctx.fillText(cp.n,lx,ly);
      if(k===3&&ci===2){ctx.font='400 9.5px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.fillText('partner DC',lx,ly+13);}
});
    ctx.globalAlpha=1;
    if(k===2&&e>=1){ctx.font='600 10px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.textAlign='center';var c0=proj(105.0,14.72);ctx.fillText('DRAFT PDP · CYBER LAWS',c0[0],c0[1]);}
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