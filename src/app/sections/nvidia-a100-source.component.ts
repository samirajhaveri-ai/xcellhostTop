import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'xh-nvidia-a100-source',
  standalone: true,
  template: `
    <iframe
      #frame
      [id]="view === 'details' ? 'a100-details-frame' : 'a100-hero-frame'"
      [src]="view === 'hero' ? heroUrl : detailsUrl"
      [title]="view === 'hero' ? 'NVIDIA A100 hero' : 'NVIDIA A100 GPU details'"
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
export class NvidiaA100SourceComponent implements OnDestroy {
  @Input({ required: true }) view: 'hero' | 'details' = 'details';
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly sanitizer = inject(DomSanitizer);
  readonly heroUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/nvidia-a100-sections.html?view=hero');
  readonly detailsUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/nvidia-a100-sections.html?view=details');
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
