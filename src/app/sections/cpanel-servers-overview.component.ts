import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { CPANEL_SERVER_BUNDLES } from './cpanel-servers-bundles.data';

type BundleKey = (typeof CPANEL_SERVER_BUNDLES.bundles)[number]['k'];

@Component({
  selector: 'xh-cpanel-servers-overview',
  standalone: true,
  templateUrl: './cpanel-servers-overview.component.html',
  styleUrl: './cpanel-servers-overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CpanelServersOverviewComponent {
  readonly quoteRequested = output<{ event: Event; configuration: string }>();
  private readonly bundleKey = signal<BundleKey>('vps8');
  readonly accounts = signal(30);
  readonly billing = signal<'m' | 'y'>('y');
  readonly bundle = computed(() => CPANEL_SERVER_BUNDLES.bundles.find(b => b.k === this.bundleKey())!);
  readonly licence = computed(() => {
    const accounts = this.accounts();
    return CPANEL_SERVER_BUNDLES.licences.find(l => accounts <= l.d)
      ?? CPANEL_SERVER_BUNDLES.licences[CPANEL_SERVER_BUNDLES.licences.length - 1];
  });
  readonly licencePrice = computed(() => this.licence().p
    + Math.max(0, this.accounts() - 100) * CPANEL_SERVER_BUNDLES.extraAccountPrice);
  readonly licenceName = computed(() => this.licence().n
    + (this.accounts() > 100 ? ` + ${this.accounts() - 100} extra` : ''));
  readonly serverPrice = computed(() => this.bundle().p * (this.billing() === 'y' ? .92 : 1));
  readonly subtotal = computed(() => this.serverPrice() + this.licencePrice());
  readonly hint = computed(() => `This bundle supports up to ${this.bundle().cap} accounts. ${this.accounts()} account${this.accounts() === 1 ? '' : 's'} → ${this.licence().n} licence.`);
  readonly billingNote = computed(() => this.billing() === 'y'
    ? 'Billed yearly · 8% off the server' : 'Billed monthly');

  money(amount: number): string {
    return '₹' + Math.round(amount).toLocaleString('en-IN');
  }

  selectBundle(key: BundleKey): void {
    this.bundleKey.set(key);
    this.accounts.set(this.bundle().cap);
  }

  selectAccounts(event: Event): void {
    const value = Number((event.target as HTMLInputElement).value);
    if (Number.isFinite(value)) this.accounts.set(Math.max(1, Math.min(this.bundle().cap, Math.round(value))));
  }

  selectBilling(billing: 'm' | 'y'): void {
    this.billing.set(billing);
  }

  requestServer(event: Event): void {
    event.preventDefault();
    const configuration = `${this.bundle().n} — ${this.accounts()} cPanel accounts — ${this.licenceName()} — ${this.billing() === 'y' ? 'annual' : 'monthly'} — ${this.money(this.subtotal() * 1.18)}/mo incl. GST`;
    this.quoteRequested.emit({ event, configuration });
  }
}
