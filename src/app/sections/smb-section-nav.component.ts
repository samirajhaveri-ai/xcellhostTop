import { ChangeDetectionStrategy, Component, computed, input, signal } from '@angular/core';

export interface SmbSectionNavLink {
  readonly label: string;
  readonly target: string;
}

@Component({
  selector: 'xh-smb-section-nav',
  standalone: true,
  templateUrl: './smb-section-nav.component.html',
  styleUrl: './smb-section-nav.component.css',
  host: { '[class.reference-navigation]': 'highlightSelection()' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmbSectionNavComponent {
  readonly label = input('Page sections');
  readonly links = input.required<readonly SmbSectionNavLink[]>();
  readonly frameSelector = input<string | null>(null);
  readonly highlightSelection = input(false);
  private readonly selectedTarget = signal<string | null>(null);
  readonly activeTarget = computed(() => this.highlightSelection()
    ? this.links().find(link => link.target === this.selectedTarget())?.target ?? this.links()[0]?.target
    : null);

  scrollToSection(target: string, event: Event): void {
    event.preventDefault();
    const selector = this.frameSelector();
    const frame = selector ? document.querySelector<HTMLIFrameElement>(selector) : null;
    const section = document.getElementById(target) ?? frame?.contentDocument?.getElementById(target);
    if (!section) return;

    this.selectedTarget.set(target);

    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${target}`,
    );
    const frameTop = frame && section.ownerDocument === frame.contentDocument ? frame.getBoundingClientRect().top : 0;
    const top = section.getBoundingClientRect().top + frameTop + window.scrollY - 148;
    window.scrollTo({ top: Math.max(0, top), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

}
