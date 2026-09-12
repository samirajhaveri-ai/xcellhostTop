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

  private bluePalette(value: string): string {
    const replacements: readonly [RegExp, string][] = [
      [/#16a34a/gi, '#1565D8'], [/#15803d/gi, '#0C3E8F'],
      [/#22c55e/gi, '#3B82F6'], [/#4ade80/gi, '#8AB4FF'],
      [/#2ecc71/gi, '#3B82F6'], [/#19b65c/gi, '#1565D8'],
      [/#32db77/gi, '#3B82F6'], [/#38df7a/gi, '#8AB4FF'],
      [/#46e38a/gi, '#8AB4FF'], [/#51e594/gi, '#8AB4FF'],
      [/#86efac/gi, '#B9D2FF'], [/#dcfce7/gi, '#E8F0FD'],
      [/rgba\(22,\s*163,\s*74/gi, 'rgba(21,101,216'],
      [/rgba\(34,\s*197,\s*94/gi, 'rgba(59,130,246'],
      [/rgba\(46,\s*204,\s*113/gi, 'rgba(59,130,246'],
      [/rgba\(74,\s*222,\s*128/gi, 'rgba(138,180,255'],
    ];
    return replacements.reduce((result, [pattern, replacement]) => result.replace(pattern, replacement), value);
  }

  readonly content: SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`
    <style>
      ${this.bluePalette(WATCHTOWER_REFERENCE_STYLES)}
      .rv { opacity: 1 !important; transform: none !important; }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after {
          animation-duration: .01ms !important;
          animation-iteration-count: 1 !important;
        }
      }
    </style>
    ${this.bluePalette(WATCHTOWER_REFERENCE_HTML)}
  `);
}
