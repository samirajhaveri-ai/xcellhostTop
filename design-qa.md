**Source visual truth**

- `C:\Users\vaishnavig\Pictures\Screenshots\Screenshot 2026-08-25 124238.png`
- Source dimensions: 1902 × 329 px.

**Implementation evidence**

- Component: `src/app/sections/satisfaction-guarantee.component.ts`
- Map component: `src/app/sections/global-locations-map.component.ts`
- Map asset: `src/assets/images/xcellhost-global-locations-map.png`
- Pre-footer contact component: `src/app/layout/contact-options.component.ts`
- Route: homepage, directly after the Insights section.
- Intended desktop viewport: 1440 px wide.
- Intended mobile viewport: 390 px wide.
- State: default, with hover treatment on each promise card.

**Full-view comparison evidence**

- Blocked: this Codex session does not expose a callable browser or page-capture tool for the local Angular app, so a browser-rendered implementation screenshot could not be captured and placed beside the supplied reference.

**Focused region comparison evidence**

- Blocked for the same reason. The central guarantee mark and proof-card iconography require browser-rendered evidence for a valid visual comparison.

**Findings**

- The exact `homemapimg.png` asset from the referenced XcellHost homepage is stored locally and placed between Insights and the satisfaction strip; the production build packages it under `assets/images/`.
- The global pre-footer contact section follows the supplied four-column reference and provides working email, phone, WhatsApp, and live-chat actions. Its four source icons are bundled locally.
- [Fixed P1] Material Symbol ligature names were visible as oversized text because the remote icon font was unavailable in the browser. The remote request has been removed; the outlined Material Symbols font is now bundled locally through the project build, and the production output contains the generated WOFF2 asset.
- Build-time validation passed with no Angular compiler errors.
- Source structure now matches the requested composition: one 175 px horizontal band, two proof points on each side, inward-cut side panels, and an oversized overlapping central seal.
- Responsive rules preserve the horizontal reference at desktop and switch to a compact two-column proof grid on mobile.
- Fonts and typography use the site's existing Sora, IBM Plex Sans, and IBM Plex Mono families.
- Spacing and layout rhythm follow the reference's 330 px overall height, 87 px upper whitespace, and centered 240 px seal.
- Colors and visual tokens substitute the reference palette with the site's navy, blue, orange, white, and light-blue theme values.
- Image quality and asset fidelity: no supplied raster image is embedded; icons use Google Material Symbols, while the guarantee is semantic HTML/CSS.
- Copy and content now use the reference's short labels: Money Back Guarantee, Customer Commitment Guarantee, Lowest Price Guarantee, and Trusted Site.

**Open Questions**

- Browser-rendered visual fidelity remains unverified in this session.

**Implementation Checklist**

- Refresh the homepage with cache disabled, then capture it at desktop and mobile widths in an available browser.
- Compare the new section against the supplied reference for balance, wrapping, and icon rendering.
- Check the browser console and hover/focus behavior.

**Follow-up Polish**

- Adjust the central mark scale or proof-card density if the live page reveals a mismatch with adjacent section rhythm.

final result: blocked
