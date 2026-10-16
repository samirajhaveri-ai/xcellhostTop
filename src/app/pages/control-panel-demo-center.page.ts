import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import {
  CONTROL_PANEL_DEMO_CONFIGS,
  ControlPanelDemoConfig,
  ControlPanelDemoVideo,
} from '../data/control-panel-demo.data';

interface ControlPanelDemoVideoView extends ControlPanelDemoVideo {
  readonly embedUrl: SafeResourceUrl;
  readonly thumbnailUrl: string;
}

@Component({
  selector: 'xh-control-panel-demo-center-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './control-panel-demo-center.page.html',
  styleUrl: './control-panel-demo-center.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanelDemoCenterPage {
  private readonly sanitizer = inject(DomSanitizer);
  private readonly route = inject(ActivatedRoute);

  readonly activeVideoId = signal<string | null>(null);
  readonly config: ControlPanelDemoConfig;
  readonly videos: readonly ControlPanelDemoVideoView[];

  constructor() {
    const key = this.route.snapshot.data['controlPanel'] === 'cpanel' ? 'cpanel' : 'plesk';
    this.config = CONTROL_PANEL_DEMO_CONFIGS[key];
    this.videos = this.config.videos.map((video) => ({
      ...video,
      thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
      embedUrl: this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0&playsinline=1`,
      ),
    }));

    inject(SeoService).set(
      `${this.config.title} | Product Videos | XcellHost`,
      this.config.description,
      this.config.canonicalPath,
    );
  }

  playVideo(videoId: string): void {
    this.activeVideoId.set(videoId);
  }
}
