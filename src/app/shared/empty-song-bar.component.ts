import { Component, Input } from '@angular/core';
import { SongEqualizerComponent } from './song-equalizer.component';

@Component({
  selector: 'xh-empty-song-bar',
  standalone: true,
  imports: [SongEqualizerComponent],
  template: `
    <div class="empty-song-powered"><span>Powered by</span><span aria-hidden="true">|</span></div>
    <div class="empty-song-row">
      <b><xh-song-equalizer /> Listen to our {{ name }} Song</b>
      <audio controls preload="none" [attr.aria-label]="name + ' Song — 0:00 / 0:00'"></audio>
    </div>
  `,
  styles: [`
    :host { display:block; margin-top:16px; }
    .empty-song-powered { display:flex; align-items:center; gap:10px; color:#c7d5ec; font-size:13px; line-height:1.4; }
    .empty-song-row { display:flex; flex-wrap:wrap; align-items:center; gap:12px; margin-top:18px; color:#fff; }
    b { font-size:16px; line-height:1.4; }
    audio { display:block; width:280px; max-width:100%; height:44px; }
  `],
})
export class EmptySongBarComponent {
  @Input({ required:true }) name = '';
}
