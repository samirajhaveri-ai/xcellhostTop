import { DOCUMENT } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  signal,
} from '@angular/core';
import { OverlayService } from '../core/overlay.service';

/**
 * The full-screen opening splash (`#introv`).
 *
 * Shows the logo lockup, then removes itself after 3 s or on the first click.
 * Skipped entirely — never even rendered — when the visitor asks for reduced
 * motion, which is what the original did before it locked scrolling.
 */
@Component({
  selector: 'xh-intro-splash',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  template: `
    @if (visible()) {
      <div id="introv" role="presentation" (click)="dismiss()">
        <div class="iv-chip">
          <img class="xh-logo" src="/assets/images/xcellhost-logo.png" alt="XcellHost" />
        </div>
        <div class="iv-tag">Global Reach · Personal Touch</div>
        <div class="iv-line"></div>
        <div class="iv-sub">MANAGED CLOUD · CYBERSECURITY · DPDPA · SINCE 1999</div>
        <span class="iv-skip">tap anywhere to skip</span>
      </div>
    }
  `,
})
export class IntroSplashComponent {
  private readonly doc = inject(DOCUMENT);
  private readonly overlay = inject(OverlayService);
  private readonly destroyRef = inject(DestroyRef);

  readonly visible = signal(false);

  constructor() {
    /* Escape closes the top layer, which for the splash means dismissing it —
       otherwise the stack would unlock scrolling while the splash still covers
       the page. */
    effect(() => {
      if (this.visible() && !this.overlay.isOpen('intro')) this.visible.set(false);
    });

    const win = this.doc.defaultView;
    const reduced = win?.matchMedia('(prefers-reduced-motion: reduce)').matches ?? true;
    if (!win || reduced) return;

    this.visible.set(true);
    this.overlay.open('intro');

    const timer = win.setTimeout(() => this.dismiss(), 3000);
    this.destroyRef.onDestroy(() => {
      win.clearTimeout(timer);
      this.overlay.close('intro');
    });
  }

  dismiss(): void {
    if (!this.visible()) return;
    this.visible.set(false);
    this.overlay.close('intro');
  }
}
