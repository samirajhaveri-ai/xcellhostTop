import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../core/seo.service';

@Component({
  selector: 'xh-media-kit-page',
  standalone: true,
  imports: [RouterLink],
  host: { style: 'display:contents' },
  templateUrl: './media-kit.page.html',
  styleUrl: './media-kit.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaKitPage {
  private readonly seo = inject(SeoService);
  readonly base = 'https://www.xcellhost.cloud/wp-content/uploads/2024/07/';
  readonly trademarks = [
    ['XcellHost', 'Xcellhost-logo.png'], ['Distribution Partner', 'DISTRIBUTION-PARTNER.png'],
    ['Cloud Advisor', 'CLOUD-ADVISOR-.png'], ['Gold Cloud Partner', 'GOLD-CLOUD-PARTNER.png'],
    ['Platinum Cloud Partner', 'PLATINUM-CLOUD-PARTNER.png'],
  ] as const;
  readonly serviceMarks = [
    ['XcellTally', 'XcellTally.png'], ['XcellBackup', 'XcellBackup.png'], ['XcellDrive', 'xcelldrive.png'],
    ['XcellCloud', 'xcellcloud.png'], ['XcellGPU', 'XCELLGPU.png'], ['XcellColo', 'XcellColo.png'],
    ['XcellDedicated', 'XcellDedicated-2000x400.png'], ['XcellObject', 'XcellObject.png'],
    ['XcellPrivateCloud', 'XcellPrivateCloud.png'], ['XcellSecure', 'XcellSecure.png'],
    ['XcellManaged', 'XcellManaged-2000x436.png'], ['XcellWatty', 'XcellWatty.png'],
    ['XcellBizMail', 'XcellBizMail.png'], ['XcellMigrate', 'XcellMigrate.png'], ['XcellDMARC', 'XcellDMARC.png'],
    ['XcellCamCloud', 'XcellCamCloud-2000x410.png'], ['XcellMon', 'XcellMon.png'],
    ['Xcell AI SIEM', 'XcellaiSIEM.png'], ['Xcell AI MDR', 'XcellaiMDR.png'], ['Xcell AI XDR', 'XcellaiXDR.png'],
    ['XcellConsult', 'XcellConsult-2000x484.png'], ['XcellDataProtect', 'XcellDataProtect-2000x369.png'],
    ['XcellConnect', 'XcellCoonect.png'], ['XcellOffice', 'xcellOffice.png'], ['XcellDesign', 'XcellDesign.png'],
  ] as const;
  constructor() {
    this.seo.set('Media Kit — XcellHost', 'Official XcellHost biographies, leadership information, trademarks, service marks and press contact details.', '/media-kit/');
  }
}
