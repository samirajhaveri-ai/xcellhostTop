import { Faq } from './models';

export const TENANT_MIGRATION_FAQS: Faq[] = [
  [
    "What is Microsoft 365 tenant-to-tenant migration?",
    "Moving users, mailboxes, files and collaboration data from one Microsoft 365 tenant to another — usually after a merger, acquisition, divestiture, consolidation or rebrand."
  ],
  [
    "How long does a migration take?",
    "A typical 50 GB mailbox migrates in about 4–8 hours. With waves running in parallel, organisations with thousands of users usually complete in weeks rather than months."
  ],
  [
    "Can users keep working during the migration?",
    "Yes. Users stay in the source tenant while data is copied; delta sync then moves only recent changes before a short final cutover."
  ],
  [
    "How are permissions handled?",
    "Users and groups are mapped between tenants, and shared mailbox access, OneDrive sharing, SharePoint permissions and Teams membership are preserved through configurable mapping rules."
  ],
  [
    "Can we roll back after cutover?",
    "Yes. Data is copied, not moved destructively, so the source tenant stays intact. If a problem appears, mail can be pointed back by switching MX records."
  ],
  [
    "What about our domain names?",
    "Domains are removed from the source tenant and added to the target at cutover, in a planned window, with MX and DNS changes handled by our team."
  ],
  [
    "Do you support legacy Office 365 tenants?",
    "Yes. Office 365 was renamed Microsoft 365 in 2020 — the platform and the migration process are the same."
  ],
  [
    "Can you migrate Intune devices?",
    "Yes. Device configurations, compliance policies and app deployments are recreated in the target tenant and devices are re-enrolled with minimal user effort."
  ],
  [
    "How is it priced?",
    "Per mailbox, user, site, team and device migrated, plus optional coexistence and project management. Volume discounts apply from 250 users. Use the estimator for an indicative figure, then we'll confirm a fixed quote after assessment."
  ],
  [
    "Are prices inclusive of GST?",
    "Prices are one-time, in INR, and exclude 18% GST. You receive a GST invoice from XcellHost."
  ]
];
