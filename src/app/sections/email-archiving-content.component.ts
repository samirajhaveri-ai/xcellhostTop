import { ChangeDetectionStrategy, Component } from '@angular/core';

/** Selected content from the supplied email-archiving reference. */
@Component({
  selector: 'xh-email-archiving-content',
  standalone: true,
  templateUrl: './email-archiving-content.component.html',
  styleUrl: './email-archiving-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmailArchivingContentComponent {}
