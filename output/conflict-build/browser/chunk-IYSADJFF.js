import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  LeadService
} from "./chunk-MAWJHU3X.js";
import {
  CATEGORY_FAQ_BASE,
  CATEGORY_FAQ_EXTRA,
  CATEGORY_LEDE
} from "./chunk-3MMBSDR4.js";
import "./chunk-LN7P5EZP.js";
import "./chunk-WBGN3H4A.js";
import {
  toSignal
} from "./chunk-M5OSJJBF.js";
import {
  CatalogService,
  MENU_CATEGORY_MAP,
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
  map,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/category.page.ts
var _forTrack0 = ($index, $item) => $item.name;
function CategoryPage_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7)(1, "b");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " groups");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const v_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r2.groups.length);
  }
}
function CategoryPage_Conditional_0_For_24_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 24);
    \u0275\u0275text(1, "Core service");
    \u0275\u0275elementEnd();
  }
}
function CategoryPage_Conditional_0_For_24_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li")(1, "a", 23)(2, "b");
    \u0275\u0275text(3);
    \u0275\u0275conditionalCreate(4, CategoryPage_Conditional_0_For_24_For_10_Conditional_4_Template, 2, 0, "span", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "small");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", s_r3.link);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r3.core ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.desc);
  }
}
function CategoryPage_Conditional_0_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 11)(1, "summary");
    \u0275\u0275text(2);
    \u0275\u0275elementStart(3, "i");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 21)(6, "h5", 22);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "ul");
    \u0275\u0275repeaterCreate(9, CategoryPage_Conditional_0_For_24_For_10_Template, 7, 4, "li", null, _forTrack0);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const g_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", g_r4.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(g_r4.items.length);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(g_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(g_r4.items);
  }
}
function CategoryPage_Conditional_0_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "details", 14);
    \u0275\u0275element(1, "summary", 25)(2, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r5 = ctx.$implicit;
    const \u0275$index_82_r6 = ctx.$index;
    \u0275\u0275property("open", \u0275$index_82_r6 === 0);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", f_r5[0], \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", f_r5[1], \u0275\u0275sanitizeHtml);
  }
}
function CategoryPage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "p", 3);
    \u0275\u0275text(4, "Services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h1", 4);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 5);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 6)(10, "span", 7)(11, "b");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " services");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(14, CategoryPage_Conditional_0_Conditional_14_Template, 4, 1, "span", 7);
    \u0275\u0275elementStart(15, "span", 7)(16, "b");
    \u0275\u0275text(17, "24\xD77");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " support");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(19, "div", 2)(20, "div", 8)(21, "div", 9)(22, "div", 10);
    \u0275\u0275repeaterCreate(23, CategoryPage_Conditional_0_For_24_Template, 11, 3, "details", 11, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 12);
    \u0275\u0275text(26, "Frequently asked questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 13);
    \u0275\u0275repeaterCreate(28, CategoryPage_Conditional_0_For_29_Template, 3, 3, "details", 14, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "section", 15)(31, "div", 2)(32, "div")(33, "h2", 16);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36, "Tell us the problem rather than the product \u2014 we will point you at the right one, or tell you that you do not need it.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 17)(38, "a", 18);
    \u0275\u0275listener("click", function CategoryPage_Conditional_0_Template_a_click_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r6 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r6.openCallback($event));
    });
    \u0275\u0275text(39, "Request a callback");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "a", 19);
    \u0275\u0275text(41, "Talk on WhatsApp");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "a", 20);
    \u0275\u0275text(43, "Email us");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const v_r2 = ctx;
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(v_r2.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(v_r2.lede);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(v_r2.serviceCount);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(v_r2.groups.length ? 14 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275repeater(v_r2.groups);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(v_r2.faqs);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Not sure which ", v_r2.lowerLabel, " service you need?");
    \u0275\u0275advance(6);
    \u0275\u0275property("href", ctx_r6.waHref(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r6.mailHref(), \u0275\u0275sanitizeUrl);
  }
}
var CategoryPage = class _CategoryPage {
  topics = inject(CallbackTopicService);
  route = inject(ActivatedRoute);
  router = inject(Router);
  catalog = inject(CatalogService);
  overlay = inject(OverlayService);
  leads = inject(LeadService);
  seo = inject(SeoService);
  name = toSignal(this.route.paramMap.pipe(map((p) => p.get("name") ?? "")), {
    initialValue: ""
  });
  /** `null` when the slug matches neither a category nor a menu label. */
  view = computed(() => this.resolve(this.name()), ...ngDevMode ? [{ debugName: "view" }] : []);
  waHref = computed(() => this.leads.whatsappLink(`Hi XcellHost, I would like help choosing a ${this.view()?.lowerLabel ?? ""} service.`), ...ngDevMode ? [{ debugName: "waHref" }] : []);
  mailHref = computed(() => {
    const label = this.view()?.label ?? "services";
    return this.leads.mailtoLink(`Enquiry: ${label}`, [
      "Hi XcellHost,",
      "",
      `We are looking at your ${label} services.`,
      "",
      "Company:",
      "What we are trying to solve:",
      "Best time to call:"
    ].join("\n"));
  }, ...ngDevMode ? [{ debugName: "mailHref" }] : []);
  constructor() {
    effect(() => {
      const v = this.view();
      if (!v) {
        void this.router.navigate(["/"]);
        return;
      }
      this.seo.set(`${v.label} services \u2014 XcellHost`, v.lede, `/category/${slugify(v.label)}/`);
    });
  }
  /**
   * Compare the slug against every category name first, then the menu labels in
   * `MENU_CATEGORY_MAP` — that is what makes `/category/software` resolve to the
   * Web Presence catalogue while keeping "Software" as the visible title.
   */
  resolve(slug) {
    if (!slug)
      return null;
    const grouped = this.catalog.grouped();
    const direct = grouped.find((g) => slugify(g.cat) === slug);
    const label = direct?.cat ?? Object.keys(MENU_CATEGORY_MAP).find((k) => slugify(k) === slug) ?? "";
    if (!label)
      return null;
    const cat = direct ? direct.cat : MENU_CATEGORY_MAP[label];
    const block = grouped.find((g) => g.cat === cat);
    if (!block)
      return null;
    const groups = block.groups.map((g) => ({
      name: g.name,
      items: g.items.map((e) => ({
        name: e.name,
        desc: e.desc,
        link: "/" + slugify(e.name),
        core: this.catalog.isCore(e.name)
      }))
    }));
    return {
      label,
      lowerLabel: label.toLowerCase(),
      cat,
      lede: CATEGORY_LEDE[label] ?? CATEGORY_LEDE[cat] ?? "",
      groups,
      serviceCount: groups.reduce((n, g) => n + g.items.length, 0),
      faqs: [...CATEGORY_FAQ_BASE[cat], ...CATEGORY_FAQ_EXTRA[cat]]
    };
  }
  openCallback(ev) {
    ev.preventDefault();
    this.topics.ask((this.view()?.label ?? "") + " services");
    this.overlay.open("callback");
  }
  static \u0275fac = function CategoryPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CategoryPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CategoryPage, selectors: [["xh-category-page"]], hostAttrs: [2, "display", "contents"], decls: 1, vars: 1, consts: [["id", "catpage", 1, "ppage", "catpage", "as-page"], [1, "cat-hero"], [1, "wrap"], ["id", "catKick", 1, "cat-kick"], ["id", "catTitle"], ["id", "catLede", 1, "cat-lede"], ["id", "catStats", 1, "cat-stats"], [1, "cs"], ["id", "catBody", 1, "cat-body"], [1, "dir-cat"], [1, "dir-grid"], [1, "dg"], [1, "pp-sec"], [1, "pp-faq"], [3, "open"], [1, "pp-cta"], ["id", "catCtaH"], [2, "display", "flex", "gap", "12px", "flex-wrap", "wrap"], ["href", "#", "id", "catCtaCall", 1, "btn", "btn-primary", 3, "click"], ["id", "catCtaWa", "target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255,255,255,.4)", "color", "#fff", 3, "href"], ["id", "catCtaMail", 1, "btn", "btn-ghost", 2, "border-color", "rgba(255,255,255,.4)", "color", "#fff", 3, "href"], [1, "dgroup"], [1, "dg-hid"], [3, "routerLink"], [1, "xh-core"], [3, "innerHTML"], [1, "ans", 3, "innerHTML"]], template: function CategoryPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, CategoryPage_Conditional_0_Template, 44, 7, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.view()) ? 0 : -1, tmp_0_0);
    }
  }, dependencies: [RouterLink], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CategoryPage, [{
    type: Component,
    args: [{ selector: "xh-category-page", standalone: true, imports: [RouterLink], host: { style: "display:contents" }, changeDetection: ChangeDetectionStrategy.OnPush, template: '@if (view(); as v) {\r\n  <div class="ppage catpage as-page" id="catpage">\r\n    <section class="cat-hero"><div class="wrap">\r\n      <p class="cat-kick" id="catKick">Services</p>\r\n      <h1 id="catTitle">{{ v.label }}</h1>\r\n      <p class="cat-lede" id="catLede">{{ v.lede }}</p>\r\n      <div class="cat-stats" id="catStats">\r\n        <span class="cs"><b>{{ v.serviceCount }}</b> services</span>\r\n        @if (v.groups.length) {\r\n          <span class="cs"><b>{{ v.groups.length }}</b> groups</span>\r\n        }\r\n        <span class="cs"><b>24\xD77</b> support</span>\r\n      </div>\r\n    </div></section>\r\n    <div class="wrap"><div class="cat-body" id="catBody">\r\n      <div class="dir-cat">\r\n        <div class="dir-grid">\r\n          @for (g of v.groups; track g.name) {\r\n            <details class="dg">\r\n              <summary>{{ g.name }} <i>{{ g.items.length }}</i></summary>\r\n              <div class="dgroup">\r\n                <h5 class="dg-hid">{{ g.name }}</h5>\r\n                <ul>\r\n                  @for (s of g.items; track s.name) {\r\n                    <li><a [routerLink]="s.link"><b>{{ s.name }}@if (s.core) {<span class="xh-core">Core service</span>}</b><small>{{ s.desc }}</small></a></li>\r\n                  }\r\n                </ul>\r\n              </div>\r\n            </details>\r\n          }\r\n        </div>\r\n      </div>\r\n\r\n      <div class="pp-sec">Frequently asked questions</div>\r\n      <div class="pp-faq">\r\n        @for (f of v.faqs; track $index) {\r\n          <details [open]="$first"><summary [innerHTML]="f[0]"></summary><div class="ans" [innerHTML]="f[1]"></div></details>\r\n        }\r\n      </div>\r\n    </div></div>\r\n    <section class="pp-cta"><div class="wrap">\r\n      <div>\r\n        <h2 id="catCtaH">Not sure which {{ v.lowerLabel }} service you need?</h2>\r\n        <p>Tell us the problem rather than the product \u2014 we will point you at the right one, or tell you that you do not need it.</p>\r\n      </div>\r\n      <div style="display:flex;gap:12px;flex-wrap:wrap">\r\n        <a class="btn btn-primary" href="#" id="catCtaCall" (click)="openCallback($event)">Request a callback</a>\r\n        <a class="btn btn-ghost" style="border-color:rgba(255,255,255,.4);color:#fff" id="catCtaWa" [href]="waHref()" target="_blank" rel="noopener">Talk on WhatsApp</a>\r\n        <a class="btn btn-ghost" style="border-color:rgba(255,255,255,.4);color:#fff" id="catCtaMail" [href]="mailHref()">Email us</a>\r\n      </div>\r\n    </div></section>\r\n  </div>\r\n}\r\n' }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CategoryPage, { className: "CategoryPage", filePath: "src/app/pages/category.page.ts", lineNumber: 53 });
})();
export {
  CategoryPage
};
//# sourceMappingURL=chunk-IYSADJFF.js.map
