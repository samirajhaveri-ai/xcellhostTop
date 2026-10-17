import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { LeadService } from '../core/lead.service';

/** Isolate the supplied DFIR styles and animation runtime to its route. */
@Component({
  selector: 'xh-dfir-source',
  standalone: true,
  template: `<iframe #frame src="/dfir-page.html"
    title="DFIR: incident response, lifecycle, retainer configurator and readiness tools"
    scrolling="no" (load)="onLoad()"></iframe>`,
  styles: [`:host{display:block;width:100%;min-width:0}iframe{display:block;width:100%;height:1100px;min-height:0;border:0}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DfirSourceComponent implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly leads = inject(LeadService);
  private resizeObserver?: ResizeObserver;
  private themeObserver?: MutationObserver;
  private cleanup?: () => void;
  private initializedDocument?: Document;

  @HostListener('window:message', ['$event'])
  onContentReady(event: MessageEvent): void {
    if (event.source === this.frame?.nativeElement.contentWindow &&
        event.origin === this.document.defaultView?.location.origin && event.data?.type === 'xh-dfir-ready') {
      this.onLoad();
    }
  }

  onLoad(): void {
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const frameView = frame?.contentWindow;
    const main = doc?.querySelector('main');
    const view = this.document.defaultView;
    if (!frame || !doc || !frameView || !main || !view) return;
    if (this.initializedDocument === doc) return;
    this.ngOnDestroy();
    this.initializedDocument = doc;

    const syncScroll = () => {
      doc.documentElement.style.setProperty('--df-vh', `${view.innerHeight / 100}px`);
      const toast = doc.getElementById('dfirToast');
      if (toast) {
        toast.style.position = 'absolute';
        toast.style.top = `${Math.max(0, -frame.getBoundingClientRect().top) + view.innerHeight - 90}px`;
        toast.style.bottom = 'auto';
      }
      frameView.dispatchEvent(new Event('scroll'));
    };
    const resize = () => {
      if (!frame.isConnected) return;
      const height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
      if (frame.style.height !== height) frame.style.height = height;
      syncScroll();
    };
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(main);
    void doc.fonts.ready.then(resize);
    resize();

    const syncTheme = () => {
      doc.documentElement.setAttribute('data-theme', this.document.documentElement.getAttribute('data-theme') || 'light');
      doc.dispatchEvent(new Event('xh:theme'));
    };
    this.themeObserver = new MutationObserver(syncTheme);
    this.themeObserver.observe(this.document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    syncTheme();

    const callback = (event: Event) => {
      this.topics.ask((event as CustomEvent<string>).detail || 'Digital Forensics & Incident Response Services');
      this.overlay.open('callback');
    };
    const addToCart = (event: Event) => {
      const item = (event as CustomEvent<{ name: string; sub?: string; price: number; qty?: number }>).detail;
      this.cart.add(item.name + (item.sub ? ` — ${item.sub}` : ''), `INR ${item.price}`, item.qty ?? 1,
        { unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: '' });
      this.cart.open();
    };
    const click = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      const href = anchor?.getAttribute('href');
      if (!href) return;
      const route = href === 'https://www.xcellhost.top/' ? '/' : null;
      if (route) {
        event.preventDefault();
        void this.router.navigateByUrl(route);
        return;
      }
      if (!href.startsWith('#')) return;
      event.preventDefault();
      if (href === '#') return;
      const target = doc.getElementById(href.slice(1));
      const tail = href === '#faq' ? this.document.getElementById('ppFaq') : null;
      const top = target ? view.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top
        : tail ? view.scrollY + tail.getBoundingClientRect().top : null;
      if (top !== null) view.scrollTo({ top: top - 110,
        behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    const originalScrollTo = frameView.scrollTo;
    frameView.scrollTo = ((options: ScrollToOptions | number, y?: number) => {
      const top = typeof options === 'number' ? y ?? 0 : options.top ?? 0;
      view.scrollTo({ top: view.scrollY + frame.getBoundingClientRect().top + top,
        behavior: typeof options === 'number' ? 'auto' : options.behavior });
    }) as typeof frameView.scrollTo;
    doc.addEventListener('import-callback', callback);
    doc.addEventListener('import-cart', addToCart);
    doc.addEventListener('click', click);
    const submit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (!form.matches('form[data-xhform="dfir-quote"]')) return;
      event.preventDefault();
      void this.submitQuote(form);
    };
    doc.addEventListener('submit', submit);
    view.addEventListener('scroll', syncScroll, { passive: true });
    view.addEventListener('resize', syncScroll);
    this.cleanup = () => {
      doc.removeEventListener('import-callback', callback);
      doc.removeEventListener('import-cart', addToCart);
      doc.removeEventListener('click', click);
      doc.removeEventListener('submit', submit);
      view.removeEventListener('scroll', syncScroll);
      view.removeEventListener('resize', syncScroll);
      frameView.scrollTo = originalScrollTo;
    };
  }

  private async submitQuote(form: HTMLFormElement): Promise<void> {
    const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
    if (!button || button.disabled || !form.reportValidity()) return;
    const data = new FormData(form);
    const customer = Object.fromEntries(['name', 'company', 'email', 'phone'].map(key => [key, data.get(key)]));
    const scope = String(data.get('scope') || '');
    button.disabled = true;
    const result = await this.leads.submit('callback', {
      product: 'Digital Forensics & Incident Response (DFIR)',
      topic: 'DFIR fixed proposal', customer, scope, page: '/dfir',
    });
    button.disabled = false;
    let status = form.querySelector<HTMLElement>('.df-quote-status');
    if (!status) {
      status = form.ownerDocument.createElement('p');
      status.className = 'df-quote-status full';
      status.setAttribute('role', 'status');
      form.append(status);
    }
    if (result.ok && !result.skipped) {
      status.textContent = `Your DFIR scoping request was received. Reference: ${result.ref}`;
    } else {
      status.textContent = 'Send your scope to our team: ';
      const link = form.ownerDocument.createElement('a');
      link.href = this.leads.mailtoLink('DFIR fixed proposal',
        Object.entries(customer).map(([key, value]) => `${key}: ${value}`).join('\n') + `\nScope: ${scope}`);
      link.textContent = 'Email my quote request';
      status.append(link);
    }
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
    this.cleanup?.();
    this.cleanup = undefined;
  }
}
