import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  CASE_STUDIES,
  CaseStudiesApiService
} from "./chunk-6DVXASVN.js";
import "./chunk-CJMXCYTU.js";
import "./chunk-WBGN3H4A.js";
import {
  toSignal
} from "./chunk-M5OSJJBF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import {
  ActivatedRoute,
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  afterNextRender,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/case-studies.page.ts
var _c0 = (a0) => ["/case-studies", a0];
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.documentId || $item.id;
function CaseStudiesPage_For_125_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 52);
    \u0275\u0275listener("click", function CaseStudiesPage_For_125_Conditional_8_For_2_Template_button_click_0_listener() {
      const child_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const branch_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectSubCategory(branch_r2.name, child_r5.name));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const child_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r2.selectedSub() === child_r5.name);
    \u0275\u0275attribute("aria-pressed", ctx_r2.selectedSub() === child_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r5.count);
  }
}
function CaseStudiesPage_For_125_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275repeaterCreate(1, CaseStudiesPage_For_125_Conditional_8_For_2_Template, 5, 5, "button", 51, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("id", ctx_r2.categoryPanelId(branch_r2.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(branch_r2.children);
  }
}
function CaseStudiesPage_For_125_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "button", 49);
    \u0275\u0275listener("click", function CaseStudiesPage_For_125_Template_button_click_1_listener() {
      const branch_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectMainCategory(branch_r2.name));
    });
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "i", 5);
    \u0275\u0275text(7, "\u2304");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, CaseStudiesPage_For_125_Conditional_8_Template, 3, 1, "div", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.selectedMain() === branch_r2.name && !ctx_r2.selectedSub())("has-selection", ctx_r2.selectedMain() === branch_r2.name);
    \u0275\u0275attribute("aria-expanded", ctx_r2.expandedMain() === branch_r2.name)("aria-controls", ctx_r2.categoryPanelId(branch_r2.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(branch_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(branch_r2.count);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.expandedMain() === branch_r2.name ? 8 : -1);
  }
}
function CaseStudiesPage_For_137_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 54);
  }
  if (rf & 2) {
    const study_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", study_r6.coverImageUrl, \u0275\u0275sanitizeUrl)("alt", study_r6.coverImageAlt || study_r6.headline || study_r6.metricLabel);
  }
}
function CaseStudiesPage_For_137_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "path", 60)(2, "circle", 61);
    \u0275\u0275elementEnd();
  }
}
function CaseStudiesPage_For_137_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "rect", 62)(2, "path", 63)(3, "path", 64);
    \u0275\u0275elementEnd();
  }
}
function CaseStudiesPage_For_137_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 55);
    \u0275\u0275element(1, "path", 65)(2, "path", 66);
    \u0275\u0275elementEnd();
  }
}
function CaseStudiesPage_For_137_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r7);
  }
}
function CaseStudiesPage_For_137_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 34)(1, "div", 53);
    \u0275\u0275conditionalCreate(2, CaseStudiesPage_For_137_Conditional_2_Template, 1, 2, "img", 54)(3, CaseStudiesPage_For_137_Conditional_3_Template, 3, 0, ":svg:svg", 55)(4, CaseStudiesPage_For_137_Conditional_4_Template, 4, 0, ":svg:svg", 55)(5, CaseStudiesPage_For_137_Conditional_5_Template, 3, 0, ":svg:svg", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56)(7, "div", 57);
    \u0275\u0275repeaterCreate(8, CaseStudiesPage_For_137_For_9_Template, 2, 1, "span", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 58);
    \u0275\u0275text(11);
    \u0275\u0275element(12, "i");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "h3");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "b", 59);
    \u0275\u0275text(21, "Read the outcome ");
    \u0275\u0275elementStart(22, "span", 5);
    \u0275\u0275text(23, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const study_r6 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, study_r6.id));
    \u0275\u0275advance();
    \u0275\u0275classMap("outcome-visual visual-" + study_r6.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(study_r6.coverImageUrl ? 2 : study_r6.id === "tally-cloud" ? 3 : study_r6.id === "ca-continuity" ? 4 : 5);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(study_r6.services);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", study_r6.industry, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", study_r6.profile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r6.metric);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r6.metricLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r6.summary);
  }
}
function CaseStudiesPage_ForEmpty_138_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "h3");
    \u0275\u0275text(2, "No matching case studies");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Try another industry, outcome or service.");
    \u0275\u0275elementEnd()();
  }
}
function CaseStudiesPage_For_144_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "i", 5);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8);
  }
}
function CaseStudiesPage_For_144_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 67)(1, "div", 68)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 69);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 70)(11, "span", 71);
    \u0275\u0275text(12, "The challenge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h2");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 72)(18, "span", 71);
    \u0275\u0275text(19, "What XcellHost changed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 73)(23, "span", 71);
    \u0275\u0275text(24, "Business impact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "ul");
    \u0275\u0275repeaterCreate(26, CaseStudiesPage_For_144_For_27_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const study_r9 = ctx.$implicit;
    const \u0275$index_323_r10 = ctx.$index;
    \u0275\u0275classProp("case-detail-reverse", \u0275$index_323_r10 % 2 === 1);
    \u0275\u0275property("id", study_r9.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", study_r9.industry, " / ", study_r9.profile);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r9.metric);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r9.metricLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("0", \u0275$index_323_r10 + 1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(study_r9.metricLabel);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(study_r9.challenge);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(study_r9.solution);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(study_r9.impact);
  }
}
var CaseStudiesPage = class _CaseStudiesPage {
  overlay = inject(OverlayService);
  seo = inject(SeoService);
  route = inject(ActivatedRoute);
  document = inject(DOCUMENT);
  caseStudiesApi = inject(CaseStudiesApiService);
  studies = toSignal(this.caseStudiesApi.studies$, { initialValue: CASE_STUDIES });
  selectedMain = signal("", ...ngDevMode ? [{ debugName: "selectedMain" }] : []);
  selectedSub = signal("", ...ngDevMode ? [{ debugName: "selectedSub" }] : []);
  expandedMain = signal(null, ...ngDevMode ? [{ debugName: "expandedMain" }] : []);
  searchQuery = signal("", ...ngDevMode ? [{ debugName: "searchQuery" }] : []);
  categoryTree = computed(() => {
    const branches = /* @__PURE__ */ new Map();
    for (const study of this.studies()) {
      const children = branches.get(study.mainCategory) ?? /* @__PURE__ */ new Map();
      children.set(study.subCategory, (children.get(study.subCategory) ?? 0) + 1);
      branches.set(study.mainCategory, children);
    }
    return [...branches.entries()].map(([name, children]) => ({
      name,
      count: [...children.values()].reduce((total, count) => total + count, 0),
      children: [...children.entries()].map(([childName, count]) => ({ name: childName, count }))
    }));
  }, ...ngDevMode ? [{ debugName: "categoryTree" }] : []);
  visibleStudies = computed(() => {
    const query = this.searchQuery().trim().toLowerCase();
    return this.studies().filter((study) => {
      const matchesCategory = !this.selectedMain() || study.mainCategory === this.selectedMain() && (!this.selectedSub() || study.subCategory === this.selectedSub());
      const matchesQuery = !query || [
        study.mainCategory,
        study.subCategory,
        study.industry,
        study.profile,
        study.metric,
        study.metricLabel,
        study.summary,
        ...study.services
      ].some((value) => value.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });
  }, ...ngDevMode ? [{ debugName: "visibleStudies" }] : []);
  constructor() {
    this.seo.set("Customer Case Studies - XcellHost", "See how Indian businesses improved continuity, cloud operations and DPDPA readiness with XcellHost.", "/case-studies/");
    afterNextRender(() => {
      const outcomeId = this.route.snapshot.fragment;
      if (!outcomeId)
        return;
      requestAnimationFrame(() => {
        this.document.getElementById(outcomeId)?.scrollIntoView({ block: "start" });
      });
    });
  }
  openCallback() {
    this.overlay.open("callback");
  }
  selectAllCategories() {
    this.selectedMain.set("");
    this.selectedSub.set("");
    this.expandedMain.set(null);
  }
  selectMainCategory(category) {
    this.selectedMain.set(category);
    this.selectedSub.set("");
    this.expandedMain.update((expanded) => expanded === category ? null : category);
  }
  selectSubCategory(mainCategory, subCategory) {
    this.selectedMain.set(mainCategory);
    this.selectedSub.set(subCategory);
    this.expandedMain.set(mainCategory);
  }
  categoryPanelId(category) {
    return `case-category-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  }
  searchStudies(event) {
    this.searchQuery.set(event.target.value);
  }
  static \u0275fac = function CaseStudiesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CaseStudiesPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CaseStudiesPage, selectors: [["xh-case-studies-page"]], hostAttrs: [2, "display", "contents"], decls: 220, vars: 10, consts: [[1, "case-page"], [1, "case-hero"], [1, "wrap"], ["aria-label", "Breadcrumb", 1, "case-crumb"], ["routerLink", "/", "aria-label", "Home"], ["aria-hidden", "true"], ["routerLink", "/insights"], [1, "case-intro"], [1, "wrap", "case-intro-grid"], [1, "case-hero-copy"], [1, "case-kicker"], [1, "case-hero-actions"], ["href", "#stories", 1, "case-btn", "case-btn-primary"], ["type", "button", 1, "case-btn", "case-btn-ghost", 3, "click"], ["aria-label", "Featured customer outcomes", 1, "case-scorecard"], [1, "scorecard-head"], ["aria-label", "XcellHost credentials", 1, "case-trust"], ["id", "stories", 1, "case-overview"], [1, "case-section-head"], [1, "case-filter-row"], [1, "case-filter-intro"], [1, "case-search"], ["for", "case-search"], [1, "case-search-field"], ["id", "case-search", "type", "search", "placeholder", "Search by outcome or service", 3, "input", "value"], [1, "case-library-layout"], ["aria-label", "Case study categories", 1, "case-category-card"], [1, "case-category-label"], ["type", "button", 1, "case-category-all", 3, "click"], [1, "case-category-branch"], [1, "case-library-results"], [1, "case-results-head"], ["role", "status"], [1, "case-overview-grid"], [1, "outcome-card", 3, "routerLink"], [1, "case-empty"], [1, "case-privacy-note"], [1, "case-detail-section"], [1, "case-detail", 3, "case-detail-reverse", "id"], ["aria-labelledby", "case-guide-title", 1, "case-guide"], [1, "case-guide-head"], ["id", "case-guide-title"], [1, "case-guide-grid"], [1, "case-method"], [1, "case-section-head", "case-section-head-light"], [1, "method-grid"], [1, "case-cta"], [1, "wrap", "case-cta-inner"], ["type", "button", 1, "case-btn", "case-btn-primary", 3, "click"], ["type", "button", 1, "case-category-main", 3, "click"], [1, "case-subcategories", 3, "id"], ["type", "button", 3, "active"], ["type", "button", 3, "click"], [1, "outcome-visual"], ["loading", "lazy", "decoding", "async", 3, "src", "alt"], ["viewBox", "0 0 360 190"], [1, "outcome-body"], [1, "outcome-services"], [1, "outcome-tag"], [1, "outcome-link"], ["d", "M35 151h290M69 151V79h72v72M87 79V55h37v24M165 151V40h128v111M190 68h26m28 0h25m-79 29h26m28 0h25m-79 29h26m28 0h25"], ["cx", "266", "cy", "29", "r", "12"], ["x", "55", "y", "38", "width", "250", "height", "114", "rx", "5"], ["d", "M150 152v21m60-21v21m-91 0h122M82 65h196v61H82z"], ["d", "M145 96l23 22 49-51", 1, "accent"], ["d", "M180 28l92 34v47c0 42-35 65-92 78-57-13-92-36-92-78V62z"], ["d", "M142 104l25 25 53-55", 1, "accent"], [1, "case-detail", 3, "id"], [1, "detail-metric"], [1, "detail-number"], [1, "detail-story"], [1, "detail-label"], [1, "detail-solution"], [1, "detail-impact"]], template: function CaseStudiesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Case Studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "nav", 3)(6, "a", 4)(7, "span", 5);
      \u0275\u0275text(8, "\u2302");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(9, "i", 5);
      \u0275\u0275elementStart(10, "a", 6);
      \u0275\u0275text(11, "Insights");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "i", 5);
      \u0275\u0275elementStart(13, "span");
      \u0275\u0275text(14, "Case Studies");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(15, "section", 7)(16, "div", 8)(17, "div", 9)(18, "span", 10);
      \u0275\u0275text(19, "Customer outcomes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "h2");
      \u0275\u0275text(21, "Proof in the work.");
      \u0275\u0275element(22, "br");
      \u0275\u0275elementStart(23, "em");
      \u0275\u0275text(24, "Progress in the numbers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "p");
      \u0275\u0275text(26, " See how Indian businesses removed operational friction, recovered faster and turned compliance into a working system with XcellHost. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "div", 11)(28, "a", 12);
      \u0275\u0275text(29, "Explore the stories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "button", 13);
      \u0275\u0275listener("click", function CaseStudiesPage_Template_button_click_30_listener() {
        return ctx.openCallback();
      });
      \u0275\u0275text(31, " Discuss your challenge ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "div", 14)(33, "div", 15)(34, "span");
      \u0275\u0275text(35, "Outcome snapshot");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "b");
      \u0275\u0275text(37);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "article")(39, "strong");
      \u0275\u0275text(40, "0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "div")(42, "b");
      \u0275\u0275text(43, "days reconciling");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span");
      \u0275\u0275text(45, "Previously two days every month");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "article")(47, "strong");
      \u0275\u0275text(48, "10");
      \u0275\u0275elementStart(49, "small");
      \u0275\u0275text(50, " min");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div")(52, "b");
      \u0275\u0275text(53, "to resume work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span");
      \u0275\u0275text(55, "After an office PC failure");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(56, "article")(57, "strong");
      \u0275\u0275text(58, "8");
      \u0275\u0275elementStart(59, "small");
      \u0275\u0275text(60, " weeks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "div")(62, "b");
      \u0275\u0275text(63, "to audit readiness");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "span");
      \u0275\u0275text(65, "With privacy workflows operating");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(66, "section", 16)(67, "div", 2)(68, "span")(69, "b");
      \u0275\u0275text(70, "ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275text(71, " & ");
      \u0275\u0275elementStart(72, "b");
      \u0275\u0275text(73, "20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(74, " certified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Microsoft ");
      \u0275\u0275elementStart(77, "b");
      \u0275\u0275text(78, "Gold Partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "span")(80, "b");
      \u0275\u0275text(81, "10,000+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(82, " customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span")(84, "b");
      \u0275\u0275text(85, "Since 1999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(86, "span")(87, "b");
      \u0275\u0275text(88, "99.95% uptime SLA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(89, "span")(90, "b");
      \u0275\u0275text(91, "24x7");
      \u0275\u0275elementEnd();
      \u0275\u0275text(92, " NOC + SOC");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(93, "section", 17)(94, "div", 2)(95, "header", 18)(96, "span");
      \u0275\u0275text(97, "Proof, not promises");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "h2");
      \u0275\u0275text(99, "What changed for them");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p");
      \u0275\u0275text(101, "Real operational outcomes from businesses that moved to XcellHost.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 19)(103, "div", 20)(104, "span");
      \u0275\u0275text(105, "Explore by category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p");
      \u0275\u0275text(107, "Open a main category to choose a more specific customer segment.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(108, "div", 21)(109, "label", 22);
      \u0275\u0275text(110, "Search case studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 23)(112, "input", 24);
      \u0275\u0275listener("input", function CaseStudiesPage_Template_input_input_112_listener($event) {
        return ctx.searchStudies($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "span", 5);
      \u0275\u0275text(114, "\u2315");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(115, "div", 25)(116, "aside", 26)(117, "span", 27);
      \u0275\u0275text(118, "Browse customer stories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "button", 28);
      \u0275\u0275listener("click", function CaseStudiesPage_Template_button_click_119_listener() {
        return ctx.selectAllCategories();
      });
      \u0275\u0275elementStart(120, "span");
      \u0275\u0275text(121, "All case studies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "b");
      \u0275\u0275text(123);
      \u0275\u0275elementEnd()();
      \u0275\u0275repeaterCreate(124, CaseStudiesPage_For_125_Template, 9, 9, "div", 29, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "div", 30)(127, "div", 31)(128, "div")(129, "span");
      \u0275\u0275text(130, "Showing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(131, "h3");
      \u0275\u0275text(132);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(133, "p", 32);
      \u0275\u0275text(134);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(135, "div", 33);
      \u0275\u0275repeaterCreate(136, CaseStudiesPage_For_137_Template, 24, 11, "a", 34, _forTrack1, false, CaseStudiesPage_ForEmpty_138_Template, 5, 0, "div", 35);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(139, "p", 36);
      \u0275\u0275text(140, " Customer identities are anonymised to protect operational and compliance information. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(141, "section", 37)(142, "div", 2);
      \u0275\u0275repeaterCreate(143, CaseStudiesPage_For_144_Template, 28, 11, "article", 38, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "section", 39)(146, "div", 2)(147, "header", 40)(148, "span");
      \u0275\u0275text(149, "Understanding the stories");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "h2", 41);
      \u0275\u0275text(151, "Questions about our case studies?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p");
      \u0275\u0275text(153, " Each story connects a business constraint to the practical change that removed it and the outcome the customer could measure afterwards. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(154, "div", 42)(155, "article")(156, "span");
      \u0275\u0275text(157, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(158, "div")(159, "h3");
      \u0275\u0275text(160, "How are our case studies created?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(161, "p");
      \u0275\u0275text(162, " We begin with the customer\u2019s operating challenge, document the technology and transition work, and then validate the business result. Sensitive identities and operational details remain anonymised where required. ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(163, "article")(164, "span");
      \u0275\u0275text(165, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "div")(167, "h3");
      \u0275\u0275text(168, "Case study or use case?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(169, "p");
      \u0275\u0275text(170, " A use case explains what a solution can do in a common scenario. A case study shows what changed in a real engagement, including the starting problem, the implemented approach and the resulting impact. ");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(171, "section", 43)(172, "div", 2)(173, "header", 44)(174, "span");
      \u0275\u0275text(175, "How we work");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "h2");
      \u0275\u0275text(177, "From bottleneck to measurable outcome");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "p");
      \u0275\u0275text(179, "Technology matters, but a clear operating plan is what makes the improvement stick.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(180, "div", 45)(181, "article")(182, "b");
      \u0275\u0275text(183, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(184, "h3");
      \u0275\u0275text(185, "Discover");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "p");
      \u0275\u0275text(187, "Map the workflow, risk and real cost of the current constraint.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(188, "article")(189, "b");
      \u0275\u0275text(190, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(191, "h3");
      \u0275\u0275text(192, "Design");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(193, "p");
      \u0275\u0275text(194, "Build the right-sized cloud, security or compliance solution.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(195, "article")(196, "b");
      \u0275\u0275text(197, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(198, "h3");
      \u0275\u0275text(199, "Transition");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "p");
      \u0275\u0275text(201, "Migrate carefully, validate access and keep disruption controlled.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "article")(203, "b");
      \u0275\u0275text(204, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "h3");
      \u0275\u0275text(206, "Improve");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(207, "p");
      \u0275\u0275text(208, "Monitor performance, protect continuity and optimise over time.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(209, "section", 46)(210, "div", 47)(211, "div")(212, "span");
      \u0275\u0275text(213, "Have a similar challenge?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(214, "h2");
      \u0275\u0275text(215, "Bring us the bottleneck.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(216, "p");
      \u0275\u0275text(217, "Tell us what is slowing the business down. We will help define a practical next step.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(218, "button", 48);
      \u0275\u0275listener("click", function CaseStudiesPage_Template_button_click_218_listener() {
        return ctx.openCallback();
      });
      \u0275\u0275text(219, " Request a callback ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(37);
      \u0275\u0275textInterpolate1("", ctx.studies().length, " customer stories");
      \u0275\u0275advance(75);
      \u0275\u0275property("value", ctx.searchQuery());
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", !ctx.selectedMain());
      \u0275\u0275attribute("aria-pressed", !ctx.selectedMain());
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.studies().length);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.categoryTree());
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(ctx.selectedSub() || ctx.selectedMain() || "All case studies");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate2("", ctx.visibleStudies().length, " stor", ctx.visibleStudies().length === 1 ? "y" : "ies");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.visibleStudies());
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.studies());
    }
  }, dependencies: [RouterLink], styles: ['\n\n[_nghost-%COMP%] {\n  --case-blue:#0050d7;\n  --case-navy:#071f49;\n  --case-slate:#526681;\n  --case-line:#d7e4ec;\n  --case-ice:#f0fbfd;\n  display: contents;\n}\n.case-page[_ngcontent-%COMP%] {\n  color: var(--case-navy);\n  background: #fff;\n}\n.case-hero[_ngcontent-%COMP%] {\n  padding: 50px 0 28px;\n  background: #fff;\n}\n.case-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-bottom: 9px;\n  border-bottom: 2px solid #c5edf0;\n  color: #061b44;\n  font: 700 17px/1.3 var(--disp);\n  letter-spacing: -.01em;\n}\n.case-crumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-top: 9px;\n  color: #65728d;\n  font-size: 12px;\n  line-height: 1.3;\n}\n.case-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.case-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:first-child {\n  color: #0a5dc2;\n  font-size: 16px;\n}\n.case-crumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: var(--case-blue);\n}\n.case-crumb[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 16px;\n  background: #aeb8c8;\n}\n.case-intro[_ngcontent-%COMP%] {\n  padding: 24px 0 30px 0;\n  background: #fff;\n}\n.case-intro-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1.18fr) minmax(345px, .82fr);\n  align-items: center;\n  gap: 78px;\n}\n.case-kicker[_ngcontent-%COMP%], \n.case-section-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.case-cta-inner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--case-blue);\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.case-hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  max-width: 740px;\n  margin: 13px 0 17px;\n  color: #071f49;\n  font: 500 clamp(34px, 4.2vw, 54px)/1.08 var(--disp);\n  letter-spacing: -.035em;\n}\n.case-hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: var(--case-blue);\n  font-style: normal;\n}\n.case-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 690px;\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 16px;\n  line-height: 1.7;\n}\n.case-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 29px;\n}\n.case-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 46px;\n  padding: 0 22px;\n  border: 2px solid transparent;\n  border-radius: 2px;\n  font: 700 13px var(--disp);\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    background .2s,\n    color .2s,\n    transform .2s;\n}\n.case-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.case-btn-primary[_ngcontent-%COMP%] {\n  background: var(--case-blue);\n  color: #fff;\n}\n.case-btn-primary[_ngcontent-%COMP%]:hover {\n  background: #003fba;\n}\n.case-btn-ghost[_ngcontent-%COMP%] {\n  border-color: var(--case-blue);\n  background: #fff;\n  color: var(--case-blue);\n}\n.case-scorecard[_ngcontent-%COMP%] {\n  border: 1px solid #cce3ea;\n  background: #f2fbfc;\n}\n.scorecard-head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 17px 20px;\n  border-bottom: 1px solid #cce3ea;\n  color: #62718a;\n  font-size: 10px;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.scorecard-head[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #071f49;\n}\n.case-scorecard[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 108px 1fr;\n  align-items: center;\n  gap: 17px;\n  padding: 18px 20px;\n  border-bottom: 1px solid #d6e8ed;\n}\n.case-scorecard[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]:last-child {\n  border-bottom: 0;\n}\n.case-scorecard[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  color: var(--case-blue);\n  font: 600 31px/1 var(--disp);\n  letter-spacing: -.03em;\n}\n.case-scorecard[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.case-scorecard[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: #071f49;\n  font-size: 13px;\n}\n.case-scorecard[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #677992;\n  font-size: 11px;\n  line-height: 1.4;\n}\n.case-trust[_ngcontent-%COMP%] {\n  border-block: 1px solid #dbe7ec;\n  background: #f5fbfc;\n}\n.case-trust[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 18px;\n  padding-top: 17px;\n  padding-bottom: 17px;\n  color: #526681;\n  font-size: 12px;\n}\n.case-trust[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--case-navy);\n}\n.case-overview[_ngcontent-%COMP%] {\n  padding: 36px 0 46px 0;\n  scroll-margin-top: 90px;\n}\n.case-section-head[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin-bottom: 42px;\n}\n.case-section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 12px 0 10px;\n  color: #071f49;\n  font: 500 clamp(30px, 3.7vw, 43px)/1.16 var(--disp);\n  letter-spacing: -.025em;\n}\n.case-section-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 15px;\n  line-height: 1.6;\n}\n.case-filter-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 410px));\n  gap: 18px;\n  margin-bottom: 34px;\n}\n.case-filter[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], \n.case-search[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  color: #465b79;\n  font: 600 11px/1.3 var(--disp);\n}\n.case-select[_ngcontent-%COMP%], \n.case-search-field[_ngcontent-%COMP%] {\n  position: relative;\n}\n.case-select[_ngcontent-%COMP%]::after {\n  content: "\\2304";\n  position: absolute;\n  right: 17px;\n  top: 50%;\n  color: #0065d1;\n  font-size: 22px;\n  line-height: 1;\n  pointer-events: none;\n  transform: translateY(-58%);\n}\n.case-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.case-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 45px;\n  border: 1px solid #83cdd8;\n  border-radius: 2px;\n  background: #fff;\n  color: #344761;\n  font: 400 13px var(--body);\n}\n.case-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0 45px 0 14px;\n  appearance: none;\n  cursor: pointer;\n}\n.case-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0 45px 0 14px;\n}\n.case-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #8592a5;\n}\n.case-search-field[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  color: #0065d1;\n  font-size: 23px;\n  line-height: 1;\n  pointer-events: none;\n  transform: translateY(-52%);\n}\n.case-select[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.case-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: 2px solid rgba(0, 80, 215, .18);\n  outline-offset: 2px;\n}\n.case-related[_ngcontent-%COMP%] {\n  margin: 0 0 32px;\n  text-align: center;\n  color: #081f49;\n  font: 500 25px/1.25 var(--disp);\n}\n.case-overview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.outcome-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  color: inherit;\n  text-decoration: none;\n  transition: transform .22s, box-shadow .22s;\n}\n.outcome-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 32px rgba(6, 38, 81, .12);\n}\n.outcome-visual[_ngcontent-%COMP%] {\n  height: 220px;\n  overflow: hidden;\n  background: #d9efff;\n}\n.outcome-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform .3s ease;\n}\n.outcome-card[_ngcontent-%COMP%]:hover   .outcome-visual[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.035);\n}\n.outcome-visual[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  fill: none;\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  opacity: .92;\n}\n.outcome-visual[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  stroke: #ff6d43;\n  stroke-width: 6;\n}\n.visual-tally-cloud[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #0e59b9,\n      #168cd4);\n}\n.visual-ca-continuity[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #16a2ac,\n      #055f91);\n}\n.visual-dpdpa-readiness[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #263c85,\n      #6b4d9b);\n}\n.outcome-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-height: 325px;\n  padding: 23px 25px 25px;\n  border: 1px solid #cee5e9;\n  border-top: 0;\n  background: var(--case-ice);\n}\n.outcome-services[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 24px;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-bottom: 16px;\n}\n.outcome-services[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  padding: 5px 9px;\n  background: #fff;\n  color: #4a5e7b;\n  font: 500 10px var(--body);\n}\n.outcome-tag[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  color: #526681;\n  font: 600 10px var(--mono);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.outcome-tag[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #ff6d43;\n}\n.outcome-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--case-blue);\n  font: 600 28px/1.1 var(--disp);\n  letter-spacing: -.02em;\n}\n.outcome-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 9px 0 10px;\n  color: #071f49;\n  font: 600 17px/1.35 var(--disp);\n}\n.outcome-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 18px;\n  color: var(--case-slate);\n  font-size: 13px;\n  line-height: 1.65;\n}\n.outcome-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: auto;\n  color: var(--case-blue);\n  font-size: 12px;\n}\n.outcome-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 18px;\n  transition: transform .2s;\n}\n.outcome-card[_ngcontent-%COMP%]:hover   .outcome-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: translateX(4px);\n}\n.case-empty[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  padding: 48px 24px;\n  border: 1px solid #cee5e9;\n  background: #f2fbfc;\n  text-align: center;\n}\n.case-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 7px;\n  font: 600 21px/1.3 var(--disp);\n}\n.case-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 13px;\n}\n.case-privacy-note[_ngcontent-%COMP%] {\n  margin: 18px 0 0;\n  color: #8290a3;\n  font-size: 11px;\n}\n.case-detail-section[_ngcontent-%COMP%] {\n  padding: 20px 0 48px 0;\n  background:\n    linear-gradient(\n      180deg,\n      #fff,\n      #f4fbfc);\n}\n.case-detail[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(290px, .72fr) minmax(0, 1.28fr);\n  gap: 70px;\n  align-items: stretch;\n  padding: 62px 0;\n  scroll-margin-top: 92px;\n  border-top: 1px solid var(--case-line);\n}\n.case-detail[_ngcontent-%COMP%]:target {\n  animation: _ngcontent-%COMP%_case-outcome-arrive 1.1s ease-out;\n}\n@keyframes _ngcontent-%COMP%_case-outcome-arrive {\n  0% {\n    background: rgba(0, 80, 215, .08);\n  }\n  100% {\n    background: transparent;\n  }\n}\n.case-detail-reverse[_ngcontent-%COMP%]   .detail-metric[_ngcontent-%COMP%] {\n  order: 2;\n}\n.case-detail-reverse[_ngcontent-%COMP%]   .detail-story[_ngcontent-%COMP%] {\n  order: 1;\n}\n.detail-metric[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  min-height: 320px;\n  padding: 34px;\n  background: #081f49;\n  color: #fff;\n}\n.detail-metric[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #a7c7ef;\n  font: 700 10px var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.detail-metric[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  display: block;\n  margin: 50px 0 8px;\n  color: #6eb4ff;\n  font: 600 clamp(39px, 4.7vw, 60px)/1 var(--disp);\n  letter-spacing: -.045em;\n}\n.detail-metric[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 290px;\n  margin: 0;\n  color: #d8e5f4;\n  font: 600 16px/1.4 var(--disp);\n}\n.detail-number[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 18px;\n  bottom: -30px;\n  color: rgba(255, 255, 255, .06);\n  font: 900 150px/1 var(--disp);\n}\n.detail-story[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n.detail-label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 10px;\n  color: var(--case-blue);\n  font: 700 10px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.detail-story[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font: 600 clamp(27px, 3.2vw, 38px)/1.15 var(--disp);\n  letter-spacing: -.02em;\n}\n.detail-story[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%], \n.detail-solution[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 14.5px;\n  line-height: 1.75;\n}\n.detail-solution[_ngcontent-%COMP%] {\n  margin: 27px 0;\n  padding: 22px 24px;\n  border-left: 3px solid #ff6d43;\n  background: #fff;\n  box-shadow: 0 7px 24px rgba(7, 42, 85, .06);\n}\n.detail-impact[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 9px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.detail-impact[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  color: #314966;\n  font-size: 13.5px;\n  line-height: 1.5;\n}\n.detail-impact[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  flex: 0 0 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #e5f1ff;\n  color: var(--case-blue);\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 800;\n}\n.case-guide[_ngcontent-%COMP%] {\n  padding: 38px 0 41px 0;\n  border-top: 1px solid #d7e4ec;\n  background: #fff;\n}\n.case-guide-head[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin-bottom: 38px;\n}\n.case-guide-head[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--case-blue);\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.case-guide-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 12px 0 12px;\n  color: var(--case-navy);\n  font: 500 clamp(30px, 3.7vw, 43px)/1.16 var(--disp);\n  letter-spacing: -.025em;\n}\n.case-guide-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 15px;\n  line-height: 1.7;\n}\n.case-guide-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1px;\n  background: #cce3ea;\n}\n.case-guide-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 48px minmax(0, 1fr);\n  gap: 20px;\n  padding: 32px;\n  background: #f2fbfc;\n}\n.case-guide-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: var(--case-blue);\n  font: 700 11px/1 var(--mono);\n}\n.case-guide-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  color: var(--case-navy);\n  font: 600 21px/1.3 var(--disp);\n}\n.case-guide-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 14px;\n  line-height: 1.75;\n}\n.case-method[_ngcontent-%COMP%] {\n  padding: 44px 0 44px 0;\n  background: #081f49;\n  color: #fff;\n}\n.case-section-head-light[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.case-section-head-light[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #bdcee4;\n}\n.method-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1px;\n  background: rgba(255, 255, 255, .18);\n}\n.method-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  min-height: 190px;\n  padding: 25px;\n  background: #0a2b5c;\n}\n.method-grid[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #70b6ff;\n  font: 700 11px var(--mono);\n}\n.method-grid[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 37px 0 8px;\n  color: #fff;\n  font: 600 19px var(--disp);\n}\n.method-grid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #bdcee4;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.case-cta[_ngcontent-%COMP%] {\n  padding: 36px 0 36px 0;\n  background: #fff;\n}\n.case-cta-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n  padding: 42px 46px;\n  border: 1px solid #cce3ea;\n  background: #f2fbfc;\n}\n.case-cta-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 7px;\n  font: 500 clamp(30px, 4vw, 43px)/1.1 var(--disp);\n}\n.case-cta-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 14px;\n}\n.case-cta-inner[_ngcontent-%COMP%]   .case-btn[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n@media (max-width: 980px) {\n  .case-intro-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 42px;\n  }\n  .case-scorecard[_ngcontent-%COMP%] {\n    max-width: 650px;\n  }\n  .case-overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .method-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n  .case-trust[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n  .case-detail[_ngcontent-%COMP%] {\n    gap: 38px;\n  }\n}\n@media (max-width: 680px) {\n  .case-hero[_ngcontent-%COMP%] {\n    padding: 32px 0 20px;\n  }\n  .case-intro[_ngcontent-%COMP%] {\n    padding: 17px 0 23px 0;\n  }\n  .case-intro-grid[_ngcontent-%COMP%] {\n    gap: 30px;\n  }\n  .case-hero-copy[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n  .case-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .case-hero-actions[_ngcontent-%COMP%], \n   .case-hero-actions[_ngcontent-%COMP%]   .case-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .case-scorecard[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    grid-template-columns: 94px 1fr;\n  }\n  .case-scorecard[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .case-overview[_ngcontent-%COMP%] {\n    padding: 27.5px 0 35px 0;\n  }\n  .case-section-head[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .case-filter-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .case-overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .outcome-visual[_ngcontent-%COMP%] {\n    height: 210px;\n  }\n  .outcome-body[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .case-detail[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 28px;\n    padding: 44px 0;\n  }\n  .case-detail-reverse[_ngcontent-%COMP%]   .detail-metric[_ngcontent-%COMP%], \n   .case-detail-reverse[_ngcontent-%COMP%]   .detail-story[_ngcontent-%COMP%] {\n    order: initial;\n  }\n  .detail-metric[_ngcontent-%COMP%] {\n    min-height: 260px;\n  }\n  .detail-metric[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n    margin-top: 42px;\n  }\n  .case-guide[_ngcontent-%COMP%] {\n    padding: 29px 0 29px 0;\n  }\n  .case-guide-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .case-guide-grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    grid-template-columns: 36px minmax(0, 1fr);\n    padding: 25px 20px;\n  }\n  .method-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .case-method[_ngcontent-%COMP%] {\n    padding: 33px 0 33px 0;\n  }\n  .case-cta[_ngcontent-%COMP%] {\n    padding: 24px 0 24px 0;\n  }\n  .case-cta-inner[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 30px 24px;\n  }\n  .case-cta-inner[_ngcontent-%COMP%]   .case-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .case-trust[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n.case-filter-row[_ngcontent-%COMP%] {\n  display: flex;\n  grid-template-columns: none;\n  align-items: end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 27px;\n}\n.case-filter-intro[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--case-blue);\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.case-filter-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 430px;\n  margin: 8px 0 0;\n  color: var(--case-slate);\n  font-size: 12px;\n  line-height: 1.55;\n}\n.case-search[_ngcontent-%COMP%] {\n  width: min(410px, 100%);\n}\n.case-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-radius: 8px;\n}\n.case-library-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 260px minmax(0, 1fr);\n  align-items: start;\n  gap: 28px;\n}\n.case-category-card[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 92px;\n  padding: 18px;\n  border: 1px solid #d4e3ec;\n  border-radius: 16px;\n  background: #f6fbfc;\n  box-shadow: 0 15px 34px rgba(7, 42, 85, .07);\n}\n.case-category-label[_ngcontent-%COMP%] {\n  display: block;\n  margin: 3px 5px 15px;\n  color: #60728a;\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.case-category-all[_ngcontent-%COMP%], \n.case-category-main[_ngcontent-%COMP%] {\n  display: grid;\n  width: 100%;\n  grid-template-columns: minmax(0, 1fr) auto 17px;\n  align-items: center;\n  gap: 9px;\n  padding: 13px 12px;\n  border: 1px solid #d3e3ec;\n  border-radius: 10px;\n  background: #fff;\n  color: #173a61;\n  font: 650 11px/1.35 var(--body);\n  text-align: left;\n  cursor: pointer;\n}\n.case-category-all[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 1fr) auto;\n  margin-bottom: 8px;\n}\n.case-category-all[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], \n.case-category-main[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 27px;\n  height: 27px;\n  place-items: center;\n  padding: 0 6px;\n  border-radius: 999px;\n  background: #edf5ff;\n  color: #0761ce;\n  font: 700 9px/1 var(--mono);\n}\n.case-category-all.active[_ngcontent-%COMP%], \n.case-category-main.active[_ngcontent-%COMP%] {\n  border-color: #075ccc;\n  background:\n    linear-gradient(\n      135deg,\n      #0969de,\n      #0048aa);\n  color: #fff;\n}\n.case-category-all.active[_ngcontent-%COMP%]   b[_ngcontent-%COMP%], \n.case-category-main.active[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .16);\n  color: #fff;\n}\n.case-category-main.has-selection[_ngcontent-%COMP%]:not(.active) {\n  border-color: #a9c9ee;\n  background: #edf5ff;\n  color: #0757b6;\n}\n.case-category-main[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-style: normal;\n  text-align: center;\n  transition: transform .2s;\n}\n.case-category-main[aria-expanded=true][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.case-category-branch[_ngcontent-%COMP%]    + .case-category-branch[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.case-subcategories[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n  margin: 2px 8px 4px 20px;\n  padding: 7px 0 3px 10px;\n  border-left: 1px solid #bcd2e5;\n  animation: _ngcontent-%COMP%_case-category-open .2s ease-out;\n}\n.case-subcategories[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  min-height: 36px;\n  padding: 7px 9px;\n  border: 0;\n  border-radius: 7px;\n  background: transparent;\n  color: #526a84;\n  font: 600 10px/1.35 var(--body);\n  text-align: left;\n  cursor: pointer;\n}\n.case-subcategories[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.case-subcategories[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #075bc5;\n}\n.case-subcategories[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  box-shadow: inset 3px 0 #0868d9, 0 5px 14px rgba(7, 62, 124, .07);\n}\n.case-subcategories[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1370d9;\n  font: 700 9px var(--mono);\n}\n.case-library-results[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.case-results-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 17px;\n}\n.case-results-head[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--case-blue);\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.case-results-head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--case-navy);\n  font: 600 24px/1.2 var(--disp);\n}\n.case-results-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #6d8098;\n  font: 600 11px var(--mono);\n}\n.case-library-results[_ngcontent-%COMP%]   .case-overview-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n@keyframes _ngcontent-%COMP%_case-category-open {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@media (max-width: 980px) {\n  .case-library-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .case-category-card[_ngcontent-%COMP%] {\n    position: static;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n  .case-category-label[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n  .case-category-all[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .case-category-branch[_ngcontent-%COMP%]    + .case-category-branch[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n@media (max-width: 680px) {\n  .case-filter-row[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .case-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .case-category-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .case-library-results[_ngcontent-%COMP%]   .case-overview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .case-results-head[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=case-studies.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CaseStudiesPage, [{
    type: Component,
    args: [{ selector: "xh-case-studies-page", standalone: true, imports: [RouterLink], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="case-page">\r
  <section class="case-hero">\r
    <div class="wrap">\r
      <h1>Case Studies</h1>\r
      <nav class="case-crumb" aria-label="Breadcrumb">\r
        <a routerLink="/" aria-label="Home"><span aria-hidden="true">\u2302</span></a>\r
        <i aria-hidden="true"></i>\r
        <a routerLink="/insights">Insights</a>\r
        <i aria-hidden="true"></i>\r
        <span>Case Studies</span>\r
      </nav>\r
    </div>\r
  </section>\r
\r
  <section class="case-intro">\r
    <div class="wrap case-intro-grid">\r
      <div class="case-hero-copy">\r
        <span class="case-kicker">Customer outcomes</span>\r
        <h2>Proof in the work.<br /><em>Progress in the numbers.</em></h2>\r
        <p>\r
          See how Indian businesses removed operational friction, recovered faster and turned\r
          compliance into a working system with XcellHost.\r
        </p>\r
        <div class="case-hero-actions">\r
          <a class="case-btn case-btn-primary" href="#stories">Explore the stories</a>\r
          <button class="case-btn case-btn-ghost" type="button" (click)="openCallback()">\r
            Discuss your challenge\r
          </button>\r
        </div>\r
      </div>\r
\r
      <div class="case-scorecard" aria-label="Featured customer outcomes">\r
        <div class="scorecard-head">\r
          <span>Outcome snapshot</span>\r
          <b>{{ studies().length }} customer stories</b>\r
        </div>\r
        <article>\r
          <strong>0</strong>\r
          <div><b>days reconciling</b><span>Previously two days every month</span></div>\r
        </article>\r
        <article>\r
          <strong>10<small> min</small></strong>\r
          <div><b>to resume work</b><span>After an office PC failure</span></div>\r
        </article>\r
        <article>\r
          <strong>8<small> weeks</small></strong>\r
          <div><b>to audit readiness</b><span>With privacy workflows operating</span></div>\r
        </article>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="case-trust" aria-label="XcellHost credentials">\r
    <div class="wrap">\r
      <span><b>ISO 27001</b> &amp; <b>20000-1</b> certified</span>\r
      <span>Microsoft <b>Gold Partner</b></span>\r
      <span><b>10,000+</b> customers</span>\r
      <span><b>Since 1999</b></span>\r
      <span><b>99.95% uptime SLA</b></span>\r
      <span><b>24x7</b> NOC + SOC</span>\r
    </div>\r
  </section>\r
\r
  <section class="case-overview" id="stories">\r
    <div class="wrap">\r
      <header class="case-section-head">\r
        <span>Proof, not promises</span>\r
        <h2>What changed for them</h2>\r
        <p>Real operational outcomes from businesses that moved to XcellHost.</p>\r
      </header>\r
\r
      <div class="case-filter-row">\r
        <div class="case-filter-intro"><span>Explore by category</span><p>Open a main category to choose a more specific customer segment.</p></div>\r
        <div class="case-search">\r
          <label for="case-search">Search case studies</label>\r
          <div class="case-search-field">\r
            <input\r
              id="case-search"\r
              type="search"\r
              placeholder="Search by outcome or service"\r
              [value]="searchQuery()"\r
              (input)="searchStudies($event)"\r
            />\r
            <span aria-hidden="true">\u2315</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div class="case-library-layout">\r
        <aside class="case-category-card" aria-label="Case study categories">\r
          <span class="case-category-label">Browse customer stories</span>\r
          <button type="button" class="case-category-all" [class.active]="!selectedMain()"\r
            [attr.aria-pressed]="!selectedMain()" (click)="selectAllCategories()">\r
            <span>All case studies</span><b>{{ studies().length }}</b>\r
          </button>\r
          @for (branch of categoryTree(); track branch.name) {\r
            <div class="case-category-branch">\r
              <button type="button" class="case-category-main"\r
                [class.active]="selectedMain() === branch.name && !selectedSub()"\r
                [class.has-selection]="selectedMain() === branch.name"\r
                [attr.aria-expanded]="expandedMain() === branch.name"\r
                [attr.aria-controls]="categoryPanelId(branch.name)"\r
                (click)="selectMainCategory(branch.name)">\r
                <span>{{ branch.name }}</span><b>{{ branch.count }}</b><i aria-hidden="true">&#8964;</i>\r
              </button>\r
              @if (expandedMain() === branch.name) {\r
                <div class="case-subcategories" [id]="categoryPanelId(branch.name)">\r
                  @for (child of branch.children; track child.name) {\r
                    <button type="button" [class.active]="selectedSub() === child.name"\r
                      [attr.aria-pressed]="selectedSub() === child.name"\r
                      (click)="selectSubCategory(branch.name, child.name)">\r
                      <span>{{ child.name }}</span><b>{{ child.count }}</b>\r
                    </button>\r
                  }\r
                </div>\r
              }\r
            </div>\r
          }\r
        </aside>\r
\r
        <div class="case-library-results">\r
          <div class="case-results-head">\r
            <div><span>Showing</span><h3>{{ selectedSub() || selectedMain() || 'All case studies' }}</h3></div>\r
            <p role="status">{{ visibleStudies().length }} stor{{ visibleStudies().length === 1 ? 'y' : 'ies' }}</p>\r
          </div>\r
          <div class="case-overview-grid">\r
        @for (study of visibleStudies(); track study.documentId || study.id) {\r
          <a class="outcome-card" [routerLink]="['/case-studies', study.id]">\r
            <div class="outcome-visual" [class]="'outcome-visual visual-' + study.id">\r
              @if (study.coverImageUrl) {\r
                <img [src]="study.coverImageUrl" [alt]="study.coverImageAlt || study.headline || study.metricLabel" loading="lazy" decoding="async" />\r
              } @else if (study.id === 'tally-cloud') {\r
                <svg viewBox="0 0 360 190"><path d="M35 151h290M69 151V79h72v72M87 79V55h37v24M165 151V40h128v111M190 68h26m28 0h25m-79 29h26m28 0h25m-79 29h26m28 0h25"/><circle cx="266" cy="29" r="12"/></svg>\r
              } @else if (study.id === 'ca-continuity') {\r
                <svg viewBox="0 0 360 190"><rect x="55" y="38" width="250" height="114" rx="5"/><path d="M150 152v21m60-21v21m-91 0h122M82 65h196v61H82z"/><path class="accent" d="M145 96l23 22 49-51"/></svg>\r
              } @else {\r
                <svg viewBox="0 0 360 190"><path d="M180 28l92 34v47c0 42-35 65-92 78-57-13-92-36-92-78V62z"/><path class="accent" d="M142 104l25 25 53-55"/></svg>\r
              }\r
            </div>\r
            <div class="outcome-body">\r
              <div class="outcome-services">\r
                @for (service of study.services; track service) {\r
                  <span>{{ service }}</span>\r
                }\r
              </div>\r
              <div class="outcome-tag">{{ study.industry }} <i></i> {{ study.profile }}</div>\r
              <strong>{{ study.metric }}</strong>\r
              <h3>{{ study.metricLabel }}</h3>\r
              <p>{{ study.summary }}</p>\r
              <b class="outcome-link">Read the outcome <span aria-hidden="true">\u2192</span></b>\r
            </div>\r
          </a>\r
        } @empty {\r
          <div class="case-empty">\r
            <h3>No matching case studies</h3>\r
            <p>Try another industry, outcome or service.</p>\r
          </div>\r
        }\r
          </div>\r
        </div>\r
      </div>\r
      <p class="case-privacy-note">\r
        Customer identities are anonymised to protect operational and compliance information.\r
      </p>\r
    </div>\r
  </section>\r
\r
  <section class="case-detail-section">\r
    <div class="wrap">\r
      @for (study of studies(); track study.documentId || study.id; let index = $index) {\r
        <article class="case-detail" [class.case-detail-reverse]="index % 2 === 1" [id]="study.id">\r
          <div class="detail-metric">\r
            <span>{{ study.industry }} / {{ study.profile }}</span>\r
            <strong>{{ study.metric }}</strong>\r
            <p>{{ study.metricLabel }}</p>\r
            <div class="detail-number">0{{ index + 1 }}</div>\r
          </div>\r
          <div class="detail-story">\r
            <span class="detail-label">The challenge</span>\r
            <h2>{{ study.metricLabel }}</h2>\r
            <p>{{ study.challenge }}</p>\r
            <div class="detail-solution">\r
              <span class="detail-label">What XcellHost changed</span>\r
              <p>{{ study.solution }}</p>\r
            </div>\r
            <div class="detail-impact">\r
              <span class="detail-label">Business impact</span>\r
              <ul>\r
                @for (item of study.impact; track item) {\r
                  <li><i aria-hidden="true">&#10003;</i>{{ item }}</li>\r
                }\r
              </ul>\r
            </div>\r
          </div>\r
        </article>\r
      }\r
    </div>\r
  </section>\r
\r
  <section class="case-guide" aria-labelledby="case-guide-title">\r
    <div class="wrap">\r
      <header class="case-guide-head">\r
        <span>Understanding the stories</span>\r
        <h2 id="case-guide-title">Questions about our case studies?</h2>\r
        <p>\r
          Each story connects a business constraint to the practical change that removed it and\r
          the outcome the customer could measure afterwards.\r
        </p>\r
      </header>\r
      <div class="case-guide-grid">\r
        <article>\r
          <span>01</span>\r
          <div>\r
            <h3>How are our case studies created?</h3>\r
            <p>\r
              We begin with the customer\u2019s operating challenge, document the technology and\r
              transition work, and then validate the business result. Sensitive identities and\r
              operational details remain anonymised where required.\r
            </p>\r
          </div>\r
        </article>\r
        <article>\r
          <span>02</span>\r
          <div>\r
            <h3>Case study or use case?</h3>\r
            <p>\r
              A use case explains what a solution can do in a common scenario. A case study shows\r
              what changed in a real engagement, including the starting problem, the implemented\r
              approach and the resulting impact.\r
            </p>\r
          </div>\r
        </article>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="case-method">\r
    <div class="wrap">\r
      <header class="case-section-head case-section-head-light">\r
        <span>How we work</span>\r
        <h2>From bottleneck to measurable outcome</h2>\r
        <p>Technology matters, but a clear operating plan is what makes the improvement stick.</p>\r
      </header>\r
      <div class="method-grid">\r
        <article><b>01</b><h3>Discover</h3><p>Map the workflow, risk and real cost of the current constraint.</p></article>\r
        <article><b>02</b><h3>Design</h3><p>Build the right-sized cloud, security or compliance solution.</p></article>\r
        <article><b>03</b><h3>Transition</h3><p>Migrate carefully, validate access and keep disruption controlled.</p></article>\r
        <article><b>04</b><h3>Improve</h3><p>Monitor performance, protect continuity and optimise over time.</p></article>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="case-cta">\r
    <div class="wrap case-cta-inner">\r
      <div>\r
        <span>Have a similar challenge?</span>\r
        <h2>Bring us the bottleneck.</h2>\r
        <p>Tell us what is slowing the business down. We will help define a practical next step.</p>\r
      </div>\r
      <button class="case-btn case-btn-primary" type="button" (click)="openCallback()">\r
        Request a callback\r
      </button>\r
    </div>\r
  </section>\r
</main>\r
`, styles: ['/* src/app/pages/case-studies.page.css */\n:host {\n  --case-blue:#0050d7;\n  --case-navy:#071f49;\n  --case-slate:#526681;\n  --case-line:#d7e4ec;\n  --case-ice:#f0fbfd;\n  display: contents;\n}\n.case-page {\n  color: var(--case-navy);\n  background: #fff;\n}\n.case-hero {\n  padding: 50px 0 28px;\n  background: #fff;\n}\n.case-hero h1 {\n  margin: 0;\n  padding-bottom: 9px;\n  border-bottom: 2px solid #c5edf0;\n  color: #061b44;\n  font: 700 17px/1.3 var(--disp);\n  letter-spacing: -.01em;\n}\n.case-crumb {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-top: 9px;\n  color: #65728d;\n  font-size: 12px;\n  line-height: 1.3;\n}\n.case-crumb a {\n  color: inherit;\n  text-decoration: none;\n}\n.case-crumb a:first-child {\n  color: #0a5dc2;\n  font-size: 16px;\n}\n.case-crumb a:hover {\n  color: var(--case-blue);\n}\n.case-crumb i {\n  width: 1px;\n  height: 16px;\n  background: #aeb8c8;\n}\n.case-intro {\n  padding: 24px 0 30px 0;\n  background: #fff;\n}\n.case-intro-grid {\n  display: grid;\n  grid-template-columns: minmax(0, 1.18fr) minmax(345px, .82fr);\n  align-items: center;\n  gap: 78px;\n}\n.case-kicker,\n.case-section-head > span,\n.case-cta-inner > div > span {\n  display: block;\n  color: var(--case-blue);\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.case-hero-copy h2 {\n  max-width: 740px;\n  margin: 13px 0 17px;\n  color: #071f49;\n  font: 500 clamp(34px, 4.2vw, 54px)/1.08 var(--disp);\n  letter-spacing: -.035em;\n}\n.case-hero-copy h2 em {\n  color: var(--case-blue);\n  font-style: normal;\n}\n.case-hero-copy > p {\n  max-width: 690px;\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 16px;\n  line-height: 1.7;\n}\n.case-hero-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 29px;\n}\n.case-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 46px;\n  padding: 0 22px;\n  border: 2px solid transparent;\n  border-radius: 2px;\n  font: 700 13px var(--disp);\n  text-decoration: none;\n  cursor: pointer;\n  transition:\n    background .2s,\n    color .2s,\n    transform .2s;\n}\n.case-btn:hover {\n  transform: translateY(-2px);\n}\n.case-btn-primary {\n  background: var(--case-blue);\n  color: #fff;\n}\n.case-btn-primary:hover {\n  background: #003fba;\n}\n.case-btn-ghost {\n  border-color: var(--case-blue);\n  background: #fff;\n  color: var(--case-blue);\n}\n.case-scorecard {\n  border: 1px solid #cce3ea;\n  background: #f2fbfc;\n}\n.scorecard-head {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 17px 20px;\n  border-bottom: 1px solid #cce3ea;\n  color: #62718a;\n  font-size: 10px;\n  letter-spacing: .08em;\n  text-transform: uppercase;\n}\n.scorecard-head b {\n  color: #071f49;\n}\n.case-scorecard article {\n  display: grid;\n  grid-template-columns: 108px 1fr;\n  align-items: center;\n  gap: 17px;\n  padding: 18px 20px;\n  border-bottom: 1px solid #d6e8ed;\n}\n.case-scorecard article:last-child {\n  border-bottom: 0;\n}\n.case-scorecard article > strong {\n  color: var(--case-blue);\n  font: 600 31px/1 var(--disp);\n  letter-spacing: -.03em;\n}\n.case-scorecard small {\n  font-size: 12px;\n}\n.case-scorecard article div b {\n  display: block;\n  margin-bottom: 4px;\n  color: #071f49;\n  font-size: 13px;\n}\n.case-scorecard article div span {\n  color: #677992;\n  font-size: 11px;\n  line-height: 1.4;\n}\n.case-trust {\n  border-block: 1px solid #dbe7ec;\n  background: #f5fbfc;\n}\n.case-trust .wrap {\n  display: flex;\n  justify-content: space-between;\n  gap: 18px;\n  padding-top: 17px;\n  padding-bottom: 17px;\n  color: #526681;\n  font-size: 12px;\n}\n.case-trust b {\n  color: var(--case-navy);\n}\n.case-overview {\n  padding: 36px 0 46px 0;\n  scroll-margin-top: 90px;\n}\n.case-section-head {\n  max-width: 760px;\n  margin-bottom: 42px;\n}\n.case-section-head h2 {\n  margin: 12px 0 10px;\n  color: #071f49;\n  font: 500 clamp(30px, 3.7vw, 43px)/1.16 var(--disp);\n  letter-spacing: -.025em;\n}\n.case-section-head p {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 15px;\n  line-height: 1.6;\n}\n.case-filter-row {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 410px));\n  gap: 18px;\n  margin-bottom: 34px;\n}\n.case-filter label,\n.case-search label {\n  display: block;\n  margin-bottom: 8px;\n  color: #465b79;\n  font: 600 11px/1.3 var(--disp);\n}\n.case-select,\n.case-search-field {\n  position: relative;\n}\n.case-select::after {\n  content: "\\2304";\n  position: absolute;\n  right: 17px;\n  top: 50%;\n  color: #0065d1;\n  font-size: 22px;\n  line-height: 1;\n  pointer-events: none;\n  transform: translateY(-58%);\n}\n.case-select select,\n.case-search input {\n  width: 100%;\n  height: 45px;\n  border: 1px solid #83cdd8;\n  border-radius: 2px;\n  background: #fff;\n  color: #344761;\n  font: 400 13px var(--body);\n}\n.case-select select {\n  padding: 0 45px 0 14px;\n  appearance: none;\n  cursor: pointer;\n}\n.case-search input {\n  padding: 0 45px 0 14px;\n}\n.case-search input::placeholder {\n  color: #8592a5;\n}\n.case-search-field span {\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  color: #0065d1;\n  font-size: 23px;\n  line-height: 1;\n  pointer-events: none;\n  transform: translateY(-52%);\n}\n.case-select select:focus,\n.case-search input:focus {\n  outline: 2px solid rgba(0, 80, 215, .18);\n  outline-offset: 2px;\n}\n.case-related {\n  margin: 0 0 32px;\n  text-align: center;\n  color: #081f49;\n  font: 500 25px/1.25 var(--disp);\n}\n.case-overview-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.outcome-card {\n  display: flex;\n  min-width: 0;\n  flex-direction: column;\n  color: inherit;\n  text-decoration: none;\n  transition: transform .22s, box-shadow .22s;\n}\n.outcome-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 14px 32px rgba(6, 38, 81, .12);\n}\n.outcome-visual {\n  height: 220px;\n  overflow: hidden;\n  background: #d9efff;\n}\n.outcome-visual img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform .3s ease;\n}\n.outcome-card:hover .outcome-visual img {\n  transform: scale(1.035);\n}\n.outcome-visual svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  fill: none;\n  stroke: #fff;\n  stroke-width: 3;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n  opacity: .92;\n}\n.outcome-visual .accent {\n  stroke: #ff6d43;\n  stroke-width: 6;\n}\n.visual-tally-cloud {\n  background:\n    linear-gradient(\n      145deg,\n      #0e59b9,\n      #168cd4);\n}\n.visual-ca-continuity {\n  background:\n    linear-gradient(\n      145deg,\n      #16a2ac,\n      #055f91);\n}\n.visual-dpdpa-readiness {\n  background:\n    linear-gradient(\n      145deg,\n      #263c85,\n      #6b4d9b);\n}\n.outcome-body {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  min-height: 325px;\n  padding: 23px 25px 25px;\n  border: 1px solid #cee5e9;\n  border-top: 0;\n  background: var(--case-ice);\n}\n.outcome-services {\n  display: flex;\n  min-height: 24px;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-bottom: 16px;\n}\n.outcome-services span {\n  padding: 5px 9px;\n  background: #fff;\n  color: #4a5e7b;\n  font: 500 10px var(--body);\n}\n.outcome-tag {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n  color: #526681;\n  font: 600 10px var(--mono);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.outcome-tag i {\n  width: 3px;\n  height: 3px;\n  border-radius: 50%;\n  background: #ff6d43;\n}\n.outcome-card strong {\n  color: var(--case-blue);\n  font: 600 28px/1.1 var(--disp);\n  letter-spacing: -.02em;\n}\n.outcome-card h3 {\n  margin: 9px 0 10px;\n  color: #071f49;\n  font: 600 17px/1.35 var(--disp);\n}\n.outcome-card p {\n  margin: 0 0 18px;\n  color: var(--case-slate);\n  font-size: 13px;\n  line-height: 1.65;\n}\n.outcome-link {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-top: auto;\n  color: var(--case-blue);\n  font-size: 12px;\n}\n.outcome-link span {\n  font-size: 18px;\n  transition: transform .2s;\n}\n.outcome-card:hover .outcome-link span {\n  transform: translateX(4px);\n}\n.case-empty {\n  grid-column: 1/-1;\n  padding: 48px 24px;\n  border: 1px solid #cee5e9;\n  background: #f2fbfc;\n  text-align: center;\n}\n.case-empty h3 {\n  margin: 0 0 7px;\n  font: 600 21px/1.3 var(--disp);\n}\n.case-empty p {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 13px;\n}\n.case-privacy-note {\n  margin: 18px 0 0;\n  color: #8290a3;\n  font-size: 11px;\n}\n.case-detail-section {\n  padding: 20px 0 48px 0;\n  background:\n    linear-gradient(\n      180deg,\n      #fff,\n      #f4fbfc);\n}\n.case-detail {\n  display: grid;\n  grid-template-columns: minmax(290px, .72fr) minmax(0, 1.28fr);\n  gap: 70px;\n  align-items: stretch;\n  padding: 62px 0;\n  scroll-margin-top: 92px;\n  border-top: 1px solid var(--case-line);\n}\n.case-detail:target {\n  animation: case-outcome-arrive 1.1s ease-out;\n}\n@keyframes case-outcome-arrive {\n  0% {\n    background: rgba(0, 80, 215, .08);\n  }\n  100% {\n    background: transparent;\n  }\n}\n.case-detail-reverse .detail-metric {\n  order: 2;\n}\n.case-detail-reverse .detail-story {\n  order: 1;\n}\n.detail-metric {\n  position: relative;\n  overflow: hidden;\n  min-height: 320px;\n  padding: 34px;\n  background: #081f49;\n  color: #fff;\n}\n.detail-metric > span {\n  color: #a7c7ef;\n  font: 700 10px var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.detail-metric > strong {\n  display: block;\n  margin: 50px 0 8px;\n  color: #6eb4ff;\n  font: 600 clamp(39px, 4.7vw, 60px)/1 var(--disp);\n  letter-spacing: -.045em;\n}\n.detail-metric > p {\n  max-width: 290px;\n  margin: 0;\n  color: #d8e5f4;\n  font: 600 16px/1.4 var(--disp);\n}\n.detail-number {\n  position: absolute;\n  right: 18px;\n  bottom: -30px;\n  color: rgba(255, 255, 255, .06);\n  font: 900 150px/1 var(--disp);\n}\n.detail-story {\n  padding: 15px 0;\n}\n.detail-label {\n  display: block;\n  margin-bottom: 10px;\n  color: var(--case-blue);\n  font: 700 10px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n}\n.detail-story h2 {\n  margin: 0 0 14px;\n  font: 600 clamp(27px, 3.2vw, 38px)/1.15 var(--disp);\n  letter-spacing: -.02em;\n}\n.detail-story > p,\n.detail-solution p {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 14.5px;\n  line-height: 1.75;\n}\n.detail-solution {\n  margin: 27px 0;\n  padding: 22px 24px;\n  border-left: 3px solid #ff6d43;\n  background: #fff;\n  box-shadow: 0 7px 24px rgba(7, 42, 85, .06);\n}\n.detail-impact ul {\n  display: grid;\n  gap: 9px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.detail-impact li {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  color: #314966;\n  font-size: 13.5px;\n  line-height: 1.5;\n}\n.detail-impact i {\n  display: grid;\n  place-items: center;\n  flex: 0 0 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: #e5f1ff;\n  color: var(--case-blue);\n  font-size: 11px;\n  font-style: normal;\n  font-weight: 800;\n}\n.case-guide {\n  padding: 38px 0 41px 0;\n  border-top: 1px solid #d7e4ec;\n  background: #fff;\n}\n.case-guide-head {\n  max-width: 800px;\n  margin-bottom: 38px;\n}\n.case-guide-head > span {\n  display: block;\n  color: var(--case-blue);\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .15em;\n  text-transform: uppercase;\n}\n.case-guide-head h2 {\n  margin: 12px 0 12px;\n  color: var(--case-navy);\n  font: 500 clamp(30px, 3.7vw, 43px)/1.16 var(--disp);\n  letter-spacing: -.025em;\n}\n.case-guide-head p {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 15px;\n  line-height: 1.7;\n}\n.case-guide-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1px;\n  background: #cce3ea;\n}\n.case-guide-grid article {\n  display: grid;\n  grid-template-columns: 48px minmax(0, 1fr);\n  gap: 20px;\n  padding: 32px;\n  background: #f2fbfc;\n}\n.case-guide-grid article > span {\n  color: var(--case-blue);\n  font: 700 11px/1 var(--mono);\n}\n.case-guide-grid h3 {\n  margin: 0 0 12px;\n  color: var(--case-navy);\n  font: 600 21px/1.3 var(--disp);\n}\n.case-guide-grid p {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 14px;\n  line-height: 1.75;\n}\n.case-method {\n  padding: 44px 0 44px 0;\n  background: #081f49;\n  color: #fff;\n}\n.case-section-head-light h2 {\n  color: #fff;\n}\n.case-section-head-light p {\n  color: #bdcee4;\n}\n.method-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1px;\n  background: rgba(255, 255, 255, .18);\n}\n.method-grid article {\n  min-height: 190px;\n  padding: 25px;\n  background: #0a2b5c;\n}\n.method-grid b {\n  color: #70b6ff;\n  font: 700 11px var(--mono);\n}\n.method-grid h3 {\n  margin: 37px 0 8px;\n  color: #fff;\n  font: 600 19px var(--disp);\n}\n.method-grid p {\n  margin: 0;\n  color: #bdcee4;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.case-cta {\n  padding: 36px 0 36px 0;\n  background: #fff;\n}\n.case-cta-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 40px;\n  padding: 42px 46px;\n  border: 1px solid #cce3ea;\n  background: #f2fbfc;\n}\n.case-cta-inner h2 {\n  margin: 10px 0 7px;\n  font: 500 clamp(30px, 4vw, 43px)/1.1 var(--disp);\n}\n.case-cta-inner p {\n  margin: 0;\n  color: var(--case-slate);\n  font-size: 14px;\n}\n.case-cta-inner .case-btn {\n  flex: 0 0 auto;\n}\n@media (max-width: 980px) {\n  .case-intro-grid {\n    grid-template-columns: 1fr;\n    gap: 42px;\n  }\n  .case-scorecard {\n    max-width: 650px;\n  }\n  .case-overview-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .method-grid {\n    grid-template-columns: 1fr 1fr;\n  }\n  .case-trust .wrap {\n    justify-content: flex-start;\n    flex-wrap: wrap;\n  }\n  .case-detail {\n    gap: 38px;\n  }\n}\n@media (max-width: 680px) {\n  .case-hero {\n    padding: 32px 0 20px;\n  }\n  .case-intro {\n    padding: 17px 0 23px 0;\n  }\n  .case-intro-grid {\n    gap: 30px;\n  }\n  .case-hero-copy h2 {\n    font-size: 38px;\n  }\n  .case-hero-copy > p {\n    font-size: 15px;\n  }\n  .case-hero-actions,\n  .case-hero-actions .case-btn {\n    width: 100%;\n  }\n  .case-scorecard article {\n    grid-template-columns: 94px 1fr;\n  }\n  .case-scorecard article > strong {\n    font-size: 28px;\n  }\n  .case-overview {\n    padding: 27.5px 0 35px 0;\n  }\n  .case-section-head {\n    margin-bottom: 30px;\n  }\n  .case-filter-row {\n    grid-template-columns: 1fr;\n  }\n  .case-overview-grid {\n    grid-template-columns: 1fr;\n  }\n  .outcome-visual {\n    height: 210px;\n  }\n  .outcome-body {\n    min-height: 0;\n  }\n  .case-detail {\n    grid-template-columns: 1fr;\n    gap: 28px;\n    padding: 44px 0;\n  }\n  .case-detail-reverse .detail-metric,\n  .case-detail-reverse .detail-story {\n    order: initial;\n  }\n  .detail-metric {\n    min-height: 260px;\n  }\n  .detail-metric > strong {\n    margin-top: 42px;\n  }\n  .case-guide {\n    padding: 29px 0 29px 0;\n  }\n  .case-guide-grid {\n    grid-template-columns: 1fr;\n  }\n  .case-guide-grid article {\n    grid-template-columns: 36px minmax(0, 1fr);\n    padding: 25px 20px;\n  }\n  .method-grid {\n    grid-template-columns: 1fr;\n  }\n  .case-method {\n    padding: 33px 0 33px 0;\n  }\n  .case-cta {\n    padding: 24px 0 24px 0;\n  }\n  .case-cta-inner {\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 30px 24px;\n  }\n  .case-cta-inner .case-btn {\n    width: 100%;\n  }\n  .case-trust .wrap {\n    font-size: 11px;\n  }\n}\n.case-filter-row {\n  display: flex;\n  grid-template-columns: none;\n  align-items: end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 27px;\n}\n.case-filter-intro span {\n  display: block;\n  color: var(--case-blue);\n  font: 700 10px/1 var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.case-filter-intro p {\n  max-width: 430px;\n  margin: 8px 0 0;\n  color: var(--case-slate);\n  font-size: 12px;\n  line-height: 1.55;\n}\n.case-search {\n  width: min(410px, 100%);\n}\n.case-search input {\n  border-radius: 8px;\n}\n.case-library-layout {\n  display: grid;\n  grid-template-columns: 260px minmax(0, 1fr);\n  align-items: start;\n  gap: 28px;\n}\n.case-category-card {\n  position: sticky;\n  top: 92px;\n  padding: 18px;\n  border: 1px solid #d4e3ec;\n  border-radius: 16px;\n  background: #f6fbfc;\n  box-shadow: 0 15px 34px rgba(7, 42, 85, .07);\n}\n.case-category-label {\n  display: block;\n  margin: 3px 5px 15px;\n  color: #60728a;\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.case-category-all,\n.case-category-main {\n  display: grid;\n  width: 100%;\n  grid-template-columns: minmax(0, 1fr) auto 17px;\n  align-items: center;\n  gap: 9px;\n  padding: 13px 12px;\n  border: 1px solid #d3e3ec;\n  border-radius: 10px;\n  background: #fff;\n  color: #173a61;\n  font: 650 11px/1.35 var(--body);\n  text-align: left;\n  cursor: pointer;\n}\n.case-category-all {\n  grid-template-columns: minmax(0, 1fr) auto;\n  margin-bottom: 8px;\n}\n.case-category-all b,\n.case-category-main b {\n  display: grid;\n  min-width: 27px;\n  height: 27px;\n  place-items: center;\n  padding: 0 6px;\n  border-radius: 999px;\n  background: #edf5ff;\n  color: #0761ce;\n  font: 700 9px/1 var(--mono);\n}\n.case-category-all.active,\n.case-category-main.active {\n  border-color: #075ccc;\n  background:\n    linear-gradient(\n      135deg,\n      #0969de,\n      #0048aa);\n  color: #fff;\n}\n.case-category-all.active b,\n.case-category-main.active b {\n  background: rgba(255, 255, 255, .16);\n  color: #fff;\n}\n.case-category-main.has-selection:not(.active) {\n  border-color: #a9c9ee;\n  background: #edf5ff;\n  color: #0757b6;\n}\n.case-category-main i {\n  font-size: 17px;\n  font-style: normal;\n  text-align: center;\n  transition: transform .2s;\n}\n.case-category-main[aria-expanded=true] i {\n  transform: rotate(180deg);\n}\n.case-category-branch + .case-category-branch {\n  margin-top: 8px;\n}\n.case-subcategories {\n  display: grid;\n  gap: 3px;\n  margin: 2px 8px 4px 20px;\n  padding: 7px 0 3px 10px;\n  border-left: 1px solid #bcd2e5;\n  animation: case-category-open .2s ease-out;\n}\n.case-subcategories button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  min-height: 36px;\n  padding: 7px 9px;\n  border: 0;\n  border-radius: 7px;\n  background: transparent;\n  color: #526a84;\n  font: 600 10px/1.35 var(--body);\n  text-align: left;\n  cursor: pointer;\n}\n.case-subcategories button:hover,\n.case-subcategories button.active {\n  background: #fff;\n  color: #075bc5;\n}\n.case-subcategories button.active {\n  box-shadow: inset 3px 0 #0868d9, 0 5px 14px rgba(7, 62, 124, .07);\n}\n.case-subcategories b {\n  color: #1370d9;\n  font: 700 9px var(--mono);\n}\n.case-library-results {\n  min-width: 0;\n}\n.case-results-head {\n  display: flex;\n  align-items: end;\n  justify-content: space-between;\n  gap: 20px;\n  margin-bottom: 17px;\n}\n.case-results-head span {\n  display: block;\n  margin-bottom: 4px;\n  color: var(--case-blue);\n  font: 700 9px/1 var(--mono);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.case-results-head h3 {\n  margin: 0;\n  color: var(--case-navy);\n  font: 600 24px/1.2 var(--disp);\n}\n.case-results-head p {\n  margin: 0;\n  color: #6d8098;\n  font: 600 11px var(--mono);\n}\n.case-library-results .case-overview-grid {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n@keyframes case-category-open {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@media (max-width: 980px) {\n  .case-library-layout {\n    grid-template-columns: 1fr;\n  }\n  .case-category-card {\n    position: static;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 8px;\n  }\n  .case-category-label {\n    grid-column: 1/-1;\n  }\n  .case-category-all {\n    margin: 0;\n  }\n  .case-category-branch + .case-category-branch {\n    margin-top: 0;\n  }\n}\n@media (max-width: 680px) {\n  .case-filter-row {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .case-search {\n    width: 100%;\n  }\n  .case-category-card {\n    grid-template-columns: 1fr;\n  }\n  .case-library-results .case-overview-grid {\n    grid-template-columns: 1fr;\n  }\n  .case-results-head {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=case-studies.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CaseStudiesPage, { className: "CaseStudiesPage", filePath: "src/app/pages/case-studies.page.ts", lineNumber: 27 });
})();
export {
  CaseStudiesPage
};
//# sourceMappingURL=chunk-JQF4AON6.js.map
