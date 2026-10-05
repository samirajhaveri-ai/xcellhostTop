import { DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, OnDestroy, computed, inject, signal } from '@angular/core';

@Component({
  selector: 'xh-sitelock-hero',
  standalone: true,
  templateUrl: './sitelock-hero.component.html',
  styleUrl: './sitelock-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteLockHeroComponent implements AfterViewInit, OnDestroy {
  private readonly view = inject(DOCUMENT).defaultView;
  private readonly timers: number[] = [];
  private sequence = 0;
  private readonly attacks = [
    ['SQL injection', '185.220.x.x'], ['XSS attempt', '45.155.x.x'],
    ['Bad bot', '103.75.x.x'], ['Brute-force login', '91.240.x.x'],
    ['File inclusion', '194.26.x.x'], ['Spam form post', '77.83.x.x'],
    ['Admin path probe', '162.55.x.x'],
  ];
  readonly scanState = signal<'scanning' | 'threat' | 'clean'>('scanning');
  readonly files = signal(0);
  readonly blocked = signal(1248);
  readonly feed = signal<{ id: number; name: string; ip: string }[]>([]);
  readonly statusLabel = computed(() => ({ scanning: 'SCANNING', threat: 'THREAT FOUND', clean: 'PROTECTED' })[this.scanState()]);
  readonly scanLabel = computed(() => ({ scanning: 'Scanning…', threat: 'Threat found', clean: 'Auto-removed ✓' })[this.scanState()]);
  readonly scanDetail = computed(() => this.scanState() === 'scanning'
    ? `${this.format(this.files())} / 3,960 files`
    : this.scanState() === 'threat' ? 'backdoor.php · quarantining' : 'Site clean · next scan in 24h');

  ngAfterViewInit(): void {
    for (let i = 0; i < 4; i++) this.pushAttack();
    if (!this.view || this.view.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.scanState.set('clean');
      return;
    }
    this.timers.push(this.view.setInterval(() => this.pushAttack(), 1700));
    let tick = 0;
    this.timers.push(this.view.setInterval(() => {
      tick = (tick + 1) % 50;
      if (tick < 8) {
        this.scanState.set('scanning');
        this.files.set(tick * 283);
      } else if (tick < 17) {
        this.scanState.set('threat');
      } else {
        this.scanState.set('clean');
      }
    }, 180));
  }

  ngOnDestroy(): void {
    this.timers.forEach(timer => this.view?.clearInterval(timer));
  }

  format(value: number): string { return value.toLocaleString('en-IN'); }

  private pushAttack(): void {
    const id = this.sequence++;
    const [name, ip] = this.attacks[id % this.attacks.length];
    this.feed.update(feed => [{ id, name, ip }, ...feed].slice(0, 5));
    this.blocked.update(count => count + 1 + id % 3);
  }
}
