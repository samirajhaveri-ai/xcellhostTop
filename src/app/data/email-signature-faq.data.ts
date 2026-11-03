// FAQs from the supplied Email Signature document.
export const EMAIL_SIGNATURE_FAQS: [string, string][] = [
  [
    "What is email signature management?",
    "It means designing, deploying and controlling the signatures for your whole company from one console, instead of each employee setting their own. XcellOffice Email Signature, powered by Crossware*, keeps signatures consistent on every device and adds banners, rules and disclaimers."
  ],
  [
    "Does it work with Microsoft 365, Outlook and Exchange?",
    "Yes. On Microsoft 365 it can work server-side, through Exchange Online mail flow rules, and client-side, through an Outlook add-in. Server-side covers phones and any app that sends through your tenant."
  ],
  [
    "And Google Workspace?",
    "Yes. We set signatures for Gmail users centrally from the directory, with server-side options depending on your edition*. We confirm the approach for your Workspace setup before rollout."
  ],
  [
    "Do employees have to set anything up?",
    "No. Signatures pull each person's name, title, phone and department from your directory and apply automatically. New joiners get theirs as soon as their account exists."
  ],
  [
    "Why don't I see my signature in Sent Items?",
    "With server-side signatures the signature is added after the email leaves your mailbox, so Sent Items shows the unsigned copy unless the Sent Items sync option is configured. We set that up during rollout, or use client-side mode for people who want to see it while writing."
  ],
  [
    "Can different departments have different signatures?",
    "Yes. Rules assign templates by department, group, role or location. On Enterprise, each department can have its own admins who manage their templates and banners within the brand rules you set."
  ],
  [
    "How do banner campaigns work?",
    "You schedule a banner with a start and end date, choose which teams see it, and it appears under their signatures. Swap it company-wide in one change and track impressions and clicks. On Marketing and Enterprise we can design and schedule banners for you."
  ],
  [
    "What must an Indian company include in its email footer?",
    "Section 12(3)(c) of the Companies Act, 2013 requires the company's name, registered office address, CIN, telephone number, and fax, email and website if any, on business letters and official publications; companies commonly apply this to business email. LLPs show name, registered office, LLPIN and a limited-liability statement under section 21 of the LLP Act. Confirm with your company secretary."
  ],
  [
    "Can we show our logo next to emails in the inbox (BIMI)?",
    "BIMI is separate from the signature: it shows your logo beside the sender name in supporting inboxes. It needs DMARC at enforcement and, for Gmail and Apple Mail, a Verified or Common Mark Certificate. See Mark Certificates; DMARC enforcement and BIMI setup is ₹24,999 one-time."
  ],
  [
    "Does it work with encrypted or S/MIME-signed email?",
    "A message signed or encrypted on the sender's device can't be changed in transit without breaking it, so server-side stamping skips it. Client-side mode adds the signature before signing, which is the usual answer for teams that use email signing certificates."
  ],
  [
    "Is our data private?",
    "The service reads the directory attributes needed for signatures. In server-side mode, outbound mail passes through the signature service to be stamped and is returned for delivery. We document the data flow for your DPDP records during onboarding."
  ],
  [
    "How is it priced?",
    "Per user per month, billed annually: Standard ₹99, Marketing ₹179, Enterprise ₹299, excluding 18% GST. Template design and setup are included. Pay via UPI, cards or NetBanking with a GST invoice. Exact Crossware edition pricing on request."
  ]
];
