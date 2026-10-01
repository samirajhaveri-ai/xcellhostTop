import { AfterViewInit, Component, ElementRef, OnDestroy, signal } from '@angular/core';

type Industry = {
  name: string;
  icon: string;
  description: string;
  points: string[];
};

@Component({
  selector: 'xh-ai-review-magicqr-overview',
  standalone: true,
  templateUrl: './ai-review-magicqr-overview.component.html',
  styleUrl: './ai-review-magicqr-overview.component.css',
})
export class AiReviewMagicqrOverviewComponent implements AfterViewInit, OnDestroy {
  readonly rating = signal(0);
  readonly selectedKeywords = signal<string[]>([]);
  readonly activeIndustry = signal(0);

  readonly keywords = ['Great coffee', 'Friendly staff', 'Quick service', 'Cosy ambience', 'Value for money'];
  readonly features = [
    { icon: 'message', title: 'Smart feedback flow', body: 'Customers rate first; everyone can post on Google, and lower ratings also open a private feedback form.' },
    { icon: 'spark', title: 'AI review draft', body: "Customers tap keywords like 'friendly staff' and 'great coffee' and get a draft they can edit and post." },
    { icon: 'print', title: 'Printable QR standees', body: 'Ready-to-print designs for counters, tables and bills.' },
    { icon: 'link', title: 'Dynamic QR', body: 'Change where a printed QR points at any time — no reprinting.' },
    { icon: 'globe', title: 'Multi-platform reviews', body: 'Send customers to Google, Zomato, Trustpilot or industry sites.' },
    { icon: 'pulse', title: 'Scan analytics', body: 'Scans by location, device and time of day.' },
    { icon: 'chart', title: 'Review growth report', body: 'Weekly review count and average rating trend.' },
    { icon: 'users', title: 'Staff attribution', body: 'Separate QR codes per staff member or counter.' },
  ];
  readonly industries: Industry[] = [
    { name: 'Restaurants & cafés', icon: '☕', description: 'A standee on every table and the bill folder.', points: ['Table-wise QR codes', 'Zomato + Google links', 'Private notes to the manager'] },
    { name: 'Salons & spas', icon: '✦', description: 'Ask at checkout when customers are happiest.', points: ['Stylist-wise QR', 'AI review drafts', 'Weekly rating trend'] },
    { name: 'Clinics', icon: '✚', description: 'Patients review after the consultation.', points: ['Reception standee', 'Private feedback for issues', 'Google rating growth'] },
    { name: 'Home services', icon: '⌂', description: 'Technicians share the link after the job.', points: ['WhatsApp review link', 'Technician attribution', 'Review count per staff'] },
  ];

  readonly qrCells = this.makeQrCells();
  private observer?: IntersectionObserver;

  constructor(private readonly host: ElementRef<HTMLElement>) {}

  ngAfterViewInit(): void {
    const nodes = this.host.nativeElement.querySelectorAll<HTMLElement>('[data-reveal]');
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach(node => node.classList.add('is-visible'));
      return;
    }
    this.observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          this.observer?.unobserve(entry.target);
        }
      }
    }, { threshold: 0.12, rootMargin: '0px 0px -40px' });
    nodes.forEach(node => this.observer?.observe(node));
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  setRating(value: number): void {
    this.rating.set(value);
    this.selectedKeywords.set([]);
  }

  toggleKeyword(keyword: string): void {
    this.selectedKeywords.update(current => current.includes(keyword)
      ? current.filter(item => item !== keyword)
      : [...current, keyword]);
  }

  draft(): string {
    const chosen = this.selectedKeywords().map(item => item.toLowerCase());
    if (this.rating() >= 4) {
      return `Lovely visit to Café Mocha${chosen.length ? ` — ${chosen.join(', ')}.` : '.'} Will definitely come back!`;
    }
    return `Visited Café Mocha. ${chosen.length ? `Liked the ${chosen.join(', ')}, but ` : ''}there's room to improve.`;
  }

  private makeQrCells(): Array<{ x: number; y: number }> {
    const cells: Array<{ x: number; y: number }> = [];
    let hash = 0;
    for (let y = 0; y < 29; y += 1) {
      for (let x = 0; x < 29; x += 1) {
        const finder = (x < 7 && y < 7) || (x > 21 && y < 7) || (x < 7 && y > 21);
        let on: boolean;
        if (finder) {
          const localX = x > 21 ? x - 22 : x;
          const localY = y > 21 ? y - 22 : y;
          on = localX === 0 || localX === 6 || localY === 0 || localY === 6 ||
            (localX >= 2 && localX <= 4 && localY >= 2 && localY <= 4);
        } else {
          hash = (hash * 31 + x * 7 + y * 13 + 5) % 97;
          on = hash % 3 === 0;
        }
        if (on) cells.push({ x, y });
      }
    }
    return cells;
  }
}
