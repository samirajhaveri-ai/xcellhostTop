// FAQs from the supplied Construction Cloud document.
export const CONSTRUCTION_CLOUD_FAQS: [string, string][] = [
  [
    "Can Revit and AutoCAD really run well on a cloud desktop?",
    "Yes, on GPU desktops with an NVIDIA vGPU profile sized to your models. The model stays in the data centre and only the screen travels, so a 3 GB federated model opens at the speed of the server, not the laptop. We run a pilot with your own files before you commit; GPU desktops are priced on quote."
  ],
  [
    "What internet speed does a designer or site user need?",
    "Office and estimation users work well on a stable broadband or 4G connection. GPU design desktops need more bandwidth and low latency for smooth 3D; we measure each location in the survey and set display profiles to suit."
  ],
  [
    "Do we keep our Autodesk, estimation and ERP licences?",
    "Yes. Software licences stay between you and the vendor. Check each vendor's terms for virtual or cloud use; we help you read them and set up licence servers in the cloud."
  ],
  [
    "How does SD-WAN help a temporary site office?",
    "A pre-configured box bonds whatever links the site has — broadband, 4G, 5G — and moves traffic off a failing link before people notice. It ships ready, comes up when plugged in, and moves to the next site when this one closes. Essential is ₹2,999* and Professional ₹4,499* per site a month."
  ],
  [
    "Where are drone surveys and site photos stored?",
    "On S3-compatible object storage in our Mumbai region, in buckets per project, with versioning and lifecycle rules. Any drone or photo app that supports a custom S3 endpoint can upload directly. Storage is ₹1,999* per TB a month."
  ],
  [
    "Does Construction Cloud make us \"RERA compliant\"?",
    "No provider can do that — the promoter stays responsible. We help by keeping sales, approvals, accounts, certificates and progress photos in hosted systems with audit trails, so the quarterly update under section 11 and the project-account records under section 4 come from one place. You file on your state's RERA portal."
  ],
  [
    "Can you run CCTV for our sites?",
    "Yes, through Video Surveillance-as-a-Service: existing ONVIF NVRs, DVRs and IP cameras connect to cloud video management with alerts such as helmet and vest detection, intrusion and fire or smoke*. It is priced on quote because cameras, retention and bandwidth vary by site."
  ],
  [
    "How do you handle buyer and worker personal data?",
    "We act as your processor: data is stored in India, encrypted, behind MFA and logged. We help with the DPDP Act's safeguards and breach runbooks, and our vDPO retainer can support notices, consent and rights requests."
  ],
  [
    "What happens when a project finishes?",
    "We remove the site link and desktops you no longer need, freeze drawings, photos and handover documents into an archive with retention locks, and keep it searchable through the defect-liability period and beyond if you choose."
  ],
  [
    "Can you protect site laptops that leave the office?",
    "Yes. EDR at ₹99* per user a month watches every laptop, our SOC responds 24×7 at ₹449* per server, and with cloud desktops there is no project data on the laptop to lose in the first place."
  ],
  [
    "What does Construction Cloud cost?",
    "Compute is ₹599 per vCPU, ₹149 per GB RAM and ₹6 per GB NVMe a month; cloud desktops start at ₹899* per user, VDI Power User desktops are ₹3,499*, SD-WAN from ₹2,999* per site and object storage ₹1,999* per TB. GPU desktops and CCTV are on quote. All excl. 18% GST."
  ]
];
