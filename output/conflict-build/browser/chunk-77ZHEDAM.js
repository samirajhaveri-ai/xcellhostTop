import {
  ProductPageService
} from "./chunk-PWY32UK5.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-3MMBSDR4.js";
import "./chunk-LN7P5EZP.js";
import "./chunk-KQWZNZVP.js";
import {
  takeUntilDestroyed
} from "./chunk-M5OSJJBF.js";
import {
  CatalogService,
  slugify
} from "./chunk-QOKK55KD.js";
import "./chunk-3YIWEYUK.js";
import "./chunk-WKMOKKQB.js";
import {
  MEGA_MENU
} from "./chunk-TKO65HOC.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import {
  Location
} from "./chunk-SVYSXSWK.js";
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
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/customer-testimonials.page.ts
var _c0 = (a0) => [a0];
var _c1 = (a0) => ({ service: a0 });
var _forTrack0 = ($index, $item) => $item.id;
var _forTrack1 = ($index, $item) => $item.title;
function CustomerTestimonialsPage_For_92_For_12_Conditional_6_For_9_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function CustomerTestimonialsPage_For_92_For_12_Conditional_6_For_9_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 85);
    \u0275\u0275listener("click", function CustomerTestimonialsPage_For_92_For_12_Conditional_6_For_9_For_3_Template_button_click_0_listener() {
      const page_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.selectPage(page_r9.id));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, CustomerTestimonialsPage_For_92_For_12_Conditional_6_For_9_For_3_Conditional_3_Template, 2, 0, "span", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const page_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", ctx_r2.selectedPageId() === page_r9.id);
    \u0275\u0275attribute("aria-pressed", ctx_r2.selectedPageId() === page_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(page_r9.title);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedPageId() === page_r9.id ? 3 : -1);
  }
}
function CustomerTestimonialsPage_For_92_For_12_Conditional_6_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, CustomerTestimonialsPage_For_92_For_12_Conditional_6_For_9_For_3_Template, 4, 5, "button", 84, _forTrack0);
  }
  if (rf & 2) {
    const group_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(group_r10.title);
    \u0275\u0275advance();
    \u0275\u0275repeater(group_r10.pages);
  }
}
function CustomerTestimonialsPage_For_92_For_12_Conditional_6_ForEmpty_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 86);
    \u0275\u0275text(1, "No matching pages.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 87);
    \u0275\u0275listener("click", function CustomerTestimonialsPage_For_92_For_12_Conditional_6_ForEmpty_10_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.query.set(""));
    });
    \u0275\u0275text(3, "Clear search");
    \u0275\u0275elementEnd();
  }
}
function CustomerTestimonialsPage_For_92_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 79)(1, "label", 80);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 81)(4, "span", 65);
    \u0275\u0275text(5, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 82);
    \u0275\u0275listener("input", function CustomerTestimonialsPage_For_92_For_12_Conditional_6_Template_input_input_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.query.set($event.target.value));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 83);
    \u0275\u0275repeaterCreate(8, CustomerTestimonialsPage_For_92_For_12_Conditional_6_For_9_Template, 4, 1, null, null, _forTrack1, false, CustomerTestimonialsPage_For_92_For_12_Conditional_6_ForEmpty_10_Template, 4, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Find a page in ", tab_r5.label);
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r2.query());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.visibleGroups());
  }
}
function CustomerTestimonialsPage_For_92_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 77);
    \u0275\u0275listener("click", function CustomerTestimonialsPage_For_92_For_12_Template_button_click_0_listener() {
      const tab_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selectTab(tab_r5.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "span", 65);
    \u0275\u0275text(3, "expand_more");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 74)(5, "div", 78);
    \u0275\u0275conditionalCreate(6, CustomerTestimonialsPage_For_92_For_12_Conditional_6_Template, 11, 3, "div", 79);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r5 = ctx.$implicit;
    const menu_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.selectedMenuId() === menu_r2.id && ctx_r2.selectedTabId() === tab_r5.id);
    \u0275\u0275attribute("aria-expanded", ctx_r2.expandedMenuId() === menu_r2.id && ctx_r2.expandedTabId() === tab_r5.id)("aria-controls", "tab-pages-" + menu_r2.id + "-" + tab_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(tab_r5.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r2.selectedMenuId() === menu_r2.id && ctx_r2.expandedTabId() === tab_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("open", ctx_r2.selectedMenuId() === menu_r2.id && ctx_r2.expandedTabId() === tab_r5.id);
    \u0275\u0275attribute("inert", ctx_r2.selectedMenuId() === menu_r2.id && ctx_r2.expandedTabId() === tab_r5.id ? null : "")("aria-hidden", ctx_r2.selectedMenuId() !== menu_r2.id || ctx_r2.expandedTabId() !== tab_r5.id);
    \u0275\u0275advance();
    \u0275\u0275property("id", "tab-pages-" + menu_r2.id + "-" + tab_r5.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selectedMenuId() === menu_r2.id && ctx_r2.selectedTabId() === tab_r5.id ? 6 : -1);
  }
}
function CustomerTestimonialsPage_For_92_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "button", 70);
    \u0275\u0275listener("click", function CustomerTestimonialsPage_For_92_Template_button_click_1_listener() {
      const menu_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectMenu(menu_r2.id));
    });
    \u0275\u0275elementStart(2, "span", 71)(3, "span", 72);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 73);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 74)(9, "div", 75)(10, "div", 76);
    \u0275\u0275repeaterCreate(11, CustomerTestimonialsPage_For_92_For_12_Template, 7, 13, null, null, _forTrack0);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const menu_r2 = ctx.$implicit;
    const \u0275$index_168_r11 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.selectedMenuId() === menu_r2.id);
    \u0275\u0275attribute("aria-expanded", ctx_r2.expandedMenuId() === menu_r2.id)("aria-controls", "pages-" + menu_r2.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275$index_168_r11 + 1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(menu_r2.label);
    \u0275\u0275advance();
    \u0275\u0275classProp("expanded", ctx_r2.expandedMenuId() === menu_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("open", ctx_r2.expandedMenuId() === menu_r2.id);
    \u0275\u0275attribute("inert", ctx_r2.expandedMenuId() === menu_r2.id ? null : "")("aria-hidden", ctx_r2.expandedMenuId() !== menu_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("id", "pages-" + menu_r2.id);
    \u0275\u0275advance();
    \u0275\u0275repeater(menu_r2.tabs);
  }
}
function CustomerTestimonialsPage_For_95_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 90);
    \u0275\u0275text(1, "Explore this page ");
    \u0275\u0275elementStart(2, "span", 6);
    \u0275\u0275text(3, "\u2197");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", ctx);
  }
}
function CustomerTestimonialsPage_For_95_For_12_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 6);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const star_r12 = ctx.$implicit;
    const review_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("dim", star_r12 > review_r13.stars);
  }
}
function CustomerTestimonialsPage_For_95_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 96)(1, "span", 97);
    \u0275\u0275text(2, "\u201D");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 98);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 99);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 100);
    \u0275\u0275repeaterCreate(10, CustomerTestimonialsPage_For_95_For_12_For_11_Template, 2, 2, "span", 101, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "blockquote");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 102);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_28_0;
    const review_r13 = ctx.$implicit;
    const \u0275$index_262_r14 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("--card-delay", \u0275$index_262_r14 * 45 + "ms");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(review_r13.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r13.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r13.role);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", review_r13.stars + " out of 5 stars");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.stars);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r13.quote);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((tmp_28_0 = ctx_r2.activePage()) == null ? null : tmp_28_0.title);
  }
}
function CustomerTestimonialsPage_For_95_ForEmpty_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "span", 65);
    \u0275\u0275text(2, "format_quote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No testimonials available for this page yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Select another service from the menu, or talk to our team about customer references.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 95);
    \u0275\u0275text(8, "Talk to our team");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(1, _c1, (tmp_11_0 = ctx_r2.activePage()) == null ? null : tmp_11_0.title));
  }
}
function CustomerTestimonialsPage_For_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 88)(2, "div")(3, "span", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2", 89);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, CustomerTestimonialsPage_For_95_Conditional_9_Template, 4, 1, "a", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 91);
    \u0275\u0275repeaterCreate(11, CustomerTestimonialsPage_For_95_For_12_Template, 16, 8, "article", 92, \u0275\u0275repeaterTrackByIndex, false, CustomerTestimonialsPage_For_95_ForEmpty_13_Template, 9, 3, "div", 93);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 94)(15, "div")(16, "h3");
    \u0275\u0275text(17, "Find the right solution for your business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, "Get advice from our cloud and security team.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "a", 95);
    \u0275\u0275text(21, "Let\u2019s talk ");
    \u0275\u0275elementStart(22, "span", 6);
    \u0275\u0275text(23, "\u2192");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_15_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", (tmp_10_0 = ctx_r2.activeMenu()) == null ? null : tmp_10_0.label, " / ", (tmp_10_0 = ctx_r2.activeTab()) == null ? null : tmp_10_0.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(((tmp_11_0 = ctx_r2.activePage()) == null ? null : tmp_11_0.title) || ((tmp_11_0 = ctx_r2.activeMenu()) == null ? null : tmp_11_0.label));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Customer experiences with ", ((tmp_12_0 = ctx_r2.activePage()) == null ? null : tmp_12_0.title) || ((tmp_12_0 = ctx_r2.activeMenu()) == null ? null : tmp_12_0.label), ".");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_13_0 = (tmp_13_0 = ctx_r2.activePage()) == null ? null : tmp_13_0.link) ? 9 : -1, tmp_13_0);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.reviews());
    \u0275\u0275advance(9);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction1(7, _c1, (tmp_15_0 = ctx_r2.activePage()) == null ? null : tmp_15_0.title));
  }
}
var CustomerTestimonialsPage = class _CustomerTestimonialsPage {
  catalog = inject(CatalogService);
  products = inject(ProductPageService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  location = inject(Location);
  rememberedTabs = /* @__PURE__ */ new Map();
  rememberedPages = /* @__PURE__ */ new Map();
  reviewCache = /* @__PURE__ */ new Map();
  menus = MEGA_MENU.filter((menu) => menu.label !== "Company").map((menu) => {
    const pages = /* @__PURE__ */ new Map();
    for (const tab of menu.tabs) {
      for (const group of tab.groups) {
        for (const item of group.items) {
          if (item.title === "No Data" || !item.title.trim())
            continue;
          const directoryEntry = this.catalog.findInDirectory(item.title);
          const entry = this.catalog.entryBySlug(item.href?.replace(/^\//, "") ?? "") ?? this.catalog.entryBySlug(slugify(directoryEntry?.name ?? item.title));
          const id = slugify(item.title);
          const tabId = slugify(tab.label);
          const key = tabId + "/" + id;
          if (pages.has(key))
            continue;
          pages.set(key, {
            tabId,
            id,
            title: item.title,
            group: group.heading || tab.label,
            entry: menu.label === "Company" || menu.label === "Insights" ? void 0 : entry,
            link: item.href ?? (entry ? "/" + slugify(entry.name) : null)
          });
        }
      }
    }
    return {
      id: slugify(menu.label),
      label: menu.label,
      tabs: menu.tabs.map((tab) => ({ id: slugify(tab.label), label: tab.label })),
      pages: [...pages.values()]
    };
  });
  selectedMenuId = signal(this.menus[0]?.id ?? "", ...ngDevMode ? [{ debugName: "selectedMenuId" }] : []);
  expandedMenuId = signal(this.menus[0]?.id ?? "", ...ngDevMode ? [{ debugName: "expandedMenuId" }] : []);
  selectedTabId = signal(this.menus[0]?.tabs[0]?.id ?? "", ...ngDevMode ? [{ debugName: "selectedTabId" }] : []);
  expandedTabId = signal(this.menus[0]?.tabs[0]?.id ?? "", ...ngDevMode ? [{ debugName: "expandedTabId" }] : []);
  selectedPageId = signal(this.menus[0]?.pages[0]?.id ?? "", ...ngDevMode ? [{ debugName: "selectedPageId" }] : []);
  query = signal("", ...ngDevMode ? [{ debugName: "query" }] : []);
  stars = [1, 2, 3, 4, 5];
  activeMenu = computed(() => this.menus.find((menu) => menu.id === this.selectedMenuId()), ...ngDevMode ? [{ debugName: "activeMenu" }] : []);
  activeTab = computed(() => this.activeMenu()?.tabs.find((tab) => tab.id === this.selectedTabId()), ...ngDevMode ? [{ debugName: "activeTab" }] : []);
  selectionKey = computed(() => `${this.selectedMenuId()}/${this.selectedTabId()}/${this.selectedPageId()}`, ...ngDevMode ? [{ debugName: "selectionKey" }] : []);
  activePage = computed(() => this.activeMenu()?.pages.find((page) => page.tabId === this.selectedTabId() && page.id === this.selectedPageId()), ...ngDevMode ? [{ debugName: "activePage" }] : []);
  visibleGroups = computed(() => {
    const query = this.query().trim().toLowerCase();
    const groups = /* @__PURE__ */ new Map();
    for (const page of this.activeMenu()?.pages ?? []) {
      if (page.tabId !== this.selectedTabId())
        continue;
      if (query && !`${page.title} ${page.group}`.toLowerCase().includes(query))
        continue;
      if (!groups.has(page.group))
        groups.set(page.group, []);
      groups.get(page.group).push(page);
    }
    return [...groups].map(([title, pages]) => ({ title, pages }));
  }, ...ngDevMode ? [{ debugName: "visibleGroups" }] : []);
  reviews = computed(() => {
    const entry = this.activePage()?.entry;
    if (!entry)
      return [];
    const key = entry.cat + "/" + entry.name;
    if (!this.reviewCache.has(key)) {
      this.reviewCache.set(key, this.products.build({ name: entry.name, cat: entry.cat, tag: entry.desc }).reviews);
    }
    return this.reviewCache.get(key);
  }, ...ngDevMode ? [{ debugName: "reviews" }] : []);
  constructor() {
    inject(SeoService).set("Customer Testimonials | XcellHost", "Explore customer testimonials by XcellHost service, from cloud hosting and productivity to security and digital trust.", "/customer-testimonials");
    this.route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => {
      this.applySelection(params.get("category"), params.get("tab"), params.get("page"));
    });
  }
  selectMenu(menuId) {
    if (menuId === this.selectedMenuId()) {
      this.expandedMenuId.set(this.expandedMenuId() === menuId ? "" : menuId);
      return;
    }
    const menu = this.menus.find((item) => item.id === menuId);
    if (!menu)
      return;
    const tabId = this.rememberedTabs.get(menuId) ?? menu.tabs[0]?.id ?? "";
    this.selectPage(this.rememberedPages.get(menuId + "/" + tabId) ?? "", menuId, tabId);
  }
  selectTab(tabId) {
    if (tabId === this.selectedTabId()) {
      this.expandedTabId.set(this.expandedTabId() === tabId ? "" : tabId);
      return;
    }
    this.selectPage(this.rememberedPages.get(this.selectedMenuId() + "/" + tabId) ?? "", this.selectedMenuId(), tabId);
  }
  selectPage(pageId, menuId = this.selectedMenuId(), tabId = this.selectedTabId()) {
    if (pageId === this.selectedPageId() && menuId === this.selectedMenuId() && tabId === this.selectedTabId())
      return;
    this.applySelection(menuId, tabId, pageId);
    const url = this.router.createUrlTree(["/customer-testimonials"], {
      queryParams: { category: this.selectedMenuId(), tab: this.selectedTabId(), page: this.selectedPageId() || null }
    });
    this.location.go(this.router.serializeUrl(url));
  }
  applySelection(menuId, tabId, pageId) {
    const menu = this.menus.find((item) => item.id === menuId) ?? this.menus[0];
    if (!menu)
      return;
    const requestedPage = menu.pages.find((item) => item.id === pageId);
    const tab = menu.tabs.find((item) => item.id === tabId) ?? menu.tabs.find((item) => item.id === requestedPage?.tabId) ?? menu.tabs[0];
    const page = menu.pages.find((item) => item.tabId === tab?.id && item.id === pageId) ?? menu.pages.find((item) => item.tabId === tab?.id);
    if (menu.id !== this.selectedMenuId() || tab?.id !== this.selectedTabId())
      this.query.set("");
    this.selectedMenuId.set(menu.id);
    this.expandedMenuId.set(menu.id);
    this.selectedTabId.set(tab?.id ?? "");
    this.expandedTabId.set(tab?.id ?? "");
    this.selectedPageId.set(page?.id ?? "");
    this.rememberedTabs.set(menu.id, tab?.id ?? "");
    this.rememberedPages.set(menu.id + "/" + tab?.id, page?.id ?? "");
  }
  static \u0275fac = function CustomerTestimonialsPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CustomerTestimonialsPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomerTestimonialsPage, selectors: [["xh-customer-testimonials-page"]], decls: 96, vars: 2, consts: [[1, "testimonials-page"], [1, "testimonials-intro"], [1, "wrap", "testimonials-banner"], [1, "testimonials-banner-copy"], ["aria-label", "Breadcrumb"], ["routerLink", "/"], ["aria-hidden", "true"], [1, "eyebrow"], ["aria-hidden", "true", 1, "testimonials-banner-art", "testimonials-animation"], ["viewBox", "0 0 520 360", "fill", "none"], ["id", "testimonialGlow"], ["stop-color", "#249bff", "stop-opacity", ".4"], ["offset", "1", "stop-color", "#249bff", "stop-opacity", "0"], ["id", "testimonialPlatform"], ["stop-color", "#ffce78"], ["offset", ".45", "stop-color", "#e8f4ff"], ["offset", "1", "stop-color", "#1687ff"], ["id", "testimonialCard", "x2", "1", "y2", "1"], ["stop-color", "#fff"], ["offset", "1", "stop-color", "#deecff"], ["id", "testimonialReviewCard"], ["width", "220", "height", "134", "rx", "16", "fill", "url(#testimonialCard)", "stroke", "#abd4ff"], ["cx", "36", "cy", "36", "r", "20", "fill", "#d2e5fb"], ["cx", "36", "cy", "30", "r", "7", "fill", "#4683bf"], ["d", "M23 49Q24 37 36 37Q48 37 49 49", "fill", "#4683bf"], ["x", "67", "y", "29", 1, "review-quote"], ["x", "67", "y", "54", 1, "review-stars"], ["d", "M27 78H186M27 92H173M27 106H141", "stroke", "#b7cce9", "stroke-width", "6", "stroke-linecap", "round"], ["cx", "267", "cy", "180", "rx", "244", "ry", "174", "fill", "url(#testimonialGlow)"], ["cx", "265", "cy", "174", "rx", "210", "ry", "108", "transform", "rotate(-18 265 174)", "stroke", "#64bbff", "stroke-opacity", ".6", "stroke-dasharray", "3 8", 1, "review-orbit"], ["d", "M65 252Q9 140 122 120Q200 106 292 244Q373 353 457 185", "stroke", "url(#testimonialPlatform)", "stroke-width", "10", "stroke-opacity", ".6", 1, "review-ribbon"], ["cx", "263", "cy", "326", "rx", "163", "ry", "14", "fill", "#1ca0ff", "opacity", ".13"], ["d", "M165 305V320Q263 349 361 320V305Z", "fill", "url(#testimonialPlatform)", "stroke", "#79caff"], ["cx", "263", "cy", "305", "rx", "98", "ry", "15", "fill", "#bce2ff", "stroke", "#69baff"], ["transform", "translate(51 55) rotate(-12)"], [1, "review-float", "review-small"], ["href", "#testimonialReviewCard", "transform", "scale(.57)"], ["transform", "translate(360 49) rotate(9)"], [1, "review-float", "review-small", "review-delay"], ["href", "#testimonialReviewCard", "transform", "scale(.58)"], ["transform", "translate(40 218) rotate(-13)"], ["href", "#testimonialReviewCard", "transform", "scale(.56)"], ["transform", "translate(388 231) rotate(13)"], ["href", "#testimonialReviewCard", "transform", "scale(.52)"], ["transform", "translate(161 129) rotate(7)"], [1, "review-float", "review-main"], ["href", "#testimonialReviewCard"], [1, "review-bubble"], ["d", "M207 31H240Q251 31 251 42V62Q251 73 240 73H228L217 84V73H207Q196 73 196 62V42Q196 31 207 31Z", "fill", "#158df1", "stroke", "#72c6ff"], ["fill", "#fff", 1, "review-typing"], ["cx", "211", "cy", "52", "r", "3"], ["cx", "224", "cy", "52", "r", "3"], ["cx", "237", "cy", "52", "r", "3"], [1, "review-verified"], ["cx", "357", "cy", "275", "r", "19", "fill", "#10bfa4", "stroke", "#75f0d7"], ["d", "M348 275L355 281L367 268", "stroke", "white", "stroke-width", "4", "stroke-linecap", "round", "stroke-linejoin", "round"], [1, "review-heart"], ["cx", "439", "cy", "157", "r", "21", "fill", "#ff637f", "stroke", "#ffb7c4"], ["d", "M439 169L428 157C419 147 435 141 439 151C443 141 459 147 450 157Z", "fill", "#fff"], ["x", "288", "y", "83", 1, "review-spark"], ["x", "92", "y", "185", 1, "review-spark", "spark-delay"], ["x", "407", "y", "204", 1, "review-spark", "spark-delay"], [1, "wrap", "testimonials-layout"], ["aria-label", "Browse testimonials by menu and page", 1, "testimonials-sidebar"], [1, "sidebar-heading"], ["aria-hidden", "true", 1, "material-symbols-outlined"], ["role", "group", "aria-label", "Menu categories", 1, "menu-tabs"], [1, "menu-category"], ["id", "testimonial-results", "aria-labelledby", "testimonialPageTitle", "aria-live", "polite", 1, "testimonials-results"], [1, "results-content"], ["type", "button", 1, "menu-button", 3, "click"], [1, "menu-label"], ["aria-hidden", "true", 1, "menu-number"], ["aria-hidden", "true", 1, "menu-chevron", "material-symbols-outlined"], [1, "accordion-shell"], [1, "accordion-inner"], [1, "subcategory-list", 3, "id"], ["type", "button", 1, "subcategory-button", 3, "click"], [1, "accordion-inner", 3, "id"], [1, "page-picker"], ["for", "testimonialSearch"], [1, "page-search"], ["id", "testimonialSearch", "type", "search", "placeholder", "Search pages...", 3, "input", "value"], [1, "page-list"], ["type", "button", "aria-controls", "testimonial-results", 3, "selected"], ["type", "button", "aria-controls", "testimonial-results", 3, "click"], [1, "no-pages"], ["type", "button", 1, "clear-search", 3, "click"], [1, "results-heading"], ["id", "testimonialPageTitle"], [1, "service-link", 3, "routerLink"], [1, "testimonial-cards"], [1, "testimonial-card", 3, "--card-delay"], [1, "testimonials-empty"], [1, "testimonials-cta"], ["routerLink", "/contact", 1, "btn", "btn-primary", 3, "queryParams"], [1, "testimonial-card"], ["aria-hidden", "true", 1, "quote-mark"], ["aria-hidden", "true", 1, "review-avatar"], [1, "review-role"], [1, "review-stars"], ["aria-hidden", "true", 3, "dim"], [1, "review-service"]], template: function CustomerTestimonialsPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "main", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "nav", 4)(5, "a", 5);
      \u0275\u0275text(6, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "span", 6);
      \u0275\u0275text(8, " / ");
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, "Customer Testimonials");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "span", 7);
      \u0275\u0275text(11, "CUSTOMER STORIES");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "h1");
      \u0275\u0275text(13, "Trusted by Businesses.");
      \u0275\u0275element(14, "br");
      \u0275\u0275text(15, "Loved by Customers.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17, "Discover why businesses trust our solutions to simplify their operations, strengthen their technology, and keep their business moving forward.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(19, "svg", 9)(20, "defs")(21, "radialGradient", 10);
      \u0275\u0275element(22, "stop", 11)(23, "stop", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "linearGradient", 13);
      \u0275\u0275element(25, "stop", 14)(26, "stop", 15)(27, "stop", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "linearGradient", 17);
      \u0275\u0275element(29, "stop", 18)(30, "stop", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "g", 20);
      \u0275\u0275element(32, "rect", 21)(33, "circle", 22)(34, "circle", 23)(35, "path", 24);
      \u0275\u0275elementStart(36, "text", 25);
      \u0275\u0275text(37, "\u201C");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "text", 26);
      \u0275\u0275text(39, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275element(40, "path", 27);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(41, "ellipse", 28)(42, "ellipse", 29)(43, "path", 30)(44, "ellipse", 31)(45, "path", 32)(46, "ellipse", 33);
      \u0275\u0275elementStart(47, "g", 34)(48, "g", 35);
      \u0275\u0275element(49, "use", 36);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "g", 37)(51, "g", 38);
      \u0275\u0275element(52, "use", 39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "g", 40)(54, "g", 38);
      \u0275\u0275element(55, "use", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(56, "g", 42)(57, "g", 35);
      \u0275\u0275element(58, "use", 43);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "g", 44)(60, "g", 45);
      \u0275\u0275element(61, "use", 46);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "g", 47);
      \u0275\u0275element(63, "path", 48);
      \u0275\u0275elementStart(64, "g", 49);
      \u0275\u0275element(65, "circle", 50)(66, "circle", 51)(67, "circle", 52);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(68, "g", 53);
      \u0275\u0275element(69, "circle", 54)(70, "path", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "g", 56);
      \u0275\u0275element(72, "circle", 57)(73, "path", 58);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "text", 59);
      \u0275\u0275text(75, "\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "text", 60);
      \u0275\u0275text(77, "\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "text", 61);
      \u0275\u0275text(79, "\u2605");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(80, "div", 62)(81, "aside", 63)(82, "div", 64)(83, "span", 65);
      \u0275\u0275text(84, "grid_view");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "div")(86, "h2");
      \u0275\u0275text(87, "Explore by service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p");
      \u0275\u0275text(89, "Choose a category to get started");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(90, "div", 66);
      \u0275\u0275repeaterCreate(91, CustomerTestimonialsPage_For_92_Template, 13, 13, "div", 67, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "section", 68);
      \u0275\u0275repeaterCreate(94, CustomerTestimonialsPage_For_95_Template, 24, 9, "div", 69, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(91);
      \u0275\u0275repeater(ctx.menus);
      \u0275\u0275advance(3);
      \u0275\u0275repeater(\u0275\u0275pureFunction1(0, _c0, ctx.selectionKey()));
    }
  }, dependencies: [RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.testimonials-page[_ngcontent-%COMP%] {\n  background: #f7f9fd;\n  padding-bottom: 64px;\n  color: #08244b;\n}\n.testimonials-intro[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      115deg,\n      #103b76,\n      #041e42 65%,\n      #0a2a57);\n  padding: 30px 0 42px;\n  border-bottom: 1px solid #183c6b;\n  color: #fff;\n}\n.testimonials-intro[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #b9cee9;\n  margin-bottom: 30px;\n}\n.testimonials-intro[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #77baff;\n  text-decoration: none;\n}\n.testimonials-intro[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  color: #77baff;\n}\n.testimonials-intro[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.testimonials-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #bdd0eb;\n}\n.eyebrow[_ngcontent-%COMP%] {\n  display: block;\n  color: #1764d9;\n  font-size: 11px;\n  letter-spacing: 2px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: clamp(30px, 4vw, 44px);\n  line-height: 1.15;\n  margin: 12px 0;\n  letter-spacing: -1px;\n}\n.testimonials-intro[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.results-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n  margin: 0;\n}\n.results-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #637795;\n}\n.testimonials-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 270px minmax(0, 1fr);\n  gap: 28px;\n  align-items: start;\n  padding-top: 32px;\n}\n.testimonials-sidebar[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #d7e3f6;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 28px #08244b08;\n}\n.testimonials-sidebar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin: 0;\n  padding: 20px;\n}\nbutton[_ngcontent-%COMP%], \ninput[_ngcontent-%COMP%] {\n  font: inherit;\n}\nbutton[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.menu-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background: #fff;\n  border: 0;\n  border-top: 1px solid #e5ecf6;\n  padding: 13px 20px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 700;\n  color: #4d6384;\n}\n.menu-button[_ngcontent-%COMP%]:hover {\n  background: #f0f6ff;\n  color: #1764d9;\n}\n.menu-button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      110deg,\n      #1768df,\n      #10499d);\n  color: #fff;\n}\n.menu-chevron[_ngcontent-%COMP%] {\n  transition: transform .2s ease;\n}\n.menu-chevron.expanded[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.subcategory-list[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f3f6fb;\n}\n.subcategory-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border: 0;\n  border-radius: 10px;\n  padding: 12px 10px;\n  background: transparent;\n  text-align: left;\n  color: #4d6384;\n  font-size: 13px;\n  font-weight: 700;\n}\n.subcategory-button[_ngcontent-%COMP%]:hover {\n  color: #1764d9;\n  background: #eaf2ff;\n}\n.subcategory-button.active[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1764d9;\n  box-shadow: 0 5px 15px #08244b06;\n}\n.subcategory-button.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n}\n.subcategory-list[_ngcontent-%COMP%]   .page-picker[_ngcontent-%COMP%] {\n  padding: 14px 8px;\n  border-top: 0;\n  margin: 4px 0 8px;\n  border-left: 2px solid #d7e3f6;\n}\n.page-picker[_ngcontent-%COMP%] {\n  padding: 18px 12px 12px;\n  border-top: 1px solid #dce6f5;\n}\n.page-picker[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 0 4px 10px;\n}\n.page-picker[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #d7e3f6;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 12px;\n  color: #08244b;\n  background: #f8faff;\n}\n.page-list[_ngcontent-%COMP%] {\n  max-height: 390px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  margin-top: 12px;\n}\n.page-list[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 14px 8px 7px;\n  font-size: 10px;\n  text-transform: uppercase;\n  color: #7b8ea8;\n  letter-spacing: 1px;\n}\n.page-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 10px;\n  border: 0;\n  border-radius: 7px;\n  background: transparent;\n  color: #506888;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.page-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f3f7ff;\n}\n.page-list[_ngcontent-%COMP%]   button.selected[_ngcontent-%COMP%] {\n  color: #125bc8;\n  background: #eaf2ff;\n  font-weight: 700;\n  box-shadow: inset 3px 0 #1764d9;\n}\nbutton[_ngcontent-%COMP%]:focus-visible, \na[_ngcontent-%COMP%]:focus-visible, \ninput[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid #ff961c;\n  outline-offset: 2px;\n}\n.no-pages[_ngcontent-%COMP%] {\n  font-size: 12px;\n  padding: 8px;\n  color: #637795;\n}\n.results-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  margin: 6px 0 24px;\n}\n.results-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(24px, 2.8vw, 32px);\n  margin: 10px 0;\n  line-height: 1.2;\n  letter-spacing: -.7px;\n}\n.service-link[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #1764d9;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n}\n.testimonial-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  padding: 30px 20px 22px;\n  border: 1px solid #d7e3f6;\n  border-radius: 18px;\n  background: #fff;\n  text-align: center;\n  box-shadow: 0 10px 26px #08244b06;\n}\n.quote-mark[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #1768df,\n      #10499d);\n  color: #fff;\n  border-bottom-left-radius: 16px;\n  font-size: 28px;\n  line-height: 52px;\n}\n.review-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 17px;\n  border-radius: 50%;\n  color: #fff;\n  background:\n    linear-gradient(\n      140deg,\n      #1768df,\n      #773cf2);\n  font-size: 22px;\n  font-weight: 800;\n}\n.testimonial-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 17px;\n}\n.review-role[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #637795;\n  font-size: 12px;\n  line-height: 1.6;\n  min-height: 38px;\n}\n.review-stars[_ngcontent-%COMP%] {\n  margin: 15px 0 20px;\n  letter-spacing: 2px;\n  color: #ff8913;\n}\n.review-stars[_ngcontent-%COMP%]   .dim[_ngcontent-%COMP%] {\n  color: #d7e3f6;\n}\nblockquote[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.85;\n  text-align: left;\n  color: #506888;\n}\n.review-service[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 22px;\n  background: #eef5ff;\n  color: #1764d9;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 700;\n}\n.testimonials-empty[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  padding: 54px 24px;\n  text-align: center;\n  background: #fff;\n  border: 1px dashed #c7d9f3;\n  border-radius: 16px;\n}\n.testimonials-empty[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  color: #1764d9;\n  font-size: 42px;\n}\n.testimonials-empty[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin: 12px 0;\n}\n.testimonials-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #637795;\n  font-size: 14px;\n  line-height: 1.7;\n  margin-bottom: 22px;\n}\n.testimonials-cta[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 18px;\n  background: #eaf2ff;\n  border: 1px solid #d7e3f6;\n  border-radius: 16px;\n  margin-top: 28px;\n  padding: 24px;\n}\n.testimonials-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin: 0 0 7px;\n}\n.testimonials-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #637795;\n}\n.testimonials-cta[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n@media (max-width: 1100px) {\n  .testimonials-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 235px minmax(0, 1fr);\n    gap: 20px;\n  }\n  .testimonial-cards[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .results-heading[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 10px;\n  }\n}\n@media (max-width: 760px) {\n  .testimonials-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-list[_ngcontent-%COMP%] {\n    max-height: 210px;\n  }\n  .testimonials-intro[_ngcontent-%COMP%] {\n    padding-bottom: 30px;\n  }\n  .testimonials-cta[_ngcontent-%COMP%] {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .testimonial-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.testimonials-page[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1280px;\n  min-width: 0;\n  padding-inline: clamp(16px, 3vw, 32px);\n}\n.testimonials-page[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      ellipse at top right,\n      #eaf1fe80,\n      transparent 55%),\n    #f7f9fd;\n}\n.testimonials-intro[_ngcontent-%COMP%] {\n  padding-bottom: 36px;\n}\n.testimonials-layout[_ngcontent-%COMP%] {\n  grid-template-columns: 280px minmax(0, 1fr);\n  gap: 32px;\n}\n.testimonials-layout[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%], \n.results-heading[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], \n.testimonial-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.testimonials-sidebar[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 100px;\n  box-shadow: 0 12px 36px #08244b08;\n  border-radius: 20px;\n}\n.sidebar-heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 18px;\n}\n.sidebar-heading[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: #eaf2ff;\n  color: #1764d9;\n  font-size: 21px;\n  flex-shrink: 0;\n}\n.sidebar-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  padding: 0;\n  font-size: 16px;\n}\n.sidebar-heading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: #7b8ea8;\n  font-size: 10px;\n}\n.menu-tabs[_ngcontent-%COMP%] {\n  max-height: min(680px, calc(100dvh - 220px));\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #c5d5ed transparent;\n  overscroll-behavior: contain;\n}\n.menu-button[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  transition: color .2s, background .2s;\n}\n.menu-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.menu-number[_ngcontent-%COMP%] {\n  width: 23px;\n  height: 23px;\n  display: grid;\n  place-items: center;\n  border-radius: 7px;\n  font-size: 10px;\n  background: #edf3fc;\n  color: #7990b1;\n}\n.menu-button.active[_ngcontent-%COMP%]   .menu-number[_ngcontent-%COMP%] {\n  background: #ffffff24;\n  color: #fff;\n}\n.menu-chevron[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.accordion-shell[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-rows: 0fr;\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    grid-template-rows .26s ease,\n    opacity .2s ease,\n    visibility .26s;\n}\n.accordion-shell.open[_ngcontent-%COMP%] {\n  grid-template-rows: 1fr;\n  opacity: 1;\n  visibility: visible;\n}\n.accordion-inner[_ngcontent-%COMP%] {\n  min-height: 0;\n  overflow: hidden;\n}\n.subcategory-list[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: #f5f8fd;\n}\n.subcategory-button[_ngcontent-%COMP%] {\n  padding: 11px 12px;\n  font-size: 12px;\n  transition:\n    background .2s,\n    color .2s,\n    box-shadow .2s;\n}\n.subcategory-button[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 17px;\n  transform: rotate(-90deg);\n  transition: transform .22s;\n}\n.subcategory-button.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: rotate(-90deg);\n}\n.subcategory-button[_ngcontent-%COMP%]   span.expanded[_ngcontent-%COMP%] {\n  transform: rotate(0);\n}\n.subcategory-list[_ngcontent-%COMP%]   .page-picker[_ngcontent-%COMP%] {\n  padding: 12px 6px 10px 10px;\n  margin: 3px 0 9px 9px;\n}\n.page-search[_ngcontent-%COMP%] {\n  position: relative;\n}\n.page-search[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 11px;\n  font-size: 17px;\n  color: #8598b6;\n  pointer-events: none;\n}\n.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-left: 34px;\n  background: #fff;\n  transition: border-color .2s, box-shadow .2s;\n}\n.page-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: #7ca7ed;\n  box-shadow: 0 0 0 3px #1764d910;\n}\n.page-list[_ngcontent-%COMP%] {\n  max-height: 260px;\n  padding-right: 4px;\n  scrollbar-width: thin;\n  scrollbar-color: #c5d5ed transparent;\n}\n.page-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  font-size: 11px;\n  padding: 10px;\n  transition: background .18s, color .18s;\n}\n.page-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:first-child {\n  overflow-wrap: anywhere;\n}\n.page-list[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]    > .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 16px;\n  flex-shrink: 0;\n  color: #1764d9;\n}\n.page-list[_ngcontent-%COMP%]   .clear-search[_ngcontent-%COMP%] {\n  color: #1764d9;\n  font-weight: 700;\n}\n.results-heading[_ngcontent-%COMP%] {\n  padding: 6px 0 22px;\n  border-bottom: 1px solid #dce6f5;\n  margin-bottom: 24px;\n}\n.results-heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  overflow-wrap: anywhere;\n}\n.results-heading[_ngcontent-%COMP%]   .eyebrow[_ngcontent-%COMP%] {\n  font-size: 10px;\n  line-height: 1.8;\n  letter-spacing: 1.6px;\n}\n.service-link[_ngcontent-%COMP%] {\n  border: 1px solid #d7e3f6;\n  border-radius: 9px;\n  padding: 10px 12px;\n  background: #fff;\n  transition: border-color .2s, background .2s;\n  white-space: normal;\n}\n.service-link[_ngcontent-%COMP%]:hover {\n  background: #edf4ff;\n  border-color: #9abbef;\n}\n.testimonial-cards[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr));\n  align-items: stretch;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  padding: 32px 22px 24px;\n  box-shadow: 0 10px 30px #08244b05;\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    border-color .2s;\n  animation: _ngcontent-%COMP%_review-arrive .3s ease backwards;\n  animation-delay: var(--card-delay,0ms);\n}\n.review-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  box-shadow: 0 6px 18px #1764d920;\n}\n.review-role[_ngcontent-%COMP%] {\n  min-height: 42px;\n}\n.testimonial-card[_ngcontent-%COMP%]   blockquote[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 13px;\n  line-height: 1.9;\n  overflow-wrap: anywhere;\n}\n.review-service[_ngcontent-%COMP%] {\n  align-self: center;\n  max-width: 100%;\n  overflow-wrap: anywhere;\n}\n.results-content[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_results-arrive .24s ease both;\n}\n.testimonials-cta[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      110deg,\n      #eaf2ff,\n      #f2f6ff);\n}\n.testimonials-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  transition: transform .2s, box-shadow .2s;\n}\n@keyframes _ngcontent-%COMP%_results-arrive {\n  from {\n    opacity: 0;\n    transform: translateY(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes _ngcontent-%COMP%_review-arrive {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (hover: hover) {\n  .testimonial-card[_ngcontent-%COMP%]:hover {\n    transform: translateY(-4px);\n    border-color: #a9c5f2;\n    box-shadow: 0 16px 36px #08244b0d;\n  }\n  .testimonials-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n    transform: translateY(-2px);\n  }\n}\n@media (max-width: 1000px) {\n  .testimonials-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 245px minmax(0, 1fr);\n    gap: 22px;\n  }\n}\n@media (max-width: 760px) {\n  .testimonials-layout[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 24px;\n  }\n  .testimonials-sidebar[_ngcontent-%COMP%] {\n    position: static;\n  }\n  .menu-tabs[_ngcontent-%COMP%] {\n    max-height: 420px;\n  }\n  .results-heading[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .testimonials-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    max-width: 100%;\n    white-space: normal;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *[_ngcontent-%COMP%], \n   *[_ngcontent-%COMP%]::before, \n   *[_ngcontent-%COMP%]::after {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n.testimonials-intro[_ngcontent-%COMP%]:has(.testimonials-banner) {\n  padding-block: 24px;\n}\n.testimonials-banner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1.15fr .85fr;\n  align-items: center;\n  gap: 32px;\n}\n.testimonials-banner-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding-block: 22px;\n}\n.testimonials-banner-art[_ngcontent-%COMP%] {\n  height: clamp(240px, 28vw, 340px);\n  overflow: hidden;\n  border-radius: 24px;\n}\n.testimonials-animation[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: visible;\n  pointer-events: none;\n}\n.testimonials-animation[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n.review-quote[_ngcontent-%COMP%] {\n  fill: #168df4;\n  font: 700 39px Georgia, serif;\n}\n.review-stars[_ngcontent-%COMP%] {\n  fill: #ffb52e;\n  font: 23px system-ui, sans-serif;\n  letter-spacing: 1px;\n}\n.review-float[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_testimonial-float 6s ease-in-out infinite;\n}\n.review-main[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 12px 15px #008aff55);\n}\n.review-small[_ngcontent-%COMP%] {\n  filter: drop-shadow(0 8px 10px #00122b55);\n  animation-duration: 7s;\n}\n.review-delay[_ngcontent-%COMP%] {\n  animation-delay: -3s;\n}\n.review-orbit[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_testimonial-flow 20s linear infinite;\n}\n.review-bubble[_ngcontent-%COMP%], \n.review-heart[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_testimonial-float 5s ease-in-out infinite;\n}\n.review-heart[_ngcontent-%COMP%] {\n  animation-delay: -2s;\n}\n.review-verified[_ngcontent-%COMP%] {\n  transform-origin: 357px 275px;\n  animation: _ngcontent-%COMP%_testimonial-verify 4s ease-in-out infinite;\n}\n.review-spark[_ngcontent-%COMP%] {\n  fill: #ffcc52;\n  font: 29px system-ui, sans-serif;\n  animation: _ngcontent-%COMP%_testimonial-spark 3s ease-in-out infinite;\n}\n.spark-delay[_ngcontent-%COMP%] {\n  animation-delay: -1.5s;\n}\n.review-typing[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_testimonial-spark 1.5s ease-in-out infinite;\n}\n.review-typing[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:nth-child(2) {\n  animation-delay: .2s;\n}\n.review-typing[_ngcontent-%COMP%]   circle[_ngcontent-%COMP%]:nth-child(3) {\n  animation-delay: .4s;\n}\n@keyframes _ngcontent-%COMP%_testimonial-float {\n  50% {\n    transform: translateY(-9px);\n  }\n}\n@keyframes _ngcontent-%COMP%_testimonial-flow {\n  to {\n    stroke-dashoffset: -220;\n  }\n}\n@keyframes _ngcontent-%COMP%_testimonial-verify {\n  50% {\n    transform: scale(1.08);\n  }\n}\n@keyframes _ngcontent-%COMP%_testimonial-spark {\n  50% {\n    opacity: .35;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .testimonials-animation[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    animation: none !important;\n  }\n}\n@media (max-width: 760px) {\n  .testimonials-banner[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 12px;\n  }\n  .testimonials-banner-copy[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n  .testimonials-banner-art[_ngcontent-%COMP%] {\n    height: clamp(220px, 55vw, 320px);\n  }\n}\n/*# sourceMappingURL=customer-testimonials.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomerTestimonialsPage, [{
    type: Component,
    args: [{ selector: "xh-customer-testimonials-page", standalone: true, imports: [RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<main class="testimonials-page">\r
  <section class="testimonials-intro">\r
    <div class="wrap testimonials-banner">\r
      <div class="testimonials-banner-copy">\r
      <nav aria-label="Breadcrumb"><a routerLink="/">Home</a><span aria-hidden="true"> / </span>Customer Testimonials</nav>\r
      <span class="eyebrow">CUSTOMER STORIES</span>\r
      <h1>Trusted by Businesses.<br />Loved by Customers.</h1>\r
      <p>Discover why businesses trust our solutions to simplify their operations, strengthen their technology, and keep their business moving forward.</p>\r
      </div>\r
      <div class="testimonials-banner-art testimonials-animation" aria-hidden="true">\r
        <svg viewBox="0 0 520 360" fill="none">\r
          <defs>\r
            <radialGradient id="testimonialGlow"><stop stop-color="#249bff" stop-opacity=".4"/><stop offset="1" stop-color="#249bff" stop-opacity="0"/></radialGradient>\r
            <linearGradient id="testimonialPlatform"><stop stop-color="#ffce78"/><stop offset=".45" stop-color="#e8f4ff"/><stop offset="1" stop-color="#1687ff"/></linearGradient>\r
            <linearGradient id="testimonialCard" x2="1" y2="1"><stop stop-color="#fff"/><stop offset="1" stop-color="#deecff"/></linearGradient>\r
            <g id="testimonialReviewCard">\r
              <rect width="220" height="134" rx="16" fill="url(#testimonialCard)" stroke="#abd4ff"/>\r
              <circle cx="36" cy="36" r="20" fill="#d2e5fb"/>\r
              <circle cx="36" cy="30" r="7" fill="#4683bf"/><path d="M23 49Q24 37 36 37Q48 37 49 49" fill="#4683bf"/>\r
              <text x="67" y="29" class="review-quote">\u201C</text>\r
              <text x="67" y="54" class="review-stars">\u2605\u2605\u2605\u2605\u2605</text>\r
              <path d="M27 78H186M27 92H173M27 106H141" stroke="#b7cce9" stroke-width="6" stroke-linecap="round"/>\r
            </g>\r
          </defs>\r
          <ellipse cx="267" cy="180" rx="244" ry="174" fill="url(#testimonialGlow)"/>\r
          <ellipse class="review-orbit" cx="265" cy="174" rx="210" ry="108" transform="rotate(-18 265 174)" stroke="#64bbff" stroke-opacity=".6" stroke-dasharray="3 8"/>\r
          <path class="review-ribbon" d="M65 252Q9 140 122 120Q200 106 292 244Q373 353 457 185" stroke="url(#testimonialPlatform)" stroke-width="10" stroke-opacity=".6"/>\r
          <ellipse cx="263" cy="326" rx="163" ry="14" fill="#1ca0ff" opacity=".13"/>\r
          <path d="M165 305V320Q263 349 361 320V305Z" fill="url(#testimonialPlatform)" stroke="#79caff"/>\r
          <ellipse cx="263" cy="305" rx="98" ry="15" fill="#bce2ff" stroke="#69baff"/>\r
          <g transform="translate(51 55) rotate(-12)"><g class="review-float review-small"><use href="#testimonialReviewCard" transform="scale(.57)"/></g></g>\r
          <g transform="translate(360 49) rotate(9)"><g class="review-float review-small review-delay"><use href="#testimonialReviewCard" transform="scale(.58)"/></g></g>\r
          <g transform="translate(40 218) rotate(-13)"><g class="review-float review-small review-delay"><use href="#testimonialReviewCard" transform="scale(.56)"/></g></g>\r
          <g transform="translate(388 231) rotate(13)"><g class="review-float review-small"><use href="#testimonialReviewCard" transform="scale(.52)"/></g></g>\r
          <g transform="translate(161 129) rotate(7)"><g class="review-float review-main"><use href="#testimonialReviewCard"/></g></g>\r
          <g class="review-bubble">\r
            <path d="M207 31H240Q251 31 251 42V62Q251 73 240 73H228L217 84V73H207Q196 73 196 62V42Q196 31 207 31Z" fill="#158df1" stroke="#72c6ff"/>\r
            <g class="review-typing" fill="#fff"><circle cx="211" cy="52" r="3"/><circle cx="224" cy="52" r="3"/><circle cx="237" cy="52" r="3"/></g>\r
          </g>\r
          <g class="review-verified"><circle cx="357" cy="275" r="19" fill="#10bfa4" stroke="#75f0d7"/><path d="M348 275L355 281L367 268" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></g>\r
          <g class="review-heart"><circle cx="439" cy="157" r="21" fill="#ff637f" stroke="#ffb7c4"/><path d="M439 169L428 157C419 147 435 141 439 151C443 141 459 147 450 157Z" fill="#fff"/></g>\r
          <text x="288" y="83" class="review-spark">\u2605</text><text x="92" y="185" class="review-spark spark-delay">\u2605</text><text x="407" y="204" class="review-spark spark-delay">\u2605</text>\r
        </svg>\r
      </div>\r
    </div>\r
  </section>\r
  <div class="wrap testimonials-layout">\r
    <aside class="testimonials-sidebar" aria-label="Browse testimonials by menu and page">\r
      <div class="sidebar-heading"><span class="material-symbols-outlined" aria-hidden="true">grid_view</span><div><h2>Explore by service</h2><p>Choose a category to get started</p></div></div>\r
      <div class="menu-tabs" role="group" aria-label="Menu categories">\r
        @for (menu of menus; track menu.id; let index = $index) {\r
          <div class="menu-category">\r
            <button class="menu-button" type="button" [class.active]="selectedMenuId() === menu.id"\r
              [attr.aria-expanded]="expandedMenuId() === menu.id" [attr.aria-controls]="'pages-' + menu.id"\r
              (click)="selectMenu(menu.id)">\r
              <span class="menu-label"><span class="menu-number" aria-hidden="true">{{ index + 1 }}</span>{{ menu.label }}</span>\r
              <span class="menu-chevron material-symbols-outlined" [class.expanded]="expandedMenuId() === menu.id" aria-hidden="true">chevron_right</span>\r
            </button>\r
            <div class="accordion-shell" [class.open]="expandedMenuId() === menu.id" [attr.inert]="expandedMenuId() === menu.id ? null : ''" [attr.aria-hidden]="expandedMenuId() !== menu.id">\r
              <div class="accordion-inner">\r
                <div class="subcategory-list" [id]="'pages-' + menu.id">\r
                  @for (tab of menu.tabs; track tab.id) {\r
                    <button class="subcategory-button" type="button" [class.active]="selectedMenuId() === menu.id && selectedTabId() === tab.id"\r
                      [attr.aria-expanded]="expandedMenuId() === menu.id && expandedTabId() === tab.id" [attr.aria-controls]="'tab-pages-' + menu.id + '-' + tab.id"\r
                      (click)="selectTab(tab.id)">{{ tab.label }}<span class="material-symbols-outlined" [class.expanded]="selectedMenuId() === menu.id && expandedTabId() === tab.id" aria-hidden="true">expand_more</span></button>\r
                    <div class="accordion-shell" [class.open]="selectedMenuId() === menu.id && expandedTabId() === tab.id" [attr.inert]="selectedMenuId() === menu.id && expandedTabId() === tab.id ? null : ''" [attr.aria-hidden]="selectedMenuId() !== menu.id || expandedTabId() !== tab.id">\r
                      <div class="accordion-inner" [id]="'tab-pages-' + menu.id + '-' + tab.id">\r
                        @if (selectedMenuId() === menu.id && selectedTabId() === tab.id) {\r
                          <div class="page-picker">\r
                            <label for="testimonialSearch">Find a page in {{ tab.label }}</label>\r
                            <div class="page-search"><span class="material-symbols-outlined" aria-hidden="true">search</span><input id="testimonialSearch" type="search" placeholder="Search pages..." [value]="query()" (input)="query.set($any($event.target).value)" /></div>\r
                            <div class="page-list">\r
                              @for (group of visibleGroups(); track group.title) {\r
                                <h3>{{ group.title }}</h3>\r
                                @for (page of group.pages; track page.id) {\r
                                  <button type="button" [class.selected]="selectedPageId() === page.id" [attr.aria-pressed]="selectedPageId() === page.id" aria-controls="testimonial-results" (click)="selectPage(page.id)"><span>{{ page.title }}</span>@if (selectedPageId() === page.id) {<span class="material-symbols-outlined" aria-hidden="true">check_circle</span>}</button>\r
                                }\r
                              } @empty {\r
                                <p class="no-pages">No matching pages.</p><button class="clear-search" type="button" (click)="query.set('')">Clear search</button>\r
                              }\r
                            </div>\r
                          </div>\r
                        }\r
                      </div>\r
                    </div>\r
                  }\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        }\r
      </div>\r
    </aside>\r
    <section class="testimonials-results" id="testimonial-results" aria-labelledby="testimonialPageTitle" aria-live="polite">\r
      @for (selection of [selectionKey()]; track selection) {\r
      <div class="results-content">\r
      <div class="results-heading">\r
        <div>\r
          <span class="eyebrow">{{ activeMenu()?.label }} / {{ activeTab()?.label }}</span>\r
          <h2 id="testimonialPageTitle">{{ activePage()?.title || activeMenu()?.label }}</h2>\r
          <p>Customer experiences with {{ activePage()?.title || activeMenu()?.label }}.</p>\r
        </div>\r
        @if (activePage()?.link; as link) {\r
          <a class="service-link" [routerLink]="link">Explore this page <span aria-hidden="true">&#8599;</span></a>\r
        }\r
      </div>\r
      <div class="testimonial-cards">\r
        @for (review of reviews(); track $index; let index = $index) {\r
          <article class="testimonial-card" [style.--card-delay]="index * 45 + 'ms'">\r
            <span class="quote-mark" aria-hidden="true">&rdquo;</span>\r
            <div class="review-avatar" aria-hidden="true">{{ review.initials }}</div>\r
            <h3>{{ review.name }}</h3>\r
            <p class="review-role">{{ review.role }}</p>\r
            <div class="review-stars" [attr.aria-label]="review.stars + ' out of 5 stars'">\r
              @for (star of stars; track star) {<span [class.dim]="star > review.stars" aria-hidden="true">&#9733;</span>}\r
            </div>\r
            <blockquote>{{ review.quote }}</blockquote>\r
            <span class="review-service">{{ activePage()?.title }}</span>\r
          </article>\r
        } @empty {\r
          <div class="testimonials-empty">\r
            <span class="material-symbols-outlined" aria-hidden="true">format_quote</span>\r
            <h3>No testimonials available for this page yet</h3>\r
            <p>Select another service from the menu, or talk to our team about customer references.</p>\r
            <a class="btn btn-primary" routerLink="/contact" [queryParams]="{ service: activePage()?.title }">Talk to our team</a>\r
          </div>\r
        }\r
      </div>\r
      <div class="testimonials-cta">\r
        <div><h3>Find the right solution for your business</h3><p>Get advice from our cloud and security team.</p></div>\r
        <a class="btn btn-primary" routerLink="/contact" [queryParams]="{ service: activePage()?.title }">Let\u2019s talk <span aria-hidden="true">&#8594;</span></a>\r
      </div>\r
      </div>\r
      }\r
    </section>\r
  </div>\r
</main>\r
`, styles: ["/* src/app/pages/customer-testimonials.page.css */\n:host {\n  display: block;\n}\n.testimonials-page {\n  background: #f7f9fd;\n  padding-bottom: 64px;\n  color: #08244b;\n}\n.testimonials-intro {\n  background:\n    linear-gradient(\n      115deg,\n      #103b76,\n      #041e42 65%,\n      #0a2a57);\n  padding: 30px 0 42px;\n  border-bottom: 1px solid #183c6b;\n  color: #fff;\n}\n.testimonials-intro nav {\n  font-size: 12px;\n  color: #b9cee9;\n  margin-bottom: 30px;\n}\n.testimonials-intro nav a {\n  color: #77baff;\n  text-decoration: none;\n}\n.testimonials-intro .eyebrow {\n  color: #77baff;\n}\n.testimonials-intro h1 {\n  color: #fff;\n}\n.testimonials-intro p {\n  color: #bdd0eb;\n}\n.eyebrow {\n  display: block;\n  color: #1764d9;\n  font-size: 11px;\n  letter-spacing: 2px;\n  font-weight: 700;\n  text-transform: uppercase;\n}\nh1 {\n  font-size: clamp(30px, 4vw, 44px);\n  line-height: 1.15;\n  margin: 12px 0;\n  letter-spacing: -1px;\n}\n.testimonials-intro p,\n.results-heading p {\n  font-size: 14px;\n  line-height: 1.7;\n  margin: 0;\n}\n.results-heading p {\n  color: #637795;\n}\n.testimonials-layout {\n  display: grid;\n  grid-template-columns: 270px minmax(0, 1fr);\n  gap: 28px;\n  align-items: start;\n  padding-top: 32px;\n}\n.testimonials-sidebar {\n  background: #fff;\n  border: 1px solid #d7e3f6;\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 8px 28px #08244b08;\n}\n.testimonials-sidebar h2 {\n  font-size: 16px;\n  margin: 0;\n  padding: 20px;\n}\nbutton,\ninput {\n  font: inherit;\n}\nbutton {\n  cursor: pointer;\n}\n.menu-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  background: #fff;\n  border: 0;\n  border-top: 1px solid #e5ecf6;\n  padding: 13px 20px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 700;\n  color: #4d6384;\n}\n.menu-button:hover {\n  background: #f0f6ff;\n  color: #1764d9;\n}\n.menu-button.active {\n  background:\n    linear-gradient(\n      110deg,\n      #1768df,\n      #10499d);\n  color: #fff;\n}\n.menu-chevron {\n  transition: transform .2s ease;\n}\n.menu-chevron.expanded {\n  transform: rotate(90deg);\n}\n.subcategory-list {\n  padding: 10px;\n  background: #f3f6fb;\n}\n.subcategory-button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  border: 0;\n  border-radius: 10px;\n  padding: 12px 10px;\n  background: transparent;\n  text-align: left;\n  color: #4d6384;\n  font-size: 13px;\n  font-weight: 700;\n}\n.subcategory-button:hover {\n  color: #1764d9;\n  background: #eaf2ff;\n}\n.subcategory-button.active {\n  background: #fff;\n  color: #1764d9;\n  box-shadow: 0 5px 15px #08244b06;\n}\n.subcategory-button.active span {\n  transform: rotate(90deg);\n}\n.subcategory-list .page-picker {\n  padding: 14px 8px;\n  border-top: 0;\n  margin: 4px 0 8px;\n  border-left: 2px solid #d7e3f6;\n}\n.page-picker {\n  padding: 18px 12px 12px;\n  border-top: 1px solid #dce6f5;\n}\n.page-picker label {\n  display: block;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 0 4px 10px;\n}\n.page-picker input {\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #d7e3f6;\n  border-radius: 8px;\n  padding: 10px;\n  font-size: 12px;\n  color: #08244b;\n  background: #f8faff;\n}\n.page-list {\n  max-height: 390px;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n  margin-top: 12px;\n}\n.page-list h3 {\n  margin: 14px 8px 7px;\n  font-size: 10px;\n  text-transform: uppercase;\n  color: #7b8ea8;\n  letter-spacing: 1px;\n}\n.page-list button {\n  display: block;\n  width: 100%;\n  text-align: left;\n  padding: 10px;\n  border: 0;\n  border-radius: 7px;\n  background: transparent;\n  color: #506888;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.page-list button:hover {\n  background: #f3f7ff;\n}\n.page-list button.selected {\n  color: #125bc8;\n  background: #eaf2ff;\n  font-weight: 700;\n  box-shadow: inset 3px 0 #1764d9;\n}\nbutton:focus-visible,\na:focus-visible,\ninput:focus-visible {\n  outline: 3px solid #ff961c;\n  outline-offset: 2px;\n}\n.no-pages {\n  font-size: 12px;\n  padding: 8px;\n  color: #637795;\n}\n.results-heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 20px;\n  margin: 6px 0 24px;\n}\n.results-heading h2 {\n  font-size: clamp(24px, 2.8vw, 32px);\n  margin: 10px 0;\n  line-height: 1.2;\n  letter-spacing: -.7px;\n}\n.service-link {\n  flex-shrink: 0;\n  color: #1764d9;\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 700;\n}\n.testimonial-cards {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.testimonial-card {\n  position: relative;\n  overflow: hidden;\n  padding: 30px 20px 22px;\n  border: 1px solid #d7e3f6;\n  border-radius: 18px;\n  background: #fff;\n  text-align: center;\n  box-shadow: 0 10px 26px #08244b06;\n}\n.quote-mark {\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 44px;\n  height: 44px;\n  background:\n    linear-gradient(\n      135deg,\n      #1768df,\n      #10499d);\n  color: #fff;\n  border-bottom-left-radius: 16px;\n  font-size: 28px;\n  line-height: 52px;\n}\n.review-avatar {\n  display: grid;\n  place-items: center;\n  width: 62px;\n  height: 62px;\n  margin: 0 auto 17px;\n  border-radius: 50%;\n  color: #fff;\n  background:\n    linear-gradient(\n      140deg,\n      #1768df,\n      #773cf2);\n  font-size: 22px;\n  font-weight: 800;\n}\n.testimonial-card h3 {\n  margin: 0 0 6px;\n  font-size: 17px;\n}\n.review-role {\n  margin: 0;\n  color: #637795;\n  font-size: 12px;\n  line-height: 1.6;\n  min-height: 38px;\n}\n.review-stars {\n  margin: 15px 0 20px;\n  letter-spacing: 2px;\n  color: #ff8913;\n}\n.review-stars .dim {\n  color: #d7e3f6;\n}\nblockquote {\n  margin: 0;\n  font-size: 13px;\n  line-height: 1.85;\n  text-align: left;\n  color: #506888;\n}\n.review-service {\n  display: inline-block;\n  margin-top: 22px;\n  background: #eef5ff;\n  color: #1764d9;\n  padding: 6px 10px;\n  border-radius: 6px;\n  font-size: 10px;\n  font-weight: 700;\n}\n.testimonials-empty {\n  grid-column: 1/-1;\n  padding: 54px 24px;\n  text-align: center;\n  background: #fff;\n  border: 1px dashed #c7d9f3;\n  border-radius: 16px;\n}\n.testimonials-empty .material-symbols-outlined {\n  color: #1764d9;\n  font-size: 42px;\n}\n.testimonials-empty h3 {\n  font-size: 20px;\n  margin: 12px 0;\n}\n.testimonials-empty p {\n  color: #637795;\n  font-size: 14px;\n  line-height: 1.7;\n  margin-bottom: 22px;\n}\n.testimonials-cta {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 18px;\n  background: #eaf2ff;\n  border: 1px solid #d7e3f6;\n  border-radius: 16px;\n  margin-top: 28px;\n  padding: 24px;\n}\n.testimonials-cta h3 {\n  font-size: 18px;\n  margin: 0 0 7px;\n}\n.testimonials-cta p {\n  margin: 0;\n  font-size: 13px;\n  color: #637795;\n}\n.testimonials-cta a {\n  flex-shrink: 0;\n}\n@media (max-width: 1100px) {\n  .testimonials-layout {\n    grid-template-columns: 235px minmax(0, 1fr);\n    gap: 20px;\n  }\n  .testimonial-cards {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .results-heading {\n    align-items: flex-start;\n    flex-direction: column;\n    gap: 10px;\n  }\n}\n@media (max-width: 760px) {\n  .testimonials-layout {\n    grid-template-columns: 1fr;\n  }\n  .page-list {\n    max-height: 210px;\n  }\n  .testimonials-intro {\n    padding-bottom: 30px;\n  }\n  .testimonials-cta {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n@media (max-width: 480px) {\n  .testimonial-cards {\n    grid-template-columns: 1fr;\n  }\n}\n.testimonials-page .wrap {\n  width: 100%;\n  max-width: 1280px;\n  min-width: 0;\n  padding-inline: clamp(16px, 3vw, 32px);\n}\n.testimonials-page {\n  background:\n    radial-gradient(\n      ellipse at top right,\n      #eaf1fe80,\n      transparent 55%),\n    #f7f9fd;\n}\n.testimonials-intro {\n  padding-bottom: 36px;\n}\n.testimonials-layout {\n  grid-template-columns: 280px minmax(0, 1fr);\n  gap: 32px;\n}\n.testimonials-layout > *,\n.results-heading > div,\n.testimonial-card {\n  min-width: 0;\n}\n.testimonials-sidebar {\n  position: sticky;\n  top: 100px;\n  box-shadow: 0 12px 36px #08244b08;\n  border-radius: 20px;\n}\n.sidebar-heading {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 22px 18px;\n}\n.sidebar-heading > span {\n  display: grid;\n  place-items: center;\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: #eaf2ff;\n  color: #1764d9;\n  font-size: 21px;\n  flex-shrink: 0;\n}\n.sidebar-heading h2 {\n  padding: 0;\n  font-size: 16px;\n}\n.sidebar-heading p {\n  margin-top: 3px;\n  color: #7b8ea8;\n  font-size: 10px;\n}\n.menu-tabs {\n  max-height: min(680px, calc(100dvh - 220px));\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: #c5d5ed transparent;\n  overscroll-behavior: contain;\n}\n.menu-button {\n  padding: 14px 16px;\n  transition: color .2s, background .2s;\n}\n.menu-label {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.menu-number {\n  width: 23px;\n  height: 23px;\n  display: grid;\n  place-items: center;\n  border-radius: 7px;\n  font-size: 10px;\n  background: #edf3fc;\n  color: #7990b1;\n}\n.menu-button.active .menu-number {\n  background: #ffffff24;\n  color: #fff;\n}\n.menu-chevron {\n  font-size: 18px;\n}\n.accordion-shell {\n  display: grid;\n  grid-template-rows: 0fr;\n  opacity: 0;\n  visibility: hidden;\n  transition:\n    grid-template-rows .26s ease,\n    opacity .2s ease,\n    visibility .26s;\n}\n.accordion-shell.open {\n  grid-template-rows: 1fr;\n  opacity: 1;\n  visibility: visible;\n}\n.accordion-inner {\n  min-height: 0;\n  overflow: hidden;\n}\n.subcategory-list {\n  padding: 10px;\n  background: #f5f8fd;\n}\n.subcategory-button {\n  padding: 11px 12px;\n  font-size: 12px;\n  transition:\n    background .2s,\n    color .2s,\n    box-shadow .2s;\n}\n.subcategory-button span {\n  font-size: 17px;\n  transform: rotate(-90deg);\n  transition: transform .22s;\n}\n.subcategory-button.active span {\n  transform: rotate(-90deg);\n}\n.subcategory-button span.expanded {\n  transform: rotate(0);\n}\n.subcategory-list .page-picker {\n  padding: 12px 6px 10px 10px;\n  margin: 3px 0 9px 9px;\n}\n.page-search {\n  position: relative;\n}\n.page-search > span {\n  position: absolute;\n  left: 10px;\n  top: 11px;\n  font-size: 17px;\n  color: #8598b6;\n  pointer-events: none;\n}\n.page-search input {\n  padding-left: 34px;\n  background: #fff;\n  transition: border-color .2s, box-shadow .2s;\n}\n.page-search input:focus {\n  border-color: #7ca7ed;\n  box-shadow: 0 0 0 3px #1764d910;\n}\n.page-list {\n  max-height: 260px;\n  padding-right: 4px;\n  scrollbar-width: thin;\n  scrollbar-color: #c5d5ed transparent;\n}\n.page-list button {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  font-size: 11px;\n  padding: 10px;\n  transition: background .18s, color .18s;\n}\n.page-list button > span:first-child {\n  overflow-wrap: anywhere;\n}\n.page-list button > .material-symbols-outlined {\n  font-size: 16px;\n  flex-shrink: 0;\n  color: #1764d9;\n}\n.page-list .clear-search {\n  color: #1764d9;\n  font-weight: 700;\n}\n.results-heading {\n  padding: 6px 0 22px;\n  border-bottom: 1px solid #dce6f5;\n  margin-bottom: 24px;\n}\n.results-heading h2 {\n  overflow-wrap: anywhere;\n}\n.results-heading .eyebrow {\n  font-size: 10px;\n  line-height: 1.8;\n  letter-spacing: 1.6px;\n}\n.service-link {\n  border: 1px solid #d7e3f6;\n  border-radius: 9px;\n  padding: 10px 12px;\n  background: #fff;\n  transition: border-color .2s, background .2s;\n  white-space: normal;\n}\n.service-link:hover {\n  background: #edf4ff;\n  border-color: #9abbef;\n}\n.testimonial-cards {\n  grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr));\n  align-items: stretch;\n}\n.testimonial-card {\n  display: flex;\n  flex-direction: column;\n  padding: 32px 22px 24px;\n  box-shadow: 0 10px 30px #08244b05;\n  transition:\n    transform .2s,\n    box-shadow .2s,\n    border-color .2s;\n  animation: review-arrive .3s ease backwards;\n  animation-delay: var(--card-delay,0ms);\n}\n.review-avatar {\n  flex-shrink: 0;\n  box-shadow: 0 6px 18px #1764d920;\n}\n.review-role {\n  min-height: 42px;\n}\n.testimonial-card blockquote {\n  flex: 1;\n  font-size: 13px;\n  line-height: 1.9;\n  overflow-wrap: anywhere;\n}\n.review-service {\n  align-self: center;\n  max-width: 100%;\n  overflow-wrap: anywhere;\n}\n.results-content {\n  animation: results-arrive .24s ease both;\n}\n.testimonials-cta {\n  background:\n    linear-gradient(\n      110deg,\n      #eaf2ff,\n      #f2f6ff);\n}\n.testimonials-cta .btn {\n  transition: transform .2s, box-shadow .2s;\n}\n@keyframes results-arrive {\n  from {\n    opacity: 0;\n    transform: translateY(5px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@keyframes review-arrive {\n  from {\n    opacity: 0;\n    transform: translateY(8px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (hover: hover) {\n  .testimonial-card:hover {\n    transform: translateY(-4px);\n    border-color: #a9c5f2;\n    box-shadow: 0 16px 36px #08244b0d;\n  }\n  .testimonials-cta .btn:hover {\n    transform: translateY(-2px);\n  }\n}\n@media (max-width: 1000px) {\n  .testimonials-layout {\n    grid-template-columns: 245px minmax(0, 1fr);\n    gap: 22px;\n  }\n}\n@media (max-width: 760px) {\n  .testimonials-layout {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 24px;\n  }\n  .testimonials-sidebar {\n    position: static;\n  }\n  .menu-tabs {\n    max-height: 420px;\n  }\n  .results-heading {\n    margin-top: 0;\n  }\n  .testimonials-cta .btn {\n    max-width: 100%;\n    white-space: normal;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  *,\n  *::before,\n  *::after {\n    animation: none !important;\n    transition: none !important;\n  }\n}\n.testimonials-intro:has(.testimonials-banner) {\n  padding-block: 24px;\n}\n.testimonials-banner {\n  display: grid;\n  grid-template-columns: 1.15fr .85fr;\n  align-items: center;\n  gap: 32px;\n}\n.testimonials-banner-copy {\n  min-width: 0;\n  padding-block: 22px;\n}\n.testimonials-banner-art {\n  height: clamp(240px, 28vw, 340px);\n  overflow: hidden;\n  border-radius: 24px;\n}\n.testimonials-animation {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: visible;\n  pointer-events: none;\n}\n.testimonials-animation svg {\n  display: block;\n  width: 100%;\n  height: 100%;\n  overflow: visible;\n}\n.review-quote {\n  fill: #168df4;\n  font: 700 39px Georgia, serif;\n}\n.review-stars {\n  fill: #ffb52e;\n  font: 23px system-ui, sans-serif;\n  letter-spacing: 1px;\n}\n.review-float {\n  animation: testimonial-float 6s ease-in-out infinite;\n}\n.review-main {\n  filter: drop-shadow(0 12px 15px #008aff55);\n}\n.review-small {\n  filter: drop-shadow(0 8px 10px #00122b55);\n  animation-duration: 7s;\n}\n.review-delay {\n  animation-delay: -3s;\n}\n.review-orbit {\n  animation: testimonial-flow 20s linear infinite;\n}\n.review-bubble,\n.review-heart {\n  animation: testimonial-float 5s ease-in-out infinite;\n}\n.review-heart {\n  animation-delay: -2s;\n}\n.review-verified {\n  transform-origin: 357px 275px;\n  animation: testimonial-verify 4s ease-in-out infinite;\n}\n.review-spark {\n  fill: #ffcc52;\n  font: 29px system-ui, sans-serif;\n  animation: testimonial-spark 3s ease-in-out infinite;\n}\n.spark-delay {\n  animation-delay: -1.5s;\n}\n.review-typing circle {\n  animation: testimonial-spark 1.5s ease-in-out infinite;\n}\n.review-typing circle:nth-child(2) {\n  animation-delay: .2s;\n}\n.review-typing circle:nth-child(3) {\n  animation-delay: .4s;\n}\n@keyframes testimonial-float {\n  50% {\n    transform: translateY(-9px);\n  }\n}\n@keyframes testimonial-flow {\n  to {\n    stroke-dashoffset: -220;\n  }\n}\n@keyframes testimonial-verify {\n  50% {\n    transform: scale(1.08);\n  }\n}\n@keyframes testimonial-spark {\n  50% {\n    opacity: .35;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .testimonials-animation * {\n    animation: none !important;\n  }\n}\n@media (max-width: 760px) {\n  .testimonials-banner {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 12px;\n  }\n  .testimonials-banner-copy {\n    padding-bottom: 0;\n  }\n  .testimonials-banner-art {\n    height: clamp(220px, 55vw, 320px);\n  }\n}\n/*# sourceMappingURL=customer-testimonials.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomerTestimonialsPage, { className: "CustomerTestimonialsPage", filePath: "src/app/pages/customer-testimonials.page.ts", lineNumber: 28 });
})();
export {
  CustomerTestimonialsPage
};
//# sourceMappingURL=chunk-77ZHEDAM.js.map
