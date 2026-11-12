import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-anydesk-page',
  standalone: true,
  imports: [RouterLink, ImportedInteractiveContentComponent, InsightsSectionComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <xh-imported-interactive-content source="anydesk" />
    <xh-insights-section pageSlug="anydesk" />
    <div class="ppage as-page anydesk-closing"><div class="wrap">
      <section class="pp-cta" id="contact" aria-labelledby="anydeskContactTitle">
        <div><h3 id="anydeskContactTitle">Get AnyDesk For Your Team — With An INR Quote Today.</h3>
          <p>Tell us how many technicians, sessions and devices you have. We'll recommend an edition and send a GST-ready proposal within one business day.</p></div>
        <div class="anydesk-actions">
          <button class="btn btn-primary" type="button" (click)="showPricing()">See Editions →</button>
          <button class="btn btn-ghost" type="button" (click)="request()">Talk To An Expert</button>
          <a class="btn btn-ghost" href="https://wa.me/918657032540" target="_blank" rel="noopener">WhatsApp</a>
          <a class="btn btn-ghost" href="tel:+912267111555">+91 22 6711 1555</a>
          <a class="btn btn-ghost" href="mailto:sales@xcellhost.cloud">sales&#64;xcellhost.cloud</a>
        </div>
        <a class="pp-cta-buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support"><img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost customer support" /></a>
      </section>
      <div class="pp-proof"><span>ISO 27001 · ISO 20000-1</span><span>Microsoft Gold Partner</span><span>24×7 NOC &amp; SOC</span><span>Mumbai, India</span><span>Since 1999</span></div>
    </div></div>
  `,
  styles: [':host{display:block}.anydesk-closing{padding:24px 0 48px}.anydesk-actions{display:flex;gap:12px;flex-wrap:wrap}.anydesk-actions .btn-ghost{background:transparent;border-color:#ffffff66;color:white}'],
})
export class AnydeskPage {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  showPricing(): void {
    this.host.nativeElement.querySelector('iframe')?.contentDocument?.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  request(): void {
    this.topics.ask('AnyDesk', { firstName: '', lastName: '', company: '', email: '', help: 'Request a CallBack', details: 'AnyDesk licences — talk to an expert about technicians, sessions and devices.' });
    this.overlay.open('callback');
  }
  constructor() {
    inject(SeoService).set(
      'AnyDesk India | Remote Access Licences & Support — XcellHost',
      'Explore AnyDesk Solo, Standard, Advanced and Ultimate with INR billing, GST invoices, edition selection tools and setup and support from Mumbai.',
      '/anydesk',
    );
  }
}
