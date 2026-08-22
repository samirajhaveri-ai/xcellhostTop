/**
 * Per-category default content. Any service without its own entry in
 * services.data.ts is rendered from these five sets.
 *
 * EDIT THIS FILE to change site content — no other file needs touching.
 */

import { Category, IconItem, Pair, Faq, BlogCard } from './models';

/** Benefit cards (4 per category). */
export const CATEGORY_BENEFITS: Record<Category, IconItem[]> = {
  "Cloud": [
    [
      "💰",
      "Lower cost of ownership",
      "No hardware, AMC or refresh cycles — one predictable monthly price"
    ],
    [
      "🌍",
      "Work from anywhere",
      "Your team stays productive from office, home or site"
    ],
    [
      "🔄",
      "Business continuity",
      "Backups and DR mean a bad day never becomes a lost year"
    ],
    [
      "📈",
      "Scale on demand",
      "Grow users and capacity the day you need them, not next quarter"
    ]
  ],
  "Security": [
    [
      "🛡️",
      "Reduced breach risk",
      "Find and fix weaknesses before attackers exploit them"
    ],
    [
      "✅",
      "Compliance confidence",
      "Evidence and reports your auditors and regulators accept"
    ],
    [
      "🤝",
      "Customer trust",
      "Security posture that wins enterprise and BFSI deals"
    ],
    [
      "🎯",
      "Focus for your team",
      "Experts handle security so your IT ships projects"
    ]
  ],
  "Digital Trust": [
    [
      "📈",
      "Higher conversions",
      "The padlock and verified identity keep buyers buying"
    ],
    [
      "🔁",
      "Zero-outage renewals",
      "Managed lifecycle means no expiry surprises"
    ],
    [
      "🛡️",
      "Brand protection",
      "Verified certificates stop imposters trading on your name"
    ],
    [
      "⚖️",
      "Compliance-ready",
      "Encryption standards regulators expect, done right"
    ]
  ],
  "Web Presence": [
    [
      "✨",
      "Professional image",
      "Your brand looks serious from the first click"
    ],
    [
      "🔍",
      "Found on Google",
      "Visibility that turns searches into enquiries"
    ],
    [
      "⚡",
      "Always online",
      "Reliable hosting with real support behind it"
    ],
    [
      "🧩",
      "One partner",
      "Domain, hosting, email and marketing under one roof"
    ]
  ],
  "Solutions": [
    [
      "🎯",
      "Sector fit",
      "Solutions shaped by real deployments in your industry"
    ],
    [
      "🚀",
      "Faster rollout",
      "Proven templates instead of trial and error"
    ],
    [
      "📍",
      "Single accountability",
      "One partner owns the outcome end to end"
    ],
    [
      "🔮",
      "Future-proof",
      "A roadmap that grows with your business"
    ]
  ]
};

/**
 * Use-case cards (6 per category).
 *
 * Currently unused: product pages build their use cases from USE_OVERRIDE /
 * USE_FRAMES in usecases.data.ts. Kept because it is written content you may
 * want to draw on.
 */
export const CATEGORY_USES: Record<Category, IconItem[]> = {
  "Cloud": [
    [
      "🏢",
      "Multi-branch operations",
      "All locations on one live system with central control"
    ],
    [
      "🏠",
      "Remote & hybrid teams",
      "Secure access to work tools from any device"
    ],
    [
      "🔒",
      "Ransomware recovery",
      "Restore clean data in minutes, not weeks"
    ],
    [
      "📊",
      "Seasonal scaling",
      "Add capacity for peak season, release it after — pay only for what you use"
    ],
    [
      "🗄️",
      "Legacy server retirement",
      "Move ageing on-prem servers to cloud before they fail"
    ],
    [
      "🌐",
      "Data localisation",
      "Keep data in Indian Tier-4 datacenters for RBI & DPDPA compliance"
    ]
  ],
  "Security": [
    [
      "📋",
      "Compliance audits",
      "DPDPA, RBI, ISO evidence on demand"
    ],
    [
      "🤝",
      "Enterprise vendor onboarding",
      "Pass enterprise security questionnaires with proof"
    ],
    [
      "🔧",
      "Post-incident hardening",
      "Close the gaps a scare exposed"
    ],
    [
      "🔍",
      "Continuous threat exposure",
      "Ongoing scanning so new weaknesses don’t sit open for months"
    ],
    [
      "🏦",
      "BFSI & fintech mandates",
      "Meet sector-specific security controls and reporting"
    ],
    [
      "📧",
      "Phishing resilience",
      "Test and train staff against real-world social-engineering attacks"
    ]
  ],
  "Digital Trust": [
    [
      "🛒",
      "E-commerce & payments",
      "Trusted checkout that converts"
    ],
    [
      "📦",
      "Software distribution",
      "Signed installers users trust"
    ],
    [
      "✉️",
      "Email authenticity",
      "Signed, encrypted business communication"
    ],
    [
      "🏢",
      "Enterprise SSO & identity",
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
      "Stop lookalikes trading on your verified identity"
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
      "Branded mailboxes that don’t land in spam"
    ],
    [
      "📈",
      "SEO & visibility",
      "Get found for the searches that bring you business"
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
      "Meet DPDPA/RBI timelines with a plan"
    ],
    [
      "🧩",
      "Security consolidation",
      "Fewer tools, better coverage, lower spend"
    ],
    [
      "🏭",
      "Industry-specific rollout",
      "Templates proven in your sector, not generic"
    ],
    [
      "💼",
      "M&A IT integration",
      "Bring acquired teams onto one secure platform"
    ],
    [
      "💸",
      "Cost optimisation",
      "Right-size cloud spend without losing performance"
    ]
  ]
};

/** Blog cards shown at the foot of a product page. */
export const CATEGORY_BLOG: Record<Category, BlogCard[]> = {
  "Cloud": [
    [
      "Cloud Strategy",
      "7 min",
      "Tally on Cloud vs a local PC: the real 3-year cost comparison",
      "Server, UPS, AMC, the IT guy who visits when it breaks — we added it all up over three years. The number surprised even us.",
      "tally-vs-local"
    ],
    [
      "Data Protection",
      "6 min",
      "Why every Indian SMB needs off-site backup in 2026",
      "Ransomware doesn’t wait for business hours. Here’s the story of a client who got that 3 AM call — and slept fine anyway.",
      "offsite-backup"
    ],
    [
      "How-To",
      "5 min",
      "Zero-downtime migration: how our overnight process works",
      "No downtime, no lost vouchers, no “please don’t touch anything for two days.” A plain-English walk through the playbook.",
      "zero-downtime-migration"
    ]
  ],
  "Security": [
    [
      "DPDPA",
      "8 min",
      "Your consent form is probably illegal now. Here’s the fix.",
      "The DPDP Rules changed what “consent” legally means in India. Most signup forms we audit fail. The correction takes an afternoon.",
      "consent-dpdpa"
    ],
    [
      "Threats",
      "10 min",
      "What a real ransomware attack looks like from the inside",
      "Not the Hollywood version — the actual timeline, hour by hour, from a case our response team handled.",
      "ransomware-inside"
    ],
    [
      "Data Protection",
      "6 min",
      "Why every Indian SMB needs off-site backup in 2026",
      "The backup you never restored from is a theory. What off-site actually means, and how often is often enough.",
      "offsite-backup"
    ]
  ],
  "Digital Trust": [
    [
      "SSL Guide",
      "5 min",
      "DV, OV, EV — stop overpaying for the wrong certificate",
      "Most businesses buy more certificate than they need, or less trust than they should. Getting it right takes five minutes.",
      "ssl-which-cert"
    ],
    [
      "Email Trust",
      "6 min",
      "Why your logo isn’t showing in Gmail (and how to fix it)",
      "That little brand logo in the inbox is called BIMI — and the authentication work underneath it matters more than the logo.",
      "bimi-gmail"
    ],
    [
      "DPDPA",
      "8 min",
      "Your consent form is probably illegal now. Here’s the fix.",
      "Five failures we find in almost every signup form we audit — and the afternoon fix for each one.",
      "consent-dpdpa"
    ]
  ],
  "Web Presence": [
    [
      "SEO",
      "9 min",
      "We ranked a Mumbai business #1 locally. Here’s the playbook.",
      "No black-hat tricks, no bought links. The boring, repeatable local-SEO process that actually moves the needle in India.",
      "local-seo"
    ],
    [
      "Email Trust",
      "6 min",
      "Why your logo isn’t showing in Gmail (and how to fix it)",
      "BIMI, DMARC and the order you have to do them in — without breaking your mail flow.",
      "bimi-gmail"
    ],
    [
      "Cloud Strategy",
      "9 min",
      "The complete guide to Tally on Cloud for Indian businesses",
      "What it is, when it genuinely helps, when it doesn’t, and the questions to ask before you sign anything.",
      "tally-cloud-guide"
    ]
  ],
  "Solutions": [
    [
      "Cloud Strategy",
      "9 min",
      "The complete guide to Tally on Cloud for Indian businesses",
      "What it is, when it genuinely helps, when it doesn’t, and the questions to ask before signing.",
      "tally-cloud-guide"
    ],
    [
      "How-To",
      "5 min",
      "Zero-downtime migration: how our overnight process works",
      "Inventory, dry run, you verify, overnight cutover — and the old system stays alive for two weeks.",
      "zero-downtime-migration"
    ],
    [
      "Threats",
      "10 min",
      "What a real ransomware attack looks like from the inside",
      "The three weeks of quiet reconnaissance nobody sees — and the three things that decided the outcome.",
      "ransomware-inside"
    ]
  ]
};

/** Extra FAQs merged into the product FAQ list. */
export const CATEGORY_FAQ_EXTRA: Record<Category, Faq[]> = {
  "Cloud": [
    [
      "How do I get started?",
      "Start a free trial or request a callback — onboarding typically completes within 24–48 hours."
    ],
    [
      "Can I upgrade or downgrade later?",
      "Yes — plans scale up or down with monthly flexibility on most services."
    ],
    [
      "Is GST invoicing provided?",
      "Yes — proper GST invoices in INR with every billing cycle."
    ],
    [
      "What if I need help at midnight?",
      "Our NOC is 24×7 — phone, WhatsApp and ticket support in English and Hindi."
    ],
    [
      "Is my data private?",
      "Yes — encrypted, access-controlled, and never touched without your permission."
    ]
  ],
  "Security": [
    [
      "How is pricing structured?",
      "Scope-based fixed proposals — no surprise billing mid-engagement."
    ],
    [
      "Do you sign NDAs?",
      "Always — confidentiality is standard before any assessment begins."
    ],
    [
      "Can you work with our existing IT team?",
      "Yes — co-managed delivery is our most common model."
    ],
    [
      "How fast can an engagement start?",
      "Scoping call this week; most engagements begin within 7–10 days."
    ],
    [
      "Do you provide GST invoices?",
      "Yes — full GST-compliant invoicing in INR."
    ]
  ],
  "Digital Trust": [
    [
      "What if I install it wrong?",
      "Installation support is included — our engineers set it up with you."
    ],
    [
      "Can I secure multiple servers?",
      "Yes — licensing options cover multi-server deployments."
    ],
    [
      "Do you offer bulk pricing?",
      "Yes — volume discounts on multi-certificate orders."
    ],
    [
      "What payment methods are accepted?",
      "UPI, cards, NetBanking via secure Zoho payment links."
    ],
    [
      "Is a GST invoice provided?",
      "Yes — with every certificate order."
    ]
  ],
  "Web Presence": [
    [
      "Can I transfer from another provider?",
      "Yes — free migration with zero downtime."
    ],
    [
      "Are there hidden renewal charges?",
      "No — renewal pricing is shown upfront."
    ],
    [
      "Do you provide support in Hindi?",
      "Yes — English and Hindi, 24×7."
    ],
    [
      "What payment options do you accept?",
      "UPI, cards and NetBanking via secure payment links."
    ],
    [
      "Is there a money-back guarantee?",
      "15-day money-back on eligible services."
    ]
  ],
  "Solutions": [
    [
      "Do you serve businesses outside Mumbai?",
      "Yes — pan-India delivery with remote-first onboarding."
    ],
    [
      "Can we start with a pilot?",
      "Yes — phased rollouts beginning with a pilot are standard."
    ],
    [
      "Who will be our point of contact?",
      "A dedicated account manager, backed by the delivery team."
    ],
    [
      "How is success measured?",
      "Agreed milestones and quarterly business reviews."
    ],
    [
      "Do you provide references?",
      "Yes — relevant customer references shared under NDA."
    ]
  ]
};

/** Category-level FAQs. */
export const CATEGORY_FAQ_BASE: Record<Category, Faq[]> = {
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

/** [intro video, use-case video] per category. */
export const CATEGORY_VIDEOS: Record<Category, string[]> = {
  "Cloud": [
    "https://www.youtube.com/watch?v=M988_fsOSWo",
    "https://www.youtube.com/watch?v=1FZKGofP-2A"
  ],
  "Security": [
    "https://www.youtube.com/watch?v=inWWhr5tnEA",
    "https://www.youtube.com/watch?v=Dk-ZqQ-bjA4"
  ],
  "Digital Trust": [
    "https://www.youtube.com/watch?v=T4Df5_cojAs",
    "https://www.youtube.com/watch?v=r1nJT63BFQ0"
  ],
  "Web Presence": [
    "https://www.youtube.com/watch?v=hdI2bqOjy3c",
    "https://www.youtube.com/watch?v=_wZ0k5xN8Sg"
  ],
  "Solutions": [
    "https://www.youtube.com/watch?v=M988_fsOSWo",
    "https://www.youtube.com/watch?v=1FZKGofP-2A"
  ]
};

/** "How it works" — 3 steps per category. */
export const CATEGORY_STEPS: Record<Category, Pair[]> = {
  "Cloud": [
    [
      "Free consultation",
      "We understand your setup, users and goals — no obligation, no jargon."
    ],
    [
      "We migrate &amp; configure",
      "Our engineers move your data and set everything up, typically overnight."
    ],
    [
      "You go live",
      "Your team logs in the next morning. Zero downtime, 24×7 support from day one."
    ]
  ],
  "Security": [
    [
      "Free scoping call",
      "We map your environment and risks, then send a fixed-scope proposal."
    ],
    [
      "Assessment &amp; remediation",
      "Our certified team executes, with findings you can act on immediately."
    ],
    [
      "Ongoing protection",
      "Re-testing, monitoring and reporting — security as a programme, not a project."
    ]
  ],
  "Digital Trust": [
    [
      "Choose &amp; order",
      "Pick the right certificate — we advise honestly on validation level."
    ],
    [
      "Validation &amp; issuance",
      "We handle the paperwork; issuance from minutes to a few days."
    ],
    [
      "Installed &amp; monitored",
      "We install it, verify it, and remind you long before it expires."
    ]
  ],
  "Web Presence": [
    [
      "Pick your plan",
      "Instant setup — most services activate immediately."
    ],
    [
      "Free migration",
      "Moving from another provider? We transfer everything with zero downtime."
    ],
    [
      "Grow with support",
      "24×7 help in English and Hindi, whenever you need it."
    ]
  ],
  "Solutions": [
    [
      "Free consultation",
      "We assess your sector, systems and compliance obligations."
    ],
    [
      "Roadmap &amp; pilot",
      "A phased plan with clear milestones, starting with a pilot."
    ],
    [
      "Full rollout",
      "Delivered by our certified team with a dedicated account manager."
    ]
  ]
};

/** Mock console strings [url line, chart title]. */
export const CATEGORY_MOCK: Record<Category, string[]> = {
  "Cloud": [
    "☁️ cloud.xcellhost.cloud — connected",
    "Resource usage — live"
  ],
  "Security": [
    "🛡️ soc.xcellhost.cloud — monitoring",
    "Threats blocked — this week"
  ],
  "Digital Trust": [
    "🔒 trust.xcellhost.cloud — valid",
    "Certificate health — all domains"
  ],
  "Web Presence": [
    "🌐 panel.xcellhost.cloud — online",
    "Traffic &amp; uptime — live"
  ],
  "Solutions": [
    "📊 console.xcellhost.cloud — active",
    "Programme progress — live"
  ]
};

/** "Why XcellHost" — 6 rows per category. */
export const CATEGORY_WHY: Record<Category, Pair[]> = {
  "Cloud": [
    [
      "Since 1999",
      "27 years running production cloud for Indian businesses"
    ],
    [
      "Tier-4 Indian DCs",
      "Your data stays in India — RBI &amp; DPDPA friendly"
    ],
    [
      "Free migration",
      "We move you across, with a zero-downtime method"
    ],
    [
      "99.95% uptime SLA",
      "Written into the contract, watched by our NOC"
    ],
    [
      "24×7 real engineers",
      "Phone, WhatsApp, ticket — English &amp; Hindi"
    ],
    [
      "One partner",
      "Cloud, security and support under one roof"
    ]
  ],
  "Security": [
    [
      "ISO 27001 certified",
      "Security from a company that lives under the same audits"
    ],
    [
      "24×7 SOC",
      "Detection and response by people, not just tools"
    ],
    [
      "Compliance-mapped",
      "Findings tied to DPDPA, RBI, ISO and PCI requirements"
    ],
    [
      "Certified team",
      "Practitioners who test enterprise environments daily"
    ],
    [
      "Free re-test",
      "Close findings with proof, not promises"
    ],
    [
      "DFIR on standby",
      "If something goes wrong, the same team responds"
    ]
  ],
  "Digital Trust": [
    [
      "All major CAs",
      "DigiCert, Sectigo, GeoTrust, Thawte, eMudhra — we advise honestly"
    ],
    [
      "Best-price guarantee",
      "Certificates at the sharpest prices in the market"
    ],
    [
      "Installation included",
      "Our engineers install and verify it for you"
    ],
    [
      "Renewal alerts",
      "No certificate ever expires unnoticed on our watch"
    ],
    [
      "Indian CA option",
      "eMudhra for government tenders and IT Act contexts"
    ],
    [
      "Since 1999",
      "Digital trust is not a side business for us"
    ]
  ],
  "Web Presence": [
    [
      "27 years hosting",
      "One of India’s longest-running hosting companies"
    ],
    [
      "Free migration",
      "From any provider, with zero downtime"
    ],
    [
      "15-day guarantee",
      "Money-back if it isn’t right for you"
    ],
    [
      "Transparent renewals",
      "The price you see is the price you renew at"
    ],
    [
      "24×7 support",
      "Real humans, English &amp; Hindi"
    ],
    [
      "Everything together",
      "Domain, hosting, email, SSL and marketing in one place"
    ]
  ],
  "Solutions": [
    [
      "Sector experience",
      "Deployments across BFSI, manufacturing, pharma, education and government"
    ],
    [
      "Full-stack partner",
      "Cloud, security and compliance from a single contract"
    ],
    [
      "Dedicated manager",
      "One accountable contact, not a ticket queue"
    ],
    [
      "Phased delivery",
      "Pilot first, scale on proof — no big-bang risk"
    ],
    [
      "ISO-certified delivery",
      "27001 and 20000-1 processes behind every project"
    ],
    [
      "Since 1999",
      "A partner that will still be here at renewal"
    ]
  ]
};

/** Icons cycled through the Why rows. */
export const WHY_ICONS: string[] = [
  "🏆",
  "🛡️",
  "🇮🇳",
  "⚡",
  "🎧",
  "🤝"
];

/** Testimonials [initials, name, role, quote]. */
export const CATEGORY_REVIEWS: Record<Category, [string, string, string, string][]> = {
  "Cloud": [
    [
      "RP",
      "Rajesh Patel",
      "IT Manager · Manufacturing",
      "We moved three branches onto Tally on Cloud and the month-end chaos just… stopped. Everyone works on the same live data now. Two years in, zero regrets."
    ],
    [
      "SK",
      "Sunita Kadam",
      "Partner · CA Firm",
      "My articles log in from home, I review from the office, and our clients never wait. Support actually knows Tally — that’s rare. Genuinely delighted."
    ],
    [
      "MJ",
      "Mahesh Joshi",
      "MD · Trading Co.",
      "I was nervous about putting our accounts on the cloud. Their team migrated everything overnight, for free, and I didn’t lose a single voucher. Solid."
    ]
  ],
  "Security": [
    [
      "AV",
      "Amit Verma",
      "Network Engineer · BFSI",
      "Their VAPT team didn’t just hand us a PDF and leave. They sat with us through every fix and re-tested for free. That’s the difference."
    ],
    [
      "NF",
      "Naina Fernandes",
      "CISO · Fintech",
      "We passed our enterprise client’s security audit because XcellHost had the evidence ready. DPDPA, ISO — all mapped. Saved us weeks."
    ],
    [
      "RD",
      "Rohit Deshmukh",
      "Head of IT · Pharma",
      "Got hit with a scare on a Saturday night. Their DFIR team was on the call within the hour. You find out who your partner really is at 2 AM."
    ]
  ],
  "Digital Trust": [
    [
      "PS",
      "Priya Sharma",
      "CEO · E-commerce",
      "Certificate renewals used to be a fire drill every year. Now they just handle it — reminders, install, done. One less thing to worry about."
    ],
    [
      "KV",
      "Karan Variya",
      "CTO · SaaS",
      "They talked me out of the expensive EV certificate I thought I needed and into the right one. Honest advice that cost them a bigger sale. Earned my trust."
    ],
    [
      "AI",
      "Arif Inamdar",
      "Founder · D2C Brand",
      "Getting our logo verified in Gmail inboxes actually lifted our open rates. Small thing, real difference. Their team made it painless."
    ]
  ],
  "Web Presence": [
    [
      "DG",
      "Deepa Gowda",
      "Owner · Boutique",
      "From a domain to a live, ranking website in under a week. And when I call, a human answers — in Hindi or English. That matters to me."
    ],
    [
      "VT",
      "Vikram Thakur",
      "Director · Logistics",
      "Moved our hosting over with zero downtime during our busiest month. I braced for problems that never came. Quietly excellent."
    ],
    [
      "SM",
      "Sana Merchant",
      "Marketing Head · Retail",
      "Their local SEO playbook got us to the top of Maps for our area. No gimmicks, just steady work that paid off. Recommend them often."
    ]
  ],
  "Solutions": [
    [
      "PA",
      "Pradeep Agarwal",
      "MD · Excellent Electronics",
      "We’ve been with XcellHost for over a decade. They let us serve our own customers better and became our single provider for everything. That loyalty is earned."
    ],
    [
      "RB",
      "Reema Bhatt",
      "COO · Education Group",
      "Ran our entire admissions season from the cloud — 40 staff, multiple campuses, one system. Their dedicated manager made it feel effortless."
    ],
    [
      "HS",
      "Harish Shetty",
      "VP Ops · Construction",
      "Phased, pragmatic, no big-bang risk. They started with a pilot, proved it, then scaled. Exactly how enterprise IT should be done."
    ]
  ]
};

/** Accent colour per category. */
export const CATEGORY_COLORS: Record<Category, string> = {
  "Cloud": "#1565D8",
  "Security": "#7C3AED",
  "Digital Trust": "#0EA5A4",
  "Web Presence": "#FF8C1A",
  "Solutions": "#E11D48"
};

/** Short reasons used by the compare table. */
export const CATEGORY_COMPARE_WHY: Record<Category, string[]> = {
  "Cloud": [
    "99.95% uptime SLA",
    "Tier-4 Indian DCs",
    "Free migration",
    "24×7 NOC"
  ],
  "Security": [
    "ISO 27001 team",
    "24×7 SOC",
    "Compliance-mapped",
    "Free re-test"
  ],
  "Digital Trust": [
    "All major CAs",
    "Installation included",
    "Renewal alerts",
    "Best price"
  ],
  "Web Presence": [
    "Instant setup",
    "Free migration",
    "15-day guarantee",
    "24×7 support"
  ],
  "Solutions": [
    "Sector-fitted",
    "Dedicated manager",
    "Phased rollout",
    "One partner"
  ]
};

/** Lede paragraph on a category landing page. */
export const CATEGORY_LEDE: Record<string, string> = {
  "Cloud": "Servers, storage, desktops and the applications your business runs on — hosted in Indian Tier-4 datacenters and managed by our team.",
  "Security": "Detection, testing, response and compliance. For organisations that hold data worth stealing but do not run a security operations centre.",
  "Digital Trust": "Certificates, signatures and machine identity — the layer that proves you are who you say you are.",
  "Web Presence": "Domains, hosting, search visibility and the channels customers actually find you through.",
  "Solutions": "Combinations built for a sector or a problem, rather than a single product.",
  "Software": "Licensed software, provisioned and supported alongside the infrastructure it runs on."
};
