import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-entra-id-hero',
  standalone: true,
  templateUrl: './entra-id-hero.component.html',
  styleUrl: './entra-id-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EntraIdHeroComponent {}
