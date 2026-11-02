// FAQs from the supplied Email Encryption document.
export const EMAIL_ENCRYPTION_FAQS: [string, string][] = [
  [
    "Isn't Microsoft 365 or Gmail mail already encrypted?",
    "In transit, usually. Exchange Online and Gmail try TLS on every connection, but both send the message unencrypted if the receiving server doesn't support TLS. TLS also protects only the connection, not the message once it lands in a mailbox or is forwarded. Message encryption covers the content itself."
  ],
  [
    "What is the difference between opportunistic and enforced TLS?",
    "Opportunistic TLS encrypts the connection when both servers support it and falls back to plain text when they don't. Enforced TLS refuses to deliver without it. We enforce it with forced-TLS connectors in Exchange Online or Gmail's secure-transport compliance setting for the domains you choose, and publish MTA-STS with TLS-RPT for your own domains."
  ],
  [
    "Which Microsoft 365 plans include Purview Message Encryption?",
    "Per Microsoft's documentation: Microsoft 365 Business Premium, E3 and E5, Office 365 E3 and E5, Office 365 A1, A3 and A5, and the government G3/G5 plans, among others. Business Basic, Business Standard, Office 365 E1 and Exchange Online plans need Azure Information Protection Plan 1 added. Advanced Message Encryption — expiry, revocation and several branded templates — comes with E5-level plans or the E5 Information Protection and Governance add-on."
  ],
  [
    "Which Google Workspace editions support S/MIME and client-side encryption?",
    "Per Google's admin help: hosted S/MIME is in Enterprise Plus, Frontline Plus and Education Fundamentals, Standard and Plus. Gmail client-side encryption is in Enterprise Plus, Frontline Plus, Education Standard and Education Plus, and needs an external key service and identity provider. Sending client-side-encrypted mail to recipients on other providers through a guest account needs Enterprise Plus with the Assured Controls add-on."
  ],
  [
    "How does a customer on Gmail or Yahoo read an encrypted message?",
    "They get a notification email and open the message in a secure web portal after confirming a one-time code sent to their address — no software to install. Microsoft Purview Message Encryption works this way, and so does our Vortex SEG secure messaging portal*, which works with any mail platform and carries your branding."
  ],
  [
    "When should we use S/MIME instead of the portal?",
    "S/MIME suits people who mail each other often — staff, auditors, partner firms — because both sides hold certificates and the message is signed as well as encrypted. The portal suits one-to-many mail to customers who will never install a certificate. Many organisations use both, chosen by policy."
  ],
  [
    "Can encryption happen automatically?",
    "Yes. Microsoft supports encrypting by Exchange mail-flow rules or Purview DLP policies — for example when a message contains a PAN or goes to a named domain. The Vortex SEG portal* encrypts by policy on any platform. Gmail's DLP rules can block, warn, quarantine or label, and pair with TLS and S/MIME settings. We run new rules in audit mode first."
  ],
  [
    "Can we hold our own encryption keys?",
    "Yes, at several levels. Microsoft supports bring-your-own-key for the Azure Rights Management service behind Purview Message Encryption, and Customer Key and Double Key Encryption in E5-level plans. Gmail client-side encryption uses keys from your own key service. We can hold those keys in an XcellTrust Cloud HSM partition in Mumbai under your quorum."
  ],
  [
    "Can we revoke a message after sending it?",
    "With Microsoft's Advanced Message Encryption, admins can revoke and set expiry on encrypted mail sent to external recipients through the portal. Portal-delivered mail through Vortex SEG can also be expired or withdrawn*. Once someone has decrypted and saved a copy, no system can pull it back — which is why we set expiry by default for sensitive templates."
  ],
  [
    "Does email encryption make us DPDP compliant?",
    "On its own, no. The DPDP Rules 2025 list encryption among the reasonable security safeguards a data fiduciary should use, alongside access control, logging and breach response. Encrypting personal data you email helps you meet that expectation; your overall programme and legal advice decide compliance."
  ],
  [
    "What does it cost?",
    "Indicatively: native Microsoft 365 or Google set-up ₹29,999* per tenant one-time; secure portal ₹99* per mailbox per month; S/MIME from ₹1,099 per seat per year; MTA-STS and TLS-RPT ₹9,999* per domain; managed operations ₹9,999* per month. All excl. 18% GST, with licences billed separately."
  ],
  [
    "Will encrypted mail still be scanned for malware?",
    "Gateway and policy encryption happen after scanning on the way out, so outbound mail is inspected first. For inbound S/MIME or client-side-encrypted mail, gateways can't see inside; we design where decryption and scanning happen so you don't create a blind spot."
  ]
];
