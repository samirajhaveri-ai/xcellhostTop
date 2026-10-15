import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import {
  SIMPLE_PAGES
} from "./chunk-LN7P5EZP.js";
import {
  toSignal
} from "./chunk-M5OSJJBF.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵnextContext,
  ɵɵsanitizeHtml,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/simple.page.ts
function SimplePage_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275domElement(2, "span", 2);
    \u0275\u0275domElementStart(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(6, "h1", 5);
    \u0275\u0275text(7);
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(8, "p", 6);
    \u0275\u0275text(9);
    \u0275\u0275domElementEnd()()();
    \u0275\u0275domElementStart(10, "div", 7);
    \u0275\u0275domElement(11, "div", 8);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const p_r1 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r1.c);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.t);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.g);
    \u0275\u0275advance(2);
    \u0275\u0275domProperty("innerHTML", ctx_r1.body(), \u0275\u0275sanitizeHtml);
  }
}
var SimplePage = class _SimplePage {
  route = inject(ActivatedRoute);
  router = inject(Router);
  seo = inject(SeoService);
  sanitizer = inject(DomSanitizer);
  key = toSignal(this.route.data.pipe(map((d) => typeof d["key"] === "string" ? d["key"] : "")), { initialValue: "" });
  /** `null` if a route ever points at a key that no longer exists. */
  page = computed(() => SIMPLE_PAGES[this.key()] ?? null, ...ngDevMode ? [{ debugName: "page" }] : []);
  body = computed(() => this.sanitizer.bypassSecurityTrustHtml(this.page()?.h ?? ""), ...ngDevMode ? [{ debugName: "body" }] : []);
  constructor() {
    effect(() => {
      const p = this.page();
      if (!p) {
        void this.router.navigate(["/"]);
        return;
      }
      this.seo.set(`${p.t} \u2014 XcellHost`, p.g, `/${this.key()}/`);
    });
  }
  static \u0275fac = function SimplePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SimplePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SimplePage, selectors: [["xh-simple-page"]], hostAttrs: [2, "display", "contents"], decls: 1, vars: 1, consts: [["id", "spage", 1, "ppage", "as-page"], [1, "pp-hero"], [1, "orb", "orb-1"], [1, "wrap"], ["id", "sCrumb", 1, "pp-crumb"], ["id", "sTitle"], ["id", "sTag", 1, "pp-tagline"], [1, "pp-body"], ["id", "sBody", 1, "wrap", 3, "innerHTML"]], template: function SimplePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, SimplePage_Conditional_0_Template, 12, 4, "div", 0);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional((tmp_0_0 = ctx.page()) ? 0 : -1, tmp_0_0);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SimplePage, [{
    type: Component,
    args: [{
      selector: "xh-simple-page",
      standalone: true,
      imports: [],
      host: { style: "display:contents" },
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    @if (page(); as p) {
      <div class="ppage as-page" id="spage">
        <div class="pp-hero">
          <span class="orb orb-1"></span>
          <div class="wrap">
            <div class="pp-crumb" id="sCrumb">{{ p.c }}</div>
            <h1 id="sTitle">{{ p.t }}</h1>
            <p class="pp-tagline" id="sTag">{{ p.g }}</p>
          </div>
        </div>
        <div class="pp-body"><div class="wrap" id="sBody" [innerHTML]="body()"></div></div>
      </div>
    }
  `
    }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SimplePage, { className: "SimplePage", filePath: "src/app/pages/simple.page.ts", lineNumber: 37 });
})();
export {
  SimplePage
};
//# sourceMappingURL=chunk-OQQQVZOS.js.map
