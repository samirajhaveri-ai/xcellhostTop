import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

type Status = 'good' | 'warning' | 'poor' | 'neutral';
interface ComparisonCell { text: string; status: Status; }
interface ProviderCard {
  name: string;
  slug: string;
  category: string;
  description: string;
  stat: string;
  statLabel: string;
  accent: string;
  initials: string;
}
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
  readonly providerCards: ProviderCard[] = [
    { name: 'Vultr', slug: 'cloudbaba-vs-vultr', category: 'Developer cloud', description: 'Compare global reach and developer-friendly compute with CloudBaba\'s guided, India-first cloud experience.', stat: '32', statLabel: 'Global locations', accent: '#007bfc', initials: 'V' },
    { name: 'OVHcloud', slug: 'cloudbaba-vs-ovhcloud', category: 'Global cloud', description: 'See how OVHcloud\'s broad infrastructure portfolio compares with CloudBaba pricing, support and migration.', stat: '30+', statLabel: 'Data centres', accent: '#123f6d', initials: 'OVH' },
    { name: 'DigitalOcean', slug: 'cloudbaba-vs-digitalocean', category: 'Developer cloud', description: 'Compare simple cloud compute with a locally supported platform built for Indian production workloads.', stat: '15', statLabel: 'Data centres', accent: '#0080ff', initials: 'DO' },
    { name: 'Amazon Web Services', slug: 'cloudbaba-vs-aws', category: 'Hyperscaler', description: 'Explore the trade-offs between hyperscale breadth and CloudBaba\'s predictable, human-first cloud service.', stat: '30+', statLabel: 'Cloud regions', accent: '#ff9900', initials: 'AWS' },
    { name: 'Google Cloud', slug: 'cloudbaba-vs-gcp', category: 'Hyperscaler', description: 'Compare AI and data capabilities, pricing clarity, support access and India-focused cloud operations.', stat: '35+', statLabel: 'Cloud regions', accent: '#4285f4', initials: 'GCP' },
    { name: 'Microsoft Azure', slug: 'cloudbaba-vs-azure', category: 'Hyperscaler', description: 'See how Azure\'s enterprise ecosystem stacks up against CloudBaba\'s simpler delivery and local expertise.', stat: '60+', statLabel: 'Cloud regions', accent: '#0078d4', initials: 'AZ' },
  ];
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
    inject(SeoService).set('CloudBaba vs Cloud Providers | XcellHost', 'Compare CloudBaba with AWS, Azure, Google Cloud, DigitalOcean, Vultr and OVHcloud across pricing, support and cloud operations.', '/compare-providers/');
  }

  requestHelp(): void {
    this.topics.ask('Compare providers: ' + this.providers.join(', '));
    this.overlay.open('callback');
  }
}
