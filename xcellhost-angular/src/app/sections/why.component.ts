import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  signal,
  viewChildren,
} from '@angular/core';

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
  imports: [RevealDirective],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="why">
      <div class="wrap">
        <div class="sec-head" xhReveal>
          <div class="eyebrow">Why XcellHost</div>
          <h2>The numbers we're held to</h2>
        </div>
        <div class="why-grid">
          @for (c of cards; track c.title; let i = $index) {
            <article class="card" xhReveal>
              <div class="k" #k>{{ counters()[i] }}</div>
              <h3>{{ c.title }}</h3>
              <p>{{ c.blurb }}</p>
            </article>
          }
        </div>
      </div>
    </section>
  `,
})
export class WhyComponent implements AfterViewInit, OnDestroy {
  readonly cards = WHY_CARDS;

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
