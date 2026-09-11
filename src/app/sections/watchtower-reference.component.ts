import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  inject,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  WATCHTOWER_REFERENCE_HTML,
  WATCHTOWER_REFERENCE_STYLES,
} from '../data/watchtower-reference.data';

@Component({
  selector: 'xh-watchtower-reference',
  standalone: true,
  template: '<div class="watchtower-reference" [innerHTML]="content"></div>',
  styles: `
    :host { display: block; }
    .watchtower-reference { display: block; overflow: hidden; }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WatchtowerReferenceComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly content: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`
    <style>
      ${WATCHTOWER_REFERENCE_STYLES}
      .rv { opacity: 1 !important; transform: none !important; }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
        }
      }
    </style>
    ${WATCHTOWER_REFERENCE_HTML}
  `);
}
