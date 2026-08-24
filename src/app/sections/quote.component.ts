import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from '../shared/reveal.directive';

/** The single customer pull-quote between the insights grid and the CTA band. */
@Component({
  selector: 'xh-quote',
  imports: [RevealDirective],
  standalone: true,
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="quote">
      <div class="wrap">
        <blockquote xhReveal>
          <p>
            “XcellHost transformed our cloud infrastructure seamlessly. Quick response, good
            systems, and a process style you can rely on.”
          </p>
          <cite><b>Rajesh Patel</b> · IT Manager</cite>
        </blockquote>
      </div>
    </section>
  `,
})
export class QuoteComponent {}
