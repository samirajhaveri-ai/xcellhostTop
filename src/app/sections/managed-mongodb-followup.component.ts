import { ChangeDetectionStrategy, Component, ElementRef, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealDirective } from '../shared/reveal.directive';

type Audience = 'cxo' | 'it' | 'fin' | 'risk';

@Component({
  selector: 'xh-managed-mongodb-followup',
  standalone: true,
  imports: [RouterLink, RevealDirective],
  templateUrl: './managed-mongodb-followup.component.html',
  styleUrl: './managed-mongodb-followup.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedMongodbFollowupComponent {
  readonly audience = signal<Audience>('cxo');
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;

  onTabKey(event: KeyboardEvent, current: Audience): void {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();
    const tabs: Audience[] = ['cxo', 'it', 'fin', 'risk'];
    const index = tabs.indexOf(current);
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? 3 : (index + (event.key === 'ArrowRight' ? 1 : -1) + 4) % tabs.length;
    this.audience.set(tabs[next]);
    this.host.querySelector<HTMLButtonElement>(`#mongo-team-${tabs[next]}`)?.focus();
  }
}
