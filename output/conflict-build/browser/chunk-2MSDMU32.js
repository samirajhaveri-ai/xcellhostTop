import {
  ImportedInteractiveContentComponent
} from "./chunk-B3FR7JOU.js";
import {
  InsightsSectionComponent
} from "./chunk-3UBXKXB6.js";
import "./chunk-6DVXASVN.js";
import "./chunk-TZE2L2GZ.js";
import "./chunk-KILYRBTU.js";
import "./chunk-CJMXCYTU.js";
import "./chunk-WBGN3H4A.js";
import "./chunk-M5OSJJBF.js";
import "./chunk-QOKK55KD.js";
import "./chunk-3YIWEYUK.js";
import "./chunk-WKMOKKQB.js";
import "./chunk-TKO65HOC.js";
import "./chunk-6N6WYEKF.js";
import "./chunk-PHEWPDI5.js";
import {
  ActivatedRoute
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵproperty
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/sectigo-detail.page.ts
var SectigoDetailPage = class _SectigoDetailPage {
  slug = inject(ActivatedRoute).snapshot.data["sectigoSlug"];
  static \u0275fac = function SectigoDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SectigoDetailPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectigoDetailPage, selectors: [["xh-sectigo-detail-page"]], decls: 2, vars: 2, consts: [["source", "sectigo-detail", 3, "sectigoSlug"], [3, "pageSlug"]], template: function SectigoDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "xh-imported-interactive-content", 0)(1, "xh-insights-section", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("sectigoSlug", ctx.slug);
      \u0275\u0275advance();
      \u0275\u0275property("pageSlug", ctx.slug);
    }
  }, dependencies: [ImportedInteractiveContentComponent, InsightsSectionComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectigoDetailPage, [{
    type: Component,
    args: [{
      selector: "xh-sectigo-detail-page",
      standalone: true,
      imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
      template: `<xh-imported-interactive-content source="sectigo-detail" [sectigoSlug]="slug" /><xh-insights-section [pageSlug]="slug" />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectigoDetailPage, { className: "SectigoDetailPage", filePath: "src/app/pages/sectigo-detail.page.ts", lineNumber: 12 });
})();
export {
  SectigoDetailPage
};
//# sourceMappingURL=chunk-2MSDMU32.js.map
