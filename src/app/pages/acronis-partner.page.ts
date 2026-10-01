import { InsightsSectionComponent } from '../sections/insights-section.component';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, ViewChild, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-acronis-partner-page',
  standalone: true,
  imports: [InsightsSectionComponent],
  templateUrl: './acronis-partner.page.html',
  styles: [`
    :host { display: block; width: 100%; overflow: hidden; }
    .partner-content-frame { display: block; width: 100%; min-height: 720px; border: 0; }
    
.faqs{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start}
.faqs details{border:1px solid var(--line);border-radius:12px;background:var(--card);transition:.15s}
.faqs details[open]{border-color:var(--blue);box-shadow:0 6px 18px rgba(21,101,216,.08)}
.faqs summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:16px 18px;font:600 14.5px var(--pop);color:var(--h2)}
.faqs summary::-webkit-details-marker{display:none}
.faqs summary:after{content:"+";flex:none;width:22px;height:22px;border-radius:50%;background:var(--blue-soft);color:var(--blue);display:grid;place-items:center;font-size:15px;transition:.2s}
.faqs details[open] summary:after{content:"×";background:var(--blue);color:#fff}
.faqs .ans{padding:0 18px 16px;font-size:14px;color:var(--slate);line-height:1.65}
.rel{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:22px;font-size:13px}
.rel span{font-weight:600;color:var(--slate)}
.rel a{border:1px solid var(--line);border-radius:99px;padding:5px 12px;color:var(--blue);background:var(--card)}
.rel a:hover{border-color:var(--blue)}


    .partner-faq{padding-top:24px;padding-bottom:56px}.partner-faq h2{margin:0 0 24px;text-align:left;color:#1565D8;font:700 14px/1.5 var(--mono);letter-spacing:.18em;text-transform:uppercase}.partner-faq summary{text-transform:capitalize}@media(max-width:700px){.faqs{grid-template-columns:1fr}}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcronisPartnerPage implements OnDestroy {
  @ViewChild('frame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly router = inject(Router);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly seo = inject(SeoService);
  private observer?: ResizeObserver;
  private frameDocument?: Document;
  private clickListener?: (event: MouseEvent) => void;

  constructor() {
    this.seo.set(
      'Acronis Cyber Protect Cloud | XcellHost',
      'Explore Acronis backup, disaster recovery, endpoint security and cloud protection services from XcellHost.',
      '/vendor-partners/acronis',
    );
  }

  onLoad(): void {
    const frame = this.frame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    const resize = (): void => {
      frame.style.height = `${Math.ceil(document.querySelector('main')?.getBoundingClientRect().height ?? document.body.scrollHeight)}px`;
    };
    resize();
    this.observer?.disconnect();
    if (typeof ResizeObserver !== 'undefined') {
      this.observer = new ResizeObserver(resize);
      this.observer.observe(document.querySelector('main') ?? document.documentElement);
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
      if (href === '#lead') {
        event.preventDefault();
        this.topics.ask('Acronis Cyber Protect Cloud');
        this.overlay.open('callback');
        return;
      }
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
