export interface AcronisDemoVideo {
  readonly id: number;
  readonly title: string;
  readonly videoId: string;
  readonly publishedAt: string;
  readonly views: number;
  readonly audiences: readonly string[];
  readonly products: readonly string[];
  readonly purposes: readonly string[];
  readonly capabilities: readonly string[];
  readonly topics: readonly string[];
}

/**
 * Snapshot of the public Acronis Demo Center video catalog.
 * Refresh with: node scripts/import-acronis-demo-catalog.mjs
 */
export const ACRONIS_DEMO_VIDEOS = [
  {
    "id": 2667,
    "title": "What's New - July 2026 Release",
    "videoId": "COjswzNhTdo",
    "publishedAt": "2026-07-31 00:00:00",
    "views": 305,
    "audiences": [
      "Businesses",
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "What's new"
    ],
    "capabilities": [],
    "topics": [
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2660,
    "title": "Microsoft Entra ID: Identity Infrastructure and Risks Overview",
    "videoId": "5iXXNI4gIMk",
    "publishedAt": "2026-07-15 00:00:00",
    "views": 244,
    "audiences": [
      "Businesses",
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Operations",
      "Microsoft 365"
    ]
  },
  {
    "id": 2659,
    "title": "Microsoft Entra ID: Backup and Recovery",
    "videoId": "XA6qMV8RuLU",
    "publishedAt": "2026-07-15 00:00:00",
    "views": 748,
    "audiences": [
      "Businesses",
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Microsoft 365",
      "Restore and Recovery"
    ]
  },
  {
    "id": 2658,
    "title": "AI Assisted Scripting: Updated Features and Use Case",
    "videoId": "ZlkL6YMZ958",
    "publishedAt": "2026-07-14 00:00:00",
    "views": 157,
    "audiences": [
      "Businesses",
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "RMM",
      "Automation & PSA"
    ],
    "topics": [
      "Scripting"
    ]
  },
  {
    "id": 2651,
    "title": "What's New - June 2026 Release",
    "videoId": "EQAJDNroRTo",
    "publishedAt": "2026-07-06 00:00:00",
    "views": 312,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "What's new"
    ],
    "capabilities": [],
    "topics": [
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2548,
    "title": "Acronis True Image – How to Do a Backup",
    "videoId": "zH15ZSU8C8s",
    "publishedAt": "2026-06-25 00:00:00",
    "views": 373,
    "audiences": [
      "Individuals"
    ],
    "products": [
      "True Image"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Operations"
    ]
  },
  {
    "id": 2549,
    "title": "Acronis True Image – Product Overview",
    "videoId": "tk1i4Ixnon0",
    "publishedAt": "2026-06-18 00:00:00",
    "views": 325,
    "audiences": [
      "Individuals"
    ],
    "products": [
      "True Image"
    ],
    "purposes": [
      "Onboarding",
      "Overview"
    ],
    "capabilities": [
      "Data Protection",
      "Cybersecurity",
      "Administration"
    ],
    "topics": [
      "Backup Operations",
      "Account Management"
    ]
  },
  {
    "id": 2642,
    "title": "What's New - May 2026 Release",
    "videoId": "qBp94Ecnd0U",
    "publishedAt": "2026-06-15 07:00:00",
    "views": 299,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "What's new"
    ],
    "capabilities": [],
    "topics": [
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2624,
    "title": "Vulnerability Assessment: Best Practices",
    "videoId": "C7YSUMg8kH0",
    "publishedAt": "2026-05-22 00:00:00",
    "views": 286,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Vulnerability Assessment"
    ]
  },
  {
    "id": 2623,
    "title": "Patch Management: Best Practices",
    "videoId": "BS4taFuK9bg",
    "publishedAt": "2026-05-22 00:00:00",
    "views": 247,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Patch Management"
    ]
  },
  {
    "id": 2622,
    "title": "Device Discovery and Inventory: Best Practices",
    "videoId": "_RLnOnBMuFM",
    "publishedAt": "2026-05-22 00:00:00",
    "views": 243,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Software Deployment and Inventory"
    ]
  },
  {
    "id": 2615,
    "title": "What's New - April 2026 Release",
    "videoId": "WHsnFtI2j38",
    "publishedAt": "2026-05-14 00:00:00",
    "views": 381,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "What's new"
    ],
    "capabilities": [],
    "topics": [
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2616,
    "title": "What's New - February 2026 Release",
    "videoId": "vBCOYI3D5SU",
    "publishedAt": "2026-05-13 09:00:00",
    "views": 218,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "What's new"
    ],
    "capabilities": [],
    "topics": [
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2617,
    "title": "What's New - January 2026 Release",
    "videoId": "emQDYNP2B0o",
    "publishedAt": "2026-05-13 05:00:00",
    "views": 180,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "What's new"
    ],
    "capabilities": [],
    "topics": [
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2610,
    "title": "Acronis Cyber Frame - An Overview",
    "videoId": "0PwT-eNXHKA",
    "publishedAt": "2026-05-12 00:00:00",
    "views": 394,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Infrastructure"
    ],
    "topics": [
      "Acronis Cyber Frame"
    ]
  },
  {
    "id": 2609,
    "title": "Acronis Cyber Frame - Connect to a VM via SSH",
    "videoId": "6lPTUjct0Wo",
    "publishedAt": "2026-05-12 00:00:00",
    "views": 250,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Technical Deep Dive"
    ],
    "capabilities": [
      "Infrastructure"
    ],
    "topics": [
      "Acronis Cyber Frame"
    ]
  },
  {
    "id": 2608,
    "title": "Acronis Cyber Frame - Connect to a VM via web console",
    "videoId": "-8EzNVoecKM",
    "publishedAt": "2026-05-12 00:00:00",
    "views": 344,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Technical Deep Dive"
    ],
    "capabilities": [
      "Infrastructure"
    ],
    "topics": [
      "Acronis Cyber Frame"
    ]
  },
  {
    "id": 2607,
    "title": "Acronis Cyber Frame - Setting up VPN connection to your local site",
    "videoId": "WT_iyg3fjS0",
    "publishedAt": "2026-05-12 00:00:00",
    "views": 377,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Technical Deep Dive"
    ],
    "capabilities": [
      "Infrastructure"
    ],
    "topics": [
      "Acronis Cyber Frame"
    ]
  },
  {
    "id": 2586,
    "title": "Acronis RMM - AI-Assisted Remote Desktop",
    "videoId": "jVS9iuP55Wo",
    "publishedAt": "2026-04-29 00:00:00",
    "views": 222,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Remote Management and Assistance"
    ]
  },
  {
    "id": 2585,
    "title": "Acronis GenAI Protection - Prompt Injection Protection",
    "videoId": "HEmDncI8Qew",
    "publishedAt": "2026-04-29 00:00:00",
    "views": 266,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "GenAI Protection"
    ]
  },
  {
    "id": 2584,
    "title": "Acronis GenAI Protection - Data Loss Prevention",
    "videoId": "RDbb0RShNjc",
    "publishedAt": "2026-04-29 00:00:00",
    "views": 252,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "GenAI Protection"
    ]
  },
  {
    "id": 2583,
    "title": "Acronis GenAI Protection - Dashboard and Reporting",
    "videoId": "lGTGieZLxd8",
    "publishedAt": "2026-04-29 00:00:00",
    "views": 255,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "GenAI Protection"
    ]
  },
  {
    "id": 2582,
    "title": "Acronis GenAI Protection - Policy Configuration",
    "videoId": "FY5TZoFReMA",
    "publishedAt": "2026-04-29 00:00:00",
    "views": 290,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "GenAI Protection"
    ]
  },
  {
    "id": 2581,
    "title": "Acronis GenAI Protection - Service Activation for Clients",
    "videoId": "UOJXj5ympSE",
    "publishedAt": "2026-04-29 00:00:00",
    "views": 220,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "GenAI Protection"
    ]
  },
  {
    "id": 2580,
    "title": "Acronis Email Security -  Account Takeover & Summary",
    "videoId": "l5twGXQWPVo",
    "publishedAt": "2026-04-29 00:00:00",
    "views": 210,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Email Security"
    ]
  },
  {
    "id": 2579,
    "title": "Acronis Email Security -  People Posture",
    "videoId": "qzJpl3aDefw",
    "publishedAt": "2026-04-29 00:00:00",
    "views": 146,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Email Security"
    ]
  },
  {
    "id": 2578,
    "title": "Acronis Email Security - Incident Response",
    "videoId": "ojk7HE4_pLI",
    "publishedAt": "2026-04-29 00:00:00",
    "views": 216,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Email Security"
    ]
  },
  {
    "id": 2577,
    "title": "Acronis Email Security -  Security Awareness from Real Attackers",
    "videoId": "qeegJAZ3Qs0",
    "publishedAt": "2026-04-29 00:00:00",
    "views": 211,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Email Security"
    ]
  },
  {
    "id": 2575,
    "title": "Acronis Email Security -  Detection Layers",
    "videoId": "gMUUTu1m8yo",
    "publishedAt": "2026-04-28 00:00:00",
    "views": 208,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Email Security"
    ]
  },
  {
    "id": 2574,
    "title": "Acronis Email Security - Incident Investigation",
    "videoId": "rRKNpsCKiXM",
    "publishedAt": "2026-04-28 00:00:00",
    "views": 227,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Email Security"
    ]
  },
  {
    "id": 2573,
    "title": "Acronis Email Security - Dashboard and Visibility",
    "videoId": "HU4kmtBe6Mc",
    "publishedAt": "2026-04-28 00:00:00",
    "views": 254,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity",
      "RMM"
    ],
    "topics": [
      "Email Security",
      "Dashboards and Reporting"
    ]
  },
  {
    "id": 2572,
    "title": "Acronis Email Security - Platform Overview",
    "videoId": "Hg5w_bYDrSM",
    "publishedAt": "2026-04-28 00:00:00",
    "views": 271,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Email Security"
    ]
  },
  {
    "id": 2565,
    "title": "Onboarding Device",
    "videoId": "mxlrOwZMX0s",
    "publishedAt": "2026-04-08 00:00:00",
    "views": 411,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "RMM"
    ],
    "topics": [
      "Device Discovery and Management"
    ]
  },
  {
    "id": 2564,
    "title": "Licensing Overview",
    "videoId": "dJGOGiOZ58E",
    "publishedAt": "2026-04-08 00:00:00",
    "views": 463,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "Overview"
    ],
    "capabilities": [
      "Administration"
    ],
    "topics": [
      "Licensing, Billing, and Pricing"
    ]
  },
  {
    "id": 2563,
    "title": "Executive Summary Report: Create and Send to Your Customer",
    "videoId": "qFT9BcawdVA",
    "publishedAt": "2026-04-08 00:00:00",
    "views": 236,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Dashboards and Reporting"
    ]
  },
  {
    "id": 2562,
    "title": "Device Auto-discovery",
    "videoId": "LBn6f09WSM0",
    "publishedAt": "2026-04-08 00:00:00",
    "views": 249,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "RMM"
    ],
    "topics": [
      "Device Discovery and Management"
    ]
  },
  {
    "id": 2561,
    "title": "Create a New User",
    "videoId": "6-Ad0Uup_Co",
    "publishedAt": "2026-04-08 00:00:00",
    "views": 269,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Administration"
    ],
    "topics": [
      "User Management, Roles and Permissions"
    ]
  },
  {
    "id": 2560,
    "title": "AI Capabilities",
    "videoId": "tGx80r1eilU",
    "publishedAt": "2026-04-08 00:00:00",
    "views": 236,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "Overview"
    ],
    "capabilities": [
      "RMM",
      "Administration"
    ],
    "topics": [
      "AI Capabilities"
    ]
  },
  {
    "id": 2591,
    "title": "Acronis Workflow Automation Demo",
    "videoId": "w5d33lwGXJA",
    "publishedAt": "2026-01-20 00:00:00",
    "views": 174,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Automation & PSA"
    ],
    "topics": [
      "Workflow Automation"
    ]
  },
  {
    "id": 2592,
    "title": "Acronis PSA Demo",
    "videoId": "DKlpcdfIP7Y",
    "publishedAt": "2025-11-26 00:00:00",
    "views": 163,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Automation & PSA"
    ],
    "topics": [
      "Professional Services Automation (PSA)"
    ]
  },
  {
    "id": 2593,
    "title": "Acronis RMM - Copilot for Software Deployment Setup",
    "videoId": "XiyDJGrYYTk",
    "publishedAt": "2025-07-15 00:00:00",
    "views": 147,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Software Deployment and Inventory"
    ]
  },
  {
    "id": 2597,
    "title": "Acronis RMM - AI-Assisted Scripting",
    "videoId": "ZaB6-LlIrn8",
    "publishedAt": "2025-07-14 00:00:00",
    "views": 171,
    "audiences": [
      "Businesses",
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud",
      "Cyber Protect"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM",
      "Automation & PSA"
    ],
    "topics": [
      "Scripting"
    ]
  },
  {
    "id": 2596,
    "title": "Acronis RMM - AI-Based Patch Stability Scoring",
    "videoId": "Qlck8nJSuKw",
    "publishedAt": "2025-07-14 00:00:00",
    "views": 139,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Patch Management"
    ]
  },
  {
    "id": 2594,
    "title": "Acronis RMM Demo",
    "videoId": "knL4KytPjwE",
    "publishedAt": "2025-07-14 00:00:00",
    "views": 205,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Remote Monitoring & Management (RMM)"
    ]
  },
  {
    "id": 2598,
    "title": "How RMM and EDR Work Better Together",
    "videoId": "4wzE680sUpQ",
    "publishedAt": "2025-07-10 00:00:00",
    "views": 258,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Cybersecurity",
      "RMM"
    ],
    "topics": [
      "Endpoint Detection and Response (EDR)",
      "Remote Monitoring & Management (RMM)"
    ]
  },
  {
    "id": 2606,
    "title": "Acronis RMM - Security Posture Management for Microsoft 365",
    "videoId": "JafIr3g1Ht0",
    "publishedAt": "2025-06-11 00:00:00",
    "views": 165,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "Cybersecurity"
    ],
    "topics": [
      "Microsoft 365",
      "Security Posture Management"
    ]
  },
  {
    "id": 2605,
    "title": "Acronis RMM - ML Based Monitoring and Smart Alerting",
    "videoId": "HVWWeWWvX58",
    "publishedAt": "2025-06-11 00:00:00",
    "views": 205,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Monitoring"
    ]
  },
  {
    "id": 2604,
    "title": "Acronis RMM - Patch Management",
    "videoId": "bhPU_GNN2e8",
    "publishedAt": "2025-06-11 00:00:00",
    "views": 310,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Patch Management"
    ]
  },
  {
    "id": 2603,
    "title": "Agentless Backup and Recovery for Azure VMs",
    "videoId": "jOgZne-FEno",
    "publishedAt": "2025-06-11 00:00:00",
    "views": 189,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Restore and Recovery",
      "Virtual Backup"
    ]
  },
  {
    "id": 2602,
    "title": "Acronis RMM - Device Sense™",
    "videoId": "gqsywvyw_xU",
    "publishedAt": "2025-06-11 00:00:00",
    "views": 155,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection",
      "RMM"
    ],
    "topics": [
      "Device Discovery and Management"
    ]
  },
  {
    "id": 2601,
    "title": "Acronis RMM - DevicePilot™",
    "videoId": "EWDIMkQpZq0",
    "publishedAt": "2025-06-11 00:00:00",
    "views": 139,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Software Deployment and Inventory"
    ]
  },
  {
    "id": 2599,
    "title": "Email Archiving Demo",
    "videoId": "t7DjKySSOPY",
    "publishedAt": "2025-06-11 00:00:00",
    "views": 182,
    "audiences": [
      "Businesses",
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud",
      "Cyber Protect"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Email Archiving",
      "Microsoft 365"
    ]
  },
  {
    "id": 2411,
    "title": "Geo-redundant Storage",
    "videoId": "yBGBOZwuamc",
    "publishedAt": "2025-02-25 22:00:00",
    "views": 573,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Storages and Locations"
    ]
  },
  {
    "id": 2600,
    "title": "Acronis PSA - Project Management",
    "videoId": "QibEzbNM3ZY",
    "publishedAt": "2025-02-11 00:00:00",
    "views": 135,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Automation & PSA"
    ],
    "topics": [
      "Professional Services Automation (PSA)"
    ]
  },
  {
    "id": 2355,
    "title": "Acronis RMM - Scripting Plans",
    "videoId": "eiFo-9XzYAU",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 511,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM",
      "Automation & PSA"
    ],
    "topics": [
      "Scripting"
    ]
  },
  {
    "id": 2354,
    "title": "Acronis RMM - Remote Management Plans",
    "videoId": "PRn1b0df3gc",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 534,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Remote Management and Assistance"
    ]
  },
  {
    "id": 2353,
    "title": "Acronis Disaster Recovery - How to Create a Runbook",
    "videoId": "DsFhdK1wJwA",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 841,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Disaster recovery"
    ]
  },
  {
    "id": 2352,
    "title": "Acronis Disaster Recovery - How to Create a Primary Server",
    "videoId": "K5JkHsXJ_vo",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 571,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Disaster recovery"
    ]
  },
  {
    "id": 2351,
    "title": "Acronis Disaster Recovery - How to Edit a Recovery Server Configuration",
    "videoId": "o41otf9O6H4",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 433,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Disaster recovery"
    ]
  },
  {
    "id": 2350,
    "title": "Acronis Disaster Recovery - How to Create a Recovery Server in DR Cloud",
    "videoId": "-6WLF8kDlyA",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 662,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Disaster recovery"
    ]
  },
  {
    "id": 2349,
    "title": "Acronis Disaster Recovery - What Is the VPN Appliance Used For?",
    "videoId": "NFHBCjwEUMw",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 747,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Disaster recovery"
    ]
  },
  {
    "id": 2348,
    "title": "Pulling and Managing Reports",
    "videoId": "adOoq9pk2SA",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 600,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Dashboards and Reporting"
    ]
  },
  {
    "id": 2347,
    "title": "Add Backup Location Local",
    "videoId": "JZx0XqRDu-g",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 624,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Storages and Locations"
    ]
  },
  {
    "id": 2346,
    "title": "Managing Backup Storage",
    "videoId": "WXkYQLijJog",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 676,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Storages and Locations"
    ]
  },
  {
    "id": 2345,
    "title": "Working With Devices - Actions to Perform for Selected Devices",
    "videoId": "w2JzNbBC-wQ",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 414,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "RMM"
    ],
    "topics": [
      "Device Discovery and Management"
    ]
  },
  {
    "id": 2344,
    "title": "Direct Backup to AWS S3 Public Cloud Storage",
    "videoId": "j8gk17f4yxg",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 2228,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Storages and Locations",
      "Virtual Backup"
    ]
  },
  {
    "id": 2343,
    "title": "Direct Backup to Microsoft Azure Public Cloud Storage",
    "videoId": "gO8m9wW1i74",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 941,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Azure Backup",
      "Backup Storages and Locations"
    ]
  },
  {
    "id": 2342,
    "title": "Remote Operations With Bootable Media",
    "videoId": "7_1LVodv9uc",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 557,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Restore and Recovery"
    ]
  },
  {
    "id": 2341,
    "title": "Data Protection Map and Compliance Reporting",
    "videoId": "JQ7AXP6OnWM",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 1068,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Dashboards and Reporting"
    ]
  },
  {
    "id": 2340,
    "title": "What Is Continuous Data Protection, and How Do You Set It Up?",
    "videoId": "wXj8rawFAmQ",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 679,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Operations"
    ]
  },
  {
    "id": 2339,
    "title": "One-Click Restore",
    "videoId": "-qNA8GdYqW4",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 1894,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Restore and Recovery"
    ]
  },
  {
    "id": 2338,
    "title": "Bootable Media and Universal Restore",
    "videoId": "9091zsUDkh4",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 1980,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Restore and Recovery"
    ]
  },
  {
    "id": 2337,
    "title": "Workstation / Server / VM - Device Recovery",
    "videoId": "QJrZLRitrHI",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 453,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Device Discovery and Management",
      "Restore and Recovery"
    ]
  },
  {
    "id": 2336,
    "title": "Workstation / Server / VM - Quick Scripting Plan",
    "videoId": "HKoRTlQMEUw",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 476,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "RMM",
      "Automation & PSA"
    ],
    "topics": [
      "Device Discovery and Management",
      "Scripting"
    ]
  },
  {
    "id": 2335,
    "title": "Workstation / Server / VM - Create a New Protection Plan",
    "videoId": "etFDD6uv71Q",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 751,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "RMM"
    ],
    "topics": [
      "Device Discovery and Management",
      "Protection plan"
    ]
  },
  {
    "id": 2334,
    "title": "Workstation / Server / VM - Apply a Protection Plan",
    "videoId": "YUD0pIwXTwM",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 650,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "RMM"
    ],
    "topics": [
      "Device Discovery and Management",
      "Protection plan"
    ]
  },
  {
    "id": 2333,
    "title": "Acronis Cyber Protect Cloud Product Demo: Advanced File Sync & Share - Administration",
    "videoId": "wLgWZH_4JOs",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 495,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [],
    "capabilities": [],
    "topics": [
      "File Sync and Share",
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2332,
    "title": "Acronis Backup - Backup Replication",
    "videoId": "iGiDbp86Fnw",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 542,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [],
    "topics": [
      "File Sync and Share",
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2331,
    "title": "Acronis Cyber Protect Cloud Product Demo: Advanced File Sync & Share | Sharing Files / Folders",
    "videoId": "wnXvntmj0Ao",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 578,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [],
    "topics": [
      "File Sync and Share",
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2330,
    "title": "File Sync & Share | Accessing Files – Browser, Sync, iOS/Android",
    "videoId": "N5fOrP_GGsE",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 601,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [],
    "topics": [
      "File Sync and Share",
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2329,
    "title": "Advanced File Sync & Share Overview",
    "videoId": "mytdC6lO8Fg",
    "publishedAt": "2024-07-14 21:00:00",
    "views": 538,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [],
    "topics": [
      "File Sync and Share",
      "Acronis Cyber Protect Cloud",
      "Product demo"
    ]
  },
  {
    "id": 2327,
    "title": "Acronis DLP - Protection Plan Settings and Data Flow Policies",
    "videoId": "v0nvk3SBp1c",
    "publishedAt": "2024-07-11 21:00:00",
    "views": 803,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection",
      "Cybersecurity",
      "RMM"
    ],
    "topics": [
      "Data Loss Prevention (DLP)",
      "Protection plan"
    ]
  },
  {
    "id": 2326,
    "title": "Acronis DLP - Using The Data Loss Prevention Audit Log Page",
    "videoId": "w7IukSvEVu4",
    "publishedAt": "2024-07-11 21:00:00",
    "views": 562,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Data Loss Prevention (DLP)"
    ]
  },
  {
    "id": 2325,
    "title": "Acronis DLP - Data Classifiers",
    "videoId": "iCu_FjqKdzI",
    "publishedAt": "2024-07-11 21:00:00",
    "views": 648,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Data Loss Prevention (DLP)"
    ]
  },
  {
    "id": 2323,
    "title": "Microsoft 365 - How to Recover Mailbox, OneDrive, SharePoint and Teams",
    "videoId": "hKxmocXwmc8",
    "publishedAt": "2024-07-11 21:00:00",
    "views": 1401,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Microsoft 365",
      "Restore and Recovery"
    ]
  },
  {
    "id": 2322,
    "title": "Microsoft 365 - Group Protection Overview",
    "videoId": "4uB2CbvAguU",
    "publishedAt": "2024-07-11 21:00:00",
    "views": 657,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Microsoft 365"
    ]
  },
  {
    "id": 2319,
    "title": "Management Console - How To Add Storage Location To the Backup Plans",
    "videoId": "haaDcbuUo84",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 524,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "RMM"
    ],
    "topics": [
      "Backup Storages and Locations",
      "Protection plan"
    ]
  },
  {
    "id": 2318,
    "title": "Management Console - How to Create a User in the Customer Tenant. User Roles and Permissions",
    "videoId": "_Z29hKjRTms",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 921,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Administration"
    ],
    "topics": [
      "Customer Management",
      "User Management, Roles and Permissions"
    ]
  },
  {
    "id": 2317,
    "title": "Management Console - Enable/Disable Offering Items and Quotas",
    "videoId": "rFSgevqlYiY",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 625,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Administration"
    ],
    "topics": [
      "Customer Management"
    ]
  },
  {
    "id": 2316,
    "title": "Management Console - How To Add a New Customer Account",
    "videoId": "e_zLhNt25rs",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 1507,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Administration"
    ],
    "topics": [
      "Customer Management"
    ]
  },
  {
    "id": 2315,
    "title": "Protection console - How to Add a Device on Multiple Device Discovery, Windows, Mac and Linux",
    "videoId": "FkyQ75YLd_Q",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 790,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "RMM"
    ],
    "topics": [
      "Device Discovery and Management"
    ]
  },
  {
    "id": 2314,
    "title": "Protection console - How to Create and Manage Alerts",
    "videoId": "x1ao863pHMk",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 971,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "RMM"
    ],
    "topics": [
      "Alerts Management"
    ]
  },
  {
    "id": 2313,
    "title": "Protection console - How to Add, Remove and Customize Widgets and Widget Information",
    "videoId": "nGH2iC6X_b8",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 641,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Dashboards and Reporting"
    ]
  },
  {
    "id": 2308,
    "title": "Detection and Response - EDR Incident Quarantine",
    "videoId": "WHtaomZQzMw",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 517,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Endpoint Detection and Response (EDR)"
    ]
  },
  {
    "id": 2307,
    "title": "Detection and Response - EDR Incident Remediation",
    "videoId": "Vtdbe02mgLY",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 574,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Endpoint Detection and Response (EDR)"
    ]
  },
  {
    "id": 2306,
    "title": "Detection and Response - Protection Plan Security Settings",
    "videoId": "tDGKflMPMAE",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 476,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection",
      "Cybersecurity",
      "RMM"
    ],
    "topics": [
      "Endpoint Detection and Response (EDR)",
      "Protection plan"
    ]
  },
  {
    "id": 2305,
    "title": "Detection and Response - EDR Incident Investigation",
    "videoId": "7sxCifJemWo",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 529,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Endpoint Detection and Response (EDR)"
    ]
  },
  {
    "id": 2304,
    "title": "Detection and Response - EDR Incidents Overview",
    "videoId": "VMSm6QGwXAo",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 516,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Endpoint Detection and Response (EDR)"
    ]
  },
  {
    "id": 2303,
    "title": "Detection and Response - Manage Security Alerts",
    "videoId": "acU8tQkdMh0",
    "publishedAt": "2024-07-10 21:00:00",
    "views": 528,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection",
      "Cybersecurity",
      "RMM"
    ],
    "topics": [
      "Endpoint Detection and Response (EDR)",
      "Alerts Management"
    ]
  },
  {
    "id": 2368,
    "title": "License Management and Activation",
    "videoId": "YD0FD9gAXuM",
    "publishedAt": "2024-07-03 21:00:00",
    "views": 581,
    "audiences": [
      "Businesses"
    ],
    "products": [
      "Cyber Protect"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Administration"
    ],
    "topics": [
      "Licensing, Billing, and Pricing"
    ]
  },
  {
    "id": 2367,
    "title": "License Registration and Renewal",
    "videoId": "P8k2d8e2dxY",
    "publishedAt": "2024-07-03 21:00:00",
    "views": 796,
    "audiences": [
      "Businesses"
    ],
    "products": [
      "Cyber Protect"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Administration"
    ],
    "topics": [
      "Licensing, Billing, and Pricing"
    ]
  },
  {
    "id": 2370,
    "title": "Dashboards, Activities and Reporting Overview",
    "videoId": "RImmjO-PEaQ",
    "publishedAt": "2024-07-02 21:00:00",
    "views": 995,
    "audiences": [
      "Businesses"
    ],
    "products": [
      "Cyber Protect"
    ],
    "purposes": [
      "Onboarding",
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Dashboards and Reporting"
    ]
  },
  {
    "id": 2369,
    "title": "Management Servers – On-Premises Management Server Deployment",
    "videoId": "hVZPOeekmwc",
    "publishedAt": "2024-07-02 21:00:00",
    "views": 884,
    "audiences": [
      "Businesses"
    ],
    "products": [
      "Cyber Protect"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Deployment"
    ],
    "topics": [
      "Product Setup"
    ]
  },
  {
    "id": 2311,
    "title": "License Overview",
    "videoId": "oqnl5aA2F98",
    "publishedAt": "2024-07-01 21:00:00",
    "views": 502,
    "audiences": [
      "Businesses"
    ],
    "products": [
      "Cyber Protect"
    ],
    "purposes": [
      "Onboarding",
      "Overview"
    ],
    "capabilities": [
      "Administration"
    ],
    "topics": [
      "Licensing, Billing, and Pricing"
    ]
  },
  {
    "id": 2310,
    "title": "Starting a Trial",
    "videoId": "fKwnJEIG-HY",
    "publishedAt": "2024-07-01 21:00:00",
    "views": 1517,
    "audiences": [
      "Businesses"
    ],
    "products": [
      "Cyber Protect"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Administration"
    ],
    "topics": [
      "Trial Management"
    ]
  },
  {
    "id": 2309,
    "title": "Creating Acronis Account",
    "videoId": "QEW7u8UShVo",
    "publishedAt": "2024-07-01 21:00:00",
    "views": 713,
    "audiences": [
      "Businesses"
    ],
    "products": [
      "Cyber Protect"
    ],
    "purposes": [
      "Onboarding",
      "How-to"
    ],
    "capabilities": [
      "Administration"
    ],
    "topics": [
      "Account Management"
    ]
  },
  {
    "id": 2366,
    "title": "Acronis RMM - Patch Management in a Protection Plan",
    "videoId": "wUYXs95dmCY",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 558,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection",
      "RMM"
    ],
    "topics": [
      "Protection plan",
      "Patch Management"
    ]
  },
  {
    "id": 2365,
    "title": "Converting a Backup to a Virtual Machine",
    "videoId": "Dw7zI00JF2s",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 960,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Restore and Recovery"
    ]
  },
  {
    "id": 2364,
    "title": "Acronis RMM - Patch Management Settings",
    "videoId": "-OUNsY1JRrw",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 412,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Patch Management"
    ]
  },
  {
    "id": 2363,
    "title": "Acronis RMM - Remote Desktop Plans and Settings",
    "videoId": "PeANKWQqNUI",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 442,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Remote Management and Assistance"
    ]
  },
  {
    "id": 2362,
    "title": "Acronis RMM - Software Inventory",
    "videoId": "3f_sB2DuwHk",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 684,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Software Deployment and Inventory"
    ]
  },
  {
    "id": 2361,
    "title": "Acronis Backup - Cleanup Plans",
    "videoId": "xNSisOVzy-o",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 633,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Operations"
    ]
  },
  {
    "id": 2360,
    "title": "Acronis Backup - Backup Validation",
    "videoId": "aGd70PHpjBI",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 918,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Operations"
    ]
  },
  {
    "id": 2359,
    "title": "Acronis Backup - Backup Replication",
    "videoId": "6EZ6Mt0DECQ",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 541,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Operations"
    ]
  },
  {
    "id": 2358,
    "title": "Acronis Backup - How to Create a Backup Scanning Plan",
    "videoId": "gzbbyqzZJFI",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 512,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "How-to"
    ],
    "capabilities": [
      "Data Protection"
    ],
    "topics": [
      "Backup Operations"
    ]
  },
  {
    "id": 2357,
    "title": "Acronis RMM - Script Repository",
    "videoId": "nffj-4F_wzo",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 433,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM",
      "Automation & PSA"
    ],
    "topics": [
      "Scripting"
    ]
  },
  {
    "id": 2356,
    "title": "Acronis RMM - Monitoring Plans",
    "videoId": "6pvidIKj6Og",
    "publishedAt": "2024-06-30 21:00:00",
    "views": 579,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "RMM"
    ],
    "topics": [
      "Monitoring"
    ]
  },
  {
    "id": 2216,
    "title": "Ransomware Attack in Action",
    "videoId": "ycWtxaioS7s",
    "publishedAt": "2023-07-18 21:00:00",
    "views": 1859,
    "audiences": [
      "Service providers"
    ],
    "products": [
      "Cyber Protect Cloud"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Anti-Ransomware"
    ]
  },
  {
    "id": 356,
    "title": "Webinar: The Cost of Ransomware on Business",
    "videoId": "xV_yIUgc9Ag",
    "publishedAt": "2018-06-15 21:00:00",
    "views": 1120,
    "audiences": [
      "Businesses"
    ],
    "products": [
      "Cyber Protect"
    ],
    "purposes": [
      "Overview"
    ],
    "capabilities": [
      "Cybersecurity"
    ],
    "topics": [
      "Anti-Ransomware"
    ]
  },
  {
    "id": 111,
    "title": "How to Connect Mac and Mobile to Windows File Server",
    "videoId": "vVAPu1ez92w",
    "publishedAt": "2016-01-15 16:01:52",
    "views": 1077,
    "audiences": [
      "Businesses"
    ],
    "products": [
      "Files Connect"
    ],
    "purposes": [],
    "capabilities": [],
    "topics": [
      "File Sync and Share",
      "Remote Monitoring & Management (RMM)"
    ]
  }
] as const satisfies readonly AcronisDemoVideo[];
