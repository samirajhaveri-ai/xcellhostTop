import {
  DOCUMENT,
  Injectable,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-7JITLDDL.js";

// src/app/core/overlay.service.ts
var OverlayService = class _OverlayService {
  doc = inject(DOCUMENT);
  _stack = signal([], ...ngDevMode ? [{ debugName: "_stack" }] : []);
  stack = this._stack.asReadonly();
  top = computed(() => this._stack()[this._stack().length - 1] ?? null, ...ngDevMode ? [{ debugName: "top" }] : []);
  isOpen(id) {
    return this._stack().includes(id);
  }
  open(id) {
    if (this.isOpen(id))
      return;
    this._stack.update((s) => [...s, id]);
    this.sync();
  }
  close(id) {
    if (!this.isOpen(id))
      return;
    this._stack.update((s) => s.filter((x) => x !== id));
    this.sync();
  }
  /** Close whatever is on top — what Escape and backdrop clicks should do. */
  closeTop() {
    const t = this.top();
    if (t)
      this.close(t);
    return t;
  }
  closeAll() {
    this._stack.set([]);
    this.sync();
  }
  sync() {
    const body = this.doc.body;
    const locking = this._stack().filter((id) => id !== "chat");
    if (locking.length)
      body.classList.add("xh-locked");
    else
      body.classList.remove("xh-locked");
  }
  static \u0275fac = function OverlayService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _OverlayService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _OverlayService, factory: _OverlayService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  OverlayService
};
//# sourceMappingURL=chunk-PHEWPDI5.js.map
