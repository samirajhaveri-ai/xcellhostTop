import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { LeadService } from '../core/lead.service';

/** Isolate the supplied OpenAI Managed Services styles and animation runtime to its route. */
@Component({
  selector: 'xh-openai-managed-source',
  standalone: true,
  template: `<iframe #frame src="/openai-managed-services-page.html"
    title="OpenAI Managed Services: animated RAG and agent demos, use-case finder, token estimator and quotation tools"
    scrolling="no" (load)="onLoad()"></iframe>`,
  styles: [`:host{display:block;width:100%;min-width:0}iframe{display:block;width:100%;height:1100px;min-height:0;border:0}`],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpenAiManagedSourceComponent implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly document = inject(DOCUMENT);
  private readonly router = inject(Router);
  private readonly overlay = inject(OverlayService);
  private readonly cart = inject(CartService);
  private readonly topics = inject(CallbackTopicService);
  private readonly leads = inject(LeadService);
  private resizeObserver?: ResizeObserver;
  private themeObserver?: MutationObserver;
  private cleanup?: () => void;
  private initializedDocument?: Document;

  @HostListener('window:message', ['$event'])
  onContentReady(event: MessageEvent): void {
    if (event.source === this.frame?.nativeElement.contentWindow &&
        event.origin === this.document.defaultView?.location.origin && event.data?.type === 'xh-openai-managed-services-ready') {
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
      doc.documentElement.style.setProperty('--oa-vh', `${view.innerHeight / 100}px`);
      const toast = doc.getElementById('openAiToast');
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
      this.topics.ask((event as CustomEvent<string>).detail || 'OpenAI Managed Services');
      this.overlay.open('callback');
    };
    const addToCart = (event: Event) => {
      const item = (event as CustomEvent<{ name: string; sub?: string; price: number; qty?: number }>).detail;
      this.cart.add(item.name + (item.sub ? ' — ' + item.sub : ''), 'INR ' + item.price, item.qty ?? 1,
        { unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: '' });
      this.cart.open();
    };
    const click = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      const href = anchor?.getAttribute('href');
      if (!href) return;
      const route = href === 'https://www.xcellhost.top/' ? '/'
        : /^\/(?!\/)/.test(href) ? href
        : /^[a-z0-9-]+\.html$/.test(href) ? '/' + href.slice(0, -5) : null;
      if (route) {
        event.preventDefault();
        void this.router.navigateByUrl(route);
        return;
      }
      if (!href.startsWith('#')) return;
      event.preventDefault();
      if (href === '#') return;
      const target = doc.getElementById(href.slice(1));
      const tail = href === '#faq' ? this.document.getElementById('ppFaq')
        : href === '#contact' ? this.document.querySelector<HTMLElement>('#ppage .pp-cta') : null;
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
      if (!form.matches('form[data-xhform="oa-quote"]')) return;
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
    const scope = String(data.get('summary') || '');
    button.disabled = true;
    const result = await this.leads.submit('callback', {
      product: 'OpenAI Managed Services',
      topic: 'OpenAI Managed Services quotation', customer, scope, page: '/openai-managed-services',
    });
    button.disabled = false;
    let status = form.querySelector<HTMLElement>('.oa-quote-status');
    if (!status) {
      status = form.ownerDocument.createElement('p');
      status.className = 'oa-quote-status full';
      status.setAttribute('role', 'status');
      form.append(status);
    }
    if (result.ok && !result.skipped) {
      status.textContent = `Your OpenAI Managed Services quotation request was received. Reference: ${result.ref}`;
    } else {
      status.textContent = 'Send your scope to our team: ';
      const link = form.ownerDocument.createElement('a');
      link.href = this.leads.mailtoLink('OpenAI Managed Services quotation',
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
