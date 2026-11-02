// FAQs from the supplied Insurance Cloud document.
export const INSURANCE_CLOUD_FAQS: [string, string][] = [
  [
    "Is XcellHost Insurance Cloud \"IRDAI compliant\"?",
    "No provider can make an insurer compliant — IRDAI holds the insurer or intermediary accountable. Insurance Cloud is designed to help you meet IRDAI's cyber security guidelines and the outsourcing chapter of the 2024 PPI Regulations, with evidence for each control."
  ],
  [
    "Which IRDAI rules cover outsourcing to a cloud provider now?",
    "The IRDAI (Protection of Policyholders' Interests, Operations and Allied Matters of Insurers) Regulations 2024 — Part B, Chapter 3 (Regulations 45–54) — in force from 1 April 2024, read with IRDAI's master circular of 19 June 2024. Regulation 58 repealed the 2017 Outsourcing Regulations. The chapter does not apply to insurers doing only reinsurance."
  ],
  [
    "Can IRDAI inspect XcellHost?",
    "Yes. The contract gives IRDAI, and your auditors, the right to examine our books, records, systems and internal controls for your services, and access to audit reports — as Regulation 53 expects insurers to secure."
  ],
  [
    "Where is policyholder data stored?",
    "Production runs in XcellHost's Tier IV data centre in Mumbai; DR and backups sit at a partner data centre in India* named in your contract. Nothing is replicated or supported from outside India unless you instruct us in writing."
  ],
  [
    "Is XcellHost MeitY empanelled?",
    "Yes. IRDAI's cyber security guidelines refer to empanelled cloud providers; we share empanelment and related audit documents in the due-diligence pack so your team can check scope and validity."
  ],
  [
    "Do the IRDAI cyber guidelines apply to brokers and TPAs?",
    "The guidelines are addressed to insurers and to intermediaries regulated by IRDAI, with some controls scaled to size. The readiness checker shows typical applicability; confirm with your compliance team."
  ],
  [
    "Which core insurance platforms can you host?",
    "We are platform-neutral: commercial core insurance suites, in-house policy admin and claims systems, document management and analytics stacks. We size with your vendor; licences stay between you and them."
  ],
  [
    "How do you handle renewal-season peaks?",
    "Shared VPC capacity is added on request at ₹599 per vCPU and ₹149 per GB RAM a month and removed after the peak; dedicated clusters add nodes at ₹17,999 a month each. Use the claims estimator to see the effect."
  ],
  [
    "Can we run fraud analytics and document AI?",
    "Yes — on data that stays in India. Document AI for claims runs through Enterprise RAG; GPU capacity for heavier models is priced on quote through AI Factory. Teams can train through our AI course for insurance professionals."
  ],
  [
    "How do you help with CERT-In and DPDP breach timelines?",
    "The SOC triages around the clock, keeps logs in India for at least 180 days and drafts incident reports so you can report to CERT-In within six hours. The same timeline supports DPDP intimation to the Data Protection Board and affected people."
  ],
  [
    "What does it cost?",
    "Shared VPC compute is ₹599 per vCPU, ₹149 per GB RAM and ₹6 per GB NVMe a month; a dedicated 3-node cluster is ₹49,999* a month. Managed DR is ₹2,499* per workload, SOC ₹449* per server and the onboarding pack ₹64,999* one-time. All excl. 18% GST."
  ],
  [
    "What happens at exit?",
    "We return your data in agreed formats, co-operate with the incoming provider, then erase data from disks and backups and give you a deletion certificate — matching what IRDAI's guidelines and Regulation 51 expect."
  ]
];
