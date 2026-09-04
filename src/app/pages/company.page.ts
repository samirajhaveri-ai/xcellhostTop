import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { SeoService } from '../core/seo.service';
import { COMPANY_PAGES } from '../data/company.data';
import { WORLD_MAP_HTML } from '../data/site.data';
import { HeroNetDirective } from '../sections/product';

@Component({
  selector: 'xh-company-page',
  standalone: true,
  imports: [RouterLink, HeroNetDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './company.page.html',
  styleUrl: './company.page.css',
})
export class CompanyPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  readonly page = computed(() => COMPANY_PAGES[this.slug()] ?? null);
  readonly worldMap: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(WORLD_MAP_HTML);

  readonly founder = {
    name: 'Dr. Samir Jhaveri',
    role: 'Managing Director, XcellHost Cloud Services Pvt. Ltd.',
    specialties: 'Cloud, cybersecurity, AI and digital marketing',
    summary:
      'A long-time technology leader with over two decades in the industry, guiding XcellHost since 1999 and helping SMBs and enterprises simplify cloud operations.',
    note:
      'Our approach is simple: give customers practical guidance, deliver what was promised and stay accountable after go-live.',
  } as const;

  readonly managementTeam = [
    { initials: 'YJ', name: 'Yogendra Jagger', role: 'Regional Director - Middle East & Africa', image: '/assets/images/team-yogendra-jagger.png' },
    { initials: 'JP', name: 'Jaynam Pandya', role: 'Chief Marketing Officer', image: '/assets/images/team-jaynam-pandya.png' },
    { initials: 'AN', name: 'Abhishek Nimbalkar', role: 'Chief AI Officer', image: '/assets/images/team-abhishek-nimbalkar.jpg' },
    { initials: 'PN', name: 'Prashant N.V', role: 'Service Delivery Director', image: '/assets/images/team-prashant-nv.png' },
  ] as const;

  readonly advisoryTeam = [
    { initials: 'SJ', name: 'Suraj Jain', role: 'Financial Advisor', image: '/assets/images/team-suraj-jain.png' },
    { initials: 'SM', name: 'Surendra Mehra', role: 'Chartered Accountant', image: '/assets/images/team-surendra-mehra.png' },
  ] as const;

  readonly salesTeam = [
    { initials: 'SJ', name: 'Sanjay Jade', role: 'Accounts Payable Manager', image: '/assets/images/team-sanjay-jade.png' },
    { initials: 'RS', name: 'Rizwan Shaikh', role: 'Cloud Pre-Sales Manager', image: '/assets/images/team-rizwan-shaikh.png' },
    { initials: 'AP', name: 'Abhishek Pandey', role: 'Cloud Sales Manager', image: '/assets/images/team-abhishek-pandey.png' },
  ] as const;

  readonly values = [
    { title: 'Teamwork', body: 'We work across functions so customers get one coordinated answer.' },
    { title: 'Integrity', body: 'We say what we can do, do what we say and keep the record clear.' },
    { title: 'Respect', body: 'People and customer situations are handled with care and fairness.' },
    { title: 'Diligence', body: 'The small details matter, especially in operational work that others depend on.' },
  ] as const;

  readonly commitmentStats = [
    { value: '1999', label: 'Serving customers since' },
    { value: '10,000+', label: 'Businesses supported' },
    { value: '24x7', label: 'Monitoring and response' },
    { value: '1 team', label: 'For cloud, security and support' },
  ] as const;

  readonly contactCards = [
    {
      label: 'Call us',
      value: '+91 22 6711 1555',
      note: 'Best for sales, service guidance and urgent issues.',
      href: 'tel:+912267111555',
    },
    {
      label: 'Email us',
      value: 'sales@xcellhost.cloud',
      note: 'For a project conversation or written details.',
      href: 'mailto:sales@xcellhost.cloud',
    },
    {
      label: 'WhatsApp',
      value: '+91 86570 32540',
      note: 'Fastest route for a quick introduction.',
      href: 'https://wa.me/918657032540',
    },
  ] as const;

  readonly certifications = [
    {
      title: 'ISO/IEC 27001:2013',
      type: 'Information Security Management System',
      image: '/assets/images/company-recognition/iso-27001-certificate.jpg',
      alt: 'XcellHost ISO IEC 27001:2013 certificate',
    },
    {
      title: 'ISO/IEC 20000-1:2018',
      type: 'IT Service Management System',
      image: '/assets/images/company-recognition/iso-20000-certificate.jpg',
      alt: 'XcellHost ISO IEC 20000-1:2018 certificate',
    },
    {
      title: 'Honorary Doctorate in Artificial Intelligence',
      type: 'Leadership recognition · Samir Jhaveri, Managing Director',
      image: '/assets/images/company-recognition/ai-certification.jpeg',
      alt: 'Honorary Doctorate in Artificial Intelligence awarded to Samir Jhaveri',
    },
  ] as const;

  readonly awards = [
    { title: 'Emerging Partner of the Year', image: '/assets/images/company-recognition/emerging-partner-of-the-year.png' },
    { title: 'Asian-African', image: '/assets/images/company-recognition/asian-african.png' },
    { title: 'IT Expo', image: '/assets/images/company-recognition/it-expo.png' },
    { title: 'Kaspersky', image: '/assets/images/company-recognition/kaspersky.png' },
    { title: 'India Summit 2023', image: '/assets/images/company-recognition/india-summit-2023.png' },
    { title: 'TAIT Membership', image: '/assets/images/company-recognition/tait-membership.png' },
    { title: 'Graham', image: '/assets/images/company-recognition/graham.png' },
    { title: 'Summit & Awards 2018', image: '/assets/images/company-recognition/summit-awards-2018.png' },
    { title: 'The Institute of Cost Accountants of India', image: '/assets/images/company-recognition/institute-cost-accountants-india.png' },
  ] as const;

  constructor() {
    effect(() => {
      const page = this.page();
      if (!page) {
        void this.router.navigate(['/']);
        return;
      }
      this.seo.set(`${page.title} — XcellHost`, page.tagline, `/company/${this.slug()}/`);
    });
  }
}
