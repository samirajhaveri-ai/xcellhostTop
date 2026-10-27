import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import { DocKind, DocRequestService } from '../core/doc-request.service';
import { OverlayService } from '../core/overlay.service';
import { Faq } from '../data/models';
import { buildContextualProductReviews } from '../data/product-reviews.data';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { RevealDirective } from '../shared/reveal.directive';
import { InsightArticle, InsightVideo, InsightsSectionComponent } from './insights-section.component';
import { ProductFaqComponent } from './product/product-faq.component';

@Component({
  selector: 'xh-managed-redis-tail',
  standalone: true,
  imports: [RouterLink, RevealDirective, ProductFaqComponent, InsightsSectionComponent],
  templateUrl: './managed-redis-tail.component.html',
  styleUrl: './managed-redis-tail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManagedRedisTailComponent {
  readonly configuration = input.required<string>();
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly docs = inject(DocRequestService);
  private readonly sanitizer = inject(DomSanitizer);

  readonly securityRows = [
    ['Encryption', 'TLS in transit · encryption at rest'],
    ['Network isolation', 'Private networking · IP allow-lists'],
    ['Access control', 'Redis ACL users · role-based permissions'],
    ['Data residency', 'Hosted in Indian data centres'],
    ['Backup & recovery', 'Hourly backups · persistence options'],
    ['Monitoring', 'Memory, latency, evictions & replica health'],
  ] as const;
  readonly why = [
    { title: '24×7 Redis operations', body: 'Patching, monitoring and capacity checks handled by database engineers.', icon: 'M12 8v4l3 2M21 12a9 9 0 1 1-9-9' },
    { title: 'Sentinel high availability', body: 'Primary and replica monitored by Sentinel for automatic failover.', icon: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01M12 10v4' },
    { title: 'Backups you can restore', body: 'Hourly snapshots, persistence options and recovery planning for your data.', icon: 'M20 12a8 8 0 1 1-2.34-5.66M20 4v6h-6' },
    { title: 'Help with your migration', body: 'Sizing, data sync and a rehearsed cutover from your existing Redis setup.', icon: 'M5 12h14m-6-6 6 6-6 6' },
    { title: 'INR billing, Indian hosting', body: 'Keep data in India with clear per-node pricing and GST invoicing.', icon: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M3 12h18M12 3c4 5 4 13 0 18-4-5-4-13 0-18' },
    { title: 'Grow with Redis Cluster', body: 'Add replicas or plan a sharded cluster as memory and throughput needs grow.', icon: 'M4 4h6v6H4zM14 14h6v6h-6zM4 14h6v6H4zM14 4h6v6h-6zM10 7h4M7 10v4M17 10v4M10 17h4' },
  ];
  // Reuse the site's existing Managed Redis review source and override support.
  readonly reviews = buildContextualProductReviews('Managed Redis', 'Cloud', [
    'Redis provisioning and patching', 'Sentinel failover and replication', 'Redis monitoring and backups',
  ]);
  readonly faqs: Faq[] = [
    ['What is managed Redis?', 'Managed Redis is a hosted in-memory data store where XcellHost handles provisioning, patching, monitoring, backups and failover. Use it for caching, sessions, queues and real-time analytics, with standalone, Sentinel HA or Redis Cluster deployments in Indian data centres.'],
    ['What does managed Redis include?', 'Provisioning, patching, monitoring, hourly backups and 24×7 support are included. Sentinel HA plans add a replica and automatic failover. Your team manages application code, keys and data.'],
    ['Is it production-ready for caching, sessions and queues?', 'Yes. Choose Sentinel HA for production availability, configure persistence for your workload and use monitoring to track memory, latency, hit ratio and evictions.'],
    ['Do you support Redis Cluster?', 'Yes. Redis Cluster distributes data across shards for larger datasets and higher throughput. We help design the node count, replicas and client configuration for your application.'],
    ['How does failover work?', 'Sentinel monitors the primary. When a quorum confirms failure, a replica is promoted. Use a Sentinel-aware client so your application can discover the new primary and reconnect.'],
    ['Is my data persisted?', 'RDB snapshots, AOF persistence or both can be configured. Hourly backups are included; retention and recovery requirements are agreed for your deployment.'],
    ['How is pricing calculated?', 'Compute is priced per node. A Sentinel HA pair runs two data nodes, and additional read replicas add nodes. The calculator uses 730 hours per month plus NVMe storage at ₹6.20 per GB-month. Estimates are in INR excluding GST.'],
    ['Can I migrate from ElastiCache or self-managed Redis?', 'Yes. We check version and client compatibility, size the target, synchronise your data and rehearse a controlled cutover before validating the new deployment.'],
    ['How is access secured?', 'Use TLS, encryption at rest, Redis ACL users, private networking and IP allow-lists. Application access and administrative permissions are configured for your environment.'],
    ['Is this suitable for startups?', 'Yes. Start with a small standalone deployment for development or a Sentinel HA pair for production, then increase memory, compute and replicas as traffic grows.'],
    ['Do you offer a free consultation?', 'Yes. Discuss your cache size, peak traffic, persistence needs, availability and migration plan with a Redis engineer before selecting a deployment.'],
  ];
  readonly videos: readonly InsightVideo[] = [
    {
      title: 'Redis Insight: a developer’s guide',
      src: this.sanitizer.bypassSecurityTrustResourceUrl('https://fast.wistia.net/embed/iframe/iy6qqvu1nn'),
      poster: '/assets/images/managed-redis/video-iy6qqvu1nn.jpg',
    },
    {
      title: 'Redis Insight: tech deep dive',
      src: this.sanitizer.bypassSecurityTrustResourceUrl('https://fast.wistia.net/embed/iframe/b34cf67ayc'),
      poster: '/assets/images/managed-redis/video-b34cf67ayc.jpg',
    },
  ];

  readonly articles: readonly InsightArticle[] = [
    {
      title: 'High availability with Redis Sentinel',
      description: 'Understand quorum, replica promotion and how Sentinel-aware clients discover the current primary.',
      href: 'https://redis.io/docs/latest/operate/oss_and_stack/management/sentinel/',
      image: '/assets/images/managed-redis/sentinel-background.jpg',
      category: 'Redis · High availability', author: 'Redis documentation',
    },
    {
      title: 'Redis persistence: RDB and AOF explained',
      description: 'Compare snapshots and append-only files, and learn how persistence choices affect recovery and performance.',
      href: 'https://redis.io/docs/latest/operate/oss_and_stack/management/persistence/',
      image: '/assets/images/managed-redis/hero-code.jpg',
      category: 'Redis · Data protection', author: 'Redis documentation',
    },
  ];

  openCallback(request = 'consultation'): void {
    this.topics.ask(`Managed Redis — ${request} · ${this.configuration()}`);
    this.overlay.open('callback');
  }

  requestDoc(kind: DocKind): void {
    this.docs.ask(kind, 'Managed Redis');
    this.overlay.open('doc');
  }
}
