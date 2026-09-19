import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-entra-id-backup-content',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './entra-id-backup-content.component.html',
  styleUrl: './entra-id-backup-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntraIdBackupContentComponent {}
