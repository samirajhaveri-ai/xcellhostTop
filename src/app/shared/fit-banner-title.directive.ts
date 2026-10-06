import { Directive, ElementRef, effect, inject, input } from '@angular/core';

/** Keep banner titles on one line, using the reference's 26px size when it fits. */
@Directive({ selector: '[xhFitBannerTitle]', standalone: true })
export class FitBannerTitleDirective {
  readonly xhFitBannerTitle = input(false);
  private readonly element = inject(ElementRef<HTMLElement>);

  constructor() {
    effect(onCleanup => {
      if (!this.xhFitBannerTitle()) return;
      const title = this.element.nativeElement;
      const win = title.ownerDocument.defaultView;
      if (!win) return;
      let frame = 0;
      let disposed = false;
      let previousWidth = -1;
      const fit = () => {
        frame = 0;
        const width = title.clientWidth;
        if (!width) return;
        title.style.setProperty('--banner-title-size', '26px');
        if (title.scrollWidth > width) {
          const size = 26 * (width - 2) / title.scrollWidth;
          title.style.setProperty('--banner-title-size', `${size}px`);
        }
      };
      const schedule = () => {
        if (!disposed && !frame) frame = win.requestAnimationFrame(fit);
      };
      const resize = new ResizeObserver(entries => {
        const width = entries[0].contentRect.width;
        if (width !== previousWidth) { previousWidth = width; schedule(); }
      });
      const text = new MutationObserver(schedule);
      resize.observe(title);
      text.observe(title, { childList: true, characterData: true, subtree: true });
      void title.ownerDocument.fonts.ready.then(schedule);
      schedule();
      onCleanup(() => {
        disposed = true;
        win.cancelAnimationFrame(frame);
        resize.disconnect();
        text.disconnect();
        title.style.removeProperty('--banner-title-size');
      });
    });
  }
}
