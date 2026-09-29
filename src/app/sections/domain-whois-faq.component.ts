import { Component } from '@angular/core';

@Component({
  selector: 'xh-domain-whois-faq',
  standalone: true,
  templateUrl: './domain-whois-faq.component.html',
  styles: [`
    :host{display:block}
    .faqs{display:grid;grid-template-columns:1fr 1fr;gap:12px;align-items:start}
    details{border:1px solid var(--line,#DCE5F2);border-radius:12px;background:var(--card,#fff)}
    details[open]{border-color:var(--blue,#1565D8);box-shadow:0 6px 18px rgba(21,101,216,.08)}
    summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:12px;padding:16px 18px;font:600 14.5px var(--pop,'Poppins',sans-serif);color:var(--h2,#080D2C);text-transform:capitalize}
    summary::-webkit-details-marker{display:none}
    summary:after{content:'+';display:grid;place-items:center;flex:none;width:22px;height:22px;border-radius:50%;background:#E8F0FD;color:#1565D8}
    details[open] summary:after{content:'×';background:#1565D8;color:#fff}
    .ans{padding:0 18px 16px;font-size:14px;color:var(--slate,#51607A);line-height:1.65}
    @media(max-width:700px){.faqs{grid-template-columns:1fr}}
  `],
})
export class DomainWhoisFaqComponent {}
