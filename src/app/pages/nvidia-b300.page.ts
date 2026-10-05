import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { SeoService } from '../core/seo.service';
import { GpuLeadHeroComponent } from '../sections/gpu-lead-hero.component';

@Component({
  selector: 'xh-nvidia-b300-page',
  standalone: true,
  imports: [GpuLeadHeroComponent],
  template: `
    <main class="b300-page">
      <section aria-labelledby="b300OverviewTitle">
        <span class="eyebrow">Overview</span>
        <h2 id="b300OverviewTitle">Blackwell Ultra infrastructure for frontier AI</h2>
        <p>NVIDIA B300 nodes are designed for teams planning large-scale reasoning, model training and high-throughput inference. XcellHost helps scope the GPU count, host memory, storage, networking, software stack and deployment model before capacity is reserved.</p>
      </section>
      <xh-gpu-lead-hero slug="nvidia-b300-nodes" productName="NVIDIA B300 Nodes" />
      <div class="b300-grid" aria-label="NVIDIA B300 deployment benefits">
        <article><strong>01</strong><h3>Workload sizing</h3><p>Match model size, context, concurrency and training goals to the right node design.</p></article>
        <article><strong>02</strong><h3>Cluster-ready fabric</h3><p>Plan high-speed GPU interconnects, storage and networking for distributed workloads.</p></article>
        <article><strong>03</strong><h3>Managed deployment</h3><p>Receive a validated software stack, monitoring and 24×7 GPU engineering support.</p></article>
      </div>
    </main>
  `,
  styles: [`
    :host{display:block}.b300-page{width:min(1192px,calc(100% - 40px));margin:0 auto;padding:54px 0 76px;color:#1c2a3a}.b300-page section{max-width:900px}.eyebrow{color:#1565d8;font:700 12px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase}.b300-page h2{margin:12px 0 16px;color:#041e42;font:700 clamp(28px,3vw,42px)/1.15 'Sora',sans-serif}.b300-page section p{font-size:17px;line-height:1.75;color:#51607a}.b300-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:36px}.b300-grid article{padding:25px;border:1px solid #dce5f2;border-radius:16px;background:#f7faff}.b300-grid strong{color:#1565d8;font:700 12px 'IBM Plex Mono',monospace}.b300-grid h3{margin:14px 0 8px;color:#041e42}.b300-grid p{margin:0;color:#51607a;line-height:1.6}@media(max-width:760px){.b300-grid{grid-template-columns:1fr}.b300-page{width:min(100% - 32px,1192px);padding-top:40px}}
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NvidiaB300Page {
  constructor() {
    inject(SeoService).set(
      'NVIDIA B300 Nodes in India | XcellHost',
      'Reserve NVIDIA B300 node capacity for large-scale AI training, reasoning and inference with deployment support from XcellHost.',
      '/nvidia-b300-nodes/',
    );
  }
}
