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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/security-consulting.page.ts
var SecurityConsultingPage = class _SecurityConsultingPage {
  slug = inject(ActivatedRoute).snapshot.data["consultingSlug"];
  static \u0275fac = function SecurityConsultingPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SecurityConsultingPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SecurityConsultingPage, selectors: [["xh-security-consulting-page"]], decls: 3, vars: 2, consts: [["source", "consulting", 3, "consultingSlug"], ["id", "consultingInsights"], [3, "pageSlug"]], template: function SecurityConsultingPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "xh-imported-interactive-content", 0);
      \u0275\u0275elementStart(1, "div", 1);
      \u0275\u0275element(2, "xh-insights-section", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275property("consultingSlug", ctx.slug);
      \u0275\u0275advance(2);
      \u0275\u0275property("pageSlug", ctx.slug);
    }
  }, dependencies: [ImportedInteractiveContentComponent, InsightsSectionComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SecurityConsultingPage, [{
    type: Component,
    args: [{ selector: "xh-security-consulting-page", standalone: true, imports: [ImportedInteractiveContentComponent, InsightsSectionComponent], template: `<xh-imported-interactive-content source="consulting" [consultingSlug]="slug" /><div id="consultingInsights"><xh-insights-section [pageSlug]="slug" /></div>` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SecurityConsultingPage, { className: "SecurityConsultingPage", filePath: "src/app/pages/security-consulting.page.ts", lineNumber: 6 });
})();
export {
  SecurityConsultingPage
};
//# sourceMappingURL=chunk-JXVJM37C.js.map
