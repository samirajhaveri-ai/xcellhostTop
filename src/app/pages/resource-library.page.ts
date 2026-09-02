import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';

interface ResourcePageData {
  title: string;
  description: string;
  kind: 'offers' | 'document';
  assetFolder?: string;
  pageCount?: number;
}

interface Promotion { title: string; description: string; badge?: string; details?: string[]; price: string; unit?: string; }

@Component({
  selector: 'xh-resource-library-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './resource-library.page.html',
  styleUrl: './resource-library.page.css',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourceLibraryPage {
  private readonly route = inject(ActivatedRoute);
  private readonly seo = inject(SeoService);

  readonly page = this.route.snapshot.data as ResourcePageData;
  readonly pages = Array.from({ length: this.page.pageCount ?? 0 }, (_, index) => index + 1);
  currentPage = 1;

  readonly promotions: Promotion[] = [
    { title: 'Domains', description: 'Security for you and your customers. Find the right hosting for your domain and add professional email.', badge: 'Get 20% discount', price: '₹555', unit: 'per domain/year' },
    { title: 'Web Hosting', description: 'Blazing-fast web hosting with free storage, migration, DDoS protection and a free site builder.', badge: 'Get 20% discount', price: '₹189', unit: 'per website/month' },
    { title: 'SSL Certificates', description: 'Protect your website and customer information with trusted SSL certificates.', badge: 'Get 20% discount', price: '₹2,999', unit: 'per domain/year' },
    { title: 'WhatsApp Marketing', description: 'A smart WhatsApp Business API platform designed to grow your business.', badge: 'Get 20% discount', price: '₹1,499', unit: 'per account/month' },
    { title: 'E-Commerce Storefront', description: 'Get your ecommerce store online within 15 days.', badge: 'Get 20% discount', details: ['Easy to use', 'Customizable designs', 'No hosting issues', 'SEO friendly', 'Own payment gateway'], price: 'Call Sales' },
    { title: 'Secure Tally On Cloud', description: 'Access Tally anywhere, anytime and on any OS or device, including TSplus and a Windows licence.', badge: 'Most popular', price: '₹499', unit: 'per user/month' },
    { title: 'Secure Backup Cloud', description: 'Fast, powerful, integrated Backup-as-a-Service that puts you in control.', badge: 'Best seller', price: '₹6', unit: 'per GB/month' },
    { title: 'Secure File Cloud', description: 'Enterprise file sync and share with direct access through web, mobile and desktop.', badge: 'Ask for a free demo', price: '₹2,999', unit: '250 GB with unlimited users' },
    { title: 'Kaspersky Security Cloud', description: 'Advanced endpoint protection for devices, laptops, desktops and servers, including privacy and digital identity.', badge: 'Ask for a free trial', price: '₹799', unit: 'per user/year' },
    { title: 'Remote Access Software', description: 'A simple, value-for-money remote access alternative to Citrix and RDS.', badge: 'Ask for a free trial', price: '₹175', unit: 'per user/month' },
    { title: 'Business Class Email', description: 'An M365 and Google Workspace alternative with DKIM, SPF, DMARC, anti-ransomware, anti-spam and anti-phishing.', badge: 'Ask for a free demo', price: '₹349', unit: 'per user/month' },
    { title: 'Managed Microsoft 365', description: '24×7 help desk support delivered by Microsoft-certified experts.', badge: 'Ask for a free consultation', details: ['Business Basic', 'Business Standard', 'Business Premium', 'Apps for Business'], price: 'Call Sales', unit: 'per user/month' },
    { title: 'Advanced Email Security', description: 'Protection against malware, ransomware, phishing, zero-day attacks, BEC and APTs.', badge: 'Ask for a free trial', price: '₹149', unit: 'per user/month' },
    { title: 'Cloud Email Backup & Archiving', description: 'Unlimited storage and retention with one-click restore and download.', badge: 'Ask for a free trial', details: ['Email backup: ₹159 per mailbox/month', 'Email archiving: ₹159 per mailbox/month'], price: '₹159', unit: 'per mailbox/month' },
    { title: 'Cloud CCTV Platform', description: 'A cloud video-management system compatible with all camera brands.', badge: 'Ask for a free demo', price: 'Call Sales' },
    { title: 'Performance Cloud', description: 'High-performance cloud infrastructure at up to 50% less than AWS or Azure.', badge: 'Most popular', price: '₹499', unit: 'per server/month' },
    { title: 'Bare Metal Cloud', description: 'Super-fast, dedicated high-performance servers with straightforward pricing.', badge: 'Call for best pricing', price: '₹9,999', unit: 'per server/month' },
    { title: 'GPU Cloud', description: 'Access the power of NVIDIA GPUs for AI and machine-learning workloads.', badge: 'Ask for a free demo', price: '₹14,999', unit: 'per server/month' },
    { title: 'Managed Colocation', description: '24×7 managed security, backup and DBA services in a Tier IV data centre with a 99.99% uptime SLA.', badge: 'Ask for a free trial', price: 'Call Sales', unit: 'per server/month' },
    { title: 'Cloud Object Storage', description: 'Cut cloud storage costs by up to 50% with free egress and unlimited bandwidth.', badge: 'Ask for a free quote', details: ['IP camera backup', 'NAS backup'], price: '₹1.25', unit: 'per GB/month' },
  ];

  get pageImage(): string {
    return `/assets/resources/${this.page.assetFolder}/page-${this.currentPage.toString().padStart(2, '0')}.webp`;
  }

  previousPage(): void { this.currentPage = Math.max(1, this.currentPage - 1); this.scrollToReader(); }
  nextPage(): void { this.currentPage = Math.min(this.page.pageCount ?? 1, this.currentPage + 1); this.scrollToReader(); }
  selectPage(event: Event): void { this.currentPage = Number((event.target as HTMLSelectElement).value); this.scrollToReader(); }
  private scrollToReader(): void { document.querySelector('.document-reader')?.scrollIntoView({ behavior: 'smooth', block: 'start' }); }

  constructor() {
    this.seo.set(
      `${this.page.title} - XcellHost`,
      this.page.description,
      `/${this.route.snapshot.routeConfig?.path ?? ''}/`,
    );
  }
}
