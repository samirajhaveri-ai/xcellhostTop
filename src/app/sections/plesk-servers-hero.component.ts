import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';

@Component({
  selector: 'xh-plesk-servers-hero',
  standalone: true,
  templateUrl: './plesk-servers-hero.component.html',
  styleUrl: './plesk-servers-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PleskServersHeroComponent implements OnDestroy {
  readonly domainAdded = signal(false);
  readonly domainStatus = signal('');
  private domainTimer?: ReturnType<typeof setTimeout>;

  addDomain(): void {
    clearTimeout(this.domainTimer);
    this.domainAdded.set(true);
    this.domainStatus.set('Creating newsite.in…');
    this.domainTimer = setTimeout(() => this.domainStatus.set("✓ newsite.in is live with Let's Encrypt SSL"), 1300);
  }

  ngOnDestroy(): void { clearTimeout(this.domainTimer); }
}
