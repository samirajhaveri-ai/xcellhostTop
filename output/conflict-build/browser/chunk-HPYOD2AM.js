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
import "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
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

// src/app/pages/managed-kubernetes.page.ts
var ManagedKubernetesPage = class _ManagedKubernetesPage {
  sanitizer = inject(DomSanitizer);
  videos = [
    { title: "Product Intro", src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/8aNZ-C9zXvw?rel=0&playsinline=1") },
    { title: "Use Cases", src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/FN_U3cKxOQE?rel=0&playsinline=1") }
  ];
  static \u0275fac = function ManagedKubernetesPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ManagedKubernetesPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ManagedKubernetesPage, selectors: [["xh-managed-kubernetes-page"]], decls: 2, vars: 1, consts: [["source", "kubernetes"], ["pageSlug", "managed-kubernetes", 3, "videos"]], template: function ManagedKubernetesPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "xh-imported-interactive-content", 0)(1, "xh-insights-section", 1);
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("videos", ctx.videos);
    }
  }, dependencies: [ImportedInteractiveContentComponent, InsightsSectionComponent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ManagedKubernetesPage, [{
    type: Component,
    args: [{
      selector: "xh-managed-kubernetes-page",
      standalone: true,
      imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
      template: `<xh-imported-interactive-content source="kubernetes" /><xh-insights-section pageSlug="managed-kubernetes" [videos]="videos" />`
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ManagedKubernetesPage, { className: "ManagedKubernetesPage", filePath: "src/app/pages/managed-kubernetes.page.ts", lineNumber: 12 });
})();
export {
  ManagedKubernetesPage
};
//# sourceMappingURL=chunk-HPYOD2AM.js.map
