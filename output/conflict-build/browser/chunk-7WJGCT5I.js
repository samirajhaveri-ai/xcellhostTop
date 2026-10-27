import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  QuantityInputDirective
} from "./chunk-XXOOERF5.js";
import {
  LeadService
} from "./chunk-MAWJHU3X.js";
import {
  CATEGORY_COLORS,
  CATEGORY_COMPARE_WHY
} from "./chunk-3MMBSDR4.js";
import "./chunk-LN7P5EZP.js";
import {
  CartService
} from "./chunk-TZE2L2GZ.js";
import "./chunk-WBGN3H4A.js";
import {
  toSignal
} from "./chunk-M5OSJJBF.js";
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
  Router,
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  inject,
  linkedSignal,
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
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/pages/compare.page.ts
var _c0 = (a0) => ["/", a0];
var _forTrack0 = ($index, $item) => $item.name;
var _forTrack1 = ($index, $item) => $item.slug;
function ComparePage_For_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275listener("click", function ComparePage_For_22_Template_div_click_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(r_r2.name));
    })("keydown.enter", function ComparePage_For_22_Template_div_keydown_enter_0_listener() {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggle(r_r2.name));
    })("keydown.space", function ComparePage_For_22_Template_div_keydown_space_0_listener($event) {
      const r_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.toggle(r_r2.name));
    });
    \u0275\u0275element(1, "span", 23);
    \u0275\u0275elementStart(2, "span", 24)(3, "b");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 25);
    \u0275\u0275text(10, "\u2713");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("opacity", !ctx_r2.isSelected(r_r2.name) && ctx_r2.atLimit() ? 0.45 : null);
    \u0275\u0275attribute("aria-pressed", ctx_r2.isSelected(r_r2.name))("aria-disabled", !ctx_r2.isSelected(r_r2.name) && ctx_r2.atLimit() ? "true" : null)("aria-label", (ctx_r2.isSelected(r_r2.name) ? "Remove " : "Add ") + r_r2.name + " \u2014 " + r_r2.cat);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", r_r2.color);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.desc);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r2.cat);
    \u0275\u0275advance();
    \u0275\u0275classProp("on", ctx_r2.isSelected(r_r2.name));
  }
}
function ComparePage_ForEmpty_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, "No match. Try \u201Cbackup\u201D, \u201Cssl\u201D, \u201Ccompliance\u201D\u2026");
    \u0275\u0275elementEnd();
  }
}
function ComparePage_Conditional_24_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th")(1, "span", 33);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.name);
  }
}
function ComparePage_Conditional_24_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275element(1, "span", 34);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", c_r6.color);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", c_r6.cat, " ");
  }
}
function ComparePage_Conditional_24_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7.desc);
  }
}
function ComparePage_Conditional_24_For_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r8.price);
  }
}
function ComparePage_Conditional_24_For_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td")(1, "div", 35)(2, "button", 36);
    \u0275\u0275listener("click", function ComparePage_Conditional_24_For_32_Template_button_click_2_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeQuantity(c_r10.name, -1));
    });
    \u0275\u0275text(3, "\u2212");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 37);
    \u0275\u0275listener("quantityChange", function ComparePage_Conditional_24_For_32_Template_input_quantityChange_4_listener($event) {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeQuantity(c_r10.name, $event - ctx_r2.quantity(c_r10.name)));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 36);
    \u0275\u0275listener("click", function ComparePage_Conditional_24_For_32_Template_button_click_5_listener() {
      const c_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.changeQuantity(c_r10.name, 1));
    });
    \u0275\u0275text(6, "+");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", c_r10.name + " quantity");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.quantity(c_r10.name) === 1);
    \u0275\u0275attribute("aria-label", "Decrease " + c_r10.name + " quantity");
    \u0275\u0275advance(2);
    \u0275\u0275property("quantityValue", ctx_r2.quantity(c_r10.name))("quantityMax", 99);
    \u0275\u0275attribute("aria-label", "Quantity for " + c_r10.name + " quantity");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.quantity(c_r10.name) === 99);
    \u0275\u0275attribute("aria-label", "Increase " + c_r10.name + " quantity");
  }
}
function ComparePage_Conditional_24_For_37_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(f_r11);
  }
}
function ComparePage_Conditional_24_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "ul");
    \u0275\u0275repeaterCreate(2, ComparePage_Conditional_24_For_37_For_3_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(c_r12.features);
  }
}
function ComparePage_Conditional_24_For_42_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const w_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(w_r13);
  }
}
function ComparePage_Conditional_24_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "ul");
    \u0275\u0275repeaterCreate(2, ComparePage_Conditional_24_For_42_For_3_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r14 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(c_r14.why);
  }
}
function ComparePage_Conditional_24_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "24\xD77 \xB7 English & Hindi");
    \u0275\u0275elementEnd();
  }
}
function ComparePage_Conditional_24_For_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td");
    \u0275\u0275text(1, "India \xB7 Tier-4");
    \u0275\u0275elementEnd();
  }
}
function ComparePage_Conditional_24_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td")(1, "a", 38);
    \u0275\u0275text(2, "View details");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c0, c_r15.slug));
  }
}
function ComparePage_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27);
    \u0275\u0275listener("click", function ComparePage_Conditional_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addAll());
    });
    \u0275\u0275text(2, "Add all to quote");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 28);
    \u0275\u0275listener("click", function ComparePage_Conditional_24_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clear());
    });
    \u0275\u0275text(4, "Clear selection");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 29)(6, "table", 30)(7, "thead")(8, "tr");
    \u0275\u0275element(9, "th");
    \u0275\u0275repeaterCreate(10, ComparePage_Conditional_24_For_11_Template, 3, 1, "th", null, _forTrack1);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "tbody")(13, "tr")(14, "th", 31);
    \u0275\u0275text(15, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, ComparePage_Conditional_24_For_17_Template, 3, 3, "td", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "tr")(19, "th", 31);
    \u0275\u0275text(20, "What it does");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(21, ComparePage_Conditional_24_For_22_Template, 2, 1, "td", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "tr")(24, "th", 31);
    \u0275\u0275text(25, "Starting price");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(26, ComparePage_Conditional_24_For_27_Template, 2, 1, "td", 32, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "tr")(29, "th", 31);
    \u0275\u0275text(30, "Quantity");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(31, ComparePage_Conditional_24_For_32_Template, 7, 8, "td", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "tr")(34, "th", 31);
    \u0275\u0275text(35, "Key features");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(36, ComparePage_Conditional_24_For_37_Template, 4, 0, "td", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "tr")(39, "th", 31);
    \u0275\u0275text(40, "Why XcellHost");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(41, ComparePage_Conditional_24_For_42_Template, 4, 0, "td", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "tr")(44, "th", 31);
    \u0275\u0275text(45, "Support");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(46, ComparePage_Conditional_24_For_47_Template, 2, 0, "td", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "tr")(49, "th", 31);
    \u0275\u0275text(50, "Data location");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(51, ComparePage_Conditional_24_For_52_Template, 2, 0, "td", null, _forTrack1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "tr");
    \u0275\u0275element(54, "th");
    \u0275\u0275repeaterCreate(55, ComparePage_Conditional_24_For_56_Template, 3, 3, "td", null, _forTrack1);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275repeater(ctx_r2.columns());
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r2.columns());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.columns());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.columns());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.columns());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.columns());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.columns());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.columns());
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r2.columns());
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.columns());
  }
}
function ComparePage_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Pick up to ", ctx_r2.max, " services above and they will line up side by side here. ");
  }
}
var FEATURED = /Tally on Cloud|DPDPA|Cloud Backup \(Acronis\)|VAPT Services|Secure DMARC|Microsoft 365|Bare Metal Server|SMB Cyber/;
var MAX = 4;
var ComparePage = class _ComparePage {
  route = inject(ActivatedRoute);
  router = inject(Router);
  catalog = inject(CatalogService);
  cart = inject(CartService);
  leads = inject(LeadService);
  overlay = inject(OverlayService);
  callbackTopic = inject(CallbackTopicService);
  seo = inject(SeoService);
  max = MAX;
  /** `?s=tally-on-cloud,microsoft-365` */
  slugsParam = toSignal(this.route.queryParamMap.pipe(map((p) => p.get("s") ?? "")), { initialValue: "" });
  /** Selection follows the URL, but the user can also change it in place. */
  selected = linkedSignal(() => this.namesFor(this.slugsParam()), ...ngDevMode ? [{ debugName: "selected" }] : []);
  columns = computed(() => this.selected().map((name) => this.catalog.findInDirectory(name)).filter((e) => !!e).map((e) => this.column(e)), ...ngDevMode ? [{ debugName: "columns" }] : []);
  /* ------------------------------------------------------------- picker */
  pickQuery = signal("", ...ngDevMode ? [{ debugName: "pickQuery" }] : []);
  quantities = signal({}, ...ngDevMode ? [{ debugName: "quantities" }] : []);
  quantity(name) {
    return this.quantities()[name] ?? 1;
  }
  changeQuantity(name, change) {
    this.quantities.update((values) => __spreadProps(__spreadValues({}, values), {
      [name]: Math.max(1, Math.min(99, (values[name] ?? 1) + change))
    }));
  }
  featured = this.catalog.entries.filter((e) => FEATURED.test(e.name)).slice(0, 8);
  pickRows = computed(() => {
    const s = this.pickQuery().trim();
    const hits = s ? this.catalog.search(s, 14) : this.featured;
    return hits.map((e) => ({
      name: e.name,
      desc: e.desc,
      cat: e.cat,
      color: CATEGORY_COLORS[e.cat] ?? "#1565D8"
    }));
  }, ...ngDevMode ? [{ debugName: "pickRows" }] : []);
  countLabel = computed(() => {
    const n = this.selected().length;
    return `${n} of ${MAX} selected`;
  }, ...ngDevMode ? [{ debugName: "countLabel" }] : []);
  /* --------------------------------------------------------- hand-offs */
  waHref = computed(() => {
    const names = this.selected();
    return this.leads.whatsappLink(names.length ? `Hi XcellHost, I am comparing: ${names.join(", ")}` : "Hi XcellHost, I would like help choosing between your services.");
  }, ...ngDevMode ? [{ debugName: "waHref" }] : []);
  constructor() {
    effect(() => {
      const names = this.selected();
      this.seo.set("Compare services \u2014 XcellHost", names.length ? `Side-by-side comparison of ${names.join(", ")} \u2014 price, features and what XcellHost includes.` : "Compare XcellHost services side by side \u2014 price, category, key features and what is included.", "/compare/");
    });
  }
  /* ------------------------------------------------------------ actions */
  onPickInput(ev) {
    this.pickQuery.set(ev.target.value);
  }
  isSelected(name) {
    return this.selected().includes(name);
  }
  atLimit() {
    return this.selected().length >= MAX;
  }
  toggle(name) {
    const cur = this.selected();
    const next = cur.includes(name) ? cur.filter((n) => n !== name) : cur.length >= MAX ? cur : [...cur, name];
    if (next === cur)
      return;
    this.apply(next);
  }
  clear() {
    this.apply([]);
  }
  /** "Add all to quote" — every selected service goes into the quote cart. */
  addAll() {
    const cols = this.columns();
    if (!cols.length)
      return;
    for (const c of cols) {
      this.cart.add(c.name, c.price, this.quantity(c.name));
    }
    this.cart.open();
  }
  openCallback(ev) {
    ev.preventDefault();
    const names = this.selected();
    this.callbackTopic.ask(names.length ? `Comparing: ${names.join(", ")}` : "Comparing services");
    this.overlay.open("callback");
  }
  /* ------------------------------------------------------------ helpers */
  apply(names) {
    this.selected.set(names);
    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { s: names.length ? names.map(slugify).join(",") : null },
      replaceUrl: true
    });
  }
  namesFor(raw) {
    const out = [];
    for (const slug of raw.split(",")) {
      const entry = this.catalog.entryBySlug(slug.trim());
      if (entry && !out.includes(entry.name))
        out.push(entry.name);
      if (out.length >= MAX)
        break;
    }
    return out;
  }
  column(e) {
    const rich = this.catalog.rich(e.name);
    const featSrc = rich?.f ?? CATEGORY_FEATURES[e.cat] ?? CATEGORY_FEATURES["Cloud"];
    return {
      name: e.name,
      slug: slugify(e.name),
      desc: e.desc,
      cat: e.cat,
      color: CATEGORY_COLORS[e.cat] ?? "#1565D8",
      price: rich?.price || this.priceFrom(e.desc),
      features: featSrc.slice(0, 4).map((f) => f[0]),
      why: CATEGORY_COMPARE_WHY[e.cat] ?? CATEGORY_COMPARE_WHY["Cloud"]
    };
  }
  /** The original fallback: pull a "from ₹…" figure out of the directory blurb. */
  priceFrom(desc) {
    return /from\s*(₹[\d,]+[^\s—]*)/i.exec(desc)?.[1] ?? "On quote";
  }
  static \u0275fac = function ComparePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ComparePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComparePage, selectors: [["xh-compare-page"]], decls: 37, vars: 5, consts: [["id", "cmpPage", 1, "ppage", "as-page"], [1, "pp-hero"], ["aria-hidden", "true", 1, "orb", "orb-1"], [1, "wrap"], [1, "pp-crumb"], [1, "pp-tagline"], [1, "pp-body"], [1, "cmp-wrap", 2, "background", "#fff", "margin-bottom", "26px"], [1, "srch-in"], ["width", "20", "height", "20", "viewBox", "0 0 24 24", "fill", "none", "stroke", "#51607A", "stroke-width", "2.2", "stroke-linecap", "round", "aria-hidden", "true"], ["cx", "11", "cy", "11", "r", "7"], ["d", "M20 20l-3.5-3.5"], ["id", "cmpPick", "placeholder", "Find a service to compare\u2026", "autocomplete", "off", "aria-label", "Find a service to compare", 3, "input", "value"], [1, "sr-cat"], [1, "srch-res", 2, "max-height", "320px"], ["role", "button", "tabindex", "0", 1, "sr", 3, "opacity"], [1, "srch-empty"], [1, "cmp-wrap", 2, "background", "#fff"], [1, "pp-cta"], [2, "display", "flex", "gap", "12px", "flex-wrap", "wrap"], ["href", "#", "id", "cmpCb", 1, "btn", "btn-primary", 3, "click"], ["id", "cmpWa", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255, 255, 255, 0.4)", "color", "#fff", 3, "href"], ["role", "button", "tabindex", "0", 1, "sr", 3, "click", "keydown.enter", "keydown.space"], [1, "sr-c"], [1, "sr-t"], ["aria-hidden", "true", 1, "sr-cmp"], [2, "display", "flex", "gap", "12px", "flex-wrap", "wrap", "margin-bottom", "18px"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], [1, "cmp-wrap"], ["id", "cmpTable", 1, "cmp"], ["scope", "row"], [1, "cmp-price"], [1, "cmp-name"], [1, "sr-c", 2, "display", "inline-block", "margin-right", "8px"], ["role", "group", 1, "cmp-quantity"], ["type", "button", 3, "click", "disabled"], ["xhQuantityInput", "", 3, "quantityChange", "quantityValue", "quantityMax"], [1, "btn", "btn-primary", "cmp-btn", 3, "routerLink"]], template: function ComparePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
      \u0275\u0275element(2, "span", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4);
      \u0275\u0275text(5, "Side by side");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Compare services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, "Everything that matters, in one view \u2014 so you can choose without opening five tabs.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "div", 3)(12, "div", 7)(13, "div", 8);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(14, "svg", 9);
      \u0275\u0275element(15, "circle", 10)(16, "path", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(17, "input", 12);
      \u0275\u0275listener("input", function ComparePage_Template_input_input_17_listener($event) {
        return ctx.onPickInput($event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 13);
      \u0275\u0275text(19);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 14);
      \u0275\u0275repeaterCreate(21, ComparePage_For_22_Template, 11, 12, "div", 15, _forTrack0, false, ComparePage_ForEmpty_23_Template, 2, 0, "div", 16);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(24, ComparePage_Conditional_24_Template, 57, 0)(25, ComparePage_Conditional_25_Template, 3, 1, "div", 17);
      \u0275\u0275elementStart(26, "div", 18)(27, "div")(28, "h3");
      \u0275\u0275text(29, "Not sure which fits?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "p");
      \u0275\u0275text(31, "A 15-minute call with an architect usually settles it.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "div", 19)(33, "a", 20);
      \u0275\u0275listener("click", function ComparePage_Template_a_click_33_listener($event) {
        return ctx.openCallback($event);
      });
      \u0275\u0275text(34, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "a", 21);
      \u0275\u0275text(36, "Talk on WhatsApp");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(17);
      \u0275\u0275property("value", ctx.pickQuery());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.countLabel());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.pickRows());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.columns().length ? 24 : 25);
      \u0275\u0275advance(11);
      \u0275\u0275property("href", ctx.waHref(), \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [QuantityInputDirective, RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ComparePage, [{
    type: Component,
    args: [{ selector: "xh-compare-page", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [QuantityInputDirective, RouterLink], template: `<div class="ppage as-page" id="cmpPage">\r
  <div class="pp-hero">\r
    <span class="orb orb-1" aria-hidden="true"></span>\r
    <div class="wrap">\r
      <div class="pp-crumb">Side by side</div>\r
      <h1>Compare services</h1>\r
      <p class="pp-tagline">Everything that matters, in one view \u2014 so you can choose without opening five tabs.</p>\r
    </div>\r
  </div>\r
\r
  <div class="pp-body">\r
    <div class="wrap">\r
      <!-- picker: new to the routed page, since the search dialog no longer fills the table in -->\r
      <div class="cmp-wrap" style="background: #fff; margin-bottom: 26px">\r
        <div class="srch-in">\r
          <svg\r
            width="20"\r
            height="20"\r
            viewBox="0 0 24 24"\r
            fill="none"\r
            stroke="#51607A"\r
            stroke-width="2.2"\r
            stroke-linecap="round"\r
            aria-hidden="true"\r
          >\r
            <circle cx="11" cy="11" r="7" />\r
            <path d="M20 20l-3.5-3.5" />\r
          </svg>\r
          <input\r
            id="cmpPick"\r
            placeholder="Find a service to compare\u2026"\r
            autocomplete="off"\r
            aria-label="Find a service to compare"\r
            [value]="pickQuery()"\r
            (input)="onPickInput($event)"\r
          />\r
          <span class="sr-cat">{{ countLabel() }}</span>\r
        </div>\r
\r
        <div class="srch-res" style="max-height: 320px">\r
          @for (r of pickRows(); track r.name) {\r
            <div\r
              class="sr"\r
              role="button"\r
              tabindex="0"\r
              [style.opacity]="!isSelected(r.name) && atLimit() ? 0.45 : null"\r
              [attr.aria-pressed]="isSelected(r.name)"\r
              [attr.aria-disabled]="!isSelected(r.name) && atLimit() ? 'true' : null"\r
              [attr.aria-label]="(isSelected(r.name) ? 'Remove ' : 'Add ') + r.name + ' \u2014 ' + r.cat"\r
              (click)="toggle(r.name)"\r
              (keydown.enter)="toggle(r.name)"\r
              (keydown.space)="$event.preventDefault(); toggle(r.name)"\r
            >\r
              <span class="sr-c" [style.background]="r.color"></span>\r
              <span class="sr-t"><b>{{ r.name }}</b><span>{{ r.desc }}</span></span>\r
              <span class="sr-cat">{{ r.cat }}</span>\r
              <span class="sr-cmp" [class.on]="isSelected(r.name)" aria-hidden="true">\u2713</span>\r
            </div>\r
          } @empty {\r
            <div class="srch-empty">No match. Try \u201Cbackup\u201D, \u201Cssl\u201D, \u201Ccompliance\u201D\u2026</div>\r
          }\r
        </div>\r
      </div>\r
\r
      @if (columns().length) {\r
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 18px">\r
          <button class="btn btn-primary" type="button" (click)="addAll()">Add all to quote</button>\r
          <button class="btn btn-ghost" type="button" (click)="clear()">Clear selection</button>\r
        </div>\r
\r
        <div class="cmp-wrap">\r
          <table class="cmp" id="cmpTable">\r
            <thead>\r
              <tr>\r
                <th></th>\r
                @for (c of columns(); track c.slug) {\r
                  <th><span class="cmp-name">{{ c.name }}</span></th>\r
                }\r
              </tr>\r
            </thead>\r
            <tbody>\r
              <tr>\r
                <th scope="row">Category</th>\r
                @for (c of columns(); track c.slug) {\r
                  <td>\r
                    <span\r
                      class="sr-c"\r
                      style="display: inline-block; margin-right: 8px"\r
                      [style.background]="c.color"\r
                    ></span\r
                    >{{ c.cat }}\r
                  </td>\r
                }\r
              </tr>\r
              <tr>\r
                <th scope="row">What it does</th>\r
                @for (c of columns(); track c.slug) {\r
                  <td>{{ c.desc }}</td>\r
                }\r
              </tr>\r
              <tr>\r
                <th scope="row">Starting price</th>\r
                @for (c of columns(); track c.slug) {\r
                  <td class="cmp-price">{{ c.price }}</td>\r
                }\r
              </tr>\r
              <tr>\r
                <th scope="row">Quantity</th>\r
                @for (c of columns(); track c.slug) {\r
                  <td>\r
                    <div class="cmp-quantity" role="group" [attr.aria-label]="c.name + ' quantity'">\r
                      <button type="button" [attr.aria-label]="'Decrease ' + c.name + ' quantity'" [disabled]="quantity(c.name) === 1" (click)="changeQuantity(c.name, -1)">&minus;</button>\r
                      <input xhQuantityInput [attr.aria-label]="'Quantity for ' + c.name + ' quantity'" [quantityValue]="quantity(c.name)" [quantityMax]="99" (quantityChange)="changeQuantity(c.name, $event - (quantity(c.name)))" />\r
                      <button type="button" [attr.aria-label]="'Increase ' + c.name + ' quantity'" [disabled]="quantity(c.name) === 99" (click)="changeQuantity(c.name, 1)">+</button>\r
                    </div>\r
                  </td>\r
                }\r
              </tr>\r
              <tr>\r
                <th scope="row">Key features</th>\r
                @for (c of columns(); track c.slug) {\r
                  <td>\r
                    <ul>\r
                      @for (f of c.features; track f) {\r
                        <li>{{ f }}</li>\r
                      }\r
                    </ul>\r
                  </td>\r
                }\r
              </tr>\r
              <tr>\r
                <th scope="row">Why XcellHost</th>\r
                @for (c of columns(); track c.slug) {\r
                  <td>\r
                    <ul>\r
                      @for (w of c.why; track w) {\r
                        <li>{{ w }}</li>\r
                      }\r
                    </ul>\r
                  </td>\r
                }\r
              </tr>\r
              <tr>\r
                <th scope="row">Support</th>\r
                @for (c of columns(); track c.slug) {\r
                  <td>24\xD77 \xB7 English &amp; Hindi</td>\r
                }\r
              </tr>\r
              <tr>\r
                <th scope="row">Data location</th>\r
                @for (c of columns(); track c.slug) {\r
                  <td>India \xB7 Tier-4</td>\r
                }\r
              </tr>\r
              <tr>\r
                <th></th>\r
                @for (c of columns(); track c.slug) {\r
                  <td>\r
                    <a class="btn btn-primary cmp-btn" [routerLink]="['/', c.slug]">View details</a>\r
                  </td>\r
                }\r
              </tr>\r
            </tbody>\r
          </table>\r
        </div>\r
      } @else {\r
        <div class="cmp-wrap" style="background: #fff">\r
          <div class="srch-empty">\r
            Pick up to {{ max }} services above and they will line up side by side here.\r
          </div>\r
        </div>\r
      }\r
\r
      <div class="pp-cta">\r
        <div>\r
          <h3>Not sure which fits?</h3>\r
          <p>A 15-minute call with an architect usually settles it.</p>\r
        </div>\r
        <div style="display: flex; gap: 12px; flex-wrap: wrap">\r
          <a class="btn btn-primary" href="#" id="cmpCb" (click)="openCallback($event)">Request a callback</a>\r
          <a\r
            class="btn btn-ghost"\r
            style="border-color: rgba(255, 255, 255, 0.4); color: #fff"\r
            id="cmpWa"\r
            [href]="waHref()"\r
            target="_blank"\r
            rel="noopener"\r
            >Talk on WhatsApp</a\r
          >\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
` }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComparePage, { className: "ComparePage", filePath: "src/app/pages/compare.page.ts", lineNumber: 59 });
})();
export {
  ComparePage
};
//# sourceMappingURL=chunk-7WJGCT5I.js.map
