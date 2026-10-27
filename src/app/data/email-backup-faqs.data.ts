import { Faq } from './models';
export const EMAIL_BACKUP_FAQS: Faq[] = [
  [
    "What Is Email Backup And Why Do I Need It?",
    "Email backup stores separate copies of emails, attachments, calendars and contacts so they can be recovered if data is lost, deleted or compromised. It protects against ransomware and mistakes, supports compliance, preserves mail after employees leave and keeps the business running during outages."
  ],
  [
    "Doesn't Microsoft 365 Or Google Workspace Already Back Up My Email?",
    "They keep the service running and offer short recycle-bin windows, but under the shared-responsibility model your data is your responsibility. Deleted items, ransomware damage or a removed user's mailbox can be lost once those windows expire. A separate backup closes that gap."
  ],
  [
    "How Does XcellHost Email Backup Work?",
    "We connect to Microsoft 365 or Google Workspace through secure APIs without storing your credentials, back up mail, attachments, calendars and contacts on your schedule, and store encrypted copies off-tenant. You can restore individual messages or whole mailboxes to any point in time, with monitoring, alerts and audit logs."
  ],
  [
    "How Is Backup Different From Email Archiving?",
    "Native archiving lives inside the same account and can disappear when the user is deleted. Backup is stored separately, so you can still recover specific emails or mailboxes after an account is removed — and roll back after ransomware or deletion."
  ],
  [
    "Which Email Platforms Are Supported?",
    "Microsoft 365 (Outlook and Exchange Online), Google Workspace (Gmail, Contacts and Calendar), on-premises Microsoft Exchange, and other mail services that use IMAP or POP3."
  ],
  [
    "Can I Restore A Single Email Or Attachment?",
    "Yes. You can restore individual emails, attachments, folders or a full mailbox — no need to restore everything to get one item back."
  ],
  [
    "Can I Search Backed-Up Email?",
    "Yes. The web dashboard lets you search and filter by keyword, date, sender, recipient and more across emails, contacts and calendar items, then restore or export the results."
  ],
  [
    "How Often Are Backups Taken?",
    "Daily at minimum, and up to several times a day depending on your plan. After the first full backup, each run captures only new or changed items."
  ],
  [
    "Is Cloud Email Backup Secure And Compliant?",
    "Data is encrypted in transit and at rest, access uses OAuth and role-based permissions, and every action is logged. Retention, legal hold and audit logs help you meet obligations under India's DPDP Act, GDPR and industry rules."
  ],
  [
    "What Happens When An Employee Leaves?",
    "As long as their mailbox was backed up before the account was deleted, admins can keep, search and restore that mail for compliance, legal or operational needs — and you can free up the licence."
  ]
];
