import { DOCUMENT } from '@angular/common';
import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal } from '@angular/core';

interface SecureEmailActivity {
  tag: string;
  message: string;
  status: string;
  tone: string;
  node: number;
}

/** Animated illustration adapted from digicert-smime-ov.html. */
@Component({
  selector: 'xh-digicert-smime-ov-hero',
  standalone: true,
  templateUrl: './digicert-smime-ov-hero.component.html',
  styleUrls: ['./digicert-hero.component.css', './digicert-smime-ov-hero.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertSmimeOvHeroComponent {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly activity: readonly SecureEmailActivity[] = [
    { tag: 'OV', message: 'Organisation verified · MCA', status: 'Done', tone: 'g', node: -1 },
    { tag: 'Issued', message: 'accounts@example.in · OV', status: 'Live', tone: 'g', node: 0 },
    { tag: 'Sign', message: 'Bank-change notice · signed', status: '✓', tone: '', node: 0 },
    { tag: 'Doc', message: 'Contract.docx digitally signed', status: '✓', tone: 'g', node: 1 },
    { tag: 'Encrypt', message: 'Payroll file · encrypted', status: 'Locked', tone: 'o', node: 2 },
    { tag: 'Install', message: 'Added to 3 devices', status: '✓', tone: '', node: 3 },
    { tag: 'Block', message: 'Look-alike domain email flagged', status: 'Alert', tone: 'o', node: -1 },
    { tag: 'Bill', message: 'INR invoice with GST', status: 'GST', tone: 'o', node: -1 },
  ];
  readonly feed = signal(this.activity.slice(0, 4).reverse());
  readonly mailboxes = signal(260);
  readonly signed = signal(88);
  readonly locked = signal(54);
  readonly activeNode = signal(-1);
  readonly reducedMotion = signal(false);
  readonly viewBox = signal('0 0 560 540');
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
      const shouldAnimate = () => visible && !this.document.hidden && !motion.matches;
      let step = 4;
      let flashTimer: number | undefined;
      const jitter = (base: number, range: number) => Math.max(1, Math.min(99, base + Math.round((Math.random() - .5) * range)));
      const activityTimer = window.setInterval(() => {
        if (!shouldAnimate()) return;
        const next = this.activity[step++ % this.activity.length];
        this.feed.update(rows => [next, ...rows].slice(0, 4));
        this.activeNode.set(next.node);
        window.clearTimeout(flashTimer);
        flashTimer = window.setTimeout(() => this.activeNode.set(-1), 900);
        this.mailboxes.set(Math.max(1, 260 + Math.round((Math.random() - .4) * 39)));
        this.signed.set(jitter(88, 16));
        this.locked.set(jitter(54, 10));
      }, 2200);
      const connectionTimer = window.setInterval(() => {
        if (shouldAnimate()) updateConnections();
      }, 5000);

      this.destroyRef.onDestroy(() => {
        window.clearInterval(activityTimer);
        window.clearInterval(connectionTimer);
        window.clearTimeout(flashTimer);
        resize.disconnect();
        visibility.disconnect();
        motion.removeEventListener('change', syncMotion);
      });
    });
  }
}
