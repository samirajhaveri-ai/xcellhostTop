import { Faq } from './models';
export const DROPBOX_MIGRATION_FAQS: Faq[] = [
  [
    "Which File Types Are Supported?",
    "All Dropbox file types — documents, images, videos and everything else — are migrated."
  ],
  [
    "Are Dropbox Permissions Preserved?",
    "Yes. Sharing roles are mapped automatically to the equivalent permissions in OneDrive, SharePoint or Google Drive."
  ],
  [
    "Are Team Folders Supported?",
    "Yes. Dropbox Business team folders migrate with their structure and member access preserved."
  ],
  [
    "What Happens To Dropbox Paper?",
    "Paper documents are converted to Word (.docx) for Microsoft 365 or Google Docs for Google Workspace, with embedded content and comments preserved."
  ],
  [
    "Is There Downtime?",
    "Minimal. Users keep working in Dropbox during pre-staging; the delta sync and cutover for large organisations typically takes hours."
  ],
  [
    "How Long Does The Migration Take?",
    "Pre-staging can span days or weeks depending on volume; the final cutover is quick."
  ],
  [
    "Do Users Need Smart Sync Files Downloaded First?",
    "No. Files are copied server-side through the Dropbox API, so online-only placeholders migrate as full files."
  ],
  [
    "What Isn'T Migrated?",
    "Shared links (we provide a mapping report), Dropbox passwords, third-party integrations and Dropbox Replay data need separate setup."
  ],
  [
    "How Is It Priced?",
    "Per user and per team folder, with optional Paper conversion and version history. Use the estimator for an indicative figure; prices are one-time and exclude 18% GST."
  ]
];
