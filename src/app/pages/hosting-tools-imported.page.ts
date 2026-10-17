import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { InsightsSectionComponent } from '../sections/insights-section.component';

type HostingToolSource = 'cpanel-control-panel' | 'plesk-control-panel' | 'webuzo-control-panel' | 'cloudlinux' | 'plesk-servers' | 'cpanel-servers';

@Component({
  selector: 'xh-hosting-tools-imported-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, InsightsSectionComponent],
  template: `<xh-imported-interactive-content [source]="source" /><xh-insights-section [pageSlug]="source" />`,
})
export class HostingToolsImportedPage {
  readonly source = inject(ActivatedRoute).snapshot.data['hostingToolSource'] as HostingToolSource;
}
