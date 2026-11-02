// FAQs from the supplied Microsoft 365 Security Assessment document.
export const M365_SECURITY_ASSESSMENT_FAQS: [string, string][] = [
  [
    "What is a Microsoft 365 security assessment?",
    "A structured review of how your Microsoft 365 tenant is configured: identity, mail, file sharing, collaboration, threat protection, data protection and devices. XcellHost checks each setting against the CIS Microsoft 365 Foundations Benchmark and CISA's SCuBA baselines and gives you rated findings with a roadmap to fix them."
  ],
  [
    "Do you need admin access to our tenant?",
    "No write access. We use read-only roles such as Global Reader and Security Reader, or a read-only app registration you consent to and remove afterwards. Write access is only requested if you ask us to apply fixes, and only for the agreed changes."
  ],
  [
    "Which CIS benchmark version do you use?",
    "The current CIS Microsoft 365 Foundations Benchmark, which is version 7.0.0 as of October 2026. CIS updates it regularly; the report states the exact version used and we confirm it at kick-off."
  ],
  [
    "What are CISA SCuBA baselines, and do they apply in India?",
    "SCuBA (Secure Cloud Business Applications) is a CISA project that publishes secure configuration baselines for Microsoft 365 services and an open-source checker called ScubaGear. US federal agencies must apply them under Binding Operational Directive 25-01. For Indian businesses they are not a legal requirement, but they are a well-documented, freely available standard, so we use them alongside CIS."
  ],
  [
    "Isn't Microsoft Secure Score enough?",
    "Secure Score is a good starting point and we review it. It measures Microsoft's recommended actions in points, not your business risk, and it does not look at things like who the admins are, what mail flow rules do or what has been shared externally. The assessment adds that context and a plan."
  ],
  [
    "Will the assessment disrupt users?",
    "No. Reading configuration does not change anything users see. If you add remediation, changes that could block sign-ins, such as Conditional Access, go in report-only mode first and are switched on in an agreed window with break-glass accounts in place."
  ],
  [
    "Which licences does this work with?",
    "Any Microsoft 365 or Office 365 business or enterprise plan. Some checks depend on licences — for example Conditional Access needs Entra ID P1, which Business Premium, E3 and E5 include. Each finding says whether you already own the feature needed to fix it."
  ],
  [
    "How long does it take?",
    "About two weeks from read-only access to readout for a single tenant of up to a few thousand users. The health check is usually two to three working days. Exact timing is confirmed in your scope."
  ],
  [
    "Can you fix what you find?",
    "Yes. Comprehensive includes one quick-win remediation sprint and a retest; on Standard you can add the sprint (₹39,999*) and retest (₹24,999*). Larger changes are quoted from the roadmap, or handled through Managed Microsoft 365 or Security Posture Management."
  ],
  [
    "How is our data handled?",
    "We collect configuration and limited log samples, not mailbox content. Working files stay in India on XcellHost systems, access is limited to the named engineers, and data is deleted at the end of the engagement unless you ask us to keep it for the retest. This is written into the scope for your DPDP records."
  ],
  [
    "Do you also check email authentication?",
    "Yes. SPF, DKIM and DMARC are checked for every accepted domain, along with anti-phishing, Safe Links and Safe Attachments policies where licensed. If DMARC is not at enforcement, the Enterprise DMARC service or the ₹24,999 per-domain DMARC enforcement project takes it to p=reject."
  ],
  [
    "How is it priced?",
    "Per tenant, one-time, excluding 18% GST: health check ₹14,999, Standard ₹49,999 (up to 500 users*), Comprehensive ₹99,999* (up to 2,500 users*). Extra 1,000-user blocks are ₹19,999* each. GST invoice; pay by UPI, cards or NetBanking."
  ]
];
