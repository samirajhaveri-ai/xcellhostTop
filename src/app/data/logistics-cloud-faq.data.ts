// FAQs from the supplied Logistics Cloud document.
export const LOGISTICS_CLOUD_FAQS: [string, string][] = [
  [
    "Can you host our existing TMS and WMS?",
    "Yes. We host the TMS, WMS, ERP and portals you already license — Windows or Linux, databases included — on shared or dedicated compute in Mumbai. Licences stay with you; we check vendor terms for hosted use with you."
  ],
  [
    "Our trackers come from different vendors. Can they share one platform?",
    "Usually, yes. IoT Cloud accepts MQTT, CoAP, HTTPS and LoRaWAN, and gateways can translate other protocols. Each device gets its own certificate. Pricing is ₹49* per device a month with a 100-device minimum and a ₹49,999* setup."
  ],
  [
    "How does Logistics Cloud help with e-way bills?",
    "We host the ERP or TMS and its logged API link to the e-way bill system through your GST suvidha provider, keep portal credentials and MFA under control, and alert before a bill's validity — one day per 200 km under rule 138 — runs out. Filing responsibility stays with the registered person."
  ],
  [
    "What changed for e-way bills in 2025?",
    "Per GSTN's updates, from 1 January 2025 e-way bills can only be generated for documents dated within 180 days, and a bill can be extended for at most 360 days from generation. Multi-factor authentication became mandatory for all users of the e-way bill and e-invoice portals from 1 April 2025."
  ],
  [
    "Can you connect us to ULIP?",
    "ULIP, launched with the National Logistics Policy, gives registered companies API access to logistics data from many government systems, under an NDA. Once you are registered, we host the application that calls those APIs, keep the keys in a vault and log every call. Registration and terms are between you and ULIP."
  ],
  [
    "What happens when a warehouse loses its internet link?",
    "With SD-WAN, traffic moves to 4G or 5G backup. With an edge node, scanning and the local WMS queue keep working even if every link is down, and records sync to Mumbai when the connection returns."
  ],
  [
    "Do you supply GPS trackers and sensors?",
    "We can source them on quote, or onboard the devices you already have. SIM data plans stay with telecom operators; we manage the platform, rules and dashboards."
  ],
  [
    "How is driver location data handled under the DPDP Act?",
    "Location trails and phone numbers are personal data. We store them in India with encryption, access control and retention rules, so trails are kept only as long as your policy says. Notices to drivers and consent where needed are your responsibility; our vDPO retainer can help."
  ],
  [
    "Can AI really cut kilometres?",
    "Route optimisation solvers routinely beat hand-drawn routes on multi-drop runs, but results depend on your constraints, time windows and data quality. We run a pilot on your historic orders and report the difference before you commit. GPU capacity is priced on quote."
  ],
  [
    "Is Logistics Cloud secure against ransomware?",
    "Layers help: EDR on office PCs, a 24×7 SOC on servers, immutable backups and DR in India. If dispatch PCs are hit, the TMS in Mumbai keeps running and can be restored from clean copies."
  ],
  [
    "What does Logistics Cloud cost?",
    "Compute is ₹599 per vCPU, ₹149 per GB RAM and ₹6 per GB NVMe a month; IoT devices ₹49* each (minimum 100); Edge S nodes ₹14,999*; warehouse Wi-Fi from ₹499* per AP; SD-WAN from ₹2,999* per site; SOC ₹449* per server. GPU is on quote. All excl. 18% GST."
  ]
];
