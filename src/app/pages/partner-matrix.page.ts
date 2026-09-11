import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { PARTNER_TEAMS } from '../data/partner-matrix.data';

const ALL_TEAMS = 'all';

@Component({
  selector: 'xh-partner-matrix-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './partner-matrix.page.html',
  styleUrl: './partner-matrix.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerMatrixPage {
  readonly teams = PARTNER_TEAMS;
  readonly selectedId = signal(ALL_TEAMS);
  readonly query = signal('');
  readonly contactCount = this.teams.reduce((total, team) => total + team.contacts.length, 0);
  readonly visibleTeams = computed(() => {
    const query = this.query().trim().toLocaleLowerCase();
    const teams = this.selectedId() === ALL_TEAMS
      ? this.teams
      : this.teams.filter((team) => team.id === this.selectedId());

    return teams
      .map((team) => ({
        ...team,
        contacts: team.contacts.filter((contact) =>
          !query || `${contact.name} ${contact.designation} ${contact.email} ${contact.city} ${contact.purpose}`
            .toLocaleLowerCase()
            .includes(query)
        ),
      }))
      .filter((team) => team.contacts.length > 0);
  });
  readonly visibleCount = computed(() =>
    this.visibleTeams().reduce((total, team) => total + team.contacts.length, 0)
  );

  constructor() {
    inject(SeoService).set(
      'Channel Partner Contact Matrix - XcellHost',
      'Find the right XcellHost channel sales, pre-sales, support, billing and leadership contact.',
      '/partner-matrix/'
    );
  }

  selectTeam(id: string): void {
    this.selectedId.set(id);
  }

  search(event: Event): void {
    this.query.set((event.target as HTMLInputElement).value);
  }

  clearSearch(): void {
    this.query.set('');
  }

  teamCount(id: string): number {
    if (id === ALL_TEAMS) return this.contactCount;
    return this.teams.find((team) => team.id === id)?.contacts.length ?? 0;
  }

  formatPhone(phone: string): string {
    return phone.replace(/^(\+91)(\d{2})(\d{4})(\d{4})$/, '$1 $2 $3 $4')
      .replace(/^(\+91)(\d{5})(\d{5})$/, '$1 $2 $3');
  }
}
