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
  readonly frameSelector = input('');

  scrollToSection(target: string, event: Event): void {
    event.preventDefault();
    const frame = this.frameSelector()
      ? document.querySelector<HTMLIFrameElement>(this.frameSelector())
      : null;
    const section = document.getElementById(target) ?? frame?.contentDocument?.getElementById(target);
    if (!section) return;

    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${target}`,
    );
    const frameTop = frame && section.ownerDocument === frame.contentDocument
      ? frame.getBoundingClientRect().top : 0;
    const top = section.getBoundingClientRect().top + frameTop + window.scrollY - 148;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

}
