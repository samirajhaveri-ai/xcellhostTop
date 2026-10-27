import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'xh-data-center-infrastructure',
  standalone: true,
  templateUrl: './data-center-infrastructure.component.html',
  styleUrl: './data-center-infrastructure.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataCenterInfrastructureComponent {
  readonly selectedDataCenter = signal(2);
  readonly dataCenters = [
    {
      name: 'Mumbai DC-1',
      image: '/assets/images/performance-cloud/data-center-mumbai.webp',
      alt: 'Mumbai DC-1 data center infrastructure',
      points: [
        'Tier IV designed infrastructure',
        '2N utility power with N+1 generators',
        'Carrier-neutral network and IX peering',
        'Six-layer physical security',
        'ISO certified infrastructure',
      ],
    },
    {
      name: 'Delhi DC-2',
      image: '/assets/images/performance-cloud/data-center-delhi.webp',
      alt: 'Delhi DC-2 data center infrastructure',
      points: [
        'Tier IV designed infrastructure',
        'Redundant power and precision cooling',
        'Low-latency multi-carrier connectivity',
        '24×7 NOC, SOC and smart hands',
        'ISO certified infrastructure',
      ],
    },
    {
      name: 'Pune DC-3',
      image: '/assets/images/performance-cloud/data-center-pune.webp',
      alt: 'Pune DC-3 data center infrastructure',
      points: [
        'DC space: 35,000 sq. ft.',
        'Rack space: 500 racks',
        'Power capacity: 5 MW',
        'Security level: 6 layers',
        'ISO certified infrastructure',
      ],
    },
  ];

  onTabKeydown(event: KeyboardEvent, index: number): void {
    let next: number;
    if (event.key === 'ArrowRight') next = (index + 1) % this.dataCenters.length;
    else if (event.key === 'ArrowLeft') next = (index + this.dataCenters.length - 1) % this.dataCenters.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = this.dataCenters.length - 1;
    else return;
    event.preventDefault();
    this.selectedDataCenter.set(next);
    const button = event.currentTarget as HTMLButtonElement;
    button.parentElement?.querySelectorAll<HTMLButtonElement>('button')[next]?.focus();
  }
}
