// FAQs from the supplied Manufacturing Cloud document.
export const MANUFACTURING_CLOUD_FAQS: [string, string][] = [
  [
    "Will our lines stop if the internet link fails?",
    "No. Control stays at Purdue levels 0–3 in the plant. MES and buffers can run on an edge node on site; data is queued and sent to the cloud when the link returns. SD-WAN with 4G / 5G backup reduces outages further."
  ],
  [
    "Can you host SAP?",
    "Yes — S/4HANA, ECC, BW and Business One, bring your own SAP licence. Landscapes start at ₹49,999 a month for non-production on our SAP hosting page; Business One on HANA starts per user and S/4HANA private cloud is priced by HANA band."
  ],
  [
    "Can CAD and PLM really run on cloud desktops?",
    "Yes, for 2D and most 3D work, with GPU-backed desktops for heavy assemblies and rendering. GPU desktops are priced on quote; non-GPU knowledge and power-user desktops start at ₹1,999 and ₹3,499 per user a month (minimum 25 users). Check each CAD vendor's licence terms for virtual use."
  ],
  [
    "How do you secure OT without touching the PLCs?",
    "The OT Site Assessment uses passive discovery to map assets and flows, then designs an industrial DMZ and segmentation. Changes at the controller level stay with your OEMs and control engineers."
  ],
  [
    "Does Manufacturing Cloud help with BRSR?",
    "It helps with the data. Meter and production data collected through IoT Cloud, with lineage and immutable backups, supports energy, emissions and water disclosures. Under SEBI's 28 March 2025 circular, BRSR Core assessment or assurance extends to the top 1,000 listed companies by FY 2026-27. Your sustainability team and assessor own the report."
  ],
  [
    "What about PLI claims?",
    "PLI incentives depend on verified incremental production and sales. Keeping ERP, MES and IoT data together with audit trails and backups makes reconciliation easier. We do not prepare or certify claims."
  ],
  [
    "Where is our data stored?",
    "In XcellHost's Tier IV data centre in Mumbai, with DR at a second site in India*. Edge nodes at your plants hold local buffers and caches."
  ],
  [
    "How is IoT priced?",
    "₹49 per device a month with a minimum of 100 devices, plus a one-time platform setup of ₹49,999 — the same as our IoT Cloud page. Edge nodes are ₹14,999, ₹24,999 or ₹44,999 a month. All excl. 18% GST."
  ],
  [
    "Do we need CERT-In reporting for OT incidents?",
    "CERT-In's 2022 directions require body corporates to report notified incident types within six hours and keep ICT logs for 180 days in India. Our SOC covers the office and OT DMZ, keeps logs in India and drafts the report for you."
  ],
  [
    "Can suppliers and dealers connect?",
    "Yes — through portals or APIs in front of the ERP, published behind WAF and MFA. Value-chain ESG data collection for BRSR can use the same portals."
  ],
  [
    "What does a typical start cost?",
    "Many plants start with the smart factory readiness assessment (₹99,999 per plant) or the OT Site Assessment (₹2,49,999 first site), then a pilot line on IoT Cloud and one edge node. Use the configurator for a full estimate; all figures are indicative and excl. GST."
  ]
];
