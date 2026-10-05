import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'xh-nvidia-a100-source',
  standalone: true,
  template: `
    <iframe
      #frame
      [id]="view === 'hero' ? 'a100-hero-frame' : 'a100-' + view + '-frame'"
      [src]="view === 'hero' ? heroUrl : detailsUrl"
      [title]="view === 'hero' ? 'NVIDIA A100 hero' : view === 'overview' ? 'NVIDIA A100 GPU overview' : 'NVIDIA A100 GPU details'"
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
  @Input({ required: true }) view: 'hero' | 'overview' | 'details' = 'details';
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly sanitizer = inject(DomSanitizer);
  readonly heroUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/nvidia-a100-sections.html?view=hero');
  readonly detailsUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/nvidia-a100-sections.html?view=details');
  private observer?: ResizeObserver;

  onLoad(): void {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    if (this.view !== 'hero') {
      const answer = document.getElementById('answer');
      const overview = document.querySelector<HTMLElement>('.a100-overview');
      const heading = overview?.previousElementSibling as HTMLElement | null;
      if (this.view === 'overview') {
        document.querySelectorAll<HTMLElement>('.foot').forEach((element) => {
          element.style.display = 'none';
        });
        const container = answer?.parentElement;
        container?.querySelectorAll<HTMLElement>(':scope > *').forEach((element) => {
          element.style.display = element === heading || element === overview || element === answer ? '' : 'none';
        });
      } else {
        if (heading) heading.style.display = 'none';
        if (overview) overview.style.display = 'none';
        if (answer) answer.style.display = 'none';
      }
    }

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
