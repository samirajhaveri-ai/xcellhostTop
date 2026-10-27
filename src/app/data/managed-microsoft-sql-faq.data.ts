import { Faq } from './models';
export const MANAGED_SQL_FAQS: Faq[] = [
  [
    "Which SQL Server Versions Are Supported?",
    "The latest version and up to two earlier stable versions (N–2) — currently SQL Server 2022, 2019 and 2017. We plan upgrades with you and keep a tested rollback path."
  ],
  [
    "Which SQL Server Editions Can I Run?",
    "Standard and Enterprise, with the licence included in your monthly bill, or your own licences (BYOL) if they carry Software Assurance."
  ],
  [
    "Which Other Databases Does XcellHost Manage?",
    "PostgreSQL, MySQL, MariaDB, MongoDB and Redis, with Oracle Database and SAP HANA available for enterprise estates."
  ],
  [
    "How Is High Availability Provided?",
    "Through Always On availability groups across zones, synchronous replication, active-passive or readable-secondary set-ups and automated failover with a listener your apps connect to."
  ],
  [
    "Where Is My Data Stored?",
    "In XcellHost's Indian data centres. Data stays in India unless you ask us to replicate it elsewhere."
  ],
  [
    "How Do Backups Work?",
    "Automated full, differential and transaction-log backups with configurable retention, point-in-time restore and on-demand backups, plus regular restore tests."
  ],
  [
    "What Billing Models Are Available?",
    "Monthly pay-as-you-grow, or a 12-month commitment for a lower compute price. SQL Server licences are billed monthly per 2-core pack. Prices are in INR excluding 18% GST."
  ],
  [
    "How Do I Migrate My Databases?",
    "We support homogeneous and heterogeneous migrations using backup/restore, log shipping, replication or export/import, with XcellHost engineers running the cutover."
  ],
  [
    "Do I Need To License Every Core?",
    "SQL Server is licensed per core in 2-core packs with a minimum of 4 cores per instance, which is why our plans start at 4 vCPU."
  ],
  [
    "Can I Get A Free Sizing And Licence Review?",
    "Yes. Share your current servers and licences and we will recommend edition, size and HA design before you commit."
  ]
];
