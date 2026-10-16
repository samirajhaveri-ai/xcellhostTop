import { Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-microsoft-365-e7-page',
  standalone: true,
  template: `
    <iframe #frame src="/microsoft-365-e7-content.html" title="Microsoft 365 E7 (Frontier Suite)"
      scrolling="no" (load)="onLoad()"></iframe>
  `,
  styles: [`
    :host { display: block; }
    iframe { display: block; width: 100%; min-height: 720px; border: 0; }
  `],
})
export class Microsoft365E7Page implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private cleanup?: () => void;

  constructor() {
    inject(SeoService).set(
      'Microsoft 365 E7 (Frontier Suite) | XcellHost',
      'Explore Microsoft 365 E7, the Frontier Suite combining Microsoft 365 E5, Copilot, Entra Suite and Agent 365, with licensing and support from XcellHost.',
      '/microsoft-365-e7',
    );
  }

  onLoad(): void {
    this.cleanup?.();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const view = frame?.contentWindow;
    const main = doc?.querySelector('main');
    if (!frame || !doc || !view || !main) return;

    // Keep viewport-based sections tied to the browser as the frame expands.
    const resize = () => {
      const title = doc.querySelector<HTMLElement>('#e7Hero .lh-title');
      if (title?.clientWidth) {
        title.style.setProperty('--e7-title-size', '39px');
        if (title.scrollWidth > title.clientWidth) {
          const size = 39 * (title.clientWidth - 2) / title.scrollWidth;
          title.style.setProperty('--e7-title-size', `${size}px`);
        }
      }
      doc.documentElement.style.setProperty('--e7-vh', `${window.innerHeight / 100}px`);
      const height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
      if (frame.style.height !== height) frame.style.height = height;
    };
    const observer = new ResizeObserver(resize);
    observer.observe(main);
    window.addEventListener('resize', resize);
    void doc.fonts.ready.then(resize);
    resize();

    // Product tools and section links scroll the containing page.
    const originalScrollTo = view.scrollTo;
    view.scrollTo = ((options: ScrollToOptions | number, y?: number) => {
      const top = typeof options === 'number' ? y ?? 0 : options.top ?? 0;
      window.scrollTo({
        top: window.scrollY + frame.getBoundingClientRect().top + top,
        behavior: typeof options === 'number' ? 'auto' : options.behavior,
      });
    }) as typeof view.scrollTo;

    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      const href = anchor?.getAttribute('href');
      if (!anchor || !href) return;
      if (href.startsWith('#') && href.length > 1) {
        const target = doc.getElementById(href.slice(1));
        if (!target) return;
        event.preventDefault();
        event.stopPropagation();
        window.scrollTo({
          top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 100,
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
        });
      } else if (!href.startsWith('#') && !anchor.hasAttribute('target')) {
        anchor.target = '_top';
      }
    };
    doc.addEventListener('click', click, true);

    // Keep product dialogs within the visible browser area of the expanded frame.
    const position = () => {
      view.dispatchEvent(new Event('e7:viewport'));
      const top = Math.max(0, -frame.getBoundingClientRect().top);
      doc.querySelectorAll<HTMLElement>('.modal, .cart').forEach((element) => {
        element.style.position = 'absolute';
        element.style.top = `${top}px`;
        element.style.bottom = 'auto';
        element.style.height = `${window.innerHeight}px`;
      });
      const toast = doc.getElementById('xhToast');
      if (toast) {
        toast.style.position = 'absolute';
        toast.style.top = `${top + window.innerHeight - 90}px`;
        toast.style.bottom = 'auto';
      }
    };
    window.addEventListener('scroll', position, { passive: true });
    window.addEventListener('resize', position);
    position();

    this.cleanup = () => {
      observer.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('scroll', position);
      window.removeEventListener('resize', position);
      doc.removeEventListener('click', click, true);
      view.scrollTo = originalScrollTo;
    };
  }

  ngOnDestroy(): void {
    this.cleanup?.();
  }
}
