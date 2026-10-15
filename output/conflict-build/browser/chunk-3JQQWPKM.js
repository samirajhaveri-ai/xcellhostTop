import {
  ProductPageComponent
} from "./chunk-QNOIPV4V.js";
import "./chunk-KKNAOUDV.js";
import "./chunk-JECKRT3F.js";
import "./chunk-GQ5QB3XB.js";
import "./chunk-6MRWBBIM.js";
import "./chunk-XD3KN7K4.js";
import "./chunk-CUVUGSTP.js";
import "./chunk-CRL34XPE.js";
import "./chunk-PWY32UK5.js";
import "./chunk-APIH6CFY.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-C365EWJY.js";
import "./chunk-EVL5GQOW.js";
import "./chunk-XXOOERF5.js";
import "./chunk-MAWJHU3X.js";
import "./chunk-3MMBSDR4.js";
import "./chunk-FGJ7AN27.js";
import "./chunk-LN7P5EZP.js";
import "./chunk-KQWZNZVP.js";
import "./chunk-B3FR7JOU.js";
import "./chunk-3UBXKXB6.js";
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
import {
  CallbackTopicService
} from "./chunk-6N6WYEKF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/digicert-cmc.page.ts
var DigicertCmcPage = class _DigicertCmcPage {
  seo = inject(SeoService);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  selectedTerm = signal(1, ...ngDevMode ? [{ debugName: "selectedTerm" }] : []);
  quantity = signal(1, ...ngDevMode ? [{ debugName: "quantity" }] : []);
  openFaq = signal(0, ...ngDevMode ? [{ debugName: "openFaq" }] : []);
  terms = [
    { years: 1, label: "1 Year", note: "Fastest way to get started" },
    { years: 2, label: "2 Years", note: "Simpler renewal planning" },
    { years: 3, label: "3 Years", note: "Best for long-term programmes" }
  ];
  faqs = [
    {
      question: "What is a DigiCert Common Mark Certificate?",
      answer: "A CMC validates your organization, sending domain and logo for BIMI even when the logo is not a registered trademark. Supported inboxes can display the certified mark beside authenticated email."
    },
    {
      question: "Do I need a registered trademark?",
      answer: "No. A CMC can use an unregistered logo when you can prove at least 12 months of prior public use. Eligible modified versions of registered marks can also qualify."
    },
    {
      question: "Does a CMC provide Gmail\u2019s blue checkmark?",
      answer: "No. A CMC enables BIMI logo display in supported inboxes, but the Gmail blue authenticated checkmark is associated with a VMC and its registered-trademark validation."
    },
    {
      question: "What DMARC policy is required?",
      answer: "Your domain needs DMARC enforcement, normally p=quarantine or p=reject, with SPF and DKIM aligned for every approved sending service."
    },
    {
      question: "How long does CMC validation take?",
      answer: "Allow roughly 3\u20137 business days when the organization, domain, logo history and email-authentication evidence are ready. DigiCert timing depends on successful validation."
    },
    {
      question: "Can one CMC be used for different logos?",
      answer: "No. Each unique logo needs its own mark certificate. If the same logo is used across more than one domain, we will confirm the correct domain or SAN configuration during readiness review."
    }
  ];
  constructor() {
    this.seo.set("DigiCert Common Mark Certificate (CMC) for BIMI | XcellHost", "Display a proven brand logo in BIMI-supported inboxes without a registered trademark. XcellHost helps with prior-use evidence, DMARC readiness and DigiCert CMC deployment.", "/digicert-cmc/");
  }
  changeQuantity(change) {
    this.quantity.update((value) => Math.min(250, Math.max(1, value + change)));
  }
  requestQuote(topic = "DigiCert Common Mark Certificate") {
    this.topics.ask(topic);
    this.overlay.open("callback");
  }
  static \u0275fac = function DigicertCmcPage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DigicertCmcPage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DigicertCmcPage, selectors: [["xh-digicert-cmc-page"]], decls: 1, vars: 0, template: function DigicertCmcPage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275element(0, "xh-product-page");
    }
  }, dependencies: [ProductPageComponent], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DigicertCmcPage, [{
    type: Component,
    args: [{ selector: "xh-digicert-cmc-page", standalone: true, imports: [ProductPageComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: "<!-- The shared product page supplies the existing hero/trust strip and the standard tail sections. -->\r\n<xh-product-page />\r\n" }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DigicertCmcPage, { className: "DigicertCmcPage", filePath: "src/app/pages/digicert-cmc.page.ts", lineNumber: 15 });
})();
export {
  DigicertCmcPage
};
//# sourceMappingURL=chunk-3JQQWPKM.js.map
