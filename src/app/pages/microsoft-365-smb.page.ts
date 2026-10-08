import { QuantityInputDirective } from '../core/quantity-input.directive';
import { DomSanitizer } from '@angular/platform-browser';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

import { DocRequestService } from '../core/doc-request.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { SmbSectionNavComponent } from '../sections/smb-section-nav.component';

type BusinessPlan = 'basic' | 'standard' | 'premium';
type BillingTerm = 'upfront' | 'monthly';

@Component({
  selector: 'xh-microsoft-365-smb-page',
  standalone: true,
  imports: [QuantityInputDirective, InsightsSectionComponent, DecimalPipe, SmbSectionNavComponent, RouterLink],
  templateUrl: './microsoft-365-smb.page.html',
  styleUrl: './microsoft-365-smb.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Microsoft365SmbPage {
  private readonly docs = inject(DocRequestService);
  private readonly overlay = inject(OverlayService);
  private readonly seo = inject(SeoService);
  private readonly topics = inject(CallbackTopicService);

  private readonly sanitizer = inject(DomSanitizer);
  readonly insightVideos = ['Product Intro', 'Use Cases'].map(title => ({
    title,
    src: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/OMJo7BpTzmM'),
  }));

  readonly openFaq = signal<number | null>(0);
  readonly sectionNavLinks = [
    { label: 'Overview', target: 'm365Overview' },
    { label: 'Pricing', target: 'pricing' },
    { label: 'Security', target: 'm365Security' },
    { label: 'Why to Choose', target: 'm365WhyChoose' },
    { label: 'Features', target: 'm365Features' },
    { label: 'Customer Testimonials', target: 'm365Testimonials' },
    { label: 'FAQs', target: 'm365Faq' },
    { label: 'Insights', target: 'm365Insights' },
  ] as const;
  readonly includesTeams = signal(true);
  readonly includesGst = signal<Record<BusinessPlan, boolean>>({ basic: false, standard: false, premium: false });
  readonly billingOptions: { id: BillingTerm; label: string; note: string }[] = [
    { id: 'upfront', label: 'Annual · paid upfront', note: '1-year commitment · one annual payment' },
    { id: 'monthly', label: 'Monthly · no commitment', note: 'Month-to-month · cancel anytime' },
  ];
  readonly billingTerms = signal<Record<BusinessPlan, BillingTerm>>({ basic: 'upfront', standard: 'upfront', premium: 'upfront' });
  readonly basicTeamsListMonthly = 170;
  readonly basicTeamsUpfrontDiscount = 15;
  readonly standardTeamsListMonthly = 860;
  readonly standardTeamsUpfrontDiscount = 15;
  readonly premiumTeamsListMonthly = 1830;
  readonly premiumTeamsUpfrontDiscount = 15;
  // Calculate the annual amount before rounding the displayed monthly equivalent.
  // Business Basic with Teams: 170 × 12 × 85% = 1,734, or 144.50/month.
  private readonly annualRates = {
    basic: [1260, Math.round(this.basicTeamsListMonthly * 12 * (1 - this.basicTeamsUpfrontDiscount / 100))],
    standard: [6840, Math.round(this.standardTeamsListMonthly * 12 * (1 - this.standardTeamsUpfrontDiscount / 100))],
    premium: [18780, Math.round(this.premiumTeamsListMonthly * 12 * (1 - this.premiumTeamsUpfrontDiscount / 100))],
  };
  private readonly monthlyRates = { basic: 200, standard: 1011, premium: 2152 };
  private readonly noTeamsMonthlyRates = { basic: 153, standard: 782, premium: 1840 };
  readonly quoteQuantities = signal<Record<string, number>>({
    basic: 1,
    standard: 1,
    premium: 1,
  });
  readonly basicTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BB-WT-A';
  readonly standardTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BS-WT-A';
  readonly premiumTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BP-WT-A';
  readonly basicNoTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BB-NT-A';
  readonly standardNoTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BS-NT-A';
  readonly premiumNoTeamsCheckoutUrl =
    'https://billing.zohosecure.in/subscribe/a5af34fbd3854095ef10068ebf1be54fa93d93bb4f5a3d3ddbde1ccf1c7a189d/XLCS-M365-BP-NT-A';

  constructor() {
    this.seo.set(
      'Microsoft 365 India — Authorised Microsoft Partner | XcellHost',
      'Buy Microsoft 365 in India from XcellHost. Outlook, Teams, Word, Excel, OneDrive, SharePoint and Copilot AI, with migration and 24×7 support.',
      '/microsoft-365-smb/',
    );
  }

  toggleFaq(index: number): void {
    this.openFaq.update((current) => (current === index ? null : index));
  }

  setTeamsOption(includesTeams: boolean): void {
    this.includesTeams.set(includesTeams);
  }

  adjustQuantity(plan: BusinessPlan, change: number): void {
    this.quoteQuantities.update((quantities) => ({
      ...quantities,
      [plan]: Math.min(300, Math.max(1, (quantities[plan] ?? 1) + change)),
    }));
  }

  setBillingTerm(plan: BusinessPlan, term: BillingTerm): void {
    this.billingTerms.update(terms => ({ ...terms, [plan]: term }));
  }

  setGstOption(plan: BusinessPlan, included: boolean): void {
    this.includesGst.update(options => ({ ...options, [plan]: included }));
  }

  displayPrice(plan: BusinessPlan, amount: number | null): number | null {
    return amount === null ? null : amount * (this.includesGst()[plan] ? 1.18 : 1);
  }

  monthlyRate(plan: BusinessPlan, term: BillingTerm): number | null {
    if (term === 'upfront') return this.annualRates[plan][this.includesTeams() ? 1 : 0] / 12;
    return this.includesTeams() ? this.monthlyRates[plan] : this.noTeamsMonthlyRates[plan];
  }

  annualRate(plan: BusinessPlan, term: BillingTerm): number | null {
    const rate = this.monthlyRate(plan, term);
    return rate === null ? null : Math.round(rate * 12);
  }

  billingTotal(plan: BusinessPlan, term: BillingTerm, yearly = false): number | null {
    const rate = yearly ? this.annualRate(plan, term) : this.monthlyRate(plan, term);
    return rate === null ? null : Math.round(rate * this.quoteQuantities()[plan] * 100) / 100;
  }

  planTotal(plan: BusinessPlan): number | null {
    const term = this.billingTerms()[plan];
    const rate = term === 'upfront' ? this.annualRate(plan, term) : this.monthlyRate(plan, term);
    return rate === null ? null : Math.round(rate * this.quoteQuantities()[plan] * 100) / 100;
  }

  checkoutUrl(plan: BusinessPlan): string {
    const links = {
      basic: this.includesTeams() ? this.basicTeamsCheckoutUrl : this.basicNoTeamsCheckoutUrl,
      standard: this.includesTeams() ? this.standardTeamsCheckoutUrl : this.standardNoTeamsCheckoutUrl,
      premium: this.includesTeams() ? this.premiumTeamsCheckoutUrl : this.premiumNoTeamsCheckoutUrl,
    };
    return links[plan];
  }

  requestPlanQuote(plan: BusinessPlan): void {
    const title = { basic: 'Business Basic', standard: 'Business Standard', premium: 'Business Premium' }[plan];
    const term = this.billingOptions.find(option => option.id === this.billingTerms()[plan])!;
    const total = this.planTotal(plan);
    const amount = total === null ? 'Pricing on request' : `INR ${total.toLocaleString('en-IN')} / ${term.id === 'upfront' ? 'year' : 'month'} + GST`;
    this.topics.ask(`Microsoft 365 ${title} · ${this.includesTeams() ? 'With Teams' : 'Without Teams'} · ${term.label} · ${this.quoteQuantities()[plan]} users · ${amount}`);
    this.overlay.open('callback');
  }

  requestPresentation(event: Event): void {
    event.preventDefault();
    this.docs.ask('presentation', 'Microsoft 365 SMB');
    this.overlay.open('doc');
  }

  openCallback(event: Event): void {
    event.preventDefault();
    this.topics.ask('Microsoft 365');
    this.overlay.open('callback');
  }

}
