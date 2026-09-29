import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Faq } from '../data/models';
import { InsightsSectionComponent } from './insights-section.component';
import { ProductFaqComponent } from './product';

export type ManagedDatabaseSlug =
  | 'managed-mysql'
  | 'managed-mariadb'
  | 'managed-postgresql'
  | 'managed-oracle';

interface DatabaseProfile {
  name: string;
  shortName: string;
  why: readonly { title: string; body: string; icon: string }[];
  reviews: readonly { initials: string; name: string; role: string; quote: string }[];
  faqs: Faq[];
}

const DEFAULT_WHY = [
  { title: '24×7 database operations', body: 'Continuous monitoring of availability, replication, backups and capacity.', icon: 'M12 8v4l3 2M12 3a9 9 0 1 0 9 9' },
  { title: 'Indian data residency', body: 'Production hosting in Indian data centres with INR billing and GST invoices.', icon: 'M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 0c3 3 3 17 0 20m0-20c-3 3-3 17 0 20M2 12h20' },
  { title: 'Backup and recovery', body: 'Protected backups, monitored jobs and restore testing against your recovery policy.', icon: 'M20 12a8 8 0 1 1-2.34-5.66M20 4v6h-6' },
  { title: 'Migration included', body: 'Assessment, rehearsal, controlled cutover and post-migration validation.', icon: 'M5 12h14m-6-6 6 6-6 6' },
  { title: 'Security by design', body: 'Private networking, TLS, encryption at rest and controlled administrator access.', icon: 'M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6z' },
  { title: 'One accountable team', body: 'Infrastructure, database operations, security and support under one SLA.', icon: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8' },
] as const;

const profiles: Record<ManagedDatabaseSlug, DatabaseProfile> = {
  'managed-mysql': {
    name: 'Managed MySQL', shortName: 'MySQL', why: DEFAULT_WHY,
    reviews: [
      { initials: 'NK', name: 'Neha Kulkarni', role: 'CTO, Commerce Platform', quote: 'The team moved our busiest MySQL workload with a controlled cutover. Replication, backups and peak-season capacity are now handled without distracting our developers.' },
      { initials: 'RM', name: 'Rohit Mehta', role: 'Engineering Lead, SaaS Company', quote: 'We have clear visibility into query health and replica lag, and XcellHost responds before a database issue becomes a customer issue.' },
      { initials: 'AS', name: 'Anita Shah', role: 'IT Head, Retail Group', quote: 'Predictable INR billing and one team for infrastructure and MySQL operations made the service much easier to govern.' },
    ],
    faqs: [
      ['What is included with Managed MySQL?', 'Provisioning, monitoring, patch planning, automated backups, point-in-time recovery, replication management and 24×7 support are included.'],
      ['Can you migrate an existing MySQL database?', 'Yes. We assess compatibility, rehearse the migration, establish replication where appropriate and perform a controlled low-downtime cutover.'],
      ['Do you support high availability and read replicas?', 'Yes. Production designs can include an HA pair with automatic failover and additional read replicas for reporting or read-heavy traffic.'],
      ['Which MySQL versions are supported?', 'Current supported releases, including MySQL 8.4 LTS, are available. Version choice and upgrade sequencing are confirmed during design.'],
      ['Can the database be accessed privately?', 'Yes. Private connectivity is the default, with VPN or private network access and no public endpoint unless explicitly approved.'],
      ['How quickly can data be restored?', 'You can restore a scheduled backup or recover to a point in time within the configured retention window. Recovery objectives are agreed during onboarding.'],
    ],
  },
  'managed-mariadb': {
    name: 'Managed MariaDB', shortName: 'MariaDB', why: DEFAULT_WHY,
    reviews: [
      { initials: 'VP', name: 'Vikram Patel', role: 'Platform Manager, Digital Services', quote: 'Our MariaDB cluster is now patched, backed up and monitored consistently. Failover testing gives the team confidence before every major release.' },
      { initials: 'SJ', name: 'Sneha Joshi', role: 'Head of Engineering, Marketplace', quote: 'XcellHost helped us tune Galera and remove operational bottlenecks we had been carrying for months.' },
      { initials: 'KA', name: 'Karan Arora', role: 'IT Director, Services Group', quote: 'The managed model gave us one clear owner for the database, private network and recovery plan.' },
    ],
    faqs: [
      ['What is included with Managed MariaDB?', 'The service covers provisioning, monitoring, updates, backup and recovery, replication or Galera operations, capacity management and 24×7 support.'],
      ['Do you support MariaDB Galera Cluster?', 'Yes. We design and operate multi-node Galera clusters, monitor node state and flow control, and rehearse failure and recovery procedures.'],
      ['Can you migrate from MySQL to MariaDB?', 'Yes. We validate application, SQL mode, character set, connector and feature compatibility before rehearsing and executing the migration.'],
      ['Can MariaDB run on a private network?', 'Yes. The standard deployment uses private addressing, restricted administrative paths, TLS and explicit application access rules.'],
      ['Are backups and point-in-time recovery included?', 'Automated backups are included. Point-in-time recovery is available for supported configurations and retention is set to your needs.'],
      ['Can capacity grow without rebuilding the service?', 'Yes. Compute, memory and storage can be expanded, and cluster topology can be adjusted as workload demand changes.'],
    ],
  },
  'managed-postgresql': {
    name: 'Managed PostgreSQL', shortName: 'PostgreSQL', why: DEFAULT_WHY,
    reviews: [
      { initials: 'AG', name: 'Aarav Gupta', role: 'VP Engineering, Fintech', quote: 'PostgreSQL failover and PITR are no longer runbooks we hope will work. The XcellHost team tests them and reports the result.' },
      { initials: 'PM', name: 'Priya Menon', role: 'Data Lead, Healthcare Technology', quote: 'We gained reliable PostGIS and pgvector operations without adding another specialist to the internal team.' },
      { initials: 'DV', name: 'Deepak Verma', role: 'CIO, Business Services', quote: 'The migration was well rehearsed, downtime stayed inside the agreed window and performance improved after tuning.' },
    ],
    faqs: [
      ['What is included with Managed PostgreSQL?', 'Provisioning, monitoring, patching, backups, WAL archiving, point-in-time recovery, replication, failover support and performance reviews are included.'],
      ['Which PostgreSQL extensions are available?', 'Common extensions such as PostGIS, pgvector and pg_stat_statements are supported. Dedicated deployments can accommodate a broader set after review.'],
      ['Can you migrate our existing PostgreSQL database?', 'Yes. We use a rehearsed approach based on database size, version and downtime tolerance, including logical replication where suitable.'],
      ['Do you provide automatic failover?', 'Yes. High-availability plans include a standby and managed failover with a stable application endpoint.'],
      ['How does point-in-time recovery work?', 'Base backups and continuously archived WAL allow recovery to a selected point within the configured retention window.'],
      ['Is pgvector suitable for production AI applications?', 'Yes for many workloads. We size memory, storage, indexes and connection pooling around your vector count, dimensions and query pattern.'],
    ],
  },
  'managed-oracle': {
    name: 'Managed Oracle Database', shortName: 'Oracle',
    why: [
      { title: 'Licence-aware architecture', body: 'Placement and core allocation designed around your Oracle agreement.', icon: 'M7 3h10v18H7zM10 7h4m-4 4h4m-4 4h4' },
      ...DEFAULT_WHY.slice(0, 5),
    ],
    reviews: [
      { initials: 'RS', name: 'Rajiv Sharma', role: 'CIO, Manufacturing Enterprise', quote: 'XcellHost brought structure to our Oracle estate—licence-aware placement, tested RMAN restores and a clear Data Guard operating process.' },
      { initials: 'MN', name: 'Meera Nair', role: 'Applications Head, Financial Services', quote: 'The team understands both the database and the infrastructure underneath it. That has shortened incident resolution considerably.' },
      { initials: 'SK', name: 'Sanjay Kumar', role: 'ERP Director, Distribution Group', quote: 'Our upgrade and migration were rehearsed end to end. The production cutover was controlled and every fallback step was documented.' },
    ],
    faqs: [
      ['What is included with Managed Oracle Database?', 'The service can cover hosting, monitoring, patching, RMAN backups, recovery testing, Data Guard operations, performance reviews and optional DBA support.'],
      ['Can we bring our existing Oracle licences?', 'Yes. BYOL is common. We map deployment topology and core allocation to your agreement and document the resulting licence position.'],
      ['Do you support Oracle Data Guard?', 'Yes. We can operate a physical standby, monitor transport and apply lag, and rehearse switchover on an agreed schedule.'],
      ['How are Oracle backups handled?', 'RMAN backups are written to protected storage, monitored for completion and validated through scheduled restore tests.'],
      ['Can you take over an existing Oracle environment?', 'Yes. We begin with discovery, health and licence mapping, then agree remediation priorities and transition day-to-day operations.'],
      ['Will scaling change our licence position?', 'No licence-impacting core or placement change is made without review and approval. The revised position is documented first.'],
    ],
  },
};

@Component({
  selector: 'xh-managed-database-sections',
  standalone: true,
  imports: [RouterLink, InsightsSectionComponent, ProductFaqComponent],
  templateUrl: './managed-database-sections.component.html',
  styleUrl: './managed-database-sections.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedDatabaseSectionsComponent {
  readonly slug = input.required<ManagedDatabaseSlug>();
  readonly profile = computed(() => profiles[this.slug()]);
  readonly stars = [0, 1, 2, 3, 4] as const;
}
