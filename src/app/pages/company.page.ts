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
