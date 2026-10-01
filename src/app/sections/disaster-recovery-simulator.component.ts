import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnDestroy, inject, signal } from '@angular/core';

type RecoveryState = 'ok' | 'down' | 'fo' | 'dr' | 'fb';

/** SVG, styling and recovery sequence adapted from disaster-recovery2.html. */
@Component({
  selector: 'xh-disaster-recovery-simulator',
  standalone: true,
  templateUrl: './disaster-recovery-simulator.component.html',
  styleUrl: './disaster-recovery-simulator.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisasterRecoverySimulatorComponent implements AfterViewInit, OnDestroy {
  readonly entries = signal<{ time: string; message: string; kind: string }[]>([]);
  private readonly root = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private state: RecoveryState = 'ok';
  private automatic = true;
  private reducedMotion = false;
  private timers: ReturnType<typeof setTimeout>[] = [];
  private clock?: ReturnType<typeof setInterval>;
  private lag?: ReturnType<typeof setInterval>;
  private observer?: IntersectionObserver;

  private element<T extends Element = HTMLElement>(selector: string): T {
    return this.root.querySelector<T>(selector)!;
  }

  ngAfterViewInit(): void {
    this.reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
    this.setState('ok');
    this.log('Live', 'Replicating 4 servers to DR site', 'ok');
    this.lag = setInterval(() => {
      if (this.state === 'ok') this.element('#dzLag').textContent = `lag ${1 + Math.floor(Math.random() * 4)}s`;
    }, 1200);
    if (this.reducedMotion) return;
    if (typeof IntersectionObserver === 'undefined') {
      this.later(2500, () => this.disaster());
      return;
    }
    this.observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      this.observer?.disconnect();
      this.later(2500, () => this.disaster());
    });
    this.observer.observe(this.root);
  }

  activate(): void {
    if (this.state !== 'ok' && this.state !== 'dr') return;
    this.automatic = false;
    this.observer?.disconnect();
    if (this.state === 'dr') this.failback();
    else this.disaster();
  }

  private setState(state: RecoveryState): void {
    this.state = state;
    this.element('#dzSvg').setAttribute('class', `s-${state}`);
    const status: Record<RecoveryState, [string, string]> = {
      ok: ['● PROTECTED', '#4ADE80'], down: ['● OUTAGE', '#FCA5A5'],
      fo: ['● FAILING OVER', '#FBBF24'], dr: ['● RUNNING ON DR', '#4ADE80'],
      fb: ['● FAILING BACK', '#93C5FD'],
    };
    const primary = { ok: 'ACTIVE', down: 'OUTAGE', fo: 'OUTAGE', dr: 'OFFLINE · UNDER REPAIR', fb: 'RESYNCING' };
    const secondary = { ok: 'STANDBY · REPLICA', down: 'STANDBY · REPLICA', fo: 'BOOTING', dr: 'ACTIVE', fb: 'ACTIVE' };
    const replication = { ok: 'REPLICATING', down: 'LINK LOST', fo: 'LINK LOST', dr: 'PAUSED', fb: 'SYNCING BACK' };
    this.element('#dzState').textContent = status[state][0];
    this.element('#dzState').style.color = status[state][1];
    this.element('#bdP').textContent = primary[state];
    this.element('#bdP').style.fill = state === 'ok' ? '#34D399' : state === 'fb' ? '#93C5FD' : '#FCA5A5';
    this.element('#bdD').textContent = secondary[state];
    this.element('#bdD').style.fill = state === 'dr' || state === 'fb' ? '#34D399' : '#F59E0B';
    this.element('#dzRl').textContent = replication[state];
    this.element('#dzFrom').textContent = state === 'dr' || state === 'fb' ? 'DR site' : state === 'ok' ? 'Primary' : '—';
    this.element('#dzSvg').setAttribute('aria-label', `Disaster recovery simulation: ${status[state][0].slice(2)}. Primary ${primary[state]}; DR site ${secondary[state]}.`);
    const button = this.element<HTMLButtonElement>('#dzGo');
    button.disabled = state === 'down' || state === 'fo' || state === 'fb';
    button.classList.toggle('fb', state === 'dr');
    button.textContent = state === 'dr' ? '↺ Fail back to primary' : state === 'fb' ? 'Syncing back to primary…' : state === 'down' || state === 'fo' ? 'Recovering services…' : '⚡ Simulate a disaster';
  }

  private log(time: string, message: string, kind = ''): void {
    this.entries.update(entries => [...entries, { time, message, kind }].slice(-4));
  }

  private later(delay: number, action: () => void): void {
    this.timers.push(setTimeout(action, this.reducedMotion ? Math.min(delay, 50) : delay));
  }

  private clearTimers(): void {
    this.timers.forEach(clearTimeout);
    this.timers = [];
    clearInterval(this.clock);
  }

  private leds(active: boolean): void {
    this.root.querySelectorAll('#dzD .dz-led').forEach(led => led.classList.toggle('on', active));
  }

  private disaster(): void {
    this.clearTimers();
    this.entries.set([]);
    this.setState('down');
    this.leds(false);
    this.element('#dzLag').textContent = 'synced 2s before';
    this.element('#dzLag').style.fill = '#FCA5A5';
    this.log('T+00:00', 'Primary site unreachable — outage detected', 'bad');
    const start = performance.now();
    if (!this.reducedMotion) this.clock = setInterval(() => {
      const minutes = Math.min(14, (performance.now() - start) / 1000 * 2.8);
      this.element('#dzRto').textContent = `00:${String(Math.floor(minutes)).padStart(2, '0')}:${String(Math.floor(minutes % 1 * 60)).padStart(2, '0')}`;
    }, 100);
    this.later(1300, () => {
      this.setState('fo');
      this.log('T+02:10', 'Failover approved · runbook DR-01 started');
    });
    ['Database tier online', 'ERP app tier online', 'Web tier online', 'Files online · IP & DNS re-mapped'].forEach((message, row) => {
      this.later(2000 + row * 700, () => {
        this.root.querySelectorAll(`#dzD .dz-led[data-r="${row}"]`).forEach(led => led.classList.add('on'));
        this.log(`T+${String(4 + row * 2).padStart(2, '0')}:00`, message, 'ok');
      });
    });
    this.later(5100, () => {
      clearInterval(this.clock);
      this.element('#dzRto').textContent = '00:14:00';
      this.setState('dr');
      this.log('T+14:00', 'Business running on DR site · RPO seconds', 'ok');
      if (this.automatic) this.later(4200, () => this.failback());
    });
  }

  private failback(): void {
    this.clearTimers();
    this.setState('fb');
    this.log('Planned', 'Primary repaired · syncing changes back');
    this.later(2600, () => {
      this.setState('ok');
      this.leds(false);
      this.entries.set([]);
      this.log('Planned', 'Failback complete · zero data loss', 'ok');
      this.element('#dzRto').textContent = '00:00';
      this.element('#dzLag').textContent = 'lag 2s';
      this.element('#dzLag').style.fill = '#34D399';
      if (this.automatic) this.later(3500, () => this.disaster());
    });
  }

  ngOnDestroy(): void {
    this.clearTimers();
    clearInterval(this.lag);
    this.observer?.disconnect();
  }
}
