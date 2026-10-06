import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { DocKind, DocRequestService } from '../core/doc-request.service';
import { CartService } from '../core/cart.service';
import { SITE } from '../data/site.data';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-nvidia-b300-page',
  standalone: true,
  imports: [RouterLink, InsightsSectionComponent],
  templateUrl: './nvidia-b300.page.html',
  styleUrl: './nvidia-b300.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaB300Page implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private readonly router = inject(Router);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly docs = inject(DocRequestService);
  private readonly cart = inject(CartService);
  readonly name = 'NVIDIA B300 Nodes';
  readonly activePreview = signal<'intro' | 'use-cases'>('intro');
  readonly references = [
    { initials: 'AI', title: 'Model training teams', description: 'Discuss references for model training, GPU memory planning and multi-GPU deployment.' },
    { initials: 'ML', title: 'Inference platform teams', description: 'Ask about references for LLM serving, software setup and inference capacity planning.' },
    { initials: 'IT', title: 'Enterprise IT teams', description: 'Explore references for GPU hosting in India, deployment support and ongoing operations.' },
  ];
  readonly whatsappUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi, I am interested in NVIDIA B300 GPU capacity.')}`;
  readonly emailUrl = `mailto:${SITE.email}?subject=${encodeURIComponent('Enquiry: NVIDIA B300 GPU capacity')}`;
  private observer?: ResizeObserver;
  private frameDocument?: Document;
  private clickListener?: (event: MouseEvent) => void;

  openCallback(topic = 'NVIDIA B300: GPU sizing and capacity assessment'): void {
    this.topics.ask(topic);
    this.overlay.open('callback');
  }

  requestDoc(kind: DocKind): void {
    this.docs.ask(kind, this.name);
    this.overlay.open('doc');
  }

  buyNow(): void {
    this.cart.add(this.name, 'Quote on request');
    this.cart.open();
    this.overlay.open('cart');
  }

  constructor() {
    inject(SeoService).set(
      'NVIDIA B300 Nodes in India | XcellHost',
      'Reserve NVIDIA B300 node capacity for large-scale AI training, reasoning and inference with deployment support from XcellHost.',
      '/nvidia-b300-nodes/',
    );
  }

  onLoad(): void {
    this.cleanup();
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    const main = document?.querySelector('main');
    if (!frame || !document || !main) return;
    this.frameDocument = document;
    const resize = () => {
      frame.style.height = `${Math.ceil(main.getBoundingClientRect().height)}px`;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(main);
    void document.fonts.ready.then(resize);
    resize();

    this.clickListener = (event) => {
      const anchor = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey ||
          event.shiftKey || event.altKey || anchor.target === '_blank') return;
      const href = anchor.getAttribute('href') ?? '';
      if (href === '#lead') {
        event.preventDefault();
        const request = anchor.id === 'qVq' ? 'cluster quote' : anchor.id === 'qGo' ? 'reserve configuration' : 'sizing call';
        const configuration = document.getElementById('qN')?.textContent?.trim() ?? '';
        const rate = document.getElementById('qH')?.textContent?.trim() ?? '';
        const gst = document.querySelector('#qx .gst button[aria-pressed="true"]')?.textContent?.trim() ?? '';
        this.topics.ask(`NVIDIA B300: ${request} — ${configuration} — ${rate} — ${gst}`);
        this.overlay.open('callback');
      } else if (href.startsWith('#')) {
        const target = document.getElementById(href.slice(1));
        if (!target) return;
        event.preventDefault();
        const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top;
        window.scrollTo({ top: top - 100, behavior: 'smooth' });
      } else if (href.startsWith('/')) {
        event.preventDefault();
        void this.router.navigateByUrl(href);
      }
    };
    document.addEventListener('click', this.clickListener);
  }

  private cleanup(): void {
    this.observer?.disconnect();
    if (this.frameDocument && this.clickListener) this.frameDocument.removeEventListener('click', this.clickListener);
    this.frameDocument = undefined;
    this.clickListener = undefined;
  }

  ngOnDestroy(): void { this.cleanup(); }
}
