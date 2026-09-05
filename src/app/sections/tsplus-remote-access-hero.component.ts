import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-tsplus-remote-access-hero',
  standalone: true,
  templateUrl: './tsplus-remote-access-hero.component.html',
  styleUrl: './tsplus-remote-access-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsplusRemoteAccessHeroComponent {}
