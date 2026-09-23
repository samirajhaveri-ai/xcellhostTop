import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject } from '@angular/core';

interface HeroNode { x: number; y: number; glow: number }
interface HeroPulse { path: HeroNode[]; segment: number; progress: number; color: string }

@Component({
  selector: 'xh-rtx-pro-6000-hero',
  standalone: true,
  templateUrl: './rtx-pro-6000-hero.component.html',
  styleUrl: './rtx-pro-6000-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RtxPro6000HeroComponent implements AfterViewInit, OnDestroy {
  @ViewChild('networkCanvas', { static: true }) private canvas!: ElementRef<HTMLCanvasElement>;
  private readonly zone = inject(NgZone);
  private frame = 0;
  private resizeObserver?: ResizeObserver;
  private visibilityObserver?: IntersectionObserver;
  private nodes: HeroNode[][] = [];
  private pulses: HeroPulse[] = [];
  private width = 0;
  private height = 0;
  private visible = true;
  private lastSpawn = 0;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined') return;
    this.zone.runOutsideAngular(() => {
      const canvas = this.canvas.nativeElement;
      const context = canvas.getContext('2d');
      if (!context) return;
      const resize = () => {
        const bounds = canvas.getBoundingClientRect();
        this.width = bounds.width;
        this.height = bounds.height;
        const ratio = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = Math.round(this.width * ratio);
        canvas.height = Math.round(this.height * ratio);
        context.setTransform(ratio, 0, 0, ratio, 0, 0);
        this.nodes = [4, 6, 8, 6, 3].map((count, column) =>
          Array.from({ length: count }, (_, row) => ({
            x: this.width * (0.12 + 0.76 * column / 4),
            y: this.height * (0.14 + 0.66 * (row + 0.5) / count),
            glow: 0,
          })),
        );
        this.pulses = [];
      };
      resize();
      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(resize);
        this.resizeObserver.observe(canvas);
      } else {
        window.addEventListener('resize', resize);
        this.fallbackResize = resize;
      }
      if (typeof IntersectionObserver !== 'undefined') {
        this.visibilityObserver = new IntersectionObserver(entries => {
          this.visible = entries[0]?.isIntersecting ?? true;
        });
        this.visibilityObserver.observe(canvas);
      }
      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const animate = (timestamp: number) => {
        if (this.visible) this.draw(context, timestamp / 1000, !reducedMotion);
        if (!reducedMotion) this.frame = requestAnimationFrame(animate);
      };
      this.frame = requestAnimationFrame(animate);
    });
  }

  private fallbackResize?: () => void;

  ngOnDestroy(): void {
    if (typeof window === 'undefined') return;
    cancelAnimationFrame(this.frame);
    this.resizeObserver?.disconnect();
    this.visibilityObserver?.disconnect();
    if (this.fallbackResize) window.removeEventListener('resize', this.fallbackResize);
  }

  private draw(context: CanvasRenderingContext2D, seconds: number, motion: boolean): void {
    const width = this.width;
    const height = this.height;
    if (!width || !height) return;
    context.clearRect(0, 0, width, height);
    if (motion && seconds - this.lastSpawn > 0.09) {
      this.lastSpawn = seconds;
      const path = this.nodes.map(column => column[Math.floor(Math.random() * column.length)]);
      this.pulses.push({ path, segment: 0, progress: 0, color: Math.random() < 0.3 ? '#ff8c1a' : '#1565d8' });
    }
    context.lineWidth = 1;
    for (let column = 0; column < this.nodes.length - 1; column++) {
      for (const from of this.nodes[column]) {
        for (const to of this.nodes[column + 1]) {
          context.strokeStyle = 'rgba(120,160,255,.1)';
          context.beginPath();
          context.moveTo(from.x, from.y);
          context.lineTo(to.x, to.y);
          context.stroke();
        }
      }
    }
    this.pulses = this.pulses.filter(pulse => {
      pulse.progress += 0.045;
      if (pulse.progress >= 1) {
        pulse.progress = 0;
        pulse.segment++;
        if (pulse.segment < pulse.path.length) pulse.path[pulse.segment].glow = 1;
      }
      if (pulse.segment >= pulse.path.length - 1) return false;
      const from = pulse.path[pulse.segment];
      const to = pulse.path[pulse.segment + 1];
      const x = from.x + (to.x - from.x) * pulse.progress;
      const y = from.y + (to.y - from.y) * pulse.progress;
      context.strokeStyle = pulse.color;
      context.globalAlpha = 0.55;
      context.lineWidth = 1.6;
      context.beginPath();
      context.moveTo(from.x, from.y);
      context.lineTo(x, y);
      context.stroke();
      context.globalAlpha = 1;
      context.fillStyle = pulse.color;
      context.beginPath();
      context.arc(x, y, 2.6, 0, Math.PI * 2);
      context.fill();
      return true;
    });
    for (const column of this.nodes) {
      for (const node of column) {
        node.glow *= 0.94;
        context.fillStyle = '#041e42';
        context.strokeStyle = node.glow > 0.1 ? '#ff8c1a' : 'rgba(140,175,255,.8)';
        context.lineWidth = 1.6;
        context.beginPath();
        context.arc(node.x, node.y, 6 + node.glow * 4, 0, Math.PI * 2);
        context.fill();
        context.stroke();
        if (node.glow > 0.05) {
          context.fillStyle = `rgba(255,138,0,${node.glow * 0.8})`;
          context.beginPath();
          context.arc(node.x, node.y, 3, 0, Math.PI * 2);
          context.fill();
        }
      }
    }
    const gauge = motion ? 0.55 + 0.35 * Math.sin(seconds * 0.7) : 0.55;
    const x = width * 0.12;
    const y = height * 0.86;
    const gaugeWidth = width * 0.76;
    context.fillStyle = 'rgba(255,255,255,.08)';
    context.fillRect(x, y, gaugeWidth, 6);
    context.fillStyle = '#1565d8';
    context.fillRect(x, y, gaugeWidth * gauge, 6);
    context.fillStyle = 'rgba(255,255,255,.75)';
    context.font = '600 11px monospace';
    context.textAlign = 'left';
    context.fillText(`VRAM ${Math.round(96 * gauge)} / 96 GB`, x, y - 8);
    context.textAlign = 'right';
    context.fillText(`FP4 · ${1800 + Math.round(900 * gauge)} tok/s`, x + gaugeWidth, y - 8);
  }
}
