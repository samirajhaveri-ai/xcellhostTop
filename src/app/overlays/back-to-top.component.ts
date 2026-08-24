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
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2.4"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <path d="m6 15 6-6 6 6" />
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
