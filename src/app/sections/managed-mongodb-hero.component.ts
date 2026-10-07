import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-managed-mongodb-hero',
  standalone: true,
  templateUrl: './managed-mongodb-hero.component.html',
  styleUrl: './managed-mongodb-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedMongodbHeroComponent {}
