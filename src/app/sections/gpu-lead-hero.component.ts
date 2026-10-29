import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, DestroyRef, computed, inject, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GpuLeadApplicationsService } from '../core/gpu-lead-applications.service';
import { internationalPhone } from '../core/international-phone';
import { PHONE_COUNTRIES } from '../data/phone-countries';

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
  'nvidia-h200',
  'nvidia-h100',
  'nvidia-a100',
  'nvidia-b300-nodes',
  'rtx-pro-6000',
  'nvidia-rtx-6000-ada',
  'rtx-a6000',
  'rtx-8000',
  'gpu-clusters',
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
  private readonly document = inject(DOCUMENT);
  private readonly applications = inject(GpuLeadApplicationsService);
  private submissionFrame?: HTMLIFrameElement;
  private submissionForm?: HTMLFormElement;
  private submissionTimer?: ReturnType<typeof setTimeout>;
  private confirmationUrl = '';
  private submittedEmail = '';

  constructor() {
    inject(DestroyRef).onDestroy(() => this.cleanupSubmission());
  }

  readonly slug = input.required<string>();
  readonly freeCredits = computed(() => this.slug() === 'nvidia-l40s' ? '₹10,000' : '₹20,000');
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
  readonly countries = PHONE_COUNTRIES;
  readonly countryCode = signal('in');
  readonly phoneCountry = computed(() => this.countries.find(country => country.iso2 === this.countryCode())
    ?? this.countries.find(country => country.iso2 === 'in')!);
  readonly submitting = signal(false);
  readonly submitted = signal(false);
  readonly error = signal('');

  submit(): void {
    if (this.submitting() || this.submitted()) return;
    this.error.set('');
    const name = this.name.trim().replace(/\s+/g, ' ');
    const email = this.email.trim();
    const phone = internationalPhone(this.phone, this.phoneCountry());
    if (!name || name.length > 255 || email.length > 255 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !/^\+[1-9]\d{6,14}$/.test(phone)) {
      this.error.set('Please enter your name, a valid phone number and work email.');
      return;
    }
    if (this.applications.has(email)) {
      this.error.set('You have already applied with this email address.');
      return;
    }

    this.cleanupSubmission();
    this.submittedEmail = email;
    const token = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    const callback = new URL('gpu-lead-success.html', this.document.baseURI);
    callback.searchParams.set('submission', token);
    this.confirmationUrl = callback.href;

    // Set name BEFORE inserting the frame so its browsing context has the same
    // name as the POST target. A late-bound name can open a separate window.
    const frame = this.document.createElement('iframe');
    frame.name = `gpu-lead-response-${token}`;
    frame.title = 'GPU access request response';
    frame.hidden = true;
    frame.setAttribute('sandbox', 'allow-forms allow-scripts allow-same-origin');
    frame.addEventListener('load', () => this.checkSubmission(frame));
    this.submissionFrame = frame;
    this.document.body.appendChild(frame);

    const form = this.document.createElement('form');
    form.hidden = true;
    form.action = 'https://forms.zohopublic.in/xcellhostcloudservicespvtltd1/form/GPUServer/formperma/rm-hrBAR3Ey-GbjL9pBjRSRssayZRmJhX7gTcGKsxlI/htmlRecords/submit';
    form.method = 'POST';
    form.enctype = 'multipart/form-data';
    form.acceptCharset = 'UTF-8';
    form.target = frame.name;
    const [firstName, ...lastName] = name.split(' ');
    const fields: Record<string, string> = {
      Name_First: firstName,
      Name_Last: lastName.join(' '),
      PhoneNumber_countrycode: phone,
      Email: email,
      zf_referrer_name: this.document.location.href,
      zf_redirect_url: this.confirmationUrl,
      zc_gad: new URL(this.document.location.href).searchParams.get('gclid') ?? '',
    };
    for (const [name, value] of Object.entries(fields)) {
      const field = this.document.createElement('input');
      field.type = 'hidden';
      field.name = name;
      field.value = value;
      form.appendChild(field);
    }
    this.submissionForm = form;
    this.document.body.appendChild(form);
    this.submitting.set(true);
    this.submissionTimer = setTimeout(() => {
      this.cleanupSubmission();
      this.submitting.set(false);
      this.error.set('We could not confirm your request. Please try again.');
    }, 30000);
    try {
      form.submit();
    } catch {
      this.cleanupSubmission();
      this.submitting.set(false);
      this.error.set('We could not submit your request. Please try again.');
    }
  }

  checkSubmission(frame: HTMLIFrameElement): void {
    if (!this.submitting() || frame !== this.submissionFrame || !this.confirmationUrl) return;
    try {
      if (frame.contentWindow?.location.href !== this.confirmationUrl) return;
    } catch {
      // A cross-origin Zoho validation/error page does not confirm acceptance.
      return;
    }
    this.applications.remember(this.submittedEmail);
    this.cleanupSubmission();
    this.submitting.set(false);
    this.submitted.set(true);
  }

  private cleanupSubmission(): void {
    clearTimeout(this.submissionTimer);
    this.confirmationUrl = '';
    this.submittedEmail = '';
    this.submissionFrame?.remove();
    this.submissionForm?.remove();
    this.submissionFrame = undefined;
    this.submissionForm = undefined;
  }
}
