import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  RouterLink
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/data/acronis-demo.data.ts
var ACRONIS_DEMO_VIDEOS = [
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
    "title": "Acronis True Image \u2013 How to Do a Backup",
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
    "title": "Acronis True Image \u2013 Product Overview",
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
    "title": "Acronis RMM - Device Sense\u2122",
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
    "title": "Acronis RMM - DevicePilot\u2122",
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
    "title": "File Sync & Share | Accessing Files \u2013 Browser, Sync, iOS/Android",
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
    "title": "Management Servers \u2013 On-Premises Management Server Deployment",
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
];

// src/app/pages/acronis-demo-center.page.ts
var _forTrack0 = ($index, $item) => $item.id;
function AcronisDemoCenterPage_For_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const audience_r1 = ctx.$implicit;
    \u0275\u0275property("value", audience_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(audience_r1);
  }
}
function AcronisDemoCenterPage_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r2 = ctx.$implicit;
    \u0275\u0275property("value", product_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r2);
  }
}
function AcronisDemoCenterPage_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const purpose_r3 = ctx.$implicit;
    \u0275\u0275property("value", purpose_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(purpose_r3);
  }
}
function AcronisDemoCenterPage_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const capability_r4 = ctx.$implicit;
    \u0275\u0275property("value", capability_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(capability_r4);
  }
}
function AcronisDemoCenterPage_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const topic_r5 = ctx.$implicit;
    \u0275\u0275property("value", topic_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(topic_r5);
  }
}
function AcronisDemoCenterPage_Conditional_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function AcronisDemoCenterPage_Conditional_73_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.clearFilters());
    });
    \u0275\u0275text(1, " Clear all filters ");
    \u0275\u0275elementEnd();
  }
}
function AcronisDemoCenterPage_Conditional_74_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 25);
  }
  if (rf & 2) {
    const video_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", video_r8.embedUrl, \u0275\u0275sanitizeResourceUrl)("title", video_r8.title);
  }
}
function AcronisDemoCenterPage_Conditional_74_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function AcronisDemoCenterPage_Conditional_74_For_2_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const video_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.playVideo(video_r8.videoId));
    });
    \u0275\u0275element(1, "img", 30)(2, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const video_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275attribute("aria-label", "Play " + video_r8.title);
    \u0275\u0275advance();
    \u0275\u0275property("src", video_r8.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", video_r8.title);
  }
}
function AcronisDemoCenterPage_Conditional_74_For_2_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const purpose_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(purpose_r10);
  }
}
function AcronisDemoCenterPage_Conditional_74_For_2_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(product_r11);
  }
}
function AcronisDemoCenterPage_Conditional_74_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const video_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(video_r8.capabilities[0] || video_r8.topics[0]);
  }
}
function AcronisDemoCenterPage_Conditional_74_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 22)(1, "div", 24);
    \u0275\u0275conditionalCreate(2, AcronisDemoCenterPage_Conditional_74_For_2_Conditional_2_Template, 1, 2, "iframe", 25)(3, AcronisDemoCenterPage_Conditional_74_For_2_Conditional_3_Template, 3, 3, "button", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 27)(5, "div", 28);
    \u0275\u0275repeaterCreate(6, AcronisDemoCenterPage_Conditional_74_For_2_For_7_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275repeaterCreate(8, AcronisDemoCenterPage_Conditional_74_For_2_For_9_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "h3");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, AcronisDemoCenterPage_Conditional_74_For_2_Conditional_12_Template, 2, 1, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const video_r8 = ctx.$implicit;
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r6.activeVideoId() === video_r8.videoId ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(video_r8.purposes.slice(0, 2));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(video_r8.products.slice(0, 1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r8.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(video_r8.capabilities.length || video_r8.topics.length ? 12 : -1);
  }
}
function AcronisDemoCenterPage_Conditional_74_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 29);
    \u0275\u0275listener("click", function AcronisDemoCenterPage_Conditional_74_Conditional_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.showMore());
    });
    \u0275\u0275text(2, " Show more videos ");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r6.visibleVideos().length, " of ", ctx_r6.filteredVideos().length);
  }
}
function AcronisDemoCenterPage_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, AcronisDemoCenterPage_Conditional_74_For_2_Template, 13, 3, "article", 22, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, AcronisDemoCenterPage_Conditional_74_Conditional_3_Template, 5, 2, "div", 23);
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r6.visibleVideos());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r6.hasMoreVideos() ? 3 : -1);
  }
}
function AcronisDemoCenterPage_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "h3");
    \u0275\u0275text(2, "No videos match these filters");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try a broader search or reset the selected filters.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 29);
    \u0275\u0275listener("click", function AcronisDemoCenterPage_Conditional_75_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.clearFilters());
    });
    \u0275\u0275text(6, "Reset filters");
    \u0275\u0275elementEnd()();
  }
}
var AcronisDemoCenterPage = class _AcronisDemoCenterPage {
  sanitizer = inject(DomSanitizer);
  pageSize = 12;
  searchTerm = signal("", ...ngDevMode ? [{ debugName: "searchTerm" }] : []);
  selectedAudience = signal("", ...ngDevMode ? [{ debugName: "selectedAudience" }] : []);
  selectedProduct = signal("", ...ngDevMode ? [{ debugName: "selectedProduct" }] : []);
  selectedPurpose = signal("", ...ngDevMode ? [{ debugName: "selectedPurpose" }] : []);
  selectedCapability = signal("", ...ngDevMode ? [{ debugName: "selectedCapability" }] : []);
  selectedTopic = signal("", ...ngDevMode ? [{ debugName: "selectedTopic" }] : []);
  sortMode = signal("recent", ...ngDevMode ? [{ debugName: "sortMode" }] : []);
  visibleCount = signal(this.pageSize, ...ngDevMode ? [{ debugName: "visibleCount" }] : []);
  activeVideoId = signal(null, ...ngDevMode ? [{ debugName: "activeVideoId" }] : []);
  videos = ACRONIS_DEMO_VIDEOS.map((video) => __spreadProps(__spreadValues({}, video), {
    thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
    embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&playsinline=1`)
  }));
  audiences = this.collectOptions("audiences");
  products = this.collectOptions("products");
  purposes = this.collectOptions("purposes");
  capabilities = this.collectOptions("capabilities");
  topics = this.collectOptions("topics");
  filteredVideos = computed(() => {
    const search = this.searchTerm().trim().toLocaleLowerCase();
    const audience = this.selectedAudience();
    const product = this.selectedProduct();
    const purpose = this.selectedPurpose();
    const capability = this.selectedCapability();
    const topic = this.selectedTopic();
    const results = this.videos.filter((video) => {
      const searchableText = [
        video.title,
        ...video.audiences,
        ...video.products,
        ...video.purposes,
        ...video.capabilities,
        ...video.topics
      ].join(" ").toLocaleLowerCase();
      return (!search || searchableText.includes(search)) && (!audience || video.audiences.includes(audience)) && (!product || video.products.includes(product)) && (!purpose || video.purposes.includes(purpose)) && (!capability || video.capabilities.includes(capability)) && (!topic || video.topics.includes(topic));
    });
    return [...results].sort((left, right) => this.sortMode() === "popular" ? right.views - left.views : right.publishedAt.localeCompare(left.publishedAt));
  }, ...ngDevMode ? [{ debugName: "filteredVideos" }] : []);
  visibleVideos = computed(() => this.filteredVideos().slice(0, this.visibleCount()), ...ngDevMode ? [{ debugName: "visibleVideos" }] : []);
  hasMoreVideos = computed(() => this.visibleCount() < this.filteredVideos().length, ...ngDevMode ? [{ debugName: "hasMoreVideos" }] : []);
  filtersAreActive = computed(() => Boolean(this.searchTerm()) || Boolean(this.selectedAudience()) || Boolean(this.selectedProduct()) || Boolean(this.selectedPurpose()) || Boolean(this.selectedCapability()) || Boolean(this.selectedTopic()), ...ngDevMode ? [{ debugName: "filtersAreActive" }] : []);
  constructor() {
    inject(SeoService).set("Acronis Demo Center | Product Videos | XcellHost", "Watch the complete Acronis video demo catalog for backup, disaster recovery, cybersecurity, endpoint management and home protection.", "/acronis-demo-center/");
  }
  setSearch(value) {
    this.searchTerm.set(value);
    this.resetResults();
  }
  setAudience(value) {
    this.selectedAudience.set(value);
    this.resetResults();
  }
  setProduct(value) {
    this.selectedProduct.set(value);
    this.resetResults();
  }
  setPurpose(value) {
    this.selectedPurpose.set(value);
    this.resetResults();
  }
  setCapability(value) {
    this.selectedCapability.set(value);
    this.resetResults();
  }
  setTopic(value) {
    this.selectedTopic.set(value);
    this.resetResults();
  }
  setSort(value) {
    this.sortMode.set(value === "popular" ? "popular" : "recent");
    this.resetResults();
  }
  playVideo(videoId) {
    this.activeVideoId.set(videoId);
  }
  showMore() {
    this.visibleCount.update((count) => count + this.pageSize);
  }
  clearFilters() {
    this.searchTerm.set("");
    this.selectedAudience.set("");
    this.selectedProduct.set("");
    this.selectedPurpose.set("");
    this.selectedCapability.set("");
    this.selectedTopic.set("");
    this.resetResults();
  }
  resetResults() {
    this.visibleCount.set(this.pageSize);
    this.activeVideoId.set(null);
  }
  collectOptions(key) {
    return [...new Set(ACRONIS_DEMO_VIDEOS.flatMap((video) => video[key]))].sort((a, b) => a.localeCompare(b));
  }
  static \u0275fac = function AcronisDemoCenterPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AcronisDemoCenterPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcronisDemoCenterPage, selectors: [["xh-acronis-demo-center-page"]], decls: 76, vars: 9, consts: [[1, "acronis-demo-page"], [1, "acronis-demo-wrap"], ["aria-label", "Breadcrumb", 1, "acronis-demo-breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], ["id", "acronis-results", "aria-labelledby", "acronis-results-title", 1, "acronis-catalog"], [1, "acronis-catalog-toolbar"], [1, "acronis-demo-eyebrow"], ["id", "acronis-results-title"], [1, "acronis-sort"], [3, "change", "value"], ["value", "recent"], ["value", "popular"], [1, "acronis-filters"], [1, "acronis-search"], ["type", "search", "placeholder", "Search by product, feature or topic", 3, "input", "value"], ["value", ""], [3, "value"], ["type", "button", 1, "acronis-clear-filters"], [1, "acronis-empty-state"], ["type", "button", 1, "acronis-clear-filters", 3, "click"], [1, "acronis-video-grid"], [1, "acronis-video-card"], [1, "acronis-show-more"], [1, "acronis-video-media"], ["allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 3, "src", "title"], ["type", "button"], [1, "acronis-video-copy"], [1, "acronis-video-tags"], ["type", "button", 3, "click"], ["loading", "lazy", 3, "src", "alt"], ["aria-hidden", "true", 1, "acronis-play"]], template: function AcronisDemoCenterPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "div", 1)(2, "nav", 2)(3, "a", 3);
      \u0275\u0275text(4, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span");
      \u0275\u0275text(8, "Experience Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 4);
      \u0275\u0275text(10, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Acronis Demo Center");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "section", 5)(14, "div", 6)(15, "div")(16, "span", 7);
      \u0275\u0275text(17, "Videos and product demos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "h1", 8);
      \u0275\u0275text(19, "Acronis Demo Center");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "label", 9)(21, "span");
      \u0275\u0275text(22, "Sort by");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "select", 10);
      \u0275\u0275listener("change", function AcronisDemoCenterPage_Template_select_change_23_listener($event) {
        return ctx.setSort($event.target.value);
      });
      \u0275\u0275elementStart(24, "option", 11);
      \u0275\u0275text(25, "Recent");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "option", 12);
      \u0275\u0275text(27, "Popular");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(28, "div", 13)(29, "label", 14)(30, "span");
      \u0275\u0275text(31, "Search videos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 15);
      \u0275\u0275listener("input", function AcronisDemoCenterPage_Template_input_input_32_listener($event) {
        return ctx.setSearch($event.target.value);
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "label")(34, "span");
      \u0275\u0275text(35, "Audience");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "select", 10);
      \u0275\u0275listener("change", function AcronisDemoCenterPage_Template_select_change_36_listener($event) {
        return ctx.setAudience($event.target.value);
      });
      \u0275\u0275elementStart(37, "option", 16);
      \u0275\u0275text(38, "All audiences");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(39, AcronisDemoCenterPage_For_40_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "label")(42, "span");
      \u0275\u0275text(43, "Product");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "select", 10);
      \u0275\u0275listener("change", function AcronisDemoCenterPage_Template_select_change_44_listener($event) {
        return ctx.setProduct($event.target.value);
      });
      \u0275\u0275elementStart(45, "option", 16);
      \u0275\u0275text(46, "All products");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(47, AcronisDemoCenterPage_For_48_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "label")(50, "span");
      \u0275\u0275text(51, "Purpose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "select", 10);
      \u0275\u0275listener("change", function AcronisDemoCenterPage_Template_select_change_52_listener($event) {
        return ctx.setPurpose($event.target.value);
      });
      \u0275\u0275elementStart(53, "option", 16);
      \u0275\u0275text(54, "All purposes");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(55, AcronisDemoCenterPage_For_56_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "label")(58, "span");
      \u0275\u0275text(59, "Capability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "select", 10);
      \u0275\u0275listener("change", function AcronisDemoCenterPage_Template_select_change_60_listener($event) {
        return ctx.setCapability($event.target.value);
      });
      \u0275\u0275elementStart(61, "option", 16);
      \u0275\u0275text(62, "All capabilities");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(63, AcronisDemoCenterPage_For_64_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "label")(66, "span");
      \u0275\u0275text(67, "Topic");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "select", 10);
      \u0275\u0275listener("change", function AcronisDemoCenterPage_Template_select_change_68_listener($event) {
        return ctx.setTopic($event.target.value);
      });
      \u0275\u0275elementStart(69, "option", 16);
      \u0275\u0275text(70, "All topics");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(71, AcronisDemoCenterPage_For_72_Template, 2, 2, "option", 17, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(73, AcronisDemoCenterPage_Conditional_73_Template, 2, 0, "button", 18);
      \u0275\u0275conditionalCreate(74, AcronisDemoCenterPage_Conditional_74_Template, 4, 1)(75, AcronisDemoCenterPage_Conditional_75_Template, 7, 0, "div", 19);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(23);
      \u0275\u0275property("value", ctx.sortMode());
      \u0275\u0275advance(9);
      \u0275\u0275property("value", ctx.searchTerm());
      \u0275\u0275advance(4);
      \u0275\u0275property("value", ctx.selectedAudience());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.audiences);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.selectedProduct());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.products);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.selectedPurpose());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.purposes);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.selectedCapability());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.capabilities);
      \u0275\u0275advance(5);
      \u0275\u0275property("value", ctx.selectedTopic());
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.topics);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.filtersAreActive() ? 73 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.visibleVideos().length ? 74 : 75);
    }
  }, dependencies: [RouterLink], styles: ['\n\n.acronis-demo-page[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  padding: 38px 24px 88px;\n  background:\n    linear-gradient(\n      180deg,\n      #edf5ff 0,\n      #fff 430px);\n  color: #082b5d;\n}\n.acronis-demo-wrap[_ngcontent-%COMP%] {\n  max-width: 1310px;\n  margin: 0 auto;\n}\n.acronis-demo-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex-wrap: wrap;\n  margin-bottom: 27px;\n  color: #607393;\n  font-size: 12px;\n}\n.acronis-demo-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #145fca;\n  text-decoration: none;\n}\n.acronis-demo-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.acronis-demo-eyebrow[_ngcontent-%COMP%], \n.acronis-demo-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  color: #1565d8;\n  font: 700 11px/1.4 var(--mono,monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.acronis-catalog[_ngcontent-%COMP%] {\n  scroll-margin-top: 90px;\n}\n.acronis-catalog-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 22px;\n}\n.acronis-catalog-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #082b5d;\n  font: 750 clamp(27px, 3vw, 36px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -.025em;\n}\n.acronis-sort[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.acronis-sort[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #607393;\n  font-size: 12px;\n  font-weight: 700;\n}\n.acronis-sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 120px;\n}\n.acronis-filters[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 2fr repeat(5, 1fr);\n  gap: 10px;\n  padding: 16px;\n  border: 1px solid #d7e3f3;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 9px 25px rgba(8, 43, 94, .06);\n}\n.acronis-filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.acronis-sort[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.acronis-filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 6px;\n  color: #3b5679;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n.acronis-filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.acronis-filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.acronis-sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 42px;\n  padding: 0 11px;\n  border: 1px solid #cbd9ec;\n  border-radius: 8px;\n  background: #fff;\n  color: #173b68;\n  font: 600 12px/1 var(--body,sans-serif);\n  outline: none;\n}\n.acronis-filters[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.acronis-filters[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.acronis-sort[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  border-color: #1565d8;\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.acronis-clear-filters[_ngcontent-%COMP%] {\n  margin: 13px 0 2px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #1565d8;\n  font-size: 12px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.acronis-video-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 26px 18px;\n  margin-top: 25px;\n}\n.acronis-video-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #d7e3f3;\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 8px 23px rgba(8, 43, 94, .07);\n  transition: transform .2s, box-shadow .2s;\n}\n.acronis-video-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 33px rgba(8, 43, 94, .12);\n}\n.acronis-video-media[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  background: #051a3b;\n}\n.acronis-video-media[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%], \n.acronis-video-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.acronis-video-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.acronis-video-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0;\n  background: #051a3b;\n  cursor: pointer;\n}\n.acronis-video-media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.acronis-video-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(3, 24, 56, .04),\n      rgba(3, 24, 56, .2));\n  transition: background .2s;\n}\n.acronis-video-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:after {\n  background: rgba(3, 24, 56, .08);\n}\n.acronis-play[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: #0874e8;\n  box-shadow: 0 8px 24px rgba(0, 62, 143, .35);\n  transform: translate(-50%, -50%);\n  transition: transform .2s;\n}\n.acronis-play[_ngcontent-%COMP%]:after {\n  content: "";\n  position: absolute;\n  top: 21px;\n  left: 28px;\n  border-top: 13px solid transparent;\n  border-bottom: 13px solid transparent;\n  border-left: 19px solid #fff;\n}\n.acronis-video-media[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   .acronis-play[_ngcontent-%COMP%] {\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.acronis-video-copy[_ngcontent-%COMP%] {\n  padding: 16px 17px 19px;\n}\n.acronis-video-tags[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  min-height: 21px;\n  margin-bottom: 9px;\n}\n.acronis-video-tags[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  max-width: 100%;\n  overflow: hidden;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: #edf4ff;\n  color: #1760c8;\n  font: 700 9px/1.35 var(--mono,monospace);\n  letter-spacing: .06em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.acronis-video-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #082b5d;\n  font: 750 17px/1.38 var(--disp,sans-serif);\n}\n.acronis-video-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 9px 0 0;\n  color: #607393;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.acronis-show-more[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 34px;\n}\n.acronis-show-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.acronis-empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 12px 19px;\n  border: 0;\n  border-radius: 9px;\n  background: #1565d8;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.acronis-show-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  color: #cfe2ff;\n  font-size: 11px;\n}\n.acronis-empty-state[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  padding: 54px 24px;\n  border: 1px dashed #b7cae5;\n  border-radius: 17px;\n  background: #f7faff;\n  text-align: center;\n}\n.acronis-empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  font: 750 21px/1.3 var(--disp,sans-serif);\n}\n.acronis-empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #607393;\n  font-size: 13px;\n}\n.acronis-demo-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  margin-top: 76px;\n  padding: 34px 38px;\n  border-radius: 21px;\n  background:\n    linear-gradient(\n      135deg,\n      #061f46,\n      #0b3d82);\n  color: #fff;\n}\n.acronis-demo-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #7fb4ff;\n}\n.acronis-demo-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #fff;\n  font: 750 clamp(23px, 3vw, 31px)/1.25 var(--disp,sans-serif);\n}\n.acronis-demo-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0;\n  color: #cfe0f7;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.acronis-demo-cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  flex: none;\n  padding: 12px 18px;\n  border-radius: 9px;\n  background: #ff7a10;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 750;\n  text-decoration: none;\n}\n@media (max-width: 1120px) {\n  .acronis-filters[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .acronis-search[_ngcontent-%COMP%] {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 900px) {\n  .acronis-video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .acronis-demo-page[_ngcontent-%COMP%] {\n    padding: 25px 16px 60px;\n  }\n  .acronis-catalog-toolbar[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .acronis-sort[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .acronis-filters[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acronis-search[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .acronis-video-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .acronis-demo-cta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 27px 23px;\n  }\n}\n/*# sourceMappingURL=acronis-demo-center.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AcronisDemoCenterPage, [{
    type: Component,
    args: [{ selector: "xh-acronis-demo-center-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="acronis-demo-page">\r
  <div class="acronis-demo-wrap">\r
    <nav class="acronis-demo-breadcrumb" aria-label="Breadcrumb">\r
      <a routerLink="/">Home</a><span aria-hidden="true">/</span><span>Experience Center</span\r
      ><span aria-hidden="true">/</span><span>Acronis Demo Center</span>\r
    </nav>\r
\r
    <section class="acronis-catalog" id="acronis-results" aria-labelledby="acronis-results-title">\r
      <div class="acronis-catalog-toolbar">\r
        <div>\r
          <span class="acronis-demo-eyebrow">Videos and product demos</span>\r
          <h1 id="acronis-results-title">Acronis Demo Center</h1>\r
        </div>\r
        <label class="acronis-sort">\r
          <span>Sort by</span>\r
          <select [value]="sortMode()" (change)="setSort($any($event.target).value)">\r
            <option value="recent">Recent</option>\r
            <option value="popular">Popular</option>\r
          </select>\r
        </label>\r
      </div>\r
\r
      <div class="acronis-filters">\r
        <label class="acronis-search">\r
          <span>Search videos</span>\r
          <input\r
            type="search"\r
            placeholder="Search by product, feature or topic"\r
            [value]="searchTerm()"\r
            (input)="setSearch($any($event.target).value)"\r
          />\r
        </label>\r
\r
        <label>\r
          <span>Audience</span>\r
          <select [value]="selectedAudience()" (change)="setAudience($any($event.target).value)">\r
            <option value="">All audiences</option>\r
            @for (audience of audiences; track audience) {\r
              <option [value]="audience">{{ audience }}</option>\r
            }\r
          </select>\r
        </label>\r
\r
        <label>\r
          <span>Product</span>\r
          <select [value]="selectedProduct()" (change)="setProduct($any($event.target).value)">\r
            <option value="">All products</option>\r
            @for (product of products; track product) {\r
              <option [value]="product">{{ product }}</option>\r
            }\r
          </select>\r
        </label>\r
\r
        <label>\r
          <span>Purpose</span>\r
          <select [value]="selectedPurpose()" (change)="setPurpose($any($event.target).value)">\r
            <option value="">All purposes</option>\r
            @for (purpose of purposes; track purpose) {\r
              <option [value]="purpose">{{ purpose }}</option>\r
            }\r
          </select>\r
        </label>\r
\r
        <label>\r
          <span>Capability</span>\r
          <select [value]="selectedCapability()" (change)="setCapability($any($event.target).value)">\r
            <option value="">All capabilities</option>\r
            @for (capability of capabilities; track capability) {\r
              <option [value]="capability">{{ capability }}</option>\r
            }\r
          </select>\r
        </label>\r
\r
        <label>\r
          <span>Topic</span>\r
          <select [value]="selectedTopic()" (change)="setTopic($any($event.target).value)">\r
            <option value="">All topics</option>\r
            @for (topic of topics; track topic) {\r
              <option [value]="topic">{{ topic }}</option>\r
            }\r
          </select>\r
        </label>\r
      </div>\r
\r
      @if (filtersAreActive()) {\r
        <button class="acronis-clear-filters" type="button" (click)="clearFilters()">\r
          Clear all filters\r
        </button>\r
      }\r
\r
      @if (visibleVideos().length) {\r
        <div class="acronis-video-grid">\r
          @for (video of visibleVideos(); track video.id) {\r
            <article class="acronis-video-card">\r
              <div class="acronis-video-media">\r
                @if (activeVideoId() === video.videoId) {\r
                  <iframe\r
                    [src]="video.embedUrl"\r
                    [title]="video.title"\r
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"\r
                    referrerpolicy="strict-origin-when-cross-origin"\r
                    allowfullscreen\r
                  ></iframe>\r
                } @else {\r
                  <button type="button" (click)="playVideo(video.videoId)" [attr.aria-label]="'Play ' + video.title">\r
                    <img [src]="video.thumbnailUrl" [alt]="video.title" loading="lazy" />\r
                    <span class="acronis-play" aria-hidden="true"></span>\r
                  </button>\r
                }\r
              </div>\r
              <div class="acronis-video-copy">\r
                <div class="acronis-video-tags">\r
                  @for (purpose of video.purposes.slice(0, 2); track purpose) {\r
                    <span>{{ purpose }}</span>\r
                  }\r
                  @for (product of video.products.slice(0, 1); track product) {\r
                    <span>{{ product }}</span>\r
                  }\r
                </div>\r
                <h3>{{ video.title }}</h3>\r
                @if (video.capabilities.length || video.topics.length) {\r
                  <p>{{ video.capabilities[0] || video.topics[0] }}</p>\r
                }\r
              </div>\r
            </article>\r
          }\r
        </div>\r
\r
        @if (hasMoreVideos()) {\r
          <div class="acronis-show-more">\r
            <button type="button" (click)="showMore()">\r
              Show more videos\r
              <span>{{ visibleVideos().length }} of {{ filteredVideos().length }}</span>\r
            </button>\r
          </div>\r
        }\r
      } @else {\r
        <div class="acronis-empty-state">\r
          <h3>No videos match these filters</h3>\r
          <p>Try a broader search or reset the selected filters.</p>\r
          <button type="button" (click)="clearFilters()">Reset filters</button>\r
        </div>\r
      }\r
    </section>\r
\r
  </div>\r
</main>\r
`, styles: ['/* src/app/pages/acronis-demo-center.page.css */\n.acronis-demo-page {\n  min-height: 70vh;\n  padding: 38px 24px 88px;\n  background:\n    linear-gradient(\n      180deg,\n      #edf5ff 0,\n      #fff 430px);\n  color: #082b5d;\n}\n.acronis-demo-wrap {\n  max-width: 1310px;\n  margin: 0 auto;\n}\n.acronis-demo-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  flex-wrap: wrap;\n  margin-bottom: 27px;\n  color: #607393;\n  font-size: 12px;\n}\n.acronis-demo-breadcrumb a {\n  color: #145fca;\n  text-decoration: none;\n}\n.acronis-demo-breadcrumb a:hover {\n  text-decoration: underline;\n}\n.acronis-demo-eyebrow,\n.acronis-demo-cta > div > span {\n  display: block;\n  margin-bottom: 10px;\n  color: #1565d8;\n  font: 700 11px/1.4 var(--mono,monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.acronis-catalog {\n  scroll-margin-top: 90px;\n}\n.acronis-catalog-toolbar {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 22px;\n}\n.acronis-catalog-toolbar h1 {\n  margin: 0;\n  color: #082b5d;\n  font: 750 clamp(27px, 3vw, 36px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -.025em;\n}\n.acronis-sort {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.acronis-sort span {\n  color: #607393;\n  font-size: 12px;\n  font-weight: 700;\n}\n.acronis-sort select {\n  width: 120px;\n}\n.acronis-filters {\n  display: grid;\n  grid-template-columns: 2fr repeat(5, 1fr);\n  gap: 10px;\n  padding: 16px;\n  border: 1px solid #d7e3f3;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 9px 25px rgba(8, 43, 94, .06);\n}\n.acronis-filters label,\n.acronis-sort {\n  min-width: 0;\n}\n.acronis-filters label > span {\n  display: block;\n  margin: 0 0 6px;\n  color: #3b5679;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .04em;\n  text-transform: uppercase;\n}\n.acronis-filters input,\n.acronis-filters select,\n.acronis-sort select {\n  width: 100%;\n  height: 42px;\n  padding: 0 11px;\n  border: 1px solid #cbd9ec;\n  border-radius: 8px;\n  background: #fff;\n  color: #173b68;\n  font: 600 12px/1 var(--body,sans-serif);\n  outline: none;\n}\n.acronis-filters input:focus,\n.acronis-filters select:focus,\n.acronis-sort select:focus {\n  border-color: #1565d8;\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.acronis-clear-filters {\n  margin: 13px 0 2px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: #1565d8;\n  font-size: 12px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.acronis-video-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 26px 18px;\n  margin-top: 25px;\n}\n.acronis-video-card {\n  overflow: hidden;\n  border: 1px solid #d7e3f3;\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 8px 23px rgba(8, 43, 94, .07);\n  transition: transform .2s, box-shadow .2s;\n}\n.acronis-video-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 15px 33px rgba(8, 43, 94, .12);\n}\n.acronis-video-media {\n  aspect-ratio: 16/9;\n  background: #051a3b;\n}\n.acronis-video-media iframe,\n.acronis-video-media button,\n.acronis-video-media img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.acronis-video-media button {\n  position: relative;\n  padding: 0;\n  background: #051a3b;\n  cursor: pointer;\n}\n.acronis-video-media img {\n  object-fit: cover;\n}\n.acronis-video-media button:after {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(3, 24, 56, .04),\n      rgba(3, 24, 56, .2));\n  transition: background .2s;\n}\n.acronis-video-media button:hover:after {\n  background: rgba(3, 24, 56, .08);\n}\n.acronis-play {\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  left: 50%;\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: #0874e8;\n  box-shadow: 0 8px 24px rgba(0, 62, 143, .35);\n  transform: translate(-50%, -50%);\n  transition: transform .2s;\n}\n.acronis-play:after {\n  content: "";\n  position: absolute;\n  top: 21px;\n  left: 28px;\n  border-top: 13px solid transparent;\n  border-bottom: 13px solid transparent;\n  border-left: 19px solid #fff;\n}\n.acronis-video-media button:hover .acronis-play {\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.acronis-video-copy {\n  padding: 16px 17px 19px;\n}\n.acronis-video-tags {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  min-height: 21px;\n  margin-bottom: 9px;\n}\n.acronis-video-tags span {\n  max-width: 100%;\n  overflow: hidden;\n  padding: 3px 8px;\n  border-radius: 999px;\n  background: #edf4ff;\n  color: #1760c8;\n  font: 700 9px/1.35 var(--mono,monospace);\n  letter-spacing: .06em;\n  text-overflow: ellipsis;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.acronis-video-copy h3 {\n  margin: 0;\n  color: #082b5d;\n  font: 750 17px/1.38 var(--disp,sans-serif);\n}\n.acronis-video-copy p {\n  margin: 9px 0 0;\n  color: #607393;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.acronis-show-more {\n  display: flex;\n  justify-content: center;\n  margin-top: 34px;\n}\n.acronis-show-more button,\n.acronis-empty-state button {\n  padding: 12px 19px;\n  border: 0;\n  border-radius: 9px;\n  background: #1565d8;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 750;\n  cursor: pointer;\n}\n.acronis-show-more button span {\n  margin-left: 8px;\n  color: #cfe2ff;\n  font-size: 11px;\n}\n.acronis-empty-state {\n  margin-top: 25px;\n  padding: 54px 24px;\n  border: 1px dashed #b7cae5;\n  border-radius: 17px;\n  background: #f7faff;\n  text-align: center;\n}\n.acronis-empty-state h3 {\n  margin: 0 0 7px;\n  font: 750 21px/1.3 var(--disp,sans-serif);\n}\n.acronis-empty-state p {\n  margin: 0 0 18px;\n  color: #607393;\n  font-size: 13px;\n}\n.acronis-demo-cta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  margin-top: 76px;\n  padding: 34px 38px;\n  border-radius: 21px;\n  background:\n    linear-gradient(\n      135deg,\n      #061f46,\n      #0b3d82);\n  color: #fff;\n}\n.acronis-demo-cta > div > span {\n  color: #7fb4ff;\n}\n.acronis-demo-cta h2 {\n  margin: 0 0 8px;\n  color: #fff;\n  font: 750 clamp(23px, 3vw, 31px)/1.25 var(--disp,sans-serif);\n}\n.acronis-demo-cta p {\n  max-width: 720px;\n  margin: 0;\n  color: #cfe0f7;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.acronis-demo-cta > a {\n  flex: none;\n  padding: 12px 18px;\n  border-radius: 9px;\n  background: #ff7a10;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 750;\n  text-decoration: none;\n}\n@media (max-width: 1120px) {\n  .acronis-filters {\n    grid-template-columns: repeat(3, 1fr);\n  }\n  .acronis-search {\n    grid-column: span 2;\n  }\n}\n@media (max-width: 900px) {\n  .acronis-video-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 640px) {\n  .acronis-demo-page {\n    padding: 25px 16px 60px;\n  }\n  .acronis-catalog-toolbar {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .acronis-sort {\n    width: 100%;\n  }\n  .acronis-filters {\n    grid-template-columns: 1fr;\n  }\n  .acronis-search {\n    grid-column: auto;\n  }\n  .acronis-video-grid {\n    grid-template-columns: 1fr;\n  }\n  .acronis-demo-cta {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 27px 23px;\n  }\n}\n/*# sourceMappingURL=acronis-demo-center.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcronisDemoCenterPage, { className: "AcronisDemoCenterPage", filePath: "src/app/pages/acronis-demo-center.page.ts", lineNumber: 23 });
})();
export {
  AcronisDemoCenterPage
};
//# sourceMappingURL=chunk-75XHOB3D.js.map
