import {
  ChangeDetectionStrategy, Component, DestroyRef, ElementRef,
  afterNextRender, computed, inject, signal,
} from '@angular/core';

// Values and animation timings from the supplied NVIDIA B300 HTML.
const CONFIGURATIONS = [
  { g: 1, hourly: 523, ram: 256, vcpu: 32 },
  { g: 2, hourly: 1045, ram: 512, vcpu: 64 },
  { g: 4, hourly: 2090, ram: 1024, vcpu: 128 },
  { g: 8, hourly: 4180, ram: 2048, vcpu: 256 },
] as const;
const WORKLOADS = ['TRAINING', 'INFERENCE', 'FINE-TUNING'];

@Component({
  selector: 'xh-nvidia-b300-hero',
  standalone: true,
  templateUrl: './nvidia-b300-hero.component.html',
  styleUrl: './nvidia-b300-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.paused]': '!visible()' },
})
export class NvidiaB300HeroComponent {
  readonly configurations = CONFIGURATIONS;
  readonly selected = signal(8);
  readonly visible = signal(true);
  readonly workload = signal(WORKLOADS[0]);
  readonly percentages = signal(Array<number>(8).fill(0));
  readonly current = computed(() => CONFIGURATIONS.find(plan => plan.g === this.selected())!);
  readonly memory = computed(() => (this.selected() * 288).toLocaleString('en-IN') + ' GB');
  readonly hostCapacity = computed(() => {
    const plan = this.current();
    return `${plan.vcpu} / ${plan.ram >= 1024 ? plan.ram / 1024 + ' TB' : plan.ram + ' GB'}`;
  });
  readonly price = computed(() => `₹${this.current().hourly.toLocaleString('en-IN')}/hr`);
  readonly summary = computed(() => {
    const memory = this.selected() * 288;
    return `${this.selected()} × B300 · ${memory >= 1000 ? (memory / 1000).toFixed(1) + ' TB' : memory + ' GB'} HBM3e`;
  });

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private reduced = false;
  private workloadIndex = 0;
  private boardTimer?: ReturnType<typeof setInterval>;
  private workloadTimer?: ReturnType<typeof setInterval>;

  constructor() {
    afterNextRender(() => {
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const updateMotion = () => {
        this.reduced = motion.matches;
        this.stop();
        this.updateBoard();
        this.start();
      };
      updateMotion();
      motion.addEventListener('change', updateMotion);

      const observer = new IntersectionObserver(([entry]) => {
        this.setVisible(entry.isIntersecting && !document.hidden);
      }, { threshold: 0.05 });
      observer.observe(this.element.nativeElement);
      const visibility = () => {
        const bounds = this.element.nativeElement.getBoundingClientRect();
        this.setVisible(!document.hidden && bounds.bottom > 0 && bounds.top < window.innerHeight);
      };
      document.addEventListener('visibilitychange', visibility);
      this.destroyRef.onDestroy(() => {
        this.stop();
        observer.disconnect();
        motion.removeEventListener('change', updateMotion);
        document.removeEventListener('visibilitychange', visibility);
      });
    });
  }

  select(gpus: number): void {
    if (!CONFIGURATIONS.some(plan => plan.g === gpus)) return;
    this.selected.set(gpus);
    this.updateBoard();
  }

  private updateBoard(): void {
    this.percentages.set(Array.from({ length: 8 }, (_, index) =>
      index < this.selected() ? 62 + Math.round(Math.random() * 34) : 0));
  }

  private setVisible(value: boolean): void {
    this.visible.set(value);
    if (value) this.start();
    else this.stop();
  }

  private start(): void {
    if (this.reduced || !this.visible() || this.boardTimer !== undefined) return;
    this.boardTimer = setInterval(() => this.updateBoard(), 1400);
    this.workloadTimer = setInterval(() => {
      this.workloadIndex = (this.workloadIndex + 1) % WORKLOADS.length;
      this.workload.set(WORKLOADS[this.workloadIndex]);
    }, 3200);
  }

  private stop(): void {
    clearInterval(this.boardTimer);
    clearInterval(this.workloadTimer);
    this.boardTimer = undefined;
    this.workloadTimer = undefined;
  }
}
