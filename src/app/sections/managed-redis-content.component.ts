import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { DecimalPipe } from '@angular/common';

const PLANS = {
  'rds.s': { name: 'Small', cpu: 2, memory: 8, hourly: 4.73 },
  'rds.m': { name: 'Medium', cpu: 4, memory: 16, hourly: 9.45 },
  'rds.l': { name: 'Large', cpu: 8, memory: 32, hourly: 18.9 },
  'rds.xl': { name: 'X-Large', cpu: 16, memory: 64, hourly: 37.8 },
  'rds.2xl': { name: '2X-Large', cpu: 32, memory: 256, hourly: 119.73 },
} as const;
type PlanCode = keyof typeof PLANS;
type Architecture = 'solo' | 'ha' | 'rs';
type Workload = 'cache' | 'sess' | 'dev';

@Component({
  selector: 'xh-managed-redis-content',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './managed-redis-content.component.html',
  styleUrl: './managed-redis-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedRedisContentComponent {
  readonly quoteRequested = output<string>();
  readonly plan = signal<PlanCode>('rds.m');
  readonly version = signal('Redis 7.4');
  readonly storage = signal(100);
  readonly replicas = signal(0);
  readonly ha = signal(true);
  readonly billing = signal<'h' | 'm'>('m');
  readonly architecture = signal<Architecture>('ha');
  readonly workload = signal<Workload | null>(null);
  readonly audience = signal('cxo');
  readonly nodes = computed(() => (this.ha() ? 2 : 1) + this.replicas());
  readonly computeCost = computed(() => this.currencyAmount(PLANS[this.plan()].hourly * 730 * this.nodes()));
  readonly storageCost = computed(() => this.currencyAmount(this.storage() * 6.2 * this.nodes()));
  readonly monthlyCost = computed(() => this.currencyAmount(this.computeCost() + this.storageCost()));

  private currencyAmount(amount: number): number {
    return Math.round(amount * 100) / 100;
  }

  tablePrice(hourly: number): number {
    return this.currencyAmount(hourly * (this.ha() ? 2 : 1) * (this.billing() === 'm' ? 730 : 1));
  }

  setHa(ha: boolean): void {
    this.ha.set(ha);
    this.architecture.set(ha ? 'ha' : 'solo');
    this.workload.set(null);
  }

  selectArchitecture(architecture: Architecture): void {
    this.setHa(architecture !== 'solo');
    this.architecture.set(architecture);
    this.replicas.set(architecture === 'rs' ? 2 : 0);
  }

  selectWorkload(workload: Workload): void {
    this.setHa(workload !== 'dev');
    this.workload.set(workload);
    this.plan.set(workload === 'cache' ? 'rds.m' : workload === 'sess' ? 'rds.l' : 'rds.s');
    this.replicas.set(workload === 'sess' ? 1 : 0);
  }

  requestQuote(event: Event): void {
    event.preventDefault();
    const plan = PLANS[this.plan()];
    this.quoteRequested.emit(`Managed Redis ${plan.name} (${plan.cpu} vCPU / ${plan.memory} GB) · ${this.version()} · ${this.ha() ? 'Sentinel HA pair' : 'Standalone'} · ${this.replicas()} read replicas · ${this.storage()} GB per node · est. INR ${Math.round(this.monthlyCost()).toLocaleString('en-IN')}/month excl. GST`);
  }
}
