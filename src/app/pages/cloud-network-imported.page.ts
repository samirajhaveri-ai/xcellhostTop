import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

@Component({
  selector: 'xh-cloud-network-imported-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content [source]="source" /><xh-insights-section [pageSlug]="source" />`,
})
export class CloudNetworkImportedPage {
  readonly source: 'virtual-networks' | 'virtual-firewalls' | 'virtual-load-balancer' | 'gcc-cloud' = inject(ActivatedRoute).snapshot.data['networkSource'];
}
