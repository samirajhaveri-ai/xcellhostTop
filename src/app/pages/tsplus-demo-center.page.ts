import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import {
  TSPLUS_DEMO_FILTERS,
  TSPLUS_DEMO_VIDEOS,
  TsplusDemoCategory,
} from '../data/tsplus-demo.data';

@Component({
  selector: 'xh-tsplus-demo-center-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tsplus-demo-center.page.html',
  styleUrl: './tsplus-demo-center.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsplusDemoCenterPage {
  private static readonly PAGE_SIZE = 9;

  readonly experiences = TSPLUS_DEMO_VIDEOS;
  readonly filters = TSPLUS_DEMO_FILTERS;
  readonly activeCategory = signal<TsplusDemoCategory | null>(null);
  readonly visibleCount = signal(TsplusDemoCenterPage.PAGE_SIZE);
  readonly filteredExperiences = computed(() => {
    const category = this.activeCategory();
    return this.experiences.filter(experience =>
      !category || experience.category === category,
    );
  });
  readonly visibleExperiences = computed(() =>
    this.filteredExperiences().slice(0, this.visibleCount()),
  );
  readonly hasMoreVideos = computed(() =>
    this.visibleCount() < this.filteredExperiences().length,
  );

  constructor() {
    inject(SeoService).set(
      'TSplus Demo Center | XcellHost',
      'Watch the complete TSplus video library, including Remote Access, Advanced Security, Remote Support, Server Monitoring and tutorials.',
      '/tsplus-demo-center/',
    );
  }

  showMore(): void {
    this.visibleCount.update((count) =>
      Math.min(count + TsplusDemoCenterPage.PAGE_SIZE, this.filteredExperiences().length),
    );
  }

  selectCategory(category: TsplusDemoCategory): void {
    this.activeCategory.set(this.activeCategory() === category ? null : category);
    this.visibleCount.set(TsplusDemoCenterPage.PAGE_SIZE);
  }

  resetFilters(): void {
    this.activeCategory.set(null);
    this.visibleCount.set(TsplusDemoCenterPage.PAGE_SIZE);
  }
}
