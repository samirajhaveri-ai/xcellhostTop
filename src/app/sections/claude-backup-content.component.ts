import { afterNextRender, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, output } from '@angular/core';

/** Body sections and reveal effects from claude-backup (1).html. */
@Component({
  selector: 'xh-claude-backup-content',
  standalone: true,
  templateUrl: './claude-backup-content.component.html',
  styleUrl: './claude-backup-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClaudeBackupContentComponent {
  readonly enquiry = output<Event>();
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const groups = this.host.nativeElement.querySelectorAll<HTMLElement>('.cb-rv');
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cb-is-in');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: .1 });
      const syncMotion = () => {
        if (motion.matches) {
          groups.forEach(group => group.classList.add('cb-is-in'));
          observer.disconnect();
        } else groups.forEach(group => observer.observe(group));
      };
      syncMotion();
      motion.addEventListener('change', syncMotion);
      this.destroyRef.onDestroy(() => {
        observer.disconnect();
        motion.removeEventListener('change', syncMotion);
      });
    });
  }
}
