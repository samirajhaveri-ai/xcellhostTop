import { ChangeDetectionStrategy, Component, ElementRef, ViewChild, computed, inject, input, signal } from '@angular/core';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'xh-business-email-content',
  standalone: true,
  templateUrl: './business-email-content.component.html',
  styleUrl: './business-email-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BusinessEmailContentComponent {
  readonly heroOnly = input(false);
  readonly activeTab = signal(0);
  readonly plans = {
    essential: { name: 'Essential', storage: 1, price: 349 },
    standard: { name: 'Standard', storage: 5, price: 449 },
    stdplus: { name: 'Standard Plus', storage: 10, price: 649 },
    pro: { name: 'Professional', storage: 25, price: 849 },
    enterprise: { name: 'Enterprise', storage: 50, price: 999 },
  } as const;
  readonly selectedPlan = signal<keyof typeof this.plans>('essential');
  readonly quantities = signal({ essential: 1, standard: 1, stdplus: 1, pro: 1, enterprise: 1 });

  adjustQuantity(key: keyof typeof this.plans, change: number): void {
    this.quantities.update(values => ({ ...values, [key]: Math.max(1, Math.min(9999, values[key] + change)) }));
  }

  addPlanToCart(key: keyof typeof this.plans): void {
    this.selectedPlan.set(key);
    this.users.set(this.quantities()[key]);
    this.addToCart();
  }
  readonly users = signal(1);
  readonly plan = computed(() => this.plans[this.selectedPlan()]);
  readonly total = computed(() => this.plan().price * this.users());
  private readonly cart = inject(CartService);
  @ViewChild('configuration') private configuration?: ElementRef<HTMLDialogElement>;

  configure(key: keyof typeof this.plans): void {
    this.selectedPlan.set(key);
    this.users.set(1);
    this.configuration?.nativeElement.showModal();
  }

  setUsers(value: string): void {
    this.users.set(Math.max(1, Math.min(9999, Math.trunc(Number(value)) || 1)));
  }

  changeUsers(change: number): void {
    this.users.update(value => Math.max(1, Math.min(9999, value + change)));
  }

  inr(value: number): string {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(value);
  }

  addToCart(): void {
    this.cart.add(
      `XcellBizMail ${this.plan().name} Mailbox - Annual`,
      `${this.inr(this.plan().price)} + GST / user / year`,
      this.users(),
    );
    this.configuration?.nativeElement.close();
    this.cart.open();
  }
}
