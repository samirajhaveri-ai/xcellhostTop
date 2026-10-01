import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
  output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'xh-cloud-security-posture-source',
  standalone: true,
  template: `
    <iframe
      #frame
      [src]="contentUrl"
      title="Microsoft 365 Security Posture Management"
      scrolling="no"
      (load)="onLoad()"
    ></iframe>
  `,
  styles: [`
    :host { display: block; width: 100%; overflow: hidden; }
    iframe { display: block; width: 100%; min-height: 720px; border: 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudSecurityPostureSourceComponent implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;

  readonly tourRequested = output<void>();

  private readonly sanitizer = inject(DomSanitizer);
  readonly contentUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    '/m365-security-posture-management.html',
  );
  private observer?: ResizeObserver;

  onLoad(): void {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    const resize = (): void => {
      frame.style.height = `${Math.max(
        document.documentElement.scrollHeight,
        document.body?.scrollHeight ?? 0,
      )}px`;
    };

    resize();
    this.observer?.disconnect();
    if (typeof ResizeObserver !== 'undefined') {
      this.observer = new ResizeObserver(resize);
      this.observer.observe(document.documentElement);
      if (document.body) this.observer.observe(document.body);
    }
    document.fonts?.ready.then(resize);

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const id = link.getAttribute('href')?.slice(1);
        if (id === 'tour') {
          event.preventDefault();
          this.tourRequested.emit();
          return;
        }
        const target = id ? document.getElementById(id) : null;
        if (!target) return;
        event.preventDefault();
        const frameTop = frame.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: frameTop + target.offsetTop, behavior: 'smooth' });
      });
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
