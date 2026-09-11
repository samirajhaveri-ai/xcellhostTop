import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-zoho-workspace-content',
  standalone: true,
  templateUrl: './zoho-workspace-content.component.html',
  styleUrls: ['./zoho-workspace-content.component.css', './zoho-workspace-cards.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ZohoWorkspaceContentComponent {}
