// FAQs from the supplied Industrial Park Digital Transformation document.
export const INDUSTRIAL_PARK_FAQS: [string, string][] = [
  [
    "Who is this for — the park developer or the tenants?",
    "Both. The park developer or operator buys the backbone, operations and command centre. Tenants then choose services from a park catalogue — internet, Wi-Fi, cloud desktops, Microsoft 365, backup, SOC — and are billed per tenant, either by the park or directly by XcellHost."
  ],
  [
    "Do we have to replace the meters, cameras and SCADA we already have?",
    "Usually not. We connect existing meters, analysers, cameras and SCADA where they support standard protocols, and replace only what cannot be integrated or secured. The maturity assessment lists what stays and what changes."
  ],
  [
    "What does IoT metering cost?",
    "Device connectivity is ₹49 per meter or sensor per month with a minimum of 100 devices, plus a one-time platform setup of ₹49,999 — the same prices as on our IoT Cloud page. Meters and sensors themselves are quoted with the installation. All prices exclude 18% GST."
  ],
  [
    "Can a park run its own private 5G network?",
    "Under DoT's captive non-public network (CNPN) guidelines of June 2022, an enterprise can get a private network from a telecom operator (as a slice or an isolated network), lease spectrum from an operator, or apply to DoT for spectrum. We run a private 5G readiness assessment (₹49,999 one-time) and help you choose; for most parks, fibre plus Wi-Fi covers day one."
  ],
  [
    "How do you keep OT safe if everything is connected?",
    "Connected does not mean flat. Following IEC 62443, we split networks into zones and allow traffic only through defined conduits with firewalls, allow-lists and one-way gateways where possible. Our SOC watches those conduits 24×7 and isolates threats; it never writes to controllers. An OT Site Assessment (₹2,49,999 for the first site) comes first."
  ],
  [
    "Does this make us \"CPCB compliant\"?",
    "No provider can make you compliant. CPCB's 2014 directions require listed industries, CETPs and STPs to install online monitoring and send data to the SPCB and CPCB as directed. We keep the data links up, alert on gaps and exceedances and keep the record; analysers and board-specified connectivity remain with you and your approved vendors."
  ],
  [
    "How is CCTV footage handled under the DPDP Act?",
    "Footage, ANPR plates and access logs are personal data. We design notices at gates, purpose and retention limits, role-based access and audit logs; AI analytics send alerts and blur faces rather than store identities. A vDPO retainer (₹19,999 a month) can run the privacy programme."
  ],
  [
    "Where is our data stored?",
    "Real-time data stays on edge nodes in the park; the park cloud, backups and SOC logs run in XcellHost's Tier IV data centre in Mumbai. Logs are kept in India for at least 180 days, in line with CERT-In's directions."
  ],
  [
    "Can tenants be billed separately for what they use?",
    "Yes. Each service is tagged to a tenant, so the park gets a per-tenant usage report and can invoice tenants itself, or XcellHost can invoice tenants directly with GST. The tenant portal and billing module is indicatively ₹499* per tenant per month."
  ],
  [
    "Do the CEA power-sector cyber rules apply to an industrial park?",
    "Only in some cases. CEA's Cyber Security in Power Sector Regulations, 2026 (in force from 1 April 2027) are reported to cover generating companies, captive plants and energy storage at 50 MW and above, and power exchanges. A park or tenant with captive power or storage at that scale should check applicability; we help with OT isolation, incident reporting and CISO support."
  ],
  [
    "Which AI use cases should we start with?",
    "Usually energy optimisation and predictive maintenance on pumps, blowers and transformers, because they use data you already meter. Vision safety on existing cameras and gate-queue prediction come next. Models run on park edge nodes, with training on AI Factory GPUs in India (priced on quote)."
  ],
  [
    "How long does a roll-out take?",
    "The maturity assessment takes about three weeks. A typical backbone goes live in two to four months, metering and video follow, and a full command centre with tenant catalogue is often live within eight months — depending on park size, civil work and approvals*."
  ]
];
