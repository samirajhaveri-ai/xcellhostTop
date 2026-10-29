import { SMART_MANUFACTURING_FAQS } from '../data/smart-manufacturing-faqs.data';
import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductPageService } from '../core/product-page.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { DocRequestService } from '../core/doc-request.service';
import { SERVICE_DEFAULT_FAQS } from '../data/service-default-faqs.data';
import { ACCOUNTANT_TRAINING_FAQS } from '../data/accountant-training-faqs.data';
import { GCP_SERVICE_FAQS } from '../data/gcp-services.data';
import { CUSTOMER_TESTIMONIALS, ENDPOINT_CUSTOMER_TESTIMONIALS } from '../data/customer-testimonials.data';
import { InsightsSectionComponent } from './insights-section.component';
import { ProductFaqComponent } from './product/product-faq.component';

@Component({
  selector: 'xh-service-default-sections',
  standalone: true,
  imports: [RouterLink, InsightsSectionComponent, ProductFaqComponent],
  templateUrl: './service-default-sections.component.html',
  styleUrl: './service-default-sections.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServiceDefaultSectionsComponent {
  readonly name = input.required<string>();
  readonly pageSlug = input.required<string>();
  readonly contentSlug = input('');
  readonly training = input(false);
  readonly platform = input(false);
  readonly closingOnly = input(false);
  private readonly products = inject(ProductPageService);
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly docs = inject(DocRequestService);
  readonly reference = this.products.build({ name: 'Performance Cloud', cat: 'Cloud' });
  readonly why = this.reference.why.map(item => ({
    ...item,
    body: item.title === 'One partner' ? 'Cloud, security & support under one roof' : item.body,
  }));
  readonly security = computed(() => this.contentSlug() === 'smart-manufacturing' ? [
    ['IT/OT boundaries', 'Segment plant networks and control data flows between machines, edge systems and enterprise applications.'],
    ['Access control', 'Scope operator, engineer and vendor access with approvals and audit trails.'],
    ['Data protection', 'Agree encryption, backup and retention for telemetry, production and quality data.'],
    ['Change approval', 'Test changes and retain human approval for actions affecting production or machinery.'],
    ['Monitoring & response', 'Define alerting, escalation and incident response across plant and cloud systems.'],
    ['Compliance scope', 'Map relevant IEC 62443 and Indian requirements to the agreed project scope.'],
  ] : this.training() ? [
    ['Training data', 'Use sample or synthetic material in exercises; keep confidential and personal data out of prompts.'],
    ['Access control', 'Use approved accounts and apply your organisation’s permissions and sharing policies.'],
    ['Human review', 'Check AI-generated answers against source material before using or sharing them.'],
    ['Responsible AI', 'Privacy, safe prompting and verification are covered alongside practical skills.'],
    ['Professional boundaries', 'Apply the governance and professional requirements relevant to your role.'],
    ['Course scope', 'Confirm tool access, training arrangements and data-handling responsibilities before enrolment.'],
  ] : this.platform() ? [
    ['Identity & access', 'Plan IAM roles and administrative permissions around your Google Cloud workloads.'],
    ['Private networking', 'Review VPC networks, firewall rules and connectivity for your deployment.'],
    ['Data protection', 'Agree encryption, backup and recovery requirements for each service.'],
    ['Monitoring & logging', 'Confirm alerting, audit logs and incident escalation in your managed service scope.'],
    ['Region selection', 'Review Mumbai and Delhi region availability and data-location requirements for your workloads.'],
    ['Shared responsibilities', 'Confirm the responsibilities of your team, Google Cloud and XcellHost in the service proposal.'],
  ] : [
    ['Network isolation', 'Agree segmentation, private connectivity and traffic policies for your deployment.'],
    ['Access control', 'Restrict administrative access and confirm permissions with your team.'],
    ['Secure connectivity', 'Choose encryption, routing and failover options appropriate to your service.'],
    ['Monitoring', 'Confirm monitoring, alerting and incident escalation in your service proposal.'],
    ['Logging & retention', 'Agree log collection, retention and access requirements for your environment.'],
    ['Service responsibilities', 'Review provider dependencies, support coverage and compliance requirements before deployment.'],
  ]);
  readonly faqs = computed(() => (this.contentSlug() === 'smart-manufacturing' ? SMART_MANUFACTURING_FAQS : this.platform() ? GCP_SERVICE_FAQS : this.contentSlug() === 'ai-training-chartered-accountants' ? ACCOUNTANT_TRAINING_FAQS : SERVICE_DEFAULT_FAQS[this.contentSlug() || this.pageSlug()]) ?? [
    [`How do I get started with ${this.name()}?`, 'Request a consultation to discuss your requirements, available options and a quotation.'],
    ['How do I confirm pricing?', 'Review the options on this page and request a quotation from XcellHost. Confirm scope and applicable taxes before ordering.'],
  ]);
  readonly reviews = computed(() => CUSTOMER_TESTIMONIALS[this.pageSlug()] || ENDPOINT_CUSTOMER_TESTIMONIALS);
  readonly attributedReviews = computed(() => !CUSTOMER_TESTIMONIALS[this.pageSlug()]?.length);
  readonly whatsapp = computed(() => 'https://wa.me/918657032540?text=' + encodeURIComponent('I would like to discuss ' + this.name()));
  readonly email = computed(() => 'mailto:sales@xcellhost.cloud?subject=' + encodeURIComponent(this.name() + ' enquiry'));
  readonly stars = [1, 2, 3, 4, 5];

  request(order = false): void {
    this.topics.ask(this.name() + (order ? ' — quotation' : ''));
    this.overlay.open('callback');
  }
  document(kind: 'infosheet' | 'presentation'): void {
    this.docs.ask(kind, this.name());
    this.overlay.open('doc');
  }
  initials(name: string): string { return name.trim().split(/\s+/).map(word => word[0]).slice(0, 2).join(''); }
}
