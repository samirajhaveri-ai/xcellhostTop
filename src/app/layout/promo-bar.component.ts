import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * The single-line offer strip that sits between the utility bar and the header.
 */
@Component({
  selector: 'xh-promo-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents' },
  template: `
    <div class="promo">
      🎉 <b>Tally on Cloud — 20% off</b> with code <span class="code">TALLY20</span> · Valid till 31
      Aug 2026 · <a href="#" style="color:#fff;text-decoration:underline">Claim offer →</a>
    </div>
  `,
})
export class PromoBarComponent {}
