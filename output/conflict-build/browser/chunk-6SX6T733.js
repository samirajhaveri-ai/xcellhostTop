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
import {
  ActivatedRoute
} from "./chunk-7OXZXASL.js";
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
  ɵɵsanitizeResourceUrl,
  ɵɵstyleProp,
  ɵɵviewQuery
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/data/geotrust-quickssl.data.ts
var QUICKSSL_PAGES = {
  "san": {
    "variant": "san",
    "slug": "geotrust-quickssl-premium-san",
    "name": "GeoTrust QuickSSL Premium SAN",
    "heroId": "qsHero",
    "faqs": [
      {
        "question": "What is GeoTrust QuickSSL Premium SAN?",
        "answer": "A domain-validated multi-domain TLS certificate from GeoTrust, a DigiCert brand. It secures one main domain plus four additional domains or subdomains (SANs) on one certificate, is issued within minutes and carries a US$500K warranty and a time-stamped site seal."
      },
      {
        "question": "Which names can I put on it?",
        "answer": "Any fully qualified domains or subdomains you control \u2014 for example yourco.in, yourco.com, shop.yourco.in, yourco.co.in and mail.yourco.in. They don't have to share a base domain. Wildcards and IP addresses aren't supported."
      },
      {
        "question": "Can I add more than five domains?",
        "answer": "Yes \u2014 extra SANs can be added at \u20B91,999 per SAN per year (indicative), and the certificate is reissued with the longer list. For large estates, compare DV SSL (FLEX) or True BusinessID Multi-Domain, which go up to 250 names."
      },
      {
        "question": "Is www included?",
        "answer": "For the main domain, GeoTrust secures both the www and non-www forms, so www.yourco.in doesn't use a SAN seat. For other domains, list the www form as its own SAN if you use it."
      },
      {
        "question": "I need a wildcard. Does this work?",
        "answer": "No \u2014 QuickSSL Premium SAN covers named domains only. For one wildcard, use QuickSSL Premium Wildcard; to mix wildcards with standard names on one certificate, use DV SSL (FLEX)."
      },
      {
        "question": "How is each domain validated?",
        "answer": "Each domain passes one domain-control check: approve an email to an address such as admin@, add a DNS TXT or CNAME record, or place a file on the website. Checks are automated and we can set up the records for you."
      },
      {
        "question": "Can all five sites run on one IP address?",
        "answer": "Yes. With Server Name Indication (SNI), supported by every modern browser, one server and one IP can host all five names with this single certificate."
      },
      {
        "question": "Why do certificates need reissuing during the term?",
        "answer": "Browser rules cap certificate lifetimes at 200 days since 15 March 2026, 100 days from March 2027 and 47 days from March 2029. Your 1\u20133-year purchase is a subscription with unlimited free reissues; we do them for all five names at once, or automate them through ACME."
      }
    ]
  },
  "single": {
    "variant": "single",
    "slug": "geotrust-quickssl-premium",
    "name": "GeoTrust QuickSSL Premium",
    "heroId": "gqHero",
    "faqs": [
      {
        "question": "What does GeoTrust QuickSSL Premium cover?",
        "answer": "One fully qualified domain and its www form \u2014 for example yourbusiness.in and www.yourbusiness.in, or shop.yourbusiness.in and www.shop.yourbusiness.in. It doesn't take extra domains or a wildcard; for those see QuickSSL Premium SAN or QuickSSL Premium Wildcard."
      },
      {
        "question": "How fast is it issued?",
        "answer": "Usually within about ten minutes of the domain check passing. A DNS record can take a few minutes to propagate; email validation completes as soon as you click approve."
      },
      {
        "question": "Which validation methods can I use?",
        "answer": "A DNS TXT record, an approval email to admin@, administrator@, webmaster@, hostmaster@ or postmaster@ your domain, or a file placed under /.well-known/pki-validation/ on the live site. Use the helper above to see the exact record."
      },
      {
        "question": "Do I need company documents?",
        "answer": "No. DV certificates only check domain control, so no MCA, GST or Udyam records are needed. If you want your company name in the certificate, choose GeoTrust True BusinessID (OV)."
      },
      {
        "question": "If I buy 2 or 3 years, why are there several certificates?",
        "answer": "Since 15 March 2026 browsers accept public certificates for at most 200 days, with shorter limits planned. A multi-year plan is a subscription: you pay once and receive free reissues through the term. XcellHost reissues and reinstalls them, or you can automate with GeoTrust DV Automate."
      },
      {
        "question": "Is DV encryption weaker than OV or EV?",
        "answer": "No. The encryption is identical \u2014 up to 256-bit sessions with RSA 2048+ or ECC keys. The difference is identity: OV and EV also verify and display your organisation."
      },
      {
        "question": "Why pay when free certificates exist?",
        "answer": "Free certificates encrypt just as well, but come without a warranty, a site seal or a support desk, and expire every 90 days. QuickSSL Premium adds the US$500K warranty, a dynamic GeoTrust seal, unlimited reissues and XcellHost's 24\xD77 installation support."
      },
      {
        "question": "Can I install it on more than one server?",
        "answer": "Yes. Server licensing is unlimited, so the same certificate can sit on several web servers or behind a load balancer. You can also reissue with a separate key per server, free."
      }
    ]
  },
  "wildcard": {
    "variant": "wildcard",
    "slug": "geotrust-quickssl-premium-wildcard",
    "name": "GeoTrust QuickSSL Premium Wildcard",
    "heroId": "gwHero",
    "faqs": [
      {
        "question": "What does *.yourbusiness.in cover?",
        "answer": "The base domain (yourbusiness.in) and every first-level subdomain \u2014 www., shop., mail., app. and any you create later. It does not cover a second level such as staging.app.yourbusiness.in; add *.app.yourbusiness.in as an extra wildcard for that."
      },
      {
        "question": "How fast is it issued?",
        "answer": "Usually within about ten minutes of the domain check passing. A new DNS record can take a few minutes to propagate; email validation completes as soon as you click approve."
      },
      {
        "question": "Why can't I validate with an HTTP file?",
        "answer": "Industry rules don't allow file-based validation for wildcard names, because a file on one website doesn't prove control of the whole domain. Use a DNS TXT record or approve an email sent to admin@, administrator@, webmaster@, hostmaster@ or postmaster@ your domain."
      },
      {
        "question": "When is a wildcard cheaper than separate certificates?",
        "answer": "At indicative prices, from about three subdomains besides the base domain \u2014 four hosts in all \u2014 and it keeps getting cheaper per host as you add more. Try the planner above with your own numbers."
      },
      {
        "question": "Can I add a different domain to the wildcard?",
        "answer": "Yes \u2014 as an extra domain (SAN), indicatively \u20B91,999 per year, or as an extra wildcard such as *.yourbrand.com at \u20B914,999 per year, up to 250 names in total."
      },
      {
        "question": "Does the certificate show my company name?",
        "answer": "No. It is domain-validated, so only the domain appears in the certificate and seal. For a verified company name on a wildcard, choose GeoTrust True BusinessID Wildcard (OV). EV certificates never allow wildcards."
      },
      {
        "question": "If I buy 2 or 3 years, why are there several certificates?",
        "answer": "Since 15 March 2026 browsers accept public certificates for at most 200 days, with shorter limits planned. A multi-year plan is a subscription: you pay once and receive free reissues through the term. XcellHost reissues and redeploys them to every host, or you can automate with GeoTrust Wildcard DV Automate."
      },
      {
        "question": "Can I install it on many servers?",
        "answer": "Yes. Server licensing is unlimited, so the same wildcard can sit on web servers, mail servers and every node behind a load balancer. You can also reissue with a separate key per server group, free."
      }
    ]
  }
};

// src/app/pages/geotrust-quickssl.page.ts
var _c0 = ["contentFrame"];
var _c1 = () => ["geotrust-ssl-certificates", "geotrust"];
var GeoTrustQuickSslPage = class _GeoTrustQuickSslPage {
  page = QUICKSSL_PAGES[inject(ActivatedRoute).snapshot.data["quickSslVariant"]];
  sanitizer = inject(DomSanitizer);
  contentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(`/assets/animations/${this.page.slug}-content.html`);
  height = signal(9e3, ...ngDevMode ? [{ debugName: "height" }] : []);
  videos = [{
    title: "XcellHost \xB7 Digital trust",
    src: this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube-nocookie.com/embed/s1Rxs7rWd2I?rel=0&playsinline=1"),
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
    inject(SeoService).set(`${this.page.name} | XcellHost`, `${this.page.name} with domain validation, installation support, reissues and INR billing from XcellHost.`, `/${this.page.slug}`);
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
    if (data?.type === "quickssl-enquiry" && typeof data.configuration === "string") {
      this.topics.ask(`${this.page.name} \u2014 ${data.configuration}`);
      this.overlay.open("callback");
    } else if (data?.type === "quickssl-scroll" && typeof data.target === "string") {
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
    } else if (data?.type === "quickssl-toast" && frame) {
      const toast = frame.contentDocument?.getElementById("importToast");
      if (toast)
        toast.style.top = `${Math.max(8, Math.min(frame.clientHeight - 48, window.innerHeight - 80 - frame.getBoundingClientRect().top))}px`;
    } else if (data?.type === "quickssl-cart") {
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
  static \u0275fac = function GeoTrustQuickSslPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GeoTrustQuickSslPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GeoTrustQuickSslPage, selectors: [["xh-geotrust-quickssl-page"]], viewQuery: function GeoTrustQuickSslPage_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.frame = _t.first);
    }
  }, hostBindings: function GeoTrustQuickSslPage_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("message", function GeoTrustQuickSslPage_message_HostBindingHandler($event) {
        return ctx.onMessage($event);
      }, \u0275\u0275resolveWindow);
    }
  }, decls: 4, vars: 10, consts: [["contentFrame", ""], ["scrolling", "no", 3, "load", "src", "title"], [3, "idPrefix", "faqs"], ["videoDescription", "Explore GeoTrust certificates and digital trust with XcellHost.", 3, "pageSlug", "pageAliases", "videos"]], template: function GeoTrustQuickSslPage_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "iframe", 1, 0);
      \u0275\u0275listener("load", function GeoTrustQuickSslPage_Template_iframe_load_0_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.syncContent());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275element(2, "xh-geotrust-ev-flex-followup", 2)(3, "xh-insights-section", 3);
    }
    if (rf & 2) {
      \u0275\u0275styleProp("height", ctx.height(), "px");
      \u0275\u0275property("src", ctx.contentUrl, \u0275\u0275sanitizeResourceUrl)("title", ctx.page.name + ", coverage, pricing and XcellHost support");
      \u0275\u0275advance(2);
      \u0275\u0275property("idPrefix", ctx.page.slug)("faqs", ctx.page.faqs);
      \u0275\u0275advance();
      \u0275\u0275property("pageSlug", ctx.page.slug)("pageAliases", \u0275\u0275pureFunction0(9, _c1))("videos", ctx.videos);
    }
  }, dependencies: [GeoTrustEvFlexFollowupComponent, InsightsSectionComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\niframe[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  border: 0;\n  background: transparent;\n}\n/*# sourceMappingURL=geotrust-quickssl.page.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GeoTrustQuickSslPage, [{
    type: Component,
    args: [{ selector: "xh-geotrust-quickssl-page", standalone: true, imports: [GeoTrustEvFlexFollowupComponent, InsightsSectionComponent], template: `<iframe #contentFrame [src]="contentUrl" [title]="page.name + ', coverage, pricing and XcellHost support'"
    scrolling="no" [style.height.px]="height()" (load)="syncContent()"></iframe>
    <xh-geotrust-ev-flex-followup [idPrefix]="page.slug" [faqs]="page.faqs" />
    <xh-insights-section [pageSlug]="page.slug" [pageAliases]="['geotrust-ssl-certificates', 'geotrust']"
      [videos]="videos" videoDescription="Explore GeoTrust certificates and digital trust with XcellHost." />`, changeDetection: ChangeDetectionStrategy.OnPush, styles: ["/* angular:styles/component:css;ed0edda7b6c1b4c04d76dcf3fa8a9c377d866cb68713cdd663c07bea24c72d87;C:/Users/VibhaTiwari/Documents/GitHub/xcellhostTop/src/app/pages/geotrust-quickssl.page.ts */\n:host {\n  display: block;\n  width: 100%;\n}\niframe {\n  display: block;\n  width: 100%;\n  border: 0;\n  background: transparent;\n}\n/*# sourceMappingURL=geotrust-quickssl.page.css.map */\n"] }]
  }], () => [], { frame: [{
    type: ViewChild,
    args: ["contentFrame"]
  }], onMessage: [{
    type: HostListener,
    args: ["window:message", ["$event"]]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GeoTrustQuickSslPage, { className: "GeoTrustQuickSslPage", filePath: "src/app/pages/geotrust-quickssl.page.ts", lineNumber: 27 });
})();
export {
  GeoTrustQuickSslPage
};
//# sourceMappingURL=chunk-6SX6T733.js.map
