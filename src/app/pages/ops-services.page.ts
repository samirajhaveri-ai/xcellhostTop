import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-ops-services-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: `<xh-imported-interactive-content [source]="source" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OpsServicesPage {
  private readonly route = inject(ActivatedRoute);
  readonly source: 'devsecops' | 'cloudops' | 'dataops' = this.route.snapshot.data['opsSource'];

  constructor() {
    inject(SeoService).set(
      this.route.snapshot.title || 'Operations Services | XcellHost',
      this.route.snapshot.data['description'],
      '/' + this.source,
    );
  }
}
