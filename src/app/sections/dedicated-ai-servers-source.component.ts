import { Component, Input, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-dedicated-ai-servers-source',
  standalone: true,
  template: `@if (hero) {
    <iframe #frame src="/dedicated-ai-servers-hero.html" title="Dedicated AI Servers animated provisioning, training, inference, model fit and India residency" scrolling="no" (load)="onLoad()"></iframe>
  } @else {
    <iframe #frame src="/dedicated-ai-servers-content.html" title="Dedicated AI Servers GPU catalogue, VRAM calculator, GPU picker, quotation and Why XcellHost" scrolling="no" (load)="onLoad()"></iframe>
  }`,
  styles: [`:host{display:block;width:100%;min-width:0}iframe{display:block;width:100%;height:600px;min-height:0;border:0;background:transparent}`],
})
export class DedicatedAiServersSourceComponent implements OnDestroy {
  @Input() hero = false;
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;
  private themeObserver?: MutationObserver;
  private cleanup?: () => void;
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  onLoad(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const view = frame?.contentWindow;
    const main = doc?.querySelector('main');
    if (!frame || !doc || !view || !main) return;
    const resize = () => {
      const title = this.hero ? doc.querySelector<HTMLElement>('#daHero .lh-title') : null;
      if (title?.clientWidth) {
        title.style.setProperty('--ai-title-size', '39px');
        if (title.scrollWidth > title.clientWidth) {
          title.style.setProperty('--ai-title-size', `${39 * (title.clientWidth - 2) / title.scrollWidth}px`);
        }
      }
      const height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
      if (frame.style.height !== height) frame.style.height = height;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    void doc.fonts.ready.then(resize);
    const syncTheme = () => doc.documentElement.setAttribute('data-theme', document.documentElement.getAttribute('data-theme') || 'light');
    this.themeObserver = new MutationObserver(syncTheme);
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    syncTheme();
    resize();

    const callback = (event: Event) => {
      this.topics.ask((event as CustomEvent<string>).detail || 'Dedicated AI Servers');
      this.overlay.open('callback');
    };
    const request = (event: Event) => {
      const data = (event as CustomEvent<Record<string, string>>).detail;
      const [firstName = '', ...lastName] = (data['name'] || '').trim().split(/\s+/);
      const digits = (data['phone'] || '').replace(/\D/g, '');
      this.topics.ask('Dedicated AI Servers — quotation', {
        firstName, lastName: lastName.join(' '), company: '', email: data['email'] || '',
        phone: digits.length === 12 && digits.startsWith('91') ? digits.slice(2) : digits,
        help: 'Request a CallBack', details: data['config'] || '',
      });
      this.overlay.open('callback');
    };
    doc.addEventListener('import-ai-server-request', request);
    doc.addEventListener('import-callback', callback);
    const originalScrollTo = view.scrollTo;
    view.scrollTo = ((options: ScrollToOptions | number, y?: number) => {
      const top = typeof options === 'number' ? y ?? 0 : options.top ?? 0;
      const navigationHeight = document.querySelector('xh-dedicated-ai-servers-page xh-smb-section-nav')?.getBoundingClientRect().height ?? 0;
      window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top + top - navigationHeight,
        behavior: typeof options === 'number' ? 'auto' : options.behavior });
    }) as typeof view.scrollTo;
    const click = (event: MouseEvent) => {
      if (event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (anchor?.hasAttribute('data-pick') || anchor?.id === 'vrGo' || anchor?.id === 'pkGo') return;

      const href = anchor?.getAttribute('href');
      if (!href || href.length < 2) return;
      const contentFrame = this.hero ? document.querySelector<HTMLIFrameElement>('xh-dedicated-ai-servers-source iframe[src="/dedicated-ai-servers-content.html"]') : frame;
      const target = contentFrame?.contentDocument?.getElementById(href.slice(1)) ?? document.getElementById(href.slice(1));
      if (!target && href === '#contact') {
        event.preventDefault(); event.stopPropagation();
        this.topics.ask('Dedicated AI Servers — sizing and quotation'); this.overlay.open('callback'); return;
      }
      if (!target) return;
      event.preventDefault();
      event.stopPropagation();
      window.scrollTo({ top: window.scrollY + (target.ownerDocument === document ? 0 : contentFrame!.getBoundingClientRect().top) + target.getBoundingClientRect().top - 148,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    doc.addEventListener('click', click, true);
    this.cleanup = () => {
      doc.removeEventListener('import-ai-server-request', request);
      doc.removeEventListener('import-callback', callback);
      doc.removeEventListener('click', click, true);
      view.scrollTo = originalScrollTo;
    };
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.themeObserver?.disconnect();
    this.cleanup?.();
    this.cleanup = undefined;
  }
}
