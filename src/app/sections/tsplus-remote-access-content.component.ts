import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-tsplus-remote-access-content',
  standalone: true,
  templateUrl: './tsplus-remote-access-content.component.html',
  styleUrls: ['./vmc-content.component.css', './tsplus-server-monitoring-content.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsplusRemoteAccessContentComponent {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  readonly pricingMode = signal<'perpetual' | 'subscription'>('perpetual');
  readonly subscriptionUsers = signal(1);
  readonly perpetualUserTiers = [
    { users: 3, price: 315 },
    { users: 5, price: 465 },
    { users: 10, price: 865 },
    { users: 25, price: 1730 },
  ] as const;

  requestQuote(plan: string): void {
    this.topics.ask(`TSplus Remote Access — ${plan}`);
    this.overlay.open('callback');
  }

  setPricingMode(mode: 'perpetual' | 'subscription'): void {
    this.pricingMode.set(mode);
  }

  changeSubscriptionUsers(delta: number): void {
    this.subscriptionUsers.update((users) => Math.max(1, users + delta));
  }

  subscriptionTotal(): number {
    return this.subscriptionUsers() * 175;
  }
}
