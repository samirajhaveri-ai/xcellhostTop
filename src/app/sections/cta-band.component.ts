import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { LeadService } from '../core/lead.service';
import { OverlayService } from '../core/overlay.service';
import { SITE } from '../data/site.data';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { RevealDirective } from '../shared/reveal.directive';

/** The general-enquiry text the original `waFor()` used outside a product page. */
const WA_MESSAGE = 'Hello XcellHost, I would like to speak to someone about your services.';

/**
 * The closing call-to-action band. The primary button opens the callback modal
 * (the original `#dpCtaCall` handler did the same via `window.__openCallback`),
 * the ghost button hands off to WhatsApp with the general-enquiry message.
 */
@Component({
  selector: 'xh-cta-band',
  imports: [RevealDirective],
  standalone: true,
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section>
      <div class="wrap">
        <div class="cta-band" xhReveal>
          <div>
            <h2>Build what’s next, with us</h2>
            <p>Free consultation · free migration · WhatsApp {{ phone }}</p>
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <a class="btn btn-primary" href="#" id="dpCtaCall" (click)="requestCallback($event)"
              >Request a callback</a
            >
            <a
              class="btn btn-ghost"
              style="border-color:rgba(255,255,255,.4);color:#fff"
              [href]="whatsapp"
              target="_blank"
              rel="noopener"
              >WhatsApp us</a
            >
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CtaBandComponent {
  private readonly topics = inject(CallbackTopicService);
  private readonly overlay = inject(OverlayService);
  private readonly lead = inject(LeadService);

  readonly phone = SITE.whatsappLabel;
  readonly whatsapp = this.lead.whatsappLink(WA_MESSAGE);

  requestCallback(e: Event): void {
    e.preventDefault();
    this.topics.ask('General enquiry');
    this.overlay.open('callback');
  }
}
