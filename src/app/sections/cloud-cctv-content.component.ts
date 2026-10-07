import { ChangeDetectionStrategy, Component, output } from '@angular/core';
import { RevealDirective } from '../shared/reveal.directive';
import { VsaasCapabilitiesComponent } from './vsaas-capabilities.component';
import { VsaasOverviewComponent } from './vsaas-overview.component';

@Component({
  selector: 'xh-cloud-cctv-content',
  standalone: true,
  imports: [VsaasOverviewComponent, VsaasCapabilitiesComponent, RevealDirective],
  templateUrl: './cloud-cctv-content.component.html',
  styleUrl: './cloud-cctv-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CloudCctvContentComponent {
  readonly quoteRequested = output<{ event: Event; configuration: string }>();

}
