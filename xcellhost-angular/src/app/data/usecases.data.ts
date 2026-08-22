/**
 * Use-case and security-section source material.
 * Products listed in USE_OVERRIDE / SEC_OVERRIDE get bespoke copy; everything
 * else is assembled deterministically from the pools below, so the same service
 * always produces the same page. "{name}" is replaced with the product name.
 *
 * EDIT THIS FILE to change site content — no other file needs touching.
 */

import { Category, IconItem, Pair } from './models';

export type SecuritySection = [string, Pair[]];

/** Bespoke use cases, keyed by product name. */
export const USE_OVERRIDE: Record<string, IconItem[]> = {
  "Tally on Cloud": [
    [
      "🏢",
      "Multi-branch accounting",
      "Every branch posts into one live company file, no emailed backups"
    ],
    [
      "🧾",
      "Audit-season CA access",
      "Your chartered accountant opens the books from their own office"
    ],
    [
      "🏠",
      "Work-from-home accounts team",
      "Full Tally from a home laptop, with the same controls as the office"
    ],
    [
      "🔒",
      "Ransomware recovery",
      "Restore clean books in minutes from a backup the attacker cannot touch"
    ],
    [
      "📱",
      "Approvals on the move",
      "Directors check outstandings and approve payments from a phone"
    ],
    [
      "🔌",
      "Power-cut resilience",
      "Billing continues when the office loses power"
    ],
    [
      "👥",
      "Seasonal accounting staff",
      "Add temporary users for peak filing season, remove them after"
    ],
    [
      "🗄️",
      "Retiring the office server",
      "Move off ageing hardware before it fails mid-audit"
    ]
  ],
  "Cloud Backup (Acronis)": [
    [
      "🔒",
      "Ransomware rollback",
      "Return to a clean recovery point the attacker could not alter"
    ],
    [
      "🗑️",
      "Accidental deletion",
      "Restore a single file or an entire folder within minutes"
    ],
    [
      "💻",
      "Laptop loss or theft",
      "Endpoint data recovered onto a replacement machine same day"
    ],
    [
      "🏢",
      "Branch offices without IT",
      "Sites with no local technician backed up and monitored centrally"
    ],
    [
      "📧",
      "Microsoft 365 protection",
      "Mail, SharePoint and OneDrive covered beyond native retention"
    ],
    [
      "🧾",
      "Regulatory retention",
      "Records kept for the exact period your regulator requires"
    ],
    [
      "🔁",
      "Timed restore drills",
      "Prove your recovery time twice a year, on the clock"
    ],
    [
      "🖥️",
      "Bare-metal server recovery",
      "Full system rebuilt onto dissimilar hardware after a failure"
    ]
  ],
  "SMB Cyber Security Appliance": [
    [
      "🏢",
      "Small offices & enterprises",
      "Secure users, devices and internet access without an enterprise-sized security team"
    ],
    [
      "🏠",
      "Work from home",
      "Apply consistent browsing and access policies to distributed users"
    ],
    [
      "🎓",
      "Schools & colleges",
      "Control content, protect users and manage bandwidth across shared networks"
    ],
    [
      "🛍️",
      "Retail stores & chains",
      "Manage secure Wi-Fi and policies across multiple locations from one dashboard"
    ],
    [
      "🏥",
      "Healthcare clinics",
      "Protect sensitive systems and separate staff, device and guest access"
    ],
    [
      "🏭",
      "SMBs & manufacturing",
      "Add network-level protection and visibility without complex deployment"
    ],
    [
      "🌐",
      "Branch offices",
      "Centralise security, user controls and reporting across every site"
    ],
    [
      "👥",
      "Growing teams up to 50 users",
      "Add users, roles and policies as the business expands"
    ]
  ],
  "GPU Cloud": [
    [
      "🧠",
      "Model training runs",
      "Spin up multi-GPU capacity for a training cycle, release it after"
    ],
    [
      "🎬",
      "Render pipelines",
      "Studio-grade rendering without buying a render farm"
    ],
    [
      "🔬",
      "Scientific simulation",
      "Compute-heavy research workloads without a university cluster"
    ],
    [
      "📊",
      "Inference at scale",
      "Serve a trained model to production traffic with predictable latency"
    ],
    [
      "🧪",
      "Experiment bursts",
      "Run twenty variants overnight instead of two over a fortnight"
    ],
    [
      "🎓",
      "Teaching and lab work",
      "Give a cohort GPU access for a term without lab hardware"
    ],
    [
      "💰",
      "Avoiding capex approval",
      "Rent the accelerator instead of raising a purchase case"
    ],
    [
      "🔄",
      "Hardware generation jumps",
      "Move to newer GPUs without writing off owned equipment"
    ]
  ],
  "Microsoft 365": [
    [
      "📧",
      "Professional mailboxes",
      "Branded email that reliably lands in the inbox"
    ],
    [
      "📄",
      "Real-time co-authoring",
      "Two people in one document without version conflicts"
    ],
    [
      "🤝",
      "External collaboration",
      "Share securely with clients and auditors without attachments"
    ],
    [
      "📱",
      "Phone-first workforce",
      "Field staff working from the mobile apps all day"
    ],
    [
      "🔐",
      "Licence right-sizing",
      "Match plan tiers to what each role genuinely uses"
    ],
    [
      "🏢",
      "Standardising a merged team",
      "One tenant, one directory, one way of working"
    ],
    [
      "📊",
      "Retiring shared drives",
      "Move file shares into SharePoint with permissions intact"
    ],
    [
      "🎥",
      "Internal town halls",
      "Company-wide meetings without a separate conferencing contract"
    ]
  ],
  "VAPT Services": [
    [
      "🤝",
      "Enterprise security questionnaires",
      "Answer client due-diligence with a current test report"
    ],
    [
      "🚀",
      "Pre-launch application testing",
      "Attack the build in a lab before customers see it"
    ],
    [
      "⚖️",
      "Regulator or auditor request",
      "Independent evidence that controls were tested"
    ],
    [
      "🔧",
      "Post-incident validation",
      "Confirm the gap that was exploited is genuinely closed"
    ],
    [
      "🏦",
      "BFSI onboarding",
      "Meet the testing cadence financial clients mandate"
    ],
    [
      "🌐",
      "New infrastructure sign-off",
      "Test the environment before production traffic arrives"
    ],
    [
      "📱",
      "Mobile app release cycle",
      "Each major version tested before store submission"
    ],
    [
      "🔁",
      "Annual compliance cycle",
      "Scheduled testing that keeps certifications valid"
    ]
  ],
  "Managed PKI": [
    [
      "🔐",
      "Internal service identity",
      "Certificates for internal apps without public issuance cost"
    ],
    [
      "🤖",
      "Device fleet identity",
      "X.509 identity issued to thousands of devices at scale"
    ],
    [
      "🏭",
      "OT and industrial systems",
      "Machine identity in environments that cannot run agents"
    ],
    [
      "👤",
      "Employee certificates",
      "Smartcard and VPN certificates issued from one authority"
    ],
    [
      "⚙️",
      "DevOps automation",
      "Certificates issued and rotated with no human in the loop"
    ],
    [
      "🏢",
      "Replacing a home-grown CA",
      "Move off an unmanaged internal CA nobody wants to own"
    ],
    [
      "📋",
      "Audit of trust chains",
      "Documented issuance policy your auditor can follow"
    ],
    [
      "🔄",
      "Root rotation",
      "Plan and execute a root change without breaking services"
    ]
  ],
  "Cloud VPN": [
    [
      "🏠",
      "Remote worker access",
      "Staff reach internal systems without exposing them publicly"
    ],
    [
      "🔗",
      "Branch interconnect",
      "Offices joined into one private network over the internet"
    ],
    [
      "🤝",
      "Contractor access",
      "Time-limited access scoped to only what a vendor needs"
    ],
    [
      "✈️",
      "Travelling staff",
      "Safe access from hotel and airport networks"
    ],
    [
      "🏭",
      "Remote site telemetry",
      "Plant and warehouse systems reporting back securely"
    ],
    [
      "🔒",
      "Legacy app protection",
      "Put an old application behind a tunnel instead of the open internet"
    ],
    [
      "📱",
      "Mobile device access",
      "Phones and tablets on the corporate network under policy"
    ],
    [
      "☁️",
      "Cloud-to-office link",
      "Private connectivity between your cloud estate and head office"
    ]
  ],
  "WordPress Hosting": [
    [
      "🚀",
      "New site launch",
      "From domain to live WordPress in a day"
    ],
    [
      "⚡",
      "Fixing a slow site",
      "Caching and tuning for pages that were losing visitors"
    ],
    [
      "🔒",
      "Post-hack cleanup",
      "Malware removed and the entry point closed"
    ],
    [
      "📈",
      "Traffic spike survival",
      "A campaign or press mention that would have taken the site down"
    ],
    [
      "🔄",
      "Migrating off a bad host",
      "Move without downtime or losing search rankings"
    ],
    [
      "🧩",
      "Plugin sprawl control",
      "Managed updates so an outdated plugin is not your breach"
    ],
    [
      "🛒",
      "WooCommerce store",
      "Transactional hosting with the headroom checkout needs"
    ],
    [
      "📝",
      "Multi-author publishing",
      "Editorial teams working without stepping on each other"
    ]
  ],
  "Bare Metal Server": [
    [
      "🎮",
      "Latency-sensitive workloads",
      "Dedicated hardware where virtualisation overhead is unacceptable"
    ],
    [
      "🗃️",
      "Large database hosting",
      "Full control of disk and memory for heavy transactional loads"
    ],
    [
      "📜",
      "Licensing constraints",
      "Software licensed per physical core, hosted correctly"
    ],
    [
      "🔬",
      "Performance benchmarking",
      "Consistent results without noisy neighbours"
    ],
    [
      "🏦",
      "Regulated single tenancy",
      "Regulators who require dedicated, not shared, infrastructure"
    ],
    [
      "🎬",
      "Media transcoding",
      "Sustained CPU load that would throttle on shared instances"
    ],
    [
      "🧱",
      "Private virtualisation host",
      "Run your own hypervisor on hardware you control"
    ],
    [
      "📊",
      "Predictable monthly cost",
      "Fixed pricing instead of variable consumption bills"
    ]
  ],
  "Cloud Disaster Recovery": [
    [
      "🔥",
      "Site-loss scenario",
      "Operations resume elsewhere when the primary site is gone"
    ],
    [
      "⚡",
      "Extended power failure",
      "Systems fail over rather than waiting for the generator"
    ],
    [
      "🌊",
      "Regional disruption",
      "Recovery in a different geography when the region is affected"
    ],
    [
      "🧪",
      "Annual DR testing",
      "A rehearsed failover that produces a report for the board"
    ],
    [
      "📋",
      "Insurance and audit",
      "Documented RTO and RPO your policy and auditor require"
    ],
    [
      "🏭",
      "Production line continuity",
      "Manufacturing systems back before the next shift"
    ],
    [
      "⏱️",
      "Tight recovery windows",
      "Meeting an RTO measured in minutes, not days"
    ],
    [
      "🔁",
      "Failback planning",
      "Returning to primary cleanly once the incident is over"
    ]
  ],
  "Managed SEO": [
    [
      "📍",
      "Local search visibility",
      "Being found by customers searching in your city"
    ],
    [
      "🏢",
      "Multi-location listings",
      "Every branch ranking for its own area"
    ],
    [
      "📉",
      "Traffic recovery",
      "Rebuilding rankings lost to an algorithm update or a bad migration"
    ],
    [
      "🆕",
      "New market entry",
      "Building visibility in a city where nobody knows you"
    ],
    [
      "🛒",
      "Product page visibility",
      "Category and product pages that actually surface in search"
    ],
    [
      "📝",
      "Content strategy",
      "Publishing what your buyers search for, not what is easy to write"
    ],
    [
      "🔗",
      "Authority building",
      "Earning mentions from sources that genuinely count"
    ],
    [
      "📊",
      "Reporting to leadership",
      "Monthly evidence of work done and revenue influenced"
    ]
  ],
  "Secure DMARC": [
    [
      "🎭",
      "Brand impersonation",
      "Stopping criminals sending invoices in your company name"
    ],
    [
      "📬",
      "Inbox placement",
      "Legitimate mail reaching customers instead of spam folders"
    ],
    [
      "🔍",
      "Shadow sending discovery",
      "Finding the marketing tool nobody told IT about"
    ],
    [
      "🏦",
      "Supplier trust",
      "Finance teams that can trust an email claiming to be yours"
    ],
    [
      "📈",
      "Campaign deliverability",
      "Marketing mail that arrives at the rate you paid for"
    ],
    [
      "🛡️",
      "Phishing reduction",
      "Fewer fraudulent emails reaching your own staff"
    ],
    [
      "🏷️",
      "BIMI readiness",
      "The authentication groundwork logo display depends on"
    ],
    [
      "📋",
      "Enforcement rollout",
      "Moving to reject without breaking legitimate mail flow"
    ]
  ]
};

/** Use-case pool drawn on when a product has no override. */
export const USE_POOL: Record<Category, IconItem[]> = {
  "Cloud": [
    [
      "🏢",
      "Multi-branch operations",
      "All locations working on one live system with central control"
    ],
    [
      "🏠",
      "Remote & hybrid teams",
      "Secure access to work tools from any device, anywhere"
    ],
    [
      "🔒",
      "Ransomware recovery",
      "Restore clean data in minutes, not weeks"
    ],
    [
      "📊",
      "Seasonal scaling",
      "Add capacity for peak season and release it after"
    ],
    [
      "🗄️",
      "Legacy server retirement",
      "Move ageing on-prem hardware before it fails"
    ],
    [
      "🌐",
      "Data localisation",
      "Keep data in Indian Tier-4 datacenters for RBI & DPDPA"
    ],
    [
      "🧾",
      "Audit-season access",
      "Your CA works from their office without visiting yours"
    ],
    [
      "⚡",
      "Sudden office relocation",
      "Business continues even when the premises do not"
    ],
    [
      "👥",
      "Rapid team onboarding",
      "New joiners productive on day one, no machine setup"
    ],
    [
      "🔁",
      "Disaster recovery drills",
      "Prove recovery works before you need it"
    ],
    [
      "📉",
      "Cutting AMC spend",
      "Retire maintenance contracts on failing hardware"
    ],
    [
      "🛰️",
      "Site-to-site consolidation",
      "Merge scattered servers into one managed environment"
    ],
    [
      "🧮",
      "Month-end close",
      "Everyone in the books at once without file locking"
    ],
    [
      "🏭",
      "Plant-floor to head-office",
      "Production data visible centrally in real time"
    ],
    [
      "📁",
      "File-sprawl cleanup",
      "One controlled store instead of drives and pen drives"
    ],
    [
      "🔌",
      "Power-cut resilience",
      "Work continues when the office loses power"
    ],
    [
      "💼",
      "M&A IT integration",
      "Bring an acquired team onto one platform quickly"
    ],
    [
      "📱",
      "Field-team access",
      "Sales and service staff working from phones and tablets"
    ]
  ],
  "Security": [
    [
      "📋",
      "Compliance audits",
      "DPDPA, RBI and ISO evidence produced on demand"
    ],
    [
      "🤝",
      "Enterprise vendor onboarding",
      "Pass customer security questionnaires with proof"
    ],
    [
      "🔧",
      "Post-incident hardening",
      "Close the gaps a real scare exposed"
    ],
    [
      "🔍",
      "Continuous exposure management",
      "New weaknesses found before attackers find them"
    ],
    [
      "🏦",
      "BFSI & fintech mandates",
      "Meet sector-specific controls and reporting"
    ],
    [
      "📧",
      "Phishing resilience",
      "Test and train staff against real-world attacks"
    ],
    [
      "🕵️",
      "Insider risk",
      "Spot misuse of legitimate access early"
    ],
    [
      "🚨",
      "24×7 threat detection",
      "Someone watching while your team sleeps"
    ],
    [
      "🧩",
      "Security tool consolidation",
      "Fewer overlapping products, better coverage"
    ],
    [
      "🏭",
      "OT and plant networks",
      "Protect industrial systems without disrupting production"
    ],
    [
      "☁️",
      "Cloud misconfiguration",
      "Find the open bucket before someone else does"
    ],
    [
      "🔑",
      "Credential compromise",
      "Detect and contain stolen logins fast"
    ],
    [
      "📱",
      "Mobile and BYOD risk",
      "Company data on personal devices, controlled"
    ],
    [
      "🧪",
      "Pre-launch app testing",
      "Ship code that has been attacked in a lab first"
    ],
    [
      "⚖️",
      "Regulator response",
      "Answer a notice with documented controls"
    ],
    [
      "🔄",
      "Third-party risk",
      "Know what your vendors expose you to"
    ],
    [
      "🎯",
      "Ransomware readiness",
      "Rehearse the bad day before it arrives"
    ],
    [
      "📈",
      "Board-level reporting",
      "Security posture explained in business terms"
    ]
  ],
  "Digital Trust": [
    [
      "🛒",
      "E-commerce checkout",
      "Trusted payment pages that convert"
    ],
    [
      "📦",
      "Software distribution",
      "Signed installers users are not warned about"
    ],
    [
      "✉️",
      "Email authenticity",
      "Signed, encrypted business correspondence"
    ],
    [
      "🏢",
      "Enterprise SSO",
      "Verified certificates for internal apps and services"
    ],
    [
      "📱",
      "App & API security",
      "TLS everywhere across web, mobile and machine-to-machine"
    ],
    [
      "🏷️",
      "Brand impersonation defence",
      "Stop lookalikes trading on your identity"
    ],
    [
      "🔁",
      "Expiry prevention",
      "No more 2 AM outages from a forgotten renewal"
    ],
    [
      "🧾",
      "Statutory e-filing",
      "Digital signatures accepted by government portals"
    ],
    [
      "🌐",
      "Multi-domain estates",
      "One managed lifecycle across every brand you run"
    ],
    [
      "🤖",
      "IoT device identity",
      "X.509 identity for devices at scale"
    ],
    [
      "📜",
      "Contract e-signature",
      "Legally valid signing without paper"
    ],
    [
      "🔐",
      "Private CA rollout",
      "Internal trust without public certificate cost"
    ],
    [
      "🏦",
      "Regulated transactions",
      "Identity assurance regulators expect"
    ],
    [
      "📊",
      "Certificate discovery",
      "Find the certificates nobody documented"
    ],
    [
      "⚙️",
      "DevOps automation",
      "ACME-issued certificates with no human in the loop"
    ],
    [
      "🛡️",
      "Phishing reduction",
      "Verified sender identity your customers can see"
    ]
  ],
  "Web Presence": [
    [
      "🚀",
      "New business launch",
      "Domain to live website in days"
    ],
    [
      "🔄",
      "Rebrand or migration",
      "Move without losing traffic or email"
    ],
    [
      "📍",
      "Local lead generation",
      "Be found by customers near you"
    ],
    [
      "🛒",
      "Online store setup",
      "From domain to storefront with secure hosting"
    ],
    [
      "📧",
      "Professional email",
      "Branded mailboxes that do not land in spam"
    ],
    [
      "📈",
      "Search visibility",
      "Get found for the searches that bring business"
    ],
    [
      "🏷️",
      "Brand protection",
      "Secure the domains competitors would take"
    ],
    [
      "⚡",
      "Slow-site rescue",
      "Fix the load times costing you enquiries"
    ],
    [
      "🔒",
      "Site compromise cleanup",
      "Remove malware and stop it returning"
    ],
    [
      "📱",
      "Mobile-first redesign",
      "Most of your visitors are on a phone"
    ],
    [
      "💬",
      "WhatsApp-led selling",
      "Turn conversations into orders"
    ],
    [
      "🗂️",
      "Multi-brand hosting",
      "Several sites managed under one account"
    ],
    [
      "🎯",
      "Campaign landing pages",
      "Spin up pages that actually convert"
    ],
    [
      "🔁",
      "Content backup",
      "Recover the site after a bad update"
    ]
  ],
  "Solutions": [
    [
      "🔁",
      "Digital transformation",
      "Modernise legacy IT step by step"
    ],
    [
      "⏰",
      "Regulatory deadlines",
      "Meet DPDPA and RBI timelines with a plan"
    ],
    [
      "🧩",
      "Security consolidation",
      "Fewer tools, better coverage, lower spend"
    ],
    [
      "🏭",
      "Industry-specific rollout",
      "Templates proven in your sector"
    ],
    [
      "💼",
      "M&A IT integration",
      "Bring acquired teams onto one platform"
    ],
    [
      "💸",
      "Cost optimisation",
      "Right-size spend without losing performance"
    ],
    [
      "🏫",
      "Multi-campus operations",
      "Standardise IT across locations"
    ],
    [
      "📑",
      "Tender and RFP readiness",
      "Documented posture that wins bids"
    ],
    [
      "🌍",
      "Cross-border operations",
      "Data handled correctly in each jurisdiction"
    ],
    [
      "👨‍💼",
      "IT team augmentation",
      "Specialists on tap without hiring"
    ],
    [
      "📊",
      "Executive visibility",
      "One dashboard instead of six reports"
    ],
    [
      "🔄",
      "Vendor consolidation",
      "One accountable partner, fewer contracts"
    ]
  ]
};

/** Generic use-case frames — "{name}" is substituted at render time. */
export const USE_FRAMES: IconItem[] = [
  [
    "🚀",
    "Piloting {name}",
    "Run a scoped trial before committing budget or timelines"
  ],
  [
    "🔄",
    "Migrating to {name}",
    "Move your existing setup across with a rehearsed, zero-downtime cutover"
  ],
  [
    "📈",
    "Scaling {name}",
    "Add users, capacity or sites the day you need them — not next quarter"
  ],
  [
    "🤝",
    "Standardising {name} across teams",
    "One consistent setup instead of departmental variations"
  ],
  [
    "📋",
    "Audit evidence for {name}",
    "Produce what auditors ask for without a scramble"
  ],
  [
    "🔧",
    "Replacing legacy with {name}",
    "Retire what you run today before it becomes a live incident"
  ],
  [
    "💰",
    "Budgeting {name}",
    "Predictable monthly cost instead of unplanned capital purchases"
  ],
  [
    "👥",
    "Onboarding staff onto {name}",
    "New joiners productive from day one, with no local setup"
  ],
  [
    "🌍",
    "Rolling out {name} across sites",
    "Deploy consistently across every office or location"
  ],
  [
    "⏱️",
    "Deploying {name} to a deadline",
    "Go live against a regulatory or business date that will not move"
  ],
  [
    "🧰",
    "Offloading {name} support",
    "Fewer tickets, because it is managed rather than maintained in-house"
  ],
  [
    "🔌",
    "Integrating {name}",
    "Connect it to the systems you already run, without rework"
  ]
];

/** Icons cycled through generated use cases. */
export const USE_ICONS: string[] = [
  "🏢",
  "🏠",
  "🔒",
  "📊",
  "⚡",
  "🔄",
  "📱",
  "🌐",
  "🛡️",
  "📈",
  "🧩",
  "🔍"
];

/** Bespoke security sections, keyed by product name. */
export const SEC_OVERRIDE: Record<string, SecuritySection> = {
  "Tally on Cloud": [
    "Your company files sit on dedicated, encrypted volumes rather than a shared drive, and the backup copy is immutable — an attacker with your credentials still cannot alter or delete it. Access is limited to named users with 2FA, and every session is logged, so you can answer the question auditors actually ask: who opened the books, and when.",
    [
      [
        "Company file storage",
        "Dedicated encrypted volume per customer"
      ],
      [
        "Backup cadence",
        "Every 3 hours, immutable, 30-day retention"
      ],
      [
        "User access",
        "Named logins, 2FA enforced, no shared accounts"
      ],
      [
        "Session logging",
        "Full audit trail of logins and edits"
      ],
      [
        "Data residency",
        "India · Tier-4 datacenters"
      ],
      [
        "Licence handling",
        "Your own Tally licence, unchanged"
      ]
    ]
  ],
  "Cloud Backup (Acronis)": [
    "The backup copy is the thing ransomware attacks first, so it is placed beyond the reach of your production network and written in immutable form. Once a recovery point is created it cannot be modified or deleted inside its retention window — not by an administrator, and not by anyone holding stolen domain credentials.",
    [
      [
        "Immutability",
        "Write-once storage, retention-locked"
      ],
      [
        "Isolation",
        "Outside your production network"
      ],
      [
        "Encryption",
        "AES-256, customer-held keys"
      ],
      [
        "Anomaly detection",
        "Ransomware-pattern alerts on backup streams"
      ],
      [
        "Restore testing",
        "Scheduled drills with timed results"
      ],
      [
        "Recovery scope",
        "File, folder, VM or bare metal"
      ]
    ]
  ],
  "SMB Cyber Security Appliance": [
    "The appliance protects the business at the network edge, applying firewall, web, DNS, application and user policies to connected devices. Cloud management, automatic intelligence updates and real-time reporting keep protection current without requiring a complex on-premises security stack.",
    [
      [
        "Threat protection",
        "Real-time malware, phishing and risky traffic blocking"
      ],
      [
        "Firewall",
        "Stateful inspection with application visibility and smart policies"
      ],
      [
        "Web & DNS security",
        "Unsafe website filtering with encrypted DNS support"
      ],
      [
        "Business Wi-Fi",
        "Per-user access, role-based policies and isolated guest networks"
      ],
      [
        "Management",
        "Central cloud dashboard for users, sites, devices and policies"
      ],
      [
        "Availability",
        "Dual-WAN failover, adaptive bandwidth and application priority"
      ],
      [
        "Visibility",
        "Real-time dashboards, usage reporting and security alerts"
      ],
      [
        "Updates",
        "Automatic cloud intelligence and hourly IP blocklist updates"
      ]
    ]
  ]
};

/** Security-section pool per category. */
export const SEC_POOL: Record<Category, SecuritySection[]> = {
  "Cloud": [
    [
      "Workloads run in Indian Tier-4 datacenters with N+1 power and cooling, so the failure of any single component does not reach your session.",
      [
        [
          "Hypervisor isolation",
          "Per-tenant, no shared OS"
        ],
        [
          "Snapshot cadence",
          "Every 3 hours, 30-day retention"
        ],
        [
          "Network",
          "Private VLAN per customer"
        ],
        [
          "Failover",
          "Automatic within the availability zone"
        ]
      ]
    ],
    [
      "Access is the control that matters most in a hosted environment, so it is treated as the primary boundary rather than an afterthought.",
      [
        [
          "Authentication",
          "2FA enforced on every account"
        ],
        [
          "Session policy",
          "Idle timeout and device binding"
        ],
        [
          "Privilege model",
          "Least-privilege, reviewed quarterly"
        ],
        [
          "Audit trail",
          "Every login and admin action logged"
        ]
      ]
    ],
    [
      "Encryption is applied at both ends of the journey, and the keys are managed so that a stolen disk or an intercepted session yields nothing usable.",
      [
        [
          "At rest",
          "AES-256 full-volume encryption"
        ],
        [
          "In transit",
          "TLS 1.3 enforced"
        ],
        [
          "Key custody",
          "Customer-scoped, rotated annually"
        ],
        [
          "Media disposal",
          "Certified erasure on decommission"
        ]
      ]
    ]
  ],
  "Security": [
    [
      "Findings are handled as evidence, not alerts: every detection carries the context an auditor or a board member would ask for.",
      [
        [
          "Analyst coverage",
          "24×7 SOC, India-based"
        ],
        [
          "Triage SLA",
          "Critical acknowledged in 15 minutes"
        ],
        [
          "Evidence retention",
          "12 months minimum, extendable"
        ],
        [
          "Reporting",
          "Mapped to MITRE ATT&CK"
        ]
      ]
    ],
    [
      "Testing is performed against your real environment under agreed rules of engagement, with findings ranked by exploitability rather than raw CVSS.",
      [
        [
          "Methodology",
          "OWASP + PTES aligned"
        ],
        [
          "Testers",
          "Certified, background-verified"
        ],
        [
          "Retest",
          "One free retest per finding"
        ],
        [
          "Deliverable",
          "Board summary + technical detail"
        ]
      ]
    ],
    [
      "Detection quality depends on tuning, so rules are maintained continuously rather than deployed once and left to decay.",
      [
        [
          "Rule maintenance",
          "Reviewed weekly against new TTPs"
        ],
        [
          "False-positive target",
          "Under 5% of escalations"
        ],
        [
          "Integration",
          "Feeds your existing SIEM"
        ],
        [
          "Escalation",
          "Named engineer, not a queue"
        ]
      ]
    ]
  ],
  "Digital Trust": [
    [
      "Certificates are issued from publicly trusted roots and tracked through their whole lifecycle, because the common failure is not weak crypto but an unnoticed expiry.",
      [
        [
          "Trust chain",
          "Publicly trusted roots"
        ],
        [
          "Key strength",
          "RSA 2048 / ECC P-256 minimum"
        ],
        [
          "Expiry alerts",
          "90, 30, 7 and 1 day"
        ],
        [
          "Automation",
          "ACME issuance and renewal"
        ]
      ]
    ],
    [
      "Validation depth is matched to what the certificate is protecting, so you buy the level of identity assurance the use case actually needs.",
      [
        [
          "Validation",
          "DV, OV and EV available"
        ],
        [
          "Issuance",
          "Minutes for DV, days for OV/EV"
        ],
        [
          "Reissue",
          "Unlimited, free of charge"
        ],
        [
          "Warranty",
          "Included per certificate tier"
        ]
      ]
    ],
    [
      "Private trust is kept separate from public trust, so internal systems get identity without the cost or exposure of public issuance.",
      [
        [
          "CA hosting",
          "Cloud or on-premises"
        ],
        [
          "HSM backing",
          "FIPS 140-2 Level 3"
        ],
        [
          "Policy control",
          "Custom issuance policies"
        ],
        [
          "Revocation",
          "OCSP and CRL published"
        ]
      ]
    ]
  ],
  "Web Presence": [
    [
      "Sites are hosted behind a filtering layer and patched on a schedule, because most compromises we clean up came through an outdated plugin rather than a clever attack.",
      [
        [
          "Patching",
          "Core and plugin updates managed"
        ],
        [
          "WAF",
          "Rules tuned per application"
        ],
        [
          "Malware scanning",
          "Daily, with auto-remediation"
        ],
        [
          "Backups",
          "Daily, restorable to any point"
        ]
      ]
    ],
    [
      "Domain and DNS are treated as security assets, since losing control of either is faster and more damaging than losing the website itself.",
      [
        [
          "Registrar lock",
          "Enabled by default"
        ],
        [
          "DNS",
          "Anycast, DNSSEC available"
        ],
        [
          "Whois privacy",
          "Included"
        ],
        [
          "Transfer control",
          "Two-person approval"
        ]
      ]
    ]
  ],
  "Solutions": [
    [
      "Engagements are scoped with named accountability, so there is one team answerable for the outcome rather than a chain of vendors.",
      [
        [
          "Ownership",
          "Named delivery manager"
        ],
        [
          "Governance",
          "Fortnightly steering review"
        ],
        [
          "Documentation",
          "Handover pack included"
        ],
        [
          "Exit",
          "Full data export on request"
        ]
      ]
    ],
    [
      "Sector deployments carry the controls that sector's regulator expects, rather than a generic baseline adapted afterwards.",
      [
        [
          "Frameworks",
          "ISO 27001, RBI, DPDPA aligned"
        ],
        [
          "Localisation",
          "Indian data residency"
        ],
        [
          "Assurance",
          "Third-party audited"
        ],
        [
          "Continuity",
          "Documented DR plan"
        ]
      ]
    ]
  ]
};

/** Opening sentences — "{name}" is substituted at render time. */
export const SEC_OPENERS: string[] = [
  "Security for {name} is built into how the service is delivered, not bolted on afterwards. ",
  "When customers ask what protects {name}, the answer is a small number of controls applied consistently. ",
  "The controls below are the ones that actually matter for {name} — not a generic compliance list. ",
  "We are asked to prove this regularly, so here is exactly how {name} is protected. ",
  "Every {name} deployment ships with the same baseline, documented and auditable. ",
  "The threat model for {name} is specific, and the controls are chosen to match it. "
];

/** Extra spec rows appended to a generated security section. */
export const SEC_EXTRA: Pair[][] = [
  [
    [
      "Change control",
      "Documented, peer-reviewed"
    ],
    [
      "Support access",
      "Break-glass only, fully logged"
    ]
  ],
  [
    [
      "Vulnerability management",
      "Monthly scan + patch window"
    ],
    [
      "Incident response",
      "Named engineer, 15-min ack"
    ]
  ],
  [
    [
      "Backup verification",
      "Automated restore checks"
    ],
    [
      "Offboarding",
      "Certified data deletion on exit"
    ]
  ],
  [
    [
      "Penetration testing",
      "Annual, third-party"
    ],
    [
      "Availability",
      "99.95% uptime SLA"
    ]
  ]
];
