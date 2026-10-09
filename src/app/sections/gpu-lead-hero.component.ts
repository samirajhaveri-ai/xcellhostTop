import { ChangeDetectionStrategy, Component, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { LeadService } from '../core/lead.service';

interface GpuHeroCopy {
  headline: string;
  description: string;
  accessTitle: string;
  features: readonly [string, string][];
}

const GPU_HERO_COPY: Record<string, GpuHeroCopy> = {
  'nvidia-l40s': gpu('Rent NVIDIA L40S Cloud GPUs', 'Run generative AI, rendering, virtual workstations and video pipelines on one versatile 48 GB GPU.', '48 GB', 'GDDR6 ECC VRAM', 'Universal', 'AI + graphics'),
  'nvidia-l4': gpu('Rent NVIDIA L4 Cloud GPUs for ', 'Serve AI, video and visual-computing workloads with a compact, energy-efficient GPU built for production.', '24 GB', 'GDDR6 VRAM', 'Low power', 'Efficient inference'),
  'nvidia-a30': gpu('Rent NVIDIA A30 Cloud GPUs ', 'Accelerate training, inference and high-performance computing with flexible GPU partitioning.', '24 GB', 'HBM2 VRAM', 'MIG ready', 'Shared securely'),
  'nvidia-a2': gpu('Rent NVIDIA A2 Cloud GPUs ', 'Deploy cost-efficient inference, computer vision and analytics without oversized infrastructure.', '16 GB', 'GDDR6 VRAM', 'Entry level', 'Production AI'),
  'nvidia-h200': gpu('Rent NVIDIA H200 Cloud GPUs', 'Run bigger LLMs with 141 GB HBM3e. Start in minutes and scale multi-GPU capacity on demand.', '141 GB', 'HBM3e VRAM', 'On demand', 'H200 access'),
  'nvidia-h100': gpu('Rent NVIDIA H100 Cloud GPUs', 'Train and serve large models with Hopper Tensor Cores, NVLink and production-ready GPU infrastructure.', '80 GB', 'HBM3 VRAM', 'NVLink', 'Multi-GPU scale'),
  'nvidia-a100': gpu('Rent NVIDIA A100 Cloud GPUs', 'Train, fine-tune and serve demanding models with proven Ampere performance and flexible MIG isolation.', '80 GB', 'HBM2e VRAM', 'MIG ready', 'Up to 7 instances'),
  'nvidia-b300-nodes': gpu('Reserve NVIDIA B300 Nodes', 'Plan Blackwell Ultra capacity for large-scale reasoning, training and high-throughput inference.', 'Blackwell', 'Ultra architecture', 'Multi-GPU', 'Node capacity'),
  'rtx-pro-6000': gpu('Rent RTX PRO 6000 Cloud GPUs', 'Use 96 GB of professional GPU memory for generative AI, simulation, rendering and digital twins.', '96 GB', 'GDDR7 ECC VRAM', 'Pro graphics', 'AI + rendering'),
  'nvidia-rtx-6000-ada': gpu('Rent RTX 6000 Ada Cloud GPUs', 'Give remote teams professional graphics, ray tracing and AI acceleration without buying workstations.', '48 GB', 'GDDR6 ECC VRAM', 'Ada', 'Pro visualization'),
  'rtx-a6000': gpu('Rent RTX A6000 Cloud GPUs', 'Run large scenes, simulations and deep-learning workloads with proven 48 GB Ampere performance.', '48 GB', 'GDDR6 ECC VRAM', 'NVLink', 'Up to 96 GB'),
  'rtx-8000': gpu('Rent RTX 8000 Cloud GPUs', 'Move rendering, CAD and visualization workloads to affordable professional GPUs hosted in India.', '48 GB', 'GDDR6 ECC VRAM', 'NVLink', 'Render at scale'),
  'gpu-clusters': gpu('Build NVIDIA GPU Clusters', 'Scale distributed training, inference and HPC across high-speed multi-node GPU infrastructure.', 'Multi-node', 'GPU clusters', 'High speed', 'Cluster fabric'),
  'nvidia-vera-rubin': gpu('Reserve NVIDIA Vera Rubin Capacity', 'Plan next-generation rack-scale AI infrastructure with guided sizing, deployment and operations in India.', 'Next gen', 'AI infrastructure', 'Rack scale', 'Early access'),
};

const COMPACT_GPU_PAGE_SLUGS = new Set([
  'nvidia-l40s',
  'nvidia-l4',
  'nvidia-a30',
  'nvidia-a2',
  'nvidia-h100',
  'nvidia-a100',
  'rtx-pro-6000',
  'nvidia-rtx-6000-ada',
  'rtx-a6000',
  'rtx-8000',
  'nvidia-vera-rubin',
]);

function gpu(headline: string, description: string, metric: string, metricLabel: string, scale: string, scaleLabel: string): GpuHeroCopy {
  return {
    headline,
    description,
    accessTitle: headline.replace(/^Rent |^Reserve |^Build /, '').replace(/ for .+$/, ''),
    features: [
      [metric, metricLabel],
      ['Up to 60%', 'Lower infrastructure cost*'],
      [scale, scaleLabel],
      ['Enterprise', 'Security for teams'],
    ],
  };
}

@Component({
  selector: 'xh-gpu-lead-hero',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './gpu-lead-hero.component.html',
  styleUrl: './gpu-lead-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GpuLeadHeroComponent {
  private readonly leads = inject(LeadService);

  readonly slug = input.required<string>();
  readonly productName = input.required<string>();
  readonly usesCompactLayout = computed(() => COMPACT_GPU_PAGE_SLUGS.has(this.slug()));
  readonly copy = computed(() => GPU_HERO_COPY[this.slug()] ?? gpu(
    `Rent ${this.productName()} Cloud GPUs on Demand`,
    'Launch secure GPU capacity in India with guided sizing, INR billing and 24×7 engineering support.',
    'On demand',
    'GPU capacity',
    'Scale fast',
    'From PoC to production',
  ));

  name = '';
  phone = '';
  email = '';
  readonly submitting = signal(false);
  readonly submitted = signal(false);
  readonly error = signal('');

  async submit(): Promise<void> {
    if (this.submitting()) return;
    this.submitting.set(true);
    this.error.set('');

    const product = this.productName();
    const result = await this.leads.submit('callback', {
      name: this.name.trim(),
      phone: this.phone.trim(),
      email: this.email.trim(),
      product,
      request: 'GPU access with ₹20,000 free credits',
    });

    this.submitting.set(false);
    if (result.skipped) {
      const message = `Hi, I want access to ${product} with ₹20,000 free credits.\nName: ${this.name.trim()}\nPhone: ${this.phone.trim()}\nWork email: ${this.email.trim()}`;
      globalThis.location.assign(this.leads.whatsappLink(message));
      return;
    }
    if (!result.ok) {
      this.error.set('We could not submit your request. Please try again.');
      return;
    }
    this.submitted.set(true);
  }
}
