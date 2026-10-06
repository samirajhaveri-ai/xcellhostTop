import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'xh-song-equalizer',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: inline-block; vertical-align: middle; line-height: 0' },
  template: `<span class="song-equalizer" [class.is-playing]="playing()" aria-hidden="true"><i></i><i></i><i></i><i></i></span>`,
  styleUrls: ['../../../public/assets/heroes/song-equalizer.css'],
})
export class SongEqualizerComponent {
  readonly playing = input(false);
}
