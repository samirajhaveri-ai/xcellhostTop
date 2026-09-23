import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type Metric = 'FP32 (TFLOPS)' | 'Memory (GB)' | 'Bandwidth (GB/s)';

interface ComparisonRow {
  name: string;
  value: number;
}

@Component({
  selector: 'xh-rtx-6000-ada-specifications',
  standalone: true,
  templateUrl: './rtx-6000-ada-specifications.component.html',
  styleUrl: './rtx-pro-6000-specifications.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rtx6000AdaSpecificationsComponent {
  readonly selectedHotspot = signal(0);
  readonly selectedMetric = signal<Metric>('FP32 (TFLOPS)');

  private readonly comparisons: Record<Metric, ComparisonRow[]> = {
    'FP32 (TFLOPS)': [
      { name: 'RTX 6000 Ada', value: 91.1 },
      { name: 'RTX A6000', value: 38.7 },
      { name: 'RTX A5000', value: 27.8 },
      { name: 'Quadro RTX 6000', value: 16.3 },
    ],
    'Memory (GB)': [
      { name: 'RTX 6000 Ada', value: 48 },
      { name: 'RTX A6000', value: 48 },
      { name: 'RTX A5000', value: 24 },
      { name: 'Quadro RTX 6000', value: 24 },
    ],
    'Bandwidth (GB/s)': [
      { name: 'RTX 6000 Ada', value: 960 },
      { name: 'RTX A6000', value: 768 },
      { name: 'RTX A5000', value: 768 },
      { name: 'Quadro RTX 6000', value: 672 },
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
