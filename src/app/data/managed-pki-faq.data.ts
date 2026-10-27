// Eight questions from the supplied Managed PKI page, rendered in the shared FAQ section.
export const MANAGED_PKI_FAQS: [string, string][] = [
  [
    "What is managed PKI?",
    "It is a private certificate authority — your own root and issuing CAs, certificate profiles and revocation services — hosted on a hardened vendor platform and operated for you. You decide who gets which certificates; the platform and the XcellHost team handle the infrastructure, key protection, issuance, renewal and revocation."
  ],
  [
    "How is it different from running Microsoft AD CS ourselves?",
    "With AD CS you own the servers, HSMs, templates, CRL publishing, backups, patching and audits, and it mainly serves Windows. Managed PKI moves that operational load to the provider, adds automation for macOS, Linux, mobiles and network gear, and gives you a console with delegated access. You can also keep AD CS and manage it alongside."
  ],
  [
    "Who holds our root CA key?",
    "The root key is generated inside a hardware security module during a scripted, witnessed key ceremony with split custody, then kept offline. On the hosted platforms the vendor's audited facilities protect the HSMs; with an on-prem or air-gapped deployment the HSMs sit in your premises or in XcellHost's Indian data centre."
  ],
  [
    "Which vendors can you deploy?",
    "We supply and operate DigiCert and Sectigo managed PKI directly. We also compare Keyfactor, Venafi (now part of CyberArk), AppViewX, KeyTalk and ManageEngine on request and help you decide which fits your use cases, hosting needs and budget."
  ],
  [
    "Can we keep our existing Microsoft CA?",
    "Yes. Many teams add a managed layer that discovers and automates certificates from AD CS, then retire it gradually. Others migrate straight to a hosted hierarchy. Either way we plan the cut-over group by group with a tested rollback."
  ],
  [
    "Which protocols and integrations are supported?",
    "Typically ACME, SCEP and EST, Active Directory auto-enrolment, MDM such as Microsoft Intune, REST APIs, and connectors for web servers, load balancers, cloud platforms and DevOps tools. The exact list depends on the vendor and edition; we confirm it during design."
  ],
  [
    "Can our PKI stay in India?",
    "Hosting regions differ by vendor platform, so we confirm them on your shortlist. If you need everything inside India, an on-prem or custom-cloud deployment — including in XcellHost's Indian data centre — is available on a scoped quote."
  ],
  [
    "Will browsers trust our private certificates?",
    "No — private certificates are trusted only by devices you configure to trust your root, which is exactly what you want for internal systems. Public websites still need publicly trusted TLS certificates, which we can manage from the same console."
  ]
];
