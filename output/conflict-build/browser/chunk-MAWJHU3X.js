import {
  SITE
} from "./chunk-LN7P5EZP.js";
import {
  environment
} from "./chunk-WBGN3H4A.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/core/lead.service.ts
var ENDPOINTS = {
  checkout: () => environment.checkoutWebhook,
  trial: () => environment.trialWebhook,
  callback: () => environment.callbackWebhook,
  doc: () => environment.docWebhook,
  partner: () => environment.partnerWebhook,
  newsletter: () => environment.newsletterWebhook ?? ""
};
var LeadService = class _LeadService {
  async submit(kind, payload) {
    const ref = this.reference();
    const url = ENDPOINTS[kind]();
    if (!url)
      return { ok: true, skipped: true, ref };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(__spreadProps(__spreadValues({}, payload), { kind, ref, source: SITE.siteUrl, at: (/* @__PURE__ */ new Date()).toISOString() }))
      });
      return { ok: res.ok, skipped: false, ref };
    } catch {
      return { ok: false, skipped: false, ref };
    }
  }
  /** Short human-quotable reference, e.g. XH-8F2A41. */
  reference() {
    const n = Math.floor(Math.random() * 16777215).toString(16).toUpperCase().padStart(6, "0");
    return "XH-" + n;
  }
  whatsappLink(text) {
    return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
  }
  mailtoLink(subject, body) {
    return `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  static \u0275fac = function LeadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LeadService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LeadService, factory: _LeadService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LeadService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  LeadService
};
//# sourceMappingURL=chunk-MAWJHU3X.js.map
