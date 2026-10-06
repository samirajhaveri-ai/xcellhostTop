import { Faq } from './models';

export const MAILBOX_MIGRATION_FAQS: Faq[] = [
  [
    "How long does a mailbox migration take?",
    "A typical 50 GB mailbox migrates in about 4–8 hours, and parallel processing handles thousands of mailboxes at once — so most projects finish in days or weeks, not months."
  ],
  [
    "Is all my data preserved?",
    "Yes. Folder structure, dates and metadata, read/unread status, flags and attachments are preserved. Gmail labels become Outlook folders according to your mapping rules."
  ],
  [
    "Can users keep working during the migration?",
    "Yes. Users keep sending and receiving email throughout; delta sync moves new mail before a short final cutover."
  ],
  [
    "Is there a mailbox size limit?",
    "No hard limit. Mailboxes of 100 GB or more are migrated routinely with item-level parallel transfer."
  ],
  [
    "Do you migrate shared mailboxes and resources?",
    "Yes — shared mailbox permissions, delegation, distribution lists, security groups and room/equipment mailboxes are supported where the platforms allow."
  ],
  [
    "Which platforms are supported?",
    "Sources: Google Workspace/Gmail, Exchange (on-premises and online), IMAP, Zimbra, Lotus Notes/Domino and Microsoft 365. Destinations: Microsoft 365, Google Workspace, Exchange on-premises, IMAP, Zimbra and Lotus Notes/Domino."
  ],
  [
    "Why does IMAP migrate only email?",
    "The IMAP protocol only carries email and folders, so contacts and calendars from IMAP servers are exported separately (for example as vCard/iCal) and imported by our team."
  ],
  [
    "Do you store our email?",
    "No. Mail flows directly from the source to the destination and is not retained after the migration."
  ],
  [
    "How is it priced?",
    "Per mailbox, by plan, with volume discounts from 250 mailboxes. Prices are one-time, in INR, and exclude 18% GST."
  ]
];
