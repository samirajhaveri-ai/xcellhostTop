import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { SeoService } from '../core/seo.service';
import { TSPLUS_REMOTE_ACCESS_EXPERIENCES } from '../data/tsplus-demo.data';

@Component({
  selector: 'xh-tsplus-demo-center-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tsplus-demo-center.page.html',
  styleUrl: './tsplus-demo-center.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TsplusDemoCenterPage {
  readonly experiences = TSPLUS_REMOTE_ACCESS_EXPERIENCES;

  constructor() {
    inject(SeoService).set(
      'TSplus Demo Center | XcellHost',
      'Watch TSplus Remote Access connection demos, including RDP desktops, RemoteApp and HTML5 access.',
      '/tsplus-demo-center/',
    );
  }
}
