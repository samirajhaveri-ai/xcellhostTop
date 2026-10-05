import { ChangeDetectionStrategy, Component } from '@angular/core';

/** DigiCert body sections adapted from the supplied SSL certificates page. */
@Component({
  selector: 'xh-digicert-content',
  standalone: true,
  templateUrl: './digicert-content.component.html',
  styleUrl: './digicert-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertContentComponent {}
