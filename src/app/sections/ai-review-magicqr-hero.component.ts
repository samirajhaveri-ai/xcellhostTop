import { Component, OnDestroy, OnInit, signal } from '@angular/core';

interface MagicQrFeedItem {
  id: number;
  time: string;
  message: string;
}

@Component({
  selector: 'xh-ai-review-magicqr-hero',
  standalone: true,
  templateUrl: './ai-review-magicqr-hero.component.html',
  styleUrl: './ai-review-magicqr-hero.component.css',
})
export class AiReviewMagicqrHeroComponent implements OnInit, OnDestroy {
  readonly choices = ['★★★★★ Loved it', '★★★★ Good', '★★★ Okay', 'Message the owner'];
  readonly activeChoice = signal(1);
  readonly reviewCount = signal(142);
  readonly privateNotes = signal(38);

  private readonly feedMessages = [
    'Table 7 scanned → 5★ Google review',
    "Private note: 'AC too cold' → owner",
    'QR updated — no reprint',
    'Zomato review posted',
    'Weekly scans: 612',
  ];
  private feedCursor = 4;
  private nextFeedId = 7;
  private choiceTimer?: ReturnType<typeof setInterval>;
  private feedTimer?: ReturnType<typeof setInterval>;

  readonly feed = signal<MagicQrFeedItem[]>([
    { id: 1, time: this.currentTime(), message: 'QR updated — no reprint' },
    { id: 2, time: this.currentTime(), message: 'Zomato review posted' },
    { id: 3, time: this.currentTime(), message: 'Weekly scans: 612' },
    { id: 4, time: this.currentTime(), message: 'Table 7 scanned → 5★ Google review' },
    { id: 5, time: this.currentTime(), message: "Private note: 'AC too cold' → owner" },
    { id: 6, time: this.currentTime(), message: 'QR updated — no reprint' },
  ]);

  ngOnInit(): void {
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    this.choiceTimer = setInterval(
      () => this.activeChoice.update((choice) => (choice + 1) % this.choices.length),
      1_100,
    );
    this.feedTimer = setInterval(() => this.addAutomatedFeedItem(), 2_000);
  }

  chooseRating(index: number): void {
    this.activeChoice.set(index);
    const messages = [
      '5★ review draft ready to post',
      '4★ feedback captured for follow-up',
      'Customer feedback saved privately',
      'Private message sent to the owner',
    ];
    if (index === 0) this.reviewCount.update((count) => count + 1);
    if (index >= 2) this.privateNotes.update((count) => count + 1);
    this.pushFeed(messages[index]);
  }

  ngOnDestroy(): void {
    if (this.choiceTimer) clearInterval(this.choiceTimer);
    if (this.feedTimer) clearInterval(this.feedTimer);
  }

  private addAutomatedFeedItem(): void {
    const message = this.feedMessages[this.feedCursor++ % this.feedMessages.length];
    if (message.includes('review posted') || message.includes('Google review')) {
      this.reviewCount.update((count) => count + 1);
    }
    if (message.startsWith('Private note')) this.privateNotes.update((count) => count + 1);
    this.pushFeed(message);
  }

  private pushFeed(message: string): void {
    const item = { id: this.nextFeedId++, time: this.currentTime(), message };
    this.feed.update((items) => [...items, item].slice(-6));
  }

  private currentTime(): string {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  }
}
