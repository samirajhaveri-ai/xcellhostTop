import {
  Injectable,
  computed,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-7JITLDDL.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-BAM5JHNH.js";

// src/app/core/cart.service.ts
var STORAGE_KEY = "xh_cart_v1";
var CartService = class _CartService {
  _lines = signal(this.restore(), ...ngDevMode ? [{ debugName: "_lines" }] : []);
  _open = signal(false, ...ngDevMode ? [{ debugName: "_open" }] : []);
  _checkout = signal(false, ...ngDevMode ? [{ debugName: "_checkout" }] : []);
  lines = this._lines.asReadonly();
  isOpen = this._open.asReadonly();
  showCheckout = this._checkout.asReadonly();
  count = computed(() => this._lines().reduce((a, l) => a + l.qty, 0), ...ngDevMode ? [{ debugName: "count" }] : []);
  isEmpty = computed(() => this._lines().length === 0, ...ngDevMode ? [{ debugName: "isEmpty" }] : []);
  add(name, price, quantity = 1, pricing) {
    const amount = Math.max(1, Math.trunc(quantity) || 1);
    this._lines.update((ls) => {
      const hit = ls.find((l) => l.name === name);
      if (hit)
        return ls.map((l) => l === hit ? __spreadProps(__spreadValues({}, l), { price, pricing: pricing ?? l.pricing, qty: l.qty + amount }) : l);
      return [...ls, { name, price, qty: amount, pricing }];
    });
    this.persist();
  }
  setQty(name, qty) {
    this._lines.update((ls) => qty <= 0 ? ls.filter((l) => l.name !== name) : ls.map((l) => l.name === name ? __spreadProps(__spreadValues({}, l), { qty }) : l));
    this.persist();
  }
  remove(name) {
    this._lines.update((ls) => ls.filter((l) => l.name !== name));
    this.persist();
  }
  clear() {
    this._lines.set([]);
    this._checkout.set(false);
    this.persist();
  }
  open() {
    this._open.set(true);
  }
  close() {
    this._open.set(false);
    this._checkout.set(false);
  }
  toCheckout() {
    this._checkout.set(true);
  }
  backToCart() {
    this._checkout.set(false);
  }
  displayPrice(line) {
    const pricing = line.pricing;
    if (!pricing || !Number.isFinite(pricing.unitAmount))
      return line.price || "Quote on request";
    const total = pricing.unitAmount * line.qty;
    return `${new Intl.NumberFormat(pricing.locale, {
      style: "currency",
      currency: pricing.currency,
      maximumFractionDigits: 2,
      minimumFractionDigits: 0
    }).format(total)}${pricing.suffix}`;
  }
  /** Plain-text summary used by the WhatsApp and email handoffs. */
  summary() {
    return this._lines().map((l) => `\u2022 ${l.name} \xD7 ${l.qty} (${this.displayPrice(l)})`).join("\n");
  }
  persist() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this._lines()));
    } catch {
    }
  }
  restore() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const v = raw ? JSON.parse(raw) : [];
      return Array.isArray(v) ? v.filter((l) => l && typeof l.name === "string") : [];
    } catch {
      return [];
    }
  }
  static \u0275fac = function CartService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CartService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CartService, factory: _CartService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CartService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  CartService
};
//# sourceMappingURL=chunk-TZE2L2GZ.js.map
