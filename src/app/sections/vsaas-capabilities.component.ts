import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { VSAAS_INDUSTRIES } from './vsaas-capabilities.data';

@Component({
  selector: 'xh-vsaas-capabilities',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './vsaas-capabilities.component.html',
  styleUrl: './vsaas-capabilities.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VsaasCapabilitiesComponent {
  readonly quoteRequested = output<{ event: Event; configuration: string }>();
  readonly industryIndex = signal(0);
  readonly industry = computed(() => VSAAS_INDUSTRIES[this.industryIndex()]);
  readonly deployment = signal<'cloud' | 'hybrid'>('cloud');
  readonly cameras = signal(16);
  readonly retention = signal(30);
  readonly selectedAnalytics = signal<string[]>(['People counting', 'Heatmaps']);
  readonly gatewaySummary = computed(() => this.deployment() === 'cloud'
    ? String(Math.ceil(this.cameras() / 8))
    : `${[32, 64, 128, 256].find(tier => tier >= this.cameras()) ?? 256} channels`);
  readonly quoteNote = computed(() => this.deployment() === 'cloud'
    ? `Connect Cloud platform fee + ${this.retention()}-day storage, per channel per month · gateways one-time.`
    : `One-time Stream OS${this.selectedAnalytics().length ? ' + AI Box & AI licences' : ''} · Cyber+ pack yearly.`);

  selectIndustry(index: number): void {
    if (Number.isInteger(index) && index >= 0 && index < VSAAS_INDUSTRIES.length) this.industryIndex.set(index);
  }

  navigateIndustries(event: KeyboardEvent, index: number): void {
    let next: number;
    switch (event.key) {
      case 'ArrowRight': next = (index + 1) % VSAAS_INDUSTRIES.length; break;
      case 'ArrowLeft': next = (index - 1 + VSAAS_INDUSTRIES.length) % VSAAS_INDUSTRIES.length; break;
      case 'Home': next = 0; break;
      case 'End': next = VSAAS_INDUSTRIES.length - 1; break;
      default: return;
    }
    event.preventDefault();
    this.selectIndustry(next);
    const tabs = (event.currentTarget as HTMLElement).parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    tabs?.[next]?.focus();
  }

  setCameras(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    if (Number.isFinite(value)) this.cameras.set(Math.max(1, Math.min(256, Math.round(value))));
  }

  toggleAnalytic(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.selectedAnalytics.update(selected => input.checked
      ? [...selected.filter(value => value !== input.value), input.value]
      : selected.filter(value => value !== input.value));
  }

  requestQuote(event: Event): void {
    const configuration = `${this.deployment() === 'cloud' ? 'Cloud' : 'Hybrid'} — ${this.cameras()} channels — ${this.deployment() === 'cloud' ? `${this.retention()}-day retention` : 'Stream OS'} — AI: ${this.selectedAnalytics().join(', ') || 'none'}`;
    this.quoteRequested.emit({ event, configuration });
  }
}
