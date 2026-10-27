import { Faq } from './models';
export const WORKSPACE_MIGRATION_FAQS: Faq[] = [
  [
    "How Long Does A Microsoft 365 To Google Workspace Migration Take?",
    "It depends on data volume. Data is pre-staged over weeks while users keep working in Microsoft 365, and the final cutover takes hours."
  ],
  [
    "What Happens To Word, Excel And PowerPoint Files?",
    "They can be converted to Docs, Sheets and Slides, or kept in Office format — Google Workspace supports both."
  ],
  [
    "Are Sharing Permissions Preserved?",
    "Yes. File sharing permissions are converted to their Google Drive equivalents automatically."
  ],
  [
    "Can SharePoint Be Migrated?",
    "Yes. Document libraries and sites migrate to Google Shared Drives with folder structure and permissions retained."
  ],
  [
    "What Happens To Outlook Folders?",
    "They become Gmail labels with the hierarchy preserved; the mapping can be customised."
  ],
  [
    "What About Teams Data?",
    "Conversations move to Google Chat, and channel files move to Shared Drives."
  ],
  [
    "Are Email Rules And Signatures Migrated?",
    "Rules convert to Gmail filters, though complex rules may need manual adjustment. Signatures are set up separately in Gmail."
  ],
  [
    "Can We Migrate In Phases?",
    "Yes. Department-by-department migration is supported with coexistence between the two platforms."
  ],
  [
    "What Happens To OneNote Notebooks?",
    "Notebooks are exported and converted to Google Docs — each section becomes a document. Heavily formatted pages may need review."
  ],
  [
    "Is There Downtime?",
    "Delta sync keeps downtime to a short cutover window. Prices on this page are one-time and exclude 18% GST."
  ]
];
