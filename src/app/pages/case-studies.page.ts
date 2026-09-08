import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, afterNextRender, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';

import { CASE_STUDIES, CaseStudy } from '../data/case-studies.data';

@Component({
  selector: 'xh-case-studies-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-studies.page.html',
  styleUrls: ['./case-studies.page.css'],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudiesPage {
  private readonly overlay = inject(OverlayService);
  private readonly seo = inject(SeoService);
  private readonly route = inject(ActivatedRoute);
  private readonly document = inject(DOCUMENT);

  readonly studies = CASE_STUDIES;
  selectedIndustry = 'all';
  searchQuery = '';

  get visibleStudies(): readonly CaseStudy[] {
    const query = this.searchQuery.trim().toLowerCase();

    return this.studies.filter((study) => {
      const matchesIndustry =
        this.selectedIndustry === 'all' || study.industry === this.selectedIndustry;
      const matchesQuery =
        !query ||
        [
          study.industry,
          study.profile,
          study.metric,
          study.metricLabel,
          study.summary,
          ...study.services,
        ].some((value) => value.toLowerCase().includes(query));

      return matchesIndustry && matchesQuery;
    });
  }

  constructor() {
    this.seo.set(
      'Customer Case Studies - XcellHost',
      'See how Indian businesses improved continuity, cloud operations and DPDPA readiness with XcellHost.',
      '/case-studies/',
    );

    // The page is lazy-loaded, so the router can try to resolve the fragment
    // before the case-study articles exist. Scroll again after the first render
    // to ensure a card opens its exact outcome instead of the overview grid.
    afterNextRender(() => {
      const outcomeId = this.route.snapshot.fragment;
      if (!outcomeId) return;

      requestAnimationFrame(() => {
        this.document.getElementById(outcomeId)?.scrollIntoView({ block: 'start' });
      });
    });
  }

  openCallback(): void {
    this.overlay.open('callback');
  }

  filterStudies(event: Event): void {
    this.selectedIndustry = (event.target as HTMLSelectElement).value;
  }

  searchStudies(event: Event): void {
    this.searchQuery = (event.target as HTMLInputElement).value;
  }
}
