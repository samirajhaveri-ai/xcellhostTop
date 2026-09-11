import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

interface ProviderQuote {
  id: number;
  name: string;
  values: Record<string, string>;
}

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
  private nextId = 4;
  readonly providers = signal<readonly ProviderQuote[]>([
    { id: 1, name: 'XcellHost', values: {} },
    { id: 2, name: 'Provider 2', values: {} },
    { id: 3, name: 'Provider 3', values: {} },
  ]);
  readonly differencesOnly = signal(false);
  readonly criteria = [
    { key: 'plan', label: 'Plan / service', hint: 'Exact plan name and workload' },
    { key: 'price', label: 'Recurring price', hint: 'Amount, currency and billing period' },
    { key: 'setup', label: 'Setup & migration', hint: 'Included services and one-time fees' },
    { key: 'resources', label: 'Resources & capacity', hint: 'CPU, RAM, storage or licensed users' },
    { key: 'location', label: 'Data location', hint: 'Hosting region and residency options' },
    { key: 'backup', label: 'Backup & recovery', hint: 'Frequency, retention and restore charges' },
    { key: 'security', label: 'Security controls', hint: 'Controls included in this quote' },
    { key: 'support', label: 'Support coverage', hint: 'Hours, channels and response targets' },
    { key: 'sla', label: 'Availability SLA', hint: 'Contractual target and service credits' },
    { key: 'compliance', label: 'Compliance evidence', hint: 'Certifications and applicable scope' },
    { key: 'extras', label: 'Additional charges', hint: 'Traffic, overages, taxes and add-ons' },
    { key: 'contract', label: 'Contract & renewal', hint: 'Term, renewal rate and cancellation' },
    { key: 'source', label: 'Quote / source', hint: 'Quote reference, URL and date' },
  ] as const;
  readonly visibleCriteria = computed(() => this.criteria.filter(row => !this.differencesOnly() || this.isDifferent(row.key)));
  readonly hasValues = computed(() => this.providers().some(provider => Object.values(provider.values).some(value => value.trim())));

  constructor() {
    inject(SeoService).set('Compare Providers | XcellHost', 'Compare provider quotes side by side across pricing, resources, support, security and contract terms.', '/compare-providers/');
  }

  updateName(id: number, name: string): void {
    this.providers.update(providers => providers.map(provider => provider.id === id ? { ...provider, name } : provider));
  }

  updateValue(id: number, key: string, value: string): void {
    this.providers.update(providers => providers.map(provider => provider.id === id ? { ...provider, values: { ...provider.values, [key]: value } } : provider));
  }

  addProvider(): void {
    if (this.providers().length >= 4) return;
    const id = this.nextId++;
    this.providers.update(providers => [...providers, { id, name: `Provider ${id}`, values: {} }]);
  }

  removeProvider(id: number): void {
    if (this.providers().length <= 2) return;
    this.providers.update(providers => providers.filter(provider => provider.id !== id));
  }

  isDifferent(key: string): boolean {
    const values = this.providers().map(provider => (provider.values[key] ?? '').trim().toLowerCase());
    return values.every(Boolean) && new Set(values).size > 1;
  }

  requestHelp(): void {
    this.topics.ask(`Compare providers: ${this.providers().map(provider => provider.name.trim() || 'Unnamed provider').join(', ')}`);
    this.overlay.open('callback');
  }

  download(): void {
    const escape = (value: string) => `"${(/^[\s]*[=+@-]/.test(value) ? "'" + value : value).replace(/"/g, '""')}"`;
    const rows = [
      ['Criteria', ...this.providers().map(provider => provider.name)],
      ...this.criteria.map(row => [row.label, ...this.providers().map(provider => provider.values[row.key] ?? '')]),
    ];
    const url = URL.createObjectURL(new Blob(['\uFEFF' + rows.map(row => row.map(escape).join(',')).join('\r\n')], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = 'provider-comparison.csv';
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}
