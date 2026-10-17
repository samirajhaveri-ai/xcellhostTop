import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

/** Keep the supplied page's canvas runtime and styles isolated to Managed Azure. */
@Component({
  selector: 'xh-managed-azure-source',
  standalone: true,
  template: `<iframe #frame src="/managed-azure-page.html"
    title="Managed Azure services, animated cloud operations, plans and getting started"
    scrolling="no" (load)="onLoad()"></iframe>`,
  styles: [`:host{display:block;width:100%;min-width:0}iframe{display:block;width:100%;height:1100px;min-height:0;border:0}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedAzureSourceComponent implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly frameDocument = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private resizeObserver?: ResizeObserver;
  private themeObserver?: MutationObserver;
  private cleanup?: () => void;

  onLoad(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const frameView = frame?.contentWindow;
    const main = doc?.querySelector('main');
    const view = this.frameDocument.defaultView;
    if (!frame || !doc || !main || !view || !frameView) return;

    // The original progress path follows the document scroll. Here the shell scrolls.
    const updateSteps = () => {
      const steps = doc.getElementById('azSteps');
      const path = doc.getElementById('azSpP') as unknown as SVGPathElement | null;
      if (!steps || !path) return;
      const rect = steps.getBoundingClientRect();
      const top = frame.getBoundingClientRect().top + rect.top;
      const progress = view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 1
        : Math.max(0, Math.min(1, (view.innerHeight - top) / (view.innerHeight * .7 + rect.height * .3)));
      path.style.strokeDashoffset = String(path.getTotalLength() * (1 - progress));
    };

    const resize = () => {
      if (!frame.isConnected) return;
      const height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
      if (frame.style.height !== height) frame.style.height = height;
      updateSteps();
    };
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(main);
    void doc.fonts.ready.then(resize);
    resize();

    const syncTheme = () => {
      doc.documentElement.setAttribute('data-theme', this.frameDocument.documentElement.getAttribute('data-theme') || 'light');
      doc.dispatchEvent(new Event('xh:theme'));
    };
    this.themeObserver = new MutationObserver(syncTheme);
    this.themeObserver.observe(this.frameDocument.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    syncTheme();

    const callback = (event: Event) => {
      this.topics.ask((event as CustomEvent<string>).detail || 'Managed Azure Services');
      this.overlay.open('callback');
    };
    const addToCart = (event: Event) => {
      const item = (event as CustomEvent<{ name: string; sub?: string; price: number; qty?: number }>).detail;
      this.cart.add(item.name + (item.sub ? ` — ${item.sub}` : ''), `INR ${item.price}`, item.qty ?? 1,
        { unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: '' });
      this.cart.open();
    };
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      const href = anchor?.getAttribute('href');
      if (!href) return;
      if (href === 'https://www.xcellhost.top/') {
        event.preventDefault();
        void this.router.navigateByUrl('/');
        return;
      }
      if (href === 'xcellhost-managed-sentinel.html') {
        event.preventDefault();
        void this.router.navigateByUrl('/managed-microsoft-sentinel');
        return;
      }
      if (!href.startsWith('#')) return;
      event.preventDefault();
      if (href === '#') return;
      const target = doc.getElementById(href.slice(1));
      const tail = href === '#faq' ? this.frameDocument.getElementById('managed-azure-faq') : null;
      const top = target
        ? view.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top
        : tail ? view.scrollY + tail.getBoundingClientRect().top : null;
      if (top === null) return;
      view.scrollTo({ top: top - 110, behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    doc.addEventListener('import-callback', callback);
    doc.addEventListener('import-cart', addToCart);
    doc.addEventListener('click', click);
    const originalScrollTo = frameView.scrollTo;
    frameView.scrollTo = ((options: ScrollToOptions | number, y?: number) => {
      const top = typeof options === 'number' ? y ?? 0 : options.top ?? 0;
      view.scrollTo({ top: view.scrollY + frame.getBoundingClientRect().top + top,
        behavior: typeof options === 'number' ? 'auto' : options.behavior });
    }) as typeof frameView.scrollTo;
    view.addEventListener('scroll', updateSteps, { passive: true });
    view.addEventListener('resize', updateSteps);
    updateSteps();
    this.cleanup = () => {
      doc.removeEventListener('import-callback', callback);
      doc.removeEventListener('import-cart', addToCart);
      doc.removeEventListener('click', click);
      view.removeEventListener('scroll', updateSteps);
      view.removeEventListener('resize', updateSteps);
      frameView.scrollTo = originalScrollTo;
    };
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
    this.cleanup?.();
    this.cleanup = undefined;
  }
}
