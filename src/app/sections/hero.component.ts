import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  computed,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { CatalogService, slugify } from '../core/catalog.service';
import { HERO_WORDS } from '../data/site.data';
import { CountUpFigure, finalCount, runCountUp } from '../shared/count-up';

/** One count-up figure in `.stat-line`. */
interface HeroStat {
  /** the number counted up to */
  readonly value: number;
  /** decimal places to keep (0 → grouped integer) */
  readonly dec: number;
  readonly suffix: string;
  readonly label: string;
}

/** The original read these from `data-count` / `data-dec` / `data-suffix`. */
const HERO_STATS: readonly HeroStat[] = [
  { value: 10000, dec: 0, suffix: '+', label: 'businesses served' },
  { value: 99.95, dec: 2, suffix: '%', label: 'uptime SLA' },
  { value: 155, dec: 0, suffix: '+', label: 'services' },
  { value: 27, dec: 0, suffix: '', label: 'years · since 1999' },
];

/** One icon riding the orbit ring. */
interface OrbItem {
  /** catalogue service name — was the `data-p` attribute */
  readonly service: string;
  /** positioning class, `op1`…`op6` */
  readonly pos: string;
  readonly label: string;
  readonly img?: string;
  readonly emoji?: string;
}

const ORB_ITEMS: readonly OrbItem[] = [
  { service: 'Tally on Cloud', pos: 'op1', label: 'Tally on Cloud', img: '/assets/images/orb-tally-on-cloud.png' },
  { service: 'Cloud Backup (Acronis)', pos: 'op2', label: 'Cloud Backup', img: '/assets/images/orb-cloud-backup.png' },
  { service: 'Microsoft 365', pos: 'op3', label: 'Microsoft 365', img: '/assets/images/orb-microsoft-365.png' },
  { service: 'DPDPA Platform & Consulting', pos: 'op4', label: 'DPDPA', emoji: '⚖️' },
  { service: 'GPU Cloud', pos: 'op5', label: 'GPU Cloud', img: '/assets/images/orb-gpu-cloud.png' },
  { service: 'SMB Cloud Desktop', pos: 'op6', label: 'Cloud Desktop', img: '/assets/images/orb-smb-cloud-desktop.png' },
];

const ROTATE_MS = 2400;
const LEAVE_MS = 520;

/**
 * Scroll parallax factors from `script_07`: the first `.orb` drifts down at
 * `0.12`, the second up at `-0.08`; the first `.cube-wrap` up at `-0.14`, the
 * second down at `0.1`.
 */
const ORB_1_FACTOR = 0.12;
const ORB_2_FACTOR = -0.08;
const CUBE_1_FACTOR = -0.14;
const CUBE_2_FACTOR = 0.1;

/**
 * The homepage hero: headline, rotating strapline, animated count-up stats,
 * the orbiting product ring and the `#netbg` particle canvas behind it all.
 */
@Component({
  selector: 'xh-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  // display:contents keeps the extra host element out of the layout, so the
  // rendered box tree is identical to the original `<div class="hero">`.
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  private readonly catalog = inject(CatalogService);

  private readonly canvas = viewChild.required<ElementRef<HTMLCanvasElement>>('netbg');

  readonly words = HERO_WORDS;
  readonly stats = HERO_STATS;

  /** every orbit icon, with its resolved product route */
  readonly orbs = ORB_ITEMS.map((o) => ({
    ...o,
    link: '/' + slugify(this.catalog.findInDirectory(o.service)?.name ?? o.service),
  }));

  /** index of the word currently shown */
  readonly current = signal(0);
  /** index of the word sliding out, or -1 */
  readonly leaving = signal(-1);

  /** The original read the ramp timings off each `.sl b` in document order. */
  private readonly figures: readonly CountUpFigure[] = HERO_STATS.map((s, i) => ({
    value: s.value,
    dec: s.dec,
    suffix: s.suffix,
    delay: 350 + i * 120,
    duration: 1500 + i * 180,
  }));

  /** formatted text of each count-up figure */
  readonly counters = signal<readonly string[]>(HERO_STATS.map(() => '0'));

  /** page scroll offset, the only input to the orb / cube parallax */
  private readonly scrollOffset = signal(0);

  /** `translate` values for the two `.orb`s and the two `.cube-wrap`s */
  readonly orb1Shift = computed(() => this.parallax(ORB_1_FACTOR));
  readonly orb2Shift = computed(() => this.parallax(ORB_2_FACTOR));
  readonly cube1Shift = computed(() => this.parallax(CUBE_1_FACTOR));
  readonly cube2Shift = computed(() => this.parallax(CUBE_2_FACTOR));

  private readonly reduced =
    typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches;

  private rotateTimer: ReturnType<typeof setInterval> | undefined;
  private leaveTimer: ReturnType<typeof setTimeout> | undefined;
  private cancelCount: (() => void) | undefined;
  private netRaf = 0;
  private parallaxRaf = 0;
  private parallaxTicking = false;
  private observer?: IntersectionObserver;
  private readonly onResize = () => this.sizeCanvas();
  private readonly onScroll = () => this.queueParallax();

  ngAfterViewInit(): void {
    if (this.reduced) {
      this.counters.set(this.figures.map(finalCount));
      return;
    }
    this.cancelCount = runCountUp(this.figures, (v) => this.counters.set(v));
    this.rotateWords();
    this.startParticles();
    this.startParallax();
  }

  ngOnDestroy(): void {
    clearInterval(this.rotateTimer);
    clearTimeout(this.leaveTimer);
    this.cancelCount?.();
    cancelAnimationFrame(this.netRaf);
    cancelAnimationFrame(this.parallaxRaf);
    this.observer?.disconnect();
    removeEventListener('resize', this.onResize);
    removeEventListener('scroll', this.onScroll);
  }

  /* ------------------------------------------------------------ parallax */

  /** `null` under reduced motion so no inline `translate` is written at all. */
  private parallax(factor: number): string | null {
    return this.reduced ? null : `0 ${(this.scrollOffset() * factor).toFixed(1)}px`;
  }

  /** Port of `script_07`: one rAF-throttled scroll listener drives all four. */
  private startParallax(): void {
    addEventListener('scroll', this.onScroll, { passive: true });
  }

  private queueParallax(): void {
    if (this.parallaxTicking) return;
    this.parallaxTicking = true;
    this.parallaxRaf = requestAnimationFrame(() => {
      this.scrollOffset.set(window.scrollY);
      this.parallaxTicking = false;
    });
  }

  /* ------------------------------------------------------------ rotator */

  private rotateWords(): void {
    this.rotateTimer = setInterval(() => {
      const prev = this.current();
      this.leaving.set(prev);
      this.current.set((prev + 1) % this.words.length);
      clearTimeout(this.leaveTimer);
      this.leaveTimer = setTimeout(() => this.leaving.set(-1), LEAVE_MS);
    }, ROTATE_MS);
  }

  /* ------------------------------------------------------------ particles */

  private sizeCanvas(): void {
    const cv = this.canvas().nativeElement;
    const hero = cv.parentElement;
    if (!hero) return;
    cv.width = hero.offsetWidth;
    cv.height = hero.offsetHeight;
  }

  /** Port of the original `#netbg` network background. */
  private startParticles(): void {
    const cv = this.canvas().nativeElement;
    const ctx = cv.getContext('2d');
    const hero = cv.parentElement;
    if (!ctx || !hero) return;

    const count = innerWidth < 700 ? 20 : 52;
    const points = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: 0.00035 + Math.random() * 0.00075,
      vy: (Math.random() - 0.5) * 0.00028,
      r: 1 + Math.random() * 1.3,
    }));

    this.sizeCanvas();
    addEventListener('resize', this.onResize);

    let run = true;
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((e) => (run = e[0].isIntersecting));
      this.observer.observe(hero);
    }

    const frame = () => {
      if (run) {
        const w = cv.width;
        const h = cv.height;
        ctx.clearRect(0, 0, w, h);
        for (const p of points) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x > 1.05) p.x = -0.05;
          if (p.y < -0.05) p.y = 1.05;
          if (p.y > 1.05) p.y = -0.05;
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const a = points[i];
            const b = points[j];
            const dx = (a.x - b.x) * w;
            const dy = (a.y - b.y) * h;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 150) {
              ctx.strokeStyle = 'rgba(127,178,255,' + (0.16 * (1 - d / 150)).toFixed(3) + ')';
              ctx.beginPath();
              ctx.moveTo(a.x * w, a.y * h);
              ctx.lineTo(b.x * w, b.y * h);
              ctx.stroke();
            }
          }
        }
        for (const p of points) {
          ctx.strokeStyle = 'rgba(158,195,255,.45)';
          ctx.lineWidth = p.r;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo((p.x - p.vx * 26) * w, (p.y - p.vy * 26) * h);
          ctx.lineTo(p.x * w, p.y * h);
          ctx.stroke();
          ctx.fillStyle = 'rgba(205,225,255,.95)';
          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, p.r * 0.9, 0, 7);
          ctx.fill();
        }
      }
      this.netRaf = requestAnimationFrame(frame);
    };
    this.netRaf = requestAnimationFrame(frame);
  }
}
