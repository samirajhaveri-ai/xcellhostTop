import { ChangeDetectionStrategy, Component, computed, output, signal } from '@angular/core';
import { PLESK_SERVER_BUNDLES } from './plesk-servers-bundles.data';

type BundleKey = (typeof PLESK_SERVER_BUNDLES.bundles)[number]['k'];
type Edition = (typeof PLESK_SERVER_BUNDLES.licences)[number]['k'];

@Component({
  selector: 'xh-plesk-servers-overview',
  standalone: true,
  templateUrl: './plesk-servers-overview.component.html',
  styleUrl: './plesk-servers-overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PleskServersOverviewComponent {
  readonly quoteRequested = output<{ event: Event; configuration: string }>();
  private readonly bundleKey = signal<BundleKey>('vdsm');
  readonly edition = signal<Edition>('pro');
  readonly os = signal<'lin' | 'win'>('lin');
  readonly billing = signal<'m' | 'y'>('y');
  readonly bundle = computed(() => PLESK_SERVER_BUNDLES.bundles.find(b => b.k === this.bundleKey())!);
  readonly licence = computed(() => PLESK_SERVER_BUNDLES.licences.find(l => l.k === this.edition())!);
  readonly serverPrice = computed(() => this.bundle().p * (this.billing() === 'y' ? .92 : 1));
  readonly windowsPrice = computed(() => this.os() === 'win' ? PLESK_SERVER_BUNDLES.windows : 0);
  readonly subtotal = computed(() => this.serverPrice() + this.licence().p + this.windowsPrice());
  readonly hint = computed(() => `Plesk ${this.licence().n} includes ${this.licence().d ? this.licence().d + ' domains' : 'unlimited domains'}. Your first month of the Plesk licence is free.`);
  readonly billingNote = computed(() => `${this.billing() === 'y' ? 'Billed yearly · 8% off the server' : 'Billed monthly'} · first month: ${this.money((this.serverPrice() + this.windowsPrice()) * 1.18)} incl. GST (Plesk free)`);

  money(amount: number): string { return '₹' + Math.round(amount).toLocaleString('en-IN'); }
  selectBundle(key: BundleKey): void { this.bundleKey.set(key); this.edition.set(this.bundle().ed); }
  selectEdition(edition: Edition): void { this.edition.set(edition); }
  selectOs(os: 'lin' | 'win'): void { this.os.set(os); }
  selectBilling(billing: 'm' | 'y'): void { this.billing.set(billing); }

  requestServer(event: Event): void {
    event.preventDefault();
    const configuration = `${this.bundle().n} — Plesk ${this.licence().n} — ${this.os() === 'win' ? 'Windows Server' : 'Linux'} — ${this.billing() === 'y' ? 'annual' : 'monthly'} — ${this.money(this.subtotal() * 1.18)}/mo incl. GST`;
    this.quoteRequested.emit({ event, configuration });
  }
}
