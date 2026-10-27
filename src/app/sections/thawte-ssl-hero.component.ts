import {
  ChangeDetectionStrategy, Component, DestroyRef, ElementRef,
  afterNextRender, computed, inject, signal,
} from '@angular/core';

const LEVELS = [
  { name: 'DV', color: '#1565D8', organisation: 'Not included', vetting: 'Domain control', status: 'Secure', issued: 'Minutes', warranty: 'US$500k', price: '₹2,999' },
  { name: 'OV', color: '#FF8C1A', organisation: 'Your Business Pvt Ltd', vetting: 'Registry + call', status: 'Secure · OV', issued: '1–3 days', warranty: 'US$1.25M', price: '₹7,999' },
  { name: 'EV', color: '#16a34a', organisation: 'Your Business Pvt Ltd', vetting: 'Legal · site · ops', status: 'Secure · EV', issued: '1–5 days', warranty: 'US$1.5M', price: '₹14,999' },
] as const;
// Original handshake timings: root, intermediate, certificate, padlock, identity.
const TIMINGS = [0, 350, 750, 1100, 1500, 1850, 2250, 3150, 3400, 3660, 7400, 7900];

@Component({
  selector: 'xh-thawte-ssl-hero',
  standalone: true,
  templateUrl: './thawte-ssl-hero.component.html',
  styleUrl: './thawte-ssl-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.paused]': '!visible()' },
})
export class ThawteSslHeroComponent {
  readonly level = signal(0);
  readonly step = signal(0);
  readonly visible = signal(true);
  readonly bump = signal(false);
  readonly current = computed(() => LEVELS[this.level()]);
  readonly tiltTransform = signal('');
  readonly columns = signal<{ text: string; duration: string; delay: string }[]>([]);

  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);
  private timer: ReturnType<typeof setTimeout> | undefined;
  private due = 0;
  private remaining = 1050;
  private reduced = false;
  private finePointer = false;

  constructor() {
    afterNextRender(() => {
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      this.finePointer = window.matchMedia('(pointer: fine)').matches;
      const configureMotion = () => {
        this.stop();
        this.reduced = motion.matches;
        this.tiltTransform.set('');
        this.level.set(this.reduced ? 1 : 0);
        this.step.set(this.reduced ? 9 : 0);
        this.bump.set(false);
        this.remaining = 1050;
        if (!this.reduced && this.visible()) this.schedule();
      };
      configureMotion();
      motion.addEventListener('change', configureMotion);

      const alphabet = '0123456789abcdef';
      const group = () => Array.from({ length: 4 }, () => alphabet[Math.floor(Math.random() * 16)]).join('');
      this.columns.set(Array.from({ length: window.innerWidth < 700 ? 7 : 15 }, () => {
        const text = Array.from({ length: 46 }, () => `${group()} ${group()}`).join('\n');
        return { text: `${text}\n${text}`, duration: `${34 + Math.random() * 40}s`, delay: `${-Math.random() * 30}s` };
      }));

      const observer = new IntersectionObserver(([entry]) => {
        this.setVisible(entry.isIntersecting && !document.hidden);
      }, { threshold: 0.05 });
      observer.observe(this.element.nativeElement);
      const visibility = () => {
        const rect = this.element.nativeElement.getBoundingClientRect();
        this.setVisible(!document.hidden && rect.bottom > 0 && rect.top < window.innerHeight);
      };
      document.addEventListener('visibilitychange', visibility);
      this.destroyRef.onDestroy(() => {
        this.stop();
        observer.disconnect();
        motion.removeEventListener('change', configureMotion);
        document.removeEventListener('visibilitychange', visibility);
      });
    });
  }

  tilt(event: PointerEvent): void {
    if (this.reduced || !this.finePointer) return;
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    this.tiltTransform.set(`rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`);
  }

  private setVisible(value: boolean): void {
    if (value === this.visible()) return;
    this.visible.set(value);
    if (this.reduced) return;
    if (value) this.schedule();
    else {
      this.remaining = Math.max(0, this.due - performance.now());
      this.stop();
    }
  }

  private stop(): void {
    clearTimeout(this.timer);
    this.timer = undefined;
  }

  private schedule(): void {
    if (this.timer !== undefined) return;
    this.due = performance.now() + this.remaining;
    this.timer = setTimeout(() => {
      this.timer = undefined;
      if (this.step() === 10) {
        this.level.update(level => (level + 1) % LEVELS.length);
        this.step.set(0);
        this.bump.set(true);
      } else {
        this.step.update(step => step + 1);
        this.bump.set(false);
      }
      const step = this.step();
      this.remaining = TIMINGS[step + 1] - TIMINGS[step];
      this.schedule();
    }, this.remaining);
  }
}
