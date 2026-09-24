import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject, output } from '@angular/core';

@Component({
  selector: 'xh-nvidia-h100-hero',
  standalone: true,
  template: '<iframe #frame src="/nvidia-h100-hero.html" title="NVIDIA H100 Cloud GPU hero" scrolling="no" (load)="onLoad()"></iframe>',
  styles: [`
    :host { display: block; width: 100%; overflow: hidden; }
    iframe { display: block; width: 100%; min-height: 520px; border: 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaH100HeroComponent implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  readonly consultationRequested = output<Event>();
  private observer?: ResizeObserver;

  onLoad(): void {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    const resize = (): void => {
      frame.style.height = `${Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)}px`;
    };
    resize();
    this.observer?.disconnect();
    if (typeof ResizeObserver !== 'undefined') {
      this.observer = new ResizeObserver(resize);
      this.observer.observe(document.documentElement);
      this.observer.observe(document.body);
    }
    document.fonts?.ready.then(resize);

    document.addEventListener('click', (event) => {
      const link = (event.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;
      event.preventDefault();
      const target = link.getAttribute('href');
      if (target === '#lead') {
        this.consultationRequested.emit(event);
        return;
      }
      const destination = target === '#pricing' ? 'ppPlans' : target === '#specs' || target === '#perf' ? 'ppFeats' : '';
      if (destination) window.document.getElementById(destination)?.scrollIntoView({ behavior: 'smooth' });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
