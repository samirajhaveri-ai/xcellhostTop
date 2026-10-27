import { Faq } from './models';
export const SECTIGO_FAQS: Faq[] = [
  [
    "Is Sectigo The Same As Comodo?",
    "Yes. Comodo CA was renamed Sectigo in 2018. The certificates, roots and trust are the same; the Comodo name continues on some products."
  ],
  [
    "Which Sectigo Certificate Is Right For Me?",
    "DV for blogs and brochure sites, OV for businesses that collect customer data, and EV for financial or high-value transactions. Use wildcard for many subdomains and multi-domain/UCC for several different domains."
  ],
  [
    "What Is Sectigo ACME?",
    "An automated subscription: your server requests and renews DV certificates on its own using the ACME protocol, so certificates never lapse."
  ],
  [
    "How Long Is A Certificate Valid Now?",
    "From 15 March 2026 public SSL certificates are valid for at most 200 days, reducing further from 2027. Your subscription covers the full term; we reissue and reinstall, or ACME does it automatically."
  ],
  [
    "Can One Certificate Cover My Exchange Server?",
    "Yes — a Multi-Domain/UCC certificate covers names such as mail.example.in, autodiscover.example.in and your domain in one certificate."
  ],
  [
    "How Fast Is Issuance?",
    "DV certificates are issued in minutes after DNS, email or file validation. OV takes 1–3 working days and EV 1–5 working days."
  ],
  [
    "Will You Install It?",
    "Yes, CSR generation and installation help are included."
  ],
  [
    "Are Prices Inclusive Of GST?",
    "No. Prices are in INR and exclusive of 18% GST, with a GST invoice."
  ]
];
