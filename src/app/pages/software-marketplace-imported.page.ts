import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-software-marketplace-imported-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: `<xh-imported-interactive-content [source]="source" />`,
})
export class SoftwareMarketplaceImportedPage {
  readonly source: 'asset-tokenization-platform' | 'fractional-chief-ai-officer' =
    inject(ActivatedRoute).snapshot.data['softwareMarketplaceSource'];
}
