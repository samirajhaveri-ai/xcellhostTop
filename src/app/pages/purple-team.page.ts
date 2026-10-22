import { Component } from '@angular/core';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';

@Component({
  selector: 'xh-purple-team-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent],
  template: '<xh-imported-interactive-content source="purple-team-assessment" />',
})
export class PurpleTeamPage {}
