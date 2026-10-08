import { Faq } from './models';
export const BOX_MIGRATION_FAQS: Faq[] = [
  [
    "Are Box Permissions Preserved?",
    "Yes. Box collaborator roles are converted to the equivalent permissions in OneDrive, SharePoint or Google Drive."
  ],
  [
    "What Happens To Box Notes?",
    "They're converted to Word documents (.docx) for Microsoft 365 or Google Docs for Google Workspace, with formatting and content preserved."
  ],
  [
    "Is Downtime Required?",
    "No. Users keep working in Box during pre-staging; delta sync then moves recent changes in a brief cutover window."
  ],
  [
    "How Long Does A Box Migration Take?",
    "It depends on data volume. Pre-staging can run over days or weeks; the final cutover for large organisations typically takes hours."
  ],
  [
    "Is Version History Preserved?",
    "Optionally — previous versions can be migrated, subject to the destination platform's version limits."
  ],
  [
    "What About Box Shared Links?",
    "Links themselves can't be transferred, but the underlying sharing is recreated in the destination and we provide a CSV mapping old links to new locations."
  ],
  [
    "Which Destinations Are Supported?",
    "OneDrive for Business, SharePoint Online document libraries and sites, Google Drive and Google Shared Drives."
  ],
  [
    "What Isn'T Migrated?",
    "Box Relay workflows, Box Skills data and custom metadata templates need to be recreated — for example in Power Automate or Google Apps Script. We can scope that work too."
  ],
  [
    "How Is It Priced?",
    "Per user and per shared folder, with optional Box Notes conversion and version history. Use the estimator for an indicative figure; prices are one-time and exclude 18% GST."
  ]
];
