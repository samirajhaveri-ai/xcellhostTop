import { ChangeDetectionStrategy, Component, ElementRef, inject } from '@angular/core';
import { TEAM_STRUCTURE } from '../data/team-structure.data';

@Component({
  selector: 'xh-team-structure',
  standalone: true,
  templateUrl: './team-structure.component.html',
  styleUrl: './team-structure.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TeamStructureComponent {
  readonly divisions = TEAM_STRUCTURE;
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  setExpanded(open: boolean): void {
    this.host.nativeElement.querySelectorAll<HTMLDetailsElement>('details').forEach(department => {
      department.open = open;
    });
  }
}
