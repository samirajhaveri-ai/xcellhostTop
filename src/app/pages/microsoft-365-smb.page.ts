import { InsightsSectionComponent } from '../sections/insights-section.component';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { DocRequestService } from '../core/doc-request.service';
import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

type BusinessPlan = 'basic' | 'standard' | 'premium';
type BillingTerm = 'upfront' | 'annual-monthly' | 'monthly';

@Component({
  selector: 'xh-microsoft-365-smb-page',
  standalone: true,
  imports: [InsightsSectionComponent, DecimalPipe],
  templateUrl: './microsoft-365-smb.page.html',
  styleUrl: './microsoft-365-smb.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Microsoft365SmbPage {
  private readonly docs = inject(DocRequestService);
  private readonly overlay = inject(OverlayService);
  private readonly seo = inject(SeoService);
  private readonly topics = inject(CallbackTopicService);

  readonly openFaq = signal<number | null>(0);
  readonly includesTeams = signal(true);
  readonly billingOptions: { id: BillingTerm; label: string; note: string }[] = [
    { id: 'upfront', label: 'Annual · paid upfront', note: '1-year commitment · one annual payment' },
    { id: 'annual-monthly', label: 'Annual · billed monthly', note: '1-year commitment · monthly payments' },
    { id: 'monthly', label: 'Monthly · no commitment', note: 'Month-to-month · cancel anytime' },
  ];
  readonly billingTerms = signal<Record<BusinessPlan, BillingTerm>>({ basic: 'upfront', standard: 'upfront', premium: 'upfront' });
  // Keep the configured annual checkout prices. Monthly figures come from the
  // supplied reference; unconfigured terms are handled through a quote request.
  private readonly annualRates = { basic: [1260, 1740], standard: [6840, 9240], premium: [18780, 21960] };
  private readonly annualMonthlyTotals = { basic: 1795, standard: 9082, premium: 19325 };
  private readonly monthlyRates = { basic: 200, standard: 1011, premium: 2152 };
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

  monthlyRate(plan: BusinessPlan, term: BillingTerm): number | null {
    if (term === 'upfront') return this.annualRates[plan][this.includesTeams() ? 1 : 0] / 12;
    if (!this.includesTeams()) return null;
    return term === 'annual-monthly' ? this.annualMonthlyTotals[plan] / 12 : this.monthlyRates[plan];
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
    this.docs.ask('presentation', 'Microsoft 365');
  }

  openCallback(event: Event): void {
    event.preventDefault();
    this.topics.ask('Microsoft 365');
    this.overlay.open('callback');
  }

}
