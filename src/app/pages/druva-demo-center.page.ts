import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { DRUVA_DEMO_VIDEOS, DruvaDemoVideo } from '../data/druva-demo.data';

type SortMode = 'featured' | 'title';
type PlayableDruvaVideo = DruvaDemoVideo & { readonly embedUrl: SafeResourceUrl };

const WISTIA_MEDIA_IDS: Record<number, string> = {
  1: '9z4ncl2pyz', 2: 'wjo83ovvv3', 3: 'ph1mbl6nig', 4: 's69w3k6vhw',
  5: 'gskajw130m', 6: 'lsf97gj4mk', 7: 'bect6om3ys', 8: 'pomhvc8kjv',
  9: '4d0av6htn3', 10: 'jsd1jed3t5', 11: 'ewzql05w3f', 12: 'ck8lj6b3ub',
  13: 'pwvjj32jqb', 14: 'jslkvbwz9w', 15: '7moctxhr4m', 16: 'fbdpyy7bfj',
  17: 'dvx5gy00ej', 18: 'jwrsl5sjr8', 19: '41s4anp50x', 20: 'n4nomi19gh',
  21: '41bgejnkd9', 22: '83uhw512hx', 23: '3yudz16g62',
};

@Component({
  selector: 'xh-druva-demo-center-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './druva-demo-center.page.html',
  styleUrls: ['./druva-demo-center.page.css', './druva-demo-center.player.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DruvaDemoCenterPage {
  private readonly pageSize = 12;
  private readonly sanitizer = inject(DomSanitizer);

  readonly searchTerm = signal('');
  readonly selectedType = signal('');
  readonly selectedWorkload = signal('');
  readonly selectedTopic = signal('');
  readonly sortMode = signal<SortMode>('featured');
  readonly visibleCount = signal(this.pageSize);
  readonly activeVideoId = signal<number | null>(null);
  readonly videos: readonly PlayableDruvaVideo[] = DRUVA_DEMO_VIDEOS.map((video) => ({
    ...video,
    embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://fast.wistia.net/embed/iframe/${WISTIA_MEDIA_IDS[video.id]}?seo=true&videoFoam=true&autoPlay=true`,
    ),
  }));

  readonly types = [...new Set(this.videos.map((video) => video.type))].sort();
  readonly workloads = [...new Set(this.videos.flatMap((video) => video.workloads))].sort();
  readonly topics = [...new Set(this.videos.flatMap((video) => video.topics))].sort();

  readonly filteredVideos = computed(() => {
    const search = this.searchTerm().trim().toLocaleLowerCase();
    const type = this.selectedType();
    const workload = this.selectedWorkload();
    const topic = this.selectedTopic();
    const results = this.videos.filter((video) => {
      const text = [video.title, video.description, ...video.workloads, ...video.topics]
        .join(' ')
        .toLocaleLowerCase();
      return (
        (!search || text.includes(search)) &&
        (!type || video.type === type) &&
        (!workload || video.workloads.includes(workload)) &&
        (!topic || video.topics.includes(topic))
      );
    });
    return this.sortMode() === 'title'
      ? [...results].sort((left, right) => left.title.localeCompare(right.title))
      : results;
  });

  readonly visibleVideos = computed(() => this.filteredVideos().slice(0, this.visibleCount()));
  readonly hasMoreVideos = computed(() => this.visibleCount() < this.filteredVideos().length);
  readonly filtersAreActive = computed(
    () => Boolean(this.searchTerm() || this.selectedType() || this.selectedWorkload() || this.selectedTopic()),
  );

  constructor() {
    inject(SeoService).set(
      'Druva Demo Center | Product Videos | XcellHost',
      'Explore Druva cyber resilience, cloud backup, recovery, AI, Microsoft 365, VMware and data protection videos.',
      '/druva-demo-center/',
    );
  }

  setSearch(value: string): void { this.searchTerm.set(value); this.resetResults(); }
  setType(value: string): void { this.selectedType.set(value); this.resetResults(); }
  setWorkload(value: string): void { this.selectedWorkload.set(value); this.resetResults(); }
  setTopic(value: string): void { this.selectedTopic.set(value); this.resetResults(); }
  setSort(value: string): void { this.sortMode.set(value === 'title' ? 'title' : 'featured'); this.resetResults(); }
  showMore(): void { this.visibleCount.update((count) => count + this.pageSize); }
  playVideo(id: number): void { this.activeVideoId.set(id); }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedType.set('');
    this.selectedWorkload.set('');
    this.selectedTopic.set('');
    this.resetResults();
  }

  private resetResults(): void { this.visibleCount.set(this.pageSize); this.activeVideoId.set(null); }
}
