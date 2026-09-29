import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

import {
  ManagedDatabaseSectionsComponent,
  ManagedDatabaseSlug,
} from '../sections/managed-database-sections.component';

@Component({
  selector: 'xh-managed-database-page',
  standalone: true,
  imports: [ManagedDatabaseSectionsComponent],
  template: `
    <iframe
      #pageFrame
      class="database-page"
      [src]="pageUrl"
      [title]="pageTitle"
      scrolling="no"
      (load)="onFrameLoad()"
    ></iframe>
    <xh-managed-database-sections [slug]="slug" />
  `,
  styles: `
    :host {
      display: block;
      min-height: 100vh;
      background: #fff;
    }

    .database-page {
      display: block;
      width: 100%;
      min-height: 100vh;
      border: 0;
      overflow: hidden;
      background: #fff;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedDatabasePage implements AfterViewInit, OnDestroy {
  @ViewChild('pageFrame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly sanitizer = inject(DomSanitizer);
  private resizeObserver?: ResizeObserver;
  private documentClick?: (event: MouseEvent) => void;

  readonly slug = this.route.snapshot.data['databaseSlug'] as ManagedDatabaseSlug;
  readonly pageUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `/assets/managed-databases/${this.slug}.html`,
  );
  readonly pageTitle = this.route.snapshot.data['title'] as string;

  ngAfterViewInit(): void {
    // The load handler performs the initial sizing. This fallback also covers a
    // cached document that completed before Angular attached the event handler.
    if (this.frame?.nativeElement.contentDocument?.readyState === 'complete') {
      this.onFrameLoad();
    }
  }

  onFrameLoad(): void {
    const iframe = this.frame?.nativeElement;
    const document = iframe?.contentDocument;
    if (!iframe || !document) return;

    this.resizeObserver?.disconnect();
    if (this.documentClick) document.removeEventListener('click', this.documentClick);

    const resize = () => {
      const height = Math.max(
        document.documentElement.scrollHeight,
        document.body?.scrollHeight ?? 0,
      );
      iframe.style.height = `${height}px`;
    };

    resize();
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(document.documentElement);
    if (document.body) this.resizeObserver.observe(document.body);

    this.documentClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return;

      const href = anchor.getAttribute('href') ?? '';
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;

      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) return;

      event.preventDefault();
      const path = url.pathname
        .replace(/^\/assets\/managed-databases\//, '/')
        .replace(/\.html$/, '') || '/';
      void this.router.navigateByUrl(`${path}${url.hash}`);
    };
    document.addEventListener('click', this.documentClick);

    // Fonts and large inline hero artwork can settle after the load event.
    void document.fonts?.ready.then(resize);
    window.setTimeout(resize, 250);
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    const document = this.frame?.nativeElement.contentDocument;
    if (document && this.documentClick) document.removeEventListener('click', this.documentClick);
  }
}
