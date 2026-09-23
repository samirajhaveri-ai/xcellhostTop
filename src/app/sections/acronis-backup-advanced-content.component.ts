import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

type PlanKey = 'workstation' | 'server' | 'virtualHost' | 'applicationServer';

const PLANS: Record<PlanKey, { name: string; unitPrice: number; unit: string }> = {
  workstation: { name: 'Workstation', unitPrice: 1999, unit: 'device' },
  server: { name: 'Server', unitPrice: 12999, unit: 'server' },
  virtualHost: { name: 'Virtual host', unitPrice: 24999, unit: 'host' },
  applicationServer: { name: 'Application server', unitPrice: 18999, unit: 'server' },
};

const formatPrice = new Intl.NumberFormat('en-IN');

@Component({
  selector: 'xh-acronis-backup-advanced-content',
  standalone: true,
  templateUrl: './acronis-backup-advanced-content.component.html',
  styleUrl: './acronis-backup-advanced-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AcronisBackupAdvancedContentComponent {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  readonly quantities = signal<Record<PlanKey, number>>({
    workstation: 1,
    server: 1,
    virtualHost: 1,
    applicationServer: 1,
  });

  quantity(plan: PlanKey): number {
    return this.quantities()[plan];
  }

  total(plan: PlanKey): string {
    return formatPrice.format(PLANS[plan].unitPrice * this.quantity(plan));
  }

  changeQuantity(plan: PlanKey, change: number): void {
    this.quantities.update((quantities) => ({
      ...quantities,
      [plan]: Math.max(1, Math.min(99, quantities[plan] + change)),
    }));
  }

  getQuote(plan: PlanKey): void {
    const selected = PLANS[plan];
    const count = this.quantity(plan);
    this.topics.ask(`Acronis Backup Advanced — ${selected.name}, ${count} ${selected.unit}${count === 1 ? '' : 's'} (₹${this.total(plan)}/yr + GST)`);
    this.overlay.open('callback');
  }

}
