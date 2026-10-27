import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-digicert-smime-related',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './digicert-smime-related.component.html',
  styleUrl: './digicert-smime-related.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DigicertSmimeRelatedComponent {}
