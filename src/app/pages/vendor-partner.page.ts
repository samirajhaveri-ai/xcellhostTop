import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { SeoService } from '../core/seo.service';

const PARTNERS: Readonly<Record<string, string>> = {
  acronis: 'Acronis',
  'microsoft-365': 'Microsoft 365',
  'dpo-genie': 'DPO Genie',
  'microsoft-azure': 'Microsoft Azure',
  'amazon-web-services': 'Amazon Web Services',
  'google-cloud': 'Google Cloud',
  'ibm-multicloud': 'IBM Multicloud',
  'red-hat': 'Red Hat',
  digicert: 'DigiCert',
  sectigo: 'Sectigo',
  tsplus: 'TSplus',
  kaspersky: 'Kaspersky',
  sentinelone: 'SentinelOne',
};

@Component({
  selector: 'xh-vendor-partner-page',
  standalone: true,
  imports: [RouterLink],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (partner(); as name) {
      <main class="partner-page">
        <span class="partner-orb partner-orb-one" aria-hidden="true"></span>
        <span class="partner-orb partner-orb-two" aria-hidden="true"></span>
        <div class="partner-card">
          <p class="partner-kicker">Vendor partnership</p>
          <div class="partner-mark" aria-hidden="true">{{ name.charAt(0) }}</div>
          <h1>{{ name }}</h1>
          <p class="partner-status">Under Construction</p>
          <p class="partner-copy">We’re preparing this partner page. Please check back soon.</p>
          <a routerLink="/" class="partner-back">
            <span class="material-symbols-outlined" aria-hidden="true">arrow_back</span>
            Back to home
          </a>
        </div>
      </main>
    }
  `,
  styles: `
    .partner-page {
      position: relative;
      min-height: clamp(520px, 72vh, 760px);
      display: grid;
      place-items: center;
      overflow: hidden;
      padding: 72px 24px;
      text-align: center;
      background:
        radial-gradient(circle at 20% 20%, rgba(21, 101, 216, .13), transparent 32%),
        radial-gradient(circle at 80% 78%, rgba(255, 140, 26, .13), transparent 28%),
        #f7faff;
    }
    .partner-card {
      position: relative;
      z-index: 1;
      width: min(620px, 100%);
      padding: clamp(38px, 7vw, 68px);
      border: 1px solid #dce5f2;
      border-radius: 24px;
      background: rgba(255, 255, 255, .92);
      box-shadow: 0 28px 70px rgba(4, 30, 66, .13);
      backdrop-filter: blur(12px);
    }
    .partner-kicker {
      margin-bottom: 22px;
      color: #1565d8;
      font: 600 11px/1 var(--mono);
      letter-spacing: .2em;
      text-transform: uppercase;
    }
    .partner-mark {
      display: grid;
      place-items: center;
      width: 62px;
      height: 62px;
      margin: 0 auto 22px;
      border-radius: 17px;
      color: #fff;
      background: linear-gradient(145deg, #1565d8, #0a2a57);
      box-shadow: 0 12px 25px rgba(21, 101, 216, .28);
      font: 800 25px/1 var(--disp);
    }
    h1 { margin-bottom: 14px; color: #041e42; }
    .partner-status {
      margin-bottom: 14px;
      color: #ff8c1a;
      font: 700 clamp(20px, 3vw, 28px)/1.2 var(--disp);
    }
    .partner-copy { margin-bottom: 30px; color: #51607a; font-size: 16px; }
    .partner-back {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 11px 19px;
      border: 1px solid #dce5f2;
      border-radius: 9px;
      color: #041e42;
      font-weight: 600;
      transition: border-color .2s, color .2s, transform .2s;
    }
    .partner-back:hover { color: #1565d8; border-color: #1565d8; transform: translateY(-2px); }
    .partner-back .material-symbols-outlined { font-size: 19px; }
    .partner-orb { position: absolute; border-radius: 50%; filter: blur(2px); }
    .partner-orb-one { width: 220px; height: 220px; top: -70px; right: 8%; background: rgba(127, 178, 255, .2); }
    .partner-orb-two { width: 170px; height: 170px; bottom: -55px; left: 10%; background: rgba(255, 140, 26, .16); }
  `,
})
export class VendorPartnerPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  readonly slug = toSignal(this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')), {
    initialValue: '',
  });
  readonly partner = computed(() => PARTNERS[this.slug()] ?? null);

  constructor() {
    effect(() => {
      const partner = this.partner();
      if (!partner) {
        void this.router.navigate(['/']);
        return;
      }
      this.seo.set(
        `${partner} partnership — XcellHost`,
        `${partner} vendor partnership information from XcellHost.`,
        `/vendor-partners/${this.slug()}/`
      );
    });
  }
}
