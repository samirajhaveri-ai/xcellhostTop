import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

type OperationsSource = 'resilience-operations' | 'cloud-operations' | 'database-operations' | 'network-operations' | 'security-operations' | 'workspace-operations';

@Component({
  selector: 'xh-managed-operations-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: '<xh-imported-interactive-content [source]="source" />',
})
export class ManagedOperationsPage {
  readonly source = inject(ActivatedRoute).snapshot.data['operationsSource'] as OperationsSource;
}
