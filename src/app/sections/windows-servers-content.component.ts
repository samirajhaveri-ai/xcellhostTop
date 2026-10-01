import { ChangeDetectionStrategy, Component, computed, inject, input, output, signal } from '@angular/core';
import { CartService } from '../core/cart.service';
import { WINDOWS_SERVER_DATA } from './windows-servers-plans.data';

type WindowsPlan = (typeof WINDOWS_SERVER_DATA.plans)[number];

/** Only the requested Windows Servers reference sections. */
@Component({
  selector: 'xh-windows-servers-content',
  standalone: true,
  templateUrl: './windows-servers-content.component.html',
  styleUrl: './windows-servers-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowsServersContentComponent {
  readonly heroOnly = input(false);
  readonly heroCopyOnly = input(false);
  readonly quoteRequested = output<Event>();
  readonly data = WINDOWS_SERVER_DATA;
  readonly series = [['all', 'All servers'], ...this.data.series];
  readonly selectedSeries = signal('ryzen');
  readonly location = signal('dc1');
  readonly currency = signal('inr');
  readonly sort = signal('rec');
  readonly dc = signal(0);
  readonly selectedPlan = signal<WindowsPlan | null>(null);
  readonly windowsOs = this.data.os.filter(o => o[1] === "win" || o[1] === "quote");
  readonly os = signal(this.windowsOs.findIndex(o => o[0] === this.data.os[this.data.defOs][0]));
  readonly panel = signal(0);
  readonly checklist = signal<boolean[]>(Array(8).fill(false));
  readonly checkedCount = computed(() => this.checklist().filter(Boolean).length);
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
        case 'pa': return this.planPrice(a) - this.planPrice(b);
        case 'pd': return this.planPrice(b) - this.planPrice(a);
        case 'c': return b.cores - a.cores || a.inr - b.inr;
        case 'r': return b.ram - a.ram || a.inr - b.inr;
        default: return Number(b.hot) - Number(a.hot) || a.inr - b.inr;
      }
    });
  });
  readonly total = computed(() => (this.selectedPlan()?.inr ?? 0) * (1 - this.data.terms[this.term()][2] / 100)
    + (this.selectedPlan() && this.windowsOs[this.os()][1] === "win" ? this.licence(this.selectedPlan()!) : 0)
    + this.ips() * this.data.add.ip + this.backup() * this.data.add.backup_gb
    + (this.unmetered() ? this.data.add.bw_unmetered : 0) + (this.managed() ? this.data.add.managed : 0));

  setCheck(index: number, checked: boolean): void {
    this.checklist.update(values => values.map((value, i) => i === index ? checked : value));
  }

  licence(plan: WindowsPlan): number {
    return Math.ceil(Math.max(16, plan.cores, plan.sockets * 8) / 2) * this.data.add.win_per_2c;
  }

  planPrice(plan: WindowsPlan): number { return plan.inr + this.licence(plan); }

  money(amount: number): string {
    return this.currency() === 'usd'
      ? '$' + Math.round(amount / this.data.rate).toLocaleString('en-US')
      : '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  configure(plan: WindowsPlan, event: Event): void {
    if (this.location() === 'global') { this.quoteRequested.emit(event); return; }
    this.trigger = event.currentTarget as HTMLElement;
    this.os.set(this.windowsOs.findIndex(o => o[0] === this.data.os[this.data.defOs][0])); this.panel.set(0); this.raid.set(this.raids[0]); this.ips.set(0); this.backup.set(0);
    this.unmetered.set(false); this.managed.set(false); this.term.set(0);
    this.selectedPlan.set(plan);
    setTimeout(() => document.querySelector<HTMLButtonElement>('#windowsConfigTitle')?.closest('aside')?.querySelector<HTMLButtonElement>('.bx-x')?.focus());
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
    const details = [plan.cpu, `${plan.ram} GB ${plan.ramt}`, plan.storage, dc[1], this.windowsOs[this.os()][0],
      this.data.panels[this.panel()][0], this.raid(), this.data.terms[this.term()][1],
      this.managed() ? 'Managed' : 'Unmanaged', `${this.ips()} extra IPv4`, `${this.backup()} GB backup`,
      this.unmetered() ? 'Unmetered 1 Gbps' : `${plan.bw} transfer`];
    const inUsd = this.currency() === 'usd';
    const amount = inUsd ? Math.round(this.total() / this.data.rate) : this.total();
    const quoted = this.panel() > 0 || this.windowsOs[this.os()][1] === 'quote';
    const suffix = quoted ? '/month + GST; additional licences quoted separately' : '/month + GST';
    this.cart.add('Windows Servers — ' + details.join(' · '), this.money(this.total()) + suffix, 1,
      { unitAmount: amount, currency: inUsd ? 'USD' : 'INR', locale: inUsd ? 'en-US' : 'en-IN', suffix });
    this.close(); this.cart.open();
  }
}
