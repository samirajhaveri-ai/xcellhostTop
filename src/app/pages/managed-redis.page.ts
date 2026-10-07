import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { RevealDirective } from '../shared/reveal.directive';
import { ManagedRedisTailComponent } from '../sections/managed-redis-tail.component';

const PLANS = [
  { code: 'rds.s', name: 'Small', cpu: 2, memory: 8, hourly: 4.73, description: 'Dev, test & small caches' },
  { code: 'rds.m', name: 'Medium', cpu: 4, memory: 16, hourly: 9.45, description: 'Session stores & app caches' },
  { code: 'rds.l', name: 'Large', cpu: 8, memory: 32, hourly: 18.9, description: 'Busy production caches' },
  { code: 'rds.xl', name: 'X-Large', cpu: 16, memory: 64, hourly: 37.8, description: 'High-traffic queues & leaderboards' },
  { code: 'rds.2xl', name: '2X-Large', cpu: 32, memory: 256, hourly: 119.73, description: 'Large in-memory datasets' },
] as const;
type PlanCode = typeof PLANS[number]['code'];
type Audience = 'cxo' | 'it' | 'fin' | 'risk';

@Component({
  selector: 'xh-managed-redis-page',
  standalone: true,
  imports: [RouterLink, RevealDirective, ManagedRedisTailComponent],
  templateUrl: './managed-redis.page.html',
  styleUrl: './managed-redis.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedRedisPage {
  readonly plans = PLANS;
  readonly reducedMotion = signal(true);
  readonly terminalRows = signal<string[][]>([]);
  readonly ha = signal(true);
  readonly billing = signal<'h' | 'm'>('m');
  readonly planCode = signal<PlanCode>('rds.m');
  readonly version = signal('Redis 7.4');
  readonly storage = signal(100);
  readonly replicas = signal(0);
  readonly architecture = signal<'solo' | 'ha' | 'rs'>('ha');
  readonly profile = signal<'cache' | 'sess' | 'dev' | ''>('');
  readonly audience = signal<Audience>('cxo');
  readonly selectedPlan = computed(() => PLANS.find(plan => plan.code === this.planCode())!);
  readonly nodes = computed(() => (this.ha() ? 2 : 1) + this.replicas());
  readonly computeCost = computed(() => this.selectedPlan().hourly * 730 * this.nodes());
  readonly storageCost = computed(() => this.storage() * 6.2 * this.nodes());
  readonly total = computed(() => this.computeCost() + this.storageCost());
  readonly configuration = computed(() => {
    const plan = this.selectedPlan();
    return `${plan.name} (${plan.cpu} vCPU/${plan.memory} GB) · ${this.version()} · ${this.ha() ? 'HA' : 'Standalone'} · ${this.replicas()} replicas · ${this.storage()} GB · est. ${this.money(this.total())}/mo`;
  });
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    inject(SeoService).set(
      'Managed Redis India — Sentinel HA, Cluster & Backups | XcellHost',
      'Managed Redis in Indian data centres from ₹4.73/hour. Sentinel high availability, Redis Cluster, hourly backups, TLS and 24×7 support with INR billing.',
      '/managed-redis',
    );
    afterNextRender(() => this.animateTerminal());
  }

  money(value: number): string { return `₹${Math.round(value).toLocaleString('en-IN')}`; }
  hourly(value: number): string { return `₹${value.toFixed(2)}`; }
  tablePrice(value: number): string {
    const rate = value * (this.ha() ? 2 : 1);
    return this.billing() === 'h' ? this.hourly(rate) : this.money(rate * 730);
  }
  selectPlan(event: Event): void { this.planCode.set((event.target as HTMLSelectElement).value as PlanCode); }
  setMode(ha: boolean): void {
    this.ha.set(ha); this.architecture.set(ha ? 'ha' : 'solo'); this.profile.set('');
  }
  chooseArchitecture(key: 'solo' | 'ha' | 'rs'): void {
    this.architecture.set(key); this.profile.set('');
    if (key === 'rs') { this.scrollTo('lead'); return; }
    this.ha.set(key === 'ha'); this.replicas.set(0);
  }
  chooseProfile(profile: 'cache' | 'sess' | 'dev'): void {
    this.profile.set(profile); this.ha.set(profile !== 'dev');
    this.planCode.set(profile === 'dev' ? 'rds.s' : profile === 'sess' ? 'rds.l' : 'rds.m');
    this.replicas.set(profile === 'sess' ? 1 : 0);
    this.architecture.set(profile === 'dev' ? 'solo' : 'ha');
    this.host.querySelector('.calc')?.scrollIntoView({ behavior: this.reducedMotion() ? 'instant' : 'smooth', block: 'center' });
  }
  onTabKey(event: KeyboardEvent, current: Audience): void {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const tabs: Audience[] = ['cxo', 'it', 'fin', 'risk'];
    const index = tabs.indexOf(current);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? 3 : (index + (event.key === 'ArrowRight' ? 1 : -1) + 4) % 4;
    this.audience.set(tabs[next]);
    this.host.querySelector<HTMLButtonElement>(`#at-${tabs[next]}`)?.focus();
  }
  scrollTo(id: string, event?: Event): void {
    event?.preventDefault();
    this.host.querySelector<HTMLElement>(`#${id}`)?.scrollIntoView({ behavior: this.reducedMotion() ? 'instant' : 'smooth', block: 'start' });
  }

  private animateTerminal(): void {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const commands = [
      ['p', '127.0.0.1:6379> PING'], ['o', 'PONG'],
      ['p', '127.0.0.1:6379> SET session:42 "{user:\'asha\'}" EX 1800'], ['o', 'OK'],
      ['p', '127.0.0.1:6379> INCR page:views:home'], ['o', '(integer) 18291'],
      ['p', '127.0.0.1:6379> INFO replication'], ['o', 'role:master · connected_slaves:1'],
    ];
    let command = 3;
    let timer: ReturnType<typeof setInterval> | undefined;
    let visible = true;
    const stop = () => { if (timer) clearInterval(timer); timer = undefined; };
    const update = () => {
      stop(); this.reducedMotion.set(motion.matches);
      if (motion.matches) this.terminalRows.set(commands.slice(0, 6));
      else if (visible && !document.hidden) timer = setInterval(() => {
        if (command >= commands.length) { command = 0; this.terminalRows.set([]); }
        const row = commands[command++];
        this.terminalRows.update(rows => [...rows, row].slice(-6));
      }, 1500);
    };
    this.terminalRows.set(commands.slice(0, 3)); update();
    motion.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; update(); });
    observer.observe(this.host.querySelector('.clu')!);
    this.destroyRef.onDestroy(() => {
      stop(); observer.disconnect(); motion.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    });
  }
}
