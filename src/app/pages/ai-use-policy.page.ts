import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-ai-use-policy-page',
  standalone: true,
  template: '<iframe #frame src="/ai-use-policy-content.html" title="XcellHost AI Use Policy" scrolling="no" (load)="onLoad()"></iframe>',
  styles: [`
    :host { display: block; width: 100%; overflow: hidden; }
    iframe { display: block; width: 100%; min-height: 720px; border: 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiUsePolicyPage implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private observer?: ResizeObserver;
  private frameDocument?: Document;
  private clickListener?: (event: MouseEvent) => void;

  constructor() {
    this.seo.set(
      'AI Use Policy — Responsible AI at XcellHost',
      'How XcellHost uses AI in cloud, cybersecurity and support, with human oversight and client data protections.',
      '/under-construction/ai-use-policy',
    );
  }

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

    if (this.frameDocument && this.clickListener) {
      this.frameDocument.removeEventListener('click', this.clickListener);
    }
    this.frameDocument = document;
    this.clickListener = (event: MouseEvent): void => {
      const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href?.startsWith('#') && href.length > 1) {
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        event.preventDefault();
        const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top;
        window.scrollTo({ top: top - 16, behavior: 'smooth' });
      } else if (href?.startsWith('/') && anchor.origin === window.location.origin) {
        event.preventDefault();
        void this.router.navigateByUrl(anchor.pathname + anchor.search + anchor.hash);
      }
    };
    document.addEventListener('click', this.clickListener);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    if (this.frameDocument && this.clickListener) {
      this.frameDocument.removeEventListener('click', this.clickListener);
    }
  }
}
