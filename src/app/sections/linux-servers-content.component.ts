import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { CartService } from '../core/cart.service';
import { LINUX_SERVER_DATA } from './linux-servers-plans.data';

type LinuxPlan = (typeof LINUX_SERVER_DATA.plans)[number];

/** Only the requested Linux Servers reference sections. */
@Component({
  selector: 'xh-linux-servers-content',
  standalone: true,
  templateUrl: './linux-servers-content.component.html',
  styleUrl: './linux-servers-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinuxServersContentComponent {
  readonly heroOnly = input(false);
  readonly heroCopyOnly = input(false);
  readonly quoteRequested = output<Event>();
  readonly data = LINUX_SERVER_DATA;
  readonly series = [['all', 'All servers'], ...this.data.series];
  readonly selectedSeries = signal('ryzen');
  readonly location = signal('dc1');
  readonly currency = signal('inr');
  readonly sort = signal('rec');
  readonly dc = signal(0);
  readonly selectedPlan = signal<LinuxPlan | null>(null);
  readonly linuxOs = this.data.os.filter(o => o[1] === 0);
  readonly os = signal(0);
  readonly panel = signal(0);
  readonly raids = ['RAID 1 (mirror)', 'RAID 0 (stripe)', 'No RAID'];
  readonly raid = signal(this.raids[0]);
  readonly ips = signal(0);
  readonly backup = signal(0);
  readonly unmetered = signal(false);
  readonly managed = signal(false);
  readonly term = signal(0);
  private readonly cart = inject(CartService);
  private trigger: HTMLElement | null = null;

  readonly seriesHeading = computed(() => this.data.series.find(s => s[0] === this.selectedSeries()) ??
    ['all', 'All servers', 'All dedicated servers', '22 configurations across AMD Ryzen, Intel Xeon Gold, AMD EPYC and budget Xeon — in Tier IV Mumbai and Pune data centres.']);
  readonly plans = computed(() => {
    const plans = this.data.plans.filter(p => this.selectedSeries() === 'all' || p.series === this.selectedSeries());
    return plans.sort((a, b) => {
      switch (this.sort()) {
        case 'pa': return a.inr - b.inr;
        case 'pd': return b.inr - a.inr;
        case 'c': return b.cores - a.cores || a.inr - b.inr;
        case 'r': return b.ram - a.ram || a.inr - b.inr;
        default: return Number(b.hot) - Number(a.hot) || a.inr - b.inr;
      }
    });
  });
  readonly total = computed(() => (this.selectedPlan()?.inr ?? 0) * (1 - this.data.terms[this.term()][2] / 100)
    + this.ips() * this.data.add.ip + this.backup() * this.data.add.backup_gb
    + (this.unmetered() ? this.data.add.bw_unmetered : 0) + (this.managed() ? this.data.add.managed : 0));

  money(amount: number): string {
    return this.currency() === 'usd'
      ? '$' + Math.round(amount / this.data.rate).toLocaleString('en-US')
      : '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  configure(plan: LinuxPlan, event: Event): void {
    if (this.location() === 'global') { this.quoteRequested.emit(event); return; }
    this.trigger = event.currentTarget as HTMLElement;
    this.os.set(0); this.panel.set(0); this.raid.set(this.raids[0]); this.ips.set(0); this.backup.set(0);
    this.unmetered.set(false); this.managed.set(false); this.term.set(0);
    this.selectedPlan.set(plan);
    setTimeout(() => document.querySelector<HTMLButtonElement>('#linuxConfigTitle')?.closest('aside')?.querySelector<HTMLButtonElement>('.bx-x')?.focus());
  }

  close(): void { this.selectedPlan.set(null); this.trigger?.focus(); }

  setQuantity(kind: 'ip' | 'backup', event: Event): void {
    const input = event.target as HTMLInputElement;
    const value = Math.max(0, Math.trunc(Number(input.value) || 0));
    if (kind === 'ip') this.ips.set(Math.min(64, value)); else this.backup.set(value);
  }

  addToCart(): void {
    const plan = this.selectedPlan();
    if (!plan) return;
    const dc = this.data.dcs.find(d => d[0] === this.location())!;
    const details = [plan.cpu, `${plan.ram} GB ${plan.ramt}`, plan.storage, dc[1], this.linuxOs[this.os()][0],
      this.data.panels[this.panel()][0], this.raid(), this.data.terms[this.term()][1],
      this.managed() ? 'Managed' : 'Unmanaged', `${this.ips()} extra IPv4`, `${this.backup()} GB backup`,
      this.unmetered() ? 'Unmetered 1 Gbps' : `${plan.bw} transfer`];
    const inUsd = this.currency() === 'usd';
    const amount = inUsd ? Math.round(this.total() / this.data.rate) : this.total();
    const suffix = this.panel() > 0 ? '/month + GST; panel licence quoted separately' : '/month + GST';
    this.cart.add('Linux Servers — ' + details.join(' · '), this.money(this.total()) + suffix, 1,
      { unitAmount: amount, currency: inUsd ? 'USD' : 'INR', locale: inUsd ? 'en-US' : 'en-IN', suffix });
    this.close(); this.cart.open();
  }
}
