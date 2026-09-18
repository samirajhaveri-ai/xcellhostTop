import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InsightsSectionComponent } from '../sections/insights-section.component';
import { ProductFaqComponent } from '../sections/product';

/**
 * Hosts the supplied GPU Servers document inside the normal site shell.
 * The source stays as a standalone HTML asset so its HTML, CSS and JavaScript
 * can be kept byte-for-byte with the approved page while Angular owns routing.
 */
@Component({
  selector: 'xh-gpu-servers-page',
  standalone: true,
  imports: [InsightsSectionComponent, ProductFaqComponent, RouterLink],
  template: `
    <div #mount class="gpu-servers-mount" aria-live="polite"></div>

    <div class="gpu-default-sections pp-body">
      <div class="wrap">
        <div class="pp-sec">Security &amp; compliance — GPU Servers</div>
        <p class="pp-ov">
          GPU workloads run in Indian Tier-4 datacenters with isolated networking, encrypted
          storage and round-the-clock operational oversight. XcellHost combines infrastructure
          controls with accountable local support for production AI and regulated workloads.
        </p>
        <div class="pp-secrows">
          <div class="psrow"><span class="psk">Data residency</span><span class="psv">Indian Tier-4 datacenters</span></div>
          <div class="psrow"><span class="psk">Network isolation</span><span class="psv">Private VLAN per customer</span></div>
          <div class="psrow"><span class="psk">Encryption</span><span class="psv">At rest and in transit</span></div>
          <div class="psrow"><span class="psk">Operations</span><span class="psv">24×7 NOC and SOC monitoring</span></div>
          <div class="psrow"><span class="psk">Service management</span><span class="psv">ISO 20000-1 certified</span></div>
          <div class="psrow"><span class="psk">Information security</span><span class="psv">ISO 27001 certified</span></div>
        </div>
        <p class="pp-secfoot">XcellHost is ISO 27001 and ISO 20000-1 certified · Indian Tier-4 datacenters · DPDPA and RBI aligned · 24×7 NOC and SOC.</p>

        <div class="pp-sec">Why XcellHost for GPU Servers</div>
        <div class="pp-why gpu-why">
          <div class="pw"><span class="pw-ic" aria-hidden="true">27+</span><b>Cloud expertise since 1999</b><span>Two decades of experience running business-critical infrastructure.</span></div>
          <div class="pw"><span class="pw-ic" aria-hidden="true">IN</span><b>Hosted in India</b><span>Low-latency Tier-4 datacenters with local data residency.</span></div>
          <div class="pw"><span class="pw-ic" aria-hidden="true">24×7</span><b>Real engineers, always available</b><span>Direct help from our Mumbai NOC and cloud specialists.</span></div>
          <div class="pw"><span class="pw-ic" aria-hidden="true">SLA</span><b>Reliable by design</b><span>Monitored infrastructure backed by a clear uptime commitment.</span></div>
          <div class="pw"><span class="pw-ic" aria-hidden="true">₹</span><b>Predictable INR billing</b><span>Transparent pricing and one GST-compliant invoice.</span></div>
          <div class="pw"><span class="pw-ic" aria-hidden="true">✓</span><b>Managed end to end</b><span>Free migration guidance, deployment support and ongoing operations.</span></div>
        </div>

        <div class="pp-sec">What customers say</div>
        <div class="pp-revs">
          <article class="prv"><div class="stars" aria-label="5 out of 5 stars">★★★★★</div><p>“XcellHost helped us choose the right GPU configuration and had the environment ready without the usual cloud complexity.”</p><cite><span class="rav">AK</span><span><b>Arjun Khanna</b>CTO · AI SaaS company</span></cite></article>
          <article class="prv"><div class="stars" aria-label="5 out of 5 stars">★★★★★</div><p>“The local engineering team and predictable monthly billing made moving our training workloads straightforward.”</p><cite><span class="rav">PS</span><span><b>Priya Shah</b>Head of Data Science · Fintech</span></cite></article>
          <article class="prv"><div class="stars" aria-label="5 out of 5 stars">★★★★★</div><p>“We can scale GPU capacity for a project and speak directly with an engineer whenever the workload changes.”</p><cite><span class="rav">RM</span><span><b>Rohit Mehta</b>Infrastructure Lead · Digital studio</span></cite></article>
        </div>

        <div class="pp-sec pp-faq-heading">Frequently asked questions</div>
        <div class="pp-faq"><xh-product-faq [faqs]="faqs" /></div>
      </div>

      <div id="ppBlog"><xh-insights-section pageSlug="gpu-servers" /></div>

      <div class="wrap">
        <div class="pp-cta">
          <div>
            <h3>Ready to start with GPU Servers?</h3>
            <p>FREE Consultation · FREE Demo · FREE Trial · 24×7 support in English &amp; Hindi</p>
          </div>
          <div class="gpu-cta-actions">
            <a class="btn btn-primary" href="#" data-open-callback>Request a callback</a>
            <a class="btn btn-ghost gpu-cta-ghost" href="#pricing">⚡ Configure &amp; Price</a>
            <a class="btn btn-ghost gpu-cta-ghost" href="https://wa.me/918657032540?text=Hi%20XcellHost%2C%20I%27d%20like%20to%20discuss%20GPU%20Servers." target="_blank" rel="noopener">Talk on WhatsApp</a>
          </div>
          <a class="pp-cta-buddha-link" routerLink="/company/support-overview" aria-label="Visit XcellHost customer support"><img class="pp-cta-buddha" src="/assets/images/laughing-buddha-white-text-transparent.png" alt="XcellHost Laughing Buddha" /></a>
        </div>
        <div class="pp-proof"><span>🏅 ISO 27001</span><span>🏅 ISO 20000-1</span><span>🤝 Microsoft Gold Partner</span><span>🕰 Since 1999</span><span>🔒 Secure Payments — UPI · Cards · NetBanking</span></div>
      </div>
    </div>
  `,
  styles: [
    ':host{display:block}',
    '.gpu-servers-mount:empty{min-height:70vh;background:#fff}',
    '.gpu-default-sections{padding:0 0 64px;background:#fff}',
    '.gpu-default-sections>.wrap:first-child{padding-top:4px}',
    '.gpu-default-sections .pp-secfoot{margin:14px 0 0;color:var(--slate);font-size:13px}',
    '.gpu-default-sections .gpu-why .pw-ic{display:grid;place-items:center;width:42px;height:42px;margin-bottom:12px;border-radius:11px;background:linear-gradient(135deg,var(--blue),var(--navy));color:#fff;font:700 11px var(--mono)}',
    '.gpu-default-sections .gpu-why .pw b,.gpu-default-sections .gpu-why .pw>span:last-child{display:block}',
    '.gpu-default-sections .gpu-why .pw>span:last-child{margin-top:5px;color:var(--slate);font-size:13px;line-height:1.5}',
    '.gpu-default-sections #ppBlog{margin-top:54px}',
    '.gpu-default-sections .pp-cta{margin-top:54px}',
    '.gpu-cta-actions{display:flex;gap:12px;flex-wrap:wrap;padding-right:18px}',
    '.gpu-cta-ghost{border-color:rgba(255,255,255,.4)!important;color:#fff!important}',
    '@media(max-width:760px){.gpu-default-sections{padding-bottom:44px}.gpu-default-sections #ppBlog,.gpu-default-sections .pp-cta{margin-top:38px}}',
  ],
})
export class GpuServersPage implements AfterViewInit, OnDestroy {
  @ViewChild('mount', { static: true }) private readonly mount!: ElementRef<HTMLDivElement>;

  private pageStyle?: HTMLStyleElement;
  private pageScript?: HTMLScriptElement;
  private destroyed = false;

  readonly faqs: [string, string][] = [
    ['Which NVIDIA GPUs are available?', 'XcellHost offers NVIDIA L4, RTX Pro 6000 and H200 cloud nodes, plus enterprise GPU configurations including H100, B200 and A100 on request.'],
    ['How quickly can a GPU server be deployed?', 'Standard single-node cloud configurations can be ready in under 60 seconds. Large reserved or multi-node clusters are planned with our engineering team.'],
    ['Can I pay hourly or monthly?', 'Yes. Choose hourly, monthly or annual billing, with commitment and volume pricing available for larger deployments.'],
    ['Which AI frameworks and images are supported?', 'Choose Ubuntu or Windows images, including preconfigured PyTorch, TensorFlow, CUDA, Jupyter, RAPIDS and Everything ML/AI environments.'],
    ['Is my workload and data hosted in India?', 'Yes. GPU nodes are delivered from Indian Tier-4 datacenters with private networking and local data residency.'],
    ['Do you help migrate models and datasets?', 'Yes. XcellHost engineers help size the environment and migrate models, datasets and pipelines with a low-risk transition plan.'],
    ['Can I scale to multiple GPUs?', 'Yes. Configurations range from a single GPU to 2×, 4× and 8× nodes, with NVLink and InfiniBand options for enterprise clusters.'],
    ['Is technical support available around the clock?', 'Yes. GPU infrastructure is monitored 24×7, with direct support from XcellHost engineers in English and Hindi.'],
  ];

  async ngAfterViewInit(): Promise<void> {
    const response = await fetch('/assets/gpu-servers/xcellhost-gpu-servers.html');
    if (!response.ok) throw new Error(`Unable to load GPU Servers page (${response.status})`);

    const source = await response.text();
    if (this.destroyed) return;

    const parsed = new DOMParser().parseFromString(source, 'text/html');
    const styleText = Array.from(parsed.head.querySelectorAll('style'))
      .map((style) => style.textContent ?? '')
      .join('\n');
    const scriptText = Array.from(parsed.body.querySelectorAll('script'))
      .map((script) => script.textContent ?? '')
      .join('\n');

    parsed.body.querySelectorAll('script').forEach((script) => script.remove());

    this.pageStyle = document.createElement('style');
    this.pageStyle.dataset['gpuServersStyles'] = 'true';
    this.pageStyle.textContent = styleText;
    document.head.appendChild(this.pageStyle);

    this.mount.nativeElement.innerHTML = parsed.body.innerHTML;

    // Appending a real script node preserves the supplied page interactions;
    // scripts inserted via innerHTML are deliberately inert in browsers.
    this.pageScript = document.createElement('script');
    this.pageScript.dataset['gpuServersScript'] = 'true';
    this.pageScript.textContent = scriptText;
    document.body.appendChild(this.pageScript);

    document.title = parsed.title || document.title;
  }

  ngOnDestroy(): void {
    this.destroyed = true;
    this.pageStyle?.remove();
    this.pageScript?.remove();
    this.mount.nativeElement.replaceChildren();
  }
}
