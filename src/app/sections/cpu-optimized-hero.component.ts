import { ChangeDetectionStrategy, Component, DestroyRef, afterNextRender, computed, inject, input, signal } from '@angular/core';

// Hero instance sizes and launch timing from the supplied CPU/RAM compute HTML files.
const CPU_SIZES = [
  { code: 'a.cpu1.4g', vcpu: 2, ram: 4, price: 931 },
  { code: 'a.cpu1.8g', vcpu: 4, ram: 8, price: 1538 },
  { code: 'a.cpu1.16g', vcpu: 8, ram: 16, price: 2781 },
  { code: 'a.cpu1.32g', vcpu: 16, ram: 32, price: 5975 },
] as const;

const MEMORY_SIZES = [
  { code: 'a.mem1.8g', vcpu: 1, ram: 8, price: 1180 },
  { code: 'a.mem1.16g', vcpu: 2, ram: 16, price: 2076 },
  { code: 'a.mem1.32g', vcpu: 4, ram: 32, price: 3899 },
  { code: 'a.mem1.64g', vcpu: 8, ram: 64, price: 7506 },
] as const;

@Component({
  selector: 'xh-cpu-optimized-hero',
  standalone: true,
  templateUrl: './cpu-optimized-hero.component.html',
  styleUrl: './cpu-optimized-hero.component.css',
  host: { '[style.--acc]': "family() === 'memory' ? '#7c3aed' : '#ea580c'" },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CpuOptimizedHeroComponent {
  readonly family = input<'cpu' | 'memory'>('cpu');
  readonly sizes = computed(() => this.family() === 'memory' ? MEMORY_SIZES : CPU_SIZES);
  readonly steps = ['Reserving dedicated vCPU', 'Attaching 30 GB NVMe volume', 'Assigning public IPv4', 'Booting Ubuntu 24.04 LTS', 'Instance running'];
  readonly selectedIndex = signal(1);
  readonly selected = computed(() => this.sizes()[this.selectedIndex()]);
  readonly stage = signal(-1);
  readonly reducedMotion = signal(true);
  readonly running = computed(() => this.stage() === this.steps.length - 1);
  readonly ip = computed(() => this.stage() >= 2 ? `103.21.58.${40 + this.selectedIndex() * 7}` : 'assigning…');
  readonly metrics = computed(() => [
    { label: 'CPU', value: this.running() ? 38 + this.selectedIndex() * 6 : 0 },
    { label: 'RAM', value: this.running() ? 46 + this.selectedIndex() * 6 : 0 },
    { label: 'DISK', value: this.running() ? 22 + this.selectedIndex() * 6 : 0 },
  ]);
  private readonly destroyRef = inject(DestroyRef);
  private timers: ReturnType<typeof setTimeout>[] = [];

  constructor() {
    afterNextRender(() => {
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const updateMotion = () => {
        this.reducedMotion.set(motion.matches);
        if (motion.matches) { this.cancelTimers(); this.stage.set(4); }
      };
      updateMotion();
      motion.addEventListener('change', updateMotion);
      if (!motion.matches) this.timers.push(setTimeout(() => this.launch(), 500));
      this.destroyRef.onDestroy(() => motion.removeEventListener('change', updateMotion));
    });
    this.destroyRef.onDestroy(() => this.cancelTimers());
  }

  selectSize(index: number): void {
    if (!Number.isInteger(index) || index < 0 || index >= this.sizes().length) return;
    this.selectedIndex.set(index);
    this.launch();
  }

  /** Replays the supplied illustration; no server is provisioned. */
  launch(): void {
    this.cancelTimers();
    if (this.reducedMotion()) { this.stage.set(4); return; }
    this.stage.set(-1);
    this.steps.forEach((_, index) => {
      this.timers.push(setTimeout(() => this.stage.set(index), index * 650));
    });
  }

  money(value: number): string { return `₹${value.toLocaleString('en-IN')}`; }

  private cancelTimers(): void {
    this.timers.forEach(timer => clearTimeout(timer));
    this.timers = [];
  }
}
