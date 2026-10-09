import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';

import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';
import { Faq } from '../data/models';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { ProductFaqComponent } from '../sections/product';
import { SmbSectionNavComponent, SmbSectionNavLink } from '../sections/smb-section-nav.component';

type ValidationType = 'dv' | 'ov';

@Component({
  selector: 'xh-acme-certificate-page',
  standalone: true,
  imports: [InsightsSectionComponent, ProductFaqComponent, SmbSectionNavComponent],
  templateUrl: './acme-certificate.page.html',
  styleUrl: './acme-certificate.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcmeCertificatePage {
  private readonly seo = inject(SeoService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  readonly selectedStep = signal(0);
  readonly validation = signal<ValidationType>('dv');
  readonly domains = signal(5);
  readonly term = signal(1);

  readonly sectionNavLinks: readonly SmbSectionNavLink[] = [
    { label: 'Overview', target: 'overview' },
    { label: 'Pricing', target: 'pricing' },
    { label: 'Security', target: 'security-compliance' },
    { label: 'Why to Choose', target: 'why-acme' },
    { label: 'Features', target: 'how' },
    { label: 'Customer Testimonials', target: 'testimonials' },
    { label: 'FAQs', target: 'faqs' },
    { label: 'Insights', target: 'insights' },
  ];

  readonly faqs: Faq[] = [
    ['What does ACME stand for?', 'ACME stands for Automated Certificate Management Environment. It is the RFC 8555 protocol that lets software request, validate, install and renew SSL/TLS certificates automatically.'],
    ['Does Sectigo ACME require External Account Binding?', 'Yes. Sectigo uses an EAB key ID and HMAC token to connect your ACME client securely to the paid subscription in your XcellHost account.'],
    ['Which ACME clients can I use?', 'You can use any RFC 8555-compatible client, including Certbot, cert-manager, acme.sh, lego, win-acme, Certify The Web, Posh-ACME and dehydrated.'],
    ['Can ACME secure internal servers?', 'Yes. DNS-01 validation works for internal services and private endpoints that are not publicly reachable, as long as the required DNS record can be created.'],
    ['What happens if an automatic renewal fails?', 'The client retries automatically and can send alerts. XcellHost support can investigate validation, DNS, permissions or web-server configuration before the certificate expires.'],
    ['Can I use one subscription on multiple servers?', 'Yes. The ACME plans include unlimited server installations and free reissues for the covered domains during the subscription term.'],
    ['What is the difference between DV and OV?', 'DV verifies control of the domain and is issued quickly. OV also verifies the legal organisation, making it suitable for customer-facing portals, ecommerce and B2B services.'],
    ['Will XcellHost configure ACME for us?', 'Yes. We can install the client, configure EAB and HTTP-01 or DNS-01 validation, complete the first issuance and confirm automatic renewal with your team.'],
  ];

  readonly certificates = [
    { domain: 'shop.yourbrand.in', type: 'DV', challenge: 'HTTP-01', days: 62 },
    { domain: 'portal.yourbrand.co.in', type: 'OV', challenge: 'DNS-01', days: 34 },
    { domain: 'api.yourbrand.in', type: 'DV', challenge: 'HTTP-01', days: 81 },
    { domain: 'erp.internal.yourbrand.in', type: 'OV', challenge: 'DNS-01', days: 47 },
  ];

  readonly steps = [
    {
      title: 'Set up your ACME client',
      summary: 'Install once on each server',
      description: 'Install an RFC 8555-compatible client on every server, VM or container host that will hold a certificate.',
      points: ['Certbot, cert-manager, acme.sh and win-acme supported', 'Works across Linux, Windows and Kubernetes', 'XcellHost can install it with you'],
      command: 'sudo apt install certbot python3-certbot-nginx',
    },
    {
      title: 'Register with EAB credentials',
      summary: 'Link the client to your account',
      description: 'External Account Binding securely connects the ACME client to your paid Sectigo subscription.',
      points: ['EAB key ID and HMAC token per deployment', 'One-time registration per client', 'Credentials remain on your server'],
      command: 'certbot register --server https://acme.sectigo.com/v2/DV --eab-kid "$EAB_KID" --eab-hmac-key "$EAB_HMAC"',
    },
    {
      title: 'Prove domain ownership',
      summary: 'Complete HTTP-01 or DNS-01',
      description: 'Sectigo asks the client to prove control of the domain using a short-lived HTTP token or DNS TXT record.',
      points: ['HTTP-01 for public web servers', 'DNS-01 for private hosts and wildcards', 'Usually completes in seconds'],
      command: 'certbot certonly --nginx -d yourbrand.in -d www.yourbrand.in',
    },
    {
      title: 'Certificate issued',
      summary: 'Signed and delivered in minutes',
      description: 'After validation, Sectigo returns the signed certificate directly to the client—without email or manual downloads.',
      points: ['SHA-256 signature', 'RSA 2048+ or ECC 256+', 'Unlimited free reissues'],
      command: 'Certificate saved to /etc/letsencrypt/live/yourbrand.in/fullchain.pem',
    },
    {
      title: 'Installed and live',
      summary: 'Configured for your web server',
      description: 'The client installs the files, updates the server configuration and performs a graceful reload.',
      points: ['Apache, NGINX, IIS, Caddy, cPanel and Plesk', 'Graceful reload with zero downtime', 'HTTPS live on every listed host'],
      command: 'certbot install --nginx --cert-name yourbrand.in && systemctl reload nginx',
    },
    {
      title: 'Renews on its own',
      summary: 'Before expiry, every time',
      description: 'A scheduled job checks regularly and repeats validation, issuance and installation before the certificate expires.',
      points: ['Renews around 30 days before expiry', 'Alerts if a renewal fails', 'Runs throughout the subscription term'],
      command: 'certbot renew --dry-run',
    },
  ];

  readonly unitPrice = computed(() => (this.validation() === 'dv' ? 1699 : 7499));
  readonly listPrice = computed(() => this.unitPrice() * this.domains() * this.term());
  readonly discountRate = computed(() => (this.term() === 2 ? 0.1 : this.term() === 3 ? 0.15 : 0));
  readonly saving = computed(() => Math.round(this.listPrice() * this.discountRate()));
  readonly subtotal = computed(() => this.listPrice() - this.saving());
  readonly gst = computed(() => Math.round(this.subtotal() * 0.18));
  readonly payable = computed(() => this.subtotal() + this.gst());

  constructor() {
    this.seo.set(
      'ACME SSL Certificates | Automated DV & OV Renewal | XcellHost',
      'Automate Sectigo DV and OV certificate issuance, installation and renewal with ACME, EAB credentials and expert setup from XcellHost.',
      '/acme-certificate/',
    );
  }

  selectValidation(value: ValidationType): void {
    this.validation.set(value);
  }

  selectTerm(value: number): void {
    this.term.set(value);
  }

  updateDomains(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    this.domains.set(Math.min(100, Math.max(1, value)));
  }

  formatInr(value: number): string {
    return new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(value);
  }

  requestCallback(topic = 'ACME Certificate'): void {
    this.topics.ask(topic);
    this.overlay.open('callback');
  }
}
