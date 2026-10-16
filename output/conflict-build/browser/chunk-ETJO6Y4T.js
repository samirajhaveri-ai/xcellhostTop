import {
  PRODUCT_COMPARISONS
} from "./chunk-JBVG3VGG.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/pages/compare-products.page.ts
var _c0 = (a0) => ["/compare-products", a0];
var _forTrack0 = ($index, $item) => $item.left + $item.right;
function CompareProductsPage_For_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function CompareProductsPage_For_62_Template_button_click_0_listener() {
      const category_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectCategory(category_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeCategory() === category_r2);
    \u0275\u0275attribute("aria-selected", ctx_r2.activeCategory() === category_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r2);
  }
}
function CompareProductsPage_For_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 23)(1, "div", 33)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(4, "svg", 34);
    \u0275\u0275element(5, "path", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 36)(11, "div")(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "small");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div")(17, "strong");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "small");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 37)(22, "a", 38);
    \u0275\u0275text(23, "View full comparison ");
    \u0275\u0275elementStart(24, "i", 8);
    \u0275\u0275text(25, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const comparison_r4 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comparison_r4.category);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", comparison_r4.leftDisplayName, " vs ", comparison_r4.rightDisplayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comparison_r4.summary);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(comparison_r4.leftDisplayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comparison_r4.leftProduct.group || comparison_r4.eyebrow);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(comparison_r4.rightDisplayName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(comparison_r4.rightProduct.group || comparison_r4.eyebrow);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c0, comparison_r4.detailSlug));
  }
}
var CompareProductsPage = class _CompareProductsPage {
  catalog = inject(CatalogService);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  allCategory = "All Comparisons";
  categories = [
    this.allCategory,
    "Cloud Infrastructure",
    "Productivity & Business Apps",
    "Cybersecurity",
    "Digital Trust",
    "Managed Cloud Operations"
  ];
  activeCategory = signal(this.allCategory, ...ngDevMode ? [{ debugName: "activeCategory" }] : []);
  comparisons = PRODUCT_COMPARISONS.flatMap((definition) => {
    const leftProduct = this.catalog.findInDirectory(definition.left) ?? this.catalog.entryBySlug(slugify(definition.left));
    const rightProduct = this.catalog.findInDirectory(definition.right) ?? this.catalog.entryBySlug(slugify(definition.right));
    if (!leftProduct || !rightProduct)
      return [];
    return [__spreadProps(__spreadValues({}, definition), {
      leftProduct,
      rightProduct,
      leftDisplayName: definition.leftLabel ?? leftProduct.name,
      rightDisplayName: definition.rightLabel ?? rightProduct.name,
      query: `${slugify(leftProduct.name)},${slugify(rightProduct.name)}`,
      detailSlug: `${slugify(definition.left)}-vs-${slugify(definition.right)}`
    })];
  });
  visibleComparisons = computed(() => {
    const category = this.activeCategory();
    return category === this.allCategory ? this.comparisons : this.comparisons.filter((comparison) => comparison.category === category);
  }, ...ngDevMode ? [{ debugName: "visibleComparisons" }] : []);
  catalogueCount = this.catalog.entries.length;
  constructor() {
    inject(SeoService).set("Product Comparisons | Cloud, Security & Digital Trust | XcellHost", "Compare XcellHost cloud, cybersecurity, productivity, digital trust and managed service options side by side.", "/compare-products/");
  }
  selectCategory(category) {
    this.activeCategory.set(category);
  }
  requestRecommendation() {
    this.topics.ask("Product comparison recommendation");
    this.overlay.open("callback");
  }
  static \u0275fac = function CompareProductsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompareProductsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompareProductsPage, selectors: [["xh-compare-products-page"]], decls: 92, vars: 3, consts: [[1, "product-comparison-page"], [1, "comparison-hero"], ["aria-hidden", "true", 1, "comparison-grid"], ["aria-hidden", "true", 1, "comparison-orb", "comparison-orb-one"], ["aria-hidden", "true", 1, "comparison-orb", "comparison-orb-two"], [1, "comparison-wrap"], ["aria-label", "Breadcrumb", 1, "comparison-breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], [1, "comparison-hero-copy"], [1, "comparison-kicker"], [1, "comparison-hero-actions"], ["href", "#comparison-library", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "comparison-ghost", 3, "click"], ["aria-label", "Comparison library overview", 1, "comparison-metrics"], ["id", "comparison-library", "aria-labelledby", "comparison-library-title", 1, "comparison-library"], [1, "comparison-heading"], ["id", "comparison-library-title"], [1, "comparison-filter-shell"], ["role", "tablist", "aria-label", "Filter product comparisons", 1, "comparison-filters"], ["type", "button", "role", "tab", 3, "active"], ["role", "status", 1, "comparison-result-count"], [1, "comparison-cards"], [1, "comparison-card"], ["aria-labelledby", "custom-comparison-title", 1, "comparison-custom"], ["id", "custom-comparison-title"], ["routerLink", "/compare", 1, "btn", "btn-primary"], [1, "comparison-help"], [1, "comparison-wrap", "comparison-help-inner"], [1, "comparison-help-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["routerLink", "/contact", 1, "btn", "comparison-ghost"], ["type", "button", "role", "tab", 3, "click"], [1, "comparison-card-top"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["d", "M12 3v18M7 6h10M5 6l-3 6h6L5 6Zm14 0-3 6h6l-3-6ZM2 12c.4 2 1.4 3 3 3s2.6-1 3-3m8 0c.4 2 1.4 3 3 3s2.6-1 3-3M8 21h8"], ["aria-label", "Products being compared", 1, "comparison-products"], [1, "comparison-card-footer"], [3, "routerLink"]], template: function CompareProductsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1);
      \u0275\u0275element(2, "div", 2)(3, "span", 3)(4, "span", 4);
      \u0275\u0275elementStart(5, "div", 5)(6, "nav", 6)(7, "a", 7);
      \u0275\u0275text(8, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 8);
      \u0275\u0275text(10, "/");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12, "Product comparisons");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "div", 9)(14, "span", 10);
      \u0275\u0275element(15, "i", 8);
      \u0275\u0275text(16, "Decision Center");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "h1");
      \u0275\u0275text(18, "Compare products.");
      \u0275\u0275element(19, "br");
      \u0275\u0275elementStart(20, "span");
      \u0275\u0275text(21, "Choose with confidence.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "p");
      \u0275\u0275text(23, "Explore practical side-by-side comparisons across XcellHost cloud, security, productivity and digital trust solutions.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 11)(25, "a", 12);
      \u0275\u0275text(26, "Browse comparisons");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "button", 13);
      \u0275\u0275listener("click", function CompareProductsPage_Template_button_click_27_listener() {
        return ctx.requestRecommendation();
      });
      \u0275\u0275text(28, "Get expert recommendation");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(29, "div", 14)(30, "div")(31, "strong");
      \u0275\u0275text(32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "span");
      \u0275\u0275text(34, "Product comparisons");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div")(36, "strong");
      \u0275\u0275text(37, "5");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "Solution categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div")(41, "strong");
      \u0275\u0275text(42, "6+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "span");
      \u0275\u0275text(44, "Decision factors");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(45, "div")(46, "strong");
      \u0275\u0275text(47);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "Catalogued services");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(50, "section", 15)(51, "div", 5)(52, "header", 16)(53, "span");
      \u0275\u0275text(54, "Side-by-side guidance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "h2", 17);
      \u0275\u0275text(56, "Find the comparison that matches your decision");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p");
      \u0275\u0275text(58, "Start with a curated pair, then open the full comparison to review pricing, features, support and deployment considerations.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 18)(60, "div", 19);
      \u0275\u0275repeaterCreate(61, CompareProductsPage_For_62_Template, 2, 4, "button", 20, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(63, "p", 21);
      \u0275\u0275text(64);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 22);
      \u0275\u0275repeaterCreate(66, CompareProductsPage_For_67_Template, 26, 11, "article", 23, _forTrack0);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "section", 24)(69, "div")(70, "span");
      \u0275\u0275text(71, "Build your own");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "h2", 25);
      \u0275\u0275text(73, "Need a different combination?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "p");
      \u0275\u0275text(75, "Select any two to four services from the XcellHost catalog and compare them in one table.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "a", 26);
      \u0275\u0275text(77, "Create custom comparison");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(78, "section", 27)(79, "div", 28)(80, "div")(81, "span");
      \u0275\u0275text(82, "Expert guidance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "h2");
      \u0275\u0275text(84, "Still deciding between two solutions?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p");
      \u0275\u0275text(86, "Our architects can map the options to your users, workloads, security requirements and budget\u2014without pushing the larger plan.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 29)(88, "button", 30);
      \u0275\u0275listener("click", function CompareProductsPage_Template_button_click_88_listener() {
        return ctx.requestRecommendation();
      });
      \u0275\u0275text(89, "Schedule free consultation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "a", 31);
      \u0275\u0275text(91, "Contact our team");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(32);
      \u0275\u0275textInterpolate1("", ctx.comparisons.length, "+");
      \u0275\u0275advance(15);
      \u0275\u0275textInterpolate1("", ctx.catalogueCount, "+");
      \u0275\u0275advance(14);
      \u0275\u0275repeater(ctx.categories);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Showing ", ctx.visibleComparisons().length, " comparisons");
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.visibleComparisons());
    }
  }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  color: #041e42;\n}\n.product-comparison-page[_ngcontent-%COMP%] {\n  background: #f5f8fd;\n}\n.comparison-wrap[_ngcontent-%COMP%] {\n  width: min(1180px, calc(100% - 48px));\n  margin: 0 auto;\n}\n.comparison-hero[_ngcontent-%COMP%] {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  padding: 30px 0 68px;\n  background:\n    linear-gradient(\n      135deg,\n      #03142e 0%,\n      #072859 58%,\n      #0c438e 100%);\n  color: #fff;\n}\n.comparison-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  opacity: .22;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .08) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .08) 1px,\n      transparent 1px);\n  background-size: 52px 52px;\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent 92%);\n  mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent 92%);\n}\n.comparison-orb[_ngcontent-%COMP%] {\n  position: absolute;\n  z-index: -1;\n  border-radius: 50%;\n  filter: blur(12px);\n  pointer-events: none;\n}\n.comparison-orb-one[_ngcontent-%COMP%] {\n  width: 480px;\n  height: 480px;\n  top: -280px;\n  right: -70px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(44, 130, 255, .7),\n      transparent 68%);\n}\n.comparison-orb-two[_ngcontent-%COMP%] {\n  width: 350px;\n  height: 350px;\n  bottom: -260px;\n  left: 5%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 139, 31, .42),\n      transparent 68%);\n}\n.comparison-breadcrumb[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-bottom: 42px;\n  color: #a9c3e7;\n  font-size: 12px;\n}\n.comparison-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.comparison-breadcrumb[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.comparison-hero-copy[_ngcontent-%COMP%] {\n  max-width: 820px;\n  margin: 0 auto;\n  text-align: center;\n}\n.comparison-kicker[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 15px;\n  border: 1px solid rgba(255, 255, 255, .17);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .07);\n  color: #c9ddfb;\n  font: 700 10px/1.2 var(--mono, monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.comparison-kicker[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #61dfa0;\n  box-shadow: 0 0 0 5px rgba(97, 223, 160, .13);\n}\n.comparison-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 22px 0 18px;\n  color: #fff;\n  font: 700 clamp(42px, 6vw, 65px)/1.03 var(--disp, sans-serif);\n  letter-spacing: -.05em;\n}\n.comparison-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #8bc0ff;\n}\n.comparison-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  color: #c7d6eb;\n  font-size: 16px;\n  line-height: 1.7;\n}\n.comparison-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 30px;\n}\n.comparison-ghost[_ngcontent-%COMP%] {\n  border: 1px solid rgba(255, 255, 255, .36);\n  background: rgba(255, 255, 255, .06);\n  color: #fff;\n}\n.comparison-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .13);\n}\n.comparison-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  max-width: 940px;\n  margin: 48px auto 0;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .15);\n  border-radius: 18px;\n  background: rgba(2, 18, 44, .42);\n  box-shadow: 0 24px 64px rgba(0, 0, 0, .18);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.comparison-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  padding: 23px 18px;\n  text-align: center;\n  border-right: 1px solid rgba(255, 255, 255, .13);\n}\n.comparison-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n  border-right: 0;\n}\n.comparison-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 5px;\n  color: #fff;\n  font-size: 29px;\n  line-height: 1;\n}\n.comparison-metrics[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #a5bbda;\n  font: 700 10px/1.4 var(--mono, monospace);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.comparison-library[_ngcontent-%COMP%] {\n  padding: 76px 0 84px;\n  scroll-margin-top: 80px;\n}\n.comparison-heading[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto 34px;\n  text-align: center;\n}\n.comparison-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.comparison-custom[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%], \n.comparison-help-inner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #1267d5;\n  font: 800 10px/1.4 var(--mono, monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.comparison-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 10px 0 12px;\n  color: #071d43;\n  font-size: clamp(30px, 4vw, 30px);\n  line-height: 1.12;\n  letter-spacing: -.035em;\n}\n.comparison-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #61738f;\n  font-size: 15px;\n  line-height: 1.7;\n}\n.comparison-filter-shell[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  padding: 3px 3px 10px;\n  scrollbar-width: thin;\n}\n.comparison-filters[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  min-width: 100%;\n  justify-content: center;\n  gap: 8px;\n}\n.comparison-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 11px 16px;\n  border: 1px solid #d7e1ef;\n  border-radius: 999px;\n  background: #fff;\n  color: #536681;\n  font: 700 11px/1.2 var(--disp, sans-serif);\n  cursor: pointer;\n  white-space: nowrap;\n  transition:\n    border-color .2s,\n    background .2s,\n    color .2s,\n    transform .2s;\n}\n.comparison-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  border-color: #9ebce6;\n  color: #0d5fc8;\n}\n.comparison-filters[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: #1267d5;\n  background: #1267d5;\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(18, 103, 213, .2);\n}\n.comparison-result-count[_ngcontent-%COMP%] {\n  margin: 13px 0 20px;\n  color: #7b8ba1;\n  font-size: 12px;\n  text-align: right;\n}\n.comparison-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n}\n.comparison-card[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  min-height: 292px;\n  flex-direction: column;\n  padding: 24px;\n  overflow: hidden;\n  border: 1px solid #dfe5eb;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 35, 55, .04);\n  transition:\n    transform .2s ease,\n    border-color .2s ease,\n    box-shadow .2s ease;\n}\n.comparison-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #cad5df;\n  box-shadow: 0 8px 20px rgba(15, 35, 55, .07);\n}\n.comparison-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.comparison-card-top[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  max-width: calc(100% - 32px);\n  padding: 5px 11px;\n  border: 1px solid #ccdae3;\n  border-radius: 999px;\n  color: #183247;\n  font: 700 9px/1.2 var(--disp, sans-serif);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.comparison-card-top[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  flex: 0 0 20px;\n  fill: none;\n  stroke: #0074e7;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.comparison-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 17px 0 10px;\n  color: #07172b;\n  font: 700 18px/1.25 var(--disp, sans-serif);\n  letter-spacing: -.025em;\n}\n.comparison-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  min-height: 63px;\n  margin: 0 0 16px;\n  color: #62788b;\n  font-size: 12px;\n  line-height: 1.65;\n}\n.comparison-products[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: auto;\n  text-align: center;\n}\n.comparison-products[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  min-height: 68px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 5px;\n  padding: 11px 9px;\n  border-radius: 7px;\n  background: #f5f7f9;\n}\n.comparison-products[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #0e2538;\n  font-size: 11px;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.comparison-products[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  color: #718698;\n  font-size: 9px;\n  line-height: 1.3;\n}\n.comparison-card-footer[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.comparison-card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  min-height: 38px;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  border-radius: 5px;\n  background: #f0f2f4;\n  color: #142b3d;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background .2s, color .2s;\n}\n.comparison-card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #e7ebee;\n  color: #0a9f4b;\n}\n.comparison-card-footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-style: normal;\n  transition: transform .2s;\n}\n.comparison-card-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n  transform: translateX(3px);\n}\n.comparison-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 28px;\n  margin-top: 28px;\n  padding: 30px 34px;\n  border: 1px solid #cddcf0;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      110deg,\n      #fff,\n      #edf5ff);\n}\n.comparison-custom[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 7px 0 7px;\n  color: #071d43;\n  font-size: 25px;\n}\n.comparison-custom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64758e;\n  line-height: 1.6;\n}\n.comparison-custom[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n}\n.comparison-help[_ngcontent-%COMP%] {\n  padding: 30px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #04172f,\n      #0a3675);\n  color: #fff;\n}\n.comparison-help-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 48px;\n}\n.comparison-help-inner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  max-width: 690px;\n}\n.comparison-help-inner[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  color: #8dbfff;\n}\n.comparison-help[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 9px 0 10px;\n  color: #fff;\n  font-size: clamp(27px, 3.5vw, 40px);\n  line-height: 1.18;\n}\n.comparison-help[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #bfd0e7;\n  font-size: 15px;\n  line-height: 1.7;\n}\n.comparison-help-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 0 0 auto;\n  flex-wrap: wrap;\n  gap: 10px;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \na[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #76b8ff;\n  outline-offset: 3px;\n}\n@media (max-width: 820px) {\n  .comparison-wrap[_ngcontent-%COMP%] {\n    width: min(100% - 32px, 1180px);\n  }\n  .comparison-hero[_ngcontent-%COMP%] {\n    padding: 22px 0 52px;\n  }\n  .comparison-breadcrumb[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .comparison-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(38px, 11vw, 58px);\n  }\n  .comparison-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n    margin-top: 36px;\n  }\n  .comparison-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    border-right: 0;\n  }\n  .comparison-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(-n+2) {\n    border-bottom: 1px solid rgba(255, 255, 255, .13);\n  }\n  .comparison-library[_ngcontent-%COMP%] {\n    padding: 54px 0 60px;\n  }\n  .comparison-filters[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  .comparison-custom[_ngcontent-%COMP%], \n   .comparison-help-inner[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .comparison-help-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 700px) {\n  .comparison-hero-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .comparison-hero-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .comparison-metrics[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    padding: 19px 10px;\n  }\n  .comparison-metrics[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .comparison-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .comparison-card[_ngcontent-%COMP%] {\n    min-height: 0;\n    padding: 21px;\n  }\n  .comparison-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .comparison-custom[_ngcontent-%COMP%] {\n    padding: 25px 22px;\n  }\n  .comparison-custom[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], \n   .comparison-help-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .comparison-card[_ngcontent-%COMP%], \n   .comparison-filters[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n   .comparison-card-footer[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=compare-products.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompareProductsPage, [{
    type: Component,
    args: [{ selector: "xh-compare-products-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="product-comparison-page">\r
  <section class="comparison-hero">\r
    <div class="comparison-grid" aria-hidden="true"></div>\r
    <span class="comparison-orb comparison-orb-one" aria-hidden="true"></span>\r
    <span class="comparison-orb comparison-orb-two" aria-hidden="true"></span>\r
    <div class="comparison-wrap">\r
      <nav class="comparison-breadcrumb" aria-label="Breadcrumb">\r
        <a routerLink="/">Home</a><span aria-hidden="true">/</span><span>Product comparisons</span>\r
      </nav>\r
      <div class="comparison-hero-copy">\r
        <span class="comparison-kicker"><i aria-hidden="true"></i>Decision Center</span>\r
        <h1>Compare products.<br /><span>Choose with confidence.</span></h1>\r
        <p>Explore practical side-by-side comparisons across XcellHost cloud, security, productivity and digital trust solutions.</p>\r
        <div class="comparison-hero-actions">\r
          <a class="btn btn-primary" href="#comparison-library">Browse comparisons</a>\r
          <button class="btn comparison-ghost" type="button" (click)="requestRecommendation()">Get expert recommendation</button>\r
        </div>\r
      </div>\r
      <div class="comparison-metrics" aria-label="Comparison library overview">\r
        <div><strong>{{ comparisons.length }}+</strong><span>Product comparisons</span></div>\r
        <div><strong>5</strong><span>Solution categories</span></div>\r
        <div><strong>6+</strong><span>Decision factors</span></div>\r
        <div><strong>{{ catalogueCount }}+</strong><span>Catalogued services</span></div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="comparison-library" id="comparison-library" aria-labelledby="comparison-library-title">\r
    <div class="comparison-wrap">\r
      <header class="comparison-heading">\r
        <span>Side-by-side guidance</span>\r
        <h2 id="comparison-library-title">Find the comparison that matches your decision</h2>\r
        <p>Start with a curated pair, then open the full comparison to review pricing, features, support and deployment considerations.</p>\r
      </header>\r
\r
      <div class="comparison-filter-shell">\r
        <div class="comparison-filters" role="tablist" aria-label="Filter product comparisons">\r
          @for (category of categories; track category) {\r
            <button\r
              type="button"\r
              role="tab"\r
              [class.active]="activeCategory() === category"\r
              [attr.aria-selected]="activeCategory() === category"\r
              (click)="selectCategory(category)"\r
            >{{ category }}</button>\r
          }\r
        </div>\r
      </div>\r
\r
      <p class="comparison-result-count" role="status">Showing {{ visibleComparisons().length }} comparisons</p>\r
\r
      <div class="comparison-cards">\r
        @for (comparison of visibleComparisons(); track comparison.left + comparison.right) {\r
          <article class="comparison-card">\r
            <div class="comparison-card-top">\r
              <span>{{ comparison.category }}</span>\r
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18M7 6h10M5 6l-3 6h6L5 6Zm14 0-3 6h6l-3-6ZM2 12c.4 2 1.4 3 3 3s2.6-1 3-3m8 0c.4 2 1.4 3 3 3s2.6-1 3-3M8 21h8" /></svg>\r
            </div>\r
            <h3>{{ comparison.leftDisplayName }} vs {{ comparison.rightDisplayName }}</h3>\r
            <p>{{ comparison.summary }}</p>\r
            <div class="comparison-products" aria-label="Products being compared">\r
              <div>\r
                <strong>{{ comparison.leftDisplayName }}</strong>\r
                <small>{{ comparison.leftProduct.group || comparison.eyebrow }}</small>\r
              </div>\r
              <div>\r
                <strong>{{ comparison.rightDisplayName }}</strong>\r
                <small>{{ comparison.rightProduct.group || comparison.eyebrow }}</small>\r
              </div>\r
            </div>\r
            <div class="comparison-card-footer">\r
              <a [routerLink]="['/compare-products', comparison.detailSlug]">View full comparison <i aria-hidden="true">\u2192</i></a>\r
            </div>\r
          </article>\r
        }\r
      </div>\r
\r
      <section class="comparison-custom" aria-labelledby="custom-comparison-title">\r
        <div>\r
          <span>Build your own</span>\r
          <h2 id="custom-comparison-title">Need a different combination?</h2>\r
          <p>Select any two to four services from the XcellHost catalog and compare them in one table.</p>\r
        </div>\r
        <a class="btn btn-primary" routerLink="/compare">Create custom comparison</a>\r
      </section>\r
    </div>\r
  </section>\r
\r
  <section class="comparison-help">\r
    <div class="comparison-wrap comparison-help-inner">\r
      <div>\r
        <span>Expert guidance</span>\r
        <h2>Still deciding between two solutions?</h2>\r
        <p>Our architects can map the options to your users, workloads, security requirements and budget\u2014without pushing the larger plan.</p>\r
      </div>\r
      <div class="comparison-help-actions">\r
        <button class="btn btn-primary" type="button" (click)="requestRecommendation()">Schedule free consultation</button>\r
        <a class="btn comparison-ghost" routerLink="/contact">Contact our team</a>\r
      </div>\r
    </div>\r
  </section>\r
</main>\r
`, styles: ["/* src/app/pages/compare-products.page.css */\n:host {\n  display: block;\n  color: #041e42;\n}\n.product-comparison-page {\n  background: #f5f8fd;\n}\n.comparison-wrap {\n  width: min(1180px, calc(100% - 48px));\n  margin: 0 auto;\n}\n.comparison-hero {\n  position: relative;\n  isolation: isolate;\n  overflow: hidden;\n  padding: 30px 0 68px;\n  background:\n    linear-gradient(\n      135deg,\n      #03142e 0%,\n      #072859 58%,\n      #0c438e 100%);\n  color: #fff;\n}\n.comparison-grid {\n  position: absolute;\n  inset: 0;\n  z-index: -2;\n  opacity: .22;\n  background-image:\n    linear-gradient(rgba(255, 255, 255, .08) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, .08) 1px,\n      transparent 1px);\n  background-size: 52px 52px;\n  -webkit-mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent 92%);\n  mask-image:\n    linear-gradient(\n      to bottom,\n      #000,\n      transparent 92%);\n}\n.comparison-orb {\n  position: absolute;\n  z-index: -1;\n  border-radius: 50%;\n  filter: blur(12px);\n  pointer-events: none;\n}\n.comparison-orb-one {\n  width: 480px;\n  height: 480px;\n  top: -280px;\n  right: -70px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(44, 130, 255, .7),\n      transparent 68%);\n}\n.comparison-orb-two {\n  width: 350px;\n  height: 350px;\n  bottom: -260px;\n  left: 5%;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 139, 31, .42),\n      transparent 68%);\n}\n.comparison-breadcrumb {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  margin-bottom: 42px;\n  color: #a9c3e7;\n  font-size: 12px;\n}\n.comparison-breadcrumb a {\n  color: inherit;\n  text-decoration: none;\n}\n.comparison-breadcrumb a:hover {\n  color: #fff;\n}\n.comparison-hero-copy {\n  max-width: 820px;\n  margin: 0 auto;\n  text-align: center;\n}\n.comparison-kicker {\n  display: inline-flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 15px;\n  border: 1px solid rgba(255, 255, 255, .17);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, .07);\n  color: #c9ddfb;\n  font: 700 10px/1.2 var(--mono, monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.comparison-kicker i {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #61dfa0;\n  box-shadow: 0 0 0 5px rgba(97, 223, 160, .13);\n}\n.comparison-hero h1 {\n  margin: 22px 0 18px;\n  color: #fff;\n  font: 700 clamp(42px, 6vw, 65px)/1.03 var(--disp, sans-serif);\n  letter-spacing: -.05em;\n}\n.comparison-hero h1 span {\n  color: #8bc0ff;\n}\n.comparison-hero-copy > p {\n  max-width: 720px;\n  margin: 0 auto;\n  color: #c7d6eb;\n  font-size: 16px;\n  line-height: 1.7;\n}\n.comparison-hero-actions {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 30px;\n}\n.comparison-ghost {\n  border: 1px solid rgba(255, 255, 255, .36);\n  background: rgba(255, 255, 255, .06);\n  color: #fff;\n}\n.comparison-ghost:hover {\n  background: rgba(255, 255, 255, .13);\n}\n.comparison-metrics {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  max-width: 940px;\n  margin: 48px auto 0;\n  overflow: hidden;\n  border: 1px solid rgba(255, 255, 255, .15);\n  border-radius: 18px;\n  background: rgba(2, 18, 44, .42);\n  box-shadow: 0 24px 64px rgba(0, 0, 0, .18);\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n}\n.comparison-metrics div {\n  padding: 23px 18px;\n  text-align: center;\n  border-right: 1px solid rgba(255, 255, 255, .13);\n}\n.comparison-metrics div:last-child {\n  border-right: 0;\n}\n.comparison-metrics strong {\n  display: block;\n  margin-bottom: 5px;\n  color: #fff;\n  font-size: 29px;\n  line-height: 1;\n}\n.comparison-metrics span {\n  color: #a5bbda;\n  font: 700 10px/1.4 var(--mono, monospace);\n  letter-spacing: .07em;\n  text-transform: uppercase;\n}\n.comparison-library {\n  padding: 76px 0 84px;\n  scroll-margin-top: 80px;\n}\n.comparison-heading {\n  max-width: 760px;\n  margin: 0 auto 34px;\n  text-align: center;\n}\n.comparison-heading > span,\n.comparison-custom > div > span,\n.comparison-help-inner > div > span {\n  color: #1267d5;\n  font: 800 10px/1.4 var(--mono, monospace);\n  letter-spacing: .13em;\n  text-transform: uppercase;\n}\n.comparison-heading h2 {\n  margin: 10px 0 12px;\n  color: #071d43;\n  font-size: clamp(30px, 4vw, 30px);\n  line-height: 1.12;\n  letter-spacing: -.035em;\n}\n.comparison-heading p {\n  margin: 0;\n  color: #61738f;\n  font-size: 15px;\n  line-height: 1.7;\n}\n.comparison-filter-shell {\n  overflow-x: auto;\n  padding: 3px 3px 10px;\n  scrollbar-width: thin;\n}\n.comparison-filters {\n  display: flex;\n  width: max-content;\n  min-width: 100%;\n  justify-content: center;\n  gap: 8px;\n}\n.comparison-filters button {\n  padding: 11px 16px;\n  border: 1px solid #d7e1ef;\n  border-radius: 999px;\n  background: #fff;\n  color: #536681;\n  font: 700 11px/1.2 var(--disp, sans-serif);\n  cursor: pointer;\n  white-space: nowrap;\n  transition:\n    border-color .2s,\n    background .2s,\n    color .2s,\n    transform .2s;\n}\n.comparison-filters button:hover {\n  transform: translateY(-1px);\n  border-color: #9ebce6;\n  color: #0d5fc8;\n}\n.comparison-filters button.active {\n  border-color: #1267d5;\n  background: #1267d5;\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(18, 103, 213, .2);\n}\n.comparison-result-count {\n  margin: 13px 0 20px;\n  color: #7b8ba1;\n  font-size: 12px;\n  text-align: right;\n}\n.comparison-cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 20px;\n}\n.comparison-card {\n  display: flex;\n  min-width: 0;\n  min-height: 292px;\n  flex-direction: column;\n  padding: 24px;\n  overflow: hidden;\n  border: 1px solid #dfe5eb;\n  border-radius: 10px;\n  background: #fff;\n  box-shadow: 0 1px 2px rgba(15, 35, 55, .04);\n  transition:\n    transform .2s ease,\n    border-color .2s ease,\n    box-shadow .2s ease;\n}\n.comparison-card:hover {\n  transform: translateY(-2px);\n  border-color: #cad5df;\n  box-shadow: 0 8px 20px rgba(15, 35, 55, .07);\n}\n.comparison-card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.comparison-card-top > span {\n  max-width: calc(100% - 32px);\n  padding: 5px 11px;\n  border: 1px solid #ccdae3;\n  border-radius: 999px;\n  color: #183247;\n  font: 700 9px/1.2 var(--disp, sans-serif);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.comparison-card-top svg {\n  width: 20px;\n  height: 20px;\n  flex: 0 0 20px;\n  fill: none;\n  stroke: #0074e7;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.comparison-card h3 {\n  margin: 17px 0 10px;\n  color: #07172b;\n  font: 700 18px/1.25 var(--disp, sans-serif);\n  letter-spacing: -.025em;\n}\n.comparison-card > p {\n  min-height: 63px;\n  margin: 0 0 16px;\n  color: #62788b;\n  font-size: 12px;\n  line-height: 1.65;\n}\n.comparison-products {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n  margin-top: auto;\n  text-align: center;\n}\n.comparison-products > div {\n  display: flex;\n  min-width: 0;\n  min-height: 68px;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  gap: 5px;\n  padding: 11px 9px;\n  border-radius: 7px;\n  background: #f5f7f9;\n}\n.comparison-products strong {\n  color: #0e2538;\n  font-size: 11px;\n  line-height: 1.35;\n  overflow-wrap: anywhere;\n}\n.comparison-products small {\n  color: #718698;\n  font-size: 9px;\n  line-height: 1.3;\n}\n.comparison-card-footer {\n  margin-top: 14px;\n}\n.comparison-card-footer a {\n  display: flex;\n  width: 100%;\n  min-height: 38px;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  border-radius: 5px;\n  background: #f0f2f4;\n  color: #142b3d;\n  font-size: 11px;\n  font-weight: 700;\n  text-decoration: none;\n  transition: background .2s, color .2s;\n}\n.comparison-card-footer a:hover {\n  background: #e7ebee;\n  color: #0a9f4b;\n}\n.comparison-card-footer i {\n  display: inline-block;\n  font-style: normal;\n  transition: transform .2s;\n}\n.comparison-card-footer a:hover i {\n  transform: translateX(3px);\n}\n.comparison-custom {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 28px;\n  margin-top: 28px;\n  padding: 30px 34px;\n  border: 1px solid #cddcf0;\n  border-radius: 20px;\n  background:\n    linear-gradient(\n      110deg,\n      #fff,\n      #edf5ff);\n}\n.comparison-custom h2 {\n  margin: 7px 0 7px;\n  color: #071d43;\n  font-size: 25px;\n}\n.comparison-custom p {\n  margin: 0;\n  color: #64758e;\n  line-height: 1.6;\n}\n.comparison-custom .btn {\n  flex: 0 0 auto;\n}\n.comparison-help {\n  padding: 30px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #04172f,\n      #0a3675);\n  color: #fff;\n}\n.comparison-help-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 48px;\n}\n.comparison-help-inner > div:first-child {\n  max-width: 690px;\n}\n.comparison-help-inner > div > span {\n  color: #8dbfff;\n}\n.comparison-help h2 {\n  margin: 9px 0 10px;\n  color: #fff;\n  font-size: clamp(27px, 3.5vw, 40px);\n  line-height: 1.18;\n}\n.comparison-help p {\n  margin: 0;\n  color: #bfd0e7;\n  font-size: 15px;\n  line-height: 1.7;\n}\n.comparison-help-actions {\n  display: flex;\n  flex: 0 0 auto;\n  flex-wrap: wrap;\n  gap: 10px;\n}\nbutton:focus-visible,\na:focus-visible {\n  outline: 3px solid #76b8ff;\n  outline-offset: 3px;\n}\n@media (max-width: 820px) {\n  .comparison-wrap {\n    width: min(100% - 32px, 1180px);\n  }\n  .comparison-hero {\n    padding: 22px 0 52px;\n  }\n  .comparison-breadcrumb {\n    margin-bottom: 30px;\n  }\n  .comparison-hero h1 {\n    font-size: clamp(38px, 11vw, 58px);\n  }\n  .comparison-metrics {\n    grid-template-columns: 1fr 1fr;\n    margin-top: 36px;\n  }\n  .comparison-metrics div:nth-child(2) {\n    border-right: 0;\n  }\n  .comparison-metrics div:nth-child(-n+2) {\n    border-bottom: 1px solid rgba(255, 255, 255, .13);\n  }\n  .comparison-library {\n    padding: 54px 0 60px;\n  }\n  .comparison-filters {\n    justify-content: flex-start;\n  }\n  .comparison-custom,\n  .comparison-help-inner {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n  .comparison-help-actions {\n    width: 100%;\n  }\n}\n@media (max-width: 700px) {\n  .comparison-hero-copy > p {\n    font-size: 15px;\n  }\n  .comparison-hero-actions .btn {\n    width: 100%;\n  }\n  .comparison-metrics div {\n    padding: 19px 10px;\n  }\n  .comparison-metrics strong {\n    font-size: 24px;\n  }\n  .comparison-cards {\n    grid-template-columns: 1fr;\n  }\n  .comparison-card {\n    min-height: 0;\n    padding: 21px;\n  }\n  .comparison-card > p {\n    min-height: 0;\n  }\n  .comparison-custom {\n    padding: 25px 22px;\n  }\n  .comparison-custom .btn,\n  .comparison-help-actions .btn {\n    width: 100%;\n    text-align: center;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .comparison-card,\n  .comparison-filters button,\n  .comparison-card-footer i {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=compare-products.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompareProductsPage, { className: "CompareProductsPage", filePath: "src/app/pages/compare-products.page.ts", lineNumber: 28 });
})();
export {
  CompareProductsPage
};
//# sourceMappingURL=chunk-ETJO6Y4T.js.map
