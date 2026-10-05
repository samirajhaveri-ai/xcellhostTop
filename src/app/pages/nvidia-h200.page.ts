import { ChangeDetectionStrategy, Component, OnDestroy, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { GpuLeadHeroComponent } from '../sections/gpu-lead-hero.component';

@Component({
  selector: 'xh-nvidia-h200-page',
  standalone: true,
  imports: [GpuLeadHeroComponent],
  template: `
    <iframe src="/nvidia-h200-content.html" title="NVIDIA H200 Cloud GPU introduction" scrolling="no" (load)="onLoad($event, 'hero')"></iframe>
    <iframe src="/nvidia-h200-content.html" title="NVIDIA H200 Cloud GPU overview" scrolling="no" (load)="onLoad($event, 'overview')"></iframe>
    <xh-gpu-lead-hero slug="nvidia-h200" productName="NVIDIA H200" />
    <iframe src="/nvidia-h200-content.html" title="NVIDIA H200 Cloud GPU details" scrolling="no" (load)="onLoad($event, 'details')"></iframe>
  `,
  styles: [`
    :host { display: block; width: 100%; overflow: hidden; }
    iframe { display: block; width: 100%; min-height: 720px; border: 0; }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaH200Page implements OnDestroy {
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly observers = new Map<HTMLIFrameElement, ResizeObserver>();
  private readonly clickListeners = new Map<Document, (event: MouseEvent) => void>();
  private detailsFrame?: HTMLIFrameElement;

  constructor() {
    this.seo.set(
      'NVIDIA H200 Cloud GPU in India — 141 GB HBM3e | XcellHost',
      'Explore NVIDIA H200 cloud GPU plans, specifications, workloads and pricing in India.',
      '/nvidia-h200',
    );
  }

  onLoad(event: Event, view: 'hero' | 'overview' | 'details'): void {
    const frame = event.currentTarget as HTMLIFrameElement | null;
    const document = frame?.contentDocument;
    if (!frame || !document) return;
    frame.style.minHeight = '0';

    if (view === 'hero') {
      let sibling = document.querySelector('.pp-trust')?.nextElementSibling as HTMLElement | null;
      while (sibling) {
        sibling.style.display = 'none';
        sibling = sibling.nextElementSibling as HTMLElement | null;
      }
    } else {
      if (view === 'details') this.detailsFrame = frame;
      document.querySelectorAll<HTMLElement>('.nav, .pp-hero, .pp-trust').forEach((element) => {
        element.style.display = 'none';
      });

      const answer = document.getElementById('answer');
      const overview = answer?.previousElementSibling as HTMLElement | null;
      if (view === 'overview') {
        document.querySelectorAll<HTMLElement>('.foot').forEach((element) => {
          element.style.display = 'none';
        });
        const container = answer?.parentElement;
        container?.querySelectorAll<HTMLElement>(':scope > *').forEach((element) => {
          element.style.display = element === overview || element === answer ? '' : 'none';
        });
      } else {
        if (overview) overview.style.display = 'none';
        if (answer) answer.style.display = 'none';
      }
    }

    const resize = (): void => {
      frame.style.height = `${Math.max(document.documentElement.scrollHeight, document.body.scrollHeight)}px`;
    };
    resize();
    this.observers.get(frame)?.disconnect();
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(resize);
      observer.observe(document.documentElement);
      observer.observe(document.body);
      this.observers.set(frame, observer);
    }
    document.fonts?.ready.then(resize);

    const previousListener = this.clickListeners.get(document);
    if (previousListener) document.removeEventListener('click', previousListener);
    const clickListener = (clickEvent: MouseEvent): void => {
      const anchor = (clickEvent.target as Element).closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href?.startsWith('#') && href.length > 1) {
        const targetFrame = view === 'details' ? frame : this.detailsFrame ?? frame;
        const target = targetFrame.contentDocument?.getElementById(href.slice(1));
        if (!target) return;
        clickEvent.preventDefault();
        const top = window.scrollY + targetFrame.getBoundingClientRect().top + target.getBoundingClientRect().top;
        window.scrollTo({ top: top - 16, behavior: 'smooth' });
      } else if (href?.startsWith('/') && anchor.origin === window.location.origin) {
        clickEvent.preventDefault();
        void this.router.navigateByUrl(anchor.pathname + anchor.search + anchor.hash);
      }
    };
    this.clickListeners.set(document, clickListener);
    document.addEventListener('click', clickListener);
  }

  ngOnDestroy(): void {
    for (const observer of this.observers.values()) observer.disconnect();
    for (const [document, listener] of this.clickListeners) {
      document.removeEventListener('click', listener);
    }
  }
}
