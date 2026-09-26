import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'xh-platform-strip',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="platform-strip" aria-labelledby="platform-strip-title">
      <div class="platform-strip-inner">
        <h2 id="platform-strip-title"><span>We are <strong>Cloud</strong></span>Platform agnostic</h2>
        <div class="platform-groups">
          @for (group of groups; track group.label) {
            <ul class="platform-group" [attr.aria-label]="group.label">
              @for (logo of group.logos; track logo.file) {
                <li [title]="logo.name" [class.ocl-logo]="logo.name === 'OCL'"><img [src]="'/assets/images/platforms/' + logo.file" [alt]="logo.name" width="32" height="32" loading="lazy" decoding="async" /></li>
              }
            </ul>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './platform-strip.component.css',
})
export class PlatformStripComponent {
  readonly groups = [
    { label: 'Cloud platforms', logos: [{ name: 'AWS', file: 'aws.svg' }, { name: 'Microsoft Azure', file: 'azure.svg' }, { name: 'Google Cloud', file: 'gcp.png' }, { name: 'OCL', file: 'ocl-logo.jpg' }] },
    { label: 'Infrastructure tools', logos: [{ name: 'Terraform', file: 'terraform.png' }, { name: 'Kubernetes', file: 'kubernetes.png' }, { name: 'Docker', file: 'docker.png' }] },
    { label: 'Development and operations', logos: [{ name: 'GitHub', file: 'github.png' }, { name: 'GitLab', file: 'gitlab.jpg' }, { name: 'Datadog', file: 'datadog.png' }, { name: 'SeqOps', file: 'seqops.png' }] },
    { label: 'AI platforms', logos: [{ name: 'OpenAI', file: 'openai.png' }, { name: 'Anthropic', file: 'anthropic.svg' }, { name: 'Gemini', file: 'gemini.png' }] },
  ];
}
