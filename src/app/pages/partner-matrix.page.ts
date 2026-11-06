import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { PARTNER_TEAMS } from '../data/partner-matrix.data';
import { HUMAN_TEAM_MEMBERS } from '../data/company-team.data';

const ALL_TEAMS = 'all';
const TEAM_NAME_ALIASES: Readonly<Record<string, string>> = {
  'syed rashed': 'rashed syed',
  'mohammad talha': 'talha mohammad',
  'santosh behra': 'santosh kumar behera',
};
const TEAM_PHOTOS = new Map(HUMAN_TEAM_MEMBERS.map(member => [member.name.trim().toLowerCase(), member.image]));
const ORIGINAL_PORTRAITS: Readonly<Record<string, string>> = {
  'rashed syed': '/assets/images/Rashed Sayed.png',
  'ajay gupta': '/assets/images/Ajay Gupta.png',
  'mihir ambokar': '/assets/images/Mihir Ambokar.png',
  'talha mohammad': '/assets/images/Talha.png',
  'santosh kumar behera': '/assets/images/Santosh Behra.png',
  'amit yadav': '/assets/images/Amit Yadav.png',
};

function contactImage(name: string): string {
  const key = name.replace(/^(?:mr|mrs|ms|dr)\.?\s+/i, '').trim().toLowerCase();
  const image = key === 'samir jhaveri'
    ? '/assets/images/website-photo-frame-samir-jhaveri-1.png'
    : ORIGINAL_PORTRAITS[TEAM_NAME_ALIASES[key] || key] || TEAM_PHOTOS.get(TEAM_NAME_ALIASES[key] || key);
  return image ? encodeURI('/' + image.replace(/^\/+/, '')) + '?v=partner-portrait-2' : '';
}

@Component({
  selector: 'xh-partner-matrix-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './partner-matrix.page.html',
  styleUrl: './partner-matrix.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PartnerMatrixPage {
  readonly teams = PARTNER_TEAMS.map(team => ({
    ...team,
    contacts: team.contacts.map(contact => {
      const image = contactImage(contact.name);
      return {
        ...contact,
        image,
        framedPortrait: image.includes('/TEAMS%20PHOTO/'),
        founderPortrait: image.includes('website-photo-frame-samir'),
      };
    }),
  }));
  readonly selectedId = signal(ALL_TEAMS);
  readonly query = signal('');
  readonly contactCount = this.teams.reduce((total, team) => total + team.contacts.length, 0);
  readonly locationCount = new Set(this.teams.flatMap(team => team.contacts.map(contact => contact.city))).size;
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
