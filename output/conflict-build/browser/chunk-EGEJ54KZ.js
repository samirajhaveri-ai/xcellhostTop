import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  SIMPLE_PAGES
} from "./chunk-LN7P5EZP.js";
import {
  CASE_STUDIES,
  CaseStudiesApiService
} from "./chunk-6DVXASVN.js";
import {
  BlogApiService,
  INSIGHT_DOCUMENT_TYPES
} from "./chunk-KILYRBTU.js";
import "./chunk-CJMXCYTU.js";
import "./chunk-WBGN3H4A.js";
import {
  takeUntilDestroyed,
  toSignal
} from "./chunk-M5OSJJBF.js";
import {
  MEGA_MENU
} from "./chunk-TKO65HOC.js";
import {
  Router
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  computed,
  inject,
  linkedSignal,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/data/insights-taxonomy.data.ts
var NON_PRODUCT_MENUS = /* @__PURE__ */ new Set(["Insights", "Company"]);
function insightTaxonomyKey(value) {
  return value.trim().toLowerCase().replace(/&/g, "and").replace(/[().,/]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}
var INSIGHTS_MENU_TAXONOMY = MEGA_MENU.filter((menu) => !NON_PRODUCT_MENUS.has(menu.label)).map((menu) => {
  const submenuMap = /* @__PURE__ */ new Map();
  for (const tab of menu.tabs) {
    for (const group of tab.groups) {
      const submenuName = tab.label.trim() || group.heading?.trim() || "Other";
      const products = submenuMap.get(submenuName) ?? [];
      for (const item of group.items) {
        const name = item.title.trim();
        if (!name || products.some((product) => product.name === name))
          continue;
        products.push({ name, slug: insightTaxonomyKey(name) });
      }
      submenuMap.set(submenuName, products);
    }
  }
  return {
    name: menu.label,
    submenus: [...submenuMap].map(([name, products]) => ({ name, products }))
  };
});
var allPlacements = INSIGHTS_MENU_TAXONOMY.flatMap((menu) => menu.submenus.flatMap((submenu) => submenu.products.map((product) => ({
  mainCategory: menu.name,
  subCategory: submenu.name,
  product: product.name,
  slug: product.slug
}))));
function resolveInsightPlacement(source) {
  const explicitMain = source.mainCategory?.trim() ?? "";
  const explicitSub = source.subCategory?.trim() ?? "";
  const explicitProduct = source.product?.trim() ?? "";
  const relatedSlugs = (source.relatedPages ?? "").split(",").map(insightTaxonomyKey).filter(Boolean);
  const scoped = allPlacements.find((placement) => (!explicitMain || insightTaxonomyKey(placement.mainCategory) === insightTaxonomyKey(explicitMain)) && (!explicitSub || insightTaxonomyKey(placement.subCategory) === insightTaxonomyKey(explicitSub)) && (!explicitProduct || insightTaxonomyKey(placement.product) === insightTaxonomyKey(explicitProduct)));
  const related = allPlacements.find((placement) => relatedSlugs.includes(placement.slug));
  const categoryMatch = allPlacements.find((placement) => placement.slug === insightTaxonomyKey(source.category ?? ""));
  const match = explicitProduct && scoped || related || categoryMatch || (explicitMain || explicitSub ? scoped : void 0);
  if (match)
    return match;
  const menuMatch = INSIGHTS_MENU_TAXONOMY.find((menu) => insightTaxonomyKey(menu.name) === insightTaxonomyKey(explicitMain || source.category || ""));
  if (menuMatch) {
    return {
      mainCategory: menuMatch.name,
      subCategory: "General",
      product: explicitProduct || "General"
    };
  }
  return {
    mainCategory: explicitMain || "Other Insights",
    subCategory: explicitSub || explicitMain || "General",
    product: explicitProduct || source.category?.trim() || "General"
  };
}

// src/app/pages/insights.page.ts
var _c0 = ["tabScroller"];
var _forTrack0 = ($index, $item) => $item.label;
var _forTrack1 = ($index, $item) => $item.name;
var _forTrack2 = ($index, $item) => $item.documentId;
function InsightsPage_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "a", 72);
    \u0275\u0275domListener("click", function InsightsPage_For_35_Template_a_click_0_listener() {
      const tab_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectTab(tab_r3));
    });
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.activeTab() === tab_r3);
    \u0275\u0275attribute("aria-current", ctx_r3.activeTab() === tab_r3 ? "page" : null);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tab_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.tabCount(tab_r3));
  }
}
function InsightsPage_For_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElement(0, "use", 73)(1, "use", 74);
    \u0275\u0275domElementStart(2, "circle", 75)(3, "animateMotion", 76);
    \u0275\u0275domElement(4, "mpath");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const spoke_r5 = ctx.$implicit;
    \u0275\u0275attribute("href", "#hub-spoke-" + spoke_r5);
    \u0275\u0275advance();
    \u0275\u0275attribute("href", "#hub-spoke-" + spoke_r5);
    \u0275\u0275advance(2);
    \u0275\u0275attribute("dur", 2.6 + spoke_r5 % 4 * 0.35 + "s");
    \u0275\u0275advance();
    \u0275\u0275attribute("href", "#hub-spoke-" + spoke_r5);
  }
}
function InsightsPage_For_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 77)(1, "div", 78)(2, "article", 79)(3, "div", 80)(4, "span", 81);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "b");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(12, "div", 82)(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(15, "i");
    \u0275\u0275text(16, "\u2192");
    \u0275\u0275domElementEnd()()()()();
  }
  if (rf & 2) {
    const card_r6 = ctx.$implicit;
    const \u0275$index_132_r7 = ctx.$index;
    \u0275\u0275styleProp("--hub-angle", -90 + \u0275$index_132_r7 * 45 + "deg");
    \u0275\u0275advance(2);
    \u0275\u0275classMap("hub-card hub-card-" + card_r6.tone);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r6.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r6.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(card_r6.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(card_r6.meta);
  }
}
function InsightsPage_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 40);
    \u0275\u0275text(1, "Loading insights...");
    \u0275\u0275domElementEnd();
  }
}
function InsightsPage_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "p", 41);
    \u0275\u0275text(1, "Blog content is temporarily unavailable. Please try again shortly.");
    \u0275\u0275domElementEnd();
  }
}
function InsightsPage_For_85_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 83);
    \u0275\u0275domListener("click", function InsightsPage_For_85_Template_button_click_0_listener() {
      const tab_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectTab(tab_r9));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", tab_r9 === ctx_r3.activeTab());
    \u0275\u0275attribute("aria-selected", tab_r9 === ctx_r3.activeTab());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tab_r9, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.tabCount(tab_r9));
  }
}
function InsightsPage_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 84);
    \u0275\u0275domListener("click", function InsightsPage_Conditional_94_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.clearSearch());
    });
    \u0275\u0275text(1, "\xD7");
    \u0275\u0275domElementEnd();
  }
}
function InsightsPage_For_107_Conditional_8_For_2_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 91);
    \u0275\u0275domListener("click", function InsightsPage_For_107_Conditional_8_For_2_Conditional_7_For_2_Template_button_click_0_listener() {
      const product_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const child_r14 = \u0275\u0275nextContext(2).$implicit;
      const branch_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectProduct(branch_r12.name, child_r14.name, product_r16.name));
    });
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const product_r16 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("active", ctx_r3.activeProduct() === product_r16.name);
    \u0275\u0275attribute("aria-pressed", ctx_r3.activeProduct() === product_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r16.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(product_r16.count);
  }
}
function InsightsPage_For_107_Conditional_8_For_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 89);
    \u0275\u0275repeaterCreate(1, InsightsPage_For_107_Conditional_8_For_2_Conditional_7_For_2_Template, 5, 5, "button", 90, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const child_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(child_r14.products);
  }
}
function InsightsPage_For_107_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 88);
    \u0275\u0275domListener("click", function InsightsPage_For_107_Conditional_8_For_2_Template_button_click_0_listener() {
      const child_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const branch_r12 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectSubCategory(branch_r12.name, child_r14.name));
    });
    \u0275\u0275domElementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(5, "i", 86);
    \u0275\u0275text(6, "\u2304");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(7, InsightsPage_For_107_Conditional_8_For_2_Conditional_7_Template, 3, 0, "div", 89);
  }
  if (rf & 2) {
    const child_r14 = ctx.$implicit;
    const branch_r12 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r3.activeSub() === child_r14.name && !ctx_r3.activeProduct())("has-selection", ctx_r3.activeSub() === child_r14.name);
    \u0275\u0275attribute("aria-pressed", ctx_r3.activeSub() === child_r14.name)("aria-expanded", ctx_r3.expandedSub() === ctx_r3.submenuKey(branch_r12.name, child_r14.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r14.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(child_r14.count);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.expandedSub() === ctx_r3.submenuKey(branch_r12.name, child_r14.name) ? 7 : -1);
  }
}
function InsightsPage_For_107_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 87);
    \u0275\u0275repeaterCreate(1, InsightsPage_For_107_Conditional_8_For_2_Template, 8, 9, null, null, _forTrack1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const branch_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("id", ctx_r3.categoryPanelId(branch_r12.name));
    \u0275\u0275advance();
    \u0275\u0275repeater(branch_r12.children);
  }
}
function InsightsPage_For_107_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "div", 63)(1, "button", 85);
    \u0275\u0275domListener("click", function InsightsPage_For_107_Template_button_click_1_listener() {
      const branch_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectMainCategory(branch_r12.name));
    });
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "i", 86);
    \u0275\u0275text(7, "\u2304");
    \u0275\u0275domElementEnd()();
    \u0275\u0275conditionalCreate(8, InsightsPage_For_107_Conditional_8_Template, 3, 1, "div", 87);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const branch_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r3.activeMain() === branch_r12.name && !ctx_r3.activeSub())("has-selection", ctx_r3.activeMain() === branch_r12.name);
    \u0275\u0275attribute("aria-expanded", ctx_r3.expandedMain() === branch_r12.name)("aria-controls", ctx_r3.categoryPanelId(branch_r12.name));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(branch_r12.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(branch_r12.count);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.expandedMain() === branch_r12.name ? 8 : -1);
  }
}
function InsightsPage_Conditional_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 67)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "a", 92);
    \u0275\u0275text(4, "View YouTube channel \u2192");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.videoStatus() === "cached" ? "Showing saved channel uploads. Live updates are temporarily unavailable." : "Latest uploads from XcellHost Cloud Services");
  }
}
function InsightsPage_Conditional_119_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 95);
  }
  if (rf & 2) {
    const lead_r18 = \u0275\u0275nextContext();
    \u0275\u0275domProperty("src", lead_r18.coverImageUrl, \u0275\u0275sanitizeUrl)("alt", (lead_r18.coverImage == null ? null : lead_r18.coverImage.alternativeText) || lead_r18.title);
  }
}
function InsightsPage_Conditional_119_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 96);
    \u0275\u0275text(1, "\u25B6");
    \u0275\u0275domElementEnd();
  }
}
function InsightsPage_Conditional_119_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span");
    \u0275\u0275text(5, "Read customer story");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const lead_r18 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(lead_r18.metric);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lead_r18.profile);
  }
}
function InsightsPage_Conditional_119_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const lead_r18 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r3.formatDate(lead_r18.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lead_r18.author);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.isExternal(lead_r18) ? ctx_r3.resourceAction(lead_r18) : ctx_r3.formatTime(lead_r18.time));
  }
}
function InsightsPage_Conditional_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "a", 93);
    \u0275\u0275domListener("click", function InsightsPage_Conditional_119_Template_a_click_0_listener($event) {
      const lead_r18 = \u0275\u0275restoreView(_r17);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openInsight($event, lead_r18));
    });
    \u0275\u0275domElementStart(1, "div", 94);
    \u0275\u0275conditionalCreate(2, InsightsPage_Conditional_119_Conditional_2_Template, 1, 2, "img", 95);
    \u0275\u0275conditionalCreate(3, InsightsPage_Conditional_119_Conditional_3_Template, 2, 0, "span", 96);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 97)(5, "span", 98);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 99);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "div", 100);
    \u0275\u0275conditionalCreate(14, InsightsPage_Conditional_119_Conditional_14_Template, 6, 2)(15, InsightsPage_Conditional_119_Conditional_15_Template, 6, 3);
    \u0275\u0275domElementEnd()()();
  }
  if (rf & 2) {
    const lead_r18 = ctx;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("href", ctx_r3.insightHref(lead_r18), \u0275\u0275sanitizeUrl)("target", ctx_r3.isExternal(lead_r18) ? "_blank" : null)("rel", ctx_r3.isExternal(lead_r18) ? "noopener noreferrer" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(lead_r18.coverImageUrl ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(lead_r18.kind === "video" ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r3.leadLabel());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lead_r18.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lead_r18.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(lead_r18.description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(lead_r18.kind === "case-study" ? 14 : 15);
  }
}
function InsightsPage_For_122_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "img", 103);
  }
  if (rf & 2) {
    const post_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275domProperty("src", post_r20.coverImageUrl, \u0275\u0275sanitizeUrl)("alt", (post_r20.coverImage == null ? null : post_r20.coverImage.alternativeText) || post_r20.title);
  }
}
function InsightsPage_For_122_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 96);
    \u0275\u0275text(1, "\u25B6");
    \u0275\u0275domElementEnd();
  }
}
function InsightsPage_For_122_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const post_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", (post_r20.services == null ? null : post_r20.services.join(" \xB7 ")) || post_r20.profile, " \xB7 Read case study ");
  }
}
function InsightsPage_For_122_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const post_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", post_r20.author, " \xB7 ", ctx_r3.isExternal(post_r20) ? ctx_r3.resourceAction(post_r20) : ctx_r3.readTime(post_r20) + " read", " ");
  }
}
function InsightsPage_For_122_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "a", 101);
    \u0275\u0275domListener("click", function InsightsPage_For_122_Template_a_click_0_listener($event) {
      const post_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openInsight($event, post_r20));
    });
    \u0275\u0275domElementStart(1, "div", 102);
    \u0275\u0275conditionalCreate(2, InsightsPage_For_122_Conditional_2_Template, 1, 2, "img", 103);
    \u0275\u0275conditionalCreate(3, InsightsPage_For_122_Conditional_3_Template, 2, 0, "span", 96);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 104)(5, "span", 99);
    \u0275\u0275text(6);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(7, "span", 105);
    \u0275\u0275text(8);
    \u0275\u0275domElementEnd()();
    \u0275\u0275domElementStart(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(13, "span", 106);
    \u0275\u0275conditionalCreate(14, InsightsPage_For_122_Conditional_14_Template, 1, 1)(15, InsightsPage_For_122_Conditional_15_Template, 1, 2);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const post_r20 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275attribute("href", ctx_r3.insightHref(post_r20), \u0275\u0275sanitizeUrl)("target", ctx_r3.isExternal(post_r20) ? "_blank" : null)("rel", ctx_r3.isExternal(post_r20) ? "noopener noreferrer" : null);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(post_r20.coverImageUrl ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(post_r20.kind === "video" ? 3 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(post_r20.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r20.kind === "case-study" ? post_r20.metric : ctx_r3.formatDate(post_r20.date));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r20.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(post_r20.description);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(post_r20.kind === "case-study" ? 14 : 15);
  }
}
function InsightsPage_ForEmpty_123_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 107);
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(1, "svg", 108);
    \u0275\u0275domElement(2, "circle", 109)(3, "path", 110);
    \u0275\u0275domElementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275domElementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r3.activeTab() === "Videos" && ctx_r3.videoStatus() === "loading" ? "Loading channel videos..." : ctx_r3.activeTab() === "Videos" && ctx_r3.videoStatus() === "error" ? "Videos temporarily unavailable" : "No matching " + ctx_r3.activeTab().toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r3.emptyHelp());
  }
}
function InsightsPage_ForEmpty_123_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InsightsPage_ForEmpty_123_Conditional_0_Template, 8, 2, "div", 107);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r3.visible().length ? 0 : -1);
  }
}
function InsightsPage_Conditional_124_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 113);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275domElementEnd();
  }
}
function InsightsPage_Conditional_124_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "button", 91);
    \u0275\u0275domListener("click", function InsightsPage_Conditional_124_For_5_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const pageNumber_r24 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      const results_r22 = \u0275\u0275reference(110);
      return \u0275\u0275resetView(ctx_r3.goToPage(pageNumber_r24, results_r22));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const pageNumber_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", pageNumber_r24 === ctx_r3.currentPage());
    \u0275\u0275attribute("aria-current", pageNumber_r24 === ctx_r3.currentPage() ? "page" : null)("aria-label", "Page " + pageNumber_r24);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pageNumber_r24);
  }
}
function InsightsPage_Conditional_124_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InsightsPage_Conditional_124_For_5_Conditional_0_Template, 2, 0, "span", 113)(1, InsightsPage_Conditional_124_For_5_Conditional_1_Template, 2, 5, "button", 90);
  }
  if (rf & 2) {
    const pageNumber_r24 = ctx.$implicit;
    \u0275\u0275conditional(pageNumber_r24 === null ? 0 : 1);
  }
}
function InsightsPage_Conditional_124_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "nav", 71)(1, "button", 111);
    \u0275\u0275domListener("click", function InsightsPage_Conditional_124_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      const results_r22 = \u0275\u0275reference(110);
      return \u0275\u0275resetView(ctx_r3.goToPage(ctx_r3.currentPage() - 1, results_r22));
    });
    \u0275\u0275text(2, "Previous");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(3, "div", 112);
    \u0275\u0275repeaterCreate(4, InsightsPage_Conditional_124_For_5_Template, 2, 1, null, null, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "button", 111);
    \u0275\u0275domListener("click", function InsightsPage_Conditional_124_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r3 = \u0275\u0275nextContext();
      const results_r22 = \u0275\u0275reference(110);
      return \u0275\u0275resetView(ctx_r3.goToPage(ctx_r3.currentPage() + 1, results_r22));
    });
    \u0275\u0275text(7, "Next");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("disabled", ctx_r3.currentPage() === 1);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.pageNumbers());
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("disabled", ctx_r3.currentPage() === ctx_r3.totalPages());
  }
}
var ALL = "All";
var InsightsPage = class _InsightsPage {
  tabScroller;
  tabResizeObserver;
  router = inject(Router);
  seo = inject(SeoService);
  blogApi = inject(BlogApiService);
  caseStudiesApi = inject(CaseStudiesApiService);
  videoStatus = this.blogApi.videoStatus;
  page = SIMPLE_PAGES["blog"];
  tabs = ["Blogs", "Videos", "Use Cases", "Case Studies", ...INSIGHT_DOCUMENT_TYPES.map((type) => type.label)];
  posts = signal([], ...ngDevMode ? [{ debugName: "posts" }] : []);
  videos = signal([], ...ngDevMode ? [{ debugName: "videos" }] : []);
  documents = signal([], ...ngDevMode ? [{ debugName: "documents" }] : []);
  useCases = signal([], ...ngDevMode ? [{ debugName: "useCases" }] : []);
  caseStudies = toSignal(this.caseStudiesApi.studies$, { initialValue: CASE_STUDIES });
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(false, ...ngDevMode ? [{ debugName: "error" }] : []);
  activeTab = signal("Blogs", ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  canScrollTabsLeft = signal(false, ...ngDevMode ? [{ debugName: "canScrollTabsLeft" }] : []);
  canScrollTabsRight = signal(false, ...ngDevMode ? [{ debugName: "canScrollTabsRight" }] : []);
  active = signal(ALL, ...ngDevMode ? [{ debugName: "active" }] : []);
  activeMain = signal("", ...ngDevMode ? [{ debugName: "activeMain" }] : []);
  activeSub = signal("", ...ngDevMode ? [{ debugName: "activeSub" }] : []);
  activeProduct = signal("", ...ngDevMode ? [{ debugName: "activeProduct" }] : []);
  expandedMain = signal(null, ...ngDevMode ? [{ debugName: "expandedMain" }] : []);
  expandedSub = signal(null, ...ngDevMode ? [{ debugName: "expandedSub" }] : []);
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  allCategory = ALL;
  encodeURIComponent = encodeURIComponent;
  hubSpokes = [0, 1, 2, 3, 4, 5, 6, 7];
  hubCards = [
    { icon: "\u{1F4C4}", label: "WHITE PAPER", title: "Cloud Security Playbook for Indian SMBs", description: "Zero-trust cloud security posture with ISO 27001 compliance.", meta: "12 pages \xB7 PDF", tone: "blue" },
    { icon: "\u270D\uFE0F", label: "BLOG", title: "Why DPDPA Changes Everything", description: "How the Digital Personal Data Protection Act reshapes cloud data.", meta: "5 min read \xB7 New", tone: "green" },
    { icon: "\u{1F4CA}", label: "CASE STUDY", title: "500-User Enterprise Cuts Cloud Costs 40%", description: "Legacy-to-managed-cloud migration with zero downtime.", meta: "Manufacturing", tone: "orange" },
    { icon: "\u{1F3A5}", label: "WEBINAR", title: "Acronis Cyber Protect: Backup Beyond", description: "Live demo of unified backup, anti-ransomware and DR.", meta: "45 min \xB7 Recorded", tone: "cyan" },
    { icon: "\u{1F3A8}", label: "INFOGRAPHIC", title: "The Anatomy of a Ransomware Attack", description: "Attack vectors, defence layers and SOC response timeline.", meta: "Visual guide", tone: "purple" },
    { icon: "\u{1F4C8}", label: "INDUSTRY REPORT", title: "State of Cloud Security in India 2026", description: "Annual analysis of threats, compliance and cloud adoption.", meta: "28 pages \xB7 Annual", tone: "red" },
    { icon: "\u{1F4E7}", label: "NEWSLETTER", title: "XcellHost Security Digest", description: "Monthly threat intel, patch alerts and compliance updates.", meta: "Monthly \xB7 Subscribe", tone: "green" },
    { icon: "\u{1F4DA}", label: "GUIDE", title: "Microsoft 365 Migration Checklist", description: "Step-by-step enterprise migration for Exchange and Teams.", meta: "Checklist \xB7 Free", tone: "blue" }
  ];
  blogItems = computed(() => this.posts().map((post) => this.toBlogItem(post)), ...ngDevMode ? [{ debugName: "blogItems" }] : []);
  videoItems = computed(() => this.videos().map((item) => this.toResourceItem(item)), ...ngDevMode ? [{ debugName: "videoItems" }] : []);
  useCaseItems = computed(() => [
    ...this.caseStudies().map((study) => this.toCaseStudyItem(study)),
    ...this.useCases().filter((item) => !this.caseStudies().some((study) => study.id === item.slug)).map((item) => this.toResourceItem(item))
  ], ...ngDevMode ? [{ debugName: "useCaseItems" }] : []);
  caseStudyItems = computed(() => this.caseStudies().map((study) => this.toCaseStudyItem(study)), ...ngDevMode ? [{ debugName: "caseStudyItems" }] : []);
  sourceItems = computed(() => {
    switch (this.activeTab()) {
      case "Videos":
        return this.videoItems();
      case "Use Cases":
        return this.useCaseItems();
      case "Case Studies":
        return this.caseStudyItems();
      case "Blogs":
        return this.blogItems();
      default:
        return this.documents().filter((item) => item.kind === this.documentType()?.kind).map((item) => this.toResourceItem(item));
    }
  }, ...ngDevMode ? [{ debugName: "sourceItems" }] : []);
  categories = computed(() => [
    ALL,
    ...new Set(this.sourceItems().map((item) => item.category))
  ], ...ngDevMode ? [{ debugName: "categories" }] : []);
  categoryTree = computed(() => {
    const items = this.sourceItems();
    const branches = INSIGHTS_MENU_TAXONOMY.map((menu) => ({
      name: menu.name,
      count: items.filter((item) => this.matchesPlacement(item, menu.name)).length,
      children: menu.submenus.map((submenu) => ({
        name: submenu.name,
        count: items.filter((item) => this.matchesPlacement(item, menu.name, submenu.name)).length,
        products: submenu.products.map((product) => ({
          name: product.name,
          count: items.filter((item) => this.matchesPlacement(item, menu.name, submenu.name, product.name)).length
        }))
      }))
    }));
    for (const item of items) {
      for (const placement of this.itemPlacements(item)) {
        let branch = branches.find((candidate) => candidate.name === placement.mainCategory);
        if (!branch) {
          const count = items.filter((candidate) => this.matchesPlacement(candidate, placement.mainCategory)).length;
          branch = { name: placement.mainCategory, count, children: [] };
          branches.push(branch);
        }
        let submenu = branch.children.find((candidate) => candidate.name === placement.subCategory);
        if (!submenu) {
          const count = items.filter((candidate) => this.matchesPlacement(candidate, placement.mainCategory, placement.subCategory)).length;
          submenu = { name: placement.subCategory, count, products: [] };
          branch.children.push(submenu);
        }
        if (!submenu.products.some((candidate) => candidate.name === placement.product)) {
          submenu.products.push({
            name: placement.product,
            count: items.filter((candidate) => this.matchesPlacement(candidate, placement.mainCategory, placement.subCategory, placement.product)).length
          });
        }
      }
    }
    return branches;
  }, ...ngDevMode ? [{ debugName: "categoryTree" }] : []);
  visible = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    return this.sourceItems().filter((item) => {
      const matchesCategory = !this.activeMain() || this.matchesPlacement(item, this.activeMain(), this.activeSub(), this.activeProduct());
      const placementText = this.itemPlacements(item).map((placement) => `${placement.mainCategory} ${placement.subCategory} ${placement.product}`).join(" ");
      const haystack = `${item.title} ${item.description} ${placementText} ${item.author}`.toLocaleLowerCase();
      return matchesCategory && (!query || haystack.includes(query));
    });
  }, ...ngDevMode ? [{ debugName: "visible" }] : []);
  pageSize = 20;
  totalPages = computed(() => Math.max(1, Math.ceil(this.visible().length / this.pageSize)), ...ngDevMode ? [{ debugName: "totalPages" }] : []);
  currentPage = linkedSignal(...ngDevMode ? [{
    debugName: "currentPage",
    source: this.totalPages,
    computation: (total, previous) => Math.min(previous?.value ?? 1, total)
  }] : [{
    source: this.totalPages,
    computation: (total, previous) => Math.min(previous?.value ?? 1, total)
  }]);
  pagedPosts = computed(() => this.visible().slice((this.currentPage() - 1) * this.pageSize, this.currentPage() * this.pageSize), ...ngDevMode ? [{ debugName: "pagedPosts" }] : []);
  rangeStart = computed(() => this.visible().length ? (this.currentPage() - 1) * this.pageSize + 1 : 0, ...ngDevMode ? [{ debugName: "rangeStart" }] : []);
  rangeEnd = computed(() => Math.min(this.currentPage() * this.pageSize, this.visible().length), ...ngDevMode ? [{ debugName: "rangeEnd" }] : []);
  featuredVisible = computed(() => this.pagedPosts()[0] ?? null, ...ngDevMode ? [{ debugName: "featuredVisible" }] : []);
  gridPosts = computed(() => this.pagedPosts().slice(1), ...ngDevMode ? [{ debugName: "gridPosts" }] : []);
  pageNumbers = computed(() => {
    const total = this.totalPages();
    const current = this.currentPage();
    const pages = [];
    for (let page = 1; page <= total; page++) {
      if (total <= 7 || page === 1 || page === total || Math.abs(page - current) <= 1) {
        pages.push(page);
      } else if (pages[pages.length - 1] !== null) {
        pages.push(null);
      }
    }
    return pages;
  }, ...ngDevMode ? [{ debugName: "pageNumbers" }] : []);
  constructor() {
    this.seo.set(`${this.page.t} - XcellHost`, this.page.g, `/${this.page.u}/`);
    this.blogApi.posts$.pipe(takeUntilDestroyed()).subscribe({
      next: (posts) => {
        this.posts.set(posts);
        this.loading.set(false);
        this.error.set(false);
        if (this.active() !== ALL && this.categoryCount(this.active()) === 0)
          this.selectAllCategories();
      },
      error: () => {
        this.loading.set(false);
        this.error.set(true);
      }
    });
    this.blogApi.videos$.pipe(takeUntilDestroyed()).subscribe((items) => this.videos.set(items));
    this.blogApi.documents$.pipe(takeUntilDestroyed()).subscribe((items) => this.documents.set(items));
    this.blogApi.useCases$.pipe(takeUntilDestroyed()).subscribe((items) => this.useCases.set(items));
  }
  ngAfterViewInit() {
    if (typeof ResizeObserver === "undefined")
      return;
    const scroller = this.tabScroller?.nativeElement;
    if (!scroller)
      return;
    this.tabResizeObserver = new ResizeObserver(() => this.updateTabScroll());
    this.tabResizeObserver.observe(scroller);
    if (scroller.firstElementChild)
      this.tabResizeObserver.observe(scroller.firstElementChild);
  }
  ngOnDestroy() {
    this.tabResizeObserver?.disconnect();
  }
  scrollTabs(direction) {
    const scroller = this.tabScroller?.nativeElement;
    if (!scroller)
      return;
    scroller.scrollBy({ left: direction * scroller.clientWidth * 0.75, behavior: "smooth" });
  }
  updateTabScroll() {
    const scroller = this.tabScroller?.nativeElement;
    if (!scroller)
      return;
    this.canScrollTabsLeft.set(scroller.scrollLeft > 1);
    this.canScrollTabsRight.set(scroller.scrollLeft + scroller.clientWidth < scroller.scrollWidth - 1);
  }
  selectTab(tab) {
    this.activeTab.set(tab);
    this.selectAllCategories();
    this.currentPage.set(1);
  }
  selectCategory(category) {
    if (category === ALL) {
      this.selectAllCategories();
      return;
    }
    const main = this.categoryTree().find((branch) => branch.name === category);
    if (main) {
      this.selectMainCategory(main.name);
      return;
    }
    const parent = this.categoryTree().find((branch) => branch.children.some((child) => child.name === category));
    if (parent) {
      this.selectSubCategory(parent.name, category);
      return;
    }
    for (const branch of this.categoryTree()) {
      const child = branch.children.find((submenu) => submenu.products.some((product) => product.name === category));
      if (child) {
        this.selectProduct(branch.name, child.name, category);
        return;
      }
    }
  }
  selectAllCategories() {
    this.active.set(ALL);
    this.activeMain.set("");
    this.activeSub.set("");
    this.activeProduct.set("");
    this.expandedMain.set(null);
    this.expandedSub.set(null);
    this.currentPage.set(1);
  }
  selectMainCategory(category) {
    this.active.set(category);
    this.activeMain.set(category);
    this.activeSub.set("");
    this.activeProduct.set("");
    this.expandedMain.update((expanded) => expanded === category ? null : category);
    this.expandedSub.set(null);
    this.currentPage.set(1);
  }
  selectSubCategory(mainCategory, subCategory) {
    this.active.set(subCategory);
    this.activeMain.set(mainCategory);
    this.activeSub.set(subCategory);
    this.activeProduct.set("");
    this.expandedMain.set(mainCategory);
    const key = this.submenuKey(mainCategory, subCategory);
    this.expandedSub.update((expanded) => expanded === key ? null : key);
    this.currentPage.set(1);
  }
  selectProduct(mainCategory, subCategory, product) {
    this.active.set(product);
    this.activeMain.set(mainCategory);
    this.activeSub.set(subCategory);
    this.activeProduct.set(product);
    this.expandedMain.set(mainCategory);
    this.expandedSub.set(this.submenuKey(mainCategory, subCategory));
    this.currentPage.set(1);
  }
  submenuKey(mainCategory, subCategory) {
    return `${mainCategory}::${subCategory}`;
  }
  categoryPanelId(category) {
    return `insights-category-${category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
  }
  search(event) {
    this.query.set(event.target.value);
    this.currentPage.set(1);
  }
  clearSearch() {
    this.query.set("");
    this.currentPage.set(1);
  }
  openInsight(event, item) {
    if (this.isExternal(item) || event.button > 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey)
      return;
    event.preventDefault();
    void this.router.navigateByUrl(this.insightHref(item));
  }
  insightHref(item) {
    if (this.isExternal(item))
      return item.actionUrl ?? "#";
    return item.kind === "use-case" ? `/use-cases/${encodeURIComponent(item.slug)}` : item.kind === "case-study" ? `/case-studies/${encodeURIComponent(item.slug)}` : `/insights/${encodeURIComponent(item.slug)}`;
  }
  goToPage(page, results) {
    if (page < 1 || page > this.totalPages() || page === this.currentPage())
      return;
    this.currentPage.set(page);
    results.focus({ preventScroll: true });
    results.scrollIntoView({ block: "start" });
  }
  formatDate(value) {
    if (!value)
      return "";
    return new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(/* @__PURE__ */ new Date(`${value}T00:00:00`));
  }
  formatTime(value) {
    if (!value)
      return "";
    const [hours, minutes] = value.split(":").map(Number);
    return new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit" }).format(new Date(2e3, 0, 1, hours, minutes));
  }
  categoryCount(category) {
    return category === ALL ? this.sourceItems().length : this.sourceItems().filter((item) => item.category === category || this.itemPlacements(item).some((placement) => placement.mainCategory === category || placement.subCategory === category || placement.product === category)).length;
  }
  tabCount(tab) {
    if (tab === "Videos")
      return this.videos().length;
    if (tab === "Use Cases")
      return this.useCaseItems().length;
    if (tab === "Case Studies")
      return this.caseStudyItems().length;
    if (tab === "Blogs")
      return this.posts().length;
    return this.documents().filter((item) => item.kind === INSIGHT_DOCUMENT_TYPES.find((type) => type.label === tab)?.kind).length;
  }
  documentType() {
    return INSIGHT_DOCUMENT_TYPES.find((type) => type.label === this.activeTab());
  }
  resultNoun(count = 1) {
    const singular = this.documentType()?.singular ?? (this.activeTab() === "Videos" ? "video" : this.activeTab() === "Use Cases" ? "use case" : this.activeTab() === "Case Studies" ? "case study" : "article");
    return count === 1 ? singular : singular === "case study" ? "case studies" : `${singular}s`;
  }
  isExternal(item) {
    return item.kind !== "blog" && item.kind !== "use-case" && item.kind !== "case-study";
  }
  resourceAction(item) {
    return item.kind === "video" ? "Watch on YouTube" : "View " + (INSIGHT_DOCUMENT_TYPES.find((type) => type.kind === item.kind)?.singular ?? "resource");
  }
  resultHeading() {
    return `${this.active() === ALL ? "All" : this.active()} ${this.activeTab()}`;
  }
  leadLabel() {
    if (this.activeTab() === "Videos")
      return "Featured video";
    if (this.activeTab() === "Use Cases")
      return "Featured use case";
    if (this.activeTab() === "Case Studies")
      return "Featured case study";
    return this.documentType() ? "Featured " + this.documentType().singular : "Top story";
  }
  emptyHelp() {
    if (this.documentType() && !this.sourceItems().length)
      return "Published " + this.activeTab().toLowerCase() + " will appear here. Browse another resource type in the meantime.";
    if (this.activeTab() === "Videos" && this.videoStatus() === "loading")
      return "Fetching uploads from XcellHost Cloud Services.";
    if (this.activeTab() === "Videos" && this.videoStatus() === "error")
      return "Please visit our YouTube channel or try again shortly.";
    return this.activeTab() === "Videos" ? "Try another topic or search term. New YouTube uploads will appear here automatically." : "Try another topic or search term. New Strapi content will appear here automatically.";
  }
  readTime(post) {
    const text = `${post.title} ${post.description} ${post.content}`.trim();
    const words = text ? text.split(/\s+/).length : 0;
    return `${Math.max(3, Math.round(words / 180) || 3)} min`;
  }
  toBlogItem(post) {
    const placement = resolveInsightPlacement(post);
    return __spreadProps(__spreadValues(__spreadProps(__spreadValues({}, post), {
      kind: "blog"
    }), placement), {
      actionUrl: null
    });
  }
  toResourceItem(item) {
    const placement = resolveInsightPlacement(item);
    return __spreadProps(__spreadValues(__spreadValues({}, item), placement), {
      actionUrl: item.kind === "video" ? item.videoUrl : item.downloadUrl ?? null
    });
  }
  toCaseStudyItem(study) {
    const placements = this.caseStudyPlacements(study);
    const placement = placements[0] ?? resolveInsightPlacement({
      category: study.industry,
      mainCategory: study.mainCategory,
      subCategory: study.subCategory
    });
    return {
      id: 0,
      documentId: study.documentId ?? `case-study-${study.id}`,
      kind: "case-study",
      title: study.headline || study.metricLabel,
      slug: study.id,
      description: study.summary,
      content: `${study.challenge} ${study.solution} ${study.impact.join(" ")}`,
      author: study.customer || "XcellHost Customer Story",
      date: "",
      time: "",
      category: study.industry,
      mainCategory: placement.mainCategory,
      subCategory: placement.subCategory,
      product: placement.product,
      coverImage: null,
      coverImageUrl: study.coverImageUrl || this.caseStudyCover(study.id),
      actionUrl: null,
      metric: study.metric,
      profile: study.profile,
      services: study.services,
      placements
    };
  }
  caseStudyCover(id) {
    if (id === "tally-cloud")
      return "/assets/images/hero-tally-on-cloud.png";
    if (id === "ca-continuity")
      return "/assets/images/orb-smb-cloud-desktop.png";
    if (id === "cloud-drive-collaboration")
      return "/assets/images/orb-smb-cloud-desktop.png";
    if (id === "endpoint-security-response")
      return "/assets/images/hero-advanced-endpoint-security-edr.svg";
    if (id === "rmm-device-operations")
      return "/assets/images/hero-rmm.png";
    if (id === "smb-security-appliance")
      return "/assets/images/hero-smb-cyber-security-appliance.png";
    if (id === "microsoft-365-smb-collaboration")
      return "/assets/images/orb-microsoft-365.png";
    if (id === "acronis-genai-governance")
      return "/assets/images/acronis-genai-protection.png";
    if (id === "cloud-disaster-recovery-smb")
      return "/assets/images/acronis-disaster-recovery.png";
    if (id === "dpdpa-for-smb-readiness")
      return "/assets/images/security-glossary-hero.svg";
    if (id === "workforce-analytics-visibility")
      return "/assets/images/menu-data-analytics.svg";
    if (id === "domain-portfolio-control" || id === "domain-extension-launch" || id === "ai-domain-shortlist") {
      return "/assets/images/domains/hero.svg";
    }
    if (id === "managed-web-hosting" || id === "ai-website-launch")
      return "/assets/images/domains/hero.svg";
    if (id === "website-migration-backup")
      return "/assets/images/cloud-migration-hero.svg";
    if (id === "hosting-control-panel-operations" || id === "cloudlinux-account-isolation") {
      return "/assets/images/cloud-migration-hero.svg";
    }
    if (id === "website-security-trust")
      return "/assets/images/hero-web-security-sitelock-wide.png";
    if (id === "web-design-business-portfolios")
      return "/assets/images/website-photo-frame-samir-jhaveri-1.png";
    if (id === "web-marketing-customer-journey")
      return "/assets/images/contact-whatsapp.webp";
    if (id === "vps-workload-platform")
      return "/assets/images/orb-smb-cloud-desktop.png";
    return "/assets/images/hero-cloud-backup-acronis.png";
  }
  caseStudyPlacements(study) {
    const productAliases = {
      "Cloud Desktop": "smb-cloud-desktop",
      "Acronis Backup": "acronis-backup-advanced",
      SecureSetu: "dpdpa-consulting",
      vDPO: "vdpo-as-a-service"
    };
    const placements = study.services.map((service) => resolveInsightPlacement({
      category: study.industry,
      mainCategory: study.mainCategory,
      subCategory: study.subCategory,
      product: service,
      relatedPages: productAliases[service] ?? service
    }));
    return placements.filter((placement, index) => placements.findIndex((candidate) => candidate.mainCategory === placement.mainCategory && candidate.subCategory === placement.subCategory && candidate.product === placement.product) === index);
  }
  itemPlacements(item) {
    return item.placements?.length ? item.placements : [item];
  }
  matchesPlacement(item, main, sub = "", product = "") {
    return this.itemPlacements(item).some((placement) => placement.mainCategory === main && (!sub || placement.subCategory === sub) && (!product || placement.product === product));
  }
  static \u0275fac = function InsightsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InsightsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InsightsPage, selectors: [["xh-insights-page"]], viewQuery: function InsightsPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tabScroller = _t.first);
    }
  }, hostAttrs: [2, "display", "contents"], decls: 125, vars: 26, consts: [["tabScroller", ""], ["results", ""], ["id", "ipage", 1, "ppage", "as-page"], [1, "pp-hero", "insights-hero"], [1, "orb", "orb-1"], [1, "wrap"], [1, "pp-crumb"], [1, "insights-hero-grid"], [1, "insights-hero-copy"], [1, "insights-kicker"], [1, "pp-tagline"], ["aria-label", "Insights overview", 1, "insights-hero-stats"], ["aria-label", "Explore Insights resources", 1, "insights-hero-resources"], ["href", "#insights-library", 3, "active"], ["role", "img", "aria-label", "Animated XcellHost insights resource hub", 1, "insights-hub-visual"], ["aria-hidden", "true", 1, "insights-hub-stage"], [1, "hub-pulse", "hub-pulse-one"], [1, "hub-pulse", "hub-pulse-two"], [1, "hub-pulse", "hub-pulse-three"], [1, "hub-orbit", "hub-orbit-one"], [1, "hub-orbit", "hub-orbit-two"], [1, "hub-rotor"], ["viewBox", "0 0 760 760", 1, "hub-lines"], ["id", "insights-hub-glow"], ["stdDeviation", "2", "result", "glow"], ["in", "glow"], ["in", "SourceGraphic"], ["id", "hub-spoke-0", "d", "M380 292 L380 175"], ["id", "hub-spoke-1", "d", "M442 318 L525 235"], ["id", "hub-spoke-2", "d", "M468 380 L585 380"], ["id", "hub-spoke-3", "d", "M442 442 L525 525"], ["id", "hub-spoke-4", "d", "M380 468 L380 585"], ["id", "hub-spoke-5", "d", "M318 442 L235 525"], ["id", "hub-spoke-6", "d", "M292 380 L175 380"], ["id", "hub-spoke-7", "d", "M318 318 L235 235"], [1, "hub-item", 3, "--hub-angle"], [1, "hub-center"], [1, "hub-center-ring"], ["src", "/assets/images/xcellhost-login-logo.png", "alt", ""], [1, "pp-body"], ["role", "status"], ["role", "alert"], ["id", "insights-library", "aria-label", "Insight content filters", 1, "insights-discovery"], [1, "insights-tabs-carousel"], ["type", "button", "aria-label", "Scroll resource tabs left", 1, "insights-tab-arrow", 3, "click", "disabled"], ["aria-hidden", "true", "viewBox", "0 0 24 24"], ["d", "m15 18-6-6 6-6"], [1, "insights-tabs-viewport", 3, "scroll"], ["role", "tablist", "aria-label", "Insight content type", 1, "insights-tabs"], ["type", "button", "role", "tab", 3, "active"], ["type", "button", "aria-label", "Scroll resource tabs right", 1, "insights-tab-arrow", 3, "click", "disabled"], ["d", "m9 18 6-6-6-6"], [1, "insights-search"], ["cx", "11", "cy", "11", "r", "6.5"], ["d", "m16 16 4 4"], ["type", "search", "placeholder", "Search insights...", 3, "input", "value"], ["type", "button", "aria-label", "Clear search"], [1, "insights-shell"], [1, "insights-sidebar"], [1, "insights-sidebar-card"], [1, "pp-sec"], ["role", "group", "aria-label", "Filter insights by category", 1, "insights-topics"], [1, "insights-topic", "insights-topic-all", 3, "click"], [1, "insights-topic-branch"], [1, "insights-main"], ["tabindex", "-1", 1, "insights-toolbar"], [1, "insights-toolbar-label"], ["role", "status", 1, "insights-channel"], [1, "insights-lead"], [1, "insights-grid"], [1, "bl", "insights-card"], ["aria-label", "Insights pagination", 1, "insights-pagination"], ["href", "#insights-library", 3, "click"], [1, "hub-connector"], [1, "hub-connector", "hub-connector-flow"], ["r", "3.5", 1, "hub-particle"], ["repeatCount", "indefinite"], [1, "hub-item"], [1, "hub-counter-spin"], [1, "hub-card"], [1, "hub-card-top"], [1, "hub-card-icon"], [1, "hub-card-meta"], ["type", "button", "role", "tab", 3, "click"], ["type", "button", "aria-label", "Clear search", 3, "click"], [1, "insights-topic", "insights-topic-main", 3, "click"], ["aria-hidden", "true"], [1, "insights-subtopics", 3, "id"], ["type", "button", 1, "insights-submenu", 3, "click"], [1, "insights-products"], ["type", "button", 3, "active"], ["type", "button", 3, "click"], ["href", "https://www.youtube.com/@XcellHostCloudServices/videos", "target", "_blank", "rel", "noopener noreferrer"], [1, "insights-lead", 3, "click"], [1, "insights-lead-media"], [1, "insights-lead-cover", 3, "src", "alt"], ["aria-hidden", "true", 1, "insights-play"], [1, "insights-lead-copy"], [1, "insights-feature-label"], [1, "bl-k"], [1, "insights-feature-meta"], [1, "bl", "insights-card", 3, "click"], [1, "insights-card-media"], [1, "blog-cover", 3, "src", "alt"], [1, "insights-card-meta"], [1, "insights-card-date"], [1, "bl-m"], [1, "insights-empty"], ["aria-hidden", "true", "viewBox", "0 0 48 48"], ["cx", "21", "cy", "21", "r", "12"], ["d", "m30 30 9 9M8 8l32 32"], ["type", "button", 3, "click", "disabled"], [1, "insights-page-numbers"], ["aria-hidden", "true", 1, "insights-page-gap"]], template: function InsightsPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "div", 2)(1, "div", 3);
      \u0275\u0275domElement(2, "span", 4);
      \u0275\u0275domElementStart(3, "div", 5)(4, "div", 6);
      \u0275\u0275text(5);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "div", 7)(7, "div", 8)(8, "span", 9);
      \u0275\u0275text(9, "Resource Center");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(10, "h1");
      \u0275\u0275text(11);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(12, "p", 10);
      \u0275\u0275text(13);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(14, "div", 11)(15, "article")(16, "b");
      \u0275\u0275text(17);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "span");
      \u0275\u0275text(19, "Published articles");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(20, "article")(21, "b");
      \u0275\u0275text(22);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(23, "span");
      \u0275\u0275text(24, "Topic collections");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(25, "article")(26, "b");
      \u0275\u0275text(27);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "span");
      \u0275\u0275text(29);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(30, "nav", 12)(31, "span");
      \u0275\u0275text(32, "Explore by format");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(33, "div");
      \u0275\u0275repeaterCreate(34, InsightsPage_For_35_Template, 5, 5, "a", 13, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(36, "div", 14)(37, "div", 15);
      \u0275\u0275domElement(38, "span", 16)(39, "span", 17)(40, "span", 18);
      \u0275\u0275domElementStart(41, "span", 19);
      \u0275\u0275domElement(42, "i")(43, "i");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "span", 20);
      \u0275\u0275domElement(45, "i")(46, "i");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(47, "div", 21);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(48, "svg", 22)(49, "defs")(50, "filter", 23);
      \u0275\u0275domElement(51, "feGaussianBlur", 24);
      \u0275\u0275domElementStart(52, "feMerge");
      \u0275\u0275domElement(53, "feMergeNode", 25)(54, "feMergeNode", 26);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElement(55, "path", 27)(56, "path", 28)(57, "path", 29)(58, "path", 30)(59, "path", 31)(60, "path", 32)(61, "path", 33)(62, "path", 34);
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(63, InsightsPage_For_64_Template, 5, 4, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
      \u0275\u0275repeaterCreate(65, InsightsPage_For_66_Template, 17, 9, "div", 35, _forTrack0);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(67, "div", 36)(68, "div", 37);
      \u0275\u0275domElement(69, "img", 38);
      \u0275\u0275domElementStart(70, "span");
      \u0275\u0275text(71, "INSIGHTS HUB");
      \u0275\u0275domElementEnd()()()()()()()();
      \u0275\u0275domElementStart(72, "div", 39)(73, "div", 5);
      \u0275\u0275conditionalCreate(74, InsightsPage_Conditional_74_Template, 2, 0, "p", 40)(75, InsightsPage_Conditional_75_Template, 2, 0, "p", 41);
      \u0275\u0275domElementStart(76, "section", 42)(77, "div", 43)(78, "button", 44);
      \u0275\u0275domListener("click", function InsightsPage_Template_button_click_78_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollTabs(-1));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(79, "svg", 45);
      \u0275\u0275domElement(80, "path", 46);
      \u0275\u0275domElementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(81, "div", 47, 0);
      \u0275\u0275domListener("scroll", function InsightsPage_Template_div_scroll_81_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.updateTabScroll());
      });
      \u0275\u0275domElementStart(83, "div", 48);
      \u0275\u0275repeaterCreate(84, InsightsPage_For_85_Template, 4, 5, "button", 49, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(86, "button", 50);
      \u0275\u0275domListener("click", function InsightsPage_Template_button_click_86_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.scrollTabs(1));
      });
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(87, "svg", 45);
      \u0275\u0275domElement(88, "path", 51);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(89, "label", 52);
      \u0275\u0275namespaceSVG();
      \u0275\u0275domElementStart(90, "svg", 45);
      \u0275\u0275domElement(91, "circle", 53)(92, "path", 54);
      \u0275\u0275domElementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275domElementStart(93, "input", 55);
      \u0275\u0275domListener("input", function InsightsPage_Template_input_input_93_listener($event) {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.search($event));
      });
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(94, InsightsPage_Conditional_94_Template, 2, 0, "button", 56);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(95, "section", 57)(96, "aside", 58)(97, "div", 59)(98, "div", 60);
      \u0275\u0275text(99, "Browse by topic");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(100, "div", 61)(101, "button", 62);
      \u0275\u0275domListener("click", function InsightsPage_Template_button_click_101_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.selectAllCategories());
      });
      \u0275\u0275domElementStart(102, "span");
      \u0275\u0275text(103);
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(104, "b");
      \u0275\u0275text(105);
      \u0275\u0275domElementEnd()();
      \u0275\u0275repeaterCreate(106, InsightsPage_For_107_Template, 9, 9, "div", 63, _forTrack1);
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(108, "div", 64)(109, "div", 65, 1)(111, "div")(112, "span", 66);
      \u0275\u0275text(113, "Showing");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(114, "h2");
      \u0275\u0275text(115);
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(116, "p", 40);
      \u0275\u0275text(117);
      \u0275\u0275domElementEnd()();
      \u0275\u0275conditionalCreate(118, InsightsPage_Conditional_118_Template, 5, 1, "div", 67);
      \u0275\u0275conditionalCreate(119, InsightsPage_Conditional_119_Template, 16, 10, "a", 68);
      \u0275\u0275domElementStart(120, "div", 69);
      \u0275\u0275repeaterCreate(121, InsightsPage_For_122_Template, 16, 10, "a", 70, _forTrack2, false, InsightsPage_ForEmpty_123_Template, 1, 1);
      \u0275\u0275domElementEnd();
      \u0275\u0275conditionalCreate(124, InsightsPage_Conditional_124_Template, 8, 2, "nav", 71);
      \u0275\u0275domElementEnd()()()()();
    }
    if (rf & 2) {
      let tmp_26_0;
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.page.c);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.page.t);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.page.g);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.posts().length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.categoryTree().length);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.active() === ctx.allCategory ? "Live" : ctx.categoryCount(ctx.active()));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.active() === ctx.allCategory ? "CMS synced" : "Posts in topic");
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(29);
      \u0275\u0275repeater(ctx.hubSpokes);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.hubCards);
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.loading() && ctx.activeTab() === "Blogs" ? 74 : ctx.error() && ctx.activeTab() === "Blogs" ? 75 : -1);
      \u0275\u0275advance(4);
      \u0275\u0275domProperty("disabled", !ctx.canScrollTabsLeft());
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.tabs);
      \u0275\u0275advance(2);
      \u0275\u0275domProperty("disabled", !ctx.canScrollTabsRight());
      \u0275\u0275advance(7);
      \u0275\u0275domProperty("value", ctx.query());
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.query() ? 94 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275classProp("active", ctx.active() === ctx.allCategory);
      \u0275\u0275attribute("aria-pressed", ctx.active() === ctx.allCategory);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("All ", ctx.activeTab());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.sourceItems().length);
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.categoryTree());
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.resultHeading());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate4("", ctx.rangeStart(), "\u2013", ctx.rangeEnd(), " of ", ctx.visible().length, " ", ctx.resultNoun(ctx.visible().length));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.activeTab() === "Videos" ? 118 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional((tmp_26_0 = ctx.featuredVisible()) ? 119 : -1, tmp_26_0);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.gridPosts());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.visible().length ? 124 : -1);
    }
  }, styles: ['\n\n.insights-hero-grid[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(0, 0.9fr) minmax(560px, 1.1fr);\n  align-items: center;\n}\n.insights-hero-resources[_ngcontent-%COMP%] {\n  margin-top: 22px;\n}\n.insights-hero-resources[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 9px;\n  color: rgba(255, 255, 255, 0.62);\n  font: 700 9px/1 var(--mono);\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.insights-hero-resources[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 7px;\n}\n.insights-hero-resources[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  min-width: 0;\n  min-height: 38px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 7px;\n  padding: 8px 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 9px;\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.78);\n  font: 650 10px/1.2 var(--body);\n  text-decoration: none;\n  transition:\n    border-color 0.2s,\n    background 0.2s,\n    transform 0.2s;\n}\n.insights-hero-resources[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, \n.insights-hero-resources[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-color: rgba(112, 168, 255, 0.72);\n  background: rgba(21, 101, 216, 0.34);\n  color: #fff;\n  transform: translateY(-1px);\n}\n.insights-hero-resources[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: grid;\n  min-width: 23px;\n  height: 23px;\n  place-items: center;\n  padding: 0 5px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #9fc8ff;\n  font: 700 8px/1 var(--mono);\n}\n.insights-hub-visual[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: visible;\n  width: 100%;\n  min-height: 530px;\n  isolation: isolate;\n}\n.insights-hub-stage[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 760px;\n  height: 760px;\n  transform: translate(-50%, -50%) scale(0.69);\n  transform-origin: center;\n}\n.hub-pulse[_ngcontent-%COMP%], \n.hub-orbit[_ngcontent-%COMP%], \n.hub-center[_ngcontent-%COMP%], \n.hub-item[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.hub-pulse[_ngcontent-%COMP%] {\n  z-index: 1;\n  border: 2px solid rgba(77, 148, 255, 0.14);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_insights-hub-pulse 5s ease-out infinite;\n}\n.hub-pulse-two[_ngcontent-%COMP%] {\n  animation-delay: 1.7s;\n}\n.hub-pulse-three[_ngcontent-%COMP%] {\n  animation-delay: 3.4s;\n}\n.hub-orbit[_ngcontent-%COMP%] {\n  z-index: 2;\n  border: 1px solid rgba(77, 148, 255, 0.15);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: _ngcontent-%COMP%_insights-hub-spin 30s linear infinite;\n}\n.hub-orbit-one[_ngcontent-%COMP%] {\n  width: 300px;\n  height: 300px;\n}\n.hub-orbit-two[_ngcontent-%COMP%] {\n  width: 480px;\n  height: 480px;\n  animation-duration: 44s;\n  animation-direction: reverse;\n}\n.hub-orbit[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #3987ff;\n  box-shadow: 0 0 14px #3987ff;\n}\n.hub-orbit-one[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.hub-orbit-one[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child {\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 50%);\n}\n.hub-orbit-two[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:first-child {\n  top: 50%;\n  right: 0;\n  transform: translate(50%, -50%);\n}\n.hub-orbit-two[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:last-child {\n  top: 50%;\n  left: 0;\n  transform: translate(-50%, -50%);\n}\n.hub-rotor[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  transform-origin: center;\n  animation: _ngcontent-%COMP%_insights-hub-spin 60s linear infinite;\n}\n.hub-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n}\n.hub-connector[_ngcontent-%COMP%] {\n  fill: none;\n  stroke: rgba(77, 148, 255, 0.22);\n  stroke-width: 1.3;\n}\n.hub-connector-flow[_ngcontent-%COMP%] {\n  stroke: rgba(77, 148, 255, 0.58);\n  stroke-width: 1.8;\n  stroke-dasharray: 5 4;\n  animation: _ngcontent-%COMP%_insights-hub-dash 1.4s linear infinite;\n}\n.hub-particle[_ngcontent-%COMP%] {\n  fill: #3987ff;\n  filter: url(#insights-hub-glow);\n}\n.hub-item[_ngcontent-%COMP%] {\n  width: 0;\n  height: 0;\n  transform: rotate(var(--hub-angle)) translate(285px) rotate(calc(-1 * var(--hub-angle)));\n}\n.hub-counter-spin[_ngcontent-%COMP%] {\n  position: absolute;\n  transform-origin: 0 0;\n  animation: _ngcontent-%COMP%_insights-hub-counter-spin 60s linear infinite;\n}\n.hub-card[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 190px;\n  padding: 13px 15px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 14px;\n  background: rgba(9, 24, 52, 0.96);\n  color: #fff;\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);\n  transform: translate(-50%, -50%);\n}\n.hub-card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 7px;\n}\n.hub-card-icon[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 36px;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n  background: rgba(0, 102, 255, 0.14);\n  font-size: 17px;\n}\n.hub-card-top[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  padding: 4px 7px;\n  border-radius: 4px;\n  background: rgba(0, 102, 255, 0.15);\n  color: #70a8ff;\n  font: 700 7px/1 var(--mono);\n  letter-spacing: 0.08em;\n}\n.hub-card[_ngcontent-%COMP%]    > strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  font: 700 12px/1.35 var(--body);\n}\n.hub-card[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.48);\n  font: 500 9px/1.5 var(--body);\n}\n.hub-card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-top: 7px;\n  padding-top: 6px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.48);\n  font: 600 7px/1 var(--mono);\n}\n.hub-card-meta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #70a8ff;\n  font-size: 11px;\n  font-style: normal;\n}\n.hub-card-green[_ngcontent-%COMP%]   .hub-card-icon[_ngcontent-%COMP%], \n.hub-card-green[_ngcontent-%COMP%]   .hub-card-top[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #4ade80;\n  background: rgba(34, 197, 94, 0.14);\n}\n.hub-card-orange[_ngcontent-%COMP%]   .hub-card-icon[_ngcontent-%COMP%], \n.hub-card-orange[_ngcontent-%COMP%]   .hub-card-top[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #ffa940;\n  background: rgba(255, 138, 0, 0.14);\n}\n.hub-card-cyan[_ngcontent-%COMP%]   .hub-card-icon[_ngcontent-%COMP%], \n.hub-card-cyan[_ngcontent-%COMP%]   .hub-card-top[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #22d3ee;\n  background: rgba(6, 182, 212, 0.14);\n}\n.hub-card-purple[_ngcontent-%COMP%]   .hub-card-icon[_ngcontent-%COMP%], \n.hub-card-purple[_ngcontent-%COMP%]   .hub-card-top[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #a78bfa;\n  background: rgba(139, 92, 246, 0.14);\n}\n.hub-card-red[_ngcontent-%COMP%]   .hub-card-icon[_ngcontent-%COMP%], \n.hub-card-red[_ngcontent-%COMP%]   .hub-card-top[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #f87171;\n  background: rgba(239, 68, 68, 0.14);\n}\n.hub-center[_ngcontent-%COMP%] {\n  z-index: 30;\n  transform: translate(-50%, -50%);\n}\n.hub-center-ring[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  width: 150px;\n  height: 150px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid rgba(77, 148, 255, 0.42);\n  border-radius: 50%;\n  background: #081a38;\n  box-shadow: 0 0 45px rgba(0, 102, 255, 0.28);\n  animation: _ngcontent-%COMP%_insights-hub-float 4s ease-in-out infinite;\n}\n.hub-center-ring[_ngcontent-%COMP%]::before {\n  position: absolute;\n  inset: -11px;\n  border: 2px solid rgba(77, 148, 255, 0.16);\n  border-radius: 50%;\n  content: "";\n}\n.hub-center-ring[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 108px;\n  height: auto;\n  filter: brightness(1.3);\n}\n.hub-center-ring[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  color: rgba(255, 255, 255, 0.58);\n  font: 700 8px/1 var(--mono);\n  letter-spacing: 0.14em;\n}\n@keyframes _ngcontent-%COMP%_insights-hub-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_insights-hub-counter-spin {\n  to {\n    transform: rotate(-360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_insights-hub-dash {\n  to {\n    stroke-dashoffset: -18;\n  }\n}\n@keyframes _ngcontent-%COMP%_insights-hub-pulse {\n  from {\n    width: 120px;\n    height: 120px;\n    opacity: 0.5;\n  }\n  to {\n    width: 820px;\n    height: 820px;\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_insights-hub-float {\n  50% {\n    transform: translateY(-6px);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hub-pulse[_ngcontent-%COMP%], \n   .hub-orbit[_ngcontent-%COMP%], \n   .hub-rotor[_ngcontent-%COMP%], \n   .hub-counter-spin[_ngcontent-%COMP%], \n   .hub-center-ring[_ngcontent-%COMP%], \n   .hub-connector-flow[_ngcontent-%COMP%] {\n    animation: none;\n  }\n}\n@media (max-width: 900px) {\n  .insights-hero-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .insights-hub-visual[_ngcontent-%COMP%] {\n    min-height: 530px;\n  }\n  .insights-hub-stage[_ngcontent-%COMP%] {\n    transform: translate(-50%, -50%) scale(0.68);\n  }\n}\n@media (max-width: 560px) {\n  .insights-hub-visual[_ngcontent-%COMP%] {\n    min-height: 390px;\n  }\n  .insights-hub-stage[_ngcontent-%COMP%] {\n    transform: translate(-50%, -50%) scale(0.49);\n  }\n  .insights-hero-resources[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.insights-discovery[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 30px 0 0;\n  scroll-margin-top: 90px;\n}\n.insights-tabs-carousel[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  min-width: 0;\n}\n.insights-tabs-viewport[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  overflow-x: auto;\n  overscroll-behavior-inline: contain;\n  scrollbar-width: none;\n}\n.insights-tabs-viewport[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.insights-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  width: max-content;\n  min-width: 100%;\n  gap: 12px;\n  padding: 2px;\n}\n.insights-tab-arrow[_ngcontent-%COMP%] {\n  display: grid;\n  flex: 0 0 40px;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border: 1px solid #b9d4fb;\n  border-radius: 50%;\n  background: #fff;\n  color: #1565d8;\n  box-shadow: 0 6px 14px rgba(21, 101, 216, 0.13);\n  cursor: pointer;\n}\n.insights-tab-arrow[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.insights-tab-arrow[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: default;\n  box-shadow: none;\n}\n.insights-tab-arrow[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid rgba(21, 101, 216, 0.28);\n  outline-offset: 3px;\n}\n.insights-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  white-space: nowrap;\n  min-height: 46px;\n  padding: 10px 20px;\n  border: 1px solid #dfe4eb;\n  border-radius: 999px;\n  background: #fff;\n  color: #253852;\n  font: 700 13px/1 var(--body);\n  cursor: pointer;\n  transition:\n    color 0.2s,\n    background 0.2s,\n    box-shadow 0.2s;\n}\n.insights-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-grid;\n  place-items: center;\n  min-width: 22px;\n  height: 22px;\n  margin-left: 6px;\n  padding: 0 6px;\n  border-radius: 999px;\n  background: #edf4ff;\n  color: #1565d8;\n  font: 700 10px/1 var(--mono);\n}\n.insights-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f0f5fc;\n}\n.insights-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #1565d8,\n      #0b4da9);\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(21, 101, 216, 0.24);\n}\n.insights-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.17);\n  color: #fff;\n}\n.insights-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible, \n.insights-search[_ngcontent-%COMP%]:focus-within {\n  outline: 3px solid rgba(21, 101, 216, 0.28);\n  outline-offset: 3px;\n}\n.insights-search[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: auto;\n  align-items: center;\n  width: min(360px, 100%);\n  min-height: 54px;\n  padding: 0 14px;\n  border: 1px solid #cfddf0;\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 12px 32px rgba(4, 30, 66, 0.07);\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.insights-search[_ngcontent-%COMP%]:focus-within {\n  border-color: #1565d8;\n  box-shadow: 0 14px 34px rgba(21, 101, 216, 0.12);\n}\n.insights-search[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: 22px;\n  height: 22px;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-width: 2;\n  color: #517091;\n}\n.insights-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  min-width: 0;\n  flex: 1;\n  padding: 14px 10px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #08234a;\n  font: 600 14px/1.2 var(--body);\n}\n.insights-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #7c8da5;\n}\n.insights-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  border: 0;\n  border-radius: 50%;\n  background: #edf4ff;\n  color: #164bba;\n  font-size: 20px;\n  cursor: pointer;\n}\n.insights-topic-branch[_ngcontent-%COMP%] {\n  overflow: hidden;\n  border: 1px solid #d6e2f3;\n  border-radius: 14px;\n  background: #f8fbff;\n}\n.insights-topic-branch[_ngcontent-%COMP%]   .insights-topic-main[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto 18px;\n  border: 0;\n  border-radius: 13px;\n  background: transparent;\n  box-shadow: none;\n}\n.insights-topic-branch[_ngcontent-%COMP%]   .insights-topic-main[_ngcontent-%COMP%]:hover {\n  transform: none;\n}\n.insights-topic-main[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #55708f;\n  font-size: 18px;\n  font-style: normal;\n  line-height: 1;\n  text-align: center;\n  transition: transform 0.2s;\n}\n.insights-topic-main[aria-expanded=true][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.insights-topic-main.has-selection[_ngcontent-%COMP%]:not(.active) {\n  color: #0d59bf;\n  background: #edf5ff;\n}\n.insights-topic-branch[_ngcontent-%COMP%]   .insights-topic-main.active[_ngcontent-%COMP%], \n.insights-topic-branch[_ngcontent-%COMP%]   .insights-topic-main.active[_ngcontent-%COMP%]:hover {\n  color: #1565d8;\n  background: #edf5ff;\n}\n.insights-topic-branch[_ngcontent-%COMP%]   .insights-topic-main.active[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  background: #dcecff;\n  color: #1565d8;\n}\n.insights-topic-branch[_ngcontent-%COMP%]   .insights-topic-main.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1565d8;\n}\n.insights-subtopics[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 3px;\n  margin: 0 9px 9px 24px;\n  padding: 7px 0 0 12px;\n  border-left: 1px solid #bfd3eb;\n  animation: _ngcontent-%COMP%_insight-category-open 0.2s ease-out;\n}\n.insights-subtopics[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  min-height: 38px;\n  padding: 8px 10px;\n  border: 0;\n  border-radius: 8px;\n  background: transparent;\n  color: #526984;\n  font: 600 11px/1.35 var(--body);\n  text-align: left;\n  cursor: pointer;\n}\n.insights-subtopics[_ngcontent-%COMP%]   .insights-submenu[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto 16px;\n  width: 100%;\n}\n.insights-submenu[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #6c8099;\n  font-size: 15px;\n  font-style: normal;\n  text-align: center;\n  transition: transform 0.2s;\n}\n.insights-submenu[aria-expanded=true][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.insights-submenu.has-selection[_ngcontent-%COMP%]:not(.active) {\n  color: #0c58bd;\n  background: #fff;\n}\n.insights-products[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 2px;\n  margin: 1px 0 5px 10px;\n  padding: 4px 0 4px 10px;\n  border-left: 1px dashed #c4d5e9;\n}\n.insights-products[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 34px;\n  padding: 7px 8px;\n  color: #657b96;\n  font-size: 10.5px;\n}\n.insights-products[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  color: #0c58bd;\n  background: #edf5ff;\n  box-shadow: inset 3px 0 #1565d8;\n}\n.insights-products[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  min-width: 18px;\n  color: #71859d;\n}\n.insights-subtopics[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, \n.insights-subtopics[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1565d8;\n  box-shadow: 0 5px 16px rgba(12, 71, 145, 0.08);\n}\n.insights-subtopics[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  box-shadow: inset 3px 0 #1565d8, 0 5px 16px rgba(12, 71, 145, 0.08);\n}\n.insights-subtopics[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #1565d8;\n  font: 700 9px/1 var(--mono);\n}\n.insights-subtopics[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%], \n.insights-subtopics[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #1565d8;\n}\n@keyframes _ngcontent-%COMP%_insight-category-open {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.insights-lead[_ngcontent-%COMP%], \n.insights-card[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\n.insights-lead-media[_ngcontent-%COMP%], \n.insights-card-media[_ngcontent-%COMP%] {\n  position: relative;\n}\n.insights-card-media[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: -18px -18px 16px;\n  border-radius: 15px 15px 0 0;\n}\n.insights-card[_ngcontent-%COMP%]   .insights-card-media[_ngcontent-%COMP%]   .blog-cover[_ngcontent-%COMP%] {\n  width: 100%;\n  margin: 0;\n  border-radius: 0;\n}\n.insights-play[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: grid;\n  place-items: center;\n  width: 66px;\n  height: 66px;\n  border: 2px solid rgba(255, 255, 255, 0.85);\n  border-radius: 50%;\n  background: rgba(5, 39, 87, 0.82);\n  color: #fff;\n  padding-left: 4px;\n  font: 700 27px/1 var(--body);\n  box-shadow: 0 12px 30px rgba(2, 20, 48, 0.28);\n  transform: translate(-50%, -50%);\n  transition: transform 0.22s, background 0.22s;\n}\n.insights-lead[_ngcontent-%COMP%]:hover   .insights-play[_ngcontent-%COMP%], \n.insights-card[_ngcontent-%COMP%]:hover   .insights-play[_ngcontent-%COMP%] {\n  background: #1565d8;\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.insights-empty[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  padding: 56px 24px;\n  border: 1px dashed #b9cce5;\n  border-radius: 22px;\n  background: #f8fbff;\n  text-align: center;\n}\n.insights-empty[_ngcontent-%COMP%]    > svg[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-width: 2;\n  color: #3972b7;\n}\n.insights-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 10px 0 5px;\n  color: #08234a;\n}\n.insights-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #657b96;\n}\n.insights-toolbar[_ngcontent-%COMP%] {\n  scroll-margin-top: 110px;\n}\n.insights-pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #d3e1ff;\n}\n.insights-page-numbers[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.insights-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 44px;\n  min-height: 44px;\n  padding: 10px 14px;\n  border: 1px solid #cbdcff;\n  border-radius: 10px;\n  background: #fff;\n  color: #164bba;\n  font: inherit;\n  font-weight: 600;\n  cursor: pointer;\n}\n.insights-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #edf4ff;\n  border-color: #1261ff;\n}\n.insights-pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #1261ff;\n  border-color: #1261ff;\n  color: #fff;\n}\n.insights-pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%]:hover {\n  background: #084bd4;\n}\n.insights-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #1261ff;\n  outline-offset: 3px;\n}\n.insights-pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n.insights-page-gap[_ngcontent-%COMP%] {\n  align-self: center;\n  color: #66738a;\n}\n@media (max-width: 480px) {\n  .insights-discovery[_ngcontent-%COMP%] {\n    padding-top: 22px;\n  }\n  .insights-tabs-carousel[_ngcontent-%COMP%] {\n    gap: 8px;\n  }\n  .insights-tab-arrow[_ngcontent-%COMP%] {\n    flex-basis: 36px;\n    width: 36px;\n    height: 36px;\n  }\n  .insights-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding-inline: 14px;\n  }\n  .insights-page-numbers[_ngcontent-%COMP%] {\n    order: -1;\n    width: 100%;\n  }\n}\n@media (max-width: 760px) {\n  .insights-discovery[_ngcontent-%COMP%] {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .insights-search[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.insights-channel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n  border: 1px solid #cbdcff;\n  border-radius: 16px;\n  background: #f5f9ff;\n  color: #23456b;\n  font-size: 14px;\n}\n.insights-channel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.insights-channel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #095bc7;\n  font-weight: 700;\n}\n/*# sourceMappingURL=insights.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InsightsPage, [{
    type: Component,
    args: [{ selector: "xh-insights-page", standalone: true, imports: [], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `
    <div class="ppage as-page" id="ipage">
      <div class="pp-hero insights-hero">
        <span class="orb orb-1"></span>
        <div class="wrap">
          <div class="pp-crumb">{{ page.c }}</div>
          <div class="insights-hero-grid">
            <div class="insights-hero-copy">
              <span class="insights-kicker">Resource Center</span>
              <h1>{{ page.t }}</h1>
              <p class="pp-tagline">{{ page.g }}</p>
              <div class="insights-hero-stats" aria-label="Insights overview">
                <article>
                  <b>{{ posts().length }}</b>
                  <span>Published articles</span>
                </article>
                <article>
                  <b>{{ categoryTree().length }}</b>
                  <span>Topic collections</span>
                </article>
                <article>
                  <b>{{ active() === allCategory ? 'Live' : categoryCount(active()) }}</b>
                  <span>{{ active() === allCategory ? 'CMS synced' : 'Posts in topic' }}</span>
                </article>
              </div>
              <nav class="insights-hero-resources" aria-label="Explore Insights resources">
                <span>Explore by format</span>
                <div>
                  @for (tab of tabs; track tab) {
                    <a
                      href="#insights-library"
                      [class.active]="activeTab() === tab"
                      [attr.aria-current]="activeTab() === tab ? 'page' : null"
                      (click)="selectTab(tab)"
                    >
                      <span>{{ tab }}</span><b>{{ tabCount(tab) }}</b>
                    </a>
                  }
                </div>
              </nav>
            </div>

            <div class="insights-hub-visual" role="img" aria-label="Animated XcellHost insights resource hub">
              <div class="insights-hub-stage" aria-hidden="true">
                <span class="hub-pulse hub-pulse-one"></span>
                <span class="hub-pulse hub-pulse-two"></span>
                <span class="hub-pulse hub-pulse-three"></span>
                <span class="hub-orbit hub-orbit-one"><i></i><i></i></span>
                <span class="hub-orbit hub-orbit-two"><i></i><i></i></span>

                <div class="hub-rotor">
                  <svg class="hub-lines" viewBox="0 0 760 760">
                    <defs>
                      <filter id="insights-hub-glow"><feGaussianBlur stdDeviation="2" result="glow"/><feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
                      <path id="hub-spoke-0" d="M380 292 L380 175"/><path id="hub-spoke-1" d="M442 318 L525 235"/>
                      <path id="hub-spoke-2" d="M468 380 L585 380"/><path id="hub-spoke-3" d="M442 442 L525 525"/>
                      <path id="hub-spoke-4" d="M380 468 L380 585"/><path id="hub-spoke-5" d="M318 442 L235 525"/>
                      <path id="hub-spoke-6" d="M292 380 L175 380"/><path id="hub-spoke-7" d="M318 318 L235 235"/>
                    </defs>
                    @for (spoke of hubSpokes; track spoke) {
                      <use [attr.href]="'#hub-spoke-' + spoke" class="hub-connector"/>
                      <use [attr.href]="'#hub-spoke-' + spoke" class="hub-connector hub-connector-flow"/>
                      <circle r="3.5" class="hub-particle"><animateMotion [attr.dur]="(2.6 + (spoke % 4) * .35) + 's'" repeatCount="indefinite"><mpath [attr.href]="'#hub-spoke-' + spoke"/></animateMotion></circle>
                    }
                  </svg>

                  @for (card of hubCards; track card.label; let index = $index) {
                    <div class="hub-item" [style.--hub-angle]="(-90 + index * 45) + 'deg'">
                      <div class="hub-counter-spin">
                        <article class="hub-card" [class]="'hub-card hub-card-' + card.tone">
                          <div class="hub-card-top"><span class="hub-card-icon">{{ card.icon }}</span><b>{{ card.label }}</b></div>
                          <strong>{{ card.title }}</strong>
                          <p>{{ card.description }}</p>
                          <div class="hub-card-meta"><span>{{ card.meta }}</span><i>&rarr;</i></div>
                        </article>
                      </div>
                    </div>
                  }
                </div>

                <div class="hub-center">
                  <div class="hub-center-ring">
                    <img src="/assets/images/xcellhost-login-logo.png" alt="" />
                    <span>INSIGHTS HUB</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="pp-body">
        <div class="wrap">
          @if (loading() && activeTab() === 'Blogs') {
            <p role="status">Loading insights...</p>
          } @else if (error() && activeTab() === 'Blogs') {
            <p role="alert">Blog content is temporarily unavailable. Please try again shortly.</p>
          }
            <section class="insights-discovery" id="insights-library" aria-label="Insight content filters">
              <div class="insights-tabs-carousel">
                <button type="button" class="insights-tab-arrow" aria-label="Scroll resource tabs left"
                  [disabled]="!canScrollTabsLeft()" (click)="scrollTabs(-1)">
                  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
                </button>
                <div class="insights-tabs-viewport" #tabScroller (scroll)="updateTabScroll()">
                  <div class="insights-tabs" role="tablist" aria-label="Insight content type">
                    @for (tab of tabs; track tab) {
                      <button
                        type="button"
                        role="tab"
                        [class.active]="tab === activeTab()"
                        [attr.aria-selected]="tab === activeTab()"
                        (click)="selectTab(tab)"
                      >
                        {{ tab }} <span>{{ tabCount(tab) }}</span>
                      </button>
                    }
                  </div>
                </div>
                <button type="button" class="insights-tab-arrow" aria-label="Scroll resource tabs right"
                  [disabled]="!canScrollTabsRight()" (click)="scrollTabs(1)">
                  <svg aria-hidden="true" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
                </button>
              </div>
              <label class="insights-search">
                <svg aria-hidden="true" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="6.5"></circle>
                  <path d="m16 16 4 4"></path>
                </svg>
                <input
                  type="search"
                  placeholder="Search insights..."
                  [value]="query()"
                  (input)="search($event)"
                />
                @if (query()) {
                  <button type="button" aria-label="Clear search" (click)="clearSearch()">&times;</button>
                }
              </label>
            </section>
            <section class="insights-shell">
              <aside class="insights-sidebar">
                <div class="insights-sidebar-card">
                  <div class="pp-sec">Browse by topic</div>
                  <div class="insights-topics" role="group" aria-label="Filter insights by category">
                    <button class="insights-topic insights-topic-all" [class.active]="active() === allCategory"
                      [attr.aria-pressed]="active() === allCategory" (click)="selectAllCategories()">
                      <span>All {{ activeTab() }}</span><b>{{ sourceItems().length }}</b>
                    </button>
                    @for (branch of categoryTree(); track branch.name) {
                      <div class="insights-topic-branch">
                        <button class="insights-topic insights-topic-main"
                          [class.active]="activeMain() === branch.name && !activeSub()"
                          [class.has-selection]="activeMain() === branch.name"
                          [attr.aria-expanded]="expandedMain() === branch.name"
                          [attr.aria-controls]="categoryPanelId(branch.name)"
                          (click)="selectMainCategory(branch.name)">
                          <span>{{ branch.name }}</span><b>{{ branch.count }}</b>
                          <i aria-hidden="true">&#8964;</i>
                        </button>
                        @if (expandedMain() === branch.name) {
                          <div class="insights-subtopics" [id]="categoryPanelId(branch.name)">
                            @for (child of branch.children; track child.name) {
                              <button type="button" class="insights-submenu"
                                [class.active]="activeSub() === child.name && !activeProduct()"
                                [class.has-selection]="activeSub() === child.name"
                                [attr.aria-pressed]="activeSub() === child.name"
                                [attr.aria-expanded]="expandedSub() === submenuKey(branch.name, child.name)"
                                (click)="selectSubCategory(branch.name, child.name)">
                                <span>{{ child.name }}</span><b>{{ child.count }}</b><i aria-hidden="true">&#8964;</i>
                              </button>
                              @if (expandedSub() === submenuKey(branch.name, child.name)) {
                                <div class="insights-products">
                                  @for (product of child.products; track product.name) {
                                    <button type="button"
                                      [class.active]="activeProduct() === product.name"
                                      [attr.aria-pressed]="activeProduct() === product.name"
                                      (click)="selectProduct(branch.name, child.name, product.name)">
                                      <span>{{ product.name }}</span><b>{{ product.count }}</b>
                                    </button>
                                  }
                                </div>
                              }
                            }
                          </div>
                        }
                      </div>
                    }
                  </div>
                </div>
              </aside>
              <div class="insights-main">
                <div class="insights-toolbar" #results tabindex="-1">
                  <div>
                    <span class="insights-toolbar-label">Showing</span>
                    <h2>{{ resultHeading() }}</h2>
                  </div>
                  <p role="status">{{ rangeStart() }}\u2013{{ rangeEnd() }} of {{ visible().length }} {{ resultNoun(visible().length) }}</p>
                </div>
                @if (activeTab() === 'Videos') {
                  <div class="insights-channel" role="status">
                    <p>{{ videoStatus() === 'cached' ? 'Showing saved channel uploads. Live updates are temporarily unavailable.' : 'Latest uploads from XcellHost Cloud Services' }}</p>
                    <a href="https://www.youtube.com/@XcellHostCloudServices/videos" target="_blank" rel="noopener noreferrer">View YouTube channel &rarr;</a>
                  </div>
                }
                @if (featuredVisible(); as lead) {
                  <a
                    class="insights-lead"
                    (click)="openInsight($event, lead)"
                    [attr.href]="insightHref(lead)"
                    [attr.target]="isExternal(lead) ? '_blank' : null"
                    [attr.rel]="isExternal(lead) ? 'noopener noreferrer' : null"
                  >
                    <div class="insights-lead-media">
                      @if (lead.coverImageUrl) {
                        <img
                          class="insights-lead-cover"
                          [src]="lead.coverImageUrl"
                          [alt]="lead.coverImage?.alternativeText || lead.title"
                        />
                      }
                      @if (lead.kind === 'video') {
                        <span class="insights-play" aria-hidden="true">&#9654;</span>
                      }
                    </div>
                    <div class="insights-lead-copy">
                      <span class="insights-feature-label">{{ leadLabel() }}</span>
                      <span class="bl-k">{{ lead.category }}</span>
                      <h3>{{ lead.title }}</h3>
                      <p>{{ lead.description }}</p>
                      <div class="insights-feature-meta">
                        @if (lead.kind === 'case-study') {
                          <span>{{ lead.metric }}</span>
                          <span>{{ lead.profile }}</span>
                          <span>Read customer story</span>
                        } @else {
                          <span>{{ formatDate(lead.date) }}</span>
                          <span>{{ lead.author }}</span>
                          <span>{{ isExternal(lead) ? resourceAction(lead) : formatTime(lead.time) }}</span>
                        }
                      </div>
                    </div>
                  </a>
                }
                <div class="insights-grid">
                  @for (post of gridPosts(); track post.documentId) {
                    <a
                      class="bl insights-card"
                      (click)="openInsight($event, post)"
                      [attr.href]="insightHref(post)"
                      [attr.target]="isExternal(post) ? '_blank' : null"
                      [attr.rel]="isExternal(post) ? 'noopener noreferrer' : null"
                    >
                      <div class="insights-card-media">
                      @if (post.coverImageUrl) {
                        <img
                          class="blog-cover"
                          [src]="post.coverImageUrl"
                          [alt]="post.coverImage?.alternativeText || post.title"
                        />
                      }
                        @if (post.kind === 'video') {
                          <span class="insights-play" aria-hidden="true">&#9654;</span>
                        }
                      </div>
                      <div class="insights-card-meta">
                        <span class="bl-k">{{ post.category }}</span>
                        <span class="insights-card-date">{{ post.kind === 'case-study' ? post.metric : formatDate(post.date) }}</span>
                      </div>
                      <h3>{{ post.title }}</h3>
                      <p>{{ post.description }}</p>
                      <span class="bl-m">
                        @if (post.kind === 'case-study') {
                          {{ post.services?.join(' \xB7 ') || post.profile }} \xB7 Read case study
                        } @else {
                          {{ post.author }} \xB7 {{ isExternal(post) ? resourceAction(post) : readTime(post) + ' read' }}
                        }
                      </span>
                    </a>
                  } @empty {
                    @if (!visible().length) {
                      <div class="insights-empty">
                        <svg aria-hidden="true" viewBox="0 0 48 48">
                          <circle cx="21" cy="21" r="12"></circle>
                          <path d="m30 30 9 9M8 8l32 32"></path>
                        </svg>
                        <h3>{{ activeTab() === 'Videos' && videoStatus() === 'loading' ? 'Loading channel videos...' : activeTab() === 'Videos' && videoStatus() === 'error' ? 'Videos temporarily unavailable' : 'No matching ' + activeTab().toLowerCase() }}</h3>
                        <p>{{ emptyHelp() }}</p>
                      </div>
                    }
                  }
                </div>
                @if (visible().length) {
                  <nav class="insights-pagination" aria-label="Insights pagination">
                    <button type="button" [disabled]="currentPage() === 1"
                      (click)="goToPage(currentPage() - 1, results)">Previous</button>
                    <div class="insights-page-numbers">
                      @for (pageNumber of pageNumbers(); track $index) {
                        @if (pageNumber === null) {
                          <span class="insights-page-gap" aria-hidden="true">\u2026</span>
                        } @else {
                          <button type="button" [class.active]="pageNumber === currentPage()"
                            [attr.aria-current]="pageNumber === currentPage() ? 'page' : null"
                            [attr.aria-label]="'Page ' + pageNumber"
                            (click)="goToPage(pageNumber, results)">{{ pageNumber }}</button>
                        }
                      }
                    </div>
                    <button type="button" [disabled]="currentPage() === totalPages()"
                      (click)="goToPage(currentPage() + 1, results)">Next</button>
                  </nav>
                }
              </div>
            </section>
        </div>
      </div>
    </div>
  `, styles: ['/* src/app/pages/insights.page.css */\n.insights-hero-grid {\n  grid-template-columns: minmax(0, 0.9fr) minmax(560px, 1.1fr);\n  align-items: center;\n}\n.insights-hero-resources {\n  margin-top: 22px;\n}\n.insights-hero-resources > span {\n  display: block;\n  margin-bottom: 9px;\n  color: rgba(255, 255, 255, 0.62);\n  font: 700 9px/1 var(--mono);\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n.insights-hero-resources > div {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 7px;\n}\n.insights-hero-resources a {\n  display: flex;\n  min-width: 0;\n  min-height: 38px;\n  align-items: center;\n  justify-content: space-between;\n  gap: 7px;\n  padding: 8px 10px;\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 9px;\n  background: rgba(255, 255, 255, 0.07);\n  color: rgba(255, 255, 255, 0.78);\n  font: 650 10px/1.2 var(--body);\n  text-decoration: none;\n  transition:\n    border-color 0.2s,\n    background 0.2s,\n    transform 0.2s;\n}\n.insights-hero-resources a:hover,\n.insights-hero-resources a.active {\n  border-color: rgba(112, 168, 255, 0.72);\n  background: rgba(21, 101, 216, 0.34);\n  color: #fff;\n  transform: translateY(-1px);\n}\n.insights-hero-resources a b {\n  display: grid;\n  min-width: 23px;\n  height: 23px;\n  place-items: center;\n  padding: 0 5px;\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #9fc8ff;\n  font: 700 8px/1 var(--mono);\n}\n.insights-hub-visual {\n  position: relative;\n  overflow: visible;\n  width: 100%;\n  min-height: 530px;\n  isolation: isolate;\n}\n.insights-hub-stage {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 760px;\n  height: 760px;\n  transform: translate(-50%, -50%) scale(0.69);\n  transform-origin: center;\n}\n.hub-pulse,\n.hub-orbit,\n.hub-center,\n.hub-item {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n}\n.hub-pulse {\n  z-index: 1;\n  border: 2px solid rgba(77, 148, 255, 0.14);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: insights-hub-pulse 5s ease-out infinite;\n}\n.hub-pulse-two {\n  animation-delay: 1.7s;\n}\n.hub-pulse-three {\n  animation-delay: 3.4s;\n}\n.hub-orbit {\n  z-index: 2;\n  border: 1px solid rgba(77, 148, 255, 0.15);\n  border-radius: 50%;\n  transform: translate(-50%, -50%);\n  animation: insights-hub-spin 30s linear infinite;\n}\n.hub-orbit-one {\n  width: 300px;\n  height: 300px;\n}\n.hub-orbit-two {\n  width: 480px;\n  height: 480px;\n  animation-duration: 44s;\n  animation-direction: reverse;\n}\n.hub-orbit i {\n  position: absolute;\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: #3987ff;\n  box-shadow: 0 0 14px #3987ff;\n}\n.hub-orbit-one i:first-child {\n  top: 0;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.hub-orbit-one i:last-child {\n  bottom: 0;\n  left: 50%;\n  transform: translate(-50%, 50%);\n}\n.hub-orbit-two i:first-child {\n  top: 50%;\n  right: 0;\n  transform: translate(50%, -50%);\n}\n.hub-orbit-two i:last-child {\n  top: 50%;\n  left: 0;\n  transform: translate(-50%, -50%);\n}\n.hub-rotor {\n  position: absolute;\n  inset: 0;\n  z-index: 10;\n  transform-origin: center;\n  animation: insights-hub-spin 60s linear infinite;\n}\n.hub-lines {\n  position: absolute;\n  inset: 0;\n}\n.hub-connector {\n  fill: none;\n  stroke: rgba(77, 148, 255, 0.22);\n  stroke-width: 1.3;\n}\n.hub-connector-flow {\n  stroke: rgba(77, 148, 255, 0.58);\n  stroke-width: 1.8;\n  stroke-dasharray: 5 4;\n  animation: insights-hub-dash 1.4s linear infinite;\n}\n.hub-particle {\n  fill: #3987ff;\n  filter: url(#insights-hub-glow);\n}\n.hub-item {\n  width: 0;\n  height: 0;\n  transform: rotate(var(--hub-angle)) translate(285px) rotate(calc(-1 * var(--hub-angle)));\n}\n.hub-counter-spin {\n  position: absolute;\n  transform-origin: 0 0;\n  animation: insights-hub-counter-spin 60s linear infinite;\n}\n.hub-card {\n  position: absolute;\n  width: 190px;\n  padding: 13px 15px;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 14px;\n  background: rgba(9, 24, 52, 0.96);\n  color: #fff;\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);\n  transform: translate(-50%, -50%);\n}\n.hub-card-top {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 7px;\n}\n.hub-card-icon {\n  display: grid;\n  flex: 0 0 36px;\n  width: 36px;\n  height: 36px;\n  place-items: center;\n  border: 1px solid currentColor;\n  border-radius: 10px;\n  background: rgba(0, 102, 255, 0.14);\n  font-size: 17px;\n}\n.hub-card-top b {\n  padding: 4px 7px;\n  border-radius: 4px;\n  background: rgba(0, 102, 255, 0.15);\n  color: #70a8ff;\n  font: 700 7px/1 var(--mono);\n  letter-spacing: 0.08em;\n}\n.hub-card > strong {\n  display: block;\n  margin-bottom: 4px;\n  font: 700 12px/1.35 var(--body);\n}\n.hub-card > p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.48);\n  font: 500 9px/1.5 var(--body);\n}\n.hub-card-meta {\n  display: flex;\n  align-items: center;\n  margin-top: 7px;\n  padding-top: 6px;\n  border-top: 1px solid rgba(255, 255, 255, 0.08);\n  color: rgba(255, 255, 255, 0.48);\n  font: 600 7px/1 var(--mono);\n}\n.hub-card-meta i {\n  margin-left: auto;\n  color: #70a8ff;\n  font-size: 11px;\n  font-style: normal;\n}\n.hub-card-green .hub-card-icon,\n.hub-card-green .hub-card-top b {\n  color: #4ade80;\n  background: rgba(34, 197, 94, 0.14);\n}\n.hub-card-orange .hub-card-icon,\n.hub-card-orange .hub-card-top b {\n  color: #ffa940;\n  background: rgba(255, 138, 0, 0.14);\n}\n.hub-card-cyan .hub-card-icon,\n.hub-card-cyan .hub-card-top b {\n  color: #22d3ee;\n  background: rgba(6, 182, 212, 0.14);\n}\n.hub-card-purple .hub-card-icon,\n.hub-card-purple .hub-card-top b {\n  color: #a78bfa;\n  background: rgba(139, 92, 246, 0.14);\n}\n.hub-card-red .hub-card-icon,\n.hub-card-red .hub-card-top b {\n  color: #f87171;\n  background: rgba(239, 68, 68, 0.14);\n}\n.hub-center {\n  z-index: 30;\n  transform: translate(-50%, -50%);\n}\n.hub-center-ring {\n  position: relative;\n  display: flex;\n  width: 150px;\n  height: 150px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 2px solid rgba(77, 148, 255, 0.42);\n  border-radius: 50%;\n  background: #081a38;\n  box-shadow: 0 0 45px rgba(0, 102, 255, 0.28);\n  animation: insights-hub-float 4s ease-in-out infinite;\n}\n.hub-center-ring::before {\n  position: absolute;\n  inset: -11px;\n  border: 2px solid rgba(77, 148, 255, 0.16);\n  border-radius: 50%;\n  content: "";\n}\n.hub-center-ring img {\n  width: 108px;\n  height: auto;\n  filter: brightness(1.3);\n}\n.hub-center-ring span {\n  margin-top: 6px;\n  color: rgba(255, 255, 255, 0.58);\n  font: 700 8px/1 var(--mono);\n  letter-spacing: 0.14em;\n}\n@keyframes insights-hub-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n@keyframes insights-hub-counter-spin {\n  to {\n    transform: rotate(-360deg);\n  }\n}\n@keyframes insights-hub-dash {\n  to {\n    stroke-dashoffset: -18;\n  }\n}\n@keyframes insights-hub-pulse {\n  from {\n    width: 120px;\n    height: 120px;\n    opacity: 0.5;\n  }\n  to {\n    width: 820px;\n    height: 820px;\n    opacity: 0;\n  }\n}\n@keyframes insights-hub-float {\n  50% {\n    transform: translateY(-6px);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .hub-pulse,\n  .hub-orbit,\n  .hub-rotor,\n  .hub-counter-spin,\n  .hub-center-ring,\n  .hub-connector-flow {\n    animation: none;\n  }\n}\n@media (max-width: 900px) {\n  .insights-hero-grid {\n    grid-template-columns: 1fr;\n  }\n  .insights-hub-visual {\n    min-height: 530px;\n  }\n  .insights-hub-stage {\n    transform: translate(-50%, -50%) scale(0.68);\n  }\n}\n@media (max-width: 560px) {\n  .insights-hub-visual {\n    min-height: 390px;\n  }\n  .insights-hub-stage {\n    transform: translate(-50%, -50%) scale(0.49);\n  }\n  .insights-hero-resources > div {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n.insights-discovery {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  padding: 30px 0 0;\n  scroll-margin-top: 90px;\n}\n.insights-tabs-carousel {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  min-width: 0;\n}\n.insights-tabs-viewport {\n  flex: 1;\n  min-width: 0;\n  overflow-x: auto;\n  overscroll-behavior-inline: contain;\n  scrollbar-width: none;\n}\n.insights-tabs-viewport::-webkit-scrollbar {\n  display: none;\n}\n.insights-tabs {\n  display: flex;\n  width: max-content;\n  min-width: 100%;\n  gap: 12px;\n  padding: 2px;\n}\n.insights-tab-arrow {\n  display: grid;\n  flex: 0 0 40px;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n  border: 1px solid #b9d4fb;\n  border-radius: 50%;\n  background: #fff;\n  color: #1565d8;\n  box-shadow: 0 6px 14px rgba(21, 101, 216, 0.13);\n  cursor: pointer;\n}\n.insights-tab-arrow svg {\n  width: 20px;\n  height: 20px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 2.5;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.insights-tab-arrow:disabled {\n  opacity: 0.35;\n  cursor: default;\n  box-shadow: none;\n}\n.insights-tab-arrow:focus-visible {\n  outline: 3px solid rgba(21, 101, 216, 0.28);\n  outline-offset: 3px;\n}\n.insights-tabs button {\n  flex: 0 0 auto;\n  white-space: nowrap;\n  min-height: 46px;\n  padding: 10px 20px;\n  border: 1px solid #dfe4eb;\n  border-radius: 999px;\n  background: #fff;\n  color: #253852;\n  font: 700 13px/1 var(--body);\n  cursor: pointer;\n  transition:\n    color 0.2s,\n    background 0.2s,\n    box-shadow 0.2s;\n}\n.insights-tabs button span {\n  display: inline-grid;\n  place-items: center;\n  min-width: 22px;\n  height: 22px;\n  margin-left: 6px;\n  padding: 0 6px;\n  border-radius: 999px;\n  background: #edf4ff;\n  color: #1565d8;\n  font: 700 10px/1 var(--mono);\n}\n.insights-tabs button:hover:not(.active) {\n  background: #f0f5fc;\n}\n.insights-tabs button.active {\n  background:\n    linear-gradient(\n      135deg,\n      #1565d8,\n      #0b4da9);\n  color: #fff;\n  box-shadow: 0 8px 20px rgba(21, 101, 216, 0.24);\n}\n.insights-tabs button.active span {\n  background: rgba(255, 255, 255, 0.17);\n  color: #fff;\n}\n.insights-tabs button:focus-visible,\n.insights-search:focus-within {\n  outline: 3px solid rgba(21, 101, 216, 0.28);\n  outline-offset: 3px;\n}\n.insights-search {\n  display: flex;\n  margin-left: auto;\n  align-items: center;\n  width: min(360px, 100%);\n  min-height: 54px;\n  padding: 0 14px;\n  border: 1px solid #cfddf0;\n  border-radius: 15px;\n  background: #fff;\n  box-shadow: 0 12px 32px rgba(4, 30, 66, 0.07);\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.insights-search:focus-within {\n  border-color: #1565d8;\n  box-shadow: 0 14px 34px rgba(21, 101, 216, 0.12);\n}\n.insights-search > svg {\n  width: 22px;\n  height: 22px;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-width: 2;\n  color: #517091;\n}\n.insights-search input {\n  min-width: 0;\n  flex: 1;\n  padding: 14px 10px;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #08234a;\n  font: 600 14px/1.2 var(--body);\n}\n.insights-search input::placeholder {\n  color: #7c8da5;\n}\n.insights-search button {\n  width: 30px;\n  height: 30px;\n  border: 0;\n  border-radius: 50%;\n  background: #edf4ff;\n  color: #164bba;\n  font-size: 20px;\n  cursor: pointer;\n}\n.insights-topic-branch {\n  overflow: hidden;\n  border: 1px solid #d6e2f3;\n  border-radius: 14px;\n  background: #f8fbff;\n}\n.insights-topic-branch .insights-topic-main {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto 18px;\n  border: 0;\n  border-radius: 13px;\n  background: transparent;\n  box-shadow: none;\n}\n.insights-topic-branch .insights-topic-main:hover {\n  transform: none;\n}\n.insights-topic-main i {\n  color: #55708f;\n  font-size: 18px;\n  font-style: normal;\n  line-height: 1;\n  text-align: center;\n  transition: transform 0.2s;\n}\n.insights-topic-main[aria-expanded=true] i {\n  transform: rotate(180deg);\n}\n.insights-topic-main.has-selection:not(.active) {\n  color: #0d59bf;\n  background: #edf5ff;\n}\n.insights-topic-branch .insights-topic-main.active,\n.insights-topic-branch .insights-topic-main.active:hover {\n  color: #1565d8;\n  background: #edf5ff;\n}\n.insights-topic-branch .insights-topic-main.active b {\n  background: #dcecff;\n  color: #1565d8;\n}\n.insights-topic-branch .insights-topic-main.active i {\n  color: #1565d8;\n}\n.insights-subtopics {\n  display: grid;\n  gap: 3px;\n  margin: 0 9px 9px 24px;\n  padding: 7px 0 0 12px;\n  border-left: 1px solid #bfd3eb;\n  animation: insight-category-open 0.2s ease-out;\n}\n.insights-subtopics button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  min-height: 38px;\n  padding: 8px 10px;\n  border: 0;\n  border-radius: 8px;\n  background: transparent;\n  color: #526984;\n  font: 600 11px/1.35 var(--body);\n  text-align: left;\n  cursor: pointer;\n}\n.insights-subtopics .insights-submenu {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) auto 16px;\n  width: 100%;\n}\n.insights-submenu i {\n  color: #6c8099;\n  font-size: 15px;\n  font-style: normal;\n  text-align: center;\n  transition: transform 0.2s;\n}\n.insights-submenu[aria-expanded=true] i {\n  transform: rotate(180deg);\n}\n.insights-submenu.has-selection:not(.active) {\n  color: #0c58bd;\n  background: #fff;\n}\n.insights-products {\n  display: grid;\n  gap: 2px;\n  margin: 1px 0 5px 10px;\n  padding: 4px 0 4px 10px;\n  border-left: 1px dashed #c4d5e9;\n}\n.insights-products button {\n  min-height: 34px;\n  padding: 7px 8px;\n  color: #657b96;\n  font-size: 10.5px;\n}\n.insights-products button.active {\n  color: #0c58bd;\n  background: #edf5ff;\n  box-shadow: inset 3px 0 #1565d8;\n}\n.insights-products button b {\n  min-width: 18px;\n  color: #71859d;\n}\n.insights-subtopics button:hover,\n.insights-subtopics button.active {\n  background: #fff;\n  color: #1565d8;\n  box-shadow: 0 5px 16px rgba(12, 71, 145, 0.08);\n}\n.insights-subtopics button.active {\n  box-shadow: inset 3px 0 #1565d8, 0 5px 16px rgba(12, 71, 145, 0.08);\n}\n.insights-subtopics b {\n  color: #1565d8;\n  font: 700 9px/1 var(--mono);\n}\n.insights-subtopics button:hover i,\n.insights-subtopics button.active i {\n  color: #1565d8;\n}\n@keyframes insight-category-open {\n  from {\n    opacity: 0;\n    transform: translateY(-5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.insights-lead,\n.insights-card {\n  color: inherit;\n  text-decoration: none;\n}\n.insights-lead-media,\n.insights-card-media {\n  position: relative;\n}\n.insights-card-media {\n  overflow: hidden;\n  margin: -18px -18px 16px;\n  border-radius: 15px 15px 0 0;\n}\n.insights-card .insights-card-media .blog-cover {\n  width: 100%;\n  margin: 0;\n  border-radius: 0;\n}\n.insights-play {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  display: grid;\n  place-items: center;\n  width: 66px;\n  height: 66px;\n  border: 2px solid rgba(255, 255, 255, 0.85);\n  border-radius: 50%;\n  background: rgba(5, 39, 87, 0.82);\n  color: #fff;\n  padding-left: 4px;\n  font: 700 27px/1 var(--body);\n  box-shadow: 0 12px 30px rgba(2, 20, 48, 0.28);\n  transform: translate(-50%, -50%);\n  transition: transform 0.22s, background 0.22s;\n}\n.insights-lead:hover .insights-play,\n.insights-card:hover .insights-play {\n  background: #1565d8;\n  transform: translate(-50%, -50%) scale(1.08);\n}\n.insights-empty {\n  grid-column: 1 / -1;\n  padding: 56px 24px;\n  border: 1px dashed #b9cce5;\n  border-radius: 22px;\n  background: #f8fbff;\n  text-align: center;\n}\n.insights-empty > svg {\n  width: 48px;\n  height: 48px;\n  fill: none;\n  stroke: currentColor;\n  stroke-linecap: round;\n  stroke-width: 2;\n  color: #3972b7;\n}\n.insights-empty h3 {\n  margin: 10px 0 5px;\n  color: #08234a;\n}\n.insights-empty p {\n  margin: 0;\n  color: #657b96;\n}\n.insights-toolbar {\n  scroll-margin-top: 110px;\n}\n.insights-pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #d3e1ff;\n}\n.insights-page-numbers {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n.insights-pagination button {\n  min-width: 44px;\n  min-height: 44px;\n  padding: 10px 14px;\n  border: 1px solid #cbdcff;\n  border-radius: 10px;\n  background: #fff;\n  color: #164bba;\n  font: inherit;\n  font-weight: 600;\n  cursor: pointer;\n}\n.insights-pagination button:hover:not(:disabled) {\n  background: #edf4ff;\n  border-color: #1261ff;\n}\n.insights-pagination button.active {\n  background: #1261ff;\n  border-color: #1261ff;\n  color: #fff;\n}\n.insights-pagination button.active:hover {\n  background: #084bd4;\n}\n.insights-pagination button:focus-visible {\n  outline: 3px solid #1261ff;\n  outline-offset: 3px;\n}\n.insights-pagination button:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n.insights-page-gap {\n  align-self: center;\n  color: #66738a;\n}\n@media (max-width: 480px) {\n  .insights-discovery {\n    padding-top: 22px;\n  }\n  .insights-tabs-carousel {\n    gap: 8px;\n  }\n  .insights-tab-arrow {\n    flex-basis: 36px;\n    width: 36px;\n    height: 36px;\n  }\n  .insights-tabs button {\n    padding-inline: 14px;\n  }\n  .insights-page-numbers {\n    order: -1;\n    width: 100%;\n  }\n}\n@media (max-width: 760px) {\n  .insights-discovery {\n    align-items: stretch;\n    flex-direction: column;\n  }\n  .insights-search {\n    width: 100%;\n  }\n}\n.insights-channel {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 16px 20px;\n  margin-bottom: 20px;\n  border: 1px solid #cbdcff;\n  border-radius: 16px;\n  background: #f5f9ff;\n  color: #23456b;\n  font-size: 14px;\n}\n.insights-channel p {\n  margin: 0;\n}\n.insights-channel a {\n  color: #095bc7;\n  font-weight: 700;\n}\n/*# sourceMappingURL=insights.page.css.map */\n'] }]
  }], () => [], { tabScroller: [{
    type: ViewChild,
    args: ["tabScroller"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InsightsPage, { className: "InsightsPage", filePath: "src/app/pages/insights.page.ts", lineNumber: 380 });
})();
export {
  InsightsPage
};
//# sourceMappingURL=chunk-EGEJ54KZ.js.map
