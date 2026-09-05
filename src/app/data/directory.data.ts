/**
 * The full service catalogue — 205 services across 5 categories.
 * Add, remove or reword a service here and it updates the directory section,
 * site search, the chatbot index and the compare tool all at once.
 *
 * EDIT THIS FILE to change site content — no other file needs touching.
 */

import { DirectoryEntry } from './models';

export interface DirectoryCategory {
  name: string;
  /** the small grey count shown beside the heading */
  count: string;
  /** the one-line description under the heading */
  sub: string;
}

export const DIRECTORY_CATEGORIES: DirectoryCategory[] = [
  {
    "name": "Cloud",
    "count": "60+ services",
    "sub": "Infrastructure, SMB cloud, data protection, productivity, desktop, networking, ERP, managed & migration"
  },
  {
    "name": "Security",
    "count": "55+ services",
    "sub": "Testing, risk, operations, consulting, identity, training, incident response & products"
  },
  {
    "name": "Digital Trust",
    "count": "35+ certificates",
    "sub": "SSL/TLS, PKI, code & email signing, certificate management, e-signature & DSC"
  },
  {
    "name": "Web Presence",
    "count": "25+ services",
    "sub": "Domains, hosting & digital marketing"
  },
  {
    "name": "Solutions",
    "count": "By vendor & technology",
    "sub": "Explore solutions by vendor, technology, industry, use case or capability"
  }
];

export const DIRECTORY: DirectoryEntry[] = [
  {
    "name": "Tally on Cloud",
    "desc": "Access Tally from anywhere, anytime, any device — from ₹499/user/mo",
    "cat": "Cloud",
    "group": "SMB Cloud"
  },
  {
    "name": "SMB Cyber Security Appliance",
    "desc": "All-in-one security device designed for SMBs — new launch",
    "cat": "Cloud",
    "group": "SMB Cloud",
    "heroImage": "/assets/images/hero-smb-cyber-security-appliance.png"
  },
 {
    "name": "WhatsApp SMB",
    "desc": "Official WhatsApp Business API for SMB sales, support and automation",
    "cat": "Cloud",
    "group": "SMB Cloud",
    "heroMessages": [
      "Turn WhatsApp conversations into business",
      "Automate campaigns, support and follow-ups",
      "Give every agent one shared team inbox",
      "Connect WhatsApp with the tools you already use"
    ],
    "heroPoints": [
      "Official WhatsApp Business API",
      "Multi-agent team inbox",
      "Campaign broadcasts and scheduling",
      "No-code chatbot automation",
      "CRM and commerce integrations",
      "Consent-led customer engagement"
    ]
  },
  

    {
    "name": "Cloud Drive",
    "desc": "Share and access files online with secure collaboration across devices",
    "cat": "Cloud",
    "group": "SMB Cloud"
  },
  {
    "name": "Remote Monitoring & Mgmt (RMM)",
    "desc": "Manage, monitor, and secure all your IT endpoints with a powerful RMM solution.",
    "cat": "Cloud",
    "group": "SMB Cloud",
    "heroImage": "/assets/images/hero-rmm.png",
    "heroMessages": [
      "Real-time monitoring",
      "Ensures systems stay healthy",
      "Issues are resolved proactively"
    ],
    "heroPoints": [
      "Monitor endpoints and servers in real-time",
      "Centralized Web-Based Admin Console",
      "Automated patch management and updates",
      "Access and control devices anytime"
    ],
    "featureSpotlight": {
      "title": "Acronis RMM software helps Customer deliver better IT management",
      "body": "Enhance client satisfaction by delivering superior IT administration and monitoring services while improving security posture for both endpoints and Microsoft 365. Boost technician performance with AI-driven automation of IT management.",
      "image": "/assets/images/rmm-patches.webp"
    },
    "featureDetail": {
      "title": "Deploy high-performance and secure remote desktop and assistance at no additional cost",
      "bullets": [
        "Simplify management, reduce training and other costs — Remote desktop and assistance is built-in, uses the same Acronis agent and doesn't require additional licenses.",
        "Chat with client users — Communicate directly through the Cyber Protection console for faster support and issue resolution.",
        "Perform remote actions such as restarting the system, putting the device to sleep and emptying the recycle bin.",
        "Provide instant support and connection to any endpoint, including those without an installed agent, through Quick Assist.",
        "Enable remote access to quarantined machines affected by a cyberattack right from the XDR interface for immediate investigation."
      ],
      "image": "/assets/images/rmm-security-posture.webp"
    },
    "frameworkSection": {
      "title": "FRAMEWORK FOR EFFECTIVE CYBER HYGIENE",
      "subtitle": "powered by Acronis RMM A continuous operating discipline to monitor, patch, protect, respond, recover, and report.",
      "image": "/assets/images/rmm-cyber-hygiene-framework.png",
      "secondaryImage": "/assets/images/rmm-cyber-hygiene-scorecard.png",
      "tertiaryImage": "/assets/images/rmm-implementation-roadmap.png"
    },
    "advancedSection": {
      "title": "Acronis Advanced RMM",
      "tagline": "Manage. Monitor. Protect. All from One Platform.",
      "body": "Acronis Advanced RMM empowers MSPs and IT teams to remotely monitor, manage, and secure endpoints, automate tasks, and deliver exceptional IT services.",
      "image": "/assets/images/rmm-advanced-platform.png",
      "secondaryImage": "/assets/images/rmm-problem-solution.png",
      "tertiaryImage": "/assets/images/rmm-capabilities-benefits.png"
    },
    "benefitGrid": [
      { "title": "Discover Devices", "icon": "◉" },
      { "title": "Other Asset Management Features", "icon": "⚙" },
      { "title": "Vulnerability Assessment & Patch Management", "icon": "▧" },
      { "title": "System & Hardware Monitoring", "icon": "⌘" },
      { "title": "AI-assisted Scripting", "icon": "AI" },
      { "title": "Deploy Software With DeployPilot", "icon": "↥" },
      { "title": "Remote Desktop & Assistance", "icon": "▣" },
      { "title": "Microsoft 365 Security Posture Management", "icon": "♙" },
      { "title": "Asset Management", "icon": "▤" },
      { "title": "Security & Compliance", "icon": "◇" },
      { "title": "Monitoring & Response", "icon": "⚙" },
      { "title": "Remote Support", "icon": "◎" }
    ],
    "faqs": [
      [
        "What is Remote Monitoring & Management (RMM)?",
        "Remote Monitoring & Management (RMM) is an IT management solution that enables businesses and Managed Service Providers (MSPs) to remotely monitor, manage, maintain, and secure IT infrastructure including servers, endpoints, applications, networks, and devices from a centralized platform."
      ],
      [
        "Why does a business need an RMM solution?",
        "Modern businesses depend on multiple IT systems, endpoints, and cloud applications. RMM helps organizations proactively identify issues, automate maintenance tasks, monitor system health, deploy updates, and reduce downtime before problems impact business operations."
      ],
      [
        "What problems does RMM solve?",
        "RMM helps solve common IT challenges such as: lack of real-time visibility into IT infrastructure; unexpected system failures and downtime; manual monitoring and maintenance efforts; delayed patching and software updates; limited IT support resources; and difficulty managing remote employees and multiple locations."
      ],
      [
        "How does RMM improve IT operations?",
        "RMM provides continuous monitoring of devices, servers, applications, and networks. IT teams can detect performance issues early, automate routine tasks, resolve problems remotely, and maintain a healthier IT environment."
      ],
      [
        "What devices can be monitored using RMM?",
        "RMM can monitor and manage various IT assets including: Windows and Linux servers; desktops and laptops; virtual machines; network devices; remote employee endpoints; business applications; and cloud workloads."
      ],
      [
        "Can RMM help reduce downtime?",
        "Yes. RMM uses proactive monitoring, alerts, automation, and remote troubleshooting capabilities to identify potential issues before they become critical failures, helping businesses improve uptime and availability."
      ],
      [
        "Does RMM support remote troubleshooting?",
        "Yes. IT teams can remotely access systems, troubleshoot issues, execute commands, manage services, and resolve incidents without physically visiting user locations."
      ],
      [
        "How does RMM help with patch management?",
        "RMM automates patch monitoring and deployment for operating systems and applications. This helps organizations maintain updated systems, reduce vulnerabilities, and improve security posture."
      ],
      [
        "Can RMM monitor server performance?",
        "Yes. RMM continuously monitors critical server parameters such as CPU utilization, memory usage, disk space, network performance, running services, and system health. Alerts can be configured when performance thresholds are exceeded."
      ],
      [
        "How does RMM support cybersecurity?",
        "RMM strengthens security by helping organizations identify vulnerable systems, apply security patches, monitor endpoint health, detect suspicious activities, maintain compliance requirements, and improve IT visibility."
      ]
    ]
  },

    {
    "name": "SMB Cloud Desktop",
    "desc": "Secure, scalable access to apps and data anytime, anywhere",
    "cat": "Cloud",
    "group": "SMB Cloud"
  },
  {
     "name": "Acronis GenAI",
    "desc": "Monitors unauthorized consumer-grade AI apps on client endpoints",
    "cat": "Cloud",
    "group": "SMB Cloud"
   },
  {
    "name": "Cloud Backup ",
    "desc": "Store important data securely online, preventing loss from unexpected failures",
    "cat": "Cloud",
    "group": "SMB Cloud"
  },

  {
    "name": "Advanced Endpoint Security (EDR)",
    "desc": "Identify, protect, detect, respond and recover framework for endpoints",
    "cat": "Cloud",
    "group": "SMB Cloud"
  },
  {
    "name": "Acronis True Image",
    "desc": "Cyber protection and privacy tools for home users",
    "cat": "Cloud",
    "group": "SMB Cloud"
  },
  
  // 
 
  {
    "name": "Bare Metal Server",
    "desc": "High-performance single-tenant dedicated servers — from ₹8,264/mo",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "Performance Cloud",
    "desc": "Digital performance and security for demanding solutions — from ₹999/mo",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "GPU Cloud",
    "desc": "High-performance GPUs for ML and scientific computing — from ₹14,999/mo",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "Dedicated Private Cloud",
    "desc": "Flexible, rapid provisioning in a private computing environment",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "Global Cloud",
    "desc": "Fast, reliable global cloud for worldwide operations",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "Co-Location",
    "desc": "Control your environment in our Tier-4 datacenters",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "Hybrid Cloud",
    "desc": "Combine compute, storage and services across environments",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "Cloud Management Portal",
    "desc": "Centralized platform for cloud management and monitoring",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "Data as a Service",
    "desc": "On-demand data delivery to users and applications",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "Data Center Build Services",
    "desc": "Planning, design, construction and deployment of DC infrastructure",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "Cyber Frames",
    "desc": "Secure, AI-powered hyperconverged infrastructure (HCI) & IaaS",
    "cat": "Cloud",
    "group": "Cloud Infra"
  },
  {
    "name": "Cloud Backup",
    "desc": "Safeguard all your files with secure online data protection",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "Cloud Object Storage",
    "desc": "Store large amounts of unstructured data cost-effectively",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "Cloud Disaster Recovery",
    "desc": "Fully automated backup and recovery solution",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "Intelligent Backup",
    "desc": "Efficient, AI-driven backup for seamless data protection",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "Cloud Mobile Device Mgmt",
    "desc": "Tools for efficient device management",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "Microsoft 365 Backup",
    "desc": "Mailbox, SharePoint & OneDrive backups — best seller",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "Google Workspace Backup",
    "desc": "Secure your Gmail, Calendar, Contacts & Drive",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "Entra ID Backup",
    "desc": "Protect your digital identity securely",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "E-Mail Backup / Archiving",
    "desc": "Secure email backup and archiving — unlimited storage",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "Vortex SOC",
    "desc": "Unified SIEM, SOAR, UEBA and security operations suite",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "Vortex SEG",
    "desc": "Advanced email security, DLP and archival gateway",
    "cat": "Cloud",
    "group": "Cloud Data Protect"
  },
  {
    "name": "Business E-Mail",
    "desc": "Professional email services for business communication",
    "cat": "Cloud",
    "group": "Cloud Productivity"
  },
  {
    "name": "Microsoft 365",
    "desc": "Cloud-based productivity tools — from ₹135/user/mo",
    "cat": "Cloud",
    "group": "Cloud Productivity"
  },
  {
    "name": "Google Workspace",
    "desc": "Integrated tools for business collaboration",
    "cat": "Cloud",
    "group": "Cloud Productivity"
  },
  {
    "name": "Advanced Email Security",
    "desc": "Enhanced protection for M365 + Google Workspace",
    "cat": "Cloud",
    "group": "Cloud Productivity"
  },
  {
    "name": "Secure DMARC",
    "desc": "Prevent email spoofing and phishing attacks — best seller",
    "cat": "Cloud",
    "group": "Cloud Productivity"
  },
  {
    "name": "Email Signature",
    "desc": "Centralized, customizable email signature management",
    "cat": "Cloud",
    "group": "Cloud Productivity"
  },
  {
    "name": "Email Encryption",
    "desc": "Secure encryption for email communications",
    "cat": "Cloud",
    "group": "Cloud Productivity"
  },
  {
    "name": "Cloud Conferencing",
    "desc": "High-quality video, audio and collaboration",
    "cat": "Cloud",
    "group": "Cloud Productivity"
  },
  {
    "name": "Cloud PBX",
    "desc": "Cloud telephony that cuts infrastructure costs — coming soon",
    "cat": "Cloud",
    "group": "Cloud Productivity"
  },
  {
    "name": "Microsoft Copilot Studio",
    "desc": "Transforming work processes with AI — coming soon",
    "cat": "Cloud",
    "group": "Cloud Productivity"
  },
  {
    "name": "SMB Cloud Desktop",
    "desc": "Work-from-home ready desktop for small business",
    "cat": "Cloud",
    "group": "Cloud Desktop"
  },
  {
    "name": "Enterprise Desktop (VDI)",
    "desc": "Scalable virtual desktop solution for enterprises",
    "cat": "Cloud",
    "group": "Cloud Desktop"
  },
  {
    "name": "Azure Virtual Desktop",
    "desc": "Access desktop and apps securely from anywhere",
    "cat": "Cloud",
    "group": "Cloud Desktop"
  },
  {
    "name": "AWS WorkSpaces",
    "desc": "Your virtual office desktop on AWS",
    "cat": "Cloud",
    "group": "Cloud Desktop"
  },
  {
    "name": "Cloud Connectivity",
    "desc": "Optimized network with fast, secure cloud connections",
    "cat": "Cloud",
    "group": "Cloud Networking"
  },
  {
    "name": "Cloud DNS",
    "desc": "Secure & scalable domain name system management",
    "cat": "Cloud",
    "group": "Cloud Networking"
  },
  {
    "name": "Cloud VPN",
    "desc": "Secure remote access and private networking",
    "cat": "Cloud",
    "group": "Cloud Networking"
  },
  {
    "name": "Cloud CDN",
    "desc": "Accelerate content delivery globally — best seller",
    "cat": "Cloud",
    "group": "Cloud Networking"
  },
  {
    "name": "Cloud SD-WAN",
    "desc": "Optimize and manage wide-area networks from the cloud",
    "cat": "Cloud",
    "group": "Cloud Networking"
  },
  {
    "name": "Cloud SASE",
    "desc": "Integrated security + networking architecture",
    "cat": "Cloud",
    "group": "Cloud Networking"
  },
  {
    "name": "Cloud NAC",
    "desc": "Network access control for enhanced security",
    "cat": "Cloud",
    "group": "Cloud Networking"
  },
  {
    "name": "Unified ZTNA",
    "desc": "Zero Trust Network Access, secure and seamless",
    "cat": "Cloud",
    "group": "Cloud Networking"
  },
  {
    "name": "Video Surveillance aaS / Cloud CCTV",
    "desc": "Remote surveillance monitoring and management in the cloud",
    "cat": "Cloud",
    "group": "Monitoring & Cloud ERP"
  },
  {
    "name": "Cloud Monitoring",
    "desc": "Scalable, reliable monitoring of network infrastructure",
    "cat": "Cloud",
    "group": "Monitoring & Cloud ERP"
  },
  {
    "name": "APM as a Service",
    "desc": "Prevent issues before they happen with app performance monitoring",
    "cat": "Cloud",
    "group": "Monitoring & Cloud ERP"
  },
  {
    "name": "SAP on Cloud",
    "desc": "Intelligent, flexible, trusted SAP hosting",
    "cat": "Cloud",
    "group": "Monitoring & Cloud ERP"
  },
  {
    "name": "SAP B1 as a Cloud",
    "desc": "Cloud hosting purpose-built for SAP Business One",
    "cat": "Cloud",
    "group": "Monitoring & Cloud ERP"
  },
  {
    "name": "MARG on Cloud",
    "desc": "Cloud-based inventory & accounting software",
    "cat": "Cloud",
    "group": "Monitoring & Cloud ERP"
  },
  {
    "name": "Managed Microsoft 365",
    "desc": "Outsource M365 to certified experts",
    "cat": "Cloud",
    "group": "Managed Cloud & Migration"
  },
  {
    "name": "Managed AWS",
    "desc": "Tailored management of your cloud by certified experts",
    "cat": "Cloud",
    "group": "Managed Cloud & Migration"
  },
  {
    "name": "Managed Multi-Cloud",
    "desc": "Expert management of multiple cloud environments",
    "cat": "Cloud",
    "group": "Managed Cloud & Migration"
  },
  {
    "name": "Managed DevOps",
    "desc": "Optimized DevOps practices, expertly managed",
    "cat": "Cloud",
    "group": "Managed Cloud & Migration"
  },
  {
    "name": "Managed Kubernetes",
    "desc": "Simplified management of Kubernetes clusters",
    "cat": "Cloud",
    "group": "Managed Cloud & Migration"
  },
  {
    "name": "Managed Intune",
    "desc": "Better security and employee experience, lower costs",
    "cat": "Cloud",
    "group": "Managed Cloud & Migration"
  },
  {
    "name": "E-mail / Server Migration",
    "desc": "Seamless transfer of mailboxes and server environments",
    "cat": "Cloud",
    "group": "Managed Cloud & Migration"
  },
  {
    "name": "AD / Database Migration",
    "desc": "Efficient, secure migration of AD and databases",
    "cat": "Cloud",
    "group": "Managed Cloud & Migration"
  },
  {
    "name": "VAPT Services",
    "desc": "Vulnerability Assessment & Penetration Testing — free trial",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "CTEM",
    "desc": "Continuous threat exposure management — find & fix in real time",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "Source Code Review",
    "desc": "Application code analysis for security weaknesses",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "Web, Mobile & API Testing",
    "desc": "Uncover and fix vulnerabilities across app surfaces",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "Network Penetration Testing",
    "desc": "Simulated attacks to expose network flaws",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "Web App Penetration Testing",
    "desc": "Deep testing of web applications",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "Mobile App Penetration Testing",
    "desc": "Security assessment of mobile apps",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "API Penetration Testing",
    "desc": "Testing API endpoints for vulnerabilities",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "IoT Penetration Testing",
    "desc": "Evaluation of IoT device security",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "Application Security Services",
    "desc": "Comprehensive protection against cyber threats",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "Acronis CyberFit Score",
    "desc": "Measure your overall cybersecurity health score",
    "cat": "Security",
    "group": "Security Testing"
  },
  {
    "name": "Patch Mgmt-as-a-Service",
    "desc": "Proactive software patch management",
    "cat": "Security",
    "group": "Risk Assessment"
  },
  {
    "name": "Cloud Security Posture Mgmt",
    "desc": "Monitor and optimize cloud security configurations",
    "cat": "Security",
    "group": "Risk Assessment"
  },
  {
    "name": "Digital Risk Monitoring",
    "desc": "Continuous monitoring of digital assets for threats",
    "cat": "Security",
    "group": "Risk Assessment"
  },
  {
    "name": "Threat Intelligence",
    "desc": "Insights on current and emerging cyber threats",
    "cat": "Security",
    "group": "Risk Assessment"
  },
  {
    "name": "Red Team Assessment",
    "desc": "Simulated attacks to test your defenses",
    "cat": "Security",
    "group": "Risk Assessment"
  },
  {
    "name": "Blue Team Assessment",
    "desc": "Evaluation of security measures and response",
    "cat": "Security",
    "group": "Risk Assessment"
  },
  {
    "name": "OT Assessment",
    "desc": "Vulnerability identification for operational technology",
    "cat": "Security",
    "group": "Risk Assessment"
  },
  {
    "name": "Breach & Attack Simulation",
    "desc": "Assess defenses with simulated attacks",
    "cat": "Security",
    "group": "Risk Assessment"
  },
  {
    "name": "Managed Bug Bounty",
    "desc": "Third-party managed vulnerability reward programs",
    "cat": "Security",
    "group": "Risk Assessment"
  },
  {
    "name": "Cloud Security Log Monitoring",
    "desc": "Continuous log monitoring for incident detection",
    "cat": "Security",
    "group": "Security Operations"
  },
  {
    "name": "Cloud SIEM-as-a-Service",
    "desc": "Centralized security event monitoring from the cloud",
    "cat": "Security",
    "group": "Security Operations"
  },
  {
    "name": "WAAP as-a-Service",
    "desc": "Web app and API protection, fully managed",
    "cat": "Security",
    "group": "Security Operations"
  },
  {
    "name": "MDR",
    "desc": "24×7 outsourced monitoring with rapid response",
    "cat": "Security",
    "group": "Security Operations"
  },
  {
    "name": "Managed XDR",
    "desc": "Unified threat detection, analysis and automated response",
    "cat": "Security",
    "group": "Security Operations"
  },
  {
    "name": "Managed NDR",
    "desc": "Continuous network traffic threat detection",
    "cat": "Security",
    "group": "Security Operations"
  },
  {
    "name": "Managed Microsoft Sentinel",
    "desc": "Outsourced Sentinel SIEM management",
    "cat": "Security",
    "group": "Security Operations"
  },
  {
    "name": "DevSecOps as a Service",
    "desc": "Security integrated into your DevOps pipeline",
    "cat": "Security",
    "group": "Security Operations"
  },
  {
    "name": "Unified Security Platform",
    "desc": "One platform that replaces manual security work",
    "cat": "Security",
    "group": "Security Operations"
  },
  {
    "name": "DPDPA Platform & Consulting",
    "desc": "DPDPA is now a must-follow law — platform + experts, one partner",
    "cat": "Security",
    "group": "Consulting & Compliance"
  },
  {
    "name": "Cyber Security Audit",
    "desc": "Evaluation to strengthen defenses and practices",
    "cat": "Security",
    "group": "Consulting & Compliance"
  },
  {
    "name": "ISO 27001 Consulting",
    "desc": "Guidance and support to achieve ISO 27001",
    "cat": "Security",
    "group": "Consulting & Compliance"
  },
  {
    "name": "Compliance Consulting",
    "desc": "Regulatory requirements and best practices",
    "cat": "Security",
    "group": "Consulting & Compliance"
  },
  {
    "name": "TPRM",
    "desc": "Manage risks in third-party relationships",
    "cat": "Security",
    "group": "Consulting & Compliance"
  },
  {
    "name": "Managed GRC",
    "desc": "Outsourced governance, risk and compliance",
    "cat": "Security",
    "group": "Consulting & Compliance"
  },
  {
    "name": "PCI Consulting",
    "desc": "PCI DSS compliance for payment security",
    "cat": "Security",
    "group": "Consulting & Compliance"
  },
  {
    "name": "Privacy as-a-Service",
    "desc": "Managed privacy compliance and data protection",
    "cat": "Security",
    "group": "Consulting & Compliance"
  },
  {
    "name": "vCISO-as-a-Service",
    "desc": "Virtual Chief Information Security Officer",
    "cat": "Security",
    "group": "Consulting & Compliance"
  },
  {
    "name": "vDPO-as-a-Service",
    "desc": "Virtual Data Protection Officer for privacy laws",
    "cat": "Security",
    "group": "Consulting & Compliance"
  },
  {
    "name": "Microsoft Entra ID",
    "desc": "Safeguard your organization with Entra ID",
    "cat": "Security",
    "group": "Identity"
  },
  {
    "name": "Identity-as-a-Service",
    "desc": "Cloud-based identity management",
    "cat": "Security",
    "group": "Identity"
  },
  {
    "name": "Zero Trust Security Access",
    "desc": "Least-privileged access security model",
    "cat": "Security",
    "group": "Identity"
  },
  {
    "name": "Cloud Identity",
    "desc": "User identity management in cloud environments",
    "cat": "Security",
    "group": "Identity"
  },
  {
    "name": "Identity Platform",
    "desc": "Comprehensive, secure identity management system",
    "cat": "Security",
    "group": "Identity"
  },
  {
    "name": "Security Awareness Training",
    "desc": "Educate teams on security best practices",
    "cat": "Security",
    "group": "Training"
  },
  {
    "name": "Cyber Range as-a-Service",
    "desc": "Virtual environments for security simulations",
    "cat": "Security",
    "group": "Training"
  },
  {
    "name": "Threat Hunting Training",
    "desc": "Proactive detection and response skills",
    "cat": "Security",
    "group": "Training"
  },
  {
    "name": "DFIR",
    "desc": "Digital forensic investigation and response",
    "cat": "Security",
    "group": "Incident Response"
  },
  {
    "name": "IR Monitoring",
    "desc": "Continuous monitoring for incident detection",
    "cat": "Security",
    "group": "Incident Response"
  },
  {
    "name": "IR Retainers",
    "desc": "Prepaid incident response for rapid deployment",
    "cat": "Security",
    "group": "Incident Response"
  },
  {
    "name": "IR Plan Review",
    "desc": "Assessment and improvement of IR plans",
    "cat": "Security",
    "group": "Incident Response"
  },
  {
    "name": "Tabletop Exercises",
    "desc": "Simulated scenarios to test readiness",
    "cat": "Security",
    "group": "Incident Response"
  },
  {
    "name": "Readiness Assessment",
    "desc": "Gauge your cybersecurity preparedness",
    "cat": "Security",
    "group": "Incident Response"
  },
  {
    "name": "Cloud Password Manager",
    "desc": "Securely store and manage passwords",
    "cat": "Security",
    "group": "Security Products"
  },
  {
    "name": "Cloud DLP",
    "desc": "Monitor and protect sensitive cloud data",
    "cat": "Security",
    "group": "Security Products"
  },
  {
    "name": "Scrutiny DLP",
    "desc": "Discover, classify, monitor and protect sensitive data",
    "cat": "Security",
    "group": "Endpoint Security"
  },
  {
    "name": "Kaspersky Industrial CS",
    "desc": "Security for industrial control systems",
    "cat": "Security",
    "group": "Security Products"
  },
  {
    "name": "Cloud Vulnerability Mgmt",
    "desc": "Identify and mitigate cloud vulnerabilities",
    "cat": "Security",
    "group": "Security Products"
  },
  {
    "name": "Certified Disk Erasure",
    "desc": "Erase disks securely to industry standards",
    "cat": "Security",
    "group": "Security Products"
  },
  {
    "name": "SentinelOne",
    "desc": "AI-powered endpoint security and threat protection",
    "cat": "Security",
    "group": "Security Products"
  },
  {
    "name": "GeoTrust",
    "desc": "Reliable SSL certificates and encryption — most popular",
    "cat": "Digital Trust",
    "group": "SSL by Brand"
  },
  {
    "name": "DigiCert",
    "desc": "Website trust and security — most trusted CA",
    "cat": "Digital Trust",
    "group": "SSL by Brand"
  },
  {
    "name": "eMudhra",
    "desc": "Indian CA operating under the IT Act",
    "cat": "Digital Trust",
    "group": "SSL by Brand"
  },
  {
    "name": "Sectigo",
    "desc": "Trusted security for online transactions",
    "cat": "Digital Trust",
    "group": "SSL by Brand"
  },
  {
    "name": "Thawte",
    "desc": "Trusted online security solutions",
    "cat": "Digital Trust",
    "group": "SSL by Brand"
  },
  {
    "name": "RapidSSL",
    "desc": "Fast, affordable online protection",
    "cat": "Digital Trust",
    "group": "SSL by Brand"
  },
  {
    "name": "Domain Validation (DV)",
    "desc": "Secure your website quickly and easily",
    "cat": "Digital Trust",
    "group": "SSL by Type"
  },
  {
    "name": "Organization Validation (OV)",
    "desc": "Verified business info + strong encryption",
    "cat": "Digital Trust",
    "group": "SSL by Type"
  },
  {
    "name": "Extended Validation (EV)",
    "desc": "Highest level of authentication and trust",
    "cat": "Digital Trust",
    "group": "SSL by Type"
  },
  {
    "name": "Multi-Domain SSL",
    "desc": "Protect multiple domains with one certificate",
    "cat": "Digital Trust",
    "group": "SSL by Type"
  },
  {
    "name": "Wildcard SSL",
    "desc": "Comprehensive protection for all subdomains",
    "cat": "Digital Trust",
    "group": "SSL by Type"
  },
  {
    "name": "Multi-Domain Wildcard",
    "desc": "Extensive coverage across domains and subdomains",
    "cat": "Digital Trust",
    "group": "SSL by Type"
  },
  {
    "name": "Certificate Mgmt Solutions",
    "desc": "Visibility, control & automation of the certificate lifecycle",
    "cat": "Digital Trust",
    "group": "Managed PKI & Cert Mgmt"
  },
  {
    "name": "Managed PKI",
    "desc": "Fully managed private CA, cloud or on-premises",
    "cat": "Digital Trust",
    "group": "Managed PKI & Cert Mgmt"
  },
  {
    "name": "Private CA",
    "desc": "Create and manage a private CA without the hassle",
    "cat": "Digital Trust",
    "group": "Managed PKI & Cert Mgmt"
  },
  {
    "name": "IoT Certificates",
    "desc": "Secure, scalable X.509 certificates for devices",
    "cat": "Digital Trust",
    "group": "Managed PKI & Cert Mgmt"
  },
  {
    "name": "Device Attestation",
    "desc": "Add Matter support to IoT devices",
    "cat": "Digital Trust",
    "group": "Managed PKI & Cert Mgmt"
  },
  {
    "name": "Trust Lifecycle Manager",
    "desc": "See and control all certificates in one tool",
    "cat": "Digital Trust",
    "group": "Managed PKI & Cert Mgmt"
  },
  {
    "name": "CertCentral Enterprise",
    "desc": "Enterprise-class SSL/TLS management",
    "cat": "Digital Trust",
    "group": "Managed PKI & Cert Mgmt"
  },
  {
    "name": "Sectigo Certificate Manager",
    "desc": "Robust certificate lifecycle manager",
    "cat": "Digital Trust",
    "group": "Managed PKI & Cert Mgmt"
  },
  {
    "name": "Venafi Driver / Key Manager Plus",
    "desc": "Enterprise key and certificate integrations",
    "cat": "Digital Trust",
    "group": "Managed PKI & Cert Mgmt"
  },
  {
    "name": "Code Signing (Comodo / Sectigo / DigiCert)",
    "desc": "Ensure software integrity with trusted digital signatures",
    "cat": "Digital Trust",
    "group": "Signing & E-Sign"
  },
  {
    "name": "EV Code Signing",
    "desc": "Highest identity validation, fewer download warnings",
    "cat": "Digital Trust",
    "group": "Signing & E-Sign"
  },
  {
    "name": "S/MIME Certificates",
    "desc": "Validate and authenticate email senders",
    "cat": "Digital Trust",
    "group": "Signing & E-Sign"
  },
  {
    "name": "Verified Mark Certificates (VMC)",
    "desc": "Display your verified logo in email clients",
    "cat": "Digital Trust",
    "group": "Signing & E-Sign"
  },
  {
    "name": "Personal Authentication",
    "desc": "Identity verification for individuals — Basic to Enterprise",
    "cat": "Digital Trust",
    "group": "Signing & E-Sign"
  },
  {
    "name": "DrySign · Zoho Sign · DocuSign",
    "desc": "Secure, paperless electronic document signing",
    "cat": "Digital Trust",
    "group": "Signing & E-Sign"
  },
  {
    "name": "DSC Certificates",
    "desc": "Digital signature certificates for statutory filings",
    "cat": "Digital Trust",
    "group": "Signing & E-Sign"
  },
  {
    "name": "Register a Domain",
    "desc": "Get your domain name now",
    "cat": "Web Presence",
    "group": "Domains"
  },
  {
    "name": "Transfer Your Domain",
    "desc": "Get a 1-year free extension",
    "cat": "Web Presence",
    "group": "Domains"
  },
  {
    "name": "Bulk Domain Search",
    "desc": "Search and manage multiple domains easily",
    "cat": "Web Presence",
    "group": "Domains"
  },
  {
    "name": "Domain Parking",
    "desc": "Secure your domain until ready for use",
    "cat": "Web Presence",
    "group": "Domains"
  },
  {
    "name": "Whois Privacy Protection",
    "desc": "Protect your personal information online",
    "cat": "Web Presence",
    "group": "Domains"
  },
  {
    "name": "Premium Domains & New TLDs",
    "desc": "Get a headstart with a prime domain name",
    "cat": "Web Presence",
    "group": "Domains"
  },
  {
    "name": "Domain Protect+",
    "desc": "Hide your contact info from spammers",
    "cat": "Web Presence",
    "group": "Domains"
  },
  {
    "name": "Whois Lookup & Prices",
    "desc": "Registry records and TLD price comparison",
    "cat": "Web Presence",
    "group": "Domains"
  },
  {
    "name": "Backorder Domain",
    "desc": "Reserve a domain for future availability",
    "cat": "Web Presence",
    "group": "Domains"
  },
  {
    "name": "Windows Hosting",
    "desc": "Reliable Microsoft-certified hosting",
    "cat": "Web Presence",
    "group": "Hosting"
  },
  {
    "name": "Linux Hosting",
    "desc": "Reliable Linux-certified hosting",
    "cat": "Web Presence",
    "group": "Hosting"
  },
  {
    "name": "WordPress Hosting",
    "desc": "Optimized hosting for WordPress sites",
    "cat": "Web Presence",
    "group": "Hosting"
  },
  {
    "name": "Web Security (SiteLock)",
    "desc": "Comprehensive digital safety for your site",
    "cat": "Web Presence",
    "group": "Hosting",
    "heroImage": "/assets/images/hero-web-security-sitelock-wide.png"
  },
  {
    "name": "cPanel / Plesk",
    "desc": "User-friendly control panels for easy management",
    "cat": "Web Presence",
    "group": "Hosting"
  },
  {
    "name": "AI Website Builder",
    "desc": "Make your website in minutes",
    "cat": "Web Presence",
    "group": "Hosting"
  },
  {
    "name": "Website Backup",
    "desc": "Secure, automated website backups",
    "cat": "Web Presence",
    "group": "Hosting"
  },
  {
    "name": "Migrate to XcellHost",
    "desc": "Seamless migration to our cloud",
    "cat": "Web Presence",
    "group": "Hosting"
  },
  {
    "name": "E-mail Marketing",
    "desc": "Targeted email campaigns that engage",
    "cat": "Web Presence",
    "group": "Marketing"
  },
  {
    "name": "WhatsApp Marketing",
    "desc": "AI-driven growth through WhatsApp — free trial",
    "cat": "Web Presence",
    "group": "Marketing"
  },
  {
    "name": "SMS Marketing",
    "desc": "Instant, impactful text campaigns",
    "cat": "Web Presence",
    "group": "Marketing"
  },
  {
    "name": "Managed SEO",
    "desc": "Maximize visibility, reach your audience",
    "cat": "Web Presence",
    "group": "Marketing"
  },
  {
    "name": "HeyItsME",
    "desc": "Enhance your online presence",
    "cat": "Web Presence",
    "group": "Marketing"
  },
  {
    "name": "Google My Business",
    "desc": "Local visibility that drives footfall",
    "cat": "Web Presence",
    "group": "Marketing"
  },
  {
    "name": "TSplus Suite",
    "desc": "Remote access, security, support & monitoring for Windows Servers",
    "cat": "Web Presence",
    "group": "Software & Tools"
  },
  {
    "name": "Acronis Cyber Protect Enterprise",
    "desc": "Cyber defense for multi-site and industrial computing",
    "cat": "Web Presence",
    "group": "Software & Tools"
  },
  {
    "name": "Cloud Analytics",
    "desc": "Data analytics, engineering, visualization, warehouse, governance",
    "cat": "Web Presence",
    "group": "Software & Tools"
  },
  {
    "name": "Microsoft Platform",
    "desc": "Copilot, Intune, Power Platform & Sentinel",
    "cat": "Web Presence",
    "group": "Software & Tools"
  },
  {
    "name": "Mail Tools",
    "desc": "DMARC monitoring, SPF / DKIM / BIMI / MTA-STS / TLS-RPT tools",
    "cat": "Web Presence",
    "group": "Software & Tools"
  },
  {
    "name": "SSL Tools",
    "desc": "CSR generator/decoder, SSL checker, converter, key matcher",
    "cat": "Web Presence",
    "group": "Software & Tools"
  },
  {
    "name": "Network Tools",
    "desc": "Speed test & Looking Glass diagnostics",
    "cat": "Web Presence",
    "group": "Software & Tools"
  },
  {
    "name": "CA Cloud",
    "desc": "Accounting & audit automation for CAs — free trial",
    "cat": "Solutions",
    "group": "By Industry"
  },
  {
    "name": "SMB Cloud",
    "desc": "Simplify operations, mitigate risk",
    "cat": "Solutions",
    "group": "By Industry"
  },
  {
    "name": "BFSI / Financial Services",
    "desc": "Enhance operations with compliant cloud",
    "cat": "Solutions",
    "group": "By Industry"
  },
  {
    "name": "Manufacturing",
    "desc": "Innovative technologies for industry",
    "cat": "Solutions",
    "group": "By Industry"
  },
  {
    "name": "Government",
    "desc": "Secure, reliable public-sector technology",
    "cat": "Solutions",
    "group": "By Industry"
  },
  {
    "name": "Higher Education & University",
    "desc": "Elevate learning experiences",
    "cat": "Solutions",
    "group": "By Industry"
  },
  {
    "name": "Pharma · Construction · F&B · Logistics",
    "desc": "Tailored solutions for each sector",
    "cat": "Solutions",
    "group": "By Industry"
  },
  {
    "name": "Web Design for CA, CS & Lawyers",
    "desc": "Stunning websites for professionals",
    "cat": "Solutions",
    "group": "By Industry"
  },
  {
    "name": "Ransomware",
    "desc": "Encryption attacks demanding payment — stopped",
    "cat": "Solutions",
    "group": "By Use Case"
  },
  {
    "name": "Phishing",
    "desc": "Deceptive attacks on your users",
    "cat": "Solutions",
    "group": "By Use Case"
  },
  {
    "name": "Compromised Credentials",
    "desc": "Stolen logins used for unauthorized access",
    "cat": "Solutions",
    "group": "By Use Case"
  },
  {
    "name": "Insider Threat",
    "desc": "Risks from within the organization",
    "cat": "Solutions",
    "group": "By Use Case"
  },
  {
    "name": "Lateral Movement",
    "desc": "Attackers moving through your network",
    "cat": "Solutions",
    "group": "By Use Case"
  },
  {
    "name": "Malware & OT Security",
    "desc": "Malicious software and industrial-system threats",
    "cat": "Solutions",
    "group": "By Use Case"
  },
  {
    "name": "Security Stack Consolidation",
    "desc": "Streamline and integrate your security tools",
    "cat": "Solutions",
    "group": "By Use Case"
  },
  {
    "name": "NG-SIEM",
    "desc": "Advanced security information & event management",
    "cat": "Solutions",
    "group": "By Capability"
  },
  {
    "name": "NDR",
    "desc": "Network threat monitoring and response",
    "cat": "Solutions",
    "group": "By Capability"
  },
  {
    "name": "UEBA",
    "desc": "User behavior analytics for insider threats",
    "cat": "Solutions",
    "group": "By Capability"
  },
  {
    "name": "Case Management",
    "desc": "Systematic handling of incidents",
    "cat": "Solutions",
    "group": "By Capability"
  },
  {
    "name": "Enterprise",
    "desc": "Full-stack cloud + security for large organizations",
    "cat": "Solutions",
    "group": "By Organization"
  },
  {
    "name": "MSSP",
    "desc": "Managed security service provider partnerships",
    "cat": "Solutions",
    "group": "By Organization"
  },
  {
    "name": "MSP",
    "desc": "Managed service provider partnerships",
    "cat": "Solutions",
    "group": "By Organization"
  }
];
