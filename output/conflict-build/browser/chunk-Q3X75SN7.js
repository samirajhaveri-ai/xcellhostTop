import {
  ProductPageService
} from "./chunk-PWY32UK5.js";
import {
  ProductFaqComponent
} from "./chunk-APIH6CFY.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-3MMBSDR4.js";
import {
  DocRequestService
} from "./chunk-FGJ7AN27.js";
import {
  SITE
} from "./chunk-LN7P5EZP.js";
import "./chunk-KQWZNZVP.js";
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
import {
  PRODUCT_VIDEOS
} from "./chunk-3YIWEYUK.js";
import "./chunk-WKMOKKQB.js";
import "./chunk-TKO65HOC.js";
import {
  CallbackTopicService
} from "./chunk-6N6WYEKF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-7OXZXASL.js";
import {
  DomSanitizer
} from "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/menu-service.page.ts
var _c0 = ["frame"];
var _c1 = ["tourDialog"];
var _forTrack0 = ($index, $item) => $item[0];
var _forTrack1 = ($index, $item) => $item.title;
var _forTrack2 = ($index, $item) => $item.name;
var _forTrack3 = ($index, $item) => $item.image;
function MenuServicePage_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "span", 37);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r2[1]);
  }
}
function MenuServicePage_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 40);
    \u0275\u0275element(1, "path");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const reason_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("d", reason_r3.icon);
  }
}
function MenuServicePage_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const reason_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate1(" ", reason_r3.icon, " ");
  }
}
function MenuServicePage_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 39);
    \u0275\u0275conditionalCreate(2, MenuServicePage_For_18_Conditional_2_Template, 2, 1, ":svg:svg", 40)(3, MenuServicePage_For_18_Conditional_3_Template, 1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reason_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(reason_r3.icon.startsWith("M") ? 2 : 3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(reason_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reason_r3.body);
  }
}
function MenuServicePage_Conditional_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 45);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.videoUrl, \u0275\u0275sanitizeResourceUrl)("title", ctx_r3.page.name + " overview");
  }
}
function MenuServicePage_Conditional_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "span", 47);
    \u0275\u0275text(2, "\u25B6");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Explore the screenshot tour or request a guided demonstration.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div")(8, "button", 30);
    \u0275\u0275listener("click", function MenuServicePage_Conditional_19_Conditional_10_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openTour());
    });
    \u0275\u0275text(9, "Screenshot Tour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 29);
    \u0275\u0275listener("click", function MenuServicePage_Conditional_19_Conditional_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.openCallback());
    });
    \u0275\u0275text(11, "Request a demo");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("See ", ctx_r3.page.name, " in action");
  }
}
function MenuServicePage_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 15)(1, "h2", 41);
    \u0275\u0275text(2, "Watch it in action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 42)(4, "article", 43)(5, "h3")(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 44);
    \u0275\u0275conditionalCreate(9, MenuServicePage_Conditional_19_Conditional_9_Template, 1, 2, "iframe", 45)(10, MenuServicePage_Conditional_19_Conditional_10_Template, 12, 1, "div", 46);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r3.page.name, " overview");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.videoUrl ? 9 : 10);
  }
}
function MenuServicePage_For_25_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const slot_r6 = ctx.$implicit;
    const review_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("off", slot_r6 >= review_r7.stars);
  }
}
function MenuServicePage_For_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 48);
    \u0275\u0275repeaterCreate(2, MenuServicePage_For_25_For_3_Template, 2, 2, "span", 49, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "cite")(7, "span", 50);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span")(10, "b");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const review_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", review_r7.stars + " out of 5 stars");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.starSlots);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u201C", review_r7.quote, "\u201D");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r7.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(review_r7.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r7.role);
  }
}
function MenuServicePage_Conditional_65_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "figure", 60);
    \u0275\u0275element(1, "img", 61);
    \u0275\u0275elementStart(2, "figcaption")(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const slide_r9 = ctx.$implicit;
    const \u0275$index_208_r10 = ctx.$index;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("is-active", \u0275$index_208_r10 === ctx_r3.tourIndex());
    \u0275\u0275attribute("aria-hidden", \u0275$index_208_r10 !== ctx_r3.tourIndex());
    \u0275\u0275advance();
    \u0275\u0275property("src", slide_r9.image, \u0275\u0275sanitizeUrl)("alt", ctx_r3.page.name + ": " + slide_r9.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(slide_r9.title);
  }
}
function MenuServicePage_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function MenuServicePage_Conditional_65_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeTour());
    });
    \u0275\u0275elementStart(1, "section", 52, 1);
    \u0275\u0275listener("click", function MenuServicePage_Conditional_65_Template_section_click_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(3, "button", 53);
    \u0275\u0275listener("click", function MenuServicePage_Conditional_65_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.closeTour());
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 54)(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 55);
    \u0275\u0275text(9, "Screenshot Tour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11, "Explore the service overview and its capabilities.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 56);
    \u0275\u0275repeaterCreate(13, MenuServicePage_Conditional_65_For_14_Template, 5, 6, "figure", 57, _forTrack3);
    \u0275\u0275elementStart(15, "button", 58);
    \u0275\u0275listener("click", function MenuServicePage_Conditional_65_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.tourIndex.update(ctx_r3.toggleIndex));
    });
    \u0275\u0275text(16, "\u2039");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 59);
    \u0275\u0275listener("click", function MenuServicePage_Conditional_65_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.tourIndex.update(ctx_r3.toggleIndex));
    });
    \u0275\u0275text(18, "\u203A");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.page.name);
    \u0275\u0275advance(6);
    \u0275\u0275repeater(ctx_r3.tourSlides);
  }
}
var MenuServicePage = class _MenuServicePage {
  frame;
  router = inject(Router);
  sanitizer = inject(DomSanitizer);
  page = inject(ActivatedRoute).snapshot.data["servicePage"];
  pageUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/menu-service-pages/${this.page.slug}.html`);
  observer;
  frameDocument;
  clickListener;
  overlay = inject(OverlayService);
  docs = inject(DocRequestService);
  topics = inject(CallbackTopicService);
  cart = inject(CartService);
  whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${this.page.name}.`)}`;
  emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(`Enquiry: ${this.page.name}`)}`;
  view = inject(ProductPageService).build({
    name: this.page.name,
    cat: this.page.category ?? (/testing|vapt/.test(this.page.slug) ? "Security" : this.page.slug === "managed-microsoft-365" ? "Cloud" : "Web Presence")
  });
  videoId = PRODUCT_VIDEOS[this.page.name]?.[0] || (/testing|vapt/.test(this.page.slug) ? PRODUCT_VIDEOS["VAPT Services"]?.[0] : "");
  videoUrl = this.videoId ? this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${this.videoId}?rel=0&playsinline=1`) : null;
  insightVideos = this.videoUrl ? [{ title: `${this.page.name} overview`, src: this.videoUrl }] : [];
  starSlots = [0, 1, 2, 3, 4];
  tourIndex = signal(0, ...ngDevMode ? [{ debugName: "tourIndex" }] : []);
  toggleIndex = (index) => 1 - index;
  previousFocus;
  tourDialog;
  tourSlides = [
    { image: `/assets/menu-service-pages/tours/${this.page.slug}-hero.webp`, title: "Service overview" },
    { image: `/assets/menu-service-pages/tours/${this.page.slug}-details.webp`, title: "Capabilities and service details" }
  ];
  requestDoc(kind) {
    this.docs.ask(kind, this.page.name);
    this.overlay.open("doc");
  }
  openCallback() {
    this.topics.ask(this.page.name);
    this.overlay.open("callback");
  }
  buyNow() {
    this.cart.add(this.page.name, "Quote on request");
    this.cart.open();
    this.overlay.open("cart");
  }
  openTour() {
    this.previousFocus = document.activeElement;
    this.tourIndex.set(0);
    this.overlay.open("productScreenshotTour");
    requestAnimationFrame(() => this.tourDialog?.nativeElement.focus());
  }
  closeTour() {
    this.overlay.close("productScreenshotTour");
    this.previousFocus?.focus();
  }
  onKeydown(event) {
    if (!this.overlay.isOpen("productScreenshotTour"))
      return;
    if (event.key === "Escape")
      this.closeTour();
    if (event.key === "ArrowRight" || event.key === "ArrowLeft")
      this.tourIndex.update((index) => 1 - index);
    if (event.key === "Tab") {
      const buttons = this.tourDialog?.nativeElement.querySelectorAll("button");
      const first = buttons?.[0], last = buttons?.[buttons.length - 1];
      if (event.shiftKey && (document.activeElement === first || document.activeElement === this.tourDialog?.nativeElement)) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }
  }
  constructor() {
    inject(SeoService).set(this.page.title, this.page.description, `/${this.page.slug}`);
  }
  onLoad() {
    this.cleanup();
    const frame = this.frame?.nativeElement;
    const document2 = frame?.contentDocument;
    if (!frame || !document2?.body)
      return;
    this.frameDocument = document2;
    const resize = () => {
      frame.style.height = `${Math.ceil(document2.body.getBoundingClientRect().height)}px`;
    };
    resize();
    this.observer = new ResizeObserver(resize);
    this.observer.observe(document2.body);
    void document2.fonts.ready.then(resize);
    this.clickListener = (event) => {
      const action = event.target?.closest("[data-xh-action]")?.dataset["xhAction"];
      if (action) {
        event.preventDefault();
        if (action === "infosheet" || action === "presentation")
          this.requestDoc(action);
        else if (action === "tour")
          this.openTour();
        else if (action === "trial")
          this.overlay.open("trial");
        else
          this.openCallback();
        return;
      }
      const anchor = event.target?.closest("a[href]");
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || anchor.target === "_blank" || anchor.hasAttribute("download"))
        return;
      const href = anchor.getAttribute("href") ?? "";
      if (!href || href === "#")
        return;
      if (href.startsWith("#")) {
        const target = document2.getElementById(decodeURIComponent(href.slice(1)));
        if (!target)
          return;
        event.preventDefault();
        const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top;
        window.scrollTo({ top: top - 100, behavior: "smooth" });
        return;
      }
      const url = new URL(anchor.href);
      if (!["http:", "https:"].includes(url.protocol))
        return;
      if (url.origin !== window.location.origin && !["xcellhost.cloud", "xcellhost.cloud"].includes(url.hostname))
        return;
      event.preventDefault();
      const pathname = url.pathname.replace(/^\/assets\/menu-service-pages\//, "/").replace(/\.html$/, "");
      void this.router.navigateByUrl(`${pathname}${url.search}${url.hash}`);
    };
    document2.addEventListener("click", this.clickListener);
  }
  cleanup() {
    this.observer?.disconnect();
    if (this.frameDocument && this.clickListener)
      this.frameDocument.removeEventListener("click", this.clickListener);
  }
  ngOnDestroy() {
    this.cleanup();
    this.overlay.close("productScreenshotTour");
  }
  static \u0275fac = function MenuServicePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MenuServicePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MenuServicePage, selectors: [["xh-menu-service-page"]], viewQuery: function MenuServicePage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.tourDialog = _t.first);
    }
  }, hostBindings: function MenuServicePage_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("keydown", function MenuServicePage_keydown_HostBindingHandler($event) {
        return ctx.onKeydown($event);
      }, \u0275\u0275resolveDocument);
    }
  }, decls: 66, vars: 12, consts: [["frame", ""], ["tourDialog", ""], ["scrolling", "no", 1, "service-content", 3, "load", "src", "title"], ["id", "ppage", 1, "ppage", "as-page", "microsoft-365-enterprise-page"], [1, "pp-body", "microsoft-365-enterprise-extras"], [1, "wrap"], ["aria-labelledby", "serviceSecurityTitle"], ["id", "serviceSecurityTitle", 1, "pp-sec"], [1, "pp-ov"], [1, "pp-secrows"], [1, "psrow"], ["aria-labelledby", "serviceWhyTitle"], ["id", "serviceWhyTitle", 1, "pp-sec"], [1, "pp-why"], [1, "pw"], ["aria-labelledby", "serviceActionTitle", 1, "tally-videos"], ["aria-labelledby", "serviceReviewsTitle"], ["id", "serviceReviewsTitle", 1, "pp-sec"], [1, "pp-revs"], [1, "prv"], ["aria-labelledby", "serviceFaqTitle"], ["id", "serviceFaqTitle", 1, "pp-sec", "pp-faq-heading"], [1, "pp-faq"], ["idPrefix", "menuServiceFaq", 3, "faqs"], [1, "m365-enterprise-insights"], [3, "pageSlug", "videos"], ["aria-labelledby", "serviceClosingTitle", 1, "pp-cta", "service-closing-cta"], ["id", "serviceClosingTitle"], [1, "service-closing-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost", 3, "href"], [1, "btn", "btn-ghost", 3, "href"], ["routerLink", "/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost 24\xD77 support", 1, "pp-cta-buddha"], ["aria-label", "XcellHost credentials and payment options", 1, "pp-proof"], [1, "cdr-tour-backdrop"], [1, "psk"], [1, "psv"], ["aria-hidden", "true", 1, "pw-ic"], ["viewBox", "0 0 24 24"], ["id", "serviceActionTitle", 1, "pp-sec"], [1, "tally-video-grid", "single-video"], [1, "tally-video-card"], [1, "tally-video-frame"], ["loading", "lazy", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 3, "src", "title"], [1, "service-demo"], ["aria-hidden", "true"], [1, "stars"], [3, "off"], [1, "rav"], [1, "cdr-tour-backdrop", 3, "click"], ["role", "dialog", "aria-modal", "true", "aria-labelledby", "serviceTourTitle", "tabindex", "-1", 1, "cdr-tour-dialog", 3, "click"], ["type", "button", "aria-label", "Close screenshot tour", 1, "cdr-tour-close", 3, "click"], [1, "cdr-tour-heading"], ["id", "serviceTourTitle"], [1, "cdr-tour-stage"], [1, "cdr-tour-slide", 3, "is-active"], ["type", "button", "aria-label", "Previous screenshot", 1, "cdr-tour-arrow", "cdr-tour-prev", 3, "click"], ["type", "button", "aria-label", "Next screenshot", 1, "cdr-tour-arrow", "cdr-tour-next", 3, "click"], [1, "cdr-tour-slide"], [3, "src", "alt"]], template: function MenuServicePage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "iframe", 2, 0);
      \u0275\u0275listener("load", function MenuServicePage_Template_iframe_load_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLoad());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 3)(3, "div", 4)(4, "div", 5)(5, "section", 6)(6, "h2", 7);
      \u0275\u0275text(7, "Security & compliance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 8);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 9);
      \u0275\u0275repeaterCreate(11, MenuServicePage_For_12_Template, 5, 2, "div", 10, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "section", 11)(14, "h2", 12);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 13);
      \u0275\u0275repeaterCreate(17, MenuServicePage_For_18_Template, 8, 3, "div", 14, _forTrack1);
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(19, MenuServicePage_Conditional_19_Template, 11, 2, "section", 15);
      \u0275\u0275elementStart(20, "section", 16)(21, "h2", 17);
      \u0275\u0275text(22, "What customers say");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "div", 18);
      \u0275\u0275repeaterCreate(24, MenuServicePage_For_25_Template, 13, 5, "div", 19, _forTrack2);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "section", 20)(27, "h2", 21);
      \u0275\u0275text(28, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 22);
      \u0275\u0275element(30, "xh-product-faq", 23);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 24);
      \u0275\u0275element(32, "xh-insights-section", 25);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "section", 26)(34, "div")(35, "h3", 27);
      \u0275\u0275text(36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p");
      \u0275\u0275text(38, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 28)(40, "button", 29);
      \u0275\u0275listener("click", function MenuServicePage_Template_button_click_40_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCallback());
      });
      \u0275\u0275text(41, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "button", 30);
      \u0275\u0275listener("click", function MenuServicePage_Template_button_click_42_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.buyNow());
      });
      \u0275\u0275text(43, "\u26A1 Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "button", 30);
      \u0275\u0275listener("click", function MenuServicePage_Template_button_click_44_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestDoc("infosheet"));
      });
      \u0275\u0275text(45, "\u2B07 Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "button", 30);
      \u0275\u0275listener("click", function MenuServicePage_Template_button_click_46_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestDoc("presentation"));
      });
      \u0275\u0275text(47, "\u25A3 Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "a", 31);
      \u0275\u0275text(49, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "a", 32);
      \u0275\u0275text(51, "Email Us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "a", 33);
      \u0275\u0275element(53, "img", 34);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(54, "div", 35)(55, "span");
      \u0275\u0275text(56, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "span");
      \u0275\u0275text(58, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "span");
      \u0275\u0275text(60, "\u{1F91D} Microsoft Gold Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "span");
      \u0275\u0275text(62, "\u{1F570} Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "span");
      \u0275\u0275text(64, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275conditionalCreate(65, MenuServicePage_Conditional_65_Template, 19, 1, "div", 36);
    }
    if (rf & 2) {
      \u0275\u0275property("src", ctx.pageUrl, \u0275\u0275sanitizeResourceUrl)("title", ctx.page.title);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.view.security.intro);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.view.security.rows);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Why XcellHost for ", ctx.page.name);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.view.why);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(false ? 19 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.view.reviews);
      \u0275\u0275advance(6);
      \u0275\u0275property("faqs", ctx.view.faqs);
      \u0275\u0275advance(2);
      \u0275\u0275property("pageSlug", ctx.page.slug)("videos", ctx.insightVideos);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("Ready to start with ", ctx.page.name, "?");
      \u0275\u0275advance(12);
      \u0275\u0275property("href", ctx.whatsappUrl, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.emailUrl, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(15);
      \u0275\u0275conditional(ctx.overlay.isOpen("productScreenshotTour") ? 65 : -1);
    }
  }, dependencies: [ProductFaqComponent, InsightsSectionComponent, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.service-content[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  min-height: 720px;\n  border: 0;\n}\n.service-demo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  padding: 24px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #071e42,\n      #174e96);\n  color: #fff;\n}\n.service-demo[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 38px;\n  color: #ff8c1a;\n}\n.service-demo[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.service-demo[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #d3e3fa;\n}\n.service-demo[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.service-demo[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #7893b5;\n}\n.cdr-tour-stage[_ngcontent-%COMP%] {\n  min-height: 0;\n}\n.cdr-tour-slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 65vh;\n  object-fit: contain;\n}\n.service-closing-cta[_ngcontent-%COMP%] {\n  margin-top: 40px;\n}\n.service-closing-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.service-closing-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.service-closing-actions[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  color: #fff;\n  background: rgba(255, 255, 255, .04);\n  border-color: rgba(255, 255, 255, .35);\n}\n@media (max-width: 700px) {\n  .service-closing-cta[_ngcontent-%COMP%] {\n    margin-top: 32px;\n  }\n  .service-closing-actions[_ngcontent-%COMP%] {\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=menu-service.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MenuServicePage, [{
    type: Component,
    args: [{ selector: "xh-menu-service-page", standalone: true, imports: [ProductFaqComponent, InsightsSectionComponent, RouterLink], changeDetection: ChangeDetectionStrategy.OnPush, template: `<iframe #frame class="service-content" [src]="pageUrl" [title]="page.title" scrolling="no" (load)="onLoad()"></iframe>\r
<div id="ppage" class="ppage as-page microsoft-365-enterprise-page">\r
  <div class="pp-body microsoft-365-enterprise-extras">\r
    <div class="wrap">\r
      <section aria-labelledby="serviceSecurityTitle">\r
        <h2 class="pp-sec" id="serviceSecurityTitle">Security &amp; compliance</h2>\r
        <p class="pp-ov">{{ view.security.intro }}</p>\r
        <div class="pp-secrows">\r
          @for (row of view.security.rows; track row[0]) {\r
            <div class="psrow"><span class="psk">{{ row[0] }}</span><span class="psv">{{ row[1] }}</span></div>\r
          }\r
        </div>\r
      </section>\r
      <section aria-labelledby="serviceWhyTitle">\r
        <h2 class="pp-sec" id="serviceWhyTitle">Why XcellHost for {{ page.name }}</h2>\r
        <div class="pp-why">\r
          @for (reason of view.why; track reason.title) {\r
            <div class="pw"><span class="pw-ic" aria-hidden="true">@if (reason.icon.startsWith('M')) { <svg viewBox="0 0 24 24"><path [attr.d]="reason.icon" /></svg> } @else { {{ reason.icon }} }</span><b>{{ reason.title }}</b><span>{{ reason.body }}</span></div>\r
          }\r
        </div>\r
      </section>\r
      @if (false) {\r
      <section class="tally-videos" aria-labelledby="serviceActionTitle">\r
        <h2 class="pp-sec" id="serviceActionTitle">Watch it in action</h2>\r
        <div class="tally-video-grid single-video">\r
          <article class="tally-video-card">\r
            <h3><span>{{ page.name }} overview</span></h3>\r
            <div class="tally-video-frame">\r
              @if (videoUrl) {\r
                <iframe [src]="videoUrl" [title]="page.name + ' overview'" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>\r
              } @else {\r
                <div class="service-demo"><span aria-hidden="true">\u25B6</span><strong>See {{ page.name }} in action</strong><p>Explore the screenshot tour or request a guided demonstration.</p><div><button class="btn btn-ghost" type="button" (click)="openTour()">Screenshot Tour</button><button class="btn btn-primary" type="button" (click)="openCallback()">Request a demo</button></div></div>\r
              }\r
            </div>\r
          </article>\r
        </div>\r
      </section>\r
      }\r
      <section aria-labelledby="serviceReviewsTitle">\r
        <h2 class="pp-sec" id="serviceReviewsTitle">What customers say</h2>\r
        <div class="pp-revs">\r
          @for (review of view.reviews; track review.name) {\r
            <div class="prv"><div class="stars" [attr.aria-label]="review.stars + ' out of 5 stars'">@for (slot of starSlots; track slot) { <span [class.off]="slot >= review.stars">\u2605</span> }</div><p>\u201C{{ review.quote }}\u201D</p><cite><span class="rav">{{ review.initials }}</span><span><b>{{ review.name }}</b>{{ review.role }}</span></cite></div>\r
          }\r
        </div>\r
      </section>\r
      <section aria-labelledby="serviceFaqTitle">\r
        <h2 class="pp-sec pp-faq-heading" id="serviceFaqTitle">Frequently asked questions</h2>\r
        <div class="pp-faq"><xh-product-faq [faqs]="view.faqs" idPrefix="menuServiceFaq" /></div>\r
      </section>\r
      <div class="m365-enterprise-insights"><xh-insights-section [pageSlug]="page.slug" [videos]="insightVideos" /></div>\r
      <section class="pp-cta service-closing-cta" aria-labelledby="serviceClosingTitle">\r
        <div>\r
          <h3 id="serviceClosingTitle">Ready to start with {{ page.name }}?</h3>\r
          <p>FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English &amp; Hindi</p>\r
        </div>\r
        <div class="service-closing-actions">\r
          <button class="btn btn-primary" type="button" (click)="openCallback()">Request a callback</button>\r
          <button class="btn btn-ghost" type="button" (click)="buyNow()">\u26A1 Buy Now</button>\r
          <button class="btn btn-ghost" type="button" (click)="requestDoc('infosheet')">\u2B07 Infosheet</button>\r
          <button class="btn btn-ghost" type="button" (click)="requestDoc('presentation')">\u25A3 Presentation</button>\r
          <a class="btn btn-ghost" [href]="whatsappUrl" target="_blank" rel="noopener">Talk on WhatsApp</a>\r
          <a class="btn btn-ghost" [href]="emailUrl">Email Us</a>\r
        </div>\r
        <a class="pp-cta-buddha-link" routerLink="/support-overview" aria-label="Visit XcellHost customer support"><img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost 24\xD77 support" /></a>\r
      </section>\r
      <div class="pp-proof" aria-label="XcellHost credentials and payment options">\r
        <span>\u{1F3C5} ISO 27001</span><span>\u{1F3C5} ISO 20000-1</span><span>\u{1F91D} Microsoft Gold Partner</span><span>\u{1F570} Since 1999</span><span>\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking</span>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
@if (overlay.isOpen('productScreenshotTour')) {\r
  <div class="cdr-tour-backdrop" (click)="closeTour()">\r
    <section #tourDialog class="cdr-tour-dialog" role="dialog" aria-modal="true" aria-labelledby="serviceTourTitle" tabindex="-1" (click)="$event.stopPropagation()">\r
      <button class="cdr-tour-close" type="button" aria-label="Close screenshot tour" (click)="closeTour()">\xD7</button>\r
      <div class="cdr-tour-heading"><span>{{ page.name }}</span><h2 id="serviceTourTitle">Screenshot Tour</h2><p>Explore the service overview and its capabilities.</p></div>\r
      <div class="cdr-tour-stage">\r
        @for (slide of tourSlides; track slide.image; let i = $index) {\r
          <figure class="cdr-tour-slide" [class.is-active]="i === tourIndex()" [attr.aria-hidden]="i !== tourIndex()"><img [src]="slide.image" [alt]="page.name + ': ' + slide.title" /><figcaption><strong>{{ slide.title }}</strong></figcaption></figure>\r
        }\r
        <button class="cdr-tour-arrow cdr-tour-prev" type="button" aria-label="Previous screenshot" (click)="tourIndex.update(toggleIndex)">\u2039</button>\r
        <button class="cdr-tour-arrow cdr-tour-next" type="button" aria-label="Next screenshot" (click)="tourIndex.update(toggleIndex)">\u203A</button>\r
      </div>\r
    </section>\r
  </div>\r
}\r
`, styles: ["/* src/app/pages/menu-service.page.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.service-content {\n  display: block;\n  width: 100%;\n  min-height: 720px;\n  border: 0;\n}\n.service-demo {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 12px;\n  padding: 24px;\n  text-align: center;\n  background:\n    linear-gradient(\n      135deg,\n      #071e42,\n      #174e96);\n  color: #fff;\n}\n.service-demo > span {\n  font-size: 38px;\n  color: #ff8c1a;\n}\n.service-demo strong {\n  font-size: 20px;\n}\n.service-demo p {\n  font-size: 14px;\n  color: #d3e3fa;\n}\n.service-demo > div {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n.service-demo .btn-ghost {\n  color: #fff;\n  border-color: #7893b5;\n}\n.cdr-tour-stage {\n  min-height: 0;\n}\n.cdr-tour-slide img {\n  max-height: 65vh;\n  object-fit: contain;\n}\n.service-closing-cta {\n  margin-top: 40px;\n}\n.service-closing-cta h3 {\n  color: #fff;\n}\n.service-closing-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n}\n.service-closing-actions .btn-ghost {\n  color: #fff;\n  background: rgba(255, 255, 255, .04);\n  border-color: rgba(255, 255, 255, .35);\n}\n@media (max-width: 700px) {\n  .service-closing-cta {\n    margin-top: 32px;\n  }\n  .service-closing-actions {\n    gap: 10px;\n  }\n}\n/*# sourceMappingURL=menu-service.page.css.map */\n"] }]
  }], () => [], { frame: [{
    type: ViewChild,
    args: ["frame"]
  }], tourDialog: [{
    type: ViewChild,
    args: ["tourDialog"]
  }], onKeydown: [{
    type: HostListener,
    args: ["document:keydown", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MenuServicePage, { className: "MenuServicePage", filePath: "src/app/pages/menu-service.page.ts", lineNumber: 25 });
})();
export {
  MenuServicePage
};
//# sourceMappingURL=chunk-Q3X75SN7.js.map
