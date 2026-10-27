import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-breach-and-attack-simulation-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: '<xh-imported-interactive-content source="breach-and-attack-simulation" />',
})
export class BreachAndAttackSimulationPage {}
