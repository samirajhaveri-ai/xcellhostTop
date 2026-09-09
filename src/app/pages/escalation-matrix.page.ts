import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ESCALATION_DEPARTMENTS } from '../data/escalation.data';

@Component({
  selector: 'xh-escalation-matrix-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './escalation-matrix.page.html',
  styleUrl: './escalation-matrix.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EscalationMatrixPage {
  readonly departments = ESCALATION_DEPARTMENTS;
  readonly selectedId = signal(this.departments[0].id);
  readonly selected = computed(() => this.departments.find(item => item.id === this.selectedId())!);

  constructor() {
    inject(SeoService).set('Escalation Matrix - XcellHost',
      'Find your XcellHost support team, department escalation contacts, email addresses and phone numbers.',
      '/escalation-matrix/');
  }

  formatPhone(phone: string): string {
    return phone === '+912267111555' ? '+91 22 6711 1555' : phone.replace(/^(\+91)(\d{5})(\d{5})$/, '$1 $2 $3');
  }
}
