import {
  GpuLeadHeroComponent
} from "./chunk-KKNAOUDV.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-EVL5GQOW.js";
import "./chunk-MAWJHU3X.js";
import {
  DocRequestService
} from "./chunk-FGJ7AN27.js";
import {
  SITE
} from "./chunk-LN7P5EZP.js";
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
import {
  Router,
  RouterLink
} from "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/nvidia-b300.page.ts
var _c0 = ["frame"];
var _c1 = () => ["nvidia-b300"];
var _forTrack0 = ($index, $item) => $item.title;
function NvidiaB300Page_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1, "NVIDIA B300 from XcellHost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Start with your model size and GPU count. Plan GPU memory, host RAM, networking and storage, then choose a deployment configuration with an INR quote.");
    \u0275\u0275elementEnd();
  }
}
function NvidiaB300Page_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3");
    \u0275\u0275text(1, "Match the configuration to your workload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Plan multi-GPU model training, long-context reasoning or high-volume inference. Confirm framework versions, model precision and performance targets during the sizing assessment.");
    \u0275\u0275elementEnd();
  }
}
function NvidiaB300Page_For_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 20)(1, "span", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 33);
    \u0275\u0275text(6, "Customer references on request");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 14);
    \u0275\u0275listener("click", function NvidiaB300Page_For_47_Template_button_click_9_listener() {
      const reference_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openCallback("NVIDIA B300: customer references for " + reference_r3.title));
    });
    \u0275\u0275text(10, "Request references \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const reference_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reference_r3.initials);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(reference_r3.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(reference_r3.description);
  }
}
var NvidiaB300Page = class _NvidiaB300Page {
  frame;
  router = inject(Router);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  docs = inject(DocRequestService);
  cart = inject(CartService);
  name = "NVIDIA B300 Nodes";
  activePreview = signal("intro", ...ngDevMode ? [{ debugName: "activePreview" }] : []);
  references = [
    { initials: "AI", title: "Model training teams", description: "Discuss references for model training, GPU memory planning and multi-GPU deployment." },
    { initials: "ML", title: "Inference platform teams", description: "Ask about references for LLM serving, software setup and inference capacity planning." },
    { initials: "IT", title: "Enterprise IT teams", description: "Explore references for GPU hosting in India, deployment support and ongoing operations." }
  ];
  whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent("Hi, I am interested in NVIDIA B300 GPU capacity.")}`;
  emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent("Enquiry: NVIDIA B300 GPU capacity")}`;
  observer;
  frameDocument;
  clickListener;
  openCallback(topic = "NVIDIA B300: GPU sizing and capacity assessment") {
    this.topics.ask(topic);
    this.overlay.open("callback");
  }
  requestDoc(kind) {
    this.docs.ask(kind, this.name);
    this.overlay.open("doc");
  }
  buyNow() {
    this.cart.add(this.name, "Quote on request");
    this.cart.open();
    this.overlay.open("cart");
  }
  constructor() {
    inject(SeoService).set("NVIDIA B300 Nodes in India | XcellHost", "Reserve NVIDIA B300 node capacity for large-scale AI training, reasoning and inference with deployment support from XcellHost.", "/nvidia-b300-nodes/");
  }
  onLoad() {
    this.cleanup();
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    const main = document?.querySelector("main");
    if (!frame || !document || !main)
      return;
    this.frameDocument = document;
    const resize = () => {
      frame.style.height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    void document.fonts.ready.then(resize);
    resize();
    this.clickListener = (event) => {
      const anchor = event.target?.closest("a[href]");
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || anchor.target === "_blank")
        return;
      const href = anchor.getAttribute("href") ?? "";
      if (href === "#lead") {
        event.preventDefault();
        const request = anchor.id === "qVq" ? "cluster quote" : anchor.id === "qGo" ? "reserve configuration" : "sizing call";
        const configuration = document.getElementById("qN")?.textContent?.trim() ?? "";
        const rate = document.getElementById("qH")?.textContent?.trim() ?? "";
        const gst = document.querySelector('#qx .gst button[aria-pressed="true"]')?.textContent?.trim() ?? "";
        this.topics.ask(`NVIDIA B300: ${request} \u2014 ${configuration} \u2014 ${rate} \u2014 ${gst}`);
        this.overlay.open("callback");
      } else if (href.startsWith("#")) {
        const target = document.getElementById(href.slice(1));
        if (!target)
          return;
        event.preventDefault();
        const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top;
        window.scrollTo({ top: top - 100, behavior: "smooth" });
      } else if (href.startsWith("/")) {
        event.preventDefault();
        void this.router.navigateByUrl(href);
      }
    };
    document.addEventListener("click", this.clickListener);
  }
  cleanup() {
    this.observer?.disconnect();
    if (this.frameDocument && this.clickListener)
      this.frameDocument.removeEventListener("click", this.clickListener);
    this.frameDocument = void 0;
    this.clickListener = void 0;
  }
  ngOnDestroy() {
    this.cleanup();
  }
  static \u0275fac = function NvidiaB300Page_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NvidiaB300Page)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NvidiaB300Page, selectors: [["xh-nvidia-b300-page"]], viewQuery: function NvidiaB300Page_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, decls: 81, vars: 8, consts: [["frame", ""], ["src", \u0275\u0275trustConstantResourceUrl`/nvidia-b300-content.html`, "title", "NVIDIA B300 GPU servers, pricing and technical specifications", "scrolling", "no", 1, "b300-content", 3, "load"], ["slug", "nvidia-b300-nodes", "productName", "NVIDIA B300 Nodes"], ["id", "ppage", 1, "ppage", "as-page", "b300-page"], [1, "pp-body"], [1, "wrap"], ["aria-labelledby", "b300-action-title"], ["id", "b300-action-title", 1, "pp-sec"], [1, "b300-preview-grid"], [1, "b300-preview-card"], ["type", "button", "aria-controls", "b300-preview-detail", 1, "b300-preview", 3, "click"], ["aria-hidden", "true", 1, "b300-chip"], ["aria-hidden", "true", 1, "b300-workloads"], ["id", "b300-preview-detail", "aria-live", "polite", 1, "b300-preview-detail"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], [1, "b300-note"], ["aria-labelledby", "b300-references-title"], ["id", "b300-references-title", 1, "pp-sec"], [1, "b300-intro"], [1, "b300-reference-grid"], [1, "b300-reference-card"], ["pageSlug", "nvidia-b300-nodes", 3, "pageAliases", "showVideos"], ["aria-labelledby", "b300-cta-title", 1, "pp-cta", "b300-closing-cta"], [1, "b300-cta-copy"], ["id", "b300-cta-title"], [1, "b300-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost", 3, "href"], [1, "btn", "btn-ghost", 3, "href"], ["routerLink", "/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost customer support", 1, "pp-cta-buddha"], ["aria-label", "XcellHost credentials and payment options", 1, "pp-proof"], ["aria-hidden", "true", 1, "b300-avatar"], [1, "b300-reference-label"]], template: function NvidiaB300Page_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "iframe", 1, 0);
      \u0275\u0275listener("load", function NvidiaB300Page_Template_iframe_load_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLoad());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "xh-gpu-lead-hero", 2);
      \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "section", 6)(7, "h2", 7);
      \u0275\u0275text(8, "Watch it in action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 8)(10, "article", 9)(11, "h3");
      \u0275\u0275text(12, "Product intro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 10);
      \u0275\u0275listener("click", function NvidiaB300Page_Template_button_click_13_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.activePreview.set("intro"));
      });
      \u0275\u0275elementStart(14, "span", 11);
      \u0275\u0275text(15, "B300");
      \u0275\u0275elementStart(16, "small");
      \u0275\u0275text(17, "288 GB HBM3e");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Explore Blackwell Ultra GPU capacity");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "article", 9)(21, "h3");
      \u0275\u0275text(22, "Use cases");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 10);
      \u0275\u0275listener("click", function NvidiaB300Page_Template_button_click_23_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.activePreview.set("use-cases"));
      });
      \u0275\u0275elementStart(24, "span", 12)(25, "span");
      \u0275\u0275text(26, "TRAIN");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "span");
      \u0275\u0275text(28, "REASON");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "span");
      \u0275\u0275text(30, "SERVE");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "span");
      \u0275\u0275text(32, "Plan training, reasoning and inference");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(33, "div", 13);
      \u0275\u0275conditionalCreate(34, NvidiaB300Page_Conditional_34_Template, 4, 0)(35, NvidiaB300Page_Conditional_35_Template, 4, 0);
      \u0275\u0275elementStart(36, "button", 14);
      \u0275\u0275listener("click", function NvidiaB300Page_Template_button_click_36_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCallback("NVIDIA B300: request a workload walkthrough"));
      });
      \u0275\u0275text(37, "Request a walkthrough \u2192");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(38, "p", 15);
      \u0275\u0275text(39, "Interactive product illustrations.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "section", 16)(41, "h2", 17);
      \u0275\u0275text(42, "What customers say");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "p", 18);
      \u0275\u0275text(44, "Ask our team about available customer references for your AI workload.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 19);
      \u0275\u0275repeaterCreate(46, NvidiaB300Page_For_47_Template, 11, 3, "article", 20, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(48, "xh-insights-section", 21);
      \u0275\u0275elementStart(49, "section", 22)(50, "div", 23)(51, "h3", 24);
      \u0275\u0275text(52, "Ready to plan your NVIDIA B300 deployment?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "p");
      \u0275\u0275text(54, "GPU sizing \xB7 Software setup \xB7 Deployment support \xB7 INR billing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "div", 25)(56, "button", 26);
      \u0275\u0275listener("click", function NvidiaB300Page_Template_button_click_56_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCallback());
      });
      \u0275\u0275text(57, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 14);
      \u0275\u0275listener("click", function NvidiaB300Page_Template_button_click_58_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.buyNow());
      });
      \u0275\u0275text(59, "Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "button", 14);
      \u0275\u0275listener("click", function NvidiaB300Page_Template_button_click_60_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestDoc("infosheet"));
      });
      \u0275\u0275text(61, "Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "button", 14);
      \u0275\u0275listener("click", function NvidiaB300Page_Template_button_click_62_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestDoc("presentation"));
      });
      \u0275\u0275text(63, "Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "a", 27);
      \u0275\u0275text(65, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "a", 28);
      \u0275\u0275text(67, "Email Us");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(68, "a", 29);
      \u0275\u0275element(69, "img", 30);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(70, "div", 31)(71, "span");
      \u0275\u0275text(72, "ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "span");
      \u0275\u0275text(74, "ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "span");
      \u0275\u0275text(76, "Hosted in India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "span");
      \u0275\u0275text(78, "Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "span");
      \u0275\u0275text(80, "Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(13);
      \u0275\u0275attribute("aria-pressed", ctx.activePreview() === "intro");
      \u0275\u0275advance(10);
      \u0275\u0275attribute("aria-pressed", ctx.activePreview() === "use-cases");
      \u0275\u0275advance(11);
      \u0275\u0275conditional(ctx.activePreview() === "intro" ? 34 : 35);
      \u0275\u0275advance(12);
      \u0275\u0275repeater(ctx.references);
      \u0275\u0275advance(2);
      \u0275\u0275property("pageAliases", \u0275\u0275pureFunction0(7, _c1))("showVideos", false);
      \u0275\u0275advance(16);
      \u0275\u0275property("href", ctx.whatsappUrl, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.emailUrl, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [RouterLink, InsightsSectionComponent, GpuLeadHeroComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.b300-content[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 3400px;\n  border: 0;\n  background: transparent;\n}\n.b300-page[_ngcontent-%COMP%]   .pp-body[_ngcontent-%COMP%] {\n  padding-top: 12px;\n}\n.b300-page[_ngcontent-%COMP%]   .pp-body[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {\n  padding: 16px 0 24px;\n}\n.b300-preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n  margin-bottom: 18px;\n}\n.b300-preview-card[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.b300-preview-card[_ngcontent-%COMP%]    > h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font: 700 11px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin-bottom: 14px;\n}\n.b300-preview[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  min-height: 250px;\n  width: 100%;\n  padding: 26px 16px;\n  border: 2px solid transparent;\n  border-radius: 16px;\n  background:\n    radial-gradient(\n      ellipse at 50% 10%,\n      #183d64,\n      #041e42 80%);\n  color: #fff;\n  font: 700 16px var(--disp);\n  cursor: pointer;\n}\n.b300-preview[_ngcontent-%COMP%]:hover, \n.b300-preview[aria-pressed=true][_ngcontent-%COMP%] {\n  border-color: #76b900;\n  box-shadow: 0 8px 24px #041e421a;\n}\n.b300-chip[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  gap: 12px;\n  min-width: 160px;\n  padding: 24px;\n  border: 2px solid #76b900;\n  border-radius: 14px;\n  box-shadow: 0 0 30px #76b90033;\n  font-size: 36px;\n}\n.b300-chip[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font: 600 12px var(--mono);\n  color: #c5eaa0;\n}\n.b300-workloads[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n}\n.b300-workloads[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 86px;\n  height: 86px;\n  border: 1px solid #76b900;\n  border-radius: 50%;\n  font: 700 12px var(--mono);\n  color: #c5eaa0;\n}\n.b300-preview-detail[_ngcontent-%COMP%] {\n  padding: 22px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--ice);\n  display: grid;\n  gap: 12px;\n}\n.b300-preview-detail[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], \n.b300-reference-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 700 18px var(--disp);\n  color: var(--navy);\n}\n.b300-preview-detail[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.b300-intro[_ngcontent-%COMP%], \n.b300-reference-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.7;\n  color: var(--slate);\n}\n.b300-preview-detail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n.b300-note[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 12px;\n  color: var(--slate);\n}\n.b300-intro[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.b300-reference-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.b300-reference-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 14px;\n  min-width: 0;\n  padding: 24px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n}\n.b300-avatar[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--blue);\n  color: #fff;\n  font: 800 16px var(--disp);\n}\n.b300-reference-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--slate);\n}\n.b300-reference-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: auto;\n  white-space: normal;\n}\n#ppage.b300-page[_ngcontent-%COMP%]   .b300-closing-cta[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 104px;\n  align-items: center;\n  gap: 32px;\n  margin-top: 30px;\n  padding: 32px 36px;\n  min-height: 190px;\n}\n.b300-cta-copy[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.b300-closing-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #fff;\n  font-size: 24px;\n  line-height: 1.4;\n}\n.b300-closing-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0 0;\n  line-height: 1.6;\n}\n.b300-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.b300-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 11px 18px;\n  line-height: 1.4;\n  white-space: nowrap;\n  animation: none;\n}\n.b300-actions[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: #ffffff66;\n  background: #ffffff0a;\n}\n#ppage.b300-page[_ngcontent-%COMP%]   .b300-closing-cta[_ngcontent-%COMP%]   .pp-cta-buddha-link[_ngcontent-%COMP%] {\n  position: static;\n  display: block;\n  width: 104px;\n  height: 104px;\n  transform: none;\n  margin: 0;\n  justify-self: end;\n}\n#ppage.b300-page[_ngcontent-%COMP%]   .b300-closing-cta[_ngcontent-%COMP%]   .pp-cta-buddha-link[_ngcontent-%COMP%]:hover {\n  transform: scale(1.06);\n}\n.b300-page[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:focus-visible, \n.b300-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus-visible {\n  outline: 3px solid var(--orange);\n  outline-offset: 3px;\n}\n@media (max-width: 760px) {\n  .b300-preview-grid[_ngcontent-%COMP%], \n   .b300-reference-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .b300-preview[_ngcontent-%COMP%] {\n    min-height: 230px;\n  }\n  #ppage.b300-page[_ngcontent-%COMP%]   .b300-closing-cta[_ngcontent-%COMP%] {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 24px;\n    padding: 28px 24px;\n    min-height: 0;\n  }\n  .b300-closing-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 21px;\n  }\n  .b300-actions[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px;\n  }\n  .b300-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    padding: 11px 8px;\n    white-space: normal;\n  }\n  .b300-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n   .b300-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n    grid-column: 1 / -1;\n  }\n  #ppage.b300-page[_ngcontent-%COMP%]   .b300-closing-cta[_ngcontent-%COMP%]   .pp-cta-buddha-link[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 80px;\n    justify-self: center;\n  }\n}\n/*# sourceMappingURL=nvidia-b300.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NvidiaB300Page, [{
    type: Component,
    args: [{ selector: "xh-nvidia-b300-page", standalone: true, imports: [RouterLink, InsightsSectionComponent, GpuLeadHeroComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<iframe #frame class="b300-content" src="/nvidia-b300-content.html"\r
  title="NVIDIA B300 GPU servers, pricing and technical specifications"\r
  scrolling="no" (load)="onLoad()"></iframe>\r
\r
<xh-gpu-lead-hero slug="nvidia-b300-nodes" productName="NVIDIA B300 Nodes" />\r
\r
<div id="ppage" class="ppage as-page b300-page">\r
  <div class="pp-body"><div class="wrap">\r
    <section aria-labelledby="b300-action-title">\r
      <h2 class="pp-sec" id="b300-action-title">Watch it in action</h2>\r
      <div class="b300-preview-grid">\r
        <article class="b300-preview-card">\r
          <h3>Product intro</h3>\r
          <button class="b300-preview" type="button" [attr.aria-pressed]="activePreview() === 'intro'" aria-controls="b300-preview-detail" (click)="activePreview.set('intro')">\r
            <span class="b300-chip" aria-hidden="true">B300<small>288 GB HBM3e</small></span>\r
            <span>Explore Blackwell Ultra GPU capacity</span>\r
          </button>\r
        </article>\r
        <article class="b300-preview-card">\r
          <h3>Use cases</h3>\r
          <button class="b300-preview" type="button" [attr.aria-pressed]="activePreview() === 'use-cases'" aria-controls="b300-preview-detail" (click)="activePreview.set('use-cases')">\r
            <span class="b300-workloads" aria-hidden="true"><span>TRAIN</span><span>REASON</span><span>SERVE</span></span>\r
            <span>Plan training, reasoning and inference</span>\r
          </button>\r
        </article>\r
      </div>\r
      <div class="b300-preview-detail" id="b300-preview-detail" aria-live="polite">\r
        @if (activePreview() === 'intro') {\r
          <h3>NVIDIA B300 from XcellHost</h3>\r
          <p>Start with your model size and GPU count. Plan GPU memory, host RAM, networking and storage, then choose a deployment configuration with an INR quote.</p>\r
        } @else {\r
          <h3>Match the configuration to your workload</h3>\r
          <p>Plan multi-GPU model training, long-context reasoning or high-volume inference. Confirm framework versions, model precision and performance targets during the sizing assessment.</p>\r
        }\r
        <button class="btn btn-ghost" type="button" (click)="openCallback('NVIDIA B300: request a workload walkthrough')">Request a walkthrough &rarr;</button>\r
      </div>\r
      <p class="b300-note">Interactive product illustrations.</p>\r
    </section>\r
\r
    <section aria-labelledby="b300-references-title">\r
      <h2 class="pp-sec" id="b300-references-title">What customers say</h2>\r
      <p class="b300-intro">Ask our team about available customer references for your AI workload.</p>\r
      <div class="b300-reference-grid">\r
        @for (reference of references; track reference.title) {\r
          <article class="b300-reference-card">\r
            <span class="b300-avatar" aria-hidden="true">{{ reference.initials }}</span>\r
            <h3>{{ reference.title }}</h3>\r
            <span class="b300-reference-label">Customer references on request</span>\r
            <p>{{ reference.description }}</p>\r
            <button class="btn btn-ghost" type="button" (click)="openCallback('NVIDIA B300: customer references for ' + reference.title)">Request references &rarr;</button>\r
          </article>\r
        }\r
      </div>\r
    </section>\r
\r
    <xh-insights-section pageSlug="nvidia-b300-nodes" [pageAliases]="['nvidia-b300']" [showVideos]="false" />\r
\r
    <section class="pp-cta b300-closing-cta" aria-labelledby="b300-cta-title">\r
      <div class="b300-cta-copy">\r
        <h3 id="b300-cta-title">Ready to plan your NVIDIA B300 deployment?</h3>\r
        <p>GPU sizing &middot; Software setup &middot; Deployment support &middot; INR billing</p>\r
        <div class="b300-actions">\r
          <button class="btn btn-primary" type="button" (click)="openCallback()">Request a callback</button>\r
          <button class="btn btn-ghost" type="button" (click)="buyNow()">Buy Now</button>\r
          <button class="btn btn-ghost" type="button" (click)="requestDoc('infosheet')">Infosheet</button>\r
          <button class="btn btn-ghost" type="button" (click)="requestDoc('presentation')">Presentation</button>\r
          <a class="btn btn-ghost" [href]="whatsappUrl" target="_blank" rel="noopener">Talk on WhatsApp</a>\r
          <a class="btn btn-ghost" [href]="emailUrl">Email Us</a>\r
        </div>\r
      </div>\r
      <a class="pp-cta-buddha-link" routerLink="/support-overview" aria-label="Visit XcellHost customer support"><img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost customer support" /></a>\r
    </section>\r
    <div class="pp-proof" aria-label="XcellHost credentials and payment options"><span>ISO 27001</span><span>ISO 20000-1</span><span>Hosted in India</span><span>Since 1999</span><span>Secure Payments &mdash; UPI &middot; Cards &middot; NetBanking</span></div>\r
  </div></div>\r
</div>\r
`, styles: ["/* src/app/pages/nvidia-b300.page.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.b300-content {\n  display: block;\n  width: 100%;\n  height: 3400px;\n  border: 0;\n  background: transparent;\n}\n.b300-page .pp-body {\n  padding-top: 12px;\n}\n.b300-page .pp-body > .wrap > section {\n  padding: 16px 0 24px;\n}\n.b300-preview-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 20px;\n  margin-bottom: 18px;\n}\n.b300-preview-card {\n  min-width: 0;\n}\n.b300-preview-card > h3 {\n  text-align: center;\n  font: 700 11px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin-bottom: 14px;\n}\n.b300-preview {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 24px;\n  min-height: 250px;\n  width: 100%;\n  padding: 26px 16px;\n  border: 2px solid transparent;\n  border-radius: 16px;\n  background:\n    radial-gradient(\n      ellipse at 50% 10%,\n      #183d64,\n      #041e42 80%);\n  color: #fff;\n  font: 700 16px var(--disp);\n  cursor: pointer;\n}\n.b300-preview:hover,\n.b300-preview[aria-pressed=true] {\n  border-color: #76b900;\n  box-shadow: 0 8px 24px #041e421a;\n}\n.b300-chip {\n  display: grid;\n  place-items: center;\n  gap: 12px;\n  min-width: 160px;\n  padding: 24px;\n  border: 2px solid #76b900;\n  border-radius: 14px;\n  box-shadow: 0 0 30px #76b90033;\n  font-size: 36px;\n}\n.b300-chip small {\n  font: 600 12px var(--mono);\n  color: #c5eaa0;\n}\n.b300-workloads {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n}\n.b300-workloads > span {\n  display: grid;\n  place-items: center;\n  width: 86px;\n  height: 86px;\n  border: 1px solid #76b900;\n  border-radius: 50%;\n  font: 700 12px var(--mono);\n  color: #c5eaa0;\n}\n.b300-preview-detail {\n  padding: 22px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--ice);\n  display: grid;\n  gap: 12px;\n}\n.b300-preview-detail h3,\n.b300-reference-card h3 {\n  font: 700 18px var(--disp);\n  color: var(--navy);\n}\n.b300-preview-detail p,\n.b300-intro,\n.b300-reference-card p {\n  font-size: 14px;\n  line-height: 1.7;\n  color: var(--slate);\n}\n.b300-preview-detail .btn {\n  justify-self: start;\n}\n.b300-note {\n  margin-top: 10px;\n  font-size: 12px;\n  color: var(--slate);\n}\n.b300-intro {\n  margin-bottom: 20px;\n}\n.b300-reference-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.b300-reference-card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 14px;\n  min-width: 0;\n  padding: 24px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n}\n.b300-avatar {\n  display: grid;\n  place-items: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--blue);\n  color: #fff;\n  font: 800 16px var(--disp);\n}\n.b300-reference-label {\n  font-size: 12px;\n  color: var(--slate);\n}\n.b300-reference-card .btn {\n  margin-top: auto;\n  white-space: normal;\n}\n#ppage.b300-page .b300-closing-cta {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 104px;\n  align-items: center;\n  gap: 32px;\n  margin-top: 30px;\n  padding: 32px 36px;\n  min-height: 190px;\n}\n.b300-cta-copy {\n  min-width: 0;\n}\n.b300-closing-cta h3 {\n  margin: 0;\n  color: #fff;\n  font-size: 24px;\n  line-height: 1.4;\n}\n.b300-closing-cta p {\n  margin: 8px 0 0;\n  line-height: 1.6;\n}\n.b300-actions {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 10px;\n  margin-top: 20px;\n}\n.b300-actions .btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 44px;\n  padding: 11px 18px;\n  line-height: 1.4;\n  white-space: nowrap;\n  animation: none;\n}\n.b300-actions .btn-ghost {\n  color: #fff;\n  border-color: #ffffff66;\n  background: #ffffff0a;\n}\n#ppage.b300-page .b300-closing-cta .pp-cta-buddha-link {\n  position: static;\n  display: block;\n  width: 104px;\n  height: 104px;\n  transform: none;\n  margin: 0;\n  justify-self: end;\n}\n#ppage.b300-page .b300-closing-cta .pp-cta-buddha-link:hover {\n  transform: scale(1.06);\n}\n.b300-page button:focus-visible,\n.b300-page a:focus-visible {\n  outline: 3px solid var(--orange);\n  outline-offset: 3px;\n}\n@media (max-width: 760px) {\n  .b300-preview-grid,\n  .b300-reference-grid {\n    grid-template-columns: 1fr;\n  }\n  .b300-preview {\n    min-height: 230px;\n  }\n  #ppage.b300-page .b300-closing-cta {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 24px;\n    padding: 28px 24px;\n    min-height: 0;\n  }\n  .b300-closing-cta h3 {\n    font-size: 21px;\n  }\n  .b300-actions {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 10px;\n  }\n  .b300-actions .btn {\n    padding: 11px 8px;\n    white-space: normal;\n  }\n  .b300-actions .btn-primary,\n  .b300-actions .btn:last-child {\n    grid-column: 1 / -1;\n  }\n  #ppage.b300-page .b300-closing-cta .pp-cta-buddha-link {\n    width: 80px;\n    height: 80px;\n    justify-self: center;\n  }\n}\n/*# sourceMappingURL=nvidia-b300.page.css.map */\n"] }]
  }], () => [], { frame: [{
    type: ViewChild,
    args: ["frame"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NvidiaB300Page, { className: "NvidiaB300Page", filePath: "src/app/pages/nvidia-b300.page.ts", lineNumber: 21 });
})();
export {
  NvidiaB300Page
};
//# sourceMappingURL=chunk-HKQD2NVP.js.map
