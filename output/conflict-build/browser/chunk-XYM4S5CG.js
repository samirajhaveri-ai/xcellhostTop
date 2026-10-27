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
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/data/escalation.data.ts
var ESCALATION_DEPARTMENTS = [
  {
    "id": "windows",
    "name": "Cloud Windows",
    "icon": "desktop_windows",
    "coverage": "Windows Private Cloud Server & Public Cloud Server Related, Operating system related, Application installation, Server maintenance and Monitoring related issues",
    "contacts": [
      {
        "level": "Primary contact",
        "role": "SERVER+MTG Support Helpdesk",
        "name": "Cloud Operations Executive",
        "email": "support@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": ""
      },
      {
        "level": "Level 1",
        "role": "Cloud Executive",
        "name": "Saurav Yadav",
        "email": "sauravy@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918657032534"
      },
      {
        "level": "Level 2",
        "role": "Team Lead  - Cloud Server",
        "name": "Santosh Behera",
        "email": "santoshb@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+917666926257"
      },
      {
        "level": "Level 3",
        "role": "Manager Windows",
        "name": "Amit Yadav",
        "email": "Amity@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+917084507734"
      }
    ]
  },
  {
    "id": "linux",
    "name": "Cloud Linux",
    "icon": "terminal",
    "coverage": "Linux Private Cloud Server & Public Cloud Server related, based Websites, FTP, DNS, Control Panel, Mailing Related issues, SSL issues",
    "contacts": [
      {
        "level": "Primary contact",
        "role": "Linux Support Helpdesk",
        "name": "Cloud Linux Support Executive",
        "email": "support@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": ""
      },
      {
        "level": "Level 1",
        "role": "Cloud Linux Engineer",
        "name": "Amit Verma",
        "email": "amitv@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918828127278"
      },
      {
        "level": "Level 2",
        "role": "Team Lead - Cloud Linux",
        "name": "Dilkhush Dhopavkar",
        "email": "dilkhushd@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918828127278"
      },
      {
        "level": "Level 3",
        "role": "Cloud Service Delivery Manager",
        "name": "Rizwan Shaikh",
        "email": "rizwans@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918828127278"
      }
    ]
  },
  {
    "id": "messaging",
    "name": "Cloud Messaging",
    "icon": "mail",
    "coverage": "Windows based Websites, FTP, DNS, Control Panel, Mailing Related issues, SSL issues",
    "contacts": [
      {
        "level": "Primary contact",
        "role": "MSG Support Helpdesk",
        "name": "Cloud Windows Support Executive",
        "email": "support@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": ""
      },
      {
        "level": "Level 1",
        "role": "Team Lead - Cloud Messaging",
        "name": "Sujeet Vishwakarma",
        "email": "sujeetv@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+917028202721"
      },
      {
        "level": "Level 2",
        "role": "Team Lead",
        "name": "Mohammad Tallah",
        "email": "mohammadt@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+917028202721"
      },
      {
        "level": "Level 3",
        "role": "Cloud Service Delivery Manager",
        "name": "Rizwan Shaikh",
        "email": "rizwans@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918828127278"
      }
    ]
  },
  {
    "id": "database",
    "name": "Cloud Database",
    "icon": "database",
    "coverage": "Microsoft SQL Database related issues",
    "contacts": [
      {
        "level": "Primary contact",
        "role": "Database Support Helpdesk",
        "name": "Cloud Database Support Executive",
        "email": "support@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": ""
      },
      {
        "level": "Level 1",
        "role": "Cloud Database Specialist",
        "name": "Manisha Gupta",
        "email": "manishag@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+917268868310"
      },
      {
        "level": "Level 2",
        "role": "Team Lead - Cloud Windows",
        "name": "Amit Yadav",
        "email": "Amity@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+917084507734"
      },
      {
        "level": "Level 3",
        "role": "Cloud Service Delivery Manager",
        "name": "Rizwan Shaikh",
        "email": "rizwans@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918828127278"
      }
    ]
  },
  {
    "id": "network",
    "name": "Cloud Network",
    "icon": "lan",
    "coverage": "Network related, Internet Connectivity Related, Server Security related and Antivirus Related matters",
    "contacts": [
      {
        "level": "Primary contact",
        "role": "Network Support Helpdesk",
        "name": "Cloud Network Support Executive",
        "email": "support@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": ""
      },
      {
        "level": "Level 1",
        "role": "Cloud Security Engineer",
        "name": "Santosh Behera",
        "email": "santoshb@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+917666926257"
      },
      {
        "level": "Level 2",
        "role": "Team Lead - System",
        "name": "Danish Kasmani",
        "email": "danishk@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918828127278"
      },
      {
        "level": "Level 3",
        "role": "Cloud Service Delivery Manager",
        "name": "Rizwan Shaikh",
        "email": "rizwans@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918828127278"
      }
    ]
  },
  {
    "id": "backup",
    "name": "Cloud Backup",
    "icon": "backup",
    "coverage": "Network related, Internet Connectivity Related, Server Security related and Antivirus Related matters",
    "contacts": [
      {
        "level": "Primary contact",
        "role": "Network Support Helpdesk",
        "name": "Cloud Network Support Executive",
        "email": "support@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": ""
      },
      {
        "level": "Level 1",
        "role": "Cloud Backup Engineer",
        "name": "Saurav Yadav",
        "email": "sauravy@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918657032534"
      },
      {
        "level": "Level 2",
        "role": "Team Lead - Cloud Backup Executive",
        "name": "Manisha Gupta",
        "email": "manishag@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+917268868310"
      },
      {
        "level": "Level 3",
        "role": "Cloud Backup Manager",
        "name": "Sharif Shaikh",
        "email": "sharifs@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918828127278"
      }
    ]
  },
  {
    "id": "sales",
    "name": "Cloud Sales",
    "icon": "handshake",
    "coverage": "",
    "contacts": [
      {
        "level": "Primary contact",
        "role": "Cloud Inside Sales Specialist",
        "name": "Cloud Advisor - PreSales",
        "email": "support@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": ""
      },
      {
        "level": "Level 1",
        "role": "Cloud Advisor - PreSales",
        "name": "Ajay Gupta",
        "email": "ajayg@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918591857830"
      },
      {
        "level": "Level 2",
        "role": "Team Lead - Cloud Advisor - Sales",
        "name": "Vijay Ram Das",
        "email": "vijayramd@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+917980760594"
      },
      {
        "level": "Level 3",
        "role": "Cloud Pre - Sales Manager",
        "name": "Rashed Sayyed",
        "email": "Rasheds@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918433989914"
      }
    ]
  },
  {
    "id": "billing",
    "name": "Customer Billing",
    "icon": "receipt_long",
    "coverage": "",
    "contacts": [
      {
        "level": "Primary contact",
        "role": "Cloud Payable",
        "name": "Cloud Payable Executive",
        "email": "support@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": ""
      },
      {
        "level": "Level 1",
        "role": "Cloud Payable Executive",
        "name": "Rutuja Bhoga",
        "email": "rutujab@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918108440740"
      },
      {
        "level": "Level 2",
        "role": "Cloud Billing Executive",
        "name": "Abhishek Pandey",
        "email": "abhishekp@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+919004660960"
      },
      {
        "level": "Level 3",
        "role": "Account Receivable Executive",
        "name": "Sanjay Jade",
        "email": "sanjayj@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918097785983"
      }
    ]
  },
  {
    "id": "success",
    "name": "Customer Success",
    "icon": "sentiment_satisfied",
    "coverage": "Customer Related Issues & Support",
    "contacts": [
      {
        "level": "Primary contact",
        "role": "Network Support Helpdesk",
        "name": "Cloud Network Support Executive",
        "email": "support@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": ""
      },
      {
        "level": "Level 1",
        "role": "Executive",
        "name": "Vaishnavi Ghagare",
        "email": "vaishnavig@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918451010685"
      },
      {
        "level": "Level 2",
        "role": "Team Lead",
        "name": "Purva Angre",
        "email": "purvaa@xcellhost.cloud",
        "phone": "+912267111555",
        "mobile": "+918451010685"
      }
    ]
  }
];

// src/app/pages/escalation-matrix.page.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.level;
function EscalationMatrixPage_For_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function EscalationMatrixPage_For_77_Template_button_click_0_listener() {
      const department_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectedId.set(department_r2.id));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 39);
    \u0275\u0275text(6, "\u203A");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const department_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r2.selectedId() === department_r2.id);
    \u0275\u0275attribute("aria-pressed", ctx_r2.selectedId() === department_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(department_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(department_r2.name);
  }
}
function EscalationMatrixPage_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "strong");
    \u0275\u0275text(2, "What this team covers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.selected().coverage);
  }
}
function EscalationMatrixPage_For_99_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 46)(1, "span", 10);
    \u0275\u0275text(2, "smartphone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "small");
    \u0275\u0275text(5, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 47);
    \u0275\u0275text(8, "\u2197");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("href", "tel:" + contact_r4.mobile, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatPhone(contact_r4.mobile));
  }
}
function EscalationMatrixPage_For_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 40)(1, "div", 41)(2, "span", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 43);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 44);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 45)(11, "a", 46)(12, "span", 10);
    \u0275\u0275text(13, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "small");
    \u0275\u0275text(16, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 47);
    \u0275\u0275text(19, "\u2197");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "a", 46)(21, "span", 10);
    \u0275\u0275text(22, "call");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span")(24, "small");
    \u0275\u0275text(25, "Office phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 47);
    \u0275\u0275text(28, "\u2197");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(29, EscalationMatrixPage_For_99_Conditional_29_Template, 9, 2, "a", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r4 = ctx.$implicit;
    const \u0275$index_178_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("em-first", \u0275$index_178_r5 === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contact_r4.level);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_178_r5 === 0 ? "START HERE" : "ESCALATION 0" + \u0275$index_178_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contact_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contact_r4.role);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + contact_r4.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(contact_r4.email);
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "tel:" + contact_r4.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.formatPhone(contact_r4.phone));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(contact_r4.mobile ? 29 : -1);
  }
}
var EscalationMatrixPage = class _EscalationMatrixPage {
  departments = ESCALATION_DEPARTMENTS;
  selectedId = signal(this.departments[0].id, ...ngDevMode ? [{ debugName: "selectedId" }] : []);
  selected = computed(() => this.departments.find((item) => item.id === this.selectedId()), ...ngDevMode ? [{ debugName: "selected" }] : []);
  constructor() {
    inject(SeoService).set("Escalation Matrix - XcellHost", "Find your XcellHost support team, department escalation contacts, email addresses and phone numbers.", "/escalation-matrix/");
  }
  formatPhone(phone) {
    return phone === "+912267111555" ? "+91 22 6711 1555" : phone.replace(/^(\+91)(\d{5})(\d{5})$/, "$1 $2 $3");
  }
  static \u0275fac = function EscalationMatrixPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EscalationMatrixPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EscalationMatrixPage, selectors: [["xh-escalation-matrix-page"]], decls: 130, vars: 4, consts: [[1, "em-page"], [1, "em-hero"], [1, "em-wrap"], ["aria-label", "Breadcrumb", 1, "em-breadcrumb"], ["routerLink", "/"], [1, "em-hero-grid"], [1, "em-eyebrow"], [1, "em-intro"], [1, "em-hero-actions"], ["href", "https://supportdesk.xcellhost.cloud", "target", "_blank", "rel", "noopener noreferrer", 1, "em-button", "em-primary"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["aria-hidden", "true"], ["href", "tel:+912267111555", 1, "em-button", "em-secondary"], ["aria-labelledby", "escalation-guide", 1, "em-guide"], ["id", "escalation-guide"], ["aria-labelledby", "matrix-title", 1, "em-directory", "em-wrap"], [1, "em-section-heading"], ["id", "matrix-title"], [1, "em-count"], [1, "em-layout"], [1, "em-sidebar"], ["role", "group", "aria-label", "Choose a department", 1, "em-departments"], ["type", "button", "aria-controls", "department-contacts", 3, "is-active"], [1, "em-ticket-note"], ["id", "department-contacts", 1, "em-results"], [1, "em-department-heading"], ["aria-hidden", "true", 1, "em-department-icon", "material-symbols-outlined"], ["role", "status"], [1, "em-coverage"], [1, "em-contact-grid"], [1, "em-contact", 3, "em-first"], ["aria-label", "Emergency escalation and management", 1, "em-wrap", "em-bottom"], [1, "em-emergency"], ["aria-hidden", "true", 1, "em-emergency-icon", "material-symbols-outlined"], ["href", "mailto:escalation@xcellhost.cloud"], [1, "em-management"], ["href", "mailto:samir@xcellhost.cloud"], ["href", "tel:+919867256975"], ["type", "button", "aria-controls", "department-contacts", 3, "click"], ["aria-hidden", "true", 1, "em-arrow"], [1, "em-contact"], [1, "em-card-top"], [1, "em-level"], [1, "em-step"], [1, "em-role"], [1, "em-contact-links"], [3, "href"], ["aria-hidden", "true", 1, "em-link-arrow"]], template: function EscalationMatrixPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "nav", 3)(4, "a", 4);
      \u0275\u0275text(5, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Escalation Matrix");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "div")(12, "span", 6);
      \u0275\u0275text(13, "CUSTOMER SUPPORT \xB7 ESCALATION DIRECTORY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h1");
      \u0275\u0275text(15, "The right people.");
      \u0275\u0275element(16, "br");
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "The next step.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "p", 7);
      \u0275\u0275text(20, "Your direct line to the team behind your cloud. Find your department, connect with support, and follow the escalation path when you need more help.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "a", 9)(23, "span", 10);
      \u0275\u0275text(24, "confirmation_number");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, "Open support desk");
      \u0275\u0275elementStart(26, "span", 11);
      \u0275\u0275text(27, "\u2197");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "a", 12)(29, "span", 10);
      \u0275\u0275text(30, "call");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, "+91 22 6711 1555");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "aside", 13)(33, "span", 6);
      \u0275\u0275text(34, "A CLEAR PATH TO SUPPORT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "h2", 14);
      \u0275\u0275text(36, "Start here. We\u2019ll help you forward.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "ol")(38, "li")(39, "span");
      \u0275\u0275text(40, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div")(42, "strong");
      \u0275\u0275text(43, "Choose your department");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p");
      \u0275\u0275text(45, "Find the team for your service or enquiry.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "li")(47, "span");
      \u0275\u0275text(48, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div")(50, "strong");
      \u0275\u0275text(51, "Connect with your primary contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "p");
      \u0275\u0275text(53, "Open a ticket or contact the helpdesk.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(54, "li")(55, "span");
      \u0275\u0275text(56, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "div")(58, "strong");
      \u0275\u0275text(59, "Follow the escalation levels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "p");
      \u0275\u0275text(61, "Use the next contact if you need further assistance.");
      \u0275\u0275elementEnd()()()()()()()();
      \u0275\u0275elementStart(62, "section", 15)(63, "div", 16)(64, "div")(65, "span", 6);
      \u0275\u0275text(66, "FIND YOUR TEAM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "h2", 17);
      \u0275\u0275text(68, "Escalation Matrix");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "span", 18);
      \u0275\u0275text(70, "9 departments \xB7 One support network");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div", 19)(72, "aside", 20)(73, "h3");
      \u0275\u0275text(74, "Departments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 21);
      \u0275\u0275repeaterCreate(76, EscalationMatrixPage_For_77_Template, 7, 5, "button", 22, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 23)(79, "span", 10);
      \u0275\u0275text(80, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82, "Already have a ticket?");
      \u0275\u0275element(83, "br");
      \u0275\u0275elementStart(84, "strong");
      \u0275\u0275text(85, "Keep your ticket number handy");
      \u0275\u0275elementEnd();
      \u0275\u0275text(86, " when contacting the next level.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 24)(88, "div", 25)(89, "div", 26);
      \u0275\u0275text(90);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div")(92, "h3");
      \u0275\u0275text(93);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "p", 27);
      \u0275\u0275text(95);
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(96, EscalationMatrixPage_Conditional_96_Template, 5, 1, "div", 28);
      \u0275\u0275elementStart(97, "div", 29);
      \u0275\u0275repeaterCreate(98, EscalationMatrixPage_For_99_Template, 30, 11, "article", 30, _forTrack1);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(100, "section", 31)(101, "article", 32)(102, "span", 33);
      \u0275\u0275text(103, "priority_high");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div")(105, "span", 6);
      \u0275\u0275text(106, "NEED FURTHER ASSISTANCE?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "h2");
      \u0275\u0275text(108, "Emergency & escalations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "p");
      \u0275\u0275text(110, "Reach the XcellHost team directly for emergency or escalation assistance.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "a", 34);
      \u0275\u0275text(112, "escalation@xcellhost.cloud ");
      \u0275\u0275elementStart(113, "span", 11);
      \u0275\u0275text(114, "\u2197");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(115, "article", 35)(116, "span", 6);
      \u0275\u0275text(117, "MANAGEMENT CONTACT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "h2");
      \u0275\u0275text(119, "Mr. Samir Jhaveri");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "p");
      \u0275\u0275text(121, "Managing Director");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "a", 36)(123, "span", 10);
      \u0275\u0275text(124, "mail");
      \u0275\u0275elementEnd();
      \u0275\u0275text(125, "samir@xcellhost.cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "a", 37)(127, "span", 10);
      \u0275\u0275text(128, "call");
      \u0275\u0275elementEnd();
      \u0275\u0275text(129, "+91 98672 56975");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(76);
      \u0275\u0275repeater(ctx.departments);
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.selected().icon);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.selected().name);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.selected().contacts.length, " contacts \xB7 Primary contact followed by escalation levels");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.selected().coverage ? 96 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.selected().contacts);
    }
  }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  color: #102b4e;\n  font-family: var(--body,sans-serif);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.em-page[_ngcontent-%COMP%] {\n  background: #f7f9fd;\n  padding-bottom: 64px;\n}\n.em-wrap[_ngcontent-%COMP%] {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 0 28px;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.em-hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      ellipse at 85% 10%,\n      #deebff,\n      transparent 55%),\n    linear-gradient(\n      120deg,\n      #f2f7ff,\n      #fff);\n  border-bottom: 1px solid #dde6f3;\n  padding: 26px 0 54px;\n}\n.em-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 12px;\n  color: #65768d;\n  margin-bottom: 36px;\n}\n.em-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.em-hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 64px;\n  align-items: center;\n}\n.em-eyebrow[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 750;\n  letter-spacing: 1.7px;\n  color: #1b63d7;\n  line-height: 1.6;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(36px, 4.2vw, 56px);\n  line-height: 1.08;\n  letter-spacing: -2px;\n  margin: 15px 0 20px;\n  font-weight: 800;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1763df;\n}\n.em-intro[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #5b6d85;\n  max-width: 550px;\n  margin: 0;\n}\n.em-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 26px;\n}\n.em-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  gap: 9px;\n  align-items: center;\n  justify-content: center;\n  min-height: 46px;\n  padding: 12px 16px;\n  border-radius: 9px;\n  font-size: 12px;\n  font-weight: 700;\n  transition: background .15s;\n}\n.em-primary[_ngcontent-%COMP%] {\n  background: #1261ed;\n  color: white;\n  box-shadow: 0 5px 14px #1763df25;\n}\n.em-primary[_ngcontent-%COMP%]:hover {\n  background: #094bbb;\n}\n.em-secondary[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #d4e1f4;\n}\n.em-secondary[_ngcontent-%COMP%]:hover {\n  background: #edf4ff;\n}\n.em-guide[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #d8e5f6;\n  border-radius: 20px;\n  padding: 27px;\n  box-shadow: 0 16px 44px #18447a0a;\n}\n.em-guide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 1.4;\n  letter-spacing: -.5px;\n  margin: 10px 0 22px;\n}\n.em-guide[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  gap: 22px;\n}\n.em-guide[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  position: relative;\n}\n.em-guide[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  background: #ecf3ff;\n  color: #1b63d7;\n  font-size: 11px;\n  font-weight: 800;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n.em-guide[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.em-guide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #65768d;\n  line-height: 1.6;\n  margin: 4px 0 0;\n}\n.em-directory[_ngcontent-%COMP%] {\n  padding-top: 22px;\n}\n.em-section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  margin-bottom: 26px;\n}\n.em-section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 30px;\n  letter-spacing: -1px;\n  margin: 7px 0 0;\n}\n.em-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #61728b;\n  border: 1px solid #dce5f1;\n  border-radius: 20px;\n  padding: 9px 14px;\n  background: white;\n}\n.em-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 242px minmax(0, 1fr);\n  gap: 28px;\n  align-items: start;\n}\n.em-sidebar[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e0e7f1;\n  padding: 18px 12px;\n  border-radius: 15px;\n}\n.em-sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1.4px;\n  color: #738198;\n  margin: 3px 12px 14px;\n}\n.em-departments[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n}\n.em-departments[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  text-align: left;\n  min-height: 47px;\n  width: 100%;\n  padding: 11px 12px;\n  border: 1px solid transparent;\n  background: transparent;\n  border-radius: 9px;\n  color: #51637c;\n  font: 600 12px var(--body,sans-serif);\n  cursor: pointer;\n}\n.em-departments[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f1f6ff;\n}\n.em-departments[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  background: #eaf2ff;\n  border-color: #d4e4ff;\n  color: #145bce;\n}\n.em-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 19px;\n}\n.em-ticket-note[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  border-top: 1px solid #e4eaf2;\n  margin: 17px 10px 0;\n  padding-top: 18px;\n  color: #687b93;\n}\n.em-ticket-note[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.em-ticket-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 1.8;\n  margin: 0;\n}\n.em-ticket-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 650;\n}\n.em-department-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  margin: 0 0 18px;\n}\n.em-department-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background: #e8f0ff;\n  color: #1b63d7;\n}\n.em-department-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  margin: 0 0 5px;\n  letter-spacing: -.5px;\n}\n.em-department-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6c7c92;\n  margin: 0;\n  line-height: 1.6;\n}\n.em-coverage[_ngcontent-%COMP%] {\n  border: 1px solid #dbe7f7;\n  background: #eef4fc;\n  border-radius: 10px;\n  padding: 14px 17px;\n  margin-bottom: 20px;\n}\n.em-coverage[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #30547f;\n}\n.em-coverage[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.8;\n  color: #5c718c;\n  margin: 5px 0 0;\n}\n.em-contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n.em-contact[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #dce5f2;\n  border-radius: 14px;\n  padding: 21px;\n  box-shadow: 0 4px 14px #183b6c04;\n}\n.em-contact.em-first[_ngcontent-%COMP%] {\n  border-top: 3px solid #1763df;\n  padding-top: 19px;\n}\n.em-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 18px;\n}\n.em-level[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 750;\n  color: #2462b4;\n  background: #edf4ff;\n  padding: 5px 9px;\n  border-radius: 5px;\n}\n.em-step[_ngcontent-%COMP%] {\n  font-size: 8px;\n  letter-spacing: 1px;\n  color: #718199;\n  font-weight: 700;\n}\n.em-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.4;\n  margin: 0 0 5px;\n  letter-spacing: -.2px;\n}\n.em-role[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.6;\n  color: #77869a;\n  margin: 0 0 18px;\n  min-height: 35px;\n}\n.em-contact-links[_ngcontent-%COMP%] {\n  border-top: 1px solid #edf0f5;\n  padding-top: 8px;\n  display: grid;\n  gap: 2px;\n}\n.em-contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 52px;\n  padding: 6px 2px;\n  color: #225591;\n  font-size: 12px;\n  border-radius: 5px;\n  overflow-wrap: anywhere;\n}\n.em-contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #f0f6ff;\n}\n.em-contact-links[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #7491b4;\n}\n.em-contact-links[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #8290a3;\n  font-size: 9px;\n  margin-bottom: 3px;\n}\n.em-link-arrow[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #7b9bc5;\n}\n.em-bottom[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.45fr 1fr;\n  gap: 24px;\n  margin-top: 19px;\n}\n.em-emergency[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n  background: #092b57;\n  color: white;\n  border-radius: 15px;\n  padding: 28px;\n}\n.em-emergency-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  background: #ff8c2422;\n  color: #ffb067;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n}\n.em-emergency[_ngcontent-%COMP%]   .em-eyebrow[_ngcontent-%COMP%] {\n  color: #ffb067;\n  font-size: 9px;\n}\n.em-emergency[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 23px;\n  margin: 9px 0;\n}\n.em-emergency[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.8;\n  color: #b8cce5;\n  margin: 0 0 20px;\n}\n.em-emergency[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 650;\n  color: #fff;\n  overflow-wrap: anywhere;\n}\n.em-emergency[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.em-emergency[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.em-management[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #dce5f2;\n  border-radius: 15px;\n  padding: 25px;\n}\n.em-management[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 21px;\n  margin: 8px 0 4px;\n}\n.em-management[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #708199;\n  margin: 0 0 16px;\n}\n.em-management[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  color: #225591;\n  min-height: 36px;\n}\n.em-management[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.em-management[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\na[_ngcontent-%COMP%]:focus-visible, \nbutton[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #ff941c;\n  outline-offset: 4px;\n}\n@media (min-width: 1100px) {\n  .em-sidebar[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 100px;\n  }\n}\n@media (max-width: 960px) {\n  .em-hero-grid[_ngcontent-%COMP%] {\n    gap: 28px;\n    grid-template-columns: 1.15fr 1fr;\n  }\n  .em-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 205px minmax(0, 1fr);\n    gap: 20px;\n  }\n  .em-contact[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .em-contact.em-first[_ngcontent-%COMP%] {\n    padding-top: 14px;\n  }\n  .em-card-top[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .em-contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .em-bottom[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 760px) {\n  .em-wrap[_ngcontent-%COMP%] {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .em-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .em-hero[_ngcontent-%COMP%] {\n    padding-bottom: 32px;\n  }\n  .em-breadcrumb[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n  }\n  .em-guide[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .em-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .em-sidebar[_ngcontent-%COMP%] {\n    padding: 15px 10px;\n  }\n  .em-departments[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    padding: 4px 4px 10px;\n    gap: 7px;\n  }\n  .em-departments[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: auto;\n    white-space: nowrap;\n    border-color: #e1e8f2;\n    flex-shrink: 0;\n  }\n  .em-arrow[_ngcontent-%COMP%], \n   .em-ticket-note[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .em-section-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .em-directory[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .em-bottom[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .em-department-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .em-contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .em-contact[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .em-contact.em-first[_ngcontent-%COMP%] {\n    padding-top: 18px;\n  }\n  .em-role[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .em-contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .em-hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .em-emergency[_ngcontent-%COMP%] {\n    padding: 22px;\n    gap: 12px;\n  }\n  .em-emergency[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n  .em-emergency[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .em-count[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=escalation-matrix.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EscalationMatrixPage, [{
    type: Component,
    args: [{ selector: "xh-escalation-matrix-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="em-page">\r
  <section class="em-hero">\r
    <div class="em-wrap">\r
      <nav class="em-breadcrumb" aria-label="Breadcrumb"><a routerLink="/">Home</a><span>/</span><span>Escalation Matrix</span></nav>\r
      <div class="em-hero-grid">\r
        <div>\r
          <span class="em-eyebrow">CUSTOMER SUPPORT \xB7 ESCALATION DIRECTORY</span>\r
          <h1>The right people.<br><span>The next step.</span></h1>\r
          <p class="em-intro">Your direct line to the team behind your cloud. Find your department, connect with support, and follow the escalation path when you need more help.</p>\r
          <div class="em-hero-actions">\r
            <a class="em-button em-primary" href="https://supportdesk.xcellhost.cloud" target="_blank" rel="noopener noreferrer"><span class="material-symbols-outlined" aria-hidden="true">confirmation_number</span>Open support desk<span aria-hidden="true">\u2197</span></a>\r
            <a class="em-button em-secondary" href="tel:+912267111555"><span class="material-symbols-outlined" aria-hidden="true">call</span>+91 22 6711 1555</a>\r
          </div>\r
        </div>\r
        <aside class="em-guide" aria-labelledby="escalation-guide">\r
          <span class="em-eyebrow">A CLEAR PATH TO SUPPORT</span>\r
          <h2 id="escalation-guide">Start here. We\u2019ll help you forward.</h2>\r
          <ol>\r
            <li><span>01</span><div><strong>Choose your department</strong><p>Find the team for your service or enquiry.</p></div></li>\r
            <li><span>02</span><div><strong>Connect with your primary contact</strong><p>Open a ticket or contact the helpdesk.</p></div></li>\r
            <li><span>03</span><div><strong>Follow the escalation levels</strong><p>Use the next contact if you need further assistance.</p></div></li>\r
          </ol>\r
        </aside>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="em-directory em-wrap" aria-labelledby="matrix-title">\r
    <div class="em-section-heading"><div><span class="em-eyebrow">FIND YOUR TEAM</span><h2 id="matrix-title">Escalation Matrix</h2></div><span class="em-count">9 departments \xB7 One support network</span></div>\r
    <div class="em-layout">\r
      <aside class="em-sidebar">\r
        <h3>Departments</h3>\r
        <div class="em-departments" role="group" aria-label="Choose a department">\r
          @for (department of departments; track department.id) {\r
            <button type="button" [class.is-active]="selectedId() === department.id" [attr.aria-pressed]="selectedId() === department.id" aria-controls="department-contacts" (click)="selectedId.set(department.id)">\r
              <span class="material-symbols-outlined" aria-hidden="true">{{ department.icon }}</span><span>{{ department.name }}</span><span class="em-arrow" aria-hidden="true">\u203A</span>\r
            </button>\r
          }\r
        </div>\r
        <div class="em-ticket-note"><span class="material-symbols-outlined" aria-hidden="true">info</span><p>Already have a ticket?<br><strong>Keep your ticket number handy</strong> when contacting the next level.</p></div>\r
      </aside>\r
\r
      <div id="department-contacts" class="em-results">\r
        <div class="em-department-heading"><div class="em-department-icon material-symbols-outlined" aria-hidden="true">{{ selected().icon }}</div><div><h3>{{ selected().name }}</h3><p role="status">{{ selected().contacts.length }} contacts \xB7 Primary contact followed by escalation levels</p></div></div>\r
        @if (selected().coverage) { <div class="em-coverage"><strong>What this team covers</strong><p>{{ selected().coverage }}</p></div> }\r
        <div class="em-contact-grid">\r
          @for (contact of selected().contacts; track contact.level; let first = $first; let index = $index) {\r
            <article class="em-contact" [class.em-first]="first">\r
              <div class="em-card-top"><span class="em-level">{{ contact.level }}</span><span class="em-step">{{ first ? 'START HERE' : 'ESCALATION 0' + index }}</span></div>\r
              <h4>{{ contact.name }}</h4><p class="em-role">{{ contact.role }}</p>\r
              <div class="em-contact-links">\r
                <a [href]="'mailto:' + contact.email"><span class="material-symbols-outlined" aria-hidden="true">mail</span><span><small>Email</small>{{ contact.email }}</span><span class="em-link-arrow" aria-hidden="true">\u2197</span></a>\r
                <a [href]="'tel:' + contact.phone"><span class="material-symbols-outlined" aria-hidden="true">call</span><span><small>Office phone</small>{{ formatPhone(contact.phone) }}</span><span class="em-link-arrow" aria-hidden="true">\u2197</span></a>\r
                @if (contact.mobile) { <a [href]="'tel:' + contact.mobile"><span class="material-symbols-outlined" aria-hidden="true">smartphone</span><span><small>Mobile</small>{{ formatPhone(contact.mobile) }}</span><span class="em-link-arrow" aria-hidden="true">\u2197</span></a> }\r
              </div>\r
            </article>\r
          }\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="em-wrap em-bottom" aria-label="Emergency escalation and management">\r
    <article class="em-emergency"><span class="em-emergency-icon material-symbols-outlined" aria-hidden="true">priority_high</span><div><span class="em-eyebrow">NEED FURTHER ASSISTANCE?</span><h2>Emergency &amp; escalations</h2><p>Reach the XcellHost team directly for emergency or escalation assistance.</p><a href="mailto:escalation@xcellhost.cloud">escalation&#64;xcellhost.cloud <span aria-hidden="true">\u2197</span></a></div></article>\r
    <article class="em-management"><span class="em-eyebrow">MANAGEMENT CONTACT</span><h2>Mr. Samir Jhaveri</h2><p>Managing Director</p><a href="mailto:samir@xcellhost.cloud"><span class="material-symbols-outlined" aria-hidden="true">mail</span>samir&#64;xcellhost.cloud</a><a href="tel:+919867256975"><span class="material-symbols-outlined" aria-hidden="true">call</span>+91 98672 56975</a></article>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/pages/escalation-matrix.page.css */\n:host {\n  display: block;\n  color: #102b4e;\n  font-family: var(--body,sans-serif);\n}\n* {\n  box-sizing: border-box;\n}\n.em-page {\n  background: #f7f9fd;\n  padding-bottom: 64px;\n}\n.em-wrap {\n  max-width: 1180px;\n  margin: 0 auto;\n  padding: 0 28px;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n.material-symbols-outlined {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.em-hero {\n  background:\n    radial-gradient(\n      ellipse at 85% 10%,\n      #deebff,\n      transparent 55%),\n    linear-gradient(\n      120deg,\n      #f2f7ff,\n      #fff);\n  border-bottom: 1px solid #dde6f3;\n  padding: 26px 0 54px;\n}\n.em-breadcrumb {\n  display: flex;\n  gap: 12px;\n  font-size: 12px;\n  color: #65768d;\n  margin-bottom: 36px;\n}\n.em-breadcrumb a:hover {\n  text-decoration: underline;\n}\n.em-hero-grid {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 64px;\n  align-items: center;\n}\n.em-eyebrow {\n  font-size: 10px;\n  font-weight: 750;\n  letter-spacing: 1.7px;\n  color: #1b63d7;\n  line-height: 1.6;\n}\nh1 {\n  font-size: clamp(36px, 4.2vw, 56px);\n  line-height: 1.08;\n  letter-spacing: -2px;\n  margin: 15px 0 20px;\n  font-weight: 800;\n}\nh1 span {\n  color: #1763df;\n}\n.em-intro {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #5b6d85;\n  max-width: 550px;\n  margin: 0;\n}\n.em-hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 26px;\n}\n.em-button {\n  display: inline-flex;\n  gap: 9px;\n  align-items: center;\n  justify-content: center;\n  min-height: 46px;\n  padding: 12px 16px;\n  border-radius: 9px;\n  font-size: 12px;\n  font-weight: 700;\n  transition: background .15s;\n}\n.em-primary {\n  background: #1261ed;\n  color: white;\n  box-shadow: 0 5px 14px #1763df25;\n}\n.em-primary:hover {\n  background: #094bbb;\n}\n.em-secondary {\n  background: white;\n  border: 1px solid #d4e1f4;\n}\n.em-secondary:hover {\n  background: #edf4ff;\n}\n.em-guide {\n  background: #fff;\n  border: 1px solid #d8e5f6;\n  border-radius: 20px;\n  padding: 27px;\n  box-shadow: 0 16px 44px #18447a0a;\n}\n.em-guide h2 {\n  font-size: 20px;\n  line-height: 1.4;\n  letter-spacing: -.5px;\n  margin: 10px 0 22px;\n}\n.em-guide ol {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: grid;\n  gap: 22px;\n}\n.em-guide li {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  position: relative;\n}\n.em-guide li > span {\n  display: grid;\n  place-items: center;\n  background: #ecf3ff;\n  color: #1b63d7;\n  font-size: 11px;\n  font-weight: 800;\n  border-radius: 50%;\n  width: 32px;\n  height: 32px;\n  flex-shrink: 0;\n}\n.em-guide strong {\n  font-size: 12px;\n}\n.em-guide p {\n  font-size: 11px;\n  color: #65768d;\n  line-height: 1.6;\n  margin: 4px 0 0;\n}\n.em-directory {\n  padding-top: 22px;\n}\n.em-section-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 18px;\n  margin-bottom: 26px;\n}\n.em-section-heading h2 {\n  font-size: 30px;\n  letter-spacing: -1px;\n  margin: 7px 0 0;\n}\n.em-count {\n  font-size: 11px;\n  color: #61728b;\n  border: 1px solid #dce5f1;\n  border-radius: 20px;\n  padding: 9px 14px;\n  background: white;\n}\n.em-layout {\n  display: grid;\n  grid-template-columns: 242px minmax(0, 1fr);\n  gap: 28px;\n  align-items: start;\n}\n.em-sidebar {\n  background: #fff;\n  border: 1px solid #e0e7f1;\n  padding: 18px 12px;\n  border-radius: 15px;\n}\n.em-sidebar h3 {\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 1.4px;\n  color: #738198;\n  margin: 3px 12px 14px;\n}\n.em-departments {\n  display: grid;\n  gap: 5px;\n}\n.em-departments button {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  text-align: left;\n  min-height: 47px;\n  width: 100%;\n  padding: 11px 12px;\n  border: 1px solid transparent;\n  background: transparent;\n  border-radius: 9px;\n  color: #51637c;\n  font: 600 12px var(--body,sans-serif);\n  cursor: pointer;\n}\n.em-departments button:hover {\n  background: #f1f6ff;\n}\n.em-departments button.is-active {\n  background: #eaf2ff;\n  border-color: #d4e4ff;\n  color: #145bce;\n}\n.em-arrow {\n  margin-left: auto;\n  font-size: 19px;\n}\n.em-ticket-note {\n  display: flex;\n  gap: 9px;\n  border-top: 1px solid #e4eaf2;\n  margin: 17px 10px 0;\n  padding-top: 18px;\n  color: #687b93;\n}\n.em-ticket-note .material-symbols-outlined {\n  font-size: 18px;\n}\n.em-ticket-note p {\n  font-size: 10px;\n  line-height: 1.8;\n  margin: 0;\n}\n.em-ticket-note strong {\n  font-weight: 650;\n}\n.em-department-heading {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  margin: 0 0 18px;\n}\n.em-department-icon {\n  display: grid;\n  place-items: center;\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  background: #e8f0ff;\n  color: #1b63d7;\n}\n.em-department-heading h3 {\n  font-size: 22px;\n  margin: 0 0 5px;\n  letter-spacing: -.5px;\n}\n.em-department-heading p {\n  font-size: 11px;\n  color: #6c7c92;\n  margin: 0;\n  line-height: 1.6;\n}\n.em-coverage {\n  border: 1px solid #dbe7f7;\n  background: #eef4fc;\n  border-radius: 10px;\n  padding: 14px 17px;\n  margin-bottom: 20px;\n}\n.em-coverage strong {\n  font-size: 11px;\n  color: #30547f;\n}\n.em-coverage p {\n  font-size: 11px;\n  line-height: 1.8;\n  color: #5c718c;\n  margin: 5px 0 0;\n}\n.em-contact-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 18px;\n}\n.em-contact {\n  background: #fff;\n  border: 1px solid #dce5f2;\n  border-radius: 14px;\n  padding: 21px;\n  box-shadow: 0 4px 14px #183b6c04;\n}\n.em-contact.em-first {\n  border-top: 3px solid #1763df;\n  padding-top: 19px;\n}\n.em-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 18px;\n}\n.em-level {\n  font-size: 10px;\n  font-weight: 750;\n  color: #2462b4;\n  background: #edf4ff;\n  padding: 5px 9px;\n  border-radius: 5px;\n}\n.em-step {\n  font-size: 8px;\n  letter-spacing: 1px;\n  color: #718199;\n  font-weight: 700;\n}\n.em-contact h4 {\n  font-size: 16px;\n  line-height: 1.4;\n  margin: 0 0 5px;\n  letter-spacing: -.2px;\n}\n.em-role {\n  font-size: 11px;\n  line-height: 1.6;\n  color: #77869a;\n  margin: 0 0 18px;\n  min-height: 35px;\n}\n.em-contact-links {\n  border-top: 1px solid #edf0f5;\n  padding-top: 8px;\n  display: grid;\n  gap: 2px;\n}\n.em-contact-links a {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 52px;\n  padding: 6px 2px;\n  color: #225591;\n  font-size: 12px;\n  border-radius: 5px;\n  overflow-wrap: anywhere;\n}\n.em-contact-links a:hover {\n  background: #f0f6ff;\n}\n.em-contact-links .material-symbols-outlined {\n  font-size: 18px;\n  color: #7491b4;\n}\n.em-contact-links small {\n  display: block;\n  color: #8290a3;\n  font-size: 9px;\n  margin-bottom: 3px;\n}\n.em-link-arrow {\n  margin-left: auto;\n  color: #7b9bc5;\n}\n.em-bottom {\n  display: grid;\n  grid-template-columns: 1.45fr 1fr;\n  gap: 24px;\n  margin-top: 19px;\n}\n.em-emergency {\n  display: flex;\n  gap: 20px;\n  align-items: flex-start;\n  background: #092b57;\n  color: white;\n  border-radius: 15px;\n  padding: 28px;\n}\n.em-emergency-icon {\n  display: grid;\n  place-items: center;\n  background: #ff8c2422;\n  color: #ffb067;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n}\n.em-emergency .em-eyebrow {\n  color: #ffb067;\n  font-size: 9px;\n}\n.em-emergency h2 {\n  font-size: 23px;\n  margin: 9px 0;\n}\n.em-emergency p {\n  font-size: 12px;\n  line-height: 1.8;\n  color: #b8cce5;\n  margin: 0 0 20px;\n}\n.em-emergency a {\n  font-size: 14px;\n  font-weight: 650;\n  color: #fff;\n  overflow-wrap: anywhere;\n}\n.em-emergency a:hover {\n  text-decoration: underline;\n}\n.em-emergency a span {\n  margin-left: 8px;\n}\n.em-management {\n  background: white;\n  border: 1px solid #dce5f2;\n  border-radius: 15px;\n  padding: 25px;\n}\n.em-management h2 {\n  font-size: 21px;\n  margin: 8px 0 4px;\n}\n.em-management p {\n  font-size: 11px;\n  color: #708199;\n  margin: 0 0 16px;\n}\n.em-management a {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  font-size: 12px;\n  color: #225591;\n  min-height: 36px;\n}\n.em-management a:hover {\n  text-decoration: underline;\n}\n.em-management .material-symbols-outlined {\n  font-size: 17px;\n}\na:focus-visible,\nbutton:focus-visible {\n  outline: 3px solid #ff941c;\n  outline-offset: 4px;\n}\n@media (min-width: 1100px) {\n  .em-sidebar {\n    position: sticky;\n    top: 100px;\n  }\n}\n@media (max-width: 960px) {\n  .em-hero-grid {\n    gap: 28px;\n    grid-template-columns: 1.15fr 1fr;\n  }\n  .em-layout {\n    grid-template-columns: 205px minmax(0, 1fr);\n    gap: 20px;\n  }\n  .em-contact {\n    padding: 16px;\n  }\n  .em-contact.em-first {\n    padding-top: 14px;\n  }\n  .em-card-top {\n    flex-wrap: wrap;\n  }\n  .em-contact-links a {\n    font-size: 11px;\n  }\n  .em-bottom {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 760px) {\n  .em-wrap {\n    padding-left: 20px;\n    padding-right: 20px;\n  }\n  .em-hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .em-hero {\n    padding-bottom: 32px;\n  }\n  .em-breadcrumb {\n    margin-bottom: 24px;\n  }\n  .em-guide {\n    padding: 22px;\n  }\n  .em-layout {\n    grid-template-columns: 1fr;\n  }\n  .em-sidebar {\n    padding: 15px 10px;\n  }\n  .em-departments {\n    display: flex;\n    overflow-x: auto;\n    padding: 4px 4px 10px;\n    gap: 7px;\n  }\n  .em-departments button {\n    width: auto;\n    white-space: nowrap;\n    border-color: #e1e8f2;\n    flex-shrink: 0;\n  }\n  .em-arrow,\n  .em-ticket-note {\n    display: none;\n  }\n  .em-section-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .em-directory {\n    padding-top: 30px;\n  }\n  .em-bottom {\n    grid-template-columns: 1fr;\n  }\n  .em-department-heading h3 {\n    font-size: 20px;\n  }\n}\n@media (max-width: 480px) {\n  .em-contact-grid {\n    grid-template-columns: 1fr;\n  }\n  .em-contact {\n    padding: 20px;\n  }\n  .em-contact.em-first {\n    padding-top: 18px;\n  }\n  .em-role {\n    min-height: 0;\n  }\n  .em-contact-links a {\n    font-size: 13px;\n  }\n  .em-hero-actions {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .em-emergency {\n    padding: 22px;\n    gap: 12px;\n  }\n  .em-emergency h2 {\n    font-size: 20px;\n  }\n  .em-emergency a {\n    font-size: 12px;\n  }\n  .em-count {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=escalation-matrix.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EscalationMatrixPage, { className: "EscalationMatrixPage", filePath: "src/app/pages/escalation-matrix.page.ts", lineNumber: 14 });
})();
export {
  EscalationMatrixPage
};
//# sourceMappingURL=chunk-XYM4S5CG.js.map
