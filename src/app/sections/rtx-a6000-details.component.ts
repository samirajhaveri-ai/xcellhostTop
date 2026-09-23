import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'xh-rtx-a6000-details',
  standalone: true,
  templateUrl: './rtx-a6000-details.component.html',
  styleUrls: [
    './rtx-6000-ada-details.component.css',
    './rtx-pro-6000-specifications.component.css',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RtxA6000DetailsComponent {
  readonly selectedHotspot = signal(0);
}
