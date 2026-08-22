import { ChangeDetectionStrategy, Component, computed, effect, inject, input, signal } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

/** `script_09`'s `ytId()` — a bare 11-char id, or one embedded in a YouTube URL. */
function youtubeId(url: string): string {
  if (!url) return '';
  if (/^[\w-]{11}$/.test(url)) return url;
  const m = /(?:youtu\.be\/|v=|embed\/)([\w-]{11})/.exec(url);
  return m ? m[1] : '';
}

/**
 * The "Watch it in action" player: two tabs and one frame that renders a
 * youtube-nocookie iframe, a plain `<video>`, or the empty-slot placeholder —
 * the same three-way decision `script_09` made.
 */
@Component({
  selector: 'xh-product-video',
  standalone: true,
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pv-tabs">
      @for (l of labels(); track $index) {
        <button
          type="button"
          class="pv-tab"
          [class.active]="index() === $index"
          [attr.data-v]="$index"
          [attr.aria-pressed]="index() === $index"
          (click)="index.set($index)"
        >
          ▶ {{ l }}
        </button>
      }
    </div>
    <div class="pv-frame" id="ppVid">
      @if (embedUrl(); as url) {
        <iframe
          width="100%"
          height="100%"
          [src]="url"
          [title]="name() + ' — ' + label()"
          frameborder="0"
          allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture;web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      } @else if (source()) {
        <video [src]="source()" controls preload="metadata" playsinline></video>
      } @else {
        <div class="pv-ph">
          <span class="pv-play">▶</span>
          <b>{{ name() }} — {{ label() }} video</b>
          <span>Video slot ready — embed URL will play here</span>
        </div>
      }
    </div>
  `,
})
export class ProductVideoComponent {
  private readonly sanitizer = inject(DomSanitizer);

  /** video sources, in tab order */
  readonly videos = input.required<string[]>();
  /** tab captions, e.g. `['Product Intro', 'Use Cases']` */
  readonly labels = input.required<string[]>();
  /** product name, used in the iframe title and the placeholder */
  readonly name = input.required<string>();

  /** which tab is showing */
  readonly index = signal(0);

  readonly source = computed(() => this.videos()[this.index()] ?? '');
  readonly label = computed(() => this.labels()[this.index()] ?? (this.index() === 0 ? 'Intro' : 'Use Case'));

  readonly embedUrl = computed<SafeResourceUrl | null>(() => {
    const id = youtubeId(this.source());
    return id
      ? this.sanitizer.bypassSecurityTrustResourceUrl(
          `https://www.youtube-nocookie.com/embed/${id}?rel=0&playsinline=1`
        )
      : null;
  });

  constructor() {
    // a new product means back to the first tab, exactly as __ppSetVideos did
    effect(() => {
      this.videos();
      this.index.set(0);
    });
  }
}
