import {
  ResellerProgramContentComponent
} from "./chunk-XD3KN7K4.js";
import "./chunk-CUVUGSTP.js";
import {
  HeroNetDirective
} from "./chunk-CRL34XPE.js";
import "./chunk-APIH6CFY.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  COMPANY_PAGES
} from "./chunk-I226T5VJ.js";
import {
  WORLD_MAP_HTML
} from "./chunk-LN7P5EZP.js";
import {
  toSignal
} from "./chunk-M5OSJJBF.js";
import "./chunk-6N6WYEKF.js";
import "./chunk-PHEWPDI5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  ViewEncapsulation,
  computed,
  effect,
  inject,
  map,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
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
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/data/team-structure.data.ts
var TEAM_STRUCTURE = [
  {
    id: "technology",
    name: "Technology & Operations",
    motto: "Build. Operate. Secure.",
    icon: "settings",
    departments: [
      { name: "Cloud Infrastructure & Engineering", roles: ["Cloud Operations Manager", "Cloud Architect", "Windows Cloud Administrator (L1/L2/L3)", "Linux Cloud Administrator (L1/L2/L3)", "Virtualization Engineer", "Storage Engineer", "Data Center Engineer", "AWS / Azure / GCP / OCI Cloud Engineer"] },
      { name: "NOC \u2014 Network Operations Center", roles: ["NOC Manager", "NOC Engineer (L1/L2/L3)", "Network Engineer", "Firewall Engineer", "Monitoring Engineer", "Incident Manager", "Data Center Operations Engineer"] },
      { name: "SOC & Cybersecurity", roles: ["CISO / Head of Cybersecurity", "SOC Manager", "SOC Analyst (L1/L2/L3)", "SIEM Engineer", "XDR / EDR Engineer", "Security Engineer", "Vulnerability Assessment Engineer", "Penetration Tester", "Incident Response Analyst", "Threat Intelligence Analyst", "GRC / Compliance Specialist"] },
      { name: "Backup, DR & Business Continuity", roles: ["Backup & DR Manager", "Backup Architect", "Backup Engineer", "Disaster Recovery Engineer", "Acronis Specialist", "Business Continuity Consultant"] },
      { name: "DevOps & Automation", roles: ["DevOps Manager", "DevOps Architect", "DevOps Engineer", "Kubernetes Engineer", "Site Reliability Engineer", "Cloud Automation Engineer", "Infrastructure-as-Code Engineer", "AI Automation Engineer"] },
      { name: "Technical Support & Service Desk", roles: ["Service Desk Manager", "Technical Support Lead", "Support Engineer (L1/L2/L3)", "Desktop / Cloud Desktop Support", "Customer Support Engineer", "Incident Coordinator", "Knowledge Base Manager"] },
      { name: "Technical Support & Service Delivery", roles: ["Technical Support Engineer", "Support Coordinator", "Customer Support Engineer", "Incident Coordinator", "Knowledge Base Researcher"] }
    ]
  },
  {
    id: "delivery",
    name: "Customer Delivery",
    motto: "Implement. Support. Succeed.",
    icon: "groups",
    departments: [
      { name: "Professional Services & Projects", roles: ["Professional Services Manager", "Enterprise Solution Architect", "Cloud Migration Consultant", "Implementation Engineer", "Technical Project Manager", "Solution Consultant", "Pre-Sales Cloud Consultant", "Pre-Sales Security Consultant"] },
      { name: "Customer Success & Service Delivery", roles: ["Head of Customer Success", "Customer Success Manager", "Service Delivery Manager", "Technical Account Manager", "Customer Success Engineer", "Client Onboarding Executive", "Renewal / Retention Executive"] }
    ]
  },
  {
    id: "business",
    name: "Business & Revenue",
    motto: "Market. Sell. Grow.",
    icon: "trending_up",
    departments: [
      { name: "Sales & Channel", roles: ["VP / Head of Sales", "Enterprise Sales Manager", "Cloud Sales Consultant", "Cybersecurity Sales Manager", "Business Development Manager", "Inside Sales Executive", "Field Sales", "Key Account Manager", "Channel Sales Manager", "Partner Account Manager", "Alliance Manager", "Renewal Manager", "Sales Coordinator"] },
      { name: "Marketing", roles: ["Head / CMO", "Digital Marketing Manager", "SEO Specialist", "Social Media Manager", "Content Marketing Manager", "Technical Content Writer", "Graphic Designer", "Video Editor", "Performance Marketing Specialist", "Email Marketing Executive", "WhatsApp Marketing Executive", "Marketing Automation Specialist"] },
      { name: "Product & SaaS Marketplace", roles: ["Chief Product Officer", "Cloud Product Manager", "Cybersecurity Product Manager", "SaaS Marketplace Product Manager", "Product Marketing Manager", "Product Analyst", "Business Analyst", "UI/UX Designer"] }
    ]
  },
  {
    id: "corporate",
    name: "Corporate & Innovation",
    motto: "Enable. Govern. Transform.",
    icon: "lightbulb",
    departments: [
      { name: "Finance, Billing & Collections", roles: ["CFO / Finance Head", "Accounts Manager", "Billing Manager", "Billing Executive", "Accounts Receivable", "Accounts Payable", "Collection Executive", "MIS Executive", "Tax / GST Specialist"] },
      { name: "HR & Administration", roles: ["HR Manager", "HR Executive", "IT Recruiter / Talent Acquisition", "Learning & Development", "Payroll", "Office Administration", "Procurement", "Vendor Management"] },
      { name: "Legal, Risk & Compliance", roles: ["Legal Head / Consultant", "Contract Manager", "Compliance Officer", "Data Protection Officer", "Risk Manager"] },
      { name: "Partner & Marketplace Operations", roles: ["Partner Program Manager", "Channel Enablement Manager", "Partner Success Manager", "OEM / Vendor Relationship Manager", "Marketplace Operations Executive", "Partner Support Engineer"] },
      { name: "AI & Innovation", roles: ["Head of AI / Innovation", "AI Solutions Architect", "Generative AI Engineer", "AI Automation Specialist", "AI Security Engineer", "Data Scientist", "ML Engineer"] }
    ]
  }
];

// src/app/sections/team-structure.component.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
function TeamStructureComponent_For_35_For_11_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const role_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(role_r1);
  }
}
function TeamStructureComponent_For_35_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li")(1, "details")(2, "summary")(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "span", 16);
    \u0275\u0275text(6, "+");
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(7, "ul", 17);
    \u0275\u0275repeaterCreate(8, TeamStructureComponent_For_35_For_11_For_9_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const department_r2 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(department_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(department_r2.roles);
  }
}
function TeamStructureComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "li", 11)(1, "header", 14)(2, "span", 7);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div")(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(9, "ul", 15);
    \u0275\u0275repeaterCreate(10, TeamStructureComponent_For_35_For_11_Template, 10, 1, "li", null, _forTrack1);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const division_r3 = ctx.$implicit;
    \u0275\u0275attribute("data-division", division_r3.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(division_r3.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(division_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(division_r3.motto);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", division_r3.name + " departments");
    \u0275\u0275advance();
    \u0275\u0275repeater(division_r3.departments);
  }
}
var TeamStructureComponent = class _TeamStructureComponent {
  divisions = TEAM_STRUCTURE;
  host = inject(ElementRef);
  setExpanded(open) {
    this.host.nativeElement.querySelectorAll("details").forEach((department) => {
      department.open = open;
    });
  }
  static \u0275fac = function TeamStructureComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamStructureComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeamStructureComponent, selectors: [["xh-team-structure"]], decls: 79, vars: 0, consts: [["aria-labelledby", "team-structure-title", 1, "team-structure"], [1, "wrap"], [1, "structure-heading"], [1, "structure-eyebrow"], ["id", "team-structure-title"], [1, "structure-principles"], [1, "structure-leader"], ["aria-hidden", "true", 1, "material-symbols-outlined"], [1, "structure-controls"], ["type", "button", "aria-controls", "structure-divisions", 3, "click"], ["id", "structure-divisions", "aria-label", "Divisions reporting to the Managing Director / CEO", 1, "structure-divisions"], [1, "structure-division"], ["aria-label", "Our service pillars", 1, "structure-services"], [1, "structure-signoff"], [1, "division-heading"], [1, "structure-departments"], ["aria-hidden", "true", 1, "department-chevron"], [1, "department-roles"]], template: function TeamStructureComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "div", 1)(2, "header", 2)(3, "span", 3);
      \u0275\u0275text(4, "How our team works together");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "h2", 4);
      \u0275\u0275text(6, "XcellHost Cloud Team Structure");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(7, "p", 5);
      \u0275\u0275text(8, "People ");
      \u0275\u0275domElementStart(9, "span");
      \u0275\u0275text(10, "\xB7");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(11, " Technology ");
      \u0275\u0275domElementStart(12, "span");
      \u0275\u0275text(13, "\xB7");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(14, " Security ");
      \u0275\u0275domElementStart(15, "span");
      \u0275\u0275text(16, "\xB7");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(17, " Service ");
      \u0275\u0275domElementStart(18, "span");
      \u0275\u0275text(19, "\xB7");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(20, " Growth");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(21, "div", 6)(22, "span", 7);
      \u0275\u0275text(23, "person");
      \u0275\u0275domElementEnd();
      \u0275\u0275text(24, "Managing Director / CEO");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "div", 8)(26, "p");
      \u0275\u0275text(27, "Select a department to explore its roles.");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "div")(29, "button", 9);
      \u0275\u0275domListener("click", function TeamStructureComponent_Template_button_click_29_listener() {
        return ctx.setExpanded(true);
      });
      \u0275\u0275text(30, "Expand all roles");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "button", 9);
      \u0275\u0275domListener("click", function TeamStructureComponent_Template_button_click_31_listener() {
        return ctx.setExpanded(false);
      });
      \u0275\u0275text(32, "Collapse all");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(33, "ol", 10);
      \u0275\u0275repeaterCreate(34, TeamStructureComponent_For_35_Template, 12, 5, "li", 11, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(36, "div", 12)(37, "div")(38, "span", 7);
      \u0275\u0275text(39, "cloud");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(40, "p")(41, "b");
      \u0275\u0275text(42, "Cloud");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "span");
      \u0275\u0275text(44, "Flexible infrastructure for a brighter future");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(45, "div")(46, "span", 7);
      \u0275\u0275text(47, "shield");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "p")(49, "b");
      \u0275\u0275text(50, "Security");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(51, "span");
      \u0275\u0275text(52, "Protection you can trust");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(53, "div")(54, "span", 7);
      \u0275\u0275text(55, "database");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "p")(57, "b");
      \u0275\u0275text(58, "Backup & DR");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "span");
      \u0275\u0275text(60, "Business continuity, always on");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(61, "div")(62, "span", 7);
      \u0275\u0275text(63, "support_agent");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(64, "p")(65, "b");
      \u0275\u0275text(66, "Managed Services");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(67, "span");
      \u0275\u0275text(68, "Expert support every step");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(69, "div")(70, "span", 7);
      \u0275\u0275text(71, "grid_view");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(72, "p")(73, "b");
      \u0275\u0275text(74, "SaaS");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(75, "span");
      \u0275\u0275text(76, "Tools for a smarter tomorrow");
      \u0275\u0275domElementEnd()()()();
      \u0275\u0275domElementStart(77, "p", 13);
      \u0275\u0275text(78, "Together, we go further.");
      \u0275\u0275domElementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(34);
      \u0275\u0275repeater(ctx.divisions);
    }
  }, styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.team-structure[_ngcontent-%COMP%] {\n  padding: 72px 0 54px;\n  background:\n    linear-gradient(\n      160deg,\n      #f1f8ff,\n      #fff 55%,\n      #f6f4ff);\n  color: var(--navy,#041e42);\n}\n.structure-heading[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 850px;\n  margin: 0 auto 30px;\n}\n.structure-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 14px;\n  color: #1565d8;\n  font: 600 11px/1.5 var(--mono,monospace);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.structure-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font: 700 clamp(28px, 3.3vw, 42px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -.03em;\n}\n.structure-principles[_ngcontent-%COMP%] {\n  margin: 18px 0 0;\n  color: #51607a;\n  font-size: 15px;\n  line-height: 1.8;\n}\n.structure-principles[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin: 0 9px;\n  color: #1565d8;\n}\n.structure-leader[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  max-width: 380px;\n  margin: 0 auto;\n  padding: 18px 20px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      120deg,\n      #1565d8,\n      #073a80);\n  color: #fff;\n  font-weight: 700;\n  text-align: center;\n  box-shadow: 0 8px 20px #1565d81a;\n}\n.structure-leader[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  height: 93px;\n  border-left: 2px solid #afc5e5;\n}\n.structure-controls[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  min-height: 70px;\n  padding: 18px 0;\n}\n.structure-controls[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #51607a;\n  background: #f5f9ff;\n}\n.structure-controls[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.structure-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid #cfdded;\n  border-radius: 8px;\n  padding: 8px 12px;\n  color: #0a4ea5;\n  background: #fff;\n  font: 600 12px/1.4 var(--body,sans-serif);\n  cursor: pointer;\n}\n.structure-controls[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #eaf3ff;\n}\n.structure-divisions[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  list-style: none;\n  padding: 22px 0 0;\n  margin: 0;\n}\n.structure-division[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n  --division:#086bcc;\n  --division-soft:#edf7ff;\n}\n.structure-division[data-division=delivery][_ngcontent-%COMP%] {\n  --division:#079857;\n  --division-soft:#edfaf4;\n}\n.structure-division[data-division=business][_ngcontent-%COMP%] {\n  --division:#d84a08;\n  --division-soft:#fff4ec;\n}\n.structure-division[data-division=corporate][_ngcontent-%COMP%] {\n  --division:#603bab;\n  --division-soft:#f5f0ff;\n}\n.structure-division[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -22px;\n  left: -8px;\n  right: -8px;\n  border-top: 2px solid #afc5e5;\n}\n.structure-division[_ngcontent-%COMP%]:first-child::before {\n  left: 50%;\n}\n.structure-division[_ngcontent-%COMP%]:last-child::before {\n  right: 50%;\n}\n.division-heading[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 98px;\n  padding: 16px 14px;\n  border-radius: 12px;\n  background: var(--division);\n  color: #fff;\n}\n.division-heading[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  height: 22px;\n  border-left: 2px solid #afc5e5;\n}\n.division-heading[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 28px;\n  flex-shrink: 0;\n}\n.division-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 700 15px/1.4 var(--disp,sans-serif);\n  color: inherit;\n  margin: 0;\n}\n.division-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 5px 0 0;\n  font-size: 11px;\n  line-height: 1.5;\n  color: #fff;\n}\n.structure-departments[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 14px 0 0;\n  margin: 0;\n  display: grid;\n  gap: 10px;\n}\n.structure-departments[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  border: 1px solid #dce5f2;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #fff;\n}\n.structure-departments[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  min-height: 70px;\n  padding: 14px 12px;\n  background: var(--division-soft);\n  cursor: pointer;\n  list-style: none;\n}\n.structure-departments[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.structure-departments[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font: 650 12px/1.5 var(--disp,sans-serif);\n  color: var(--division);\n  overflow-wrap: anywhere;\n}\n.department-chevron[_ngcontent-%COMP%] {\n  font-size: 21px;\n  line-height: 1;\n  color: var(--division);\n  transition: transform .2s;\n  flex-shrink: 0;\n}\ndetails[open][_ngcontent-%COMP%]   .department-chevron[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.department-roles[_ngcontent-%COMP%] {\n  padding: 10px 14px 14px 28px;\n  margin: 0;\n  list-style: disc;\n}\n.department-roles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.6;\n  padding: 5px 0;\n  color: #43546b;\n  overflow-wrap: anywhere;\n}\n.department-roles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::marker {\n  color: var(--division);\n}\n.structure-services[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 32px;\n  padding-top: 26px;\n  border-top: 1px solid #dce5f2;\n}\n.structure-services[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n}\n.structure-services[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #086bcc;\n}\n.structure-services[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.structure-services[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #07559f;\n  text-transform: uppercase;\n}\n.structure-services[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #51607a;\n  margin-top: 4px;\n}\n.structure-signoff[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 30px 0 0;\n  font: 600 22px/1.4 var(--disp,sans-serif);\n  color: #073a80;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \nsummary[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #1565d8;\n  outline-offset: -3px;\n}\n@media (max-width: 1000px) {\n  .structure-divisions[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 24px;\n  }\n  .structure-leader[_ngcontent-%COMP%]::after, \n   .structure-division[_ngcontent-%COMP%]::before, \n   .division-heading[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n  .structure-services[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .structure-divisions[_ngcontent-%COMP%] {\n    padding-top: 0;\n  }\n  .division-heading[_ngcontent-%COMP%] {\n    min-height: 80px;\n  }\n}\n@media (max-width: 600px) {\n  .team-structure[_ngcontent-%COMP%] {\n    padding: 48px 0 36px;\n  }\n  .structure-divisions[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .structure-controls[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 22px 0;\n  }\n  .structure-services[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .structure-principles[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .structure-principles[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 0 4px;\n  }\n  .structure-leader[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .structure-departments[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .department-roles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .department-chevron[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n@media print {\n  .structure-controls[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .team-structure[_ngcontent-%COMP%] {\n    background: #fff;\n  }\n  .structure-divisions[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .structure-division[_ngcontent-%COMP%] {\n    break-inside: avoid;\n  }\n  .structure-leader[_ngcontent-%COMP%]::after, \n   .structure-division[_ngcontent-%COMP%]::before, \n   .division-heading[_ngcontent-%COMP%]::before {\n    display: none;\n  }\n}\n/*# sourceMappingURL=team-structure.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamStructureComponent, [{
    type: Component,
    args: [{ selector: "xh-team-structure", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="team-structure" aria-labelledby="team-structure-title">\r
  <div class="wrap">\r
    <header class="structure-heading">\r
      <span class="structure-eyebrow">How our team works together</span>\r
      <h2 id="team-structure-title">XcellHost Cloud Team Structure</h2>\r
      <p class="structure-principles">People <span>\xB7</span> Technology <span>\xB7</span> Security <span>\xB7</span> Service <span>\xB7</span> Growth</p>\r
    </header>\r
\r
    <div class="structure-leader"><span class="material-symbols-outlined" aria-hidden="true">person</span>Managing Director / CEO</div>\r
\r
    <div class="structure-controls">\r
      <p>Select a department to explore its roles.</p>\r
      <div><button type="button" (click)="setExpanded(true)" aria-controls="structure-divisions">Expand all roles</button><button type="button" (click)="setExpanded(false)" aria-controls="structure-divisions">Collapse all</button></div>\r
    </div>\r
\r
    <ol class="structure-divisions" id="structure-divisions" aria-label="Divisions reporting to the Managing Director / CEO">\r
      @for (division of divisions; track division.id) {\r
        <li class="structure-division" [attr.data-division]="division.id">\r
          <header class="division-heading">\r
            <span class="material-symbols-outlined" aria-hidden="true">{{ division.icon }}</span>\r
            <div><h3>{{ division.name }}</h3><p>{{ division.motto }}</p></div>\r
          </header>\r
          <ul class="structure-departments" [attr.aria-label]="division.name + ' departments'">\r
            @for (department of division.departments; track department.name) {\r
              <li>\r
                <details>\r
                  <summary><h4>{{ department.name }}</h4><span class="department-chevron" aria-hidden="true">+</span></summary>\r
                  <ul class="department-roles">\r
                    @for (role of department.roles; track role) { <li>{{ role }}</li> }\r
                  </ul>\r
                </details>\r
              </li>\r
            }\r
          </ul>\r
        </li>\r
      }\r
    </ol>\r
\r
    <div class="structure-services" aria-label="Our service pillars">\r
      <div><span class="material-symbols-outlined" aria-hidden="true">cloud</span><p><b>Cloud</b><span>Flexible infrastructure for a brighter future</span></p></div>\r
      <div><span class="material-symbols-outlined" aria-hidden="true">shield</span><p><b>Security</b><span>Protection you can trust</span></p></div>\r
      <div><span class="material-symbols-outlined" aria-hidden="true">database</span><p><b>Backup &amp; DR</b><span>Business continuity, always on</span></p></div>\r
      <div><span class="material-symbols-outlined" aria-hidden="true">support_agent</span><p><b>Managed Services</b><span>Expert support every step</span></p></div>\r
      <div><span class="material-symbols-outlined" aria-hidden="true">grid_view</span><p><b>SaaS</b><span>Tools for a smarter tomorrow</span></p></div>\r
    </div>\r
    <p class="structure-signoff">Together, we go further.</p>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/sections/team-structure.component.css */\n:host {\n  display: block;\n}\n.team-structure {\n  padding: 72px 0 54px;\n  background:\n    linear-gradient(\n      160deg,\n      #f1f8ff,\n      #fff 55%,\n      #f6f4ff);\n  color: var(--navy,#041e42);\n}\n.structure-heading {\n  text-align: center;\n  max-width: 850px;\n  margin: 0 auto 30px;\n}\n.structure-eyebrow {\n  display: block;\n  margin-bottom: 14px;\n  color: #1565d8;\n  font: 600 11px/1.5 var(--mono,monospace);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.structure-heading h2 {\n  margin: 0;\n  font: 700 clamp(28px, 3.3vw, 42px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -.03em;\n}\n.structure-principles {\n  margin: 18px 0 0;\n  color: #51607a;\n  font-size: 15px;\n  line-height: 1.8;\n}\n.structure-principles span {\n  margin: 0 9px;\n  color: #1565d8;\n}\n.structure-leader {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  max-width: 380px;\n  margin: 0 auto;\n  padding: 18px 20px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      120deg,\n      #1565d8,\n      #073a80);\n  color: #fff;\n  font-weight: 700;\n  text-align: center;\n  box-shadow: 0 8px 20px #1565d81a;\n}\n.structure-leader::after {\n  content: "";\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  height: 93px;\n  border-left: 2px solid #afc5e5;\n}\n.structure-controls {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  min-height: 70px;\n  padding: 18px 0;\n}\n.structure-controls p {\n  margin: 0;\n  font-size: 12px;\n  color: #51607a;\n  background: #f5f9ff;\n}\n.structure-controls > div {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.structure-controls button {\n  position: relative;\n  border: 1px solid #cfdded;\n  border-radius: 8px;\n  padding: 8px 12px;\n  color: #0a4ea5;\n  background: #fff;\n  font: 600 12px/1.4 var(--body,sans-serif);\n  cursor: pointer;\n}\n.structure-controls button:hover {\n  background: #eaf3ff;\n}\n.structure-divisions {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  list-style: none;\n  padding: 22px 0 0;\n  margin: 0;\n}\n.structure-division {\n  position: relative;\n  min-width: 0;\n  --division:#086bcc;\n  --division-soft:#edf7ff;\n}\n.structure-division[data-division=delivery] {\n  --division:#079857;\n  --division-soft:#edfaf4;\n}\n.structure-division[data-division=business] {\n  --division:#d84a08;\n  --division-soft:#fff4ec;\n}\n.structure-division[data-division=corporate] {\n  --division:#603bab;\n  --division-soft:#f5f0ff;\n}\n.structure-division::before {\n  content: "";\n  position: absolute;\n  top: -22px;\n  left: -8px;\n  right: -8px;\n  border-top: 2px solid #afc5e5;\n}\n.structure-division:first-child::before {\n  left: 50%;\n}\n.structure-division:last-child::before {\n  right: 50%;\n}\n.division-heading {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 98px;\n  padding: 16px 14px;\n  border-radius: 12px;\n  background: var(--division);\n  color: #fff;\n}\n.division-heading::before {\n  content: "";\n  position: absolute;\n  bottom: 100%;\n  left: 50%;\n  height: 22px;\n  border-left: 2px solid #afc5e5;\n}\n.division-heading > .material-symbols-outlined {\n  font-size: 28px;\n  flex-shrink: 0;\n}\n.division-heading h3 {\n  font: 700 15px/1.4 var(--disp,sans-serif);\n  color: inherit;\n  margin: 0;\n}\n.division-heading p {\n  margin: 5px 0 0;\n  font-size: 11px;\n  line-height: 1.5;\n  color: #fff;\n}\n.structure-departments {\n  list-style: none;\n  padding: 14px 0 0;\n  margin: 0;\n  display: grid;\n  gap: 10px;\n}\n.structure-departments details {\n  border: 1px solid #dce5f2;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #fff;\n}\n.structure-departments summary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  min-height: 70px;\n  padding: 14px 12px;\n  background: var(--division-soft);\n  cursor: pointer;\n  list-style: none;\n}\n.structure-departments summary::-webkit-details-marker {\n  display: none;\n}\n.structure-departments h4 {\n  margin: 0;\n  font: 650 12px/1.5 var(--disp,sans-serif);\n  color: var(--division);\n  overflow-wrap: anywhere;\n}\n.department-chevron {\n  font-size: 21px;\n  line-height: 1;\n  color: var(--division);\n  transition: transform .2s;\n  flex-shrink: 0;\n}\ndetails[open] .department-chevron {\n  transform: rotate(45deg);\n}\n.department-roles {\n  padding: 10px 14px 14px 28px;\n  margin: 0;\n  list-style: disc;\n}\n.department-roles li {\n  font-size: 12px;\n  line-height: 1.6;\n  padding: 5px 0;\n  color: #43546b;\n  overflow-wrap: anywhere;\n}\n.department-roles li::marker {\n  color: var(--division);\n}\n.structure-services {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 32px;\n  padding-top: 26px;\n  border-top: 1px solid #dce5f2;\n}\n.structure-services > div {\n  display: flex;\n  gap: 10px;\n  align-items: flex-start;\n}\n.structure-services .material-symbols-outlined {\n  font-size: 30px;\n  color: #086bcc;\n}\n.structure-services p {\n  margin: 0;\n}\n.structure-services b {\n  display: block;\n  font-size: 12px;\n  color: #07559f;\n  text-transform: uppercase;\n}\n.structure-services p span {\n  display: block;\n  font-size: 12px;\n  line-height: 1.5;\n  color: #51607a;\n  margin-top: 4px;\n}\n.structure-signoff {\n  text-align: center;\n  margin: 30px 0 0;\n  font: 600 22px/1.4 var(--disp,sans-serif);\n  color: #073a80;\n}\nbutton:focus-visible,\nsummary:focus-visible {\n  outline: 3px solid #1565d8;\n  outline-offset: -3px;\n}\n@media (max-width: 1000px) {\n  .structure-divisions {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 24px;\n  }\n  .structure-leader::after,\n  .structure-division::before,\n  .division-heading::before {\n    display: none;\n  }\n  .structure-services {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .structure-divisions {\n    padding-top: 0;\n  }\n  .division-heading {\n    min-height: 80px;\n  }\n}\n@media (max-width: 600px) {\n  .team-structure {\n    padding: 48px 0 36px;\n  }\n  .structure-divisions {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .structure-controls {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 22px 0;\n  }\n  .structure-services {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .structure-principles {\n    font-size: 13px;\n  }\n  .structure-principles span {\n    margin: 0 4px;\n  }\n  .structure-leader {\n    font-size: 14px;\n  }\n  .structure-departments h4 {\n    font-size: 13px;\n  }\n  .department-roles li {\n    font-size: 13px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .department-chevron {\n    transition: none;\n  }\n}\n@media print {\n  .structure-controls {\n    display: none;\n  }\n  .team-structure {\n    background: #fff;\n  }\n  .structure-divisions {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .structure-division {\n    break-inside: avoid;\n  }\n  .structure-leader::after,\n  .structure-division::before,\n  .division-heading::before {\n    display: none;\n  }\n}\n/*# sourceMappingURL=team-structure.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeamStructureComponent, { className: "TeamStructureComponent", filePath: "src/app/sections/team-structure.component.ts", lineNumber: 11 });
})();

// src/app/data/why-xcellhost-reasons.data.ts
var WHY_XCELLHOST_CHAPTER_HEADINGS = ["Experience you can count on", "Keep your business running smoothly", "Infrastructure for your next big idea", "Grow with confidence", "One partner for the long run"];
var WHY_XCELLHOST_REASON_GROUPS = [
  {
    "title": "Built on trust",
    "subtitle": "Experience, infrastructure and people you can count on.",
    "reasons": [
      {
        "number": "01",
        "icon": "workspace_premium",
        "title": "25+ Years of Cloud Experience",
        "body": "Trusted managed cloud service provider since 1999."
      },
      {
        "number": "02",
        "icon": "flag",
        "title": "Indian Cloud Infrastructure",
        "body": "Hosted on secure data centers in India for better performance and compliance."
      },
      {
        "number": "03",
        "icon": "support_agent",
        "title": "24\xD77 Managed Support",
        "body": "Round-the-clock NOC and SOC support for business continuity."
      },
      {
        "number": "04",
        "icon": "bolt",
        "title": "High-Performance Cloud Servers",
        "body": "Fast compute, NVMe storage, and optimized cloud infrastructure."
      },
      {
        "number": "05",
        "icon": "verified_user",
        "title": "Secure Cloud Hosting",
        "body": "Built-in security layers to protect business applications and data."
      }
    ]
  },
  {
    "title": "Ready for your everyday work",
    "subtitle": "Keep your applications, teams and data connected.",
    "reasons": [
      {
        "number": "06",
        "icon": "bar_chart",
        "title": "Tally on Cloud Expertise",
        "body": "Run TallyPrime securely from anywhere, anytime."
      },
      {
        "number": "07",
        "icon": "desktop_windows",
        "title": "Remote Desktop Cloud Solutions",
        "body": "Secure cloud desktop access for employees, accountants, auditors, and branches."
      },
      {
        "number": "08",
        "icon": "backup",
        "title": "Cloud Backup & Disaster Recovery",
        "body": "Protect data with backup, restore, and DR-ready options."
      },
      {
        "number": "09",
        "icon": "shield",
        "title": "Advanced Endpoint Security",
        "body": "EDR, XDR, RMM, and managed security solutions for businesses."
      },
      {
        "number": "10",
        "icon": "cloud",
        "title": "Managed AWS, Azure, GCP & OCI Services",
        "body": "Expert support for public cloud deployments and management."
      }
    ]
  },
  {
    "title": "Power for what comes next",
    "subtitle": "Purpose-built infrastructure with security at its core.",
    "reasons": [
      {
        "number": "11",
        "icon": "dns",
        "title": "Private Cloud & Performance Cloud Options",
        "body": "Dedicated and high-performance cloud solutions for demanding workloads."
      },
      {
        "number": "12",
        "icon": "storage",
        "title": "Bare Metal Servers",
        "body": "Powerful dedicated infrastructure for performance-sensitive applications."
      },
      {
        "number": "14",
        "icon": "verified",
        "title": "ISO-Certified Processes",
        "body": "Professional service delivery with compliance-focused operations."
      },
      {
        "number": "15",
        "icon": "lock",
        "title": "Data Security First Approach",
        "body": "Security, monitoring, backup, and access control are built into the service model."
      }
    ]
  },
  {
    "title": "Room to grow",
    "subtitle": "More flexibility. Less complexity. A cloud that moves with you.",
    "reasons": [
      {
        "number": "16",
        "icon": "move_up",
        "title": "Free Migration Assistance",
        "body": "Smooth migration from local servers or other hosting providers."
      },
      {
        "number": "17",
        "icon": "trending_up",
        "title": "Scalable Infrastructure",
        "body": "Easily scale CPU, RAM, storage, users, and applications as business grows."
      },
      {
        "number": "18",
        "icon": "payments",
        "title": "Affordable Monthly Plans",
        "body": "Flexible pricing for SMBs, startups, enterprises, and professional offices."
      },
      {
        "number": "19",
        "icon": "public",
        "title": "Multi-Location Access",
        "body": "Work securely from office, home, branch, factory, or while travelling."
      },
      {
        "number": "20",
        "icon": "hub",
        "title": "Centralized IT Management",
        "body": "Manage servers, users, applications, backup, security, and monitoring from one place."
      }
    ]
  },
  {
    "title": "A partner for the long run",
    "subtitle": "Support that stays with your business, from the first migration onward.",
    "reasons": [
      {
        "number": "21",
        "icon": "autorenew",
        "title": "Business Continuity Focus",
        "body": "Reduce downtime with proactive monitoring, backup, and support."
      },
      {
        "number": "22",
        "icon": "handshake",
        "title": "Strong Partner Ecosystem",
        "body": "Solutions from trusted technology partners like Acronis, Microsoft, TSplus, and more."
      },
      {
        "number": "23",
        "icon": "policy",
        "title": "Compliance-Friendly Cloud",
        "body": "Suitable for businesses needing better control over data, audit logs, backup, and security."
      },
      {
        "number": "24",
        "icon": "tune",
        "title": "Custom Cloud Solutions",
        "body": "Tailored cloud architecture for SMBs, BFSI, healthcare, retail, manufacturing, education, and more."
      },
      {
        "number": "25",
        "icon": "all_inclusive",
        "title": "One Cloud Partner for Everything",
        "body": "Hosting, migration, security, backup, remote access, monitoring, and managed support under one roof."
      }
    ]
  }
];

// src/app/sections/why-xcellhost-reasons.component.ts
var _c0 = () => [];
var _forTrack02 = ($index, $item) => $item.title;
var _forTrack12 = ($index, $item) => $item.number;
function WhyXcellhostReasonsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r1 = ctx.$implicit;
    const \u0275$index_24_r2 = ctx.$index;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0))("fragment", "reason-group-" + \u0275$index_24_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("0", \u0275$index_24_r2 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r1.title);
  }
}
function WhyXcellhostReasonsComponent_For_19_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 17)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reason_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reason_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reason_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reason_r3.body);
  }
}
function WhyXcellhostReasonsComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 12)(1, "header", 13)(2, "span", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "span", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275repeaterCreate(10, WhyXcellhostReasonsComponent_For_19_For_11_Template, 7, 3, "article", 17, _forTrack12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r4 = ctx.$implicit;
    const \u0275$index_36_r5 = ctx.$index;
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275property("id", "reason-group-" + \u0275$index_36_r5);
    \u0275\u0275attribute("aria-labelledby", "reason-title-" + \u0275$index_36_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("0", \u0275$index_36_r5 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(group_r4.title);
    \u0275\u0275advance();
    \u0275\u0275property("id", "reason-title-" + \u0275$index_36_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r5.chapterHeadings[\u0275$index_36_r5]);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(group_r4.reasons);
  }
}
var WhyXcellhostReasonsComponent = class _WhyXcellhostReasonsComponent {
  chapterHeadings = WHY_XCELLHOST_CHAPTER_HEADINGS;
  groups = WHY_XCELLHOST_REASON_GROUPS;
  static \u0275fac = function WhyXcellhostReasonsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _WhyXcellhostReasonsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WhyXcellhostReasonsComponent, selectors: [["xh-why-xcellhost-reasons"]], decls: 20, vars: 0, consts: [[1, "why-page", "why-reasons-page"], ["id", "why-reasons", "aria-labelledby", "reasons-title", 1, "why-reasons", "why-wrap"], [1, "why-intro"], [1, "why-intro-text"], ["id", "reasons-title"], [1, "why-editorial"], [1, "why-index"], [1, "why-eyebrow"], ["aria-label", "Reasons by theme"], [3, "routerLink", "fragment"], ["routerLink", "/contact", 1, "why-index-contact"], [1, "why-chapters"], [1, "why-group", 3, "id"], [1, "why-group-heading"], [1, "why-chapter-number"], [3, "id"], [1, "why-reason-list"], [1, "why-reason"], ["aria-hidden", "true", 1, "why-reason-icon", "material-symbols-outlined"]], template: function WhyXcellhostReasonsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "header", 2)(3, "div", 3)(4, "h2", 4);
      \u0275\u0275text(5, "Built on Experience. ");
      \u0275\u0275elementStart(6, "em");
      \u0275\u0275text(7, "Driven by What\u2019s Next.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(8, "div", 5)(9, "aside", 6)(10, "span", 7);
      \u0275\u0275text(11, "EXPLORE THE CHAPTERS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "nav", 8);
      \u0275\u0275repeaterCreate(13, WhyXcellhostReasonsComponent_For_14_Template, 4, 5, "a", 9, _forTrack02);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 10);
      \u0275\u0275text(16, "Find your cloud solution");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 11);
      \u0275\u0275repeaterCreate(18, WhyXcellhostReasonsComponent_For_19_Template, 12, 6, "section", 12, _forTrack02);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275repeater(ctx.groups);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.groups);
    }
  }, dependencies: [RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.why-page[_ngcontent-%COMP%] {\n  font-family: var(--body,"IBM Plex Sans",sans-serif);\n  color: #102747;\n  background: #fbfcfe;\n  line-height: 1.6;\n}\n.why-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.why-wrap[_ngcontent-%COMP%] {\n  max-width: 1320px;\n  padding: 0 40px;\n  margin: auto;\n}\n.why-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.why-eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: .18em;\n  color: #1565df;\n}\n.why-hero[_ngcontent-%COMP%] {\n  background: #081f42;\n  color: #fff;\n  padding-top: 30px;\n  overflow: hidden;\n}\n.why-crumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  font-size: 11px;\n  color: #95aed0;\n}\n.why-hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.15fr 1fr;\n  gap: 65px;\n  align-items: center;\n  padding: 80px 0 72px;\n}\n.why-hero[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%] {\n  color: #8dbbff;\n  margin-bottom: 24px;\n}\n.why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(44px, 5vw, 70px);\n  font-weight: 600;\n  letter-spacing: -.055em;\n  line-height: 1.08;\n  margin: 0 0 28px;\n  color: white;\n}\n.why-page[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-family: Georgia, serif;\n  font-weight: 400;\n}\n.why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #94beff;\n}\n.why-hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #b9cbe3;\n  font-size: 17px;\n  line-height: 1.8;\n  margin: 0 0 30px;\n}\n.why-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 35px;\n  align-items: center;\n  padding: 13px 0;\n  border-bottom: 1px solid #79abed;\n  font-weight: 600;\n  font-size: 14px;\n}\n.why-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #94beff;\n  font-size: 24px;\n}\n.why-type-art[_ngcontent-%COMP%] {\n  position: relative;\n  border-left: 1px solid #ffffff25;\n  padding-left: 48px;\n}\n.why-art-caption[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: .17em;\n  color: #96adcf;\n}\n.why-type-art[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: clamp(150px, 18vw, 260px);\n  letter-spacing: -.085em;\n  line-height: 1.1;\n  font-weight: 600;\n  color: #fff;\n}\n.why-type-art[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #488af2;\n}\n.why-art-baseline[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n  border-top: 1px solid #ffffff25;\n  padding-top: 20px;\n  color: #a5bfdf;\n  font-size: 12px;\n}\n.why-proof[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 25px;\n  padding: 26px 0;\n  border-top: 1px solid #ffffff25;\n  font-size: 12px;\n  color: #92aaca;\n}\n.why-proof[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 16px;\n  margin-right: 14px;\n  font-weight: 600;\n}\n.why-reasons[_ngcontent-%COMP%] {\n  padding-top: 80px;\n  padding-bottom: 90px;\n  scroll-margin-top: 110px;\n}\n.why-intro[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  column-gap: 60px;\n  align-items: end;\n  margin-bottom: 62px;\n}\n.why-intro[_ngcontent-%COMP%]    > .why-eyebrow[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  margin-bottom: 18px;\n}\n.why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(36px, 4vw, 52px);\n  line-height: 1.12;\n  font-weight: 600;\n  letter-spacing: -.045em;\n  margin: 0;\n  color: #102747;\n}\n.why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #1565df;\n}\n.why-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #67768a;\n  margin: 0 0 5px;\n}\n.why-editorial[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 250px minmax(0, 1fr);\n  gap: 70px;\n  align-items: start;\n}\n.why-index[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 125px;\n  padding-top: 18px;\n}\n.why-index[_ngcontent-%COMP%]    > .why-eyebrow[_ngcontent-%COMP%] {\n  color: #77869b;\n  margin-bottom: 18px;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid #dce3ee;\n  padding: 17px 0;\n  font-size: 13px;\n  line-height: 1.4;\n  font-weight: 600;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #1565df;\n  font-weight: 500;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-style: normal;\n  color: #8299ba;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1565df;\n}\n.why-index-contact[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 30px;\n  color: #1565df !important;\n  font-size: 12px;\n  font-weight: 600;\n}\n.why-group[_ngcontent-%COMP%] {\n  scroll-margin-top: 120px;\n  padding-bottom: 55px;\n  margin-bottom: 26px;\n}\n.why-group[_ngcontent-%COMP%]:last-child {\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.why-group-heading[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 100px 1fr;\n  align-items: center;\n  gap: 22px;\n  padding: 0 0 25px;\n  border-bottom: 2px solid #153e73;\n}\n.why-chapter-number[_ngcontent-%COMP%] {\n  font-size: 76px;\n  line-height: 1;\n  color: #bdd1ed;\n  font-weight: 500;\n  letter-spacing: -.07em;\n}\n.why-group-heading[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%] {\n  font-size: 9px;\n  margin-bottom: 5px;\n}\n.why-group-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-weight: 600;\n  letter-spacing: -.035em;\n  margin: 0;\n  color: #102747;\n  line-height: 1.2;\n}\n.why-group-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #718095;\n  font-size: 13px;\n  margin: 8px 0 0;\n}\n.why-reason[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 28px minmax(0, .9fr) minmax(0, 1.1fr);\n  gap: 20px;\n  align-items: start;\n  padding: 25px 0;\n  border-bottom: 1px solid #dce3ee;\n}\n.why-reason-number[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #728ba9;\n  padding-top: 4px;\n}\n.why-reason[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #142f53;\n  margin: 0;\n  font-weight: 600;\n  letter-spacing: -.01em;\n}\n.why-reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n  color: #69798d;\n  margin: 0;\n}\n.why-closing[_ngcontent-%COMP%] {\n  padding: 68px 0;\n  background: #1260de;\n  color: white;\n}\n.why-closing[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%] {\n  color: #bfdaff;\n  margin-bottom: 20px;\n}\n.why-closing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: white;\n  font-size: clamp(50px, 7vw, 88px);\n  letter-spacing: -.055em;\n  line-height: 1.04;\n  margin: 0 0 38px;\n  font-weight: 500;\n}\n.why-closing-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  border-top: 1px solid #ffffff45;\n  padding-top: 24px;\n}\n.why-closing-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #d1e3ff;\n  margin: 0;\n}\n.why-closing-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.why-closing-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.why-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #f49c40;\n  outline-offset: 5px;\n}\n@media (max-width: 1050px) {\n  .why-editorial[_ngcontent-%COMP%] {\n    grid-template-columns: 210px minmax(0, 1fr);\n    gap: 35px;\n  }\n  .why-hero-grid[_ngcontent-%COMP%] {\n    gap: 30px;\n  }\n  .why-type-art[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n  .why-proof[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n  }\n  .why-reason[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .why-group-heading[_ngcontent-%COMP%] {\n    grid-template-columns: 75px 1fr;\n  }\n  .why-chapter-number[_ngcontent-%COMP%] {\n    font-size: 65px;\n  }\n}\n@media (max-width: 760px) {\n  .why-wrap[_ngcontent-%COMP%] {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n  .why-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 45px 0;\n    gap: 40px;\n  }\n  .why-type-art[_ngcontent-%COMP%] {\n    border-left: 0;\n    border-top: 1px solid #ffffff25;\n    padding: 24px 0 0;\n  }\n  .why-type-art[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    font-size: 150px;\n  }\n  .why-art-baseline[_ngcontent-%COMP%] {\n    max-width: 450px;\n  }\n  .why-proof[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .why-proof[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    flex: 1 1 130px;\n  }\n  .why-intro[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    margin-bottom: 35px;\n  }\n  .why-intro[_ngcontent-%COMP%]    > .why-eyebrow[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .why-editorial[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 35px;\n  }\n  .why-index[_ngcontent-%COMP%] {\n    position: static;\n    padding: 0;\n  }\n  .why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 22px;\n  }\n  .why-index-contact[_ngcontent-%COMP%] {\n    margin-top: 18px;\n  }\n  .why-reasons[_ngcontent-%COMP%] {\n    padding-top: 45px;\n    padding-bottom: 45px;\n  }\n  .why-reason[_ngcontent-%COMP%] {\n    grid-template-columns: 26px 1fr;\n    gap: 8px 15px;\n    padding: 22px 0;\n  }\n  .why-reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n  .why-group[_ngcontent-%COMP%] {\n    padding-bottom: 30px;\n  }\n  .why-group-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n  .why-closing[_ngcontent-%COMP%] {\n    padding: 45px 0;\n  }\n  .why-closing-bottom[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .why-page[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    scroll-behavior: auto;\n  }\n}\n.why-hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      ellipse at 85% 40%,\n      #123d73 0,\n      transparent 58%),\n    #081f42;\n}\n.why-hero-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1.15fr;\n  gap: 35px;\n  padding: 58px 0 52px;\n}\n.why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(42px, 4.6vw, 64px);\n}\n.why-hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n}\n.why-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 3/2;\n  object-fit: contain;\n  mix-blend-mode: screen;\n  -webkit-mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12%,\n      #000 94%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12%,\n      #000 94%,\n      transparent);\n}\n.why-visual-caption[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: 15px;\n  color: #93b9ec;\n  font-size: 10px;\n  letter-spacing: .2em;\n  font-weight: 600;\n}\n@media (max-width: 760px) {\n  .why-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 30px;\n    padding: 40px 0;\n  }\n  .why-hero-visual[_ngcontent-%COMP%] {\n    max-width: 580px;\n    width: 100%;\n    margin: auto;\n  }\n  .why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 44px;\n  }\n}\n.why-hero[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 390px;\n  padding-top: 24px;\n}\n.why-hero[_ngcontent-%COMP%]    > .why-wrap[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  padding-inline: 24px;\n  width: 100%;\n}\n.why-hero-grid[_ngcontent-%COMP%] {\n  padding: 24px 0;\n  gap: 40px;\n}\n.why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(36px, 3.2vw, 46px);\n  margin-bottom: 18px;\n}\n.why-hero[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.why-hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.65;\n  margin-bottom: 18px;\n}\n.why-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 300px;\n  width: 100%;\n  object-fit: contain;\n}\n.why-visual-caption[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.why-proof[_ngcontent-%COMP%] {\n  padding: 18px 0;\n}\n@media (max-width: 760px) {\n  .why-hero[_ngcontent-%COMP%] {\n    min-height: 340px;\n  }\n  .why-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 24px 0;\n    gap: 24px;\n  }\n  .why-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    max-height: 280px;\n  }\n  .why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n}\n.why-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 40px 0 48px;\n  min-height: 490px;\n  background:\n    radial-gradient(\n      ellipse at 76% 32%,\n      #07427e 0,\n      transparent 52%),\n    linear-gradient(\n      115deg,\n      #041b3b,\n      #002453 72%,\n      #041c3e);\n}\n.why-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      140deg,\n      #0752ab40 0 12%,\n      transparent 12% 100%);\n  pointer-events: none;\n}\n.why-hero[_ngcontent-%COMP%]    > .why-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1440px;\n  padding-inline: 40px;\n}\n.why-hero-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr 1.18fr;\n  gap: 26px;\n  padding: 0;\n  align-items: center;\n}\n.why-hero[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 15px;\n  border-radius: 30px;\n  background: #0637698c;\n  color: #00b8ff;\n  font-size: 11px;\n  letter-spacing: .12em;\n  margin-bottom: 12px;\n}\n.why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(40px, 4.5vw, 64px);\n  font-weight: 750;\n  line-height: 1.02;\n  letter-spacing: -.035em;\n  margin-bottom: 18px;\n}\n.why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font: inherit;\n  color: #00b8f4;\n}\n.why-hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  line-height: 1.45;\n  max-width: 550px;\n  margin-bottom: 22px;\n  color: #b8c6da;\n}\n.why-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.why-hero[_ngcontent-%COMP%]   .why-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 13px 24px;\n  border: 1px solid #087aff;\n  border-radius: 10px;\n  background: #0676ff;\n  color: white;\n  font-size: 14px;\n  gap: 18px;\n  box-shadow: 0 10px 28px #0076ff20;\n}\n.why-hero[_ngcontent-%COMP%]   .why-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: white;\n}\n.why-story[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #00b8ff;\n  border-radius: 10px;\n  padding: 14px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n}\n.why-hero-visual[_ngcontent-%COMP%] {\n  min-height: 345px;\n  position: relative;\n}\n.why-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 355px;\n  object-fit: contain;\n  mix-blend-mode: screen;\n  -webkit-mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12%,\n      #000 90%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12%,\n      #000 90%,\n      transparent);\n}\n.why-visual-note[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  text-align: center;\n  padding: 12px 10px;\n  background:\n    linear-gradient(\n      140deg,\n      #063a77eb,\n      #032657ed);\n  border: 1px solid #1260a5;\n  border-radius: 10px;\n  color: #e2efff;\n  box-shadow: 0 12px 25px #000b2020;\n  font-size: 10px;\n  line-height: 1.3;\n  min-width: 84px;\n}\n.why-visual-note[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  color: #00baff;\n  font-style: normal;\n  font-size: 27px;\n  margin-bottom: 7px;\n}\n.note-scale[_ngcontent-%COMP%] {\n  left: 4%;\n  top: 15%;\n  transform: rotate(-5deg);\n}\n.note-global[_ngcontent-%COMP%] {\n  right: 4%;\n  top: 18%;\n  transform: rotate(4deg);\n}\n.note-secure[_ngcontent-%COMP%] {\n  left: 8%;\n  bottom: 17%;\n  transform: rotate(-4deg);\n}\n.note-trust[_ngcontent-%COMP%] {\n  right: 12%;\n  bottom: 7%;\n  transform: rotate(4deg);\n}\n.why-growth[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -12px;\n  bottom: -15px;\n  color: #57b8ff;\n  font: italic 24px/1.1 Georgia, serif;\n  transform: rotate(-10deg);\n}\n.why-proof[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  gap: 0;\n  border: 0;\n  padding: 24px 0 0;\n  max-width: 850px;\n}\n.why-proof[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 13px;\n  padding: 0 24px;\n  border-right: 1px solid #ffffff25;\n  flex: 1;\n}\n.why-proof[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n.why-proof[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.why-proof[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 33px;\n  color: #00b8ff;\n  font-style: normal;\n}\n.why-proof[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  margin: 0 0 3px;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.why-proof[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #bbcadd;\n  white-space: nowrap;\n}\n@media (max-width: 1000px) {\n  .why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 45px;\n  }\n  .why-hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .why-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 330px;\n  }\n  .why-visual-note[_ngcontent-%COMP%] {\n    min-width: 70px;\n    font-size: 9px;\n  }\n  .why-growth[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .why-hero-actions[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .why-hero[_ngcontent-%COMP%]   .why-button[_ngcontent-%COMP%], \n   .why-story[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n  }\n}\n@media (max-width: 760px) {\n  .why-hero[_ngcontent-%COMP%] {\n    padding: 30px 0;\n  }\n  .why-hero[_ngcontent-%COMP%]    > .why-wrap[_ngcontent-%COMP%] {\n    padding-inline: 24px;\n  }\n  .why-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 44px;\n  }\n  .why-hero-visual[_ngcontent-%COMP%] {\n    min-height: 300px;\n  }\n  .why-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 310px;\n    max-height: none;\n  }\n  .why-proof[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 22px;\n    padding-top: 25px;\n  }\n  .why-proof[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    padding: 0;\n    border: 0;\n  }\n  .why-proof[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .why-proof[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n}\n.why-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: auto;\n  max-height: 390px;\n  aspect-ratio: 1672/941;\n  object-fit: contain;\n  mix-blend-mode: normal;\n  -webkit-mask-image: none;\n  mask-image: none;\n}\n.why-hero-visual[_ngcontent-%COMP%] {\n  min-height: 0;\n}\n@media (max-width: 760px) {\n  .why-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: auto;\n    max-height: none;\n  }\n}\n.why-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  mix-blend-mode: lighten;\n  -webkit-mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 22%,\n      #000 78%,\n      transparent),\n    linear-gradient(\n      to bottom,\n      transparent,\n      #000 24%,\n      #000 76%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 22%,\n      #000 78%,\n      transparent),\n    linear-gradient(\n      to bottom,\n      transparent,\n      #000 24%,\n      #000 76%,\n      transparent);\n  -webkit-mask-composite: source-in;\n  mask-composite: intersect;\n}\n.why-reasons[_ngcontent-%COMP%] {\n  max-width: 1320px;\n  margin: 28px auto 50px;\n  padding: 0 38px 30px;\n  background:\n    linear-gradient(\n      120deg,\n      #fff,\n      #f8fcff);\n  border: 1px solid #e8eef5;\n  box-shadow: 0 8px 18px #1027470a;\n}\n.why-intro[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr .85fr;\n  gap: 24px;\n  align-items: center;\n  padding: 40px 18px 28px;\n  margin: 0 -18px 20px;\n  background:\n    radial-gradient(\n      ellipse at 90% 30%,\n      #d9efff,\n      transparent 65%);\n  position: relative;\n  overflow: hidden;\n  min-height: 240px;\n}\n.why-intro-text[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.why-intro-text[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%] {\n  font-size: 9px;\n  margin-bottom: 10px;\n}\n.why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 38px;\n  letter-spacing: -.04em;\n  line-height: 1.05;\n}\n.why-intro-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.6;\n  max-width: 375px;\n  margin: 15px 0 0;\n  color: #5d7499;\n}\n.why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #0879ff;\n}\n.why-intro-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  position: relative;\n  z-index: 1;\n  gap: 8px;\n  text-align: center;\n}\n.why-intro-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  border-right: 1px solid #dfecfa;\n}\n.why-intro-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.why-intro-stats[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-style: normal;\n  display: grid;\n  place-items: center;\n  margin: 0 auto 8px;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #e5f1ff;\n  color: #0879ff;\n  font-size: 24px;\n}\n.why-intro-stats[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 19px;\n  line-height: 1.3;\n  color: #0b2146;\n}\n.why-intro-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 9px;\n  color: #52698d;\n  margin-top: 4px;\n}\n.why-intro-art[_ngcontent-%COMP%] {\n  width: 125%;\n  max-width: none;\n  height: 215px;\n  object-fit: contain;\n  margin-left: -25px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse,\n      #000 35%,\n      transparent 73%);\n  mask-image:\n    radial-gradient(\n      ellipse,\n      #000 35%,\n      transparent 73%);\n}\n.why-editorial[_ngcontent-%COMP%] {\n  grid-template-columns: 180px minmax(0, 1fr);\n  gap: 40px;\n}\n.why-index[_ngcontent-%COMP%] {\n  top: 115px;\n  padding-top: 8px;\n}\n.why-index[_ngcontent-%COMP%]    > .why-eyebrow[_ngcontent-%COMP%] {\n  font-size: 8px;\n  letter-spacing: .12em;\n  margin-bottom: 14px;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.45;\n  padding: 14px 10px;\n  gap: 12px;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  background: #e8f2ff;\n  color: #075aec;\n  border-radius: 9px;\n  border-color: transparent;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #0879ff;\n}\n.why-index-contact[_ngcontent-%COMP%] {\n  border: 1px solid #e1ecfc;\n  border-radius: 9px;\n  background: #f3f8ff;\n  padding: 15px 12px;\n  font-size: 11px;\n  margin-top: 26px;\n}\n.why-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #dce9fb;\n}\n.why-group[_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.why-group-heading[_ngcontent-%COMP%] {\n  grid-template-columns: 65px 1fr;\n  gap: 20px;\n  border: 0;\n  padding-bottom: 18px;\n}\n.why-chapter-number[_ngcontent-%COMP%] {\n  font-size: 53px;\n  font-weight: 650;\n  line-height: 1;\n  color: #a2c9ff;\n  letter-spacing: -.045em;\n}\n.why-group-heading[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%] {\n  font-size: 8px;\n  letter-spacing: .18em;\n  margin-bottom: 6px;\n}\n.why-group-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 23px;\n  font-weight: 700;\n  letter-spacing: -.03em;\n}\n.why-reason-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 14px;\n}\n.why-reason[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0;\n  padding: 17px 15px;\n  border: 1px solid #e6effc;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      140deg,\n      #fff,\n      #f7fbff);\n  box-shadow: 0 5px 12px #136bce06;\n}\n.why-reason-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: #dceaff;\n  color: #0879ff;\n  font-size: 26px;\n  margin-bottom: 13px;\n}\n.why-reason[_ngcontent-%COMP%]:nth-child(2)   .why-reason-icon[_ngcontent-%COMP%] {\n  background: #fff0dc;\n  color: #f59119;\n}\n.why-reason[_ngcontent-%COMP%]:nth-child(3)   .why-reason-icon[_ngcontent-%COMP%] {\n  background: #eee5ff;\n  color: #6736db;\n}\n.why-reason[_ngcontent-%COMP%]:nth-child(4)   .why-reason-icon[_ngcontent-%COMP%] {\n  background: #d7f6e9;\n  color: #079863;\n}\n.why-reason[_ngcontent-%COMP%]:nth-child(5)   .why-reason-icon[_ngcontent-%COMP%] {\n  background: #ffe1e7;\n  color: #e8294a;\n}\n.why-reason[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.35;\n  margin: 0 0 10px;\n  color: #0b2146;\n}\n.why-reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.55;\n  color: #587099;\n  margin: 0;\n}\n@media (max-width: 1100px) {\n  .why-reasons[_ngcontent-%COMP%] {\n    padding-inline: 24px;\n  }\n  .why-editorial[_ngcontent-%COMP%] {\n    gap: 24px;\n    grid-template-columns: 160px minmax(0, 1fr);\n  }\n  .why-reason-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .why-intro[_ngcontent-%COMP%] {\n    grid-template-columns: 1.2fr 1fr;\n  }\n  .why-intro-art[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n}\n@media (max-width: 760px) {\n  .why-reasons[_ngcontent-%COMP%] {\n    margin: 0;\n    border: 0;\n    padding: 25px 20px;\n  }\n  .why-intro[_ngcontent-%COMP%] {\n    margin: 0 0 25px;\n    padding: 15px 0 25px;\n    grid-template-columns: 1fr;\n    gap: 25px;\n  }\n  .why-intro-stats[_ngcontent-%COMP%] {\n    max-width: 380px;\n    width: 100%;\n  }\n  .why-editorial[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 25px;\n  }\n  .why-index[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .why-group-heading[_ngcontent-%COMP%] {\n    grid-template-columns: 50px 1fr;\n    gap: 13px;\n  }\n  .why-chapter-number[_ngcontent-%COMP%] {\n    font-size: 44px;\n  }\n  .why-group-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n  .why-reason-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .why-reason[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .why-reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n}\n@media (max-width: 380px) {\n  .why-reason-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.why-intro[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr);\n  min-height: 0;\n}\n.why-intro-text[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.why-intro-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.why-reasons[_ngcontent-%COMP%] {\n  background: transparent;\n  border: 0;\n  box-shadow: none;\n}\n.why-intro[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.why-index[_ngcontent-%COMP%]    > .why-eyebrow[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.why-index-contact[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.why-group-heading[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n.why-group-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 25px;\n}\n.why-reason[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.why-reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.65;\n}\n@media (max-width: 760px) {\n  .why-group-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n  .why-reason[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .why-reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n}\n.why-page[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n.why-eyebrow[_ngcontent-%COMP%], \n.why-hero[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%], \n.why-intro-text[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(46px, 4.8vw, 70px);\n}\n.why-hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.why-hero[_ngcontent-%COMP%]   .why-button[_ngcontent-%COMP%], \n.why-story[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.why-proof[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.why-proof[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 13px;\n  white-space: normal;\n}\n.why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 44px;\n}\n.why-index[_ngcontent-%COMP%]    > .why-eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.why-index-contact[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.why-group-heading[_ngcontent-%COMP%]   .why-eyebrow[_ngcontent-%COMP%] {\n  font-size: 11px;\n}\n.why-group-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 29px;\n  line-height: 1.3;\n}\n.why-chapter-number[_ngcontent-%COMP%] {\n  font-size: 58px;\n}\n.why-reason[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.45;\n}\n.why-reason[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n}\n.why-closing[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(56px, 7.5vw, 96px);\n}\n.why-closing-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.why-closing-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media (max-width: 760px) {\n  .why-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .why-hero-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 40px;\n  }\n  .why-group-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .why-chapter-number[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n  .why-proof[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.why-contact-wrap[_ngcontent-%COMP%] {\n  padding-bottom: 48px;\n}\n.why-buddha-strip[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  line-height: 1.25;\n  color: #fff;\n  margin: 0 0 10px;\n  letter-spacing: -.02em;\n}\n.why-buddha-strip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.6;\n  color: #d8e8ff;\n  margin: 0;\n}\n.why-contact-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.why-buddha-strip[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #ffffff66;\n}\n@media (max-width: 760px) {\n  .why-buddha-strip[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n}\n.why-index-contact[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 12px;\n  padding-inline: 10px;\n}\n.why-intro-text[_ngcontent-%COMP%] {\n  container-type: inline-size;\n}\n.why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(26px, 3.05cqi, 38px);\n}\n.why-page[_ngcontent-%COMP%]   .why-intro[_ngcontent-%COMP%]   .why-intro-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n  font-size: clamp(24px, 2.7cqi, 34px);\n  white-space: nowrap;\n}\n@media (max-width: 760px) {\n  .why-page[_ngcontent-%COMP%]   .why-intro[_ngcontent-%COMP%]   .why-intro-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    white-space: normal;\n    font-size: 28px;\n  }\n}\n.why-page[_ngcontent-%COMP%]   .why-intro[_ngcontent-%COMP%]   .why-intro-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 3.4cqi, 42px);\n}\n@media (max-width: 760px) {\n  .why-page[_ngcontent-%COMP%]   .why-intro[_ngcontent-%COMP%]   .why-intro-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n}\n.why-page[_ngcontent-%COMP%]   .why-intro[_ngcontent-%COMP%]   .why-intro-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.why-editorial[_ngcontent-%COMP%] {\n  grid-template-columns: 250px minmax(0, 1fr);\n  gap: 32px;\n}\n.why-index[_ngcontent-%COMP%]    > .why-eyebrow[_ngcontent-%COMP%] {\n  font-size: 13px;\n  margin-bottom: 20px;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.5;\n  padding: 20px 14px;\n  gap: 14px;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.why-index-contact[_ngcontent-%COMP%] {\n  font-size: 15px;\n  padding: 18px 14px;\n  margin-top: 30px;\n}\n@media (max-width: 1100px) {\n  .why-editorial[_ngcontent-%COMP%] {\n    grid-template-columns: 230px minmax(0, 1fr);\n    gap: 24px;\n  }\n}\n@media (max-width: 760px) {\n  .why-editorial[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 16px 10px;\n  }\n  .why-index-contact[_ngcontent-%COMP%] {\n    width: fit-content;\n    max-width: 100%;\n  }\n}\n@media (max-width: 420px) {\n  .why-index[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.why-group-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 34px;\n  line-height: 1.25;\n}\n@media (max-width: 760px) {\n  .why-group-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=why-xcellhost-reasons.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(WhyXcellhostReasonsComponent, [{
    type: Component,
    args: [{ selector: "xh-why-xcellhost-reasons", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="why-page why-reasons-page">\r
  <section class="why-reasons why-wrap" id="why-reasons" aria-labelledby="reasons-title">\r
    <header class="why-intro">\r
      <div class="why-intro-text"><h2 id="reasons-title">Built on Experience. <em>Driven by What&rsquo;s Next.</em></h2></div>\r
    </header>\r
    <div class="why-editorial">\r
      <aside class="why-index"><span class="why-eyebrow">EXPLORE THE CHAPTERS</span><nav aria-label="Reasons by theme">@for (group of groups; track group.title; let index = $index) {<a [routerLink]="[]" [fragment]="'reason-group-' + index"><span>0{{ index + 1 }}</span>{{ group.title }}</a>}</nav><a class="why-index-contact" routerLink="/contact">Find your cloud solution</a></aside>\r
      <div class="why-chapters">\r
        @for (group of groups; track group.title; let index = $index) {\r
          <section class="why-group" [id]="'reason-group-' + index" [attr.aria-labelledby]="'reason-title-' + index">\r
            <header class="why-group-heading"><span class="why-chapter-number">0{{ index + 1 }}</span><div><span class="why-eyebrow">{{ group.title }}</span><h3 [id]="'reason-title-' + index">{{ chapterHeadings[index] }}</h3></div></header>\r
            <div class="why-reason-list">@for (reason of group.reasons; track reason.number) {<article class="why-reason"><span class="why-reason-icon material-symbols-outlined" aria-hidden="true">{{ reason.icon }}</span><h4>{{ reason.title }}</h4><p>{{ reason.body }}</p></article>}</div>\r
          </section>\r
        }\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ['/* src/app/sections/why-xcellhost-reasons.component.css */\n:host {\n  display: block;\n}\n.why-page {\n  font-family: var(--body,"IBM Plex Sans",sans-serif);\n  color: #102747;\n  background: #fbfcfe;\n  line-height: 1.6;\n}\n.why-page * {\n  box-sizing: border-box;\n}\n.why-wrap {\n  max-width: 1320px;\n  padding: 0 40px;\n  margin: auto;\n}\n.why-page a {\n  color: inherit;\n  text-decoration: none;\n}\n.why-eyebrow {\n  display: block;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: .18em;\n  color: #1565df;\n}\n.why-hero {\n  background: #081f42;\n  color: #fff;\n  padding-top: 30px;\n  overflow: hidden;\n}\n.why-crumb {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  font-size: 11px;\n  color: #95aed0;\n}\n.why-hero-grid {\n  display: grid;\n  grid-template-columns: 1.15fr 1fr;\n  gap: 65px;\n  align-items: center;\n  padding: 80px 0 72px;\n}\n.why-hero .why-eyebrow {\n  color: #8dbbff;\n  margin-bottom: 24px;\n}\n.why-hero h1 {\n  font-size: clamp(44px, 5vw, 70px);\n  font-weight: 600;\n  letter-spacing: -.055em;\n  line-height: 1.08;\n  margin: 0 0 28px;\n  color: white;\n}\n.why-page em {\n  font-family: Georgia, serif;\n  font-weight: 400;\n}\n.why-hero h1 em {\n  color: #94beff;\n}\n.why-hero-copy p {\n  color: #b9cbe3;\n  font-size: 17px;\n  line-height: 1.8;\n  margin: 0 0 30px;\n}\n.why-button {\n  display: inline-flex;\n  gap: 35px;\n  align-items: center;\n  padding: 13px 0;\n  border-bottom: 1px solid #79abed;\n  font-weight: 600;\n  font-size: 14px;\n}\n.why-button span {\n  color: #94beff;\n  font-size: 24px;\n}\n.why-type-art {\n  position: relative;\n  border-left: 1px solid #ffffff25;\n  padding-left: 48px;\n}\n.why-art-caption {\n  font-size: 10px;\n  letter-spacing: .17em;\n  color: #96adcf;\n}\n.why-type-art > strong {\n  display: block;\n  font-size: clamp(150px, 18vw, 260px);\n  letter-spacing: -.085em;\n  line-height: 1.1;\n  font-weight: 600;\n  color: #fff;\n}\n.why-type-art > strong > span {\n  color: #488af2;\n}\n.why-art-baseline {\n  display: flex;\n  justify-content: space-between;\n  gap: 15px;\n  border-top: 1px solid #ffffff25;\n  padding-top: 20px;\n  color: #a5bfdf;\n  font-size: 12px;\n}\n.why-proof {\n  display: flex;\n  justify-content: space-between;\n  gap: 25px;\n  padding: 26px 0;\n  border-top: 1px solid #ffffff25;\n  font-size: 12px;\n  color: #92aaca;\n}\n.why-proof b {\n  color: white;\n  font-size: 16px;\n  margin-right: 14px;\n  font-weight: 600;\n}\n.why-reasons {\n  padding-top: 80px;\n  padding-bottom: 90px;\n  scroll-margin-top: 110px;\n}\n.why-intro {\n  display: grid;\n  grid-template-columns: 1.2fr 1fr;\n  column-gap: 60px;\n  align-items: end;\n  margin-bottom: 62px;\n}\n.why-intro > .why-eyebrow {\n  grid-column: 1/-1;\n  margin-bottom: 18px;\n}\n.why-intro h2 {\n  font-size: clamp(36px, 4vw, 52px);\n  line-height: 1.12;\n  font-weight: 600;\n  letter-spacing: -.045em;\n  margin: 0;\n  color: #102747;\n}\n.why-intro h2 em {\n  color: #1565df;\n}\n.why-intro p {\n  font-size: 16px;\n  color: #67768a;\n  margin: 0 0 5px;\n}\n.why-editorial {\n  display: grid;\n  grid-template-columns: 250px minmax(0, 1fr);\n  gap: 70px;\n  align-items: start;\n}\n.why-index {\n  position: sticky;\n  top: 125px;\n  padding-top: 18px;\n}\n.why-index > .why-eyebrow {\n  color: #77869b;\n  margin-bottom: 18px;\n}\n.why-index nav {\n  display: flex;\n  flex-direction: column;\n}\n.why-index nav a {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  border-bottom: 1px solid #dce3ee;\n  padding: 17px 0;\n  font-size: 13px;\n  line-height: 1.4;\n  font-weight: 600;\n}\n.why-index nav a > span {\n  font-size: 10px;\n  color: #1565df;\n  font-weight: 500;\n}\n.why-index nav i {\n  margin-left: auto;\n  font-style: normal;\n  color: #8299ba;\n}\n.why-index nav a:hover {\n  color: #1565df;\n}\n.why-index-contact {\n  display: block;\n  margin-top: 30px;\n  color: #1565df !important;\n  font-size: 12px;\n  font-weight: 600;\n}\n.why-group {\n  scroll-margin-top: 120px;\n  padding-bottom: 55px;\n  margin-bottom: 26px;\n}\n.why-group:last-child {\n  padding-bottom: 0;\n  margin-bottom: 0;\n}\n.why-group-heading {\n  display: grid;\n  grid-template-columns: 100px 1fr;\n  align-items: center;\n  gap: 22px;\n  padding: 0 0 25px;\n  border-bottom: 2px solid #153e73;\n}\n.why-chapter-number {\n  font-size: 76px;\n  line-height: 1;\n  color: #bdd1ed;\n  font-weight: 500;\n  letter-spacing: -.07em;\n}\n.why-group-heading .why-eyebrow {\n  font-size: 9px;\n  margin-bottom: 5px;\n}\n.why-group-heading h3 {\n  font-size: 30px;\n  font-weight: 600;\n  letter-spacing: -.035em;\n  margin: 0;\n  color: #102747;\n  line-height: 1.2;\n}\n.why-group-heading p {\n  color: #718095;\n  font-size: 13px;\n  margin: 8px 0 0;\n}\n.why-reason {\n  display: grid;\n  grid-template-columns: 28px minmax(0, .9fr) minmax(0, 1.1fr);\n  gap: 20px;\n  align-items: start;\n  padding: 25px 0;\n  border-bottom: 1px solid #dce3ee;\n}\n.why-reason-number {\n  font-size: 10px;\n  color: #728ba9;\n  padding-top: 4px;\n}\n.why-reason h4 {\n  font-size: 16px;\n  line-height: 1.5;\n  color: #142f53;\n  margin: 0;\n  font-weight: 600;\n  letter-spacing: -.01em;\n}\n.why-reason p {\n  font-size: 14px;\n  line-height: 1.7;\n  color: #69798d;\n  margin: 0;\n}\n.why-closing {\n  padding: 68px 0;\n  background: #1260de;\n  color: white;\n}\n.why-closing .why-eyebrow {\n  color: #bfdaff;\n  margin-bottom: 20px;\n}\n.why-closing h2 {\n  color: white;\n  font-size: clamp(50px, 7vw, 88px);\n  letter-spacing: -.055em;\n  line-height: 1.04;\n  margin: 0 0 38px;\n  font-weight: 500;\n}\n.why-closing-bottom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 30px;\n  border-top: 1px solid #ffffff45;\n  padding-top: 24px;\n}\n.why-closing-bottom p {\n  font-size: 16px;\n  color: #d1e3ff;\n  margin: 0;\n}\n.why-closing-bottom a {\n  display: flex;\n  align-items: center;\n  gap: 40px;\n  font-size: 18px;\n  font-weight: 600;\n}\n.why-closing-bottom a span {\n  font-size: 32px;\n}\n.why-page a:focus-visible {\n  outline: 3px solid #f49c40;\n  outline-offset: 5px;\n}\n@media (max-width: 1050px) {\n  .why-editorial {\n    grid-template-columns: 210px minmax(0, 1fr);\n    gap: 35px;\n  }\n  .why-hero-grid {\n    gap: 30px;\n  }\n  .why-type-art {\n    padding-left: 30px;\n  }\n  .why-proof > span {\n    display: flex;\n    flex-direction: column;\n  }\n  .why-reason {\n    gap: 12px;\n  }\n  .why-group-heading {\n    grid-template-columns: 75px 1fr;\n  }\n  .why-chapter-number {\n    font-size: 65px;\n  }\n}\n@media (max-width: 760px) {\n  .why-wrap {\n    padding-left: 24px;\n    padding-right: 24px;\n  }\n  .why-hero-grid {\n    grid-template-columns: 1fr;\n    padding: 45px 0;\n    gap: 40px;\n  }\n  .why-type-art {\n    border-left: 0;\n    border-top: 1px solid #ffffff25;\n    padding: 24px 0 0;\n  }\n  .why-type-art > strong {\n    font-size: 150px;\n  }\n  .why-art-baseline {\n    max-width: 450px;\n  }\n  .why-proof {\n    flex-wrap: wrap;\n  }\n  .why-proof > span {\n    flex: 1 1 130px;\n  }\n  .why-intro {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    margin-bottom: 35px;\n  }\n  .why-intro > .why-eyebrow {\n    margin: 0;\n  }\n  .why-editorial {\n    grid-template-columns: 1fr;\n    gap: 35px;\n  }\n  .why-index {\n    position: static;\n    padding: 0;\n  }\n  .why-index nav {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    column-gap: 22px;\n  }\n  .why-index-contact {\n    margin-top: 18px;\n  }\n  .why-reasons {\n    padding-top: 45px;\n    padding-bottom: 45px;\n  }\n  .why-reason {\n    grid-template-columns: 26px 1fr;\n    gap: 8px 15px;\n    padding: 22px 0;\n  }\n  .why-reason p {\n    grid-column: 2;\n  }\n  .why-group {\n    padding-bottom: 30px;\n  }\n  .why-group-heading h3 {\n    font-size: 27px;\n  }\n  .why-closing {\n    padding: 45px 0;\n  }\n  .why-closing-bottom {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .why-page * {\n    scroll-behavior: auto;\n  }\n}\n.why-hero {\n  background:\n    radial-gradient(\n      ellipse at 85% 40%,\n      #123d73 0,\n      transparent 58%),\n    #081f42;\n}\n.why-hero-grid {\n  grid-template-columns: 1fr 1.15fr;\n  gap: 35px;\n  padding: 58px 0 52px;\n}\n.why-hero h1 {\n  font-size: clamp(42px, 4.6vw, 64px);\n}\n.why-hero-visual {\n  position: relative;\n  min-width: 0;\n}\n.why-hero-visual img {\n  display: block;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 3/2;\n  object-fit: contain;\n  mix-blend-mode: screen;\n  -webkit-mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12%,\n      #000 94%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12%,\n      #000 94%,\n      transparent);\n}\n.why-visual-caption {\n  display: block;\n  text-align: center;\n  margin-top: 15px;\n  color: #93b9ec;\n  font-size: 10px;\n  letter-spacing: .2em;\n  font-weight: 600;\n}\n@media (max-width: 760px) {\n  .why-hero-grid {\n    grid-template-columns: 1fr;\n    gap: 30px;\n    padding: 40px 0;\n  }\n  .why-hero-visual {\n    max-width: 580px;\n    width: 100%;\n    margin: auto;\n  }\n  .why-hero h1 {\n    font-size: 44px;\n  }\n}\n.why-hero {\n  width: 100%;\n  min-height: 390px;\n  padding-top: 24px;\n}\n.why-hero > .why-wrap {\n  max-width: 1240px;\n  padding-inline: 24px;\n  width: 100%;\n}\n.why-hero-grid {\n  padding: 24px 0;\n  gap: 40px;\n}\n.why-hero h1 {\n  font-size: clamp(36px, 3.2vw, 46px);\n  margin-bottom: 18px;\n}\n.why-hero .why-eyebrow {\n  margin-bottom: 14px;\n}\n.why-hero-copy p {\n  font-size: 16px;\n  line-height: 1.65;\n  margin-bottom: 18px;\n}\n.why-hero-visual img {\n  height: 300px;\n  width: 100%;\n  object-fit: contain;\n}\n.why-visual-caption {\n  margin-top: 8px;\n}\n.why-proof {\n  padding: 18px 0;\n}\n@media (max-width: 760px) {\n  .why-hero {\n    min-height: 340px;\n  }\n  .why-hero-grid {\n    grid-template-columns: 1fr;\n    padding: 24px 0;\n    gap: 24px;\n  }\n  .why-hero-visual img {\n    height: auto;\n    max-height: 280px;\n  }\n  .why-hero h1 {\n    font-size: 38px;\n  }\n}\n.why-hero {\n  position: relative;\n  padding: 40px 0 48px;\n  min-height: 490px;\n  background:\n    radial-gradient(\n      ellipse at 76% 32%,\n      #07427e 0,\n      transparent 52%),\n    linear-gradient(\n      115deg,\n      #041b3b,\n      #002453 72%,\n      #041c3e);\n}\n.why-hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      140deg,\n      #0752ab40 0 12%,\n      transparent 12% 100%);\n  pointer-events: none;\n}\n.why-hero > .why-wrap {\n  position: relative;\n  max-width: 1440px;\n  padding-inline: 40px;\n}\n.why-hero-grid {\n  grid-template-columns: 1fr 1.18fr;\n  gap: 26px;\n  padding: 0;\n  align-items: center;\n}\n.why-hero .why-eyebrow {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 7px 15px;\n  border-radius: 30px;\n  background: #0637698c;\n  color: #00b8ff;\n  font-size: 11px;\n  letter-spacing: .12em;\n  margin-bottom: 12px;\n}\n.why-hero h1 {\n  font-size: clamp(40px, 4.5vw, 64px);\n  font-weight: 750;\n  line-height: 1.02;\n  letter-spacing: -.035em;\n  margin-bottom: 18px;\n}\n.why-hero h1 em {\n  font: inherit;\n  color: #00b8f4;\n}\n.why-hero-copy p {\n  font-size: 18px;\n  line-height: 1.45;\n  max-width: 550px;\n  margin-bottom: 22px;\n  color: #b8c6da;\n}\n.why-hero-actions {\n  display: flex;\n  gap: 18px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.why-hero .why-button {\n  display: inline-flex;\n  align-items: center;\n  padding: 13px 24px;\n  border: 1px solid #087aff;\n  border-radius: 10px;\n  background: #0676ff;\n  color: white;\n  font-size: 14px;\n  gap: 18px;\n  box-shadow: 0 10px 28px #0076ff20;\n}\n.why-hero .why-button span {\n  font-size: 24px;\n  color: white;\n}\n.why-story {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  border: 1px solid #00b8ff;\n  border-radius: 10px;\n  padding: 14px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  color: white;\n}\n.why-hero-visual {\n  min-height: 345px;\n  position: relative;\n}\n.why-hero-visual img {\n  width: 100%;\n  height: 355px;\n  object-fit: contain;\n  mix-blend-mode: screen;\n  -webkit-mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12%,\n      #000 90%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 12%,\n      #000 90%,\n      transparent);\n}\n.why-visual-note {\n  position: absolute;\n  display: block;\n  text-align: center;\n  padding: 12px 10px;\n  background:\n    linear-gradient(\n      140deg,\n      #063a77eb,\n      #032657ed);\n  border: 1px solid #1260a5;\n  border-radius: 10px;\n  color: #e2efff;\n  box-shadow: 0 12px 25px #000b2020;\n  font-size: 10px;\n  line-height: 1.3;\n  min-width: 84px;\n}\n.why-visual-note i {\n  display: block;\n  color: #00baff;\n  font-style: normal;\n  font-size: 27px;\n  margin-bottom: 7px;\n}\n.note-scale {\n  left: 4%;\n  top: 15%;\n  transform: rotate(-5deg);\n}\n.note-global {\n  right: 4%;\n  top: 18%;\n  transform: rotate(4deg);\n}\n.note-secure {\n  left: 8%;\n  bottom: 17%;\n  transform: rotate(-4deg);\n}\n.note-trust {\n  right: 12%;\n  bottom: 7%;\n  transform: rotate(4deg);\n}\n.why-growth {\n  position: absolute;\n  right: -12px;\n  bottom: -15px;\n  color: #57b8ff;\n  font: italic 24px/1.1 Georgia, serif;\n  transform: rotate(-10deg);\n}\n.why-proof {\n  position: relative;\n  display: flex;\n  justify-content: flex-start;\n  gap: 0;\n  border: 0;\n  padding: 24px 0 0;\n  max-width: 850px;\n}\n.why-proof > span {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: 13px;\n  padding: 0 24px;\n  border-right: 1px solid #ffffff25;\n  flex: 1;\n}\n.why-proof > span:first-child {\n  padding-left: 0;\n}\n.why-proof > span:last-child {\n  border: 0;\n}\n.why-proof i {\n  font-size: 33px;\n  color: #00b8ff;\n  font-style: normal;\n}\n.why-proof b {\n  display: block;\n  margin: 0 0 3px;\n  font-size: 14px;\n  white-space: nowrap;\n}\n.why-proof small {\n  font-size: 11px;\n  color: #bbcadd;\n  white-space: nowrap;\n}\n@media (max-width: 1000px) {\n  .why-hero h1 {\n    font-size: 45px;\n  }\n  .why-hero-copy p {\n    font-size: 16px;\n  }\n  .why-hero-visual img {\n    height: 330px;\n  }\n  .why-visual-note {\n    min-width: 70px;\n    font-size: 9px;\n  }\n  .why-growth {\n    display: none;\n  }\n  .why-hero-actions {\n    gap: 10px;\n  }\n  .why-hero .why-button,\n  .why-story {\n    padding: 12px 15px;\n  }\n}\n@media (max-width: 760px) {\n  .why-hero {\n    padding: 30px 0;\n  }\n  .why-hero > .why-wrap {\n    padding-inline: 24px;\n  }\n  .why-hero-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .why-hero h1 {\n    font-size: 44px;\n  }\n  .why-hero-visual {\n    min-height: 300px;\n  }\n  .why-hero-visual img {\n    height: 310px;\n    max-height: none;\n  }\n  .why-proof {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 22px;\n    padding-top: 25px;\n  }\n  .why-proof > span {\n    padding: 0;\n    border: 0;\n  }\n  .why-proof b {\n    font-size: 13px;\n  }\n  .why-proof small {\n    white-space: normal;\n  }\n}\n.why-hero-visual img {\n  height: auto;\n  max-height: 390px;\n  aspect-ratio: 1672/941;\n  object-fit: contain;\n  mix-blend-mode: normal;\n  -webkit-mask-image: none;\n  mask-image: none;\n}\n.why-hero-visual {\n  min-height: 0;\n}\n@media (max-width: 760px) {\n  .why-hero-visual img {\n    height: auto;\n    max-height: none;\n  }\n}\n.why-hero-visual img {\n  mix-blend-mode: lighten;\n  -webkit-mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 22%,\n      #000 78%,\n      transparent),\n    linear-gradient(\n      to bottom,\n      transparent,\n      #000 24%,\n      #000 76%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      to right,\n      transparent,\n      #000 22%,\n      #000 78%,\n      transparent),\n    linear-gradient(\n      to bottom,\n      transparent,\n      #000 24%,\n      #000 76%,\n      transparent);\n  -webkit-mask-composite: source-in;\n  mask-composite: intersect;\n}\n.why-reasons {\n  max-width: 1320px;\n  margin: 28px auto 50px;\n  padding: 0 38px 30px;\n  background:\n    linear-gradient(\n      120deg,\n      #fff,\n      #f8fcff);\n  border: 1px solid #e8eef5;\n  box-shadow: 0 8px 18px #1027470a;\n}\n.why-intro {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr .85fr;\n  gap: 24px;\n  align-items: center;\n  padding: 40px 18px 28px;\n  margin: 0 -18px 20px;\n  background:\n    radial-gradient(\n      ellipse at 90% 30%,\n      #d9efff,\n      transparent 65%);\n  position: relative;\n  overflow: hidden;\n  min-height: 240px;\n}\n.why-intro-text {\n  position: relative;\n  z-index: 1;\n}\n.why-intro-text .why-eyebrow {\n  font-size: 9px;\n  margin-bottom: 10px;\n}\n.why-intro h2 {\n  font-size: 38px;\n  letter-spacing: -.04em;\n  line-height: 1.05;\n}\n.why-intro-text p {\n  font-size: 12px;\n  line-height: 1.6;\n  max-width: 375px;\n  margin: 15px 0 0;\n  color: #5d7499;\n}\n.why-intro h2 em {\n  color: #0879ff;\n}\n.why-intro-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  position: relative;\n  z-index: 1;\n  gap: 8px;\n  text-align: center;\n}\n.why-intro-stats > div {\n  border-right: 1px solid #dfecfa;\n}\n.why-intro-stats > div:last-child {\n  border: 0;\n}\n.why-intro-stats i {\n  font-style: normal;\n  display: grid;\n  place-items: center;\n  margin: 0 auto 8px;\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  background: #e5f1ff;\n  color: #0879ff;\n  font-size: 24px;\n}\n.why-intro-stats b {\n  display: block;\n  font-size: 19px;\n  line-height: 1.3;\n  color: #0b2146;\n}\n.why-intro-stats span {\n  display: block;\n  font-size: 9px;\n  color: #52698d;\n  margin-top: 4px;\n}\n.why-intro-art {\n  width: 125%;\n  max-width: none;\n  height: 215px;\n  object-fit: contain;\n  margin-left: -25px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse,\n      #000 35%,\n      transparent 73%);\n  mask-image:\n    radial-gradient(\n      ellipse,\n      #000 35%,\n      transparent 73%);\n}\n.why-editorial {\n  grid-template-columns: 180px minmax(0, 1fr);\n  gap: 40px;\n}\n.why-index {\n  top: 115px;\n  padding-top: 8px;\n}\n.why-index > .why-eyebrow {\n  font-size: 8px;\n  letter-spacing: .12em;\n  margin-bottom: 14px;\n}\n.why-index nav a {\n  font-size: 11px;\n  line-height: 1.45;\n  padding: 14px 10px;\n  gap: 12px;\n}\n.why-index nav a:first-child {\n  background: #e8f2ff;\n  color: #075aec;\n  border-radius: 9px;\n  border-color: transparent;\n}\n.why-index nav i {\n  font-size: 14px;\n  color: #0879ff;\n}\n.why-index-contact {\n  border: 1px solid #e1ecfc;\n  border-radius: 9px;\n  background: #f3f8ff;\n  padding: 15px 12px;\n  font-size: 11px;\n  margin-top: 26px;\n}\n.why-group {\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #dce9fb;\n}\n.why-group:last-child {\n  border: 0;\n}\n.why-group-heading {\n  grid-template-columns: 65px 1fr;\n  gap: 20px;\n  border: 0;\n  padding-bottom: 18px;\n}\n.why-chapter-number {\n  font-size: 53px;\n  font-weight: 650;\n  line-height: 1;\n  color: #a2c9ff;\n  letter-spacing: -.045em;\n}\n.why-group-heading .why-eyebrow {\n  font-size: 8px;\n  letter-spacing: .18em;\n  margin-bottom: 6px;\n}\n.why-group-heading h3 {\n  font-size: 23px;\n  font-weight: 700;\n  letter-spacing: -.03em;\n}\n.why-reason-list {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 14px;\n}\n.why-reason {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 0;\n  padding: 17px 15px;\n  border: 1px solid #e6effc;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      140deg,\n      #fff,\n      #f7fbff);\n  box-shadow: 0 5px 12px #136bce06;\n}\n.why-reason-icon {\n  display: grid;\n  place-items: center;\n  width: 45px;\n  height: 45px;\n  border-radius: 50%;\n  background: #dceaff;\n  color: #0879ff;\n  font-size: 26px;\n  margin-bottom: 13px;\n}\n.why-reason:nth-child(2) .why-reason-icon {\n  background: #fff0dc;\n  color: #f59119;\n}\n.why-reason:nth-child(3) .why-reason-icon {\n  background: #eee5ff;\n  color: #6736db;\n}\n.why-reason:nth-child(4) .why-reason-icon {\n  background: #d7f6e9;\n  color: #079863;\n}\n.why-reason:nth-child(5) .why-reason-icon {\n  background: #ffe1e7;\n  color: #e8294a;\n}\n.why-reason h4 {\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.35;\n  margin: 0 0 10px;\n  color: #0b2146;\n}\n.why-reason p {\n  font-size: 11px;\n  line-height: 1.55;\n  color: #587099;\n  margin: 0;\n}\n@media (max-width: 1100px) {\n  .why-reasons {\n    padding-inline: 24px;\n  }\n  .why-editorial {\n    gap: 24px;\n    grid-template-columns: 160px minmax(0, 1fr);\n  }\n  .why-reason-list {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .why-intro {\n    grid-template-columns: 1.2fr 1fr;\n  }\n  .why-intro-art {\n    display: none;\n  }\n  .why-intro h2 {\n    font-size: 34px;\n  }\n}\n@media (max-width: 760px) {\n  .why-reasons {\n    margin: 0;\n    border: 0;\n    padding: 25px 20px;\n  }\n  .why-intro {\n    margin: 0 0 25px;\n    padding: 15px 0 25px;\n    grid-template-columns: 1fr;\n    gap: 25px;\n  }\n  .why-intro-stats {\n    max-width: 380px;\n    width: 100%;\n  }\n  .why-editorial {\n    grid-template-columns: 1fr;\n    gap: 25px;\n  }\n  .why-index {\n    position: static;\n  }\n  .why-index nav {\n    grid-template-columns: 1fr 1fr;\n  }\n  .why-group-heading {\n    grid-template-columns: 50px 1fr;\n    gap: 13px;\n  }\n  .why-chapter-number {\n    font-size: 44px;\n  }\n  .why-group-heading h3 {\n    font-size: 21px;\n  }\n  .why-reason-list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .why-reason h4 {\n    font-size: 14px;\n  }\n  .why-reason p {\n    font-size: 12px;\n  }\n}\n@media (max-width: 380px) {\n  .why-reason-list {\n    grid-template-columns: 1fr;\n  }\n}\n.why-intro {\n  grid-template-columns: minmax(0, 1fr);\n  min-height: 0;\n}\n.why-intro-text {\n  width: 100%;\n}\n.why-intro-text p {\n  max-width: none;\n}\n.why-reasons {\n  background: transparent;\n  border: 0;\n  box-shadow: none;\n}\n.why-intro {\n  background: transparent;\n}\n.why-index > .why-eyebrow {\n  font-size: 9px;\n}\n.why-index nav a,\n.why-index-contact {\n  font-size: 12px;\n}\n.why-group-heading .why-eyebrow {\n  font-size: 9px;\n}\n.why-group-heading h3 {\n  font-size: 25px;\n}\n.why-reason h4 {\n  font-size: 14px;\n}\n.why-reason p {\n  font-size: 12px;\n  line-height: 1.65;\n}\n@media (max-width: 760px) {\n  .why-group-heading h3 {\n    font-size: 23px;\n  }\n  .why-reason h4 {\n    font-size: 15px;\n  }\n  .why-reason p {\n    font-size: 13px;\n  }\n}\n.why-page {\n  font-size: 17px;\n}\n.why-eyebrow,\n.why-hero .why-eyebrow,\n.why-intro-text .why-eyebrow {\n  font-size: 12px;\n}\n.why-hero h1 {\n  font-size: clamp(46px, 4.8vw, 70px);\n}\n.why-hero-copy p {\n  font-size: 20px;\n}\n.why-hero .why-button,\n.why-story {\n  font-size: 16px;\n}\n.why-proof b {\n  font-size: 16px;\n}\n.why-proof small {\n  font-size: 13px;\n  white-space: normal;\n}\n.why-intro h2 {\n  font-size: 44px;\n}\n.why-index > .why-eyebrow {\n  font-size: 11px;\n}\n.why-index nav a,\n.why-index-contact {\n  font-size: 14px;\n}\n.why-index nav a > span {\n  font-size: 12px;\n}\n.why-group-heading .why-eyebrow {\n  font-size: 11px;\n}\n.why-group-heading h3 {\n  font-size: 29px;\n  line-height: 1.3;\n}\n.why-chapter-number {\n  font-size: 58px;\n}\n.why-reason h4 {\n  font-size: 16px;\n  line-height: 1.45;\n}\n.why-reason p {\n  font-size: 14px;\n  line-height: 1.7;\n}\n.why-closing h2 {\n  font-size: clamp(56px, 7.5vw, 96px);\n}\n.why-closing-bottom p {\n  font-size: 18px;\n}\n.why-closing-bottom a {\n  font-size: 20px;\n}\n@media (max-width: 760px) {\n  .why-hero h1 {\n    font-size: 48px;\n  }\n  .why-hero-copy p {\n    font-size: 18px;\n  }\n  .why-intro h2 {\n    font-size: 40px;\n  }\n  .why-group-heading h3 {\n    font-size: 26px;\n  }\n  .why-chapter-number {\n    font-size: 48px;\n  }\n  .why-proof b {\n    font-size: 15px;\n  }\n}\n.why-contact-wrap {\n  padding-bottom: 48px;\n}\n.why-buddha-strip h2 {\n  font-size: 28px;\n  line-height: 1.25;\n  color: #fff;\n  margin: 0 0 10px;\n  letter-spacing: -.02em;\n}\n.why-buddha-strip p {\n  font-size: 15px;\n  line-height: 1.6;\n  color: #d8e8ff;\n  margin: 0;\n}\n.why-contact-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.why-buddha-strip .btn-ghost {\n  color: #fff;\n  border-color: #ffffff66;\n}\n@media (max-width: 760px) {\n  .why-buddha-strip h2 {\n    font-size: 24px;\n  }\n}\n.why-index-contact {\n  white-space: nowrap;\n  font-size: 12px;\n  padding-inline: 10px;\n}\n.why-intro-text {\n  container-type: inline-size;\n}\n.why-intro h2 {\n  font-size: clamp(26px, 3.05cqi, 38px);\n}\n.why-page .why-intro .why-intro-text h2 {\n  width: 100%;\n  max-width: none;\n  font-size: clamp(24px, 2.7cqi, 34px);\n  white-space: nowrap;\n}\n@media (max-width: 760px) {\n  .why-page .why-intro .why-intro-text h2 {\n    white-space: normal;\n    font-size: 28px;\n  }\n}\n.why-page .why-intro .why-intro-text h2 {\n  font-size: clamp(28px, 3.4cqi, 42px);\n}\n@media (max-width: 760px) {\n  .why-page .why-intro .why-intro-text h2 {\n    font-size: 32px;\n  }\n}\n.why-page .why-intro .why-intro-text h2 {\n  text-align: center;\n}\n.why-editorial {\n  grid-template-columns: 250px minmax(0, 1fr);\n  gap: 32px;\n}\n.why-index > .why-eyebrow {\n  font-size: 13px;\n  margin-bottom: 20px;\n}\n.why-index nav a {\n  font-size: 16px;\n  line-height: 1.5;\n  padding: 20px 14px;\n  gap: 14px;\n}\n.why-index nav a > span {\n  font-size: 14px;\n}\n.why-index nav i {\n  font-size: 18px;\n}\n.why-index-contact {\n  font-size: 15px;\n  padding: 18px 14px;\n  margin-top: 30px;\n}\n@media (max-width: 1100px) {\n  .why-editorial {\n    grid-template-columns: 230px minmax(0, 1fr);\n    gap: 24px;\n  }\n}\n@media (max-width: 760px) {\n  .why-editorial {\n    grid-template-columns: 1fr;\n  }\n  .why-index nav a {\n    padding: 16px 10px;\n  }\n  .why-index-contact {\n    width: fit-content;\n    max-width: 100%;\n  }\n}\n@media (max-width: 420px) {\n  .why-index nav {\n    grid-template-columns: 1fr;\n  }\n}\n.why-group-heading h3 {\n  font-size: 34px;\n  line-height: 1.25;\n}\n@media (max-width: 760px) {\n  .why-group-heading h3 {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=why-xcellhost-reasons.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WhyXcellhostReasonsComponent, { className: "WhyXcellhostReasonsComponent", filePath: "src/app/sections/why-xcellhost-reasons.component.ts", lineNumber: 13 });
})();

// src/app/sections/zoho-job-listing.component.ts
function ZohoJobListingComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "span", 20);
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3, "Loading current opportunities\u2026");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5, "Connecting securely to XcellHost careers");
    \u0275\u0275elementEnd()();
  }
}
function ZohoJobListingComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 5);
    \u0275\u0275text(2, "\u2197");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Open the careers portal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "The job list could not load here. You can still browse every current opening directly on our secure recruitment portal.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 21);
    \u0275\u0275text(8, "View open roles ");
    \u0275\u0275elementStart(9, "b", 5);
    \u0275\u0275text(10, "\u2192");
    \u0275\u0275elementEnd()()();
  }
}
var ZohoJobListingComponent = class _ZohoJobListingComponent {
  document = inject(DOCUMENT);
  destroyRef = inject(DestroyRef);
  observer;
  failureTimer;
  status = signal("loading", ...ngDevMode ? [{ debugName: "status" }] : []);
  ngAfterViewInit() {
    const win = this.document.defaultView;
    const target = this.document.getElementById("rec_job_listing_div");
    if (!win || !target) {
      this.status.set("error");
      return;
    }
    this.installStylesheet();
    this.observer = new MutationObserver(() => {
      if (target.childElementCount > 0 || target.textContent?.trim()) {
        this.status.set("ready");
        if (this.failureTimer)
          win.clearTimeout(this.failureTimer);
      }
    });
    this.observer.observe(target, { childList: true, subtree: true, characterData: true });
    const initialise = () => {
      if (!win.rec_embed_js) {
        this.status.set("error");
        return;
      }
      target.replaceChildren();
      win.rec_embed_js.load({
        widget_id: "rec_job_listing_div",
        page_name: "Careers",
        source: "CareerSite",
        site: "https://xcellhost.zohorecruit.in",
        brand_color: "#1769ff",
        empty_job_msg: "There are no open roles right now. Please check back soon."
      });
    };
    if (win.rec_embed_js) {
      initialise();
    } else {
      const existingScript = this.document.getElementById("xh-zoho-recruit-script");
      if (existingScript) {
        existingScript.addEventListener("load", initialise, { once: true });
        existingScript.addEventListener("error", () => this.status.set("error"), { once: true });
      } else {
        const script = this.document.createElement("script");
        script.id = "xh-zoho-recruit-script";
        script.src = "https://static.zohocdn.com/recruit/embed_careers_site/javascript/v1.1/embed_jobs.js";
        script.async = true;
        script.addEventListener("load", initialise, { once: true });
        script.addEventListener("error", () => this.status.set("error"), { once: true });
        this.document.head.appendChild(script);
      }
    }
    this.failureTimer = win.setTimeout(() => {
      if (this.status() === "loading")
        this.status.set("error");
    }, 2e4);
    this.destroyRef.onDestroy(() => {
      this.observer?.disconnect();
      if (this.failureTimer)
        win.clearTimeout(this.failureTimer);
    });
  }
  installStylesheet() {
    if (this.document.getElementById("xh-zoho-recruit-styles"))
      return;
    const stylesheet = this.document.createElement("link");
    stylesheet.id = "xh-zoho-recruit-styles";
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://static.zohocdn.com/recruit/embed_careers_site/css/v1.1/embed_jobs.css";
    this.document.head.appendChild(stylesheet);
  }
  static \u0275fac = function ZohoJobListingComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ZohoJobListingComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ZohoJobListingComponent, selectors: [["xh-zoho-job-listing"]], decls: 72, vars: 3, consts: [["aria-labelledby", "xh-jobs-title", 1, "xh-jobs"], [1, "xh-jobs-intro"], [1, "xh-jobs-eyebrow"], ["id", "xh-jobs-title"], ["aria-label", "Application highlights", 1, "xh-jobs-trust"], ["aria-hidden", "true"], [1, "xh-jobs-layout"], [1, "xh-jobs-board"], [1, "xh-jobs-board-head"], [1, "xh-zoho-widget"], ["role", "status", 1, "xh-jobs-loading"], ["role", "alert", 1, "xh-jobs-error"], [1, "embed_jobs_head", "embed_jobs_with_style_3"], [1, "embed_jobs_head2"], [1, "embed_jobs_head3"], ["id", "rec_job_listing_div"], ["aria-label", "Information for applicants", 1, "xh-jobs-aside"], [1, "xh-jobs-note"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["routerLink", "/contact", 1, "xh-jobs-help"], ["aria-hidden", "true", 1, "xh-jobs-spinner"], ["href", "https://xcellhost.zohorecruit.in/jobs/Careers", "target", "_blank", "rel", "noopener noreferrer"]], template: function ZohoJobListingComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div")(3, "span", 2);
      \u0275\u0275text(4, "Current opportunities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 3);
      \u0275\u0275text(6, "Find the role where you can make an impact.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p");
      \u0275\u0275text(8, "Explore open positions across cloud, cybersecurity, technology and customer success. Select a role below to view the details and apply securely through Zoho Recruit.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 4)(10, "span")(11, "i", 5);
      \u0275\u0275text(12, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275text(13, " Browse open roles");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "span")(15, "i", 5);
      \u0275\u0275text(16, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Review the details");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span")(19, "i", 5);
      \u0275\u0275text(20, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275text(21, " Apply securely");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(22, "div", 6)(23, "div", 7)(24, "header", 8)(25, "div")(26, "span");
      \u0275\u0275text(27, "XCELLHOST CAREERS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "h3");
      \u0275\u0275text(29, "Open positions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "b");
      \u0275\u0275element(31, "i", 5);
      \u0275\u0275text(32, " Live vacancies");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 9);
      \u0275\u0275conditionalCreate(34, ZohoJobListingComponent_Conditional_34_Template, 6, 0, "div", 10);
      \u0275\u0275conditionalCreate(35, ZohoJobListingComponent_Conditional_35_Template, 11, 0, "div", 11);
      \u0275\u0275elementStart(36, "div", 12)(37, "div", 13)(38, "div", 14);
      \u0275\u0275element(39, "div", 15);
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(40, "aside", 16)(41, "div", 17)(42, "span", 18);
      \u0275\u0275text(43, "verified_user");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div")(45, "strong");
      \u0275\u0275text(46, "Secure application");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "p");
      \u0275\u0275text(48, "Your application is submitted through XcellHost\u2019s Zoho Recruit careers portal.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(49, "div", 17)(50, "span", 18);
      \u0275\u0275text(51, "description");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "div")(53, "strong");
      \u0275\u0275text(54, "Prepare your profile");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "p");
      \u0275\u0275text(56, "Keep your latest r\xE9sum\xE9, contact details and relevant project or certification information ready.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(57, "div", 17)(58, "span", 18);
      \u0275\u0275text(59, "shield_lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "div")(61, "strong");
      \u0275\u0275text(62, "Recruitment safety");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p");
      \u0275\u0275text(64, "XcellHost will never ask you to pay a fee or share passwords, PINs or one-time codes during recruitment.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(65, "a", 19)(66, "span");
      \u0275\u0275text(67, "Need help with an application?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "strong");
      \u0275\u0275text(69, "Contact the careers team ");
      \u0275\u0275elementStart(70, "b", 5);
      \u0275\u0275text(71, "\u2192");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(33);
      \u0275\u0275attribute("aria-busy", ctx.status() === "loading");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.status() === "loading" ? 34 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.status() === "error" ? 35 : -1);
    }
  }, dependencies: [RouterLink], styles: ['/* src/app/sections/zoho-job-listing.component.css */\n.xh-jobs {\n  --jobs-blue: #1769ff;\n  --jobs-navy: #071a3d;\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 12px 32px 72px;\n  font-family: var(--body, Arial, sans-serif);\n}\n.xh-jobs * {\n  box-sizing: border-box;\n}\n.xh-jobs-intro {\n  display: grid;\n  grid-template-columns: minmax(0, 1.25fr) minmax(310px, 0.75fr);\n  gap: 56px;\n  align-items: end;\n  margin-bottom: 34px;\n}\n.xh-jobs-eyebrow {\n  display: block;\n  margin-bottom: 12px;\n  color: var(--jobs-blue);\n  font: 800 11px/1.2 var(--mono, monospace);\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.xh-jobs-intro h2 {\n  max-width: 720px;\n  margin: 0;\n  color: var(--jobs-navy);\n  font: 800 clamp(30px, 3.5vw, 48px)/1.08 var(--disp, Arial, sans-serif);\n  letter-spacing: -0.035em;\n}\n.xh-jobs-intro p {\n  max-width: 760px;\n  margin: 18px 0 0;\n  color: #5f6f86;\n  font-size: 16px;\n  line-height: 1.72;\n}\n.xh-jobs-trust {\n  display: grid;\n  gap: 9px;\n  padding: 20px;\n  border: 1px solid #dfe7f2;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 12px 34px rgba(13, 43, 91, 0.07);\n}\n.xh-jobs-trust span {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #263a59;\n  font-size: 13px;\n  font-weight: 750;\n}\n.xh-jobs-trust i {\n  display: grid;\n  width: 30px;\n  height: 30px;\n  place-items: center;\n  border-radius: 9px;\n  background: #edf4ff;\n  color: var(--jobs-blue);\n  font: 800 9px var(--mono, monospace);\n  font-style: normal;\n}\n.xh-jobs-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 310px;\n  gap: 24px;\n  align-items: start;\n}\n.xh-jobs-board {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #dbe5f2;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 22px 60px rgba(11, 42, 88, 0.1);\n}\n.xh-jobs-board-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 23px 28px;\n  border-bottom: 1px solid #e5ebf4;\n  background:\n    linear-gradient(\n      135deg,\n      #071a3d,\n      #0d438f);\n  color: #fff;\n}\n.xh-jobs-board-head span {\n  display: block;\n  margin-bottom: 5px;\n  color: #82b8ff;\n  font: 800 9px var(--mono, monospace);\n  letter-spacing: 0.14em;\n}\n.xh-jobs-board-head h3 {\n  margin: 0;\n  color: #fff;\n  font: 750 23px/1.2 var(--disp, Arial, sans-serif);\n}\n.xh-jobs-board-head b {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border: 1px solid rgba(111, 220, 162, 0.3);\n  border-radius: 999px;\n  background: rgba(39, 174, 96, 0.13);\n  color: #a6edc3;\n  font-size: 11px;\n  white-space: nowrap;\n}\n.xh-jobs-board-head b i {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #38d77b;\n  box-shadow: 0 0 9px #38d77b;\n}\n.xh-zoho-widget {\n  position: relative;\n  min-height: 460px;\n  padding: 18px 24px 26px;\n  background: #fff;\n}\n.xh-jobs-loading {\n  position: absolute;\n  z-index: 2;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background: #fff;\n  color: var(--jobs-navy);\n  text-align: center;\n}\n.xh-jobs-loading strong {\n  margin-top: 17px;\n  font-size: 15px;\n}\n.xh-jobs-loading small {\n  margin-top: 6px;\n  color: #728097;\n  font-size: 12px;\n}\n.xh-jobs-spinner {\n  width: 38px;\n  height: 38px;\n  border: 3px solid #dce8fa;\n  border-top-color: var(--jobs-blue);\n  border-radius: 50%;\n  animation: xh-jobs-spin 0.8s linear infinite;\n}\n@keyframes xh-jobs-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.xh-jobs-error {\n  max-width: 560px;\n  margin: 28px auto;\n  padding: 28px;\n  text-align: center;\n}\n.xh-jobs-error > span {\n  display: grid;\n  width: 52px;\n  height: 52px;\n  margin: 0 auto 16px;\n  place-items: center;\n  border-radius: 15px;\n  background: #edf4ff;\n  color: var(--jobs-blue);\n  font-size: 25px;\n}\n.xh-jobs-error h3 {\n  margin: 0;\n  color: var(--jobs-navy);\n  font: 750 22px var(--disp, Arial, sans-serif);\n}\n.xh-jobs-error p {\n  margin: 10px auto 20px;\n  color: #65738a;\n  font-size: 14px;\n  line-height: 1.65;\n}\n.xh-jobs-error a {\n  display: inline-flex;\n  min-height: 44px;\n  align-items: center;\n  gap: 12px;\n  padding: 0 18px;\n  border-radius: 9px;\n  background: var(--jobs-blue);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.xh-jobs-aside {\n  display: grid;\n  gap: 13px;\n}\n.xh-jobs-note {\n  display: flex;\n  gap: 14px;\n  padding: 19px;\n  border: 1px solid #e0e7f1;\n  border-radius: 16px;\n  background: #fff;\n}\n.xh-jobs-note > span {\n  display: grid;\n  width: 40px;\n  height: 40px;\n  flex: 0 0 40px;\n  place-items: center;\n  border-radius: 11px;\n  background: #eaf2ff;\n  color: var(--jobs-blue);\n  font-size: 21px;\n  font-variation-settings: "FILL" 1;\n}\n.xh-jobs-note strong {\n  display: block;\n  color: var(--jobs-navy);\n  font-size: 14px;\n}\n.xh-jobs-note p {\n  margin: 6px 0 0;\n  color: #6a788d;\n  font-size: 12px;\n  line-height: 1.55;\n}\n.xh-jobs-help {\n  display: block;\n  padding: 22px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      145deg,\n      #edf4ff,\n      #f7faff);\n  color: var(--jobs-navy);\n  text-decoration: none;\n}\n.xh-jobs-help span {\n  display: block;\n  margin-bottom: 7px;\n  color: #687991;\n  font-size: 11px;\n}\n.xh-jobs-help strong {\n  color: var(--jobs-blue);\n  font-size: 13px;\n}\n.xh-jobs-help:hover strong {\n  text-decoration: underline;\n}\n.xh-zoho-widget #rec_job_listing_div {\n  min-width: 0;\n  width: 100%;\n}\n.xh-zoho-widget #rec_job_listing_div a {\n  transition:\n    color 0.18s ease,\n    background 0.18s ease,\n    border-color 0.18s ease;\n}\n.xh-zoho-widget .embed_jobs_head,\n.xh-zoho-widget .embed_jobs_head2,\n.xh-zoho-widget .embed_jobs_head3 {\n  width: 100% !important;\n  max-width: 100% !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  box-shadow: none !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 #rec_job_listing_div {\n  align-items: flex-start;\n  gap: 16px;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_filter_cls {\n  width: 290px !important;\n  min-width: 290px;\n  flex: 0 0 290px;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group {\n  width: 100%;\n  height: auto !important;\n  max-height: none !important;\n  margin: 0 !important;\n  overflow: visible !important;\n  box-sizing: border-box;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group > div {\n  margin: 0 0 12px !important;\n  padding: 14px !important;\n  border: 1px solid #dce6f3 !important;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #f8fbff);\n  box-shadow: 0 6px 18px rgba(8, 38, 82, 0.05);\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group > div:last-child {\n  margin-bottom: 0 !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group .cw-rec-filter {\n  padding: 0 !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group .cw-facet-checkbox-label,\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group .cw-facet-checkbox + span {\n  white-space: nowrap;\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox + span {\n  min-height: 20px;\n  padding-left: 29px;\n  color: #31445f;\n  font-size: 13px;\n  line-height: 20px;\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox + span::before {\n  top: 1px;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #a9bdd8;\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: none;\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox + span:hover::before {\n  border-color: var(--jobs-blue);\n  box-shadow: 0 0 0 3px rgba(23, 105, 255, 0.1);\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox:checked + span::before {\n  border-color: var(--jobs-blue);\n  background: var(--jobs-blue);\n  box-shadow: 0 5px 12px rgba(23, 105, 255, 0.25);\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox + span::after {\n  top: 4px;\n  left: 7px;\n  width: 4px;\n  height: 8px;\n  border-width: 0 2px 2px 0;\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox:checked + span::after {\n  border-color: #fff;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_job_listing_div_jobs {\n  width: auto !important;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-what-where {\n  width: 100%;\n  margin: 0 0 18px !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info {\n  width: 100%;\n  margin: 0 0 12px !important;\n  padding: 20px !important;\n  gap: 16px;\n  border: 1px solid #dce6f3;\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgba(8, 38, 82, 0.06);\n  transition:\n    transform 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n  height: auto !important;\n  min-height: 0 !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info:hover {\n  border-color: #a9c8f5;\n  background: #fafdff;\n  box-shadow: 0 14px 32px rgba(8, 55, 120, 0.11);\n  transform: translateY(-2px);\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group,\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group > li {\n  width: 100%;\n  margin-right: 0 !important;\n  padding-right: 0 !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info .zr_fillayout_info {\n  width: auto !important;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info .zrsite_Date_Opened {\n  width: 150px !important;\n  min-width: 150px;\n  height: auto !important;\n  min-height: 0 !important;\n  align-self: flex-start;\n  flex: 0 0 150px;\n  justify-content: flex-start !important;\n  gap: 4px;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info .zrsite_Date_Opened > * {\n  margin: 0 !important;\n}\n@media (max-width: 900px) {\n  .xh-jobs-intro {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .xh-jobs-trust {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .xh-jobs-layout {\n    grid-template-columns: 1fr;\n  }\n  .xh-jobs-aside {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .xh-jobs-help {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 760px) {\n  .xh-zoho-widget .embed_jobs_with_style_3 #rec_job_listing_div {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec_filter_cls {\n    width: 100% !important;\n    min-width: 0;\n    flex-basis: auto;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec-what-where {\n    margin-left: 0 !important;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info {\n    gap: 12px;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info .zrsite_Date_Opened {\n    width: auto !important;\n    min-width: 0;\n    flex: 0 1 auto;\n  }\n}\n@media (max-width: 650px) {\n  .xh-jobs {\n    padding: 4px 16px 48px;\n  }\n  .xh-jobs-intro {\n    margin-bottom: 24px;\n  }\n  .xh-jobs-intro p {\n    font-size: 14px;\n  }\n  .xh-jobs-trust,\n  .xh-jobs-aside {\n    grid-template-columns: 1fr;\n  }\n  .xh-jobs-board {\n    border-radius: 16px;\n  }\n  .xh-jobs-board-head {\n    align-items: flex-start;\n    padding: 20px;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .xh-zoho-widget {\n    min-height: 360px;\n    padding: 10px;\n  }\n  .xh-jobs-note {\n    padding: 16px;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info {\n    flex-direction: column;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info .zrsite_Date_Opened {\n    align-items: flex-start !important;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .zrsite_Date_Opened .zrsite_Job_Type {\n    text-align: left !important;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .xh-jobs-spinner {\n    animation: none;\n  }\n  .xh-zoho-widget #rec_job_listing_div a {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=zoho-job-listing.component.css.map */\n'], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ZohoJobListingComponent, [{
    type: Component,
    args: [{ selector: "xh-zoho-job-listing", standalone: true, imports: [RouterLink], encapsulation: ViewEncapsulation.None, changeDetection: ChangeDetectionStrategy.OnPush, template: `<section class="xh-jobs" aria-labelledby="xh-jobs-title">\r
  <div class="xh-jobs-intro">\r
    <div>\r
      <span class="xh-jobs-eyebrow">Current opportunities</span>\r
      <h2 id="xh-jobs-title">Find the role where you can make an impact.</h2>\r
      <p>Explore open positions across cloud, cybersecurity, technology and customer success. Select a role below to view the details and apply securely through Zoho Recruit.</p>\r
    </div>\r
    <div class="xh-jobs-trust" aria-label="Application highlights">\r
      <span><i aria-hidden="true">01</i> Browse open roles</span>\r
      <span><i aria-hidden="true">02</i> Review the details</span>\r
      <span><i aria-hidden="true">03</i> Apply securely</span>\r
    </div>\r
  </div>\r
\r
  <div class="xh-jobs-layout">\r
    <div class="xh-jobs-board">\r
      <header class="xh-jobs-board-head">\r
        <div>\r
          <span>XCELLHOST CAREERS</span>\r
          <h3>Open positions</h3>\r
        </div>\r
        <b><i aria-hidden="true"></i> Live vacancies</b>\r
      </header>\r
\r
      <div class="xh-zoho-widget" [attr.aria-busy]="status() === 'loading'">\r
        @if (status() === 'loading') {\r
          <div class="xh-jobs-loading" role="status">\r
            <span class="xh-jobs-spinner" aria-hidden="true"></span>\r
            <strong>Loading current opportunities\u2026</strong>\r
            <small>Connecting securely to XcellHost careers</small>\r
          </div>\r
        }\r
\r
        @if (status() === 'error') {\r
          <div class="xh-jobs-error" role="alert">\r
            <span aria-hidden="true">\u2197</span>\r
            <h3>Open the careers portal</h3>\r
            <p>The job list could not load here. You can still browse every current opening directly on our secure recruitment portal.</p>\r
            <a href="https://xcellhost.zohorecruit.in/jobs/Careers" target="_blank" rel="noopener noreferrer">View open roles <b aria-hidden="true">\u2192</b></a>\r
          </div>\r
        }\r
\r
        <div class="embed_jobs_head embed_jobs_with_style_3">\r
          <div class="embed_jobs_head2">\r
            <div class="embed_jobs_head3">\r
              <div id="rec_job_listing_div"></div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <aside class="xh-jobs-aside" aria-label="Information for applicants">\r
      <div class="xh-jobs-note">\r
        <span class="material-symbols-outlined" aria-hidden="true">verified_user</span>\r
        <div><strong>Secure application</strong><p>Your application is submitted through XcellHost&rsquo;s Zoho Recruit careers portal.</p></div>\r
      </div>\r
      <div class="xh-jobs-note">\r
        <span class="material-symbols-outlined" aria-hidden="true">description</span>\r
        <div><strong>Prepare your profile</strong><p>Keep your latest r\xE9sum\xE9, contact details and relevant project or certification information ready.</p></div>\r
      </div>\r
      <div class="xh-jobs-note">\r
        <span class="material-symbols-outlined" aria-hidden="true">shield_lock</span>\r
        <div><strong>Recruitment safety</strong><p>XcellHost will never ask you to pay a fee or share passwords, PINs or one-time codes during recruitment.</p></div>\r
      </div>\r
      <a class="xh-jobs-help" routerLink="/contact">\r
        <span>Need help with an application?</span>\r
        <strong>Contact the careers team <b aria-hidden="true">\u2192</b></strong>\r
      </a>\r
    </aside>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/sections/zoho-job-listing.component.css */\n.xh-jobs {\n  --jobs-blue: #1769ff;\n  --jobs-navy: #071a3d;\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 12px 32px 72px;\n  font-family: var(--body, Arial, sans-serif);\n}\n.xh-jobs * {\n  box-sizing: border-box;\n}\n.xh-jobs-intro {\n  display: grid;\n  grid-template-columns: minmax(0, 1.25fr) minmax(310px, 0.75fr);\n  gap: 56px;\n  align-items: end;\n  margin-bottom: 34px;\n}\n.xh-jobs-eyebrow {\n  display: block;\n  margin-bottom: 12px;\n  color: var(--jobs-blue);\n  font: 800 11px/1.2 var(--mono, monospace);\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n}\n.xh-jobs-intro h2 {\n  max-width: 720px;\n  margin: 0;\n  color: var(--jobs-navy);\n  font: 800 clamp(30px, 3.5vw, 48px)/1.08 var(--disp, Arial, sans-serif);\n  letter-spacing: -0.035em;\n}\n.xh-jobs-intro p {\n  max-width: 760px;\n  margin: 18px 0 0;\n  color: #5f6f86;\n  font-size: 16px;\n  line-height: 1.72;\n}\n.xh-jobs-trust {\n  display: grid;\n  gap: 9px;\n  padding: 20px;\n  border: 1px solid #dfe7f2;\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 12px 34px rgba(13, 43, 91, 0.07);\n}\n.xh-jobs-trust span {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #263a59;\n  font-size: 13px;\n  font-weight: 750;\n}\n.xh-jobs-trust i {\n  display: grid;\n  width: 30px;\n  height: 30px;\n  place-items: center;\n  border-radius: 9px;\n  background: #edf4ff;\n  color: var(--jobs-blue);\n  font: 800 9px var(--mono, monospace);\n  font-style: normal;\n}\n.xh-jobs-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 310px;\n  gap: 24px;\n  align-items: start;\n}\n.xh-jobs-board {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #dbe5f2;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 22px 60px rgba(11, 42, 88, 0.1);\n}\n.xh-jobs-board-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 23px 28px;\n  border-bottom: 1px solid #e5ebf4;\n  background:\n    linear-gradient(\n      135deg,\n      #071a3d,\n      #0d438f);\n  color: #fff;\n}\n.xh-jobs-board-head span {\n  display: block;\n  margin-bottom: 5px;\n  color: #82b8ff;\n  font: 800 9px var(--mono, monospace);\n  letter-spacing: 0.14em;\n}\n.xh-jobs-board-head h3 {\n  margin: 0;\n  color: #fff;\n  font: 750 23px/1.2 var(--disp, Arial, sans-serif);\n}\n.xh-jobs-board-head b {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 8px 12px;\n  border: 1px solid rgba(111, 220, 162, 0.3);\n  border-radius: 999px;\n  background: rgba(39, 174, 96, 0.13);\n  color: #a6edc3;\n  font-size: 11px;\n  white-space: nowrap;\n}\n.xh-jobs-board-head b i {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #38d77b;\n  box-shadow: 0 0 9px #38d77b;\n}\n.xh-zoho-widget {\n  position: relative;\n  min-height: 460px;\n  padding: 18px 24px 26px;\n  background: #fff;\n}\n.xh-jobs-loading {\n  position: absolute;\n  z-index: 2;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  background: #fff;\n  color: var(--jobs-navy);\n  text-align: center;\n}\n.xh-jobs-loading strong {\n  margin-top: 17px;\n  font-size: 15px;\n}\n.xh-jobs-loading small {\n  margin-top: 6px;\n  color: #728097;\n  font-size: 12px;\n}\n.xh-jobs-spinner {\n  width: 38px;\n  height: 38px;\n  border: 3px solid #dce8fa;\n  border-top-color: var(--jobs-blue);\n  border-radius: 50%;\n  animation: xh-jobs-spin 0.8s linear infinite;\n}\n@keyframes xh-jobs-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.xh-jobs-error {\n  max-width: 560px;\n  margin: 28px auto;\n  padding: 28px;\n  text-align: center;\n}\n.xh-jobs-error > span {\n  display: grid;\n  width: 52px;\n  height: 52px;\n  margin: 0 auto 16px;\n  place-items: center;\n  border-radius: 15px;\n  background: #edf4ff;\n  color: var(--jobs-blue);\n  font-size: 25px;\n}\n.xh-jobs-error h3 {\n  margin: 0;\n  color: var(--jobs-navy);\n  font: 750 22px var(--disp, Arial, sans-serif);\n}\n.xh-jobs-error p {\n  margin: 10px auto 20px;\n  color: #65738a;\n  font-size: 14px;\n  line-height: 1.65;\n}\n.xh-jobs-error a {\n  display: inline-flex;\n  min-height: 44px;\n  align-items: center;\n  gap: 12px;\n  padding: 0 18px;\n  border-radius: 9px;\n  background: var(--jobs-blue);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.xh-jobs-aside {\n  display: grid;\n  gap: 13px;\n}\n.xh-jobs-note {\n  display: flex;\n  gap: 14px;\n  padding: 19px;\n  border: 1px solid #e0e7f1;\n  border-radius: 16px;\n  background: #fff;\n}\n.xh-jobs-note > span {\n  display: grid;\n  width: 40px;\n  height: 40px;\n  flex: 0 0 40px;\n  place-items: center;\n  border-radius: 11px;\n  background: #eaf2ff;\n  color: var(--jobs-blue);\n  font-size: 21px;\n  font-variation-settings: "FILL" 1;\n}\n.xh-jobs-note strong {\n  display: block;\n  color: var(--jobs-navy);\n  font-size: 14px;\n}\n.xh-jobs-note p {\n  margin: 6px 0 0;\n  color: #6a788d;\n  font-size: 12px;\n  line-height: 1.55;\n}\n.xh-jobs-help {\n  display: block;\n  padding: 22px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      145deg,\n      #edf4ff,\n      #f7faff);\n  color: var(--jobs-navy);\n  text-decoration: none;\n}\n.xh-jobs-help span {\n  display: block;\n  margin-bottom: 7px;\n  color: #687991;\n  font-size: 11px;\n}\n.xh-jobs-help strong {\n  color: var(--jobs-blue);\n  font-size: 13px;\n}\n.xh-jobs-help:hover strong {\n  text-decoration: underline;\n}\n.xh-zoho-widget #rec_job_listing_div {\n  min-width: 0;\n  width: 100%;\n}\n.xh-zoho-widget #rec_job_listing_div a {\n  transition:\n    color 0.18s ease,\n    background 0.18s ease,\n    border-color 0.18s ease;\n}\n.xh-zoho-widget .embed_jobs_head,\n.xh-zoho-widget .embed_jobs_head2,\n.xh-zoho-widget .embed_jobs_head3 {\n  width: 100% !important;\n  max-width: 100% !important;\n  margin: 0 !important;\n  padding: 0 !important;\n  box-shadow: none !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 #rec_job_listing_div {\n  align-items: flex-start;\n  gap: 16px;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_filter_cls {\n  width: 290px !important;\n  min-width: 290px;\n  flex: 0 0 290px;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group {\n  width: 100%;\n  height: auto !important;\n  max-height: none !important;\n  margin: 0 !important;\n  overflow: visible !important;\n  box-sizing: border-box;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group > div {\n  margin: 0 0 12px !important;\n  padding: 14px !important;\n  border: 1px solid #dce6f3 !important;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #f8fbff);\n  box-shadow: 0 6px 18px rgba(8, 38, 82, 0.05);\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group > div:last-child {\n  margin-bottom: 0 !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group .cw-rec-filter {\n  padding: 0 !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group .cw-facet-checkbox-label,\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_facet_group .cw-facet-checkbox + span {\n  white-space: nowrap;\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox + span {\n  min-height: 20px;\n  padding-left: 29px;\n  color: #31445f;\n  font-size: 13px;\n  line-height: 20px;\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox + span::before {\n  top: 1px;\n  width: 18px;\n  height: 18px;\n  border: 2px solid #a9bdd8;\n  border-radius: 5px;\n  background: #fff;\n  box-shadow: none;\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox + span:hover::before {\n  border-color: var(--jobs-blue);\n  box-shadow: 0 0 0 3px rgba(23, 105, 255, 0.1);\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox:checked + span::before {\n  border-color: var(--jobs-blue);\n  background: var(--jobs-blue);\n  box-shadow: 0 5px 12px rgba(23, 105, 255, 0.25);\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox + span::after {\n  top: 4px;\n  left: 7px;\n  width: 4px;\n  height: 8px;\n  border-width: 0 2px 2px 0;\n}\n.xh-zoho-widget .rec_facet_group .cw-facet-checkbox:checked + span::after {\n  border-color: #fff;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec_job_listing_div_jobs {\n  width: auto !important;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-what-where {\n  width: 100%;\n  margin: 0 0 18px !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info {\n  width: 100%;\n  margin: 0 0 12px !important;\n  padding: 20px !important;\n  gap: 16px;\n  border: 1px solid #dce6f3;\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgba(8, 38, 82, 0.06);\n  transition:\n    transform 0.2s ease,\n    border-color 0.2s ease,\n    box-shadow 0.2s ease;\n  height: auto !important;\n  min-height: 0 !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info:hover {\n  border-color: #a9c8f5;\n  background: #fafdff;\n  box-shadow: 0 14px 32px rgba(8, 55, 120, 0.11);\n  transform: translateY(-2px);\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group,\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group > li {\n  width: 100%;\n  margin-right: 0 !important;\n  padding-right: 0 !important;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info .zr_fillayout_info {\n  width: auto !important;\n  min-width: 0;\n  flex: 1 1 auto;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info .zrsite_Date_Opened {\n  width: 150px !important;\n  min-width: 150px;\n  height: auto !important;\n  min-height: 0 !important;\n  align-self: flex-start;\n  flex: 0 0 150px;\n  justify-content: flex-start !important;\n  gap: 4px;\n}\n.xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info .zrsite_Date_Opened > * {\n  margin: 0 !important;\n}\n@media (max-width: 900px) {\n  .xh-jobs-intro {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .xh-jobs-trust {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .xh-jobs-layout {\n    grid-template-columns: 1fr;\n  }\n  .xh-jobs-aside {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .xh-jobs-help {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 760px) {\n  .xh-zoho-widget .embed_jobs_with_style_3 #rec_job_listing_div {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec_filter_cls {\n    width: 100% !important;\n    min-width: 0;\n    flex-basis: auto;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec-what-where {\n    margin-left: 0 !important;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info {\n    gap: 12px;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info .zrsite_Date_Opened {\n    width: auto !important;\n    min-width: 0;\n    flex: 0 1 auto;\n  }\n}\n@media (max-width: 650px) {\n  .xh-jobs {\n    padding: 4px 16px 48px;\n  }\n  .xh-jobs-intro {\n    margin-bottom: 24px;\n  }\n  .xh-jobs-intro p {\n    font-size: 14px;\n  }\n  .xh-jobs-trust,\n  .xh-jobs-aside {\n    grid-template-columns: 1fr;\n  }\n  .xh-jobs-board {\n    border-radius: 16px;\n  }\n  .xh-jobs-board-head {\n    align-items: flex-start;\n    padding: 20px;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .xh-zoho-widget {\n    min-height: 360px;\n    padding: 10px;\n  }\n  .xh-jobs-note {\n    padding: 16px;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info {\n    flex-direction: column;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .rec-group .rec-job-info .zrsite_Date_Opened {\n    align-items: flex-start !important;\n  }\n  .xh-zoho-widget .embed_jobs_with_style_3 .zrsite_Date_Opened .zrsite_Job_Type {\n    text-align: left !important;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .xh-jobs-spinner {\n    animation: none;\n  }\n  .xh-zoho-widget #rec_job_listing_div a {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=zoho-job-listing.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ZohoJobListingComponent, { className: "ZohoJobListingComponent", filePath: "src/app/sections/zoho-job-listing.component.ts", lineNumber: 35 });
})();

// src/app/pages/company.page.ts
var _forTrack03 = ($index, $item) => $item.id;
var _forTrack13 = ($index, $item) => $item.department + $item.name;
var _forTrack2 = ($index, $item) => $item.title;
var _forTrack3 = ($index, $item) => $item.label;
var _forTrack4 = ($index, $item) => $item.name;
var _forTrack5 = ($index, $item) => $item[0];
function CompanyPage_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "section", 5)(2, "div", 6)(3, "div", 7)(4, "nav", 8)(5, "a", 9);
    \u0275\u0275text(6, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Legal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Privacy Policy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h1", 11);
    \u0275\u0275text(16, "Privacy & ");
    \u0275\u0275elementStart(17, "em");
    \u0275\u0275text(18, "Cookie Policy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "How XcellHost collects, uses, stores, shares and protects personal data when you use our website, customer portals and cloud services.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 12)(22, "a", 13)(23, "span", 14);
    \u0275\u0275text(24, "shield_lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p")(26, "b");
    \u0275\u0275text(27, "Data Protection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29, "Security at every step");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "a", 15)(31, "span", 14);
    \u0275\u0275text(32, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p")(34, "b");
    \u0275\u0275text(35, "Clear Choices");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "small");
    \u0275\u0275text(37, "You stay in control");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "a", 16)(39, "span", 14);
    \u0275\u0275text(40, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p")(42, "b");
    \u0275\u0275text(43, "Responsible Use");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "small");
    \u0275\u0275text(45, "Transparent data handling");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(46, "div", 17);
    \u0275\u0275element(47, "div", 18);
    \u0275\u0275elementStart(48, "div", 19);
    \u0275\u0275element(49, "i")(50, "i")(51, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 20);
    \u0275\u0275text(53, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 21);
    \u0275\u0275text(55, "cookie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "span", 22);
    \u0275\u0275text(57, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 23)(59, "span", 24);
    \u0275\u0275text(60, "shield_lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "b");
    \u0275\u0275text(62, "Privacy protected");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "small");
    \u0275\u0275text(64, "Clear \xB7 Secure \xB7 Responsible");
    \u0275\u0275elementEnd();
    \u0275\u0275element(65, "i")(66, "i")(67, "i");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(68, "div", 25)(69, "aside", 26)(70, "div", 27)(71, "h2");
    \u0275\u0275text(72, "Contents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "a", 28)(74, "b");
    \u0275\u0275text(75, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275text(76, "Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "a", 29)(78, "b");
    \u0275\u0275text(79, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275text(80, "Definitions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "a", 30)(82, "b");
    \u0275\u0275text(83, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, "Information we collect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "a", 31)(86, "b");
    \u0275\u0275text(87, "04");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "Lawful basis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "a", 16)(90, "b");
    \u0275\u0275text(91, "05");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, "How we use information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "a", 32)(94, "b");
    \u0275\u0275text(95, "06");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, "Sharing & disclosure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "a", 33)(98, "b");
    \u0275\u0275text(99, "07");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, "Cookies & tracking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "a", 34)(102, "b");
    \u0275\u0275text(103, "08");
    \u0275\u0275elementEnd();
    \u0275\u0275text(104, "Third-party services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "a", 35)(106, "b");
    \u0275\u0275text(107, "09");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, "Cross-border transfers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "a", 36)(110, "b");
    \u0275\u0275text(111, "10");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, "Data retention");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "a", 15)(114, "b");
    \u0275\u0275text(115, "11");
    \u0275\u0275elementEnd();
    \u0275\u0275text(116, "Your rights");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "a", 37)(118, "b");
    \u0275\u0275text(119, "12");
    \u0275\u0275elementEnd();
    \u0275\u0275text(120, "Children\u2019s data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "a", 13)(122, "b");
    \u0275\u0275text(123, "13");
    \u0275\u0275elementEnd();
    \u0275\u0275text(124, "Security measures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "a", 38)(126, "b");
    \u0275\u0275text(127, "14");
    \u0275\u0275elementEnd();
    \u0275\u0275text(128, "Breach notification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(129, "a", 39)(130, "b");
    \u0275\u0275text(131, "15");
    \u0275\u0275elementEnd();
    \u0275\u0275text(132, "Grievance redressal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "a", 40)(134, "b");
    \u0275\u0275text(135, "16");
    \u0275\u0275elementEnd();
    \u0275\u0275text(136, "External links");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(137, "a", 41)(138, "b");
    \u0275\u0275text(139, "17");
    \u0275\u0275elementEnd();
    \u0275\u0275text(140, "Policy changes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "a", 42)(142, "b");
    \u0275\u0275text(143, "18");
    \u0275\u0275elementEnd();
    \u0275\u0275text(144, "Contact us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(145, "div", 43)(146, "span", 14);
    \u0275\u0275text(147, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "small");
    \u0275\u0275text(149, "Need help?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "h2");
    \u0275\u0275text(151, "Questions about this policy?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(152, "p");
    \u0275\u0275text(153, "Our privacy team can help with data requests and policy questions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(154, "a", 44);
    \u0275\u0275text(155, "Contact support ");
    \u0275\u0275elementStart(156, "span", 10);
    \u0275\u0275text(157, "\u2192");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(158, "article", 45)(159, "section", 46)(160, "span", 47);
    \u0275\u0275text(161, "01 \xB7 Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "h2");
    \u0275\u0275text(163, "Our commitment to your privacy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "p");
    \u0275\u0275text(165, ' This Privacy Policy explains how XcellHost Cloud Services Pvt. Ltd. ("XcellHost", "we", "us", or "our"), a company incorporated under the laws of India with its registered office at 209, Laxmi Plaza, Bldg. No. 9, Laxmi Industrial Estate, Andheri (W), Mumbai - 400053, Maharashtra, India, collects, uses, stores, shares, and protects your personal data when you use our website ( ');
    \u0275\u0275elementStart(166, "a", 48);
    \u0275\u0275text(167, "www.xcellhost.cloud");
    \u0275\u0275elementEnd();
    \u0275\u0275text(168, " ), client portals, and services. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "p");
    \u0275\u0275text(170, " This policy is published in compliance with the Digital Personal Data Protection Act, 2023 (DPDPA) and the Digital Personal Data Protection Rules, 2025, the Information Technology Act, 2000, and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "p");
    \u0275\u0275text(172, " By using our website or services, you acknowledge that you have read and understood this Privacy Policy. Where we rely on your consent as the lawful basis for processing, we will obtain your explicit consent before collecting or processing your personal data. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(173, "section", 49)(174, "h2");
    \u0275\u0275text(175, "1. Definitions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "p");
    \u0275\u0275text(177, "In this Privacy Policy:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "ul")(179, "li");
    \u0275\u0275text(180, '"Personal Data" means any data about an individual who is identifiable by or in relation to such data, as defined under the DPDPA.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(181, "li");
    \u0275\u0275text(182, '"Data Fiduciary" means any person who alone or in conjunction with other persons determines the purpose and means of processing of personal data. XcellHost acts as a Data Fiduciary for data collected directly from you.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "li");
    \u0275\u0275text(184, '"Data Processor" means any person who processes personal data on behalf of a Data Fiduciary. XcellHost acts as a Data Processor when hosting your data on our infrastructure.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "li");
    \u0275\u0275text(186, '"Data Principal" means the individual to whom the personal data relates, that is, you.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(187, "li");
    \u0275\u0275text(188, '"Services" means all products and services offered by XcellHost, including cloud servers, virtual private servers (VPS), Tally on Cloud, shared hosting, reseller hosting, email hosting, domain registration, SSL certificates, cybersecurity services, backup services, and related infrastructure and managed services.');
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(189, "section", 50)(190, "h2");
    \u0275\u0275text(191, "2. Information We Collect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "p");
    \u0275\u0275text(193, "We collect the following categories of personal data:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(194, "h3");
    \u0275\u0275text(195, "a) Information You Provide Directly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(196, "ul")(197, "li")(198, "strong");
    \u0275\u0275text(199, "Account Information:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(200, " Name, email address, phone number, postal address, company name, and job title when you register for an account or purchase services.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(201, "li")(202, "strong");
    \u0275\u0275text(203, "Billing Information:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(204, " Payment method details, billing address, tax identification numbers (GST, PAN, VAT), and transaction records processed through our payment gateways.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "li")(206, "strong");
    \u0275\u0275text(207, "KYC Information:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(208, " For services delivered from Indian datacenters, as mandated by CERT-In Direction No. 20(3)/2022-CERT-In, Aadhaar details (via DigiLocker or document upload), selfie for facial verification, or government-issued photo ID and selfie for international customers where required.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "li")(210, "strong");
    \u0275\u0275text(211, "Support Communications:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(212, " Information provided in support tickets, live chat conversations, emails, and phone calls with our team.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "li")(214, "strong");
    \u0275\u0275text(215, "Survey and Feedback Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(216, " Responses to surveys, reviews, or feedback forms you voluntarily complete.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(217, "h3");
    \u0275\u0275text(218, "b) Information Collected Automatically");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(219, "ul")(220, "li")(221, "strong");
    \u0275\u0275text(222, "Log Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(223, " IP address, browser type and version, operating system, referring URL, pages visited, date and time of access, and time spent on pages.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "li")(225, "strong");
    \u0275\u0275text(226, "Device Information:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(227, " Device type, screen resolution, unique device identifiers, and language preferences.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(228, "li")(229, "strong");
    \u0275\u0275text(230, "Service Usage Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(231, " Server resource utilisation, bandwidth consumption, IP addresses allocated, service activation and cancellation dates, and technical configuration details.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "li")(233, "strong");
    \u0275\u0275text(234, "Cookies and Tracking Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(235, " Information collected through cookies and similar technologies as described in Section 6 below.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(236, "h3");
    \u0275\u0275text(237, "c) Information from Third Parties");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(238, "ul")(239, "li")(240, "strong");
    \u0275\u0275text(241, "KYC Verification Results:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(242, " Identity verification outcomes from third-party verification providers used by XcellHost.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "li")(244, "strong");
    \u0275\u0275text(245, "Fraud Prevention Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(246, " Risk scores and fraud indicators from payment processors and security services.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(247, "li")(248, "strong");
    \u0275\u0275text(249, "Cloudflare Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(250, " Geolocation data (country-level) derived from your IP address via Cloudflare's network, used for content localisation and security.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(251, "section", 51)(252, "h2");
    \u0275\u0275text(253, "3. Lawful Basis for Processing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(254, "p");
    \u0275\u0275text(255, "We process your personal data on the following lawful bases:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(256, "ul")(257, "li")(258, "strong");
    \u0275\u0275text(259, "Consent:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(260, " Where you have given explicit consent for a specific purpose, such as marketing communications or newsletter subscriptions. You may withdraw consent at any time.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(261, "li")(262, "strong");
    \u0275\u0275text(263, "Performance of Contract:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(264, " Processing necessary to fulfil our contractual obligations to you, including provisioning services, billing, technical support, and account management.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(265, "li")(266, "strong");
    \u0275\u0275text(267, "Legal Obligation:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(268, " Processing required to comply with applicable laws, including CERT-In Directions, IT Act 2000 requirements, tax laws, and DPDPA obligations.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(269, "li")(270, "strong");
    \u0275\u0275text(271, "Legitimate Interest:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(272, " Processing necessary for our legitimate business interests, such as fraud prevention, network security, service improvement, and abuse detection, provided these interests are not overridden by your rights.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(273, "section", 52)(274, "h2");
    \u0275\u0275text(275, "4. How We Use Your Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(276, "p");
    \u0275\u0275text(277, "We use the personal data we collect for the following purposes:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(278, "ul")(279, "li")(280, "strong");
    \u0275\u0275text(281, "Service Delivery:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(282, " Provisioning, managing, and maintaining the services you have purchased; allocating server resources and IP addresses; and providing technical support.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(283, "li")(284, "strong");
    \u0275\u0275text(285, "Account Administration:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(286, " Managing your account, authenticating your identity, processing payments, and sending invoices and billing notifications.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(287, "li")(288, "strong");
    \u0275\u0275text(289, "Regulatory Compliance:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(290, " Fulfilling KYC obligations under CERT-In Directions, maintaining subscriber records, responding to lawful government requests, and complying with court orders.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(291, "li")(292, "strong");
    \u0275\u0275text(293, "Security and Abuse Prevention:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(294, " Detecting and preventing fraud, unauthorised access, DDoS attacks, spam, and other abuse of our network and infrastructure.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(295, "li")(296, "strong");
    \u0275\u0275text(297, "Service Improvement:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(298, " Analysing usage patterns to improve our services, website, and customer experience.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(299, "li")(300, "strong");
    \u0275\u0275text(301, "Communication:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(302, " Sending service-related notifications such as maintenance alerts, security advisories, billing reminders, and, where you have consented, marketing communications about our products and offers.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(303, "li")(304, "strong");
    \u0275\u0275text(305, "Legal Proceedings:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(306, " Establishing, exercising, or defending legal claims.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(307, "section", 53)(308, "h2");
    \u0275\u0275text(309, "5. Data Sharing and Disclosure");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(310, "p");
    \u0275\u0275text(311, "We do not sell your personal data. We may share your personal data with the following categories of recipients:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(312, "ul")(313, "li")(314, "strong");
    \u0275\u0275text(315, "Service Providers (Data Processors):");
    \u0275\u0275elementEnd();
    \u0275\u0275text(316, " Third-party providers who process data on our behalf, as listed in Section 7 below, subject to contractual obligations to protect your data.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(317, "li")(318, "strong");
    \u0275\u0275text(319, "Payment Processors:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(320, " To process your payments securely. Payment card details are handled directly by PCI-DSS compliant payment processors and are not stored on our servers.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(321, "li")(322, "strong");
    \u0275\u0275text(323, "Government and Law Enforcement:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(324, " Where required by applicable law, court order, or lawful government request, including CERT-In, law enforcement agencies, and regulatory authorities.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(325, "li")(326, "strong");
    \u0275\u0275text(327, "Legal and Professional Advisors:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(328, " Lawyers, auditors, and other professional advisors in connection with legal proceedings or regulatory compliance.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(329, "li")(330, "strong");
    \u0275\u0275text(331, "Business Transfers:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(332, " In the event of a merger, acquisition, or sale of assets, your personal data may be transferred to the successor entity, subject to the same privacy commitments.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(333, "p");
    \u0275\u0275text(334, " In addition to the above, XcellHost may disclose your personal data to the extent required by law, in connection with any legal proceedings or prospective legal proceedings, and in order to establish, exercise, or defend its legal rights. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(335, "section", 54)(336, "h2");
    \u0275\u0275text(337, "6. Cookies and Tracking Technologies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(338, "p");
    \u0275\u0275text(339, " Our website uses cookies and similar tracking technologies. A cookie is a small text file placed on your device to help the website function, remember your preferences, and collect analytics data. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(340, "h3");
    \u0275\u0275text(341, "Types of Cookies We Use");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(342, "ul")(343, "li")(344, "strong");
    \u0275\u0275text(345, "Essential Cookies:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(346, " Required for the website to function properly, including session management, security, and load balancing served via Cloudflare.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(347, "li")(348, "strong");
    \u0275\u0275text(349, "Analytics Cookies:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(350, " Google Analytics via Google Tag Manager, used to understand how visitors interact with our website, including pages visited, time on site, and traffic sources. These cookies collect anonymised, aggregated data.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(351, "li")(352, "strong");
    \u0275\u0275text(353, "Session Recording:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(354, " Microsoft Clarity, used to record and analyse user sessions such as clicks, scrolls, and page navigation for improving user experience. Session recordings are anonymised and do not capture keystrokes in form fields.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(355, "li")(356, "strong");
    \u0275\u0275text(357, "Live Chat Cookies:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(358, " Tawk.to, used to enable our live chat widget and remember your chat history for continuity of support.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(359, "li")(360, "strong");
    \u0275\u0275text(361, "Marketing Cookies:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(362, " HubSpot, used to track interactions with our marketing content, forms, and email campaigns, and to personalise your experience where you have consented.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(363, "h3");
    \u0275\u0275text(364, "Managing Cookies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(365, "p");
    \u0275\u0275text(366, " You can control and manage cookies through your browser settings. Most browsers allow you to refuse or delete cookies. However, disabling essential cookies may prevent you from using certain features of our website. For more information on managing cookies, visit your browser's help documentation. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(367, "section", 55)(368, "h2");
    \u0275\u0275text(369, "7. Third-Party Services and Sub-Processors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(370, "p");
    \u0275\u0275text(371, "We use the following third-party services that may process your personal data:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(372, "table")(373, "thead")(374, "tr")(375, "th");
    \u0275\u0275text(376, "Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(377, "th");
    \u0275\u0275text(378, "Purpose");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(379, "th");
    \u0275\u0275text(380, "Data Processed");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(381, "tbody")(382, "tr")(383, "td");
    \u0275\u0275text(384, "Cloudflare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(385, "td");
    \u0275\u0275text(386, "CDN, DNS, DDoS protection, SSL");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(387, "td");
    \u0275\u0275text(388, "IP address, geolocation (country), request headers");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(389, "tr")(390, "td");
    \u0275\u0275text(391, "Google Analytics / GTM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(392, "td");
    \u0275\u0275text(393, "Website analytics");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(394, "td");
    \u0275\u0275text(395, "Anonymised usage data, IP address (anonymised), device info");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(396, "tr")(397, "td");
    \u0275\u0275text(398, "Microsoft Clarity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(399, "td");
    \u0275\u0275text(400, "Session recording, heatmaps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(401, "td");
    \u0275\u0275text(402, "Anonymised session data, clicks, scrolls");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(403, "tr")(404, "td");
    \u0275\u0275text(405, "Tawk.to");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(406, "td");
    \u0275\u0275text(407, "Live chat support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(408, "td");
    \u0275\u0275text(409, "Name, email, chat messages, IP address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(410, "tr")(411, "td");
    \u0275\u0275text(412, "HubSpot");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(413, "td");
    \u0275\u0275text(414, "Marketing, forms, CRM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(415, "td");
    \u0275\u0275text(416, "Name, email, company, form submissions, page views");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(417, "tr")(418, "td");
    \u0275\u0275text(419, "Identity verification providers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(420, "td");
    \u0275\u0275text(421, "KYC verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(422, "td");
    \u0275\u0275text(423, "Government ID data, selfie, identity verification results");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(424, "tr")(425, "td");
    \u0275\u0275text(426, "Payment processors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(427, "td");
    \u0275\u0275text(428, "Payment processing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(429, "td");
    \u0275\u0275text(430, "Payment details, billing address, transaction metadata");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(431, "p");
    \u0275\u0275text(432, " Each third-party service operates under its own privacy policy. We ensure that all sub-processors maintain appropriate data protection standards through contractual agreements. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(433, "section", 56)(434, "h2");
    \u0275\u0275text(435, "8. Cross-Border Data Transfers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(436, "p");
    \u0275\u0275text(437, " XcellHost operates across India and other international regions. Your personal data may be transferred to and processed in countries other than your country of residence. Such transfers are made in accordance with the DPDPA 2023 and are limited to countries not restricted by the Central Government of India. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(438, "p");
    \u0275\u0275text(439, " Where your data is transferred outside India, we ensure that appropriate safeguards are in place, including contractual data protection obligations with our sub-processors and compliance with the data protection laws of the receiving jurisdiction. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(440, "p");
    \u0275\u0275text(441, " By using our Services, you acknowledge and consent to such cross-border transfers of your personal data as described in this section. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(442, "section", 57)(443, "h2");
    \u0275\u0275text(444, "9. Data Retention");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(445, "p");
    \u0275\u0275text(446, " We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected, or as required by applicable law. Specific retention periods are as follows: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(447, "ul")(448, "li")(449, "strong");
    \u0275\u0275text(450, "Account and Billing Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(451, " For the duration of your account plus 7 years after account closure, as required by Indian tax laws.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(452, "li")(453, "strong");
    \u0275\u0275text(454, "KYC and Subscriber Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(455, " 5 years after cancellation or withdrawal of service registration, as mandated by CERT-In Direction No. 20(3)/2022-CERT-In, or longer if required by applicable law.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(456, "li")(457, "strong");
    \u0275\u0275text(458, "ICT System Logs:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(459, " Rolling 180-day period within India, as mandated by CERT-In Directions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(460, "li")(461, "strong");
    \u0275\u0275text(462, "Support Communications:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(463, " For the duration of your account plus 3 years after account closure.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(464, "li")(465, "strong");
    \u0275\u0275text(466, "Marketing Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(467, " Until you withdraw your consent or unsubscribe.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(468, "li")(469, "strong");
    \u0275\u0275text(470, "Analytics and Cookie Data:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(471, " As per the retention settings of each third-party service, typically 14-26 months.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(472, "p");
    \u0275\u0275text(473, " When personal data is no longer required, we will securely delete or anonymise it in accordance with our data destruction procedures. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(474, "section", 58)(475, "h2");
    \u0275\u0275text(476, "10. Your Rights as a Data Principal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(477, "p");
    \u0275\u0275text(478, "Under the Digital Personal Data Protection Act, 2023, you have the following rights:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(479, "ul")(480, "li")(481, "strong");
    \u0275\u0275text(482, "Right to Access:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(483, " You may request a summary of your personal data being processed by us and the processing activities undertaken.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(484, "li")(485, "strong");
    \u0275\u0275text(486, "Right to Correction:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(487, " You may request correction of inaccurate or incomplete personal data, and we will update records accordingly.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(488, "li")(489, "strong");
    \u0275\u0275text(490, "Right to Erasure:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(491, " You may request erasure of your personal data where the purpose for processing has been fulfilled and retention is no longer necessary under applicable law. Data retained under legal obligations cannot be erased until the mandatory retention period expires.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(492, "li")(493, "strong");
    \u0275\u0275text(494, "Right to Withdraw Consent:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(495, " Where processing is based on your consent, you may withdraw consent at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(496, "li")(497, "strong");
    \u0275\u0275text(498, "Right to Nominate:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(499, " You have the right to nominate another individual to exercise your rights in the event of your death or incapacity, as provided under the DPDPA.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(500, "li")(501, "strong");
    \u0275\u0275text(502, "Right to Grievance Redressal:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(503, " You have the right to file a complaint with our Grievance Officer or, if unsatisfied with our response, with the Data Protection Board of India.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(504, "p");
    \u0275\u0275text(505, " To exercise any of these rights, please contact our Grievance Officer using the details provided in Section 14 below. We will respond to your request within 30 days of receipt. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(506, "section", 59)(507, "h2");
    \u0275\u0275text(508, "11. Children's Data");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(509, "p");
    \u0275\u0275text(510, " Our Services are not directed at individuals under the age of 18. We do not knowingly collect personal data from children. Account registration requires the individual to confirm they are at least 18 years of age. If we become aware that we have collected personal data from a child without verifiable parental consent, we will take steps to delete such data promptly. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(511, "section", 60)(512, "h2");
    \u0275\u0275text(513, "12. Security Measures");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(514, "p");
    \u0275\u0275text(515, " We are committed to ensuring that your personal data is secure. We have implemented appropriate technical and organisational measures to safeguard your data, including: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(516, "ul")(517, "li");
    \u0275\u0275text(518, "Encryption of data in transit using TLS/SSL (HTTPS enforced across web properties).");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(519, "li");
    \u0275\u0275text(520, "Encryption of sensitive data at rest where applicable.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(521, "li");
    \u0275\u0275text(522, "Access controls with role-based permissions so only authorised personnel can access personal data on a need-to-know basis.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(523, "li");
    \u0275\u0275text(524, "Regular security audits and vulnerability assessments of our infrastructure.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(525, "li");
    \u0275\u0275text(526, "Network monitoring and intrusion detection systems across our facilities and managed environments.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(527, "li");
    \u0275\u0275text(528, "Physical security at our datacenter and office locations, including controlled access and monitoring where applicable.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(529, "li");
    \u0275\u0275text(530, "Employee training on data protection and information security practices.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(531, "p");
    \u0275\u0275text(532, " While we take all reasonable precautions to protect your personal data, no method of transmission over the internet or method of electronic storage is 100% secure. We cannot guarantee absolute security of your data. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(533, "section", 61)(534, "h2");
    \u0275\u0275text(535, "13. Data Breach Notification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(536, "p");
    \u0275\u0275text(537, " In the event of a personal data breach that is likely to result in a risk to your rights, we will: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(538, "ul")(539, "li");
    \u0275\u0275text(540, "Report the breach to the Indian Computer Emergency Response Team (CERT-In) within the applicable reporting timeline under law.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(541, "li");
    \u0275\u0275text(542, "Notify the Data Protection Board of India as required under the DPDPA.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(543, "li");
    \u0275\u0275text(544, "Inform affected Data Principals without undue delay, providing details of the breach, likely consequences, and measures taken or proposed to address it.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(545, "section", 62)(546, "h2");
    \u0275\u0275text(547, "14. Grievance Redressal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(548, "p");
    \u0275\u0275text(549, " In accordance with the DPDPA 2023 and the Information Technology (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, we have appointed a Grievance Officer to address your concerns regarding the processing of your personal data. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(550, "p")(551, "strong");
    \u0275\u0275text(552, "Grievance Officer");
    \u0275\u0275elementEnd();
    \u0275\u0275element(553, "br");
    \u0275\u0275text(554, " XcellHost Cloud Services Pvt. Ltd.");
    \u0275\u0275element(555, "br");
    \u0275\u0275text(556, " 209, Laxmi Plaza, Bldg. No. 9, Laxmi Industrial Estate, Andheri (W)");
    \u0275\u0275element(557, "br");
    \u0275\u0275text(558, " Mumbai - 400053, Maharashtra, India");
    \u0275\u0275element(559, "br");
    \u0275\u0275text(560, " Email: ");
    \u0275\u0275elementStart(561, "a", 63);
    \u0275\u0275text(562, "dpo@xcellhost.cloud");
    \u0275\u0275elementEnd();
    \u0275\u0275element(563, "br");
    \u0275\u0275text(564, " Phone: ");
    \u0275\u0275elementStart(565, "a", 64);
    \u0275\u0275text(566, "+91 22 6711 1555");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(567, "p");
    \u0275\u0275text(568, " We will acknowledge your grievance within 24 hours and endeavour to resolve it within 30 days of receipt. If you are not satisfied with our response, you may file a complaint with the Data Protection Board of India as established under the DPDPA. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(569, "section", 65)(570, "h2");
    \u0275\u0275text(571, "15. Links to Other Websites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(572, "p");
    \u0275\u0275text(573, " Our website may contain links to third-party websites, including our billing portal, support portal, knowledge base, and partner websites. These external sites are not governed by this Privacy Policy. We encourage you to review the privacy policies of any third-party websites you visit. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(574, "section", 66)(575, "h2");
    \u0275\u0275text(576, "16. Changes to This Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(577, "p");
    \u0275\u0275text(578, " We may update this Privacy Policy from time to time to reflect changes in our practices, services, or applicable law. When we make material changes, we will: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(579, "ul")(580, "li");
    \u0275\u0275text(581, 'Update the "Last Updated" date at the top of this page.');
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(582, "li");
    \u0275\u0275text(583, "Notify registered customers via email for material changes that affect how their personal data is processed.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(584, "li");
    \u0275\u0275text(585, "Where required by law, obtain your consent before implementing changes that affect the lawful basis for processing.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(586, "p");
    \u0275\u0275text(587, " We encourage you to review this page periodically to stay informed about how we protect your personal data. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(588, "section", 67)(589, "h2");
    \u0275\u0275text(590, "17. Contact Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(591, "p");
    \u0275\u0275text(592, " If you have any questions about this Privacy Policy, your personal data, or our data protection practices, please contact us: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(593, "p");
    \u0275\u0275text(594, " XcellHost Cloud Services Pvt. Ltd.");
    \u0275\u0275element(595, "br");
    \u0275\u0275text(596, " 209, Laxmi Plaza, Bldg. No. 9, Laxmi Industrial Estate, Andheri (W)");
    \u0275\u0275element(597, "br");
    \u0275\u0275text(598, " Mumbai - 400053, Maharashtra, India");
    \u0275\u0275element(599, "br");
    \u0275\u0275text(600, " Phone: ");
    \u0275\u0275elementStart(601, "a", 64);
    \u0275\u0275text(602, "+91 22 6711 1555");
    \u0275\u0275elementEnd();
    \u0275\u0275element(603, "br");
    \u0275\u0275text(604, " Email: ");
    \u0275\u0275elementStart(605, "a", 68);
    \u0275\u0275text(606, "support@xcellhost.cloud");
    \u0275\u0275elementEnd();
    \u0275\u0275element(607, "br");
    \u0275\u0275text(608, " Grievance Officer: ");
    \u0275\u0275elementStart(609, "a", 63);
    \u0275\u0275text(610, "dpo@xcellhost.cloud");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(611, "section", 69)(612, "div")(613, "span");
    \u0275\u0275text(614, "Need assistance?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(615, "h2", 70);
    \u0275\u0275text(616, "Questions about your privacy or personal data?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(617, "p");
    \u0275\u0275text(618, "Contact XcellHost for privacy, compliance, security and data-protection support.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(619, "a", 63);
    \u0275\u0275text(620, "Email our privacy team ");
    \u0275\u0275elementStart(621, "span", 10);
    \u0275\u0275text(622, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
}
function CompanyPage_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 1)(1, "section", 71)(2, "div", 6)(3, "div", 7)(4, "nav", 8)(5, "a", 9);
    \u0275\u0275text(6, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Legal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "Abuse Policy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h1", 72);
    \u0275\u0275text(16, "Abuse ");
    \u0275\u0275elementStart(17, "em");
    \u0275\u0275text(18, "Policy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "XcellHost is committed to maintaining a secure, ethical and lawful cloud environment for customers, partners and internet users.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 73)(22, "a", 74)(23, "span", 14);
    \u0275\u0275text(24, "monitor_heart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p")(26, "b");
    \u0275\u0275text(27, "Active Monitoring");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29, "Threat-aware operations");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "a", 75)(31, "span", 14);
    \u0275\u0275text(32, "bolt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p")(34, "b");
    \u0275\u0275text(35, "Fast Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "small");
    \u0275\u0275text(37, "Prompt incident response");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "a", 76)(39, "span", 14);
    \u0275\u0275text(40, "balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p")(42, "b");
    \u0275\u0275text(43, "Fair Enforcement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "small");
    \u0275\u0275text(45, "Consistent policy action");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(46, "div", 77)(47, "div", 78);
    \u0275\u0275element(48, "i")(49, "i")(50, "i")(51, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 79);
    \u0275\u0275text(53, "report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span", 80);
    \u0275\u0275text(55, "gpp_maybe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 81)(57, "div", 82);
    \u0275\u0275element(58, "i")(59, "i")(60, "i");
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62, "SECURITY CONSOLE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "div", 83)(64, "span", 24);
    \u0275\u0275text(65, "radar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div")(67, "b");
    \u0275\u0275text(68, "Threat monitoring");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "small");
    \u0275\u0275text(70, "Network activity protected");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(71, "div", 84);
    \u0275\u0275element(72, "i")(73, "i")(74, "i")(75, "i")(76, "i")(77, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "div", 85);
    \u0275\u0275element(79, "span");
    \u0275\u0275text(80, "Systems monitored");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(81, "div", 25)(82, "aside", 86)(83, "div", 27)(84, "h2");
    \u0275\u0275text(85, "Contents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "a", 87)(87, "b");
    \u0275\u0275text(88, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "Policy overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "a", 88)(91, "b");
    \u0275\u0275text(92, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, "Permitted use");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "a", 89)(95, "b");
    \u0275\u0275text(96, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, "Prohibited activities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "a", 74)(99, "b");
    \u0275\u0275text(100, "04");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, "Customer responsibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "a", 75)(103, "b");
    \u0275\u0275text(104, "05");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105, "Report abuse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "a", 76)(107, "b");
    \u0275\u0275text(108, "06");
    \u0275\u0275elementEnd();
    \u0275\u0275text(109, "Review & enforcement");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "a", 90)(111, "b");
    \u0275\u0275text(112, "07");
    \u0275\u0275elementEnd();
    \u0275\u0275text(113, "Contact information");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(114, "div", 43)(115, "span", 14);
    \u0275\u0275text(116, "report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(117, "small");
    \u0275\u0275text(118, "Security first");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(119, "h2");
    \u0275\u0275text(120, "Report suspected abuse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "p");
    \u0275\u0275text(122, "Include the affected service, timestamps and evidence so our team can investigate.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "a", 91);
    \u0275\u0275text(124, "Email the abuse desk ");
    \u0275\u0275elementStart(125, "span", 10);
    \u0275\u0275text(126, "\u2192");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(127, "article", 45)(128, "section", 92)(129, "span", 47);
    \u0275\u0275text(130, "01 \xB7 Policy overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "h2");
    \u0275\u0275text(132, "Abuse and unethical-use policy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(133, "p");
    \u0275\u0275text(134, "XcellHost Cloud Services Pvt. Ltd. provides cloud infrastructure, virtual servers, hosting, security and related managed services for legitimate business and personal use. Customers and authorised users must use these services lawfully, securely and without harming XcellHost, other customers, third parties or the wider internet.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "p");
    \u0275\u0275text(136, "This Abuse Policy supplements the ");
    \u0275\u0275elementStart(137, "a", 93);
    \u0275\u0275text(138, "Acceptable Use Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(139, " and ");
    \u0275\u0275elementStart(140, "a", 94);
    \u0275\u0275text(141, "Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(142, ". Where an order or product-specific condition imposes a stricter requirement, that requirement also applies.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(143, "section", 95)(144, "h2");
    \u0275\u0275text(145, "2. Permitted Use");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "p");
    \u0275\u0275text(147, "XcellHost services may be used for legitimate websites, applications, communications, workloads and business operations that comply with applicable laws, contractual obligations and third-party rights.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(148, "ul")(149, "li");
    \u0275\u0275text(150, "Maintain accurate account and service-contact information.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "li");
    \u0275\u0275text(152, "Keep operating systems, applications and credentials appropriately secured.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(153, "li");
    \u0275\u0275text(154, "Use only software, content and data you are authorised to operate or distribute.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(155, "li");
    \u0275\u0275text(156, "Respond promptly to security, abuse and remediation notices.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(157, "li");
    \u0275\u0275text(158, "Ensure users, contractors and customers with access to your service follow this policy.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(159, "section", 96)(160, "h2");
    \u0275\u0275text(161, "3. Prohibited Activities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(162, "p");
    \u0275\u0275text(163, "The following activities are prohibited when using XcellHost services, whether performed intentionally, negligently or through an inadequately secured system:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(164, "h3");
    \u0275\u0275text(165, "Messaging and identity abuse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(166, "ul")(167, "li");
    \u0275\u0275text(168, "Spam, unsolicited bulk messaging, mail bombing or deceptive email campaigns.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "li");
    \u0275\u0275text(170, "Phishing, credential harvesting, impersonation, scams or fraudulent activity.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "li");
    \u0275\u0275text(172, "Forging message headers, sender identities or routing information to conceal abuse.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(173, "h3");
    \u0275\u0275text(174, "Malware and system attacks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(175, "ul")(176, "li");
    \u0275\u0275text(177, "Distributing or controlling malware, ransomware, spyware, viruses, botnets or malicious code.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "li");
    \u0275\u0275text(179, "Launching or facilitating denial-of-service attacks, brute-force activity or unauthorised scanning.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "li");
    \u0275\u0275text(181, "Attempting unauthorised access, exploitation, interception or disruption of systems and networks.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(182, "li");
    \u0275\u0275text(183, "Operating command-and-control infrastructure or repositories primarily intended to enable attacks.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(184, "h3");
    \u0275\u0275text(185, "Illegal or harmful content");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(186, "ul")(187, "li");
    \u0275\u0275text(188, "Hosting or distributing content that violates applicable law or valid court and regulatory orders.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(189, "li");
    \u0275\u0275text(190, "Infringing copyright, trademark, privacy or other third-party rights.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(191, "li");
    \u0275\u0275text(192, "Distributing pirated content, stolen credentials or unlawfully obtained personal data.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "li");
    \u0275\u0275text(194, "Using services to threaten, harass, exploit or cause material harm to another person.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(195, "p");
    \u0275\u0275text(196, "Security research must be authorised in writing and remain within the approved scope. A claimed research purpose does not permit testing systems you do not own or have permission to assess.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(197, "section", 97)(198, "h2");
    \u0275\u0275text(199, "4. Customer Responsibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "p");
    \u0275\u0275text(201, "Account owners are responsible for content, software, configurations and activity performed through their services and credentials. This includes activity performed by authorised users and activity resulting from avoidable compromise.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "ul")(203, "li");
    \u0275\u0275text(204, "Use strong authentication and protect passwords, keys, tokens and administrative access.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(205, "li");
    \u0275\u0275text(206, "Patch supported software and remediate known vulnerabilities within a reasonable timeframe.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(207, "li");
    \u0275\u0275text(208, "Monitor services for unexpected traffic, exposed resources and signs of compromise.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "li");
    \u0275\u0275text(210, "Preserve relevant logs and evidence when an incident or complaint occurs.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(211, "li");
    \u0275\u0275text(212, "Contain compromised systems and cooperate with reasonable investigation requests.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(213, "section", 98)(214, "h2");
    \u0275\u0275text(215, "5. How to Report Abuse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(216, "p");
    \u0275\u0275text(217, "If you believe a resource hosted or managed by XcellHost is involved in spam, phishing, malware, attacks, rights infringement or another policy violation, email ");
    \u0275\u0275elementStart(218, "a", 91);
    \u0275\u0275text(219, "support@xcellhost.cloud");
    \u0275\u0275elementEnd();
    \u0275\u0275text(220, " with the subject ");
    \u0275\u0275elementStart(221, "strong");
    \u0275\u0275text(222, "Abuse Report");
    \u0275\u0275elementEnd();
    \u0275\u0275text(223, ".");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(224, "h3");
    \u0275\u0275text(225, "Include enough evidence for us to identify the activity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "ul")(227, "li");
    \u0275\u0275text(228, "The affected domain, full URL, IP address or other service identifier.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(229, "li");
    \u0275\u0275text(230, "Date and time of the activity, including the time zone.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(231, "li");
    \u0275\u0275text(232, "A clear description of what occurred and why it appears abusive.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "li");
    \u0275\u0275text(234, "Relevant email headers, server logs, screenshots or request records.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "li");
    \u0275\u0275text(236, "Your name, organisation and a working contact address for follow-up.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "li");
    \u0275\u0275text(238, "For rights complaints, evidence of ownership or authority to act for the rights holder.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(239, "p");
    \u0275\u0275text(240, "Please do not send passwords, private keys, payment-card information or unrelated personal data. Knowingly submitting false, misleading or abusive complaints is prohibited.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(241, "section", 99)(242, "h2");
    \u0275\u0275text(243, "6. Review, Suspension and Termination");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(244, "p");
    \u0275\u0275text(245, "XcellHost assesses credible reports using the information available, the apparent severity, service risk and applicable legal obligations. We may contact the customer, request remediation or additional evidence, preserve relevant records and take proportionate protective action.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(246, "ul")(247, "li");
    \u0275\u0275text(248, "Investigate reported or detected activity.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(249, "li");
    \u0275\u0275text(250, "Block traffic, isolate resources or restrict affected functionality.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(251, "li");
    \u0275\u0275text(252, "Require remediation within a specified period.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(253, "li");
    \u0275\u0275text(254, "Suspend or terminate services in serious, repeated or unresolved cases.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(255, "li");
    \u0275\u0275text(256, "Remove content where contractually and legally permitted.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "li");
    \u0275\u0275text(258, "Cooperate with lawful requests from courts, regulators and law-enforcement authorities.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(259, "p");
    \u0275\u0275text(260, "Urgent action may be taken without advance notice when reasonably necessary to address an active threat, protect infrastructure or comply with law. Where appropriate, notice and an opportunity to remediate may be provided. Refund eligibility is governed by the applicable order terms and ");
    \u0275\u0275elementStart(261, "a", 100);
    \u0275\u0275text(262, "Refund Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(263, ".");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(264, "section", 101)(265, "h2");
    \u0275\u0275text(266, "7. Abuse Contact Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(267, "p");
    \u0275\u0275text(268, "Send suspected abuse and policy violations through the following official channel:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(269, "table")(270, "tbody")(271, "tr")(272, "th");
    \u0275\u0275text(273, "Department");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(274, "td");
    \u0275\u0275text(275, "XcellHost Support & Security Desk");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(276, "tr")(277, "th");
    \u0275\u0275text(278, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(279, "td")(280, "a", 91);
    \u0275\u0275text(281, "support@xcellhost.cloud");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(282, "tr")(283, "th");
    \u0275\u0275text(284, "Subject line");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(285, "td");
    \u0275\u0275text(286, "Abuse Report");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(287, "tr")(288, "th");
    \u0275\u0275text(289, "Monitoring");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(290, "td");
    \u0275\u0275text(291, "24\xD77 for urgent infrastructure and security incidents");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(292, "p");
    \u0275\u0275text(293, "Submitting a report does not guarantee a particular outcome or permit disclosure of confidential customer information. We may acknowledge a report and request clarification, but privacy, security and legal obligations can limit the details we provide about an investigation.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(294, "section", 102)(295, "div")(296, "span");
    \u0275\u0275text(297, "Security first");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "h2", 103);
    \u0275\u0275text(299, "Report abuse or a policy violation.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(300, "p");
    \u0275\u0275text(301, "Send actionable evidence to the XcellHost Support & Security Desk for review.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(302, "a", 91);
    \u0275\u0275text(303, "Report abuse ");
    \u0275\u0275elementStart(304, "span", 10);
    \u0275\u0275text(305, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
}
function CompanyPage_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2)(1, "section", 104)(2, "div", 105)(3, "div", 106)(4, "nav", 107)(5, "a", 9);
    \u0275\u0275text(6, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 10);
    \u0275\u0275text(8, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10, "Legal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 10);
    \u0275\u0275text(12, "\u203A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14, "eKYC Verification");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "h1", 108);
    \u0275\u0275text(16, "eKYC ");
    \u0275\u0275elementStart(17, "em");
    \u0275\u0275text(18, "Verification");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20, "Secure identity verification for XcellHost cloud, VPS and infrastructure services\u2014designed to protect customers, prevent misuse and meet applicable Indian cyber-security requirements.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 109)(22, "a", 110)(23, "span", 14);
    \u0275\u0275text(24, "shield_lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p")(26, "b");
    \u0275\u0275text(27, "Secure Handling");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "small");
    \u0275\u0275text(29, "Authorised workflows only");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "a", 111)(31, "span", 14);
    \u0275\u0275text(32, "fact_check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p")(34, "b");
    \u0275\u0275text(35, "CERT-In Ready");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "small");
    \u0275\u0275text(37, "Regulatory verification");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "a", 112)(39, "span", 14);
    \u0275\u0275text(40, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p")(42, "b");
    \u0275\u0275text(43, "Human Support");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "small");
    \u0275\u0275text(45, "Help when you need it");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(46, "div", 113)(47, "div", 114);
    \u0275\u0275element(48, "i")(49, "i");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "span", 115);
    \u0275\u0275text(51, "fingerprint");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "span", 116);
    \u0275\u0275text(53, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 117)(55, "div", 118)(56, "span", 24);
    \u0275\u0275text(57, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "b");
    \u0275\u0275text(59, "VERIFIED IDENTITY");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "div", 119)(61, "div", 120)(62, "span", 24);
    \u0275\u0275text(63, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 121);
    \u0275\u0275element(65, "i")(66, "i")(67, "i");
    \u0275\u0275elementStart(68, "small");
    \u0275\u0275text(69, "CERT-In compliant");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "span", 122);
    \u0275\u0275text(71, "fingerprint");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 123)(73, "span", 24);
    \u0275\u0275text(74, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "b");
    \u0275\u0275text(76, "eKYC complete");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(77, "div", 124)(78, "aside", 125)(79, "span");
    \u0275\u0275text(80, "On this page");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "a", 126)(82, "b");
    \u0275\u0275text(83, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275text(84, "What is eKYC?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "a", 111)(86, "b");
    \u0275\u0275text(87, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, "Legal mandate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "a", 127)(90, "b");
    \u0275\u0275text(91, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275text(92, "Who needs eKYC?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "a", 128)(94, "b");
    \u0275\u0275text(95, "04");
    \u0275\u0275elementEnd();
    \u0275\u0275text(96, "Information we collect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "a", 129)(98, "b");
    \u0275\u0275text(99, "05");
    \u0275\u0275elementEnd();
    \u0275\u0275text(100, "Accepted documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(101, "a", 130)(102, "b");
    \u0275\u0275text(103, "06");
    \u0275\u0275elementEnd();
    \u0275\u0275text(104, "Verification process");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "a", 110)(106, "b");
    \u0275\u0275text(107, "07");
    \u0275\u0275elementEnd();
    \u0275\u0275text(108, "Privacy & retention");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "a", 131)(110, "b");
    \u0275\u0275text(111, "08");
    \u0275\u0275elementEnd();
    \u0275\u0275text(112, "Non-compliance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "a", 112)(114, "b");
    \u0275\u0275text(115, "09");
    \u0275\u0275elementEnd();
    \u0275\u0275text(116, "FAQs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "article", 132)(118, "section", 133)(119, "div", 134);
    \u0275\u0275text(120, "01");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 135)(122, "span", 136);
    \u0275\u0275text(123, "Identity assurance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(124, "h2");
    \u0275\u0275text(125, "What is eKYC verification?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "p");
    \u0275\u0275text(127, "Electronic Know Your Customer (eKYC) is the process XcellHost uses to confirm the identity of the person or organisation requesting certain services. It helps us activate services for genuine customers, maintain accurate subscriber records and reduce fraud or infrastructure abuse.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(128, "div", 137)(129, "span", 14);
    \u0275\u0275text(130, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "p");
    \u0275\u0275text(132, "We request only the information relevant to the customer type, service, payment method and applicable legal or vendor requirements.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(133, "section", 138)(134, "div", 134);
    \u0275\u0275text(135, "02");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(136, "div", 135)(137, "span", 136);
    \u0275\u0275text(138, "CERT-In directions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(139, "h2");
    \u0275\u0275text(140, "Why verification is required");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(141, "p");
    \u0275\u0275text(142, "CERT-In issued cyber-security directions on 28 April 2022 under section 70B(6) of the Information Technology Act, 2000. These directions require data centres, Virtual Private Server providers, cloud service providers and covered VPN service providers to validate subscribers and maintain specified customer records.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(143, "div", 139)(144, "span", 14);
    \u0275\u0275text(145, "gavel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(146, "div")(147, "b");
    \u0275\u0275text(148, "Official regulatory source");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(149, "p");
    \u0275\u0275text(150, "Read the directions, FAQs and implementation updates directly on the CERT-In website.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(151, "a", 140);
    \u0275\u0275text(152, "View CERT-In directions ");
    \u0275\u0275elementStart(153, "span", 10);
    \u0275\u0275text(154, "\u2197");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(155, "section", 141)(156, "div", 134);
    \u0275\u0275text(157, "03");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(158, "div", 135)(159, "span", 136);
    \u0275\u0275text(160, "Service coverage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "h2");
    \u0275\u0275text(162, "Who needs to complete eKYC?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(163, "p");
    \u0275\u0275text(164, "Verification may be required from the purchaser, account owner or authorised representative before activation or continued use of covered services.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "div", 142)(166, "div")(167, "span", 14);
    \u0275\u0275text(168, "dns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "b");
    \u0275\u0275text(170, "Cloud & VPS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(171, "small");
    \u0275\u0275text(172, "Virtual servers and cloud compute");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(173, "div")(174, "span", 14);
    \u0275\u0275text(175, "storage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(176, "b");
    \u0275\u0275text(177, "Data centre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(178, "small");
    \u0275\u0275text(179, "Dedicated and hosted infrastructure");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(180, "div")(181, "span", 14);
    \u0275\u0275text(182, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(183, "b");
    \u0275\u0275text(184, "Business accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "small");
    \u0275\u0275text(186, "Organisation and authorised-signatory checks");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(187, "div")(188, "span", 14);
    \u0275\u0275text(189, "manage_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(190, "b");
    \u0275\u0275text(191, "Risk review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(192, "small");
    \u0275\u0275text(193, "Orders or accounts needing additional validation");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(194, "section", 143)(195, "div", 134);
    \u0275\u0275text(196, "04");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "div", 135)(198, "span", 136);
    \u0275\u0275text(199, "Subscriber records");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(200, "h2");
    \u0275\u0275text(201, "Information we may collect");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(202, "p");
    \u0275\u0275text(203, "The precise fields depend on the service and customer. They may include:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "ul", 144)(205, "li")(206, "span", 14);
    \u0275\u0275text(207, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(208, "Validated legal name of the individual or organisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(209, "li")(210, "span", 14);
    \u0275\u0275text(211, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(212, "Address, email address and verified contact number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(213, "li")(214, "span", 14);
    \u0275\u0275text(215, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(216, "Service start date, end date and period of hire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(217, "li")(218, "span", 14);
    \u0275\u0275text(219, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(220, "IP addresses allotted to or used by the customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(221, "li")(222, "span", 14);
    \u0275\u0275text(223, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(224, "Registration time, date and the IP used to register");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(225, "li")(226, "span", 14);
    \u0275\u0275text(227, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(228, "Purpose for hiring the service and customer ownership type");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(229, "section", 145)(230, "div", 134);
    \u0275\u0275text(231, "05");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(232, "div", 135)(233, "span", 136);
    \u0275\u0275text(234, "Document checklist");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(235, "h2");
    \u0275\u0275text(236, "Documents accepted for verification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(237, "p");
    \u0275\u0275text(238, "Provide only the documents requested in your approved verification flow. Documents must be current, readable and match the account details.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(239, "div", 146)(240, "div", 147)(241, "span", 14);
    \u0275\u0275text(242, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(243, "h3");
    \u0275\u0275text(244, "Individuals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(245, "ul")(246, "li");
    \u0275\u0275text(247, "PAN card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(248, "li");
    \u0275\u0275text(249, "Aadhaar through the approved verification method");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(250, "li");
    \u0275\u0275text(251, "Passport, voter ID or driving licence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(252, "li");
    \u0275\u0275text(253, "Selfie or facial verification, when requested");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(254, "div", 148)(255, "span", 14);
    \u0275\u0275text(256, "domain");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "h3");
    \u0275\u0275text(258, "Businesses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(259, "ul")(260, "li");
    \u0275\u0275text(261, "Business PAN and GST details, where applicable");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(262, "li");
    \u0275\u0275text(263, "Certificate of incorporation or registration proof");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(264, "li");
    \u0275\u0275text(265, "Address and ownership information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(266, "li");
    \u0275\u0275text(267, "Authorised signatory ID and authority proof");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(268, "div", 149)(269, "span", 14);
    \u0275\u0275text(270, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(271, "p")(272, "b");
    \u0275\u0275text(273, "Protect your identity documents.");
    \u0275\u0275elementEnd();
    \u0275\u0275text(274, " Submit them only through the XcellHost verification channel provided for your account. Do not send documents through unapproved chat accounts or email addresses.");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(275, "section", 150)(276, "div", 134);
    \u0275\u0275text(277, "06");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(278, "div", 135)(279, "span", 136);
    \u0275\u0275text(280, "Four simple steps");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(281, "h2");
    \u0275\u0275text(282, "How the verification process works");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(283, "div", 151)(284, "div")(285, "i");
    \u0275\u0275text(286, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(287, "span", 14);
    \u0275\u0275text(288, "shopping_cart");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(289, "b");
    \u0275\u0275text(290, "Place your order");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(291, "small");
    \u0275\u0275text(292, "Choose a service and enter accurate account details.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(293, "div")(294, "i");
    \u0275\u0275text(295, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(296, "span", 14);
    \u0275\u0275text(297, "upload_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(298, "b");
    \u0275\u0275text(299, "Submit documents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(300, "small");
    \u0275\u0275text(301, "Use the secure method shared for your account.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(302, "div")(303, "i");
    \u0275\u0275text(304, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(305, "span", 14);
    \u0275\u0275text(306, "manage_accounts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(307, "b");
    \u0275\u0275text(308, "Verification review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(309, "small");
    \u0275\u0275text(310, "We check the details and request clarification if needed.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(311, "div")(312, "i");
    \u0275\u0275text(313, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(314, "span", 14);
    \u0275\u0275text(315, "rocket_launch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(316, "b");
    \u0275\u0275text(317, "Service activation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(318, "small");
    \u0275\u0275text(319, "Eligible services are released after successful checks.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(320, "section", 152)(321, "div", 134);
    \u0275\u0275text(322, "07");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(323, "div", 135)(324, "span", 136);
    \u0275\u0275text(325, "Data protection");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(326, "h2");
    \u0275\u0275text(327, "Privacy, security and retention");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(328, "p");
    \u0275\u0275text(329, "XcellHost uses eKYC data to provide and secure services, administer accounts, prevent fraud and meet legal obligations. We do not sell personal data. Access is limited to authorised personnel and service providers with a valid purpose, and information may be disclosed to government or law-enforcement authorities when required by applicable law or a lawful request.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(330, "div", 153)(331, "strong");
    \u0275\u0275text(332, "5 years");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(333, "p")(334, "b");
    \u0275\u0275text(335, "KYC and subscriber record retention");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(336, "small");
    \u0275\u0275text(337, "Maintained for five years after cancellation or withdrawal of service registration, or longer where applicable law requires it.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(338, "p", 154);
    \u0275\u0275text(339, "For full details, read our ");
    \u0275\u0275elementStart(340, "a", 155);
    \u0275\u0275text(341, "Privacy & Cookie Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(342, " and ");
    \u0275\u0275elementStart(343, "a", 94);
    \u0275\u0275text(344, "Terms of Service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(345, ".");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(346, "section", 156)(347, "div", 134);
    \u0275\u0275text(348, "08");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(349, "div", 135)(350, "span", 136);
    \u0275\u0275text(351, "Account responsibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(352, "h2");
    \u0275\u0275text(353, "If verification is incomplete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(354, "p");
    \u0275\u0275text(355, "If required details are missing, inconsistent, expired or cannot be validated, XcellHost may ask for clarification and keep activation pending. Where necessary to meet legal, security or abuse-prevention duties, we may restrict, suspend or cancel affected services.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(356, "ul", 157)(357, "li")(358, "b");
    \u0275\u0275text(359, "Pending activation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(360, "span");
    \u0275\u0275text(361, "Services can remain on hold until checks are completed.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(362, "li")(363, "b");
    \u0275\u0275text(364, "Additional review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(365, "span");
    \u0275\u0275text(366, "We may request a clearer document or proof of authority.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(367, "li")(368, "b");
    \u0275\u0275text(369, "Service restriction");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(370, "span");
    \u0275\u0275text(371, "False information or prohibited use may lead to suspension or cancellation.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(372, "p", 154);
    \u0275\u0275text(373, "Refund eligibility remains subject to the order terms and our ");
    \u0275\u0275elementStart(374, "a", 100);
    \u0275\u0275text(375, "Refund Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(376, ". Service use must follow our ");
    \u0275\u0275elementStart(377, "a", 93);
    \u0275\u0275text(378, "Acceptable Use Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(379, ".");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(380, "section", 158)(381, "div", 134);
    \u0275\u0275text(382, "09");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(383, "div", 135)(384, "span", 136);
    \u0275\u0275text(385, "Common questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(386, "h2");
    \u0275\u0275text(387, "eKYC verification FAQs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(388, "div", 159)(389, "details")(390, "summary");
    \u0275\u0275text(391, "Why does XcellHost ask for eKYC?");
    \u0275\u0275elementStart(392, "span", 14);
    \u0275\u0275text(393, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(394, "p");
    \u0275\u0275text(395, "eKYC helps validate the customer behind covered services, supports CERT-In compliance and protects XcellHost infrastructure and customers from fraud or abuse.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(396, "details")(397, "summary");
    \u0275\u0275text(398, "Is eKYC required for every XcellHost product?");
    \u0275\u0275elementStart(399, "span", 14);
    \u0275\u0275text(400, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(401, "p");
    \u0275\u0275text(402, "Not always. The requirement depends on the service, customer type, payment method, risk review and applicable law or vendor rules. We will tell you when verification is needed.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(403, "details")(404, "summary");
    \u0275\u0275text(405, "Can a company employee complete verification?");
    \u0275\u0275elementStart(406, "span", 14);
    \u0275\u0275text(407, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(408, "p");
    \u0275\u0275text(409, "Yes, if the person is authorised to act for the organisation. We may request proof of that authority and identity documents for the authorised signatory.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(410, "details")(411, "summary");
    \u0275\u0275text(412, "What happens if my document is rejected?");
    \u0275\u0275elementStart(413, "span", 14);
    \u0275\u0275text(414, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(415, "p");
    \u0275\u0275text(416, "We may ask for a clearer, current or alternative document. Your service can remain pending while the requested clarification is completed.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(417, "details")(418, "summary");
    \u0275\u0275text(419, "How long is KYC information retained?");
    \u0275\u0275elementStart(420, "span", 14);
    \u0275\u0275text(421, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(422, "p");
    \u0275\u0275text(423, "KYC and subscriber information is retained for five years after cancellation or withdrawal of the service registration, or longer if applicable law requires it.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(424, "details")(425, "summary");
    \u0275\u0275text(426, "Can I request deletion immediately after verification?");
    \u0275\u0275elementStart(427, "span", 14);
    \u0275\u0275text(428, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(429, "p");
    \u0275\u0275text(430, "You may submit a privacy request, but information subject to a mandatory legal retention period cannot be erased until that obligation expires.");
    \u0275\u0275elementEnd()()()()()()();
    \u0275\u0275elementStart(431, "section", 160)(432, "div")(433, "span");
    \u0275\u0275text(434, "Need assistance?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(435, "h2", 161);
    \u0275\u0275text(436, "Our team can help you complete eKYC.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(437, "p");
    \u0275\u0275text(438, "Contact XcellHost through an official channel for document or account-verification guidance.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(439, "a", 44);
    \u0275\u0275text(440, "Contact support ");
    \u0275\u0275elementStart(441, "span", 10);
    \u0275\u0275text(442, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
}
function CompanyPage_Conditional_0_Conditional_3_For_283_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 327);
    \u0275\u0275listener("click", function CompanyPage_Conditional_0_Conditional_3_For_283_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.activeTeamTab.set(tab_r2.id));
    })("keydown", function CompanyPage_Conditional_0_Conditional_3_For_283_Template_button_keydown_0_listener($event) {
      const \u0275$index_2652_r4 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onTeamTabKeydown($event, \u0275$index_2652_r4));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("id", "team-tab-" + tab_r2.id)("tabIndex", ctx_r2.activeTeamTab() === tab_r2.id ? 0 : -1);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeTeamTab() === tab_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r2.label);
  }
}
function CompanyPage_Conditional_0_Conditional_3_Conditional_292_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.securityTeam.length, " roles ");
  }
}
function CompanyPage_Conditional_0_Conditional_3_Conditional_293_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.visibleTeamMembers().length, " members ");
  }
}
function CompanyPage_Conditional_0_Conditional_3_For_296_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 329);
  }
  if (rf & 2) {
    const member_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", member_r5.image, \u0275\u0275sanitizeUrl)("alt", member_r5.name);
  }
}
function CompanyPage_Conditional_0_Conditional_3_For_296_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 330);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 333);
    \u0275\u0275element(2, "circle", 334)(3, "path", 335);
    \u0275\u0275elementEnd()();
  }
}
function CompanyPage_Conditional_0_Conditional_3_For_296_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(member_r5.role);
  }
}
function CompanyPage_Conditional_0_Conditional_3_For_296_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 310)(1, "div", 328);
    \u0275\u0275conditionalCreate(2, CompanyPage_Conditional_0_Conditional_3_For_296_Conditional_2_Template, 1, 2, "img", 329)(3, CompanyPage_Conditional_0_Conditional_3_For_296_Conditional_3_Template, 4, 0, "div", 330);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 331)(5, "span", 332);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CompanyPage_Conditional_0_Conditional_3_For_296_Conditional_9_Template, 2, 1, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const member_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(member_r5.image ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.teamDepartmentLabel(member_r5.department));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r5.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(member_r5.role ? 9 : -1);
  }
}
function CompanyPage_Conditional_0_Conditional_3_ForEmpty_297_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Team member details will be added soon.");
    \u0275\u0275elementEnd();
  }
}
function CompanyPage_Conditional_0_Conditional_3_For_309_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 313)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r6.body);
  }
}
function CompanyPage_Conditional_0_Conditional_3_For_323_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 318)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.label);
  }
}
function CompanyPage_Conditional_0_Conditional_3_For_339_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 326)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r8 = ctx.$implicit;
    \u0275\u0275property("href", card_r8.href, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r8.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r8.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r8.note);
  }
}
function CompanyPage_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3)(1, "section", 162);
    \u0275\u0275element(2, "div", 163);
    \u0275\u0275elementStart(3, "div", 164)(4, "div", 165)(5, "div", 166);
    \u0275\u0275text(6, "People behind the technology ");
    \u0275\u0275element(7, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 167);
    \u0275\u0275text(9, "Meet the Xcellerators");
    \u0275\u0275element(10, "br");
    \u0275\u0275text(11, "Behind ");
    \u0275\u0275elementStart(12, "em");
    \u0275\u0275text(13, "XcellHost");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "Passionate people. Deep expertise. One team committed to helping businesses stay secure, connected and ready for what\u2019s next.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 168)(17, "span")(18, "i", 14);
    \u0275\u0275text(19, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "Leadership");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span")(22, "i", 14);
    \u0275\u0275text(23, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, "Expertise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span")(26, "i", 14);
    \u0275\u0275text(27, "bar_chart");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, "Innovation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span")(30, "i", 14);
    \u0275\u0275text(31, "handshake");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, "Collaboration");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 169)(34, "a", 170);
    \u0275\u0275text(35, "Meet Our People ");
    \u0275\u0275elementStart(36, "span", 10);
    \u0275\u0275text(37, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "a", 171);
    \u0275\u0275text(39, "Discover Our Story");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 172);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 173)(42, "defs")(43, "linearGradient", 174);
    \u0275\u0275element(44, "stop", 175)(45, "stop", 176)(46, "stop", 177);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "linearGradient", 178);
    \u0275\u0275element(48, "stop", 179)(49, "stop", 180);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "linearGradient", 181);
    \u0275\u0275element(51, "stop", 182)(52, "stop", 183);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "linearGradient", 184);
    \u0275\u0275element(54, "stop", 185)(55, "stop", 186);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "linearGradient", 187);
    \u0275\u0275element(57, "stop", 188)(58, "stop", 189);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "pattern", 190);
    \u0275\u0275element(60, "path", 191);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "radialGradient", 192);
    \u0275\u0275element(62, "stop", 193)(63, "stop", 194);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "linearGradient", 195);
    \u0275\u0275element(65, "stop", 196)(66, "stop", 197);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "linearGradient", 198);
    \u0275\u0275element(68, "stop", 199)(69, "stop", 200);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(70, "ellipse", 201)(71, "rect", 202)(72, "circle", 203)(73, "circle", 204);
    \u0275\u0275elementStart(74, "g", 205);
    \u0275\u0275element(75, "circle", 206)(76, "circle", 207)(77, "circle", 208)(78, "circle", 209)(79, "path", 210);
    \u0275\u0275elementEnd();
    \u0275\u0275element(80, "ellipse", 211);
    \u0275\u0275elementStart(81, "g", 212);
    \u0275\u0275element(82, "path", 213);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "g", 214);
    \u0275\u0275element(84, "path", 215)(85, "path", 216);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "g", 217);
    \u0275\u0275element(87, "path", 218)(88, "circle", 219)(89, "path", 220)(90, "path", 221)(91, "path", 222)(92, "path", 223)(93, "path", 224);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "g", 225);
    \u0275\u0275element(95, "path", 226)(96, "path", 227)(97, "ellipse", 228)(98, "path", 229)(99, "path", 230)(100, "path", 231)(101, "path", 232)(102, "circle", 233)(103, "circle", 234);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "g", 235);
    \u0275\u0275element(105, "path", 236)(106, "circle", 237)(107, "path", 238)(108, "path", 239)(109, "path", 240)(110, "path", 241);
    \u0275\u0275elementEnd();
    \u0275\u0275element(111, "ellipse", 242)(112, "path", 243)(113, "path", 244);
    \u0275\u0275elementStart(114, "g", 245);
    \u0275\u0275element(115, "path", 246)(116, "path", 247)(117, "path", 248);
    \u0275\u0275elementEnd();
    \u0275\u0275element(118, "path", 249);
    \u0275\u0275elementStart(119, "g", 250);
    \u0275\u0275element(120, "rect", 251)(121, "path", 252);
    \u0275\u0275elementStart(122, "text", 253);
    \u0275\u0275text(123, "XcellHost");
    \u0275\u0275elementEnd();
    \u0275\u0275element(124, "path", 254)(125, "circle", 255);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "g", 256);
    \u0275\u0275element(127, "rect", 257)(128, "path", 258);
    \u0275\u0275elementStart(129, "text", 259);
    \u0275\u0275text(130, "Expertise");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "text", 260);
    \u0275\u0275text(132, "Built together");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(133, "g", 261);
    \u0275\u0275element(134, "rect", 262)(135, "path", 263);
    \u0275\u0275elementStart(136, "text", 264);
    \u0275\u0275text(137, "Innovation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(138, "text", 265);
    \u0275\u0275text(139, "Moving forward");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(140, "text", 266);
    \u0275\u0275text(141, "One team. Connected by purpose.");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(142, "div", 267)(143, "div", 268)(144, "span")(145, "b");
    \u0275\u0275text(146, "ISO 27001");
    \u0275\u0275elementEnd();
    \u0275\u0275text(147, " & ");
    \u0275\u0275elementStart(148, "b");
    \u0275\u0275text(149, "20000-1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(150, " certified");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(151, "span");
    \u0275\u0275text(152, "Microsoft ");
    \u0275\u0275elementStart(153, "b");
    \u0275\u0275text(154, "Gold Partner");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(155, "span")(156, "b");
    \u0275\u0275text(157, "10,000+");
    \u0275\u0275elementEnd();
    \u0275\u0275text(158, " customers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(159, "span")(160, "b");
    \u0275\u0275text(161, "Since 1999");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(162, "span")(163, "b");
    \u0275\u0275text(164, "99.95% uptime SLA");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(165, "span")(166, "b");
    \u0275\u0275text(167, "24x7");
    \u0275\u0275elementEnd();
    \u0275\u0275text(168, " NOC + SOC");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(169, "section", 269);
    \u0275\u0275element(170, "div", 270)(171, "div", 271);
    \u0275\u0275elementStart(172, "div", 272)(173, "div", 273)(174, "div", 274);
    \u0275\u0275element(175, "div", 275)(176, "div", 276)(177, "img", 277);
    \u0275\u0275elementStart(178, "div", 278);
    \u0275\u0275text(179, "People ");
    \u0275\u0275elementStart(180, "b");
    \u0275\u0275text(181, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275text(182, " Technology ");
    \u0275\u0275elementStart(183, "b");
    \u0275\u0275text(184, "|");
    \u0275\u0275elementEnd();
    \u0275\u0275text(185, " A Better Tomorrow");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(186, "a", 279);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(187, "svg", 280);
    \u0275\u0275element(188, "path", 281);
    \u0275\u0275elementEnd();
    \u0275\u0275text(189, " Connect on LinkedIn ");
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(190, "div", 282)(191, "span", 283);
    \u0275\u0275text(192, "Leadership & Innovation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(193, "h1");
    \u0275\u0275text(194, "Dr. Samir Jhaveri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(195, "h2");
    \u0275\u0275text(196, "Managing Director");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(197, "p", 284);
    \u0275\u0275text(198, "XcellHost Cloud Services Pvt Ltd");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(199, "div", 285)(200, "span")(201, "i", 10);
    \u0275\u0275text(202, "C");
    \u0275\u0275elementEnd();
    \u0275\u0275text(203, "Cloud");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(204, "span")(205, "i", 10);
    \u0275\u0275text(206, "S");
    \u0275\u0275elementEnd();
    \u0275\u0275text(207, "Cybersecurity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(208, "span")(209, "i", 10);
    \u0275\u0275text(210, "AI");
    \u0275\u0275elementEnd();
    \u0275\u0275text(211, "Artificial Intelligence");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(212, "span")(213, "i", 10);
    \u0275\u0275text(214, "M");
    \u0275\u0275elementEnd();
    \u0275\u0275text(215, "Digital Marketing");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(216, "p", 286);
    \u0275\u0275text(217, "A technology leader shaping the future of Cloud, Cybersecurity and AI.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(218, "p", 287);
    \u0275\u0275text(219, "With over two decades of experience in the cloud industry, Dr. Samir Jhaveri has been at the forefront of digital transformation since 1999. As the Managing Director of XcellHost Cloud Services, he has empowered over 10,000 SMBs and enterprises with cloud, security, digital marketing and AI solutions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(220, "p", 288);
    \u0275\u0275text(221, "His leadership and vision continue to drive innovation and excellence in the industry. Let\xE2\u20AC\u2122s transform together!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(222, "div", 289)(223, "article")(224, "strong");
    \u0275\u0275text(225, "30+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(226, "span");
    \u0275\u0275text(227, "Years of");
    \u0275\u0275element(228, "br");
    \u0275\u0275text(229, "Experience");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(230, "article")(231, "strong");
    \u0275\u0275text(232, "10,000+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(233, "span");
    \u0275\u0275text(234, "Businesses");
    \u0275\u0275element(235, "br");
    \u0275\u0275text(236, "Empowered");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(237, "article")(238, "strong");
    \u0275\u0275text(239, "1999");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(240, "span");
    \u0275\u0275text(241, "Industry");
    \u0275\u0275element(242, "br");
    \u0275\u0275text(243, "Journey");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(244, "article")(245, "strong");
    \u0275\u0275text(246, "AI");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(247, "span");
    \u0275\u0275text(248, "Honorary");
    \u0275\u0275element(249, "br");
    \u0275\u0275text(250, "Doctorate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(251, "a", 290);
    \u0275\u0275text(252, "View certificate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(253, "section", 291)(254, "div", 292)(255, "div", 293);
    \u0275\u0275element(256, "img", 277);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(257, "div", 294)(258, "h2");
    \u0275\u0275text(259, "Dr. Samir Jhaveri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(260, "p", 295);
    \u0275\u0275text(261, " Managing Director XcellHost Cloud Services Pvt Ltd Cloud,");
    \u0275\u0275element(262, "br");
    \u0275\u0275text(263, " Cybersecurity, AI, Digital Marketing Expert");
    \u0275\u0275element(264, "br");
    \u0275\u0275text(265, " College Dropout like Bill Gates");
    \u0275\u0275element(266, "br");
    \u0275\u0275text(267, " Honorory Doctorate (Honoris Causa) in Artificial Intelligence ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(268, "p", 296);
    \u0275\u0275text(269, " College dropout like Bill Gates. With over two decades of experience in the cloud industry, Samir Jhaveri has been at the forefront of digital transformation since 1999. As the Managing Director of XcellHost Cloud Services, he has empowered over 10,000 SMBs and enterprises with cutting-edge cloud, security, digital marketing, and AI solutions.His leadership and vision continue to drive innovation and excellence in the industry. Let\u2019s transform together! ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(270, "section", 297)(271, "div", 268)(272, "header", 298)(273, "span", 299);
    \u0275\u0275text(274, "The people behind XcellHost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(275, "h2", 300);
    \u0275\u0275text(276, "Meet our ");
    \u0275\u0275elementStart(277, "em");
    \u0275\u0275text(278, "Xcellerators Human Touch + AI Agents.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(279, "p");
    \u0275\u0275text(280, "Meet the people bringing experience, ideas and care to your cloud journey.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(281, "div", 301);
    \u0275\u0275repeaterCreate(282, CompanyPage_Conditional_0_Conditional_3_For_283_Template, 2, 4, "button", 302, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(284, "div", 303)(285, "div", 304)(286, "span", 305)(287, "span", 306);
    \u0275\u0275text(288);
    \u0275\u0275elementEnd();
    \u0275\u0275text(289);
    \u0275\u0275elementEnd();
    \u0275\u0275element(290, "span", 307);
    \u0275\u0275elementStart(291, "span", 308);
    \u0275\u0275conditionalCreate(292, CompanyPage_Conditional_0_Conditional_3_Conditional_292_Template, 1, 1)(293, CompanyPage_Conditional_0_Conditional_3_Conditional_293_Template, 1, 1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(294, "div", 309);
    \u0275\u0275repeaterCreate(295, CompanyPage_Conditional_0_Conditional_3_For_296_Template, 10, 4, "article", 310, _forTrack13, false, CompanyPage_Conditional_0_Conditional_3_ForEmpty_297_Template, 2, 0, "p");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275element(298, "xh-why-xcellhost-reasons")(299, "xh-team-structure");
    \u0275\u0275elementStart(300, "section", 311)(301, "div", 268)(302, "header", 298)(303, "span");
    \u0275\u0275text(304, "The Core Values We Live By");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(305, "h2");
    \u0275\u0275text(306, "What shapes the way we work.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(307, "div", 312);
    \u0275\u0275repeaterCreate(308, CompanyPage_Conditional_0_Conditional_3_For_309_Template, 5, 2, "article", 313, _forTrack2);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(310, "section", 314)(311, "div", 315)(312, "div", 316)(313, "span", 299);
    \u0275\u0275text(314, "Our commitment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(315, "h2");
    \u0275\u0275text(316, "The best effort for every customer.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(317, "p");
    \u0275\u0275text(318, " We aim to be the easiest team to work with when the work is simple and the most reliable team when the work is urgent. Customers should always know who owns the next step. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(319, "p");
    \u0275\u0275text(320, " That means careful planning, honest expectations and support that does not disappear once the project is live. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(321, "div", 317);
    \u0275\u0275repeaterCreate(322, CompanyPage_Conditional_0_Conditional_3_For_323_Template, 5, 2, "article", 318, _forTrack3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(324, "section", 319)(325, "div", 320)(326, "div", 321)(327, "span", 299);
    \u0275\u0275text(328, "Don't hesitate to contact us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(329, "h2");
    \u0275\u0275text(330, "Grow your business with a team that stays with you.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(331, "p");
    \u0275\u0275text(332, " If you want a quick answer, a formal quote or help choosing the right service, reach out and we will route you to the right person. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(333, "a", 322);
    \u0275\u0275text(334, "Contact Us");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(335, "a", 323);
    \u0275\u0275element(336, "img", 324);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(337, "div", 325);
    \u0275\u0275repeaterCreate(338, CompanyPage_Conditional_0_Conditional_3_For_339_Template, 7, 4, "a", 326, _forTrack3);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(282);
    \u0275\u0275repeater(ctx_r2.teamTabs);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-labelledby", "team-tab-" + ctx_r2.activeTeamTab());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.teamDepartmentIcon(ctx_r2.activeTeamTab()));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.teamDepartmentLabel(ctx_r2.activeTeamTab()));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.activeTeamTab() === "security" ? 292 : 293);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("team-portrait-grid-security", ctx_r2.activeTeamTab() === "security");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.visibleTeamMembers());
    \u0275\u0275advance(13);
    \u0275\u0275repeater(ctx_r2.values);
    \u0275\u0275advance(14);
    \u0275\u0275repeater(ctx_r2.commitmentStats);
    \u0275\u0275advance(16);
    \u0275\u0275repeater(ctx_r2.contactCards);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 336);
    \u0275\u0275element(1, "span", 342)(2, "span", 343)(3, "span", 344)(4, "span", 345)(5, "span", 346)(6, "canvas", 347);
    \u0275\u0275elementStart(7, "div", 348)(8, "div", 349)(9, "div", 350);
    \u0275\u0275text(10, "Home \u203A Company \u203A Partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 351);
    \u0275\u0275text(12, "XcellHost partner ecosystem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h1", 352);
    \u0275\u0275text(14, "Partnership Overview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Build recurring revenue with 300+ cloud, security and AI services your customers already need.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p", 353);
    \u0275\u0275text(18, "Right now for partners \u2192 ");
    \u0275\u0275elementStart(19, "strong");
    \u0275\u0275text(20, "free onboarding \xB7 recurring commissions");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 354)(22, "a", 355);
    \u0275\u0275text(23, "Become a partner ");
    \u0275\u0275elementStart(24, "span");
    \u0275\u0275text(25, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "a", 356);
    \u0275\u0275text(27, "Explore the programme");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 357)(29, "div")(30, "b");
    \u0275\u0275text(31, "300+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "products & services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "b");
    \u0275\u0275text(36, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "partnership types");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "div")(40, "b");
    \u0275\u0275text(41, "24\xD77");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "span");
    \u0275\u0275text(43, "technical support");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "div")(45, "b");
    \u0275\u0275text(46, "1999");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "cloud expertise since");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 358);
    \u0275\u0275element(50, "i", 10);
    \u0275\u0275text(51, "Partner portal live \xB7 wholesale pricing \xB7 white-label ready");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 359)(53, "div", 360)(54, "span", 361)(55, "span");
    \u0275\u0275text(56, "XcellHost Cloud Partner Program");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span", 362);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(58, "svg", 363);
    \u0275\u0275element(59, "path", 364)(60, "path", 365);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "svg", 363);
    \u0275\u0275element(62, "path", 366)(63, "path", 367)(64, "path", 368);
    \u0275\u0275elementEnd()()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(65, "span", 369)(66, "i");
    \u0275\u0275text(67, "\u2726");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "b");
    \u0275\u0275text(69, "300+ services");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "span", 370)(71, "i");
    \u0275\u0275text(72, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "b");
    \u0275\u0275text(74, "Recurring revenue");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "span", 371)(76, "i");
    \u0275\u0275text(77, "24");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "b");
    \u0275\u0275text(79, "24\xD77 support");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(80, "span", 372)(81, "img", 373);
    \u0275\u0275elementEnd()()()();
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 337);
    \u0275\u0275element(1, "canvas", 374)(2, "span", 375)(3, "span", 376)(4, "span", 377);
    \u0275\u0275elementStart(5, "div", 378)(6, "div", 379)(7, "div", 350);
    \u0275\u0275text(8, "HOME \xA0\u203A\xA0 COMPANY \xA0\u203A\xA0 CERTIFICATIONS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 380);
    \u0275\u0275text(10, "Verified standards & credentials");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h1", 381);
    \u0275\u0275text(12, "Certifications that prove our ");
    \u0275\u0275elementStart(13, "em");
    \u0275\u0275text(14, "commitment.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16, "Independent credentials that reflect disciplined operations, information security and technical capability.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 382)(18, "span");
    \u0275\u0275text(19, "\u2713 ISO-certified operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span");
    \u0275\u0275text(21, "\u2713 Independently verified");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 383)(23, "a", 384)(24, "span");
    \u0275\u0275text(25, "\u2193");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, " View Certificates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a", 385)(28, "span");
    \u0275\u0275text(29, "\u25A3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Certification Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "a", 386);
    \u0275\u0275text(32, "Compliance Enquiry");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 387)(34, "span", 388);
    \u0275\u0275text(35, "\u2726 Ask AI About XcellHost Certifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div")(37, "a", 389);
    \u0275\u0275element(38, "img", 390);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "a", 391);
    \u0275\u0275element(40, "img", 392);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "a", 393);
    \u0275\u0275element(42, "img", 394);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "a", 395);
    \u0275\u0275element(44, "img", 396);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(45, "div", 397);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 398)(47, "defs")(48, "linearGradient", 399);
    \u0275\u0275element(49, "stop", 400)(50, "stop", 401);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "linearGradient", 402);
    \u0275\u0275element(52, "stop", 403)(53, "stop", 404)(54, "stop", 405);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "linearGradient", 406);
    \u0275\u0275element(56, "stop", 407)(57, "stop", 408)(58, "stop", 409);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "radialGradient", 410);
    \u0275\u0275element(60, "stop", 411)(61, "stop", 412);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(62, "ellipse", 413)(63, "circle", 414)(64, "circle", 415);
    \u0275\u0275elementStart(65, "g", 416);
    \u0275\u0275element(66, "rect", 417);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "g", 418);
    \u0275\u0275element(68, "rect", 419)(69, "rect", 420);
    \u0275\u0275elementStart(70, "text", 421);
    \u0275\u0275text(71, "XCELLHOST");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "text", 422);
    \u0275\u0275text(73, "STANDARDS & ASSURANCE");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "path", 423)(75, "path", 424)(76, "path", 425);
    \u0275\u0275elementStart(77, "text", 426);
    \u0275\u0275text(78, "COMMITMENT TO QUALITY");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "g", 427);
    \u0275\u0275element(80, "path", 428)(81, "circle", 429)(82, "circle", 430)(83, "path", 431);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(84, "g", 432);
    \u0275\u0275element(85, "path", 433)(86, "circle", 434)(87, "path", 435);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "g", 436);
    \u0275\u0275element(89, "rect", 437)(90, "circle", 438);
    \u0275\u0275elementStart(91, "text", 439);
    \u0275\u0275text(92, "ISO 27001");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "text", 440);
    \u0275\u0275text(94, "Information security");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "g", 441);
    \u0275\u0275element(96, "rect", 442)(97, "circle", 443);
    \u0275\u0275elementStart(98, "text", 444);
    \u0275\u0275text(99, "ISO 20000-1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "text", 445);
    \u0275\u0275text(101, "Service management");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "g", 446);
    \u0275\u0275element(103, "path", 447)(104, "circle", 448)(105, "circle", 449);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(106, "text", 450);
    \u0275\u0275text(107, "Security. Service quality. Technical capability.");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(37);
    \u0275\u0275property("href", ctx_r2.companyAskAiHref("chatgpt"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.companyAskAiHref("perplexity"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.companyAskAiHref("claude"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.companyAskAiHref("google"), \u0275\u0275sanitizeUrl);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 338);
    \u0275\u0275element(1, "span", 451)(2, "span", 452);
    \u0275\u0275elementStart(3, "div", 453)(4, "div", 454)(5, "div", 350);
    \u0275\u0275text(6, "HOME \xA0\u203A\xA0 COMPANY \xA0\u203A\xA0 AWARDS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 455);
    \u0275\u0275text(8, "XCELLHOST RECOGNITION");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 456);
    \u0275\u0275text(10, "Recognised for excellence.");
    \u0275\u0275element(11, "br");
    \u0275\u0275elementStart(12, "em");
    \u0275\u0275text(13, "Driven by trust.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "p");
    \u0275\u0275text(15, "Awards and recognition from XcellHost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong", 457);
    \u0275\u0275text(17, "Celebrating excellence. Inspiring what\u2019s next.");
    \u0275\u0275element(18, "i", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 458)(20, "a", 459);
    \u0275\u0275text(21, "\u2193 Awards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "a", 460);
    \u0275\u0275text(23, "\u25A3 Certifications");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "a", 461);
    \u0275\u0275text(25, "Recognition Tour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "a", 462);
    \u0275\u0275text(27, "Company Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "a", 463);
    \u0275\u0275text(29, "Let's Talk");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 464)(31, "span");
    \u0275\u0275text(32, "\u2726 Ask AI About XcellHost Awards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div")(34, "a", 465);
    \u0275\u0275element(35, "img", 390);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "a", 466);
    \u0275\u0275element(37, "img", 467);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "a", 468);
    \u0275\u0275element(39, "img", 394);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 469);
    \u0275\u0275element(41, "img", 396);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "a", 470);
    \u0275\u0275element(43, "img", 392);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(44, "div", 471);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(45, "svg", 472)(46, "defs")(47, "linearGradient", 473);
    \u0275\u0275element(48, "stop", 474)(49, "stop", 475)(50, "stop", 476)(51, "stop", 477);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "linearGradient", 478);
    \u0275\u0275element(53, "stop", 479)(54, "stop", 480)(55, "stop", 481)(56, "stop", 482)(57, "stop", 483);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "linearGradient", 484);
    \u0275\u0275element(59, "stop", 485)(60, "stop", 486)(61, "stop", 487);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "radialGradient", 488);
    \u0275\u0275element(63, "stop", 489)(64, "stop", 490);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "clipPath", 491);
    \u0275\u0275element(66, "path", 492);
    \u0275\u0275elementEnd();
    \u0275\u0275element(67, "path", 493);
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "ellipse", 494)(69, "circle", 495)(70, "circle", 496)(71, "ellipse", 497);
    \u0275\u0275elementStart(72, "g", 498)(73, "g", 499);
    \u0275\u0275element(74, "path", 500);
    \u0275\u0275elementStart(75, "g", 501);
    \u0275\u0275element(76, "use", 502)(77, "use", 503)(78, "use", 504)(79, "use", 505)(80, "use", 506);
    \u0275\u0275elementStart(81, "g", 507);
    \u0275\u0275element(82, "use", 502)(83, "use", 503)(84, "use", 504)(85, "use", 505)(86, "use", 506);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(87, "path", 508)(88, "path", 509)(89, "path", 510)(90, "path", 511)(91, "path", 512);
    \u0275\u0275elementStart(92, "g", 513);
    \u0275\u0275element(93, "path", 514);
    \u0275\u0275elementEnd();
    \u0275\u0275element(94, "circle", 515)(95, "path", 516)(96, "path", 517)(97, "path", 518)(98, "path", 519);
    \u0275\u0275elementStart(99, "text", 520);
    \u0275\u0275text(100, "XCELLHOST");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "g", 521);
    \u0275\u0275element(102, "rect", 522);
    \u0275\u0275elementStart(103, "text", 523);
    \u0275\u0275text(104, "EXCELLENCE");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(105, "g", 524);
    \u0275\u0275element(106, "rect", 525);
    \u0275\u0275elementStart(107, "text", 526);
    \u0275\u0275text(108, "INNOVATION");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(109, "g", 527);
    \u0275\u0275element(110, "path", 528)(111, "circle", 529)(112, "circle", 530);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(113, "text", 531);
    \u0275\u0275text(114, "Celebrating the milestones that move us forward.");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(34);
    \u0275\u0275property("href", ctx_r2.companyAskAiHref("chatgpt"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", ctx_r2.companyAskAiHref("claude"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.companyAskAiHref("google"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.companyAskAiHref("perplexity"), \u0275\u0275sanitizeUrl);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 339);
    \u0275\u0275element(1, "span", 532);
    \u0275\u0275elementStart(2, "div", 533)(3, "div", 534)(4, "p", 535);
    \u0275\u0275text(5, "Careers at XcellHost ");
    \u0275\u0275element(6, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "h1", 536);
    \u0275\u0275text(8, "Find Your Next");
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10, "Opportunity at ");
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "XcellHost");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "p", 537);
    \u0275\u0275text(14, "Explore open roles in cloud, cybersecurity, technology and customer success\u2014and build work that makes a real impact.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 538)(16, "a", 539);
    \u0275\u0275text(17, "View Open Positions ");
    \u0275\u0275elementStart(18, "span", 10);
    \u0275\u0275text(19, "\u2193");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "a", 540);
    \u0275\u0275text(21, "Life at XcellHost ");
    \u0275\u0275elementStart(22, "span", 10);
    \u0275\u0275text(23, "\u2192");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(24, "div", 541);
    \u0275\u0275element(25, "img", 542);
    \u0275\u0275elementEnd()()();
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 543);
    \u0275\u0275element(1, "span", 532);
    \u0275\u0275elementStart(2, "div", 533)(3, "div", 534)(4, "h1", 544);
    \u0275\u0275text(5, "Build Your Career");
    \u0275\u0275element(6, "br");
    \u0275\u0275text(7, "with ");
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "XcellHost");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "p", 535);
    \u0275\u0275text(11, "Careers at XcellHost ");
    \u0275\u0275element(12, "span", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 537);
    \u0275\u0275text(14, "Join a team that\u2019s shaping a safer, smarter and more connected tomorrow.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "ul", 545)(16, "li")(17, "span", 14);
    \u0275\u0275text(18, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "Great");
    \u0275\u0275element(21, "br");
    \u0275\u0275text(22, "People");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "li")(24, "span", 14);
    \u0275\u0275text(25, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span");
    \u0275\u0275text(27, "Continuous");
    \u0275\u0275element(28, "br");
    \u0275\u0275text(29, "Learning");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "li")(31, "span", 14);
    \u0275\u0275text(32, "monitoring");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "span");
    \u0275\u0275text(34, "Meaningful");
    \u0275\u0275element(35, "br");
    \u0275\u0275text(36, "Impact");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "li")(38, "span", 14);
    \u0275\u0275text(39, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "A Brighter");
    \u0275\u0275element(42, "br");
    \u0275\u0275text(43, "Tomorrow");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "div", 546)(45, "a", 547);
    \u0275\u0275text(46, "Explore Career Opportunities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "a", 548);
    \u0275\u0275text(48, "Life at XcellHost");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 549);
    \u0275\u0275element(50, "img", 550);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "section", 551)(52, "div", 552)(53, "div", 553)(54, "span", 14);
    \u0275\u0275text(55, "business_center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div")(57, "strong");
    \u0275\u0275text(58, "05+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Years In Business");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 553)(62, "span", 14);
    \u0275\u0275text(63, "public");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "div")(65, "strong");
    \u0275\u0275text(66, "38+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68, "Countries Served Worldwide");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 553)(70, "span", 14);
    \u0275\u0275text(71, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "div")(73, "strong");
    \u0275\u0275text(74, "350+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "span");
    \u0275\u0275text(76, "Clients Secured Worldwide");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(77, "div", 553)(78, "span", 14);
    \u0275\u0275text(79, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div")(81, "strong");
    \u0275\u0275text(82, "2500+");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "span");
    \u0275\u0275text(84, "Penetration Reports Delivered");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(85, "section", 554)(86, "div", 555)(87, "div", 556)(88, "span");
    \u0275\u0275text(89, "Why join XcellHost?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "h2", 557);
    \u0275\u0275text(91, "More Than a Job, ");
    \u0275\u0275elementStart(92, "em");
    \u0275\u0275text(93, "It\u2019s a Mission");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "p");
    \u0275\u0275text(95, "We empower our people to learn, grow and make an impact in the world of cloud and cybersecurity.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "a", 558);
    \u0275\u0275text(97, "Learn More About Us");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "div", 559)(99, "article", 560)(100, "i", 14);
    \u0275\u0275text(101, "rocket_launch");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "h3");
    \u0275\u0275text(103, "Fast Growth Opportunities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(104, "p");
    \u0275\u0275text(105, "We are scaling rapidly, giving you exposure to leadership and growth.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(106, "article", 560)(107, "i", 14);
    \u0275\u0275text(108, "shield");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(109, "h3");
    \u0275\u0275text(110, "Real-World Challenges");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "p");
    \u0275\u0275text(112, "Solve meaningful cloud and security problems for businesses worldwide.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(113, "article", 560)(114, "i", 14);
    \u0275\u0275text(115, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "h3");
    \u0275\u0275text(117, "Continuous Learning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(118, "p");
    \u0275\u0275text(119, "Mentorship, training and certifications help fuel your growth.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(120, "article", 560)(121, "i", 14);
    \u0275\u0275text(122, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(123, "h3");
    \u0275\u0275text(124, "Collaborative Culture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "p");
    \u0275\u0275text(126, "We believe in teamwork, transparency and mutual respect.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "article", 560)(128, "i", 14);
    \u0275\u0275text(129, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "h3");
    \u0275\u0275text(131, "Innovation Driven");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "p");
    \u0275\u0275text(133, "Work with evolving cloud, cybersecurity and AI technologies.");
    \u0275\u0275elementEnd()()()()();
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_5_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 561)(1, "div", 563)(2, "div", 564)(3, "nav", 565)(4, "a", 9);
    \u0275\u0275text(5, "Home");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span");
    \u0275\u0275text(9, "Vendor Partners");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span", 566);
    \u0275\u0275text(11, "CONNECTED BY EXPERTISE");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "h1", 567);
    \u0275\u0275text(13, "Leading technology.");
    \u0275\u0275element(14, "br");
    \u0275\u0275elementStart(15, "em");
    \u0275\u0275text(16, "Stronger together.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18, "Global technology leaders. One trusted team. Explore the partners behind our cloud, security, productivity and AI solutions.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "a", 568);
    \u0275\u0275text(20, "Explore our partners ");
    \u0275\u0275elementStart(21, "span", 10);
    \u0275\u0275text(22, "\u2192");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 569)(24, "div")(25, "b");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "Vendor listings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div")(30, "b");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span");
    \u0275\u0275text(33, "Technology categories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div")(35, "b");
    \u0275\u0275text(36, "Since 1999");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "span");
    \u0275\u0275text(38, "Building connections");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(39, "div", 570);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(40, "svg", 571);
    \u0275\u0275element(41, "circle", 572)(42, "circle", 573);
    \u0275\u0275elementStart(43, "g", 574);
    \u0275\u0275element(44, "path", 575);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(45, "div", 576);
    \u0275\u0275element(46, "img", 577);
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48, "YOUR TECHNOLOGY TEAM");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 578);
    \u0275\u0275element(50, "img", 579);
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52, "Productivity");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 580);
    \u0275\u0275element(54, "img", 581);
    \u0275\u0275elementStart(55, "span");
    \u0275\u0275text(56, "Cloud infrastructure");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(57, "div", 582);
    \u0275\u0275element(58, "img", 583);
    \u0275\u0275elementStart(59, "span");
    \u0275\u0275text(60, "Cloud platforms");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 584);
    \u0275\u0275element(62, "img", 585);
    \u0275\u0275elementStart(63, "span");
    \u0275\u0275text(64, "Connected cloud");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(65, "div", 586);
    \u0275\u0275element(66, "img", 587);
    \u0275\u0275elementStart(67, "span");
    \u0275\u0275text(68, "Data protection");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 588);
    \u0275\u0275element(70, "img", 589);
    \u0275\u0275elementStart(71, "span");
    \u0275\u0275text(72, "Enterprise cloud");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 590);
    \u0275\u0275element(74, "i");
    \u0275\u0275text(75, " One connected technology ecosystem");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(26);
    \u0275\u0275textInterpolate(ctx_r2.vendorCount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.partnerCategories.length);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_5_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 562);
    \u0275\u0275element(1, "span", 591)(2, "span", 592);
    \u0275\u0275elementStart(3, "div", 268)(4, "div", 350);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 593);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 594);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const page_r9 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Home \u203A Company \u203A ", page_r9.eyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r9.eyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r9.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r9.tagline);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompanyPage_Conditional_0_Conditional_4_Conditional_5_Conditional_1_Conditional_0_Template, 76, 2, "section", 561)(1, CompanyPage_Conditional_0_Conditional_4_Conditional_5_Conditional_1_Conditional_1_Template, 12, 4, "section", 562);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275conditional(ctx_r2.slug() === "vendor-partners" ? 0 : 1);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompanyPage_Conditional_0_Conditional_4_Conditional_5_Conditional_0_Template, 134, 0)(1, CompanyPage_Conditional_0_Conditional_4_Conditional_5_Conditional_1_Template, 2, 1);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.slug() === "careers-overview" ? 0 : 1);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 291)(1, "div", 292)(2, "div", 293);
    \u0275\u0275element(3, "img", 277);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 294)(5, "h2");
    \u0275\u0275text(6, "Dr. Samir Jhaveri");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 295);
    \u0275\u0275text(8, " Managing Director XcellHost Cloud Services Pvt Ltd Cloud,");
    \u0275\u0275element(9, "br");
    \u0275\u0275text(10, " Cybersecurity, AI, Digital Marketing Expert");
    \u0275\u0275element(11, "br");
    \u0275\u0275text(12, " College Dropout like Bill Gates");
    \u0275\u0275element(13, "br");
    \u0275\u0275text(14, " Honorory Doctorate (Honoris Causa) in Artificial Intelligence ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 296);
    \u0275\u0275text(16, " College dropout like Bill Gates. With over two decades of experience in the cloud industry, Samir Jhaveri has been at the forefront of digital transformation since 1999. As the Managing Director of XcellHost Cloud Services, he has empowered over 10,000 SMBs and enterprises with cutting-edge cloud,\u{1F525} security, digital marketing, and AI solutions.\u2728 His leadership and vision continue to drive innovation and excellence in the industry. \u{1F31F}\u{1F4AB} Let\u2019s transform together!\u{1F525} ");
    \u0275\u0275elementEnd()()()();
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "xh-reseller-program-content");
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "xh-zoho-job-listing");
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 595);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r9 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(page_r9.intro);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_2_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 608);
    \u0275\u0275element(1, "img", 611);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", card_r10.image, \u0275\u0275sanitizeUrl)("alt", card_r10.alt);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r10.caption);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_2_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 612);
    \u0275\u0275listener("click", function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_2_For_13_Template_button_click_0_listener() {
      const \u0275$index_3840_r12 = \u0275\u0275restoreView(_r11).$index;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.activeCareerSlide.set(\u0275$index_3840_r12));
    });
    \u0275\u0275element(1, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r13 = ctx.$implicit;
    const \u0275$index_3840_r12 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("is-active", ctx_r2.activeCareerSlide() === \u0275$index_3840_r12);
    \u0275\u0275attribute("aria-label", "Show photos starting with " + card_r13.title)("aria-pressed", ctx_r2.activeCareerSlide() === \u0275$index_3840_r12);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 596)(1, "header")(2, "h2", 606);
    \u0275\u0275text(3, "Life at ");
    \u0275\u0275elementStart(4, "em");
    \u0275\u0275text(5, "XcellHost");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Real people, shared ideas and room to grow. Meet the teams bringing care and creativity to our everyday work.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 607);
    \u0275\u0275repeaterCreate(9, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_2_For_10_Template, 4, 3, "article", 608, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 609);
    \u0275\u0275repeaterCreate(12, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_2_For_13_Template, 2, 4, "button", 610, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r2.visibleCareerLifeCards());
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r2.careerLifeCards);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_3_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 614)(1, "span", 615);
    \u0275\u0275text(2, "Illustrative story");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 616);
    \u0275\u0275element(4, "img", 617);
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h3");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 618);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "i", 14);
    \u0275\u0275text(12, "format_quote");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("src", item_r14.image, \u0275\u0275sanitizeUrl)("alt", item_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u201C", item_r14.text, "\u201D");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r14.role);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 597)(1, "div", 613);
    \u0275\u0275repeaterCreate(2, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_3_For_3_Template, 13, 5, "article", 614, _forTrack4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.careerStoryCards());
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 598)(1, "div", 619)(2, "div", 620);
    \u0275\u0275element(3, "img", 621);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 622)(5, "h2", 623);
    \u0275\u0275text(6, "Switch Your Career");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Explore exciting opportunities at XcellHost and become part of a team building a safer, smarter digital world.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 624)(10, "div", 625)(11, "span")(12, "i", 14);
    \u0275\u0275text(13, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14, "Continuous");
    \u0275\u0275element(15, "br");
    \u0275\u0275text(16, "Learning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span")(18, "i", 14);
    \u0275\u0275text(19, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, "Work with");
    \u0275\u0275element(21, "br");
    \u0275\u0275text(22, "Experts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span")(24, "i", 14);
    \u0275\u0275text(25, "code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26, "Real-World");
    \u0275\u0275element(27, "br");
    \u0275\u0275text(28, "Projects");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "a", 626);
    \u0275\u0275text(30, "Explore Career Opportunities ");
    \u0275\u0275elementStart(31, "span", 10);
    \u0275\u0275text(32, "\u2192");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 627)(34, "div", 628)(35, "span", 629);
    \u0275\u0275text(36, "Our hiring process");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "h2");
    \u0275\u0275text(38, "Simple & Transparent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 630)(40, "article")(41, "i", 14);
    \u0275\u0275text(42, "description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "h3")(44, "b");
    \u0275\u0275text(45, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275text(46, " Application Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p");
    \u0275\u0275text(48, "We review your application.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "article")(50, "i", 14);
    \u0275\u0275text(51, "assignment_turned_in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "h3")(53, "b");
    \u0275\u0275text(54, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, " Assessment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "p");
    \u0275\u0275text(57, "Technical and skill evaluation.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "article")(59, "i", 14);
    \u0275\u0275text(60, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "h3")(62, "b");
    \u0275\u0275text(63, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275text(64, " Interview");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "p");
    \u0275\u0275text(66, "Discussion with our team.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(67, "article")(68, "i", 14);
    \u0275\u0275text(69, "redeem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "h3")(71, "b");
    \u0275\u0275text(72, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " Offer & Onboarding");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "p");
    \u0275\u0275text(75, "Welcome to XcellHost!");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 631)(77, "span", 629);
    \u0275\u0275text(78, "Perks & benefits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "h2");
    \u0275\u0275text(80, "We Take Care of Our People");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(81, "div", 632)(82, "span")(83, "i", 14);
    \u0275\u0275text(84, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(85, "Competitive Salary");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "span")(87, "i", 14);
    \u0275\u0275text(88, "menu_book");
    \u0275\u0275elementEnd();
    \u0275\u0275text(89, "Learning & Development");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span")(91, "i", 14);
    \u0275\u0275text(92, "workspaces");
    \u0275\u0275elementEnd();
    \u0275\u0275text(93, "Flexible Environment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "span")(95, "i", 14);
    \u0275\u0275text(96, "workspace_premium");
    \u0275\u0275elementEnd();
    \u0275\u0275text(97, "Recognition & Rewards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "span")(99, "i", 14);
    \u0275\u0275text(100, "rocket_launch");
    \u0275\u0275elementEnd();
    \u0275\u0275text(101, "Career Growth Opportunities");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(102, "span")(103, "i", 14);
    \u0275\u0275text(104, "celebration");
    \u0275\u0275elementEnd();
    \u0275\u0275text(105, "Team Outings & Events");
    \u0275\u0275elementEnd()()()()();
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_5_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 635)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r15 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r15.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", value_r15.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("(", value_r15.subtitle, ")");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(value_r15.body);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 599)(1, "header")(2, "h2", 633);
    \u0275\u0275text(3, "Our Culture and Values: ");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "The Heart & Soul of XcellHost");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "At XcellHost, our strength comes from our people. We care for one another, support personal growth and work together toward meaningful goals. Here, you belong.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 634);
    \u0275\u0275repeaterCreate(9, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_5_For_10_Template, 9, 4, "article", 635, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 636);
    \u0275\u0275text(12, "These values guide how we work, make decisions and support one another. They shape the everyday moments that bring us together at XcellHost.");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(ctx_r2.careerValues);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_6_For_20_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 648)(1, "div", 649);
    \u0275\u0275element(2, "img", 650);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const partner_r18 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("src", "/assets/images/vendor-partners/" + partner_r18[1], \u0275\u0275sanitizeUrl)("alt", partner_r18[0] + " logo");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(partner_r18[0]);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_6_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 645)(1, "header")(2, "div")(3, "h3", 646);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "div", 647);
    \u0275\u0275repeaterCreate(8, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_6_For_20_For_9_Template, 5, 3, "article", 648, _forTrack5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r19 = ctx.$implicit;
    const $index_r20 = ctx.$index;
    \u0275\u0275classProp("vendor-category-badges", category_r19.badges);
    \u0275\u0275attribute("aria-labelledby", "vendor-category-" + $index_r20);
    \u0275\u0275advance(3);
    \u0275\u0275property("id", "vendor-category-" + $index_r20);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r19.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r19.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(category_r19.partners);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_6_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 644)(1, "h3");
    \u0275\u0275text(2, "No matching partners");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try another vendor name or technology category.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 651);
    \u0275\u0275listener("click", function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_6_ForEmpty_21_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.vendorQuery.set(""));
    });
    \u0275\u0275text(6, "Clear search");
    \u0275\u0275elementEnd()();
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 600)(1, "header", 637)(2, "span");
    \u0275\u0275text(3, "Technology ecosystem");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 638);
    \u0275\u0275text(5, "Our strategic vendor partners");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 639)(9, "div")(10, "strong");
    \u0275\u0275text(11, "Find your technology partner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "Browse by vendor name or technology category");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "label", 640)(15, "span", 14);
    \u0275\u0275text(16, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 641);
    \u0275\u0275listener("input", function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_6_Template_input_input_17_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.vendorQuery.set($event.target.value));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "div", 642);
    \u0275\u0275repeaterCreate(19, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_6_For_20_Template, 10, 6, "section", 643, _forTrack2, false, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_6_ForEmpty_21_Template, 7, 0, "div", 644);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const page_r9 = \u0275\u0275nextContext(3);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(page_r9.intro);
    \u0275\u0275advance(10);
    \u0275\u0275property("value", ctx_r2.vendorQuery());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.filteredPartnerCategories());
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 657);
    \u0275\u0275listener("click", function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_11_Template_button_click_0_listener() {
      const $index_r22 = \u0275\u0275restoreView(_r21).$index;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.activeCertification.set($index_r22));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 658);
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const certification_r23 = ctx.$implicit;
    const $index_r22 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("is-active", ctx_r2.activeCertification() === $index_r22);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeCertification() === $index_r22)("aria-controls", "certification-panel-" + $index_r22);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(($index_r22 + 1).toString().padStart(2, "0"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(certification_r23.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(certification_r23.status);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 660)(1, "div", 663);
    \u0275\u0275element(2, "img", 664);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const certification_r24 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", certification_r24.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", certification_r24.image, \u0275\u0275sanitizeUrl)("alt", certification_r24.alt);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 661)(1, "strong");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const certification_r24 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(certification_r24.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(certification_r24.type);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 660);
    \u0275\u0275text(1, "View certificate \u2192");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const certification_r24 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", certification_r24.image, \u0275\u0275sanitizeUrl);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Certificate document not yet available on this page.");
    \u0275\u0275elementEnd();
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 659);
    \u0275\u0275conditionalCreate(1, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Conditional_0_Conditional_1_Template, 3, 3, "a", 660)(2, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Conditional_0_Conditional_2_Template, 5, 2, "div", 661);
    \u0275\u0275elementStart(3, "div", 662)(4, "span");
    \u0275\u0275text(5, "Credential details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Conditional_0_Conditional_10_Template, 2, 1, "a", 660)(11, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Conditional_0_Conditional_11_Template, 2, 0, "p");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r24 = \u0275\u0275nextContext();
    const certification_r24 = ctx_r24.$implicit;
    const $index_r26 = ctx_r24.$index;
    \u0275\u0275property("id", "certification-panel-" + $index_r26);
    \u0275\u0275advance();
    \u0275\u0275conditional(certification_r24.image ? 1 : 2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(certification_r24.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(certification_r24.type);
    \u0275\u0275advance();
    \u0275\u0275conditional(certification_r24.image ? 10 : 11);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Conditional_0_Template, 12, 5, "article", 659);
  }
  if (rf & 2) {
    const $index_r26 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275conditional(ctx_r2.activeCertification() === $index_r26 ? 0 : -1);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 601)(1, "header", 652)(2, "span");
    \u0275\u0275text(3, "Certification architecture");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 653);
    \u0275\u0275text(5, "Standards behind trusted operations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Select a credential to review its scope, details and official certificate.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 654)(9, "div", 655);
    \u0275\u0275repeaterCreate(10, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_11_Template, 7, 7, "button", 656, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(12, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_For_13_Template, 1, 1, null, null, _forTrack2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r2.certifications);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.certifications);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_8_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 657);
    \u0275\u0275listener("click", function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_8_For_11_Template_button_click_0_listener() {
      const year_r28 = \u0275\u0275restoreView(_r27).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.activeAwardYear.set(year_r28));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const year_r28 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("is-active", ctx_r2.activeAwardYear() === year_r28);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeAwardYear() === year_r28)("aria-controls", "awards-panel-" + year_r28);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(year_r28);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_8_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 672)(1, "a", 673);
    \u0275\u0275element(2, "img", 650);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const award_r29 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", award_r29.image, \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("aria-label", "View " + award_r29.title + " (opens in a new tab)");
    \u0275\u0275advance();
    \u0275\u0275property("src", award_r29.image, \u0275\u0275sanitizeUrl)("alt", award_r29.title + " recognition");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(award_r29.title);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_8_ForEmpty_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Award updates for ", ctx_r2.activeAwardYear(), " will be added here.");
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 602)(1, "header", 665)(2, "span");
    \u0275\u0275text(3, "Recognition through the years");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2", 666);
    \u0275\u0275text(5, "Our Awards");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Milestones, memberships and partner recognition earned across XcellHost's cloud and technology journey.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 667)(9, "div", 668);
    \u0275\u0275repeaterCreate(10, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_8_For_11_Template, 2, 5, "button", 656, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "section", 669)(13, "div", 670)(14, "span");
    \u0275\u0275text(15, "Awards & recognition");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h3");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 671);
    \u0275\u0275repeaterCreate(19, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_8_For_20_Template, 5, 5, "article", 672, _forTrack2, false, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_8_ForEmpty_21_Template, 2, 1, "p");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r2.awardYears);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "awards-panel-" + ctx_r2.activeAwardYear());
    \u0275\u0275attribute("aria-label", ctx_r2.activeAwardYear() + " awards");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.activeAwardYear());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.visibleAwards());
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 675)(1, "span", 677);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r30 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r30.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r30.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r30.body);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_9_For_4_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const point_r31 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(point_r31);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_9_For_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul");
    \u0275\u0275repeaterCreate(1, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_9_For_4_Conditional_9_For_2_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r32 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(section_r32.points);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_9_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 678)(1, "div")(2, "span", 679);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_9_For_4_Conditional_9_Template, 3, 0, "ul");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const section_r32 = ctx.$implicit;
    const \u0275$index_4276_r33 = ctx.$index;
    \u0275\u0275classProp("company-section-tint", \u0275$index_4276_r33 % 2 === 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("0", \u0275$index_4276_r33 + 1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(section_r32.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(section_r32.body);
    \u0275\u0275advance();
    \u0275\u0275conditional((section_r32.points == null ? null : section_r32.points.length) ? 9 : -1);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 674);
    \u0275\u0275repeaterCreate(1, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_9_For_2_Template, 7, 3, "article", 675, _forTrack2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_9_For_4_Template, 10, 6, "section", 676, _forTrack2);
  }
  if (rf & 2) {
    const page_r9 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(page_r9.cards);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(page_r9.sections);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 603)(1, "div")(2, "h2", 680);
    \u0275\u0275text(3, "Ready to start with XcellHost?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 681)(7, "a", 322);
    \u0275\u0275text(8, "Request documents \u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 682);
    \u0275\u0275text(10, "Contact team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 683);
    \u0275\u0275text(12, "Talk on WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a", 684);
    \u0275\u0275text(14, "Email Us");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "a", 323);
    \u0275\u0275element(16, "img", 685);
    \u0275\u0275elementEnd()();
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 604)(1, "div")(2, "h2", 686);
    \u0275\u0275text(3, "Build your future with XcellHost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5, "Bring your skills, curiosity and ideas. Let\u2019s find your next opportunity together.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 681)(7, "a", 687);
    \u0275\u0275text(8, "Apply for a role \u2192");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 682);
    \u0275\u0275text(10, "Contact the careers team");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "a", 323);
    \u0275\u0275element(12, "img", 685);
    \u0275\u0275elementEnd()();
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 605)(1, "div")(2, "span");
    \u0275\u0275text(3, "Let\u2019s move forward");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "a", 322);
    \u0275\u0275text(7);
    \u0275\u0275elementStart(8, "span", 10);
    \u0275\u0275text(9, "\u2192");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const page_r9 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(page_r9.cta);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", page_r9.ctaLabel, " ");
  }
}
function CompanyPage_Conditional_0_Conditional_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 341);
    \u0275\u0275conditionalCreate(1, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_1_Template, 2, 1, "p", 595);
    \u0275\u0275conditionalCreate(2, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_2_Template, 14, 0, "section", 596);
    \u0275\u0275conditionalCreate(3, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_3_Template, 4, 0, "section", 597);
    \u0275\u0275conditionalCreate(4, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_4_Template, 106, 0, "section", 598);
    \u0275\u0275conditionalCreate(5, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_5_Template, 13, 0, "section", 599);
    \u0275\u0275conditionalCreate(6, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_6_Template, 22, 3, "section", 600)(7, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_7_Template, 14, 0, "section", 601)(8, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_8_Template, 22, 4, "section", 602)(9, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_9_Template, 5, 0);
    \u0275\u0275conditionalCreate(10, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_10_Template, 17, 0, "section", 603)(11, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_11_Template, 13, 0, "section", 604)(12, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Conditional_12_Template, 10, 2, "section", 605);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.slug() !== "vendor-partners" && ctx_r2.slug() !== "certifications-awards" && ctx_r2.slug() !== "careers-overview" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.slug() === "careers-overview" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.slug() === "careers-overview" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.slug() === "careers-overview" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.slug() === "careers-overview" ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.slug() === "vendor-partners" ? 6 : ctx_r2.slug() === "certifications-awards" ? 7 : ctx_r2.slug() === "awards" ? 8 : ctx_r2.slug() !== "certifications-awards" && ctx_r2.slug() !== "careers-overview" ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.slug() === "certifications-awards" ? 10 : ctx_r2.slug() === "careers-overview" ? 11 : ctx_r2.slug() !== "vendor-partners" ? 12 : -1);
  }
}
function CompanyPage_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275conditionalCreate(1, CompanyPage_Conditional_0_Conditional_4_Conditional_1_Template, 82, 0, "section", 336)(2, CompanyPage_Conditional_0_Conditional_4_Conditional_2_Template, 108, 4, "section", 337)(3, CompanyPage_Conditional_0_Conditional_4_Conditional_3_Template, 115, 4, "section", 338)(4, CompanyPage_Conditional_0_Conditional_4_Conditional_4_Template, 26, 0, "section", 339)(5, CompanyPage_Conditional_0_Conditional_4_Conditional_5_Template, 2, 1);
    \u0275\u0275conditionalCreate(6, CompanyPage_Conditional_0_Conditional_4_Conditional_6_Template, 17, 0, "section", 291);
    \u0275\u0275elementStart(7, "section", 340);
    \u0275\u0275conditionalCreate(8, CompanyPage_Conditional_0_Conditional_4_Conditional_8_Template, 1, 0, "xh-reseller-program-content")(9, CompanyPage_Conditional_0_Conditional_4_Conditional_9_Template, 1, 0, "xh-zoho-job-listing")(10, CompanyPage_Conditional_0_Conditional_4_Conditional_10_Template, 13, 7, "div", 341);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.slug() === "partner-overview" ? 1 : ctx_r2.slug() === "certifications-awards" ? 2 : ctx_r2.slug() === "awards" ? 3 : ctx_r2.slug() === "apply-for-job" ? 4 : 5);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r2.slug() === "our-team-our-story" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("id", ctx_r2.slug() === "partner-overview" ? "partner-overview-content" : null);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.slug() === "partner-overview" ? 8 : ctx_r2.slug() === "apply-for-job" ? 9 : 10);
  }
}
function CompanyPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CompanyPage_Conditional_0_Conditional_0_Template, 623, 0, "main", 0)(1, CompanyPage_Conditional_0_Conditional_1_Template, 306, 0, "main", 1)(2, CompanyPage_Conditional_0_Conditional_2_Template, 443, 0, "main", 2)(3, CompanyPage_Conditional_0_Conditional_3_Template, 340, 7, "main", 3)(4, CompanyPage_Conditional_0_Conditional_4_Template, 11, 4, "main", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.slug() === "privacy-policy" ? 0 : ctx_r2.slug() === "abuse-policy" ? 1 : ctx_r2.slug() === "ekyc-verification" ? 2 : ctx_r2.slug() === "our-team-our-story" ? 3 : 4);
  }
}
var CompanyPage = class _CompanyPage {
  route = inject(ActivatedRoute);
  router = inject(Router);
  seo = inject(SeoService);
  sanitizer = inject(DomSanitizer);
  slug = toSignal(this.route.paramMap.pipe(map((params) => params.get("slug") ?? this.route.snapshot.data["pageSlug"] ?? "")), { initialValue: "" });
  page = computed(() => COMPANY_PAGES[this.slug()] ?? null, ...ngDevMode ? [{ debugName: "page" }] : []);
  worldMap = this.sanitizer.bypassSecurityTrustHtml(WORLD_MAP_HTML);
  companyAskAiHref(platform) {
    const prompt = encodeURIComponent("Tell me about XcellHost certifications, including ISO 27001 and ISO 20000-1, and what they mean for customers.");
    if (platform === "chatgpt")
      return `https://chatgpt.com/?q=${prompt}`;
    if (platform === "perplexity")
      return `https://www.perplexity.ai/search/new?q=${prompt}`;
    if (platform === "claude")
      return `https://claude.ai/new?q=${prompt}`;
    return "https://gemini.google.com/app";
  }
  careerLifeCards = [
    { title: "Everyday at XcellHost", caption: "A look inside our everyday workspace.", image: "/assets/images/career-workplace.webp", alt: "XcellHost colleagues working at office workstations" },
    { title: "Working together", caption: "Shared ideas and teamwork in action.", image: "/assets/images/career-teamwork.webp", alt: "XcellHost team working alongside one another" },
    { title: "Connecting with our community", caption: "Representing XcellHost and building connections.", image: "/assets/images/career-event.jpg", alt: "Team members at the XcellHost managed cloud exhibition stand" },
    { title: "Life in our office", caption: "Moments of collaboration from around our office.", image: "/assets/images/career-office.jpg", alt: "Photo collage of XcellHost office meetings and workspaces" }
  ];
  careerValues = [
    { icon: "volunteer_activism", title: "Empathy", subtitle: "Humanity", body: "We listen to colleagues and customers, take time to understand their needs and treat people with kindness. Care and respect help everyone feel they belong." },
    { icon: "verified_user", title: "Integrity", subtitle: "Honesty", body: "We say what we mean and follow through on our commitments. Fair decisions, clear expectations and accountability help us earn trust every day." },
    { icon: "forum", title: "Transparency", subtitle: "Openness", body: "We share information, communicate clearly and welcome questions. Every voice matters, and feedback helps us learn and improve together." },
    { icon: "handshake", title: "Dedication", subtitle: "Commitment", body: "We take ownership of our work and keep learning. We work through challenges together and focus on dependable outcomes for customers and colleagues." }
  ];
  activeCareerSlide = signal(0, ...ngDevMode ? [{ debugName: "activeCareerSlide" }] : []);
  careerStories = [
    {
      image: "assets/images/career-testimonial-aanya.png",
      name: "Aanya Mehta",
      role: "Cloud Solutions Engineer",
      text: "Every project gives me a new technical challenge to solve. I get the freedom to explore ideas, learn from experienced teammates and turn that learning into better outcomes for customers."
    },
    {
      image: "assets/images/career-testimonial-rohan.png",
      name: "Rohan Kulkarni",
      role: "Cybersecurity Analyst",
      text: "What stands out is how openly the team shares knowledge. Even on complex security work, there is always someone ready to review an approach, answer a question or help move an idea forward."
    },
    {
      image: "assets/images/career-testimonial-nisha.png",
      name: "Nisha Verma",
      role: "Customer Experience Manager",
      text: "The work feels meaningful because we stay close to customer needs. Collaboration across teams helps us turn feedback into practical improvements that customers can genuinely feel."
    }
  ];
  careerStoryCards = computed(() => this.careerStories, ...ngDevMode ? [{ debugName: "careerStoryCards" }] : []);
  careerCareTabs = [
    { id: "learning", label: "Learning & Development", intro: "Build your skills, share your knowledge and explore the next step in your career.", cards: [
      { icon: "explore", title: "Leadership Development", body: "Grow the communication, planning and people skills that help teams succeed." },
      { icon: "menu_book", title: "Continuous Learning", body: "Keep exploring cloud platforms, technical concepts and professional skills." },
      { icon: "groups", title: "Starting Your Career", body: "Build confidence as you move from learning concepts to solving workplace challenges." },
      { icon: "forum", title: "Learning Conversations", body: "Discuss your interests, ask questions and learn from the experience of colleagues." },
      { icon: "smart_toy", title: "AI & Technical Skills", body: "Explore evolving tools and practical approaches to technology." },
      { icon: "lightbulb", title: "Ideas & Innovation", body: "Bring fresh perspectives to everyday problems and share what you discover." },
      { icon: "school", title: "Professional Growth", body: "Identify the knowledge and capabilities that support your next career step." },
      { icon: "track_changes", title: "Personal Development", body: "Build habits that support focus, collaboration and meaningful progress." },
      { icon: "star", title: "Growing Together", body: "Learn through shared challenges and contribute to the success of your team." }
    ] },
    { id: "rewards", label: "Rewards & Benefits", intro: "Explore how your contribution, career goals and role fit together at XcellHost.", cards: [
      { icon: "trending_up", title: "Performance & Progress", body: "Discuss role expectations, goals and how your contribution will be evaluated." },
      { icon: "workspace_premium", title: "Recognition & Growth", body: "Bring your achievements and career ambitions into conversations with your team." },
      { icon: "redeem", title: "Your Benefits Package", body: "Our careers team can explain the benefits and eligibility that apply to your role." }
    ] },
    { id: "health", label: "Health & Security", intro: "Your wellbeing matters. Talk with our careers team about the support available for your role.", cards: [
      { icon: "health_and_safety", title: "Health Coverage", body: "Ask about available health benefits, coverage and eligibility during the hiring process." },
      { icon: "family_restroom", title: "Family Support", body: "Discuss family-related needs and the policies relevant to your circumstances." },
      { icon: "child_care", title: "Parenthood & Leave", body: "Get clarity on applicable parental leave and support as your family grows." },
      { icon: "favorite", title: "Everyday Wellbeing", body: "Make space for conversations about wellbeing and sustainable working habits." },
      { icon: "support_agent", title: "Finding Support", body: "Connect with the right team to discuss workplace concerns and available assistance." },
      { icon: "verified_user", title: "A Respectful Workplace", body: "Help build a working environment shaped by care, respect and responsibility." }
    ] }
  ];
  activeCareerCareTab = signal(0, ...ngDevMode ? [{ debugName: "activeCareerCareTab" }] : []);
  careerCareContent = computed(() => this.careerCareTabs[this.activeCareerCareTab()], ...ngDevMode ? [{ debugName: "careerCareContent" }] : []);
  onCareerCareKeydown(event, index) {
    let next = index;
    switch (event.key) {
      case "ArrowRight":
        next = (index + 1) % this.careerCareTabs.length;
        break;
      case "ArrowLeft":
        next = (index + this.careerCareTabs.length - 1) % this.careerCareTabs.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = this.careerCareTabs.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    this.activeCareerCareTab.set(next);
    event.currentTarget.parentElement?.querySelectorAll('[role="tab"]')[next]?.focus();
  }
  visibleCareerLifeCards = computed(() => Array.from({ length: 3 }, (_, offset) => this.careerLifeCards[(this.activeCareerSlide() + offset) % this.careerLifeCards.length]), ...ngDevMode ? [{ debugName: "visibleCareerLifeCards" }] : []);
  careerCertificationPeriods = [
    "NOV 2025\u2013NOV 2026",
    "OCT 2024\u2013OCT 2025",
    "NOV 2023\u2013NOV 2024",
    "NOV 2022\u2013NOV 2023",
    "OCT 2021\u2013OCT 2022",
    "OCT 2020\u2013SEPT 2021",
    "OCT 2019\u2013SEP 2020",
    "NOV 2018\u2013OCT 2019"
  ];
  founder = {
    name: "Dr. Samir Jhaveri",
    role: "Managing Director, XcellHost Cloud Services Pvt. Ltd.",
    specialties: "Cloud, cybersecurity, AI and digital marketing",
    summary: "A long-time technology leader with over two decades in the industry, guiding XcellHost since 1999 and helping SMBs and enterprises simplify cloud operations.",
    note: "Our approach is simple: give customers practical guidance, deliver what was promised and stay accountable after go-live."
  };
  managementTeam = [
    { initials: "YJ", name: "Yogendra Jagger", role: "Regional Director - EMEA Middle East & Africa", image: "/assets/images/TEAMS PHOTO/Yogendra.png" },
    { initials: "AN", name: "Abhishek Nimbalkar", role: "Chief AI Officer", image: "/assets/images/TEAMS PHOTO/Abhishek.png" },
    { initials: "PN", name: "Prashant N.V", role: "Service Delivery Director", image: "/assets/images/TEAMS PHOTO/Prashant.png" },
    { initials: "T", name: "AI Management Intelligence Agent", role: "", image: "/assets/images/Robot-enhanced.png" }
  ];
  advisoryTeam = [
    { initials: "SJ", name: "CA Suraj Jain", role: "Financial Advisor", image: "/assets/images/TEAMS PHOTO/Suraj JAin.png" },
    { initials: "SM", name: "CA Surendra Mehra", role: "Chartered Accountant", image: "/assets/images/TEAMS PHOTO/Mehara.png" },
    { initials: "UJ", name: "Upendra Joshi ", role: "Chartered Accountant", image: "/assets/images/TEAMS PHOTO/Upendra.png" }
  ];
  salesTeam = [
    { initials: "RS", name: "Rahul Sanghavi", role: "Cloud Sales Head", image: "/assets/images/TEAMS PHOTO/Rahul Sanghavi.png" },
    { initials: "AP", name: "Abhishek Pandey", role: "Cloud Sales Manager", image: "/assets/images/TEAMS PHOTO/Abhishek Pandey.png" },
    { initials: "SK", name: "Sushil Kumar", role: "Cloud-PreSales Manager", image: "assets/images/TEAMS PHOTO/Sudhil.png" },
    { initials: "RS", name: "Rashed Syed", role: "Cloud Advisor - PreSales", image: "/assets/images/TEAMS PHOTO/Rashed.png" },
    { initials: "MG", name: "Mihir Ambokar ", role: "Cloud Advisor - PreSales", image: "/assets/images/TEAMS PHOTO/Mihir.png" },
    { initials: "AG", name: "Ajay Gupta", role: "Cloud Advisor - PreSales", image: "/assets/images/TEAMS PHOTO/Ajay Gupta.png" },
    { initials: "AG", name: "AI SDR Agent", role: "", image: "/assets/images/Robot-enhanced.png" },
    { initials: "AG", name: "AI Lead Qualification Agent", role: "", image: "/assets/images/Robot-enhanced.png" },
    { initials: "VC", name: "AI RFP/RFQ Response Agent", role: "", image: "/assets/images/Robot-enhanced.png" },
    { initials: "VC", name: "AI Proposal Generator Agent", role: "", image: "/assets/images/Robot-enhanced.png" },
    { initials: "VC", name: "AI Competitor Intelligence Agent", role: "", image: "/assets/images/Robot-enhanced.png" }
  ];
  marketing = [
    { initials: "AN", name: "Aryan Nair", role: "Social Media Manager", image: "/assets/images/TEAMS PHOTO/Aryan.png" },
    { initials: "RS", name: "Ravi Sharma", role: "SEO+GTM Engineer", image: "/assets/images/TEAMS PHOTO/Ravi.png" },
    { initials: "RS", name: "AI SEO/AEO/GEO Agent", role: "", image: "/assets/images/Robot-enhanced.png" },
    { initials: "RS", name: "AI Social Media Agent", role: "", image: "/assets/images/Robot-enhanced.png" },
    { initials: "RS", name: "AI Conversation Agent", role: "", image: "/assets/images/Robot-enhanced.png" }
  ];
  AITeams = [
    { initials: "AT", name: "Advet Tambe", role: "AI Engineer", image: "/assets/images/TEAMS PHOTO/Advet.png" },
    { initials: "VC", name: "Vishal Chaubey", role: "Automation Engineer", image: "/assets/images/TEAMS PHOTO/vishal.png" },
    { initials: "VC", name: "AI Market Research Specialist", role: "", image: "/assets/images/Robot-enhanced.png" },
    { initials: "VC", name: "AI Content Strategy& Copilot Agent", role: "", image: "/assets/images/Robot-enhanced.png" },
    { initials: "VC", name: "AI Paid Media& Ad Performance Agent", role: "", image: "/assets/images/Robot-enhanced.png" }
  ];
  developers = [
    { initials: "SV", name: "Sujeet Vishwakarma", role: "Senior Developer", image: "/assets/images/TEAMS PHOTO/Sujeet Vishwakarma.png" },
    { initials: "VG", name: "Vaishnavi Ghaghare", role: "Web Developer", image: "/assets/images/TEAMS PHOTO/Vaishnavi Ghaghare.png" },
    { initials: "DV", name: "Divya Varma", role: "Web Developer", image: "/assets/images/TEAMS PHOTO/Divya Varma.png" },
    { initials: "VT", name: "Vibha Tiwari", role: "Web Developer", image: "/assets/images/TEAMS PHOTO/Vibha Tiwari.png" },
    { initials: "AS", name: "Adarsh Singh", role: "Web Developer", image: "/assets/images/TEAMS PHOTO/Adarsh Singh.png" }
  ];
  accountantTeam = [
    { initials: "SJ", name: "Sanjay Jade", role: "Account Manager", image: "/assets/images/TEAMS PHOTO/Sanjay Jade.png" },
    { initials: "RB", name: "Rutuja Bhoga", role: "Account Assistance", image: "/assets/images/TEAMS PHOTO/Rutuja Bhoga.png" },
    { initials: "RB", name: "AI Cashflow Forecast Agent", role: "", image: "/assets/images/Robot-enhanced.png" },
    { initials: "RB", name: "AI Payment Followup Agent", role: "", image: "/assets/images/Robot-enhanced.png" }
  ];
  graphicDesignerTeam = [
    { initials: "SP", name: "Shantaram Palkar", role: "Graphic Designer Manager", image: "/assets/images/TEAMS PHOTO/Shantaram Palkar.png" },
    { initials: "NS", name: "Nishant Shinde", role: "Graphic Designer L2", image: "/assets/images/TEAMS PHOTO/Nishant Shinde.png" },
    { initials: "SV", name: "Shakshita Vangade", role: "Graphic Designer L1", image: "/assets/images/TEAMS PHOTO/Shakshita Vangade.png" },
    { initials: "NS", name: "AI Generative Agent", role: "", image: "/assets/images/Robot-enhanced.png" }
  ];
  adminTeam = [
    { initials: "MS", name: "Mayuri Shinde", role: "Admin Manager", image: "/assets/images/TEAMS PHOTO/Mayuri Shinde.png" },
    { initials: "T", name: "Tejas Nashiba", role: "Admin Exceutive ", image: "assets/images/TEAMS PHOTO/Tejas Nashiba.png" },
    { initials: "T", name: "AI Command Center Orchestrator", role: "", image: "/assets/images/Robot-enhanced.png" }
  ];
  technicalSupportTeam = [
    { initials: "RS", name: "Rizwan Shaikh", role: "Technical Manager", image: "/assets/images/TEAMS PHOTO/Rizwan.png" },
    { initials: "AY", name: "Amit Yadav", role: "Technical Support Executive- L3", image: "/assets/images/TEAMS PHOTO/Amit Yadav.png" },
    { initials: "SB", name: "Santosh kumar Behera", role: "Technical Support Executive - L2", image: "/assets/images/TEAMS PHOTO/Santosh.png" },
    { initials: "TM", name: "Talha Mohammad", role: "Technical Support Executive-L2", image: "/assets/images/TEAMS PHOTO/Talha.png" },
    { initials: "TM", name: "Manisha Gupta", role: "Technical Support Executive-L2", image: "/assets/images/TEAMS PHOTO/Manisha Gupta.png" },
    { initials: "PA", name: "Purva Angre", role: "Technical Support Executive-L1", image: "/assets/images/TEAMS PHOTO/Purva.png" },
    { initials: "TM", name: "AI Customer Support-Service", role: "", image: "/assets/images/Robot-enhanced.png" }
  ];
  securityTeam = [
    "CISO / Head of Cybersecurity",
    "SOC Manager",
    "SOC Analyst (L1/L2/L3)",
    "SIEM Engineer",
    "XDR / EDR Engineer",
    "Security Engineer",
    "Vulnerability Assessment Engineer",
    "Penetration Tester",
    "Incident Response Analyst",
    "Threat Intelligence Analyst",
    "GRC / Compliance Specialist"
  ].map((name) => ({ name, role: "", image: "/assets/images/Robot-enhanced.png" }));
  teamTabs = [
    { id: "all", label: "All Team" },
    { id: "management", label: "Management" },
    { id: "advisory", label: "Advisory" },
    { id: "technical-support", label: "Technical Support" },
    { id: "security", label: "Security" },
    { id: "sales", label: "Sales" },
    { id: "marketing", label: "Marketing" },
    { id: "AITeams", label: "AI" },
    { id: "developers", label: "Developers" },
    { id: "accountant", label: "Accounts" },
    { id: "graphic-designer", label: "Graphic Designer" },
    { id: "admin", label: "Admin" }
  ];
  activeTeamTab = signal("all", ...ngDevMode ? [{ debugName: "activeTeamTab" }] : []);
  teamDepartmentLabel(department) {
    return this.teamTabs.find((tab) => tab.id === department)?.label ?? department;
  }
  teamDepartmentIcon(department) {
    const icons = {
      all: "groups",
      management: "business_center",
      advisory: "forum",
      sales: "trending_up",
      marketing: "campaign",
      AITeams: "psychology",
      developers: "code",
      accountant: "calculate",
      "graphic-designer": "palette",
      admin: "admin_panel_settings",
      "technical-support": "support_agent",
      security: "shield"
    };
    return icons[department] ?? "groups";
  }
  teamMembers = [
    ...this.managementTeam.map((member) => __spreadProps(__spreadValues({}, member), { department: "management" })),
    ...this.technicalSupportTeam.map((member) => __spreadProps(__spreadValues({}, member), { department: "technical-support" })),
    ...this.securityTeam.map((member) => __spreadProps(__spreadValues({}, member), { department: "security" })),
    ...this.advisoryTeam.map((member) => __spreadProps(__spreadValues({}, member), { department: "advisory" })),
    ...this.salesTeam.map((member) => __spreadProps(__spreadValues({}, member), { department: "sales" })),
    ...this.marketing.map((member) => __spreadProps(__spreadValues({}, member), { department: "marketing" })),
    ...this.AITeams.map((member) => __spreadProps(__spreadValues({}, member), { department: "AITeams" })),
    ...this.developers.map((member) => __spreadProps(__spreadValues({}, member), { department: "developers" })),
    ...this.accountantTeam.map((member) => __spreadProps(__spreadValues({}, member), { department: "accountant" })),
    ...this.graphicDesignerTeam.map((member) => __spreadProps(__spreadValues({}, member), { department: "graphic-designer" })),
    ...this.adminTeam.map((member) => __spreadProps(__spreadValues({}, member), { department: "admin" }))
  ];
  visibleTeamMembers = computed(() => this.teamMembers.filter((member) => this.activeTeamTab() === "all" || member.department === this.activeTeamTab()), ...ngDevMode ? [{ debugName: "visibleTeamMembers" }] : []);
  onTeamTabKeydown(event, index) {
    let next = index;
    switch (event.key) {
      case "ArrowRight":
        next = (index + 1) % this.teamTabs.length;
        break;
      case "ArrowLeft":
        next = (index + this.teamTabs.length - 1) % this.teamTabs.length;
        break;
      case "Home":
        next = 0;
        break;
      case "End":
        next = this.teamTabs.length - 1;
        break;
      default:
        return;
    }
    event.preventDefault();
    this.activeTeamTab.set(this.teamTabs[next].id);
    const tabList = event.currentTarget.parentElement;
    tabList?.querySelectorAll('[role="tab"]')[next]?.focus();
  }
  values = [
    { title: "Teamwork", body: "We work across functions so customers get one coordinated answer." },
    { title: "Integrity", body: "We say what we can do, do what we say and keep the record clear." },
    { title: "Respect", body: "People and customer situations are handled with care and fairness." },
    { title: "Diligence", body: "The small details matter, especially in operational work that others depend on." }
  ];
  commitmentStats = [
    { value: "1999", label: "Serving customers since" },
    { value: "10,000+", label: "Businesses supported" },
    { value: "24x7", label: "Monitoring and response" },
    { value: "1 team", label: "For cloud, security and support" }
  ];
  contactCards = [
    {
      label: "Call us",
      value: "+91 22 6711 1555",
      note: "Best for sales, service guidance and urgent issues.",
      href: "tel:+912267111555"
    },
    {
      label: "Email us",
      value: "sales@xcellhost.cloud",
      note: "For a project conversation or written details.",
      href: "mailto:sales@xcellhost.cloud"
    },
    {
      label: "WhatsApp",
      value: "+91 8657032540",
      note: "Fastest route for a quick introduction.",
      href: "https://wa.me/918657032540"
    }
  ];
  additionalCredentials = [
    { label: "ISO", name: "9001", status: "Certified" },
    { label: "ISO", name: "27001", status: "Certified" },
    { label: "ISO", name: "27002", status: "Certified" },
    { label: "ISO", name: "27017", status: "Certified" },
    { label: "ISO", name: "27018", status: "Certified" },
    { label: "ISO", name: "29100", status: "Certified" },
    { label: "ISO", name: "20000-1", status: "Certified" },
    { label: "SOC 2", name: "Type I", status: "Certified" },
    { label: "SOC 2", name: "Type II", status: "Certified" },
    { label: "", name: "MEITY", status: "Certified" },
    { label: "", name: "TIER IV", status: "Certified" },
    { label: "CMM1", name: "LEVEL 3", status: "Certified" },
    { label: "", name: "DPDPA", status: "Compliant" },
    { label: "", name: "GEM", status: "Registered" },
    { label: "", name: "VAPT", status: "Certified" },
    { label: "", name: "DUNS", status: "Registered" },
    { label: "", name: "Justdial", status: "Verified Supplier" },
    { label: "", name: "IndiaMart", status: "Verified Supplier" }
  ];
  existingCertifications = [
    {
      title: "ISO/IEC 27001:2013",
      status: "Certified",
      type: "Information Security Management System",
      image: "/assets/images/company-recognition/iso-27001-certificate.jpg",
      alt: "XcellHost ISO IEC 27001:2013 certificate"
    },
    {
      title: "ISO/IEC 20000-1:2018",
      status: "Certified",
      type: "IT Service Management System",
      image: "/assets/images/company-recognition/iso-20000-certificate.jpg",
      alt: "XcellHost ISO IEC 20000-1:2018 certificate"
    }
  ];
  certifications = [
    ...this.existingCertifications,
    ...this.additionalCredentials.filter((badge) => !(badge.label === "ISO" && ["27001", "20000-1"].includes(badge.name))).map((badge) => ({
      title: [badge.label, badge.name].filter(Boolean).join(" "),
      type: badge.status,
      status: badge.status,
      image: "",
      alt: ""
    }))
  ];
  activeCertification = signal(0, ...ngDevMode ? [{ debugName: "activeCertification" }] : []);
  requestedCertification = toSignal(this.route.queryParamMap.pipe(map((params) => params.get("certification"))), { initialValue: null });
  syncRequestedCertification = effect(() => {
    if (this.slug() !== "certifications-awards")
      return;
    const index = Number(this.requestedCertification());
    if (Number.isInteger(index) && index >= 0 && index < this.certifications.length) {
      this.activeCertification.set(index);
    }
  }, ...ngDevMode ? [{ debugName: "syncRequestedCertification" }] : []);
  awardYears = ["2026", "2025", "2024", "2023", "2022", "2018"];
  activeAwardYear = signal("2025", ...ngDevMode ? [{ debugName: "activeAwardYear" }] : []);
  awards = [
    { year: "2025", title: "Asian-African Iconic Awards", image: "/assets/images/company-recognition/asian-african.png" },
    { year: "2024", title: "Emerging Partner of the Year \xE2\u20AC\u201D India West", image: "/assets/images/company-recognition/emerging-partner-of-the-year.png" },
    { year: "2024", title: "IT Expo 2024", image: "/assets/images/company-recognition/it-expo.png" },
    { year: "2023", title: "MSP India Summit 2023", image: "/assets/images/company-recognition/india-summit-2023.png" },
    { year: "2023", title: "TAIT Membership", image: "/assets/images/company-recognition/tait-membership.png" },
    { year: "2023", title: "The Institute of Cost Accountants of India", image: "/assets/images/company-recognition/institute-cost-accountants-india.png" },
    { year: "2022", title: "Kaspersky Emerging MSP Partner of the Year", image: "/assets/images/company-recognition/kaspersky.png" },
    { year: "2022", title: "Grahams Award of Excellence", image: "/assets/images/company-recognition/graham.png" },
    { year: "2018", title: "Emerging Cloud Solution Provider of the Year", image: "/assets/images/company-recognition/summit-awards-2018.png" }
  ];
  visibleAwards = computed(() => this.awards.filter((award) => award.year === this.activeAwardYear()), ...ngDevMode ? [{ debugName: "visibleAwards" }] : []);
  partnerCategories = [
    { title: "Cloud, virtualization & AI partnerships", description: "Partner credentials across cloud solutions, virtualization and AI services.", badges: true, partners: [
      ["Microsoft Solutions Partner", "microsoft-logo-1.gif"],
      ["Proxmox Authorized Reseller", "Apps4Rent-proxmox-authorized-reseller.png"],
      ["Claude Partner Network", "apps4rent-claude-partner-network.webp"]
    ] },
    { title: "Strategic cloud & infrastructure", description: "Cloud platforms, hyperscalers and datacentre infrastructure.", partners: [
      ["Microsoft Partner", "02-microsoft-partner.png"],
      ["Azure", "01-azure.png"],
      ["AWS", "21-aws.png"],
      ["Google Cloud Platform", "41-google-cloud-platform.png"],
      ["Oracle Cloud Infrastructure", "61-oracle-cloud-infrastructure.png"],
      ["Equinix", "42-equinix.png"]
    ] },
    { title: "SSL certificates & PKI", description: "Public trust, TLS certificates and digital identity.", partners: [
      ["DigiCert", "03-digicert.png"],
      ["GeoTrust", "62-geotrust.png"],
      ["Sectigo", "23-sectigo.png"]
    ] },
    { title: "Web, network & DNS security", description: "WAF, DDoS protection, firewalls and secure network services.", partners: [
      ["Cybird", "../cybird-powered-by.png"],
      ["cWatch", "43-cwatch.png"],
      ["Prophaze", "63-prophaze.png"],
      ["Fortinet", "64-fortinet.png"],
      ["Palo Alto Networks", "05-palo-alto-networks-1.png"],
      ["Infoblox", "12-infoblox.png"]
    ] },
    { title: "Digital risk & threat intelligence", description: "External risk monitoring and actionable threat intelligence.", partners: [
      ["Foresiet", "04-foresiet.png"],
      ["Kaspersky Digital Footprint Intelligence", "24-kaspersky-digital-footprint-intelligence.png"],
      ["Kaspersky Threat Intelligence", "44-kaspersky-threat-intelligence.png"]
    ] },
    { title: "Endpoint security", description: "Endpoint protection, detection and managed response.", partners: [
      ["Acronis", "22-acronis-1.png"],
      ["Microsoft Defender for Endpoint", "45-microsoft-defender-for-endpoint.png"]
    ] },
    { title: "Email security", description: "Secure email gateways, anti-phishing and trusted messaging.", partners: [
      ["Threatcop", "06-threatcop.png"],
      ["RPost", "26-rpost.png"],
      ["Mimecast Partner", "46-mimecast-partner.png"],
      ["SpamExperts", "65-spamexperts.png"]
    ] },
    { title: "SASE & data security", description: "Secure access, information protection and data loss prevention.", partners: [
      ["Kite Cyber", "07-kite-cyber.png"],
      ["Data Resolve", "66-data-resolve.png"]
    ] },
    { title: "Data protection", description: "Backup, cyber resilience and SaaS data recovery.", partners: [
      ["Druva", "27-druva.png"],
      ["Veeam", "47-veeam.png"],
      ["NinjaOne", "81-ninjaone.svg"]
    ] },
    { title: "Network access, vulnerability & patching", description: "Asset visibility, exposure management and remediation.", partners: [
      ["Genians", "08-genians.png"],
      ["SecPod", "28-secpod.png"],
      ["Qualys", "48-qualys.png"]
    ] },
    { title: "SIEM, XDR, SOC & SOAR", description: "Security analytics, detection, orchestration and response.", partners: [
      ["Wazuh", "09-wazuh.png"],
      ["Azure Sentinel", "30-azure-sentinel.png"],
      ["FortiSIEM", "69-fortisiem.png"]
    ] },
    { title: "Identity, governance & cloud posture", description: "IAM, privileged access, compliance automation and CSPM.", partners: [
      ["Arcon", "11-arcon.png"],
      ["Scrut Automation", "31-scrut-automation.png"],
      ["CloudWize", "32-cloudwize.png"],
      ["Drata", "51-drata.png"],
      ["OneLogin", "70-onelogin.png"],
      ["Prisma Cloud", "71-prisma-cloud.png"]
    ] },
    { title: "Remote work & collaboration", description: "Secure remote access, support and digital workspaces.", partners: [
      ["TSplus", "16-tsplus.png"],
      ["TeamViewer", "13-teamviewer.png"],
      ["AnyDesk", "33-anydesk.png"],
      ["GoTo", "52-goto.png"],
      ["Accops", "72-accops.png"]
    ] },
    { title: "Cloud & security monitoring", description: "Infrastructure, application and service observability.", partners: [
      ["New Relic", "14-new-relic.png"],
      ["Datadog", "34-datadog.png"],
      ["Site24x7", "53-site24x7.png"],
      ["Elastic", "73-elastic.png"]
    ] },
    { title: "OT & industrial security", description: "Protection for operational technology and industrial environments.", partners: [
      ["Acronis Cyber Protect OT", "74-acronis-cyber-protect-ot.png"],
      ["Kaspersky Industrial CyberSecurity", "15-kaspersky-industrial-cybersecurity.png"],
      ["Nozomi Networks", "35-nozomi-networks.png"]
    ] },
    { title: "Network segmentation", description: "Zero-trust segmentation and lateral-movement containment.", partners: [
      ["ColorTokens", "17-colortokens.png"],
      ["Illumio", "36-illumio.png"]
    ] },
    { title: "Security training & professional bodies", description: "Cybersecurity learning, certification and professional development.", partners: [
      ["SANS", "18-sans.png"],
      ["ISC2", "19-isc2.png"],
      ["ISACA", "40-isaca.png"],
      ["CompTIA", "56-comptia.png"],
      ["EC-Council", "76-ec-council.png"]
    ] },
    { title: "Data privacy & cyber risk", description: "Privacy operations, governance and financial risk quantification.", partners: [
      ["Ardent", "20-ardent.png"],
      ["OneTrust", "38-onetrust.png"],
      ["Risknox.ai", "39-risknox-ai.png"]
    ] },
    { title: "API, mobile & breach simulation", description: "API protection, unified endpoint management and attack simulation.", partners: [
      ["Salt Security", "54-salt-security.png"],
      ["Scalefusion", "55-scalefusion.png"],
      ["FourCore", "59-fourcore.png"],
      ["Protectt.ai", "75-protectt-ai.png"],
      ["XM Cyber", "79-xm-cyber.png"]
    ] },
    { title: "Security audit & application security", description: "Policy assurance, firewall audit and secure software delivery.", partners: [
      ["AlgoSec", "37-algosec.png"],
      ["FireMon", "57-firemon-1.png"],
      ["Synopsys", "77-synopsys.png"]
    ] },
    { title: "Security hardware & software", description: "Cryptographic hardware and specialised security tooling.", partners: [
      ["Utimaco", "58-utimo.png"],
      ["Securaze", "78-securaze.png"]
    ] }
  ];
  vendorQuery = signal("", ...ngDevMode ? [{ debugName: "vendorQuery" }] : []);
  vendorCount = this.partnerCategories.reduce((total, category) => total + category.partners.length, 0);
  filteredPartnerCategories = computed(() => {
    const query = this.vendorQuery().trim().toLowerCase();
    return this.partnerCategories.map((category) => __spreadProps(__spreadValues({}, category), {
      partners: category.title.toLowerCase().includes(query) ? category.partners : category.partners.filter((partner) => partner[0].toLowerCase().includes(query))
    })).filter((category) => category.partners.length);
  }, ...ngDevMode ? [{ debugName: "filteredPartnerCategories" }] : []);
  constructor() {
    effect(() => {
      const page = this.page();
      if (!page) {
        void this.router.navigate(["/"]);
        return;
      }
      const path = this.slug() === "partner-overview" ? "/under-construction/partner-overview/" : this.slug() === "our-team-our-story" ? "/about-us/" : `/company/${this.slug()}/`;
      this.seo.set(`${page.title} \xE2\u20AC\u201D XcellHost`, page.tagline, path);
    });
  }
  static \u0275fac = function CompanyPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyPage, selectors: [["xh-company-page"]], hostAttrs: [2, "display", "contents"], decls: 1, vars: 1, consts: [[1, "privacy-policy-page"], [1, "privacy-policy-page", "abuse-policy-page"], [1, "ekyc-page"], [1, "ppage", "as-page", "company-page", "team-page"], [1, "ppage", "as-page", "company-page"], ["aria-labelledby", "privacy-policy-title", 1, "privacy-policy-hero"], [1, "privacy-policy-hero-inner"], [1, "policy-hero-copy"], ["aria-label", "Breadcrumb", 1, "privacy-policy-breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], ["id", "privacy-policy-title"], ["aria-label", "Privacy policy highlights", 1, "policy-hero-benefits"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-security"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-rights"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-use"], ["aria-hidden", "true", 1, "policy-hero-art", "policy-hero-art--privacy"], [1, "policy-art-glow"], [1, "policy-art-globe"], [1, "policy-art-node", "policy-art-node-one", "material-symbols-outlined"], [1, "policy-art-node", "policy-art-node-two", "material-symbols-outlined"], [1, "policy-art-node", "policy-art-node-three", "material-symbols-outlined"], [1, "policy-art-card"], [1, "material-symbols-outlined"], [1, "privacy-policy-layout"], ["aria-label", "Privacy policy contents", 1, "privacy-policy-aside"], [1, "privacy-policy-contents"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-overview"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-definitions"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-information"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-lawful-basis"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-sharing"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-cookies"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-processors"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-transfers"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-retention-policy"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-children"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-breach"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-grievance"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-external-links"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-changes"], ["routerLink", "/company/privacy-policy", "fragment", "privacy-contact"], [1, "privacy-policy-help"], ["routerLink", "/contact"], [1, "privacy-policy-document"], ["id", "privacy-overview"], [1, "privacy-policy-section-label"], ["href", "https://www.xcellhost.cloud/", "target", "_blank", "rel", "noopener noreferrer"], ["id", "privacy-definitions"], ["id", "privacy-information"], ["id", "privacy-lawful-basis"], ["id", "privacy-use"], ["id", "privacy-sharing"], ["id", "privacy-cookies"], ["id", "privacy-processors"], ["id", "privacy-transfers"], ["id", "privacy-retention-policy"], ["id", "privacy-rights"], ["id", "privacy-children"], ["id", "privacy-security"], ["id", "privacy-breach"], ["id", "privacy-grievance"], ["href", "mailto:dpo@xcellhost.cloud"], ["href", "tel:+912267111555"], ["id", "privacy-external-links"], ["id", "privacy-changes"], ["id", "privacy-contact"], ["href", "mailto:support@xcellhost.cloud"], ["aria-labelledby", "privacy-policy-help-title", 1, "privacy-policy-cta"], ["id", "privacy-policy-help-title"], ["aria-labelledby", "abuse-policy-title", 1, "privacy-policy-hero"], ["id", "abuse-policy-title"], ["aria-label", "Abuse policy highlights", 1, "policy-hero-benefits"], ["routerLink", "/company/abuse-policy", "fragment", "abuse-responsibility"], ["routerLink", "/company/abuse-policy", "fragment", "abuse-report"], ["routerLink", "/company/abuse-policy", "fragment", "abuse-enforcement"], ["aria-hidden", "true", 1, "policy-hero-art", "policy-hero-art--abuse"], [1, "abuse-radar"], [1, "policy-art-node", "abuse-node-one", "material-symbols-outlined"], [1, "policy-art-node", "abuse-node-two", "material-symbols-outlined"], [1, "abuse-monitor"], [1, "abuse-monitor-bar"], [1, "abuse-monitor-body"], [1, "abuse-signal"], [1, "abuse-status"], ["aria-label", "Abuse policy contents", 1, "privacy-policy-aside"], ["routerLink", "/company/abuse-policy", "fragment", "abuse-overview"], ["routerLink", "/company/abuse-policy", "fragment", "abuse-permitted"], ["routerLink", "/company/abuse-policy", "fragment", "abuse-prohibited"], ["routerLink", "/company/abuse-policy", "fragment", "abuse-contact"], ["href", "mailto:support@xcellhost.cloud?subject=Abuse%20Report"], ["id", "abuse-overview"], ["routerLink", "/company/acceptable-use-policy"], ["routerLink", "/company/terms-of-service"], ["id", "abuse-permitted"], ["id", "abuse-prohibited"], ["id", "abuse-responsibility"], ["id", "abuse-report"], ["id", "abuse-enforcement"], ["routerLink", "/company/refund-policy"], ["id", "abuse-contact"], ["aria-labelledby", "abuse-report-title", 1, "privacy-policy-cta"], ["id", "abuse-report-title"], ["aria-labelledby", "ekyc-title", 1, "ekyc-hero"], [1, "ekyc-hero-grid"], [1, "ekyc-hero-copy"], ["aria-label", "Breadcrumb", 1, "ekyc-breadcrumb"], ["id", "ekyc-title"], ["aria-label", "eKYC policy highlights", 1, "policy-hero-benefits"], ["routerLink", "/company/ekyc-verification", "fragment", "privacy-retention"], ["routerLink", "/company/ekyc-verification", "fragment", "legal-mandate"], ["routerLink", "/company/ekyc-verification", "fragment", "ekyc-faq"], ["aria-hidden", "true", 1, "policy-hero-art", "policy-hero-art--ekyc"], [1, "ekyc-art-orbit"], [1, "policy-art-node", "ekyc-node-one", "material-symbols-outlined"], [1, "policy-art-node", "ekyc-node-two", "material-symbols-outlined"], [1, "ekyc-id-card"], [1, "ekyc-id-head"], [1, "ekyc-id-body"], [1, "ekyc-id-photo"], [1, "ekyc-id-lines"], [1, "material-symbols-outlined", "ekyc-id-fingerprint"], [1, "ekyc-verified-badge"], [1, "ekyc-layout"], ["aria-label", "On this page", 1, "ekyc-index"], ["routerLink", "/company/ekyc-verification", "fragment", "about-ekyc"], ["routerLink", "/company/ekyc-verification", "fragment", "who-needs-ekyc"], ["routerLink", "/company/ekyc-verification", "fragment", "information-collected"], ["routerLink", "/company/ekyc-verification", "fragment", "accepted-documents"], ["routerLink", "/company/ekyc-verification", "fragment", "verification-process"], ["routerLink", "/company/ekyc-verification", "fragment", "non-compliance"], [1, "ekyc-content"], ["id", "about-ekyc", 1, "ekyc-section"], [1, "ekyc-section-number"], [1, "ekyc-section-copy"], [1, "ekyc-overline"], [1, "ekyc-note"], ["id", "legal-mandate", 1, "ekyc-section"], [1, "ekyc-law-card"], ["href", "https://www.cert-in.org.in/Directions70B.jsp", "target", "_blank", "rel", "noopener noreferrer"], ["id", "who-needs-ekyc", 1, "ekyc-section"], [1, "ekyc-service-grid"], ["id", "information-collected", 1, "ekyc-section"], [1, "ekyc-check-list"], ["id", "accepted-documents", 1, "ekyc-section"], [1, "ekyc-document-grid"], [1, "ekyc-document-card"], [1, "ekyc-document-card", "business"], [1, "ekyc-warning"], ["id", "verification-process", 1, "ekyc-section"], [1, "ekyc-process"], ["id", "privacy-retention", 1, "ekyc-section"], [1, "ekyc-retention-card"], [1, "ekyc-policy-links"], ["routerLink", "/company/privacy-policy"], ["id", "non-compliance", 1, "ekyc-section"], [1, "ekyc-actions-list"], ["id", "ekyc-faq", 1, "ekyc-section", "ekyc-faq-section"], [1, "ekyc-faq-list"], ["aria-labelledby", "ekyc-help-title", 1, "ekyc-cta"], ["id", "ekyc-help-title"], ["aria-labelledby", "people-banner-title", 1, "people-banner"], ["aria-hidden", "true", 1, "people-banner-shade"], [1, "wrap", "people-banner-inner"], [1, "people-banner-copy"], [1, "people-banner-eyebrow"], ["id", "people-banner-title"], ["aria-label", "Team strengths", 1, "people-banner-strengths"], [1, "people-banner-actions"], ["href", "#team-directory", 1, "btn", "btn-primary"], ["href", "#team-story", 1, "people-banner-story"], ["aria-hidden", "true", 1, "people-team-animation"], ["viewBox", "0 0 540 380", "fill", "none"], ["id", "teamShirt", "x2", ".9", "y2", "1"], ["stop-color", "#65c9ff"], ["offset", ".5", "stop-color", "#328de1"], ["offset", "1", "stop-color", "#1653a0"], ["id", "teamTeal", "x2", "1", "y2", "1"], ["stop-color", "#48d8d0"], ["offset", "1", "stop-color", "#146b9f"], ["id", "teamViolet", "x2", "1", "y2", "1"], ["stop-color", "#8996ff"], ["offset", "1", "stop-color", "#414a98"], ["id", "teamSkin", "x2", ".8", "y2", "1"], ["stop-color", "#ffe0bf"], ["offset", "1", "stop-color", "#d79874"], ["id", "teamGlass", "x2", "1", "y2", "1"], ["stop-color", "#23578d", "stop-opacity", ".95"], ["offset", "1", "stop-color", "#0a2447", "stop-opacity", ".85"], ["id", "teamGrid", "width", "24", "height", "24", "patternUnits", "userSpaceOnUse"], ["d", "M24 0H0V24", "stroke", "#70bfff", "stroke-opacity", ".07"], ["id", "teamGlow"], ["stop-color", "#188df4", "stop-opacity", ".35"], ["offset", "1", "stop-color", "#188df4", "stop-opacity", "0"], ["id", "teamScreen", "x2", "1", "y2", "1"], ["stop-color", "#154e8b"], ["offset", "1", "stop-color", "#08274f"], ["id", "teamDesk"], ["stop-color", "#439ce9"], ["offset", "1", "stop-color", "#164775"], ["cx", "270", "cy", "195", "rx", "252", "ry", "175", "fill", "url(#teamGlow)"], ["x", "35", "y", "14", "width", "470", "height", "330", "rx", "28", "fill", "url(#teamGrid)"], ["cx", "270", "cy", "177", "r", "137", "stroke", "#74c4ff", "stroke-opacity", ".1", "stroke-width", "22"], ["cx", "270", "cy", "177", "r", "147", "stroke", "#74c4ff", "stroke-opacity", ".17"], ["fill", "#85ddff", 1, "team-particles"], ["cx", "65", "cy", "172", "r", "3"], ["cx", "451", "cy", "218", "r", "3"], ["cx", "185", "cy", "38", "r", "2"], ["cx", "363", "cy", "35", "r", "2"], ["d", "M472 145V157M466 151H478M81 52V62M76 57H86", "stroke", "#9ddfff", "stroke-width", "1.5"], ["cx", "270", "cy", "182", "rx", "213", "ry", "128", "stroke", "#3fa9ff", "stroke-opacity", ".45", "stroke-dasharray", "4 9", 1, "team-network"], ["stroke", "#64c2ff", "stroke-opacity", ".5", "stroke-dasharray", "5 7", 1, "team-connections"], ["d", "M106 101L195 222M442 101L340 222M270 54V160"], [1, "team-cloud"], ["d", "M235 82C214 82 212 53 232 49C227 23 271 13 281 41C309 27 330 64 307 80Z", "fill", "#0d4580", "stroke", "#5cbeff", "stroke-width", "2"], ["d", "M249 55L259 65L279 45", "stroke", "#80e1ff", "stroke-width", "3", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "team-person", "person-center"], ["d", "M205 222V158Q205 129 238 124H301Q334 130 334 158V222", "fill", "url(#teamShirt)", "stroke", "#7bc6ff"], ["cx", "270", "cy", "99", "r", "27", "fill", "url(#teamSkin)"], ["d", "M243 98V88Q242 62 270 65Q296 64 297 88V97L287 91L281 79Q269 89 246 89Z", "fill", "#142942"], ["d", "M255 129L270 147L285 129M270 147V187", "stroke", "#b6defc", "stroke-width", "2"], ["d", "M259 99H261M279 99H281", "stroke", "#302c37", "stroke-width", "3", "stroke-linecap", "round"], ["d", "M263 112Q270 118 278 111", "stroke", "#ab6353", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M220 160L225 201M320 160L315 200", "stroke", "#d4f2ff", "stroke-opacity", ".3", "stroke-width", "2"], [1, "team-person", "person-left"], ["d", "M105 273V226Q105 193 143 189H172Q204 196 205 226V273", "fill", "url(#teamTeal)", "stroke", "#7ae4e0"], ["d", "M124 171V155Q123 125 154 126Q186 125 186 155V191H124Z", "fill", "#142b49"], ["cx", "156", "cy", "159", "rx", "23", "ry", "27", "fill", "url(#teamSkin)"], ["d", "M131 153Q137 125 159 129Q182 134 183 154Q166 152 154 138Q145 151 131 153Z", "fill", "#142b49"], ["d", "M133 216L157 241L179 215", "stroke", "#a4d7fb", "stroke-width", "2"], ["d", "M146 160H148M165 160H167", "stroke", "#302c37", "stroke-width", "2.5", "stroke-linecap", "round"], ["d", "M149 173Q156 179 164 172", "stroke", "#ab6353", "stroke-width", "2", "stroke-linecap", "round"], ["cx", "135", "cy", "172", "r", "2", "fill", "#ffce78"], ["cx", "178", "cy", "172", "r", "2", "fill", "#ffce78"], [1, "team-person", "person-right"], ["d", "M332 273V226Q334 194 368 189H396Q432 195 433 226V273", "fill", "url(#teamViolet)", "stroke", "#9ca9ff"], ["cx", "382", "cy", "158", "r", "27", "fill", "url(#teamSkin)"], ["d", "M355 157V147Q355 122 380 125Q410 121 410 149L404 154L398 140Q382 146 356 141Z", "fill", "#11283f"], ["d", "M361 156H377V166H361ZM387 156H403V166H387ZM377 160H387", "stroke", "#15395c", "stroke-width", "2"], ["d", "M375 176Q382 180 389 175", "stroke", "#785239", "stroke-width", "2", "stroke-linecap", "round"], ["d", "M368 193L382 211L396 193M382 211V248", "stroke", "#d6d8ff", "stroke-opacity", ".65", "stroke-width", "2"], ["cx", "271", "cy", "339", "rx", "195", "ry", "13", "fill", "#2296ff", "opacity", ".15"], ["d", "M73 275H468L485 291H57Z", "fill", "url(#teamDesk)", "stroke", "#7bc8ff"], ["d", "M86 292V337M451 292V337", "stroke", "#326899", "stroke-width", "9", "stroke-linecap", "round"], [1, "team-desk-plant"], ["d", "M98 269Q75 230 93 221Q110 232 106 252Q109 218 126 223Q134 241 111 262", "fill", "#39bfa6"], ["d", "M105 270V241", "stroke", "#82e8c8", "stroke-width", "2"], ["d", "M92 258H119L116 276H96Z", "fill", "#dae9f5"], ["d", "M403 252H423V274H403ZM423 256H428Q435 263 428 268H423", "fill", "#c7e6fc", "stroke", "#72b4e4", "stroke-width", "1.5"], [1, "team-laptop"], ["x", "189", "y", "203", "width", "164", "height", "91", "rx", "8", "fill", "url(#teamScreen)", "stroke", "#79bffa", "stroke-width", "2"], ["d", "M172 295H369L355 303H187Z", "fill", "#76b5e5"], ["x", "271", "y", "238", "text-anchor", "middle", 1, "team-brand"], ["d", "M212 254H237M247 254H309M212 264H268M277 264H324M212 274H244", "stroke", "#66cbff", "stroke-width", "3", "stroke-linecap", "round", 1, "team-code"], ["cx", "334", "cy", "215", "r", "3", "fill", "#4ade80", 1, "team-live"], [1, "team-badge", "badge-left"], ["x", "24", "y", "77", "width", "132", "height", "51", "rx", "12", "fill", "url(#teamGlass)", "stroke", "#79bded", "stroke-opacity", ".65"], ["d", "M40 105L47 112L59 95", "stroke", "#4ade80", "stroke-width", "2.5", "stroke-linecap", "round"], ["x", "68", "y", "100", 1, "team-label"], ["x", "68", "y", "115", 1, "team-detail"], [1, "team-badge", "badge-right"], ["x", "388", "y", "76", "width", "128", "height", "51", "rx", "12", "fill", "url(#teamGlass)", "stroke", "#79bded", "stroke-opacity", ".65"], ["d", "M411 85L403 99H412L408 115L424 96H415L418 85Z", "fill", "#ffb347"], ["x", "432", "y", "100", 1, "team-label"], ["x", "432", "y", "115", 1, "team-detail"], ["x", "270", "y", "368", "text-anchor", "middle", 1, "team-caption"], ["aria-label", "XcellHost trust points", 1, "team-trust-strip"], [1, "wrap"], ["id", "team-story", 1, "team-founder-hero"], ["aria-hidden", "true", 1, "team-founder-orb", "team-founder-orb-one"], ["aria-hidden", "true", 1, "team-founder-orb", "team-founder-orb-two"], [1, "wrap", "team-founder-hero-grid"], [1, "team-founder-photo-column"], [1, "team-founder-portrait"], ["aria-hidden", "true", 1, "team-founder-portrait-ring"], ["aria-hidden", "true", 1, "team-founder-dots"], ["src", "/assets/images/website-photo-frame-samir-jhaveri-1.png", "alt", "Dr. Samir Jhaveri portrait", "loading", "eager"], [1, "team-portrait-footer"], ["href", "https://www.linkedin.com/in/samirjhaveri-xcellhost/", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "View Dr. Samir Jhaveri on LinkedIn (opens in a new tab)", 1, "team-founder-linkedin"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["fill", "currentColor", "d", "M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.58 1.96 3.58 4.5v5.28Z"], [1, "team-founder-content"], [1, "team-founder-eyebrow"], [1, "team-founder-company"], ["aria-label", "Areas of expertise", 1, "team-capabilities"], [1, "team-founder-lead"], [1, "team-founder-story"], [1, "team-founder-story", "team-founder-story-last"], [1, "team-impact-grid"], ["href", "/assets/images/ai-certification.jpeg", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "View AI Honorary Doctorate certificate (opens in a new tab)", 1, "team-certificate-link"], [1, "company-founder-section"], [1, "wrap", "company-founder-grid"], [1, "company-founder-visual"], [1, "company-founder-copy"], [1, "company-founder-highlights"], [1, "company-founder-summary"], ["id", "team-directory", "aria-labelledby", "team-directory-title", 1, "team-directory"], [1, "team-section-heading"], [1, "team-section-label"], ["id", "team-directory-title"], ["role", "tablist", "aria-label", "Team departments", 1, "team-tabs"], ["type", "button", "role", "tab", "aria-controls", "team-members-panel", 3, "id", "tabIndex"], ["id", "team-members-panel", "role", "tabpanel", "tabindex", "0", 1, "team-members-panel"], [1, "team-group-heading"], [1, "team-group-label"], ["aria-hidden", "true", 1, "material-symbols-outlined", "team-label-icon"], ["aria-hidden", "true", 1, "team-group-rule"], [1, "team-group-count"], [1, "team-portrait-grid"], [1, "team-portrait-card"], [1, "team-section", "team-values"], [1, "team-grid", "team-grid-four"], [1, "team-value-card"], [1, "team-section", "team-commitment"], [1, "wrap", "team-commitment-grid"], [1, "team-commitment-copy"], [1, "team-stats-grid"], [1, "team-stat-card"], [1, "team-contact-band"], [1, "wrap", "team-contact-grid"], [1, "team-contact-copy", "team-support-stripe"], ["routerLink", "/contact", 1, "btn", "btn-primary"], ["routerLink", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha", "loading", "lazy", 1, "pp-cta-buddha"], [1, "team-contact-cards"], ["target", "_blank", "rel", "noopener", 1, "team-contact-card", 3, "href"], ["type", "button", "role", "tab", "aria-controls", "team-members-panel", 3, "click", "keydown", "id", "tabIndex"], [1, "team-portrait-image"], ["width", "320", "height", "320", "loading", "lazy", "decoding", "async", 3, "src", "alt"], ["aria-hidden", "true", 1, "team-portrait-placeholder"], [1, "team-portrait-caption"], [1, "team-role-badge"], ["viewBox", "0 0 160 160", "fill", "currentColor"], ["cx", "80", "cy", "55", "r", "29"], ["d", "M24 150v-18a56 56 0 0 1 112 0v18Z"], ["aria-labelledby", "partnerOverviewTitle", 1, "partner-overview-hero"], ["aria-labelledby", "certHeroTitle", 1, "cert-hero"], ["aria-labelledby", "awardsHeroTitle", 1, "awards-hero"], ["aria-labelledby", "apply-job-hero-title", 1, "career-hero", "apply-job-hero"], [1, "company-body", 3, "id"], [1, "wrap", "company-wrap"], ["aria-hidden", "true", 1, "partner-hero-glow"], ["aria-hidden", "true", 1, "partner-hero-network"], ["aria-hidden", "true", 1, "partner-hero-orbit", "partner-orbit-one"], ["aria-hidden", "true", 1, "partner-hero-orbit", "partner-orbit-two"], ["aria-hidden", "true", 1, "partner-hero-scan"], ["xhHeroNet", "", "aria-hidden", "true", 1, "partner-hero-net"], [1, "wrap", "partner-hero-grid", "partner-model-hero-grid"], [1, "partner-hero-copy"], [1, "pp-crumb"], [1, "partner-hero-kicker"], ["id", "partnerOverviewTitle"], [1, "partner-hero-spotlight"], [1, "partner-hero-actions"], ["routerLink", "/contact", 1, "partner-primary-action"], ["href", "#partnership-types-title", 1, "partner-secondary-action"], ["aria-label", "Partner programme highlights", 1, "partner-hero-stats"], [1, "partner-hero-live"], ["aria-hidden", "true", 1, "partner-hero-visual"], [1, "partner-visual-stage"], [1, "partner-program-visual-label"], ["aria-hidden", "true", 1, "partner-program-icons"], ["viewBox", "0 0 24 24"], ["d", "m8.5 12.5 2 2a1.4 1.4 0 0 0 2 0l3.8-3.8M7.2 7.8l2.2-2.2a2 2 0 0 1 2.8 0l1 1M3 8l3-3 3 3-3 3-3-3Zm12 0 3-3 3 3-3 3-3-3Z"], ["d", "m6.8 10.2 5.4 5.4a1.4 1.4 0 0 0 2 0l.4-.4a1.4 1.4 0 0 0 0-2l-3.1-3.1"], ["d", "M9 4h6l-1 4H10L9 4Z"], ["d", "M10 8c-3 2.2-5 5.1-5 8 0 3 2.7 4 7 4s7-1 7-4c0-2.9-2-5.8-5-8"], ["d", "M9.5 13h5M12 11v6M9.5 15h5"], [1, "partner-float-node", "node-one"], [1, "partner-float-node", "node-two"], [1, "partner-float-node", "node-three"], [1, "partner-pulse-ring"], ["src", "/assets/images/partner-overview-growth-hero.png", "alt", "", "loading", "eager"], ["xhHeroNet", "", "aria-hidden", "true", 1, "cert-hero-net"], ["aria-hidden", "true", 1, "cert-world"], ["aria-hidden", "true", 1, "cert-orbit", "cert-orbit-one"], ["aria-hidden", "true", 1, "cert-orbit", "cert-orbit-two"], [1, "wrap", "cert-hero-grid"], [1, "cert-hero-copy"], [1, "cert-kicker"], ["id", "certHeroTitle"], [1, "cert-hero-points"], [1, "cert-hero-actions"], ["href", "#certifications-title", 1, "primary"], ["href", "mailto:sales@xcellhost.cloud?subject=XcellHost%20certification%20profile"], ["href", "mailto:sales@xcellhost.cloud?subject=XcellHost%20compliance%20enquiry", 1, "talk"], [1, "cert-ask-ai"], [1, "cert-ai-label"], ["aria-label", "Ask ChatGPT", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64", "alt", ""], ["aria-label", "Ask Perplexity", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64", "alt", ""], ["aria-label", "Ask Claude", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "https://www.google.com/s2/favicons?domain=claude.ai&sz=64", "alt", ""], ["aria-label", "Ask Gemini", "target", "_blank", "rel", "noopener noreferrer", 3, "href"], ["src", "https://www.google.com/s2/favicons?domain=gemini.google.com&sz=64", "alt", ""], ["aria-hidden", "true", 1, "cert-hero-visual", "cert-new-animation"], ["viewBox", "0 0 520 410", "fill", "none"], ["id", "credentialPaper", "x2", "1", "y2", "1"], ["stop-color", "#fff"], ["offset", "1", "stop-color", "#dcecff"], ["id", "credentialShield", "x2", ".8", "y2", "1"], ["stop-color", "#5dd9ff"], ["offset", ".5", "stop-color", "#2485eb"], ["offset", "1", "stop-color", "#5145d6"], ["id", "credentialGold", "x2", "1", "y2", "1"], ["stop-color", "#fff0b3"], ["offset", ".5", "stop-color", "#ffc665"], ["offset", "1", "stop-color", "#d58e2b"], ["id", "credentialGlow"], ["stop-color", "#3caaff", "stop-opacity", ".3"], ["offset", "1", "stop-color", "#3caaff", "stop-opacity", "0"], ["cx", "262", "cy", "205", "rx", "238", "ry", "185", "fill", "url(#credentialGlow)"], ["cx", "260", "cy", "208", "r", "170", "stroke", "#64bdff", "stroke-opacity", ".35", "stroke-dasharray", "3 10", 1, "credential-orbit"], ["cx", "260", "cy", "208", "r", "143", "stroke", "#64bdff", "stroke-opacity", ".12"], ["transform", "translate(143 57) rotate(7 124 143)"], ["width", "248", "height", "286", "rx", "18", "fill", "#3972a4", "stroke", "#72b3e4", "stroke-opacity", ".5"], [1, "credential-document"], ["x", "127", "y", "52", "width", "248", "height", "286", "rx", "18", "fill", "url(#credentialPaper)", "stroke", "#b6dcff"], ["x", "141", "y", "66", "width", "220", "height", "258", "rx", "10", "stroke", "#a5c9eb"], ["x", "251", "y", "96", "text-anchor", "middle", 1, "credential-document-heading"], ["x", "251", "y", "116", "text-anchor", "middle", 1, "credential-document-subtitle"], ["d", "M158 130H344", "stroke", "#c0d6eb"], ["d", "M165 236H316M165 249H293M165 262H305", "stroke", "#a9c4e0", "stroke-width", "5", "stroke-linecap", "round", 1, "credential-document-lines"], ["d", "M165 296Q177 274 184 294Q195 273 199 294L219 291", "stroke", "#5683b1", "stroke-width", "2", "stroke-linecap", "round"], ["x", "165", "y", "312", 1, "credential-signature-label"], [1, "credential-seal"], ["d", "M317 283L310 321L326 313L340 324L333 282", "fill", "#f5b74f"], ["cx", "325", "cy", "285", "r", "23", "fill", "url(#credentialGold)"], ["cx", "325", "cy", "285", "r", "17", "stroke", "#a87524", "stroke-opacity", ".6", "stroke-dasharray", "2 3"], ["d", "M317 285L323 291L334 279", "stroke", "#94651f", "stroke-width", "2.5", "stroke-linecap", "round"], [1, "credential-main-shield"], ["d", "M250 137L293 154L288 194Q281 216 250 232Q219 216 212 194L207 154Z", "fill", "url(#credentialShield)", "stroke", "#92d9ff", "stroke-width", "1.5"], ["cx", "250", "cy", "179", "r", "23", "stroke", "#e2f8ff", "stroke-width", "1.5"], ["d", "M236 178L247 189L266 167", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "credential-check"], [1, "credential-badge", "badge-security"], ["x", "16", "y", "139", "width", "139", "height", "59", "rx", "13", "fill", "#10355f", "stroke", "#6fb7e9"], ["cx", "39", "cy", "161", "r", "5", "fill", "#60e3b3"], ["x", "52", "y", "165", 1, "credential-badge-title"], ["x", "32", "y", "184", 1, "credential-badge-caption"], [1, "credential-badge", "badge-service"], ["x", "348", "y", "215", "width", "156", "height", "59", "rx", "13", "fill", "#10355f", "stroke", "#6fb7e9"], ["cx", "371", "cy", "237", "r", "5", "fill", "#60e3b3"], ["x", "384", "y", "241", 1, "credential-badge-title"], ["x", "364", "y", "260", 1, "credential-badge-caption"], ["stroke", "#89d6ff", "stroke-width", "2", "stroke-linecap", "round", 1, "credential-sparkles"], ["d", "M75 66V78M69 72H81M437 113V127M430 120H444M90 301V311M85 306H95"], ["cx", "415", "cy", "326", "r", "3", "fill", "#ffc869", "stroke", "none"], ["cx", "374", "cy", "49", "r", "3", "fill", "#89d6ff", "stroke", "none"], ["x", "260", "y", "391", "text-anchor", "middle", 1, "credential-footer-label"], ["aria-hidden", "true", 1, "awards-hero-glow"], ["aria-hidden", "true", 1, "awards-hero-dots"], [1, "wrap", "awards-hero-grid"], [1, "awards-hero-copy"], [1, "awards-hero-kicker"], ["id", "awardsHeroTitle"], [1, "awards-hero-line"], [1, "awards-hero-actions", "awards-product-actions"], ["href", "#awards-title", 1, "awards-primary-action"], ["routerLink", "/company/certifications-awards", 1, "awards-secondary-action"], ["href", "#awards-title", 1, "awards-secondary-action"], ["routerLink", "/contact", 1, "awards-secondary-action"], ["routerLink", "/contact", 1, "awards-talk-action"], [1, "awards-ask-ai"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Ask ChatGPT", 3, "href"], ["href", "https://grok.com/?q=XcellHost%20Awards", "target", "_blank", "rel", "noopener noreferrer", "aria-label", "Ask Grok"], ["src", "https://www.google.com/s2/favicons?domain=grok.com&sz=64", "alt", ""], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Ask Claude", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Ask Gemini", 3, "href"], ["target", "_blank", "rel", "noopener noreferrer", "aria-label", "Ask Perplexity", 3, "href"], ["aria-hidden", "true", 1, "awards-hero-visual", "awards-animation"], ["viewBox", "0 0 520 430", "fill", "none"], ["id", "awardCrystal", "x1", "202", "y1", "76", "x2", "329", "y2", "265", "gradientUnits", "userSpaceOnUse"], ["stop-color", "#e9fbff"], ["offset", ".35", "stop-color", "#62b4f4"], ["offset", ".6", "stop-color", "#e0f5ff"], ["offset", "1", "stop-color", "#3184c6"], ["id", "awardGold"], ["stop-color", "#bb7b22"], ["offset", ".25", "stop-color", "#ffeab0"], ["offset", ".55", "stop-color", "#e5a43d"], ["offset", ".8", "stop-color", "#ffdf8c"], ["offset", "1", "stop-color", "#aa701c"], ["id", "awardBase", "x2", "1", "y2", "1"], ["stop-color", "#163e70"], ["offset", ".5", "stop-color", "#3084bc"], ["offset", "1", "stop-color", "#071c38"], ["id", "awardGlow"], ["stop-color", "#258dfc", "stop-opacity", ".35"], ["offset", "1", "stop-color", "#258dfc", "stop-opacity", "0"], ["id", "awardCrystalClip"], ["d", "M260 63L325 133L298 257L260 287L222 257L195 133Z"], ["id", "awardLeaf", "d", "M0 0Q-30 -1 -29 -20Q-4 -21 0 0Z", "fill", "url(#awardGold)"], ["cx", "260", "cy", "215", "rx", "246", "ry", "197", "fill", "url(#awardGlow)"], ["cx", "260", "cy", "215", "r", "175", "stroke", "#7ecbff", "stroke-opacity", ".3", "stroke-dasharray", "3 10", 1, "award-new-orbit"], ["cx", "260", "cy", "215", "r", "139", "stroke", "#7ecbff", "stroke-opacity", ".15"], ["cx", "260", "cy", "384", "rx", "143", "ry", "17", "fill", "#389efe", "opacity", ".2", 1, "award-ground-glow"], [1, "award-animated-trophy"], ["stroke", "#ffdc86", "stroke-width", "2", 1, "award-laurel"], ["d", "M242 327Q142 291 154 175M278 327Q378 291 366 175"], ["stroke", "none"], ["href", "#awardLeaf", "transform", "translate(217 313) rotate(-12)"], ["href", "#awardLeaf", "transform", "translate(193 292) rotate(7)"], ["href", "#awardLeaf", "transform", "translate(172 266) rotate(22)"], ["href", "#awardLeaf", "transform", "translate(160 237) rotate(36)"], ["href", "#awardLeaf", "transform", "translate(154 207) rotate(52)"], ["transform", "translate(520 0) scale(-1 1)"], ["d", "M242 269H278L284 325H236Z", "fill", "url(#awardGold)", "stroke", "#fbe3a0"], ["d", "M260 63L325 133L298 257L260 287L222 257L195 133Z", "fill", "url(#awardCrystal)", "stroke", "#addefc", "stroke-width", "1.5"], ["d", "M260 63L239 134L260 287L283 134ZM195 133L239 134L222 257M325 133L283 134L298 257", "stroke", "#e8faff", "stroke-opacity", ".7"], ["d", "M260 64L239 134L195 133Z", "fill", "#fff", "opacity", ".42"], ["d", "M283 134L325 133L260 63Z", "fill", "#10356a", "opacity", ".35"], ["clip-path", "url(#awardCrystalClip)"], ["d", "M145 55L165 55L315 310L295 310Z", "fill", "white", "opacity", ".45", 1, "award-crystal-shine"], ["cx", "260", "cy", "176", "r", "29", "fill", "#164e8b", "fill-opacity", ".7", "stroke", "#e5f6ff"], ["d", "M260 153L266 166L280 168L270 178L273 193L260 186L247 193L250 178L240 168L254 166Z", "fill", "url(#awardGold)"], ["d", "M220 319H300L314 345H206Z", "fill", "url(#awardGold)", "stroke", "#e4c57d"], ["d", "M206 345H314L325 379H195Z", "fill", "url(#awardBase)", "stroke", "#6ca9d6"], ["d", "M199 370H321V379H199Z", "fill", "url(#awardGold)"], ["x", "260", "y", "363", "text-anchor", "middle", 1, "award-trophy-brand"], [1, "award-new-badge", "award-badge-left"], ["x", "20", "y", "89", "width", "135", "height", "43", "rx", "12", "fill", "#11365d", "stroke", "#5696c9"], ["x", "87", "y", "115", "text-anchor", "middle", 1, "award-badge-text"], [1, "award-new-badge", "award-badge-right"], ["x", "368", "y", "120", "width", "135", "height", "43", "rx", "12", "fill", "#11365d", "stroke", "#5696c9"], ["x", "435", "y", "146", "text-anchor", "middle", 1, "award-badge-text"], ["stroke", "#ffdb8a", "stroke-width", "2", "stroke-linecap", "round", 1, "award-star-sparkles"], ["d", "M355 58V76M346 67H364M97 244V256M91 250H103M409 281V295M402 288H416"], ["cx", "187", "cy", "48", "r", "2", "fill", "#ffdb8a"], ["cx", "442", "cy", "213", "r", "2", "fill", "#ffdb8a"], ["x", "260", "y", "420", "text-anchor", "middle", 1, "award-animation-caption"], ["aria-hidden", "true", 1, "career-hero-orb"], [1, "wrap", "career-hero-inner"], [1, "career-hero-copy"], [1, "career-hero-eyebrow"], ["id", "apply-job-hero-title"], [1, "career-hero-tagline"], [1, "apply-job-hero-actions"], ["href", "#xh-jobs-title", 1, "apply-job-primary"], ["routerLink", "/company/careers-overview", 1, "apply-job-secondary"], [1, "career-hero-visual", "apply-job-hero-visual"], ["src", "/assets/images/apply-for-job-hero.png", "alt", "XcellHost verified jobs and job alerts", "width", "2170", "height", "725", "fetchpriority", "high", 1, "career-hero-photo"], ["aria-labelledby", "career-hero-title", 1, "career-hero", "career-overview-hero"], ["id", "career-hero-title"], ["aria-label", "Grow with XcellHost", 1, "career-hero-benefits"], [1, "career-hero-actions"], ["routerLink", "/company/apply-for-job", 1, "career-hero-primary"], ["routerLink", "/company/careers-overview", "fragment", "career-life-gallery", 1, "career-hero-secondary"], [1, "career-hero-visual"], ["src", "/assets/images/career-hero-team-cutout.png", "alt", "Three colleagues sharing ideas around a laptop", "width", "1450", "height", "1086", "fetchpriority", "high", 1, "career-hero-photo"], ["aria-label", "XcellHost business impact", 1, "career-impact-strip"], [1, "career-impact-inner"], [1, "career-impact-item"], ["aria-labelledby", "career-why-title", 1, "career-why"], [1, "career-why-inner"], [1, "career-why-intro"], ["id", "career-why-title"], ["routerLink", "/company/careers-overview", "fragment", "career-life-gallery"], [1, "career-why-cards"], [1, "career-why-card"], ["aria-labelledby", "vendorHeroTitle", 1, "vendor-hero"], [1, "pp-hero", "company-hero"], [1, "wrap", "vendor-hero-grid"], [1, "vendor-hero-copy"], ["aria-label", "Breadcrumb", 1, "vendor-breadcrumb"], [1, "vendor-eyebrow"], ["id", "vendorHeroTitle"], ["href", "#vendor-directory", 1, "btn", "btn-primary", "vendor-explore"], [1, "vendor-hero-facts"], ["aria-hidden", "true", 1, "vendor-ecosystem"], ["viewBox", "0 0 520 380", "fill", "none", 1, "vendor-network-lines"], ["cx", "260", "cy", "190", "r", "133", "stroke", "#67baff", "stroke-opacity", ".25", "stroke-dasharray", "3 9"], ["cx", "260", "cy", "190", "r", "88", "stroke", "#67baff", "stroke-opacity", ".12"], ["stroke", "#56baff", "stroke-width", "1.5", "stroke-dasharray", "5 9", 1, "vendor-data-flow"], ["d", "M260 190L112 66M260 190L408 66M260 190L85 190M260 190L435 190M260 190L112 314M260 190L408 314"], [1, "vendor-network-hub"], ["src", "/assets/images/xcellhost-logo.png", "alt", ""], [1, "vendor-orbit-card", "orbit-microsoft"], ["src", "/assets/images/vendor-partners/02-microsoft-partner.png", "alt", ""], [1, "vendor-orbit-card", "orbit-aws"], ["src", "/assets/images/vendor-partners/21-aws.png", "alt", ""], [1, "vendor-orbit-card", "orbit-azure"], ["src", "/assets/images/vendor-partners/01-azure.png", "alt", ""], [1, "vendor-orbit-card", "orbit-google"], ["src", "/assets/images/vendor-partners/41-google-cloud-platform.png", "alt", ""], [1, "vendor-orbit-card", "orbit-acronis"], ["src", "/assets/images/vendor-partners/80-acronis-3.png", "alt", ""], [1, "vendor-orbit-card", "orbit-oracle"], ["src", "/assets/images/vendor-partners/61-oracle-cloud-infrastructure.png", "alt", ""], [1, "vendor-network-caption"], [1, "company-orb", "company-orb-one"], [1, "company-orb", "company-orb-two"], [1, "company-kicker"], [1, "pp-tagline"], [1, "company-intro"], ["aria-labelledby", "career-life-title", 1, "career-life"], ["aria-label", "Illustrative employee testimonials", 1, "career-stories"], ["aria-labelledby", "career-next-step-title", 1, "career-next-step"], ["aria-labelledby", "career-values-title", 1, "career-values"], ["id", "vendor-directory", "aria-labelledby", "vendorPartnersTitle", 1, "vendor-partners"], ["aria-labelledby", "certifications-title", 1, "recognition-section", "certifications-section"], ["aria-labelledby", "awards-title", 1, "recognition-section", "awards-section"], ["aria-labelledby", "certification-cta-title", 1, "pp-cta", "certification-buddha-strip"], ["aria-labelledby", "career-cta-title", 1, "pp-cta", "certification-buddha-strip"], [1, "company-cta"], ["id", "career-life-title"], ["id", "career-life-gallery", "aria-live", "polite", 1, "career-life-grid"], [1, "career-life-card"], ["role", "group", "aria-label", "Choose workplace photos", 1, "career-life-dots"], ["type", "button", "aria-controls", "career-life-gallery", 3, "is-active"], ["width", "680", "height", "510", "loading", "lazy", "decoding", "async", 1, "career-life-photo", 3, "src", "alt"], ["type", "button", "aria-controls", "career-life-gallery", 3, "click"], [1, "career-story-grid"], [1, "career-story-card"], [1, "career-story-label"], [1, "career-story-top"], ["width", "82", "height", "82", "loading", "lazy", "decoding", "async", 3, "src", "alt"], [1, "career-story-role"], [1, "career-switch-banner"], ["aria-hidden", "true", 1, "career-switch-photo"], ["src", "/assets/images/career-hero-team.png", "alt", "", "loading", "lazy", "decoding", "async"], [1, "career-switch-copy"], ["id", "career-next-step-title"], [1, "career-switch-actions"], [1, "career-switch-features"], ["routerLink", "/company/apply-for-job"], [1, "career-process-perks"], [1, "career-process"], [1, "career-block-label"], [1, "career-process-list"], [1, "career-perks"], [1, "career-perks-grid"], ["id", "career-values-title"], [1, "career-values-grid"], [1, "career-values-card"], [1, "career-values-note"], [1, "vendor-partners-heading"], ["id", "vendorPartnersTitle"], [1, "vendor-directory-toolbar"], [1, "vendor-search"], ["type", "search", "aria-label", "Search vendor partners", "placeholder", "Search partners or categories\u2026", 3, "input", "value"], [1, "vendor-category-list"], [1, "vendor-category", 3, "vendor-category-badges"], ["role", "status", 1, "vendor-empty"], [1, "vendor-category"], [3, "id"], [1, "vendor-logo-grid"], [1, "vendor-logo-card"], [1, "vendor-logo-image"], ["loading", "lazy", 3, "src", "alt"], ["type", "button", 3, "click"], [1, "recognition-heading", "certification-heading"], ["id", "certifications-title"], [1, "certification-tabs-layout"], ["role", "tablist", "aria-label", "Certification categories", 1, "certification-tabs"], ["type", "button", "role", "tab", 3, "is-active"], ["type", "button", "role", "tab", 3, "click"], [1, "certification-tab-label"], ["role", "tabpanel", 1, "certificate-card", "certification-tab-panel", 3, "id"], ["target", "_blank", "rel", "noopener noreferrer", 3, "href"], [1, "certificate-text-preview"], [1, "recognition-card-copy"], [1, "certificate-image-wrap"], ["loading", "eager", 3, "src", "alt"], [1, "recognition-heading"], ["id", "awards-title"], [1, "award-tabs-layout"], ["role", "tablist", "aria-label", "Awards by year", 1, "award-tabs"], ["role", "tabpanel", 1, "award-year-panel", 3, "id"], [1, "award-year-heading"], [1, "award-grid"], [1, "award-card"], ["target", "_blank", "rel", "noopener noreferrer", 1, "award-image-wrap", 3, "href"], [1, "company-card-grid"], [1, "company-card"], [1, "company-section", 3, "company-section-tint"], ["aria-hidden", "true", 1, "company-icon"], [1, "company-section"], [1, "company-section-number"], ["id", "certification-cta-title"], [1, "certification-buddha-actions"], ["routerLink", "/contact", 1, "btn", "btn-ghost"], ["href", "https://wa.me/918657032540", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost"], ["href", "mailto:sales@xcellhost.com?subject=Certification%20documents%20enquiry", 1, "btn", "btn-ghost"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha", "width", "104", "height", "104", "loading", "lazy", 1, "pp-cta-buddha"], ["id", "career-cta-title"], ["routerLink", "/company/apply-for-job", 1, "btn", "btn-primary"]], template: function CompanyPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CompanyPage_Conditional_0_Template, 5, 1);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.page()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink, HeroNetDirective, ResellerProgramContentComponent, TeamStructureComponent, WhyXcellhostReasonsComponent, ZohoJobListingComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: contents;\n}\n.career-hero[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      110deg,\n      #031b3d,\n      #082c5c 58%,\n      #06336c);\n  color: #fff;\n}\n.career-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  background:\n    radial-gradient(\n      circle at 67% 20%,\n      #1785dc26,\n      transparent 34%);\n}\n.career-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  right: -210px;\n  bottom: -240px;\n  width: 400px;\n  height: 540px;\n  border: 1px solid #38baff55;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      145deg,\n      #1684e8b3,\n      #062454e6);\n  transform: rotate(30deg);\n}\n.career-hero-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  top: -170px;\n  left: 42%;\n  width: 300px;\n  height: 270px;\n  border: 1px solid #36c7ff55;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 90% 80%,\n      #04aef04d,\n      #165cb526 60%);\n  box-shadow: inset -8px -5px 24px #0aaaf01f;\n}\n.career-hero-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);\n  align-items: center;\n  gap: clamp(30px, 4vw, 64px);\n  min-height: clamp(440px, 29vw, 540px);\n  padding-block: 38px;\n}\n.career-hero-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n.career-hero-visual[_ngcontent-%COMP%] {\n  align-self: stretch;\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 24px;\n  box-shadow: 0 24px 55px #00142d73;\n}\n.career-hero-photo[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 80% center;\n}\n.career-hero-eyebrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin: 0 0 14px;\n  color: #87bff4;\n  font-size: clamp(11px, .9vw, 15px);\n  font-weight: 700;\n  letter-spacing: .32em;\n  text-transform: uppercase;\n}\n.career-hero-eyebrow[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #23b9f3,\n      transparent);\n}\n.career-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font: 800 clamp(36px, 3.4vw, 64px)/1.06 var(--disp);\n  letter-spacing: -.035em;\n}\n.career-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #2bc4ff;\n  background:\n    linear-gradient(\n      110deg,\n      #64dcff,\n      #009cf4);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.career-hero-tagline[_ngcontent-%COMP%] {\n  max-width: 580px;\n  margin: 14px 0 0;\n  color: #c8d9ed;\n  font-size: clamp(15px, 1.15vw, 21px);\n  line-height: 1.45;\n}\n.apply-job-hero[_ngcontent-%COMP%] {\n  min-height: 540px;\n  background:\n    linear-gradient(\n      110deg,\n      #031b3d,\n      #082c5c 58%,\n      #06336c);\n}\n.apply-job-hero[_ngcontent-%COMP%]   .career-hero-inner[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, .95fr) minmax(440px, 1.05fr);\n  min-height: 540px;\n  padding-block: 48px;\n}\n.apply-job-hero[_ngcontent-%COMP%]   .career-hero-copy[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.apply-job-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: clamp(34px, 2.8vw, 50px);\n  line-height: 1.08;\n}\n.apply-job-hero[_ngcontent-%COMP%]   .career-hero-tagline[_ngcontent-%COMP%] {\n  max-width: 560px;\n  font-size: clamp(14px, 1vw, 17px);\n  line-height: 1.55;\n}\n.apply-job-hero-visual[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  aspect-ratio: 1009 / 725;\n  align-self: center;\n  border: 1px solid rgba(120, 190, 255, .2);\n  border-radius: 24px;\n  background: #0754ad;\n  box-shadow: 0 28px 65px rgba(0, 15, 42, .48);\n}\n.apply-job-hero-visual[_ngcontent-%COMP%]   .career-hero-photo[_ngcontent-%COMP%] {\n  object-fit: cover;\n  object-position: right center;\n}\n.apply-job-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 28px;\n}\n.apply-job-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 800;\n  text-decoration: none;\n  transition:\n    transform .2s ease,\n    background .2s ease,\n    border-color .2s ease;\n}\n.apply-job-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.apply-job-primary[_ngcontent-%COMP%] {\n  background: #ff8c1a;\n  box-shadow: 0 14px 28px -14px rgba(255, 140, 26, .85);\n}\n.apply-job-primary[_ngcontent-%COMP%]:hover {\n  background: #ed7b0b;\n}\n.apply-job-secondary[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .32) !important;\n  background: rgba(255, 255, 255, .07);\n}\n.apply-job-secondary[_ngcontent-%COMP%]:hover {\n  border-color: rgba(255, 255, 255, .55) !important;\n  background: rgba(255, 255, 255, .12);\n}\n.career-hero-benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  max-width: 570px;\n  margin: 24px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.career-hero-benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  font-size: clamp(12px, .85vw, 15px);\n  font-weight: 600;\n  line-height: 1.25;\n}\n.career-hero-benefits[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: clamp(50px, 3.5vw, 66px);\n  height: clamp(50px, 3.5vw, 66px);\n  border: 1px solid #58beed80;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1d75bc33,\n      #07285880);\n  box-shadow: inset 3px 0 14px #4bc7ff12;\n  color: #35c4ff;\n  font-size: clamp(26px, 2vw, 36px);\n  font-variation-settings: "FILL" 1;\n}\n@media (max-width: 1100px) {\n  .career-hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr) minmax(0, .95fr);\n    gap: 28px;\n  }\n  .career-hero[_ngcontent-%COMP%]::after {\n    right: -300px;\n  }\n}\n@media (max-width: 760px) {\n  .career-hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 30px;\n    min-height: 0;\n    padding-block: 40px;\n  }\n  .apply-job-hero[_ngcontent-%COMP%]   .career-hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .apply-job-hero[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .apply-job-hero[_ngcontent-%COMP%]   .career-hero-inner[_ngcontent-%COMP%] {\n    min-height: 0;\n    padding-block: 42px;\n  }\n  .apply-job-hero-visual[_ngcontent-%COMP%] {\n    height: auto;\n    aspect-ratio: 1009 / 725;\n  }\n  .career-hero-copy[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 560px;\n  }\n  .career-hero-visual[_ngcontent-%COMP%] {\n    width: 100%;\n    height: min(68vw, 340px);\n    border-radius: 18px;\n  }\n  .career-hero-photo[_ngcontent-%COMP%] {\n    object-position: 80% center;\n  }\n  .career-hero[_ngcontent-%COMP%]::before {\n    background:\n      radial-gradient(\n        circle at 85% 18%,\n        #1785dc2e,\n        transparent 40%);\n  }\n  .career-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(36px, 7.7vw, 58px);\n  }\n  .apply-job-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(31px, 8vw, 40px);\n  }\n  .career-hero-tagline[_ngcontent-%COMP%] {\n    max-width: 440px;\n  }\n  .apply-job-hero[_ngcontent-%COMP%]   .career-hero-tagline[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .career-hero-benefits[_ngcontent-%COMP%] {\n    max-width: 440px;\n    margin-top: 28px;\n    gap: 8px;\n  }\n  .career-hero-orb[_ngcontent-%COMP%] {\n    left: auto;\n    right: -90px;\n  }\n  .career-hero[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n}\n.career-impact-strip[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0;\n  border-bottom: 1px solid #e1e6ee;\n  background: #fff;\n}\n.career-impact-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  width: min(100%, 1440px);\n  min-height: 100px;\n  box-sizing: border-box;\n  margin-inline: auto;\n  padding: 20px 24px;\n  border: 0;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: none;\n}\n.career-impact-item[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  color: #061b3c;\n  transition: transform .25s ease;\n}\n.career-impact-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.career-impact-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n}\n.career-impact-item[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #2878ff;\n  font-size: 48px;\n  font-variation-settings: "wght" 350;\n  filter: drop-shadow(0 6px 12px rgba(40, 120, 255, .14));\n}\n.career-impact-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #2878ff;\n  font: 700 clamp(32px, 2.6vw, 43px)/1 var(--disp);\n  letter-spacing: -.025em;\n}\n.career-impact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-symbols-outlined) {\n  display: block;\n  margin-top: 5px;\n  color: #050d1c;\n  font-size: clamp(11px, .9vw, 14px);\n  font-weight: 500;\n  line-height: 1.25;\n  white-space: nowrap;\n}\n@media (max-width: 900px) {\n  .career-impact-inner[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 24px 16px;\n  }\n}\n@media (max-width: 540px) {\n  .career-impact-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 24px 20px;\n  }\n  .career-impact-item[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .career-impact-item[_ngcontent-%COMP%]:first-child {\n    padding-left: 61px;\n  }\n}\n.career-why[_ngcontent-%COMP%] {\n  padding: 52px 24px 58px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f8faff 100%);\n}\n.career-why-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 250px minmax(0, 1fr);\n  gap: clamp(40px, 4vw, 58px);\n  width: min(100%, 1280px);\n  margin-inline: auto;\n}\n.career-why-intro[_ngcontent-%COMP%] {\n  align-self: center;\n}\n.career-why-intro[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 16px;\n  color: #2878ff;\n  font: 700 11px/1.2 var(--mono);\n  letter-spacing: .22em;\n  text-transform: uppercase;\n}\n.career-why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #050d1c;\n  font: 700 clamp(30px, 2.7vw, 42px)/1.22 var(--disp);\n  letter-spacing: -.025em;\n}\n.career-why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #3777f4;\n  font-style: normal;\n}\n.career-why-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 310px;\n  margin: 18px 0 26px;\n  color: #5d6d83;\n  font-size: 15px;\n  line-height: 1.6;\n}\n.career-why-intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 43px;\n  align-items: center;\n  padding: 0 24px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      100deg,\n      #2878ff,\n      #ef49ee);\n  box-shadow: 0 7px 14px rgba(76, 93, 229, .22);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: transform .25s ease, box-shadow .25s ease;\n}\n.career-why-intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(76, 93, 229, .3);\n}\n.career-why-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 15px;\n}\n.career-why-card[_ngcontent-%COMP%] {\n  min-height: 270px;\n  padding: 32px 17px 24px;\n  border: 1px solid #dfe4f0;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      145deg,\n      #fbfcff,\n      #f4f3fb);\n  box-shadow: 0 2px 3px rgba(8, 24, 56, .07);\n  text-align: center;\n  transition:\n    transform .25s ease,\n    border-color .25s ease,\n    background .25s ease;\n}\n.career-why-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  border-color: #aebfff;\n  background:\n    linear-gradient(\n      145deg,\n      #f7faff,\n      #eeebff);\n}\n.career-why-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 44px;\n  height: 44px;\n  margin: 0 auto 20px;\n  place-items: center;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      #dce8ff,\n      #e9ddff);\n  color: #376ff0;\n  font-size: 22px;\n  font-style: normal;\n  font-variation-settings: "FILL" 1;\n}\n.career-why-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #050d1c;\n  font: 700 16px/1.35 var(--disp);\n}\n.career-why-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 12px 0 0;\n  color: #607086;\n  font-size: 14px;\n  line-height: 1.5;\n}\n@media (max-width: 1150px) {\n  .career-why-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .career-why-intro[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n  .career-why-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 560px;\n  }\n  .career-why-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 720px) {\n  .career-why[_ngcontent-%COMP%] {\n    padding: 42px 20px;\n  }\n  .career-why-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .career-why-card[_ngcontent-%COMP%] {\n    min-height: 0;\n    padding: 26px 22px;\n  }\n}\n.career-next-step[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 34px clamp(24px, 4vw, 64px) 54px;\n  background: #fff;\n}\n.career-switch-banner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 285px minmax(250px, .8fr) minmax(420px, 1.2fr);\n  min-height: 194px;\n  max-width: 1280px;\n  margin: 0 auto;\n  overflow: hidden;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      105deg,\n      #1268ed,\n      #487cf3 53%,\n      #20b8e5);\n  color: #fff;\n}\n.career-switch-photo[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n}\n.career-switch-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 70% center;\n}\n.career-switch-copy[_ngcontent-%COMP%] {\n  align-self: center;\n  padding: 24px 30px;\n}\n.career-switch-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n  color: #fff;\n  font: 700 clamp(27px, 2.5vw, 36px)/1.15 var(--disp);\n}\n.career-switch-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 360px;\n  margin: 0;\n  color: #f3f8ff;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.career-switch-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 22px;\n  padding: 24px 34px;\n}\n.career-switch-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  text-align: center;\n}\n.career-switch-features[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.15;\n}\n.career-switch-features[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 34px;\n}\n.career-switch-actions[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 44px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  border-radius: 999px;\n  background: #fff;\n  color: #1769e8;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: transform .25s ease;\n}\n.career-switch-actions[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.career-switch-actions[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 22px;\n  height: 22px;\n  place-items: center;\n  border: 1px solid #73a8f8;\n  border-radius: 50%;\n}\n.career-process-perks[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: clamp(45px, 7vw, 100px);\n  max-width: 1280px;\n  margin: 70px auto 0;\n}\n.career-block-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 14px;\n  color: #2878ff;\n  font: 700 11px/1.2 var(--mono);\n  letter-spacing: .22em;\n  text-transform: uppercase;\n}\n.career-process[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.career-perks[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 30px;\n  color: #050d1c;\n  font: 700 clamp(27px, 2.5vw, 34px)/1.2 var(--disp);\n}\n.career-process-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 24px;\n}\n.career-process-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 0;\n}\n.career-process-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "\\2192";\n  position: absolute;\n  top: 24px;\n  right: -18px;\n  color: #9dbcf0;\n  font-size: 25px;\n}\n.career-process-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 70px;\n  height: 70px;\n  margin-bottom: 14px;\n  place-items: center;\n  border-radius: 50%;\n  background: #e7efff;\n  color: #2878ff;\n  font-size: 27px;\n  font-variation-settings: "FILL" 1;\n}\n.career-process-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #07162e;\n  font: 700 14px/1.35 var(--body);\n}\n.career-process-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #2878ff;\n}\n.career-process-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  color: #65738a;\n  font-size: 11px;\n  line-height: 1.45;\n}\n.career-perks-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.career-perks-grid[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 64px;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border: 1px solid #dce3ee;\n  border-radius: 12px;\n  background: #f9fbff;\n  color: #17243b;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.career-perks-grid[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 40px;\n  width: 40px;\n  height: 40px;\n  place-items: center;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      #2878ff,\n      #20b8e5);\n  color: #fff;\n  font-size: 21px;\n  font-variation-settings: "FILL" 1;\n}\n@media (max-width: 1050px) {\n  .career-switch-banner[_ngcontent-%COMP%] {\n    grid-template-columns: 220px 1fr;\n  }\n  .career-switch-actions[_ngcontent-%COMP%] {\n    grid-column: 1 / -1;\n  }\n  .career-process-perks[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 680px) {\n  .career-next-step[_ngcontent-%COMP%] {\n    padding: 28px 18px 42px;\n  }\n  .career-switch-banner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .career-switch-photo[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n  .career-switch-copy[_ngcontent-%COMP%], \n   .career-switch-actions[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .career-switch-features[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .career-process-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 26px 18px;\n  }\n  .career-process-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .career-perks-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.career-values[_ngcontent-%COMP%] {\n  margin: 0 0 48px;\n  padding: 12px 0 24px;\n}\n.career-values[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 auto 38px;\n}\n.career-values[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #10264b;\n  font: 700 clamp(24px, 2.6vw, 34px)/1.35 var(--disp);\n}\n.career-values[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1769ff;\n}\n.career-values[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 1050px;\n  margin: 0 auto;\n  color: #576d8d;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.career-values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n}\n.career-values-card[_ngcontent-%COMP%] {\n  padding: 24px 20px;\n  border: 1px solid #dce5f2;\n  border-radius: 18px;\n  background: #fff;\n}\n.career-values-card[_ngcontent-%COMP%]:hover {\n  border-color: #1769ff;\n  box-shadow: 0 12px 28px #1769ff12;\n}\n.career-values-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 56px;\n  height: 56px;\n  margin-bottom: 20px;\n  border-radius: 50%;\n  background: #eaf2ff;\n  color: #1769ff;\n  font-size: 28px;\n}\n.career-values-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #10264b;\n  font: 600 17px/1.5 var(--body);\n}\n.career-values-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #7a8598;\n  font-weight: 500;\n}\n.career-values-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #576d8d;\n  font-size: 14px;\n  line-height: 1.7;\n}\n.career-values-note[_ngcontent-%COMP%] {\n  margin: 36px auto 0;\n  max-width: 1050px;\n  text-align: center;\n  color: #1769ff;\n  font-size: 17px;\n  font-style: italic;\n  line-height: 1.7;\n}\n@media (max-width: 1000px) {\n  .career-values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .career-values-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.career-stories[_ngcontent-%COMP%] {\n  margin: 0 0 48px;\n  padding: 36px clamp(24px, 5vw, 72px);\n  background:\n    linear-gradient(\n      110deg,\n      #061b3c,\n      #123e78);\n}\n.career-story-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.career-story-card[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 240px;\n  box-sizing: border-box;\n  padding: 22px 24px 24px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .24);\n  border-radius: 17px;\n  background:\n    linear-gradient(\n      145deg,\n      #2377ef,\n      #3d89f7);\n  color: #fff;\n}\n.career-story-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 86px minmax(0, 1fr);\n  gap: 18px;\n  align-items: start;\n}\n.career-story-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 78px;\n  height: 78px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  background: #dceaff;\n  object-fit: cover;\n  object-position: center top;\n}\n.career-story-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1px 0 0;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 650;\n  line-height: 1.45;\n}\n.career-story-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 16px 0 3px;\n  color: #fff;\n  font: 700 18px/1.25 var(--disp);\n}\n.career-story-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #dceaff;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.career-story-card[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 18px;\n  bottom: 14px;\n  color: #fff;\n  font-size: 40px;\n  font-style: normal;\n  font-variation-settings: "FILL" 1;\n}\n@media (max-width: 920px) {\n  .career-story-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 620px;\n  }\n}\n@media (max-width: 520px) {\n  .career-stories[_ngcontent-%COMP%] {\n    padding: 28px 18px;\n  }\n  .career-story-card[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .career-story-top[_ngcontent-%COMP%] {\n    grid-template-columns: 64px minmax(0, 1fr);\n    gap: 14px;\n  }\n  .career-story-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .career-story-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.career-life[_ngcontent-%COMP%] {\n  margin: 0 0 56px;\n  padding: 24px 0 8px;\n}\n.career-life[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto 28px;\n  text-align: center;\n}\n.career-life[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #0b234b;\n  font: 700 clamp(26px, 3vw, 36px)/1.25 var(--disp);\n}\n.career-life[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #2878ff;\n  font-style: normal;\n}\n.career-life[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #65738a;\n  line-height: 1.7;\n}\n.career-life-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.career-life-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.career-life-photo[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 4 / 3;\n  object-fit: contain;\n  background: #f6f8fb;\n  border-radius: 20px;\n  box-shadow: 0 10px 28px #102b570b;\n}\n.career-life-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 16px 0 0;\n  color: #26354e;\n  font: 600 15px/1.6 var(--body);\n}\n.career-life-dots[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.career-life-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 32px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n.career-life-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 8px;\n  background: #bfd2ff;\n}\n.career-life-dots[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 24px;\n  background: #2878ff;\n}\n.career-life-dots[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #1769ff;\n  outline-offset: 2px;\n  border-radius: 6px;\n}\n@media (max-width: 760px) {\n  .career-life-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .career-life-card[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 460px;\n    margin: 0 auto;\n  }\n  .career-life-card[_ngcontent-%COMP%]:not(:first-child) {\n    display: none;\n  }\n}\n.career-culture[_ngcontent-%COMP%] {\n  margin: 0 0 44px;\n  padding: 40px 36px;\n  border-radius: 24px;\n  background: #fff;\n  box-shadow: 0 14px 40px #0000000d;\n  text-align: center;\n}\n.career-culture[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 34px;\n  color: #252235;\n  font: 600 clamp(24px, 3vw, 30px)/1.3 var(--disp);\n}\n.career-culture[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #ff6000;\n  font-style: normal;\n}\n.career-culture-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n  gap: 24px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.career-culture-grid[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  filter: drop-shadow(0 10px 10px #17224926);\n}\n.career-certification[_ngcontent-%COMP%] {\n  width: 76px;\n  color: #fff;\n  text-align: left;\n  font-family: Arial, sans-serif;\n}\n.career-certification-brand[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 5px 5px 4px;\n  background: #ff1233;\n  font-size: 20px;\n  line-height: .84;\n  font-weight: 700;\n  letter-spacing: -.6px;\n}\n.career-certification-brand[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 7px;\n  letter-spacing: 0;\n}\n.career-certification-details[_ngcontent-%COMP%] {\n  min-height: 54px;\n  padding: 5px 2px 12px;\n  box-sizing: border-box;\n  background: #03246d;\n  text-align: center;\n  clip-path: polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%);\n}\n.career-certification-details[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  line-height: 1.15;\n}\n.career-certification-details[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin: 4px 0 3px;\n  font-size: 5px;\n  white-space: nowrap;\n}\n.career-certification-details[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 5px;\n}\n@media (max-width: 900px) {\n  .career-culture-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    row-gap: 28px;\n  }\n}\n@media (max-width: 480px) {\n  .career-culture[_ngcontent-%COMP%] {\n    padding: 28px 16px;\n  }\n  .career-culture-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.privacy-policy-page[_ngcontent-%COMP%] {\n  background: #f6f8fc;\n  color: #13233d;\n  font-family: var(--body);\n}\n.privacy-policy-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 0;\n  background:\n    linear-gradient(\n      118deg,\n      #061631 0%,\n      #0a2d64 62%,\n      #0c4b9b 100%);\n  color: #fff;\n}\n.privacy-policy-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 82% 15%,\n      #2b82ed3d,\n      transparent 29%),\n    linear-gradient(#ffffff08 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #ffffff08 1px,\n      transparent 1px);\n  background-size:\n    auto,\n    54px 54px,\n    54px 54px;\n  pointer-events: none;\n}\n.privacy-policy-hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 63px 28px 68px;\n}\n.privacy-policy-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  align-items: center;\n  margin-bottom: 26px;\n  color: #8facd2;\n  font-size: 11px;\n  font-weight: 650;\n}\n.privacy-policy-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d9e9ff;\n  text-decoration: none;\n}\n.privacy-policy-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.privacy-policy-kicker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n  color: #85bcff;\n  font: 750 10px/1.2 var(--mono);\n  letter-spacing: .17em;\n  text-transform: uppercase;\n}\n.privacy-policy-kicker[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #ff821f;\n  box-shadow: 0 0 0 5px #ff821f22;\n}\n.privacy-policy-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 17px;\n  color: #fff;\n  font: 800 clamp(39px, 4.7vw, 62px)/1.04 var(--disp);\n  letter-spacing: -.045em;\n}\n.privacy-policy-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #5cadff;\n  font-style: normal;\n}\n.privacy-policy-hero-inner[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 750px;\n  margin: 0;\n  color: #c9daef;\n  font-size: 16px;\n  line-height: 1.7;\n}\n.privacy-policy-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 245px minmax(0, 1fr);\n  align-items: start;\n  gap: 40px;\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 55px 28px 80px;\n}\n.privacy-policy-aside[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 106px;\n  display: grid;\n  gap: 18px;\n}\n.privacy-policy-contents[_ngcontent-%COMP%], \n.privacy-policy-help[_ngcontent-%COMP%] {\n  border: 1px solid #dbe5f1;\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 10px 28px #15345b0a;\n}\n.privacy-policy-contents[_ngcontent-%COMP%] {\n  padding: 19px 16px;\n}\n.privacy-policy-contents[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 6px 12px;\n  color: #0f274a;\n  font: 750 11px/1.2 var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.privacy-policy-contents[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 6px;\n  border-radius: 6px;\n  color: #5e6f87;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1.25;\n  text-decoration: none;\n  transition:\n    background .2s,\n    color .2s,\n    transform .2s;\n}\n.privacy-policy-contents[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  flex: 0 0 18px;\n  color: #a6b2c3;\n  font: 600 8px/1 var(--mono);\n}\n.privacy-policy-contents[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #edf5ff;\n  color: #1267df;\n  transform: translateX(2px);\n}\n.privacy-policy-help[_ngcontent-%COMP%] {\n  padding: 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #09244f,\n      #0b55ab);\n  color: #fff;\n}\n.privacy-policy-help[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 39px;\n  height: 39px;\n  margin-bottom: 15px;\n  place-items: center;\n  border-radius: 10px;\n  background: #ffffff16;\n  color: #72bbff;\n  font-size: 22px;\n}\n.privacy-policy-help[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #7dbbff;\n  font: 700 9px/1.2 var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.privacy-policy-help[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 7px 0 8px;\n  color: #fff;\n  font: 700 16px/1.35 var(--disp);\n}\n.privacy-policy-help[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #c5d8ed;\n  font-size: 11px;\n  line-height: 1.55;\n}\n.privacy-policy-help[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 750;\n  text-decoration: none;\n}\n.privacy-policy-help[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ff963d;\n  font-size: 17px;\n}\n.privacy-policy-document[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 42px 42px;\n  border: 1px solid #dbe5f1;\n  border-radius: 17px;\n  background: #fff;\n  box-shadow: 0 16px 45px #15345b0b;\n  color: #53647b;\n  font-size: 14px;\n  line-height: 1.75;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n  padding: 42px 0 0;\n  scroll-margin-top: 110px;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    + section[_ngcontent-%COMP%] {\n  margin-top: 38px;\n  border-top: 1px solid #e4eaf2;\n}\n.privacy-policy-section-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #1670df;\n  font: 750 9px/1.2 var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.privacy-policy-document[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.privacy-policy-document[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 13px;\n  color: #102745;\n  font-family: var(--disp);\n  font-weight: 700;\n  line-height: 1.3;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.privacy-policy-document[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  letter-spacing: -.02em;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 25px;\n  font-size: 16px;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 16px;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n  margin: 0 0 18px;\n  padding: 0;\n  list-style: none;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0;\n  padding-left: 19px;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 1px;\n  top: .72em;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #ff7a1a;\n  box-shadow: 0 0 0 3px #ff7a1a18;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #243955;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #075ec9;\n  font-weight: 650;\n  text-decoration: underline;\n  text-decoration-color: #075ec94d;\n  text-underline-offset: 2px;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 21px 0;\n  border-collapse: separate;\n  border-spacing: 0;\n  overflow: hidden;\n  border: 1px solid #d9e4f2;\n  border-radius: 11px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.privacy-policy-document[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 12px 13px;\n  border-right: 1px solid #d9e4f2;\n  border-bottom: 1px solid #d9e4f2;\n  text-align: left;\n  vertical-align: top;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, \n.privacy-policy-document[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.privacy-policy-document[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #eaf3ff;\n  color: #0c2c5a;\n  font-weight: 750;\n}\n.privacy-policy-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 38px;\n  max-width: 1124px;\n  margin: 0 auto 78px;\n  padding: 38px 44px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      110deg,\n      #09244d,\n      #0b55ac);\n  box-shadow: 0 20px 48px #0b347122;\n  color: #fff;\n}\n.privacy-policy-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #79baff;\n  font: 750 9px/1.2 var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.privacy-policy-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 7px 0;\n  color: #fff;\n  font: 750 clamp(23px, 2.8vw, 31px)/1.25 var(--disp);\n}\n.privacy-policy-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #c7d9ee;\n  font-size: 12px;\n}\n.privacy-policy-cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  flex: 0 0 auto;\n  padding: 13px 19px;\n  border-radius: 8px;\n  background: #ff7a1a;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 750;\n  text-decoration: none;\n}\n.privacy-policy-cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: #ff913f;\n}\n.privacy-policy-cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\n@media (max-width: 900px) {\n  .privacy-policy-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .privacy-policy-aside[_ngcontent-%COMP%] {\n    position: static;\n    grid-template-columns: minmax(0, 1fr) 230px;\n  }\n  .privacy-policy-contents[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    column-gap: 8px;\n  }\n  .privacy-policy-contents[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .privacy-policy-cta[_ngcontent-%COMP%] {\n    margin-left: 28px;\n    margin-right: 28px;\n  }\n}\n@media (max-width: 640px) {\n  .privacy-policy-hero-inner[_ngcontent-%COMP%] {\n    padding: 43px 20px 54px;\n  }\n  .privacy-policy-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 39px;\n  }\n  .privacy-policy-hero-inner[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .privacy-policy-layout[_ngcontent-%COMP%] {\n    gap: 28px;\n    padding: 35px 16px 55px;\n  }\n  .privacy-policy-aside[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .privacy-policy-contents[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .privacy-policy-help[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .privacy-policy-document[_ngcontent-%COMP%] {\n    padding: 0 20px 27px;\n    font-size: 13px;\n  }\n  .privacy-policy-document[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    padding-top: 28px;\n  }\n  .privacy-policy-document[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]    + section[_ngcontent-%COMP%] {\n    margin-top: 27px;\n  }\n  .privacy-policy-document[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .privacy-policy-document[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .privacy-policy-document[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    display: block;\n    overflow-x: auto;\n    white-space: normal;\n  }\n  .privacy-policy-cta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    margin: 0 16px 55px;\n    padding: 28px 22px;\n  }\n  .privacy-policy-cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n    justify-content: center;\n  }\n}\n@media (max-width: 400px) {\n  .privacy-policy-contents[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.company-hero[_ngcontent-%COMP%] {\n  min-height: 390px;\n  display: flex;\n  align-items: center;\n  background:\n    radial-gradient(\n      circle at 82% 12%,\n      rgba(46, 204, 113, .2),\n      transparent 26%),\n    radial-gradient(\n      circle at 68% 110%,\n      rgba(23, 105, 255, .32),\n      transparent 38%),\n    linear-gradient(\n      135deg,\n      #071a3b 0%,\n      #0d2f67 58%,\n      #104c91 100%);\n}\n.company-hero[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.company-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin: 23px 0 13px;\n  padding: 6px 11px;\n  border: 1px solid rgba(133, 185, 255, .34);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .07);\n  color: #7bc0ff;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.company-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 850px;\n  margin-bottom: 18px;\n}\n.company-hero[_ngcontent-%COMP%]   .pp-tagline[_ngcontent-%COMP%] {\n  max-width: 720px;\n  color: #c9d9ee;\n}\n.awards-hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 560px;\n  align-items: center;\n  overflow: hidden;\n  color: #fff;\n  background:\n    radial-gradient(\n      circle at 77% 42%,\n      rgba(43, 125, 233, .35),\n      transparent 30%),\n    linear-gradient(\n      118deg,\n      #041a3c 0%,\n      #082d63 62%,\n      #064b8e 100%);\n}\n.awards-hero[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(rgba(104, 168, 247, .07) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(104, 168, 247, .07) 1px,\n      transparent 1px);\n  background-size: 54px 54px;\n  content: "";\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 38%,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 38%,\n      #000);\n}\n.awards-hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -110px;\n  bottom: -370px;\n  width: 850px;\n  height: 850px;\n  border: 1px solid rgba(100, 179, 255, .25);\n  border-radius: 50%;\n  box-shadow: 0 0 0 110px rgba(25, 105, 210, .05), 0 0 0 220px rgba(25, 105, 210, .03);\n}\n.awards-hero-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 8%;\n  right: 7%;\n  width: 54%;\n  height: 82%;\n  opacity: .32;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(141, 194, 255, .85) 1.6px,\n      transparent 2px);\n  background-size: 20px 20px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse,\n      #000 14%,\n      transparent 72%);\n  mask-image:\n    radial-gradient(\n      ellipse,\n      #000 14%,\n      transparent 72%);\n}\n.awards-hero-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1.05fr .95fr;\n  gap: 64px;\n  align-items: center;\n  padding-block: 55px;\n}\n.awards-hero[_ngcontent-%COMP%]   .pp-crumb[_ngcontent-%COMP%] {\n  margin-bottom: 31px;\n  color: #91bdf2;\n  font: 700 11px var(--mono);\n  letter-spacing: .14em;\n}\n.awards-hero-kicker[_ngcontent-%COMP%] {\n  display: block;\n  color: #66bdff;\n  font: 800 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.awards-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 690px;\n  margin: 12px 0 18px;\n  color: #fff;\n  font-size: clamp(42px, 4.2vw, 64px);\n  line-height: 1.02;\n  letter-spacing: -.045em;\n}\n.awards-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #66c3ff;\n  font-style: normal;\n}\n.awards-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: 0;\n  color: #cbdcf0;\n  font-size: 17px;\n  line-height: 1.65;\n}\n.awards-hero-points[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 25px;\n  margin-top: 22px;\n}\n.awards-hero-points[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #c5dcf7;\n  font-size: 12px;\n}\n.awards-hero-points[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n  color: #fff;\n  font: 800 18px var(--mono);\n}\n.awards-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 11px;\n  margin-top: 27px;\n}\n.awards-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px;\n  border-radius: 9px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 800;\n  text-decoration: none;\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    border-color .2s;\n}\n.awards-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.awards-primary-action[_ngcontent-%COMP%] {\n  background: #ff7a10;\n  box-shadow: 0 13px 28px rgba(255, 122, 16, .25);\n}\n.awards-secondary-action[_ngcontent-%COMP%] {\n  border: 1px solid rgba(155, 199, 249, .48);\n  background: rgba(255, 255, 255, .05);\n}\n.awards-hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 390px;\n  place-items: center;\n}\n.awards-visual-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  width: min(90%, 460px);\n  min-height: 345px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 48px 34px 25px;\n  border: 1px solid rgba(161, 204, 255, .46);\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(249, 252, 255, .98),\n      rgba(225, 239, 255, .96));\n  color: #0a2755;\n  text-align: center;\n  box-shadow: 0 30px 65px rgba(0, 0, 0, .3);\n}\n.awards-card-top[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  height: 42px;\n  align-items: center;\n  gap: 8px;\n  padding: 0 16px;\n  border-bottom: 1px solid #d6e4f5;\n  border-radius: 24px 24px 0 0;\n  background: #f6faff;\n}\n.awards-card-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #ff685c;\n}\n.awards-card-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  background: #ffbd38;\n}\n.awards-card-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  background: #2dc96f;\n}\n.awards-card-top[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  color: #435c7b;\n  font: 800 11px var(--mono);\n}\n.awards-visual-card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block;\n  width: 210px;\n  height: 210px;\n  object-fit: contain;\n  filter: drop-shadow(0 15px 18px rgba(23, 69, 133, .22));\n}\n.awards-visual-card[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  font-size: 21px;\n}\n.awards-visual-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 6px 0 15px;\n  color: #5a6d88;\n}\n.awards-card-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.awards-card-status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px 11px;\n  border: 1px solid #d3e1f1;\n  border-radius: 999px;\n  background: #fff;\n  color: #38516f;\n  font-size: 11px;\n  font-weight: 700;\n}\n.awards-card-status[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  margin-right: 5px;\n  border-radius: 50%;\n  background: #25c778;\n  box-shadow: 0 0 8px #25c778;\n}\n.awards-float[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  padding: 11px 15px;\n  border: 1px solid rgba(151, 201, 255, .38);\n  border-radius: 12px;\n  background: rgba(5, 31, 71, .94);\n  color: #eaf5ff;\n  font: 800 11px var(--mono);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, .25);\n}\n.awards-float-one[_ngcontent-%COMP%] {\n  top: 27px;\n  right: 0;\n}\n.awards-float-two[_ngcontent-%COMP%] {\n  bottom: 25px;\n  left: 0;\n}\n.awards-showcase[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 550px);\n  height: 420px;\n}\n.awards-showcase[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 46%;\n  left: 50%;\n  width: 390px;\n  height: 390px;\n  border: 1px dashed rgba(116, 184, 255, .45);\n  border-radius: 50%;\n  content: "";\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_awards-orbit 24s linear infinite;\n}\n.awards-showcase-label[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  top: 5px;\n  left: 50%;\n  padding: 9px 18px;\n  border: 1px solid rgba(150, 201, 255, .45);\n  border-radius: 999px;\n  background: rgba(5, 34, 77, .92);\n  font: 800 11px var(--mono);\n  letter-spacing: .05em;\n  white-space: nowrap;\n  transform: translateX(-50%);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, .25);\n}\n.awards-main-frame[_ngcontent-%COMP%], \n.awards-mini-frame[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  border: 1px solid rgba(180, 216, 255, .65);\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #e9f3ff);\n  box-shadow: 0 26px 55px rgba(0, 0, 0, .3);\n}\n.awards-main-frame[_ngcontent-%COMP%] {\n  z-index: 3;\n  top: 63px;\n  left: 50%;\n  width: 300px;\n  height: 300px;\n  padding: 24px;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  animation: _ngcontent-%COMP%_awards-float 5s ease-in-out infinite;\n}\n.awards-main-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 50%;\n}\n.awards-mini-frame[_ngcontent-%COMP%] {\n  z-index: 4;\n  width: 145px;\n  height: 105px;\n  padding: 12px;\n  border-radius: 17px;\n}\n.awards-mini-frame[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.awards-mini-one[_ngcontent-%COMP%] {\n  top: 95px;\n  left: 0;\n  transform: rotate(-5deg);\n  animation: _ngcontent-%COMP%_awards-mini-one 5.5s ease-in-out infinite;\n}\n.awards-mini-two[_ngcontent-%COMP%] {\n  right: 0;\n  bottom: 34px;\n  transform: rotate(5deg);\n  animation: _ngcontent-%COMP%_awards-mini-two 6s ease-in-out infinite;\n}\n.awards-year-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 6;\n  bottom: 4px;\n  left: 13%;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 15px;\n  border: 1px solid rgba(150, 201, 255, .4);\n  border-radius: 13px;\n  background: rgba(5, 34, 77, .94);\n  color: #d9ebff;\n  font: 700 10px var(--mono);\n  box-shadow: 0 14px 28px rgba(0, 0, 0, .25);\n}\n.awards-year-badge[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #ff9a3c;\n  font-size: 18px;\n}\n.awards-laurel[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  top: 145px;\n  color: rgba(103, 183, 255, .32);\n  font: 400 160px/1 Georgia, serif;\n}\n.awards-laurel-left[_ngcontent-%COMP%] {\n  left: 57px;\n  transform: rotate(-10deg);\n}\n.awards-laurel-right[_ngcontent-%COMP%] {\n  right: 57px;\n  transform: rotate(10deg);\n}\n@keyframes _ngcontent-%COMP%_awards-float {\n  0%, 100% {\n    transform: translate(-50%, 4px);\n  }\n  50% {\n    transform: translate(-50%, -10px);\n  }\n}\n@keyframes _ngcontent-%COMP%_awards-mini-one {\n  0%, 100% {\n    transform: translateY(3px) rotate(-5deg);\n  }\n  50% {\n    transform: translateY(-11px) rotate(-2deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_awards-mini-two {\n  0%, 100% {\n    transform: translateY(4px) rotate(5deg);\n  }\n  50% {\n    transform: translateY(-12px) rotate(2deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_awards-orbit {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@media (max-width: 900px) {\n  .awards-hero[_ngcontent-%COMP%] {\n    padding: 45px 0;\n  }\n  .awards-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 18px;\n  }\n  .awards-hero-visual[_ngcontent-%COMP%] {\n    min-height: 390px;\n  }\n  .awards-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    max-width: 720px;\n  }\n}\n@media (max-width: 600px) {\n  .awards-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 39px;\n  }\n  .awards-hero-points[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .awards-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 170px;\n  }\n  .awards-showcase[_ngcontent-%COMP%] {\n    height: 365px;\n  }\n  .awards-main-frame[_ngcontent-%COMP%] {\n    width: 245px;\n    height: 245px;\n  }\n  .awards-mini-frame[_ngcontent-%COMP%] {\n    width: 118px;\n    height: 88px;\n  }\n  .awards-mini-one[_ngcontent-%COMP%] {\n    left: -5px;\n  }\n  .awards-mini-two[_ngcontent-%COMP%] {\n    right: -5px;\n  }\n  .awards-showcase[_ngcontent-%COMP%]::before {\n    width: 310px;\n    height: 310px;\n  }\n  .awards-laurel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .awards-float[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .awards-visual-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.cert-hero[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 560px;\n  align-items: center;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 76% 44%,\n      rgba(27, 111, 220, .36),\n      transparent 29%),\n    linear-gradient(\n      118deg,\n      #041a3c,\n      #082c61 62%,\n      #07356e);\n  color: #fff;\n}\n.cert-hero[_ngcontent-%COMP%]:before {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      116deg,\n      transparent 0 120px,\n      rgba(121, 177, 248, .1) 121px 123px,\n      transparent 124px 242px);\n  content: "";\n  animation: _ngcontent-%COMP%_cert-grid-shift 18s linear infinite;\n}\n.cert-hero[_ngcontent-%COMP%]:after {\n  position: absolute;\n  right: -8%;\n  bottom: -45%;\n  width: 720px;\n  height: 720px;\n  border: 1px solid rgba(106, 173, 255, .18);\n  border-radius: 50%;\n  box-shadow: 0 0 0 120px rgba(41, 112, 211, .045), 0 0 0 240px rgba(41, 112, 211, .03);\n  content: "";\n}\n.cert-hero-net[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.cert-world[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 14%;\n  right: 8%;\n  width: 55%;\n  height: 72%;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(134, 190, 255, .44) 1.7px,\n      transparent 2px);\n  background-size: 19px 19px;\n  opacity: .48;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse,\n      #000 15%,\n      transparent 70%);\n  mask-image:\n    radial-gradient(\n      ellipse,\n      #000 15%,\n      transparent 70%);\n  animation: _ngcontent-%COMP%_cert-pulse 6s ease-in-out infinite;\n}\n.cert-hero-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1.08fr .92fr;\n  gap: 60px;\n  align-items: center;\n}\n.cert-hero-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n}\n.cert-hero[_ngcontent-%COMP%]   .pp-crumb[_ngcontent-%COMP%] {\n  color: #92bdf2;\n  font: 700 11px var(--mono);\n  letter-spacing: .14em;\n}\n.cert-kicker[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 34px;\n  color: #65b8ff;\n  font: 800 11px var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.cert-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 12px 0 17px;\n  font-size: clamp(40px, 4vw, 62px);\n  line-height: 1.04;\n  letter-spacing: -.045em;\n}\n.cert-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #65b8ff;\n  font-style: normal;\n}\n.cert-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 670px;\n  color: #cadaee;\n  font-size: 17px;\n  line-height: 1.65;\n}\n.cert-hero-points[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 22px;\n  margin-top: 19px;\n  color: #74c4ff;\n  font-weight: 800;\n}\n.cert-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 25px;\n}\n.cert-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 45px;\n  align-items: center;\n  justify-content: center;\n  padding: 11px 17px;\n  border: 1px solid rgba(159, 200, 249, .6);\n  border-radius: 9px;\n  background: rgba(5, 31, 72, .58);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.cert-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 7px;\n}\n.cert-hero-actions[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%] {\n  background: #126bd7;\n}\n.cert-hero-actions[_ngcontent-%COMP%]   .talk[_ngcontent-%COMP%] {\n  border-color: #ff8515;\n  background: #ff8515;\n}\n.cert-ask-ai[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 27px;\n}\n.cert-ai-label[_ngcontent-%COMP%] {\n  padding: 7px 14px;\n  border: 1px solid rgba(132, 188, 250, .36);\n  border-radius: 999px;\n  background: rgba(4, 27, 62, .62);\n  font: 700 11px var(--mono);\n}\n.cert-ask-ai[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.cert-ask-ai[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: grid;\n  width: 39px;\n  height: 39px;\n  place-items: center;\n  border: 1px solid rgba(140, 190, 248, .35);\n  border-radius: 12px;\n  background: rgba(4, 25, 58, .78);\n  transition: .2s;\n}\n.cert-ask-ai[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #13509c;\n  transform: translateY(-3px);\n}\n.cert-ask-ai[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n}\n.cert-hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  min-height: 390px;\n  place-items: center;\n}\n.cert-assurance-card[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  width: min(90%, 460px);\n  min-height: 330px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 48px 34px 32px;\n  border: 1px solid rgba(161, 204, 255, .46);\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(249, 252, 255, .98),\n      rgba(225, 239, 255, .96));\n  color: #0a2755;\n  text-align: center;\n  box-shadow: 0 30px 65px rgba(0, 0, 0, .3);\n  animation: _ngcontent-%COMP%_cert-float 5.5s ease-in-out infinite;\n}\n.cert-card-top[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  height: 42px;\n  align-items: center;\n  gap: 8px;\n  padding: 0 16px;\n  border-bottom: 1px solid #d6e4f5;\n  border-radius: 24px 24px 0 0;\n  background: #f6faff;\n}\n.cert-card-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #ff685c;\n}\n.cert-card-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(2) {\n  background: #ffbd38;\n}\n.cert-card-top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-child(3) {\n  background: #2dc96f;\n}\n.cert-card-top[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-left: 7px;\n  color: #435c7b;\n  font: 800 11px var(--mono);\n}\n.cert-shield[_ngcontent-%COMP%] {\n  display: grid;\n  width: 112px;\n  height: 126px;\n  margin-bottom: 17px;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      #1974e4,\n      #573dea);\n  clip-path: polygon(50% 0, 92% 16%, 86% 72%, 50% 100%, 14% 72%, 8% 16%);\n  filter: drop-shadow(0 14px 18px rgba(39, 83, 176, .28));\n}\n.cert-shield[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 30px;\n  font-weight: 900;\n}\n.cert-assurance-card[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  font-size: 21px;\n}\n.cert-assurance-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 8px 0 20px;\n  color: #5a6d88;\n}\n.cert-status-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.cert-status-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 8px 11px;\n  border: 1px solid #d3e1f1;\n  border-radius: 999px;\n  background: #fff;\n  color: #38516f;\n  font-size: 11px;\n  font-weight: 700;\n}\n.cert-status-row[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  margin-right: 5px;\n  border-radius: 50%;\n  background: #25c778;\n  box-shadow: 0 0 8px #25c778;\n}\n.cert-orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px dashed rgba(93, 174, 255, .48);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_cert-spin 17s linear infinite;\n}\n.cert-orbit-one[_ngcontent-%COMP%] {\n  right: 12%;\n  width: 420px;\n  height: 420px;\n}\n.cert-orbit-two[_ngcontent-%COMP%] {\n  right: 16%;\n  width: 310px;\n  height: 310px;\n  animation-direction: reverse;\n  animation-duration: 12s;\n}\n.cert-float[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  padding: 11px 15px;\n  border: 1px solid rgba(151, 201, 255, .38);\n  border-radius: 12px;\n  background: rgba(5, 31, 71, .9);\n  color: #eaf5ff;\n  font: 800 11px var(--mono);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, .25);\n}\n.cert-float-one[_ngcontent-%COMP%] {\n  top: 28px;\n  right: 2%;\n  animation: _ngcontent-%COMP%_cert-float 4.5s ease-in-out infinite;\n}\n.cert-float-two[_ngcontent-%COMP%] {\n  bottom: 30px;\n  left: 0;\n  animation: _ngcontent-%COMP%_cert-float 5s ease-in-out .8s infinite;\n}\n@keyframes _ngcontent-%COMP%_cert-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-14px);\n  }\n}\n@keyframes _ngcontent-%COMP%_cert-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_cert-pulse {\n  0%, 100% {\n    opacity: .3;\n    transform: scale(.98);\n  }\n  50% {\n    opacity: .58;\n    transform: scale(1.03);\n  }\n}\n@keyframes _ngcontent-%COMP%_cert-grid-shift {\n  to {\n    background-position: 242px 0;\n  }\n}\n@media (max-width: 900px) {\n  .cert-hero[_ngcontent-%COMP%] {\n    padding: 55px 0;\n  }\n  .cert-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cert-hero-visual[_ngcontent-%COMP%] {\n    min-height: 330px;\n  }\n}\n@media (max-width: 650px) {\n  .cert-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .cert-hero-points[_ngcontent-%COMP%], \n   .cert-ask-ai[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .cert-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 140px;\n  }\n  .cert-orbit[_ngcontent-%COMP%] {\n    max-width: 90vw;\n    max-height: 90vw;\n  }\n  .cert-float[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .cert-hero[_ngcontent-%COMP%]:before, \n   .cert-world[_ngcontent-%COMP%], \n   .cert-orbit[_ngcontent-%COMP%], \n   .cert-frame[_ngcontent-%COMP%], \n   .cert-float[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.partner-overview-hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 560px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      900px 480px at 82% 4%,\n      #0e3a78 0%,\n      #061a3a 60%);\n  color: #fff;\n}\n.partner-overview-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: .08;\n  background:\n    repeating-linear-gradient(\n      115deg,\n      transparent 0 90px,\n      #7fb2ff 90px 92px,\n      transparent 92px 220px);\n  background-size: 200% 200%;\n}\n.partner-overview-hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  right: -10%;\n  bottom: -2px;\n  left: -10%;\n  height: 48%;\n  pointer-events: none;\n  background:\n    repeating-linear-gradient(\n      90deg,\n      rgba(127, 178, 255, .12) 0 1px,\n      transparent 1px 64px),\n    repeating-linear-gradient(\n      0deg,\n      rgba(127, 178, 255, .12) 0 1px,\n      transparent 1px 64px);\n  transform: perspective(650px) rotateX(60deg);\n  transform-origin: bottom;\n  -webkit-mask-image: linear-gradient(transparent, #000 58%);\n  mask-image: linear-gradient(transparent, #000 58%);\n}\n.partner-hero-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 14%;\n  bottom: -240px;\n  width: 620px;\n  height: 620px;\n  border: 1px solid rgba(96, 165, 250, .24);\n  border-radius: 50%;\n  box-shadow: 0 0 0 120px rgba(37, 99, 235, .05), 0 0 0 240px rgba(37, 99, 235, .035);\n}\n.partner-hero-network[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  top: 8%;\n  right: 15%;\n  width: min(58vw, 820px);\n  height: 74%;\n  opacity: .48;\n  background-image:\n    radial-gradient(\n      circle,\n      #80b6ff 0 2.4px,\n      transparent 2.8px);\n  background-size: 19px 19px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 18%,\n      rgba(0, 0, 0, .8) 52%,\n      transparent 74%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 18%,\n      rgba(0, 0, 0, .8) 52%,\n      transparent 74%);\n  animation: _ngcontent-%COMP%_partnerNetworkDrift 13s ease-in-out infinite alternate;\n}\n.partner-hero-orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  border: 1px dashed rgba(91, 164, 255, .28);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.partner-orbit-one[_ngcontent-%COMP%] {\n  right: 13%;\n  top: 12%;\n  width: 520px;\n  height: 520px;\n  animation: _ngcontent-%COMP%_partnerOrbit 28s linear infinite;\n}\n.partner-orbit-two[_ngcontent-%COMP%] {\n  right: 24%;\n  top: 25%;\n  width: 300px;\n  height: 300px;\n  animation: _ngcontent-%COMP%_partnerOrbit 19s linear infinite reverse;\n}\n.partner-hero-scan[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  inset: 0 auto 0 -28%;\n  width: 24%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(80, 160, 255, .07),\n      transparent);\n  transform: skewX(-12deg);\n  animation: _ngcontent-%COMP%_partnerScan 9s ease-in-out infinite;\n  pointer-events: none;\n}\n.partner-hero-net[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  opacity: .8;\n  pointer-events: none;\n}\n.partner-visual-stage[_ngcontent-%COMP%] {\n  position: relative;\n  width: min(100%, 600px);\n  min-height: 430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  isolation: isolate;\n}\n.partner-program-visual-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 5;\n  display: flex;\n  transform: translateX(-50%);\n  padding: 7px 9px 7px 18px;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid rgba(139, 195, 255, .55);\n  border-radius: 999px;\n  background: rgba(5, 35, 80, .92);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, .24);\n  color: #fff;\n  font: 800 13px/1.2 var(--disp);\n  letter-spacing: .04em;\n  text-align: center;\n  white-space: nowrap;\n}\n.partner-program-icons[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.partner-program-icons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n  border: 2px solid rgba(255, 255, 255, .72);\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #2f8cff,\n      #0757c7);\n  box-shadow:\n    0 0 0 2px rgba(47, 140, 255, .22),\n    0 0 16px rgba(52, 145, 255, .68),\n    0 6px 14px rgba(0, 0, 0, .3);\n  fill: none;\n  stroke: #fff;\n  stroke-width: 2.1;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.partner-program-icons[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:last-child {\n  background:\n    linear-gradient(\n      135deg,\n      #ffad33,\n      #f26a00);\n  box-shadow:\n    0 0 0 2px rgba(255, 145, 25, .25),\n    0 0 16px rgba(255, 137, 18, .72),\n    0 6px 14px rgba(0, 0, 0, .3);\n}\n.partner-float-node[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  display: flex;\n  min-height: 48px;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 13px 7px 7px;\n  border: 1px solid rgba(148, 197, 255, .52);\n  border-radius: 14px;\n  background: rgba(7, 35, 78, .92);\n  color: #dcebff;\n  box-shadow: 0 15px 34px rgba(0, 0, 0, .32), inset 0 0 20px rgba(64, 154, 255, .12);\n  -webkit-backdrop-filter: blur(9px);\n  backdrop-filter: blur(9px);\n  pointer-events: none;\n  white-space: nowrap;\n}\n.partner-float-node[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  place-items: center;\n  border-radius: 10px;\n  background: #1768db;\n  color: #fff;\n  font-style: normal;\n  font-size: 15px;\n  font-weight: 900;\n}\n.partner-float-node[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 12px;\n  letter-spacing: .01em;\n}\n.partner-float-node.node-one[_ngcontent-%COMP%] {\n  top: 8%;\n  left: 2%;\n  animation: _ngcontent-%COMP%_partnerNodeOne 3.2s ease-in-out infinite;\n}\n.partner-float-node.node-two[_ngcontent-%COMP%] {\n  right: -2%;\n  bottom: 17%;\n  animation: _ngcontent-%COMP%_partnerNodeTwo 3.8s ease-in-out infinite .25s;\n}\n.partner-float-node.node-two[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #ff8c1a;\n}\n.partner-float-node.node-three[_ngcontent-%COMP%] {\n  top: 20%;\n  right: -4%;\n  animation: _ngcontent-%COMP%_partnerNodeOne 3.5s ease-in-out infinite reverse;\n}\n.partner-float-node.node-three[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #14a760;\n}\n.partner-pulse-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  width: 72%;\n  aspect-ratio: 1;\n  border: 2px solid rgba(64, 151, 255, .28);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_partnerPulse 2.8s ease-out infinite;\n}\n.partner-model-hero-grid[_ngcontent-%COMP%]   .partner-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  animation: _ngcontent-%COMP%_partnerArtworkFloat 3.2s ease-in-out infinite !important;\n  will-change: transform;\n}\n@keyframes _ngcontent-%COMP%_partnerNetworkDrift {\n  from {\n    transform: translate3d(-10px, -5px, 0);\n    opacity: .34;\n  }\n  to {\n    transform: translate3d(18px, 8px, 0);\n    opacity: .56;\n  }\n}\n@keyframes _ngcontent-%COMP%_partnerOrbit {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_partnerScan {\n  0%, 18% {\n    left: -28%;\n    opacity: 0;\n  }\n  45% {\n    opacity: 1;\n  }\n  72%, 100% {\n    left: 112%;\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_partnerArtworkFloat {\n  0%, 100% {\n    transform: translateY(8px) scale(1);\n  }\n  50% {\n    transform: translateY(-16px) scale(1.018);\n  }\n}\n@keyframes _ngcontent-%COMP%_partnerNodeOne {\n  0%, 100% {\n    transform: translate3d(0, 8px, 0) rotate(-4deg);\n  }\n  50% {\n    transform: translate3d(12px, -13px, 0) rotate(6deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_partnerNodeTwo {\n  0%, 100% {\n    transform: translate3d(7px, 0, 0) rotate(5deg);\n  }\n  50% {\n    transform: translate3d(-10px, -17px, 0) rotate(-5deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_partnerPulse {\n  0% {\n    transform: scale(.76);\n    opacity: .72;\n  }\n  75%, 100% {\n    transform: scale(1.18);\n    opacity: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .partner-hero-network[_ngcontent-%COMP%], \n   .partner-hero-orbit[_ngcontent-%COMP%], \n   .partner-hero-scan[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%] {\n  height: 560px;\n  min-height: 560px;\n  max-height: 560px;\n  padding: 0;\n  overflow: hidden;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero-grid[_ngcontent-%COMP%] {\n  height: 560px;\n  padding-block: 34px;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero-visual[_ngcontent-%COMP%] {\n  height: 390px;\n  min-height: 390px;\n  overflow: visible;\n}\n.company-page[_ngcontent-%COMP%]   .awards-visual-card[_ngcontent-%COMP%] {\n  width: min(90%, 460px);\n  height: 345px;\n  min-height: 345px;\n  max-height: 345px;\n  overflow: hidden;\n}\n.company-page[_ngcontent-%COMP%]   .awards-visual-card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  display: block !important;\n  width: 210px !important;\n  height: 210px !important;\n  max-width: 210px !important;\n  max-height: 210px !important;\n  object-fit: contain !important;\n  flex: 0 0 210px;\n}\n@media (max-width: 900px) {\n  .company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%] {\n    height: auto;\n    min-height: 0;\n    max-height: none;\n  }\n  .company-page[_ngcontent-%COMP%]   .awards-hero-grid[_ngcontent-%COMP%] {\n    height: auto;\n    padding-block: 52px;\n  }\n  .company-page[_ngcontent-%COMP%]   .awards-hero-visual[_ngcontent-%COMP%] {\n    height: 390px;\n  }\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero-grid[_ngcontent-%COMP%] {\n  grid-template-columns: 1.12fr .88fr;\n  gap: 34px;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%]   .pp-crumb[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: none;\n  margin: 0 0 10px;\n  font-size: clamp(38px, 3.35vw, 52px);\n  line-height: 1.08;\n  white-space: nowrap;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ed1427;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 23px;\n  color: #c9d9ee;\n  font-size: 17px;\n}\n.awards-hero-line[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 31px;\n  color: #68bdff;\n  font: 750 21px/1.35 var(--disp);\n}\n.awards-hero-line[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2px;\n  height: 25px;\n  margin-left: 5px;\n  background: #68bdff;\n  animation: _ngcontent-%COMP%_awards-caret .85s steps(1) infinite;\n}\n@keyframes _ngcontent-%COMP%_awards-caret {\n  50% {\n    opacity: 0;\n  }\n}\n.company-page[_ngcontent-%COMP%]   .awards-product-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 8px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid rgba(144, 188, 239, .24);\n}\n.company-page[_ngcontent-%COMP%]   .awards-product-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 46px;\n  padding: 10px 13px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.company-page[_ngcontent-%COMP%]   .awards-product-actions[_ngcontent-%COMP%]   .awards-primary-action[_ngcontent-%COMP%] {\n  background: #156bd9;\n  box-shadow: none;\n}\n.company-page[_ngcontent-%COMP%]   .awards-product-actions[_ngcontent-%COMP%]   .awards-secondary-action[_ngcontent-%COMP%] {\n  border: 1px solid rgba(166, 201, 244, .55);\n  background: rgba(4, 28, 64, .45);\n}\n.company-page[_ngcontent-%COMP%]   .awards-product-actions[_ngcontent-%COMP%]   .awards-talk-action[_ngcontent-%COMP%] {\n  border: 1px solid #ff8218;\n  background: #ff8218;\n  box-shadow: 0 10px 24px rgba(255, 130, 24, .22);\n}\n.awards-ask-ai[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n}\n.awards-ask-ai[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 31px;\n  align-items: center;\n  padding: 6px 14px;\n  border: 1px solid rgba(145, 190, 243, .4);\n  border-radius: 999px;\n  background: rgba(3, 26, 59, .62);\n  color: #fff;\n  font: 700 10px var(--mono);\n  white-space: nowrap;\n}\n.awards-ask-ai[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.awards-ask-ai[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 1px solid rgba(145, 190, 243, .4);\n  border-radius: 11px;\n  background: rgba(3, 26, 59, .76);\n}\n.awards-ask-ai[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  height: 420px;\n  min-height: 420px;\n  place-items: center;\n  overflow: visible;\n}\n.awards-trophy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: block;\n  width: min(100%, 430px) !important;\n  height: 430px !important;\n  max-width: 430px !important;\n  max-height: 430px !important;\n  object-fit: contain !important;\n  filter: drop-shadow(0 28px 30px rgba(0, 0, 0, .35));\n}\n.awards-orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px dashed rgba(109, 183, 255, .38);\n  border-radius: 50%;\n}\n.awards-orbit-one[_ngcontent-%COMP%] {\n  width: 390px;\n  height: 390px;\n}\n.awards-orbit-two[_ngcontent-%COMP%] {\n  width: 500px;\n  height: 500px;\n}\n.awards-topic[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  padding: 8px 12px;\n  border: 1px solid rgba(150, 201, 255, .45);\n  border-radius: 999px;\n  background: rgba(3, 27, 61, .9);\n  color: #eaf5ff;\n  font: 800 9px var(--mono);\n  letter-spacing: .08em;\n}\n.awards-topic-one[_ngcontent-%COMP%] {\n  top: 16%;\n  left: 1%;\n}\n.awards-topic-two[_ngcontent-%COMP%] {\n  top: 14%;\n  right: 0;\n}\n.awards-topic-three[_ngcontent-%COMP%] {\n  right: 3%;\n  bottom: 12%;\n}\n@media (max-width: 1100px) {\n  .company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .company-page[_ngcontent-%COMP%]   .awards-hero-grid[_ngcontent-%COMP%] {\n    gap: 28px;\n  }\n  .company-page[_ngcontent-%COMP%]   .awards-product-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding-inline: 14px;\n  }\n  .awards-trophy[_ngcontent-%COMP%] {\n    width: min(100%, 380px) !important;\n    height: 380px !important;\n  }\n}\n@media (max-width: 900px) {\n  .company-page[_ngcontent-%COMP%]   .awards-hero-visual[_ngcontent-%COMP%] {\n    height: 390px;\n    min-height: 390px;\n  }\n  .awards-orbit-two[_ngcontent-%COMP%] {\n    width: 420px;\n    height: 420px;\n  }\n}\n@media (max-width: 700px) {\n  .company-page[_ngcontent-%COMP%]   .awards-product-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    flex: 1 1 145px;\n  }\n  .awards-ask-ai[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .awards-ask-ai[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .awards-hero-line[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n   .awards-topic[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.partner-hero-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(390px, .92fr);\n  gap: 52px;\n  align-items: center;\n  padding-block: 54px 58px;\n}\n.partner-hero-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.partner-hero-copy[_ngcontent-%COMP%]   .pp-crumb[_ngcontent-%COMP%] {\n  margin-bottom: 22px;\n  color: #8fbcf8;\n}\n.partner-hero-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 13px;\n  color: #61b9ff;\n  font: 800 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.partner-hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0;\n  color: #fff;\n  font:\n    700 clamp(39px, 4.2vw, 48px)/1.02 Georgia,\n    "Times New Roman",\n    serif;\n  letter-spacing: -.035em;\n}\n.partner-hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #ef955f;\n  font: inherit;\n  font-style: normal;\n}\n.partner-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 55ch;\n  margin: 16px 0 0;\n  color: #c9daf0;\n  font-size: 17px;\n  line-height: 1.65;\n}\n.partner-hero-spotlight[_ngcontent-%COMP%] {\n  margin: 20px 0 0 !important;\n  color: #afc2de !important;\n  font-size: 13px !important;\n  font-weight: 700;\n}\n.partner-hero-spotlight[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #ffb35b;\n}\n.partner-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.partner-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px;\n  border-radius: 9px;\n  color: #fff;\n  font: 800 14px var(--disp);\n  text-decoration: none;\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    border-color .2s;\n}\n.partner-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.partner-primary-action[_ngcontent-%COMP%] {\n  background: #ff7a10;\n  box-shadow: 0 12px 28px rgba(255, 122, 16, .24);\n}\n.partner-secondary-action[_ngcontent-%COMP%] {\n  border: 1px solid rgba(164, 197, 239, .5);\n  background: rgba(255, 255, 255, .05);\n}\n.partner-secondary-action[_ngcontent-%COMP%]:hover {\n  border-color: #9bc6ff;\n}\n.partner-hero-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: clamp(18px, 2.2vw, 34px);\n  align-items: flex-end;\n  margin-top: 26px;\n}\n.partner-hero-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.partner-hero-stats[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n  font: 800 clamp(21px, 2.5vw, 30px)/1 var(--mono);\n  white-space: nowrap;\n}\n.partner-hero-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #a9c6ee;\n  font-size: 11px;\n  white-space: nowrap;\n}\n.partner-hero-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]::after {\n  content: "";\n  display: block;\n  width: 26px;\n  height: 2px;\n  margin-top: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff8c1a,\n      transparent);\n}\n.partner-hero-live[_ngcontent-%COMP%] {\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  gap: 8px;\n  margin-top: 26px;\n  padding: 8px 16px;\n  border: 1px solid rgba(46, 204, 113, .25);\n  border-radius: 99px;\n  background: rgba(46, 204, 113, .08);\n  color: #8fe3b0;\n  font: 500 11px var(--mono);\n}\n.partner-hero-live[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  flex: none;\n  border-radius: 50%;\n  background: #2ecc71;\n  box-shadow: 0 0 8px #2ecc71;\n}\n.partner-hero-visual[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  justify-content: center;\n}\n.partner-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: min(100%, 560px);\n  max-height: 420px;\n  object-fit: contain;\n  filter: drop-shadow(0 28px 32px rgba(0, 10, 35, .34));\n}\n.partner-overview-hero[_ngcontent-%COMP%]:has(.partner-model-hero-grid) {\n  min-height: 570px;\n}\n.partner-model-hero-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.1fr) minmax(380px, .9fr);\n  padding-block: 48px 52px;\n}\n.partner-model-hero-grid[_ngcontent-%COMP%]   .partner-hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: clamp(28px, 3.2vw, 46px);\n  font-weight: 800;\n  line-height: 1.05;\n  white-space: nowrap;\n}\n.partner-hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-bottom: 16px;\n  padding: 7px 12px;\n  border: 1px solid rgba(147, 197, 253, .5);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .04);\n  color: #7fc1ff;\n  font: 800 11px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.partner-model-hero-grid[_ngcontent-%COMP%]   .partner-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 390px;\n}\n.company-founder-section[_ngcontent-%COMP%] {\n  padding: 28px 0 12px;\n  background: #fff;\n}\n.company-founder-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(240px, 320px) minmax(0, 680px);\n  gap: 38px;\n  align-items: center;\n  max-width: 1040px;\n}\n.company-founder-visual[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.company-founder-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: min(100%, 330px);\n  height: auto;\n}\n.company-founder-copy[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.company-founder-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  color: #0b1736;\n  font-size: clamp(30px, 2.5vw, 40px);\n  line-height: 1.08;\n  letter-spacing: -.03em;\n}\n.company-founder-highlights[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #1769ff;\n  font-size: clamp(15px, 1.15vw, 18px);\n  line-height: 1.28;\n  font-weight: 800;\n}\n.company-founder-summary[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #546276;\n  font-size: clamp(14px, .95vw, 16px);\n  line-height: 1.5;\n}\n.company-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid rgba(120, 180, 255, .16);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.company-orb-one[_ngcontent-%COMP%] {\n  width: 440px;\n  height: 440px;\n  right: -80px;\n  top: -170px;\n}\n.company-orb-two[_ngcontent-%COMP%] {\n  width: 280px;\n  height: 280px;\n  right: 18%;\n  bottom: -210px;\n}\n.company-body[_ngcontent-%COMP%] {\n  padding: 35px 0 42px 0;\n  background: linear-gradient(#fff, #f7f9fd);\n}\n.company-wrap[_ngcontent-%COMP%] {\n  max-width: 1160px;\n}\n.company-wrap[_ngcontent-%COMP%]:has(.career-stories) {\n  display: grid;\n  grid-template-columns: minmax(20px, 1fr) minmax(0, 1112px) minmax(20px, 1fr);\n  width: 100%;\n  max-width: none;\n  padding-inline: 0;\n}\n.company-wrap[_ngcontent-%COMP%]:has(.career-stories)    > *[_ngcontent-%COMP%] {\n  grid-column: 2;\n  min-width: 0;\n}\n.company-wrap[_ngcontent-%COMP%]:has(.career-stories)    > .career-stories[_ngcontent-%COMP%], \n.company-wrap[_ngcontent-%COMP%]:has(.career-stories)    > .career-next-step[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  width: 100%;\n  box-sizing: border-box;\n}\n.company-intro[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto 44px;\n  color: #34435e;\n  font-size: clamp(18px, 2vw, 23px);\n  line-height: 1.65;\n  text-align: center;\n  text-wrap: balance;\n}\n.vendor-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  color: #fff;\n  background:\n    radial-gradient(\n      ellipse at 82% 48%,\n      #15568a66,\n      transparent 50%),\n    linear-gradient(\n      120deg,\n      #061b38,\n      #0b2d57);\n  padding: 50px 0 42px;\n}\n.vendor-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(#7dc4ff06 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #7dc4ff06 1px,\n      transparent 1px);\n  background-size: 42px 42px;\n  pointer-events: none;\n}\n.vendor-hero-grid[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  gap: 48px;\n  align-items: center;\n}\n.vendor-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 11px;\n  color: #9fb9d5;\n  margin-bottom: 30px;\n}\n.vendor-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.vendor-eyebrow[_ngcontent-%COMP%] {\n  color: #70c6ff;\n  font: 700 10px var(--mono);\n  letter-spacing: .18em;\n}\n.vendor-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 16px 0 20px;\n  font: 800 clamp(32px, 3.8vw, 52px)/1.1 var(--disp);\n  letter-spacing: -.035em;\n  color: #fff;\n}\n.vendor-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: #61c5ff;\n}\n.vendor-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 490px;\n  color: #b8cce4;\n  font-size: 15px;\n  line-height: 1.8;\n  margin: 0 0 24px;\n}\n.vendor-explore[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 22px;\n  background:\n    linear-gradient(\n      110deg,\n      #ff9746,\n      #ff7900);\n  border: 0;\n  box-shadow: 0 8px 26px #ff880020;\n}\n.vendor-hero-facts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 26px;\n  margin-top: 32px;\n  padding-top: 22px;\n  border-top: 1px solid #8bc6ff26;\n}\n.vendor-hero-facts[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n}\n.vendor-hero-facts[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #fff;\n}\n.vendor-hero-facts[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #9fb9d5;\n}\n.vendor-ecosystem[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 520/380;\n  width: 100%;\n  max-width: 580px;\n  margin: auto;\n  isolation: isolate;\n}\n.vendor-ecosystem[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 8%;\n  background:\n    radial-gradient(\n      ellipse,\n      #2b9aff25,\n      transparent 70%);\n  border-radius: 50%;\n  z-index: -1;\n}\n.vendor-network-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.vendor-network-hub[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 31%;\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  border: 1px solid #81c9ff99;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 30% 20%,\n      #eaf7ff,\n      #bfdfff);\n  box-shadow: 0 0 0 12px #36a4ff0d, 0 0 50px #1b93ff55;\n}\n.vendor-network-hub[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 76%;\n  height: auto;\n}\n.vendor-network-hub[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 700 clamp(5px, .6vw, 8px) var(--mono);\n  color: #235483;\n  letter-spacing: .05em;\n}\n.vendor-orbit-card[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 26%;\n  height: 23%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px;\n  border: 1px solid #acd5ff;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #e4f0ff);\n  box-shadow: 0 14px 32px #000c2433;\n  animation: _ngcontent-%COMP%_vendor-float 7s ease-in-out infinite;\n}\n.vendor-orbit-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 65%;\n  object-fit: contain;\n}\n.vendor-orbit-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4e6c8e;\n  font-size: clamp(6px, .7vw, 9px);\n  text-align: center;\n}\n.orbit-microsoft[_ngcontent-%COMP%] {\n  left: 7%;\n  top: 3%;\n}\n.orbit-aws[_ngcontent-%COMP%] {\n  right: 7%;\n  top: 3%;\n  animation-delay: -2s;\n}\n.orbit-azure[_ngcontent-%COMP%] {\n  left: 0;\n  top: 38%;\n  animation-delay: -3s;\n}\n.orbit-google[_ngcontent-%COMP%] {\n  right: 0;\n  top: 38%;\n  animation-delay: -1s;\n}\n.orbit-acronis[_ngcontent-%COMP%] {\n  left: 7%;\n  bottom: 3%;\n  animation-delay: -4s;\n}\n.orbit-oracle[_ngcontent-%COMP%] {\n  right: 7%;\n  bottom: 3%;\n  animation-delay: -5s;\n}\n.vendor-data-flow[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_vendor-flow 16s linear infinite;\n}\n.vendor-network-caption[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  font: 500 10px var(--mono);\n  color: #9ac8ea;\n}\n.vendor-network-caption[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #5ae3ad;\n  box-shadow: 0 0 10px #5ae3ad;\n}\n@keyframes _ngcontent-%COMP%_vendor-flow {\n  to {\n    stroke-dashoffset: -224;\n  }\n}\n@keyframes _ngcontent-%COMP%_vendor-float {\n  50% {\n    transform: translateY(-7px);\n  }\n}\n.company-body[_ngcontent-%COMP%]:has(.vendor-partners) {\n  background: #f5f8fc;\n  padding-block: 56px;\n}\n#vendor-directory[_ngcontent-%COMP%] {\n  scroll-margin-top: 100px;\n}\n.vendor-directory-toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 26px;\n  padding: 24px;\n  border: 1px solid #dbe6f4;\n  border-radius: 18px;\n  background: #fff;\n}\n.vendor-directory-toolbar[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 16px;\n  color: #0a284f;\n}\n.vendor-directory-toolbar[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  font-size: 12px;\n  color: #7286a0;\n}\n.vendor-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: min(100%, 350px);\n  padding: 12px 15px;\n  background: #f4f8fd;\n  border: 1px solid #d5e1f0;\n  border-radius: 10px;\n}\n.vendor-search[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #3c78c4;\n}\n.vendor-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: #0a284f;\n  font: 13px var(--body);\n  outline: none;\n}\n.vendor-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #1769ff;\n  box-shadow: 0 0 0 3px #1769ff15;\n}\n.vendor-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px;\n  background: #fff;\n  border-radius: 18px;\n}\n.vendor-empty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 10px 20px;\n  border: 0;\n  border-radius: 8px;\n  background: #1565d8;\n  color: #fff;\n  cursor: pointer;\n}\n@media (max-width: 900px) {\n  .vendor-hero-grid[_ngcontent-%COMP%] {\n    gap: 28px;\n  }\n  .vendor-hero-facts[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n  .vendor-hero-facts[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .vendor-orbit-card[_ngcontent-%COMP%] {\n    padding: 8px;\n    border-radius: 10px;\n  }\n}\n@media (max-width: 760px) {\n  .vendor-hero[_ngcontent-%COMP%] {\n    padding: 32px 0 48px;\n  }\n  .vendor-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 36px;\n  }\n  .vendor-ecosystem[_ngcontent-%COMP%] {\n    max-width: 500px;\n  }\n  .vendor-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .vendor-orbit-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 8px;\n  }\n  .vendor-network-hub[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 7px;\n  }\n  .vendor-directory-toolbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 18px;\n  }\n  .vendor-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .vendor-hero-facts[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .vendor-ecosystem[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n}\n.vendor-partners-heading[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto 36px;\n  text-align: center;\n}\n.vendor-partners-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1769ff;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.vendor-partners-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 14px;\n  color: #0b1736;\n  font-size: clamp(30px, 4vw, 46px);\n  line-height: 1.12;\n}\n.vendor-partners-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #617089;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.vendor-category-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 28px;\n}\n.vendor-category[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #dce5f1;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 16px 42px rgba(14, 42, 85, .06);\n}\n.vendor-category[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  padding: 24px 28px;\n  border-bottom: 1px solid #e8eef7;\n  background:\n    linear-gradient(\n      110deg,\n      #f0f6ff,\n      #fff);\n  text-align: left;\n}\n.vendor-category[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  min-width: 0;\n  width: 100%;\n  max-width: 840px;\n}\n.vendor-category[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: #0b1736;\n  font-size: 19px;\n  line-height: 1.35;\n  text-wrap: balance;\n  overflow-wrap: anywhere;\n}\n.vendor-category[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0;\n  color: #617089;\n  font-size: 14px;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n.vendor-logo-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  padding: 24px 28px 28px;\n}\n.vendor-category-badges[_ngcontent-%COMP%]   .vendor-logo-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.vendor-logo-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #e1e8f1;\n  border-radius: 14px;\n  background: #fff;\n  transition:\n    transform .2s ease,\n    border-color .2s ease,\n    box-shadow .2s ease;\n}\n.vendor-logo-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #b9d0ee;\n  box-shadow: 0 14px 28px rgba(14, 42, 85, .1);\n}\n.vendor-logo-image[_ngcontent-%COMP%] {\n  display: grid;\n  height: 104px;\n  place-items: center;\n  padding: 12px 16px;\n  background: #fff;\n}\n.vendor-logo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.vendor-logo-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 11px 12px 13px;\n  border-top: 1px solid #edf1f6;\n  color: #263750;\n  font-size: 12px;\n  font-weight: 800;\n  line-height: 1.35;\n  text-align: center;\n}\n.vendor-category-badges[_ngcontent-%COMP%]   .vendor-logo-image[_ngcontent-%COMP%] {\n  height: 200px;\n  padding: 20px;\n}\n.vendor-category-badges[_ngcontent-%COMP%]   .vendor-logo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 320px;\n  max-height: 160px;\n}\n@media (max-width: 640px) {\n  .company-body[_ngcontent-%COMP%]:has(.vendor-partners) {\n    padding: 20px 0 27px 0;\n  }\n  .company-body[_ngcontent-%COMP%]:has(.vendor-partners)   .company-wrap[_ngcontent-%COMP%] {\n    padding-inline: 14px;\n  }\n  .vendor-partners-heading[_ngcontent-%COMP%] {\n    margin-bottom: 32px;\n  }\n  .vendor-partners-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .vendor-category-list[_ngcontent-%COMP%] {\n    gap: 18px;\n  }\n  .vendor-category[_ngcontent-%COMP%] {\n    border-radius: 18px;\n  }\n  .vendor-category[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n    align-items: center;\n    padding: 18px;\n  }\n  .vendor-category[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .vendor-category[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .vendor-logo-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 9px;\n    padding: 18px;\n  }\n  .vendor-logo-image[_ngcontent-%COMP%] {\n    height: 86px;\n    padding: 10px;\n  }\n  .vendor-logo-card[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    padding: 9px 8px 11px;\n    font-size: 11px;\n  }\n  .vendor-category-badges[_ngcontent-%COMP%]   .vendor-logo-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .vendor-category-badges[_ngcontent-%COMP%]   .vendor-logo-image[_ngcontent-%COMP%] {\n    height: 180px;\n    padding: 16px;\n  }\n  .vendor-category-badges[_ngcontent-%COMP%]   .vendor-logo-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 148px;\n  }\n}\n@media (max-width: 390px) {\n  .vendor-logo-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .vendor-logo-image[_ngcontent-%COMP%] {\n    height: 98px;\n  }\n}\n.company-card-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n  margin-bottom: 64px;\n}\n.company-card[_ngcontent-%COMP%] {\n  padding: 28px;\n  border: 1px solid #e2e8f2;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 14px 40px rgba(14, 42, 85, .07);\n}\n.company-icon[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 21px;\n  border-radius: 14px;\n  background: #eaf2ff;\n  color: #1769ff;\n  font-size: 14px;\n  font-weight: 800;\n}\n.company-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.company-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.company-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #0b1736;\n}\n.company-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 9px;\n  font-size: 19px;\n}\n.company-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #667085;\n  font-size: 14px;\n  line-height: 1.65;\n}\n.recognition-section[_ngcontent-%COMP%] {\n  margin-top: 34px;\n}\n.recognition-section[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\n.recognition-heading[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 34px;\n  text-align: center;\n}\n.recognition-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1769ff;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.recognition-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 11px;\n  color: #0b1736;\n  font-size: clamp(29px, 4vw, 42px);\n  line-height: 1.15;\n}\n.recognition-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #617089;\n  font-size: 15px;\n  line-height: 1.65;\n}\n.certification-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n}\n.certification-tabs-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 240px minmax(0, 1fr);\n  gap: 28px;\n  max-width: 1120px;\n  margin: 0 auto;\n  align-items: start;\n}\n.certification-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  box-shadow: none;\n}\n.certification-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  min-height: 66px;\n  align-items: center;\n  gap: 11px;\n  padding: 15px 20px;\n  border: 0;\n  border-radius: 11px;\n  background: #f4f7fb;\n  color: #9aa7b9;\n  cursor: pointer;\n  font: 700 14px/1.35 var(--disp);\n  text-align: left;\n  transition:\n    background .2s,\n    color .2s,\n    box-shadow .2s;\n}\n.certification-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.certification-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1769ff;\n  font: 800 10px var(--mono);\n  letter-spacing: .08em;\n}\n.certification-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #edf4fc;\n  color: #0b1736;\n}\n.certification-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  background: #f5f8fc;\n  color: #071e48;\n  box-shadow: none;\n}\n.certification-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 9px;\n  right: -2px;\n  bottom: 9px;\n  width: 3px;\n  border-radius: 4px;\n  background: #1769ff;\n  content: "";\n}\n.certification-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1769ff;\n}\n.certification-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > .certification-tab-label[_ngcontent-%COMP%] {\n  color: inherit;\n  font: inherit;\n  letter-spacing: normal;\n}\n.certification-tab-label[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #1769ff;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: .06em;\n  text-transform: uppercase;\n}\n.certification-tab-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(340px, .92fr) minmax(280px, .78fr);\n  min-height: 510px;\n  border: 1px solid #d7e2f0;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 16px 40px rgba(14, 42, 85, .08);\n}\n.certification-tab-panel[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.certification-tab-panel[_ngcontent-%COMP%]   .certificate-image-wrap[_ngcontent-%COMP%] {\n  height: 100%;\n  min-height: 500px;\n}\n.certification-tab-panel[_ngcontent-%COMP%]   .recognition-card-copy[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: 0;\n  border-left: 1px solid #e5ebf3;\n  padding: 34px;\n}\n.certification-tab-panel[_ngcontent-%COMP%]   .recognition-card-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.cert-hero[_ngcontent-%COMP%] {\n  min-height: 530px;\n  padding-block: 38px;\n  background:\n    radial-gradient(\n      ellipse at 80% 40%,\n      #18548966,\n      transparent 48%),\n    linear-gradient(\n      120deg,\n      #061a37,\n      #0c2d55);\n}\n.cert-hero[_ngcontent-%COMP%]:before {\n  background-image:\n    linear-gradient(#87caff06 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #87caff06 1px,\n      transparent 1px);\n  background-size: 42px 42px;\n  animation: none;\n}\n.cert-hero[_ngcontent-%COMP%]:after {\n  opacity: .35;\n}\n.cert-world[_ngcontent-%COMP%] {\n  opacity: .15;\n}\n.cert-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: clamp(36px, 3.8vw, 52px);\n  line-height: 1.1;\n}\n.cert-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.8;\n}\n.cert-hero-points[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n}\n.cert-kicker[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-top: 28px;\n}\n.cert-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 11px;\n  min-height: 42px;\n  padding: 11px 14px;\n}\n.cert-hero-actions[_ngcontent-%COMP%]   .talk[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      110deg,\n      #ff9744,\n      #ff7900);\n  border: 0;\n}\n.cert-new-animation[_ngcontent-%COMP%] {\n  min-height: 0;\n  aspect-ratio: 520/410;\n  width: 100%;\n  filter: drop-shadow(0 22px 25px #000d2733);\n}\n.cert-new-animation[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n.credential-document-heading[_ngcontent-%COMP%] {\n  fill: #123f6d;\n  font: 700 17px system-ui, sans-serif;\n  letter-spacing: 2px;\n}\n.credential-document-subtitle[_ngcontent-%COMP%] {\n  fill: #668bae;\n  font: 600 8px ui-monospace, monospace;\n  letter-spacing: 1.5px;\n}\n.credential-signature-label[_ngcontent-%COMP%] {\n  fill: #688eb0;\n  font: 6px ui-monospace, monospace;\n  letter-spacing: .7px;\n}\n.credential-badge-title[_ngcontent-%COMP%] {\n  fill: #eff8ff;\n  font: 700 13px system-ui, sans-serif;\n}\n.credential-badge-caption[_ngcontent-%COMP%] {\n  fill: #a9cde7;\n  font: 9px system-ui, sans-serif;\n}\n.credential-footer-label[_ngcontent-%COMP%] {\n  fill: #a9cde7;\n  font: 10px system-ui, sans-serif;\n  letter-spacing: .3px;\n}\n.credential-document[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_credential-drift 7s ease-in-out infinite;\n  filter: drop-shadow(0 12px 24px #00132944);\n}\n.credential-main-shield[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_credential-drift 7s ease-in-out infinite;\n  filter: drop-shadow(0 8px 9px #2970bf55);\n}\n.credential-badge[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_credential-drift 6s ease-in-out infinite;\n  filter: drop-shadow(0 8px 10px #00132944);\n}\n.badge-service[_ngcontent-%COMP%] {\n  animation-delay: -3s;\n}\n.credential-orbit[_ngcontent-%COMP%] {\n  transform-origin: 260px 208px;\n  animation: _ngcontent-%COMP%_credential-orbit-spin 60s linear infinite;\n}\n.credential-check[_ngcontent-%COMP%] {\n  stroke-dasharray: 55;\n  animation: _ngcontent-%COMP%_credential-check-draw 6s ease-in-out infinite;\n}\n.credential-document-lines[_ngcontent-%COMP%] {\n  stroke-dasharray: 160;\n  animation: _ngcontent-%COMP%_credential-lines-draw 7s ease-in-out infinite;\n}\n.credential-sparkles[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_credential-spark 4s ease-in-out infinite;\n}\n.company-body[_ngcontent-%COMP%]:has(.certifications-section) {\n  background: #f5f8fc;\n  padding-top: 48px;\n}\n.certification-heading[_ngcontent-%COMP%] {\n  margin-bottom: 34px;\n}\n.certification-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(28px, 3vw, 38px);\n}\n.certification-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  letter-spacing: .15em;\n}\n.certification-tabs[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #eaf1fa;\n  border: 1px solid #dbe6f3;\n  border-radius: 18px;\n  gap: 6px;\n  align-self: start;\n}\n.certification-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: transparent;\n  padding: 17px 15px;\n  font-size: 13px;\n}\n.certification-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  background: #fff;\n  border-color: #cbdff5;\n  box-shadow: 0 6px 16px #0a29570a;\n}\n.certification-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]:after {\n  display: none;\n}\n.certification-tab-panel[_ngcontent-%COMP%] {\n  border-color: #dde7f4;\n  box-shadow: 0 16px 40px #0a295709;\n}\n.certification-tab-panel[_ngcontent-%COMP%]   .recognition-card-copy[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #f3f8ff);\n}\n@keyframes _ngcontent-%COMP%_credential-drift {\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes _ngcontent-%COMP%_credential-orbit-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_credential-check-draw {\n  0% {\n    stroke-dashoffset: 55;\n    opacity: .3;\n  }\n  35%, 85% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: .3;\n  }\n}\n@keyframes _ngcontent-%COMP%_credential-lines-draw {\n  0% {\n    stroke-dashoffset: 160;\n    opacity: .4;\n  }\n  50%, 100% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_credential-spark {\n  50% {\n    opacity: .3;\n  }\n}\n@media (max-width: 760px) {\n  .cert-new-animation[_ngcontent-%COMP%] {\n    max-width: 500px;\n    margin: 20px auto 0;\n  }\n  .cert-hero[_ngcontent-%COMP%] {\n    padding-block: 28px;\n  }\n  .cert-hero-grid[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .cert-hero-points[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .cert-new-animation[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n}\n.certification-heading[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin-right: auto;\n  margin-left: auto;\n  text-align: center;\n}\n.certificate-card[_ngcontent-%COMP%], \n.award-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #dce5f1;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 14px 38px rgba(14, 42, 85, .08);\n}\n.certificate-card[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: block;\n  overflow: hidden;\n}\n.certificate-image-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  height: 390px;\n  place-items: center;\n  padding: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      #f2f6fc,\n      #fff);\n}\n.certificate-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.recognition-card-copy[_ngcontent-%COMP%] {\n  padding: 21px 23px 24px;\n  border-top: 1px solid #e5ebf3;\n}\n.recognition-card-copy[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1769ff;\n  font: 800 9px var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.recognition-card-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.award-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #0b1736;\n  font-family: var(--disp);\n}\n.recognition-card-copy[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 8px 0 7px;\n  font-size: 18px;\n  line-height: 1.35;\n}\n.recognition-card-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #65738a;\n  font-size: 13px;\n  line-height: 1.55;\n}\n.recognition-card-copy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 14px;\n  color: #1769ff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.recognition-card-copy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.awards-section[_ngcontent-%COMP%] {\n  padding-top: 32px;\n  border-top: 1px solid #dfe7f2;\n}\n.award-tabs-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 220px minmax(0, 1fr);\n  gap: 36px;\n  align-items: start;\n}\n.award-tabs[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  padding-right: 16px;\n  border-right: 1px solid #d8e2ef;\n}\n.award-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  padding: 17px 20px;\n  border: 0;\n  border-radius: 10px;\n  background: transparent;\n  color: #98a2b3;\n  cursor: pointer;\n  font: inherit;\n  font-size: 16px;\n  font-weight: 800;\n  text-align: left;\n  transition: color .2s ease, background .2s ease;\n}\n.award-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  position: absolute;\n  top: 8px;\n  right: -18px;\n  bottom: 8px;\n  width: 3px;\n  border-radius: 3px;\n  background: #1769ff;\n  content: "";\n  opacity: 0;\n}\n.award-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #344054;\n  background: #f5f8fc;\n}\n.award-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  color: #0b1736;\n  background: #f2f6fc;\n}\n.award-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]::after {\n  opacity: 1;\n}\n.award-year-panel[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 34px;\n  border: 1px solid #dce5f1;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 14px 38px rgba(14, 42, 85, .06);\n}\n.award-year-heading[_ngcontent-%COMP%] {\n  margin-bottom: 26px;\n}\n.award-year-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1769ff;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.award-year-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #0b1736;\n  font-size: 34px;\n  line-height: 1;\n}\n.award-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n.award-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 350px;\n  flex-direction: column;\n  transition:\n    transform .22s ease,\n    box-shadow .22s ease,\n    border-color .22s ease;\n}\n.award-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: #b8cce8;\n  box-shadow: 0 20px 45px rgba(14, 42, 85, .12);\n}\n.award-image-wrap[_ngcontent-%COMP%] {\n  display: grid;\n  min-height: 285px;\n  flex: 1;\n  place-items: center;\n  padding: 22px;\n  background:\n    linear-gradient(\n      145deg,\n      #f4f7fb,\n      #fff);\n}\n.award-image-wrap[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  max-width: 100%;\n  width: auto;\n  max-height: 245px;\n  height: auto;\n  object-fit: contain;\n}\n.award-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 18px 20px 21px;\n  border-top: 1px solid #e5ebf3;\n  font-size: 16px;\n  line-height: 1.35;\n  text-align: center;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%] {\n  padding-block: 44px;\n  background:\n    radial-gradient(\n      ellipse at 80% 45%,\n      #17579066,\n      transparent 50%),\n    linear-gradient(\n      120deg,\n      #061b38,\n      #0a2b52);\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  white-space: normal;\n  font: 800 clamp(34px, 3.6vw, 49px)/1.12 var(--disp);\n  letter-spacing: -.035em;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #78ccff;\n}\n.awards-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.awards-hero-line[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #b8d9f4;\n}\n.awards-hero-line[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: none;\n}\n.company-page[_ngcontent-%COMP%]   .awards-hero-visual.awards-animation[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  min-height: 0;\n  aspect-ratio: 520/430;\n  filter: drop-shadow(0 20px 26px #000e2633);\n}\n.awards-animation[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n.award-trophy-brand[_ngcontent-%COMP%] {\n  fill: #e3f4ff;\n  font: 600 8px ui-monospace, monospace;\n  letter-spacing: 2px;\n}\n.award-badge-text[_ngcontent-%COMP%] {\n  fill: #c9e5fa;\n  font: 600 10px ui-monospace, monospace;\n  letter-spacing: 1px;\n}\n.award-animation-caption[_ngcontent-%COMP%] {\n  fill: #a9cde7;\n  font: 10px system-ui, sans-serif;\n  letter-spacing: .3px;\n}\n.award-animated-trophy[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_award-trophy-drift 7s ease-in-out infinite;\n  filter: drop-shadow(0 10px 15px #0d97ff33);\n}\n.award-new-orbit[_ngcontent-%COMP%] {\n  transform-origin: 260px 215px;\n  animation: _ngcontent-%COMP%_award-orbit-spin 60s linear infinite;\n}\n.award-new-badge[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_award-trophy-drift 6s ease-in-out infinite;\n  filter: drop-shadow(0 8px 12px #00142e44);\n}\n.award-badge-right[_ngcontent-%COMP%] {\n  animation-delay: -3s;\n}\n.award-crystal-shine[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_award-shimmer 6s ease-in-out infinite;\n}\n.award-star-sparkles[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_award-twinkle 4s ease-in-out infinite;\n}\n.award-ground-glow[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_award-twinkle 7s ease-in-out infinite;\n}\n.company-body[_ngcontent-%COMP%]:has(.awards-section) {\n  background: #f5f8fc;\n  padding-top: 48px;\n}\n.award-tabs[_ngcontent-%COMP%] {\n  padding: 10px;\n  border: 1px solid #dbe6f3;\n  border-radius: 16px;\n  background: #eaf1fa;\n  gap: 7px;\n}\n.award-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 1px solid transparent;\n  font-size: 14px;\n}\n.award-tabs[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1769d8;\n  border-color: #cbdff5;\n  box-shadow: 0 5px 14px #0a29570a;\n}\n.award-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n  display: none;\n}\n.award-year-panel[_ngcontent-%COMP%] {\n  border-color: #dde7f4;\n  box-shadow: 0 14px 36px #0a295708;\n}\n.award-card[_ngcontent-%COMP%] {\n  box-shadow: 0 8px 24px #0a295708;\n}\n.award-image-wrap[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #eef5ff,\n      #fff);\n  cursor: zoom-in;\n}\n.award-image-wrap[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #1769ff;\n  outline-offset: -3px;\n}\n.award-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 14px;\n  text-align: left;\n  line-height: 1.5;\n}\n@keyframes _ngcontent-%COMP%_award-trophy-drift {\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes _ngcontent-%COMP%_award-orbit-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_award-shimmer {\n  0%, 20% {\n    transform: translateX(-150px);\n    opacity: 0;\n  }\n  35% {\n    opacity: .5;\n  }\n  65% {\n    transform: translateX(200px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(200px);\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_award-twinkle {\n  50% {\n    opacity: .4;\n  }\n}\n@media (max-width: 760px) {\n  .company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%] {\n    padding-block: 30px;\n  }\n  .awards-animation[_ngcontent-%COMP%] {\n    max-width: 500px;\n    margin: 18px auto 0;\n  }\n  .company-page[_ngcontent-%COMP%]   .awards-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .awards-animation[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n  .awards-animation[_ngcontent-%COMP%]   .award-crystal-shine[_ngcontent-%COMP%] {\n    opacity: 0;\n  }\n}\n.company-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(220px, .65fr) minmax(0, 1.35fr);\n  gap: 55px;\n  margin-top: 18px;\n  padding: 42px;\n  border: 1px solid #e3e9f2;\n  border-radius: 20px;\n  background: #fff;\n}\n.company-section-tint[_ngcontent-%COMP%] {\n  background: #f2f6fc;\n}\n.company-section-number[_ngcontent-%COMP%] {\n  color: #1769ff;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: .12em;\n}\n.company-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  font-size: clamp(23px, 3vw, 31px);\n  line-height: 1.2;\n}\n.company-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #526078;\n  font-size: 16px;\n  line-height: 1.75;\n}\n.company-section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 11px;\n  margin: 22px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.company-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 26px;\n  color: #34435e;\n  font-size: 14px;\n  line-height: 1.55;\n}\n.company-section[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\e2\\153\\201c";\n  position: absolute;\n  left: 0;\n  color: #19a568;\n  font-weight: 900;\n}\n.company-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 35px;\n  margin-top: 27px;\n  padding: 42px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #0b234e,\n      #1057b7);\n  box-shadow: 0 22px 55px rgba(13, 58, 125, .2);\n}\n.company-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #72b8ff;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.company-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 9px 0 0;\n  color: #fff;\n  font-size: clamp(20px, 2.4vw, 29px);\n  line-height: 1.35;\n}\n.company-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: none;\n  white-space: nowrap;\n  text-decoration: none;\n}\n@media (max-width: 800px) {\n  .company-hero[_ngcontent-%COMP%] {\n    min-height: 340px;\n  }\n  .partner-overview-hero[_ngcontent-%COMP%], \n   .partner-overview-hero[_ngcontent-%COMP%]:has(.partner-model-hero-grid) {\n    min-height: 0;\n  }\n  .partner-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    padding-block: 44px 28px;\n  }\n  .partner-hero-copy[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .partner-hero-copy[_ngcontent-%COMP%]   .pp-crumb[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .partner-hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .partner-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], \n   .partner-hero-points[_ngcontent-%COMP%] {\n    margin-inline: auto;\n  }\n  .partner-hero-spotlight[_ngcontent-%COMP%] {\n    margin-inline: auto !important;\n  }\n  .partner-hero-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .partner-hero-stats[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .partner-hero-live[_ngcontent-%COMP%] {\n    margin-inline: auto;\n  }\n  .partner-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: min(100%, 600px);\n    max-height: 360px;\n  }\n  .partner-model-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .partner-model-hero-grid[_ngcontent-%COMP%]   .partner-hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(24px, 5vw, 42px);\n  }\n  .partner-model-hero-grid[_ngcontent-%COMP%]   .partner-hero-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-height: 280px;\n  }\n  .company-founder-section[_ngcontent-%COMP%] {\n    padding: 24px 0 8px;\n  }\n  .company-founder-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .company-founder-copy[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .company-founder-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 14px;\n  }\n  .company-founder-highlights[_ngcontent-%COMP%] {\n    margin-bottom: 18px;\n  }\n  .company-body[_ngcontent-%COMP%] {\n    padding: 24px 0 30px 0;\n  }\n  .company-card-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    margin-bottom: 42px;\n  }\n  .certification-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .certification-tabs-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .certification-tabs[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n  }\n  .certification-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    min-width: 210px;\n    border-right: 1px solid #dce5f1;\n    border-bottom: 0;\n  }\n  .certification-tab-panel[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .certification-tab-panel[_ngcontent-%COMP%]   .recognition-card-copy[_ngcontent-%COMP%] {\n    border-top: 1px solid #e5ebf3;\n    border-left: 0;\n  }\n  .award-tabs-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .award-tabs[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    padding: 0 0 10px;\n    border-right: 0;\n    border-bottom: 1px solid #d8e2ef;\n    scrollbar-width: thin;\n  }\n  .award-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: auto;\n    min-width: 92px;\n    flex: 0 0 auto;\n    text-align: center;\n  }\n  .award-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]::after {\n    top: auto;\n    right: 12px;\n    bottom: -11px;\n    left: 12px;\n    width: auto;\n    height: 3px;\n  }\n  .certificate-image-wrap[_ngcontent-%COMP%] {\n    height: 350px;\n  }\n  .company-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 28px;\n  }\n  .company-cta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 30px;\n  }\n}\n@media (max-width: 560px) {\n  .partner-hero-grid[_ngcontent-%COMP%] {\n    padding-block: 34px 22px;\n  }\n  .partner-hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 39px;\n  }\n  .partner-model-hero-grid[_ngcontent-%COMP%]   .partner-hero-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100%;\n    font-size: clamp(18px, 4.4vw, 22px);\n    letter-spacing: -.04em;\n  }\n  .partner-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .partner-hero-stats[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    text-align: left;\n  }\n  .partner-hero-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .partner-hero-live[_ngcontent-%COMP%] {\n    border-radius: 14px;\n    text-align: left;\n  }\n  .partner-hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .partner-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .company-founder-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: min(100%, 280px);\n  }\n  .company-founder-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .company-founder-highlights[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .recognition-section[_ngcontent-%COMP%] {\n    margin-top: 26px;\n  }\n  .recognition-heading[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n  .certification-grid[_ngcontent-%COMP%], \n   .award-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .award-year-panel[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .certificate-image-wrap[_ngcontent-%COMP%] {\n    height: 390px;\n  }\n  .certification-tab-panel[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .certification-tab-panel[_ngcontent-%COMP%]   .certificate-image-wrap[_ngcontent-%COMP%] {\n    height: 390px;\n    min-height: 0;\n  }\n  .award-card[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n}\n.team-page[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.team-trust-strip[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #dce7f5;\n  border-bottom: 1px solid #dce7f5;\n  background: #f5f9ff;\n}\n.team-trust-strip[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  min-height: 54px;\n  color: #526987;\n  font-size: 12px;\n}\n.team-trust-strip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #172f55;\n}\n.team-founder-photo-column[_ngcontent-%COMP%] {\n  min-width: 0;\n  text-align: center;\n}\n.team-founder-photo-column[_ngcontent-%COMP%]   .team-founder-linkedin[_ngcontent-%COMP%] {\n  margin-top: 38px;\n}\n.team-founder-linkedin[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin: 18px 0 0;\n  padding: 9px 14px;\n  border-radius: 7px;\n  background: #0a66c2;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.team-founder-linkedin[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.team-founder-linkedin[_ngcontent-%COMP%]:hover {\n  background: #004182;\n  color: #fff;\n}\n.team-founder-linkedin[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #0a66c2;\n  outline-offset: 3px;\n}\n.team-page[_ngcontent-%COMP%]    > .company-founder-section[_ngcontent-%COMP%] {\n  display: none;\n}\n.team-directory[_ngcontent-%COMP%] {\n  padding: 38px 0 32px 0;\n  background:\n    linear-gradient(\n      180deg,\n      #f5f9ff 0%,\n      #fff 38%);\n}\n.team-directory[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin-bottom: 28px;\n}\n.team-directory[_ngcontent-%COMP%]   #team-directory-title[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: clamp(26px, 3.2vw, 44px);\n}\n.team-directory[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #1769ff;\n  font-style: normal;\n}\n.team-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  gap: 20px;\n  overflow-x: auto;\n  padding: 4px 4px 8px;\n  margin: 0 0 34px;\n}\n.team-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  white-space: nowrap;\n  min-height: 46px;\n  padding: 12px 0;\n  border: 0;\n  border-bottom: 2px solid transparent;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  color: #52627a;\n  font: inherit;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: color .2s ease, border-color .2s ease;\n}\n.team-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: #1769ff;\n}\n.team-tabs[_ngcontent-%COMP%]   button[aria-selected=true][_ngcontent-%COMP%] {\n  border-bottom-color: #1769ff;\n  color: #1769ff;\n}\n.team-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible, \n.team-members-panel[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #1769ff;\n  outline-offset: 4px;\n}\n.team-members-panel[_ngcontent-%COMP%] {\n  min-height: 410px;\n  border-radius: 12px;\n}\n.team-group-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.team-group-label[_ngcontent-%COMP%], \n.team-role-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  border-radius: 3px;\n  background: #eeeaff;\n  color: #6246ff;\n  font: 700 10px/1.4 var(--body);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n  padding: 4px 8px;\n}\n.team-group-rule[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 1px;\n  background: #dfe4ee;\n}\n.team-group-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  font-size: 12px;\n  color: #1769ff;\n}\n.team-label-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n}\n.team-group-count[_ngcontent-%COMP%] {\n  color: #6578a1;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.team-portrait-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 24px;\n}\n.team-portrait-grid-security[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.team-portrait-card[_ngcontent-%COMP%] {\n  min-width: 0;\n  text-align: left;\n  border: 1px solid #d4dcf5;\n  border-radius: 11px;\n  overflow: hidden;\n  background: #fff;\n}\n.team-portrait-grid-security[_ngcontent-%COMP%]   .team-portrait-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.team-portrait-grid-security[_ngcontent-%COMP%]   .team-portrait-image[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.team-portrait-grid-security[_ngcontent-%COMP%]   .team-portrait-caption[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.team-portrait-grid-security[_ngcontent-%COMP%]   .team-portrait-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n.team-portrait-image[_ngcontent-%COMP%] {\n  overflow: hidden;\n  aspect-ratio: 1;\n  border: 0;\n  border-radius: 10px 10px 0 0;\n  background: #edf4ff;\n}\n.team-portrait-placeholder[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: #94afd1;\n}\n.team-portrait-placeholder[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 75%;\n  height: 85%;\n}\n.team-portrait-card[_ngcontent-%COMP%]:nth-child(4n+2)   .team-portrait-image[_ngcontent-%COMP%] {\n  background: #edf8f4;\n}\n.team-portrait-card[_ngcontent-%COMP%]:nth-child(4n+3)   .team-portrait-image[_ngcontent-%COMP%] {\n  background: #fff5e9;\n}\n.team-portrait-card[_ngcontent-%COMP%]:nth-child(4n+4)   .team-portrait-image[_ngcontent-%COMP%] {\n  background: #f3effa;\n}\n.team-portrait-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center bottom;\n  transition: transform .3s ease;\n}\n.team-portrait-card[_ngcontent-%COMP%]:hover   .team-portrait-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.035);\n}\n.team-portrait-caption[_ngcontent-%COMP%] {\n  padding: 14px 12px 16px;\n}\n.team-role-badge[_ngcontent-%COMP%] {\n  margin-bottom: 7px;\n  font-size: 9px;\n  padding: 4px 6px;\n  color: #1769ff;\n}\n.team-portrait-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 3px;\n  color: #0b1736;\n  font: 700 16px/1.3 var(--disp);\n}\n.team-portrait-caption[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #65738a;\n  font-size: 12px;\n  line-height: 1.5;\n}\n@media (max-width: 1000px) {\n  .team-portrait-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 760px) {\n  .team-directory[_ngcontent-%COMP%] {\n    padding: 24px 0 24px 0;\n  }\n  .team-directory[_ngcontent-%COMP%]   #team-directory-title[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .team-portrait-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 28px 16px;\n  }\n  .team-tabs[_ngcontent-%COMP%] {\n    gap: 20px;\n    margin-bottom: 28px;\n  }\n  .team-portrait-caption[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 420px) {\n  .team-portrait-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 300px;\n    margin: 0 auto;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .team-portrait-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .team-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .team-portrait-card[_ngcontent-%COMP%]:hover   .team-portrait-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    transform: none;\n  }\n}\n.team-management-section[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 17px 0 30px 0;\n  background:\n    radial-gradient(\n      260px 240px at -2% 0%,\n      rgba(191, 223, 255, .42),\n      transparent 72%),\n    radial-gradient(\n      220px 240px at 101% 100%,\n      rgba(224, 239, 255, .52),\n      transparent 72%),\n    #fff;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin-bottom: 34px;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #287be7;\n  font-size: 20px;\n  font-weight: 800;\n  letter-spacing: .03em;\n  text-transform: uppercase;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::after {\n  display: block;\n  width: 62px;\n  height: 3px;\n  margin: 12px auto 0;\n  border-radius: 99px;\n  background: #267bf0;\n  content: "";\n}\n.team-management-section[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: clamp(34px, 4.2vw, 55px);\n  letter-spacing: -.04em;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 18px;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid-four[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 24px;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%] {\n  padding: 22px 20px 24px;\n  border: 1px solid #e0ebf9;\n  border-radius: 22px;\n  background: rgba(255, 255, 255, .82);\n  box-shadow: 0 14px 34px rgba(21, 89, 164, .06);\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-photo[_ngcontent-%COMP%] {\n  width: 218px;\n  height: 218px;\n  margin: 0 auto 18px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: #dcecff;\n  box-shadow: inset 0 0 0 10px rgba(255, 255, 255, .38);\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(2)   .team-photo[_ngcontent-%COMP%] {\n  background: #d9f5ed;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(3)   .team-photo[_ngcontent-%COMP%] {\n  background: #ffecd2;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(4)   .team-photo[_ngcontent-%COMP%] {\n  background: #e9e1ff;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 13px;\n  font-size: 22px;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after {\n  display: block;\n  width: 54px;\n  height: 3px;\n  margin: 11px auto 0;\n  border-radius: 99px;\n  background: #287be7;\n  content: "";\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(2)   h3[_ngcontent-%COMP%]::after {\n  background: #19b777;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(3)   h3[_ngcontent-%COMP%]::after {\n  background: #f39a26;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(4)   h3[_ngcontent-%COMP%]::after {\n  background: #6540e8;\n}\n.team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 230px;\n  margin: 0 auto;\n  font-size: 16px;\n  line-height: 1.45;\n}\n.team-reference-row[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 34px 0 60px;\n  background:\n    radial-gradient(\n      260px 240px at -2% 0%,\n      rgba(191, 223, 255, .42),\n      transparent 72%),\n    radial-gradient(\n      220px 240px at 101% 100%,\n      rgba(224, 239, 255, .52),\n      transparent 72%),\n    #fff;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin-bottom: 34px;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: #287be7;\n  font-size: 20px;\n  font-weight: 800;\n  letter-spacing: .03em;\n  text-transform: uppercase;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]::after {\n  display: block;\n  width: 62px;\n  height: 3px;\n  margin: 12px auto 0;\n  border-radius: 99px;\n  background: #287be7;\n  content: "";\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-top: 12px;\n  font-size: clamp(34px, 4.2vw, 55px);\n  letter-spacing: -.04em;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  font-size: 18px;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%] {\n  padding: 22px 20px 24px;\n  border: 1px solid #e0ebf9;\n  border-radius: 22px;\n  background: rgba(255, 255, 255, .82);\n  box-shadow: 0 14px 34px rgba(21, 89, 164, .06);\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-photo[_ngcontent-%COMP%] {\n  width: 218px;\n  height: 218px;\n  margin: 0 auto 18px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: #dcecff;\n  box-shadow: inset 0 0 0 10px rgba(255, 255, 255, .38);\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(2)   .team-photo[_ngcontent-%COMP%] {\n  background: #d9f5ed;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(3)   .team-photo[_ngcontent-%COMP%] {\n  background: #ffecd2;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(4)   .team-photo[_ngcontent-%COMP%] {\n  background: #e9e1ff;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-bottom: 13px;\n  font-size: 22px;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]::after {\n  display: block;\n  width: 54px;\n  height: 3px;\n  margin: 11px auto 0;\n  border-radius: 99px;\n  background: #287be7;\n  content: "";\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(2)   h3[_ngcontent-%COMP%]::after {\n  background: #19b777;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(3)   h3[_ngcontent-%COMP%]::after {\n  background: #f39a26;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]:nth-child(4)   h3[_ngcontent-%COMP%]::after {\n  background: #6540e8;\n}\n.team-reference-row[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 230px;\n  margin: 0 auto;\n  font-size: 16px;\n  line-height: 1.45;\n}\n.team-founder-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 44px 0 62px;\n  background:\n    radial-gradient(\n      600px 360px at 9% 28%,\n      rgba(82, 182, 255, .18),\n      transparent 72%),\n    radial-gradient(\n      520px 300px at 97% 4%,\n      rgba(218, 235, 255, .7),\n      transparent 72%),\n    linear-gradient(\n      135deg,\n      #fff 0%,\n      #f8fbff 54%,\n      #fff 100%);\n}\n.team-founder-hero[_ngcontent-%COMP%]::after {\n  position: absolute;\n  right: -8%;\n  bottom: -58%;\n  width: 45%;\n  height: 80%;\n  border-radius: 50%;\n  background: rgba(216, 235, 255, .38);\n  content: "";\n  filter: blur(24px);\n}\n.team-founder-orb[_ngcontent-%COMP%] {\n  display: none;\n}\n.team-founder-hero-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(420px, .88fr) minmax(0, 1.32fr);\n  gap: 42px;\n  align-items: center;\n  max-width: 1320px;\n}\n.team-founder-portrait[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 620px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(239, 248, 255, .9),\n      rgba(255, 255, 255, .45));\n}\n.team-founder-portrait[_ngcontent-%COMP%]::before {\n  position: absolute;\n  bottom: 52px;\n  width: 355px;\n  height: 500px;\n  border-radius: 48% 52% 45% 55%;\n  background:\n    linear-gradient(\n      145deg,\n      #d9f2ff 0%,\n      #1375e8 58%,\n      #063a9a 100%);\n  content: "";\n  transform: rotate(-7deg);\n  box-shadow: 0 26px 55px rgba(22, 103, 208, .22);\n}\n.team-founder-portrait-ring[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  bottom: 34px;\n  width: 410px;\n  height: 540px;\n  border: 2px solid #2080ee;\n  border-radius: 50%;\n  transform: rotate(17deg);\n}\n.team-founder-dots[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 0;\n  left: 24px;\n  bottom: 225px;\n  width: 70px;\n  height: 70px;\n  background-image: radial-gradient(#2683ee 1.5px, transparent 1.5px);\n  background-size: 13px 13px;\n  opacity: .9;\n}\n.team-founder-portrait[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: min(100%, 430px);\n  max-height: 620px;\n  object-fit: contain;\n  object-position: bottom center;\n  filter: drop-shadow(0 24px 20px rgba(7, 39, 92, .22));\n}\n.team-proof-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 178px;\n  padding: 17px 19px;\n  border: 1px solid rgba(210, 226, 248, .9);\n  border-radius: 18px;\n  background: rgba(255, 255, 255, .94);\n  box-shadow: 0 16px 34px rgba(26, 81, 153, .14);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.team-proof-badge[_ngcontent-%COMP%]::before {\n  display: grid;\n  width: 27px;\n  height: 27px;\n  place-items: center;\n  border-radius: 9px;\n  background: #e4f0ff;\n  color: #126be0;\n  content: "\\f0\\178\\8f\\2020";\n  font-size: 14px;\n}\n.team-proof-business[_ngcontent-%COMP%]::before {\n  content: "\\f0\\178\\2018\\a5";\n}\n.team-proof-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #126be0;\n  font-size: 27px;\n  line-height: 1;\n}\n.team-proof-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #243754;\n  font-size: 14px;\n  line-height: 1.28;\n}\n.team-proof-experience[_ngcontent-%COMP%] {\n  top: 34px;\n  left: -8px;\n}\n.team-proof-business[_ngcontent-%COMP%] {\n  right: -4px;\n  bottom: 110px;\n}\n.team-portrait-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  right: auto;\n  bottom: -16px;\n  left: 50%;\n  color: #7aa7dc;\n  font: 800 10px/1 var(--mono);\n  letter-spacing: .18em;\n  text-transform: uppercase;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.team-portrait-footer[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin: 0 8px;\n  color: #b0c9e8;\n}\n.team-founder-content[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 12px 0 0;\n}\n.team-founder-eyebrow[_ngcontent-%COMP%] {\n  color: #126be0;\n  font: 800 13px/1 var(--mono);\n  letter-spacing: .2em;\n  text-transform: uppercase;\n}\n.team-founder-eyebrow[_ngcontent-%COMP%]::after {\n  display: inline-block;\n  width: 112px;\n  margin-left: 18px;\n  border-top: 2px solid #86b9f3;\n  content: "";\n  vertical-align: middle;\n}\n.team-founder-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 25px 0 3px;\n  color: #071d45;\n  font: 800 clamp(44px, 5vw, 72px)/1.02 var(--disp);\n  letter-spacing: -.05em;\n}\n.team-founder-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #126be0;\n  font: 800 clamp(22px, 2.4vw, 34px)/1.2 var(--disp);\n}\n.team-founder-company[_ngcontent-%COMP%] {\n  margin: 4px 0 22px;\n  color: #112951;\n  font-size: 20px;\n  line-height: 1.35;\n}\n.team-capabilities[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 11px 18px;\n  margin-bottom: 24px;\n  color: #233856;\n  font-size: 15px;\n}\n.team-capabilities[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.team-capabilities[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n  padding-left: 18px;\n  border-left: 1px solid #9eb5d2;\n}\n.team-capabilities[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 27px;\n  height: 27px;\n  place-items: center;\n  border-radius: 8px;\n  background: #e7f1ff;\n  color: #126be0;\n  font: 800 10px/1 var(--mono);\n  font-style: normal;\n}\n.team-founder-lead[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 0 16px;\n  color: #126be0;\n  font: 800 clamp(21px, 2.1vw, 30px)/1.25 var(--disp);\n}\n.team-founder-story[_ngcontent-%COMP%] {\n  max-width: 780px;\n  margin: 0 0 13px;\n  color: #536681;\n  font-size: 16px;\n  line-height: 1.62;\n}\n.team-founder-story-last[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.team-impact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.team-impact-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 105px;\n  flex-direction: column;\n  justify-content: center;\n  padding: 14px 16px;\n  border: 1px solid #c9def8;\n  border-radius: 15px;\n  background: rgba(255, 255, 255, .78);\n}\n.team-impact-grid[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #126be0;\n  font: 800 clamp(22px, 2vw, 30px)/1 var(--disp);\n}\n.team-impact-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 7px;\n  color: #2f4361;\n  font-size: 12px;\n  line-height: 1.25;\n}\n.team-certificate-link[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  margin-top: 10px;\n  padding: 6px 9px;\n  border: 1px solid #c9def8;\n  border-radius: 6px;\n  background: #edf5ff;\n  color: #0755b8;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1.4;\n  text-decoration: none;\n}\n.team-certificate-link[_ngcontent-%COMP%]:hover {\n  background: #dcecff;\n  border-color: #126be0;\n}\n.team-certificate-link[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #126be0;\n  outline-offset: 3px;\n}\n.team-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  min-height: 570px;\n  align-items: center;\n  padding: 52px 0 56px;\n  color: #fff;\n  isolation: isolate;\n  background:\n    radial-gradient(\n      900px 420px at 80% -20%,\n      #0e3a78 0%,\n      #061a39 60%);\n}\n.team-hero[_ngcontent-%COMP%]::before {\n  display: none;\n}\n.team-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  width: 100%;\n  max-width: 1240px;\n}\n.team-hero-grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: block;\n  min-height: 462px;\n}\n.team-hero-copy[_ngcontent-%COMP%] {\n  width: 58%;\n  max-width: 680px;\n  padding-top: 74px;\n}\n.team-hero-eyebrow[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 16px;\n  color: #67b4ff;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: .18em;\n  text-transform: uppercase;\n}\n.team-crumb[_ngcontent-%COMP%], \n.team-kicker[_ngcontent-%COMP%], \n.team-section-label[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  text-transform: uppercase;\n  letter-spacing: .14em;\n  font-size: 11px;\n  font-weight: 800;\n}\n.team-crumb[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  color: rgba(207, 227, 255, .72);\n}\n.team-kicker[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n  padding: 6px 11px;\n  border: 1px solid rgba(133, 185, 255, .34);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .08);\n  color: #7bc0ff;\n}\n.team-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 0 20px;\n  color: #fff;\n  font-size: clamp(32px, 4.4vw, 48px);\n  line-height: 1.12;\n  letter-spacing: -.02em;\n}\n.team-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #63b4ff;\n  font-style: normal;\n}\n.team-lead[_ngcontent-%COMP%] {\n  max-width: 450px;\n  margin: 0;\n  color: #d7e4f3;\n  font-size: 17px;\n  line-height: 1.6;\n}\n.team-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin-top: 42px;\n  flex-wrap: wrap;\n}\n.team-secondary-link[_ngcontent-%COMP%] {\n  color: #dcecff;\n  font-weight: 700;\n  text-decoration: none;\n}\n.team-secondary-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.team-hero-panel[_ngcontent-%COMP%] {\n  position: relative;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 48%;\n  min-height: 0;\n  overflow: visible;\n  border: 0;\n  background: transparent;\n  filter: drop-shadow(0 28px 36px rgba(3, 17, 43, .3));\n}\n.team-hero-panel[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 18%;\n  left: 18%;\n  width: 64%;\n  height: 54%;\n  border-radius: 50%;\n  background: #3d9cff;\n  content: "";\n  filter: blur(70px);\n  opacity: .32;\n  animation: _ngcontent-%COMP%_team-art-glow 5s ease-in-out infinite;\n}\n.team-art-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: none;\n}\n.team-hero-panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: block;\n  padding: 0;\n  object-fit: contain;\n  animation: _ngcontent-%COMP%_team-art-float 6s ease-in-out infinite;\n}\n.team-hero-secondary-image[_ngcontent-%COMP%] {\n  position: absolute !important;\n  z-index: 1 !important;\n  top: 8%;\n  right: 5%;\n  width: 88% !important;\n  max-width: 500px;\n  height: auto;\n  filter: drop-shadow(0 24px 26px rgba(2, 18, 53, .24));\n  animation: _ngcontent-%COMP%_team-secondary-float 7s ease-in-out infinite !important;\n}\n.team-highlight-strip[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  max-width: 560px;\n  margin-top: 28px;\n  background: transparent;\n}\n.team-highlight-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, max-content);\n  align-items: center;\n  justify-content: start;\n  gap: 12px 26px;\n  min-height: 64px;\n  color: #e6f2ff;\n  font-size: 12px;\n  font-weight: 700;\n}\n.team-highlight-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.team-highlight-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  display: grid;\n  width: 15px;\n  height: 15px;\n  place-items: center;\n  border-radius: 50%;\n  background: #1475ee;\n  color: #fff;\n  content: "\\2713";\n  font-size: 10px;\n  font-weight: 900;\n}\n@keyframes _ngcontent-%COMP%_team-art-float {\n  0%, 100% {\n    transform: scale(1.08) translateY(0);\n  }\n  50% {\n    transform: scale(1.08) translateY(-9px);\n  }\n}\n@keyframes _ngcontent-%COMP%_team-secondary-float {\n  0%, 100% {\n    transform: translateY(0) rotate(1deg);\n  }\n  50% {\n    transform: translateY(-12px) rotate(-1deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_team-art-glow {\n  0%, 100% {\n    transform: scale(.92);\n    opacity: .17;\n  }\n  50% {\n    transform: scale(1.06);\n    opacity: .28;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .team-hero-panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], \n   .team-hero-panel[_ngcontent-%COMP%]::before {\n    animation: none;\n  }\n  .team-hero-secondary-image[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n}\n.team-founder-section[_ngcontent-%COMP%], \n.team-section[_ngcontent-%COMP%], \n.team-contact-band[_ngcontent-%COMP%] {\n  padding: 21px 0 0 0;\n}\n.team-founder-grid[_ngcontent-%COMP%], \n.team-contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(320px, .9fr);\n  gap: 24px;\n  align-items: stretch;\n}\n.team-founder-copy[_ngcontent-%COMP%], \n.team-founder-panel[_ngcontent-%COMP%], \n.team-value-card[_ngcontent-%COMP%], \n.team-card[_ngcontent-%COMP%], \n.team-stat-card[_ngcontent-%COMP%], \n.team-contact-card[_ngcontent-%COMP%] {\n  border: 1px solid #dfe6f1;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 16px 42px rgba(14, 42, 85, .07);\n}\n.team-founder-copy[_ngcontent-%COMP%], \n.team-founder-panel[_ngcontent-%COMP%] {\n  padding: 28px;\n}\n.team-section-heading[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 30px;\n  text-align: center;\n}\n.team-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.team-section-label[_ngcontent-%COMP%] {\n  color: #1769ff;\n}\n.team-section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.team-founder-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.team-commitment-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.team-contact-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 0;\n  color: #0b1736;\n  font-size: clamp(28px, 4vw, 44px);\n  line-height: 1.12;\n}\n.team-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.team-founder-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.team-contact-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.team-commitment-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #55657b;\n  font-size: 16px;\n  line-height: 1.7;\n}\n.team-founder-role[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  color: #1769ff;\n  font-weight: 700;\n}\n.team-founder-note[_ngcontent-%COMP%] {\n  padding-left: 16px;\n  border-left: 3px solid #1769ff;\n}\n.team-founder-panel[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 84px minmax(0, 1fr);\n  gap: 18px;\n  align-items: start;\n  background:\n    linear-gradient(\n      180deg,\n      #f3f7fd,\n      #fff);\n}\n.team-founder-avatar[_ngcontent-%COMP%], \n.team-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  border-radius: 20px;\n  font-weight: 800;\n  letter-spacing: .08em;\n}\n.team-founder-avatar[_ngcontent-%COMP%] {\n  width: 84px;\n  height: 84px;\n  background:\n    linear-gradient(\n      135deg,\n      #1769ff,\n      #19a568);\n  color: #fff;\n  font-size: 22px;\n}\n.team-founder-panel[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #0b1736;\n  font-size: 17px;\n}\n.team-founder-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #55657b;\n  line-height: 1.7;\n}\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 24px;\n}\n.team-grid-four[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.team-grid-three[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(180px, 260px));\n  justify-content: center;\n  gap: 40px;\n}\n.team-grid-two[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(180px, 280px));\n  justify-content: center;\n  gap: 40px;\n}\n.team-card[_ngcontent-%COMP%], \n.team-value-card[_ngcontent-%COMP%], \n.team-stat-card[_ngcontent-%COMP%], \n.team-contact-card[_ngcontent-%COMP%] {\n  padding: 24px;\n}\n.team-avatar[_ngcontent-%COMP%] {\n  width: 62px;\n  height: 62px;\n  margin-bottom: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f1ff,\n      #effaf5);\n  color: #0b1736;\n  font-size: 18px;\n}\n.team-photo[_ngcontent-%COMP%] {\n  display: block;\n  object-fit: cover;\n}\n.team-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.team-value-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #0b1736;\n  font-size: 18px;\n  line-height: 1.25;\n}\n.team-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.team-value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #65738a;\n  font-size: 14px;\n  line-height: 1.65;\n}\n.team-card-small[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  text-align: center;\n}\n.team-grid[_ngcontent-%COMP%]   .team-photo[_ngcontent-%COMP%] {\n  width: min(100%, 196px);\n  height: auto;\n  aspect-ratio: 1;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n}\n.team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.25;\n}\n.team-grid[_ngcontent-%COMP%]   .team-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 220px;\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 1.45;\n}\n.team-values[_ngcontent-%COMP%] {\n  padding-top: 39px;\n}\n.team-commitment-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 24px;\n  align-items: start;\n}\n.team-commitment-copy[_ngcontent-%COMP%] {\n  container-type: inline-size;\n  padding: 32px;\n  border-radius: 24px;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(23, 105, 255, .08),\n      transparent 38%),\n    linear-gradient(\n      180deg,\n      #fff,\n      #f5f8fd);\n  border: 1px solid #dfe6f1;\n}\n.team-commitment-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(18px, 4.5cqw, 42px);\n  white-space: nowrap;\n}\n@media (max-width: 600px) {\n  .team-commitment-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n    white-space: normal;\n  }\n}\n.team-stats-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n}\n.team-stat-card[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 6px;\n  align-content: start;\n}\n.team-stat-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1769ff;\n  font-size: 34px;\n  line-height: 1;\n}\n.team-stat-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #516276;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.team-contact-band[_ngcontent-%COMP%] {\n  padding: 39px 0 42px 0;\n}\n.team-contact-copy[_ngcontent-%COMP%] {\n  padding: 32px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #0b234e,\n      #1057b7);\n  color: #fff;\n}\n.team-contact-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.team-contact-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.team-contact-cards[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 16px;\n}\n.team-contact-card[_ngcontent-%COMP%] {\n  display: block;\n  padding: 22px 24px;\n  color: inherit;\n  text-decoration: none;\n  transition:\n    transform .2s ease,\n    box-shadow .2s ease,\n    border-color .2s ease;\n}\n.team-contact-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #b8cce8;\n  box-shadow: 0 22px 44px rgba(14, 42, 85, .12);\n}\n.team-contact-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: #1769ff;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.team-contact-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin: 7px 0 7px;\n  color: #0b1736;\n  font-size: 18px;\n}\n.team-contact-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #65738a;\n  font-size: 14px;\n  line-height: 1.6;\n}\n@media (max-width: 1120px) {\n  .team-founder-grid[_ngcontent-%COMP%], \n   .team-commitment-grid[_ngcontent-%COMP%], \n   .team-contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-grid-four[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .team-grid-three[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .team-hero-copy[_ngcontent-%COMP%] {\n    width: 56%;\n  }\n  .team-hero-panel[_ngcontent-%COMP%] {\n    width: 46%;\n  }\n  .team-hero-secondary-image[_ngcontent-%COMP%] {\n    right: 0;\n    width: 96% !important;\n  }\n}\n@media (max-width: 800px) {\n  .team-hero[_ngcontent-%COMP%] {\n    min-height: 0;\n    padding: 70px 0 56px;\n  }\n  .team-hero-grid[_ngcontent-%COMP%] {\n    display: grid;\n    min-height: 0;\n    gap: 22px;\n  }\n  .team-hero-copy[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n    padding-top: 0;\n  }\n  .team-highlight-strip[_ngcontent-%COMP%] {\n    margin-top: 18px;\n  }\n  .team-highlight-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, max-content);\n    gap: 12px 20px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .team-founder-panel[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-hero-panel[_ngcontent-%COMP%] {\n    position: relative;\n    top: auto;\n    right: auto;\n    bottom: auto;\n    width: 100%;\n    min-height: 300px;\n    max-width: 540px;\n    margin: 12px auto 0;\n  }\n  .team-hero-secondary-image[_ngcontent-%COMP%] {\n    top: 0;\n    right: 0;\n    width: 96% !important;\n    max-width: none;\n  }\n  .team-founder-avatar[_ngcontent-%COMP%] {\n    width: 72px;\n    height: 72px;\n  }\n  .team-grid-four[_ngcontent-%COMP%], \n   .team-grid-three[_ngcontent-%COMP%], \n   .team-grid-two[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 560px) {\n  .team-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .team-highlight-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-actions[_ngcontent-%COMP%] {\n    gap: 12px;\n    margin-top: 32px;\n  }\n  .team-contact-copy[_ngcontent-%COMP%], \n   .team-founder-copy[_ngcontent-%COMP%], \n   .team-founder-panel[_ngcontent-%COMP%], \n   .team-commitment-copy[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .team-stats-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .team-management-section[_ngcontent-%COMP%]   .team-grid-four[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .team-management-section[_ngcontent-%COMP%]   .team-grid[_ngcontent-%COMP%]   .team-photo[_ngcontent-%COMP%] {\n    width: 190px;\n    height: 190px;\n  }\n}\n@media (max-width: 560px) {\n  .team-management-section[_ngcontent-%COMP%] {\n    padding: 28px 0 22px 0;\n  }\n  .team-management-section[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .team-management-section[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .team-management-section[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .team-management-section[_ngcontent-%COMP%]   .team-grid-four[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .team-reference-row[_ngcontent-%COMP%] {\n    padding: 28px 0 44px;\n  }\n  .team-reference-row[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .team-reference-row[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 34px;\n  }\n  .team-reference-row[_ngcontent-%COMP%]   .team-section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n@media (max-width: 1120px) {\n  .team-founder-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(340px, .82fr) minmax(0, 1.18fr);\n    gap: 28px;\n  }\n  .team-founder-portrait[_ngcontent-%COMP%] {\n    min-height: 560px;\n  }\n  .team-founder-portrait[_ngcontent-%COMP%]::before {\n    width: 310px;\n    height: 450px;\n  }\n  .team-founder-portrait-ring[_ngcontent-%COMP%] {\n    width: 360px;\n    height: 490px;\n  }\n  .team-founder-portrait[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    max-height: 560px;\n  }\n  .team-proof-experience[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  .team-proof-business[_ngcontent-%COMP%] {\n    right: 0;\n  }\n}\n@media (max-width: 800px) {\n  .team-trust-strip[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 12px 16px;\n  }\n  .team-founder-hero[_ngcontent-%COMP%] {\n    padding: 20px 0 38px;\n  }\n  .team-founder-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .team-founder-portrait[_ngcontent-%COMP%] {\n    min-height: 490px;\n    max-width: 560px;\n    margin: 0 auto;\n    width: 100%;\n  }\n  .team-founder-portrait[_ngcontent-%COMP%]::before {\n    bottom: 42px;\n    width: 285px;\n    height: 390px;\n  }\n  .team-founder-portrait-ring[_ngcontent-%COMP%] {\n    bottom: 28px;\n    width: 330px;\n    height: 425px;\n  }\n  .team-founder-portrait[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    max-height: 500px;\n  }\n  .team-founder-content[_ngcontent-%COMP%] {\n    padding-top: 12px;\n  }\n  .team-founder-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    font-size: clamp(40px, 10vw, 58px);\n  }\n  .team-impact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .team-founder-hero[_ngcontent-%COMP%] {\n    padding-top: 10px;\n  }\n  .team-founder-portrait[_ngcontent-%COMP%] {\n    min-height: 405px;\n  }\n  .team-founder-portrait[_ngcontent-%COMP%]::before {\n    bottom: 32px;\n    width: 230px;\n    height: 320px;\n  }\n  .team-founder-portrait-ring[_ngcontent-%COMP%] {\n    bottom: 21px;\n    width: 270px;\n    height: 350px;\n  }\n  .team-founder-portrait[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    max-height: 420px;\n  }\n  .team-proof-badge[_ngcontent-%COMP%] {\n    min-width: 0;\n    gap: 7px;\n    padding: 10px;\n    border-radius: 13px;\n  }\n  .team-proof-badge[_ngcontent-%COMP%]::before {\n    width: 20px;\n    height: 20px;\n    font-size: 10px;\n  }\n  .team-proof-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .team-proof-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  .team-proof-experience[_ngcontent-%COMP%] {\n    top: 28px;\n    left: -2px;\n  }\n  .team-proof-business[_ngcontent-%COMP%] {\n    right: -2px;\n    bottom: 70px;\n  }\n  .team-founder-dots[_ngcontent-%COMP%] {\n    left: 8px;\n    bottom: 175px;\n    width: 48px;\n    height: 48px;\n    background-size: 10px 10px;\n  }\n  .team-portrait-footer[_ngcontent-%COMP%] {\n    right: auto;\n    bottom: -10px;\n    left: 50%;\n    font-size: 7px;\n    letter-spacing: .08em;\n  }\n  .team-portrait-footer[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    margin: 0 4px;\n  }\n  .team-founder-eyebrow[_ngcontent-%COMP%] {\n    font-size: 10px;\n    letter-spacing: .13em;\n  }\n  .team-founder-eyebrow[_ngcontent-%COMP%]::after {\n    width: 45px;\n    margin-left: 10px;\n  }\n  .team-founder-company[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .team-capabilities[_ngcontent-%COMP%] {\n    gap: 10px;\n    font-size: 13px;\n  }\n  .team-capabilities[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]    + span[_ngcontent-%COMP%] {\n    padding-left: 10px;\n  }\n  .team-capabilities[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n  }\n  .team-founder-lead[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .team-founder-story[_ngcontent-%COMP%] {\n    font-size: 14px;\n    line-height: 1.6;\n  }\n}\n.certificate-text-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  min-height: 360px;\n  padding: 32px;\n  text-align: center;\n  background:\n    linear-gradient(\n      145deg,\n      #f8fbff,\n      #edf4ff);\n  border-radius: 20px 0 0 20px;\n  color: #041e42;\n}\n.certificate-text-preview[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 30px;\n  line-height: 1.3;\n}\n.certificate-text-preview[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: #1565d8;\n}\n.certification-buddha-strip[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.certification-buddha-strip[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  color: #fff;\n  font-size: 22px;\n  line-height: 1.3;\n}\n.certification-buddha-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 26px;\n}\n.certification-buddha-actions[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .4);\n  color: #fff;\n}\n@media (max-width: 700px) {\n  .certification-buddha-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1 1 145px;\n  }\n}\n.people-banner[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  background: #06234a;\n  color: #fff;\n  min-height: 440px;\n}\n.people-team-animation[_ngcontent-%COMP%] {\n  width: 46%;\n  margin-left: auto;\n  flex: 0 0 46%;\n  pointer-events: none;\n}\n.people-team-animation[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n.people-team-animation[_ngcontent-%COMP%] {\n  position: relative;\n  filter: drop-shadow(0 20px 24px #000b2240);\n}\n.people-team-animation[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 6% 3%;\n  background:\n    radial-gradient(\n      ellipse,\n      #258ffc26,\n      transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.team-person[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 8px 7px #00172f55);\n}\n.team-laptop[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 8px 12px #00aaff55);\n}\n.team-cloud[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 0 10px #44baff66);\n}\n.team-badge[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 8px 12px #000d2855);\n}\n.team-particles[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_team-status 5s ease-in-out infinite;\n}\n.team-brand[_ngcontent-%COMP%] {\n  fill: #fff;\n  font: 700 22px system-ui, sans-serif;\n}\n.team-label[_ngcontent-%COMP%] {\n  fill: #edf7ff;\n  font: 600 11px system-ui, sans-serif;\n}\n.team-detail[_ngcontent-%COMP%] {\n  fill: #9ec5e7;\n  font: 8px system-ui, sans-serif;\n}\n.team-caption[_ngcontent-%COMP%] {\n  fill: #b2d3f0;\n  font: 11px system-ui, sans-serif;\n  letter-spacing: .5px;\n}\n.team-network[_ngcontent-%COMP%], \n.team-connections[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_team-flow 18s linear infinite;\n}\n.team-badge[_ngcontent-%COMP%], \n.team-cloud[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_team-float 6s ease-in-out infinite;\n}\n.badge-right[_ngcontent-%COMP%] {\n  animation-delay: -3s;\n}\n.team-cloud[_ngcontent-%COMP%] {\n  animation-delay: -1.5s;\n}\n.team-code[_ngcontent-%COMP%] {\n  stroke-dasharray: 90;\n  animation: _ngcontent-%COMP%_team-code-draw 5s ease-in-out infinite;\n}\n.team-live[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_team-status 3s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_team-flow {\n  to {\n    stroke-dashoffset: -180;\n  }\n}\n@keyframes _ngcontent-%COMP%_team-float {\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes _ngcontent-%COMP%_team-code-draw {\n  0% {\n    stroke-dashoffset: 90;\n    opacity: .3;\n  }\n  50%, 90% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: .3;\n  }\n}\n@keyframes _ngcontent-%COMP%_team-status {\n  50% {\n    opacity: .3;\n  }\n}\n@media (max-width: 1100px) and (min-width: 761px) {\n  .people-team-animation[_ngcontent-%COMP%] {\n    width: 40%;\n    flex-basis: 40%;\n    margin-left: 3%;\n  }\n}\n@media (max-width: 760px) {\n  .team-page[_ngcontent-%COMP%]   .people-banner-inner[_ngcontent-%COMP%] {\n    padding-bottom: 24px;\n  }\n  .people-team-animation[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 540px;\n    margin: 24px auto 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .people-team-animation[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n}\n.people-banner-shade[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(3, 25, 57, .8),\n      rgba(3, 25, 57, .5) 39%,\n      transparent 66%);\n}\n.people-banner-inner[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 440px;\n  display: flex;\n  align-items: center;\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.people-banner-copy[_ngcontent-%COMP%] {\n  width: 51%;\n  max-width: 610px;\n}\n.people-banner-crumb[_ngcontent-%COMP%] {\n  color: #57b5ff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 2.5px;\n  text-transform: uppercase;\n  margin-bottom: 26px;\n}\n.people-banner-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.people-banner-eyebrow[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  color: #bad9f5;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  margin-bottom: 18px;\n}\n.people-banner-eyebrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 88px;\n  height: 2px;\n  background: #319fff;\n}\n.people-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: clamp(34px, 3.2vw, 50px);\n  font-weight: 800;\n  line-height: 1.06;\n  letter-spacing: -1.5px;\n  color: #fff;\n  margin: 0 0 15px;\n}\n.people-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #42a5ff;\n  font-style: normal;\n}\n.people-banner-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 480px;\n  color: #c1d2ea;\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.people-banner-strengths[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 17px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.people-banner-strengths[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.people-banner-strengths[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border: 2px solid #319fff;\n  border-radius: 50%;\n  color: #319fff;\n  font-size: 22px;\n  font-style: normal;\n}\n.people-banner-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n.people-banner-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      110deg,\n      #ff9144,\n      #ff7900);\n  border: 0;\n  color: #fff;\n  padding: 14px 25px;\n  border-radius: 7px;\n}\n.people-banner-story[_ngcontent-%COMP%] {\n  color: #b5c9e2;\n  font-size: 14px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #42a5ff;\n  text-decoration: none;\n}\n.people-banner-note[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 45px;\n  color: #fff;\n  font: italic 24px/1.3 Georgia, serif;\n  text-align: center;\n  transform: rotate(-9deg);\n  text-shadow: 0 2px 8px #06234a;\n}\n.people-banner-purpose[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 115px;\n  padding: 22px 25px;\n  border-radius: 12px;\n  background: #edf6ff;\n  color: #15345d;\n  font-size: 14px;\n  line-height: 1.65;\n  font-weight: 700;\n  box-shadow: 0 12px 30px #06234a20;\n}\n.people-banner-purpose[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  width: 32px;\n  height: 2px;\n  background: #1582ff;\n  margin-top: 12px;\n}\n#team-directory[_ngcontent-%COMP%], \n#team-story[_ngcontent-%COMP%] {\n  scroll-margin-top: 130px;\n}\n@media (max-width: 1100px) {\n  .people-banner-copy[_ngcontent-%COMP%] {\n    width: 57%;\n  }\n  .people-banner-strengths[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .people-banner-note[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .people-banner-purpose[_ngcontent-%COMP%] {\n    right: 10px;\n    bottom: 45px;\n  }\n  .people-banner-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n@media (max-width: 760px) {\n  .people-banner-photo[_ngcontent-%COMP%] {\n    height: 280px;\n    top: auto;\n    bottom: 0;\n    object-position: 75% center;\n  }\n  .people-banner-shade[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        180deg,\n        #06234a 0%,\n        #06234a 57%,\n        transparent 80%);\n  }\n  .people-banner-inner[_ngcontent-%COMP%] {\n    display: block;\n    padding-top: 32px;\n    padding-bottom: 290px;\n    min-height: 0;\n  }\n  .people-banner-copy[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: none;\n  }\n  .people-banner[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(34px, 8vw, 48px);\n  }\n  .people-banner-eyebrow[_ngcontent-%COMP%] {\n    font-size: 9px;\n    letter-spacing: 2px;\n  }\n  .people-banner-crumb[_ngcontent-%COMP%] {\n    font-size: 9px;\n  }\n  .people-banner-strengths[_ngcontent-%COMP%] {\n    gap: 15px;\n  }\n  .people-banner-strengths[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .people-banner-purpose[_ngcontent-%COMP%] {\n    bottom: 22px;\n    right: 0;\n    padding: 12px 16px;\n    font-size: 12px;\n  }\n  .people-banner-actions[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n}\n.team-page[_ngcontent-%COMP%]   .team-contact-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr);\n  gap: 28px;\n}\n.team-page[_ngcontent-%COMP%]   .team-contact-cards[_ngcontent-%COMP%] {\n  order: -1;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.team-page[_ngcontent-%COMP%]   .team-contact-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.team-page[_ngcontent-%COMP%]   .team-support-stripe[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 194px;\n  padding: 30px 165px 30px 36px;\n  border-radius: 17px;\n  background:\n    linear-gradient(\n      105deg,\n      #2168d8,\n      #0c469f);\n}\n.team-page[_ngcontent-%COMP%]   .team-support-stripe[_ngcontent-%COMP%]   .team-section-label[_ngcontent-%COMP%] {\n  color: #b8dcff;\n}\n.team-page[_ngcontent-%COMP%]   .team-support-stripe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 1.25;\n  margin: 8px 0;\n}\n.team-page[_ngcontent-%COMP%]   .team-support-stripe[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.6;\n  max-width: 850px;\n  margin: 0 0 18px;\n}\n@media (max-width: 760px) {\n  .team-page[_ngcontent-%COMP%]   .team-contact-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-page[_ngcontent-%COMP%]   .team-support-stripe[_ngcontent-%COMP%] {\n    padding: 26px;\n  }\n  .team-page[_ngcontent-%COMP%]   .team-support-stripe[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n  .team-page[_ngcontent-%COMP%]   .team-support-stripe[_ngcontent-%COMP%]   .pp-cta-buddha-link[_ngcontent-%COMP%] {\n    position: static;\n    display: block;\n    width: 80px;\n    height: 80px;\n    transform: none;\n    margin: 16px 0 0 auto;\n  }\n}\n.ekyc-page[_ngcontent-%COMP%] {\n  --ekyc-navy:#071b3d;\n  --ekyc-blue:#1267df;\n  --ekyc-orange:#ff7a1a;\n  --ekyc-ink:#12213a;\n  background: #fff;\n  color: var(--ekyc-ink);\n  font-family: var(--body);\n}\n.ekyc-hero[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      118deg,\n      #061632 0%,\n      #0a2d65 62%,\n      #0a408d 100%);\n  color: #fff;\n}\n.ekyc-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  background-image:\n    linear-gradient(#ffffff09 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #ffffff09 1px,\n      transparent 1px);\n  background-size: 52px 52px;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 40%,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 40%,\n      #000);\n}\n.ekyc-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  border-radius: 50%;\n  filter: blur(4px);\n  pointer-events: none;\n}\n.ekyc-orb-one[_ngcontent-%COMP%] {\n  width: 460px;\n  height: 460px;\n  right: -120px;\n  top: -240px;\n  background: #1674ff26;\n  box-shadow: 0 0 100px #1674ff55;\n}\n.ekyc-orb-two[_ngcontent-%COMP%] {\n  width: 230px;\n  height: 230px;\n  left: 43%;\n  bottom: -185px;\n  background: #ff7a1a1e;\n  box-shadow: 0 0 90px #ff7a1a35;\n}\n.ekyc-hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(330px, .6fr);\n  align-items: center;\n  gap: 70px;\n  max-width: 1220px;\n  margin: 0 auto;\n  padding: 78px 28px 82px;\n}\n.ekyc-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-bottom: 29px;\n  color: #93b6e7;\n  font-size: 12px;\n  font-weight: 650;\n}\n.ekyc-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #d3e7ff;\n  text-decoration: none;\n}\n.ekyc-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.ekyc-kicker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  color: #8cc4ff;\n  font: 750 11px/1.2 var(--mono);\n  letter-spacing: .17em;\n  text-transform: uppercase;\n}\n.ekyc-kicker[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #ff842b;\n  box-shadow: 0 0 0 5px #ff842b22;\n}\n.ekyc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 21px;\n  color: #fff;\n  font: 800 clamp(42px, 5vw, 68px)/1.04 var(--disp);\n  letter-spacing: -.045em;\n}\n.ekyc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #55a7ff;\n  font-style: normal;\n}\n.ekyc-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 730px;\n  margin: 0;\n  color: #ccdaef;\n  font-size: 17px;\n  line-height: 1.75;\n}\n.ekyc-intro-strip[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  max-width: 1120px;\n  margin: -26px auto 0;\n  padding: 0 28px;\n  position: relative;\n  z-index: 2;\n}\n.ekyc-intro-strip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-height: 88px;\n  padding: 17px 25px;\n  border: 1px solid #dce8f8;\n  border-right: 0;\n  background: #fff;\n  box-shadow: 0 13px 30px #17365e0d;\n}\n.ekyc-intro-strip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  border-radius: 14px 0 0 14px;\n}\n.ekyc-intro-strip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  border-right: 1px solid #dce8f8;\n  border-radius: 0 14px 14px 0;\n}\n.ekyc-intro-strip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 42px;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 11px;\n  background: #eaf3ff;\n  color: #1267df;\n  font-size: 22px;\n}\n.ekyc-intro-strip[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.ekyc-intro-strip[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #14243d;\n  font-size: 13px;\n}\n.ekyc-intro-strip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #728098;\n  font-size: 11px;\n  line-height: 1.35;\n}\n.ekyc-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 225px minmax(0, 820px);\n  gap: 65px;\n  max-width: 1110px;\n  margin: 76px auto 0;\n  padding: 0 28px 90px;\n}\n.ekyc-index[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 112px;\n  align-self: start;\n  display: grid;\n  padding: 21px 0;\n  border-top: 3px solid #1267df;\n  border-bottom: 1px solid #d9e3ef;\n}\n.ekyc-index[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin: 0 0 13px;\n  color: #172943;\n  font: 750 11px/1.2 var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.ekyc-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 4px;\n  color: #60708a;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.25;\n  text-decoration: none;\n  transition: color .2s, transform .2s;\n}\n.ekyc-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #a2b0c2;\n  font: 600 9px/1 var(--mono);\n}\n.ekyc-index[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #1267df;\n  transform: translateX(3px);\n}\n.ekyc-content[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.ekyc-section[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px minmax(0, 1fr);\n  gap: 20px;\n  padding: 0 0 60px;\n  scroll-margin-top: 115px;\n}\n.ekyc-section[_ngcontent-%COMP%]    + .ekyc-section[_ngcontent-%COMP%] {\n  padding-top: 54px;\n  border-top: 1px solid #e2e9f2;\n}\n.ekyc-section-number[_ngcontent-%COMP%] {\n  display: grid;\n  width: 43px;\n  height: 43px;\n  place-items: center;\n  border: 1px solid #cfe0f5;\n  border-radius: 11px;\n  background: #f4f8fd;\n  color: #1267df;\n  font: 700 12px/1 var(--mono);\n}\n.ekyc-overline[_ngcontent-%COMP%] {\n  display: block;\n  margin: 2px 0 9px;\n  color: #1670df;\n  font: 750 10px/1.2 var(--mono);\n  letter-spacing: .17em;\n  text-transform: uppercase;\n}\n.ekyc-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 17px;\n  color: #0b2042;\n  font: 750 clamp(25px, 3vw, 34px)/1.2 var(--disp);\n  letter-spacing: -.025em;\n}\n.ekyc-section-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: #586981;\n  font-size: 15px;\n  line-height: 1.8;\n}\n.ekyc-note[_ngcontent-%COMP%], \n.ekyc-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  margin-top: 23px;\n  padding: 16px 18px;\n  border-left: 3px solid #1267df;\n  border-radius: 0 10px 10px 0;\n  background: #eef6ff;\n}\n.ekyc-note[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1267df;\n  font-size: 21px;\n}\n.ekyc-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.ekyc-warning[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #405674;\n  font-size: 13px;\n  line-height: 1.65;\n}\n.ekyc-law-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 42px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 14px;\n  margin-top: 24px;\n  padding: 19px;\n  border: 1px solid #d8e5f4;\n  border-radius: 13px;\n  background: #fbfdff;\n}\n.ekyc-law-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 10px;\n  background: #e9f2ff;\n  color: #1267df;\n}\n.ekyc-law-card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 3px;\n  color: #162943;\n  font-size: 13px;\n}\n.ekyc-law-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #718096;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.ekyc-law-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1267df;\n  font-size: 11px;\n  font-weight: 750;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.ekyc-law-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.ekyc-service-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 25px;\n}\n.ekyc-service-grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 44px 1fr;\n  column-gap: 14px;\n  align-items: center;\n  padding: 17px;\n  border: 1px solid #dce7f4;\n  border-radius: 12px;\n}\n.ekyc-service-grid[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  grid-row: 1/3;\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 11px;\n  background: #eaf3ff;\n  color: #1267df;\n  font-size: 22px;\n}\n.ekyc-service-grid[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #172943;\n  font-size: 13px;\n}\n.ekyc-service-grid[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #75849a;\n  font-size: 10px;\n  line-height: 1.4;\n}\n.ekyc-check-list[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 11px 25px;\n  margin: 23px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.ekyc-check-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  color: #50627b;\n  font-size: 13px;\n  line-height: 1.55;\n}\n.ekyc-check-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  margin-top: 1px;\n  color: #1aa26f;\n  font-size: 18px;\n}\n.ekyc-document-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px;\n  margin-top: 26px;\n}\n.ekyc-document-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 25px;\n  border: 1px solid #d7e4f4;\n  border-radius: 15px;\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #f4f8ff);\n}\n.ekyc-document-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  width: 110px;\n  height: 110px;\n  right: -50px;\n  top: -50px;\n  border-radius: 50%;\n  background: #1267df0e;\n}\n.ekyc-document-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 45px;\n  height: 45px;\n  place-items: center;\n  margin-bottom: 16px;\n  border-radius: 12px;\n  background: #1267df;\n  color: #fff;\n  font-size: 23px;\n}\n.ekyc-document-card.business[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: #ff7a1a;\n}\n.ekyc-document-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 15px;\n  color: #112747;\n  font: 700 17px/1.25 var(--disp);\n}\n.ekyc-document-card[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.ekyc-document-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 16px;\n  color: #5d6e85;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.ekyc-document-card[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: .62em;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #1267df;\n}\n.ekyc-document-card.business[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  background: #ff7a1a;\n}\n.ekyc-warning[_ngcontent-%COMP%] {\n  border-left-color: #ff7a1a;\n  background: #fff5ec;\n}\n.ekyc-warning[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #f27418;\n  font-size: 22px;\n}\n.ekyc-warning[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #68492e;\n}\n.ekyc-process[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0;\n  margin-top: 28px;\n}\n.ekyc-process[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 0 14px;\n  text-align: center;\n}\n.ekyc-process[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  left: calc(50% + 27px);\n  right: calc(-50% + 27px);\n  top: 26px;\n  border-top: 1px dashed #9fbee7;\n}\n.ekyc-process[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 2;\n  top: -5px;\n  left: calc(50% + 16px);\n  display: grid;\n  width: 18px;\n  height: 18px;\n  place-items: center;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  background: #ff7a1a;\n  color: #fff;\n  font: 700 8px/1 var(--mono);\n}\n.ekyc-process[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: 54px;\n  height: 54px;\n  margin: 0 auto 15px;\n  place-items: center;\n  border-radius: 50%;\n  background: #e9f3ff;\n  color: #1267df;\n  font-size: 24px;\n}\n.ekyc-process[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #142943;\n  font-size: 12px;\n}\n.ekyc-process[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #7a8799;\n  font-size: 10px;\n  line-height: 1.45;\n}\n.ekyc-retention-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 21px;\n  margin: 25px 0;\n  padding: 20px 22px;\n  border: 1px solid #cfe1f7;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      105deg,\n      #edf6ff,\n      #fbfdff);\n}\n.ekyc-retention-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  color: #1267df;\n  font: 800 30px/1 var(--disp);\n}\n.ekyc-retention-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 21px;\n  border-left: 1px solid #c9daef;\n}\n.ekyc-retention-card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #172943;\n  font-size: 13px;\n}\n.ekyc-retention-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #65758b;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.ekyc-policy-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1267df;\n  font-weight: 700;\n  text-decoration: none;\n}\n.ekyc-policy-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.ekyc-actions-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  margin: 23px 0;\n  padding: 0;\n  list-style: none;\n}\n.ekyc-actions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 145px 1fr;\n  gap: 16px;\n  padding: 14px 17px;\n  border: 1px solid #e0e8f2;\n  border-radius: 10px;\n}\n.ekyc-actions-list[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #183053;\n  font-size: 12px;\n}\n.ekyc-actions-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #6c7b90;\n  font-size: 12px;\n  line-height: 1.45;\n}\n.ekyc-faq-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 10px;\n  margin-top: 25px;\n}\n.ekyc-faq-list[_ngcontent-%COMP%]   details[_ngcontent-%COMP%] {\n  border: 1px solid #dce5f0;\n  border-radius: 11px;\n  background: #fff;\n}\n.ekyc-faq-list[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  padding: 17px 18px;\n  color: #183052;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  list-style: none;\n}\n.ekyc-faq-list[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]::-webkit-details-marker {\n  display: none;\n}\n.ekyc-faq-list[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1267df;\n  font-size: 20px;\n  transition: transform .2s;\n}\n.ekyc-faq-list[_ngcontent-%COMP%]   details[open][_ngcontent-%COMP%]   summary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(45deg);\n}\n.ekyc-faq-list[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0 48px 18px 18px;\n  color: #65758b;\n  font-size: 12px;\n  line-height: 1.7;\n}\n.ekyc-cta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n  max-width: 1165px;\n  margin: 0 auto 85px;\n  padding: 42px 50px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      110deg,\n      #0a2858,\n      #0b56ae);\n  box-shadow: 0 22px 50px #0b347124;\n  color: #fff;\n}\n.ekyc-cta[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #75b8ff;\n  font: 750 10px/1.2 var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.ekyc-cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  color: #fff;\n  font: 750 clamp(24px, 3vw, 34px)/1.2 var(--disp);\n}\n.ekyc-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #c8d9ed;\n  font-size: 13px;\n}\n.ekyc-cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  flex: 0 0 auto;\n  padding: 14px 21px;\n  border-radius: 9px;\n  background: #ff7a1a;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 750;\n  text-decoration: none;\n  box-shadow: 0 10px 24px #02152d38;\n}\n.ekyc-cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: #ff8d39;\n}\n.ekyc-cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n@media (max-width: 900px) {\n  .ekyc-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 38px;\n    padding-top: 58px;\n  }\n  .ekyc-ready-card[_ngcontent-%COMP%] {\n    max-width: 520px;\n  }\n  .ekyc-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    margin-top: 55px;\n  }\n  .ekyc-index[_ngcontent-%COMP%] {\n    position: static;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 2px 12px;\n  }\n  .ekyc-index[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .ekyc-process[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 28px 0;\n  }\n  .ekyc-process[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:nth-child(2)::after {\n    display: none;\n  }\n  .ekyc-cta[_ngcontent-%COMP%] {\n    margin-left: 28px;\n    margin-right: 28px;\n  }\n}\n@media (max-width: 680px) {\n  .ekyc-hero-grid[_ngcontent-%COMP%] {\n    padding: 42px 20px 66px;\n  }\n  .ekyc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 42px;\n  }\n  .ekyc-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .ekyc-ready-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ekyc-intro-strip[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    margin-top: -20px;\n    padding: 0 20px;\n  }\n  .ekyc-intro-strip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    border-right: 1px solid #dce8f8;\n    border-bottom: 0;\n  }\n  .ekyc-intro-strip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    border-radius: 14px 14px 0 0;\n  }\n  .ekyc-intro-strip[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n    border-bottom: 1px solid #dce8f8;\n    border-radius: 0 0 14px 14px;\n  }\n  .ekyc-layout[_ngcontent-%COMP%] {\n    padding: 0 20px 65px;\n  }\n  .ekyc-index[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .ekyc-section[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n    padding-bottom: 45px;\n  }\n  .ekyc-section[_ngcontent-%COMP%]    + .ekyc-section[_ngcontent-%COMP%] {\n    padding-top: 40px;\n  }\n  .ekyc-section-number[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n  }\n  .ekyc-service-grid[_ngcontent-%COMP%], \n   .ekyc-check-list[_ngcontent-%COMP%], \n   .ekyc-document-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ekyc-law-card[_ngcontent-%COMP%] {\n    grid-template-columns: 42px 1fr;\n  }\n  .ekyc-law-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    grid-column: 2;\n  }\n  .ekyc-process[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .ekyc-process[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: 54px 1fr;\n    text-align: left;\n    column-gap: 16px;\n  }\n  .ekyc-process[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n  .ekyc-process[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    left: 42px;\n  }\n  .ekyc-process[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    grid-row: 1/3;\n    margin: 0;\n  }\n  .ekyc-actions-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 5px;\n  }\n  .ekyc-retention-card[_ngcontent-%COMP%] {\n    align-items: flex-start;\n  }\n  .ekyc-cta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    margin: 0 20px 60px;\n    padding: 30px 25px;\n  }\n  .ekyc-cta[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    width: 100%;\n    box-sizing: border-box;\n    justify-content: center;\n  }\n}\n@media (max-width: 420px) {\n  .ekyc-index[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .ekyc-retention-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .ekyc-retention-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 15px 0 0;\n    border-left: 0;\n    border-top: 1px solid #c9daef;\n  }\n  .ekyc-faq-list[_ngcontent-%COMP%]   summary[_ngcontent-%COMP%] {\n    padding: 15px;\n  }\n  .ekyc-faq-list[_ngcontent-%COMP%]   details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    padding: 0 40px 16px 15px;\n  }\n}\n.privacy-policy-page[_ngcontent-%COMP%]   .privacy-policy-hero[_ngcontent-%COMP%], \n.ekyc-page[_ngcontent-%COMP%]   .ekyc-hero[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  min-height: 440px;\n  padding: 0;\n  background:\n    radial-gradient(\n      ellipse at 76% 38%,\n      #075091 0,\n      transparent 43%),\n    linear-gradient(\n      115deg,\n      #04264d,\n      #021a38 62%,\n      #032854);\n  color: #fff;\n}\n.privacy-policy-page[_ngcontent-%COMP%]   .privacy-policy-hero[_ngcontent-%COMP%]::before, \n.ekyc-page[_ngcontent-%COMP%]   .ekyc-hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  background:\n    linear-gradient(#55baff0a 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #55baff0a 1px,\n      transparent 1px);\n  background-size: 54px 54px;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent 5%,\n      #000 72%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent 5%,\n      #000 72%,\n      transparent);\n  pointer-events: none;\n}\n.privacy-policy-hero-inner[_ngcontent-%COMP%], \n.ekyc-hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.35fr) minmax(350px, .85fr);\n  align-items: center;\n  gap: 38px;\n  width: 100%;\n  max-width: 1440px;\n  min-height: 440px;\n  margin: 0 auto;\n  padding: 50px 40px;\n  box-sizing: border-box;\n  text-align: left;\n}\n.policy-hero-copy[_ngcontent-%COMP%], \n.ekyc-hero-copy[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  display: block;\n  min-width: 0;\n  width: auto;\n  text-align: left;\n}\n.privacy-policy-breadcrumb[_ngcontent-%COMP%], \n.ekyc-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 0 0 22px;\n  color: #35b5ff;\n  font-size: 14px;\n  font-weight: 500;\n}\n.privacy-policy-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], \n.ekyc-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #c4d5ec;\n  text-decoration: none;\n}\n.privacy-policy-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.ekyc-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n.privacy-policy-breadcrumb[_ngcontent-%COMP%]   span[aria-hidden][_ngcontent-%COMP%], \n.ekyc-breadcrumb[_ngcontent-%COMP%]   span[aria-hidden][_ngcontent-%COMP%] {\n  color: #36b3ff;\n  font-size: 18px;\n}\n.privacy-policy-page[_ngcontent-%COMP%]   .privacy-policy-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n.ekyc-page[_ngcontent-%COMP%]   .ekyc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: #fff;\n  font: 800 clamp(48px, 5.3vw, 76px)/1.08 var(--disp);\n  letter-spacing: -.04em;\n  text-align: left;\n}\n.privacy-policy-page[_ngcontent-%COMP%]   .privacy-policy-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%], \n.ekyc-page[_ngcontent-%COMP%]   .ekyc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #2ba8f7;\n  font-style: normal;\n}\n.policy-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], \n.ekyc-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0;\n  color: #c4d1e3;\n  font-size: 18px;\n  line-height: 1.65;\n  text-align: left;\n}\n.policy-hero-benefits[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 36px;\n}\n.policy-hero-benefits[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n  padding-right: 14px;\n  border-right: 1px solid #19609a;\n  color: inherit;\n  text-decoration: none;\n  transition: transform .2s, color .2s;\n}\n.policy-hero-benefits[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n  border-right: 0;\n}\n.policy-hero-benefits[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 50px;\n  width: 50px;\n  height: 50px;\n  place-items: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      145deg,\n      #064279,\n      #022349);\n  box-shadow: inset 0 0 0 1px #1682c955;\n  color: #3cb9ff;\n  font-size: 27px;\n  transition: background .2s, box-shadow .2s;\n}\n.policy-hero-benefits[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.policy-hero-benefits[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover    > span[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0961a5,\n      #053566);\n  box-shadow: inset 0 0 0 1px #45baff88, 0 0 18px #159fff55;\n}\n.policy-hero-benefits[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #53c3ff;\n  outline-offset: 6px;\n  border-radius: 8px;\n}\n.policy-hero-benefits[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  min-width: 0;\n  margin: 0;\n}\n.policy-hero-benefits[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n  font-size: 14px;\n  line-height: 1.35;\n}\n.policy-hero-benefits[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: #c2d0e5;\n  font-size: 12px;\n  line-height: 1.4;\n}\n.policy-hero-art[_ngcontent-%COMP%] {\n  position: relative;\n  height: 350px;\n  min-width: 0;\n  pointer-events: none;\n}\n.policy-art-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4%;\n  top: 3%;\n  width: 310px;\n  height: 310px;\n  border-radius: 50%;\n  background: #087de329;\n  filter: blur(18px);\n}\n.policy-art-globe[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 7%;\n  top: 4%;\n  width: 270px;\n  height: 270px;\n  overflow: hidden;\n  border: 1px solid #35b8ff99;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 29% 24%,\n      #1789ca,\n      #073c74 43%,\n      #021b42 78%);\n  box-shadow: inset 8px 5px 22px #21bcff55, 0 0 42px #087de34d;\n}\n.policy-art-globe[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(#62cfff 1px, transparent 1.5px);\n  background-size: 7px 7px;\n  opacity: .42;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at 45% 35%,\n      #000,\n      transparent 74%);\n  mask-image:\n    radial-gradient(\n      ellipse at 45% 35%,\n      #000,\n      transparent 74%);\n}\n.policy-art-globe[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  inset: 18% -10%;\n  border: 1px dashed #76d5ff99;\n  border-radius: 50%;\n  transform: rotate(-20deg);\n}\n.policy-art-globe[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0 24%;\n  border: 1px solid #62c8ff4d;\n  border-radius: 50%;\n}\n.policy-art-globe[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  inset: 23% 0;\n}\n.policy-art-globe[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  inset: 9%;\n  transform: rotate(37deg);\n}\n.policy-art-card[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  left: 3%;\n  bottom: 10px;\n  display: flex;\n  width: min(280px, 70%);\n  min-height: 170px;\n  padding: 25px 25px 21px;\n  box-sizing: border-box;\n  align-items: flex-start;\n  flex-direction: column;\n  border: 2px solid #91d6ff;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      #e9f6ff,\n      #9ccdf8);\n  box-shadow: 0 20px 42px #00142e99, 0 0 20px #159fff4d;\n  color: #062e5a;\n  transform: perspective(700px) rotateY(8deg) rotate(-2deg);\n}\n.policy-art-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 14px;\n  place-items: center;\n  border-radius: 13px;\n  background: #138ee7;\n  color: #fff;\n  font-size: 29px;\n  box-shadow: 0 8px 18px #0c6bb84d;\n}\n.policy-art-card[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 800 23px/1.15 var(--disp);\n  letter-spacing: -.02em;\n}\n.policy-art-card[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: #416d99;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n}\n.policy-art-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 5px;\n  margin-top: 17px;\n  border-radius: 9px;\n  background: #0f75bd2b;\n}\n.policy-art-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]    + i[_ngcontent-%COMP%] {\n  width: 76%;\n  margin-top: 7px;\n}\n.policy-art-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]    + i[_ngcontent-%COMP%]    + i[_ngcontent-%COMP%] {\n  width: 52%;\n}\n.policy-art-node[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 4;\n  display: grid;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n  border: 1px solid #4ebcff;\n  border-radius: 50%;\n  background: #0b4279d9;\n  box-shadow: 0 0 15px #149fff70;\n  color: #a6e2ff;\n  font-size: 25px;\n}\n.policy-art-node-one[_ngcontent-%COMP%] {\n  left: 11%;\n  top: 35px;\n}\n.policy-art-node-two[_ngcontent-%COMP%] {\n  right: 13%;\n  top: 2px;\n}\n.policy-art-node-three[_ngcontent-%COMP%] {\n  right: 0;\n  top: 105px;\n}\n.policy-hero-art--abuse[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: 1%;\n  top: 0;\n  width: 320px;\n  height: 320px;\n  border-radius: 50%;\n  background: #087de329;\n  filter: blur(18px);\n}\n.abuse-radar[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 4%;\n  top: 5px;\n  width: 260px;\n  height: 260px;\n  overflow: hidden;\n  border: 1px solid #38b9ff99;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      #0a568a 0,\n      #052d5c 48%,\n      #021a3d 76%);\n  box-shadow: inset 0 0 35px #20b9ff4d, 0 0 35px #087de355;\n}\n.abuse-radar[_ngcontent-%COMP%]::before, \n.abuse-radar[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  background: #54c7ff4d;\n}\n.abuse-radar[_ngcontent-%COMP%]::before {\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 1px;\n}\n.abuse-radar[_ngcontent-%COMP%]::after {\n  right: 0;\n  left: 0;\n  top: 50%;\n  height: 1px;\n}\n.abuse-radar[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: absolute;\n  border: 1px solid #5bceff52;\n  border-radius: 50%;\n}\n.abuse-radar[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:nth-child(1) {\n  inset: 18%;\n}\n.abuse-radar[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:nth-child(2) {\n  inset: 35%;\n}\n.abuse-radar[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%]:nth-child(3) {\n  left: 66%;\n  top: 27%;\n  width: 9px;\n  height: 9px;\n  border: 0;\n  background: #ff8b38;\n  box-shadow: 0 0 0 6px #ff8b3826, 0 0 16px #ff8b38;\n}\n.abuse-radar[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 50% 0 0 50%;\n  background:\n    conic-gradient(\n      from 270deg,\n      #51cbff4d,\n      transparent 42%);\n  transform-origin: 0 0;\n}\n.abuse-monitor[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  left: 1%;\n  bottom: 8px;\n  width: min(310px, 76%);\n  min-height: 176px;\n  overflow: hidden;\n  border: 2px solid #70c7f5;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      145deg,\n      #0c477d,\n      #05264e);\n  box-shadow: 0 22px 42px #00142eaa, 0 0 18px #159fff4d;\n  transform: perspective(700px) rotateY(7deg) rotate(-1deg);\n}\n.abuse-monitor-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: 30px;\n  padding: 0 12px;\n  border-bottom: 1px solid #4fbdf044;\n  background: #031d3d;\n}\n.abuse-monitor-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #ff765e;\n}\n.abuse-monitor-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  background: #ffbb4d;\n}\n.abuse-monitor-bar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  background: #4ad68a;\n}\n.abuse-monitor-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #72caff;\n  font: 700 8px/1 var(--mono);\n  letter-spacing: .12em;\n}\n.abuse-monitor-body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 17px 19px 8px;\n}\n.abuse-monitor-body[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 47px;\n  height: 47px;\n  place-items: center;\n  border-radius: 12px;\n  background: #0d91df;\n  color: #fff;\n  font-size: 28px;\n}\n.abuse-monitor-body[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: #fff;\n  font-size: 17px;\n}\n.abuse-monitor-body[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  color: #9ec9e7;\n  font-size: 10px;\n}\n.abuse-signal[_ngcontent-%COMP%] {\n  display: flex;\n  height: 35px;\n  margin: 0 20px;\n  align-items: flex-end;\n  gap: 7px;\n}\n.abuse-signal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 30%;\n  border-radius: 3px 3px 0 0;\n  background: #2bb8ff;\n}\n.abuse-signal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  height: 55%;\n}\n.abuse-signal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  height: 38%;\n}\n.abuse-signal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(4) {\n  height: 82%;\n  background: #ff8438;\n}\n.abuse-signal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(5) {\n  height: 62%;\n}\n.abuse-signal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(6) {\n  height: 90%;\n}\n.abuse-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin: 10px 20px 15px;\n  color: #b9d8ec;\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n}\n.abuse-status[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  box-shadow: 0 0 8px #4ade80;\n}\n.abuse-node-one[_ngcontent-%COMP%] {\n  left: 5%;\n  top: 35px;\n}\n.abuse-node-two[_ngcontent-%COMP%] {\n  right: 0;\n  top: 105px;\n}\n.policy-hero-art--ekyc[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  right: 2%;\n  top: 1%;\n  width: 310px;\n  height: 310px;\n  border-radius: 50%;\n  background: #087de329;\n  filter: blur(18px);\n}\n.ekyc-art-orbit[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 2%;\n  top: 12px;\n  width: 280px;\n  height: 280px;\n  border: 1px dashed #56c6ff80;\n  border-radius: 50%;\n  transform: rotate(-15deg);\n}\n.ekyc-art-orbit[_ngcontent-%COMP%]::before, \n.ekyc-art-orbit[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  border: 1px solid #4ebcff4d;\n  border-radius: 50%;\n}\n.ekyc-art-orbit[_ngcontent-%COMP%]::before {\n  inset: 35px -22px;\n  transform: rotate(42deg);\n}\n.ekyc-art-orbit[_ngcontent-%COMP%]::after {\n  inset: 72px -42px;\n  transform: rotate(-28deg);\n}\n.ekyc-art-orbit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #6cddff;\n  box-shadow: 0 0 12px #6cddff;\n}\n.ekyc-art-orbit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  left: 18px;\n  top: 70px;\n}\n.ekyc-art-orbit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child {\n  right: 6px;\n  bottom: 66px;\n}\n.ekyc-id-card[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 3;\n  left: 3%;\n  bottom: 8px;\n  width: min(315px, 77%);\n  min-height: 190px;\n  overflow: hidden;\n  border: 2px solid #91d6ff;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      #f0f9ff,\n      #9dccf4);\n  box-shadow: 0 22px 44px #00142eaa, 0 0 20px #159fff4d;\n  color: #07315d;\n  transform: perspective(700px) rotateY(8deg) rotate(-2deg);\n}\n.ekyc-id-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 12px 16px;\n  background: #0b69b1;\n  color: #fff;\n}\n.ekyc-id-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.ekyc-id-head[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 750 10px/1 var(--mono);\n  letter-spacing: .13em;\n}\n.ekyc-id-body[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: 76px 1fr;\n  gap: 16px;\n  padding: 22px 18px;\n}\n.ekyc-id-photo[_ngcontent-%COMP%] {\n  display: grid;\n  width: 76px;\n  height: 88px;\n  place-items: end center;\n  overflow: hidden;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      145deg,\n      #d9efff,\n      #74b8ee);\n  color: #176ca9;\n}\n.ekyc-id-photo[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 70px;\n  transform: translateY(9px);\n}\n.ekyc-id-lines[_ngcontent-%COMP%] {\n  padding-top: 5px;\n}\n.ekyc-id-lines[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 7px;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  background: #176ca92b;\n}\n.ekyc-id-lines[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2) {\n  width: 78%;\n}\n.ekyc-id-lines[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(3) {\n  width: 56%;\n}\n.ekyc-id-lines[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 17px;\n  color: #176ca9;\n  font-size: 9px;\n  font-weight: 750;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n}\n.ekyc-id-fingerprint[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 16px;\n  bottom: 13px;\n  color: #177bc1;\n  font-size: 40px;\n  opacity: .48;\n}\n.ekyc-verified-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 5;\n  right: 0;\n  bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border: 1px solid #80d5ad;\n  border-radius: 999px;\n  background: #effff7;\n  box-shadow: 0 12px 25px #00142e73;\n  color: #087847;\n}\n.ekyc-verified-badge[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 25px;\n  height: 25px;\n  place-items: center;\n  border-radius: 50%;\n  background: #13a864;\n  color: #fff;\n  font-size: 17px;\n}\n.ekyc-verified-badge[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 10px;\n  white-space: nowrap;\n}\n.ekyc-node-one[_ngcontent-%COMP%] {\n  left: 7%;\n  top: 26px;\n}\n.ekyc-node-two[_ngcontent-%COMP%] {\n  right: 7%;\n  top: 30px;\n}\n@media (max-width: 1100px) {\n  .privacy-policy-hero-inner[_ngcontent-%COMP%], \n   .ekyc-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1.2fr) minmax(310px, .8fr);\n    gap: 16px;\n    padding-inline: 24px;\n  }\n  .policy-hero-benefits[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n  .policy-hero-benefits[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    gap: 8px;\n    padding-right: 8px;\n  }\n  .policy-hero-benefits[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    flex-basis: 38px;\n    font-size: 22px;\n  }\n  .policy-hero-art[_ngcontent-%COMP%] {\n    transform: scale(.92);\n    transform-origin: center;\n  }\n}\n@media (max-width: 820px) {\n  .privacy-policy-hero-inner[_ngcontent-%COMP%], \n   .ekyc-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 42px 24px 28px;\n  }\n  .privacy-policy-page[_ngcontent-%COMP%]   .privacy-policy-hero[_ngcontent-%COMP%], \n   .ekyc-page[_ngcontent-%COMP%]   .ekyc-hero[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .policy-hero-art[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 500px;\n    margin: 10px auto 0;\n    transform: none;\n  }\n  .policy-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], \n   .ekyc-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .policy-hero-benefits[_ngcontent-%COMP%] {\n    max-width: 700px;\n  }\n}\n@media (max-width: 540px) {\n  .privacy-policy-hero-inner[_ngcontent-%COMP%], \n   .ekyc-hero-grid[_ngcontent-%COMP%] {\n    padding: 36px 20px 20px;\n  }\n  .privacy-policy-page[_ngcontent-%COMP%]   .privacy-policy-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .ekyc-page[_ngcontent-%COMP%]   .ekyc-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(38px, 12vw, 51px);\n  }\n  .privacy-policy-breadcrumb[_ngcontent-%COMP%], \n   .ekyc-breadcrumb[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .policy-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], \n   .ekyc-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .policy-hero-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 14px;\n    margin-top: 26px;\n  }\n  .policy-hero-benefits[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n    border: 0;\n  }\n  .policy-hero-benefits[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .policy-hero-art[_ngcontent-%COMP%] {\n    height: 295px;\n    transform: scale(.87);\n    transform-origin: top center;\n    margin-bottom: -30px;\n  }\n  .policy-art-node-one[_ngcontent-%COMP%] {\n    left: 5%;\n  }\n}\n@media (prefers-reduced-motion: no-preference) {\n  .policy-art-globe[_ngcontent-%COMP%]::before {\n    animation: _ngcontent-%COMP%_policy-globe-turn 34s linear infinite;\n  }\n  .policy-art-card[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_policy-card-float 6s ease-in-out infinite;\n  }\n  .policy-art-node[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_policy-node-float 5s ease-in-out infinite;\n  }\n  .policy-art-node-two[_ngcontent-%COMP%], \n   .abuse-node-two[_ngcontent-%COMP%], \n   .ekyc-node-two[_ngcontent-%COMP%] {\n    animation-delay: -1.7s;\n  }\n  .policy-art-node-three[_ngcontent-%COMP%] {\n    animation-delay: -3.2s;\n  }\n  .abuse-radar[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_abuse-radar-sweep 6s linear infinite;\n  }\n  .abuse-signal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_abuse-signal-pulse 2.5s ease-in-out infinite alternate;\n  }\n  .abuse-signal[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:nth-child(2n) {\n    animation-delay: -1.2s;\n  }\n  .ekyc-id-card[_ngcontent-%COMP%] {\n    animation: _ngcontent-%COMP%_ekyc-card-float 6s ease-in-out infinite;\n  }\n}\n@keyframes _ngcontent-%COMP%_policy-globe-turn {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_policy-card-float {\n  50% {\n    transform: perspective(700px) rotateY(8deg) rotate(-2deg) translateY(-7px);\n  }\n}\n@keyframes _ngcontent-%COMP%_policy-node-float {\n  50% {\n    transform: translateY(-9px);\n  }\n}\n@keyframes _ngcontent-%COMP%_abuse-radar-sweep {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_abuse-signal-pulse {\n  to {\n    height: 45%;\n  }\n}\n@keyframes _ngcontent-%COMP%_ekyc-card-float {\n  50% {\n    transform: perspective(700px) rotateY(8deg) rotate(-2deg) translateY(-7px);\n  }\n}\n.career-overview-hero[_ngcontent-%COMP%] {\n  min-height: 620px;\n  background:\n    radial-gradient(\n      circle at 74% 18%,\n      rgba(28, 151, 255, .4) 0,\n      rgba(18, 98, 207, .2) 30%,\n      rgba(3, 24, 58, 0) 56%),\n    linear-gradient(\n      114deg,\n      #021a38 0%,\n      #04264d 44%,\n      #063a72 78%,\n      #021a38 100%);\n}\n.career-overview-hero[_ngcontent-%COMP%]::before {\n  background:\n    radial-gradient(\n      circle at 79% 22%,\n      rgba(43, 168, 247, .24),\n      transparent 32%);\n}\n.career-overview-hero[_ngcontent-%COMP%]::after, \n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-orb[_ngcontent-%COMP%] {\n  display: none;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-inner[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);\n  gap: 40px;\n  width: min(100% - 40px, 1280px);\n  min-height: 620px;\n  padding: 45px 0 0;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-copy[_ngcontent-%COMP%] {\n  max-width: 650px;\n  padding-bottom: 48px;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-eyebrow[_ngcontent-%COMP%] {\n  margin: 27px 0 0;\n  color: #fff;\n  font: 700 22px/1.2 var(--body);\n  letter-spacing: 0;\n  text-transform: none;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-eyebrow[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: none;\n}\n.career-overview-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 600px;\n  font: 700 clamp(44px, 4vw, 54px)/1.07 var(--disp);\n  letter-spacing: 0;\n}\n.career-overview-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background: none;\n  color: #3275f8;\n  -webkit-text-fill-color: currentColor;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-tagline[_ngcontent-%COMP%] {\n  max-width: 610px;\n  margin-top: 20px;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.45;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-benefits[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 20px;\n  max-width: 650px;\n  margin-top: 34px;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-benefits[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  gap: 11px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.18;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-benefits[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  color: #fff;\n  font-size: 36px;\n  font-variation-settings: "FILL" 0, "wght" 350;\n}\n.career-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 34px;\n}\n.career-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  min-width: 210px;\n  min-height: 48px;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  padding: 0 26px;\n  border: 1px solid transparent;\n  border-radius: 999px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 650;\n  text-decoration: none;\n  transition:\n    transform .2s,\n    border-color .2s,\n    color .2s;\n}\n.career-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.career-hero-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #1769e8,\n      #2878ff,\n      #20b8e5);\n  box-shadow: 0 15px 34px rgba(23, 105, 232, .32);\n}\n.career-hero-secondary[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .85) !important;\n  background: transparent;\n}\n.career-hero-secondary[_ngcontent-%COMP%]:hover {\n  border-color: #35c4ff !important;\n  color: #35c4ff;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  align-self: end;\n  height: 590px;\n  overflow: visible;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  transform: translate(35px, 36px);\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-visual[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  right: 30px;\n  top: 72px;\n  width: 430px;\n  height: 430px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      transparent 0 55px,\n      #386ce3 56px 84px,\n      transparent 85px 115px,\n      #386ce3 116px 144px,\n      transparent 145px 176px,\n      #386ce3 177px 207px,\n      transparent 208px);\n  opacity: .92;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-visual[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  right: 222px;\n  top: 85px;\n  width: 28px;\n  height: 400px;\n  background: #386ce3;\n  opacity: .92;\n}\n.career-overview-hero[_ngcontent-%COMP%]   .career-hero-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: 1;\n  right: -58px;\n  bottom: 0;\n  width: 112%;\n  height: auto;\n  max-height: 570px;\n  object-fit: contain;\n  object-position: right bottom;\n  filter: drop-shadow(0 20px 24px rgba(0, 0, 0, .22));\n}\n.career-impact-strip[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  margin-top: -50px;\n  padding: 0 20px 40px;\n  border: 0;\n  background: linear-gradient(transparent 44px, #fff 44px);\n}\n.career-impact-inner[_ngcontent-%COMP%] {\n  width: min(100%, 1120px);\n  min-height: 88px;\n  padding: 20px 36px;\n  border-radius: 10px;\n  box-shadow: 0 12px 24px rgba(0, 0, 0, .18);\n}\n.career-impact-item[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.career-impact-item[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 46px;\n}\n.career-impact-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font: 500 clamp(32px, 2.7vw, 40px)/1 var(--disp);\n}\n.career-impact-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:not(.material-symbols-outlined) {\n  margin-top: 4px;\n  color: #000;\n  font-size: 13px;\n  font-weight: 400;\n}\n.career-why[_ngcontent-%COMP%] {\n  padding: 55px 24px 72px;\n  background: #fff;\n}\n.career-why-inner[_ngcontent-%COMP%] {\n  grid-template-columns: 260px minmax(0, 1fr);\n  gap: 48px;\n  width: min(100%, 1280px);\n}\n.career-why-intro[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  color: #3076f8;\n  font: 700 11px/1.2 var(--body);\n  letter-spacing: .28em;\n}\n.career-why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #111;\n  font: 700 34px/1.12 var(--disp);\n  letter-spacing: 0;\n}\n.career-why-intro[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #3076f8;\n}\n.career-why-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 16px 0 25px;\n  color: #6b7280;\n  font-size: 14px;\n  line-height: 1.7;\n}\n.career-why-intro[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 44px;\n  padding: 0 24px;\n  background:\n    linear-gradient(\n      90deg,\n      #1769e8,\n      #20b8e5);\n  box-shadow: 0 7px 14px rgba(23, 105, 232, .22);\n}\n.career-why-cards[_ngcontent-%COMP%] {\n  gap: 16px;\n}\n.career-why-card[_ngcontent-%COMP%] {\n  min-height: 260px;\n  padding: 30px 20px 24px;\n  border-color: #ececf0;\n  border-radius: 24px;\n  background: #f8f8fc;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .08);\n}\n.career-why-card[_ngcontent-%COMP%]:hover {\n  border-color: #ececf0;\n  background: #f8f8fc;\n  box-shadow: 0 9px 24px rgba(15, 23, 42, .1);\n}\n.career-why-card[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #dce8ff,\n      #d9f5ff);\n  color: #3076f8;\n  font-size: 21px;\n}\n.career-why-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #111;\n  font: 700 15px/1.35 var(--body);\n}\n.career-why-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.company-body[_ngcontent-%COMP%]:has(.career-stories) {\n  padding: 0;\n  background: #fff;\n}\n.company-wrap[_ngcontent-%COMP%]:has(.career-stories) {\n  grid-template-columns: minmax(20px, 1fr) minmax(0, 1280px) minmax(20px, 1fr);\n}\n.career-life[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 28px 0 42px;\n  text-align: center;\n}\n.career-life[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin-bottom: 27px;\n}\n.career-life[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #1769e8,\n      #2878ff,\n      #20b8e5);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  font: 700 30px/1.2 var(--disp);\n  -webkit-text-fill-color: transparent;\n}\n.career-life[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.career-life[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #4d4d4d;\n  font-size: 14px;\n  letter-spacing: .02em;\n}\n.career-life-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n  max-width: 990px;\n  margin: auto;\n}\n.career-life-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-align: center;\n}\n.career-life-photo[_ngcontent-%COMP%] {\n  height: 190px;\n  aspect-ratio: auto;\n  object-fit: cover;\n  border-radius: 20px;\n  background: #f7f7fb;\n  box-shadow: none;\n  transition: transform .3s;\n}\n.career-life-card[_ngcontent-%COMP%]:hover   .career-life-photo[_ngcontent-%COMP%] {\n  transform: scale(1.025);\n}\n.career-life-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin-top: 11px;\n  color: #000;\n  font-size: 14px;\n  font-weight: 400;\n}\n.career-life-dots[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n.career-stories[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 36px clamp(24px, 5vw, 72px);\n  background:\n    radial-gradient(\n      circle at 83% 0,\n      rgba(43, 168, 247, .36) 0,\n      rgba(43, 168, 247, .14) 18%,\n      transparent 36%),\n    linear-gradient(\n      110deg,\n      #063a72 0%,\n      #041f46 58%,\n      #021a38 100%);\n}\n.career-story-grid[_ngcontent-%COMP%] {\n  max-width: 1300px;\n}\n.career-story-card[_ngcontent-%COMP%] {\n  min-height: 255px;\n  padding: 20px 18px 50px;\n  border: 0;\n  border-radius: 16px;\n  background: #2f7cf7;\n}\n.career-story-label[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 14px;\n  padding: 4px 9px;\n  border: 1px solid rgba(255, 255, 255, .35);\n  border-radius: 999px;\n  color: #eaf5ff;\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.career-story-top[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 90px minmax(0, 1fr);\n  gap: 20px;\n  align-items: start;\n}\n.career-story-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  background: #dceaff;\n  object-fit: cover;\n}\n.career-story-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 1px 0 0;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.48;\n}\n.career-story-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 14px 0 3px;\n  font-size: 18px;\n}\n.career-story-card[_ngcontent-%COMP%]    > .career-story-role[_ngcontent-%COMP%] {\n  color: #dceaff;\n  font-size: 13px;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n}\n.career-story-card[_ngcontent-%COMP%]    > i[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 18px;\n  bottom: 16px;\n  color: #fff;\n  font-size: 40px;\n  font-style: normal;\n  font-variation-settings: "FILL" 1;\n}\n.career-next-step[_ngcontent-%COMP%] {\n  padding: 80px clamp(24px, 4vw, 64px) 65px;\n}\n.career-switch-banner[_ngcontent-%COMP%] {\n  grid-template-columns: 300px 330px minmax(380px, 1fr);\n  min-height: 194px;\n  overflow: visible;\n  border-radius: 15px;\n  background:\n    linear-gradient(\n      90deg,\n      #1769e8,\n      #2878ff,\n      #20b8e5);\n}\n.career-switch-photo[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: visible;\n}\n.career-switch-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: auto 0 0;\n  width: 100%;\n  height: 220px;\n  border-radius: 0 0 0 15px;\n  object-fit: cover;\n  object-position: 72% center;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      #000 75%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      90deg,\n      #000 75%,\n      transparent);\n}\n.career-switch-copy[_ngcontent-%COMP%] {\n  padding: 26px 28px;\n}\n.career-switch-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  font-size: 35px;\n  font-weight: 500;\n}\n.career-switch-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n}\n.career-switch-actions[_ngcontent-%COMP%] {\n  gap: 27px;\n  padding: 24px 28px;\n}\n.career-switch-features[_ngcontent-%COMP%] {\n  gap: 12px;\n}\n.career-switch-features[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 400;\n}\n.career-switch-features[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 39px;\n}\n.career-switch-actions[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  max-width: 280px;\n  width: 100%;\n  margin: auto;\n  color: #1769e8;\n  font-size: 12px;\n}\n.career-process-perks[_ngcontent-%COMP%] {\n  gap: 64px;\n  margin-top: 72px;\n}\n.career-block-label[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n  color: #3076f8;\n  font: 700 11px/1.2 var(--body);\n  letter-spacing: .28em;\n}\n.career-process[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.career-perks[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  color: #111;\n  font-size: 30px;\n}\n.career-process-list[_ngcontent-%COMP%] {\n  gap: 18px;\n}\n.career-process-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 68px;\n  height: 68px;\n  background:\n    linear-gradient(\n      135deg,\n      #dce8ff,\n      #d9f5ff);\n  color: #3076f8;\n}\n.career-process-list[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:not(:last-child)::after {\n  color: #b0bfdf;\n}\n.career-process-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.career-process-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n}\n.career-perks-grid[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  min-height: 64px;\n  border-color: #ececf0;\n  background: #f8f8fc;\n  color: #111;\n}\n.career-perks-grid[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #dce8ff,\n      #d9f5ff);\n  color: #3076f8;\n}\n.career-values[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 58px 0 68px;\n}\n.career-values[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #111;\n}\n.career-values[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #1769e8,\n      #20b8e5);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n}\n.career-values-card[_ngcontent-%COMP%] {\n  border-color: #ececf0;\n  background: #f8f8fc;\n}\n.career-values-card[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #dce8ff,\n      #d9f5ff);\n  color: #3076f8;\n}\n@media (max-width: 1100px) {\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-visual[_ngcontent-%COMP%] {\n    height: 500px;\n  }\n  .career-why-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .career-why-intro[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n  .career-switch-banner[_ngcontent-%COMP%] {\n    grid-template-columns: 230px 1fr;\n  }\n  .career-switch-actions[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .career-process-perks[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 760px) {\n  .career-overview-hero[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    width: min(100% - 40px, 650px);\n    padding-top: 48px;\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-copy[_ngcontent-%COMP%] {\n    max-width: none;\n    padding: 0;\n    text-align: center;\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-eyebrow[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-benefits[_ngcontent-%COMP%] {\n    margin-inline: auto;\n  }\n  .career-hero-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-visual[_ngcontent-%COMP%] {\n    height: 330px;\n    transform: translateY(24px);\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-visual[_ngcontent-%COMP%]::before {\n    right: 50%;\n    top: 26px;\n    width: 280px;\n    height: 280px;\n    background:\n      radial-gradient(\n        circle,\n        transparent 0 35px,\n        #386ce3 36px 54px,\n        transparent 55px 75px,\n        #386ce3 76px 95px,\n        transparent 96px 115px,\n        #386ce3 116px 136px,\n        transparent 137px);\n    transform: translateX(50%);\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-visual[_ngcontent-%COMP%]::after {\n    right: calc(50% - 9px);\n    top: 36px;\n    width: 18px;\n    height: 255px;\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-photo[_ngcontent-%COMP%] {\n    right: 50%;\n    width: min(115%, 560px);\n    max-height: 325px;\n    transform: translateX(50%);\n  }\n  .career-impact-strip[_ngcontent-%COMP%] {\n    margin-top: -28px;\n  }\n  .career-impact-inner[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 24px 12px;\n  }\n  .career-impact-item[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .career-impact-item[_ngcontent-%COMP%]:first-child {\n    padding-left: 0;\n  }\n  .career-why-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .career-life-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .career-life-card[_ngcontent-%COMP%]:not(:first-child) {\n    display: block;\n  }\n  .career-life-card[_ngcontent-%COMP%] {\n    max-width: 520px;\n  }\n  .career-life-photo[_ngcontent-%COMP%] {\n    height: auto;\n    aspect-ratio: 4/3;\n  }\n  .career-switch-banner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .career-switch-photo[_ngcontent-%COMP%] {\n    height: 190px;\n  }\n  .career-switch-photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 210px;\n    border-radius: 15px 15px 0 0;\n    -webkit-mask-image: linear-gradient(#000 75%, transparent);\n    mask-image: linear-gradient(#000 75%, transparent);\n  }\n  .career-process-list[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 520px) {\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-inner[_ngcontent-%COMP%] {\n    width: min(100% - 32px, 650px);\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .career-overview-hero[_ngcontent-%COMP%]   .career-hero-benefits[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .career-hero-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .career-impact-strip[_ngcontent-%COMP%] {\n    padding-inline: 16px;\n  }\n  .career-impact-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    padding: 22px;\n  }\n  .career-why[_ngcontent-%COMP%] {\n    padding-inline: 18px;\n  }\n  .career-why-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .career-stories[_ngcontent-%COMP%] {\n    padding-inline: 18px;\n  }\n  .career-story-card[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .career-story-top[_ngcontent-%COMP%] {\n    grid-template-columns: 64px 1fr;\n    gap: 14px;\n  }\n  .career-story-top[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n  }\n  .career-story-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .career-next-step[_ngcontent-%COMP%] {\n    padding: 60px 18px 44px;\n  }\n  .career-process-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .career-values[_ngcontent-%COMP%] {\n    padding-inline: 18px;\n  }\n}\n/*# sourceMappingURL=company.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyPage, [{
    type: Component,
    args: [{ selector: "xh-company-page", standalone: true, imports: [RouterLink, HeroNetDirective, ResellerProgramContentComponent, TeamStructureComponent, WhyXcellhostReasonsComponent, ZohoJobListingComponent], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `@if (page(); as page) {\r
  @if (slug() === 'privacy-policy') {\r
    <main class="privacy-policy-page">\r
      <section class="privacy-policy-hero" aria-labelledby="privacy-policy-title">\r
        <div class="privacy-policy-hero-inner">\r
          <div class="policy-hero-copy">\r
            <nav class="privacy-policy-breadcrumb" aria-label="Breadcrumb"><a routerLink="/">Home</a><span aria-hidden="true">\u203A</span><span>Legal</span><span aria-hidden="true">\u203A</span><span>Privacy Policy</span></nav>\r
            <h1 id="privacy-policy-title">Privacy &amp; <em>Cookie Policy</em></h1>\r
            <p>How XcellHost collects, uses, stores, shares and protects personal data when you use our website, customer portals and cloud services.</p>\r
            <div class="policy-hero-benefits" aria-label="Privacy policy highlights">\r
              <a routerLink="/company/privacy-policy" fragment="privacy-security"><span class="material-symbols-outlined" aria-hidden="true">shield_lock</span><p><b>Data Protection</b><small>Security at every step</small></p></a>\r
              <a routerLink="/company/privacy-policy" fragment="privacy-rights"><span class="material-symbols-outlined" aria-hidden="true">tune</span><p><b>Clear Choices</b><small>You stay in control</small></p></a>\r
              <a routerLink="/company/privacy-policy" fragment="privacy-use"><span class="material-symbols-outlined" aria-hidden="true">verified_user</span><p><b>Responsible Use</b><small>Transparent data handling</small></p></a>\r
            </div>\r
          </div>\r
          <div class="policy-hero-art policy-hero-art--privacy" aria-hidden="true">\r
            <div class="policy-art-glow"></div><div class="policy-art-globe"><i></i><i></i><i></i></div>\r
            <span class="policy-art-node policy-art-node-one material-symbols-outlined">lock</span>\r
            <span class="policy-art-node policy-art-node-two material-symbols-outlined">cookie</span>\r
            <span class="policy-art-node policy-art-node-three material-symbols-outlined">fingerprint</span>\r
            <div class="policy-art-card"><span class="material-symbols-outlined">shield_lock</span><b>Privacy protected</b><small>Clear \xB7 Secure \xB7 Responsible</small><i></i><i></i><i></i></div>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <div class="privacy-policy-layout">\r
        <aside class="privacy-policy-aside" aria-label="Privacy policy contents">\r
          <div class="privacy-policy-contents">\r
            <h2>Contents</h2>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-overview"><b>01</b>Overview</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-definitions"><b>02</b>Definitions</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-information"><b>03</b>Information we collect</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-lawful-basis"><b>04</b>Lawful basis</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-use"><b>05</b>How we use information</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-sharing"><b>06</b>Sharing &amp; disclosure</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-cookies"><b>07</b>Cookies &amp; tracking</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-processors"><b>08</b>Third-party services</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-transfers"><b>09</b>Cross-border transfers</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-retention-policy"><b>10</b>Data retention</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-rights"><b>11</b>Your rights</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-children"><b>12</b>Children&rsquo;s data</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-security"><b>13</b>Security measures</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-breach"><b>14</b>Breach notification</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-grievance"><b>15</b>Grievance redressal</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-external-links"><b>16</b>External links</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-changes"><b>17</b>Policy changes</a>\r
            <a routerLink="/company/privacy-policy" fragment="privacy-contact"><b>18</b>Contact us</a>\r
          </div>\r
          <div class="privacy-policy-help">\r
            <span class="material-symbols-outlined" aria-hidden="true">support_agent</span>\r
            <small>Need help?</small>\r
            <h2>Questions about this policy?</h2>\r
            <p>Our privacy team can help with data requests and policy questions.</p>\r
            <a routerLink="/contact">Contact support <span aria-hidden="true">\u2192</span></a>\r
          </div>\r
        </aside>\r
\r
        <article class="privacy-policy-document">\r
          <section id="privacy-overview">\r
            <span class="privacy-policy-section-label">01 \xB7 Overview</span>\r
            <h2>Our commitment to your privacy</h2>\r
            <p>\r
              This Privacy Policy explains how XcellHost Cloud Services Pvt. Ltd.\r
              ("XcellHost", "we", "us", or "our"), a company incorporated under the\r
              laws of India with its registered office at 209, Laxmi Plaza, Bldg. No. 9,\r
              Laxmi Industrial Estate, Andheri (W), Mumbai - 400053, Maharashtra, India,\r
              collects, uses, stores, shares, and protects your personal data when you\r
              use our website (\r
              <a href="https://www.xcellhost.cloud/" target="_blank" rel="noopener noreferrer">www.xcellhost.cloud</a>\r
              ), client portals, and services.\r
            </p>\r
            <p>\r
              This policy is published in compliance with the Digital Personal Data\r
              Protection Act, 2023 (DPDPA) and the Digital Personal Data Protection\r
              Rules, 2025, the Information Technology Act, 2000, and the Information\r
              Technology (Intermediary Guidelines and Digital Media Ethics Code)\r
              Rules, 2021.\r
            </p>\r
            <p>\r
              By using our website or services, you acknowledge that you have read and\r
              understood this Privacy Policy. Where we rely on your consent as the lawful\r
              basis for processing, we will obtain your explicit consent before collecting\r
              or processing your personal data.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-definitions">\r
            <h2>1. Definitions</h2>\r
            <p>In this Privacy Policy:</p>\r
            <ul>\r
              <li>"Personal Data" means any data about an individual who is identifiable by or in relation to such data, as defined under the DPDPA.</li>\r
              <li>"Data Fiduciary" means any person who alone or in conjunction with other persons determines the purpose and means of processing of personal data. XcellHost acts as a Data Fiduciary for data collected directly from you.</li>\r
              <li>"Data Processor" means any person who processes personal data on behalf of a Data Fiduciary. XcellHost acts as a Data Processor when hosting your data on our infrastructure.</li>\r
              <li>"Data Principal" means the individual to whom the personal data relates, that is, you.</li>\r
              <li>"Services" means all products and services offered by XcellHost, including cloud servers, virtual private servers (VPS), Tally on Cloud, shared hosting, reseller hosting, email hosting, domain registration, SSL certificates, cybersecurity services, backup services, and related infrastructure and managed services.</li>\r
            </ul>\r
          </section>\r
\r
          <section id="privacy-information">\r
            <h2>2. Information We Collect</h2>\r
            <p>We collect the following categories of personal data:</p>\r
            <h3>a) Information You Provide Directly</h3>\r
            <ul>\r
              <li><strong>Account Information:</strong> Name, email address, phone number, postal address, company name, and job title when you register for an account or purchase services.</li>\r
              <li><strong>Billing Information:</strong> Payment method details, billing address, tax identification numbers (GST, PAN, VAT), and transaction records processed through our payment gateways.</li>\r
              <li><strong>KYC Information:</strong> For services delivered from Indian datacenters, as mandated by CERT-In Direction No. 20(3)/2022-CERT-In, Aadhaar details (via DigiLocker or document upload), selfie for facial verification, or government-issued photo ID and selfie for international customers where required.</li>\r
              <li><strong>Support Communications:</strong> Information provided in support tickets, live chat conversations, emails, and phone calls with our team.</li>\r
              <li><strong>Survey and Feedback Data:</strong> Responses to surveys, reviews, or feedback forms you voluntarily complete.</li>\r
            </ul>\r
            <h3>b) Information Collected Automatically</h3>\r
            <ul>\r
              <li><strong>Log Data:</strong> IP address, browser type and version, operating system, referring URL, pages visited, date and time of access, and time spent on pages.</li>\r
              <li><strong>Device Information:</strong> Device type, screen resolution, unique device identifiers, and language preferences.</li>\r
              <li><strong>Service Usage Data:</strong> Server resource utilisation, bandwidth consumption, IP addresses allocated, service activation and cancellation dates, and technical configuration details.</li>\r
              <li><strong>Cookies and Tracking Data:</strong> Information collected through cookies and similar technologies as described in Section 6 below.</li>\r
            </ul>\r
            <h3>c) Information from Third Parties</h3>\r
            <ul>\r
              <li><strong>KYC Verification Results:</strong> Identity verification outcomes from third-party verification providers used by XcellHost.</li>\r
              <li><strong>Fraud Prevention Data:</strong> Risk scores and fraud indicators from payment processors and security services.</li>\r
              <li><strong>Cloudflare Data:</strong> Geolocation data (country-level) derived from your IP address via Cloudflare's network, used for content localisation and security.</li>\r
            </ul>\r
          </section>\r
\r
          <section id="privacy-lawful-basis">\r
            <h2>3. Lawful Basis for Processing</h2>\r
            <p>We process your personal data on the following lawful bases:</p>\r
            <ul>\r
              <li><strong>Consent:</strong> Where you have given explicit consent for a specific purpose, such as marketing communications or newsletter subscriptions. You may withdraw consent at any time.</li>\r
              <li><strong>Performance of Contract:</strong> Processing necessary to fulfil our contractual obligations to you, including provisioning services, billing, technical support, and account management.</li>\r
              <li><strong>Legal Obligation:</strong> Processing required to comply with applicable laws, including CERT-In Directions, IT Act 2000 requirements, tax laws, and DPDPA obligations.</li>\r
              <li><strong>Legitimate Interest:</strong> Processing necessary for our legitimate business interests, such as fraud prevention, network security, service improvement, and abuse detection, provided these interests are not overridden by your rights.</li>\r
            </ul>\r
          </section>\r
\r
          <section id="privacy-use">\r
            <h2>4. How We Use Your Information</h2>\r
            <p>We use the personal data we collect for the following purposes:</p>\r
            <ul>\r
              <li><strong>Service Delivery:</strong> Provisioning, managing, and maintaining the services you have purchased; allocating server resources and IP addresses; and providing technical support.</li>\r
              <li><strong>Account Administration:</strong> Managing your account, authenticating your identity, processing payments, and sending invoices and billing notifications.</li>\r
              <li><strong>Regulatory Compliance:</strong> Fulfilling KYC obligations under CERT-In Directions, maintaining subscriber records, responding to lawful government requests, and complying with court orders.</li>\r
              <li><strong>Security and Abuse Prevention:</strong> Detecting and preventing fraud, unauthorised access, DDoS attacks, spam, and other abuse of our network and infrastructure.</li>\r
              <li><strong>Service Improvement:</strong> Analysing usage patterns to improve our services, website, and customer experience.</li>\r
              <li><strong>Communication:</strong> Sending service-related notifications such as maintenance alerts, security advisories, billing reminders, and, where you have consented, marketing communications about our products and offers.</li>\r
              <li><strong>Legal Proceedings:</strong> Establishing, exercising, or defending legal claims.</li>\r
            </ul>\r
          </section>\r
\r
          <section id="privacy-sharing">\r
            <h2>5. Data Sharing and Disclosure</h2>\r
            <p>We do not sell your personal data. We may share your personal data with the following categories of recipients:</p>\r
            <ul>\r
              <li><strong>Service Providers (Data Processors):</strong> Third-party providers who process data on our behalf, as listed in Section 7 below, subject to contractual obligations to protect your data.</li>\r
              <li><strong>Payment Processors:</strong> To process your payments securely. Payment card details are handled directly by PCI-DSS compliant payment processors and are not stored on our servers.</li>\r
              <li><strong>Government and Law Enforcement:</strong> Where required by applicable law, court order, or lawful government request, including CERT-In, law enforcement agencies, and regulatory authorities.</li>\r
              <li><strong>Legal and Professional Advisors:</strong> Lawyers, auditors, and other professional advisors in connection with legal proceedings or regulatory compliance.</li>\r
              <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your personal data may be transferred to the successor entity, subject to the same privacy commitments.</li>\r
            </ul>\r
            <p>\r
              In addition to the above, XcellHost may disclose your personal data to the\r
              extent required by law, in connection with any legal proceedings or\r
              prospective legal proceedings, and in order to establish, exercise, or\r
              defend its legal rights.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-cookies">\r
            <h2>6. Cookies and Tracking Technologies</h2>\r
            <p>\r
              Our website uses cookies and similar tracking technologies. A cookie is a\r
              small text file placed on your device to help the website function,\r
              remember your preferences, and collect analytics data.\r
            </p>\r
            <h3>Types of Cookies We Use</h3>\r
            <ul>\r
              <li><strong>Essential Cookies:</strong> Required for the website to function properly, including session management, security, and load balancing served via Cloudflare.</li>\r
              <li><strong>Analytics Cookies:</strong> Google Analytics via Google Tag Manager, used to understand how visitors interact with our website, including pages visited, time on site, and traffic sources. These cookies collect anonymised, aggregated data.</li>\r
              <li><strong>Session Recording:</strong> Microsoft Clarity, used to record and analyse user sessions such as clicks, scrolls, and page navigation for improving user experience. Session recordings are anonymised and do not capture keystrokes in form fields.</li>\r
              <li><strong>Live Chat Cookies:</strong> Tawk.to, used to enable our live chat widget and remember your chat history for continuity of support.</li>\r
              <li><strong>Marketing Cookies:</strong> HubSpot, used to track interactions with our marketing content, forms, and email campaigns, and to personalise your experience where you have consented.</li>\r
            </ul>\r
            <h3>Managing Cookies</h3>\r
            <p>\r
              You can control and manage cookies through your browser settings. Most\r
              browsers allow you to refuse or delete cookies. However, disabling\r
              essential cookies may prevent you from using certain features of our\r
              website. For more information on managing cookies, visit your browser's\r
              help documentation.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-processors">\r
            <h2>7. Third-Party Services and Sub-Processors</h2>\r
            <p>We use the following third-party services that may process your personal data:</p>\r
            <table>\r
              <thead>\r
                <tr>\r
                  <th>Service</th>\r
                  <th>Purpose</th>\r
                  <th>Data Processed</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr>\r
                  <td>Cloudflare</td>\r
                  <td>CDN, DNS, DDoS protection, SSL</td>\r
                  <td>IP address, geolocation (country), request headers</td>\r
                </tr>\r
                <tr>\r
                  <td>Google Analytics / GTM</td>\r
                  <td>Website analytics</td>\r
                  <td>Anonymised usage data, IP address (anonymised), device info</td>\r
                </tr>\r
                <tr>\r
                  <td>Microsoft Clarity</td>\r
                  <td>Session recording, heatmaps</td>\r
                  <td>Anonymised session data, clicks, scrolls</td>\r
                </tr>\r
                <tr>\r
                  <td>Tawk.to</td>\r
                  <td>Live chat support</td>\r
                  <td>Name, email, chat messages, IP address</td>\r
                </tr>\r
                <tr>\r
                  <td>HubSpot</td>\r
                  <td>Marketing, forms, CRM</td>\r
                  <td>Name, email, company, form submissions, page views</td>\r
                </tr>\r
                <tr>\r
                  <td>Identity verification providers</td>\r
                  <td>KYC verification</td>\r
                  <td>Government ID data, selfie, identity verification results</td>\r
                </tr>\r
                <tr>\r
                  <td>Payment processors</td>\r
                  <td>Payment processing</td>\r
                  <td>Payment details, billing address, transaction metadata</td>\r
                </tr>\r
              </tbody>\r
            </table>\r
            <p>\r
              Each third-party service operates under its own privacy policy. We ensure\r
              that all sub-processors maintain appropriate data protection standards\r
              through contractual agreements.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-transfers">\r
            <h2>8. Cross-Border Data Transfers</h2>\r
            <p>\r
              XcellHost operates across India and other international regions. Your\r
              personal data may be transferred to and processed in countries other than\r
              your country of residence. Such transfers are made in accordance with the\r
              DPDPA 2023 and are limited to countries not restricted by the Central\r
              Government of India.\r
            </p>\r
            <p>\r
              Where your data is transferred outside India, we ensure that appropriate\r
              safeguards are in place, including contractual data protection obligations\r
              with our sub-processors and compliance with the data protection laws of the\r
              receiving jurisdiction.\r
            </p>\r
            <p>\r
              By using our Services, you acknowledge and consent to such cross-border\r
              transfers of your personal data as described in this section.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-retention-policy">\r
            <h2>9. Data Retention</h2>\r
            <p>\r
              We retain your personal data only for as long as necessary to fulfil the\r
              purposes for which it was collected, or as required by applicable law.\r
              Specific retention periods are as follows:\r
            </p>\r
            <ul>\r
              <li><strong>Account and Billing Data:</strong> For the duration of your account plus 7 years after account closure, as required by Indian tax laws.</li>\r
              <li><strong>KYC and Subscriber Data:</strong> 5 years after cancellation or withdrawal of service registration, as mandated by CERT-In Direction No. 20(3)/2022-CERT-In, or longer if required by applicable law.</li>\r
              <li><strong>ICT System Logs:</strong> Rolling 180-day period within India, as mandated by CERT-In Directions.</li>\r
              <li><strong>Support Communications:</strong> For the duration of your account plus 3 years after account closure.</li>\r
              <li><strong>Marketing Data:</strong> Until you withdraw your consent or unsubscribe.</li>\r
              <li><strong>Analytics and Cookie Data:</strong> As per the retention settings of each third-party service, typically 14-26 months.</li>\r
            </ul>\r
            <p>\r
              When personal data is no longer required, we will securely delete or\r
              anonymise it in accordance with our data destruction procedures.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-rights">\r
            <h2>10. Your Rights as a Data Principal</h2>\r
            <p>Under the Digital Personal Data Protection Act, 2023, you have the following rights:</p>\r
            <ul>\r
              <li><strong>Right to Access:</strong> You may request a summary of your personal data being processed by us and the processing activities undertaken.</li>\r
              <li><strong>Right to Correction:</strong> You may request correction of inaccurate or incomplete personal data, and we will update records accordingly.</li>\r
              <li><strong>Right to Erasure:</strong> You may request erasure of your personal data where the purpose for processing has been fulfilled and retention is no longer necessary under applicable law. Data retained under legal obligations cannot be erased until the mandatory retention period expires.</li>\r
              <li><strong>Right to Withdraw Consent:</strong> Where processing is based on your consent, you may withdraw consent at any time. Withdrawal of consent does not affect the lawfulness of processing carried out before withdrawal.</li>\r
              <li><strong>Right to Nominate:</strong> You have the right to nominate another individual to exercise your rights in the event of your death or incapacity, as provided under the DPDPA.</li>\r
              <li><strong>Right to Grievance Redressal:</strong> You have the right to file a complaint with our Grievance Officer or, if unsatisfied with our response, with the Data Protection Board of India.</li>\r
            </ul>\r
            <p>\r
              To exercise any of these rights, please contact our Grievance Officer using\r
              the details provided in Section 14 below. We will respond to your request\r
              within 30 days of receipt.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-children">\r
            <h2>11. Children's Data</h2>\r
            <p>\r
              Our Services are not directed at individuals under the age of 18. We do\r
              not knowingly collect personal data from children. Account registration\r
              requires the individual to confirm they are at least 18 years of age. If\r
              we become aware that we have collected personal data from a child without\r
              verifiable parental consent, we will take steps to delete such data\r
              promptly.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-security">\r
            <h2>12. Security Measures</h2>\r
            <p>\r
              We are committed to ensuring that your personal data is secure. We have\r
              implemented appropriate technical and organisational measures to safeguard\r
              your data, including:\r
            </p>\r
            <ul>\r
              <li>Encryption of data in transit using TLS/SSL (HTTPS enforced across web properties).</li>\r
              <li>Encryption of sensitive data at rest where applicable.</li>\r
              <li>Access controls with role-based permissions so only authorised personnel can access personal data on a need-to-know basis.</li>\r
              <li>Regular security audits and vulnerability assessments of our infrastructure.</li>\r
              <li>Network monitoring and intrusion detection systems across our facilities and managed environments.</li>\r
              <li>Physical security at our datacenter and office locations, including controlled access and monitoring where applicable.</li>\r
              <li>Employee training on data protection and information security practices.</li>\r
            </ul>\r
            <p>\r
              While we take all reasonable precautions to protect your personal data, no\r
              method of transmission over the internet or method of electronic storage is\r
              100% secure. We cannot guarantee absolute security of your data.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-breach">\r
            <h2>13. Data Breach Notification</h2>\r
            <p>\r
              In the event of a personal data breach that is likely to result in a risk\r
              to your rights, we will:\r
            </p>\r
            <ul>\r
              <li>Report the breach to the Indian Computer Emergency Response Team (CERT-In) within the applicable reporting timeline under law.</li>\r
              <li>Notify the Data Protection Board of India as required under the DPDPA.</li>\r
              <li>Inform affected Data Principals without undue delay, providing details of the breach, likely consequences, and measures taken or proposed to address it.</li>\r
            </ul>\r
          </section>\r
\r
          <section id="privacy-grievance">\r
            <h2>14. Grievance Redressal</h2>\r
            <p>\r
              In accordance with the DPDPA 2023 and the Information Technology\r
              (Intermediary Guidelines and Digital Media Ethics Code) Rules, 2021, we\r
              have appointed a Grievance Officer to address your concerns regarding the\r
              processing of your personal data.\r
            </p>\r
            <p>\r
              <strong>Grievance Officer</strong><br>\r
              XcellHost Cloud Services Pvt. Ltd.<br>\r
              209, Laxmi Plaza, Bldg. No. 9, Laxmi Industrial Estate, Andheri (W)<br>\r
              Mumbai - 400053, Maharashtra, India<br>\r
              Email: <a href="mailto:dpo@xcellhost.cloud">dpo@xcellhost.cloud</a><br>\r
              Phone: <a href="tel:+912267111555">+91 22 6711 1555</a>\r
            </p>\r
            <p>\r
              We will acknowledge your grievance within 24 hours and endeavour to\r
              resolve it within 30 days of receipt. If you are not satisfied with our\r
              response, you may file a complaint with the Data Protection Board of India\r
              as established under the DPDPA.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-external-links">\r
            <h2>15. Links to Other Websites</h2>\r
            <p>\r
              Our website may contain links to third-party websites, including our\r
              billing portal, support portal, knowledge base, and partner websites.\r
              These external sites are not governed by this Privacy Policy. We encourage\r
              you to review the privacy policies of any third-party websites you visit.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-changes">\r
            <h2>16. Changes to This Privacy Policy</h2>\r
            <p>\r
              We may update this Privacy Policy from time to time to reflect changes in\r
              our practices, services, or applicable law. When we make material changes,\r
              we will:\r
            </p>\r
            <ul>\r
              <li>Update the "Last Updated" date at the top of this page.</li>\r
              <li>Notify registered customers via email for material changes that affect how their personal data is processed.</li>\r
              <li>Where required by law, obtain your consent before implementing changes that affect the lawful basis for processing.</li>\r
            </ul>\r
            <p>\r
              We encourage you to review this page periodically to stay informed about\r
              how we protect your personal data.\r
            </p>\r
          </section>\r
\r
          <section id="privacy-contact">\r
            <h2>17. Contact Us</h2>\r
            <p>\r
              If you have any questions about this Privacy Policy, your personal data, or\r
              our data protection practices, please contact us:\r
            </p>\r
            <p>\r
              XcellHost Cloud Services Pvt. Ltd.<br>\r
              209, Laxmi Plaza, Bldg. No. 9, Laxmi Industrial Estate, Andheri (W)<br>\r
              Mumbai - 400053, Maharashtra, India<br>\r
              Phone: <a href="tel:+912267111555">+91 22 6711 1555</a><br>\r
              Email: <a href="mailto:support@xcellhost.cloud">support@xcellhost.cloud</a><br>\r
              Grievance Officer: <a href="mailto:dpo@xcellhost.cloud">dpo@xcellhost.cloud</a>\r
            </p>\r
          </section>\r
        </article>\r
      </div>\r
      <section class="privacy-policy-cta" aria-labelledby="privacy-policy-help-title">\r
        <div><span>Need assistance?</span><h2 id="privacy-policy-help-title">Questions about your privacy or personal data?</h2><p>Contact XcellHost for privacy, compliance, security and data-protection support.</p></div>\r
        <a href="mailto:dpo@xcellhost.cloud">Email our privacy team <span aria-hidden="true">\u2192</span></a>\r
      </section>\r
    </main>\r
  } @else if (slug() === 'abuse-policy') {\r
    <main class="privacy-policy-page abuse-policy-page">\r
      <section class="privacy-policy-hero" aria-labelledby="abuse-policy-title">\r
        <div class="privacy-policy-hero-inner">\r
          <div class="policy-hero-copy">\r
            <nav class="privacy-policy-breadcrumb" aria-label="Breadcrumb"><a routerLink="/">Home</a><span aria-hidden="true">\u203A</span><span>Legal</span><span aria-hidden="true">\u203A</span><span>Abuse Policy</span></nav>\r
            <h1 id="abuse-policy-title">Abuse <em>Policy</em></h1>\r
            <p>XcellHost is committed to maintaining a secure, ethical and lawful cloud environment for customers, partners and internet users.</p>\r
            <div class="policy-hero-benefits" aria-label="Abuse policy highlights">\r
              <a routerLink="/company/abuse-policy" fragment="abuse-responsibility"><span class="material-symbols-outlined" aria-hidden="true">monitor_heart</span><p><b>Active Monitoring</b><small>Threat-aware operations</small></p></a>\r
              <a routerLink="/company/abuse-policy" fragment="abuse-report"><span class="material-symbols-outlined" aria-hidden="true">bolt</span><p><b>Fast Review</b><small>Prompt incident response</small></p></a>\r
              <a routerLink="/company/abuse-policy" fragment="abuse-enforcement"><span class="material-symbols-outlined" aria-hidden="true">balance</span><p><b>Fair Enforcement</b><small>Consistent policy action</small></p></a>\r
            </div>\r
          </div>\r
          <div class="policy-hero-art policy-hero-art--abuse" aria-hidden="true">\r
            <div class="abuse-radar"><i></i><i></i><i></i><span></span></div>\r
            <span class="policy-art-node abuse-node-one material-symbols-outlined">report</span>\r
            <span class="policy-art-node abuse-node-two material-symbols-outlined">gpp_maybe</span>\r
            <div class="abuse-monitor">\r
              <div class="abuse-monitor-bar"><i></i><i></i><i></i><span>SECURITY CONSOLE</span></div>\r
              <div class="abuse-monitor-body"><span class="material-symbols-outlined">radar</span><div><b>Threat monitoring</b><small>Network activity protected</small></div></div>\r
              <div class="abuse-signal"><i></i><i></i><i></i><i></i><i></i><i></i></div>\r
              <div class="abuse-status"><span></span>Systems monitored</div>\r
            </div>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <div class="privacy-policy-layout">\r
        <aside class="privacy-policy-aside" aria-label="Abuse policy contents">\r
          <div class="privacy-policy-contents">\r
            <h2>Contents</h2>\r
            <a routerLink="/company/abuse-policy" fragment="abuse-overview"><b>01</b>Policy overview</a>\r
            <a routerLink="/company/abuse-policy" fragment="abuse-permitted"><b>02</b>Permitted use</a>\r
            <a routerLink="/company/abuse-policy" fragment="abuse-prohibited"><b>03</b>Prohibited activities</a>\r
            <a routerLink="/company/abuse-policy" fragment="abuse-responsibility"><b>04</b>Customer responsibility</a>\r
            <a routerLink="/company/abuse-policy" fragment="abuse-report"><b>05</b>Report abuse</a>\r
            <a routerLink="/company/abuse-policy" fragment="abuse-enforcement"><b>06</b>Review &amp; enforcement</a>\r
            <a routerLink="/company/abuse-policy" fragment="abuse-contact"><b>07</b>Contact information</a>\r
          </div>\r
          <div class="privacy-policy-help">\r
            <span class="material-symbols-outlined" aria-hidden="true">report</span>\r
            <small>Security first</small>\r
            <h2>Report suspected abuse</h2>\r
            <p>Include the affected service, timestamps and evidence so our team can investigate.</p>\r
            <a href="mailto:support@xcellhost.cloud?subject=Abuse%20Report">Email the abuse desk <span aria-hidden="true">\u2192</span></a>\r
          </div>\r
        </aside>\r
\r
        <article class="privacy-policy-document">\r
          <section id="abuse-overview">\r
            <span class="privacy-policy-section-label">01 \xB7 Policy overview</span>\r
            <h2>Abuse and unethical-use policy</h2>\r
            <p>XcellHost Cloud Services Pvt. Ltd. provides cloud infrastructure, virtual servers, hosting, security and related managed services for legitimate business and personal use. Customers and authorised users must use these services lawfully, securely and without harming XcellHost, other customers, third parties or the wider internet.</p>\r
            <p>This Abuse Policy supplements the <a routerLink="/company/acceptable-use-policy">Acceptable Use Policy</a> and <a routerLink="/company/terms-of-service">Terms of Service</a>. Where an order or product-specific condition imposes a stricter requirement, that requirement also applies.</p>\r
          </section>\r
\r
          <section id="abuse-permitted">\r
            <h2>2. Permitted Use</h2>\r
            <p>XcellHost services may be used for legitimate websites, applications, communications, workloads and business operations that comply with applicable laws, contractual obligations and third-party rights.</p>\r
            <ul>\r
              <li>Maintain accurate account and service-contact information.</li>\r
              <li>Keep operating systems, applications and credentials appropriately secured.</li>\r
              <li>Use only software, content and data you are authorised to operate or distribute.</li>\r
              <li>Respond promptly to security, abuse and remediation notices.</li>\r
              <li>Ensure users, contractors and customers with access to your service follow this policy.</li>\r
            </ul>\r
          </section>\r
\r
          <section id="abuse-prohibited">\r
            <h2>3. Prohibited Activities</h2>\r
            <p>The following activities are prohibited when using XcellHost services, whether performed intentionally, negligently or through an inadequately secured system:</p>\r
            <h3>Messaging and identity abuse</h3>\r
            <ul>\r
              <li>Spam, unsolicited bulk messaging, mail bombing or deceptive email campaigns.</li>\r
              <li>Phishing, credential harvesting, impersonation, scams or fraudulent activity.</li>\r
              <li>Forging message headers, sender identities or routing information to conceal abuse.</li>\r
            </ul>\r
            <h3>Malware and system attacks</h3>\r
            <ul>\r
              <li>Distributing or controlling malware, ransomware, spyware, viruses, botnets or malicious code.</li>\r
              <li>Launching or facilitating denial-of-service attacks, brute-force activity or unauthorised scanning.</li>\r
              <li>Attempting unauthorised access, exploitation, interception or disruption of systems and networks.</li>\r
              <li>Operating command-and-control infrastructure or repositories primarily intended to enable attacks.</li>\r
            </ul>\r
            <h3>Illegal or harmful content</h3>\r
            <ul>\r
              <li>Hosting or distributing content that violates applicable law or valid court and regulatory orders.</li>\r
              <li>Infringing copyright, trademark, privacy or other third-party rights.</li>\r
              <li>Distributing pirated content, stolen credentials or unlawfully obtained personal data.</li>\r
              <li>Using services to threaten, harass, exploit or cause material harm to another person.</li>\r
            </ul>\r
            <p>Security research must be authorised in writing and remain within the approved scope. A claimed research purpose does not permit testing systems you do not own or have permission to assess.</p>\r
          </section>\r
\r
          <section id="abuse-responsibility">\r
            <h2>4. Customer Responsibility</h2>\r
            <p>Account owners are responsible for content, software, configurations and activity performed through their services and credentials. This includes activity performed by authorised users and activity resulting from avoidable compromise.</p>\r
            <ul>\r
              <li>Use strong authentication and protect passwords, keys, tokens and administrative access.</li>\r
              <li>Patch supported software and remediate known vulnerabilities within a reasonable timeframe.</li>\r
              <li>Monitor services for unexpected traffic, exposed resources and signs of compromise.</li>\r
              <li>Preserve relevant logs and evidence when an incident or complaint occurs.</li>\r
              <li>Contain compromised systems and cooperate with reasonable investigation requests.</li>\r
            </ul>\r
          </section>\r
\r
          <section id="abuse-report">\r
            <h2>5. How to Report Abuse</h2>\r
            <p>If you believe a resource hosted or managed by XcellHost is involved in spam, phishing, malware, attacks, rights infringement or another policy violation, email <a href="mailto:support@xcellhost.cloud?subject=Abuse%20Report">support@xcellhost.cloud</a> with the subject <strong>Abuse Report</strong>.</p>\r
            <h3>Include enough evidence for us to identify the activity</h3>\r
            <ul>\r
              <li>The affected domain, full URL, IP address or other service identifier.</li>\r
              <li>Date and time of the activity, including the time zone.</li>\r
              <li>A clear description of what occurred and why it appears abusive.</li>\r
              <li>Relevant email headers, server logs, screenshots or request records.</li>\r
              <li>Your name, organisation and a working contact address for follow-up.</li>\r
              <li>For rights complaints, evidence of ownership or authority to act for the rights holder.</li>\r
            </ul>\r
            <p>Please do not send passwords, private keys, payment-card information or unrelated personal data. Knowingly submitting false, misleading or abusive complaints is prohibited.</p>\r
          </section>\r
\r
          <section id="abuse-enforcement">\r
            <h2>6. Review, Suspension and Termination</h2>\r
            <p>XcellHost assesses credible reports using the information available, the apparent severity, service risk and applicable legal obligations. We may contact the customer, request remediation or additional evidence, preserve relevant records and take proportionate protective action.</p>\r
            <ul>\r
              <li>Investigate reported or detected activity.</li>\r
              <li>Block traffic, isolate resources or restrict affected functionality.</li>\r
              <li>Require remediation within a specified period.</li>\r
              <li>Suspend or terminate services in serious, repeated or unresolved cases.</li>\r
              <li>Remove content where contractually and legally permitted.</li>\r
              <li>Cooperate with lawful requests from courts, regulators and law-enforcement authorities.</li>\r
            </ul>\r
            <p>Urgent action may be taken without advance notice when reasonably necessary to address an active threat, protect infrastructure or comply with law. Where appropriate, notice and an opportunity to remediate may be provided. Refund eligibility is governed by the applicable order terms and <a routerLink="/company/refund-policy">Refund Policy</a>.</p>\r
          </section>\r
\r
          <section id="abuse-contact">\r
            <h2>7. Abuse Contact Information</h2>\r
            <p>Send suspected abuse and policy violations through the following official channel:</p>\r
            <table>\r
              <tbody>\r
                <tr><th>Department</th><td>XcellHost Support &amp; Security Desk</td></tr>\r
                <tr><th>Email</th><td><a href="mailto:support@xcellhost.cloud?subject=Abuse%20Report">support@xcellhost.cloud</a></td></tr>\r
                <tr><th>Subject line</th><td>Abuse Report</td></tr>\r
                <tr><th>Monitoring</th><td>24\xD77 for urgent infrastructure and security incidents</td></tr>\r
              </tbody>\r
            </table>\r
            <p>Submitting a report does not guarantee a particular outcome or permit disclosure of confidential customer information. We may acknowledge a report and request clarification, but privacy, security and legal obligations can limit the details we provide about an investigation.</p>\r
          </section>\r
        </article>\r
      </div>\r
\r
      <section class="privacy-policy-cta" aria-labelledby="abuse-report-title">\r
        <div><span>Security first</span><h2 id="abuse-report-title">Report abuse or a policy violation.</h2><p>Send actionable evidence to the XcellHost Support &amp; Security Desk for review.</p></div>\r
        <a href="mailto:support@xcellhost.cloud?subject=Abuse%20Report">Report abuse <span aria-hidden="true">\u2192</span></a>\r
      </section>\r
    </main>\r
  } @else if (slug() === 'ekyc-verification') {\r
    <main class="ekyc-page">\r
      <section class="ekyc-hero" aria-labelledby="ekyc-title">\r
        <div class="ekyc-hero-grid">\r
          <div class="ekyc-hero-copy">\r
            <nav class="ekyc-breadcrumb" aria-label="Breadcrumb">\r
              <a routerLink="/">Home</a><span aria-hidden="true">\u203A</span><span>Legal</span><span aria-hidden="true">\u203A</span><span>eKYC Verification</span>\r
            </nav>\r
            <h1 id="ekyc-title">eKYC <em>Verification</em></h1>\r
            <p>Secure identity verification for XcellHost cloud, VPS and infrastructure services\u2014designed to protect customers, prevent misuse and meet applicable Indian cyber-security requirements.</p>\r
            <div class="policy-hero-benefits" aria-label="eKYC policy highlights">\r
              <a routerLink="/company/ekyc-verification" fragment="privacy-retention"><span class="material-symbols-outlined" aria-hidden="true">shield_lock</span><p><b>Secure Handling</b><small>Authorised workflows only</small></p></a>\r
              <a routerLink="/company/ekyc-verification" fragment="legal-mandate"><span class="material-symbols-outlined" aria-hidden="true">fact_check</span><p><b>CERT-In Ready</b><small>Regulatory verification</small></p></a>\r
              <a routerLink="/company/ekyc-verification" fragment="ekyc-faq"><span class="material-symbols-outlined" aria-hidden="true">support_agent</span><p><b>Human Support</b><small>Help when you need it</small></p></a>\r
            </div>\r
          </div>\r
          <div class="policy-hero-art policy-hero-art--ekyc" aria-hidden="true">\r
            <div class="ekyc-art-orbit"><i></i><i></i></div>\r
            <span class="policy-art-node ekyc-node-one material-symbols-outlined">fingerprint</span>\r
            <span class="policy-art-node ekyc-node-two material-symbols-outlined">lock</span>\r
            <div class="ekyc-id-card">\r
              <div class="ekyc-id-head"><span class="material-symbols-outlined">verified_user</span><b>VERIFIED IDENTITY</b></div>\r
              <div class="ekyc-id-body">\r
                <div class="ekyc-id-photo"><span class="material-symbols-outlined">person</span></div>\r
                <div class="ekyc-id-lines"><i></i><i></i><i></i><small>CERT-In compliant</small></div>\r
                <span class="material-symbols-outlined ekyc-id-fingerprint">fingerprint</span>\r
              </div>\r
            </div>\r
            <div class="ekyc-verified-badge"><span class="material-symbols-outlined">check</span><b>eKYC complete</b></div>\r
          </div>\r
        </div>\r
      </section>\r
\r
      <div class="ekyc-layout">\r
        <aside class="ekyc-index" aria-label="On this page">\r
          <span>On this page</span>\r
          <a routerLink="/company/ekyc-verification" fragment="about-ekyc"><b>01</b>What is eKYC?</a>\r
          <a routerLink="/company/ekyc-verification" fragment="legal-mandate"><b>02</b>Legal mandate</a>\r
          <a routerLink="/company/ekyc-verification" fragment="who-needs-ekyc"><b>03</b>Who needs eKYC?</a>\r
          <a routerLink="/company/ekyc-verification" fragment="information-collected"><b>04</b>Information we collect</a>\r
          <a routerLink="/company/ekyc-verification" fragment="accepted-documents"><b>05</b>Accepted documents</a>\r
          <a routerLink="/company/ekyc-verification" fragment="verification-process"><b>06</b>Verification process</a>\r
          <a routerLink="/company/ekyc-verification" fragment="privacy-retention"><b>07</b>Privacy &amp; retention</a>\r
          <a routerLink="/company/ekyc-verification" fragment="non-compliance"><b>08</b>Non-compliance</a>\r
          <a routerLink="/company/ekyc-verification" fragment="ekyc-faq"><b>09</b>FAQs</a>\r
        </aside>\r
\r
        <article class="ekyc-content">\r
          <section id="about-ekyc" class="ekyc-section">\r
            <div class="ekyc-section-number">01</div>\r
            <div class="ekyc-section-copy">\r
              <span class="ekyc-overline">Identity assurance</span>\r
              <h2>What is eKYC verification?</h2>\r
              <p>Electronic Know Your Customer (eKYC) is the process XcellHost uses to confirm the identity of the person or organisation requesting certain services. It helps us activate services for genuine customers, maintain accurate subscriber records and reduce fraud or infrastructure abuse.</p>\r
              <div class="ekyc-note"><span class="material-symbols-outlined" aria-hidden="true">info</span><p>We request only the information relevant to the customer type, service, payment method and applicable legal or vendor requirements.</p></div>\r
            </div>\r
          </section>\r
\r
          <section id="legal-mandate" class="ekyc-section">\r
            <div class="ekyc-section-number">02</div>\r
            <div class="ekyc-section-copy">\r
              <span class="ekyc-overline">CERT-In directions</span>\r
              <h2>Why verification is required</h2>\r
              <p>CERT-In issued cyber-security directions on 28 April 2022 under section 70B(6) of the Information Technology Act, 2000. These directions require data centres, Virtual Private Server providers, cloud service providers and covered VPN service providers to validate subscribers and maintain specified customer records.</p>\r
              <div class="ekyc-law-card">\r
                <span class="material-symbols-outlined" aria-hidden="true">gavel</span>\r
                <div><b>Official regulatory source</b><p>Read the directions, FAQs and implementation updates directly on the CERT-In website.</p></div>\r
                <a href="https://www.cert-in.org.in/Directions70B.jsp" target="_blank" rel="noopener noreferrer">View CERT-In directions <span aria-hidden="true">\u2197</span></a>\r
              </div>\r
            </div>\r
          </section>\r
\r
          <section id="who-needs-ekyc" class="ekyc-section">\r
            <div class="ekyc-section-number">03</div>\r
            <div class="ekyc-section-copy">\r
              <span class="ekyc-overline">Service coverage</span>\r
              <h2>Who needs to complete eKYC?</h2>\r
              <p>Verification may be required from the purchaser, account owner or authorised representative before activation or continued use of covered services.</p>\r
              <div class="ekyc-service-grid">\r
                <div><span class="material-symbols-outlined" aria-hidden="true">dns</span><b>Cloud &amp; VPS</b><small>Virtual servers and cloud compute</small></div>\r
                <div><span class="material-symbols-outlined" aria-hidden="true">storage</span><b>Data centre</b><small>Dedicated and hosted infrastructure</small></div>\r
                <div><span class="material-symbols-outlined" aria-hidden="true">business</span><b>Business accounts</b><small>Organisation and authorised-signatory checks</small></div>\r
                <div><span class="material-symbols-outlined" aria-hidden="true">manage_search</span><b>Risk review</b><small>Orders or accounts needing additional validation</small></div>\r
              </div>\r
            </div>\r
          </section>\r
\r
          <section id="information-collected" class="ekyc-section">\r
            <div class="ekyc-section-number">04</div>\r
            <div class="ekyc-section-copy">\r
              <span class="ekyc-overline">Subscriber records</span>\r
              <h2>Information we may collect</h2>\r
              <p>The precise fields depend on the service and customer. They may include:</p>\r
              <ul class="ekyc-check-list">\r
                <li><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>Validated legal name of the individual or organisation</li>\r
                <li><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>Address, email address and verified contact number</li>\r
                <li><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>Service start date, end date and period of hire</li>\r
                <li><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>IP addresses allotted to or used by the customer</li>\r
                <li><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>Registration time, date and the IP used to register</li>\r
                <li><span class="material-symbols-outlined" aria-hidden="true">check_circle</span>Purpose for hiring the service and customer ownership type</li>\r
              </ul>\r
            </div>\r
          </section>\r
\r
          <section id="accepted-documents" class="ekyc-section">\r
            <div class="ekyc-section-number">05</div>\r
            <div class="ekyc-section-copy">\r
              <span class="ekyc-overline">Document checklist</span>\r
              <h2>Documents accepted for verification</h2>\r
              <p>Provide only the documents requested in your approved verification flow. Documents must be current, readable and match the account details.</p>\r
              <div class="ekyc-document-grid">\r
                <div class="ekyc-document-card">\r
                  <span class="material-symbols-outlined" aria-hidden="true">person</span>\r
                  <h3>Individuals</h3>\r
                  <ul><li>PAN card</li><li>Aadhaar through the approved verification method</li><li>Passport, voter ID or driving licence</li><li>Selfie or facial verification, when requested</li></ul>\r
                </div>\r
                <div class="ekyc-document-card business">\r
                  <span class="material-symbols-outlined" aria-hidden="true">domain</span>\r
                  <h3>Businesses</h3>\r
                  <ul><li>Business PAN and GST details, where applicable</li><li>Certificate of incorporation or registration proof</li><li>Address and ownership information</li><li>Authorised signatory ID and authority proof</li></ul>\r
                </div>\r
              </div>\r
              <div class="ekyc-warning"><span class="material-symbols-outlined" aria-hidden="true">lock</span><p><b>Protect your identity documents.</b> Submit them only through the XcellHost verification channel provided for your account. Do not send documents through unapproved chat accounts or email addresses.</p></div>\r
            </div>\r
          </section>\r
\r
          <section id="verification-process" class="ekyc-section">\r
            <div class="ekyc-section-number">06</div>\r
            <div class="ekyc-section-copy">\r
              <span class="ekyc-overline">Four simple steps</span>\r
              <h2>How the verification process works</h2>\r
              <div class="ekyc-process">\r
                <div><i>1</i><span class="material-symbols-outlined" aria-hidden="true">shopping_cart</span><b>Place your order</b><small>Choose a service and enter accurate account details.</small></div>\r
                <div><i>2</i><span class="material-symbols-outlined" aria-hidden="true">upload_file</span><b>Submit documents</b><small>Use the secure method shared for your account.</small></div>\r
                <div><i>3</i><span class="material-symbols-outlined" aria-hidden="true">manage_accounts</span><b>Verification review</b><small>We check the details and request clarification if needed.</small></div>\r
                <div><i>4</i><span class="material-symbols-outlined" aria-hidden="true">rocket_launch</span><b>Service activation</b><small>Eligible services are released after successful checks.</small></div>\r
              </div>\r
            </div>\r
          </section>\r
\r
          <section id="privacy-retention" class="ekyc-section">\r
            <div class="ekyc-section-number">07</div>\r
            <div class="ekyc-section-copy">\r
              <span class="ekyc-overline">Data protection</span>\r
              <h2>Privacy, security and retention</h2>\r
              <p>XcellHost uses eKYC data to provide and secure services, administer accounts, prevent fraud and meet legal obligations. We do not sell personal data. Access is limited to authorised personnel and service providers with a valid purpose, and information may be disclosed to government or law-enforcement authorities when required by applicable law or a lawful request.</p>\r
              <div class="ekyc-retention-card">\r
                <strong>5 years</strong>\r
                <p><b>KYC and subscriber record retention</b><small>Maintained for five years after cancellation or withdrawal of service registration, or longer where applicable law requires it.</small></p>\r
              </div>\r
              <p class="ekyc-policy-links">For full details, read our <a routerLink="/company/privacy-policy">Privacy &amp; Cookie Policy</a> and <a routerLink="/company/terms-of-service">Terms of Service</a>.</p>\r
            </div>\r
          </section>\r
\r
          <section id="non-compliance" class="ekyc-section">\r
            <div class="ekyc-section-number">08</div>\r
            <div class="ekyc-section-copy">\r
              <span class="ekyc-overline">Account responsibility</span>\r
              <h2>If verification is incomplete</h2>\r
              <p>If required details are missing, inconsistent, expired or cannot be validated, XcellHost may ask for clarification and keep activation pending. Where necessary to meet legal, security or abuse-prevention duties, we may restrict, suspend or cancel affected services.</p>\r
              <ul class="ekyc-actions-list">\r
                <li><b>Pending activation</b><span>Services can remain on hold until checks are completed.</span></li>\r
                <li><b>Additional review</b><span>We may request a clearer document or proof of authority.</span></li>\r
                <li><b>Service restriction</b><span>False information or prohibited use may lead to suspension or cancellation.</span></li>\r
              </ul>\r
              <p class="ekyc-policy-links">Refund eligibility remains subject to the order terms and our <a routerLink="/company/refund-policy">Refund Policy</a>. Service use must follow our <a routerLink="/company/acceptable-use-policy">Acceptable Use Policy</a>.</p>\r
            </div>\r
          </section>\r
\r
          <section id="ekyc-faq" class="ekyc-section ekyc-faq-section">\r
            <div class="ekyc-section-number">09</div>\r
            <div class="ekyc-section-copy">\r
              <span class="ekyc-overline">Common questions</span>\r
              <h2>eKYC verification FAQs</h2>\r
              <div class="ekyc-faq-list">\r
                <details><summary>Why does XcellHost ask for eKYC?<span class="material-symbols-outlined" aria-hidden="true">add</span></summary><p>eKYC helps validate the customer behind covered services, supports CERT-In compliance and protects XcellHost infrastructure and customers from fraud or abuse.</p></details>\r
                <details><summary>Is eKYC required for every XcellHost product?<span class="material-symbols-outlined" aria-hidden="true">add</span></summary><p>Not always. The requirement depends on the service, customer type, payment method, risk review and applicable law or vendor rules. We will tell you when verification is needed.</p></details>\r
                <details><summary>Can a company employee complete verification?<span class="material-symbols-outlined" aria-hidden="true">add</span></summary><p>Yes, if the person is authorised to act for the organisation. We may request proof of that authority and identity documents for the authorised signatory.</p></details>\r
                <details><summary>What happens if my document is rejected?<span class="material-symbols-outlined" aria-hidden="true">add</span></summary><p>We may ask for a clearer, current or alternative document. Your service can remain pending while the requested clarification is completed.</p></details>\r
                <details><summary>How long is KYC information retained?<span class="material-symbols-outlined" aria-hidden="true">add</span></summary><p>KYC and subscriber information is retained for five years after cancellation or withdrawal of the service registration, or longer if applicable law requires it.</p></details>\r
                <details><summary>Can I request deletion immediately after verification?<span class="material-symbols-outlined" aria-hidden="true">add</span></summary><p>You may submit a privacy request, but information subject to a mandatory legal retention period cannot be erased until that obligation expires.</p></details>\r
              </div>\r
            </div>\r
          </section>\r
        </article>\r
      </div>\r
\r
      <section class="ekyc-cta" aria-labelledby="ekyc-help-title">\r
        <div><span>Need assistance?</span><h2 id="ekyc-help-title">Our team can help you complete eKYC.</h2><p>Contact XcellHost through an official channel for document or account-verification guidance.</p></div>\r
        <a routerLink="/contact">Contact support <span aria-hidden="true">\u2192</span></a>\r
      </section>\r
    </main>\r
  } @else if (slug() === 'our-team-our-story') {\r
  <main class="ppage as-page company-page team-page">\r
    <section class="people-banner" aria-labelledby="people-banner-title">\r
      <div class="people-banner-shade" aria-hidden="true"></div>\r
      <div class="wrap people-banner-inner">\r
        <div class="people-banner-copy">\r
          <div class="people-banner-eyebrow">People behind the technology <span></span></div>\r
          <h1 id="people-banner-title">Meet the Xcellerators<br>Behind <em>XcellHost</em></h1>\r
          <p>Passionate people. Deep expertise. One team committed to helping businesses stay secure, connected and ready for what&rsquo;s next.</p>\r
          <div class="people-banner-strengths" aria-label="Team strengths">\r
            <span><i class="material-symbols-outlined" aria-hidden="true">groups</i>Leadership</span>\r
            <span><i class="material-symbols-outlined" aria-hidden="true">lightbulb</i>Expertise</span>\r
            <span><i class="material-symbols-outlined" aria-hidden="true">bar_chart</i>Innovation</span>\r
            <span><i class="material-symbols-outlined" aria-hidden="true">handshake</i>Collaboration</span>\r
          </div>\r
          <div class="people-banner-actions">\r
            <a class="btn btn-primary" href="#team-directory">Meet Our People <span aria-hidden="true">&rarr;</span></a>\r
            <a class="people-banner-story" href="#team-story">Discover Our Story</a>\r
          </div>\r
        </div>\r
        <div class="people-team-animation" aria-hidden="true">\r
          <svg viewBox="0 0 540 380" fill="none">\r
            <defs>\r
              <linearGradient id="teamShirt" x2=".9" y2="1"><stop stop-color="#65c9ff"/><stop offset=".5" stop-color="#328de1"/><stop offset="1" stop-color="#1653a0"/></linearGradient>\r
              <linearGradient id="teamTeal" x2="1" y2="1"><stop stop-color="#48d8d0"/><stop offset="1" stop-color="#146b9f"/></linearGradient>\r
              <linearGradient id="teamViolet" x2="1" y2="1"><stop stop-color="#8996ff"/><stop offset="1" stop-color="#414a98"/></linearGradient>\r
              <linearGradient id="teamSkin" x2=".8" y2="1"><stop stop-color="#ffe0bf"/><stop offset="1" stop-color="#d79874"/></linearGradient>\r
              <linearGradient id="teamGlass" x2="1" y2="1"><stop stop-color="#23578d" stop-opacity=".95"/><stop offset="1" stop-color="#0a2447" stop-opacity=".85"/></linearGradient>\r
              <pattern id="teamGrid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0V24" stroke="#70bfff" stroke-opacity=".07"/></pattern>\r
              <radialGradient id="teamGlow"><stop stop-color="#188df4" stop-opacity=".35"/><stop offset="1" stop-color="#188df4" stop-opacity="0"/></radialGradient>\r
              <linearGradient id="teamScreen" x2="1" y2="1"><stop stop-color="#154e8b"/><stop offset="1" stop-color="#08274f"/></linearGradient>\r
              <linearGradient id="teamDesk"><stop stop-color="#439ce9"/><stop offset="1" stop-color="#164775"/></linearGradient>\r
            </defs>\r
            <ellipse cx="270" cy="195" rx="252" ry="175" fill="url(#teamGlow)"/>\r
            <rect x="35" y="14" width="470" height="330" rx="28" fill="url(#teamGrid)"/>\r
            <circle cx="270" cy="177" r="137" stroke="#74c4ff" stroke-opacity=".1" stroke-width="22"/>\r
            <circle cx="270" cy="177" r="147" stroke="#74c4ff" stroke-opacity=".17"/>\r
            <g class="team-particles" fill="#85ddff"><circle cx="65" cy="172" r="3"/><circle cx="451" cy="218" r="3"/><circle cx="185" cy="38" r="2"/><circle cx="363" cy="35" r="2"/><path d="M472 145V157M466 151H478M81 52V62M76 57H86" stroke="#9ddfff" stroke-width="1.5"/></g>\r
            <ellipse class="team-network" cx="270" cy="182" rx="213" ry="128" stroke="#3fa9ff" stroke-opacity=".45" stroke-dasharray="4 9"/>\r
            <g class="team-connections" stroke="#64c2ff" stroke-opacity=".5" stroke-dasharray="5 7">\r
              <path d="M106 101L195 222M442 101L340 222M270 54V160"/>\r
            </g>\r
            <g class="team-cloud">\r
              <path d="M235 82C214 82 212 53 232 49C227 23 271 13 281 41C309 27 330 64 307 80Z" fill="#0d4580" stroke="#5cbeff" stroke-width="2"/>\r
              <path d="M249 55L259 65L279 45" stroke="#80e1ff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>\r
            </g>\r
            <g class="team-person person-center">\r
              <path d="M205 222V158Q205 129 238 124H301Q334 130 334 158V222" fill="url(#teamShirt)" stroke="#7bc6ff"/>\r
              <circle cx="270" cy="99" r="27" fill="url(#teamSkin)"/>\r
              <path d="M243 98V88Q242 62 270 65Q296 64 297 88V97L287 91L281 79Q269 89 246 89Z" fill="#142942"/>\r
              <path d="M255 129L270 147L285 129M270 147V187" stroke="#b6defc" stroke-width="2"/>\r
              <path d="M259 99H261M279 99H281" stroke="#302c37" stroke-width="3" stroke-linecap="round"/>\r
              <path d="M263 112Q270 118 278 111" stroke="#ab6353" stroke-width="2" stroke-linecap="round"/>\r
              <path d="M220 160L225 201M320 160L315 200" stroke="#d4f2ff" stroke-opacity=".3" stroke-width="2"/>\r
            </g>\r
            <g class="team-person person-left">\r
              <path d="M105 273V226Q105 193 143 189H172Q204 196 205 226V273" fill="url(#teamTeal)" stroke="#7ae4e0"/>\r
              <path d="M124 171V155Q123 125 154 126Q186 125 186 155V191H124Z" fill="#142b49"/>\r
              <ellipse cx="156" cy="159" rx="23" ry="27" fill="url(#teamSkin)"/>\r
              <path d="M131 153Q137 125 159 129Q182 134 183 154Q166 152 154 138Q145 151 131 153Z" fill="#142b49"/>\r
              <path d="M133 216L157 241L179 215" stroke="#a4d7fb" stroke-width="2"/>\r
              <path d="M146 160H148M165 160H167" stroke="#302c37" stroke-width="2.5" stroke-linecap="round"/>\r
              <path d="M149 173Q156 179 164 172" stroke="#ab6353" stroke-width="2" stroke-linecap="round"/>\r
              <circle cx="135" cy="172" r="2" fill="#ffce78"/><circle cx="178" cy="172" r="2" fill="#ffce78"/>\r
            </g>\r
            <g class="team-person person-right">\r
              <path d="M332 273V226Q334 194 368 189H396Q432 195 433 226V273" fill="url(#teamViolet)" stroke="#9ca9ff"/>\r
              <circle cx="382" cy="158" r="27" fill="url(#teamSkin)"/>\r
              <path d="M355 157V147Q355 122 380 125Q410 121 410 149L404 154L398 140Q382 146 356 141Z" fill="#11283f"/>\r
              <path d="M361 156H377V166H361ZM387 156H403V166H387ZM377 160H387" stroke="#15395c" stroke-width="2"/>\r
              <path d="M375 176Q382 180 389 175" stroke="#785239" stroke-width="2" stroke-linecap="round"/>\r
              <path d="M368 193L382 211L396 193M382 211V248" stroke="#d6d8ff" stroke-opacity=".65" stroke-width="2"/>\r
            </g>\r
            <ellipse cx="271" cy="339" rx="195" ry="13" fill="#2296ff" opacity=".15"/>\r
            <path d="M73 275H468L485 291H57Z" fill="url(#teamDesk)" stroke="#7bc8ff"/>\r
            <path d="M86 292V337M451 292V337" stroke="#326899" stroke-width="9" stroke-linecap="round"/>\r
            <g class="team-desk-plant">\r
              <path d="M98 269Q75 230 93 221Q110 232 106 252Q109 218 126 223Q134 241 111 262" fill="#39bfa6"/>\r
              <path d="M105 270V241" stroke="#82e8c8" stroke-width="2"/>\r
              <path d="M92 258H119L116 276H96Z" fill="#dae9f5"/>\r
            </g>\r
            <path d="M403 252H423V274H403ZM423 256H428Q435 263 428 268H423" fill="#c7e6fc" stroke="#72b4e4" stroke-width="1.5"/>\r
            <g class="team-laptop">\r
              <rect x="189" y="203" width="164" height="91" rx="8" fill="url(#teamScreen)" stroke="#79bffa" stroke-width="2"/>\r
              <path d="M172 295H369L355 303H187Z" fill="#76b5e5"/>\r
              <text x="271" y="238" class="team-brand" text-anchor="middle">XcellHost</text>\r
              <path class="team-code" d="M212 254H237M247 254H309M212 264H268M277 264H324M212 274H244" stroke="#66cbff" stroke-width="3" stroke-linecap="round"/>\r
              <circle class="team-live" cx="334" cy="215" r="3" fill="#4ade80"/>\r
            </g>\r
            <g class="team-badge badge-left">\r
              <rect x="24" y="77" width="132" height="51" rx="12" fill="url(#teamGlass)" stroke="#79bded" stroke-opacity=".65"/>\r
              <path d="M40 105L47 112L59 95" stroke="#4ade80" stroke-width="2.5" stroke-linecap="round"/>\r
              <text x="68" y="100" class="team-label">Expertise</text><text x="68" y="115" class="team-detail">Built together</text>\r
            </g>\r
            <g class="team-badge badge-right">\r
              <rect x="388" y="76" width="128" height="51" rx="12" fill="url(#teamGlass)" stroke="#79bded" stroke-opacity=".65"/>\r
              <path d="M411 85L403 99H412L408 115L424 96H415L418 85Z" fill="#ffb347"/>\r
              <text x="432" y="100" class="team-label">Innovation</text><text x="432" y="115" class="team-detail">Moving forward</text>\r
            </g>\r
            <text x="270" y="368" class="team-caption" text-anchor="middle">One team. Connected by purpose.</text>\r
          </svg>\r
        </div>\r
      </div>\r
    </section>\r
    <div class="team-trust-strip" aria-label="XcellHost trust points">\r
      <div class="wrap">\r
        <span><b>ISO 27001</b> &amp; <b>20000-1</b> certified</span>\r
        <span>Microsoft <b>Gold Partner</b></span>\r
        <span><b>10,000+</b> customers</span>\r
        <span><b>Since 1999</b></span>\r
        <span><b>99.95% uptime SLA</b></span>\r
        <span><b>24x7</b> NOC + SOC</span>\r
      </div>\r
    </div>\r
\r
    <section class="team-founder-hero" id="team-story">\r
      <div class="team-founder-orb team-founder-orb-one" aria-hidden="true"></div>\r
      <div class="team-founder-orb team-founder-orb-two" aria-hidden="true"></div>\r
      <div class="wrap team-founder-hero-grid">\r
        <div class="team-founder-photo-column">\r
        <div class="team-founder-portrait">\r
          <div class="team-founder-portrait-ring" aria-hidden="true"></div>\r
          <div class="team-founder-dots" aria-hidden="true"></div>\r
          <img src="/assets/images/website-photo-frame-samir-jhaveri-1.png" alt="Dr. Samir Jhaveri portrait" loading="eager" />\r
          <div class="team-portrait-footer">People <b>|</b> Technology <b>|</b> A Better Tomorrow</div>\r
        </div>\r
          <a class="team-founder-linkedin" href="https://www.linkedin.com/in/samirjhaveri-xcellhost/"\r
            target="_blank" rel="noopener noreferrer"\r
            aria-label="View Dr. Samir Jhaveri on LinkedIn (opens in a new tab)">\r
            <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96C2 21.32 2.69 22 3.55 22h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.51V9.2h2.83v1.3h.04c.39-.74 1.36-1.53 2.79-1.53 2.98 0 3.58 1.96 3.58 4.5v5.28Z" /></svg>\r
            Connect on LinkedIn\r
          </a>\r
        </div>\r
\r
        <div class="team-founder-content">\r
          <span class="team-founder-eyebrow">Leadership &amp; Innovation</span>\r
          <h1>Dr. Samir Jhaveri</h1>\r
          <h2>Managing Director</h2>\r
          <p class="team-founder-company">XcellHost Cloud Services Pvt Ltd</p>\r
          <div class="team-capabilities" aria-label="Areas of expertise">\r
            <span><i aria-hidden="true">C</i>Cloud</span>\r
            <span><i aria-hidden="true">S</i>Cybersecurity</span>\r
            <span><i aria-hidden="true">AI</i>Artificial Intelligence</span>\r
            <span><i aria-hidden="true">M</i>Digital Marketing</span>\r
          </div>\r
          <p class="team-founder-lead">A technology leader shaping the future of Cloud, Cybersecurity and AI.</p>\r
          <p class="team-founder-story">With over two decades of experience in the cloud industry, Dr. Samir Jhaveri has been at the forefront of digital transformation since 1999. As the Managing Director of XcellHost Cloud Services, he has empowered over 10,000 SMBs and enterprises with cloud, security, digital marketing and AI solutions.</p>\r
          <p class="team-founder-story team-founder-story-last">His leadership and vision continue to drive innovation and excellence in the industry. Let\xE2\u20AC\u2122s transform together!</p>\r
          <div class="team-impact-grid">\r
            <article><strong>30+</strong><span>Years of<br>Experience</span></article>\r
            <article><strong>10,000+</strong><span>Businesses<br>Empowered</span></article>\r
            <article><strong>1999</strong><span>Industry<br>Journey</span></article>\r
            <article><strong>AI</strong><span>Honorary<br>Doctorate</span><a class="team-certificate-link" href="/assets/images/ai-certification.jpeg" target="_blank" rel="noopener noreferrer" aria-label="View AI Honorary Doctorate certificate (opens in a new tab)">View certificate</a></article>\r
          </div>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <section class="company-founder-section">\r
      <div class="wrap company-founder-grid">\r
        <div class="company-founder-visual">\r
          <img\r
            src="/assets/images/website-photo-frame-samir-jhaveri-1.png"\r
            alt="Dr. Samir Jhaveri portrait"\r
            loading="eager"\r
          />\r
        </div>\r
\r
        <div class="company-founder-copy">\r
          <h2>Dr. Samir Jhaveri</h2>\r
          <p class="company-founder-highlights">\r
            Managing Director XcellHost Cloud Services Pvt Ltd Cloud,<br>\r
            Cybersecurity, AI, Digital Marketing Expert<br>\r
            College Dropout like Bill Gates<br>\r
            Honorory Doctorate (Honoris Causa) in Artificial Intelligence\r
          </p>\r
          <p class="company-founder-summary">\r
            College dropout like Bill Gates. With over two decades of experience in the cloud industry, Samir Jhaveri\r
            has been at the forefront of digital transformation since 1999. As the Managing Director of XcellHost\r
            Cloud Services, he has empowered over 10,000 SMBs and enterprises with cutting-edge cloud, security,\r
            digital marketing, and AI solutions.His leadership and vision continue to drive innovation and\r
            excellence in the industry.  Let\u2019s transform together!\r
          </p>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <section class="team-directory" id="team-directory" aria-labelledby="team-directory-title">\r
      <div class="wrap">\r
        <header class="team-section-heading">\r
          <span class="team-section-label">The people behind XcellHost</span>\r
          <h2 id="team-directory-title">Meet our <em>Xcellerators Human Touch + AI Agents.</em></h2>\r
          <p>Meet the people bringing experience, ideas and care to your cloud journey.</p>\r
        </header>\r
        <div class="team-tabs" role="tablist" aria-label="Team departments">\r
          @for (tab of teamTabs; track tab.id; let index = $index) {\r
            <button type="button" role="tab"\r
              [id]="'team-tab-' + tab.id"\r
              [attr.aria-selected]="activeTeamTab() === tab.id"\r
              aria-controls="team-members-panel"\r
              [tabIndex]="activeTeamTab() === tab.id ? 0 : -1"\r
              (click)="activeTeamTab.set(tab.id)"\r
              (keydown)="onTeamTabKeydown($event, index)"\r
            >{{ tab.label }}</button>\r
          }\r
        </div>\r
        <div id="team-members-panel" class="team-members-panel" role="tabpanel"\r
          [attr.aria-labelledby]="'team-tab-' + activeTeamTab()" tabindex="0">\r
          <div class="team-group-heading">\r
            <span class="team-group-label"><span class="material-symbols-outlined team-label-icon" aria-hidden="true">{{ teamDepartmentIcon(activeTeamTab()) }}</span>{{ teamDepartmentLabel(activeTeamTab()) }}</span>\r
            <span class="team-group-rule" aria-hidden="true"></span>\r
            <span class="team-group-count">\r
              @if (activeTeamTab() === 'security') { {{ securityTeam.length }} roles }\r
              @else { {{ visibleTeamMembers().length }} members }\r
            </span>\r
          </div>\r
          <div class="team-portrait-grid" [class.team-portrait-grid-security]="activeTeamTab() === 'security'">\r
            @for (member of visibleTeamMembers(); track member.department + member.name) {\r
              <article class="team-portrait-card">\r
                <div class="team-portrait-image">\r
                  @if (member.image) {\r
                    <img [src]="member.image" [alt]="member.name" width="320" height="320" loading="lazy" decoding="async" />\r
                  } @else {\r
                    <div class="team-portrait-placeholder" aria-hidden="true">\r
                      <svg viewBox="0 0 160 160" fill="currentColor"><circle cx="80" cy="55" r="29" /><path d="M24 150v-18a56 56 0 0 1 112 0v18Z" /></svg>\r
                    </div>\r
                  }\r
                </div>\r
                <div class="team-portrait-caption">\r
                  <span class="team-role-badge">{{ teamDepartmentLabel(member.department) }}</span>\r
                  <h3>{{ member.name }}</h3>\r
                  @if (member.role) { <p>{{ member.role }}</p> }\r
                </div>\r
              </article>\r
            } @empty {\r
              <p>Team member details will be added soon.</p>\r
            }\r
          </div>\r
        </div>\r
      </div>\r
    </section>\r
\r
    <xh-why-xcellhost-reasons />\r
\r
    <xh-team-structure />\r
\r
    <section class="team-section team-values">\r
      <div class="wrap">\r
        <header class="team-section-heading">\r
          <span>The Core Values We Live By</span>\r
          <h2>What shapes the way we work.</h2>\r
        </header>\r
\r
        <div class="team-grid team-grid-four">\r
          @for (value of values; track value.title) {\r
            <article class="team-value-card">\r
              <h3>{{ value.title }}</h3>\r
              <p>{{ value.body }}</p>\r
            </article>\r
          }\r
        </div>\r
      </div>\r
    </section>\r
\r
    <section class="team-section team-commitment">\r
      <div class="wrap team-commitment-grid">\r
        <div class="team-commitment-copy">\r
          <span class="team-section-label">Our commitment</span>\r
          <h2>The best effort for every customer.</h2>\r
          <p>\r
            We aim to be the easiest team to work with when the work is simple and the most reliable team when the\r
            work is urgent. Customers should always know who owns the next step.\r
          </p>\r
          <p>\r
            That means careful planning, honest expectations and support that does not disappear once the project is\r
            live.\r
          </p>\r
        </div>\r
\r
        <div class="team-stats-grid">\r
          @for (item of commitmentStats; track item.label) {\r
            <article class="team-stat-card">\r
              <strong>{{ item.value }}</strong>\r
              <span>{{ item.label }}</span>\r
            </article>\r
          }\r
        </div>\r
      </div>\r
    </section>\r
\r
    <section class="team-contact-band">\r
      <div class="wrap team-contact-grid">\r
        <div class="team-contact-copy team-support-stripe">\r
          <span class="team-section-label">Don't hesitate to contact us</span>\r
          <h2>Grow your business with a team that stays with you.</h2>\r
          <p>\r
            If you want a quick answer, a formal quote or help choosing the right service, reach out and we will route\r
            you to the right person.\r
          </p>\r
          <a class="btn btn-primary" routerLink="/contact">Contact Us</a>\r
          <a class="pp-cta-buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support">\r
            <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" loading="lazy" />\r
          </a>\r
        </div>\r
\r
        <div class="team-contact-cards">\r
          @for (card of contactCards; track card.label) {\r
            <a class="team-contact-card" [href]="card.href" target="_blank" rel="noopener">\r
              <span>{{ card.label }}</span>\r
              <strong>{{ card.value }}</strong>\r
              <p>{{ card.note }}</p>\r
            </a>\r
          }\r
        </div>\r
      </div>\r
    </section>\r
  </main>\r
  } @else {\r
  <main class="ppage as-page company-page">\r
    @if (slug() === 'partner-overview') {\r
    <section class="partner-overview-hero" aria-labelledby="partnerOverviewTitle">\r
      <span class="partner-hero-glow" aria-hidden="true"></span>\r
      <span class="partner-hero-network" aria-hidden="true"></span>\r
      <span class="partner-hero-orbit partner-orbit-one" aria-hidden="true"></span>\r
      <span class="partner-hero-orbit partner-orbit-two" aria-hidden="true"></span>\r
      <span class="partner-hero-scan" aria-hidden="true"></span>\r
      <canvas class="partner-hero-net" xhHeroNet aria-hidden="true"></canvas>\r
      <div class="wrap partner-hero-grid partner-model-hero-grid">\r
        <div class="partner-hero-copy">\r
          <div class="pp-crumb">Home \u203A Company \u203A Partner</div>\r
          <span class="partner-hero-kicker">XcellHost partner ecosystem</span>\r
          <h1 id="partnerOverviewTitle">Partnership Overview</h1>\r
          <p>Build recurring revenue with 300+ cloud, security and AI services your customers already need.</p>\r
          <p class="partner-hero-spotlight">Right now for partners \u2192 <strong>free onboarding \xB7 recurring commissions</strong></p>\r
          <div class="partner-hero-actions">\r
            <a class="partner-primary-action" routerLink="/contact">Become a partner <span>\u2192</span></a>\r
            <a class="partner-secondary-action" href="#partnership-types-title">Explore the programme</a>\r
          </div>\r
          <div class="partner-hero-stats" aria-label="Partner programme highlights">\r
            <div><b>300+</b><span>products &amp; services</span></div>\r
            <div><b>4</b><span>partnership types</span></div>\r
            <div><b>24\xD77</b><span>technical support</span></div>\r
            <div><b>1999</b><span>cloud expertise since</span></div>\r
          </div>\r
          <div class="partner-hero-live"><i aria-hidden="true"></i>Partner portal live \xB7 wholesale pricing \xB7 white-label ready</div>\r
        </div>\r
        <div class="partner-hero-visual" aria-hidden="true">\r
          <div class="partner-visual-stage">\r
            <span class="partner-program-visual-label">\r
              <span>XcellHost Cloud Partner Program</span>\r
              <span class="partner-program-icons" aria-hidden="true">\r
                <svg viewBox="0 0 24 24"><path d="m8.5 12.5 2 2a1.4 1.4 0 0 0 2 0l3.8-3.8M7.2 7.8l2.2-2.2a2 2 0 0 1 2.8 0l1 1M3 8l3-3 3 3-3 3-3-3Zm12 0 3-3 3 3-3 3-3-3Z"/><path d="m6.8 10.2 5.4 5.4a1.4 1.4 0 0 0 2 0l.4-.4a1.4 1.4 0 0 0 0-2l-3.1-3.1"/></svg>\r
                <svg viewBox="0 0 24 24"><path d="M9 4h6l-1 4H10L9 4Z"/><path d="M10 8c-3 2.2-5 5.1-5 8 0 3 2.7 4 7 4s7-1 7-4c0-2.9-2-5.8-5-8"/><path d="M9.5 13h5M12 11v6M9.5 15h5"/></svg>\r
              </span>\r
            </span>\r
            <span class="partner-float-node node-one"><i>\u2726</i><b>300+ services</b></span>\r
            <span class="partner-float-node node-two"><i>\u20B9</i><b>Recurring revenue</b></span>\r
            <span class="partner-float-node node-three"><i>24</i><b>24\xD77 support</b></span>\r
            <span class="partner-pulse-ring"></span>\r
            <img src="/assets/images/partner-overview-growth-hero.png" alt="" loading="eager" />\r
          </div>\r
        </div>\r
      </div>\r
    </section>\r
    } @else if (slug() === 'certifications-awards') {\r
    <section class="cert-hero" aria-labelledby="certHeroTitle">\r
      <canvas class="cert-hero-net" xhHeroNet aria-hidden="true"></canvas>\r
      <span class="cert-world" aria-hidden="true"></span><span class="cert-orbit cert-orbit-one" aria-hidden="true"></span><span class="cert-orbit cert-orbit-two" aria-hidden="true"></span>\r
      <div class="wrap cert-hero-grid">\r
        <div class="cert-hero-copy">\r
          <div class="pp-crumb">HOME &nbsp;\u203A&nbsp; COMPANY &nbsp;\u203A&nbsp; CERTIFICATIONS</div>\r
          <span class="cert-kicker">Verified standards &amp; credentials</span>\r
          <h1 id="certHeroTitle">Certifications that prove our <em>commitment.</em></h1>\r
          <p>Independent credentials that reflect disciplined operations, information security and technical capability.</p>\r
          <div class="cert-hero-points"><span>\u2713 ISO-certified operations</span><span>\u2713 Independently verified</span></div>\r
          <div class="cert-hero-actions">\r
            <a class="primary" href="#certifications-title"><span>\u2193</span> View Certificates</a>\r
            <a href="mailto:sales@xcellhost.cloud?subject=XcellHost%20certification%20profile"><span>\u25A3</span> Certification Profile</a>\r
            <a class="talk" href="mailto:sales@xcellhost.cloud?subject=XcellHost%20compliance%20enquiry">Compliance Enquiry</a>\r
          </div>\r
          <div class="cert-ask-ai"><span class="cert-ai-label">\u2726 Ask AI About XcellHost Certifications</span><div>\r
            <a aria-label="Ask ChatGPT" [href]="companyAskAiHref('chatgpt')" target="_blank" rel="noopener noreferrer"><img src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=64" alt=""/></a>\r
            <a aria-label="Ask Perplexity" [href]="companyAskAiHref('perplexity')" target="_blank" rel="noopener noreferrer"><img src="https://www.google.com/s2/favicons?domain=perplexity.ai&amp;sz=64" alt=""/></a>\r
            <a aria-label="Ask Claude" [href]="companyAskAiHref('claude')" target="_blank" rel="noopener noreferrer"><img src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=64" alt=""/></a>\r
            <a aria-label="Ask Gemini" [href]="companyAskAiHref('google')" target="_blank" rel="noopener noreferrer"><img src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=64" alt=""/></a>\r
          </div></div>\r
        </div>\r
        <div class="cert-hero-visual cert-new-animation" aria-hidden="true">\r
          <svg viewBox="0 0 520 410" fill="none">\r
            <defs>\r
              <linearGradient id="credentialPaper" x2="1" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#dcecff"/></linearGradient>\r
              <linearGradient id="credentialShield" x2=".8" y2="1"><stop stop-color="#5dd9ff"/><stop offset=".5" stop-color="#2485eb"/><stop offset="1" stop-color="#5145d6"/></linearGradient>\r
              <linearGradient id="credentialGold" x2="1" y2="1"><stop stop-color="#fff0b3"/><stop offset=".5" stop-color="#ffc665"/><stop offset="1" stop-color="#d58e2b"/></linearGradient>\r
              <radialGradient id="credentialGlow"><stop stop-color="#3caaff" stop-opacity=".3"/><stop offset="1" stop-color="#3caaff" stop-opacity="0"/></radialGradient>\r
            </defs>\r
            <ellipse cx="262" cy="205" rx="238" ry="185" fill="url(#credentialGlow)"/>\r
            <circle class="credential-orbit" cx="260" cy="208" r="170" stroke="#64bdff" stroke-opacity=".35" stroke-dasharray="3 10"/>\r
            <circle cx="260" cy="208" r="143" stroke="#64bdff" stroke-opacity=".12"/>\r
            <g transform="translate(143 57) rotate(7 124 143)"><rect width="248" height="286" rx="18" fill="#3972a4" stroke="#72b3e4" stroke-opacity=".5"/></g>\r
            <g class="credential-document">\r
              <rect x="127" y="52" width="248" height="286" rx="18" fill="url(#credentialPaper)" stroke="#b6dcff"/>\r
              <rect x="141" y="66" width="220" height="258" rx="10" stroke="#a5c9eb"/>\r
              <text x="251" y="96" class="credential-document-heading" text-anchor="middle">XCELLHOST</text>\r
              <text x="251" y="116" class="credential-document-subtitle" text-anchor="middle">STANDARDS &amp; ASSURANCE</text>\r
              <path d="M158 130H344" stroke="#c0d6eb"/>\r
              <path class="credential-document-lines" d="M165 236H316M165 249H293M165 262H305" stroke="#a9c4e0" stroke-width="5" stroke-linecap="round"/>\r
              <path d="M165 296Q177 274 184 294Q195 273 199 294L219 291" stroke="#5683b1" stroke-width="2" stroke-linecap="round"/>\r
              <text x="165" y="312" class="credential-signature-label">COMMITMENT TO QUALITY</text>\r
              <g class="credential-seal"><path d="M317 283L310 321L326 313L340 324L333 282" fill="#f5b74f"/><circle cx="325" cy="285" r="23" fill="url(#credentialGold)"/><circle cx="325" cy="285" r="17" stroke="#a87524" stroke-opacity=".6" stroke-dasharray="2 3"/><path d="M317 285L323 291L334 279" stroke="#94651f" stroke-width="2.5" stroke-linecap="round"/></g>\r
            </g>\r
            <g class="credential-main-shield">\r
              <path d="M250 137L293 154L288 194Q281 216 250 232Q219 216 212 194L207 154Z" fill="url(#credentialShield)" stroke="#92d9ff" stroke-width="1.5"/>\r
              <circle cx="250" cy="179" r="23" stroke="#e2f8ff" stroke-width="1.5"/>\r
              <path class="credential-check" d="M236 178L247 189L266 167" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>\r
            </g>\r
            <g class="credential-badge badge-security"><rect x="16" y="139" width="139" height="59" rx="13" fill="#10355f" stroke="#6fb7e9"/><circle cx="39" cy="161" r="5" fill="#60e3b3"/><text x="52" y="165" class="credential-badge-title">ISO 27001</text><text x="32" y="184" class="credential-badge-caption">Information security</text></g>\r
            <g class="credential-badge badge-service"><rect x="348" y="215" width="156" height="59" rx="13" fill="#10355f" stroke="#6fb7e9"/><circle cx="371" cy="237" r="5" fill="#60e3b3"/><text x="384" y="241" class="credential-badge-title">ISO 20000-1</text><text x="364" y="260" class="credential-badge-caption">Service management</text></g>\r
            <g class="credential-sparkles" stroke="#89d6ff" stroke-width="2" stroke-linecap="round"><path d="M75 66V78M69 72H81M437 113V127M430 120H444M90 301V311M85 306H95"/><circle cx="415" cy="326" r="3" fill="#ffc869" stroke="none"/><circle cx="374" cy="49" r="3" fill="#89d6ff" stroke="none"/></g>\r
            <text x="260" y="391" class="credential-footer-label" text-anchor="middle">Security. Service quality. Technical capability.</text>\r
          </svg>\r
        </div>\r
      </div>\r
    </section>\r
    } @else if (slug() === 'awards') {\r
    <section class="awards-hero" aria-labelledby="awardsHeroTitle">\r
      <span class="awards-hero-glow" aria-hidden="true"></span>\r
      <span class="awards-hero-dots" aria-hidden="true"></span>\r
      <div class="wrap awards-hero-grid">\r
        <div class="awards-hero-copy">\r
          <div class="pp-crumb">HOME &nbsp;\u203A&nbsp; COMPANY &nbsp;\u203A&nbsp; AWARDS</div>\r
          <span class="awards-hero-kicker">XCELLHOST RECOGNITION</span>\r
          <h1 id="awardsHeroTitle">Recognised for excellence.<br /><em>Driven by trust.</em></h1>\r
          <p>Awards and recognition from XcellHost</p>\r
          <strong class="awards-hero-line">Celebrating excellence. Inspiring what\u2019s next.<i aria-hidden="true"></i></strong>\r
          <div class="awards-hero-actions awards-product-actions"><a class="awards-primary-action" href="#awards-title">\u2193 Awards</a><a class="awards-secondary-action" routerLink="/company/certifications-awards">\u25A3 Certifications</a><a class="awards-secondary-action" href="#awards-title">Recognition Tour</a><a class="awards-secondary-action" routerLink="/contact">Company Profile</a><a class="awards-talk-action" routerLink="/contact">Let's Talk</a></div>\r
          <div class="awards-ask-ai"><span>\u2726 Ask AI About XcellHost Awards</span><div><a [href]="companyAskAiHref('chatgpt')" target="_blank" rel="noopener noreferrer" aria-label="Ask ChatGPT"><img src="https://www.google.com/s2/favicons?domain=chatgpt.com&amp;sz=64" alt=""></a><a href="https://grok.com/?q=XcellHost%20Awards" target="_blank" rel="noopener noreferrer" aria-label="Ask Grok"><img src="https://www.google.com/s2/favicons?domain=grok.com&amp;sz=64" alt=""></a><a [href]="companyAskAiHref('claude')" target="_blank" rel="noopener noreferrer" aria-label="Ask Claude"><img src="https://www.google.com/s2/favicons?domain=claude.ai&amp;sz=64" alt=""></a><a [href]="companyAskAiHref('google')" target="_blank" rel="noopener noreferrer" aria-label="Ask Gemini"><img src="https://www.google.com/s2/favicons?domain=gemini.google.com&amp;sz=64" alt=""></a><a [href]="companyAskAiHref('perplexity')" target="_blank" rel="noopener noreferrer" aria-label="Ask Perplexity"><img src="https://www.google.com/s2/favicons?domain=perplexity.ai&amp;sz=64" alt=""></a></div></div>\r
        </div>\r
        <div class="awards-hero-visual awards-animation" aria-hidden="true">\r
          <svg viewBox="0 0 520 430" fill="none">\r
            <defs>\r
              <linearGradient id="awardCrystal" x1="202" y1="76" x2="329" y2="265" gradientUnits="userSpaceOnUse"><stop stop-color="#e9fbff"/><stop offset=".35" stop-color="#62b4f4"/><stop offset=".6" stop-color="#e0f5ff"/><stop offset="1" stop-color="#3184c6"/></linearGradient>\r
              <linearGradient id="awardGold"><stop stop-color="#bb7b22"/><stop offset=".25" stop-color="#ffeab0"/><stop offset=".55" stop-color="#e5a43d"/><stop offset=".8" stop-color="#ffdf8c"/><stop offset="1" stop-color="#aa701c"/></linearGradient>\r
              <linearGradient id="awardBase" x2="1" y2="1"><stop stop-color="#163e70"/><stop offset=".5" stop-color="#3084bc"/><stop offset="1" stop-color="#071c38"/></linearGradient>\r
              <radialGradient id="awardGlow"><stop stop-color="#258dfc" stop-opacity=".35"/><stop offset="1" stop-color="#258dfc" stop-opacity="0"/></radialGradient>\r
              <clipPath id="awardCrystalClip"><path d="M260 63L325 133L298 257L260 287L222 257L195 133Z"/></clipPath>\r
              <path id="awardLeaf" d="M0 0Q-30 -1 -29 -20Q-4 -21 0 0Z" fill="url(#awardGold)"/>\r
            </defs>\r
            <ellipse cx="260" cy="215" rx="246" ry="197" fill="url(#awardGlow)"/>\r
            <circle class="award-new-orbit" cx="260" cy="215" r="175" stroke="#7ecbff" stroke-opacity=".3" stroke-dasharray="3 10"/>\r
            <circle cx="260" cy="215" r="139" stroke="#7ecbff" stroke-opacity=".15"/>\r
            <ellipse class="award-ground-glow" cx="260" cy="384" rx="143" ry="17" fill="#389efe" opacity=".2"/>\r
            <g class="award-animated-trophy">\r
              <g class="award-laurel" stroke="#ffdc86" stroke-width="2">\r
                <path d="M242 327Q142 291 154 175M278 327Q378 291 366 175"/>\r
                <g stroke="none"><use href="#awardLeaf" transform="translate(217 313) rotate(-12)"/><use href="#awardLeaf" transform="translate(193 292) rotate(7)"/><use href="#awardLeaf" transform="translate(172 266) rotate(22)"/><use href="#awardLeaf" transform="translate(160 237) rotate(36)"/><use href="#awardLeaf" transform="translate(154 207) rotate(52)"/>\r
                  <g transform="translate(520 0) scale(-1 1)"><use href="#awardLeaf" transform="translate(217 313) rotate(-12)"/><use href="#awardLeaf" transform="translate(193 292) rotate(7)"/><use href="#awardLeaf" transform="translate(172 266) rotate(22)"/><use href="#awardLeaf" transform="translate(160 237) rotate(36)"/><use href="#awardLeaf" transform="translate(154 207) rotate(52)"/></g>\r
                </g>\r
              </g>\r
              <path d="M242 269H278L284 325H236Z" fill="url(#awardGold)" stroke="#fbe3a0"/>\r
              <path d="M260 63L325 133L298 257L260 287L222 257L195 133Z" fill="url(#awardCrystal)" stroke="#addefc" stroke-width="1.5"/>\r
              <path d="M260 63L239 134L260 287L283 134ZM195 133L239 134L222 257M325 133L283 134L298 257" stroke="#e8faff" stroke-opacity=".7"/>\r
              <path d="M260 64L239 134L195 133Z" fill="#fff" opacity=".42"/>\r
              <path d="M283 134L325 133L260 63Z" fill="#10356a" opacity=".35"/>\r
              <g clip-path="url(#awardCrystalClip)"><path class="award-crystal-shine" d="M145 55L165 55L315 310L295 310Z" fill="white" opacity=".45"/></g>\r
              <circle cx="260" cy="176" r="29" fill="#164e8b" fill-opacity=".7" stroke="#e5f6ff"/>\r
              <path d="M260 153L266 166L280 168L270 178L273 193L260 186L247 193L250 178L240 168L254 166Z" fill="url(#awardGold)"/>\r
              <path d="M220 319H300L314 345H206Z" fill="url(#awardGold)" stroke="#e4c57d"/>\r
              <path d="M206 345H314L325 379H195Z" fill="url(#awardBase)" stroke="#6ca9d6"/>\r
              <path d="M199 370H321V379H199Z" fill="url(#awardGold)"/>\r
              <text x="260" y="363" class="award-trophy-brand" text-anchor="middle">XCELLHOST</text>\r
            </g>\r
            <g class="award-new-badge award-badge-left"><rect x="20" y="89" width="135" height="43" rx="12" fill="#11365d" stroke="#5696c9"/><text x="87" y="115" class="award-badge-text" text-anchor="middle">EXCELLENCE</text></g>\r
            <g class="award-new-badge award-badge-right"><rect x="368" y="120" width="135" height="43" rx="12" fill="#11365d" stroke="#5696c9"/><text x="435" y="146" class="award-badge-text" text-anchor="middle">INNOVATION</text></g>\r
            <g class="award-star-sparkles" stroke="#ffdb8a" stroke-width="2" stroke-linecap="round"><path d="M355 58V76M346 67H364M97 244V256M91 250H103M409 281V295M402 288H416"/><circle cx="187" cy="48" r="2" fill="#ffdb8a"/><circle cx="442" cy="213" r="2" fill="#ffdb8a"/></g>\r
            <text x="260" y="420" class="award-animation-caption" text-anchor="middle">Celebrating the milestones that move us forward.</text>\r
          </svg>\r
        </div>\r
      </div>\r
    </section>\r
    } @else if (slug() === 'apply-for-job') {\r
      <section class="career-hero apply-job-hero" aria-labelledby="apply-job-hero-title">\r
        <span class="career-hero-orb" aria-hidden="true"></span>\r
        <div class="wrap career-hero-inner">\r
          <div class="career-hero-copy">\r
            <p class="career-hero-eyebrow">Careers at XcellHost <span aria-hidden="true"></span></p>\r
            <h1 id="apply-job-hero-title">Find Your Next<br />Opportunity at <span>XcellHost</span></h1>\r
            <p class="career-hero-tagline">Explore open roles in cloud, cybersecurity, technology and customer success\u2014and build work that makes a real impact.</p>\r
            <div class="apply-job-hero-actions">\r
              <a class="apply-job-primary" href="#xh-jobs-title">View Open Positions <span aria-hidden="true">\u2193</span></a>\r
              <a class="apply-job-secondary" routerLink="/company/careers-overview">Life at XcellHost <span aria-hidden="true">\u2192</span></a>\r
            </div>\r
          </div>\r
          <div class="career-hero-visual apply-job-hero-visual">\r
            <img class="career-hero-photo" src="/assets/images/apply-for-job-hero.png" alt="XcellHost verified jobs and job alerts" width="2170" height="725" fetchpriority="high" />\r
          </div>\r
        </div>\r
      </section>\r
    } @else {\r
    @if (slug() === 'careers-overview') {\r
      <section class="career-hero career-overview-hero" aria-labelledby="career-hero-title">\r
        <span class="career-hero-orb" aria-hidden="true"></span>\r
        <div class="wrap career-hero-inner">\r
          <div class="career-hero-copy">\r
            <h1 id="career-hero-title">Build Your Career<br />with <span>XcellHost</span></h1>\r
            <p class="career-hero-eyebrow">Careers at XcellHost <span aria-hidden="true"></span></p>\r
            <p class="career-hero-tagline">Join a team that\u2019s shaping a safer, smarter and more connected tomorrow.</p>\r
            <ul class="career-hero-benefits" aria-label="Grow with XcellHost">\r
              <li><span class="material-symbols-outlined" aria-hidden="true">groups</span><span>Great<br />People</span></li>\r
              <li><span class="material-symbols-outlined" aria-hidden="true">lightbulb</span><span>Continuous<br />Learning</span></li>\r
              <li><span class="material-symbols-outlined" aria-hidden="true">monitoring</span><span>Meaningful<br />Impact</span></li>\r
              <li><span class="material-symbols-outlined" aria-hidden="true">star</span><span>A Brighter<br />Tomorrow</span></li>\r
            </ul>\r
            <div class="career-hero-actions">\r
              <a class="career-hero-primary" routerLink="/company/apply-for-job">Explore Career Opportunities</a>\r
              <a class="career-hero-secondary" routerLink="/company/careers-overview" fragment="career-life-gallery">Life at XcellHost</a>\r
            </div>\r
          </div>\r
          <div class="career-hero-visual">\r
            <img class="career-hero-photo" src="/assets/images/career-hero-team-cutout.png" alt="Three colleagues sharing ideas around a laptop" width="1450" height="1086" fetchpriority="high" />\r
          </div>\r
        </div>\r
      </section>\r
      <section class="career-impact-strip" aria-label="XcellHost business impact">\r
        <div class="career-impact-inner">\r
          <div class="career-impact-item">\r
            <span class="material-symbols-outlined" aria-hidden="true">business_center</span>\r
            <div><strong>05+</strong><span>Years In Business</span></div>\r
          </div>\r
          <div class="career-impact-item">\r
            <span class="material-symbols-outlined" aria-hidden="true">public</span>\r
            <div><strong>38+</strong><span>Countries Served Worldwide</span></div>\r
          </div>\r
          <div class="career-impact-item">\r
            <span class="material-symbols-outlined" aria-hidden="true">groups</span>\r
            <div><strong>350+</strong><span>Clients Secured Worldwide</span></div>\r
          </div>\r
          <div class="career-impact-item">\r
            <span class="material-symbols-outlined" aria-hidden="true">verified_user</span>\r
            <div><strong>2500+</strong><span>Penetration Reports Delivered</span></div>\r
          </div>\r
        </div>\r
      </section>\r
      <section class="career-why" aria-labelledby="career-why-title">\r
        <div class="career-why-inner">\r
          <div class="career-why-intro">\r
            <span>Why join XcellHost?</span>\r
            <h2 id="career-why-title">More Than a Job, <em>It&rsquo;s a Mission</em></h2>\r
            <p>We empower our people to learn, grow and make an impact in the world of cloud and cybersecurity.</p>\r
            <a routerLink="/company/careers-overview" fragment="career-life-gallery">Learn More About Us</a>\r
          </div>\r
          <div class="career-why-cards">\r
            <article class="career-why-card">\r
              <i class="material-symbols-outlined" aria-hidden="true">rocket_launch</i>\r
              <h3>Fast Growth Opportunities</h3>\r
              <p>We are scaling rapidly, giving you exposure to leadership and growth.</p>\r
            </article>\r
            <article class="career-why-card">\r
              <i class="material-symbols-outlined" aria-hidden="true">shield</i>\r
              <h3>Real-World Challenges</h3>\r
              <p>Solve meaningful cloud and security problems for businesses worldwide.</p>\r
            </article>\r
            <article class="career-why-card">\r
              <i class="material-symbols-outlined" aria-hidden="true">menu_book</i>\r
              <h3>Continuous Learning</h3>\r
              <p>Mentorship, training and certifications help fuel your growth.</p>\r
            </article>\r
            <article class="career-why-card">\r
              <i class="material-symbols-outlined" aria-hidden="true">groups</i>\r
              <h3>Collaborative Culture</h3>\r
              <p>We believe in teamwork, transparency and mutual respect.</p>\r
            </article>\r
            <article class="career-why-card">\r
              <i class="material-symbols-outlined" aria-hidden="true">lightbulb</i>\r
              <h3>Innovation Driven</h3>\r
              <p>Work with evolving cloud, cybersecurity and AI technologies.</p>\r
            </article>\r
          </div>\r
        </div>\r
      </section>\r
    } @else {\r
    @if (slug() === 'vendor-partners') {\r
      <section class="vendor-hero" aria-labelledby="vendorHeroTitle">\r
        <div class="wrap vendor-hero-grid">\r
          <div class="vendor-hero-copy">\r
            <nav class="vendor-breadcrumb" aria-label="Breadcrumb"><a routerLink="/">Home</a><span>/</span><span>Vendor Partners</span></nav>\r
            <span class="vendor-eyebrow">CONNECTED BY EXPERTISE</span>\r
            <h1 id="vendorHeroTitle">Leading technology.<br /><em>Stronger together.</em></h1>\r
            <p>Global technology leaders. One trusted team. Explore the partners behind our cloud, security, productivity and AI solutions.</p>\r
            <a class="btn btn-primary vendor-explore" href="#vendor-directory">Explore our partners <span aria-hidden="true">&rarr;</span></a>\r
            <div class="vendor-hero-facts"><div><b>{{ vendorCount }}</b><span>Vendor listings</span></div><div><b>{{ partnerCategories.length }}</b><span>Technology categories</span></div><div><b>Since 1999</b><span>Building connections</span></div></div>\r
          </div>\r
          <div class="vendor-ecosystem" aria-hidden="true">\r
            <svg class="vendor-network-lines" viewBox="0 0 520 380" fill="none"><circle cx="260" cy="190" r="133" stroke="#67baff" stroke-opacity=".25" stroke-dasharray="3 9"/><circle cx="260" cy="190" r="88" stroke="#67baff" stroke-opacity=".12"/><g class="vendor-data-flow" stroke="#56baff" stroke-width="1.5" stroke-dasharray="5 9"><path d="M260 190L112 66M260 190L408 66M260 190L85 190M260 190L435 190M260 190L112 314M260 190L408 314"/></g></svg>\r
            <div class="vendor-network-hub"><img src="/assets/images/xcellhost-logo.png" alt=""/><span>YOUR TECHNOLOGY TEAM</span></div>\r
            <div class="vendor-orbit-card orbit-microsoft"><img src="/assets/images/vendor-partners/02-microsoft-partner.png" alt=""/><span>Productivity</span></div>\r
            <div class="vendor-orbit-card orbit-aws"><img src="/assets/images/vendor-partners/21-aws.png" alt=""/><span>Cloud infrastructure</span></div>\r
            <div class="vendor-orbit-card orbit-azure"><img src="/assets/images/vendor-partners/01-azure.png" alt=""/><span>Cloud platforms</span></div>\r
            <div class="vendor-orbit-card orbit-google"><img src="/assets/images/vendor-partners/41-google-cloud-platform.png" alt=""/><span>Connected cloud</span></div>\r
            <div class="vendor-orbit-card orbit-acronis"><img src="/assets/images/vendor-partners/80-acronis-3.png" alt=""/><span>Data protection</span></div>\r
            <div class="vendor-orbit-card orbit-oracle"><img src="/assets/images/vendor-partners/61-oracle-cloud-infrastructure.png" alt=""/><span>Enterprise cloud</span></div>\r
            <div class="vendor-network-caption"><i></i> One connected technology ecosystem</div>\r
          </div>\r
        </div>\r
      </section>\r
    } @else {\r
    <section class="pp-hero company-hero">\r
      <span class="company-orb company-orb-one"></span>\r
      <span class="company-orb company-orb-two"></span>\r
      <div class="wrap">\r
        <div class="pp-crumb">Home \u203A Company \u203A {{ page.eyebrow }}</div>\r
        <span class="company-kicker">{{ page.eyebrow }}</span>\r
        <h1>{{ page.title }}</h1>\r
        <p class="pp-tagline">{{ page.tagline }}</p>\r
      </div>\r
    </section>\r
    }\r
    }\r
    }\r
\r
    @if (slug() === 'our-team-our-story') {\r
      <section class="company-founder-section">\r
        <div class="wrap company-founder-grid">\r
          <div class="company-founder-visual">\r
            <img\r
              src="/assets/images/website-photo-frame-samir-jhaveri-1.png"\r
              alt="Dr. Samir Jhaveri portrait"\r
              loading="eager"\r
            />\r
          </div>\r
\r
          <div class="company-founder-copy">\r
            <h2>Dr. Samir Jhaveri</h2>\r
            <p class="company-founder-highlights">\r
              Managing Director XcellHost Cloud Services Pvt Ltd Cloud,<br>\r
              Cybersecurity, AI, Digital Marketing Expert<br>\r
              College Dropout like Bill Gates<br>\r
              Honorory Doctorate (Honoris Causa) in Artificial Intelligence\r
            </p>\r
            <p class="company-founder-summary">\r
              College dropout like Bill Gates. With over two decades of experience in the cloud industry, Samir Jhaveri\r
              has been at the forefront of digital transformation since 1999. As the Managing Director of XcellHost\r
              Cloud Services, he has empowered over 10,000 SMBs and enterprises with cutting-edge cloud,\u{1F525} security,\r
              digital marketing, and AI solutions.\u2728 His leadership and vision continue to drive innovation and\r
              excellence in the industry. \u{1F31F}\u{1F4AB} Let\u2019s transform together!\u{1F525}\r
            </p>\r
          </div>\r
        </div>\r
      </section>\r
    }\r
\r
    <section class="company-body" [id]="slug() === 'partner-overview' ? 'partner-overview-content' : null">\r
      @if (slug() === 'partner-overview') {\r
        <xh-reseller-program-content />\r
      } @else if (slug() === 'apply-for-job') {\r
        <xh-zoho-job-listing />\r
      } @else {\r
      <div class="wrap company-wrap">\r
        @if (slug() !== 'vendor-partners' && slug() !== 'certifications-awards' && slug() !== 'careers-overview') {\r
          <p class="company-intro">{{ page.intro }}</p>\r
        }\r
\r
        @if (slug() === 'careers-overview') {\r
          <section class="career-life" aria-labelledby="career-life-title">\r
            <header>\r
              <h2 id="career-life-title">Life at <em>XcellHost</em></h2>\r
              <p>Real people, shared ideas and room to grow. Meet the teams bringing care and creativity to our everyday work.</p>\r
            </header>\r
            <div class="career-life-grid" id="career-life-gallery" aria-live="polite">\r
              @for (card of visibleCareerLifeCards(); track card.title) {\r
                <article class="career-life-card">\r
                  <img class="career-life-photo" [src]="card.image" [alt]="card.alt" width="680" height="510" loading="lazy" decoding="async" />\r
                  <p>{{ card.caption }}</p>\r
                </article>\r
              }\r
            </div>\r
            <div class="career-life-dots" role="group" aria-label="Choose workplace photos">\r
              @for (card of careerLifeCards; track card.title; let index = $index) {\r
                <button type="button" [class.is-active]="activeCareerSlide() === index"\r
                  [attr.aria-label]="'Show photos starting with ' + card.title"\r
                  [attr.aria-pressed]="activeCareerSlide() === index"\r
                  aria-controls="career-life-gallery" (click)="activeCareerSlide.set(index)">\r
                  <span aria-hidden="true"></span>\r
                </button>\r
              }\r
            </div>\r
          </section>\r
        }\r
\r
        @if (slug() === 'careers-overview') {\r
          <section class="career-stories" aria-label="Illustrative employee testimonials">\r
            <div class="career-story-grid">\r
              @for (item of careerStoryCards(); track item.name) {\r
                <article class="career-story-card">\r
                  <span class="career-story-label">Illustrative story</span>\r
                  <div class="career-story-top">\r
                    <img [src]="item.image" [alt]="item.name" width="82" height="82" loading="lazy" decoding="async" />\r
                    <p>&ldquo;{{ item.text }}&rdquo;</p>\r
                  </div>\r
                  <h3>{{ item.name }}</h3>\r
                  <span class="career-story-role">{{ item.role }}</span>\r
                  <i class="material-symbols-outlined" aria-hidden="true">format_quote</i>\r
                </article>\r
              }\r
            </div>\r
          </section>\r
        }\r
\r
        @if (slug() === 'careers-overview') {\r
          <section class="career-next-step" aria-labelledby="career-next-step-title">\r
            <div class="career-switch-banner">\r
              <div class="career-switch-photo" aria-hidden="true">\r
                <img src="/assets/images/career-hero-team.png" alt="" loading="lazy" decoding="async" />\r
              </div>\r
              <div class="career-switch-copy">\r
                <h2 id="career-next-step-title">Switch Your Career</h2>\r
                <p>Explore exciting opportunities at XcellHost and become part of a team building a safer, smarter digital world.</p>\r
              </div>\r
              <div class="career-switch-actions">\r
                <div class="career-switch-features">\r
                  <span><i class="material-symbols-outlined" aria-hidden="true">menu_book</i>Continuous<br />Learning</span>\r
                  <span><i class="material-symbols-outlined" aria-hidden="true">groups</i>Work with<br />Experts</span>\r
                  <span><i class="material-symbols-outlined" aria-hidden="true">code</i>Real-World<br />Projects</span>\r
                </div>\r
                <a routerLink="/company/apply-for-job">Explore Career Opportunities <span aria-hidden="true">\u2192</span></a>\r
              </div>\r
            </div>\r
\r
            <div class="career-process-perks">\r
              <div class="career-process">\r
                <span class="career-block-label">Our hiring process</span>\r
                <h2>Simple &amp; Transparent</h2>\r
                <div class="career-process-list">\r
                  <article>\r
                    <i class="material-symbols-outlined" aria-hidden="true">description</i>\r
                    <h3><b>1</b> Application Review</h3>\r
                    <p>We review your application.</p>\r
                  </article>\r
                  <article>\r
                    <i class="material-symbols-outlined" aria-hidden="true">assignment_turned_in</i>\r
                    <h3><b>2</b> Assessment</h3>\r
                    <p>Technical and skill evaluation.</p>\r
                  </article>\r
                  <article>\r
                    <i class="material-symbols-outlined" aria-hidden="true">person</i>\r
                    <h3><b>3</b> Interview</h3>\r
                    <p>Discussion with our team.</p>\r
                  </article>\r
                  <article>\r
                    <i class="material-symbols-outlined" aria-hidden="true">redeem</i>\r
                    <h3><b>4</b> Offer &amp; Onboarding</h3>\r
                    <p>Welcome to XcellHost!</p>\r
                  </article>\r
                </div>\r
              </div>\r
\r
              <div class="career-perks">\r
                <span class="career-block-label">Perks &amp; benefits</span>\r
                <h2>We Take Care of Our People</h2>\r
                <div class="career-perks-grid">\r
                  <span><i class="material-symbols-outlined" aria-hidden="true">payments</i>Competitive Salary</span>\r
                  <span><i class="material-symbols-outlined" aria-hidden="true">menu_book</i>Learning &amp; Development</span>\r
                  <span><i class="material-symbols-outlined" aria-hidden="true">workspaces</i>Flexible Environment</span>\r
                  <span><i class="material-symbols-outlined" aria-hidden="true">workspace_premium</i>Recognition &amp; Rewards</span>\r
                  <span><i class="material-symbols-outlined" aria-hidden="true">rocket_launch</i>Career Growth Opportunities</span>\r
                  <span><i class="material-symbols-outlined" aria-hidden="true">celebration</i>Team Outings &amp; Events</span>\r
                </div>\r
              </div>\r
            </div>\r
          </section>\r
        }\r
\r
        @if (slug() === 'careers-overview') {\r
          <section class="career-values" aria-labelledby="career-values-title">\r
            <header>\r
              <h2 id="career-values-title">Our Culture and Values: <span>The Heart &amp; Soul of XcellHost</span></h2>\r
              <p>At XcellHost, our strength comes from our people. We care for one another, support personal growth and work together toward meaningful goals. Here, you belong.</p>\r
            </header>\r
            <div class="career-values-grid">\r
              @for (value of careerValues; track value.title) {\r
                <article class="career-values-card">\r
                  <span class="material-symbols-outlined" aria-hidden="true">{{ value.icon }}</span>\r
                  <h3>{{ value.title }} <span>({{ value.subtitle }})</span></h3>\r
                  <p>{{ value.body }}</p>\r
                </article>\r
              }\r
            </div>\r
            <p class="career-values-note">These values guide how we work, make decisions and support one another. They shape the everyday moments that bring us together at XcellHost.</p>\r
          </section>\r
        }\r
\r
        @if (slug() === 'vendor-partners') {\r
          <section class="vendor-partners" id="vendor-directory" aria-labelledby="vendorPartnersTitle">\r
            <header class="vendor-partners-heading">\r
              <span>Technology ecosystem</span>\r
              <h2 id="vendorPartnersTitle">Our strategic vendor partners</h2>\r
              <p>{{ page.intro }}</p>\r
            </header>\r
\r
            <div class="vendor-directory-toolbar">\r
              <div><strong>Find your technology partner</strong><span>Browse by vendor name or technology category</span></div>\r
              <label class="vendor-search"><span class="material-symbols-outlined" aria-hidden="true">search</span><input type="search" aria-label="Search vendor partners" placeholder="Search partners or categories\u2026" [value]="vendorQuery()" (input)="vendorQuery.set($any($event.target).value)" /></label>\r
            </div>\r
\r
            <div class="vendor-category-list">\r
              @for (category of filteredPartnerCategories(); track category.title) {\r
                <section class="vendor-category" [class.vendor-category-badges]="category.badges" [attr.aria-labelledby]="'vendor-category-' + $index">\r
                  <header>\r
                    <div>\r
                      <h3 [id]="'vendor-category-' + $index">{{ category.title }}</h3>\r
                      <p>{{ category.description }}</p>\r
                    </div>\r
                  </header>\r
                  <div class="vendor-logo-grid">\r
                    @for (partner of category.partners; track partner[0]) {\r
                      <article class="vendor-logo-card">\r
                        <div class="vendor-logo-image">\r
                          <img\r
                            [src]="'/assets/images/vendor-partners/' + partner[1]"\r
                            [alt]="partner[0] + ' logo'"\r
                            loading="lazy"\r
                          />\r
                        </div>\r
                        <h4>{{ partner[0] }}</h4>\r
                      </article>\r
                    }\r
                  </div>\r
                </section>\r
              } @empty {\r
                <div class="vendor-empty" role="status"><h3>No matching partners</h3><p>Try another vendor name or technology category.</p><button type="button" (click)="vendorQuery.set('')">Clear search</button></div>\r
              }\r
            </div>\r
          </section>\r
        } @else if (slug() === 'certifications-awards') {\r
          <section class="recognition-section certifications-section" aria-labelledby="certifications-title">\r
            <header class="recognition-heading certification-heading">\r
              <span>Certification architecture</span>\r
              <h2 id="certifications-title">Standards behind trusted operations</h2>\r
              <p>Select a credential to review its scope, details and official certificate.</p>\r
            </header>\r
\r
            <div class="certification-tabs-layout">\r
              <div class="certification-tabs" role="tablist" aria-label="Certification categories">\r
                @for (certification of certifications; track certification.title) {\r
                  <button\r
                    type="button"\r
                    role="tab"\r
                    [class.is-active]="activeCertification() === $index"\r
                    [attr.aria-selected]="activeCertification() === $index"\r
                    [attr.aria-controls]="'certification-panel-' + $index"\r
                    (click)="activeCertification.set($index)"\r
                  >\r
                    <span>{{ ($index + 1).toString().padStart(2, '0') }}</span>\r
                    <span class="certification-tab-label">{{ certification.title }}<small>{{ certification.status }}</small></span>\r
                  </button>\r
                }\r
              </div>\r
\r
              @for (certification of certifications; track certification.title) {\r
                @if (activeCertification() === $index) {\r
                  <article\r
                    class="certificate-card certification-tab-panel"\r
                    role="tabpanel"\r
                    [id]="'certification-panel-' + $index"\r
                  >\r
                    @if (certification.image) {\r
                    <a [href]="certification.image" target="_blank" rel="noopener noreferrer">\r
                      <div class="certificate-image-wrap">\r
                        <img [src]="certification.image" [alt]="certification.alt" loading="eager" />\r
                      </div>\r
                    </a>\r
                    } @else {\r
                      <div class="certificate-text-preview">\r
                        <strong>{{ certification.title }}</strong>\r
                        <span>{{ certification.type }}</span>\r
                      </div>\r
                    }\r
                    <div class="recognition-card-copy">\r
                      <span>Credential details</span>\r
                      <h3>{{ certification.title }}</h3>\r
                      <p>{{ certification.type }}</p>\r
                      @if (certification.image) {\r
                        <a [href]="certification.image" target="_blank" rel="noopener noreferrer">View certificate &rarr;</a>\r
                      } @else {\r
                        <p>Certificate document not yet available on this page.</p>\r
                      }\r
                    </div>\r
                  </article>\r
                }\r
              }\r
            </div>\r
          </section>\r
        } @else if (slug() === 'awards') {\r
          <section class="recognition-section awards-section" aria-labelledby="awards-title">\r
            <header class="recognition-heading">\r
              <span>Recognition through the years</span>\r
              <h2 id="awards-title">Our Awards</h2>\r
              <p>Milestones, memberships and partner recognition earned across XcellHost's cloud and technology journey.</p>\r
            </header>\r
\r
            <div class="award-tabs-layout">\r
              <div class="award-tabs" role="tablist" aria-label="Awards by year">\r
                @for (year of awardYears; track year) {\r
                  <button\r
                    type="button"\r
                    role="tab"\r
                    [class.is-active]="activeAwardYear() === year"\r
                    [attr.aria-selected]="activeAwardYear() === year"\r
                    [attr.aria-controls]="'awards-panel-' + year"\r
                    (click)="activeAwardYear.set(year)"\r
                  >{{ year }}</button>\r
                }\r
              </div>\r
\r
              <section\r
                class="award-year-panel"\r
                [id]="'awards-panel-' + activeAwardYear()"\r
                role="tabpanel"\r
                [attr.aria-label]="activeAwardYear() + ' awards'"\r
              >\r
                <div class="award-year-heading">\r
                  <span>Awards &amp; recognition</span>\r
                  <h3>{{ activeAwardYear() }}</h3>\r
                </div>\r
                <div class="award-grid">\r
                  @for (award of visibleAwards(); track award.title) {\r
                    <article class="award-card">\r
                      <a class="award-image-wrap" [href]="award.image" target="_blank" rel="noopener noreferrer" [attr.aria-label]="'View ' + award.title + ' (opens in a new tab)'">\r
                        <img [src]="award.image" [alt]="award.title + ' recognition'" loading="lazy" />\r
                      </a>\r
                      <h3>{{ award.title }}</h3>\r
                    </article>\r
                  } @empty {\r
                    <p>Award updates for {{ activeAwardYear() }} will be added here.</p>\r
                  }\r
                </div>\r
              </section>\r
            </div>\r
          </section>\r
        } @else if (slug() !== 'certifications-awards' && slug() !== 'careers-overview') {\r
          <div class="company-card-grid">\r
            @for (card of page.cards; track card.title) {\r
              <article class="company-card">\r
                <span class="company-icon" aria-hidden="true">{{ card.icon }}</span>\r
                <h2>{{ card.title }}</h2>\r
                <p>{{ card.body }}</p>\r
              </article>\r
            }\r
          </div>\r
\r
          @for (section of page.sections; track section.title; let index = $index) {\r
            <section class="company-section" [class.company-section-tint]="index % 2 === 1">\r
              <div>\r
                <span class="company-section-number">0{{ index + 1 }}</span>\r
                <h2>{{ section.title }}</h2>\r
              </div>\r
              <div>\r
                <p>{{ section.body }}</p>\r
                @if (section.points?.length) {\r
                  <ul>\r
                    @for (point of section.points; track point) {\r
                      <li>{{ point }}</li>\r
                    }\r
                  </ul>\r
                }\r
              </div>\r
            </section>\r
          }\r
        }\r
\r
        @if (slug() === 'certifications-awards') {\r
        <section class="pp-cta certification-buddha-strip" aria-labelledby="certification-cta-title">\r
          <div>\r
            <h2 id="certification-cta-title">Ready to start with XcellHost?</h2>\r
            <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>\r
            <div class="certification-buddha-actions">\r
              <a class="btn btn-primary" routerLink="/contact">Request documents &rarr;</a>\r
              <a class="btn btn-ghost" routerLink="/contact">Contact team</a>\r
              <a class="btn btn-ghost" href="https://wa.me/918657032540" target="_blank" rel="noopener">Talk on WhatsApp</a>\r
              <a class="btn btn-ghost" href="mailto:sales@xcellhost.com?subject=Certification%20documents%20enquiry">Email Us</a>\r
            </div>\r
          </div>\r
          <a class="pp-cta-buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support">\r
            <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" width="104" height="104" loading="lazy" />\r
          </a>\r
        </section>\r
        } @else if (slug() === 'careers-overview') {\r
        <section class="pp-cta certification-buddha-strip" aria-labelledby="career-cta-title">\r
          <div>\r
            <h2 id="career-cta-title">Build your future with XcellHost</h2>\r
            <p>Bring your skills, curiosity and ideas. Let\u2019s find your next opportunity together.</p>\r
            <div class="certification-buddha-actions">\r
              <a class="btn btn-primary" routerLink="/company/apply-for-job">Apply for a role &rarr;</a>\r
              <a class="btn btn-ghost" routerLink="/contact">Contact the careers team</a>\r
            </div>\r
          </div>\r
          <a class="pp-cta-buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support">\r
            <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" width="104" height="104" loading="lazy" />\r
          </a>\r
        </section>\r
        } @else if (slug() !== 'vendor-partners') {\r
        <section class="company-cta">\r
          <div>\r
            <span>Let\u2019s move forward</span>\r
            <h2>{{ page.cta }}</h2>\r
          </div>\r
          <a class="btn btn-primary" routerLink="/contact">{{ page.ctaLabel }} <span aria-hidden="true">\u2192</span></a>\r
        </section>\r
        }\r
      </div>\r
      }\r
    </section>\r
  </main>\r
  }\r
}\r
\r
\r
`, styles: ['/* src/app/pages/company.page.css */\n:host {\n  display: contents;\n}\n.career-hero {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      110deg,\n      #031b3d,\n      #082c5c 58%,\n      #06336c);\n  color: #fff;\n}\n.career-hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  background:\n    radial-gradient(\n      circle at 67% 20%,\n      #1785dc26,\n      transparent 34%);\n}\n.career-hero::after {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  right: -210px;\n  bottom: -240px;\n  width: 400px;\n  height: 540px;\n  border: 1px solid #38baff55;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      145deg,\n      #1684e8b3,\n      #062454e6);\n  transform: rotate(30deg);\n}\n.career-hero-orb {\n  position: absolute;\n  z-index: -1;\n  top: -170px;\n  left: 42%;\n  width: 300px;\n  height: 270px;\n  border: 1px solid #36c7ff55;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 90% 80%,\n      #04aef04d,\n      #165cb526 60%);\n  box-shadow: inset -8px -5px 24px #0aaaf01f;\n}\n.career-hero-inner {\n  display: grid;\n  grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr);\n  align-items: center;\n  gap: clamp(30px, 4vw, 64px);\n  min-height: clamp(440px, 29vw, 540px);\n  padding-block: 38px;\n}\n.career-hero-copy {\n  position: relative;\n  z-index: 1;\n  min-width: 0;\n}\n.career-hero-visual {\n  align-self: stretch;\n  min-width: 0;\n  overflow: hidden;\n  border-radius: 24px;\n  box-shadow: 0 24px 55px #00142d73;\n}\n.career-hero-photo {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 80% center;\n}\n.career-hero-eyebrow {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin: 0 0 14px;\n  color: #87bff4;\n  font-size: clamp(11px, .9vw, 15px);\n  font-weight: 700;\n  letter-spacing: .32em;\n  text-transform: uppercase;\n}\n.career-hero-eyebrow > span {\n  width: 38px;\n  height: 2px;\n  background:\n    linear-gradient(\n      90deg,\n      #23b9f3,\n      transparent);\n}\n.career-hero h1 {\n  margin: 0;\n  color: #fff;\n  font: 800 clamp(36px, 3.4vw, 64px)/1.06 var(--disp);\n  letter-spacing: -.035em;\n}\n.career-hero h1 > span {\n  color: #2bc4ff;\n  background:\n    linear-gradient(\n      110deg,\n      #64dcff,\n      #009cf4);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n}\n.career-hero-tagline {\n  max-width: 580px;\n  margin: 14px 0 0;\n  color: #c8d9ed;\n  font-size: clamp(15px, 1.15vw, 21px);\n  line-height: 1.45;\n}\n.apply-job-hero {\n  min-height: 540px;\n  background:\n    linear-gradient(\n      110deg,\n      #031b3d,\n      #082c5c 58%,\n      #06336c);\n}\n.apply-job-hero .career-hero-inner {\n  grid-template-columns: minmax(0, .95fr) minmax(440px, 1.05fr);\n  min-height: 540px;\n  padding-block: 48px;\n}\n.apply-job-hero .career-hero-copy {\n  width: 100%;\n}\n.apply-job-hero h1 {\n  font-size: clamp(34px, 2.8vw, 50px);\n  line-height: 1.08;\n}\n.apply-job-hero .career-hero-tagline {\n  max-width: 560px;\n  font-size: clamp(14px, 1vw, 17px);\n  line-height: 1.55;\n}\n.apply-job-hero-visual {\n  width: 100%;\n  height: auto;\n  aspect-ratio: 1009 / 725;\n  align-self: center;\n  border: 1px solid rgba(120, 190, 255, .2);\n  border-radius: 24px;\n  background: #0754ad;\n  box-shadow: 0 28px 65px rgba(0, 15, 42, .48);\n}\n.apply-job-hero-visual .career-hero-photo {\n  object-fit: cover;\n  object-position: right center;\n}\n.apply-job-hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 28px;\n}\n.apply-job-hero-actions a {\n  display: inline-flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 800;\n  text-decoration: none;\n  transition:\n    transform .2s ease,\n    background .2s ease,\n    border-color .2s ease;\n}\n.apply-job-hero-actions a:hover {\n  transform: translateY(-2px);\n}\n.apply-job-primary {\n  background: #ff8c1a;\n  box-shadow: 0 14px 28px -14px rgba(255, 140, 26, .85);\n}\n.apply-job-primary:hover {\n  background: #ed7b0b;\n}\n.apply-job-secondary {\n  border-color: rgba(255, 255, 255, .32) !important;\n  background: rgba(255, 255, 255, .07);\n}\n.apply-job-secondary:hover {\n  border-color: rgba(255, 255, 255, .55) !important;\n  background: rgba(255, 255, 255, .12);\n}\n.career-hero-benefits {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  max-width: 570px;\n  margin: 24px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.career-hero-benefits li {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  text-align: center;\n  font-size: clamp(12px, .85vw, 15px);\n  font-weight: 600;\n  line-height: 1.25;\n}\n.career-hero-benefits .material-symbols-outlined {\n  display: grid;\n  place-items: center;\n  width: clamp(50px, 3.5vw, 66px);\n  height: clamp(50px, 3.5vw, 66px);\n  border: 1px solid #58beed80;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #1d75bc33,\n      #07285880);\n  box-shadow: inset 3px 0 14px #4bc7ff12;\n  color: #35c4ff;\n  font-size: clamp(26px, 2vw, 36px);\n  font-variation-settings: "FILL" 1;\n}\n@media (max-width: 1100px) {\n  .career-hero-inner {\n    grid-template-columns: minmax(0, 1fr) minmax(0, .95fr);\n    gap: 28px;\n  }\n  .career-hero::after {\n    right: -300px;\n  }\n}\n@media (max-width: 760px) {\n  .career-hero-inner {\n    grid-template-columns: 1fr;\n    gap: 30px;\n    min-height: 0;\n    padding-block: 40px;\n  }\n  .apply-job-hero .career-hero-inner {\n    grid-template-columns: 1fr;\n  }\n  .apply-job-hero {\n    min-height: 0;\n  }\n  .apply-job-hero .career-hero-inner {\n    min-height: 0;\n    padding-block: 42px;\n  }\n  .apply-job-hero-visual {\n    height: auto;\n    aspect-ratio: 1009 / 725;\n  }\n  .career-hero-copy {\n    width: 100%;\n    max-width: 560px;\n  }\n  .career-hero-visual {\n    width: 100%;\n    height: min(68vw, 340px);\n    border-radius: 18px;\n  }\n  .career-hero-photo {\n    object-position: 80% center;\n  }\n  .career-hero::before {\n    background:\n      radial-gradient(\n        circle at 85% 18%,\n        #1785dc2e,\n        transparent 40%);\n  }\n  .career-hero h1 {\n    font-size: clamp(36px, 7.7vw, 58px);\n  }\n  .apply-job-hero h1 {\n    font-size: clamp(31px, 8vw, 40px);\n  }\n  .career-hero-tagline {\n    max-width: 440px;\n  }\n  .apply-job-hero .career-hero-tagline {\n    font-size: 14px;\n  }\n  .career-hero-benefits {\n    max-width: 440px;\n    margin-top: 28px;\n    gap: 8px;\n  }\n  .career-hero-orb {\n    left: auto;\n    right: -90px;\n  }\n  .career-hero::after {\n    display: none;\n  }\n}\n.career-impact-strip {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0;\n  border-bottom: 1px solid #e1e6ee;\n  background: #fff;\n}\n.career-impact-inner {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  width: min(100%, 1440px);\n  min-height: 100px;\n  box-sizing: border-box;\n  margin-inline: auto;\n  padding: 20px 24px;\n  border: 0;\n  border-radius: 0;\n  background: #fff;\n  box-shadow: none;\n}\n.career-impact-item {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  color: #061b3c;\n  transition: transform .25s ease;\n}\n.career-impact-item:hover {\n  transform: translateY(-3px);\n}\n.career-impact-item > div {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n}\n.career-impact-item > .material-symbols-outlined {\n  color: #2878ff;\n  font-size: 48px;\n  font-variation-settings: "wght" 350;\n  filter: drop-shadow(0 6px 12px rgba(40, 120, 255, .14));\n}\n.career-impact-item strong {\n  display: block;\n  color: #2878ff;\n  font: 700 clamp(32px, 2.6vw, 43px)/1 var(--disp);\n  letter-spacing: -.025em;\n}\n.career-impact-item span:not(.material-symbols-outlined) {\n  display: block;\n  margin-top: 5px;\n  color: #050d1c;\n  font-size: clamp(11px, .9vw, 14px);\n  font-weight: 500;\n  line-height: 1.25;\n  white-space: nowrap;\n}\n@media (max-width: 900px) {\n  .career-impact-inner {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 24px 16px;\n  }\n}\n@media (max-width: 540px) {\n  .career-impact-inner {\n    grid-template-columns: 1fr;\n    padding: 24px 20px;\n  }\n  .career-impact-item {\n    justify-content: flex-start;\n  }\n  .career-impact-item:first-child {\n    padding-left: 61px;\n  }\n}\n.career-why {\n  padding: 52px 24px 58px;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f8faff 100%);\n}\n.career-why-inner {\n  display: grid;\n  grid-template-columns: 250px minmax(0, 1fr);\n  gap: clamp(40px, 4vw, 58px);\n  width: min(100%, 1280px);\n  margin-inline: auto;\n}\n.career-why-intro {\n  align-self: center;\n}\n.career-why-intro > span {\n  display: block;\n  margin-bottom: 16px;\n  color: #2878ff;\n  font: 700 11px/1.2 var(--mono);\n  letter-spacing: .22em;\n  text-transform: uppercase;\n}\n.career-why-intro h2 {\n  margin: 0;\n  color: #050d1c;\n  font: 700 clamp(30px, 2.7vw, 42px)/1.22 var(--disp);\n  letter-spacing: -.025em;\n}\n.career-why-intro h2 em {\n  color: #3777f4;\n  font-style: normal;\n}\n.career-why-intro p {\n  max-width: 310px;\n  margin: 18px 0 26px;\n  color: #5d6d83;\n  font-size: 15px;\n  line-height: 1.6;\n}\n.career-why-intro a {\n  display: inline-flex;\n  min-height: 43px;\n  align-items: center;\n  padding: 0 24px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      100deg,\n      #2878ff,\n      #ef49ee);\n  box-shadow: 0 7px 14px rgba(76, 93, 229, .22);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: transform .25s ease, box-shadow .25s ease;\n}\n.career-why-intro a:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 20px rgba(76, 93, 229, .3);\n}\n.career-why-cards {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 15px;\n}\n.career-why-card {\n  min-height: 270px;\n  padding: 32px 17px 24px;\n  border: 1px solid #dfe4f0;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      145deg,\n      #fbfcff,\n      #f4f3fb);\n  box-shadow: 0 2px 3px rgba(8, 24, 56, .07);\n  text-align: center;\n  transition:\n    transform .25s ease,\n    border-color .25s ease,\n    background .25s ease;\n}\n.career-why-card:hover {\n  transform: translateY(-5px);\n  border-color: #aebfff;\n  background:\n    linear-gradient(\n      145deg,\n      #f7faff,\n      #eeebff);\n}\n.career-why-card i {\n  display: grid;\n  width: 44px;\n  height: 44px;\n  margin: 0 auto 20px;\n  place-items: center;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      135deg,\n      #dce8ff,\n      #e9ddff);\n  color: #376ff0;\n  font-size: 22px;\n  font-style: normal;\n  font-variation-settings: "FILL" 1;\n}\n.career-why-card h3 {\n  margin: 0;\n  color: #050d1c;\n  font: 700 16px/1.35 var(--disp);\n}\n.career-why-card p {\n  margin: 12px 0 0;\n  color: #607086;\n  font-size: 14px;\n  line-height: 1.5;\n}\n@media (max-width: 1150px) {\n  .career-why-inner {\n    grid-template-columns: 1fr;\n  }\n  .career-why-intro {\n    max-width: 650px;\n  }\n  .career-why-intro p {\n    max-width: 560px;\n  }\n  .career-why-cards {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 720px) {\n  .career-why {\n    padding: 42px 20px;\n  }\n  .career-why-cards {\n    grid-template-columns: 1fr;\n  }\n  .career-why-card {\n    min-height: 0;\n    padding: 26px 22px;\n  }\n}\n.career-next-step {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 34px clamp(24px, 4vw, 64px) 54px;\n  background: #fff;\n}\n.career-switch-banner {\n  display: grid;\n  grid-template-columns: 285px minmax(250px, .8fr) minmax(420px, 1.2fr);\n  min-height: 194px;\n  max-width: 1280px;\n  margin: 0 auto;\n  overflow: hidden;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      105deg,\n      #1268ed,\n      #487cf3 53%,\n      #20b8e5);\n  color: #fff;\n}\n.career-switch-photo {\n  min-width: 0;\n  overflow: hidden;\n}\n.career-switch-photo img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  object-position: 70% center;\n}\n.career-switch-copy {\n  align-self: center;\n  padding: 24px 30px;\n}\n.career-switch-copy h2 {\n  margin: 0 0 16px;\n  color: #fff;\n  font: 700 clamp(27px, 2.5vw, 36px)/1.15 var(--disp);\n}\n.career-switch-copy p {\n  max-width: 360px;\n  margin: 0;\n  color: #f3f8ff;\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 1.5;\n}\n.career-switch-actions {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 22px;\n  padding: 24px 34px;\n}\n.career-switch-features {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n  text-align: center;\n}\n.career-switch-features span {\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.15;\n}\n.career-switch-features i {\n  display: block;\n  margin-bottom: 6px;\n  font-size: 34px;\n}\n.career-switch-actions > a {\n  display: flex;\n  min-height: 44px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  border-radius: 999px;\n  background: #fff;\n  color: #1769e8;\n  font-size: 13px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: transform .25s ease;\n}\n.career-switch-actions > a:hover {\n  transform: translateY(-2px);\n}\n.career-switch-actions > a span {\n  display: grid;\n  width: 22px;\n  height: 22px;\n  place-items: center;\n  border: 1px solid #73a8f8;\n  border-radius: 50%;\n}\n.career-process-perks {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: clamp(45px, 7vw, 100px);\n  max-width: 1280px;\n  margin: 70px auto 0;\n}\n.career-block-label {\n  display: block;\n  margin-bottom: 14px;\n  color: #2878ff;\n  font: 700 11px/1.2 var(--mono);\n  letter-spacing: .22em;\n  text-transform: uppercase;\n}\n.career-process h2,\n.career-perks h2 {\n  margin: 0 0 30px;\n  color: #050d1c;\n  font: 700 clamp(27px, 2.5vw, 34px)/1.2 var(--disp);\n}\n.career-process-list {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 24px;\n}\n.career-process-list article {\n  position: relative;\n  min-width: 0;\n}\n.career-process-list article:not(:last-child)::after {\n  content: "\\2192";\n  position: absolute;\n  top: 24px;\n  right: -18px;\n  color: #9dbcf0;\n  font-size: 25px;\n}\n.career-process-list i {\n  display: grid;\n  width: 70px;\n  height: 70px;\n  margin-bottom: 14px;\n  place-items: center;\n  border-radius: 50%;\n  background: #e7efff;\n  color: #2878ff;\n  font-size: 27px;\n  font-variation-settings: "FILL" 1;\n}\n.career-process-list h3 {\n  margin: 0;\n  color: #07162e;\n  font: 700 14px/1.35 var(--body);\n}\n.career-process-list h3 b {\n  color: #2878ff;\n}\n.career-process-list p {\n  margin: 6px 0 0;\n  color: #65738a;\n  font-size: 11px;\n  line-height: 1.45;\n}\n.career-perks-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 12px;\n}\n.career-perks-grid > span {\n  display: flex;\n  min-height: 64px;\n  box-sizing: border-box;\n  align-items: center;\n  gap: 12px;\n  padding: 10px 14px;\n  border: 1px solid #dce3ee;\n  border-radius: 12px;\n  background: #f9fbff;\n  color: #17243b;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 1.25;\n}\n.career-perks-grid i {\n  display: grid;\n  flex: 0 0 40px;\n  width: 40px;\n  height: 40px;\n  place-items: center;\n  border-radius: 11px;\n  background:\n    linear-gradient(\n      135deg,\n      #2878ff,\n      #20b8e5);\n  color: #fff;\n  font-size: 21px;\n  font-variation-settings: "FILL" 1;\n}\n@media (max-width: 1050px) {\n  .career-switch-banner {\n    grid-template-columns: 220px 1fr;\n  }\n  .career-switch-actions {\n    grid-column: 1 / -1;\n  }\n  .career-process-perks {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 680px) {\n  .career-next-step {\n    padding: 28px 18px 42px;\n  }\n  .career-switch-banner {\n    grid-template-columns: 1fr;\n  }\n  .career-switch-photo {\n    height: 190px;\n  }\n  .career-switch-copy,\n  .career-switch-actions {\n    padding: 22px;\n  }\n  .career-switch-features {\n    gap: 8px;\n  }\n  .career-process-list {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 26px 18px;\n  }\n  .career-process-list article::after {\n    display: none;\n  }\n  .career-perks-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.career-values {\n  margin: 0 0 48px;\n  padding: 12px 0 24px;\n}\n.career-values header {\n  text-align: center;\n  margin: 0 auto 38px;\n}\n.career-values h2 {\n  margin: 0 0 20px;\n  color: #10264b;\n  font: 700 clamp(24px, 2.6vw, 34px)/1.35 var(--disp);\n}\n.career-values h2 > span {\n  color: #1769ff;\n}\n.career-values header p {\n  max-width: 1050px;\n  margin: 0 auto;\n  color: #576d8d;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.career-values-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n}\n.career-values-card {\n  padding: 24px 20px;\n  border: 1px solid #dce5f2;\n  border-radius: 18px;\n  background: #fff;\n}\n.career-values-card:hover {\n  border-color: #1769ff;\n  box-shadow: 0 12px 28px #1769ff12;\n}\n.career-values-card > span {\n  display: grid;\n  place-items: center;\n  width: 56px;\n  height: 56px;\n  margin-bottom: 20px;\n  border-radius: 50%;\n  background: #eaf2ff;\n  color: #1769ff;\n  font-size: 28px;\n}\n.career-values-card h3 {\n  margin: 0 0 14px;\n  color: #10264b;\n  font: 600 17px/1.5 var(--body);\n}\n.career-values-card h3 span {\n  color: #7a8598;\n  font-weight: 500;\n}\n.career-values-card p {\n  margin: 0;\n  color: #576d8d;\n  font-size: 14px;\n  line-height: 1.7;\n}\n.career-values-note {\n  margin: 36px auto 0;\n  max-width: 1050px;\n  text-align: center;\n  color: #1769ff;\n  font-size: 17px;\n  font-style: italic;\n  line-height: 1.7;\n}\n@media (max-width: 1000px) {\n  .career-values-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .career-values-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.career-stories {\n  margin: 0 0 48px;\n  padding: 36px clamp(24px, 5vw, 72px);\n  background:\n    linear-gradient(\n      110deg,\n      #061b3c,\n      #123e78);\n}\n.career-story-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n  max-width: 1300px;\n  margin: 0 auto;\n}\n.career-story-card {\n  position: relative;\n  min-height: 240px;\n  box-sizing: border-box;\n  padding: 22px 24px 24px;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .24);\n  border-radius: 17px;\n  background:\n    linear-gradient(\n      145deg,\n      #2377ef,\n      #3d89f7);\n  color: #fff;\n}\n.career-story-top {\n  display: grid;\n  grid-template-columns: 86px minmax(0, 1fr);\n  gap: 18px;\n  align-items: start;\n}\n.career-story-top img {\n  width: 78px;\n  height: 78px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  background: #dceaff;\n  object-fit: cover;\n  object-position: center top;\n}\n.career-story-top p {\n  margin: 1px 0 0;\n  color: #fff;\n  font-size: 15px;\n  font-weight: 650;\n  line-height: 1.45;\n}\n.career-story-card h3 {\n  margin: 16px 0 3px;\n  color: #fff;\n  font: 700 18px/1.25 var(--disp);\n}\n.career-story-card > span {\n  color: #dceaff;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.career-story-card > i {\n  position: absolute;\n  right: 18px;\n  bottom: 14px;\n  color: #fff;\n  font-size: 40px;\n  font-style: normal;\n  font-variation-settings: "FILL" 1;\n}\n@media (max-width: 920px) {\n  .career-story-grid {\n    grid-template-columns: 1fr;\n    max-width: 620px;\n  }\n}\n@media (max-width: 520px) {\n  .career-stories {\n    padding: 28px 18px;\n  }\n  .career-story-card {\n    min-height: 0;\n  }\n  .career-story-top {\n    grid-template-columns: 64px minmax(0, 1fr);\n    gap: 14px;\n  }\n  .career-story-top img {\n    width: 60px;\n    height: 60px;\n  }\n  .career-story-top p {\n    font-size: 14px;\n  }\n}\n.career-life {\n  margin: 0 0 56px;\n  padding: 24px 0 8px;\n}\n.career-life header {\n  max-width: 700px;\n  margin: 0 auto 28px;\n  text-align: center;\n}\n.career-life h2 {\n  margin: 0 0 12px;\n  color: #0b234b;\n  font: 700 clamp(26px, 3vw, 36px)/1.25 var(--disp);\n}\n.career-life h2 em {\n  color: #2878ff;\n  font-style: normal;\n}\n.career-life header p {\n  margin: 0;\n  color: #65738a;\n  line-height: 1.7;\n}\n.career-life-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 16px;\n}\n.career-life-card {\n  min-width: 0;\n}\n.career-life-photo {\n  display: block;\n  width: 100%;\n  height: auto;\n  aspect-ratio: 4 / 3;\n  object-fit: contain;\n  background: #f6f8fb;\n  border-radius: 20px;\n  box-shadow: 0 10px 28px #102b570b;\n}\n.career-life-card > p {\n  margin: 16px 0 0;\n  color: #26354e;\n  font: 600 15px/1.6 var(--body);\n}\n.career-life-dots {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px;\n}\n.career-life-dots button {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 32px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n}\n.career-life-dots button span {\n  width: 8px;\n  height: 8px;\n  border-radius: 8px;\n  background: #bfd2ff;\n}\n.career-life-dots button.is-active span {\n  width: 24px;\n  background: #2878ff;\n}\n.career-life-dots button:focus-visible {\n  outline: 2px solid #1769ff;\n  outline-offset: 2px;\n  border-radius: 6px;\n}\n@media (max-width: 760px) {\n  .career-life-grid {\n    grid-template-columns: 1fr;\n  }\n  .career-life-card {\n    width: 100%;\n    max-width: 460px;\n    margin: 0 auto;\n  }\n  .career-life-card:not(:first-child) {\n    display: none;\n  }\n}\n.career-culture {\n  margin: 0 0 44px;\n  padding: 40px 36px;\n  border-radius: 24px;\n  background: #fff;\n  box-shadow: 0 14px 40px #0000000d;\n  text-align: center;\n}\n.career-culture h2 {\n  margin: 0 0 34px;\n  color: #252235;\n  font: 600 clamp(24px, 3vw, 30px)/1.3 var(--disp);\n}\n.career-culture h2 em {\n  color: #ff6000;\n  font-style: normal;\n}\n.career-culture-grid {\n  display: grid;\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n  gap: 24px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.career-culture-grid li {\n  display: flex;\n  justify-content: center;\n  filter: drop-shadow(0 10px 10px #17224926);\n}\n.career-certification {\n  width: 76px;\n  color: #fff;\n  text-align: left;\n  font-family: Arial, sans-serif;\n}\n.career-certification-brand {\n  position: relative;\n  padding: 5px 5px 4px;\n  background: #ff1233;\n  font-size: 20px;\n  line-height: .84;\n  font-weight: 700;\n  letter-spacing: -.6px;\n}\n.career-certification-brand > span {\n  font-size: 7px;\n  letter-spacing: 0;\n}\n.career-certification-details {\n  min-height: 54px;\n  padding: 5px 2px 12px;\n  box-sizing: border-box;\n  background: #03246d;\n  text-align: center;\n  clip-path: polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%);\n}\n.career-certification-details strong {\n  display: block;\n  font-size: 14px;\n  line-height: 1.15;\n}\n.career-certification-details small {\n  display: block;\n  margin: 4px 0 3px;\n  font-size: 5px;\n  white-space: nowrap;\n}\n.career-certification-details > span {\n  display: block;\n  font-size: 5px;\n}\n@media (max-width: 900px) {\n  .career-culture-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    row-gap: 28px;\n  }\n}\n@media (max-width: 480px) {\n  .career-culture {\n    padding: 28px 16px;\n  }\n  .career-culture-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.privacy-policy-page {\n  background: #f6f8fc;\n  color: #13233d;\n  font-family: var(--body);\n}\n.privacy-policy-hero {\n  position: relative;\n  overflow: hidden;\n  padding: 0;\n  background:\n    linear-gradient(\n      118deg,\n      #061631 0%,\n      #0a2d64 62%,\n      #0c4b9b 100%);\n  color: #fff;\n}\n.privacy-policy-hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 82% 15%,\n      #2b82ed3d,\n      transparent 29%),\n    linear-gradient(#ffffff08 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #ffffff08 1px,\n      transparent 1px);\n  background-size:\n    auto,\n    54px 54px,\n    54px 54px;\n  pointer-events: none;\n}\n.privacy-policy-hero-inner {\n  position: relative;\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 63px 28px 68px;\n}\n.privacy-policy-breadcrumb {\n  display: flex;\n  gap: 9px;\n  align-items: center;\n  margin-bottom: 26px;\n  color: #8facd2;\n  font-size: 11px;\n  font-weight: 650;\n}\n.privacy-policy-breadcrumb a {\n  color: #d9e9ff;\n  text-decoration: none;\n}\n.privacy-policy-breadcrumb a:hover {\n  text-decoration: underline;\n}\n.privacy-policy-kicker {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 15px;\n  color: #85bcff;\n  font: 750 10px/1.2 var(--mono);\n  letter-spacing: .17em;\n  text-transform: uppercase;\n}\n.privacy-policy-kicker i {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #ff821f;\n  box-shadow: 0 0 0 5px #ff821f22;\n}\n.privacy-policy-hero h1 {\n  margin: 0 0 17px;\n  color: #fff;\n  font: 800 clamp(39px, 4.7vw, 62px)/1.04 var(--disp);\n  letter-spacing: -.045em;\n}\n.privacy-policy-hero h1 em {\n  color: #5cadff;\n  font-style: normal;\n}\n.privacy-policy-hero-inner > p {\n  max-width: 750px;\n  margin: 0;\n  color: #c9daef;\n  font-size: 16px;\n  line-height: 1.7;\n}\n.privacy-policy-layout {\n  display: grid;\n  grid-template-columns: 245px minmax(0, 1fr);\n  align-items: start;\n  gap: 40px;\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 55px 28px 80px;\n}\n.privacy-policy-aside {\n  position: sticky;\n  top: 106px;\n  display: grid;\n  gap: 18px;\n}\n.privacy-policy-contents,\n.privacy-policy-help {\n  border: 1px solid #dbe5f1;\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 10px 28px #15345b0a;\n}\n.privacy-policy-contents {\n  padding: 19px 16px;\n}\n.privacy-policy-contents h2 {\n  margin: 0 6px 12px;\n  color: #0f274a;\n  font: 750 11px/1.2 var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.privacy-policy-contents a {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 6px;\n  border-radius: 6px;\n  color: #5e6f87;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1.25;\n  text-decoration: none;\n  transition:\n    background .2s,\n    color .2s,\n    transform .2s;\n}\n.privacy-policy-contents a b {\n  flex: 0 0 18px;\n  color: #a6b2c3;\n  font: 600 8px/1 var(--mono);\n}\n.privacy-policy-contents a:hover {\n  background: #edf5ff;\n  color: #1267df;\n  transform: translateX(2px);\n}\n.privacy-policy-help {\n  padding: 20px;\n  background:\n    linear-gradient(\n      145deg,\n      #09244f,\n      #0b55ab);\n  color: #fff;\n}\n.privacy-policy-help > span {\n  display: grid;\n  width: 39px;\n  height: 39px;\n  margin-bottom: 15px;\n  place-items: center;\n  border-radius: 10px;\n  background: #ffffff16;\n  color: #72bbff;\n  font-size: 22px;\n}\n.privacy-policy-help small {\n  display: block;\n  color: #7dbbff;\n  font: 700 9px/1.2 var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.privacy-policy-help h2 {\n  margin: 7px 0 8px;\n  color: #fff;\n  font: 700 16px/1.35 var(--disp);\n}\n.privacy-policy-help p {\n  margin: 0 0 14px;\n  color: #c5d8ed;\n  font-size: 11px;\n  line-height: 1.55;\n}\n.privacy-policy-help a {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 750;\n  text-decoration: none;\n}\n.privacy-policy-help a span {\n  color: #ff963d;\n  font-size: 17px;\n}\n.privacy-policy-document {\n  min-width: 0;\n  padding: 0 42px 42px;\n  border: 1px solid #dbe5f1;\n  border-radius: 17px;\n  background: #fff;\n  box-shadow: 0 16px 45px #15345b0b;\n  color: #53647b;\n  font-size: 14px;\n  line-height: 1.75;\n}\n.privacy-policy-document section {\n  padding: 42px 0 0;\n  scroll-margin-top: 110px;\n}\n.privacy-policy-document section + section {\n  margin-top: 38px;\n  border-top: 1px solid #e4eaf2;\n}\n.privacy-policy-section-label {\n  display: block;\n  margin-bottom: 8px;\n  color: #1670df;\n  font: 750 9px/1.2 var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.privacy-policy-document h1,\n.privacy-policy-document h2,\n.privacy-policy-document h3 {\n  margin: 0 0 13px;\n  color: #102745;\n  font-family: var(--disp);\n  font-weight: 700;\n  line-height: 1.3;\n}\n.privacy-policy-document h1,\n.privacy-policy-document h2 {\n  font-size: 24px;\n  letter-spacing: -.02em;\n}\n.privacy-policy-document h3 {\n  margin-top: 25px;\n  font-size: 16px;\n}\n.privacy-policy-document p {\n  margin: 0 0 16px;\n}\n.privacy-policy-document p:last-child {\n  margin-bottom: 0;\n}\n.privacy-policy-document ul {\n  display: grid;\n  gap: 9px;\n  margin: 0 0 18px;\n  padding: 0;\n  list-style: none;\n}\n.privacy-policy-document li {\n  position: relative;\n  margin: 0;\n  padding-left: 19px;\n}\n.privacy-policy-document li::before {\n  content: "";\n  position: absolute;\n  left: 1px;\n  top: .72em;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #ff7a1a;\n  box-shadow: 0 0 0 3px #ff7a1a18;\n}\n.privacy-policy-document strong {\n  color: #243955;\n}\n.privacy-policy-document a {\n  color: #075ec9;\n  font-weight: 650;\n  text-decoration: underline;\n  text-decoration-color: #075ec94d;\n  text-underline-offset: 2px;\n}\n.privacy-policy-document table {\n  width: 100%;\n  margin: 21px 0;\n  border-collapse: separate;\n  border-spacing: 0;\n  overflow: hidden;\n  border: 1px solid #d9e4f2;\n  border-radius: 11px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.privacy-policy-document th,\n.privacy-policy-document td {\n  padding: 12px 13px;\n  border-right: 1px solid #d9e4f2;\n  border-bottom: 1px solid #d9e4f2;\n  text-align: left;\n  vertical-align: top;\n}\n.privacy-policy-document th:last-child,\n.privacy-policy-document td:last-child {\n  border-right: 0;\n}\n.privacy-policy-document tr:last-child td {\n  border-bottom: 0;\n}\n.privacy-policy-document th {\n  background: #eaf3ff;\n  color: #0c2c5a;\n  font-weight: 750;\n}\n.privacy-policy-cta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 38px;\n  max-width: 1124px;\n  margin: 0 auto 78px;\n  padding: 38px 44px;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      110deg,\n      #09244d,\n      #0b55ac);\n  box-shadow: 0 20px 48px #0b347122;\n  color: #fff;\n}\n.privacy-policy-cta > div > span {\n  color: #79baff;\n  font: 750 9px/1.2 var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.privacy-policy-cta h2 {\n  margin: 7px 0;\n  color: #fff;\n  font: 750 clamp(23px, 2.8vw, 31px)/1.25 var(--disp);\n}\n.privacy-policy-cta p {\n  margin: 0;\n  color: #c7d9ee;\n  font-size: 12px;\n}\n.privacy-policy-cta > a {\n  display: inline-flex;\n  align-items: center;\n  gap: 14px;\n  flex: 0 0 auto;\n  padding: 13px 19px;\n  border-radius: 8px;\n  background: #ff7a1a;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 750;\n  text-decoration: none;\n}\n.privacy-policy-cta > a:hover {\n  background: #ff913f;\n}\n.privacy-policy-cta > a span {\n  font-size: 17px;\n}\n@media (max-width: 900px) {\n  .privacy-policy-layout {\n    grid-template-columns: 1fr;\n  }\n  .privacy-policy-aside {\n    position: static;\n    grid-template-columns: minmax(0, 1fr) 230px;\n  }\n  .privacy-policy-contents {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    column-gap: 8px;\n  }\n  .privacy-policy-contents h2 {\n    grid-column: 1/-1;\n  }\n  .privacy-policy-cta {\n    margin-left: 28px;\n    margin-right: 28px;\n  }\n}\n@media (max-width: 640px) {\n  .privacy-policy-hero-inner {\n    padding: 43px 20px 54px;\n  }\n  .privacy-policy-hero h1 {\n    font-size: 39px;\n  }\n  .privacy-policy-hero-inner > p {\n    font-size: 14px;\n  }\n  .privacy-policy-layout {\n    gap: 28px;\n    padding: 35px 16px 55px;\n  }\n  .privacy-policy-aside {\n    grid-template-columns: 1fr;\n  }\n  .privacy-policy-contents {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .privacy-policy-help {\n    display: none;\n  }\n  .privacy-policy-document {\n    padding: 0 20px 27px;\n    font-size: 13px;\n  }\n  .privacy-policy-document section {\n    padding-top: 28px;\n  }\n  .privacy-policy-document section + section {\n    margin-top: 27px;\n  }\n  .privacy-policy-document h1,\n  .privacy-policy-document h2 {\n    font-size: 20px;\n  }\n  .privacy-policy-document table {\n    display: block;\n    overflow-x: auto;\n    white-space: normal;\n  }\n  .privacy-policy-cta {\n    align-items: flex-start;\n    flex-direction: column;\n    margin: 0 16px 55px;\n    padding: 28px 22px;\n  }\n  .privacy-policy-cta > a {\n    width: 100%;\n    box-sizing: border-box;\n    justify-content: center;\n  }\n}\n@media (max-width: 400px) {\n  .privacy-policy-contents {\n    grid-template-columns: 1fr;\n  }\n}\n.company-hero {\n  min-height: 390px;\n  display: flex;\n  align-items: center;\n  background:\n    radial-gradient(\n      circle at 82% 12%,\n      rgba(46, 204, 113, .2),\n      transparent 26%),\n    radial-gradient(\n      circle at 68% 110%,\n      rgba(23, 105, 255, .32),\n      transparent 38%),\n    linear-gradient(\n      135deg,\n      #071a3b 0%,\n      #0d2f67 58%,\n      #104c91 100%);\n}\n.company-hero .wrap {\n  position: relative;\n  z-index: 2;\n}\n.company-kicker {\n  display: inline-flex;\n  margin: 23px 0 13px;\n  padding: 6px 11px;\n  border: 1px solid rgba(133, 185, 255, .34);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .07);\n  color: #7bc0ff;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.company-hero h1 {\n  max-width: 850px;\n  margin-bottom: 18px;\n}\n.company-hero .pp-tagline {\n  max-width: 720px;\n  color: #c9d9ee;\n}\n.awards-hero {\n  position: relative;\n  display: flex;\n  min-height: 560px;\n  align-items: center;\n  overflow: hidden;\n  color: #fff;\n  background:\n    radial-gradient(\n      circle at 77% 42%,\n      rgba(43, 125, 233, .35),\n      transparent 30%),\n    linear-gradient(\n      118deg,\n      #041a3c 0%,\n      #082d63 62%,\n      #064b8e 100%);\n}\n.awards-hero::before {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(rgba(104, 168, 247, .07) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(104, 168, 247, .07) 1px,\n      transparent 1px);\n  background-size: 54px 54px;\n  content: "";\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 38%,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 38%,\n      #000);\n}\n.awards-hero-glow {\n  position: absolute;\n  right: -110px;\n  bottom: -370px;\n  width: 850px;\n  height: 850px;\n  border: 1px solid rgba(100, 179, 255, .25);\n  border-radius: 50%;\n  box-shadow: 0 0 0 110px rgba(25, 105, 210, .05), 0 0 0 220px rgba(25, 105, 210, .03);\n}\n.awards-hero-dots {\n  position: absolute;\n  top: 8%;\n  right: 7%;\n  width: 54%;\n  height: 82%;\n  opacity: .32;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(141, 194, 255, .85) 1.6px,\n      transparent 2px);\n  background-size: 20px 20px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse,\n      #000 14%,\n      transparent 72%);\n  mask-image:\n    radial-gradient(\n      ellipse,\n      #000 14%,\n      transparent 72%);\n}\n.awards-hero-grid {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1.05fr .95fr;\n  gap: 64px;\n  align-items: center;\n  padding-block: 55px;\n}\n.awards-hero .pp-crumb {\n  margin-bottom: 31px;\n  color: #91bdf2;\n  font: 700 11px var(--mono);\n  letter-spacing: .14em;\n}\n.awards-hero-kicker {\n  display: block;\n  color: #66bdff;\n  font: 800 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.awards-hero h1 {\n  max-width: 690px;\n  margin: 12px 0 18px;\n  color: #fff;\n  font-size: clamp(42px, 4.2vw, 64px);\n  line-height: 1.02;\n  letter-spacing: -.045em;\n}\n.awards-hero h1 em {\n  color: #66c3ff;\n  font-style: normal;\n}\n.awards-hero-copy > p {\n  max-width: 650px;\n  margin: 0;\n  color: #cbdcf0;\n  font-size: 17px;\n  line-height: 1.65;\n}\n.awards-hero-points {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px 25px;\n  margin-top: 22px;\n}\n.awards-hero-points span {\n  color: #c5dcf7;\n  font-size: 12px;\n}\n.awards-hero-points b {\n  display: block;\n  margin-bottom: 3px;\n  color: #fff;\n  font: 800 18px var(--mono);\n}\n.awards-hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 11px;\n  margin-top: 27px;\n}\n.awards-hero-actions a {\n  display: inline-flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px;\n  border-radius: 9px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 800;\n  text-decoration: none;\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    border-color .2s;\n}\n.awards-hero-actions a:hover {\n  transform: translateY(-2px);\n}\n.awards-primary-action {\n  background: #ff7a10;\n  box-shadow: 0 13px 28px rgba(255, 122, 16, .25);\n}\n.awards-secondary-action {\n  border: 1px solid rgba(155, 199, 249, .48);\n  background: rgba(255, 255, 255, .05);\n}\n.awards-hero-visual {\n  position: relative;\n  display: grid;\n  min-height: 390px;\n  place-items: center;\n}\n.awards-visual-card {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  width: min(90%, 460px);\n  min-height: 345px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 48px 34px 25px;\n  border: 1px solid rgba(161, 204, 255, .46);\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(249, 252, 255, .98),\n      rgba(225, 239, 255, .96));\n  color: #0a2755;\n  text-align: center;\n  box-shadow: 0 30px 65px rgba(0, 0, 0, .3);\n}\n.awards-card-top {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  height: 42px;\n  align-items: center;\n  gap: 8px;\n  padding: 0 16px;\n  border-bottom: 1px solid #d6e4f5;\n  border-radius: 24px 24px 0 0;\n  background: #f6faff;\n}\n.awards-card-top span {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #ff685c;\n}\n.awards-card-top span:nth-child(2) {\n  background: #ffbd38;\n}\n.awards-card-top span:nth-child(3) {\n  background: #2dc96f;\n}\n.awards-card-top b {\n  margin-left: 7px;\n  color: #435c7b;\n  font: 800 11px var(--mono);\n}\n.awards-visual-card > img {\n  display: block;\n  width: 210px;\n  height: 210px;\n  object-fit: contain;\n  filter: drop-shadow(0 15px 18px rgba(23, 69, 133, .22));\n}\n.awards-visual-card > strong {\n  margin-top: -5px;\n  font-size: 21px;\n}\n.awards-visual-card > p {\n  margin: 6px 0 15px;\n  color: #5a6d88;\n}\n.awards-card-status {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 10px;\n}\n.awards-card-status span {\n  padding: 8px 11px;\n  border: 1px solid #d3e1f1;\n  border-radius: 999px;\n  background: #fff;\n  color: #38516f;\n  font-size: 11px;\n  font-weight: 700;\n}\n.awards-card-status i {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  margin-right: 5px;\n  border-radius: 50%;\n  background: #25c778;\n  box-shadow: 0 0 8px #25c778;\n}\n.awards-float {\n  position: absolute;\n  z-index: 4;\n  padding: 11px 15px;\n  border: 1px solid rgba(151, 201, 255, .38);\n  border-radius: 12px;\n  background: rgba(5, 31, 71, .94);\n  color: #eaf5ff;\n  font: 800 11px var(--mono);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, .25);\n}\n.awards-float-one {\n  top: 27px;\n  right: 0;\n}\n.awards-float-two {\n  bottom: 25px;\n  left: 0;\n}\n.awards-showcase {\n  position: relative;\n  width: min(100%, 550px);\n  height: 420px;\n}\n.awards-showcase::before {\n  position: absolute;\n  top: 46%;\n  left: 50%;\n  width: 390px;\n  height: 390px;\n  border: 1px dashed rgba(116, 184, 255, .45);\n  border-radius: 50%;\n  content: "";\n  transform: translate(-50%, -50%);\n  animation: awards-orbit 24s linear infinite;\n}\n.awards-showcase-label {\n  position: absolute;\n  z-index: 6;\n  top: 5px;\n  left: 50%;\n  padding: 9px 18px;\n  border: 1px solid rgba(150, 201, 255, .45);\n  border-radius: 999px;\n  background: rgba(5, 34, 77, .92);\n  font: 800 11px var(--mono);\n  letter-spacing: .05em;\n  white-space: nowrap;\n  transform: translateX(-50%);\n  box-shadow: 0 14px 30px rgba(0, 0, 0, .25);\n}\n.awards-main-frame,\n.awards-mini-frame {\n  position: absolute;\n  display: grid;\n  place-items: center;\n  overflow: hidden;\n  border: 1px solid rgba(180, 216, 255, .65);\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #e9f3ff);\n  box-shadow: 0 26px 55px rgba(0, 0, 0, .3);\n}\n.awards-main-frame {\n  z-index: 3;\n  top: 63px;\n  left: 50%;\n  width: 300px;\n  height: 300px;\n  padding: 24px;\n  border-radius: 50%;\n  transform: translateX(-50%);\n  animation: awards-float 5s ease-in-out infinite;\n}\n.awards-main-frame img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  border-radius: 50%;\n}\n.awards-mini-frame {\n  z-index: 4;\n  width: 145px;\n  height: 105px;\n  padding: 12px;\n  border-radius: 17px;\n}\n.awards-mini-frame img {\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.awards-mini-one {\n  top: 95px;\n  left: 0;\n  transform: rotate(-5deg);\n  animation: awards-mini-one 5.5s ease-in-out infinite;\n}\n.awards-mini-two {\n  right: 0;\n  bottom: 34px;\n  transform: rotate(5deg);\n  animation: awards-mini-two 6s ease-in-out infinite;\n}\n.awards-year-badge {\n  position: absolute;\n  z-index: 6;\n  bottom: 4px;\n  left: 13%;\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 10px 15px;\n  border: 1px solid rgba(150, 201, 255, .4);\n  border-radius: 13px;\n  background: rgba(5, 34, 77, .94);\n  color: #d9ebff;\n  font: 700 10px var(--mono);\n  box-shadow: 0 14px 28px rgba(0, 0, 0, .25);\n}\n.awards-year-badge b {\n  color: #ff9a3c;\n  font-size: 18px;\n}\n.awards-laurel {\n  position: absolute;\n  z-index: 1;\n  top: 145px;\n  color: rgba(103, 183, 255, .32);\n  font: 400 160px/1 Georgia, serif;\n}\n.awards-laurel-left {\n  left: 57px;\n  transform: rotate(-10deg);\n}\n.awards-laurel-right {\n  right: 57px;\n  transform: rotate(10deg);\n}\n@keyframes awards-float {\n  0%, 100% {\n    transform: translate(-50%, 4px);\n  }\n  50% {\n    transform: translate(-50%, -10px);\n  }\n}\n@keyframes awards-mini-one {\n  0%, 100% {\n    transform: translateY(3px) rotate(-5deg);\n  }\n  50% {\n    transform: translateY(-11px) rotate(-2deg);\n  }\n}\n@keyframes awards-mini-two {\n  0%, 100% {\n    transform: translateY(4px) rotate(5deg);\n  }\n  50% {\n    transform: translateY(-12px) rotate(2deg);\n  }\n}\n@keyframes awards-orbit {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@media (max-width: 900px) {\n  .awards-hero {\n    padding: 45px 0;\n  }\n  .awards-hero-grid {\n    grid-template-columns: 1fr;\n    gap: 18px;\n  }\n  .awards-hero-visual {\n    min-height: 390px;\n  }\n  .awards-hero-copy > p {\n    max-width: 720px;\n  }\n}\n@media (max-width: 600px) {\n  .awards-hero h1 {\n    font-size: 39px;\n  }\n  .awards-hero-points {\n    justify-content: space-between;\n  }\n  .awards-hero-actions a {\n    flex: 1 1 170px;\n  }\n  .awards-showcase {\n    height: 365px;\n  }\n  .awards-main-frame {\n    width: 245px;\n    height: 245px;\n  }\n  .awards-mini-frame {\n    width: 118px;\n    height: 88px;\n  }\n  .awards-mini-one {\n    left: -5px;\n  }\n  .awards-mini-two {\n    right: -5px;\n  }\n  .awards-showcase::before {\n    width: 310px;\n    height: 310px;\n  }\n  .awards-laurel {\n    display: none;\n  }\n}\n@media (max-width: 600px) {\n  .awards-float {\n    display: none;\n  }\n  .awards-visual-card {\n    width: 100%;\n  }\n}\n.cert-hero {\n  position: relative;\n  display: flex;\n  min-height: 560px;\n  align-items: center;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      circle at 76% 44%,\n      rgba(27, 111, 220, .36),\n      transparent 29%),\n    linear-gradient(\n      118deg,\n      #041a3c,\n      #082c61 62%,\n      #07356e);\n  color: #fff;\n}\n.cert-hero:before {\n  position: absolute;\n  inset: 0;\n  background:\n    repeating-linear-gradient(\n      116deg,\n      transparent 0 120px,\n      rgba(121, 177, 248, .1) 121px 123px,\n      transparent 124px 242px);\n  content: "";\n  animation: cert-grid-shift 18s linear infinite;\n}\n.cert-hero:after {\n  position: absolute;\n  right: -8%;\n  bottom: -45%;\n  width: 720px;\n  height: 720px;\n  border: 1px solid rgba(106, 173, 255, .18);\n  border-radius: 50%;\n  box-shadow: 0 0 0 120px rgba(41, 112, 211, .045), 0 0 0 240px rgba(41, 112, 211, .03);\n  content: "";\n}\n.cert-hero-net {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n}\n.cert-world {\n  position: absolute;\n  top: 14%;\n  right: 8%;\n  width: 55%;\n  height: 72%;\n  background-image:\n    radial-gradient(\n      circle,\n      rgba(134, 190, 255, .44) 1.7px,\n      transparent 2px);\n  background-size: 19px 19px;\n  opacity: .48;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse,\n      #000 15%,\n      transparent 70%);\n  mask-image:\n    radial-gradient(\n      ellipse,\n      #000 15%,\n      transparent 70%);\n  animation: cert-pulse 6s ease-in-out infinite;\n}\n.cert-hero-grid {\n  position: relative;\n  z-index: 2;\n  display: grid;\n  grid-template-columns: 1.08fr .92fr;\n  gap: 60px;\n  align-items: center;\n}\n.cert-hero-copy {\n  position: relative;\n  z-index: 3;\n}\n.cert-hero .pp-crumb {\n  color: #92bdf2;\n  font: 700 11px var(--mono);\n  letter-spacing: .14em;\n}\n.cert-kicker {\n  display: block;\n  margin-top: 34px;\n  color: #65b8ff;\n  font: 800 11px var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.cert-hero h1 {\n  max-width: 720px;\n  margin: 12px 0 17px;\n  font-size: clamp(40px, 4vw, 62px);\n  line-height: 1.04;\n  letter-spacing: -.045em;\n}\n.cert-hero h1 em {\n  color: #65b8ff;\n  font-style: normal;\n}\n.cert-hero-copy > p {\n  max-width: 670px;\n  color: #cadaee;\n  font-size: 17px;\n  line-height: 1.65;\n}\n.cert-hero-points {\n  display: flex;\n  gap: 22px;\n  margin-top: 19px;\n  color: #74c4ff;\n  font-weight: 800;\n}\n.cert-hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 25px;\n}\n.cert-hero-actions a {\n  display: inline-flex;\n  min-height: 45px;\n  align-items: center;\n  justify-content: center;\n  padding: 11px 17px;\n  border: 1px solid rgba(159, 200, 249, .6);\n  border-radius: 9px;\n  background: rgba(5, 31, 72, .58);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.cert-hero-actions a span {\n  margin-right: 7px;\n}\n.cert-hero-actions .primary {\n  background: #126bd7;\n}\n.cert-hero-actions .talk {\n  border-color: #ff8515;\n  background: #ff8515;\n}\n.cert-ask-ai {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 27px;\n}\n.cert-ai-label {\n  padding: 7px 14px;\n  border: 1px solid rgba(132, 188, 250, .36);\n  border-radius: 999px;\n  background: rgba(4, 27, 62, .62);\n  font: 700 11px var(--mono);\n}\n.cert-ask-ai > div {\n  display: flex;\n  gap: 8px;\n}\n.cert-ask-ai a {\n  display: grid;\n  width: 39px;\n  height: 39px;\n  place-items: center;\n  border: 1px solid rgba(140, 190, 248, .35);\n  border-radius: 12px;\n  background: rgba(4, 25, 58, .78);\n  transition: .2s;\n}\n.cert-ask-ai a:hover {\n  background: #13509c;\n  transform: translateY(-3px);\n}\n.cert-ask-ai img {\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n}\n.cert-hero-visual {\n  position: relative;\n  display: grid;\n  min-height: 390px;\n  place-items: center;\n}\n.cert-assurance-card {\n  position: relative;\n  z-index: 2;\n  display: flex;\n  width: min(90%, 460px);\n  min-height: 330px;\n  align-items: center;\n  flex-direction: column;\n  justify-content: center;\n  padding: 48px 34px 32px;\n  border: 1px solid rgba(161, 204, 255, .46);\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(249, 252, 255, .98),\n      rgba(225, 239, 255, .96));\n  color: #0a2755;\n  text-align: center;\n  box-shadow: 0 30px 65px rgba(0, 0, 0, .3);\n  animation: cert-float 5.5s ease-in-out infinite;\n}\n.cert-card-top {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  height: 42px;\n  align-items: center;\n  gap: 8px;\n  padding: 0 16px;\n  border-bottom: 1px solid #d6e4f5;\n  border-radius: 24px 24px 0 0;\n  background: #f6faff;\n}\n.cert-card-top span {\n  width: 9px;\n  height: 9px;\n  border-radius: 50%;\n  background: #ff685c;\n}\n.cert-card-top span:nth-child(2) {\n  background: #ffbd38;\n}\n.cert-card-top span:nth-child(3) {\n  background: #2dc96f;\n}\n.cert-card-top b {\n  margin-left: 7px;\n  color: #435c7b;\n  font: 800 11px var(--mono);\n}\n.cert-shield {\n  display: grid;\n  width: 112px;\n  height: 126px;\n  margin-bottom: 17px;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      #1974e4,\n      #573dea);\n  clip-path: polygon(50% 0, 92% 16%, 86% 72%, 50% 100%, 14% 72%, 8% 16%);\n  filter: drop-shadow(0 14px 18px rgba(39, 83, 176, .28));\n}\n.cert-shield span {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n  border: 3px solid #fff;\n  border-radius: 50%;\n  color: #fff;\n  font-size: 30px;\n  font-weight: 900;\n}\n.cert-assurance-card > strong {\n  font-size: 21px;\n}\n.cert-assurance-card > p {\n  margin: 8px 0 20px;\n  color: #5a6d88;\n}\n.cert-status-row {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.cert-status-row span {\n  padding: 8px 11px;\n  border: 1px solid #d3e1f1;\n  border-radius: 999px;\n  background: #fff;\n  color: #38516f;\n  font-size: 11px;\n  font-weight: 700;\n}\n.cert-status-row i {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  margin-right: 5px;\n  border-radius: 50%;\n  background: #25c778;\n  box-shadow: 0 0 8px #25c778;\n}\n.cert-orbit {\n  position: absolute;\n  border: 1px dashed rgba(93, 174, 255, .48);\n  border-radius: 50%;\n  animation: cert-spin 17s linear infinite;\n}\n.cert-orbit-one {\n  right: 12%;\n  width: 420px;\n  height: 420px;\n}\n.cert-orbit-two {\n  right: 16%;\n  width: 310px;\n  height: 310px;\n  animation-direction: reverse;\n  animation-duration: 12s;\n}\n.cert-float {\n  position: absolute;\n  z-index: 4;\n  padding: 11px 15px;\n  border: 1px solid rgba(151, 201, 255, .38);\n  border-radius: 12px;\n  background: rgba(5, 31, 71, .9);\n  color: #eaf5ff;\n  font: 800 11px var(--mono);\n  box-shadow: 0 15px 30px rgba(0, 0, 0, .25);\n}\n.cert-float-one {\n  top: 28px;\n  right: 2%;\n  animation: cert-float 4.5s ease-in-out infinite;\n}\n.cert-float-two {\n  bottom: 30px;\n  left: 0;\n  animation: cert-float 5s ease-in-out .8s infinite;\n}\n@keyframes cert-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-14px);\n  }\n}\n@keyframes cert-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes cert-pulse {\n  0%, 100% {\n    opacity: .3;\n    transform: scale(.98);\n  }\n  50% {\n    opacity: .58;\n    transform: scale(1.03);\n  }\n}\n@keyframes cert-grid-shift {\n  to {\n    background-position: 242px 0;\n  }\n}\n@media (max-width: 900px) {\n  .cert-hero {\n    padding: 55px 0;\n  }\n  .cert-hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .cert-hero-visual {\n    min-height: 330px;\n  }\n}\n@media (max-width: 650px) {\n  .cert-hero h1 {\n    font-size: 38px;\n  }\n  .cert-hero-points,\n  .cert-ask-ai {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .cert-hero-actions a {\n    flex: 1 1 140px;\n  }\n  .cert-orbit {\n    max-width: 90vw;\n    max-height: 90vw;\n  }\n  .cert-float {\n    display: none;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .cert-hero:before,\n  .cert-world,\n  .cert-orbit,\n  .cert-frame,\n  .cert-float {\n    animation: none;\n  }\n}\n.partner-overview-hero {\n  position: relative;\n  min-height: 560px;\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  background:\n    radial-gradient(\n      900px 480px at 82% 4%,\n      #0e3a78 0%,\n      #061a3a 60%);\n  color: #fff;\n}\n.partner-overview-hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  opacity: .08;\n  background:\n    repeating-linear-gradient(\n      115deg,\n      transparent 0 90px,\n      #7fb2ff 90px 92px,\n      transparent 92px 220px);\n  background-size: 200% 200%;\n}\n.partner-overview-hero::after {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  right: -10%;\n  bottom: -2px;\n  left: -10%;\n  height: 48%;\n  pointer-events: none;\n  background:\n    repeating-linear-gradient(\n      90deg,\n      rgba(127, 178, 255, .12) 0 1px,\n      transparent 1px 64px),\n    repeating-linear-gradient(\n      0deg,\n      rgba(127, 178, 255, .12) 0 1px,\n      transparent 1px 64px);\n  transform: perspective(650px) rotateX(60deg);\n  transform-origin: bottom;\n  -webkit-mask-image: linear-gradient(transparent, #000 58%);\n  mask-image: linear-gradient(transparent, #000 58%);\n}\n.partner-hero-glow {\n  position: absolute;\n  right: 14%;\n  bottom: -240px;\n  width: 620px;\n  height: 620px;\n  border: 1px solid rgba(96, 165, 250, .24);\n  border-radius: 50%;\n  box-shadow: 0 0 0 120px rgba(37, 99, 235, .05), 0 0 0 240px rgba(37, 99, 235, .035);\n}\n.partner-hero-network {\n  position: absolute;\n  z-index: 0;\n  top: 8%;\n  right: 15%;\n  width: min(58vw, 820px);\n  height: 74%;\n  opacity: .48;\n  background-image:\n    radial-gradient(\n      circle,\n      #80b6ff 0 2.4px,\n      transparent 2.8px);\n  background-size: 19px 19px;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 18%,\n      rgba(0, 0, 0, .8) 52%,\n      transparent 74%);\n  mask-image:\n    radial-gradient(\n      ellipse at center,\n      #000 18%,\n      rgba(0, 0, 0, .8) 52%,\n      transparent 74%);\n  animation: partnerNetworkDrift 13s ease-in-out infinite alternate;\n}\n.partner-hero-orbit {\n  position: absolute;\n  z-index: 0;\n  border: 1px dashed rgba(91, 164, 255, .28);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.partner-orbit-one {\n  right: 13%;\n  top: 12%;\n  width: 520px;\n  height: 520px;\n  animation: partnerOrbit 28s linear infinite;\n}\n.partner-orbit-two {\n  right: 24%;\n  top: 25%;\n  width: 300px;\n  height: 300px;\n  animation: partnerOrbit 19s linear infinite reverse;\n}\n.partner-hero-scan {\n  position: absolute;\n  z-index: 0;\n  inset: 0 auto 0 -28%;\n  width: 24%;\n  background:\n    linear-gradient(\n      90deg,\n      transparent,\n      rgba(80, 160, 255, .07),\n      transparent);\n  transform: skewX(-12deg);\n  animation: partnerScan 9s ease-in-out infinite;\n  pointer-events: none;\n}\n.partner-hero-net {\n  position: absolute;\n  z-index: 0;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  opacity: .8;\n  pointer-events: none;\n}\n.partner-visual-stage {\n  position: relative;\n  width: min(100%, 600px);\n  min-height: 430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  isolation: isolate;\n}\n.partner-program-visual-label {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  z-index: 5;\n  display: flex;\n  transform: translateX(-50%);\n  padding: 7px 9px 7px 18px;\n  align-items: center;\n  gap: 12px;\n  border: 1px solid rgba(139, 195, 255, .55);\n  border-radius: 999px;\n  background: rgba(5, 35, 80, .92);\n  box-shadow: 0 12px 30px rgba(0, 0, 0, .24);\n  color: #fff;\n  font: 800 13px/1.2 var(--disp);\n  letter-spacing: .04em;\n  text-align: center;\n  white-space: nowrap;\n}\n.partner-program-icons {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n.partner-program-icons svg {\n  width: 32px;\n  height: 32px;\n  padding: 6px;\n  border: 2px solid rgba(255, 255, 255, .72);\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #2f8cff,\n      #0757c7);\n  box-shadow:\n    0 0 0 2px rgba(47, 140, 255, .22),\n    0 0 16px rgba(52, 145, 255, .68),\n    0 6px 14px rgba(0, 0, 0, .3);\n  fill: none;\n  stroke: #fff;\n  stroke-width: 2.1;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.partner-program-icons svg:last-child {\n  background:\n    linear-gradient(\n      135deg,\n      #ffad33,\n      #f26a00);\n  box-shadow:\n    0 0 0 2px rgba(255, 145, 25, .25),\n    0 0 16px rgba(255, 137, 18, .72),\n    0 6px 14px rgba(0, 0, 0, .3);\n}\n.partner-float-node {\n  position: absolute;\n  z-index: 4;\n  display: flex;\n  min-height: 48px;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 13px 7px 7px;\n  border: 1px solid rgba(148, 197, 255, .52);\n  border-radius: 14px;\n  background: rgba(7, 35, 78, .92);\n  color: #dcebff;\n  box-shadow: 0 15px 34px rgba(0, 0, 0, .32), inset 0 0 20px rgba(64, 154, 255, .12);\n  -webkit-backdrop-filter: blur(9px);\n  backdrop-filter: blur(9px);\n  pointer-events: none;\n  white-space: nowrap;\n}\n.partner-float-node i {\n  display: grid;\n  width: 34px;\n  height: 34px;\n  place-items: center;\n  border-radius: 10px;\n  background: #1768db;\n  color: #fff;\n  font-style: normal;\n  font-size: 15px;\n  font-weight: 900;\n}\n.partner-float-node b {\n  font-size: 12px;\n  letter-spacing: .01em;\n}\n.partner-float-node.node-one {\n  top: 8%;\n  left: 2%;\n  animation: partnerNodeOne 3.2s ease-in-out infinite;\n}\n.partner-float-node.node-two {\n  right: -2%;\n  bottom: 17%;\n  animation: partnerNodeTwo 3.8s ease-in-out infinite .25s;\n}\n.partner-float-node.node-two i {\n  background: #ff8c1a;\n}\n.partner-float-node.node-three {\n  top: 20%;\n  right: -4%;\n  animation: partnerNodeOne 3.5s ease-in-out infinite reverse;\n}\n.partner-float-node.node-three i {\n  background: #14a760;\n}\n.partner-pulse-ring {\n  position: absolute;\n  z-index: 0;\n  width: 72%;\n  aspect-ratio: 1;\n  border: 2px solid rgba(64, 151, 255, .28);\n  border-radius: 50%;\n  animation: partnerPulse 2.8s ease-out infinite;\n}\n.partner-model-hero-grid .partner-hero-visual img {\n  position: relative;\n  z-index: 2;\n  animation: partnerArtworkFloat 3.2s ease-in-out infinite !important;\n  will-change: transform;\n}\n@keyframes partnerNetworkDrift {\n  from {\n    transform: translate3d(-10px, -5px, 0);\n    opacity: .34;\n  }\n  to {\n    transform: translate3d(18px, 8px, 0);\n    opacity: .56;\n  }\n}\n@keyframes partnerOrbit {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes partnerScan {\n  0%, 18% {\n    left: -28%;\n    opacity: 0;\n  }\n  45% {\n    opacity: 1;\n  }\n  72%, 100% {\n    left: 112%;\n    opacity: 0;\n  }\n}\n@keyframes partnerArtworkFloat {\n  0%, 100% {\n    transform: translateY(8px) scale(1);\n  }\n  50% {\n    transform: translateY(-16px) scale(1.018);\n  }\n}\n@keyframes partnerNodeOne {\n  0%, 100% {\n    transform: translate3d(0, 8px, 0) rotate(-4deg);\n  }\n  50% {\n    transform: translate3d(12px, -13px, 0) rotate(6deg);\n  }\n}\n@keyframes partnerNodeTwo {\n  0%, 100% {\n    transform: translate3d(7px, 0, 0) rotate(5deg);\n  }\n  50% {\n    transform: translate3d(-10px, -17px, 0) rotate(-5deg);\n  }\n}\n@keyframes partnerPulse {\n  0% {\n    transform: scale(.76);\n    opacity: .72;\n  }\n  75%, 100% {\n    transform: scale(1.18);\n    opacity: 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .partner-hero-network,\n  .partner-hero-orbit,\n  .partner-hero-scan {\n    animation: none;\n  }\n}\n.company-page .awards-hero {\n  height: 560px;\n  min-height: 560px;\n  max-height: 560px;\n  padding: 0;\n  overflow: hidden;\n}\n.company-page .awards-hero-grid {\n  height: 560px;\n  padding-block: 34px;\n}\n.company-page .awards-hero-visual {\n  height: 390px;\n  min-height: 390px;\n  overflow: visible;\n}\n.company-page .awards-visual-card {\n  width: min(90%, 460px);\n  height: 345px;\n  min-height: 345px;\n  max-height: 345px;\n  overflow: hidden;\n}\n.company-page .awards-visual-card > img {\n  display: block !important;\n  width: 210px !important;\n  height: 210px !important;\n  max-width: 210px !important;\n  max-height: 210px !important;\n  object-fit: contain !important;\n  flex: 0 0 210px;\n}\n@media (max-width: 900px) {\n  .company-page .awards-hero {\n    height: auto;\n    min-height: 0;\n    max-height: none;\n  }\n  .company-page .awards-hero-grid {\n    height: auto;\n    padding-block: 52px;\n  }\n  .company-page .awards-hero-visual {\n    height: 390px;\n  }\n}\n.company-page .awards-hero-grid {\n  grid-template-columns: 1.12fr .88fr;\n  gap: 34px;\n}\n.company-page .awards-hero .pp-crumb {\n  margin-bottom: 25px;\n}\n.company-page .awards-hero-kicker {\n  margin: 0 0 12px;\n}\n.company-page .awards-hero h1 {\n  max-width: none;\n  margin: 0 0 10px;\n  font-size: clamp(38px, 3.35vw, 52px);\n  line-height: 1.08;\n  white-space: nowrap;\n}\n.company-page .awards-hero h1 span {\n  color: #ed1427;\n}\n.company-page .awards-hero-copy > p {\n  margin: 0 0 23px;\n  color: #c9d9ee;\n  font-size: 17px;\n}\n.awards-hero-line {\n  display: flex;\n  align-items: center;\n  min-height: 31px;\n  color: #68bdff;\n  font: 750 21px/1.35 var(--disp);\n}\n.awards-hero-line i {\n  display: inline-block;\n  width: 2px;\n  height: 25px;\n  margin-left: 5px;\n  background: #68bdff;\n  animation: awards-caret .85s steps(1) infinite;\n}\n@keyframes awards-caret {\n  50% {\n    opacity: 0;\n  }\n}\n.company-page .awards-product-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 8px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid rgba(144, 188, 239, .24);\n}\n.company-page .awards-product-actions a {\n  min-height: 46px;\n  padding: 10px 13px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.company-page .awards-product-actions .awards-primary-action {\n  background: #156bd9;\n  box-shadow: none;\n}\n.company-page .awards-product-actions .awards-secondary-action {\n  border: 1px solid rgba(166, 201, 244, .55);\n  background: rgba(4, 28, 64, .45);\n}\n.company-page .awards-product-actions .awards-talk-action {\n  border: 1px solid #ff8218;\n  background: #ff8218;\n  box-shadow: 0 10px 24px rgba(255, 130, 24, .22);\n}\n.awards-ask-ai {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 22px;\n}\n.awards-ask-ai > span {\n  display: inline-flex;\n  min-height: 31px;\n  align-items: center;\n  padding: 6px 14px;\n  border: 1px solid rgba(145, 190, 243, .4);\n  border-radius: 999px;\n  background: rgba(3, 26, 59, .62);\n  color: #fff;\n  font: 700 10px var(--mono);\n  white-space: nowrap;\n}\n.awards-ask-ai > div {\n  display: flex;\n  gap: 8px;\n}\n.awards-ask-ai a {\n  display: grid;\n  width: 38px;\n  height: 38px;\n  place-items: center;\n  border: 1px solid rgba(145, 190, 243, .4);\n  border-radius: 11px;\n  background: rgba(3, 26, 59, .76);\n}\n.awards-ask-ai img {\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n}\n.company-page .awards-hero-visual {\n  position: relative;\n  display: grid;\n  height: 420px;\n  min-height: 420px;\n  place-items: center;\n  overflow: visible;\n}\n.awards-trophy {\n  position: relative;\n  z-index: 2;\n  display: block;\n  width: min(100%, 430px) !important;\n  height: 430px !important;\n  max-width: 430px !important;\n  max-height: 430px !important;\n  object-fit: contain !important;\n  filter: drop-shadow(0 28px 30px rgba(0, 0, 0, .35));\n}\n.awards-orbit {\n  position: absolute;\n  border: 1px dashed rgba(109, 183, 255, .38);\n  border-radius: 50%;\n}\n.awards-orbit-one {\n  width: 390px;\n  height: 390px;\n}\n.awards-orbit-two {\n  width: 500px;\n  height: 500px;\n}\n.awards-topic {\n  position: absolute;\n  z-index: 3;\n  padding: 8px 12px;\n  border: 1px solid rgba(150, 201, 255, .45);\n  border-radius: 999px;\n  background: rgba(3, 27, 61, .9);\n  color: #eaf5ff;\n  font: 800 9px var(--mono);\n  letter-spacing: .08em;\n}\n.awards-topic-one {\n  top: 16%;\n  left: 1%;\n}\n.awards-topic-two {\n  top: 14%;\n  right: 0;\n}\n.awards-topic-three {\n  right: 3%;\n  bottom: 12%;\n}\n@media (max-width: 1100px) {\n  .company-page .awards-hero h1 {\n    white-space: normal;\n  }\n  .company-page .awards-hero-grid {\n    gap: 28px;\n  }\n  .company-page .awards-product-actions a {\n    padding-inline: 14px;\n  }\n  .awards-trophy {\n    width: min(100%, 380px) !important;\n    height: 380px !important;\n  }\n}\n@media (max-width: 900px) {\n  .company-page .awards-hero-visual {\n    height: 390px;\n    min-height: 390px;\n  }\n  .awards-orbit-two {\n    width: 420px;\n    height: 420px;\n  }\n}\n@media (max-width: 700px) {\n  .company-page .awards-product-actions a {\n    flex: 1 1 145px;\n  }\n  .awards-ask-ai {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .awards-ask-ai > span {\n    white-space: normal;\n  }\n  .awards-hero-line i,\n  .awards-topic {\n    display: none;\n  }\n}\n.partner-hero-grid {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.08fr) minmax(390px, .92fr);\n  gap: 52px;\n  align-items: center;\n  padding-block: 54px 58px;\n}\n.partner-hero-copy {\n  min-width: 0;\n}\n.partner-hero-copy .pp-crumb {\n  margin-bottom: 22px;\n  color: #8fbcf8;\n}\n.partner-hero-kicker {\n  display: inline-flex;\n  margin-bottom: 13px;\n  color: #61b9ff;\n  font: 800 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.partner-hero-copy h1 {\n  max-width: 640px;\n  margin: 0;\n  color: #fff;\n  font:\n    700 clamp(39px, 4.2vw, 48px)/1.02 Georgia,\n    "Times New Roman",\n    serif;\n  letter-spacing: -.035em;\n}\n.partner-hero-copy h1 em {\n  color: #ef955f;\n  font: inherit;\n  font-style: normal;\n}\n.partner-hero-copy > p {\n  max-width: 55ch;\n  margin: 16px 0 0;\n  color: #c9daf0;\n  font-size: 17px;\n  line-height: 1.65;\n}\n.partner-hero-spotlight {\n  margin: 20px 0 0 !important;\n  color: #afc2de !important;\n  font-size: 13px !important;\n  font-weight: 700;\n}\n.partner-hero-spotlight strong {\n  color: #ffb35b;\n}\n.partner-hero-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-top: 20px;\n}\n.partner-hero-actions a {\n  display: inline-flex;\n  min-height: 48px;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 0 20px;\n  border-radius: 9px;\n  color: #fff;\n  font: 800 14px var(--disp);\n  text-decoration: none;\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    border-color .2s;\n}\n.partner-hero-actions a:hover {\n  transform: translateY(-2px);\n}\n.partner-primary-action {\n  background: #ff7a10;\n  box-shadow: 0 12px 28px rgba(255, 122, 16, .24);\n}\n.partner-secondary-action {\n  border: 1px solid rgba(164, 197, 239, .5);\n  background: rgba(255, 255, 255, .05);\n}\n.partner-secondary-action:hover {\n  border-color: #9bc6ff;\n}\n.partner-hero-stats {\n  display: flex;\n  gap: clamp(18px, 2.2vw, 34px);\n  align-items: flex-end;\n  margin-top: 26px;\n}\n.partner-hero-stats div {\n  min-width: 0;\n}\n.partner-hero-stats b {\n  display: block;\n  color: #fff;\n  font: 800 clamp(21px, 2.5vw, 30px)/1 var(--mono);\n  white-space: nowrap;\n}\n.partner-hero-stats span {\n  display: block;\n  margin-top: 5px;\n  color: #a9c6ee;\n  font-size: 11px;\n  white-space: nowrap;\n}\n.partner-hero-stats div::after {\n  content: "";\n  display: block;\n  width: 26px;\n  height: 2px;\n  margin-top: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff8c1a,\n      transparent);\n}\n.partner-hero-live {\n  display: flex;\n  width: fit-content;\n  align-items: center;\n  gap: 8px;\n  margin-top: 26px;\n  padding: 8px 16px;\n  border: 1px solid rgba(46, 204, 113, .25);\n  border-radius: 99px;\n  background: rgba(46, 204, 113, .08);\n  color: #8fe3b0;\n  font: 500 11px var(--mono);\n}\n.partner-hero-live i {\n  width: 8px;\n  height: 8px;\n  flex: none;\n  border-radius: 50%;\n  background: #2ecc71;\n  box-shadow: 0 0 8px #2ecc71;\n}\n.partner-hero-visual {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  justify-content: center;\n}\n.partner-hero-visual img {\n  display: block;\n  width: min(100%, 560px);\n  max-height: 420px;\n  object-fit: contain;\n  filter: drop-shadow(0 28px 32px rgba(0, 10, 35, .34));\n}\n.partner-overview-hero:has(.partner-model-hero-grid) {\n  min-height: 570px;\n}\n.partner-model-hero-grid {\n  grid-template-columns: minmax(0, 1.1fr) minmax(380px, .9fr);\n  padding-block: 48px 52px;\n}\n.partner-model-hero-grid .partner-hero-copy h1 {\n  font-family: var(--disp);\n  font-size: clamp(28px, 3.2vw, 46px);\n  font-weight: 800;\n  line-height: 1.05;\n  white-space: nowrap;\n}\n.partner-hero-badge {\n  display: inline-flex;\n  margin-bottom: 16px;\n  padding: 7px 12px;\n  border: 1px solid rgba(147, 197, 253, .5);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .04);\n  color: #7fc1ff;\n  font: 800 11px var(--mono);\n  letter-spacing: .1em;\n  text-transform: uppercase;\n}\n.partner-model-hero-grid .partner-hero-visual img {\n  max-height: 390px;\n}\n.company-founder-section {\n  padding: 28px 0 12px;\n  background: #fff;\n}\n.company-founder-grid {\n  display: grid;\n  grid-template-columns: minmax(240px, 320px) minmax(0, 680px);\n  gap: 38px;\n  align-items: center;\n  max-width: 1040px;\n}\n.company-founder-visual {\n  display: flex;\n  justify-content: center;\n}\n.company-founder-visual img {\n  display: block;\n  width: min(100%, 330px);\n  height: auto;\n}\n.company-founder-copy {\n  max-width: 720px;\n}\n.company-founder-copy h2 {\n  margin: 0 0 14px;\n  color: #0b1736;\n  font-size: clamp(30px, 2.5vw, 40px);\n  line-height: 1.08;\n  letter-spacing: -.03em;\n}\n.company-founder-highlights {\n  margin: 0 0 18px;\n  color: #1769ff;\n  font-size: clamp(15px, 1.15vw, 18px);\n  line-height: 1.28;\n  font-weight: 800;\n}\n.company-founder-summary {\n  margin: 0;\n  color: #546276;\n  font-size: clamp(14px, .95vw, 16px);\n  line-height: 1.5;\n}\n.company-orb {\n  position: absolute;\n  border: 1px solid rgba(120, 180, 255, .16);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.company-orb-one {\n  width: 440px;\n  height: 440px;\n  right: -80px;\n  top: -170px;\n}\n.company-orb-two {\n  width: 280px;\n  height: 280px;\n  right: 18%;\n  bottom: -210px;\n}\n.company-body {\n  padding: 35px 0 42px 0;\n  background: linear-gradient(#fff, #f7f9fd);\n}\n.company-wrap {\n  max-width: 1160px;\n}\n.company-wrap:has(.career-stories) {\n  display: grid;\n  grid-template-columns: minmax(20px, 1fr) minmax(0, 1112px) minmax(20px, 1fr);\n  width: 100%;\n  max-width: none;\n  padding-inline: 0;\n}\n.company-wrap:has(.career-stories) > * {\n  grid-column: 2;\n  min-width: 0;\n}\n.company-wrap:has(.career-stories) > .career-stories,\n.company-wrap:has(.career-stories) > .career-next-step {\n  grid-column: 1 / -1;\n  width: 100%;\n  box-sizing: border-box;\n}\n.company-intro {\n  max-width: 900px;\n  margin: 0 auto 44px;\n  color: #34435e;\n  font-size: clamp(18px, 2vw, 23px);\n  line-height: 1.65;\n  text-align: center;\n  text-wrap: balance;\n}\n.vendor-hero {\n  position: relative;\n  overflow: hidden;\n  color: #fff;\n  background:\n    radial-gradient(\n      ellipse at 82% 48%,\n      #15568a66,\n      transparent 50%),\n    linear-gradient(\n      120deg,\n      #061b38,\n      #0b2d57);\n  padding: 50px 0 42px;\n}\n.vendor-hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(#7dc4ff06 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #7dc4ff06 1px,\n      transparent 1px);\n  background-size: 42px 42px;\n  pointer-events: none;\n}\n.vendor-hero-grid {\n  position: relative;\n  display: grid;\n  grid-template-columns: 1.05fr 1fr;\n  gap: 48px;\n  align-items: center;\n}\n.vendor-breadcrumb {\n  display: flex;\n  gap: 12px;\n  font-size: 11px;\n  color: #9fb9d5;\n  margin-bottom: 30px;\n}\n.vendor-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\n.vendor-eyebrow {\n  color: #70c6ff;\n  font: 700 10px var(--mono);\n  letter-spacing: .18em;\n}\n.vendor-hero h1 {\n  margin: 16px 0 20px;\n  font: 800 clamp(32px, 3.8vw, 52px)/1.1 var(--disp);\n  letter-spacing: -.035em;\n  color: #fff;\n}\n.vendor-hero h1 em {\n  font-style: normal;\n  color: #61c5ff;\n}\n.vendor-hero-copy > p {\n  max-width: 490px;\n  color: #b8cce4;\n  font-size: 15px;\n  line-height: 1.8;\n  margin: 0 0 24px;\n}\n.vendor-explore {\n  display: inline-flex;\n  gap: 22px;\n  background:\n    linear-gradient(\n      110deg,\n      #ff9746,\n      #ff7900);\n  border: 0;\n  box-shadow: 0 8px 26px #ff880020;\n}\n.vendor-hero-facts {\n  display: flex;\n  gap: 26px;\n  margin-top: 32px;\n  padding-top: 22px;\n  border-top: 1px solid #8bc6ff26;\n}\n.vendor-hero-facts > div {\n  display: grid;\n  gap: 5px;\n}\n.vendor-hero-facts b {\n  font-size: 20px;\n  color: #fff;\n}\n.vendor-hero-facts span {\n  font-size: 10px;\n  color: #9fb9d5;\n}\n.vendor-ecosystem {\n  position: relative;\n  aspect-ratio: 520/380;\n  width: 100%;\n  max-width: 580px;\n  margin: auto;\n  isolation: isolate;\n}\n.vendor-ecosystem::before {\n  content: "";\n  position: absolute;\n  inset: 8%;\n  background:\n    radial-gradient(\n      ellipse,\n      #2b9aff25,\n      transparent 70%);\n  border-radius: 50%;\n  z-index: -1;\n}\n.vendor-network-lines {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n}\n.vendor-network-hub {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  width: 31%;\n  aspect-ratio: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  border: 1px solid #81c9ff99;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 30% 20%,\n      #eaf7ff,\n      #bfdfff);\n  box-shadow: 0 0 0 12px #36a4ff0d, 0 0 50px #1b93ff55;\n}\n.vendor-network-hub img {\n  width: 76%;\n  height: auto;\n}\n.vendor-network-hub span {\n  font: 700 clamp(5px, .6vw, 8px) var(--mono);\n  color: #235483;\n  letter-spacing: .05em;\n}\n.vendor-orbit-card {\n  position: absolute;\n  width: 26%;\n  height: 23%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 12px;\n  border: 1px solid #acd5ff;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #e4f0ff);\n  box-shadow: 0 14px 32px #000c2433;\n  animation: vendor-float 7s ease-in-out infinite;\n}\n.vendor-orbit-card img {\n  display: block;\n  width: 100%;\n  height: 65%;\n  object-fit: contain;\n}\n.vendor-orbit-card span {\n  color: #4e6c8e;\n  font-size: clamp(6px, .7vw, 9px);\n  text-align: center;\n}\n.orbit-microsoft {\n  left: 7%;\n  top: 3%;\n}\n.orbit-aws {\n  right: 7%;\n  top: 3%;\n  animation-delay: -2s;\n}\n.orbit-azure {\n  left: 0;\n  top: 38%;\n  animation-delay: -3s;\n}\n.orbit-google {\n  right: 0;\n  top: 38%;\n  animation-delay: -1s;\n}\n.orbit-acronis {\n  left: 7%;\n  bottom: 3%;\n  animation-delay: -4s;\n}\n.orbit-oracle {\n  right: 7%;\n  bottom: 3%;\n  animation-delay: -5s;\n}\n.vendor-data-flow {\n  animation: vendor-flow 16s linear infinite;\n}\n.vendor-network-caption {\n  position: absolute;\n  left: 0;\n  right: 0;\n  bottom: -22px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n  font: 500 10px var(--mono);\n  color: #9ac8ea;\n}\n.vendor-network-caption i {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #5ae3ad;\n  box-shadow: 0 0 10px #5ae3ad;\n}\n@keyframes vendor-flow {\n  to {\n    stroke-dashoffset: -224;\n  }\n}\n@keyframes vendor-float {\n  50% {\n    transform: translateY(-7px);\n  }\n}\n.company-body:has(.vendor-partners) {\n  background: #f5f8fc;\n  padding-block: 56px;\n}\n#vendor-directory {\n  scroll-margin-top: 100px;\n}\n.vendor-directory-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 26px;\n  padding: 24px;\n  border: 1px solid #dbe6f4;\n  border-radius: 18px;\n  background: #fff;\n}\n.vendor-directory-toolbar strong {\n  display: block;\n  font-size: 16px;\n  color: #0a284f;\n}\n.vendor-directory-toolbar > div > span {\n  display: block;\n  margin-top: 6px;\n  font-size: 12px;\n  color: #7286a0;\n}\n.vendor-search {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  width: min(100%, 350px);\n  padding: 12px 15px;\n  background: #f4f8fd;\n  border: 1px solid #d5e1f0;\n  border-radius: 10px;\n}\n.vendor-search > span {\n  font-size: 20px;\n  color: #3c78c4;\n}\n.vendor-search input {\n  min-width: 0;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: #0a284f;\n  font: 13px var(--body);\n  outline: none;\n}\n.vendor-search:focus-within {\n  border-color: #1769ff;\n  box-shadow: 0 0 0 3px #1769ff15;\n}\n.vendor-empty {\n  text-align: center;\n  padding: 48px;\n  background: #fff;\n  border-radius: 18px;\n}\n.vendor-empty button {\n  margin-top: 16px;\n  padding: 10px 20px;\n  border: 0;\n  border-radius: 8px;\n  background: #1565d8;\n  color: #fff;\n  cursor: pointer;\n}\n@media (max-width: 900px) {\n  .vendor-hero-grid {\n    gap: 28px;\n  }\n  .vendor-hero-facts {\n    gap: 18px;\n  }\n  .vendor-hero-facts b {\n    font-size: 16px;\n  }\n  .vendor-orbit-card {\n    padding: 8px;\n    border-radius: 10px;\n  }\n}\n@media (max-width: 760px) {\n  .vendor-hero {\n    padding: 32px 0 48px;\n  }\n  .vendor-hero-grid {\n    grid-template-columns: 1fr;\n    gap: 36px;\n  }\n  .vendor-ecosystem {\n    max-width: 500px;\n  }\n  .vendor-hero h1 {\n    font-size: 38px;\n  }\n  .vendor-orbit-card span {\n    font-size: 8px;\n  }\n  .vendor-network-hub span {\n    font-size: 7px;\n  }\n  .vendor-directory-toolbar {\n    flex-direction: column;\n    align-items: stretch;\n    padding: 18px;\n  }\n  .vendor-search {\n    width: 100%;\n  }\n  .vendor-hero-facts {\n    justify-content: space-between;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .vendor-ecosystem * {\n    animation: none !important;\n  }\n}\n.vendor-partners-heading {\n  max-width: 820px;\n  margin: 0 auto 36px;\n  text-align: center;\n}\n.vendor-partners-heading > span {\n  color: #1769ff;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.vendor-partners-heading h2 {\n  margin: 10px 0 14px;\n  color: #0b1736;\n  font-size: clamp(30px, 4vw, 46px);\n  line-height: 1.12;\n}\n.vendor-partners-heading p {\n  margin: 0;\n  color: #617089;\n  font-size: 17px;\n  line-height: 1.7;\n}\n.vendor-category-list {\n  display: grid;\n  gap: 28px;\n}\n.vendor-category {\n  overflow: hidden;\n  border: 1px solid #dce5f1;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 16px 42px rgba(14, 42, 85, .06);\n}\n.vendor-category > header {\n  display: flex;\n  min-width: 0;\n  align-items: center;\n  padding: 24px 28px;\n  border-bottom: 1px solid #e8eef7;\n  background:\n    linear-gradient(\n      110deg,\n      #f0f6ff,\n      #fff);\n  text-align: left;\n}\n.vendor-category > header > div {\n  min-width: 0;\n  width: 100%;\n  max-width: 840px;\n}\n.vendor-category h3 {\n  margin: 0 0 5px;\n  color: #0b1736;\n  font-size: 19px;\n  line-height: 1.35;\n  text-wrap: balance;\n  overflow-wrap: anywhere;\n}\n.vendor-category header p {\n  max-width: 760px;\n  margin: 0;\n  color: #617089;\n  font-size: 14px;\n  line-height: 1.6;\n  overflow-wrap: anywhere;\n}\n.vendor-logo-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n  padding: 24px 28px 28px;\n}\n.vendor-category-badges .vendor-logo-grid {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.vendor-logo-card {\n  min-width: 0;\n  overflow: hidden;\n  border: 1px solid #e1e8f1;\n  border-radius: 14px;\n  background: #fff;\n  transition:\n    transform .2s ease,\n    border-color .2s ease,\n    box-shadow .2s ease;\n}\n.vendor-logo-card:hover {\n  transform: translateY(-3px);\n  border-color: #b9d0ee;\n  box-shadow: 0 14px 28px rgba(14, 42, 85, .1);\n}\n.vendor-logo-image {\n  display: grid;\n  height: 104px;\n  place-items: center;\n  padding: 12px 16px;\n  background: #fff;\n}\n.vendor-logo-image img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.vendor-logo-card h4 {\n  margin: 0;\n  padding: 11px 12px 13px;\n  border-top: 1px solid #edf1f6;\n  color: #263750;\n  font-size: 12px;\n  font-weight: 800;\n  line-height: 1.35;\n  text-align: center;\n}\n.vendor-category-badges .vendor-logo-image {\n  height: 200px;\n  padding: 20px;\n}\n.vendor-category-badges .vendor-logo-image img {\n  max-width: 320px;\n  max-height: 160px;\n}\n@media (max-width: 640px) {\n  .company-body:has(.vendor-partners) {\n    padding: 20px 0 27px 0;\n  }\n  .company-body:has(.vendor-partners) .company-wrap {\n    padding-inline: 14px;\n  }\n  .vendor-partners-heading {\n    margin-bottom: 32px;\n  }\n  .vendor-partners-heading p {\n    font-size: 15px;\n  }\n  .vendor-category-list {\n    gap: 18px;\n  }\n  .vendor-category {\n    border-radius: 18px;\n  }\n  .vendor-category > header {\n    align-items: center;\n    padding: 18px;\n  }\n  .vendor-category h3 {\n    font-size: 17px;\n  }\n  .vendor-category header p {\n    font-size: 13px;\n  }\n  .vendor-logo-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 9px;\n    padding: 18px;\n  }\n  .vendor-logo-image {\n    height: 86px;\n    padding: 10px;\n  }\n  .vendor-logo-card h4 {\n    padding: 9px 8px 11px;\n    font-size: 11px;\n  }\n  .vendor-category-badges .vendor-logo-grid {\n    grid-template-columns: 1fr;\n  }\n  .vendor-category-badges .vendor-logo-image {\n    height: 180px;\n    padding: 16px;\n  }\n  .vendor-category-badges .vendor-logo-image img {\n    max-height: 148px;\n  }\n}\n@media (max-width: 390px) {\n  .vendor-logo-grid {\n    grid-template-columns: 1fr;\n  }\n  .vendor-logo-image {\n    height: 98px;\n  }\n}\n.company-card-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n  margin-bottom: 64px;\n}\n.company-card {\n  padding: 28px;\n  border: 1px solid #e2e8f2;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 14px 40px rgba(14, 42, 85, .07);\n}\n.company-icon {\n  width: 50px;\n  height: 50px;\n  display: grid;\n  place-items: center;\n  margin-bottom: 21px;\n  border-radius: 14px;\n  background: #eaf2ff;\n  color: #1769ff;\n  font-size: 14px;\n  font-weight: 800;\n}\n.company-card h2,\n.company-section h2,\n.company-cta h2 {\n  color: #0b1736;\n}\n.company-card h2 {\n  margin: 0 0 9px;\n  font-size: 19px;\n}\n.company-card p {\n  margin: 0;\n  color: #667085;\n  font-size: 14px;\n  line-height: 1.65;\n}\n.recognition-section {\n  margin-top: 34px;\n}\n.recognition-section:first-of-type {\n  margin-top: 0;\n}\n.recognition-heading {\n  max-width: 760px;\n  margin: 0 auto 34px;\n  text-align: center;\n}\n.recognition-heading > span {\n  color: #1769ff;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.recognition-heading h2 {\n  margin: 10px 0 11px;\n  color: #0b1736;\n  font-size: clamp(29px, 4vw, 42px);\n  line-height: 1.15;\n}\n.recognition-heading p {\n  margin: 0;\n  color: #617089;\n  font-size: 15px;\n  line-height: 1.65;\n}\n.certification-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n}\n.certification-tabs-layout {\n  display: grid;\n  grid-template-columns: 240px minmax(0, 1fr);\n  gap: 28px;\n  max-width: 1120px;\n  margin: 0 auto;\n  align-items: start;\n}\n.certification-tabs {\n  display: grid;\n  gap: 6px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  box-shadow: none;\n}\n.certification-tabs button {\n  position: relative;\n  display: flex;\n  min-height: 66px;\n  align-items: center;\n  gap: 11px;\n  padding: 15px 20px;\n  border: 0;\n  border-radius: 11px;\n  background: #f4f7fb;\n  color: #9aa7b9;\n  cursor: pointer;\n  font: 700 14px/1.35 var(--disp);\n  text-align: left;\n  transition:\n    background .2s,\n    color .2s,\n    box-shadow .2s;\n}\n.certification-tabs button:last-child {\n  border-bottom: 0;\n}\n.certification-tabs button > span {\n  color: #1769ff;\n  font: 800 10px var(--mono);\n  letter-spacing: .08em;\n}\n.certification-tabs button:hover {\n  background: #edf4fc;\n  color: #0b1736;\n}\n.certification-tabs button.is-active {\n  background: #f5f8fc;\n  color: #071e48;\n  box-shadow: none;\n}\n.certification-tabs button.is-active:after {\n  position: absolute;\n  top: 9px;\n  right: -2px;\n  bottom: 9px;\n  width: 3px;\n  border-radius: 4px;\n  background: #1769ff;\n  content: "";\n}\n.certification-tabs button.is-active > span {\n  color: #1769ff;\n}\n.certification-tabs button > .certification-tab-label {\n  color: inherit;\n  font: inherit;\n  letter-spacing: normal;\n}\n.certification-tab-label small {\n  display: block;\n  margin-top: 5px;\n  color: #1769ff;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: .06em;\n  text-transform: uppercase;\n}\n.certification-tab-panel {\n  display: grid;\n  grid-template-columns: minmax(340px, .92fr) minmax(280px, .78fr);\n  min-height: 510px;\n  border: 1px solid #d7e2f0;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 16px 40px rgba(14, 42, 85, .08);\n}\n.certification-tab-panel > a {\n  min-width: 0;\n}\n.certification-tab-panel .certificate-image-wrap {\n  height: 100%;\n  min-height: 500px;\n}\n.certification-tab-panel .recognition-card-copy {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  border-top: 0;\n  border-left: 1px solid #e5ebf3;\n  padding: 34px;\n}\n.certification-tab-panel .recognition-card-copy h3 {\n  font-size: 24px;\n}\n.cert-hero {\n  min-height: 530px;\n  padding-block: 38px;\n  background:\n    radial-gradient(\n      ellipse at 80% 40%,\n      #18548966,\n      transparent 48%),\n    linear-gradient(\n      120deg,\n      #061a37,\n      #0c2d55);\n}\n.cert-hero:before {\n  background-image:\n    linear-gradient(#87caff06 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #87caff06 1px,\n      transparent 1px);\n  background-size: 42px 42px;\n  animation: none;\n}\n.cert-hero:after {\n  opacity: .35;\n}\n.cert-world {\n  opacity: .15;\n}\n.cert-hero h1 {\n  font-family: var(--disp);\n  font-size: clamp(36px, 3.8vw, 52px);\n  line-height: 1.1;\n}\n.cert-hero-copy > p {\n  font-size: 15px;\n  line-height: 1.8;\n}\n.cert-hero-points {\n  font-size: 12px;\n  font-weight: 600;\n}\n.cert-kicker {\n  font-size: 10px;\n  margin-top: 28px;\n}\n.cert-hero-actions a {\n  font-size: 11px;\n  min-height: 42px;\n  padding: 11px 14px;\n}\n.cert-hero-actions .talk {\n  background:\n    linear-gradient(\n      110deg,\n      #ff9744,\n      #ff7900);\n  border: 0;\n}\n.cert-new-animation {\n  min-height: 0;\n  aspect-ratio: 520/410;\n  width: 100%;\n  filter: drop-shadow(0 22px 25px #000d2733);\n}\n.cert-new-animation svg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n.credential-document-heading {\n  fill: #123f6d;\n  font: 700 17px system-ui, sans-serif;\n  letter-spacing: 2px;\n}\n.credential-document-subtitle {\n  fill: #668bae;\n  font: 600 8px ui-monospace, monospace;\n  letter-spacing: 1.5px;\n}\n.credential-signature-label {\n  fill: #688eb0;\n  font: 6px ui-monospace, monospace;\n  letter-spacing: .7px;\n}\n.credential-badge-title {\n  fill: #eff8ff;\n  font: 700 13px system-ui, sans-serif;\n}\n.credential-badge-caption {\n  fill: #a9cde7;\n  font: 9px system-ui, sans-serif;\n}\n.credential-footer-label {\n  fill: #a9cde7;\n  font: 10px system-ui, sans-serif;\n  letter-spacing: .3px;\n}\n.credential-document {\n  animation: credential-drift 7s ease-in-out infinite;\n  filter: drop-shadow(0 12px 24px #00132944);\n}\n.credential-main-shield {\n  animation: credential-drift 7s ease-in-out infinite;\n  filter: drop-shadow(0 8px 9px #2970bf55);\n}\n.credential-badge {\n  animation: credential-drift 6s ease-in-out infinite;\n  filter: drop-shadow(0 8px 10px #00132944);\n}\n.badge-service {\n  animation-delay: -3s;\n}\n.credential-orbit {\n  transform-origin: 260px 208px;\n  animation: credential-orbit-spin 60s linear infinite;\n}\n.credential-check {\n  stroke-dasharray: 55;\n  animation: credential-check-draw 6s ease-in-out infinite;\n}\n.credential-document-lines {\n  stroke-dasharray: 160;\n  animation: credential-lines-draw 7s ease-in-out infinite;\n}\n.credential-sparkles {\n  animation: credential-spark 4s ease-in-out infinite;\n}\n.company-body:has(.certifications-section) {\n  background: #f5f8fc;\n  padding-top: 48px;\n}\n.certification-heading {\n  margin-bottom: 34px;\n}\n.certification-heading h2 {\n  font-size: clamp(28px, 3vw, 38px);\n}\n.certification-heading > span {\n  font-size: 10px;\n  letter-spacing: .15em;\n}\n.certification-tabs {\n  padding: 10px;\n  background: #eaf1fa;\n  border: 1px solid #dbe6f3;\n  border-radius: 18px;\n  gap: 6px;\n  align-self: start;\n}\n.certification-tabs button {\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: transparent;\n  padding: 17px 15px;\n  font-size: 13px;\n}\n.certification-tabs button.is-active {\n  background: #fff;\n  border-color: #cbdff5;\n  box-shadow: 0 6px 16px #0a29570a;\n}\n.certification-tabs button.is-active:after {\n  display: none;\n}\n.certification-tab-panel {\n  border-color: #dde7f4;\n  box-shadow: 0 16px 40px #0a295709;\n}\n.certification-tab-panel .recognition-card-copy {\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #f3f8ff);\n}\n@keyframes credential-drift {\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes credential-orbit-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes credential-check-draw {\n  0% {\n    stroke-dashoffset: 55;\n    opacity: .3;\n  }\n  35%, 85% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: .3;\n  }\n}\n@keyframes credential-lines-draw {\n  0% {\n    stroke-dashoffset: 160;\n    opacity: .4;\n  }\n  50%, 100% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n}\n@keyframes credential-spark {\n  50% {\n    opacity: .3;\n  }\n}\n@media (max-width: 760px) {\n  .cert-new-animation {\n    max-width: 500px;\n    margin: 20px auto 0;\n  }\n  .cert-hero {\n    padding-block: 28px;\n  }\n  .cert-hero-grid {\n    gap: 20px;\n  }\n  .cert-hero-points {\n    flex-wrap: wrap;\n    gap: 10px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .cert-new-animation * {\n    animation: none !important;\n  }\n}\n.certification-heading {\n  max-width: 760px;\n  margin-right: auto;\n  margin-left: auto;\n  text-align: center;\n}\n.certificate-card,\n.award-card {\n  overflow: hidden;\n  border: 1px solid #dce5f1;\n  border-radius: 18px;\n  background: #fff;\n  box-shadow: 0 14px 38px rgba(14, 42, 85, .08);\n}\n.certificate-card > a {\n  display: block;\n  overflow: hidden;\n}\n.certificate-image-wrap {\n  display: grid;\n  height: 390px;\n  place-items: center;\n  padding: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      #f2f6fc,\n      #fff);\n}\n.certificate-image-wrap img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n}\n.recognition-card-copy {\n  padding: 21px 23px 24px;\n  border-top: 1px solid #e5ebf3;\n}\n.recognition-card-copy > span {\n  color: #1769ff;\n  font: 800 9px var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.recognition-card-copy h3,\n.award-card h3 {\n  color: #0b1736;\n  font-family: var(--disp);\n}\n.recognition-card-copy h3 {\n  margin: 8px 0 7px;\n  font-size: 18px;\n  line-height: 1.35;\n}\n.recognition-card-copy p {\n  margin: 0;\n  color: #65738a;\n  font-size: 13px;\n  line-height: 1.55;\n}\n.recognition-card-copy a {\n  display: inline-block;\n  margin-top: 14px;\n  color: #1769ff;\n  font-size: 13px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.recognition-card-copy a:hover {\n  text-decoration: underline;\n}\n.awards-section {\n  padding-top: 32px;\n  border-top: 1px solid #dfe7f2;\n}\n.award-tabs-layout {\n  display: grid;\n  grid-template-columns: 220px minmax(0, 1fr);\n  gap: 36px;\n  align-items: start;\n}\n.award-tabs {\n  display: grid;\n  gap: 6px;\n  padding-right: 16px;\n  border-right: 1px solid #d8e2ef;\n}\n.award-tabs button {\n  position: relative;\n  width: 100%;\n  padding: 17px 20px;\n  border: 0;\n  border-radius: 10px;\n  background: transparent;\n  color: #98a2b3;\n  cursor: pointer;\n  font: inherit;\n  font-size: 16px;\n  font-weight: 800;\n  text-align: left;\n  transition: color .2s ease, background .2s ease;\n}\n.award-tabs button::after {\n  position: absolute;\n  top: 8px;\n  right: -18px;\n  bottom: 8px;\n  width: 3px;\n  border-radius: 3px;\n  background: #1769ff;\n  content: "";\n  opacity: 0;\n}\n.award-tabs button:hover {\n  color: #344054;\n  background: #f5f8fc;\n}\n.award-tabs button.is-active {\n  color: #0b1736;\n  background: #f2f6fc;\n}\n.award-tabs button.is-active::after {\n  opacity: 1;\n}\n.award-year-panel {\n  min-width: 0;\n  padding: 34px;\n  border: 1px solid #dce5f1;\n  border-radius: 22px;\n  background: #fff;\n  box-shadow: 0 14px 38px rgba(14, 42, 85, .06);\n}\n.award-year-heading {\n  margin-bottom: 26px;\n}\n.award-year-heading span {\n  color: #1769ff;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.award-year-heading h3 {\n  margin: 8px 0 0;\n  color: #0b1736;\n  font-size: 34px;\n  line-height: 1;\n}\n.award-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n.award-card {\n  display: flex;\n  min-height: 350px;\n  flex-direction: column;\n  transition:\n    transform .22s ease,\n    box-shadow .22s ease,\n    border-color .22s ease;\n}\n.award-card:hover {\n  transform: translateY(-4px);\n  border-color: #b8cce8;\n  box-shadow: 0 20px 45px rgba(14, 42, 85, .12);\n}\n.award-image-wrap {\n  display: grid;\n  min-height: 285px;\n  flex: 1;\n  place-items: center;\n  padding: 22px;\n  background:\n    linear-gradient(\n      145deg,\n      #f4f7fb,\n      #fff);\n}\n.award-image-wrap img {\n  display: block;\n  max-width: 100%;\n  width: auto;\n  max-height: 245px;\n  height: auto;\n  object-fit: contain;\n}\n.award-card h3 {\n  margin: 0;\n  padding: 18px 20px 21px;\n  border-top: 1px solid #e5ebf3;\n  font-size: 16px;\n  line-height: 1.35;\n  text-align: center;\n}\n.company-page .awards-hero {\n  padding-block: 44px;\n  background:\n    radial-gradient(\n      ellipse at 80% 45%,\n      #17579066,\n      transparent 50%),\n    linear-gradient(\n      120deg,\n      #061b38,\n      #0a2b52);\n}\n.company-page .awards-hero h1 {\n  white-space: normal;\n  font: 800 clamp(34px, 3.6vw, 49px)/1.12 var(--disp);\n  letter-spacing: -.035em;\n}\n.company-page .awards-hero h1 em {\n  color: #78ccff;\n}\n.awards-hero-copy > p {\n  font-size: 15px;\n}\n.awards-hero-line {\n  font-size: 16px;\n  color: #b8d9f4;\n}\n.awards-hero-line i {\n  display: none;\n}\n.company-page .awards-hero-visual.awards-animation {\n  width: 100%;\n  height: auto;\n  min-height: 0;\n  aspect-ratio: 520/430;\n  filter: drop-shadow(0 20px 26px #000e2633);\n}\n.awards-animation svg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n.award-trophy-brand {\n  fill: #e3f4ff;\n  font: 600 8px ui-monospace, monospace;\n  letter-spacing: 2px;\n}\n.award-badge-text {\n  fill: #c9e5fa;\n  font: 600 10px ui-monospace, monospace;\n  letter-spacing: 1px;\n}\n.award-animation-caption {\n  fill: #a9cde7;\n  font: 10px system-ui, sans-serif;\n  letter-spacing: .3px;\n}\n.award-animated-trophy {\n  animation: award-trophy-drift 7s ease-in-out infinite;\n  filter: drop-shadow(0 10px 15px #0d97ff33);\n}\n.award-new-orbit {\n  transform-origin: 260px 215px;\n  animation: award-orbit-spin 60s linear infinite;\n}\n.award-new-badge {\n  animation: award-trophy-drift 6s ease-in-out infinite;\n  filter: drop-shadow(0 8px 12px #00142e44);\n}\n.award-badge-right {\n  animation-delay: -3s;\n}\n.award-crystal-shine {\n  animation: award-shimmer 6s ease-in-out infinite;\n}\n.award-star-sparkles {\n  animation: award-twinkle 4s ease-in-out infinite;\n}\n.award-ground-glow {\n  animation: award-twinkle 7s ease-in-out infinite;\n}\n.company-body:has(.awards-section) {\n  background: #f5f8fc;\n  padding-top: 48px;\n}\n.award-tabs {\n  padding: 10px;\n  border: 1px solid #dbe6f3;\n  border-radius: 16px;\n  background: #eaf1fa;\n  gap: 7px;\n}\n.award-tabs button {\n  padding: 16px;\n  border: 1px solid transparent;\n  font-size: 14px;\n}\n.award-tabs button.is-active {\n  background: #fff;\n  color: #1769d8;\n  border-color: #cbdff5;\n  box-shadow: 0 5px 14px #0a29570a;\n}\n.award-tabs button::after {\n  display: none;\n}\n.award-year-panel {\n  border-color: #dde7f4;\n  box-shadow: 0 14px 36px #0a295708;\n}\n.award-card {\n  box-shadow: 0 8px 24px #0a295708;\n}\n.award-image-wrap {\n  background:\n    linear-gradient(\n      145deg,\n      #eef5ff,\n      #fff);\n  cursor: zoom-in;\n}\n.award-image-wrap:focus-visible {\n  outline: 3px solid #1769ff;\n  outline-offset: -3px;\n}\n.award-card h3 {\n  font-size: 14px;\n  text-align: left;\n  line-height: 1.5;\n}\n@keyframes award-trophy-drift {\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes award-orbit-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes award-shimmer {\n  0%, 20% {\n    transform: translateX(-150px);\n    opacity: 0;\n  }\n  35% {\n    opacity: .5;\n  }\n  65% {\n    transform: translateX(200px);\n    opacity: 0;\n  }\n  100% {\n    transform: translateX(200px);\n    opacity: 0;\n  }\n}\n@keyframes award-twinkle {\n  50% {\n    opacity: .4;\n  }\n}\n@media (max-width: 760px) {\n  .company-page .awards-hero {\n    padding-block: 30px;\n  }\n  .awards-animation {\n    max-width: 500px;\n    margin: 18px auto 0;\n  }\n  .company-page .awards-hero h1 {\n    font-size: 36px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .awards-animation * {\n    animation: none !important;\n  }\n  .awards-animation .award-crystal-shine {\n    opacity: 0;\n  }\n}\n.company-section {\n  display: grid;\n  grid-template-columns: minmax(220px, .65fr) minmax(0, 1.35fr);\n  gap: 55px;\n  margin-top: 18px;\n  padding: 42px;\n  border: 1px solid #e3e9f2;\n  border-radius: 20px;\n  background: #fff;\n}\n.company-section-tint {\n  background: #f2f6fc;\n}\n.company-section-number {\n  color: #1769ff;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: .12em;\n}\n.company-section h2 {\n  margin: 10px 0 0;\n  font-size: clamp(23px, 3vw, 31px);\n  line-height: 1.2;\n}\n.company-section p {\n  margin: 0;\n  color: #526078;\n  font-size: 16px;\n  line-height: 1.75;\n}\n.company-section ul {\n  display: grid;\n  gap: 11px;\n  margin: 22px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.company-section li {\n  position: relative;\n  padding-left: 26px;\n  color: #34435e;\n  font-size: 14px;\n  line-height: 1.55;\n}\n.company-section li::before {\n  content: "\\e2\\153\\201c";\n  position: absolute;\n  left: 0;\n  color: #19a568;\n  font-weight: 900;\n}\n.company-cta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 35px;\n  margin-top: 27px;\n  padding: 42px;\n  border-radius: 22px;\n  background:\n    linear-gradient(\n      135deg,\n      #0b234e,\n      #1057b7);\n  box-shadow: 0 22px 55px rgba(13, 58, 125, .2);\n}\n.company-cta > div > span {\n  color: #72b8ff;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.company-cta h2 {\n  max-width: 700px;\n  margin: 9px 0 0;\n  color: #fff;\n  font-size: clamp(20px, 2.4vw, 29px);\n  line-height: 1.35;\n}\n.company-cta .btn {\n  flex: none;\n  white-space: nowrap;\n  text-decoration: none;\n}\n@media (max-width: 800px) {\n  .company-hero {\n    min-height: 340px;\n  }\n  .partner-overview-hero,\n  .partner-overview-hero:has(.partner-model-hero-grid) {\n    min-height: 0;\n  }\n  .partner-hero-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    padding-block: 44px 28px;\n  }\n  .partner-hero-copy {\n    text-align: center;\n  }\n  .partner-hero-copy .pp-crumb {\n    text-align: left;\n  }\n  .partner-hero-copy h1,\n  .partner-hero-copy > p,\n  .partner-hero-points {\n    margin-inline: auto;\n  }\n  .partner-hero-spotlight {\n    margin-inline: auto !important;\n  }\n  .partner-hero-actions {\n    justify-content: center;\n  }\n  .partner-hero-stats {\n    justify-content: center;\n  }\n  .partner-hero-live {\n    margin-inline: auto;\n  }\n  .partner-hero-visual img {\n    width: min(100%, 600px);\n    max-height: 360px;\n  }\n  .partner-model-hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .partner-model-hero-grid .partner-hero-copy h1 {\n    font-size: clamp(24px, 5vw, 42px);\n  }\n  .partner-model-hero-grid .partner-hero-visual img {\n    max-height: 280px;\n  }\n  .company-founder-section {\n    padding: 24px 0 8px;\n  }\n  .company-founder-grid {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .company-founder-copy {\n    max-width: none;\n  }\n  .company-founder-copy h2 {\n    margin-bottom: 14px;\n  }\n  .company-founder-highlights {\n    margin-bottom: 18px;\n  }\n  .company-body {\n    padding: 24px 0 30px 0;\n  }\n  .company-card-grid {\n    grid-template-columns: 1fr;\n    margin-bottom: 42px;\n  }\n  .certification-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .certification-tabs-layout {\n    grid-template-columns: 1fr;\n  }\n  .certification-tabs {\n    display: flex;\n    overflow-x: auto;\n  }\n  .certification-tabs button {\n    min-width: 210px;\n    border-right: 1px solid #dce5f1;\n    border-bottom: 0;\n  }\n  .certification-tab-panel {\n    grid-template-columns: 1fr;\n  }\n  .certification-tab-panel .recognition-card-copy {\n    border-top: 1px solid #e5ebf3;\n    border-left: 0;\n  }\n  .award-tabs-layout {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .award-tabs {\n    display: flex;\n    overflow-x: auto;\n    padding: 0 0 10px;\n    border-right: 0;\n    border-bottom: 1px solid #d8e2ef;\n    scrollbar-width: thin;\n  }\n  .award-tabs button {\n    width: auto;\n    min-width: 92px;\n    flex: 0 0 auto;\n    text-align: center;\n  }\n  .award-tabs button::after {\n    top: auto;\n    right: 12px;\n    bottom: -11px;\n    left: 12px;\n    width: auto;\n    height: 3px;\n  }\n  .certificate-image-wrap {\n    height: 350px;\n  }\n  .company-section {\n    grid-template-columns: 1fr;\n    gap: 24px;\n    padding: 28px;\n  }\n  .company-cta {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 30px;\n  }\n}\n@media (max-width: 560px) {\n  .partner-hero-grid {\n    padding-block: 34px 22px;\n  }\n  .partner-hero-copy h1 {\n    font-size: 39px;\n  }\n  .partner-model-hero-grid .partner-hero-copy h1 {\n    width: 100%;\n    max-width: 100%;\n    font-size: clamp(18px, 4.4vw, 22px);\n    letter-spacing: -.04em;\n  }\n  .partner-hero-copy > p {\n    font-size: 15px;\n  }\n  .partner-hero-stats {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    text-align: left;\n  }\n  .partner-hero-stats span {\n    white-space: normal;\n  }\n  .partner-hero-live {\n    border-radius: 14px;\n    text-align: left;\n  }\n  .partner-hero-actions {\n    flex-direction: column;\n  }\n  .partner-hero-actions a {\n    width: 100%;\n  }\n  .company-founder-visual img {\n    width: min(100%, 280px);\n  }\n  .company-founder-copy h2 {\n    font-size: 30px;\n  }\n  .company-founder-highlights {\n    font-size: 17px;\n  }\n  .recognition-section {\n    margin-top: 26px;\n  }\n  .recognition-heading {\n    margin-bottom: 25px;\n  }\n  .certification-grid,\n  .award-grid {\n    grid-template-columns: 1fr;\n  }\n  .award-year-panel {\n    padding: 22px;\n  }\n  .certificate-image-wrap {\n    height: 390px;\n  }\n  .certification-tab-panel {\n    min-height: 0;\n  }\n  .certification-tab-panel .certificate-image-wrap {\n    height: 390px;\n    min-height: 0;\n  }\n  .award-card {\n    min-height: 0;\n  }\n}\n.team-page {\n  background: #fff;\n}\n.team-trust-strip {\n  position: relative;\n  z-index: 2;\n  border-top: 1px solid #dce7f5;\n  border-bottom: 1px solid #dce7f5;\n  background: #f5f9ff;\n}\n.team-trust-strip .wrap {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  min-height: 54px;\n  color: #526987;\n  font-size: 12px;\n}\n.team-trust-strip b {\n  color: #172f55;\n}\n.team-founder-photo-column {\n  min-width: 0;\n  text-align: center;\n}\n.team-founder-photo-column .team-founder-linkedin {\n  margin-top: 38px;\n}\n.team-founder-linkedin {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  margin: 18px 0 0;\n  padding: 9px 14px;\n  border-radius: 7px;\n  background: #0a66c2;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  text-decoration: none;\n}\n.team-founder-linkedin svg {\n  width: 18px;\n  height: 18px;\n}\n.team-founder-linkedin:hover {\n  background: #004182;\n  color: #fff;\n}\n.team-founder-linkedin:focus-visible {\n  outline: 2px solid #0a66c2;\n  outline-offset: 3px;\n}\n.team-page > .company-founder-section {\n  display: none;\n}\n.team-directory {\n  padding: 38px 0 32px 0;\n  background:\n    linear-gradient(\n      180deg,\n      #f5f9ff 0%,\n      #fff 38%);\n}\n.team-directory .team-section-heading {\n  max-width: 1200px;\n  margin-bottom: 28px;\n}\n.team-directory #team-directory-title {\n  white-space: nowrap;\n  font-size: clamp(26px, 3.2vw, 44px);\n}\n.team-directory h2 em {\n  color: #1769ff;\n  font-style: normal;\n}\n.team-tabs {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: nowrap;\n  gap: 20px;\n  overflow-x: auto;\n  padding: 4px 4px 8px;\n  margin: 0 0 34px;\n}\n.team-tabs button {\n  flex: 0 0 auto;\n  white-space: nowrap;\n  min-height: 46px;\n  padding: 12px 0;\n  border: 0;\n  border-bottom: 2px solid transparent;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  color: #52627a;\n  font: inherit;\n  font-size: 14px;\n  font-weight: 700;\n  cursor: pointer;\n  transition: color .2s ease, border-color .2s ease;\n}\n.team-tabs button:hover {\n  color: #1769ff;\n}\n.team-tabs button[aria-selected=true] {\n  border-bottom-color: #1769ff;\n  color: #1769ff;\n}\n.team-tabs button:focus-visible,\n.team-members-panel:focus-visible {\n  outline: 3px solid #1769ff;\n  outline-offset: 4px;\n}\n.team-members-panel {\n  min-height: 410px;\n  border-radius: 12px;\n}\n.team-group-heading {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 18px;\n}\n.team-group-label,\n.team-role-badge {\n  display: inline-block;\n  border-radius: 3px;\n  background: #eeeaff;\n  color: #6246ff;\n  font: 700 10px/1.4 var(--body);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n  padding: 4px 8px;\n}\n.team-group-rule {\n  flex: 1;\n  height: 1px;\n  background: #dfe4ee;\n}\n.team-group-label {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 10px;\n  font-size: 12px;\n  color: #1769ff;\n}\n.team-label-icon {\n  font-size: 16px;\n  line-height: 1;\n  letter-spacing: normal;\n  text-transform: none;\n}\n.team-group-count {\n  color: #6578a1;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.team-portrait-grid {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 24px;\n}\n.team-portrait-grid-security {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.team-portrait-card {\n  min-width: 0;\n  text-align: left;\n  border: 1px solid #d4dcf5;\n  border-radius: 11px;\n  overflow: hidden;\n  background: #fff;\n}\n.team-portrait-grid-security .team-portrait-card {\n  display: flex;\n  flex-direction: column;\n}\n.team-portrait-grid-security .team-portrait-image {\n  flex: 0 0 auto;\n}\n.team-portrait-grid-security .team-portrait-caption {\n  flex: 1;\n}\n.team-portrait-grid-security .team-portrait-caption h3 {\n  overflow-wrap: anywhere;\n}\n.team-portrait-image {\n  overflow: hidden;\n  aspect-ratio: 1;\n  border: 0;\n  border-radius: 10px 10px 0 0;\n  background: #edf4ff;\n}\n.team-portrait-placeholder {\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  color: #94afd1;\n}\n.team-portrait-placeholder svg {\n  width: 75%;\n  height: 85%;\n}\n.team-portrait-card:nth-child(4n+2) .team-portrait-image {\n  background: #edf8f4;\n}\n.team-portrait-card:nth-child(4n+3) .team-portrait-image {\n  background: #fff5e9;\n}\n.team-portrait-card:nth-child(4n+4) .team-portrait-image {\n  background: #f3effa;\n}\n.team-portrait-image img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: contain;\n  object-position: center bottom;\n  transition: transform .3s ease;\n}\n.team-portrait-card:hover .team-portrait-image img {\n  transform: scale(1.035);\n}\n.team-portrait-caption {\n  padding: 14px 12px 16px;\n}\n.team-role-badge {\n  margin-bottom: 7px;\n  font-size: 9px;\n  padding: 4px 6px;\n  color: #1769ff;\n}\n.team-portrait-caption h3 {\n  margin: 0 0 3px;\n  color: #0b1736;\n  font: 700 16px/1.3 var(--disp);\n}\n.team-portrait-caption p {\n  margin: 0;\n  color: #65738a;\n  font-size: 12px;\n  line-height: 1.5;\n}\n@media (max-width: 1000px) {\n  .team-portrait-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 760px) {\n  .team-directory {\n    padding: 24px 0 24px 0;\n  }\n  .team-directory #team-directory-title {\n    white-space: normal;\n  }\n  .team-portrait-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 28px 16px;\n  }\n  .team-tabs {\n    gap: 20px;\n    margin-bottom: 28px;\n  }\n  .team-portrait-caption h3 {\n    font-size: 16px;\n  }\n}\n@media (max-width: 420px) {\n  .team-portrait-grid {\n    grid-template-columns: 1fr;\n    max-width: 300px;\n    margin: 0 auto;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .team-portrait-image img,\n  .team-tabs button {\n    transition: none;\n  }\n  .team-portrait-card:hover .team-portrait-image img {\n    transform: none;\n  }\n}\n.team-management-section {\n  position: relative;\n  overflow: hidden;\n  padding: 17px 0 30px 0;\n  background:\n    radial-gradient(\n      260px 240px at -2% 0%,\n      rgba(191, 223, 255, .42),\n      transparent 72%),\n    radial-gradient(\n      220px 240px at 101% 100%,\n      rgba(224, 239, 255, .52),\n      transparent 72%),\n    #fff;\n}\n.team-management-section .team-section-heading {\n  max-width: 900px;\n  margin-bottom: 34px;\n}\n.team-management-section .team-section-heading > span {\n  display: inline-block;\n  color: #287be7;\n  font-size: 20px;\n  font-weight: 800;\n  letter-spacing: .03em;\n  text-transform: uppercase;\n}\n.team-management-section .team-section-heading > span::after {\n  display: block;\n  width: 62px;\n  height: 3px;\n  margin: 12px auto 0;\n  border-radius: 99px;\n  background: #267bf0;\n  content: "";\n}\n.team-management-section .team-section-heading h2 {\n  margin-top: 12px;\n  font-size: clamp(34px, 4.2vw, 55px);\n  letter-spacing: -.04em;\n}\n.team-management-section .team-section-heading p {\n  margin-top: 8px;\n  font-size: 18px;\n}\n.team-management-section .team-grid-four {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 24px;\n}\n.team-management-section .team-grid .team-card {\n  padding: 22px 20px 24px;\n  border: 1px solid #e0ebf9;\n  border-radius: 22px;\n  background: rgba(255, 255, 255, .82);\n  box-shadow: 0 14px 34px rgba(21, 89, 164, .06);\n}\n.team-management-section .team-grid .team-photo {\n  width: 218px;\n  height: 218px;\n  margin: 0 auto 18px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: #dcecff;\n  box-shadow: inset 0 0 0 10px rgba(255, 255, 255, .38);\n}\n.team-management-section .team-grid .team-card:nth-child(2) .team-photo {\n  background: #d9f5ed;\n}\n.team-management-section .team-grid .team-card:nth-child(3) .team-photo {\n  background: #ffecd2;\n}\n.team-management-section .team-grid .team-card:nth-child(4) .team-photo {\n  background: #e9e1ff;\n}\n.team-management-section .team-grid .team-card h3 {\n  margin-bottom: 13px;\n  font-size: 22px;\n}\n.team-management-section .team-grid .team-card h3::after {\n  display: block;\n  width: 54px;\n  height: 3px;\n  margin: 11px auto 0;\n  border-radius: 99px;\n  background: #287be7;\n  content: "";\n}\n.team-management-section .team-grid .team-card:nth-child(2) h3::after {\n  background: #19b777;\n}\n.team-management-section .team-grid .team-card:nth-child(3) h3::after {\n  background: #f39a26;\n}\n.team-management-section .team-grid .team-card:nth-child(4) h3::after {\n  background: #6540e8;\n}\n.team-management-section .team-grid .team-card p {\n  max-width: 230px;\n  margin: 0 auto;\n  font-size: 16px;\n  line-height: 1.45;\n}\n.team-reference-row {\n  position: relative;\n  overflow: hidden;\n  padding: 34px 0 60px;\n  background:\n    radial-gradient(\n      260px 240px at -2% 0%,\n      rgba(191, 223, 255, .42),\n      transparent 72%),\n    radial-gradient(\n      220px 240px at 101% 100%,\n      rgba(224, 239, 255, .52),\n      transparent 72%),\n    #fff;\n}\n.team-reference-row .team-section-heading {\n  max-width: 900px;\n  margin-bottom: 34px;\n}\n.team-reference-row .team-section-heading > span {\n  display: inline-block;\n  color: #287be7;\n  font-size: 20px;\n  font-weight: 800;\n  letter-spacing: .03em;\n  text-transform: uppercase;\n}\n.team-reference-row .team-section-heading > span::after {\n  display: block;\n  width: 62px;\n  height: 3px;\n  margin: 12px auto 0;\n  border-radius: 99px;\n  background: #287be7;\n  content: "";\n}\n.team-reference-row .team-section-heading h2 {\n  margin-top: 12px;\n  font-size: clamp(34px, 4.2vw, 55px);\n  letter-spacing: -.04em;\n}\n.team-reference-row .team-section-heading p {\n  margin-top: 8px;\n  font-size: 18px;\n}\n.team-reference-row .team-grid .team-card {\n  padding: 22px 20px 24px;\n  border: 1px solid #e0ebf9;\n  border-radius: 22px;\n  background: rgba(255, 255, 255, .82);\n  box-shadow: 0 14px 34px rgba(21, 89, 164, .06);\n}\n.team-reference-row .team-grid .team-photo {\n  width: 218px;\n  height: 218px;\n  margin: 0 auto 18px;\n  border-radius: 50%;\n  object-fit: cover;\n  background: #dcecff;\n  box-shadow: inset 0 0 0 10px rgba(255, 255, 255, .38);\n}\n.team-reference-row .team-grid .team-card:nth-child(2) .team-photo {\n  background: #d9f5ed;\n}\n.team-reference-row .team-grid .team-card:nth-child(3) .team-photo {\n  background: #ffecd2;\n}\n.team-reference-row .team-grid .team-card:nth-child(4) .team-photo {\n  background: #e9e1ff;\n}\n.team-reference-row .team-grid .team-card h3 {\n  margin-bottom: 13px;\n  font-size: 22px;\n}\n.team-reference-row .team-grid .team-card h3::after {\n  display: block;\n  width: 54px;\n  height: 3px;\n  margin: 11px auto 0;\n  border-radius: 99px;\n  background: #287be7;\n  content: "";\n}\n.team-reference-row .team-grid .team-card:nth-child(2) h3::after {\n  background: #19b777;\n}\n.team-reference-row .team-grid .team-card:nth-child(3) h3::after {\n  background: #f39a26;\n}\n.team-reference-row .team-grid .team-card:nth-child(4) h3::after {\n  background: #6540e8;\n}\n.team-reference-row .team-grid .team-card p {\n  max-width: 230px;\n  margin: 0 auto;\n  font-size: 16px;\n  line-height: 1.45;\n}\n.team-founder-hero {\n  position: relative;\n  overflow: hidden;\n  padding: 44px 0 62px;\n  background:\n    radial-gradient(\n      600px 360px at 9% 28%,\n      rgba(82, 182, 255, .18),\n      transparent 72%),\n    radial-gradient(\n      520px 300px at 97% 4%,\n      rgba(218, 235, 255, .7),\n      transparent 72%),\n    linear-gradient(\n      135deg,\n      #fff 0%,\n      #f8fbff 54%,\n      #fff 100%);\n}\n.team-founder-hero::after {\n  position: absolute;\n  right: -8%;\n  bottom: -58%;\n  width: 45%;\n  height: 80%;\n  border-radius: 50%;\n  background: rgba(216, 235, 255, .38);\n  content: "";\n  filter: blur(24px);\n}\n.team-founder-orb {\n  display: none;\n}\n.team-founder-hero-grid {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(420px, .88fr) minmax(0, 1.32fr);\n  gap: 42px;\n  align-items: center;\n  max-width: 1320px;\n}\n.team-founder-portrait {\n  position: relative;\n  min-height: 620px;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  background:\n    linear-gradient(\n      145deg,\n      rgba(239, 248, 255, .9),\n      rgba(255, 255, 255, .45));\n}\n.team-founder-portrait::before {\n  position: absolute;\n  bottom: 52px;\n  width: 355px;\n  height: 500px;\n  border-radius: 48% 52% 45% 55%;\n  background:\n    linear-gradient(\n      145deg,\n      #d9f2ff 0%,\n      #1375e8 58%,\n      #063a9a 100%);\n  content: "";\n  transform: rotate(-7deg);\n  box-shadow: 0 26px 55px rgba(22, 103, 208, .22);\n}\n.team-founder-portrait-ring {\n  display: none;\n  position: absolute;\n  bottom: 34px;\n  width: 410px;\n  height: 540px;\n  border: 2px solid #2080ee;\n  border-radius: 50%;\n  transform: rotate(17deg);\n}\n.team-founder-dots {\n  position: absolute;\n  z-index: 0;\n  left: 24px;\n  bottom: 225px;\n  width: 70px;\n  height: 70px;\n  background-image: radial-gradient(#2683ee 1.5px, transparent 1.5px);\n  background-size: 13px 13px;\n  opacity: .9;\n}\n.team-founder-portrait > img {\n  position: relative;\n  z-index: 1;\n  display: block;\n  width: min(100%, 430px);\n  max-height: 620px;\n  object-fit: contain;\n  object-position: bottom center;\n  filter: drop-shadow(0 24px 20px rgba(7, 39, 92, .22));\n}\n.team-proof-badge {\n  position: absolute;\n  z-index: 2;\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 178px;\n  padding: 17px 19px;\n  border: 1px solid rgba(210, 226, 248, .9);\n  border-radius: 18px;\n  background: rgba(255, 255, 255, .94);\n  box-shadow: 0 16px 34px rgba(26, 81, 153, .14);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.team-proof-badge::before {\n  display: grid;\n  width: 27px;\n  height: 27px;\n  place-items: center;\n  border-radius: 9px;\n  background: #e4f0ff;\n  color: #126be0;\n  content: "\\f0\\178\\8f\\2020";\n  font-size: 14px;\n}\n.team-proof-business::before {\n  content: "\\f0\\178\\2018\\a5";\n}\n.team-proof-badge strong {\n  color: #126be0;\n  font-size: 27px;\n  line-height: 1;\n}\n.team-proof-badge span {\n  color: #243754;\n  font-size: 14px;\n  line-height: 1.28;\n}\n.team-proof-experience {\n  top: 34px;\n  left: -8px;\n}\n.team-proof-business {\n  right: -4px;\n  bottom: 110px;\n}\n.team-portrait-footer {\n  position: absolute;\n  right: auto;\n  bottom: -16px;\n  left: 50%;\n  color: #7aa7dc;\n  font: 800 10px/1 var(--mono);\n  letter-spacing: .18em;\n  text-transform: uppercase;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n.team-portrait-footer b {\n  margin: 0 8px;\n  color: #b0c9e8;\n}\n.team-founder-content {\n  min-width: 0;\n  padding: 12px 0 0;\n}\n.team-founder-eyebrow {\n  color: #126be0;\n  font: 800 13px/1 var(--mono);\n  letter-spacing: .2em;\n  text-transform: uppercase;\n}\n.team-founder-eyebrow::after {\n  display: inline-block;\n  width: 112px;\n  margin-left: 18px;\n  border-top: 2px solid #86b9f3;\n  content: "";\n  vertical-align: middle;\n}\n.team-founder-content h1 {\n  margin: 25px 0 3px;\n  color: #071d45;\n  font: 800 clamp(44px, 5vw, 72px)/1.02 var(--disp);\n  letter-spacing: -.05em;\n}\n.team-founder-content h2 {\n  margin: 0;\n  color: #126be0;\n  font: 800 clamp(22px, 2.4vw, 34px)/1.2 var(--disp);\n}\n.team-founder-company {\n  margin: 4px 0 22px;\n  color: #112951;\n  font-size: 20px;\n  line-height: 1.35;\n}\n.team-capabilities {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 11px 18px;\n  margin-bottom: 24px;\n  color: #233856;\n  font-size: 15px;\n}\n.team-capabilities span {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.team-capabilities span + span {\n  padding-left: 18px;\n  border-left: 1px solid #9eb5d2;\n}\n.team-capabilities i {\n  display: grid;\n  width: 27px;\n  height: 27px;\n  place-items: center;\n  border-radius: 8px;\n  background: #e7f1ff;\n  color: #126be0;\n  font: 800 10px/1 var(--mono);\n  font-style: normal;\n}\n.team-founder-lead {\n  max-width: 700px;\n  margin: 0 0 16px;\n  color: #126be0;\n  font: 800 clamp(21px, 2.1vw, 30px)/1.25 var(--disp);\n}\n.team-founder-story {\n  max-width: 780px;\n  margin: 0 0 13px;\n  color: #536681;\n  font-size: 16px;\n  line-height: 1.62;\n}\n.team-founder-story-last {\n  margin-bottom: 24px;\n}\n.team-impact-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.team-impact-grid article {\n  display: flex;\n  min-height: 105px;\n  flex-direction: column;\n  justify-content: center;\n  padding: 14px 16px;\n  border: 1px solid #c9def8;\n  border-radius: 15px;\n  background: rgba(255, 255, 255, .78);\n}\n.team-impact-grid strong {\n  color: #126be0;\n  font: 800 clamp(22px, 2vw, 30px)/1 var(--disp);\n}\n.team-impact-grid span {\n  margin-top: 7px;\n  color: #2f4361;\n  font-size: 12px;\n  line-height: 1.25;\n}\n.team-certificate-link {\n  align-self: flex-start;\n  margin-top: 10px;\n  padding: 6px 9px;\n  border: 1px solid #c9def8;\n  border-radius: 6px;\n  background: #edf5ff;\n  color: #0755b8;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 1.4;\n  text-decoration: none;\n}\n.team-certificate-link:hover {\n  background: #dcecff;\n  border-color: #126be0;\n}\n.team-certificate-link:focus-visible {\n  outline: 2px solid #126be0;\n  outline-offset: 3px;\n}\n.team-hero {\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  min-height: 570px;\n  align-items: center;\n  padding: 52px 0 56px;\n  color: #fff;\n  isolation: isolate;\n  background:\n    radial-gradient(\n      900px 420px at 80% -20%,\n      #0e3a78 0%,\n      #061a39 60%);\n}\n.team-hero::before {\n  display: none;\n}\n.team-hero > .wrap {\n  position: relative;\n  z-index: 3;\n  width: 100%;\n  max-width: 1240px;\n}\n.team-hero-grid {\n  position: relative;\n  z-index: 2;\n  display: block;\n  min-height: 462px;\n}\n.team-hero-copy {\n  width: 58%;\n  max-width: 680px;\n  padding-top: 74px;\n}\n.team-hero-eyebrow {\n  display: inline-block;\n  margin-bottom: 16px;\n  color: #67b4ff;\n  font-size: 12px;\n  font-weight: 800;\n  letter-spacing: .18em;\n  text-transform: uppercase;\n}\n.team-crumb,\n.team-kicker,\n.team-section-label {\n  display: inline-flex;\n  align-items: center;\n  text-transform: uppercase;\n  letter-spacing: .14em;\n  font-size: 11px;\n  font-weight: 800;\n}\n.team-crumb {\n  margin-bottom: 14px;\n  color: rgba(207, 227, 255, .72);\n}\n.team-kicker {\n  margin-bottom: 14px;\n  padding: 6px 11px;\n  border: 1px solid rgba(133, 185, 255, .34);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .08);\n  color: #7bc0ff;\n}\n.team-hero h1 {\n  max-width: 560px;\n  margin: 0 0 20px;\n  color: #fff;\n  font-size: clamp(32px, 4.4vw, 48px);\n  line-height: 1.12;\n  letter-spacing: -.02em;\n}\n.team-hero h1 em {\n  color: #63b4ff;\n  font-style: normal;\n}\n.team-lead {\n  max-width: 450px;\n  margin: 0;\n  color: #d7e4f3;\n  font-size: 17px;\n  line-height: 1.6;\n}\n.team-actions {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  margin-top: 42px;\n  flex-wrap: wrap;\n}\n.team-secondary-link {\n  color: #dcecff;\n  font-weight: 700;\n  text-decoration: none;\n}\n.team-secondary-link:hover {\n  text-decoration: underline;\n}\n.team-hero-panel {\n  position: relative;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 48%;\n  min-height: 0;\n  overflow: visible;\n  border: 0;\n  background: transparent;\n  filter: drop-shadow(0 28px 36px rgba(3, 17, 43, .3));\n}\n.team-hero-panel::before {\n  position: absolute;\n  top: 18%;\n  left: 18%;\n  width: 64%;\n  height: 54%;\n  border-radius: 50%;\n  background: #3d9cff;\n  content: "";\n  filter: blur(70px);\n  opacity: .32;\n  animation: team-art-glow 5s ease-in-out infinite;\n}\n.team-art-dot {\n  position: absolute;\n  pointer-events: none;\n}\n.team-hero-panel img {\n  position: relative;\n  z-index: 1;\n  display: block;\n  padding: 0;\n  object-fit: contain;\n  animation: team-art-float 6s ease-in-out infinite;\n}\n.team-hero-secondary-image {\n  position: absolute !important;\n  z-index: 1 !important;\n  top: 8%;\n  right: 5%;\n  width: 88% !important;\n  max-width: 500px;\n  height: auto;\n  filter: drop-shadow(0 24px 26px rgba(2, 18, 53, .24));\n  animation: team-secondary-float 7s ease-in-out infinite !important;\n}\n.team-highlight-strip {\n  position: relative;\n  z-index: 2;\n  max-width: 560px;\n  margin-top: 28px;\n  background: transparent;\n}\n.team-highlight-list {\n  display: grid;\n  grid-template-columns: repeat(3, max-content);\n  align-items: center;\n  justify-content: start;\n  gap: 12px 26px;\n  min-height: 64px;\n  color: #e6f2ff;\n  font-size: 12px;\n  font-weight: 700;\n}\n.team-highlight-list span {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  white-space: nowrap;\n}\n.team-highlight-list span::before {\n  display: grid;\n  width: 15px;\n  height: 15px;\n  place-items: center;\n  border-radius: 50%;\n  background: #1475ee;\n  color: #fff;\n  content: "\\2713";\n  font-size: 10px;\n  font-weight: 900;\n}\n@keyframes team-art-float {\n  0%, 100% {\n    transform: scale(1.08) translateY(0);\n  }\n  50% {\n    transform: scale(1.08) translateY(-9px);\n  }\n}\n@keyframes team-secondary-float {\n  0%, 100% {\n    transform: translateY(0) rotate(1deg);\n  }\n  50% {\n    transform: translateY(-12px) rotate(-1deg);\n  }\n}\n@keyframes team-art-glow {\n  0%, 100% {\n    transform: scale(.92);\n    opacity: .17;\n  }\n  50% {\n    transform: scale(1.06);\n    opacity: .28;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .team-hero-panel img,\n  .team-hero-panel::before {\n    animation: none;\n  }\n  .team-hero-secondary-image {\n    animation: none !important;\n  }\n}\n.team-founder-section,\n.team-section,\n.team-contact-band {\n  padding: 21px 0 0 0;\n}\n.team-founder-grid,\n.team-contact-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1.1fr) minmax(320px, .9fr);\n  gap: 24px;\n  align-items: stretch;\n}\n.team-founder-copy,\n.team-founder-panel,\n.team-value-card,\n.team-card,\n.team-stat-card,\n.team-contact-card {\n  border: 1px solid #dfe6f1;\n  border-radius: 20px;\n  background: #fff;\n  box-shadow: 0 16px 42px rgba(14, 42, 85, .07);\n}\n.team-founder-copy,\n.team-founder-panel {\n  padding: 28px;\n}\n.team-section-heading {\n  max-width: 760px;\n  margin: 0 auto 30px;\n  text-align: center;\n}\n.team-section-heading > span,\n.team-section-label {\n  color: #1769ff;\n}\n.team-section-heading h2,\n.team-founder-copy h2,\n.team-commitment-copy h2,\n.team-contact-copy h2 {\n  margin: 10px 0 0;\n  color: #0b1736;\n  font-size: clamp(28px, 4vw, 44px);\n  line-height: 1.12;\n}\n.team-section-heading p,\n.team-founder-copy p,\n.team-contact-copy p,\n.team-commitment-copy p {\n  color: #55657b;\n  font-size: 16px;\n  line-height: 1.7;\n}\n.team-founder-role {\n  margin-top: 8px;\n  color: #1769ff;\n  font-weight: 700;\n}\n.team-founder-note {\n  padding-left: 16px;\n  border-left: 3px solid #1769ff;\n}\n.team-founder-panel {\n  display: grid;\n  grid-template-columns: 84px minmax(0, 1fr);\n  gap: 18px;\n  align-items: start;\n  background:\n    linear-gradient(\n      180deg,\n      #f3f7fd,\n      #fff);\n}\n.team-founder-avatar,\n.team-avatar {\n  display: grid;\n  place-items: center;\n  border-radius: 20px;\n  font-weight: 800;\n  letter-spacing: .08em;\n}\n.team-founder-avatar {\n  width: 84px;\n  height: 84px;\n  background:\n    linear-gradient(\n      135deg,\n      #1769ff,\n      #19a568);\n  color: #fff;\n  font-size: 22px;\n}\n.team-founder-panel strong {\n  display: block;\n  margin-bottom: 8px;\n  color: #0b1736;\n  font-size: 17px;\n}\n.team-founder-panel p {\n  margin: 0;\n  color: #55657b;\n  line-height: 1.7;\n}\n.team-grid {\n  display: grid;\n  gap: 24px;\n}\n.team-grid-four {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.team-grid-three {\n  grid-template-columns: repeat(3, minmax(180px, 260px));\n  justify-content: center;\n  gap: 40px;\n}\n.team-grid-two {\n  grid-template-columns: repeat(2, minmax(180px, 280px));\n  justify-content: center;\n  gap: 40px;\n}\n.team-card,\n.team-value-card,\n.team-stat-card,\n.team-contact-card {\n  padding: 24px;\n}\n.team-avatar {\n  width: 62px;\n  height: 62px;\n  margin-bottom: 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #e8f1ff,\n      #effaf5);\n  color: #0b1736;\n  font-size: 18px;\n}\n.team-photo {\n  display: block;\n  object-fit: cover;\n}\n.team-card h3,\n.team-value-card h3 {\n  margin: 0 0 8px;\n  color: #0b1736;\n  font-size: 18px;\n  line-height: 1.25;\n}\n.team-card p,\n.team-value-card p {\n  margin: 0;\n  color: #65738a;\n  font-size: 14px;\n  line-height: 1.65;\n}\n.team-card-small {\n  padding: 22px;\n}\n.team-grid .team-card {\n  padding: 0;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  text-align: center;\n}\n.team-grid .team-photo {\n  width: min(100%, 196px);\n  height: auto;\n  aspect-ratio: 1;\n  margin: 0 auto 14px;\n  border-radius: 50%;\n}\n.team-grid .team-card h3 {\n  margin: 0 0 5px;\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.25;\n}\n.team-grid .team-card p {\n  max-width: 220px;\n  margin: 0 auto;\n  font-size: 14px;\n  line-height: 1.45;\n}\n.team-values {\n  padding-top: 39px;\n}\n.team-commitment-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr);\n  gap: 24px;\n  align-items: start;\n}\n.team-commitment-copy {\n  container-type: inline-size;\n  padding: 32px;\n  border-radius: 24px;\n  background:\n    radial-gradient(\n      circle at top right,\n      rgba(23, 105, 255, .08),\n      transparent 38%),\n    linear-gradient(\n      180deg,\n      #fff,\n      #f5f8fd);\n  border: 1px solid #dfe6f1;\n}\n.team-commitment-copy h2 {\n  font-size: clamp(18px, 4.5cqw, 42px);\n  white-space: nowrap;\n}\n@media (max-width: 600px) {\n  .team-commitment-copy h2 {\n    font-size: 26px;\n    white-space: normal;\n  }\n}\n.team-stats-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 16px;\n}\n.team-stat-card {\n  display: grid;\n  gap: 6px;\n  align-content: start;\n}\n.team-stat-card strong {\n  color: #1769ff;\n  font-size: 34px;\n  line-height: 1;\n}\n.team-stat-card span {\n  color: #516276;\n  font-size: 14px;\n  line-height: 1.5;\n}\n.team-contact-band {\n  padding: 39px 0 42px 0;\n}\n.team-contact-copy {\n  padding: 32px;\n  border-radius: 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #0b234e,\n      #1057b7);\n  color: #fff;\n}\n.team-contact-copy h2,\n.team-contact-copy p {\n  color: inherit;\n}\n.team-contact-cards {\n  display: grid;\n  gap: 16px;\n}\n.team-contact-card {\n  display: block;\n  padding: 22px 24px;\n  color: inherit;\n  text-decoration: none;\n  transition:\n    transform .2s ease,\n    box-shadow .2s ease,\n    border-color .2s ease;\n}\n.team-contact-card:hover {\n  transform: translateY(-3px);\n  border-color: #b8cce8;\n  box-shadow: 0 22px 44px rgba(14, 42, 85, .12);\n}\n.team-contact-card span {\n  display: block;\n  color: #1769ff;\n  font-size: 11px;\n  font-weight: 800;\n  letter-spacing: .12em;\n  text-transform: uppercase;\n}\n.team-contact-card strong {\n  display: block;\n  margin: 7px 0 7px;\n  color: #0b1736;\n  font-size: 18px;\n}\n.team-contact-card p {\n  margin: 0;\n  color: #65738a;\n  font-size: 14px;\n  line-height: 1.6;\n}\n@media (max-width: 1120px) {\n  .team-founder-grid,\n  .team-commitment-grid,\n  .team-contact-grid {\n    grid-template-columns: 1fr;\n  }\n  .team-grid-four {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .team-grid-three {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .team-hero-copy {\n    width: 56%;\n  }\n  .team-hero-panel {\n    width: 46%;\n  }\n  .team-hero-secondary-image {\n    right: 0;\n    width: 96% !important;\n  }\n}\n@media (max-width: 800px) {\n  .team-hero {\n    min-height: 0;\n    padding: 70px 0 56px;\n  }\n  .team-hero-grid {\n    display: grid;\n    min-height: 0;\n    gap: 22px;\n  }\n  .team-hero-copy {\n    width: 100%;\n    max-width: none;\n    padding-top: 0;\n  }\n  .team-highlight-strip {\n    margin-top: 18px;\n  }\n  .team-highlight-list {\n    grid-template-columns: repeat(2, max-content);\n    gap: 12px 20px;\n    padding-top: 10px;\n    padding-bottom: 10px;\n  }\n  .team-founder-panel {\n    grid-template-columns: 1fr;\n  }\n  .team-hero-panel {\n    position: relative;\n    top: auto;\n    right: auto;\n    bottom: auto;\n    width: 100%;\n    min-height: 300px;\n    max-width: 540px;\n    margin: 12px auto 0;\n  }\n  .team-hero-secondary-image {\n    top: 0;\n    right: 0;\n    width: 96% !important;\n    max-width: none;\n  }\n  .team-founder-avatar {\n    width: 72px;\n    height: 72px;\n  }\n  .team-grid-four,\n  .team-grid-three,\n  .team-grid-two {\n    grid-template-columns: 1fr;\n  }\n  .team-stats-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 560px) {\n  .team-hero h1 {\n    font-size: 36px;\n  }\n  .team-highlight-list {\n    grid-template-columns: 1fr;\n  }\n  .team-actions {\n    gap: 12px;\n    margin-top: 32px;\n  }\n  .team-contact-copy,\n  .team-founder-copy,\n  .team-founder-panel,\n  .team-commitment-copy {\n    padding: 24px;\n  }\n  .team-stats-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 900px) {\n  .team-management-section .team-grid-four {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .team-management-section .team-grid .team-photo {\n    width: 190px;\n    height: 190px;\n  }\n}\n@media (max-width: 560px) {\n  .team-management-section {\n    padding: 28px 0 22px 0;\n  }\n  .team-management-section .team-section-heading > span {\n    font-size: 16px;\n  }\n  .team-management-section .team-section-heading h2 {\n    font-size: 34px;\n  }\n  .team-management-section .team-section-heading p {\n    font-size: 15px;\n  }\n  .team-management-section .team-grid-four {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .team-reference-row {\n    padding: 28px 0 44px;\n  }\n  .team-reference-row .team-section-heading > span {\n    font-size: 16px;\n  }\n  .team-reference-row .team-section-heading h2 {\n    font-size: 34px;\n  }\n  .team-reference-row .team-section-heading p {\n    font-size: 15px;\n  }\n}\n@media (max-width: 1120px) {\n  .team-founder-hero-grid {\n    grid-template-columns: minmax(340px, .82fr) minmax(0, 1.18fr);\n    gap: 28px;\n  }\n  .team-founder-portrait {\n    min-height: 560px;\n  }\n  .team-founder-portrait::before {\n    width: 310px;\n    height: 450px;\n  }\n  .team-founder-portrait-ring {\n    width: 360px;\n    height: 490px;\n  }\n  .team-founder-portrait > img {\n    max-height: 560px;\n  }\n  .team-proof-experience {\n    left: 0;\n  }\n  .team-proof-business {\n    right: 0;\n  }\n}\n@media (max-width: 800px) {\n  .team-trust-strip .wrap {\n    flex-wrap: wrap;\n    justify-content: center;\n    padding: 12px 16px;\n  }\n  .team-founder-hero {\n    padding: 20px 0 38px;\n  }\n  .team-founder-hero-grid {\n    grid-template-columns: 1fr;\n    gap: 12px;\n  }\n  .team-founder-portrait {\n    min-height: 490px;\n    max-width: 560px;\n    margin: 0 auto;\n    width: 100%;\n  }\n  .team-founder-portrait::before {\n    bottom: 42px;\n    width: 285px;\n    height: 390px;\n  }\n  .team-founder-portrait-ring {\n    bottom: 28px;\n    width: 330px;\n    height: 425px;\n  }\n  .team-founder-portrait > img {\n    max-height: 500px;\n  }\n  .team-founder-content {\n    padding-top: 12px;\n  }\n  .team-founder-content h1 {\n    margin-top: 20px;\n    font-size: clamp(40px, 10vw, 58px);\n  }\n  .team-impact-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 560px) {\n  .team-founder-hero {\n    padding-top: 10px;\n  }\n  .team-founder-portrait {\n    min-height: 405px;\n  }\n  .team-founder-portrait::before {\n    bottom: 32px;\n    width: 230px;\n    height: 320px;\n  }\n  .team-founder-portrait-ring {\n    bottom: 21px;\n    width: 270px;\n    height: 350px;\n  }\n  .team-founder-portrait > img {\n    max-height: 420px;\n  }\n  .team-proof-badge {\n    min-width: 0;\n    gap: 7px;\n    padding: 10px;\n    border-radius: 13px;\n  }\n  .team-proof-badge::before {\n    width: 20px;\n    height: 20px;\n    font-size: 10px;\n  }\n  .team-proof-badge strong {\n    font-size: 20px;\n  }\n  .team-proof-badge span {\n    font-size: 10px;\n  }\n  .team-proof-experience {\n    top: 28px;\n    left: -2px;\n  }\n  .team-proof-business {\n    right: -2px;\n    bottom: 70px;\n  }\n  .team-founder-dots {\n    left: 8px;\n    bottom: 175px;\n    width: 48px;\n    height: 48px;\n    background-size: 10px 10px;\n  }\n  .team-portrait-footer {\n    right: auto;\n    bottom: -10px;\n    left: 50%;\n    font-size: 7px;\n    letter-spacing: .08em;\n  }\n  .team-portrait-footer b {\n    margin: 0 4px;\n  }\n  .team-founder-eyebrow {\n    font-size: 10px;\n    letter-spacing: .13em;\n  }\n  .team-founder-eyebrow::after {\n    width: 45px;\n    margin-left: 10px;\n  }\n  .team-founder-company {\n    font-size: 16px;\n  }\n  .team-capabilities {\n    gap: 10px;\n    font-size: 13px;\n  }\n  .team-capabilities span + span {\n    padding-left: 10px;\n  }\n  .team-capabilities i {\n    width: 22px;\n    height: 22px;\n  }\n  .team-founder-lead {\n    font-size: 20px;\n  }\n  .team-founder-story {\n    font-size: 14px;\n    line-height: 1.6;\n  }\n}\n.certificate-text-preview {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  min-height: 360px;\n  padding: 32px;\n  text-align: center;\n  background:\n    linear-gradient(\n      145deg,\n      #f8fbff,\n      #edf4ff);\n  border-radius: 20px 0 0 20px;\n  color: #041e42;\n}\n.certificate-text-preview strong {\n  font-size: 30px;\n  line-height: 1.3;\n}\n.certificate-text-preview span {\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n  color: #1565d8;\n}\n.certification-buddha-strip {\n  margin-top: 40px;\n}\n.certification-buddha-strip h2 {\n  margin: 0 0 5px;\n  color: #fff;\n  font-size: 22px;\n  line-height: 1.3;\n}\n.certification-buddha-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 26px;\n}\n.certification-buddha-actions .btn-ghost {\n  border-color: rgba(255, 255, 255, .4);\n  color: #fff;\n}\n@media (max-width: 700px) {\n  .certification-buddha-actions .btn {\n    flex: 1 1 145px;\n  }\n}\n.people-banner {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  background: #06234a;\n  color: #fff;\n  min-height: 440px;\n}\n.people-team-animation {\n  width: 46%;\n  margin-left: auto;\n  flex: 0 0 46%;\n  pointer-events: none;\n}\n.people-team-animation svg {\n  display: block;\n  width: 100%;\n  height: auto;\n  overflow: visible;\n}\n.people-team-animation {\n  position: relative;\n  filter: drop-shadow(0 20px 24px #000b2240);\n}\n.people-team-animation::before {\n  content: "";\n  position: absolute;\n  inset: 6% 3%;\n  background:\n    radial-gradient(\n      ellipse,\n      #258ffc26,\n      transparent 70%);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.team-person {\n  filter: drop-shadow(0 8px 7px #00172f55);\n}\n.team-laptop {\n  filter: drop-shadow(0 8px 12px #00aaff55);\n}\n.team-cloud {\n  filter: drop-shadow(0 0 10px #44baff66);\n}\n.team-badge {\n  filter: drop-shadow(0 8px 12px #000d2855);\n}\n.team-particles {\n  animation: team-status 5s ease-in-out infinite;\n}\n.team-brand {\n  fill: #fff;\n  font: 700 22px system-ui, sans-serif;\n}\n.team-label {\n  fill: #edf7ff;\n  font: 600 11px system-ui, sans-serif;\n}\n.team-detail {\n  fill: #9ec5e7;\n  font: 8px system-ui, sans-serif;\n}\n.team-caption {\n  fill: #b2d3f0;\n  font: 11px system-ui, sans-serif;\n  letter-spacing: .5px;\n}\n.team-network,\n.team-connections {\n  animation: team-flow 18s linear infinite;\n}\n.team-badge,\n.team-cloud {\n  animation: team-float 6s ease-in-out infinite;\n}\n.badge-right {\n  animation-delay: -3s;\n}\n.team-cloud {\n  animation-delay: -1.5s;\n}\n.team-code {\n  stroke-dasharray: 90;\n  animation: team-code-draw 5s ease-in-out infinite;\n}\n.team-live {\n  animation: team-status 3s ease-in-out infinite;\n}\n@keyframes team-flow {\n  to {\n    stroke-dashoffset: -180;\n  }\n}\n@keyframes team-float {\n  50% {\n    transform: translateY(-8px);\n  }\n}\n@keyframes team-code-draw {\n  0% {\n    stroke-dashoffset: 90;\n    opacity: .3;\n  }\n  50%, 90% {\n    stroke-dashoffset: 0;\n    opacity: 1;\n  }\n  100% {\n    stroke-dashoffset: 0;\n    opacity: .3;\n  }\n}\n@keyframes team-status {\n  50% {\n    opacity: .3;\n  }\n}\n@media (max-width: 1100px) and (min-width: 761px) {\n  .people-team-animation {\n    width: 40%;\n    flex-basis: 40%;\n    margin-left: 3%;\n  }\n}\n@media (max-width: 760px) {\n  .team-page .people-banner-inner {\n    padding-bottom: 24px;\n  }\n  .people-team-animation {\n    width: 100%;\n    max-width: 540px;\n    margin: 24px auto 0;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .people-team-animation * {\n    animation: none !important;\n  }\n}\n.people-banner-shade {\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  background:\n    linear-gradient(\n      90deg,\n      rgba(3, 25, 57, .8),\n      rgba(3, 25, 57, .5) 39%,\n      transparent 66%);\n}\n.people-banner-inner {\n  position: relative;\n  min-height: 440px;\n  display: flex;\n  align-items: center;\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.people-banner-copy {\n  width: 51%;\n  max-width: 610px;\n}\n.people-banner-crumb {\n  color: #57b5ff;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 2.5px;\n  text-transform: uppercase;\n  margin-bottom: 26px;\n}\n.people-banner-crumb a {\n  color: inherit;\n  text-decoration: none;\n}\n.people-banner-eyebrow {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  color: #bad9f5;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 3px;\n  text-transform: uppercase;\n  margin-bottom: 18px;\n}\n.people-banner-eyebrow span {\n  width: 88px;\n  height: 2px;\n  background: #319fff;\n}\n.people-banner h1 {\n  font-family: var(--disp);\n  font-size: clamp(34px, 3.2vw, 50px);\n  font-weight: 800;\n  line-height: 1.06;\n  letter-spacing: -1.5px;\n  color: #fff;\n  margin: 0 0 15px;\n}\n.people-banner h1 em {\n  color: #42a5ff;\n  font-style: normal;\n}\n.people-banner-copy > p {\n  max-width: 480px;\n  color: #c1d2ea;\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0 0 20px;\n}\n.people-banner-strengths {\n  display: flex;\n  gap: 17px;\n  flex-wrap: wrap;\n  margin-bottom: 20px;\n}\n.people-banner-strengths > span {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.people-banner-strengths i {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border: 2px solid #319fff;\n  border-radius: 50%;\n  color: #319fff;\n  font-size: 22px;\n  font-style: normal;\n}\n.people-banner-actions {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  flex-wrap: wrap;\n}\n.people-banner-actions .btn {\n  background:\n    linear-gradient(\n      110deg,\n      #ff9144,\n      #ff7900);\n  border: 0;\n  color: #fff;\n  padding: 14px 25px;\n  border-radius: 7px;\n}\n.people-banner-story {\n  color: #b5c9e2;\n  font-size: 14px;\n  padding-bottom: 5px;\n  border-bottom: 1px solid #42a5ff;\n  text-decoration: none;\n}\n.people-banner-note {\n  position: absolute;\n  right: 0;\n  top: 45px;\n  color: #fff;\n  font: italic 24px/1.3 Georgia, serif;\n  text-align: center;\n  transform: rotate(-9deg);\n  text-shadow: 0 2px 8px #06234a;\n}\n.people-banner-purpose {\n  position: absolute;\n  right: 0;\n  bottom: 115px;\n  padding: 22px 25px;\n  border-radius: 12px;\n  background: #edf6ff;\n  color: #15345d;\n  font-size: 14px;\n  line-height: 1.65;\n  font-weight: 700;\n  box-shadow: 0 12px 30px #06234a20;\n}\n.people-banner-purpose span {\n  display: block;\n  width: 32px;\n  height: 2px;\n  background: #1582ff;\n  margin-top: 12px;\n}\n#team-directory,\n#team-story {\n  scroll-margin-top: 130px;\n}\n@media (max-width: 1100px) {\n  .people-banner-copy {\n    width: 57%;\n  }\n  .people-banner-strengths {\n    gap: 12px;\n  }\n  .people-banner-note {\n    display: none;\n  }\n  .people-banner-purpose {\n    right: 10px;\n    bottom: 45px;\n  }\n  .people-banner-copy > p {\n    font-size: 16px;\n  }\n}\n@media (max-width: 760px) {\n  .people-banner-photo {\n    height: 280px;\n    top: auto;\n    bottom: 0;\n    object-position: 75% center;\n  }\n  .people-banner-shade {\n    background:\n      linear-gradient(\n        180deg,\n        #06234a 0%,\n        #06234a 57%,\n        transparent 80%);\n  }\n  .people-banner-inner {\n    display: block;\n    padding-top: 32px;\n    padding-bottom: 290px;\n    min-height: 0;\n  }\n  .people-banner-copy {\n    width: 100%;\n    max-width: none;\n  }\n  .people-banner h1 {\n    font-size: clamp(34px, 8vw, 48px);\n  }\n  .people-banner-eyebrow {\n    font-size: 9px;\n    letter-spacing: 2px;\n  }\n  .people-banner-crumb {\n    font-size: 9px;\n  }\n  .people-banner-strengths {\n    gap: 15px;\n  }\n  .people-banner-strengths > span {\n    font-size: 11px;\n  }\n  .people-banner-purpose {\n    bottom: 22px;\n    right: 0;\n    padding: 12px 16px;\n    font-size: 12px;\n  }\n  .people-banner-actions {\n    gap: 20px;\n  }\n}\n.team-page .team-contact-grid {\n  grid-template-columns: minmax(0, 1fr);\n  gap: 28px;\n}\n.team-page .team-contact-cards {\n  order: -1;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.team-page .team-contact-card {\n  min-width: 0;\n}\n.team-page .team-support-stripe {\n  position: relative;\n  min-height: 194px;\n  padding: 30px 165px 30px 36px;\n  border-radius: 17px;\n  background:\n    linear-gradient(\n      105deg,\n      #2168d8,\n      #0c469f);\n}\n.team-page .team-support-stripe .team-section-label {\n  color: #b8dcff;\n}\n.team-page .team-support-stripe h2 {\n  font-size: 26px;\n  line-height: 1.25;\n  margin: 8px 0;\n}\n.team-page .team-support-stripe p {\n  font-size: 14px;\n  line-height: 1.6;\n  max-width: 850px;\n  margin: 0 0 18px;\n}\n@media (max-width: 760px) {\n  .team-page .team-contact-cards {\n    grid-template-columns: 1fr;\n  }\n  .team-page .team-support-stripe {\n    padding: 26px;\n  }\n  .team-page .team-support-stripe h2 {\n    font-size: 23px;\n  }\n  .team-page .team-support-stripe .pp-cta-buddha-link {\n    position: static;\n    display: block;\n    width: 80px;\n    height: 80px;\n    transform: none;\n    margin: 16px 0 0 auto;\n  }\n}\n.ekyc-page {\n  --ekyc-navy:#071b3d;\n  --ekyc-blue:#1267df;\n  --ekyc-orange:#ff7a1a;\n  --ekyc-ink:#12213a;\n  background: #fff;\n  color: var(--ekyc-ink);\n  font-family: var(--body);\n}\n.ekyc-hero {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      118deg,\n      #061632 0%,\n      #0a2d65 62%,\n      #0a408d 100%);\n  color: #fff;\n}\n.ekyc-hero::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  z-index: -1;\n  background-image:\n    linear-gradient(#ffffff09 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #ffffff09 1px,\n      transparent 1px);\n  background-size: 52px 52px;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 40%,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 40%,\n      #000);\n}\n.ekyc-orb {\n  position: absolute;\n  z-index: -1;\n  border-radius: 50%;\n  filter: blur(4px);\n  pointer-events: none;\n}\n.ekyc-orb-one {\n  width: 460px;\n  height: 460px;\n  right: -120px;\n  top: -240px;\n  background: #1674ff26;\n  box-shadow: 0 0 100px #1674ff55;\n}\n.ekyc-orb-two {\n  width: 230px;\n  height: 230px;\n  left: 43%;\n  bottom: -185px;\n  background: #ff7a1a1e;\n  box-shadow: 0 0 90px #ff7a1a35;\n}\n.ekyc-hero-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1.4fr) minmax(330px, .6fr);\n  align-items: center;\n  gap: 70px;\n  max-width: 1220px;\n  margin: 0 auto;\n  padding: 78px 28px 82px;\n}\n.ekyc-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-bottom: 29px;\n  color: #93b6e7;\n  font-size: 12px;\n  font-weight: 650;\n}\n.ekyc-breadcrumb a {\n  color: #d3e7ff;\n  text-decoration: none;\n}\n.ekyc-breadcrumb a:hover {\n  text-decoration: underline;\n}\n.ekyc-kicker {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 16px;\n  color: #8cc4ff;\n  font: 750 11px/1.2 var(--mono);\n  letter-spacing: .17em;\n  text-transform: uppercase;\n}\n.ekyc-kicker i {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #ff842b;\n  box-shadow: 0 0 0 5px #ff842b22;\n}\n.ekyc-hero h1 {\n  margin: 0 0 21px;\n  color: #fff;\n  font: 800 clamp(42px, 5vw, 68px)/1.04 var(--disp);\n  letter-spacing: -.045em;\n}\n.ekyc-hero h1 em {\n  color: #55a7ff;\n  font-style: normal;\n}\n.ekyc-hero-copy > p {\n  max-width: 730px;\n  margin: 0;\n  color: #ccdaef;\n  font-size: 17px;\n  line-height: 1.75;\n}\n.ekyc-intro-strip {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  max-width: 1120px;\n  margin: -26px auto 0;\n  padding: 0 28px;\n  position: relative;\n  z-index: 2;\n}\n.ekyc-intro-strip > div {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  min-height: 88px;\n  padding: 17px 25px;\n  border: 1px solid #dce8f8;\n  border-right: 0;\n  background: #fff;\n  box-shadow: 0 13px 30px #17365e0d;\n}\n.ekyc-intro-strip > div:first-child {\n  border-radius: 14px 0 0 14px;\n}\n.ekyc-intro-strip > div:last-child {\n  border-right: 1px solid #dce8f8;\n  border-radius: 0 14px 14px 0;\n}\n.ekyc-intro-strip > div > span {\n  display: grid;\n  flex: 0 0 42px;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 11px;\n  background: #eaf3ff;\n  color: #1267df;\n  font-size: 22px;\n}\n.ekyc-intro-strip p {\n  margin: 0;\n}\n.ekyc-intro-strip b {\n  display: block;\n  margin-bottom: 4px;\n  color: #14243d;\n  font-size: 13px;\n}\n.ekyc-intro-strip small {\n  display: block;\n  color: #728098;\n  font-size: 11px;\n  line-height: 1.35;\n}\n.ekyc-layout {\n  display: grid;\n  grid-template-columns: 225px minmax(0, 820px);\n  gap: 65px;\n  max-width: 1110px;\n  margin: 76px auto 0;\n  padding: 0 28px 90px;\n}\n.ekyc-index {\n  position: sticky;\n  top: 112px;\n  align-self: start;\n  display: grid;\n  padding: 21px 0;\n  border-top: 3px solid #1267df;\n  border-bottom: 1px solid #d9e3ef;\n}\n.ekyc-index > span {\n  margin: 0 0 13px;\n  color: #172943;\n  font: 750 11px/1.2 var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.ekyc-index a {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 4px;\n  color: #60708a;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 1.25;\n  text-decoration: none;\n  transition: color .2s, transform .2s;\n}\n.ekyc-index a b {\n  color: #a2b0c2;\n  font: 600 9px/1 var(--mono);\n}\n.ekyc-index a:hover {\n  color: #1267df;\n  transform: translateX(3px);\n}\n.ekyc-content {\n  min-width: 0;\n}\n.ekyc-section {\n  display: grid;\n  grid-template-columns: 48px minmax(0, 1fr);\n  gap: 20px;\n  padding: 0 0 60px;\n  scroll-margin-top: 115px;\n}\n.ekyc-section + .ekyc-section {\n  padding-top: 54px;\n  border-top: 1px solid #e2e9f2;\n}\n.ekyc-section-number {\n  display: grid;\n  width: 43px;\n  height: 43px;\n  place-items: center;\n  border: 1px solid #cfe0f5;\n  border-radius: 11px;\n  background: #f4f8fd;\n  color: #1267df;\n  font: 700 12px/1 var(--mono);\n}\n.ekyc-overline {\n  display: block;\n  margin: 2px 0 9px;\n  color: #1670df;\n  font: 750 10px/1.2 var(--mono);\n  letter-spacing: .17em;\n  text-transform: uppercase;\n}\n.ekyc-section h2 {\n  margin: 0 0 17px;\n  color: #0b2042;\n  font: 750 clamp(25px, 3vw, 34px)/1.2 var(--disp);\n  letter-spacing: -.025em;\n}\n.ekyc-section-copy > p {\n  margin: 0 0 18px;\n  color: #586981;\n  font-size: 15px;\n  line-height: 1.8;\n}\n.ekyc-note,\n.ekyc-warning {\n  display: flex;\n  align-items: flex-start;\n  gap: 13px;\n  margin-top: 23px;\n  padding: 16px 18px;\n  border-left: 3px solid #1267df;\n  border-radius: 0 10px 10px 0;\n  background: #eef6ff;\n}\n.ekyc-note > span {\n  color: #1267df;\n  font-size: 21px;\n}\n.ekyc-note p,\n.ekyc-warning p {\n  margin: 0;\n  color: #405674;\n  font-size: 13px;\n  line-height: 1.65;\n}\n.ekyc-law-card {\n  display: grid;\n  grid-template-columns: 42px minmax(0, 1fr) auto;\n  align-items: center;\n  gap: 14px;\n  margin-top: 24px;\n  padding: 19px;\n  border: 1px solid #d8e5f4;\n  border-radius: 13px;\n  background: #fbfdff;\n}\n.ekyc-law-card > span {\n  display: grid;\n  width: 42px;\n  height: 42px;\n  place-items: center;\n  border-radius: 10px;\n  background: #e9f2ff;\n  color: #1267df;\n}\n.ekyc-law-card b {\n  display: block;\n  margin-bottom: 3px;\n  color: #162943;\n  font-size: 13px;\n}\n.ekyc-law-card p {\n  margin: 0;\n  color: #718096;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.ekyc-law-card a {\n  color: #1267df;\n  font-size: 11px;\n  font-weight: 750;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.ekyc-law-card a:hover {\n  text-decoration: underline;\n}\n.ekyc-service-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: 25px;\n}\n.ekyc-service-grid > div {\n  display: grid;\n  grid-template-columns: 44px 1fr;\n  column-gap: 14px;\n  align-items: center;\n  padding: 17px;\n  border: 1px solid #dce7f4;\n  border-radius: 12px;\n}\n.ekyc-service-grid span {\n  grid-row: 1/3;\n  display: grid;\n  width: 44px;\n  height: 44px;\n  place-items: center;\n  border-radius: 11px;\n  background: #eaf3ff;\n  color: #1267df;\n  font-size: 22px;\n}\n.ekyc-service-grid b {\n  color: #172943;\n  font-size: 13px;\n}\n.ekyc-service-grid small {\n  color: #75849a;\n  font-size: 10px;\n  line-height: 1.4;\n}\n.ekyc-check-list {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 11px 25px;\n  margin: 23px 0 0;\n  padding: 0;\n  list-style: none;\n}\n.ekyc-check-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  color: #50627b;\n  font-size: 13px;\n  line-height: 1.55;\n}\n.ekyc-check-list span {\n  flex: 0 0 auto;\n  margin-top: 1px;\n  color: #1aa26f;\n  font-size: 18px;\n}\n.ekyc-document-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 15px;\n  margin-top: 26px;\n}\n.ekyc-document-card {\n  position: relative;\n  overflow: hidden;\n  padding: 25px;\n  border: 1px solid #d7e4f4;\n  border-radius: 15px;\n  background:\n    linear-gradient(\n      145deg,\n      #fff,\n      #f4f8ff);\n}\n.ekyc-document-card::after {\n  content: "";\n  position: absolute;\n  width: 110px;\n  height: 110px;\n  right: -50px;\n  top: -50px;\n  border-radius: 50%;\n  background: #1267df0e;\n}\n.ekyc-document-card > span {\n  display: grid;\n  width: 45px;\n  height: 45px;\n  place-items: center;\n  margin-bottom: 16px;\n  border-radius: 12px;\n  background: #1267df;\n  color: #fff;\n  font-size: 23px;\n}\n.ekyc-document-card.business > span {\n  background: #ff7a1a;\n}\n.ekyc-document-card h3 {\n  margin: 0 0 15px;\n  color: #112747;\n  font: 700 17px/1.25 var(--disp);\n}\n.ekyc-document-card ul {\n  display: grid;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.ekyc-document-card li {\n  position: relative;\n  padding-left: 16px;\n  color: #5d6e85;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.ekyc-document-card li::before {\n  content: "";\n  position: absolute;\n  left: 0;\n  top: .62em;\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: #1267df;\n}\n.ekyc-document-card.business li::before {\n  background: #ff7a1a;\n}\n.ekyc-warning {\n  border-left-color: #ff7a1a;\n  background: #fff5ec;\n}\n.ekyc-warning > span {\n  color: #f27418;\n  font-size: 22px;\n}\n.ekyc-warning p {\n  color: #68492e;\n}\n.ekyc-process {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0;\n  margin-top: 28px;\n}\n.ekyc-process > div {\n  position: relative;\n  padding: 0 14px;\n  text-align: center;\n}\n.ekyc-process > div:not(:last-child)::after {\n  content: "";\n  position: absolute;\n  left: calc(50% + 27px);\n  right: calc(-50% + 27px);\n  top: 26px;\n  border-top: 1px dashed #9fbee7;\n}\n.ekyc-process i {\n  position: absolute;\n  z-index: 2;\n  top: -5px;\n  left: calc(50% + 16px);\n  display: grid;\n  width: 18px;\n  height: 18px;\n  place-items: center;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  background: #ff7a1a;\n  color: #fff;\n  font: 700 8px/1 var(--mono);\n}\n.ekyc-process > div > span {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  width: 54px;\n  height: 54px;\n  margin: 0 auto 15px;\n  place-items: center;\n  border-radius: 50%;\n  background: #e9f3ff;\n  color: #1267df;\n  font-size: 24px;\n}\n.ekyc-process b {\n  display: block;\n  margin-bottom: 6px;\n  color: #142943;\n  font-size: 12px;\n}\n.ekyc-process small {\n  display: block;\n  color: #7a8799;\n  font-size: 10px;\n  line-height: 1.45;\n}\n.ekyc-retention-card {\n  display: flex;\n  align-items: center;\n  gap: 21px;\n  margin: 25px 0;\n  padding: 20px 22px;\n  border: 1px solid #cfe1f7;\n  border-radius: 13px;\n  background:\n    linear-gradient(\n      105deg,\n      #edf6ff,\n      #fbfdff);\n}\n.ekyc-retention-card strong {\n  flex: 0 0 auto;\n  color: #1267df;\n  font: 800 30px/1 var(--disp);\n}\n.ekyc-retention-card p {\n  margin: 0;\n  padding-left: 21px;\n  border-left: 1px solid #c9daef;\n}\n.ekyc-retention-card b {\n  display: block;\n  margin-bottom: 4px;\n  color: #172943;\n  font-size: 13px;\n}\n.ekyc-retention-card small {\n  display: block;\n  color: #65758b;\n  font-size: 11px;\n  line-height: 1.5;\n}\n.ekyc-policy-links a {\n  color: #1267df;\n  font-weight: 700;\n  text-decoration: none;\n}\n.ekyc-policy-links a:hover {\n  text-decoration: underline;\n}\n.ekyc-actions-list {\n  display: grid;\n  gap: 10px;\n  margin: 23px 0;\n  padding: 0;\n  list-style: none;\n}\n.ekyc-actions-list li {\n  display: grid;\n  grid-template-columns: 145px 1fr;\n  gap: 16px;\n  padding: 14px 17px;\n  border: 1px solid #e0e8f2;\n  border-radius: 10px;\n}\n.ekyc-actions-list b {\n  color: #183053;\n  font-size: 12px;\n}\n.ekyc-actions-list span {\n  color: #6c7b90;\n  font-size: 12px;\n  line-height: 1.45;\n}\n.ekyc-faq-list {\n  display: grid;\n  gap: 10px;\n  margin-top: 25px;\n}\n.ekyc-faq-list details {\n  border: 1px solid #dce5f0;\n  border-radius: 11px;\n  background: #fff;\n}\n.ekyc-faq-list summary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  padding: 17px 18px;\n  color: #183052;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n  list-style: none;\n}\n.ekyc-faq-list summary::-webkit-details-marker {\n  display: none;\n}\n.ekyc-faq-list summary span {\n  color: #1267df;\n  font-size: 20px;\n  transition: transform .2s;\n}\n.ekyc-faq-list details[open] summary span {\n  transform: rotate(45deg);\n}\n.ekyc-faq-list details p {\n  margin: 0;\n  padding: 0 48px 18px 18px;\n  color: #65758b;\n  font-size: 12px;\n  line-height: 1.7;\n}\n.ekyc-cta {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n  max-width: 1165px;\n  margin: 0 auto 85px;\n  padding: 42px 50px;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      110deg,\n      #0a2858,\n      #0b56ae);\n  box-shadow: 0 22px 50px #0b347124;\n  color: #fff;\n}\n.ekyc-cta > div > span {\n  color: #75b8ff;\n  font: 750 10px/1.2 var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n}\n.ekyc-cta h2 {\n  margin: 8px 0;\n  color: #fff;\n  font: 750 clamp(24px, 3vw, 34px)/1.2 var(--disp);\n}\n.ekyc-cta p {\n  margin: 0;\n  color: #c8d9ed;\n  font-size: 13px;\n}\n.ekyc-cta > a {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  flex: 0 0 auto;\n  padding: 14px 21px;\n  border-radius: 9px;\n  background: #ff7a1a;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 750;\n  text-decoration: none;\n  box-shadow: 0 10px 24px #02152d38;\n}\n.ekyc-cta > a:hover {\n  background: #ff8d39;\n}\n.ekyc-cta > a span {\n  font-size: 18px;\n}\n@media (max-width: 900px) {\n  .ekyc-hero-grid {\n    grid-template-columns: 1fr;\n    gap: 38px;\n    padding-top: 58px;\n  }\n  .ekyc-ready-card {\n    max-width: 520px;\n  }\n  .ekyc-layout {\n    grid-template-columns: 1fr;\n    margin-top: 55px;\n  }\n  .ekyc-index {\n    position: static;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 2px 12px;\n  }\n  .ekyc-index > span {\n    grid-column: 1/-1;\n  }\n  .ekyc-process {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 28px 0;\n  }\n  .ekyc-process > div:nth-child(2)::after {\n    display: none;\n  }\n  .ekyc-cta {\n    margin-left: 28px;\n    margin-right: 28px;\n  }\n}\n@media (max-width: 680px) {\n  .ekyc-hero-grid {\n    padding: 42px 20px 66px;\n  }\n  .ekyc-hero h1 {\n    font-size: 42px;\n  }\n  .ekyc-hero-copy > p {\n    font-size: 15px;\n  }\n  .ekyc-ready-card {\n    grid-template-columns: 1fr;\n  }\n  .ekyc-intro-strip {\n    grid-template-columns: 1fr;\n    margin-top: -20px;\n    padding: 0 20px;\n  }\n  .ekyc-intro-strip > div {\n    border-right: 1px solid #dce8f8;\n    border-bottom: 0;\n  }\n  .ekyc-intro-strip > div:first-child {\n    border-radius: 14px 14px 0 0;\n  }\n  .ekyc-intro-strip > div:last-child {\n    border-bottom: 1px solid #dce8f8;\n    border-radius: 0 0 14px 14px;\n  }\n  .ekyc-layout {\n    padding: 0 20px 65px;\n  }\n  .ekyc-index {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .ekyc-section {\n    grid-template-columns: 1fr;\n    gap: 14px;\n    padding-bottom: 45px;\n  }\n  .ekyc-section + .ekyc-section {\n    padding-top: 40px;\n  }\n  .ekyc-section-number {\n    width: 38px;\n    height: 38px;\n  }\n  .ekyc-service-grid,\n  .ekyc-check-list,\n  .ekyc-document-grid {\n    grid-template-columns: 1fr;\n  }\n  .ekyc-law-card {\n    grid-template-columns: 42px 1fr;\n  }\n  .ekyc-law-card a {\n    grid-column: 2;\n  }\n  .ekyc-process {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .ekyc-process > div {\n    display: grid;\n    grid-template-columns: 54px 1fr;\n    text-align: left;\n    column-gap: 16px;\n  }\n  .ekyc-process > div::after {\n    display: none;\n  }\n  .ekyc-process i {\n    left: 42px;\n  }\n  .ekyc-process > div > span {\n    grid-row: 1/3;\n    margin: 0;\n  }\n  .ekyc-actions-list li {\n    grid-template-columns: 1fr;\n    gap: 5px;\n  }\n  .ekyc-retention-card {\n    align-items: flex-start;\n  }\n  .ekyc-cta {\n    align-items: flex-start;\n    flex-direction: column;\n    margin: 0 20px 60px;\n    padding: 30px 25px;\n  }\n  .ekyc-cta > a {\n    width: 100%;\n    box-sizing: border-box;\n    justify-content: center;\n  }\n}\n@media (max-width: 420px) {\n  .ekyc-index {\n    grid-template-columns: 1fr;\n  }\n  .ekyc-retention-card {\n    flex-direction: column;\n  }\n  .ekyc-retention-card p {\n    padding: 15px 0 0;\n    border-left: 0;\n    border-top: 1px solid #c9daef;\n  }\n  .ekyc-faq-list summary {\n    padding: 15px;\n  }\n  .ekyc-faq-list details p {\n    padding: 0 40px 16px 15px;\n  }\n}\n.privacy-policy-page .privacy-policy-hero,\n.ekyc-page .ekyc-hero {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  min-height: 440px;\n  padding: 0;\n  background:\n    radial-gradient(\n      ellipse at 76% 38%,\n      #075091 0,\n      transparent 43%),\n    linear-gradient(\n      115deg,\n      #04264d,\n      #021a38 62%,\n      #032854);\n  color: #fff;\n}\n.privacy-policy-page .privacy-policy-hero::before,\n.ekyc-page .ekyc-hero::before {\n  content: "";\n  position: absolute;\n  z-index: -1;\n  inset: 0;\n  background:\n    linear-gradient(#55baff0a 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      #55baff0a 1px,\n      transparent 1px);\n  background-size: 54px 54px;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent 5%,\n      #000 72%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent 5%,\n      #000 72%,\n      transparent);\n  pointer-events: none;\n}\n.privacy-policy-hero-inner,\n.ekyc-hero-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1.35fr) minmax(350px, .85fr);\n  align-items: center;\n  gap: 38px;\n  width: 100%;\n  max-width: 1440px;\n  min-height: 440px;\n  margin: 0 auto;\n  padding: 50px 40px;\n  box-sizing: border-box;\n  text-align: left;\n}\n.policy-hero-copy,\n.ekyc-hero-copy {\n  position: relative;\n  z-index: 2;\n  display: block;\n  min-width: 0;\n  width: auto;\n  text-align: left;\n}\n.privacy-policy-breadcrumb,\n.ekyc-breadcrumb {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 0 0 22px;\n  color: #35b5ff;\n  font-size: 14px;\n  font-weight: 500;\n}\n.privacy-policy-breadcrumb a,\n.ekyc-breadcrumb a {\n  color: #c4d5ec;\n  text-decoration: none;\n}\n.privacy-policy-breadcrumb a:hover,\n.ekyc-breadcrumb a:hover {\n  color: #fff;\n  text-decoration: underline;\n}\n.privacy-policy-breadcrumb span[aria-hidden],\n.ekyc-breadcrumb span[aria-hidden] {\n  color: #36b3ff;\n  font-size: 18px;\n}\n.privacy-policy-page .privacy-policy-hero h1,\n.ekyc-page .ekyc-hero h1 {\n  margin: 0 0 20px;\n  color: #fff;\n  font: 800 clamp(48px, 5.3vw, 76px)/1.08 var(--disp);\n  letter-spacing: -.04em;\n  text-align: left;\n}\n.privacy-policy-page .privacy-policy-hero h1 em,\n.ekyc-page .ekyc-hero h1 em {\n  color: #2ba8f7;\n  font-style: normal;\n}\n.policy-hero-copy > p,\n.ekyc-hero-copy > p {\n  max-width: 760px;\n  margin: 0;\n  color: #c4d1e3;\n  font-size: 18px;\n  line-height: 1.65;\n  text-align: left;\n}\n.policy-hero-benefits {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n  margin-top: 36px;\n}\n.policy-hero-benefits > a {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 0;\n  padding-right: 14px;\n  border-right: 1px solid #19609a;\n  color: inherit;\n  text-decoration: none;\n  transition: transform .2s, color .2s;\n}\n.policy-hero-benefits > a:last-child {\n  padding-right: 0;\n  border-right: 0;\n}\n.policy-hero-benefits > a > span {\n  display: grid;\n  flex: 0 0 50px;\n  width: 50px;\n  height: 50px;\n  place-items: center;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      145deg,\n      #064279,\n      #022349);\n  box-shadow: inset 0 0 0 1px #1682c955;\n  color: #3cb9ff;\n  font-size: 27px;\n  transition: background .2s, box-shadow .2s;\n}\n.policy-hero-benefits > a:hover {\n  transform: translateY(-3px);\n}\n.policy-hero-benefits > a:hover > span {\n  background:\n    linear-gradient(\n      145deg,\n      #0961a5,\n      #053566);\n  box-shadow: inset 0 0 0 1px #45baff88, 0 0 18px #159fff55;\n}\n.policy-hero-benefits > a:focus-visible {\n  outline: 2px solid #53c3ff;\n  outline-offset: 6px;\n  border-radius: 8px;\n}\n.policy-hero-benefits p {\n  min-width: 0;\n  margin: 0;\n}\n.policy-hero-benefits b {\n  display: block;\n  color: #fff;\n  font-size: 14px;\n  line-height: 1.35;\n}\n.policy-hero-benefits small {\n  display: block;\n  margin-top: 5px;\n  color: #c2d0e5;\n  font-size: 12px;\n  line-height: 1.4;\n}\n.policy-hero-art {\n  position: relative;\n  height: 350px;\n  min-width: 0;\n  pointer-events: none;\n}\n.policy-art-glow {\n  position: absolute;\n  right: 4%;\n  top: 3%;\n  width: 310px;\n  height: 310px;\n  border-radius: 50%;\n  background: #087de329;\n  filter: blur(18px);\n}\n.policy-art-globe {\n  position: absolute;\n  right: 7%;\n  top: 4%;\n  width: 270px;\n  height: 270px;\n  overflow: hidden;\n  border: 1px solid #35b8ff99;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle at 29% 24%,\n      #1789ca,\n      #073c74 43%,\n      #021b42 78%);\n  box-shadow: inset 8px 5px 22px #21bcff55, 0 0 42px #087de34d;\n}\n.policy-art-globe::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image: radial-gradient(#62cfff 1px, transparent 1.5px);\n  background-size: 7px 7px;\n  opacity: .42;\n  -webkit-mask-image:\n    radial-gradient(\n      ellipse at 45% 35%,\n      #000,\n      transparent 74%);\n  mask-image:\n    radial-gradient(\n      ellipse at 45% 35%,\n      #000,\n      transparent 74%);\n}\n.policy-art-globe::after {\n  content: "";\n  position: absolute;\n  inset: 18% -10%;\n  border: 1px dashed #76d5ff99;\n  border-radius: 50%;\n  transform: rotate(-20deg);\n}\n.policy-art-globe i {\n  position: absolute;\n  inset: 0 24%;\n  border: 1px solid #62c8ff4d;\n  border-radius: 50%;\n}\n.policy-art-globe i:nth-child(2) {\n  inset: 23% 0;\n}\n.policy-art-globe i:nth-child(3) {\n  inset: 9%;\n  transform: rotate(37deg);\n}\n.policy-art-card {\n  position: absolute;\n  z-index: 3;\n  left: 3%;\n  bottom: 10px;\n  display: flex;\n  width: min(280px, 70%);\n  min-height: 170px;\n  padding: 25px 25px 21px;\n  box-sizing: border-box;\n  align-items: flex-start;\n  flex-direction: column;\n  border: 2px solid #91d6ff;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      #e9f6ff,\n      #9ccdf8);\n  box-shadow: 0 20px 42px #00142e99, 0 0 20px #159fff4d;\n  color: #062e5a;\n  transform: perspective(700px) rotateY(8deg) rotate(-2deg);\n}\n.policy-art-card > span {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  margin-bottom: 14px;\n  place-items: center;\n  border-radius: 13px;\n  background: #138ee7;\n  color: #fff;\n  font-size: 29px;\n  box-shadow: 0 8px 18px #0c6bb84d;\n}\n.policy-art-card b {\n  font: 800 23px/1.15 var(--disp);\n  letter-spacing: -.02em;\n}\n.policy-art-card small {\n  margin-top: 6px;\n  color: #416d99;\n  font-size: 10px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n}\n.policy-art-card i {\n  display: block;\n  width: 100%;\n  height: 5px;\n  margin-top: 17px;\n  border-radius: 9px;\n  background: #0f75bd2b;\n}\n.policy-art-card i + i {\n  width: 76%;\n  margin-top: 7px;\n}\n.policy-art-card i + i + i {\n  width: 52%;\n}\n.policy-art-node {\n  position: absolute;\n  z-index: 4;\n  display: grid;\n  width: 48px;\n  height: 48px;\n  place-items: center;\n  border: 1px solid #4ebcff;\n  border-radius: 50%;\n  background: #0b4279d9;\n  box-shadow: 0 0 15px #149fff70;\n  color: #a6e2ff;\n  font-size: 25px;\n}\n.policy-art-node-one {\n  left: 11%;\n  top: 35px;\n}\n.policy-art-node-two {\n  right: 13%;\n  top: 2px;\n}\n.policy-art-node-three {\n  right: 0;\n  top: 105px;\n}\n.policy-hero-art--abuse::before {\n  content: "";\n  position: absolute;\n  right: 1%;\n  top: 0;\n  width: 320px;\n  height: 320px;\n  border-radius: 50%;\n  background: #087de329;\n  filter: blur(18px);\n}\n.abuse-radar {\n  position: absolute;\n  right: 4%;\n  top: 5px;\n  width: 260px;\n  height: 260px;\n  overflow: hidden;\n  border: 1px solid #38b9ff99;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      #0a568a 0,\n      #052d5c 48%,\n      #021a3d 76%);\n  box-shadow: inset 0 0 35px #20b9ff4d, 0 0 35px #087de355;\n}\n.abuse-radar::before,\n.abuse-radar::after {\n  content: "";\n  position: absolute;\n  background: #54c7ff4d;\n}\n.abuse-radar::before {\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 1px;\n}\n.abuse-radar::after {\n  right: 0;\n  left: 0;\n  top: 50%;\n  height: 1px;\n}\n.abuse-radar > i {\n  position: absolute;\n  border: 1px solid #5bceff52;\n  border-radius: 50%;\n}\n.abuse-radar > i:nth-child(1) {\n  inset: 18%;\n}\n.abuse-radar > i:nth-child(2) {\n  inset: 35%;\n}\n.abuse-radar > i:nth-child(3) {\n  left: 66%;\n  top: 27%;\n  width: 9px;\n  height: 9px;\n  border: 0;\n  background: #ff8b38;\n  box-shadow: 0 0 0 6px #ff8b3826, 0 0 16px #ff8b38;\n}\n.abuse-radar > span {\n  position: absolute;\n  inset: 50% 0 0 50%;\n  background:\n    conic-gradient(\n      from 270deg,\n      #51cbff4d,\n      transparent 42%);\n  transform-origin: 0 0;\n}\n.abuse-monitor {\n  position: absolute;\n  z-index: 3;\n  left: 1%;\n  bottom: 8px;\n  width: min(310px, 76%);\n  min-height: 176px;\n  overflow: hidden;\n  border: 2px solid #70c7f5;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      145deg,\n      #0c477d,\n      #05264e);\n  box-shadow: 0 22px 42px #00142eaa, 0 0 18px #159fff4d;\n  transform: perspective(700px) rotateY(7deg) rotate(-1deg);\n}\n.abuse-monitor-bar {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  height: 30px;\n  padding: 0 12px;\n  border-bottom: 1px solid #4fbdf044;\n  background: #031d3d;\n}\n.abuse-monitor-bar i {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #ff765e;\n}\n.abuse-monitor-bar i:nth-child(2) {\n  background: #ffbb4d;\n}\n.abuse-monitor-bar i:nth-child(3) {\n  background: #4ad68a;\n}\n.abuse-monitor-bar span {\n  margin-left: auto;\n  color: #72caff;\n  font: 700 8px/1 var(--mono);\n  letter-spacing: .12em;\n}\n.abuse-monitor-body {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 17px 19px 8px;\n}\n.abuse-monitor-body > span {\n  display: grid;\n  width: 47px;\n  height: 47px;\n  place-items: center;\n  border-radius: 12px;\n  background: #0d91df;\n  color: #fff;\n  font-size: 28px;\n}\n.abuse-monitor-body b {\n  display: block;\n  color: #fff;\n  font-size: 17px;\n}\n.abuse-monitor-body small {\n  display: block;\n  margin-top: 4px;\n  color: #9ec9e7;\n  font-size: 10px;\n}\n.abuse-signal {\n  display: flex;\n  height: 35px;\n  margin: 0 20px;\n  align-items: flex-end;\n  gap: 7px;\n}\n.abuse-signal i {\n  flex: 1;\n  height: 30%;\n  border-radius: 3px 3px 0 0;\n  background: #2bb8ff;\n}\n.abuse-signal i:nth-child(2) {\n  height: 55%;\n}\n.abuse-signal i:nth-child(3) {\n  height: 38%;\n}\n.abuse-signal i:nth-child(4) {\n  height: 82%;\n  background: #ff8438;\n}\n.abuse-signal i:nth-child(5) {\n  height: 62%;\n}\n.abuse-signal i:nth-child(6) {\n  height: 90%;\n}\n.abuse-status {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin: 10px 20px 15px;\n  color: #b9d8ec;\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n}\n.abuse-status span {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #4ade80;\n  box-shadow: 0 0 8px #4ade80;\n}\n.abuse-node-one {\n  left: 5%;\n  top: 35px;\n}\n.abuse-node-two {\n  right: 0;\n  top: 105px;\n}\n.policy-hero-art--ekyc::before {\n  content: "";\n  position: absolute;\n  right: 2%;\n  top: 1%;\n  width: 310px;\n  height: 310px;\n  border-radius: 50%;\n  background: #087de329;\n  filter: blur(18px);\n}\n.ekyc-art-orbit {\n  position: absolute;\n  right: 2%;\n  top: 12px;\n  width: 280px;\n  height: 280px;\n  border: 1px dashed #56c6ff80;\n  border-radius: 50%;\n  transform: rotate(-15deg);\n}\n.ekyc-art-orbit::before,\n.ekyc-art-orbit::after {\n  content: "";\n  position: absolute;\n  border: 1px solid #4ebcff4d;\n  border-radius: 50%;\n}\n.ekyc-art-orbit::before {\n  inset: 35px -22px;\n  transform: rotate(42deg);\n}\n.ekyc-art-orbit::after {\n  inset: 72px -42px;\n  transform: rotate(-28deg);\n}\n.ekyc-art-orbit i {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #6cddff;\n  box-shadow: 0 0 12px #6cddff;\n}\n.ekyc-art-orbit i:first-child {\n  left: 18px;\n  top: 70px;\n}\n.ekyc-art-orbit i:last-child {\n  right: 6px;\n  bottom: 66px;\n}\n.ekyc-id-card {\n  position: absolute;\n  z-index: 3;\n  left: 3%;\n  bottom: 8px;\n  width: min(315px, 77%);\n  min-height: 190px;\n  overflow: hidden;\n  border: 2px solid #91d6ff;\n  border-radius: 18px;\n  background:\n    linear-gradient(\n      145deg,\n      #f0f9ff,\n      #9dccf4);\n  box-shadow: 0 22px 44px #00142eaa, 0 0 20px #159fff4d;\n  color: #07315d;\n  transform: perspective(700px) rotateY(8deg) rotate(-2deg);\n}\n.ekyc-id-head {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 12px 16px;\n  background: #0b69b1;\n  color: #fff;\n}\n.ekyc-id-head span {\n  font-size: 22px;\n}\n.ekyc-id-head b {\n  font: 750 10px/1 var(--mono);\n  letter-spacing: .13em;\n}\n.ekyc-id-body {\n  position: relative;\n  display: grid;\n  grid-template-columns: 76px 1fr;\n  gap: 16px;\n  padding: 22px 18px;\n}\n.ekyc-id-photo {\n  display: grid;\n  width: 76px;\n  height: 88px;\n  place-items: end center;\n  overflow: hidden;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      145deg,\n      #d9efff,\n      #74b8ee);\n  color: #176ca9;\n}\n.ekyc-id-photo span {\n  font-size: 70px;\n  transform: translateY(9px);\n}\n.ekyc-id-lines {\n  padding-top: 5px;\n}\n.ekyc-id-lines i {\n  display: block;\n  width: 100%;\n  height: 7px;\n  margin-bottom: 10px;\n  border-radius: 8px;\n  background: #176ca92b;\n}\n.ekyc-id-lines i:nth-child(2) {\n  width: 78%;\n}\n.ekyc-id-lines i:nth-child(3) {\n  width: 56%;\n}\n.ekyc-id-lines small {\n  display: block;\n  margin-top: 17px;\n  color: #176ca9;\n  font-size: 9px;\n  font-weight: 750;\n  text-transform: uppercase;\n  letter-spacing: .08em;\n}\n.ekyc-id-fingerprint {\n  position: absolute;\n  right: 16px;\n  bottom: 13px;\n  color: #177bc1;\n  font-size: 40px;\n  opacity: .48;\n}\n.ekyc-verified-badge {\n  position: absolute;\n  z-index: 5;\n  right: 0;\n  bottom: 16px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border: 1px solid #80d5ad;\n  border-radius: 999px;\n  background: #effff7;\n  box-shadow: 0 12px 25px #00142e73;\n  color: #087847;\n}\n.ekyc-verified-badge span {\n  display: grid;\n  width: 25px;\n  height: 25px;\n  place-items: center;\n  border-radius: 50%;\n  background: #13a864;\n  color: #fff;\n  font-size: 17px;\n}\n.ekyc-verified-badge b {\n  font-size: 10px;\n  white-space: nowrap;\n}\n.ekyc-node-one {\n  left: 7%;\n  top: 26px;\n}\n.ekyc-node-two {\n  right: 7%;\n  top: 30px;\n}\n@media (max-width: 1100px) {\n  .privacy-policy-hero-inner,\n  .ekyc-hero-grid {\n    grid-template-columns: minmax(0, 1.2fr) minmax(310px, .8fr);\n    gap: 16px;\n    padding-inline: 24px;\n  }\n  .policy-hero-benefits {\n    gap: 10px;\n  }\n  .policy-hero-benefits > a {\n    gap: 8px;\n    padding-right: 8px;\n  }\n  .policy-hero-benefits > a > span {\n    width: 38px;\n    height: 38px;\n    flex-basis: 38px;\n    font-size: 22px;\n  }\n  .policy-hero-art {\n    transform: scale(.92);\n    transform-origin: center;\n  }\n}\n@media (max-width: 820px) {\n  .privacy-policy-hero-inner,\n  .ekyc-hero-grid {\n    grid-template-columns: 1fr;\n    padding: 42px 24px 28px;\n  }\n  .privacy-policy-page .privacy-policy-hero,\n  .ekyc-page .ekyc-hero {\n    min-height: 0;\n  }\n  .policy-hero-art {\n    width: 100%;\n    max-width: 500px;\n    margin: 10px auto 0;\n    transform: none;\n  }\n  .policy-hero-copy > p,\n  .ekyc-hero-copy > p {\n    font-size: 17px;\n  }\n  .policy-hero-benefits {\n    max-width: 700px;\n  }\n}\n@media (max-width: 540px) {\n  .privacy-policy-hero-inner,\n  .ekyc-hero-grid {\n    padding: 36px 20px 20px;\n  }\n  .privacy-policy-page .privacy-policy-hero h1,\n  .ekyc-page .ekyc-hero h1 {\n    font-size: clamp(38px, 12vw, 51px);\n  }\n  .privacy-policy-breadcrumb,\n  .ekyc-breadcrumb {\n    font-size: 12px;\n  }\n  .policy-hero-copy > p,\n  .ekyc-hero-copy > p {\n    font-size: 15px;\n  }\n  .policy-hero-benefits {\n    grid-template-columns: 1fr;\n    gap: 14px;\n    margin-top: 26px;\n  }\n  .policy-hero-benefits > a {\n    border: 0;\n  }\n  .policy-hero-benefits b {\n    font-size: 14px;\n  }\n  .policy-hero-art {\n    height: 295px;\n    transform: scale(.87);\n    transform-origin: top center;\n    margin-bottom: -30px;\n  }\n  .policy-art-node-one {\n    left: 5%;\n  }\n}\n@media (prefers-reduced-motion: no-preference) {\n  .policy-art-globe::before {\n    animation: policy-globe-turn 34s linear infinite;\n  }\n  .policy-art-card {\n    animation: policy-card-float 6s ease-in-out infinite;\n  }\n  .policy-art-node {\n    animation: policy-node-float 5s ease-in-out infinite;\n  }\n  .policy-art-node-two,\n  .abuse-node-two,\n  .ekyc-node-two {\n    animation-delay: -1.7s;\n  }\n  .policy-art-node-three {\n    animation-delay: -3.2s;\n  }\n  .abuse-radar > span {\n    animation: abuse-radar-sweep 6s linear infinite;\n  }\n  .abuse-signal i {\n    animation: abuse-signal-pulse 2.5s ease-in-out infinite alternate;\n  }\n  .abuse-signal i:nth-child(2n) {\n    animation-delay: -1.2s;\n  }\n  .ekyc-id-card {\n    animation: ekyc-card-float 6s ease-in-out infinite;\n  }\n}\n@keyframes policy-globe-turn {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes policy-card-float {\n  50% {\n    transform: perspective(700px) rotateY(8deg) rotate(-2deg) translateY(-7px);\n  }\n}\n@keyframes policy-node-float {\n  50% {\n    transform: translateY(-9px);\n  }\n}\n@keyframes abuse-radar-sweep {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes abuse-signal-pulse {\n  to {\n    height: 45%;\n  }\n}\n@keyframes ekyc-card-float {\n  50% {\n    transform: perspective(700px) rotateY(8deg) rotate(-2deg) translateY(-7px);\n  }\n}\n.career-overview-hero {\n  min-height: 620px;\n  background:\n    radial-gradient(\n      circle at 74% 18%,\n      rgba(28, 151, 255, .4) 0,\n      rgba(18, 98, 207, .2) 30%,\n      rgba(3, 24, 58, 0) 56%),\n    linear-gradient(\n      114deg,\n      #021a38 0%,\n      #04264d 44%,\n      #063a72 78%,\n      #021a38 100%);\n}\n.career-overview-hero::before {\n  background:\n    radial-gradient(\n      circle at 79% 22%,\n      rgba(43, 168, 247, .24),\n      transparent 32%);\n}\n.career-overview-hero::after,\n.career-overview-hero .career-hero-orb {\n  display: none;\n}\n.career-overview-hero .career-hero-inner {\n  grid-template-columns: minmax(0, 1.1fr) minmax(0, 1.4fr);\n  gap: 40px;\n  width: min(100% - 40px, 1280px);\n  min-height: 620px;\n  padding: 45px 0 0;\n}\n.career-overview-hero .career-hero-copy {\n  max-width: 650px;\n  padding-bottom: 48px;\n}\n.career-overview-hero .career-hero-eyebrow {\n  margin: 27px 0 0;\n  color: #fff;\n  font: 700 22px/1.2 var(--body);\n  letter-spacing: 0;\n  text-transform: none;\n}\n.career-overview-hero .career-hero-eyebrow > span {\n  display: none;\n}\n.career-overview-hero h1 {\n  max-width: 600px;\n  font: 700 clamp(44px, 4vw, 54px)/1.07 var(--disp);\n  letter-spacing: 0;\n}\n.career-overview-hero h1 > span {\n  background: none;\n  color: #3275f8;\n  -webkit-text-fill-color: currentColor;\n}\n.career-overview-hero .career-hero-tagline {\n  max-width: 610px;\n  margin-top: 20px;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.45;\n}\n.career-overview-hero .career-hero-benefits {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 20px;\n  max-width: 650px;\n  margin-top: 34px;\n}\n.career-overview-hero .career-hero-benefits li {\n  gap: 11px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 1.18;\n}\n.career-overview-hero .career-hero-benefits .material-symbols-outlined {\n  width: 40px;\n  height: 40px;\n  border: 0;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  color: #fff;\n  font-size: 36px;\n  font-variation-settings: "FILL" 0, "wght" 350;\n}\n.career-hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 34px;\n}\n.career-hero-actions a {\n  display: inline-flex;\n  min-width: 210px;\n  min-height: 48px;\n  box-sizing: border-box;\n  align-items: center;\n  justify-content: center;\n  padding: 0 26px;\n  border: 1px solid transparent;\n  border-radius: 999px;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 650;\n  text-decoration: none;\n  transition:\n    transform .2s,\n    border-color .2s,\n    color .2s;\n}\n.career-hero-actions a:hover {\n  transform: translateY(-2px);\n}\n.career-hero-primary {\n  background:\n    linear-gradient(\n      90deg,\n      #1769e8,\n      #2878ff,\n      #20b8e5);\n  box-shadow: 0 15px 34px rgba(23, 105, 232, .32);\n}\n.career-hero-secondary {\n  border-color: rgba(255, 255, 255, .85) !important;\n  background: transparent;\n}\n.career-hero-secondary:hover {\n  border-color: #35c4ff !important;\n  color: #35c4ff;\n}\n.career-overview-hero .career-hero-visual {\n  position: relative;\n  isolation: isolate;\n  align-self: end;\n  height: 590px;\n  overflow: visible;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  transform: translate(35px, 36px);\n}\n.career-overview-hero .career-hero-visual::before {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  right: 30px;\n  top: 72px;\n  width: 430px;\n  height: 430px;\n  border-radius: 50%;\n  background:\n    radial-gradient(\n      circle,\n      transparent 0 55px,\n      #386ce3 56px 84px,\n      transparent 85px 115px,\n      #386ce3 116px 144px,\n      transparent 145px 176px,\n      #386ce3 177px 207px,\n      transparent 208px);\n  opacity: .92;\n}\n.career-overview-hero .career-hero-visual::after {\n  content: "";\n  position: absolute;\n  z-index: 0;\n  right: 222px;\n  top: 85px;\n  width: 28px;\n  height: 400px;\n  background: #386ce3;\n  opacity: .92;\n}\n.career-overview-hero .career-hero-photo {\n  position: absolute;\n  z-index: 1;\n  right: -58px;\n  bottom: 0;\n  width: 112%;\n  height: auto;\n  max-height: 570px;\n  object-fit: contain;\n  object-position: right bottom;\n  filter: drop-shadow(0 20px 24px rgba(0, 0, 0, .22));\n}\n.career-impact-strip {\n  position: relative;\n  z-index: 3;\n  margin-top: -50px;\n  padding: 0 20px 40px;\n  border: 0;\n  background: linear-gradient(transparent 44px, #fff 44px);\n}\n.career-impact-inner {\n  width: min(100%, 1120px);\n  min-height: 88px;\n  padding: 20px 36px;\n  border-radius: 10px;\n  box-shadow: 0 12px 24px rgba(0, 0, 0, .18);\n}\n.career-impact-item {\n  gap: 12px;\n}\n.career-impact-item > .material-symbols-outlined {\n  font-size: 46px;\n}\n.career-impact-item strong {\n  font: 500 clamp(32px, 2.7vw, 40px)/1 var(--disp);\n}\n.career-impact-item span:not(.material-symbols-outlined) {\n  margin-top: 4px;\n  color: #000;\n  font-size: 13px;\n  font-weight: 400;\n}\n.career-why {\n  padding: 55px 24px 72px;\n  background: #fff;\n}\n.career-why-inner {\n  grid-template-columns: 260px minmax(0, 1fr);\n  gap: 48px;\n  width: min(100%, 1280px);\n}\n.career-why-intro > span {\n  margin-bottom: 12px;\n  color: #3076f8;\n  font: 700 11px/1.2 var(--body);\n  letter-spacing: .28em;\n}\n.career-why-intro h2 {\n  color: #111;\n  font: 700 34px/1.12 var(--disp);\n  letter-spacing: 0;\n}\n.career-why-intro h2 em {\n  color: #3076f8;\n}\n.career-why-intro p {\n  margin: 16px 0 25px;\n  color: #6b7280;\n  font-size: 14px;\n  line-height: 1.7;\n}\n.career-why-intro a {\n  min-height: 44px;\n  padding: 0 24px;\n  background:\n    linear-gradient(\n      90deg,\n      #1769e8,\n      #20b8e5);\n  box-shadow: 0 7px 14px rgba(23, 105, 232, .22);\n}\n.career-why-cards {\n  gap: 16px;\n}\n.career-why-card {\n  min-height: 260px;\n  padding: 30px 20px 24px;\n  border-color: #ececf0;\n  border-radius: 24px;\n  background: #f8f8fc;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, .08);\n}\n.career-why-card:hover {\n  border-color: #ececf0;\n  background: #f8f8fc;\n  box-shadow: 0 9px 24px rgba(15, 23, 42, .1);\n}\n.career-why-card i {\n  width: 44px;\n  height: 44px;\n  margin-bottom: 20px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #dce8ff,\n      #d9f5ff);\n  color: #3076f8;\n  font-size: 21px;\n}\n.career-why-card h3 {\n  color: #111;\n  font: 700 15px/1.35 var(--body);\n}\n.career-why-card p {\n  margin-top: 10px;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.company-body:has(.career-stories) {\n  padding: 0;\n  background: #fff;\n}\n.company-wrap:has(.career-stories) {\n  grid-template-columns: minmax(20px, 1fr) minmax(0, 1280px) minmax(20px, 1fr);\n}\n.career-life {\n  margin: 0;\n  padding: 28px 0 42px;\n  text-align: center;\n}\n.career-life header {\n  margin-bottom: 27px;\n}\n.career-life h2 {\n  margin-bottom: 12px;\n  background:\n    linear-gradient(\n      90deg,\n      #1769e8,\n      #2878ff,\n      #20b8e5);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  font: 700 30px/1.2 var(--disp);\n  -webkit-text-fill-color: transparent;\n}\n.career-life h2 em {\n  color: inherit;\n}\n.career-life header p {\n  color: #4d4d4d;\n  font-size: 14px;\n  letter-spacing: .02em;\n}\n.career-life-grid {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n  max-width: 990px;\n  margin: auto;\n}\n.career-life-card {\n  overflow: hidden;\n  text-align: center;\n}\n.career-life-photo {\n  height: 190px;\n  aspect-ratio: auto;\n  object-fit: cover;\n  border-radius: 20px;\n  background: #f7f7fb;\n  box-shadow: none;\n  transition: transform .3s;\n}\n.career-life-card:hover .career-life-photo {\n  transform: scale(1.025);\n}\n.career-life-card > p {\n  margin-top: 11px;\n  color: #000;\n  font-size: 14px;\n  font-weight: 400;\n}\n.career-life-dots {\n  margin-top: 18px;\n}\n.career-stories {\n  margin: 0;\n  padding: 36px clamp(24px, 5vw, 72px);\n  background:\n    radial-gradient(\n      circle at 83% 0,\n      rgba(43, 168, 247, .36) 0,\n      rgba(43, 168, 247, .14) 18%,\n      transparent 36%),\n    linear-gradient(\n      110deg,\n      #063a72 0%,\n      #041f46 58%,\n      #021a38 100%);\n}\n.career-story-grid {\n  max-width: 1300px;\n}\n.career-story-card {\n  min-height: 255px;\n  padding: 20px 18px 50px;\n  border: 0;\n  border-radius: 16px;\n  background: #2f7cf7;\n}\n.career-story-label {\n  display: inline-block;\n  margin: 0 0 14px;\n  padding: 4px 9px;\n  border: 1px solid rgba(255, 255, 255, .35);\n  border-radius: 999px;\n  color: #eaf5ff;\n  font-size: 9px;\n  font-weight: 700;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.career-story-top {\n  display: grid;\n  grid-template-columns: 90px minmax(0, 1fr);\n  gap: 20px;\n  align-items: start;\n}\n.career-story-top img {\n  width: 80px;\n  height: 80px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  background: #dceaff;\n  object-fit: cover;\n}\n.career-story-top p {\n  margin: 1px 0 0;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  line-height: 1.48;\n}\n.career-story-card h3 {\n  margin: 14px 0 3px;\n  font-size: 18px;\n}\n.career-story-card > .career-story-role {\n  color: #dceaff;\n  font-size: 13px;\n  font-weight: 500;\n  letter-spacing: 0;\n  text-transform: none;\n}\n.career-story-card > i {\n  position: absolute;\n  right: 18px;\n  bottom: 16px;\n  color: #fff;\n  font-size: 40px;\n  font-style: normal;\n  font-variation-settings: "FILL" 1;\n}\n.career-next-step {\n  padding: 80px clamp(24px, 4vw, 64px) 65px;\n}\n.career-switch-banner {\n  grid-template-columns: 300px 330px minmax(380px, 1fr);\n  min-height: 194px;\n  overflow: visible;\n  border-radius: 15px;\n  background:\n    linear-gradient(\n      90deg,\n      #1769e8,\n      #2878ff,\n      #20b8e5);\n}\n.career-switch-photo {\n  position: relative;\n  overflow: visible;\n}\n.career-switch-photo img {\n  position: absolute;\n  inset: auto 0 0;\n  width: 100%;\n  height: 220px;\n  border-radius: 0 0 0 15px;\n  object-fit: cover;\n  object-position: 72% center;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      #000 75%,\n      transparent);\n  mask-image:\n    linear-gradient(\n      90deg,\n      #000 75%,\n      transparent);\n}\n.career-switch-copy {\n  padding: 26px 28px;\n}\n.career-switch-copy h2 {\n  margin-bottom: 15px;\n  font-size: 35px;\n  font-weight: 500;\n}\n.career-switch-copy p {\n  font-size: 16px;\n  font-weight: 500;\n  line-height: 1.5;\n}\n.career-switch-actions {\n  gap: 27px;\n  padding: 24px 28px;\n}\n.career-switch-features {\n  gap: 12px;\n}\n.career-switch-features span {\n  font-size: 13px;\n  font-weight: 400;\n}\n.career-switch-features i {\n  font-size: 39px;\n}\n.career-switch-actions > a {\n  max-width: 280px;\n  width: 100%;\n  margin: auto;\n  color: #1769e8;\n  font-size: 12px;\n}\n.career-process-perks {\n  gap: 64px;\n  margin-top: 72px;\n}\n.career-block-label {\n  margin-bottom: 10px;\n  color: #3076f8;\n  font: 700 11px/1.2 var(--body);\n  letter-spacing: .28em;\n}\n.career-process h2,\n.career-perks h2 {\n  margin-bottom: 30px;\n  color: #111;\n  font-size: 30px;\n}\n.career-process-list {\n  gap: 18px;\n}\n.career-process-list i {\n  width: 68px;\n  height: 68px;\n  background:\n    linear-gradient(\n      135deg,\n      #dce8ff,\n      #d9f5ff);\n  color: #3076f8;\n}\n.career-process-list article:not(:last-child)::after {\n  color: #b0bfdf;\n}\n.career-process-list h3 {\n  font-size: 13px;\n}\n.career-process-list p {\n  color: #6b7280;\n}\n.career-perks-grid > span {\n  min-height: 64px;\n  border-color: #ececf0;\n  background: #f8f8fc;\n  color: #111;\n}\n.career-perks-grid i {\n  background:\n    linear-gradient(\n      135deg,\n      #dce8ff,\n      #d9f5ff);\n  color: #3076f8;\n}\n.career-values {\n  margin: 0;\n  padding: 58px 0 68px;\n}\n.career-values h2 {\n  color: #111;\n}\n.career-values h2 > span {\n  background:\n    linear-gradient(\n      90deg,\n      #1769e8,\n      #20b8e5);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n  -webkit-text-fill-color: transparent;\n}\n.career-values-card {\n  border-color: #ececf0;\n  background: #f8f8fc;\n}\n.career-values-card > span {\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #dce8ff,\n      #d9f5ff);\n  color: #3076f8;\n}\n@media (max-width: 1100px) {\n  .career-overview-hero .career-hero-inner {\n    grid-template-columns: 1fr 1fr;\n  }\n  .career-overview-hero .career-hero-visual {\n    height: 500px;\n  }\n  .career-why-inner {\n    grid-template-columns: 1fr;\n  }\n  .career-why-intro {\n    max-width: 650px;\n  }\n  .career-switch-banner {\n    grid-template-columns: 230px 1fr;\n  }\n  .career-switch-actions {\n    grid-column: 1/-1;\n  }\n  .career-process-perks {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 760px) {\n  .career-overview-hero {\n    min-height: 0;\n  }\n  .career-overview-hero .career-hero-inner {\n    grid-template-columns: 1fr;\n    width: min(100% - 40px, 650px);\n    padding-top: 48px;\n  }\n  .career-overview-hero .career-hero-copy {\n    max-width: none;\n    padding: 0;\n    text-align: center;\n  }\n  .career-overview-hero .career-hero-eyebrow {\n    justify-content: center;\n  }\n  .career-overview-hero .career-hero-benefits {\n    margin-inline: auto;\n  }\n  .career-hero-actions {\n    justify-content: center;\n  }\n  .career-overview-hero .career-hero-visual {\n    height: 330px;\n    transform: translateY(24px);\n  }\n  .career-overview-hero .career-hero-visual::before {\n    right: 50%;\n    top: 26px;\n    width: 280px;\n    height: 280px;\n    background:\n      radial-gradient(\n        circle,\n        transparent 0 35px,\n        #386ce3 36px 54px,\n        transparent 55px 75px,\n        #386ce3 76px 95px,\n        transparent 96px 115px,\n        #386ce3 116px 136px,\n        transparent 137px);\n    transform: translateX(50%);\n  }\n  .career-overview-hero .career-hero-visual::after {\n    right: calc(50% - 9px);\n    top: 36px;\n    width: 18px;\n    height: 255px;\n  }\n  .career-overview-hero .career-hero-photo {\n    right: 50%;\n    width: min(115%, 560px);\n    max-height: 325px;\n    transform: translateX(50%);\n  }\n  .career-impact-strip {\n    margin-top: -28px;\n  }\n  .career-impact-inner {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 24px 12px;\n  }\n  .career-impact-item {\n    justify-content: flex-start;\n  }\n  .career-impact-item:first-child {\n    padding-left: 0;\n  }\n  .career-why-cards {\n    grid-template-columns: 1fr 1fr;\n  }\n  .career-life-grid {\n    grid-template-columns: 1fr;\n  }\n  .career-life-card:not(:first-child) {\n    display: block;\n  }\n  .career-life-card {\n    max-width: 520px;\n  }\n  .career-life-photo {\n    height: auto;\n    aspect-ratio: 4/3;\n  }\n  .career-switch-banner {\n    grid-template-columns: 1fr;\n  }\n  .career-switch-photo {\n    height: 190px;\n  }\n  .career-switch-photo img {\n    height: 210px;\n    border-radius: 15px 15px 0 0;\n    -webkit-mask-image: linear-gradient(#000 75%, transparent);\n    mask-image: linear-gradient(#000 75%, transparent);\n  }\n  .career-process-list {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n@media (max-width: 520px) {\n  .career-overview-hero .career-hero-inner {\n    width: min(100% - 32px, 650px);\n  }\n  .career-overview-hero h1 {\n    font-size: 36px;\n  }\n  .career-overview-hero .career-hero-benefits {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .career-hero-actions a {\n    width: 100%;\n  }\n  .career-impact-strip {\n    padding-inline: 16px;\n  }\n  .career-impact-inner {\n    grid-template-columns: 1fr;\n    padding: 22px;\n  }\n  .career-why {\n    padding-inline: 18px;\n  }\n  .career-why-cards {\n    grid-template-columns: 1fr;\n  }\n  .career-stories {\n    padding-inline: 18px;\n  }\n  .career-story-card {\n    min-height: 0;\n  }\n  .career-story-top {\n    grid-template-columns: 64px 1fr;\n    gap: 14px;\n  }\n  .career-story-top img {\n    width: 60px;\n    height: 60px;\n  }\n  .career-story-top p {\n    font-size: 13px;\n  }\n  .career-next-step {\n    padding: 60px 18px 44px;\n  }\n  .career-process-list {\n    grid-template-columns: 1fr 1fr;\n  }\n  .career-values {\n    padding-inline: 18px;\n  }\n}\n/*# sourceMappingURL=company.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyPage, { className: "CompanyPage", filePath: "src/app/pages/company.page.ts", lineNumber: 25 });
})();
export {
  CompanyPage
};
//# sourceMappingURL=chunk-25GTO5QK.js.map
