import { ChangeDetectionStrategy, Component } from '@angular/core';

import { RevealDirective } from '../shared/reveal.directive';

interface CredibilityFeature {
  readonly icon: string;
  readonly title: string;
  readonly body: string;
}

const CREDIBILITY_FEATURES: readonly CredibilityFeature[] = [
  {
    // Keep this as a single, compact glyph; `domain_verified` renders as a
    // wide composite mark that collides with the card text at this size.
    icon: 'domain',
    title: 'Tier-4 datacenters',
    body: 'Enterprise facilities engineered for availability, resilience and dependable performance.',
  },
  {
    icon: 'security',
    title: 'DDoS protection',
    body: 'Layered traffic protection helps keep critical services available during network attacks.',
  },
  {
    icon: 'hub',
    title: 'Carrier-neutral network',
    body: 'Multiple connectivity providers create resilient routes and reduce single-carrier dependency.',
  },
  {
    icon: 'electric_bolt',
    title: 'Redundant power',
    body: 'UPS systems and backup generation maintain continuity through utility interruptions.',
  },
  {
    icon: 'support_agent',
    title: '24×7 expert support',
    body: 'Cloud, network and security engineers are available around the clock when you need help.',
  },
  {
    icon: 'shield_lock',
    title: 'Multi-layer security',
    body: 'Controlled access, continuous monitoring and network safeguards protect your workloads.',
  },
  {
    icon: 'monitoring',
    title: 'Scalable infrastructure',
    body: 'Add compute, memory and storage as demand changes without rebuilding your environment.',
  },
  {
    icon: 'energy_savings_leaf',
    title: 'Efficient operations',
    body: 'Modern infrastructure is managed for efficient resource use without compromising reliability.',
  },
  {
    icon: 'language',
    title: 'Global connectivity',
    body: 'Strategic locations and low-latency networks keep teams and customers reliably connected.',
  },
];

/** Infrastructure trust signals, adapted to XcellHost's homepage visual system. */
@Component({
  selector: 'xh-host-credibility',
  standalone: true,
  imports: [RevealDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="credibility" aria-labelledby="credibility-title">
      <div class="wrap">
        <header class="sec-head" xhReveal>
          <div class="eyebrow">Infrastructure you can trust</div>
          <h2 id="credibility-title">Host With Credibility</h2>
          <p>
            Certified facilities, enterprise-grade infrastructure and always-on expertise keep
            your business secure, available and ready to scale.
          </p>
        </header>

        <div class="credibility-grid">
          @for (feature of features; track feature.title) {
            <article class="credibility-card" xhReveal>
              <span class="credibility-icon material-symbols-outlined" aria-hidden="true">
                {{ feature.icon }}
              </span>
              <div>
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.body }}</p>
              </div>
            </article>
          }
        </div>
      </div>
    </section>
  `,
  styles: `
    .credibility {
      position: relative;
      padding: 76px 0;
      overflow: hidden;
      border-bottom: 1px solid var(--line);
      background:
        radial-gradient(circle at 92% 10%, rgba(21, 101, 216, 0.08), transparent 28%),
        #fff;
    }

    .sec-head {
      max-width: 760px;
    }

    .credibility-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 18px;
    }

    .credibility-card {
      position: relative;
      display: flex;
      min-width: 0;
      min-height: 176px;
      gap: 18px;
      padding: 26px 24px;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 14px;
      background: #fff;
      box-shadow: 0 10px 28px rgba(4, 30, 66, 0.055);
      transition: transform 0.22s ease, border-color 0.22s ease, box-shadow 0.22s ease;
    }

    .credibility-card::after {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 54px;
      height: 3px;
      background: linear-gradient(90deg, var(--blue), var(--orange));
      content: '';
      transition: width 0.22s ease;
    }

    .credibility-card:hover {
      border-color: #bfd3f3;
      box-shadow: 0 16px 36px rgba(21, 101, 216, 0.11);
      transform: translateY(-4px);
    }

    .credibility-card:hover::after {
      width: 100%;
    }

    .credibility-icon {
      display: grid;
      width: 48px;
      height: 48px;
      flex: 0 0 48px;
      place-items: center;
      border-radius: 12px;
      background: var(--blue-soft);
      color: var(--blue);
      font-family: 'Material Symbols Outlined';
      font-size: 26px;
      font-style: normal;
      font-weight: normal;
      line-height: 1;
      text-transform: none;
      white-space: nowrap;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
      font-feature-settings: 'liga';
      font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 28;
    }

    .credibility-card h3 {
      margin: 1px 0 8px;
      color: var(--navy);
      font: 600 17px/1.35 var(--disp);
    }

    .credibility-card p {
      margin: 0;
      color: var(--slate);
      font-size: 13.5px;
      line-height: 1.6;
    }

    @media (max-width: 980px) {
      .credibility-grid {
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }

    @media (max-width: 620px) {
      .credibility {
        padding: 56px 0;
      }

      .credibility-grid {
        grid-template-columns: 1fr;
      }

      .credibility-card {
        min-height: 0;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .credibility-card,
      .credibility-card::after {
        transition: none;
      }
    }
  `,
})
export class HostCredibilityComponent {
  readonly features = CREDIBILITY_FEATURES;
}
