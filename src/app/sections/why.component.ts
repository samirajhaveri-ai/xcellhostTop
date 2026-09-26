import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  signal,
  viewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { CountUpFigure, parseCount, runCountUp } from '../shared/count-up';
import { RevealDirective } from '../shared/reveal.directive';

/** One `.why-grid .card` — the big figure plus its promise. */
interface WhyCard {
  /** the oversized `.k` figure */
  readonly k: string;
  readonly title: string;
  readonly blurb: string;
}

const WHY_CARDS: readonly WhyCard[] = [
  {
    k: '99.9%',
    title: 'Uptime guarantee',
    blurb: 'Tier-4 datacenters, proactive monitoring, written SLA.',
  },
  {
    k: '15 days',
    title: 'Money-back guarantee',
    blurb: 'Try any service risk-free — full refund if not satisfied.',
  },
  {
    k: '24×7×365',
    title: 'Human support',
    blurb: 'Certified cloud & security engineers, English and Hindi.',
  },
];

const WHY_FEATURES = [
  ['✥', 'Certified Partner Expertise', 'Authorised partner for Google, Microsoft, Zoho, Cisco and Sophos — backed by certified engineers.'],
  ['→', 'Zero-Downtime Migrations', 'Email, files and apps moved to cloud with full data integrity and proper SPF, DKIM and DMARC.'],
  ['⚙', 'Managed Services Built In', 'User provisioning, security policies, MDM, backup and monitoring — all included beyond licenses.'],
  ['♧', 'Local Support, India Hours', 'Real engineers in India — call, WhatsApp or email, with same-day response every business day.'],
] as const;

/** The original counted a `.why .k` up once it was half in view. */
const COUNTER_THRESHOLD = 0.5;

/**
 * The three-figure trust block: uptime, money-back and support promises.
 *
 * Each `.k` counts up the way the hero stats do (block 3 of `script_06`), but
 * only once the figure is 50% in view. The labels are rendered at their final
 * value up front, so if the observer never fires nothing looks broken.
 */
@Component({
  selector: 'xh-why',
  standalone: true,
  imports: [RevealDirective, RouterLink],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="why">
      <div class="wrap">
        <div class="why-layout">
          <div class="why-intro" xhReveal>
            <div class="why-badge">Why Xcellhost</div>
            <h2>A cloud partner that owns the outcome.</h2>
            <p>We choose, deploy and manage the right stack — end to end.</p>
            <div class="why-benefits">
              @for (benefit of benefits; track benefit.title) {
                <article class="why-benefit">
                  <span class="why-benefit-icon material-symbols-outlined" aria-hidden="true">{{ benefit.icon }}</span>
                  <h3>{{ benefit.title }}</h3>
                  <p>{{ benefit.body }}</p>
                </article>
              }
            </div>
            <small>Trusted by businesses, schools and organizations across India.</small>
            <div class="why-cta">
              <a class="btn btn-ghost" routerLink="/about-us" fragment="why-reasons">Learn More <span aria-hidden="true">&rarr;</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: `
    .why .why-layout { display: block; }
    .why .why-intro { max-width: none; margin: 0 auto; text-align: center; }
    .why .why-intro h2 { max-width: none; margin: 17px auto 12px; font-size: clamp(26px, 3.1vw, 43px); }
    .why .why-intro > p { max-width: none; }
    .why .why-cta { margin-top: 24px; }
    .why .why-cta .btn { display: inline-flex; align-items: center; gap: 8px; }
    .why .why-benefits { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); gap: 26px; margin: 40px 0 32px; }
    .why .why-benefit { min-width: 0; text-align: center; }
    .why .why-benefit-icon { display: grid; place-items: center; width: 58px; height: 58px; margin: 0 auto 18px; border-radius: 50%; background: #eaf2ff; color: #1565d8; font-size: 30px; }
    .why .why-benefit h3 { margin: 0 0 12px; color: #000; font-size: 18px; font-weight: 700; line-height: 1.3; }
    .why .why-benefit p { margin: 0 auto; max-width: 220px; color: #000; font-size: 14px; line-height: 1.65; }
    @media (max-width: 980px) { .why .why-benefits { grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 30px 22px; } }
    @media (max-width: 600px) { .why .why-benefits { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 380px) { .why .why-benefits { grid-template-columns: 1fr; } }
  `,
})
export class WhyComponent implements AfterViewInit, OnDestroy {
  readonly benefits = [
    { icon: 'public', title: 'Local & Global', body: 'Data centers in India, Europe, US, and Asia.' },
    { icon: 'attach_money', title: 'Transparent Pricing', body: 'No hidden costs, pay only for what you use.' },
    { icon: 'headphones', title: 'Personal Support', body: '24/7 engineering support with real humans.' },
    { icon: 'settings', title: 'Customizable', body: 'Tailored setups, not cookie-cutter infrastructure.' },
    { icon: 'shield', title: 'Secure & Compliant', body: 'PCI-DSS & global compliance standards.' },
  ];
  readonly cards = WHY_CARDS;
  readonly features = WHY_FEATURES;

  private readonly kEls = viewChildren<ElementRef<HTMLElement>>('k');

  /** `null` where the label does not start with a number — nothing to ramp. */
  private readonly figures: readonly (CountUpFigure | null)[] = WHY_CARDS.map((c) =>
    parseCount(c.k)
  );

  /** text of each `.k`; starts at the final label so it is never blank */
  readonly counters = signal<readonly string[]>(WHY_CARDS.map((c) => c.k));

  private readonly reduced =
    typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  private observer?: IntersectionObserver;
  private readonly cancels: (() => void)[] = [];

  ngAfterViewInit(): void {
    if (this.reduced || typeof IntersectionObserver === 'undefined') return;

    const refs = this.kEls();
    this.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        this.observer?.unobserve(entry.target);
        const i = refs.findIndex((r) => r.nativeElement === entry.target);
        if (i >= 0) this.count(i);
      }
    }, { threshold: COUNTER_THRESHOLD });

    for (const ref of refs) this.observer.observe(ref.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
    for (const cancel of this.cancels) cancel();
    this.cancels.length = 0;
  }

  /** Ramp one figure; the others keep whatever they are already showing. */
  private count(i: number): void {
    const figure = this.figures[i];
    if (!figure) return;
    this.cancels.push(
      runCountUp([figure], ([text]) =>
        this.counters.update((v) => v.map((old, j) => (j === i ? text : old)))
      )
    );
  }
}
