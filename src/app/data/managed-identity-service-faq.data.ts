// FAQs from the supplied Managed Identity Service document.
export const MANAGED_IDENTITY_FAQS: [string, string][] = [
  [
    "What is a managed identity service?",
    "It is your identity platform operated by a specialist team under an SLA. XcellHost runs the daily work — account lifecycle, access requests, reviews, MFA, single sign-on, privileged access and sign-in risk — across Microsoft Entra ID and, where you have them, other IAM, IGA and PAM platforms*. You keep the decisions; we do the operations and report on them monthly."
  ],
  [
    "How do onboarding and transition work?",
    "We start read-only: an environment review and health check, then written SOPs, an agreed RACI, KPIs and SLA. We shadow your team on live tickets before we take over the queue. For a typical Entra estate this takes four to five weeks*. The one-time transition fee is ₹49,999* (indicative)."
  ],
  [
    "Which IAM operations do you handle every day?",
    "Joiner, mover and leaver processing, access request fulfilment, provisioning and sync checks, MFA and password issues, group and role changes, SSO app faults, and review-campaign follow-ups. On Professional we also tune Conditional Access, check PIM role assignments and service accounts, and respond to risky sign-ins 24×7."
  ],
  [
    "Is incident management included?",
    "Yes. Tickets are logged in your ITSM tool or ours, triaged at L1 to L3, and resolved against the SLA for your plan, with root-cause analysis for P1 and P2 incidents. Critical identity incidents get a 24×7 on-call response on every plan; Professional adds a 24×7 desk for all priorities."
  ],
  [
    "How many new applications can you onboard?",
    "Essential includes one new SSO or provisioning app per quarter, Professional two. Each onboarding covers the connector, attribute mapping, approval workflow, testing and an as-built note. Extra apps or bespoke connectors are quoted separately."
  ],
  [
    "Which platforms do you support?",
    "Microsoft Entra ID, Entra ID Governance, Entra PIM and on-premises Active Directory are our primary platforms — XcellHost is a Microsoft Gold Partner. We also support leading IAM, IGA and PAM platforms* on request; tell us what you run and we confirm coverage before quoting."
  ],
  [
    "Do we need Entra ID P1 or P2 licences?",
    "Conditional Access needs Entra ID P1 (₹528 per user per month from XcellHost). Risk-based sign-in policies and PIM need P2 (₹755), and lifecycle workflows need Entra ID Governance or the Entra Suite (₹910). We can run the service on what you already own and tell you where a licence would close a gap."
  ],
  [
    "How do you handle privileged and break-glass access?",
    "Our engineers use named accounts with just-in-time elevation and MFA; every privileged action is logged. Your break-glass accounts stay with you — we test them quarterly and alert on any use. Standing admin rights found in the health check go on the remediation plan."
  ],
  [
    "What does the monthly report contain?",
    "An identity health score and its trend, MFA and passkey coverage, stale and guest accounts, privileged role changes, review completion, risky sign-ins handled, SLA performance and the improvement backlog. The report in the hero above is a sample of the format."
  ],
  [
    "Who owns the tenant if we stop the service?",
    "You do — always. We work in your tenant with delegated, logged access. On exit we hand over runbooks, as-built documents and open tickets, then remove our access and confirm it in writing."
  ],
  [
    "Can you manage service accounts and AI agent identities?",
    "Yes. We inventory service principals, managed identities, app secrets and AI agents, assign owners, remove unused permissions and track secret expiry. Deeper agent governance is the AI agent & NHI add-on (₹29,999* per month); see also AI identity security."
  ],
  [
    "How does this help with the DPDP Act and CERT-In?",
    "Access control, MFA, log retention and breach response are common to both. We keep access evidence, route sign-in and audit logs to retention that supports CERT-In's 180-day requirement, and support your incident team inside the 6-hour CERT-In window and the DPDP breach-intimation process. Compliance remains your organisation's responsibility."
  ]
];
