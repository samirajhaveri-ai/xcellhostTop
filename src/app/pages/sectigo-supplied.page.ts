import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-sectigo-supplied-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: '<xh-imported-interactive-content source="sectigo-supplied" [sectigoSlug]="slug" />',
})
export class SectigoSuppliedPage {
  readonly slug = inject(ActivatedRoute).snapshot.data['sectigoSlug'] as string;
}
