import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/acronis-advanced-xdr-sla.page.ts
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.title;
function AcronisAdvancedXdrSlaPage_For_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 57);
    \u0275\u0275listener("click", function AcronisAdvancedXdrSlaPage_For_41_Template_a_click_0_listener($event) {
      const topic_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollToSection(topic_r2[0], $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const topic_r2 = ctx.$implicit;
    \u0275\u0275property("href", "#" + topic_r2[0], \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(topic_r2[1]);
  }
}
function AcronisAdvancedXdrSlaPage_For_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r4);
  }
}
function AcronisAdvancedXdrSlaPage_For_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r5[1]);
  }
}
function AcronisAdvancedXdrSlaPage_For_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r6);
  }
}
function AcronisAdvancedXdrSlaPage_For_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "td");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r7[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7[2]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r7[3]);
  }
}
function AcronisAdvancedXdrSlaPage_For_138_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r8);
  }
}
function AcronisAdvancedXdrSlaPage_For_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "span");
    \u0275\u0275text(2, "Coverage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "ul");
    \u0275\u0275repeaterCreate(6, AcronisAdvancedXdrSlaPage_For_138_For_7_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r9 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(group_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r9.items);
  }
}
function AcronisAdvancedXdrSlaPage_For_149_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r10);
  }
}
function AcronisAdvancedXdrSlaPage_For_160_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r11);
  }
}
function AcronisAdvancedXdrSlaPage_For_171_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r12);
  }
}
function AcronisAdvancedXdrSlaPage_For_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r13);
  }
}
function AcronisAdvancedXdrSlaPage_For_206_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r14[1]);
  }
}
function AcronisAdvancedXdrSlaPage_For_222_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r15);
  }
}
function AcronisAdvancedXdrSlaPage_For_234_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r16);
  }
}
function AcronisAdvancedXdrSlaPage_For_244_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r17);
  }
}
function AcronisAdvancedXdrSlaPage_For_255_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r18 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r18);
  }
}
function AcronisAdvancedXdrSlaPage_For_266_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r19);
  }
}
function AcronisAdvancedXdrSlaPage_For_277_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r20);
  }
}
function AcronisAdvancedXdrSlaPage_For_294_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td")(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r21 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r21[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r21[1]);
  }
}
function AcronisAdvancedXdrSlaPage_For_300_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275element(1, "br");
  }
  if (rf & 2) {
    const rule_r22 = ctx.$implicit;
    \u0275\u0275textInterpolate1(" ", rule_r22);
  }
}
function AcronisAdvancedXdrSlaPage_For_319_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "td");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r23 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r23[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r23[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r23[2]);
  }
}
function AcronisAdvancedXdrSlaPage_For_330_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r24 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(item_r24);
  }
}
function AcronisAdvancedXdrSlaPage_For_375_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r25 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r25[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r25[1]);
  }
}
var AcronisAdvancedXdrSlaPage = class _AcronisAdvancedXdrSlaPage {
  document = inject(DOCUMENT);
  seo = inject(SeoService);
  pageTopics = [
    ["purpose", "1. Purpose"],
    ["service-scope", "2. Service Scope"],
    ["service-availability", "3. Service Availability"],
    ["support-hours", "4. Support Hours"],
    ["incident-priority-matrix", "5. Incident Priority Matrix"],
    ["xdr-detection-coverage", "6. XDR Detection Coverage"],
    ["xdr-capabilities", "7. XDR Capabilities"],
    ["threat-hunting", "8. Threat Hunting"],
    ["incident-response", "9. Incident Response"],
    ["monitoring-services", "10. Monitoring Services"],
    ["performance-targets", "11. Performance Targets"],
    ["maintenance-window", "12. Maintenance Window"],
    ["customer-responsibilities", "13. Customer Responsibilities"],
    ["xcellhost-responsibilities", "14. XcellHost Responsibilities"],
    ["security-features", "15. Security Features"],
    ["reporting", "16. Reporting"],
    ["service-exclusions", "17. Service Exclusions"],
    ["service-credits", "18. Service Credits"],
    ["escalation-matrix", "19. Escalation Matrix"],
    ["optional-value-added-services", "20. Optional Value-Added Services"],
    ["contact-information", "21. Contact Information"],
    ["sla-summary", "22. SLA Summary"],
    ["disclaimer", "23. Disclaimer"]
  ];
  serviceScope = [
    "Extended Detection & Response (XDR)",
    "Endpoint Detection & Response (EDR)",
    "AI-Powered Threat Detection",
    "Cross-Domain Threat Correlation",
    "Security Analytics",
    "Security Operations Dashboard",
    "Threat Intelligence Integration",
    "Identity Threat Detection",
    "Email Threat Detection",
    "Network Detection & Response (NDR)",
    "Cloud Workload Visibility",
    "User & Entity Behavior Analytics (UEBA)",
    "Automated Investigation",
    "Incident Timeline",
    "Root Cause Analysis",
    "Threat Hunting",
    "Compliance Reporting",
    "Executive Security Dashboards"
  ];
  availability = [
    ["XDR Security Platform", "99.9%"],
    ["Threat Detection Engine", "99.9%"],
    ["Management Console", "99.9%"],
    ["Incident Response Platform", "99.9%"],
    ["Threat Intelligence Updates", "Continuous"],
    ["SOC Monitoring", "24\xD77\xD7365"],
    ["Monitoring & Alerting", "24\xD77\xD7365"]
  ];
  emergencySupport = [
    "Active Cyber Attack",
    "Ransomware Incident",
    "Data Exfiltration",
    "Privilege Escalation",
    "Identity Compromise",
    "Malware Infection",
    "Critical Security Incident",
    "Zero-Day Threat",
    "Business-Critical Security Events"
  ];
  incidentPriorities = [
    ["P1 \u2013 Critical", "Active breach, ransomware, critical business impact", "15 Minutes", "2 Hours"],
    ["P2 \u2013 High", "Confirmed malware, privilege escalation, widespread compromise", "30 Minutes", "4 Hours"],
    ["P3 \u2013 Medium", "Suspicious activity requiring investigation", "2 Hours", "8 Business Hours"],
    ["P4 \u2013 Low", "Reports, policy updates, information requests", "4 Business Hours", "2 Business Days"]
  ];
  detectionCoverage = [
    { title: "Endpoint Security", items: ["Windows", "Linux", "macOS", "Servers", "Virtual Machines"] },
    { title: "Email Security", items: ["Microsoft 365", "Exchange Online", "Email Threat Detection", "Phishing Detection"] },
    { title: "Identity Security", items: ["Microsoft Entra ID", "Active Directory", "Identity Protection", "Privileged Account Monitoring"] },
    { title: "Network Security", items: ["Network Traffic Analysis", "DNS Monitoring", "Lateral Movement Detection", "Command & Control Detection"] },
    { title: "Cloud Security", items: ["Microsoft 365", "Azure", "Cloud Workloads", "SaaS Applications"] }
  ];
  capabilities = [
    "AI-Based Threat Detection",
    "Cross-Domain Correlation",
    "MITRE ATT&CK Mapping",
    "User & Entity Behavior Analytics (UEBA)",
    "Network Detection & Response (NDR)",
    "Endpoint Detection & Response (EDR)",
    "Email Threat Detection",
    "Identity Threat Detection",
    "Attack Chain Visualization",
    "Automated Investigation",
    "Root Cause Analysis",
    "Malware Analysis",
    "Forensic Investigation",
    "IOC Correlation",
    "Threat Intelligence Integration",
    "Compliance Reporting"
  ];
  threatHunting = [
    "Proactive Threat Hunting",
    "IOC Matching",
    "Threat Intelligence Correlation",
    "Behavioral Analytics",
    "Endpoint Investigation",
    "User Activity Analysis",
    "Cloud Activity Analysis",
    "Email Investigation",
    "Network Traffic Analysis",
    "Malware Classification",
    "Security Event Correlation",
    "MITRE ATT&CK Analysis"
  ];
  incidentResponse = [
    "Incident Investigation",
    "Threat Validation",
    "Attack Scope Analysis",
    "Endpoint Isolation",
    "Process Termination",
    "Malware Quarantine",
    "IOC Blocking",
    "Threat Containment",
    "Security Policy Recommendations",
    "Recovery Assistance",
    "Executive Incident Reporting"
  ];
  monitoring = [
    "Endpoints",
    "Servers",
    "Email",
    "Identity Services",
    "Microsoft 365",
    "Azure Workloads",
    "Network Activity",
    "Security Alerts",
    "User Behaviour",
    "Threat Intelligence",
    "Login Events",
    "File Activity",
    "Cloud Applications"
  ];
  performanceTargets = [
    ["Threat Detection", "Real-Time"],
    ["Threat Intelligence Updates", "Continuous"],
    ["Critical Alert Response", "\u226415 Minutes"],
    ["High Priority Alert Response", "\u226430 Minutes"],
    ["Initial Investigation", "\u22641 Hour"],
    ["Initial Containment", "\u22642 Hours"],
    ["Malware Investigation", "\u22644 Hours"],
    ["Executive Reporting", "Monthly"]
  ];
  maintenance = [
    "Platform Updates",
    "Detection Engine Updates",
    "Threat Intelligence Updates",
    "Security Content Updates",
    "Policy Optimization",
    "Performance Improvements",
    "Security Rule Updates",
    "Platform Health Review"
  ];
  customerResponsibilities = [
    "Deploy and maintain XDR agents.",
    "Keep supported operating systems updated.",
    "Maintain internet connectivity.",
    "Protect administrator credentials.",
    "Provide required administrative permissions.",
    "Maintain valid subscriptions.",
    "Report security incidents immediately.",
    "Follow cybersecurity best practices.",
    "Cooperate during investigations.",
    "Approve response actions when required."
  ];
  xcellhostResponsibilities = [
    "Provide 24\xD77 security monitoring.",
    "Investigate security alerts.",
    "Correlate security events.",
    "Perform threat hunting.",
    "Analyze malware.",
    "Recommend remediation actions.",
    "Escalate critical incidents.",
    "Deliver monthly reports.",
    "Maintain platform health.",
    "Coordinate with Acronis Support when required."
  ];
  securityFeatures = [
    "AI Threat Detection",
    "Threat Intelligence",
    "Behavioral Analytics",
    "Endpoint Isolation",
    "Automated Investigation",
    "Security Dashboards",
    "Compliance Reports",
    "Attack Timeline",
    "IOC Detection",
    "Root Cause Analysis",
    "MITRE ATT&CK Mapping",
    "Cloud Security Visibility",
    "Email Protection",
    "Identity Protection"
  ];
  reports = [
    "Executive Security Dashboard",
    "Threat Summary",
    "Critical Incidents",
    "Malware Analysis",
    "Endpoint Health",
    "Security Events",
    "Threat Hunting Activities",
    "Compliance Status",
    "Security Recommendations",
    "User Activity Summary"
  ];
  exclusions = [
    "Unsupported Operating Systems",
    "Customer Internet Failures",
    "Devices without XDR Agents",
    "Customer-Owned Security Tools",
    "Unsupported Third-Party Applications",
    "Customer Configuration Errors",
    "Physical Device Theft",
    "Customer Negligence",
    "Customer-Disabled Security Controls",
    "Force Majeure Events"
  ];
  serviceCredits = [
    ["99.9% or Above", "No Credit"],
    ["99.0% \u2013 99.89%", "5% of Monthly Service Fee"],
    ["95.0% \u2013 98.99%", "10% of Monthly Service Fee"],
    ["Below 95.0%", "20% of Monthly Service Fee"]
  ];
  creditRules = [
    "Apply only to the XDR managed service fee.",
    "Exclude Acronis licensing charges.",
    "Are issued as invoice credits.",
    "Must be claimed within 30 days of the affected billing period."
  ];
  escalation = [
    ["Level 1", "Security Service Desk", "Initial Alert Review"],
    ["Level 2", "SOC Analyst", "Threat Investigation"],
    ["Level 3", "Senior Security Engineer", "Advanced Threat Response"],
    ["Level 4", "Security Operations Manager", "Critical Security Escalation"],
    ["Level 5", "Service Delivery Manager", "SLA Governance & Customer Communication"]
  ];
  optionalServices = [
    "Acronis Advanced MDR",
    "Acronis Advanced EDR",
    "Vulnerability Assessment",
    "Security Awareness Training",
    "Email Security",
    "Microsoft 365 Protection",
    "Backup & Disaster Recovery",
    "SIEM Integration",
    "SOC-as-a-Service",
    "Compliance Reporting",
    "Dark Web Monitoring",
    "Threat Intelligence Feeds",
    "Managed Firewall",
    "Microsoft Sentinel Integration",
    "Incident Response Retainer"
  ];
  summary = [
    ["XDR Platform Availability", "99.9%"],
    ["SOC Monitoring", "24\xD77\xD7365"],
    ["Critical Response Time", "15 Minutes"],
    ["Initial Containment", "2 Hours"],
    ["Threat Detection", "Real-Time"],
    ["Threat Hunting", "Included"],
    ["Threat Intelligence", "Continuous"],
    ["Executive Reporting", "Monthly"],
    ["Standard Support", "Monday\u2013Saturday (9:00 AM\u20137:00 PM IST)"],
    ["Emergency Support", "24\xD77\xD7365"],
    ["Maintenance Notice", "48 Hours"]
  ];
  constructor() {
    this.seo.set("Acronis Advanced XDR SLA \u2014 XcellHost", "Availability, monitoring and incident response commitments for Acronis Advanced XDR.", "/acronis-advanced-xdr-sla/");
  }
  scrollToSection(sectionId, event) {
    event.preventDefault();
    const section = this.document.getElementById(sectionId);
    if (!section)
      return;
    section.scrollIntoView({ behavior: "smooth", block: "start" });
    const location = this.document.defaultView?.location;
    if (location) {
      this.document.defaultView?.history.replaceState(null, "", `${location.pathname}${location.search}#${sectionId}`);
    }
  }
  static \u0275fac = function AcronisAdvancedXdrSlaPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AcronisAdvancedXdrSlaPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcronisAdvancedXdrSlaPage, selectors: [["xh-acronis-advanced-xdr-sla-page"]], hostAttrs: [2, "display", "contents"], decls: 394, vars: 0, consts: [[1, "sla-page"], [1, "sla-hero"], [1, "sla-orb", "sla-orb-one"], [1, "sla-orb", "sla-orb-two"], [1, "wrap", "sla-hero-inner"], [1, "sla-breadcrumb"], ["routerLink", "/"], [1, "sla-kicker"], [1, "sla-hero-metrics"], [1, "wrap", "sla-layout"], ["aria-label", "SLA sections", 1, "sla-nav"], [3, "href"], [1, "sla-content"], ["id", "purpose", 1, "sla-section"], [1, "sla-number"], ["id", "service-scope", 1, "sla-section"], [1, "sla-check-grid"], ["id", "service-availability", 1, "sla-section"], [1, "sla-table-wrap"], ["id", "support-hours", 1, "sla-section"], [1, "sla-dual"], ["id", "incident-priority-matrix", 1, "sla-section"], [1, "sla-priority"], ["id", "xdr-detection-coverage", 1, "sla-section"], [1, "sla-escalation"], ["id", "xdr-capabilities", 1, "sla-section"], ["id", "threat-hunting", 1, "sla-section"], ["id", "incident-response", 1, "sla-section"], [1, "sla-footnote"], ["id", "monitoring-services", 1, "sla-section"], [1, "sla-notice"], ["id", "performance-targets", 1, "sla-section"], ["id", "maintenance-window", 1, "sla-section"], ["id", "customer-responsibilities", 1, "sla-section"], [1, "sla-responsibility-card"], ["id", "xcellhost-responsibilities", 1, "sla-section"], [1, "sla-responsibility-card", "sla-responsibility-card-accent"], ["id", "security-features", 1, "sla-section"], ["id", "reporting", 1, "sla-section"], ["id", "service-exclusions", 1, "sla-section"], [1, "sla-exclusion-grid"], ["id", "service-credits", 1, "sla-section"], ["id", "escalation-matrix", 1, "sla-section"], ["id", "optional-value-added-services", 1, "sla-section"], ["id", "contact-information", 1, "sla-section"], [1, "sla-contact-card"], ["href", "mailto:support@xcellhost.cloud"], ["href", "mailto:sales@xcellhost.cloud"], ["href", "https://supportdesk.xcellhost.cloud/", "target", "_blank", "rel", "noopener"], ["href", "https://www.xcellhost.cloud", "target", "_blank", "rel", "noopener"], ["id", "sla-summary", 1, "sla-summary"], [1, "sla-summary-grid"], ["id", "disclaimer", 1, "sla-notes"], [1, "sla-cta"], [1, "wrap"], ["routerLink", "/contact", 1, "btn", "btn-primary"], ["aria-hidden", "true"], [3, "click", "href"]], template: function AcronisAdvancedXdrSlaPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1);
      \u0275\u0275element(2, "div", 2)(3, "div", 3);
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "a", 6);
      \u0275\u0275text(7, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "\u203A");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span");
      \u0275\u0275text(11, "Service Level Agreements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "span", 7);
      \u0275\u0275text(13, "Service Level Agreement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h1");
      \u0275\u0275text(15, "Acronis Advanced ");
      \u0275\u0275elementStart(16, "span");
      \u0275\u0275text(17, "XDR SLA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "p");
      \u0275\u0275text(19, "Unified service commitments for cross-domain threat detection, continuous monitoring, investigation and rapid response.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "div")(22, "strong");
      \u0275\u0275text(23, "99.9%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span");
      \u0275\u0275text(25, "XDR platform availability");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div")(27, "strong");
      \u0275\u0275text(28, "15 min");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "Critical response");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div")(32, "strong");
      \u0275\u0275text(33, "24\xD77\xD7365");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "span");
      \u0275\u0275text(35, "SOC monitoring");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(36, "div", 9)(37, "aside", 10)(38, "strong");
      \u0275\u0275text(39, "On this page");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(40, AcronisAdvancedXdrSlaPage_For_41_Template, 2, 2, "a", 11, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "article", 12)(43, "section", 13)(44, "span", 14);
      \u0275\u0275text(45, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "div")(47, "h2");
      \u0275\u0275text(48, "Purpose");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p");
      \u0275\u0275text(50, "This Service Level Agreement defines the service commitments, monitoring standards, threat detection capabilities, incident response, platform availability, support response times and customer responsibilities for the Acronis Advanced XDR (Extended Detection & Response) service provided by XcellHost Cloud Services Pvt. Ltd.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "p");
      \u0275\u0275text(52, "Acronis Advanced XDR delivers unified threat detection and response by correlating telemetry across endpoints, email, identities, cloud workloads, servers and networks. The service provides centralized visibility, automated investigation, threat intelligence and rapid incident response to help organizations detect, contain and respond to sophisticated cyber threats.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "section", 15)(54, "span", 14);
      \u0275\u0275text(55, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div")(57, "h2");
      \u0275\u0275text(58, "Service Scope");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "p");
      \u0275\u0275text(60, "The Acronis Advanced XDR service includes:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "ul", 16);
      \u0275\u0275repeaterCreate(62, AcronisAdvancedXdrSlaPage_For_63_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "section", 17)(65, "span", 14);
      \u0275\u0275text(66, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "div")(68, "h2");
      \u0275\u0275text(69, "Service Availability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "div", 18)(71, "table")(72, "thead")(73, "tr")(74, "th");
      \u0275\u0275text(75, "Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "th");
      \u0275\u0275text(77, "SLA commitment");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(78, "tbody");
      \u0275\u0275repeaterCreate(79, AcronisAdvancedXdrSlaPage_For_80_Template, 6, 2, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(81, "section", 19)(82, "span", 14);
      \u0275\u0275text(83, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div")(85, "h2");
      \u0275\u0275text(86, "Support Hours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 20)(88, "div")(89, "h3");
      \u0275\u0275text(90, "Standard Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p");
      \u0275\u0275text(92, "Monday\u2013Saturday");
      \u0275\u0275element(93, "br");
      \u0275\u0275elementStart(94, "strong");
      \u0275\u0275text(95, "9:00 AM\u20137:00 PM IST");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(96, "h3");
      \u0275\u0275text(97, "Security Operations Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "p")(99, "strong");
      \u0275\u0275text(100, "24\xD77\xD7365 continuous monitoring");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(101, "div")(102, "h3");
      \u0275\u0275text(103, "Emergency Security Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "ul");
      \u0275\u0275repeaterCreate(105, AcronisAdvancedXdrSlaPage_For_106_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(107, "section", 21)(108, "span", 14);
      \u0275\u0275text(109, "05");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "div")(111, "h2");
      \u0275\u0275text(112, "Incident Priority Matrix");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 18)(114, "table", 22)(115, "thead")(116, "tr")(117, "th");
      \u0275\u0275text(118, "Priority");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "th");
      \u0275\u0275text(120, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "th");
      \u0275\u0275text(122, "Response time");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(123, "th");
      \u0275\u0275text(124, "Initial containment");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(125, "tbody");
      \u0275\u0275repeaterCreate(126, AcronisAdvancedXdrSlaPage_For_127_Template, 10, 4, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(128, "section", 23)(129, "span", 14);
      \u0275\u0275text(130, "06");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "div")(132, "h2");
      \u0275\u0275text(133, "XDR Detection Coverage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p");
      \u0275\u0275text(135, "The service continuously monitors:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(136, "div", 24);
      \u0275\u0275repeaterCreate(137, AcronisAdvancedXdrSlaPage_For_138_Template, 8, 1, "article", null, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "section", 25)(140, "span", 14);
      \u0275\u0275text(141, "07");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "div")(143, "h2");
      \u0275\u0275text(144, "XDR Capabilities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p");
      \u0275\u0275text(146, "The platform includes:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "ul", 16);
      \u0275\u0275repeaterCreate(148, AcronisAdvancedXdrSlaPage_For_149_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(150, "section", 26)(151, "span", 14);
      \u0275\u0275text(152, "08");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(153, "div")(154, "h2");
      \u0275\u0275text(155, "Threat Hunting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(156, "p");
      \u0275\u0275text(157, "The Security Operations Center performs:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "ul", 16);
      \u0275\u0275repeaterCreate(159, AcronisAdvancedXdrSlaPage_For_160_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(161, "section", 27)(162, "span", 14);
      \u0275\u0275text(163, "09");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(164, "div")(165, "h2");
      \u0275\u0275text(166, "Incident Response");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p");
      \u0275\u0275text(168, "Upon confirmation of a threat, XcellHost may perform:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "ul", 16);
      \u0275\u0275repeaterCreate(170, AcronisAdvancedXdrSlaPage_For_171_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "p", 28);
      \u0275\u0275text(173, "Response actions requiring customer approval will be performed according to the subscribed service plan.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(174, "section", 29)(175, "span", 14);
      \u0275\u0275text(176, "10");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "div")(178, "h2");
      \u0275\u0275text(179, "Monitoring Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(180, "p");
      \u0275\u0275text(181, "Continuous monitoring includes:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "ul", 16);
      \u0275\u0275repeaterCreate(183, AcronisAdvancedXdrSlaPage_For_184_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(185, "div", 30)(186, "strong");
      \u0275\u0275text(187, "Always on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(188, "p");
      \u0275\u0275text(189, "Monitoring is performed 24\xD77\xD7365.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(190, "section", 31)(191, "span", 14);
      \u0275\u0275text(192, "11");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "div")(194, "h2");
      \u0275\u0275text(195, "Performance Targets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 18)(197, "table")(198, "thead")(199, "tr")(200, "th");
      \u0275\u0275text(201, "Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(202, "th");
      \u0275\u0275text(203, "Target");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(204, "tbody");
      \u0275\u0275repeaterCreate(205, AcronisAdvancedXdrSlaPage_For_206_Template, 6, 2, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(207, "section", 32)(208, "span", 14);
      \u0275\u0275text(209, "12");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "div")(211, "h2");
      \u0275\u0275text(212, "Maintenance Window");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(213, "div", 30)(214, "strong");
      \u0275\u0275text(215, "Regular maintenance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "p");
      \u0275\u0275text(217, "Sunday, 11:00 PM\u20133:00 AM IST");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "p");
      \u0275\u0275text(219, "Maintenance includes:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(220, "ul", 16);
      \u0275\u0275repeaterCreate(221, AcronisAdvancedXdrSlaPage_For_222_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "p", 28);
      \u0275\u0275text(224, "Customers will receive at least 48 hours\u2019 advance notice whenever possible.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(225, "section", 33)(226, "span", 14);
      \u0275\u0275text(227, "13");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(228, "div")(229, "h2");
      \u0275\u0275text(230, "Customer Responsibilities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(231, "div", 34)(232, "ul");
      \u0275\u0275repeaterCreate(233, AcronisAdvancedXdrSlaPage_For_234_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(235, "section", 35)(236, "span", 14);
      \u0275\u0275text(237, "14");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(238, "div")(239, "h2");
      \u0275\u0275text(240, "XcellHost Responsibilities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(241, "div", 36)(242, "ul");
      \u0275\u0275repeaterCreate(243, AcronisAdvancedXdrSlaPage_For_244_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(245, "section", 37)(246, "span", 14);
      \u0275\u0275text(247, "15");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(248, "div")(249, "h2");
      \u0275\u0275text(250, "Security Features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(251, "p");
      \u0275\u0275text(252, "Included features:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(253, "ul", 16);
      \u0275\u0275repeaterCreate(254, AcronisAdvancedXdrSlaPage_For_255_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(256, "section", 38)(257, "span", 14);
      \u0275\u0275text(258, "16");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(259, "div")(260, "h2");
      \u0275\u0275text(261, "Reporting");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(262, "p");
      \u0275\u0275text(263, "Monthly reports include:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(264, "ul", 16);
      \u0275\u0275repeaterCreate(265, AcronisAdvancedXdrSlaPage_For_266_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(267, "section", 39)(268, "span", 14);
      \u0275\u0275text(269, "17");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(270, "div")(271, "h2");
      \u0275\u0275text(272, "Service Exclusions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(273, "p");
      \u0275\u0275text(274, "This SLA does not cover:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(275, "ul", 40);
      \u0275\u0275repeaterCreate(276, AcronisAdvancedXdrSlaPage_For_277_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(278, "section", 41)(279, "span", 14);
      \u0275\u0275text(280, "18");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(281, "div")(282, "h2");
      \u0275\u0275text(283, "Service Credits");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(284, "div", 18)(285, "table")(286, "thead")(287, "tr")(288, "th");
      \u0275\u0275text(289, "Monthly availability");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "th");
      \u0275\u0275text(291, "Service credit");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(292, "tbody");
      \u0275\u0275repeaterCreate(293, AcronisAdvancedXdrSlaPage_For_294_Template, 6, 2, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(295, "div", 30)(296, "strong");
      \u0275\u0275text(297, "Service credit conditions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(298, "p");
      \u0275\u0275repeaterCreate(299, AcronisAdvancedXdrSlaPage_For_300_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(301, "section", 42)(302, "span", 14);
      \u0275\u0275text(303, "19");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(304, "div")(305, "h2");
      \u0275\u0275text(306, "Escalation Matrix");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(307, "div", 18)(308, "table")(309, "thead")(310, "tr")(311, "th");
      \u0275\u0275text(312, "Level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "th");
      \u0275\u0275text(314, "Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(315, "th");
      \u0275\u0275text(316, "Responsibility");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(317, "tbody");
      \u0275\u0275repeaterCreate(318, AcronisAdvancedXdrSlaPage_For_319_Template, 8, 3, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(320, "section", 43)(321, "span", 14);
      \u0275\u0275text(322, "20");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(323, "div")(324, "h2");
      \u0275\u0275text(325, "Optional Value-Added Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(326, "p");
      \u0275\u0275text(327, "Customers may enhance their XDR deployment with:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(328, "ul", 16);
      \u0275\u0275repeaterCreate(329, AcronisAdvancedXdrSlaPage_For_330_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(331, "section", 44)(332, "span", 14);
      \u0275\u0275text(333, "21");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "div")(335, "h2");
      \u0275\u0275text(336, "Contact Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(337, "div", 45)(338, "div")(339, "span");
      \u0275\u0275text(340, "Company");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(341, "strong");
      \u0275\u0275text(342, "XcellHost Cloud Services Pvt. Ltd.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(343, "div")(344, "span");
      \u0275\u0275text(345, "Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "a", 46);
      \u0275\u0275text(347, "support@xcellhost.cloud");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(348, "div")(349, "span");
      \u0275\u0275text(350, "Sales");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(351, "a", 47);
      \u0275\u0275text(352, "sales@xcellhost.cloud");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(353, "div")(354, "span");
      \u0275\u0275text(355, "Support portal");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(356, "a", 48);
      \u0275\u0275text(357, "supportdesk.xcellhost.cloud");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(358, "div")(359, "span");
      \u0275\u0275text(360, "Website");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(361, "a", 49);
      \u0275\u0275text(362, "www.xcellhost.cloud");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(363, "div")(364, "span");
      \u0275\u0275text(365, "Emergency support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(366, "strong");
      \u0275\u0275text(367, "+91-22-67111555 \xB7 +91-8657032540");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(368, "section", 50)(369, "span", 7);
      \u0275\u0275text(370, "22 \xB7 At a glance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(371, "h2");
      \u0275\u0275text(372, "SLA Summary");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(373, "div", 51);
      \u0275\u0275repeaterCreate(374, AcronisAdvancedXdrSlaPage_For_375_Template, 5, 2, "div", null, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(376, "section", 52)(377, "h2");
      \u0275\u0275text(378, "23. Disclaimer");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(379, "p");
      \u0275\u0275text(380, "This SLA applies to Acronis Advanced XDR (Extended Detection & Response) services delivered by XcellHost Cloud Services Pvt. Ltd. While the service provides advanced threat detection, cross-domain correlation, automated investigation and expert security monitoring, no cybersecurity solution can guarantee prevention of every cyberattack or security incident.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(381, "p");
      \u0275\u0275text(382, "Service effectiveness depends on proper deployment, supported environments, continuous connectivity, customer cooperation and timely implementation of recommended remediation actions.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(383, "section", 53)(384, "div", 54)(385, "div")(386, "span");
      \u0275\u0275text(387, "Need help with this SLA?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(388, "h2");
      \u0275\u0275text(389, "Talk to our security specialists");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(390, "a", 55);
      \u0275\u0275text(391, "Contact XcellHost ");
      \u0275\u0275elementStart(392, "span", 56);
      \u0275\u0275text(393, "\u2192");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(40);
      \u0275\u0275repeater(ctx.pageTopics);
      \u0275\u0275advance(22);
      \u0275\u0275repeater(ctx.serviceScope);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.availability);
      \u0275\u0275advance(26);
      \u0275\u0275repeater(ctx.emergencySupport);
      \u0275\u0275advance(21);
      \u0275\u0275repeater(ctx.incidentPriorities);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.detectionCoverage);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.capabilities);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.threatHunting);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.incidentResponse);
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.monitoring);
      \u0275\u0275advance(22);
      \u0275\u0275repeater(ctx.performanceTargets);
      \u0275\u0275advance(16);
      \u0275\u0275repeater(ctx.maintenance);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.customerResponsibilities);
      \u0275\u0275advance(10);
      \u0275\u0275repeater(ctx.xcellhostResponsibilities);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.securityFeatures);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.reports);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.exclusions);
      \u0275\u0275advance(17);
      \u0275\u0275repeater(ctx.serviceCredits);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.creditRules);
      \u0275\u0275advance(19);
      \u0275\u0275repeater(ctx.escalation);
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.optionalServices);
      \u0275\u0275advance(45);
      \u0275\u0275repeater(ctx.summary);
    }
  }, dependencies: [RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  --sla-navy:#071b43;\n  --sla-blue:#086dff;\n  --sla-soft:#f3f7fd;\n  --sla-line:#dce6f3;\n  --sla-text:#53627a;\n}\n.sla-page[_ngcontent-%COMP%] {\n  color: var(--sla-navy);\n  background: #fff;\n}\n.sla-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 86px 0 72px;\n  background:\n    linear-gradient(\n      135deg,\n      #061b45 0%,\n      #073376 58%,\n      #075fc2 100%);\n  color: #fff;\n}\n.sla-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(2px);\n  pointer-events: none;\n}\n.sla-orb-one[_ngcontent-%COMP%] {\n  right: -110px;\n  top: -180px;\n  width: 520px;\n  height: 520px;\n  border: 1px solid rgba(255, 255, 255, .15);\n  box-shadow: 0 0 0 70px rgba(255, 255, 255, .035), 0 0 0 140px rgba(255, 255, 255, .025);\n}\n.sla-orb-two[_ngcontent-%COMP%] {\n  left: 40%;\n  bottom: -250px;\n  width: 440px;\n  height: 440px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(14, 148, 255, .35),\n      transparent 68%);\n}\n.sla-hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.sla-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 28px;\n  color: #c7dbf7;\n  font-size: 12px;\n}\n.sla-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.sla-kicker[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 12px;\n  color: #70bdff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.sla-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0;\n  font: 700 clamp(39px, 5.4vw, 68px)/1.08 var(--disp);\n  letter-spacing: -.04em;\n}\n.sla-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #66c2ff;\n}\n.sla-hero[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 20px 0 30px;\n  color: #d5e5f8;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.sla-hero-metrics[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.sla-hero-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-width: 170px;\n  padding: 14px 18px;\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, .08);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.sla-hero-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.sla-hero-metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n.sla-hero-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.sla-hero-metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: #cfe2f8;\n  font-size: 11px;\n}\n.sla-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px minmax(0, 1fr);\n  gap: 56px;\n  align-items: start;\n  padding-top: 58px;\n  padding-bottom: 80px;\n}\n.sla-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 112px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid var(--sla-line);\n  border-radius: 14px;\n  background: var(--sla-soft);\n}\n.sla-nav[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-bottom: 11px;\n  font-size: 13px;\n}\n.sla-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 7px 0;\n  color: var(--sla-text);\n  font-size: 12px;\n  text-decoration: none;\n}\n.sla-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--sla-blue);\n}\n.sla-content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.sla-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 60px minmax(0, 1fr);\n  gap: 18px;\n  padding: 0 0 22px 0;\n  margin: 0 0 22px 0;\n  border-bottom: 1px solid var(--sla-line);\n  scroll-margin-top: 110px;\n}\n.sla-number[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 52px;\n  height: 34px;\n  border-radius: 99px;\n  background: #e9f3ff;\n  color: var(--sla-blue);\n  font-size: 11px;\n  font-weight: 800;\n}\n.sla-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.sla-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.sla-notes[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font: 700 clamp(24px, 2.5vw, 32px)/1.25 var(--disp);\n  letter-spacing: -.02em;\n}\n.sla-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 9px;\n  font-size: 15px;\n}\n.sla-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: var(--sla-text);\n  font-size: 14.5px;\n  line-height: 1.75;\n}\n.sla-check-grid[_ngcontent-%COMP%], \n.sla-exclusion-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 9px 16px;\n  margin: 16px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.sla-check-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], \n.sla-exclusion-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 11px 12px 11px 37px;\n  border: 1px solid var(--sla-line);\n  border-radius: 9px;\n  background: #fff;\n  color: var(--sla-navy);\n  font-size: 12px;\n  line-height: 1.45;\n}\n.sla-check-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\2713";\n  position: absolute;\n  left: 13px;\n  top: 10px;\n  color: #089a63;\n  font-weight: 800;\n}\n.sla-exclusion-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  background: #fff8f8;\n}\n.sla-exclusion-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\d7";\n  position: absolute;\n  left: 14px;\n  top: 9px;\n  color: #d13d4b;\n  font-size: 17px;\n  font-weight: 800;\n}\n.sla-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-top: 18px;\n  border: 1px solid var(--sla-line);\n  border-radius: 12px;\n}\n.sla-table-wrap[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\n.sla-table-wrap[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 12px 15px;\n  background: var(--sla-soft);\n  color: var(--sla-navy);\n  text-align: left;\n  font-size: 10px;\n  letter-spacing: .06em;\n  text-transform: uppercase;\n}\n.sla-table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 15px;\n  border-top: 1px solid var(--sla-line);\n  color: var(--sla-text);\n  line-height: 1.5;\n}\n.sla-table-wrap[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--sla-blue);\n}\n.sla-priority[_ngcontent-%COMP%] {\n  min-width: 720px;\n}\n.sla-priority[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child   strong[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  color: var(--sla-navy);\n}\n.sla-notice[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  padding: 16px 18px;\n  border-left: 4px solid var(--sla-blue);\n  border-radius: 0 10px 10px 0;\n  background: #edf6ff;\n}\n.sla-notice[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n  font-size: 13px;\n}\n.sla-notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n}\n.sla-footnote[_ngcontent-%COMP%] {\n  margin-top: 16px !important;\n  padding: 12px 15px;\n  border-radius: 8px;\n  background: var(--sla-soft);\n  font-size: 12px !important;\n}\n.sla-dual[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-top: 18px;\n}\n.sla-dual[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px solid var(--sla-line);\n  border-radius: 12px;\n}\n.sla-dual[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-top: 4px solid var(--sla-blue);\n}\n.sla-dual[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%], \n.sla-escalation[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 17px;\n  color: var(--sla-text);\n  font-size: 12px;\n  line-height: 1.7;\n}\n.sla-escalation[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-top: 18px;\n}\n.sla-escalation[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  padding: 18px;\n  border: 1px solid var(--sla-line);\n  border-radius: 12px;\n  background: var(--sla-soft);\n}\n.sla-escalation[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 8px;\n  color: var(--sla-blue);\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.sla-contact-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1px;\n  margin-top: 18px;\n  overflow: hidden;\n  border: 1px solid var(--sla-line);\n  border-radius: 12px;\n  background: var(--sla-line);\n}\n.sla-contact-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #fff;\n}\n.sla-contact-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child, \n.sla-contact-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  grid-column: 1/-1;\n}\n.sla-contact-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], \n.sla-contact-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.sla-contact-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: block;\n}\n.sla-contact-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  color: var(--sla-text);\n  font-size: 10px;\n  text-transform: uppercase;\n}\n.sla-contact-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.sla-contact-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--sla-navy);\n  font-size: 13px;\n  text-decoration: none;\n}\n.sla-contact-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--sla-blue);\n}\n.sla-summary[_ngcontent-%COMP%] {\n  padding: 34px;\n  margin: 0 0 28px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #071b43,\n      #0a438b);\n  color: #fff;\n  scroll-margin-top: 110px;\n}\n.sla-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n}\n.sla-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1px;\n  background: rgba(255, 255, 255, .14);\n}\n.sla-summary-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 13px 15px;\n  background: #0b3269;\n}\n.sla-summary-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c7dbf7;\n  font-size: 11px;\n}\n.sla-summary-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 12px;\n  text-align: right;\n}\n.sla-notes[_ngcontent-%COMP%] {\n  padding: 28px;\n  border: 1px solid #f1d99a;\n  border-radius: 14px;\n  background: #fffaf0;\n}\n.sla-notes[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.sla-notes[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #675c45;\n  font-size: 12.5px;\n  line-height: 1.65;\n}\n.sla-cta[_ngcontent-%COMP%] {\n  padding: 21px 0 21px 0;\n  background: #eef5fd;\n}\n.sla-cta[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.sla-cta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--sla-blue);\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.sla-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font: 700 clamp(24px, 3vw, 35px)/1.2 var(--disp);\n}\n.sla-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: inherit;\n  font-size: inherit;\n}\n@media (max-width: 900px) {\n  .sla-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sla-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .sla-escalation[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sla-dual[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 650px) {\n  .sla-hero[_ngcontent-%COMP%] {\n    padding: 62px 0 52px;\n  }\n  .sla-hero-metrics[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .sla-hero-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    grid-column: 1/-1;\n  }\n  .sla-layout[_ngcontent-%COMP%] {\n    padding-top: 40px;\n    padding-bottom: 54px;\n  }\n  .sla-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding-bottom: 17px;\n    margin-bottom: 17px;\n  }\n  .sla-check-grid[_ngcontent-%COMP%], \n   .sla-exclusion-grid[_ngcontent-%COMP%], \n   .sla-summary-grid[_ngcontent-%COMP%], \n   .sla-contact-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .sla-contact-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child, \n   .sla-contact-card[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    grid-column: auto;\n  }\n  .sla-summary[_ngcontent-%COMP%] {\n    padding: 24px 18px;\n  }\n  .sla-summary-grid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 4px;\n  }\n  .sla-summary-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .sla-cta[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .sla-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n.sla-section[_ngcontent-%COMP%], \n.sla-summary[_ngcontent-%COMP%], \n.sla-notes[_ngcontent-%COMP%] {\n  scroll-margin-top: 130px;\n}\n.sla-layout[_ngcontent-%COMP%] {\n  grid-template-columns: 250px minmax(0, 1fr);\n  gap: 46px;\n}\n.sla-nav[_ngcontent-%COMP%] {\n  max-height: calc(100vh - 132px);\n  overflow-y: auto;\n  padding: 18px 20px;\n  scrollbar-width: thin;\n}\n.sla-nav[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.sla-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 5px 0;\n  font-size: 11px;\n  line-height: 1.35;\n}\n.sla-responsibility-card[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px solid var(--sla-line);\n  border-radius: 12px;\n  background: #fff;\n}\n.sla-responsibility-card-accent[_ngcontent-%COMP%] {\n  border-top: 4px solid var(--sla-blue);\n}\n.sla-responsibility-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  color: var(--sla-text);\n  font-size: 12.5px;\n  line-height: 1.8;\n}\n@media (max-width: 900px) {\n  .sla-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=acronis-advanced-edr-sla.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AcronisAdvancedXdrSlaPage, [{
    type: Component,
    args: [{ selector: "xh-acronis-advanced-xdr-sla-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, host: { style: "display: contents" }, template: `<main class="sla-page">\r
  <section class="sla-hero">\r
    <div class="sla-orb sla-orb-one"></div><div class="sla-orb sla-orb-two"></div>\r
    <div class="wrap sla-hero-inner">\r
      <div class="sla-breadcrumb"><a routerLink="/">Home</a><span>\u203A</span><span>Service Level Agreements</span></div>\r
      <span class="sla-kicker">Service Level Agreement</span>\r
      <h1>Acronis Advanced <span>XDR SLA</span></h1>\r
      <p>Unified service commitments for cross-domain threat detection, continuous monitoring, investigation and rapid response.</p>\r
      <div class="sla-hero-metrics"><div><strong>99.9%</strong><span>XDR platform availability</span></div><div><strong>15 min</strong><span>Critical response</span></div><div><strong>24\xD77\xD7365</strong><span>SOC monitoring</span></div></div>\r
    </div>\r
  </section>\r
\r
  <div class="wrap sla-layout">\r
    <aside class="sla-nav" aria-label="SLA sections"><strong>On this page</strong>\r
      @for (topic of pageTopics; track topic[0]) { <a [href]="'#' + topic[0]" (click)="scrollToSection(topic[0], $event)">{{ topic[1] }}</a> }\r
    </aside>\r
    <article class="sla-content">\r
      <section id="purpose" class="sla-section"><span class="sla-number">01</span><div><h2>Purpose</h2>\r
        <p>This Service Level Agreement defines the service commitments, monitoring standards, threat detection capabilities, incident response, platform availability, support response times and customer responsibilities for the Acronis Advanced XDR (Extended Detection & Response) service provided by XcellHost Cloud Services Pvt. Ltd.</p>\r
        <p>Acronis Advanced XDR delivers unified threat detection and response by correlating telemetry across endpoints, email, identities, cloud workloads, servers and networks. The service provides centralized visibility, automated investigation, threat intelligence and rapid incident response to help organizations detect, contain and respond to sophisticated cyber threats.</p>\r
      </div></section>\r
\r
      <section id="service-scope" class="sla-section"><span class="sla-number">02</span><div><h2>Service Scope</h2><p>The Acronis Advanced XDR service includes:</p><ul class="sla-check-grid">@for (item of serviceScope; track item) { <li>{{ item }}</li> }</ul></div></section>\r
\r
      <section id="service-availability" class="sla-section"><span class="sla-number">03</span><div><h2>Service Availability</h2><div class="sla-table-wrap"><table><thead><tr><th>Service</th><th>SLA commitment</th></tr></thead><tbody>@for (row of availability; track row[0]) { <tr><td>{{ row[0] }}</td><td><strong>{{ row[1] }}</strong></td></tr> }</tbody></table></div></div></section>\r
\r
      <section id="support-hours" class="sla-section"><span class="sla-number">04</span><div><h2>Support Hours</h2><div class="sla-dual"><div><h3>Standard Support</h3><p>Monday\u2013Saturday<br><strong>9:00 AM\u20137:00 PM IST</strong></p><h3>Security Operations Center</h3><p><strong>24\xD77\xD7365 continuous monitoring</strong></p></div><div><h3>Emergency Security Support</h3><ul>@for (item of emergencySupport; track item) { <li>{{ item }}</li> }</ul></div></div></div></section>\r
\r
      <section id="incident-priority-matrix" class="sla-section"><span class="sla-number">05</span><div><h2>Incident Priority Matrix</h2><div class="sla-table-wrap"><table class="sla-priority"><thead><tr><th>Priority</th><th>Description</th><th>Response time</th><th>Initial containment</th></tr></thead><tbody>@for (row of incidentPriorities; track row[0]) { <tr><td><strong>{{ row[0] }}</strong></td><td>{{ row[1] }}</td><td>{{ row[2] }}</td><td>{{ row[3] }}</td></tr> }</tbody></table></div></div></section>\r
\r
      <section id="xdr-detection-coverage" class="sla-section"><span class="sla-number">06</span><div><h2>XDR Detection Coverage</h2><p>The service continuously monitors:</p><div class="sla-escalation">@for (group of detectionCoverage; track group.title) { <article><span>Coverage</span><h3>{{ group.title }}</h3><ul>@for (item of group.items; track item) { <li>{{ item }}</li> }</ul></article> }</div></div></section>\r
\r
      <section id="xdr-capabilities" class="sla-section"><span class="sla-number">07</span><div><h2>XDR Capabilities</h2><p>The platform includes:</p><ul class="sla-check-grid">@for (item of capabilities; track item) { <li>{{ item }}</li> }</ul></div></section>\r
\r
      <section id="threat-hunting" class="sla-section"><span class="sla-number">08</span><div><h2>Threat Hunting</h2><p>The Security Operations Center performs:</p><ul class="sla-check-grid">@for (item of threatHunting; track item) { <li>{{ item }}</li> }</ul></div></section>\r
\r
      <section id="incident-response" class="sla-section"><span class="sla-number">09</span><div><h2>Incident Response</h2><p>Upon confirmation of a threat, XcellHost may perform:</p><ul class="sla-check-grid">@for (item of incidentResponse; track item) { <li>{{ item }}</li> }</ul><p class="sla-footnote">Response actions requiring customer approval will be performed according to the subscribed service plan.</p></div></section>\r
\r
      <section id="monitoring-services" class="sla-section"><span class="sla-number">10</span><div><h2>Monitoring Services</h2><p>Continuous monitoring includes:</p><ul class="sla-check-grid">@for (item of monitoring; track item) { <li>{{ item }}</li> }</ul><div class="sla-notice"><strong>Always on</strong><p>Monitoring is performed 24\xD77\xD7365.</p></div></div></section>\r
\r
      <section id="performance-targets" class="sla-section"><span class="sla-number">11</span><div><h2>Performance Targets</h2><div class="sla-table-wrap"><table><thead><tr><th>Service</th><th>Target</th></tr></thead><tbody>@for (row of performanceTargets; track row[0]) { <tr><td>{{ row[0] }}</td><td><strong>{{ row[1] }}</strong></td></tr> }</tbody></table></div></div></section>\r
\r
      <section id="maintenance-window" class="sla-section"><span class="sla-number">12</span><div><h2>Maintenance Window</h2><div class="sla-notice"><strong>Regular maintenance</strong><p>Sunday, 11:00 PM\u20133:00 AM IST</p></div><p>Maintenance includes:</p><ul class="sla-check-grid">@for (item of maintenance; track item) { <li>{{ item }}</li> }</ul><p class="sla-footnote">Customers will receive at least 48 hours\u2019 advance notice whenever possible.</p></div></section>\r
\r
      <section id="customer-responsibilities" class="sla-section"><span class="sla-number">13</span><div><h2>Customer Responsibilities</h2><div class="sla-responsibility-card"><ul>@for (item of customerResponsibilities; track item) { <li>{{ item }}</li> }</ul></div></div></section>\r
\r
      <section id="xcellhost-responsibilities" class="sla-section"><span class="sla-number">14</span><div><h2>XcellHost Responsibilities</h2><div class="sla-responsibility-card sla-responsibility-card-accent"><ul>@for (item of xcellhostResponsibilities; track item) { <li>{{ item }}</li> }</ul></div></div></section>\r
\r
      <section id="security-features" class="sla-section"><span class="sla-number">15</span><div><h2>Security Features</h2><p>Included features:</p><ul class="sla-check-grid">@for (item of securityFeatures; track item) { <li>{{ item }}</li> }</ul></div></section>\r
\r
      <section id="reporting" class="sla-section"><span class="sla-number">16</span><div><h2>Reporting</h2><p>Monthly reports include:</p><ul class="sla-check-grid">@for (item of reports; track item) { <li>{{ item }}</li> }</ul></div></section>\r
\r
      <section id="service-exclusions" class="sla-section"><span class="sla-number">17</span><div><h2>Service Exclusions</h2><p>This SLA does not cover:</p><ul class="sla-exclusion-grid">@for (item of exclusions; track item) { <li>{{ item }}</li> }</ul></div></section>\r
\r
      <section id="service-credits" class="sla-section"><span class="sla-number">18</span><div><h2>Service Credits</h2><div class="sla-table-wrap"><table><thead><tr><th>Monthly availability</th><th>Service credit</th></tr></thead><tbody>@for (row of serviceCredits; track row[0]) { <tr><td>{{ row[0] }}</td><td><strong>{{ row[1] }}</strong></td></tr> }</tbody></table></div><div class="sla-notice"><strong>Service credit conditions</strong><p>@for (rule of creditRules; track rule) { {{ rule }}<br> }</p></div></div></section>\r
\r
      <section id="escalation-matrix" class="sla-section"><span class="sla-number">19</span><div><h2>Escalation Matrix</h2><div class="sla-table-wrap"><table><thead><tr><th>Level</th><th>Team</th><th>Responsibility</th></tr></thead><tbody>@for (row of escalation; track row[0]) { <tr><td><strong>{{ row[0] }}</strong></td><td>{{ row[1] }}</td><td>{{ row[2] }}</td></tr> }</tbody></table></div></div></section>\r
\r
      <section id="optional-value-added-services" class="sla-section"><span class="sla-number">20</span><div><h2>Optional Value-Added Services</h2><p>Customers may enhance their XDR deployment with:</p><ul class="sla-check-grid">@for (item of optionalServices; track item) { <li>{{ item }}</li> }</ul></div></section>\r
\r
      <section id="contact-information" class="sla-section"><span class="sla-number">21</span><div><h2>Contact Information</h2><div class="sla-contact-card"><div><span>Company</span><strong>XcellHost Cloud Services Pvt. Ltd.</strong></div><div><span>Support</span><a href="mailto:support@xcellhost.cloud">support@xcellhost.cloud</a></div><div><span>Sales</span><a href="mailto:sales@xcellhost.cloud">sales@xcellhost.cloud</a></div><div><span>Support portal</span><a href="https://supportdesk.xcellhost.cloud/" target="_blank" rel="noopener">supportdesk.xcellhost.cloud</a></div><div><span>Website</span><a href="https://www.xcellhost.cloud" target="_blank" rel="noopener">www.xcellhost.cloud</a></div><div><span>Emergency support</span><strong>+91-22-67111555 \xB7 +91-8657032540</strong></div></div></div></section>\r
\r
      <section id="sla-summary" class="sla-summary"><span class="sla-kicker">22 \xB7 At a glance</span><h2>SLA Summary</h2><div class="sla-summary-grid">@for (row of summary; track row[0]) { <div><span>{{ row[0] }}</span><strong>{{ row[1] }}</strong></div> }</div></section>\r
\r
      <section id="disclaimer" class="sla-notes"><h2>23. Disclaimer</h2><p>This SLA applies to Acronis Advanced XDR (Extended Detection & Response) services delivered by XcellHost Cloud Services Pvt. Ltd. While the service provides advanced threat detection, cross-domain correlation, automated investigation and expert security monitoring, no cybersecurity solution can guarantee prevention of every cyberattack or security incident.</p><p>Service effectiveness depends on proper deployment, supported environments, continuous connectivity, customer cooperation and timely implementation of recommended remediation actions.</p></section>\r
    </article>\r
  </div>\r
\r
  <section class="sla-cta"><div class="wrap"><div><span>Need help with this SLA?</span><h2>Talk to our security specialists</h2></div><a class="btn btn-primary" routerLink="/contact">Contact XcellHost <span aria-hidden="true">\u2192</span></a></div></section>\r
</main>\r
`, styles: ['/* src/app/pages/acronis-advanced-edr-sla.page.css */\n:host {\n  --sla-navy:#071b43;\n  --sla-blue:#086dff;\n  --sla-soft:#f3f7fd;\n  --sla-line:#dce6f3;\n  --sla-text:#53627a;\n}\n.sla-page {\n  color: var(--sla-navy);\n  background: #fff;\n}\n.sla-hero {\n  position: relative;\n  overflow: hidden;\n  padding: 86px 0 72px;\n  background:\n    linear-gradient(\n      135deg,\n      #061b45 0%,\n      #073376 58%,\n      #075fc2 100%);\n  color: #fff;\n}\n.sla-orb {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(2px);\n  pointer-events: none;\n}\n.sla-orb-one {\n  right: -110px;\n  top: -180px;\n  width: 520px;\n  height: 520px;\n  border: 1px solid rgba(255, 255, 255, .15);\n  box-shadow: 0 0 0 70px rgba(255, 255, 255, .035), 0 0 0 140px rgba(255, 255, 255, .025);\n}\n.sla-orb-two {\n  left: 40%;\n  bottom: -250px;\n  width: 440px;\n  height: 440px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(14, 148, 255, .35),\n      transparent 68%);\n}\n.sla-hero-inner {\n  position: relative;\n  z-index: 1;\n}\n.sla-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 28px;\n  color: #c7dbf7;\n  font-size: 12px;\n}\n.sla-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\n.sla-kicker {\n  display: inline-block;\n  margin-bottom: 12px;\n  color: #70bdff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.sla-hero h1 {\n  max-width: 820px;\n  margin: 0;\n  font: 700 clamp(39px, 5.4vw, 68px)/1.08 var(--disp);\n  letter-spacing: -.04em;\n}\n.sla-hero h1 span {\n  color: #66c2ff;\n}\n.sla-hero > div > p {\n  max-width: 720px;\n  margin: 20px 0 30px;\n  color: #d5e5f8;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.sla-hero-metrics {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n}\n.sla-hero-metrics div {\n  min-width: 170px;\n  padding: 14px 18px;\n  border: 1px solid rgba(255, 255, 255, .18);\n  border-radius: 12px;\n  background: rgba(255, 255, 255, .08);\n  -webkit-backdrop-filter: blur(8px);\n  backdrop-filter: blur(8px);\n}\n.sla-hero-metrics strong,\n.sla-hero-metrics span {\n  display: block;\n}\n.sla-hero-metrics strong {\n  font-size: 22px;\n}\n.sla-hero-metrics span {\n  margin-top: 2px;\n  color: #cfe2f8;\n  font-size: 11px;\n}\n.sla-layout {\n  display: grid;\n  grid-template-columns: 220px minmax(0, 1fr);\n  gap: 56px;\n  align-items: start;\n  padding-top: 58px;\n  padding-bottom: 80px;\n}\n.sla-nav {\n  position: sticky;\n  top: 112px;\n  display: flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid var(--sla-line);\n  border-radius: 14px;\n  background: var(--sla-soft);\n}\n.sla-nav strong {\n  margin-bottom: 11px;\n  font-size: 13px;\n}\n.sla-nav a {\n  padding: 7px 0;\n  color: var(--sla-text);\n  font-size: 12px;\n  text-decoration: none;\n}\n.sla-nav a:hover {\n  color: var(--sla-blue);\n}\n.sla-content {\n  min-width: 0;\n}\n.sla-section {\n  display: grid;\n  grid-template-columns: 60px minmax(0, 1fr);\n  gap: 18px;\n  padding: 0 0 22px 0;\n  margin: 0 0 22px 0;\n  border-bottom: 1px solid var(--sla-line);\n  scroll-margin-top: 110px;\n}\n.sla-number {\n  display: grid;\n  place-items: center;\n  width: 52px;\n  height: 34px;\n  border-radius: 99px;\n  background: #e9f3ff;\n  color: var(--sla-blue);\n  font-size: 11px;\n  font-weight: 800;\n}\n.sla-section h2,\n.sla-summary h2,\n.sla-notes h2 {\n  margin: 0 0 14px;\n  font: 700 clamp(24px, 2.5vw, 32px)/1.25 var(--disp);\n  letter-spacing: -.02em;\n}\n.sla-section h3 {\n  margin: 0 0 9px;\n  font-size: 15px;\n}\n.sla-section p {\n  margin: 0 0 14px;\n  color: var(--sla-text);\n  font-size: 14.5px;\n  line-height: 1.75;\n}\n.sla-check-grid,\n.sla-exclusion-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 9px 16px;\n  margin: 16px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.sla-check-grid li,\n.sla-exclusion-grid li {\n  position: relative;\n  padding: 11px 12px 11px 37px;\n  border: 1px solid var(--sla-line);\n  border-radius: 9px;\n  background: #fff;\n  color: var(--sla-navy);\n  font-size: 12px;\n  line-height: 1.45;\n}\n.sla-check-grid li:before {\n  content: "\\2713";\n  position: absolute;\n  left: 13px;\n  top: 10px;\n  color: #089a63;\n  font-weight: 800;\n}\n.sla-exclusion-grid li {\n  background: #fff8f8;\n}\n.sla-exclusion-grid li:before {\n  content: "\\d7";\n  position: absolute;\n  left: 14px;\n  top: 9px;\n  color: #d13d4b;\n  font-size: 17px;\n  font-weight: 800;\n}\n.sla-table-wrap {\n  overflow-x: auto;\n  margin-top: 18px;\n  border: 1px solid var(--sla-line);\n  border-radius: 12px;\n}\n.sla-table-wrap table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\n.sla-table-wrap th {\n  padding: 12px 15px;\n  background: var(--sla-soft);\n  color: var(--sla-navy);\n  text-align: left;\n  font-size: 10px;\n  letter-spacing: .06em;\n  text-transform: uppercase;\n}\n.sla-table-wrap td {\n  padding: 14px 15px;\n  border-top: 1px solid var(--sla-line);\n  color: var(--sla-text);\n  line-height: 1.5;\n}\n.sla-table-wrap td strong {\n  color: var(--sla-blue);\n}\n.sla-priority {\n  min-width: 720px;\n}\n.sla-priority td:first-child strong {\n  white-space: nowrap;\n  color: var(--sla-navy);\n}\n.sla-notice {\n  margin-top: 18px;\n  padding: 16px 18px;\n  border-left: 4px solid var(--sla-blue);\n  border-radius: 0 10px 10px 0;\n  background: #edf6ff;\n}\n.sla-notice strong {\n  display: block;\n  margin-bottom: 3px;\n  font-size: 13px;\n}\n.sla-notice p {\n  margin: 0;\n  font-size: 12px;\n}\n.sla-footnote {\n  margin-top: 16px !important;\n  padding: 12px 15px;\n  border-radius: 8px;\n  background: var(--sla-soft);\n  font-size: 12px !important;\n}\n.sla-dual {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n  margin-top: 18px;\n}\n.sla-dual > div {\n  padding: 20px;\n  border: 1px solid var(--sla-line);\n  border-radius: 12px;\n}\n.sla-dual > div:last-child {\n  border-top: 4px solid var(--sla-blue);\n}\n.sla-dual ul,\n.sla-escalation ul {\n  margin: 0;\n  padding-left: 17px;\n  color: var(--sla-text);\n  font-size: 12px;\n  line-height: 1.7;\n}\n.sla-escalation {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n  margin-top: 18px;\n}\n.sla-escalation article {\n  padding: 18px;\n  border: 1px solid var(--sla-line);\n  border-radius: 12px;\n  background: var(--sla-soft);\n}\n.sla-escalation article > span {\n  display: inline-block;\n  margin-bottom: 8px;\n  color: var(--sla-blue);\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.sla-contact-card {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1px;\n  margin-top: 18px;\n  overflow: hidden;\n  border: 1px solid var(--sla-line);\n  border-radius: 12px;\n  background: var(--sla-line);\n}\n.sla-contact-card div {\n  padding: 16px;\n  background: #fff;\n}\n.sla-contact-card div:first-child,\n.sla-contact-card div:last-child {\n  grid-column: 1/-1;\n}\n.sla-contact-card span,\n.sla-contact-card strong,\n.sla-contact-card a {\n  display: block;\n}\n.sla-contact-card span {\n  margin-bottom: 4px;\n  color: var(--sla-text);\n  font-size: 10px;\n  text-transform: uppercase;\n}\n.sla-contact-card strong,\n.sla-contact-card a {\n  color: var(--sla-navy);\n  font-size: 13px;\n  text-decoration: none;\n}\n.sla-contact-card a:hover {\n  color: var(--sla-blue);\n}\n.sla-summary {\n  padding: 34px;\n  margin: 0 0 28px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #071b43,\n      #0a438b);\n  color: #fff;\n  scroll-margin-top: 110px;\n}\n.sla-summary h2 {\n  margin-bottom: 22px;\n}\n.sla-summary-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1px;\n  background: rgba(255, 255, 255, .14);\n}\n.sla-summary-grid div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 13px 15px;\n  background: #0b3269;\n}\n.sla-summary-grid span {\n  color: #c7dbf7;\n  font-size: 11px;\n}\n.sla-summary-grid strong {\n  color: #fff;\n  font-size: 12px;\n  text-align: right;\n}\n.sla-notes {\n  padding: 28px;\n  border: 1px solid #f1d99a;\n  border-radius: 14px;\n  background: #fffaf0;\n}\n.sla-notes h2 {\n  font-size: 22px;\n}\n.sla-notes p {\n  margin: 8px 0;\n  color: #675c45;\n  font-size: 12.5px;\n  line-height: 1.65;\n}\n.sla-cta {\n  padding: 21px 0 21px 0;\n  background: #eef5fd;\n}\n.sla-cta .wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n}\n.sla-cta span {\n  color: var(--sla-blue);\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\n.sla-cta h2 {\n  margin: 5px 0 0;\n  font: 700 clamp(24px, 3vw, 35px)/1.2 var(--disp);\n}\n.sla-cta a span {\n  color: inherit;\n  font-size: inherit;\n}\n@media (max-width: 900px) {\n  .sla-layout {\n    grid-template-columns: 1fr;\n  }\n  .sla-nav {\n    display: none;\n  }\n  .sla-escalation {\n    grid-template-columns: 1fr;\n  }\n  .sla-dual {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 650px) {\n  .sla-hero {\n    padding: 62px 0 52px;\n  }\n  .sla-hero-metrics {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n  }\n  .sla-hero-metrics div:last-child {\n    grid-column: 1/-1;\n  }\n  .sla-layout {\n    padding-top: 40px;\n    padding-bottom: 54px;\n  }\n  .sla-section {\n    grid-template-columns: 1fr;\n    gap: 12px;\n    padding-bottom: 17px;\n    margin-bottom: 17px;\n  }\n  .sla-check-grid,\n  .sla-exclusion-grid,\n  .sla-summary-grid,\n  .sla-contact-card {\n    grid-template-columns: 1fr;\n  }\n  .sla-contact-card div:first-child,\n  .sla-contact-card div:last-child {\n    grid-column: auto;\n  }\n  .sla-summary {\n    padding: 24px 18px;\n  }\n  .sla-summary-grid div {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 4px;\n  }\n  .sla-summary-grid strong {\n    text-align: left;\n  }\n  .sla-cta .wrap {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .sla-cta a {\n    width: 100%;\n    text-align: center;\n  }\n}\n.sla-section,\n.sla-summary,\n.sla-notes {\n  scroll-margin-top: 130px;\n}\n.sla-layout {\n  grid-template-columns: 250px minmax(0, 1fr);\n  gap: 46px;\n}\n.sla-nav {\n  max-height: calc(100vh - 132px);\n  overflow-y: auto;\n  padding: 18px 20px;\n  scrollbar-width: thin;\n}\n.sla-nav strong {\n  margin-bottom: 8px;\n}\n.sla-nav a {\n  padding: 5px 0;\n  font-size: 11px;\n  line-height: 1.35;\n}\n.sla-responsibility-card {\n  padding: 20px;\n  border: 1px solid var(--sla-line);\n  border-radius: 12px;\n  background: #fff;\n}\n.sla-responsibility-card-accent {\n  border-top: 4px solid var(--sla-blue);\n}\n.sla-responsibility-card ul {\n  margin: 0;\n  padding-left: 18px;\n  color: var(--sla-text);\n  font-size: 12.5px;\n  line-height: 1.8;\n}\n@media (max-width: 900px) {\n  .sla-layout {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=acronis-advanced-edr-sla.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcronisAdvancedXdrSlaPage, { className: "AcronisAdvancedXdrSlaPage", filePath: "src/app/pages/acronis-advanced-xdr-sla.page.ts", lineNumber: 16 });
})();
export {
  AcronisAdvancedXdrSlaPage
};
//# sourceMappingURL=chunk-DXFKGOGH.js.map
