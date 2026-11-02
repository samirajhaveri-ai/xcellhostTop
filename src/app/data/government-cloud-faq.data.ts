// FAQs from the supplied Government Cloud document.
export const GOVERNMENT_CLOUD_FAQS: [string, string][] = [
  [
    "Is XcellHost MeitY empanelled?",
    "Yes, XcellHost is MeitY empanelled. Empanelment applies to specific cloud service offerings, so we share the empanelment and related audit documents with your team to confirm scope and validity for your workload before you order."
  ],
  [
    "Where is our data stored?",
    "Production runs in XcellHost's Tier IV data centre in Mumbai. DR and backup copies sit at a partner data centre in India* named in your contract. We do not replicate, back up or support your data from outside India."
  ],
  [
    "Can we buy through GeM?",
    "GeM procurement is available on request*. MeitY's guidance has empanelled cloud services listed on GeM with prices; tell us your requirement and we will confirm the listing and route. Tender and direct-order routes are also supported as your rules allow."
  ],
  [
    "Does hosting with you make our portal GIGW compliant?",
    "No host can do that alone. GIGW 3.0 covers content, design, accessibility (WCAG 2.1 Level AA), security and lifecycle management, most of which sit with your developers and Web Information Manager. We provide fast, hardened hosting, an indicative readiness review* and help fixing findings from your safe-to-host audit."
  ],
  [
    "Who issues the safe-to-host certificate?",
    "GIGW 3.0 asks for a safe-to-host certificate from auditors empanelled by CERT-In or STQC, or from STQC or NIC auditors. XcellHost is not your auditor; we give the auditor access, fix infrastructure findings and can arrange a CERT-In empanelled partner* if you need one."
  ],
  [
    "How do you support CERT-In's 6-hour reporting?",
    "Our SOC triages alerts around the clock, keeps logs in India for at least 180 days on NTP-synced clocks and drafts incident reports with timelines and indicators, so your CISO can report to CERT-In within six hours. A reporting retainer is ₹14,999* a month."
  ],
  [
    "Does the DPDP Act apply to government bodies?",
    "Generally yes. The Act lets the Central Government exempt instrumentalities of the State that it notifies under section 17(2)(a), and allows processing without consent for subsidies, benefits and services under section 7(b), subject to the standards in Rule 5 and the Second Schedule. Breach intimation and security duties still matter. We design to the safeguards either way; confirm your position with your legal team."
  ],
  [
    "Can you handle a scheme launch or results day?",
    "Yes. We plan burst capacity with you, put a CDN and WAF in front, load-test before launch and keep engineers on watch during the window. Use the surge planner for a first estimate."
  ],
  [
    "What happens if we move to a State Data Centre or another provider?",
    "The exit plan in your contract applies: we export data, files and configurations in agreed open formats, co-operate with the receiving team, and delete remaining copies under witness once you confirm, with a certificate for your records."
  ],
  [
    "Can smart-city ICCC and CCTV video run here?",
    "Yes. Command-centre applications run on a dedicated cluster, video and clips go to object storage in India, sensors connect through our IoT Cloud and OT networks can be reviewed through an OT assessment. GPU analytics is priced on quote."
  ],
  [
    "What does Government Cloud cost?",
    "Shared VPC compute is ₹599 per vCPU, ₹149 per GB RAM and ₹6 per GB NVMe a month; a dedicated 3-node cluster is ₹49,999* a month. Managed DR is ₹2,499* per workload and SOC ₹449* per server a month. The onboarding and audit-readiness pack is ₹59,999* one-time. All excl. 18% GST."
  ]
];
