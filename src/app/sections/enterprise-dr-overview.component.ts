import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, computed, inject, signal } from '@angular/core';

/** Overview markup and recovery tiers adapted from disaster-recovery2.html. */
@Component({
  selector: 'xh-enterprise-dr-overview',
  standalone: true,
  templateUrl: './enterprise-dr-overview.component.html',
  styleUrl: './enterprise-dr-overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EnterpriseDrOverviewComponent implements AfterViewInit, OnDestroy {
  readonly tiers = [
    { name: 'Backup & restore', rpo: '24 h', rto: '24 h', rpoMinutes: 1440, rtoMinutes: 1440, cost: 1, description: 'Nightly backups restored onto fresh servers. Cheapest — right for archives and non-critical systems.' },
    { name: 'Pilot light', rpo: '1 h', rto: '4 h', rpoMinutes: 60, rtoMinutes: 240, cost: 2, description: 'Data replicates continuously; a minimal core is always on and the rest boots on demand.' },
    { name: 'Warm standby', rpo: '15 min', rto: '1 h', rpoMinutes: 15, rtoMinutes: 60, cost: 3, description: 'A scaled-down copy of production runs at the DR site and scales up on failover.' },
    { name: 'Always-on · OpenText', rpo: 'Seconds', rto: 'Minutes', rpoMinutes: 1, rtoMinutes: 5, cost: 4, description: 'OpenText™ Availability replicates every byte in real time and fails over automatically on a missed heartbeat — for ERP, core banking and customer-facing apps.' },
  ] as const;
  readonly costLevels = [0, 1, 2, 3];
  readonly selectedTier = signal(3);
  readonly tier = computed(() => this.tiers[this.selectedTier()]);
  readonly activeStep = signal(0);
  private readonly replicatedBytes = signal(0);
  readonly bytesLabel = computed(() => {
    let value = this.replicatedBytes();
    let unit = 0;
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    while (value >= 1024 && unit < units.length - 1) { value /= 1024; unit++; }
    return `${value.toFixed(unit ? 1 : 0)} ${units[unit]}`;
  });
  private readonly root = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private flowTimer?: ReturnType<typeof setInterval>;
  private bytesTimer?: ReturnType<typeof setInterval>;
  private observer?: IntersectionObserver;

  selectTier(index: number): void {
    if (index >= 0 && index < this.tiers.length) this.selectedTier.set(index);
  }

  windowWidth(minutes: number): number {
    return Math.max(4, Math.log10(minutes + 1) / Math.log10(1441) * 46);
  }

  ngAfterViewInit(): void {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (typeof IntersectionObserver === 'undefined') { this.startAnimations(); return; }
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) this.startAnimations();
      else this.stopAnimations();
    });
    this.observer.observe(this.root);
  }

  private startAnimations(): void {
    if (this.flowTimer) return;
    this.flowTimer = setInterval(() => this.activeStep.update(step => (step + 1) % 5), 2200);
    this.bytesTimer = setInterval(() => this.replicatedBytes.update(bytes => bytes + 8 * 1024 * 1024), 400);
  }

  private stopAnimations(): void {
    clearInterval(this.flowTimer);
    clearInterval(this.bytesTimer);
    this.flowTimer = undefined;
    this.bytesTimer = undefined;
  }

  ngOnDestroy(): void {
    this.stopAnimations();
    this.observer?.disconnect();
  }
}
