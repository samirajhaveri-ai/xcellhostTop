import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-national-industrial-corridor-development-programme-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: `<xh-imported-interactive-content source="national-industrial-corridor-development-programme" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NationalIndustrialCorridorDevelopmentProgrammePage {
  constructor() {
    inject(SeoService).set(
      'National Industrial Corridor Development Programme | XcellHost',
      'Explore industrial corridors, smart-city infrastructure, freight connectivity and XcellHost cloud and security services with a corridor explorer, factory IT builder and readiness checklist.',
      '/national-industrial-corridor-development-programme',
    );
  }
}
