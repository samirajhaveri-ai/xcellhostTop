import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';

type Metric = 'Memory (GB)' | 'Bandwidth (GB/s)' | 'FP32 (TFLOPS)';

interface ComparisonRow {
  name: string;
  value: number;
}

interface Workload {
  name: string;
  icon: string;
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

  private readonly workloads: Workload[] = [
    { name: 'PyTorch', icon: 'M12 3v4m0 0a7 7 0 1 0 6.2 3.7M15.5 4.5l1 1' },
    { name: 'TensorFlow', icon: 'm5 7 7-4 7 4-7 4-7-4Zm7 4v10m-7-8 7 4 7-4' },
    { name: 'JAX', icon: 'M4 19h16M6 16l4-4 3 2 5-7M18 7h-4m4 0v4' },
    { name: 'vLLM', icon: 'M5 5h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9l-4 3v-3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3 5 2 2-2 2m5 0h3' },
    { name: 'TensorRT-LLM', icon: 'M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3m14-6h3m-3 6h3M7 5h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3 4h4v6h-4z' },
    { name: 'NVIDIA Triton', icon: 'M4 6h16v12H4zM8 10h3m-3 4h5m3-4h.01m-.01 4h.01' },
    { name: 'Hugging Face', icon: 'M8 11h.01M16 11h.01M9 15c1.7 1.3 4.3 1.3 6 0M6 8 4 6m14 2 2-2M5 5l2 2m12-2-2 2M12 3a9 9 0 1 1 0 18 9 9 0 0 1 0-18Z' },
    { name: 'Ollama', icon: 'M7 18v-7a5 5 0 0 1 10 0v7M9 7V5a3 3 0 0 1 6 0v2M7 14H5v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3v-3h-2M10 12h.01M14 12h.01' },
    { name: 'ComfyUI', icon: 'M6 5h5v5H6zM13 14h5v5h-5zM11 7.5h3a2 2 0 0 1 2 2V14M8.5 10v3a2 2 0 0 0 2 2H13' },
    { name: 'RAPIDS', icon: 'M4 16a8 8 0 1 1 16 0M12 16l4-5M8 19h8' },
    { name: 'Omniverse', icon: 'M12 6a6 6 0 1 0 6 6M4 7c4-3 10-3 16 0M4 17c4 3 10 3 16 0M12 3c-3 4-3 14 0 18' },
    { name: 'Blender', icon: 'M4 9h9l-3-3m3 3-3 3m3-3a6 6 0 1 1-5.2 9M14 12a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z' },
    { name: 'Unreal Engine', icon: 'm12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm-4 7v5l4 2 4-2v-5' },
    { name: 'DaVinci Resolve', icon: 'M4 6h16v12H4zM9 6v12m6-12v12M4 10h5m6 0h5m-16 4h5m6 0h5' },
  ];

  readonly workloadLoop = [...this.workloads, ...this.workloads];

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
