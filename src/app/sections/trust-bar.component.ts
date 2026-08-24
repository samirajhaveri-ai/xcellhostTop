import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from '../shared/reveal.directive';

/** The certification / scale strip that sits directly under the hero. */
@Component({
  selector: 'xh-trust-bar',
  imports: [RevealDirective],
  standalone: true,
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="trust">
      <div class="wrap">
        <span class="item" xhReveal><span class="tick">✓</span><b>ISO 27001</b>&nbsp;&amp;&nbsp;<b>ISO 20000-1</b></span>
        <span class="item" xhReveal><span class="tick">✓</span>Microsoft <b>Gold Partner</b></span>
        <span class="item" xhReveal><span class="tick">✓</span><b>10,000+</b> customers</span>
        <span class="item" xhReveal><span class="tick">✓</span><b>27 years</b> in managed hosting</span>
        <span class="item" xhReveal><span class="tick">✓</span><b>24×7</b> NOC + SOC</span>
      </div>
    </div>
  `,
})
export class TrustBarComponent {}
