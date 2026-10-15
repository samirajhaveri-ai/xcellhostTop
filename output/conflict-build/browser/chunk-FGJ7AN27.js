import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-7JITLDDL.js";

// src/app/core/doc-request.service.ts
var DocRequestService = class _DocRequestService {
  _request = signal({ kind: "infosheet", product: "" }, ...ngDevMode ? [{ debugName: "_request" }] : []);
  request = this._request.asReadonly();
  kind = computed(() => this._request().kind, ...ngDevMode ? [{ debugName: "kind" }] : []);
  product = computed(() => this._request().product, ...ngDevMode ? [{ debugName: "product" }] : []);
  /** Record which document was asked for, and for which product. */
  ask(kind, product) {
    this._request.set({ kind, product });
  }
  static \u0275fac = function DocRequestService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DocRequestService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DocRequestService, factory: _DocRequestService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DocRequestService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  DocRequestService
};
//# sourceMappingURL=chunk-FGJ7AN27.js.map
