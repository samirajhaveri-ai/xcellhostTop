import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, afterNextRender, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { OverlayService } from '../core/overlay.service';
import { CaseStudiesApiService } from '../core/case-studies-api.service';
import { SeoService } from '../core/seo.service';

import { CASE_STUDIES, CaseStudy } from '../data/case-studies.data';

interface CaseCategoryBranch {
  readonly name: string;
  readonly count: number;
  readonly children: readonly { readonly name: string; readonly count: number }[];
}

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
  private readonly caseStudiesApi = inject(CaseStudiesApiService);

  readonly studies = toSignal(this.caseStudiesApi.studies$, { initialValue: CASE_STUDIES });
  readonly selectedMain = signal('');
  readonly selectedSub = signal('');
  readonly expandedMain = signal<string | null>(null);
  readonly searchQuery = signal('');

  readonly categoryTree = computed<readonly CaseCategoryBranch[]>(() => {
    const branches = new Map<string, Map<string, number>>();
    for (const study of this.studies()) {
      const children = branches.get(study.mainCategory) ?? new Map<string, number>();
      children.set(study.subCategory, (children.get(study.subCategory) ?? 0) + 1);
      branches.set(study.mainCategory, children);
    }
    return [...branches.entries()].map(([name, children]) => ({
      name,
      count: [...children.values()].reduce((total, count) => total + count, 0),
      children: [...children.entries()].map(([childName, count]) => ({ name: childName, count })),
    }));
  });

  readonly visibleStudies = computed<readonly CaseStudy[]>(() => {
    const query = this.searchQuery().trim().toLowerCase();
    return this.studies().filter((study) => {
      const matchesCategory = !this.selectedMain() || (
        study.mainCategory === this.selectedMain() && (!this.selectedSub() || study.subCategory === this.selectedSub())
      );
      const matchesQuery =
        !query ||
        [
          study.mainCategory,
          study.subCategory,
          study.industry,
          study.profile,
          study.metric,
          study.metricLabel,
          study.summary,
          ...study.services,
        ].some((value) => value.toLowerCase().includes(query));

      return matchesCategory && matchesQuery;
    });
  });

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

  selectAllCategories(): void {
    this.selectedMain.set('');
    this.selectedSub.set('');
    this.expandedMain.set(null);
  }

  selectMainCategory(category: string): void {
    this.selectedMain.set(category);
    this.selectedSub.set('');
    this.expandedMain.update((expanded) => expanded === category ? null : category);
  }

  selectSubCategory(mainCategory: string, subCategory: string): void {
    this.selectedMain.set(mainCategory);
    this.selectedSub.set(subCategory);
    this.expandedMain.set(mainCategory);
  }

  categoryPanelId(category: string): string {
    return `case-category-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;
  }

  searchStudies(event: Event): void {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }
}
