import { ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import { SeoService } from '../core/seo.service';

interface MarketplaceDocumentData {
  readonly documentUrl: string;
  readonly heading: string;
  readonly title: string;
  readonly description: string;
  readonly canonicalPath: string;
}

@Component({
  selector: 'xh-marketplace-document-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <h1 class="visually-hidden">{{ page.heading }}</h1>
    <p class="visually-hidden">{{ page.description }}</p>
    <iframe #frame [src]="documentUrl" [title]="page.heading" (load)="onLoad()"></iframe>
  `,
  styles: [`
    :host { display: block; width: 100%; height: 100dvh; overflow: hidden; }
    iframe { display: block; width: 100%; height: 100%; border: 0; }
    .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px;
      overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
  `],
})
export class MarketplaceDocumentPage implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly router = inject(Router);
  private readonly zone = inject(NgZone);
  readonly page = inject(ActivatedRoute).snapshot.data as MarketplaceDocumentData;
  readonly documentUrl: SafeResourceUrl = inject(DomSanitizer)
    .bypassSecurityTrustResourceUrl(this.page.documentUrl);
  private frameDocument?: Document;
  private clickListener?: (event: MouseEvent) => void;

  constructor() {
    inject(SeoService).set(this.page.title, this.page.description, this.page.canonicalPath);
  }

  onLoad(): void {
    const document = this.frame?.nativeElement.contentDocument;
    if (!document) return;

    this.removeClickListener();
    this.frameDocument = document;
    this.clickListener = (event: MouseEvent): void => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
      if (!anchor || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

      const rawHref = anchor.getAttribute('href') ?? '';
      if (!rawHref || rawHref === '#' || rawHref.startsWith('#') || /^(?:mailto|tel|javascript):/i.test(rawHref)) return;

      const url = new URL(anchor.href, document.baseURI);
      const marketplaceRoutes: Record<string, string> = {
        '/ai-marketplace.html': '/ai-marketplace',
        '/software-marketplace.html': '/software-marketplace',
        '/cloud-marketplace.html': '/cloud-marketplace',
      };
      let route = marketplaceRoutes[url.pathname];

      const isXcellHostUrl = url.origin === window.location.origin ||
        /(?:^|\.)xcellhost\.(?:cloud|top)$/i.test(url.hostname);
      if (!route && isXcellHostUrl) {
        route = url.pathname;
        if (route.endsWith('.html')) {
          route = route.slice(0, -5).replace(/^\/xcellhost-/, '/');
        }
      }
      if (!route) return;

      event.preventDefault();
      this.zone.run(() => void this.router.navigateByUrl(route + url.search + url.hash));
    };
    document.addEventListener('click', this.clickListener);
  }

  ngOnDestroy(): void {
    this.removeClickListener();
  }

  private removeClickListener(): void {
    if (this.frameDocument && this.clickListener) {
      this.frameDocument.removeEventListener('click', this.clickListener);
    }
    this.frameDocument = undefined;
    this.clickListener = undefined;
  }
}
