import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { RevealDirective } from '../shared/reveal.directive';

/** One `.cs` case-study card. */
interface CaseCard {
  /** anchor of the matching story on the case-studies page */
  readonly id: string;
  /** the small uppercase `.cs-tag` line */
  readonly tag: string;
  /** the headline figure in `.cs-num` */
  readonly num: string;
  /** the bold outcome sentence */
  readonly title: string;
  readonly body: string;
  /** the service pills in `.cs-foot` */
  readonly services: readonly string[];
}

const CASE_CARDS: readonly CaseCard[] = [
  {
    id: 'tally-cloud',
    tag: 'Manufacturing · 3 branches',
    num: '2 days → 0',
    title: 'Month-end reconciliation disappeared',
    body:
      'Three branches ran separate Tally files, emailing backups every month-end. After moving ' +
      'to Tally on Cloud, all branches work on one live dataset — the reconciliation step simply ' +
      'stopped existing.',
    services: ['Tally on Cloud', 'Cloud Backup'],
  },
  {
    id: 'ca-continuity',
    tag: 'CA Firm · Pune',
    num: '10 minutes',
    title: 'From office PC crash to back at work',
    body:
      'A hardware failure that would once have meant days of recovery and possible data loss ' +
      'became a ten-minute inconvenience — the team logged in from another laptop and carried on.',
    services: ['Cloud Desktop', 'Acronis Backup'],
  },
  {
    id: 'dpdpa-readiness',
    tag: 'BFSI · Enterprise',
    num: '8 weeks',
    title: 'DPDPA audit-ready before the deadline',
    body:
      'Data discovery, consent management, a rights portal and vendor DPAs — deployed and ' +
      'operating, with a named vDPO owning the obligation. Enterprise clients’ due-diligence ' +
      'questions now get answered in minutes.',
    services: ['SecureSetu', 'vDPO'],
  },
];

/** The "proof, not promises" case-study grid. */
@Component({
  selector: 'xh-cases',
  imports: [RouterLink, RevealDirective],
  standalone: true,
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="cases" id="cases">
      <div class="wrap">
        <div class="sec-head" xhReveal>
          <div class="eyebrow">Proof, not promises</div>
          <h2>What changed for them</h2>
          <p>Real outcomes from Indian businesses that moved to XcellHost.</p>
        </div>
        <div class="case-grid">
          @for (c of cases; track c.title) {
<a
  class="cs"
  routerLink="/case-studies"
  [fragment]="c.id"
  target="_blank"
  rel="noopener"
  [attr.aria-label]="'Read case study: ' + c.title"
>
              <div class="cs-tag">{{ c.tag }}</div>
              <div class="cs-num">{{ c.num }}</div>
              <b>{{ c.title }}</b>
              <p>{{ c.body }}</p>
              <div class="cs-foot">
                @for (s of c.services; track s) {
                  <span>{{ s }}</span>
                }
              </div>
            </a>
          }
        </div>
        <div class="cases-cta">
          <a class="btn btn-ghost" routerLink="/case-studies">
            View all case studies <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  `,
})
export class CasesComponent {
  readonly cases = CASE_CARDS;
}
