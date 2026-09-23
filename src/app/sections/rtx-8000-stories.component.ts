import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-rtx-8000-stories',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './rtx-8000-stories.component.html',
  styleUrl: './rtx-8000-stories.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Rtx8000StoriesComponent {}
