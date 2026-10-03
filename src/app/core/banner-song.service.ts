import { DOCUMENT } from '@angular/common';
import { afterNextRender, DestroyRef, inject, Injectable, NgZone } from '@angular/core';

const SONG_STYLES = `
.xh-banner-song{display:flex!important;flex-wrap:wrap;align-items:center;gap:14px;margin-top:18px;max-width:100%;position:relative;z-index:1;text-align:left}
.xh-banner-song-label{display:flex;align-items:center;gap:8px;font:700 17px/1.4 var(--pop,Arial,sans-serif);color:inherit}
.xh-banner-song-bars{display:inline-flex;align-items:flex-end;gap:2px;height:16px;flex-shrink:0}
.xh-banner-song-bars i{display:block;width:3px;background:#ff8c1a;border-radius:2px;height:5px}
.xh-banner-song-bars i:nth-child(2){height:11px}.xh-banner-song-bars i:nth-child(3){height:16px}
.xh-banner-song audio{display:block;width:300px;max-width:100%;height:44px;border-radius:999px;flex-shrink:1}
@media(max-width:480px){.xh-banner-song{gap:10px}.xh-banner-song-label{font-size:15px}}
`;

/** Shared enhancement for Angular banners and same-origin imported HTML banners. */
@Injectable({ providedIn: 'root' })
export class BannerSongService {
  private readonly doc = inject(DOCUMENT);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);
  private readonly observers = new Map<Document, MutationObserver>();
  private readonly frames = new Map<HTMLIFrameElement, () => void>();
  private pending = false;

  constructor() {
    afterNextRender(() => this.zone.runOutsideAngular(() => this.watch(this.doc)));
    this.destroyRef.onDestroy(() => {
      this.observers.forEach(observer => observer.disconnect());
      this.frames.forEach((listener, frame) => frame.removeEventListener('load', listener));
    });
  }

  private watch(doc: Document): void {
    if (!doc.body || this.observers.has(doc)) return;
    const observer = new MutationObserver(() => this.schedule());
    observer.observe(doc.body, { childList: true, subtree: true });
    this.observers.set(doc, observer);
    this.enhance(doc);
  }

  private schedule(): void {
    if (this.pending) return;
    this.pending = true;
    queueMicrotask(() => {
      this.pending = false;
      this.observers.forEach((observer, doc) => {
        if (doc !== this.doc && !doc.defaultView?.frameElement?.isConnected) {
          observer.disconnect();
          this.observers.delete(doc);
        } else this.enhance(doc);
      });
      this.frames.forEach((listener, frame) => {
        if (!frame.isConnected) {
          frame.removeEventListener('load', listener);
          this.frames.delete(frame);
        }
      });
    });
  }

  private enhance(doc: Document): void {
    // Login and application screens do not have marketing banners.
    if (/\/(?:signup|(?:customer|partner|vendor|employee|cloud)-login)(?:[/?#]|$)/.test(this.doc.location.pathname)) return;
    doc.querySelectorAll<HTMLIFrameElement>('iframe').forEach(frame => {
      const connect = () => {
        try { if (frame.contentDocument) this.watch(frame.contentDocument); } catch { /* Cross-origin media. */ }
      };
      if (!this.frames.has(frame)) {
        this.frames.set(frame, connect);
        frame.addEventListener('load', connect);
      }
      connect();
    });
    doc.querySelectorAll<HTMLElement>('h1').forEach(heading => {
      const isStandaloneHero = doc.location.pathname.startsWith('/assets/heroes/');
      const hero = heading.closest<HTMLElement>('[class*="hero"], [class*="banner"]')
        || (isStandaloneHero ? heading.closest<HTMLElement>('section, main, header') : null);
      if (!hero || heading.closest('[aria-hidden="true"]:not(.home-hero-slide)')) return;
      const copy = heading.closest<HTMLElement>('.home-hero-copy, .pp-hero-l, .hero-copy, .hero-content') || heading.parentElement;
      if (!copy) return;
      // Replace legacy product-specific players with the single shared Tally design.
      hero.querySelectorAll<HTMLAudioElement>('audio').forEach(audio => {
        if (audio.closest('.xh-banner-song')) return;
        audio.pause();
        const oldRow = audio.closest<HTMLElement>('[class*="song"], [id="xtSongRow"]');
        if (oldRow && oldRow !== hero && !oldRow.contains(heading)) oldRow.remove();
        else audio.remove();
      });
      if (hero.querySelector('.xh-banner-song')) return;
      if (!doc.getElementById('xh-banner-song-styles')) {
        const style = doc.createElement('style');
        style.id = 'xh-banner-song-styles';
        style.textContent = SONG_STYLES;
        doc.head.append(style);
      }
      const row = doc.createElement('div');
      row.className = 'xh-banner-song';
      const label = doc.createElement('span');
      label.className = 'xh-banner-song-label';
      const bars = doc.createElement('span');
      bars.className = 'xh-banner-song-bars';
      bars.setAttribute('aria-hidden', 'true');
      for (let i = 0; i < 3; i++) bars.append(doc.createElement('i'));
      label.append(bars, doc.createTextNode('Listen to our Tally on Cloud Song'));
      const audio = doc.createElement('audio');
      audio.controls = true;
      audio.preload = 'none';
      audio.setAttribute('aria-label', 'Listen to our Tally on Cloud Song');
      // No invented MP3 URL: connect the approved recording when supplied.
      row.append(label, audio);
      copy.append(row);
    });
  }
}
