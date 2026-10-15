import {
  GeoTrustEvFlexFollowupComponent
} from "./chunk-YFCOG2LG.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-LN7P5EZP.js";
import {
  InsightsSectionComponent
} from "./chunk-3UBXKXB6.js";
import "./chunk-6DVXASVN.js";
import {
  CartService
} from "./chunk-TZE2L2GZ.js";
import "./chunk-KILYRBTU.js";
import "./chunk-CJMXCYTU.js";
import "./chunk-WBGN3H4A.js";
import "./chunk-M5OSJJBF.js";
import "./chunk-QOKK55KD.js";
import "./chunk-3YIWEYUK.js";
import "./chunk-WKMOKKQB.js";
import "./chunk-TKO65HOC.js";
import {
  CallbackTopicService
} from "./chunk-6N6WYEKF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  NgZone,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/geotrust-true-businessid-ev-flex.page.ts
var _c0 = ["contentFrame"];
var _c1 = () => ["geotrust-ssl-certificates", "geotrust"];
var GeoTrustTrueBusinessIdEvFlexPage = class _GeoTrustTrueBusinessIdEvFlexPage {
  height = signal(9e3, ...ngDevMode ? [{ debugName: "height" }] : []);
  videos = [{
    title: "XcellHost \xB7 Digital trust",
    src: inject(DomSanitizer).bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/s1Rxs7rWd2I?rel=0&playsinline=1"),
    poster: "https://i.ytimg.com/vi/s1Rxs7rWd2I/hqdefault.jpg"
  }];
  frame;
  zone = inject(NgZone);
  cart = inject(CartService);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  resizeObserver;
  themeObserver;
  disposed = false;
  constructor() {
    inject(SeoService).set("GeoTrust TrueBusiness ID EV (FLEX) | XcellHost", "GeoTrust Extended Validation SSL with flexible domain coverage, EV vetting help, installation and INR billing from XcellHost.", "/geotrust-true-businessid-ev-flex");
  }
  syncContent() {
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
    const doc = this.frame?.nativeElement.contentDocument;
    const main = doc?.querySelector("main");
    if (!doc || !main)
      return;
    const resize = () => {
      if (!this.disposed)
        this.zone.run(() => this.height.set(Math.ceil(main.getBoundingClientRect().height) + 2));
    };
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(main);
    const syncTheme = () => doc.documentElement.setAttribute("data-theme", document.documentElement.classList.contains("dark-mode") ? "dark" : document.documentElement.getAttribute("data-theme") || "light");
    this.themeObserver = new MutationObserver(syncTheme);
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme", "class"] });
    syncTheme();
    resize();
    void doc.fonts.ready.then(resize);
  }
  onMessage(event) {
    const frame = this.frame?.nativeElement;
    if (event.origin !== window.location.origin || event.source !== frame?.contentWindow)
      return;
    const data = event.data;
    if (data?.type === "geotrust-ev-enquiry" && typeof data.configuration === "string") {
      this.topics.ask(`GeoTrust TrueBusiness ID EV (FLEX) \u2014 ${data.configuration}`);
      this.overlay.open("callback");
    } else if (data?.type === "geotrust-ev-scroll" && typeof data.target === "string") {
      const target = frame?.contentDocument?.getElementById(data.target);
      if (frame && target) {
        let top = 0;
        for (let element = target; element; element = element.offsetParent)
          top += element.offsetTop;
        window.scrollTo({
          top: window.scrollY + frame.getBoundingClientRect().top + top - 110,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
        });
      }
    } else if (data?.type === "geotrust-ev-toast" && frame) {
      const toast = frame.contentDocument?.getElementById("importToast");
      if (toast) {
        toast.style.position = "absolute";
        toast.style.bottom = "auto";
        toast.style.top = `${Math.max(8, Math.min(frame.clientHeight - 48, window.innerHeight - 80 - frame.getBoundingClientRect().top))}px`;
      }
    } else if (data?.type === "geotrust-ev-cart") {
      const item = data.item;
      if (!item || typeof item.name !== "string" || typeof item.sub !== "string" || typeof item.price !== "number" || !Number.isFinite(item.price) || item.price < 0 || !Number.isInteger(item.qty) || item.qty < 1 || item.qty > 24651)
        return;
      this.cart.add(`${item.name} \u2014 ${item.sub}`, `\u20B9${item.price.toLocaleString("en-IN")} \xB7 excl. GST`, item.qty, { unitAmount: item.price, currency: "INR", locale: "en-IN", suffix: " \xB7 excl. GST" });
      this.cart.open();
      this.overlay.open("cart");
    }
  }
  ngOnDestroy() {
    this.disposed = true;
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
  }
  static \u0275fac = function GeoTrustTrueBusinessIdEvFlexPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeoTrustTrueBusinessIdEvFlexPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeoTrustTrueBusinessIdEvFlexPage, selectors: [["xh-geotrust-ev-flex-page"]], viewQuery: function GeoTrustTrueBusinessIdEvFlexPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, hostBindings: function GeoTrustTrueBusinessIdEvFlexPage_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("message", function GeoTrustTrueBusinessIdEvFlexPage_message_HostBindingHandler($event) {
        return ctx.onMessage($event);
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 4, vars: 5, consts: [["contentFrame", ""], ["src", \u0275\u0275trustConstantResourceUrl`/assets/animations/geotrust-true-businessid-ev-flex-content.html`, "title", "GeoTrust TrueBusiness ID EV (FLEX), domain builder, pricing and XcellHost support", "scrolling", "no", 3, "load"], ["pageSlug", "geotrust-true-businessid-ev-flex", "videoDescription", "Explore GeoTrust certificates and digital trust with XcellHost.", 3, "pageAliases", "videos"]], template: function GeoTrustTrueBusinessIdEvFlexPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "iframe", 1, 0);
      \u0275\u0275listener("load", function GeoTrustTrueBusinessIdEvFlexPage_Template_iframe_load_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.syncContent());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "xh-geotrust-ev-flex-followup")(3, "xh-insights-section", 2);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("height", ctx.height(), "px");
      \u0275\u0275advance(3);
      \u0275\u0275property("pageAliases", \u0275\u0275pureFunction0(4, _c1))("videos", ctx.videos);
    }
  }, dependencies: [GeoTrustEvFlexFollowupComponent, InsightsSectionComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  border: 0;\n  background: transparent;\n}\n/*# sourceMappingURL=geotrust-true-businessid-ev-flex.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeoTrustTrueBusinessIdEvFlexPage, [{
    type: Component,
    args: [{ selector: "xh-geotrust-ev-flex-page", standalone: true, imports: [GeoTrustEvFlexFollowupComponent, InsightsSectionComponent], template: `<iframe #contentFrame src="/assets/animations/geotrust-true-businessid-ev-flex-content.html"
    title="GeoTrust TrueBusiness ID EV (FLEX), domain builder, pricing and XcellHost support"
    scrolling="no" [style.height.px]="height()" (load)="syncContent()"></iframe>
    <xh-geotrust-ev-flex-followup />
    <xh-insights-section pageSlug="geotrust-true-businessid-ev-flex"
      [pageAliases]="['geotrust-ssl-certificates', 'geotrust']" [videos]="videos"
      videoDescription="Explore GeoTrust certificates and digital trust with XcellHost." />`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;ed0edda7b6c1b4c04d76dcf3fa8a9c377d866cb68713cdd663c07bea24c72d87;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/geotrust-true-businessid-ev-flex.page.ts */\n:host {\n  display: block;\n  width: 100%;\n}\niframe {\n  display: block;\n  width: 100%;\n  border: 0;\n  background: transparent;\n}\n/*# sourceMappingURL=geotrust-true-businessid-ev-flex.page.css.map */\n"] }]
  }], () => [], { frame: [{
    type: ViewChild,
    args: ["contentFrame"]
  }], onMessage: [{
    type: HostListener,
    args: ["window:message", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeoTrustTrueBusinessIdEvFlexPage, { className: "GeoTrustTrueBusinessIdEvFlexPage", filePath: "src/app/pages/geotrust-true-businessid-ev-flex.page.ts", lineNumber: 27 });
})();
export {
  GeoTrustTrueBusinessIdEvFlexPage
};
//# sourceMappingURL=chunk-CWHM54FF.js.map
