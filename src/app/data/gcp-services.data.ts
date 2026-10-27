// Imported from the supplied Google Cloud HTML.
import { Faq } from './models';
export const GCP_SERVICE_PAGE = {
  "slug": "vendor-partners/google-cloud",
  "name": "Google Cloud",
  "title": "All Google Cloud (GCP) Services in India | 200+ Products, Billed in INR & Managed by XcellHost",
  "description": "Browse all 285 Google Cloud services in 18 categories — Compute Engine, GKE, Cloud Run, BigQuery, Cloud SQL, Gemini Enterprise Agent Platform (formerly Vertex AI), security and networking. Billed in INR with GST, Mumbai and Delhi regions, managed 24×7 by XcellHost since 1999.",
  "assetUrl": "/assets/cloud-platforms/gcp-services.html",
  "platform": true
} as const;
export const GCP_SERVICE_FAQS: Faq[] = [
  [
    "How many Google Cloud services are on this page?",
    "285 entries across 18 categories — everything in Google's Cloud Services Summary (21 Oct 2026) and SecOps Services Summary, plus products from Google's product directory, read on 24 October 2026. Retired products are left out."
  ],
  [
    "Where is Vertex AI?",
    "Google now calls it Gemini Enterprise Agent Platform; Vertex AI Search is Agent Search. Google Agentspace became part of Gemini Enterprise. Renamed rows show the former name, and searching the old name still finds them."
  ],
  [
    "Which Google Cloud regions are in India?",
    "Two: Mumbai (asia-south1), opened in 2017, and Delhi (asia-south2), opened in 2021, each with three zones. We usually run production across zones in Mumbai and keep backups and disaster recovery in Delhi, so both copies stay in India."
  ],
  [
    "Is every Google Cloud service available in Mumbai and Delhi?",
    "No. Availability differs by product, and some are global or launch elsewhere first. We check Google's locations page for every product in your design before you commit."
  ],
  [
    "How is Google Cloud priced through XcellHost?",
    "Usage follows Google's pricing for each product and region and is billed at actuals on an INR invoice with GST — price on quote / pay-as-you-go via XcellHost billing. We do not publish Google rates here. Our management fee is a separate line."
  ],
  [
    "How much does XcellHost charge to manage Google Cloud?",
    "Essential ₹14,999/month up to 10 resources, Professional ₹39,999/month up to 40 resources, Enterprise on quote, or 8% of monthly spend with a ₹14,999 minimum. Readiness assessment ₹49,999 and landing zone ₹1,49,999 one-time. All indicative, excluding 18% GST — the same as our Managed Google Cloud page."
  ],
  [
    "Can you move us from on-premises, VMware or AWS?",
    "Yes. We start with a readiness assessment, build the landing zone, then migrate in waves with Migrate to Virtual Machines, Database Migration Service and Storage Transfer Service — or Google Cloud VMware Engine to keep VMware tools. Migration is quoted after the assessment."
  ],
  [
    "Does keeping data in India regions satisfy the DPDP Act and CERT-In?",
    "It helps. We restrict projects to Mumbai and Delhi where the product allows, keep logs in a locked bucket in India for at least 180 days and support CERT-In's 6-hour reporting window. Compliance responsibility stays with your organisation; this is not legal advice."
  ],
  [
    "Do we keep ownership of our Google Cloud organisation?",
    "Yes. Projects and data stay in your organisation. Our engineers get least-privilege roles through groups, every action is logged, and access is removed if you leave, with documentation and runbooks handed back."
  ],
  [
    "What happened to Container Registry, IoT Core and Data Catalog?",
    "Container Registry shut down on 18 March 2025 — Artifact Registry replaces it. IoT Core retired in August 2023. Data Catalog became Dataplex Universal Catalog, now Knowledge Catalog. Retired products are not listed; renamed ones say so."
  ],
  [
    "What does “Add to quote” do?",
    "It adds the service to your cart as a quotation line with no price, because usage depends on size and region. Use the stack builder to send a full list — we reply with a design and an INR quotation."
  ],
  [
    "Are the logos and badges on this page official?",
    "No. Service icons, vendor tiles and certification badges are text placeholders until official files are supplied. Google's own pages, linked from each row and badge, are the authority on what Google offers and holds."
  ]
];
