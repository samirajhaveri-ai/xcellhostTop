import {
  PRODUCT_COMPARISONS
} from "./chunk-JBVG3VGG.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  CATEGORY_COMPARE_WHY
} from "./chunk-3MMBSDR4.js";
import "./chunk-LN7P5EZP.js";
import {
  CATEGORY_FEATURES,
  CatalogService,
  slugify
} from "./chunk-QOKK55KD.js";
import "./chunk-3YIWEYUK.js";
import "./chunk-WKMOKKQB.js";
import "./chunk-TKO65HOC.js";
import {
  CallbackTopicService
} from "./chunk-6N6WYEKF.js";
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
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/product-comparison-detail.page.ts
var _c0 = (a0) => ["/", a0];
var _c1 = (a0) => ({ s: a0 });
var _forTrack0 = ($index, $item) => $item.feature;
function ProductComparisonDetailPage_For_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "i", 11);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r1);
  }
}
function ProductComparisonDetailPage_For_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "i", 11);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r2);
  }
}
function ProductComparisonDetailPage_For_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "i", 11);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3);
  }
}
function ProductComparisonDetailPage_For_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "i", 11);
    \u0275\u0275text(2, "!");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4);
  }
}
function ProductComparisonDetailPage_For_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "th", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.feature);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.left);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r5.right);
  }
}
var ProductComparisonDetailPage = class _ProductComparisonDetailPage {
  catalog = inject(CatalogService);
  route = inject(ActivatedRoute);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  comparisonSlug = this.route.snapshot.paramMap.get("comparison") ?? "";
  definition = PRODUCT_COMPARISONS.find((item) => `${slugify(item.left)}-vs-${slugify(item.right)}` === this.comparisonSlug) ?? PRODUCT_COMPARISONS[0];
  left = this.resolveProduct(this.definition.left, this.definition.leftLabel);
  right = this.resolveProduct(this.definition.right, this.definition.rightLabel);
  title = `${this.left.displayName} vs ${this.right.displayName}`;
  rows = [
    { feature: "Primary purpose", left: this.left.entry.desc, right: this.right.entry.desc },
    { feature: "Service family", left: this.left.entry.group, right: this.right.entry.group },
    { feature: "Starting price", left: this.left.price, right: this.right.price },
    ...Array.from({ length: Math.max(this.left.features.length, this.right.features.length) }, (_, index) => ({
      feature: `Key capability ${index + 1}`,
      left: this.left.features[index] ?? "Scoped to requirement",
      right: this.right.features[index] ?? "Scoped to requirement"
    })),
    { feature: "Support model", left: "24\xD77 support in English and Hindi", right: "24\xD77 support in English and Hindi" },
    { feature: "Commercial model", left: "INR billing with GST invoice", right: "INR billing with GST invoice" }
  ];
  constructor() {
    inject(SeoService).set(`${this.title} | Product Comparison | XcellHost`, `${this.definition.summary} Compare capabilities, pricing, strengths and planning considerations.`, `/compare-products/${this.comparisonSlug}/`);
  }
  requestConsultation() {
    this.topics.ask(`Product comparison: ${this.title}`);
    this.overlay.open("callback");
  }
  resolveProduct(name, displayName) {
    const entry = this.catalog.findInDirectory(name) ?? this.catalog.entryBySlug(slugify(name)) ?? {
      name,
      desc: "Solution details are confirmed during consultation.",
      cat: "Solutions",
      group: "Solutions"
    };
    const rich = this.catalog.rich(entry.name);
    const features = (rich?.f ?? CATEGORY_FEATURES[entry.cat] ?? CATEGORY_FEATURES["Cloud"]).slice(0, 4).map((feature) => feature[0]);
    const categoryStrengths = CATEGORY_COMPARE_WHY[entry.cat] ?? CATEGORY_COMPARE_WHY["Cloud"];
    return {
      entry,
      displayName: displayName ?? entry.name,
      slug: slugify(entry.name),
      price: rich?.price || this.priceFrom(entry.desc),
      features,
      strengths: features.length ? features.slice(0, 4) : categoryStrengths.slice(0, 4),
      considerations: [
        `Confirm ${entry.group.toLowerCase()} scope, integrations and migration requirements.`,
        "Final sizing and commercial terms follow a solution assessment."
      ]
    };
  }
  priceFrom(description) {
    return /from\s*(₹[\d,]+[^\s—]*)/i.exec(description)?.[1] ?? "Custom quote";
  }
  static \u0275fac = function ProductComparisonDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProductComparisonDetailPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProductComparisonDetailPage, selectors: [["xh-product-comparison-detail-page"]], decls: 113, vars: 25, consts: [[1, "comparison-detail"], [1, "detail-bar"], [1, "detail-wrap", "detail-bar-inner"], ["routerLink", "/compare-products", "aria-label", "Back to all product comparisons"], [1, "detail-wrap", "detail-content"], [1, "detail-intro"], ["aria-label", "Product summaries", 1, "product-summary-grid"], [1, "product-summary", "product-summary-featured"], [1, "product-summary-body"], [1, "summary-field"], [1, "summary-list", "strengths"], ["aria-hidden", "true"], [1, "summary-list", "considerations"], [3, "routerLink"], [1, "product-summary"], ["aria-labelledby", "feature-comparison-title", 1, "feature-card"], ["id", "feature-comparison-title"], ["tabindex", "0", "aria-label", "Scrollable product feature comparison", 1, "feature-table-scroll"], ["scope", "col"], ["aria-labelledby", "expert-insight-title", 1, "expert-insight"], ["viewBox", "0 0 24 24"], ["d", "M12 3v18M7 6h10M5 6l-3 6h6L5 6Zm14 0-3 6h6l-3-6ZM2 12c.4 2 1.4 3 3 3s2.6-1 3-3m8 0c.4 2 1.4 3 3 3s2.6-1 3-3M8 21h8"], ["id", "expert-insight-title"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "detail-actions"], ["routerLink", "/compare-products", 1, "btn", "btn-ghost"], ["routerLink", "/compare", 1, "btn", "btn-ghost", 3, "queryParams"], ["scope", "row"]], template: function ProductComparisonDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "header", 1)(2, "div", 2)(3, "div")(4, "span");
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 3);
      \u0275\u0275text(9, "\xD7");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 4)(11, "p", 5);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "section", 6)(14, "article", 7)(15, "header")(16, "h2");
      \u0275\u0275text(17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 8)(21, "div", 9)(22, "span");
      \u0275\u0275text(23, "Best for");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "div", 9)(27, "span");
      \u0275\u0275text(28, "Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "strong");
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 10)(32, "h3")(33, "i", 11);
      \u0275\u0275text(34, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " Strengths");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "ul");
      \u0275\u0275repeaterCreate(37, ProductComparisonDetailPage_For_38_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 12)(40, "h3");
      \u0275\u0275text(41, "Planning considerations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "ul");
      \u0275\u0275repeaterCreate(43, ProductComparisonDetailPage_For_44_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "a", 13);
      \u0275\u0275text(46);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(47, "article", 14)(48, "header")(49, "h2");
      \u0275\u0275text(50);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(51, "span");
      \u0275\u0275text(52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 8)(54, "div", 9)(55, "span");
      \u0275\u0275text(56, "Best for");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p");
      \u0275\u0275text(58);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 9)(60, "span");
      \u0275\u0275text(61, "Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "strong");
      \u0275\u0275text(63);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 10)(65, "h3")(66, "i", 11);
      \u0275\u0275text(67, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(68, " Strengths");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "ul");
      \u0275\u0275repeaterCreate(70, ProductComparisonDetailPage_For_71_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 12)(73, "h3");
      \u0275\u0275text(74, "Planning considerations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "ul");
      \u0275\u0275repeaterCreate(76, ProductComparisonDetailPage_For_77_Template, 4, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(78, "a", 13);
      \u0275\u0275text(79);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(80, "section", 15)(81, "header")(82, "h2", 16);
      \u0275\u0275text(83, "Feature Comparison");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(84, "div", 17)(85, "table")(86, "thead")(87, "tr")(88, "th", 18);
      \u0275\u0275text(89, "Feature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "th", 18);
      \u0275\u0275text(91);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "th", 18);
      \u0275\u0275text(93);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(94, "tbody");
      \u0275\u0275repeaterCreate(95, ProductComparisonDetailPage_For_96_Template, 7, 3, "tr", null, _forTrack0);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(97, "section", 19)(98, "span", 11);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(99, "svg", 20);
      \u0275\u0275element(100, "path", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(101, "div")(102, "h2", 22);
      \u0275\u0275text(103, "XcellHost Expert Insight");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "p");
      \u0275\u0275text(105);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "button", 23);
      \u0275\u0275listener("click", function ProductComparisonDetailPage_Template_button_click_106_listener() {
        return ctx.requestConsultation();
      });
      \u0275\u0275text(107, "Get expert consultation \u2192");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(108, "div", 24)(109, "a", 25);
      \u0275\u0275text(110, "\u2190 Back to all comparisons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "a", 26);
      \u0275\u0275text(112, "Open custom comparison table");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.definition.category);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.title);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.definition.summary);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.left.displayName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.left.entry.group);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.left.entry.desc);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.left.price);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.left.strengths);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.left.considerations);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(19, _c0, ctx.left.slug));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("View ", ctx.left.displayName, " details \u2192");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.right.displayName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.right.entry.group);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.right.entry.desc);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.right.price);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.right.strengths);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.right.considerations);
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(21, _c0, ctx.right.slug));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("View ", ctx.right.displayName, " details \u2192");
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.left.displayName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.right.displayName);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.rows);
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate1("", ctx.definition.summary, " The deciding factors are usually workload fit, migration effort, integrations, support ownership and the total operating cost\u2014not the longest feature list.");
      \u0275\u0275advance(6);
      \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(23, _c1, ctx.left.slug + "," + ctx.right.slug));
    }
  }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  color: #102338;\n}\n.comparison-detail[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background: #f7f9fb;\n}\n.detail-wrap[_ngcontent-%COMP%] {\n  width: min(1180px, calc(100% - 48px));\n  margin: 0 auto;\n}\n.detail-bar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  border-bottom: 1px solid #dfe6ec;\n  background: rgba(255, 255, 255, .95);\n  box-shadow: 0 2px 10px rgba(15, 35, 55, .04);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.detail-bar-inner[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 94px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 15px 0;\n}\n.detail-bar-inner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 5px 11px;\n  border: 1px solid #cbd8e2;\n  border-radius: 999px;\n  color: #173347;\n  font: 700 9px/1.2 var(--disp, sans-serif);\n}\n.detail-bar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  color: #07172b;\n  font: 700 clamp(21px, 2.6vw, 30px)/1.18 var(--disp, sans-serif);\n  letter-spacing: -.025em;\n}\n.detail-bar-inner[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: grid;\n  width: 40px;\n  height: 40px;\n  flex: 0 0 40px;\n  place-items: center;\n  border-radius: 8px;\n  color: #53687b;\n  font-size: 26px;\n  line-height: 1;\n  text-decoration: none;\n}\n.detail-bar-inner[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%]:hover {\n  background: #eef2f5;\n  color: #07172b;\n}\n.detail-content[_ngcontent-%COMP%] {\n  padding: 34px 0 72px;\n}\n.detail-intro[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto 28px;\n  color: #63788b;\n  font-size: 15px;\n  line-height: 1.7;\n  text-align: center;\n}\n.product-summary-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.product-summary[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #dce4eb;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(15, 35, 55, .035);\n}\n.product-summary-featured[_ngcontent-%COMP%] {\n  border-color: #bcd8f5;\n}\n.product-summary[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  display: flex;\n  min-height: 66px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 17px 22px;\n  background: #f5f7f9;\n}\n.product-summary-featured[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  background: #edf6ff;\n}\n.product-summary[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0a2034;\n  font-size: 18px;\n  line-height: 1.3;\n}\n.product-summary[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #74899a;\n  font-size: 10px;\n  text-align: right;\n}\n.product-summary-body[_ngcontent-%COMP%] {\n  padding: 22px;\n}\n.summary-field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.summary-field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  color: #75899a;\n  font-size: 11px;\n  font-weight: 700;\n}\n.summary-field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #243a4c;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.summary-field[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0b67cb;\n  font-size: 14px;\n}\n.summary-list[_ngcontent-%COMP%] {\n  margin-top: 18px;\n}\n.summary-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin: 0 0 8px;\n  font-size: 12px;\n}\n.summary-list[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 7px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.summary-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  color: #304659;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.summary-list[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  width: 16px;\n  height: 16px;\n  flex: 0 0 16px;\n  place-items: center;\n  border-radius: 50%;\n  font: 800 9px/1 sans-serif;\n}\n.strengths[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #188c52;\n}\n.strengths[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #e2f7eb;\n  color: #159051;\n}\n.considerations[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #ba7200;\n}\n.considerations[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  background: #fff0d8;\n  color: #bd7600;\n}\n.product-summary-body[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 20px;\n  color: #0d65c9;\n  font-size: 11px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.feature-card[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin-bottom: 28px;\n  border: 1px solid #dce4eb;\n  border-radius: 10px;\n  background: #fff;\n}\n.feature-card[_ngcontent-%COMP%]    > header[_ngcontent-%COMP%] {\n  padding: 18px 22px;\n  border-bottom: 1px solid #e3e9ee;\n}\n.feature-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0b2033;\n  font-size: 18px;\n}\n.feature-table-scroll[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.feature-card[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 760px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.feature-card[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], \n.feature-card[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 14px 17px;\n  border-bottom: 1px solid #e8edf1;\n  color: #304659;\n  font-size: 12px;\n  line-height: 1.5;\n  text-align: left;\n  vertical-align: top;\n}\n.feature-card[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child    > *[_ngcontent-%COMP%] {\n  border-bottom: 0;\n}\n.feature-card[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #1b3347;\n  font-weight: 700;\n}\n.feature-card[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, \n.feature-card[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  width: 24%;\n}\n.feature-card[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), \n.feature-card[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2) {\n  background: #f0f7ff;\n}\n.feature-card[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(3), \n.feature-card[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(3) {\n  background: #f7f9fa;\n}\n.feature-card[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #21384a;\n  font-weight: 700;\n}\n.expert-insight[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 18px;\n  padding: 24px;\n  border: 1px solid #bfdaf5;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #edf6ff,\n      #fff);\n}\n.expert-insight[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  flex: 0 0 48px;\n  place-items: center;\n  border-radius: 50%;\n  background: #dbeeff;\n}\n.expert-insight[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  fill: none;\n  stroke: #1268cf;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.expert-insight[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  color: #0a2034;\n  font-size: 18px;\n}\n.expert-insight[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #5f7488;\n  font-size: 13px;\n  line-height: 1.65;\n}\n.expert-insight[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: 17px;\n}\n.detail-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 28px;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \na[_ngcontent-%COMP%]:focus-visible, \n.feature-table-scroll[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #72b4fa;\n  outline-offset: 3px;\n}\n@media (max-width: 720px) {\n  .detail-wrap[_ngcontent-%COMP%] {\n    width: min(100% - 32px, 1180px);\n  }\n  .detail-bar[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .detail-bar-inner[_ngcontent-%COMP%] {\n    min-height: 84px;\n  }\n  .product-summary-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .expert-insight[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=product-comparison-detail.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProductComparisonDetailPage, [{
    type: Component,
    args: [{ selector: "xh-product-comparison-detail-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="comparison-detail">\r
  <header class="detail-bar">\r
    <div class="detail-wrap detail-bar-inner">\r
      <div>\r
        <span>{{ definition.category }}</span>\r
        <h1>{{ title }}</h1>\r
      </div>\r
      <a routerLink="/compare-products" aria-label="Back to all product comparisons">\xD7</a>\r
    </div>\r
  </header>\r
\r
  <div class="detail-wrap detail-content">\r
    <p class="detail-intro">{{ definition.summary }}</p>\r
\r
    <section class="product-summary-grid" aria-label="Product summaries">\r
      <article class="product-summary product-summary-featured">\r
        <header><h2>{{ left.displayName }}</h2><span>{{ left.entry.group }}</span></header>\r
        <div class="product-summary-body">\r
          <div class="summary-field"><span>Best for</span><p>{{ left.entry.desc }}</p></div>\r
          <div class="summary-field"><span>Pricing</span><strong>{{ left.price }}</strong></div>\r
          <div class="summary-list strengths"><h3><i aria-hidden="true">\u2713</i> Strengths</h3><ul>@for (item of left.strengths; track item) { <li><i aria-hidden="true">\u2713</i>{{ item }}</li> }</ul></div>\r
          <div class="summary-list considerations"><h3>Planning considerations</h3><ul>@for (item of left.considerations; track item) { <li><i aria-hidden="true">!</i>{{ item }}</li> }</ul></div>\r
          <a [routerLink]="['/', left.slug]">View {{ left.displayName }} details \u2192</a>\r
        </div>\r
      </article>\r
\r
      <article class="product-summary">\r
        <header><h2>{{ right.displayName }}</h2><span>{{ right.entry.group }}</span></header>\r
        <div class="product-summary-body">\r
          <div class="summary-field"><span>Best for</span><p>{{ right.entry.desc }}</p></div>\r
          <div class="summary-field"><span>Pricing</span><strong>{{ right.price }}</strong></div>\r
          <div class="summary-list strengths"><h3><i aria-hidden="true">\u2713</i> Strengths</h3><ul>@for (item of right.strengths; track item) { <li><i aria-hidden="true">\u2713</i>{{ item }}</li> }</ul></div>\r
          <div class="summary-list considerations"><h3>Planning considerations</h3><ul>@for (item of right.considerations; track item) { <li><i aria-hidden="true">!</i>{{ item }}</li> }</ul></div>\r
          <a [routerLink]="['/', right.slug]">View {{ right.displayName }} details \u2192</a>\r
        </div>\r
      </article>\r
    </section>\r
\r
    <section class="feature-card" aria-labelledby="feature-comparison-title">\r
      <header><h2 id="feature-comparison-title">Feature Comparison</h2></header>\r
      <div class="feature-table-scroll" tabindex="0" aria-label="Scrollable product feature comparison">\r
        <table>\r
          <thead><tr><th scope="col">Feature</th><th scope="col">{{ left.displayName }}</th><th scope="col">{{ right.displayName }}</th></tr></thead>\r
          <tbody>\r
            @for (row of rows; track row.feature) {\r
              <tr><th scope="row">{{ row.feature }}</th><td>{{ row.left }}</td><td>{{ row.right }}</td></tr>\r
            }\r
          </tbody>\r
        </table>\r
      </div>\r
    </section>\r
\r
    <section class="expert-insight" aria-labelledby="expert-insight-title">\r
      <span aria-hidden="true">\r
        <svg viewBox="0 0 24 24"><path d="M12 3v18M7 6h10M5 6l-3 6h6L5 6Zm14 0-3 6h6l-3-6ZM2 12c.4 2 1.4 3 3 3s2.6-1 3-3m8 0c.4 2 1.4 3 3 3s2.6-1 3-3M8 21h8" /></svg>\r
      </span>\r
      <div>\r
        <h2 id="expert-insight-title">XcellHost Expert Insight</h2>\r
        <p>{{ definition.summary }} The deciding factors are usually workload fit, migration effort, integrations, support ownership and the total operating cost\u2014not the longest feature list.</p>\r
        <button class="btn btn-primary" type="button" (click)="requestConsultation()">Get expert consultation \u2192</button>\r
      </div>\r
    </section>\r
\r
    <div class="detail-actions">\r
      <a class="btn btn-ghost" routerLink="/compare-products">\u2190 Back to all comparisons</a>\r
      <a class="btn btn-ghost" routerLink="/compare" [queryParams]="{ s: left.slug + ',' + right.slug }">Open custom comparison table</a>\r
    </div>\r
  </div>\r
</main>\r
`, styles: ["/* src/app/pages/product-comparison-detail.page.css */\n:host {\n  display: block;\n  color: #102338;\n}\n.comparison-detail {\n  min-height: 100vh;\n  background: #f7f9fb;\n}\n.detail-wrap {\n  width: min(1180px, calc(100% - 48px));\n  margin: 0 auto;\n}\n.detail-bar {\n  position: sticky;\n  top: 0;\n  z-index: 8;\n  border-bottom: 1px solid #dfe6ec;\n  background: rgba(255, 255, 255, .95);\n  box-shadow: 0 2px 10px rgba(15, 35, 55, .04);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.detail-bar-inner {\n  display: flex;\n  min-height: 94px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 24px;\n  padding: 15px 0;\n}\n.detail-bar-inner span {\n  display: inline-flex;\n  padding: 5px 11px;\n  border: 1px solid #cbd8e2;\n  border-radius: 999px;\n  color: #173347;\n  font: 700 9px/1.2 var(--disp, sans-serif);\n}\n.detail-bar h1 {\n  margin: 8px 0 0;\n  color: #07172b;\n  font: 700 clamp(21px, 2.6vw, 30px)/1.18 var(--disp, sans-serif);\n  letter-spacing: -.025em;\n}\n.detail-bar-inner > a {\n  display: grid;\n  width: 40px;\n  height: 40px;\n  flex: 0 0 40px;\n  place-items: center;\n  border-radius: 8px;\n  color: #53687b;\n  font-size: 26px;\n  line-height: 1;\n  text-decoration: none;\n}\n.detail-bar-inner > a:hover {\n  background: #eef2f5;\n  color: #07172b;\n}\n.detail-content {\n  padding: 34px 0 72px;\n}\n.detail-intro {\n  max-width: 820px;\n  margin: 0 auto 28px;\n  color: #63788b;\n  font-size: 15px;\n  line-height: 1.7;\n  text-align: center;\n}\n.product-summary-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 24px;\n  margin-bottom: 28px;\n}\n.product-summary {\n  overflow: hidden;\n  border: 1px solid #dce4eb;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(15, 35, 55, .035);\n}\n.product-summary-featured {\n  border-color: #bcd8f5;\n}\n.product-summary > header {\n  display: flex;\n  min-height: 66px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  padding: 17px 22px;\n  background: #f5f7f9;\n}\n.product-summary-featured > header {\n  background: #edf6ff;\n}\n.product-summary h2 {\n  margin: 0;\n  color: #0a2034;\n  font-size: 18px;\n  line-height: 1.3;\n}\n.product-summary > header span {\n  color: #74899a;\n  font-size: 10px;\n  text-align: right;\n}\n.product-summary-body {\n  padding: 22px;\n}\n.summary-field {\n  margin-bottom: 20px;\n}\n.summary-field > span {\n  display: block;\n  margin-bottom: 6px;\n  color: #75899a;\n  font-size: 11px;\n  font-weight: 700;\n}\n.summary-field p {\n  margin: 0;\n  color: #243a4c;\n  font-size: 13px;\n  line-height: 1.6;\n}\n.summary-field strong {\n  color: #0b67cb;\n  font-size: 14px;\n}\n.summary-list {\n  margin-top: 18px;\n}\n.summary-list h3 {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin: 0 0 8px;\n  font-size: 12px;\n}\n.summary-list ul {\n  display: grid;\n  gap: 7px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.summary-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  color: #304659;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.summary-list i {\n  display: grid;\n  width: 16px;\n  height: 16px;\n  flex: 0 0 16px;\n  place-items: center;\n  border-radius: 50%;\n  font: 800 9px/1 sans-serif;\n}\n.strengths h3 {\n  color: #188c52;\n}\n.strengths i {\n  background: #e2f7eb;\n  color: #159051;\n}\n.considerations h3 {\n  color: #ba7200;\n}\n.considerations i {\n  background: #fff0d8;\n  color: #bd7600;\n}\n.product-summary-body > a {\n  display: inline-flex;\n  margin-top: 20px;\n  color: #0d65c9;\n  font-size: 11px;\n  font-weight: 800;\n  text-decoration: none;\n}\n.feature-card {\n  overflow: hidden;\n  margin-bottom: 28px;\n  border: 1px solid #dce4eb;\n  border-radius: 10px;\n  background: #fff;\n}\n.feature-card > header {\n  padding: 18px 22px;\n  border-bottom: 1px solid #e3e9ee;\n}\n.feature-card h2 {\n  margin: 0;\n  color: #0b2033;\n  font-size: 18px;\n}\n.feature-table-scroll {\n  overflow-x: auto;\n}\n.feature-card table {\n  width: 100%;\n  min-width: 760px;\n  border-collapse: collapse;\n  table-layout: fixed;\n}\n.feature-card th,\n.feature-card td {\n  padding: 14px 17px;\n  border-bottom: 1px solid #e8edf1;\n  color: #304659;\n  font-size: 12px;\n  line-height: 1.5;\n  text-align: left;\n  vertical-align: top;\n}\n.feature-card tr:last-child > * {\n  border-bottom: 0;\n}\n.feature-card thead th {\n  color: #1b3347;\n  font-weight: 700;\n}\n.feature-card thead th:first-child,\n.feature-card tbody th {\n  width: 24%;\n}\n.feature-card thead th:nth-child(2),\n.feature-card tbody td:nth-child(2) {\n  background: #f0f7ff;\n}\n.feature-card thead th:nth-child(3),\n.feature-card tbody td:nth-child(3) {\n  background: #f7f9fa;\n}\n.feature-card tbody th {\n  color: #21384a;\n  font-weight: 700;\n}\n.expert-insight {\n  display: flex;\n  gap: 18px;\n  padding: 24px;\n  border: 1px solid #bfdaf5;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #edf6ff,\n      #fff);\n}\n.expert-insight > span {\n  display: grid;\n  width: 48px;\n  height: 48px;\n  flex: 0 0 48px;\n  place-items: center;\n  border-radius: 50%;\n  background: #dbeeff;\n}\n.expert-insight svg {\n  width: 24px;\n  height: 24px;\n  fill: none;\n  stroke: #1268cf;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.expert-insight h2 {\n  margin: 0 0 8px;\n  color: #0a2034;\n  font-size: 18px;\n}\n.expert-insight p {\n  margin: 0;\n  color: #5f7488;\n  font-size: 13px;\n  line-height: 1.65;\n}\n.expert-insight .btn {\n  margin-top: 17px;\n}\n.detail-actions {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 28px;\n}\nbutton:focus-visible,\na:focus-visible,\n.feature-table-scroll:focus-visible {\n  outline: 3px solid #72b4fa;\n  outline-offset: 3px;\n}\n@media (max-width: 720px) {\n  .detail-wrap {\n    width: min(100% - 32px, 1180px);\n  }\n  .detail-bar {\n    position: static;\n  }\n  .detail-bar-inner {\n    min-height: 84px;\n  }\n  .product-summary-grid {\n    grid-template-columns: 1fr;\n  }\n  .expert-insight {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=product-comparison-detail.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProductComparisonDetailPage, { className: "ProductComparisonDetailPage", filePath: "src/app/pages/product-comparison-detail.page.ts", lineNumber: 37 });
})();
export {
  ProductComparisonDetailPage
};
//# sourceMappingURL=chunk-453I3E6T.js.map
