import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ProductPage } from './product.page';

@Component({
  selector: 'xh-digicert-cmc-page',
  standalone: true,
  imports: [ProductPage],
  templateUrl: './digicert-cmc.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertCmcPage {
  private readonly seo = inject(SeoService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  readonly selectedTerm = signal(1);
  readonly quantity = signal(1);
  readonly openFaq = signal(0);

  readonly terms = [
    { years: 1, label: '1 Year', note: 'Fastest way to get started' },
    { years: 2, label: '2 Years', note: 'Simpler renewal planning' },
    { years: 3, label: '3 Years', note: 'Best for long-term programmes' },
  ];

  readonly faqs = [
    {
      question: 'What is a DigiCert Common Mark Certificate?',
      answer: 'A CMC validates your organization, sending domain and logo for BIMI even when the logo is not a registered trademark. Supported inboxes can display the certified mark beside authenticated email.',
    },
    {
      question: 'Do I need a registered trademark?',
      answer: 'No. A CMC can use an unregistered logo when you can prove at least 12 months of prior public use. Eligible modified versions of registered marks can also qualify.',
    },
    {
      question: 'Does a CMC provide Gmail’s blue checkmark?',
      answer: 'No. A CMC enables BIMI logo display in supported inboxes, but the Gmail blue authenticated checkmark is associated with a VMC and its registered-trademark validation.',
    },
    {
      question: 'What DMARC policy is required?',
      answer: 'Your domain needs DMARC enforcement, normally p=quarantine or p=reject, with SPF and DKIM aligned for every approved sending service.',
    },
    {
      question: 'How long does CMC validation take?',
      answer: 'Allow roughly 3–7 business days when the organization, domain, logo history and email-authentication evidence are ready. DigiCert timing depends on successful validation.',
    },
    {
      question: 'Can one CMC be used for different logos?',
      answer: 'No. Each unique logo needs its own mark certificate. If the same logo is used across more than one domain, we will confirm the correct domain or SAN configuration during readiness review.',
    },
  ];

  constructor() {
    this.seo.set(
      'DigiCert Common Mark Certificate (CMC) for BIMI | XcellHost',
      'Display a proven brand logo in BIMI-supported inboxes without a registered trademark. XcellHost helps with prior-use evidence, DMARC readiness and DigiCert CMC deployment.',
      '/digicert-cmc/',
    );
  }

  changeQuantity(change: number): void {
    this.quantity.update((value) => Math.min(250, Math.max(1, value + change)));
  }

  requestQuote(topic = 'DigiCert Common Mark Certificate'): void {
    this.topics.ask(topic);
    this.overlay.open('callback');
  }
}
