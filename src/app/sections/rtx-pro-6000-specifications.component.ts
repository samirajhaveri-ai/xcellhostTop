import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type Metric = 'Memory (GB)' | 'Bandwidth (GB/s)' | 'FP32 (TFLOPS)';

interface ComparisonRow {
  name: string;
  value: number;
}

@Component({
  selector: 'xh-rtx-pro-6000-specifications',
  standalone: true,
  templateUrl: './rtx-pro-6000-specifications.component.html',
  styleUrl: './rtx-pro-6000-specifications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RtxPro6000SpecificationsComponent {
  readonly selectedHotspot = signal(0);
  readonly selectedMetric = signal<Metric>('Memory (GB)');

  private readonly comparisons: Record<Metric, ComparisonRow[]> = {
    'Memory (GB)': [
      { name: 'RTX PRO 6000', value: 96 },
      { name: 'L40S', value: 48 },
      { name: 'RTX 6000 Ada', value: 48 },
      { name: 'RTX A6000', value: 48 },
    ],
    'Bandwidth (GB/s)': [
      { name: 'RTX PRO 6000', value: 1597 },
      { name: 'RTX 6000 Ada', value: 960 },
      { name: 'L40S', value: 864 },
      { name: 'RTX A6000', value: 768 },
    ],
    'FP32 (TFLOPS)': [
      { name: 'RTX PRO 6000', value: 120 },
      { name: 'L40S', value: 91.6 },
      { name: 'RTX 6000 Ada', value: 91.1 },
      { name: 'RTX A6000', value: 38.7 },
    ],
  };

  readonly comparisonRows = computed(() => this.comparisons[this.selectedMetric()]);
  readonly comparisonMax = computed(() => Math.max(...this.comparisonRows().map(row => row.value)));

  advantage(value: number): string {
    const baseline = this.comparisonRows()[0].value;
    return value < baseline ? `+${Math.round((baseline / value - 1) * 100)}%` : '';
  }

  formattedValue(value: number): string {
    return value.toLocaleString('en-IN', { maximumFractionDigits: 1 });
  }
}
