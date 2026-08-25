import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from '../shared/reveal.directive';

/** The global locations map used directly above the homepage guarantee strip. */
@Component({
  selector: 'xh-global-locations-map',
  standalone: true,
  imports: [RevealDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="global-locations" aria-label="XcellHost global locations">
      <div class="wrap" xhReveal>
        <img
          src="assets/images/xcellhost-global-locations-map.png"
          width="1146"
          height="540"
          loading="lazy"
          decoding="async"
          alt="World map showing XcellHost service locations across North America, Europe, Asia and Australia"
        />
      </div>
    </section>
  `,
  styles: `
    .global-locations {
      padding: 52px 0 34px;
      overflow: hidden;
      background: #fff;
    }

    .global-locations .wrap {
      display: flex;
      justify-content: center;
    }

    .global-locations img {
      display: block;
      width: min(100%, 1146px);
      height: auto;
      object-fit: contain;
    }

    @media (max-width: 700px) {
      .global-locations {
        padding: 38px 0 28px;
      }

      .global-locations .wrap {
        padding: 0 14px;
      }

      .global-locations img {
        width: 100%;
      }
    }
  `,
})
export class GlobalLocationsMapComponent {}
