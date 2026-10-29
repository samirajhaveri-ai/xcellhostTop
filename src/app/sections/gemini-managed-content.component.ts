import { Component, ElementRef, Input, OnDestroy, ViewChild, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CartService } from '../core/cart.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-gemini-managed-content',
  standalone: true,
  template: `<iframe #frame [src]="url" [title]="hero ? 'Google Gemini managed services animated demo' : 'Managed Gemini services, plans and tools'" scrolling="no" (load)="loaded()"></iframe>`,
  styles: [':host{display:block;width:100%}iframe{display:block;width:100%;border:0;min-height:480px}'],
})
export class GeminiManagedContentComponent implements OnDestroy {
  @Input() hero = false;
  @ViewChild('frame') frame?: ElementRef<HTMLIFrameElement>;
  private readonly sanitizer = inject(DomSanitizer);
  private readonly cart = inject(CartService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private cleanup: (() => void)[] = [];
  private readonly contentUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-gemini-content.html');
  private readonly heroUrl = this.sanitizer.bypassSecurityTrustResourceUrl('/imported-gemini-hero.html');
  get url() { return this.hero ? this.heroUrl : this.contentUrl; }

  loaded(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    const main = doc?.querySelector('main');
    if (!frame || !doc || !main) return;
    const resize = () => frame.style.height = `${Math.ceil(main.getBoundingClientRect().height) + 4}px`;
    const observer = new ResizeObserver(resize);
    observer.observe(main);
    const theme = () => doc.documentElement.setAttribute('data-theme', document.documentElement.classList.contains('dark-mode') ? 'dark' : document.documentElement.getAttribute('data-theme') || 'light');
    const themes = new MutationObserver(theme);
    themes.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
    theme(); resize();
    void doc.fonts.ready.then(resize);
    const scroll = (event: Event) => {
      const target = doc.getElementById((event as CustomEvent<string>).detail);
      if (target) window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 148, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    };
    const callback = (event: Event) => {
      this.topics.ask((event as CustomEvent<string>).detail || 'Managed Gemini Services');
      this.overlay.open('callback');
    };
    const add = (event: Event) => {
      const item = (event as CustomEvent<{name: string; sub: string; price: number; qty: number}>).detail;
      if (!item || !Number.isFinite(item.price) || item.price < 0 || !Number.isInteger(item.qty) || item.qty < 1) return;
      this.cart.add(`${item.name} — ${item.sub}`, `₹${item.price.toLocaleString('en-IN')} · excl. GST`, item.qty, { unitAmount: item.price, currency: 'INR', locale: 'en-IN', suffix: ' · excl. GST' });
      this.cart.open();
    };
    doc.addEventListener('gemini-scroll', scroll);
    doc.addEventListener('import-callback', callback);
    doc.addEventListener('import-add', add);
    this.cleanup.push(() => observer.disconnect(), () => themes.disconnect(), () => doc.removeEventListener('gemini-scroll', scroll), () => doc.removeEventListener('import-callback', callback), () => doc.removeEventListener('import-add', add));
  }

  ngOnDestroy(): void { this.cleanup.splice(0).forEach(fn => fn()); }
}
