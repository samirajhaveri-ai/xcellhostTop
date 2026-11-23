export interface ChecklistSection { title: string; summary: string; items: readonly string[]; }
export interface ChecklistResource {
  slug: string; title: string; coverTitle: readonly string[]; topic: string; date: string;
  description: string; introduction: readonly string[]; audience: string;
  sections: readonly ChecklistSection[]; cover: string; accent: string; author: string;
}
export const CHECKLISTS: readonly ChecklistResource[] = [
  {
    slug: 'cxo-resilience-checklist', title: 'CXO Resilience Checklist', coverTitle: ['Resilience in', 'Cloud, Security', '& AI Change'], topic: 'Business resilience', date: '2026-11-23',
    description: '25 practical review points for leaders planning technology changes, testing recovery and assigning operational ownership.',
    introduction: [
      'Turn a resilience discussion into a review that has named owners, evidence and follow-up actions. This XcellHost checklist brings together 25 planning questions across cloud operations, security, recovery and AI-enabled workflows.',
      'Work through the four phases with business, technology and security owners. Mark each item after reviewing evidence, record gaps and agree what must be resolved before the next stage.',
    ], audience: 'Business leaders, IT heads, security owners and transformation teams', cover: '/assets/images/checklists/cxo-resilience.svg', accent: '#1769d6', author: 'XcellHost Editorial',
    sections: [
      { title: 'Plan', summary: 'Set the business boundaries before choosing the technical design.', items: [
        'Name the business sponsor and the technical owner for each critical service.',
        'List the business processes that must continue during an outage.',
        'Map dependencies across identity, networks, cloud regions, providers and external APIs.',
        'Agree recovery-time and recovery-point targets with business owners.',
        'Record data locations, access needs and applicable internal policies.',
        'Define approval criteria and the evidence needed for a go/no-go decision.',
      ] },
      { title: 'Build', summary: 'Make protective controls and recovery options part of the implementation.', items: [
        'Separate production access from development and test access.',
        'Apply least privilege and review privileged account ownership.',
        'Protect backup copies and test who can change or delete them.',
        'Define monitoring, alert routing and escalation coverage.',
        'Inventory the models, datasets, prompts and APIs used by AI workflows.',
        'Require human approval for AI-assisted changes that affect production.',
      ] },
      { title: 'Cutover', summary: 'Rehearse the change, including the point at which you stop or roll back.', items: [
        'Test the migration or release with representative data and access roles.',
        'Rehearse rollback and identify the latest safe rollback point.',
        'Check recovery procedures in an isolated test environment.',
        'Confirm support contacts and decision-makers for the change window.',
        'Agree stakeholder updates and the channel used if primary systems fail.',
        'Record test results, open exceptions and the final change approval.',
      ] },
      { title: 'Run', summary: 'Keep operational evidence current after the project has gone live.', items: [
        'Assign an owner and review date to every unresolved exception.',
        'Review alerts, capacity limits and unexpected cost changes.',
        'Test restoration and service recovery at an agreed interval.',
        'Review access when people join, change roles or leave.',
        'Test important patches and document restart and recovery steps.',
        'Revisit dependencies when a provider, region, model or API changes.',
        'Use incidents and exercises to update runbooks and leadership actions.',
      ] },
    ],
  },
  {
    slug: 'sample-azure-foundation-checklist', title: 'Sample: XcellHost Microsoft Azure Foundation Checklist', coverTitle: ['Microsoft Azure', 'Foundation', 'Checklist'], topic: 'Cloud foundations', date: '2026-11-14',
    description: 'Review Azure ownership, access, configuration, monitoring and operational readiness with a practical team checklist.',
    introduction: ['Use this original XcellHost sample to organise a foundation review before an Azure deployment or operational handover.', 'Review each point with the appropriate business or technical owner. Keep supporting evidence and assign a date for closing any open actions. Adapt the review to the workload and your internal policies.'],
    audience: 'Cloud owners, platform teams and operations leads', cover: '/assets/images/checklists/azure-foundation.svg', accent: '#147ea4', author: 'XcellHost Editorial',
    sections: [
      { title: 'Ownership and scope', summary: 'Make responsibilities and review boundaries explicit.', items: ['Name the business owner and technical support owner.', 'Record the workloads and subscriptions included in the review.', 'Confirm which requirements and internal policies apply.'] },
      { title: 'Access and configuration', summary: 'Review how access and environment changes are controlled.', items: ['Review who can approve and grant access.', 'Record the intended separation between environments.', 'Check that configuration changes have an owner and review process.', 'Document exceptions and the person responsible for each one.'] },
      { title: 'Operation and recovery', summary: 'Confirm how the environment is monitored, supported and recovered.', items: ['Assign owners for monitoring and incident response.', 'Review budget alerts and the process for investigating unexpected usage.', 'Record backup and recovery responsibilities.', 'Confirm that recovery procedures have been reviewed for the workload.'] },
      { title: 'Handover', summary: 'Keep evidence and follow-up work with named owners.', items: ['Save the evidence and review date.', 'Assign follow-up actions and deadlines.', 'Agree the next review with the owners.'] },
    ],
  },
  {
    slug: 'sample-data-analytics-checklist', title: 'Sample: XcellHost Data Analytics Readiness Checklist', coverTitle: ['Data Analytics', 'Readiness', 'Checklist'], topic: 'Data and analytics', date: '2026-11-14',
    description: 'Review analytics goals, data definitions, access, quality checks and user handover before making a reporting solution operational.',
    introduction: ['Give business and delivery teams a shared way to review an analytics initiative. This original XcellHost sample follows the work from the decision being supported through data validation and operational handover.', 'Use the checklist to structure a readiness discussion. Record known limitations and decisions; completing a review is not a guarantee of data quality.'],
    audience: 'Analytics leads, data owners and business stakeholders', cover: '/assets/images/checklists/data-analytics.svg', accent: '#7551bd', author: 'XcellHost Editorial',
    sections: [
      { title: 'Decision and audience', summary: 'Start with the business decision and the people who will use the result.', items: ['Name the business decision the analytics will support.', 'Identify its users and the information they need.', 'Agree how the team will judge whether the result is useful.'] },
      { title: 'Data readiness', summary: 'Agree the definitions and responsibilities behind the numbers.', items: ['List the source systems and dataset owners.', 'Define the important metrics, reporting periods and exclusions.', 'Record refresh expectations and known quality issues.', 'Agree access approval and review responsibilities.'] },
      { title: 'Validation', summary: 'Compare results with agreed examples and actual user workflows.', items: ['Check worked examples with a business owner.', 'Compare outputs with the agreed source records or totals.', 'Record mismatches and assign resolution owners.', 'Ask users to test the result in their normal workflow.'] },
      { title: 'Operational handover', summary: 'Explain how the solution will be supported and reviewed.', items: ['Document limitations and the support contact.', 'Explain how data delays will be communicated.', 'Assign ownership for future metric changes.', 'Set a review date for open questions and feedback.'] },
    ],
  },
];
export function checklistCount(resource: ChecklistResource): number { return resource.sections.reduce((total, section) => total + section.items.length, 0); }
