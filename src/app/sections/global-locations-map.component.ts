import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

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

const ACRONIS_LOCATIONS: readonly DataCenterLocation[] = [
  { flag: '🇦🇺', code: 'AU', name: 'Australia' },
  { flag: '🇦🇹', code: 'AT', name: 'Austria' },
  { flag: '🇧🇹', code: 'BT', name: 'Bhutan' },
  { flag: '🇧🇷', code: 'BR', name: 'Brazil' },
  { flag: '🇧🇬', code: 'BG', name: 'Bulgaria' },
  { flag: '🇨🇦', code: 'CA', name: 'Canada' },
  { flag: '🇨🇿', code: 'CZ', name: 'Czech Republic' },
  { flag: '🇩🇰', code: 'DK', name: 'Denmark' },
  { flag: '🇫🇮', code: 'FI', name: 'Finland' },
  { flag: '🇫🇷', code: 'FR', name: 'France' },
  { flag: '🇩🇪', code: 'DE', name: 'Germany' },
  { flag: '🇬🇷', code: 'GR', name: 'Greece' },
  { flag: '🇭🇺', code: 'HU', name: 'Hungary' },
  { flag: '🇮🇳', code: 'IN', name: 'India' },
  { flag: '🇮🇩', code: 'ID', name: 'Indonesia' },
  { flag: '🇮🇪', code: 'IE', name: 'Ireland' },
  { flag: '🇮🇱', code: 'IL', name: 'Israel' },
  { flag: '🇮🇹', code: 'IT', name: 'Italy' },
  { flag: '🇯🇵', code: 'JP', name: 'Japan' },
  { flag: '🇱🇮', code: 'LI', name: 'Liechtenstein' },
  { flag: '🇲🇾', code: 'MY', name: 'Malaysia' },
  { flag: '🇲🇽', code: 'MX', name: 'Mexico' },
  { flag: '🇳🇱', code: 'NL', name: 'Netherlands' },
  { flag: '🇳🇿', code: 'NZ', name: 'New Zealand' },
  { flag: '🇳🇬', code: 'NG', name: 'Nigeria' },
  { flag: '🇳🇴', code: 'NO', name: 'Norway' },
  { flag: '🇵🇱', code: 'PL', name: 'Poland' },
  { flag: '🇵🇹', code: 'PT', name: 'Portugal' },
  { flag: '🇷🇴', code: 'RO', name: 'Romania' },
  { flag: '🇸🇬', code: 'SG', name: 'Singapore' },
  { flag: '🇿🇦', code: 'ZA', name: 'South Africa' },
  { flag: '🇰🇷', code: 'KR', name: 'South Korea' },
  { flag: '🇪🇸', code: 'ES', name: 'Spain' },
  { flag: '🇸🇪', code: 'SE', name: 'Sweden' },
  { flag: '🇨🇭', code: 'CH', name: 'Switzerland' },
  { flag: '🇹🇼', code: 'TW', name: 'Taiwan' },
  { flag: '🇹🇷', code: 'TR', name: 'Türkiye' },
  { flag: '🇦🇪', code: 'AE', name: 'United Arab Emirates' },
  { flag: '🇬🇧', code: 'GB', name: 'United Kingdom' },
  { flag: '🇺🇸', code: 'US', name: 'United States' },
] as const;

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
          @if (activeView() === 'xcellhost') {
            <p>
              Our globally distributed facilities use advanced technology to provide secure,
              stable environments with the performance and reliability your business depends on.
            </p>
          } @else {
            <p>
              Explore the Acronis Cyber Cloud footprint and the regional infrastructure options
              available for cyber protection and data residency.
            </p>
          }
          <div class="dc-view-switch" role="tablist" aria-label="Choose a data center network">
            <button
              type="button"
              role="tab"
              [class.active]="activeView() === 'xcellhost'"
              [attr.aria-selected]="activeView() === 'xcellhost'"
              aria-controls="xcellhost-dcs"
              (click)="activeView.set('xcellhost')"
            >View XcellHost DC’s</button>
            <button
              type="button"
              role="tab"
              [class.active]="activeView() === 'acronis'"
              [attr.aria-selected]="activeView() === 'acronis'"
              aria-controls="acronis-dcs"
              (click)="activeView.set('acronis')"
            >View Acronis DC’s</button>
          </div>
        </header>

        @if (activeView() === 'xcellhost') {
        <div id="xcellhost-dcs" class="dc-tab-panel" role="tabpanel" aria-label="XcellHost data centers">
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
                  <img class="location-flag" [src]="flagUrl(location.code)" [alt]="location.name + ' flag'" loading="lazy" />
                  <strong>{{ location.name }}</strong>
                </div>
              }
            }
          </div>
        </div>
        </div>
        } @else {
        <div id="acronis-dcs" class="dc-tab-panel" role="tabpanel" aria-label="Acronis data centers">
          <div class="map-stage" xhReveal>
            <div class="location-count" aria-label="More than 50 Acronis data center locations">
            
            </div>
            <img
              src="assets/images/xcellhost-global-locations-map.png"
              width="1146"
              height="540"
              loading="lazy"
              decoding="async"
              alt="World map showing the global Acronis data center footprint"
            />
          </div>

          <div class="location-marquee" aria-label="Acronis data center countries" xhReveal>
            <div class="location-track acronis-location-track">
              @for (pass of passes; track pass) {
                @for (location of acronisLocations; track location.code) {
                  <div class="location-chip" [attr.aria-hidden]="pass === 1 ? 'true' : null">
                    <img class="location-flag" [src]="flagUrl(location.code)" [alt]="location.name + ' flag'" loading="lazy" />
                    <strong>{{ location.name }}</strong>
                  </div>
                }
              }
            </div>
          </div>
          <a class="acronis-source" href="https://www.acronis.com/en/data-centers/" target="_blank" rel="noopener noreferrer">View current locations on Acronis.com ↗</a>
        </div>
        }
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

    .dc-view-switch {
      display: inline-flex;
      gap: 5px;
      margin-top: 22px;
      padding: 5px;
      border: 1px solid #c9d8ed;
      border-radius: 999px;
      background: rgba(255, 255, 255, .78);
      box-shadow: 0 8px 22px rgba(4, 30, 66, .08);
    }

    .dc-view-switch button {
      min-height: 42px;
      padding: 9px 19px;
      border: 0;
      border-radius: 999px;
      background: transparent;
      color: var(--slate);
      font: 700 13px/1 var(--body);
      cursor: pointer;
      transition: background .2s, color .2s, box-shadow .2s, transform .2s;
    }

    .dc-view-switch button:hover { color: var(--blue); }
    .dc-view-switch button.active {
      background: var(--blue);
      color: #fff;
      box-shadow: 0 7px 16px rgba(21, 101, 216, .25);
    }
    .dc-view-switch button:focus-visible { outline: 3px solid rgba(21, 101, 216, .25); outline-offset: 2px; }

    .dc-tab-panel { animation: dc-panel-in .35s ease both; }
    @keyframes dc-panel-in { from { opacity: 0; transform: translateY(8px); } }

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
      display: inline-block;
      overflow: hidden;
      border-radius: 3px;
      box-shadow: 0 1px 4px rgba(4, 30, 66, .18);
      object-fit: cover;
    }

    .location-chip strong {
      overflow: hidden;
      color: var(--navy);
      font: 600 13px/1.3 var(--body);
      text-overflow: ellipsis;
    }

    .acronis-location-track { animation-duration: 80s; }
    .acronis-source {
      display: block;
      width: max-content;
      margin: 10px auto 0;
      color: var(--blue);
      font: 700 12px/1.3 var(--body);
      text-decoration: none;
    }
    .acronis-source:hover { text-decoration: underline; }

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

      .dc-view-switch { width: 100%; }
      .dc-view-switch button { flex: 1; padding-inline: 10px; }
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
      .dc-tab-panel { animation: none; }
    }
  `,
})
export class GlobalLocationsMapComponent {
  readonly locations = DATA_CENTER_LOCATIONS;
  readonly acronisLocations = ACRONIS_LOCATIONS;
  readonly passes = [0, 1];
  readonly activeView = signal<'xcellhost' | 'acronis'>('xcellhost');

  flagUrl(code: string): string {
    return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
  }
}
