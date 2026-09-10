import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-zoho-workspace-content',
  standalone: true,
  templateUrl: './zoho-workspace-content.component.html',
  styleUrl: './zoho-workspace-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZohoWorkspaceContentComponent {}
