import { Component, Input } from '@angular/core';
import { SongEqualizerComponent } from '../shared/song-equalizer.component';
import { EmptySongBarComponent } from '../shared/empty-song-bar.component';

// Only show the dedicated, playable track verified on the corresponding live page.
const DOMAIN_SONGS: Record<string, readonly [string, string]> = {
  "register-a-domain-name": [
    "Domain Registration",
    "domain-registration-song"
  ],
  "transfer-your-domain": [
    "Domain Transfer",
    "domain-transfer-song"
  ],
  "latest-domain-extensions": [
    "Latest Domain Extensions",
    "latest-domain-extensions-song"
  ]
};

@Component({
 selector: 'xh-domain-hero-media', standalone: true,
 imports: [SongEqualizerComponent, EmptySongBarComponent],
 template: `@if (song; as track) {
 <div class="domain-media-song"><b><xh-song-equalizer [playing]="playing" /> Listen to our {{track[0]}} Song</b><audio controls preload="metadata" [src]="'/assets/audio/' + track[1] + '.mp3'" [attr.aria-label]="track[0] + ' Song'" (playing)="playing = true" (pause)="playing = false" (ended)="playing = false" (waiting)="playing = false" (error)="playing = false" (emptied)="playing = false"></audio></div>
 } @else if (isDomainPage) { <xh-empty-song-bar [name]="name" /> }`,
 styles: [":host{display:block}.domain-media-song{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-top:18px;color:#fff}.domain-media-song b{font-size:16px}.domain-media-song b span{color:#ff8c1a}.domain-media-song audio{display:block;width:280px;max-width:100%;height:44px}"],
})
export class DomainHeroMediaComponent {
 playing = false;
 @Input({required: true}) slug = '';
 @Input({required: true}) name = '';
 @Input() isDomainPage = false;
 get song(): readonly [string, string] | undefined { return DOMAIN_SONGS[this.slug]; }
}
