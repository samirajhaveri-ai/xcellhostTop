// Eight questions from the supplied Private CA page, rendered in the shared FAQ section.
export const PRIVATE_CA_FAQS: [string, string][] = [
  [
    "What is a private CA?",
    "A certificate authority that only your organisation trusts. It has its own root and one or more issuing CAs, and it issues certificates for internal servers, users and devices. Because its root is not in public browser or operating-system trust stores, its certificates are trusted only by devices where you install that root."
  ],
  [
    "How is a private certificate different from a public SSL certificate?",
    "A public certificate chains to a root that every browser trusts, so it must follow CA/Browser Forum rules: registered domain names only, validated ownership and a maximum lifetime that is now 200 days. A private certificate follows your own policy — internal names, private IPs, custom key usages and longer lifetimes are all allowed — but only your managed devices trust it."
  ],
  [
    "Why won't browsers outside our company trust it?",
    "That is by design. Your root is distributed only to your own devices through Group Policy, Intune or MDM. Anything public-facing — your website, customer portals, public APIs — should keep using a publicly trusted certificate. The decider on this page shows which systems belong where."
  ],
  [
    "Can't we just use self-signed certificates?",
    "Self-signed certificates have no common root, no revocation and no lifecycle tracking, so users learn to click through warnings and attackers can impersonate internal services. A private CA gives every internal certificate one trusted chain, CRL and OCSP revocation, and automatic renewal."
  ],
  [
    "We already run Microsoft AD CS. Do we have to replace it?",
    "No. A hosted management platform can sit over AD CS so Microsoft and non-Microsoft certificates live in one inventory with the same policies and alerts. When you are ready, we plan a phased migration to the hosted private CA, template by template."
  ],
  [
    "Where is the root key kept?",
    "In a hardware security module operated by the vendor, behind layered, multi-person access controls, and kept offline except to sign issuing CAs. On the Dedicated edition the HSM is single-tenant; where the platform supports on-prem, it can sit in your own data centre."
  ],
  [
    "Which enrolment methods are supported?",
    "ACME for servers and Kubernetes, SCEP for phones and network gear (often via Intune or another MDM), EST for devices and Linux, Windows auto-enrolment through AD, a REST API for your own apps, and manual CSR upload. Exact connectors depend on the platform; we confirm them for your stack."
  ],
  [
    "How do we get every device to trust our root?",
    "Windows devices receive it through Group Policy or Intune, Macs and phones through an MDM profile, and Linux servers through configuration management. We prepare the packages and verify coverage before the first certificate goes live."
  ]
];
