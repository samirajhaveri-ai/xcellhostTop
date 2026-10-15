import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  takeUntilDestroyed
} from "./chunk-M5OSJJBF.js";
import "./chunk-WKMOKKQB.js";
import "./chunk-TKO65HOC.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/data/marketplace-listings.data.ts
var LISTING_CATEGORIES = [
  { id: "experiences", label: "Experience", icon: "work", color: "#147afa" },
  { id: "ai", label: "AI Services", icon: "auto_awesome", color: "#854bff" },
  { id: "managed", label: "Service Listings", icon: "build", color: "#00a669" },
  { id: "licenses", label: "Licenses", icon: "key", color: "#dd7900" }
];
var CONTENT = [
  ["experiences", "Always-On Estate", "Monitoring, alert triage and 24/7 response combined into one accountable operations service.", "From $2,400", "per month", "Operations, 24/7", "Configured with our team."],
  ["experiences", "Change & Compliance Assurance", "Patching, change governance and continuous compliance evidence delivered together.", "From $2,100", "per month", "Operations, Audit-ready", "Configured with our team."],
  ["experiences", "Protected Estate", "Backup, replication and rehearsed failover assembled into one tested recovery position.", "From $2,800", "per month", "Operations, Tested", "Configured with our team."],
  ["experiences", "Guarded Estate", "Firewall, WAF and endpoint controls watched and responded to by our security analysts.", "From $3,200", "per month", "Operations, SOC-run", "Configured with our team."],
  ["experiences", "Data Layer Assurance", "Database operations with the storage beneath it tuned, backed up and restore-tested.", "From $2,600", "per month", "Operations, DBA-run", "Configured with our team."],
  ["experiences", "Connected Estate", "Networking, private connectivity and NOC-managed routing under one owner.", "From $2,200", "per month", "Operations, NOC-run", "Configured with our team."],
  ["experiences", "Healthcare Cloud", "Clinical workload templates, patient-data controls and audit-ready evidence.", "From $3,600", "per month \xB7 starter environment", "HIPAA-aligned, Sovereign", "Live in 6 weeks."],
  ["experiences", "Financial Services Cloud", "Resilient regulated environment for core banking and payment workloads.", "From $4,800", "per month \xB7 starter environment", "PCI-DSS, Resilient", "Live in 8 weeks."],
  ["experiences", "Disaster Recovery", "Replication, orchestrated failover and quarterly recovery tests against your RPO/RTO.", "From $1,900", "per month \xB7 10 workloads", "Recovery, RPO/RTO", "Live in 4 weeks."],
  ["ai", "GPU Compute", "On-demand and reserved GPU capacity with scheduling, quotas and cost guardrails.", "From $4,200", "per month \xB7 per GPU node", "GPU, Reserved", "Minutes."],
  ["ai", "Model Serving & MLOps", "Inference endpoints, pipelines and evaluation with governance and audit logging.", "From $1,450", "per month \xB7 per environment", "Inference, MLOps", "Live in 2 weeks."],
  ["ai", "Enterprise RAG Platform", "Vector store, connectors and retrieval services for grounded internal assistants.", "From $980", "per month \xB7 per workspace", "RAG, Connectors", "Live in 2 weeks."],
  ["managed", "Managed Kubernetes", "Production clusters with platform engineering, GitOps delivery and upgrades handled.", "From $890", "per month \xB7 per cluster", "CNCF, GitOps", "Minutes."],
  ["managed", "Managed SOC", "24/7 detection and response with incident playbooks and monthly threat reporting.", "From $2,400", "per month \xB7 up to 250 assets", "MDR, 24/7", "Live in 3 weeks."],
  ["managed", "SAP Basis Support", "Certified Basis administration and landscape support delivered by a specialist partner.", "From $3,100", "per month \xB7 per landscape", "SAP, Specialist", "Live in 2 weeks."],
  ["licenses", "Microsoft 365", "Business and Enterprise plans with tenant setup, identity and licence true-up handled.", "From $6.50", "per user per month", "CSP, Identity", "Minutes."],
  ["licenses", "Veeam Backup", "Backup and replication licensing bundled with our managed protection service.", "From $9", "per VM per month", "Backup, Rental", "Minutes."],
  ["licenses", "VMware & Red Hat", "Hypervisor and enterprise Linux subscriptions on a single monthly invoice.", "On request", "per host or per socket", "Subscription, Compliance", "Minutes."]
];
var CURATED_MARKETPLACE_LISTINGS = CONTENT.map(([category, name, description, price, unit, group, delivery]) => {
  const meta = LISTING_CATEGORIES.find((item) => item.id === category);
  return {
    name,
    description,
    price,
    unit,
    group,
    delivery,
    category,
    categoryName: meta.label,
    icon: meta.icon,
    color: meta.color,
    featured: false,
    link: "/contact"
  };
});

// src/app/data/marketplace.data.ts
var MARKETPLACE_CATEGORIES = [
  { id: "experiences", name: "Experiences", shortName: "Experiences", icon: "cloud", art: "cloud", theme: "experiences", color: "#934611", description: "Cloud infrastructure and solutions built around your business" },
  { id: "ai", name: "AI Marketplace", shortName: "AI Marketplace", icon: "auto_awesome", art: "neurology", theme: "ai", color: "#982d58", description: "AI tools, intelligent applications and automation" },
  { id: "managed", name: "Managed Services", shortName: "Managed Services", icon: "support_agent", art: "headset_mic", theme: "managed", color: "#856615", description: "Cloud operations, security, backup and expert support" },
  { id: "licenses", name: "Software License", shortName: "Software License", icon: "apps", art: "verified_user", theme: "licenses", color: "#19685f", description: "Productivity, business software and digital trust" },
  { id: "professional", name: "Professional Services", shortName: "Professional Services", icon: "person", art: "extension", theme: "professional", color: "#704191", description: "Consulting, assessments, training and implementation" },
  { id: "accelerators", name: "Accelerators", shortName: "Accelerators", icon: "rocket_launch", art: "rocket_launch", theme: "accelerators", color: "#4d6926", description: "Migration, DevOps and tools that speed up delivery" },
  { id: "alliances", name: "Alliances", shortName: "Alliances", icon: "groups", art: "handshake", theme: "alliances", color: "#395f77", description: "Explore our technology partners and their solutions" }
];
function filterMarketplaceListings(listings, query, category, sort) {
  const terms = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const matches = listings.filter((listing) => {
    const content = `${listing.name} ${listing.description} ${listing.group} ${listing.categoryName}`.toLowerCase();
    return (category === "all" || listing.category === category) && terms.every((term) => content.includes(term));
  });
  if (sort !== "featured")
    matches.sort((a, b) => sort === "az" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name));
  return matches;
}

// src/app/pages/explore-marketplace.page.ts
var _c0 = (a0) => ({ service: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.name;
function ExploreMarketplacePage_For_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ExploreMarketplacePage_For_34_Template_button_click_0_listener() {
      const term_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.searchFor(term_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const term_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(term_r2);
  }
}
function ExploreMarketplacePage_For_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ExploreMarketplacePage_For_37_Template_button_click_0_listener() {
      const category_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(category_r5.id, true));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("--category-color", category_r5.tabColor);
    \u0275\u0275classProp("active", ctx_r2.selectedCategory() === category_r5.id);
    \u0275\u0275attribute("aria-pressed", ctx_r2.selectedCategory() === category_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r5.tabIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", category_r5.tabLabel, " ");
  }
}
function ExploreMarketplacePage_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" \xB7 \u201C", ctx_r2.query().trim(), "\u201D");
  }
}
function ExploreMarketplacePage_For_81_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ExploreMarketplacePage_For_81_Template_button_click_0_listener() {
      const category_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(category_r7.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedCategory() === category_r7.id);
    \u0275\u0275attribute("aria-pressed", ctx_r2.selectedCategory() === category_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r7.label);
  }
}
function ExploreMarketplacePage_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "span");
    \u0275\u0275text(2, "Showing your filtered catalogue");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function ExploreMarketplacePage_Conditional_82_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275text(4, "Clear filters ");
    \u0275\u0275elementStart(5, "span", 5);
    \u0275\u0275text(6, "\xD7");
    \u0275\u0275elementEnd()()();
  }
}
function ExploreMarketplacePage_For_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 41)(1, "div", 42)(2, "span", 43);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44)(5, "h3")(6, "a", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 46);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "a", 47)(11, "span", 10);
    \u0275\u0275text(12, "shield");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "p");
    \u0275\u0275text(14);
    \u0275\u0275elementStart(15, "span", 48);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 49)(18, "a", 50)(19, "strong");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "small");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "span", 51)(24, "span", 10);
    \u0275\u0275text(25, "sell");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const listing_r10 = ctx.$implicit;
    \u0275\u0275styleProp("--category-color", listing_r10.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(listing_r10.icon);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", listing_r10.link)("queryParams", \u0275\u0275pureFunction1(19, _c0, listing_r10.name));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(listing_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(listing_r10.categoryName);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", listing_r10.link)("queryParams", \u0275\u0275pureFunction1(21, _c0, listing_r10.name));
    \u0275\u0275attribute("aria-label", "View " + listing_r10.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", listing_r10.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("XcellHost \xB7 ", listing_r10.delivery);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", listing_r10.link)("queryParams", \u0275\u0275pureFunction1(23, _c0, listing_r10.name));
    \u0275\u0275attribute("aria-label", "View pricing for " + listing_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(listing_r10.price);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(listing_r10.unit);
    \u0275\u0275advance();
    \u0275\u0275property("title", listing_r10.group);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(listing_r10.group);
  }
}
function ExploreMarketplacePage_ForEmpty_86_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "span", 10);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No services found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try a different keyword or clear your filters to explore all services.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 25);
    \u0275\u0275listener("click", function ExploreMarketplacePage_ForEmpty_86_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.resetFilters());
    });
    \u0275\u0275text(8, "Show all services");
    \u0275\u0275elementEnd()();
  }
}
function ExploreMarketplacePage_Conditional_87_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ExploreMarketplacePage_Conditional_87_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.limit.set(ctx_r2.limit() + 12));
    });
    \u0275\u0275text(1, "Show more services ");
    \u0275\u0275elementStart(2, "span", 5);
    \u0275\u0275text(3, "\u2193");
    \u0275\u0275elementEnd()();
  }
}
function ExploreMarketplacePage_Conditional_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ExploreMarketplacePage_Conditional_87_Conditional_3_Template, 4, 0, "button", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Showing ", ctx_r2.visibleListings().length, " of ", ctx_r2.filteredListings().length, " services");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.visibleListings().length < ctx_r2.filteredListings().length ? 3 : -1);
  }
}
var ExploreMarketplacePage = class _ExploreMarketplacePage {
  document = inject(DOCUMENT);
  router = inject(Router);
  listings = CURATED_MARKETPLACE_LISTINGS;
  listingCategories = LISTING_CATEGORIES;
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  selectedCategory = signal("all", ...ngDevMode ? [{ debugName: "selectedCategory" }] : []);
  sort = signal("featured", ...ngDevMode ? [{ debugName: "sort" }] : []);
  limit = signal(18, ...ngDevMode ? [{ debugName: "limit" }] : []);
  popularSearches = ["GPU Compute", "Microsoft 365", "Disaster Recovery", "Managed SOC"];
  categories = MARKETPLACE_CATEGORIES.map((category, index) => __spreadProps(__spreadValues({}, category), {
    tabLabel: category.id === "licenses" ? "Licenses" : category.name,
    tabIcon: ["work", "auto_awesome", "build", "key", "person", "bolt", "groups"][index],
    tabColor: ["#1681ef", "#8757e5", "#16a05b", "#ed8500", "#377de8", "#06a7ae", "#6b63dc"][index],
    count: this.listings.filter((listing) => listing.category === category.id).length
  }));
  filteredListings = computed(() => filterMarketplaceListings(this.listings, this.query(), this.selectedCategory(), this.sort()), ...ngDevMode ? [{ debugName: "filteredListings" }] : []);
  visibleListings = computed(() => this.filteredListings().slice(0, this.limit()), ...ngDevMode ? [{ debugName: "visibleListings" }] : []);
  activeCategory = computed(() => this.categories.find((category) => category.id === this.selectedCategory()), ...ngDevMode ? [{ debugName: "activeCategory" }] : []);
  constructor() {
    inject(ActivatedRoute).queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      const category = params.get("category");
      this.selectedCategory.set(this.listingCategories.find((item) => item.id === category)?.id ?? "all");
      this.limit.set(18);
    });
    inject(SeoService).set("XcellHost Cloud Marketplace", "Discover XcellHost cloud infrastructure, security, productivity, data protection, AI and software services.", "/explore-marketplace");
  }
  updateQuery(value) {
    this.query.set(value);
    this.limit.set(18);
  }
  selectCategory(category, scroll = false) {
    if (category === "alliances") {
      void this.router.navigate(["/company/vendor-partners"]);
      return;
    }
    if (category === "accelerators") {
      void this.router.navigate(["/about-us"]);
      return;
    }
    if (category === "professional") {
      void this.router.navigate(["/contact"], { queryParams: { service: "Professional Services" } });
      return;
    }
    this.selectedCategory.set(category);
    this.query.set("");
    this.limit.set(18);
    if (scroll)
      this.scrollToListings();
  }
  searchFor(value) {
    this.selectedCategory.set("all");
    this.updateQuery(value);
    this.scrollToListings();
  }
  updateSort(value) {
    if (value === "featured" || value === "az" || value === "za")
      this.sort.set(value);
    this.limit.set(18);
  }
  resetFilters() {
    this.query.set("");
    this.selectedCategory.set("all");
    this.limit.set(18);
  }
  scrollToListings(event) {
    event?.preventDefault();
    const reduced = this.document.defaultView?.matchMedia("(prefers-reduced-motion: reduce)").matches;
    this.document.getElementById("marketplace-catalogue")?.scrollIntoView({ behavior: reduced ? "instant" : "smooth", block: "start" });
  }
  static \u0275fac = function ExploreMarketplacePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExploreMarketplacePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMarketplacePage, selectors: [["xh-explore-marketplace-page"]], decls: 104, vars: 15, consts: [[1, "marketplace"], ["aria-labelledby", "marketplace-title", 1, "marketplace-hero"], [1, "marketplace-wrap"], ["aria-label", "Breadcrumb", 1, "marketplace-breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], [1, "catalogue-status"], ["id", "marketplace-title"], [1, "hero-description"], ["role", "search", 1, "marketplace-search", 3, "submit"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["for", "marketplace-search", 1, "sr-only"], ["id", "marketplace-search", "type", "search", "placeholder", "Search cloud, backup, Microsoft 365, AI\u2026", "aria-controls", "marketplace-results", 3, "input", "value"], ["type", "submit"], [1, "popular-searches"], ["type", "button"], ["role", "group", "aria-label", "Marketplace service tabs", 1, "hero-categories", "marketplace-tabs"], ["type", "button", "aria-controls", "marketplace-results", 3, "active", "--category-color"], [1, "marketplace-stats"], ["href", "#marketplace-catalogue", 1, "text-link", 3, "click"], ["id", "marketplace-catalogue", "aria-labelledby", "listings-title", 1, "marketplace-catalogue"], [1, "section-heading", "listings-heading"], ["id", "listings-title"], ["role", "status", "aria-live", "polite"], ["role", "group", "aria-label", "Filter listings", 1, "listing-filters"], ["type", "button", 3, "click"], ["type", "button", 3, "active"], [1, "active-filters"], ["id", "marketplace-results", 1, "listing-grid"], [1, "listing-card", 3, "--category-color"], [1, "empty-results"], [1, "load-more"], ["aria-labelledby", "marketplace-cta-title", 1, "marketplace-buddha-strip", "marketplace-wrap"], [1, "pp-cta"], ["id", "marketplace-cta-title"], [1, "buddha-strip-actions"], ["routerLink", "/contact", 1, "btn", "btn-primary"], ["routerLink", "/company/support-overview", 1, "btn", "btn-ghost"], ["routerLink", "/company/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost Laughing Buddha", "loading", "lazy", "width", "104", "height", "104", 1, "pp-cta-buddha"], ["type", "button", "aria-controls", "marketplace-results", 3, "click"], [1, "listing-card"], [1, "listing-top"], ["aria-hidden", "true", 1, "listing-icon", "material-symbols-outlined"], [1, "listing-title-block"], [3, "routerLink", "queryParams"], [1, "listing-type"], [1, "listing-detail-link", 3, "routerLink", "queryParams"], [1, "listing-provider"], [1, "listing-bottom"], [1, "listing-price", 3, "routerLink", "queryParams"], [1, "listing-meta", 3, "title"]], template: function ExploreMarketplacePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "nav", 3)(4, "a", 4);
      \u0275\u0275text(5, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span");
      \u0275\u0275text(9, "Explore Marketplace");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 6);
      \u0275\u0275element(11, "span", 5);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "h1", 7);
      \u0275\u0275text(14, "Your next business outcome.");
      \u0275\u0275element(15, "br");
      \u0275\u0275elementStart(16, "em");
      \u0275\u0275text(17, "Starts with XcellHost.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "p", 8);
      \u0275\u0275text(19, "Explore cloud experiences, AI, managed services, software licenses, professional services and accelerators \u2014 backed by the XcellHost partner ecosystem.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "form", 9);
      \u0275\u0275listener("submit", function ExploreMarketplacePage_Template_form_submit_20_listener($event) {
        return ctx.scrollToListings($event);
      });
      \u0275\u0275elementStart(21, "span", 10);
      \u0275\u0275text(22, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "label", 11);
      \u0275\u0275text(24, "Search marketplace services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "input", 12);
      \u0275\u0275listener("input", function ExploreMarketplacePage_Template_input_input_25_listener($event) {
        return ctx.updateQuery($event.target.value);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 13);
      \u0275\u0275text(27, "Search ");
      \u0275\u0275elementStart(28, "span", 5);
      \u0275\u0275text(29, "\u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 14)(31, "span");
      \u0275\u0275text(32, "Popular:");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(33, ExploreMarketplacePage_For_34_Template, 2, 1, "button", 15, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 16);
      \u0275\u0275repeaterCreate(36, ExploreMarketplacePage_For_37_Template, 4, 7, "button", 17, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "div", 18)(39, "div")(40, "strong");
      \u0275\u0275text(41);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Services to explore");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(44, "div")(45, "strong");
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span");
      \u0275\u0275text(48, "Service collections");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(49, "div")(50, "strong");
      \u0275\u0275text(51, "24/7");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "Expert support");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div")(55, "strong");
      \u0275\u0275text(56, "Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "Cloud experience");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div")(60, "strong");
      \u0275\u0275text(61, "One team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span");
      \u0275\u0275text(63, "From advice to operations");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(64, "a", 19);
      \u0275\u0275listener("click", function ExploreMarketplacePage_Template_a_click_64_listener($event) {
        return ctx.scrollToListings($event);
      });
      \u0275\u0275text(65, "Explore the full catalogue ");
      \u0275\u0275elementStart(66, "span", 5);
      \u0275\u0275text(67, "\u2192");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(68, "section", 20)(69, "div", 2)(70, "div", 21)(71, "div")(72, "h2", 22);
      \u0275\u0275text(73, "Listings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p", 23);
      \u0275\u0275text(75);
      \u0275\u0275conditionalCreate(76, ExploreMarketplacePage_Conditional_76_Template, 1, 1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(77, "div", 24)(78, "button", 25);
      \u0275\u0275listener("click", function ExploreMarketplacePage_Template_button_click_78_listener() {
        return ctx.selectCategory("all");
      });
      \u0275\u0275text(79, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275repeaterCreate(80, ExploreMarketplacePage_For_81_Template, 2, 4, "button", 26, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(82, ExploreMarketplacePage_Conditional_82_Template, 7, 0, "div", 27);
      \u0275\u0275elementStart(83, "div", 28);
      \u0275\u0275repeaterCreate(84, ExploreMarketplacePage_For_85_Template, 27, 25, "article", 29, _forTrack1, false, ExploreMarketplacePage_ForEmpty_86_Template, 9, 0, "div", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(87, ExploreMarketplacePage_Conditional_87_Template, 4, 3, "div", 31);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "section", 32)(89, "div", 33)(90, "div")(91, "h2", 34);
      \u0275\u0275text(92, "Ready to get started with XcellHost?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p");
      \u0275\u0275text(94, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 35)(96, "a", 36);
      \u0275\u0275text(97, "Talk to an expert ");
      \u0275\u0275elementStart(98, "span", 5);
      \u0275\u0275text(99, "\u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "a", 37);
      \u0275\u0275text(101, "Customer support");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(102, "a", 38);
      \u0275\u0275element(103, "img", 39);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate1("", ctx.listings.length, " services \xB7 One XcellHost marketplace");
      \u0275\u0275advance(13);
      \u0275\u0275property("value", ctx.query());
      \u0275\u0275advance(8);
      \u0275\u0275repeater(ctx.popularSearches);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.listings.length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.categories.length);
      \u0275\u0275advance(29);
      \u0275\u0275textInterpolate2("", ctx.filteredListings().length, " of ", ctx.listings.length, " listings \xB7 USD pricing indicative, confirmed at configuration");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.query().trim() ? 76 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.selectedCategory() === "all");
      \u0275\u0275attribute("aria-pressed", ctx.selectedCategory() === "all");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.listingCategories);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.query() || ctx.selectedCategory() !== "all" ? 82 : -1);
      \u0275\u0275advance();
      \u0275\u0275classProp("three-listings", ctx.filteredListings().length === 3);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.visibleListings());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.filteredListings().length ? 87 : -1);
    }
  }, dependencies: [RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  --mp-ink:#102342;\n  --mp-muted:#63738a;\n  --mp-blue:#1565d8;\n  --mp-line:#e2e8f0;\n}\n.marketplace[_ngcontent-%COMP%] {\n  background: #f7f9fc;\n  color: var(--mp-ink);\n}\n.marketplace[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n}\n.marketplace[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.marketplace[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.marketplace[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  font: inherit;\n}\n.marketplace[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.marketplace[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.marketplace[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.marketplace[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transition:\n    background .18s,\n    border-color .18s,\n    box-shadow .18s,\n    transform .18s;\n}\n.marketplace[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(a, button, input, select):focus-visible {\n  outline: 3px solid #75b4ff;\n  outline-offset: 4px;\n}\n.marketplace-wrap[_ngcontent-%COMP%] {\n  width: min(1240px, 100% - 80px);\n  margin-inline: auto;\n}\n.material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.sr-only[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.marketplace-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 34px 0 54px;\n  border-bottom: 1px solid var(--mp-line);\n  background:\n    radial-gradient(\n      ellipse at 90% 0,\n      #cce9ff85,\n      transparent 50%),\n    linear-gradient(#fff, #f7f9fc);\n}\n.marketplace-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 30px;\n  font-size: 13px;\n  color: var(--mp-muted);\n}\n.marketplace-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--mp-muted);\n}\n.marketplace-breadcrumb[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:nth-child(2) {\n  color: #b9c5d6;\n}\n.catalogue-status[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 14px;\n  border: 1px solid var(--mp-line);\n  border-radius: 40px;\n  background: #fff;\n  color: #53657a;\n  font-size: 12px;\n  font-weight: 600;\n  box-shadow: 0 6px 18px #10234205;\n}\n.catalogue-status[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #1aa775;\n}\nh1[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 24px 0 20px;\n  font: 800 clamp(34px, 4.3vw, 56px)/1.12 var(--disp,sans-serif);\n  letter-spacing: -2px;\n  color: var(--mp-ink);\n}\nh1[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  font-style: normal;\n  color: var(--mp-blue);\n}\n.hero-description[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: 0 0 26px;\n  color: var(--mp-muted);\n  font-size: 16px;\n  line-height: 1.75;\n}\n.marketplace-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  max-width: 690px;\n  padding: 7px 7px 7px 18px;\n  background: #fff;\n  border: 1px solid #d7e0ed;\n  border-radius: 14px;\n  box-shadow: 0 12px 30px #1023420b;\n}\n.marketplace-search[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #8898af;\n}\n.marketplace-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: var(--mp-ink);\n  padding: 10px 0;\n  font-size: 14px;\n}\n.marketplace-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.marketplace-search[_ngcontent-%COMP%]:focus-within {\n  outline: 2px solid #75b4ff;\n  outline-offset: 2px;\n}\n.marketplace-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  padding: 12px 23px;\n  border: 0;\n  border-radius: 9px;\n  background: var(--mp-blue);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n}\n.marketplace-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #0b4fae;\n}\n.popular-searches[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 14px 0 25px;\n  font-size: 12px;\n  color: var(--mp-muted);\n}\n.popular-searches[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0;\n  background: transparent;\n  border: 0;\n  color: #526985;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.popular-searches[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  color: var(--mp-blue);\n}\n.hero-categories[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 9px;\n  flex-wrap: wrap;\n  margin-bottom: 27px;\n}\n.hero-categories[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 13px;\n  border: 1px solid var(--mp-line);\n  border-radius: 50px;\n  background: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  color: #44566e;\n}\n.hero-categories[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: var(--category-color);\n}\n.hero-categories[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: var(--category-color);\n  color: var(--category-color);\n}\n.marketplace-stats[_ngcontent-%COMP%] {\n  display: inline-grid;\n  grid-template-columns: repeat(5, auto);\n  max-width: 100%;\n  margin-bottom: 22px;\n  background: #fff;\n  border: 1px solid var(--mp-line);\n  border-radius: 14px;\n  box-shadow: 0 8px 25px #10234205;\n}\n.marketplace-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 17px 26px;\n  border-left: 1px solid #edf1f6;\n}\n.marketplace-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  border: 0;\n}\n.marketplace-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 21px/1.2 var(--disp,sans-serif);\n  letter-spacing: -.5px;\n}\n.marketplace-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  color: var(--mp-muted);\n  font-size: 11px;\n}\n.text-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: fit-content;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--mp-blue);\n}\n.text-link[_ngcontent-%COMP%]:hover {\n  color: #083e8d;\n}\n.text-link[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.marketplace-categories[_ngcontent-%COMP%] {\n  padding: 60px 0 48px;\n  background: #fff;\n}\n.section-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 26px;\n}\n.section-kicker[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  color: var(--mp-blue);\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 1.7px;\n  text-transform: uppercase;\n}\n.section-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font: 750 clamp(26px, 3vw, 34px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -1px;\n  color: var(--mp-ink);\n}\n.section-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: var(--mp-muted);\n}\n.category-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 13px;\n}\n.category-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 0;\n  padding: 20px 16px;\n  text-align: left;\n  border: 1px solid var(--mp-line);\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 5px 18px #10234204;\n  color: var(--mp-ink);\n}\n.category-card[_ngcontent-%COMP%]:hover, \n.category-card.selected[_ngcontent-%COMP%] {\n  border-color: var(--category-color);\n  box-shadow: 0 10px 24px #1023420b;\n  transform: translateY(-3px);\n}\n.category-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: color-mix(in srgb, var(--category-color) 8%, white);\n  color: var(--category-color);\n}\n.category-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font: 700 14px/1.4 var(--disp,sans-serif);\n  min-height: 40px;\n}\n.category-description[_ngcontent-%COMP%] {\n  font-size: 11px;\n  line-height: 1.65;\n  color: var(--mp-muted);\n}\n.category-count[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: auto;\n  padding-top: 4px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--category-color);\n}\n.platform-note[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-top: 18px;\n  padding: 16px 20px;\n  border: 1px solid var(--mp-line);\n  border-radius: 12px;\n  background: #f8fafc;\n}\n.platform-note[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: var(--mp-blue);\n}\n.platform-note[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 12px;\n  white-space: nowrap;\n}\n.platform-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--mp-muted);\n  font-size: 12px;\n  line-height: 1.65;\n}\n.marketplace-catalogue[_ngcontent-%COMP%] {\n  padding: 56px 0 64px;\n  border-top: 1px solid var(--mp-line);\n  scroll-margin-top: 110px;\n}\n.sort-control[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  font-size: 12px;\n  color: var(--mp-muted);\n}\n.sort-control[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  max-width: 190px;\n  padding: 10px 30px 10px 12px;\n  border: 1px solid var(--mp-line);\n  border-radius: 8px;\n  background: #fff;\n  color: var(--mp-ink);\n}\n.listing-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 27px;\n}\n.listing-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 14px;\n  border-radius: 30px;\n  border: 1px solid #dfe6ef;\n  background: #fff;\n  color: #607187;\n  font-size: 12px;\n  font-weight: 600;\n}\n.listing-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  opacity: .75;\n}\n.listing-filters[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: var(--mp-ink);\n  border-color: var(--mp-ink);\n  color: #fff;\n}\n.listing-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  border-color: var(--mp-blue);\n  color: var(--mp-blue);\n}\n.active-filters[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  justify-content: space-between;\n  margin: -8px 0 20px;\n  font-size: 12px;\n  color: var(--mp-muted);\n}\n.active-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border: 0;\n  background: none;\n  font-weight: 700;\n  color: var(--mp-blue);\n}\n.listing-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.listing-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  padding: 22px 22px 16px;\n  border: 1px solid var(--mp-line);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 6px 20px #10234204;\n  transition: box-shadow .2s, border-color .2s;\n}\n.listing-card[_ngcontent-%COMP%]:hover {\n  border-color: #aacbf4;\n  box-shadow: 0 13px 32px #1565d80d;\n}\n.listing-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.listing-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  color: var(--category-color);\n  background: color-mix(in srgb, var(--category-color) 9%, white);\n}\n.listing-type[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--category-color);\n  line-height: 1.5;\n}\n.featured-label[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #64748b;\n  font-size: 9px;\n  padding: 4px 6px;\n  background: #f3f6fa;\n  border-radius: 4px;\n}\n.listing-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font: 750 18px/1.35 var(--disp,sans-serif);\n  letter-spacing: -.3px;\n}\n.listing-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--mp-ink);\n}\n.listing-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--mp-blue);\n}\n.listing-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0 0 20px;\n  color: var(--mp-muted);\n  font-size: 13px;\n  line-height: 1.75;\n  overflow-wrap: anywhere;\n}\n.listing-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: auto;\n  margin-bottom: 15px;\n  color: #74849a;\n  font-size: 11px;\n}\n.listing-meta[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.listing-bottom[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding-top: 15px;\n  border-top: 1px solid #edf1f5;\n}\n.listing-bottom[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #566880;\n}\n.listing-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--mp-blue);\n}\n.listing-bottom[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  text-underline-offset: 4px;\n}\n.load-more[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30px;\n}\n.load-more[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: 12px;\n  color: var(--mp-muted);\n}\n.load-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.empty-results[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 20px;\n  padding: 12px 24px;\n  border: 1px solid #ccd9eb;\n  border-radius: 9px;\n  background: #fff;\n  color: var(--mp-ink);\n  font-size: 13px;\n  font-weight: 700;\n}\n.load-more[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: var(--mp-blue);\n  color: var(--mp-blue);\n}\n.empty-results[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  padding: 60px 20px;\n  text-align: center;\n  border: 1px dashed #c8d6e8;\n  border-radius: 16px;\n  background: #fff;\n}\n.empty-results[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 42px;\n  color: #8ba2bf;\n}\n.empty-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 16px 0 8px;\n  font-size: 22px;\n}\n.empty-results[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 22px;\n  color: var(--mp-muted);\n  font-size: 14px;\n}\n.marketplace-help[_ngcontent-%COMP%] {\n  padding: 65px 0;\n  background:\n    radial-gradient(\n      ellipse at 100% 0,\n      #19508680,\n      transparent 60%),\n    #0b2140;\n  color: #fff;\n}\n.help-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 80px;\n  align-items: center;\n}\n.marketplace-help[_ngcontent-%COMP%]   .section-kicker[_ngcontent-%COMP%] {\n  color: #81b9ff;\n}\n.marketplace-help[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 14px 0 20px;\n  color: #fff;\n  font: 750 clamp(27px, 3vw, 38px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -1px;\n}\n.marketplace-help[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 550px;\n  margin: 0;\n  color: #bdcce0;\n  font-size: 14px;\n  line-height: 1.8;\n}\n.help-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 24px;\n  margin-top: 26px;\n}\n.help-primary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  background: #fff;\n  color: #102342;\n  padding: 13px 20px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n}\n.help-secondary[_ngcontent-%COMP%] {\n  color: #dbeafe;\n  font-size: 13px;\n  font-weight: 600;\n}\n.help-secondary[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n.help-benefits[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 26px;\n  padding-left: 40px;\n  border-left: 1px solid #ffffff24;\n}\n.help-benefits[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 15px;\n  align-items: flex-start;\n}\n.help-benefits[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #85bbff;\n  background: #ffffff0c;\n  border: 1px solid #ffffff15;\n  border-radius: 11px;\n  padding: 10px;\n}\n.help-benefits[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.help-benefits[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  color: #acbed6;\n  font-size: 12px;\n  line-height: 1.7;\n  margin-top: 6px;\n}\n@media (min-width: 1500px) {\n  .listing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n@media (max-width: 1050px) {\n  .marketplace-wrap[_ngcontent-%COMP%] {\n    width: calc(100% - 48px);\n  }\n  .category-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .category-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .listing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .marketplace-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 16px 18px;\n  }\n  .help-grid[_ngcontent-%COMP%] {\n    gap: 35px;\n  }\n  .help-benefits[_ngcontent-%COMP%] {\n    padding-left: 25px;\n  }\n}\n@media (max-width: 680px) {\n  .marketplace-wrap[_ngcontent-%COMP%] {\n    width: calc(100% - 32px);\n  }\n  .marketplace-hero[_ngcontent-%COMP%] {\n    padding: 22px 0 35px;\n  }\n  .marketplace-breadcrumb[_ngcontent-%COMP%] {\n    margin-bottom: 24px;\n    font-size: 12px;\n  }\n  .catalogue-status[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n  h1[_ngcontent-%COMP%] {\n    letter-spacing: -1px;\n    font-size: 34px;\n  }\n  .hero-description[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .marketplace-search[_ngcontent-%COMP%] {\n    gap: 8px;\n    padding-left: 12px;\n  }\n  .marketplace-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .marketplace-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 12px 15px;\n    font-size: 12px;\n  }\n  .marketplace-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-categories[_ngcontent-%COMP%] {\n    gap: 7px;\n  }\n  .hero-categories[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 10px;\n    padding: 8px 10px;\n  }\n  .marketplace-stats[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    width: 100%;\n  }\n  .marketplace-stats[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    padding: 14px 10px;\n    border: 0;\n    border-right: 1px solid #edf1f6;\n    border-bottom: 1px solid #edf1f6;\n  }\n  .marketplace-stats[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .marketplace-stats[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 10px;\n    line-height: 1.5;\n  }\n  .marketplace-categories[_ngcontent-%COMP%], \n   .marketplace-catalogue[_ngcontent-%COMP%] {\n    padding: 36px 0;\n  }\n  .section-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 16px;\n  }\n  .category-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px;\n  }\n  .category-card[_ngcontent-%COMP%] {\n    padding: 16px 13px;\n  }\n  .category-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .platform-note[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 10px;\n    padding: 15px;\n  }\n  .platform-note[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    flex-basis: 100%;\n  }\n  .listing-filters[_ngcontent-%COMP%] {\n    gap: 7px;\n  }\n  .listing-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-size: 11px;\n    padding: 8px 12px;\n  }\n  .listing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .listing-card[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .listing-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .listings-heading[_ngcontent-%COMP%] {\n    margin-bottom: 18px;\n  }\n  .help-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 36px;\n  }\n  .help-benefits[_ngcontent-%COMP%] {\n    border-left: 0;\n    border-top: 1px solid #ffffff24;\n    padding: 25px 0 0;\n  }\n  .marketplace-help[_ngcontent-%COMP%] {\n    padding: 40px 0;\n  }\n  .active-filters[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    gap: 8px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .marketplace[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .listing-card[_ngcontent-%COMP%] {\n    transition: none;\n  }\n  .category-card[_ngcontent-%COMP%]:hover, \n   .category-card.selected[_ngcontent-%COMP%] {\n    transform: none;\n  }\n}\n.hero-categories.marketplace-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 9px;\n  max-width: 100%;\n  overflow-x: auto;\n  padding: 5px 2px 12px;\n  margin: 0 0 24px;\n  scrollbar-width: thin;\n}\n.hero-categories.marketplace-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 15px;\n  min-height: 38px;\n  border: 1px solid #dde5f0;\n  border-radius: 999px;\n  background: #fff;\n  color: #213b59;\n  font-size: 12px;\n  line-height: 1.2;\n  font-weight: 500;\n  white-space: nowrap;\n  box-shadow: 0 4px 12px #152d4d05;\n}\n.hero-categories.marketplace-tabs[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: var(--category-color);\n  font-variation-settings: "FILL" 0, "wght" 400;\n}\n.hero-categories.marketplace-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.hero-categories.marketplace-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: var(--category-color);\n  background: color-mix(in srgb, var(--category-color) 6%, white);\n  box-shadow: 0 4px 14px #152d4d09;\n}\n@media (max-width: 680px) {\n  .hero-categories.marketplace-tabs[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .hero-categories.marketplace-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 10px 13px;\n    font-size: 11px;\n  }\n}\n.marketplace-catalogue[_ngcontent-%COMP%] {\n  background: #f7f9fc;\n  padding: 52px 0 70px;\n}\n.listings-heading[_ngcontent-%COMP%] {\n  align-items: flex-end;\n  gap: 28px;\n  margin-bottom: 32px;\n}\n.listings-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  flex: 1 1 420px;\n}\n.listings-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  margin-bottom: 18px;\n}\n.listings-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.65;\n}\n.listing-filters[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n  flex: 1 1 620px;\n  margin: 0;\n  gap: 8px;\n}\n.listing-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 11px 15px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.listing-filters[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #0d1b2a;\n  border-color: #0d1b2a;\n  color: #fff;\n  font-weight: 700;\n}\n.listing-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n}\n.listing-card[_ngcontent-%COMP%] {\n  padding: 22px 21px 17px;\n  min-height: 280px;\n  border-radius: 17px;\n  background: #fff;\n  border-color: #e0e7f0;\n  box-shadow: 0 8px 22px #10234204;\n}\n.listing-top[_ngcontent-%COMP%] {\n  gap: 11px;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.listing-icon[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  background: #eaf2ff;\n  color: #1680ef;\n  border-radius: 12px;\n  font-size: 21px;\n}\n.listing-title-block[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n}\n.listing-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 1.35;\n  margin: 0 0 8px;\n  letter-spacing: -.35px;\n}\n.listing-type[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 4px 7px;\n  border-radius: 5px;\n  color: #0669e8;\n  background: #eaf2ff;\n  font-size: 9px;\n  line-height: 1.3;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .2px;\n}\n.listing-detail-link[_ngcontent-%COMP%] {\n  display: flex;\n  flex-shrink: 0;\n  color: #147afa;\n  margin-top: 2px;\n}\n.listing-detail-link[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.listing-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 1.85;\n  margin: 0 0 20px;\n  color: #6981a1;\n}\n.listing-provider[_ngcontent-%COMP%] {\n  color: #8fa1bc;\n}\n.listing-bottom[_ngcontent-%COMP%] {\n  margin-top: auto;\n  padding-top: 14px;\n  gap: 10px;\n  align-items: center;\n  border-top: 1px solid #edf2f8;\n}\n.listing-bottom[_ngcontent-%COMP%]   .listing-price[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  align-items: baseline;\n  gap: 4px;\n  color: #102342;\n  font-size: 13px;\n}\n.listing-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 800;\n  white-space: nowrap;\n}\n.listing-price[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #8fa1bc;\n  font-size: 9px;\n  font-weight: 400;\n}\n.listing-bottom[_ngcontent-%COMP%]   .listing-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 1 44%;\n  min-width: 0;\n  margin: 0;\n  gap: 5px;\n  color: #7890af;\n  font-size: 9px;\n  line-height: 1.4;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.listing-meta[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n@media (max-width: 1150px) {\n  .listings-heading[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n  .listings-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n    flex-basis: 100%;\n  }\n  .listing-filters[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    flex-basis: 100%;\n  }\n  .listing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 900px) {\n  .listing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 680px) {\n  .listings-heading[_ngcontent-%COMP%] {\n    gap: 20px;\n  }\n  .listings-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child, \n   .listing-filters[_ngcontent-%COMP%] {\n    flex: auto;\n  }\n  .listings-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .listing-filters[_ngcontent-%COMP%] {\n    width: 100%;\n    gap: 7px;\n  }\n  .listing-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 9px 12px;\n    font-size: 10px;\n  }\n  .listing-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .listing-card[_ngcontent-%COMP%] {\n    min-height: 250px;\n  }\n  .listing-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .listing-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .listing-price[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .listing-bottom[_ngcontent-%COMP%]   .listing-meta[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n.listing-icon[_ngcontent-%COMP%] {\n  color: var(--category-color);\n  background: color-mix(in srgb, var(--category-color) 10%, white);\n}\n.listing-type[_ngcontent-%COMP%] {\n  color: var(--category-color);\n  background: color-mix(in srgb, var(--category-color) 10%, white);\n}\n.listing-grid.three-listings[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.three-listings[_ngcontent-%COMP%]   .listing-card[_ngcontent-%COMP%] {\n  min-height: 205px;\n}\n.listing-bottom[_ngcontent-%COMP%]   .listing-meta[_ngcontent-%COMP%] {\n  flex: 0 1 44%;\n  font-size: 9px;\n}\n.listing-bottom[_ngcontent-%COMP%]   .listing-price[_ngcontent-%COMP%] {\n  gap: 4px;\n}\n.listing-price[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 9px;\n}\n.listing-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  line-height: 1.8;\n}\n@media (max-width: 900px) {\n  .listing-grid.three-listings[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 680px) {\n  .listing-grid.three-listings[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.marketplace-buddha-strip[_ngcontent-%COMP%] {\n  padding-bottom: 44px;\n}\n.marketplace-buddha-strip[_ngcontent-%COMP%]   .pp-cta[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.marketplace-buddha-strip[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 26px;\n  line-height: 1.25;\n  margin: 0;\n}\n.buddha-strip-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 20px;\n}\n.buddha-strip-actions[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: rgba(255, 255, 255, .5);\n}\n@media (max-width: 680px) {\n  .marketplace-buddha-strip[_ngcontent-%COMP%]   .pp-cta[_ngcontent-%COMP%] {\n    padding: 26px 22px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .marketplace-buddha-strip[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .marketplace-buddha-strip[_ngcontent-%COMP%]   .pp-cta-buddha-link[_ngcontent-%COMP%] {\n    position: static;\n    align-self: center;\n    transform: none;\n    margin-top: 8px;\n  }\n  .marketplace-buddha-strip[_ngcontent-%COMP%]   .pp-cta-buddha-link[_ngcontent-%COMP%]:hover {\n    transform: scale(1.06);\n  }\n}\n/*# sourceMappingURL=explore-marketplace.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMarketplacePage, [{
    type: Component,
    args: [{ selector: "xh-explore-marketplace-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="marketplace">\r
  <section class="marketplace-hero" aria-labelledby="marketplace-title">\r
    <div class="marketplace-wrap">\r
      <nav class="marketplace-breadcrumb" aria-label="Breadcrumb"><a routerLink="/">Home</a><span aria-hidden="true">/</span><span>Explore Marketplace</span></nav>\r
      <div class="catalogue-status"><span aria-hidden="true"></span>{{ listings.length }} services \xB7 One XcellHost marketplace</div>\r
      <h1 id="marketplace-title">Your next business outcome.<br><em>Starts with XcellHost.</em></h1>\r
      <p class="hero-description">Explore cloud experiences, AI, managed services, software licenses, professional services and accelerators \u2014 backed by the XcellHost partner ecosystem.</p>\r
      <form class="marketplace-search" role="search" (submit)="scrollToListings($event)">\r
        <span class="material-symbols-outlined" aria-hidden="true">search</span>\r
        <label class="sr-only" for="marketplace-search">Search marketplace services</label>\r
        <input id="marketplace-search" type="search" placeholder="Search cloud, backup, Microsoft 365, AI\u2026" [value]="query()" (input)="updateQuery($any($event.target).value)" aria-controls="marketplace-results">\r
        <button type="submit">Search <span aria-hidden="true">\u2192</span></button>\r
      </form>\r
      <div class="popular-searches"><span>Popular:</span>@for (term of popularSearches; track term) {<button type="button" (click)="searchFor(term)">{{ term }}</button>}</div>\r
      <div class="hero-categories marketplace-tabs" role="group" aria-label="Marketplace service tabs">\r
        @for (category of categories; track category.id) {\r
          <button type="button" [class.active]="selectedCategory() === category.id" [attr.aria-pressed]="selectedCategory() === category.id" aria-controls="marketplace-results" (click)="selectCategory(category.id, true)" [style.--category-color]="category.tabColor">\r
            <span class="material-symbols-outlined" aria-hidden="true">{{ category.tabIcon }}</span>{{ category.tabLabel }}\r
          </button>\r
        }\r
      </div>\r
      <div class="marketplace-stats">\r
        <div><strong>{{ listings.length }}</strong><span>Services to explore</span></div>\r
        <div><strong>{{ categories.length }}</strong><span>Service collections</span></div>\r
        <div><strong>24/7</strong><span>Expert support</span></div>\r
        <div><strong>Since 1999</strong><span>Cloud experience</span></div>\r
        <div><strong>One team</strong><span>From advice to operations</span></div>\r
      </div>\r
      <a class="text-link" href="#marketplace-catalogue" (click)="scrollToListings($event)">Explore the full catalogue <span aria-hidden="true">\u2192</span></a>\r
    </div>\r
  </section>\r
  <section class="marketplace-catalogue" id="marketplace-catalogue" aria-labelledby="listings-title">\r
    <div class="marketplace-wrap">\r
      <div class="section-heading listings-heading">\r
        <div>\r
          <h2 id="listings-title">Listings</h2>\r
          <p role="status" aria-live="polite">{{ filteredListings().length }} of {{ listings.length }} listings \xB7 USD pricing indicative, confirmed at configuration@if (query().trim()) { \xB7 \u201C{{ query().trim() }}\u201D}</p>\r
        </div>\r
        <div class="listing-filters" role="group" aria-label="Filter listings">\r
          <button type="button" [class.active]="selectedCategory() === 'all'" [attr.aria-pressed]="selectedCategory() === 'all'" (click)="selectCategory('all')">All</button>\r
          @for (category of listingCategories; track category.id) {\r
            <button type="button" [class.active]="selectedCategory() === category.id" [attr.aria-pressed]="selectedCategory() === category.id" (click)="selectCategory(category.id)">{{ category.label }}</button>\r
          }\r
        </div>\r
      </div>\r
      @if (query() || selectedCategory() !== 'all') {<div class="active-filters"><span>Showing your filtered catalogue</span><button type="button" (click)="resetFilters()">Clear filters <span aria-hidden="true">\xD7</span></button></div>}\r
      <div class="listing-grid" [class.three-listings]="filteredListings().length === 3" id="marketplace-results">\r
        @for (listing of visibleListings(); track listing.name) {\r
          <article class="listing-card" [style.--category-color]="listing.color">\r
            <div class="listing-top">\r
              <span class="listing-icon material-symbols-outlined" aria-hidden="true">{{ listing.icon }}</span>\r
              <div class="listing-title-block"><h3><a [routerLink]="listing.link" [queryParams]="{ service: listing.name }">{{ listing.name }}</a></h3><span class="listing-type">{{ listing.categoryName }}</span></div>\r
              <a class="listing-detail-link" [routerLink]="listing.link" [queryParams]="{ service: listing.name }" [attr.aria-label]="'View ' + listing.name"><span class="material-symbols-outlined" aria-hidden="true">shield</span></a>\r
            </div>\r
            <p>{{ listing.description }} <span class="listing-provider">XcellHost \xB7 {{ listing.delivery }}</span></p>\r
            <div class="listing-bottom">\r
              <a class="listing-price" [routerLink]="listing.link" [queryParams]="{ service: listing.name }" [attr.aria-label]="'View pricing for ' + listing.name"><strong>{{ listing.price }}</strong><small>{{ listing.unit }}</small></a>\r
              <span class="listing-meta" [title]="listing.group"><span class="material-symbols-outlined" aria-hidden="true">sell</span>{{ listing.group }}</span>\r
            </div>\r
          </article>\r
        } @empty {\r
          <div class="empty-results"><span class="material-symbols-outlined" aria-hidden="true">search_off</span><h3>No services found</h3><p>Try a different keyword or clear your filters to explore all services.</p><button type="button" (click)="resetFilters()">Show all services</button></div>\r
        }\r
      </div>\r
      @if (filteredListings().length) {\r
        <div class="load-more"><p>Showing {{ visibleListings().length }} of {{ filteredListings().length }} services</p>@if (visibleListings().length < filteredListings().length) {<button type="button" (click)="limit.set(limit() + 12)">Show more services <span aria-hidden="true">\u2193</span></button>}</div>\r
      }\r
    </div>\r
  </section>\r
  <section class="marketplace-buddha-strip marketplace-wrap" aria-labelledby="marketplace-cta-title">\r
    <div class="pp-cta">\r
      <div>\r
        <h2 id="marketplace-cta-title">Ready to get started with XcellHost?</h2>\r
        <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>\r
        <div class="buddha-strip-actions">\r
          <a class="btn btn-primary" routerLink="/contact">Talk to an expert <span aria-hidden="true">&rarr;</span></a>\r
          <a class="btn btn-ghost" routerLink="/company/support-overview">Customer support</a>\r
        </div>\r
      </div>\r
      <a class="pp-cta-buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support">\r
        <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" loading="lazy" width="104" height="104" />\r
      </a>\r
    </div>\r
  </section>\r
</main>\r
`, styles: ['/* src/app/pages/explore-marketplace.page.css */\n:host {\n  display: block;\n  --mp-ink:#102342;\n  --mp-muted:#63738a;\n  --mp-blue:#1565d8;\n  --mp-line:#e2e8f0;\n}\n.marketplace {\n  background: #f7f9fc;\n  color: var(--mp-ink);\n}\n.marketplace * {\n  box-sizing: border-box;\n}\n.marketplace button,\n.marketplace input,\n.marketplace select {\n  font: inherit;\n}\n.marketplace button,\n.marketplace select {\n  cursor: pointer;\n}\n.marketplace a {\n  text-decoration: none;\n}\n.marketplace button {\n  transition:\n    background .18s,\n    border-color .18s,\n    box-shadow .18s,\n    transform .18s;\n}\n.marketplace :is(a, button, input, select):focus-visible {\n  outline: 3px solid #75b4ff;\n  outline-offset: 4px;\n}\n.marketplace-wrap {\n  width: min(1240px, 100% - 80px);\n  margin-inline: auto;\n}\n.material-symbols-outlined {\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  border: 0;\n}\n.marketplace-hero {\n  position: relative;\n  overflow: hidden;\n  padding: 34px 0 54px;\n  border-bottom: 1px solid var(--mp-line);\n  background:\n    radial-gradient(\n      ellipse at 90% 0,\n      #cce9ff85,\n      transparent 50%),\n    linear-gradient(#fff, #f7f9fc);\n}\n.marketplace-breadcrumb {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n  margin-bottom: 30px;\n  font-size: 13px;\n  color: var(--mp-muted);\n}\n.marketplace-breadcrumb a {\n  color: var(--mp-muted);\n}\n.marketplace-breadcrumb > span:nth-child(2) {\n  color: #b9c5d6;\n}\n.catalogue-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 14px;\n  border: 1px solid var(--mp-line);\n  border-radius: 40px;\n  background: #fff;\n  color: #53657a;\n  font-size: 12px;\n  font-weight: 600;\n  box-shadow: 0 6px 18px #10234205;\n}\n.catalogue-status > span {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #1aa775;\n}\nh1 {\n  max-width: 960px;\n  margin: 24px 0 20px;\n  font: 800 clamp(34px, 4.3vw, 56px)/1.12 var(--disp,sans-serif);\n  letter-spacing: -2px;\n  color: var(--mp-ink);\n}\nh1 em {\n  font-style: normal;\n  color: var(--mp-blue);\n}\n.hero-description {\n  max-width: 650px;\n  margin: 0 0 26px;\n  color: var(--mp-muted);\n  font-size: 16px;\n  line-height: 1.75;\n}\n.marketplace-search {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  max-width: 690px;\n  padding: 7px 7px 7px 18px;\n  background: #fff;\n  border: 1px solid #d7e0ed;\n  border-radius: 14px;\n  box-shadow: 0 12px 30px #1023420b;\n}\n.marketplace-search > .material-symbols-outlined {\n  color: #8898af;\n}\n.marketplace-search input {\n  min-width: 0;\n  flex: 1;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  color: var(--mp-ink);\n  padding: 10px 0;\n  font-size: 14px;\n}\n.marketplace-search input:focus {\n  outline: none;\n}\n.marketplace-search:focus-within {\n  outline: 2px solid #75b4ff;\n  outline-offset: 2px;\n}\n.marketplace-search button {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  padding: 12px 23px;\n  border: 0;\n  border-radius: 9px;\n  background: var(--mp-blue);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n}\n.marketplace-search button:hover {\n  background: #0b4fae;\n}\n.popular-searches {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin: 14px 0 25px;\n  font-size: 12px;\n  color: var(--mp-muted);\n}\n.popular-searches button {\n  padding: 0;\n  background: transparent;\n  border: 0;\n  color: #526985;\n  text-decoration: underline;\n  text-underline-offset: 3px;\n}\n.popular-searches button:hover {\n  color: var(--mp-blue);\n}\n.hero-categories {\n  display: flex;\n  gap: 9px;\n  flex-wrap: wrap;\n  margin-bottom: 27px;\n}\n.hero-categories button {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 13px;\n  border: 1px solid var(--mp-line);\n  border-radius: 50px;\n  background: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  color: #44566e;\n}\n.hero-categories .material-symbols-outlined {\n  font-size: 17px;\n  color: var(--category-color);\n}\n.hero-categories button:hover {\n  border-color: var(--category-color);\n  color: var(--category-color);\n}\n.marketplace-stats {\n  display: inline-grid;\n  grid-template-columns: repeat(5, auto);\n  max-width: 100%;\n  margin-bottom: 22px;\n  background: #fff;\n  border: 1px solid var(--mp-line);\n  border-radius: 14px;\n  box-shadow: 0 8px 25px #10234205;\n}\n.marketplace-stats > div {\n  padding: 17px 26px;\n  border-left: 1px solid #edf1f6;\n}\n.marketplace-stats > div:first-child {\n  border: 0;\n}\n.marketplace-stats strong {\n  display: block;\n  font: 800 21px/1.2 var(--disp,sans-serif);\n  letter-spacing: -.5px;\n}\n.marketplace-stats span {\n  display: block;\n  margin-top: 5px;\n  color: var(--mp-muted);\n  font-size: 11px;\n}\n.text-link {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: fit-content;\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--mp-blue);\n}\n.text-link:hover {\n  color: #083e8d;\n}\n.text-link > span {\n  font-size: 18px;\n}\n.marketplace-categories {\n  padding: 60px 0 48px;\n  background: #fff;\n}\n.section-heading {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 26px;\n}\n.section-kicker {\n  display: block;\n  margin-bottom: 10px;\n  color: var(--mp-blue);\n  font-size: 10px;\n  font-weight: 800;\n  letter-spacing: 1.7px;\n  text-transform: uppercase;\n}\n.section-heading h2 {\n  margin: 0 0 10px;\n  font: 750 clamp(26px, 3vw, 34px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -1px;\n  color: var(--mp-ink);\n}\n.section-heading p {\n  margin: 0;\n  font-size: 14px;\n  line-height: 1.6;\n  color: var(--mp-muted);\n}\n.category-grid {\n  display: grid;\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n  gap: 13px;\n}\n.category-card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 12px;\n  min-width: 0;\n  padding: 20px 16px;\n  text-align: left;\n  border: 1px solid var(--mp-line);\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 5px 18px #10234204;\n  color: var(--mp-ink);\n}\n.category-card:hover,\n.category-card.selected {\n  border-color: var(--category-color);\n  box-shadow: 0 10px 24px #1023420b;\n  transform: translateY(-3px);\n}\n.category-icon {\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 11px;\n  background: color-mix(in srgb, var(--category-color) 8%, white);\n  color: var(--category-color);\n}\n.category-card strong {\n  font: 700 14px/1.4 var(--disp,sans-serif);\n  min-height: 40px;\n}\n.category-description {\n  font-size: 11px;\n  line-height: 1.65;\n  color: var(--mp-muted);\n}\n.category-count {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  margin-top: auto;\n  padding-top: 4px;\n  font-size: 11px;\n  font-weight: 700;\n  color: var(--category-color);\n}\n.platform-note {\n  display: flex;\n  align-items: center;\n  gap: 15px;\n  margin-top: 18px;\n  padding: 16px 20px;\n  border: 1px solid var(--mp-line);\n  border-radius: 12px;\n  background: #f8fafc;\n}\n.platform-note > .material-symbols-outlined {\n  color: var(--mp-blue);\n}\n.platform-note strong {\n  font-size: 12px;\n  white-space: nowrap;\n}\n.platform-note p {\n  margin: 0;\n  color: var(--mp-muted);\n  font-size: 12px;\n  line-height: 1.65;\n}\n.marketplace-catalogue {\n  padding: 56px 0 64px;\n  border-top: 1px solid var(--mp-line);\n  scroll-margin-top: 110px;\n}\n.sort-control {\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  font-size: 12px;\n  color: var(--mp-muted);\n}\n.sort-control select {\n  max-width: 190px;\n  padding: 10px 30px 10px 12px;\n  border: 1px solid var(--mp-line);\n  border-radius: 8px;\n  background: #fff;\n  color: var(--mp-ink);\n}\n.listing-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 27px;\n}\n.listing-filters button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 14px;\n  border-radius: 30px;\n  border: 1px solid #dfe6ef;\n  background: #fff;\n  color: #607187;\n  font-size: 12px;\n  font-weight: 600;\n}\n.listing-filters button span {\n  font-size: 10px;\n  opacity: .75;\n}\n.listing-filters button.active {\n  background: var(--mp-ink);\n  border-color: var(--mp-ink);\n  color: #fff;\n}\n.listing-filters button:hover:not(.active) {\n  border-color: var(--mp-blue);\n  color: var(--mp-blue);\n}\n.active-filters {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  justify-content: space-between;\n  margin: -8px 0 20px;\n  font-size: 12px;\n  color: var(--mp-muted);\n}\n.active-filters button {\n  border: 0;\n  background: none;\n  font-weight: 700;\n  color: var(--mp-blue);\n}\n.listing-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.listing-card {\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  padding: 22px 22px 16px;\n  border: 1px solid var(--mp-line);\n  border-radius: 16px;\n  background: #fff;\n  box-shadow: 0 6px 20px #10234204;\n  transition: box-shadow .2s, border-color .2s;\n}\n.listing-card:hover {\n  border-color: #aacbf4;\n  box-shadow: 0 13px 32px #1565d80d;\n}\n.listing-top {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 18px;\n}\n.listing-icon {\n  display: grid;\n  place-items: center;\n  flex-shrink: 0;\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  color: var(--category-color);\n  background: color-mix(in srgb, var(--category-color) 9%, white);\n}\n.listing-type {\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--category-color);\n  line-height: 1.5;\n}\n.featured-label {\n  margin-left: auto;\n  color: #64748b;\n  font-size: 9px;\n  padding: 4px 6px;\n  background: #f3f6fa;\n  border-radius: 4px;\n}\n.listing-card h3 {\n  margin: 0 0 12px;\n  font: 750 18px/1.35 var(--disp,sans-serif);\n  letter-spacing: -.3px;\n}\n.listing-card h3 a {\n  color: var(--mp-ink);\n}\n.listing-card h3 a:hover {\n  color: var(--mp-blue);\n}\n.listing-card > p {\n  margin: 0 0 20px;\n  color: var(--mp-muted);\n  font-size: 13px;\n  line-height: 1.75;\n  overflow-wrap: anywhere;\n}\n.listing-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: auto;\n  margin-bottom: 15px;\n  color: #74849a;\n  font-size: 11px;\n}\n.listing-meta .material-symbols-outlined {\n  font-size: 15px;\n}\n.listing-bottom {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding-top: 15px;\n  border-top: 1px solid #edf1f5;\n}\n.listing-bottom > span {\n  font-size: 11px;\n  font-weight: 700;\n  color: #566880;\n}\n.listing-bottom a {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  font-size: 12px;\n  font-weight: 700;\n  color: var(--mp-blue);\n}\n.listing-bottom a:hover {\n  text-decoration: underline;\n  text-underline-offset: 4px;\n}\n.load-more {\n  text-align: center;\n  margin-top: 30px;\n}\n.load-more p {\n  margin: 0 0 14px;\n  font-size: 12px;\n  color: var(--mp-muted);\n}\n.load-more button,\n.empty-results button {\n  display: inline-flex;\n  align-items: center;\n  gap: 20px;\n  padding: 12px 24px;\n  border: 1px solid #ccd9eb;\n  border-radius: 9px;\n  background: #fff;\n  color: var(--mp-ink);\n  font-size: 13px;\n  font-weight: 700;\n}\n.load-more button:hover {\n  border-color: var(--mp-blue);\n  color: var(--mp-blue);\n}\n.empty-results {\n  grid-column: 1/-1;\n  padding: 60px 20px;\n  text-align: center;\n  border: 1px dashed #c8d6e8;\n  border-radius: 16px;\n  background: #fff;\n}\n.empty-results > .material-symbols-outlined {\n  font-size: 42px;\n  color: #8ba2bf;\n}\n.empty-results h3 {\n  margin: 16px 0 8px;\n  font-size: 22px;\n}\n.empty-results p {\n  margin: 0 0 22px;\n  color: var(--mp-muted);\n  font-size: 14px;\n}\n.marketplace-help {\n  padding: 65px 0;\n  background:\n    radial-gradient(\n      ellipse at 100% 0,\n      #19508680,\n      transparent 60%),\n    #0b2140;\n  color: #fff;\n}\n.help-grid {\n  display: grid;\n  grid-template-columns: 1.3fr 1fr;\n  gap: 80px;\n  align-items: center;\n}\n.marketplace-help .section-kicker {\n  color: #81b9ff;\n}\n.marketplace-help h2 {\n  margin: 14px 0 20px;\n  color: #fff;\n  font: 750 clamp(27px, 3vw, 38px)/1.2 var(--disp,sans-serif);\n  letter-spacing: -1px;\n}\n.marketplace-help p {\n  max-width: 550px;\n  margin: 0;\n  color: #bdcce0;\n  font-size: 14px;\n  line-height: 1.8;\n}\n.help-actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 24px;\n  margin-top: 26px;\n}\n.help-primary {\n  display: flex;\n  gap: 24px;\n  align-items: center;\n  background: #fff;\n  color: #102342;\n  padding: 13px 20px;\n  border-radius: 9px;\n  font-size: 13px;\n  font-weight: 700;\n}\n.help-secondary {\n  color: #dbeafe;\n  font-size: 13px;\n  font-weight: 600;\n}\n.help-secondary span {\n  margin-left: 8px;\n}\n.help-benefits {\n  display: grid;\n  gap: 26px;\n  padding-left: 40px;\n  border-left: 1px solid #ffffff24;\n}\n.help-benefits > div {\n  display: flex;\n  gap: 15px;\n  align-items: flex-start;\n}\n.help-benefits .material-symbols-outlined {\n  color: #85bbff;\n  background: #ffffff0c;\n  border: 1px solid #ffffff15;\n  border-radius: 11px;\n  padding: 10px;\n}\n.help-benefits strong {\n  display: block;\n  font-size: 14px;\n  line-height: 1.4;\n}\n.help-benefits small {\n  display: block;\n  color: #acbed6;\n  font-size: 12px;\n  line-height: 1.7;\n  margin-top: 6px;\n}\n@media (min-width: 1500px) {\n  .listing-grid {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n}\n@media (max-width: 1050px) {\n  .marketplace-wrap {\n    width: calc(100% - 48px);\n  }\n  .category-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .category-card strong {\n    min-height: 0;\n  }\n  .listing-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .marketplace-stats > div {\n    padding: 16px 18px;\n  }\n  .help-grid {\n    gap: 35px;\n  }\n  .help-benefits {\n    padding-left: 25px;\n  }\n}\n@media (max-width: 680px) {\n  .marketplace-wrap {\n    width: calc(100% - 32px);\n  }\n  .marketplace-hero {\n    padding: 22px 0 35px;\n  }\n  .marketplace-breadcrumb {\n    margin-bottom: 24px;\n    font-size: 12px;\n  }\n  .catalogue-status {\n    font-size: 10px;\n  }\n  h1 {\n    letter-spacing: -1px;\n    font-size: 34px;\n  }\n  .hero-description {\n    font-size: 14px;\n  }\n  .marketplace-search {\n    gap: 8px;\n    padding-left: 12px;\n  }\n  .marketplace-search input {\n    font-size: 12px;\n  }\n  .marketplace-search button {\n    padding: 12px 15px;\n    font-size: 12px;\n  }\n  .marketplace-search button span {\n    display: none;\n  }\n  .hero-categories {\n    gap: 7px;\n  }\n  .hero-categories button {\n    font-size: 10px;\n    padding: 8px 10px;\n  }\n  .marketplace-stats {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    width: 100%;\n  }\n  .marketplace-stats > div {\n    padding: 14px 10px;\n    border: 0;\n    border-right: 1px solid #edf1f6;\n    border-bottom: 1px solid #edf1f6;\n  }\n  .marketplace-stats strong {\n    font-size: 17px;\n  }\n  .marketplace-stats span {\n    font-size: 10px;\n    line-height: 1.5;\n  }\n  .marketplace-categories,\n  .marketplace-catalogue {\n    padding: 36px 0;\n  }\n  .section-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 16px;\n  }\n  .category-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px;\n  }\n  .category-card {\n    padding: 16px 13px;\n  }\n  .category-card strong {\n    font-size: 13px;\n  }\n  .platform-note {\n    flex-wrap: wrap;\n    gap: 10px;\n    padding: 15px;\n  }\n  .platform-note p {\n    flex-basis: 100%;\n  }\n  .listing-filters {\n    gap: 7px;\n  }\n  .listing-filters button {\n    font-size: 11px;\n    padding: 8px 12px;\n  }\n  .listing-grid {\n    grid-template-columns: 1fr;\n  }\n  .listing-card {\n    padding: 20px;\n  }\n  .listing-card > p {\n    font-size: 13px;\n  }\n  .listings-heading {\n    margin-bottom: 18px;\n  }\n  .help-grid {\n    grid-template-columns: 1fr;\n    gap: 36px;\n  }\n  .help-benefits {\n    border-left: 0;\n    border-top: 1px solid #ffffff24;\n    padding: 25px 0 0;\n  }\n  .marketplace-help {\n    padding: 40px 0;\n  }\n  .active-filters {\n    align-items: flex-start;\n    gap: 8px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .marketplace button,\n  .listing-card {\n    transition: none;\n  }\n  .category-card:hover,\n  .category-card.selected {\n    transform: none;\n  }\n}\n.hero-categories.marketplace-tabs {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 9px;\n  max-width: 100%;\n  overflow-x: auto;\n  padding: 5px 2px 12px;\n  margin: 0 0 24px;\n  scrollbar-width: thin;\n}\n.hero-categories.marketplace-tabs button {\n  flex: 0 0 auto;\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 15px;\n  min-height: 38px;\n  border: 1px solid #dde5f0;\n  border-radius: 999px;\n  background: #fff;\n  color: #213b59;\n  font-size: 12px;\n  line-height: 1.2;\n  font-weight: 500;\n  white-space: nowrap;\n  box-shadow: 0 4px 12px #152d4d05;\n}\n.hero-categories.marketplace-tabs .material-symbols-outlined {\n  font-size: 16px;\n  color: var(--category-color);\n  font-variation-settings: "FILL" 0, "wght" 400;\n}\n.hero-categories.marketplace-tabs button:hover,\n.hero-categories.marketplace-tabs button.active {\n  border-color: var(--category-color);\n  background: color-mix(in srgb, var(--category-color) 6%, white);\n  box-shadow: 0 4px 14px #152d4d09;\n}\n@media (max-width: 680px) {\n  .hero-categories.marketplace-tabs {\n    gap: 8px;\n  }\n  .hero-categories.marketplace-tabs button {\n    padding: 10px 13px;\n    font-size: 11px;\n  }\n}\n.marketplace-catalogue {\n  background: #f7f9fc;\n  padding: 52px 0 70px;\n}\n.listings-heading {\n  align-items: flex-end;\n  gap: 28px;\n  margin-bottom: 32px;\n}\n.listings-heading > div:first-child {\n  flex: 1 1 420px;\n}\n.listings-heading h2 {\n  font-size: 36px;\n  margin-bottom: 18px;\n}\n.listings-heading p {\n  font-size: 13px;\n  line-height: 1.65;\n}\n.listing-filters {\n  justify-content: flex-end;\n  flex: 1 1 620px;\n  margin: 0;\n  gap: 8px;\n}\n.listing-filters button {\n  padding: 11px 15px;\n  font-size: 11px;\n  font-weight: 500;\n}\n.listing-filters button.active {\n  background: #0d1b2a;\n  border-color: #0d1b2a;\n  color: #fff;\n  font-weight: 700;\n}\n.listing-grid {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 18px;\n}\n.listing-card {\n  padding: 22px 21px 17px;\n  min-height: 280px;\n  border-radius: 17px;\n  background: #fff;\n  border-color: #e0e7f0;\n  box-shadow: 0 8px 22px #10234204;\n}\n.listing-top {\n  gap: 11px;\n  align-items: flex-start;\n  margin-bottom: 16px;\n}\n.listing-icon {\n  width: 42px;\n  height: 42px;\n  background: #eaf2ff;\n  color: #1680ef;\n  border-radius: 12px;\n  font-size: 21px;\n}\n.listing-title-block {\n  min-width: 0;\n  flex: 1;\n}\n.listing-card h3 {\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 1.35;\n  margin: 0 0 8px;\n  letter-spacing: -.35px;\n}\n.listing-type {\n  display: inline-block;\n  padding: 4px 7px;\n  border-radius: 5px;\n  color: #0669e8;\n  background: #eaf2ff;\n  font-size: 9px;\n  line-height: 1.3;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: .2px;\n}\n.listing-detail-link {\n  display: flex;\n  flex-shrink: 0;\n  color: #147afa;\n  margin-top: 2px;\n}\n.listing-detail-link .material-symbols-outlined {\n  font-size: 18px;\n}\n.listing-card > p {\n  font-size: 12px;\n  line-height: 1.85;\n  margin: 0 0 20px;\n  color: #6981a1;\n}\n.listing-provider {\n  color: #8fa1bc;\n}\n.listing-bottom {\n  margin-top: auto;\n  padding-top: 14px;\n  gap: 10px;\n  align-items: center;\n  border-top: 1px solid #edf2f8;\n}\n.listing-bottom .listing-price {\n  display: flex;\n  flex: 1 1 auto;\n  min-width: 0;\n  align-items: baseline;\n  gap: 4px;\n  color: #102342;\n  font-size: 13px;\n}\n.listing-price strong {\n  font-size: 13px;\n  font-weight: 800;\n  white-space: nowrap;\n}\n.listing-price small {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #8fa1bc;\n  font-size: 9px;\n  font-weight: 400;\n}\n.listing-bottom .listing-meta {\n  display: flex;\n  flex: 0 1 44%;\n  min-width: 0;\n  margin: 0;\n  gap: 5px;\n  color: #7890af;\n  font-size: 9px;\n  line-height: 1.4;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.listing-meta .material-symbols-outlined {\n  font-size: 13px;\n}\n@media (max-width: 1150px) {\n  .listings-heading {\n    flex-wrap: wrap;\n  }\n  .listings-heading > div:first-child {\n    flex-basis: 100%;\n  }\n  .listing-filters {\n    justify-content: flex-start;\n    flex-basis: 100%;\n  }\n  .listing-grid {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n@media (max-width: 900px) {\n  .listing-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 680px) {\n  .listings-heading {\n    gap: 20px;\n  }\n  .listings-heading > div:first-child,\n  .listing-filters {\n    flex: auto;\n  }\n  .listings-heading h2 {\n    font-size: 30px;\n  }\n  .listing-filters {\n    width: 100%;\n    gap: 7px;\n  }\n  .listing-filters button {\n    padding: 9px 12px;\n    font-size: 10px;\n  }\n  .listing-grid {\n    grid-template-columns: 1fr;\n  }\n  .listing-card {\n    min-height: 250px;\n  }\n  .listing-card h3 {\n    font-size: 17px;\n  }\n  .listing-card > p {\n    font-size: 13px;\n  }\n  .listing-price strong {\n    font-size: 14px;\n  }\n  .listing-bottom .listing-meta {\n    font-size: 10px;\n  }\n}\n.listing-icon {\n  color: var(--category-color);\n  background: color-mix(in srgb, var(--category-color) 10%, white);\n}\n.listing-type {\n  color: var(--category-color);\n  background: color-mix(in srgb, var(--category-color) 10%, white);\n}\n.listing-grid.three-listings {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.three-listings .listing-card {\n  min-height: 205px;\n}\n.listing-bottom .listing-meta {\n  flex: 0 1 44%;\n  font-size: 9px;\n}\n.listing-bottom .listing-price {\n  gap: 4px;\n}\n.listing-price small {\n  font-size: 9px;\n}\n.listing-card > p {\n  line-height: 1.8;\n}\n@media (max-width: 900px) {\n  .listing-grid.three-listings {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 680px) {\n  .listing-grid.three-listings {\n    grid-template-columns: 1fr;\n  }\n}\n.marketplace-buddha-strip {\n  padding-bottom: 44px;\n}\n.marketplace-buddha-strip .pp-cta {\n  margin-top: 0;\n}\n.marketplace-buddha-strip h2 {\n  color: #fff;\n  font-size: 26px;\n  line-height: 1.25;\n  margin: 0;\n}\n.buddha-strip-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 20px;\n}\n.buddha-strip-actions .btn-ghost {\n  color: #fff;\n  border-color: rgba(255, 255, 255, .5);\n}\n@media (max-width: 680px) {\n  .marketplace-buddha-strip .pp-cta {\n    padding: 26px 22px;\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .marketplace-buddha-strip h2 {\n    font-size: 22px;\n  }\n  .marketplace-buddha-strip .pp-cta-buddha-link {\n    position: static;\n    align-self: center;\n    transform: none;\n    margin-top: 8px;\n  }\n  .marketplace-buddha-strip .pp-cta-buddha-link:hover {\n    transform: scale(1.06);\n  }\n}\n/*# sourceMappingURL=explore-marketplace.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMarketplacePage, { className: "ExploreMarketplacePage", filePath: "src/app/pages/explore-marketplace.page.ts", lineNumber: 17 });
})();
export {
  ExploreMarketplacePage
};
//# sourceMappingURL=chunk-QVEBN5S6.js.map
