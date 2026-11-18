import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-web-tools-navigation',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav aria-label="Web tools" class="web-tools-nav">
      @for (tool of tools; track tool.slug) {
        <a [routerLink]="['/tools', tool.slug]" [class.active]="current() === tool.slug"
           [attr.aria-current]="current() === tool.slug ? 'page' : null">
          <span class="material-symbols-outlined tool-icon" aria-hidden="true">{{ tool.icon }}</span>
          <span class="tool-label"><strong>{{ tool.title }}</strong><small>{{ tool.description }}</small></span>
          <span class="material-symbols-outlined tool-indicator" aria-hidden="true">{{ current() === tool.slug ? 'check_circle' : 'arrow_forward' }}</span>
        </a>
      }
    </nav>
  `,
  styles: [`
    :host{display:block;margin-bottom:24px}*{box-sizing:border-box}
    .web-tools-nav{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
    a{display:flex;align-items:center;gap:12px;min-width:0;min-height:88px;padding:17px;border:1px solid #d5e1f1;border-radius:12px;background:#fff;text-decoration:none;transition:background .15s,border-color .15s}
    a:hover{background:#f8fbff;border-color:#8fb4eb}a.active{border-color:#7da8e7;background:linear-gradient(120deg,#eef5ff,#f9fcff);box-shadow:inset 0 3px #3379e3}
    .tool-icon{display:grid;place-items:center;flex:none;width:38px;height:38px;border-radius:10px;background:#edf3fc;color:#5e84b5;font-size:22px}a.active .tool-icon{background:#2e73df;color:white}
    .tool-label{flex:1;min-width:0}strong{display:block;color:#254971;font:650 13px/1.5 var(--body,sans-serif)}small{display:block;font:11px/1.7 var(--body,sans-serif);color:#7187a3;margin-top:4px}
    .tool-indicator{font-size:17px;flex:none;color:#92aaca}a.active .tool-indicator{color:#3276dc}a:focus-visible{outline:3px solid #ffb45a;outline-offset:3px}
    @media(max-width:850px){a{gap:9px;padding:14px 12px}.tool-indicator{display:none}strong{font-size:12px}small{font-size:10px}.tool-icon{width:32px;height:32px;font-size:20px}}
    @media(max-width:540px){.web-tools-nav{gap:7px}a{flex-direction:column;align-items:flex-start;padding:12px 9px;gap:8px;min-height:105px}strong{font-size:11px}small{display:none}.tool-icon{width:29px;height:29px;font-size:19px}:host{margin-bottom:18px}}
    @media(prefers-reduced-motion:reduce){a{transition:none}}
  `],
})
export class WebToolsNavigationComponent {
  readonly current = input.required<string>();
  readonly tools = [
    {slug:'url-inspector',title:'URL Inspector',description:'Inspect paths, queries and fragments',icon:'link'},
    {slug:'robots-generator',title:'Robots.txt Generator',description:'Test crawler rules and build a file',icon:'smart_toy'},
    {slug:'open-graph-generator',title:'Open Graph Generator',description:'Check previews and create meta tags',icon:'share'},
  ];
}
