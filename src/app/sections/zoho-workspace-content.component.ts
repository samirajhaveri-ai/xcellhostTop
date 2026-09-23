import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CartService } from '../core/cart.service';

@Component({
  selector: 'xh-zoho-workspace-content',
  standalone: true,
  templateUrl: './zoho-workspace-content.component.html',
  styleUrls: ['./zoho-workspace-content.component.css', './zoho-workspace-cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZohoWorkspaceContentComponent {
  private readonly cart = inject(CartService);
  readonly plans = {
    lite: { name: 'Mail Lite', monthlyPrice: 75 },
    premium: { name: 'Mail Premium', monthlyPrice: 199 },
    standard: { name: 'Workplace Standard', monthlyPrice: 99 },
    professional: { name: 'Workplace Professional', monthlyPrice: 399 },
  } as const;
  readonly quantities = signal({ lite: 1, premium: 1, standard: 1, professional: 1 });

  adjustQuantity(key: keyof typeof this.plans, change: number): void {
    this.quantities.update(values => ({ ...values, [key]: Math.max(1, Math.min(9999, values[key] + change)) }));
  }

  monthlyTotal(key: keyof typeof this.plans): string {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency', currency: 'INR', maximumFractionDigits: 0,
    }).format(this.plans[key].monthlyPrice * this.quantities()[key]);
  }

  monthlyLabel(key: keyof typeof this.plans): string {
    const count = this.quantities()[key];
    return count === 1 ? 'per user / month · annual + GST' : `per month for ${count} users · annual + GST`;
  }

  addToCart(key: keyof typeof this.plans): void {
    const plan = this.plans[key];
    const users = this.quantities()[key];
    const annualPrice = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(plan.monthlyPrice * 12);
    this.cart.add(`Zoho ${plan.name} - Annual`, `${annualPrice} + GST / user / year`, users, {
      unitAmount: plan.monthlyPrice, currency: 'INR', locale: 'en-IN',
      suffix: '/month · annual billing + GST',
    });
    this.cart.open();
  }
}
