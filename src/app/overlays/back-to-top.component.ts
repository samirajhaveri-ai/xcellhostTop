import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  afterNextRender,
  signal,
} from '@angular/core';

/** Independent global control that returns the page to the top. */
@Component({
  selector: 'xh-back-to-top',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  template: `
    <button
      class="back-to-top"
      type="button"
      aria-label="Back to top"
      title="Back to top"
      [class.show]="visible()"
      [attr.tabindex]="visible() ? 0 : -1"
      (click)="scrollToTop()"
    >
      <svg
        class="back-to-top-mouse"
        viewBox="0 0 32 42"
        fill="none"
        stroke="currentColor"
        stroke-width="2.2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect x="5" y="3" width="22" height="35" rx="11" />
        <path class="back-to-top-wheel" d="M16 10v8" />
        <path class="back-to-top-cue" d="m12.5 13.5 3.5-3.5 3.5 3.5" />
      </svg>
    </button>
  `,
})
export class BackToTopComponent {
  readonly visible = signal(false);

  constructor() {
    afterNextRender(() => this.updateVisibility());
  }

  @HostListener('window:scroll')
  updateVisibility(): void {
    this.visible.set(window.scrollY > 300);
  }

  scrollToTop(): void {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  }
}
