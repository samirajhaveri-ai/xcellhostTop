import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type Metric = 'Memory (GB)' | 'Bandwidth (GB/s)' | 'FP32 (TFLOPS)';

interface ComparisonRow {
  name: string;
  value: number;
}

@Component({
  selector: 'xh-rtx-8000-specifications',
  standalone: true,
  templateUrl: './rtx-8000-specifications.component.html',
  styleUrl: './rtx-8000-specifications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rtx8000SpecificationsComponent {
  readonly selectedHotspot = signal(2);
  readonly metrics: Metric[] = ['Memory (GB)', 'Bandwidth (GB/s)', 'FP32 (TFLOPS)'];
  readonly selectedMetric = signal<Metric>('Memory (GB)');

  private readonly comparisons: Record<Metric, ComparisonRow[]> = {
    'Memory (GB)': [
      { name: 'RTX 8000', value: 48 },
      { name: 'Quadro RTX 6000', value: 24 },
      { name: 'Quadro RTX 5000', value: 16 },
      { name: 'Quadro RTX 4000', value: 8 },
    ],
    'Bandwidth (GB/s)': [
      { name: 'RTX 8000', value: 672 },
      { name: 'Quadro RTX 6000', value: 672 },
      { name: 'Quadro RTX 5000', value: 448 },
      { name: 'Quadro RTX 4000', value: 416 },
    ],
    'FP32 (TFLOPS)': [
      { name: 'RTX 8000', value: 16.3 },
      { name: 'Quadro RTX 6000', value: 16.3 },
      { name: 'Quadro RTX 5000', value: 11.2 },
      { name: 'Quadro RTX 4000', value: 7.1 },
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
