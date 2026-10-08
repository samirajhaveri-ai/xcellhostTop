import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export interface SmbSectionNavLink {
  readonly label: string;
  readonly target: string;
}

@Component({
  selector: 'xh-smb-section-nav',
  standalone: true,
  templateUrl: './smb-section-nav.component.html',
  styleUrl: './smb-section-nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmbSectionNavComponent {
  readonly label = input('Page sections');
  readonly links = input.required<readonly SmbSectionNavLink[]>();
  readonly frameSelector = input<string | null>(null);

  scrollToSection(target: string, event: Event): void {
    event.preventDefault();
    const selector = this.frameSelector();
    const frame = selector ? document.querySelector<HTMLIFrameElement>(selector) : null;
    const section = document.getElementById(target) ?? frame?.contentDocument?.getElementById(target);
    if (!section) return;

    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${target}`,
    );
    const frameTop = section.ownerDocument === document ? 0 : frame!.getBoundingClientRect().top;
    const top = section.getBoundingClientRect().top + frameTop + window.scrollY - 148;
    window.scrollTo({ top: Math.max(0, top), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

}
