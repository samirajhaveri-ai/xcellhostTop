// Eight questions from the supplied CLM Solutions page, rendered in the shared FAQ section.
export const CLM_SOLUTIONS_FAQS: [string, string][] = [
  [
    "What is certificate lifecycle management (CLM)?",
    "CLM is software that finds every digital certificate you own, keeps an inventory of it, and automates the work around it — requesting, approving, issuing, installing, renewing and revoking — with alerts and reports along the way. It replaces spreadsheets and calendar reminders."
  ],
  [
    "Which CLM platforms do you compare?",
    "Typically DigiCert (Trust Lifecycle Manager and CertCentral Enterprise), Sectigo Certificate Manager, Keyfactor, Venafi (now part of CyberArk), AppViewX, KeyTalk and ManageEngine Key Manager Plus. We shortlist two or three based on your estate before any demo."
  ],
  [
    "Are you tied to one vendor?",
    "No. We recommend the platform that fits your requirements. Our managed operations service runs on DigiCert and Sectigo platforms; if another platform fits better, we help you evaluate and buy it and agree the support model with you."
  ],
  [
    "Why does the 47-day change matter now?",
    "Under CA/Browser Forum ballot SC-081, the maximum life of a public TLS certificate fell to 200 days in March 2026 and drops to 100 days in March 2027 and 47 days in March 2029. Each step multiplies renewals; by 2029 every public certificate is renewed roughly eight times a year. Manual processes don't scale to that."
  ],
  [
    "Do we need CLM if we only have a few certificates?",
    "With a handful of public certificates, ACME automation on each server may be enough. CLM starts paying off once you have private certificates, several CAs, many teams or anything you can't afford to see expire. The calculator above shows where you sit."
  ],
  [
    "Can CLM manage our Microsoft CA (AD CS)?",
    "Most leading platforms can discover and manage certificates issued by Microsoft CA, and some can replace it with a hosted private CA. Coverage differs by platform, so we test it in the proof of concept."
  ],
  [
    "What does the managed CLM service include?",
    "Onboarding and discovery, automation rollout (ACME, agents and connectors), policy set-up, daily monitoring of the renewal queue by our 24×7 NOC, fixing failed renewals and installs, monthly reports, and a named contact. Packages differ by how many certificates we manage."
  ],
  [
    "Is the platform licence included in the price?",
    "No. The managed CLM fee covers XcellHost's service. The platform licence and the certificates themselves are quoted separately in INR, or you can bring a licence you already own."
  ]
];
