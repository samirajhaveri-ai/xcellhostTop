import {
  ProductFaqComponent
} from "./chunk-APIH6CFY.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
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
  ViewChild,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtrustConstantResourceUrl,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/data/microsoft-365-tenant-to-tenant-migration-faqs.data.ts
var TENANT_MIGRATION_FAQS = [
  [
    "What is Microsoft 365 tenant-to-tenant migration?",
    "Moving users, mailboxes, files and collaboration data from one Microsoft 365 tenant to another \u2014 usually after a merger, acquisition, divestiture, consolidation or rebrand."
  ],
  [
    "How long does a migration take?",
    "A typical 50 GB mailbox migrates in about 4\u20138 hours. With waves running in parallel, organisations with thousands of users usually complete in weeks rather than months."
  ],
  [
    "Can users keep working during the migration?",
    "Yes. Users stay in the source tenant while data is copied; delta sync then moves only recent changes before a short final cutover."
  ],
  [
    "How are permissions handled?",
    "Users and groups are mapped between tenants, and shared mailbox access, OneDrive sharing, SharePoint permissions and Teams membership are preserved through configurable mapping rules."
  ],
  [
    "Can we roll back after cutover?",
    "Yes. Data is copied, not moved destructively, so the source tenant stays intact. If a problem appears, mail can be pointed back by switching MX records."
  ],
  [
    "What about our domain names?",
    "Domains are removed from the source tenant and added to the target at cutover, in a planned window, with MX and DNS changes handled by our team."
  ],
  [
    "Do you support legacy Office 365 tenants?",
    "Yes. Office 365 was renamed Microsoft 365 in 2020 \u2014 the platform and the migration process are the same."
  ],
  [
    "Can you migrate Intune devices?",
    "Yes. Device configurations, compliance policies and app deployments are recreated in the target tenant and devices are re-enrolled with minimal user effort."
  ],
  [
    "How is it priced?",
    "Per mailbox, user, site, team and device migrated, plus optional coexistence and project management. Volume discounts apply from 250 users. Use the estimator for an indicative figure, then we'll confirm a fixed quote after assessment."
  ],
  [
    "Are prices inclusive of GST?",
    "Prices are one-time, in INR, and exclude 18% GST. You receive a GST invoice from XcellHost."
  ]
];

// src/app/pages/microsoft-365-tenant-to-tenant-migration.page.ts
var _c0 = ["frame"];
var _forTrack0 = ($index, $item) => $item.title;
var _forTrack1 = ($index, $item) => $item.id;
function Microsoft365TenantToTenantMigrationPage_Conditional_5_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 29)(1, "h3")(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275element(5, "iframe", 31);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const video_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(video_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", video_r2.url, \u0275\u0275sanitizeResourceUrl)("title", video_r2.title);
  }
}
function Microsoft365TenantToTenantMigrationPage_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 5)(1, "h2", 27);
    \u0275\u0275text(2, "Watch it in action");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 28);
    \u0275\u0275repeaterCreate(4, Microsoft365TenantToTenantMigrationPage_Conditional_5_For_5_Template, 6, 3, "article", 29, _forTrack1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.videos);
  }
}
function Microsoft365TenantToTenantMigrationPage_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 10)(1, "span", 32);
    \u0275\u0275text(2, "Customer references");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 21);
    \u0275\u0275listener("click", function Microsoft365TenantToTenantMigrationPage_For_13_Template_button_click_7_listener() {
      const scenario_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.openCallback(ctx_r2.name + ": customer references for " + scenario_r5.title));
    });
    \u0275\u0275text(8, "Request references \u2192");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scenario_r5 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(scenario_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(scenario_r5.description);
  }
}
var Microsoft365TenantToTenantMigrationPage = class _Microsoft365TenantToTenantMigrationPage {
  frame;
  router = inject(Router);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  docs = inject(DocRequestService);
  cart = inject(CartService);
  sanitizer = inject(DomSanitizer);
  name = "Microsoft 365 Tenant-to-Tenant Migration";
  faqs = TENANT_MIGRATION_FAQS;
  videos = [
    { title: "Email migration overview", id: PRODUCT_VIDEOS["Email Migration"][0] },
    { title: "Microsoft 365 overview", id: PRODUCT_VIDEOS["Microsoft 365"][0] }
  ].map((video) => {
    const src = this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&playsinline=1`);
    return __spreadProps(__spreadValues({}, video), { src, url: src });
  });
  referenceScenarios = [
    { title: "Mergers & acquisitions", description: "Discuss customer references for combining Microsoft 365 users, mailboxes and collaboration data after a merger or acquisition." },
    { title: "Divestitures", description: "Ask about separating users and workloads into a new tenant with permissions mapping and a planned domain cutover." },
    { title: "Tenant consolidation", description: "Explore reference projects involving tenant consolidation, coexistence and post-migration support." }
  ];
  whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${this.name}.`)}`;
  emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(`Enquiry: ${this.name}`)}`;
  observer;
  frameDocument;
  clickListener;
  openCallback(topic = this.name) {
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
    inject(SeoService).set("Microsoft 365 Tenant-to-Tenant Migration Services India | XcellHost", "Cross-tenant Microsoft 365 migration for mergers, acquisitions, divestitures and consolidation, covering mailboxes, OneDrive, SharePoint, Teams and Intune.", "/microsoft-365-tenant-to-tenant-migration");
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
        const workloads = Array.from(document.querySelectorAll("#esW .es-r")).filter((row) => row.querySelector('input[type="checkbox"]')?.checked).map((row) => `${row.querySelector('input[type="number"]')?.value} ${row.querySelector("label span")?.firstChild?.textContent?.trim() ?? row.dataset["k"]}`);
        const size = document.querySelector("#gb")?.value;
        const extras = [
          document.querySelector("#cx")?.checked ? "coexistence pack" : "",
          document.querySelector("#pm")?.checked ? "project management" : ""
        ].filter(Boolean);
        this.topics.ask(`Microsoft 365 tenant-to-tenant migration: ${workloads.join(", ") || "free assessment"}; average ${size} GB${extras.length ? "; " + extras.join(", ") : ""}`);
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
  static \u0275fac = function Microsoft365TenantToTenantMigrationPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Microsoft365TenantToTenantMigrationPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _Microsoft365TenantToTenantMigrationPage, selectors: [["xh-microsoft-365-tenant-to-tenant-migration-page"]], viewQuery: function Microsoft365TenantToTenantMigrationPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, decls: 54, vars: 5, consts: [["frame", ""], ["src", \u0275\u0275trustConstantResourceUrl`/microsoft-365-tenant-to-tenant-migration-content.html`, "title", "Microsoft 365 tenant-to-tenant migration", "scrolling", "no", 1, "migration-content", 3, "load"], ["id", "ppage", 1, "ppage", "as-page", "tenant-migration-page"], [1, "pp-body"], [1, "wrap"], ["aria-labelledby", "tenantMigrationVideosTitle", 1, "tally-videos"], ["aria-labelledby", "tenantMigrationReferencesTitle"], ["id", "tenantMigrationReferencesTitle", 1, "pp-sec"], [1, "reference-intro"], [1, "migration-reference-grid"], [1, "migration-reference-card"], ["aria-labelledby", "tenantMigrationFaqTitle"], ["id", "tenantMigrationFaqTitle", 1, "pp-sec", "pp-faq-heading"], ["id", "ppFaq", 1, "pp-faq"], ["idPrefix", "tenantMigrationFaq", 3, "faqs"], [1, "pp-sec"], ["pageSlug", "microsoft-365-tenant-to-tenant-migration", 3, "videos"], ["aria-labelledby", "tenantMigrationCtaTitle", 1, "pp-cta", "migration-closing-cta"], ["id", "tenantMigrationCtaTitle"], [1, "migration-closing-actions"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", 1, "btn", "btn-ghost", 3, "click"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-ghost", 3, "href"], [1, "btn", "btn-ghost", 3, "href"], ["routerLink", "/support-overview", "aria-label", "Visit XcellHost customer support", 1, "pp-cta-buddha-link"], ["src", "/assets/images/laughing-buddha-white-text-transparent.png", "alt", "XcellHost customer support", 1, "pp-cta-buddha"], ["aria-label", "XcellHost credentials and payment options", 1, "pp-proof"], ["id", "tenantMigrationVideosTitle", 1, "pp-sec"], [1, "tally-video-grid"], [1, "tally-video-card"], [1, "tally-video-frame"], ["loading", "lazy", "allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", "referrerpolicy", "strict-origin-when-cross-origin", "allowfullscreen", "", 3, "src", "title"], [1, "reference-label"]], template: function Microsoft365TenantToTenantMigrationPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "iframe", 1, 0);
      \u0275\u0275listener("load", function Microsoft365TenantToTenantMigrationPage_Template_iframe_load_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.onLoad());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275conditionalCreate(5, Microsoft365TenantToTenantMigrationPage_Conditional_5_Template, 6, 0, "section", 5);
      \u0275\u0275elementStart(6, "section", 6)(7, "h2", 7);
      \u0275\u0275text(8, "What customers say");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10, "Contact our team to discuss customer references for Microsoft 365 tenant-to-tenant migrations.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "div", 9);
      \u0275\u0275repeaterCreate(12, Microsoft365TenantToTenantMigrationPage_For_13_Template, 9, 2, "article", 10, _forTrack0);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "section", 11)(15, "h2", 12);
      \u0275\u0275text(16, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 13);
      \u0275\u0275element(18, "xh-product-faq", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "h2", 15);
      \u0275\u0275text(20, "Insights");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "xh-insights-section", 16);
      \u0275\u0275elementStart(22, "section", 17)(23, "div")(24, "h3", 18);
      \u0275\u0275text(25, "Ready to plan your Microsoft 365 tenant migration?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p");
      \u0275\u0275text(27, "Free assessment \xB7 Migration planning \xB7 Cutover and post-migration support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 19)(29, "button", 20);
      \u0275\u0275listener("click", function Microsoft365TenantToTenantMigrationPage_Template_button_click_29_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.openCallback());
      });
      \u0275\u0275text(30, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "button", 21);
      \u0275\u0275listener("click", function Microsoft365TenantToTenantMigrationPage_Template_button_click_31_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.buyNow());
      });
      \u0275\u0275text(32, "Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 21);
      \u0275\u0275listener("click", function Microsoft365TenantToTenantMigrationPage_Template_button_click_33_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestDoc("infosheet"));
      });
      \u0275\u0275text(34, "Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "button", 21);
      \u0275\u0275listener("click", function Microsoft365TenantToTenantMigrationPage_Template_button_click_35_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.requestDoc("presentation"));
      });
      \u0275\u0275text(36, "Presentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "a", 22);
      \u0275\u0275text(38, "Talk on WhatsApp");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "a", 23);
      \u0275\u0275text(40, "Email Us");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "a", 24);
      \u0275\u0275element(42, "img", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "div", 26)(44, "span");
      \u0275\u0275text(45, "ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "span");
      \u0275\u0275text(47, "ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span");
      \u0275\u0275text(49, "Microsoft partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span");
      \u0275\u0275text(51, "Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "span");
      \u0275\u0275text(53, "Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(false ? 5 : -1);
      \u0275\u0275advance(7);
      \u0275\u0275repeater(ctx.referenceScenarios);
      \u0275\u0275advance(6);
      \u0275\u0275property("faqs", ctx.faqs);
      \u0275\u0275advance(3);
      \u0275\u0275property("videos", ctx.videos);
      \u0275\u0275advance(16);
      \u0275\u0275property("href", ctx.whatsappUrl, \u0275\u0275sanitizeUrl);
      \u0275\u0275advance(2);
      \u0275\u0275property("href", ctx.emailUrl, \u0275\u0275sanitizeUrl);
    }
  }, dependencies: [RouterLink, ProductFaqComponent, InsightsSectionComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n.migration-content[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 4200px;\n  border: 0;\n  background: transparent;\n}\n.tenant-migration-page[_ngcontent-%COMP%]   .pp-body[_ngcontent-%COMP%] {\n  padding-top: 24px;\n}\n.tenant-migration-page[_ngcontent-%COMP%]   .pp-body[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > section[_ngcontent-%COMP%] {\n  padding: 12px 0;\n}\n.reference-intro[_ngcontent-%COMP%] {\n  color: var(--slate);\n  margin-bottom: 18px;\n  line-height: 1.6;\n}\n.migration-reference-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.migration-reference-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  min-width: 0;\n  padding: 24px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgba(4, 30, 66, .04);\n}\n.reference-label[_ngcontent-%COMP%] {\n  font: 700 10px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--blue);\n}\n.migration-reference-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font: 700 18px var(--disp);\n  color: var(--navy);\n}\n.migration-reference-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 1.65;\n  color: var(--slate);\n}\n.migration-reference-card[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  margin-top: auto;\n  align-self: flex-start;\n  white-space: normal;\n}\n.tenant-migration-page[_ngcontent-%COMP%]   .migration-closing-cta[_ngcontent-%COMP%] {\n  margin-top: 36px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.migration-closing-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.migration-closing-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 18px;\n}\n.migration-closing-actions[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  color: #fff;\n  border-color: rgba(255, 255, 255, .4);\n  background: rgba(255, 255, 255, .04);\n}\n@media (max-width: 760px) {\n  .migration-reference-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .migration-closing-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    white-space: normal;\n  }\n  .tenant-migration-page[_ngcontent-%COMP%]   .pp-body[_ngcontent-%COMP%] {\n    padding-top: 16px;\n  }\n}\n/*# sourceMappingURL=microsoft-365-tenant-to-tenant-migration.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Microsoft365TenantToTenantMigrationPage, [{
    type: Component,
    args: [{ selector: "xh-microsoft-365-tenant-to-tenant-migration-page", standalone: true, imports: [RouterLink, ProductFaqComponent, InsightsSectionComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<iframe\r
  #frame\r
  class="migration-content"\r
  src="/microsoft-365-tenant-to-tenant-migration-content.html"\r
  title="Microsoft 365 tenant-to-tenant migration"\r
  scrolling="no"\r
  (load)="onLoad()"\r
></iframe>\r
\r
<div id="ppage" class="ppage as-page tenant-migration-page">\r
  <div class="pp-body">\r
    <div class="wrap">\r
      @if (false) {\r
      <section class="tally-videos" aria-labelledby="tenantMigrationVideosTitle">\r
        <h2 class="pp-sec" id="tenantMigrationVideosTitle">Watch it in action</h2>\r
        <div class="tally-video-grid">\r
          @for (video of videos; track video.id) {\r
            <article class="tally-video-card">\r
              <h3><span>{{ video.title }}</span></h3>\r
              <div class="tally-video-frame">\r
                <iframe [src]="video.url" [title]="video.title" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>\r
              </div>\r
            </article>\r
          }\r
        </div>\r
      </section>\r
      }\r
\r
      <section aria-labelledby="tenantMigrationReferencesTitle">\r
        <h2 class="pp-sec" id="tenantMigrationReferencesTitle">What customers say</h2>\r
        <p class="reference-intro">Contact our team to discuss customer references for Microsoft 365 tenant-to-tenant migrations.</p>\r
        <div class="migration-reference-grid">\r
          @for (scenario of referenceScenarios; track scenario.title) {\r
            <article class="migration-reference-card">\r
              <span class="reference-label">Customer references</span>\r
              <h3>{{ scenario.title }}</h3>\r
              <p>{{ scenario.description }}</p>\r
              <button class="btn btn-ghost" type="button" (click)="openCallback(name + ': customer references for ' + scenario.title)">Request references &rarr;</button>\r
            </article>\r
          }\r
        </div>\r
      </section>\r
\r
      <section aria-labelledby="tenantMigrationFaqTitle">\r
        <h2 class="pp-sec pp-faq-heading" id="tenantMigrationFaqTitle">Frequently asked questions</h2>\r
        <div class="pp-faq" id="ppFaq"><xh-product-faq [faqs]="faqs" idPrefix="tenantMigrationFaq" /></div>\r
      </section>\r
\r
      <h2 class="pp-sec">Insights</h2>\r
      <xh-insights-section pageSlug="microsoft-365-tenant-to-tenant-migration" [videos]="videos" />\r
\r
      <section class="pp-cta migration-closing-cta" aria-labelledby="tenantMigrationCtaTitle">\r
        <div>\r
          <h3 id="tenantMigrationCtaTitle">Ready to plan your Microsoft 365 tenant migration?</h3>\r
          <p>Free assessment \xB7 Migration planning \xB7 Cutover and post-migration support</p>\r
          <div class="migration-closing-actions">\r
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
      <div class="pp-proof" aria-label="XcellHost credentials and payment options">\r
        <span>ISO 27001</span><span>ISO 20000-1</span><span>Microsoft partner</span><span>Since 1999</span><span>Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking</span>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/pages/microsoft-365-tenant-to-tenant-migration.page.css */\n:host {\n  display: block;\n  width: 100%;\n}\n.migration-content {\n  display: block;\n  width: 100%;\n  height: 4200px;\n  border: 0;\n  background: transparent;\n}\n.tenant-migration-page .pp-body {\n  padding-top: 24px;\n}\n.tenant-migration-page .pp-body > .wrap > section {\n  padding: 12px 0;\n}\n.reference-intro {\n  color: var(--slate);\n  margin-bottom: 18px;\n  line-height: 1.6;\n}\n.migration-reference-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n.migration-reference-card {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n  min-width: 0;\n  padding: 24px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  box-shadow: 0 8px 24px rgba(4, 30, 66, .04);\n}\n.reference-label {\n  font: 700 10px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--blue);\n}\n.migration-reference-card h3 {\n  font: 700 18px var(--disp);\n  color: var(--navy);\n}\n.migration-reference-card p {\n  font-size: 14px;\n  line-height: 1.65;\n  color: var(--slate);\n}\n.migration-reference-card .btn {\n  margin-top: auto;\n  align-self: flex-start;\n  white-space: normal;\n}\n.tenant-migration-page .migration-closing-cta {\n  margin-top: 36px;\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n.migration-closing-cta h3 {\n  color: #fff;\n}\n.migration-closing-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  margin-top: 18px;\n}\n.migration-closing-actions .btn-ghost {\n  color: #fff;\n  border-color: rgba(255, 255, 255, .4);\n  background: rgba(255, 255, 255, .04);\n}\n@media (max-width: 760px) {\n  .migration-reference-grid {\n    grid-template-columns: 1fr;\n  }\n  .migration-closing-actions .btn {\n    white-space: normal;\n  }\n  .tenant-migration-page .pp-body {\n    padding-top: 16px;\n  }\n}\n/*# sourceMappingURL=microsoft-365-tenant-to-tenant-migration.page.css.map */\n"] }]
  }], () => [], { frame: [{
    type: ViewChild,
    args: ["frame"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(Microsoft365TenantToTenantMigrationPage, { className: "Microsoft365TenantToTenantMigrationPage", filePath: "src/app/pages/microsoft-365-tenant-to-tenant-migration.page.ts", lineNumber: 24 });
})();
export {
  Microsoft365TenantToTenantMigrationPage
};
//# sourceMappingURL=chunk-UGCKJM34.js.map
