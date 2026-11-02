// FAQs from the supplied HealthCare Cloud document.
export const HEALTHCARE_CLOUD_FAQS: [string, string][] = [
  [
    "Is HealthCare Cloud \"ABDM certified\"?",
    "No — and no hosting provider can be. Under the NHA's HIP / HIU guidelines it is your HIS or app software that integrates with the ABDM Sandbox (milestones M1, M2 and M3) and is certified through empanelled agencies before production keys are issued. We host that software in India, keep sandbox and production apart, and provide the uptime, logs and backups the guidelines expect."
  ],
  [
    "Where is patient data stored?",
    "Production runs in XcellHost's Tier IV data centre in Mumbai. DR and backup copies sit at a partner data centre in India* named in your contract. We do not replicate, back up or support your data from outside India unless you instruct us in writing."
  ],
  [
    "Can we host our existing HIS, PACS or LIS?",
    "Yes. We host the software you already license, sized with your vendor. Most HIS, PACS and LIS products run on Windows or Linux servers with SQL or Oracle databases, which fit our shared VPC or a dedicated cluster. Licences remain between you and your vendor."
  ],
  [
    "Will radiologists notice slower image loading?",
    "Not if the design is right. Recent studies can stay on an edge node or local cache at the hospital, with the full archive in Mumbai. Reading rooms connect over SD-WAN or private links; we size bandwidth from your study volumes during assessment."
  ],
  [
    "How long must we keep medical records?",
    "That is a policy decision for your organisation and its legal advisers — requirements differ by record type, state rules and medico-legal exposure. The ABDM guidelines say retention will follow a Health Data Retention policy. Our PACS calculator lets you model any retention period, and archive storage grows per TB."
  ],
  [
    "How do you help against ransomware?",
    "Backups are written to immutable storage with a separate air-gapped copy, so ransomware in production cannot delete them. The SOC watches for encryption behaviour, PAM removes standing admin access, and restore tests are run on a schedule so you know how long a full HIS recovery takes."
  ],
  [
    "Does the DPDP Act treat health data differently?",
    "The Act applies to digital personal data generally rather than defining a separate \"sensitive\" category. Hospitals still need reasonable security safeguards, breach intimation without delay, and — under the DPDP Rules notified on 14 November 2025 — verifiable parental consent for children's data, with exemptions for essential services such as healthcare. Rules phase in over 18 months."
  ],
  [
    "How do you help with CERT-In's 6-hour reporting?",
    "Our SOC triages alerts around the clock, keeps logs in India for at least 180 days and drafts incident reports with timelines and indicators, so your team can report to CERT-In within six hours. A reporting retainer is available at ₹14,999* a month."
  ],
  [
    "Can we run teleconsultation on it?",
    "Yes. Telemedicine platforms run on the shared VPC behind WAF, with call logs, chat transcripts and documents stored in India. The 2020 Telemedicine Practice Guidelines expect practitioners to keep logs of each interaction; we keep the storage, retention and access controls in place."
  ],
  [
    "What about AI for radiology or triage?",
    "GPU capacity for imaging AI is priced on quote through AI Factory, on data that stays in India. AI should assist, not replace, the clinician — the Telemedicine Practice Guidelines bar AI tools from prescribing. If the AI is itself a medical device, its maker handles CDSCO classification and licensing."
  ],
  [
    "What does HealthCare Cloud cost?",
    "Shared VPC compute is ₹599 per vCPU, ₹149 per GB RAM and ₹6 per GB NVMe a month; a dedicated 3-node cluster is ₹49,999* a month. PACS archive storage is ₹1,999* per TB, managed DR ₹2,499* per workload and SOC ₹449* per server a month. All excl. 18% GST; licences and links are quoted."
  ],
  [
    "Is XcellHost MeitY empanelled?",
    "Yes, XcellHost is MeitY empanelled, and holds ISO 27001 and ISO 20000-1. We share empanelment and audit documents in the onboarding pack so your team can check scope and validity for your tender or accreditation file."
  ]
];
