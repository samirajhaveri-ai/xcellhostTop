import { Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { DocRequestService, DocKind } from '../core/doc-request.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-microsoft-365-business-standard-page',
  standalone: true,
  template: `
    <main aria-label="Microsoft 365 Business Standard with Teams">
      <iframe #frame src="/microsoft-365-business-standard-content.html"
        title="Microsoft 365 Business Standard with Teams details"
        (load)="onLoad()"></iframe>
      <div class="detail-cta-wrap">
        <div class="pp-cta" id="lead">
          <div>
            <h3>Ready to start with Microsoft 365 Business Standard?</h3>
            <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi</p>
          </div>
          <div class="pp-ctabtns">
            <button class="btn btn-primary" type="button" (click)="openCallback()">Request a callback</button>
            <button class="btn btn-ghost" type="button" (click)="showPricing()">&#9889; Buy Now</button>
            <button class="btn btn-ghost" type="button" (click)="requestDoc('infosheet')">&#11015; Infosheet</button>
            <button class="btn btn-ghost" type="button" (click)="requestDoc('presentation')">&#128214; Presentation</button>
            <a class="btn btn-ghost" href="https://wa.me/918657032540" target="_blank" rel="noopener noreferrer">Talk on WhatsApp</a>
            <a class="btn btn-ghost" href="mailto:sales@xcellhost.cloud">Email Us</a>
          </div>
          <a class="pp-cta-buddha-link" href="/company/support-overview" aria-label="Visit XcellHost customer support">
            <img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" />
          </a>
        </div>
      </div>
    </main>
  `,
  styles: [`
    :host, main { display: block; }
    iframe { display: block; width: 100%; height: 1200px; border: 0; }
    .detail-cta-wrap { max-width: 1240px; margin: 0 auto; padding: 0 24px 40px; }
    .pp-cta { display: block; background: linear-gradient(105deg, #1565d8, #0c3e8f); }
    .pp-ctabtns { display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px; }
    .pp-ctabtns .btn { padding: 10px 20px; border-radius: 8px; font: 600 14px/1.6 var(--body); cursor: pointer; }
    .pp-ctabtns .btn-ghost { background: transparent; color: #fff; border-color: rgba(255, 255, 255, .4); }
    .pp-ctabtns .btn-ghost:hover { background: rgba(255, 255, 255, .12); border-color: #fff; color: #fff; }
    @media (max-width: 760px) { .pp-cta { padding: 28px 22px; } .pp-cta-buddha-link { display: block; margin-top: 18px; } }
  `],
})
export class Microsoft365BusinessStandardPage implements OnDestroy {
  private readonly docs = inject(DocRequestService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;
  private observer?: ResizeObserver;
  private cleanup?: () => void;

  constructor() {
    inject(SeoService).set(
      'Microsoft 365 Business Standard with Teams | XcellHost',
      'Microsoft 365 Business Standard with Teams: full Office desktop apps, business email, 1 TB OneDrive and SharePoint. Annual upfront pricing from ₹8,772 per user, excluding GST.',
      '/microsoft-365-business-standard/',
    );
  }

  onLoad(): void {
    this.ngOnDestroy();
    const frame = this.frame?.nativeElement;
    const doc = frame?.contentDocument;
    if (!frame || !doc?.body) return;

    const resize = () => {
      frame.style.height = `${Math.ceil(doc.body.getBoundingClientRect().height)}px`;
    };
    this.observer = new ResizeObserver(resize);
    this.observer.observe(doc.body);
    void doc.fonts.ready.then(resize);
    resize();

    // Scroll the website to in-page sections; open related pages in the website shell.
    const click = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href]');
      if (!link || event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const href = link.getAttribute('href') || '';
      if (href.startsWith('#')) {
        const section = doc.getElementById(href.slice(1));
        if (!section) {
          if (href === '#lead') {
            event.preventDefault();
            document.getElementById('lead')?.scrollIntoView({ behavior: 'smooth' });
          }
          return;
        }
        event.preventDefault();
        window.scrollTo({
          top: window.scrollY + frame.getBoundingClientRect().top + section.getBoundingClientRect().top,
          behavior: 'smooth',
        });
      } else if (href.startsWith('/')) {
        event.preventDefault();
        window.location.assign(href);
      }
    };
    doc.addEventListener('click', click);
    this.cleanup = () => doc.removeEventListener('click', click);
  }

  openCallback(): void {
    this.topics.ask('Microsoft 365 Business Standard with Teams');
    this.overlay.open('callback');
  }

  requestDoc(kind: DocKind): void {
    this.docs.ask(kind, 'Microsoft 365 Business Standard');
    this.overlay.open('doc');
  }

  showPricing(): void {
    const frame = this.frame?.nativeElement;
    const pricing = frame?.contentDocument?.getElementById('bo');
    if (!frame || !pricing) return;
    window.scrollTo({ top: window.scrollY + frame.getBoundingClientRect().top + pricing.getBoundingClientRect().top - 120, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    this.cleanup?.();
  }
}
