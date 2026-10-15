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

// src/app/pages/events-catalog.page.ts
var _c0 = ["frame"];
var EventsCatalogPage = class _EventsCatalogPage {
  frame;
  router = inject(Router);
  seo = inject(SeoService);
  observer;
  frameDocument;
  clickListener;
  constructor() {
    this.seo.set("Events & Conferences | XcellHost", "Explore XcellHost conferences, webinars and workshops, filter events and download calendar reminders.", "/under-construction/events-catalog");
  }
  onLoad() {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document)
      return;
    const resize = () => {
      frame.style.height = `${Math.ceil(document.querySelector("main")?.getBoundingClientRect().height ?? document.body.scrollHeight)}px`;
    };
    resize();
    this.observer?.disconnect();
    if (typeof ResizeObserver !== "undefined") {
      this.observer = new ResizeObserver(resize);
      this.observer.observe(document.querySelector("main") ?? document.documentElement);
      this.observer.observe(document.body);
    }
    document.fonts?.ready.then(resize);
    if (this.frameDocument && this.clickListener) {
      this.frameDocument.removeEventListener("click", this.clickListener);
    }
    this.frameDocument = document;
    this.clickListener = (event) => {
      const anchor = event.target.closest("a[href]");
      if (!anchor)
        return;
      const href = anchor.getAttribute("href");
      if (href?.startsWith("#") && href.length > 1) {
        const target = document.getElementById(href.slice(1));
        if (!target)
          return;
        event.preventDefault();
        const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top;
        window.scrollTo({ top: top - 16, behavior: "smooth" });
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
  static \u0275fac = function EventsCatalogPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EventsCatalogPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventsCatalogPage, selectors: [["xh-events-catalog-page"]], viewQuery: function EventsCatalogPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, decls: 2, vars: 0, consts: [["frame", ""], ["src", \u0275\u0275trustConstantResourceUrl`/events-content.html`, "title", "XcellHost Events Calendar", "scrolling", "no", 3, "load"]], template: function EventsCatalogPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275domElementStart(0, "iframe", 1, 0);
      \u0275\u0275domListener("load", function EventsCatalogPage_Template_iframe_load_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLoad());
      });
      \u0275\u0275domElementEnd();
    }
  }, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 720px;\n  border: 0;\n}\n/*# sourceMappingURL=events-catalog.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventsCatalogPage, [{
    type: Component,
    args: [{ selector: "xh-events-catalog-page", standalone: true, template: '<iframe #frame src="/events-content.html" title="XcellHost Events Calendar" scrolling="no" (load)="onLoad()"></iframe>', changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;4fe57b870c33a94391ec663ea4cf3c89d8c139476bd767bd2f190dfe3169b0df;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/events-catalog.page.ts */\n:host {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n}\niframe {\n  display: block;\n  width: 100%;\n  min-height: 720px;\n  border: 0;\n}\n/*# sourceMappingURL=events-catalog.page.css.map */\n"] }]
  }], () => [], { frame: [{
    type: ViewChild,
    args: ["frame"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventsCatalogPage, { className: "EventsCatalogPage", filePath: "src/app/pages/events-catalog.page.ts", lineNumber: 15 });
})();
export {
  EventsCatalogPage
};
//# sourceMappingURL=chunk-7XC3UVZI.js.map
