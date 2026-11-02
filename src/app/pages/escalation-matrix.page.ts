import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { ESCALATION_DEPARTMENTS } from '../data/escalation.data';
import { HUMAN_TEAM_MEMBERS } from '../data/company-team.data';

const TEAM_NAME_ALIASES: Readonly<Record<string, string>> = {
  'santosh behera': 'santosh kumar behera',
  'mohammad tallah': 'talha mohammad',
  'rashed sayyed': 'rashed syed',
  'vaishnavi ghagare': 'vaishnavi ghaghare',
};
const TEAM_BY_NAME = new Map(HUMAN_TEAM_MEMBERS.map(member => [member.name.trim().toLowerCase(), member]));

function employeeImage(name: string): string {
  const key = name.trim().toLowerCase();
  const image = TEAM_BY_NAME.get(TEAM_NAME_ALIASES[key] || key)?.image;
  return image ? encodeURI('/' + image.replace(/^\/+/, '')) : '';
}

// Reuse a matched employee portrait across departments, including name variants.
const IMAGE_BY_EMAIL = new Map(ESCALATION_DEPARTMENTS.flatMap(department =>
  department.contacts.flatMap(contact => {
    const image = employeeImage(contact.name);
    return image ? [[contact.email.trim().toLowerCase(), image] as const] : [];
  }),
));

@Component({
  selector: 'xh-escalation-matrix-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './escalation-matrix.page.html',
  styleUrl: './escalation-matrix.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EscalationMatrixPage {
  readonly departments = ESCALATION_DEPARTMENTS.map(department => ({
    ...department,
    contacts: department.contacts.map(contact => ({
      ...contact,
      image: employeeImage(contact.name) || IMAGE_BY_EMAIL.get(contact.email.trim().toLowerCase()) || '',
    })),
  }));
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
