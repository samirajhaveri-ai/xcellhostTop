// FAQs from the supplied Email Security SMB document.
export const EMAIL_SECURITY_SMB_FAQS: [string, string][] = [
  [
    "How is Email Security SMB different from Email Security Enterprise?",
    "Same Vortex SEG engine by Cyberstanc*, simpler packaging. SMB is priced per mailbox for one company with a handful of domains. Enterprise adds multi-tenant consoles, active-active clusters, delegated admin, SIEM feeds and is quoted to your estate."
  ],
  [
    "Do we have to move our mailboxes?",
    "No. Your mail stays on Microsoft 365, Google Workspace, Zoho Mail, Exchange, Zimbra or any SMTP server. We connect through the API, point MX at the gateway, or relay outbound mail — chosen per domain."
  ],
  [
    "We already have Microsoft 365 or Google Workspace filtering. Why add this?",
    "Built-in filtering stays on. This adds an independent second layer with sandboxing, DLP with OCR, encrypted delivery and archival on every platform you use, so one missed detection is less likely to reach a person. For a tenant-native layer, see Advanced Email Security."
  ],
  [
    "What does it cost?",
    "Indicative placeholders: Essentials ₹99*, Business ₹199*, Managed ₹299* per mailbox per month, billed annually, excluding 18% GST, minimum 10 mailboxes*. Your quotation confirms the final price."
  ],
  [
    "Is there a free trial?",
    "Yes — 7 days* on one domain in monitor mode, so you see what would have been caught without anything being blocked. Trial scope is confirmed by XcellHost."
  ],
  [
    "Will genuine emails get stuck?",
    "Occasionally a new sender is held. Staff see it in their daily digest and release it themselves; we tune the policy so it doesn't recur. On Managed, our SOC handles release requests for you."
  ],
  [
    "Does DLP read everyone's email?",
    "DLP is automated pattern matching on outbound mail. When a rule fires, the reviewer you nominate sees masked values first; opening the full content is logged."
  ],
  [
    "Where is our mail stored?",
    "The cloud build runs from Indian datacentres*, so quarantine, logs and archive stay in India. On-premise deployment is available if you need everything inside your own network."
  ],
  [
    "How long do you keep archived mail?",
    "Retention is set per policy*. The right period depends on your sector and contracts — your CA or counsel should confirm it; we configure what they specify."
  ],
  [
    "Does it stop people spoofing our own domain to customers?",
    "The gateway protects mail coming to you. Stopping forgeries sent to others needs DMARC at enforcement on your domain. Add the ₹24,999 DMARC enforcement project, or see Enterprise DMARC for ongoing reporting."
  ],
  [
    "When should we move to Enterprise?",
    "Above roughly 300 mailboxes, with several subsidiaries or brands, separate admin teams, or a need for HA clusters and SIEM integration. Moving keeps the same engine and policies."
  ],
  [
    "What support do we get?",
    "24×7 by phone, WhatsApp and ticket from XcellHost's Mumbai NOC and SOC, in English and Hindi, with a GST invoice for every order."
  ]
];
