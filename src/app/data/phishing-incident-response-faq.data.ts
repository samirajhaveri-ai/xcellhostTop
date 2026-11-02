// FAQs from the supplied Phishing Incident Response document.
export const PHISHING_INCIDENT_RESPONSE_FAQS: [string, string][] = [
  [
    "What is phishing incident response?",
    "It is everything that happens after someone suspects an email: reporting it, analysing it, finding other copies, removing them, blocking the source and telling the reporter. This service makes those steps fast and consistent, and measures them."
  ],
  [
    "How do employees report a suspicious email?",
    "With a Report Phish button in Outlook (desktop, web and mobile) or Gmail, deployed centrally by your admin. Where you already use Microsoft's built-in Report button, reports can be routed to the same queue*."
  ],
  [
    "What does the automated analysis check?",
    "Authentication results (SPF, DKIM, DMARC), reply-to and relay anomalies, link destinations, attachments in a sandbox, sender history in your organisation, keyword and language rules, and threat-intelligence matches. The result is a risk score and a suggested verdict."
  ],
  [
    "How are similar emails removed from other mailboxes?",
    "Through Microsoft Graph for Microsoft 365 or the Gmail API for Google Workspace, with permissions your admin grants. Messages matching the sender, subject, URL or file hash are moved to quarantine in every mailbox, and can be restored if the verdict changes."
  ],
  [
    "Do we need to change MX records or mail routing?",
    "No. It works through the platform APIs and a reporting mailbox. If you also want a gateway in front of your mail, see Email Security Enterprise."
  ],
  [
    "What do reporters hear back?",
    "An automatic reply with the outcome — phishing, spam or safe — and a thank-you. On the Managed plan, the SOC sends it after review. Quick feedback is what keeps people reporting."
  ],
  [
    "Which metrics do we get?",
    "Report rate, report accuracy (how often reports are real phish), time to first report, and time to remediate from first report to the last copy removed — by department and over time."
  ],
  [
    "Does it work with our SIEM or SOAR?",
    "Yes. Cases and indicators can be forwarded to Vortex SOC, Microsoft Sentinel or another SIEM, and SOAR tools can trigger or receive actions*. Setup is the SIEM / SOAR connector add-on."
  ],
  [
    "How does this relate to phishing simulation?",
    "They work as a pair. Managed Phishing Simulation trains people to spot phish; this service gives them a button and makes their reports count. Simulated emails reported through the button are recognised and scored as correct."
  ],
  [
    "Does it help with CERT-In's six-hour reporting rule?",
    "It helps you decide quickly whether a reported email is a reportable incident and gives you the evidence. Reporting itself is your organisation's responsibility; the CERT-In retainer add-on has XcellHost prepare the report with you."
  ],
  [
    "Who can read our email?",
    "Automation reads reported and matching messages using permissions your admin grants and can revoke. On the Managed plan, analyst access is role-based and logged. Data-flow notes are provided for your DPDP records."
  ],
  [
    "What does it cost?",
    "Indicative placeholders: Essentials ₹399* and Managed ₹899* per user per year, excluding 18% GST, minimum 50 users*. Enterprise is quoted. A 14-day pilot* is available for a group of users."
  ]
];
