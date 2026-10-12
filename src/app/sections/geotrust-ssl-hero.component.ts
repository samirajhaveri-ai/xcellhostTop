import {
  ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy,
  ViewChild, inject, signal,
} from '@angular/core';

/** Certificate dashboard copied from the supplied GeoTrust HTML. */
@Component({
  selector: 'xh-geotrust-ssl-hero',
  standalone: true,
  template: `<iframe #heroFrame src="/assets/animations/geotrust-ssl-hero.html"
    title="Animated GeoTrust SSL illustration with sample certificate activity, encryption and renewal metrics"
    scrolling="no" [style.height.px]="height()" (load)="syncContent()"></iframe>`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;border:0;background:transparent}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeotrustSslHeroComponent implements OnDestroy {
  readonly height = signal(592);
  @ViewChild('heroFrame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly zone = inject(NgZone);
  private resizeObserver?: ResizeObserver;
  private disposed = false;

  syncContent(): void {
    this.resizeObserver?.disconnect();
    const doc = this.frame?.nativeElement.contentDocument;
    const main = doc?.querySelector('main');
    if (!doc || !main) return;
    const resize = () => {
      if (!this.disposed) this.zone.run(() => this.height.set(Math.ceil(main.getBoundingClientRect().height) + 2));
    };
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(main);
    resize();
    void doc.fonts.ready.then(resize);
  }

  ngOnDestroy(): void {
    this.disposed = true;
    this.resizeObserver?.disconnect();
  }
}
