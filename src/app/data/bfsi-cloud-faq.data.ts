// FAQs from the supplied BFSI Cloud document.
export const BFSI_CLOUD_FAQS: [string, string][] = [
  [
    "Is XcellHost BFSI Cloud \"RBI compliant\"?",
    "No provider can make you compliant — RBI holds the regulated entity accountable. BFSI Cloud is designed to help you meet the RBI Master Direction on Outsourcing of IT Services and the IT governance directions: India-hosted data, audit and inspection rights, tested DR, named sub-contractors, keys under your control and an exit plan, with evidence for each."
  ],
  [
    "Where exactly is our data stored?",
    "Production runs in XcellHost's Tier IV data centre in Mumbai. DR and backup copies sit at a partner data centre in India* named in your contract. We do not replicate, back up or support your data from outside India unless you instruct us in writing."
  ],
  [
    "Can RBI, SEBI or our auditors inspect XcellHost?",
    "Yes. Our BFSI contract grants audit and inspection rights to you, your internal and external auditors and your regulator, covering XcellHost and our sub-contractors for your services. Pooled audits with other regulated customers are supported."
  ],
  [
    "Is XcellHost MeitY empanelled?",
    "Yes, XcellHost is MeitY empanelled. SEBI's cloud framework and IRDAI's guidelines refer to MeitY-empanelled providers and STQC audit status; we share the empanelment and related audit documents in the due-diligence pack so your team can check scope and validity."
  ],
  [
    "What RPO and RTO can you achieve?",
    "It depends on the pattern and your applications. Backup and restore suits RPO of hours; warm standby with asynchronous replication can reach minutes; hot standby with synchronous database replication can approach near-zero RPO. SEBI's CSCRF FAQs describe RTO of 2 hours and RPO of 15 minutes for critical systems, and RBI's IT governance directions ask for half-yearly DR drills. Targets in your contract are confirmed after design*."
  ],
  [
    "Who holds the encryption keys?",
    "You do. Keys live in a dedicated Cloud HSM partition in Mumbai, administered by your custodians under an M-of-N quorum. XcellHost runs the hardware but cannot use partition keys."
  ],
  [
    "Can we host core banking on BFSI Cloud?",
    "Yes, on a dedicated cluster. We host leading CBS platforms* to the sizing your CBS vendor specifies, with database tiers, DR and connectivity to branches and payment networks designed together. Licences remain between you and your vendor."
  ],
  [
    "How do you help with CERT-In's 6-hour reporting?",
    "Our SOC triages alerts around the clock, keeps logs in India for at least 180 days and drafts incident reports with timelines and indicators, so your team can report to CERT-In within six hours and copy RBI, SEBI or IRDAI as your rules require. A reporting retainer is available at ₹14,999* a month."
  ],
  [
    "What happens if we leave?",
    "The exit plan in your contract applies: we export data and configurations in agreed formats, co-operate with your new provider during transition without altering data, and destroy remaining copies under witness once you confirm, with a certificate for your records."
  ],
  [
    "Do the RBI outsourcing directions apply to co-operative banks and RRBs?",
    "RBI's IT outsourcing directions name Tier 3 and Tier 4 urban co-operative banks; Tier 1 and 2 UCBs are not named, and the covering letter excludes RRBs. Other RBI instructions may still apply to them, and many such banks follow the same practices voluntarily. Our readiness checker shows typical applicability; confirm with your compliance team."
  ],
  [
    "What does BFSI Cloud cost?",
    "Shared VPC compute is ₹599 per vCPU, ₹149 per GB RAM and ₹6 per GB NVMe a month; a dedicated 3-node cluster is ₹49,999* a month. Managed DR is ₹2,499* per workload, Cloud HSM ₹24,999* per partition and SOC ₹449* per server a month. All excl. 18% GST; licences and links are quoted."
  ],
  [
    "Can we run AI and fraud analytics on it?",
    "Yes. Fraud scoring, AML analytics and private AI assistants can run on data that stays in India, with usage logs kept — useful as RBI's FREE-AI framework shapes expectations. GPU capacity is priced on quote through AI Factory."
  ]
];
