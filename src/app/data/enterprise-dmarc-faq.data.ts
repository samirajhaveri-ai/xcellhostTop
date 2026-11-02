// FAQs from the supplied Enterprise DMARC document.
export const ENTERPRISE_DMARC_FAQS: [string, string][] = [
  [
    "What is DMARC?",
    "Domain-based Message Authentication, Reporting and Conformance is an email standard that stops others sending mail that pretends to be from your domain. It builds on SPF and DKIM, tells receiving servers what to do with messages that fail, and sends you reports on who is using your domain."
  ],
  [
    "How is DMARC different from SPF and DKIM?",
    "SPF lists which servers may send for your domain; DKIM signs your mail. DMARC ties them to the visible From domain through alignment, sets a policy — none, quarantine or reject — and gives you reporting. You need all three; XcellHost sets them up together."
  ],
  [
    "Will DMARC block my legitimate email?",
    "Not if it's rolled out properly. We start at p=none to find every real sender, align SPF and DKIM for each, and only then step up to quarantine and reject — watching the reports at every stage."
  ],
  [
    "What do Google, Yahoo and Microsoft require?",
    "Since February 2024 Google and Yahoo require bulk senders (about 5,000+ messages a day) to have SPF and DKIM, a DMARC record of at least p=none aligned with the From domain, one-click unsubscribe and low spam rates. Microsoft applied similar SPF, DKIM and DMARC rules to Outlook.com from 5 May 2025, rejecting non-compliant mail with error 550 5.7.515."
  ],
  [
    "Does it work with Microsoft 365, Google Workspace and others?",
    "Yes. DMARC is provider-independent — Microsoft 365, Google Workspace, Zimbra, Exchange and any other platform, plus third-party senders like marketing, CRM and billing tools."
  ],
  [
    "What are aggregate and forensic reports?",
    "Aggregate (RUA) reports are daily summaries from receivers: which IPs sent as your domain, how many messages, and whether SPF, DKIM and DMARC passed. Forensic (RUF) reports are samples of individual failures; fewer receivers send them. XcellDMARC turns both into readable dashboards."
  ],
  [
    "What are MTA-STS and TLS-RPT?",
    "MTA-STS lets your domain tell senders to deliver only over verified TLS to your listed mail servers, preventing downgrade attacks. TLS-RPT asks senders to report daily when encrypted delivery failed. Both are included from the Basic plan (MTA-STS) and Standard plan (TLS reporting)."
  ],
  [
    "What is BIMI?",
    "Brand Indicators for Message Identification shows your verified logo beside your emails in supporting inboxes — only once you're at DMARC enforcement. Gmail and Apple Mail also need a Verified or Common Mark Certificate; see Mark Certificates and DigiCert VMC."
  ],
  [
    "Which plan do I need?",
    "It depends on monthly email volume and how many domains you send from. Basic suits a single small-business domain; Standard and Platinum add volume, domains and reporting; Enterprise is for large, high-volume organisations. Add volume (₹15 per 100K) or domains (₹9 each) any time."
  ],
  [
    "How is it priced, and do I get a GST invoice?",
    "Plans are priced per month — Basic ₹1,499, Standard ₹4,999, Platinum ₹15,999, Enterprise ₹39,999 — excluding 18% GST, with setup included. Every order has a GST invoice; pay via UPI, cards or NetBanking."
  ],
  [
    "What about domains we own but never send from?",
    "Parked domains are easy targets. They can go straight to p=reject with an SPF record of \"v=spf1 -all\". Each extra domain is ₹9 a month on any plan."
  ],
  [
    "Does DMARC protect us from phishing sent to our staff?",
    "It stops mail forged with your exact domain. Lookalike domains, compromised suppliers and CEO-fraud from free-mail addresses need inbound protection — see Email Security SMB or Advanced Email Security."
  ]
];
