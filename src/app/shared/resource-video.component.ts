import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

/** Loads the external video player after the visitor chooses to play. */
@Component({
  selector: 'xh-resource-video',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (playing() || !poster()) {
      <iframe [src]="src()" [title]="title()" loading="lazy" allow="autoplay; fullscreen; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    } @else {
      <button type="button" [attr.aria-label]="'Play ' + title()" (click)="playing.set(true)">
        <img [src]="poster()" alt="" loading="lazy" />
        <span class="play" aria-hidden="true">▶</span>
      </button>
    }
  `,
  styles: `
    :host { display: block; width: 100%; height: 100%; }
    iframe { display: block; width: 100%; height: 100%; border: 0; }
    button { position: relative; display: block; width: 100%; height: 100%; padding: 0; border: 0; background: #061c3b; cursor: pointer; overflow: hidden; }
    img { display: block; width: 100%; height: 100%; object-fit: cover; }
    .play { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%); display: grid; place-items: center; width: 66px; height: 48px; padding-left: 3px; border-radius: 12px; color: #fff; background: #dc382d; box-shadow: 0 4px 16px rgba(0,0,0,.25); font-size: 23px; transition: background .2s; }
    button:hover .play { background: #b82118; }
    button:focus-visible { outline: 3px solid #77b6ff; outline-offset: -3px; }
    @media (prefers-reduced-motion: reduce) { .play { transition: none; } }
  `,
})
export class ResourceVideoComponent {
  readonly src = input.required<SafeResourceUrl>();
  readonly title = input.required<string>();
  readonly poster = input('');
  readonly playing = signal(false);
}
