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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/data/partner-matrix.data.ts
var PARTNER_TEAMS = [
  {
    id: "sales",
    name: "Channel Sales",
    icon: "handshake",
    description: "Field and regional sales contacts for channel partners and end-customer opportunities.",
    contacts: [
      { name: "Mr. Syed Rashed", designation: "Cloud Sales Advisor - West", email: "rasheds@xcellhost.cloud", officePhone: "", city: "Aurangabad", mobile: "+918433989914", purpose: "End customers" },
      { name: "Mr. Ajay Gupta", designation: "Cloud Sales Advisor - West", email: "ajayg@xcellhost.cloud", officePhone: "", city: "Mumbai", mobile: "+918591857830", purpose: "Field sales" }
    ]
  },
  {
    id: "presales",
    name: "Pre-Sales",
    icon: "lightbulb",
    description: "Solution guidance for cloud security, productivity, email and partner opportunities.",
    contacts: [
      { name: "Mr. Vijay Ram Das", designation: "Technical Support Executive - L3", email: "vijayramd@xcellhost.cloud", officePhone: "", city: "Kolkata", mobile: "+917980760594", purpose: "Security services pre-sales" },
      { name: "Mr. Mohammad Talha", designation: "Cloud Productivity Pre-Sales Advisor", email: "mohammadt@xcellhost.cloud", officePhone: "", city: "Aurangabad", mobile: "+917028202721", purpose: "Email services pre-sales" },
      { name: "Mr. Amit Yadav", designation: "Cloud Security Pre-Sales Advisor", email: "amity@xcellhost.cloud", officePhone: "", city: "Mumbai", mobile: "+917084507734", purpose: "Support issues" },
      { name: "Mr. Rizwan Shaikh", designation: "Service Delivery Manager", email: "rizwans@xcellhost.cloud", officePhone: "+912267111555", city: "Mumbai", mobile: "+918828127278", purpose: "Pre-sales" }
    ]
  },
  {
    id: "support",
    name: "Partner Support",
    icon: "support_agent",
    description: "Technical assistance and issue coordination for active partner services.",
    contacts: [
      { name: "Mr. Santosh Kumar Behera", designation: "Technical Support Executive - L2", email: "santoshb@xcellhost.cloud", officePhone: "", city: "Mumbai", mobile: "+919556539937", purpose: "Support issues" }
    ]
  },
  {
    id: "finance-admin",
    name: "Finance & Admin",
    icon: "receipt_long",
    description: "Billing, accounts payable and vendor administration contacts.",
    contacts: [
      { name: "Mr. Abhishek Pandey", designation: "Billing Manager", email: "abhishekp@xcellhost.cloud", officePhone: "+912267111521", city: "Mumbai", mobile: "+919004660960", purpose: "Billing" },
      { name: "Mr. Sanjay Jade", designation: "Accounts Payable", email: "sanjayj@xcellhost.cloud", officePhone: "+912267111520", city: "Mumbai", mobile: "+918657475375", purpose: "Vendors only" },
      { name: "Mrs. Mayuri Shinde", designation: "General Admin", email: "mayuris@xcellhost.cloud", officePhone: "+912267111555", city: "Mumbai", mobile: "+918657475374", purpose: "Vendors only" }
    ]
  },
  {
    id: "leadership",
    name: "Leadership",
    icon: "workspace_premium",
    description: "Executive contact for strategic channel sales and partnership direction.",
    contacts: [
      { name: "Mr. Samir Jhaveri", designation: "Managing Director", email: "samir@xcellhost.cloud", officePhone: "+912267111555", city: "Mumbai", mobile: "+919867256975", purpose: "Strategic sales" }
    ]
  }
];

// src/app/pages/partner-matrix.page.ts
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.email;
function PartnerMatrixPage_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function PartnerMatrixPage_Conditional_88_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSearch());
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275elementEnd();
  }
}
function PartnerMatrixPage_For_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function PartnerMatrixPage_For_102_Template_button_click_0_listener() {
      const team_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectTeam(team_r4.id));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "b");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("is-active", ctx_r1.selectedId() === team_r4.id);
    \u0275\u0275attribute("aria-pressed", ctx_r1.selectedId() === team_r4.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.teamCount(team_r4.id));
  }
}
function PartnerMatrixPage_For_115_For_11_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 45)(1, "span", 10);
    \u0275\u0275text(2, "business_center");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span")(4, "small");
    \u0275\u0275text(5, "Office");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "b", 46);
    \u0275\u0275text(8, "\u2197");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const contact_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("href", "tel:" + contact_r6.officePhone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatPhone(contact_r6.officePhone));
  }
}
function PartnerMatrixPage_For_115_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 41)(1, "div", 42)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b")(5, "span", 10);
    \u0275\u0275text(6, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h4");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 43);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 44)(13, "a", 45)(14, "span", 10);
    \u0275\u0275text(15, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span")(17, "small");
    \u0275\u0275text(18, "Email & Teams");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "b", 46);
    \u0275\u0275text(21, "\u2197");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, PartnerMatrixPage_For_115_For_11_Conditional_22_Template, 9, 2, "a", 45);
    \u0275\u0275elementStart(23, "a", 45)(24, "span", 10);
    \u0275\u0275text(25, "smartphone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span")(27, "small");
    \u0275\u0275text(28, "Mobile");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "b", 46);
    \u0275\u0275text(31, "\u2197");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const contact_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(contact_r6.purpose);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(contact_r6.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contact_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(contact_r6.designation);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + contact_r6.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(contact_r6.email);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(contact_r6.officePhone ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("href", "tel:" + contact_r6.mobile, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.formatPhone(contact_r6.mobile));
  }
}
function PartnerMatrixPage_For_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 32)(1, "div", 38)(2, "span", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3", 39);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 40);
    \u0275\u0275repeaterCreate(10, PartnerMatrixPage_For_115_For_11_Template, 32, 9, "article", 41, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const team_r7 = ctx.$implicit;
    \u0275\u0275attribute("aria-labelledby", team_r7.id + "-title");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(team_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", team_r7.id + "-title");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(team_r7.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(team_r7.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(team_r7.contacts);
  }
}
function PartnerMatrixPage_ForEmpty_116_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 10);
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No contacts found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try a different search or select all contacts.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function PartnerMatrixPage_ForEmpty_116_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.clearSearch();
      return \u0275\u0275resetView(ctx_r1.selectTeam("all"));
    });
    \u0275\u0275text(8, "Reset directory");
    \u0275\u0275elementEnd()();
  }
}
var ALL_TEAMS = "all";
var PartnerMatrixPage = class _PartnerMatrixPage {
  teams = PARTNER_TEAMS;
  selectedId = signal(ALL_TEAMS, ...ngDevMode ? [{ debugName: "selectedId" }] : []);
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  contactCount = this.teams.reduce((total, team) => total + team.contacts.length, 0);
  visibleTeams = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    const teams = this.selectedId() === ALL_TEAMS ? this.teams : this.teams.filter((team) => team.id === this.selectedId());
    return teams.map((team) => __spreadProps(__spreadValues({}, team), {
      contacts: team.contacts.filter((contact) => !query || `${contact.name} ${contact.designation} ${contact.email} ${contact.city} ${contact.purpose}`.toLocaleLowerCase().includes(query))
    })).filter((team) => team.contacts.length > 0);
  }, ...ngDevMode ? [{ debugName: "visibleTeams" }] : []);
  visibleCount = computed(() => this.visibleTeams().reduce((total, team) => total + team.contacts.length, 0), ...ngDevMode ? [{ debugName: "visibleCount" }] : []);
  constructor() {
    inject(SeoService).set("Channel Partner Contact Matrix - XcellHost", "Find the right XcellHost channel sales, pre-sales, support, billing and leadership contact.", "/partner-matrix/");
  }
  selectTeam(id) {
    this.selectedId.set(id);
  }
  search(event) {
    this.query.set(event.target.value);
  }
  clearSearch() {
    this.query.set("");
  }
  teamCount(id) {
    if (id === ALL_TEAMS)
      return this.contactCount;
    return this.teams.find((team) => team.id === id)?.contacts.length ?? 0;
  }
  formatPhone(phone) {
    return phone.replace(/^(\+91)(\d{2})(\d{4})(\d{4})$/, "$1 $2 $3 $4").replace(/^(\+91)(\d{5})(\d{5})$/, "$1 $2 $3");
  }
  static \u0275fac = function PartnerMatrixPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PartnerMatrixPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PartnerMatrixPage, selectors: [["xh-partner-matrix-page"]], decls: 145, vars: 11, consts: [[1, "pm-page"], [1, "pm-hero"], [1, "pm-wrap"], ["aria-label", "Breadcrumb", 1, "pm-breadcrumb"], ["routerLink", "/"], [1, "pm-hero-grid"], [1, "pm-eyebrow"], [1, "pm-intro"], [1, "pm-hero-actions"], ["routerLink", "/company/partner-signup", 1, "pm-button", "pm-primary"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["href", "tel:+912267111555", 1, "pm-button", "pm-secondary"], ["aria-labelledby", "partner-guide-title", 1, "pm-guide"], ["id", "partner-guide-title"], ["aria-label", "Partner directory overview", 1, "pm-stats"], ["aria-labelledby", "partner-matrix-title", 1, "pm-directory", "pm-wrap"], [1, "pm-section-heading"], ["id", "partner-matrix-title"], [1, "pm-search"], ["aria-hidden", "true", "viewBox", "0 0 24 24"], ["cx", "11", "cy", "11", "r", "6.5"], ["d", "m16 16 4 4"], ["type", "search", "placeholder", "Search name, city or service...", 3, "input", "value"], ["type", "button", "aria-label", "Clear search"], [1, "pm-layout"], [1, "pm-sidebar"], ["role", "group", "aria-label", "Filter partner contacts by team", 1, "pm-team-list"], ["type", "button", 3, "click"], ["type", "button", 3, "is-active"], [1, "pm-note"], ["aria-live", "polite", 1, "pm-results"], [1, "pm-results-bar"], [1, "pm-team-section"], [1, "pm-empty"], ["aria-label", "Partner assistance", 1, "pm-wrap", "pm-bottom"], ["href", "mailto:sales@xcellhost.cloud"], ["href", "tel:+912267111555"], ["type", "button", "aria-label", "Clear search", 3, "click"], [1, "pm-team-heading"], [3, "id"], [1, "pm-contact-grid"], [1, "pm-contact"], [1, "pm-card-top"], [1, "pm-role"], [1, "pm-contact-links"], [3, "href"], ["aria-hidden", "true"]], template: function PartnerMatrixPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "nav", 3)(4, "a", 4);
      \u0275\u0275text(5, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span");
      \u0275\u0275text(7, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Partner Matrix");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 5)(11, "div")(12, "span", 6);
      \u0275\u0275text(13, "XCELLHOST CHANNEL NETWORK");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "h1");
      \u0275\u0275text(15, "Your partner team.");
      \u0275\u0275element(16, "br");
      \u0275\u0275elementStart(17, "span");
      \u0275\u0275text(18, "One clear path.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "p", 7);
      \u0275\u0275text(20, "Connect directly with the right XcellHost specialist for sales, solution design, support, billing or strategic partnership guidance.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "div", 8)(22, "a", 9)(23, "span", 10);
      \u0275\u0275text(24, "handshake");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, "Become a partner ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 11)(27, "span", 10);
      \u0275\u0275text(28, "call");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, "+91 22 6711 1555 ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "aside", 12)(31, "span", 6);
      \u0275\u0275text(32, "FIND THE RIGHT CONTACT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "h2", 13);
      \u0275\u0275text(34, "Move opportunities forward, faster.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "ol")(36, "li")(37, "span");
      \u0275\u0275text(38, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div")(40, "strong");
      \u0275\u0275text(41, "Choose a team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "p");
      \u0275\u0275text(43, "Filter the directory by the help you need.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(44, "li")(45, "span");
      \u0275\u0275text(46, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "div")(48, "strong");
      \u0275\u0275text(49, "Find your specialist");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p");
      \u0275\u0275text(51, "Review their role, location and contact purpose.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(52, "li")(53, "span");
      \u0275\u0275text(54, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div")(56, "strong");
      \u0275\u0275text(57, "Connect directly");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "p");
      \u0275\u0275text(59, "Email or call from any contact card.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(60, "div", 14)(61, "div")(62, "b");
      \u0275\u0275text(63);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "Partner contacts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div")(67, "b");
      \u0275\u0275text(68);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "span");
      \u0275\u0275text(70, "Specialist teams");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(71, "div")(72, "b");
      \u0275\u0275text(73, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "span");
      \u0275\u0275text(75, "Indian locations");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(76, "section", 15)(77, "div", 16)(78, "div")(79, "span", 6);
      \u0275\u0275text(80, "PARTNER DIRECTORY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "h2", 17);
      \u0275\u0275text(82, "Channel Partner Contact Matrix");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "label", 18);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(84, "svg", 19);
      \u0275\u0275element(85, "circle", 20)(86, "path", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(87, "input", 22);
      \u0275\u0275listener("input", function PartnerMatrixPage_Template_input_input_87_listener($event) {
        return ctx.search($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(88, PartnerMatrixPage_Conditional_88_Template, 2, 0, "button", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "div", 24)(90, "aside", 25)(91, "h3");
      \u0275\u0275text(92, "Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "div", 26)(94, "button", 27);
      \u0275\u0275listener("click", function PartnerMatrixPage_Template_button_click_94_listener() {
        return ctx.selectTeam("all");
      });
      \u0275\u0275elementStart(95, "span", 10);
      \u0275\u0275text(96, "groups");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span");
      \u0275\u0275text(98, "All contacts");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "b");
      \u0275\u0275text(100);
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(101, PartnerMatrixPage_For_102_Template, 7, 6, "button", 28, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "div", 29)(104, "span", 10);
      \u0275\u0275text(105, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107, "Choose the contact whose purpose best matches your requirement.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 30)(109, "div", 31)(110, "span");
      \u0275\u0275text(111);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "span");
      \u0275\u0275text(113, "Updated from the partner contact matrix");
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(114, PartnerMatrixPage_For_115_Template, 12, 5, "section", 32, _forTrack0, false, PartnerMatrixPage_ForEmpty_116_Template, 9, 0, "div", 33);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(117, "section", 34)(118, "article")(119, "span", 10);
      \u0275\u0275text(120, "rocket_launch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "div")(122, "span", 6);
      \u0275\u0275text(123, "START A CONVERSATION");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(124, "h2");
      \u0275\u0275text(125, "Ready to grow with XcellHost?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "p");
      \u0275\u0275text(127, "Join our partner ecosystem and build new cloud, security and digital-trust opportunities with specialist support.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(128, "a", 9);
      \u0275\u0275text(129, "Apply to partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "aside")(131, "span", 6);
      \u0275\u0275text(132, "GENERAL ENQUIRY");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "h2");
      \u0275\u0275text(134, "Not sure who to contact?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "p");
      \u0275\u0275text(136, "Our central team will route your request.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "a", 35)(138, "span", 10);
      \u0275\u0275text(139, "mail");
      \u0275\u0275elementEnd();
      \u0275\u0275text(140, "sales@xcellhost.cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "a", 36)(142, "span", 10);
      \u0275\u0275text(143, "call");
      \u0275\u0275elementEnd();
      \u0275\u0275text(144, "+91 22 6711 1555");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(63);
      \u0275\u0275textInterpolate(ctx.contactCount);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.teams.length);
      \u0275\u0275advance(19);
      \u0275\u0275property("value", ctx.query());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.query() ? 88 : -1);
      \u0275\u0275advance(6);
      \u0275\u0275classProp("is-active", ctx.selectedId() === "all");
      \u0275\u0275attribute("aria-pressed", ctx.selectedId() === "all");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.teamCount("all"));
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.teams);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate2("", ctx.visibleCount(), " matching contact", ctx.visibleCount() === 1 ? "" : "s");
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.visibleTeams());
    }
  }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  color: #102b4e;\n  font-family: var(--body,sans-serif);\n}\n*[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 21px;\n  flex: none;\n}\n.pm-page[_ngcontent-%COMP%] {\n  padding-bottom: 66px;\n  background:\n    linear-gradient(\n      180deg,\n      #f5f9ff 0,\n      #fff 50%);\n}\n.pm-wrap[_ngcontent-%COMP%] {\n  width: min(1180px, calc(100% - 48px));\n  margin: 0 auto;\n}\n.pm-hero[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 28px 0 0;\n  border-bottom: 1px solid #d9e5f4;\n  background:\n    radial-gradient(\n      circle at 82% 12%,\n      rgba(245, 142, 31, .2),\n      transparent 22%),\n    radial-gradient(\n      circle at 75% 5%,\n      rgba(24, 103, 221, .18),\n      transparent 45%),\n    linear-gradient(\n      125deg,\n      #f4f8ff,\n      #fff);\n}\n.pm-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 11px;\n  margin-bottom: 36px;\n  color: #64768e;\n  font-size: 12px;\n}\n.pm-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.pm-hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.2fr .8fr;\n  gap: 58px;\n  align-items: center;\n  padding-bottom: 42px;\n}\n.pm-eyebrow[_ngcontent-%COMP%] {\n  color: #1763df;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 1.7px;\n  line-height: 1.5;\n}\nh1[_ngcontent-%COMP%] {\n  margin: 14px 0 19px;\n  color: #09274f;\n  font-size: clamp(38px, 4.3vw, 58px);\n  font-weight: 800;\n  letter-spacing: -2.4px;\n  line-height: 1.06;\n}\nh1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1763df;\n}\n.pm-intro[_ngcontent-%COMP%] {\n  max-width: 610px;\n  margin: 0;\n  color: #5a6e87;\n  font-size: 15px;\n  line-height: 1.8;\n}\n.pm-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 11px;\n  margin-top: 25px;\n}\n.pm-button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 46px;\n  padding: 12px 17px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 750;\n  transition:\n    transform .18s,\n    background .18s,\n    box-shadow .18s;\n}\n.pm-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.pm-primary[_ngcontent-%COMP%] {\n  background: #1261ed;\n  color: #fff;\n  box-shadow: 0 8px 22px rgba(18, 97, 237, .22);\n}\n.pm-primary[_ngcontent-%COMP%]:hover {\n  background: #094bbb;\n}\n.pm-secondary[_ngcontent-%COMP%] {\n  border: 1px solid #d1deef;\n  background: #fff;\n  color: #18385f;\n}\n.pm-secondary[_ngcontent-%COMP%]:hover {\n  background: #edf4ff;\n}\n.pm-guide[_ngcontent-%COMP%] {\n  padding: 28px;\n  border: 1px solid #d7e4f5;\n  border-radius: 21px;\n  background: rgba(255, 255, 255, .88);\n  box-shadow: 0 18px 50px rgba(13, 58, 116, .09);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.pm-guide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 22px;\n  font-size: 21px;\n  letter-spacing: -.6px;\n  line-height: 1.35;\n}\n.pm-guide[_ngcontent-%COMP%]   ol[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.pm-guide[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n}\n.pm-guide[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 33px;\n  height: 33px;\n  border-radius: 50%;\n  background: #eaf2ff;\n  color: #1763df;\n  font-size: 10px;\n  font-weight: 800;\n}\n.pm-guide[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.pm-guide[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #687c94;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.pm-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  overflow: hidden;\n  border: 1px solid #d7e4f4;\n  border-bottom: 0;\n  border-radius: 18px 18px 0 0;\n  background: #fff;\n  box-shadow: 0 -8px 30px rgba(10, 48, 96, .05);\n}\n.pm-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 19px 24px;\n  border-right: 1px solid #e2eaf5;\n}\n.pm-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border: 0;\n}\n.pm-stats[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: #0d55c2;\n  font-size: 24px;\n  line-height: 1;\n}\n.pm-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 7px;\n  color: #6b7e95;\n  font-size: 11px;\n}\n.pm-directory[_ngcontent-%COMP%] {\n  padding-top: 22px;\n}\n.pm-section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 28px;\n  margin-bottom: 26px;\n}\n.pm-section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 6px 0 0;\n  font-size: 30px;\n  letter-spacing: -1px;\n}\n.pm-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: min(390px, 100%);\n  min-height: 52px;\n  padding: 0 13px;\n  border: 1px solid #cfdded;\n  border-radius: 13px;\n  background: #fff;\n  box-shadow: 0 10px 28px rgba(12, 49, 95, .06);\n}\n.pm-search[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  fill: none;\n  stroke: #617b9a;\n  stroke-linecap: round;\n  stroke-width: 2;\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  padding: 13px 9px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #102b4e;\n  font: 600 12px var(--body,sans-serif);\n}\n.pm-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8392a5;\n}\n.pm-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  border-radius: 50%;\n  background: #edf4ff;\n  color: #1763df;\n  font-size: 19px;\n  cursor: pointer;\n}\n.pm-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #1763df;\n  outline: 3px solid rgba(23, 99, 223, .14);\n}\n.pm-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 245px minmax(0, 1fr);\n  gap: 28px;\n  align-items: start;\n}\n.pm-sidebar[_ngcontent-%COMP%] {\n  padding: 18px 12px;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n  background: #fff;\n}\n.pm-sidebar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 3px 12px 13px;\n  color: #738299;\n  font-size: 10px;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n}\n.pm-team-list[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 5px;\n}\n.pm-team-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 22px minmax(0, 1fr) auto;\n  gap: 10px;\n  align-items: center;\n  width: 100%;\n  min-height: 48px;\n  padding: 10px 12px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: transparent;\n  color: #50647e;\n  text-align: left;\n  font: 650 12px var(--body,sans-serif);\n  cursor: pointer;\n}\n.pm-team-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f1f6ff;\n}\n.pm-team-list[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%] {\n  border-color: #d1e1fb;\n  background: #eaf2ff;\n  color: #145bce;\n}\n.pm-team-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  min-width: 25px;\n  height: 25px;\n  padding: 0 5px;\n  border-radius: 50%;\n  background: #f1f5fa;\n  color: #657d9a;\n  font-size: 9px;\n}\n.pm-team-list[_ngcontent-%COMP%]   button.is-active[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background: #1763df;\n  color: #fff;\n}\n.pm-note[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  margin: 17px 10px 0;\n  padding-top: 17px;\n  border-top: 1px solid #e5ebf3;\n  color: #687c94;\n}\n.pm-note[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.pm-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 10px;\n  line-height: 1.7;\n}\n.pm-results[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.pm-results-bar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 12px 15px;\n  border: 1px solid #dce7f5;\n  border-radius: 10px;\n  background: #f1f6fd;\n  color: #5b718d;\n  font-size: 10px;\n}\n.pm-results-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #245488;\n  font-weight: 750;\n}\n.pm-team-section[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.pm-team-heading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 13px;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.pm-team-heading[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #e8f1ff;\n  color: #1763df;\n}\n.pm-team-heading[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 21px;\n  letter-spacing: -.5px;\n}\n.pm-team-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6c7e94;\n  font-size: 11px;\n  line-height: 1.55;\n}\n.pm-contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 17px;\n}\n.pm-contact[_ngcontent-%COMP%] {\n  padding: 20px;\n  border: 1px solid #dce5f2;\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 8px 26px rgba(13, 48, 91, .045);\n  transition:\n    transform .18s,\n    box-shadow .18s,\n    border-color .18s;\n}\n.pm-contact[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  border-color: #bcd2f1;\n  box-shadow: 0 16px 36px rgba(13, 48, 91, .09);\n}\n.pm-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 9px;\n  margin-bottom: 16px;\n}\n.pm-card-top[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  padding: 5px 8px;\n  border-radius: 6px;\n  background: #edf4ff;\n  color: #1e5eaf;\n  font-size: 9px;\n  font-weight: 750;\n  text-transform: uppercase;\n}\n.pm-card-top[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  color: #71849b;\n  font-size: 9px;\n}\n.pm-card-top[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.pm-contact[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 5px;\n  font-size: 17px;\n  letter-spacing: -.2px;\n}\n.pm-role[_ngcontent-%COMP%] {\n  min-height: 34px;\n  margin: 0 0 15px;\n  color: #718198;\n  font-size: 11px;\n  line-height: 1.55;\n}\n.pm-contact-links[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2px;\n  padding-top: 8px;\n  border-top: 1px solid #edf1f6;\n}\n.pm-contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 49px;\n  padding: 5px 2px;\n  border-radius: 6px;\n  color: #225591;\n  font-size: 11px;\n  overflow-wrap: anywhere;\n}\n.pm-contact-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #f1f6ff;\n}\n.pm-contact-links[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #7590b1;\n  font-size: 18px;\n}\n.pm-contact-links[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 2px;\n  color: #8795a7;\n  font-size: 8px;\n}\n.pm-contact-links[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #85a0c1;\n  font-size: 13px;\n}\n.pm-empty[_ngcontent-%COMP%] {\n  padding: 58px 25px;\n  border: 1px dashed #bbcee7;\n  border-radius: 17px;\n  background: #f8fbff;\n  text-align: center;\n}\n.pm-empty[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #3972b7;\n  font-size: 42px;\n}\n.pm-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 9px 0 5px;\n}\n.pm-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6d8097;\n  font-size: 12px;\n}\n.pm-empty[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 10px 15px;\n  border: 0;\n  border-radius: 8px;\n  background: #1763df;\n  color: #fff;\n  font-weight: 700;\n  cursor: pointer;\n}\n.pm-bottom[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.5fr .8fr;\n  gap: 22px;\n  margin-top: 12px;\n}\n.pm-bottom[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 19px;\n  padding: 27px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      120deg,\n      #092b57,\n      #0d4d9c);\n  color: #fff;\n}\n.pm-bottom[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 45px;\n  height: 45px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, .1);\n  color: #ffaf63;\n}\n.pm-bottom[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]   .pm-eyebrow[_ngcontent-%COMP%] {\n  color: #ffb067;\n}\n.pm-bottom[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 7px 0 5px;\n  font-size: 22px;\n}\n.pm-bottom[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #bed0e7;\n  font-size: 11px;\n  line-height: 1.65;\n}\n.pm-bottom[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]   .pm-button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  white-space: nowrap;\n  background: #ff8518;\n}\n.pm-bottom[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]   .pm-button[_ngcontent-%COMP%]:hover {\n  background: #e86f00;\n}\n.pm-bottom[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%] {\n  padding: 24px;\n  border: 1px solid #dce5f2;\n  border-radius: 16px;\n  background: #fff;\n}\n.pm-bottom[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 7px 0 5px;\n  font-size: 19px;\n}\n.pm-bottom[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: #728299;\n  font-size: 11px;\n}\n.pm-bottom[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  min-height: 34px;\n  color: #225591;\n  font-size: 11px;\n}\n.pm-bottom[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.pm-bottom[_ngcontent-%COMP%]    > aside[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 17px;\n}\na[_ngcontent-%COMP%]:focus-visible, \nbutton[_ngcontent-%COMP%]:focus-visible, \ninput[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #ff941c;\n  outline-offset: 3px;\n}\n@media (min-width: 1001px) {\n  .pm-sidebar[_ngcontent-%COMP%] {\n    position: sticky;\n    top: 96px;\n  }\n}\n@media (max-width: 900px) {\n  .pm-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    gap: 28px;\n  }\n  .pm-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 210px minmax(0, 1fr);\n    gap: 20px;\n  }\n  .pm-contact[_ngcontent-%COMP%] {\n    padding: 17px;\n  }\n  .pm-bottom[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pm-bottom[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]   .pm-button[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n}\n@media (max-width: 760px) {\n  .pm-wrap[_ngcontent-%COMP%] {\n    width: min(100% - 36px, 1180px);\n  }\n  .pm-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pm-hero[_ngcontent-%COMP%] {\n    padding-top: 24px;\n  }\n  .pm-breadcrumb[_ngcontent-%COMP%] {\n    margin-bottom: 25px;\n  }\n  .pm-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .pm-section-heading[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .pm-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .pm-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pm-sidebar[_ngcontent-%COMP%] {\n    padding: 14px 10px;\n  }\n  .pm-team-list[_ngcontent-%COMP%] {\n    display: flex;\n    overflow-x: auto;\n    padding: 3px 3px 9px;\n  }\n  .pm-team-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    grid-template-columns: 20px auto auto;\n    width: auto;\n    flex: none;\n    white-space: nowrap;\n  }\n  .pm-note[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pm-results-bar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n    display: none;\n  }\n  .pm-bottom[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .pm-bottom[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%]   .pm-button[_ngcontent-%COMP%] {\n    width: 100%;\n    margin: 0;\n  }\n  .pm-team-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    max-width: 55ch;\n  }\n}\n@media (max-width: 520px) {\n  .pm-wrap[_ngcontent-%COMP%] {\n    width: min(100% - 28px, 1180px);\n  }\n  h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .pm-guide[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .pm-stats[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pm-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    border-right: 0;\n    border-bottom: 1px solid #e2eaf5;\n  }\n  .pm-stats[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    border: 0;\n  }\n  .pm-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .pm-contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pm-contact[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .pm-role[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .pm-bottom[_ngcontent-%COMP%]    > article[_ngcontent-%COMP%] {\n    padding: 22px;\n  }\n  .pm-hero-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .pm-button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=partner-matrix.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PartnerMatrixPage, [{
    type: Component,
    args: [{ selector: "xh-partner-matrix-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="pm-page">\r
  <section class="pm-hero">\r
    <div class="pm-wrap">\r
      <nav class="pm-breadcrumb" aria-label="Breadcrumb">\r
        <a routerLink="/">Home</a><span>/</span><span>Partner Matrix</span>\r
      </nav>\r
      <div class="pm-hero-grid">\r
        <div>\r
          <span class="pm-eyebrow">XCELLHOST CHANNEL NETWORK</span>\r
          <h1>Your partner team.<br><span>One clear path.</span></h1>\r
          <p class="pm-intro">Connect directly with the right XcellHost specialist for sales, solution design, support, billing or strategic partnership guidance.</p>\r
          <div class="pm-hero-actions">\r
            <a class="pm-button pm-primary" routerLink="/company/partner-signup">\r
              <span class="material-symbols-outlined" aria-hidden="true">handshake</span>Become a partner\r
            </a>\r
            <a class="pm-button pm-secondary" href="tel:+912267111555">\r
              <span class="material-symbols-outlined" aria-hidden="true">call</span>+91 22 6711 1555\r
            </a>\r
          </div>\r
        </div>\r
        <aside class="pm-guide" aria-labelledby="partner-guide-title">\r
          <span class="pm-eyebrow">FIND THE RIGHT CONTACT</span>\r
          <h2 id="partner-guide-title">Move opportunities forward, faster.</h2>\r
          <ol>\r
            <li><span>01</span><div><strong>Choose a team</strong><p>Filter the directory by the help you need.</p></div></li>\r
            <li><span>02</span><div><strong>Find your specialist</strong><p>Review their role, location and contact purpose.</p></div></li>\r
            <li><span>03</span><div><strong>Connect directly</strong><p>Email or call from any contact card.</p></div></li>\r
          </ol>\r
        </aside>\r
      </div>\r
      <div class="pm-stats" aria-label="Partner directory overview">\r
        <div><b>{{ contactCount }}</b><span>Partner contacts</span></div>\r
        <div><b>{{ teams.length }}</b><span>Specialist teams</span></div>\r
        <div><b>3</b><span>Indian locations</span></div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="pm-directory pm-wrap" aria-labelledby="partner-matrix-title">\r
    <div class="pm-section-heading">\r
      <div><span class="pm-eyebrow">PARTNER DIRECTORY</span><h2 id="partner-matrix-title">Channel Partner Contact Matrix</h2></div>\r
      <label class="pm-search">\r
        <svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="11" cy="11" r="6.5"></circle><path d="m16 16 4 4"></path></svg>\r
        <input type="search" placeholder="Search name, city or service..." [value]="query()" (input)="search($event)" />\r
        @if (query()) { <button type="button" aria-label="Clear search" (click)="clearSearch()">&times;</button> }\r
      </label>\r
    </div>\r
\r
    <div class="pm-layout">\r
      <aside class="pm-sidebar">\r
        <h3>Teams</h3>\r
        <div class="pm-team-list" role="group" aria-label="Filter partner contacts by team">\r
          <button type="button" [class.is-active]="selectedId() === 'all'" [attr.aria-pressed]="selectedId() === 'all'" (click)="selectTeam('all')">\r
            <span class="material-symbols-outlined" aria-hidden="true">groups</span><span>All contacts</span><b>{{ teamCount('all') }}</b>\r
          </button>\r
          @for (team of teams; track team.id) {\r
            <button type="button" [class.is-active]="selectedId() === team.id" [attr.aria-pressed]="selectedId() === team.id" (click)="selectTeam(team.id)">\r
              <span class="material-symbols-outlined" aria-hidden="true">{{ team.icon }}</span><span>{{ team.name }}</span><b>{{ teamCount(team.id) }}</b>\r
            </button>\r
          }\r
        </div>\r
        <div class="pm-note"><span class="material-symbols-outlined" aria-hidden="true">info</span><p>Choose the contact whose purpose best matches your requirement.</p></div>\r
      </aside>\r
\r
      <div class="pm-results" aria-live="polite">\r
        <div class="pm-results-bar"><span>{{ visibleCount() }} matching contact{{ visibleCount() === 1 ? '' : 's' }}</span><span>Updated from the partner contact matrix</span></div>\r
        @for (team of visibleTeams(); track team.id) {\r
          <section class="pm-team-section" [attr.aria-labelledby]="team.id + '-title'">\r
            <div class="pm-team-heading">\r
              <span class="material-symbols-outlined" aria-hidden="true">{{ team.icon }}</span>\r
              <div><h3 [id]="team.id + '-title'">{{ team.name }}</h3><p>{{ team.description }}</p></div>\r
            </div>\r
            <div class="pm-contact-grid">\r
              @for (contact of team.contacts; track contact.email) {\r
                <article class="pm-contact">\r
                  <div class="pm-card-top"><span>{{ contact.purpose }}</span><b><span class="material-symbols-outlined" aria-hidden="true">location_on</span>{{ contact.city }}</b></div>\r
                  <h4>{{ contact.name }}</h4>\r
                  <p class="pm-role">{{ contact.designation }}</p>\r
                  <div class="pm-contact-links">\r
                    <a [href]="'mailto:' + contact.email"><span class="material-symbols-outlined" aria-hidden="true">mail</span><span><small>Email &amp; Teams</small>{{ contact.email }}</span><b aria-hidden="true">&#8599;</b></a>\r
                    @if (contact.officePhone) { <a [href]="'tel:' + contact.officePhone"><span class="material-symbols-outlined" aria-hidden="true">business_center</span><span><small>Office</small>{{ formatPhone(contact.officePhone) }}</span><b aria-hidden="true">&#8599;</b></a> }\r
                    <a [href]="'tel:' + contact.mobile"><span class="material-symbols-outlined" aria-hidden="true">smartphone</span><span><small>Mobile</small>{{ formatPhone(contact.mobile) }}</span><b aria-hidden="true">&#8599;</b></a>\r
                  </div>\r
                </article>\r
              }\r
            </div>\r
          </section>\r
        } @empty {\r
          <div class="pm-empty"><span class="material-symbols-outlined" aria-hidden="true">person_search</span><h3>No contacts found</h3><p>Try a different search or select all contacts.</p><button type="button" (click)="clearSearch(); selectTeam('all')">Reset directory</button></div>\r
        }\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="pm-wrap pm-bottom" aria-label="Partner assistance">\r
    <article><span class="material-symbols-outlined" aria-hidden="true">rocket_launch</span><div><span class="pm-eyebrow">START A CONVERSATION</span><h2>Ready to grow with XcellHost?</h2><p>Join our partner ecosystem and build new cloud, security and digital-trust opportunities with specialist support.</p></div><a class="pm-button pm-primary" routerLink="/company/partner-signup">Apply to partner</a></article>\r
    <aside><span class="pm-eyebrow">GENERAL ENQUIRY</span><h2>Not sure who to contact?</h2><p>Our central team will route your request.</p><a href="mailto:sales@xcellhost.cloud"><span class="material-symbols-outlined" aria-hidden="true">mail</span>sales&#64;xcellhost.cloud</a><a href="tel:+912267111555"><span class="material-symbols-outlined" aria-hidden="true">call</span>+91 22 6711 1555</a></aside>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/pages/partner-matrix.page.css */\n:host {\n  display: block;\n  color: #102b4e;\n  font-family: var(--body,sans-serif);\n}\n* {\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n  color: inherit;\n}\n.material-symbols-outlined {\n  font-size: 21px;\n  flex: none;\n}\n.pm-page {\n  padding-bottom: 66px;\n  background:\n    linear-gradient(\n      180deg,\n      #f5f9ff 0,\n      #fff 50%);\n}\n.pm-wrap {\n  width: min(1180px, calc(100% - 48px));\n  margin: 0 auto;\n}\n.pm-hero {\n  overflow: hidden;\n  padding: 28px 0 0;\n  border-bottom: 1px solid #d9e5f4;\n  background:\n    radial-gradient(\n      circle at 82% 12%,\n      rgba(245, 142, 31, .2),\n      transparent 22%),\n    radial-gradient(\n      circle at 75% 5%,\n      rgba(24, 103, 221, .18),\n      transparent 45%),\n    linear-gradient(\n      125deg,\n      #f4f8ff,\n      #fff);\n}\n.pm-breadcrumb {\n  display: flex;\n  gap: 11px;\n  margin-bottom: 36px;\n  color: #64768e;\n  font-size: 12px;\n}\n.pm-breadcrumb a:hover {\n  text-decoration: underline;\n}\n.pm-hero-grid {\n  display: grid;\n  grid-template-columns: 1.2fr .8fr;\n  gap: 58px;\n  align-items: center;\n  padding-bottom: 42px;\n}\n.pm-eyebrow {\n  color: #1763df;\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 1.7px;\n  line-height: 1.5;\n}\nh1 {\n  margin: 14px 0 19px;\n  color: #09274f;\n  font-size: clamp(38px, 4.3vw, 58px);\n  font-weight: 800;\n  letter-spacing: -2.4px;\n  line-height: 1.06;\n}\nh1 span {\n  color: #1763df;\n}\n.pm-intro {\n  max-width: 610px;\n  margin: 0;\n  color: #5a6e87;\n  font-size: 15px;\n  line-height: 1.8;\n}\n.pm-hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 11px;\n  margin-top: 25px;\n}\n.pm-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  min-height: 46px;\n  padding: 12px 17px;\n  border-radius: 10px;\n  font-size: 12px;\n  font-weight: 750;\n  transition:\n    transform .18s,\n    background .18s,\n    box-shadow .18s;\n}\n.pm-button:hover {\n  transform: translateY(-2px);\n}\n.pm-primary {\n  background: #1261ed;\n  color: #fff;\n  box-shadow: 0 8px 22px rgba(18, 97, 237, .22);\n}\n.pm-primary:hover {\n  background: #094bbb;\n}\n.pm-secondary {\n  border: 1px solid #d1deef;\n  background: #fff;\n  color: #18385f;\n}\n.pm-secondary:hover {\n  background: #edf4ff;\n}\n.pm-guide {\n  padding: 28px;\n  border: 1px solid #d7e4f5;\n  border-radius: 21px;\n  background: rgba(255, 255, 255, .88);\n  box-shadow: 0 18px 50px rgba(13, 58, 116, .09);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.pm-guide h2 {\n  margin: 10px 0 22px;\n  font-size: 21px;\n  letter-spacing: -.6px;\n  line-height: 1.35;\n}\n.pm-guide ol {\n  display: grid;\n  gap: 20px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.pm-guide li {\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n}\n.pm-guide li > span {\n  display: grid;\n  place-items: center;\n  width: 33px;\n  height: 33px;\n  border-radius: 50%;\n  background: #eaf2ff;\n  color: #1763df;\n  font-size: 10px;\n  font-weight: 800;\n}\n.pm-guide strong {\n  font-size: 12px;\n}\n.pm-guide p {\n  margin: 4px 0 0;\n  color: #687c94;\n  font-size: 11px;\n  line-height: 1.6;\n}\n.pm-stats {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  overflow: hidden;\n  border: 1px solid #d7e4f4;\n  border-bottom: 0;\n  border-radius: 18px 18px 0 0;\n  background: #fff;\n  box-shadow: 0 -8px 30px rgba(10, 48, 96, .05);\n}\n.pm-stats div {\n  padding: 19px 24px;\n  border-right: 1px solid #e2eaf5;\n}\n.pm-stats div:last-child {\n  border: 0;\n}\n.pm-stats b {\n  display: block;\n  color: #0d55c2;\n  font-size: 24px;\n  line-height: 1;\n}\n.pm-stats span {\n  display: block;\n  margin-top: 7px;\n  color: #6b7e95;\n  font-size: 11px;\n}\n.pm-directory {\n  padding-top: 22px;\n}\n.pm-section-heading {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 28px;\n  margin-bottom: 26px;\n}\n.pm-section-heading h2 {\n  margin: 6px 0 0;\n  font-size: 30px;\n  letter-spacing: -1px;\n}\n.pm-search {\n  display: flex;\n  align-items: center;\n  width: min(390px, 100%);\n  min-height: 52px;\n  padding: 0 13px;\n  border: 1px solid #cfdded;\n  border-radius: 13px;\n  background: #fff;\n  box-shadow: 0 10px 28px rgba(12, 49, 95, .06);\n}\n.pm-search svg {\n  width: 21px;\n  height: 21px;\n  fill: none;\n  stroke: #617b9a;\n  stroke-linecap: round;\n  stroke-width: 2;\n}\n.pm-search input {\n  min-width: 0;\n  flex: 1;\n  padding: 13px 9px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #102b4e;\n  font: 600 12px var(--body,sans-serif);\n}\n.pm-search input::placeholder {\n  color: #8392a5;\n}\n.pm-search button {\n  display: grid;\n  place-items: center;\n  width: 28px;\n  height: 28px;\n  border: 0;\n  border-radius: 50%;\n  background: #edf4ff;\n  color: #1763df;\n  font-size: 19px;\n  cursor: pointer;\n}\n.pm-search:focus-within {\n  border-color: #1763df;\n  outline: 3px solid rgba(23, 99, 223, .14);\n}\n.pm-layout {\n  display: grid;\n  grid-template-columns: 245px minmax(0, 1fr);\n  gap: 28px;\n  align-items: start;\n}\n.pm-sidebar {\n  padding: 18px 12px;\n  border: 1px solid #dce5f1;\n  border-radius: 16px;\n  background: #fff;\n}\n.pm-sidebar h3 {\n  margin: 3px 12px 13px;\n  color: #738299;\n  font-size: 10px;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n}\n.pm-team-list {\n  display: grid;\n  gap: 5px;\n}\n.pm-team-list button {\n  display: grid;\n  grid-template-columns: 22px minmax(0, 1fr) auto;\n  gap: 10px;\n  align-items: center;\n  width: 100%;\n  min-height: 48px;\n  padding: 10px 12px;\n  border: 1px solid transparent;\n  border-radius: 10px;\n  background: transparent;\n  color: #50647e;\n  text-align: left;\n  font: 650 12px var(--body,sans-serif);\n  cursor: pointer;\n}\n.pm-team-list button:hover {\n  background: #f1f6ff;\n}\n.pm-team-list button.is-active {\n  border-color: #d1e1fb;\n  background: #eaf2ff;\n  color: #145bce;\n}\n.pm-team-list button b {\n  display: grid;\n  place-items: center;\n  min-width: 25px;\n  height: 25px;\n  padding: 0 5px;\n  border-radius: 50%;\n  background: #f1f5fa;\n  color: #657d9a;\n  font-size: 9px;\n}\n.pm-team-list button.is-active b {\n  background: #1763df;\n  color: #fff;\n}\n.pm-note {\n  display: flex;\n  gap: 9px;\n  margin: 17px 10px 0;\n  padding-top: 17px;\n  border-top: 1px solid #e5ebf3;\n  color: #687c94;\n}\n.pm-note .material-symbols-outlined {\n  font-size: 18px;\n}\n.pm-note p {\n  margin: 0;\n  font-size: 10px;\n  line-height: 1.7;\n}\n.pm-results {\n  min-width: 0;\n}\n.pm-results-bar {\n  display: flex;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 20px;\n  padding: 12px 15px;\n  border: 1px solid #dce7f5;\n  border-radius: 10px;\n  background: #f1f6fd;\n  color: #5b718d;\n  font-size: 10px;\n}\n.pm-results-bar span:first-child {\n  color: #245488;\n  font-weight: 750;\n}\n.pm-team-section {\n  margin-bottom: 16px;\n}\n.pm-team-heading {\n  display: flex;\n  gap: 13px;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.pm-team-heading > .material-symbols-outlined {\n  display: grid;\n  place-items: center;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  background: #e8f1ff;\n  color: #1763df;\n}\n.pm-team-heading h3 {\n  margin: 0 0 4px;\n  font-size: 21px;\n  letter-spacing: -.5px;\n}\n.pm-team-heading p {\n  margin: 0;\n  color: #6c7e94;\n  font-size: 11px;\n  line-height: 1.55;\n}\n.pm-contact-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 17px;\n}\n.pm-contact {\n  padding: 20px;\n  border: 1px solid #dce5f2;\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 8px 26px rgba(13, 48, 91, .045);\n  transition:\n    transform .18s,\n    box-shadow .18s,\n    border-color .18s;\n}\n.pm-contact:hover {\n  transform: translateY(-3px);\n  border-color: #bcd2f1;\n  box-shadow: 0 16px 36px rgba(13, 48, 91, .09);\n}\n.pm-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 9px;\n  margin-bottom: 16px;\n}\n.pm-card-top > span {\n  padding: 5px 8px;\n  border-radius: 6px;\n  background: #edf4ff;\n  color: #1e5eaf;\n  font-size: 9px;\n  font-weight: 750;\n  text-transform: uppercase;\n}\n.pm-card-top > b {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  color: #71849b;\n  font-size: 9px;\n}\n.pm-card-top .material-symbols-outlined {\n  font-size: 14px;\n}\n.pm-contact h4 {\n  margin: 0 0 5px;\n  font-size: 17px;\n  letter-spacing: -.2px;\n}\n.pm-role {\n  min-height: 34px;\n  margin: 0 0 15px;\n  color: #718198;\n  font-size: 11px;\n  line-height: 1.55;\n}\n.pm-contact-links {\n  display: grid;\n  gap: 2px;\n  padding-top: 8px;\n  border-top: 1px solid #edf1f6;\n}\n.pm-contact-links a {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-height: 49px;\n  padding: 5px 2px;\n  border-radius: 6px;\n  color: #225591;\n  font-size: 11px;\n  overflow-wrap: anywhere;\n}\n.pm-contact-links a:hover {\n  background: #f1f6ff;\n}\n.pm-contact-links .material-symbols-outlined {\n  color: #7590b1;\n  font-size: 18px;\n}\n.pm-contact-links small {\n  display: block;\n  margin-bottom: 2px;\n  color: #8795a7;\n  font-size: 8px;\n}\n.pm-contact-links b {\n  margin-left: auto;\n  color: #85a0c1;\n  font-size: 13px;\n}\n.pm-empty {\n  padding: 58px 25px;\n  border: 1px dashed #bbcee7;\n  border-radius: 17px;\n  background: #f8fbff;\n  text-align: center;\n}\n.pm-empty > .material-symbols-outlined {\n  color: #3972b7;\n  font-size: 42px;\n}\n.pm-empty h3 {\n  margin: 9px 0 5px;\n}\n.pm-empty p {\n  margin: 0;\n  color: #6d8097;\n  font-size: 12px;\n}\n.pm-empty button {\n  margin-top: 16px;\n  padding: 10px 15px;\n  border: 0;\n  border-radius: 8px;\n  background: #1763df;\n  color: #fff;\n  font-weight: 700;\n  cursor: pointer;\n}\n.pm-bottom {\n  display: grid;\n  grid-template-columns: 1.5fr .8fr;\n  gap: 22px;\n  margin-top: 12px;\n}\n.pm-bottom > article {\n  display: flex;\n  align-items: center;\n  gap: 19px;\n  padding: 27px;\n  border-radius: 16px;\n  background:\n    linear-gradient(\n      120deg,\n      #092b57,\n      #0d4d9c);\n  color: #fff;\n}\n.pm-bottom > article > .material-symbols-outlined {\n  display: grid;\n  place-items: center;\n  width: 45px;\n  height: 45px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, .1);\n  color: #ffaf63;\n}\n.pm-bottom > article .pm-eyebrow {\n  color: #ffb067;\n}\n.pm-bottom h2 {\n  margin: 7px 0 5px;\n  font-size: 22px;\n}\n.pm-bottom > article p {\n  margin: 0;\n  color: #bed0e7;\n  font-size: 11px;\n  line-height: 1.65;\n}\n.pm-bottom > article .pm-button {\n  margin-left: auto;\n  white-space: nowrap;\n  background: #ff8518;\n}\n.pm-bottom > article .pm-button:hover {\n  background: #e86f00;\n}\n.pm-bottom > aside {\n  padding: 24px;\n  border: 1px solid #dce5f2;\n  border-radius: 16px;\n  background: #fff;\n}\n.pm-bottom > aside h2 {\n  margin: 7px 0 5px;\n  font-size: 19px;\n}\n.pm-bottom > aside p {\n  margin: 0 0 12px;\n  color: #728299;\n  font-size: 11px;\n}\n.pm-bottom > aside a {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  min-height: 34px;\n  color: #225591;\n  font-size: 11px;\n}\n.pm-bottom > aside a:hover {\n  text-decoration: underline;\n}\n.pm-bottom > aside .material-symbols-outlined {\n  font-size: 17px;\n}\na:focus-visible,\nbutton:focus-visible,\ninput:focus-visible {\n  outline: 3px solid #ff941c;\n  outline-offset: 3px;\n}\n@media (min-width: 1001px) {\n  .pm-sidebar {\n    position: sticky;\n    top: 96px;\n  }\n}\n@media (max-width: 900px) {\n  .pm-hero-grid {\n    grid-template-columns: 1fr 1fr;\n    gap: 28px;\n  }\n  .pm-layout {\n    grid-template-columns: 210px minmax(0, 1fr);\n    gap: 20px;\n  }\n  .pm-contact {\n    padding: 17px;\n  }\n  .pm-bottom {\n    grid-template-columns: 1fr;\n  }\n  .pm-bottom > article .pm-button {\n    margin-left: auto;\n  }\n}\n@media (max-width: 760px) {\n  .pm-wrap {\n    width: min(100% - 36px, 1180px);\n  }\n  .pm-hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .pm-hero {\n    padding-top: 24px;\n  }\n  .pm-breadcrumb {\n    margin-bottom: 25px;\n  }\n  .pm-stats div {\n    padding: 16px;\n  }\n  .pm-section-heading {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .pm-search {\n    width: 100%;\n  }\n  .pm-layout {\n    grid-template-columns: 1fr;\n  }\n  .pm-sidebar {\n    padding: 14px 10px;\n  }\n  .pm-team-list {\n    display: flex;\n    overflow-x: auto;\n    padding: 3px 3px 9px;\n  }\n  .pm-team-list button {\n    grid-template-columns: 20px auto auto;\n    width: auto;\n    flex: none;\n    white-space: nowrap;\n  }\n  .pm-note {\n    display: none;\n  }\n  .pm-results-bar span:last-child {\n    display: none;\n  }\n  .pm-bottom > article {\n    align-items: flex-start;\n    flex-wrap: wrap;\n  }\n  .pm-bottom > article .pm-button {\n    width: 100%;\n    margin: 0;\n  }\n  .pm-team-heading p {\n    max-width: 55ch;\n  }\n}\n@media (max-width: 520px) {\n  .pm-wrap {\n    width: min(100% - 28px, 1180px);\n  }\n  h1 {\n    font-size: 38px;\n  }\n  .pm-guide {\n    padding: 22px;\n  }\n  .pm-stats {\n    grid-template-columns: 1fr;\n  }\n  .pm-stats div {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    border-right: 0;\n    border-bottom: 1px solid #e2eaf5;\n  }\n  .pm-stats div:last-child {\n    border: 0;\n  }\n  .pm-stats span {\n    margin: 0;\n  }\n  .pm-contact-grid {\n    grid-template-columns: 1fr;\n  }\n  .pm-contact {\n    padding: 20px;\n  }\n  .pm-role {\n    min-height: 0;\n  }\n  .pm-bottom > article {\n    padding: 22px;\n  }\n  .pm-hero-actions {\n    flex-direction: column;\n  }\n  .pm-button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=partner-matrix.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PartnerMatrixPage, { className: "PartnerMatrixPage", filePath: "src/app/pages/partner-matrix.page.ts", lineNumber: 17 });
})();
export {
  PartnerMatrixPage
};
//# sourceMappingURL=chunk-UE4NG2SM.js.map
