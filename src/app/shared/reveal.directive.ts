import { DestroyRef, Directive, ElementRef, afterNextRender, inject } from '@angular/core';

/** Matches the original: `threshold: 0.12, rootMargin: '0px 0px -40px 0px'`. */
const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px',
};

/** `Math.min(index * 70, 350)` — the original per-sibling cascade. */
const STEP_MS = 70;
const MAX_DELAY_MS = 350;

/**
 * Scroll reveal — a port of block 1 of `script_06`. Put `xhReveal` on any
 * element the original matched with
 * `section .sec-head, .card, .dir-cat, .trust .item, .cta-band, .quote blockquote`.
 *
 * The element gets `.reveal` as soon as it is created (so it starts hidden with
 * no flash) and `.in` the first time it crosses into the viewport, with a
 * `transition-delay` derived from its index among its siblings.
 *
 * `.reveal` is `opacity:0` in `styles.css`, so an element left without `.in`
 * would be invisible forever. Both `prefers-reduced-motion: reduce` and a
 * missing `IntersectionObserver` therefore short-circuit straight to `.in`.
 */
@Directive({
  selector: '[xhReveal]',
  standalone: true,
})
export class RevealDirective {
  private readonly el = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  private observer?: IntersectionObserver;

  constructor() {
    this.el.nativeElement.classList.add('reveal');
    // afterNextRender only fires in the browser, so there is no SSR guard to write.
    afterNextRender(() => this.watch());
  }

  private watch(): void {
    const el = this.el.nativeElement;

    if (
      matchMedia('(prefers-reduced-motion: reduce)').matches ||
      typeof IntersectionObserver === 'undefined'
    ) {
      el.classList.add('in');
      return;
    }

    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const node = entry.target as HTMLElement;
        const siblings = node.parentElement ? Array.from(node.parentElement.children) : [];
        const idx = siblings.indexOf(node);
        node.style.transitionDelay = `${Math.min(idx * STEP_MS, MAX_DELAY_MS)}ms`;
        node.classList.add('in');
        this.observer?.unobserve(node);
      }
    }, OBSERVER_OPTIONS);

    this.observer.observe(el);
    this.destroyRef.onDestroy(() => this.observer?.disconnect());
  }
}
