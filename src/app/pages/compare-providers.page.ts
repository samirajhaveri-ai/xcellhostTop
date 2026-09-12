import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

type Status = 'good' | 'warning' | 'poor' | 'neutral';
interface ComparisonCell { text: string; status: Status; }
const cell = (text: string, status: Status = 'good'): ComparisonCell => ({ text, status });

@Component({
  selector: 'xh-compare-providers-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './compare-providers.page.html',
  styleUrl: './compare-providers.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareProvidersPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  readonly providers = ['XcellHost', 'AWS', 'Azure', 'GCP', 'DigitalOcean', 'E2E Networks', 'Yotta'];
  readonly comparison = [
    { feature: 'Cost Vs Hyperscalers', cells: [cell('~60% lower'), cell('Baseline', 'warning'), cell('Baseline', 'warning'), cell('Baseline', 'warning'), cell('~30–75% lower'), cell('~50% lower'), cell('~30% lower')] },
    { feature: 'Egress Charges', cells: [cell('Zero'), cell('High', 'poor'), cell('High', 'poor'), cell('High (except BQ)', 'poor'), cell('Included bandwidth'), cell('Low'), cell('Low')] },
    { feature: 'GPU Provisioning Speed', cells: [cell('Same-day'), cell('Quota approval', 'poor'), cell('Quota approval', 'poor'), cell('Quota approval', 'poor'), cell('Limited stock', 'poor'), cell('Same-day'), cell('Contract; days-weeks', 'warning')] },
    { feature: 'Support Model', cells: [cell('24/7 human'), cell('Paid tiers', 'warning'), cell('Paid tiers', 'warning'), cell('Paid tiers', 'warning'), cell('Ticket-based', 'warning'), cell('Biz hours+', 'warning'), cell('Enterprise SLA')] },
    { feature: 'Migration Assistance', cells: [cell('Free'), cell('Paid', 'warning'), cell('Paid', 'warning'), cell('Paid', 'warning'), cell('Self-service', 'warning'), cell('Limited', 'poor'), cell('Limited', 'poor')] },
    { feature: 'Data Ownership & Jurisdiction', cells: [cell('India-owned, Indian Law'), cell('US Owned, US Cloud Act', 'poor'), cell('US Owned, US Cloud Act', 'poor'), cell('US Owned, US Cloud Act', 'poor'), cell('US Owned, US Cloud Act', 'poor'), cell('India Owned, Indian Law'), cell('India Owned, Indian Law')] },
    { feature: 'Vendor Lock-in Risk', cells: [cell('Low'), cell('High', 'poor'), cell('High', 'poor'), cell('High', 'poor'), cell('Medium', 'warning'), cell('Low'), cell('Medium', 'warning')] },
    { feature: 'Best For', cells: [cell('India-first AI Workloads, Sovereign Cloud'), cell('Global Scale', 'neutral'), cell('Microsoft ecosystem', 'neutral'), cell('Data and AI Workloads', 'neutral'), cell('Simple Global Cloud', 'neutral'), cell('AI Workloads', 'neutral'), cell('Enterprise Sovereign Cloud', 'neutral')] },
  ];

  constructor() {
    inject(SeoService).set('Compare Providers | XcellHost', 'Compare XcellHost with cloud providers across pricing, support, migration and data ownership.', '/compare-providers/');
  }

  requestHelp(): void {
    this.topics.ask('Compare providers: ' + this.providers.join(', '));
    this.overlay.open('callback');
  }
}
