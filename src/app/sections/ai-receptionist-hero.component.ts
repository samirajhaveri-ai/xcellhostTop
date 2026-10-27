import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, computed, inject, signal } from '@angular/core';

// Live-call conversation and timing adapted from the supplied ai-receptionist.html.
const MESSAGES = [
  ['ai', "Hi, you've reached QuickFix Plumbing — I'm the virtual assistant. How can I help?"],
  ['c', 'My kitchen sink is leaking, can someone come Monday?'],
  ['ai', 'Sure. Can I take your name and the best number to call you back?'],
  ['c', 'Priya, on this number.'],
  ['ai', "Thanks Priya — I've booked a callback for Monday at 10 am."],
] as const;
const MILESTONES = [1300, 1700, 3200, 4700, 6200, 7700, 9200];

@Component({
  selector: 'xh-ai-receptionist-hero',
  standalone: true,
  templateUrl: './ai-receptionist-hero.component.html',
  styleUrl: './ai-receptionist-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AiReceptionistHeroComponent {
  readonly stage = signal(7);
  readonly paused = signal(true);
  readonly rows = computed(() => MESSAGES.slice(0, Math.max(0, this.stage() - 1)));
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);

  constructor() { afterNextRender(() => this.animate()); }

  private animate(): void {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = true;
    let wasReduced = true;
    let elapsed = 0;
    let previousTick = 0;
    let timer: ReturnType<typeof setInterval> | undefined;
    const update = () => {
      if (timer !== undefined) clearInterval(timer);
      timer = undefined;
      this.paused.set(motion.matches || !visible || document.hidden);
      if (motion.matches) {
        this.stage.set(7);
      } else {
        if (wasReduced) { elapsed = 0; this.stage.set(0); }
        if (!this.paused()) {
          previousTick = performance.now();
          timer = setInterval(() => {
            const now = performance.now();
            elapsed = (elapsed + now - previousTick) % 13200;
            previousTick = now;
            const stage = MILESTONES.filter(time => elapsed >= time).length;
            if (stage !== this.stage()) this.stage.set(stage);
          }, 100);
        }
      }
      wasReduced = motion.matches;
    };
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; update(); });
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
