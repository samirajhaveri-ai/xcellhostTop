import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-cybird-overview',
  standalone: true,
  templateUrl: './cybird-overview.component.html',
  styleUrl: './cybird-overview.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CybirdOverviewComponent {}
