import { ChangeDetectionStrategy, Component, computed, effect, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { OverlayService } from '../core/overlay.service';
import { SeoService } from '../core/seo.service';

interface StudyStat {
  readonly value: string;
  readonly label: string;
}

interface CaseStudyDetail {
  readonly id: string;
  readonly customer: string;
  readonly industry: string;
  readonly profile: string;
  readonly headline: string;
  readonly relationship: string;
  readonly visualTitle: string;
  readonly visualClass: string;
  readonly services: readonly string[];
  readonly stats: readonly StudyStat[];
  readonly backgroundTitle: string;
  readonly background: readonly string[];
  readonly challengeTitle: string;
  readonly challenge: readonly string[];
  readonly solutionTitle: string;
  readonly solution: readonly string[];
  readonly resultTitle: string;
  readonly results: readonly string[];
  readonly quote: string;
  readonly quoteBy: string;
}

const CASE_STUDY_DETAILS: readonly CaseStudyDetail[] = [
  {
    id: 'tally-cloud',
    customer: 'Northstar Components',
    industry: 'Manufacturing',
    profile: '3 branches',
    headline: 'Northstar Components removes two days of month-end reconciliation with one live Tally workspace',
    relationship: 'Northstar Components and XcellHost',
    visualTitle: 'One finance workspace. Every branch connected.',
    visualClass: 'detail-visual-manufacturing',
    services: ['Tally on Cloud', 'Cloud Backup', 'Managed Support'],
    stats: [
      { value: '3', label: 'branches working on one dataset' },
      { value: '0', label: 'days spent consolidating files' },
      { value: '24x7', label: 'managed platform monitoring' },
    ],
    backgroundTitle: 'A growing manufacturer held back by disconnected finance data',
    background: [
      'Northstar Components is a fictional, mid-sized manufacturer operating three branches across western India. Each location managed sales, purchasing and inventory in a separate Tally company file.',
      'The process worked while the business was small, but reporting became slower as transaction volumes and branch coordination increased.',
    ],
    challengeTitle: 'Creating a reliable month-end view without exchanging backup files',
    challenge: [
      'Finance teams emailed Tally backups at the end of every month. The head office then compared entries, checked versions and resolved duplicated or missing transactions before management reports could begin.',
      'The business needed concurrent, secure access without exposing the accounting environment directly to the public internet or depending on one office computer.',
    ],
    solutionTitle: 'A centrally managed Tally environment with protected access and backups',
    solution: [
      'XcellHost created a right-sized Tally on Cloud workspace, migrated the active company data and configured role-based access for authorised users at all three branches.',
      'Scheduled cloud backups, access monitoring and a documented recovery process added continuity without changing the familiar Tally workflow used by the finance team.',
    ],
    resultTitle: 'One current dataset and a faster close',
    results: [
      'All branches now work against the same current accounting dataset.',
      'Manual file consolidation was removed from the month-end process.',
      'Authorised staff can continue working securely from another location when an office connection or device is unavailable.',
    ],
    quote: 'The team kept the Tally workflow they already knew, but the version-checking and backup exchange disappeared.',
    quoteBy: 'Sample Finance Manager, Northstar Components',
  },
  {
    id: 'ca-continuity',
    customer: 'LedgerPoint Advisors',
    industry: 'Professional services',
    profile: 'CA firm · Pune',
    headline: 'LedgerPoint Advisors resumes client work in ten minutes after an office PC failure',
    relationship: 'LedgerPoint Advisors and XcellHost',
    visualTitle: 'The workspace continued when the device stopped.',
    visualClass: 'detail-visual-continuity',
    services: ['Cloud Desktop', 'Acronis Backup', 'Managed Support'],
    stats: [
      { value: '10 min', label: 'to resume client work' },
      { value: '0', label: 'client files lost' },
      { value: '1', label: 'managed recovery path' },
    ],
    backgroundTitle: 'A busy accounting practice dependent on office hardware',
    background: [
      'LedgerPoint Advisors is a fictional chartered-accountancy practice serving growing businesses in Pune. Its core applications and current client files were installed on a primary office computer.',
      'Remote access was limited and recovery depended on the condition of that device and the latest locally available backup.',
    ],
    challengeTitle: 'Keeping deadline-driven work available during a device failure',
    challenge: [
      'Tax, audit and compliance work follows fixed deadlines. A failed workstation could interrupt several team members while software, configurations and client data were restored.',
      'The firm needed a consistent desktop experience that was independent of one physical computer and protected by a repeatable backup process.',
    ],
    solutionTitle: 'A managed cloud desktop separated work from the endpoint',
    solution: [
      'XcellHost moved the working environment to a managed Cloud Desktop and configured access for approved staff. Applications and data remained inside the controlled workspace rather than on individual laptops.',
      'Acronis Backup protected the environment with scheduled recovery points, while operating checks and support procedures gave the team a clear response path.',
    ],
    resultTitle: 'A hardware incident became a short interruption',
    results: [
      'A user resumed work from another laptop in approximately ten minutes.',
      'The practice no longer depends on a single office PC for its active workspace.',
      'Backups and recovery steps are managed and tested instead of relying on ad-hoc copies.',
    ],
    quote: 'We changed devices, signed in and continued. There was no rebuild project in the middle of a client deadline.',
    quoteBy: 'Sample Practice Partner, LedgerPoint Advisors',
  },
  {
    id: 'dpdpa-readiness',
    customer: 'Aegis Finance',
    industry: 'BFSI',
    profile: 'Enterprise',
    headline: 'Aegis Finance builds an operating DPDPA readiness programme in eight weeks',
    relationship: 'Aegis Finance and XcellHost SecureSetu',
    visualTitle: 'Privacy evidence moved from documents into workflows.',
    visualClass: 'detail-visual-privacy',
    services: ['SecureSetu', 'vDPO', 'Privacy Assessment'],
    stats: [
      { value: '8 weeks', label: 'to core workflow readiness' },
      { value: '1', label: 'governed evidence register' },
      { value: '100%', label: 'critical owners assigned' },
    ],
    backgroundTitle: 'A financial-services organisation preparing for stronger privacy obligations',
    background: [
      'Aegis Finance is a fictional financial-services enterprise working with customer, employee and partner information across multiple business systems and vendors.',
      'Privacy activity existed across legal, security and operations teams, but evidence and ownership were distributed across documents, inboxes and separate trackers.',
    ],
    challengeTitle: 'Turning policy commitments into repeatable operating evidence',
    challenge: [
      'The organisation needed to locate personal-data processing, formalise consent and data-principal request handling, review vendor obligations and answer enterprise due-diligence questions consistently.',
      'Leadership also needed one view of gaps, owners and remediation progress without creating another disconnected spreadsheet programme.',
    ],
    solutionTitle: 'SecureSetu workflows supported by named privacy ownership',
    solution: [
      'XcellHost configured SecureSetu for data discovery, consent records, request handling and evidence management. A phased assessment prioritised the highest-risk processing activities and third parties.',
      'A named virtual DPO coordinated owners, reviewed remediation evidence and established a practical operating cadence for privacy governance.',
    ],
    resultTitle: 'Audit questions could be answered with current evidence',
    results: [
      'Core privacy workflows were operating within the sample eight-week programme.',
      'Critical remediation actions had named business and technology owners.',
      'Client and internal due-diligence responses became faster and more consistent.',
    ],
    quote: 'The biggest improvement was ownership: every important privacy action had a workflow, evidence and a responsible team.',
    quoteBy: 'Sample Privacy Lead, Aegis Finance',
  },
];

@Component({
  selector: 'xh-case-study-detail-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-study-detail.page.html',
  styleUrls: ['./case-study-detail.page.css'],
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CaseStudyDetailPage {
  private readonly route = inject(ActivatedRoute);
  private readonly overlay = inject(OverlayService);
  private readonly seo = inject(SeoService);
  private readonly paramMap = toSignal(this.route.paramMap, {
    initialValue: this.route.snapshot.paramMap,
  });

  readonly study = computed(() => {
    const id = this.paramMap().get('id');
    return CASE_STUDY_DETAILS.find((item) => item.id === id);
  });

  readonly relatedStudies = computed(() => {
    const activeId = this.study()?.id;
    return CASE_STUDY_DETAILS.filter((item) => item.id !== activeId);
  });

  constructor() {
    effect(() => {
      const activeStudy = this.study();
      if (!activeStudy) {
        this.seo.set('Case Study Not Found - XcellHost', 'The requested customer story could not be found.', '/case-studies/');
        return;
      }

      this.seo.set(
        `${activeStudy.customer} Customer Story - XcellHost`,
        activeStudy.headline,
        `/case-studies/${activeStudy.id}/`,
      );
    });
  }

  openCallback(): void {
    this.overlay.open('callback');
  }
}
