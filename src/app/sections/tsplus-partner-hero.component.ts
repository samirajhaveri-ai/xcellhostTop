import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { OverlayService } from '../core/overlay.service';
import { CallbackTopicService } from '../overlays/callback-topic.service';

type HeroScene = {
  tab: string;
  label: string;
  kpis: readonly { value: string; label: string }[];
  floats: readonly { title: string; detail: string }[];
  logs: readonly { action: string; detail: string }[];
};

@Component({
  selector: 'xh-tsplus-partner-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tsplus-partner-hero.component.html',
  styleUrl: './tsplus-partner-hero.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsplusPartnerHeroComponent {
  readonly scenes: readonly HeroScene[] = [
    {
      tab: 'Remote Access',
      label: '01 · Remote Access · web portal',
      kpis: [
        { value: '42', label: 'users online' },
        { value: '6', label: 'apps published' },
        { value: 'HTML5', label: 'no client needed' },
      ],
      floats: [
        { title: 'Tally Prime · opened', detail: 'Pune branch · browser' },
        { title: 'Gateway · load-balanced', detail: '2 app servers' },
        { title: 'Session · printed', detail: 'virtual printer · PDF' },
      ],
      logs: [
        { action: 'Login', detail: 'priya@pune · web portal' },
        { action: 'Open', detail: 'Tally Prime · session 18' },
        { action: 'Print', detail: 'invoice.pdf · virtual printer' },
      ],
    },
    {
      tab: 'Remote Support',
      label: '02 · Remote Support · attended & unattended',
      kpis: [
        { value: '3 min', label: 'avg connect (sample)' },
        { value: '18', label: 'sessions today' },
        { value: 'AES', label: 'encrypted link' },
      ],
      floats: [
        { title: 'Technician · joined', detail: 'Mumbai NOC' },
        { title: 'Consent · given', detail: 'user approved' },
        { title: 'Ticket · closed', detail: 'printer driver fixed' },
      ],
      logs: [
        { action: 'Invite', detail: 'user@pune · one-time code' },
        { action: 'Connect', detail: 'tech-02 · screen shared' },
        { action: 'Close', detail: 'ticket #4021 · resolved' },
      ],
    },
    {
      tab: 'Security',
      label: '03 · Advanced Security · server protection',
      kpis: [
        { value: '1,284', label: 'attempts blocked' },
        { value: '2FA', label: 'all remote users' },
        { value: 'Geo', label: 'India-only access*' },
      ],
      floats: [
        { title: 'Brute force · blocked', detail: 'IP auto-banned' },
        { title: '2FA · enforced', detail: 'all remote users' },
        { title: 'Hours · restricted', detail: '09:00–21:00 IST' },
      ],
      logs: [
        { action: 'Block', detail: 'failed logins · auto-ban' },
        { action: 'Geo', detail: 'non-India login denied' },
        { action: 'Shield', detail: 'ransomware rule · on' },
      ],
    },
    {
      tab: 'Monitoring',
      label: '04 · Server Monitoring · real-time health',
      kpis: [
        { value: '38%', label: 'CPU now' },
        { value: '51%', label: 'RAM now' },
        { value: '42', label: 'users on server' },
      ],
      floats: [
        { title: 'Server · healthy', detail: 'CPU 38% · RAM 51%' },
        { title: 'Website · up', detail: '200 OK · 180 ms' },
        { title: 'Report · emailed', detail: 'weekly · PDF' },
      ],
      logs: [
        { action: 'Check', detail: 'TS-SRV-01 · healthy' },
        { action: 'Alert', detail: 'disk 82% · email sent' },
        { action: 'Report', detail: 'weekly PDF · emailed' },
      ],
    },
  ];

  readonly activeIndex = signal(0);
  readonly activeScene = computed(() => this.scenes[this.activeIndex()]);

  constructor(
    private readonly overlay: OverlayService,
    private readonly topics: CallbackTopicService,
  ) {}

  selectScene(index: number): void {
    this.activeIndex.set(index);
  }

  requestConsultation(): void {
    this.topics.ask('TSplus solutions consultation');
    this.overlay.open('callback');
  }
}
