import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';

interface CertificateActivity {
  tag: string;
  message: string;
  status: string;
  tone: string;
  node: number;
}

/** Animated illustration adapted from the supplied DigiCert HTML, not customer telemetry. */
@Component({
  selector: 'xh-digicert-hero',
  standalone: true,
  templateUrl: './digicert-hero.component.html',
  styleUrl: './digicert-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertHeroComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly activity: readonly CertificateActivity[] = [
    { tag: 'EV', message: 'Org vetting complete', status: '✓', tone: 'g', node: 0 },
    { tag: 'Issued', message: 'netbanking.example.in · EV', status: 'Live', tone: 'g', node: 0 },
    { tag: 'Seal', message: 'DigiCert Secured seal added', status: '✓', tone: '', node: 1 },
    { tag: 'Scan', message: 'Daily malware scan · clean', status: 'Clean', tone: 'g', node: 0 },
    { tag: 'CT log', message: 'No rogue certificates found', status: 'OK', tone: '', node: -1 },
    { tag: 'SAN', message: 'portal + dealer domains added', status: '✓', tone: 'g', node: 2 },
    { tag: 'Renew', message: 'Wildcard expiring in 15 days', status: 'Due', tone: 'o', node: 3 },
    { tag: 'Bill', message: 'INR invoice with GST', status: 'GST', tone: 'o', node: -1 },
  ];
  readonly feed = signal(this.activity.slice(3, 7).reverse());
  readonly sites = signal(960);
  readonly tls = signal(58);
  readonly scans = signal(40);
  readonly activeNode = signal(-1);
  readonly reducedMotion = signal(false);
  readonly viewBox = signal('0 0 600 540');
  readonly connections = signal<string[]>([]);
  readonly stars = Array.from({ length: 24 }, (_, i) => ({
    left: (i * 37 + 11) % 100,
    top: (i * 23 + 7) % 100,
    delay: -(i % 8) / 2,
  }));

  constructor() {
    afterNextRender(() => {
      const window = this.document.defaultView;
      if (!window) return;
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const syncMotion = () => {
        this.reducedMotion.set(motion.matches);
        if (motion.matches) this.activeNode.set(-1);
      };
      syncMotion();
      motion.addEventListener('change', syncMotion);
      const visual = this.host.nativeElement.querySelector<HTMLElement>('.xt-viz')!;
      const updateConnections = () => {
        const bounds = visual.getBoundingClientRect();
        const server = visual.querySelector<HTMLElement>('.xt-srv')!.getBoundingClientRect();
        const cx = server.left + server.width / 2 - bounds.left;
        const cy = server.top + server.height / 2 - bounds.top;
        this.viewBox.set(`0 0 ${bounds.width} ${bounds.height}`);
        this.connections.set(Array.from(visual.querySelectorAll<HTMLElement>('.xt-dev'), node => {
          const rect = node.getBoundingClientRect();
          const x = rect.left + rect.width / 2 - bounds.left;
          const y = rect.top + rect.height / 2 - bounds.top;
          return `M ${x} ${y} Q ${(x + cx) / 2} ${(y + cy) / 2 - 30} ${cx} ${cy}`;
        }));
      };
      const resize = new ResizeObserver(updateConnections);
      resize.observe(visual);
      let visible = false;
      const visibility = new IntersectionObserver(entries => { visible = entries[0].isIntersecting; });
      visibility.observe(visual);
      let step = 7;
      const timer = window.setInterval(() => {
        if (!visible || this.document.hidden || motion.matches) return;
        const next = this.activity[step % this.activity.length];
        this.feed.update(rows => [next, ...rows].slice(0, 4));
        this.activeNode.set(next.node);
        this.sites.set(934 + (step * 17) % 101);
        this.tls.set(54 + (step * 7) % 17);
        this.scans.set(36 + (step * 3) % 13);
        step++;
      }, 2200);
      this.destroyRef.onDestroy(() => {
        window.clearInterval(timer);
        resize.disconnect();
        visibility.disconnect();
        motion.removeEventListener('change', syncMotion);
      });
    });
  }
}
