import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-sovereign-performance',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="sovereign" aria-labelledby="sovereign-title">
      <header class="sovereign-hero">
        <div>
          <p class="kicker">Why Choose</p>
          <h2 id="sovereign-title"><span>Sovereign</span> Performance Cloud</h2>
          <p class="ribbon">25 reasons to power your business with confidence</p>
          <p class="intro">Sovereign Performance Cloud delivers high performance, security, compliance and complete control over your data and operations.</p>
        </div>
<div class="cloud-art" aria-hidden="true"><img src="/assets/images/sovereign-performance-reference.jpeg" alt="" loading="lazy" /></div>
      </header>
      <ol class="benefits">
        @for (benefit of benefits; track benefit[0]; let i = $index) {
          <li [style.--accent]="colors[benefitColors[i]]">
            <span class="number" aria-hidden="true">{{ i + 1 }}</span>
            <h3>{{ benefit[0] }}</h3>
            <span class="material-symbols-outlined benefit-icon" aria-hidden="true">{{ benefit[1] }}</span>
            <p>{{ benefit[2] }}</p>
          </li>
        }
      </ol>
      <footer class="built-for">
        <h3>Sovereign Performance Cloud — Built For</h3>
        <div class="industry-row">
          <div class="promises">
            <span><i class="material-symbols-outlined" aria-hidden="true">encrypted</i>Secure.</span>
            <span><i class="material-symbols-outlined" aria-hidden="true">verified_user</i>Compliant.</span>
            <span><i class="material-symbols-outlined" aria-hidden="true">speed</i>High performance.</span>
            <span><i class="material-symbols-outlined" aria-hidden="true">crown</i>Sovereign.</span>
          </div>
          @for (industry of industries; track industry[0]; let i = $index) {
            <div class="industry" [style.--accent]="colors[industryColors[i]]">
              <span class="material-symbols-outlined" aria-hidden="true">{{ industry[1] }}</span>
              <p>{{ industry[0] }}</p>
            </div>
          }
        </div>
      </footer>
    </section>
  `,
  styleUrl: './sovereign-performance.component.css',
})
export class SovereignPerformanceComponent {
  readonly colors = ['#0670cf', '#289324', '#dc7905', '#089ea5', '#8041d1'];
  readonly benefitColors = [0, 1, 2, 3, 4, 4, 2, 0, 1, 2, 3, 0, 4, 2, 0, 1, 2, 3, 4, 1, 0, 4, 2, 1, 0];
  readonly industryColors = [0, 1, 4, 2, 3, 4, 2];
  readonly benefits = [
    ['Complete Data Sovereignty', 'verified_user', 'Your data stays within your chosen geographic jurisdiction with full control.'],
    ['Regulatory Compliance Ready', 'assignment_turned_in', 'Designed to support DPDP Act, ISO 27001, RBI, SEBI and other industry regulations.'],
    ['High Performance Computing', 'speed', 'Enterprise-grade CPU, RAM, NVMe storage and optimized networking.'],
    ['Dedicated Cloud Resources', 'deployed_code', 'Avoid noisy-neighbor issues with dedicated compute, storage and network resources.'],
    ['Predictable Performance', 'monitoring', 'Guaranteed resource availability for mission-critical applications and workloads.'],
    ['Local Data Residency', 'location_on', 'Store and process sensitive data within approved regions.'],
    ['Enhanced Security Controls', 'lock', 'Built with security-first architecture including encryption and access controls.'],
    ['Enterprise-Grade Infrastructure', 'dns', 'Powered by modern servers, high-speed networking and resilient architecture.'],
    ['Better Control Over Data Access', 'admin_panel_settings', 'Control administrators, permissions, privileged access and operational governance.'],
    ['Compliance Evidence & Audit Support', 'fact_check', 'Maintain logs, reports and security visibility required for audits.'],
    ['Hybrid Cloud Flexibility', 'cloud_sync', 'Seamlessly connect private infrastructure, public cloud and sovereign cloud.'],
    ['Business Continuity Built-In', 'sync', 'Support backup, disaster recovery and workload resilience strategies.'],
    ['Low Latency Performance', 'speed', 'Host workloads closer to users for faster application response times.'],
    ['Mission-Critical Application Support', 'settings', 'Ideal for ERP, CRM, databases, financial systems, healthcare and enterprise apps.'],
    ['Stronger Privacy Protection', 'enhanced_encryption', 'Reduce exposure risks by maintaining greater control over sensitive information.'],
    ['AI & Analytics Ready', 'neurology', 'Provide secure infrastructure for AI workloads, machine learning and analytics.'],
    ['Protection Against Vendor Dependency', 'link_off', 'Maintain greater operational independence with flexible cloud architecture.'],
    ['Enterprise Networking Options', 'account_tree', 'Support VPN, private connectivity, firewall integration and secure workload communication.'],
    ['Managed Cloud Operations', 'headset_mic', 'Get expert monitoring, maintenance, optimization and support from cloud specialists.'],
    ['Scalable Infrastructure', 'open_in_full', 'Easily scale compute, storage and networking as your business grows.'],
    ['Cost Optimization', 'currency_rupee', 'Achieve enterprise cloud capabilities without unnecessary complexity and expenses.'],
    ['Industry-Specific Security Requirements', 'account_balance', 'Suitable for banking, finance, healthcare, government and manufacturing.'],
    ['Improved Cyber Resilience', 'shield', 'Secure infrastructure with backup, DR, monitoring and threat protection.'],
    ['Transparent Governance', 'policy', 'Better visibility into infrastructure operations, access policies and security controls.'],
    ['Future-Ready Digital Infrastructure', 'cloud_upload', 'Build a secure foundation for cloud modernization, AI adoption and digital transformation.'],
  ];
  readonly industries = [
    ['Banking & Financial Services', 'account_balance'],
    ['Healthcare Organizations', 'health_and_safety'],
    ['Government & Public Sector', 'assured_workload'],
    ['Manufacturing Enterprises', 'factory'],
    ['Legal & Professional Services', 'balance'],
    ['SaaS & Technology Companies', 'developer_mode_tv'],
    ['Enterprises Managing Sensitive Data', 'groups'],
  ];
}
