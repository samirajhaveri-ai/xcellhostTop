import { ChangeDetectionStrategy, Component, ElementRef, computed, inject, output, signal } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';

const PLANS = [
  { code: 'mgo.s', name: 'Small', cpu: 2, memory: 8, hourly: 4.73, description: 'Development & testing' },
  { code: 'mgo.m', name: 'Medium', cpu: 4, memory: 16, hourly: 9.45, description: 'Small production apps' },
  { code: 'mgo.l', name: 'Large', cpu: 8, memory: 32, hourly: 18.9, description: 'Growing production apps' },
  { code: 'mgo.xl', name: 'X-Large', cpu: 16, memory: 64, hourly: 37.8, description: 'Busy APIs & SaaS' },
  { code: 'mgo.2xl', name: '2X-Large', cpu: 32, memory: 256, hourly: 119.73, description: 'High-traffic production' },
] as const;
type PlanCode = typeof PLANS[number]['code'];
type Architecture = 'solo' | 'ha' | 'rs';
type Profile = 'api' | 'cat' | 'dev';

@Component({
  selector: 'xh-managed-mongodb-content',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './managed-mongodb-content.component.html',
  styleUrl: './managed-mongodb-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedMongodbContentComponent {
  readonly quoteRequested = output<{ event: Event; configuration: string }>();
  readonly plans = PLANS;
  readonly ha = signal(true);
  readonly billing = signal<'h' | 'm'>('m');
  readonly planCode = signal<PlanCode>('mgo.m');
  readonly version = signal('MongoDB 8.0');
  readonly storage = signal(100);
  readonly replicas = signal(0);
  readonly architecture = signal<Architecture>('ha');
  readonly profile = signal<Profile | ''>('');
  readonly selectedPlan = computed(() => PLANS.find(plan => plan.code === this.planCode())!);
  readonly nodes = computed(() => (this.ha() ? 3 : 1) + this.replicas());
  readonly computeCost = computed(() => Math.round(this.selectedPlan().hourly * 100) * 730 * this.nodes() / 100);
  readonly storageCost = computed(() => this.storage() * 620 * this.nodes() / 100);
  readonly total = computed(() => this.computeCost() + this.storageCost());
  readonly configuration = computed(() => {
    const plan = this.selectedPlan();
    return `${plan.name} (${plan.cpu} vCPU/${plan.memory} GB) · ${this.version()} · ${this.ha() ? 'Replica set' : 'Standalone'} · ${this.nodes()} nodes · ${this.replicas()} additional read replicas · ${this.storage()} GB NVMe per node · est. ${this.money(this.total())}/month excluding GST`;
  });
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  money(value: number): string { return `₹${Math.round(value).toLocaleString('en-IN')}`; }
  hourly(value: number): string { return `₹${value.toFixed(2)}`; }
  tablePrice(value: number): string {
    const rate = Math.round(value * 100) * (this.ha() ? 3 : 1) / 100;
    return this.billing() === 'h' ? this.hourly(rate) : this.money(rate * 730);
  }
  selectPlan(event: Event): void { this.planCode.set((event.target as HTMLSelectElement).value as PlanCode); }
  setMode(ha: boolean): void {
    this.ha.set(ha); this.architecture.set(ha ? 'ha' : 'solo'); this.profile.set('');
  }
  chooseArchitecture(key: Architecture): void {
    this.architecture.set(key); this.profile.set(''); this.ha.set(key !== 'solo');
    this.replicas.set(key === 'rs' ? 2 : 0);
  }
  onArchitectureKey(event: KeyboardEvent, key: Architecture): void {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault(); this.chooseArchitecture(key);
  }
  chooseProfile(profile: Profile): void {
    this.profile.set(profile); this.ha.set(profile !== 'dev');
    this.planCode.set(profile === 'dev' ? 'mgo.s' : profile === 'cat' ? 'mgo.l' : 'mgo.m');
    this.replicas.set(profile === 'cat' ? 1 : 0);
    this.architecture.set(profile === 'dev' ? 'solo' : 'ha');
    this.host.querySelector('.calc')?.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'center' });
  }
  requestQuote(event: Event, configuration = this.configuration()): void {
    event.preventDefault(); this.quoteRequested.emit({ event, configuration });
  }
}
