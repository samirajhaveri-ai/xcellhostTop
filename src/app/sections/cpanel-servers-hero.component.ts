import { ChangeDetectionStrategy, Component, OnDestroy, signal } from '@angular/core';

// WHM console adapted from the supplied cpanel-servers.html reference.
@Component({
  selector: 'xh-cpanel-servers-hero',
  standalone: true,
  templateUrl: './cpanel-servers-hero.component.html',
  styleUrl: './cpanel-servers-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CpanelServersHeroComponent implements OnDestroy {
  readonly accountAdded = signal(false);
  readonly accountStatus = signal('');
  private accountTimer?: ReturnType<typeof setTimeout>;

  createAccount(): void {
    clearTimeout(this.accountTimer);
    this.accountAdded.set(true);
    this.accountStatus.set('Creating newclient.in…');
    this.accountTimer = setTimeout(
      () => this.accountStatus.set('✓ newclient.in is live — cPanel login sent'),
      1300,
    );
  }

  ngOnDestroy(): void {
    clearTimeout(this.accountTimer);
  }
}
