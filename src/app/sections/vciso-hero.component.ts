import {
  ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy,
  ViewChild, inject, signal,
} from '@angular/core';

/** The supplied risk room and animation, isolated from shared product styles. */
@Component({
  selector: 'xh-vciso-hero',
  standalone: true,
  template: `<iframe #heroFrame src="/assets/animations/vciso-as-a-service-hero.html"
    title="Animated risk room with sample data: cyber risk heatmap, maturity score, framework readiness and mitigated risks"
    scrolling="no" [style.height.px]="height()" (load)="syncContent()"></iframe>`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;border:0;background:transparent}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VcisoHeroComponent implements OnDestroy {
  readonly height = signal(600);
  @ViewChild('heroFrame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly zone = inject(NgZone);
  private resizeObserver?: ResizeObserver;
  private themeObserver?: MutationObserver;
  private disposed = false;

  syncContent(): void {
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
    const doc = this.frame?.nativeElement.contentDocument;
    const main = doc?.querySelector('main');
    if (!doc || !main) return;
    const resize = () => {
      if (!this.disposed) this.zone.run(() => this.height.set(Math.ceil(main.getBoundingClientRect().height) + 2));
    };
    this.resizeObserver = new ResizeObserver(resize);
    this.resizeObserver.observe(main);
    const syncTheme = () => doc.documentElement.setAttribute('data-theme',
      document.documentElement.classList.contains('dark-mode') ? 'dark' : document.documentElement.getAttribute('data-theme') || 'light');
    this.themeObserver = new MutationObserver(syncTheme);
    this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme', 'class'] });
    syncTheme();
    resize();
    void doc.fonts.ready.then(resize);
  }

  ngOnDestroy(): void {
    this.disposed = true;
    this.resizeObserver?.disconnect();
    this.themeObserver?.disconnect();
  }
}
