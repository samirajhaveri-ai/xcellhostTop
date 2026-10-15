import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵsanitizeUrl,
  ɵɵtext
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/company-profile.page.ts
var CompanyProfilePage = class _CompanyProfilePage {
  document = inject(DOCUMENT);
  flipbookUrl = "https://flipbooks.officeinfra.com/books/Company-Profile/#p=1";
  ngOnInit() {
    this.document.defaultView?.location.replace(this.flipbookUrl);
  }
  static \u0275fac = function CompanyProfilePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CompanyProfilePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CompanyProfilePage, selectors: [["xh-company-profile-page"]], decls: 7, vars: 1, consts: [[1, "wrap", 2, "padding", "64px 24px", "text-align", "center"], [1, "btn", "btn-primary", 3, "href"]], template: function CompanyProfilePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "section", 0)(1, "h1");
      \u0275\u0275text(2, "Company Profile");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(3, "p");
      \u0275\u0275text(4, "Opening the XcellHost Company Profile flipbook\u2026");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "a", 1);
      \u0275\u0275text(6, "Open Company Profile \u2192");
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275domProperty("href", ctx.flipbookUrl, \u0275\u0275sanitizeUrl);
    }
  }, encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CompanyProfilePage, [{
    type: Component,
    args: [{
      selector: "xh-company-profile-page",
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `
    <section class="wrap" style="padding: 64px 24px; text-align: center">
      <h1>Company Profile</h1>
      <p>Opening the XcellHost Company Profile flipbook\u2026</p>
      <a class="btn btn-primary" [href]="flipbookUrl">Open Company Profile \u2192</a>
    </section>
  `
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CompanyProfilePage, { className: "CompanyProfilePage", filePath: "src/app/pages/company-profile.page.ts", lineNumber: 16 });
})();
export {
  CompanyProfilePage
};
//# sourceMappingURL=chunk-TEWK32HS.js.map
