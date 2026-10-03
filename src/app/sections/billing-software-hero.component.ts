import { Component, OnDestroy, signal } from '@angular/core';

type BillingFeedItem = { time: string; message: string };

@Component({
  selector: 'xh-billing-software-hero',
  standalone: true,
  templateUrl: './billing-software-hero.component.html',
  styleUrl: './billing-software-hero.component.css',
})
export class BillingSoftwareHeroComponent implements OnDestroy {
  readonly billed = signal('₹4.2L');
  readonly paidOnTime = signal('92%');
  readonly recurring = signal('37');
  readonly metricPulse = signal(0);
  readonly feed = signal<BillingFeedItem[]>([]);

  private readonly messages = [
    'Invoice INV-1042 sent · ₹11,800',
    'UPI payment received · reconciled',
    'Recurring retainer raised',
    'Reminder: 3 invoices overdue',
    'GST summary exported',
  ];
  private index = 0;
  private readonly timer?: ReturnType<typeof setInterval>;

  constructor() {
    for (let i = 0; i < 5; i += 1) this.addFeedItem();
    if (!this.prefersReducedMotion()) this.timer = setInterval(() => this.addFeedItem(), 2000);
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  private addFeedItem(): void {
    const messageIndex = this.index % this.messages.length;
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    this.feed.update(items => [...items, { time, message: this.messages[messageIndex] }].slice(-6));
    this.metricPulse.set((messageIndex % 3) + 1);
    this.index += 1;
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
