import { QuantitySelectorComponent } from '../shared/quantity-selector.component';
import { CartService } from '../core/cart.service';
import { ChangeDetectionStrategy, Component, inject, input, signal } from '@angular/core';

@Component({
  selector: 'xh-copilot-studio-content',
  standalone: true,
  imports: [QuantitySelectorComponent],
  templateUrl: './copilot-studio-content.component.html',
  styleUrls: ['./copilot-studio-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CopilotStudioContentComponent {
  readonly mode = input<'hero' | 'content'>('content');
  private readonly cart = inject(CartService);
  readonly quantity = signal(1);
  totalPrice(): string {
    return new Intl.NumberFormat('en-IN', {style: 'currency', currency: 'INR', maximumFractionDigits: 0}).format(1660 * this.quantity());
  }
  addPlan(): void {
    this.cart.add('Microsoft Copilot Studio', '?1,660/user/mo', this.quantity(), { unitAmount: 1660, currency: 'INR', locale: 'en-IN', suffix: '/month' });
    this.cart.open();
  }
  readonly activeFeature = signal(0);

  selectFeature(index: number): void {
    this.activeFeature.set(index);
  }
}
