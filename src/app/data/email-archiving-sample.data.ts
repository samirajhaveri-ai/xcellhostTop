import { Faq } from './models';

// Sample copy for the Email Archiving page.
export const EMAIL_ARCHIVING_SAMPLE_WHY = [
  { icon: 'M12 2l8 4v6c0 5-8 10-8 10S4 17 4 12V6z', title: 'Protect your email records', body: 'Plan an archive that preserves business correspondence and helps protect it from accidental changes.' },
  { icon: 'M11 3a8 8 0 100 16 8 8 0 000-16M17 17l5 5', title: 'Find the right conversation', body: 'Make historical messages easier to locate for everyday requests, internal reviews and investigations.' },
  { icon: 'M6 3h9l4 4v14H6zM14 3v5h5M9 12h7M9 16h7', title: 'Retention that fits your needs', body: 'Define retention periods and access policies around your business and recordkeeping requirements.' },
  { icon: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h1M8 17h1', title: 'Connect your mail environment', body: 'Review archiving options for your email platform and plan how messages will be captured.' },
  { icon: 'M3 12h5l3-8 4 16 3-8h3', title: 'Guided onboarding', body: 'Work through setup, historical imports and capture checks with a clear rollout plan.' },
  { icon: 'M4 13v-1a8 8 0 0116 0v1M4 12h3v7H4zM17 12h3v7h-3zM17 19v2h-5', title: 'Support beyond setup', body: 'Get help reviewing archive access, search workflows and changing requirements as your business grows.' },
];

export const EMAIL_ARCHIVING_SAMPLE_FAQS: Faq[] = [
  ['What is email archiving?', 'Email archiving preserves a searchable record of business email so older conversations can be found and reviewed when needed.'],
  ['How is archiving different from email backup?', 'Backup focuses on restoring lost data. Archiving focuses on retaining and searching email records over time. Many businesses use both.'],
  ['Which email platforms can be connected?', 'The page describes Microsoft 365 and Google Workspace archiving. Confirm compatibility with your platform and configuration during setup.'],
  ['Can we import older emails?', 'Historical imports depend on the source system, export format and selected plan. The onboarding review can establish what can be moved into the archive.'],
  ['How long are archived emails retained?', 'Retention depends on your configured policies and service plan. Agree on the required periods before enabling the archive.'],
  ['Who can search the archive?', 'Access should be limited to authorised users and administrators. Define roles and search permissions during onboarding.'],
  ['What is a legal hold?', 'A legal hold preserves selected records for an investigation or dispute. Confirm the available controls and scope for your chosen service.'],
  ['Can archived emails be exported?', 'Export options depend on the selected service and your access permissions. Discuss the formats and audit records you need during the setup review.'],
  ['What happens when an employee leaves?', 'Archived correspondence can remain available according to your retention policy. Review account closure and archive access as part of your employee offboarding process.'],
  ['How do we get started?', 'Contact XcellHost with your email platform, mailbox count and retention requirements to discuss setup and a demonstration.'],
];
