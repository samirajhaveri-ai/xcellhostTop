import { Component, Input } from '@angular/core';

// Only show the dedicated, playable track verified on the corresponding live page.
const DOMAIN_SONGS: Record<string, readonly [string, string]> = {
  "register-a-domain-name": [
    "Domain Registration",
    "domain-registration-song"
  ],
  "transfer-your-domain": [
    "Domain Transfer",
    "domain-transfer-song"
  ],
  "latest-domain-extensions": [
    "Latest Domain Extensions",
    "latest-domain-extensions-song"
  ]
};

@Component({
 selector: 'xh-domain-hero-media', standalone: true,
 template: `@if (song; as track) {
 <div class="domain-media-song"><b><span aria-hidden="true">▂▅▇</span> Listen to our {{track[0]}} Song</b><audio controls preload="metadata" [src]="'/assets/audio/' + track[1] + '.mp3'" [attr.aria-label]="track[0] + ' Song'"></audio></div>
 <div class="domain-media-brand"><span>Powered by</span><span aria-hidden="true">|</span><span class="domain-media-logo"><img src="/assets/images/domain-powered-by-xcellsecure.png" alt="XcellSecure logo" width="140" height="44"></span><strong>XcellSecure</strong></div>
 }`,
 styles: [":host{display:block}.domain-media-song{display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-top:18px;color:#fff}.domain-media-song b{font-size:16px}.domain-media-song b span{color:#ff8c1a}.domain-media-song audio{display:block;width:280px;max-width:100%;height:44px}.domain-media-brand{display:flex;align-items:center;gap:10px;margin-top:16px;color:#c7d5ec;font-size:13px;line-height:1.4}.domain-media-brand strong{color:#fff;font-size:20px;font-weight:700}.domain-media-logo{display:inline-block;position:relative;flex:none;background:#fff;border-radius:4px;overflow:hidden}.domain-media-logo img{display:block;width:140px;height:44px;object-fit:contain}.domain-media-logo::after{content:\"\";position:absolute;top:0;left:0;width:65px;height:13px;background:#fff;pointer-events:none}@media(max-width:420px){.domain-media-brand{gap:8px}.domain-media-logo img{width:120px;height:38px}.domain-media-brand strong{font-size:18px}}"],
})
export class DomainHeroMediaComponent {
 @Input({required: true}) slug = '';
 get song(): readonly [string, string] | undefined { return DOMAIN_SONGS[this.slug]; }
}
