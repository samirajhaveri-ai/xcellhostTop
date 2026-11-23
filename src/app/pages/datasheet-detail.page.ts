import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { PRODUCT_DATASHEETS } from '../data/product-datasheets.data';
import { DatasheetModalComponent } from '../overlays/datasheet-modal.component';
import { DatasheetCardComponent } from '../shared/datasheet-card.component';

@Component({
  selector: 'xh-datasheet-detail-page',
  standalone: true,
  imports: [RouterLink, DatasheetModalComponent, DatasheetCardComponent],
  templateUrl: './datasheet-detail.page.html',
  styleUrl: './datasheet-detail.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatasheetDetailPage {
  private readonly params = toSignal(inject(ActivatedRoute).paramMap, { requireSync: true });
  private readonly seo = inject(SeoService);

  readonly sheet = computed(() => PRODUCT_DATASHEETS.find(item => item.slug === this.params().get('slug')));
  readonly related = computed(() => {
    const current = this.sheet();
    return PRODUCT_DATASHEETS.filter(item => item !== current).slice(0, 2);
  });

  constructor() {
    effect(() => {
      const sheet = this.sheet();
      if (sheet) {
        this.seo.set(`${sheet.productName} Datasheet | XcellHost`, sheet.description, `/datasheets/${sheet.slug}/`, sheet.coverUrl);
      } else {
        this.seo.set('Datasheet unavailable | XcellHost', 'Explore XcellHost product datasheets.', `/datasheets/${this.params().get('slug')}/`);
      }
    });
  }
}
