import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-sql-server-editions-comparison-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<main aria-label="Microsoft SQL Server editions comparison">
    <xh-imported-interactive-content source="sql-server-comparison" />
  </main>`,
  styles: [`
    :host, main { display: block; width: 100%; min-width: 0; }
  `],
})
export class SqlServerEditionsComparisonPage {}
