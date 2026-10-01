import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Selected sections from the supplied Higher Education Cloud reference. */
@Component({
  selector: 'xh-higher-education-content',
  standalone: true,
  templateUrl: './higher-education-content.component.html',
  styleUrl: './higher-education-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HigherEducationContentComponent {}
