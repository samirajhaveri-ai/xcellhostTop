import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverlayService } from '../core/overlay.service';
import { DocKind, DocRequestService } from '../core/doc-request.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';
import { DEDICATED_AI_SERVERS_FAQS } from '../data/dedicated-ai-servers-faqs.data';
import { InsightsSectionComponent } from './insights-section.component';

@Component({
  selector: 'xh-dedicated-ai-servers-tail',
  standalone: true,
  imports: [RouterLink, InsightsSectionComponent],
  templateUrl: './dedicated-ai-servers-tail.component.html',
  styleUrl: './dedicated-ai-servers-tail.component.css',
})
export class DedicatedAiServersTailComponent {
  private readonly overlay = inject(OverlayService);
  private readonly topics = inject(CallbackTopicService);
  private readonly documents = inject(DocRequestService);
  readonly faqs = DEDICATED_AI_SERVERS_FAQS;
  readonly openFaq = signal<number | null>(0);
  readonly aliases = ['gpu-servers', 'nvidia-h200', 'rtx-pro-6000', 'nvidia-l4'];
  readonly security = [
    ['Hardware isolation', 'Single-tenant bare-metal GPU server'],
    ['Data location', 'Mumbai data centre, India'],
    ['Network protection', 'DDoS filtering; private VLAN / VPN on request'],
    ['Administrative access', 'Full root, KVM and IPMI access'],
    ['Management options', 'Unmanaged, managed OS or OS + MLOps support'],
    ['Dataset & checkpoint backups', 'Optional; scope and retention agreed on quote'],
  ];
  readonly support = [
    { title: 'Since 1999, Mumbai', text: 'An Indian cloud company with engineers you can speak to.', icon: 'M12 8v4l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18' },
    { title: 'A server reserved for you', text: 'Dedicated GPUs, CPU, RAM and storage for your workload.', icon: 'M3 4h18v7H3zM3 14h18v6H3zM7 7h.01M7 17h.01' },
    { title: '24×7 NOC + SOC', text: 'Hardware, GPU health, network and security monitoring.', icon: 'M12 3 3 7v5c0 5 9 10 9 10s9-5 9-10V7zM8 12l3 3 5-6' },
    { title: 'Help with your AI stack', text: 'Drivers, CUDA and framework installation on request.', icon: 'M6 6h12v12H6zM9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4' },
    { title: 'A clear upgrade path', text: 'Add GPUs or move to a larger server as your workload grows.', icon: 'M4 19V5M4 19h16M8 15l4-4 3 2 5-8' },
    { title: 'INR billing with GST', text: 'One Indian invoice; the build and support scope are quoted.', icon: 'M6 4h12M6 8h12M15 20 7 12h3a4 4 0 0 0 0-8' },
  ];

  callback(topic = 'Dedicated AI Servers — sizing and quotation'): void {
    this.topics.ask(topic);
    this.overlay.open('callback');
  }

  requestDocument(kind: DocKind): void {
    this.documents.ask(kind, 'Dedicated AI Servers');
    this.overlay.open('doc');
  }

  configure(): void {
    const frame = document.querySelector<HTMLIFrameElement>('xh-dedicated-ai-servers-source iframe[src="/dedicated-ai-servers-content.html"]');
    const section = frame?.contentDocument?.getElementById('configure');
    if (frame && section) window.scrollTo({
      top: window.scrollY + frame.getBoundingClientRect().top + section.getBoundingClientRect().top - 148,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }
}
