import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-ai-adoption-framework-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: `<xh-imported-interactive-content source="ai-adoption-framework" />`,
})
export class AiAdoptionFrameworkPage {}
