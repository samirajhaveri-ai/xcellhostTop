import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

type BillingTerm = 'monthly' | 'quarterly' | 'yearly';

@Component({
  selector: 'xh-whatsapp-smb-content',
  standalone: true,
  templateUrl: './whatsapp-smb-content.component.html',
  styleUrl: './whatsapp-smb-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsAppSmbContentComponent {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);

  readonly billingTerm = signal<BillingTerm>('monthly');
  readonly billingTerms = [
    { key: 'monthly' as const, label: 'Monthly', saving: '' },
    { key: 'quarterly' as const, label: 'Quarterly', saving: '-8%' },
    { key: 'yearly' as const, label: 'Yearly', saving: '-20%' },
  ];

  readonly hubs = [
    { eyebrow: 'Marketing Hub', tone: 'blue', icon: '↗', title: 'Scale marketing', body: 'Automate customer engagement on WhatsApp and Instagram to drive more leads and conversions with broadcasts, ads and campaigns.', items: ['Broadcast campaigns', 'Click-to-WhatsApp ads', 'Instagram automation'] },
    { eyebrow: 'Support Hub', tone: 'navy', icon: '◫', title: 'Delight customers', body: 'Stay on top of every query with a unified team inbox for WhatsApp and Instagram, chatbots and fast, friendly responses.', items: ['Shared team inbox', 'No-code chatbots', 'Faster response times'] },
    { eyebrow: 'Sales CRM', tone: 'orange', icon: '₹', title: 'Win deals', body: 'Capture leads, engage prospects and close deals faster with a WhatsApp-first Sales CRM built for high-growth teams.', items: ['Track sales pipelines', 'Auto-assign leads', 'One WhatsApp number'] },
  ];

  readonly capabilities = [
    { eyebrow: 'AI Agent', icon: '✦', tone: 'purple', title: 'Turn chats into sales', body: 'Deploy AI agents that answer questions, qualify leads and recommend products like a human assistant.' },
    { eyebrow: 'Support', icon: '◫', tone: 'green', title: 'Chatbots in minutes', body: 'Answer up to 80% of queries with an easy drag-and-drop, no-code chatbot builder—cutting response times.' },
    { eyebrow: 'Marketing', icon: '➤', tone: 'orange', title: 'Maximise leads', body: 'Run click-to-WhatsApp ads to capture leads instantly on WhatsApp and Instagram, and optimise your sales.' },
    { eyebrow: 'RCS', icon: '▣', tone: 'blue', title: 'Message delivery with RCS', body: 'Automatically switch failed WhatsApp messages to RCS for seamless, reliable delivery.' },
    { eyebrow: 'Marketing', icon: '◎', tone: 'pink', title: 'Automate Instagram', body: 'Instantly reply to Instagram DMs, comments and “price please” queries 24/7, with auto rewards for followers.' },
    { eyebrow: 'Sales CRM', icon: '☷', tone: 'blue', title: 'Organise leads, track success', body: 'Centralise leads from WhatsApp, workflows, API, Shopify or manual entry into a Sales CRM with auto-assigned owners.' },
    { eyebrow: 'Support', icon: '▤', tone: 'green', title: 'Streamline queries', body: 'Manage WhatsApp and Instagram queries from one omnichannel inbox for zero missed messages and smooth teamwork.' },
    { eyebrow: 'Commerce', icon: '🛒', tone: 'orange', title: 'WhatsApp store & payments', body: 'Sync your catalogue from Shopify or WooCommerce so customers browse and buy on the go with WhatsApp Pay.' },
  ];

  readonly industries = [
    ['↗', 'B2B Sales', 'Lead management, automated follow-ups and real-time reporting to boost growth.'],
    ['✈', 'Travel & Tourism', 'Centralised bookings, automated itineraries and real-time travel updates.'],
    ['♨', 'Restaurants & Food', 'Manage orders and reservations and improve the customer experience.'],
    ['♙', 'Spas & Salons', 'Online booking, customer profiles and promotions that lift satisfaction.'],
    ['♡', 'Health & Wellness', 'Appointment tracking, secure data and better patient engagement.'],
    ['◇', 'Edutech', 'Student enrolment, online assessments and progress notifications.'],
    ['▰', 'Automotive', 'Service booking, maintenance reminders and stronger CRM.'],
    ['⌂', 'Real Estate', 'Property listings, inquiry management and site-visit scheduling.'],
  ];

  readonly integrations = [
    ['Shopify', 'Recover carts, order updates', '#95bf47'],
    ['WooCommerce', 'Automate notifications', '#7f54b3'],
    ['Zoho CRM', 'Sync leads, close faster', '#e42527'],
    ['HubSpot', 'Engage & nurture leads', '#ff7a59'],
    ['Salesforce', 'Conversations to CRM', '#00a1e0'],
    ['Wix', 'Chat with site visitors', '#111827'],
    ['Google Sheets', 'Sync data in real time', '#0f9d58'],
    ['100+ more apps', 'Connect what matters', '#1565d8'],
  ];

  readonly plans = [
    { name: 'Starter', desc: 'Instagram only', meta: 'Owner Roles', hot: false, prices: { monthly: '999', quarterly: '919', yearly: '799' }, features: ['Automated Insta quick-flows', 'Price, quiz & giveaway campaigns', 'Shared team inbox for Instagram', 'Unlimited DMs & comments', '15 custom fields & tags'] },
    { name: 'Growth', desc: 'WhatsApp + Instagram', meta: 'All Roles', hot: true, prices: { monthly: '2,799', quarterly: '2,575', yearly: '2,239' }, features: ['Everything in Starter, plus', 'FAQ automations & chatbot flows', 'Advanced campaigns', 'Catalogues & native payments', 'Public APIs · 25 custom fields'] },
    { name: 'Advanced', desc: 'WhatsApp + Instagram', meta: 'All Roles', hot: false, prices: { monthly: '3,799', quarterly: '3,495', yearly: '3,039' }, features: ['Everything in Growth, plus', 'Branching flows, API calls & conditions', 'Chat auto-assignment', 'Advanced webhooks', '30 custom fields · 45 tags'] },
    { name: 'Enterprise', desc: 'WhatsApp + Instagram', meta: 'All Roles', hot: false, prices: null, features: ['Everything in Advanced, plus', 'RCS channel', 'Higher rate limits & speeds', 'No template markups', 'Personalised support · Dedicated manager'] },
  ];

  readonly addons = [
    { name: 'WhatsApp AI Agents', label: 'AI Agents', desc: 'Three AI agents, one plan—Sales, Lead Qualification and Customer Support, active 24/7.', price: '₹3,000', meta: '100 free messages', features: ['All 3 agents active at once', '24/7 automated conversations', 'Engage, qualify & support', 'No heavy upfront cost'] },
    { name: 'WhatsApp Sales CRM', label: 'Sales CRM', desc: 'All-in-one WhatsApp Sales CRM for high-growth teams—5 sales agents included.', price: '₹2,499', meta: '5 agents included', features: ['Create & track sales pipelines', 'Auto-assign new WhatsApp leads', 'One WhatsApp number for all chats', 'Unlimited free conversations'] },
  ];

  readonly reasons = [
    ['Green Tick verified account', 'Build trust and credibility with an official verified WhatsApp Business account—we handle the verification for you.'],
    ['Secure & reliable', 'Enterprise-grade security and 99.9% uptime you can count on, backed by XcellHost since 1999.'],
    ['Expert support', 'Dedicated support from our WhatsApp automation experts—local, in your timezone, 24×7.'],
    ['Easy to integrate', 'Quick setup with your favourite tools and no coding skills needed—we wire it up for you.'],
    ['Scale your business', 'Powerful automation to engage more customers and grow faster across WhatsApp, Instagram and RCS.'],
    ['Affordable plans', 'Flexible pricing with a GST invoice that suits businesses of every size—start small and grow.'],
  ];

  selectBillingTerm(term: BillingTerm): void {
    this.billingTerm.set(term);
  }

  configure(product: string): void {
    this.topics.ask(`${product} — ${this.billingTerm()} billing`);
    this.overlay.open('callback');
  }
}
