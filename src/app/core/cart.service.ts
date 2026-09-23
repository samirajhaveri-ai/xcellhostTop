import { Injectable, computed, signal } from '@angular/core';

export interface CartLine {
  name: string;
  price: string;
  qty: number;
  pricing?: CartPricing;
}

export interface CartPricing {
  unitAmount: number;
  currency: string;
  locale: string;
  suffix: string;
}

const STORAGE_KEY = 'xh_cart_v1';

/**
 * The quote cart. Unlike the original draft this persists to localStorage,
 * so a customer who reloads mid-quote does not lose their selection.
 */
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _lines = signal<CartLine[]>(this.restore());
  private readonly _open = signal(false);
  private readonly _checkout = signal(false);

  readonly lines = this._lines.asReadonly();
  readonly isOpen = this._open.asReadonly();
  readonly showCheckout = this._checkout.asReadonly();
  readonly count = computed(() => this._lines().reduce((a, l) => a + l.qty, 0));
  readonly isEmpty = computed(() => this._lines().length === 0);

  add(name: string, price: string, quantity = 1, pricing?: CartPricing): void {
    const amount = Math.max(1, Math.trunc(quantity) || 1);
    this._lines.update((ls) => {
      const hit = ls.find((l) => l.name === name);
      if (hit) return ls.map((l) => (l === hit ? { ...l, price, pricing: pricing ?? l.pricing, qty: l.qty + amount } : l));
      return [...ls, { name, price, qty: amount, pricing }];
    });
    this.persist();
  }

  setQty(name: string, qty: number): void {
    this._lines.update((ls) =>
      qty <= 0 ? ls.filter((l) => l.name !== name) : ls.map((l) => (l.name === name ? { ...l, qty } : l))
    );
    this.persist();
  }

  remove(name: string): void {
    this._lines.update((ls) => ls.filter((l) => l.name !== name));
    this.persist();
  }

  clear(): void {
    this._lines.set([]);
    this._checkout.set(false);
    this.persist();
  }

  open(): void { this._open.set(true); }
  close(): void { this._open.set(false); this._checkout.set(false); }
  toCheckout(): void { this._checkout.set(true); }
  backToCart(): void { this._checkout.set(false); }

  displayPrice(line: CartLine): string {
    const pricing = line.pricing;
    if (!pricing || !Number.isFinite(pricing.unitAmount)) return line.price || 'Quote on request';
    const total = pricing.unitAmount * line.qty;
    return `${new Intl.NumberFormat(pricing.locale, {
      style: 'currency', currency: pricing.currency, maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }).format(total)}${pricing.suffix}`;
  }

  /** Plain-text summary used by the WhatsApp and email handoffs. */
  summary(): string {
    return this._lines().map((l) => `• ${l.name} × ${l.qty} (${this.displayPrice(l)})`).join('\n');
  }

  private persist(): void {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(this._lines())); } catch { /* private mode */ }
  }

  private restore(): CartLine[] {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      const v = raw ? JSON.parse(raw) : [];
      return Array.isArray(v) ? v.filter((l) => l && typeof l.name === 'string') : [];
    } catch { return []; }
  }
}
