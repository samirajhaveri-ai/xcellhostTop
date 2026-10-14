// Eight questions from the supplied PKI Software page, rendered in the shared FAQ section.
export const PKI_SOFTWARE_FAQS: [string, string][] = [
  [
    "What is PKI software?",
    "It is the platform that issues, tracks, renews and revokes your digital certificates — public TLS, private CA, user, device, S/MIME and signing certificates — from one console. Most products combine discovery, a policy engine, automation protocols such as ACME, SCEP and EST, revocation services and reporting."
  ],
  [
    "Do we need PKI software, or just certificates?",
    "If you run a handful of public website certificates, monitoring plus automated installation is usually enough. Once you have hundreds of certificates, private certificates for users and devices, several teams or shrinking public TLS lifetimes, a platform pays for itself in avoided outages and admin time."
  ],
  [
    "Which vendors do you work with?",
    "We supply and operate DigiCert and Sectigo directly. For Keyfactor, AppViewX, KeyTalk, Venafi (now part of CyberArk) and ManageEngine we run the comparison, can deploy and operate the platform you pick, and arrange licensing through the vendor or its authorised channel."
  ],
  [
    "On-prem, cloud or hybrid — which should we choose?",
    "Cloud is simplest to run. On-prem suits strict data-residency or air-gapped needs. Hybrid keeps the CA and HSM keys in your data centre while OCSP, CRL distribution and enrolment gateways run where your users and devices can reach them. The architecture builder on this page shows each option."
  ],
  [
    "Why are software licences on quote?",
    "Vendors price by edition, certificate or device volume, modules and term, and some offer partner discounts. Once the shortlist is settled we get current pricing from each vendor and put it on one INR quotation next to our services."
  ],
  [
    "What does the XcellHost deployment include?",
    "Design workshops, installation or tenant set-up, CA hierarchy and certificate profiles, RA policies, OCSP and CRL publishing, ACME/SCEP/EST enrolment, two initial integrations, testing, runbooks and hand-over. Larger scopes and extra integrations are quoted separately."
  ],
  [
    "What do managed operations cover?",
    "24×7 monitoring of the CA, OCSP and CRL services, patching and upgrades, backup checks, renewals and revocations on request, issuing-CA rotation on schedule and a monthly report. Our Mumbai NOC answers on phone, WhatsApp and tickets."
  ],
  [
    "Do we need an HSM?",
    "For any CA that signs production certificates, keeping the private keys in a hardware security module is strongly recommended and often required by auditors. We integrate network HSMs or cloud HSM services and run the key ceremony; the HSM itself is quoted separately."
  ]
];
