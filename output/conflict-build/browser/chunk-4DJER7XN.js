import {
  GpuLeadHeroComponent
} from "./chunk-KKNAOUDV.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-EVL5GQOW.js";
import "./chunk-MAWJHU3X.js";
import "./chunk-LN7P5EZP.js";
import "./chunk-WBGN3H4A.js";
import {
  Router
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵtrustConstantResourceUrl
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/nvidia-h200.page.ts
var NvidiaH200Page = class _NvidiaH200Page {
  router = inject(Router);
  seo = inject(SeoService);
  observers = /* @__PURE__ */ new Map();
  clickListeners = /* @__PURE__ */ new Map();
  detailsFrame;
  constructor() {
    this.seo.set("NVIDIA H200 Cloud GPU in India \u2014 141 GB HBM3e | XcellHost", "Explore NVIDIA H200 cloud GPU plans, specifications, workloads and pricing in India.", "/nvidia-h200");
  }
  onLoad(event, view) {
    const frame = event.currentTarget;
    const document = frame?.contentDocument;
    if (!frame || !document)
      return;
    frame.style.minHeight = "0";
    if (view === "hero") {
      let sibling = document.querySelector(".pp-trust")?.nextElementSibling;
      while (sibling) {
        sibling.style.display = "none";
        sibling = sibling.nextElementSibling;
      }
    } else {
      if (view === "details")
        this.detailsFrame = frame;
      document.querySelectorAll(".nav, .pp-hero, .pp-trust").forEach((element) => {
        element.style.display = "none";
      });
      const answer = document.getElementById("answer");
      const overview = answer?.previousElementSibling;
      if (view === "overview") {
        document.querySelectorAll(".foot").forEach((element) => {
          element.style.display = "none";
        });
        const container = answer?.parentElement;
        container?.querySelectorAll(":scope > *").forEach((element) => {
          element.style.display = element === overview || element === answer ? "" : "none";
        });
      } else {
        if (overview)
          overview.style.display = "none";
        if (answer)
          answer.style.display = "none";
      }
    }
    const resize = () => {
      frame.style.height = `${Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)}px`;
    };
    resize();
    this.observers.get(frame)?.disconnect();
    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(resize);
      observer.observe(document.documentElement);
      observer.observe(document.body);
      this.observers.set(frame, observer);
    }
    document.fonts?.ready.then(resize);
    const previousListener = this.clickListeners.get(document);
    if (previousListener)
      document.removeEventListener("click", previousListener);
    const clickListener = (clickEvent) => {
      const anchor = clickEvent.target.closest("a[href]");
      if (!anchor)
        return;
      const href = anchor.getAttribute("href");
      if (href?.startsWith("#") && href.length > 1) {
        const targetFrame = view === "details" ? frame : this.detailsFrame ?? frame;
        const target = targetFrame.contentDocument?.getElementById(href.slice(1));
        if (!target)
          return;
        clickEvent.preventDefault();
        const top = window.scrollY + targetFrame.getBoundingClientRect().top + target.getBoundingClientRect().top;
        window.scrollTo({ top: top - 16, behavior: "smooth" });
      } else if (href?.startsWith("/") && anchor.origin === window.location.origin) {
        clickEvent.preventDefault();
        void this.router.navigateByUrl(anchor.pathname + anchor.search + anchor.hash);
      }
    };
    this.clickListeners.set(document, clickListener);
    document.addEventListener("click", clickListener);
  }
  ngOnDestroy() {
    for (const observer of this.observers.values())
      observer.disconnect();
    for (const [document, listener] of this.clickListeners) {
      document.removeEventListener("click", listener);
    }
  }
  static \u0275fac = function NvidiaH200Page_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NvidiaH200Page)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NvidiaH200Page, selectors: [["xh-nvidia-h200-page"]], decls: 4, vars: 0, consts: [["src", \u0275\u0275trustConstantResourceUrl`/nvidia-h200-content.html`, "title", "NVIDIA H200 Cloud GPU introduction", "scrolling", "no", 3, "load"], ["src", \u0275\u0275trustConstantResourceUrl`/nvidia-h200-content.html`, "title", "NVIDIA H200 Cloud GPU overview", "scrolling", "no", 3, "load"], ["slug", "nvidia-h200", "productName", "NVIDIA H200"], ["src", \u0275\u0275trustConstantResourceUrl`/nvidia-h200-content.html`, "title", "NVIDIA H200 Cloud GPU details", "scrolling", "no", 3, "load"]], template: function NvidiaH200Page_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "iframe", 0);
      \u0275\u0275listener("load", function NvidiaH200Page_Template_iframe_load_0_listener($event) {
        return ctx.onLoad($event, "hero");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1, "iframe", 1);
      \u0275\u0275listener("load", function NvidiaH200Page_Template_iframe_load_1_listener($event) {
        return ctx.onLoad($event, "overview");
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "xh-gpu-lead-hero", 2);
      \u0275\u0275elementStart(3, "iframe", 3);
      \u0275\u0275listener("load", function NvidiaH200Page_Template_iframe_load_3_listener($event) {
        return ctx.onLoad($event, "details");
      });
      \u0275\u0275elementEnd();
    }
  }, dependencies: [GpuLeadHeroComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 720px;\n  border: 0;\n}\n/*# sourceMappingURL=nvidia-h200.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NvidiaH200Page, [{
    type: Component,
    args: [{ selector: "xh-nvidia-h200-page", standalone: true, imports: [GpuLeadHeroComponent], template: `
    <iframe src="/nvidia-h200-content.html" title="NVIDIA H200 Cloud GPU introduction" scrolling="no" (load)="onLoad($event, 'hero')"></iframe>
    <iframe src="/nvidia-h200-content.html" title="NVIDIA H200 Cloud GPU overview" scrolling="no" (load)="onLoad($event, 'overview')"></iframe>
    <xh-gpu-lead-hero slug="nvidia-h200" productName="NVIDIA H200" />
    <iframe src="/nvidia-h200-content.html" title="NVIDIA H200 Cloud GPU details" scrolling="no" (load)="onLoad($event, 'details')"></iframe>
  `, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;4fe57b870c33a94391ec663ea4cf3c89d8c139476bd767bd2f190dfe3169b0df;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/nvidia-h200.page.ts */\n:host {\n  display: block;\n  width: 100%;\n  overflow: hidden;\n}\niframe {\n  display: block;\n  width: 100%;\n  min-height: 720px;\n  border: 0;\n}\n/*# sourceMappingURL=nvidia-h200.page.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NvidiaH200Page, { className: "NvidiaH200Page", filePath: "src/app/pages/nvidia-h200.page.ts", lineNumber: 22 });
})();
export {
  NvidiaH200Page
};
//# sourceMappingURL=chunk-4DJER7XN.js.map
