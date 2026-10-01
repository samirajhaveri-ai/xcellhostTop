import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import {
  XCELLHOST_DEMO_VIDEOS,
  XcellhostDemoVideo,
} from '../data/xcellhost-demo.data';

interface XcellhostVideoView extends XcellhostDemoVideo {
  readonly embedUrl: SafeResourceUrl;
  readonly thumbnailUrl: string;
}

@Component({
  selector: 'xh-xcellhost-demo-center-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './xcellhost-demo-center.page.html',
  styleUrls: ['./acronis-demo-center.page.css', './xcellhost-demo-center.page.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class XcellhostDemoCenterPage {
  private readonly sanitizer = inject(DomSanitizer);

  readonly searchTerm = signal('');
  readonly selectedCategory = signal('');
  readonly activeVideoId = signal<string | null>(null);

  readonly videos: readonly XcellhostVideoView[] = XCELLHOST_DEMO_VIDEOS.map((video) => ({
    ...video,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`,
    embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube-nocookie.com/embed/${video.videoId}?autoplay=1&rel=0&playsinline=1`,
    ),
  }));

  readonly categories = [...new Set(XCELLHOST_DEMO_VIDEOS.map((video) => video.category))];

  readonly filteredVideos = computed(() => {
    const search = this.searchTerm().trim().toLocaleLowerCase();
    const category = this.selectedCategory();

    return this.videos.filter(
      (video) =>
        (!search || `${video.title} ${video.category}`.toLocaleLowerCase().includes(search)) &&
        (!category || video.category === category),
    );
  });

  readonly filtersAreActive = computed(
    () => Boolean(this.searchTerm()) || Boolean(this.selectedCategory()),
  );

  constructor() {
    inject(SeoService).set(
      'XcellHost Demo Center | Product Videos',
      'Watch XcellHost product videos and demos covering DPDPA compliance, data protection and partner opportunities.',
      '/xcellhost-demo-center/',
    );
  }

  setSearch(value: string): void {
    this.searchTerm.set(value);
    this.activeVideoId.set(null);
  }

  setCategory(value: string): void {
    this.selectedCategory.set(value);
    this.activeVideoId.set(null);
  }

  playVideo(videoId: string): void {
    this.activeVideoId.set(videoId);
  }

  clearFilters(): void {
    this.searchTerm.set('');
    this.selectedCategory.set('');
    this.activeVideoId.set(null);
  }
}
