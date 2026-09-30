import { ChangeDetectionStrategy, Component, ElementRef, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'xh-cloud-repatriation-source',
  standalone: true,
  template: `
    <iframe
      #frame
      [src]="view === 'hero' ? heroUrl : detailsUrl"
      [title]="view === 'hero' ? 'Cloud Repatriation introduction' : 'Cloud Repatriation details and frequently asked questions'"
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
export class CloudRepatriationSourceComponent implements OnDestroy {
  @Input({ required: true }) view: 'hero' | 'details' = 'details';
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly sanitizer = inject(DomSanitizer);
  readonly heroUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/cloud-repatriation-content.html?view=hero');
  readonly detailsUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/cloud-repatriation-content.html?view=details');
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
