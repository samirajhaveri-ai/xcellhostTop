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

// src/app/pages/digicert-ssl-detail.page.ts
var DigicertSslDetailPage = class _DigicertSslDetailPage {
  slug = inject(ActivatedRoute).snapshot.data["sslSlug"];
  static \u0275fac = function DigicertSslDetailPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DigicertSslDetailPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DigicertSslDetailPage, selectors: [["xh-digicert-ssl-detail-page"]], decls: 2, vars: 2, consts: [["source", "ssl-detail", 3, "sslSlug"], [3, "pageSlug"]], template: function DigicertSslDetailPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "xh-imported-interactive-content", 0)(1, "xh-insights-section", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("sslSlug", ctx.slug);
      \u0275\u0275advance();
      \u0275\u0275property("pageSlug", ctx.slug);
    }
  }, dependencies: [ImportedInteractiveContentComponent, InsightsSectionComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DigicertSslDetailPage, [{
    type: Component,
    args: [{ selector: "xh-digicert-ssl-detail-page", standalone: true, imports: [ImportedInteractiveContentComponent, InsightsSectionComponent], template: `<xh-imported-interactive-content source="ssl-detail" [sslSlug]="slug" /><xh-insights-section [pageSlug]="slug" />` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DigicertSslDetailPage, { className: "DigicertSslDetailPage", filePath: "src/app/pages/digicert-ssl-detail.page.ts", lineNumber: 6 });
})();
export {
  DigicertSslDetailPage
};
//# sourceMappingURL=chunk-ZE4GYB6O.js.map
