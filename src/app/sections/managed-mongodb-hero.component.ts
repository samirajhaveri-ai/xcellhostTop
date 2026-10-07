import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject, signal } from '@angular/core';

// Diagram, styling and sample shell commands adapted from managed-mongodb.html.
const COMMANDS = [
  ['p', 'rs0 [primary] test> db.version()'],
  ['o', ' 8.0.x'],
  ['p', 'rs0 [primary] test> rs.status().members.map(m => m.stateStr)'],
  ['o', " [ 'PRIMARY', 'SECONDARY', 'SECONDARY' ]"],
  ['p', "rs0 [primary] test> db.orders.insertOne({ sku: 'A-102', qty: 2 })"],
  ['o', " { acknowledged: true, insertedId: ObjectId('…') }"],
  ['p', 'rs0 [primary] test> rs.printSecondaryReplicationInfo()'],
  ['o', ' replLag: 0 secs'],
] as const;

@Component({
  selector: 'xh-managed-mongodb-hero',
  standalone: true,
  templateUrl: './managed-mongodb-hero.component.html',
  styleUrl: './managed-mongodb-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedMongodbHeroComponent {
  readonly reducedMotion = signal(true);
  readonly paused = signal(true);
  readonly terminalRows = signal<readonly (readonly [string, string])[]>(COMMANDS.slice(0, 3));
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.animate());
  }

  private animate(): void {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = true;
    let index = 3;
    let timer: ReturnType<typeof setInterval> | undefined;
    const update = () => {
      if (timer !== undefined) clearInterval(timer);
      timer = undefined;
      this.reducedMotion.set(motion.matches);
      this.paused.set(motion.matches || !visible || document.hidden);
      if (motion.matches) {
        this.terminalRows.set(COMMANDS.slice(-5));
      } else if (!this.paused()) {
        timer = setInterval(() => {
          if (index >= COMMANDS.length) { index = 0; this.terminalRows.set([]); }
          const row = COMMANDS[index++];
          this.terminalRows.update(rows => [...rows, row].slice(-5));
        }, 1500);
      }
    };
    const observer = new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      update();
    });
    observer.observe(this.host);
    motion.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    update();
    this.destroyRef.onDestroy(() => {
      if (timer !== undefined) clearInterval(timer);
      observer.disconnect();
      motion.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    });
  }
}
