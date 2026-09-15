import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'xh-domains-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './domains-content.component.html',
  styleUrl: './domains-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DomainsContentComponent {
  private readonly router = inject(Router);
  readonly selectedCategory = signal('all');

  requestDomain(event: Event): void {
    event.preventDefault();
    void this.router.navigate(['/contact'], { queryParams: { service: 'Domains' } });
  }
}
