import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from '../shared/reveal.directive';

interface SatisfactionPromise {
  readonly icon: string;
  readonly kicker: string;
  readonly title: string;
  readonly body: string;
}

const PROMISES: readonly SatisfactionPromise[] = [
  {
    icon: 'currency_rupee',
    kicker: '30 days',
    title: 'Money-back guarantee',
    body: 'A straightforward start, backed by clear terms.',
  },
  {
    icon: 'handshake',
    kicker: 'People first',
    title: 'Customer commitment',
    body: 'Real specialists who stay accountable to your outcome.',
  },
  {
    icon: 'price_check',
    kicker: 'Fair by design',
    title: 'Lowest-price commitment',
    body: 'Clear, competitive pricing with no hidden surprises.',
  },
  {
    icon: 'verified_user',
    kicker: 'Proven trust',
    title: 'Trusted & secure',
    body: 'Cloud services built around security and reliability.',
  },
];

/** A theme-native satisfaction promise placed after the homepage insights and map. */
@Component({
  selector: 'xh-satisfaction-guarantee',
  standalone: true,
  imports: [RevealDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="satisfaction" aria-labelledby="satisfaction-title">
      <div class="wrap">
        <div class="satisfaction-panel" xhReveal>
          <div class="promise-grid">
            @for (promise of promises.slice(0, 2); track promise.title) {
              <article class="promise-card">
                <span class="promise-icon material-symbols-outlined" aria-hidden="true">
                  {{ promise.icon }}
                </span>
                <span class="promise-kicker">{{ promise.kicker }}</span>
                <h3>{{ promise.title }}</h3>
                <p>{{ promise.body }}</p>
              </article>
            }

            <div class="guarantee-mark">
              <div class="guarantee-ring">
                <span class="guarantee-kicker">Our promise</span>
                <strong id="satisfaction-title">100%</strong>
                <span class="guarantee-banner">Satisfaction</span>
                <span class="guarantee-label">Guaranteed</span>
              </div>
            </div>

            @for (promise of promises.slice(2); track promise.title) {
              <article class="promise-card">
                <span class="promise-icon material-symbols-outlined" aria-hidden="true">
                  {{ promise.icon }}
                </span>
                <span class="promise-kicker">{{ promise.kicker }}</span>
                <h3>{{ promise.title }}</h3>
                <p>{{ promise.body }}</p>
              </article>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .satisfaction {
      position: relative;
      overflow: hidden;
      margin: 0;
      padding: 0;
      background: #fff;
    }

    .satisfaction > .wrap {
      max-width: none;
      margin: 0;
      padding: 0;
    }

    .satisfaction-panel {
      position: relative;
      overflow: hidden;
      padding: 34px;
      border: 1px solid rgba(127, 178, 255, 0.2);
      border-radius: 0;
      background:
        radial-gradient(circle at 50% 0%, rgba(21, 101, 216, 0.34), transparent 38%),
        linear-gradient(135deg, #041e42 0%, #082b5d 55%, #0c3e8f 100%);
      box-shadow: 0 24px 60px rgba(4, 30, 66, 0.16);
    }

    .satisfaction-panel::before {
      position: absolute;
      inset: 0;
      background: repeating-linear-gradient(
        115deg,
        transparent 0 82px,
        rgba(127, 178, 255, 0.035) 82px 84px
      );
      content: '';
      pointer-events: none;
    }

    .promise-grid {
      position: relative;
      z-index: 1;
      display: grid;
      width: 100%;
      max-width: 1172px;
      margin: 0 auto;
      grid-template-columns: repeat(2, minmax(0, 1fr)) minmax(230px, 1.18fr) repeat(2, minmax(0, 1fr));
      align-items: center;
      gap: 14px;
    }

    .promise-card {
      min-width: 0;
      min-height: 218px;
      padding: 22px 18px;
      border: 1px solid rgba(127, 178, 255, 0.18);
      border-radius: 16px;
      background: rgba(255, 255, 255, 0.055);
      text-align: center;
      transition: transform 0.25s ease, border-color 0.25s ease, background 0.25s ease;
    }

    .promise-card:hover {
      transform: translateY(-4px);
      border-color: rgba(255, 140, 26, 0.65);
      background: rgba(255, 255, 255, 0.09);
    }

    .promise-icon {
      display: grid;
      width: 54px;
      height: 54px;
      margin: 0 auto 14px;
      place-items: center;
      border: 1px solid rgba(127, 178, 255, 0.32);
      border-radius: 15px;
      background: rgba(21, 101, 216, 0.24);
      color: #7fb2ff;
      font-family: 'Material Symbols Outlined';
      font-size: 30px;
      font-style: normal;
      font-weight: normal;
      line-height: 1;
      text-transform: none;
      white-space: nowrap;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
      font-feature-settings: 'liga';
      font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 32;
    }

    .promise-kicker {
      display: block;
      margin-bottom: 7px;
      color: #ffb25e;
      font: 600 10px/1.2 var(--mono);
      letter-spacing: 0.13em;
      text-transform: uppercase;
    }

    .promise-card h3 {
      margin-bottom: 8px;
      color: #fff;
      font: 600 15px/1.3 var(--disp);
    }

    .promise-card p {
      color: #aabdd8;
      font-size: 12.5px;
      line-height: 1.55;
    }

    .guarantee-mark {
      display: grid;
      min-height: 252px;
      place-items: center;
      padding: 8px;
    }

    .guarantee-ring {
      position: relative;
      display: flex;
      width: 224px;
      height: 224px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid rgba(127, 178, 255, 0.62);
      border-radius: 50%;
      background: radial-gradient(circle at 50% 32%, rgba(21, 101, 216, 0.72), rgba(4, 30, 66, 0.96) 68%);
      box-shadow: 0 0 0 9px rgba(21, 101, 216, 0.12), 0 0 0 10px rgba(127, 178, 255, 0.2), 0 24px 50px rgba(0, 0, 0, 0.32);
    }

    .guarantee-kicker,
    .guarantee-label {
      color: #b9c9e2;
      font: 600 10px/1 var(--mono);
      letter-spacing: 0.17em;
      text-transform: uppercase;
    }

    .guarantee-ring strong {
      margin: 7px 0 9px;
      color: #fff;
      font: 800 52px/0.95 var(--disp);
      letter-spacing: -0.06em;
    }

    .guarantee-banner {
      width: calc(100% + 36px);
      margin-bottom: 12px;
      padding: 8px 12px;
      border-radius: 7px;
      background: var(--orange);
      color: #fff;
      font: 700 16px/1 var(--disp);
      letter-spacing: 0.02em;
      text-align: center;
      text-transform: uppercase;
      box-shadow: 0 8px 22px rgba(255, 140, 26, 0.28);
    }

    @media (max-width: 1100px) {
      .promise-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }

      .guarantee-mark {
        grid-column: 1 / -1;
        grid-row: 1;
      }
    }

    @media (max-width: 640px) {
      .satisfaction {
        padding: 0;
      }

      .satisfaction > .wrap {
        padding: 0;
      }

      .satisfaction-panel {
        padding: 28px 18px;
        border-radius: 0;
      }

      .promise-grid {
        grid-template-columns: 1fr;
        gap: 12px;
      }

      .guarantee-mark {
        grid-column: auto;
        min-height: 238px;
      }

      .guarantee-ring {
        width: 206px;
        height: 206px;
      }

      .guarantee-ring strong {
        font-size: 48px;
      }

      .promise-card {
        min-height: auto;
        padding: 20px;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .promise-card {
        transition: none;
      }
    }
  `,
})
export class SatisfactionGuaranteeComponent {
  readonly promises = PROMISES;
}
