import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { EMAIL_SIGNATURE_VIDEOS } from '../data/email-signature-videos.data';

@Component({
  selector: 'xh-email-signature-demo-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './email-signature-demo.page.html',
  styleUrls: ['./acronis-demo-center.page.css', './email-signature-demo.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailSignatureDemoPage {
  private readonly sanitizer = inject(DomSanitizer);
  readonly searchTerm = signal('');
  readonly selectedTopic = signal('');
  readonly sortMode = signal('featured');
  readonly visibleCount = signal(6);
  readonly activeVideoId = signal<string | null>(null);
  readonly topics = [...new Set(EMAIL_SIGNATURE_VIDEOS.map(video => video.topic))];
  readonly videos = EMAIL_SIGNATURE_VIDEOS.map(video => ({
    ...video,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
    watchUrl: `https://www.youtube.com/watch?v=${video.videoId}`,
    embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&playsinline=1`,
    ),
  }));
  readonly filteredVideos = computed(() => {
    const search = this.searchTerm().trim().toLowerCase();
    const videos = this.videos.filter(video =>
      (!this.selectedTopic() || video.topic === this.selectedTopic()) &&
      (!search || `${video.title} ${video.topic}`.toLowerCase().includes(search)),
    );
    return this.sortMode() === 'title'
      ? [...videos].sort((a, b) => a.title.localeCompare(b.title))
      : videos;
  });
  readonly visibleVideos = computed(() => this.filteredVideos().slice(0, this.visibleCount()));
  readonly filtersAreActive = computed(() => Boolean(this.searchTerm() || this.selectedTopic()));

  constructor() {
    inject(SeoService).set(
      'Email Signature Demo | Crossware Videos | XcellHost',
      'Watch Crossware email signature demos for signature design, central management and deployment.',
      'email-signature-demo/',
    );
  }

  setSearch(value: string): void {
    this.searchTerm.set(value);
    this.resetResults();
  }

  setTopic(value: string): void {
    this.selectedTopic.set(value);
    this.resetResults();
  }

  setSort(value: string): void {
    this.sortMode.set(value === 'title' ? 'title' : 'featured');
    this.resetResults();
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedTopic.set('');
    this.resetResults();
  }

  showMore(): void {
    this.visibleCount.update(count => count + 6);
  }

  private resetResults(): void {
    this.visibleCount.set(6);
    this.activeVideoId.set(null);
  }
}
