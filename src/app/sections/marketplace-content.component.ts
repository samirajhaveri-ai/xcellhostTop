import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { MARKETPLACE_REFERENCE_APPS } from '../data/marketplace-reference-apps.data';

@Component({
  selector: 'xh-marketplace-content',
  standalone: true,
  templateUrl: './marketplace-content.component.html',
  styleUrl: './marketplace-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketplaceContentComponent {
  readonly apps = MARKETPLACE_REFERENCE_APPS;
  readonly query = signal('');
  readonly category = signal('');
  readonly sort = signal('az');
  readonly filtered = computed(() => {
    const query = this.query().trim().toLowerCase();
    return this.apps.filter(app => (!this.category() || app[1] === this.category()) &&
      (!query || `${app[0]} ${app[1]} ${app[3]}`.toLowerCase().includes(query)))
      .sort((a, b) => (this.sort() === 'ram' ? a[2] - b[2] :
        this.sort() === 'cat' ? a[1].localeCompare(b[1]) : 0) || a[0].localeCompare(b[0]));
  });
}
