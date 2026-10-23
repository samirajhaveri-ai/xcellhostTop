import { DOCUMENT } from '@angular/common';
import { Injectable, inject, signal } from '@angular/core';
import { OverlayService } from './overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { BannerAction } from '../sections/banner-actions';

export interface BannerTourSlide { image: string; title: string; }

@Injectable({providedIn:'root'})
export class BannerActionsService {
  readonly overlay = inject(OverlayService);
  private readonly document = inject(DOCUMENT);
  private readonly topics = inject(CallbackTopicService);
  readonly title = signal('');
  readonly slides = signal<BannerTourSlide[]>([]);
  readonly index = signal(0);
  readonly loading = signal(false);
  private manifest?: Promise<Record<string, BannerTourSlide[]>>;
  private trigger?: HTMLElement;
  private request = 0;

  async act(action: BannerAction, product: string, hero: HTMLElement, trigger: HTMLElement): Promise<void> {
    if (action === 'trial') { this.overlay.open('trial', product); return; }
    if (action === 'callback') { this.topics.ask(product); this.overlay.open('callback'); return; }
    this.trigger = trigger; this.title.set(product); this.index.set(0); this.slides.set([]); this.loading.set(true);
    this.overlay.open('bannerScreenshotTour');
    const request = ++this.request;
    this.manifest ??= fetch('/assets/banner-tours/manifest.json').then(r => r.ok ? r.json() : {}).catch(() => ({}));
    const manifest = await this.manifest;
    if (request !== this.request) return;
    const path = this.document.location.pathname.replace(/\/$/,'') || '/';
    let slides = manifest[path] || [];
    if (!slides.length) {
      // Retain product-owned previews for routes added after the capture manifest.
      slides = Array.from(hero.querySelectorAll<HTMLImageElement>('img')).filter(img =>
        img.naturalWidth >= 250 && img.naturalHeight >= 140 && !/logo|favicon/i.test(img.src + img.alt),
      ).map(img => ({image:img.src,title:img.alt || product + ' overview'})).slice(0,6);
    }
    this.slides.set(slides); this.loading.set(false);
  }

  close(): void { ++this.request; this.overlay.close('bannerScreenshotTour'); this.trigger?.focus(); }
  move(offset: number): void { const n = this.slides().length; if(n) this.index.set((this.index()+offset+n)%n); }
  requestTour(): void { const title=this.title(); this.close(); this.topics.ask(title + ' — Screenshot tour'); this.overlay.open('callback'); }
}
