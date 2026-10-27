import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, computed, DestroyRef, ElementRef, inject, signal } from '@angular/core';

type Workspace = 'code' | 'cw';
type RecoveryState = 'protected' | 'changing' | 'broken' | 'restoring' | 'recovered';

/** The interactive recovery illustration from claude-backup.html. */
@Component({
  selector: 'xh-claude-backup-hero',
  standalone: true,
  templateUrl: './claude-backup-hero.component.html',
  styleUrl: './claude-backup-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClaudeBackupHeroComponent {
  private readonly document = inject(DOCUMENT);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private readonly workspaces = {
    code: {
      path: '~/projects/shop-api',
      files: [
        { name: 'src/checkout.ts', change: 'MODIFIED' },
        { name: 'src/payments/upi.ts', change: 'MODIFIED' },
        { name: 'CLAUDE.md', change: 'MODIFIED' },
        { name: '.claude/settings.json', change: 'MODIFIED' },
        { name: '~/.claude/projects/…/session.jsonl', change: 'DELETED' },
      ],
    },
    cw: {
      path: 'Q3 board pack',
      files: [
        { name: 'board-pack.pptx', change: 'OVERWRITTEN' },
        { name: 'revenue-model.xlsx', change: 'OVERWRITTEN' },
        { name: 'Project memory', change: 'RESET' },
        { name: 'Skills: brand-voice', change: 'REMOVED' },
        { name: 'Task history', change: 'DELETED' },
      ],
    },
  };
  readonly workspace = signal<Workspace>('code');
  readonly state = signal<RecoveryState>('protected');
  readonly changedFiles = signal(0);
  readonly progress = signal(0);
  readonly reducedMotion = signal(false);
  readonly data = computed(() => this.workspaces[this.workspace()]);
  readonly status = computed(() => ({
    protected: 'PROTECTED', changing: 'ISSUE DETECTED', broken: 'ISSUE DETECTED',
    restoring: 'RESTORING', recovered: 'RECOVERED',
  })[this.state()]);
  readonly caption = computed(() => ({
    protected: 'Hourly snapshots running — last one 2 min ago',
    changing: "Agent session changed files you didn't expect…",
    broken: '✗ 5 items broken. Pick the 10:42 snapshot to restore.',
    restoring: 'Restoring project, session & settings from 10:42…',
    recovered: '✓ Whole environment restored — pick up where you left off',
  })[this.state()]);
  readonly buttonText = computed(() => ({
    protected: 'Simulate bad AI change', changing: 'Simulating…', broken: 'Restore 10:42 snapshot',
    restoring: 'Restoring…', recovered: 'Run again',
  })[this.state()]);
  readonly snapshots = Array.from({ length: 10 }, (_, index) => index);
  private timers = new Set<number>();
  private cycleTimer: number | undefined;
  private manual = false;

  constructor() {
    afterNextRender(() => {
      const window = this.document.defaultView;
      if (!window) return;
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      let visible = false;
      let started = false;
      const syncMotion = () => {
        this.reducedMotion.set(motion.matches);
        this.clearTimers();
        if (motion.matches) {
          this.workspace.set('cw');
          this.finishRestore();
        } else if (visible && !this.manual) {
          this.reset();
          this.later(() => this.simulate(true), 1200);
          started = true;
        }
      };
      syncMotion();
      motion.addEventListener('change', syncMotion);
      const observer = new IntersectionObserver(entries => {
        visible = entries[0].isIntersecting;
        if (visible && !started && !motion.matches && !this.manual) {
          started = true;
          this.later(() => this.simulate(true), 1200);
        }
      }, { threshold: .1 });
      observer.observe(this.host.nativeElement);
      this.cycleTimer = window.setInterval(() => {
        if (!visible || this.document.hidden || motion.matches || this.manual) return;
        this.changeWorkspace(this.workspace() === 'code' ? 'cw' : 'code');
      }, 9000);
      this.destroyRef.onDestroy(() => {
        this.clearTimers();
        window.clearInterval(this.cycleTimer);
        observer.disconnect();
        motion.removeEventListener('change', syncMotion);
      });
    });
  }

  selectWorkspace(workspace: Workspace): void {
    this.takeControl();
    this.changeWorkspace(workspace);
  }

  run(): void {
    if (this.state() === 'changing' || this.state() === 'restoring') return;
    this.takeControl();
    if (this.state() === 'broken') this.restore();
    else {
      this.reset();
      this.simulate(false);
    }
  }

  restoreSnapshot(): void {
    if (this.state() !== 'broken') return;
    this.takeControl();
    this.restore();
  }

  private takeControl(): void {
    this.manual = true;
    this.document.defaultView?.clearInterval(this.cycleTimer);
  }

  private changeWorkspace(workspace: Workspace): void {
    this.reset();
    this.workspace.set(workspace);
    if (this.reducedMotion()) this.finishRestore();
    else this.later(() => this.simulate(true), 900);
  }

  private reset(): void {
    this.clearTimers();
    this.state.set('protected');
    this.changedFiles.set(0);
    this.progress.set(0);
  }

  private simulate(automatic: boolean): void {
    this.clearTimers();
    this.state.set('changing');
    const breakFiles = () => {
      this.changedFiles.set(5);
      this.state.set('broken');
      if (automatic) this.later(() => this.restore(), 1800);
    };
    if (this.reducedMotion()) {
      breakFiles();
      return;
    }
    this.data().files.forEach((_, index) => this.later(() => this.changedFiles.set(index + 1), 200 + index * 220));
    this.later(breakFiles, 1300);
  }

  private restore(): void {
    this.clearTimers();
    this.state.set('restoring');
    if (this.reducedMotion()) {
      this.finishRestore();
      return;
    }
    const step = () => {
      this.progress.update(value => Math.min(value + 7, 100));
      if (this.progress() < 100) this.later(step, 60);
      else this.finishRestore();
    };
    step();
  }

  private finishRestore(): void {
    this.changedFiles.set(0);
    this.progress.set(100);
    this.state.set('recovered');
  }

  private later(callback: () => void, delay: number): void {
    const window = this.document.defaultView;
    if (!window) return;
    const timer = window.setTimeout(() => {
      this.timers.delete(timer);
      callback();
    }, delay);
    this.timers.add(timer);
  }

  private clearTimers(): void {
    this.timers.forEach(timer => this.document.defaultView?.clearTimeout(timer));
    this.timers.clear();
  }
}
