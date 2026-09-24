import { ChangeDetectionStrategy, Component } from '@angular/core';

interface OutcomeStep {
  readonly number: string;
  readonly title: string;
  readonly body: string;
  readonly icon: string;
}

interface PlatformCapability {
  readonly label: string;
  readonly icon: string;
}

const OUTCOME_STEPS: readonly OutcomeStep[] = [
  {
    number: '1.',
    title: 'Understand',
    body: 'We understand your business goals and requirements.',
    icon: 'chat_bubble_outline',
  },
  {
    number: '2.',
    title: 'Architect',
    body: 'Our team designs the optimal architecture and selects the right components.',
    icon: 'account_tree',
  },
  {
    number: '3.',
    title: 'Deliver',
    body: 'Your outcome is live, with expert teams and industry best practice.',
    icon: 'check_circle_outline',
  },
  {
    number: '4.',
    title: 'Optimize',
    body: 'We continuously monitor, optimize and enhance for ongoing impact.',
    icon: 'monitoring',
  },
];

const PLATFORM_CAPABILITIES: readonly PlatformCapability[] = [
  { label: 'Compute', icon: 'dns' },
  { label: 'Storage', icon: 'database' },
  { label: 'Network', icon: 'account_tree' },
  { label: 'Security', icon: 'shield' },
  { label: 'Database', icon: 'table_chart' },
  { label: 'Backup', icon: 'backup' },
  { label: 'AI/ML', icon: 'auto_awesome' },
  { label: 'Compliance', icon: 'verified_user' },
  { label: 'Monitoring', icon: 'monitoring' },
  { label: 'Managed Cloud', icon: 'settings_suggest' },
  { label: 'Managed Security', icon: 'admin_panel_settings' },
  { label: 'AI Agents', icon: 'smart_toy' },
];

/** The homepage process section showing how XcellHost turns goals into outcomes. */
@Component({
  selector: 'xh-outcomes',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="outcomes" aria-labelledby="outcomes-title">
      <div class="wrap">
        <div class="outcomes-head">
          <span>THE XCELLHOST PLATFORM</span>
          <h2 id="outcomes-title">How XcellHost builds outcomes</h2>
          <p>A proven process that turns your goals into measurable results.</p>
        </div>

        <div class="outcomes-flow">
          <div class="outcome-step outcome-step-left">
            @for (step of leftSteps; track step.number) {
              <article class="outcome-card">
                <span class="outcome-icon material-symbols-outlined" aria-hidden="true">{{ step.icon }}</span>
                <h3>{{ step.number }} {{ step.title }}</h3>
                <p>{{ step.body }}</p>
              </article>
              @if (!$last) { <span class="outcome-arrow" aria-hidden="true">arrow_forward</span> }
            }
          </div>

          <div class="outcome-connector" aria-hidden="true">arrow_forward</div>

          <article class="platform-core">
            <span class="platform-badge">
              <span class="material-symbols-outlined" aria-hidden="true">cloud</span>
              <span class="platform-badge-copy">
                <span>XcellHost Cloud Platform</span>
                <span class="pp-ai-powered"><svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="m14 2 2.7 6.3L23 11l-6.3 2.7L14 20l-2.7-6.3L5 11l6.3-2.7L14 2ZM5 1l1.2 2.8L9 5 6.2 6.2 5 9 3.8 6.2 1 5l2.8-1.2L5 1ZM4 15l1.2 2.8L8 19l-2.8 1.2L4 23l-1.2-2.8L0 19l2.8-1.2L4 15Z"/></svg> AI-POWERED</span>
              </span>
            </span>
            <h3>THE PLATFORM ASSEMBLES</h3>
            <div class="platform-grid">
              @for (capability of capabilities; track capability.label) {
                <div class="platform-capability">
                  <span class="material-symbols-outlined" aria-hidden="true">{{ capability.icon }}</span>
                  <span>{{ capability.label }}</span>
                </div>
              }
            </div>
            <p class="platform-agents-note">Over 200 AI Agents at Work 24/7</p>
          </article>

          <div class="outcome-connector" aria-hidden="true">arrow_forward</div>

          <div class="outcome-step outcome-step-right">
            @for (step of rightSteps; track step.number) {
              <article class="outcome-card">
                <span class="outcome-icon material-symbols-outlined" aria-hidden="true">{{ step.icon }}</span>
                <h3>{{ step.number }} {{ step.title }}</h3>
                <p>{{ step.body }}</p>
              </article>
              @if (!$last) { <span class="outcome-arrow" aria-hidden="true">arrow_forward</span> }
            }
          </div>
        </div>
        <div class="outcomes-action">
          <a class="btn btn-ghost" href="/company/our-platform">Learn More <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  `,
  styles: `
    .outcomes-action { margin-top: 24px; text-align: center; }
    .outcomes-action .btn { display: inline-flex; align-items: center; gap: 10px; background: #fff; }
    .platform-agents-note { margin: 24px 0 0; color: var(--blue); text-align: center; font-size: 14px; font-weight: 700; line-height: 1.5; }
  `,
})
export class OutcomesComponent {
  readonly leftSteps = OUTCOME_STEPS.slice(0, 2);
  readonly rightSteps = OUTCOME_STEPS.slice(2);
  readonly capabilities = PLATFORM_CAPABILITIES;
}
