import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-managed-redis-hero',
  standalone: true,
  templateUrl: './managed-redis-hero.component.html',
  styleUrl: './managed-redis-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedRedisHeroComponent {}
