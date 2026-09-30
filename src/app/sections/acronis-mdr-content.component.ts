import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
@Component({
  selector: 'xh-acronis-mdr-content', standalone: true,
  templateUrl: './acronis-mdr-content.component.html',
  styleUrl: './acronis-mdr-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcronisMdrContentComponent {
  readonly quoteRequested = output<Event>();
  readonly timelinePlaying = signal(true);
  readonly selectedTier = signal<'standard' | 'advanced'>('advanced');
  readonly analysts = signal(5);
  readonly analystCostLakh = signal(12);
  readonly toolsCostLakh = signal(15);
  readonly overheadPercent = signal(20);
  readonly analystSalary = computed(() => this.analysts() * this.analystCostLakh() * 100_000);
  readonly overheadCost = computed(() => this.analystSalary() * this.overheadPercent() / 100);
  readonly toolsCost = computed(() => this.toolsCostLakh() * 100_000);
  readonly annualSocCost = computed(() => this.analystSalary() + this.overheadCost() + this.toolsCost());
  requestQuote(event: Event): void { event.preventDefault(); this.quoteRequested.emit(event); }
  selectTier(tier: 'standard' | 'advanced'): void { this.selectedTier.set(tier); }
  rangeValue(event: Event): number { return Number((event.target as HTMLInputElement).value); }
  inr(value: number): string { return `₹${Math.round(value).toLocaleString('en-IN')}`; }
  replayIncident(): void {
    this.timelinePlaying.set(false);
    requestAnimationFrame(() => this.timelinePlaying.set(true));
  }
}
