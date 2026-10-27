import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

type DigicertTrustSource = 'digicert-content-trust-manager' | 'digicert-ai-trust-manager' | 'digicert-dns' | 'digicert-quantum-central';

@Component({
  selector: 'xh-digicert-trust-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: '<xh-imported-interactive-content [source]="source" />',
})
export class DigicertTrustPage {
  readonly source = inject(ActivatedRoute).snapshot.data['digicertTrustSource'] as DigicertTrustSource;
}
