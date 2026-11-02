// FAQs from the supplied Google Security Assessment document.
export const GOOGLE_SECURITY_ASSESSMENT_FAQS: [string, string][] = [
  [
    "What is a Google security assessment?",
    "A structured, read-only review of how your Google Workspace tenant is configured — sign-in security, admin roles, third-party apps, Drive sharing, Gmail protection, data loss prevention, retention, alerts and Chrome — compared with the CIS Google Workspace Foundations Benchmark and CISA's SCuBA baselines. Google Cloud projects can be added."
  ],
  [
    "Do you need super admin access?",
    "No. You create a custom admin role with view-only privileges for our named engineer and remove it when we finish. Changes are only made if you buy remediation, and only for the fixes you approve."
  ],
  [
    "Which CIS benchmark version do you use?",
    "The CIS Google Workspace Foundations Benchmark v1.4.0, the current version as of October 2026. For Google Cloud projects we use the CIS Google Cloud Platform Foundations Benchmark v5.0.0. The report states the versions used."
  ],
  [
    "What are CISA SCuBA baselines for Google Workspace?",
    "Secure configuration baselines published by the US Cybersecurity and Infrastructure Security Agency for Gmail, Drive and Docs, Meet, Calendar, Chat, Groups for Business, Sites, Classroom and common controls, with an open-source checker called ScubaGoggles. They are not a legal requirement in India, but they are detailed and freely available, so we use them alongside CIS."
  ],
  [
    "Does it matter which Workspace edition we have?",
    "Yes. Some controls exist only on certain editions — for example, Google lists context-aware access for Enterprise Standard and Plus, Frontline Standard and Plus, Education Standard and Plus, Enterprise Essentials Plus and Cloud Identity Premium. Every finding says whether your edition has the fix or needs an upgrade."
  ],
  [
    "Why review OAuth apps?",
    "Users can grant third-party apps — including browser extensions and AI tools — access to their Gmail, Drive or Calendar. An app with full Gmail access can read every message. We list each app's scopes, rate the risk and recommend trusted, limited or blocked in API controls."
  ],
  [
    "Do you check email authentication too?",
    "Yes. SPF, DKIM and DMARC for every domain in the tenant, plus Gmail's safety settings for attachments, links, spoofing and auto-forwarding. Gmail has required authentication from senders since February 2024, with DMARC needed for bulk senders. If DMARC is not at enforcement, Enterprise DMARC takes it there."
  ],
  [
    "Will users notice anything?",
    "Not during the assessment. If you add remediation, changes such as 2SV enforcement are piloted on one organisational unit, announced to users with an enrolment window, then rolled out."
  ],
  [
    "Can you review our Google Cloud organisation as well?",
    "Yes. Add Google Cloud projects at ₹49,999 each, the same price as a single account on our Cloud Security Assessment. We review IAM, organisation policies, logging, networking and storage against the CIS Google Cloud benchmark, and the shared identities across Workspace and Cloud."
  ],
  [
    "How is our data handled?",
    "We read settings, app inventories, sharing reports and limited log samples — not the content of email or files. Working files stay in India, access is limited to named engineers, and data is deleted after the engagement unless kept for the retest. This is written into the scope for your DPDP records."
  ],
  [
    "What happens after the assessment?",
    "You can fix the findings yourself from the roadmap, add our remediation sprint, or hand day-to-day administration to Managed Google Workspace, which keeps settings in line every month."
  ],
  [
    "How is it priced?",
    "Per tenant, one-time, excluding 18% GST: health check ₹14,999*, Standard ₹49,999* (up to 500 users*), Plus ₹99,999* (up to 2,500 users*). Extra 1,000-user blocks ₹19,999*, Google Cloud projects ₹49,999 each. * Indicative — confirm with XcellHost."
  ]
];
