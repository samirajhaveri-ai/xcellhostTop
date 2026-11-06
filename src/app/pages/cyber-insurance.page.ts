import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-cyber-insurance-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: `<xh-imported-interactive-content [source]="source" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CyberInsurancePage {
  private readonly route = inject(ActivatedRoute);
  readonly source: 'cyber-insurance-for-businesses' | 'cyber-insurance-for-individuals' | 'cyber-insurance-for-executives' = this.route.snapshot.data['insuranceSource'];
  constructor() {
    inject(SeoService).set(
      this.route.snapshot.title || 'Cyber Insurance Readiness | XcellHost',
      this.route.snapshot.data['description'],
      '/' + this.source,
    );
  }
}
