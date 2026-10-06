import { Component, Input } from '@angular/core';
import { SongEqualizerComponent } from '../shared/song-equalizer.component';
import { EmptySongBarComponent } from '../shared/empty-song-bar.component';

export const HOSTING_BANNER_PAGES = new Set([
  'windows-hosting', 'linux-hosting', 'wordpress-hosting', 'free-domain',
  'ai-website-builder', 'migrate-to-xcellhost', 'website-backup',
]);

// Show a song bar only when a matching track is available.
const HOSTING_SONGS: Record<string, readonly [string, string]> = {
  'wordpress-hosting': ['WordPress Hosting', 'wordpress-hosting-song'],
  'ai-website-builder': ['Website Builder', 'ai-website-builder-song'],
  'free-domain': ['Domain Registration', 'domain-registration-song'],
};

@Component({
  selector: 'xh-hosting-hero-media',
  standalone: true,
  imports: [SongEqualizerComponent, EmptySongBarComponent],
  template: `@if (isHostingPage) {
    @if (song; as track) {
      <div class="hosting-media-song">
        <b><xh-song-equalizer [playing]="playing" /> Listen to our {{ track[0] }} Song</b>
        <audio controls preload="metadata" [src]="'/assets/audio/' + track[1] + '.mp3'"
          [attr.aria-label]="track[0] + ' Song'"
          (playing)="playing = true" (pause)="playing = false" (ended)="playing = false"
          (waiting)="playing = false" (error)="playing = false" (emptied)="playing = false"></audio>
      </div>
      <div class="hosting-media-powered"><span>Powered by</span><span aria-hidden="true">|</span></div>
    } @else {
      <xh-empty-song-bar [name]="name" />
    }
  }`,
  styles: [`
    :host { display: block; }
    .hosting-media-song { display: flex; flex-wrap: wrap; align-items: center; gap: 12px; margin-top: 18px; color: #fff; }
    .hosting-media-song b { font-size: 16px; line-height: 1.4; }
    .hosting-media-song audio { display: block; width: 280px; max-width: 100%; height: 44px; }
    .hosting-media-powered { display: flex; align-items: center; gap: 10px; margin-top: 16px; color: #c7d5ec; font-size: 13px; line-height: 1.4; }
  `],
})
export class HostingHeroMediaComponent {
  @Input({ required: true }) slug = '';
  @Input({ required: true }) name = '';
  playing = false;
  get isHostingPage(): boolean { return HOSTING_BANNER_PAGES.has(this.slug); }
  get song(): readonly [string, string] | undefined { return HOSTING_SONGS[this.slug]; }
}
