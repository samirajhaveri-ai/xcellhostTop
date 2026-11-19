import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  ViewChild,
  inject,
  signal,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-performance-cloud-checkout-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main aria-label="Performance Cloud checkout">
      <iframe
        #checkoutFrame
        [src]="checkoutUrl"
        title="Complete your Performance Cloud order"
        scrolling="no"
        [style.height.px]="height()"
        (load)="syncHeight()"
      ></iframe>
    </main>
  `,
  styles: [`
    :host, main { display: block; width: 100%; min-width: 0; background: #f4f7fc; }
    main { overflow: hidden; }
    iframe { display: block; width: 100%; min-height: 900px; border: 0; }
  `],
})
export class PerformanceCloudCheckoutPage implements OnDestroy {
  @ViewChild('checkoutFrame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly zone = inject(NgZone);
  readonly checkoutUrl = inject(DomSanitizer).bypassSecurityTrustResourceUrl(
    '/assets/animations/performance-cloud-checkout.html?checkout=1',
  );
  readonly height = signal(1500);
  private observer?: ResizeObserver;
  private disposed = false;

  constructor() {
    inject(SeoService).set(
      'Performance Cloud Checkout | XcellHost',
      'Review your Performance Cloud configuration and continue to secure checkout.',
      '/performance-cloud/checkout',
    );
  }

  syncHeight(): void {
    this.observer?.disconnect();
    const document = this.frame?.nativeElement.contentDocument;
    if (!document?.body) return;

    const resize = () => {
      if (this.disposed) return;
      const nextHeight = Math.max(900, Math.ceil(document.body.scrollHeight) + 2);
      this.zone.run(() => this.height.set(nextHeight));
    };

    this.observer = new ResizeObserver(resize);
    this.observer.observe(document.body);
    resize();
    void document.fonts.ready.then(resize);
  }

  ngOnDestroy(): void {
    this.disposed = true;
    this.observer?.disconnect();
  }
}
