export interface CaseStudy {
  readonly id: string;
  readonly documentId?: string;
  readonly mainCategory: string;
  readonly subCategory: string;
  readonly customer?: string;
  readonly headline?: string;
  readonly quote?: string;
  readonly quoteBy?: string;
  readonly industry: string;
  readonly profile: string;
  readonly metric: string;
  readonly metricLabel: string;
  readonly summary: string;
  readonly challenge: string;
  readonly solution: string;
  readonly impact: readonly string[];
  readonly services: readonly string[];
}

export const CASE_STUDIES: readonly CaseStudy[] = [
  {
    id: 'tally-cloud',
    mainCategory: 'Cloud & Infrastructure',
    subCategory: 'Manufacturing',
    industry: 'Manufacturing',
    profile: '3 branches',
    metric: '2 days to 0',
    metricLabel: 'Month-end reconciliation disappeared',
    summary:
      'Three branches moved from separate Tally files and emailed backups to one live, protected workspace.',
    challenge:
      'Each branch maintained its own Tally data. At month-end, teams exchanged backups and spent up to two days checking and reconciling records before reporting could begin.',
    solution:
      'XcellHost moved the business to Tally on Cloud, created secure role-based access for each branch and protected the shared dataset with scheduled cloud backups.',
    impact: [
      'One current dataset across all three branches',
      'No manual month-end file consolidation',
      'Secure access for authorised teams from any location',
    ],
    services: ['Tally on Cloud', 'Cloud Backup'],
  },
  {
    id: 'ca-continuity',
    mainCategory: 'Cloud & Infrastructure',
    subCategory: 'Professional Services',
    industry: 'CA firm',
    profile: 'Pune',
    metric: '10 minutes',
    metricLabel: 'From office PC crash to back at work',
    summary:
      'A failed office PC became a short interruption instead of a recovery project with possible data loss.',
    challenge:
      'Critical applications and client work were tied to an office computer. A hardware failure could stop the team for days while files and software were recovered.',
    solution:
      'A managed Cloud Desktop separated the working environment from the physical device, while Acronis Backup added a protected recovery layer for business data.',
    impact: [
      'Work resumed from another laptop in ten minutes',
      'No dependency on a single office device',
      'A repeatable backup and recovery path for the team',
    ],
    services: ['Cloud Desktop', 'Acronis Backup'],
  },
  {
    id: 'dpdpa-readiness',
    mainCategory: 'Data Protection & Compliance',
    subCategory: 'BFSI',
    industry: 'BFSI',
    profile: 'Enterprise',
    metric: '8 weeks',
    metricLabel: 'DPDPA audit-ready before the deadline',
    summary:
      'A structured privacy programme replaced scattered compliance activity with evidence, ownership and operating workflows.',
    challenge:
      'The organisation needed to discover personal data, formalise consent and rights handling, review vendor obligations and answer enterprise due-diligence requests consistently.',
    solution:
      'SecureSetu was deployed for data discovery, consent and data-principal request workflows, supported by a named vDPO to own governance and remediation.',
    impact: [
      'Core privacy workflows operating within eight weeks',
      'Clear ownership and evidence for audit questions',
      'Faster responses to client due-diligence requests',
    ],
    services: ['SecureSetu', 'vDPO'],
  },
];

