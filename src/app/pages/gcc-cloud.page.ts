import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';
import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

@Component({
  selector: 'xh-gcc-cloud-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gcc-cloud.page.html',
  styleUrl: './gcc-cloud.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GccCloudPage {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  readonly features = [
    { icon: 'cloud', title: 'Flexible infrastructure', text: 'Plan compute, storage and networking around your applications and changing team requirements.' },
    { icon: 'shield', title: 'Security at every layer', text: 'Bring access controls, endpoint protection and network security into your cloud design.' },
    { icon: 'groups', title: 'Connected teams', text: 'Support distributed teams with cloud workspaces and access to shared business applications.' },
    { icon: 'backup', title: 'Backup and recovery', text: 'Define backup policies and recovery workflows around the data your business depends on.' },
    { icon: 'monitoring', title: 'Operational visibility', text: 'Plan monitoring and reporting to help your team understand usage, performance and capacity.' },
    { icon: 'support_agent', title: 'Managed support', text: 'Discuss migration, configuration and ongoing support with the XcellHost team.' },
  ];
  readonly uses = [
    { icon: 'code', title: 'Engineering & development', text: 'Bring development environments, testing workloads and shared tools together in the cloud.' },
    { icon: 'analytics', title: 'Data & analytics', text: 'Plan infrastructure for reporting, business intelligence and collaborative data projects.' },
    { icon: 'business_center', title: 'Business operations', text: 'Connect teams to business applications, shared documents and digital workspaces.' },
  ];
  readonly faqs = [
    { question: 'What can I host on GCC Cloud?', answer: 'Discuss your business applications, development environments, data platforms and team workspaces with our team. We can help scope the infrastructure around your workload requirements.' },
    { question: 'Can you help with migration?', answer: 'Our team can discuss your current environment, dependencies and migration requirements, then help you plan the next steps.' },
    { question: 'How do I get a price?', answer: 'Share your user count, applications, compute, storage and support requirements. We will prepare a quote for your proposed environment.' },
  ];

  constructor() {
    inject(SeoService).set('GCC Cloud | XcellHost', 'Explore cloud infrastructure, security, team workspaces and managed support for GCC teams.', '/gcc-cloud');
  }

  enquire(): void {
    this.topics.ask('GCC Cloud');
    this.overlay.open('callback');
  }
}
