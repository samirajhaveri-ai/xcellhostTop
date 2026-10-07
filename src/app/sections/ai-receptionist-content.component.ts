import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, computed, inject, output, signal } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { RECEPTIONIST_DEMOS, RECEPTIONIST_PLANS } from './ai-receptionist-content.data';

type Plan = typeof RECEPTIONIST_PLANS[number];

@Component({
  selector: 'xh-ai-receptionist-content',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './ai-receptionist-content.component.html',
  styleUrl: './ai-receptionist-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiReceptionistContentComponent {
  // The existing callback form receives the selected plan and billing details.
  readonly trialRequested = output<{ event: Event; configuration: string }>();
  readonly plans = RECEPTIONIST_PLANS;
  readonly annual = signal(false);
  readonly calls = signal(60);
  readonly workingDayCalls = computed(() => Math.max(1, Math.round(this.calls() / 22)));
  readonly estimate = computed(() => {
    const estimates = this.plans.map(plan => {
      const base = this.price(plan);
      const extraCalls = plan.includedCalls ? Math.max(0, this.calls() - plan.includedCalls) : 0;
      const extraCost = extraCalls * plan.extraCallPrice;
      return { plan, base, extraCalls, extraCost, total: base + extraCost };
    });
    return estimates.reduce((best, item) => item.total < best.total ? item : best);
  });
  readonly demoIndex = signal(0);
  readonly demo = computed(() => RECEPTIONIST_DEMOS[this.demoIndex()]);
  readonly demoCount = signal(6);
  readonly demoRows = computed(() => this.demo().rows.slice(0, this.demoCount()));
  readonly demoPaused = signal(true);
  private readonly reducedMotion = signal(true);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private demoElapsed = 0;
  private demoStarted = false;
  private refreshDemo?: () => void;

  constructor() { afterNextRender(() => this.animateDemo()); }

  money(value: number): string { return `₹${Math.round(value).toLocaleString('en-IN')}`; }
  price(plan: Plan): number { return this.annual() ? plan.price * 80 / 100 : plan.price; }
  requestTrial(event: Event, key: Plan['key']): void {
    event.preventDefault();
    const plan = this.plans.find(item => item.key === key)!;
    const base = this.price(plan);
    const configuration = `${plan.name} plan — 1-month free trial — ${this.annual() ? `annual billing (${this.money(base)}/month equivalent, ${this.money(base * 12)}/year)` : `monthly billing (${this.money(base)}/month)`} — about ${this.calls()} calls/month — excluding 18% GST`;
    this.trialRequested.emit({ event, configuration });
  }
  chooseDemo(index: number): void {
    if (!Number.isInteger(index) || index < 0 || index >= RECEPTIONIST_DEMOS.length) return;
    this.demoIndex.set(index);
    this.demoElapsed = 0;
    this.demoStarted = true;
    this.demoCount.set(this.reducedMotion() ? this.demo().rows.length : 0);
    this.refreshDemo?.();
  }

  private animateDemo(): void {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let wasReduced = true;
    let previousTick = 0;
    let timer: ReturnType<typeof setInterval> | undefined;
    const stop = () => { if (timer !== undefined) clearInterval(timer); timer = undefined; };
    const update = () => {
      stop();
      this.reducedMotion.set(motion.matches);
      this.demoPaused.set(motion.matches || !visible || document.hidden);
      if (motion.matches) {
        this.demoCount.set(this.demo().rows.length);
      } else {
        if (wasReduced) { this.demoElapsed = 0; this.demoCount.set(0); }
        if (!this.demoPaused() && this.demoStarted && this.demoCount() < this.demo().rows.length) {
          previousTick = performance.now();
          timer = setInterval(() => {
            const now = performance.now();
            this.demoElapsed += now - previousTick;
            previousTick = now;
            const count = Math.min(this.demo().rows.length, Math.max(0, Math.floor((this.demoElapsed - 500) / 1300) + 1));
            if (count !== this.demoCount()) this.demoCount.set(count);
            if (count === this.demo().rows.length) stop();
          }, 100);
        }
      }
      wasReduced = motion.matches;
    };
    this.refreshDemo = update;
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      if (visible) this.demoStarted = true;
      update();
    });
    observer.observe(this.host.querySelector('.receptionist-demo-call')!);
    motion.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    update();
    this.destroyRef.onDestroy(() => {
      stop(); observer.disconnect(); this.refreshDemo = undefined;
      motion.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    });
  }
}
