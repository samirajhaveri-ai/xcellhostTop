import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-managed-aws-hero',
  standalone: true,
  templateUrl: './managed-aws-hero.component.html',
  styleUrl: './managed-aws-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedAwsHeroComponent {}
