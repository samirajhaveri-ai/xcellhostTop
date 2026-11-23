import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SeoService } from '../core/seo.service';
import { ImportedInteractiveContentComponent } from '../sections/imported-interactive-content.component';
import { ServiceDefaultSectionsComponent } from '../sections/service-default-sections.component';

@Component({
  selector: 'xh-ip-address-mgmt-ipam-page',
  standalone: true,
  imports: [ImportedInteractiveContentComponent, ServiceDefaultSectionsComponent],
  template: `<xh-imported-interactive-content source="ip-address-mgmt-ipam" />
    <xh-service-default-sections name="IP Address Management (IPAM)" pageSlug="ip-address-mgmt-ipam" [closingOnly]="true" />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IpAddressMgmtIpamPage {
  constructor() {
    inject(SeoService).set('IP Address Management (IPAM) | XcellHost',
      'Plan subnets, check CIDR overlaps and configure IP address management for cloud and on-premises networks with XcellHost.',
      '/ip-address-mgmt-ipam');
  }
}
