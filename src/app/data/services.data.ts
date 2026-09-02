/**
 * Per-service copy: price, overview, features and FAQs for 186 services.
 * Keys are lowercase service names. A service listed in directory.data.ts but
 * missing here falls back to the category defaults in category.data.ts.
 *
 * EDIT THIS FILE to change site content — no other file needs touching.
 */

import { ServiceRich, Pair, Faq, Category } from './models';

export const SERVICES_RICH: Record<string, ServiceRich> = {
  "tally on cloud": {
    "price": "₹499/user/mo",
    "ov": "Stop being tied to a single office desktop with XcellHost Tally on Cloud. Host your Tally and TallyPrime on secure Indian cloud servers and access the same live data from anywhere. Your accountants can work from the office, auditors can review records remotely, and branch teams can stay connected from any location. Access your business data securely across Mumbai, Dubai, or even the factory floor. With reliable cloud infrastructure, your team can collaborate efficiently without being limited by location. Free migration makes the transition simple and hassle-free. Plus, with a 15-day money-back guarantee, you can move your Tally to the cloud with confidence.",
    "f": [
      [
        "Any device, any OS",
        "Windows, Mac, Linux, Android, iOS — full Tally via browser or lightweight client"
      ],
      [
        "Multi-branch, one Tally",
        "Every branch and your CA work on the same live data — no more emailing backup files"
      ],
      [
        "Ransomware-proof",
        "Encrypted backups every 3 hours plus a daily remote DR copy"
      ],
      [
        "99.95% uptime SLA",
        "Tier-4 Indian datacenters with NVMe storage — faster than most office PCs"
      ],
      [
        "Bring Your Own Licence",
        "Your existing Tally licence works — nothing new to buy"
      ],
      [
        "Tally-aware 24×7 support",
        "Engineers who actually know Tally, in English and Hindi"
      ]
    ],
    "q": [
      [
        "Which Tally versions are supported?",
        "TallyPrime (all releases) and Tally ERP 9. Server environments are updated as Tally ships new releases."
      ],
      [
        "Can my CA access it from their office?",
        "Yes — create a user for your CA in the web console with exactly the access you choose. The most-loved feature at audit time."
      ],
      [
        "What happens to my data if I leave?",
        "Your data is yours — download a full backup anytime; on cancellation we hand over final backups and certify deletion."
      ],
      [
        "How safe is it from ransomware?",
        "Backups run every 3 hours, encrypted and immutable — no infected device can encrypt your cloud backups."
      ]
    ]
  },
  "dpdpa platform": {
    "alias": [
      "dpdpa platform & consulting"
    ],
    "price": "Free assessment",
    "ov": "The Digital Personal Data Protection Act is enforceable law with penalties up to ₹250 crore per instance. XcellHost combines a purpose-built compliance platform with hands-on consulting from certified privacy professionals — data discovery, consent management, data principal rights automation, breach readiness and vDPO services — so you reach compliance in 8–12 weeks and stay there.",
    "f": [
      [
        "Data discovery & mapping",
        "Scan databases, file servers, SaaS and endpoints into a living data map"
      ],
      [
        "Consent management",
        "Purpose-specific consent records, audit trails, easy withdrawal workflows"
      ],
      [
        "Rights automation",
        "Access, correction and erasure requests tracked against statutory timelines"
      ],
      [
        "Breach readiness",
        "Classification matrix, DPB notification templates, response runbooks"
      ],
      [
        "vDPO-as-a-Service",
        "A qualified India-based DPO at a fraction of full-time cost"
      ],
      [
        "Platform + experts",
        "Software plus consulting — you get a running system, not just a report"
      ]
    ],
    "q": [
      [
        "What is the penalty for non-compliance?",
        "The highest tier — failure of reasonable security safeguards — reaches up to ₹250 crore per instance."
      ],
      [
        "We are RBI-regulated — is that enough?",
        "No. DPDPA adds consent, data principal rights, DPB notification and DPO obligations that RBI frameworks do not cover."
      ],
      [
        "How long does compliance take?",
        "A typical mid-size enterprise: 2 weeks assessment, 4–6 weeks remediation and deployment — audit-ready in 8–12 weeks."
      ],
      [
        "Can I get just the DPO, without the platform?",
        "Yes — vDPO-as-a-Service is available standalone, as is the readiness assessment."
      ]
    ]
  },
  "cloud backup (acronis)": {
    "alias": [
      "cloud backup",
      "acronis cloud backup",
      "acronis true image"
    ],
    "price": "₹6/GB/mo",
    "ov": "Cloud Backup helps organizations protect servers, endpoints, applications, and business-critical workloads against data loss. It safeguards critical data from accidental deletion, hardware failure, ransomware, and other causes of data loss. Automated backup schedules ensure important data is backed up regularly with minimal manual effort. Configurable retention policies help businesses maintain recoverable copies of critical data when needed. Reliable recovery capabilities enable fast data restoration while reducing downtime and dependence on manual backup processes.",
    "f": [
      [
        "Immutable backups",
        "Attackers cannot encrypt or delete your cloud copies"
      ],
      [
        "AnyData protection",
        "Servers, VMs, PCs, Macs, mobile, M365, Google Workspace"
      ],
      [
        "AES-256 encryption",
        "In transit and at rest, with your own encryption key option"
      ],
      [
        "India data residency",
        "RBI / DPDPA localisation friendly"
      ],
      [
        "Flexible recovery",
        "From file-level to bare-metal restore and instant VM spin-up"
      ],
      [
        "Central console",
        "All devices and policies from a single dashboard"
      ]
    ],
    "q": [
      [
        "How often do backups run?",
        "You set the schedule — up to hourly. Best practice: incremental every 3 hours."
      ],
      [
        "How fast is a restore?",
        "Single files in minutes; Instant Restore can boot a VM in the cloud immediately."
      ],
      [
        "Are M365 mailboxes covered?",
        "Yes — a dedicated M365 Backup plan covers Exchange, SharePoint, OneDrive and Teams."
      ],
      [
        "Where is data stored?",
        "In Indian Tier-4 datacenters, encrypted. An international DR copy is optional."
      ]
    ]
  },
  "bare metal server": {
    "alias": [
      "bare metal servers"
    ],
    "price": "₹8,264/mo",
    "ov": "When virtualization overhead is the bottleneck, bare metal is the answer. You get the entire physical machine — every core, every GB of RAM, all NVMe I/O — with no hypervisor tax and no noisy neighbours. Ideal for databases, high-traffic apps and compliance workloads demanding single-tenancy.",
    "f": [
      [
        "100% dedicated hardware",
        "Single tenant, full root/IPMI access"
      ],
      [
        "Xeon / EPYC + NVMe",
        "Latest configurations with serious I/O"
      ],
      [
        "Tier-4 Indian DCs",
        "99.95% uptime SLA"
      ],
      [
        "Unmetered private networking",
        "Free traffic between your servers"
      ],
      [
        "Managed option",
        "We handle OS, patching and monitoring for you"
      ],
      [
        "DDoS protection",
        "Included by default"
      ]
    ],
    "q": [
      [
        "How fast is deployment?",
        "Standard configurations in 2–24 hours; custom builds in 2–3 business days."
      ],
      [
        "Managed or unmanaged?",
        "Both — managed includes hardening, patching, monitoring and backup configuration."
      ],
      [
        "Can I install my own OS?",
        "Yes — IPMI/KVM access supports any OS, including custom ISOs."
      ],
      [
        "Can I run virtualization on it?",
        "Absolutely — install Proxmox, VMware or Hyper-V and build your own private cloud."
      ]
    ]
  },
  "gpu cloud": {
    "price": "₹14,999/mo",
    "ov": "Train models, render scenes and crunch scientific workloads without buying hardware that is obsolete in two years. NVIDIA GPUs in Indian datacenters, provisioned in minutes, billed predictably in INR — close to your data, with no cross-border latency or transfer costs.",
    "f": [
      [
        "NVIDIA GPUs",
        "Configurations for training, inference and rendering"
      ],
      [
        "ML stacks ready",
        "CUDA, PyTorch and TensorFlow images pre-configured"
      ],
      [
        "NVMe scratch storage",
        "Built for dataset-heavy jobs"
      ],
      [
        "India-resident data",
        "Important for regulated AI workloads (BFSI, healthcare)"
      ],
      [
        "Hourly + monthly billing",
        "Scale up or down as needed"
      ],
      [
        "Access in minutes",
        "Jupyter or SSH, ready immediately"
      ]
    ],
    "q": [
      [
        "Which GPUs are available?",
        "Inventory is updated regularly — confirm current configurations with our sales team."
      ],
      [
        "Does my dataset stay in India?",
        "Yes — both compute and storage reside in Indian datacenters."
      ],
      [
        "Is short-term usage possible?",
        "Yes, hourly billing is available."
      ],
      [
        "Do you support multi-GPU training?",
        "Multi-GPU nodes with private networking are available for distributed training."
      ]
    ]
  },
  "performance cloud": {
    "price": "₹999/mo",
    "ov": "Shared hosting is cheap until it costs you customers. Performance Cloud gives your applications dedicated vCPU, RAM and NVMe storage — consistent speed under load, without bare-metal prices. Perfect for business sites, e-commerce, SaaS and staging.",
    "f": [
      [
        "Dedicated resources",
        "No noisy-neighbour throttling"
      ],
      [
        "NVMe SSD storage",
        "Queries and page loads fly"
      ],
      [
        "Deploy in minutes",
        "Ubuntu, CentOS, Windows, cPanel/Plesk templates"
      ],
      [
        "Snapshots + backups",
        "Built in"
      ],
      [
        "Vertical scaling",
        "Add vCPU/RAM on the fly, no migration"
      ],
      [
        "99.95% SLA",
        "Indian datacenters"
      ]
    ],
    "q": [
      [
        "How does migration from shared hosting work?",
        "It is free — we handle it with a zero-downtime approach."
      ],
      [
        "Is Windows available?",
        "Yes, both Windows and Linux templates."
      ],
      [
        "What happens during traffic spikes?",
        "Your resources are dedicated; vertical scaling takes minutes."
      ],
      [
        "Do I get a control panel?",
        "cPanel/Plesk as an optional add-on, or direct root access."
      ]
    ]
  },
  "smb cloud desktop": {
    "price": "₹999/user/mo",
    "ov": "SMB Cloud Desktop puts your team’s office PC securely in the cloud, giving every employee access to a Windows desktop from anywhere. Access your desktop using a laptop, tablet, or thin client without being tied to a physical device. Company data stays securely in the datacenter instead of being stored on individual devices. Employees can work securely from the office, home, or while travelling. If a laptop is lost or fails, users can quickly switch to another device and continue working. This provides a secure, flexible, and reliable desktop experience for growing businesses.",
    "f": [
      [
        "Any device, anywhere",
        "Windows, Mac, Android, iOS or browser"
      ],
      [
        "Data stays in the datacenter",
        "Lost or stolen devices carry nothing"
      ],
      [
        "Central management",
        "Apps, policies and onboarding from one place"
      ],
      [
        "Backup every 3 hours",
        "Built in"
      ],
      [
        "Local printing + USB",
        "Redirection supported"
      ],
      [
        "Pairs with Tally on Cloud",
        "A complete cloud workspace for your accounts team"
      ]
    ],
    "q": [
      [
        "What if my internet is slow?",
        "The optimized protocol runs smoothly even on 4G; hybrid setups are possible."
      ],
      [
        "Which apps will run?",
        "Any Windows application — Office, Tally, Busy, browsers, custom software."
      ],
      [
        "What happens when an employee resigns?",
        "Revoke access in one click — the data stays with the company."
      ],
      [
        "Is this VDI?",
        "It is simplified VDI for SMBs; enterprises can opt for the full Enterprise Desktop (VDI) offering."
      ]
    ]
  },
  "whatsapp smb": {
    "price": "₹1,249/month",
    "ov": "Turn the channel your customers already use into a practical sales and support workspace. WhatsApp SMB combines the official WhatsApp Business API with campaign broadcasts, a shared multi-agent inbox, no-code chatbots and business integrations, helping small teams respond faster without sharing one phone.",
    "f": [
      [
        "Official WhatsApp Business API",
        "Use approved templates and business messaging workflows on Meta's official platform"
      ],
      [
        "Multi-agent team inbox",
        "Let sales and support teams manage customer conversations together"
      ],
      [
        "Campaigns and scheduling",
        "Send consent-based promotions, reminders and updates at the right time"
      ],
      [
        "No-code chatbot builder",
        "Automate FAQs, lead qualification, routing and after-hours responses"
      ],
      [
        "CRM and commerce integrations",
        "Connect workflows with Tally, Shopify, WooCommerce, Zoho and your APIs"
      ],
      [
        "Personalisation and analytics",
        "Segment contacts, track clicks and measure campaign and agent performance"
      ]
    ],
    "q": [
      [
        "Can several employees use the same WhatsApp number?",
        "Yes. The shared team inbox supports multiple agents with conversation assignment and access controls based on the selected plan."
      ],
      [
        "Can we send promotional broadcasts?",
        "Yes, to customers who have opted in, using templates approved through the official WhatsApp Business platform."
      ],
      [
        "Can WhatsApp SMB connect to our CRM or website?",
        "Yes. Standard integrations and APIs can connect lead forms, CRM records, e-commerce events and internal workflows."
      ],
      [
        "Are Meta messaging charges included?",
        "No. Meta messaging charges and required wallet top-ups are billed separately from the platform subscription."
      ],
      [
        "Can XcellHost help with onboarding?",
        "Yes. Managed plans include setup guidance, template assistance, training and ongoing support according to the selected plan."
      ]
    ]
  },
  "microsoft 365": {
    "price": "₹135/user/mo",
    "ov": "You can buy Microsoft 365 anywhere — the partner is what makes the difference. As a Microsoft Gold Partner, XcellHost helps you pick the right plan, migrates your email without downtime, and answers the phone at 2 AM. Local INR billing with GST invoice.",
    "f": [
      [
        "All plans",
        "Business Basic/Standard/Premium, E3/E5, Exchange Online"
      ],
      [
        "Free migration",
        "From Gmail, Zimbra, cPanel email or legacy Exchange"
      ],
      [
        "24×7 support",
        "Real engineers, in English and Hindi"
      ],
      [
        "GST invoice, INR billing",
        "No forex card hassles"
      ],
      [
        "Security add-ons",
        "Advanced Email Security, Secure DMARC, M365 Backup"
      ],
      [
        "Managed M365",
        "We can run your tenant end-to-end"
      ]
    ],
    "q": [
      [
        "Is it cheaper than buying directly from Microsoft?",
        "Same price, extra value — migration and support come free with us."
      ],
      [
        "Is there downtime during migration?",
        "No — a zero-downtime cutover keeps your old email running until the switch completes."
      ],
      [
        "Doesn’t Microsoft back up M365 itself?",
        "Only limited retention. A separate M365 Backup is strongly recommended."
      ],
      [
        "Can I scale licenses up and down?",
        "Yes — monthly flexibility on eligible plans."
      ]
    ]
  },
  "vapt services": {
    "price": "Free scoping call",
    "ov": "Attackers test your systems daily — free of charge, results not shared. Our VAPT does the same testing on your side: certified engineers simulate real-world attacks on your apps, networks and cloud, then hand you a prioritised report with exact remediation steps. Re-test included — close with proof of fixes.",
    "f": [
      [
        "Full scope",
        "Web, mobile, API, network, cloud, IoT"
      ],
      [
        "Manual + automated",
        "Not just scanner output"
      ],
      [
        "CVSS-scored findings",
        "With business-impact context"
      ],
      [
        "Actionable remediation",
        "Guidance your developers can actually follow"
      ],
      [
        "Free re-test",
        "With a clean-report certificate"
      ],
      [
        "Compliance-mapped",
        "Findings mapped to ISO 27001, PCI, RBI and DPDPA requirements"
      ]
    ],
    "q": [
      [
        "How long does an engagement take?",
        "A typical web application: 1–2 weeks of testing plus the report."
      ],
      [
        "Is it safe on production?",
        "Yes — non-destructive methodology; higher-risk tests run on staging or in maintenance windows."
      ],
      [
        "What is the report format?",
        "Executive summary, technical detail and compliance mapping."
      ],
      [
        "Do we get a certificate?",
        "Yes — a VAPT certificate is issued after a clean re-test, valid for tenders and audits."
      ]
    ]
  },
  "secure dmarc": {
    "price": "Per-domain plans",
    "ov": "Criminals can send emails as your domain right now — unless DMARC says otherwise. We set up SPF/DKIM correctly, monitor every sender using your domain, and move you safely to p=reject so spoofed emails die before reaching anyone. Bonus: with BIMI, your verified logo appears in Gmail and Yahoo inboxes.",
    "f": [
      [
        "Full sender visibility",
        "Every service and server sending as your domain — mapped"
      ],
      [
        "Safe path to p=reject",
        "Enforcement without breaking legitimate email"
      ],
      [
        "SPF flattening",
        "The 10-lookup limit handled automatically"
      ],
      [
        "Real-time alerts",
        "Dashboards and alerts on spoofing attempts"
      ],
      [
        "BIMI readiness",
        "Verified brand logo in inboxes (VMC support)"
      ],
      [
        "Gmail/Yahoo compliance",
        "Bulk-sender requirements covered"
      ]
    ],
    "q": [
      [
        "Will legitimate email get blocked?",
        "No — a monitoring-first approach observes at p=none, whitelists all senders, then enforces."
      ],
      [
        "How long until enforcement?",
        "Typically 4–8 weeks, depending on sender complexity."
      ],
      [
        "Does it stop phishing completely?",
        "It stops exact-domain spoofing; add Digital Risk Monitoring for lookalike domains."
      ],
      [
        "What do we need for the BIMI logo?",
        "DMARC enforcement, a trademarked logo and a VMC certificate — which we arrange."
      ]
    ]
  },
  "smb cyber security appliance": {
    "price": "From ₹24,999/year",
    "ov": "The XcellSecure SMB Cyber Security Appliance is an affordable, cloud-managed security gateway for businesses with up to 50 users. One right-sized platform combines secure business Wi-Fi, advanced firewall protection, web and DNS security, application controls, bandwidth management, real-time visibility and automatic security updates — without the cost and complexity of an enterprise security stack.",
    "f": [
      [
        "Router-Level Protection",
        "Protects every connected device without requiring endpoint software."
      ],
      [
        "Cloud-Managed Dashboard",
        "Manage security, users and policies from anywhere through one simple interface."
      ],
      [
        "Plug-and-Play Setup",
        "Quick installation and straightforward onboarding for small businesses and offices."
      ],
      [
        "No Device Configuration",
        "Apply security, filtering and policies across all connected devices automatically."
      ],
      [
        "Real-Time Malware Blocking",
        "Blocks malicious downloads and threats before they reach business devices."
      ],
      [
        "PhishDefender",
        "Identifies and blocks phishing sites and emerging threats for safer browsing."
      ],
      [
        "Automatic Cloud Updates",
        "Cloud-powered threat intelligence updates automatically in the background."
      ],
      [
        "Dynamic Firewall",
        "Blocks risky inbound and outbound traffic and controls high-risk services."
      ],
      [
        "Hourly IP Blocklist Updates",
        "Local and cloud IP blocklists refresh every hour for stronger protection."
      ],
      [
        "Application & Content Control",
        "Control applications, websites and content categories by user or policy."
      ],
      [
        "Per-User Wi-Fi Policies",
        "Give each user secure Wi-Fi identity, access rules and individual policies."
      ],
      [
        "Web Security & DNS Protection",
        "Block unsafe websites and filter harmful or unauthorised domains."
      ],
      [
        "Application Visibility",
        "See and control the applications being used across the business network."
      ],
      [
        "Dual WAN Failover",
        "Automatically switch connectivity to help keep business operations online."
      ],
      [
        "DNS Encryption",
        "Support DNS over TLS and HTTPS to protect browsing privacy."
      ],
      [
        "App Priority / QoS",
        "Prioritise video calls, voice and important applications automatically."
      ],
      [
        "Adaptive Bandwidth",
        "Allocate bandwidth intelligently in real time for smooth network performance."
      ],
      [
        "Guest Wi-Fi Management",
        "Create secure guest networks with controlled internet access and visibility."
      ],
      [
        "Multi-Tenant MSP Control",
        "Manage multiple sites and customers from one centralised platform."
      ],
      [
        "Insights & Reporting",
        "Use real-time dashboards, usage reports and alerts for complete visibility."
      ]
    ],
    "q": [
      [
        "What is an SMB Cyber Security Appliance?",
        "It is a security gateway designed to protect small and medium businesses from unsafe websites, unauthorised access, malware, ransomware, phishing and risky user activity without requiring a large internal security team."
      ],
      [
        "Why do SMBs need a cyber security appliance?",
        "SMBs often have limited IT resources, unmanaged devices and basic router protection. The appliance adds stronger protection, centralised control, secure internet access and network visibility."
      ],
      [
        "What problems does it solve?",
        "It addresses unsafe browsing, phishing and ransomware risk, unauthorised websites, weak branch security, limited usage control and poor network visibility."
      ],
      [
        "How does it protect my business?",
        "It inspects internet traffic, blocks malicious websites, applies filtering policies, controls user access and monitors network activity."
      ],
      [
        "Is it suitable for small offices and professional firms?",
        "Yes. It suits offices, CA and law firms, clinics, retail stores, schools, manufacturing units, branch offices and other businesses with up to 50 users."
      ],
      [
        "Can it help prevent ransomware attacks?",
        "It reduces ransomware exposure by blocking malicious sites, downloads, phishing attempts and command-and-control traffic before they reach users."
      ],
      [
        "Can it manage business Wi-Fi and guest access?",
        "Yes. It supports secure per-user Wi-Fi, role-based policies and isolated guest access from the same cloud-managed platform."
      ],
      [
        "Can we manage it without a dedicated IT team?",
        "Yes. Plug-and-play deployment, automatic cloud updates, centralised controls and optional managed support are designed to keep administration simple."
      ]
    ]
  },
  "microsoft 365 backup": {
    "price": "Per-user/mo",
    "ov": "Shocking but true: Microsoft’s shared-responsibility model makes your data your problem. A mailbox deleted 30 days ago? Gone. M365 Backup keeps independent, unlimited-retention copies of Exchange, SharePoint, OneDrive and Teams — restorable to any point in time, down to a single email.",
    "f": [
      [
        "Full M365 coverage",
        "Exchange, SharePoint, OneDrive, Teams"
      ],
      [
        "Unlimited retention",
        "Years of history, not 30 days"
      ],
      [
        "Granular restore",
        "A single email or file, or an entire mailbox"
      ],
      [
        "Tenant-independent",
        "Copies stored safely outside your tenant"
      ],
      [
        "Automated daily backups",
        "Multiple restore points"
      ],
      [
        "Compliance-ready",
        "Legal hold and eDiscovery-friendly exports"
      ]
    ],
    "q": [
      [
        "Doesn’t Microsoft back this up already?",
        "Only recycle-bin level retention — Microsoft itself recommends third-party backup for long-term restore."
      ],
      [
        "How granular is a restore?",
        "A single email, file version, folder, site or full mailbox — at any point in time."
      ],
      [
        "What about ex-employee data?",
        "Remove the license; the data stays retained in backup — saving storage costs."
      ],
      [
        "Is there a Google Workspace version?",
        "Yes — Google Workspace Backup is a separate offering on the same engine."
      ]
    ]
  },
  "cloud object storage": {
    "price": "Per-GB slabs",
    "ov": "Store terabytes of unstructured data — media, logs, backups, datasets — at a fraction of block-storage cost. S3-compatible API, Indian data residency, and pay-only-for-what-you-store pricing.",
    "f": [
      [
        "S3-compatible API",
        "Existing tools and apps work without changes"
      ],
      [
        "Durable by design",
        "Multiple copies across infrastructure"
      ],
      [
        "India-resident",
        "RBI / DPDPA localisation friendly"
      ],
      [
        "Lifecycle policies",
        "Auto-archive or delete ageing data"
      ]
    ],
    "q": [
      [
        "Will my S3 tools work?",
        "Yes — S3-compatible endpoints; existing SDKs and CLIs work as-is."
      ],
      [
        "What about egress charges?",
        "Transparent slab pricing — request the sheet from sales."
      ],
      [
        "Can I use it as a backup target?",
        "Absolutely — Acronis and Veeam targets are supported."
      ]
    ]
  },
  "cloud disaster recovery": {
    "price": "Per-VM plans",
    "ov": "Fire, flood, ransomware or a region failure — your business keeps running. Fully automated DR replicates your servers to our cloud with defined RPO/RTO, tested failover and one-click recovery.",
    "f": [
      [
        "Defined RPO/RTO",
        "Minutes-level recovery objectives, written into the contract"
      ],
      [
        "Automated replication",
        "Continuous or scheduled — you decide"
      ],
      [
        "Non-disruptive DR drills",
        "Test failover without touching production"
      ],
      [
        "One-click failover",
        "Your entire environment live in the cloud during a disaster"
      ]
    ],
    "q": [
      [
        "What RPO/RTO do we get?",
        "From minutes to hours depending on plan — fixed during the scoping call."
      ],
      [
        "How are DR tests done?",
        "Scheduled drills in an isolated network — production stays untouched."
      ],
      [
        "Is failback possible?",
        "Yes — data syncs back once your primary site is restored."
      ]
    ]
  },
  "cloud disaster recovery smb": {
    "price": "Per-VM plans",
    "ov": "Disaster Recovery protects your ability to continue operating. With XcellHost Cloud Disaster Recovery, organizations can maintain protected copies of important workloads and establish recovery procedures designed to reduce downtime and minimize data loss during a disruption. XcellHost Cloud Disaster Recovery provides a cloud-based approach that allows businesses to build a disaster recovery strategy without maintaining an entire secondary physical datacenter.",
    "f": [
      [
        "File, Image & Application Backup",
        "Protect business files, complete system images and critical applications from one managed recovery platform."
      ],
      [
        "Local Recovery with Instant Restore",
        "Restore priority workloads locally when you need them back quickly without waiting for a full rebuild."
      ],
      [
        "Test Failover",
        "Validate recovery readiness in an isolated environment without interrupting your live production systems."
      ],
      [
        "Cloud-only VPN Connection",
        "Provide secure access to recovered cloud workloads through a dedicated cloud-based VPN connection."
      ],
      [
        "Production & Test Failover",
        "Run a planned recovery test or move production workloads to the cloud during an actual disruption."
      ],
      [
        "VPN-Less Deployment Option",
        "Deploy selected recovery workflows without a traditional site-to-site VPN where the use case permits it."
      ],
      [
        "IPsec Multisite VPN Support",
        "Connect branches and recovered workloads securely with IPsec-based multisite connectivity."
      ],
      [
        "Custom DNS Configuration",
        "Use custom DNS settings so users and applications can reach recovered services with minimal change."
      ]
    ],
    "q": [
      [
        "Can we test recovery without affecting production?",
        "Yes. Test failover runs in an isolated environment, so your production workloads stay online."
      ],
      [
        "Can workloads fail over to Acronis Cloud?",
        "Yes. The service supports production failover to the cloud when your primary environment is unavailable."
      ],
      [
        "Can multiple sites connect after recovery?",
        "Yes. IPsec multisite VPN support can securely connect branches and recovered cloud workloads."
      ]
    ]
  },
  "google workspace backup": {
    "price": "Per-user/mo",
    "ov": "Gmail, Drive, Calendar and Contacts are not backed up long-term by Google. Independent, unlimited-retention copies with point-in-time restore — down to a single email or file.",
    "f": [
      [
        "Full coverage",
        "Gmail, Drive, Shared Drives, Calendar, Contacts"
      ],
      [
        "Unlimited retention",
        "Years of history, not a 30-day bin"
      ],
      [
        "Granular restore",
        "From a single item to a full account"
      ],
      [
        "Tenant-independent",
        "Copies safe from ransomware and admin error"
      ]
    ],
    "q": [
      [
        "Doesn’t Google back this up?",
        "Only limited trash retention — third-party backup is essential for long-term restore."
      ],
      [
        "What about ex-employee data?",
        "Remove the license; the backup stays retained."
      ],
      [
        "How granular is a restore?",
        "A single item, folder or full account — to any date."
      ]
    ]
  },
  "entra id backup": {
    "price": "Per-tenant plans",
    "ov": "Your Entra ID (Azure AD) tenant is the key to everything — users, groups, roles, conditional access policies. One bad script or malicious admin can wreck it. Independent backup with object-level restore protects your identity backbone.",
    "f": [
      [
        "Full tenant coverage",
        "Users, groups, roles, CA policies, app registrations"
      ],
      [
        "Object-level restore",
        "Bring back one user or policy, not the whole tenant"
      ],
      [
        "Change tracking",
        "What changed, when, and by whom — audit-ready"
      ],
      [
        "Fast recovery",
        "Resolve identity outages in minutes"
      ]
    ],
    "q": [
      [
        "Doesn’t Microsoft do this itself?",
        "The recycle bin is limited — there is no point-in-time restore for policies and roles."
      ],
      [
        "Are Conditional Access policies restorable?",
        "Yes — policies restore at object level."
      ],
      [
        "How long is setup?",
        "Same day — it connects with read permissions."
      ]
    ]
  },
  "e-mail backup / archiving": {
    "price": "Unlimited storage plans",
    "ov": "Compliance, legal discovery and disaster recovery — tamper-proof email archiving with unlimited storage covers all three. Every inbound and outbound email captured, indexed and searchable in seconds.",
    "f": [
      [
        "Unlimited storage",
        "Fixed per-user price — storage worries end"
      ],
      [
        "Tamper-proof archive",
        "Immutable copies for legal and compliance"
      ],
      [
        "Lightning search",
        "Years of email searched in seconds"
      ],
      [
        "Any platform",
        "M365, Google Workspace, Zimbra, on-prem Exchange"
      ]
    ],
    "q": [
      [
        "What is the difference between archiving and backup?",
        "Backup is for restore; archiving is for compliance and search — this does both."
      ],
      [
        "Is legal hold possible?",
        "Yes — apply holds to specific users or date ranges."
      ],
      [
        "Can historical email be imported?",
        "Yes — historical import is supported."
      ]
    ]
  },
  "cloud drive": {
    "price": "Per-user/mo",
    "ov": " Cloud Drive by XcellHost is a secure cloud-based file storage and collaboration solution that enables businesses to store, access, share, and manage their important files from anywhere, anytime. It eliminates dependency on traditional file servers while providing enterprise-grade security, centralized control, and seamless collaboration. Dropbox-style file share and sync, but with your data in Indian datacenters under your control. Team folders, external sharing links, version history and device sync — minus the compliance headaches.",
    "f": [
      [
        "Sync everywhere",
        "Windows, Mac and mobile, with offline access"
      ],
      [
        "Team folders",
        "Department-level access control"
      ],
      [
        "Secure external sharing",
        "Links with passwords and expiry"
      ],
      [
        "Version history",
        "Accidentally overwrote a file? Restore an older version"
      ]
    ],
    "q": [
      [
        "Can we migrate from Dropbox?",
        "Yes — with bulk migration tools."
      ],
      [
        "How much storage is included?",
        "Plans scale by user count and storage slabs — sheet available."
      ],
      [
        "What about ransomware?",
        "Version history plus backup integration lets you recover files."
      ]
    ]
  },
  "intelligent backup": {
    "price": "Custom plans",
    "ov": "AI-driven backup that learns your environment — anomaly detection flags ransomware-like encryption patterns in backup streams before disaster spreads, while smart scheduling keeps RPO tight without killing bandwidth.",
    "f": [
      [
        "Anomaly detection",
        "AI detection of ransomware patterns in backup streams"
      ],
      [
        "Smart scheduling",
        "Bandwidth-aware and business-hours friendly"
      ],
      [
        "Dedupe + compression",
        "3–5x lower storage costs"
      ],
      [
        "Unified console",
        "Physical, virtual and cloud from one place"
      ]
    ],
    "q": [
      [
        "How does the AI detection work?",
        "Encryption and entropy patterns in backup data are compared to a baseline — anomalies trigger alerts."
      ],
      [
        "Which workloads are covered?",
        "Servers, VMs, endpoints, databases and SaaS."
      ],
      [
        "How is this different from Acronis?",
        "It is an AI-layer enhanced offering — the right fit is decided on a scoping call."
      ]
    ]
  },
  "metallic backup cloud": {
    "price": "Per-workload plans",
    "ov": "Commvault-powered enterprise backup as a service — deployed in minutes, not months. For organisations that need enterprise-grade data protection without running backup infrastructure.",
    "f": [
      [
        "Commvault engine",
        "Enterprise-grade, delivered as a service"
      ],
      [
        "Minutes to deploy",
        "No backup servers to build"
      ],
      [
        "Broad coverage",
        "M365, endpoints, VMs, databases, files"
      ],
      [
        "Ransomware-ready",
        "Air-gapped, immutable copies"
      ]
    ],
    "q": [
      [
        "Do we need a separate Commvault license?",
        "No — it is included in the service."
      ],
      [
        "Is on-prem data covered too?",
        "Yes — VMs, file servers and databases."
      ],
      [
        "Can we migrate from our existing backup?",
        "Yes — a parallel-run approach ensures a seamless cutover."
      ]
    ]
  },
  "cloud mobile device mgmt": {
    "price": "Per-device/mo",
    "ov": "Company data on personal phones is a breach waiting to happen. Cloud MDM enrolls, secures and manages every mobile device — enforce encryption, push apps, and remote-wipe lost devices in seconds.",
    "f": [
      [
        "Zero-touch enrollment",
        "Android and iOS devices secured in minutes"
      ],
      [
        "Policy enforcement",
        "Encryption, PIN and app restrictions made mandatory"
      ],
      [
        "Remote wipe",
        "Company data on a lost device erased in seconds"
      ],
      [
        "App management",
        "Push business apps, block risky ones"
      ]
    ],
    "q": [
      [
        "Does it wipe personal data too?",
        "No — in BYOD setups only the work profile is wiped."
      ],
      [
        "Which devices are supported?",
        "Android, iOS, Windows and macOS."
      ],
      [
        "What about employee privacy?",
        "The work container stays separate — personal photos and chats are never visible to the company."
      ]
    ]
  },
  "cloud security log monitoring": {
    "price": "Per-source plans",
    "ov": "Attackers leave footprints in logs long before damage is visible — if someone is watching. Our team collects, correlates and monitors logs from your servers, firewalls, applications and cloud services around the clock, turning noise into actionable incident alerts.",
    "f": [
      [
        "Round-the-clock monitoring",
        "24×7 eyes on your log streams"
      ],
      [
        "Broad source support",
        "Servers, firewalls, apps, cloud, SaaS"
      ],
      [
        "Correlation rules",
        "Isolated events become detected incidents"
      ],
      [
        "Compliance retention",
        "Log retention aligned to regulatory requirements"
      ]
    ],
    "q": [
      [
        "Which log sources are supported?",
        "Practically anything with syslog, agents or APIs — servers, network gear, cloud platforms and SaaS."
      ],
      [
        "Who investigates alerts?",
        "Our SOC analysts triage and escalate with context, not raw alerts."
      ],
      [
        "How long are logs retained?",
        "Configurable to your compliance needs — typically 90 days to 7 years."
      ]
    ]
  },
  "cloud siem-as-a-service": {
    "price": "Per-GB/day plans",
    "ov": "A SIEM finds the attack pattern hidden across a million events — but building one takes months and specialists. We deliver SIEM as a service: deployed fast, tuned continuously, and watched by our SOC so you get detections, not dashboards to babysit.",
    "f": [
      [
        "Fast onboarding",
        "Weeks, not the 6-month DIY build"
      ],
      [
        "Continuous tuning",
        "Rules updated as threats evolve — fewer false positives"
      ],
      [
        "SOC-watched",
        "Analysts respond to what the SIEM finds"
      ],
      [
        "Compliance packs",
        "Reports for ISO 27001, PCI, RBI audits"
      ]
    ],
    "q": [
      [
        "Which SIEM technology do you use?",
        "Leading platforms including Microsoft Sentinel — chosen to fit your environment."
      ],
      [
        "Do we need our own analysts?",
        "No — our SOC operates it; your team receives verified incidents."
      ],
      [
        "Can it ingest our custom apps?",
        "Yes — custom parsers are part of onboarding."
      ]
    ]
  },
  "waap as-a-service": {
    "price": "Per-app plans",
    "ov": "Your web apps and APIs face bots, injection attacks and API abuse every hour. WAAP (Web Application and API Protection) as a service puts a managed shield in front of them — WAF, bot mitigation, API discovery and DDoS defence, tuned by experts.",
    "f": [
      [
        "Managed WAF",
        "Rules tuned to your application, not generic templates"
      ],
      [
        "API discovery & protection",
        "Find shadow APIs before attackers do"
      ],
      [
        "Bot mitigation",
        "Stop credential stuffing and scraping"
      ],
      [
        "DDoS defence",
        "Absorb attacks before they reach your app"
      ]
    ],
    "q": [
      [
        "Will it break my application?",
        "Deployment starts in monitoring mode; rules are tuned before blocking is enabled."
      ],
      [
        "Does it cover APIs too?",
        "Yes — API discovery and schema enforcement are core features."
      ],
      [
        "How fast is onboarding?",
        "Most applications are protected within days."
      ]
    ]
  },
  "mdr": {
    "price": "Per-endpoint plans",
    "ov": "Detection tools alert; someone still has to respond — at 3 AM, on a holiday, during an attack. Managed Detection and Response gives you a 24×7 team that hunts, investigates and contains threats across your endpoints and network, with response measured in minutes.",
    "f": [
      [
        "24×7 threat hunting",
        "Humans plus analytics, not alerts alone"
      ],
      [
        "Rapid containment",
        "Isolate compromised endpoints in minutes"
      ],
      [
        "Full-stack visibility",
        "Endpoints, network, cloud, identity"
      ],
      [
        "Monthly reporting",
        "Threats found, actions taken, posture trends"
      ]
    ],
    "q": [
      [
        "How is MDR different from antivirus?",
        "Antivirus blocks known malware; MDR detects and responds to active attackers, including novel techniques."
      ],
      [
        "What is the response SLA?",
        "Critical detections are triaged in minutes — exact SLAs are defined in the plan."
      ],
      [
        "Do you replace our IT team?",
        "No — we handle security detection and response; your team keeps running IT."
      ]
    ]
  },
  "managed xdr": {
    "price": "Per-endpoint plans",
    "ov": "XDR unifies signals from endpoints, email, identity, network and cloud into one detection story — and our team manages the whole thing. Attacks that hide between tools get caught at the seams.",
    "f": [
      [
        "Cross-layer correlation",
        "Endpoint + email + identity + cloud in one storyline"
      ],
      [
        "Automated response",
        "Playbooks contain threats at machine speed"
      ],
      [
        "Managed 24×7",
        "Our SOC tunes, hunts and responds"
      ],
      [
        "One console",
        "A single view instead of five products"
      ]
    ],
    "q": [
      [
        "XDR vs MDR — what is the difference?",
        "MDR is the service; XDR is the unified technology layer. Managed XDR gives you both."
      ],
      [
        "Will it work with our existing tools?",
        "Yes — leading XDR platforms integrate with common security stacks."
      ],
      [
        "What does onboarding involve?",
        "Agent rollout, integration connections and baseline tuning — typically 2–4 weeks."
      ]
    ]
  },
  "managed ndr": {
    "price": "Per-sensor plans",
    "ov": "Attackers can disable agents on endpoints — but they cannot hide from the network. Network Detection and Response watches traffic patterns for lateral movement, data exfiltration and command-and-control activity that endpoint tools miss.",
    "f": [
      [
        "Agentless visibility",
        "Sees devices where agents cannot run — IoT, OT, unmanaged"
      ],
      [
        "Lateral movement detection",
        "Catches attackers moving between systems"
      ],
      [
        "Exfiltration alerts",
        "Unusual outbound data flows flagged fast"
      ],
      [
        "Managed by SOC",
        "Tuning, triage and response included"
      ]
    ],
    "q": [
      [
        "Do we need agents on every device?",
        "No — NDR is network-based and covers unmanaged and IoT devices."
      ],
      [
        "Does it decrypt our traffic?",
        "Detection works on traffic metadata and behaviour — no invasive decryption required."
      ],
      [
        "How is it deployed?",
        "A sensor at key network points — physical or virtual."
      ]
    ]
  },
  "managed microsoft sentinel": {
    "price": "Per-GB plans",
    "ov": "Microsoft Sentinel is a powerful cloud SIEM — and a full-time job to run well. We design, deploy and operate your Sentinel: data connectors, analytics rules, automation playbooks and 24×7 monitoring, with cost optimisation so ingestion bills stay sane.",
    "f": [
      [
        "Design + deployment",
        "Connectors, workbooks and rules built for your environment"
      ],
      [
        "24×7 operations",
        "Our SOC watches what Sentinel finds"
      ],
      [
        "Playbook automation",
        "Common responses automated with Logic Apps"
      ],
      [
        "Cost optimisation",
        "Ingestion tuned so your Azure bill stays predictable"
      ]
    ],
    "q": [
      [
        "We already have Sentinel — can you take it over?",
        "Yes — an assessment first, then managed operations of your existing deployment."
      ],
      [
        "Does data stay in our tenant?",
        "Yes — Sentinel runs in your Azure tenant; we operate it with delegated access."
      ],
      [
        "How do you control ingestion costs?",
        "Filtering, tiering and rule tuning — cost review is part of the monthly report."
      ]
    ]
  },
  "devsecops as a service": {
    "price": "Per-pipeline plans",
    "ov": "Security bolted on at the end of development is expensive and slow. We embed it in your pipeline instead — code scanning, dependency checks, container security and IaC scanning, wired into your CI/CD with policies your developers can live with.",
    "f": [
      [
        "Pipeline integration",
        "GitHub, GitLab, Azure DevOps, Jenkins"
      ],
      [
        "SAST + SCA + container scanning",
        "Code, dependencies and images covered"
      ],
      [
        "IaC security",
        "Terraform and Kubernetes misconfigurations caught pre-deploy"
      ],
      [
        "Developer-friendly gates",
        "Block criticals, warn on the rest — no velocity tax"
      ]
    ],
    "q": [
      [
        "Will this slow down our releases?",
        "No — scans run in parallel and only genuine criticals gate a release."
      ],
      [
        "Which languages are covered?",
        "All major stacks — Java, .NET, Python, JS/TS, Go, PHP and more."
      ],
      [
        "Do you fix the findings too?",
        "We provide remediation guidance and can pair with your developers on fixes."
      ]
    ]
  },
  "unified security platform": {
    "price": "Custom plans",
    "ov": "Ten security products, ten consoles, ten renewal dates — and gaps between all of them. The Unified Security Platform consolidates protection, detection and response into one managed stack, replacing manual security work with a single accountable service.",
    "f": [
      [
        "One platform",
        "Endpoint, email, network and cloud protection unified"
      ],
      [
        "One console",
        "A single pane instead of tool sprawl"
      ],
      [
        "Managed end-to-end",
        "XcellHost operates the entire stack"
      ],
      [
        "Consolidated cost",
        "Replace multiple licences with one subscription"
      ]
    ],
    "q": [
      [
        "Which tools does it replace?",
        "Typically standalone AV, EDR, email security, and monitoring point-products — a consolidation assessment maps it exactly."
      ],
      [
        "Is migration disruptive?",
        "A phased rollout runs new protection in parallel before old tools are retired."
      ],
      [
        "Who responds to incidents?",
        "Our SOC — detection to containment, under one SLA."
      ]
    ]
  },
  "ctem": {
    "price": "Subscription plans",
    "ov": "Annual pen-tests give you a photo; attackers work with a video. Continuous Threat Exposure Management keeps discovering, validating and prioritising your exposures all year — so the vulnerabilities that matter get fixed before they are found by someone else.",
    "f": [
      [
        "Continuous discovery",
        "Assets and exposures found as they appear"
      ],
      [
        "Attack-path validation",
        "Exposures tested for real exploitability"
      ],
      [
        "Business-risk prioritisation",
        "Fix what attackers would actually use"
      ],
      [
        "Trend reporting",
        "Posture improvement measured quarter over quarter"
      ]
    ],
    "q": [
      [
        "How is CTEM different from vulnerability scanning?",
        "Scanning lists CVEs; CTEM validates which exposures are exploitable and prioritises by business impact."
      ],
      [
        "Does it replace our annual VAPT?",
        "It complements it — VAPT provides depth, CTEM provides continuity."
      ],
      [
        "What is the reporting cadence?",
        "Live dashboard plus monthly prioritised remediation reports."
      ]
    ]
  },
  "source code review": {
    "price": "Per-codebase",
    "ov": "Some vulnerabilities never show up in running-app tests — logic flaws, hardcoded secrets, unsafe crypto. A source code review puts expert eyes (and tooling) on the code itself, catching what black-box testing structurally cannot.",
    "f": [
      [
        "Manual + tool-assisted",
        "SAST tooling plus human review of critical paths"
      ],
      [
        "Secrets & crypto audit",
        "Hardcoded keys and weak cryptography flagged"
      ],
      [
        "Logic flaw detection",
        "Business-logic issues scanners cannot find"
      ],
      [
        "Fix-ready findings",
        "File, line and remediation for every issue"
      ]
    ],
    "q": [
      [
        "Do you need our full source code?",
        "Yes, under NDA — or the review can run in your environment."
      ],
      [
        "Which languages are supported?",
        "All major stacks; confirm niche languages during scoping."
      ],
      [
        "How long does it take?",
        "Typically 1–3 weeks depending on codebase size."
      ]
    ]
  },
  "web, mobile & api testing": {
    "price": "Per-scope",
    "ov": "Your web app, its mobile companion and the APIs underneath share one attack surface. This combined engagement tests all three together — because attackers do not respect the boundaries between them.",
    "f": [
      [
        "Combined attack surface",
        "Web + mobile + API in one engagement"
      ],
      [
        "OWASP-aligned",
        "Top 10 for web, mobile and API"
      ],
      [
        "Chained-attack testing",
        "Findings across layers combined like a real attacker would"
      ],
      [
        "Single unified report",
        "One prioritised remediation plan"
      ]
    ],
    "q": [
      [
        "Why test all three together?",
        "Real attacks chain layers — a mobile app secret plus an API flaw equals a breach neither test finds alone."
      ],
      [
        "Do you test on production?",
        "Preferably staging; production testing uses safe, non-destructive methods."
      ],
      [
        "Is a re-test included?",
        "Yes — verification re-test with a clean-report certificate."
      ]
    ]
  },
  "network penetration testing": {
    "price": "Per-IP scope",
    "ov": "Firewalls and VPNs feel safe until someone actually tries. Network penetration testing simulates a real attacker against your external and internal networks — finding the exposed service, weak credential or misconfiguration that becomes a breach.",
    "f": [
      [
        "External + internal",
        "Internet-facing and inside-the-perimeter testing"
      ],
      [
        "Real exploitation",
        "Vulnerabilities validated, not just listed"
      ],
      [
        "AD attack paths",
        "Privilege-escalation routes mapped"
      ],
      [
        "Prioritised report",
        "Ordered by real-world exploitability"
      ]
    ],
    "q": [
      [
        "External or internal — which first?",
        "External if you have never tested; mature teams alternate both annually."
      ],
      [
        "Will testing disrupt operations?",
        "Testing windows and safe methods are agreed during scoping."
      ],
      [
        "What do we receive?",
        "Executive summary, technical findings, evidence and remediation steps."
      ]
    ]
  },
  "web app penetration testing": {
    "price": "Per-application",
    "ov": "Your web application is your most exposed asset — reachable by every attacker on earth. Expert testers probe it for OWASP Top 10 and beyond: authentication flaws, injection, access-control failures and business-logic abuse.",
    "f": [
      [
        "OWASP Top 10+",
        "Injection, auth, access control, SSRF and more"
      ],
      [
        "Business-logic testing",
        "Abuse cases automated scanners miss"
      ],
      [
        "Authenticated testing",
        "Every role and permission level probed"
      ],
      [
        "Developer-ready report",
        "Reproduction steps and fixes per finding"
      ]
    ],
    "q": [
      [
        "How is this different from a scanner?",
        "Scanners find known patterns; testers find logic flaws, chained exploits and context-specific issues."
      ],
      [
        "How long does it take?",
        "Typically 1–2 weeks per application."
      ],
      [
        "Is a re-test included?",
        "Yes — with a clean-report certificate on closure."
      ]
    ]
  },
  "mobile app penetration testing": {
    "price": "Per-app (iOS/Android)",
    "ov": "Mobile apps ship your code, secrets and API keys onto devices you do not control. Mobile app pen-testing examines the binary, local storage, transport security and backend APIs — for both Android and iOS.",
    "f": [
      [
        "Binary + runtime analysis",
        "Reverse engineering and runtime hooking"
      ],
      [
        "Local storage audit",
        "Secrets, tokens and PII on the device"
      ],
      [
        "Transport security",
        "Certificate pinning and TLS validation"
      ],
      [
        "Backend API testing",
        "The server side of your mobile app included"
      ]
    ],
    "q": [
      [
        "Do you need our source code?",
        "Not required — testing works on the compiled app; source access deepens the review."
      ],
      [
        "Both Android and iOS?",
        "Yes — each platform is tested against its own standards (OWASP MASVS)."
      ],
      [
        "What about app-store compliance?",
        "Findings include issues that trigger store rejections or policy flags."
      ]
    ]
  },
  "api penetration testing": {
    "price": "Per-API scope",
    "ov": "APIs now carry most of your business logic — and most modern breaches. API pen-testing targets broken object-level authorisation, excessive data exposure, rate-limit gaps and the rest of the OWASP API Top 10.",
    "f": [
      [
        "OWASP API Top 10",
        "BOLA, broken auth, excessive data exposure and more"
      ],
      [
        "Schema-based testing",
        "Every endpoint and parameter exercised"
      ],
      [
        "Auth & token abuse",
        "JWT, OAuth and session weaknesses probed"
      ],
      [
        "Rate-limit & abuse testing",
        "Scraping and enumeration resistance verified"
      ]
    ],
    "q": [
      [
        "We have hundreds of endpoints — how is scope set?",
        "From your OpenAPI/Postman collections — scoping is by endpoint groups."
      ],
      [
        "Do you test GraphQL too?",
        "Yes — REST, GraphQL and SOAP are all covered."
      ],
      [
        "What evidence is provided?",
        "Full request/response proof for every finding."
      ]
    ]
  },
  "iot penetration testing": {
    "price": "Per-device",
    "ov": "Every connected device is a computer someone forgot to secure. IoT pen-testing examines hardware interfaces, firmware, radio communications and the cloud backend of your devices — before they become the entry point.",
    "f": [
      [
        "Hardware analysis",
        "Debug ports, storage extraction, tamper checks"
      ],
      [
        "Firmware review",
        "Secrets, unsafe update channels, known CVEs"
      ],
      [
        "Radio/protocol testing",
        "Wi-Fi, BLE, Zigbee and proprietary protocols"
      ],
      [
        "Cloud backend included",
        "The device ecosystem, not just the device"
      ]
    ],
    "q": [
      [
        "Do you need physical devices?",
        "Yes — typically 2–3 units, including one we can open."
      ],
      [
        "Can you test industrial (OT) devices?",
        "Yes — see also our dedicated OT Assessment service."
      ],
      [
        "What standards do you test against?",
        "OWASP ISVS and industry baselines relevant to your device class."
      ]
    ]
  },
  "application security services": {
    "price": "Retainer plans",
    "ov": "One pen-test does not make an application secure — a programme does. Application Security Services gives you an ongoing AppSec partner: secure design reviews, testing cycles, developer training and a roadmap that matures with every release.",
    "f": [
      [
        "Programme, not project",
        "Continuous security across releases"
      ],
      [
        "Secure design reviews",
        "Threat modelling before code is written"
      ],
      [
        "Testing cadence",
        "Scheduled DAST/SAST/pen-test cycles"
      ],
      [
        "Developer enablement",
        "Secure coding training and champions programme"
      ]
    ],
    "q": [
      [
        "How is this different from buying pen-tests?",
        "Retainer-based continuity — findings tracked to closure across releases, with design-stage input."
      ],
      [
        "Does it fit agile teams?",
        "Yes — security activities map to your sprint cadence."
      ],
      [
        "What is the minimum engagement?",
        "Typically a 6-month retainer."
      ]
    ]
  },
  "acronis cyberfit score": {
    "price": "Included / assessment",
    "ov": "How secure is your organisation — as a number? The Acronis CyberFit Score assesses your protection status across backup, anti-malware, patching and configuration, producing a measurable score you can improve and report.",
    "f": [
      [
        "Quantified posture",
        "One score across key protection domains"
      ],
      [
        "Gap identification",
        "Exactly which controls are missing"
      ],
      [
        "Trend tracking",
        "Score improvement over time"
      ],
      [
        "Board-friendly reporting",
        "Security posture leadership can read"
      ]
    ],
    "q": [
      [
        "What does the score measure?",
        "Backup coverage, anti-malware status, patch level, encryption and configuration hygiene."
      ],
      [
        "Is it a paid assessment?",
        "It is included with Acronis deployments; standalone assessments are available."
      ],
      [
        "How do we improve the score?",
        "The report maps each gap to a concrete remediation, most of which we can implement."
      ]
    ]
  },
  "cyber security audit": {
    "price": "Per-scope",
    "ov": "You cannot fix what you have never measured. A cyber security audit evaluates your organisation against recognised control frameworks — policies, technical controls, operations and people — and delivers a scored, prioritised roadmap to a stronger posture.",
    "f": [
      [
        "Framework-based",
        "Assessed against ISO 27001, NIST CSF or CIS Controls"
      ],
      [
        "Technical + governance",
        "Configurations, policies, processes and awareness"
      ],
      [
        "Scored gap report",
        "Every control rated with evidence"
      ],
      [
        "Prioritised roadmap",
        "Quick wins first, structural fixes next"
      ]
    ],
    "q": [
      [
        "How long does an audit take?",
        "Typically 2–4 weeks depending on organisation size."
      ],
      [
        "Is this the same as VAPT?",
        "No — VAPT tests systems technically; an audit evaluates your whole security programme. They complement each other."
      ],
      [
        "Will this prepare us for certification?",
        "Yes — the gap report doubles as an ISO 27001 readiness baseline."
      ]
    ]
  },
  "iso 27001 consulting": {
    "price": "Fixed-fee programmes",
    "ov": "ISO 27001 certification wins enterprise deals and satisfies regulators — but the path is paved with documentation. Our consultants take you from gap assessment to certification: ISMS design, risk assessment, policy drafting, internal audit and certification-body support.",
    "f": [
      [
        "End-to-end programme",
        "Gap assessment to certification audit support"
      ],
      [
        "Documentation done",
        "Policies, SoA, risk register drafted with you"
      ],
      [
        "Internal audit included",
        "Pre-certification dry run"
      ],
      [
        "Certified consultants",
        "From a company that holds ISO 27001 itself"
      ]
    ],
    "q": [
      [
        "How long until certification?",
        "Typically 4–6 months for a mid-size organisation."
      ],
      [
        "Which certification body do you work with?",
        "Any accredited body — we prepare you and support you through their audit."
      ],
      [
        "Do you help after certification?",
        "Yes — surveillance audit support and ISMS maintenance retainers are available."
      ]
    ]
  },
  "compliance consulting": {
    "price": "Per-framework",
    "ov": "DPDPA, RBI guidelines, SEBI CSCRF, ISO, PCI — the alphabet of compliance keeps growing. Our consultants map your obligations, assess your gaps and build one control set that satisfies multiple frameworks at once, instead of duplicated effort per regulation.",
    "f": [
      [
        "Multi-framework mapping",
        "One control set, many regulations"
      ],
      [
        "Regulator-aware",
        "RBI, SEBI, IRDAI and DPDPA experience"
      ],
      [
        "Gap-to-remediation",
        "Findings become an executable plan"
      ],
      [
        "Audit support",
        "We stand with you during assessments"
      ]
    ],
    "q": [
      [
        "Which frameworks do you cover?",
        "DPDPA, RBI cybersecurity frameworks, SEBI CSCRF, ISO 27001/22301, PCI DSS, SOC 2 and more."
      ],
      [
        "Can one programme cover several regulations?",
        "Yes — a unified control framework is exactly what we build."
      ],
      [
        "Do you provide the tooling too?",
        "Where useful — our GRC platform can operationalise the programme."
      ]
    ]
  },
  "tprm": {
    "price": "Per-vendor tiers",
    "ov": "Your security is now only as strong as your weakest vendor — and regulators agree. Third-Party Risk Management assesses, tiers and continuously monitors your vendor ecosystem, so the breach does not arrive through a supplier you never checked.",
    "f": [
      [
        "Vendor tiering",
        "Effort focused on high-risk suppliers"
      ],
      [
        "Assessment workflows",
        "Questionnaires, evidence review, scoring"
      ],
      [
        "Continuous monitoring",
        "Vendor posture watched between assessments"
      ],
      [
        "Contract clauses",
        "Security requirements for vendor agreements"
      ]
    ],
    "q": [
      [
        "How many vendors can be covered?",
        "Programmes scale from 20 to 2,000+ vendors with tiered depth."
      ],
      [
        "Do vendors cooperate with this?",
        "Standardised questionnaires and our facilitation keep vendor friction low."
      ],
      [
        "Does this satisfy RBI outsourcing guidelines?",
        "Yes — the programme maps directly to RBI third-party and outsourcing requirements."
      ]
    ]
  },
  "managed grc": {
    "price": "Monthly retainer",
    "ov": "Governance, risk and compliance is a full-time function most organisations cannot staff. Managed GRC gives you that function as a service — risk registers maintained, controls tested, compliance calendars driven and audits faced, by our team.",
    "f": [
      [
        "GRC function as a service",
        "Your risk and compliance office, outsourced"
      ],
      [
        "Living risk register",
        "Maintained, reviewed, reported quarterly"
      ],
      [
        "Control testing",
        "Scheduled evidence collection and testing"
      ],
      [
        "Audit-ready always",
        "No pre-audit panic — evidence stays current"
      ]
    ],
    "q": [
      [
        "What does the monthly service include?",
        "Risk register upkeep, control testing cadence, compliance calendar, policy reviews and audit support."
      ],
      [
        "Do we still need an internal owner?",
        "One sponsor/point-of-contact — we do the heavy lifting."
      ],
      [
        "Which GRC platform do you use?",
        "Ours, or we operate within a platform you already own."
      ]
    ]
  },
  "pci consulting": {
    "price": "Per-scope",
    "ov": "If you store, process or transmit card data, PCI DSS is not optional. Our consultants scope your cardholder data environment (often shrinking it dramatically), remediate gaps and guide you to a clean SAQ or RoC — without over-engineering.",
    "f": [
      [
        "Scope reduction first",
        "A smaller CDE means cheaper compliance"
      ],
      [
        "Gap remediation",
        "Technical and process fixes guided"
      ],
      [
        "SAQ / RoC guidance",
        "The right validation path for your volume"
      ],
      [
        "QSA coordination",
        "We prepare you for the assessor"
      ]
    ],
    "q": [
      [
        "Which SAQ applies to us?",
        "That depends on how card data flows — scoping answers it in week one."
      ],
      [
        "Can tokenisation reduce our burden?",
        "Usually dramatically — it is one of the first options we evaluate."
      ],
      [
        "Do you provide the ASV scans too?",
        "Yes — quarterly ASV scanning can be included."
      ]
    ]
  },
  "privacy as-a-service": {
    "price": "Monthly retainer",
    "ov": "Privacy is now a permanent operation — consent, requests, assessments, training — not a one-time project. Privacy-as-a-Service runs that operation for you: a managed privacy office covering DPDPA and global frameworks like GDPR where you do business.",
    "f": [
      [
        "Managed privacy office",
        "Ongoing operations, not a one-off project"
      ],
      [
        "DPDPA + GDPR coverage",
        "Indian law plus global frameworks"
      ],
      [
        "DPIA programme",
        "Assessments for new processing activities"
      ],
      [
        "Awareness training",
        "Privacy culture across your teams"
      ]
    ],
    "q": [
      [
        "How does this differ from the DPDPA Platform?",
        "The platform is the tooling; this is the ongoing human operation — many clients take both."
      ],
      [
        "Can you handle data principal requests for us?",
        "Yes — intake, verification, fulfilment and evidence."
      ],
      [
        "We operate in the EU too — covered?",
        "Yes — GDPR obligations are included in scoping."
      ]
    ]
  },
  "vciso-as-a-service": {
    "price": "Monthly plans",
    "ov": "You need CISO-level leadership; you may not need a CISO-level payroll. A virtual CISO gives you an experienced security executive — strategy, board reporting, budget guidance and incident leadership — for a fraction of a full-time hire.",
    "f": [
      [
        "Executive leadership",
        "Strategy, roadmap and board-level reporting"
      ],
      [
        "Fractional cost",
        "Senior expertise without the full-time package"
      ],
      [
        "Backed by a team",
        "Our SOC, auditors and engineers behind one leader"
      ],
      [
        "Incident command",
        "A steady hand when things go wrong"
      ]
    ],
    "q": [
      [
        "How many hours do we get?",
        "Plans range from advisory days per month to near-full-time engagement."
      ],
      [
        "Will the vCISO attend board meetings?",
        "Yes — board and audit-committee representation is standard."
      ],
      [
        "Can this satisfy regulatory CISO requirements?",
        "In most frameworks yes — we confirm against your specific regulator."
      ]
    ]
  },
  "vdpo-as-a-service": {
    "price": "Monthly plans",
    "ov": "DPDPA requires Significant Data Fiduciaries to appoint a Data Protection Officer — qualified, empowered and reachable. Our virtual DPO service gives you exactly that: a named, India-based privacy professional who owns your DPO obligations.",
    "f": [
      [
        "Named DPO",
        "A qualified, India-based officer for your records"
      ],
      [
        "Regulator interface",
        "Point of contact for the Data Protection Board"
      ],
      [
        "Grievance handling",
        "Data principal complaints owned end-to-end"
      ],
      [
        "Backed by a privacy team",
        "Not one person — a practice behind them"
      ]
    ],
    "q": [
      [
        "Does DPDPA allow an outsourced DPO?",
        "The Act requires the function and accountability — an engaged virtual DPO with board access meets it for most fiduciaries."
      ],
      [
        "Is the DPO based in India?",
        "Yes — as DPDPA requires for Significant Data Fiduciaries."
      ],
      [
        "What if we get a regulator inquiry?",
        "Your vDPO leads the response, with our compliance team in support."
      ]
    ]
  },
  "microsoft entra id": {
    "price": "Per-user licensing",
    "ov": "Identity is the new perimeter — and Entra ID is where it lives for Microsoft-centric organisations. We license, deploy and harden Entra ID: conditional access, MFA rollout, privileged identity management and identity governance, done right the first time.",
    "f": [
      [
        "Licensing + deployment",
        "The right Entra plan, correctly configured"
      ],
      [
        "Conditional Access design",
        "Policies that block attackers, not employees"
      ],
      [
        "PIM rollout",
        "Admin rights granted just-in-time"
      ],
      [
        "Identity governance",
        "Access reviews and lifecycle automation"
      ]
    ],
    "q": [
      [
        "We already have Entra — can you harden it?",
        "Yes — an identity security assessment first, then guided hardening."
      ],
      [
        "Will MFA rollout disrupt users?",
        "A phased rollout with communication templates keeps friction minimal."
      ],
      [
        "P1 or P2 — which do we need?",
        "It depends on PIM and governance needs — the assessment tells you honestly."
      ]
    ]
  },
  "geotrust": {
    "price": "From budget DV to EV",
    "ov": "GeoTrust delivers the sweet spot of the SSL market — globally trusted certificates at sensible prices, which is why it remains our most popular brand. From quick DV certificates to full EV business validation, with XcellHost installation support included.",
    "f": [
      [
        "Most popular brand",
        "Trusted-value leader in the SSL market"
      ],
      [
        "DV, OV and EV",
        "Quick issuance to full business validation"
      ],
      [
        "Strong warranties",
        "Backed financial protection per certificate type"
      ],
      [
        "Installation included",
        "Our engineers set it up on any server"
      ]
    ],
    "q": [
      [
        "Why choose GeoTrust over cheaper brands?",
        "Stronger warranty, better recognition and DigiCert-backed infrastructure at mid-market prices."
      ],
      [
        "How fast is issuance?",
        "DV in minutes; OV in 1–3 days; EV in 1–5 days."
      ],
      [
        "Is a wildcard option available?",
        "Yes — GeoTrust offers wildcard and multi-domain variants."
      ]
    ]
  },
  "digicert": {
    "price": "Premium tier",
    "ov": "When trust cannot be negotiable — banking, healthcare, government — DigiCert is the certificate authority the world defaults to. Premium validation, industry-leading warranties and the strongest brand recognition in digital trust.",
    "f": [
      [
        "Most trusted CA",
        "The default choice of global enterprises"
      ],
      [
        "Highest warranties",
        "Industry-leading financial backing"
      ],
      [
        "Priority validation",
        "Fast-tracked OV/EV processing"
      ],
      [
        "CertCentral platform",
        "Enterprise certificate management included"
      ]
    ],
    "q": [
      [
        "Is DigiCert worth the premium?",
        "For regulated and high-trust environments, yes — recognition, warranty and support justify it."
      ],
      [
        "Do you help with validation paperwork?",
        "Yes — we manage the OV/EV validation process for you."
      ],
      [
        "Can we manage many certificates centrally?",
        "Yes — DigiCert CertCentral handles enterprise-scale management."
      ]
    ]
  },
  "emudhra (indian ca)": {
    "alias": [
      "emudhra"
    ],
    "price": "India-issued",
    "ov": "eMudhra is India’s own licensed Certifying Authority under the IT Act — the natural choice for government tenders, statutory filings and organisations that prefer an Indian trust chain with local validation and support.",
    "f": [
      [
        "Licensed Indian CA",
        "Operating under the Indian IT Act"
      ],
      [
        "Tender-friendly",
        "Preferred in government procurement"
      ],
      [
        "Local validation",
        "India-based verification and support"
      ],
      [
        "Full SSL range",
        "DV, OV, EV and wildcard options"
      ]
    ],
    "q": [
      [
        "Why choose an Indian CA?",
        "Local trust chain, IT Act licensing and faster India-based validation — often preferred in government contexts."
      ],
      [
        "Are eMudhra certificates globally trusted?",
        "Yes — they are recognised by all major browsers."
      ],
      [
        "Do you also provide eMudhra DSCs?",
        "Yes — digital signature certificates for statutory filings are available."
      ]
    ]
  },
  "sectigo": {
    "price": "Value tier",
    "ov": "Sectigo (formerly Comodo CA) is the volume leader in web security — solid, browser-trusted certificates at some of the best prices in the market, plus a full range from DV to EV, code signing and enterprise management.",
    "f": [
      [
        "Best value",
        "Trusted security at aggressive prices"
      ],
      [
        "Full portfolio",
        "DV, OV, EV, wildcard, multi-domain"
      ],
      [
        "High-volume friendly",
        "Great economics for many domains"
      ],
      [
        "Sectigo Certificate Manager",
        "Enterprise lifecycle tooling available"
      ]
    ],
    "q": [
      [
        "Is Sectigo trusted by all browsers?",
        "Yes — full trust across major browsers and platforms."
      ],
      [
        "Best choice for many small sites?",
        "Usually yes — the price-performance for volume is hard to beat."
      ],
      [
        "Does it include a site seal?",
        "Yes — a Sectigo trust seal comes with the certificate."
      ]
    ]
  },
  "thawte": {
    "price": "Mid tier",
    "ov": "One of the internet’s original certificate authorities, Thawte remains a globally recognised name for business SSL — strong OV and EV options with a heritage brand that customers still look for.",
    "f": [
      [
        "Heritage trust brand",
        "Recognised since the early web"
      ],
      [
        "Strong OV/EV focus",
        "Business-validation specialists"
      ],
      [
        "Global recognition",
        "Trusted across browsers worldwide"
      ],
      [
        "Competitive warranties",
        "Solid financial backing"
      ]
    ],
    "q": [
      [
        "Where does Thawte fit between brands?",
        "Between value (Sectigo/RapidSSL) and premium (DigiCert) — strong business validation at mid prices."
      ],
      [
        "How fast is OV issuance?",
        "Typically 1–3 business days."
      ],
      [
        "Wildcard available?",
        "Yes — Thawte wildcard secures all subdomains."
      ]
    ]
  },
  "rapidssl": {
    "price": "Entry tier",
    "ov": "Need HTTPS today at the lowest sensible cost? RapidSSL issues domain-validated certificates in minutes — perfect for blogs, landing pages, internal tools and any site that needs the padlock without business validation.",
    "f": [
      [
        "Issued in minutes",
        "Fully automated DV validation"
      ],
      [
        "Lowest-cost trusted SSL",
        "Padlock without the premium"
      ],
      [
        "Wildcard option",
        "Cover all subdomains cheaply"
      ],
      [
        "DigiCert-backed roots",
        "Budget price, reliable trust chain"
      ]
    ],
    "q": [
      [
        "What is the catch at this price?",
        "None — it is DV-only, so no organisation details in the certificate. Perfect for non-transactional sites."
      ],
      [
        "Should my business site use RapidSSL?",
        "For brochure sites yes; for payment or login pages we recommend OV/EV."
      ],
      [
        "How fast can I be live?",
        "Typically under 10 minutes from order to installation."
      ]
    ]
  },
  "domain validation (dv)": {
    "alias": [
      "dv ssl"
    ],
    "price": "From entry pricing",
    "ov": "DV is the fastest route to HTTPS — automated domain-ownership validation and a certificate in minutes. The right choice for blogs, informational sites and internal tools where encryption matters but organisational identity display does not.",
    "f": [
      [
        "Minutes to issue",
        "Automated email/DNS validation"
      ],
      [
        "Full encryption",
        "Same TLS strength as OV/EV"
      ],
      [
        "Lowest cost",
        "Entry point to the padlock"
      ],
      [
        "All brands available",
        "RapidSSL, Sectigo, GeoTrust DV options"
      ]
    ],
    "q": [
      [
        "Is DV encryption weaker?",
        "No — encryption strength is identical; only the validation depth differs."
      ],
      [
        "When should I upgrade to OV/EV?",
        "When customers transact or log in — identity display builds the trust DV cannot."
      ],
      [
        "Can I get DV wildcard?",
        "Yes — DV wildcards cover unlimited subdomains."
      ]
    ]
  },
  "organization validation (ov)": {
    "alias": [
      "ov ssl"
    ],
    "price": "Mid pricing",
    "ov": "OV certificates verify that a real, registered organisation stands behind the website — your company details embedded in the certificate. The professional standard for business websites, portals and anywhere customers share data.",
    "f": [
      [
        "Verified business identity",
        "Company details in the certificate"
      ],
      [
        "Higher trust signal",
        "Customers can verify who they deal with"
      ],
      [
        "1–3 day issuance",
        "Light-touch business validation"
      ],
      [
        "Stronger warranties",
        "More financial backing than DV"
      ]
    ],
    "q": [
      [
        "What documents are needed?",
        "Usually none — validation runs against public business registries; we guide any exceptions."
      ],
      [
        "Is OV visible to visitors?",
        "In certificate details, yes — plus it enables higher trust seals."
      ],
      [
        "OV or EV for an e-commerce site?",
        "OV is the sensible floor; EV adds maximum-assurance validation for high-value brands."
      ]
    ]
  },
  "extended validation (ev)": {
    "alias": [
      "ev ssl"
    ],
    "price": "Premium pricing",
    "ov": "EV is the highest level of certificate validation that exists — rigorous legal, physical and operational verification of your organisation. For banks, fintechs and brands where maximum assurance is part of the product.",
    "f": [
      [
        "Deepest validation",
        "Legal, physical and operational checks"
      ],
      [
        "Maximum assurance",
        "The strongest identity statement available"
      ],
      [
        "Highest warranties",
        "Top-tier financial protection"
      ],
      [
        "Phishing resistance",
        "Fraudsters cannot obtain EV for your brand"
      ]
    ],
    "q": [
      [
        "How long does EV take?",
        "Typically 1–5 business days — we manage the process end-to-end."
      ],
      [
        "Do browsers still show the green bar?",
        "Browsers changed the UI, but EV data remains visible in certificate details and matters for compliance and anti-phishing."
      ],
      [
        "Who genuinely needs EV?",
        "Financial services, payment pages and brands that are phishing targets."
      ]
    ]
  },
  "multi-domain ssl": {
    "price": "Per-SAN pricing",
    "ov": "Running five sites should not mean five certificates, five renewals and five installations. Multi-domain (SAN) certificates secure multiple domains under one certificate — one purchase, one expiry date, one renewal to manage.",
    "f": [
      [
        "Many domains, one cert",
        "Up to 250 SANs per certificate"
      ],
      [
        "One renewal date",
        "Management overhead collapses"
      ],
      [
        "Mixed domains allowed",
        ".com, .in, subdomains together"
      ],
      [
        "Add SANs later",
        "Grow the certificate as you grow"
      ]
    ],
    "q": [
      [
        "How many domains can one certificate hold?",
        "Commonly up to 250 SAN entries depending on brand."
      ],
      [
        "Can I add domains after purchase?",
        "Yes — reissue with additional SANs anytime."
      ],
      [
        "DV, OV or EV multi-domain?",
        "All three exist — pick the validation level your sites need."
      ]
    ]
  },
  "wildcard ssl": {
    "price": "Per-domain pricing",
    "ov": "One certificate for *.yourdomain.com — every subdomain you have today and every one you create tomorrow, secured automatically. The clean solution for growing platforms with expanding subdomain footprints.",
    "f": [
      [
        "Unlimited subdomains",
        "app., mail., portal., anything."
      ],
      [
        "Future-proof",
        "New subdomains covered instantly"
      ],
      [
        "One renewal",
        "Single certificate to manage"
      ],
      [
        "DV and OV options",
        "Choose your validation level"
      ]
    ],
    "q": [
      [
        "Does it cover multi-level subdomains?",
        "One level per wildcard (*.domain.com); deeper levels need a multi-domain wildcard."
      ],
      [
        "Is a wildcard less secure?",
        "Equal encryption — just plan key distribution across servers carefully; we advise on best practice."
      ],
      [
        "Wildcard or multi-domain — which one?",
        "Many subdomains of one domain: wildcard. Several different domains: multi-domain."
      ]
    ]
  },
  "multi-domain wildcard": {
    "price": "Premium pricing",
    "ov": "The everything certificate: multiple domains AND unlimited subdomains under each — one certificate to secure an entire multi-brand, multi-site infrastructure with a single renewal date.",
    "f": [
      [
        "Domains + subdomains",
        "*.brand-a.com and *.brand-b.in together"
      ],
      [
        "Maximum consolidation",
        "One certificate for the whole estate"
      ],
      [
        "Enterprise-friendly",
        "Ideal for agencies and groups"
      ],
      [
        "Single lifecycle",
        "One expiry, one renewal, one install pattern"
      ]
    ],
    "q": [
      [
        "When does this beat separate certificates?",
        "Beyond 3–4 domains with subdomains, consolidation wins on cost and management."
      ],
      [
        "How many wildcard SANs are allowed?",
        "Brand-dependent — commonly dozens of wildcard entries per certificate."
      ],
      [
        "Can validation level be OV?",
        "Yes — OV multi-domain wildcards are the enterprise norm."
      ]
    ]
  },
  "certificate mgmt solutions": {
    "price": "Platform plans",
    "ov": "Certificate outages are self-inflicted downtime — an expiry nobody tracked takes production down at 2 AM. Certificate management solutions give you discovery, visibility and automation across every certificate you own, from every CA.",
    "f": [
      [
        "Full discovery",
        "Find every certificate, including forgotten ones"
      ],
      [
        "Expiry automation",
        "Alerts and auto-renewal workflows"
      ],
      [
        "Multi-CA support",
        "Manage all brands in one place"
      ],
      [
        "ACME automation",
        "Hands-free issuance and installation"
      ]
    ],
    "q": [
      [
        "We have certificates from many CAs — covered?",
        "Yes — management platforms are CA-agnostic."
      ],
      [
        "Can renewals be fully automated?",
        "Yes — ACME and API integrations remove manual renewal entirely."
      ],
      [
        "How do we start?",
        "A discovery scan first — most organisations find 30% more certificates than they knew about."
      ]
    ]
  },
  "managed pki": {
    "price": "Managed service",
    "ov": "Your internal systems, devices and users need certificates too — but running an internal Certificate Authority is a specialist burden. Managed PKI gives you a fully operated private CA: policies, issuance, revocation and HSM-grade key protection, as a service.",
    "f": [
      [
        "Private CA, operated",
        "Design, hosting and operations by us"
      ],
      [
        "HSM-protected keys",
        "Root and issuing keys in hardware"
      ],
      [
        "Policy + templates",
        "Certificate profiles for every use case"
      ],
      [
        "Cloud or on-premises",
        "Deployment model of your choice"
      ]
    ],
    "q": [
      [
        "Why not just run Microsoft AD CS ourselves?",
        "You can — until key ceremony, HSMs, CRL uptime and audits become your problem. Managed PKI removes that burden."
      ],
      [
        "What use cases does it cover?",
        "Device identity, user authentication, VPN, Wi-Fi, code signing and service-to-service TLS."
      ],
      [
        "Who owns the root key?",
        "You do — held under documented ceremony with HSM protection."
      ]
    ]
  },
  "private ca": {
    "price": "Setup + subscription",
    "ov": "Issue unlimited certificates for internal systems without per-certificate public-CA costs. A private CA gives you your own trust hierarchy for servers, services, containers and devices inside your organisation.",
    "f": [
      [
        "Unlimited internal certs",
        "No per-certificate public CA fees"
      ],
      [
        "Your trust hierarchy",
        "Root and intermediates you control"
      ],
      [
        "Automation-ready",
        "ACME/SCEP/API issuance"
      ],
      [
        "Kubernetes-friendly",
        "Service mesh and container identity"
      ]
    ],
    "q": [
      [
        "When is a private CA the right choice?",
        "For internal-only endpoints — public CAs for public sites, private CA for everything inside."
      ],
      [
        "Can devices auto-enrol?",
        "Yes — SCEP and ACME support automatic enrolment."
      ],
      [
        "Managed or self-hosted?",
        "Both — see Managed PKI for the fully operated option."
      ]
    ]
  },
  "iot certificates": {
    "alias": [
      "iot certificates management"
    ],
    "price": "Per-device volume",
    "ov": "Every IoT device needs a verifiable identity from the factory onward — or your fleet becomes an attack fleet. IoT certificate management issues, provisions and rotates X.509 identities at device scale.",
    "f": [
      [
        "Factory provisioning",
        "Identity injected at manufacture"
      ],
      [
        "Massive scale",
        "Millions of device certificates managed"
      ],
      [
        "Lifecycle rotation",
        "Renewal and revocation across the fleet"
      ],
      [
        "Standards-based",
        "X.509, with Matter attestation support"
      ]
    ],
    "q": [
      [
        "How do devices get their first certificate?",
        "Factory provisioning or secure bootstrap enrolment — we design the flow with you."
      ],
      [
        "What happens when a device is compromised?",
        "Its certificate is revoked fleet-wide within minutes."
      ],
      [
        "Does this support Matter?",
        "Yes — see Device Attestation for Matter-specific certificates."
      ]
    ]
  },
  "device attestation": {
    "alias": [
      "device attestation certificates"
    ],
    "price": "Per-product-line",
    "ov": "Joining the Matter smart-home ecosystem requires Device Attestation Certificates from an authorised PKI — proof that your device is genuine. We provide DAC issuance so your products interoperate in Matter networks.",
    "f": [
      [
        "Matter compliance",
        "DACs from authorised infrastructure"
      ],
      [
        "Genuine-device proof",
        "Cryptographic authenticity per unit"
      ],
      [
        "Production integration",
        "Issuance wired into your manufacturing line"
      ],
      [
        "CSA-aligned",
        "Connectivity Standards Alliance requirements met"
      ]
    ],
    "q": [
      [
        "Do we need this for Matter certification?",
        "Yes — every Matter device requires a valid DAC chain."
      ],
      [
        "How is issuance integrated in production?",
        "Via secure API integration with your factory provisioning systems."
      ],
      [
        "What volumes are supported?",
        "From pilot runs to millions of units."
      ]
    ]
  },
  "code signing (comodo / sectigo / digicert)": {
    "alias": [
      "code signing",
      "comodo code signing",
      "sectigo code signing",
      "digicert code signing"
    ],
    "price": "Annual plans",
    "ov": "Unsigned software triggers warnings; warned users do not install. Code signing certificates prove your software comes from you and has not been tampered with — across Windows, macOS, drivers and installers.",
    "f": [
      [
        "Publisher identity",
        "Your verified name on every install prompt"
      ],
      [
        "Tamper evidence",
        "Modified binaries fail signature checks"
      ],
      [
        "Multi-platform",
        "Windows, macOS, Java, drivers"
      ],
      [
        "Hardware-backed keys",
        "Tokens/HSM per current CA requirements"
      ]
    ],
    "q": [
      [
        "Why do keys now require hardware tokens?",
        "CA/Browser Forum rules mandate hardware key protection — we supply compliant tokens."
      ],
      [
        "Which brand should we choose?",
        "Sectigo for value, DigiCert for premium trust — validation requirements are similar."
      ],
      [
        "Does signing remove SmartScreen warnings?",
        "Standard signing builds reputation over time; EV code signing gains immediate SmartScreen trust."
      ]
    ]
  },
  "ev code signing": {
    "price": "Annual plans",
    "ov": "EV code signing is the fast lane through Microsoft SmartScreen — immediate reputation, no warning period. For software vendors where the first-run experience decides whether users install or flee.",
    "f": [
      [
        "Instant SmartScreen trust",
        "No reputation-building wait"
      ],
      [
        "Extended validation",
        "Deep organisation verification"
      ],
      [
        "Hardware token enforced",
        "Keys never exist in software"
      ],
      [
        "Kernel-mode capable",
        "Required for Windows driver signing"
      ]
    ],
    "q": [
      [
        "Standard vs EV code signing?",
        "Standard earns reputation over downloads; EV gets immediate SmartScreen trust — critical for new products."
      ],
      [
        "Is EV mandatory for drivers?",
        "Yes — Windows kernel-mode drivers require EV signing."
      ],
      [
        "How is the token delivered?",
        "A FIPS-validated hardware token ships to your verified address."
      ]
    ]
  },
  "s/mime certificates": {
    "alias": [
      "digicert s/mime class 1",
      "digicert s/mime (ov)",
      "personal authentication"
    ],
    "price": "Per-user annual",
    "ov": "Email is still the number-one attack channel — S/MIME fights back with cryptographic identity. Signed emails prove sender authenticity; encrypted emails stay private end-to-end. Available per-user from Class 1 to organisation-validated.",
    "f": [
      [
        "Signed email",
        "Recipients verify it really came from you"
      ],
      [
        "End-to-end encryption",
        "Message privacy beyond TLS"
      ],
      [
        "Class 1 to OV",
        "Individual to organisation-level validation"
      ],
      [
        "Outlook/Gmail compatible",
        "Works in mainstream clients"
      ]
    ],
    "q": [
      [
        "How is this different from DMARC?",
        "DMARC protects your domain at scale; S/MIME signs and encrypts individual messages — they complement each other."
      ],
      [
        "Is deployment complex for many users?",
        "Managed enrolment automates certificate distribution across the organisation."
      ],
      [
        "Does it work on mobile?",
        "Yes — iOS and Android mail clients support S/MIME."
      ]
    ]
  },
  "verified mark certificates (vmc)": {
    "price": "Annual + trademark",
    "ov": "Your registered logo, displayed beside your emails in Gmail and Apple Mail — that is BIMI, and a Verified Mark Certificate is what makes it real. Brand impressions on every email, and a visible signal that the message is authentic.",
    "f": [
      [
        "Logo in the inbox",
        "Gmail, Apple Mail and growing support"
      ],
      [
        "Brand + anti-phishing",
        "Visual authenticity signal per message"
      ],
      [
        "Trademark-verified",
        "Only your organisation can display your mark"
      ],
      [
        "DMARC-powered",
        "Built on enforcement-level email security"
      ]
    ],
    "q": [
      [
        "What are the prerequisites?",
        "DMARC at enforcement (p=quarantine/reject), a registered trademark of your logo, and the VMC — we arrange the full chain."
      ],
      [
        "Our logo is not trademarked — options?",
        "Trademark registration first (we can guide it), or Common Mark options where eligible."
      ],
      [
        "How long does it take?",
        "Typically 2–4 weeks including verification."
      ]
    ]
  },
  "patch mgmt-as-a-service": {
    "price": "Per-endpoint plans",
    "ov": "Most breaches exploit vulnerabilities with patches already available — the patch just never got applied. Patch Management as a Service keeps your servers, endpoints and third-party applications updated on a disciplined cycle, with testing, scheduling and reporting handled by us.",
    "f": [
      [
        "OS + third-party apps",
        "Windows, Linux, browsers, Java, and more"
      ],
      [
        "Test-then-deploy",
        "Staged rollouts prevent bad-patch outages"
      ],
      [
        "Maintenance windows",
        "Patching that respects business hours"
      ],
      [
        "Compliance reporting",
        "Patch posture evidence for audits"
      ]
    ],
    "q": [
      [
        "What if a patch breaks something?",
        "Staged pilot rings catch issues before wide rollout, with documented rollback plans."
      ],
      [
        "Are Linux servers covered?",
        "Yes — major distributions alongside Windows."
      ],
      [
        "How quickly are critical patches applied?",
        "Emergency CVEs follow an expedited path — typically within 24–72 hours."
      ]
    ]
  },
  "cloud security posture mgmt": {
    "price": "Per-account plans",
    "ov": "One public S3 bucket, one over-permissive role — cloud breaches are usually misconfigurations, not exotic exploits. CSPM continuously scans your AWS, Azure and GCP accounts against best practices and compliance baselines, flagging drift before it becomes an incident.",
    "f": [
      [
        "Multi-cloud coverage",
        "AWS, Azure and GCP in one view"
      ],
      [
        "Continuous scanning",
        "Drift caught as it happens, not at audit time"
      ],
      [
        "Compliance baselines",
        "CIS, ISO and RBI-aligned checks"
      ],
      [
        "Guided remediation",
        "Fix steps per finding, or we fix for you"
      ]
    ],
    "q": [
      [
        "How is CSPM different from a pen-test?",
        "Pen-tests probe from outside periodically; CSPM watches configurations from inside continuously."
      ],
      [
        "Will it need access to our cloud?",
        "Read-only security roles — deployed via templates we provide."
      ],
      [
        "Can it auto-remediate?",
        "Optional — auto-fix policies for agreed finding types."
      ]
    ]
  },
  "digital risk monitoring": {
    "price": "Per-brand plans",
    "ov": "Your risk surface extends far beyond your firewall — leaked credentials on dark markets, lookalike domains, exposed data in paste sites, rogue mobile apps. Digital Risk Monitoring watches the open, deep and dark web for threats targeting your brand and people.",
    "f": [
      [
        "Credential leak alerts",
        "Employee passwords found in breaches"
      ],
      [
        "Lookalike domain detection",
        "Typosquats registered against your brand"
      ],
      [
        "Dark web monitoring",
        "Mentions of your company in criminal markets"
      ],
      [
        "Takedown support",
        "Phishing sites and fake apps removed"
      ]
    ],
    "q": [
      [
        "We found a phishing site — can you remove it?",
        "Yes — takedown coordination with registrars and hosts is part of the service."
      ],
      [
        "How are credential leaks detected?",
        "Continuous matching of breach dumps and markets against your domains."
      ],
      [
        "What is the alert turnaround?",
        "High-severity findings are alerted in near real-time."
      ]
    ]
  },
  "threat intelligence": {
    "price": "Feed + advisory plans",
    "ov": "Generic threat feeds tell you what happened to someone else. Curated threat intelligence tells you what is coming for you — sector-specific campaigns, actor TTPs relevant to Indian enterprises, and indicators your defences can act on.",
    "f": [
      [
        "Sector-relevant intel",
        "BFSI, manufacturing and India-focused campaigns"
      ],
      [
        "Actionable IOCs",
        "Feeds your firewall and SIEM can consume"
      ],
      [
        "Actor TTP briefings",
        "How relevant groups actually operate"
      ],
      [
        "Advisory alerts",
        "Plain-language warnings your team can act on"
      ]
    ],
    "q": [
      [
        "How is this different from free feeds?",
        "Curation and relevance — filtered to your sector and stack, with analyst context."
      ],
      [
        "Can our SIEM ingest it?",
        "Yes — STIX/TAXII and API delivery integrate with standard platforms."
      ],
      [
        "Do you provide briefings?",
        "Monthly threat briefings plus urgent advisories are included."
      ]
    ]
  },
  "red team assessment": {
    "price": "Per-engagement",
    "ov": "A pen-test asks \"what vulnerabilities exist?\" A red team asks \"can we breach you — without being caught?\" Our operators emulate a real adversary across technical, physical and human vectors, testing not just your systems but your detection and response.",
    "f": [
      [
        "Adversary emulation",
        "Real attacker TTPs, objective-driven"
      ],
      [
        "Multi-vector",
        "Technical, phishing, and optional physical"
      ],
      [
        "Detection testing",
        "Does your SOC actually see us?"
      ],
      [
        "Purple-team debrief",
        "Your defenders learn from every move we made"
      ]
    ],
    "q": [
      [
        "Red team vs pen-test — which do we need?",
        "Pen-test first for vulnerability depth; red team when you want your detection and response genuinely tested."
      ],
      [
        "Will our SOC be told in advance?",
        "Only a small white-cell knows — that is the point."
      ],
      [
        "How long does it run?",
        "Typically 4–8 weeks for a realistic campaign."
      ]
    ]
  },
  "blue team assessment": {
    "price": "Per-engagement",
    "ov": "You have invested in a SOC, a SIEM, an EDR — but would they actually catch an attack? A blue team assessment evaluates your defensive capability: detection coverage, response playbooks, tooling configuration and analyst readiness, with a maturity roadmap.",
    "f": [
      [
        "Detection coverage mapping",
        "Gaps measured against MITRE ATT&CK"
      ],
      [
        "Playbook review",
        "Response procedures tested, not assumed"
      ],
      [
        "Tool configuration audit",
        "EDR/SIEM tuned or just installed?"
      ],
      [
        "Maturity roadmap",
        "Prioritised path to stronger defence"
      ]
    ],
    "q": [
      [
        "How is coverage measured?",
        "Attack simulations mapped to MITRE ATT&CK show exactly which techniques you detect and miss."
      ],
      [
        "Is this disruptive to the SOC?",
        "No — simulations are controlled and coordinated."
      ],
      [
        "What is the outcome?",
        "A scored capability report and a 90-day improvement plan."
      ]
    ]
  },
  "ot assessment": {
    "price": "Per-site",
    "ov": "Plant networks were never designed for a connected world — yet they now touch IT, vendors and the internet. An OT assessment evaluates your industrial control environment for vulnerabilities, unsafe network paths and recovery gaps, without ever risking production.",
    "f": [
      [
        "Production-safe methods",
        "Passive analysis — no disruption to operations"
      ],
      [
        "IT/OT boundary review",
        "The crossover paths attackers exploit"
      ],
      [
        "ICS-specific expertise",
        "PLCs, SCADA, historians understood"
      ],
      [
        "Recovery gap analysis",
        "Can the plant restart after an incident?"
      ]
    ],
    "q": [
      [
        "Will the assessment risk plant downtime?",
        "No — passive network analysis and configuration review; nothing active touches control systems."
      ],
      [
        "Which standards do you assess against?",
        "IEC 62443 and relevant sector guidance."
      ],
      [
        "Do you cover legacy systems?",
        "Yes — legacy is the norm in OT; compensating controls are part of the output."
      ]
    ]
  },
  "breach & attack simulation": {
    "price": "Subscription",
    "ov": "Instead of wondering whether your controls work, prove it — continuously. BAS platforms safely execute real attack techniques against your environment around the clock, scoring which attacks your stack blocks, detects or misses.",
    "f": [
      [
        "Continuous validation",
        "Controls tested daily, not annually"
      ],
      [
        "Safe real techniques",
        "Actual TTPs, executed harmlessly"
      ],
      [
        "MITRE-mapped scoring",
        "Coverage measured per technique"
      ],
      [
        "Drift detection",
        "A config change that weakens you gets flagged"
      ]
    ],
    "q": [
      [
        "Is it safe to run in production?",
        "Yes — simulations are designed to be harmless while exercising real detection paths."
      ],
      [
        "How is this different from a red team?",
        "BAS is continuous and broad; red teams are periodic and deep — mature programmes use both."
      ],
      [
        "What do we do with the results?",
        "Each miss maps to a specific tuning or control fix — we can implement them too."
      ]
    ]
  },
  "managed bug bounty": {
    "price": "Platform + rewards",
    "ov": "Thousands of ethical hackers finding your bugs before criminals do — that is the promise of bug bounty, and the management overhead is why most companies never start. We run the programme for you: scoping, triage, researcher communication and reward management.",
    "f": [
      [
        "Programme design",
        "Scope, rules and rewards set correctly"
      ],
      [
        "Full triage",
        "Duplicates and noise filtered; real bugs verified"
      ],
      [
        "Researcher relations",
        "Communication handled professionally"
      ],
      [
        "Budget control",
        "Reward pools managed predictably"
      ]
    ],
    "q": [
      [
        "How is this different from VAPT?",
        "Continuous crowdsourced discovery vs periodic expert testing — they complement each other."
      ],
      [
        "What stops researchers from going rogue?",
        "Clear rules of engagement, legal safe harbour and platform vetting."
      ],
      [
        "Can we start privately?",
        "Yes — private invite-only programmes are the recommended start."
      ]
    ]
  },
  "identity-as-a-service": {
    "price": "Per-user plans",
    "ov": "Passwords sprawled across dozens of apps are both a security hole and a helpdesk burden. IDaaS centralises identity in the cloud — single sign-on, MFA and lifecycle management across all your applications, without running identity servers.",
    "f": [
      [
        "Single sign-on",
        "One secure login for every app"
      ],
      [
        "MFA everywhere",
        "Phishing-resistant options included"
      ],
      [
        "Lifecycle automation",
        "Joiners and leavers provisioned automatically"
      ],
      [
        "Thousands of app connectors",
        "SaaS and legacy apps integrated"
      ]
    ],
    "q": [
      [
        "Which apps can connect?",
        "Anything supporting SAML/OIDC plus large pre-built catalogs; legacy apps via gateways."
      ],
      [
        "Does it replace Active Directory?",
        "It can complement or gradually replace AD depending on your roadmap."
      ],
      [
        "What happens if the IdP is down?",
        "Enterprise IDaaS platforms run on redundant global infrastructure with strong SLAs."
      ]
    ]
  },
  "zero trust security access": {
    "alias": [
      "unified ztna"
    ],
    "price": "Per-user plans",
    "ov": "The VPN model — once inside, trusted everywhere — is how one stolen laptop becomes a full network breach. Zero Trust Network Access grants per-application access based on identity, device health and context. Users reach their apps; they never see your network.",
    "f": [
      [
        "Per-app access",
        "No flat network exposure"
      ],
      [
        "Device posture checks",
        "Unhealthy devices denied automatically"
      ],
      [
        "VPN replacement",
        "Faster and safer for remote work"
      ],
      [
        "Least privilege by default",
        "Access to what is needed, nothing more"
      ]
    ],
    "q": [
      [
        "Is this a VPN replacement?",
        "Yes — most deployments retire the VPN for user access within months."
      ],
      [
        "Does it work for on-premises apps?",
        "Yes — connectors publish internal apps without opening inbound firewall holes."
      ],
      [
        "Will users notice friction?",
        "Less than VPN — access is seamless once identity and device checks pass."
      ]
    ]
  },
  "cloud identity": {
    "price": "Per-user plans",
    "ov": "Managing users across Google, Microsoft and dozens of SaaS tools multiplies accounts and risk. Cloud identity management unifies user directories, authentication and device policy in the cloud — one identity per human, everywhere.",
    "f": [
      [
        "Unified directory",
        "One source of truth for users and groups"
      ],
      [
        "Cross-platform",
        "Google, Microsoft and SaaS ecosystems"
      ],
      [
        "Device policy",
        "Endpoint enrolment and controls included"
      ],
      [
        "Secure by default",
        "MFA and context rules from day one"
      ]
    ],
    "q": [
      [
        "We use both Google and Microsoft — which directory wins?",
        "Either can lead — we design the federation so users get one identity."
      ],
      [
        "Can contractors be managed too?",
        "Yes — external identities with scoped, expiring access."
      ],
      [
        "Is migration disruptive?",
        "Phased federation keeps everyone logging in throughout."
      ]
    ]
  },
  "identity platform": {
    "price": "Custom",
    "ov": "For customer-facing applications, identity is product infrastructure — registration, login, MFA, social sign-in and consent, at scale. An identity platform (CIAM) gives your applications enterprise-grade auth without your developers rebuilding it.",
    "f": [
      [
        "Customer IAM (CIAM)",
        "Registration to login, productised"
      ],
      [
        "Social + passwordless",
        "Google/Apple sign-in, passkeys, OTP"
      ],
      [
        "Scales with you",
        "Millions of end-user identities"
      ],
      [
        "Developer-friendly",
        "SDKs and APIs for every stack"
      ]
    ],
    "q": [
      [
        "Build vs buy for auth?",
        "Buying removes an entire class of breach risk and months of engineering — auth is rarely your differentiator."
      ],
      [
        "Does it handle consent for DPDPA?",
        "Yes — consent capture and preference management integrate with compliance workflows."
      ],
      [
        "Which platforms do you implement?",
        "Leading CIAM platforms — selection is part of the engagement."
      ]
    ]
  },
  "security awareness training": {
    "price": "Per-user annual",
    "ov": "Your firewall cannot stop an employee from typing their password into a fake login page. Security awareness training turns your people into a detection layer — engaging lessons, simulated phishing and measurable risk reduction.",
    "f": [
      [
        "Simulated phishing",
        "Safe fake attacks measure real behaviour"
      ],
      [
        "Micro-learning",
        "Short, engaging lessons people finish"
      ],
      [
        "Risk scoring",
        "Improvement measured per team over time"
      ],
      [
        "Compliance-ready",
        "Training records for auditors"
      ]
    ],
    "q": [
      [
        "Do simulations embarrass employees?",
        "No — results feed coaching, not punishment; culture guidance is part of setup."
      ],
      [
        "How often should training run?",
        "Monthly micro-lessons plus quarterly simulations is the effective cadence."
      ],
      [
        "Is it available in Hindi?",
        "Yes — multilingual content including Hindi."
      ]
    ]
  },
  "cyber range as-a-service": {
    "price": "Per-seat/session",
    "ov": "Reading about incident response is not the same as fighting a live attack. A cyber range gives your team a safe replica environment where real attacks unfold and defenders practice — building muscle memory before a real crisis.",
    "f": [
      [
        "Realistic environments",
        "Enterprise replicas with live attack traffic"
      ],
      [
        "Guided scenarios",
        "Ransomware, insider, APT playthroughs"
      ],
      [
        "Team exercises",
        "SOC squads train together"
      ],
      [
        "Skills measurement",
        "Individual and team capability scored"
      ]
    ],
    "q": [
      [
        "Who should train on a range?",
        "SOC analysts, incident responders and IT admins with security duties."
      ],
      [
        "Is this on-site or remote?",
        "Cloud-hosted — teams join from anywhere."
      ],
      [
        "How often should teams exercise?",
        "Quarterly scenarios keep response skills sharp."
      ]
    ]
  },
  "threat hunting training": {
    "price": "Per-cohort",
    "ov": "Alerts catch what tools know; hunters catch what tools miss. This hands-on training builds proactive hunting skills in your SOC — hypothesis-driven investigation, telemetry analysis and adversary technique recognition.",
    "f": [
      [
        "Hands-on labs",
        "Hunting in realistic telemetry, not slides"
      ],
      [
        "MITRE-driven method",
        "Hypotheses built from ATT&CK techniques"
      ],
      [
        "Tool-agnostic skills",
        "Applicable in your SIEM/EDR of choice"
      ],
      [
        "Certification path",
        "Skills validated at completion"
      ]
    ],
    "q": [
      [
        "What are the prerequisites?",
        "SOC L1 experience or equivalent familiarity with logs and endpoints."
      ],
      [
        "Is it delivered on our stack?",
        "Labs run on a range; concepts transfer to your tools, and custom cohorts on your stack are possible."
      ],
      [
        "How long is the course?",
        "Typically 3–5 days intensive, or spread weekly."
      ]
    ]
  },
  "dfir": {
    "price": "Per-incident / retainer",
    "ov": "When a breach is live, hours matter and evidence is fragile. Our Digital Forensics and Incident Response team contains attacks, investigates root cause and preserves court-admissible evidence — with the discipline that legal and regulatory follow-ups demand.",
    "f": [
      [
        "Rapid containment",
        "Stop the spread first"
      ],
      [
        "Forensic rigor",
        "Evidence preserved to legal standards"
      ],
      [
        "Root-cause analysis",
        "How they got in, what they touched"
      ],
      [
        "Regulatory support",
        "Reports fit for CERT-In and DPDPA notifications"
      ]
    ],
    "q": [
      [
        "How fast can you engage?",
        "Retainer clients get guaranteed response times; emergency engagements mobilise same-day."
      ],
      [
        "Will evidence hold up legally?",
        "Yes — chain-of-custody and forensic imaging follow accepted standards."
      ],
      [
        "Do you handle ransomware negotiations?",
        "We advise on the full decision framework, including recovery-first alternatives."
      ]
    ]
  },
  "ir monitoring": {
    "price": "Monthly plans",
    "ov": "The gap between compromise and detection is where damage compounds. IR monitoring keeps trained responders watching your critical systems specifically for incident precursors — so response starts at minute one, not month three.",
    "f": [
      [
        "Precursor detection",
        "Early-stage attack signals watched"
      ],
      [
        "Responder-led",
        "Monitored by people who handle breaches"
      ],
      [
        "Escalation paths",
        "Pre-agreed actions the moment something fires"
      ],
      [
        "Retainer integration",
        "Seamless handoff into full IR if needed"
      ]
    ],
    "q": [
      [
        "How is this different from MDR?",
        "Tightly focused on incident precursors of critical assets, with IR responders on the other end."
      ],
      [
        "What happens when something is found?",
        "Pre-agreed playbooks execute — containment can begin before your team even calls back."
      ],
      [
        "Does it require new agents?",
        "Usually existing telemetry suffices; gaps are addressed in onboarding."
      ]
    ]
  },
  "ir retainers": {
    "price": "Annual retainer",
    "ov": "Finding an incident response team during an incident means negotiating contracts while your network burns. An IR retainer puts our team on standby — guaranteed response SLAs, pre-built knowledge of your environment, and pre-agreed terms before you ever need them.",
    "f": [
      [
        "Guaranteed SLA",
        "Response times contractually locked"
      ],
      [
        "Environment pre-knowledge",
        "Onboarding done before any incident"
      ],
      [
        "Pre-agreed terms",
        "No procurement during a crisis"
      ],
      [
        "Unused hours convert",
        "Retainer hours usable for proactive work"
      ]
    ],
    "q": [
      [
        "What if we never have an incident?",
        "Unused retainer hours convert to proactive services — tabletops, assessments, hardening."
      ],
      [
        "What is the response SLA?",
        "Tiered — from 4-hour remote engagement on premium plans."
      ],
      [
        "Does onboarding involve our team?",
        "A short onboarding captures your environment, contacts and playbooks upfront."
      ]
    ]
  },
  "ir plan review": {
    "price": "Fixed fee",
    "ov": "An incident response plan written years ago, never tested, referencing people who left — that is what most organisations have. An IR plan review pressure-tests your plan against real-world scenarios and current best practice, then rebuilds what fails.",
    "f": [
      [
        "Gap analysis",
        "Plan tested against realistic scenarios"
      ],
      [
        "Role clarity",
        "Who decides what, actually named"
      ],
      [
        "Regulatory alignment",
        "CERT-In and DPDPA notification steps built in"
      ],
      [
        "Rewritten deliverable",
        "A plan your team can execute at 3 AM"
      ]
    ],
    "q": [
      [
        "We have no plan at all — is that a problem?",
        "It is the most common starting point — we build from a proven template fitted to you."
      ],
      [
        "Does the review include a test?",
        "A tabletop walkthrough validates the revised plan."
      ],
      [
        "How current are the regulatory steps?",
        "Updated to current CERT-In timelines and DPDPA breach-notification requirements."
      ]
    ]
  },
  "tabletop exercises": {
    "price": "Per-exercise",
    "ov": "The middle of a ransomware crisis is a terrible time to discover your executives disagree about paying, your comms plan is missing, and nobody can reach legal. Tabletop exercises rehearse the crisis safely — decisions, communications and escalations, practiced before they are real.",
    "f": [
      [
        "Realistic scenarios",
        "Ransomware, data breach, insider — tailored to you"
      ],
      [
        "Executive participation",
        "The people who will decide, practicing deciding"
      ],
      [
        "Facilitated by responders",
        "Run by people who have seen the real thing"
      ],
      [
        "Findings report",
        "Gaps surfaced become an action list"
      ]
    ],
    "q": [
      [
        "Who should attend?",
        "IT, security, legal, comms and executive leadership — incidents are business events."
      ],
      [
        "How long does an exercise take?",
        "Typically a half-day per scenario."
      ],
      [
        "How often should we run them?",
        "Annually at minimum; high-risk sectors run quarterly."
      ]
    ]
  },
  "readiness assessment": {
    "price": "Fixed fee",
    "ov": "Before spending on new tools, know where you actually stand. A cybersecurity readiness assessment scores your current people, process and technology posture against your threat profile — producing a prioritised, budget-aware improvement roadmap.",
    "f": [
      [
        "Holistic scoring",
        "People, process, technology together"
      ],
      [
        "Threat-profile based",
        "Assessed against risks relevant to you"
      ],
      [
        "Budget-aware roadmap",
        "Improvements sequenced by impact per rupee"
      ],
      [
        "Board-ready output",
        "Posture communicated in business language"
      ]
    ],
    "q": [
      [
        "How long does it take?",
        "Typically 2–3 weeks including interviews and technical review."
      ],
      [
        "Is this the same as an audit?",
        "Lighter and faster — a strategic snapshot rather than a control-by-control audit."
      ],
      [
        "What comes after?",
        "A 12-month roadmap — which we can execute with you."
      ]
    ]
  },
  "cloud password manager": {
    "price": "Per-user plans",
    "ov": "Password reuse is your quietest, largest risk — one leaked credential unlocking many doors. A business password manager gives every employee a secure vault, shared team credentials with access control, and visibility into weak or breached passwords.",
    "f": [
      [
        "Encrypted vaults",
        "Zero-knowledge — even we cannot read them"
      ],
      [
        "Team sharing",
        "Shared logins without spreadsheet horror"
      ],
      [
        "Breach monitoring",
        "Alerts when stored credentials leak"
      ],
      [
        "Admin visibility",
        "Weak-password reports without seeing passwords"
      ]
    ],
    "q": [
      [
        "Can admins see user passwords?",
        "No — zero-knowledge encryption means only vault owners decrypt their data."
      ],
      [
        "What about the master password being lost?",
        "Enterprise recovery workflows restore access without breaking zero-knowledge."
      ],
      [
        "Does it fill passwords automatically?",
        "Yes — browser and mobile autofill included."
      ]
    ]
  },
  "cloud dlp": {
    "price": "Per-user plans",
    "ov": "Data leaves organisations through email attachments, cloud shares and USB drives — usually by accident, occasionally by intent. Cloud DLP watches sensitive data in motion and at rest, blocking Aadhaar numbers, card data and your confidential files from walking out.",
    "f": [
      [
        "Content-aware detection",
        "PII, PAN, Aadhaar and card patterns built in"
      ],
      [
        "Channel coverage",
        "Email, cloud storage, endpoints, web"
      ],
      [
        "Policy actions",
        "Warn, block or encrypt on violation"
      ],
      [
        "DPDPA-relevant",
        "Personal data flows visible and controlled"
      ]
    ],
    "q": [
      [
        "Will it block legitimate work?",
        "Policies start in monitor mode and tune before enforcement — false positives get engineered out."
      ],
      [
        "Does it detect Indian ID formats?",
        "Yes — Aadhaar, PAN and India-specific patterns are included."
      ],
      [
        "Can it see inside attachments?",
        "Yes — content inspection covers common file formats including archives."
      ]
    ]
  },
  "kaspersky industrial cs": {
    "price": "Per-node licensing",
    "ov": "Industrial control systems need security that understands PLCs will not tolerate a heavy agent or a false-positive shutdown. Kaspersky Industrial CyberSecurity protects OT networks and nodes with ICS-aware detection designed for production environments.",
    "f": [
      [
        "ICS-native protection",
        "Built for industrial constraints"
      ],
      [
        "Network + node security",
        "Traffic monitoring plus endpoint protection"
      ],
      [
        "Protocol-aware",
        "Understands industrial protocols natively"
      ],
      [
        "Production-safe",
        "Designed never to disrupt operations"
      ]
    ],
    "q": [
      [
        "Will agents affect PLC performance?",
        "Node protection targets HMIs/servers with minimal footprint; PLCs are monitored passively at network level."
      ],
      [
        "Does it integrate with our SOC?",
        "Yes — events feed standard SIEM platforms."
      ],
      [
        "Is deployment production-safe?",
        "Yes — phased rollout with monitoring-first modes."
      ]
    ]
  },
  "cloud vulnerability mgmt": {
    "price": "Per-asset plans",
    "ov": "A vulnerability scanner produces lists; a vulnerability management programme produces fixes. We run the full cycle — continuous scanning, risk-based prioritisation, remediation tracking and re-verification — across cloud and on-prem assets.",
    "f": [
      [
        "Continuous scanning",
        "Cloud, on-prem and external surfaces"
      ],
      [
        "Risk-based priority",
        "Exploitability over raw CVSS lists"
      ],
      [
        "Remediation tracking",
        "Findings driven to closure, not just reported"
      ],
      [
        "Trend reporting",
        "Exposure shrinking, visibly, over time"
      ]
    ],
    "q": [
      [
        "How is this different from a one-time scan?",
        "A managed cycle — every finding is prioritised, assigned, tracked and re-verified continuously."
      ],
      [
        "Do you patch too?",
        "Pair with Patch Management-as-a-Service for closed-loop remediation."
      ],
      [
        "What about cloud-native assets?",
        "Containers, serverless and cloud configs are in scope."
      ]
    ]
  },
  "certified disk erasure": {
    "price": "Per-device",
    "ov": "Deleted files are recoverable; formatted drives are recoverable; only certified erasure is final. Before disposal, resale or return of IT assets, we erase media to international standards and issue tamper-proof certificates — your defence in a data-leak dispute.",
    "f": [
      [
        "Standards-based",
        "NIST 800-88 aligned erasure"
      ],
      [
        "Per-device certificates",
        "Auditable proof of destruction"
      ],
      [
        "All media types",
        "HDD, SSD, mobile, tapes"
      ],
      [
        "On-site option",
        "Erasure without media leaving your premises"
      ]
    ],
    "q": [
      [
        "Is formatting not enough?",
        "No — formatted data is trivially recoverable; certified erasure overwrites or cryptographically destroys it."
      ],
      [
        "What do auditors receive?",
        "A certificate per serial number with method, date and verification."
      ],
      [
        "What about drives that fail erasure?",
        "Failed media is physically destroyed, with certification."
      ]
    ]
  },
  "sentinelone": {
    "price": "Per-endpoint plans",
    "ov": "SentinelOne brings autonomous, AI-powered protection to every endpoint — detecting and rolling back attacks in real time, including ransomware, without waiting for signature updates or human approval. Deployed and managed by XcellHost.",
    "f": [
      [
        "AI behavioural detection",
        "Stops novel threats, not just known malware"
      ],
      [
        "One-click rollback",
        "Ransomware damage reversed on Windows"
      ],
      [
        "Autonomous response",
        "Contains attacks at machine speed"
      ],
      [
        "XcellHost-managed",
        "Deployment, policy and monitoring by our SOC"
      ]
    ],
    "q": [
      [
        "How is this different from antivirus?",
        "Behavioural AI detects what signatures cannot, and autonomous response acts instantly."
      ],
      [
        "Does rollback really undo ransomware?",
        "On Windows, yes — protected snapshots restore encrypted files."
      ],
      [
        "Can XcellHost manage it fully?",
        "Yes — pair with our MDR for 24×7 managed detection and response."
      ]
    ]
  },
  "dedicated private cloud": {
    "price": "Custom configs",
    "ov": "All the elasticity of cloud, none of the shared tenancy. A dedicated private cloud gives you your own virtualised environment on reserved hardware — rapid provisioning, full isolation and predictable performance for compliance-sensitive workloads.",
    "f": [
      [
        "Fully isolated",
        "Your hardware, your hypervisor, no neighbours"
      ],
      [
        "Rapid provisioning",
        "Spin up VMs in minutes within your capacity"
      ],
      [
        "Compliance-friendly",
        "Single tenancy satisfies strict mandates"
      ],
      [
        "Managed option",
        "We operate the platform, you consume it"
      ]
    ],
    "q": [
      [
        "Private cloud vs bare metal?",
        "Bare metal is one machine; private cloud is a virtualised pool across reserved machines with self-service provisioning."
      ],
      [
        "Can it connect to public cloud?",
        "Yes — hybrid links to AWS/Azure/GCP are standard."
      ],
      [
        "Who manages the hypervisor?",
        "Either — fully managed by us or co-managed with your team."
      ]
    ]
  },
  "global cloud": {
    "price": "Per-region pricing",
    "ov": "Serving users in Singapore, Dubai and London from a Mumbai server adds latency your customers feel. Global Cloud deploys your workloads across international regions — closer to every user, with one management plane.",
    "f": [
      [
        "Multi-region deployment",
        "Compute where your users are"
      ],
      [
        "Single control plane",
        "All regions managed from one console"
      ],
      [
        "Low-latency routing",
        "Users hit the nearest region"
      ],
      [
        "INR billing",
        "Global infrastructure, local invoicing"
      ]
    ],
    "q": [
      [
        "Which regions are available?",
        "Major international locations — current list from our sales team."
      ],
      [
        "Can data stay in specific countries?",
        "Yes — region pinning enforces data residency per workload."
      ],
      [
        "How is failover handled?",
        "Cross-region replication and DNS failover options are available."
      ]
    ]
  },
  "co-location": {
    "price": "Per-rack/U",
    "ov": "Your servers, our Tier-4 datacenter — redundant power, precision cooling, physical security and carrier-neutral connectivity, without building any of it yourself. Full control of your hardware in an environment built for uptime.",
    "f": [
      [
        "Tier-4 facilities",
        "Redundant power, cooling and connectivity"
      ],
      [
        "Physical security",
        "Biometric access, CCTV, 24×7 staffing"
      ],
      [
        "Carrier-neutral",
        "Bring your preferred network providers"
      ],
      [
        "Remote hands",
        "Our on-site engineers when you cannot be there"
      ]
    ],
    "q": [
      [
        "What sizes are available?",
        "From 1U to full racks and cages."
      ],
      [
        "Can we access our equipment anytime?",
        "Yes — 24×7 escorted access with prior notice."
      ],
      [
        "What does remote hands cover?",
        "Reboots, swaps, cabling and visual checks on request."
      ]
    ]
  },
  "hybrid cloud": {
    "price": "Custom architecture",
    "ov": "Some workloads belong on-premises, some in private cloud, some in AWS — the mistake is treating them as islands. Hybrid cloud architecture connects your environments into one operable whole: consistent networking, identity and data flow across all of it.",
    "f": [
      [
        "Unified architecture",
        "On-prem, private and public cloud connected"
      ],
      [
        "Consistent networking",
        "Secure links and one addressing plan"
      ],
      [
        "Workload placement",
        "Each app where it runs best and cheapest"
      ],
      [
        "Single-pane operations",
        "Managed as one estate"
      ]
    ],
    "q": [
      [
        "Where do we start?",
        "A workload assessment maps what should live where — then we build the connective architecture."
      ],
      [
        "Is the link between environments secure?",
        "Private interconnects or encrypted tunnels, by design."
      ],
      [
        "Can you manage the whole hybrid estate?",
        "Yes — see Managed Multi-Cloud for full operations."
      ]
    ]
  },
  "cloud management portal": {
    "price": "Included / plans",
    "ov": "Cloud sprawl across providers and projects turns simple questions — what is running, what does it cost — into archaeology. The cloud management portal centralises provisioning, monitoring and cost visibility in one console.",
    "f": [
      [
        "One console",
        "All resources across environments"
      ],
      [
        "Self-service provisioning",
        "Teams deploy within guardrails"
      ],
      [
        "Cost visibility",
        "Spend by project, team and service"
      ],
      [
        "Role-based access",
        "The right people see the right things"
      ]
    ],
    "q": [
      [
        "Which clouds does it cover?",
        "XcellHost services plus connected AWS/Azure/GCP accounts."
      ],
      [
        "Can budgets be enforced?",
        "Yes — quotas and alerts per team or project."
      ],
      [
        "Is API access available?",
        "Yes — automation-friendly APIs across the portal."
      ]
    ]
  },
  "data as a service": {
    "price": "Per-dataset plans",
    "ov": "Business teams need data; they get tickets and delays instead. Data as a Service delivers governed, on-demand access to your organisational data — curated datasets served to users and applications without every request becoming an engineering project.",
    "f": [
      [
        "On-demand delivery",
        "Data served via APIs and feeds"
      ],
      [
        "Governed access",
        "Who sees what, controlled centrally"
      ],
      [
        "Curated datasets",
        "Clean, documented, ready to use"
      ],
      [
        "Any consumer",
        "BI tools, applications, partners"
      ]
    ],
    "q": [
      [
        "Where does the data live?",
        "In your environment or our cloud — governance travels with it either way."
      ],
      [
        "How is sensitive data protected?",
        "Masking, row-level permissions and audit trails are built in."
      ],
      [
        "Does this replace a data warehouse?",
        "It complements one — see Cloud Analytics for the full stack."
      ]
    ]
  },
  "data center build services": {
    "price": "Project-based",
    "ov": "From a server room refresh to a greenfield facility — designing datacenter infrastructure is a specialised discipline of power, cooling, cabling and redundancy math. Our team plans, designs and delivers datacenter builds that pass audits and survive failures.",
    "f": [
      [
        "Design to delivery",
        "Concept, engineering, build, commissioning"
      ],
      [
        "Redundancy engineering",
        "N+1/2N power and cooling done right"
      ],
      [
        "Standards-aligned",
        "TIA-942 and Uptime concepts applied"
      ],
      [
        "Vendor-neutral",
        "Best equipment for your budget, no lock-in"
      ]
    ],
    "q": [
      [
        "What size projects do you take?",
        "Server rooms to multi-hundred-rack facilities."
      ],
      [
        "Do you handle civil and electrical?",
        "Yes — through the project, with certified partners."
      ],
      [
        "Can you retrofit a live facility?",
        "Yes — phased execution keeps operations running."
      ]
    ]
  },
  "cyber frames": {
    "price": "Appliance + subscription",
    "ov": "Hyperconverged infrastructure with security built into its DNA — Cyber Frames collapses compute, storage and protection into AI-powered appliances that deploy as private cloud in hours, not months.",
    "f": [
      [
        "HCI simplicity",
        "Compute + storage + virtualisation in one"
      ],
      [
        "Security-integrated",
        "Protection woven in, not bolted on"
      ],
      [
        "AI-assisted operations",
        "Predictive health and optimisation"
      ],
      [
        "Rapid deployment",
        "Private cloud running in hours"
      ]
    ],
    "q": [
      [
        "How does this differ from traditional HCI?",
        "Cyber protection and backup are native to the platform rather than add-ons."
      ],
      [
        "Can it scale later?",
        "Yes — add nodes to grow compute and storage linearly."
      ],
      [
        "Who manages it?",
        "Self-managed with our support, or fully managed by XcellHost."
      ]
    ]
  },
  "business e-mail": {
    "price": "Per-mailbox/mo",
    "ov": "you@yourcompany.com costs less than you think and says more than you know. Professional business email with generous mailboxes, spam protection, mobile sync and 99.9% uptime — without Gmail ads or free-domain embarrassment.",
    "f": [
      [
        "Your domain",
        "Professional identity on every message"
      ],
      [
        "Spam + virus filtering",
        "Clean inboxes by default"
      ],
      [
        "Mobile + desktop sync",
        "IMAP/POP and ActiveSync options"
      ],
      [
        "Easy admin",
        "Add mailboxes as you hire"
      ]
    ],
    "q": [
      [
        "Can we migrate from Gmail/old hosting?",
        "Yes — free migration of existing mail."
      ],
      [
        "What mailbox sizes are included?",
        "Generous per-mailbox quotas; details per plan."
      ],
      [
        "Business Email vs Microsoft 365?",
        "This is cost-effective email-first; M365 adds the full Office suite — we help you choose."
      ]
    ]
  },
  "google workspace": {
    "price": "Per-user/mo",
    "ov": "Gmail, Drive, Meet and Docs — the collaboration suite half the world already knows, licensed and supported by XcellHost. Right plan selection, free migration and local support in INR.",
    "f": [
      [
        "Familiar tools",
        "Gmail, Drive, Docs, Meet, Calendar"
      ],
      [
        "Real-time collaboration",
        "Documents edited together, live"
      ],
      [
        "Free migration",
        "From any existing email platform"
      ],
      [
        "Local support + billing",
        "INR invoicing, GST compliant, 24×7 help"
      ]
    ],
    "q": [
      [
        "Workspace or Microsoft 365?",
        "Depends on your workflows — we run a quick needs assessment and recommend honestly."
      ],
      [
        "Can we keep our existing mail during migration?",
        "Yes — zero-downtime cutover."
      ],
      [
        "Is Workspace data backed up?",
        "Google retention is limited — pair with Google Workspace Backup."
      ]
    ]
  },
  "advanced email security": {
    "price": "Per-user/mo",
    "ov": "Microsoft and Google filter the obvious; targeted phishing, BEC and zero-day attachments sail through. Advanced email security adds an AI-driven layer on top of M365 and Workspace — catching the attacks native filtering was never built for.",
    "f": [
      [
        "BEC + impersonation defence",
        "CEO-fraud patterns detected"
      ],
      [
        "Zero-day attachment sandboxing",
        "Unknown files detonated safely"
      ],
      [
        "URL protection",
        "Links checked at click time, not just delivery"
      ],
      [
        "Post-delivery remediation",
        "Malicious mail pulled from inboxes retroactively"
      ]
    ],
    "q": [
      [
        "We have M365 Defender — is this needed?",
        "Layering catches what single engines miss; a free assessment shows your actual gap."
      ],
      [
        "Does it delay mail delivery?",
        "Milliseconds — users notice nothing."
      ],
      [
        "Can it claw back delivered phishing?",
        "Yes — post-delivery removal across all inboxes."
      ]
    ]
  },
  "email signature": {
    "price": "Per-user/mo",
    "ov": "A hundred employees means a hundred fonts, old job titles and broken banners — unless signatures are managed centrally. One dashboard pushes consistent, campaign-ready signatures to every mailbox automatically.",
    "f": [
      [
        "Central control",
        "One template, every employee, always current"
      ],
      [
        "Campaign banners",
        "Marketing space in every email sent"
      ],
      [
        "Directory-synced",
        "Names and titles update themselves"
      ],
      [
        "Any client",
        "Consistent on desktop, web and mobile"
      ]
    ],
    "q": [
      [
        "Do employees have to install anything?",
        "No — signatures apply server-side."
      ],
      [
        "Can departments have different templates?",
        "Yes — rules by team, region or role."
      ],
      [
        "Does it work with M365 and Workspace?",
        "Yes — both platforms are supported."
      ]
    ]
  },
  "email encryption": {
    "price": "Per-user/mo",
    "ov": "Some emails must never be readable in transit or in the wrong inbox — contracts, financials, personal data. Email encryption protects messages end-to-end with simple sending for employees and easy reading for recipients.",
    "f": [
      [
        "One-click encryption",
        "Simple for senders, no training curve"
      ],
      [
        "Recipient-friendly",
        "Secure reading without software installs"
      ],
      [
        "Policy-based",
        "Auto-encrypt by content or recipient rules"
      ],
      [
        "DPDPA-relevant",
        "Personal data in email, protected"
      ]
    ],
    "q": [
      [
        "Do recipients need accounts?",
        "No — secure portal or passcode access works for anyone."
      ],
      [
        "Can encryption be automatic?",
        "Yes — policies trigger on keywords, patterns or domains."
      ],
      [
        "Is this different from TLS?",
        "Yes — TLS protects the pipe; this protects the message itself, end to end."
      ]
    ]
  },
  "cloud conferencing": {
    "price": "Per-host plans",
    "ov": "Meetings that start on time, video that holds up, webinars that scale — cloud conferencing gives your organisation professional meeting infrastructure without the enterprise licensing maze.",
    "f": [
      [
        "HD video + audio",
        "Reliable quality on Indian networks"
      ],
      [
        "Webinar scale",
        "Large-audience broadcasts supported"
      ],
      [
        "Recording + transcripts",
        "Meetings become searchable assets"
      ],
      [
        "Room integration",
        "Works with meeting-room hardware"
      ]
    ],
    "q": [
      [
        "How many participants are supported?",
        "Plans scale from team meetings to thousand-attendee webinars."
      ],
      [
        "Does it integrate with calendars?",
        "Yes — Outlook and Google Calendar scheduling built in."
      ],
      [
        "Is recording storage included?",
        "Cloud recording with defined storage per plan."
      ]
    ]
  },
  "enterprise desktop (vdi)": {
    "price": "Per-user/mo",
    "ov": "Hundreds or thousands of desktops, delivered from the datacenter with the control enterprises require — golden images, GPU options, granular policy and compliance-grade isolation. Full-scale VDI, architected and operated by XcellHost.",
    "f": [
      [
        "Golden-image management",
        "One image, thousands of consistent desktops"
      ],
      [
        "GPU-enabled options",
        "CAD and design workloads supported"
      ],
      [
        "Granular policy",
        "Clipboard, USB and access controlled per group"
      ],
      [
        "Enterprise scale",
        "Built for thousands of concurrent users"
      ]
    ],
    "q": [
      [
        "VDI vs SMB Cloud Desktop?",
        "Same idea, enterprise depth — image management, GPU, and policy granularity for large organisations."
      ],
      [
        "Can it handle designers and engineers?",
        "Yes — GPU-backed desktops run CAD/creative suites."
      ],
      [
        "What about peak-hour performance?",
        "Capacity is engineered for your concurrency profile with headroom."
      ]
    ]
  },
  "azure virtual desktop": {
    "price": "Azure consumption + mgmt",
    "ov": "Windows desktops and apps streamed from Azure — with multi-session Windows economics that cut per-user costs dramatically. We design, deploy and manage your AVD: images, scaling plans, FSLogix profiles and cost optimisation.",
    "f": [
      [
        "Multi-session Windows",
        "Several users per VM — better economics"
      ],
      [
        "Auto-scaling",
        "Hosts spin down when idle, saving spend"
      ],
      [
        "FSLogix profiles",
        "Fast logons, consistent experience"
      ],
      [
        "Managed by XcellHost",
        "Design, deployment and operations"
      ]
    ],
    "q": [
      [
        "Why AVD over other VDI?",
        "Deep M365 integration and multi-session licensing often make it the most cost-effective enterprise option."
      ],
      [
        "Can costs run away on Azure?",
        "Not with scaling plans and our cost management — spend is monitored monthly."
      ],
      [
        "Do existing M365 licenses help?",
        "Yes — many M365 plans include AVD rights; we verify yours."
      ]
    ]
  },
  "aws workspaces": {
    "price": "AWS consumption + mgmt",
    "ov": "Cloud desktops on AWS infrastructure — provisioned in minutes, billed flexibly, integrated with your AWS estate. We handle directory integration, image management and operations so WorkSpaces just works.",
    "f": [
      [
        "AWS-native",
        "Ideal when your stack already lives on AWS"
      ],
      [
        "Flexible billing",
        "Monthly or hourly per desktop"
      ],
      [
        "Directory integration",
        "AD-joined desktops, familiar logins"
      ],
      [
        "Managed operations",
        "Images, patching and support by us"
      ]
    ],
    "q": [
      [
        "AVD or WorkSpaces — which one?",
        "Follow your ecosystem: Microsoft-centric → AVD; AWS-centric → WorkSpaces. We advise honestly."
      ],
      [
        "Can users access from thin clients?",
        "Yes — Windows, Mac, browsers and thin clients."
      ],
      [
        "Is hourly billing really cheaper?",
        "For part-time users, significantly — usage analysis picks the right mode per user."
      ]
    ]
  },
  "cloud connectivity": {
    "price": "Per-link",
    "ov": "The internet is a fine road but a poor backbone. Cloud connectivity gives you private, fast, secure links between your offices, datacenters and cloud environments — predictable performance for the traffic that matters.",
    "f": [
      [
        "Private interconnects",
        "Traffic off the public internet"
      ],
      [
        "Predictable latency",
        "Engineered paths, not best-effort"
      ],
      [
        "Cloud on-ramps",
        "Direct links into AWS/Azure/GCP"
      ],
      [
        "Redundant options",
        "Dual paths for zero-single-point design"
      ]
    ],
    "q": [
      [
        "How is this different from VPN over internet?",
        "Dedicated capacity and engineered latency versus best-effort public routing."
      ],
      [
        "Which clouds can we connect to?",
        "All major providers via direct connect ecosystems."
      ],
      [
        "What bandwidths are available?",
        "From modest links to multi-gigabit — sized to your traffic."
      ]
    ]
  },
  "cloud dns": {
    "price": "Per-zone plans",
    "ov": "DNS is the first step of every user interaction — and a favourite attack target. Managed cloud DNS delivers fast, resilient, secure resolution with global anycast, DNSSEC and instant record management.",
    "f": [
      [
        "Global anycast",
        "Fast resolution from everywhere"
      ],
      [
        "DNSSEC",
        "Responses cryptographically verified"
      ],
      [
        "Instant propagation",
        "Record changes live in seconds"
      ],
      [
        "DDoS-resilient",
        "Absorbs attacks that flatten ordinary DNS"
      ]
    ],
    "q": [
      [
        "Why not just use registrar DNS?",
        "Performance, security and uptime — registrar DNS is rarely engineered for attack resilience."
      ],
      [
        "Is migration disruptive?",
        "No — zones import first, nameservers switch after verification."
      ],
      [
        "Do you support API automation?",
        "Yes — full API for records and zones."
      ]
    ]
  },
  "cloud vpn": {
    "price": "Per-user/site plans",
    "ov": "Secure access for remote staff and encrypted links between sites — managed cloud VPN without appliance headaches. Modern protocols, MFA integration and central policy, run as a service.",
    "f": [
      [
        "Remote access + site-to-site",
        "Both models, one service"
      ],
      [
        "MFA-integrated",
        "Identity-verified connections"
      ],
      [
        "Modern protocols",
        "WireGuard/IPsec performance"
      ],
      [
        "Centrally managed",
        "Policies and users in one console"
      ]
    ],
    "q": [
      [
        "VPN or ZTNA — which should we pick?",
        "ZTNA is the modern successor for user access; VPN still fits site-to-site — we architect the right mix."
      ],
      [
        "Does it slow connections down?",
        "Modern protocols keep overhead minimal."
      ],
      [
        "Can access be limited per user?",
        "Yes — segmented access by group and resource."
      ]
    ]
  },
  "cloud cdn": {
    "price": "Per-GB delivery",
    "ov": "Every kilometre between your server and your user is latency. A CDN caches your content at edge locations worldwide — pages load faster, video streams cleaner, and your origin breathes easier under load.",
    "f": [
      [
        "Global edge network",
        "Content served near every user"
      ],
      [
        "Origin offload",
        "Traffic spikes absorbed at the edge"
      ],
      [
        "HTTPS + HTTP/3",
        "Modern secure delivery"
      ],
      [
        "Instant purge",
        "Stale content cleared in seconds"
      ]
    ],
    "q": [
      [
        "How much faster will my site be?",
        "Static-heavy sites commonly see 40–70% faster loads for distant users."
      ],
      [
        "Does it help with traffic spikes?",
        "Dramatically — the edge absorbs most requests before your origin sees them."
      ],
      [
        "Is video delivery supported?",
        "Yes — streaming delivery is a core use case."
      ]
    ]
  },
  "cloud sd-wan": {
    "price": "Per-site plans",
    "ov": "MPLS everywhere is expensive; broadband alone is unreliable. SD-WAN combines every link you have — broadband, LTE, MPLS — into one intelligent network that routes each application over the best path in real time.",
    "f": [
      [
        "Link aggregation",
        "Broadband + LTE + MPLS as one"
      ],
      [
        "App-aware routing",
        "Critical traffic takes the best path"
      ],
      [
        "Central orchestration",
        "All sites managed from one console"
      ],
      [
        "Cost reduction",
        "MPLS dependency shrinks dramatically"
      ]
    ],
    "q": [
      [
        "Can we really replace MPLS?",
        "Most branches can — critical sites often keep a slim MPLS as one of several paths."
      ],
      [
        "What happens when a link fails?",
        "Sub-second failover; users rarely notice."
      ],
      [
        "How fast is site rollout?",
        "Zero-touch provisioning brings new sites up in hours."
      ]
    ]
  },
  "cloud sase": {
    "price": "Per-user plans",
    "ov": "Users everywhere, apps everywhere — the perimeter is gone. SASE converges networking and security in the cloud: SD-WAN, secure web gateway, CASB and zero trust access delivered as one service, close to every user.",
    "f": [
      [
        "Converged stack",
        "Network + security as one cloud service"
      ],
      [
        "Identity-driven",
        "Access follows the user, not the office"
      ],
      [
        "Cloud-delivered inspection",
        "Full security without backhauling traffic"
      ],
      [
        "One policy plane",
        "Consistent rules for every user, everywhere"
      ]
    ],
    "q": [
      [
        "Is SASE a product or an architecture?",
        "An architecture — we assemble and operate the right components for you."
      ],
      [
        "Can we adopt it gradually?",
        "Yes — most start with ZTNA or SWG and expand."
      ],
      [
        "Does it replace our firewalls?",
        "Over time it can — branch security shifts to the cloud edge."
      ]
    ]
  },
  "cloud nac": {
    "price": "Per-device plans",
    "ov": "What connects to your network right now — every laptop, phone, printer and unknown device? Network Access Control answers that continuously, enforcing who and what may join, with unhealthy or unknown devices quarantined automatically.",
    "f": [
      [
        "Full device visibility",
        "Everything on the network, identified"
      ],
      [
        "Policy enforcement",
        "Corporate, BYOD and guest treated correctly"
      ],
      [
        "Health-based access",
        "Non-compliant devices quarantined"
      ],
      [
        "Cloud-managed",
        "No heavy on-prem NAC appliances"
      ]
    ],
    "q": [
      [
        "Will NAC lock out legitimate users?",
        "Phased enforcement starts with visibility — policies tighten only once the picture is clean."
      ],
      [
        "Does it handle IoT devices?",
        "Yes — profiling identifies and segments non-user devices."
      ],
      [
        "How does guest access work?",
        "Sponsored portals with time-boxed, segmented access."
      ]
    ]
  },
  "video surveillance aas / cloud cctv": {
    "price": "Per-camera/mo",
    "ov": "DVRs fail, footage disappears, and reviewing recordings means driving to site. Cloud video surveillance streams and stores your CCTV securely in the cloud — live views and searchable history from anywhere, with AI event detection.",
    "f": [
      [
        "Cloud recording",
        "Footage safe even if hardware is stolen"
      ],
      [
        "View from anywhere",
        "All sites on one app"
      ],
      [
        "AI detection",
        "People/vehicle events flagged automatically"
      ],
      [
        "Works with existing cameras",
        "ONVIF support protects your investment"
      ]
    ],
    "q": [
      [
        "Do we need new cameras?",
        "Usually not — ONVIF-compatible cameras connect via a bridge."
      ],
      [
        "How long is footage retained?",
        "Plans from 7 to 365 days per camera."
      ],
      [
        "What about bandwidth?",
        "Adaptive streaming keeps uplink usage sensible per site."
      ]
    ]
  },
  "cloud monitoring": {
    "price": "Per-resource plans",
    "ov": "Users should never be your outage-detection system. Cloud monitoring watches your servers, applications and networks continuously — alerting the moment metrics degrade, before customers notice, with dashboards your whole team understands.",
    "f": [
      [
        "Full-stack coverage",
        "Servers, apps, networks, endpoints"
      ],
      [
        "Smart alerting",
        "Signals, not noise — routed to the right people"
      ],
      [
        "Historical trends",
        "Capacity decisions from real data"
      ],
      [
        "Status dashboards",
        "Health visible at a glance"
      ]
    ],
    "q": [
      [
        "What can be monitored?",
        "Practically anything with a metric — infrastructure, URLs, APIs, certificates, queues."
      ],
      [
        "Who responds to alerts?",
        "You, or pair with our NOC for 24×7 managed response."
      ],
      [
        "Is there a status page for customers?",
        "Yes — public status pages are supported."
      ]
    ]
  },
  "apm as a service": {
    "price": "Per-app plans",
    "ov": "\"The site is slow\" — but where? APM traces every request through your code, databases and APIs, pinpointing the exact query or call burning time. Performance problems become specific, fixable findings instead of guesswork.",
    "f": [
      [
        "Distributed tracing",
        "Every request followed end-to-end"
      ],
      [
        "Code-level visibility",
        "The slow function, named"
      ],
      [
        "Database insight",
        "Expensive queries surfaced"
      ],
      [
        "Real-user monitoring",
        "Experience measured from actual browsers"
      ]
    ],
    "q": [
      [
        "Which languages are supported?",
        "Java, .NET, Node, Python, PHP, Go and more."
      ],
      [
        "What is the overhead?",
        "Modern agents add negligible latency."
      ],
      [
        "Can it alert before users complain?",
        "Yes — degradation thresholds trigger alerts ahead of failures."
      ]
    ]
  },
  "sap on cloud": {
    "price": "Per-landscape",
    "ov": "SAP downtime is business downtime. We host and manage SAP landscapes on certified cloud infrastructure — sized correctly, backed up properly, monitored by engineers who know the difference between an ABAP dump and a Basis emergency.",
    "f": [
      [
        "SAP-certified infra",
        "Sized and tuned for SAP workloads"
      ],
      [
        "Basis management",
        "Patching, transports and monitoring handled"
      ],
      [
        "HA + DR options",
        "Landscapes engineered for uptime"
      ],
      [
        "Migration expertise",
        "From on-prem to cloud without drama"
      ]
    ],
    "q": [
      [
        "Which SAP products do you host?",
        "ECC, S/4HANA, BW and surrounding systems."
      ],
      [
        "Do you provide Basis support?",
        "Yes — managed Basis is part of the service."
      ],
      [
        "How is DR handled?",
        "Replicated landscapes with tested RPO/RTO commitments."
      ]
    ]
  },
  "sap b1 as a cloud": {
    "price": "Per-user/mo",
    "ov": "SAP Business One built for SMBs — hosted, managed and delivered per-user from our cloud. Enterprise-grade ERP capability without servers to buy or a Basis team to hire.",
    "f": [
      [
        "B1-optimised hosting",
        "Purpose-built environment for Business One"
      ],
      [
        "Per-user simplicity",
        "Predictable monthly pricing"
      ],
      [
        "Backups included",
        "Your ERP data protected automatically"
      ],
      [
        "Add-on friendly",
        "Industry add-ons deploy alongside"
      ]
    ],
    "q": [
      [
        "Can our existing B1 licence move to cloud?",
        "Yes — bring-your-own-licence is supported."
      ],
      [
        "What about our B1 partner customisations?",
        "Add-ons and customisations migrate with the system."
      ],
      [
        "Is performance good over broadband?",
        "Yes — optimised delivery works well on standard connections."
      ]
    ]
  },
  "marg on cloud": {
    "price": "Per-user/mo",
    "ov": "MARG ERP powers thousands of pharma and retail businesses — and it runs better in the cloud. Access your MARG from any location, with automatic backups and multi-branch access on one live database.",
    "f": [
      [
        "Anywhere access",
        "Shop, warehouse and office on one system"
      ],
      [
        "Automatic backups",
        "Business data protected on schedule"
      ],
      [
        "Multi-branch ready",
        "All locations, one live database"
      ],
      [
        "Fast performance",
        "SSD-backed servers keep billing quick"
      ]
    ],
    "q": [
      [
        "Do we need new MARG licences?",
        "No — your existing licence works on our cloud."
      ],
      [
        "Will barcode scanners and printers work?",
        "Yes — local device redirection is supported."
      ],
      [
        "What if internet fails at the shop?",
        "Mobile-hotspot fallback keeps billing running; sync is automatic."
      ]
    ]
  },
  "managed microsoft 365": {
    "price": "Per-tenant plans",
    "ov": "Microsoft 365 licenses are easy; running the tenant well is not — security baselines, license optimisation, user lifecycle, Teams governance. Managed M365 hands your tenant to certified specialists who keep it secure, tidy and cost-efficient.",
    "f": [
      [
        "Tenant hardening",
        "Security baselines actually enabled"
      ],
      [
        "License optimisation",
        "Unused seats found, spend reduced"
      ],
      [
        "User lifecycle",
        "Joiners and leavers handled same-day"
      ],
      [
        "24×7 support",
        "Your users call us, not you"
      ]
    ],
    "q": [
      [
        "We already have M365 — what changes?",
        "An assessment first — most tenants ship with defaults that leave money and security on the table."
      ],
      [
        "Can you cut our license spend?",
        "Commonly 10–25% via right-sizing and plan mix."
      ],
      [
        "Do end users get direct support?",
        "Yes — helpdesk plans include direct end-user support."
      ]
    ]
  },
  "managed aws / azure / gcp / oracle": {
    "alias": [
      "managed aws",
      "managed azure",
      "managed google cloud (gcp)",
      "managed oracle cloud"
    ],
    "price": "% of spend / fixed",
    "ov": "The cloud bill arrives monthly; the expertise to run it well is harder to find. Our certified engineers operate your AWS, Azure, GCP or Oracle environment — architecture, security, cost optimisation and 24×7 incident response — so cloud delivers what it promised.",
    "f": [
      [
        "Certified engineers",
        "Provider-certified teams per platform"
      ],
      [
        "Cost optimisation",
        "Continuous rightsizing and reservation planning"
      ],
      [
        "Security operations",
        "Posture managed, incidents responded"
      ],
      [
        "24×7 NOC",
        "Someone competent awake when it breaks"
      ]
    ],
    "q": [
      [
        "How is pricing structured?",
        "Percentage-of-spend or fixed monthly — sized to your environment."
      ],
      [
        "Can you reduce our cloud bill?",
        "Typical first-quarter savings of 15–30% via rightsizing, scheduling and reservations."
      ],
      [
        "Do we lose access or control?",
        "Never — delegated access with your guardrails; everything is transparent."
      ]
    ]
  },
  "managed multi-cloud": {
    "price": "Custom plans",
    "ov": "AWS for one workload, Azure for another, GCP for data — sensible choices that become operational chaos without unified management. Managed Multi-Cloud gives you one team, one process and one pane across every provider you use.",
    "f": [
      [
        "One operating team",
        "All clouds, single accountability"
      ],
      [
        "Unified monitoring",
        "Cross-cloud visibility in one console"
      ],
      [
        "Consistent security",
        "One policy standard everywhere"
      ],
      [
        "Consolidated reporting",
        "Spend and health across providers"
      ]
    ],
    "q": [
      [
        "Why not one MSP per cloud?",
        "Fragmented accountability — multi-cloud issues live between providers, and one team must own that space."
      ],
      [
        "Can workloads move between clouds?",
        "We design for portability where it makes sense and manage migrations when needed."
      ],
      [
        "Is billing consolidated too?",
        "Reporting is unified; billing options depend on your agreements."
      ]
    ]
  },
  "managed devops": {
    "price": "Per-pipeline plans",
    "ov": "CI/CD pipelines, infrastructure as code, release automation — DevOps done well multiplies engineering speed; done badly it multiplies outages. Managed DevOps embeds our engineers in your delivery process to build and run the automation properly.",
    "f": [
      [
        "Pipeline engineering",
        "CI/CD built and maintained"
      ],
      [
        "Infrastructure as code",
        "Terraform-managed, reviewable environments"
      ],
      [
        "Release automation",
        "Deploys become boring — the goal"
      ],
      [
        "SRE practices",
        "Reliability engineered, not hoped for"
      ]
    ],
    "q": [
      [
        "Do you replace our developers?",
        "No — we build the delivery machinery your developers use."
      ],
      [
        "Which toolchains do you support?",
        "GitHub/GitLab/Azure DevOps, Jenkins, Terraform, Ansible and the standard ecosystem."
      ],
      [
        "Can you fix our existing pipelines?",
        "Yes — assessment and remediation of existing setups is common."
      ]
    ]
  },
  "managed kubernetes": {
    "price": "Per-cluster plans",
    "ov": "Kubernetes solves scaling and eats operations teams for breakfast. Managed Kubernetes gives you production-grade clusters — built, patched, monitored and rescued by engineers who live in kubectl so yours do not have to.",
    "f": [
      [
        "Cluster lifecycle",
        "Build, upgrade, patch — handled"
      ],
      [
        "Production hardening",
        "RBAC, policies and secrets done right"
      ],
      [
        "Observability included",
        "Metrics, logs and alerts pre-wired"
      ],
      [
        "24×7 response",
        "Cluster incidents answered around the clock"
      ]
    ],
    "q": [
      [
        "Which Kubernetes flavours?",
        "EKS, AKS, GKE and self-hosted clusters."
      ],
      [
        "Do you manage the apps too?",
        "We manage the platform; app deployment support is available as an add-on."
      ],
      [
        "Can you rescue our struggling cluster?",
        "Yes — cluster assessments and take-overs are a frequent starting point."
      ]
    ]
  },
  "managed intune": {
    "price": "Per-device plans",
    "ov": "Intune can secure every laptop and phone you own — if someone configures its hundreds of policies correctly and keeps them current. Managed Intune delivers exactly that: device compliance, app deployment and security baselines, operated by specialists.",
    "f": [
      [
        "Baseline configuration",
        "Security policies set correctly from day one"
      ],
      [
        "App deployment",
        "Software pushed and patched centrally"
      ],
      [
        "Compliance enforcement",
        "Non-compliant devices remediated automatically"
      ],
      [
        "Windows + mobile",
        "Laptops, iOS and Android together"
      ]
    ],
    "q": [
      [
        "We bought Intune but barely use it — normal?",
        "Extremely — most licenses are underused; we activate their full value."
      ],
      [
        "Does it cover BYOD?",
        "Yes — app protection policies secure work data on personal devices."
      ],
      [
        "How does this pair with MDM?",
        "Intune is the platform; this is the managed operation of it."
      ]
    ]
  },
  "e-mail / server migration": {
    "alias": [
      "e-mail migration",
      "server migration"
    ],
    "price": "Per-mailbox / per-server",
    "ov": "Migrations are where data gets lost and weekends die — when done casually. Our migration practice moves mailboxes, servers and workloads with rehearsed runbooks, pilot batches and zero-downtime cutovers.",
    "f": [
      [
        "Rehearsed runbooks",
        "Every step planned and tested first"
      ],
      [
        "Pilot batches",
        "Small groups validate before full waves"
      ],
      [
        "Zero-downtime cutover",
        "Old system live until the switch completes"
      ],
      [
        "Post-migration support",
        "We stay until everything settles"
      ]
    ],
    "q": [
      [
        "What platforms do you migrate between?",
        "Any-to-any for mail (Gmail, M365, Zimbra, Exchange) and standard server platforms."
      ],
      [
        "Will users lose folders or history?",
        "No — full-fidelity migration with verification reports."
      ],
      [
        "How long does it take?",
        "Mailbox waves run in days; server projects are scoped individually."
      ]
    ]
  },
  "ad / database migration": {
    "alias": [
      "ad migration",
      "database migration"
    ],
    "price": "Project-based",
    "ov": "Active Directory and databases are the systems everything else depends on — migrating them is precision work. We plan and execute AD consolidations, domain migrations and database moves with integrity checks at every step.",
    "f": [
      [
        "AD restructuring",
        "Domain migrations and consolidations"
      ],
      [
        "Database expertise",
        "SQL Server, MySQL, PostgreSQL, Oracle"
      ],
      [
        "Integrity verification",
        "Checksums and validation at each phase"
      ],
      [
        "Rollback plans",
        "A tested way back at every step"
      ]
    ],
    "q": [
      [
        "Can users keep working during AD migration?",
        "Yes — phased approaches with coexistence keep business running."
      ],
      [
        "Do you handle schema changes too?",
        "Yes — including version upgrades during the move."
      ],
      [
        "How is data integrity proven?",
        "Verification reports with counts and checksums per phase."
      ]
    ]
  },
  "register a domain": {
    "alias": [
      "register a domain name"
    ],
    "price": "Per-domain/year",
    "ov": "Your domain is your address on the internet — register it before someone else does. Hundreds of extensions, transparent renewal pricing and DNS management included, with WHOIS privacy available from day one.",
    "f": [
      [
        "Hundreds of TLDs",
        ".com, .in, .cloud and new extensions"
      ],
      [
        "Transparent renewals",
        "No surprise second-year pricing"
      ],
      [
        "DNS included",
        "Manage records from one panel"
      ],
      [
        "Privacy available",
        "Keep your details out of WHOIS"
      ]
    ],
    "q": [
      [
        "How fast is a domain active?",
        "Instantly upon registration."
      ],
      [
        "Are renewal prices the same as year one?",
        "Our pricing page shows both — no bait-and-switch."
      ],
      [
        "Can I register for multiple years?",
        "Yes — up to 10 years on most TLDs."
      ]
    ]
  },
  "transfer your domain": {
    "price": "Per-transfer (1yr ext.)",
    "ov": "Unhappy with your current registrar? Transfers to XcellHost include a free one-year extension on most TLDs — plus the support quality your domain deserves. The process takes minutes to start and days to complete, with zero downtime.",
    "f": [
      [
        "Free 1-year extension",
        "Added to your existing expiry"
      ],
      [
        "Zero downtime",
        "Your site and email keep working"
      ],
      [
        "Guided process",
        "We help with auth codes and unlocks"
      ],
      [
        "Better support after",
        "A registrar that answers"
      ]
    ],
    "q": [
      [
        "Will my website go down during transfer?",
        "No — DNS keeps resolving throughout."
      ],
      [
        "What do I need to start?",
        "The auth/EPP code from your current registrar — we guide you."
      ],
      [
        "How long does it take?",
        "Typically 5–7 days, mostly waiting on registry timers."
      ]
    ]
  },
  "windows hosting": {
    "price": "Monthly plans",
    "ov": "ASP.NET applications, MSSQL databases and the Microsoft stack need hosting built for them. Windows hosting on Plesk with the latest .NET runtimes, reliable performance and engineers who actually know IIS.",
    "f": [
      [
        ".NET ready",
        "Current ASP.NET and .NET Core runtimes"
      ],
      [
        "MSSQL databases",
        "Microsoft SQL included in plans"
      ],
      [
        "Plesk panel",
        "Point-and-click management"
      ],
      [
        "Microsoft-certified support",
        "IIS questions answered properly"
      ]
    ],
    "q": [
      [
        "Which .NET versions are supported?",
        "Current LTS versions — specifics on the plan page."
      ],
      [
        "Can I run classic ASP too?",
        "Yes — legacy applications are supported."
      ],
      [
        "Is remote MSSQL access available?",
        "Yes — with secure connection options."
      ]
    ]
  },
  "linux hosting": {
    "price": "Monthly plans",
    "ov": "PHP, Python, Node — the open-source web lives on Linux. Fast SSD-backed Linux hosting with cPanel, one-click installers for WordPress and popular apps, and the reliability of a 27-year-old hosting company.",
    "f": [
      [
        "SSD performance",
        "Fast sites out of the box"
      ],
      [
        "cPanel included",
        "The panel everyone knows"
      ],
      [
        "One-click installers",
        "WordPress and 100+ apps in seconds"
      ],
      [
        "Free SSL",
        "HTTPS on every site"
      ]
    ],
    "q": [
      [
        "Which PHP versions can I use?",
        "Multiple selectable versions per site."
      ],
      [
        "Can I host several websites?",
        "Yes — multi-domain plans available."
      ],
      [
        "Is email included?",
        "Yes — mailboxes on your domain come with hosting."
      ]
    ]
  },
  "wordpress hosting": {
    "price": "Monthly plans",
    "ov": "WordPress runs a third of the web — and runs best on hosting tuned for it. Optimised stack, staging environments, automatic updates and daily backups, so your WordPress is fast, safe and recoverable.",
    "f": [
      [
        "WP-optimised stack",
        "Caching tuned for WordPress"
      ],
      [
        "Staging environments",
        "Test changes before going live"
      ],
      [
        "Auto-updates",
        "Core and security patches applied"
      ],
      [
        "Daily backups",
        "One-click restore included"
      ]
    ],
    "q": [
      [
        "Can you migrate my existing WordPress?",
        "Yes — free migration with zero downtime."
      ],
      [
        "What about plugin conflicts after updates?",
        "Staging lets you test first; backups make everything reversible."
      ],
      [
        "Is it faster than regular hosting?",
        "Noticeably — WP-specific caching typically halves load times."
      ]
    ]
  },
  "web security (sitelock)": {
    "price": "Per-site/mo",
    "ov": "Websites get hacked silently — malware injected, SEO poisoned, visitors infected — while everything looks normal to you. SiteLock scans your site daily, removes malware automatically and warns before Google blacklists you.",
    "f": [
      [
        "Daily malware scans",
        "Infections caught early"
      ],
      [
        "Automatic removal",
        "Clean-up without a developer"
      ],
      [
        "Blacklist monitoring",
        "Know before Google flags you"
      ],
      [
        "Trust seal",
        "Verified-secure badge for your site"
      ]
    ],
    "q": [
      [
        "My site looks fine — could it still be infected?",
        "Very possibly — most infections hide from owners while targeting visitors and search engines."
      ],
      [
        "What happens when malware is found?",
        "Automatic removal on eligible plans; alerts with guided cleanup otherwise."
      ],
      [
        "Does it prevent attacks too?",
        "Higher tiers include WAF protection to block attacks upfront."
      ]
    ]
  },
  "cpanel / plesk": {
    "alias": [
      "cpanel",
      "plesk"
    ],
    "price": "License plans",
    "ov": "The control panels that run the hosting world — cPanel for Linux ecosystems, Plesk for Windows and mixed environments. Licenses at competitive prices with installation and support from our team.",
    "f": [
      [
        "Genuine licenses",
        "Direct, current, supported"
      ],
      [
        "Installation help",
        "Set up correctly the first time"
      ],
      [
        "Version guidance",
        "The right edition for your servers"
      ],
      [
        "Ongoing support",
        "Panel issues resolved by us"
      ]
    ],
    "q": [
      [
        "cPanel or Plesk — which one?",
        "Linux-only estates lean cPanel; Windows or mixed environments lean Plesk — we advise per case."
      ],
      [
        "Can licenses move between servers?",
        "Yes — transfers are supported with our help."
      ],
      [
        "Do you support panel upgrades?",
        "Yes — upgrades and migrations handled."
      ]
    ]
  },
  "ai website builder": {
    "price": "Monthly plans",
    "ov": "Describe your business; get a website. The AI website builder generates a complete, professional site in minutes — content, images and layout included — which you then refine with simple drag-and-drop. No developer required.",
    "f": [
      [
        "AI generation",
        "A full site from a short description"
      ],
      [
        "Drag-and-drop editing",
        "Refine anything, no code"
      ],
      [
        "Mobile-ready",
        "Responsive by default"
      ],
      [
        "Hosting + SSL included",
        "Live and secure immediately"
      ]
    ],
    "q": [
      [
        "Is the AI content actually usable?",
        "It is a strong first draft — most users edit lightly and publish."
      ],
      [
        "Can I use my own domain?",
        "Yes — connect any domain you own."
      ],
      [
        "What if I outgrow it?",
        "Export paths and upgrade routes to full hosting exist."
      ]
    ]
  },
  "website backup": {
    "price": "Per-site/mo",
    "ov": "Hosting backups protect the server; they rarely protect you from your own mistakes at the moment you need it. Independent website backup keeps daily copies of your files and databases with one-click restore to any point.",
    "f": [
      [
        "Daily automatic backups",
        "Files and databases together"
      ],
      [
        "One-click restore",
        "Any snapshot, restored in minutes"
      ],
      [
        "Independent storage",
        "Safe even if hosting fails entirely"
      ],
      [
        "Malware-aware",
        "Clean restore points identified"
      ]
    ],
    "q": [
      [
        "My host says they take backups — enough?",
        "Host backups serve the host; independent backup serves you — with restores on your schedule."
      ],
      [
        "How far back can I restore?",
        "Plan-dependent retention, typically 30+ days of snapshots."
      ],
      [
        "Does it work on any hosting?",
        "Yes — works with any provider via standard protocols."
      ]
    ]
  },
  "migrate to xcellhost": {
    "price": "Free with hosting",
    "ov": "Switching hosts feels risky, so businesses stay with providers they have outgrown. Our migration team moves your websites, emails and databases free of charge — with a zero-downtime method and verification before anything switches.",
    "f": [
      [
        "Completely free",
        "Migration included with hosting plans"
      ],
      [
        "Zero downtime",
        "Old site live until the new one is verified"
      ],
      [
        "Everything moves",
        "Sites, databases, emails, DNS"
      ],
      [
        "Verified cutover",
        "You approve before the switch"
      ]
    ],
    "q": [
      [
        "How long does migration take?",
        "Most sites move within 24–48 hours of access details."
      ],
      [
        "Will email history transfer too?",
        "Yes — mailboxes migrate with full history."
      ],
      [
        "What do you need from me?",
        "Current hosting access — we handle the rest."
      ]
    ]
  },
  "e-mail marketing": {
    "price": "Per-contact plans",
    "ov": "Email remains the highest-ROI marketing channel — when it lands in inboxes and looks professional. Campaign tools with drag-and-drop design, automation journeys and deliverability engineering built in.",
    "f": [
      [
        "Drag-and-drop designer",
        "Beautiful campaigns without designers"
      ],
      [
        "Automation journeys",
        "Welcome series, follow-ups, win-backs"
      ],
      [
        "Deliverability built-in",
        "SPF/DKIM/DMARC alignment guidance"
      ],
      [
        "Analytics",
        "Opens, clicks and conversions tracked"
      ]
    ],
    "q": [
      [
        "Will my emails land in spam?",
        "Deliverability setup is part of onboarding — authentication done right changes everything."
      ],
      [
        "Can I import my existing contacts?",
        "Yes — with consent-hygiene guidance for DPDPA."
      ],
      [
        "Is automation included?",
        "Yes — journey builders come with core plans."
      ]
    ]
  },
  "whatsapp marketing": {
    "price": "Per-conversation",
    "ov": "Your customers open WhatsApp fifty times a day — meet them there, officially. WhatsApp Business API campaigns, AI-driven chat automation and catalog messaging, fully compliant with Meta policies. Free trial available.",
    "f": [
      [
        "Official Business API",
        "Green-tick verified sending"
      ],
      [
        "AI chat automation",
        "Instant replies that convert"
      ],
      [
        "Broadcast campaigns",
        "Policy-compliant bulk messaging"
      ],
      [
        "Catalog + payments",
        "Sell inside the chat"
      ]
    ],
    "q": [
      [
        "Is bulk WhatsApp messaging allowed?",
        "Via the official API with opted-in contacts and approved templates, yes — we keep you compliant."
      ],
      [
        "What does the green tick require?",
        "Business verification through Meta — we assist the process."
      ],
      [
        "Can it integrate with our CRM?",
        "Yes — standard CRM and webhook integrations available."
      ]
    ]
  },
  "sms marketing": {
    "price": "Per-SMS packs",
    "ov": "For OTPs, alerts and offers that must be seen in seconds, SMS still wins — 98% open rates within minutes. DLT-compliant campaigns with sender IDs, templates and delivery reporting handled properly.",
    "f": [
      [
        "DLT compliance handled",
        "Registration and templates guided"
      ],
      [
        "Instant delivery",
        "Reach in seconds, at scale"
      ],
      [
        "Sender ID branding",
        "Messages from your name"
      ],
      [
        "Delivery analytics",
        "Per-message status reporting"
      ]
    ],
    "q": [
      [
        "What is DLT and do I need it?",
        "TRAI-mandated registration for business SMS in India — required, and we guide you through it."
      ],
      [
        "Can OTPs and promotions use one account?",
        "Yes — separate routes for transactional and promotional traffic."
      ],
      [
        "What speed can campaigns achieve?",
        "High-throughput routes deliver lakhs of messages per hour."
      ]
    ]
  },
  "managed seo": {
    "price": "Monthly retainer",
    "ov": "Ranking on Google is a system, not a trick — technical health, content that answers real searches, and authority built over months. Managed SEO runs that system for you with transparent reporting on rankings, traffic and leads.",
    "f": [
      [
        "Technical SEO",
        "Site health, speed and crawlability fixed"
      ],
      [
        "Content strategy",
        "Pages built around real search demand"
      ],
      [
        "Authority building",
        "Legitimate links, no shortcuts"
      ],
      [
        "Transparent reporting",
        "Rankings and leads, monthly"
      ]
    ],
    "q": [
      [
        "How long until results?",
        "Meaningful movement typically starts in 3–4 months; compounding after."
      ],
      [
        "Do you guarantee #1 rankings?",
        "No honest agency does — we guarantee process, transparency and measurable trends."
      ],
      [
        "Do you write the content too?",
        "Yes — content production is included in retainers."
      ]
    ]
  },
  "google my business": {
    "alias": [
      "google my business listing"
    ],
    "price": "Setup + monthly",
    "ov": "When nearby customers search, the map results win the click. Google Business Profile optimisation gets you visible in local searches — complete profiles, review strategy and posts that keep your listing alive.",
    "f": [
      [
        "Profile optimisation",
        "Complete, keyword-smart listings"
      ],
      [
        "Review management",
        "More reviews, professional responses"
      ],
      [
        "Local posts",
        "Fresh updates that boost visibility"
      ],
      [
        "Insights reporting",
        "Calls and direction-requests tracked"
      ]
    ],
    "q": [
      [
        "We have a profile — why optimise?",
        "Complete, active profiles dramatically outrank bare ones in the local pack."
      ],
      [
        "Can you manage multiple locations?",
        "Yes — multi-location management is standard."
      ],
      [
        "How do reviews increase?",
        "Systematic ask-flows for happy customers, plus response handling."
      ]
    ]
  },
  "heyitsme": {
    "price": "Per-profile plans",
    "ov": "One smart link that carries your entire professional presence — profile, links, portfolio and contact routes in a single share-ready page. HeyItsME enhances how you show up everywhere online.",
    "f": [
      [
        "One link, everything",
        "Your presence in a single URL"
      ],
      [
        "Professional templates",
        "Polished in minutes"
      ],
      [
        "Contact routing",
        "Calls, WhatsApp and email in one tap"
      ],
      [
        "Analytics",
        "Who viewed and clicked what"
      ]
    ],
    "q": [
      [
        "How is this different from a website?",
        "Faster, lighter and built for bio-links and sharing — many use both."
      ],
      [
        "Can teams use it?",
        "Yes — consistent branded profiles across staff."
      ],
      [
        "Custom domain possible?",
        "Yes — your own domain can front the profile."
      ]
    ]
  },
  "tsplus suite": {
    "alias": [
      "tsplus remote access",
      "tsplus advanced security",
      "tsplus remote support",
      "tsplus server monitoring"
    ],
    "price": "Per-server licenses",
    "ov": "Remote access to Windows applications without Citrix pricing — TSplus delivers app publishing, secure remote desktops, support tooling and server monitoring at a fraction of legacy costs. Licensed and supported by XcellHost.",
    "f": [
      [
        "App publishing",
        "Windows apps in any browser"
      ],
      [
        "Advanced security",
        "Brute-force defence and geo-filtering"
      ],
      [
        "Remote support tools",
        "Assist users on any machine"
      ],
      [
        "Server monitoring",
        "Performance visibility included"
      ]
    ],
    "q": [
      [
        "Is TSplus a Citrix replacement?",
        "For a large share of use cases, yes — at dramatically lower cost."
      ],
      [
        "How many users per server?",
        "Depends on workload; we size it with you."
      ],
      [
        "Is it a perpetual license?",
        "Perpetual with optional update/support subscriptions."
      ]
    ]
  },
  "acronis cyber protect enterprise": {
    "alias": [
      "acronis cyber protect for enterprise"
    ],
    "price": "Per-workload",
    "ov": "For multi-site and industrial environments, backup alone is not protection. Acronis Cyber Protect Enterprise unifies backup, anti-malware and endpoint management in one agent — cyber defense built for scale and complexity.",
    "f": [
      [
        "Unified agent",
        "Backup + security + management in one"
      ],
      [
        "Multi-site architecture",
        "Central control across locations"
      ],
      [
        "Industrial-ready",
        "OT and edge environments supported"
      ],
      [
        "Ransomware rollback",
        "Attacks reversed, data intact"
      ]
    ],
    "q": [
      [
        "How is this different from Acronis Cloud Backup?",
        "Enterprise adds unified security, patching and multi-site management on top of backup."
      ],
      [
        "Can it run air-gapped sites?",
        "Yes — offline and low-connectivity deployments are supported."
      ],
      [
        "Does one console cover everything?",
        "Yes — all sites and functions from central management."
      ]
    ]
  },
  "cloud analytics": {
    "alias": [
      "data analytics",
      "data engineering",
      "data visualization",
      "data warehouse",
      "data governance",
      "data modernization"
    ],
    "price": "Project + retainer",
    "ov": "Your business generates answers all day — locked in databases nobody queries. Cloud analytics services build your data stack end to end: engineering pipelines, warehousing, dashboards and governance that turn raw records into decisions.",
    "f": [
      [
        "Data engineering",
        "Pipelines that feed everything reliably"
      ],
      [
        "Warehouse design",
        "Single source of truth, cloud-native"
      ],
      [
        "Visualization",
        "Dashboards leadership actually opens"
      ],
      [
        "Governance",
        "Quality, lineage and access controlled"
      ]
    ],
    "q": [
      [
        "Which platforms do you build on?",
        "Modern cloud stacks — warehouse and BI tools chosen to fit your ecosystem."
      ],
      [
        "We have messy data everywhere — normal start?",
        "The most common one — engineering cleanup is phase one."
      ],
      [
        "How fast to first dashboard?",
        "Focused scopes deliver working dashboards in 4–6 weeks."
      ]
    ]
  },
  "microsoft platform": {
    "alias": [
      "microsoft copilot",
      "intune platform",
      "power platform",
      "sentinel"
    ],
    "price": "Licensing + services",
    "ov": "Copilot, Power Platform, Intune, Sentinel — Microsoft has built the tools; extracting their value takes expertise. We license, implement and drive adoption of the Microsoft platform across productivity, automation and security.",
    "f": [
      [
        "Copilot enablement",
        "AI adoption with governance"
      ],
      [
        "Power Platform",
        "Apps and automation without dev teams"
      ],
      [
        "Intune + Sentinel",
        "Devices managed, threats watched"
      ],
      [
        "Adoption programmes",
        "Licenses turned into usage"
      ]
    ],
    "q": [
      [
        "Is Copilot worth the license cost?",
        "With data governance and adoption done right, productivity gains typically justify it — we pilot before scaling."
      ],
      [
        "Can citizen developers really build apps?",
        "With Power Platform guardrails, yes — governance is the key we install."
      ],
      [
        "Do these integrate with our M365?",
        "Natively — that is the point of the platform."
      ]
    ]
  },
  "mail tools": {
    "price": "Free / plans",
    "ov": "SPF, DKIM, DMARC, BIMI, MTA-STS — email authentication is an alphabet of records that must align perfectly. Our mail tools check, generate and monitor them, catching the misconfigurations that silently kill deliverability.",
    "f": [
      [
        "Record checkers",
        "SPF/DKIM/DMARC validated instantly"
      ],
      [
        "Generators",
        "Correct records built for your domain"
      ],
      [
        "BIMI + MTA-STS tools",
        "Modern standards covered"
      ],
      [
        "Monitoring option",
        "Drift alerts before mail breaks"
      ]
    ],
    "q": [
      [
        "My email works — do records matter?",
        "Until one provider tightens policy and your mail vanishes — alignment is preventive medicine."
      ],
      [
        "Are the tools free to use?",
        "Core checkers are free; monitoring comes with Secure DMARC plans."
      ],
      [
        "What is MTA-STS?",
        "A standard forcing encrypted mail delivery — our tools generate the policy correctly."
      ]
    ]
  },
  "ssl tools": {
    "price": "Free",
    "ov": "CSR generation, certificate checks, format conversion, key matching — the small SSL tasks that block deployments. Free tools that get them right the first time.",
    "f": [
      [
        "CSR generator",
        "Correct requests in seconds"
      ],
      [
        "SSL checker",
        "Installation verified instantly"
      ],
      [
        "Format converter",
        "PEM/PFX/DER translated"
      ],
      [
        "Key matcher",
        "Certificate-key pairs verified"
      ]
    ],
    "q": [
      [
        "Is the CSR generator safe to use?",
        "Keys generate client-side or per best practice — guidance included."
      ],
      [
        "My certificate installed but shows errors — help?",
        "The checker pinpoints chain and configuration issues immediately."
      ],
      [
        "Do these tools cost anything?",
        "No — free for everyone."
      ]
    ]
  },
  "network tools": {
    "price": "Free",
    "ov": "Is it slow for everyone or just you? Speed test and Looking Glass diagnostics from our network give you real answers about connectivity to our infrastructure — before you open a ticket.",
    "f": [
      [
        "Speed test",
        "Real throughput to our network"
      ],
      [
        "Looking Glass",
        "Routes and pings from our edge"
      ],
      [
        "Diagnostic clarity",
        "Evidence, not guesswork"
      ],
      [
        "Free access",
        "Open to everyone"
      ]
    ],
    "q": [
      [
        "What does Looking Glass show?",
        "How our network reaches your destination — routing and latency from our side."
      ],
      [
        "Why is this better than a generic speed test?",
        "It measures the path that actually matters: you to our infrastructure."
      ],
      [
        "Can I share results with support?",
        "Yes — results attach neatly to tickets."
      ]
    ]
  },
  "ca cloud": {
    "price": "Per-user/mo (free trial)",
    "ov": "Chartered Accountant firms juggle Tally, tax software, client files and deadlines — CA Cloud puts the whole practice on one secure cloud workspace. Every partner and article accesses the same live environment, from office, home or a client site.",
    "f": [
      [
        "Practice on one cloud",
        "Tally, tax tools and files together"
      ],
      [
        "Client-wise organisation",
        "Data separated and access-controlled per client"
      ],
      [
        "Peak-season ready",
        "Scale users up for filing season, down after"
      ],
      [
        "Audit-friendly security",
        "Backups, access logs and encryption standard"
      ]
    ],
    "q": [
      [
        "Which software can run on CA Cloud?",
        "Tally, Busy, tax filing utilities, Office and practice tools — configured to your stack."
      ],
      [
        "Can articles get limited access?",
        "Yes — role-based access per user and client."
      ],
      [
        "What happens after tax season?",
        "Scale user count down — pay only for what you use."
      ]
    ]
  },
  "smb cloud": {
    "price": "Bundled plans",
    "ov": "Small businesses need enterprise-grade IT without enterprise complexity. SMB Cloud bundles the essentials — cloud desktop, backup, email and security — into one managed package with one bill and one support number.",
    "f": [
      [
        "Essentials bundled",
        "Desktop, backup, email, security together"
      ],
      [
        "One bill, one number",
        "IT simplified to a single relationship"
      ],
      [
        "Grows with you",
        "Add users and services as you scale"
      ],
      [
        "Managed for you",
        "No IT staff required"
      ]
    ],
    "q": [
      [
        "What is in the standard bundle?",
        "Typically cloud desktop or email, Acronis backup and endpoint security — tailored per business."
      ],
      [
        "Can we start small?",
        "Yes — from five users upward."
      ],
      [
        "Who do employees call for help?",
        "Us — 24×7, in English and Hindi."
      ]
    ]
  },
  "bfsi / financial services": {
    "price": "Custom programmes",
    "ov": "Banks, NBFCs and fintechs operate under the heaviest compliance load in Indian IT — RBI localisation, DPDPA, audit trails, uptime mandates. Our BFSI practice delivers cloud and security engineered for that reality, proven with banking clients.",
    "f": [
      [
        "RBI-aligned architecture",
        "Data localisation and audit requirements built in"
      ],
      [
        "DPDPA readiness",
        "Compliance platform and vDPO available"
      ],
      [
        "Regulated-grade security",
        "SOC, VAPT and hardening as standard"
      ],
      [
        "Uptime engineering",
        "HA/DR designed for financial SLAs"
      ]
    ],
    "q": [
      [
        "Do you understand RBI outsourcing guidelines?",
        "Yes — our contracts and controls map to RBI third-party requirements."
      ],
      [
        "Can data residency be guaranteed?",
        "Yes — Indian Tier-4 datacenters with contractual residency."
      ],
      [
        "Which BFSI clients do you serve?",
        "References shared under NDA during evaluation."
      ]
    ]
  },
  "manufacturing": {
    "price": "Custom programmes",
    "ov": "Manufacturers run two worlds — office IT and plant OT — and attackers exploit the seam between them. Our manufacturing practice covers both: ERP hosting, plant-floor security, OT assessments and disaster recovery that understands production cannot stop.",
    "f": [
      [
        "IT + OT coverage",
        "Office systems and plant networks together"
      ],
      [
        "ERP on cloud",
        "SAP/MARG hosted and managed"
      ],
      [
        "OT security",
        "Assessments safe for live production"
      ],
      [
        "Production-aware DR",
        "Recovery plans that respect the line"
      ]
    ],
    "q": [
      [
        "Can you assess our plant without downtime?",
        "Yes — passive OT assessment methods never touch controllers."
      ],
      [
        "Do you host manufacturing ERPs?",
        "Yes — SAP, SAP B1 and industry systems."
      ],
      [
        "What about legacy Windows machines on the floor?",
        "Compensating controls and segmentation — the pragmatic path we specialise in."
      ]
    ]
  },
  "government": {
    "price": "Tender-aligned",
    "ov": "Government projects demand Indian data residency, empanelled-grade security practices and documentation that survives scrutiny. We deliver cloud and security for public-sector programmes with the compliance rigour tenders require.",
    "f": [
      [
        "India-resident infrastructure",
        "Tier-4 domestic datacenters"
      ],
      [
        "Tender-ready documentation",
        "Certifications and compliance evidence"
      ],
      [
        "Security-first delivery",
        "VAPT and hardening standard"
      ],
      [
        "Indian CA options",
        "eMudhra certificates for official use"
      ]
    ],
    "q": [
      [
        "Are you eligible for government tenders?",
        "Our certifications and Indian infrastructure meet common eligibility criteria — specifics per tender."
      ],
      [
        "Can citizen data stay fully in India?",
        "Yes — contractually guaranteed residency."
      ],
      [
        "Do you support legacy application migration?",
        "Yes — modernisation with continuity is a core capability."
      ]
    ]
  },
  "higher education & university": {
    "alias": [
      "higher education",
      "university program"
    ],
    "price": "Per-institution",
    "ov": "Universities run campus-scale IT with student-scale budgets. Our education practice delivers cloud labs, learning infrastructure, campus Wi-Fi security and research computing — elevating learning without enterprise price tags.",
    "f": [
      [
        "Cloud labs",
        "Course environments provisioned per semester"
      ],
      [
        "Research computing",
        "GPU and compute for academic work"
      ],
      [
        "Campus security",
        "Identity, Wi-Fi and endpoint protection"
      ],
      [
        "Education pricing",
        "Budgets respected, value delivered"
      ]
    ],
    "q": [
      [
        "Can students access labs from hostels?",
        "Yes — cloud labs work from any device, anywhere."
      ],
      [
        "Do you support NAAC/NBA documentation?",
        "IT infrastructure evidence for accreditation is part of delivery."
      ],
      [
        "What about semester-based scaling?",
        "Environments scale with the academic calendar."
      ]
    ]
  },
  "pharma · construction · f&b · logistics": {
    "alias": [
      "pharmaceutical",
      "construction",
      "food & beverage",
      "logistics"
    ],
    "price": "Sector programmes",
    "ov": "Every sector carries its own IT DNA — pharma its validation trails, construction its site connectivity, F&B its outlet systems, logistics its tracking uptime. Our sector programmes fit cloud and security to how your industry actually works.",
    "f": [
      [
        "Sector-fitted solutions",
        "Templates from real industry deployments"
      ],
      [
        "Compliance awareness",
        "Sector regulations understood upfront"
      ],
      [
        "Multi-site friendly",
        "Plants, sites, outlets and hubs connected"
      ],
      [
        "One accountable partner",
        "Cloud + security + support together"
      ]
    ],
    "q": [
      [
        "Do you have experience in our specific sector?",
        "Case references shared during scoping — sector fit is validated before commitment."
      ],
      [
        "Can remote sites with poor connectivity work?",
        "Yes — offline-tolerant and low-bandwidth designs exist for exactly this."
      ],
      [
        "Where do we start?",
        "A free sector consultation maps your landscape to a roadmap."
      ]
    ]
  },
  "web design for ca, cs & lawyers": {
    "price": "Fixed packages",
    "ov": "Professionals are judged online before the first meeting. We design credible, compliant websites for CAs, CSs and lawyers — profession-appropriate, mobile-perfect and delivered fast, with hosting and email included.",
    "f": [
      [
        "Profession-appropriate design",
        "Credibility, not gimmicks"
      ],
      [
        "Compliance-aware",
        "Professional conduct rules respected"
      ],
      [
        "Complete package",
        "Design + hosting + email + SSL"
      ],
      [
        "Fast delivery",
        "Live in days, not months"
      ]
    ],
    "q": [
      [
        "Are there restrictions on lawyer websites?",
        "Yes — Bar Council norms shape what is permissible; our templates respect them."
      ],
      [
        "Can clients book appointments online?",
        "Yes — booking and enquiry flows included."
      ],
      [
        "Do you write the content too?",
        "Professional content drafting is part of the package."
      ]
    ]
  },
  "ransomware": {
    "price": "Solution programme",
    "ov": "Ransomware is the scenario every Indian business now plans for — or suffers. Our anti-ransomware programme layers immutable backups, endpoint rollback, email defence and response readiness so an attack becomes an incident, not an extinction event.",
    "f": [
      [
        "Immutable backups",
        "Copies attackers cannot encrypt"
      ],
      [
        "Endpoint rollback",
        "SentinelOne reverses encryption damage"
      ],
      [
        "Email defence",
        "The number-one entry vector, closed"
      ],
      [
        "Response readiness",
        "Playbooks and retainers before you need them"
      ]
    ],
    "q": [
      [
        "If we are hit today, can you help?",
        "Yes — emergency DFIR engagement mobilises immediately."
      ],
      [
        "Should we ever pay a ransom?",
        "With proper backups, recovery-first almost always wins — we walk you through the real decision framework."
      ],
      [
        "How fast can defences be deployed?",
        "Core protections deploy within days."
      ]
    ]
  },
  "phishing": {
    "price": "Solution programme",
    "ov": "Phishing succeeds not because people are careless but because attacks are engineered to work. Our anti-phishing stack combines advanced email filtering, DMARC enforcement, user training and click-time protection — attacking the problem at every layer.",
    "f": [
      [
        "Advanced filtering",
        "BEC and impersonation caught"
      ],
      [
        "DMARC enforcement",
        "Your domain, unspoofable"
      ],
      [
        "User training",
        "Simulations that build reflexes"
      ],
      [
        "Click-time defence",
        "Links checked at the moment of click"
      ]
    ],
    "q": [
      [
        "Our people keep clicking — hopeless?",
        "No — layered controls assume clicks happen and neutralise them; training then reduces the rate."
      ],
      [
        "How fast does DMARC help?",
        "Enforcement typically lands within 4–8 weeks of onboarding."
      ],
      [
        "Can you measure improvement?",
        "Yes — simulation click-rates and blocked-attack metrics reported monthly."
      ]
    ]
  },
  "compromised credentials": {
    "price": "Solution programme",
    "ov": "Stolen passwords are traded daily — including, statistically, some of yours. This programme detects leaked credentials, enforces MFA everywhere, and deploys zero-trust access so a stolen password alone opens nothing.",
    "f": [
      [
        "Leak detection",
        "Your domains monitored in breach markets"
      ],
      [
        "MFA everywhere",
        "Passwords alone become useless"
      ],
      [
        "Zero-trust access",
        "Context checked on every login"
      ],
      [
        "Password hygiene",
        "Manager rollout ends reuse"
      ]
    ],
    "q": [
      [
        "How do we know if our credentials are leaked?",
        "Digital risk monitoring alerts on matches — a free initial exposure check is available."
      ],
      [
        "Is MFA rollout disruptive?",
        "Phased deployment with communication templates keeps friction low."
      ],
      [
        "What about service accounts?",
        "Vaulting and rotation policies cover non-human credentials."
      ]
    ]
  },
  "insider threat": {
    "price": "Solution programme",
    "ov": "The hardest attacker to stop already has a badge and a login. Insider threat defence combines least-privilege access, DLP, behaviour analytics and clean offboarding — protecting data from misuse without treating employees as suspects.",
    "f": [
      [
        "Least privilege",
        "Access trimmed to actual need"
      ],
      [
        "DLP controls",
        "Sensitive data movement watched"
      ],
      [
        "Behaviour analytics",
        "Anomalies flagged, context respected"
      ],
      [
        "Offboarding discipline",
        "Departures without data leakage"
      ]
    ],
    "q": [
      [
        "How do we do this without hurting culture?",
        "Transparent policy plus proportionate monitoring — governance guidance is part of the programme."
      ],
      [
        "Can it catch data theft before resignation?",
        "Unusual download and transfer patterns trigger review — the classic pre-departure signal."
      ],
      [
        "Does it cover contractors?",
        "Yes — third-party identities get scoped, expiring access."
      ]
    ]
  },
  "lateral movement · malware": {
    "alias": [
      "lateral movement",
      "malware & ot security",
      "malware"
    ],
    "price": "Solution programme",
    "ov": "Breaching one machine should never mean owning the network. Segmentation, EDR, NDR and privileged-access controls contain intrusions at the first host — turning would-be catastrophes into contained events.",
    "f": [
      [
        "Network segmentation",
        "Zones that stop the spread"
      ],
      [
        "EDR on every endpoint",
        "Behavioural detection and isolation"
      ],
      [
        "NDR visibility",
        "East-west traffic watched"
      ],
      [
        "Privileged access mgmt",
        "Admin paths locked down"
      ]
    ],
    "q": [
      [
        "Where does segmentation start?",
        "Crown-jewel systems first — a pragmatic zoning design, not a network rebuild."
      ],
      [
        "Can old flat networks be fixed?",
        "Yes — incremental segmentation works without forklift changes."
      ],
      [
        "How is success measured?",
        "Attack-simulation exercises prove containment works."
      ]
    ]
  },
  "security stack consolidation": {
    "price": "Assessment + programme",
    "ov": "Twelve security tools, overlapping licenses, alerts nobody reads — more products stopped meaning more security long ago. Consolidation assessment maps your stack, finds the overlaps and migrates you to fewer, better-integrated platforms.",
    "f": [
      [
        "Stack inventory",
        "Every tool, cost and overlap mapped"
      ],
      [
        "Gap vs overlap analysis",
        "What is missing, what is duplicated"
      ],
      [
        "Migration roadmap",
        "Consolidation without coverage gaps"
      ],
      [
        "Cost recovery",
        "License spend typically drops 20–40%"
      ]
    ],
    "q": [
      [
        "Will fewer tools mean less protection?",
        "Better-integrated platforms usually improve coverage while cutting cost — the assessment proves it per case."
      ],
      [
        "What do organisations typically save?",
        "20–40% of security license spend is common."
      ],
      [
        "How disruptive is migration?",
        "Parallel-run transitions keep protection continuous."
      ]
    ]
  },
  "ng-siem": {
    "price": "Platform + service",
    "ov": "Legacy SIEMs drown analysts in rules and false positives. Next-generation SIEM applies analytics and automation to the same telemetry — fewer, smarter detections with response built in. Delivered as a managed capability.",
    "f": [
      [
        "Analytics-driven detection",
        "Beyond static correlation rules"
      ],
      [
        "UEBA integrated",
        "Behaviour baselines catch the subtle"
      ],
      [
        "SOAR-ready",
        "Response automation attached"
      ],
      [
        "Managed delivery",
        "Our SOC runs it end to end"
      ]
    ],
    "q": [
      [
        "We have an old SIEM — migrate or extend?",
        "Assessment decides — sometimes augmentation beats replacement."
      ],
      [
        "Does NG-SIEM cut false positives?",
        "Dramatically — analytics prioritise what static rules cannot."
      ],
      [
        "Is it cloud or on-prem?",
        "Cloud-native primarily; hybrid patterns exist for data-residency needs."
      ]
    ]
  },
  "udeba": {
    "alias": [
      "ueba"
    ],
    "price": "Module + service",
    "ov": "Rules catch known attacks; behaviour analytics catch the strange — the account logging in at 3 AM from a new city, the user suddenly downloading gigabytes. UEBA baselines normal for every user and entity, then flags meaningful deviation.",
    "f": [
      [
        "Behavioural baselines",
        "Normal learned per user and system"
      ],
      [
        "Insider + account-takeover focus",
        "The threats rules miss"
      ],
      [
        "Risk scoring",
        "Deviations ranked, not dumped"
      ],
      [
        "SIEM integration",
        "Signals feed your detection stack"
      ]
    ],
    "q": [
      [
        "How long until baselines are useful?",
        "Typically 2–4 weeks of learning before high-quality signals."
      ],
      [
        "Does it violate employee privacy?",
        "Metadata-level analytics with governance — content is not read."
      ],
      [
        "Standalone or with SIEM?",
        "Best integrated — it enriches everything downstream."
      ]
    ]
  },
  "case management": {
    "price": "Module + service",
    "ov": "Security incidents scattered across email threads and chat messages die undocumented. Case management gives your security operation systematic incident handling — every alert tracked, assigned, evidenced and closed with an audit trail.",
    "f": [
      [
        "Structured workflow",
        "Every incident tracked to closure"
      ],
      [
        "Evidence attached",
        "Artifacts and timeline in one record"
      ],
      [
        "SLA tracking",
        "Response commitments measured"
      ],
      [
        "Audit-ready history",
        "Regulators and auditors satisfied"
      ]
    ],
    "q": [
      [
        "Does it integrate with our alert sources?",
        "Yes — SIEM, EDR and email alerts flow in automatically."
      ],
      [
        "Can it generate compliance reports?",
        "Yes — incident registers export for audits and DPDPA records."
      ],
      [
        "Who uses it — us or you?",
        "Either — it underpins our SOC service or deploys for your team."
      ]
    ]
  },
  "enterprise": {
    "price": "Custom programmes",
    "ov": "Enterprise IT means scale, legacy, regulation and zero appetite for surprises. Our enterprise programmes combine private cloud, managed security operations and compliance delivery under one accountable partnership — with the depth 27 years builds.",
    "f": [
      [
        "Full-stack capability",
        "Infra, security, compliance together"
      ],
      [
        "Scale-proven",
        "Hundreds of servers, thousands of users"
      ],
      [
        "Executive engagement",
        "vCISO and quarterly business reviews"
      ],
      [
        "One throat to choke",
        "Single accountable partner"
      ]
    ],
    "q": [
      [
        "Can you coexist with our internal IT?",
        "Yes — co-managed models are the enterprise norm."
      ],
      [
        "How are SLAs structured?",
        "Per-service SLAs with credits, defined in the master agreement."
      ],
      [
        "Do you support global operations?",
        "Yes — international regions with Indian governance."
      ]
    ]
  },
  "mssp": {
    "price": "Partner programme",
    "ov": "Building a 24×7 SOC costs crores; reselling ours costs a partnership. Our MSSP programme lets security providers deliver SOC, MDR and VAPT services under their brand — powered by XcellHost infrastructure and analysts.",
    "f": [
      [
        "White-label SOC",
        "Your brand, our 24×7 operation"
      ],
      [
        "Full service menu",
        "MDR, VAPT, DFIR resale-ready"
      ],
      [
        "Partner margins",
        "Built for profitable resale"
      ],
      [
        "Sales enablement",
        "Collateral and pre-sales support included"
      ]
    ],
    "q": [
      [
        "Can services carry our branding?",
        "Yes — white-label delivery including reports."
      ],
      [
        "What does onboarding require?",
        "Partner agreement, enablement training — live within weeks."
      ],
      [
        "Who handles customer incidents?",
        "Our SOC executes; your relationship stays yours."
      ]
    ]
  },
  "msp": {
    "price": "Partner programme",
    "ov": "Your clients ask for cloud, backup and security — deliver all of it without building any of it. The MSP programme gives IT service providers resale access to the full XcellHost portfolio with margins, training and support.",
    "f": [
      [
        "Full portfolio access",
        "Cloud, backup, security — resale-ready"
      ],
      [
        "Recurring margins",
        "Monthly revenue on every service"
      ],
      [
        "Technical backup",
        "Our engineers behind your delivery"
      ],
      [
        "Deal support",
        "Pre-sales help on larger opportunities"
      ]
    ],
    "q": [
      [
        "What margins do partners earn?",
        "Tiered by volume — details in the partner pack."
      ],
      [
        "Do our clients see XcellHost?",
        "Your choice — white-label and co-branded models both exist."
      ],
      [
        "Is there a minimum commitment?",
        "Entry tiers start with no volume commitment."
      ]
    ]
  },
  "bulk domain search": {
    "price": "Free tool",
    "ov": "Launching a brand means checking twenty name ideas across ten extensions — one at a time is torture. Bulk domain search checks hundreds of combinations in one query, with instant registration for the winners.",
    "f": [
      [
        "Hundreds at once",
        "Names × extensions in one search"
      ],
      [
        "Instant availability",
        "Real-time registry checks"
      ],
      [
        "One-cart registration",
        "Grab all winners together"
      ],
      [
        "TLD suggestions",
        "Alternatives when .com is gone"
      ]
    ],
    "q": [
      [
        "How many domains can I check at once?",
        "Hundreds per query — paste your whole list."
      ],
      [
        "Can I register several together?",
        "Yes — bulk cart and checkout."
      ],
      [
        "Are bulk discounts available?",
        "Volume pricing applies on larger registrations."
      ]
    ]
  },
  "domain parking": {
    "price": "Free with domain",
    "ov": "Registered the perfect domain before the website is ready? Parking keeps it secured and presentable — a professional placeholder instead of an error page, until you launch.",
    "f": [
      [
        "Professional placeholder",
        "No ugly errors on your name"
      ],
      [
        "Zero setup",
        "Active immediately on registration"
      ],
      [
        "Email-ready option",
        "Mail can work before the site does"
      ],
      [
        "Instant upgrade",
        "Point to hosting whenever ready"
      ]
    ],
    "q": [
      [
        "Does parking cost extra?",
        "No — included with registration."
      ],
      [
        "Can visitors leave contact details?",
        "Coming-soon pages with enquiry capture are available."
      ],
      [
        "How do I go live later?",
        "Point DNS to your hosting — minutes, with our help."
      ]
    ]
  },
  "whois privacy protection": {
    "alias": [
      "whois privacy",
      "domain protect+"
    ],
    "price": "Per-domain/year",
    "ov": "WHOIS publishes domain-owner contact details to the entire internet — spammers and scammers included. Privacy protection masks your personal information while keeping your domain fully yours and fully functional.",
    "f": [
      [
        "Details masked",
        "Your name and address hidden from WHOIS"
      ],
      [
        "Spam reduction",
        "Harvesters find nothing to harvest"
      ],
      [
        "Full ownership retained",
        "Protection never affects control"
      ],
      [
        "Protect+ option",
        "Enhanced anti-hijack safeguards"
      ]
    ],
    "q": [
      [
        "Is WHOIS privacy legal for businesses?",
        "Yes for most TLDs — a few country codes restrict it; we advise per extension."
      ],
      [
        "Do I still receive important notices?",
        "Yes — verified forwarding passes legitimate contact through."
      ],
      [
        "What does Protect+ add?",
        "Registrar-level locks and hijack safeguards beyond privacy."
      ]
    ]
  },
  "premium domains & new tlds": {
    "alias": [
      "premium domains",
      "latest domain extensions",
      "new tlds"
    ],
    "price": "Market pricing",
    "ov": "Sometimes the perfect name is worth paying for. Premium domains and new extensions — .cloud, .tech, .store and hundreds more — give brands memorable addresses the .com land-rush left behind.",
    "f": [
      [
        "Premium marketplace",
        "High-value names sourced"
      ],
      [
        "New extensions",
        ".cloud, .ai, .tech and hundreds more"
      ],
      [
        "Negotiation support",
        "We broker fair premium purchases"
      ],
      [
        "Brand strategy",
        "The right TLD for your positioning"
      ]
    ],
    "q": [
      [
        "Are premium domains worth it?",
        "For brand-critical names, often yes — memorability compounds; we advise case by case."
      ],
      [
        "Do new TLDs rank on Google?",
        "Yes — Google treats them equally; branding is the real consideration."
      ],
      [
        "Can you negotiate a specific taken domain?",
        "Yes — acquisition brokering is available."
      ]
    ]
  },
  "whois lookup & prices": {
    "alias": [
      "domain whois lookup",
      "domain name prices"
    ],
    "price": "Free tool",
    "ov": "Who owns a domain, when does it expire, what does every extension cost — the reference tools for domain decisions, free and current.",
    "f": [
      [
        "WHOIS lookup",
        "Ownership and expiry checked instantly"
      ],
      [
        "Full price list",
        "Every TLD, registration and renewal"
      ],
      [
        "No surprises",
        "Renewal pricing shown upfront"
      ],
      [
        "Free access",
        "Open tools, always"
      ]
    ],
    "q": [
      [
        "Can I see when a domain expires?",
        "Yes — expiry shows in WHOIS results where the registry publishes it."
      ],
      [
        "Why do renewal prices differ from registration?",
        "Registry pricing — our list shows both years upfront honestly."
      ],
      [
        "Owner details show privacy service — why?",
        "That domain uses WHOIS privacy — as yours should."
      ]
    ]
  },
  "backorder domain": {
    "price": "Per-backorder",
    "ov": "The domain you want is taken — but domains expire every day. Backordering watches your target and attempts registration the instant it drops, giving you the best legitimate shot at a taken name.",
    "f": [
      [
        "Expiry monitoring",
        "Your target watched continuously"
      ],
      [
        "Drop-catching",
        "Registration attempted at release instant"
      ],
      [
        "No-catch options",
        "Refund or credit if unsuccessful"
      ],
      [
        "Alerts",
        "Status changes notified immediately"
      ]
    ],
    "q": [
      [
        "Is a backorder guaranteed to succeed?",
        "No one can guarantee catches — competition exists; we maximise the odds."
      ],
      [
        "What happens if the owner renews?",
        "The backorder keeps watching for future drops, or converts per policy."
      ],
      [
        "Can I backorder multiple domains?",
        "Yes — watch as many targets as you like."
      ]
    ]
  }
};

/** Fallback features when a service has no entry above. */
export const CATEGORY_FEATURES: Record<Category, Pair[]> = {
  "Cloud": [
    [
      "99.95% uptime SLA",
      "Tier-4 Indian datacenters with proactive NOC monitoring"
    ],
    [
      "Enterprise security",
      "Encryption and ISO 27001-certified operations"
    ],
    [
      "Free migration",
      "Seamless transfer of your existing setup with a zero-downtime approach"
    ],
    [
      "24×7 human support",
      "Certified engineers, in English and Hindi"
    ]
  ],
  "Security": [
    [
      "ISO 27001-certified team",
      "Security services from a certified security company"
    ],
    [
      "24×7 SOC",
      "Monitoring and rapid response"
    ],
    [
      "Actionable reports",
      "Remediation guidance your developers can follow"
    ],
    [
      "Compliance-ready",
      "Documentation mapped to DPDPA, RBI and ISO requirements"
    ]
  ],
  "Digital Trust": [
    [
      "Fast issuance",
      "Installation support included"
    ],
    [
      "Best-price guarantee",
      "Across all certificate brands"
    ],
    [
      "Renewal reminders",
      "No certificate ever expires unnoticed"
    ],
    [
      "Expert help",
      "CSR, installation and troubleshooting — all covered"
    ]
  ],
  "Web Presence": [
    [
      "Instant setup",
      "With an easy control panel"
    ],
    [
      "Transparent pricing",
      "No hidden charges"
    ],
    [
      "Free support",
      "Technical help included"
    ],
    [
      "15-day guarantee",
      "Money-back, no questions asked"
    ]
  ],
  "Solutions": [
    [
      "Tailored assessment",
      "Analysis of your environment"
    ],
    [
      "Dedicated manager",
      "A single point of contact"
    ],
    [
      "Phased rollout",
      "With clear milestones"
    ],
    [
      "One partner",
      "End-to-end accountability"
    ]
  ]
};

/** Fallback FAQs when a service has no entry above. */
export const CATEGORY_FAQS: Record<Category, Faq[]> = {
  "Cloud": [
    [
      "Where is my data stored?",
      "In Indian Tier-4 datacenters — friendly to RBI and DPDPA data-localisation requirements."
    ],
    [
      "What support do we get?",
      "24×7 via phone, WhatsApp or ticket — in English and Hindi."
    ],
    [
      "Is there a trial?",
      "Most services offer a free trial or a 15-day money-back guarantee."
    ]
  ],
  "Security": [
    [
      "How does an engagement start?",
      "With a free scoping call — we understand your requirement and send a fixed-scope proposal."
    ],
    [
      "What is the report format?",
      "Executive summary, technical findings and remediation steps."
    ],
    [
      "Will you help with compliance?",
      "Yes — findings are mapped to ISO 27001, DPDPA and RBI frameworks."
    ]
  ],
  "Digital Trust": [
    [
      "How quickly is a certificate issued?",
      "DV in minutes; OV/EV within 1–5 days depending on validation."
    ],
    [
      "Do you handle installation?",
      "Yes — installation support is included."
    ],
    [
      "How do renewals work?",
      "Reminders before expiry, plus one-click renewal."
    ]
  ],
  "Web Presence": [
    [
      "How long does setup take?",
      "Most services activate instantly."
    ],
    [
      "Is migration free?",
      "Yes — free migration from your existing hosting or registrar."
    ],
    [
      "What is the refund policy?",
      "A 15-day money-back guarantee."
    ]
  ],
  "Solutions": [
    [
      "Where do we start?",
      "With a free consultation — we build a roadmap for your sector."
    ],
    [
      "How is pricing done?",
      "A scope-based proposal with a transparent breakdown."
    ],
    [
      "Who handles implementation?",
      "XcellHost’s certified team, with a dedicated manager."
    ]
  ]
};

/** Maps a top-level menu label to the category used for content lookups. */
export const MENU_CATEGORY_MAP: Record<string, Category> = {
  "Web Presence": "Web Presence",
  "Cloud": "Cloud",
  "Digital Trust": "Digital Trust",
  "Security": "Security",
  "Software": "Web Presence",
  "Solutions": "Solutions"
};

/** Icons cycled through the feature list. */
export const FEATURE_ICONS: string[] = [
  "🖥️",
  "🔗",
  "🛡️",
  "⚡",
  "🔑",
  "🎧",
  "🌐",
  "📦",
  "🚀",
  "🔒",
  "📊",
  "⚙️"
];
