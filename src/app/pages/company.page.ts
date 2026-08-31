import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { map } from 'rxjs';

import { SeoService } from '../core/seo.service';
import { COMPANY_PAGES } from '../data/company.data';

@Component({
  selector: 'xh-company-page',
  standalone: true,
  imports: [RouterLink],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './company.page.html',
  styleUrl: './company.page.css',
})
export class CompanyPage {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly seo = inject(SeoService);

  readonly slug = toSignal(
    this.route.paramMap.pipe(map((params) => params.get('slug') ?? '')),
    { initialValue: '' },
  );

  readonly page = computed(() => COMPANY_PAGES[this.slug()] ?? null);

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
