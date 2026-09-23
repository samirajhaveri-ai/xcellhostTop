import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';

@Component({
  selector: 'xh-rtx-6000-ada-hero',
  standalone: true,
  templateUrl: './rtx-6000-ada-hero.component.html',
  styleUrl: './rtx-6000-ada-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rtx6000AdaHeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('wireframe', { static: true }) private canvas!: ElementRef<HTMLCanvasElement>;
  private readonly zone = inject(NgZone);
  private frame = 0;
  private resizeObserver?: ResizeObserver;
  private fallbackResize?: () => void;
  private visible = true;
  private visibilityObserver?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;
    this.zone.runOutsideAngular(() => {
      const canvas = this.canvas.nativeElement;
      const context = canvas.getContext('2d');
      if (!context) return;
      let width = 0;
      let height = 0;
      const resize = () => {
        const bounds = canvas.getBoundingClientRect();
        width = bounds.width;
        height = bounds.height;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(width * ratio);
        canvas.height = Math.round(height * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
      };
      resize();
      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(resize);
        this.resizeObserver.observe(canvas);
      } else {
        this.fallbackResize = resize;
        window.addEventListener('resize', resize);
      }
      if (typeof IntersectionObserver !== 'undefined') {
        this.visibilityObserver = new IntersectionObserver(entries => {
          this.visible = entries[0]?.isIntersecting ?? true;
        });
        this.visibilityObserver.observe(canvas);
      }
      const vertices: [number, number, number][] = [];
      const edges: [number, number][] = [];
      const segments = 26;
      const rings = 12;
      for (let i = 0; i < segments; i++) {
        for (let j = 0; j < rings; j++) {
          const u = i / segments * Math.PI * 2;
          const v = j / rings * Math.PI * 2;
          vertices.push([(1 + .42 * Math.cos(v)) * Math.cos(u), .42 * Math.sin(v), (1 + .42 * Math.cos(v)) * Math.sin(u)]);
          const index = i * rings + j;
          edges.push([index, ((i + 1) % segments) * rings + j], [index, i * rings + (j + 1) % rings]);
        }
      }
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const draw = (timestamp: number) => {
        if (this.visible && width && height) {
          const time = timestamp / 1000;
          context.clearRect(0, 0, width, height);
          const angleY = time * .45;
          const angleX = .9 + Math.sin(time * .3) * .25;
          const scale = Math.min(width, height) * .27;
          const projected = vertices.map(([vx, vy, vz]) => {
            const x = vx * Math.cos(angleY) - vz * Math.sin(angleY);
            let z = vx * Math.sin(angleY) + vz * Math.cos(angleY);
            const y = vy * Math.cos(angleX) - z * Math.sin(angleX);
            z = vy * Math.sin(angleX) + z * Math.cos(angleX);
            const perspective = 3 / (3 + z);
            return [width / 2 + x * scale * perspective, height * .48 + y * scale * perspective, z, y];
          });
          const scan = Math.sin(time * 1.1) * 1.35;
          for (const [fromIndex, toIndex] of edges) {
            const from = projected[fromIndex];
            const to = projected[toIndex];
            const depth = (from[2] + to[2]) / 2;
            const nearScan = Math.abs((from[3] + to[3]) / 2 - scan) < .12;
            context.strokeStyle = nearScan ? '#ff8c1a' : `rgba(90,150,255,${.25 + .55 * (1 - (depth + 1.5) / 3)})`;
            context.lineWidth = nearScan ? 1.8 : 1;
            context.beginPath();
            context.moveTo(from[0], from[1]);
            context.lineTo(to[0], to[1]);
            context.stroke();
          }
          context.fillStyle = 'rgba(255,255,255,.7)';
          context.font = '600 11px monospace';
          context.fillText('VIEWPORT · RT ON · DLSS 3', 16, 24);
          context.textAlign = 'right';
          context.fillText(`${58 + Math.round(4 * Math.sin(time * 2))} FPS`, width - 16, 24);
          context.textAlign = 'left';
        }
        if (!reducedMotion) this.frame = requestAnimationFrame(draw);
      };
      this.frame = requestAnimationFrame(draw);
    });
  }

  ngOnDestroy(): void {
    if (typeof window === 'undefined') return;
    cancelAnimationFrame(this.frame);
    this.resizeObserver?.disconnect();
    this.visibilityObserver?.disconnect();
    if (this.fallbackResize) window.removeEventListener('resize', this.fallbackResize);
  }
}
