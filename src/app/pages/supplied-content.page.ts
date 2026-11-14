import { DOCUMENT } from '@angular/common';
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
import { ActivatedRoute } from '@angular/router';

import { CartService } from '../core/cart.service';
import { BannerActionsService } from '../core/banner-actions.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { installBannerActions } from '../sections/banner-actions';
import { installFaqLayout } from '../sections/faq-layout';
import { installImportedJourneyLayout } from '../sections/imported-journey-layout';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { useScrollingSectionNavigation } from '../sections/section-navigation-flow';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

interface ImportedCartItem {
  name?: string;
  sub?: string;
  price?: number;
  qty?: number;
}

interface ImportedPageWindow extends Window {
  XH?: {
    cart?: {
      add: (item: ImportedCartItem) => void;
    };
  };
}

/** Hosts a supplied standalone document inside the website's shared shell. */
@Component({
  selector: 'xh-supplied-content-page',
  standalone: true,
  imports: [InsightsSectionComponent, ServiceDefaultSectionsComponent],
  template: `
    <iframe
      #frame
      [src]="contentUrl"
      [title]="contentTitle"
      scrolling="no"
      (load)="onLoad()"
    ></iframe>
    <xh-insights-section [pageSlug]="slug" />
    <xh-service-default-sections
      [name]="pageName"
      [pageSlug]="slug"
      [closingOnly]="true"
    />
  `,
  styles: [`
    :host { display: block; width: 100%; min-width: 0; overflow: hidden; }
    iframe { display: block; width: 100%; min-height: 720px; border: 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuppliedContentPage implements AfterViewInit, OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly document = inject(DOCUMENT);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly cart = inject(CartService);
  private readonly banners = inject(BannerActionsService);
  private readonly cleanup: Array<() => void> = [];

  readonly slug = String(this.route.snapshot.data['suppliedPageSlug'] || '');
  readonly pageName = String(this.route.snapshot.data['searchTitle'] || this.route.snapshot.data['pageTitle'] || 'XcellHost');
  readonly contentTitle = String(this.route.snapshot.data['pageTitle'] || 'XcellHost');
  readonly contentUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `/imported-pages/${this.slug}.html`,
  );

  constructor() {
    inject(SeoService).set(
      this.contentTitle,
      String(this.route.snapshot.data['searchDescription'] || ''),
      `/${this.slug}`,
    );
  }

  ngAfterViewInit(): void {
    if (this.frame?.nativeElement.contentDocument?.readyState === 'complete') {
      queueMicrotask(() => this.onLoad());
    }
  }

  onLoad(): void {
    this.disposeFrameBindings();
    const frame = this.frame?.nativeElement;
    const frameDocument = frame?.contentDocument;
    const frameWindow = frame?.contentWindow as ImportedPageWindow | null;
    const main = frameDocument?.querySelector<HTMLElement>('main');
    const outerWindow = this.document.defaultView;
    if (!frame || !frameDocument || !frameWindow || !main || !outerWindow) return;

    useScrollingSectionNavigation(frameDocument);
    const importedHero = frameDocument.querySelector<HTMLElement>('.hero,section[class*="hero"],header[class*="hero"]');
    if (importedHero) {
      importedHero.dataset['product'] = this.pageName;
      importedHero.querySelectorAll('.lh-ask').forEach(block => block.remove());
    }
    this.cleanup.push(installBannerActions(frameDocument, (...args) => {
      void this.banners.act(...args);
    }));
    this.cleanup.push(installFaqLayout(frameDocument));
    this.cleanup.push(installImportedJourneyLayout(frame));

    const resize = (): void => {
      const height = `${Math.ceil(main.getBoundingClientRect().height) + 8}px`;
      if (frame.style.height !== height) frame.style.height = height;
    };
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(main);
    this.cleanup.push(() => resizeObserver.disconnect());
    void frameDocument.fonts?.ready.then(resize);
    resize();

    const syncTheme = (): void => {
      frameDocument.documentElement.setAttribute(
        'data-theme',
        this.document.documentElement.getAttribute('data-theme') || 'light',
      );
      frameDocument.dispatchEvent(new Event('xh:theme'));
    };
    const themeObserver = new MutationObserver(syncTheme);
    themeObserver.observe(this.document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    this.cleanup.push(() => themeObserver.disconnect());
    syncTheme();

    const relayScroll = (): void => {
      frameWindow.dispatchEvent(new Event('scroll'));
    };
    outerWindow.addEventListener('scroll', relayScroll, { passive: true });
    outerWindow.addEventListener('resize', relayScroll, { passive: true });
    this.cleanup.push(
      () => outerWindow.removeEventListener('scroll', relayScroll),
      () => outerWindow.removeEventListener('resize', relayScroll),
    );

    const click = (event: MouseEvent): void => {
      const target = event.target as Element | null;
      const callback = target?.closest<HTMLElement>('[data-open="xhCallback"]');
      if (callback) {
        event.preventDefault();
        event.stopImmediatePropagation();
        this.topics.ask(callback.dataset['topic'] || this.contentTitle.replace(/\s*\|\s*XcellHost.*$/i, ''));
        this.overlay.open('callback');
        return;
      }

      const anchor = target?.closest<HTMLAnchorElement>('a[href^="#"]');
      const id = anchor?.getAttribute('href')?.slice(1);
      const destination = id ? frameDocument.getElementById(id) : null;
      if (!destination) return;
      event.preventDefault();
      outerWindow.scrollTo({
        top: outerWindow.scrollY + frame.getBoundingClientRect().top + destination.getBoundingClientRect().top - 110,
        behavior: outerWindow.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      });
    };
    frameDocument.addEventListener('click', click, true);
    this.cleanup.push(() => frameDocument.removeEventListener('click', click, true));

    const importedCart = frameWindow.XH?.cart;
    if (importedCart) {
      const originalAdd = importedCart.add;
      importedCart.add = (item: ImportedCartItem): void => {
        const name = [item.name, item.sub].filter(Boolean).join(' — ') || this.contentTitle;
        const price = Number(item.price) || 0;
        this.cart.add(name, price ? `INR ${price}` : 'Quote on request', item.qty ?? 1,
          price ? { unitAmount: price, currency: 'INR', locale: 'en-IN', suffix: '' } : undefined);
        this.cart.open();
      };
      this.cleanup.push(() => { importedCart.add = originalAdd; });
    }
  }

  ngOnDestroy(): void {
    this.disposeFrameBindings();
  }

  private disposeFrameBindings(): void {
    while (this.cleanup.length) this.cleanup.pop()?.();
  }
}
