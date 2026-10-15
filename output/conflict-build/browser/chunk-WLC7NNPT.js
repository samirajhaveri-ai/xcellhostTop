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

// src/app/pages/inference-imported.page.ts
var InferenceImportedPage = class _InferenceImportedPage {
  slug = inject(ActivatedRoute).snapshot.data["inferenceSlug"];
  static \u0275fac = function InferenceImportedPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InferenceImportedPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InferenceImportedPage, selectors: [["xh-inference-imported-page"]], decls: 2, vars: 2, consts: [["source", "inference-page", 3, "inferenceSlug"], [3, "pageSlug"]], template: function InferenceImportedPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "xh-imported-interactive-content", 0)(1, "xh-insights-section", 1);
    }
    if (rf & 2) {
      \u0275\u0275property("inferenceSlug", ctx.slug);
      \u0275\u0275advance();
      \u0275\u0275property("pageSlug", ctx.slug);
    }
  }, dependencies: [ImportedInteractiveContentComponent, InsightsSectionComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InferenceImportedPage, [{
    type: Component,
    args: [{
      selector: "xh-inference-imported-page",
      standalone: true,
      imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
      template: `<xh-imported-interactive-content source="inference-page" [inferenceSlug]="slug" /><xh-insights-section [pageSlug]="slug" />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InferenceImportedPage, { className: "InferenceImportedPage", filePath: "src/app/pages/inference-imported.page.ts", lineNumber: 12 });
})();
export {
  InferenceImportedPage
};
//# sourceMappingURL=chunk-WLC7NNPT.js.map
