import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { SeoService } from '../core/seo.service';
import { ProductPage } from './product.page';

type CertificateTier = 'DV' | 'OV' | 'EV';
type CertificateFilter = 'all' | CertificateTier | 'Wildcard' | 'Multi';

interface GeoTrustProduct {
  id: string;
  name: string;
  tier: CertificateTier;
  tags: Array<'Wildcard' | 'Multi'>;
  warranty: string;
  issue: string;
  prices: [number, number, number];
  desc: string;
  features: string[];
}

@Component({
  selector: 'xh-geotrust-ssl-certificates-page',
  standalone: true,
  imports: [ProductPage],
  templateUrl: './geotrust-ssl-certificates.page.html',
  styleUrl: './geotrust-ssl-certificates.page.css',
  host: { class: 'geotrust-page' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeoTrustSslCertificatesPage {
  private readonly seo = inject(SeoService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  readonly filter = signal<CertificateFilter>('all');
  readonly filters: Array<{ value: CertificateFilter; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'DV', label: 'DV' },
    { value: 'OV', label: 'OV' },
    { value: 'EV', label: 'EV' },
    { value: 'Wildcard', label: 'Wildcard' },
    { value: 'Multi', label: 'Multi-Domain' },
  ];

  readonly products: GeoTrustProduct[] = [
    { id: 'tb-ev-flex', name: 'GeoTrust TrueBusiness ID EV (FLEX)', tier: 'EV', tags: ['Multi'], warranty: '$1.75M', issue: '1–5 days', prices: [18999, 17999, 16999], desc: 'Green-bar Extended Validation with flexible SAN support.', features: ['Highest assurance EV', 'Up to 250 SAN domains', 'Free reissues for life'] },
    { id: 'tb-ov-flex', name: 'GeoTrust TrueBusiness ID OV (FLEX)', tier: 'OV', tags: ['Multi'], warranty: '$1.75M', issue: '1–3 days', prices: [12999, 12299, 11999], desc: 'Business-validated OV certificate with SAN flexibility.', features: ['Organization validated', 'Add SAN domains anytime', '256-bit encryption'] },
    { id: 'dv-flex', name: 'GeoTrust DV SSL (FLEX)', tier: 'DV', tags: ['Multi'], warranty: '$500K', issue: 'Minutes', prices: [6999, 6499, 5999], desc: 'Fast domain-validated SSL, issued in minutes.', features: ['Issued within minutes', 'Add SAN domains', 'Auto browser padlock'] },
    { id: 'quick-san', name: 'GeoTrust QuickSSL Premium SAN', tier: 'DV', tags: ['Multi'], warranty: '$500K', issue: 'Minutes', prices: [12999, 11999, 10999], desc: 'Quick multi-domain DV coverage for several sites.', features: ['Secure multiple domains', 'Rapid issuance', '256-bit encryption'] },
    { id: 'quick-premium', name: 'GeoTrust QuickSSL Premium', tier: 'DV', tags: [], warranty: '$500K', issue: 'Minutes', prices: [6999, 6499, 5999], desc: 'The classic fast, single-domain DV certificate.', features: ['Single domain', 'Issued in minutes', 'Trusted padlock'] },
    { id: 'quick-wild', name: 'GeoTrust QuickSSL Premium Wildcard', tier: 'DV', tags: ['Wildcard'], warranty: '$500K', issue: 'Minutes', prices: [28999, 27499, 25999], desc: 'Secure unlimited subdomains under one DV wildcard.', features: ['Unlimited subdomains', 'One cert, many hosts', 'Fast issuance'] },
    { id: 'tb-id', name: 'GeoTrust True BusinessID', tier: 'OV', tags: [], warranty: '$1.25M', issue: '1–3 days', prices: [16999, 15999, 14999], desc: 'Established OV certificate for business websites.', features: ['Organization validated', 'Business shown in cert', '$1.25M warranty'] },
    { id: 'tb-md', name: 'GeoTrust True BusinessID Multi-Domain', tier: 'OV', tags: ['Multi'], warranty: '$1.25M', issue: '1–3 days', prices: [19999, 18999, 17999], desc: 'OV assurance across multiple domains in one cert.', features: ['Secure many domains', 'Business validated', 'Central management'] },
    { id: 'tb-ev', name: 'GeoTrust True BusinessID with EV', tier: 'EV', tags: [], warranty: '$1.5M', issue: '1–5 days', prices: [22999, 21999, 20999], desc: 'Extended Validation for maximum single-site trust.', features: ['Highest buyer trust', 'Rigorous EV vetting', '$1.5M warranty'] },
    { id: 'tb-ev-md', name: 'GeoTrust TrueBusiness ID w/ EV Multi-Domain', tier: 'EV', tags: ['Multi'], warranty: '$1.5M', issue: '1–5 days', prices: [27999, 26999, 25999], desc: 'EV trust across several domains at once.', features: ['EV across domains', 'Maximum assurance', 'Ideal for e-commerce'] },
    { id: 'tb-wild', name: 'GeoTrust True BusinessID Wildcard', tier: 'OV', tags: ['Wildcard'], warranty: '$1.25M', issue: '1–3 days', prices: [49999, 47999, 45999], desc: 'OV wildcard securing unlimited subdomains.', features: ['Unlimited subdomains', 'Organization validated', '$1.25M warranty'] },
  ];

  readonly visibleProducts = computed(() => {
    const selected = this.filter();
    if (selected === 'all') return this.products;
    return this.products.filter((product) => product.tier === selected || product.tags.includes(selected as 'Wildcard' | 'Multi'));
  });

  constructor() {
    this.seo.set(
      'GeoTrust SSL Certificates in India — DV, OV & EV | XcellHost',
      'Buy GeoTrust DV, OV and EV SSL/TLS certificates in India with free installation, SSL automation and GST invoice by XcellHost.',
      '/geotrust-ssl-certificates/',
    );
  }

  inr(value: number): string {
    return '₹' + value.toLocaleString('en-IN');
  }

  configure(product: GeoTrustProduct): void {
    this.topics.ask(product.name);
    this.overlay.open('callback');
  }

  requestCallback(event: Event): void {
    event.preventDefault();
    this.topics.ask('GeoTrust SSL certificate');
    this.overlay.open('callback');
  }

  toggleFaq(event: Event): void {
    const button = event.currentTarget as HTMLElement;
    const item = button.closest<HTMLElement>('.faq2');
    if (!item) return;
    const answer = item.querySelector<HTMLElement>('.faq2-a');
    const isOpen = item.classList.toggle('open');
    if (answer) answer.style.maxHeight = isOpen ? answer.scrollHeight + 'px' : '0';
  }
}
