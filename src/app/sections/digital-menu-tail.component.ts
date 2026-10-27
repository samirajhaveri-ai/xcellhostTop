import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

/** Agency and Growth Suite sections adapted from the supplied HTML reference. */
@Component({
  selector: 'xh-digital-menu-tail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './digital-menu-tail.component.html',
  styleUrl: './digital-menu-tail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigitalMenuTailComponent {
  private readonly document = inject(DOCUMENT);
  readonly agencyName = signal('Your Agency');
  readonly brandColour = signal('#7C3AED');
  readonly colours = ['#7C3AED', '#1565D8', '#E11D48', '#059669', '#EA580C', '#0F172A'];
  readonly previewName = computed(() => this.agencyName().trim() || 'Your Agency');
  readonly agencyDomain = computed(() => {
    const name = this.previewName().toLowerCase().replace(/[^a-z0-9]+/g, '');
    return `app.${name || 'youragency'}.in`;
  });
  readonly logoLetter = computed(() => this.previewName().charAt(0).toUpperCase());

  updateAgencyName(event: Event): void {
    this.agencyName.set((event.target as HTMLInputElement).value);
  }

  scrollToSection(event: Event, id: string): void {
    const target = this.document.getElementById(id);
    const view = this.document.defaultView;
    if (!target || !view) return;
    event.preventDefault();
    view.scrollTo({
      top: view.scrollY + target.getBoundingClientRect().top - 100,
      behavior: view.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }
}
