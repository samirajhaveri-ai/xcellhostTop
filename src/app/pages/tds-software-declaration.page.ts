import { ChangeDetectionStrategy, Component, ElementRef, HostListener, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-tds-software-declaration-page',
  standalone: true,
  imports: [RouterLink, InsightsSectionComponent],
  templateUrl: './tds-software-declaration.page.html',
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;min-height:720px;border:0}.tds-closing{padding:24px 0 48px}.tds-closing>.wrap{max-width:1280px}.tds-actions{display:flex;gap:12px;flex-wrap:wrap}.tds-actions .btn-ghost{background:transparent;border-color:rgba(255,255,255,.4);color:#fff}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TdsSoftwareDeclarationPage implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly router = inject(Router);
  private readonly topics = inject(CallbackTopicService);
  private readonly overlay = inject(OverlayService);
  private observer?: ResizeObserver;
  private themeObserver?: MutationObserver;
  private disposed = false;

  openBilling(declaration = false): void {
    this.topics.ask(declaration ? 'Software TDS Declaration Letter' : 'Software Invoice — Talk To Billing', {
      firstName: '', lastName: '', company: '', email: '', help: 'Request a CallBack',
      details: declaration ? 'Please provide the invoice number and purpose of your declaration letter request.' : 'Software invoice billing enquiry',
    });
    this.overlay.open('callback');
  }

  constructor() {
    inject(SeoService).set('No TDS on Software Purchases | XcellHost',
      'Understand the software declaration on XcellHost invoices, review software and service lines, and request a declaration letter from billing.',
      '/tds-software-declaration');
  }

  onLoad(): void {
    this.observer?.disconnect();
    this.themeObserver?.disconnect();
    const frame = this.frame?.nativeElement, doc = frame?.contentDocument, main = doc?.querySelector('main');
    if (!frame || !doc || !main) return;
    const resize = () => { if (!this.disposed) frame.style.height = `${Math.ceil(main.getBoundingClientRect().height) + 2}px`; };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    const theme = () => doc.documentElement.setAttribute('data-theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : document.documentElement.getAttribute('data-theme') || 'light');
    this.themeObserver = new MutationObserver(theme);
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    theme(); resize(); void doc.fonts.ready.then(resize);
    doc.addEventListener('click', event => {
      const a = (event.target as Element)?.closest<HTMLAnchorElement>('a[href]');
      if (!a || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || a.target === '_blank') return;
      if (a.getAttribute('href')?.startsWith('/')) { event.preventDefault(); void this.router.navigateByUrl(a.pathname + a.search + a.hash); }
    });
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {
    const frame = this.frame?.nativeElement;
    if (event.origin !== window.location.origin || event.source !== frame?.contentWindow) return;
    const data = event.data;
    if (data?.type === 'tds-scroll' && typeof data.target === 'string') {
      const target = frame?.contentDocument?.getElementById(data.target);
      if (frame && target) window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 100, behavior: 'smooth' });
    } else if (data?.type === 'tds-billing') {
      this.openBilling();
    } else if (data?.type === 'tds-letter-start') {
      this.openBilling(true);
    } else if (data?.type === 'tds-letter' && data.values && typeof data.values === 'object') {
      const value = (key: string) => typeof data.values[key] === 'string' ? data.values[key].slice(0,500) : '';
      const name = value('name').trim().split(/\s+/);
      this.topics.ask('Software TDS Declaration Letter', {
        firstName: name.shift() || '', lastName: name.join(' '), company: value('company'), email: value('email'),
        help: 'Request a CallBack', details: `Declaration letter request\nInvoice: ${value('invoice')}\nGSTIN: ${value('gstin')}\nPurpose: ${value('purpose')}`,
      });
      this.overlay.open('callback');
    }
  }

  ngOnDestroy(): void { this.disposed = true; this.observer?.disconnect(); this.themeObserver?.disconnect(); }
}
