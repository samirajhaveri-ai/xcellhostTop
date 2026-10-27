import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';

/** Dashboard adapted from digital-menu-and-catalog-management.html. */
@Component({
  selector: 'xh-digital-menu-hero',
  standalone: true,
  templateUrl: './digital-menu-hero.component.html',
  styleUrl: './digital-menu-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitalMenuHeroComponent implements OnDestroy {
  readonly menuItems = [
    '☕ Hot beverages',
    '🥤 Cold coffee — ₹149',
    '🍰 Desserts',
    "⭐ Chef's special",
    '🥪 Sandwiches',
  ];
  readonly activeItem = signal(3);
  readonly feed = signal<{ time: string; message: string }[]>([]);
  private readonly messages = [
    'Paneer tikka marked sold out',
    'Price updated: Cold coffee ₹149',
    "Chef's special pinned",
    'Lunch rush: 312 views',
    'New theme published',
  ];
  private index = 0;
  private readonly feedTimer?: ReturnType<typeof setInterval>;
  private readonly highlightTimer?: ReturnType<typeof setInterval>;

  constructor() {
    for (let i = 0; i < 4; i++) this.addFeedItem();
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.feedTimer = setInterval(() => this.addFeedItem(), 2000);
    this.highlightTimer = setInterval(() => {
      this.activeItem.update(item => (item + 1) % this.menuItems.length);
    }, 1100);
  }

  private addFeedItem(): void {
    const now = new Date();
    const time = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    const message = this.messages[this.index++ % this.messages.length];
    this.feed.update(items => [...items, { time, message }].slice(-6));
  }

  ngOnDestroy(): void {
    clearInterval(this.feedTimer);
    clearInterval(this.highlightTimer);
  }
}
