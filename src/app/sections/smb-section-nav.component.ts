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

  scrollToSection(target: string, event: Event): void {
    event.preventDefault();
    const section = document.getElementById(target);
    if (!section) return;

    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${target}`,
    );
    const top = section.getBoundingClientRect().top + window.scrollY - 148;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  }

  scrollToTop(): void {
    window.history.replaceState(null, '', `${window.location.pathname}${window.location.search}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
