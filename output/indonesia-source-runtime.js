
(function(){
'use strict';
var d=document,XH=window.XH||{};
var $=function(s,c){return (c||d).querySelector(s);},$$=function(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));};
var REDUCE=!!XH.reduce||(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches);
var ICONS={building:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',cpu:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>',cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg>',route:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="19" r="2.5"/><circle cx="18" cy="5" r="2.5"/><path d="M8.5 19H16a3 3 0 000-6H8a3 3 0 010-6h7.5"/></svg>',heart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"/></svg>',book:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg>',flag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>',video:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg>',zap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>',users:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',scale:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v18M5 21h14M6 7h12M6 7l-3 7a3 3 0 006 0zM18 7l-3 7a3 3 0 006 0z"/></svg>',doc:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>',user:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>',trophy:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 01-10 0zM17 5h3v2a3 3 0 01-3 3M7 5H4v2a3 3 0 003 3"/></svg>',rupee:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>',alert:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>',lock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>',trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>',globe:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>',shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',brain:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>',target:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>',robot:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="8" width="14" height="11" rx="2"/><path d="M12 4v4M9 13h.01M15 13h.01M9 17h6M2 13h3M19 13h3"/></svg>','shield-check':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>',play:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13-8z"/></svg>',cloud:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>',disk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>',certificate:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="13" rx="2"/><circle cx="12" cy="17" r="3"/><path d="M10.5 19.5L10 23l2-1 2 1-.5-3.5M7 7h10M7 10h6"/></svg>',code:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>',bug:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg>',mobile:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="2" width="12" height="20" rx="2.5"/><path d="M11 18h2"/></svg>'};

/* build3 has no robots support; strategy briefings must stay out of search indexes */
(function(){try{if(!d.querySelector('meta[name="robots"]')){var m=d.createElement('meta');m.name='robots';m.content='noindex, nofollow';d.head.appendChild(m);}}catch(e){}})();

/* ---------- formatting ---------- */
var FX_DASH=95.17; // ₹ per US$, close 26 Oct 2026 (Pound Sterling Live) — dashboard labels; IDR 18,132 per US$ same day (Katadata)
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
 'bfsi-cloud':['BFSI Cloud','C','Bank-grade cloud in an Indonesian DC, for POJK 11/2022'],
 'vortex-soc':['Vortex SOC (SIEM · SOAR · UEBA)','S','24×7 detection, CSIRT support and incident notices'],
 'cloud-hsm':['Cloud HSM','T','Keys for payments, signing and encryption'],
 'privileged-access-management':['Privileged Access Management','S','Vaulted admin access, session recording'],
 'waap-as-a-service':['WAAP as a Service','S','WAF, API and DDoS protection'],
 'red-team-assessment':['Red Team Assessment','S','The annual OJK scenario test'],
 'resilience-operations':['Managed Resilience Operations','D','Backup, DR and measured drills'],
 'xcellhost-pci-dss':['PCI DSS Compliance','S','Card-data scope and evidence'],
 'third-party-risk-management':['Third-Party Risk Management','S','Supplier due diligence for OJK and PDP'],
 'ai-training-insurance-professionals':['AI Training for Insurance Professionals','L','Underwriting, claims and service teams'],
 'retail-cloud':['Retail Cloud','C','Commerce, POS and loyalty platforms'],
 'cdn-cloud':['CDN Cloud','C','Fast delivery across the archipelago'],
 'kubernetes-api':['Managed Kubernetes','C','Containers for platform apps'],
 'xcellhost-dmarc':['DMARC','S','Stop brand and invoice spoofing'],
 'digital-risk-monitoring':['Digital Risk Monitoring','S','Fake shops, apps, domains and leaks'],
 'acronis-cyber-platform':['Acronis Cyber Platform','D','Backup, DR and anti-ransomware'],
 'xcellhost-47-day-ssl':['47-Day SSL Automation','T','Ready for 200, 100 and 47-day certificates'],
 'xcellhost-vdpo':['vDPO as a Service','D','DPO, DPIA and records under the PDP Law'],
 'enterprise-rag-as-a-service':['Enterprise RAG as a Service','A','Grounded AI assistants, Bahasa-ready'],
 'manufacturing-cloud':['Manufacturing Cloud','C','ERP, MES and plant apps'],
 'ot-assessment':['OT Security Assessment','S','IEC 62443-aligned plant review'],
 'acronis-ot':['Acronis OT','D','Backup and recovery for OT systems'],
 'industry-5-smart-manufacturing':['Industry 5.0 Smart Manufacturing','A','AI vision and predictive maintenance'],
 'managed-sd-wan':['Managed SD-WAN','C','Plant, branch and island links'],
 'sap-hosting':['SAP Hosting','C','SAP on managed cloud'],
 'scrutiny-edr':['Scrutiny EDR','S','Endpoint detection and response'],
 'xcellhost-iot-pki':['IoT PKI','T','Machine identity for connected assets'],
 'ai-training-integrated-program':['Integrated AI Training Program','L','12-week blended GenAI course'],
 'smb-cloud':['SMB Cloud','C','Simple servers for small firms'],
 'email-security-smb':['Email Security','S','Phishing and BEC protection'],
 'cloud-disaster-recovery-smb':['Cloud DR for SMB','D','Replicate servers, fail over in minutes'],
 'xcellhost-acronis-direct-cloud-backup':['Acronis Direct Cloud Backup','D','Endpoint and server backup'],
 'managed-microsoft-365':['Managed Microsoft 365','C','Licences, security and admin'],
 'smb-cloud-desktop':['SMB Cloud Desktop','C','Desktops for small teams'],
 'multi-factor-authentication':['Multi-Factor Authentication','S','Strong sign-in for staff and users'],
 'ai-training-live-online':['AI Training Live Online','L','AI literacy for staff'],
 'gpu-servers':['GPU Servers','A','Training and inference capacity'],
 'xcellhost-dedicated-inference':['Dedicated Inference','A','Private model serving'],
 'threat-intelligence':['Threat Intelligence','S','Early warning on campaigns and leaks'],
 'xcellhost-managed-pki':['Managed PKI','T','Private CA operations'],
 'crypto-agility-and-post-quantum-cryptography-readiness':['PQC Readiness','T','Crypto-agility and post-quantum roadmap'],
 'ai-red-teaming-services':['AI Red Teaming','S','Adversarial testing of LLM apps'],
 'xcellhost-iso-27001':['ISO 27001 Consulting','S','ISMS for client and regulator audits'],
 'edge-cloud':['Edge Cloud','C','Compute at site, port and depot'],
 'cyber-range-as-a-service':['Cyber Range as a Service','L','Live-fire SOC and IR exercises'],
 'healthcare-cloud':['Healthcare Cloud','C','HIS, PACS and EMR hosting'],
 'scrutiny-dlp':['Scrutiny DLP','D','Stop patient and customer data leakage'],
 'email-encryption':['Email Encryption','D','Protect reports and records in transit'],
 'ai-as-a-service':['AI as a Service','A','Forecasting, routing and document AI'],
 'ai-training-medical-doctors':['AI Training for Doctors','L','Safe clinical use of AI'],
 'higher-education-cloud':['Higher Education Cloud','C','LMS, portals and research computing'],
 'managed-google-workspace':['Managed Google Workspace','C','Campus mail and collaboration'],
 'cloud-desktop-enterprise-vdi':['Cloud Desktop (VDI)','C','Secure desktops for labs and staff'],
 'ai-training-educators':['AI Training for Educators','L','AI in teaching and assessment'],
 'logistics-cloud':['Logistics Cloud','C','TMS, WMS and EDI hosting'],
 'iot-cloud':['IoT Cloud','C','Tracker and sensor telemetry'],
 'xcellhost-iot-device-certificates':['IoT Device Certificates','T','Certificates for scanners and trackers'],
 'dfir':['DFIR','S','Incident response and forensics'],
 'private-cloud':['Private Cloud','C','Dedicated, segregated clusters'],
 'government-cloud':['Government Cloud','C','Segregated cloud patterns for public bodies'],
 'cyber-security-audit':['Cyber Security Audit','S','Audit preparation for CSIRT and BSSN reviews'],
 'xcellhost-managed-grc':['Managed GRC','S','Risk register, policies and evidence'],
 'hsm-hardware-security-module':['HSM (on-premises)','T','Keys kept in Indonesia'],
 'xcellhost-iso-42001':['ISO 42001 Consulting','A','AI management system ahead of AI rules']
};
function fn(n){return '<a class="fn" href="#s'+n+'">'+n+'</a>';}
/* verticals */
var V=[
 {k:'bfsi',n:'BFSI & fintech',full:'Banks, payment providers, fintech and insurance',ic:'building',wave:1,
  why:[['cloud','BFSI is the largest buyer of cloud in Indonesia, with <b>27.3%</b> of 2025 spend.'+fn(2)],
       ['trend','Digital payments are projected at <b>US$538B</b> of transaction value in 2025, the largest in Southeast Asia.'+fn(1)],
       ['users','<b>46%</b> of Indonesian consumers trust digital financial players less than traditional banks.'+fn(1)]],
  regs:['POJK 11/2022 (DC & DRC in Indonesia)','OJK Reg 1/2026','BI Reg 2/2024','PDP Law + GR 33/2026','Perpres 82/2022 (finance)'],
  buy:['CIO / CTO','CISO','Head of IT risk','DPO','Compliance','Procurement'],
  svc:['bfsi-cloud','vortex-soc','cloud-hsm','privileged-access-management','waap-as-a-service','red-team-assessment','resilience-operations','xcellhost-pci-dss','third-party-risk-management','ai-training-insurance-professionals'],
  trg:['Annual cyber-maturity self-assessment and scenario test, such as red teaming, for OJK'+fn(31),'BI 1-hour initial incident notice for payment providers'+fn(34),'Vendor due diligence under OJK Reg 1/2026, in force since 1 Mar 2026'+fn(33),'GR 33/2026 applies from 16 Jan 2027'+fn(24),'Windows Server 2016 extended support ends 12 Jan 2027'+fn(46)],
  calc:[40,10,60000]},
 {k:'dig',n:'Digital natives & e-commerce',full:'Marketplaces, super-apps, media and SaaS',ic:'cart',wave:1,
  why:[['cart','E-commerce GMV reached about <b>US$71B</b> in 2025, up more than 14%.'+fn(1)],
       ['video','Video-commerce transactions rose 90% to <b>2.6 billion</b>, and online sellers rose 75% to about 800,000.'+fn(1)],
       ['brain','AI app revenue grew <b>127%</b> from H1 2024 to H1 2025, the fastest in Southeast Asia.'+fn(1)]],
  regs:['PDP Law + GR 33/2026','GR 71/2019 (private ESO registration)','BI Reg 2/2024 (payments)','AI circular + draft AI Perpres'],
  buy:['CTO','Head of platform / SRE','CISO','DPO','Head of trust & safety'],
  svc:['retail-cloud','cdn-cloud','kubernetes-api','waap-as-a-service','xcellhost-dmarc','digital-risk-monitoring','acronis-cyber-platform','xcellhost-47-day-ssl','xcellhost-vdpo','enterprise-rag-as-a-service'],
  trg:['72-hour breach notice under GR 33/2026 from 16 Jan 2027'+fn(25),'DPIA duty for AI, large-scale processing and cross-border transfers'+fn(25),'Peak sale events and traffic spikes','Public TLS certificate validity falls to 100 days on 15 Mar 2027'+fn(47),'Fake apps, phishing domains and account-takeover fraud'],
  calc:[60,10,40000]},
 {k:'mfg',n:'Manufacturing & downstreaming',full:'Nickel and EV supply chain, automotive, FMCG, electronics',ic:'cpu',wave:1,
  why:[['trend','Realised investment hit <b>Rp1,931.2 trillion</b> (about US$120.7B) in 2025, of which Rp900.9 trillion was foreign.'+fn(16)],
       ['cpu','Downstreaming, such as mineral processing, drew <b>Rp584.1 trillion</b>, 30.2% of the total.'+fn(16)],
       ['globe','Indian firms invested <b>US$1.56B</b> across 7,292 projects in Indonesia from 2000 to 2024.'+fn(15)]],
  regs:['PDP Law (HR data)','Perpres 82/2022 (energy & minerals)','GR 71/2019','TKDN (SOE buyers)'],
  buy:['Plant IT / OT head','Group CIO (often at HQ abroad)','Plant manager','CISO','Procurement'],
  svc:['manufacturing-cloud','ot-assessment','acronis-ot','industry-5-smart-manufacturing','managed-sd-wan','sap-hosting','scrutiny-edr','xcellhost-iot-pki','third-party-risk-management','ai-training-integrated-program'],
  trg:['A new smelter, plant or production line coming online','Ransomware on plant IT or a supplier','ERP or SAP upgrade and hosting review','Windows Server 2016 end of support on 12 Jan 2027'+fn(46),'Parent-company audits of Indonesian subsidiaries'],
  calc:[40,9,50000]},
 {k:'sme',n:'SMEs',full:'Small and mid-sized firms across Java and the outer islands',ic:'users',wave:1,
  why:[['users','Indonesia has <b>65.5 million</b> MSMEs employing over 119 million people, about 97% of the workforce.'+fn(14)],
       ['trend','MSMEs generate <b>61.9%</b> of GDP, according to BPS.'+fn(14)],
       ['mobile','About <b>14.78 million</b> SMEs accept QRIS payments, which widens the attack surface.'+fn(3)]],
  regs:['PDP Law + GR 33/2026','GR 71/2019 (if serving users online)'],
  buy:['Owner / director','Finance head','IT generalist or outsourced IT provider'],
  svc:['smb-cloud','email-security-smb','cloud-disaster-recovery-smb','xcellhost-acronis-direct-cloud-backup','managed-microsoft-365','smb-cloud-desktop','multi-factor-authentication','xcellhost-dmarc','xcellhost-vdpo','ai-training-live-online'],
  trg:['A ransomware or business-email-compromise incident','GR 33/2026 duties from 16 Jan 2027'+fn(24),'Microsoft 365 or Google Workspace renewal','A first security questionnaire from a large customer','Opening a new branch or warehouse'],
  calc:[200,6,6000]},
 {k:'tel',n:'Telecom, DC & cloud providers',full:'Telcos, colocation operators, local clouds and GPU clouds',ic:'globe',wave:2,
  why:[['server','Jakarta has about <b>340 MW</b> operating and a pipeline near 1.5 GW; domestic operators hold about 10% of capacity.'+fn(7)],
       ['zap','Telkom\'s NeutraDC signed with PLN in Aug 2026 for up to <b>200 MW</b> in Cikarang.'+fn(22)],
       ['cpu','DCI Indonesia runs <b>119 MW</b> across three sites; Lintasarta sells H100 GPU capacity as GPU Merdeka.'+fn(21)+fn(23)]],
  regs:['Perpres 82/2022 (ICT sector)','RUU KKS (draft)','PDP Law + GR 33/2026','GR 71/2019'],
  buy:['CTO','Head of DC operations','CISO','Cloud and AI product heads','Partnerships'],
  svc:['gpu-servers','xcellhost-dedicated-inference','vortex-soc','threat-intelligence','xcellhost-managed-pki','crypto-agility-and-post-quantum-cryptography-readiness','ai-red-teaming-services','xcellhost-iso-27001','edge-cloud','cyber-range-as-a-service'],
  trg:['New GPU or AI capacity that needs managed services and customers','Customer ISO 27001 and SOC 2 evidence requests','Passage of the cyber bill (RUU KKS)'+fn(30),'Government DC target of 1.65 GW by end-2026'+fn(10),'Post-quantum migration roadmaps'],
  calc:[15,10,70000]},
 {k:'hc',n:'Healthcare',full:'Hospitals, clinics, labs and health insurers',ic:'heart',wave:2,
  why:[['doc','A joint circular signed 30 Jul 2026 requires hospitals to use ID-linked medical records integrated with <b>SATUSEHAT</b> for national health insurance claims.'+fn(45)],
       ['trend','Healthcare is the fastest-growing cloud vertical, at a projected <b>15.66%</b> a year.'+fn(2)],
       ['shield','Health is one of the eight vital-information-infrastructure sectors.'+fn(28)]],
  regs:['PDP Law + GR 33/2026','SATUSEHAT EMR circular','Perpres 82/2022 (health)','MOCDA Reg 5/2025 (public hospitals)'],
  buy:['Hospital director','Head of IT','Head of medical records','DPO','Procurement (e-catalogue for public bodies)'],
  svc:['healthcare-cloud','scrutiny-dlp','acronis-cyber-platform','multi-factor-authentication','email-encryption','vortex-soc','xcellhost-vdpo','resilience-operations','ai-as-a-service','ai-training-medical-doctors'],
  trg:['EMR integration with SATUSEHAT for insurance claims'+fn(45),'DPIA for large-scale processing of specific data such as health'+fn(25),'Ransomware on hospital systems','New hospitals and clinic chains','GR 33/2026 applies from 16 Jan 2027'+fn(24)],
  calc:[30,8,30000]},
 {k:'edu',n:'Education & skills',full:'Universities, schools, edtech and corporate L&D',ic:'book',wave:2,
  why:[['book','Online education was worth <b>US$1.42B</b> in 2025, growing 23.3% a year to 2034.'+fn(5)],
       ['brain','<b>79%</b> of active users are learning or improving AI-related skills.'+fn(1)],
       ['users','<b>80%</b> of Indonesian users use AI tools every day.'+fn(1)]],
  regs:['PDP Law (student data)','MOCDA Reg 5/2025 (state institutions)','AI circular + draft AI Perpres'],
  buy:['Rector / vice-rector','CIO','Faculty deans','Corporate L&D heads','Procurement'],
  svc:['higher-education-cloud','managed-google-workspace','managed-microsoft-365','email-security-smb','multi-factor-authentication','cloud-desktop-enterprise-vdi','ai-training-educators','ai-training-integrated-program','cyber-range-as-a-service','enterprise-rag-as-a-service'],
  trg:['A new academic year and enrolment season','A campus AI-use policy','Phishing and account-takeover incidents','LMS or campus-system migration','Corporate AI upskilling budgets'],
  calc:[40,10,15000]},
 {k:'log',n:'Logistics & ports',full:'3PL, couriers, ports, airlines and ride-hailing',ic:'route',wave:2,
  why:[['cart','About <b>US$71B</b> of e-commerce GMV in 2025 has to be delivered across the archipelago.'+fn(1)],
       ['route','Ride-hailing and food delivery are projected at <b>US$10B</b> in 2025, up 13%.'+fn(1)],
       ['shield','Transport is one of the eight vital-information-infrastructure sectors.'+fn(28)]],
  regs:['Perpres 82/2022 (transport)','RUU KKS (draft)','PDP Law + GR 33/2026','PSrE e-signatures (e-documents)'],
  buy:['COO','CIO','Head of fleet / warehouse','CISO'],
  svc:['logistics-cloud','iot-cloud','edge-cloud','xcellhost-iot-device-certificates','managed-sd-wan','ai-as-a-service','scrutiny-edr','acronis-cyber-platform','ot-assessment','xcellhost-dmarc'],
  trg:['New hubs, warehouses and inter-island routes','Fleet IoT and tracker rollouts','Invoice and payment-redirect fraud','Customer security audits','A ransomware outage at a depot or port'],
  calc:[25,8,35000]},
 {k:'nrg',n:'Energy, mining & resources',full:'Power, oil and gas, mining and smelters',ic:'zap',wave:3,
  why:[['cpu','Downstreaming drew <b>Rp584.1 trillion</b> of investment in 2025, led by minerals.'+fn(16)],
       ['shield','Energy and mineral resources is one of the eight vital-information-infrastructure sectors.'+fn(28)],
       ['server','Batam has a DC pipeline above <b>400 MW</b>, which needs firm power.'+fn(7)]],
  regs:['Perpres 82/2022 (energy & minerals)','RUU KKS (draft: 24-hour reports)','TKDN (SOE procurement)','PDP Law + GR 33/2026'],
  buy:['OT / ICS head','CIO','Operations and HSE','CISO','Procurement (SOE)'],
  svc:['ot-assessment','acronis-ot','iot-cloud','edge-cloud','xcellhost-iot-pki','vortex-soc','dfir','private-cloud','threat-intelligence','cyber-range-as-a-service'],
  trg:['An OT incident or near miss','A new smelter, plant or grid project','Passage of the cyber bill, with 24-hour reports for critical operators'+fn(29),'SOE tenders that score local content'+fn(36),'Windows Server 2016 end of support on 12 Jan 2027'+fn(46)],
  calc:[20,7,60000]},
 {k:'gov',n:'Government & SOEs',full:'Ministries, regions, agencies and state-owned firms',ic:'flag',wave:3,
  why:[['alert','Ransomware hit the temporary National Data Centre on <b>20 Jun 2024</b>, with a US$8M demand and 282 public services disrupted.'+fn(44)],
       ['server','Public ESPs must be Indonesian legal entities running a <b>data centre in Indonesia</b>.'+fn(27)],
       ['building','The National Data Center in Cikarang was under BSSN security assessment before operations.'+fn(6)]],
  regs:['MOCDA Reg 5/2025','Perpres 82/2022 (government)','Perpres 46/2025 (TKDN)','PDP Law + GR 33/2026','RUU KKS (draft)'],
  buy:['Echelon I / II officials','Agency CIOs and regional ICT offices','BSSN liaison','Procurement (e-catalogue)','SOE CIOs'],
  svc:['government-cloud','cyber-security-audit','xcellhost-managed-grc','xcellhost-managed-pki','hsm-hardware-security-module','vortex-soc','dfir','resilience-operations','xcellhost-iso-42001','ai-training-live-online'],
  trg:['Backup and DR programmes after the 2024 attack'+fn(44),'Public ESP re-registration after Mar 2026'+fn(27),'Local-content scoring in tenders'+fn(36),'The AI Presidential Regulations, expected by end-2026'+fn(10),'Partner-led e-catalogue listings'],
  calc:[15,5,80000]}
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
 ['2019-10-04','law','GR 71/2019 on electronic systems and transactions is issued',[27]],
 ['2020-06-24','market','Google Cloud opens its Jakarta region',[17]],
 ['2021-12-12','market','AWS launches its Asia Pacific (Jakarta) region',[18]],
 ['2022-05-24','law','Perpres 82/2022 on vital information infrastructure takes effect',[28]],
 ['2022-10-07','law','POJK 11/2022 on bank IT takes effect: DC and DR centre in Indonesia',[32,31]],
 ['2024-04-22','law','BI Regulation 2/2024 on cyber resilience takes effect: 1-hour incident notice',[34]],
 ['2024-06-20','market','Ransomware hits the temporary National Data Centre; 282 public services disrupted',[44]],
 ['2024-10-17','law','PDP Law (Law 27/2022) fully applicable',[26]],
 ['2025-01-01','law','VAT goes to 12%, applied at 11/12 of the base for non-luxury items',[39]],
 ['2025-03-18','law','MOCDA Regulation 5/2025 on public ESPs is issued',[27]],
 ['2025-04-30','law','Perpres 46/2025 tightens local-content priority in public procurement',[36]],
 ['2025-05-27','market','Microsoft Indonesia Central cloud region goes live with three zones',[19]],
 ['2025-10-01','law','BKPM Regulation 5/2025 cuts PT PMA paid-up capital to IDR 2.5bn',[37]],
 ['2026-03-01','law','OJK Regulation 1/2026 on bank IT governance takes effect',[33]],
 ['2026-03-15','tech','Maximum public TLS certificate validity falls to 200 days',[47]],
 ['2026-03-18','law','MOCDA Reg 5/2025 transition ends: public ESPs must comply (about Mar 2026)',[27]],
 ['2026-07-16','law','GR 33/2026 on personal data protection is signed',[24,25]],
 ['2026-07-27','law','Komdigi completes drafts of the AI roadmap and AI ethics Presidential Regulation',[11]],
 ['2026-07-30','law','Joint circular: hospital EMRs integrated with SATUSEHAT for insurance claims',[45]],
 ['2026-08-11','market','NeutraDC and PLN sign an MoU for up to 200 MW in Cikarang',[22]],
 ['2026-12-31','law','AI Presidential Regulations expected by end-2026',[10]],
 ['2026-12-31','market','Government target of 1.65 GW of DC capacity by end-2026 (expected)',[10]],
 ['2027-01-12','tech','Windows Server 2016 extended support ends',[46]],
 ['2027-01-16','law','GR 33/2026 applies: 72-hour breach notice, DPO, DPIA and transfer rules',[24,25]],
 ['2027-03-15','tech','Maximum public TLS certificate validity falls to 100 days',[47]],
 ['2029-03-15','tech','Maximum public TLS certificate validity falls to 47 days',[47]],
 ['2030-12-31','market','Mordor sees 3.56 GW of DC capacity by 2030 and a ~1 GW shortfall',[9]]
];
var MON=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var tline=$('#vgTline');
if(tline){var nowDone=false,h='';
  TR.forEach(function(t){var dt=new Date(t[0]),past=dt<=TODAY;
    if(!past&&!nowDone){nowDone=true;h+='<li class="vg-now" data-t="all"><span>Today · 7 Nov 2026</span></li>';}
    var lab=(t[0].slice(5)==='12-31'&&t[2].indexOf('expected')>-1)?t[0].slice(0,4):(t[0].slice(5)==='12-31'&&t[0].slice(0,4)==='2030')?'By 2030':(+t[0].slice(8))+' '+MON[+t[0].slice(5,7)-1]+' '+t[0].slice(0,4);
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
  var el=$('#vgChRange');if(el){var rows=[['Cloud',2.46,2.46],['Cyber security',1.35,1.4],['Online education',1.4231,1.4231],['IT services (broad)',6.14,6.14]];
    var W=520,H=200,x0=150,x1=500,mx=7,sx=function(v){return x0+(x1-x0)*v/mx;},o='';
    for(var g=0;g<=7;g++){var gx=sx(g);o+='<line class="gl" x1="'+gx+'" y1="10" x2="'+gx+'" y2="'+(H-28)+'"/><text class="ax" x="'+gx+'" y="'+(H-10)+'" text-anchor="middle">'+g+'</text>';}
    rows.forEach(function(r,i){var y=22+i*38,a=sx(r[1]),b=sx(r[2]),w=Math.max(8,b-a);
      o+='<text class="lb" x="'+(x0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o+='<rect class="trk" x="'+x0+'" y="'+(y-7)+'" width="'+(x1-x0)+'" height="14" rx="7"/>';
      o+='<rect class="br grow c'+i+'" x="'+(r[1]===r[2]?a-4:a)+'" y="'+(y-7)+'" width="'+w+'" height="14" rx="7" style="transition-delay:'+(i*0.08)+'s"/>';
      o+='<text class="vl" x="'+(Math.min(b+8,x1-2))+'" y="'+(y+22)+'" text-anchor="'+(b>x1-60?'end':'start')+'">'+(r[1]===r[2]?r[1].toFixed(2):r[1].toFixed(2)+'–'+r[2].toFixed(2))+'</text>';});
    el.innerHTML=svg(W,H,o);}
  el=$('#vgChGmv');if(el){var g2=[['E-commerce',71,'+14%'],['Ride-hailing & food',10,'+13%'],['Online media',9,'+16%'],['Online travel',9,'+11%']];
    var W2=520,H2=200,a0=160,a1=430,o2='';
    g2.forEach(function(r,i){var y=28+i*40,w=Math.max(4,(a1-a0)*r[1]/71);
      o2+='<text class="lb" x="'+(a0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      o2+='<rect class="br grow '+(i?'co':'cb')+'" x="'+a0+'" y="'+(y-11)+'" width="'+w+'" height="22" rx="5" style="transition-delay:'+(i*0.08)+'s"/>';
      o2+='<text class="vl" x="'+(Math.min(a0+w+8,a1-4))+'" y="'+(i===0?y+28:y+5)+'"'+(i===0?' text-anchor="end"':'')+'>'+(i===0?'~':'')+'US$'+r[1]+'B <tspan class="mut">('+r[2]+')</tspan></text>';});
    o2+='<text class="ax" x="'+a0+'" y="'+(H2-6)+'">Total digital economy: close to US$100B, +14% (2025)</text>';
    el.innerHTML=svg(W2,H2,o2);}
  el=$('#vgChDc');if(el){var dc=[['C&W · Jakarta pipeline, H1 2025',[[709,'co']],'709 MW pipeline'],['BMI · Jakarta, early 2026',[[340,'cb'],[1500,'co']],'~340 + ~1,500 MW'],['Govt · Indonesia, 2026',[[600,'cn'],[1050,'cp']],'~600 → 1,650 MW target'],['Mordor · Indonesia',[[1440,'cn'],[2120,'cp']],'1,440 → 3,560 MW (2030)']];
    var W3=520,H3=230,b0=190,b1=470,mx3=4000,o3='';
    for(var g3=0;g3<=4000;g3+=1000){var gx3=b0+(b1-b0)*g3/mx3;o3+='<line class="gl" x1="'+gx3+'" y1="12" x2="'+gx3+'" y2="'+(H3-30)+'"/><text class="ax" x="'+gx3+'" y="'+(H3-12)+'" text-anchor="middle">'+(g3?(g3/1000)+' GW':'0')+'</text>';}
    dc.forEach(function(r,i){var y=34+i*44,x=b0;o3+='<text class="lb" x="'+(b0-10)+'" y="'+(y+5)+'" text-anchor="end">'+esc(r[0])+'</text>';
      r[1].forEach(function(s,j){var w=(b1-b0)*s[0]/mx3;o3+='<rect class="br grow '+s[1]+'" x="'+x+'" y="'+(y-10)+'" width="'+w+'" height="20" rx="4" style="transition-delay:'+(i*0.08+j*0.1)+'s"/>';x+=w;});
      var endR=x>b1-150;o3+='<text class="vl" x="'+(endR?x:x+8)+'" y="'+(endR?y+27:y+5)+'" text-anchor="'+(endR?'end':'start')+'">'+r[2]+'</text>';});
    el.innerHTML=svg(W3,H3,o3);}
  el=$('#vgChLine');if(el){var S=[['Cloud',2025,2.46,2031,5.5,'lc'],['Cyber security',2025,1.35,2031,4.06,'lo']];
    var W4=520,H4=230,l0=46,l1=490,t0=16,t1=H4-34,my=6,px=function(yr){return l0+(l1-l0)*(yr-2025)/6;},py=function(v){return t1-(t1-t0)*v/my;},o4='';
    for(var gy=0;gy<=6;gy+=1){o4+='<line class="gl" x1="'+l0+'" y1="'+py(gy)+'" x2="'+l1+'" y2="'+py(gy)+'"/><text class="ax" x="'+(l0-6)+'" y="'+(py(gy)+4)+'" text-anchor="end">'+gy+'</text>';}
    [2025,2027,2029,2031].forEach(function(yr){o4+='<text class="ax" x="'+px(yr)+'" y="'+(H4-12)+'" text-anchor="middle">'+yr+'</text>';});
    S.forEach(function(s){var n=s[3]-s[1],gr=Math.pow(s[4]/s[2],1/n),pts=[];for(var i=0;i<=n;i++)pts.push(px(s[1]+i).toFixed(1)+','+py(s[2]*Math.pow(gr,i)).toFixed(1));
      o4+='<polyline class="ln '+s[5]+'" points="'+pts.join(' ')+'" pathLength="100"/>';
      o4+='<circle class="dt '+s[5]+'" cx="'+px(s[1])+'" cy="'+py(s[2])+'" r="4"/><circle class="dt '+s[5]+'" cx="'+px(s[3])+'" cy="'+py(s[4])+'" r="4"/>';
      o4+='<text class="vl" x="'+(px(s[3])-8)+'" y="'+(py(s[4])-10)+'" text-anchor="end">'+s[0]+' '+s[4].toFixed(2)+' ('+s[3]+')</text>';});
    o4+='<text class="vl mut" x="'+(px(2025)+4)+'" y="'+(py(2.46)-22)+'">1.35–2.46 in 2025</text>';
    el.innerHTML=svg(W4,H4,o4);}
})();

/* ---------- revenue model ---------- */
var TAM=2.46e9+1.35e9+1.4231e9; // 2025: cloud (Mordor) + cyber (Mordor) + online education (IMARC)
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
    rows.push([]);rows.push(['Assumptions: illustrative, not a forecast. TAM = 2025 cloud (Mordor) + cyber (Mordor) + online education (IMARC). FX ₹'+fx+' per US$.']);
    var csv=rows.map(function(r){return r.map(function(c){c=String(c==null?'':c);return /[",]/.test(c)?'"'+c.replace(/"/g,'""')+'"':c;}).join(',');}).join('\n');
    if(XH.download)XH.download('xcellhost-indonesia-revenue-model.csv',csv,'text/csv');});
  calc();}

/* ---------- heatmap ---------- */
var LAWP=[ // [law, pillars, verticals ('*' = all)]
 ['PDP Law + GR 33/2026','DS','*'],['GR 71/2019 + ESO registration','C',['dig','sme','edu','tel','log','bfsi']],
 ['MOCDA Reg 5/2025 (public ESPs)','CS',['gov','hc','edu']],['Perpres 82/2022 (vital infrastructure)','SD',['gov','nrg','log','bfsi','hc','tel']],
 ['RUU KKS (draft)','S',['gov','nrg','bfsi','hc','tel','log']],['POJK 11/2022 + OJK Reg 1/2026','CSD',['bfsi']],['BI Reg 2/2024','SD',['bfsi','dig']],
 ['PSrE e-signatures','T',['bfsi','gov','hc','dig','log']],['AI circular + draft AI Perpres','AL','*'],
 ['Perpres 46/2025 (TKDN)','C',['gov','nrg','hc','edu']],['SATUSEHAT EMR circular','CD',['hc']]];
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
   HERO — one rAF loop: drawn Indonesia outline (main islands), city pins, flows to Mumbai
   ===================================================================== */
var MY=[ // simplified outlines of Indonesia's main islands (Indonesian territory only); not to scale
 [[95.3,5.6],[97.5,5.2],[98.7,3.8],[100.4,2.2],[101.4,1.7],[103.0,0.5],[103.8,-1.0],[104.6,-2.3],[105.9,-3.2],[105.8,-5.8],[104.6,-5.9],[103.4,-4.9],[102.3,-4.0],[101.0,-2.6],[100.3,-1.0],[99.2,0.2],[98.6,1.7],[97.1,3.0],[95.9,4.0],[95.3,5.6]],
 [[105.2,-6.8],[106.0,-5.9],[107.0,-6.0],[108.3,-6.3],[110.4,-6.9],[111.5,-6.6],[112.6,-6.9],[114.4,-7.7],[114.4,-8.7],[113.0,-8.3],[111.0,-8.2],[109.0,-7.7],[107.5,-7.6],[106.4,-7.4],[105.2,-6.8]],
 [[114.5,-8.2],[115.7,-8.4],[116.6,-8.3],[118.0,-8.2],[119.0,-8.4],[120.6,-8.3],[122.9,-8.1],[123.0,-8.6],[121.0,-8.9],[119.0,-8.9],[117.0,-9.0],[115.5,-8.8],[114.5,-8.2]],
 [[108.9,1.6],[109.6,2.0],[110.6,1.6],[111.8,1.1],[113.6,1.3],[114.7,1.7],[115.5,3.0],[115.6,4.15],[116.5,4.35],[117.6,4.2],[118.0,2.0],[119.0,1.0],[118.0,0.6],[117.6,-0.5],[116.6,-1.5],[116.4,-3.2],[115.9,-3.9],[114.6,-4.1],[113.0,-3.2],[111.7,-3.0],[110.2,-2.9],[110.0,-1.7],[109.1,-0.6],[109.0,0.5],[108.9,1.6]],
 [[119.4,-5.6],[119.8,-3.5],[118.8,-2.8],[119.3,-1.0],[119.8,0.6],[120.6,1.2],[122.5,1.0],[124.4,1.2],[125.2,1.6],[124.6,0.5],[123.0,0.4],[121.2,0.4],[120.4,-0.6],[121.4,-1.0],[123.4,-0.8],[122.4,-1.8],[121.4,-2.2],[122.4,-3.4],[123.2,-4.6],[122.6,-5.6],[121.7,-4.8],[121.2,-3.3],[120.4,-2.8],[120.4,-5.5],[119.4,-5.6]],
 [[128.0,-3.2],[130.0,-3.0],[130.8,-3.9],[129.0,-3.6],[128.0,-3.2]],
 [[131.0,-1.4],[132.3,-0.4],[133.9,-0.7],[135.0,-3.3],[136.0,-1.8],[137.8,-1.5],[139.0,-2.1],[141.0,-2.6],[141.0,-9.1],[139.9,-8.1],[138.6,-8.4],[137.6,-6.0],[136.0,-4.6],[134.1,-3.9],[133.4,-3.6],[132.8,-4.0],[132.0,-2.8],[133.0,-2.2],[131.9,-1.6],[131.0,-1.4]]];
var CITY=[['Medan',98.67,3.59,'a'],['Batam',104.03,1.13,'a'],['Jakarta',106.85,-6.21,'b'],['Surabaya',112.75,-7.25,'r'],['Makassar',119.42,-5.14,'r']];
var SC=[
 {t:'Market · where the money is',s:'Simplified outline, not to scale · figures sourced below',
  c:'<span class="vg-ck">2025 · US$ · sourced</span><div class="vg-cr"><b>~US$100B</b><span>digital economy GMV</span></div><div class="vg-cr"><b>US$2.46B</b><span>cloud computing</span></div><div class="vg-cr"><b>US$1.35–1.4B</b><span>cyber security</span></div><div class="vg-cr"><b>~340 MW</b><span>operating in Jakarta</span></div>'},
 {t:'Verticals · who buys first',s:'Wave 1 in the first 6 months, then waves 2 and 3',
  c:'<span class="vg-ck">Wave 1 · months 0–6</span><div class="vg-cch"><i>BFSI &amp; fintech</i><i>Digital &amp; e-commerce</i><i>Manufacturing</i><i>SMEs</i></div><span class="vg-ck">Waves 2–3</span><div class="vg-cch m"><i>Telecom &amp; DCs</i><i>Healthcare</i><i>Education</i><i>Logistics</i><i>Energy &amp; mining</i><i>Government</i></div>'},
 {t:'Laws · personal data stays in Indonesia',s:'Jakarta and Batam partner DCs · Mumbai second line without personal data',
  c:'<span class="vg-ck">Key dates</span><div class="vg-cl"><b>22 Apr 2024</b><span>BI Reg 2/2024 · 1-hour notice</span></div><div class="vg-cl"><b>1 Mar 2026</b><span>OJK bank IT governance</span></div><div class="vg-cl"><b>16 Jul 2026</b><span>GR 33/2026 signed</span></div><div class="vg-cl"><b>16 Jan 2027</b><span>GR 33/2026 applies</span></div>'},
 {t:'Roadmap · 18 months',s:'Partner DCs in Jakarta and Batam · second line from Mumbai',
  c:'<span class="vg-ck">Partner-led entry · goals</span><div class="vg-cp"><span>0–6 m · Prove</span><i><u style="--w:100%"></u></i></div><div class="vg-cp"><span>6–12 m · Establish</span><i><u style="--w:66%"></u></i></div><div class="vg-cp"><span>12–18 m · Scale</span><i><u style="--w:33%"></u></i></div><div class="vg-cr g"><b id="vgHeroRev">US$1.18M</b><span>annualised revenue goal</span></div>'}];
var cv=$('#vgMap'),stage=$('#vgStage'),card=$('#vgCard'),dots=$$('#vgDots [data-k]'),pz=$('#vgPz');
if(cv&&cv.getContext){
  var ctx=cv.getContext('2d'),W=0,H=0,DPR=1,proj=null,polys=[],segs=[],totL=0,cityP=[],mum=null;
  var k=0,t0=performance.now(),sceneT=0,visible=true,paused=false,hover=false,raf=0,DUR=5600,last=t0,drawn=REDUCE?1:0,sceneStart=t0;
  function size(){var r=cv.parentNode.getBoundingClientRect();DPR=Math.min(2,window.devicePixelRatio||1);W=Math.max(280,r.width);H=Math.max(260,r.height);
    cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);ctx.setTransform(DPR,0,0,DPR,0,0);
    var narrow=W<520,mx0=narrow?W*0.26:W*0.24,mx1=W*0.975,my0=H*0.16,my1=H*0.86,lon0=94.6,lon1=141.4,lat0=-10.2,lat1=6.4,cf=Math.cos(2*Math.PI/180);
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
    for(var lo=95;lo<=140;lo+=5){var a=proj(lo,-10.2),b=proj(lo,6.4);ctx.moveTo(a[0],a[1]);ctx.lineTo(b[0],b[1]);}
    for(var la=-10;la<=5;la+=5){var c=proj(94.6,la),dd=proj(141.4,la);ctx.moveTo(c[0],c[1]);ctx.lineTo(dd[0],dd[1]);}ctx.stroke();
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
      if(k===2){var p2=qpt(mum,cc,cp,0.5);ctx.fillStyle='#0B132B';ctx.strokeStyle='rgba(255,138,0,0.9)';ctx.lineWidth=1.2;ctx.beginPath();ctx.arc(p2[0],p2[1],9,0,6.283);ctx.fill();ctx.stroke();
        ctx.fillStyle='#FF8A00';ctx.fillRect(p2[0]-3.5,p2[1]-1,7,5.5);ctx.strokeStyle='#FF8A00';ctx.lineWidth=1.3;ctx.beginPath();ctx.arc(p2[0],p2[1]-1.5,2.6,Math.PI,0);ctx.stroke();}});
    // city pins
    cityP.forEach(function(cp,ci){var ph=REDUCE?0.5:((T*0.8+ci*0.33)%1);
      ctx.strokeStyle='rgba(255,255,255,'+(0.55*(1-ph)).toFixed(3)+')';ctx.lineWidth=1.4;ctx.beginPath();ctx.arc(cp.x,cp.y,5+ph*14,0,6.283);ctx.stroke();
      ctx.fillStyle=(k===3)?'#FF8A00':'#ffffff';ctx.beginPath();ctx.arc(cp.x,cp.y,4.5,0,6.283);ctx.fill();
      ctx.font='600 11px "Sora",sans-serif';ctx.fillStyle='#ffffff';
      var lx=cp.x,ly=cp.y+4;
      if(cp.a==='l'){ctx.textAlign='right';lx=cp.x-10;}else if(cp.a==='r'){ctx.textAlign='left';lx=cp.x+10;}else{ctx.textAlign='center';ly=cp.a==='a'?cp.y-12:cp.y+20;}
      ctx.fillText(cp.n,lx,ly);
      if(k===3&&(ci===1||ci===2)){ctx.font='400 9.5px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.fillText('partner DC',lx,ly+13);}
});
    ctx.globalAlpha=1;
    if(k===2&&e>=1){ctx.font='600 10px "IBM Plex Mono",monospace';ctx.fillStyle='rgba(255,138,0,0.95)';ctx.textAlign='center';var c0=proj(127.5,4.6);ctx.fillText('PDP LAW · GR 33/2026',c0[0],c0[1]);}
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
