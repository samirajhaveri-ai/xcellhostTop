import { DestroyRef, Directive, ElementRef, NgZone, afterNextRender, inject } from '@angular/core';

/** Star field and moving perspective grid from the supplied 404 design. */
@Directive({ selector: 'canvas[xhNotFoundStars]', standalone: true })
export class NotFoundStarsDirective {
  private readonly element = inject<ElementRef<HTMLCanvasElement>>(ElementRef);
  private readonly zone = inject(NgZone);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => this.zone.runOutsideAngular(() => this.start()));
  }

  private start(): void {
    const canvas = this.element.nativeElement;
    const document = canvas.ownerDocument;
    const win = document.defaultView;
    const context = canvas.getContext('2d');
    if (!win || !context || !canvas.parentElement) return;
    const motion = win.matchMedia('(prefers-reduced-motion: reduce)');
    let width = 0, height = 0, frame = 0, time = 0, visible = true;
    let stars: { x: number; y: number; radius: number; phase: number; speed: number; velocity: number }[] = [];
    const draw = () => {
      frame = 0;
      context.clearRect(0, 0, width, height);
      if (!motion.matches) time++;
      const horizon = height * .78;
      context.strokeStyle = 'rgba(0,102,255,.10)';
      context.lineWidth = 1;
      for (let i = -12; i <= 12; i++) {
        context.beginPath(); context.moveTo(width / 2 + i * 20, horizon);
        context.lineTo(width / 2 + i * width * .12, height); context.stroke();
      }
      for (let i = 0; i < 8; i++) {
        const step = (i + (motion.matches ? 0 : (time * .004) % 1)) / 8;
        const y = horizon + (height - horizon) * step * step;
        context.globalAlpha = step;
        context.beginPath(); context.moveTo(0, y); context.lineTo(width, y); context.stroke();
      }
      context.globalAlpha = 1;
      for (const star of stars) {
        if (!motion.matches) {
          star.phase += star.speed; star.y -= star.velocity;
          if (star.y < 0) { star.y = height; star.x = Math.random() * width; }
        }
        context.fillStyle = `rgba(180,205,255,${.25 + .55 * Math.abs(Math.sin(star.phase))})`;
        context.beginPath(); context.arc(star.x, star.y, star.radius, 0, Math.PI * 2); context.fill();
      }
      if (!motion.matches && visible && !document.hidden) frame = win.requestAnimationFrame(draw);
    };
    const resume = () => { win.cancelAnimationFrame(frame); draw(); };
    const size = () => {
      width = canvas.offsetWidth; height = canvas.offsetHeight;
      const ratio = Math.min(2, win.devicePixelRatio || 1);
      canvas.width = width * ratio; canvas.height = height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      stars = Array.from({ length: Math.round(width * height / 5200) }, () => ({
        x: Math.random() * width, y: Math.random() * height, radius: Math.random() * 1.2 + .2,
        phase: Math.random() * Math.PI * 2, speed: .005 + Math.random() * .02, velocity: .04 + Math.random() * .12,
      }));
      resume();
    };
    const resize = new ResizeObserver(size);
    const intersection = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; resume(); });
    resize.observe(canvas.parentElement);
    intersection.observe(canvas);
    document.addEventListener('visibilitychange', resume);
    motion.addEventListener('change', resume);
    size();
    this.destroyRef.onDestroy(() => {
      win.cancelAnimationFrame(frame); resize.disconnect(); intersection.disconnect();
      document.removeEventListener('visibilitychange', resume);
      motion.removeEventListener('change', resume);
    });
  }
}
