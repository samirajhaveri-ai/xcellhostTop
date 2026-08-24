import { Directive, ElementRef, OnDestroy, afterNextRender, inject } from '@angular/core';

/**
 * The drifting particle mesh behind a product hero — a port of `initHeroNet()`
 * from `script_26`. Put it straight on the `<canvas class="pph-net">` so the
 * rendered DOM keeps the original structure.
 *
 * 16 particles below 700 px wide, 34 above; links are drawn between any pair
 * closer than 140 px. Nothing runs under `prefers-reduced-motion: reduce`.
 */
@Directive({
  selector: 'canvas[xhHeroNet]',
  standalone: true,
})
export class HeroNetDirective implements OnDestroy {
  private readonly el = inject<ElementRef<HTMLCanvasElement>>(ElementRef);

  private raf = 0;
  private readonly onResize = () => this.size();

  constructor() {
    // afterNextRender only fires in the browser, so there is no SSR guard to write.
    afterNextRender(() => this.start());
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.raf);
    removeEventListener('resize', this.onResize);
  }

  /** Match the canvas backing store to the hero box it sits in. */
  private size(): void {
    const cv = this.el.nativeElement;
    const host = cv.parentElement;
    if (!host) return;
    cv.width = host.offsetWidth;
    cv.height = host.offsetHeight;
  }

  private start(): void {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const cv = this.el.nativeElement;
    const ctx = cv.getContext('2d');
    if (!ctx || !cv.parentElement) return;

    const count = innerWidth < 700 ? 16 : 34;
    const points = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
    }));

    this.size();
    addEventListener('resize', this.onResize);

    const frame = () => {
      // the hero may not be laid out on the very first frame
      if (!cv.width || !cv.height) this.size();
      const w = cv.width;
      const h = cv.height;
      if (w && h) {
        ctx.clearRect(0, 0, w, h);
        for (const p of points) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > 1) p.vx *= -1;
          if (p.y < 0 || p.y > 1) p.vy *= -1;
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const a = points[i];
            const b = points[j];
            const dx = (a.x - b.x) * w;
            const dy = (a.y - b.y) * h;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 140) {
              ctx.strokeStyle = 'rgba(127,178,255,' + (0.18 * (1 - d / 140)).toFixed(3) + ')';
              ctx.beginPath();
              ctx.moveTo(a.x * w, a.y * h);
              ctx.lineTo(b.x * w, b.y * h);
              ctx.stroke();
            }
          }
        }
        ctx.fillStyle = 'rgba(180,210,255,.85)';
        for (const p of points) {
          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, 1.5, 0, 7);
          ctx.fill();
        }
      }
      this.raf = requestAnimationFrame(frame);
    };
    this.raf = requestAnimationFrame(frame);
  }
}
