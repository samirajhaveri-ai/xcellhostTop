import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { ACRONIS_DEMO_VIDEOS, AcronisDemoVideo } from '../data/acronis-demo.data';

type SortMode = 'recent' | 'popular';

interface AcronisVideoView extends AcronisDemoVideo {
  readonly embedUrl: SafeResourceUrl;
  readonly thumbnailUrl: string;
}

@Component({
  selector: 'xh-acronis-demo-center-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './acronis-demo-center.page.html',
  styleUrl: './acronis-demo-center.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcronisDemoCenterPage {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly pageSize = 12;

  readonly searchTerm = signal('');
  readonly selectedAudience = signal('');
  readonly selectedProduct = signal('');
  readonly selectedPurpose = signal('');
  readonly selectedCapability = signal('');
  readonly selectedTopic = signal('');
  readonly sortMode = signal<SortMode>('recent');
  readonly visibleCount = signal(this.pageSize);
  readonly activeVideoId = signal<string | null>(null);

  readonly videos: readonly AcronisVideoView[] = ACRONIS_DEMO_VIDEOS.map((video) => ({
    ...video,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
    embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&playsinline=1`,
    ),
  }));

  readonly audiences = this.collectOptions('audiences');
  readonly products = this.collectOptions('products');
  readonly purposes = this.collectOptions('purposes');
  readonly capabilities = this.collectOptions('capabilities');
  readonly topics = this.collectOptions('topics');

  readonly filteredVideos = computed(() => {
    const search = this.searchTerm().trim().toLocaleLowerCase();
    const audience = this.selectedAudience();
    const product = this.selectedProduct();
    const purpose = this.selectedPurpose();
    const capability = this.selectedCapability();
    const topic = this.selectedTopic();

    const results = this.videos.filter((video) => {
      const searchableText = [
        video.title,
        ...video.audiences,
        ...video.products,
        ...video.purposes,
        ...video.capabilities,
        ...video.topics,
      ]
        .join(' ')
        .toLocaleLowerCase();

      return (
        (!search || searchableText.includes(search)) &&
        (!audience || video.audiences.includes(audience)) &&
        (!product || video.products.includes(product)) &&
        (!purpose || video.purposes.includes(purpose)) &&
        (!capability || video.capabilities.includes(capability)) &&
        (!topic || video.topics.includes(topic))
      );
    });

    return [...results].sort((left, right) =>
      this.sortMode() === 'popular'
        ? right.views - left.views
        : right.publishedAt.localeCompare(left.publishedAt),
    );
  });

  readonly visibleVideos = computed(() => this.filteredVideos().slice(0, this.visibleCount()));
  readonly hasMoreVideos = computed(() => this.visibleCount() < this.filteredVideos().length);
  readonly filtersAreActive = computed(
    () =>
      Boolean(this.searchTerm()) ||
      Boolean(this.selectedAudience()) ||
      Boolean(this.selectedProduct()) ||
      Boolean(this.selectedPurpose()) ||
      Boolean(this.selectedCapability()) ||
      Boolean(this.selectedTopic()),
  );

  constructor() {
    inject(SeoService).set(
      'Acronis Demo Center | Product Videos | XcellHost',
      'Watch the complete Acronis video demo catalog for backup, disaster recovery, cybersecurity, endpoint management and home protection.',
      '/acronis-demo-center/',
    );
  }

  setSearch(value: string): void {
    this.searchTerm.set(value);
    this.resetResults();
  }

  setAudience(value: string): void {
    this.selectedAudience.set(value);
    this.resetResults();
  }

  setProduct(value: string): void {
    this.selectedProduct.set(value);
    this.resetResults();
  }

  setPurpose(value: string): void {
    this.selectedPurpose.set(value);
    this.resetResults();
  }

  setCapability(value: string): void {
    this.selectedCapability.set(value);
    this.resetResults();
  }

  setTopic(value: string): void {
    this.selectedTopic.set(value);
    this.resetResults();
  }

  setSort(value: string): void {
    this.sortMode.set(value === 'popular' ? 'popular' : 'recent');
    this.resetResults();
  }

  playVideo(videoId: string): void {
    this.activeVideoId.set(videoId);
  }

  showMore(): void {
    this.visibleCount.update((count) => count + this.pageSize);
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedAudience.set('');
    this.selectedProduct.set('');
    this.selectedPurpose.set('');
    this.selectedCapability.set('');
    this.selectedTopic.set('');
    this.resetResults();
  }

  private resetResults(): void {
    this.visibleCount.set(this.pageSize);
    this.activeVideoId.set(null);
  }

  private collectOptions(
    key: 'audiences' | 'products' | 'purposes' | 'capabilities' | 'topics',
  ): readonly string[] {
    return [...new Set(ACRONIS_DEMO_VIDEOS.flatMap((video) => video[key]))].sort((a, b) =>
      a.localeCompare(b),
    );
  }
}
