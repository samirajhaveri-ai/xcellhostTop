import { ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject, signal } from '@angular/core';

/** Full globe and regional catalogue, including the existing location interactions. */
@Component({
  selector: 'xh-global-infrastructure',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <iframe #globeFrame src="/assets/animations/xcellhost-globe.html"
      title="Global infrastructure: interactive data center globe and regional locations"
      scrolling="no" (load)="observeContent()" [style.height.px]="height()"></iframe>
  `,
  styles: [`:host{display:block;background:#f5f5f5}iframe{display:block;width:100%;border:0}`],
})
export class GlobalInfrastructureComponent implements OnDestroy {
  private readonly zone = inject(NgZone);
  @ViewChild('globeFrame') private frame?: ElementRef<HTMLIFrameElement>;
  readonly height = signal(780);
  private observer?: ResizeObserver;

  observeContent(): void {
    this.observer?.disconnect();
    const section = this.frame?.nativeElement.contentDocument?.querySelector('.gx');
    if (!section) return;
    const updateHeight = () => {
      const height = Math.ceil(section.getBoundingClientRect().height);
      if (height > 0) this.zone.run(() => this.height.set(height));
    };
    this.observer = new ResizeObserver(updateHeight);
    this.observer.observe(section);
    updateHeight();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
