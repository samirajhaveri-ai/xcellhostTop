import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';

export type OverlayId =
  | 'product' | 'category' | 'blog' | 'dpdpa' | 'dpdpaModule' | 'simple' | 'compare'
  | 'cart' | 'trial' | 'auth' | 'partner' | 'callback' | 'doc' | 'search' | 'chat' | 'mobileNav'
  | 'intro' | 'screenshotTour' | 'genAiScreenshotTour' | 'rmmScreenshotTour' | 'edrScreenshotTour'
  | 'productScreenshotTour' | 'sitelockConfigurator';

/**
 * One owner for "is something covering the page".
 *
 * The original site let every overlay set and clear body.overflow independently,
 * so closing a modal opened on top of a page unlocked scrolling underneath.
 * Tracking a stack fixes that: the lock lifts only when the last layer closes.
 */
@Injectable({ providedIn: 'root' })
export class OverlayService {
  private doc = inject(DOCUMENT);
  private readonly _stack = signal<OverlayId[]>([]);

  readonly stack = this._stack.asReadonly();
  readonly top = computed(() => this._stack()[this._stack().length - 1] ?? null);

  isOpen(id: OverlayId): boolean { return this._stack().includes(id); }

  open(id: OverlayId): void {
    if (this.isOpen(id)) return;
    this._stack.update((s) => [...s, id]);
    this.sync();
  }

  close(id: OverlayId): void {
    if (!this.isOpen(id)) return;
    this._stack.update((s) => s.filter((x) => x !== id));
    this.sync();
  }

  /** Close whatever is on top — what Escape and backdrop clicks should do. */
  closeTop(): OverlayId | null {
    const t = this.top();
    if (t) this.close(t);
    return t;
  }

  closeAll(): void { this._stack.set([]); this.sync(); }

  private sync(): void {
    const body = this.doc.body;
    // the chat panel floats beside the page, so it must not lock scrolling
    const locking = this._stack().filter((id) => id !== 'chat');
    if (locking.length) body.classList.add('xh-locked');
    else body.classList.remove('xh-locked');
  }
}
