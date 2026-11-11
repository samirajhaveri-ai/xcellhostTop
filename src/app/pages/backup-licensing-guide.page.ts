import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-backup-licensing-guide-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: '<xh-imported-interactive-content [source]="slug" />',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BackupLicensingGuidePage {
  private readonly route = inject(ActivatedRoute);
  readonly slug = this.route.snapshot.routeConfig!.path as 'druva-licensing-guide' | 'veeam-licensing-guide';
  constructor() {
    inject(SeoService).set(this.route.snapshot.title || 'Licensing Guide | XcellHost', this.route.snapshot.data['searchDescription'], '/' + this.slug);
  }
}
