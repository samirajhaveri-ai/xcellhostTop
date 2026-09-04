import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs';

import { CatalogService } from '../core/catalog.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

const SPECIAL_PRODUCT_ROUTES: Readonly<Record<string, string>> = {
  'microsoft-365-smb': 'Microsoft 365 for SMB',
  'google-workspace': 'Google Workspace',
  'dpdpa-for-smb': 'DPDPA for SMB',
  'geotrust-ssl-certificates': 'GeoTrust SSL Certificates',
  'digicert-vmc': 'DigiCert Verified Mark Certificates',
  'digicert-cmc': 'DigiCert Common Mark Certificates',
  'mdm': 'Cloud Mobile Device Management',
  'cloud-mdm': 'Cloud Mobile Device Management',
  'cloud-mobile-device-mgmt': 'Cloud Mobile Device Management',
};

const PRODUCT_ACRONYMS: Readonly<Record<string, string>> = {
  acronis: 'Acronis',
  cloud: 'Cloud',
  dr: 'DR',
  edr: 'EDR',
  email: 'Email',
  file: 'File',
  for: 'for',
  management: 'Management',
  mdr: 'MDR',
  microsoft: 'Microsoft',
  monitoring: 'Monitoring',
  performance: 'Performance',
  recovery: 'Recovery',
  remote: 'Remote',
  service: 'Service',
  sla: 'SLA',
  tally: 'Tally',
  video: 'Video',
  vsaas: 'VSaaS',
  whatsapp: 'WhatsApp',
  xdr: 'XDR',
};

/**
 * The product-aware offer strip that sits between the utility bar and the header.
 */
@Component({
  selector: 'xh-promo-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  template: `
    <div class="promo promo-product" role="region" [attr.aria-label]="'Offer for ' + productName()">
      <span class="promo-check" aria-hidden="true">✓</span>
      <b>{{ productName() }} — free consultation + tailored solution review</b>
      <span class="code">FREE CONSULT</span>
      <span aria-hidden="true">·</span>
      <a href="#" (click)="claimOffer($event)">Claim offer →</a>
    </div>
  `,
  styles: [`
    .promo-product {
      position: relative;
      z-index: 51;
      display: flex;
      min-height: 40px;
      align-items: center;
      justify-content: center;
      gap: 6px;
      flex-wrap: wrap;
      font-weight: 500;
    }
    .promo-product .promo-check {
      display: inline-grid;
      width: 16px;
      height: 16px;
      place-items: center;
      border-radius: 4px;
      background: #2ecc71;
      color: #fff;
      font-size: 11px;
      font-weight: 900;
      line-height: 1;
    }
    .promo-product .code { color: #fff; font-size: 11px; letter-spacing: .04em; }
    .promo-product a { color: #fff; font-weight: 700; text-decoration: underline; text-underline-offset: 2px; }
    @media (max-width: 640px) {
      .promo-product { min-height: 38px; gap: 4px; line-height: 1.35; }
      .promo-product .code { display: none; }
    }
  `],
})
export class PromoBarComponent {
  private readonly router = inject(Router);
  private readonly catalog = inject(CatalogService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  private readonly currentUrl = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly productName = computed(() => {
    const route = this.currentUrl().split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, '');
    const root = route.split('/')[0] ?? '';

    const specialName = SPECIAL_PRODUCT_ROUTES[root];
    if (specialName) return specialName;

    const catalogName = this.catalog.entryBySlug(root)?.name;
    if (catalogName) return catalogName;

    if (root.endsWith('-sla')) {
      return root
        .split('-')
        .map((word) => PRODUCT_ACRONYMS[word] ?? `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
        .join(' ');
    }

    return 'XcellHost Cloud & Security';
  });

  claimOffer(event: Event): void {
    event.preventDefault();
    this.topics.ask(`${this.productName()} offer`);
    this.overlay.open('callback');
  }
}
