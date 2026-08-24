/**
 * SecureSetu DPDPA platform — 9 modules, shown in DPDPA_ORDER order.
 *
 * EDIT THIS FILE to change site content — no other file needs touching.
 */

import { DpdpaModule } from './models';

export const DPDPA_ORDER: string[] = [
  "consent",
  "rights",
  "breach",
  "dashboard",
  "ropa",
  "vendor",
  "children",
  "dpia",
  "vdpo"
];

export const DPDPA_MODULES: Record<string, DpdpaModule> = {
  "consent": {
    "t": "Consent Management",
    "tier": "All plans",
    "sec": "⚖️ Sections 5 &amp; 6 · Rule 3 — Notice and consent",
    "slug": "consent-management",
    "tag": "Purpose-specific consent, captured with cryptographic proof — in the languages your users actually read.",
    "prob": "You collected agreement somewhere — a checkbox at signup, a tick on a form, an email reply. But under Section 6(10) the burden of proof sits with <b>you</b>: can you produce a timestamped record showing exactly what notice was displayed, in which language, for which purpose, and what the user agreed to? A spreadsheet cannot do that. A screenshot is not evidence.",
    "caps": [
      [
        "Multilingual notice builder",
        "Build purpose-specific notices in major Indian languages — because consent is only valid if it was understood"
      ],
      [
        "Cryptographic consent receipts",
        "Every consent event is hashed and timestamped — tamper-evident proof, not a database row someone could edit"
      ],
      [
        "Version-controlled notices",
        "When your notice changes materially, the system knows — and can trigger re-consent automatically"
      ],
      [
        "Drop-in widget SDK",
        "Two lines of JavaScript on your site or app; consent starts being captured from the next visitor onward"
      ],
      [
        "Granular purpose control",
        "Users grant and withdraw per purpose — marketing, analytics, profiling — not one blanket toggle"
      ],
      [
        "Withdrawal in one click",
        "Withdrawal must be as easy as giving consent. It is — and every withdrawal is logged too."
      ]
    ],
    "steps": [
      [
        "Map your purposes",
        "We identify every purpose for which you process personal data — the foundation of a defensible notice"
      ],
      [
        "Publish the notice",
        "Build it once, publish in multiple languages, embed the widget"
      ],
      [
        "Capture &amp; prove",
        "Every consent, withdrawal and re-consent is recorded with a cryptographic receipt"
      ]
    ],
    "evi": [
      [
        "📜",
        "Timestamped consent receipt per event"
      ],
      [
        "🔐",
        "Cryptographic hash for tamper evidence"
      ],
      [
        "🗂",
        "Version history of every notice published"
      ],
      [
        "📊",
        "Consent-rate reporting by purpose"
      ]
    ],
    "faq": [
      [
        "Is a cookie banner enough to be DPDPA compliant?",
        "No. DPDPA requires purpose-specific, informed consent with a record of what was shown — a generic cookie banner satisfies none of that."
      ],
      [
        "What if a user withdraws consent?",
        "Withdrawal must be as easy as giving it. The module handles withdrawal, logs it, and can notify downstream systems to stop that processing."
      ],
      [
        "Do we need consent for every purpose separately?",
        "Yes — bundled consent is not valid consent. The module makes each purpose a distinct, auditable choice."
      ],
      [
        "Will this slow down our website?",
        "No — the widget is lightweight and loads asynchronously."
      ]
    ],
    "vis": [
      "Consent events — live",
      [
        [
          "Notices published",
          "4 languages",
          "ok"
        ],
        [
          "Consents this month",
          "1,248",
          "ok"
        ],
        [
          "Withdrawals",
          "37 · all honoured",
          "ok"
        ],
        [
          "Receipts hashed",
          "100%",
          "ok"
        ]
      ],
      "Consent capture rate",
      88
    ]
  },
  "rights": {
    "t": "Data Principal Rights Portal",
    "tier": "All plans",
    "sec": "⚖️ Sections 11–14 · Rule 14 — Rights of Data Principals",
    "slug": "rights-portal",
    "tag": "A branded, identity-verified portal where every access, correction and erasure request lands — and a clock that never forgets.",
    "prob": "Today a user emails asking for their data to be deleted. It lands in a support inbox. Nobody knows what data exists, who owns it, or that a statutory clock started the moment the request arrived. Weeks pass. The user complains to the Data Protection Board — and you have no acknowledgement, no audit trail, and no proof of resolution.",
    "caps": [
      [
        "Branded request portal",
        "Your logo, your domain — customers make requests in one place, not scattered inboxes"
      ],
      [
        "OTP identity verification",
        "Confirms the requester is who they claim to be, before any data moves"
      ],
      [
        "Statutory SLA engine",
        "The clock starts automatically; escalation alerts fire well before the deadline"
      ],
      [
        "All request types covered",
        "Access, correction, completion, erasure and grievance — each with its own workflow"
      ],
      [
        "Nominee handling",
        "Requests made on behalf of a deceased or incapacitated data principal are supported"
      ],
      [
        "Closure certificate",
        "Every request closes with a hashed, immutable certificate — your proof it was resolved in time"
      ]
    ],
    "steps": [
      [
        "Publish your portal",
        "Branded, linked from your privacy notice — one place for every request"
      ],
      [
        "Requests arrive verified",
        "OTP confirms identity; auto-acknowledgement goes out; the clock starts"
      ],
      [
        "Resolve and prove",
        "Your team works the request; closure generates a permanent, verifiable certificate"
      ]
    ],
    "evi": [
      [
        "📨",
        "Auto-acknowledgement with timestamp"
      ],
      [
        "⏱",
        "Full SLA timeline per request"
      ],
      [
        "📄",
        "Closure certificate, hashed &amp; immutable"
      ],
      [
        "📈",
        "Grievance register for the Board"
      ]
    ],
    "faq": [
      [
        "What is the deadline for responding to a request?",
        "The Rules set statutory timelines for acknowledgement and resolution. The engine tracks them per request and escalates before you breach."
      ],
      [
        "How do we verify who is making the request?",
        "OTP verification against the contact details already on record — before any personal data is disclosed."
      ],
      [
        "What if we cannot fulfil a request?",
        "Lawful refusals exist. The portal records the reason and the response — refusing correctly is compliant; refusing silently is not."
      ],
      [
        "Can requests arrive from a nominee?",
        "Yes — nominee and guardian request flows are supported."
      ]
    ],
    "vis": [
      "Rights requests — live",
      [
        [
          "Open requests",
          "3",
          "wn"
        ],
        [
          "Within SLA",
          "100%",
          "ok"
        ],
        [
          "Avg. resolution",
          "4.2 days",
          "ok"
        ],
        [
          "Closure certificates",
          "129 issued",
          "ok"
        ]
      ],
      "SLA compliance",
      100
    ]
  },
  "breach": {
    "t": "Breach Incident Management",
    "tier": "All plans",
    "sec": "⚖️ Section 8(6) · Rule 7 · CERT-In 6-hour intimation",
    "slug": "breach-response",
    "tag": "Two clocks run the moment a breach is discovered. This module runs them for you — and writes the notifications while they tick.",
    "prob": "Your engineering team finds an exposed database at 11 PM on a Saturday. Slack panic. Somebody starts googling notification formats at 1 AM. Meanwhile the DPDPA 72-hour clock has been running since exposure began — and CERT-In's 6-hour intimation window may already have closed. Weekends do not pause statutory deadlines.",
    "caps": [
      [
        "Dual clock, running live",
        "CERT-In 6-hour and DPDPA 72-hour deadlines tracked in parallel on one screen"
      ],
      [
        "Automatic severity classification",
        "Answer a short set of questions; the system classifies and tells you exactly what is owed to whom"
      ],
      [
        "Notification packs in one click",
        "Board intimation, detailed report and data-principal notices — generated, not drafted at 2 AM"
      ],
      [
        "Immutable evidence vault",
        "Every artefact sealed with long-term retention — what regulators ask for months later"
      ],
      [
        "Tabletop drill mode",
        "Rehearse the whole sequence safely, so the first real breach is not the first attempt"
      ],
      [
        "XcellHost DFIR on the line",
        "Our forensics team engages in parallel — containment and compliance, not one or the other"
      ]
    ],
    "steps": [
      [
        "Log the incident",
        "Anyone can raise it; severity auto-classifies in seconds"
      ],
      [
        "Both clocks start",
        "CERT-In and DPDPA deadlines run visibly; alerts escalate as they approach"
      ],
      [
        "Notify and seal",
        "Notification packs generated, sent and archived with tamper-proof evidence"
      ]
    ],
    "evi": [
      [
        "🚨",
        "Board intimation, ready to file"
      ],
      [
        "📑",
        "Detailed 72-hour report"
      ],
      [
        "✉️",
        "Data-principal notification pack"
      ],
      [
        "🔒",
        "Sealed evidence vault, long-term retention"
      ]
    ],
    "faq": [
      [
        "Do CERT-In and DPDPA obligations overlap?",
        "They are separate obligations triggered by one incident, with different windows. This module runs both clocks so neither is missed."
      ],
      [
        "What counts as a reportable breach?",
        "Any personal data breach — including accidental disclosure or loss of availability. Severity classification guides you through it."
      ],
      [
        "Can we test the process without a real breach?",
        "Yes — tabletop drill mode runs the full sequence with no real notifications sent."
      ],
      [
        "What if the breach happens outside business hours?",
        "Deadlines do not pause. Alerts fire to your on-call responders, and our DFIR team can be engaged immediately."
      ]
    ],
    "vis": [
      "Breach clock — dual timer",
      [
        [
          "CERT-In · 6 hr",
          "05:42:11",
          "wn"
        ],
        [
          "DPDPA · 72 hr",
          "71:18:42",
          "ok"
        ],
        [
          "Severity",
          "Classified · High",
          "bd"
        ],
        [
          "Notification packs",
          "3 · ready",
          "ok"
        ]
      ],
      "Response readiness",
      94
    ]
  },
  "dashboard": {
    "t": "Compliance Health Dashboard",
    "tier": "All plans",
    "sec": "⚖️ All obligations — continuous readiness scoring",
    "slug": "compliance-dashboard",
    "tag": "A single 0–100 score for your DPDPA posture — penalty-weighted, so the biggest gaps are the ones costing you the most.",
    "prob": "Your board asks a simple question: \"Are we compliant?\" Today the honest answer is a shrug and a slide deck from six months ago. There is no live number, no evidence of drift, and no way to show an investor, an auditor or an enterprise client where you actually stand.",
    "caps": [
      [
        "Live 0–100 readiness score",
        "One number your board understands, backed by controls anyone can audit"
      ],
      [
        "Penalty-weighted gaps",
        "Gaps sized by regulatory cost — you fix what is expensive, not what is easy"
      ],
      [
        "Control grid",
        "Every DPDPA control, its status, its owner and its evidence — on one screen"
      ],
      [
        "Drift detection",
        "A control that silently degrades gets flagged before an auditor finds it"
      ],
      [
        "Board report PDF",
        "Score, control grid, risk heatmap and attestation page — generated, not assembled"
      ],
      [
        "Public trust page",
        "Share your posture, DPO contact and sub-processors with clients under due diligence"
      ]
    ],
    "steps": [
      [
        "Baseline your score",
        "Every control assessed; the first score is your honest starting point"
      ],
      [
        "Close the weighted gaps",
        "Work the priority list — the dashboard tracks each remediation to closure"
      ],
      [
        "Prove it continuously",
        "Score stays live, drift is caught, and the board report writes itself"
      ]
    ],
    "evi": [
      [
        "📊",
        "Board report PDF with attestation"
      ],
      [
        "🧾",
        "Control-by-control evidence log"
      ],
      [
        "📉",
        "Score history and drift alerts"
      ],
      [
        "🌐",
        "Public trust page for due diligence"
      ]
    ],
    "faq": [
      [
        "How is the score calculated?",
        "Each DPDPA control is assessed and weighted by the penalty exposure attached to it — so the score reflects real risk, not activity."
      ],
      [
        "How often does it update?",
        "Continuously — evidence, control checks and module activity feed it in near real time."
      ],
      [
        "Can we show this to enterprise clients?",
        "Yes — that is what the public trust page is for. It answers their security questionnaire before they send it."
      ],
      [
        "What is a good score?",
        "There is no pass mark in law. What matters is a defensible trend and no unclosed high-penalty gaps."
      ]
    ],
    "vis": [
      "Compliance score — live",
      [
        [
          "Overall readiness",
          "76 / 100",
          "wn"
        ],
        [
          "Consent",
          "Compliant",
          "ok"
        ],
        [
          "Rights portal",
          "Compliant",
          "ok"
        ],
        [
          "Vendor DPAs",
          "64 of 82",
          "bd"
        ]
      ],
      "Overall readiness",
      76
    ]
  },
  "ropa": {
    "t": "RoPA &amp; Data Inventory",
    "tier": "All plans",
    "sec": "⚖️ Section 8 — Obligations of the Data Fiduciary",
    "slug": "data-inventory",
    "tag": "You cannot protect, delete or report on data you have never mapped. This finds it — everywhere it hides.",
    "prob": "Personal data lives in your production database, an old analytics warehouse, three SaaS tools, a shared drive, and an export somebody made in 2023. Nobody has a full map. So when a deletion request arrives, or a breach happens, or a regulator asks what you hold and why — the honest answer is that you do not entirely know.",
    "caps": [
      [
        "Automated discovery",
        "Scan databases, file servers, SaaS platforms and endpoints for personal data"
      ],
      [
        "India-specific detection",
        "Aadhaar, PAN and other Indian identifiers recognised natively, with validation"
      ],
      [
        "Visual data-flow maps",
        "See how data moves between systems, vendors and borders — encryption status included"
      ],
      [
        "RoPA export",
        "Record of Processing Activities in the format auditors and regulators expect"
      ],
      [
        "Retention tracking",
        "Data kept past its purpose is a liability — the inventory flags it"
      ],
      [
        "Cross-border transfer register",
        "Know exactly what leaves India, and under what basis"
      ]
    ],
    "steps": [
      [
        "Discover",
        "Connect your systems; scanning finds personal data, including where you did not expect it"
      ],
      [
        "Classify &amp; map",
        "Data is categorised, mapped to purposes and lawful bases, and flow-charted"
      ],
      [
        "Maintain",
        "New systems and fields are detected as they appear — the map stays alive"
      ]
    ],
    "evi": [
      [
        "📋",
        "RoPA export (PDF / Excel / CSV)"
      ],
      [
        "🗺",
        "Visual data-flow map with encryption status"
      ],
      [
        "🌏",
        "Cross-border transfer register"
      ],
      [
        "⏳",
        "Retention and deletion schedule"
      ]
    ],
    "faq": [
      [
        "We use dozens of SaaS tools — can it cover them?",
        "Yes — SaaS, cloud, on-prem and endpoints are all in scope for discovery."
      ],
      [
        "Will scanning slow down our production systems?",
        "No — discovery is designed to run without disrupting production workloads."
      ],
      [
        "Does it detect Aadhaar and PAN correctly?",
        "Yes — with format validation, not just pattern matching, so false positives stay low."
      ],
      [
        "What is RoPA and do we legally need one?",
        "A Record of Processing Activities. It is the document that proves you know what you hold, why, and for how long — the foundation of every other obligation."
      ]
    ],
    "vis": [
      "Data inventory — live",
      [
        [
          "Systems scanned",
          "47",
          "ok"
        ],
        [
          "Data categories found",
          "31",
          "ok"
        ],
        [
          "Cross-border flows",
          "6 · mapped",
          "wn"
        ],
        [
          "Past retention",
          "2 · flagged",
          "bd"
        ]
      ],
      "Inventory coverage",
      82
    ]
  },
  "vendor": {
    "t": "Vendor Risk &amp; DPAs",
    "tier": "Growth+",
    "sec": "⚖️ Sections 8(2) &amp; 8(5) — Processors and safeguards",
    "slug": "vendor-risk",
    "tag": "Your compliance is only as strong as the weakest processor holding your users' data. This is the register that proves you checked.",
    "prob": "Your payment gateway processes card data. Your cloud host stores your database. Your email platform holds your entire user list. Your analytics tool tracks behaviour. Every one of them is a processor acting on your behalf — and Section 8(2) requires a signed Data Processing Agreement with each. How many do you actually have, and when do they expire?",
    "caps": [
      [
        "Vendor register",
        "Every processor, what data they touch, and the lawful basis for it"
      ],
      [
        "DPA status tracking",
        "Signed, pending or missing — with expiry alerts before renewal dates pass"
      ],
      [
        "Risk scoring",
        "Vendors scored on security posture, breach history and exposure"
      ],
      [
        "Tiered assessment",
        "Deep diligence for high-risk vendors, light touch for the rest — effort where it matters"
      ],
      [
        "Breach-history checks",
        "Automatic enrichment flags vendors with known compromises"
      ],
      [
        "Portfolio report",
        "One board-ready view of third-party risk across your entire stack"
      ]
    ],
    "steps": [
      [
        "Build the register",
        "Import your vendor list; the module enriches it automatically"
      ],
      [
        "Assess and tier",
        "Each vendor scored and tiered; high-risk ones get the deep questionnaire"
      ],
      [
        "Close the DPA gaps",
        "Missing agreements are tracked to signature — with expiry alerts thereafter"
      ]
    ],
    "evi": [
      [
        "📝",
        "Signed DPA register with expiry dates"
      ],
      [
        "🔍",
        "Per-vendor risk assessment and score"
      ],
      [
        "📊",
        "Portfolio risk report for the board"
      ],
      [
        "🚩",
        "Breach-history and exposure flags"
      ]
    ],
    "faq": [
      [
        "What is a DPA and who needs one?",
        "A Data Processing Agreement — required with every processor handling personal data on your behalf. That includes most SaaS tools you pay for."
      ],
      [
        "Our vendors are large global companies — do we still need agreements?",
        "Yes. Their scale does not transfer your obligation. Most publish standard DPAs; the register tracks whether you have actually executed them."
      ],
      [
        "How are vendors scored?",
        "On security posture, breach history, data sensitivity and exposure — producing a tier that decides how much diligence they get."
      ],
      [
        "What if a vendor refuses to sign?",
        "That is a risk decision, and it belongs on the register with an owner — documented, not ignored."
      ]
    ],
    "vis": [
      "Vendor risk — live",
      [
        [
          "Vendors registered",
          "82",
          "ok"
        ],
        [
          "DPAs signed",
          "64",
          "wn"
        ],
        [
          "High risk",
          "12",
          "bd"
        ],
        [
          "Expiring in 30 days",
          "5",
          "wn"
        ]
      ],
      "DPA coverage",
      78
    ]
  },
  "children": {
    "t": "Children's Data Module",
    "tier": "Business+",
    "sec": "⚖️ Section 9 · Rules 10–11 — Children and persons with disability",
    "slug": "childrens-data",
    "tag": "If a minor can sign up, the law changes for you — verifiable parental consent, and no profiling. This enforces both.",
    "prob": "Your product does not target children, but nothing stops a fourteen-year-old from creating an account. Section 9 requires verifiable parental consent before processing a child's personal data, and prohibits tracking, behavioural monitoring and targeted advertising directed at them. Without an age gate, you cannot know — and not knowing is not a defence.",
    "caps": [
      [
        "Age-verification gate",
        "A lightweight widget that establishes age before processing begins"
      ],
      [
        "Verified parental consent",
        "OTP-based guardian verification, recorded with the same cryptographic proof as any consent"
      ],
      [
        "Guardian support for disability",
        "Rule 11 lawful-guardian flows for persons with disability"
      ],
      [
        "Automatic restrictions",
        "Profiling, behavioural tracking and targeted ads switched off for minors by default"
      ],
      [
        "Birthday transitions",
        "A child becoming an adult triggers re-consent — automatically"
      ],
      [
        "Audit trail",
        "Proof of who verified, when, and on what basis"
      ]
    ],
    "steps": [
      [
        "Gate the signup",
        "Age is established before any personal data is processed"
      ],
      [
        "Verify the guardian",
        "Parental consent captured and verified via OTP, with a permanent receipt"
      ],
      [
        "Enforce the limits",
        "Profiling and ad targeting are blocked for minors — enforced by the platform, not policy"
      ]
    ],
    "evi": [
      [
        "👨‍👩‍👧",
        "Verified parental consent receipts"
      ],
      [
        "🚫",
        "Proof of profiling restrictions applied"
      ],
      [
        "🎂",
        "Age-transition re-consent log"
      ],
      [
        "♿",
        "Guardian verification records (Rule 11)"
      ]
    ],
    "faq": [
      [
        "We do not target children — is this still required?",
        "If a child can register, you process children's data. The obligation follows the user, not your intent."
      ],
      [
        "What counts as verifiable parental consent?",
        "Consent given by a parent or lawful guardian, verified against reliable identity details — not a self-declared checkbox."
      ],
      [
        "Can we advertise to users under 18?",
        "Targeted advertising directed at children is prohibited. The module enforces this by default."
      ],
      [
        "What happens when the child turns 18?",
        "The system detects the transition and triggers a fresh consent flow with the now-adult user."
      ]
    ],
    "vis": [
      "Children's data — live",
      [
        [
          "Age gate",
          "Active",
          "ok"
        ],
        [
          "Guardian consents",
          "214",
          "ok"
        ],
        [
          "Profiling blocked",
          "100% of minors",
          "ok"
        ],
        [
          "Turning 18 this month",
          "7 · re-consent queued",
          "wn"
        ]
      ],
      "Section 9 controls",
      96
    ]
  },
  "dpia": {
    "t": "DPIA / SDF Workflow",
    "tier": "Enterprise",
    "sec": "⚖️ Section 10 — Significant Data Fiduciary obligations",
    "slug": "dpia-sdf",
    "tag": "If you are notified as a Significant Data Fiduciary, impact assessments and audits stop being optional. This is the workflow that produces them.",
    "prob": "Significant Data Fiduciaries carry heavier duties: a Data Protection Impact Assessment before high-risk processing, periodic audits, algorithmic due diligence, and a named DPO. Most organisations discover this the week they are notified — and then try to reconstruct assessments for systems that have been live for years.",
    "caps": [
      [
        "Structured DPIA wizard",
        "Guided risk assessment with scoring — completed in a session, not a quarter"
      ],
      [
        "Algorithm registry",
        "Automated decisions and models registered, with risk and fairness review"
      ],
      [
        "Cross-border assessment",
        "Transfer risk assessed and documented against restrictions"
      ],
      [
        "Periodic audit workflow",
        "Scheduled audits with evidence collection built in"
      ],
      [
        "DPO integration",
        "Assessments route to your DPO — ours, if you use the vDPO service"
      ],
      [
        "Immutable DPIA record",
        "Every assessment sealed with its evidence, ready for the Board"
      ]
    ],
    "steps": [
      [
        "Screen for high risk",
        "Which processing activities actually need a DPIA? The wizard decides on evidence, not guesswork"
      ],
      [
        "Assess and score",
        "Structured questions produce a risk score, mitigations and a documented decision"
      ],
      [
        "Seal and schedule",
        "The DPIA is stored immutably; periodic review is scheduled automatically"
      ]
    ],
    "evi": [
      [
        "📋",
        "Completed DPIA with risk scoring"
      ],
      [
        "🤖",
        "Algorithm and automated-decision registry"
      ],
      [
        "🌏",
        "Cross-border transfer assessment"
      ],
      [
        "🗓",
        "Periodic audit schedule and findings"
      ]
    ],
    "faq": [
      [
        "How do we know if we are a Significant Data Fiduciary?",
        "The government notifies classes of fiduciaries based on data volume, sensitivity and risk factors. If you process large volumes of sensitive personal data, plan for it."
      ],
      [
        "When is a DPIA legally required?",
        "Before high-risk processing. The screening wizard determines it defensibly, and records the decision either way."
      ],
      [
        "Does an SDF need a Data Protection Officer?",
        "Yes — India-based and answerable to the board. Our vDPO service fills exactly this role."
      ],
      [
        "How often must audits happen?",
        "Periodically, per the obligations attached to SDF status. The workflow schedules and evidences them."
      ]
    ],
    "vis": [
      "DPIA / SDF — live",
      [
        [
          "DPIAs completed",
          "9",
          "ok"
        ],
        [
          "High-risk activities",
          "4 · mitigated",
          "ok"
        ],
        [
          "Algorithms registered",
          "6",
          "ok"
        ],
        [
          "Next audit",
          "In 42 days",
          "wn"
        ]
      ],
      "SDF readiness",
      71
    ]
  },
  "vdpo": {
    "t": "vDPO-as-a-Service",
    "tier": "Service",
    "sec": "⚖️ Section 10 — Data Protection Officer obligation",
    "slug": "vdpo",
    "tag": "The Act requires a Data Protection Officer. This gives you a qualified, India-based one — named in your records, answering to your board.",
    "prob": "Significant Data Fiduciaries must appoint a DPO who is based in India, answerable to the board, and reachable by every data principal who wants to complain. Hiring one full-time costs what a senior executive costs. Appointing an unqualified internal person creates a compliance risk wearing a job title.",
    "caps": [
      [
        "A named, qualified officer",
        "India-based, appropriately qualified, and listed in your public notices"
      ],
      [
        "Grievance handling",
        "Every data principal complaint owned end to end, within statutory timelines"
      ],
      [
        "Regulator interface",
        "Your point of contact for the Data Protection Board — including inquiries"
      ],
      [
        "Board reporting",
        "Quarterly privacy posture reported to your board in business language"
      ],
      [
        "Backed by a practice",
        "Not one person — a privacy team, with our SOC and DFIR behind them"
      ],
      [
        "Fractional cost",
        "Senior privacy leadership at a fraction of a full-time hire"
      ]
    ],
    "steps": [
      [
        "Appoint",
        "Your named DPO is formalised, published in your notices, and registered internally"
      ],
      [
        "Operate",
        "Grievances, assessments and regulator correspondence are owned and tracked"
      ],
      [
        "Report",
        "Quarterly board reporting keeps privacy visible where accountability lives"
      ]
    ],
    "evi": [
      [
        "👤",
        "Formal DPO appointment record"
      ],
      [
        "📬",
        "Grievance register with resolution timelines"
      ],
      [
        "🏛",
        "Regulator correspondence log"
      ],
      [
        "📊",
        "Quarterly board privacy report"
      ]
    ],
    "faq": [
      [
        "Does the Act allow an outsourced DPO?",
        "The Act requires the function, the qualification and the accountability. An engaged virtual DPO with board access and India residency meets that for most fiduciaries — we confirm fit before we accept an appointment."
      ],
      [
        "Is the DPO based in India?",
        "Yes — as the Act requires."
      ],
      [
        "What happens if the Board makes an inquiry?",
        "Your vDPO leads the response, with our compliance and DFIR teams supporting."
      ],
      [
        "Can we start with vDPO before the platform?",
        "Yes — many clients do. The platform then gives your DPO the evidence they need to do the job properly."
      ]
    ],
    "vis": [
      "vDPO engagement — live",
      [
        [
          "DPO appointed",
          "Named &amp; published",
          "ok"
        ],
        [
          "Open grievances",
          "2 · within SLA",
          "ok"
        ],
        [
          "Board report",
          "Filed · Q2",
          "ok"
        ],
        [
          "Regulator queries",
          "0",
          "ok"
        ]
      ],
      "Obligation coverage",
      100
    ]
  }
};
