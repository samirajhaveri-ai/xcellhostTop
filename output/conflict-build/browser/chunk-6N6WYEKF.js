import {
  Injectable,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-7JITLDDL.js";

// src/app/overlays/callback-topic.service.ts
var CallbackTopicService = class _CallbackTopicService {
  _topic = signal("", ...ngDevMode ? [{ debugName: "_topic" }] : []);
  topic = this._topic.asReadonly();
  /** Record the subject the visitor wants to be called about. */
  ask(topic) {
    this._topic.set(topic);
  }
  /** Dropped when the modal closes, so the next opening starts blank. */
  clear() {
    this._topic.set("");
  }
  static \u0275fac = function CallbackTopicService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CallbackTopicService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CallbackTopicService, factory: _CallbackTopicService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CallbackTopicService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CallbackTopicService
};
//# sourceMappingURL=chunk-6N6WYEKF.js.map
