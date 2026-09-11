import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {
  ATM_SOLUTION_DETAILS,
  ATM_SOLUTION_STYLES,
} from '../data/atm-solution-detail.data';

@Component({
  selector: 'xh-autonomous-threat-solution-detail',
  standalone: true,
  template: '<div class="atm-reference-fragment" [innerHTML]="fragment()"></div>',
  styles: `
    :host { display: block; }
    :host(.atm-solution-hero) { width: 100%; height: 100%; }
    .atm-reference-fragment { width: 100%; }
  `,
  encapsulation: ViewEncapsulation.ShadowDom,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutonomousThreatSolutionDetailComponent {
  private readonly sanitizer = inject(DomSanitizer);

  readonly slug = input.required<string>();
  readonly mode = input<'hero' | 'content'>('content');

  readonly fragment = computed<SafeHtml>(() => {
    const detail = ATM_SOLUTION_DETAILS[this.slug()];
    if (!detail) return '';

    const visibilityFix = `
      .rv { opacity: 1 !important; transform: none !important; }
      .atm-detail-hero, .atm-detail-hero .hvis { width: 100%; height: 100%; }
      .atm-detail-hero .dg { margin: 0 auto; }
      .atm-detail-content { overflow: hidden; color: var(--ink, #0b1730); }
      @media (prefers-reduced-motion: reduce) {
        *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important; }
      }
    `;
    const body = this.mode() === 'hero'
      ? `<div class="atm-detail-hero"><div class="hvis">${detail.hero}</div></div>`
      : `<div class="atm-detail-content">${detail.content}</div>`;

    return this.sanitizer.bypassSecurityTrustHtml(
      `<style>${ATM_SOLUTION_STYLES}\n${visibilityFix}</style>${body}`,
    );
  });
}

