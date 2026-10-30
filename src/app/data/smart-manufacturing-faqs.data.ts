import { Faq } from './models';
export const SMART_MANUFACTURING_FAQS: Faq[] = [
  [
    "What is Industry 5.0?",
    "A European Commission vision, first set out in a January 2021 policy brief, for industry that goes beyond efficiency and productivity. It rests on three ideas: human-centric (workers' wellbeing and skills at the centre), sustainable (circular, resource-aware production) and resilient (able to withstand disruption). The Commission describes it as building on Industry 4.0."
  ],
  [
    "Does Industry 5.0 replace Industry 4.0?",
    "No. You still need the Industry 4.0 foundations: connected machines, data, edge and cloud, analytics and automation. Industry 5.0 changes what you aim them at, adding people, energy and resilience to the KPIs alongside output."
  ],
  [
    "What does XcellHost deliver for smart manufacturing?",
    "Readiness and OT security assessments, IIoT sensors and connectivity, edge compute, OT/IT integration with MES and ERP (including SAP), digital twins, predictive maintenance, computer-vision quality inspection, cobot cell integration, energy and carbon tracking, private 5G readiness, and AI training for staff. After go-live, our 24×7 NOC and SOC in Mumbai run the platform."
  ],
  [
    "Do we have to replace our old machines?",
    "Usually not. Older machines can be retrofitted with clamp-on vibration, temperature and current sensors, and protocol gateways can read many PLCs. Newer controls often support OPC UA, Modbus or MQTT directly. We check each machine during the readiness assessment."
  ],
  [
    "How is OEE calculated?",
    "OEE = Availability × Performance × Quality. Availability is run time divided by planned production time; Performance is ideal cycle time × total units divided by run time; Quality is good units divided by total units. An OEE of 85% is often cited as world-class for discrete manufacturing, but the useful comparison is your own line over time. Try the OEE calculator."
  ],
  [
    "What ROI can predictive maintenance give?",
    "It depends on how much unplanned downtime costs you, which failure modes give early warning, and how quickly maintenance acts on alerts. The estimator lets you enter your own downtime cost and reduction; we confirm the real figure in a pilot on one line before you scale."
  ],
  [
    "Can you integrate with SAP, our ERP and MES?",
    "Yes. Shop-floor events such as counts, downtime reasons, quality results and work orders can flow to MES and ERP, and orders and recipes can flow back. XcellHost also hosts SAP: see SAP Hosting and SAP S/4HANA Private Cloud."
  ],
  [
    "How do you keep OT networks secure?",
    "We design segmentation before we connect anything: zones and conduits following IEC 62443, an IT/OT DMZ, controlled remote access and passive monitoring by our SOC. For a full baseline, start with an OT Assessment; for plant backups, see Acronis OT."
  ],
  [
    "Can we run private 5G in our factory?",
    "Yes, under the Department of Telecommunications' captive non-public network (CNPN) guidelines of June 2022. An enterprise can lease spectrum from a telecom operator, obtain it directly from DoT, or have an operator build a private network or provide one as a slice. XcellHost's private 5G readiness assessment (₹49,999) checks coverage needs, use cases and the best route."
  ],
  [
    "Does this help with BRSR reporting?",
    "It helps with the data. SEBI requires the top 1,000 listed companies to file a BRSR that includes energy and emissions. Metering and dashboards give you kWh and CO₂e per unit, line and plant, with a record of where each number came from. Your sustainability team and assurance or assessment provider still own the report."
  ],
  [
    "Which government schemes are relevant?",
    "Make in India (since 2014), the Production Linked Incentive schemes for 14 sectors, the Ministry of Heavy Industries' SAMARTH Udyog Bharat 4.0 awareness centres, and MSME programmes. XcellHost does not administer or guarantee any scheme benefit; check eligibility with the ministry or your adviser."
  ],
  [
    "Where is our plant data stored?",
    "Time-critical processing stays on edge nodes at your plant. Historical data, dashboards and AI workloads run in XcellHost's cloud in India, including our Tier IV data centre in Mumbai and AI Factory. Logs are kept to meet CERT-In's 180-day rule, and worker data is handled under the DPDP Act."
  ]
];
