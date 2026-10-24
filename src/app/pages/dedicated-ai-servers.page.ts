import { CUSTOMER_TESTIMONIALS } from '../data/customer-testimonials.data';
import { Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { DedicatedAiServersSourceComponent } from '../sections/dedicated-ai-servers-source.component';
import { SmbSectionNavComponent } from '../sections/smb-section-nav.component';
import { DedicatedAiServersTailComponent } from '../sections/dedicated-ai-servers-tail.component';

@Component({
  selector: 'xh-dedicated-ai-servers-page',
  standalone: true,
  imports: [DedicatedAiServersSourceComponent, SmbSectionNavComponent, DedicatedAiServersTailComponent],
  template: `
    <xh-dedicated-ai-servers-source [hero]="true" />
    <div class="ai-trust" data-preserve-copy>
      <span>ISO <b>27001</b> &amp; <b>20000-1</b> certified</span>
      <span>Microsoft <b>Gold Partner</b></span><span><b>10,000+</b> customers</span>
      <span><b>Since 1999</b></span><span><b>99.95%</b> uptime SLA*</span><span><b>24×7</b> NOC + SOC</span>
    </div>
    <xh-smb-section-nav label="Dedicated AI Servers page sections" [links]="links" [highlightSelection]="true"
      frameSelector="xh-dedicated-ai-servers-source iframe[src='/dedicated-ai-servers-content.html']" />
    <xh-dedicated-ai-servers-source />
    <xh-dedicated-ai-servers-tail />
  `,
  styles: [`
    :host{display:block;min-width:0}
    .ai-trust{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;padding:14px max(24px,calc((100% - 1192px)/2));background:#f2f6fc;color:#526887;font:400 13px/1.5 var(--body)}
    .ai-trust b{color:#041e42;font-family:var(--mono)}
    @media(max-width:600px){.ai-trust{justify-content:center;gap:12px 20px;text-align:center;font-size:11px}}
  `],
})
export class DedicatedAiServersPage {
  readonly links = [
    { label: 'Overview', target: 'overview' },
    { label: 'Every Server Includes', target: 'included' },
    { label: 'GPUs', target: 'gpus' },
    { label: 'Catalogue', target: 'catalogue' },
    { label: 'VRAM Calculator', target: 'vram' },
    { label: 'GPU Picker', target: 'picker' },
    { label: 'Features', target: 'features' },
    { label: 'Use Cases', target: 'usecases' },
    { label: 'Comparison', target: 'vs' },
    { label: 'How It Works', target: 'how' },
    { label: 'Quotation', target: 'configure' },
    { label: 'OS & Stack', target: 'os' },
    { label: 'Why XcellHost', target: 'why' },
    { label: 'Security', target: 'aiSecurity' },
    ...(CUSTOMER_TESTIMONIALS['dedicated-ai-servers']?.length ? [{ label: 'Customer Testimonials', target: 'aiReferences' }] : []),
    { label: 'FAQs', target: 'faq' },
    { label: 'Insights', target: 'aiInsights' },
    { label: 'Contact', target: 'aiContact' },
  ];

  constructor() {
    inject(SeoService).set('Dedicated AI Servers in India | XcellHost',
      'Single-tenant NVIDIA L4, RTX PRO 6000 Blackwell and H200 GPU servers in Mumbai for training, fine-tuning and inference. Size your workload and request an INR quotation with GST.',
      '/dedicated-ai-servers');
  }
}
