import { ChangeDetectionStrategy, Component, DestroyRef, ElementRef, afterNextRender, inject, signal } from '@angular/core';

// Illustrative camera events from the supplied video-surveillance-as-a-service.html.
const EVENTS = [
  ['r', 'INTRUDER', 'Server room · motion after hours'],
  ['y', 'ANPR', 'Gate-01 · MH 01 AB 2345 logged'],
  ['r', 'PPE', 'Plant floor · hard hat missing'],
  ['g', 'COUNT', 'Store entry · footfall 212 today'],
  ['y', 'FACE', 'Lobby · staff member recognised'],
  ['g', 'HEALTH', 'Camera 17 back online'],
  ['r', 'FIRE', 'Warehouse-02 · smoke check cleared'],
  ['y', 'LOITER', 'Car park · person > 5 min'],
] as const;
type DetectionEvent = { id: number; time: string; color: string; tag: string; description: string };

@Component({
  selector: 'xh-vsaas-hero',
  standalone: true,
  templateUrl: './vsaas-hero.component.html',
  styleUrl: './vsaas-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class VsaasHeroComponent {
  readonly paused = signal(true);
  readonly alerts = signal(35);
  readonly activeCameras = signal([true, true, true, true, true, true]);
  readonly feed = signal<DetectionEvent[]>([3, 2, 1, 0].map(index => ({
    id: index, time: '15:53:14', color: EVENTS[index][0], tag: EVENTS[index][1], description: EVENTS[index][2],
  })));
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
  private readonly destroyRef = inject(DestroyRef);
  private sequence = 4;

  constructor() { afterNextRender(() => this.startPreview()); }

  private startPreview(): void {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let visible = false;
    let timer: ReturnType<typeof setInterval> | undefined;
    const stop = () => { if (timer !== undefined) clearInterval(timer); timer = undefined; };
    const time = () => new Date().toLocaleTimeString('en-GB', { hour12: false });
    this.feed.update(rows => rows.map(row => ({ ...row, time: time() })));
    const tick = () => {
      const id = this.sequence++;
      const event = EVENTS[id % EVENTS.length];
      this.feed.update(rows => [{ id, time: time(), color: event[0], tag: event[1], description: event[2] }, ...rows].slice(0, 5));
      this.alerts.set(31 + this.sequence);
      this.activeCameras.set([true, true, ...Array.from({ length: 4 }, () => Math.random() < .7)]);
    };
    const update = () => {
      stop();
      this.paused.set(motion.matches || !visible || document.hidden);
      if (motion.matches) this.activeCameras.set([true, true, true, true, true, true]);
      if (!this.paused()) timer = setInterval(tick, 1800);
    };
    const observer = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; update(); });
    observer.observe(this.host);
    motion.addEventListener('change', update);
    document.addEventListener('visibilitychange', update);
    update();
    this.destroyRef.onDestroy(() => {
      stop(); observer.disconnect();
      motion.removeEventListener('change', update);
      document.removeEventListener('visibilitychange', update);
    });
  }
}
