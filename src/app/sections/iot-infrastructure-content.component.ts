import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-iot-infrastructure-content',
  standalone: true,
  templateUrl: './iot-infrastructure-content.component.html',
  styleUrl: './iot-infrastructure-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IotInfrastructureContentComponent {}
