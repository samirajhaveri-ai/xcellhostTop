import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { DocKind, DocRequestService } from '../core/doc-request.service';
import { CartService } from '../core/cart.service';
import { SITE } from '../data/site.data';
import { PRODUCT_VIDEOS } from '../data/products.data';
import { TENANT_MIGRATION_FAQS } from '../data/microsoft-365-tenant-to-tenant-migration-faqs.data';
import { ProductFaqComponent } from '../sections/product/product-faq.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-microsoft-365-tenant-to-tenant-migration-page',
  standalone: true,
  imports: [RouterLink, ProductFaqComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './microsoft-365-tenant-to-tenant-migration.page.html',
  styleUrl: './microsoft-365-tenant-to-tenant-migration.page.css',
})
export class Microsoft365TenantToTenantMigrationPage implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly router = inject(Router);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly docs = inject(DocRequestService);
  private readonly cart = inject(CartService);
  private readonly sanitizer = inject(DomSanitizer);
  readonly name = 'Microsoft 365 Tenant-to-Tenant Migration';
  readonly faqs = TENANT_MIGRATION_FAQS;
  readonly videos = [
    { title: 'Email migration overview', id: PRODUCT_VIDEOS['Email Migration'][0] },
    { title: 'Microsoft 365 overview', id: PRODUCT_VIDEOS['Microsoft 365'][0] },
  ].map((video) => ({ ...video, url: this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube-nocookie.com/embed/${video.id}?rel=0&playsinline=1`) }));
  readonly referenceScenarios = [
    { title: 'Mergers & acquisitions', description: 'Discuss customer references for combining Microsoft 365 users, mailboxes and collaboration data after a merger or acquisition.' },
    { title: 'Divestitures', description: 'Ask about separating users and workloads into a new tenant with permissions mapping and a planned domain cutover.' },
    { title: 'Tenant consolidation', description: 'Explore reference projects involving tenant consolidation, coexistence and post-migration support.' },
  ];
  readonly whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, I am interested in ${this.name}.`)}`;
  readonly emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent(`Enquiry: ${this.name}`)}`;
  private observer?: ResizeObserver;
  private frameDocument?: Document;
  private clickListener?: (event: MouseEvent) => void;

  openCallback(topic = this.name): void {
    this.topics.ask(topic);
    this.overlay.open('callback');
  }

  requestDoc(kind: DocKind): void {
    this.docs.ask(kind, this.name);
    this.overlay.open('doc');
  }

  buyNow(): void {
    this.cart.add(this.name, 'Quote on request');
    this.cart.open();
    this.overlay.open('cart');
  }

  constructor() {
    inject(SeoService).set(
      'Microsoft 365 Tenant-to-Tenant Migration Services India | XcellHost',
      'Cross-tenant Microsoft 365 migration for mergers, acquisitions, divestitures and consolidation, covering mailboxes, OneDrive, SharePoint, Teams and Intune.',
      '/microsoft-365-tenant-to-tenant-migration',
    );
  }

  onLoad(): void {
    this.cleanup();
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    const main = document?.querySelector('main');
    if (!frame || !document || !main) return;
    this.frameDocument = document;
    const resize = () => {
      frame.style.height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    void document.fonts.ready.then(resize);
    resize();

    this.clickListener = (event) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey ||
          event.shiftKey || event.altKey || anchor.target === '_blank') return;
      const href = anchor.getAttribute('href') ?? '';
      if (href === '#lead') {
        event.preventDefault();
        const workloads = Array.from(document.querySelectorAll<HTMLElement>('#esW .es-r'))
          .filter((row) => row.querySelector<HTMLInputElement>('input[type="checkbox"]')?.checked)
          .map((row) => `${row.querySelector<HTMLInputElement>('input[type="number"]')?.value} ${row.querySelector('label span')?.firstChild?.textContent?.trim() ?? row.dataset['k']}`);
        const size = document.querySelector<HTMLInputElement>('#gb')?.value;
        const extras = [
          document.querySelector<HTMLInputElement>('#cx')?.checked ? 'coexistence pack' : '',
          document.querySelector<HTMLInputElement>('#pm')?.checked ? 'project management' : '',
        ].filter(Boolean);
        this.topics.ask(`Microsoft 365 tenant-to-tenant migration: ${workloads.join(', ') || 'free assessment'}; average ${size} GB${extras.length ? '; ' + extras.join(', ') : ''}`);
        this.overlay.open('callback');
      } else if (href.startsWith('#')) {
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        event.preventDefault();
        const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top;
        window.scrollTo({ top: top - 100, behavior: 'smooth' });
      } else if (href.startsWith('/')) {
        event.preventDefault();
        void this.router.navigateByUrl(href);
      }
    };
    document.addEventListener('click', this.clickListener);
  }

  private cleanup(): void {
    this.observer?.disconnect();
    if (this.frameDocument && this.clickListener) this.frameDocument.removeEventListener('click', this.clickListener);
    this.frameDocument = undefined;
    this.clickListener = undefined;
  }

  ngOnDestroy(): void { this.cleanup(); }
}
