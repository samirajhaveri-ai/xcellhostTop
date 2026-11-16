import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'xh-ssh-tools-navigation',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="ssh-tools-nav" aria-label="SSH and keys tools">
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
    :host{display:block;margin:0 0 25px}
    *{box-sizing:border-box}
    .ssh-tools-nav{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
    a{display:flex;gap:12px;align-items:center;min-width:0;min-height:86px;padding:17px 18px;border:1px solid #d6e2f2;border-radius:12px;background:#fff;color:#37577d;text-decoration:none;box-shadow:0 3px 12px #193d6805;transition:border-color .15s,background .15s}
    a:hover{border-color:#82adeb;background:#f8fbff}
    a.active{border-color:#74a4eb;background:linear-gradient(115deg,#edf5ff,#f9fcff);box-shadow:inset 0 3px #2676e5}
    .tool-icon{display:grid;place-items:center;flex:none;width:39px;height:39px;border-radius:10px;background:#edf3fb;color:#5981b2;font-size:23px}
    a.active .tool-icon{background:#246de0;color:#fff}
    .tool-label{display:block;min-width:0;flex:1}
    strong{display:block;color:#173a65;font:650 13px/1.5 var(--body,sans-serif)}
    small{display:block;color:#6e84a0;font:11px/1.7 var(--body,sans-serif);margin-top:3px}
    .tool-indicator{font-size:17px;color:#8ba5c6;flex:none}
    a.active .tool-indicator{color:#2873dc}
    a:focus-visible{outline:3px solid #ffb45a;outline-offset:3px}
    @media(max-width:800px){a{padding:14px 12px;gap:9px}.tool-indicator{display:none}small{font-size:10px}.tool-icon{width:33px;height:33px;font-size:20px}strong{font-size:12px}}
    @media(max-width:540px){.ssh-tools-nav{gap:7px}a{flex-direction:column;align-items:flex-start;gap:8px;padding:12px 10px;min-height:100px;border-radius:10px}strong{font-size:11px;line-height:1.6}small{display:none}.tool-icon{width:29px;height:29px;font-size:19px}:host{margin-bottom:18px}}
    @media(prefers-reduced-motion:reduce){a{transition:none}}
  `],
})
export class SshToolsNavigationComponent {
  readonly current = input.required<string>();
  readonly tools = [
    { slug: 'ssh-key-generator', title: 'SSH Key Generator', description: 'Create and protect a key pair', icon: 'key' },
    { slug: 'ssh-fingerprint', title: 'SSH Key Fingerprint', description: 'Inspect and compare public keys', icon: 'fingerprint' },
    { slug: 'ssh-config', title: 'SSH Config Builder', description: 'Prepare hosts, proxies and tunnels', icon: 'terminal' },
  ];
}
