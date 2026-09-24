import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { CREATIVE_GPU_WORKLOAD_LOOP } from './gpu-workload-icons';

type Metric = 'FP32 (TFLOPS)' | 'Memory (GB)' | 'Bandwidth (GB/s)';

interface ComparisonRow {
  name: string;
  value: number;
}

@Component({
  selector: 'xh-rtx-a6000-performance',
  standalone: true,
  templateUrl: './rtx-a6000-performance.component.html',
  styleUrls: [
    './rtx-pro-6000-specifications.component.css',
    './rtx-8000-use-cases.component.css',
    './rtx-8000-stories.component.css',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RtxA6000PerformanceComponent {
  readonly selectedMetric = signal<Metric>('FP32 (TFLOPS)');
  readonly workloadLoop = CREATIVE_GPU_WORKLOAD_LOOP;

  private readonly comparisons: Record<Metric, ComparisonRow[]> = {
    'FP32 (TFLOPS)': [
      { name: 'RTX A6000', value: 38.7 },
      { name: 'RTX A5500', value: 34.1 },
      { name: 'RTX A5000', value: 27.8 },
      { name: 'Quadro RTX 6000', value: 16.3 },
    ],
    'Memory (GB)': [
      { name: 'RTX A6000', value: 48 },
      { name: 'RTX A5500', value: 24 },
      { name: 'RTX A5000', value: 24 },
      { name: 'Quadro RTX 6000', value: 24 },
    ],
    'Bandwidth (GB/s)': [
      { name: 'RTX A6000', value: 768 },
      { name: 'RTX A5500', value: 768 },
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
