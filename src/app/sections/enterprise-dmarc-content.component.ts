import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, computed, inject, input, signal } from '@angular/core';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'xh-enterprise-dmarc-content',
  standalone: true,
  templateUrl: './enterprise-dmarc-content.component.html',
  styleUrl: './enterprise-dmarc-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnterpriseDmarcContentComponent {
  readonly heroOnly = input(false);
  readonly dashboardTab = signal(0);
  readonly plans = {
    basic: { name: 'Basic', monthly: 1499, annualMonthly: 1349 },
    standard: { name: 'Standard', monthly: 4999, annualMonthly: 4499 },
    platinum: { name: 'Platinum', monthly: 15999, annualMonthly: 14399 },
    enterprise: { name: 'Enterprise', monthly: 39999, annualMonthly: 35999 },
  } as const;
  readonly selectedPlan = signal<keyof typeof this.plans>('basic');
  readonly annual = signal(true);
  readonly quantity = signal(1);
  readonly plan = computed(() => this.plans[this.selectedPlan()]);
  readonly total = computed(() => (this.annual() ? this.plan().annualMonthly * 12 : this.plan().monthly) * this.quantity());
  private readonly cart = inject(CartService);
  @ViewChild('configuration') private configuration?: ElementRef<HTMLDialogElement>;

  configure(key: keyof typeof this.plans): void {
    this.selectedPlan.set(key);
    this.annual.set(true);
    this.quantity.set(1);
    this.configuration?.nativeElement.showModal();
  }

  setQuantity(value: string): void {
    this.quantity.set(Math.max(1, Math.min(99, Math.trunc(Number(value)) || 1)));
  }

  inr(value: number): string {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
  }

  addToCart(): void {
    this.cart.add(`Enterprise DMARC - ${this.plan().name} - ${this.annual() ? 'Annual' : 'Monthly'} - ${this.quantity()} subscription(s)`, `${this.inr(this.total())} + GST / ${this.annual() ? 'year' : 'month'}`);
    this.configuration?.nativeElement.close();
    this.cart.open();
  }

}
