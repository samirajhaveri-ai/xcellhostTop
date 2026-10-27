import { Faq } from './models';
export const ODOO_HOSTING_FAQS: Faq[] = [
  [
    "What Is Odoo Hosting?",
    "Running Odoo on your own cloud server instead of Odoo's shared SaaS. You get a dedicated VPS with PostgreSQL and root access, install any community or custom modules, and keep full control of your data."
  ],
  [
    "Which Odoo Versions Can I Deploy?",
    "Odoo 16, 17 and 18. Choose 18 for new projects, or 16/17 to match existing databases, modules and customisations."
  ],
  [
    "Can I Upgrade From Odoo 16 Or 17 To 18 Later?",
    "Yes, but a major-version change is a controlled migration of the database and modules rather than a simple update. Our team can plan and run it with a test copy first."
  ],
  [
    "Do I Get Root Access?",
    "Yes — full root access to the server plus the Odoo administrator account."
  ],
  [
    "Is Odoo Enterprise Supported?",
    "Yes. You can run Odoo Community at no licence cost, or bring your own Odoo Enterprise subscription and we'll host it."
  ],
  [
    "How Do I Choose The Right Plan?",
    "Size by users, installed apps, database size, report and scheduled-job load and integrations. Use the plan picker above or ask us for a free sizing."
  ],
  [
    "Who Handles Backups And Security Updates?",
    "On the self-managed plan we provide backup support and monitoring while you manage Odoo and OS updates. On fully managed Odoo, XcellHost engineers handle patching, backups and checks."
  ],
  [
    "Can You Migrate My Existing Odoo?",
    "Yes. We migrate your database, filestore and custom modules from another host or Odoo.sh free of charge."
  ],
  [
    "Are Prices Inclusive Of GST?",
    "Prices are per month in INR and exclude 18% GST. You receive a GST invoice from XcellHost."
  ]
];
