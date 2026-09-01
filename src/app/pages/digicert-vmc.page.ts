import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { ProductPage } from './product.page';

@Component({
  selector: 'xh-digicert-vmc-page',
  standalone: true,
  imports: [ProductPage],
  templateUrl: './digicert-vmc.page.html',
  styleUrl: './digicert-vmc.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertVmcPage {
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
      question: 'What is a DigiCert Verified Mark Certificate?',
      answer: 'A VMC is a digital certificate used with BIMI to verify your organization and registered logo. Supported inboxes can then display that logo beside authenticated email, with certain providers also showing a verification indicator.',
    },
    {
      question: 'Does my logo need to be trademarked?',
      answer: 'For a DigiCert VMC, the logo generally needs to be registered with an accepted intellectual-property office. Government bodies can use qualifying official marks backed by the appropriate records.',
    },
    {
      question: 'What DMARC policy is required?',
      answer: 'Your sending domain must have DMARC enforcement enabled, normally with p=quarantine or p=reject. We can review SPF, DKIM and DMARC alignment before the VMC order begins.',
    },
    {
      question: 'How long does validation take?',
      answer: 'Plan for roughly 3–7 business days once the organization, identity, trademark and domain evidence is ready. Missing or inconsistent records can extend the timeline.',
    },
    {
      question: 'Can one VMC cover multiple sending domains?',
      answer: 'Yes, when the same verified logo is used. Additional domains can be added as SANs, subject to DigiCert validation and product limits. Different logos normally require separate mark certificates.',
    },
    {
      question: 'Will the logo appear in every inbox?',
      answer: 'No. Display depends on the receiving provider supporting BIMI and on your authentication and reputation signals. Gmail, Yahoo and other participating providers support BIMI experiences, but presentation can vary.',
    },
  ];

  constructor() {
    this.seo.set(
      'DigiCert Verified Mark Certificate (VMC) for BIMI | XcellHost',
      'Display your verified brand logo in BIMI-supported inboxes with a DigiCert VMC. XcellHost helps with DMARC readiness, validation, SVG preparation and deployment.',
      '/digicert-vmc/',
    );
  }

  changeQuantity(change: number): void {
    this.quantity.update((value) => Math.min(250, Math.max(1, value + change)));
  }

  requestQuote(topic = 'DigiCert Verified Mark Certificate'): void {
    this.topics.ask(topic);
    this.overlay.open('callback');
  }
}
