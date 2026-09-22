import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'xh-company-profile-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="wrap" style="padding: 64px 24px; text-align: center">
      <h1>Company Profile</h1>
      <p>Opening the XcellHost Company Profile flipbook…</p>
      <a class="btn btn-primary" [href]="flipbookUrl">Open Company Profile →</a>
    </section>
  `,
})
export class CompanyProfilePage implements OnInit {
  private readonly document = inject(DOCUMENT);
  readonly flipbookUrl = 'https://flipbooks.officeinfra.com/books/Company-Profile/#p=1';

  ngOnInit(): void {
    this.document.defaultView?.location.replace(this.flipbookUrl);
  }
}
