import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-windows-server-editions-comparison-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<main aria-label="Microsoft Windows Server 2025 editions comparison">
    <xh-imported-interactive-content source="windows-server-comparison" />
  </main>`,
  styles: [`
    :host, main { display: block; width: 100%; min-width: 0; }
  `],
})
export class WindowsServerEditionsComparisonPage {}
