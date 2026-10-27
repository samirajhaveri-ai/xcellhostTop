import { ChangeDetectionStrategy, Component } from '@angular/core';

/** S/MIME OV body sections adapted from the supplied certificate page. */
@Component({
  selector: 'xh-digicert-smime-ov-content',
  standalone: true,
  templateUrl: './digicert-smime-ov-content.component.html',
  styleUrl: './digicert-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertSmimeOvContentComponent {}
