import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

@Component({
  selector: 'xh-nvidia-a2-source',
  standalone: true,
  template: `
    <iframe
      #frame
      src="/nvidia-a2-content.html"
      title="NVIDIA A2 cloud GPU details and comparison"
      scrolling="no"
      (load)="onLoad()"
    ></iframe>
  `,
  styles: [`
    :host { display: block; width: 100%; overflow: hidden; }
    iframe { display: block; width: 100%; min-height: 520px; border: 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaA2SourceComponent implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;

  onLoad(): void {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    const resize = (): void => {
      frame.style.height = `${Math.max(document.documentElement.scrollHeight, document.body?.scrollHeight ?? 0)}px`;
    };

    resize();
    this.observer?.disconnect();
    if (typeof ResizeObserver !== 'undefined') {
      this.observer = new ResizeObserver(resize);
      this.observer.observe(document.documentElement);
      if (document.body) this.observer.observe(document.body);
    }
    document.fonts?.ready.then(resize);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
