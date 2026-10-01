import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-cybersecurity-frameworks-page',
  standalone: true,
  templateUrl: './cybersecurity-frameworks.page.html',
  styles: [`
    :host { display: block; width: 100%; overflow: hidden; }
    iframe { display: block; width: 100%; min-height: 720px; border: 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CybersecurityFrameworksPage implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private observer?: ResizeObserver;
  private frameDocument?: Document;
  private clickListener?: (event: MouseEvent) => void;

  constructor() {
    this.seo.set(
      'Cybersecurity Frameworks | XcellHost',
      'Explore 113 cybersecurity frameworks, standards and regulations across 12 security domains, with interactive search and XcellHost service mappings.',
      '/cybersecurity-frameworks/',
    );
  }

  onLoad(): void {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    const resize = (): void => {
      frame.style.height = `${Math.max(720, Math.ceil(document.body.getBoundingClientRect().height))}px`;
    };
    resize();
    this.observer?.disconnect();
    if (typeof ResizeObserver !== 'undefined') {
      this.observer = new ResizeObserver(resize);
      this.observer.observe(document.documentElement);
      this.observer.observe(document.body);
    }
    document.fonts?.ready.then(resize);

    const scrollToTarget = (target: Element): void => {
      const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top;
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: top - 110, behavior: reducedMotion ? 'auto' : 'smooth' });
    };
    // Domain buttons scroll to the explorer from inside the supplied HTML.
    const explorer = document.getElementById('explorer');
    if (explorer) explorer.scrollIntoView = () => scrollToTarget(explorer);

    if (this.frameDocument && this.clickListener) {
      this.frameDocument.removeEventListener('click', this.clickListener);
    }
    this.frameDocument = document;
    this.clickListener = (event: MouseEvent): void => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href?.startsWith('#') && href.length > 1) {
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        event.preventDefault();
        scrollToTarget(target);
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
