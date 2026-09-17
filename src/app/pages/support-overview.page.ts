import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { InsightsSectionComponent } from '../sections/insights-section.component';

interface SupportChannel {
  title: string;
  description: string;
  action: string;
  href: string;
  icon: 'portal' | 'book' | 'ticket' | 'whatsapp' | 'remote' | 'email';
  external: boolean;
  accent: 'blue' | 'cyan' | 'purple' | 'green' | 'orange' | 'navy';
}

@Component({
  selector: 'xh-support-overview-page',
  standalone: true,
  imports: [RouterLink, InsightsSectionComponent],
  templateUrl: './support-overview.page.html',
  styleUrl: './support-overview.page.css',
  host: { style: 'display:contents' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SupportOverviewPage {
  private readonly seo = inject(SeoService);

  readonly channels: readonly SupportChannel[] = [
    {
      title: 'Support Portal',
      description: 'View your requests, add updates and keep every service conversation in one secure place.',
      action: 'Open support portal',
      href: 'https://supportdesk.xcellhost.cloud/portal/en/home',
      icon: 'portal',
      external: true,
      accent: 'blue',
    },
    {
      title: 'Knowledge Base',
      description: 'Find practical guides for cloud, email, backup, security, account access and common service tasks.',
      action: 'Browse help articles',
      href: 'https://supportdesk.xcellhost.cloud/portal/en/kb',
      icon: 'book',
      external: true,
      accent: 'cyan',
    },
    {
      title: 'Submit a Ticket',
      description: 'Create a tracked request for technical issues, service changes or questions that need investigation.',
      action: 'Create a new ticket',
      href: 'https://supportdesk.xcellhost.cloud/portal/en/signin',
      icon: 'ticket',
      external: true,
      accent: 'purple',
    },
    {
      title: 'WhatsApp Support',
      description: 'Message our team for quick guidance, service updates or help choosing the right support route.',
      action: 'Message on WhatsApp',
      href: 'https://wa.me/918657032540?text=Hello%2C%20I%20need%20support%20with%20an%20XcellHost%20service.',
      icon: 'whatsapp',
      external: true,
      accent: 'green',
    },
    {
      title: 'Remote Assist',
      description: 'Join a secure, attended troubleshooting session after an XcellHost engineer provides instructions.',
      action: 'Download remote assist',
      href: 'https://assist.zoho.in/install-customer-plugin?cxp_token=abb9fe4a68f6868fd49a081392f89115d7268dfc361a9370005a494a1fde5742&type=exe',
      icon: 'remote',
      external: true,
      accent: 'orange',
    },
    {
      title: 'Email Support',
      description: 'Send a detailed non-urgent request, including the affected service, timing and business impact.',
      action: 'Email support',
      href: 'mailto:support@xcellhost.cloud',
      icon: 'email',
      external: false,
      accent: 'navy',
    },
  ];

  readonly metrics = [
    { value: '24×7', label: 'Monitoring & support' },
    { value: '1999', label: 'Serving customers since' },
    { value: '10,000+', label: 'Businesses supported' },
    { value: 'NOC + SOC', label: 'Cloud and security teams' },
  ] as const;

  readonly testimonials = [
    {
      initials: 'MV',
      name: 'Manoj Verma',
      role: 'IT Manager, Manufacturing Company',
      quote: 'We can spot issues early, handle routine maintenance remotely and avoid unnecessary visits to individual offices.',
    },
    {
      initials: 'PD',
      name: 'Pooja Deshmukh',
      role: 'Technology Head, Retail Group',
      quote: 'Centralized monitoring and alerts give us a much clearer view of system health before problems affect users.',
    },
    {
      initials: 'AR',
      name: 'Aditya Rao',
      role: 'Operations Manager, Logistics Company',
      quote: 'Remote troubleshooting has saved our team time and helps us resolve everyday issues without waiting for an onsite visit.',
    },
  ] as const;

  readonly faqs = [
    {
      question: 'What is the fastest way to contact support?',
      answer: 'Open a ticket through the Support Portal for a tracked technical request. For a service-impacting emergency, include the affected service, start time, number of users and business impact, then follow the escalation matrix if required.',
    },
    {
      question: 'Is XcellHost support available 24×7?',
      answer: 'Monitoring and support are available around the clock for covered services. Response targets and included support activities depend on your service plan and applicable SLA.',
    },
    {
      question: 'What information should I include in a ticket?',
      answer: 'Include the service or account identifier, when the issue began, who is affected, the exact error message, recent changes and safe reproduction steps. Do not send passwords, private keys or one-time codes.',
    },
    {
      question: 'Can an engineer connect to my computer remotely?',
      answer: 'Yes, where remote assistance is appropriate. Begin only after an active support interaction, verify the engineer and remain present during the attended session.',
    },
    {
      question: 'Where can I check an existing ticket?',
      answer: 'Sign in to the XcellHost Support Portal to view ticket status, read replies, attach additional information and keep the full support history together.',
    },
    {
      question: 'How do I escalate a critical issue?',
      answer: 'Start with a support ticket so there is a shared incident record, clearly mark the business impact and then use the published escalation matrix when the severity or response requires escalation.',
    },
  ] as const;

  constructor() {
    this.seo.set(
      'Support Overview | XcellHost',
      'Get XcellHost support through the customer portal, ticketing, knowledge base, WhatsApp, email and secure remote assistance.',
      '/support-overview/',
    );
  }

  searchKnowledgeBase(event: Event, query: string): void {
    event.preventDefault();
    const value = query.trim();
    const target = value
      ? `https://supportdesk.xcellhost.cloud/portal/en/kb/search?q=${encodeURIComponent(value)}`
      : 'https://supportdesk.xcellhost.cloud/portal/en/kb';
    window.open(target, '_blank', 'noopener,noreferrer');
  }
}
