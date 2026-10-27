import {
  ChangeDetectionStrategy, Component, ElementRef, HostListener, NgZone,
  OnDestroy, ViewChild, inject, signal,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-sectigo-ov-ssl-checkout-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<main><iframe #checkoutFrame [src]="checkoutUrl"
    title="Sectigo OV SSL checkout" scrolling="no"
    [style.height.px]="height()" (load)="syncHeight()"></iframe></main>`,
  styles: [`:host, main { display: block; width: 100%; background: #f4f7fb; }
    iframe { display: block; width: 100%; min-height: 800px; border: 0; }`],
})
export class SectigoOvSslCheckoutPage implements OnDestroy {
  @ViewChild('checkoutFrame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly zone = inject(NgZone);
  private readonly quantity = Number(inject(ActivatedRoute).snapshot.queryParamMap.get('quantity'));
  readonly checkoutUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    '/assets/animations/sectigo-ov-ssl-checkout.html?quantity=' +
    (Number.isInteger(this.quantity) && this.quantity >= 1 && this.quantity <= 999 ? this.quantity : 1),
  );
  readonly height = signal(1200);
  private observer?: ResizeObserver;
  private disposed = false;

  constructor() {
    inject(SeoService).set('Sectigo OV SSL Checkout | XcellHost',
      'Configure your Sectigo OV SSL certificate term, quantity and billing details.',
      '/sectigo-ov-ssl/checkout');
  }

  syncHeight(): void {
    this.observer?.disconnect();
    const doc = this.frame?.nativeElement.contentDocument;
    if (!doc?.body) return;
    const resize = () => {
      if (!this.disposed) this.zone.run(() =>
        this.height.set(Math.max(800, Math.ceil(doc.body.getBoundingClientRect().height) + 2)));
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(doc.body);
    resize();
    void doc.fonts.ready.then(resize);
  }

  @HostListener('window:message', ['$event'])
  onMessage(event: MessageEvent): void {
    const frame = this.frame?.nativeElement;
    if (event.origin !== window.location.origin || event.source !== frame?.contentWindow) return;
    if (event.data?.type === 'sectigo-ov-ssl-checkout-scroll' && frame) {
      window.scrollTo({ top: Math.max(0, window.scrollY + frame.getBoundingClientRect().top - 110),
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  }

  ngOnDestroy(): void { this.disposed = true; this.observer?.disconnect(); }
}
