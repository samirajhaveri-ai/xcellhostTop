import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { InsightsSectionComponent } from '../sections/insights-section.component';
import { ProductFaqComponent } from '../sections/product';

interface SourceComparison {
  provider: string;
  file: string;
}

const SOURCE_COMPARISONS: Record<string, SourceComparison> = {
  vultr: { provider: 'Vultr', file: 'cloudbaba-vs-vultr.html' },
  ovhcloud: { provider: 'OVHcloud', file: 'cloudbaba-vs-ovhcloud.html' },
  digitalocean: { provider: 'DigitalOcean', file: 'cloudbaba-vs-digitalocean.html' },
  aws: { provider: 'Amazon Web Services', file: 'cloudbaba-vs-aws.html' },
  gcp: { provider: 'Google Cloud', file: 'cloudbaba-vs-gcp.html' },
  azure: { provider: 'Microsoft Azure', file: 'cloudbaba-vs-azure.html' },
};

@Component({
  selector: 'xh-compare-provider-detail-page',
  standalone: true,
  imports: [RouterLink, InsightsSectionComponent, ProductFaqComponent],
  templateUrl: './compare-provider-detail.page.html',
  styleUrl: './compare-provider-detail.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompareProviderDetailPage implements AfterViewInit, OnDestroy {
  @ViewChild('comparisonFrame') private frame?: ElementRef<HTMLIFrameElement>;

  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly comparison =
    SOURCE_COMPARISONS[this.route.snapshot.data['comparison'] as string] ?? SOURCE_COMPARISONS['aws'];
  private resizeObserver?: ResizeObserver;
  private resizeTimers: ReturnType<typeof setTimeout>[] = [];

  readonly provider = this.comparison.provider;
  readonly comparisonTitle = `CloudBaba vs ${this.provider}`;
  readonly securityRows: [string, string][] = [
    ['Immutability', 'Write-once storage, retention-locked'],
    ['Isolation', 'Outside your production network'],
    ['Encryption', 'AES-256, customer-held keys'],
    ['Anomaly detection', 'Ransomware patterns flagged on backup streams'],
    ['Restore testing', 'Scheduled drills with timed, documented results'],
    ['Recovery scope', 'File, folder, VM, or full bare metal'],
  ];
  readonly whyCloudBackup = [
    ['Reliable Data Protection', 'Protect servers, endpoints, applications, and critical workloads from data loss.'],
    ['Automated Backups', 'Schedule regular backups automatically and reduce manual backup efforts.'],
    ['Ransomware Protection', 'Safeguard critical data from ransomware, accidental deletion, and hardware failure.'],
    ['Flexible Retention', 'Maintain recoverable backup copies with configurable retention policies.'],
    ['Fast Data Recovery', 'Restore critical data and workloads quickly to minimize downtime.'],
    ['Secure & Scalable Backup', 'Protect growing data volumes with secure and scalable cloud backup.'],
  ] as const;
  readonly reviews = [
    {
      initials: 'VD',
      name: 'Vikram Desai',
      role: 'Director, Desai & Sons Manufacturing',
      quote: 'Earlier, backup was something we had to keep checking manually. With Cloud Backup, the process is much easier to manage. Knowing our important business files are protected gives us real peace of mind.',
    },
    {
      initials: 'KM',
      name: 'Kavita Menon',
      role: 'IT Administrator, Horizon Logistics',
      quote: 'The biggest benefit for us has been simplicity. We can keep track of our backups without adding extra work for the IT team, and getting files back when required is straightforward.',
    },
    {
      initials: 'SK',
      name: 'Sanjay Kapoor',
      role: 'Operations Head, Kapoor & Associates',
      quote: 'We wanted a dependable backup solution without maintaining additional infrastructure. Cloud Backup has fitted well into our workflow, and the support team has been helpful whenever we have needed assistance.',
    },
  ] as const;
  readonly faqs: [string, string][] = [
    ['Can I pay monthly?', 'Yes — flexible monthly and yearly billing. No long lock-in, with a GST invoice on every payment.'],
    ['What is Acronis Backup Cloud?', 'A fully managed, cloud-based backup and recovery service protecting servers, endpoints, virtual machines and Microsoft 365 with AI-based anti-ransomware.'],
    ['How does Acronis Backup Cloud ensure data security?', 'AES-256 encryption at rest, TLS in transit, immutable storage and Active Protection help keep backups protected from ransomware.'],
    ['What types of data and systems can it protect?', 'Physical, virtual and cloud workloads including Windows and Linux servers, PCs, Macs, mobile devices, Hyper-V, VMware, Microsoft 365, SQL and Exchange.'],
    ['How frequently can I back up?', 'Backups can run as often as every few minutes or on a daily schedule, depending on your plan and recovery-point objective.'],
    ['How long does a restore take?', 'It depends on the data size and connection. We measure it for your environment during onboarding and provide a realistic recovery target.'],
    ['Can your staff read my data?', 'No. Encryption keys remain under your control. Our team can monitor whether a backup ran without reading its contents.'],
    ['Does this replace my local backup?', 'It complements it. Local backup supports fast restores, while an off-site copy protects against fire, flood and ransomware.'],
  ];
  readonly sourceUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    `/comparisons/${this.comparison.file}`,
  );

  constructor() {
    inject(SeoService).set(
      `CloudBaba vs ${this.provider} | XcellHost`,
      `A detailed feature-by-feature comparison of CloudBaba and ${this.provider}.`,
      `/${this.route.snapshot.url.join('/')}/`,
    );
  }

  ngAfterViewInit(): void {
    this.scheduleResize();
  }

  onFrameLoad(): void {
    this.revealFrameContent();
    this.resizeFrame();
    this.observeFrameContent();
    this.scheduleResize();
  }

  openCallback(event: Event): void {
    event.preventDefault();
    this.topics.ask(this.comparisonTitle);
    this.overlay.open('callback');
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.resizeTimers.forEach((timer) => clearTimeout(timer));
  }

  private observeFrameContent(): void {
    this.resizeObserver?.disconnect();
    const body = this.frame?.nativeElement.contentDocument?.body;
    if (!body || typeof ResizeObserver === 'undefined') return;

    this.resizeObserver = new ResizeObserver(() => this.resizeFrame());
    this.resizeObserver.observe(body);
  }

  private scheduleResize(): void {
    this.resizeTimers.forEach((timer) => clearTimeout(timer));
    this.resizeTimers = [100, 500, 1500, 3000].map((delay) =>
      setTimeout(() => {
        this.revealFrameContent();
        this.resizeFrame();
      }, delay),
    );
  }

  private revealFrameContent(): void {
    this.frame?.nativeElement.contentDocument
      ?.querySelectorAll('.rv')
      .forEach((element) => element.classList.add('in'));
  }

  private resizeFrame(): void {
    const iframe = this.frame?.nativeElement;
    const document = iframe?.contentDocument;
    if (!iframe || !document) return;

    const height = Math.max(
      document.body?.scrollHeight ?? 0,
      document.body?.offsetHeight ?? 0,
      document.documentElement?.scrollHeight ?? 0,
      document.documentElement?.offsetHeight ?? 0,
    );
    if (height > 0) iframe.style.height = `${height}px`;
  }
}
