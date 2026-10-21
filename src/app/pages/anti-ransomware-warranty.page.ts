import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { AntiRansomwareWarrantyComponent } from '../sections/anti-ransomware-warranty.component';

@Component({
  selector: 'xh-anti-ransomware-warranty-page',
  standalone: true,
  imports: [RouterLink, AntiRansomwareWarrantyComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <main class="wrap warranty-page">
      <nav aria-label="Breadcrumb"><a routerLink="/">Home</a> / Anti-ransomware warranty</nav>
      <h1>Acronis Anti-Ransomware Recovery Warranty</h1>
      <xh-anti-ransomware-warranty [showLearnMore]="false" />
      <section aria-labelledby="warrantyRequirements">
        <h2 id="warrantyRequirements">What makes a recovery point eligible?</h2>
        <ul>
          <li>Endpoint disk, volume or file backups stored in Acronis Cloud Storage.</li>
          <li>Two-factor authentication enabled for the backup environment.</li>
          <li>Immutable storage enabled in Compliance mode.</li>
          <li>Successful validation by checksum, screenshot or heartbeat.</li>
        </ul>
        <h2>Recovery backed by Acronis</h2>
        <p>If a qualifying recovery point cannot be recovered, eligible customers may receive
          reimbursement for qualifying recovery costs, up to the lesser of US$1 million or
          the actual fees paid to Acronis for applicable services during the previous 12 months.</p>
        <p>Eligibility, reimbursement and claims are subject to the final Warranty Policy,
          applicable customer agreement and applicable law.</p>
        <a class="warranty-policy" href="https://www.acronis.com/en/platform/anti-ransomware-warranty/"
          target="_blank" rel="noopener noreferrer">View Acronis warranty details and terms &#8599;</a>
      </section>
    </main>
  `,
  styles: [`
    .warranty-page { padding-block: 40px 64px; color: #294b70; }
    nav { margin-bottom: 24px; font-size: 14px; }
    h1 { color: #002957; font: 600 clamp(30px, 4vw, 46px)/1.2 var(--disp, sans-serif); }
    h2 { margin: 28px 0 14px; color: #002957; font-size: 26px; }
    p, li { font: 400 16px/1.7 var(--body, sans-serif); }
    p { max-width: 900px; margin-bottom: 16px; }
    ul { padding-left: 24px; }
    li { margin-bottom: 8px; }
    a { color: #1261ff; }
    .warranty-policy { display: inline-block; margin-top: 8px; }
  `],
})
export class AntiRansomwareWarrantyPage {
  constructor() {
    inject(SeoService).set(
      'Acronis Anti-Ransomware Recovery Warranty | XcellHost',
      'Learn about the Acronis recovery warranty, eligible backups, validation requirements and reimbursement terms.',
      '/anti-ransomware-warranty',
    );
  }
}
