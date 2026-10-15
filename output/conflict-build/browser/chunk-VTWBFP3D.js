import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  Router
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵloadQuery,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/cybersecurity-frameworks.page.ts
var _c0 = ["frame"];
var CybersecurityFrameworksPage = class _CybersecurityFrameworksPage {
  frame;
  router = inject(Router);
  seo = inject(SeoService);
  observer;
  frameDocument;
  clickListener;
  constructor() {
    this.seo.set("Cybersecurity Frameworks | XcellHost", "Explore 113 cybersecurity frameworks, standards and regulations across 12 security domains, with interactive search and XcellHost service mappings.", "/cybersecurity-frameworks/");
  }
  onLoad() {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document)
      return;
    const resize = () => {
      frame.style.height = `${Math.max(720, Math.ceil(document.body.getBoundingClientRect().height))}px`;
    };
    resize();
    this.observer?.disconnect();
    if (typeof ResizeObserver !== "undefined") {
      this.observer = new ResizeObserver(resize);
      this.observer.observe(document.documentElement);
      this.observer.observe(document.body);
    }
    document.fonts?.ready.then(resize);
    const scrollToTarget = (target) => {
      const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: top - 110, behavior: reducedMotion ? "auto" : "smooth" });
    };
    const explorer = document.getElementById("explorer");
    if (explorer)
      explorer.scrollIntoView = () => scrollToTarget(explorer);
    if (this.frameDocument && this.clickListener) {
      this.frameDocument.removeEventListener("click", this.clickListener);
    }
    this.frameDocument = document;
    this.clickListener = (event) => {
      const anchor = event.target?.closest("a[href]");
      if (!anchor)
        return;
      const href = anchor.getAttribute("href");
      if (href?.startsWith("#") && href.length > 1) {
        const target = document.getElementById(href.slice(1));
        if (!target)
          return;
        event.preventDefault();
        scrollToTarget(target);
      } else if (href?.startsWith("/") && anchor.origin === window.location.origin) {
        event.preventDefault();
        void this.router.navigateByUrl(anchor.pathname + anchor.search + anchor.hash);
      }
    };
    document.addEventListener("click", this.clickListener);
  }
  ngOnDestroy() {
    this.observer?.disconnect();
    if (this.frameDocument && this.clickListener) {
      this.frameDocument.removeEventListener("click", this.clickListener);
    }
  }
  static \u0275fac = function CybersecurityFrameworksPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CybersecurityFrameworksPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CybersecurityFrameworksPage, selectors: [["xh-cybersecurity-frameworks-page"]], viewQuery: function CybersecurityFrameworksPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, decls: 2, vars: 0, consts: [["frame", ""], ["src", \u0275\u0275trustConstantResourceUrl`/cybersecurity-frameworks-content.html`, "title", "XcellHost Cybersecurity Frameworks", "scrolling", "no", 3, "load"]], template: function CybersecurityFrameworksPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "iframe", 1, 0);
      \u0275\u0275domListener("load", function CybersecurityFrameworksPage_Template_iframe_load_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLoad());
      });
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 720px;\n  border: 0;\n}\n/*# sourceMappingURL=cybersecurity-frameworks.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CybersecurityFrameworksPage, [{
    type: Component,
    args: [{ selector: "xh-cybersecurity-frameworks-page", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: '<iframe\r\n  #frame\r\n  src="/cybersecurity-frameworks-content.html"\r\n  title="XcellHost Cybersecurity Frameworks"\r\n  scrolling="no"\r\n  (load)="onLoad()"\r\n></iframe>\r\n', styles: ["/* angular:styles/component:css;4fe57b870c33a94391ec663ea4cf3c89d8c139476bd767bd2f190dfe3169b0df;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/cybersecurity-frameworks.page.ts */\n:host {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n}\niframe {\n  display: block;\n  width: 100%;\n  min-height: 720px;\n  border: 0;\n}\n/*# sourceMappingURL=cybersecurity-frameworks.page.css.map */\n"] }]
  }], () => [], { frame: [{
    type: ViewChild,
    args: ["frame"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CybersecurityFrameworksPage, { className: "CybersecurityFrameworksPage", filePath: "src/app/pages/cybersecurity-frameworks.page.ts", lineNumber: 15 });
})();
export {
  CybersecurityFrameworksPage
};
//# sourceMappingURL=chunk-VTWBFP3D.js.map
