import { Component, ElementRef, OnDestroy, ViewChild, inject, output } from '@angular/core';
import { Router } from '@angular/router';
import { CatalogService } from '../core/catalog.service';

@Component({
  selector: 'xh-mailbox-migration-content',
  standalone: true,
  template: `<iframe
    #frame
    src="/mailbox-migration-content.html"
    title="Mailbox migration platforms, compatibility checker, process and pricing"
    scrolling="no"
    (load)="onLoad()"
  ></iframe>`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;height:3200px;border:0;background:transparent}'],
})
export class MailboxMigrationContentComponent implements OnDestroy {
  readonly assessmentRequested = output<{ event: Event; requirement: string }>();
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly router = inject(Router);
  private readonly catalog = inject(CatalogService);
  private observer?: ResizeObserver;
  private document?: Document;
  private clickListener?: (event: MouseEvent) => void;

  onLoad(): void {
    this.cleanup();
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    const main = document?.querySelector('main');
    if (!frame || !document || !main) return;

    const resize = () => {
      frame.style.height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    void document.fonts.ready.then(resize);
    resize();
    this.document = document;

    document.querySelectorAll<HTMLAnchorElement>('.pa a[href$=".html"]').forEach((anchor) => {
      const slug = (anchor.getAttribute('href') ?? '').replace(/\.html$/, '');
      anchor.href = this.catalog.entryBySlug(slug) || slug === 'microsoft-365-to-google-workspace-migration'
        ? `/${slug}`
        : '#lead';
    });

    this.clickListener = (event) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey ||
          event.shiftKey || event.altKey) return;
      const href = anchor.getAttribute('href') ?? '';
      if (href === '#lead') {
        event.preventDefault();
        const path = anchor.closest('.pa') ? anchor.querySelector('h3')?.textContent?.trim() : null;
        const route = path || document.getElementById('ckH')?.textContent?.trim() || 'Mailbox migration';
        const count = document.querySelector<HTMLInputElement>('#esN')?.value ?? '';
        const size = document.querySelector<HTMLInputElement>('#esG')?.value ?? '';
        const plan = document.querySelector('#pl article[aria-pressed="true"] h3')?.textContent ?? '';
        this.assessmentRequested.emit({
          event,
          requirement: `${route}: ${count} mailboxes, ${plan}, average ${size} GB`,
        });
      } else if (href.startsWith('/')) {
        event.preventDefault();
        void this.router.navigateByUrl(href);
      }
    };
    document.addEventListener('click', this.clickListener);
  }

  private cleanup(): void {
    this.observer?.disconnect();
    if (this.document && this.clickListener) this.document.removeEventListener('click', this.clickListener);
    this.document = undefined;
    this.clickListener = undefined;
  }

  ngOnDestroy(): void {
    this.cleanup();
  }
}
