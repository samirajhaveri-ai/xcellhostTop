import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { SeoService } from '../core/seo.service';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { ProductFaqComponent } from '../sections/product/product-faq.component';
import { Faq } from '../data/models';

@Component({
  selector: 'xh-trust-center-page',
  standalone: true,
  imports: [InsightsSectionComponent, ProductFaqComponent],
  templateUrl: './trust-center.page.html',
  styleUrl: './trust-center.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrustCenterPage implements OnDestroy {
  private readonly seo = inject(SeoService);
  private frameObserver?: ResizeObserver;

  @ViewChild('trustFrame') private trustFrame?: ElementRef<HTMLIFrameElement>;

  readonly securityRows = [
    ['Information security', 'ISO 27001-certified controls, annual reviews and evidence-backed governance.'],
    ['Service management', 'ISO 20000-1-certified processes for dependable, measurable service delivery.'],
    ['Data protection', 'DPDPA-aligned handling, documented subprocessors and controlled access.'],
    ['Monitoring and response', '24×7 NOC and SOC coverage, centralised logging and incident runbooks.'],
    ['Vulnerability management', 'Continuous detection with risk-based patching and responsible disclosure.'],
    ['Availability', 'Transparent service reporting backed by a 99.95% uptime SLA.'],
  ] as const;

  readonly reasons = [
    { title: '25+ years of experience', body: 'Operating cloud and security services since 1999.', icon: 'M12 8v4l3 2m6-2a9 9 0 11-18 0 9 9 0 0118 0z' },
    { title: 'One accountable team', body: 'Cloud, security, compliance and support under one operating model.', icon: 'M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2m7-10a4 4 0 100-8 4 4 0 000 8zm13 10v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75' },
    { title: 'India-based operations', body: 'Local expertise, INR billing and a Mumbai-based operations team.', icon: 'M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1118 0zM12 7v3m0 4h.01' },
    { title: 'Independent assurance', body: 'Certified management systems supported by reviewable evidence.', icon: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zm-3-10l2 2 4-4' },
    { title: 'Clear responsibility', body: 'See exactly what XcellHost manages and what remains with you.', icon: 'M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11' },
    { title: 'Procurement-ready', body: 'Policies, controls, subprocessors and status information in one place.', icon: 'M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zm0 0v6h6M8 13h8M8 17h8' },
  ] as const;

  readonly reviews = [
    {
      quote: 'The Trust Center gives our reviewers a clear starting point and makes security due diligence much easier to navigate.',
      initials: 'IT',
      name: 'IT Manager',
      role: 'Financial services customer',
    },
    {
      quote: 'We can see the control ownership, certifications and operating practices without chasing information across multiple teams.',
      initials: 'CO',
      name: 'Compliance Officer',
      role: 'Regulated business customer',
    },
    {
      quote: 'The practical detail around monitoring, response and subprocessors helps us assess risk with confidence.',
      initials: 'CT',
      name: 'CTO',
      role: 'Technology customer',
    },
  ] as const;

  readonly faqs: Faq[] = [
    ['What is the XcellHost Trust Center?', 'It is a central view of XcellHost security, compliance, privacy, subprocessors, vulnerability management and service availability information.'],
    ['Which certifications does XcellHost hold?', 'The Trust Center highlights XcellHost\'s ISO 27001 information-security and ISO 20000-1 service-management certifications.'],
    ['Can our security or procurement team request evidence?', 'Yes. Contact the XcellHost team for documents that require controlled access or additional due-diligence support.'],
    ['How does XcellHost handle customer data?', 'Customer data is handled under documented controls covering access, encryption, monitoring, retention and incident response, with responsibilities explained in the Trust Center.'],
    ['Where can I find the subprocessor list?', 'Open the Subprocessors section in the Trust Center to review vendors, processing purposes, data categories and regions.'],
    ['How do I report a security concern?', 'Email security@xcellhost.cloud. Responsible-disclosure reports are acknowledged within two business days.'],
  ];

  constructor() {
    this.seo.set(
      'Trust Center — Security, compliance and operating posture | XcellHost',
      'Review XcellHost security controls, ISO certifications, subprocessors, vulnerability management and availability.',
      '/company/trust-center/',
    );
  }

  onFrameLoad(): void {
    const frame = this.trustFrame?.nativeElement;
    const document = frame?.contentDocument;
    if (!frame || !document) return;

    const resize = () => {
      const height = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
      frame.style.height = `${height}px`;
    };

    resize();
    this.frameObserver?.disconnect();
    this.frameObserver = new ResizeObserver(resize);
    this.frameObserver.observe(document.documentElement);

    document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const section = link.hash.slice(1);
        if (!section || !document.getElementById(section)) return;
        event.preventDefault();
        this.openTrustSection(section);
      });
    });
  }

  openTrustSection(section: string): void {
    const frame = this.trustFrame?.nativeElement;
    const document = frame?.contentDocument;
    const target = document?.getElementById(section);
    if (!frame || !document || !target) return;

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    const top = window.scrollY + frame.getBoundingClientRect().top + target.getBoundingClientRect().top - 88;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  ngOnDestroy(): void {
    this.frameObserver?.disconnect();
  }
}
