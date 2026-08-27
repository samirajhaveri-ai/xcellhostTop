import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from '../shared/reveal.directive';

interface DataCenterLocation {
  readonly flag: string;
  readonly code: string;
  readonly name: string;
}

const DATA_CENTER_LOCATIONS: readonly DataCenterLocation[] = [
  { flag: '🇮🇳', code: 'IN', name: 'India' },
  { flag: '🇺🇸', code: 'US', name: 'United States' },
  { flag: '🇬🇧', code: 'GB', name: 'United Kingdom' },
  { flag: '🇨🇦', code: 'CA', name: 'Canada' },
  { flag: '🇩🇪', code: 'DE', name: 'Germany' },
  { flag: '🇦🇺', code: 'AU', name: 'Australia' },
  { flag: '🇫🇷', code: 'FR', name: 'France' },
  { flag: '🇦🇪', code: 'AE', name: 'Dubai (UAE)' },
  { flag: '🇸🇬', code: 'SG', name: 'Singapore' },
  { flag: '🇭🇰', code: 'HK', name: 'Hong Kong' },
  { flag: '🇳🇱', code: 'NL', name: 'Netherlands' },
];

/** Global datacenter network presented between homepage insights and guarantees. */
@Component({
  selector: 'xh-global-locations-map',
  standalone: true,
  imports: [RevealDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="data-centers" aria-labelledby="data-centers-title">
      <div class="wrap">
        <header class="sec-head" xhReveal>
          <div class="eyebrow">Global infrastructure</div>
          <h2 id="data-centers-title">Global Data Centers</h2>
          <p>
            Our globally distributed facilities use advanced technology to provide secure,
            stable environments with the performance and reliability your business depends on.
          </p>
        </header>

        <div class="map-stage" xhReveal>
          <div class="location-count" aria-label="More than 10 datacenter locations">
            
          </div>
          <img
            src="assets/images/xcellhost-global-locations-map.png"
            width="1146"
            height="540"
            loading="lazy"
            decoding="async"
            alt="World map showing XcellHost datacenter locations across North America, Europe, Asia and Australia"
          />
        </div>

        <div class="location-marquee" aria-label="Datacenter regions" xhReveal>
          <div class="location-track">
            @for (pass of passes; track pass) {
              @for (location of locations; track location.code) {
                <div class="location-chip" [attr.aria-hidden]="pass === 1 ? 'true' : null">
                  <span class="location-flag" [attr.data-code]="location.code" aria-hidden="true"></span>
                  <strong>{{ location.name }}</strong>
                </div>
              }
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .data-centers {
      position: relative;
      padding: 76px 0;
      overflow: hidden;
      border-block: 1px solid var(--line);
      background:
        radial-gradient(circle at 92% 8%, rgba(21, 101, 216, 0.11), transparent 28%),
        var(--ice);
    }

    .data-centers .sec-head {
      max-width: 820px;
      margin: 0 auto 26px;
      text-align: center;
    }

    .data-centers .eyebrow {
      display: inline-block;
    }

    .data-centers .eyebrow::after {
      margin-inline: auto;
    }

    .map-stage {
      display: grid;
      max-width: 1180px;
      margin: 0 auto;
      grid-template-columns: 180px minmax(0, 1fr);
      align-items: center;
    }

    .location-count {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
      gap: 6px;
    }

    .location-count strong {
      color: var(--navy);
      font: 800 clamp(52px, 7vw, 78px) / 0.92 var(--disp);
      letter-spacing: -0.06em;
    }

    .location-count span {
      padding: 7px 13px;
      border-radius: 5px;
      background: var(--orange);
      color: #fff;
      font: 600 14px/1 var(--mono);
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .map-stage img {
      display: block;
      width: min(100%, 1146px);
      height: auto;
      margin: 0 auto;
      object-fit: contain;
    }

    .location-marquee {
      width: 100%;
      margin-top: 12px;
      overflow: hidden;
      mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
    }

    .location-track {
      display: flex;
      width: max-content;
      gap: 14px;
      padding: 10px 7px;
      animation: locations-scroll 34s linear infinite;
    }

    .location-marquee:hover .location-track {
      animation-play-state: paused;
    }

    .location-chip {
      display: flex;
      min-width: 176px;
      min-height: 58px;
      align-items: center;
      gap: 12px;
      padding: 10px 18px;
      border: 1px solid var(--line);
      border-radius: 12px;
      background: #fff;
      box-shadow: 0 7px 20px rgba(4, 30, 66, 0.06);
    }

    .location-flag {
      flex: 0 0 auto;
      width: 34px;
      height: 23px;
      position: relative;
      display: inline-block;
      overflow: hidden;
      border-radius: 3px;
      box-shadow: 0 1px 4px rgba(4, 30, 66, .18);
      background: linear-gradient(#ff9933 0 33%, #fff 33% 66%, #138808 66%);
    }
    .location-flag::after { content: attr(data-code); position:absolute; inset:0; display:grid; place-items:center; color:#17345f; font:800 8px/1 var(--mono); letter-spacing:.02em; }
    .location-flag[data-code="US"] { background: repeating-linear-gradient(#b22234 0 11%, #fff 11% 22%); }
    .location-flag[data-code="GB"] { background: linear-gradient(33deg, transparent 43%, #fff 44% 56%, transparent 57%), linear-gradient(-33deg, transparent 43%, #fff 44% 56%, transparent 57%), #153d8a; }
    .location-flag[data-code="CA"] { background: linear-gradient(90deg,#d52b1e 0 25%,#fff 25% 75%,#d52b1e 75%); }
    .location-flag[data-code="DE"] { background: linear-gradient(#111 0 33%,#d00 33% 66%,#ffce00 66%); }
    .location-flag[data-code="AU"],.location-flag[data-code="SG"],.location-flag[data-code="HK"],.location-flag[data-code="NL"],.location-flag[data-code="FR"],.location-flag[data-code="AE"] { background:#e8eef8; }

    .location-chip strong {
      overflow: hidden;
      color: var(--navy);
      font: 600 13px/1.3 var(--body);
      text-overflow: ellipsis;
    }

    @keyframes locations-scroll {
      to {
        transform: translateX(calc(-50% - 7px));
      }
    }

    @media (max-width: 720px) {
      .data-centers {
        padding: 56px 0;
      }

      .map-stage {
        grid-template-columns: 1fr;
      }

      .location-count {
        position: relative;
        z-index: 1;
        width: max-content;
        margin: 0 auto -18px;
        align-items: center;
      }
    }

    @media (max-width: 430px) {
      .map-stage {
        margin-inline: -10px;
      }

      .location-chip {
        min-width: 160px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .location-track {
        animation: none;
      }
    }
  `,
})
export class GlobalLocationsMapComponent {
  readonly locations = DATA_CENTER_LOCATIONS;
  readonly passes = [0, 1];
}
