import {
  PRODUCT_REVIEW_OVERRIDES
} from "./chunk-KQWZNZVP.js";
import {
  __template
} from "./chunk-BAM5JHNH.js";

// src/app/data/cybird-document.data.ts
function escapeCybirdReview(value) {
  const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };
  return value.replace(/[&<>"']/g, (character) => entities[character]);
}
var CYBIRD_REVIEW_CARDS = (PRODUCT_REVIEW_OVERRIDES["SMB Cyber Security Appliance"] ?? []).map((review) => `
  <article class="cybird-review">
    <span class="review-mark" aria-hidden="true">&rdquo;</span>
    <div class="review-avatar" aria-hidden="true">${escapeCybirdReview(review.initials)}</div>
    <h4>${escapeCybirdReview(review.name)}</h4>
    <p class="review-role">${escapeCybirdReview(review.role)}</p>
    <div class="review-stars" role="img" aria-label="${review.stars} out of 5 stars">${"\u2605".repeat(review.stars)}</div>
    <blockquote><p>${escapeCybirdReview(review.quote)}</p></blockquote>
  </article>`).join("");
var _a;
var CYBIRD_DOCUMENT = String.raw(_a || (_a = __template([`<!DOCTYPE html>
<html lang="en-IN" data-theme="light">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Cybird X2 | All-in-One Network Security for SMBs, CAs, CS & Lawyers \u2014 XcellHost</title>
<meta name="description" content="Cybird X2 all-in-one network security appliance from XcellHost, Cybird&#x27;s National Distributor in India: secure business Wi-Fi 6 with per-user WPA2-Enterprise access, advanced firewall, secure web gateway and DNS filtering, app and bandwidth controls, network access control and cloud management. Made in India. Hardware + security bundles from \u20B914,999 + GST.">
<meta property="og:title" content="Cybird X2 | All-in-One Network Security for SMBs, CAs, CS &amp; Lawyers \u2014 XcellHost"><meta property="og:description" content="Cybird X2 all-in-one network security appliance from XcellHost, Cybird&#x27;s National Distributor in India: secure business Wi-Fi 6 with per-user WPA2-Enterprise access, advanced firewall, secure web gateway and DNS filtering, app and bandwidth controls, network access control and cloud management. Made in India. Hardware + security bundles from \u20B914,999 + GST."><meta property="og:type" content="website">
<meta name="theme-color" content="#041E42">
<script>try{var t=localStorage.getItem('xh-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}<\/script>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600;1,9..144,700&family=Sora:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
/* =====================================================================
   XcellHost v2 core \u2014 xcellhost.top design system
   Brand: #0066FF blue \xB7 #0B132B navy \xB7 #FF8A00 orange \xB7 #c0392b "Host" red
   Rule: exact brand colours, solid fills, no gradients.
   ===================================================================== */
:root{
  --blue:#0066FF;--navy:#0B132B;--orange:#FF8A00;--red:#c0392b;--white:#fff;
  --green:#16a34a;--wa:#25D366;
  --bg:#ffffff;--surface:#ffffff;--surface-2:#F4F7FC;--ink:#0B132B;--text:#2A3550;--muted:#5B6782;
  --line:#E2E8F2;--line-2:#D3DCEB;--chip:#EEF4FF;
  --hero:#0B132B;--hero-ink:#ffffff;--hero-muted:#B6C2DA;--hero-line:rgba(255,255,255,.12);
  --f-serif:"Fraunces",Georgia,serif;--f-disp:"Sora",system-ui,sans-serif;--f-body:"IBM Plex Sans",system-ui,sans-serif;--f-mono:"IBM Plex Mono",ui-monospace,monospace;
  --r-s:10px;--r:14px;--r-l:20px;
  --sh-s:0 4px 14px rgba(11,19,43,.06);--sh:0 14px 40px rgba(11,19,43,.10);--sh-l:0 30px 70px -24px rgba(11,19,43,.35);
  --maxw:1200px;--ease:cubic-bezier(.22,.7,.2,1);--ease-o:cubic-bezier(.16,1,.3,1);
}
html[data-theme="dark"]{
  --bg:#070C1C;--surface:#0E1630;--surface-2:#0B132B;--ink:#F2F5FB;--text:#C9D3E6;--muted:#8F9BB6;
  --line:#1E2A49;--line-2:#27355A;--chip:#14204A;
  --hero:#050916;--sh-s:0 4px 14px rgba(0,0,0,.3);--sh:0 14px 40px rgba(0,0,0,.4);--sh-l:0 30px 70px -24px rgba(0,0,0,.7);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:var(--f-body);color:var(--text);background:var(--bg);line-height:1.6;overflow-x:hidden;overflow-x:clip;-webkit-font-smoothing:antialiased;transition:background .35s,color .35s}
body.lock{overflow:hidden}
h1,h2,h3,h4{font-family:var(--f-disp);color:var(--ink);line-height:1.15;letter-spacing:-.02em;font-weight:700}
a{color:inherit;text-decoration:none}img,svg{display:block}button,input,select,textarea{font-family:inherit;font-size:inherit;color:inherit}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}
.mono{font-family:var(--f-mono)}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
:focus-visible{outline:2px solid var(--blue);outline-offset:3px;border-radius:6px}
#xhProgress{position:fixed;top:0;left:0;height:3px;width:0;background:var(--orange);z-index:300}

/* ---------- buttons ---------- */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-weight:600;font-size:14.5px;line-height:1;padding:13px 22px;border-radius:12px;border:1.5px solid transparent;cursor:pointer;white-space:nowrap;transition:transform .2s var(--ease),background .2s,color .2s,border-color .2s,box-shadow .25s}
.btn:hover{transform:translateY(-2px)}
.btn:active{transform:translateY(0)}
.btn svg{width:16px;height:16px}
.btn .ar{transition:transform .25s var(--ease)}.btn:hover .ar{transform:translateX(3px)}
.btn-orange{background:var(--orange);color:#fff;box-shadow:0 10px 24px -12px rgba(255,138,0,.9)}
.btn-orange:hover{box-shadow:0 14px 30px -12px rgba(255,138,0,1)}
.btn-blue{background:var(--blue);color:#fff;box-shadow:0 10px 24px -12px rgba(0,102,255,.9)}
.btn-ghost{background:var(--surface);color:var(--ink);border-color:var(--line-2)}
.btn-ghost:hover{border-color:var(--blue);color:var(--blue)}
.btn-line{background:transparent;color:#fff;border-color:rgba(255,255,255,.35)}
.btn-line:hover{border-color:#fff;background:rgba(255,255,255,.08)}
.btn-wa{background:var(--wa);color:#fff}
.btn-sm{padding:9px 15px;font-size:13px;border-radius:10px}
.btn-block{width:100%}
.btn[disabled]{opacity:.5;pointer-events:none}

/* ---------- utility bar ---------- */
.ubar{background:var(--navy);color:#B6C2DA;font-size:12.5px;position:relative;z-index:60}
html[data-theme="dark"] .ubar{background:#050916}
.ubar .wrap{display:flex;align-items:center;gap:16px;min-height:38px;white-space:nowrap;max-width:1360px}
.ubar .wrap::-webkit-scrollbar{display:none}
.ubar a:hover{color:#fff}
.ubar .ul{display:flex;gap:16px;align-items:center;flex:1;min-width:0;overflow-x:auto;scrollbar-width:none;-webkit-mask-image:linear-gradient(90deg,#000 92%,transparent);mask-image:linear-gradient(90deg,#000 92%,transparent)}
.ubar .ul::-webkit-scrollbar{display:none}
.ubar .ur{display:flex;gap:12px;align-items:center;margin-left:auto;padding-left:14px;border-left:1px solid rgba(255,255,255,.14);flex-shrink:0}
@media(max-width:760px){.ubar .ur .uwa,.ubar .ur .lang{display:none}}
.ubar .ph{font-family:var(--f-mono);color:#fff;font-weight:600}
.ubar .uwa{color:#5FE08D;font-weight:600}
.ubar .wa-ch{color:#5FE08D}
.theme-tg{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:99px;padding:3px 9px 3px 4px;cursor:pointer;color:#dfe6f5;font-size:11.5px}
.theme-tg .k{width:18px;height:18px;border-radius:50%;background:var(--orange);display:grid;place-items:center;transition:transform .35s var(--ease-o)}
.theme-tg .k svg{width:11px;height:11px;color:#fff}
html[data-theme="dark"] .theme-tg .k{transform:rotate(-180deg);background:var(--blue)}
.lang{font-family:var(--f-mono);font-size:11px;border:1px solid rgba(255,255,255,.2);border-radius:6px;padding:2px 6px;color:#dfe6f5}

/* ---------- promo ---------- */
.promo{background:var(--blue);color:#fff;font-size:13px;line-height:1.5;text-align:center;padding:8px 16px;position:relative;z-index:59}
.promo b{font-weight:700}
.promo .tag{display:inline-block;font-family:var(--f-mono);font-size:10.5px;font-weight:600;letter-spacing:.08em;background:#fff;color:var(--blue);border-radius:6px;padding:2px 7px;margin:0 6px}
.promo a{font-weight:700;text-decoration:underline;text-underline-offset:3px}

/* ---------- header ---------- */
.hdr{position:sticky;top:0;z-index:100;background:var(--surface);border-bottom:1px solid var(--line);transition:box-shadow .3s,background .35s}
.hdr.scrolled{box-shadow:0 8px 28px -18px rgba(11,19,43,.35)}
.hdr .wrap{display:flex;align-items:center;gap:14px;height:70px;max-width:1360px}
.logo{display:flex;flex-direction:column;flex-shrink:0;line-height:1}
.logo .lw{font-family:var(--f-disp);font-weight:800;font-size:22px;letter-spacing:-.02em;color:var(--ink);display:flex;align-items:baseline}
.logo .lw .host{position:relative;color:var(--red);padding:0 2px;margin-left:1px}
.logo .lw .host{z-index:0}
.logo .lw .host svg{position:absolute;left:-7px;top:-9px;width:calc(100% + 14px);height:34px;z-index:-1;color:var(--blue);opacity:.13}
.logo .lw sup{font-size:9px;color:var(--muted);margin-left:1px;align-self:flex-start;margin-top:2px}
.logo .lt{font-family:var(--f-mono);font-size:9px;letter-spacing:.16em;color:var(--muted);margin-top:4px;text-transform:uppercase;white-space:nowrap}
.nav{display:flex;align-items:center;gap:0;margin-left:4px}
.nav>.ni{position:static}
.nav>.ni>button{background:none;border:0;cursor:pointer;display:flex;align-items:center;gap:3px;font-size:13.5px;font-weight:500;color:var(--text);padding:9px 8px;border-radius:8px;white-space:nowrap;transition:color .2s,background .2s}
.nav>.ni>button svg{width:10px;height:10px;transition:transform .25s}
.nav>.ni:hover>button,.nav>.ni.open>button{color:var(--blue);background:var(--chip)}
.nav>.ni.open>button svg{transform:rotate(180deg)}
.mega{position:absolute;left:0;right:0;top:100%;background:var(--surface);border-top:1px solid var(--line);border-bottom:1px solid var(--line);box-shadow:var(--sh);opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .22s,transform .25s var(--ease-o),visibility 0s .25s}
.ni.open .mega{opacity:1;visibility:visible;transform:none;transition:opacity .22s,transform .3s var(--ease-o)}
.mega .wrap{display:grid;grid-template-columns:260px 1fr;gap:28px;height:auto;padding:26px 24px;max-width:var(--maxw)}
.mega .mintro b{font-family:var(--f-serif);font-size:22px;color:var(--ink);display:block;margin-bottom:6px}
.mega .mintro p{font-size:13px;color:var(--muted)}
.mega .mlist{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.mega .mlist a{display:flex;gap:11px;align-items:flex-start;padding:10px 12px;border-radius:10px;transition:background .2s}
.mega .mlist a:hover{background:var(--chip)}
.mega .mlist a i{width:30px;height:30px;border-radius:8px;background:var(--chip);color:var(--blue);display:grid;place-items:center;flex-shrink:0}
.mega .mlist a i svg{width:15px;height:15px}
.mega .mlist a b{display:block;font-size:13.5px;color:var(--ink);font-weight:600}
.mega .mlist a span{font-size:11.5px;color:var(--muted)}
.mega .mlist a.cur{background:var(--chip)}.mega .mlist a.cur b{color:var(--blue)}
.hdr-r{display:flex;align-items:center;gap:8px;margin-left:auto}
.ibtn{width:40px;height:40px;border-radius:11px;border:1px solid var(--line);background:var(--surface);display:grid;place-items:center;cursor:pointer;color:var(--ink);position:relative;transition:border-color .2s,color .2s,transform .2s}
.ibtn:hover{border-color:var(--blue);color:var(--blue);transform:translateY(-1px)}
.ibtn svg{width:18px;height:18px}
.ibtn .cnt{position:absolute;top:-6px;right:-6px;min-width:18px;height:18px;padding:0 5px;border-radius:99px;background:var(--orange);color:#fff;font-family:var(--f-mono);font-size:10.5px;font-weight:600;display:grid;place-items:center;transform:scale(0);transition:transform .3s var(--ease-o)}
.ibtn .cnt.on{transform:scale(1)}
.ibtn .cnt.bump{animation:bump .45s var(--ease-o)}
@keyframes bump{40%{transform:scale(1.4)}}
.burger{display:none}
@media(max-width:1780px){.hdr-r .lg{display:none}}
@media(max-width:1580px){.nav>.ni>button{padding:9px 6px;font-size:13px;gap:2px}.nav>.ni>button svg{width:8px;height:8px}}
@media(max-width:1460px){.nav>.ni>button svg{display:none}.nav>.ni>button{padding:9px 5px;font-size:12.5px}.logo .lw{font-size:20px}.hdr .wrap{gap:10px}}
@media(max-width:1320px){.nav,.hdr-r .desk{display:none}.burger{display:grid}}
/* mobile drawer */
.mnav{position:fixed;inset:0;z-index:250;pointer-events:none}
.mnav .sc{position:absolute;inset:0;background:rgba(11,19,43,.5);opacity:0;transition:opacity .3s}
.mnav .pn{position:absolute;top:0;right:0;bottom:0;width:min(360px,88vw);background:var(--surface);transform:translateX(100%);transition:transform .38s var(--ease-o);overflow-y:auto;padding:18px 18px 40px}
.mnav.open{pointer-events:auto}.mnav.open .sc{opacity:1}.mnav.open .pn{transform:none}
.mnav details{border-bottom:1px solid var(--line)}
.mnav summary{list-style:none;cursor:pointer;padding:14px 4px;font-weight:600;color:var(--ink);display:flex;justify-content:space-between}
.mnav summary::-webkit-details-marker{display:none}
.mnav details a{display:block;padding:8px 10px;font-size:14px;color:var(--text);border-radius:8px}
.mnav details a:hover{background:var(--chip)}
.mnav .mh{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}

/* ---------- search overlay ---------- */
.srch{position:fixed;inset:0;z-index:260;display:none;align-items:flex-start;justify-content:center;padding:90px 16px 20px;background:rgba(11,19,43,.55)}
.srch.open{display:flex;animation:fadeIn .2s}
.srch .box{width:min(640px,100%);background:var(--surface);border-radius:var(--r-l);box-shadow:var(--sh-l);overflow:hidden;animation:popIn .3s var(--ease-o)}
.srch .sin{display:flex;align-items:center;gap:10px;padding:16px 18px;border-bottom:1px solid var(--line)}
.srch .sin svg{width:18px;height:18px;color:var(--muted)}
.srch input{flex:1;border:0;outline:0;background:none;font-size:16px;color:var(--ink)}
.srch kbd{font-family:var(--f-mono);font-size:11px;border:1px solid var(--line-2);border-radius:5px;padding:2px 6px;color:var(--muted)}
.srch .res{max-height:min(420px,60vh);overflow-y:auto;padding:8px}
.srch .res a{display:flex;justify-content:space-between;gap:12px;padding:11px 12px;border-radius:10px}
.srch .res a:hover,.srch .res a.hl{background:var(--chip)}
.srch .res b{color:var(--ink);font-size:14px;font-weight:600}
.srch .res span{font-family:var(--f-mono);font-size:11px;color:var(--muted)}
.srch .none{padding:26px;text-align:center;color:var(--muted);font-size:14px}
@keyframes fadeIn{from{opacity:0}}
@keyframes popIn{from{opacity:0;transform:translateY(-10px) scale(.98)}}

/* ---------- hero ---------- */
.hero{position:relative;overflow:hidden;background:var(--hero);color:var(--hero-ink);padding:54px 0 0}
.hero-bg{position:absolute;inset:0;z-index:0;pointer-events:none}
.hero .wrap{position:relative;z-index:2}
.crumb{font-family:var(--f-mono);font-size:12px;color:var(--hero-muted);margin-bottom:26px}
.crumb a:hover{color:#fff}.crumb .c{color:#fff}
.hero-grid{display:grid;grid-template-columns:1.02fr 1fr;gap:48px;align-items:center;padding-bottom:40px}
.eyebrow{display:inline-flex;align-items:center;gap:9px;font-family:var(--f-mono);font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--orange)}
.eyebrow:before{content:"";width:22px;height:2px;background:var(--orange)}
.hero h1{font-family:var(--f-serif);font-weight:700;color:#fff;font-size:clamp(34px,4.4vw,56px);line-height:1.04;letter-spacing:-.025em;margin:16px 0 18px}
.hero h1 .acc{color:var(--orange);font-style:italic}
.hero .lead{font-size:17px;color:var(--hero-muted);max-width:540px;margin-bottom:24px}
.hero .lead b{color:#fff;font-weight:600}
.powered{display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--navy);border-radius:12px;padding:7px 14px 7px 8px;margin-bottom:26px;box-shadow:0 10px 26px -14px rgba(0,0,0,.6)}
.powered .pv-l{width:30px;height:30px;border-radius:8px;display:grid;place-items:center;flex-shrink:0}
.powered .pv-l svg{width:18px;height:18px}
.powered small{display:block;font-family:var(--f-mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#5B6782;line-height:1}
.powered b{font-family:var(--f-disp);font-size:14.5px;font-weight:700;line-height:1.2;color:var(--navy)}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap}
.hero-stats{position:relative;z-index:2;display:flex;flex-wrap:nowrap;border-top:1px solid var(--hero-line);overflow-x:auto;scrollbar-width:none}
.hero-stats::-webkit-scrollbar{display:none}
.hero-stats .hs{flex:1 0 auto;padding:20px 24px 22px;border-right:1px solid var(--hero-line);white-space:nowrap}
.hero-stats .hs:first-child{padding-left:0}.hero-stats .hs:last-child{border-right:0}
.hero-stats b{display:block;font-family:var(--f-disp);font-weight:800;font-size:24px;color:#fff;line-height:1;letter-spacing:-.02em}
.hero-stats b em{font-style:normal;color:var(--orange)}
.hero-stats span{display:block;font-family:var(--f-mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--hero-muted);margin-top:8px}
.stage{position:relative;min-height:420px;display:grid;place-items:center}
@media(max-width:980px){.hero-grid{grid-template-columns:1fr;gap:34px}.stage{min-height:0}}
@media(max-width:560px){.hero{padding-top:36px}.hero-stats .hs{padding:16px 18px}.hero-stats b{font-size:20px}}

/* hero entrance */
.hero [data-in]{opacity:0;transform:translateY(16px);animation:heroIn .9s var(--ease-o) forwards}
.hero [data-in="1"]{animation-delay:.05s}.hero [data-in="2"]{animation-delay:.15s}.hero [data-in="3"]{animation-delay:.25s}.hero [data-in="4"]{animation-delay:.35s}.hero [data-in="5"]{animation-delay:.45s}.hero [data-in="6"]{animation-delay:.6s}
@keyframes heroIn{to{opacity:1;transform:none}}

/* ---------- sections ---------- */
.sec{padding:84px 0;position:relative}
.sec.alt{background:var(--surface-2)}
.sec.tight{padding:56px 0}
.sh{max-width:760px;margin-bottom:40px}
.sh.c{text-align:center;margin-left:auto;margin-right:auto}
.sh .eyebrow{color:var(--orange)}
.sh h2{font-family:var(--f-serif);font-weight:700;font-size:clamp(28px,3.2vw,40px);letter-spacing:-.02em;margin:12px 0 12px;line-height:1.1}
.sh h2 .acc{color:var(--blue);font-style:italic}
.sh p{font-size:16.5px;color:var(--muted)}
.note-ind{font-family:var(--f-mono);font-size:11.5px;color:var(--muted);margin-top:14px}

/* reveal */
.rv{opacity:0;transform:translateY(22px);transition:opacity .8s var(--ease-o),transform .8s var(--ease-o)}
.rv.in{opacity:1;transform:none}
.rv[data-d="1"]{transition-delay:.06s}.rv[data-d="2"]{transition-delay:.12s}.rv[data-d="3"]{transition-delay:.18s}.rv[data-d="4"]{transition-delay:.24s}.rv[data-d="5"]{transition-delay:.3s}.rv[data-d="6"]{transition-delay:.36s}

/* ---------- grids & cards ---------- */
.g2{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
@media(max-width:960px){.g3,.g4{grid-template-columns:1fr 1fr}}
@media(max-width:620px){.g2,.g3,.g4{grid-template-columns:1fr}}
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--r-l);padding:24px;transition:transform .35s var(--ease-o),box-shadow .35s,border-color .3s}
.card:hover{transform:translateY(-5px);box-shadow:var(--sh);border-color:var(--line-2)}
.ico{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;color:#fff;background:var(--blue);margin-bottom:16px;flex-shrink:0}
.ico svg{width:22px;height:22px}
.ico.o{background:var(--orange)}.ico.n{background:var(--navy)}.ico.g{background:var(--green)}.ico.r{background:var(--red)}
html[data-theme="dark"] .ico.n{background:#1E2A49}
.ico.soft{background:var(--chip);color:var(--blue)}
.card h3{font-size:17px;margin-bottom:8px}
.card p{font-size:14px;color:var(--muted);line-height:1.6}
.card .more{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-weight:600;font-size:13.5px;color:var(--blue)}

/* chip rows with per-item icons */
.chips{display:flex;flex-wrap:wrap;gap:10px}
.chip{display:inline-flex;align-items:center;gap:9px;background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:8px 14px 8px 8px;font-size:13.5px;font-weight:600;color:var(--ink);transition:border-color .2s,transform .2s}
.chip:hover{border-color:var(--blue);transform:translateY(-2px)}
.chip i{width:26px;height:26px;border-radius:7px;display:grid;place-items:center;color:#fff;background:var(--blue);flex-shrink:0}
.chip i svg{width:14px;height:14px}

/* icon list (per-item icons, never generic ticks) */
.ilist{list-style:none;display:flex;flex-direction:column;gap:11px}
.ilist li{display:flex;gap:11px;align-items:flex-start;font-size:14px;color:var(--text)}
.ilist li i{width:24px;height:24px;border-radius:7px;background:var(--chip);color:var(--blue);display:grid;place-items:center;flex-shrink:0;margin-top:-1px}
.ilist li i svg{width:13px;height:13px}
.ilist li b{color:var(--ink)}

/* steps */
.steps{display:grid;gap:14px;counter-reset:st}
.steps.h{grid-template-columns:repeat(var(--n,4),1fr)}
@media(max-width:960px){.steps.h{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.steps.h{grid-template-columns:1fr}}
.step{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:var(--r);padding:22px 20px 20px;overflow:hidden}
.step:before{counter-increment:st;content:counter(st,decimal-leading-zero);font-family:var(--f-mono);font-size:12px;font-weight:600;color:var(--orange);display:block;margin-bottom:12px;letter-spacing:.1em}
.step h4{font-size:15.5px;margin-bottom:6px}
.step p{font-size:13.5px;color:var(--muted)}
.step .bar{position:absolute;left:0;bottom:0;height:3px;width:0;background:var(--blue);transition:width 1.2s var(--ease-o)}
.step.in .bar,.rv.in .step .bar{width:100%}

/* table */
.tbl-w{overflow-x:auto;border:1px solid var(--line);border-radius:var(--r);background:var(--surface)}
.tbl{width:100%;border-collapse:collapse;min-width:620px}
.tbl th{font-family:var(--f-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);text-align:left;padding:15px 18px;background:var(--surface-2);border-bottom:1px solid var(--line)}
.tbl td{padding:14px 18px;border-bottom:1px solid var(--line);font-size:14px;color:var(--text);vertical-align:top}
.tbl tr:last-child td{border-bottom:0}
.tbl td:first-child{font-weight:600;color:var(--ink)}
.tbl .hl{background:var(--chip)}
.tbl th.hl{color:var(--blue)}
.yes{color:var(--green);font-weight:700}.no{color:var(--red);font-weight:700}

/* plans */
.plans{display:grid;grid-template-columns:repeat(var(--n,3),1fr);gap:18px;align-items:stretch}
@media(max-width:960px){.plans{grid-template-columns:1fr}}
.plan{position:relative;background:var(--surface);border:1.5px solid var(--line);border-radius:var(--r-l);padding:26px;display:flex;flex-direction:column;transition:transform .35s var(--ease-o),box-shadow .35s,border-color .3s}
.plan:hover{transform:translateY(-6px);box-shadow:var(--sh)}
.plan.pop{border-color:var(--orange)}
.plan .flag{position:absolute;top:-12px;left:24px;background:var(--orange);color:#fff;font-family:var(--f-mono);font-size:10.5px;font-weight:600;letter-spacing:.1em;padding:4px 10px;border-radius:99px}
.plan .pk{font-family:var(--f-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--blue);font-weight:600}
.plan h3{font-size:20px;margin:6px 0 8px}
.plan .pd{font-size:13.5px;color:var(--muted);margin-bottom:18px;min-height:42px}
.plan .pr{display:flex;align-items:baseline;gap:6px;margin-bottom:4px}
.plan .pr b{font-family:var(--f-disp);font-weight:800;font-size:34px;color:var(--ink);letter-spacing:-.03em}
.plan .pr span{font-size:13px;color:var(--muted)}
.plan .pr s{font-size:14px;color:var(--muted)}
.plan .gst{font-family:var(--f-mono);font-size:11px;color:var(--muted);margin-bottom:18px}
.plan .ilist{margin-bottom:22px}
.plan .act{margin-top:auto;display:flex;flex-direction:column;gap:8px}

/* calculator */
.calc{display:grid;grid-template-columns:1.25fr 1fr;border:1px solid var(--line);border-radius:var(--r-l);overflow:hidden;background:var(--surface);box-shadow:var(--sh-s)}
@media(max-width:900px){.calc{grid-template-columns:1fr}}
.calc .cin{padding:28px;display:flex;flex-direction:column;gap:22px}
.calc .cout{background:var(--navy);color:#fff;padding:28px;display:flex;flex-direction:column}
html[data-theme="dark"] .calc .cout{background:#050916}
.fld>label,.fld>.lb{display:flex;justify-content:space-between;align-items:baseline;font-weight:600;font-size:14px;color:var(--ink);margin-bottom:10px}
.fld>label small,.fld>.lb small{font-family:var(--f-mono);font-size:12px;font-weight:600;color:var(--blue)}
.fld .hint{font-size:12px;color:var(--muted);margin-top:7px}
.seg{display:flex;flex-wrap:wrap;gap:6px;background:var(--surface-2);border:1px solid var(--line);border-radius:12px;padding:4px}
.seg button{flex:1 1 auto;border:0;background:none;cursor:pointer;padding:10px 12px;border-radius:9px;font-size:13px;font-weight:600;color:var(--muted);transition:background .2s,color .2s,box-shadow .2s;white-space:nowrap}
.seg button small{display:block;font-family:var(--f-mono);font-size:10px;font-weight:500;margin-top:2px}
.seg button.on{background:var(--surface);color:var(--blue);box-shadow:var(--sh-s)}
.seg button:hover:not(.on){color:var(--ink)}
input[type=range].rng{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:99px;background:var(--line-2);outline:none;cursor:pointer;background-image:linear-gradient(var(--blue),var(--blue));background-size:var(--p,0%) 100%;background-repeat:no-repeat}
input[type=range].rng::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;border:3px solid var(--blue);box-shadow:0 4px 10px rgba(0,102,255,.35);transition:transform .15s}
input[type=range].rng::-webkit-slider-thumb:hover{transform:scale(1.12)}
input[type=range].rng::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#fff;border:3px solid var(--blue)}
.stp{display:inline-flex;align-items:center;border:1px solid var(--line-2);border-radius:11px;overflow:hidden;background:var(--surface)}
.stp button{width:40px;height:40px;border:0;background:none;cursor:pointer;font-size:18px;color:var(--ink)}
.stp button:hover{background:var(--chip);color:var(--blue)}
.stp input{width:64px;height:40px;border:0;border-left:1px solid var(--line);border-right:1px solid var(--line);text-align:center;font-family:var(--f-mono);font-weight:600;background:none;color:var(--ink)}
.tgl{display:flex;align-items:center;gap:11px;cursor:pointer;font-size:14px;font-weight:600;color:var(--ink)}
.tgl input{display:none}
.tgl .sw{width:42px;height:24px;border-radius:99px;background:var(--line-2);position:relative;transition:background .25s;flex-shrink:0}
.tgl .sw:after{content:"";position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff;transition:transform .3s var(--ease-o);box-shadow:0 2px 5px rgba(0,0,0,.2)}
.tgl input:checked+.sw{background:var(--blue)}
.tgl input:checked+.sw:after{transform:translateX(18px)}
.tgl small{display:block;font-weight:400;font-size:12px;color:var(--muted)}
.cout .ck{font-family:var(--f-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#B6C2DA}
.cout .ctot{font-family:var(--f-disp);font-weight:800;font-size:42px;letter-spacing:-.03em;line-height:1;margin:10px 0 4px;font-variant-numeric:tabular-nums}
.cout .csub{font-size:13px;color:#B6C2DA;margin-bottom:20px}
.cout .crows{display:flex;flex-direction:column;gap:9px;padding:16px 0;border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12);margin-bottom:20px}
.cout .crow{display:flex;justify-content:space-between;gap:12px;font-size:13.5px;color:#dfe6f5}
.cout .crow b{font-family:var(--f-mono);font-weight:600;color:#fff;white-space:nowrap}
.cout .crow.save b{color:#5FE08D}
.cout .cact{margin-top:auto;display:flex;flex-direction:column;gap:9px}
.cout .cfine{font-family:var(--f-mono);font-size:10.5px;color:#8F9BB6;margin-top:12px}
.flash{animation:flash .5s var(--ease-o)}
@keyframes flash{0%{opacity:.35;transform:translateY(-4px)}}

/* tabs */
.tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:22px}
.tabs button{border:1px solid var(--line);background:var(--surface);cursor:pointer;padding:10px 16px;border-radius:99px;font-size:13.5px;font-weight:600;color:var(--muted);transition:all .2s}
.tabs button:hover{color:var(--ink);border-color:var(--line-2)}
.tabs button.on{background:var(--blue);border-color:var(--blue);color:#fff}
[data-panel]{display:none}[data-panel].on{display:block;animation:panelIn .45s var(--ease-o)}
@keyframes panelIn{from{opacity:0;transform:translateY(8px)}}

/* faq */
.faq{display:flex;flex-direction:column;gap:10px;width:100%;max-width:none}
.fq{border:1px solid var(--line);border-radius:var(--r);background:var(--surface);transition:border-color .2s}
.fq.open{border-color:var(--line-2)}
.fq button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;background:none;border:0;cursor:pointer;text-align:left;padding:18px 20px;font-weight:600;font-size:15px;color:var(--ink)}
.fq button i{width:26px;height:26px;border-radius:50%;background:var(--chip);color:var(--blue);display:grid;place-items:center;flex-shrink:0;transition:transform .35s var(--ease-o),background .2s}
.fq button i svg{width:12px;height:12px}
.fq.open button i{transform:rotate(45deg);background:var(--blue);color:#fff}
.fq .fa{max-height:0;overflow:hidden;transition:max-height .45s var(--ease-o)}
.fq .fa p{padding:0 20px 20px;font-size:14.5px;color:var(--muted);line-height:1.7}

/* CTA band */
.cta{background:var(--blue);color:#fff;border-radius:24px;padding:44px;display:grid;grid-template-columns:1.4fr 1fr;gap:30px;align-items:center;position:relative;overflow:hidden}
.cta h2{font-family:var(--f-serif);color:#fff;font-size:clamp(26px,3vw,36px);margin-bottom:10px}
.cta p{color:#dbe6ff;font-size:15.5px}
.cta .ca{display:flex;flex-direction:column;gap:10px;align-items:flex-start;position:relative;z-index:2}
.cta .ring{position:absolute;right:-80px;top:-80px;width:280px;height:280px;border:2px solid rgba(255,255,255,.15);border-radius:50%;animation:ringP 6s var(--ease) infinite}
.cta .ring.r2{width:420px;height:420px;right:-150px;top:-150px;animation-delay:1.5s}
@keyframes ringP{50%{transform:scale(1.06);opacity:.6}}
@media(max-width:820px){.cta{grid-template-columns:1fr;padding:32px}}

/* ---------- forms + modal ---------- */
.modal{position:fixed;inset:0;z-index:270;display:none;align-items:center;justify-content:center;padding:20px}
.modal.open{display:flex}
.modal .sc{position:absolute;inset:0;background:rgba(11,19,43,.6);animation:fadeIn .25s}
.modal .mb{position:relative;width:min(520px,100%);max-height:calc(100vh - 40px);overflow-y:auto;background:var(--surface);border-radius:var(--r-l);box-shadow:var(--sh-l);animation:popIn .35s var(--ease-o)}
.modal .mb.wide{width:min(720px,100%)}
.modal .mh{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;padding:22px 24px 6px}
.modal .mh h3{font-family:var(--f-serif);font-size:24px}
.modal .mh p{font-size:13.5px;color:var(--muted);margin-top:4px}
.modal .x{width:36px;height:36px;border-radius:10px;border:1px solid var(--line);background:var(--surface);cursor:pointer;display:grid;place-items:center;flex-shrink:0;color:var(--ink)}
.modal .x svg{width:16px;height:16px}
.modal .mc{padding:16px 24px 24px}
.form{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.form .full{grid-column:1/-1}
@media(max-width:520px){.form{grid-template-columns:1fr}}
.fi label{display:block;font-size:12.5px;font-weight:600;color:var(--ink);margin-bottom:6px}
.fi input,.fi select,.fi textarea{width:100%;border:1.5px solid var(--line-2);background:var(--surface);border-radius:11px;padding:11px 13px;font-size:14px;color:var(--ink);outline:0;transition:border-color .2s,box-shadow .2s}
.fi textarea{min-height:90px;resize:vertical}
.fi input:focus,.fi select:focus,.fi textarea:focus{border-color:var(--blue);box-shadow:0 0 0 4px rgba(0,102,255,.12)}
.fi.err input,.fi.err select,.fi.err textarea{border-color:var(--red)}
.fi .em{display:none;font-size:11.5px;color:var(--red);margin-top:5px}
.fi.err .em{display:block}
.form .fine{font-size:11.5px;color:var(--muted)}
.done{text-align:center;padding:10px 0 6px}
.done .dk{width:64px;height:64px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;margin:0 auto 14px;animation:popIn .5s var(--ease-o)}
.done .dk svg{width:30px;height:30px}
.done h4{font-family:var(--f-serif);font-size:22px;margin-bottom:6px}
.done p{font-size:14px;color:var(--muted)}

/* ---------- cart drawer ---------- */
.cart{position:fixed;inset:0;z-index:265;pointer-events:none}
.cart .sc{position:absolute;inset:0;background:rgba(11,19,43,.5);opacity:0;transition:opacity .3s}
.cart .pn{position:absolute;top:0;right:0;bottom:0;width:min(420px,100vw);background:var(--surface);transform:translateX(100%);transition:transform .4s var(--ease-o);display:flex;flex-direction:column}
.cart.open{pointer-events:auto}.cart.open .sc{opacity:1}.cart.open .pn{transform:none}
.cart .ch{display:flex;justify-content:space-between;align-items:center;padding:20px 22px;border-bottom:1px solid var(--line)}
.cart .ch h3{font-size:18px}.cart .ch span{font-family:var(--f-mono);font-size:11.5px;color:var(--muted)}
.cart .ci{flex:1;overflow-y:auto;padding:16px 22px;display:flex;flex-direction:column;gap:12px}
.cart .it{border:1px solid var(--line);border-radius:var(--r);padding:14px;animation:panelIn .35s var(--ease-o)}
.cart .it .t{display:flex;justify-content:space-between;gap:10px}
.cart .it b{font-size:14px;color:var(--ink)}
.cart .it small{display:block;font-size:12px;color:var(--muted);margin-top:3px}
.cart .it .rm{background:none;border:0;cursor:pointer;color:var(--muted);width:28px;height:28px;border-radius:8px;display:grid;place-items:center}
.cart .it .rm:hover{background:var(--chip);color:var(--red)}
.cart .it .rm svg{width:15px;height:15px}
.cart .it .bt{display:flex;justify-content:space-between;align-items:center;margin-top:12px}
.cart .it .q{display:inline-flex;border:1px solid var(--line-2);border-radius:9px;overflow:hidden}
.cart .it .q button{width:30px;height:30px;border:0;background:none;cursor:pointer;color:var(--ink)}
.cart .it .q span{min-width:32px;display:grid;place-items:center;font-family:var(--f-mono);font-size:13px;border-left:1px solid var(--line);border-right:1px solid var(--line)}
.cart .it .pz{font-family:var(--f-mono);font-weight:600;color:var(--ink)}
.cart .empty{text-align:center;color:var(--muted);padding:50px 10px;font-size:14px}
.cart .empty svg{width:46px;height:46px;margin:0 auto 12px;color:var(--line-2)}
.cart .cf{padding:18px 22px 22px;border-top:1px solid var(--line);display:flex;flex-direction:column;gap:8px}
.cart .cf .r{display:flex;justify-content:space-between;font-size:14px;color:var(--muted)}
.cart .cf .r b{font-family:var(--f-mono);color:var(--ink)}
.cart .cf .tt{font-size:16px;color:var(--ink);font-weight:700;padding-top:8px;border-top:1px dashed var(--line-2)}
.cart .cf .tt b{font-size:18px}
.cart .cf .btn{margin-top:6px}

/* ---------- toast ---------- */
.toast{position:fixed;left:50%;bottom:26px;z-index:400;transform:translate(-50%,30px);opacity:0;pointer-events:none;background:var(--navy);color:#fff;border-radius:12px;padding:12px 18px 12px 12px;display:flex;align-items:center;gap:10px;font-size:14px;box-shadow:var(--sh-l);transition:transform .4s var(--ease-o),opacity .3s}
html[data-theme="dark"] .toast{background:#1E2A49}
.toast.on{transform:translate(-50%,0);opacity:1}
.toast i{width:26px;height:26px;border-radius:50%;background:var(--green);display:grid;place-items:center}
.toast i svg{width:14px;height:14px}

/* ---------- floating ---------- */
.fab-wa{position:fixed;right:22px;bottom:22px;z-index:90;width:56px;height:56px;border-radius:50%;background:var(--wa);color:#fff;display:grid;place-items:center;box-shadow:0 14px 30px -10px rgba(37,211,102,.8);transition:transform .25s var(--ease-o)}
.fab-wa:hover{transform:scale(1.08)}
.fab-wa svg{width:28px;height:28px}
.fab-wa:after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid var(--wa);animation:waP 2.4s var(--ease) infinite}
@keyframes waP{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.6);opacity:0}}
.side-cb{position:fixed;right:0;top:50%;z-index:90;transform:translateY(-50%);writing-mode:vertical-rl;background:var(--orange);color:#fff;border:0;cursor:pointer;font-weight:700;font-size:13px;letter-spacing:.04em;padding:16px 9px;border-radius:12px 0 0 12px;box-shadow:-6px 10px 24px -12px rgba(255,138,0,.9);transition:padding .25s var(--ease-o)}
.side-cb:hover{padding-right:13px}
@media(max-width:620px){.side-cb{display:none}}

/* ---------- footer (royal blue) ---------- */
.ftr{background:var(--blue);color:#dbe6ff;padding:56px 0 26px;margin-top:0}
html[data-theme="dark"] .ftr{background:#0047B3}
.ftr a:hover{color:#fff;text-decoration:underline;text-underline-offset:3px}
.nl{background:#fff;color:var(--navy);border-radius:var(--r-l);padding:26px 28px;display:grid;grid-template-columns:1.2fr 1fr;gap:22px;align-items:center;margin-bottom:40px}
.nl h3{font-family:var(--f-serif);font-size:23px;color:var(--navy)}
.nl p{font-size:13.5px;color:#5B6782;margin-top:4px}
.nl form{display:flex;gap:8px}
.nl input{flex:1;min-width:0;border:1.5px solid #D3DCEB;border-radius:11px;padding:12px 14px;font-size:14px;outline:0;color:var(--navy);background:#fff}
.nl input:focus{border-color:var(--blue)}
@media(max-width:820px){.nl{grid-template-columns:1fr}}
.ft-top{display:grid;grid-template-columns:330px 1fr;gap:36px;margin-bottom:34px}
@media(max-width:960px){.ft-top{grid-template-columns:1fr}}
.ft-brand .lgc{background:#fff;border-radius:var(--r);padding:16px 18px;display:inline-flex;margin-bottom:14px}
.ft-brand .lgc .lw{color:var(--navy)}
.ft-brand .tg{font-weight:600;color:#fff;font-size:14px;margin-bottom:4px}
.ft-brand .tg2{font-family:var(--f-mono);font-size:11px;color:#c7d8ff;margin-bottom:12px}
.ft-brand .sup24{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);border-radius:10px;padding:7px 12px;font-size:12.5px;font-weight:600;color:#fff;margin-bottom:14px}
.ft-brand .sup24 i{width:8px;height:8px;border-radius:50%;background:#5FE08D;animation:waP 2s infinite;position:relative}
.ft-brand p{font-size:12.5px;line-height:1.7;color:#dbe6ff;margin-bottom:16px}
.soc{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}
.soc a{width:34px;height:34px;border-radius:9px;background:rgba(255,255,255,.14);display:grid;place-items:center;color:#fff;transition:background .2s,transform .2s}
.soc a:hover{background:#fff;color:var(--blue);transform:translateY(-2px);text-decoration:none}
.soc svg{width:16px;height:16px}
.cvid{display:flex;gap:12px;align-items:center;background:rgba(11,19,43,.25);border-radius:12px;padding:10px;cursor:pointer;border:0;color:#fff;text-align:left;width:100%}
.cvid .th{width:76px;height:46px;border-radius:8px;background:var(--navy);display:grid;place-items:center;flex-shrink:0}
.cvid .th svg{width:20px;height:20px;color:#FF0000}
.cvid b{font-size:13px;display:block}.cvid span{font-size:11.5px;color:#c7d8ff}
.ft-rows{display:flex;flex-direction:column;gap:14px}
.ft-row{display:grid;grid-template-columns:110px 1fr;gap:14px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.16)}
.ft-row .k{font-family:var(--f-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#fff;font-weight:600;padding-top:2px}
.ft-row .v{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:13px}
.ft-row .v a.hire{color:#fff;background:var(--red);padding:1px 8px;border-radius:6px;font-weight:600}
@media(max-width:560px){.ft-row{grid-template-columns:1fr;gap:6px}}
.ft-strip{display:grid;grid-template-columns:150px 1fr;gap:14px;align-items:center;padding:16px 0;border-top:1px solid rgba(255,255,255,.16)}
.ft-strip .k{font-family:var(--f-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#fff;font-weight:600}
@media(max-width:700px){.ft-strip{grid-template-columns:1fr}}
.tiles{display:flex;flex-wrap:wrap;gap:8px}
.tile{background:#fff;color:var(--navy);border-radius:9px;padding:6px 10px;text-align:center;line-height:1.1;min-width:64px}
.tile small{display:block;font-family:var(--f-mono);font-size:8.5px;letter-spacing:.1em;color:#5B6782}
.tile b{font-family:var(--f-disp);font-size:13px;font-weight:800;color:var(--navy)}
.tile.w{display:flex;align-items:center;gap:7px;font-weight:700;font-size:12.5px;padding:8px 12px}
.tile .st{color:#f5a623;letter-spacing:1px}
.partner{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;background:var(--navy);border-radius:var(--r-l);padding:24px 28px;margin:24px 0}
.partner h3{color:#fff;font-family:var(--f-serif);font-size:22px}
.partner p{font-size:13.5px;color:#B6C2DA;margin-top:3px}
.ft-bot{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:12px;color:#c7d8ff;padding-top:8px}
.ft-bot .ids{display:flex;flex-wrap:wrap;gap:4px 14px;font-family:var(--f-mono);font-size:11px}

@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}.rv{opacity:1;transform:none}.hero [data-in]{opacity:1;transform:none}}

@media(max-width:620px){.promo{font-size:12px}.promo .opt{display:none}}
/* dark mode: keep navy icon tiles visible on dark surfaces */
html[data-theme="dark"] [style*="background:#0B132B"],html[data-theme="dark"] [style*="background: #0B132B"]{background:#27355A!important}
html[data-theme="dark"] .ft-brand .lgc .lw{color:#0B132B}

/* =====================================================================
   LIVE THEME \u2014 matches www.xcellhost.top product pages (xh-product-page)
   Palette/type measured from the live Microsoft Entra ID page.
   ===================================================================== */
:root{
  --blue:#1565D8;--blue-d:#0C3E8F;--navy:#041E42;--navy-2:#0A2A57;--orange:#FF8C1A;--orange-d:#F57C00;--red:#FF3B3B;
  --green:#16a34a;--ok:#2ECC71;
  --bg:#ffffff;--surface:#ffffff;--surface-2:#F2F6FC;--ink:#041E42;--text:#1C2A3A;--muted:#51607A;
  --line:#DCE5F2;--line-2:#C9D8EE;--chip:#E8F0FD;
  --hero:#041E42;--hero-muted:#c9d8f2;
  --f-serif:"Sora",system-ui,sans-serif;--f-disp:"Sora",system-ui,sans-serif;--f-body:"IBM Plex Sans",system-ui,sans-serif;--f-mono:"IBM Plex Mono",ui-monospace,monospace;
  --sh-s:0 6px 18px rgba(4,30,66,.06);--sh:0 18px 50px rgba(4,30,66,.10);--sh-l:0 34px 80px -20px rgba(4,30,66,.34);
  --maxw:1240px;
}
html[data-theme="dark"]{--bg:#06122A;--surface:#0B1A38;--surface-2:#081630;--ink:#EAF1FF;--text:#C9D6EE;--muted:#93A4C4;--line:#1B2D52;--line-2:#243A66;--chip:#10244A}
body{font-size:15px}
h1,h2,h3,h4{color:var(--ink)}
#xhProgress{background:linear-gradient(90deg,#1565D8,#FF8C1A);box-shadow:0 0 12px rgba(21,101,216,.6)}

/* ---------- buttons (live: 8px radius) ---------- */
.btn{border-radius:8px;font-size:14px;padding:11px 20px}
.btn-sm{border-radius:8px}
.btn-orange{background:#FF8C1A;box-shadow:0 10px 26px -10px rgba(255,140,26,.7)}
.btn-orange:hover{background:#e97a08}
.btn-blue{background:linear-gradient(135deg,#1565D8,#0C3E8F);box-shadow:0 14px 28px -12px rgba(21,101,216,.75)}
.btn-line{border-color:rgba(255,255,255,.35);background:rgba(255,255,255,.08)}
.btn-ghost{border-color:var(--line)}

/* ---------- section headings \u2192 live mono labels ---------- */
.sec{padding:30px 0}
.sec.alt{background:transparent}
.sec.tight{padding:26px 0}
main > .sec:first-of-type{padding-top:44px}
.sh{max-width:none;margin-bottom:18px}
.sh .eyebrow{display:block;font:700 13px/1.35 var(--f-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--blue);margin:0 0 10px;padding:0;background:none;border:0}
.sh .eyebrow:before{content:none}
.sh h2{font-family:var(--f-disp)!important;font-weight:800!important;font-size:clamp(24px,2.4vw,30px)!important;line-height:1.22!important;letter-spacing:-.02em!important;color:var(--ink)!important;margin:0 0 10px!important}
.sh h2 .acc{color:var(--blue)!important;font-style:normal!important}
.sh p{font-size:16px;color:var(--text);max-width:none;line-height:1.75}
.sh.c{text-align:left}

/* ---------- cards & icon tiles (live soft tiles) ---------- */
.card{border-radius:18px;box-shadow:var(--sh-s)}
.card:hover{box-shadow:var(--sh);border-color:#c9dcfb}
.ico{width:40px;height:40px;border-radius:11px;background:var(--chip)!important;color:var(--blue)!important}
.ico svg{width:20px;height:20px}
.ico.o{background:#fff3e0!important;color:#F57C00!important}.ico.n{background:#eaeff9!important;color:#0A2A57!important}.ico.g{background:#e4f7ec!important;color:#16a34a!important}.ico.r{background:#fdecec!important;color:#d92d20!important}
html[data-theme="dark"] .ico.o,html[data-theme="dark"] .ico.n,html[data-theme="dark"] .ico.g,html[data-theme="dark"] .ico.r{background:var(--chip)!important}
.chip i{background:var(--blue)}
.plan{border-radius:18px}
.calc{border-radius:18px}
.calc .cout{background:linear-gradient(160deg,#061634,#0c2b63 60%,#12408f)}
.cta{background:linear-gradient(120deg,#041E42,#123776 60%,#1565D8)}
.tbl th{font-size:11px}

/* =========================== CHROME =========================== */
/* utility bar */
.ubar{background:#041E42}
.ubar .ur .stat{width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.08);display:grid;place-items:center;color:#5FE08D}
.ubar .ur .stat svg{width:14px;height:14px}
.ubar .lang-sel{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:99px;padding:3px 10px;color:#fff;font-size:12px;cursor:pointer}
.ubar .lang-sel svg{width:13px;height:13px}
.ubar .ph b{color:#9fb6de;font-weight:500;margin-right:6px}
/* promo */
.promo{background:linear-gradient(90deg,#1565D8,#0E4CAB);font-size:13px}
.promo .tick{display:inline-grid;place-items:center;width:16px;height:16px;border-radius:4px;background:#2ECC71;color:#fff;margin-right:6px;vertical-align:-3px}
.promo .tick svg{width:11px;height:11px}
.promo .tag{background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);font-family:var(--f-mono)}
/* header with image logo */
.hdr{background:rgba(255,255,255,.92);backdrop-filter:saturate(180%) blur(14px);-webkit-backdrop-filter:saturate(180%) blur(14px)}
html[data-theme="dark"] .hdr{background:rgba(6,18,42,.92)}
.hdr .wrap{height:80px;max-width:1360px}
.logo-img{display:block;flex-shrink:0;line-height:0}
.logo-img img{height:64px;width:auto;display:block}
.logo-img .alt{display:none;font-family:var(--f-disp);font-weight:800;font-size:22px;color:var(--ink)}
.logo-img.noimg img{display:none}.logo-img.noimg .alt{display:block}
html[data-theme="dark"] .logo-img img{background:#fff;border-radius:10px;padding:2px 6px}
.nav>.ni>button{font-weight:500;color:var(--text)}
.nav>.ni>button svg{width:9px;height:9px;opacity:.6}

/* left contact stack (live) */
.lfab{position:fixed;left:22px;bottom:22px;z-index:95;display:flex;flex-direction:column;gap:14px}
.lfab a,.lfab button{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;color:#fff;border:0;cursor:pointer;box-shadow:0 12px 26px -10px rgba(4,30,66,.55);transition:transform .25s var(--ease-o)}
.lfab a:hover,.lfab button:hover{transform:scale(1.08)}
.lfab svg{width:26px;height:26px}
.lfab .lf-call{background:linear-gradient(135deg,#1565D8,#0C3E8F)}
.lfab .lf-cal{background:linear-gradient(135deg,#FF8C1A,#F57C00)}
.lfab .lf-wa{background:#25D366}
.fab-wa{display:none!important}
/* right bottom: cart + bot */
.rfab{position:fixed;right:22px;bottom:22px;z-index:95;display:flex;flex-direction:column;gap:14px;align-items:center}
.rfab button{position:relative;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;color:#fff;border:0;cursor:pointer;box-shadow:0 12px 26px -10px rgba(4,30,66,.55);transition:transform .25s var(--ease-o)}
.rfab button:hover{transform:scale(1.08)}
.rfab svg{width:24px;height:24px}
.rfab .rf-cart{background:linear-gradient(135deg,#1565D8,#0C3E8F)}
.rfab .rf-bot{background:#0A2A57}
.rfab .rf-bot .on{position:absolute;top:2px;right:2px;width:13px;height:13px;border-radius:50%;background:#2ECC71;border:2px solid #fff}
.rfab .cnt{position:absolute;top:-4px;right:-4px;min-width:20px;height:20px;padding:0 5px;border-radius:99px;background:#FF8C1A;color:#fff;font:600 11px var(--f-mono);display:grid;place-items:center;transform:scale(0);transition:transform .3s var(--ease-o)}
.rfab .cnt.on{transform:scale(1)}
/* callback side tab (live gradient + phone) */
.side-cb{background:linear-gradient(180deg,#FF8C1A,#F57C00);display:flex;align-items:center;gap:8px;padding:18px 10px}
.side-cb svg{width:15px;height:15px;transform:rotate(90deg)}
/* chatbot panel */
.xbot{position:fixed;right:22px;bottom:150px;z-index:260;width:min(360px,calc(100vw - 32px));background:var(--surface);border:1px solid var(--line);border-radius:18px;box-shadow:var(--sh-l);overflow:hidden;opacity:0;transform:translateY(12px) scale(.98);pointer-events:none;transition:opacity .25s,transform .35s var(--ease-o)}
.xbot.open{opacity:1;transform:none;pointer-events:auto}
.xbot .bh{background:linear-gradient(120deg,#041E42,#1565D8);color:#fff;padding:14px 16px;display:flex;align-items:center;gap:10px}
.xbot .bh b{font-family:var(--f-disp);font-size:14px;display:block}.xbot .bh span{font-size:11.5px;color:#c9d8f2}
.xbot .bh .x{margin-left:auto;background:rgba(255,255,255,.12);border:0;color:#fff;width:30px;height:30px;border-radius:8px;cursor:pointer}
.xbot .bm{padding:14px 16px;display:flex;flex-direction:column;gap:10px;max-height:300px;overflow-y:auto}
.xbot .msg{background:var(--surface-2);border:1px solid var(--line);border-radius:12px 12px 12px 4px;padding:10px 12px;font-size:13.5px;color:var(--text);max-width:88%}
.xbot .msg.me{align-self:flex-end;background:#1565D8;color:#fff;border-color:#1565D8;border-radius:12px 12px 4px 12px}
.xbot .qr{display:flex;flex-wrap:wrap;gap:6px;padding:0 16px 14px}
.xbot .qr button,.xbot .qr a{font-size:12.5px;font-weight:600;border:1px solid var(--line-2);background:var(--surface);color:var(--blue);border-radius:99px;padding:7px 12px;cursor:pointer}
.xbot .qr button:hover,.xbot .qr a:hover{border-color:var(--blue)}
@media(max-width:620px){.lfab{left:12px;bottom:12px;gap:10px}.lfab a,.lfab button,.rfab button{width:48px;height:48px}.rfab{right:12px;bottom:12px}}

/* =========================== LIVE HERO =========================== */
.hero.lh{background:radial-gradient(900px 420px at 80% -20%,#0E3A78 0%,#041E42 60%);padding:50px 0 54px;min-height:510px}
html[data-theme="dark"] .hero.lh{background:radial-gradient(900px 420px at 80% -20%,#0a2a5a 0%,#020b1f 60%)}
.hero.lh .hero-bg .lh-grid{position:absolute;inset:0;opacity:.5;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:48px 48px;-webkit-mask-image:radial-gradient(760px 560px at 75% 30%,#000,transparent 72%);mask-image:radial-gradient(760px 560px at 75% 30%,#000,transparent 72%);animation:lhGrid 32s linear infinite}
@keyframes lhGrid{to{background-position:48px 48px}}
.hero.lh .hero-bg .lh-dots{position:absolute;inset:0;opacity:.55;background-image:radial-gradient(rgba(127,176,255,.55) 1.2px,transparent 1.3px);background-size:14px 14px;-webkit-mask-image:radial-gradient(520px 300px at 30% 45%,#000 20%,transparent 75%);mask-image:radial-gradient(520px 300px at 30% 45%,#000 20%,transparent 75%)}
.hero.lh .hero-bg .lh-aur{position:absolute;border-radius:50%;filter:blur(70px);opacity:.38}
.hero.lh .hero-bg .lh-aur.a1{width:420px;height:420px;background:radial-gradient(circle,#2f6bff,transparent 65%);top:-110px;right:6%;animation:lhA1 12s ease-in-out infinite}
.hero.lh .hero-bg .lh-aur.a2{width:340px;height:340px;background:radial-gradient(circle,#ff8c1a,transparent 65%);bottom:-80px;right:28%;animation:lhA2 14s ease-in-out infinite}
@keyframes lhA1{50%{transform:translate(-30px,24px) scale(1.12)}}
@keyframes lhA2{50%{transform:translate(26px,-20px) scale(1.15)}}
.hero.lh .hero-bg .lh-scan{position:absolute;left:0;right:0;height:120px;background:linear-gradient(180deg,transparent,rgba(90,150,255,.10),transparent);animation:lhScan 7s var(--ease) infinite}
@keyframes lhScan{0%{top:-120px}100%{top:100%}}
.hero.lh .crumb{font-family:var(--f-mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#7fb0ff;margin-bottom:14px}
.hero.lh .crumb a:hover{color:#fff}.hero.lh .crumb .sep{margin:0 6px;color:#5a7db3}.hero.lh .crumb .c{color:#7fb0ff}
.hero.lh .hero-grid{grid-template-columns:1.08fr 1fr;gap:40px;padding-bottom:0;align-items:center}
.lh-title{font-family:var(--f-disp)!important;font-weight:800!important;font-size:clamp(30px,3.4vw,44px)!important;line-height:1.14!important;letter-spacing:-.025em!important;color:#fff!important;margin:0 0 14px!important;display:block}
.lh-title .x{color:#FF3B3B}
.lh-title .brd{color:#fff}
.lh-title .dv{color:#7fb0ff;margin:0 .22em;font-weight:500}
.lh-title .nm{color:#fff;display:block}
.lh-tag{font-family:var(--f-disp);font-weight:700;font-size:16.5px;color:#fff;line-height:1.45;margin-bottom:2px}
.lh-tag2{font-family:var(--f-disp);font-weight:600;font-size:15.5px;color:#dbe7fb;margin-bottom:16px}
.lh-type{font-family:var(--f-disp);font-weight:700;font-size:16px;color:#9cc3ff;min-height:24px;margin-bottom:18px}
.lh-type .cur{display:inline-block;width:2px;height:18px;background:#9cc3ff;margin-left:2px;vertical-align:-3px;animation:lhBlink 1s steps(2) infinite}
@keyframes lhBlink{50%{opacity:0}}
.lh-points{display:grid;grid-template-columns:1fr 1fr;gap:12px 20px;max-width:520px;margin-bottom:24px}
.lh-points div{display:flex;align-items:center;gap:10px;font-size:14px;color:#eaf2ff}
.lh-points .tk{width:20px;height:20px;border-radius:5px;background:#1565D8;display:grid;place-items:center;flex-shrink:0;box-shadow:0 0 0 3px rgba(21,101,216,.25)}
.lh-points .tk svg{width:11px;height:11px;color:#fff}
.lh-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px}
.lh-ctas .btn-gl{background:rgba(255,255,255,.08);color:#fff;border:1.5px solid rgba(255,255,255,.35)}
.lh-ctas .btn-gl:hover{background:rgba(255,255,255,.16);border-color:#fff}
.lh-ask{display:inline-flex;align-items:center;gap:12px;flex-wrap:wrap;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.16);border-radius:12px;padding:8px 10px 8px 14px}
.lh-ask .k{font-family:var(--f-mono);font-size:11px;font-weight:600;letter-spacing:.06em;color:#fff}
.lh-ask .k b{color:#FF8C1A;margin-right:4px}
.lh-ask .chips{display:flex;gap:6px}
.lh-ask a{width:30px;height:30px;border-radius:8px;background:#fff;display:grid;place-items:center;transition:transform .2s var(--ease-o),box-shadow .2s}
.lh-ask a:hover{transform:translateY(-2px);box-shadow:0 8px 18px -8px rgba(0,0,0,.6)}
.lh-ask a svg{width:18px;height:18px}
.hero.lh .stage{min-height:400px}
.lh-powered{position:absolute;left:4%;bottom:-8px;z-index:6;background:#0A1A3A;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:8px 14px 9px;box-shadow:0 14px 30px -12px rgba(0,0,0,.7)}
.lh-powered small{display:block;font-family:var(--f-mono);font-size:8.5px;letter-spacing:.16em;color:#9fb6de;text-transform:uppercase;margin-bottom:4px}
.lh-powered>span{display:flex;align-items:center;gap:8px;font-family:var(--f-disp);font-weight:700;font-size:16px;color:#fff}
.lh-powered .msq{display:grid;grid-template-columns:1fr 1fr;gap:2px;width:18px;height:18px}
.lh-powered .msq i{display:block}
@media(max-width:980px){.hero.lh .hero-grid{grid-template-columns:1fr}.hero.lh .stage{min-height:0;margin-top:18px}.lh-powered{position:relative;left:auto;bottom:auto;display:inline-block;margin-top:14px}}
@media(max-width:560px){.lh-points{grid-template-columns:1fr}.lh-ctas .btn{flex:1 1 auto}.lh-ask{border-radius:12px}}

/* trust strip (live) */
.lh-trust{background:var(--surface-2);border-bottom:1px solid var(--line)}
.lh-trust .wrap{display:flex;justify-content:space-between;gap:12px 22px;flex-wrap:wrap;padding:14px 24px;font-size:12.5px;color:var(--muted)}
.lh-trust b{font-family:var(--f-mono);color:var(--ink);font-weight:600}
@media(max-width:760px){.lh-trust .wrap{justify-content:flex-start;overflow-x:auto;flex-wrap:nowrap;white-space:nowrap}}

/* live body primitives */
.pp-sec{font:700 15px/1.35 var(--f-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--blue);margin:0 0 14px}
.pp-ov{font-size:16px;color:var(--text);line-height:1.75}
.pp-ov b{color:var(--ink)}
.pp-cols{display:grid;grid-template-columns:1fr 1fr;gap:16px 46px}
@media(max-width:820px){.pp-cols{grid-template-columns:1fr}}
.prov-strip{display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-top:22px}
.prov-lbl{font-family:var(--f-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-right:4px}
.prov{display:inline-flex;align-items:center;gap:8px;font-family:var(--f-disp);font-weight:700;font-size:13.5px;color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:9px;padding:7px 15px 7px 8px;box-shadow:0 4px 12px -8px rgba(4,18,42,.4)}
.prov .pl{width:24px;height:24px;border-radius:6px;display:grid;place-items:center;color:#fff;flex-shrink:0}
.prov .pl svg{width:14px;height:14px}
.prov .pl .msq{display:grid;grid-template-columns:1fr 1fr;gap:1.5px;width:14px;height:14px}.prov .pl .msq i{display:block}
/* 3-card explainer (live vcard) */
.vgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
@media(max-width:900px){.vgrid{grid-template-columns:1fr}}
.vcard{background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:var(--sh-s);transition:transform .35s var(--ease-o),box-shadow .35s,border-color .3s}
.vcard:hover{transform:translateY(-6px);box-shadow:var(--sh);border-color:#c9dcfb}
.vcard .vb{display:inline-flex;align-items:center;gap:7px;font-family:var(--f-mono);font-size:12px;font-weight:600;padding:6px 12px;border-radius:99px;margin-bottom:16px;background:var(--chip);color:var(--blue)}
.vcard .vb svg{width:13px;height:13px}
.vcard.b2 .vb{background:#eaeff9;color:#2b4a8f}.vcard.b3 .vb{background:#fff3e0;color:#F57C00}
.vcard h3{font-size:18px;margin-bottom:8px}
.vcard p{font-size:13.5px;color:var(--muted);margin-bottom:18px;line-height:1.6}
.vcard ul{list-style:none;display:flex;flex-direction:column;gap:9px}
.vcard li{display:flex;gap:9px;align-items:flex-start;font-size:13px;color:var(--text)}
.vcard li i{width:18px;height:18px;border-radius:50%;background:#e4f7ec;color:#16a34a;display:grid;place-items:center;flex-shrink:0;margin-top:1px}
.vcard li i svg{width:10px;height:10px}

/* dark Microsoft plan card (live ez-card) */
.ez-wrap{display:grid;grid-template-columns:minmax(0,380px) 1fr;gap:26px;align-items:start}
@media(max-width:900px){.ez-wrap{grid-template-columns:1fr}}
.ez-card{position:relative;background:#0B1730;border:1px solid #1e2e52;border-radius:16px;padding:22px 20px 20px;color:#fff;box-shadow:0 24px 50px -24px rgba(4,30,66,.8);overflow:hidden}
.ez-card .ez-off{position:absolute;top:0;right:0;background:#FF8C1A;color:#fff;font:700 10px var(--f-mono);letter-spacing:.08em;padding:5px 12px;border-radius:0 16px 0 10px}
.ez-card .ez-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.ez-card .ez-ms{display:inline-flex;align-items:center;gap:8px;font-family:var(--f-disp);font-weight:700;font-size:15px}
.ez-card .ez-ms .msq{display:grid;grid-template-columns:1fr 1fr;gap:2px;width:18px;height:18px}.ez-card .ez-ms .msq i{display:block}
.ez-card .ez-ext{color:#7fb0ff}.ez-card .ez-ext svg{width:15px;height:15px}
.ez-card .ez-fam{font:600 10.5px var(--f-mono);letter-spacing:.14em;text-transform:uppercase;color:#7fb0ff}
.ez-card h3{color:#fff;font-size:18px;margin:6px 0 4px}
.ez-card .ez-sku{font:400 10.5px var(--f-mono);color:#7d8fb3;margin-bottom:16px}
.ez-card .ez-row{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#b9c9e2;padding:8px 0}
.ez-card .ez-row s{font-family:var(--f-mono);color:#8ea2c6}
.ez-card .ez-gst{text-align:right;font:400 10px var(--f-mono);color:#7d8fb3;margin:-6px 0 8px}
.ez-card .ez-pr{display:flex;justify-content:space-between;align-items:center;padding:7px 0}
.ez-card .ez-tag{font:700 9.5px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;padding:4px 9px;border-radius:6px}
.ez-card .ez-tag.m{background:#1565D8;color:#fff}.ez-card .ez-tag.y{background:#FF8C1A;color:#fff}
.ez-card .ez-amt{font-family:var(--f-disp);font-weight:800;font-size:24px;color:#fff;letter-spacing:-.02em}
.ez-card .ez-save{display:flex;justify-content:space-between;align-items:center;background:rgba(46,204,113,.08);border:1px solid rgba(46,204,113,.35);border-radius:10px;padding:10px 12px;margin:14px 0 16px;font-size:12px;color:#b9c9e2}
.ez-card .ez-save b{color:#5FE08D;font-family:var(--f-mono);font-size:11.5px}
.ez-card .ez-q{display:flex;align-items:center;background:#fff;border-radius:8px;overflow:hidden;margin-bottom:12px}
.ez-card .ez-q button{width:44px;height:38px;border:0;background:#1565D8;color:#fff;font-size:18px;cursor:pointer}
.ez-card .ez-q button:first-child{background:#51607A}
.ez-card .ez-q input{flex:1;height:38px;border:0;text-align:center;font:600 14px var(--f-mono);color:#041E42;background:#fff;outline:0}
.ez-card .ez-cta{display:flex;justify-content:space-between;align-items:center;font-size:12.5px;margin-bottom:12px}
.ez-card .ez-cta a{display:inline-flex;align-items:center;gap:6px;color:#dbe7fb;font-weight:600}
.ez-card .ez-cta a.q{color:#7fb0ff}
.ez-card .ez-cta svg{width:13px;height:13px}
.ez-card .ez-buy{width:100%;border:0;cursor:pointer;background:linear-gradient(135deg,#1565D8,#0C3E8F);color:#fff;font-weight:700;font-size:14px;padding:12px;border-radius:9px;box-shadow:0 12px 24px -12px rgba(21,101,216,.9);transition:transform .2s}
.ez-card .ez-buy:hover{transform:translateY(-2px)}
.ez-note{font:400 11.5px var(--f-mono);color:var(--muted);margin-top:14px}

/* dark proof band (live "certified team" band) */
.dband{background:linear-gradient(120deg,#041E42,#0E2F66 60%,#1350B0);border-radius:20px;padding:30px;display:grid;grid-template-columns:repeat(3,1fr);gap:0;color:#fff;position:relative;overflow:hidden;box-shadow:var(--sh-l)}
.dband>div{display:flex;gap:14px;align-items:flex-start;padding:16px 20px;border-right:1px solid rgba(255,255,255,.12);position:relative}
.dband>div:nth-child(3n){border-right:0}
.dband>div:nth-child(n+4){border-top:1px solid rgba(255,255,255,.12)}
.dband i{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.1);display:grid;place-items:center;flex-shrink:0;color:#9cc3ff}
.dband i svg{width:20px;height:20px}
.dband b{display:block;font-family:var(--f-disp);font-size:15px;color:#fff;margin-bottom:4px}
.dband p{font-size:12.5px;color:#c9d8f2;line-height:1.55}
.dband .n{position:absolute;right:14px;top:10px;font-family:var(--f-mono);font-weight:600;font-size:11px;color:rgba(255,255,255,.35)}
@media(max-width:860px){.dband{grid-template-columns:1fr}.dband>div{border-right:0;border-top:1px solid rgba(255,255,255,.12)}.dband>div:first-child{border-top:0}}

/* video (live "watch it in action") */
.lvid{max-width:640px;margin:0 auto;text-align:center}
.lvid .lbl{display:inline-block;font:600 12px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--line);border-radius:99px;padding:8px 16px;margin-bottom:16px;color:var(--ink);background:var(--surface)}
.lvid .fr{position:relative;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#0B1730;box-shadow:var(--sh-l);cursor:pointer;display:grid;place-items:center}
.lvid .fr img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.lvid .fr .pb{position:relative;width:68px;height:48px;border-radius:12px;background:#FF0000;display:grid;place-items:center;transition:transform .2s}
.lvid .fr:hover .pb{transform:scale(1.08)}
.lvid .fr .pb svg{width:22px;height:22px;color:#fff}
.lvid .fr .cap{position:absolute;left:14px;right:14px;top:12px;text-align:left;color:#fff;font-family:var(--f-disp);font-weight:700;font-size:15px;text-shadow:0 2px 8px rgba(0,0,0,.6)}
.lvid iframe{position:absolute;inset:0;width:100%;height:100%;border:0}

/* live CTA + proof strip */
.lcta{background:linear-gradient(120deg,#0E3A8F,#1565D8 55%,#2a7bf0);border-radius:20px;padding:30px 34px;display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center;color:#fff;box-shadow:var(--sh-l);position:relative;overflow:hidden}
.lcta h2{color:#fff!important;font-family:var(--f-disp)!important;font-size:24px!important;margin-bottom:6px!important;text-transform:none!important;letter-spacing:-.01em!important}
.lcta .sub{font-size:13.5px;color:#dbe7fb;margin-bottom:18px}
.lcta .row{display:flex;flex-wrap:wrap;gap:10px}
.lcta .row .btn{padding:10px 16px;font-size:13px}
.lcta .row .b-w{background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.35);color:#fff}
.lcta .row .b-w:hover{background:rgba(255,255,255,.22)}
.lcta .seal{width:120px;height:120px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 0 0 6px rgba(255,255,255,.18);overflow:hidden}
.lcta .seal img{width:100%;height:100%;object-fit:cover}
.lcta .seal .sl{font:700 10px var(--f-mono);color:#1565D8;text-align:center;padding:10px;display:none}
.lcta .seal.noimg img{display:none}.lcta .seal.noimg .sl{display:block}
@media(max-width:760px){.lcta{grid-template-columns:1fr}.lcta .seal{display:none}}
.proof{display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin-top:18px}
.proof span{font:600 11.5px var(--f-mono);color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:99px;padding:7px 14px}

/* ============================ LIVE FOOTER ============================ */
.lnl{position:relative;z-index:2;max-width:860px;margin:30px auto -110px;background:var(--surface);border:1px solid var(--line);border-radius:18px;box-shadow:var(--sh-l);padding:24px 26px;text-align:center}
.lnl h3{display:flex;align-items:center;justify-content:center;gap:10px;font-size:17px;margin-bottom:8px}
.lnl h3 svg{width:20px;height:20px;color:#F57C00}
.lnl p{font-size:13px;color:var(--muted);margin-bottom:16px}
.lnl form{display:flex;gap:10px;margin-bottom:22px}
.lnl input{flex:1;min-width:0;border:1.5px solid var(--line-2);border-radius:10px;padding:12px 14px;font-size:14px;background:var(--surface);color:var(--ink);outline:0}
.lnl input:focus{border-color:#1565D8}
.lnl .two{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.lnl .two a{display:flex;align-items:center;justify-content:center;gap:8px;color:#fff;font-weight:600;font-size:13.5px;border-radius:10px;padding:12px}
.lnl .two a svg{width:17px;height:17px}
.lnl .two .w{background:#25D366}.lnl .two .l{background:#1565D8}
@media(max-width:620px){.lnl{margin:30px 16px -110px}.lnl form{flex-direction:column}.lnl .two{grid-template-columns:1fr}}
.lft{background:linear-gradient(160deg,#1350C8 0%,#1565D8 45%,#1d74ee 100%);color:#e6efff;padding:150px 0 30px}
html[data-theme="dark"] .lft{background:linear-gradient(160deg,#0a2f7a,#0f4bb0)}
.lft a:hover{color:#fff;text-decoration:underline;text-underline-offset:3px}
.lft .top{display:grid;grid-template-columns:1.35fr 1fr;gap:26px;margin-bottom:26px}
@media(max-width:900px){.lft .top{grid-template-columns:1fr}}
.lft .bnr{background:#fff;border-radius:14px;padding:10px 14px;display:flex;align-items:center;gap:14px;margin-bottom:14px}
.lft .bnr img.lg{height:56px;width:auto}
.lft .bnr .tx{flex:1;color:#041E42;font-size:12.5px;line-height:1.5}
.lft .bnr .tx b{display:block;font-size:13px}
.lft .bnr .tx em{font-style:normal;color:#1565D8;font-weight:700}
.lft .bnr img.bd{width:58px;height:58px;border-radius:50%;object-fit:cover;flex-shrink:0}
.lft .co{font-size:12.5px;line-height:1.75;color:#e6efff}
.lft .co b{color:#fff}
.lft .soc{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
.lft .soc a{width:34px;height:34px;border-radius:9px;background:rgba(255,255,255,.16);display:grid;place-items:center;color:#fff}
.lft .soc a:hover{background:#fff;color:#1565D8;text-decoration:none}
.lft .soc svg{width:16px;height:16px}
.lft .cv h3{font-family:var(--f-disp);color:#fff;font-size:24px;margin-bottom:12px}
.lft .cv .fr{position:relative;aspect-ratio:16/9;border-radius:12px;overflow:hidden;background:#0B1730;cursor:pointer;display:grid;place-items:center}
.lft .cv .fr img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.lft .cv .fr .pb{position:relative;width:60px;height:42px;border-radius:10px;background:#FF0000;display:grid;place-items:center}
.lft .cv .fr .pb svg{width:20px;height:20px;color:#fff}
.lft .cv iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.lft .rows{display:flex;flex-direction:column;gap:10px;margin-bottom:22px}
.lft .row{display:grid;grid-template-columns:120px 1fr;gap:12px;align-items:baseline}
.lft .row .k{font-family:var(--f-disp);font-weight:700;color:#fff;font-size:14px}
.lft .row .v{display:flex;flex-wrap:wrap;gap:4px 18px;font-size:12.5px}
.lft .row .v a:before{content:"\u203A";margin-right:6px;opacity:.7}
.lft .row .v a.hire{background:#e5383b;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700}
.lft .row .v a.hire:before{content:none}
@media(max-width:620px){.lft .row{grid-template-columns:1fr;gap:4px}}
.lft .strip{display:grid;grid-template-columns:140px 1fr;gap:14px;align-items:center;padding:12px 0}
.lft .strip .k{font-family:var(--f-disp);font-weight:700;color:#fff;font-size:14px}
@media(max-width:700px){.lft .strip{grid-template-columns:1fr}}
.lft .tiles{display:flex;flex-wrap:wrap;gap:8px}
.lft .tl{background:#fff;color:#041E42;border-radius:8px;min-width:64px;padding:0 7px;height:58px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;line-height:1.05;box-shadow:0 6px 14px -8px rgba(0,0,0,.35)}
.lft .tl small{font:600 7.5px var(--f-mono);letter-spacing:.1em;color:#51607A}
.lft .tl b{font-family:var(--f-disp);font-weight:800;font-size:12px;color:#041E42}
.lft .tl em{font:600 6.5px var(--f-mono);letter-spacing:.08em;color:#8a98b2;font-style:normal;text-transform:uppercase}
.lft .pay{background:#fff;border-radius:7px;padding:6px 10px;font:800 11px var(--f-disp);color:#041E42;min-width:64px;text-align:center}
.lft .prot{background:#fff;border-radius:8px;height:46px;padding:4px 8px;display:flex;align-items:center}
.lft .prot img{height:36px;width:auto}
.lft .prot .pt{font:800 11px var(--f-disp);color:#041E42}
.lft .rev{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
@media(max-width:760px){.lft .rev{grid-template-columns:1fr}}
.lft .rev div{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:10px 14px;display:flex;gap:10px;align-items:center}
.lft .rev i{width:30px;height:30px;border-radius:7px;display:grid;place-items:center;color:#fff;font-style:normal;font-weight:800;font-size:13px;flex-shrink:0}
.lft .rev b{display:block;color:#fff;font-size:13px}
.lft .rev span>span{font:500 10.5px var(--f-mono);color:#ffd27a}
.lft .grow{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;background:rgba(4,30,66,.35);border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:18px 22px;margin:22px 0}
.lft .grow b{font-family:var(--f-disp);font-size:18px;color:#fff}
.lft .grow span{display:block;font-size:12.5px;color:#c9d8f2}
.lft .bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:12px;color:#c9d8f2;border-top:1px solid rgba(255,255,255,.18);padding-top:16px}
.lft .bot .ids{font-family:var(--f-mono);font-size:11px}
.lft img.broken{display:none}
.lnl-wrap{position:relative;z-index:2;padding:0 16px}
.lnl .fi input{width:100%}
.lnl .fi{margin:0}
.lh-ask .chips{flex-wrap:wrap}
.lh-ask a{width:auto;height:28px;padding:0 10px;border-radius:7px;font:700 11.5px var(--f-disp);color:#041E42;gap:6px;display:inline-flex;align-items:center}
.lh-ask a i{width:8px;height:8px;border-radius:50%;display:block}
.lh-ask a[data-ai=chatgpt] i{background:#10a37f}.lh-ask a[data-ai=claude] i{background:#d97757}.lh-ask a[data-ai=perplexity] i{background:#20808d}.lh-ask a[data-ai=google] i{background:#4285f4}.lh-ask a[data-ai=copilot] i{background:#7b61ff}

/* hyper-motion layer for live hero */
.hero.lh .hero-bg canvas.lh-net{position:absolute;inset:0;width:100%;height:100%;opacity:.9}
.hero.lh .stage{position:relative;perspective:1200px}
.hero.lh .stage>.lh-tilt{transform-style:preserve-3d;transition:transform .5s var(--ease-o);will-change:transform}
.lh-orbit{position:absolute;left:50%;top:50%;width:560px;height:560px;margin:-280px 0 0 -280px;border-radius:50%;border:1px dashed rgba(127,176,255,.22);pointer-events:none;animation:lhSpin 60s linear infinite}
.lh-orbit.o2{width:440px;height:440px;margin:-220px 0 0 -220px;border-style:solid;border-color:rgba(255,140,26,.14);animation-duration:38s;animation-direction:reverse}
.lh-orbit:before,.lh-orbit:after{content:"";position:absolute;width:10px;height:10px;border-radius:50%;background:#7fb0ff;box-shadow:0 0 14px 4px rgba(127,176,255,.6);top:-5px;left:50%}
.lh-orbit:after{top:auto;bottom:-5px;background:#FF8C1A;box-shadow:0 0 14px 4px rgba(255,140,26,.55)}
.lh-orbit.o2:before{background:#5FE08D;box-shadow:0 0 12px 3px rgba(95,224,141,.5)}
@keyframes lhSpin{to{transform:rotate(360deg)}}
.lh-chip{position:absolute;z-index:5;display:flex;align-items:center;gap:8px;background:rgba(10,26,58,.88);border:1px solid rgba(255,255,255,.16);backdrop-filter:blur(8px);color:#fff;border-radius:12px;padding:8px 12px;font:600 12px var(--f-disp);box-shadow:0 16px 30px -14px rgba(0,0,0,.7);animation:lhFloat 6s ease-in-out infinite}
.lh-chip i{width:24px;height:24px;border-radius:7px;display:grid;place-items:center;background:#1565D8}
.lh-chip i svg{width:13px;height:13px}
.lh-chip small{display:block;font:500 10px var(--f-mono);color:#9fb6de}
.lh-chip.c2{animation-delay:-3s}.lh-chip.c2 i{background:#FF8C1A}
@keyframes lhFloat{50%{transform:translateY(-10px)}}
@media(max-width:1100px){.lh-chip{display:none}}
@media(max-width:980px){.lh-orbit{display:none}}
.rfab .rf-cart{box-shadow:0 0 0 3px rgba(255,255,255,.85),0 12px 26px -10px rgba(4,30,66,.55)}
@media(max-width:760px){.ubar .ur .stat,.ubar .lang-sel,.ubar .ph b{display:none}}
.hero.lh .stage{padding-bottom:62px}@media(max-width:980px){.hero.lh .stage{padding-bottom:0}}
/* dark-mode fixes for live primitives */
html[data-theme="dark"] .ico.n{color:#9cc3ff!important}html[data-theme="dark"] .ico.o{color:#FFB15C!important}html[data-theme="dark"] .ico.g{color:#5FE08D!important}html[data-theme="dark"] .ico.r{color:#ff8a80!important}html[data-theme="dark"] .ico{color:#7fb0ff!important}
html[data-theme="dark"] .vcard .vb{background:#10244A;color:#9cc3ff}html[data-theme="dark"] .vcard.b2 .vb{background:#14264a;color:#b9c9e2}html[data-theme="dark"] .vcard.b3 .vb{background:rgba(255,140,26,.14);color:#FFB15C}
html[data-theme="dark"] .vcard li i{background:rgba(46,204,113,.14);color:#5FE08D}
html[data-theme="dark"] .vcard:hover{border-color:#2b4d8a}
.ez-card .ez-save{gap:10px}.ez-card .ez-save b{white-space:nowrap;flex-shrink:0}.ez-card .ez-save>span{min-width:0}
/* perf: composite hero bg layers instead of repainting every frame */
.hero.lh .hero-bg .lh-grid{background-image:none!important;animation:none!important;overflow:hidden}
.hero.lh .hero-bg .lh-grid:before{content:"";position:absolute;inset:-48px 0 0 -48px;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:48px 48px;animation:lhGridT 32s linear infinite;will-change:transform}
@keyframes lhGridT{to{transform:translate3d(48px,48px,0)}}
.hero.lh .hero-bg .lh-aur{will-change:transform;transform:translateZ(0)}
.hero.lh .hero-bg .lh-scan{will-change:transform;top:0!important;animation:lhScanT 7s var(--ease) infinite}
@keyframes lhScanT{0%{transform:translateY(-120px)}100%{transform:translateY(700px)}}
@media(prefers-reduced-motion:reduce){.hero.lh .hero-bg .lh-grid:before{animation:none}}
.hero.lh .hero-bg .lh-aur{filter:none!important;opacity:.3}
.hero.lh .hero-bg .lh-aur.a1{background:radial-gradient(circle,rgba(47,107,255,.9),rgba(47,107,255,.25) 40%,transparent 70%)!important}
.hero.lh .hero-bg .lh-aur.a2{background:radial-gradient(circle,rgba(255,140,26,.85),rgba(255,140,26,.2) 40%,transparent 70%)!important}

/* ===== page ===== */
/* =====================================================================
   Cybird X2 \u2014 page styles (prefix cb- / scoped)
   ===================================================================== */
#overview,#features,#benefits,#how,#hardware,#simulate,#compare,#ideal,#partners,#pricing,#configure,#inbox,#why,#faq,#contact,#family{scroll-margin-top:90px}
.cb-src{display:none}
.cb-g{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:7px;background:#1565D8;color:#fff;font:800 13px/1 var(--f-disp);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);flex-shrink:0}
.cb-g.sm{width:18px;height:18px;font-size:11px;border-radius:6px;vertical-align:-3px;margin-right:4px}
.hero.lh .lh-powered.cb-pw{bottom:-24px}
@media(max-width:980px){.hero.lh .lh-powered.cb-pw{bottom:auto}}
.cb-pw em{display:block;font:500 9px var(--f-mono);letter-spacing:.06em;color:#9fb6de;font-style:normal;margin-top:5px;white-space:nowrap}
.hero.lh .lh-chip.cb-c2{bottom:-18px;right:-14px}
@media(max-width:980px){.hero.lh .lh-chip.cb-c2{bottom:auto;top:-30px;right:auto;left:-6px}}
.vt-k{display:inline-flex;align-items:center;gap:7px;font:600 11px var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:#1565D8}
.vt-k svg{width:14px;height:14px}
html[data-theme="dark"] .vt-k{color:#7fb0ff}
.cb-anc{display:flex;flex-wrap:wrap;gap:6px 14px;margin:-4px 0 16px}
.cb-anc a{display:inline-flex;align-items:center;gap:6px;font:600 12px var(--f-mono);color:#B6C2DA;border-bottom:1px dashed rgba(182,194,218,.4);padding-bottom:2px;transition:color .2s,border-color .2s}
.cb-anc a:hover{color:#fff;border-color:#FF8C1A}
.cb-anc svg{width:13px;height:13px;color:#7fb0ff}
[data-gl] svg,[data-gl2] svg{display:block}
[data-gl2]>svg{display:inline-block;width:15px;height:15px;flex-shrink:0}

/* ---------- micro-interactions ---------- */
.cb-mag{transition:transform .2s var(--ease),background .2s,color .2s,border-color .2s,box-shadow .25s,translate .5s cubic-bezier(.3,1.5,.5,1)}
.cb-mag.mg{transition:transform .2s var(--ease),background .2s,color .2s,border-color .2s,box-shadow .25s,translate .12s linear;box-shadow:0 14px 34px -12px rgba(255,140,26,.75)}
.cb-tl{position:relative}
.cb-tl.tilting{transition:transform .14s linear,box-shadow .35s,border-color .3s!important}
.cb-tl:after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .35s;z-index:3;
  background:radial-gradient(260px circle at var(--gx,50%) var(--gy,50%),rgba(21,101,216,.13),transparent 60%),linear-gradient(105deg,transparent calc(var(--gx,50%) - 22%),rgba(21,101,216,.07) var(--gx,50%),transparent calc(var(--gx,50%) + 22%))}
.cb-tl.tilting:after{opacity:1}
html[data-theme="dark"] .cb-tl:after{background:radial-gradient(260px circle at var(--gx,50%) var(--gy,50%),rgba(127,176,255,.15),transparent 60%),linear-gradient(105deg,transparent calc(var(--gx,50%) - 22%),rgba(255,255,255,.07) var(--gx,50%),transparent calc(var(--gx,50%) + 22%))}
.cb-kin .w{display:inline-block;opacity:0;transform:translateY(.6em) rotate(2deg);transform-origin:0 100%;transition:opacity .5s var(--ease-o),transform .75s cubic-bezier(.2,1.35,.4,1);transition-delay:calc(var(--i)*60ms + .1s)}
.rv.in .cb-kin .w{opacity:1;transform:none}
.cb-sd{position:relative;max-width:var(--maxw);height:40px;margin:4px auto;padding:0 24px;opacity:1!important;transform:none!important}
.cb-sd svg{width:100%;height:40px;display:block;overflow:visible}
.cb-sd path{fill:none;stroke:var(--line-2);stroke-width:1.5;stroke-dasharray:1 1;stroke-dashoffset:1;vector-effect:non-scaling-stroke;transition:stroke-dashoffset 1.6s var(--ease-o)}
.cb-sd.in path{stroke-dashoffset:0;stroke:#9cbcf0}
html[data-theme="dark"] .cb-sd.in path{stroke:#2b4d8a}
.cb-sd i{position:absolute;left:24px;top:17px;width:7px;height:7px;border-radius:50%;background:#FF8C1A;box-shadow:0 0 10px 3px rgba(255,140,26,.55);opacity:0}
.cb-sd.in.run i{animation:cbSd 5.5s var(--ease) infinite 1s}
@keyframes cbSd{0%{opacity:0;transform:translateX(0)}8%{opacity:1}92%{opacity:1}100%{opacity:0;transform:translateX(calc(var(--sw,1100px) - 7px))}}
@keyframes cbBlink{50%{opacity:.25}}
@keyframes cbBump{0%{transform:translateY(-3px) scale(1.14)}}
@keyframes cbSwap{0%{opacity:0;transform:translateY(8px)}}
@keyframes cbPop{0%{transform:scale(0)}60%{transform:scale(1.25)}100%{transform:scale(1)}}
.bump{animation:cbBump .5s var(--ease-o)}

/* ===================== HERO ===================== */
#cbHero .hero-grid>*{min-width:0}
#cbHero .lh-title .nm{font-size:.74em}
@media(min-width:981px){#cbHero .lh-title .nm{white-space:nowrap}}
#cbHero .stage>.lh-tilt{width:100%;max-width:510px;min-width:0}
#cbHero .lh-points .tk svg{width:14px;height:14px}
.hero.lh .hero-bg canvas.cb-bg{position:absolute;top:0;right:0;width:64%;height:100%}
@media(max-width:980px){.hero.lh .hero-bg canvas.cb-bg{width:100%;opacity:.55}}

.cbv{position:relative;width:100%;max-width:510px;background:#0A1838;border:1px solid rgba(127,176,255,.22);border-radius:20px;box-shadow:0 40px 90px -30px rgba(0,0,0,.75),inset 0 1px 0 rgba(255,255,255,.06);overflow:hidden;color:#EAF2FF}
html[data-theme="dark"] .cbv{background:#08122A;border-color:rgba(127,176,255,.18)}
.cbv:after{content:"";position:absolute;inset:0;border-radius:20px;border:2px solid #16a34a;opacity:0;pointer-events:none}
.cbv.win:after{animation:cbFlash 1.8s var(--ease-o)}
.cbv.alarm:before{content:"";position:absolute;inset:0;border-radius:20px;border:2px solid #ff5a4a;opacity:0;pointer-events:none;z-index:5;animation:cbAlarm 1.1s var(--ease-o)}
@keyframes cbFlash{0%,25%{opacity:.9}100%{opacity:0}}
@keyframes cbAlarm{0%,30%{opacity:.85}100%{opacity:0}}
.cbv-h{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 16px;border-bottom:1px solid rgba(127,176,255,.14)}
.cbv-h b{font-family:var(--f-disp);font-size:14px;display:flex;align-items:center;gap:9px;color:#fff;white-space:nowrap;min-width:0}
.cbv-h b span{overflow:hidden;text-overflow:ellipsis}
.cbv-h b i{width:28px;height:28px;border-radius:8px;background:#1565D8;color:#fff;display:grid;place-items:center;flex-shrink:0}
.cbv-h b i svg{width:15px;height:15px}
.cbv-live{font:500 10.5px var(--f-mono);color:#9fb6de;display:flex;align-items:center;gap:6px;white-space:nowrap;flex-shrink:0}
.cbv-live:before{content:"";width:7px;height:7px;border-radius:50%;background:#7fb0ff;flex-shrink:0;animation:cbBlink 1.2s infinite}
.cbv.a0 .cbv-live:before{background:#5FE08D;animation-duration:.5s}
.cbv.a2 .cbv-live:before{background:#ff5a4a;animation-duration:.6s}
.cbv.a3 .cbv-live:before{background:#FF8C1A;animation-duration:.8s}
.cbv.a6 .cbv-live:before{background:#5FE08D;animation-duration:1.6s}
.cbv-rail{position:relative;display:grid;grid-template-columns:repeat(7,1fr);gap:4px;padding:10px 12px 12px}
.cbv-rail>span{position:relative;z-index:1;text-align:center;font:600 9.5px var(--f-mono);color:#7f93ba;padding:5px 1px;border-radius:99px;background:#0D1F47;border:1px solid rgba(127,176,255,.16);white-space:nowrap;overflow:hidden;transition:color .3s,background .3s,border-color .3s,transform .45s cubic-bezier(.3,1.6,.5,1),box-shadow .3s}
.cbv-rail>span.on{color:#fff;background:#1565D8;border-color:#7fb0ff;transform:translateY(-2px) scale(1.06);box-shadow:0 0 0 3px rgba(21,101,216,.25),0 6px 18px -6px rgba(80,150,255,.8)}
.cbv.a2 .cbv-rail>span.on{background:#c0392b;border-color:#ff8a80;box-shadow:0 0 0 3px rgba(192,57,43,.25)}
.cbv.a3 .cbv-rail>span.on{background:#FF8C1A;border-color:#FFB15C;box-shadow:0 0 0 3px rgba(255,140,26,.25)}
.cbv.a6 .cbv-rail>span.on{background:#16a34a;border-color:#5FE08D;box-shadow:0 0 0 3px rgba(22,163,74,.25)}
.cbv-rail>span.dn{color:#8ff0b2;border-color:rgba(95,224,141,.5);background:rgba(22,163,74,.14)}
.cbv-rail .tr{position:absolute;left:12px;right:12px;bottom:5px;height:2px;border-radius:2px;background:rgba(127,176,255,.12);overflow:hidden}
.cbv-rail .tr b{display:block;height:100%;width:100%;background:#5FE08D;transform-origin:left;transform:scaleX(0)}
.cbv-sc{position:relative;height:300px;overflow:hidden;border-top:1px solid rgba(127,176,255,.08);border-bottom:1px solid rgba(127,176,255,.08);background:#061230 radial-gradient(60% 70% at 50% 58%,rgba(40,90,210,.32),transparent 75%)}
html[data-theme="dark"] .cbv-sc{background-color:#040c22}
.cbv-sc canvas{position:absolute;inset:0;width:100%;height:100%}
.cbv-spot{position:absolute;left:0;top:0;width:260px;height:260px;margin:-130px 0 0 -130px;border-radius:50%;background:radial-gradient(circle,rgba(160,205,255,.16),rgba(160,205,255,.05) 38%,transparent 68%);opacity:0;transition:opacity .45s;pointer-events:none;will-change:transform}
.cbv-sc.hov .cbv-spot{opacity:1}
.cbv-fx{position:absolute;inset:0;pointer-events:none;will-change:translate}
.cbv-cd{position:absolute;top:10px;width:212px;padding:9px 10px;border-radius:13px;background:rgba(7,20,48,.94);border:1px solid rgba(127,176,255,.4);box-shadow:0 24px 50px -16px rgba(0,0,0,.85),0 0 0 4px rgba(21,101,216,.12);opacity:0;transform:translateY(14px) scale(.9) perspective(600px) rotateX(14deg);transition:opacity .45s,transform .7s cubic-bezier(.2,1.3,.4,1)}
.cbv-cd.p-r{right:10px}.cbv-cd.p-l{left:10px}
.cbv-cd.show{opacity:1;transform:none}
.cbv-cd.out{opacity:0;transform:translateY(-8px) scale(.88);transition:opacity .4s,transform .5s var(--ease)}
.cbv .dh{display:flex;gap:8px;align-items:center;margin-bottom:7px}
.cbv .dh i{width:24px;height:24px;border-radius:7px;background:#1565D8;color:#fff;display:grid;place-items:center;flex-shrink:0}
.cbv .dh i.r{background:#c0392b}.cbv .dh i.o{background:#FF8C1A}.cbv .dh i.b{background:#0C3E8F}
.cbv .dh i svg{width:13px;height:13px}
.cbv .dh>span{min-width:0;flex:1}
.cbv .dh small{display:block;font:600 7.5px var(--f-mono);letter-spacing:.07em;text-transform:uppercase;color:#9fb6de;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cbv .dh b{display:block;font:700 11.5px/1.25 var(--f-disp);color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cbv-cd ul{list-style:none;display:flex;flex-direction:column;gap:3px}
.cbv-cd li{display:grid;grid-template-columns:auto 1fr;gap:0 6px;align-items:center;padding:3px 6px;border-radius:7px;background:rgba(127,176,255,.08);opacity:0;transform:translateX(-10px);transition:opacity .35s,transform .45s var(--ease-o)}
.cbv-cd.show li{opacity:1;transform:none}
.cbv-cd.show li:nth-child(2){transition-delay:.12s}.cbv-cd.show li:nth-child(3){transition-delay:.24s}.cbv-cd.show li:nth-child(4){transition-delay:.36s}
.cbv-cd li em{grid-row:span 2;font:700 7.5px var(--f-mono);font-style:normal;text-transform:uppercase;padding:2px 5px;border-radius:99px;color:#fff;background:#1565D8;text-align:center;min-width:38px}
.cbv-cd li em.io{background:#0e7490}.cbv-cd li em.gu{background:#6d5bd0}.cbv-cd li em.bk{background:#c0392b}
.cbv-cd li span{font:600 9.5px/1.25 var(--f-mono);color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cbv-cd li b{font:500 8.5px/1.25 var(--f-body);color:#9fb6de;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#cbvBl li{opacity:0;transform:scale(.85);transition:opacity .3s,transform .5s cubic-bezier(.3,1.7,.5,1)}
#cbvBl li.in{opacity:1;transform:none}
#cbvBl li.in em{animation:cbPop .5s var(--ease-o)}
#cbvCl li{opacity:0}#cbvCl li.in{opacity:1;transform:none}
.cbv-cd .bw{display:grid;grid-template-columns:86px 1fr;gap:6px;align-items:center;margin:4px 0;font:500 9px var(--f-mono);color:#cfe0ff}
.cbv-cd .bw i{display:block;height:8px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}
.cbv-cd .bw b{display:block;height:100%;width:100%;border-radius:99px;background:#5FE08D;transform-origin:left;transform:scaleX(.3);transition:transform 1.1s cubic-bezier(.3,1.3,.5,1)}
.cbv-cd .bw b.o{background:#FF8C1A}.cbv-cd .bw b.p{background:#a08cff}
.cbv-cd .vd{display:block;text-align:center;font:700 9.5px var(--f-disp);color:#fff;background:#16a34a;border-radius:7px;padding:4px;margin-top:6px;opacity:0;transform:scale(.8);transition:opacity .3s,transform .45s cubic-bezier(.3,1.7,.5,1)}
.cbv-cd .vd.in{opacity:1;transform:none}
.cbv-cd .sp{display:flex;align-items:flex-end;gap:4px;height:30px;margin-top:6px;padding:0 2px}
.cbv-cd .sp i{flex:1;height:100%;border-radius:3px 3px 0 0;background:#1565D8;transform-origin:bottom;transform:scaleY(.05);transition:transform .8s cubic-bezier(.3,1.4,.5,1)}
.cbv-cd .sp i:nth-child(2n){background:#7fb0ff}
.cbv-cd.show .sp i{transform:scaleY(var(--h))}
.cbv-cd.show .sp i:nth-child(2){transition-delay:.06s}.cbv-cd.show .sp i:nth-child(3){transition-delay:.12s}.cbv-cd.show .sp i:nth-child(4){transition-delay:.18s}.cbv-cd.show .sp i:nth-child(5){transition-delay:.24s}.cbv-cd.show .sp i:nth-child(6){transition-delay:.3s}.cbv-cd.show .sp i:nth-child(7){transition-delay:.36s}
/* final settle */
.cbv-end{position:absolute;left:50%;bottom:12px;display:flex;align-items:center;gap:10px;padding:9px 14px 9px 10px;border-radius:14px;background:rgba(5,22,40,.95);border:1px solid rgba(95,224,141,.55);box-shadow:0 0 0 4px rgba(95,224,141,.12),0 24px 50px -14px rgba(0,0,0,.85);opacity:0;transform:translate(-50%,20px) scale(.6);white-space:nowrap}
.cbv-end.show{animation:cbEnd 1s cubic-bezier(.2,1.5,.35,1) forwards}
.cbv-end.out{animation:cbEndOut .5s var(--ease) forwards}
.cbv-end.fin{opacity:1;transform:translate(-50%,0)}
@keyframes cbEnd{0%{opacity:0;transform:translate(-50%,20px) scale(.6)}40%{opacity:1}100%{opacity:1;transform:translate(-50%,0) scale(1)}}
@keyframes cbEndOut{0%{opacity:1;transform:translate(-50%,0)}100%{opacity:0;transform:translate(-50%,-6px) scale(.9)}}
.cbv-end i{width:34px;height:34px;border-radius:10px;background:#16a34a;color:#fff;display:grid;place-items:center;flex-shrink:0}
.cbv-end i svg{width:18px;height:18px}
.cbv-end b{font:800 14px/1.15 var(--f-disp);color:#fff;letter-spacing:-.01em}
.cbv-end .tx{display:block;min-width:0}
.cbv-end small{display:block;font:500 8.5px var(--f-mono);color:#8ff0b2;margin-top:3px;white-space:nowrap}
.cbv-end .ring{position:absolute;inset:-2px;border-radius:15px;border:2px solid #5FE08D;opacity:0;pointer-events:none}
.cbv-end.show .ring{animation:cbRing 1.1s var(--ease-o) .35s}
@keyframes cbRing{0%{opacity:.9;transform:scale(1)}100%{opacity:0;transform:scale(1.3,1.6)}}
/* KPI strip */
.cbv-kp{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid rgba(127,176,255,.12)}
.cbv-kp>div{padding:9px 6px 10px;text-align:center;border-right:1px solid rgba(127,176,255,.12);min-width:0}
.cbv-kp>div:last-child{border-right:0}
.cbv-kp span{display:block;font:500 9px var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:#9fb6de;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cbv-kp b{display:block;font:700 16px/1.25 var(--f-disp);color:#cfe0ff;font-variant-numeric:tabular-nums;transition:color .5s}
.cbv-kp em{display:inline-block;font:700 9px var(--f-mono);font-style:normal;padding:1px 6px;border-radius:99px;background:rgba(127,176,255,.16);color:#9fb6de;white-space:nowrap;transition:background .4s,color .4s}
.cbv-kp .bad b{color:#ff9a8f}.cbv-kp .bad em{background:rgba(192,57,43,.3);color:#ffb3a8}
.cbv-kp .good b{color:#8ff0b2}.cbv-kp .good em{background:#16a34a;color:#fff}
.cbv-lg{display:flex;align-items:center;gap:8px;height:32px;margin:10px 12px 8px;padding:0 10px;border-radius:9px;background:#030a1c;border:1px solid rgba(127,176,255,.16);overflow:hidden}
.cbv-lg .pr{font:700 11px var(--f-mono);color:#7fb0ff;flex-shrink:0;transition:color .3s}
.cbv.a2 .cbv-lg .pr{color:#ff5a4a}
.cbv.a6 .cbv-lg .pr{color:#5FE08D}
.cbv-lg code{font:500 10.5px var(--f-mono);color:#dbe7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.cbv-tk{margin:0 12px 12px;height:22px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.cbv-tk .tk-m{display:flex;gap:22px;width:max-content;animation:cbTk 40s linear infinite}
.cbv-tk.paused .tk-m{animation-play-state:paused}
.cbv-tk span{display:inline-flex;align-items:center;gap:6px;font:500 10px/22px var(--f-mono);color:#9fb6de;white-space:nowrap}
.cbv-tk i{width:6px;height:6px;border-radius:50%;background:#5FE08D}
.cbv-tk i.r{background:#ff5a4a}.cbv-tk i.m{background:#FF8C1A}.cbv-tk i.b{background:#7fb0ff}
@keyframes cbTk{to{transform:translateX(calc(-50% - 11px))}}
@media(max-width:560px){
  .cbv-h{padding:10px 12px}.cbv-h b{font-size:12.5px}.cbv-live{display:none}
  .cbv-rail{padding:9px 8px 11px;gap:3px}.cbv-rail>span{font-size:7px;padding:4px 0}
  .cbv-sc{height:270px}
  .cbv-cd{width:186px;padding:8px}.cbv .dh b{font-size:10.5px}.cbv-cd li span{font-size:8.5px}.cbv-cd li b{font-size:8px}
  .cbv-cd .bw{grid-template-columns:74px 1fr;font-size:8px}
  .cbv-kp b{font-size:13.5px}.cbv-kp span{font-size:7.5px;letter-spacing:.02em}.cbv-kp em{font-size:7.5px;padding:1px 4px}
  .cbv-end b{font-size:12.5px}.cbv-end small{display:none}
}

/* ===================== OVERVIEW FLOW ===================== */
.cb-flow{margin-top:26px;display:grid;grid-template-columns:minmax(0,1fr) 56px minmax(0,1fr) 56px minmax(0,1fr);align-items:stretch}
.fl-s{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:18px;box-shadow:var(--sh-s);opacity:0;transform:translateY(16px);transition:opacity .6s var(--ease-o),transform .7s cubic-bezier(.3,1.4,.5,1),box-shadow .3s,border-color .3s;transition-delay:calc(var(--k)*180ms)}
.cb-flow.in .fl-s{opacity:1;transform:none}
.fl-s:hover{border-color:#1565D8;box-shadow:var(--sh)}
.fl-s .fi{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;background:var(--chip);color:#1565D8;margin-bottom:10px}
.fl-s .fi.o{background:#fff3e0;color:#F57C00}.fl-s .fi.g{background:#e4f7ec;color:#16a34a}
html[data-theme="dark"] .fl-s .fi{color:#7fb0ff}html[data-theme="dark"] .fl-s .fi.o{background:rgba(255,140,26,.14);color:#FFB15C}html[data-theme="dark"] .fl-s .fi.g{background:rgba(22,163,74,.16);color:#5FE08D}
.fl-s .fi svg{width:20px;height:20px}
.fl-s small{display:block;font:600 10.5px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:#F57C00}
html[data-theme="dark"] .fl-s small{color:#FFB15C}
.fl-s b{display:block;font:800 19px var(--f-disp);color:var(--ink);margin:2px 0 6px}
.fl-s p{font-size:13.5px;line-height:1.6;color:var(--text);margin-bottom:12px}
.fl-c{display:flex;flex-wrap:wrap;gap:6px}
.fl-c span{display:inline-flex;align-items:center;gap:5px;font:600 11px var(--f-mono);color:#1565D8;background:var(--chip);border-radius:99px;padding:4px 9px}
html[data-theme="dark"] .fl-c span{color:#7fb0ff}
.fl-c svg{width:12px;height:12px}
.fl-a{position:relative;align-self:center;height:2px;margin:0 8px;background:var(--line-2);border-radius:2px}
.fl-a:after{content:"";position:absolute;right:-2px;top:-4px;border:5px solid transparent;border-left:7px solid var(--line-2);border-right:0}
.fl-a i{position:absolute;left:0;top:-3px;width:8px;height:8px;border-radius:50%;background:#FF8C1A;box-shadow:0 0 10px 3px rgba(255,140,26,.5);opacity:0}
.cb-flow.run .fl-a i{animation:cbFlA 1.8s var(--ease) infinite}
.cb-flow.run .fl-a:nth-of-type(4) i{animation-delay:.9s}
@keyframes cbFlA{0%{left:0;opacity:0}15%{opacity:1}85%{opacity:1}100%{left:calc(100% - 8px);opacity:0}}
@media(max-width:900px){.cb-flow{grid-template-columns:1fr;gap:0}.fl-a{width:2px;height:34px;margin:0 auto}.fl-a:after{right:-4px;top:auto;bottom:-2px;border:5px solid transparent;border-top:7px solid var(--line-2);border-bottom:0}.fl-a i{left:-3px!important;top:0}
  .cb-flow.run .fl-a i{animation-name:cbFlAv}}
@keyframes cbFlAv{0%{top:0;opacity:0}15%{opacity:1}85%{opacity:1}100%{top:calc(100% - 8px);opacity:0}}
.cb-for{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:20px}
.cb-for .k{font:600 11px var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-right:4px}
.cb-for span:not(.k){display:inline-flex;align-items:center;gap:7px;font:600 13px var(--f-disp);color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:99px;padding:7px 13px 7px 9px;transition:transform .3s var(--ease-o),border-color .3s}
.cb-for span:not(.k):hover{transform:translateY(-3px);border-color:#1565D8}
.cb-for svg{width:15px;height:15px;color:#1565D8}
html[data-theme="dark"] .cb-for svg{color:#7fb0ff}

/* ===================== FEATURES ===================== */
.cb-ft{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
@media(max-width:1000px){.cb-ft{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:480px){.cb-ft{grid-template-columns:1fr}}
.cb-ft .ft{position:relative;display:flex;flex-direction:column;gap:4px;min-height:186px;padding:16px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s);color:inherit;overflow:hidden;transition:box-shadow .35s,border-color .3s;outline:0}
.cb-ft .ft:hover,.cb-ft .ft:focus-visible{border-color:#1565D8;box-shadow:var(--sh)}
.cb-ft .fi{width:46px;height:46px;border-radius:13px;display:grid;place-items:center;background:var(--chip);color:#1565D8;margin-bottom:8px}
.cb-ft .fi svg{width:26px;height:26px;overflow:visible}
.cb-ft .fi.o{background:#fff3e0;color:#F57C00}.cb-ft .fi.g{background:#e4f7ec;color:#16a34a}.cb-ft .fi.n{background:#eaeff9;color:#0A2A57}
html[data-theme="dark"] .cb-ft .fi{background:var(--chip);color:#7fb0ff}html[data-theme="dark"] .cb-ft .fi.o{color:#FFB15C}html[data-theme="dark"] .cb-ft .fi.g{color:#5FE08D}html[data-theme="dark"] .cb-ft .fi.n{color:#b9c9e2}
.cb-ft .ft b{font:700 14.5px/1.3 var(--f-disp);color:var(--ink)}
.cb-ft .ft small{font-size:12.5px;line-height:1.5;color:var(--muted)}
.cb-ft .hn{margin-top:auto;padding-top:8px;text-decoration:none;font:700 12px var(--f-disp);color:#1565D8;transition:opacity .3s,transform .3s var(--ease-o)}
html[data-theme="dark"] .cb-ft .hn{color:#7fb0ff}
.cb-ft .ft:hover .hn,.cb-ft .ft:focus-within .hn,.cb-ft .ft.tap .hn{opacity:0;transform:translateY(-6px)}
.cb-ft .rvl{position:absolute;left:12px;right:12px;bottom:12px;z-index:4;display:flex;gap:7px;align-items:flex-start;box-shadow:var(--sh);background:var(--surface);padding:9px 10px;border-radius:11px;background:var(--surface-2);border:1px dashed var(--line-2);font-size:12px;line-height:1.45;color:var(--text);opacity:0;transform:translateY(14px);transition:opacity .4s var(--ease-o),transform .5s cubic-bezier(.3,1.4,.5,1)}
.cb-ft .rvl svg{width:13px;height:13px;flex-shrink:0;margin-top:2px;color:#1565D8}
html[data-theme="dark"] .cb-ft .rvl svg{color:#7fb0ff}
.cb-ft .ft:hover .rvl,.cb-ft .ft:focus-within .rvl,.cb-ft .ft.tap .rvl{opacity:1;transform:none}
@media(hover:none){.cb-ft .rvl{position:static;margin-top:auto;opacity:1;transform:none;box-shadow:none}.cb-ft .hn{display:none}}
/* icon micro-animations (run while card in view; stronger on hover) */
.cb-ft .fi .a1,.cb-ft .fi .a2,.cb-ft .fi .a3{transform-box:fill-box;transform-origin:center}
.cb-ft.run .f-wifi .fi .a1{animation:cbWv 2.4s ease-in-out infinite}
.cb-ft.run .f-wifi .fi .a2{animation:cbWv 2.4s ease-in-out .25s infinite}
.cb-ft.run .f-wifi .fi .a3{animation:cbWv 2.4s ease-in-out .5s infinite}
@keyframes cbWv{0%,60%,100%{opacity:1}30%{opacity:.2}}
.cb-ft.run .f-fw .fi .a1{animation:cbBrick 3s var(--ease-o) infinite}
@keyframes cbBrick{0%,70%,100%{transform:none}80%{transform:translateX(-2px)}90%{transform:translateX(2px)}}
.cb-ft .f-fw .fi .a2{transform-origin:right center;transform:scaleX(0)}
.cb-ft.run .f-fw .fi .a2{animation:cbDart 3s var(--ease-o) infinite}
@keyframes cbDart{0%{transform:translateX(-10px);opacity:0}30%{opacity:1}55%{transform:translateX(0);opacity:1}62%,100%{opacity:0}}
.cb-ft.run .f-gw .fi .a1{animation:cbSpin 9s linear infinite}
@keyframes cbSpin{to{transform:rotate(360deg)}}
.cb-ft.run .f-gw .fi .a2{animation:cbPing 2.4s var(--ease-o) infinite}
@keyframes cbPing{0%{opacity:.9;transform:scale(.6)}100%{opacity:0;transform:scale(1.6)}}
.cb-ft.run .f-ct .fi .a1{animation:cbSl 3.2s ease-in-out infinite}
.cb-ft.run .f-ct .fi .a2{animation:cbSl 3.2s ease-in-out .5s infinite reverse}
.cb-ft.run .f-ct .fi .a3{animation:cbSl 3.2s ease-in-out 1s infinite}
@keyframes cbSl{0%,100%{transform:translateX(-4px)}50%{transform:translateX(4px)}}
.cb-ft .f-in .fi .a1,.cb-ft .f-in .fi .a2,.cb-ft .f-in .fi .a3{transform-origin:bottom}
.cb-ft.run .f-in .fi .a1{animation:cbBar 2.6s cubic-bezier(.3,1.4,.5,1) infinite}
.cb-ft.run .f-in .fi .a2{animation:cbBar 2.6s cubic-bezier(.3,1.4,.5,1) .15s infinite}
.cb-ft.run .f-in .fi .a3{animation:cbBar 2.6s cubic-bezier(.3,1.4,.5,1) .3s infinite}
@keyframes cbBar{0%{transform:scaleY(.2)}40%,100%{transform:scaleY(1)}}
.cb-ft.run .f-dp .fi .a1{animation:cbSpin 6s linear infinite}
.cb-ft.run .f-zt .fi .a1{animation:cbZap 2.2s var(--ease-o) infinite}
@keyframes cbZap{0%,100%{opacity:.35;transform:scale(.9)}20%{opacity:1;transform:scale(1.15)}40%{opacity:1;transform:scale(1)}}
.cb-ft.run .f-zt .fi .a2{animation:cbPing 2.2s var(--ease-o) infinite}
.cb-ft.run .f-nc .fi .a1{animation:cbScan 2.4s ease-in-out infinite}
@keyframes cbScan{0%,100%{transform:translateY(-7px)}50%{transform:translateY(7px)}}
.cb-ft .ft:hover .fi svg{animation-duration:.9s}
.cb-ft .ft .fi{transition:transform .5s cubic-bezier(.3,1.6,.5,1)}
.cb-ft .ft:hover .fi{transform:rotate(-6deg) scale(1.08)}

/* key benefits */
.cb-kb{margin-top:34px}
.kb-h{margin-bottom:12px}
.kb-g{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
@media(max-width:1000px){.kb-g{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:520px){.kb-g{grid-template-columns:1fr}}
.kb{display:flex;flex-direction:column;padding:18px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s);transition:box-shadow .3s,border-color .3s}
.kb:hover{border-color:#1565D8;box-shadow:var(--sh)}
.kb h3{font:800 16.5px var(--f-disp);color:var(--ink);margin:12px 0 5px}
.kb p{font-size:13px;line-height:1.55;color:var(--text);margin-bottom:12px}
.kt{display:flex;flex-wrap:wrap;gap:5px;margin-top:auto}
.kt span{display:inline-flex;align-items:center;gap:5px;font:600 10.5px var(--f-mono);color:#1565D8;background:var(--chip);border-radius:99px;padding:3px 8px}
html[data-theme="dark"] .kt span{color:#7fb0ff}
.kt svg{width:11px;height:11px}
.kv{position:relative;height:104px;border-radius:14px;background:#041E42;display:grid;place-items:center;overflow:hidden}
html[data-theme="dark"] .kv{background:#050d22}
.kv svg{height:92px;width:auto;overflow:visible}
.kv>b{position:absolute;left:50%;top:50%;transform:translate(-50%,-62%);font:800 26px/1 var(--f-disp);color:#fff;font-variant-numeric:tabular-nums}
.kv>small{position:absolute;left:0;right:0;bottom:8px;text-align:center;font:600 9px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:#9fb6de}
.k-ml circle{fill:none;stroke-width:5;stroke-linecap:round;stroke-dasharray:1 1;stroke-dashoffset:1;transform:rotate(-90deg);transform-origin:60px 60px;transition:stroke-dashoffset 1.3s cubic-bezier(.3,1,.4,1)}
.k-ml .r1{stroke:#5FE08D}.k-ml .r2{stroke:#7fb0ff;transition-delay:.25s}.k-ml .r3{stroke:#FF8C1A;transition-delay:.5s}
.k-ml.in circle{stroke-dashoffset:.12}
.k-ml.in.run .r3{animation:cbRot 14s linear infinite}
.k-ml.in.run .r2{animation:cbRot 10s linear infinite reverse}
@keyframes cbRot{from{transform:rotate(-90deg)}to{transform:rotate(270deg)}}
.k-ml .kv>b{transform:translate(-50%,-50%)}.k-ml .kv>small{bottom:6px}
.gauge svg{height:74px;margin-top:-8px}
.gauge path{fill:none;stroke-width:9;stroke-linecap:round}
.gauge .ga{stroke:rgba(255,255,255,.08)}
.gauge .gr{stroke:#c0392b}.gauge .go{stroke:#FF8C1A}.gauge .gg{stroke:#16a34a}
.gauge .nd{transform-origin:60px 70px;transform:rotate(-70deg);transition:transform 1.6s cubic-bezier(.3,1.6,.5,1) .3s}
.gauge .nd path{stroke:#fff;stroke-width:3}
.gauge .nd circle{fill:#fff}
.k-rr.in .gauge .nd{transform:rotate(58deg)}
.k-rr.in.run .gauge .nd{animation:cbNd 4s ease-in-out 2s infinite}
@keyframes cbNd{0%,100%{transform:rotate(58deg)}50%{transform:rotate(50deg)}}
.brw{display:flex;flex-direction:column;align-items:stretch;justify-content:center;padding:6px 12px;place-items:initial}
.brw .bh{display:flex;gap:4px;margin-bottom:4px}
.brw .bh i{width:6px;height:6px;border-radius:50%;background:#2b4d8a}
.brw ul{list-style:none;display:flex;flex-direction:column;gap:3px}
.brw li{position:relative;font:500 9.5px/1.45 var(--f-mono);color:#cfe0ff;padding:1px 8px;border-radius:6px;background:rgba(127,176,255,.08);opacity:0;transform:translateX(-8px);transition:opacity .4s,transform .5s var(--ease-o)}
.brw li:before{content:"\u2713";display:inline-block;width:12px;color:#5FE08D;font-weight:700}
.brw li.no:before{content:"\u2715";color:#ff5a4a}
.brw li.no:after{content:"";position:absolute;left:22px;right:8px;top:50%;height:1.5px;background:#ff5a4a;transform:scaleX(0);transform-origin:left;transition:transform .5s var(--ease-o)}
.k-sb.in .brw li{opacity:1;transform:none}
.k-sb.in .brw li:nth-child(2){transition-delay:.25s}.k-sb.in .brw li:nth-child(3){transition-delay:.5s}.k-sb.in .brw li:nth-child(4){transition-delay:.75s}
.k-sb.in .brw li.no:after{transform:scaleX(1);transition-delay:1.1s}
.k-sb.in .brw li.no{color:#ff9a8f}
.kv.sc svg{height:84px}
.kv.sc .ln{fill:none;stroke:#7fb0ff;stroke-width:1.5;stroke-dasharray:1 1;stroke-dashoffset:1;transition:stroke-dashoffset 1.2s var(--ease-o) .2s;opacity:.6}
.kv.sc .h{fill:#1565D8;stroke:#7fb0ff;stroke-width:2}
.kv.sc .s{fill:#0C3E8F;stroke:#7fb0ff;stroke-width:1.5;transform-box:fill-box;transform-origin:center;transform:scale(0);transition:transform .6s cubic-bezier(.3,1.7,.5,1)}
.k-sc.in .kv.sc .ln{stroke-dashoffset:0}
.k-sc.in .kv.sc .s{transform:none}
.k-sc.in .kv.sc .s2{transition-delay:.25s}.k-sc.in .kv.sc .s3{transition-delay:.5s}.k-sc.in .kv.sc .s4{transition-delay:.75s}
.k-sc.in.run .kv.sc .s{animation:cbSiteP 3s ease-in-out 1.4s infinite}
.k-sc.in.run .kv.sc .s2{animation-delay:2.1s}.k-sc.in.run .kv.sc .s3{animation-delay:2.8s}.k-sc.in.run .kv.sc .s4{animation-delay:3.5s}
@keyframes cbSiteP{0%,100%{fill:#0C3E8F}20%{fill:#16a34a}}
.kv.sc>b{transform:translate(-50%,-50%);font-size:13px!important;top:50%!important}
.kv.sc>small{bottom:4px!important}

/* ===================== HOW (sticky) ===================== */
.cb-jr{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.18fr);gap:34px;align-items:start}
.jr-st{list-style:none;display:flex;flex-direction:column;padding:8vh 0 14vh}
.jr-st li{position:relative;min-height:54vh;display:flex;flex-direction:column;justify-content:center;padding:18px 0 18px 60px;opacity:.36;transition:opacity .45s}
.jr-st li.on{opacity:1}
.jr-st li .sn{position:absolute;left:0;top:50%;margin-top:-22px;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;font:700 14px var(--f-mono);background:var(--surface-2);border:1.5px solid var(--line-2);color:var(--muted);transition:background .4s,color .4s,border-color .4s,transform .5s cubic-bezier(.3,1.6,.5,1)}
.jr-st li.on .sn{background:#1565D8;border-color:#1565D8;color:#fff;transform:scale(1.08)}
.jr-st li.hot .sn{box-shadow:0 0 0 6px rgba(21,101,216,.16)}
.jr-st small{font:600 11px var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:#F57C00;margin-bottom:4px}
html[data-theme="dark"] .jr-st small{color:#FFB15C}
.jr-st b{font:800 22px var(--f-disp);color:var(--ink);margin-bottom:6px;letter-spacing:-.01em}
.jr-st p{font-size:15px;line-height:1.7;color:var(--text);margin-bottom:12px}
.jr-st em{display:inline-flex;align-self:flex-start;align-items:center;gap:6px;font:600 11.5px var(--f-mono);font-style:normal;color:#1565D8;background:var(--chip);border-radius:99px;padding:5px 11px}
html[data-theme="dark"] .jr-st em{color:#7fb0ff}
.jr-st em svg{width:13px;height:13px}
.jr-mc{display:none}
.jr-v{position:sticky;top:96px;display:grid;grid-template-columns:116px minmax(0,1fr);gap:14px}
.jr-rail{position:relative;height:min(520px,calc(100vh - 130px));display:flex;flex-direction:column;justify-content:space-between;padding:26px 0}
.jr-rail .tk{position:absolute;left:9px;top:32px;bottom:32px;width:3px;border-radius:3px;background:var(--line)}
.jr-rail .tk i{position:absolute;inset:0;border-radius:3px;background:#1565D8;transform-origin:top;transform:scaleY(0)}
.jr-rail b{position:relative;display:flex;align-items:center;gap:10px;font:600 10.5px var(--f-mono);letter-spacing:.05em;text-transform:uppercase;color:var(--muted);transition:color .35s}
.jr-rail b:before{content:"";width:21px;height:21px;border-radius:50%;background:var(--surface);border:2px solid var(--line-2);box-sizing:border-box;flex-shrink:0;transition:background .35s,border-color .35s,transform .5s cubic-bezier(.3,1.6,.5,1),box-shadow .35s}
.jr-rail b.on{color:var(--ink)}
.jr-rail b.on:before{background:#1565D8;border-color:#1565D8}
.jr-rail b.hot{color:#1565D8}
html[data-theme="dark"] .jr-rail b.hot{color:#7fb0ff}
.jr-rail b.hot:before{transform:scale(1.25);box-shadow:0 0 0 5px rgba(21,101,216,.18)}
.jr-in{position:relative;height:min(520px,calc(100vh - 130px));border-radius:22px;background:#041E42;border:1px solid rgba(127,176,255,.2);box-shadow:var(--sh-l);overflow:hidden}
html[data-theme="dark"] .jr-in{background:#050d22}
.jr-in:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(127,176,255,.16) 1px,transparent 1.2px);background-size:18px 18px;opacity:.55}
.jr-in canvas{position:absolute;inset:0;width:100%;height:100%}
.jr-hd{position:absolute;left:18px;right:18px;top:16px;z-index:2;display:flex;align-items:center;gap:10px}
.jr-hd .st{font:600 10.5px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:#9fb6de;background:rgba(127,176,255,.1);border:1px solid rgba(127,176,255,.2);border-radius:99px;padding:4px 10px;white-space:nowrap}
.jr-hd b{font:800 18px var(--f-disp);color:#fff;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.jr-hd b.sw,.jr-cap.sw{animation:cbSwap .5s var(--ease-o)}
.jr-hd em{margin-left:auto;font:500 10px var(--f-mono);font-style:normal;color:#7f93ba;white-space:nowrap}
.jr-cap{position:absolute;left:16px;right:16px;bottom:16px;z-index:2;display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:13px;background:rgba(7,20,48,.88);border:1px solid rgba(127,176,255,.25)}
.jr-cap i{width:32px;height:32px;border-radius:9px;background:#FF8C1A;color:#fff;display:grid;place-items:center;flex-shrink:0}
.jr-cap i svg{width:16px;height:16px}
.jr-cap b{display:block;font:700 13px var(--f-disp);color:#fff}
.jr-cap small{display:block;font:500 10.5px var(--f-mono);color:#9fb6de}
@media(max-width:900px){
  .cb-jr{grid-template-columns:1fr}
  .jr-v{display:none}
  .jr-st{padding:0;gap:16px}
  .jr-st li{min-height:0;opacity:1;padding:18px;border:1px solid var(--line);border-radius:18px;background:var(--surface);box-shadow:var(--sh-s)}
  .jr-st li .sn{position:static;margin:0 0 10px;width:38px;height:38px}
  .jr-st li .sn,.jr-st li.on .sn{transform:none;background:#1565D8;border-color:#1565D8;color:#fff;box-shadow:none!important}
  .jr-mc{display:block;width:100%;height:200px;margin-top:14px;border-radius:14px;background:#041E42}
  html[data-theme="dark"] .jr-mc{background:#050d22}
}
.cb-six{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;margin-top:26px}
@media(max-width:1100px){.cb-six{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:560px){.cb-six{grid-template-columns:repeat(2,minmax(0,1fr))}}
.cb-six>div{display:flex;flex-direction:column;gap:4px;padding:14px;border-radius:16px;background:var(--surface);border:1px solid var(--line);opacity:0;transform:translateY(14px);transition:opacity .5s var(--ease-o),transform .7s cubic-bezier(.3,1.4,.5,1),border-color .3s;transition-delay:calc(var(--k)*90ms)}
.cb-six.in>div{opacity:1;transform:none}
.cb-six>div:hover{border-color:#1565D8}
.cb-six i{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:var(--chip);color:#1565D8;margin-bottom:4px;transition:transform .45s cubic-bezier(.3,1.6,.5,1)}
html[data-theme="dark"] .cb-six i{color:#7fb0ff}
.cb-six>div:hover i{transform:translateY(-3px) rotate(-8deg)}
.cb-six i svg{width:17px;height:17px}
.cb-six b{font:700 13.5px var(--f-disp);color:var(--ink)}
.cb-six span{font-size:12px;line-height:1.45;color:var(--muted)}

/* ===================== HARDWARE ===================== */
.cb-hw{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:22px;align-items:start}
@media(max-width:1000px){.cb-hw{grid-template-columns:1fr}}
.dx{background:#041E42;border:1px solid rgba(127,176,255,.2);border-radius:22px;padding:16px;color:#fff;box-shadow:var(--sh-l);min-width:0}
html[data-theme="dark"] .dx{background:#050d22}
.dx-t{position:relative;display:inline-flex;gap:2px;padding:4px;border-radius:99px;background:rgba(127,176,255,.1);border:1px solid rgba(127,176,255,.2)}
.dx-t button{position:relative;z-index:1;border:0;background:none;color:#9fb6de;font:600 12px var(--f-disp);padding:7px 14px;border-radius:99px;cursor:pointer;transition:color .3s}
.dx-t button.on{color:#fff}
.dx-t .ul{position:absolute;left:0;top:4px;bottom:4px;border-radius:99px;background:#1565D8;transition:transform .5s cubic-bezier(.3,1.4,.5,1),width .5s cubic-bezier(.3,1.4,.5,1)}
.dx-st{position:relative;height:300px;margin-top:8px;perspective:1100px;touch-action:pan-y;cursor:grab;user-select:none}
.dx-st.drag{cursor:grabbing}
.dx-st:before{content:"";position:absolute;left:10%;right:10%;top:12%;bottom:18%;border-radius:50%;background:radial-gradient(closest-side,rgba(40,100,230,.35),transparent);pointer-events:none}
.dx-card{position:absolute;left:4%;right:4%;top:6%;bottom:16%;transform-style:preserve-3d;will-change:transform}
.dx-f{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;backface-visibility:hidden;-webkit-backface-visibility:hidden}
.dx-f.bk1{transform:rotateY(180deg)}
.dx-f img{display:block;width:100%;height:auto;max-height:100%;object-fit:contain;pointer-events:none;filter:drop-shadow(0 22px 26px rgba(0,0,0,.55))}
.dx-f .ib2{position:relative;width:100%}
.dx .hs{position:absolute;left:var(--x);top:var(--y);width:24px;height:24px;margin:-12px 0 0 -12px;border-radius:50%;border:2px solid #fff;background:#FF8C1A;color:#fff;display:grid;place-items:center;cursor:pointer;box-shadow:0 0 0 0 rgba(255,140,26,.6);animation:cbHs 2.2s var(--ease-o) infinite;transition:transform .3s cubic-bezier(.3,1.6,.5,1),background .3s;z-index:2}
.dx .hs svg{width:12px;height:12px;transition:transform .35s}
.dx .hs:hover{transform:scale(1.18)}
.dx .hs.on{background:#1565D8;animation:none;box-shadow:0 0 0 5px rgba(21,101,216,.35)}
.dx .hs.on svg{transform:rotate(45deg)}
.dx .hs .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
@keyframes cbHs{0%{box-shadow:0 0 0 0 rgba(255,140,26,.65)}70%{box-shadow:0 0 0 12px rgba(255,140,26,0)}100%{box-shadow:0 0 0 0 rgba(255,140,26,0)}}
.dx-sh{position:absolute;left:18%;right:18%;bottom:8%;height:18px;border-radius:50%;background:rgba(0,0,0,.45);transform:scaleX(var(--sx,1));transition:transform .2s}
.dx-hint{position:absolute;right:6px;bottom:0;display:inline-flex;align-items:center;gap:5px;font:600 10px var(--f-mono);color:#7f93ba;transition:opacity .4s}
.dx-hint svg{width:12px;height:12px}
.dx-hint.gone{opacity:0}
.dx-pop{display:flex;gap:11px;align-items:center;padding:11px 12px;border-radius:14px;background:rgba(127,176,255,.08);border:1px solid rgba(127,176,255,.25);min-height:64px}
.dx-pop i{width:36px;height:36px;border-radius:10px;background:#FF8C1A;color:#fff;display:grid;place-items:center;flex-shrink:0}
.dx-pop i svg{width:18px;height:18px}
.dx-pop span{min-width:0}
.dx-pop small{display:block;font:600 10px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:#FFB15C}
.dx-pop b{display:block;font:700 14px var(--f-disp);color:#fff}
.dx-pop em{display:block;font:500 11.5px/1.45 var(--f-body);font-style:normal;color:#b9c9e2}
.dx-pop.sw>*{animation:cbSwap .45s var(--ease-o)}
.dx-bd{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}
.dx-bd span{display:inline-flex;align-items:center;gap:6px;font:600 10.5px var(--f-mono);color:#cfe0ff;background:rgba(127,176,255,.1);border:1px solid rgba(127,176,255,.2);border-radius:99px;padding:5px 10px}
.dx-bd svg{width:13px;height:13px;color:#7fb0ff}
.sp-w{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:18px;box-shadow:var(--sh-s);min-width:0}
.sp-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.sp-h em{font:600 11px var(--f-mono);font-style:normal;color:var(--muted)}
.sp-t{display:flex;flex-direction:column}
.sp-t>div{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.3fr);gap:10px;padding:8px 8px;border-radius:10px;border-bottom:1px solid var(--line);opacity:0;transform:translateX(16px);transition:opacity .45s var(--ease-o),transform .6s cubic-bezier(.3,1.4,.5,1),background .3s;transition-delay:calc(var(--k)*55ms)}
.sp-w.in .sp-t>div{opacity:1;transform:none}
.sp-t>div:last-child{border-bottom:0}
.sp-t>div.hl{background:var(--chip)}
.sp-t dt{display:flex;align-items:center;gap:8px;font:600 12.5px var(--f-disp);color:var(--ink)}
.sp-t dt svg{width:15px;height:15px;color:#1565D8;flex-shrink:0}
html[data-theme="dark"] .sp-t dt svg{color:#7fb0ff}
.sp-t dd{font-size:12.5px;line-height:1.5;color:var(--text)}
.sp-t .tb{display:block;height:6px;border-radius:99px;background:var(--line);overflow:hidden;margin-top:5px}
.sp-t .tb i{display:block;height:100%;width:100%;border-radius:99px;background:#1565D8;transform-origin:left;transform:scaleX(0);transition:transform 1.4s cubic-bezier(.3,1.2,.5,1) .6s}
.sp-t .tp:nth-child(7) .tb i{background:#FF8C1A}.sp-t .tp:nth-child(8) .tb i{background:#16a34a}
.sp-w.in .sp-t .tb i{transform:scaleX(var(--w))}
.sp-n{font:500 11px var(--f-mono);color:var(--muted);margin-top:10px}

/* ===================== SIMULATOR ===================== */
.cb-sim{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.35fr);border:1px solid var(--line);border-radius:22px;overflow:hidden;background:var(--surface);box-shadow:var(--sh-s)}
@media(max-width:980px){.cb-sim{grid-template-columns:1fr}}
.sm-in{padding:20px;display:flex;flex-direction:column;gap:12px}
.sm-k{font:600 11px var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.sm-ev{display:grid;grid-template-columns:1fr;gap:7px}
@media(max-width:980px) and (min-width:560px){.sm-ev{grid-template-columns:1fr 1fr}}
.sm-ev button{display:flex;align-items:center;gap:11px;text-align:left;border:1.5px solid var(--line-2);background:var(--surface);border-radius:13px;padding:9px 11px;cursor:pointer;color:var(--text);transition:border-color .2s,background .2s,transform .3s cubic-bezier(.3,1.6,.5,1),box-shadow .3s}
.sm-ev button:hover{transform:translateX(3px);border-color:var(--line-2)}
.sm-ev button i{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:var(--chip);color:#1565D8;flex-shrink:0;transition:transform .45s cubic-bezier(.3,1.6,.5,1),background .3s,color .3s}
html[data-theme="dark"] .sm-ev button i{color:#7fb0ff}
.sm-ev button i svg{width:17px;height:17px}
.sm-ev button b{display:block;font:700 13.5px var(--f-disp);color:var(--ink)}
.sm-ev button small{display:block;font-size:11.5px;color:var(--muted)}
.sm-ev button.on{border-color:#1565D8;background:var(--chip);box-shadow:0 0 0 3px rgba(21,101,216,.1)}
.sm-ev button.on i{background:#1565D8;color:#fff;transform:scale(1.08) rotate(-6deg)}
#smGo.pl{animation:cbBump .4s var(--ease-o)}
.sm-out{background:#041E42;color:#fff;padding:20px 22px;display:flex;flex-direction:column;gap:14px;min-width:0}
html[data-theme="dark"] .sm-out{background:#050916}
.sm-pipe{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;padding:4px 0 2px}
.sm-pipe .pn{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;text-align:center;gap:5px;min-width:0}
.sm-pipe .pi{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:#0D1F47;border:1.5px solid rgba(127,176,255,.3);color:#cfe0ff;transition:background .35s,border-color .35s,transform .45s cubic-bezier(.3,1.6,.5,1),box-shadow .35s}
.sm-pipe .pi svg{width:22px;height:22px}
.sm-pipe .x2 .pi{width:56px;height:56px;margin-top:-4px;background:#1565D8;border-color:#7fb0ff}
.sm-pipe .pn.hit .pi{transform:scale(1.12);border-color:#7fb0ff;box-shadow:0 0 0 5px rgba(127,176,255,.18)}
.sm-pipe .pn.bad .pi{background:#c0392b;border-color:#ff8a80;box-shadow:0 0 0 6px rgba(192,57,43,.25)}
.sm-pipe .pn.ok .pi{background:#16a34a;border-color:#5FE08D}
.sm-pipe .pn.dim{opacity:.35}
.sm-pipe b{font:700 12px var(--f-disp);color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.sm-pipe small{font:500 10px var(--f-mono);color:#9fb6de;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.sm-pipe .ln{position:absolute;left:12.5%;right:12.5%;top:27px;height:2px;background:rgba(127,176,255,.18);border-radius:2px;overflow:hidden}
.sm-pipe .ln i{display:block;height:100%;width:100%;background:#7fb0ff;transform-origin:left;transform:scaleX(0)}
.sm-pipe .ln i.bad{background:#ff5a4a}
.sm-pipe .pk{position:absolute;left:12.5%;top:22px;width:12px;height:12px;margin-left:-6px;border-radius:50%;background:#fff;box-shadow:0 0 12px 4px rgba(127,176,255,.8);opacity:0;z-index:2}
.sm-pipe .pk.bad{background:#ffb3a8;box-shadow:0 0 14px 5px rgba(255,90,74,.85)}
.sm-pipe .pk.boom{animation:cbBoom .7s var(--ease-o) forwards}
@keyframes cbBoom{0%{transform:scale(1);opacity:1}100%{transform:scale(3.4);opacity:0}}
.sm-md{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}
.sm-md span{display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 4px;border-radius:11px;background:#0B1730;border:1px solid #23375e;font:600 9.5px var(--f-mono);color:#7f93ba;text-align:center;transition:background .3s,border-color .3s,color .3s,transform .4s cubic-bezier(.3,1.6,.5,1)}
.sm-md span svg{width:16px;height:16px}
.sm-md b{font-weight:600;line-height:1.2}
.sm-md span.chk{color:#fff;border-color:#7fb0ff;background:#0C3E8F;transform:translateY(-3px)}
.sm-md span.pass{color:#8ff0b2;border-color:rgba(95,224,141,.5);background:rgba(22,163,74,.14)}
.sm-md span.stop{color:#fff;border-color:#ff8a80;background:#c0392b;transform:translateY(-3px) scale(1.05);animation:cbShk .4s}
@keyframes cbShk{25%{margin-left:-3px}75%{margin-left:3px}}
@media(max-width:560px){.sm-md{grid-template-columns:repeat(3,minmax(0,1fr))}.sm-pipe .pi{width:40px;height:40px}.sm-pipe .x2 .pi{width:46px;height:46px}.sm-pipe .ln{top:23px}.sm-pipe .pk{top:18px}}
.sm-vd{border-radius:14px;padding:12px 14px;background:rgba(127,176,255,.08);border:1px solid rgba(127,176,255,.22);transition:background .35s,border-color .35s}
.sm-vd.ok{background:rgba(22,163,74,.14);border-color:rgba(95,224,141,.5)}
.sm-vd.bad{background:rgba(192,57,43,.16);border-color:rgba(255,138,128,.55)}
.sm-vd .vt{display:flex;align-items:center;gap:9px;margin-bottom:8px}
.sm-vd .vt i{width:30px;height:30px;border-radius:9px;background:#1565D8;display:grid;place-items:center;flex-shrink:0}
.sm-vd.ok .vt i{background:#16a34a}.sm-vd.bad .vt i{background:#c0392b}
.sm-vd .vt i svg{width:16px;height:16px}
.sm-vd .vt b{font:800 17px var(--f-disp);color:#fff}
.sm-vd.pop .vt{animation:cbSwap .45s var(--ease-o)}
.sm-vd .vg{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:10px}
@media(max-width:560px){.sm-vd .vg{grid-template-columns:1fr}}
.sm-vd .vg small{display:block;font:600 9.5px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#9fb6de}
.sm-vd .vg b{display:block;font:500 12.5px/1.45 var(--f-body);color:#e6efff}
.sm-lg{border-radius:13px;background:#030a1c;border:1px solid rgba(127,176,255,.16);padding:10px 12px}
.sm-lg .lh2{display:flex;justify-content:space-between;gap:8px;margin-bottom:6px;font:600 10px var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:#9fb6de}
.sm-lg .lh2 span{display:inline-flex;align-items:center;gap:5px}
.sm-lg .lh2 svg{width:12px;height:12px}
.sm-lg .lh2 em{font-style:normal;color:#cfe0ff;text-transform:none;letter-spacing:0}
.sm-lg ol{list-style:none;display:flex;flex-direction:column;gap:3px;max-height:96px;overflow:hidden}
.sm-lg li{display:flex;gap:8px;font:500 10.5px var(--f-mono);color:#cfe0ff;animation:cbSwap .4s var(--ease-o)}
.sm-lg li.ph{color:#7f93ba}
.sm-lg li i{font-style:normal;font-weight:700;flex-shrink:0}
.sm-lg li i.g{color:#5FE08D}.sm-lg li i.r{color:#ff5a4a}

/* ===================== COMPARE ===================== */
.cb-cmp .tbl th small{display:block;font:500 10.5px var(--f-mono);color:var(--muted);text-transform:none;letter-spacing:0;margin-top:2px}
.cb-cmp .tbl th.hl small{color:inherit;opacity:.85}
.cb-cmp td:first-child{display:flex;align-items:center;gap:10px;font-weight:600;color:var(--ink)}
.cb-cmp td:first-child i{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;background:var(--chip);color:#1565D8;flex-shrink:0}
html[data-theme="dark"] .cb-cmp td:first-child i{color:#7fb0ff}
.cb-cmp td:first-child i svg{width:15px;height:15px}
.cb-cmp td{text-align:center}
.cb-cmp td:first-child{text-align:left}
.cb-cmp em{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;font-style:normal;font-weight:800;font-size:13px;color:#fff;transform:scale(0)}
.cb-cmp em.y{background:#16a34a}.cb-cmp em.n2{background:#c0392b}
.cb-cmp .pt{display:inline-block;font:600 11.5px var(--f-mono);color:var(--muted);opacity:0;transform:translateY(6px)}
.cb-cmp tbody tr{opacity:0;transform:translateX(-14px)}
.cb-cmp.in tbody tr{animation:cbRow .6s var(--ease-o) forwards;animation-delay:calc(var(--k)*140ms + .1s)}
.cb-cmp.in em{animation:cbPop .5s cubic-bezier(.3,1.6,.5,1) forwards;animation-delay:calc(var(--k)*140ms + .45s)}
.cb-cmp.in td:nth-child(3) em,.cb-cmp.in td:nth-child(3) .pt{animation-delay:calc(var(--k)*140ms + .6s)}
.cb-cmp.in td:nth-child(4) em{animation-delay:calc(var(--k)*140ms + .75s)}
.cb-cmp.in .pt{animation:cbFadeUp .5s var(--ease-o) forwards}
@keyframes cbRow{to{opacity:1;transform:none}}
@keyframes cbFadeUp{to{opacity:1;transform:none}}
.cb-cmp tbody tr:hover td{background:var(--surface-2)}
.cb-cmp tbody tr:hover td.hl{background:var(--chip)}
.cb-cn{font:500 11px var(--f-mono);color:var(--muted);margin-top:10px}
@media(max-width:700px){.cb-cmp .tbl{min-width:620px}}

/* ===================== IDEAL ===================== */
.cb-id{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}
@media(max-width:1000px){.cb-id{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:560px){.cb-id{grid-template-columns:repeat(2,minmax(0,1fr))}}
.cb-id .it{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:3px;padding:14px;border-radius:16px;background:var(--surface);border:1px solid var(--line);overflow:hidden;opacity:0;transform:translateY(18px) scale(.96);transition:opacity .5s var(--ease-o),transform .7s cubic-bezier(.3,1.5,.5,1),border-color .3s,box-shadow .3s;transition-delay:calc(var(--k)*50ms)}
.cb-id.in .it{opacity:1;transform:none}
.cb-id .it:after{content:"";position:absolute;left:14px;right:14px;bottom:0;height:3px;border-radius:3px 3px 0 0;background:#1565D8;transform:scaleX(.18);transform-origin:left;transition:transform .45s var(--ease-o)}
.cb-id .it:hover{border-color:#1565D8;box-shadow:var(--sh);transform:translateY(-4px);transition-delay:0s}
.cb-id .it:hover:after{transform:scaleX(1)}
.cb-id i{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;background:var(--chip);color:#1565D8;margin-bottom:6px;transition:transform .45s cubic-bezier(.3,1.6,.5,1),background .3s,color .3s}
html[data-theme="dark"] .cb-id i{color:#7fb0ff}
.cb-id i svg{width:19px;height:19px}
.cb-id .it:hover i{transform:rotate(-8deg) scale(1.1);background:#1565D8;color:#fff}
.cb-id b{font:700 13.5px/1.3 var(--f-disp);color:var(--ink)}
.cb-id span{font-size:11.5px;color:var(--muted)}

/* ===================== PARTNERS ===================== */
.cb-ms{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:18px;align-items:stretch}
@media(max-width:900px){.cb-ms{grid-template-columns:1fr}}
.ms-map{position:relative;min-height:540px;border-radius:22px;background:#041E42;border:1px solid rgba(127,176,255,.2);overflow:hidden;box-shadow:var(--sh-l)}
html[data-theme="dark"] .ms-map{background:#050d22}
@media(max-width:560px){.ms-map{min-height:430px}}
.ms-map canvas{position:absolute;inset:0;width:100%;height:100%}
.ms-hd{position:absolute;left:16px;right:16px;top:14px;display:flex;justify-content:space-between;align-items:center;gap:8px;z-index:2}
.ms-hd .st{font:700 12px var(--f-disp);color:#fff;background:rgba(21,101,216,.35);border:1px solid rgba(127,176,255,.4);border-radius:99px;padding:5px 12px}
.ms-hd .st.sw{animation:cbSwap .45s var(--ease-o)}
.ms-hd em{font:500 10px var(--f-mono);font-style:normal;color:#7f93ba}
.ms-ft{position:absolute;left:14px;bottom:14px;display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:13px;background:rgba(7,20,48,.88);border:1px solid rgba(127,176,255,.25);z-index:2;max-width:calc(100% - 28px)}
.ms-ft i{width:30px;height:30px;border-radius:9px;background:#1565D8;color:#fff;display:grid;place-items:center;flex-shrink:0}
.ms-ft i svg{width:15px;height:15px}
.ms-ft b{display:block;font:700 12.5px var(--f-disp);color:#fff}
.ms-ft small{display:block;font:500 10px var(--f-mono);color:#9fb6de}
.ms-l{list-style:none;display:flex;flex-direction:column;gap:8px}
.ms-l li{position:relative;display:flex;gap:12px;align-items:center;padding:12px 14px;border-radius:15px;background:var(--surface);border:1px solid var(--line);cursor:pointer;overflow:hidden;transition:border-color .3s,box-shadow .3s,transform .35s var(--ease-o)}
.ms-l li:hover{transform:translateX(4px)}
.ms-l li.on{border-color:#1565D8;box-shadow:var(--sh)}
.ms-l li>i{width:36px;height:36px;border-radius:10px;display:grid;place-items:center;background:var(--chip);color:#1565D8;flex-shrink:0;transition:background .3s,color .3s,transform .45s cubic-bezier(.3,1.6,.5,1)}
html[data-theme="dark"] .ms-l li>i{color:#7fb0ff}
.ms-l li.on>i{background:#1565D8;color:#fff;transform:scale(1.08)}
.ms-l li>i svg{width:17px;height:17px}
.ms-l b{display:block;font:700 14px var(--f-disp);color:var(--ink)}
.ms-l small{display:block;font-size:12px;color:var(--muted)}
.ms-l u{position:absolute;left:0;bottom:0;height:3px;width:100%;background:#FF8C1A;transform:scaleX(0);transform-origin:left}
.ms-l li.on u{animation:cbProg var(--dur,3.6s) linear forwards}
.cb-ms.paused .ms-l li.on u{animation-play-state:paused}
@keyframes cbProg{to{transform:scaleX(1)}}
.cb-pb{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-top:16px;padding:14px 16px;border-radius:16px;background:var(--surface-2);border:1px dashed var(--line-2)}
.cb-pb>span{display:inline-flex;align-items:center;gap:9px;font-size:14px;color:var(--text)}
.cb-pb>span svg{width:18px;height:18px;color:#1565D8}
.cb-pb b{color:var(--ink)}

/* ===================== PRICING ===================== */
.cb-tm{position:relative;display:inline-flex;flex-wrap:wrap;gap:2px;padding:5px;border-radius:14px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s);margin-bottom:18px}
.cb-tm button{position:relative;z-index:1;border:0;background:none;cursor:pointer;font:700 13.5px var(--f-disp);color:var(--muted);padding:9px 16px;border-radius:10px;display:flex;flex-direction:column;align-items:center;transition:color .3s}
.cb-tm button small{font:600 10px var(--f-mono);color:#16a34a}
.cb-tm button.on{color:#fff}
.cb-tm button.on small{color:#c9f7d8}
.cb-tm .ul{position:absolute;left:0;top:5px;height:calc(100% - 10px);border-radius:10px;background:#1565D8;box-shadow:0 8px 20px -8px rgba(21,101,216,.8);transition:transform .5s cubic-bezier(.3,1.4,.5,1),width .5s cubic-bezier(.3,1.4,.5,1)}
.cb-pr{display:grid;grid-template-columns:360px 1fr;gap:20px;margin-bottom:20px;align-items:stretch}
@media(max-width:1060px){.cb-pr{grid-template-columns:1fr}}
.ez-card .ez-ms .cb-g{width:22px;height:22px}
.cb-pl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
@media(max-width:620px){.cb-pl{grid-template-columns:1fr}}
.cb-pl .pc{position:relative;text-align:left;display:flex;flex-direction:column;gap:5px;background:var(--surface);border:1.5px solid var(--line);border-radius:18px;padding:16px;cursor:pointer;font:inherit;color:inherit;box-shadow:var(--sh-s);transition:border-color .25s,box-shadow .3s,background .25s;opacity:0;transform:translateY(16px)}
.cb-pl.in .pc{animation:cbPlIn .7s cubic-bezier(.3,1.4,.5,1) forwards;animation-delay:calc(var(--k)*110ms)}
@keyframes cbPlIn{to{opacity:1;transform:none}}
.cb-pl .pc:hover{border-color:var(--line-2)}
.cb-pl .pc.on{border-color:#1565D8;background:var(--chip);box-shadow:0 0 0 3px rgba(21,101,216,.12),var(--sh)}
.cb-pl .pc .fl{position:absolute;top:-1px;right:14px;font:700 9px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#fff;background:#FF8C1A;border-radius:0 0 7px 7px;padding:3px 8px}
.cb-pl .pc .pn{display:flex;align-items:center;gap:10px}
.cb-pl .pc .pn i{width:36px;height:36px;border-radius:11px;color:#fff;display:grid;place-items:center;flex-shrink:0;background:#1565D8}
.cb-pl .pc.k1 .pn i{background:#0C3E8F}.cb-pl .pc.k2 .pn i{background:#16a34a}.cb-pl .pc.k3 .pn i{background:#FF8C1A}
.cb-pl .pc .pn i svg{width:18px;height:18px}
.cb-pl .pc .pn b{display:block;font:800 16.5px var(--f-disp);color:var(--ink)}
.cb-pl .pc .pn small{display:block;font:600 11px var(--f-mono);color:#1565D8}
html[data-theme="dark"] .cb-pl .pc .pn small{color:#7fb0ff}
.cb-pl .pc .pr{font:800 27px var(--f-disp);color:var(--ink);letter-spacing:-.02em;margin-top:4px;font-variant-numeric:tabular-nums}
.cb-pl .pc .pr small{font:500 11px var(--f-mono);color:var(--muted);letter-spacing:0}
.cb-pl .pc .py{font:500 11.5px var(--f-mono);color:var(--muted)}
.cb-pl .pc .svp{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;font:700 11px var(--f-mono);color:#16a34a;background:#e4f7ec;border-radius:99px;padding:3px 9px;min-height:22px}
html[data-theme="dark"] .cb-pl .pc .svp{background:rgba(22,163,74,.16);color:#5FE08D}
.cb-pl .pc .svp.lo{color:#c2410c;background:#fff3e0}
html[data-theme="dark"] .cb-pl .pc .svp.lo{color:#FFB15C;background:rgba(255,140,26,.14)}
.cb-pl .pc .svp.nil{color:var(--muted);background:var(--surface-2)}
.cb-pl .pc .svp.sw{animation:cbSwap .45s var(--ease-o)}
.cb-pl .pc .ck2{margin-top:auto;padding-top:8px;font:700 12.5px var(--f-disp);color:#1565D8}
html[data-theme="dark"] .cb-pl .pc .ck2{color:#7fb0ff}
.cb-pl .pc .mt{display:block;height:5px;border-radius:99px;background:var(--line);overflow:hidden;margin-top:4px}
.cb-pl .pc .mt i{display:block;height:100%;width:100%;background:#1565D8;transform-origin:left;transform:scaleX(var(--u,0));transition:transform .9s cubic-bezier(.3,1.3,.5,1)}
.cb-ex{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.6fr);gap:14px;margin-bottom:24px}
@media(max-width:900px){.cb-ex{grid-template-columns:1fr}}
.hwc{display:flex;align-items:center;gap:14px;padding:16px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s)}
.hwc .hi{width:44px;height:44px;border-radius:12px;background:#041E42;color:#fff;display:grid;place-items:center;flex-shrink:0}
.hwc .hi svg{width:22px;height:22px}
.hwc .ht{flex:1;min-width:0}
.hwc .ht small{display:block;font:600 10px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.hwc .ht b{display:block;font:700 14px/1.3 var(--f-disp);color:var(--ink)}
.hwc .ht em{display:block;font:500 11.5px var(--f-body);font-style:normal;color:var(--muted)}
.hwc .hp{text-align:right}
.hwc .hp b{display:block;font:800 22px var(--f-disp);color:var(--ink)}
.hwc .hp small{font:500 10.5px var(--f-mono);color:var(--muted)}
.spc{padding:14px 16px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s)}
.spc .sh3{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:10px}
.spc .sh3 em{font:500 10.5px var(--f-mono);font-style:normal;color:var(--muted)}
.spc .sg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
@media(max-width:620px){.spc .sg{grid-template-columns:repeat(2,minmax(0,1fr))}}
.spc .sg>div{display:flex;flex-direction:column;gap:3px;padding:10px;border-radius:12px;background:var(--surface-2);border:1.5px solid transparent;transition:border-color .3s,background .3s,transform .45s cubic-bezier(.3,1.6,.5,1)}
.spc .sg>div.on{border-color:#1565D8;background:var(--chip);transform:translateY(-3px)}
.spc .sg i{width:26px;height:26px;border-radius:8px;display:grid;place-items:center;background:var(--chip);color:#1565D8}
html[data-theme="dark"] .spc .sg i{color:#7fb0ff}
.spc .sg i svg{width:14px;height:14px}
.spc .sg span{font-size:12px;color:var(--text)}
.spc .sg b{font:800 17px var(--f-disp);color:var(--ink)}
.spc .sg b:after{content:" / month";font:500 10px var(--f-mono);color:var(--muted)}
#configure>*{min-width:0}
#configure .seg button{padding:9px 6px}
#configure .fld .lb,#configure .fld>label{display:flex;flex-wrap:wrap;justify-content:space-between;gap:2px 10px;font-weight:600;font-size:14px;color:var(--ink);margin-bottom:9px}
#configure .fld .lb small,#configure .fld>label small{font:500 12px var(--f-mono);color:#1565D8}
html[data-theme="dark"] #configure .fld .lb small,html[data-theme="dark"] #configure .fld>label small{color:#7fb0ff}
#configure .tgl{align-items:flex-start;border:1px solid var(--line);border-radius:12px;padding:12px 14px;background:var(--surface-2)}
#configure .tgl .sw{margin-top:2px}
#configure .tgl small{display:block;font-weight:500;font-size:12px;color:var(--muted);margin-top:3px;line-height:1.45}
#configure .tgl b{color:var(--blue);font-family:var(--f-mono);font-size:13px;margin-left:4px}
html[data-theme="dark"] #configure .tgl b{color:#7fb0ff}
#configure .seg small{display:block;font:500 10px var(--f-mono);opacity:.8}
.cb-ps button.sug{box-shadow:inset 0 0 0 1.5px #FF8C1A}
.seats{display:grid;grid-template-columns:auto 1fr;gap:18px;align-items:center}
@media(max-width:480px){.seats{grid-template-columns:1fr}}
.c-hw{font-size:12px;color:var(--muted)}
.c-hw b{color:var(--ink);font-family:var(--f-mono)}
.cbands{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.cbands button{border:1px solid var(--line-2);background:var(--surface);border-radius:99px;padding:4px 11px;font:600 11.5px var(--f-mono);color:var(--muted);cursor:pointer;transition:border-color .2s,color .2s,transform .25s var(--ease-o)}
.cbands button:hover{transform:translateY(-2px);color:var(--ink)}
.cbands button.on{border-color:#1565D8;color:#1565D8;background:var(--chip)}
html[data-theme="dark"] .cbands button.on{color:#7fb0ff}
.c-min{display:none;gap:8px;align-items:center;margin-top:10px;font-size:12.5px;color:#c0392b;background:#fdecec;border-radius:10px;padding:8px 10px}
html[data-theme="dark"] .c-min{background:rgba(192,57,43,.16);color:#ff9a8f}
.c-min.on{display:flex;animation:cbSwap .4s var(--ease-o)}
.c-min svg{width:14px;height:14px;flex-shrink:0}
.cout .crow small{display:block;font:500 10.5px var(--f-mono);color:#8F9BB6}
.cb-cb{margin:-4px 0 20px}
.cef-h{display:flex;justify-content:space-between;gap:8px;margin-bottom:10px}
.cef-h span{font-family:var(--f-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#B6C2DA}
.cef-h em{font-style:normal;font:600 11px var(--f-mono);color:#8ff0b2}
.cb-t{display:flex;height:14px;border-radius:99px;overflow:hidden;background:rgba(255,255,255,.08)}
.cb-t i{display:block;height:100%;width:0;transition:width .8s cubic-bezier(.3,1.2,.5,1)}
.cb-l{display:flex;flex-wrap:wrap;gap:4px 12px;margin-top:8px;font:500 10.5px var(--f-mono);color:#b9c9e2}
.cb-l span{display:inline-flex;align-items:center;gap:5px}
.cb-l i{width:8px;height:8px;border-radius:2px;display:inline-block}
.cb-tr svg{width:15px;height:15px}
.cout .ctot{font-variant-numeric:tabular-nums}
#oRows .crow{animation:cbSwap .35s var(--ease-o)}
@media(max-width:900px){.calc{grid-template-columns:1fr}}
@media(max-width:480px){.calc .cin,.calc .cout{padding:20px 16px}}

/* ===================== IN THE BOX + MADE IN INDIA ===================== */
.cb-ib{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:18px;align-items:stretch}
@media(max-width:900px){.cb-ib{grid-template-columns:1fr}}
.ib{padding:18px;border-radius:22px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s)}
.ib-h{display:flex;justify-content:space-between;align-items:center;gap:8px}
.ib-r{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line-2);background:var(--surface);color:var(--muted);font:600 11px var(--f-mono);border-radius:99px;padding:5px 11px;cursor:pointer;transition:color .2s,border-color .2s}
.ib-r:hover{color:#1565D8;border-color:#1565D8}
.ib-r svg{width:12px;height:12px}
.ib-s{position:relative;display:grid;grid-template-columns:130px 1fr;gap:16px;align-items:center;margin-top:14px;min-height:170px}
@media(max-width:520px){.ib-s{grid-template-columns:1fr}}
.bx{position:relative;width:120px;height:110px;margin:0 auto;perspective:260px}
.bx .body{position:absolute;left:0;right:0;bottom:0;height:78px;border-radius:6px 6px 10px 10px;background:#041E42;display:grid;place-items:center;box-shadow:0 16px 24px -14px rgba(4,30,66,.7)}
.bx .body b{font:800 11px var(--f-mono);letter-spacing:.14em;color:#7fb0ff}
.bx .body:before{content:"";position:absolute;left:0;right:0;top:12px;height:8px;background:#FF8C1A;opacity:.85}
.bx .body b{position:relative;top:8px}
.bx .lid{position:absolute;left:-3px;right:-3px;top:24px;height:22px;border-radius:5px;background:#0C3E8F;transform-origin:50% 0;transition:transform .9s cubic-bezier(.3,1.4,.5,1);z-index:2}
.ib.open .bx .lid{transform:rotateX(-78deg)}
.ib-i{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
@media(max-width:620px){.ib-i{grid-template-columns:repeat(2,minmax(0,1fr))}}
.ib-i>div{display:flex;flex-direction:column;align-items:center;text-align:center;gap:7px;padding:12px 6px;border-radius:14px;background:var(--surface-2);border:1px solid var(--line);opacity:0;transform:translate(-60px,30px) scale(.4) rotate(-12deg)}
.ib.open .ib-i>div{animation:cbOut .9s cubic-bezier(.3,1.5,.5,1) forwards;animation-delay:calc(var(--k)*180ms + .35s)}
@keyframes cbOut{to{opacity:1;transform:none}}
.ib-i i{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;background:var(--chip);color:#1565D8}
html[data-theme="dark"] .ib-i i{color:#7fb0ff}
.ib-i i svg{width:22px;height:22px}
.ib-i b{font:700 12px/1.3 var(--f-disp);color:var(--ink)}
.mi{position:relative;padding:22px;border-radius:22px;background:#041E42;color:#fff;overflow:hidden;box-shadow:var(--sh-l)}
html[data-theme="dark"] .mi{background:#050d22;border:1px solid rgba(127,176,255,.18)}
.mi-k{display:inline-flex;align-items:center;gap:7px;font:600 11px var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:#FFB15C}
.mi-k svg{width:14px;height:14px}
.mi h3{font:800 26px/1.15 var(--f-disp);color:#fff;margin:8px 0 8px;letter-spacing:-.01em}
.mi h3 span{color:#5FE08D}
.mi p{font-size:14px;line-height:1.6;color:#b9c9e2;margin-bottom:14px;max-width:46ch;position:relative;z-index:1}
.mi-s{position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:6px}
.mi-s span{display:inline-flex;align-items:center;gap:6px;font:600 11px var(--f-mono);color:#dbe7fb;background:rgba(127,176,255,.1);border:1px solid rgba(127,176,255,.22);border-radius:99px;padding:5px 10px;opacity:0;transform:translateY(8px);transition:opacity .45s var(--ease-o),transform .6s cubic-bezier(.3,1.5,.5,1)}
.mi.in .mi-s span{opacity:1;transform:none}
.mi.in .mi-s span:nth-child(2){transition-delay:.1s}.mi.in .mi-s span:nth-child(3){transition-delay:.2s}.mi.in .mi-s span:nth-child(4){transition-delay:.3s}.mi.in .mi-s span:nth-child(5){transition-delay:.4s}
.mi-s svg{width:13px;height:13px;color:#7fb0ff}
.mi-tri{position:absolute;right:-30px;top:-30px;width:150px;height:150px;display:flex;flex-direction:column;transform:rotate(-20deg);opacity:.25;pointer-events:none}
.mi-tri i{flex:1;transform:scaleX(0);transform-origin:left;transition:transform 1s var(--ease-o)}
.mi-tri i:nth-child(1){background:#FF8C1A}.mi-tri i:nth-child(2){background:#fff;transition-delay:.15s}.mi-tri i:nth-child(3){background:#16a34a;transition-delay:.3s}
.mi.in .mi-tri i{transform:none}

/* ===================== WHY + MARQUEE + CROSS-LINKS ===================== */
.cb-mq{margin-top:22px;display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center}
@media(max-width:700px){.cb-mq{grid-template-columns:1fr;gap:10px}}
.cb-mq .mq-l{font:600 11px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--muted);max-width:240px;line-height:1.6}
.cb-mq .mq-w{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.cb-mq .mq-m{display:flex;gap:10px;width:max-content;animation:cbMq 44s linear infinite}
.cb-mq .mq-w:hover .mq-m,.cb-mq.paused .mq-m{animation-play-state:paused}
.cb-mq .mq-m span{display:inline-flex;align-items:center;gap:7px;font:600 12.5px var(--f-body);color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:99px;padding:7px 13px 7px 9px;white-space:nowrap}
.cb-mq .mq-m span svg{width:15px;height:15px;color:#1565D8}
html[data-theme="dark"] .cb-mq .mq-m span svg{color:#7fb0ff}
@keyframes cbMq{to{transform:translateX(calc(-50% - 5px))}}
.cb-xs{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
@media(max-width:1000px){.cb-xs{grid-template-columns:1fr 1fr}}
@media(max-width:640px){.cb-xs{grid-template-columns:1fr}}
.cb-xs .xsib{display:flex;align-items:center;gap:14px;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:14px 16px;box-shadow:var(--sh-s);transition:transform .35s var(--ease-o),box-shadow .35s,border-color .3s}
.cb-xs .xsib:hover{transform:translateY(-4px);box-shadow:var(--sh);border-color:#1565D8}
.cb-xs .xi1 i{width:42px;height:42px;border-radius:12px;background:var(--chip);color:#1565D8;display:grid;place-items:center;transition:transform .4s var(--ease-o)}
.cb-xs .xi1.o i{background:#fff3e0;color:#F57C00}.cb-xs .xi1.g i{background:#e4f7ec;color:#16a34a}
html[data-theme="dark"] .cb-xs .xi1 i{background:var(--chip);color:#7fb0ff}html[data-theme="dark"] .cb-xs .xi1.o i{color:#FFB15C}html[data-theme="dark"] .cb-xs .xi1.g i{color:#5FE08D}
.cb-xs .xi1 svg{width:20px;height:20px}
.cb-xs .xsib:hover .xi1 i{transform:rotate(-8deg) scale(1.08)}
.cb-xs .xt{flex:1;min-width:0}
.cb-xs .xt small{display:block;font:500 10.5px var(--f-mono);color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.cb-xs .xt b{display:block;font:700 14.5px var(--f-disp);color:var(--ink)}
.cb-xs .xa{font-weight:700;font-size:12.5px;color:#1565D8;white-space:nowrap}
html[data-theme="dark"] .cb-xs .xa{color:#7fb0ff}
.cb-xs .xa .ar{display:inline-block;transition:transform .25s}
.cb-xs .xsib:hover .xa .ar{transform:translateX(4px)}

/* ===================== REDUCED MOTION ===================== */
@media(prefers-reduced-motion:reduce){
  .cbv *,.cb-sd *,.cb-kin .w,.fl-s,.fl-a i,.cb-mq .mq-m,.cb-cmp tbody tr,.cb-cmp em,.cb-cmp .pt,.cb-pl .pc,.cb-id .it,.cb-six>div,.sp-t>div,.sp-t .tb i,.ib-i>div,.cb-ft .fi *,.kb *,.dx .hs,.ms-l u,.mi *{animation:none!important;transition:none!important}
  .cb-kin .w,.fl-s,.cb-cmp tbody tr,.cb-cmp .pt,.cb-pl .pc,.cb-id .it,.cb-six>div,.sp-t>div,.ib-i>div{opacity:1!important;transform:none!important}
  .cb-cmp em{transform:none!important}
  .cb-sd path{stroke-dashoffset:0!important}
  .sp-t .tb i{transform:scaleX(var(--w))!important}
}

.cb-pl .pc .inc{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}
.cb-pl .pc .inc span{display:inline-flex;align-items:center;gap:5px;font:600 10.5px var(--f-mono);color:var(--muted);background:var(--surface-2);border:1px solid var(--line);border-radius:99px;padding:3px 8px}
.cb-pl .pc .inc svg{width:11px;height:11px;color:#1565D8}
html[data-theme="dark"] .cb-pl .pc .inc svg{color:#7fb0ff}
@media(max-width:560px){.cb-tm{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));width:100%}.cb-tm button{padding:8px 2px;font-size:12.5px}.cb-tm button small{font-size:9px}}
html[data-theme="dark"] .cb-cmp th.hl{color:#cfe0ff}
html[data-theme="dark"] .cb-cmp th.hl small{color:#9fb6de}

</style>

<style>
/* Embedded in the Angular site shell. Original Cybird CSS and animations above. */
html,body{min-height:0!important;height:auto!important;overflow:hidden!important}
body{margin:0}
#main>#why{padding-top:24px}
#why .mq-w:focus-within .mq-m{animation-play-state:paused}
.cybird-assurance .assurance-heading{margin:0 0 14px;color:#0066ff;font:700 13px/1.5 var(--f-mono);letter-spacing:.1em;text-transform:uppercase}
.cybird-assurance .assurance-intro{margin:0 0 18px;font-size:15px;line-height:1.8;color:var(--text)}
.cybird-security-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 32px;margin:0}
.cybird-security-grid>div{display:grid;grid-template-columns:minmax(110px,.8fr) minmax(0,1.5fr);gap:16px;padding:12px 0;border-bottom:1px dashed #cbdcf7;font-size:12.5px;line-height:1.6}
.cybird-security-grid dt{font-weight:600;color:var(--muted)}
.cybird-security-grid dd{margin:0;text-align:right;font-weight:600;color:var(--ink)}
.cybird-assurance .assurance-note{margin:14px 0 26px;color:var(--muted);font-size:12px;line-height:1.7}
.cybird-assurance .dband{padding:14px;margin-bottom:26px}
.cybird-assurance .dband>div{min-width:0;padding:20px 22px}
.cybird-assurance .dband .n{top:auto;bottom:8px;right:18px;font-size:36px;color:rgba(255,255,255,.07);pointer-events:none}
.cybird-assurance .dband>div:nth-child(3n+2)>i{color:#c5b5ff;background:rgba(139,105,230,.16)}
.cybird-assurance .dband>div:nth-child(3n)>i{color:#5ee5cf;background:rgba(34,200,180,.13)}
.cybird-review-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.cybird-review{position:relative;display:flex;flex-direction:column;align-items:center;min-width:0;padding:26px 22px;border:1px solid #cfdef6;border-radius:18px;background:var(--surface);box-shadow:0 10px 28px -20px rgba(4,30,66,.24);overflow:hidden}
.cybird-review .review-mark{position:absolute;right:0;top:0;display:grid;place-items:center;width:56px;height:56px;border-bottom-left-radius:22px;background:linear-gradient(135deg,#1565d8,#0c3e8f);color:#fff;font:700 30px Georgia,serif}
.cybird-review .review-avatar{display:grid;place-items:center;width:64px;height:64px;margin-bottom:14px;border-radius:50%;background:linear-gradient(135deg,#1565d8,#7042ed);color:#fff;font:700 20px var(--f-body)}
.cybird-review h4{margin:0 0 4px;text-align:center;font:700 15px/1.5 var(--f-body);color:var(--ink)}
.cybird-review .review-role{margin:0;min-height:36px;text-align:center;color:var(--muted);font-size:12px;line-height:1.5}
.cybird-review .review-stars{margin:12px 0 16px;color:#ff8a00;letter-spacing:2px;font-size:17px;line-height:1}
.cybird-review blockquote{width:100%;margin:0;color:var(--muted);font-size:13px;line-height:1.8}
.cybird-review blockquote p{margin:0}
@media(max-width:900px){.cybird-review-grid{grid-template-columns:1fr}.cybird-review{padding:24px}.cybird-review .review-role{min-height:0}}
@media(max-width:620px){.cybird-security-grid{grid-template-columns:1fr}.cybird-assurance .dband>div{padding:18px 12px}.cybird-security-grid>div{gap:12px}}
</style><style>
/* The host page owns scrolling; keep desktop steps compact and mobile cards natural. */
@media(min-width:901px){
  .jr-st{padding:0 0 140px;gap:20px}
  .jr-st li{min-height:clamp(240px,calc(var(--cybird-vh,8px)*32),320px);padding-block:24px}
  .jr-v{position:relative;top:0;will-change:transform}
}
.jr-rail,.jr-in{height:min(520px,calc(var(--cybird-vh,8px)*100 - 130px))}
</style></head>
<body data-preserve-copy>
<!-- Cybird page content and animation copied from user-supplied cybird_1.html. Site shell, enquiries and cart integrate with the Angular application. -->
<main id="main">
<!-- ================= HERO ================= -->
<section class="hero lh" id="cbHero" data-product="Cybird X2 Security Appliance">
  <div class="hero-bg" aria-hidden="true"><div class="lh-grid"></div><div class="lh-dots"></div><span class="lh-aur a1"></span><span class="lh-aur a2"></span><div class="lh-scan"></div><canvas class="cb-bg" id="cbBg"></canvas><canvas class="lh-net"></canvas></div>
  <div class="wrap">
    <div class="crumb" data-in="1"><a href="/" target="_top">Home</a><span class="sep">\u203A</span><a href="/security" target="_top">Security</a><span class="sep">\u203A</span><span class="c">Cybird</span></div>
    <div class="hero-grid">
      <div>
        <h1 class="lh-title" data-in="1"><span class="x">Xcell</span><span class="brd">Secure</span><span class="dv">|</span><span class="nm">Cybird X2 Security Platform</span></h1>
        <p class="lh-tag" data-in="2">One device. Total protection.</p>
        <p class="lh-tag2" data-in="2">Cybird X2 puts business Wi-Fi, a firewall, web filtering and cloud management in one box for small offices, CAs, CSs and law firms. XcellHost is Cybird's National Distributor and supplies, sets up and supports it across India.</p>
        <div class="lh-type" data-in="3" data-words='["Business Wi-Fi with a login for every person","Phishing sites blocked before they load","Guests online, never on your office network","Every branch on one cloud dashboard"]'><span class="tw"></span><span class="cur"></span></div>
        <div class="lh-points" data-in="3"><div><span class="tk" data-gl="wifi"></span>Secure business Wi-Fi 6</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>Firewall &amp; secure web gateway</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg></span>Per-user access (WPA2-Enterprise)</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg></span>App, bandwidth &amp; web controls</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg></span>Cloud-managed \xB7 zero-touch setup</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></span>Bundles from \u20B914,999 + GST</div></div>
        <div class="lh-ctas" data-in="4">
          <a href="#pricing" class="btn btn-orange cb-mag">View plans <span class="ar">\u2192</span></a>
          <a href="#simulate" class="btn btn-gl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg> Try the threat simulator</a>
          <a href="https://wa.me/918657032540" target="_blank" rel="noopener" class="btn btn-gl"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg> WhatsApp</a>
        </div>
        <div class="cb-anc" data-in="4"><a href="#features"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>Features</a><a href="#how"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>How it works</a><a href="#hardware"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>Hardware</a><a href="#configure"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>Build your bundle</a></div>
        <div class="lh-ask" data-in="5" data-q="Explain the Cybird X2 security appliance (Cybird by Netrakshak Technologies, made in India) for Indian small businesses, chartered accountants, company secretaries and law firms \u2014 secure business Wi-Fi 6 with per-user WPA2-Enterprise access, advanced firewall, secure web gateway and DNS filtering, application and bandwidth controls, network access control, cloud management and zero touch provisioning \u2014 and why to buy it from XcellHost (xcellhost.top), Cybird's National Distributor in India, with bundles from \u20B914,999 + GST"><span class="k"><b>\u2726</b>Ask AI about Cybird X2</span><span class="chips"><a data-ai="chatgpt" href="#"><i></i>ChatGPT</a><a data-ai="claude" href="#"><i></i>Claude</a><a data-ai="perplexity" href="#"><i></i>Perplexity</a><a data-ai="google" href="#"><i></i>Google AI</a><a data-ai="copilot" href="#"><i></i>Copilot</a></span></div>
      </div>
      <div class="stage" data-in="4">
        <span class="lh-orbit"></span><span class="lh-orbit o2"></span>
        <div class="lh-chip" style="top:-36px;right:-22px"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg></i><span>Made in India \xB7 Securing India<small>Cybird by Netrakshak Technologies</small></span></div>
        <div class="lh-chip c2 cb-c2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg></i><span>Wi-Fi 6 \xB7 up to 900 Mbps firewall*<small>*depends on services enabled</small></span></div>
        <div class="lh-tilt"><div class="cbv" id="cbv" role="img" aria-label="Animated illustration with sample data, in seven acts: the Cybird X2 powers up and its PWR, SYS, WAN, LAN and Wi-Fi lights come on in order while the antennas send out Wi-Fi rings; staff laptops and phones, a printer, an IP camera and guest devices connect, each with its own identity, staff on one network and guests on another; a phishing link and a malware download are blocked at the web gateway; app control slows a streaming app and bandwidth rebalances; the Cybird Cloud dashboard lights up with alerts and reports; two branch offices join the cloud; the scene settles on One device. Total protection.">
          <div class="cbv-h"><b><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></i><span>Cybird X2 \xB7 office network</span></b><span class="cbv-live" id="cbvLive">sample \xB7 power up</span></div>
          <div class="cbv-rail" id="cbvRail">
            <span>Power</span><span>Connect</span><span>Block</span><span>Control</span><span>Cloud</span><span>Sites</span><span>Protect</span>
            <em class="tr"><b id="cbvFill"></b></em>
          </div>
          <div class="cbv-sc" id="cbvSc">
            <canvas id="cbvCv"></canvas>
            <span class="cbv-spot" id="cbvSpot"></span>
            <div class="cbv-fx" id="cbvFx">
              <div class="cbv-cd p-r" id="cbvId"><div class="dh"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg></i><span><small>Per-user Wi-Fi \xB7 WPA2-Enterprise</small><b>Who is on the network</b></span></div>
                <ul><li><em class="st">staff</em><span>priya \xB7 laptop</span><b>VLAN 10 \xB7 full access</b></li><li><em class="st">staff</em><span>arjun \xB7 phone</span><b>VLAN 10 \xB7 full access</b></li><li><em class="io">IoT</em><span>printer \xB7 camera</span><b>VLAN 30 \xB7 local only</b></li><li><em class="gu">guest</em><span>2 visitors</span><b>VLAN 99 \xB7 internet only</b></li></ul></div>
              <div class="cbv-cd p-r" id="cbvBl"><div class="dh"><i class="r"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></i><span><small>Secure web gateway \xB7 threat protection</small><b>Stopped at the gateway</b></span></div>
                <ul><li id="cbvB0"><em class="bk">blocked</em><span>bank-kyc-update.xyz</span><b>phishing \xB7 DNS filter</b></li><li id="cbvB1"><em class="bk">blocked</em><span>invoice_0412.pdf.exe</span><b>malware \xB7 download</b></li></ul></div>
              <div class="cbv-cd p-r" id="cbvAc"><div class="dh"><i class="o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg></i><span><small>Smart controls &amp; policies</small><b>Bandwidth by app</b></span></div>
                <div class="bw"><span>Business apps</span><i><b id="cbvW0"></b></i></div><div class="bw"><span>Video streaming</span><i><b id="cbvW1" class="o"></b></i></div><div class="bw"><span>Guest Wi-Fi</span><i><b id="cbvW2" class="p"></b></i></div>
                <span class="vd" id="cbvAcV">Streaming capped \xB7 work traffic first</span></div>
              <div class="cbv-cd p-r" id="cbvCl"><div class="dh"><i class="b"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg></i><span><small>Cybird Cloud \xB7 centralized</small><b>Alerts &amp; reports</b></span></div>
                <ul><li id="cbvC0"><em class="bk">alert</em><span>Phishing blocked</span><b>priya \xB7 laptop</b></li><li id="cbvC1"><em class="io">policy</em><span>Streaming capped</span><b>guest Wi-Fi</b></li><li id="cbvC2"><em class="st">report</em><span>Daily summary</span><b>ready</b></li></ul>
                <div class="sp" aria-hidden="true"><i style="--h:.35"></i><i style="--h:.55"></i><i style="--h:.4"></i><i style="--h:.7"></i><i style="--h:.5"></i><i style="--h:.85"></i><i style="--h:.62"></i></div></div>
              <div class="cbv-end" id="cbvEnd"><span class="ring"></span><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></i><span class="tx"><b>One device. Total protection.</b><small>Wi-Fi \xB7 firewall \xB7 web security \xB7 controls \xB7 cloud</small></span></div>
            </div>
          </div>
          <div class="cbv-kp" id="cbvKp">
            <div><span>Devices online</span><b id="cbvK0">0</b><em id="cbvD0">booting</em></div>
            <div><span>Threats blocked</span><b id="cbvK1">0</b><em id="cbvD1">gateway</em></div>
            <div><span>App policies</span><b id="cbvK2">0</b><em id="cbvD2">controls</em></div>
            <div><span>Sites managed</span><b id="cbvK3">1</b><em id="cbvD3">cloud</em></div>
          </div>
          <div class="cbv-lg"><span class="pr" id="cbvLgP">\u203A</span><code id="cbvLg">Cybird X2 \xB7 power on</code></div>
          <div class="cbv-tk" aria-hidden="true"><div class="tk-m" id="cbvTk"><span><i class="g"></i>priya \xB7 laptop \xB7 staff VLAN 10</span><span><i class="r"></i>bank-kyc-update.xyz \xB7 phishing \xB7 blocked</span><span><i class="b"></i>guest phone \xB7 VLAN 99 \xB7 internet only</span><span><i class="m"></i>video streaming \xB7 capped by policy</span><span><i class="g"></i>branch 2 \xB7 online \xB7 cloud-managed</span><span><i class="r"></i>invoice_0412.pdf.exe \xB7 malware \xB7 blocked</span><span><i class="g"></i>priya \xB7 laptop \xB7 staff VLAN 10</span><span><i class="r"></i>bank-kyc-update.xyz \xB7 phishing \xB7 blocked</span><span><i class="b"></i>guest phone \xB7 VLAN 99 \xB7 internet only</span><span><i class="m"></i>video streaming \xB7 capped by policy</span><span><i class="g"></i>branch 2 \xB7 online \xB7 cloud-managed</span><span><i class="r"></i>invoice_0412.pdf.exe \xB7 malware \xB7 blocked</span></div></div>
        </div></div>
        <div class="lh-powered cb-pw"><small>Powered by</small><span><span class="cb-g">C</span>Cybird</span><em>XcellHost \xB7 National Distributor</em></div>
        <img id="cbvImg" class="cb-src" alt="" src="data:image/webp;base64,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">
      </div>
    </div>
  </div>
</section>








<div class="lh-trust"><div class="wrap"><span>From <b data-pr="ess1">\u20B914,999</b> + GST / year</span><span><b>Wi-Fi 6</b> \xB7 dual-band</span><span>Firewall up to <b>900 Mbps*</b></span><span><b>Cloud-managed</b> \xB7 zero touch</span><span><b>GST</b> invoice in INR</span><span><b>Since 1999</b> \xB7 Mumbai</span></div></div>

<!-- ================= OVERVIEW ================= -->
<section class="sec" id="overview">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Overview</span><h2 class="cb-kin">Secure your business network \u2014 <span class="acc">with one box instead of five.</span></h2><p>Cybird X2 is an all-in-one network security platform: business Wi-Fi, advanced protection and clear visibility, managed from the cloud.</p></div>
    <div class="pp-cols rv">
      <p class="pp-ov">Most small offices run on the router their internet provider handed over: basic Wi-Fi, one shared password and little real security. <b>Cybird X2</b> replaces it with a business-grade platform \u2014 firewall, secure web gateway with DNS filtering, threat intelligence, application controls and Wi-Fi with a separate login for every employee and a separate network for guests. It is built by <b>Cybird (Netrakshak Technologies)</b> and made in India.</p>
      <p class="pp-ov">It is designed for the way SMBs, chartered accountants, company secretaries and lawyers actually work: client files, banking portals, Microsoft 365 or Google Workspace, visitors asking for Wi-Fi. <b>XcellHost is Cybird's National Distributor</b>: we supply the appliance and security bundle, help you set it up, bill you in rupees on a GST invoice and support you from Mumbai.</p>
    </div>
    <div class="cb-flow rv" id="cbFlow">
      <div class="fl-s" style="--k:0"><span class="fi" data-gl="wifi"></span><small>01 \xB7 connect</small><b>Business Wi-Fi</b><p>Fast, reliable Wi-Fi 6 with per-user access for staff and a separate network for guests.</p><div class="fl-c"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>per user</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>guests apart</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg>Wi-Fi 6</span></div></div>
      <div class="fl-a" aria-hidden="true"><i></i></div>
      <div class="fl-s" style="--k:1"><span class="fi o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><small>02 \xB7 protect</small><b>Multi-layer security</b><p>Firewall, web security, DNS filtering and threat intelligence stop phishing, malware and ransomware.</p><div class="fl-c"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>firewall</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>web gateway</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>DNS filter</span></div></div>
      <div class="fl-a" aria-hidden="true"><i></i></div>
      <div class="fl-s" style="--k:2"><span class="fi g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></span><small>03 \xB7 see &amp; manage</small><b>Visibility from the cloud</b><p>Real-time monitoring, alerts and reports for every site, managed from one cloud dashboard.</p><div class="fl-c"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>alerts</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>reports</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>cloud</span></div></div>
    </div>
    <div class="cb-for rv"><span class="k">Built for</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>SMBs</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>Chartered accountants</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>Company secretaries</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>Lawyers &amp; law firms</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>Branch offices</span></div>
  </div>
</section>

<!-- ================= FEATURES ================= -->
<section class="sec" id="features">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Features</span><h2 class="cb-kin">Eight capabilities, <span class="acc">one appliance on your desk.</span></h2><p>Everything an office network needs to stay online and stay safe \u2014 hover or tap a card to see how it shows up day to day.</p></div>
    <div class="cb-ft">
      <article class="ft rv cb-tl f-wifi" style="--k:0" tabindex="0"><span class="fi" data-gl="wifiA"></span><b>Secure Business Wi-Fi</b><small>Fast, reliable Wi-Fi with separate access for employees and guests.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>Staff sign in with their own credentials; visitors get internet only.</p></article>
      <article class="ft rv cb-tl f-fw" data-d="1" style="--k:1" tabindex="0"><span class="fi o" data-gl="wall"></span><b>Advanced Firewall</b><small>Blocks threats, prevents intrusions and protects your network.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Unwanted inbound connections never reach your PCs.</p></article>
      <article class="ft rv cb-tl f-gw" data-d="2" style="--k:2" tabindex="0"><span class="fi g" data-gl="globeA"></span><b>Secure Web Gateway</b><small>Filters malicious websites and blocks harmful content.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>A fake bank or KYC link is stopped at the DNS lookup.</p></article>
      <article class="ft rv cb-tl f-ct" data-d="3" style="--k:3" tabindex="0"><span class="fi n" data-gl="sliders"></span><b>Smart Controls &amp; Policies</b><small>User roles, bandwidth, app control and internet policies.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>Streaming waits; accounting and GST-portal traffic goes first.</p></article>
      <article class="ft rv cb-tl f-in" style="--k:4" tabindex="0"><span class="fi" data-gl="bars"></span><b>Insights &amp; Visibility</b><small>Real-time monitoring, alerts and actionable reports.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>See which device tried what, and when \u2014 in plain language.</p></article>
      <article class="ft rv cb-tl f-dp" data-d="1" style="--k:5" tabindex="0"><span class="fi o" data-gl="gear"></span><b>Easy to Deploy &amp; Manage</b><small>Cloud-managed platform for simple setup and centralized management.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>One dashboard for one office or many.</p></article>
      <article class="ft rv cb-tl f-zt" data-d="2" style="--k:6" tabindex="0"><span class="fi g" data-gl="ztp"></span><b>Zero Touch Provisioning</b><small>Automates device setup and deployment without manual configuration.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Plug it in at a new branch; it pulls its settings from the cloud.</p></article>
      <article class="ft rv cb-tl f-nc" data-d="3" style="--k:7" tabindex="0"><span class="fi n" data-gl="nac"></span><b>Network Access Control</b><small>Secures network access by verifying users, devices and permissions.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>An unknown device does not get on just because it has the password.</p></article>
    </div>

    <div class="cb-kb" id="benefits">
      <div class="kb-h rv"><span class="vt-k"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>Key benefits</span></div>
      <div class="kb-g">
        <article class="kb rv cb-tl k-ml" style="--k:0"><div class="kv" aria-hidden="true"><svg viewBox="0 0 120 120"><circle class="r3" cx="60" cy="60" r="52" pathLength="1"/><circle class="r2" cx="60" cy="60" r="40" pathLength="1"/><circle class="r1" cx="60" cy="60" r="28" pathLength="1"/></svg><b data-to="3">0</b><small>layers</small></div><h3>Multi-layer protection</h3><p>Defends against phishing, malware, ransomware and other cyber threats.</p><div class="kt"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>phishing</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg>malware</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>ransomware</span></div></article>
        <article class="kb rv cb-tl k-rr" data-d="1" style="--k:1"><div class="kv gauge" aria-hidden="true"><svg viewBox="0 0 120 80"><path class="ga" d="M12 70a48 48 0 0196 0" pathLength="1"/><path class="gr" d="M12 70a48 48 0 0130-44" /><path class="go" d="M42 26a48 48 0 0136 0"/><path class="gg" d="M78 26a48 48 0 0130 44"/><g class="nd"><path d="M60 70L60 30"/><circle cx="60" cy="70" r="5"/></g></svg><small>risk \u2193</small></div><h3>Reduced cyber risk</h3><p>Proactive threat detection and filtering keep your business safe.</p><div class="kt"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>detect</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>filter</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>stay safe</span></div></article>
        <article class="kb rv cb-tl k-sb" data-d="2" style="--k:2"><div class="kv brw" aria-hidden="true"><div class="bh"><i></i><i></i><i></i></div><ul><li class="ok">mail.office.com</li><li class="no">free-gift-claim.top</li><li class="ok">gst.gov.in</li><li class="no">secure-login-kyc.xyz</li></ul></div><h3>Safe browsing for users</h3><p>A secure and productive internet experience for every employee.</p><div class="kt"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>web filter</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>DNS</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>every user</span></div></article>
        <article class="kb rv cb-tl k-sc" data-d="3" style="--k:3"><div class="kv sc" aria-hidden="true"><svg viewBox="0 0 120 80"><path class="ln" d="M60 40L20 18M60 40L100 18M60 40L22 64M60 40L98 64" pathLength="1"/><circle class="h" cx="60" cy="40" r="9"/><circle class="s s1" cx="20" cy="18" r="6"/><circle class="s s2" cx="100" cy="18" r="6"/><circle class="s s3" cx="22" cy="64" r="6"/><circle class="s s4" cx="98" cy="64" r="6"/></svg><b data-to="4">0</b><small>environments</small></div><h3>Scalable for any environment</h3><p>One platform for the office, remote staff, multiple sites and growing businesses.</p><div class="kt"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>office</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 9.5V21h14V9.5"/></svg>remote</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>multi-site</span></div></article>
      </div>
    </div>
  </div>
</section>

<div class="cb-sd rv" aria-hidden="true"><svg viewBox="0 0 1200 40" preserveAspectRatio="none"><path d="M0 20H520c10 0 10-12 20-12s10 24 20 24 10-12 20-12H1200" pathLength="1"/></svg><i></i></div>

<!-- ================= HOW IT WORKS (sticky) ================= -->
<section class="sec" id="how">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">How Cybird works</span><h2 class="cb-kin">From the device in your hand <span class="acc">to the cloud that manages it \u2014 scroll through.</span></h2><p>The same thirty office devices travel through Cybird X2: onto secure Wi-Fi, through inspection, out to the internet, under cloud management, into your reports. Sample data.</p></div>
    <div class="cb-jr" id="cbJr">
      <ol class="jr-st" id="cbJrSt">
        <li data-k="0"><span class="sn">01</span><small>Your business network</small><b>Every device</b><p>Employees, laptops and desktops, mobile devices, printers and IoT, guests, IP phones and cameras \u2014 all of them need the network, and none of them should get more access than they need.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>Staff \xB7 devices \xB7 guests</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="1"><span class="sn">02</span><small>Secure Wi-Fi \xB7 per-user access</small><b>One login per person</b><p>WPA2-Enterprise gives each employee their own identity on the Wi-Fi. Staff, office devices and guests land on separate networks, so a visitor's phone never sees your file server.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>WPA2-Enterprise \xB7 VLANs</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="2"><span class="sn">03</span><small>Cybird X2 inspects</small><b>Checked on the way through</b><p>Traffic passes the firewall, the secure web gateway with DNS filtering, threat protection and application controls. Phishing, malware and harmful sites are stopped at the box.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Firewall \xB7 web \xB7 DNS \xB7 apps</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="3"><span class="sn">04</span><small>Secure internet connection</small><b>Out to the apps you use</b><p>Clean traffic reaches Microsoft 365, Google Workspace, cloud applications, web browsing, banking and finance portals and e-commerce sites.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>Secure internet</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="4"><span class="sn">05</span><small>Cybird Cloud</small><b>Managed from anywhere</b><p>Cybird Cloud gives centralized management and threat intelligence: settings, policies and updates for every site, from one place, any time.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>Centralized \xB7 threat intelligence</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="5"><span class="sn">06</span><small>Visibility &amp; insights</small><b>Reports you can act on</b><p>Real-time dashboards, alerts, reports and usage analytics show what happened on your network \u2014 who connected, what was blocked and where bandwidth went.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>Dashboards \xB7 alerts \xB7 reports</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
      </ol>
      <div class="jr-v" id="cbJrV">
        <div class="jr-rail" id="cbJrRail" aria-hidden="true"><span class="tk"><i id="cbJrFill"></i></span><b data-k="0">Devices</b><b data-k="1">Wi-Fi</b><b data-k="2">Inspect</b><b data-k="3">Internet</b><b data-k="4">Cloud</b><b data-k="5">Reports</b></div>
        <div class="jr-in" role="img" aria-label="Diagram that morphs as you scroll: thirty device dots sit in six groups, move onto staff, IoT and guest Wi-Fi networks, stream through the Cybird X2 where a few red threats stop, flow out to six internet destinations, rise into the Cybird Cloud and finally form report bars and a ring. Sample data.">
          <div class="jr-hd"><span class="st" id="cbJrN">Step 1 of 6</span><b id="cbJrT">Every device</b><em>sample data</em></div>
          <canvas id="cbJrCv"></canvas>
          <div class="jr-cap" id="cbJrCap"><i id="cbJrCi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg></i><span><b id="cbJrCb">Your business network</b><small id="cbJrCs">30 devices \xB7 6 kinds \xB7 staff and guests</small></span></div>
        </div>
      </div>
    </div>
    <div class="cb-six rv" id="cbSix">
      <div style="--k:0"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></i><b>Threat protection</b><span>Blocks malicious sites, phishing, malware and harmful downloads.</span></div>
      <div style="--k:1"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg></i><b>Web security</b><span>DNS filtering and safe browsing to protect users online.</span></div>
      <div style="--k:2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></i><b>Application controls</b><span>Manage and control apps for better productivity.</span></div>
      <div style="--k:3"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></i><b>Visibility &amp; insights</b><span>Real-time dashboards, reports, alerts and usage analytics.</span></div>
      <div style="--k:4"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg></i><b>User access</b><span>Per-user identities with roles and access policies.</span></div>
      <div style="--k:5"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg></i><b>Cloud managed</b><span>Manage all your sites from anywhere, any time.</span></div>
    </div>
  </div>
</section>

<!-- ================= HARDWARE EXPLORER ================= -->
<section class="sec" id="hardware">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Cybird X2 \xB7 hardware</span><h2 class="cb-kin">Turn it around. <span class="acc">Tap a port, light or antenna.</span></h2><p>Powerful protection built for small business: drag to rotate between the front and back of the Cybird X2, or tap a hotspot to see what it does.</p></div>
    <div class="cb-hw">
      <div class="dx rv" id="cbDx">
        <div class="dx-t" role="tablist" aria-label="View"><button type="button" class="on" data-v="0">Front view</button><button type="button" data-v="1">Back view</button><span class="ul" aria-hidden="true"></span></div>
        <div class="dx-st" id="cbDxSt">
          <div class="dx-card" id="cbDxC">
            <div class="dx-f fr0"><div class="ib2"><img src="data:image/webp;base64,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" alt="Cybird X2 front view: four antennas, Cybird logo, PWR, SYS, WAN, LAN and WIFI status lights and a USB port" width="640" height="252" draggable="false">
              <button type="button" class="hs" style="--x:19.5%;--y:6%" data-h="ant"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">Antennas</span></button>
              <button type="button" class="hs" style="--x:52%;--y:64%" data-h="led"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">Status lights</span></button>
              <button type="button" class="hs" style="--x:88.5%;--y:62%" data-h="usbf"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">USB port</span></button>
              <button type="button" class="hs" style="--x:30%;--y:58%" data-h="cpu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">Processor and memory</span></button>
            </div></div>
            <div class="dx-f bk1"><div class="ib2"><img src="data:image/webp;base64,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" alt="Cybird X2 back view: DC 12V power, reset, two USB 3.0, one WAN and four LAN ports" width="640" height="111" draggable="false">
              <button type="button" class="hs" style="--x:10%;--y:50%" data-h="dc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">DC power</span></button>
              <button type="button" class="hs" style="--x:17.5%;--y:50%" data-h="rst"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">Reset</span></button>
              <button type="button" class="hs" style="--x:26.5%;--y:50%" data-h="usb3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">USB 3.0</span></button>
              <button type="button" class="hs" style="--x:46.5%;--y:50%" data-h="wan"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">WAN port</span></button>
              <button type="button" class="hs" style="--x:70%;--y:50%" data-h="lan"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">LAN ports</span></button>
            </div></div>
          </div>
          <span class="dx-sh" aria-hidden="true"></span>
          <span class="dx-hint" id="cbDxHint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3"/></svg>drag to rotate</span>
        </div>
        <div class="dx-pop" id="cbDxP" aria-live="polite"><i id="cbDxPi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg></i><span><small id="cbDxPk">Wi-Fi</small><b id="cbDxPb">Dual-band 802.11ax Wi-Fi 6</b><em id="cbDxPe">2.4 GHz &amp; 5 GHz \xB7 2\xD72 MU-MIMO \xB7 up to 1200 Mbps</em></span></div>
        <div class="dx-bd"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>High-performance hardware</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>Multi-layer protection</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>Multi-WAN high availability</span><span data-gl2="wifi">Business Wi-Fi with per-user access</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>Cloud-managed, anywhere</span></div>
      </div>
      <div class="sp-w rv" data-d="1" id="cbSp">
        <div class="sp-h"><span class="vt-k"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>Technical specifications</span><em>Cybird X2</em></div>
        <dl class="sp-t" id="cbSpT">
          <div data-h="cpu" style="--k:0"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>Processor</dt><dd>MediaTek 1.3 GHz dual-core ARM</dd></div>
          <div data-h="cpu" style="--k:1"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="1.5"/><path d="M6 11v2M10 11v2M14 11v2M18 11v2M5 17v3M19 17v3"/></svg>Memory</dt><dd>1 GB DDR4</dd></div>
          <div data-h="cpu" style="--k:2"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>Storage</dt><dd>128 MB NAND flash</dd></div>
          <div data-h="lan" style="--k:3"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>Interfaces</dt><dd>1 \xD7 WAN 10/100/1000 Mbps<br>4 \xD7 LAN 10/100/1000 Mbps<br>2 \xD7 USB 3.0 \xB7 1 \xD7 console (optional)</dd></div>
          <div data-h="ant" style="--k:4"><dt data-gl2="wifi">Wi-Fi</dt><dd>Dual-band 802.11ax Wi-Fi 6 (2.4 &amp; 5 GHz)<br>2\xD72 MU-MIMO \xB7 up to 1200 Mbps</dd></div>
          <div class="tp" data-h="led" style="--k:5"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Firewall throughput</dt><dd>Up to 900 Mbps*<span class="tb"><i style="--w:.75"></i></span></dd></div>
          <div class="tp" data-h="wan" style="--k:6"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>VPN throughput (WireGuard)</dt><dd>Up to 300 Mbps*<span class="tb"><i style="--w:.25"></i></span></dd></div>
          <div class="tp" data-h="ant" style="--k:7"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg>Wi-Fi link rate</dt><dd>Up to 1200 Mbps<span class="tb"><i style="--w:1"></i></span></dd></div>
          <div data-h="dc" style="--k:8"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Power</dt><dd>DC 12 V / 2 A</dd></div>
          <div style="--k:9"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>Dimensions</dt><dd>200 mm (W) \xD7 120 mm (D) \xD7 35 mm (H)</dd></div>
          <div style="--k:10"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>Operating temperature</dt><dd>0 \xB0C to 40 \xB0C</dd></div>
          <div style="--k:11"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="13" rx="2"/><circle cx="12" cy="17" r="3"/><path d="M10.5 19.5L10 23l2-1 2 1-.5-3.5M7 7h10M7 10h6"/></svg>Certifications</dt><dd>CE, FCC, RoHS compliant</dd></div>
          <div style="--k:12"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>Warranty</dt><dd>1 year standard (extendable)</dd></div>
        </dl>
        <p class="sp-n">* Performance depends on enabled services, configuration and deployment conditions.</p>
      </div>
    </div>
  </div>
</section>

<!-- ================= THREAT SIMULATOR ================= -->
<section class="sec" id="simulate">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Threat simulator</span><h2 class="cb-kin">Pick an event. <span class="acc">Watch Cybird X2 handle it.</span></h2><p>A packet travels from the device through secure Wi-Fi into the Cybird X2, where each security layer checks it. The verdict shows which feature stepped in. Illustrative \u2014 your policies are set up with you.</p></div>
    <div class="cb-sim rv" id="cbSim">
      <div class="sm-in">
        <span class="sm-k">Choose what happens</span>
        <div class="sm-ev" id="smEvB" role="radiogroup" aria-label="Event">
          <button type="button" data-e="phish" class="on"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg></i><span><b>Phishing site</b><small>staff clicks a fake KYC link</small></span></button>
          <button type="button" data-e="mal"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg></i><span><b>Malware download</b><small>an "invoice" that is really an .exe</small></span></button>
          <button type="button" data-e="unk"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg></i><span><b>Unknown device joins</b><small>someone has the Wi-Fi password</small></span></button>
          <button type="button" data-e="gprn"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg></i><span><b>Guest tries office printer</b><small>visitor on guest Wi-Fi</small></span></button>
          <button type="button" data-e="app"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13-8z"/></svg></i><span><b>Staff opens a blocked app</b><small>streaming during work hours</small></span></button>
          <button type="button" data-e="ok"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></i><span><b>Normal work</b><small>opening Microsoft 365</small></span></button>
        </div>
        <button type="button" class="btn btn-orange btn-block cb-mag" id="smGo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg> Run it</button>
      </div>
      <div class="sm-out">
        <div class="sm-pipe" id="smPipe">
          <div class="pn" data-n="0"><span class="pi" id="smPI"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg></span><b id="smN0b">Staff laptop</b><small id="smN0">priya \xB7 VLAN 10</small></div>
          <div class="pn" data-n="1"><span class="pi" data-gl="wifi"></span><b>Secure Wi-Fi</b><small id="smN1">WPA2-Enterprise</small></div>
          <div class="pn x2" data-n="2"><span class="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></span><b>Cybird X2</b><small id="smN2">inspect</small></div>
          <div class="pn" data-n="3"><span class="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg></span><b id="smN3b">Internet</b><small id="smN3">destination</small></div>
          <span class="ln" aria-hidden="true"><i id="smLn"></i></span>
          <span class="pk" id="smPk" aria-hidden="true"></span>
        </div>
        <div class="sm-md" id="smMd"><span data-m="nac"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg><b>Access control</b></span><span data-m="fw"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><b>Firewall</b></span><span data-m="web"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg><b>Web &amp; DNS</b></span><span data-m="tp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg><b>Threat protection</b></span><span data-m="app"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg><b>App control</b></span></div>
        <div class="sm-vd" id="smVd" aria-live="polite">
          <span class="vt" id="smVt"><i id="smVi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></i><b id="smVb">Waiting</b></span>
          <div class="vg"><span><small>Handled by</small><b id="smVm">\u2014</b></span><span><small>What the user sees</small><b id="smVw">Press \u201CRun it\u201D.</b></span></div>
        </div>
        <div class="sm-lg"><div class="lh2"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>Event log \xB7 sample</span><em id="smTally">0 allowed \xB7 0 blocked</em></div><ol id="smLog"><li class="ph">No events yet.</li></ol></div>
      </div>
    </div>
  </div>
</section>

<!-- ================= COMPARISON ================= -->
<section class="sec" id="compare">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">How Cybird compares</span><h2 class="cb-kin">Enterprise-grade protection <span class="acc">without the enterprise stack.</span></h2><p>Cybird is an all-in-one security platform with Wi-Fi and controls. High-cost enterprise stacks need multiple products and complex setup; a basic ISP router gives you Wi-Fi and little security.</p></div>
    <div class="tbl-w cb-cmp rv" id="cbCmp">
      <table class="tbl">
        <thead><tr><th>Capability</th><th class="hl"><span class="cb-g sm">C</span> Cybird<small>All-in-one \xB7 Wi-Fi + controls</small></th><th>High-cost enterprise stacks<small>multiple products, complex setup</small></th><th>ISP router<small>basic Wi-Fi, limited security</small></th></tr></thead>
        <tbody>
          <tr style="--k:0"><td><i data-gl="wifi"></i>Reliable business Wi-Fi</td><td class="hl"><em class="y">\u2713</em></td><td><em class="y">\u2713</em></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:1"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg></i>Per-user Wi-Fi (WPA2-Enterprise)</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Yes, extra licence</span></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:2"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></i>Web security &amp; DNS protection</td><td class="hl"><em class="y">\u2713</em></td><td><em class="y">\u2713</em></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:3"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg></i>Threat protection</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Advanced, requires setup</span></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:4"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg></i>Application &amp; content controls</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Add-on tool</span></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:5"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></i>Visibility &amp; reporting</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Yes, complex dashboards</span></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:6"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg></i>Centralized management (cloud)</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Yes, high cost</span></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:7"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg></i>Easy deployment &amp; management</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Complex, IT intensive</span></td><td><em class="n2">\u2715</em></td></tr>
        </tbody>
      </table>
    </div>
    <p class="cb-cn rv">Comparison as published in the Cybird brochure.</p>
  </div>
</section>

<!-- ================= IDEAL FOR ================= -->
<section class="sec" id="ideal">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Ideal for businesses like yours</span><h2 class="cb-kin">Fifteen kinds of workplace, <span class="acc">one way to secure them.</span></h2><p>From a two-person CA practice to a chain of retail stores \u2014 if people and devices share a network, Cybird X2 is built for it.</p></div>
    <div class="cb-id rv" id="cbId">
      <div class="it" style="--k:0"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg></i><b>Small offices &amp; enterprises</b><span>CA, CS and law practices</span></div>
      <div class="it" style="--k:1"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 9.5V21h14V9.5"/></svg></i><b>Work from home</b><span>secure remote staff</span></div>
      <div class="it" style="--k:2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg></i><b>Schools &amp; colleges</b><span>students apart from staff</span></div>
      <div class="it" style="--k:3"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg></i><b>Retail stores &amp; chains</b><span>billing kept separate</span></div>
      <div class="it" style="--k:4"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"/></svg></i><b>Healthcare clinics</b><span>patient Wi-Fi apart</span></div>
      <div class="it" style="--k:5"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg></i><b>SMBs &amp; manufacturing</b><span>office and shop floor</span></div>
      <div class="it" style="--k:6"><i data-gl="wifi"></i><b>Caf\xE9s &amp; public Wi-Fi</b><span>guest access, filtered</span></div>
      <div class="it" style="--k:7"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .8-5.2 4.8L18 21l-6-3.5L6 21l1.2-6.9L2 9.3l7-.8z"/></svg></i><b>Hotels &amp; hospitality</b><span>guest Wi-Fi at scale</span></div>
      <div class="it" style="--k:8"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></i><b>Branch offices</b><span>one cloud, many sites</span></div>
      <div class="it" style="--k:9"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></i><b>Financial services</b><span>banking portals protected</span></div>
      <div class="it" style="--k:10"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg></i><b>Freelancers &amp; remote pros</b><span>small setup, real security</span></div>
      <div class="it" style="--k:11"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg></i><b>Construction sites</b><span>quick, temporary networks</span></div>
      <div class="it" style="--k:12"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg></i><b>E-commerce warehouses</b><span>scanners and staff online</span></div>
      <div class="it" style="--k:13"><i data-gl="pad"></i><b>Gaming networks</b><span>bandwidth under control</span></div>
      <div class="it" style="--k:14"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3l5 3-5 3-5-3 5-3zM17 3l5 3-5 3-5-3 5-3zM12 12l5 3-5 3-5-3 5-3z"/><path d="M2 6v5l5 3M22 6v5l-5 3M7 15v4l5 3 5-3v-4"/></svg></i><b>Logistics &amp; warehousing</b><span>devices across the floor</span></div>
    </div>
  </div>
</section>

<!-- ================= PARTNERS / MSP ================= -->
<section class="sec" id="partners">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Designed for IT partners &amp; MSPs</span><h2 class="cb-kin">Many customers, many sites \u2014 <span class="acc">one Cybird Cloud view.</span></h2><p>Simplify deployments, manage multiple sites and deliver secure connectivity with the Cybird Cloud platform. XcellHost works with IT partners across India as Cybird's National Distributor.</p></div>
    <div class="cb-ms rv" id="cbMs">
      <div class="ms-map"><canvas id="cbMsCv" role="img" aria-label="Stylised map of India with sample customer sites in many cities linked to Cybird Cloud; pulses show monitoring, an alert appears on one site and is resolved, and a new site joins by zero touch provisioning. Illustrative."></canvas>
        <div class="ms-hd"><span class="st" id="cbMsN">Centralized management</span><em>illustrative sites</em></div>
        <div class="ms-ft" id="cbMsF"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg></i><span><b id="cbMsFb">Cybird Cloud</b><small id="cbMsFs">every site, one dashboard</small></span></div>
      </div>
      <ol class="ms-l" id="cbMsL">
        <li data-m="0" class="on"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></i><span><b>Centralized management</b><small>Every customer and site in one console.</small></span><u></u></li>
        <li data-m="1"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></i><span><b>Multi-site visibility</b><small>See all locations and their status together.</small></span><u></u></li>
        <li data-m="2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg></i><span><b>Remote monitoring</b><small>Watch devices and traffic without a site visit.</small></span><u></u></li>
        <li data-m="3"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg></i><span><b>Smart alerts</b><small>Know when something needs attention.</small></span><u></u></li>
        <li data-m="4"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg></i><span><b>Simplified deployment</b><small>Zero touch provisioning for new sites.</small></span><u></u></li>
        <li data-m="5"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></i><span><b>Faster troubleshooting</b><small>Find and fix issues from the dashboard.</small></span><u></u></li>
      </ol>
    </div>
    <div class="cb-pb rv"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg><b>Become a Cybird partner</b> through XcellHost, the National Distributor</span><a href="#" class="btn btn-sm btn-orange cb-mag" data-open="xhCallback" data-topic="IT partner / MSP enquiry">Partner with us <span class="ar">\u2192</span></a></div>
  </div>
</section>

<!-- ================= PRICING ================= -->
<section class="sec" id="pricing">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Plans &amp; pricing</span><h2 class="cb-kin">Cybird security appliance bundles \u2014 <span class="acc">hardware + security, one price.</span></h2><p>Pick your team size and term. Longer terms cost less per year; the saving shown is calculated against buying one year at a time. All prices in INR, plus 18% GST.</p></div>
    <div class="cb-tm rv" id="cbTm" role="tablist" aria-label="Term"><button type="button" data-t="1" class="on">1 year</button><button type="button" data-t="2">2 years<small data-sv="2"></small></button><button type="button" data-t="3">3 years<small data-sv="3"></small></button><button type="button" data-t="5">5 years<small data-sv="5"></small></button><span class="ul" aria-hidden="true"></span></div>
    <div class="cb-pr">
      <div class="ez-card rv" id="pcard"><span class="ez-off">Free trial</span>
        <div class="ez-top"><span class="ez-ms"><span class="cb-g">C</span>Cybird</span><a class="ez-ext" href="#configure" aria-label="Configure"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg></a></div>
        <div class="ez-fam">XcellSecure \xB7 Cybird X2 bundle</div>
        <h3 id="pcName">Cybird Essentials</h3>
        <div class="ez-sku" id="pcSku">hardware + security bundle \xB7 up to 10 users</div>
        <div class="ez-row"><span>Term</span><b class="ez-from" id="pcTerm">1 year</b></div>
        <div class="ez-row"><span>Starting from</span><b class="ez-from" id="pcFrom">\u20B914,999 + GST</b></div>
        <div class="ez-gst">bundle \xB7 excl. GST</div>
        <div class="ez-pr"><span class="ez-tag m">Term price</span><span><span class="ez-amt" id="pcT">\u20B90</span></span></div>
        <div class="ez-pr"><span class="ez-tag y">Per year</span><span><span class="ez-amt" id="pcY">\u20B90</span> <small style="color:#9fb6de">/ yr</small></span></div>
        <div class="ez-save"><span id="pcSvL">vs paying yearly</span><b id="pcPill">\u2014</b></div>
        <div class="ez-cta"><a href="tel:+912267111555"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>Call now</a><a class="q" href="#" data-open="xhCallback" data-topic="Cybird \u2014 quotation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>Get quotation</a></div>
        <a href="#" class="ez-buy" style="display:block;text-align:center" data-open="xhCallback" data-topic="Cybird \u2014 free trial">Ask for a FREE trial \u2192</a>
        <div class="ez-gst" style="text-align:center;margin:10px 0 0">Brochure prices \xB7 INR + 18% GST</div>
      </div>
      <div class="cb-pl rv" id="cbPl" role="radiogroup" aria-label="Plan"></div>
    </div>
    <div class="cb-ex">
      <article class="hwc rv cb-tl"><span class="hi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg></span><span class="ht"><small>Customer hardware appliance</small><b>Cybird cyber security hardware appliance</b><em>Extra or additional appliance</em></span><span class="hp"><b data-pr="hw">\u20B916,999</b><small>one-time + GST</small></span></article>
      <div class="spc rv" data-d="1"><div class="sh3"><span class="vt-k"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>Optional support charges</span><em>per month \xB7 plus taxes</em></div>
        <div class="sg" id="cbSg">
          <div data-b="0" style="--k:0"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg></i><span>1 to 10 employees</span><b data-pr="s0">\u20B9999</b></div>
          <div data-b="1" style="--k:1"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg></i><span>10 to 24 employees</span><b data-pr="s1">\u20B91,499</b></div>
          <div data-b="2" style="--k:2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg></i><span>24 to 50 employees</span><b data-pr="s2">\u20B91,999</b></div>
          <div data-b="3" style="--k:3"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg></i><span>50 to 100 employees</span><b data-pr="s3">\u20B93,999</b></div>
        </div></div>
    </div>

    <div class="calc rv" id="configure">
      <div class="cin">
        <div class="fld"><label for="cEmp">Employees on the network <small id="cEmpL">8 employees</small></label>
          <div class="seats"><div class="stp"><button type="button" data-step="-1" aria-label="Fewer employees">\u2212</button><input type="number" id="cEmpN" min="1" max="100" value="8" aria-label="Employees"><button type="button" data-step="1" aria-label="More employees">+</button></div>
          <input class="rng" type="range" id="cEmp" min="1" max="100" step="1" value="8" aria-label="Employees slider"></div>
          <div class="cbands" id="cBands"><button type="button" data-g="5">5</button><button type="button" data-g="10">10</button><button type="button" data-g="20">20</button><button type="button" data-g="25">25</button><button type="button" data-g="40">40</button><button type="button" data-g="50">50</button><button type="button" data-g="75">75</button><button type="button" data-g="100">100</button></div></div>
        <div class="fld"><span class="lb">Plan <small id="cPlanL">suggested: Essentials</small></span>
          <div class="seg cb-ps" id="cPlan"><button data-v="ess" class="on">Essentials<small>\u2264 10</small></button><button data-v="plus">Plus<small>\u2264 25</small></button><button data-v="pro">Pro<small>\u2264 50</small></button><button data-v="max">Max<small>\u2264 100</small></button></div>
          <p class="c-min" id="cMin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg><span id="cMinT">This plan covers fewer users than your team.</span></p></div>
        <div class="fld"><span class="lb">Term <small id="cTermL">1 year</small></span>
          <div class="seg" id="cTerm"><button data-v="1" class="on">1 year</button><button data-v="2">2 years<small data-sv="2"></small></button><button data-v="3">3 years<small data-sv="3"></small></button><button data-v="5">5 years<small data-sv="5"></small></button></div></div>
        <label class="tgl" for="cSup"><input type="checkbox" id="cSup"><span class="sw"></span><span>Optional support plan <b id="cSupP">\u20B9999</b> / month<small id="cSupS">1 to 10 employees bracket \xB7 billed for every month of the term.</small></span></label>
        <div class="fld"><label for="cHwN">Additional hardware appliances <small id="cHwL">none</small></label>
          <div class="seats"><div class="stp"><button type="button" data-step="-1" aria-label="Fewer appliances">\u2212</button><input type="number" id="cHwN" min="0" max="20" value="0" aria-label="Additional appliances"><button type="button" id="cHwP" data-step="1" aria-label="More appliances">+</button></div><span class="c-hw"><b data-pr="hw">\u20B916,999</b> each \xB7 one-time \xB7 e.g. a branch or a spare</span></div></div>
      </div>
      <div class="cout" aria-live="polite">
        <span class="ck">Your Cybird estimate</span>
        <div class="ctot" id="oTot">\u20B90</div>
        <div class="csub" id="oSub">for the term, excl. GST</div>
        <div class="crows" id="oRows"></div>
        <div class="crows">
          <div class="crow save"><span id="oSvL">Term saving vs 1-year renewals</span><b id="oSv">\u20B90</b></div>
          <div class="crow"><span>Subtotal, excl. GST</span><b id="oSt">\u20B90</b></div>
          <div class="crow"><span>GST (18%)</span><b id="oGst">\u20B90</b></div>
          <div class="crow"><span>Payable incl. GST</span><b id="oPay">\u20B90</b></div>
        </div>
        <div class="cef cb-cb"><div class="cef-h"><span>Effective cost per user / month</span><em id="oPum">\u20B90</em></div><div class="cb-t" id="oCb"><i style="background:#1565D8"></i><i style="background:#FF8C1A"></i><i style="background:#5FE08D"></i></div><div class="cb-l"><span><i style="background:#1565D8"></i>bundle</span><span><i style="background:#FF8C1A"></i>support</span><span><i style="background:#5FE08D"></i>hardware</span></div></div>
        <div class="cact"><button class="btn btn-orange btn-block cb-mag" id="oAdd" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg> Add to cart</button><button class="btn btn-line btn-block" data-open="xhCallback" data-topic="Schedule 1:1 demo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg> Schedule 1:1 demo</button><button class="btn btn-line btn-block cb-tr" data-open="xhCallback" data-topic="Cybird \u2014 free trial"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zM12 8s2-5 4.5-3.5S15 8 12 8z"/></svg> Ask for a FREE trial</button></div>
        <div class="cfine">Brochure prices in INR, excluding 18% GST. Bundles include hardware + security for the chosen term. Support is optional and billed per month of the term. Additional appliances are one-time.</div>
      </div>
    </div>
  </div>
</section>

<!-- ================= IN THE BOX + MADE IN INDIA ================= -->
<section class="sec" id="inbox">
  <div class="wrap">
    <div class="cb-ib">
      <div class="ib rv" id="cbIb">
        <div class="ib-h"><span class="vt-k"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>In the box</span><button type="button" class="ib-r" id="cbIbR"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg> Unbox again</button></div>
        <div class="ib-s">
          <div class="bx" aria-hidden="true"><span class="lid"></span><span class="body"><b>CYBIRD X2</b></span></div>
          <div class="ib-i">
            <div style="--k:0"><i data-gl="router"></i><b>Cybird X2 device</b></div>
            <div style="--k:1"><i data-gl="plug"></i><b>Power adapter</b></div>
            <div style="--k:2"><i data-gl="cable"></i><b>Ethernet cable</b></div>
            <div style="--k:3"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg></i><b>Quick start guide</b></div>
          </div>
        </div>
      </div>
      <div class="mi rv" data-d="1" id="cbMi">
        <span class="mi-k"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>Made in India</span>
        <h3>Made in India. <span>Securing India.</span></h3>
        <p>Enterprise-grade security, built for SMBs \u2014 by Cybird (Netrakshak Technologies), distributed and supported nationally by XcellHost from Mumbai.</p>
        <div class="mi-s"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Easy to deploy</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>24\xD77 protection</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>AI-powered security</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>Centralized management</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="6" height="8" rx="1"/><rect x="15" y="8" width="6" height="8" rx="1"/><path d="M9 12h6M12 9l3 3-3 3"/></svg>Scalable &amp; future ready</span></div>
        <span class="mi-tri" aria-hidden="true"><i></i><i></i><i></i></span>
      </div>
    </div>
  </div>
</section>

<section class="sec" id="why">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Why buy through XcellHost</span><h2>Cybird, <span class="acc">distributed and supported by XcellHost.</span></h2><p>XcellHost is Cybird's National Distributor in India \u2014 a Mumbai team that has run cloud and security for Indian businesses since 1999.</p></div>
    <div class="dband rv"><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></i><span><b>Rupee billing, GST invoice</b><p>Bundles, hardware and support on one GST invoice in INR.</p></span><span class="n">01</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg></i><span><b>1:1 demo &amp; free trial</b><p>See Cybird on your own network before you commit.</p></span><span class="n">02</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg></i><span><b>Set-up help</b><p>We help you plan Wi-Fi, users, guest access and policies, then go live.</p></span><span class="n">03</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></i><span><b>Branches and partners</b><p>Multi-site rollouts and a channel for IT partners and MSPs nationwide.</p></span><span class="n">04</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg></i><span><b>Support from Mumbai</b><p>Phone, WhatsApp and email, with optional monthly support plans.</p></span><span class="n">05</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></i><span><b>Certified operations</b><p>ISO 27001, 27017, 27018 and 20000-1 and SOC 2 in our own operations.</p></span><span class="n">06</span></div></div>
    <div class="cb-mq rv" aria-label="What Cybird covers">
      <span class="mq-l">All in one box</span>
      <div class="mq-w"><div class="mq-m"><span data-gl2="wifi">Business Wi-Fi 6</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Advanced firewall</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>Secure web gateway</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>DNS filtering</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>App &amp; bandwidth control</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>WPA2-Enterprise</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>Network access control</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Zero touch provisioning</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>WireGuard VPN</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>Multi-WAN</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>Reports &amp; alerts</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>Cybird Cloud</span><span data-gl2="wifi">Business Wi-Fi 6</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Advanced firewall</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>Secure web gateway</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>DNS filtering</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>App &amp; bandwidth control</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>WPA2-Enterprise</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>Network access control</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Zero touch provisioning</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>WireGuard VPN</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>Multi-WAN</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>Reports &amp; alerts</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>Cybird Cloud</span></div></div>
    </div>
  </div>
</section>

<!-- ================= WHY ================= -->


<!-- ================= VIDEO ================= -->


<!-- ================= FAQ ================= -->
<section class="sec cybird-assurance" id="cybird-assurance" aria-labelledby="cybirdSecurityTitle">
  <div class="wrap">
    <h2 class="assurance-heading" id="cybirdSecurityTitle">Security &amp; compliance \u2014 Cybird X2</h2>
    <p class="assurance-intro">Cybird X2 combines per-user Wi-Fi access, network segmentation, an advanced firewall, secure web gateway and DNS filtering in one appliance. Give staff, office devices and guests separate access, apply application and bandwidth policies, and use Cybird Cloud alerts and reports to keep track of your network.</p>
    <dl class="cybird-security-grid">
      <div><dt>Wi-Fi identity</dt><dd>Per-user WPA2-Enterprise access</dd></div>
      <div><dt>Network separation</dt><dd>Staff, IoT and guest VLANs</dd></div>
      <div><dt>Threat filtering</dt><dd>Firewall, secure web gateway and DNS filtering</dd></div>
      <div><dt>Policy controls</dt><dd>Application and bandwidth policies</dd></div>
      <div><dt>Remote access</dt><dd>WireGuard VPN</dd></div>
      <div><dt>Visibility</dt><dd>Cybird Cloud alerts and reports</dd></div>
    </dl>
    <p class="assurance-note">XcellHost's ISO 27001, 27017, 27018 and 20000-1 and SOC 2 certifications cover its own operations.</p>

    <h3 class="assurance-heading" id="cybirdSupportTitle">Why XcellHost for Cybird X2</h3>
    <div class="dband" aria-labelledby="cybirdSupportTitle">
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l3 3 4 .6.6 4 2 3-3 3-.6 4-4 .6-3-2-3 2-.6-4-3-3 2-3 .6-4 4-.6z"/><path d="M9 12l2 2 4-4"/></svg></i><span><b>National Distributor</b><p>Cybird bundles, hardware and support through XcellHost in India.</p></span><span class="n" aria-hidden="true">01</span></div>
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></i><span><b>Since 1999</b><p>Experience running cloud and security for Indian businesses.</p></span><span class="n" aria-hidden="true">02</span></div>
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 17h16M8 3v8M16 13v8"/><circle cx="8" cy="7" r="2"/><circle cx="16" cy="17" r="2"/></svg></i><span><b>Help with set-up</b><p>Plan Wi-Fi, users, guest access and policies before going live.</p></span><span class="n" aria-hidden="true">03</span></div>
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg></i><span><b>Support from Mumbai</b><p>Phone, WhatsApp and email, with optional monthly support plans.</p></span><span class="n" aria-hidden="true">04</span></div>
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4M9 15l2 2 4-4"/></svg></i><span><b>1:1 demo &amp; free trial</b><p>See Cybird on your own network before you commit.</p></span><span class="n" aria-hidden="true">05</span></div>
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></i><span><b>Rupee billing, GST invoice</b><p>Bundles, hardware and support on one GST invoice in INR.</p></span><span class="n" aria-hidden="true">06</span></div>
    </div>

    <h3 class="assurance-heading" id="cybirdReviewsTitle">What customers say</h3>
    <div class="cybird-review-grid" aria-labelledby="cybirdReviewsTitle">`, `</div>
  </div>
</section>

<section class="sec" id="faq">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">FAQ</span><h2>Questions, <span class="acc">answered.</span></h2></div>
    <div class="faq rv">
      <div class="fq open"><button aria-expanded="true">What is included in a Cybird bundle?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Each Cybird security appliance bundle is sold as hardware + security for the term you choose (1, 2, 3 or 5 years): the Cybird X2 appliance with business Wi-Fi, advanced firewall, secure web gateway and DNS filtering, smart controls, insights and cloud management. Plans differ by the number of users covered: Essentials up to 10, Plus up to 25, Pro up to 50 and Max up to 100.</p></div></div>
      <div class="fq"><button aria-expanded="false">Do I need to buy the \u20B916,999 hardware appliance separately?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>The brochure describes the plans as bundles of hardware + security, so a bundle is what you buy to get started. The \u20B916,999 (+ GST) customer hardware appliance price applies when you want an additional or spare appliance \u2014 for example for another branch. XcellHost will confirm exactly what your quote includes before you order.</p></div></div>
      <div class="fq"><button aria-expanded="false">Will Cybird X2 work with my internet provider?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Cybird X2 connects to your existing broadband or fibre connection through its gigabit WAN port and takes over Wi-Fi, security and control for the office behind it. During set-up XcellHost checks how your provider's line is delivered so the connection is configured correctly.</p></div></div>
      <div class="fq"><button aria-expanded="false">Does it support Wi-Fi 6?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. Cybird X2 has dual-band 802.11ax (Wi-Fi 6) on 2.4 GHz and 5 GHz with 2\xD72 MU-MIMO and link rates up to 1200 Mbps, plus four gigabit LAN ports for wired devices.</p></div></div>
      <div class="fq"><button aria-expanded="false">How many users can one Cybird handle?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Bundles are sized by users: up to 10 (Essentials), 25 (Plus), 50 (Pro) or 100 (Max). Firewall throughput is up to 900 Mbps*, depending on the services you enable, your configuration and deployment. Use the configurator above to pick a plan for your team size.</p></div></div>
      <div class="fq"><button aria-expanded="false">Can I connect two internet lines (multi-WAN)?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Cybird lists multi-WAN high availability among the X2's capabilities, so the office can stay online if one link drops. The X2 has one dedicated WAN port; XcellHost will confirm how a second line is connected for your set-up.</p></div></div>
      <div class="fq"><button aria-expanded="false">Is there a VPN for staff working remotely?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. Cybird X2 supports WireGuard VPN with throughput up to 300 Mbps*, so remote and work-from-home staff can reach the office securely. *Performance depends on enabled services, configuration and deployment conditions.</p></div></div>
      <div class="fq"><button aria-expanded="false">Do I need an IT person to manage it?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>No. Cybird is cloud-managed: settings, policies, alerts and reports live in Cybird Cloud and can be managed from anywhere. Zero touch provisioning automates device setup, so a new site needs very little manual configuration. IT partners and MSPs can manage many customers from the same platform.</p></div></div>
      <div class="fq"><button aria-expanded="false">Who sets it up?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>XcellHost helps you plan users, guest Wi-Fi and policies and get the appliance live. Zero touch provisioning means the device pulls its configuration from Cybird Cloud once connected. Set-up options for your location are confirmed with your quote.</p></div></div>
      <div class="fq"><button aria-expanded="false">What warranty comes with Cybird X2?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>A 1-year standard warranty, which can be extended. The X2 is CE, FCC and RoHS compliant.</p></div></div>
      <div class="fq"><button aria-expanded="false">Can I try it before I buy?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. Ask for a FREE trial or schedule a 1:1 demo with XcellHost and see Cybird on your own network. Call +91 22 6711 1555, WhatsApp +91 86570 32540 or email sales@xcellhost.cloud.</p></div></div>
      <div class="fq"><button aria-expanded="false">We are an IT partner or MSP. Can we work with Cybird?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. Cybird is designed for IT partners and MSPs, with centralized management, multi-site visibility, remote monitoring, smart alerts, simplified deployment and faster troubleshooting. XcellHost, as National Distributor, onboards partners across India.</p></div></div>
    </div>
  </div>
</section>

<!-- ================= CTA ================= -->
<section class="sec" id="contact">
  <div class="wrap">
    <div class="lcta rv">
      <div><h2>Secure your network today.</h2><p class="sub">Schedule a 1:1 demo or ask for a FREE trial of Cybird X2. XcellHost Cloud Services Pvt Ltd, 209 Laxmi Plaza, Bldg No. 9, Laxmi Industrial Estate, Andheri (W), Mumbai 400053.</p>
        <div class="row"><button class="btn btn-orange cb-mag" data-open="xhCallback" data-topic="Schedule 1:1 demo">Schedule 1:1 demo \u2192</button><button class="btn b-w" data-open="xhCallback" data-topic="Cybird \u2014 free trial"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zM12 8s2-5 4.5-3.5S15 8 12 8z"/></svg> Ask for a FREE trial</button><a class="btn b-w" href="tel:+912267111555"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg> +91-22-67111555</a><a class="btn b-w" href="https://wa.me/918657032540" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg> +91 86570 32540</a><a class="btn b-w" href="mailto:sales@xcellhost.cloud"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg> sales@xcellhost.cloud</a></div></div>
      <div class="seal"><img src="https://www.xcellhost.top/assets/images/partner-handshake.svg" alt="" loading="lazy" onerror="this.onerror=null;this.parentNode.classList.add('noimg')"><span class="sl">CYBIRD<br>NATIONAL DISTRIBUTOR</span></div>
    </div>
    <div class="proof rv"><span>ISO 9001 \xB7 27001 \xB7 27017 \xB7 27018 \xB7 20000-1</span><span>SOC 2 Type I &amp; II</span><span>MeitY empanelled</span><span>24\xD77 NOC &amp; SOC</span><span>Since 1999 \xB7 Mumbai</span></div>
  </div>
</section>

<!-- ================= RELATED ================= -->
<section class="sec" id="family">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Related services</span><h2>More layers <span class="acc">around your network.</span></h2></div>
    <div class="cb-xs">
      <a class="xsib rv" href="/network-access-control-nac" target="_top"><span class="xi1" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg></i></span><span class="xt"><small>Larger networks</small><b>Genian Network Access Control</b></span><span class="xa">Explore <span class="ar">\u2192</span></span></a>
      <a class="xsib rv" data-d="1" href="/managed-microsoft-sentinel" target="_top"><span class="xi1 o" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></i></span><span class="xt"><small>SIEM \xB7 SOC</small><b>Managed Microsoft Sentinel</b></span><span class="xa">Explore <span class="ar">\u2192</span></span></a>
      <a class="xsib rv" data-d="2" href="/acronis-direct-cloud-backup" target="_top"><span class="xi1 g" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9"/><path d="M12 12v8M9 15l3-3 3 3"/></svg></i></span><span class="xt"><small>Backup</small><b>Acronis Direct Cloud Backup</b></span><span class="xa">Explore <span class="ar">\u2192</span></span></a>
      <a class="xsib rv" href="/website-security-solutions" target="_top"><span class="xi1" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></i></span><span class="xt"><small>TLS &amp; seals</small><b>Website Security Solutions</b></span><span class="xa">Explore <span class="ar">\u2192</span></span></a>
      <a class="xsib rv" data-d="1" href="#simulate"><span class="xi1 o" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg></i></span><span class="xt"><small>Try it</small><b>Threat simulator</b></span><span class="xa">Open <span class="ar">\u2192</span></span></a>
      <a class="xsib rv" data-d="2" href="#configure"><span class="xi1 g" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg></i></span><span class="xt"><small>You are here</small><b>Cybird X2 bundles</b></span><span class="xa">Build <span class="ar">\u2192</span></span></a>
    </div>
  </div>
</section>

</main>
<script>
/* XcellHost v2 core runtime \u2014 exposes window.XH */
(function(){
  'use strict';
  var d=document,root=d.documentElement;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia('(pointer:fine)').matches;
  function $(s,c){return (c||d).querySelector(s);} function $$(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));}
  function store(k,v){try{if(v===undefined){return JSON.parse(localStorage.getItem(k));}localStorage.setItem(k,JSON.stringify(v));}catch(e){return null;}}
  var XH=window.XH={reduce:reduce,fine:fine,$:$,$$:$$,store:store};
  XH.inr=function(n,dec){n=+n||0;return '\u20B9'+n.toLocaleString('en-IN',{minimumFractionDigits:dec||0,maximumFractionDigits:dec||0});};

  /* ---------- toast ---------- */
  var toastEl=$('#xhToast'),toastT,tt;
  XH.toast=function(m){if(!toastEl)return;$('#xhToastT').textContent=m;toastEl.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toastEl.classList.remove('on');},2600);};

  /* ---------- theme ---------- */
  var tbtn=$('#xhTheme');
  function paintTheme(){var dk=root.getAttribute('data-theme')==='dark';if(tbtn){$('.tl',tbtn).textContent=dk?'Dark':'Light';tbtn.setAttribute('aria-pressed',dk);}}
  if(tbtn)tbtn.addEventListener('click',function(){var dk=root.getAttribute('data-theme')!=='dark';root.setAttribute('data-theme',dk?'dark':'light');try{localStorage.setItem('xh-theme',dk?'dark':'light');}catch(e){}paintTheme();d.dispatchEvent(new CustomEvent('xh:theme',{detail:{dark:dk}}));});
  paintTheme();
  XH.dark=function(){return root.getAttribute('data-theme')==='dark';};

  /* ---------- header, progress ---------- */
  var hdr=$('#xhHdr'),prog=$('#xhProgress');
  function onScroll(){var y=window.scrollY,h=d.documentElement.scrollHeight-innerHeight;if(prog)prog.style.width=(h>0?y/h*100:0)+'%';if(hdr)hdr.classList.toggle('scrolled',y>8);}
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  /* ---------- mega menu ---------- */
  var nis=$$('#xhNav .ni'),hoverT;
  function closeMega(except){nis.forEach(function(n){if(n!==except){n.classList.remove('open');$('button',n).setAttribute('aria-expanded','false');}});}
  nis.forEach(function(n){
    var b=$('button',n);
    b.addEventListener('click',function(e){e.stopPropagation();var o=!n.classList.contains('open');closeMega(n);n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);});
    if(fine){n.addEventListener('mouseenter',function(){clearTimeout(hoverT);hoverT=setTimeout(function(){closeMega(n);n.classList.add('open');b.setAttribute('aria-expanded','true');},90);});
      n.addEventListener('mouseleave',function(){clearTimeout(hoverT);hoverT=setTimeout(function(){n.classList.remove('open');b.setAttribute('aria-expanded','false');},160);});}
  });
  d.addEventListener('click',function(e){if(!e.target.closest('#xhNav'))closeMega();});

  /* ---------- mobile nav ---------- */
  var mnav=$('#xhMnav');
  function mOpen(o){if(!mnav)return;mnav.classList.toggle('open',o);mnav.setAttribute('aria-hidden',!o);d.body.classList.toggle('lock',o);}
  var bg=$('#xhBurger');if(bg)bg.addEventListener('click',function(){mOpen(true);});
  $$('[data-mclose]').forEach(function(x){x.addEventListener('click',function(){mOpen(false);});});
  if(mnav)mnav.addEventListener('click',function(e){if(e.target.tagName==='A')mOpen(false);});

  /* ---------- modals ---------- */
  var lastFocus=null;
  XH.open=function(id,opts){var m=d.getElementById(id);if(!m)return;lastFocus=d.activeElement;m.classList.add('open');d.body.classList.add('lock');
    if(opts&&opts.topic){var s=$('#xhCbTopic');if(s){ensureTopic(opts.topic);s.value=opts.topic;}}
    setTimeout(function(){var f=$('input:not([type=hidden]),select,textarea,button.x',m);if(f)f.focus();},60);
    m.dispatchEvent(new CustomEvent('xh:open',{detail:opts||{}}));};
  XH.close=function(id){var m=typeof id==='string'?d.getElementById(id):id;if(!m)return;m.classList.remove('open');if(!$('.modal.open')&&!$('.cart.open'))d.body.classList.remove('lock');if(lastFocus&&lastFocus.focus)lastFocus.focus();};
  d.addEventListener('click',function(e){
    var o=e.target.closest('[data-open]');if(o){e.preventDefault();var opts={topic:o.getAttribute('data-topic')};XH.open(o.getAttribute('data-open'),opts);return;}
    var c=e.target.closest('[data-close]');if(c){XH.close(c.closest('.modal'));}
  });
  var vb=$('.cvid');if(vb)vb.addEventListener('click',function(){var yt=vb.getAttribute('data-yt');if(yt){var box=$('#xhVideo .mc > div');if(box)box.innerHTML='<iframe src="'+yt+'" style="width:100%;height:100%;border:0;border-radius:14px" allow="autoplay; encrypted-media" allowfullscreen></iframe>';}});

  /* ---------- callback topics ---------- */
  function ensureTopic(t){var s=$('#xhCbTopic');if(!s||!t)return;if(!$$('option',s).some(function(o){return o.value===t;})){var op=d.createElement('option');op.textContent=t;s.appendChild(op);}}
  (window.XH_TOPICS||[]).forEach(ensureTopic);

  /* ---------- forms (validation + lead capture) ---------- */
  var handlers={};
  XH.onForm=function(name,fn){handlers[name]=fn;};
  function validField(inp){var w=inp.closest('.fi');var ok=inp.checkValidity()&&!(inp.required&&!String(inp.value).trim());if(w)w.classList.toggle('err',!ok);return ok;}
  d.addEventListener('submit',function(e){
    var f=e.target.closest('[data-xhform]');if(!f)return;e.preventDefault();
    var ok=true,first=null;$$('input,select,textarea',f).forEach(function(i){if(!validField(i)){ok=false;first=first||i;}});
    if(!ok){if(first)first.focus();return;}
    var data={};$$('input,select,textarea',f).forEach(function(i){if(i.name)data[i.name]=i.type==='checkbox'?i.checked:i.value;});
    var name=f.getAttribute('data-xhform');data._form=name;data._page=location.pathname.split('/').pop();data._at=new Date().toISOString();
    var leads=store('xh-leads')||[];leads.push(data);store('xh-leads',leads.slice(-50));
    d.dispatchEvent(new CustomEvent('xh:lead',{detail:data}));
    if(handlers[name]&&handlers[name](data,f)===false)return;
    if(name==='newsletter'){f.reset();XH.toast('Subscribed \u2014 thank you!');return;}
    var mc=f.closest('.mc')||f.parentNode;
    var msg=f.getAttribute('data-done')||'Thanks, '+(data.name?data.name.split(' ')[0]:'there')+'! Our team will be in touch shortly.';
    mc.innerHTML='<div class="done"><div class="dk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><h4>Request received</h4><p>'+msg+'</p></div>';
    XH.toast('Request received');
  });
  d.addEventListener('input',function(e){var w=e.target.closest&&e.target.closest('.fi.err');if(w)validField(e.target);});

  /* ---------- cart ---------- */
  var CART=store('xh-cart')||[];
  var cartEl=$('#xhCart'),cnt=$('#xhCartCnt');
  function cartSave(){store('xh-cart',CART);}
  function cartRender(){
    var box=$('#xhCartItems');if(!box)return;
    if(!CART.length){box.innerHTML='<div class="empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg>Your cart is empty.<br>Configure a plan to get started.</div>';}
    else box.innerHTML=CART.map(function(it,i){return '<div class="it"><div class="t"><div><b>'+it.name+'</b><small>'+(it.sub||'')+'</small></div><button class="rm" data-rm="'+i+'" aria-label="Remove"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg></button></div><div class="bt"><span class="q"><button data-dq="'+i+'" aria-label="Decrease">\u2212</button><span>'+it.qty+'</span><button data-iq="'+i+'" aria-label="Increase">+</button></span><span class="pz">'+XH.inr(it.price*it.qty)+'</span></div></div>';}).join('');
    var q=CART.reduce(function(a,b){return a+b.qty;},0),sub=CART.reduce(function(a,b){return a+b.price*b.qty;},0);
    if(cnt){cnt.textContent=q;cnt.classList.toggle('on',q>0);}
    $('#xhCartN').textContent=q+(q===1?' item':' items');$('#xhCartSub').textContent=XH.inr(sub);$('#xhCartGst').textContent=XH.inr(sub*.18);$('#xhCartTot').textContent=XH.inr(sub*1.18);
  }
  function bump(){if(!cnt)return;cnt.classList.remove('bump');void cnt.offsetWidth;cnt.classList.add('bump');}
  function cartOpen(o){if(!cartEl)return;cartEl.classList.toggle('open',o);cartEl.setAttribute('aria-hidden',!o);d.body.classList.toggle('lock',o||!!$('.modal.open'));}
  XH.cart={add:function(it){it.qty=it.qty||1;var ex=CART.filter(function(c){return c.key&&c.key===it.key;})[0];if(ex)ex.qty+=it.qty;else CART.push(it);cartSave();cartRender();bump();XH.toast('Added to cart \u2014 '+it.name);cartOpen(true);},open:function(){cartOpen(true);},items:function(){return CART.slice();}};
  if(cartEl){cartEl.addEventListener('click',function(e){
    var t=e.target.closest('[data-rm],[data-iq],[data-dq],[data-cclose]');if(!t)return;
    if(t.hasAttribute('data-cclose')){cartOpen(false);return;}
    if(t.hasAttribute('data-rm'))CART.splice(+t.getAttribute('data-rm'),1);
    if(t.hasAttribute('data-iq'))CART[+t.getAttribute('data-iq')].qty++;
    if(t.hasAttribute('data-dq')){var i=+t.getAttribute('data-dq');if(CART[i].qty>1)CART[i].qty--;else CART.splice(i,1);}
    cartSave();cartRender();bump();});}
  var cb=$('#xhCartBtn');if(cb)cb.addEventListener('click',function(){cartOpen(true);});
  cartRender();

  /* ---------- search ---------- */
  var sr=$('#xhSearch'),si=$('#xhSearchIn'),res=$('#xhSearchRes'),hl=0,hits=[];
  function sOpen(o){if(!sr)return;sr.classList.toggle('open',o);d.body.classList.toggle('lock',o);if(o){si.value='';sRun();setTimeout(function(){si.focus();},30);}}
  function sRun(){var q=si.value.trim().toLowerCase();var idx=window.XH_INDEX||[];
    hits=idx.filter(function(x){return !q||(x.n+' '+x.d+' '+x.c).toLowerCase().indexOf(q)>-1;}).slice(0,12);hl=0;
    res.innerHTML=hits.length?hits.map(function(x,i){return '<a href="'+x.h+'"'+(i===0?' class="hl"':'')+'><b>'+x.n+'</b><span>'+x.c+' \xB7 '+x.d+'</span></a>';}).join(''):'<div class="none">No matches for \u201C'+si.value.replace(/</g,'&lt;')+'\u201D. Try \u201Ccloud\u201D, \u201Cemail\u201D or <a href="#" data-open="xhCallback" style="color:var(--blue);font-weight:600">ask an expert</a>.</div>';}
  if(sr){$('#xhSearchBtn').addEventListener('click',function(){sOpen(true);});si.addEventListener('input',sRun);
    sr.addEventListener('click',function(e){if(e.target===sr)sOpen(false);if(e.target.closest('a'))sOpen(false);});
    si.addEventListener('keydown',function(e){var as=$$('a',res);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();hl=(hl+(e.key==='ArrowDown'?1:-1)+as.length)%Math.max(as.length,1);as.forEach(function(a,i){a.classList.toggle('hl',i===hl);});}else if(e.key==='Enter'&&as[hl]){location.href=as[hl].getAttribute('href');sOpen(false);}});}
  d.addEventListener('keydown',function(e){
    if(e.key==='Escape'){if(sr&&sr.classList.contains('open'))sOpen(false);var m=$('.modal.open');if(m)XH.close(m);if(cartEl&&cartEl.classList.contains('open'))cartOpen(false);if(mnav&&mnav.classList.contains('open'))mOpen(false);closeMega();}
    if((e.key==='k'&&(e.ctrlKey||e.metaKey))||(e.key==='/'&&!/input|textarea|select/i.test(d.activeElement.tagName))){e.preventDefault();sOpen(true);}
  });

  /* ---------- reveal, counters ---------- */
  var io='IntersectionObserver' in window?new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');if(x.target.hasAttribute('data-count'))countUp(x.target);io.unobserve(x.target);}});},{threshold:.14,rootMargin:'0px 0px -40px 0px'}):null;
  XH.observe=function(scope){$$('.rv,[data-count],.step',scope).forEach(function(el){if(io)io.observe(el);else el.classList.add('in');});};
  function countUp(el){var to=parseFloat(el.getAttribute('data-count')),dec=+(el.getAttribute('data-dec')||0),pre=el.getAttribute('data-pre')||'',suf=el.getAttribute('data-suf')||'';
    if(reduce){el.textContent=pre+to.toLocaleString('en-IN',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;return;}
    var t0=null,dur=1400;function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,4);el.textContent=pre+(to*e).toLocaleString('en-IN',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
  XH.observe();

  /* ---------- FAQ ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('.fq > button');if(!b)return;var q=b.parentNode,a=$('.fa',q),o=!q.classList.contains('open');q.classList.toggle('open',o);b.setAttribute('aria-expanded',o);a.style.maxHeight=o?a.scrollHeight+'px':'0px';});
  function resizeFaqs(){$$('.fq.open .fa').forEach(function(a){var height=a.scrollHeight+'px';if(a.style.maxHeight!==height)a.style.maxHeight=height;});}
  resizeFaqs();addEventListener('resize',resizeFaqs);
  if(d.fonts&&d.fonts.ready)d.fonts.ready.then(resizeFaqs);

  /* ---------- tabs: <div data-tabs="g"><button data-tab="k">\u2026  panels: <div data-panel="k" data-group="g"> ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('[data-tabs] [data-tab]');if(!b)return;var bar=b.closest('[data-tabs]'),g=bar.getAttribute('data-tabs'),k=b.getAttribute('data-tab');
    $$('[data-tab]',bar).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b);});
    $$('[data-panel][data-group="'+g+'"]').forEach(function(p){p.classList.toggle('on',p.getAttribute('data-panel')===k);});
    bar.dispatchEvent(new CustomEvent('xh:tab',{detail:{key:k}}));});

  /* ---------- segmented controls: <div class="seg" data-name="x"><button data-v="..."> ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('.seg button');if(!b)return;var s=b.parentNode;$$('button',s).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});s.dataset.value=b.getAttribute('data-v');s.dispatchEvent(new CustomEvent('change',{bubbles:true}));});
  $$('.seg').forEach(function(s){var on=$('button.on',s)||$('button',s);if(on){on.classList.add('on');s.dataset.value=on.getAttribute('data-v');}});

  /* ---------- range fill + steppers ---------- */
  function fillRange(r){var p=(r.value-r.min)/(r.max-r.min)*100;r.style.setProperty('--p',p+'%');}
  $$('input[type=range].rng').forEach(function(r){fillRange(r);r.addEventListener('input',function(){fillRange(r);});});
  XH.fillRange=fillRange;
  d.addEventListener('click',function(e){var b=e.target.closest('.stp button');if(!b)return;var inp=$('input',b.parentNode),mn=+(inp.min||0),mx=+(inp.max||9999),st=+(inp.step||1);inp.value=Math.max(mn,Math.min(mx,(+inp.value||0)+st*(+b.getAttribute('data-step'))));inp.dispatchEvent(new Event('input',{bubbles:true}));});
  d.addEventListener('change',function(e){var i=e.target;if(i.closest&&i.closest('.stp')){var mn=+(i.min||0),mx=+(i.max||9999);i.value=Math.max(mn,Math.min(mx,Math.round(+i.value||mn)));i.dispatchEvent(new Event('input',{bubbles:true}));}});

  /* ---------- copy ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('[data-copy]');if(!b)return;var t=b.getAttribute('data-copy')||location.href;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){XH.toast('Copied to clipboard');},function(){var ta=d.createElement('textarea');ta.value=t;d.body.appendChild(ta);ta.select();try{d.execCommand('copy');XH.toast('Copied to clipboard');}catch(x){}ta.remove();});});

  /* ---------- flash a value change ---------- */
  XH.flash=function(el){if(!el||reduce)return;el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');};

  /* ---------- download helper ---------- */
  XH.download=function(name,text,type){var b=new Blob([text],{type:type||'text/plain'});var a=d.createElement('a');a.href=URL.createObjectURL(b);a.download=name;d.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},500);};

  /* ---------- visibility helper for animations ---------- */
  XH.whenVisible=function(el,cb){if(!el)return;if(!('IntersectionObserver' in window)){cb(true);return;}new IntersectionObserver(function(en){en.forEach(function(x){cb(x.isIntersecting);});},{threshold:.05}).observe(el);};
})();

/* XcellHost live-UI runtime additions (typewriter, Ask-AI, chatbot, video embeds) */
(function(){
  'use strict';
  var d=document,XH=window.XH,$=XH.$,$$=XH.$$;

  /* typewriter: <div class="lh-type" data-words='["a","b"]'><span class="tw"></span><span class="cur"></span></div> */
  $$('.lh-type[data-words]').forEach(function(el){
    var words;try{words=JSON.parse(el.getAttribute('data-words'));}catch(e){return;}
    var out=$('.tw',el)||el,wi=0,ci=0,del=false,vis=true,tm;
    if(XH.reduce){out.textContent=words[0];return;}
    function tick(){if(!vis){tm=setTimeout(tick,400);return;}
      var w=words[wi];ci+=del?-1:1;out.textContent=w.slice(0,ci);
      var t=del?28:55;if(!del&&ci===w.length){del=true;t=1700;}else if(del&&ci===0){del=false;wi=(wi+1)%words.length;t=350;}
      tm=setTimeout(tick,t);}
    XH.whenVisible(el,function(v){vis=v;});tick();
  });

  /* Ask AI chips: <div class="lh-ask" data-q="question"> with <a data-ai="chatgpt|claude|perplexity|google|copilot"> */
  var AI={chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
  $$('.lh-ask[data-q]').forEach(function(box){var q=encodeURIComponent(box.getAttribute('data-q'));
    $$('a[data-ai]',box).forEach(function(a){var k=a.getAttribute('data-ai');if(AI[k]){a.href=AI[k]+q;a.target='_blank';a.rel='noopener';}});});

  /* click-to-play YouTube: any [data-yt] frame */
  function play(fr){var id=fr.getAttribute('data-yt');if(!id||fr.querySelector('iframe'))return;
    var f=d.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';f.allow='autoplay; encrypted-media; picture-in-picture';f.allowFullscreen=true;f.title='Video';fr.appendChild(f);}
  d.addEventListener('click',function(e){var fr=e.target.closest('[data-yt]');if(fr&&!fr.classList.contains('cvid'))play(fr);});
  d.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('[data-yt]')){e.preventDefault();play(e.target);}});

  /* hero network canvas (live "net") + pointer tilt */
  $$('.hero.lh canvas.lh-net').forEach(function(cv){
    var hero=cv.closest('.hero'),cx=cv.getContext('2d'),W,H,dpr=Math.min(2,window.devicePixelRatio||1),P=[],run=true,mx=-999,my=-999;
    function size(){W=hero.offsetWidth;H=hero.offsetHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);var n=Math.round(Math.min(90,W*H/16000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+.6,o:Math.random()<.12});}
    function draw(){cx.clearRect(0,0,W,H);for(var i=0;i<P.length;i++){var a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
      for(var k=i+1;k<P.length;k++){var b=P[k],dx=a.x-b.x,dy=a.y-b.y,dd=dx*dx+dy*dy;if(dd<12000){cx.strokeStyle='rgba(127,176,255,'+(.16*(1-dd/12000))+')';cx.lineWidth=1;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke();}}
      var ex=a.x-mx,ey=a.y-my,ed=ex*ex+ey*ey;if(ed<26000){cx.strokeStyle='rgba(255,140,26,'+(.35*(1-ed/26000))+')';cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(mx,my);cx.stroke();}
      cx.fillStyle=a.o?'rgba(255,140,26,.85)':'rgba(160,200,255,.75)';cx.beginPath();cx.arc(a.x,a.y,a.r,0,6.283);cx.fill();}
      if(run)requestAnimationFrame(draw);}
    size();addEventListener('resize',size);
    hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;});
    hero.addEventListener('pointerleave',function(){mx=my=-999;});
    if(XH.reduce){run=false;draw();return;}
    XH.whenVisible(hero,function(v){var was=run;run=v;if(v&&!was)requestAnimationFrame(draw);});requestAnimationFrame(draw);
  });
  if(XH.fine&&!XH.reduce)$$('.hero.lh .stage').forEach(function(st){var t=$('.lh-tilt',st);if(!t)return;
    st.addEventListener('pointermove',function(e){var r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform='rotateY('+(x*7)+'deg) rotateX('+(-y*7)+'deg)';});
    st.addEventListener('pointerleave',function(){t.style.transform='';});});

  /* chatbot */
  var bot=$('#xhBot'),bb=$('#xhBotBtn'),msgs=$('#xhBotMsgs');
  function botOpen(o){if(!bot)return;bot.classList.toggle('open',o);bb.setAttribute('aria-expanded',o);}
  if(bot){
    bb.addEventListener('click',function(){botOpen(!bot.classList.contains('open'));});
    $('[data-botclose]',bot).addEventListener('click',function(){botOpen(false);});
    var page=(d.querySelector('[data-product]')||{}).getAttribute?d.querySelector('[data-product]').getAttribute('data-product'):'this plan';
    var R={
      plan:['Which plan do I need?','It depends on team size and what you use today. Our specialists review your setup for free and recommend the right <b>'+page+'</b> plan \u2014 want me to book that?'],
      price:['Pricing & GST','All prices on this page are in INR and exclude 18% GST. Yearly billing is cheapest. Use the calculator on the page to see your exact total, or ask us for volume pricing above 300 seats.'],
      demo:['Book a demo','Great \u2014 I've opened the demo form. Pick a time and a specialist will call you within one business hour.']
    };
    function say(t,me){var m=d.createElement('div');m.className='msg'+(me?' me':'');m.innerHTML=t;msgs.appendChild(m);msgs.scrollTop=msgs.scrollHeight;}
    $('#xhBotQr').addEventListener('click',function(e){var b=e.target.closest('button[data-q]');if(!b)return;var r=R[b.getAttribute('data-q')];
      say(r[0],true);setTimeout(function(){say(r[1]);if(b.getAttribute('data-q')==='demo'){setTimeout(function(){botOpen(false);XH.open('xhCallback',{topic:'Book a demo'});},700);}},420);});
    d.addEventListener('keydown',function(e){if(e.key==='Escape')botOpen(false);});
  }
})();

<\/script>
<script>
(function(){
  
(function(){
 var host=window.parent;
 function viewport(){document.documentElement.style.setProperty('--cybird-vh',(host.innerHeight/100)+'px');window.dispatchEvent(new Event('resize'));}
 function scroll(){window.dispatchEvent(new Event('scroll'));}
 host.addEventListener('scroll',scroll,{passive:true});host.addEventListener('resize',viewport);
 window.addEventListener('unload',function(){host.removeEventListener('scroll',scroll);host.removeEventListener('resize',viewport);});
 viewport();
})();
var XH=window.XH;
  XH.open=function(id,options){
    if(id==='xhCallback') document.dispatchEvent(new CustomEvent('import-callback',{detail:options&&options.topic||'Cybird X2 enquiry'}));
  };
  XH.cart.add=function(item){document.dispatchEvent(new CustomEvent('import-cart',{detail:item}));};
  document.querySelectorAll('.mq-m span').forEach(function(item,index){if(index>=12)item.setAttribute('aria-hidden','true');});
})();<\/script>
<script>
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,FINE=XH.fine,d=document;
  var DPR=Math.min(2,window.devicePixelRatio||1),TAU=Math.PI*2;
  function $id(i){return d.getElementById(i);}
  function setT(id,t){var e=typeof id==='string'?$id(id):id;if(e&&e.textContent!==t)e.textContent=t;}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function eo(t){return 1-Math.pow(1-t,3);}
  function spring(u){return u>1.4?1:1-Math.exp(-7*u)*Math.cos(8*u);}
  function mix(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];}
  function rgba(c,a){return 'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+','+(+a).toFixed(3)+')';}
  function rng(seed){var s=seed;return function(){s=(s*9301+49297)%233280;return s/233280;};}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function restart(el,cls){if(R||!el)return;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls);}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function inPoly(x,y,p){var c=false;for(var i=0,j=p.length-1;i<p.length;j=i++){var xi=p[i][0],yi=p[i][1],xj=p[j][0],yj=p[j][1];if(((yi>y)!==(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi))c=!c;}return c;}

  /* ---------------------------------------------------------
     Brochure prices (INR, excl. 18% GST) \u2014 single source of truth
     --------------------------------------------------------- */
  var PL=[
    {k:'ess',n:'Essentials',u:10,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',p:{1:14999,2:26999,3:37999,5:71999}},
    {k:'plus',n:'Plus',u:25,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',p:{1:24999,2:44999,3:63999,5:99999}},
    {k:'pro',n:'Pro',u:50,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',p:{1:44999,2:80999,3:114999,5:179999}},
    {k:'max',n:'Max',u:100,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>',p:{1:94999,2:170999,3:241999,5:379999}}];
  var SUP=[{hi:10,p:999,l:'1 to 10 employees'},{hi:24,p:1499,l:'10 to 24 employees'},{hi:50,p:1999,l:'24 to 50 employees'},{hi:100,p:3999,l:'50 to 100 employees'}];
  var HW=16999,TERMS=[1,2,3,5],GST=.18;
  function plan(k){for(var i=0;i<PL.length;i++)if(PL[i].k===k)return PL[i];return PL[0];}
  function saving(pl,t){var full=pl.p[1]*t,v=full-pl.p[t];return {amt:v,pct:t>1?v/full*100:0,full:full};}
  function supFor(n){for(var i=0;i<SUP.length;i++)if(n<=SUP[i].hi)return i;return SUP.length-1;}
  function suggest(n){for(var i=0;i<PL.length;i++)if(n<=PL[i].u)return PL[i];return PL[PL.length-1];}
  var PR={ess1:PL[0].p[1],hw:HW,s0:999,s1:1499,s2:1999,s3:3999};
  $$('[data-pr]').forEach(function(e){var k=e.getAttribute('data-pr');if(PR[k])e.textContent=XH.inr(PR[k]);});
  /* computed saving range per term, for the term toggles (not the brochure label) */
  $$('[data-sv]').forEach(function(e){var t=+e.getAttribute('data-sv'),ps=PL.map(function(p){return Math.round(saving(p,t).pct);}),lo=Math.min.apply(null,ps),hi=Math.max.apply(null,ps);e.textContent='save '+(lo===hi?lo:lo+'\u2013'+hi)+'%';});

  /* ---------------------------------------------------------
     Inline glyphs (24\xD724 stroke) for DOM + canvas
     --------------------------------------------------------- */
  var GLY={
    wifi:'M2 8.6a15 15 0 0120 0 M5.2 12a10.5 10.5 0 0113.6 0 M8.6 15.4a5.6 5.6 0 016.8 0 M12 19h.01',
    lap:'M4 5h16v10H4z M2 19h20 M9 19l1-2h4l1 2',
    phn:'M8 2h8a1.5 1.5 0 011.5 1.5v17A1.5 1.5 0 0116 22H8a1.5 1.5 0 01-1.5-1.5v-17A1.5 1.5 0 018 2z M11 18.5h2',
    prn:'M7 9V3h10v6 M7 17H4v-7h16v7h-3 M7 13h10v8H7z M17 12h.01',
    cam:'M3 8l12-3.5 2 6L5 14z M17 7.5l3.5-1v5l-3.5-.6 M8 13.4l1 3.6h5 M14 17v3 M11 20h6',
    cld:'M7 19h10.5a4.5 4.5 0 00.6-8.96A6.5 6.5 0 005.3 11.6 3.8 3.8 0 007 19z',
    glb:'M12 3a9 9 0 100 18 9 9 0 000-18z M3 12h18 M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
    bld:'M4 21V7l8-4 8 4v14 M9 21v-5h6v5 M8 9h.01 M12 9h.01 M16 9h.01 M8 12.5h.01 M12 12.5h.01 M16 12.5h.01',
    shd:'M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z M8.5 12l2.5 2.5 4.5-5',
    router:'M3 13h18v6H3z M7 13V4 M17 13V4 M6.5 16h.01 M9.5 16h.01 M13 16h4',
    plug:'M9 2v5 M15 2v5 M6 7h12v4a6 6 0 01-12 0z M12 17v5',
    cable:'M6 2h6v5H6z M7.5 2V.8 M10.5 2V.8 M9 7v5a4 4 0 004 4h2a4 4 0 014 4v2',
    pad:'M6.5 8h11a4.5 4.5 0 014.5 4.5v.5a3.5 3.5 0 01-6.3 2.1L14.5 14h-5l-1.2 1.1A3.5 3.5 0 012 13v-.5A4.5 4.5 0 016.5 8z M7 10.5v3 M5.5 12h3 M16 11h.01 M18 13h.01'
  };
  function svg(inner){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+inner+'</svg>';}
  function gly(k){return svg('<path d="'+GLY[k]+'"/>');}
  var AGL={
    wifiA:svg('<path class="a3" d="M2 8.6a15 15 0 0120 0"/><path class="a2" d="M5.2 12a10.5 10.5 0 0113.6 0"/><path class="a1" d="M8.6 15.4a5.6 5.6 0 016.8 0"/><path d="M12 19h.01" stroke-width="2.6"/>'),
    wall:svg('<g class="a1"><path d="M8 5h13v14H8z M8 9.7h13 M8 14.3h13 M13 5v4.7 M17.5 5v4.7 M11 9.7v4.6 M15.5 9.7v4.6 M13 14.3V19 M17.5 14.3V19"/></g><path class="a2" d="M1.5 12H7 M4.5 9.5L7 12l-2.5 2.5" stroke="#c0392b"/>'),
    globeA:svg('<circle cx="12" cy="12" r="8.5"/><g class="a1"><path d="M3.5 12h17 M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5s-1.2 6.1-3.5 8.5c-2.3-2.4-3.5-5.2-3.5-8.5S9.7 5.9 12 3.5z"/></g><circle class="a2" cx="18.5" cy="5.5" r="3" stroke="#c0392b"/>'),
    sliders:svg('<path d="M3 6h18 M3 12h18 M3 18h18" opacity=".35"/><circle class="a1" cx="9" cy="6" r="2.4" fill="currentColor"/><circle class="a2" cx="15" cy="12" r="2.4" fill="currentColor"/><circle class="a3" cx="10" cy="18" r="2.4" fill="currentColor"/>'),
    bars:svg('<path d="M3 21h18" /><rect class="a1" x="5" y="12" width="3.4" height="8" rx="1"/><rect class="a2" x="10.3" y="7" width="3.4" height="13" rx="1"/><rect class="a3" x="15.6" y="3.5" width="3.4" height="16.5" rx="1"/>'),
    gear:svg('<g class="a1"><circle cx="12" cy="12" r="3.2"/><circle cx="12" cy="12" r="7"/><path d="M12 1.8v3 M12 19.2v3 M1.8 12h3 M19.2 12h3 M4.8 4.8l2.1 2.1 M17.1 17.1l2.1 2.1 M4.8 19.2l2.1-2.1 M17.1 6.9l2.1-2.1"/></g>'),
    ztp:svg('<rect x="3" y="12.5" width="18" height="7.5" rx="2"/><path d="M7 16.3h.01 M10 16.3h.01"/><path class="a1" d="M13.5 1.5L9.5 7.5h4l-2 4.5 5-6.5h-4z" fill="currentColor" stroke-width="1.2"/><circle class="a2" cx="17" cy="16.3" r="2"/>'),
    nac:svg('<rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M8.5 12a2 2 0 100-4 2 2 0 000 4z M5.5 16c.5-1.6 1.6-2.4 3-2.4s2.5.8 3 2.4 M14 9.5h4 M14 13h3"/><path class="a1" d="M2 12h20" stroke="#FF8C1A" stroke-width="1.6"/>')
  };
  $$('[data-gl]').forEach(function(e){var k=e.getAttribute('data-gl');e.innerHTML=AGL[k]||gly(k);});
  $$('[data-gl2]').forEach(function(e){e.insertAdjacentHTML('afterbegin',gly(e.getAttribute('data-gl2')));});
  var P2={};function path2(k){if(!P2[k]&&window.Path2D)P2[k]=new Path2D(GLY[k]);return P2[k];}

  /* =========================================================
     Shared ticker \u2014 one requestAnimationFrame for every loop
     ========================================================= */
  var subs=[],raf=0,last=0;
  function frame(t){raf=0;var dt=last?Math.min(48,t-last):16;last=t;var any=false;
    for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){any=true;s.fn(t,dt);}}
    if(any)raf=requestAnimationFrame(frame);else last=0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function glowSprite(rgb,size){var c=d.createElement('canvas');c.width=c.height=size;var x=c.getContext('2d'),g=x.createRadialGradient(size/2,size/2,0,size/2,size/2,size/2);
    g.addColorStop(0,'rgba('+rgb+',1)');g.addColorStop(.28,'rgba('+rgb+',.5)');g.addColorStop(1,'rgba('+rgb+',0)');x.fillStyle=g;x.fillRect(0,0,size,size);return c;}
  var tweens={},twId=0,twOn=loop(function(t,dt){var any=false;for(var k in tweens){var o=tweens[k];o.p=Math.min(1,o.p+dt/(o.ms||650));var v=o.a+(o.b-o.a)*eo(o.p);o.el.textContent=o.f(v);if(o.p<1)any=true;else delete tweens[k];}if(!any)twOn(false);});
  function tween(el,to,f,ms){if(!el)return;if(!el._tw)el._tw='t'+(twId++);var from=el._v===undefined?0:el._v;el._v=to;if(R||from===to){el.textContent=f(to);delete tweens[el._tw];return;}tweens[el._tw]={el:el,a:from,b:to,p:0,f:f,ms:ms};twOn(true);}
  function inr(v){return XH.inr(Math.round(v));}

  var hero=$id('cbHero');
  var GRN=[95,224,141],BLU=[127,176,255],AMB=[255,177,92],RED=[255,90,74],NEU=[150,172,215],ORA=[255,150,50],PUR=[170,150,255],CYA=[95,205,225];

  /* =========================================================
     1. Hero background \u2014 city skyline in three depth planes, rooftop signals
     ========================================================= */
  (function(){
    var cv=$id('cbBg');if(!cv||!hero)return;
    var cx=cv.getContext('2d'),W=0,H=0,LAY=[],WIN=[],ROOF=[],PX=0,PY=0,PXT=0,PYT=0,spB=glowSprite('130,185,255',24),spO=glowSprite('255,160,60',24),PK=[];
    function FX(x){var u=clamp(x/W/.4,0,1);return .06+.94*u*u*(3-2*u);}
    function build(){W=cv.offsetWidth||hero.offsetWidth;H=hero.offsetHeight;if(!W||!H)return;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);
      var r=rng(41);LAY=[];WIN=[];ROOF=[];PK=[];
      for(var ly=0;ly<3;ly++){var oc=d.createElement('canvas');oc.width=Math.round((W+60)*DPR);oc.height=Math.round((H+60)*DPR);var x=oc.getContext('2d');x.setTransform(DPR,0,0,DPR,30*DPR,30*DPR);
        var base=H+2,hmax=H*[.26,.36,.5][ly],bx=-20;
        while(bx<W+20){var bw=(ly===2?28:20)+r()*(ly===2?54:40),bh=hmax*(.35+r()*.65),f=FX(bx+bw/2);
          x.globalAlpha=f*[.16,.22,.3][ly];x.fillStyle=['#14306b','#123a85','#0f3f99'][ly];x.fillRect(bx,base-bh,bw-3,bh);
          x.globalAlpha=f*[.18,.3,.42][ly];x.strokeStyle='rgb(127,176,255)';x.lineWidth=1;x.beginPath();x.moveTo(bx,base-bh);x.lineTo(bx+bw-3,base-bh);x.stroke();
          for(var wy=base-bh+8;wy<base-8;wy+=9)for(var wx=bx+5;wx<bx+bw-8;wx+=8){var q=r();if(q<.18){x.globalAlpha=f*(.25+.4*r())*[.5,.7,1][ly];x.fillStyle=q<.03?'#FFB15C':'#9cc4ff';x.fillRect(wx,wy,2.2,3);if(q<.045&&WIN.length<70)WIN.push({x:wx,y:wy,ly:ly,ph:r()*TAU,o:q<.02});}}
          if(ly===2&&r()<.35&&bh>hmax*.6){x.globalAlpha=f*.6;x.strokeStyle='rgb(160,200,255)';x.beginPath();x.moveTo(bx+bw/2,base-bh);x.lineTo(bx+bw/2,base-bh-14);x.stroke();ROOF.push([bx+bw/2,base-bh-14,f]);}
          bx+=bw;}
        LAY.push(oc);}
    }
    function draw(t,dt){if(!W)return;
      PX+=(PXT-PX)*Math.min(1,dt*.004);PY+=(PYT-PY)*Math.min(1,dt*.004);
      cx.setTransform(DPR,0,0,DPR,0,0);cx.clearRect(0,0,W,H);
      for(var ly=0;ly<3;ly++){var dp=[4,9,16][ly];cx.globalAlpha=1;cx.drawImage(LAY[ly],0,0,LAY[ly].width,LAY[ly].height,-30+PX*dp,-30+PY*dp*.4,W+60,H+60);}
      var i,w,dp2;
      for(i=0;i<WIN.length;i++){w=WIN[i];dp2=[4,9,16][w.ly];var a=.5+.5*Math.sin(t*.0012+w.ph);cx.globalAlpha=a*FX(w.x)*.9;cx.drawImage(w.o?spO:spB,w.x-5+PX*dp2,w.y-4+PY*dp2*.4,12,12);}
      /* rooftop Wi-Fi signals: expanding arcs */
      cx.lineWidth=1.2;
      for(i=0;i<ROOF.length;i++){var rf=ROOF[i],x=rf[0]+PX*16,y=rf[1]+PY*6.4;for(var k=0;k<2;k++){var u=((t*.00035+i*.37+k*.5)%1);cx.globalAlpha=(1-u)*.45*rf[2];cx.strokeStyle='#7fb0ff';cx.beginPath();cx.arc(x,y,4+u*34,-Math.PI*.82,-Math.PI*.18);cx.stroke();}
        cx.globalAlpha=rf[2]*(.6+.4*Math.sin(t*.004+i));cx.drawImage(spO,x-5,y-5,10,10);}
      /* packets hopping between rooftops */
      if(ROOF.length>1){if(PK.length<6&&Math.random()<dt/260){var a2=Math.floor(Math.random()*ROOF.length),b2=Math.floor(Math.random()*ROOF.length);if(a2!==b2)PK.push({a:a2,b:b2,t:t,d:1600+Math.random()*1200});}
        for(i=PK.length-1;i>=0;i--){var p=PK[i],uu=(t-p.t)/p.d;if(uu>=1){PK.splice(i,1);continue;}var A=ROOF[p.a],B=ROOF[p.b],mx=(A[0]+B[0])/2,my=Math.min(A[1],B[1])-50,v=1-uu,px=v*v*A[0]+2*v*uu*mx+uu*uu*B[0]+PX*16,py=v*v*A[1]+2*v*uu*my+uu*uu*B[1]+PY*6.4;
          cx.globalAlpha=Math.sin(uu*Math.PI)*.85*FX(px);cx.drawImage(spB,px-5,py-5,10,10);}}
      cx.globalAlpha=1;}
    build();var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){build();if(R)draw(4000,16);},150);});
    if(R){draw(4000,16);return;}
    hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();PXT=((e.clientX-r.left)/r.width-.5)*2;PYT=((e.clientY-r.top)/r.height-.5)*2;});
    hero.addEventListener('pointerleave',function(){PXT=PYT=0;});
    var on=loop(draw);XH.whenVisible(hero,on);
  })();

  /* =========================================================
     2. Hero stage \u2014 power up \u2192 connect \u2192 block \u2192 control \u2192 cloud \u2192 sites \u2192 protect (21.5 s)
     ========================================================= */
  (function(){
    var cbv=$id('cbv'),sc=$id('cbvSc'),cv=$id('cbvCv'),img=$id('cbvImg');if(!cbv||!cv)return;
    var ctx=cv.getContext('2d'),fxl=$id('cbvFx'),spot=$id('cbvSpot');
    var cId=$id('cbvId'),cBl=$id('cbvBl'),cAc=$id('cbvAc'),cCl=$id('cbvCl'),cEnd=$id('cbvEnd'),acV=$id('cbvAcV'),CARDS=[cId,cBl,cAc,cCl];
    var lg=$id('cbvLg'),lgp=$id('cbvLgP'),fill=$id('cbvFill'),tk=$('.cbv-tk',cbv),rail=$$('#cbvRail>span');
    var KD=$$('#cbvKp>div'),KB=[0,1,2,3].map(function(i){return $id('cbvK'+i);}),KE=[0,1,2,3].map(function(i){return $id('cbvD'+i);}),BW=[0,1,2].map(function(i){return $id('cbvW'+i);});
    var sprB=glowSprite('110,170,255',64),sprO=glowSprite('255,150,50',64),sprG=glowSprite('95,224,141',64),sprR=glowSprite('255,90,70',64),sprW=glowSprite('255,236,200',64),sprP=glowSprite('170,150,255',64),sprC=glowSprite('95,205,225',64);
    var SPC={b:sprB,o:sprO,g:sprG,r:sprR,w:sprW,p:sprP,c:sprC};
    var ACT=[0,3200,7200,10600,13600,16400,18900],LOOP=21500,ACTN=['power up','connect','block','control','cloud','multi-site','protected'];
    var LED=[[.359,.76],[.425,.766],[.49,.774],[.56,.78],[.625,.79]],ANT=[[.204,.035],[.38,.035],[.73,.035],[.92,.03]];
    var DEV=[
      {k:'lap',x:.1,y:.3,c:'st',lab:'priya \xB7 staff',wf:1},
      {k:'phn',x:.09,y:.62,c:'st',lab:'arjun \xB7 staff',wf:1},
      {k:'prn',x:.21,y:.88,c:'io',lab:'printer \xB7 IoT',wf:0},
      {k:'cam',x:.38,y:.93,c:'io',lab:'camera \xB7 IoT',wf:0},
      {k:'phn',x:.63,y:.93,c:'gu',lab:'guest \xB7 VLAN 99',wf:1},
      {k:'lap',x:.8,y:.88,c:'gu',lab:'guest \xB7 VLAN 99',wf:1}];
    var CC={st:BLU,io:CYA,gu:PUR},CS={st:'b',io:'c',gu:'p'};
    var W=0,H=0,FS=9,BG=[6,18,48],DUST=[],FLOOR=null,PHOTO=null,PK=[],PART=[],RING=[],WR=[],SPR={},D={x:0,y:0,w:0,h:0},CL={x:0,y:0},NET={x:0,y:0},BR=[{x:0,y:0,t:-1},{x:0,y:0,t:-1}];
    var S={fx:0,fy:0,fs:1.3,px:0,py:0,pxT:0,pyT:0,ptr:false};
    var T=0,ci=0,act=-1,lastFill='',lastFx='',logS='',logT=0,logN=-1,emA=0,ledT=[-1,-1,-1,-1,-1],pwrT=-1,wifiT=-1,cloudT=-1,shT=-1,shC='r',endT=-1,thrT=-1,thrEnd=-1,wrA=0;
    var SS=DPR*1.3;
    function font(sz,wt){return (wt||600)+' '+sz+'px "IBM Plex Mono",ui-monospace,monospace';}
    function spr(txt,h,bd,bg,tc,dot,wt){ctx.font=font(FS,wt);var w=ctx.measureText(txt).width+(dot?24:16),c=d.createElement('canvas'),pw=Math.ceil(w+4),ph=Math.ceil(h+4);c.width=Math.ceil(pw*SS);c.height=Math.ceil(ph*SS);var x=c.getContext('2d');x.scale(SS,SS);
      rr(x,2,2,w,h,h/2);if(bg){x.fillStyle=bg;x.fill();}if(bd){x.lineWidth=1.2;x.strokeStyle=bd;x.stroke();}
      if(dot){x.fillStyle=dot;x.beginPath();x.arc(2+9,2+h/2,2.6,0,TAU);x.fill();}
      x.font=font(FS,wt);x.textAlign='center';x.textBaseline='middle';x.fillStyle=tc;x.fillText(txt,2+w/2+(dot?4:0),2+h/2+.5);c.lw=pw;c.lh=ph;return c;}
    function blit(s,x,y,a,k){if(!s||a<=0)return;k=k||1;ctx.globalAlpha=Math.min(1,a);ctx.drawImage(s,x-s.lw*k/2,y-s.lh*k/2,s.lw*k,s.lh*k);}
    function sprites(){var h=W<420?14:16;
      DEV.forEach(function(dv,i){var c=CC[dv.c];SPR['d'+i]=spr(dv.lab,h,rgba(c,.75),'rgba(10,26,60,.92)','#e6efff',rgba(c,1),600);});
      SPR.cl=spr('Cybird Cloud',h,null,null,'#cfe0ff',null,700);SPR.net=spr('Internet',h,null,null,'#cfe0ff',null,700);
      SPR.b0=spr('Branch 1',h,'rgba(95,224,141,.7)','rgba(14,60,40,.92)','#fff','#5FE08D',700);SPR.b1=spr('Branch 2',h,'rgba(95,224,141,.7)','rgba(14,60,40,.92)','#fff','#5FE08D',700);
      ['PWR','SYS','WAN','LAN','WIFI'].forEach(function(n,i){SPR['l'+i]=spr(n+' \u25CF',h-2,'rgba(95,224,141,.7)','rgba(10,40,30,.92)','#8ff0b2',null,700);});
      SPR.blk=spr('BLOCKED',h,'#ff8a80','rgba(120,20,20,.95)','#fff',null,700);SPR.cap=spr('CAPPED',h,'#FFB15C','rgba(110,60,10,.95)','#fff',null,700);}
    function photo(){if(!img||!img.complete||!img.naturalWidth||!D.w)return;var s=DPR*1.4;PHOTO=d.createElement('canvas');PHOTO.width=Math.round(D.w*s);PHOTO.height=Math.round(D.h*s);var x=PHOTO.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(img,0,0,PHOTO.width,PHOTO.height);}
    function size(){
      W=sc.clientWidth;H=sc.clientHeight;if(!W)return;
      cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);FS=W<420?8:9;
      D.w=Math.min(W*.44,232);D.h=D.w*411/760;D.x=W*.5;D.y=H*.6;
      CL.x=W*.5;CL.y=H*.12;NET.x=W*.92;NET.y=H*.5;BR[0].x=W*.15;BR[0].y=H*.12;BR[1].x=W*.85;BR[1].y=H*.12;
      DEV.forEach(function(dv){dv.X=W*dv.x;dv.Y=H*dv.y;dv.K=.84+.3*dv.y;});
      var r=rng(5);DUST=[];for(var i=0;i<(W<420?40:70);i++)DUST.push([r()*W,r()*H,r()*TAU,.6+r()*1.2]);
      FLOOR=d.createElement('canvas');FLOOR.width=Math.round((W+40)*DPR);FLOOR.height=Math.round((H+40)*DPR);var f=FLOOR.getContext('2d');f.setTransform(DPR,0,0,DPR,20*DPR,20*DPR);
      var vx=W/2,vy=-H*.6,hz=H*.3;f.strokeStyle='rgb(127,176,255)';f.lineWidth=1;
      for(i=-14;i<=14;i++){var bx=W/2+i*W*.09,u=(hz-vy)/(H+20-vy),tx=vx+(bx-vx)*u;f.globalAlpha=.07;f.beginPath();f.moveTo(tx,hz);f.lineTo(bx,H+20);f.stroke();}
      for(i=0;i<10;i++){var yy=hz+(H+20-hz)*Math.pow(i/9,1.7);f.globalAlpha=.035+.05*i/9;f.beginPath();f.moveTo(-20,yy);f.lineTo(W+20,yy);f.stroke();}
      var cs=getComputedStyle(sc).backgroundColor.match(/d+/g);if(cs)BG=[+cs[0],+cs[1],+cs[2]];
      if(!S.fx){S.fx=D.x;S.fy=D.y-D.h*.1;}
      sprites();photo();
    }
    function ledP(i){return [D.x-D.w/2+D.w*LED[i][0],D.y-D.h/2+D.h*LED[i][1]];}
    function antP(i){return [D.x-D.w/2+D.w*ANT[i][0],D.y-D.h/2+D.h*ANT[i][1]];}
    function wanP(){return [D.x+D.w*.46,D.y+D.h*.18];}
    function upP(){return [D.x+D.w*.05,D.y-D.h*.3];}
    function portP(dv){if(dv.wf){var best=0,bd=1e9;for(var i=0;i<4;i++){var a=antP(i),dd=Math.abs(a[0]-dv.X);if(dd<bd){bd=dd;best=i;}}return antP(best);}return [D.x+(dv.X<D.x?-1:1)*D.w*.3,D.y+D.h*.42];}
    function cam(sd,pp){var s=1+(S.fs-1)*sd;ctx.setTransform(DPR*s,0,0,DPR*s,DPR*(W/2-S.fx*s+S.px*pp),DPR*(H/2-S.fy*s+S.py*pp*.7));}
    function burst(x,y,n,cols,spd){for(var k=0;k<n;k++){var a=Math.random()*TAU,v=(.03+Math.random()*.08)*(spd||1);PART.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-.02,l:0,m:600+Math.random()*700,c:cols[k%cols.length],s:6+Math.random()*7});}}
    function log(s){logS=s;logT=T;logN=-1;}
    function setAct(a){act=a;cbv.className='cbv a'+a;rail.forEach(function(r,k){r.classList.toggle('on',k===a);r.classList.toggle('dn',k<a);});setT('cbvLive','sample \xB7 '+ACTN[a]);}
    function kpi(i,cls){KD[i].classList.remove('good','bad');if(cls)KD[i].classList.add(cls);}
    function card(el,st){el.className=el.className.replace(/s*(show|out)\b/g,'')+(st?' '+st:'');}
    function bars(a){BW.forEach(function(b,i){b.style.transform='scaleX('+a[i]+')';});}
    function reset(){
      DEV.forEach(function(dv){dv.t0=-1;});BR.forEach(function(b){b.t=-1;});
      PK.length=0;PART.length=0;RING.length=0;WR.length=0;ledT=[-1,-1,-1,-1,-1];pwrT=-1;wifiT=-1;cloudT=-1;shT=-1;endT=-1;thrT=-1;thrEnd=-1;
      CARDS.forEach(function(c){card(c,'');});cEnd.className='cbv-end';$$('li',cBl).forEach(function(l){l.classList.remove('in');});$$('li',cCl).forEach(function(l){l.classList.remove('in');});
      acV.classList.remove('in');bars([.32,.88,.5]);
      KB[0].textContent='0';KB[1].textContent='0';KB[2].textContent='0';KB[3].textContent='1';KE[0].textContent='booting';KE[1].textContent='gateway';KE[2].textContent='controls';KE[3].textContent='cloud';[0,1,2,3].forEach(function(i){kpi(i);});
      lgp.textContent='\u203A';
    }
    function pk(a,b,dur,c,bend,tail){PK.push({a:a,b:b,t:T,d:dur,c:c,o:bend||0,tl:tail===undefined?4:tail});}
    function qPos(a,b,u,bend,o){var mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=b[0]-a[0],dy=b[1]-a[1],qx=mx-dy*bend,qy=my+dx*bend,v=1-u;o[0]=v*v*a[0]+2*v*u*qx+u*u*b[0];o[1]=v*v*a[1]+2*v*u*qy+u*u*b[1];return o;}
    function devBend(dv){return dv.wf?(dv.X<D.x?-.18:.18):(dv.X<D.x?.22:-.22);}
    function join(i){var dv=DEV[i];dv.t0=T;var c=CC[dv.c];RING.push({x:dv.X,y:dv.Y,t:T,c:c,s:.18});pk([dv.X,dv.Y],portP(dv),600,CS[dv.c],devBend(dv));burst(dv.X,dv.Y,8,[CS[dv.c],'w']);
      KB[0].textContent=String(i+1);bump(KB[0]);
      log(['priya@office \xB7 WPA2-Enterprise \xB7 staff VLAN 10','arjun@office \xB7 WPA2-Enterprise \xB7 staff VLAN 10','printer \xB7 wired LAN \xB7 IoT VLAN 30','IP camera \xB7 wired LAN \xB7 IoT VLAN 30','guest phone \xB7 guest portal \xB7 VLAN 99 \xB7 internet only','guest laptop \xB7 guest portal \xB7 VLAN 99 \xB7 internet only'][i]);}
    function block(kind){shT=T;shC='r';var p=[D.x+D.w*.18,D.y-D.h*.05];RING.push({x:p[0],y:p[1],t:T,c:RED,s:.3});burst(p[0],p[1],24,['r','o','w'],1.3);restart(cbv,'alarm');
      var n=kind+1;KB[1].textContent=String(n);bump(KB[1]);kpi(1,'bad');$id('cbvB'+kind).classList.add('in');
      log(kind?'invoice_0412.pdf.exe \xB7 malware download \xB7 blocked by threat protection':'bank-kyc-update.xyz \xB7 phishing \xB7 blocked by DNS filter');}
    var CUES=[[0,function(){reset();pwrT=T;log('Cybird X2 \xB7 power on');}]];
    [0,1,2,3,4].forEach(function(i){CUES.push([380+i*430,function(){ledT[i]=T;var p=ledP(i);burst(p[0],p[1],6,['g','w'],.6);RING.push({x:p[0],y:p[1],t:T,c:GRN,s:.06});
      log(['PWR \xB7 power OK','SYS \xB7 firmware verified \xB7 security services starting','WAN \xB7 internet link up on the gigabit WAN port','LAN \xB7 4 \xD7 gigabit LAN ports ready','WIFI \xB7 Wi-Fi 6 broadcasting on 2.4 & 5 GHz'][i]);if(i===4)KE[0].textContent='ready';}]);});
    CUES.push([2400,function(){wifiT=T;}]);
    DEV.forEach(function(dv,i){CUES.push([3400+i*400,function(){join(i);}]);});
    CUES.push([5500,function(){card(cId,'show');kpi(0,'good');KE[0].textContent='6 online';}]);
    CUES.push([7000,function(){card(cId,'out');}]);
    CUES.push([7300,function(){log('priya clicks a link in an email \xB7 bank-kyc-update.xyz');pk([DEV[0].X,DEV[0].Y],portP(DEV[0]),620,'r',devBend(DEV[0]),5);}]);
    CUES.push([7950,function(){card(cBl,'show');block(0);}]);
    CUES.push([8800,function(){log('download requested \xB7 invoice_0412.pdf.exe');pk(wanP(),[NET.x,NET.y],520,'b',.12);}]);
    CUES.push([9350,function(){pk([NET.x,NET.y],wanP(),620,'r',-.12,5);}]);
    CUES.push([9980,function(){block(1);}]);
    CUES.push([10400,function(){card(cBl,'out');KE[1].textContent='2 stopped';kpi(1,'good');}]);
    CUES.push([10750,function(){thrT=T;log('guest phone \xB7 video streaming \xB7 bandwidth spike');}]);
    CUES.push([11000,function(){card(cAc,'show');}]);
    CUES.push([12000,function(){thrEnd=T;bars([.86,.22,.42]);acV.classList.add('in');KB[2].textContent='1';bump(KB[2]);kpi(2,'good');KE[2].textContent='applied';
      var g=DEV[4];RING.push({x:g.X,y:g.Y,t:T,c:AMB,s:.2});log('App control \xB7 streaming capped \xB7 business apps first');}]);
    CUES.push([12600,function(){KB[2].textContent='2';bump(KB[2]);log('Policy \xB7 guest Wi-Fi limited to internet only');}]);
    CUES.push([13350,function(){card(cAc,'out');}]);
    CUES.push([13750,function(){cloudT=T;RING.push({x:CL.x,y:CL.y,t:T,c:BLU,s:.25});burst(CL.x,CL.y,14,['b','w']);log('Cybird Cloud \xB7 centralized management connected');}]);
    CUES.push([14100,function(){card(cCl,'show');}]);
    [0,1,2].forEach(function(j){CUES.push([14450+j*420,function(){$id('cbvC'+j).classList.add('in');}]);});
    CUES.push([15300,function(){log('Alerts and daily report synced to Cybird Cloud');}]);
    CUES.push([16150,function(){card(cCl,'out');}]);
    [0,1].forEach(function(j){CUES.push([16700+j*800,function(){var b=BR[j];b.t=T;RING.push({x:b.x,y:b.y,t:T,c:GRN,s:.2});burst(b.x,b.y,12,['g','w']);KB[3].textContent=String(2+j);bump(KB[3]);
      if(j)kpi(3,'good');KE[3].textContent=(2+j)+' sites';log('Branch '+(j+1)+' online \xB7 zero touch provisioning from Cybird Cloud');}]);});
    CUES.push([19000,function(){endT=T;cEnd.className='cbv-end show';cbv.classList.add('win');lgp.textContent='\u2713';RING.push({x:D.x,y:D.y,t:T,c:GRN,s:.5});RING.push({x:D.x,y:D.y,t:T+200,c:BLU,s:.4});burst(D.x,D.y-D.h*.2,30,['g','b','w'],1.3);log('One device. Total protection.');}]);
    CUES.push([20950,function(){cEnd.className='cbv-end out';}]);
    CUES.sort(function(a,b){return a[0]-b[0];});
    function emit(dt){var rate=[0,170,200,110,150,160,240][act]||200;if(!rate)return;emA+=dt;
      while(emA>rate){emA-=rate;var on=DEV.filter(function(x){return x.t0>=0;});
        if(act>=4&&cloudT>=0&&Math.random()<.3){pk(upP(),[CL.x,CL.y+10],760,'b',.15*(Math.random()-.5),3);continue;}
        if(act>=5&&Math.random()<.35){var b=BR[Math.random()<.5?0:1];if(b.t>=0){pk([b.x,b.y],[CL.x,CL.y],900,'g',-.12,3);continue;}}
        if(!on.length)continue;var dv=on[Math.floor(Math.random()*on.length)];
        if(act===3&&thrT>=0&&Math.random()<(thrEnd<0?.65:.18)){var g=DEV[4];pk([g.X,g.Y],portP(g),thrEnd<0?420:900,'o',devBend(g),thrEnd<0?6:2);continue;}
        if(act!==2&&Math.random()<.3){pk(wanP(),[NET.x,NET.y],700,'g',.12*(Math.random()<.5?1:-1),3);continue;}
        var out=Math.random()<.5;pk(out?[dv.X,dv.Y]:portP(dv),out?portP(dv):[dv.X,dv.Y],700+Math.random()*300,CS[dv.c],out?devBend(dv):-devBend(dv),3);}}
    var tmp=[0,0];
    function update(dt){
      var e=1-Math.exp(-dt/450);
      if(!S.ptr){S.pxT=Math.sin(T*.00042)*.35;S.pyT=Math.cos(T*.00031)*.28;}
      S.px+=(S.pxT-S.px)*Math.min(1,dt*.0045);S.py+=(S.pyT-S.py)*Math.min(1,dt*.0045);
      var fx=W/2,fy=H/2,fs=1;
      if(act===0){fs=1.32;fx=D.x;fy=D.y-D.h*.05;}
      else if(act===1){fs=1.0;}
      else if(act===2){fs=1.1;fx=lerp(W/2,NET.x,.22);fy=lerp(H/2,D.y,.25);}
      else if(act===3){fs=1.06;fx=lerp(W/2,DEV[4].X,.2);fy=lerp(H/2,DEV[4].Y,.16);}
      else if(act===4){fs=1.05;fy=lerp(H/2,CL.y,.22);}
      else if(act===5){fs=.9;fy=H*.47;}
      else{fs=1.02;fy=H*.53;}
      S.fx+=(fx-S.fx)*e;S.fy+=(fy-S.fy)*e;S.fs+=(fs-S.fs)*e;
      if(T<20700)emit(dt);
      if(wifiT>=0){wrA+=dt;if(wrA>380){wrA=0;WR.push({a:Math.floor(Math.random()*4),t:T});}}
      for(var i=PK.length-1;i>=0;i--){if((T-PK[i].t)/PK[i].d>=1)PK.splice(i,1);}
      for(i=WR.length-1;i>=0;i--){if(T-WR[i].t>1300)WR.splice(i,1);}
      for(i=PART.length-1;i>=0;i--){var q=PART[i];q.l+=dt;if(q.l>=q.m){PART.splice(i,1);continue;}q.x+=q.vx*dt;q.y+=q.vy*dt;q.vx*=.985;q.vy*=.985;}
    }
    function tile(x,y,s,col,a,glyph){var c=ctx;c.globalAlpha=a;rr(c,x-s/2,y-s/2,s,s,s*.26);c.fillStyle='rgba(9,24,58,.96)';c.fill();c.lineWidth=1.4;c.strokeStyle=rgba(col,.95);c.stroke();
      var p=path2(glyph);if(p){c.save();c.translate(x-s*.32,y-s*.32);var k=s*.64/24;c.scale(k,k);c.lineWidth=1.9;c.lineCap='round';c.lineJoin='round';c.strokeStyle='#e6efff';c.stroke(p);c.restore();}}
    function shield(x,y,s,a,col){var c=ctx,p=path2('shd');if(!p)return;c.save();c.globalAlpha=a;c.translate(x-s/2,y-s/2);var k=s/24;c.scale(k,k);c.fillStyle=rgba(col,.22);c.fill(p);c.lineWidth=2.2;c.lineJoin='round';c.lineCap='round';c.strokeStyle=rgba(col,1);c.stroke(p);c.restore();}
    function render(t){
      var i,c=ctx,k;
      c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,W,H);
      /* ---- far plane ---- */
      cam(.3,4);c.globalAlpha=1;c.drawImage(FLOOR,0,0,FLOOR.width,FLOOR.height,-20,-20,W+40,H+40);
      c.fillStyle='rgb(170,205,255)';for(i=0;i<DUST.length;i++){var du=DUST[i];c.globalAlpha=.25+.3*Math.sin(t*.0017+du[2]);c.fillRect(du[0],du[1],du[3],du[3]);}
      /* ---- mid plane ---- */
      cam(1,10);
      var ts=W<420?22:27,on=pwrT>=0?clamp((T-pwrT)/700,0,1):0;
      /* links: uplink to cloud, WAN to internet, branches */
      c.setLineDash([3,5]);c.lineDashOffset=-t*.03;c.lineWidth=1.2;
      var up=upP(),wn=wanP(),ca=cloudT>=0?Math.min(1,(T-cloudT)/500):0;
      c.globalAlpha=.16+.5*ca;c.strokeStyle=ca?'#7fb0ff':'#4a6aa8';c.beginPath();c.moveTo(up[0],up[1]);c.quadraticCurveTo(up[0]+10,(up[1]+CL.y)/2,CL.x,CL.y+12);c.stroke();
      c.globalAlpha=ledT[2]>=0?(act===2?.65:.35):.1;c.strokeStyle=act===2?'#ff8a80':'#5FE08D';c.beginPath();c.moveTo(wn[0],wn[1]);c.quadraticCurveTo((wn[0]+NET.x)/2,wn[1]-18,NET.x-14,NET.y);c.stroke();
      for(k=0;k<2;k++){var b=BR[k];if(b.t<0)continue;var bu=clamp((T-b.t)/600,0,1);c.globalAlpha=.5*bu;c.strokeStyle='#5FE08D';c.beginPath();c.moveTo(b.x+(k?-12:12),b.y);c.quadraticCurveTo((b.x+CL.x)/2,b.y-16,CL.x+(k?14:-14),CL.y);c.stroke();}
      /* device connections */
      for(i=0;i<DEV.length;i++){var dv=DEV[i];if(dv.t0<0)continue;var cu=clamp((T-dv.t0)/420,0,1),col=CC[dv.c],pp=portP(dv);
        c.globalAlpha=(dv.wf?.42:.5)*cu;c.strokeStyle=rgba(col,1);c.lineWidth=dv.wf?1.1:1.5;if(!dv.wf)c.setLineDash([]);else c.setLineDash([2,4]);
        c.beginPath();for(k=0;k<=16;k++){qPos([dv.X,dv.Y],pp,k/16*cu,devBend(dv),tmp);if(k)c.lineTo(tmp[0],tmp[1]);else c.moveTo(tmp[0],tmp[1]);}c.stroke();}
      c.setLineDash([]);
      /* throttle valve on the streaming guest */
      if(thrT>=0&&act===3){var g=DEV[4],gp=portP(g);qPos([g.X,g.Y],gp,.5,devBend(g),tmp);var hv=thrEnd>=0?clamp((T-thrEnd)/500,0,1):0;c.globalAlpha=.4+.6*hv;c.drawImage(sprO,tmp[0]-18,tmp[1]-18,36,36);if(hv>0)blit(SPR.cap,tmp[0],tmp[1]-16,hv,.6+.4*spring(hv*1.4));}
      /* cloud, internet, branches */
      var cg=48+ca*30*(1+.15*Math.sin(t*.004));c.globalAlpha=.25+.55*ca;c.drawImage(sprB,CL.x-cg/2,CL.y-cg/2,cg,cg);tile(CL.x,CL.y,ts*1.1,ca?BLU:NEU,.55+.45*ca,'cld');blit(SPR.cl,CL.x+ts*.55+30,CL.y,.6+.4*ca);
      var na=ledT[2]>=0?1:.45;c.globalAlpha=.4*na;c.drawImage(act===2?sprR:sprG,NET.x-22,NET.y-22,44,44);tile(NET.x,NET.y,ts,act===2?RED:GRN,na,'glb');blit(SPR.net,NET.x-6,NET.y+ts*.5+10,na*.9);
      for(k=0;k<2;k++){var b2=BR[k];if(b2.t<0)continue;var au=(T-b2.t)/700,sc2=au<1.4?Math.max(0,spring(au)):1;c.globalAlpha=.5;c.drawImage(sprG,b2.x-26,b2.y-26,52,52);tile(b2.x,b2.y,ts*sc2,GRN,Math.min(1,au*2),'bld');blit(SPR['b'+k],b2.x,b2.y+ts*.5+10,Math.min(1,au*2));}
      /* devices + identity labels */
      for(i=0;i<DEV.length;i++){var d2=DEV[i];if(d2.t0<0)continue;var au2=(T-d2.t0)/700,s2=ts*d2.K*(au2<1.4?Math.max(0,spring(au2)):1),cl2=CC[d2.c];
        c.globalAlpha=.45;var g3=s2*2.1;c.drawImage(SPC[CS[d2.c]],d2.X-g3/2,d2.Y-g3/2,g3,g3);
        tile(d2.X,d2.Y,s2,cl2,Math.min(1,au2*2),d2.k);
        var upL=d2.Y>H*.8,ly=d2.Y+(upL?-1:1)*(s2/2+10),sl=SPR['d'+i];if(sl){var hw=sl.lw/2+2,lx=clamp(d2.X,hw,Math.max(hw,W-hw));blit(sl,lx,ly,Math.min(1,au2*1.5)*(act===2||act===4||act===5?.55:1));}}
      /* Wi-Fi rings from antenna tips */
      for(i=0;i<WR.length;i++){var wr=WR[i],wu=(T-wr.t)/1300,ap=antP(wr.a);c.globalAlpha=(1-wu)*.6;c.strokeStyle='#9cc4ff';c.lineWidth=1.3;c.beginPath();c.arc(ap[0],ap[1],4+wu*44,-Math.PI*.85,-Math.PI*.15);c.stroke();}
      /* the Cybird X2 photo, with power-up spring and LEDs */
      if(PHOTO){var ps=pwrT>=0?spring(Math.min(1.4,(T-pwrT)/800)):1,pw=D.w*(.92+.08*ps),ph=D.h*(.92+.08*ps),gl=40+20*on;
        c.globalAlpha=.35+.35*on;c.drawImage(endT>=0?sprG:sprB,D.x-pw*.75,D.y-ph*.2,pw*1.5,ph*.9);
        c.globalAlpha=.55+.45*on;c.drawImage(PHOTO,D.x-pw/2,D.y-ph/2,pw,ph);
        for(k=0;k<5;k++){var lp=[D.x-pw/2+pw*LED[k][0],D.y-ph/2+ph*LED[k][1]];c.globalAlpha=1;c.fillStyle='#10161f';c.beginPath();c.arc(lp[0],lp[1],2.6,0,TAU);c.fill();
          if(ledT[k]>=0){var lu=(T-ledT[k])/500,blink=k===2||k===4?(.75+.25*Math.sin(t*.02+k)):1;c.globalAlpha=Math.min(1,lu*2)*blink;c.fillStyle=k===3&&act===2?'#ffb15c':'#7dff9e';c.beginPath();c.arc(lp[0],lp[1],2.2,0,TAU);c.fill();c.globalAlpha=Math.min(1,lu*2)*.9*blink;c.drawImage(sprG,lp[0]-9,lp[1]-9,18,18);
            if(act===0&&lu<.95&&(k===4||ledT[k+1]<0))blit(SPR['l'+k],lp[0],D.y+ph*.5+12,Math.min(1,lu*3)*(lu>.75?1-(lu-.75)/.2:1),.9);}}}
      /* ---- near plane ---- */
      cam(1.07,16);
      for(i=0;i<PK.length;i++){var p=PK[i],u=(T-p.t)/p.d;if(u<0||u>1)continue;var spk=SPC[p.c]||sprB;
        for(var j=p.tl;j>=0;j--){var uj=u-j*.04;if(uj<0)continue;qPos(p.a,p.b,uj,p.o,tmp);var sz=j?8-j:11;c.globalAlpha=.9*(1-j/(p.tl+1))*Math.min(1,u*5);c.drawImage(spk,tmp[0]-sz/2,tmp[1]-sz/2,sz,sz);}}
      if(shT>=0){var su=(T-shT)/1300;if(su<1){var sp2=spring(Math.min(1.4,su*2.2)),sx=D.x+D.w*.18,sy=D.y-D.h*.05;shield(sx,sy-6,34*sp2,su<.75?1:(1-su)/.25,RED);blit(SPR.blk,sx,sy+20,su<.75?1:(1-su)/.25,.9);}}
      for(i=0;i<PART.length;i++){var q2=PART[i],lf=1-q2.l/q2.m;c.globalAlpha=lf*.95;var spp=SPC[q2.c]||sprB;c.drawImage(spp,q2.x-q2.s/2,q2.y-q2.s/2,q2.s,q2.s);}
      for(i=RING.length-1;i>=0;i--){var rg=RING[i],rgu=(T-rg.t)/900;if(rgu<0)continue;if(rgu>=1){RING.splice(i,1);continue;}var rad=(16+rgu*W*.5)*(rg.s||1);c.globalAlpha=(1-rgu)*.7;c.strokeStyle=rgba(rg.c,1);c.lineWidth=2;c.beginPath();c.ellipse(rg.x,rg.y,rad,rad*.6,0,0,TAU);c.stroke();}
      if(endT>=0){var eu=clamp((T-endT)/900,0,1);shield(D.x+D.w*.06,D.y-D.h*.62,26*spring(Math.min(1.4,eu*1.6)),eu,GRN);}
      c.globalAlpha=1;
      var fo=Math.max(clamp((T-21000)/500,0,1),1-clamp(T/400,0,1));
      if(fo>0){c.setTransform(DPR,0,0,DPR,0,0);c.fillStyle=rgba(BG,fo);c.fillRect(0,0,W,H);}
    }
    function hud(){
      var a=0;for(var k=ACT.length-1;k>=0;k--){if(T>=ACT[k]){a=k;break;}}
      if(a!==act){var w=cbv.classList.contains('win');setAct(a);if(w&&a===6)cbv.classList.add('win');}
      var fs='scaleX('+(T/LOOP).toFixed(3)+')';if(fs!==lastFill){fill.style.transform=fs;lastFill=fs;}
      var nn=Math.min(logS.length,Math.floor((T-logT)/14));if(nn!==logN){logN=nn;lg.textContent=logS.slice(0,nn);}
      var tf=(S.px*12).toFixed(1)+'px '+(S.py*8).toFixed(1)+'px';if(tf!==lastFx){fxl.style.translate=tf;lastFx=tf;}
    }
    function tick(t,dt){
      if(!W)return;T+=dt;if(T>=LOOP){T-=LOOP;ci=0;}
      while(ci<CUES.length&&CUES[ci][0]<=T){CUES[ci][1]();ci++;}
      update(dt);render(t);hud();
    }
    function finalFrame(){
      reset();setAct(6);DEV.forEach(function(dv){dv.t0=100;});BR.forEach(function(b){b.t=100;});ledT=[100,100,100,100,100];pwrT=1;cloudT=100;wifiT=-1;
      KB[0].textContent='6';KE[0].textContent='6 online';kpi(0,'good');KB[1].textContent='2';KE[1].textContent='2 stopped';kpi(1,'good');KB[2].textContent='2';KE[2].textContent='applied';kpi(2,'good');KB[3].textContent='3';KE[3].textContent='3 sites';kpi(3,'good');
      cEnd.className='cbv-end fin';lgp.textContent='\u2713';lg.textContent='One device. Total protection.';fill.style.transform='scaleX(1)';
      T=19500;act=6;S.fs=1;S.fx=W/2;S.fy=H*.53;endT=-1;render(0);
    }
    size();
    function onSize(){var was=W;size();if(R){finalFrame();return;}if(!was)reset();}
    if('ResizeObserver' in window)new ResizeObserver(onSize).observe(sc);else addEventListener('resize',onSize);
    if(img&&!img.complete)img.addEventListener('load',function(){photo();if(R)finalFrame();});
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){size();if(R)finalFrame();});
    if(R){finalFrame();if(tk)tk.classList.add('paused');return;}
    reset();
    var stage=cbv.closest('.stage')||sc;
    stage.addEventListener('pointermove',function(e){var r=sc.getBoundingClientRect();S.ptr=true;S.pxT=clamp(((e.clientX-r.left)/r.width-.5)*2,-1.2,1.2);S.pyT=clamp(((e.clientY-r.top)/r.height-.5)*2,-1.2,1.2);});
    stage.addEventListener('pointerleave',function(){S.ptr=false;});
    sc.addEventListener('pointermove',function(e){var r=sc.getBoundingClientRect();spot.style.transform='translate('+(e.clientX-r.left).toFixed(0)+'px,'+(e.clientY-r.top).toFixed(0)+'px)';sc.classList.add('hov');});
    sc.addEventListener('pointerleave',function(){sc.classList.remove('hov');});
    var on=loop(tick);XH.whenVisible(cbv,function(v){on(v);if(tk)tk.classList.toggle('paused',!v);});
  })();

  /* =========================================================
     3. Global micro-interactions
     ========================================================= */
  $$('.cb-kin').forEach(function(h){var i=0;h.setAttribute('aria-label',h.textContent.replace(/s+/g,' ').trim());
    (function walk(n){Array.prototype.slice.call(n.childNodes).forEach(function(c){
      if(c.nodeType===3){var f=d.createDocumentFragment();c.textContent.split(/(s+)/).forEach(function(p){if(!p)return;if(/^s+$/.test(p))f.appendChild(d.createTextNode(p));else{var s=d.createElement('span');s.className='w';s.setAttribute('aria-hidden','true');s.style.setProperty('--i',i++);s.textContent=p;f.appendChild(s);}});c.parentNode.replaceChild(f,c);}
      else if(c.nodeType===1)walk(c);});})(h);});
  $$('.cb-sd').forEach(function(s){function w(){s.style.setProperty('--sw',(s.clientWidth-48)+'px');}w();addEventListener('resize',w);XH.whenVisible(s,function(v){s.classList.toggle('run',v&&!R);});});
  ['cbFlow'].forEach(function(id){var f=$id(id);if(f)XH.whenVisible(f,function(v){f.classList.toggle('run',v&&!R);});});
  (function(){var f=$('.cb-ft');if(f)XH.whenVisible(f,function(v){f.classList.toggle('run',v&&!R);});
    $$('.cb-ft .ft').forEach(function(c){c.addEventListener('click',function(){c.classList.toggle('tap');});});
    $$('.kb').forEach(function(k){XH.whenVisible(k,function(v){k.classList.toggle('run',v&&!R);if(v&&!k._c){k._c=1;var b=$('[data-to]',k);if(b){var to=+b.getAttribute('data-to');setTimeout(function(){tween(b,to,function(x){return String(Math.round(x));},1200);},R?0:350);}}});});
  })();
  if(!R){
    var shs=$$('main .sec .sh'),ptick=false;
    var para=function(){ptick=false;var vh=innerHeight,rs=shs.map(function(e){return e.getBoundingClientRect();});
      shs.forEach(function(e,i){var r=rs[i];if(r.bottom<-80||r.top>vh+80)return;var p=(r.top+r.height/2-vh*.5)/vh;e.style.translate='0 '+(clamp(p,-1,1)*-16).toFixed(1)+'px';});};
    addEventListener('scroll',function(){if(!ptick){ptick=true;requestAnimationFrame(para);}},{passive:true});para();
  }
  if(FINE&&!R){
    $$('.cb-mag').forEach(function(b){
      b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.classList.add('mg');b.style.translate=(x*16).toFixed(1)+'px '+(y*11).toFixed(1)+'px';});
      b.addEventListener('pointerleave',function(){b.classList.remove('mg');b.style.translate='';});
    });
    $$('.cb-tl').forEach(function(c){
      c.addEventListener('pointermove',function(e){if(c.classList.contains('rv')&&!c.classList.contains('in'))return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
        c.classList.add('tilting');c.style.transform='perspective(900px) rotateX('+((.5-y)*6).toFixed(2)+'deg) rotateY('+((x-.5)*7).toFixed(2)+'deg) translateY(-4px)';c.style.setProperty('--gx',(x*100).toFixed(1)+'%');c.style.setProperty('--gy',(y*100).toFixed(1)+'%');});
      c.addEventListener('pointerleave',function(){c.classList.remove('tilting');c.style.transform='';});
    });
  }
  function ulMove(tabs){var ul=$('.ul',tabs),b=$('button.on',tabs);if(!ul||!b)return;ul.style.width=b.offsetWidth+'px';ul.style.transform='translateX('+b.offsetLeft+'px)';}

  /* =========================================================
     4. How it works \u2014 sticky stage that morphs through six layouts
     ========================================================= */
  (function(){
    var jr=$id('cbJr');if(!jr)return;
    var st=$id('cbJrSt'),lis=$$('li',st),jv=$id('cbJrV'),cv=$id('cbJrCv'),ctx=cv.getContext('2d'),rb=$$('#cbJrRail b'),rf=$id('cbJrFill'),hdT=$id('cbJrT'),cap=$id('cbJrCap');
    var NT=30,NL=6;
    var CNT=[6,6,6,4,5,3],CATN=['Employees','Laptops & desktops','Mobile devices','Printers & IoT','Guests','IP phones & cameras'],CATC=[[127,176,255],[90,150,240],[150,190,255],CYA,PUR,[80,180,200]];
    var CAP=[['Every device','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>','Your business network','30 devices \xB7 6 kinds \xB7 staff and guests'],
      ['One login per person','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>','Secure Wi-Fi \xB7 per-user access','Staff on VLAN 10 \xB7 IoT on VLAN 30 \xB7 guests on VLAN 99'],
      ['Checked on the way through','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>','Cybird X2 inspects','Firewall \xB7 web & DNS \xB7 threat protection \xB7 app control'],
      ['Out to the apps you use','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>','Secure internet connection','Clean traffic out \xB7 3 threats stopped at the box'],
      ['Managed from anywhere','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>','Cybird Cloud','Centralized management \xB7 threat intelligence'],
      ['Reports you can act on','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>','Visibility & insights','Dashboards \xB7 alerts \xB7 reports \xB7 usage analytics']];
    var CAT=[];CNT.forEach(function(n,c){for(var j=0;j<n;j++)CAT.push(c);});
    var BAND=function(i){var c=CAT[i];return c===4?2:(c===3||c===5)?1:0;};
    var BAD={2:1,14:1,24:1};
    var r=rng(23),SEED=[],inCat=[],inBand=[],inGood=[],cc={},bc={},gc=0;
    for(var i=0;i<NT;i++){var c=CAT[i],b=BAND(i);inCat.push(cc[c]=(cc[c]===undefined?0:cc[c]+1));inBand.push(bc[b]=(bc[b]===undefined?0:bc[b]+1));inGood.push(BAD[i]?-1:gc++);SEED.push({jx:r(),jy:r(),s:r()});}
    var BANDC=[BLU,CYA,PUR],BANDN=[18,7,5];
    var DST=['Microsoft 365','Google Workspace','Cloud apps','Web browsing','Banking & finance','E-commerce'];
    var CLOUD=(function(){var pts=[];for(var k=0;k<NT;k++){var a=k/NT*TAU-Math.PI/2,rr2=1+.22*Math.abs(Math.sin(a*2.5))-.1*Math.max(0,Math.sin(a));pts.push([Math.cos(a)*rr2,Math.sin(a)*rr2*.62]);}return pts;})();
    var LAY=[
      function(i,g){var c=CAT[i],bx=g.W*[.2,.5,.8][c%3],by=g.top+g.RH*[.3,.76][Math.floor(c/3)],j=inCat[i],cols=3,row=Math.floor(j/cols),col=j%cols,nr=Math.ceil(CNT[c]/cols),ncol=Math.min(cols,CNT[c]),sp=g.W*.045;
        return {x:bx+(col-(ncol-1)/2)*sp,y:by+(row-(nr-1)/2)*sp+(g.mini?0:4),w:g.W*.03,h:g.W*.03,r:4,c:CATC[c],a:1};},
      function(i,g){var b=BAND(i),k=inBand[i],n=BANDN[b],per=b===0?9:n,row=Math.floor(k/per),col=k%per,y=g.top+g.RH*[.24,.58,.84][b]+(b===0?(row-.5)*g.W*.045:0),x=g.W*(.36+.58*(per>1?col/(per-1):.5)),pulse=b===0?1+.12*Math.sin(g.t*.004+k):1;
        return {x:x,y:y,w:g.W*.026*pulse,h:g.W*.026*pulse,r:g.W*.02,c:BANDC[b],a:1};},
      function(i,g){var lane=i%6,y0=g.top+g.RH*(.14+lane*.14),yc=g.top+g.RH*.5,u=((g.t/4200)+SEED[i].s)%1,x,y,bad=BAD[i];
        if(u<.48){var q=u/.48;x=g.W*lerp(.05,.42,q);y=lerp(y0,yc+(lane-2.5)*g.RH*.04,eio(q));}
        else if(bad){var hold=(u-.48)/.52;x=g.W*.42+Math.sin(g.t*.05+i)*1.5;y=yc+(lane-2.5)*g.RH*.04;return {x:x,y:y,w:g.W*.03,h:g.W*.03,r:4,c:RED,a:1-hold*.7};}
        else{var q2=(u-.48)/.52;x=g.W*lerp(.58,.96,q2);y=lerp(yc+(lane-2.5)*g.RH*.04,y0,eio(q2));}
        return {x:x,y:y,w:g.W*.026,h:g.W*.026,r:4,c:bad&&u<.48?AMB:GRN,a:Math.min(1,Math.sin(u*Math.PI)*2.5)};},
      function(i,g){if(BAD[i]){var bk=Object.keys(BAD).indexOf(String(i));return {x:g.W*(.1+bk*.05),y:g.top+g.RH*.9,w:g.W*.026,h:g.W*.026,r:4,c:RED,a:.55};}
        var j=inGood[i],dd=j%6,k=Math.floor(j/6),x=g.W*(.78+(k-2)*.035),y=g.top+g.RH*(.1+dd*.16);
        return {x:x,y:y+Math.sin(g.t*.002+i)*1.5,w:g.W*.026,h:g.W*.026,r:g.W*.02,c:GRN,a:1};},
      function(i,g){var p=CLOUD[i],R2=Math.min(g.W*.3,g.RH*.62),ph=g.t*.0003;var a=Math.atan2(p[1],p[0])+ph,m=Math.hypot(p[0],p[1]);
        return {x:g.W*.5+Math.cos(a)*m*R2,y:g.top+g.RH*.36+Math.sin(a)*m*R2*.62/0.62*.62,w:g.W*.026,h:g.W*.026,r:g.W*.02,c:BAD[i]?AMB:BLU,a:1};},
      function(i,g){if(i<12){var bx0=g.W*.06,bx1=g.W*.5,bw=(bx1-bx0)/12,hh=g.RH*(.16+((i*7)%5)*.07+i*.012)*(1+Math.sin(g.t*.002+i)*.03);return {x:bx0+(i+.5)*bw,y:g.top+g.RH*.86-hh/2,w:bw*.64,h:hh,r:3,c:i%4===3?AMB:BLU,a:.95};}
        var j=i-12,an=-Math.PI/2+j/18*TAU+g.t*.00022,Rr=Math.min(g.W*.16,g.RH*.3),s2=Math.min(g.W*.04,g.RH*.07);
        return {x:g.W*.76+Math.cos(an)*Rr,y:g.top+g.RH*.5+Math.sin(an)*Rr,w:s2,h:s2,r:s2*.3,c:j<15?GRN:RED,a:1};}
    ];
    function txt(c,s,x,y,sz,col,al,align,wt){c.globalAlpha=al;c.fillStyle=col;c.font=(wt||600)+' '+sz+'px "IBM Plex Mono",monospace';c.textAlign=align||'left';c.textBaseline='middle';c.fillText(s,x,y);}
    var OVER=[
      function(c,g,w){for(var k=0;k<6;k++){var bx=g.W*[.2,.5,.8][k%3],by=g.top+g.RH*[.3,.76][Math.floor(k/3)],bw=g.W*.27,bh=g.RH*.36;c.globalAlpha=w;rr(c,bx-bw/2,by-bh/2-(g.mini?0:8),bw,bh+(g.mini?0:8),10);c.fillStyle='rgba(127,176,255,.05)';c.fill();c.strokeStyle=rgba(CATC[k],.35);c.lineWidth=1;c.stroke();
          if(!g.mini)txt(c,CATN[k]+' \xB7 '+CNT[k],bx-bw/2+8,by-bh/2+2,9,rgba(CATC[k],1),w,'left',700);}},
      function(c,g,w){var ax=g.W*.13,ay=g.top+g.RH*.52;c.globalAlpha=w;c.fillStyle='#0c2350';rr(c,ax-g.W*.05,ay-12,g.W*.1,24,7);c.fill();c.strokeStyle='#7fb0ff';c.lineWidth=1.3;c.stroke();
        for(var k=0;k<3;k++){var u=((g.t*.0006)+k/3)%1;c.globalAlpha=w*(1-u)*.7;c.strokeStyle='#9cc4ff';c.beginPath();c.arc(ax,ay-12,6+u*26,-Math.PI*.85,-Math.PI*.15);c.stroke();}
        var lab=['Staff \xB7 WPA2-Enterprise \xB7 VLAN 10','IoT \xB7 VLAN 30','Guests \xB7 internet only \xB7 VLAN 99'];
        for(k=0;k<3;k++){var y=g.top+g.RH*[.24,.58,.84][k];c.globalAlpha=w*.35;c.strokeStyle=rgba(BANDC[k],1);c.setLineDash([3,5]);c.lineDashOffset=-g.t*.03;c.beginPath();c.moveTo(ax+g.W*.05,ay);c.quadraticCurveTo(g.W*.28,y,g.W*.34,y);c.stroke();c.setLineDash([]);
          if(!g.mini)txt(c,lab[k],g.W*.36,y-(k===0?g.W*.045:0)-14,9,rgba(BANDC[k],1),w,'left',700);}
        if(!g.mini)txt(c,'secure Wi-Fi',ax,ay+22,9,'#9fb6de',w,'center');},
      function(c,g,w){var bx=g.W*.42,bw=g.W*.16,by=g.top+g.RH*.2,bh=g.RH*.6;c.globalAlpha=w;rr(c,bx,by,bw,bh,12);c.fillStyle='rgba(21,101,216,.22)';c.fill();c.strokeStyle='#7fb0ff';c.lineWidth=1.5;c.stroke();
        var ms=['Firewall','Web \xB7 DNS','Threats','Apps'];for(var k=0;k<4;k++){var my=by+bh*(.16+k*.22),hot=Math.floor(g.t/700)%4===k;c.globalAlpha=w*(hot?1:.6);rr(c,bx+6,my-8,bw-12,16,5);c.fillStyle=hot?'#1565D8':'rgba(127,176,255,.12)';c.fill();if(!g.mini)txt(c,ms[k],bx+bw/2,my,8.5,'#fff',w*(hot?1:.75),'center',700);}
        if(!g.mini){txt(c,'Cybird X2',bx+bw/2,by-10,10,'#fff',w,'center',700);txt(c,'blocked',bx-6,g.top+g.RH*.86,9,'#ff9a8f',w,'right');txt(c,'clean \u2192',g.W*.96,g.top+g.RH*.06,9,'#8ff0b2',w,'right');}},
      function(c,g,w){for(var k=0;k<6;k++){var y=g.top+g.RH*(.1+k*.16);c.globalAlpha=w;rr(c,g.W*.5,y-g.RH*.065,g.W*.47,g.RH*.13,8);c.fillStyle='rgba(95,224,141,.06)';c.fill();c.strokeStyle='rgba(95,224,141,.3)';c.lineWidth=1;c.stroke();if(!g.mini)txt(c,DST[k],g.W*.52,y,9.5,'#cfe0ff',w,'left',600);}
        var sx=g.W*.3,sy=g.top+g.RH*.5,p=path2('shd');c.globalAlpha=w*.35;c.strokeStyle='#5FE08D';c.setLineDash([3,5]);c.lineDashOffset=-g.t*.03;c.beginPath();c.moveTo(g.W*.06,sy);c.lineTo(g.W*.48,sy);c.stroke();c.setLineDash([]);
        if(p){c.save();c.globalAlpha=w;c.translate(sx-14,sy-14);c.scale(28/24,28/24);c.fillStyle='rgba(22,163,74,.3)';c.fill(p);c.strokeStyle='#5FE08D';c.lineWidth=2;c.stroke(p);c.restore();}
        if(!g.mini){txt(c,'secure internet',sx,sy+24,9,'#8ff0b2',w,'center');txt(c,'stopped at Cybird X2',g.W*.06,g.top+g.RH*.98,9,'#ff9a8f',w,'left');}},
      function(c,g,w){var cx=g.W*.5,cy=g.top+g.RH*.36;if(!g.mini){txt(c,'Cybird Cloud',cx,cy-6,13,'#fff',w,'center',700);txt(c,'management \xB7 threat intelligence',cx,cy+12,8.5,'#9fb6de',w,'center');}
        var sites=[['Office',.2],['Branch',.5],['Remote',.8]];for(var k=0;k<3;k++){var sx=g.W*sites[k][1],sy=g.top+g.RH*.9;c.globalAlpha=w*.4;c.strokeStyle='#7fb0ff';c.setLineDash([3,5]);c.lineDashOffset=g.t*.04;c.beginPath();c.moveTo(sx,sy-10);c.lineTo(cx+(sx-cx)*.3,cy+g.RH*.2);c.stroke();c.setLineDash([]);
          c.globalAlpha=w;rr(c,sx-g.W*.07,sy-10,g.W*.14,20,6);c.fillStyle='#0c2350';c.fill();c.strokeStyle='#7fb0ff';c.lineWidth=1;c.stroke();txt(c,g.mini?'':sites[k][0],sx,sy,8.5,'#cfe0ff',w,'center',600);
          var u=((g.t*.0005)+k*.33)%1,px=lerp(sx,cx+(sx-cx)*.3,u),py=lerp(sy-10,cy+g.RH*.2,u);c.globalAlpha=w*Math.sin(u*Math.PI);c.fillStyle='#9cc4ff';c.beginPath();c.arc(px,py,2.5,0,TAU);c.fill();}},
      function(c,g,w){var cx=g.W*.76,cy=g.top+g.RH*.5;txt(c,'30',cx,cy-4,g.mini?20:30,'#ffffff',w,'center',700);txt(c,'devices \xB7 sample',cx,cy+(g.mini?14:20),g.mini?7.5:9.5,'#9fb6de',w,'center');
        c.globalAlpha=w*.35;c.strokeStyle='rgba(127,176,255,1)';c.lineWidth=1;c.beginPath();c.moveTo(g.W*.06,g.top+g.RH*.86);c.lineTo(g.W*.5,g.top+g.RH*.86);c.stroke();
        txt(c,g.mini?'events / day':'events by day \xB7 sample',g.W*.06,g.top+g.RH*.94,g.mini?7.5:9.5,'#9fb6de',w);
        if(!g.mini){var al=['Phishing blocked \xB7 priya','New device \xB7 approved','Streaming capped'],k2=Math.floor(g.t/1600)%3;rr(c,g.W*.06,g.top+g.RH*.04,g.W*.4,22,7);c.globalAlpha=w;c.fillStyle='rgba(255,140,26,.18)';c.fill();txt(c,'\u25CF '+al[k2],g.W*.08,g.top+g.RH*.04+11,9,'#FFB15C',w,'left',700);}}
    ];
    function draw(c,W,H,p,t,top,bot,mini){
      c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,W,H);
      var g={W:W,H:H,top:top,RH:bot-top,t:t,mini:mini},k=Math.min(NL-2,Math.floor(p)),f=clamp(p-k,0,1),fe=eio(f),w=[0,0,0,0,0,0];w[k]+=1-fe;w[k+1]+=fe;
      for(var L=0;L<NL;L++)if(w[L]>.02)OVER[L](c,g,w[L]);
      c.globalAlpha=1;
      for(var i=0;i<NT;i++){var A=LAY[k](i,g),B=LAY[k+1](i,g),fi=eio(clamp(f*1.4-i/NT*.4,0,1));
        var x=lerp(A.x,B.x,fi),y=lerp(A.y,B.y,fi),ww=lerp(A.w,B.w,fi),hh=lerp(A.h,B.h,fi),al=lerp(A.a,B.a,fi),col=mix(A.c,B.c,fi);
        if(al<=.01)continue;c.globalAlpha=al;rr(c,x-ww/2,y-hh/2,ww,hh,lerp(A.r,B.r,fi));
        c.fillStyle=rgba(col,.92);c.fill();c.strokeStyle='rgba(255,255,255,.18)';c.lineWidth=1;c.stroke();}
      c.globalAlpha=1;
    }
    var pT=0,pS=0,kr=-1,W=0,H=0,mini=$$('.jr-mc',st).map(function(m,k){var o={el:m,k:k,vis:false,ctx:m.getContext('2d'),W:0,H:0};XH.whenVisible(m,function(v){o.vis=v;});return o;});
    function measure(){
      var vh=parent.innerHeight,frameTop=frameElement.getBoundingClientRect().top;
      var header=parent.document.querySelector('.xh-header'),headerBottom=header?header.getBoundingClientRect().bottom:0;
      var pinTop=Math.max(16,headerBottom+16),y=-frameTop+vh*.5;
      if(jv.offsetParent!==null){
        var track=jr.getBoundingClientRect(),limit=Math.max(0,st.offsetHeight-jv.offsetHeight);
        var offset=clamp(pinTop-frameTop-track.top,0,limit);
        jv.style.transform='translate3d(0,'+offset.toFixed(2)+'px,0)';
        y=-frameTop+pinTop+jv.offsetHeight/2;
      }else jv.style.transform='';
      var cs=lis.map(function(l){var rc=l.getBoundingClientRect();return rc.top+rc.height/2;}),n=NL-1;
      if(y<=cs[0])pT=0;else if(y>=cs[n])pT=n;else for(var k=0;k<n;k++){if(y>=cs[k]&&y<cs[k+1]){pT=k+(y-cs[k])/(cs[k+1]-cs[k]);break;}}}
    function sizeBig(){W=cv.clientWidth;H=cv.clientHeight;if(!W)return;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);}
    function sizeMini(o){var w=o.el.clientWidth,h=o.el.clientHeight;if(w!==o.W||h!==o.H){o.W=w;o.H=h;o.el.width=Math.round(w*DPR);o.el.height=Math.round(h*DPR);}}
    function steps(k){if(k===kr)return;kr=k;lis.forEach(function(l,i){l.classList.toggle('on',i===k);l.classList.toggle('hot',i===k);});
      rb.forEach(function(b,i){b.classList.toggle('on',i<=k);b.classList.toggle('hot',i===k);});
      var cp=CAP[k];setT('cbJrN','Step '+(k+1)+' of 6');setT(hdT,cp[0]);$id('cbJrCi').innerHTML=cp[1];setT('cbJrCb',cp[2]);setT('cbJrCs',cp[3]);
      if(!R){[hdT,cap].forEach(function(e){restart(e,'sw');});}}
    var bigVis=false,lastRf='';
    function tick(t,dt){
      var big=jv.offsetParent!==null&&bigVis;
      if(big){if(cv.clientWidth!==W||cv.clientHeight!==H)sizeBig();
        pS+=(pT-pS)*(1-Math.exp(-dt/150));if(Math.abs(pT-pS)<.001)pS=pT;
        steps(clamp(Math.round(pS),0,NL-1));var rfs='scaleY('+(pS/(NL-1)).toFixed(3)+')';if(rfs!==lastRf){rf.style.transform=rfs;lastRf=rfs;}
        draw(ctx,W,H,pS,t,H*.17,H*.8,false);}
      mini.forEach(function(o){if(!o.vis||!o.el.offsetParent)return;sizeMini(o);if(o.W)draw(o.ctx,o.W,o.H,o.k,t,o.H*.1,o.H*.92,true);});
    }
    addEventListener('scroll',measure,{passive:true});addEventListener('resize',function(){measure();sizeBig();});
    measure();pS=pT;sizeBig();steps(clamp(Math.round(pS),0,NL-1));
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){measure();sizeBig();});
    if(R){var stat=function(){measure();pS=Math.round(pT);steps(pS);sizeBig();if(W)draw(ctx,W,H,pS,0,H*.17,H*.8,false);rf.style.transform='scaleY('+(pS/(NL-1))+')';mini.forEach(function(o){sizeMini(o);if(o.W)draw(o.ctx,o.W,o.H,o.k,0,o.H*.1,o.H*.92,true);});};
      addEventListener('scroll',stat,{passive:true});addEventListener('resize',stat);stat();return;}
    var on=loop(tick);XH.whenVisible(jr,function(v){bigVis=v;on(v);});
  })();

  /* =========================================================
     5. Hardware explorer \u2014 flip front/back, hotspots, spec rows
     ========================================================= */
  (function(){
    var dx=$id('cbDx');if(!dx)return;
    var stg=$id('cbDxSt'),card=$id('cbDxC'),tabs=$('.dx-t',dx),tb=$$('button',tabs),pop=$id('cbDxP'),hint=$id('cbDxHint'),sh=$('.dx-sh',dx),faces=$$('.dx-f',dx),rows=$$('#cbSpT>div');
    var HS={ant:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg>','Wi-Fi \xB7 antennas','Dual-band 802.11ax Wi-Fi 6','2.4 GHz & 5 GHz \xB7 2\xD72 MU-MIMO \xB7 up to 1200 Mbps'],
      led:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>','Status lights','PWR \xB7 SYS \xB7 WAN \xB7 LAN \xB7 WIFI','Power, system, internet, wired and Wi-Fi status at a glance. Firewall throughput up to 900 Mbps*.'],
      usbf:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>','Front panel','USB port','A USB port on the front panel; the specifications list 2 \xD7 USB 3.0.'],
      cpu:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>','Inside the X2','MediaTek 1.3 GHz dual-core ARM','1 GB DDR4 memory \xB7 128 MB NAND flash storage'],
      dc:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>','Power','DC 12 V / 2 A','Power adapter included in the box \xB7 operating temperature 0\u201340 \xB0C'],
      rst:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>','Back panel','Reset button','Recessed reset button next to the power input.'],
      usb3:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>','Back panel','2 \xD7 USB 3.0','Two USB 3.0 ports on the back panel.'],
      wan:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>','WAN','1 \xD7 WAN 10/100/1000 Mbps','Connects to your ISP modem or fibre router \xB7 WireGuard VPN up to 300 Mbps*'],
      lan:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>','LAN','4 \xD7 LAN 10/100/1000 Mbps','Gigabit ports for PCs, printers, IP phones, cameras or a switch']};
    var rot=0,tgt=0,drag=false,sx=0,sr=0,idle=0,touched=false,cur='ant';
    function show(k){var h=HS[k];if(!h)return;cur=k;$id('cbDxPi').innerHTML=h[0];setT('cbDxPk',h[1]);setT('cbDxPb',h[2]);setT('cbDxPe',h[3]);restart(pop,'sw');
      $$('.hs',dx).forEach(function(b){b.classList.toggle('on',b.getAttribute('data-h')===k);});rows.forEach(function(r){r.classList.toggle('hl',r.getAttribute('data-h')===k);});}
    function side(){var b=Math.cos(rot*Math.PI/180)<0?1:0;tb.forEach(function(x,i){x.classList.toggle('on',i===b);});ulMove(tabs);faces.forEach(function(f,i){f.style.pointerEvents=i===b?'auto':'none';});return b;}
    function apply(){card.style.transform='rotateX(6deg) rotateY('+rot.toFixed(2)+'deg)';var c=Math.abs(Math.cos(rot*Math.PI/180));sh.style.setProperty('--sx',(.55+.45*c).toFixed(3));side();}
    tb.forEach(function(b){b.addEventListener('click',function(){touched=true;var v=+b.getAttribute('data-v'),base=Math.round(tgt/360)*360;tgt=base+(v?180:0);if(R){rot=tgt;apply();}show(v?'wan':'ant');on(true);});});
    $$('.hs',dx).forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();touched=true;show(b.getAttribute('data-h'));});});
    stg.addEventListener('pointerdown',function(e){if(e.target.closest('.hs'))return;drag=true;touched=true;sx=e.clientX;sr=tgt;stg.classList.add('drag');hint.classList.add('gone');try{stg.setPointerCapture(e.pointerId);}catch(x){}});
    stg.addEventListener('pointermove',function(e){if(!drag)return;tgt=sr+(e.clientX-sx)*.6;if(R){rot=tgt;apply();}});
    function up(){if(!drag)return;drag=false;stg.classList.remove('drag');tgt=Math.round(tgt/180)*180;if(R){rot=tgt;apply();}var b=Math.abs(Math.round(tgt/180))%2;show(b?'wan':'ant');}
    stg.addEventListener('pointerup',up);stg.addEventListener('pointercancel',up);
    var on=loop(function(t,dt){idle+=dt;var sway=(!drag&&!touched)?Math.sin(t*.0009)*14:0;rot+=(tgt+sway-rot)*(1-Math.exp(-dt/(drag?60:220)));apply();});
    apply();show('ant');ulMove(tabs);addEventListener('resize',function(){ulMove(tabs);});
    if(R)return;XH.whenVisible(dx,function(v){on(v);});
  })();

  /* =========================================================
     6. Threat simulator
     ========================================================= */
  (function(){
    var box=$id('cbSim');if(!box)return;
    var evB=$id('smEvB'),go=$id('smGo'),pipe=$id('smPipe'),pn=$$('.pn',pipe),ln=$id('smLn'),pkE=$id('smPk'),md=$id('smMd'),MS={},vd=$id('smVd'),logE=$id('smLog');
    $$('span',md).forEach(function(s){MS[s.getAttribute('data-m')]=s;});
    var IC={lap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',phn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>',unk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>'};
    var EV={
      phish:{ic:'lap',sb:'Staff laptop',sn:'priya \xB7 VLAN 10',w:'WPA2-Enterprise \xB7 staff',db:'Fake KYC site',dn:'bank-kyc-update.xyz',out:['nac','fw','web'],stop:'web',vt:'Blocked \u2014 phishing site',vm:'Secure Web Gateway \xB7 DNS filtering',vw:'A block page instead of the fake login. The attempt shows up as an alert.'},
      mal:{ic:'lap',sb:'Staff laptop',sn:'priya \xB7 VLAN 10',w:'WPA2-Enterprise \xB7 staff',db:'File download',dn:'invoice_0412.pdf.exe',out:['nac','fw','web'],ret:['tp'],stop:'tp',vt:'Blocked \u2014 malware download',vm:'Threat protection \xB7 multi-layer security',vw:'The file never reaches the laptop; the download is cancelled.'},
      unk:{ic:'unk',sb:'Unknown device',sn:'not registered',w:'shared password tried',db:'Office network',dn:'staff LAN',out:['nac'],stop:'nac',vt:'Denied \u2014 unknown device',vm:'Network Access Control \xB7 verifies users, devices & permissions',vw:'The device is refused until IT approves it.'},
      gprn:{ic:'phn',sb:'Guest phone',sn:'visitor \xB7 VLAN 99',w:'guest Wi-Fi',db:'Office printer',dn:'IoT VLAN 30',out:['nac','fw'],stop:'fw',vt:'Blocked \u2014 guests stay off the office LAN',vm:'Secure Business Wi-Fi (separate guest access) \xB7 firewall policy',vw:'The visitor still has internet, just not your printer or files.'},
      app:{ic:'phn',sb:'Staff phone',sn:'arjun \xB7 VLAN 10',w:'WPA2-Enterprise \xB7 staff',db:'Streaming app',dn:'restricted 10:00\u201318:00',out:['nac','fw','web','tp','app'],stop:'app',vt:'Blocked \u2014 app restricted by policy',vm:'Smart Controls & Policies \xB7 application control',vw:'A notice that the app is not allowed during work hours.'},
      ok:{ic:'lap',sb:'Staff laptop',sn:'priya \xB7 VLAN 10',w:'WPA2-Enterprise \xB7 staff',db:'Microsoft 365',dn:'trusted cloud app',out:['nac','fw','web','tp','app'],stop:null,vt:'Allowed \u2014 clean traffic',vm:'All checks passed \xB7 business app prioritised',vw:'Mail and files open normally.'}};
    var cur='phish',tl=null,tally={ok:0,bad:0},n=0,lastL='',lastP='';
    function pick(k){cur=k;var e=EV[k];$$('button',evB).forEach(function(b){b.classList.toggle('on',b.getAttribute('data-e')===k);});
      $id('smPI').innerHTML=IC[e.ic];setT('smN0b',e.sb);setT('smN0',e.sn);setT('smN1',e.w);setT('smN3b',e.db);setT('smN3',e.dn);clear();}
    function clear(){pn.forEach(function(p){p.classList.remove('hit','bad','ok','dim');});Object.keys(MS).forEach(function(m){MS[m].className='';});ln.style.transform='scaleX(0)';ln.classList.remove('bad');pkE.style.opacity='0';pkE.className='pk';vd.className='sm-vd';setT('smVb','Ready');setT('smVm','\u2014');setT('smVw','Press \u201CRun it\u201D.');setT('smN2','inspect');}
    function pkAt(pos){var w=pipe.clientWidth*.25;var tx='translateX('+(pos*w).toFixed(1)+'px)';if(tx!==lastP){pkE.style.transform=tx;lastP=tx;}}
    function verdict(e){var bad=!!e.stop;vd.className='sm-vd '+(bad?'bad':'ok');restart(vd,'pop');$id('smVi').innerHTML=bad?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';setT('smVb',e.vt);setT('smVm',e.vm);setT('smVw',e.vw);
      if(bad)tally.bad++;else tally.ok++;setT('smTally',tally.ok+' allowed \xB7 '+tally.bad+' blocked');
      var ph=$('.ph',logE);if(ph)ph.remove();var li=d.createElement('li');n++;li.innerHTML='<i class="'+(bad?'r':'g')+'">'+(bad?'\u2715':'\u2713')+'</i><span>#'+n+' '+e.sb.toLowerCase()+' \u2192 '+e.dn+' \xB7 '+(bad?e.vm.split(' \xB7 ')[0].toLowerCase():'allowed')+'</span>';logE.insertBefore(li,logE.firstChild);while(logE.children.length>6)logE.removeChild(logE.lastChild);}
    /* timeline: list of {t,fn} plus continuous packet position */
    function run(){var e=EV[cur];clear();go.classList.remove('pl');void go.offsetWidth;go.classList.add('pl');
      if(R){(e.out.concat(e.ret||[])).forEach(function(m){MS[m].className=m===e.stop?'stop':'pass';});pn[2].classList.add(e.stop?'bad':'ok');if(!e.stop||e.ret)pn[3].classList.add(e.ret?'dim':'ok');verdict(e);return;}
      var seg=[],t=0;function add(a,b,ms,cls){seg.push({a:a,b:b,t0:t,t1:t+ms,cls:cls});t+=ms;}
      var ev=[];function at(fn){ev.push({t:t,fn:fn});}
      pkE.style.opacity='1';
      at(function(){pn[0].classList.add('hit');});add(0,1,650);at(function(){pn[1].classList.add('hit');});add(1,2,650);at(function(){pn[2].classList.add('hit');setT('smN2','inspecting\u2026');});
      var stopOut=e.ret?null:e.stop;
      e.out.forEach(function(m){at(function(){MS[m].className='chk';});t+=330;if(m===stopOut){at(function(){MS[m].className='stop';});}else at(function(){MS[m].className='pass';});});
      if(stopOut){at(function(){pkE.classList.add('bad','boom');ln.classList.add('bad');pn[2].classList.add('bad');pn[3].classList.add('dim');setT('smN2','blocked');verdict(e);});}
      else if(e.ret){add(2,3,600);at(function(){pn[3].classList.add('hit');setT('smN2','request allowed');});t+=250;at(function(){pkE.classList.add('bad');});add(3,2,650,'bad');
        e.ret.forEach(function(m){at(function(){MS[m].className='chk';});t+=360;at(function(){MS[m].className='stop';});});
        at(function(){pkE.classList.add('boom');ln.classList.add('bad');pn[2].classList.add('bad');pn[3].classList.add('dim');setT('smN2','blocked');verdict(e);});}
      else{add(2,3,650);at(function(){pn[3].classList.add('ok');pn[2].classList.add('ok');setT('smN2','all checks passed');pkE.style.opacity='0';verdict(e);});}
      tl={seg:seg,ev:ev,T:0,end:t+50,ei:0,pos:0};simOn(true);}
    var simOn=loop(function(t2,dt){if(!tl){simOn(false);return;}tl.T+=dt;var T=tl.T;
      while(tl.ei<tl.ev.length&&tl.ev[tl.ei].t<=T){tl.ev[tl.ei].fn();tl.ei++;}
      for(var i=0;i<tl.seg.length;i++){var s=tl.seg[i];if(T>=s.t0&&T<=s.t1){tl.pos=lerp(s.a,s.b,eio((T-s.t0)/(s.t1-s.t0)));break;}if(T>s.t1)tl.pos=s.b;}
      pkAt(tl.pos);var lf='scaleX('+(tl.pos/3).toFixed(3)+')';if(lf!==lastL){ln.style.transform=lf;lastL=lf;}
      if(T>=tl.end){tl=null;}});
    evB.addEventListener('click',function(e){var b=e.target.closest('button[data-e]');if(!b)return;pick(b.getAttribute('data-e'));});
    go.addEventListener('click',run);
    pick('phish');
  })();

  /* =========================================================
     7. Partners \u2014 India multi-site map
     ========================================================= */
  (function(){
    var box=$id('cbMs'),cv=$id('cbMsCv');if(!box||!cv)return;
    var ctx=cv.getContext('2d'),lis=$$('#cbMsL li'),W=0,H=0,BASE=null,mode=0,mT=0,DUR=3600,MT=0;
    var POLY=[[68.2,23.7],[69.5,22.4],[70.4,20.9],[72.6,21.1],[72.9,19],[73.4,16],[74.4,14],[75,12],[76,10],[77,8.1],[77.6,8.3],[78.2,9],[79.3,10.3],[79.9,11.5],[80.3,13.3],[80.1,15.2],[81.3,16.4],[82.3,16.6],[84,18.3],[85.5,19.6],[86.9,20.8],[87.5,21.6],[88.6,21.8],[89.1,22.1],[88.9,23.9],[88.2,24.8],[88.6,26.4],[89.8,26],[89.9,25.3],[92,24.9],[92.3,23.6],[92.6,22],[93.3,23.2],[94.2,23.9],[94.6,25.2],[95.2,26.6],[96.2,27.3],[97.3,27.9],[96,29.4],[94,28.9],[92.5,27.8],[91.6,27.8],[89.6,26.9],[88.8,27.2],[88.1,27.9],[85.8,27.4],[84.2,27.4],[82.7,27.9],[81,28.6],[80.1,30.2],[79.3,31],[78.8,31.6],[78.4,32.6],[79.4,32.9],[79.6,33.5],[80.2,34.1],[80.3,35.2],[79.8,35.6],[78.4,35.9],[77.8,35.5],[77,35.9],[76.6,36.6],[75.9,36.9],[75,37.1],[74.4,37],[73.5,36.9],[72.5,36.4],[72.6,35.5],[73.4,34.8],[73.6,33.9],[73.9,33.2],[74.6,32.6],[74.6,31],[73.9,30],[72.9,29],[71.3,28],[70.4,26.9],[70.1,25.5],[71.1,24.4],[69.6,24.3],[68.8,24]];
    var CITY=[['Mumbai',72.88,19.08,-1],['Delhi',77.1,28.7,1],['Bengaluru',77.59,12.97,-1],['Chennai',80.27,13.08,1],['Kolkata',88.36,22.57,1],['Hyderabad',78.49,17.39,1],['Ahmedabad',72.57,23.02,-1],['Pune',73.86,18.52,1],['Jaipur',75.79,26.91,-1],['Lucknow',80.95,26.85,1],['Kochi',76.27,9.93,-1],['Guwahati',91.74,26.14,1],['Chandigarh',76.78,30.73,1],['Bhubaneswar',85.82,20.3,1],['Indore',75.86,22.72,1],['Nagpur',79.09,21.15,1]];
    var ALERT=7,NEWS=15,MODES=[['Centralized management','Cybird Cloud','every site, one dashboard'],['Multi-site visibility','16 sites \xB7 sample','status of every location together'],['Remote monitoring','Live telemetry','devices and traffic, no site visit'],['Smart alerts','Alert \xB7 Pune','link issue flagged in seconds'],['Simplified deployment','New site \xB7 Nagpur','zero touch provisioning'],['Faster troubleshooting','Pune \xB7 resolved','fixed from the dashboard']];
    var spB=glowSprite('120,180,255',40),spG=glowSprite('95,224,141',40),spR=glowSprite('255,90,70',40),spO=glowSprite('255,160,60',40);
    var sc2=1,ox=0,oy=0,HUB=[0,0];
    function P(lon,lat){return [ox+(lon-68)*sc2,oy+(37.5-lat)*sc2*1.08];}
    function build(){W=cv.clientWidth;H=cv.clientHeight;if(!W)return;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);
      sc2=Math.min((W-30)/29.5,(H-118)/(29.5*1.08));ox=(W-29.5*sc2)/2;oy=70+(H-128-29.5*1.08*sc2)/2;HUB=[W*.5,40];
      BASE=d.createElement('canvas');BASE.width=cv.width;BASE.height=cv.height;var b=BASE.getContext('2d');b.setTransform(DPR,0,0,DPR,0,0);
      b.beginPath();POLY.forEach(function(q,i){var p=P(q[0],q[1]);if(i)b.lineTo(p[0],p[1]);else b.moveTo(p[0],p[1]);});b.closePath();b.fillStyle='rgba(21,101,216,.1)';b.fill();b.strokeStyle='rgba(127,176,255,.45)';b.lineWidth=1.2;b.stroke();
      b.fillStyle='rgba(127,176,255,.28)';for(var la=8.3;la<=37;la+=.75)for(var lo=68.3;lo<=97.3;lo+=.75)if(inPoly(lo,la,POLY)){var p2=P(lo,la);b.fillRect(p2[0]-.7,p2[1]-.7,1.4,1.4);}}
    function setMode(m,user){mode=m;mT=0;lis.forEach(function(l,i){l.classList.toggle('on',i===m);var u=$('u',l);if(u){u.style.animation='none';void u.offsetWidth;u.style.animation='';}});
      var md=MODES[m];var st=$id('cbMsN');setT(st,md[0]);restart(st,'sw');setT('cbMsFb',md[1]);setT('cbMsFs',md[2]);if(user)MT=1;}
    lis.forEach(function(l,i){l.addEventListener('click',function(){setMode(i,true);});});
    box.style.setProperty('--dur',DUR+'ms');lis.forEach(function(l){l.style.setProperty('--dur',DUR+'ms');});
    function draw(t){var c=ctx;c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,W,H);c.drawImage(BASE,0,0,W,H);
      var u=mT/DUR,i,p;
      /* cloud hub */
      var hp=path2('cld');c.globalAlpha=.6;c.drawImage(spB,HUB[0]-34,HUB[1]-34,68,68);if(hp){c.save();c.globalAlpha=1;c.translate(HUB[0]-15,HUB[1]-15);c.scale(30/24,30/24);c.fillStyle='rgba(21,101,216,.9)';c.fill(hp);c.strokeStyle='#cfe0ff';c.lineWidth=1.6;c.stroke(hp);c.restore();}
      for(i=0;i<CITY.length;i++){var cy=CITY[i];if(i===NEWS&&mode<4)continue;p=P(cy[1],cy[2]);
        var alert=i===ALERT&&(mode===3||(mode===5&&u<.35)),fixed=i===ALERT&&mode===5&&u>=.35,nw=i===NEWS&&mode===4,nu=nw?clamp((u-.15)/.4,0,1):1;
        /* link to hub */
        var la=mode===0?.5:mode===2?.28:.18;c.globalAlpha=la*nu;c.strokeStyle=alert?'#ff5a4a':'#7fb0ff';c.lineWidth=1;c.setLineDash(nw?[3,4]:[]);c.beginPath();var mx=(p[0]+HUB[0])/2,my=Math.min(p[1],HUB[1])+20;c.moveTo(p[0],p[1]);c.quadraticCurveTo(mx,my,HUB[0],HUB[1]+12);c.stroke();c.setLineDash([]);
        /* packets */
        if(mode===0||mode===2||mode===4&&nw){var pu=((t*.0004)+i*.13)%1;if(mode===2)pu=1-pu;var v=1-pu,qx=v*v*p[0]+2*v*pu*mx+pu*pu*HUB[0],qy=v*v*p[1]+2*v*pu*my+pu*pu*(HUB[1]+12);c.globalAlpha=Math.sin(pu*Math.PI)*.9*nu;c.drawImage(mode===2?spO:spB,qx-5,qy-5,10,10);}
        /* site */
        var pulse=mode===1?(.5+.5*Math.sin(t*.006-i*.7)):0,sz=4+pulse*2;c.globalAlpha=.55*nu+pulse*.3;c.drawImage(alert?spR:(fixed||mode===1||nw)?spG:spB,p[0]-11,p[1]-11,22,22);
        c.globalAlpha=nu;c.fillStyle=alert?'#ff5a4a':fixed||nw?'#5FE08D':'#cfe0ff';c.beginPath();c.arc(p[0],p[1],nw?sz*spring(Math.min(1.4,nu*1.4)):sz*.8,0,TAU);c.fill();
        if(alert){var au=(t%1200)/1200;c.globalAlpha=1-au;c.strokeStyle='#ff5a4a';c.lineWidth=1.5;c.beginPath();c.arc(p[0],p[1],6+au*18,0,TAU);c.stroke();}
        if(mode===1||alert||fixed||nw||(mode===0&&i<4)){c.globalAlpha=nu*.95;c.font='600 9.5px "IBM Plex Mono",monospace';c.textAlign='left';c.textBaseline='middle';var lab=cy[0]+(alert?' \xB7 alert':fixed?' \xB7 resolved \u2713':nw?' \xB7 ZTP':'');var tw=c.measureText(lab).width,lx=cy[3]<0?p[0]-9-tw:p[0]+9;if(lx+tw>W-6)lx=p[0]-9-tw;if(lx<6)lx=p[0]+9;
          c.fillStyle='rgba(7,20,48,.85)';rr(c,lx-4,p[1]-8,tw+8,16,5);c.fill();c.fillStyle=alert?'#ff9a8f':fixed||nw?'#8ff0b2':'#cfe0ff';c.fillText(lab,lx,p[1]);}}
      /* remote monitoring: sweeping scan line */
      if(mode===2){var sx=W*(.05+.9*((t*.00025)%1));c.globalAlpha=.5;c.strokeStyle='#FFB15C';c.lineWidth=1.2;c.beginPath();c.moveTo(sx,60);c.lineTo(sx,H-60);c.stroke();c.globalAlpha=.08;c.fillStyle='#FFB15C';c.fillRect(sx-40,60,40,H-120);}
      c.globalAlpha=1;}
    function tick(t,dt){if(!W)build();if(!W)return;if(!box.matches(':hover')){mT+=dt;if(mT>=DUR){setMode((mode+1)%6);}}draw(t);}
    build();setMode(0);addEventListener('resize',function(){build();if(R)draw(0);});
    box.addEventListener('pointerenter',function(){box.classList.add('paused');});box.addEventListener('pointerleave',function(){box.classList.remove('paused');});
    if(R){mode=0;draw(0);lis.forEach(function(l){l.addEventListener('click',function(){mT=DUR*.6;draw(0);});});return;}
    var on=loop(tick);XH.whenVisible(box,on);
  })();

  /* =========================================================
     8. Pricing \u2014 term toggle, plan cards, ez-card, configurator
     ========================================================= */
  (function(){
    var tm=$id('cbTm'),plB=$id('cbPl'),cfg=$id('configure');if(!plB||!cfg)return;
    var st={plan:'ess',term:1,emp:8,ovr:false,sup:false,hw:0};
    plB.innerHTML=PL.map(function(p,i){return '<button type="button" class="pc k'+i+'" style="--k:'+i+'" data-p="'+p.k+'" role="radio">'+(p.k==='plus'?'<span class="fl">popular size</span>':'')+
      '<span class="pn"><i>'+p.ic+'</i><span><b>Cybird '+p.n+'</b><small>up to '+p.u+' users</small></span></span><span class="mt"><i style="--u:'+(p.u/100)+'"></i></span>'+
      '<span class="pr"><span class="am">\u20B90</span> <small>+ GST</small></span><span class="py">\u2014</span><span class="svp">\u2014</span><span class="inc"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>firewall + web security</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>cloud-managed</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>per-user Wi-Fi</span></span><span class="ck2">Configure \u2192</span></button>';}).join('');
    var pcs=$$('.pc',plB);
    function cards(){pcs.forEach(function(c,i){var p=PL[i],t=st.term,pr=p.p[t],sv=saving(p,t),am=$('.am',c),pill=$('.svp',c);
      tween(am,pr,inr,700);setT($('.py',c),t>1?inr(pr/t)+' / year effective \xB7 '+t+' years':'per year \xB7 hardware + security');
      var cls='svp',txt;if(t===1){cls+=' nil';txt='Pay yearly \xB7 switch to 2\u20135 yr to save';}else{var pc=Math.round(sv.pct);txt='Save '+pc+'% \xB7 '+inr(sv.amt)+' vs '+t+' \xD7 1 yr';if(pc<10)cls+=' lo';}
      if(pill.textContent!==txt){pill.textContent=txt;pill.className=cls;restart(pill,'sw');}
      c.classList.toggle('on',p.k===st.plan);c.setAttribute('aria-checked',p.k===st.plan);});}
    function ez(){var p=plan(st.plan),t=st.term,pr=p.p[t],sv=saving(p,t);setT('pcName','Cybird '+p.n);setT('pcSku','hardware + security bundle \xB7 up to '+p.u+' users');setT('pcTerm',t+(t>1?' years':' year'));setT('pcFrom',inr(p.p[1])+' + GST / yr');
      tween($id('pcT'),pr,inr,700);tween($id('pcY'),pr/t,inr,700);setT('pcSvL',t>1?'Saving vs '+t+' \xD7 1-year':'Longer terms save');setT('pcPill',t>1?Math.round(sv.pct)+'% \xB7 '+inr(sv.amt):'2 yr \xB7 3 yr \xB7 5 yr');}
    function syncTerm(){$$('button',tm).forEach(function(b){b.classList.toggle('on',+b.getAttribute('data-t')===st.term);});ulMove(tm);
      var ct=$id('cTerm');$$('button',ct).forEach(function(b){var o=+b.getAttribute('data-v')===st.term;b.classList.toggle('on',o);b.setAttribute('aria-pressed',o);});ct.dataset.value=String(st.term);setT('cTermL',st.term+(st.term>1?' years':' year'));}
    function syncPlan(){var cp=$id('cPlan'),sg=suggest(st.emp);$$('button',cp).forEach(function(b){var k=b.getAttribute('data-v');b.classList.toggle('on',k===st.plan);b.classList.toggle('sug',k===sg.k&&k!==st.plan);});cp.dataset.value=st.plan;
      var p=plan(st.plan);setT('cPlanL',st.plan===sg.k?'suggested: '+sg.n:'chosen: '+p.n+' \xB7 suggested '+sg.n);
      var mn=$id('cMin');if(p.u<st.emp){mn.classList.add('on');setT('cMinT','Cybird '+p.n+' covers up to '+p.u+' users \u2014 your team has '+st.emp+'. We suggest '+sg.n+'.');}else mn.classList.remove('on');}
    var emp=$id('cEmp'),empN=$id('cEmpN'),bands=$$('#cBands button'),hwN=$id('cHwN'),sup=$id('cSup'),sgd=$$('#cbSg>div');
    function setEmp(v,src){v=clamp(Math.round(+v||1),1,100);st.emp=v;if(src!=='r'){emp.value=v;XH.fillRange(emp);}if(src!=='n')empN.value=v;setT('cEmpL',v+(v===1?' employee':' employees'));
      bands.forEach(function(b){b.classList.toggle('on',+b.getAttribute('data-g')===v);});
      var sg=suggest(v);if(!st.ovr||plan(st.plan).u<v){st.plan=sg.k;st.ovr=false;}calc();}
    function calc(){var p=plan(st.plan),t=st.term,bi=supFor(st.emp),sb=SUP[bi],months=12*t;
      var bundle=p.p[t],supC=st.sup?sb.p*months:0,hwC=st.hw*HW,sub=bundle+supC+hwC,sv=saving(p,t);
      setT('cSupP',inr(sb.p));setT('cSupS',sb.l+' bracket \xB7 '+inr(sb.p)+' \xD7 '+months+' months for a '+t+'-year term.');sgd.forEach(function(x,i){x.classList.toggle('on',i===bi&&st.sup);});
      setT('cHwL',st.hw?st.hw+' \xD7 '+inr(HW):'none');
      var rows=[['Cybird '+p.n+' bundle \xB7 '+t+(t>1?' years':' year'),'hardware + security \xB7 up to '+p.u+' users',bundle]];
      if(st.sup)rows.push(['Support plan \xB7 '+sb.l,inr(sb.p)+' / month \xD7 '+months+' months',supC]);
      if(st.hw)rows.push(['Additional appliance \xD7 '+st.hw,inr(HW)+' each \xB7 one-time',hwC]);
      var html=rows.map(function(r){return '<div class="crow"><span>'+r[0]+'<small>'+r[1]+'</small></span><b>'+inr(r[2])+'</b></div>';}).join('');var ro=$id('oRows');if(ro._h!==html){ro._h=html;ro.innerHTML=html;}
      tween($id('oTot'),sub,inr,700);setT('oSub','for '+t+(t>1?' years':' year')+', excl. GST');
      setT('oSvL',t>1?'Bundle saving vs '+t+' \xD7 1-year ('+Math.round(sv.pct)+'%)':'Term saving (choose 2\u20135 years)');tween($id('oSv'),sv.amt,inr,700);
      tween($id('oSt'),sub,inr,700);tween($id('oGst'),sub*GST,inr,700);tween($id('oPay'),sub*(1+GST),inr,700);
      tween($id('oPum'),sub/months/st.emp,function(v){return XH.inr(v)+' / user / month';},700);
      var bs=$$('#oCb i');[bundle,supC,hwC].forEach(function(v,i){bs[i].style.width=(sub?v/sub*100:0).toFixed(2)+'%';});
      st._c={p:p,t:t,bundle:bundle,sb:sb,months:months,supC:supC};
      syncPlan();syncTerm();cards();ez();}
    tm.addEventListener('click',function(e){var b=e.target.closest('button[data-t]');if(!b)return;st.term=+b.getAttribute('data-t');calc();});
    $id('cTerm').addEventListener('change',function(e){st.term=+e.currentTarget.dataset.value;calc();});
    $id('cPlan').addEventListener('change',function(e){st.plan=e.currentTarget.dataset.value;st.ovr=true;calc();});
    plB.addEventListener('click',function(e){var b=e.target.closest('.pc');if(!b)return;var p=plan(b.getAttribute('data-p'));st.plan=p.k;st.ovr=true;if(st.emp>p.u||st.emp<=(PL[PL.indexOf(p)-1]||{u:0}).u){setEmp(p.u);st.plan=p.k;}calc();
      if(e.target.closest('.ck2'))cfg.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});});
    emp.addEventListener('input',function(){setEmp(emp.value,'r');});
    empN.addEventListener('input',function(){setEmp(empN.value,'n');});
    bands.forEach(function(b){b.addEventListener('click',function(){setEmp(b.getAttribute('data-g'));});});
    hwN.addEventListener('input',function(){st.hw=clamp(Math.round(+hwN.value||0),0,20);calc();});
    sup.addEventListener('change',function(){st.sup=sup.checked;calc();});
    $id('oAdd').addEventListener('click',function(){var c=st._c;if(!c)return;
      XH.cart.add({key:'cybird-'+c.p.k+'-'+c.t,name:'Cybird '+c.p.n+' bundle',sub:c.t+(c.t>1?' years':' year')+' \xB7 hardware + security \xB7 up to '+c.p.u+' users',price:c.bundle,qty:1});
      if(st.sup)XH.cart.add({key:'cybird-sup-'+c.sb.p+'-'+c.months,name:'Cybird support plan',sub:c.sb.l+' \xB7 '+XH.inr(c.sb.p)+' / month \xD7 '+c.months+' months',price:c.sb.p*c.months,qty:1});
      if(st.hw)XH.cart.add({key:'cybird-hw',name:'Cybird hardware appliance (additional)',sub:'Cybird cyber security customer hardware appliance \xB7 one-time',price:HW,qty:st.hw});});
    setEmp(8);ulMove(tm);addEventListener('resize',function(){ulMove(tm);});
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){ulMove(tm);});
  })();

  /* =========================================================
     9. In the box \u2014 unbox on view, replay
     ========================================================= */
  (function(){var ib=$id('cbIb');if(!ib)return;var done=false;
    XH.whenVisible(ib,function(v){if(v&&!done){done=true;setTimeout(function(){ib.classList.add('open');},R?0:300);}});
    $id('cbIbR').addEventListener('click',function(){ib.classList.remove('open');void ib.offsetWidth;setTimeout(function(){ib.classList.add('open');},R?0:120);});
  })();

  /* marquee + sections pause offscreen */
  $$('.cb-mq').forEach(function(m){XH.whenVisible(m,function(v){m.classList.toggle('paused',!v||R);});});
})();

<\/script>
</body></html>
`], [`<!DOCTYPE html>
<html lang="en-IN" data-theme="light">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Cybird X2 | All-in-One Network Security for SMBs, CAs, CS & Lawyers \u2014 XcellHost</title>
<meta name="description" content="Cybird X2 all-in-one network security appliance from XcellHost, Cybird&#x27;s National Distributor in India: secure business Wi-Fi 6 with per-user WPA2-Enterprise access, advanced firewall, secure web gateway and DNS filtering, app and bandwidth controls, network access control and cloud management. Made in India. Hardware + security bundles from \u20B914,999 + GST.">
<meta property="og:title" content="Cybird X2 | All-in-One Network Security for SMBs, CAs, CS &amp; Lawyers \u2014 XcellHost"><meta property="og:description" content="Cybird X2 all-in-one network security appliance from XcellHost, Cybird&#x27;s National Distributor in India: secure business Wi-Fi 6 with per-user WPA2-Enterprise access, advanced firewall, secure web gateway and DNS filtering, app and bandwidth controls, network access control and cloud management. Made in India. Hardware + security bundles from \u20B914,999 + GST."><meta property="og:type" content="website">
<meta name="theme-color" content="#041E42">
<script>try{var t=localStorage.getItem('xh-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}<\/script>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600;1,9..144,700&family=Sora:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
/* =====================================================================
   XcellHost v2 core \u2014 xcellhost.top design system
   Brand: #0066FF blue \xB7 #0B132B navy \xB7 #FF8A00 orange \xB7 #c0392b "Host" red
   Rule: exact brand colours, solid fills, no gradients.
   ===================================================================== */
:root{
  --blue:#0066FF;--navy:#0B132B;--orange:#FF8A00;--red:#c0392b;--white:#fff;
  --green:#16a34a;--wa:#25D366;
  --bg:#ffffff;--surface:#ffffff;--surface-2:#F4F7FC;--ink:#0B132B;--text:#2A3550;--muted:#5B6782;
  --line:#E2E8F2;--line-2:#D3DCEB;--chip:#EEF4FF;
  --hero:#0B132B;--hero-ink:#ffffff;--hero-muted:#B6C2DA;--hero-line:rgba(255,255,255,.12);
  --f-serif:"Fraunces",Georgia,serif;--f-disp:"Sora",system-ui,sans-serif;--f-body:"IBM Plex Sans",system-ui,sans-serif;--f-mono:"IBM Plex Mono",ui-monospace,monospace;
  --r-s:10px;--r:14px;--r-l:20px;
  --sh-s:0 4px 14px rgba(11,19,43,.06);--sh:0 14px 40px rgba(11,19,43,.10);--sh-l:0 30px 70px -24px rgba(11,19,43,.35);
  --maxw:1200px;--ease:cubic-bezier(.22,.7,.2,1);--ease-o:cubic-bezier(.16,1,.3,1);
}
html[data-theme="dark"]{
  --bg:#070C1C;--surface:#0E1630;--surface-2:#0B132B;--ink:#F2F5FB;--text:#C9D3E6;--muted:#8F9BB6;
  --line:#1E2A49;--line-2:#27355A;--chip:#14204A;
  --hero:#050916;--sh-s:0 4px 14px rgba(0,0,0,.3);--sh:0 14px 40px rgba(0,0,0,.4);--sh-l:0 30px 70px -24px rgba(0,0,0,.7);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;-webkit-text-size-adjust:100%}
body{font-family:var(--f-body);color:var(--text);background:var(--bg);line-height:1.6;overflow-x:hidden;overflow-x:clip;-webkit-font-smoothing:antialiased;transition:background .35s,color .35s}
body.lock{overflow:hidden}
h1,h2,h3,h4{font-family:var(--f-disp);color:var(--ink);line-height:1.15;letter-spacing:-.02em;font-weight:700}
a{color:inherit;text-decoration:none}img,svg{display:block}button,input,select,textarea{font-family:inherit;font-size:inherit;color:inherit}
.wrap{max-width:var(--maxw);margin:0 auto;padding:0 24px}
.mono{font-family:var(--f-mono)}
.sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
:focus-visible{outline:2px solid var(--blue);outline-offset:3px;border-radius:6px}
#xhProgress{position:fixed;top:0;left:0;height:3px;width:0;background:var(--orange);z-index:300}

/* ---------- buttons ---------- */
.btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;font-weight:600;font-size:14.5px;line-height:1;padding:13px 22px;border-radius:12px;border:1.5px solid transparent;cursor:pointer;white-space:nowrap;transition:transform .2s var(--ease),background .2s,color .2s,border-color .2s,box-shadow .25s}
.btn:hover{transform:translateY(-2px)}
.btn:active{transform:translateY(0)}
.btn svg{width:16px;height:16px}
.btn .ar{transition:transform .25s var(--ease)}.btn:hover .ar{transform:translateX(3px)}
.btn-orange{background:var(--orange);color:#fff;box-shadow:0 10px 24px -12px rgba(255,138,0,.9)}
.btn-orange:hover{box-shadow:0 14px 30px -12px rgba(255,138,0,1)}
.btn-blue{background:var(--blue);color:#fff;box-shadow:0 10px 24px -12px rgba(0,102,255,.9)}
.btn-ghost{background:var(--surface);color:var(--ink);border-color:var(--line-2)}
.btn-ghost:hover{border-color:var(--blue);color:var(--blue)}
.btn-line{background:transparent;color:#fff;border-color:rgba(255,255,255,.35)}
.btn-line:hover{border-color:#fff;background:rgba(255,255,255,.08)}
.btn-wa{background:var(--wa);color:#fff}
.btn-sm{padding:9px 15px;font-size:13px;border-radius:10px}
.btn-block{width:100%}
.btn[disabled]{opacity:.5;pointer-events:none}

/* ---------- utility bar ---------- */
.ubar{background:var(--navy);color:#B6C2DA;font-size:12.5px;position:relative;z-index:60}
html[data-theme="dark"] .ubar{background:#050916}
.ubar .wrap{display:flex;align-items:center;gap:16px;min-height:38px;white-space:nowrap;max-width:1360px}
.ubar .wrap::-webkit-scrollbar{display:none}
.ubar a:hover{color:#fff}
.ubar .ul{display:flex;gap:16px;align-items:center;flex:1;min-width:0;overflow-x:auto;scrollbar-width:none;-webkit-mask-image:linear-gradient(90deg,#000 92%,transparent);mask-image:linear-gradient(90deg,#000 92%,transparent)}
.ubar .ul::-webkit-scrollbar{display:none}
.ubar .ur{display:flex;gap:12px;align-items:center;margin-left:auto;padding-left:14px;border-left:1px solid rgba(255,255,255,.14);flex-shrink:0}
@media(max-width:760px){.ubar .ur .uwa,.ubar .ur .lang{display:none}}
.ubar .ph{font-family:var(--f-mono);color:#fff;font-weight:600}
.ubar .uwa{color:#5FE08D;font-weight:600}
.ubar .wa-ch{color:#5FE08D}
.theme-tg{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:99px;padding:3px 9px 3px 4px;cursor:pointer;color:#dfe6f5;font-size:11.5px}
.theme-tg .k{width:18px;height:18px;border-radius:50%;background:var(--orange);display:grid;place-items:center;transition:transform .35s var(--ease-o)}
.theme-tg .k svg{width:11px;height:11px;color:#fff}
html[data-theme="dark"] .theme-tg .k{transform:rotate(-180deg);background:var(--blue)}
.lang{font-family:var(--f-mono);font-size:11px;border:1px solid rgba(255,255,255,.2);border-radius:6px;padding:2px 6px;color:#dfe6f5}

/* ---------- promo ---------- */
.promo{background:var(--blue);color:#fff;font-size:13px;line-height:1.5;text-align:center;padding:8px 16px;position:relative;z-index:59}
.promo b{font-weight:700}
.promo .tag{display:inline-block;font-family:var(--f-mono);font-size:10.5px;font-weight:600;letter-spacing:.08em;background:#fff;color:var(--blue);border-radius:6px;padding:2px 7px;margin:0 6px}
.promo a{font-weight:700;text-decoration:underline;text-underline-offset:3px}

/* ---------- header ---------- */
.hdr{position:sticky;top:0;z-index:100;background:var(--surface);border-bottom:1px solid var(--line);transition:box-shadow .3s,background .35s}
.hdr.scrolled{box-shadow:0 8px 28px -18px rgba(11,19,43,.35)}
.hdr .wrap{display:flex;align-items:center;gap:14px;height:70px;max-width:1360px}
.logo{display:flex;flex-direction:column;flex-shrink:0;line-height:1}
.logo .lw{font-family:var(--f-disp);font-weight:800;font-size:22px;letter-spacing:-.02em;color:var(--ink);display:flex;align-items:baseline}
.logo .lw .host{position:relative;color:var(--red);padding:0 2px;margin-left:1px}
.logo .lw .host{z-index:0}
.logo .lw .host svg{position:absolute;left:-7px;top:-9px;width:calc(100% + 14px);height:34px;z-index:-1;color:var(--blue);opacity:.13}
.logo .lw sup{font-size:9px;color:var(--muted);margin-left:1px;align-self:flex-start;margin-top:2px}
.logo .lt{font-family:var(--f-mono);font-size:9px;letter-spacing:.16em;color:var(--muted);margin-top:4px;text-transform:uppercase;white-space:nowrap}
.nav{display:flex;align-items:center;gap:0;margin-left:4px}
.nav>.ni{position:static}
.nav>.ni>button{background:none;border:0;cursor:pointer;display:flex;align-items:center;gap:3px;font-size:13.5px;font-weight:500;color:var(--text);padding:9px 8px;border-radius:8px;white-space:nowrap;transition:color .2s,background .2s}
.nav>.ni>button svg{width:10px;height:10px;transition:transform .25s}
.nav>.ni:hover>button,.nav>.ni.open>button{color:var(--blue);background:var(--chip)}
.nav>.ni.open>button svg{transform:rotate(180deg)}
.mega{position:absolute;left:0;right:0;top:100%;background:var(--surface);border-top:1px solid var(--line);border-bottom:1px solid var(--line);box-shadow:var(--sh);opacity:0;visibility:hidden;transform:translateY(-6px);transition:opacity .22s,transform .25s var(--ease-o),visibility 0s .25s}
.ni.open .mega{opacity:1;visibility:visible;transform:none;transition:opacity .22s,transform .3s var(--ease-o)}
.mega .wrap{display:grid;grid-template-columns:260px 1fr;gap:28px;height:auto;padding:26px 24px;max-width:var(--maxw)}
.mega .mintro b{font-family:var(--f-serif);font-size:22px;color:var(--ink);display:block;margin-bottom:6px}
.mega .mintro p{font-size:13px;color:var(--muted)}
.mega .mlist{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}
.mega .mlist a{display:flex;gap:11px;align-items:flex-start;padding:10px 12px;border-radius:10px;transition:background .2s}
.mega .mlist a:hover{background:var(--chip)}
.mega .mlist a i{width:30px;height:30px;border-radius:8px;background:var(--chip);color:var(--blue);display:grid;place-items:center;flex-shrink:0}
.mega .mlist a i svg{width:15px;height:15px}
.mega .mlist a b{display:block;font-size:13.5px;color:var(--ink);font-weight:600}
.mega .mlist a span{font-size:11.5px;color:var(--muted)}
.mega .mlist a.cur{background:var(--chip)}.mega .mlist a.cur b{color:var(--blue)}
.hdr-r{display:flex;align-items:center;gap:8px;margin-left:auto}
.ibtn{width:40px;height:40px;border-radius:11px;border:1px solid var(--line);background:var(--surface);display:grid;place-items:center;cursor:pointer;color:var(--ink);position:relative;transition:border-color .2s,color .2s,transform .2s}
.ibtn:hover{border-color:var(--blue);color:var(--blue);transform:translateY(-1px)}
.ibtn svg{width:18px;height:18px}
.ibtn .cnt{position:absolute;top:-6px;right:-6px;min-width:18px;height:18px;padding:0 5px;border-radius:99px;background:var(--orange);color:#fff;font-family:var(--f-mono);font-size:10.5px;font-weight:600;display:grid;place-items:center;transform:scale(0);transition:transform .3s var(--ease-o)}
.ibtn .cnt.on{transform:scale(1)}
.ibtn .cnt.bump{animation:bump .45s var(--ease-o)}
@keyframes bump{40%{transform:scale(1.4)}}
.burger{display:none}
@media(max-width:1780px){.hdr-r .lg{display:none}}
@media(max-width:1580px){.nav>.ni>button{padding:9px 6px;font-size:13px;gap:2px}.nav>.ni>button svg{width:8px;height:8px}}
@media(max-width:1460px){.nav>.ni>button svg{display:none}.nav>.ni>button{padding:9px 5px;font-size:12.5px}.logo .lw{font-size:20px}.hdr .wrap{gap:10px}}
@media(max-width:1320px){.nav,.hdr-r .desk{display:none}.burger{display:grid}}
/* mobile drawer */
.mnav{position:fixed;inset:0;z-index:250;pointer-events:none}
.mnav .sc{position:absolute;inset:0;background:rgba(11,19,43,.5);opacity:0;transition:opacity .3s}
.mnav .pn{position:absolute;top:0;right:0;bottom:0;width:min(360px,88vw);background:var(--surface);transform:translateX(100%);transition:transform .38s var(--ease-o);overflow-y:auto;padding:18px 18px 40px}
.mnav.open{pointer-events:auto}.mnav.open .sc{opacity:1}.mnav.open .pn{transform:none}
.mnav details{border-bottom:1px solid var(--line)}
.mnav summary{list-style:none;cursor:pointer;padding:14px 4px;font-weight:600;color:var(--ink);display:flex;justify-content:space-between}
.mnav summary::-webkit-details-marker{display:none}
.mnav details a{display:block;padding:8px 10px;font-size:14px;color:var(--text);border-radius:8px}
.mnav details a:hover{background:var(--chip)}
.mnav .mh{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}

/* ---------- search overlay ---------- */
.srch{position:fixed;inset:0;z-index:260;display:none;align-items:flex-start;justify-content:center;padding:90px 16px 20px;background:rgba(11,19,43,.55)}
.srch.open{display:flex;animation:fadeIn .2s}
.srch .box{width:min(640px,100%);background:var(--surface);border-radius:var(--r-l);box-shadow:var(--sh-l);overflow:hidden;animation:popIn .3s var(--ease-o)}
.srch .sin{display:flex;align-items:center;gap:10px;padding:16px 18px;border-bottom:1px solid var(--line)}
.srch .sin svg{width:18px;height:18px;color:var(--muted)}
.srch input{flex:1;border:0;outline:0;background:none;font-size:16px;color:var(--ink)}
.srch kbd{font-family:var(--f-mono);font-size:11px;border:1px solid var(--line-2);border-radius:5px;padding:2px 6px;color:var(--muted)}
.srch .res{max-height:min(420px,60vh);overflow-y:auto;padding:8px}
.srch .res a{display:flex;justify-content:space-between;gap:12px;padding:11px 12px;border-radius:10px}
.srch .res a:hover,.srch .res a.hl{background:var(--chip)}
.srch .res b{color:var(--ink);font-size:14px;font-weight:600}
.srch .res span{font-family:var(--f-mono);font-size:11px;color:var(--muted)}
.srch .none{padding:26px;text-align:center;color:var(--muted);font-size:14px}
@keyframes fadeIn{from{opacity:0}}
@keyframes popIn{from{opacity:0;transform:translateY(-10px) scale(.98)}}

/* ---------- hero ---------- */
.hero{position:relative;overflow:hidden;background:var(--hero);color:var(--hero-ink);padding:54px 0 0}
.hero-bg{position:absolute;inset:0;z-index:0;pointer-events:none}
.hero .wrap{position:relative;z-index:2}
.crumb{font-family:var(--f-mono);font-size:12px;color:var(--hero-muted);margin-bottom:26px}
.crumb a:hover{color:#fff}.crumb .c{color:#fff}
.hero-grid{display:grid;grid-template-columns:1.02fr 1fr;gap:48px;align-items:center;padding-bottom:40px}
.eyebrow{display:inline-flex;align-items:center;gap:9px;font-family:var(--f-mono);font-size:12px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:var(--orange)}
.eyebrow:before{content:"";width:22px;height:2px;background:var(--orange)}
.hero h1{font-family:var(--f-serif);font-weight:700;color:#fff;font-size:clamp(34px,4.4vw,56px);line-height:1.04;letter-spacing:-.025em;margin:16px 0 18px}
.hero h1 .acc{color:var(--orange);font-style:italic}
.hero .lead{font-size:17px;color:var(--hero-muted);max-width:540px;margin-bottom:24px}
.hero .lead b{color:#fff;font-weight:600}
.powered{display:inline-flex;align-items:center;gap:10px;background:#fff;color:var(--navy);border-radius:12px;padding:7px 14px 7px 8px;margin-bottom:26px;box-shadow:0 10px 26px -14px rgba(0,0,0,.6)}
.powered .pv-l{width:30px;height:30px;border-radius:8px;display:grid;place-items:center;flex-shrink:0}
.powered .pv-l svg{width:18px;height:18px}
.powered small{display:block;font-family:var(--f-mono);font-size:9px;letter-spacing:.14em;text-transform:uppercase;color:#5B6782;line-height:1}
.powered b{font-family:var(--f-disp);font-size:14.5px;font-weight:700;line-height:1.2;color:var(--navy)}
.hero-cta{display:flex;gap:12px;flex-wrap:wrap}
.hero-stats{position:relative;z-index:2;display:flex;flex-wrap:nowrap;border-top:1px solid var(--hero-line);overflow-x:auto;scrollbar-width:none}
.hero-stats::-webkit-scrollbar{display:none}
.hero-stats .hs{flex:1 0 auto;padding:20px 24px 22px;border-right:1px solid var(--hero-line);white-space:nowrap}
.hero-stats .hs:first-child{padding-left:0}.hero-stats .hs:last-child{border-right:0}
.hero-stats b{display:block;font-family:var(--f-disp);font-weight:800;font-size:24px;color:#fff;line-height:1;letter-spacing:-.02em}
.hero-stats b em{font-style:normal;color:var(--orange)}
.hero-stats span{display:block;font-family:var(--f-mono);font-size:10.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--hero-muted);margin-top:8px}
.stage{position:relative;min-height:420px;display:grid;place-items:center}
@media(max-width:980px){.hero-grid{grid-template-columns:1fr;gap:34px}.stage{min-height:0}}
@media(max-width:560px){.hero{padding-top:36px}.hero-stats .hs{padding:16px 18px}.hero-stats b{font-size:20px}}

/* hero entrance */
.hero [data-in]{opacity:0;transform:translateY(16px);animation:heroIn .9s var(--ease-o) forwards}
.hero [data-in="1"]{animation-delay:.05s}.hero [data-in="2"]{animation-delay:.15s}.hero [data-in="3"]{animation-delay:.25s}.hero [data-in="4"]{animation-delay:.35s}.hero [data-in="5"]{animation-delay:.45s}.hero [data-in="6"]{animation-delay:.6s}
@keyframes heroIn{to{opacity:1;transform:none}}

/* ---------- sections ---------- */
.sec{padding:84px 0;position:relative}
.sec.alt{background:var(--surface-2)}
.sec.tight{padding:56px 0}
.sh{max-width:760px;margin-bottom:40px}
.sh.c{text-align:center;margin-left:auto;margin-right:auto}
.sh .eyebrow{color:var(--orange)}
.sh h2{font-family:var(--f-serif);font-weight:700;font-size:clamp(28px,3.2vw,40px);letter-spacing:-.02em;margin:12px 0 12px;line-height:1.1}
.sh h2 .acc{color:var(--blue);font-style:italic}
.sh p{font-size:16.5px;color:var(--muted)}
.note-ind{font-family:var(--f-mono);font-size:11.5px;color:var(--muted);margin-top:14px}

/* reveal */
.rv{opacity:0;transform:translateY(22px);transition:opacity .8s var(--ease-o),transform .8s var(--ease-o)}
.rv.in{opacity:1;transform:none}
.rv[data-d="1"]{transition-delay:.06s}.rv[data-d="2"]{transition-delay:.12s}.rv[data-d="3"]{transition-delay:.18s}.rv[data-d="4"]{transition-delay:.24s}.rv[data-d="5"]{transition-delay:.3s}.rv[data-d="6"]{transition-delay:.36s}

/* ---------- grids & cards ---------- */
.g2{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
.g3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
@media(max-width:960px){.g3,.g4{grid-template-columns:1fr 1fr}}
@media(max-width:620px){.g2,.g3,.g4{grid-template-columns:1fr}}
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--r-l);padding:24px;transition:transform .35s var(--ease-o),box-shadow .35s,border-color .3s}
.card:hover{transform:translateY(-5px);box-shadow:var(--sh);border-color:var(--line-2)}
.ico{width:44px;height:44px;border-radius:12px;display:grid;place-items:center;color:#fff;background:var(--blue);margin-bottom:16px;flex-shrink:0}
.ico svg{width:22px;height:22px}
.ico.o{background:var(--orange)}.ico.n{background:var(--navy)}.ico.g{background:var(--green)}.ico.r{background:var(--red)}
html[data-theme="dark"] .ico.n{background:#1E2A49}
.ico.soft{background:var(--chip);color:var(--blue)}
.card h3{font-size:17px;margin-bottom:8px}
.card p{font-size:14px;color:var(--muted);line-height:1.6}
.card .more{display:inline-flex;align-items:center;gap:6px;margin-top:14px;font-weight:600;font-size:13.5px;color:var(--blue)}

/* chip rows with per-item icons */
.chips{display:flex;flex-wrap:wrap;gap:10px}
.chip{display:inline-flex;align-items:center;gap:9px;background:var(--surface);border:1px solid var(--line);border-radius:12px;padding:8px 14px 8px 8px;font-size:13.5px;font-weight:600;color:var(--ink);transition:border-color .2s,transform .2s}
.chip:hover{border-color:var(--blue);transform:translateY(-2px)}
.chip i{width:26px;height:26px;border-radius:7px;display:grid;place-items:center;color:#fff;background:var(--blue);flex-shrink:0}
.chip i svg{width:14px;height:14px}

/* icon list (per-item icons, never generic ticks) */
.ilist{list-style:none;display:flex;flex-direction:column;gap:11px}
.ilist li{display:flex;gap:11px;align-items:flex-start;font-size:14px;color:var(--text)}
.ilist li i{width:24px;height:24px;border-radius:7px;background:var(--chip);color:var(--blue);display:grid;place-items:center;flex-shrink:0;margin-top:-1px}
.ilist li i svg{width:13px;height:13px}
.ilist li b{color:var(--ink)}

/* steps */
.steps{display:grid;gap:14px;counter-reset:st}
.steps.h{grid-template-columns:repeat(var(--n,4),1fr)}
@media(max-width:960px){.steps.h{grid-template-columns:1fr 1fr}}
@media(max-width:560px){.steps.h{grid-template-columns:1fr}}
.step{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:var(--r);padding:22px 20px 20px;overflow:hidden}
.step:before{counter-increment:st;content:counter(st,decimal-leading-zero);font-family:var(--f-mono);font-size:12px;font-weight:600;color:var(--orange);display:block;margin-bottom:12px;letter-spacing:.1em}
.step h4{font-size:15.5px;margin-bottom:6px}
.step p{font-size:13.5px;color:var(--muted)}
.step .bar{position:absolute;left:0;bottom:0;height:3px;width:0;background:var(--blue);transition:width 1.2s var(--ease-o)}
.step.in .bar,.rv.in .step .bar{width:100%}

/* table */
.tbl-w{overflow-x:auto;border:1px solid var(--line);border-radius:var(--r);background:var(--surface)}
.tbl{width:100%;border-collapse:collapse;min-width:620px}
.tbl th{font-family:var(--f-mono);font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);text-align:left;padding:15px 18px;background:var(--surface-2);border-bottom:1px solid var(--line)}
.tbl td{padding:14px 18px;border-bottom:1px solid var(--line);font-size:14px;color:var(--text);vertical-align:top}
.tbl tr:last-child td{border-bottom:0}
.tbl td:first-child{font-weight:600;color:var(--ink)}
.tbl .hl{background:var(--chip)}
.tbl th.hl{color:var(--blue)}
.yes{color:var(--green);font-weight:700}.no{color:var(--red);font-weight:700}

/* plans */
.plans{display:grid;grid-template-columns:repeat(var(--n,3),1fr);gap:18px;align-items:stretch}
@media(max-width:960px){.plans{grid-template-columns:1fr}}
.plan{position:relative;background:var(--surface);border:1.5px solid var(--line);border-radius:var(--r-l);padding:26px;display:flex;flex-direction:column;transition:transform .35s var(--ease-o),box-shadow .35s,border-color .3s}
.plan:hover{transform:translateY(-6px);box-shadow:var(--sh)}
.plan.pop{border-color:var(--orange)}
.plan .flag{position:absolute;top:-12px;left:24px;background:var(--orange);color:#fff;font-family:var(--f-mono);font-size:10.5px;font-weight:600;letter-spacing:.1em;padding:4px 10px;border-radius:99px}
.plan .pk{font-family:var(--f-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--blue);font-weight:600}
.plan h3{font-size:20px;margin:6px 0 8px}
.plan .pd{font-size:13.5px;color:var(--muted);margin-bottom:18px;min-height:42px}
.plan .pr{display:flex;align-items:baseline;gap:6px;margin-bottom:4px}
.plan .pr b{font-family:var(--f-disp);font-weight:800;font-size:34px;color:var(--ink);letter-spacing:-.03em}
.plan .pr span{font-size:13px;color:var(--muted)}
.plan .pr s{font-size:14px;color:var(--muted)}
.plan .gst{font-family:var(--f-mono);font-size:11px;color:var(--muted);margin-bottom:18px}
.plan .ilist{margin-bottom:22px}
.plan .act{margin-top:auto;display:flex;flex-direction:column;gap:8px}

/* calculator */
.calc{display:grid;grid-template-columns:1.25fr 1fr;border:1px solid var(--line);border-radius:var(--r-l);overflow:hidden;background:var(--surface);box-shadow:var(--sh-s)}
@media(max-width:900px){.calc{grid-template-columns:1fr}}
.calc .cin{padding:28px;display:flex;flex-direction:column;gap:22px}
.calc .cout{background:var(--navy);color:#fff;padding:28px;display:flex;flex-direction:column}
html[data-theme="dark"] .calc .cout{background:#050916}
.fld>label,.fld>.lb{display:flex;justify-content:space-between;align-items:baseline;font-weight:600;font-size:14px;color:var(--ink);margin-bottom:10px}
.fld>label small,.fld>.lb small{font-family:var(--f-mono);font-size:12px;font-weight:600;color:var(--blue)}
.fld .hint{font-size:12px;color:var(--muted);margin-top:7px}
.seg{display:flex;flex-wrap:wrap;gap:6px;background:var(--surface-2);border:1px solid var(--line);border-radius:12px;padding:4px}
.seg button{flex:1 1 auto;border:0;background:none;cursor:pointer;padding:10px 12px;border-radius:9px;font-size:13px;font-weight:600;color:var(--muted);transition:background .2s,color .2s,box-shadow .2s;white-space:nowrap}
.seg button small{display:block;font-family:var(--f-mono);font-size:10px;font-weight:500;margin-top:2px}
.seg button.on{background:var(--surface);color:var(--blue);box-shadow:var(--sh-s)}
.seg button:hover:not(.on){color:var(--ink)}
input[type=range].rng{-webkit-appearance:none;appearance:none;width:100%;height:6px;border-radius:99px;background:var(--line-2);outline:none;cursor:pointer;background-image:linear-gradient(var(--blue),var(--blue));background-size:var(--p,0%) 100%;background-repeat:no-repeat}
input[type=range].rng::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#fff;border:3px solid var(--blue);box-shadow:0 4px 10px rgba(0,102,255,.35);transition:transform .15s}
input[type=range].rng::-webkit-slider-thumb:hover{transform:scale(1.12)}
input[type=range].rng::-moz-range-thumb{width:18px;height:18px;border-radius:50%;background:#fff;border:3px solid var(--blue)}
.stp{display:inline-flex;align-items:center;border:1px solid var(--line-2);border-radius:11px;overflow:hidden;background:var(--surface)}
.stp button{width:40px;height:40px;border:0;background:none;cursor:pointer;font-size:18px;color:var(--ink)}
.stp button:hover{background:var(--chip);color:var(--blue)}
.stp input{width:64px;height:40px;border:0;border-left:1px solid var(--line);border-right:1px solid var(--line);text-align:center;font-family:var(--f-mono);font-weight:600;background:none;color:var(--ink)}
.tgl{display:flex;align-items:center;gap:11px;cursor:pointer;font-size:14px;font-weight:600;color:var(--ink)}
.tgl input{display:none}
.tgl .sw{width:42px;height:24px;border-radius:99px;background:var(--line-2);position:relative;transition:background .25s;flex-shrink:0}
.tgl .sw:after{content:"";position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#fff;transition:transform .3s var(--ease-o);box-shadow:0 2px 5px rgba(0,0,0,.2)}
.tgl input:checked+.sw{background:var(--blue)}
.tgl input:checked+.sw:after{transform:translateX(18px)}
.tgl small{display:block;font-weight:400;font-size:12px;color:var(--muted)}
.cout .ck{font-family:var(--f-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#B6C2DA}
.cout .ctot{font-family:var(--f-disp);font-weight:800;font-size:42px;letter-spacing:-.03em;line-height:1;margin:10px 0 4px;font-variant-numeric:tabular-nums}
.cout .csub{font-size:13px;color:#B6C2DA;margin-bottom:20px}
.cout .crows{display:flex;flex-direction:column;gap:9px;padding:16px 0;border-top:1px solid rgba(255,255,255,.12);border-bottom:1px solid rgba(255,255,255,.12);margin-bottom:20px}
.cout .crow{display:flex;justify-content:space-between;gap:12px;font-size:13.5px;color:#dfe6f5}
.cout .crow b{font-family:var(--f-mono);font-weight:600;color:#fff;white-space:nowrap}
.cout .crow.save b{color:#5FE08D}
.cout .cact{margin-top:auto;display:flex;flex-direction:column;gap:9px}
.cout .cfine{font-family:var(--f-mono);font-size:10.5px;color:#8F9BB6;margin-top:12px}
.flash{animation:flash .5s var(--ease-o)}
@keyframes flash{0%{opacity:.35;transform:translateY(-4px)}}

/* tabs */
.tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:22px}
.tabs button{border:1px solid var(--line);background:var(--surface);cursor:pointer;padding:10px 16px;border-radius:99px;font-size:13.5px;font-weight:600;color:var(--muted);transition:all .2s}
.tabs button:hover{color:var(--ink);border-color:var(--line-2)}
.tabs button.on{background:var(--blue);border-color:var(--blue);color:#fff}
[data-panel]{display:none}[data-panel].on{display:block;animation:panelIn .45s var(--ease-o)}
@keyframes panelIn{from{opacity:0;transform:translateY(8px)}}

/* faq */
.faq{display:flex;flex-direction:column;gap:10px;width:100%;max-width:none}
.fq{border:1px solid var(--line);border-radius:var(--r);background:var(--surface);transition:border-color .2s}
.fq.open{border-color:var(--line-2)}
.fq button{width:100%;display:flex;justify-content:space-between;align-items:center;gap:16px;background:none;border:0;cursor:pointer;text-align:left;padding:18px 20px;font-weight:600;font-size:15px;color:var(--ink)}
.fq button i{width:26px;height:26px;border-radius:50%;background:var(--chip);color:var(--blue);display:grid;place-items:center;flex-shrink:0;transition:transform .35s var(--ease-o),background .2s}
.fq button i svg{width:12px;height:12px}
.fq.open button i{transform:rotate(45deg);background:var(--blue);color:#fff}
.fq .fa{max-height:0;overflow:hidden;transition:max-height .45s var(--ease-o)}
.fq .fa p{padding:0 20px 20px;font-size:14.5px;color:var(--muted);line-height:1.7}

/* CTA band */
.cta{background:var(--blue);color:#fff;border-radius:24px;padding:44px;display:grid;grid-template-columns:1.4fr 1fr;gap:30px;align-items:center;position:relative;overflow:hidden}
.cta h2{font-family:var(--f-serif);color:#fff;font-size:clamp(26px,3vw,36px);margin-bottom:10px}
.cta p{color:#dbe6ff;font-size:15.5px}
.cta .ca{display:flex;flex-direction:column;gap:10px;align-items:flex-start;position:relative;z-index:2}
.cta .ring{position:absolute;right:-80px;top:-80px;width:280px;height:280px;border:2px solid rgba(255,255,255,.15);border-radius:50%;animation:ringP 6s var(--ease) infinite}
.cta .ring.r2{width:420px;height:420px;right:-150px;top:-150px;animation-delay:1.5s}
@keyframes ringP{50%{transform:scale(1.06);opacity:.6}}
@media(max-width:820px){.cta{grid-template-columns:1fr;padding:32px}}

/* ---------- forms + modal ---------- */
.modal{position:fixed;inset:0;z-index:270;display:none;align-items:center;justify-content:center;padding:20px}
.modal.open{display:flex}
.modal .sc{position:absolute;inset:0;background:rgba(11,19,43,.6);animation:fadeIn .25s}
.modal .mb{position:relative;width:min(520px,100%);max-height:calc(100vh - 40px);overflow-y:auto;background:var(--surface);border-radius:var(--r-l);box-shadow:var(--sh-l);animation:popIn .35s var(--ease-o)}
.modal .mb.wide{width:min(720px,100%)}
.modal .mh{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;padding:22px 24px 6px}
.modal .mh h3{font-family:var(--f-serif);font-size:24px}
.modal .mh p{font-size:13.5px;color:var(--muted);margin-top:4px}
.modal .x{width:36px;height:36px;border-radius:10px;border:1px solid var(--line);background:var(--surface);cursor:pointer;display:grid;place-items:center;flex-shrink:0;color:var(--ink)}
.modal .x svg{width:16px;height:16px}
.modal .mc{padding:16px 24px 24px}
.form{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.form .full{grid-column:1/-1}
@media(max-width:520px){.form{grid-template-columns:1fr}}
.fi label{display:block;font-size:12.5px;font-weight:600;color:var(--ink);margin-bottom:6px}
.fi input,.fi select,.fi textarea{width:100%;border:1.5px solid var(--line-2);background:var(--surface);border-radius:11px;padding:11px 13px;font-size:14px;color:var(--ink);outline:0;transition:border-color .2s,box-shadow .2s}
.fi textarea{min-height:90px;resize:vertical}
.fi input:focus,.fi select:focus,.fi textarea:focus{border-color:var(--blue);box-shadow:0 0 0 4px rgba(0,102,255,.12)}
.fi.err input,.fi.err select,.fi.err textarea{border-color:var(--red)}
.fi .em{display:none;font-size:11.5px;color:var(--red);margin-top:5px}
.fi.err .em{display:block}
.form .fine{font-size:11.5px;color:var(--muted)}
.done{text-align:center;padding:10px 0 6px}
.done .dk{width:64px;height:64px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;margin:0 auto 14px;animation:popIn .5s var(--ease-o)}
.done .dk svg{width:30px;height:30px}
.done h4{font-family:var(--f-serif);font-size:22px;margin-bottom:6px}
.done p{font-size:14px;color:var(--muted)}

/* ---------- cart drawer ---------- */
.cart{position:fixed;inset:0;z-index:265;pointer-events:none}
.cart .sc{position:absolute;inset:0;background:rgba(11,19,43,.5);opacity:0;transition:opacity .3s}
.cart .pn{position:absolute;top:0;right:0;bottom:0;width:min(420px,100vw);background:var(--surface);transform:translateX(100%);transition:transform .4s var(--ease-o);display:flex;flex-direction:column}
.cart.open{pointer-events:auto}.cart.open .sc{opacity:1}.cart.open .pn{transform:none}
.cart .ch{display:flex;justify-content:space-between;align-items:center;padding:20px 22px;border-bottom:1px solid var(--line)}
.cart .ch h3{font-size:18px}.cart .ch span{font-family:var(--f-mono);font-size:11.5px;color:var(--muted)}
.cart .ci{flex:1;overflow-y:auto;padding:16px 22px;display:flex;flex-direction:column;gap:12px}
.cart .it{border:1px solid var(--line);border-radius:var(--r);padding:14px;animation:panelIn .35s var(--ease-o)}
.cart .it .t{display:flex;justify-content:space-between;gap:10px}
.cart .it b{font-size:14px;color:var(--ink)}
.cart .it small{display:block;font-size:12px;color:var(--muted);margin-top:3px}
.cart .it .rm{background:none;border:0;cursor:pointer;color:var(--muted);width:28px;height:28px;border-radius:8px;display:grid;place-items:center}
.cart .it .rm:hover{background:var(--chip);color:var(--red)}
.cart .it .rm svg{width:15px;height:15px}
.cart .it .bt{display:flex;justify-content:space-between;align-items:center;margin-top:12px}
.cart .it .q{display:inline-flex;border:1px solid var(--line-2);border-radius:9px;overflow:hidden}
.cart .it .q button{width:30px;height:30px;border:0;background:none;cursor:pointer;color:var(--ink)}
.cart .it .q span{min-width:32px;display:grid;place-items:center;font-family:var(--f-mono);font-size:13px;border-left:1px solid var(--line);border-right:1px solid var(--line)}
.cart .it .pz{font-family:var(--f-mono);font-weight:600;color:var(--ink)}
.cart .empty{text-align:center;color:var(--muted);padding:50px 10px;font-size:14px}
.cart .empty svg{width:46px;height:46px;margin:0 auto 12px;color:var(--line-2)}
.cart .cf{padding:18px 22px 22px;border-top:1px solid var(--line);display:flex;flex-direction:column;gap:8px}
.cart .cf .r{display:flex;justify-content:space-between;font-size:14px;color:var(--muted)}
.cart .cf .r b{font-family:var(--f-mono);color:var(--ink)}
.cart .cf .tt{font-size:16px;color:var(--ink);font-weight:700;padding-top:8px;border-top:1px dashed var(--line-2)}
.cart .cf .tt b{font-size:18px}
.cart .cf .btn{margin-top:6px}

/* ---------- toast ---------- */
.toast{position:fixed;left:50%;bottom:26px;z-index:400;transform:translate(-50%,30px);opacity:0;pointer-events:none;background:var(--navy);color:#fff;border-radius:12px;padding:12px 18px 12px 12px;display:flex;align-items:center;gap:10px;font-size:14px;box-shadow:var(--sh-l);transition:transform .4s var(--ease-o),opacity .3s}
html[data-theme="dark"] .toast{background:#1E2A49}
.toast.on{transform:translate(-50%,0);opacity:1}
.toast i{width:26px;height:26px;border-radius:50%;background:var(--green);display:grid;place-items:center}
.toast i svg{width:14px;height:14px}

/* ---------- floating ---------- */
.fab-wa{position:fixed;right:22px;bottom:22px;z-index:90;width:56px;height:56px;border-radius:50%;background:var(--wa);color:#fff;display:grid;place-items:center;box-shadow:0 14px 30px -10px rgba(37,211,102,.8);transition:transform .25s var(--ease-o)}
.fab-wa:hover{transform:scale(1.08)}
.fab-wa svg{width:28px;height:28px}
.fab-wa:after{content:"";position:absolute;inset:0;border-radius:50%;border:2px solid var(--wa);animation:waP 2.4s var(--ease) infinite}
@keyframes waP{0%{transform:scale(1);opacity:.8}100%{transform:scale(1.6);opacity:0}}
.side-cb{position:fixed;right:0;top:50%;z-index:90;transform:translateY(-50%);writing-mode:vertical-rl;background:var(--orange);color:#fff;border:0;cursor:pointer;font-weight:700;font-size:13px;letter-spacing:.04em;padding:16px 9px;border-radius:12px 0 0 12px;box-shadow:-6px 10px 24px -12px rgba(255,138,0,.9);transition:padding .25s var(--ease-o)}
.side-cb:hover{padding-right:13px}
@media(max-width:620px){.side-cb{display:none}}

/* ---------- footer (royal blue) ---------- */
.ftr{background:var(--blue);color:#dbe6ff;padding:56px 0 26px;margin-top:0}
html[data-theme="dark"] .ftr{background:#0047B3}
.ftr a:hover{color:#fff;text-decoration:underline;text-underline-offset:3px}
.nl{background:#fff;color:var(--navy);border-radius:var(--r-l);padding:26px 28px;display:grid;grid-template-columns:1.2fr 1fr;gap:22px;align-items:center;margin-bottom:40px}
.nl h3{font-family:var(--f-serif);font-size:23px;color:var(--navy)}
.nl p{font-size:13.5px;color:#5B6782;margin-top:4px}
.nl form{display:flex;gap:8px}
.nl input{flex:1;min-width:0;border:1.5px solid #D3DCEB;border-radius:11px;padding:12px 14px;font-size:14px;outline:0;color:var(--navy);background:#fff}
.nl input:focus{border-color:var(--blue)}
@media(max-width:820px){.nl{grid-template-columns:1fr}}
.ft-top{display:grid;grid-template-columns:330px 1fr;gap:36px;margin-bottom:34px}
@media(max-width:960px){.ft-top{grid-template-columns:1fr}}
.ft-brand .lgc{background:#fff;border-radius:var(--r);padding:16px 18px;display:inline-flex;margin-bottom:14px}
.ft-brand .lgc .lw{color:var(--navy)}
.ft-brand .tg{font-weight:600;color:#fff;font-size:14px;margin-bottom:4px}
.ft-brand .tg2{font-family:var(--f-mono);font-size:11px;color:#c7d8ff;margin-bottom:12px}
.ft-brand .sup24{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.25);border-radius:10px;padding:7px 12px;font-size:12.5px;font-weight:600;color:#fff;margin-bottom:14px}
.ft-brand .sup24 i{width:8px;height:8px;border-radius:50%;background:#5FE08D;animation:waP 2s infinite;position:relative}
.ft-brand p{font-size:12.5px;line-height:1.7;color:#dbe6ff;margin-bottom:16px}
.soc{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px}
.soc a{width:34px;height:34px;border-radius:9px;background:rgba(255,255,255,.14);display:grid;place-items:center;color:#fff;transition:background .2s,transform .2s}
.soc a:hover{background:#fff;color:var(--blue);transform:translateY(-2px);text-decoration:none}
.soc svg{width:16px;height:16px}
.cvid{display:flex;gap:12px;align-items:center;background:rgba(11,19,43,.25);border-radius:12px;padding:10px;cursor:pointer;border:0;color:#fff;text-align:left;width:100%}
.cvid .th{width:76px;height:46px;border-radius:8px;background:var(--navy);display:grid;place-items:center;flex-shrink:0}
.cvid .th svg{width:20px;height:20px;color:#FF0000}
.cvid b{font-size:13px;display:block}.cvid span{font-size:11.5px;color:#c7d8ff}
.ft-rows{display:flex;flex-direction:column;gap:14px}
.ft-row{display:grid;grid-template-columns:110px 1fr;gap:14px;padding-bottom:14px;border-bottom:1px solid rgba(255,255,255,.16)}
.ft-row .k{font-family:var(--f-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#fff;font-weight:600;padding-top:2px}
.ft-row .v{display:flex;flex-wrap:wrap;gap:6px 16px;font-size:13px}
.ft-row .v a.hire{color:#fff;background:var(--red);padding:1px 8px;border-radius:6px;font-weight:600}
@media(max-width:560px){.ft-row{grid-template-columns:1fr;gap:6px}}
.ft-strip{display:grid;grid-template-columns:150px 1fr;gap:14px;align-items:center;padding:16px 0;border-top:1px solid rgba(255,255,255,.16)}
.ft-strip .k{font-family:var(--f-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:#fff;font-weight:600}
@media(max-width:700px){.ft-strip{grid-template-columns:1fr}}
.tiles{display:flex;flex-wrap:wrap;gap:8px}
.tile{background:#fff;color:var(--navy);border-radius:9px;padding:6px 10px;text-align:center;line-height:1.1;min-width:64px}
.tile small{display:block;font-family:var(--f-mono);font-size:8.5px;letter-spacing:.1em;color:#5B6782}
.tile b{font-family:var(--f-disp);font-size:13px;font-weight:800;color:var(--navy)}
.tile.w{display:flex;align-items:center;gap:7px;font-weight:700;font-size:12.5px;padding:8px 12px}
.tile .st{color:#f5a623;letter-spacing:1px}
.partner{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;background:var(--navy);border-radius:var(--r-l);padding:24px 28px;margin:24px 0}
.partner h3{color:#fff;font-family:var(--f-serif);font-size:22px}
.partner p{font-size:13.5px;color:#B6C2DA;margin-top:3px}
.ft-bot{display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;font-size:12px;color:#c7d8ff;padding-top:8px}
.ft-bot .ids{display:flex;flex-wrap:wrap;gap:4px 14px;font-family:var(--f-mono);font-size:11px}

@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.001ms!important;animation-iteration-count:1!important;transition-duration:.001ms!important;scroll-behavior:auto!important}.rv{opacity:1;transform:none}.hero [data-in]{opacity:1;transform:none}}

@media(max-width:620px){.promo{font-size:12px}.promo .opt{display:none}}
/* dark mode: keep navy icon tiles visible on dark surfaces */
html[data-theme="dark"] [style*="background:#0B132B"],html[data-theme="dark"] [style*="background: #0B132B"]{background:#27355A!important}
html[data-theme="dark"] .ft-brand .lgc .lw{color:#0B132B}

/* =====================================================================
   LIVE THEME \u2014 matches www.xcellhost.top product pages (xh-product-page)
   Palette/type measured from the live Microsoft Entra ID page.
   ===================================================================== */
:root{
  --blue:#1565D8;--blue-d:#0C3E8F;--navy:#041E42;--navy-2:#0A2A57;--orange:#FF8C1A;--orange-d:#F57C00;--red:#FF3B3B;
  --green:#16a34a;--ok:#2ECC71;
  --bg:#ffffff;--surface:#ffffff;--surface-2:#F2F6FC;--ink:#041E42;--text:#1C2A3A;--muted:#51607A;
  --line:#DCE5F2;--line-2:#C9D8EE;--chip:#E8F0FD;
  --hero:#041E42;--hero-muted:#c9d8f2;
  --f-serif:"Sora",system-ui,sans-serif;--f-disp:"Sora",system-ui,sans-serif;--f-body:"IBM Plex Sans",system-ui,sans-serif;--f-mono:"IBM Plex Mono",ui-monospace,monospace;
  --sh-s:0 6px 18px rgba(4,30,66,.06);--sh:0 18px 50px rgba(4,30,66,.10);--sh-l:0 34px 80px -20px rgba(4,30,66,.34);
  --maxw:1240px;
}
html[data-theme="dark"]{--bg:#06122A;--surface:#0B1A38;--surface-2:#081630;--ink:#EAF1FF;--text:#C9D6EE;--muted:#93A4C4;--line:#1B2D52;--line-2:#243A66;--chip:#10244A}
body{font-size:15px}
h1,h2,h3,h4{color:var(--ink)}
#xhProgress{background:linear-gradient(90deg,#1565D8,#FF8C1A);box-shadow:0 0 12px rgba(21,101,216,.6)}

/* ---------- buttons (live: 8px radius) ---------- */
.btn{border-radius:8px;font-size:14px;padding:11px 20px}
.btn-sm{border-radius:8px}
.btn-orange{background:#FF8C1A;box-shadow:0 10px 26px -10px rgba(255,140,26,.7)}
.btn-orange:hover{background:#e97a08}
.btn-blue{background:linear-gradient(135deg,#1565D8,#0C3E8F);box-shadow:0 14px 28px -12px rgba(21,101,216,.75)}
.btn-line{border-color:rgba(255,255,255,.35);background:rgba(255,255,255,.08)}
.btn-ghost{border-color:var(--line)}

/* ---------- section headings \u2192 live mono labels ---------- */
.sec{padding:30px 0}
.sec.alt{background:transparent}
.sec.tight{padding:26px 0}
main > .sec:first-of-type{padding-top:44px}
.sh{max-width:none;margin-bottom:18px}
.sh .eyebrow{display:block;font:700 13px/1.35 var(--f-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--blue);margin:0 0 10px;padding:0;background:none;border:0}
.sh .eyebrow:before{content:none}
.sh h2{font-family:var(--f-disp)!important;font-weight:800!important;font-size:clamp(24px,2.4vw,30px)!important;line-height:1.22!important;letter-spacing:-.02em!important;color:var(--ink)!important;margin:0 0 10px!important}
.sh h2 .acc{color:var(--blue)!important;font-style:normal!important}
.sh p{font-size:16px;color:var(--text);max-width:none;line-height:1.75}
.sh.c{text-align:left}

/* ---------- cards & icon tiles (live soft tiles) ---------- */
.card{border-radius:18px;box-shadow:var(--sh-s)}
.card:hover{box-shadow:var(--sh);border-color:#c9dcfb}
.ico{width:40px;height:40px;border-radius:11px;background:var(--chip)!important;color:var(--blue)!important}
.ico svg{width:20px;height:20px}
.ico.o{background:#fff3e0!important;color:#F57C00!important}.ico.n{background:#eaeff9!important;color:#0A2A57!important}.ico.g{background:#e4f7ec!important;color:#16a34a!important}.ico.r{background:#fdecec!important;color:#d92d20!important}
html[data-theme="dark"] .ico.o,html[data-theme="dark"] .ico.n,html[data-theme="dark"] .ico.g,html[data-theme="dark"] .ico.r{background:var(--chip)!important}
.chip i{background:var(--blue)}
.plan{border-radius:18px}
.calc{border-radius:18px}
.calc .cout{background:linear-gradient(160deg,#061634,#0c2b63 60%,#12408f)}
.cta{background:linear-gradient(120deg,#041E42,#123776 60%,#1565D8)}
.tbl th{font-size:11px}

/* =========================== CHROME =========================== */
/* utility bar */
.ubar{background:#041E42}
.ubar .ur .stat{width:26px;height:26px;border-radius:50%;background:rgba(255,255,255,.08);display:grid;place-items:center;color:#5FE08D}
.ubar .ur .stat svg{width:14px;height:14px}
.ubar .lang-sel{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.16);border-radius:99px;padding:3px 10px;color:#fff;font-size:12px;cursor:pointer}
.ubar .lang-sel svg{width:13px;height:13px}
.ubar .ph b{color:#9fb6de;font-weight:500;margin-right:6px}
/* promo */
.promo{background:linear-gradient(90deg,#1565D8,#0E4CAB);font-size:13px}
.promo .tick{display:inline-grid;place-items:center;width:16px;height:16px;border-radius:4px;background:#2ECC71;color:#fff;margin-right:6px;vertical-align:-3px}
.promo .tick svg{width:11px;height:11px}
.promo .tag{background:rgba(255,255,255,.15);color:#fff;border:1px solid rgba(255,255,255,.3);font-family:var(--f-mono)}
/* header with image logo */
.hdr{background:rgba(255,255,255,.92);backdrop-filter:saturate(180%) blur(14px);-webkit-backdrop-filter:saturate(180%) blur(14px)}
html[data-theme="dark"] .hdr{background:rgba(6,18,42,.92)}
.hdr .wrap{height:80px;max-width:1360px}
.logo-img{display:block;flex-shrink:0;line-height:0}
.logo-img img{height:64px;width:auto;display:block}
.logo-img .alt{display:none;font-family:var(--f-disp);font-weight:800;font-size:22px;color:var(--ink)}
.logo-img.noimg img{display:none}.logo-img.noimg .alt{display:block}
html[data-theme="dark"] .logo-img img{background:#fff;border-radius:10px;padding:2px 6px}
.nav>.ni>button{font-weight:500;color:var(--text)}
.nav>.ni>button svg{width:9px;height:9px;opacity:.6}

/* left contact stack (live) */
.lfab{position:fixed;left:22px;bottom:22px;z-index:95;display:flex;flex-direction:column;gap:14px}
.lfab a,.lfab button{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;color:#fff;border:0;cursor:pointer;box-shadow:0 12px 26px -10px rgba(4,30,66,.55);transition:transform .25s var(--ease-o)}
.lfab a:hover,.lfab button:hover{transform:scale(1.08)}
.lfab svg{width:26px;height:26px}
.lfab .lf-call{background:linear-gradient(135deg,#1565D8,#0C3E8F)}
.lfab .lf-cal{background:linear-gradient(135deg,#FF8C1A,#F57C00)}
.lfab .lf-wa{background:#25D366}
.fab-wa{display:none!important}
/* right bottom: cart + bot */
.rfab{position:fixed;right:22px;bottom:22px;z-index:95;display:flex;flex-direction:column;gap:14px;align-items:center}
.rfab button{position:relative;width:56px;height:56px;border-radius:50%;display:grid;place-items:center;color:#fff;border:0;cursor:pointer;box-shadow:0 12px 26px -10px rgba(4,30,66,.55);transition:transform .25s var(--ease-o)}
.rfab button:hover{transform:scale(1.08)}
.rfab svg{width:24px;height:24px}
.rfab .rf-cart{background:linear-gradient(135deg,#1565D8,#0C3E8F)}
.rfab .rf-bot{background:#0A2A57}
.rfab .rf-bot .on{position:absolute;top:2px;right:2px;width:13px;height:13px;border-radius:50%;background:#2ECC71;border:2px solid #fff}
.rfab .cnt{position:absolute;top:-4px;right:-4px;min-width:20px;height:20px;padding:0 5px;border-radius:99px;background:#FF8C1A;color:#fff;font:600 11px var(--f-mono);display:grid;place-items:center;transform:scale(0);transition:transform .3s var(--ease-o)}
.rfab .cnt.on{transform:scale(1)}
/* callback side tab (live gradient + phone) */
.side-cb{background:linear-gradient(180deg,#FF8C1A,#F57C00);display:flex;align-items:center;gap:8px;padding:18px 10px}
.side-cb svg{width:15px;height:15px;transform:rotate(90deg)}
/* chatbot panel */
.xbot{position:fixed;right:22px;bottom:150px;z-index:260;width:min(360px,calc(100vw - 32px));background:var(--surface);border:1px solid var(--line);border-radius:18px;box-shadow:var(--sh-l);overflow:hidden;opacity:0;transform:translateY(12px) scale(.98);pointer-events:none;transition:opacity .25s,transform .35s var(--ease-o)}
.xbot.open{opacity:1;transform:none;pointer-events:auto}
.xbot .bh{background:linear-gradient(120deg,#041E42,#1565D8);color:#fff;padding:14px 16px;display:flex;align-items:center;gap:10px}
.xbot .bh b{font-family:var(--f-disp);font-size:14px;display:block}.xbot .bh span{font-size:11.5px;color:#c9d8f2}
.xbot .bh .x{margin-left:auto;background:rgba(255,255,255,.12);border:0;color:#fff;width:30px;height:30px;border-radius:8px;cursor:pointer}
.xbot .bm{padding:14px 16px;display:flex;flex-direction:column;gap:10px;max-height:300px;overflow-y:auto}
.xbot .msg{background:var(--surface-2);border:1px solid var(--line);border-radius:12px 12px 12px 4px;padding:10px 12px;font-size:13.5px;color:var(--text);max-width:88%}
.xbot .msg.me{align-self:flex-end;background:#1565D8;color:#fff;border-color:#1565D8;border-radius:12px 12px 4px 12px}
.xbot .qr{display:flex;flex-wrap:wrap;gap:6px;padding:0 16px 14px}
.xbot .qr button,.xbot .qr a{font-size:12.5px;font-weight:600;border:1px solid var(--line-2);background:var(--surface);color:var(--blue);border-radius:99px;padding:7px 12px;cursor:pointer}
.xbot .qr button:hover,.xbot .qr a:hover{border-color:var(--blue)}
@media(max-width:620px){.lfab{left:12px;bottom:12px;gap:10px}.lfab a,.lfab button,.rfab button{width:48px;height:48px}.rfab{right:12px;bottom:12px}}

/* =========================== LIVE HERO =========================== */
.hero.lh{background:radial-gradient(900px 420px at 80% -20%,#0E3A78 0%,#041E42 60%);padding:50px 0 54px;min-height:510px}
html[data-theme="dark"] .hero.lh{background:radial-gradient(900px 420px at 80% -20%,#0a2a5a 0%,#020b1f 60%)}
.hero.lh .hero-bg .lh-grid{position:absolute;inset:0;opacity:.5;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:48px 48px;-webkit-mask-image:radial-gradient(760px 560px at 75% 30%,#000,transparent 72%);mask-image:radial-gradient(760px 560px at 75% 30%,#000,transparent 72%);animation:lhGrid 32s linear infinite}
@keyframes lhGrid{to{background-position:48px 48px}}
.hero.lh .hero-bg .lh-dots{position:absolute;inset:0;opacity:.55;background-image:radial-gradient(rgba(127,176,255,.55) 1.2px,transparent 1.3px);background-size:14px 14px;-webkit-mask-image:radial-gradient(520px 300px at 30% 45%,#000 20%,transparent 75%);mask-image:radial-gradient(520px 300px at 30% 45%,#000 20%,transparent 75%)}
.hero.lh .hero-bg .lh-aur{position:absolute;border-radius:50%;filter:blur(70px);opacity:.38}
.hero.lh .hero-bg .lh-aur.a1{width:420px;height:420px;background:radial-gradient(circle,#2f6bff,transparent 65%);top:-110px;right:6%;animation:lhA1 12s ease-in-out infinite}
.hero.lh .hero-bg .lh-aur.a2{width:340px;height:340px;background:radial-gradient(circle,#ff8c1a,transparent 65%);bottom:-80px;right:28%;animation:lhA2 14s ease-in-out infinite}
@keyframes lhA1{50%{transform:translate(-30px,24px) scale(1.12)}}
@keyframes lhA2{50%{transform:translate(26px,-20px) scale(1.15)}}
.hero.lh .hero-bg .lh-scan{position:absolute;left:0;right:0;height:120px;background:linear-gradient(180deg,transparent,rgba(90,150,255,.10),transparent);animation:lhScan 7s var(--ease) infinite}
@keyframes lhScan{0%{top:-120px}100%{top:100%}}
.hero.lh .crumb{font-family:var(--f-mono);font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;color:#7fb0ff;margin-bottom:14px}
.hero.lh .crumb a:hover{color:#fff}.hero.lh .crumb .sep{margin:0 6px;color:#5a7db3}.hero.lh .crumb .c{color:#7fb0ff}
.hero.lh .hero-grid{grid-template-columns:1.08fr 1fr;gap:40px;padding-bottom:0;align-items:center}
.lh-title{font-family:var(--f-disp)!important;font-weight:800!important;font-size:clamp(30px,3.4vw,44px)!important;line-height:1.14!important;letter-spacing:-.025em!important;color:#fff!important;margin:0 0 14px!important;display:block}
.lh-title .x{color:#FF3B3B}
.lh-title .brd{color:#fff}
.lh-title .dv{color:#7fb0ff;margin:0 .22em;font-weight:500}
.lh-title .nm{color:#fff;display:block}
.lh-tag{font-family:var(--f-disp);font-weight:700;font-size:16.5px;color:#fff;line-height:1.45;margin-bottom:2px}
.lh-tag2{font-family:var(--f-disp);font-weight:600;font-size:15.5px;color:#dbe7fb;margin-bottom:16px}
.lh-type{font-family:var(--f-disp);font-weight:700;font-size:16px;color:#9cc3ff;min-height:24px;margin-bottom:18px}
.lh-type .cur{display:inline-block;width:2px;height:18px;background:#9cc3ff;margin-left:2px;vertical-align:-3px;animation:lhBlink 1s steps(2) infinite}
@keyframes lhBlink{50%{opacity:0}}
.lh-points{display:grid;grid-template-columns:1fr 1fr;gap:12px 20px;max-width:520px;margin-bottom:24px}
.lh-points div{display:flex;align-items:center;gap:10px;font-size:14px;color:#eaf2ff}
.lh-points .tk{width:20px;height:20px;border-radius:5px;background:#1565D8;display:grid;place-items:center;flex-shrink:0;box-shadow:0 0 0 3px rgba(21,101,216,.25)}
.lh-points .tk svg{width:11px;height:11px;color:#fff}
.lh-ctas{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px}
.lh-ctas .btn-gl{background:rgba(255,255,255,.08);color:#fff;border:1.5px solid rgba(255,255,255,.35)}
.lh-ctas .btn-gl:hover{background:rgba(255,255,255,.16);border-color:#fff}
.lh-ask{display:inline-flex;align-items:center;gap:12px;flex-wrap:wrap;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.16);border-radius:12px;padding:8px 10px 8px 14px}
.lh-ask .k{font-family:var(--f-mono);font-size:11px;font-weight:600;letter-spacing:.06em;color:#fff}
.lh-ask .k b{color:#FF8C1A;margin-right:4px}
.lh-ask .chips{display:flex;gap:6px}
.lh-ask a{width:30px;height:30px;border-radius:8px;background:#fff;display:grid;place-items:center;transition:transform .2s var(--ease-o),box-shadow .2s}
.lh-ask a:hover{transform:translateY(-2px);box-shadow:0 8px 18px -8px rgba(0,0,0,.6)}
.lh-ask a svg{width:18px;height:18px}
.hero.lh .stage{min-height:400px}
.lh-powered{position:absolute;left:4%;bottom:-8px;z-index:6;background:#0A1A3A;border:1px solid rgba(255,255,255,.18);border-radius:10px;padding:8px 14px 9px;box-shadow:0 14px 30px -12px rgba(0,0,0,.7)}
.lh-powered small{display:block;font-family:var(--f-mono);font-size:8.5px;letter-spacing:.16em;color:#9fb6de;text-transform:uppercase;margin-bottom:4px}
.lh-powered>span{display:flex;align-items:center;gap:8px;font-family:var(--f-disp);font-weight:700;font-size:16px;color:#fff}
.lh-powered .msq{display:grid;grid-template-columns:1fr 1fr;gap:2px;width:18px;height:18px}
.lh-powered .msq i{display:block}
@media(max-width:980px){.hero.lh .hero-grid{grid-template-columns:1fr}.hero.lh .stage{min-height:0;margin-top:18px}.lh-powered{position:relative;left:auto;bottom:auto;display:inline-block;margin-top:14px}}
@media(max-width:560px){.lh-points{grid-template-columns:1fr}.lh-ctas .btn{flex:1 1 auto}.lh-ask{border-radius:12px}}

/* trust strip (live) */
.lh-trust{background:var(--surface-2);border-bottom:1px solid var(--line)}
.lh-trust .wrap{display:flex;justify-content:space-between;gap:12px 22px;flex-wrap:wrap;padding:14px 24px;font-size:12.5px;color:var(--muted)}
.lh-trust b{font-family:var(--f-mono);color:var(--ink);font-weight:600}
@media(max-width:760px){.lh-trust .wrap{justify-content:flex-start;overflow-x:auto;flex-wrap:nowrap;white-space:nowrap}}

/* live body primitives */
.pp-sec{font:700 15px/1.35 var(--f-mono);letter-spacing:.14em;text-transform:uppercase;color:var(--blue);margin:0 0 14px}
.pp-ov{font-size:16px;color:var(--text);line-height:1.75}
.pp-ov b{color:var(--ink)}
.pp-cols{display:grid;grid-template-columns:1fr 1fr;gap:16px 46px}
@media(max-width:820px){.pp-cols{grid-template-columns:1fr}}
.prov-strip{display:flex;align-items:center;flex-wrap:wrap;gap:10px;margin-top:22px}
.prov-lbl{font-family:var(--f-mono);font-size:11px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-right:4px}
.prov{display:inline-flex;align-items:center;gap:8px;font-family:var(--f-disp);font-weight:700;font-size:13.5px;color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:9px;padding:7px 15px 7px 8px;box-shadow:0 4px 12px -8px rgba(4,18,42,.4)}
.prov .pl{width:24px;height:24px;border-radius:6px;display:grid;place-items:center;color:#fff;flex-shrink:0}
.prov .pl svg{width:14px;height:14px}
.prov .pl .msq{display:grid;grid-template-columns:1fr 1fr;gap:1.5px;width:14px;height:14px}.prov .pl .msq i{display:block}
/* 3-card explainer (live vcard) */
.vgrid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
@media(max-width:900px){.vgrid{grid-template-columns:1fr}}
.vcard{background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:26px;box-shadow:var(--sh-s);transition:transform .35s var(--ease-o),box-shadow .35s,border-color .3s}
.vcard:hover{transform:translateY(-6px);box-shadow:var(--sh);border-color:#c9dcfb}
.vcard .vb{display:inline-flex;align-items:center;gap:7px;font-family:var(--f-mono);font-size:12px;font-weight:600;padding:6px 12px;border-radius:99px;margin-bottom:16px;background:var(--chip);color:var(--blue)}
.vcard .vb svg{width:13px;height:13px}
.vcard.b2 .vb{background:#eaeff9;color:#2b4a8f}.vcard.b3 .vb{background:#fff3e0;color:#F57C00}
.vcard h3{font-size:18px;margin-bottom:8px}
.vcard p{font-size:13.5px;color:var(--muted);margin-bottom:18px;line-height:1.6}
.vcard ul{list-style:none;display:flex;flex-direction:column;gap:9px}
.vcard li{display:flex;gap:9px;align-items:flex-start;font-size:13px;color:var(--text)}
.vcard li i{width:18px;height:18px;border-radius:50%;background:#e4f7ec;color:#16a34a;display:grid;place-items:center;flex-shrink:0;margin-top:1px}
.vcard li i svg{width:10px;height:10px}

/* dark Microsoft plan card (live ez-card) */
.ez-wrap{display:grid;grid-template-columns:minmax(0,380px) 1fr;gap:26px;align-items:start}
@media(max-width:900px){.ez-wrap{grid-template-columns:1fr}}
.ez-card{position:relative;background:#0B1730;border:1px solid #1e2e52;border-radius:16px;padding:22px 20px 20px;color:#fff;box-shadow:0 24px 50px -24px rgba(4,30,66,.8);overflow:hidden}
.ez-card .ez-off{position:absolute;top:0;right:0;background:#FF8C1A;color:#fff;font:700 10px var(--f-mono);letter-spacing:.08em;padding:5px 12px;border-radius:0 16px 0 10px}
.ez-card .ez-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
.ez-card .ez-ms{display:inline-flex;align-items:center;gap:8px;font-family:var(--f-disp);font-weight:700;font-size:15px}
.ez-card .ez-ms .msq{display:grid;grid-template-columns:1fr 1fr;gap:2px;width:18px;height:18px}.ez-card .ez-ms .msq i{display:block}
.ez-card .ez-ext{color:#7fb0ff}.ez-card .ez-ext svg{width:15px;height:15px}
.ez-card .ez-fam{font:600 10.5px var(--f-mono);letter-spacing:.14em;text-transform:uppercase;color:#7fb0ff}
.ez-card h3{color:#fff;font-size:18px;margin:6px 0 4px}
.ez-card .ez-sku{font:400 10.5px var(--f-mono);color:#7d8fb3;margin-bottom:16px}
.ez-card .ez-row{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#b9c9e2;padding:8px 0}
.ez-card .ez-row s{font-family:var(--f-mono);color:#8ea2c6}
.ez-card .ez-gst{text-align:right;font:400 10px var(--f-mono);color:#7d8fb3;margin:-6px 0 8px}
.ez-card .ez-pr{display:flex;justify-content:space-between;align-items:center;padding:7px 0}
.ez-card .ez-tag{font:700 9.5px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;padding:4px 9px;border-radius:6px}
.ez-card .ez-tag.m{background:#1565D8;color:#fff}.ez-card .ez-tag.y{background:#FF8C1A;color:#fff}
.ez-card .ez-amt{font-family:var(--f-disp);font-weight:800;font-size:24px;color:#fff;letter-spacing:-.02em}
.ez-card .ez-save{display:flex;justify-content:space-between;align-items:center;background:rgba(46,204,113,.08);border:1px solid rgba(46,204,113,.35);border-radius:10px;padding:10px 12px;margin:14px 0 16px;font-size:12px;color:#b9c9e2}
.ez-card .ez-save b{color:#5FE08D;font-family:var(--f-mono);font-size:11.5px}
.ez-card .ez-q{display:flex;align-items:center;background:#fff;border-radius:8px;overflow:hidden;margin-bottom:12px}
.ez-card .ez-q button{width:44px;height:38px;border:0;background:#1565D8;color:#fff;font-size:18px;cursor:pointer}
.ez-card .ez-q button:first-child{background:#51607A}
.ez-card .ez-q input{flex:1;height:38px;border:0;text-align:center;font:600 14px var(--f-mono);color:#041E42;background:#fff;outline:0}
.ez-card .ez-cta{display:flex;justify-content:space-between;align-items:center;font-size:12.5px;margin-bottom:12px}
.ez-card .ez-cta a{display:inline-flex;align-items:center;gap:6px;color:#dbe7fb;font-weight:600}
.ez-card .ez-cta a.q{color:#7fb0ff}
.ez-card .ez-cta svg{width:13px;height:13px}
.ez-card .ez-buy{width:100%;border:0;cursor:pointer;background:linear-gradient(135deg,#1565D8,#0C3E8F);color:#fff;font-weight:700;font-size:14px;padding:12px;border-radius:9px;box-shadow:0 12px 24px -12px rgba(21,101,216,.9);transition:transform .2s}
.ez-card .ez-buy:hover{transform:translateY(-2px)}
.ez-note{font:400 11.5px var(--f-mono);color:var(--muted);margin-top:14px}

/* dark proof band (live "certified team" band) */
.dband{background:linear-gradient(120deg,#041E42,#0E2F66 60%,#1350B0);border-radius:20px;padding:30px;display:grid;grid-template-columns:repeat(3,1fr);gap:0;color:#fff;position:relative;overflow:hidden;box-shadow:var(--sh-l)}
.dband>div{display:flex;gap:14px;align-items:flex-start;padding:16px 20px;border-right:1px solid rgba(255,255,255,.12);position:relative}
.dband>div:nth-child(3n){border-right:0}
.dband>div:nth-child(n+4){border-top:1px solid rgba(255,255,255,.12)}
.dband i{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.1);display:grid;place-items:center;flex-shrink:0;color:#9cc3ff}
.dband i svg{width:20px;height:20px}
.dband b{display:block;font-family:var(--f-disp);font-size:15px;color:#fff;margin-bottom:4px}
.dband p{font-size:12.5px;color:#c9d8f2;line-height:1.55}
.dband .n{position:absolute;right:14px;top:10px;font-family:var(--f-mono);font-weight:600;font-size:11px;color:rgba(255,255,255,.35)}
@media(max-width:860px){.dband{grid-template-columns:1fr}.dband>div{border-right:0;border-top:1px solid rgba(255,255,255,.12)}.dband>div:first-child{border-top:0}}

/* video (live "watch it in action") */
.lvid{max-width:640px;margin:0 auto;text-align:center}
.lvid .lbl{display:inline-block;font:600 12px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;border:1px solid var(--line);border-radius:99px;padding:8px 16px;margin-bottom:16px;color:var(--ink);background:var(--surface)}
.lvid .fr{position:relative;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#0B1730;box-shadow:var(--sh-l);cursor:pointer;display:grid;place-items:center}
.lvid .fr img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.lvid .fr .pb{position:relative;width:68px;height:48px;border-radius:12px;background:#FF0000;display:grid;place-items:center;transition:transform .2s}
.lvid .fr:hover .pb{transform:scale(1.08)}
.lvid .fr .pb svg{width:22px;height:22px;color:#fff}
.lvid .fr .cap{position:absolute;left:14px;right:14px;top:12px;text-align:left;color:#fff;font-family:var(--f-disp);font-weight:700;font-size:15px;text-shadow:0 2px 8px rgba(0,0,0,.6)}
.lvid iframe{position:absolute;inset:0;width:100%;height:100%;border:0}

/* live CTA + proof strip */
.lcta{background:linear-gradient(120deg,#0E3A8F,#1565D8 55%,#2a7bf0);border-radius:20px;padding:30px 34px;display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center;color:#fff;box-shadow:var(--sh-l);position:relative;overflow:hidden}
.lcta h2{color:#fff!important;font-family:var(--f-disp)!important;font-size:24px!important;margin-bottom:6px!important;text-transform:none!important;letter-spacing:-.01em!important}
.lcta .sub{font-size:13.5px;color:#dbe7fb;margin-bottom:18px}
.lcta .row{display:flex;flex-wrap:wrap;gap:10px}
.lcta .row .btn{padding:10px 16px;font-size:13px}
.lcta .row .b-w{background:rgba(255,255,255,.12);border:1.5px solid rgba(255,255,255,.35);color:#fff}
.lcta .row .b-w:hover{background:rgba(255,255,255,.22)}
.lcta .seal{width:120px;height:120px;border-radius:50%;background:#fff;display:grid;place-items:center;box-shadow:0 0 0 6px rgba(255,255,255,.18);overflow:hidden}
.lcta .seal img{width:100%;height:100%;object-fit:cover}
.lcta .seal .sl{font:700 10px var(--f-mono);color:#1565D8;text-align:center;padding:10px;display:none}
.lcta .seal.noimg img{display:none}.lcta .seal.noimg .sl{display:block}
@media(max-width:760px){.lcta{grid-template-columns:1fr}.lcta .seal{display:none}}
.proof{display:flex;justify-content:center;flex-wrap:wrap;gap:10px;margin-top:18px}
.proof span{font:600 11.5px var(--f-mono);color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:99px;padding:7px 14px}

/* ============================ LIVE FOOTER ============================ */
.lnl{position:relative;z-index:2;max-width:860px;margin:30px auto -110px;background:var(--surface);border:1px solid var(--line);border-radius:18px;box-shadow:var(--sh-l);padding:24px 26px;text-align:center}
.lnl h3{display:flex;align-items:center;justify-content:center;gap:10px;font-size:17px;margin-bottom:8px}
.lnl h3 svg{width:20px;height:20px;color:#F57C00}
.lnl p{font-size:13px;color:var(--muted);margin-bottom:16px}
.lnl form{display:flex;gap:10px;margin-bottom:22px}
.lnl input{flex:1;min-width:0;border:1.5px solid var(--line-2);border-radius:10px;padding:12px 14px;font-size:14px;background:var(--surface);color:var(--ink);outline:0}
.lnl input:focus{border-color:#1565D8}
.lnl .two{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.lnl .two a{display:flex;align-items:center;justify-content:center;gap:8px;color:#fff;font-weight:600;font-size:13.5px;border-radius:10px;padding:12px}
.lnl .two a svg{width:17px;height:17px}
.lnl .two .w{background:#25D366}.lnl .two .l{background:#1565D8}
@media(max-width:620px){.lnl{margin:30px 16px -110px}.lnl form{flex-direction:column}.lnl .two{grid-template-columns:1fr}}
.lft{background:linear-gradient(160deg,#1350C8 0%,#1565D8 45%,#1d74ee 100%);color:#e6efff;padding:150px 0 30px}
html[data-theme="dark"] .lft{background:linear-gradient(160deg,#0a2f7a,#0f4bb0)}
.lft a:hover{color:#fff;text-decoration:underline;text-underline-offset:3px}
.lft .top{display:grid;grid-template-columns:1.35fr 1fr;gap:26px;margin-bottom:26px}
@media(max-width:900px){.lft .top{grid-template-columns:1fr}}
.lft .bnr{background:#fff;border-radius:14px;padding:10px 14px;display:flex;align-items:center;gap:14px;margin-bottom:14px}
.lft .bnr img.lg{height:56px;width:auto}
.lft .bnr .tx{flex:1;color:#041E42;font-size:12.5px;line-height:1.5}
.lft .bnr .tx b{display:block;font-size:13px}
.lft .bnr .tx em{font-style:normal;color:#1565D8;font-weight:700}
.lft .bnr img.bd{width:58px;height:58px;border-radius:50%;object-fit:cover;flex-shrink:0}
.lft .co{font-size:12.5px;line-height:1.75;color:#e6efff}
.lft .co b{color:#fff}
.lft .soc{display:flex;gap:8px;margin-top:14px;flex-wrap:wrap}
.lft .soc a{width:34px;height:34px;border-radius:9px;background:rgba(255,255,255,.16);display:grid;place-items:center;color:#fff}
.lft .soc a:hover{background:#fff;color:#1565D8;text-decoration:none}
.lft .soc svg{width:16px;height:16px}
.lft .cv h3{font-family:var(--f-disp);color:#fff;font-size:24px;margin-bottom:12px}
.lft .cv .fr{position:relative;aspect-ratio:16/9;border-radius:12px;overflow:hidden;background:#0B1730;cursor:pointer;display:grid;place-items:center}
.lft .cv .fr img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.lft .cv .fr .pb{position:relative;width:60px;height:42px;border-radius:10px;background:#FF0000;display:grid;place-items:center}
.lft .cv .fr .pb svg{width:20px;height:20px;color:#fff}
.lft .cv iframe{position:absolute;inset:0;width:100%;height:100%;border:0}
.lft .rows{display:flex;flex-direction:column;gap:10px;margin-bottom:22px}
.lft .row{display:grid;grid-template-columns:120px 1fr;gap:12px;align-items:baseline}
.lft .row .k{font-family:var(--f-disp);font-weight:700;color:#fff;font-size:14px}
.lft .row .v{display:flex;flex-wrap:wrap;gap:4px 18px;font-size:12.5px}
.lft .row .v a:before{content:"\u203A";margin-right:6px;opacity:.7}
.lft .row .v a.hire{background:#e5383b;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700}
.lft .row .v a.hire:before{content:none}
@media(max-width:620px){.lft .row{grid-template-columns:1fr;gap:4px}}
.lft .strip{display:grid;grid-template-columns:140px 1fr;gap:14px;align-items:center;padding:12px 0}
.lft .strip .k{font-family:var(--f-disp);font-weight:700;color:#fff;font-size:14px}
@media(max-width:700px){.lft .strip{grid-template-columns:1fr}}
.lft .tiles{display:flex;flex-wrap:wrap;gap:8px}
.lft .tl{background:#fff;color:#041E42;border-radius:8px;min-width:64px;padding:0 7px;height:58px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;line-height:1.05;box-shadow:0 6px 14px -8px rgba(0,0,0,.35)}
.lft .tl small{font:600 7.5px var(--f-mono);letter-spacing:.1em;color:#51607A}
.lft .tl b{font-family:var(--f-disp);font-weight:800;font-size:12px;color:#041E42}
.lft .tl em{font:600 6.5px var(--f-mono);letter-spacing:.08em;color:#8a98b2;font-style:normal;text-transform:uppercase}
.lft .pay{background:#fff;border-radius:7px;padding:6px 10px;font:800 11px var(--f-disp);color:#041E42;min-width:64px;text-align:center}
.lft .prot{background:#fff;border-radius:8px;height:46px;padding:4px 8px;display:flex;align-items:center}
.lft .prot img{height:36px;width:auto}
.lft .prot .pt{font:800 11px var(--f-disp);color:#041E42}
.lft .rev{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
@media(max-width:760px){.lft .rev{grid-template-columns:1fr}}
.lft .rev div{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:10px 14px;display:flex;gap:10px;align-items:center}
.lft .rev i{width:30px;height:30px;border-radius:7px;display:grid;place-items:center;color:#fff;font-style:normal;font-weight:800;font-size:13px;flex-shrink:0}
.lft .rev b{display:block;color:#fff;font-size:13px}
.lft .rev span>span{font:500 10.5px var(--f-mono);color:#ffd27a}
.lft .grow{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap;background:rgba(4,30,66,.35);border:1px solid rgba(255,255,255,.18);border-radius:16px;padding:18px 22px;margin:22px 0}
.lft .grow b{font-family:var(--f-disp);font-size:18px;color:#fff}
.lft .grow span{display:block;font-size:12.5px;color:#c9d8f2}
.lft .bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:10px;font-size:12px;color:#c9d8f2;border-top:1px solid rgba(255,255,255,.18);padding-top:16px}
.lft .bot .ids{font-family:var(--f-mono);font-size:11px}
.lft img.broken{display:none}
.lnl-wrap{position:relative;z-index:2;padding:0 16px}
.lnl .fi input{width:100%}
.lnl .fi{margin:0}
.lh-ask .chips{flex-wrap:wrap}
.lh-ask a{width:auto;height:28px;padding:0 10px;border-radius:7px;font:700 11.5px var(--f-disp);color:#041E42;gap:6px;display:inline-flex;align-items:center}
.lh-ask a i{width:8px;height:8px;border-radius:50%;display:block}
.lh-ask a[data-ai=chatgpt] i{background:#10a37f}.lh-ask a[data-ai=claude] i{background:#d97757}.lh-ask a[data-ai=perplexity] i{background:#20808d}.lh-ask a[data-ai=google] i{background:#4285f4}.lh-ask a[data-ai=copilot] i{background:#7b61ff}

/* hyper-motion layer for live hero */
.hero.lh .hero-bg canvas.lh-net{position:absolute;inset:0;width:100%;height:100%;opacity:.9}
.hero.lh .stage{position:relative;perspective:1200px}
.hero.lh .stage>.lh-tilt{transform-style:preserve-3d;transition:transform .5s var(--ease-o);will-change:transform}
.lh-orbit{position:absolute;left:50%;top:50%;width:560px;height:560px;margin:-280px 0 0 -280px;border-radius:50%;border:1px dashed rgba(127,176,255,.22);pointer-events:none;animation:lhSpin 60s linear infinite}
.lh-orbit.o2{width:440px;height:440px;margin:-220px 0 0 -220px;border-style:solid;border-color:rgba(255,140,26,.14);animation-duration:38s;animation-direction:reverse}
.lh-orbit:before,.lh-orbit:after{content:"";position:absolute;width:10px;height:10px;border-radius:50%;background:#7fb0ff;box-shadow:0 0 14px 4px rgba(127,176,255,.6);top:-5px;left:50%}
.lh-orbit:after{top:auto;bottom:-5px;background:#FF8C1A;box-shadow:0 0 14px 4px rgba(255,140,26,.55)}
.lh-orbit.o2:before{background:#5FE08D;box-shadow:0 0 12px 3px rgba(95,224,141,.5)}
@keyframes lhSpin{to{transform:rotate(360deg)}}
.lh-chip{position:absolute;z-index:5;display:flex;align-items:center;gap:8px;background:rgba(10,26,58,.88);border:1px solid rgba(255,255,255,.16);backdrop-filter:blur(8px);color:#fff;border-radius:12px;padding:8px 12px;font:600 12px var(--f-disp);box-shadow:0 16px 30px -14px rgba(0,0,0,.7);animation:lhFloat 6s ease-in-out infinite}
.lh-chip i{width:24px;height:24px;border-radius:7px;display:grid;place-items:center;background:#1565D8}
.lh-chip i svg{width:13px;height:13px}
.lh-chip small{display:block;font:500 10px var(--f-mono);color:#9fb6de}
.lh-chip.c2{animation-delay:-3s}.lh-chip.c2 i{background:#FF8C1A}
@keyframes lhFloat{50%{transform:translateY(-10px)}}
@media(max-width:1100px){.lh-chip{display:none}}
@media(max-width:980px){.lh-orbit{display:none}}
.rfab .rf-cart{box-shadow:0 0 0 3px rgba(255,255,255,.85),0 12px 26px -10px rgba(4,30,66,.55)}
@media(max-width:760px){.ubar .ur .stat,.ubar .lang-sel,.ubar .ph b{display:none}}
.hero.lh .stage{padding-bottom:62px}@media(max-width:980px){.hero.lh .stage{padding-bottom:0}}
/* dark-mode fixes for live primitives */
html[data-theme="dark"] .ico.n{color:#9cc3ff!important}html[data-theme="dark"] .ico.o{color:#FFB15C!important}html[data-theme="dark"] .ico.g{color:#5FE08D!important}html[data-theme="dark"] .ico.r{color:#ff8a80!important}html[data-theme="dark"] .ico{color:#7fb0ff!important}
html[data-theme="dark"] .vcard .vb{background:#10244A;color:#9cc3ff}html[data-theme="dark"] .vcard.b2 .vb{background:#14264a;color:#b9c9e2}html[data-theme="dark"] .vcard.b3 .vb{background:rgba(255,140,26,.14);color:#FFB15C}
html[data-theme="dark"] .vcard li i{background:rgba(46,204,113,.14);color:#5FE08D}
html[data-theme="dark"] .vcard:hover{border-color:#2b4d8a}
.ez-card .ez-save{gap:10px}.ez-card .ez-save b{white-space:nowrap;flex-shrink:0}.ez-card .ez-save>span{min-width:0}
/* perf: composite hero bg layers instead of repainting every frame */
.hero.lh .hero-bg .lh-grid{background-image:none!important;animation:none!important;overflow:hidden}
.hero.lh .hero-bg .lh-grid:before{content:"";position:absolute;inset:-48px 0 0 -48px;background-image:linear-gradient(rgba(255,255,255,.05) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.05) 1px,transparent 1px);background-size:48px 48px;animation:lhGridT 32s linear infinite;will-change:transform}
@keyframes lhGridT{to{transform:translate3d(48px,48px,0)}}
.hero.lh .hero-bg .lh-aur{will-change:transform;transform:translateZ(0)}
.hero.lh .hero-bg .lh-scan{will-change:transform;top:0!important;animation:lhScanT 7s var(--ease) infinite}
@keyframes lhScanT{0%{transform:translateY(-120px)}100%{transform:translateY(700px)}}
@media(prefers-reduced-motion:reduce){.hero.lh .hero-bg .lh-grid:before{animation:none}}
.hero.lh .hero-bg .lh-aur{filter:none!important;opacity:.3}
.hero.lh .hero-bg .lh-aur.a1{background:radial-gradient(circle,rgba(47,107,255,.9),rgba(47,107,255,.25) 40%,transparent 70%)!important}
.hero.lh .hero-bg .lh-aur.a2{background:radial-gradient(circle,rgba(255,140,26,.85),rgba(255,140,26,.2) 40%,transparent 70%)!important}

/* ===== page ===== */
/* =====================================================================
   Cybird X2 \u2014 page styles (prefix cb- / scoped)
   ===================================================================== */
#overview,#features,#benefits,#how,#hardware,#simulate,#compare,#ideal,#partners,#pricing,#configure,#inbox,#why,#faq,#contact,#family{scroll-margin-top:90px}
.cb-src{display:none}
.cb-g{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:7px;background:#1565D8;color:#fff;font:800 13px/1 var(--f-disp);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);flex-shrink:0}
.cb-g.sm{width:18px;height:18px;font-size:11px;border-radius:6px;vertical-align:-3px;margin-right:4px}
.hero.lh .lh-powered.cb-pw{bottom:-24px}
@media(max-width:980px){.hero.lh .lh-powered.cb-pw{bottom:auto}}
.cb-pw em{display:block;font:500 9px var(--f-mono);letter-spacing:.06em;color:#9fb6de;font-style:normal;margin-top:5px;white-space:nowrap}
.hero.lh .lh-chip.cb-c2{bottom:-18px;right:-14px}
@media(max-width:980px){.hero.lh .lh-chip.cb-c2{bottom:auto;top:-30px;right:auto;left:-6px}}
.vt-k{display:inline-flex;align-items:center;gap:7px;font:600 11px var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:#1565D8}
.vt-k svg{width:14px;height:14px}
html[data-theme="dark"] .vt-k{color:#7fb0ff}
.cb-anc{display:flex;flex-wrap:wrap;gap:6px 14px;margin:-4px 0 16px}
.cb-anc a{display:inline-flex;align-items:center;gap:6px;font:600 12px var(--f-mono);color:#B6C2DA;border-bottom:1px dashed rgba(182,194,218,.4);padding-bottom:2px;transition:color .2s,border-color .2s}
.cb-anc a:hover{color:#fff;border-color:#FF8C1A}
.cb-anc svg{width:13px;height:13px;color:#7fb0ff}
[data-gl] svg,[data-gl2] svg{display:block}
[data-gl2]>svg{display:inline-block;width:15px;height:15px;flex-shrink:0}

/* ---------- micro-interactions ---------- */
.cb-mag{transition:transform .2s var(--ease),background .2s,color .2s,border-color .2s,box-shadow .25s,translate .5s cubic-bezier(.3,1.5,.5,1)}
.cb-mag.mg{transition:transform .2s var(--ease),background .2s,color .2s,border-color .2s,box-shadow .25s,translate .12s linear;box-shadow:0 14px 34px -12px rgba(255,140,26,.75)}
.cb-tl{position:relative}
.cb-tl.tilting{transition:transform .14s linear,box-shadow .35s,border-color .3s!important}
.cb-tl:after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .35s;z-index:3;
  background:radial-gradient(260px circle at var(--gx,50%) var(--gy,50%),rgba(21,101,216,.13),transparent 60%),linear-gradient(105deg,transparent calc(var(--gx,50%) - 22%),rgba(21,101,216,.07) var(--gx,50%),transparent calc(var(--gx,50%) + 22%))}
.cb-tl.tilting:after{opacity:1}
html[data-theme="dark"] .cb-tl:after{background:radial-gradient(260px circle at var(--gx,50%) var(--gy,50%),rgba(127,176,255,.15),transparent 60%),linear-gradient(105deg,transparent calc(var(--gx,50%) - 22%),rgba(255,255,255,.07) var(--gx,50%),transparent calc(var(--gx,50%) + 22%))}
.cb-kin .w{display:inline-block;opacity:0;transform:translateY(.6em) rotate(2deg);transform-origin:0 100%;transition:opacity .5s var(--ease-o),transform .75s cubic-bezier(.2,1.35,.4,1);transition-delay:calc(var(--i)*60ms + .1s)}
.rv.in .cb-kin .w{opacity:1;transform:none}
.cb-sd{position:relative;max-width:var(--maxw);height:40px;margin:4px auto;padding:0 24px;opacity:1!important;transform:none!important}
.cb-sd svg{width:100%;height:40px;display:block;overflow:visible}
.cb-sd path{fill:none;stroke:var(--line-2);stroke-width:1.5;stroke-dasharray:1 1;stroke-dashoffset:1;vector-effect:non-scaling-stroke;transition:stroke-dashoffset 1.6s var(--ease-o)}
.cb-sd.in path{stroke-dashoffset:0;stroke:#9cbcf0}
html[data-theme="dark"] .cb-sd.in path{stroke:#2b4d8a}
.cb-sd i{position:absolute;left:24px;top:17px;width:7px;height:7px;border-radius:50%;background:#FF8C1A;box-shadow:0 0 10px 3px rgba(255,140,26,.55);opacity:0}
.cb-sd.in.run i{animation:cbSd 5.5s var(--ease) infinite 1s}
@keyframes cbSd{0%{opacity:0;transform:translateX(0)}8%{opacity:1}92%{opacity:1}100%{opacity:0;transform:translateX(calc(var(--sw,1100px) - 7px))}}
@keyframes cbBlink{50%{opacity:.25}}
@keyframes cbBump{0%{transform:translateY(-3px) scale(1.14)}}
@keyframes cbSwap{0%{opacity:0;transform:translateY(8px)}}
@keyframes cbPop{0%{transform:scale(0)}60%{transform:scale(1.25)}100%{transform:scale(1)}}
.bump{animation:cbBump .5s var(--ease-o)}

/* ===================== HERO ===================== */
#cbHero .hero-grid>*{min-width:0}
#cbHero .lh-title .nm{font-size:.74em}
@media(min-width:981px){#cbHero .lh-title .nm{white-space:nowrap}}
#cbHero .stage>.lh-tilt{width:100%;max-width:510px;min-width:0}
#cbHero .lh-points .tk svg{width:14px;height:14px}
.hero.lh .hero-bg canvas.cb-bg{position:absolute;top:0;right:0;width:64%;height:100%}
@media(max-width:980px){.hero.lh .hero-bg canvas.cb-bg{width:100%;opacity:.55}}

.cbv{position:relative;width:100%;max-width:510px;background:#0A1838;border:1px solid rgba(127,176,255,.22);border-radius:20px;box-shadow:0 40px 90px -30px rgba(0,0,0,.75),inset 0 1px 0 rgba(255,255,255,.06);overflow:hidden;color:#EAF2FF}
html[data-theme="dark"] .cbv{background:#08122A;border-color:rgba(127,176,255,.18)}
.cbv:after{content:"";position:absolute;inset:0;border-radius:20px;border:2px solid #16a34a;opacity:0;pointer-events:none}
.cbv.win:after{animation:cbFlash 1.8s var(--ease-o)}
.cbv.alarm:before{content:"";position:absolute;inset:0;border-radius:20px;border:2px solid #ff5a4a;opacity:0;pointer-events:none;z-index:5;animation:cbAlarm 1.1s var(--ease-o)}
@keyframes cbFlash{0%,25%{opacity:.9}100%{opacity:0}}
@keyframes cbAlarm{0%,30%{opacity:.85}100%{opacity:0}}
.cbv-h{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 16px;border-bottom:1px solid rgba(127,176,255,.14)}
.cbv-h b{font-family:var(--f-disp);font-size:14px;display:flex;align-items:center;gap:9px;color:#fff;white-space:nowrap;min-width:0}
.cbv-h b span{overflow:hidden;text-overflow:ellipsis}
.cbv-h b i{width:28px;height:28px;border-radius:8px;background:#1565D8;color:#fff;display:grid;place-items:center;flex-shrink:0}
.cbv-h b i svg{width:15px;height:15px}
.cbv-live{font:500 10.5px var(--f-mono);color:#9fb6de;display:flex;align-items:center;gap:6px;white-space:nowrap;flex-shrink:0}
.cbv-live:before{content:"";width:7px;height:7px;border-radius:50%;background:#7fb0ff;flex-shrink:0;animation:cbBlink 1.2s infinite}
.cbv.a0 .cbv-live:before{background:#5FE08D;animation-duration:.5s}
.cbv.a2 .cbv-live:before{background:#ff5a4a;animation-duration:.6s}
.cbv.a3 .cbv-live:before{background:#FF8C1A;animation-duration:.8s}
.cbv.a6 .cbv-live:before{background:#5FE08D;animation-duration:1.6s}
.cbv-rail{position:relative;display:grid;grid-template-columns:repeat(7,1fr);gap:4px;padding:10px 12px 12px}
.cbv-rail>span{position:relative;z-index:1;text-align:center;font:600 9.5px var(--f-mono);color:#7f93ba;padding:5px 1px;border-radius:99px;background:#0D1F47;border:1px solid rgba(127,176,255,.16);white-space:nowrap;overflow:hidden;transition:color .3s,background .3s,border-color .3s,transform .45s cubic-bezier(.3,1.6,.5,1),box-shadow .3s}
.cbv-rail>span.on{color:#fff;background:#1565D8;border-color:#7fb0ff;transform:translateY(-2px) scale(1.06);box-shadow:0 0 0 3px rgba(21,101,216,.25),0 6px 18px -6px rgba(80,150,255,.8)}
.cbv.a2 .cbv-rail>span.on{background:#c0392b;border-color:#ff8a80;box-shadow:0 0 0 3px rgba(192,57,43,.25)}
.cbv.a3 .cbv-rail>span.on{background:#FF8C1A;border-color:#FFB15C;box-shadow:0 0 0 3px rgba(255,140,26,.25)}
.cbv.a6 .cbv-rail>span.on{background:#16a34a;border-color:#5FE08D;box-shadow:0 0 0 3px rgba(22,163,74,.25)}
.cbv-rail>span.dn{color:#8ff0b2;border-color:rgba(95,224,141,.5);background:rgba(22,163,74,.14)}
.cbv-rail .tr{position:absolute;left:12px;right:12px;bottom:5px;height:2px;border-radius:2px;background:rgba(127,176,255,.12);overflow:hidden}
.cbv-rail .tr b{display:block;height:100%;width:100%;background:#5FE08D;transform-origin:left;transform:scaleX(0)}
.cbv-sc{position:relative;height:300px;overflow:hidden;border-top:1px solid rgba(127,176,255,.08);border-bottom:1px solid rgba(127,176,255,.08);background:#061230 radial-gradient(60% 70% at 50% 58%,rgba(40,90,210,.32),transparent 75%)}
html[data-theme="dark"] .cbv-sc{background-color:#040c22}
.cbv-sc canvas{position:absolute;inset:0;width:100%;height:100%}
.cbv-spot{position:absolute;left:0;top:0;width:260px;height:260px;margin:-130px 0 0 -130px;border-radius:50%;background:radial-gradient(circle,rgba(160,205,255,.16),rgba(160,205,255,.05) 38%,transparent 68%);opacity:0;transition:opacity .45s;pointer-events:none;will-change:transform}
.cbv-sc.hov .cbv-spot{opacity:1}
.cbv-fx{position:absolute;inset:0;pointer-events:none;will-change:translate}
.cbv-cd{position:absolute;top:10px;width:212px;padding:9px 10px;border-radius:13px;background:rgba(7,20,48,.94);border:1px solid rgba(127,176,255,.4);box-shadow:0 24px 50px -16px rgba(0,0,0,.85),0 0 0 4px rgba(21,101,216,.12);opacity:0;transform:translateY(14px) scale(.9) perspective(600px) rotateX(14deg);transition:opacity .45s,transform .7s cubic-bezier(.2,1.3,.4,1)}
.cbv-cd.p-r{right:10px}.cbv-cd.p-l{left:10px}
.cbv-cd.show{opacity:1;transform:none}
.cbv-cd.out{opacity:0;transform:translateY(-8px) scale(.88);transition:opacity .4s,transform .5s var(--ease)}
.cbv .dh{display:flex;gap:8px;align-items:center;margin-bottom:7px}
.cbv .dh i{width:24px;height:24px;border-radius:7px;background:#1565D8;color:#fff;display:grid;place-items:center;flex-shrink:0}
.cbv .dh i.r{background:#c0392b}.cbv .dh i.o{background:#FF8C1A}.cbv .dh i.b{background:#0C3E8F}
.cbv .dh i svg{width:13px;height:13px}
.cbv .dh>span{min-width:0;flex:1}
.cbv .dh small{display:block;font:600 7.5px var(--f-mono);letter-spacing:.07em;text-transform:uppercase;color:#9fb6de;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cbv .dh b{display:block;font:700 11.5px/1.25 var(--f-disp);color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cbv-cd ul{list-style:none;display:flex;flex-direction:column;gap:3px}
.cbv-cd li{display:grid;grid-template-columns:auto 1fr;gap:0 6px;align-items:center;padding:3px 6px;border-radius:7px;background:rgba(127,176,255,.08);opacity:0;transform:translateX(-10px);transition:opacity .35s,transform .45s var(--ease-o)}
.cbv-cd.show li{opacity:1;transform:none}
.cbv-cd.show li:nth-child(2){transition-delay:.12s}.cbv-cd.show li:nth-child(3){transition-delay:.24s}.cbv-cd.show li:nth-child(4){transition-delay:.36s}
.cbv-cd li em{grid-row:span 2;font:700 7.5px var(--f-mono);font-style:normal;text-transform:uppercase;padding:2px 5px;border-radius:99px;color:#fff;background:#1565D8;text-align:center;min-width:38px}
.cbv-cd li em.io{background:#0e7490}.cbv-cd li em.gu{background:#6d5bd0}.cbv-cd li em.bk{background:#c0392b}
.cbv-cd li span{font:600 9.5px/1.25 var(--f-mono);color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cbv-cd li b{font:500 8.5px/1.25 var(--f-body);color:#9fb6de;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
#cbvBl li{opacity:0;transform:scale(.85);transition:opacity .3s,transform .5s cubic-bezier(.3,1.7,.5,1)}
#cbvBl li.in{opacity:1;transform:none}
#cbvBl li.in em{animation:cbPop .5s var(--ease-o)}
#cbvCl li{opacity:0}#cbvCl li.in{opacity:1;transform:none}
.cbv-cd .bw{display:grid;grid-template-columns:86px 1fr;gap:6px;align-items:center;margin:4px 0;font:500 9px var(--f-mono);color:#cfe0ff}
.cbv-cd .bw i{display:block;height:8px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}
.cbv-cd .bw b{display:block;height:100%;width:100%;border-radius:99px;background:#5FE08D;transform-origin:left;transform:scaleX(.3);transition:transform 1.1s cubic-bezier(.3,1.3,.5,1)}
.cbv-cd .bw b.o{background:#FF8C1A}.cbv-cd .bw b.p{background:#a08cff}
.cbv-cd .vd{display:block;text-align:center;font:700 9.5px var(--f-disp);color:#fff;background:#16a34a;border-radius:7px;padding:4px;margin-top:6px;opacity:0;transform:scale(.8);transition:opacity .3s,transform .45s cubic-bezier(.3,1.7,.5,1)}
.cbv-cd .vd.in{opacity:1;transform:none}
.cbv-cd .sp{display:flex;align-items:flex-end;gap:4px;height:30px;margin-top:6px;padding:0 2px}
.cbv-cd .sp i{flex:1;height:100%;border-radius:3px 3px 0 0;background:#1565D8;transform-origin:bottom;transform:scaleY(.05);transition:transform .8s cubic-bezier(.3,1.4,.5,1)}
.cbv-cd .sp i:nth-child(2n){background:#7fb0ff}
.cbv-cd.show .sp i{transform:scaleY(var(--h))}
.cbv-cd.show .sp i:nth-child(2){transition-delay:.06s}.cbv-cd.show .sp i:nth-child(3){transition-delay:.12s}.cbv-cd.show .sp i:nth-child(4){transition-delay:.18s}.cbv-cd.show .sp i:nth-child(5){transition-delay:.24s}.cbv-cd.show .sp i:nth-child(6){transition-delay:.3s}.cbv-cd.show .sp i:nth-child(7){transition-delay:.36s}
/* final settle */
.cbv-end{position:absolute;left:50%;bottom:12px;display:flex;align-items:center;gap:10px;padding:9px 14px 9px 10px;border-radius:14px;background:rgba(5,22,40,.95);border:1px solid rgba(95,224,141,.55);box-shadow:0 0 0 4px rgba(95,224,141,.12),0 24px 50px -14px rgba(0,0,0,.85);opacity:0;transform:translate(-50%,20px) scale(.6);white-space:nowrap}
.cbv-end.show{animation:cbEnd 1s cubic-bezier(.2,1.5,.35,1) forwards}
.cbv-end.out{animation:cbEndOut .5s var(--ease) forwards}
.cbv-end.fin{opacity:1;transform:translate(-50%,0)}
@keyframes cbEnd{0%{opacity:0;transform:translate(-50%,20px) scale(.6)}40%{opacity:1}100%{opacity:1;transform:translate(-50%,0) scale(1)}}
@keyframes cbEndOut{0%{opacity:1;transform:translate(-50%,0)}100%{opacity:0;transform:translate(-50%,-6px) scale(.9)}}
.cbv-end i{width:34px;height:34px;border-radius:10px;background:#16a34a;color:#fff;display:grid;place-items:center;flex-shrink:0}
.cbv-end i svg{width:18px;height:18px}
.cbv-end b{font:800 14px/1.15 var(--f-disp);color:#fff;letter-spacing:-.01em}
.cbv-end .tx{display:block;min-width:0}
.cbv-end small{display:block;font:500 8.5px var(--f-mono);color:#8ff0b2;margin-top:3px;white-space:nowrap}
.cbv-end .ring{position:absolute;inset:-2px;border-radius:15px;border:2px solid #5FE08D;opacity:0;pointer-events:none}
.cbv-end.show .ring{animation:cbRing 1.1s var(--ease-o) .35s}
@keyframes cbRing{0%{opacity:.9;transform:scale(1)}100%{opacity:0;transform:scale(1.3,1.6)}}
/* KPI strip */
.cbv-kp{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid rgba(127,176,255,.12)}
.cbv-kp>div{padding:9px 6px 10px;text-align:center;border-right:1px solid rgba(127,176,255,.12);min-width:0}
.cbv-kp>div:last-child{border-right:0}
.cbv-kp span{display:block;font:500 9px var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:#9fb6de;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.cbv-kp b{display:block;font:700 16px/1.25 var(--f-disp);color:#cfe0ff;font-variant-numeric:tabular-nums;transition:color .5s}
.cbv-kp em{display:inline-block;font:700 9px var(--f-mono);font-style:normal;padding:1px 6px;border-radius:99px;background:rgba(127,176,255,.16);color:#9fb6de;white-space:nowrap;transition:background .4s,color .4s}
.cbv-kp .bad b{color:#ff9a8f}.cbv-kp .bad em{background:rgba(192,57,43,.3);color:#ffb3a8}
.cbv-kp .good b{color:#8ff0b2}.cbv-kp .good em{background:#16a34a;color:#fff}
.cbv-lg{display:flex;align-items:center;gap:8px;height:32px;margin:10px 12px 8px;padding:0 10px;border-radius:9px;background:#030a1c;border:1px solid rgba(127,176,255,.16);overflow:hidden}
.cbv-lg .pr{font:700 11px var(--f-mono);color:#7fb0ff;flex-shrink:0;transition:color .3s}
.cbv.a2 .cbv-lg .pr{color:#ff5a4a}
.cbv.a6 .cbv-lg .pr{color:#5FE08D}
.cbv-lg code{font:500 10.5px var(--f-mono);color:#dbe7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.cbv-tk{margin:0 12px 12px;height:22px;overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.cbv-tk .tk-m{display:flex;gap:22px;width:max-content;animation:cbTk 40s linear infinite}
.cbv-tk.paused .tk-m{animation-play-state:paused}
.cbv-tk span{display:inline-flex;align-items:center;gap:6px;font:500 10px/22px var(--f-mono);color:#9fb6de;white-space:nowrap}
.cbv-tk i{width:6px;height:6px;border-radius:50%;background:#5FE08D}
.cbv-tk i.r{background:#ff5a4a}.cbv-tk i.m{background:#FF8C1A}.cbv-tk i.b{background:#7fb0ff}
@keyframes cbTk{to{transform:translateX(calc(-50% - 11px))}}
@media(max-width:560px){
  .cbv-h{padding:10px 12px}.cbv-h b{font-size:12.5px}.cbv-live{display:none}
  .cbv-rail{padding:9px 8px 11px;gap:3px}.cbv-rail>span{font-size:7px;padding:4px 0}
  .cbv-sc{height:270px}
  .cbv-cd{width:186px;padding:8px}.cbv .dh b{font-size:10.5px}.cbv-cd li span{font-size:8.5px}.cbv-cd li b{font-size:8px}
  .cbv-cd .bw{grid-template-columns:74px 1fr;font-size:8px}
  .cbv-kp b{font-size:13.5px}.cbv-kp span{font-size:7.5px;letter-spacing:.02em}.cbv-kp em{font-size:7.5px;padding:1px 4px}
  .cbv-end b{font-size:12.5px}.cbv-end small{display:none}
}

/* ===================== OVERVIEW FLOW ===================== */
.cb-flow{margin-top:26px;display:grid;grid-template-columns:minmax(0,1fr) 56px minmax(0,1fr) 56px minmax(0,1fr);align-items:stretch}
.fl-s{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:18px;padding:18px;box-shadow:var(--sh-s);opacity:0;transform:translateY(16px);transition:opacity .6s var(--ease-o),transform .7s cubic-bezier(.3,1.4,.5,1),box-shadow .3s,border-color .3s;transition-delay:calc(var(--k)*180ms)}
.cb-flow.in .fl-s{opacity:1;transform:none}
.fl-s:hover{border-color:#1565D8;box-shadow:var(--sh)}
.fl-s .fi{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;background:var(--chip);color:#1565D8;margin-bottom:10px}
.fl-s .fi.o{background:#fff3e0;color:#F57C00}.fl-s .fi.g{background:#e4f7ec;color:#16a34a}
html[data-theme="dark"] .fl-s .fi{color:#7fb0ff}html[data-theme="dark"] .fl-s .fi.o{background:rgba(255,140,26,.14);color:#FFB15C}html[data-theme="dark"] .fl-s .fi.g{background:rgba(22,163,74,.16);color:#5FE08D}
.fl-s .fi svg{width:20px;height:20px}
.fl-s small{display:block;font:600 10.5px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:#F57C00}
html[data-theme="dark"] .fl-s small{color:#FFB15C}
.fl-s b{display:block;font:800 19px var(--f-disp);color:var(--ink);margin:2px 0 6px}
.fl-s p{font-size:13.5px;line-height:1.6;color:var(--text);margin-bottom:12px}
.fl-c{display:flex;flex-wrap:wrap;gap:6px}
.fl-c span{display:inline-flex;align-items:center;gap:5px;font:600 11px var(--f-mono);color:#1565D8;background:var(--chip);border-radius:99px;padding:4px 9px}
html[data-theme="dark"] .fl-c span{color:#7fb0ff}
.fl-c svg{width:12px;height:12px}
.fl-a{position:relative;align-self:center;height:2px;margin:0 8px;background:var(--line-2);border-radius:2px}
.fl-a:after{content:"";position:absolute;right:-2px;top:-4px;border:5px solid transparent;border-left:7px solid var(--line-2);border-right:0}
.fl-a i{position:absolute;left:0;top:-3px;width:8px;height:8px;border-radius:50%;background:#FF8C1A;box-shadow:0 0 10px 3px rgba(255,140,26,.5);opacity:0}
.cb-flow.run .fl-a i{animation:cbFlA 1.8s var(--ease) infinite}
.cb-flow.run .fl-a:nth-of-type(4) i{animation-delay:.9s}
@keyframes cbFlA{0%{left:0;opacity:0}15%{opacity:1}85%{opacity:1}100%{left:calc(100% - 8px);opacity:0}}
@media(max-width:900px){.cb-flow{grid-template-columns:1fr;gap:0}.fl-a{width:2px;height:34px;margin:0 auto}.fl-a:after{right:-4px;top:auto;bottom:-2px;border:5px solid transparent;border-top:7px solid var(--line-2);border-bottom:0}.fl-a i{left:-3px!important;top:0}
  .cb-flow.run .fl-a i{animation-name:cbFlAv}}
@keyframes cbFlAv{0%{top:0;opacity:0}15%{opacity:1}85%{opacity:1}100%{top:calc(100% - 8px);opacity:0}}
.cb-for{display:flex;flex-wrap:wrap;align-items:center;gap:8px;margin-top:20px}
.cb-for .k{font:600 11px var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--muted);margin-right:4px}
.cb-for span:not(.k){display:inline-flex;align-items:center;gap:7px;font:600 13px var(--f-disp);color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:99px;padding:7px 13px 7px 9px;transition:transform .3s var(--ease-o),border-color .3s}
.cb-for span:not(.k):hover{transform:translateY(-3px);border-color:#1565D8}
.cb-for svg{width:15px;height:15px;color:#1565D8}
html[data-theme="dark"] .cb-for svg{color:#7fb0ff}

/* ===================== FEATURES ===================== */
.cb-ft{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
@media(max-width:1000px){.cb-ft{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:480px){.cb-ft{grid-template-columns:1fr}}
.cb-ft .ft{position:relative;display:flex;flex-direction:column;gap:4px;min-height:186px;padding:16px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s);color:inherit;overflow:hidden;transition:box-shadow .35s,border-color .3s;outline:0}
.cb-ft .ft:hover,.cb-ft .ft:focus-visible{border-color:#1565D8;box-shadow:var(--sh)}
.cb-ft .fi{width:46px;height:46px;border-radius:13px;display:grid;place-items:center;background:var(--chip);color:#1565D8;margin-bottom:8px}
.cb-ft .fi svg{width:26px;height:26px;overflow:visible}
.cb-ft .fi.o{background:#fff3e0;color:#F57C00}.cb-ft .fi.g{background:#e4f7ec;color:#16a34a}.cb-ft .fi.n{background:#eaeff9;color:#0A2A57}
html[data-theme="dark"] .cb-ft .fi{background:var(--chip);color:#7fb0ff}html[data-theme="dark"] .cb-ft .fi.o{color:#FFB15C}html[data-theme="dark"] .cb-ft .fi.g{color:#5FE08D}html[data-theme="dark"] .cb-ft .fi.n{color:#b9c9e2}
.cb-ft .ft b{font:700 14.5px/1.3 var(--f-disp);color:var(--ink)}
.cb-ft .ft small{font-size:12.5px;line-height:1.5;color:var(--muted)}
.cb-ft .hn{margin-top:auto;padding-top:8px;text-decoration:none;font:700 12px var(--f-disp);color:#1565D8;transition:opacity .3s,transform .3s var(--ease-o)}
html[data-theme="dark"] .cb-ft .hn{color:#7fb0ff}
.cb-ft .ft:hover .hn,.cb-ft .ft:focus-within .hn,.cb-ft .ft.tap .hn{opacity:0;transform:translateY(-6px)}
.cb-ft .rvl{position:absolute;left:12px;right:12px;bottom:12px;z-index:4;display:flex;gap:7px;align-items:flex-start;box-shadow:var(--sh);background:var(--surface);padding:9px 10px;border-radius:11px;background:var(--surface-2);border:1px dashed var(--line-2);font-size:12px;line-height:1.45;color:var(--text);opacity:0;transform:translateY(14px);transition:opacity .4s var(--ease-o),transform .5s cubic-bezier(.3,1.4,.5,1)}
.cb-ft .rvl svg{width:13px;height:13px;flex-shrink:0;margin-top:2px;color:#1565D8}
html[data-theme="dark"] .cb-ft .rvl svg{color:#7fb0ff}
.cb-ft .ft:hover .rvl,.cb-ft .ft:focus-within .rvl,.cb-ft .ft.tap .rvl{opacity:1;transform:none}
@media(hover:none){.cb-ft .rvl{position:static;margin-top:auto;opacity:1;transform:none;box-shadow:none}.cb-ft .hn{display:none}}
/* icon micro-animations (run while card in view; stronger on hover) */
.cb-ft .fi .a1,.cb-ft .fi .a2,.cb-ft .fi .a3{transform-box:fill-box;transform-origin:center}
.cb-ft.run .f-wifi .fi .a1{animation:cbWv 2.4s ease-in-out infinite}
.cb-ft.run .f-wifi .fi .a2{animation:cbWv 2.4s ease-in-out .25s infinite}
.cb-ft.run .f-wifi .fi .a3{animation:cbWv 2.4s ease-in-out .5s infinite}
@keyframes cbWv{0%,60%,100%{opacity:1}30%{opacity:.2}}
.cb-ft.run .f-fw .fi .a1{animation:cbBrick 3s var(--ease-o) infinite}
@keyframes cbBrick{0%,70%,100%{transform:none}80%{transform:translateX(-2px)}90%{transform:translateX(2px)}}
.cb-ft .f-fw .fi .a2{transform-origin:right center;transform:scaleX(0)}
.cb-ft.run .f-fw .fi .a2{animation:cbDart 3s var(--ease-o) infinite}
@keyframes cbDart{0%{transform:translateX(-10px);opacity:0}30%{opacity:1}55%{transform:translateX(0);opacity:1}62%,100%{opacity:0}}
.cb-ft.run .f-gw .fi .a1{animation:cbSpin 9s linear infinite}
@keyframes cbSpin{to{transform:rotate(360deg)}}
.cb-ft.run .f-gw .fi .a2{animation:cbPing 2.4s var(--ease-o) infinite}
@keyframes cbPing{0%{opacity:.9;transform:scale(.6)}100%{opacity:0;transform:scale(1.6)}}
.cb-ft.run .f-ct .fi .a1{animation:cbSl 3.2s ease-in-out infinite}
.cb-ft.run .f-ct .fi .a2{animation:cbSl 3.2s ease-in-out .5s infinite reverse}
.cb-ft.run .f-ct .fi .a3{animation:cbSl 3.2s ease-in-out 1s infinite}
@keyframes cbSl{0%,100%{transform:translateX(-4px)}50%{transform:translateX(4px)}}
.cb-ft .f-in .fi .a1,.cb-ft .f-in .fi .a2,.cb-ft .f-in .fi .a3{transform-origin:bottom}
.cb-ft.run .f-in .fi .a1{animation:cbBar 2.6s cubic-bezier(.3,1.4,.5,1) infinite}
.cb-ft.run .f-in .fi .a2{animation:cbBar 2.6s cubic-bezier(.3,1.4,.5,1) .15s infinite}
.cb-ft.run .f-in .fi .a3{animation:cbBar 2.6s cubic-bezier(.3,1.4,.5,1) .3s infinite}
@keyframes cbBar{0%{transform:scaleY(.2)}40%,100%{transform:scaleY(1)}}
.cb-ft.run .f-dp .fi .a1{animation:cbSpin 6s linear infinite}
.cb-ft.run .f-zt .fi .a1{animation:cbZap 2.2s var(--ease-o) infinite}
@keyframes cbZap{0%,100%{opacity:.35;transform:scale(.9)}20%{opacity:1;transform:scale(1.15)}40%{opacity:1;transform:scale(1)}}
.cb-ft.run .f-zt .fi .a2{animation:cbPing 2.2s var(--ease-o) infinite}
.cb-ft.run .f-nc .fi .a1{animation:cbScan 2.4s ease-in-out infinite}
@keyframes cbScan{0%,100%{transform:translateY(-7px)}50%{transform:translateY(7px)}}
.cb-ft .ft:hover .fi svg{animation-duration:.9s}
.cb-ft .ft .fi{transition:transform .5s cubic-bezier(.3,1.6,.5,1)}
.cb-ft .ft:hover .fi{transform:rotate(-6deg) scale(1.08)}

/* key benefits */
.cb-kb{margin-top:34px}
.kb-h{margin-bottom:12px}
.kb-g{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
@media(max-width:1000px){.kb-g{grid-template-columns:repeat(2,minmax(0,1fr))}}
@media(max-width:520px){.kb-g{grid-template-columns:1fr}}
.kb{display:flex;flex-direction:column;padding:18px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s);transition:box-shadow .3s,border-color .3s}
.kb:hover{border-color:#1565D8;box-shadow:var(--sh)}
.kb h3{font:800 16.5px var(--f-disp);color:var(--ink);margin:12px 0 5px}
.kb p{font-size:13px;line-height:1.55;color:var(--text);margin-bottom:12px}
.kt{display:flex;flex-wrap:wrap;gap:5px;margin-top:auto}
.kt span{display:inline-flex;align-items:center;gap:5px;font:600 10.5px var(--f-mono);color:#1565D8;background:var(--chip);border-radius:99px;padding:3px 8px}
html[data-theme="dark"] .kt span{color:#7fb0ff}
.kt svg{width:11px;height:11px}
.kv{position:relative;height:104px;border-radius:14px;background:#041E42;display:grid;place-items:center;overflow:hidden}
html[data-theme="dark"] .kv{background:#050d22}
.kv svg{height:92px;width:auto;overflow:visible}
.kv>b{position:absolute;left:50%;top:50%;transform:translate(-50%,-62%);font:800 26px/1 var(--f-disp);color:#fff;font-variant-numeric:tabular-nums}
.kv>small{position:absolute;left:0;right:0;bottom:8px;text-align:center;font:600 9px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:#9fb6de}
.k-ml circle{fill:none;stroke-width:5;stroke-linecap:round;stroke-dasharray:1 1;stroke-dashoffset:1;transform:rotate(-90deg);transform-origin:60px 60px;transition:stroke-dashoffset 1.3s cubic-bezier(.3,1,.4,1)}
.k-ml .r1{stroke:#5FE08D}.k-ml .r2{stroke:#7fb0ff;transition-delay:.25s}.k-ml .r3{stroke:#FF8C1A;transition-delay:.5s}
.k-ml.in circle{stroke-dashoffset:.12}
.k-ml.in.run .r3{animation:cbRot 14s linear infinite}
.k-ml.in.run .r2{animation:cbRot 10s linear infinite reverse}
@keyframes cbRot{from{transform:rotate(-90deg)}to{transform:rotate(270deg)}}
.k-ml .kv>b{transform:translate(-50%,-50%)}.k-ml .kv>small{bottom:6px}
.gauge svg{height:74px;margin-top:-8px}
.gauge path{fill:none;stroke-width:9;stroke-linecap:round}
.gauge .ga{stroke:rgba(255,255,255,.08)}
.gauge .gr{stroke:#c0392b}.gauge .go{stroke:#FF8C1A}.gauge .gg{stroke:#16a34a}
.gauge .nd{transform-origin:60px 70px;transform:rotate(-70deg);transition:transform 1.6s cubic-bezier(.3,1.6,.5,1) .3s}
.gauge .nd path{stroke:#fff;stroke-width:3}
.gauge .nd circle{fill:#fff}
.k-rr.in .gauge .nd{transform:rotate(58deg)}
.k-rr.in.run .gauge .nd{animation:cbNd 4s ease-in-out 2s infinite}
@keyframes cbNd{0%,100%{transform:rotate(58deg)}50%{transform:rotate(50deg)}}
.brw{display:flex;flex-direction:column;align-items:stretch;justify-content:center;padding:6px 12px;place-items:initial}
.brw .bh{display:flex;gap:4px;margin-bottom:4px}
.brw .bh i{width:6px;height:6px;border-radius:50%;background:#2b4d8a}
.brw ul{list-style:none;display:flex;flex-direction:column;gap:3px}
.brw li{position:relative;font:500 9.5px/1.45 var(--f-mono);color:#cfe0ff;padding:1px 8px;border-radius:6px;background:rgba(127,176,255,.08);opacity:0;transform:translateX(-8px);transition:opacity .4s,transform .5s var(--ease-o)}
.brw li:before{content:"\u2713";display:inline-block;width:12px;color:#5FE08D;font-weight:700}
.brw li.no:before{content:"\u2715";color:#ff5a4a}
.brw li.no:after{content:"";position:absolute;left:22px;right:8px;top:50%;height:1.5px;background:#ff5a4a;transform:scaleX(0);transform-origin:left;transition:transform .5s var(--ease-o)}
.k-sb.in .brw li{opacity:1;transform:none}
.k-sb.in .brw li:nth-child(2){transition-delay:.25s}.k-sb.in .brw li:nth-child(3){transition-delay:.5s}.k-sb.in .brw li:nth-child(4){transition-delay:.75s}
.k-sb.in .brw li.no:after{transform:scaleX(1);transition-delay:1.1s}
.k-sb.in .brw li.no{color:#ff9a8f}
.kv.sc svg{height:84px}
.kv.sc .ln{fill:none;stroke:#7fb0ff;stroke-width:1.5;stroke-dasharray:1 1;stroke-dashoffset:1;transition:stroke-dashoffset 1.2s var(--ease-o) .2s;opacity:.6}
.kv.sc .h{fill:#1565D8;stroke:#7fb0ff;stroke-width:2}
.kv.sc .s{fill:#0C3E8F;stroke:#7fb0ff;stroke-width:1.5;transform-box:fill-box;transform-origin:center;transform:scale(0);transition:transform .6s cubic-bezier(.3,1.7,.5,1)}
.k-sc.in .kv.sc .ln{stroke-dashoffset:0}
.k-sc.in .kv.sc .s{transform:none}
.k-sc.in .kv.sc .s2{transition-delay:.25s}.k-sc.in .kv.sc .s3{transition-delay:.5s}.k-sc.in .kv.sc .s4{transition-delay:.75s}
.k-sc.in.run .kv.sc .s{animation:cbSiteP 3s ease-in-out 1.4s infinite}
.k-sc.in.run .kv.sc .s2{animation-delay:2.1s}.k-sc.in.run .kv.sc .s3{animation-delay:2.8s}.k-sc.in.run .kv.sc .s4{animation-delay:3.5s}
@keyframes cbSiteP{0%,100%{fill:#0C3E8F}20%{fill:#16a34a}}
.kv.sc>b{transform:translate(-50%,-50%);font-size:13px!important;top:50%!important}
.kv.sc>small{bottom:4px!important}

/* ===================== HOW (sticky) ===================== */
.cb-jr{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.18fr);gap:34px;align-items:start}
.jr-st{list-style:none;display:flex;flex-direction:column;padding:8vh 0 14vh}
.jr-st li{position:relative;min-height:54vh;display:flex;flex-direction:column;justify-content:center;padding:18px 0 18px 60px;opacity:.36;transition:opacity .45s}
.jr-st li.on{opacity:1}
.jr-st li .sn{position:absolute;left:0;top:50%;margin-top:-22px;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;font:700 14px var(--f-mono);background:var(--surface-2);border:1.5px solid var(--line-2);color:var(--muted);transition:background .4s,color .4s,border-color .4s,transform .5s cubic-bezier(.3,1.6,.5,1)}
.jr-st li.on .sn{background:#1565D8;border-color:#1565D8;color:#fff;transform:scale(1.08)}
.jr-st li.hot .sn{box-shadow:0 0 0 6px rgba(21,101,216,.16)}
.jr-st small{font:600 11px var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:#F57C00;margin-bottom:4px}
html[data-theme="dark"] .jr-st small{color:#FFB15C}
.jr-st b{font:800 22px var(--f-disp);color:var(--ink);margin-bottom:6px;letter-spacing:-.01em}
.jr-st p{font-size:15px;line-height:1.7;color:var(--text);margin-bottom:12px}
.jr-st em{display:inline-flex;align-self:flex-start;align-items:center;gap:6px;font:600 11.5px var(--f-mono);font-style:normal;color:#1565D8;background:var(--chip);border-radius:99px;padding:5px 11px}
html[data-theme="dark"] .jr-st em{color:#7fb0ff}
.jr-st em svg{width:13px;height:13px}
.jr-mc{display:none}
.jr-v{position:sticky;top:96px;display:grid;grid-template-columns:116px minmax(0,1fr);gap:14px}
.jr-rail{position:relative;height:min(520px,calc(100vh - 130px));display:flex;flex-direction:column;justify-content:space-between;padding:26px 0}
.jr-rail .tk{position:absolute;left:9px;top:32px;bottom:32px;width:3px;border-radius:3px;background:var(--line)}
.jr-rail .tk i{position:absolute;inset:0;border-radius:3px;background:#1565D8;transform-origin:top;transform:scaleY(0)}
.jr-rail b{position:relative;display:flex;align-items:center;gap:10px;font:600 10.5px var(--f-mono);letter-spacing:.05em;text-transform:uppercase;color:var(--muted);transition:color .35s}
.jr-rail b:before{content:"";width:21px;height:21px;border-radius:50%;background:var(--surface);border:2px solid var(--line-2);box-sizing:border-box;flex-shrink:0;transition:background .35s,border-color .35s,transform .5s cubic-bezier(.3,1.6,.5,1),box-shadow .35s}
.jr-rail b.on{color:var(--ink)}
.jr-rail b.on:before{background:#1565D8;border-color:#1565D8}
.jr-rail b.hot{color:#1565D8}
html[data-theme="dark"] .jr-rail b.hot{color:#7fb0ff}
.jr-rail b.hot:before{transform:scale(1.25);box-shadow:0 0 0 5px rgba(21,101,216,.18)}
.jr-in{position:relative;height:min(520px,calc(100vh - 130px));border-radius:22px;background:#041E42;border:1px solid rgba(127,176,255,.2);box-shadow:var(--sh-l);overflow:hidden}
html[data-theme="dark"] .jr-in{background:#050d22}
.jr-in:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(127,176,255,.16) 1px,transparent 1.2px);background-size:18px 18px;opacity:.55}
.jr-in canvas{position:absolute;inset:0;width:100%;height:100%}
.jr-hd{position:absolute;left:18px;right:18px;top:16px;z-index:2;display:flex;align-items:center;gap:10px}
.jr-hd .st{font:600 10.5px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:#9fb6de;background:rgba(127,176,255,.1);border:1px solid rgba(127,176,255,.2);border-radius:99px;padding:4px 10px;white-space:nowrap}
.jr-hd b{font:800 18px var(--f-disp);color:#fff;letter-spacing:-.01em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.jr-hd b.sw,.jr-cap.sw{animation:cbSwap .5s var(--ease-o)}
.jr-hd em{margin-left:auto;font:500 10px var(--f-mono);font-style:normal;color:#7f93ba;white-space:nowrap}
.jr-cap{position:absolute;left:16px;right:16px;bottom:16px;z-index:2;display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:13px;background:rgba(7,20,48,.88);border:1px solid rgba(127,176,255,.25)}
.jr-cap i{width:32px;height:32px;border-radius:9px;background:#FF8C1A;color:#fff;display:grid;place-items:center;flex-shrink:0}
.jr-cap i svg{width:16px;height:16px}
.jr-cap b{display:block;font:700 13px var(--f-disp);color:#fff}
.jr-cap small{display:block;font:500 10.5px var(--f-mono);color:#9fb6de}
@media(max-width:900px){
  .cb-jr{grid-template-columns:1fr}
  .jr-v{display:none}
  .jr-st{padding:0;gap:16px}
  .jr-st li{min-height:0;opacity:1;padding:18px;border:1px solid var(--line);border-radius:18px;background:var(--surface);box-shadow:var(--sh-s)}
  .jr-st li .sn{position:static;margin:0 0 10px;width:38px;height:38px}
  .jr-st li .sn,.jr-st li.on .sn{transform:none;background:#1565D8;border-color:#1565D8;color:#fff;box-shadow:none!important}
  .jr-mc{display:block;width:100%;height:200px;margin-top:14px;border-radius:14px;background:#041E42}
  html[data-theme="dark"] .jr-mc{background:#050d22}
}
.cb-six{display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px;margin-top:26px}
@media(max-width:1100px){.cb-six{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:560px){.cb-six{grid-template-columns:repeat(2,minmax(0,1fr))}}
.cb-six>div{display:flex;flex-direction:column;gap:4px;padding:14px;border-radius:16px;background:var(--surface);border:1px solid var(--line);opacity:0;transform:translateY(14px);transition:opacity .5s var(--ease-o),transform .7s cubic-bezier(.3,1.4,.5,1),border-color .3s;transition-delay:calc(var(--k)*90ms)}
.cb-six.in>div{opacity:1;transform:none}
.cb-six>div:hover{border-color:#1565D8}
.cb-six i{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:var(--chip);color:#1565D8;margin-bottom:4px;transition:transform .45s cubic-bezier(.3,1.6,.5,1)}
html[data-theme="dark"] .cb-six i{color:#7fb0ff}
.cb-six>div:hover i{transform:translateY(-3px) rotate(-8deg)}
.cb-six i svg{width:17px;height:17px}
.cb-six b{font:700 13.5px var(--f-disp);color:var(--ink)}
.cb-six span{font-size:12px;line-height:1.45;color:var(--muted)}

/* ===================== HARDWARE ===================== */
.cb-hw{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:22px;align-items:start}
@media(max-width:1000px){.cb-hw{grid-template-columns:1fr}}
.dx{background:#041E42;border:1px solid rgba(127,176,255,.2);border-radius:22px;padding:16px;color:#fff;box-shadow:var(--sh-l);min-width:0}
html[data-theme="dark"] .dx{background:#050d22}
.dx-t{position:relative;display:inline-flex;gap:2px;padding:4px;border-radius:99px;background:rgba(127,176,255,.1);border:1px solid rgba(127,176,255,.2)}
.dx-t button{position:relative;z-index:1;border:0;background:none;color:#9fb6de;font:600 12px var(--f-disp);padding:7px 14px;border-radius:99px;cursor:pointer;transition:color .3s}
.dx-t button.on{color:#fff}
.dx-t .ul{position:absolute;left:0;top:4px;bottom:4px;border-radius:99px;background:#1565D8;transition:transform .5s cubic-bezier(.3,1.4,.5,1),width .5s cubic-bezier(.3,1.4,.5,1)}
.dx-st{position:relative;height:300px;margin-top:8px;perspective:1100px;touch-action:pan-y;cursor:grab;user-select:none}
.dx-st.drag{cursor:grabbing}
.dx-st:before{content:"";position:absolute;left:10%;right:10%;top:12%;bottom:18%;border-radius:50%;background:radial-gradient(closest-side,rgba(40,100,230,.35),transparent);pointer-events:none}
.dx-card{position:absolute;left:4%;right:4%;top:6%;bottom:16%;transform-style:preserve-3d;will-change:transform}
.dx-f{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;backface-visibility:hidden;-webkit-backface-visibility:hidden}
.dx-f.bk1{transform:rotateY(180deg)}
.dx-f img{display:block;width:100%;height:auto;max-height:100%;object-fit:contain;pointer-events:none;filter:drop-shadow(0 22px 26px rgba(0,0,0,.55))}
.dx-f .ib2{position:relative;width:100%}
.dx .hs{position:absolute;left:var(--x);top:var(--y);width:24px;height:24px;margin:-12px 0 0 -12px;border-radius:50%;border:2px solid #fff;background:#FF8C1A;color:#fff;display:grid;place-items:center;cursor:pointer;box-shadow:0 0 0 0 rgba(255,140,26,.6);animation:cbHs 2.2s var(--ease-o) infinite;transition:transform .3s cubic-bezier(.3,1.6,.5,1),background .3s;z-index:2}
.dx .hs svg{width:12px;height:12px;transition:transform .35s}
.dx .hs:hover{transform:scale(1.18)}
.dx .hs.on{background:#1565D8;animation:none;box-shadow:0 0 0 5px rgba(21,101,216,.35)}
.dx .hs.on svg{transform:rotate(45deg)}
.dx .hs .sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
@keyframes cbHs{0%{box-shadow:0 0 0 0 rgba(255,140,26,.65)}70%{box-shadow:0 0 0 12px rgba(255,140,26,0)}100%{box-shadow:0 0 0 0 rgba(255,140,26,0)}}
.dx-sh{position:absolute;left:18%;right:18%;bottom:8%;height:18px;border-radius:50%;background:rgba(0,0,0,.45);transform:scaleX(var(--sx,1));transition:transform .2s}
.dx-hint{position:absolute;right:6px;bottom:0;display:inline-flex;align-items:center;gap:5px;font:600 10px var(--f-mono);color:#7f93ba;transition:opacity .4s}
.dx-hint svg{width:12px;height:12px}
.dx-hint.gone{opacity:0}
.dx-pop{display:flex;gap:11px;align-items:center;padding:11px 12px;border-radius:14px;background:rgba(127,176,255,.08);border:1px solid rgba(127,176,255,.25);min-height:64px}
.dx-pop i{width:36px;height:36px;border-radius:10px;background:#FF8C1A;color:#fff;display:grid;place-items:center;flex-shrink:0}
.dx-pop i svg{width:18px;height:18px}
.dx-pop span{min-width:0}
.dx-pop small{display:block;font:600 10px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:#FFB15C}
.dx-pop b{display:block;font:700 14px var(--f-disp);color:#fff}
.dx-pop em{display:block;font:500 11.5px/1.45 var(--f-body);font-style:normal;color:#b9c9e2}
.dx-pop.sw>*{animation:cbSwap .45s var(--ease-o)}
.dx-bd{display:flex;flex-wrap:wrap;gap:6px;margin-top:12px}
.dx-bd span{display:inline-flex;align-items:center;gap:6px;font:600 10.5px var(--f-mono);color:#cfe0ff;background:rgba(127,176,255,.1);border:1px solid rgba(127,176,255,.2);border-radius:99px;padding:5px 10px}
.dx-bd svg{width:13px;height:13px;color:#7fb0ff}
.sp-w{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:18px;box-shadow:var(--sh-s);min-width:0}
.sp-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}
.sp-h em{font:600 11px var(--f-mono);font-style:normal;color:var(--muted)}
.sp-t{display:flex;flex-direction:column}
.sp-t>div{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.3fr);gap:10px;padding:8px 8px;border-radius:10px;border-bottom:1px solid var(--line);opacity:0;transform:translateX(16px);transition:opacity .45s var(--ease-o),transform .6s cubic-bezier(.3,1.4,.5,1),background .3s;transition-delay:calc(var(--k)*55ms)}
.sp-w.in .sp-t>div{opacity:1;transform:none}
.sp-t>div:last-child{border-bottom:0}
.sp-t>div.hl{background:var(--chip)}
.sp-t dt{display:flex;align-items:center;gap:8px;font:600 12.5px var(--f-disp);color:var(--ink)}
.sp-t dt svg{width:15px;height:15px;color:#1565D8;flex-shrink:0}
html[data-theme="dark"] .sp-t dt svg{color:#7fb0ff}
.sp-t dd{font-size:12.5px;line-height:1.5;color:var(--text)}
.sp-t .tb{display:block;height:6px;border-radius:99px;background:var(--line);overflow:hidden;margin-top:5px}
.sp-t .tb i{display:block;height:100%;width:100%;border-radius:99px;background:#1565D8;transform-origin:left;transform:scaleX(0);transition:transform 1.4s cubic-bezier(.3,1.2,.5,1) .6s}
.sp-t .tp:nth-child(7) .tb i{background:#FF8C1A}.sp-t .tp:nth-child(8) .tb i{background:#16a34a}
.sp-w.in .sp-t .tb i{transform:scaleX(var(--w))}
.sp-n{font:500 11px var(--f-mono);color:var(--muted);margin-top:10px}

/* ===================== SIMULATOR ===================== */
.cb-sim{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.35fr);border:1px solid var(--line);border-radius:22px;overflow:hidden;background:var(--surface);box-shadow:var(--sh-s)}
@media(max-width:980px){.cb-sim{grid-template-columns:1fr}}
.sm-in{padding:20px;display:flex;flex-direction:column;gap:12px}
.sm-k{font:600 11px var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:var(--muted)}
.sm-ev{display:grid;grid-template-columns:1fr;gap:7px}
@media(max-width:980px) and (min-width:560px){.sm-ev{grid-template-columns:1fr 1fr}}
.sm-ev button{display:flex;align-items:center;gap:11px;text-align:left;border:1.5px solid var(--line-2);background:var(--surface);border-radius:13px;padding:9px 11px;cursor:pointer;color:var(--text);transition:border-color .2s,background .2s,transform .3s cubic-bezier(.3,1.6,.5,1),box-shadow .3s}
.sm-ev button:hover{transform:translateX(3px);border-color:var(--line-2)}
.sm-ev button i{width:34px;height:34px;border-radius:10px;display:grid;place-items:center;background:var(--chip);color:#1565D8;flex-shrink:0;transition:transform .45s cubic-bezier(.3,1.6,.5,1),background .3s,color .3s}
html[data-theme="dark"] .sm-ev button i{color:#7fb0ff}
.sm-ev button i svg{width:17px;height:17px}
.sm-ev button b{display:block;font:700 13.5px var(--f-disp);color:var(--ink)}
.sm-ev button small{display:block;font-size:11.5px;color:var(--muted)}
.sm-ev button.on{border-color:#1565D8;background:var(--chip);box-shadow:0 0 0 3px rgba(21,101,216,.1)}
.sm-ev button.on i{background:#1565D8;color:#fff;transform:scale(1.08) rotate(-6deg)}
#smGo.pl{animation:cbBump .4s var(--ease-o)}
.sm-out{background:#041E42;color:#fff;padding:20px 22px;display:flex;flex-direction:column;gap:14px;min-width:0}
html[data-theme="dark"] .sm-out{background:#050916}
.sm-pipe{position:relative;display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:6px;padding:4px 0 2px}
.sm-pipe .pn{position:relative;z-index:1;display:flex;flex-direction:column;align-items:center;text-align:center;gap:5px;min-width:0}
.sm-pipe .pi{width:48px;height:48px;border-radius:14px;display:grid;place-items:center;background:#0D1F47;border:1.5px solid rgba(127,176,255,.3);color:#cfe0ff;transition:background .35s,border-color .35s,transform .45s cubic-bezier(.3,1.6,.5,1),box-shadow .35s}
.sm-pipe .pi svg{width:22px;height:22px}
.sm-pipe .x2 .pi{width:56px;height:56px;margin-top:-4px;background:#1565D8;border-color:#7fb0ff}
.sm-pipe .pn.hit .pi{transform:scale(1.12);border-color:#7fb0ff;box-shadow:0 0 0 5px rgba(127,176,255,.18)}
.sm-pipe .pn.bad .pi{background:#c0392b;border-color:#ff8a80;box-shadow:0 0 0 6px rgba(192,57,43,.25)}
.sm-pipe .pn.ok .pi{background:#16a34a;border-color:#5FE08D}
.sm-pipe .pn.dim{opacity:.35}
.sm-pipe b{font:700 12px var(--f-disp);color:#fff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.sm-pipe small{font:500 10px var(--f-mono);color:#9fb6de;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}
.sm-pipe .ln{position:absolute;left:12.5%;right:12.5%;top:27px;height:2px;background:rgba(127,176,255,.18);border-radius:2px;overflow:hidden}
.sm-pipe .ln i{display:block;height:100%;width:100%;background:#7fb0ff;transform-origin:left;transform:scaleX(0)}
.sm-pipe .ln i.bad{background:#ff5a4a}
.sm-pipe .pk{position:absolute;left:12.5%;top:22px;width:12px;height:12px;margin-left:-6px;border-radius:50%;background:#fff;box-shadow:0 0 12px 4px rgba(127,176,255,.8);opacity:0;z-index:2}
.sm-pipe .pk.bad{background:#ffb3a8;box-shadow:0 0 14px 5px rgba(255,90,74,.85)}
.sm-pipe .pk.boom{animation:cbBoom .7s var(--ease-o) forwards}
@keyframes cbBoom{0%{transform:scale(1);opacity:1}100%{transform:scale(3.4);opacity:0}}
.sm-md{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:6px}
.sm-md span{display:flex;flex-direction:column;align-items:center;gap:4px;padding:8px 4px;border-radius:11px;background:#0B1730;border:1px solid #23375e;font:600 9.5px var(--f-mono);color:#7f93ba;text-align:center;transition:background .3s,border-color .3s,color .3s,transform .4s cubic-bezier(.3,1.6,.5,1)}
.sm-md span svg{width:16px;height:16px}
.sm-md b{font-weight:600;line-height:1.2}
.sm-md span.chk{color:#fff;border-color:#7fb0ff;background:#0C3E8F;transform:translateY(-3px)}
.sm-md span.pass{color:#8ff0b2;border-color:rgba(95,224,141,.5);background:rgba(22,163,74,.14)}
.sm-md span.stop{color:#fff;border-color:#ff8a80;background:#c0392b;transform:translateY(-3px) scale(1.05);animation:cbShk .4s}
@keyframes cbShk{25%{margin-left:-3px}75%{margin-left:3px}}
@media(max-width:560px){.sm-md{grid-template-columns:repeat(3,minmax(0,1fr))}.sm-pipe .pi{width:40px;height:40px}.sm-pipe .x2 .pi{width:46px;height:46px}.sm-pipe .ln{top:23px}.sm-pipe .pk{top:18px}}
.sm-vd{border-radius:14px;padding:12px 14px;background:rgba(127,176,255,.08);border:1px solid rgba(127,176,255,.22);transition:background .35s,border-color .35s}
.sm-vd.ok{background:rgba(22,163,74,.14);border-color:rgba(95,224,141,.5)}
.sm-vd.bad{background:rgba(192,57,43,.16);border-color:rgba(255,138,128,.55)}
.sm-vd .vt{display:flex;align-items:center;gap:9px;margin-bottom:8px}
.sm-vd .vt i{width:30px;height:30px;border-radius:9px;background:#1565D8;display:grid;place-items:center;flex-shrink:0}
.sm-vd.ok .vt i{background:#16a34a}.sm-vd.bad .vt i{background:#c0392b}
.sm-vd .vt i svg{width:16px;height:16px}
.sm-vd .vt b{font:800 17px var(--f-disp);color:#fff}
.sm-vd.pop .vt{animation:cbSwap .45s var(--ease-o)}
.sm-vd .vg{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.3fr);gap:10px}
@media(max-width:560px){.sm-vd .vg{grid-template-columns:1fr}}
.sm-vd .vg small{display:block;font:600 9.5px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#9fb6de}
.sm-vd .vg b{display:block;font:500 12.5px/1.45 var(--f-body);color:#e6efff}
.sm-lg{border-radius:13px;background:#030a1c;border:1px solid rgba(127,176,255,.16);padding:10px 12px}
.sm-lg .lh2{display:flex;justify-content:space-between;gap:8px;margin-bottom:6px;font:600 10px var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:#9fb6de}
.sm-lg .lh2 span{display:inline-flex;align-items:center;gap:5px}
.sm-lg .lh2 svg{width:12px;height:12px}
.sm-lg .lh2 em{font-style:normal;color:#cfe0ff;text-transform:none;letter-spacing:0}
.sm-lg ol{list-style:none;display:flex;flex-direction:column;gap:3px;max-height:96px;overflow:hidden}
.sm-lg li{display:flex;gap:8px;font:500 10.5px var(--f-mono);color:#cfe0ff;animation:cbSwap .4s var(--ease-o)}
.sm-lg li.ph{color:#7f93ba}
.sm-lg li i{font-style:normal;font-weight:700;flex-shrink:0}
.sm-lg li i.g{color:#5FE08D}.sm-lg li i.r{color:#ff5a4a}

/* ===================== COMPARE ===================== */
.cb-cmp .tbl th small{display:block;font:500 10.5px var(--f-mono);color:var(--muted);text-transform:none;letter-spacing:0;margin-top:2px}
.cb-cmp .tbl th.hl small{color:inherit;opacity:.85}
.cb-cmp td:first-child{display:flex;align-items:center;gap:10px;font-weight:600;color:var(--ink)}
.cb-cmp td:first-child i{width:28px;height:28px;border-radius:8px;display:grid;place-items:center;background:var(--chip);color:#1565D8;flex-shrink:0}
html[data-theme="dark"] .cb-cmp td:first-child i{color:#7fb0ff}
.cb-cmp td:first-child i svg{width:15px;height:15px}
.cb-cmp td{text-align:center}
.cb-cmp td:first-child{text-align:left}
.cb-cmp em{display:inline-grid;place-items:center;width:26px;height:26px;border-radius:50%;font-style:normal;font-weight:800;font-size:13px;color:#fff;transform:scale(0)}
.cb-cmp em.y{background:#16a34a}.cb-cmp em.n2{background:#c0392b}
.cb-cmp .pt{display:inline-block;font:600 11.5px var(--f-mono);color:var(--muted);opacity:0;transform:translateY(6px)}
.cb-cmp tbody tr{opacity:0;transform:translateX(-14px)}
.cb-cmp.in tbody tr{animation:cbRow .6s var(--ease-o) forwards;animation-delay:calc(var(--k)*140ms + .1s)}
.cb-cmp.in em{animation:cbPop .5s cubic-bezier(.3,1.6,.5,1) forwards;animation-delay:calc(var(--k)*140ms + .45s)}
.cb-cmp.in td:nth-child(3) em,.cb-cmp.in td:nth-child(3) .pt{animation-delay:calc(var(--k)*140ms + .6s)}
.cb-cmp.in td:nth-child(4) em{animation-delay:calc(var(--k)*140ms + .75s)}
.cb-cmp.in .pt{animation:cbFadeUp .5s var(--ease-o) forwards}
@keyframes cbRow{to{opacity:1;transform:none}}
@keyframes cbFadeUp{to{opacity:1;transform:none}}
.cb-cmp tbody tr:hover td{background:var(--surface-2)}
.cb-cmp tbody tr:hover td.hl{background:var(--chip)}
.cb-cn{font:500 11px var(--f-mono);color:var(--muted);margin-top:10px}
@media(max-width:700px){.cb-cmp .tbl{min-width:620px}}

/* ===================== IDEAL ===================== */
.cb-id{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:10px}
@media(max-width:1000px){.cb-id{grid-template-columns:repeat(3,minmax(0,1fr))}}
@media(max-width:560px){.cb-id{grid-template-columns:repeat(2,minmax(0,1fr))}}
.cb-id .it{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:3px;padding:14px;border-radius:16px;background:var(--surface);border:1px solid var(--line);overflow:hidden;opacity:0;transform:translateY(18px) scale(.96);transition:opacity .5s var(--ease-o),transform .7s cubic-bezier(.3,1.5,.5,1),border-color .3s,box-shadow .3s;transition-delay:calc(var(--k)*50ms)}
.cb-id.in .it{opacity:1;transform:none}
.cb-id .it:after{content:"";position:absolute;left:14px;right:14px;bottom:0;height:3px;border-radius:3px 3px 0 0;background:#1565D8;transform:scaleX(.18);transform-origin:left;transition:transform .45s var(--ease-o)}
.cb-id .it:hover{border-color:#1565D8;box-shadow:var(--sh);transform:translateY(-4px);transition-delay:0s}
.cb-id .it:hover:after{transform:scaleX(1)}
.cb-id i{width:38px;height:38px;border-radius:11px;display:grid;place-items:center;background:var(--chip);color:#1565D8;margin-bottom:6px;transition:transform .45s cubic-bezier(.3,1.6,.5,1),background .3s,color .3s}
html[data-theme="dark"] .cb-id i{color:#7fb0ff}
.cb-id i svg{width:19px;height:19px}
.cb-id .it:hover i{transform:rotate(-8deg) scale(1.1);background:#1565D8;color:#fff}
.cb-id b{font:700 13.5px/1.3 var(--f-disp);color:var(--ink)}
.cb-id span{font-size:11.5px;color:var(--muted)}

/* ===================== PARTNERS ===================== */
.cb-ms{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,1fr);gap:18px;align-items:stretch}
@media(max-width:900px){.cb-ms{grid-template-columns:1fr}}
.ms-map{position:relative;min-height:540px;border-radius:22px;background:#041E42;border:1px solid rgba(127,176,255,.2);overflow:hidden;box-shadow:var(--sh-l)}
html[data-theme="dark"] .ms-map{background:#050d22}
@media(max-width:560px){.ms-map{min-height:430px}}
.ms-map canvas{position:absolute;inset:0;width:100%;height:100%}
.ms-hd{position:absolute;left:16px;right:16px;top:14px;display:flex;justify-content:space-between;align-items:center;gap:8px;z-index:2}
.ms-hd .st{font:700 12px var(--f-disp);color:#fff;background:rgba(21,101,216,.35);border:1px solid rgba(127,176,255,.4);border-radius:99px;padding:5px 12px}
.ms-hd .st.sw{animation:cbSwap .45s var(--ease-o)}
.ms-hd em{font:500 10px var(--f-mono);font-style:normal;color:#7f93ba}
.ms-ft{position:absolute;left:14px;bottom:14px;display:flex;align-items:center;gap:10px;padding:9px 12px;border-radius:13px;background:rgba(7,20,48,.88);border:1px solid rgba(127,176,255,.25);z-index:2;max-width:calc(100% - 28px)}
.ms-ft i{width:30px;height:30px;border-radius:9px;background:#1565D8;color:#fff;display:grid;place-items:center;flex-shrink:0}
.ms-ft i svg{width:15px;height:15px}
.ms-ft b{display:block;font:700 12.5px var(--f-disp);color:#fff}
.ms-ft small{display:block;font:500 10px var(--f-mono);color:#9fb6de}
.ms-l{list-style:none;display:flex;flex-direction:column;gap:8px}
.ms-l li{position:relative;display:flex;gap:12px;align-items:center;padding:12px 14px;border-radius:15px;background:var(--surface);border:1px solid var(--line);cursor:pointer;overflow:hidden;transition:border-color .3s,box-shadow .3s,transform .35s var(--ease-o)}
.ms-l li:hover{transform:translateX(4px)}
.ms-l li.on{border-color:#1565D8;box-shadow:var(--sh)}
.ms-l li>i{width:36px;height:36px;border-radius:10px;display:grid;place-items:center;background:var(--chip);color:#1565D8;flex-shrink:0;transition:background .3s,color .3s,transform .45s cubic-bezier(.3,1.6,.5,1)}
html[data-theme="dark"] .ms-l li>i{color:#7fb0ff}
.ms-l li.on>i{background:#1565D8;color:#fff;transform:scale(1.08)}
.ms-l li>i svg{width:17px;height:17px}
.ms-l b{display:block;font:700 14px var(--f-disp);color:var(--ink)}
.ms-l small{display:block;font-size:12px;color:var(--muted)}
.ms-l u{position:absolute;left:0;bottom:0;height:3px;width:100%;background:#FF8C1A;transform:scaleX(0);transform-origin:left}
.ms-l li.on u{animation:cbProg var(--dur,3.6s) linear forwards}
.cb-ms.paused .ms-l li.on u{animation-play-state:paused}
@keyframes cbProg{to{transform:scaleX(1)}}
.cb-pb{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;margin-top:16px;padding:14px 16px;border-radius:16px;background:var(--surface-2);border:1px dashed var(--line-2)}
.cb-pb>span{display:inline-flex;align-items:center;gap:9px;font-size:14px;color:var(--text)}
.cb-pb>span svg{width:18px;height:18px;color:#1565D8}
.cb-pb b{color:var(--ink)}

/* ===================== PRICING ===================== */
.cb-tm{position:relative;display:inline-flex;flex-wrap:wrap;gap:2px;padding:5px;border-radius:14px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s);margin-bottom:18px}
.cb-tm button{position:relative;z-index:1;border:0;background:none;cursor:pointer;font:700 13.5px var(--f-disp);color:var(--muted);padding:9px 16px;border-radius:10px;display:flex;flex-direction:column;align-items:center;transition:color .3s}
.cb-tm button small{font:600 10px var(--f-mono);color:#16a34a}
.cb-tm button.on{color:#fff}
.cb-tm button.on small{color:#c9f7d8}
.cb-tm .ul{position:absolute;left:0;top:5px;height:calc(100% - 10px);border-radius:10px;background:#1565D8;box-shadow:0 8px 20px -8px rgba(21,101,216,.8);transition:transform .5s cubic-bezier(.3,1.4,.5,1),width .5s cubic-bezier(.3,1.4,.5,1)}
.cb-pr{display:grid;grid-template-columns:360px 1fr;gap:20px;margin-bottom:20px;align-items:stretch}
@media(max-width:1060px){.cb-pr{grid-template-columns:1fr}}
.ez-card .ez-ms .cb-g{width:22px;height:22px}
.cb-pl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
@media(max-width:620px){.cb-pl{grid-template-columns:1fr}}
.cb-pl .pc{position:relative;text-align:left;display:flex;flex-direction:column;gap:5px;background:var(--surface);border:1.5px solid var(--line);border-radius:18px;padding:16px;cursor:pointer;font:inherit;color:inherit;box-shadow:var(--sh-s);transition:border-color .25s,box-shadow .3s,background .25s;opacity:0;transform:translateY(16px)}
.cb-pl.in .pc{animation:cbPlIn .7s cubic-bezier(.3,1.4,.5,1) forwards;animation-delay:calc(var(--k)*110ms)}
@keyframes cbPlIn{to{opacity:1;transform:none}}
.cb-pl .pc:hover{border-color:var(--line-2)}
.cb-pl .pc.on{border-color:#1565D8;background:var(--chip);box-shadow:0 0 0 3px rgba(21,101,216,.12),var(--sh)}
.cb-pl .pc .fl{position:absolute;top:-1px;right:14px;font:700 9px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#fff;background:#FF8C1A;border-radius:0 0 7px 7px;padding:3px 8px}
.cb-pl .pc .pn{display:flex;align-items:center;gap:10px}
.cb-pl .pc .pn i{width:36px;height:36px;border-radius:11px;color:#fff;display:grid;place-items:center;flex-shrink:0;background:#1565D8}
.cb-pl .pc.k1 .pn i{background:#0C3E8F}.cb-pl .pc.k2 .pn i{background:#16a34a}.cb-pl .pc.k3 .pn i{background:#FF8C1A}
.cb-pl .pc .pn i svg{width:18px;height:18px}
.cb-pl .pc .pn b{display:block;font:800 16.5px var(--f-disp);color:var(--ink)}
.cb-pl .pc .pn small{display:block;font:600 11px var(--f-mono);color:#1565D8}
html[data-theme="dark"] .cb-pl .pc .pn small{color:#7fb0ff}
.cb-pl .pc .pr{font:800 27px var(--f-disp);color:var(--ink);letter-spacing:-.02em;margin-top:4px;font-variant-numeric:tabular-nums}
.cb-pl .pc .pr small{font:500 11px var(--f-mono);color:var(--muted);letter-spacing:0}
.cb-pl .pc .py{font:500 11.5px var(--f-mono);color:var(--muted)}
.cb-pl .pc .svp{align-self:flex-start;display:inline-flex;align-items:center;gap:6px;font:700 11px var(--f-mono);color:#16a34a;background:#e4f7ec;border-radius:99px;padding:3px 9px;min-height:22px}
html[data-theme="dark"] .cb-pl .pc .svp{background:rgba(22,163,74,.16);color:#5FE08D}
.cb-pl .pc .svp.lo{color:#c2410c;background:#fff3e0}
html[data-theme="dark"] .cb-pl .pc .svp.lo{color:#FFB15C;background:rgba(255,140,26,.14)}
.cb-pl .pc .svp.nil{color:var(--muted);background:var(--surface-2)}
.cb-pl .pc .svp.sw{animation:cbSwap .45s var(--ease-o)}
.cb-pl .pc .ck2{margin-top:auto;padding-top:8px;font:700 12.5px var(--f-disp);color:#1565D8}
html[data-theme="dark"] .cb-pl .pc .ck2{color:#7fb0ff}
.cb-pl .pc .mt{display:block;height:5px;border-radius:99px;background:var(--line);overflow:hidden;margin-top:4px}
.cb-pl .pc .mt i{display:block;height:100%;width:100%;background:#1565D8;transform-origin:left;transform:scaleX(var(--u,0));transition:transform .9s cubic-bezier(.3,1.3,.5,1)}
.cb-ex{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.6fr);gap:14px;margin-bottom:24px}
@media(max-width:900px){.cb-ex{grid-template-columns:1fr}}
.hwc{display:flex;align-items:center;gap:14px;padding:16px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s)}
.hwc .hi{width:44px;height:44px;border-radius:12px;background:#041E42;color:#fff;display:grid;place-items:center;flex-shrink:0}
.hwc .hi svg{width:22px;height:22px}
.hwc .ht{flex:1;min-width:0}
.hwc .ht small{display:block;font:600 10px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:var(--muted)}
.hwc .ht b{display:block;font:700 14px/1.3 var(--f-disp);color:var(--ink)}
.hwc .ht em{display:block;font:500 11.5px var(--f-body);font-style:normal;color:var(--muted)}
.hwc .hp{text-align:right}
.hwc .hp b{display:block;font:800 22px var(--f-disp);color:var(--ink)}
.hwc .hp small{font:500 10.5px var(--f-mono);color:var(--muted)}
.spc{padding:14px 16px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s)}
.spc .sh3{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:10px}
.spc .sh3 em{font:500 10.5px var(--f-mono);font-style:normal;color:var(--muted)}
.spc .sg{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
@media(max-width:620px){.spc .sg{grid-template-columns:repeat(2,minmax(0,1fr))}}
.spc .sg>div{display:flex;flex-direction:column;gap:3px;padding:10px;border-radius:12px;background:var(--surface-2);border:1.5px solid transparent;transition:border-color .3s,background .3s,transform .45s cubic-bezier(.3,1.6,.5,1)}
.spc .sg>div.on{border-color:#1565D8;background:var(--chip);transform:translateY(-3px)}
.spc .sg i{width:26px;height:26px;border-radius:8px;display:grid;place-items:center;background:var(--chip);color:#1565D8}
html[data-theme="dark"] .spc .sg i{color:#7fb0ff}
.spc .sg i svg{width:14px;height:14px}
.spc .sg span{font-size:12px;color:var(--text)}
.spc .sg b{font:800 17px var(--f-disp);color:var(--ink)}
.spc .sg b:after{content:" / month";font:500 10px var(--f-mono);color:var(--muted)}
#configure>*{min-width:0}
#configure .seg button{padding:9px 6px}
#configure .fld .lb,#configure .fld>label{display:flex;flex-wrap:wrap;justify-content:space-between;gap:2px 10px;font-weight:600;font-size:14px;color:var(--ink);margin-bottom:9px}
#configure .fld .lb small,#configure .fld>label small{font:500 12px var(--f-mono);color:#1565D8}
html[data-theme="dark"] #configure .fld .lb small,html[data-theme="dark"] #configure .fld>label small{color:#7fb0ff}
#configure .tgl{align-items:flex-start;border:1px solid var(--line);border-radius:12px;padding:12px 14px;background:var(--surface-2)}
#configure .tgl .sw{margin-top:2px}
#configure .tgl small{display:block;font-weight:500;font-size:12px;color:var(--muted);margin-top:3px;line-height:1.45}
#configure .tgl b{color:var(--blue);font-family:var(--f-mono);font-size:13px;margin-left:4px}
html[data-theme="dark"] #configure .tgl b{color:#7fb0ff}
#configure .seg small{display:block;font:500 10px var(--f-mono);opacity:.8}
.cb-ps button.sug{box-shadow:inset 0 0 0 1.5px #FF8C1A}
.seats{display:grid;grid-template-columns:auto 1fr;gap:18px;align-items:center}
@media(max-width:480px){.seats{grid-template-columns:1fr}}
.c-hw{font-size:12px;color:var(--muted)}
.c-hw b{color:var(--ink);font-family:var(--f-mono)}
.cbands{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.cbands button{border:1px solid var(--line-2);background:var(--surface);border-radius:99px;padding:4px 11px;font:600 11.5px var(--f-mono);color:var(--muted);cursor:pointer;transition:border-color .2s,color .2s,transform .25s var(--ease-o)}
.cbands button:hover{transform:translateY(-2px);color:var(--ink)}
.cbands button.on{border-color:#1565D8;color:#1565D8;background:var(--chip)}
html[data-theme="dark"] .cbands button.on{color:#7fb0ff}
.c-min{display:none;gap:8px;align-items:center;margin-top:10px;font-size:12.5px;color:#c0392b;background:#fdecec;border-radius:10px;padding:8px 10px}
html[data-theme="dark"] .c-min{background:rgba(192,57,43,.16);color:#ff9a8f}
.c-min.on{display:flex;animation:cbSwap .4s var(--ease-o)}
.c-min svg{width:14px;height:14px;flex-shrink:0}
.cout .crow small{display:block;font:500 10.5px var(--f-mono);color:#8F9BB6}
.cb-cb{margin:-4px 0 20px}
.cef-h{display:flex;justify-content:space-between;gap:8px;margin-bottom:10px}
.cef-h span{font-family:var(--f-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#B6C2DA}
.cef-h em{font-style:normal;font:600 11px var(--f-mono);color:#8ff0b2}
.cb-t{display:flex;height:14px;border-radius:99px;overflow:hidden;background:rgba(255,255,255,.08)}
.cb-t i{display:block;height:100%;width:0;transition:width .8s cubic-bezier(.3,1.2,.5,1)}
.cb-l{display:flex;flex-wrap:wrap;gap:4px 12px;margin-top:8px;font:500 10.5px var(--f-mono);color:#b9c9e2}
.cb-l span{display:inline-flex;align-items:center;gap:5px}
.cb-l i{width:8px;height:8px;border-radius:2px;display:inline-block}
.cb-tr svg{width:15px;height:15px}
.cout .ctot{font-variant-numeric:tabular-nums}
#oRows .crow{animation:cbSwap .35s var(--ease-o)}
@media(max-width:900px){.calc{grid-template-columns:1fr}}
@media(max-width:480px){.calc .cin,.calc .cout{padding:20px 16px}}

/* ===================== IN THE BOX + MADE IN INDIA ===================== */
.cb-ib{display:grid;grid-template-columns:minmax(0,1.1fr) minmax(0,1fr);gap:18px;align-items:stretch}
@media(max-width:900px){.cb-ib{grid-template-columns:1fr}}
.ib{padding:18px;border-radius:22px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s)}
.ib-h{display:flex;justify-content:space-between;align-items:center;gap:8px}
.ib-r{display:inline-flex;align-items:center;gap:6px;border:1px solid var(--line-2);background:var(--surface);color:var(--muted);font:600 11px var(--f-mono);border-radius:99px;padding:5px 11px;cursor:pointer;transition:color .2s,border-color .2s}
.ib-r:hover{color:#1565D8;border-color:#1565D8}
.ib-r svg{width:12px;height:12px}
.ib-s{position:relative;display:grid;grid-template-columns:130px 1fr;gap:16px;align-items:center;margin-top:14px;min-height:170px}
@media(max-width:520px){.ib-s{grid-template-columns:1fr}}
.bx{position:relative;width:120px;height:110px;margin:0 auto;perspective:260px}
.bx .body{position:absolute;left:0;right:0;bottom:0;height:78px;border-radius:6px 6px 10px 10px;background:#041E42;display:grid;place-items:center;box-shadow:0 16px 24px -14px rgba(4,30,66,.7)}
.bx .body b{font:800 11px var(--f-mono);letter-spacing:.14em;color:#7fb0ff}
.bx .body:before{content:"";position:absolute;left:0;right:0;top:12px;height:8px;background:#FF8C1A;opacity:.85}
.bx .body b{position:relative;top:8px}
.bx .lid{position:absolute;left:-3px;right:-3px;top:24px;height:22px;border-radius:5px;background:#0C3E8F;transform-origin:50% 0;transition:transform .9s cubic-bezier(.3,1.4,.5,1);z-index:2}
.ib.open .bx .lid{transform:rotateX(-78deg)}
.ib-i{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:8px}
@media(max-width:620px){.ib-i{grid-template-columns:repeat(2,minmax(0,1fr))}}
.ib-i>div{display:flex;flex-direction:column;align-items:center;text-align:center;gap:7px;padding:12px 6px;border-radius:14px;background:var(--surface-2);border:1px solid var(--line);opacity:0;transform:translate(-60px,30px) scale(.4) rotate(-12deg)}
.ib.open .ib-i>div{animation:cbOut .9s cubic-bezier(.3,1.5,.5,1) forwards;animation-delay:calc(var(--k)*180ms + .35s)}
@keyframes cbOut{to{opacity:1;transform:none}}
.ib-i i{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;background:var(--chip);color:#1565D8}
html[data-theme="dark"] .ib-i i{color:#7fb0ff}
.ib-i i svg{width:22px;height:22px}
.ib-i b{font:700 12px/1.3 var(--f-disp);color:var(--ink)}
.mi{position:relative;padding:22px;border-radius:22px;background:#041E42;color:#fff;overflow:hidden;box-shadow:var(--sh-l)}
html[data-theme="dark"] .mi{background:#050d22;border:1px solid rgba(127,176,255,.18)}
.mi-k{display:inline-flex;align-items:center;gap:7px;font:600 11px var(--f-mono);letter-spacing:.12em;text-transform:uppercase;color:#FFB15C}
.mi-k svg{width:14px;height:14px}
.mi h3{font:800 26px/1.15 var(--f-disp);color:#fff;margin:8px 0 8px;letter-spacing:-.01em}
.mi h3 span{color:#5FE08D}
.mi p{font-size:14px;line-height:1.6;color:#b9c9e2;margin-bottom:14px;max-width:46ch;position:relative;z-index:1}
.mi-s{position:relative;z-index:1;display:flex;flex-wrap:wrap;gap:6px}
.mi-s span{display:inline-flex;align-items:center;gap:6px;font:600 11px var(--f-mono);color:#dbe7fb;background:rgba(127,176,255,.1);border:1px solid rgba(127,176,255,.22);border-radius:99px;padding:5px 10px;opacity:0;transform:translateY(8px);transition:opacity .45s var(--ease-o),transform .6s cubic-bezier(.3,1.5,.5,1)}
.mi.in .mi-s span{opacity:1;transform:none}
.mi.in .mi-s span:nth-child(2){transition-delay:.1s}.mi.in .mi-s span:nth-child(3){transition-delay:.2s}.mi.in .mi-s span:nth-child(4){transition-delay:.3s}.mi.in .mi-s span:nth-child(5){transition-delay:.4s}
.mi-s svg{width:13px;height:13px;color:#7fb0ff}
.mi-tri{position:absolute;right:-30px;top:-30px;width:150px;height:150px;display:flex;flex-direction:column;transform:rotate(-20deg);opacity:.25;pointer-events:none}
.mi-tri i{flex:1;transform:scaleX(0);transform-origin:left;transition:transform 1s var(--ease-o)}
.mi-tri i:nth-child(1){background:#FF8C1A}.mi-tri i:nth-child(2){background:#fff;transition-delay:.15s}.mi-tri i:nth-child(3){background:#16a34a;transition-delay:.3s}
.mi.in .mi-tri i{transform:none}

/* ===================== WHY + MARQUEE + CROSS-LINKS ===================== */
.cb-mq{margin-top:22px;display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center}
@media(max-width:700px){.cb-mq{grid-template-columns:1fr;gap:10px}}
.cb-mq .mq-l{font:600 11px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--muted);max-width:240px;line-height:1.6}
.cb-mq .mq-w{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.cb-mq .mq-m{display:flex;gap:10px;width:max-content;animation:cbMq 44s linear infinite}
.cb-mq .mq-w:hover .mq-m,.cb-mq.paused .mq-m{animation-play-state:paused}
.cb-mq .mq-m span{display:inline-flex;align-items:center;gap:7px;font:600 12.5px var(--f-body);color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:99px;padding:7px 13px 7px 9px;white-space:nowrap}
.cb-mq .mq-m span svg{width:15px;height:15px;color:#1565D8}
html[data-theme="dark"] .cb-mq .mq-m span svg{color:#7fb0ff}
@keyframes cbMq{to{transform:translateX(calc(-50% - 5px))}}
.cb-xs{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
@media(max-width:1000px){.cb-xs{grid-template-columns:1fr 1fr}}
@media(max-width:640px){.cb-xs{grid-template-columns:1fr}}
.cb-xs .xsib{display:flex;align-items:center;gap:14px;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:14px 16px;box-shadow:var(--sh-s);transition:transform .35s var(--ease-o),box-shadow .35s,border-color .3s}
.cb-xs .xsib:hover{transform:translateY(-4px);box-shadow:var(--sh);border-color:#1565D8}
.cb-xs .xi1 i{width:42px;height:42px;border-radius:12px;background:var(--chip);color:#1565D8;display:grid;place-items:center;transition:transform .4s var(--ease-o)}
.cb-xs .xi1.o i{background:#fff3e0;color:#F57C00}.cb-xs .xi1.g i{background:#e4f7ec;color:#16a34a}
html[data-theme="dark"] .cb-xs .xi1 i{background:var(--chip);color:#7fb0ff}html[data-theme="dark"] .cb-xs .xi1.o i{color:#FFB15C}html[data-theme="dark"] .cb-xs .xi1.g i{color:#5FE08D}
.cb-xs .xi1 svg{width:20px;height:20px}
.cb-xs .xsib:hover .xi1 i{transform:rotate(-8deg) scale(1.08)}
.cb-xs .xt{flex:1;min-width:0}
.cb-xs .xt small{display:block;font:500 10.5px var(--f-mono);color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.cb-xs .xt b{display:block;font:700 14.5px var(--f-disp);color:var(--ink)}
.cb-xs .xa{font-weight:700;font-size:12.5px;color:#1565D8;white-space:nowrap}
html[data-theme="dark"] .cb-xs .xa{color:#7fb0ff}
.cb-xs .xa .ar{display:inline-block;transition:transform .25s}
.cb-xs .xsib:hover .xa .ar{transform:translateX(4px)}

/* ===================== REDUCED MOTION ===================== */
@media(prefers-reduced-motion:reduce){
  .cbv *,.cb-sd *,.cb-kin .w,.fl-s,.fl-a i,.cb-mq .mq-m,.cb-cmp tbody tr,.cb-cmp em,.cb-cmp .pt,.cb-pl .pc,.cb-id .it,.cb-six>div,.sp-t>div,.sp-t .tb i,.ib-i>div,.cb-ft .fi *,.kb *,.dx .hs,.ms-l u,.mi *{animation:none!important;transition:none!important}
  .cb-kin .w,.fl-s,.cb-cmp tbody tr,.cb-cmp .pt,.cb-pl .pc,.cb-id .it,.cb-six>div,.sp-t>div,.ib-i>div{opacity:1!important;transform:none!important}
  .cb-cmp em{transform:none!important}
  .cb-sd path{stroke-dashoffset:0!important}
  .sp-t .tb i{transform:scaleX(var(--w))!important}
}

.cb-pl .pc .inc{display:flex;flex-wrap:wrap;gap:5px;margin-top:6px}
.cb-pl .pc .inc span{display:inline-flex;align-items:center;gap:5px;font:600 10.5px var(--f-mono);color:var(--muted);background:var(--surface-2);border:1px solid var(--line);border-radius:99px;padding:3px 8px}
.cb-pl .pc .inc svg{width:11px;height:11px;color:#1565D8}
html[data-theme="dark"] .cb-pl .pc .inc svg{color:#7fb0ff}
@media(max-width:560px){.cb-tm{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));width:100%}.cb-tm button{padding:8px 2px;font-size:12.5px}.cb-tm button small{font-size:9px}}
html[data-theme="dark"] .cb-cmp th.hl{color:#cfe0ff}
html[data-theme="dark"] .cb-cmp th.hl small{color:#9fb6de}

</style>

<style>
/* Embedded in the Angular site shell. Original Cybird CSS and animations above. */
html,body{min-height:0!important;height:auto!important;overflow:hidden!important}
body{margin:0}
#main>#why{padding-top:24px}
#why .mq-w:focus-within .mq-m{animation-play-state:paused}
.cybird-assurance .assurance-heading{margin:0 0 14px;color:#0066ff;font:700 13px/1.5 var(--f-mono);letter-spacing:.1em;text-transform:uppercase}
.cybird-assurance .assurance-intro{margin:0 0 18px;font-size:15px;line-height:1.8;color:var(--text)}
.cybird-security-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:0 32px;margin:0}
.cybird-security-grid>div{display:grid;grid-template-columns:minmax(110px,.8fr) minmax(0,1.5fr);gap:16px;padding:12px 0;border-bottom:1px dashed #cbdcf7;font-size:12.5px;line-height:1.6}
.cybird-security-grid dt{font-weight:600;color:var(--muted)}
.cybird-security-grid dd{margin:0;text-align:right;font-weight:600;color:var(--ink)}
.cybird-assurance .assurance-note{margin:14px 0 26px;color:var(--muted);font-size:12px;line-height:1.7}
.cybird-assurance .dband{padding:14px;margin-bottom:26px}
.cybird-assurance .dband>div{min-width:0;padding:20px 22px}
.cybird-assurance .dband .n{top:auto;bottom:8px;right:18px;font-size:36px;color:rgba(255,255,255,.07);pointer-events:none}
.cybird-assurance .dband>div:nth-child(3n+2)>i{color:#c5b5ff;background:rgba(139,105,230,.16)}
.cybird-assurance .dband>div:nth-child(3n)>i{color:#5ee5cf;background:rgba(34,200,180,.13)}
.cybird-review-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px}
.cybird-review{position:relative;display:flex;flex-direction:column;align-items:center;min-width:0;padding:26px 22px;border:1px solid #cfdef6;border-radius:18px;background:var(--surface);box-shadow:0 10px 28px -20px rgba(4,30,66,.24);overflow:hidden}
.cybird-review .review-mark{position:absolute;right:0;top:0;display:grid;place-items:center;width:56px;height:56px;border-bottom-left-radius:22px;background:linear-gradient(135deg,#1565d8,#0c3e8f);color:#fff;font:700 30px Georgia,serif}
.cybird-review .review-avatar{display:grid;place-items:center;width:64px;height:64px;margin-bottom:14px;border-radius:50%;background:linear-gradient(135deg,#1565d8,#7042ed);color:#fff;font:700 20px var(--f-body)}
.cybird-review h4{margin:0 0 4px;text-align:center;font:700 15px/1.5 var(--f-body);color:var(--ink)}
.cybird-review .review-role{margin:0;min-height:36px;text-align:center;color:var(--muted);font-size:12px;line-height:1.5}
.cybird-review .review-stars{margin:12px 0 16px;color:#ff8a00;letter-spacing:2px;font-size:17px;line-height:1}
.cybird-review blockquote{width:100%;margin:0;color:var(--muted);font-size:13px;line-height:1.8}
.cybird-review blockquote p{margin:0}
@media(max-width:900px){.cybird-review-grid{grid-template-columns:1fr}.cybird-review{padding:24px}.cybird-review .review-role{min-height:0}}
@media(max-width:620px){.cybird-security-grid{grid-template-columns:1fr}.cybird-assurance .dband>div{padding:18px 12px}.cybird-security-grid>div{gap:12px}}
</style><style>
/* The host page owns scrolling; keep desktop steps compact and mobile cards natural. */
@media(min-width:901px){
  .jr-st{padding:0 0 140px;gap:20px}
  .jr-st li{min-height:clamp(240px,calc(var(--cybird-vh,8px)*32),320px);padding-block:24px}
  .jr-v{position:relative;top:0;will-change:transform}
}
.jr-rail,.jr-in{height:min(520px,calc(var(--cybird-vh,8px)*100 - 130px))}
</style></head>
<body data-preserve-copy>
<!-- Cybird page content and animation copied from user-supplied cybird_1.html. Site shell, enquiries and cart integrate with the Angular application. -->
<main id="main">
<!-- ================= HERO ================= -->
<section class="hero lh" id="cbHero" data-product="Cybird X2 Security Appliance">
  <div class="hero-bg" aria-hidden="true"><div class="lh-grid"></div><div class="lh-dots"></div><span class="lh-aur a1"></span><span class="lh-aur a2"></span><div class="lh-scan"></div><canvas class="cb-bg" id="cbBg"></canvas><canvas class="lh-net"></canvas></div>
  <div class="wrap">
    <div class="crumb" data-in="1"><a href="/" target="_top">Home</a><span class="sep">\u203A</span><a href="/security" target="_top">Security</a><span class="sep">\u203A</span><span class="c">Cybird</span></div>
    <div class="hero-grid">
      <div>
        <h1 class="lh-title" data-in="1"><span class="x">Xcell</span><span class="brd">Secure</span><span class="dv">|</span><span class="nm">Cybird X2 Security Platform</span></h1>
        <p class="lh-tag" data-in="2">One device. Total protection.</p>
        <p class="lh-tag2" data-in="2">Cybird X2 puts business Wi-Fi, a firewall, web filtering and cloud management in one box for small offices, CAs, CSs and law firms. XcellHost is Cybird's National Distributor and supplies, sets up and supports it across India.</p>
        <div class="lh-type" data-in="3" data-words='["Business Wi-Fi with a login for every person","Phishing sites blocked before they load","Guests online, never on your office network","Every branch on one cloud dashboard"]'><span class="tw"></span><span class="cur"></span></div>
        <div class="lh-points" data-in="3"><div><span class="tk" data-gl="wifi"></span>Secure business Wi-Fi 6</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span>Firewall &amp; secure web gateway</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg></span>Per-user access (WPA2-Enterprise)</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg></span>App, bandwidth &amp; web controls</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg></span>Cloud-managed \xB7 zero-touch setup</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></span>Bundles from \u20B914,999 + GST</div></div>
        <div class="lh-ctas" data-in="4">
          <a href="#pricing" class="btn btn-orange cb-mag">View plans <span class="ar">\u2192</span></a>
          <a href="#simulate" class="btn btn-gl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg> Try the threat simulator</a>
          <a href="https://wa.me/918657032540" target="_blank" rel="noopener" class="btn btn-gl"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg> WhatsApp</a>
        </div>
        <div class="cb-anc" data-in="4"><a href="#features"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>Features</a><a href="#how"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>How it works</a><a href="#hardware"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg>Hardware</a><a href="#configure"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg>Build your bundle</a></div>
        <div class="lh-ask" data-in="5" data-q="Explain the Cybird X2 security appliance (Cybird by Netrakshak Technologies, made in India) for Indian small businesses, chartered accountants, company secretaries and law firms \u2014 secure business Wi-Fi 6 with per-user WPA2-Enterprise access, advanced firewall, secure web gateway and DNS filtering, application and bandwidth controls, network access control, cloud management and zero touch provisioning \u2014 and why to buy it from XcellHost (xcellhost.top), Cybird's National Distributor in India, with bundles from \u20B914,999 + GST"><span class="k"><b>\u2726</b>Ask AI about Cybird X2</span><span class="chips"><a data-ai="chatgpt" href="#"><i></i>ChatGPT</a><a data-ai="claude" href="#"><i></i>Claude</a><a data-ai="perplexity" href="#"><i></i>Perplexity</a><a data-ai="google" href="#"><i></i>Google AI</a><a data-ai="copilot" href="#"><i></i>Copilot</a></span></div>
      </div>
      <div class="stage" data-in="4">
        <span class="lh-orbit"></span><span class="lh-orbit o2"></span>
        <div class="lh-chip" style="top:-36px;right:-22px"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg></i><span>Made in India \xB7 Securing India<small>Cybird by Netrakshak Technologies</small></span></div>
        <div class="lh-chip c2 cb-c2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg></i><span>Wi-Fi 6 \xB7 up to 900 Mbps firewall*<small>*depends on services enabled</small></span></div>
        <div class="lh-tilt"><div class="cbv" id="cbv" role="img" aria-label="Animated illustration with sample data, in seven acts: the Cybird X2 powers up and its PWR, SYS, WAN, LAN and Wi-Fi lights come on in order while the antennas send out Wi-Fi rings; staff laptops and phones, a printer, an IP camera and guest devices connect, each with its own identity, staff on one network and guests on another; a phishing link and a malware download are blocked at the web gateway; app control slows a streaming app and bandwidth rebalances; the Cybird Cloud dashboard lights up with alerts and reports; two branch offices join the cloud; the scene settles on One device. Total protection.">
          <div class="cbv-h"><b><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></i><span>Cybird X2 \xB7 office network</span></b><span class="cbv-live" id="cbvLive">sample \xB7 power up</span></div>
          <div class="cbv-rail" id="cbvRail">
            <span>Power</span><span>Connect</span><span>Block</span><span>Control</span><span>Cloud</span><span>Sites</span><span>Protect</span>
            <em class="tr"><b id="cbvFill"></b></em>
          </div>
          <div class="cbv-sc" id="cbvSc">
            <canvas id="cbvCv"></canvas>
            <span class="cbv-spot" id="cbvSpot"></span>
            <div class="cbv-fx" id="cbvFx">
              <div class="cbv-cd p-r" id="cbvId"><div class="dh"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg></i><span><small>Per-user Wi-Fi \xB7 WPA2-Enterprise</small><b>Who is on the network</b></span></div>
                <ul><li><em class="st">staff</em><span>priya \xB7 laptop</span><b>VLAN 10 \xB7 full access</b></li><li><em class="st">staff</em><span>arjun \xB7 phone</span><b>VLAN 10 \xB7 full access</b></li><li><em class="io">IoT</em><span>printer \xB7 camera</span><b>VLAN 30 \xB7 local only</b></li><li><em class="gu">guest</em><span>2 visitors</span><b>VLAN 99 \xB7 internet only</b></li></ul></div>
              <div class="cbv-cd p-r" id="cbvBl"><div class="dh"><i class="r"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></i><span><small>Secure web gateway \xB7 threat protection</small><b>Stopped at the gateway</b></span></div>
                <ul><li id="cbvB0"><em class="bk">blocked</em><span>bank-kyc-update.xyz</span><b>phishing \xB7 DNS filter</b></li><li id="cbvB1"><em class="bk">blocked</em><span>invoice_0412.pdf.exe</span><b>malware \xB7 download</b></li></ul></div>
              <div class="cbv-cd p-r" id="cbvAc"><div class="dh"><i class="o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg></i><span><small>Smart controls &amp; policies</small><b>Bandwidth by app</b></span></div>
                <div class="bw"><span>Business apps</span><i><b id="cbvW0"></b></i></div><div class="bw"><span>Video streaming</span><i><b id="cbvW1" class="o"></b></i></div><div class="bw"><span>Guest Wi-Fi</span><i><b id="cbvW2" class="p"></b></i></div>
                <span class="vd" id="cbvAcV">Streaming capped \xB7 work traffic first</span></div>
              <div class="cbv-cd p-r" id="cbvCl"><div class="dh"><i class="b"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg></i><span><small>Cybird Cloud \xB7 centralized</small><b>Alerts &amp; reports</b></span></div>
                <ul><li id="cbvC0"><em class="bk">alert</em><span>Phishing blocked</span><b>priya \xB7 laptop</b></li><li id="cbvC1"><em class="io">policy</em><span>Streaming capped</span><b>guest Wi-Fi</b></li><li id="cbvC2"><em class="st">report</em><span>Daily summary</span><b>ready</b></li></ul>
                <div class="sp" aria-hidden="true"><i style="--h:.35"></i><i style="--h:.55"></i><i style="--h:.4"></i><i style="--h:.7"></i><i style="--h:.5"></i><i style="--h:.85"></i><i style="--h:.62"></i></div></div>
              <div class="cbv-end" id="cbvEnd"><span class="ring"></span><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></i><span class="tx"><b>One device. Total protection.</b><small>Wi-Fi \xB7 firewall \xB7 web security \xB7 controls \xB7 cloud</small></span></div>
            </div>
          </div>
          <div class="cbv-kp" id="cbvKp">
            <div><span>Devices online</span><b id="cbvK0">0</b><em id="cbvD0">booting</em></div>
            <div><span>Threats blocked</span><b id="cbvK1">0</b><em id="cbvD1">gateway</em></div>
            <div><span>App policies</span><b id="cbvK2">0</b><em id="cbvD2">controls</em></div>
            <div><span>Sites managed</span><b id="cbvK3">1</b><em id="cbvD3">cloud</em></div>
          </div>
          <div class="cbv-lg"><span class="pr" id="cbvLgP">\u203A</span><code id="cbvLg">Cybird X2 \xB7 power on</code></div>
          <div class="cbv-tk" aria-hidden="true"><div class="tk-m" id="cbvTk"><span><i class="g"></i>priya \xB7 laptop \xB7 staff VLAN 10</span><span><i class="r"></i>bank-kyc-update.xyz \xB7 phishing \xB7 blocked</span><span><i class="b"></i>guest phone \xB7 VLAN 99 \xB7 internet only</span><span><i class="m"></i>video streaming \xB7 capped by policy</span><span><i class="g"></i>branch 2 \xB7 online \xB7 cloud-managed</span><span><i class="r"></i>invoice_0412.pdf.exe \xB7 malware \xB7 blocked</span><span><i class="g"></i>priya \xB7 laptop \xB7 staff VLAN 10</span><span><i class="r"></i>bank-kyc-update.xyz \xB7 phishing \xB7 blocked</span><span><i class="b"></i>guest phone \xB7 VLAN 99 \xB7 internet only</span><span><i class="m"></i>video streaming \xB7 capped by policy</span><span><i class="g"></i>branch 2 \xB7 online \xB7 cloud-managed</span><span><i class="r"></i>invoice_0412.pdf.exe \xB7 malware \xB7 blocked</span></div></div>
        </div></div>
        <div class="lh-powered cb-pw"><small>Powered by</small><span><span class="cb-g">C</span>Cybird</span><em>XcellHost \xB7 National Distributor</em></div>
        <img id="cbvImg" class="cb-src" alt="" src="data:image/webp;base64,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">
      </div>
    </div>
  </div>
</section>








<div class="lh-trust"><div class="wrap"><span>From <b data-pr="ess1">\u20B914,999</b> + GST / year</span><span><b>Wi-Fi 6</b> \xB7 dual-band</span><span>Firewall up to <b>900 Mbps*</b></span><span><b>Cloud-managed</b> \xB7 zero touch</span><span><b>GST</b> invoice in INR</span><span><b>Since 1999</b> \xB7 Mumbai</span></div></div>

<!-- ================= OVERVIEW ================= -->
<section class="sec" id="overview">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Overview</span><h2 class="cb-kin">Secure your business network \u2014 <span class="acc">with one box instead of five.</span></h2><p>Cybird X2 is an all-in-one network security platform: business Wi-Fi, advanced protection and clear visibility, managed from the cloud.</p></div>
    <div class="pp-cols rv">
      <p class="pp-ov">Most small offices run on the router their internet provider handed over: basic Wi-Fi, one shared password and little real security. <b>Cybird X2</b> replaces it with a business-grade platform \u2014 firewall, secure web gateway with DNS filtering, threat intelligence, application controls and Wi-Fi with a separate login for every employee and a separate network for guests. It is built by <b>Cybird (Netrakshak Technologies)</b> and made in India.</p>
      <p class="pp-ov">It is designed for the way SMBs, chartered accountants, company secretaries and lawyers actually work: client files, banking portals, Microsoft 365 or Google Workspace, visitors asking for Wi-Fi. <b>XcellHost is Cybird's National Distributor</b>: we supply the appliance and security bundle, help you set it up, bill you in rupees on a GST invoice and support you from Mumbai.</p>
    </div>
    <div class="cb-flow rv" id="cbFlow">
      <div class="fl-s" style="--k:0"><span class="fi" data-gl="wifi"></span><small>01 \xB7 connect</small><b>Business Wi-Fi</b><p>Fast, reliable Wi-Fi 6 with per-user access for staff and a separate network for guests.</p><div class="fl-c"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>per user</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>guests apart</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg>Wi-Fi 6</span></div></div>
      <div class="fl-a" aria-hidden="true"><i></i></div>
      <div class="fl-s" style="--k:1"><span class="fi o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></span><small>02 \xB7 protect</small><b>Multi-layer security</b><p>Firewall, web security, DNS filtering and threat intelligence stop phishing, malware and ransomware.</p><div class="fl-c"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>firewall</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>web gateway</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>DNS filter</span></div></div>
      <div class="fl-a" aria-hidden="true"><i></i></div>
      <div class="fl-s" style="--k:2"><span class="fi g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></span><small>03 \xB7 see &amp; manage</small><b>Visibility from the cloud</b><p>Real-time monitoring, alerts and reports for every site, managed from one cloud dashboard.</p><div class="fl-c"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>alerts</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>reports</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>cloud</span></div></div>
    </div>
    <div class="cb-for rv"><span class="k">Built for</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>SMBs</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>Chartered accountants</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>Company secretaries</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l6-6 4 4 8-8"/><path d="M14 7h7v7"/></svg>Lawyers &amp; law firms</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>Branch offices</span></div>
  </div>
</section>

<!-- ================= FEATURES ================= -->
<section class="sec" id="features">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Features</span><h2 class="cb-kin">Eight capabilities, <span class="acc">one appliance on your desk.</span></h2><p>Everything an office network needs to stay online and stay safe \u2014 hover or tap a card to see how it shows up day to day.</p></div>
    <div class="cb-ft">
      <article class="ft rv cb-tl f-wifi" style="--k:0" tabindex="0"><span class="fi" data-gl="wifiA"></span><b>Secure Business Wi-Fi</b><small>Fast, reliable Wi-Fi with separate access for employees and guests.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>Staff sign in with their own credentials; visitors get internet only.</p></article>
      <article class="ft rv cb-tl f-fw" data-d="1" style="--k:1" tabindex="0"><span class="fi o" data-gl="wall"></span><b>Advanced Firewall</b><small>Blocks threats, prevents intrusions and protects your network.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Unwanted inbound connections never reach your PCs.</p></article>
      <article class="ft rv cb-tl f-gw" data-d="2" style="--k:2" tabindex="0"><span class="fi g" data-gl="globeA"></span><b>Secure Web Gateway</b><small>Filters malicious websites and blocks harmful content.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>A fake bank or KYC link is stopped at the DNS lookup.</p></article>
      <article class="ft rv cb-tl f-ct" data-d="3" style="--k:3" tabindex="0"><span class="fi n" data-gl="sliders"></span><b>Smart Controls &amp; Policies</b><small>User roles, bandwidth, app control and internet policies.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>Streaming waits; accounting and GST-portal traffic goes first.</p></article>
      <article class="ft rv cb-tl f-in" style="--k:4" tabindex="0"><span class="fi" data-gl="bars"></span><b>Insights &amp; Visibility</b><small>Real-time monitoring, alerts and actionable reports.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg>See which device tried what, and when \u2014 in plain language.</p></article>
      <article class="ft rv cb-tl f-dp" data-d="1" style="--k:5" tabindex="0"><span class="fi o" data-gl="gear"></span><b>Easy to Deploy &amp; Manage</b><small>Cloud-managed platform for simple setup and centralized management.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>One dashboard for one office or many.</p></article>
      <article class="ft rv cb-tl f-zt" data-d="2" style="--k:6" tabindex="0"><span class="fi g" data-gl="ztp"></span><b>Zero Touch Provisioning</b><small>Automates device setup and deployment without manual configuration.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Plug it in at a new branch; it pulls its settings from the cloud.</p></article>
      <article class="ft rv cb-tl f-nc" data-d="3" style="--k:7" tabindex="0"><span class="fi n" data-gl="nac"></span><b>Network Access Control</b><small>Secures network access by verifying users, devices and permissions.</small><u class="hn">See it in practice \u2192</u><p class="rvl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>An unknown device does not get on just because it has the password.</p></article>
    </div>

    <div class="cb-kb" id="benefits">
      <div class="kb-h rv"><span class="vt-k"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>Key benefits</span></div>
      <div class="kb-g">
        <article class="kb rv cb-tl k-ml" style="--k:0"><div class="kv" aria-hidden="true"><svg viewBox="0 0 120 120"><circle class="r3" cx="60" cy="60" r="52" pathLength="1"/><circle class="r2" cx="60" cy="60" r="40" pathLength="1"/><circle class="r1" cx="60" cy="60" r="28" pathLength="1"/></svg><b data-to="3">0</b><small>layers</small></div><h3>Multi-layer protection</h3><p>Defends against phishing, malware, ransomware and other cyber threats.</p><div class="kt"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>phishing</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg>malware</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>ransomware</span></div></article>
        <article class="kb rv cb-tl k-rr" data-d="1" style="--k:1"><div class="kv gauge" aria-hidden="true"><svg viewBox="0 0 120 80"><path class="ga" d="M12 70a48 48 0 0196 0" pathLength="1"/><path class="gr" d="M12 70a48 48 0 0130-44" /><path class="go" d="M42 26a48 48 0 0136 0"/><path class="gg" d="M78 26a48 48 0 0130 44"/><g class="nd"><path d="M60 70L60 30"/><circle cx="60" cy="70" r="5"/></g></svg><small>risk \u2193</small></div><h3>Reduced cyber risk</h3><p>Proactive threat detection and filtering keep your business safe.</p><div class="kt"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>detect</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>filter</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>stay safe</span></div></article>
        <article class="kb rv cb-tl k-sb" data-d="2" style="--k:2"><div class="kv brw" aria-hidden="true"><div class="bh"><i></i><i></i><i></i></div><ul><li class="ok">mail.office.com</li><li class="no">free-gift-claim.top</li><li class="ok">gst.gov.in</li><li class="no">secure-login-kyc.xyz</li></ul></div><h3>Safe browsing for users</h3><p>A secure and productive internet experience for every employee.</p><div class="kt"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>web filter</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>DNS</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>every user</span></div></article>
        <article class="kb rv cb-tl k-sc" data-d="3" style="--k:3"><div class="kv sc" aria-hidden="true"><svg viewBox="0 0 120 80"><path class="ln" d="M60 40L20 18M60 40L100 18M60 40L22 64M60 40L98 64" pathLength="1"/><circle class="h" cx="60" cy="40" r="9"/><circle class="s s1" cx="20" cy="18" r="6"/><circle class="s s2" cx="100" cy="18" r="6"/><circle class="s s3" cx="22" cy="64" r="6"/><circle class="s s4" cx="98" cy="64" r="6"/></svg><b data-to="4">0</b><small>environments</small></div><h3>Scalable for any environment</h3><p>One platform for the office, remote staff, multiple sites and growing businesses.</p><div class="kt"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>office</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 9.5V21h14V9.5"/></svg>remote</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>multi-site</span></div></article>
      </div>
    </div>
  </div>
</section>

<div class="cb-sd rv" aria-hidden="true"><svg viewBox="0 0 1200 40" preserveAspectRatio="none"><path d="M0 20H520c10 0 10-12 20-12s10 24 20 24 10-12 20-12H1200" pathLength="1"/></svg><i></i></div>

<!-- ================= HOW IT WORKS (sticky) ================= -->
<section class="sec" id="how">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">How Cybird works</span><h2 class="cb-kin">From the device in your hand <span class="acc">to the cloud that manages it \u2014 scroll through.</span></h2><p>The same thirty office devices travel through Cybird X2: onto secure Wi-Fi, through inspection, out to the internet, under cloud management, into your reports. Sample data.</p></div>
    <div class="cb-jr" id="cbJr">
      <ol class="jr-st" id="cbJrSt">
        <li data-k="0"><span class="sn">01</span><small>Your business network</small><b>Every device</b><p>Employees, laptops and desktops, mobile devices, printers and IoT, guests, IP phones and cameras \u2014 all of them need the network, and none of them should get more access than they need.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>Staff \xB7 devices \xB7 guests</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="1"><span class="sn">02</span><small>Secure Wi-Fi \xB7 per-user access</small><b>One login per person</b><p>WPA2-Enterprise gives each employee their own identity on the Wi-Fi. Staff, office devices and guests land on separate networks, so a visitor's phone never sees your file server.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>WPA2-Enterprise \xB7 VLANs</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="2"><span class="sn">03</span><small>Cybird X2 inspects</small><b>Checked on the way through</b><p>Traffic passes the firewall, the secure web gateway with DNS filtering, threat protection and application controls. Phishing, malware and harmful sites are stopped at the box.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Firewall \xB7 web \xB7 DNS \xB7 apps</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="3"><span class="sn">04</span><small>Secure internet connection</small><b>Out to the apps you use</b><p>Clean traffic reaches Microsoft 365, Google Workspace, cloud applications, web browsing, banking and finance portals and e-commerce sites.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>Secure internet</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="4"><span class="sn">05</span><small>Cybird Cloud</small><b>Managed from anywhere</b><p>Cybird Cloud gives centralized management and threat intelligence: settings, policies and updates for every site, from one place, any time.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>Centralized \xB7 threat intelligence</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="5"><span class="sn">06</span><small>Visibility &amp; insights</small><b>Reports you can act on</b><p>Real-time dashboards, alerts, reports and usage analytics show what happened on your network \u2014 who connected, what was blocked and where bandwidth went.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>Dashboards \xB7 alerts \xB7 reports</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
      </ol>
      <div class="jr-v" id="cbJrV">
        <div class="jr-rail" id="cbJrRail" aria-hidden="true"><span class="tk"><i id="cbJrFill"></i></span><b data-k="0">Devices</b><b data-k="1">Wi-Fi</b><b data-k="2">Inspect</b><b data-k="3">Internet</b><b data-k="4">Cloud</b><b data-k="5">Reports</b></div>
        <div class="jr-in" role="img" aria-label="Diagram that morphs as you scroll: thirty device dots sit in six groups, move onto staff, IoT and guest Wi-Fi networks, stream through the Cybird X2 where a few red threats stop, flow out to six internet destinations, rise into the Cybird Cloud and finally form report bars and a ring. Sample data.">
          <div class="jr-hd"><span class="st" id="cbJrN">Step 1 of 6</span><b id="cbJrT">Every device</b><em>sample data</em></div>
          <canvas id="cbJrCv"></canvas>
          <div class="jr-cap" id="cbJrCap"><i id="cbJrCi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg></i><span><b id="cbJrCb">Your business network</b><small id="cbJrCs">30 devices \xB7 6 kinds \xB7 staff and guests</small></span></div>
        </div>
      </div>
    </div>
    <div class="cb-six rv" id="cbSix">
      <div style="--k:0"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></i><b>Threat protection</b><span>Blocks malicious sites, phishing, malware and harmful downloads.</span></div>
      <div style="--k:1"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg></i><b>Web security</b><span>DNS filtering and safe browsing to protect users online.</span></div>
      <div style="--k:2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></i><b>Application controls</b><span>Manage and control apps for better productivity.</span></div>
      <div style="--k:3"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></i><b>Visibility &amp; insights</b><span>Real-time dashboards, reports, alerts and usage analytics.</span></div>
      <div style="--k:4"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg></i><b>User access</b><span>Per-user identities with roles and access policies.</span></div>
      <div style="--k:5"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg></i><b>Cloud managed</b><span>Manage all your sites from anywhere, any time.</span></div>
    </div>
  </div>
</section>

<!-- ================= HARDWARE EXPLORER ================= -->
<section class="sec" id="hardware">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Cybird X2 \xB7 hardware</span><h2 class="cb-kin">Turn it around. <span class="acc">Tap a port, light or antenna.</span></h2><p>Powerful protection built for small business: drag to rotate between the front and back of the Cybird X2, or tap a hotspot to see what it does.</p></div>
    <div class="cb-hw">
      <div class="dx rv" id="cbDx">
        <div class="dx-t" role="tablist" aria-label="View"><button type="button" class="on" data-v="0">Front view</button><button type="button" data-v="1">Back view</button><span class="ul" aria-hidden="true"></span></div>
        <div class="dx-st" id="cbDxSt">
          <div class="dx-card" id="cbDxC">
            <div class="dx-f fr0"><div class="ib2"><img src="data:image/webp;base64,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" alt="Cybird X2 front view: four antennas, Cybird logo, PWR, SYS, WAN, LAN and WIFI status lights and a USB port" width="640" height="252" draggable="false">
              <button type="button" class="hs" style="--x:19.5%;--y:6%" data-h="ant"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">Antennas</span></button>
              <button type="button" class="hs" style="--x:52%;--y:64%" data-h="led"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">Status lights</span></button>
              <button type="button" class="hs" style="--x:88.5%;--y:62%" data-h="usbf"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">USB port</span></button>
              <button type="button" class="hs" style="--x:30%;--y:58%" data-h="cpu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">Processor and memory</span></button>
            </div></div>
            <div class="dx-f bk1"><div class="ib2"><img src="data:image/webp;base64,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" alt="Cybird X2 back view: DC 12V power, reset, two USB 3.0, one WAN and four LAN ports" width="640" height="111" draggable="false">
              <button type="button" class="hs" style="--x:10%;--y:50%" data-h="dc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">DC power</span></button>
              <button type="button" class="hs" style="--x:17.5%;--y:50%" data-h="rst"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">Reset</span></button>
              <button type="button" class="hs" style="--x:26.5%;--y:50%" data-h="usb3"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">USB 3.0</span></button>
              <button type="button" class="hs" style="--x:46.5%;--y:50%" data-h="wan"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">WAN port</span></button>
              <button type="button" class="hs" style="--x:70%;--y:50%" data-h="lan"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg><span class="sr">LAN ports</span></button>
            </div></div>
          </div>
          <span class="dx-sh" aria-hidden="true"></span>
          <span class="dx-hint" id="cbDxHint"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 2l4 4-4 4M3 11V9a3 3 0 013-3h15M7 22l-4-4 4-4M21 13v2a3 3 0 01-3 3H3"/></svg>drag to rotate</span>
        </div>
        <div class="dx-pop" id="cbDxP" aria-live="polite"><i id="cbDxPi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg></i><span><small id="cbDxPk">Wi-Fi</small><b id="cbDxPb">Dual-band 802.11ax Wi-Fi 6</b><em id="cbDxPe">2.4 GHz &amp; 5 GHz \xB7 2\xD72 MU-MIMO \xB7 up to 1200 Mbps</em></span></div>
        <div class="dx-bd"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>High-performance hardware</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>Multi-layer protection</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>Multi-WAN high availability</span><span data-gl2="wifi">Business Wi-Fi with per-user access</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>Cloud-managed, anywhere</span></div>
      </div>
      <div class="sp-w rv" data-d="1" id="cbSp">
        <div class="sp-h"><span class="vt-k"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>Technical specifications</span><em>Cybird X2</em></div>
        <dl class="sp-t" id="cbSpT">
          <div data-h="cpu" style="--k:0"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>Processor</dt><dd>MediaTek 1.3 GHz dual-core ARM</dd></div>
          <div data-h="cpu" style="--k:1"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="10" rx="1.5"/><path d="M6 11v2M10 11v2M14 11v2M18 11v2M5 17v3M19 17v3"/></svg>Memory</dt><dd>1 GB DDR4</dd></div>
          <div data-h="cpu" style="--k:2"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/></svg>Storage</dt><dd>128 MB NAND flash</dd></div>
          <div data-h="lan" style="--k:3"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>Interfaces</dt><dd>1 \xD7 WAN 10/100/1000 Mbps<br>4 \xD7 LAN 10/100/1000 Mbps<br>2 \xD7 USB 3.0 \xB7 1 \xD7 console (optional)</dd></div>
          <div data-h="ant" style="--k:4"><dt data-gl2="wifi">Wi-Fi</dt><dd>Dual-band 802.11ax Wi-Fi 6 (2.4 &amp; 5 GHz)<br>2\xD72 MU-MIMO \xB7 up to 1200 Mbps</dd></div>
          <div class="tp" data-h="led" style="--k:5"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Firewall throughput</dt><dd>Up to 900 Mbps*<span class="tb"><i style="--w:.75"></i></span></dd></div>
          <div class="tp" data-h="wan" style="--k:6"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>VPN throughput (WireGuard)</dt><dd>Up to 300 Mbps*<span class="tb"><i style="--w:.25"></i></span></dd></div>
          <div class="tp" data-h="ant" style="--k:7"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg>Wi-Fi link rate</dt><dd>Up to 1200 Mbps<span class="tb"><i style="--w:1"></i></span></dd></div>
          <div data-h="dc" style="--k:8"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Power</dt><dd>DC 12 V / 2 A</dd></div>
          <div style="--k:9"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>Dimensions</dt><dd>200 mm (W) \xD7 120 mm (D) \xD7 35 mm (H)</dd></div>
          <div style="--k:10"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>Operating temperature</dt><dd>0 \xB0C to 40 \xB0C</dd></div>
          <div style="--k:11"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="13" rx="2"/><circle cx="12" cy="17" r="3"/><path d="M10.5 19.5L10 23l2-1 2 1-.5-3.5M7 7h10M7 10h6"/></svg>Certifications</dt><dd>CE, FCC, RoHS compliant</dd></div>
          <div style="--k:12"><dt><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>Warranty</dt><dd>1 year standard (extendable)</dd></div>
        </dl>
        <p class="sp-n">* Performance depends on enabled services, configuration and deployment conditions.</p>
      </div>
    </div>
  </div>
</section>

<!-- ================= THREAT SIMULATOR ================= -->
<section class="sec" id="simulate">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Threat simulator</span><h2 class="cb-kin">Pick an event. <span class="acc">Watch Cybird X2 handle it.</span></h2><p>A packet travels from the device through secure Wi-Fi into the Cybird X2, where each security layer checks it. The verdict shows which feature stepped in. Illustrative \u2014 your policies are set up with you.</p></div>
    <div class="cb-sim rv" id="cbSim">
      <div class="sm-in">
        <span class="sm-k">Choose what happens</span>
        <div class="sm-ev" id="smEvB" role="radiogroup" aria-label="Event">
          <button type="button" data-e="phish" class="on"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg></i><span><b>Phishing site</b><small>staff clicks a fake KYC link</small></span></button>
          <button type="button" data-e="mal"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg></i><span><b>Malware download</b><small>an "invoice" that is really an .exe</small></span></button>
          <button type="button" data-e="unk"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg></i><span><b>Unknown device joins</b><small>someone has the Wi-Fi password</small></span></button>
          <button type="button" data-e="gprn"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg></i><span><b>Guest tries office printer</b><small>visitor on guest Wi-Fi</small></span></button>
          <button type="button" data-e="app"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 4v16l13-8z"/></svg></i><span><b>Staff opens a blocked app</b><small>streaming during work hours</small></span></button>
          <button type="button" data-e="ok"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></i><span><b>Normal work</b><small>opening Microsoft 365</small></span></button>
        </div>
        <button type="button" class="btn btn-orange btn-block cb-mag" id="smGo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg> Run it</button>
      </div>
      <div class="sm-out">
        <div class="sm-pipe" id="smPipe">
          <div class="pn" data-n="0"><span class="pi" id="smPI"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg></span><b id="smN0b">Staff laptop</b><small id="smN0">priya \xB7 VLAN 10</small></div>
          <div class="pn" data-n="1"><span class="pi" data-gl="wifi"></span><b>Secure Wi-Fi</b><small id="smN1">WPA2-Enterprise</small></div>
          <div class="pn x2" data-n="2"><span class="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></span><b>Cybird X2</b><small id="smN2">inspect</small></div>
          <div class="pn" data-n="3"><span class="pi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg></span><b id="smN3b">Internet</b><small id="smN3">destination</small></div>
          <span class="ln" aria-hidden="true"><i id="smLn"></i></span>
          <span class="pk" id="smPk" aria-hidden="true"></span>
        </div>
        <div class="sm-md" id="smMd"><span data-m="nac"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg><b>Access control</b></span><span data-m="fw"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg><b>Firewall</b></span><span data-m="web"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg><b>Web &amp; DNS</b></span><span data-m="tp"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg><b>Threat protection</b></span><span data-m="app"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg><b>App control</b></span></div>
        <div class="sm-vd" id="smVd" aria-live="polite">
          <span class="vt" id="smVt"><i id="smVi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></i><b id="smVb">Waiting</b></span>
          <div class="vg"><span><small>Handled by</small><b id="smVm">\u2014</b></span><span><small>What the user sees</small><b id="smVw">Press \u201CRun it\u201D.</b></span></div>
        </div>
        <div class="sm-lg"><div class="lh2"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>Event log \xB7 sample</span><em id="smTally">0 allowed \xB7 0 blocked</em></div><ol id="smLog"><li class="ph">No events yet.</li></ol></div>
      </div>
    </div>
  </div>
</section>

<!-- ================= COMPARISON ================= -->
<section class="sec" id="compare">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">How Cybird compares</span><h2 class="cb-kin">Enterprise-grade protection <span class="acc">without the enterprise stack.</span></h2><p>Cybird is an all-in-one security platform with Wi-Fi and controls. High-cost enterprise stacks need multiple products and complex setup; a basic ISP router gives you Wi-Fi and little security.</p></div>
    <div class="tbl-w cb-cmp rv" id="cbCmp">
      <table class="tbl">
        <thead><tr><th>Capability</th><th class="hl"><span class="cb-g sm">C</span> Cybird<small>All-in-one \xB7 Wi-Fi + controls</small></th><th>High-cost enterprise stacks<small>multiple products, complex setup</small></th><th>ISP router<small>basic Wi-Fi, limited security</small></th></tr></thead>
        <tbody>
          <tr style="--k:0"><td><i data-gl="wifi"></i>Reliable business Wi-Fi</td><td class="hl"><em class="y">\u2713</em></td><td><em class="y">\u2713</em></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:1"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg></i>Per-user Wi-Fi (WPA2-Enterprise)</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Yes, extra licence</span></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:2"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></i>Web security &amp; DNS protection</td><td class="hl"><em class="y">\u2713</em></td><td><em class="y">\u2713</em></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:3"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="8" height="14" rx="4"/><path d="M12 6V4M8 10H4M8 15H4M16 10h4M16 15h4M9 4l1 2M15 4l-1 2"/></svg></i>Threat protection</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Advanced, requires setup</span></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:4"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg></i>Application &amp; content controls</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Add-on tool</span></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:5"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></i>Visibility &amp; reporting</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Yes, complex dashboards</span></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:6"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg></i>Centralized management (cloud)</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Yes, high cost</span></td><td><em class="n2">\u2715</em></td></tr>
          <tr style="--k:7"><td><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg></i>Easy deployment &amp; management</td><td class="hl"><em class="y">\u2713</em></td><td><span class="pt">Complex, IT intensive</span></td><td><em class="n2">\u2715</em></td></tr>
        </tbody>
      </table>
    </div>
    <p class="cb-cn rv">Comparison as published in the Cybird brochure.</p>
  </div>
</section>

<!-- ================= IDEAL FOR ================= -->
<section class="sec" id="ideal">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Ideal for businesses like yours</span><h2 class="cb-kin">Fifteen kinds of workplace, <span class="acc">one way to secure them.</span></h2><p>From a two-person CA practice to a chain of retail stores \u2014 if people and devices share a network, Cybird X2 is built for it.</p></div>
    <div class="cb-id rv" id="cbId">
      <div class="it" style="--k:0"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg></i><b>Small offices &amp; enterprises</b><span>CA, CS and law practices</span></div>
      <div class="it" style="--k:1"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 11l9-8 9 8M5 9.5V21h14V9.5"/></svg></i><b>Work from home</b><span>secure remote staff</span></div>
      <div class="it" style="--k:2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg></i><b>Schools &amp; colleges</b><span>students apart from staff</span></div>
      <div class="it" style="--k:3"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg></i><b>Retail stores &amp; chains</b><span>billing kept separate</span></div>
      <div class="it" style="--k:4"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 000-7.8z"/></svg></i><b>Healthcare clinics</b><span>patient Wi-Fi apart</span></div>
      <div class="it" style="--k:5"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg></i><b>SMBs &amp; manufacturing</b><span>office and shop floor</span></div>
      <div class="it" style="--k:6"><i data-gl="wifi"></i><b>Caf\xE9s &amp; public Wi-Fi</b><span>guest access, filtered</span></div>
      <div class="it" style="--k:7"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .8-5.2 4.8L18 21l-6-3.5L6 21l1.2-6.9L2 9.3l7-.8z"/></svg></i><b>Hotels &amp; hospitality</b><span>guest Wi-Fi at scale</span></div>
      <div class="it" style="--k:8"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></i><b>Branch offices</b><span>one cloud, many sites</span></div>
      <div class="it" style="--k:9"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></i><b>Financial services</b><span>banking portals protected</span></div>
      <div class="it" style="--k:10"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg></i><b>Freelancers &amp; remote pros</b><span>small setup, real security</span></div>
      <div class="it" style="--k:11"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg></i><b>Construction sites</b><span>quick, temporary networks</span></div>
      <div class="it" style="--k:12"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg></i><b>E-commerce warehouses</b><span>scanners and staff online</span></div>
      <div class="it" style="--k:13"><i data-gl="pad"></i><b>Gaming networks</b><span>bandwidth under control</span></div>
      <div class="it" style="--k:14"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3l5 3-5 3-5-3 5-3zM17 3l5 3-5 3-5-3 5-3zM12 12l5 3-5 3-5-3 5-3z"/><path d="M2 6v5l5 3M22 6v5l-5 3M7 15v4l5 3 5-3v-4"/></svg></i><b>Logistics &amp; warehousing</b><span>devices across the floor</span></div>
    </div>
  </div>
</section>

<!-- ================= PARTNERS / MSP ================= -->
<section class="sec" id="partners">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Designed for IT partners &amp; MSPs</span><h2 class="cb-kin">Many customers, many sites \u2014 <span class="acc">one Cybird Cloud view.</span></h2><p>Simplify deployments, manage multiple sites and deliver secure connectivity with the Cybird Cloud platform. XcellHost works with IT partners across India as Cybird's National Distributor.</p></div>
    <div class="cb-ms rv" id="cbMs">
      <div class="ms-map"><canvas id="cbMsCv" role="img" aria-label="Stylised map of India with sample customer sites in many cities linked to Cybird Cloud; pulses show monitoring, an alert appears on one site and is resolved, and a new site joins by zero touch provisioning. Illustrative."></canvas>
        <div class="ms-hd"><span class="st" id="cbMsN">Centralized management</span><em>illustrative sites</em></div>
        <div class="ms-ft" id="cbMsF"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg></i><span><b id="cbMsFb">Cybird Cloud</b><small id="cbMsFs">every site, one dashboard</small></span></div>
      </div>
      <ol class="ms-l" id="cbMsL">
        <li data-m="0" class="on"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg></i><span><b>Centralized management</b><small>Every customer and site in one console.</small></span><u></u></li>
        <li data-m="1"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></i><span><b>Multi-site visibility</b><small>See all locations and their status together.</small></span><u></u></li>
        <li data-m="2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg></i><span><b>Remote monitoring</b><small>Watch devices and traffic without a site visit.</small></span><u></u></li>
        <li data-m="3"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 16V11a6 6 0 00-12 0v5l-2 2h16zM10 20a2 2 0 004 0"/></svg></i><span><b>Smart alerts</b><small>Know when something needs attention.</small></span><u></u></li>
        <li data-m="4"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg></i><span><b>Simplified deployment</b><small>Zero touch provisioning for new sites.</small></span><u></u></li>
        <li data-m="5"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></i><span><b>Faster troubleshooting</b><small>Find and fix issues from the dashboard.</small></span><u></u></li>
      </ol>
    </div>
    <div class="cb-pb rv"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg><b>Become a Cybird partner</b> through XcellHost, the National Distributor</span><a href="#" class="btn btn-sm btn-orange cb-mag" data-open="xhCallback" data-topic="IT partner / MSP enquiry">Partner with us <span class="ar">\u2192</span></a></div>
  </div>
</section>

<!-- ================= PRICING ================= -->
<section class="sec" id="pricing">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Plans &amp; pricing</span><h2 class="cb-kin">Cybird security appliance bundles \u2014 <span class="acc">hardware + security, one price.</span></h2><p>Pick your team size and term. Longer terms cost less per year; the saving shown is calculated against buying one year at a time. All prices in INR, plus 18% GST.</p></div>
    <div class="cb-tm rv" id="cbTm" role="tablist" aria-label="Term"><button type="button" data-t="1" class="on">1 year</button><button type="button" data-t="2">2 years<small data-sv="2"></small></button><button type="button" data-t="3">3 years<small data-sv="3"></small></button><button type="button" data-t="5">5 years<small data-sv="5"></small></button><span class="ul" aria-hidden="true"></span></div>
    <div class="cb-pr">
      <div class="ez-card rv" id="pcard"><span class="ez-off">Free trial</span>
        <div class="ez-top"><span class="ez-ms"><span class="cb-g">C</span>Cybird</span><a class="ez-ext" href="#configure" aria-label="Configure"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg></a></div>
        <div class="ez-fam">XcellSecure \xB7 Cybird X2 bundle</div>
        <h3 id="pcName">Cybird Essentials</h3>
        <div class="ez-sku" id="pcSku">hardware + security bundle \xB7 up to 10 users</div>
        <div class="ez-row"><span>Term</span><b class="ez-from" id="pcTerm">1 year</b></div>
        <div class="ez-row"><span>Starting from</span><b class="ez-from" id="pcFrom">\u20B914,999 + GST</b></div>
        <div class="ez-gst">bundle \xB7 excl. GST</div>
        <div class="ez-pr"><span class="ez-tag m">Term price</span><span><span class="ez-amt" id="pcT">\u20B90</span></span></div>
        <div class="ez-pr"><span class="ez-tag y">Per year</span><span><span class="ez-amt" id="pcY">\u20B90</span> <small style="color:#9fb6de">/ yr</small></span></div>
        <div class="ez-save"><span id="pcSvL">vs paying yearly</span><b id="pcPill">\u2014</b></div>
        <div class="ez-cta"><a href="tel:+912267111555"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>Call now</a><a class="q" href="#" data-open="xhCallback" data-topic="Cybird \u2014 quotation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>Get quotation</a></div>
        <a href="#" class="ez-buy" style="display:block;text-align:center" data-open="xhCallback" data-topic="Cybird \u2014 free trial">Ask for a FREE trial \u2192</a>
        <div class="ez-gst" style="text-align:center;margin:10px 0 0">Brochure prices \xB7 INR + 18% GST</div>
      </div>
      <div class="cb-pl rv" id="cbPl" role="radiogroup" aria-label="Plan"></div>
    </div>
    <div class="cb-ex">
      <article class="hwc rv cb-tl"><span class="hi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg></span><span class="ht"><small>Customer hardware appliance</small><b>Cybird cyber security hardware appliance</b><em>Extra or additional appliance</em></span><span class="hp"><b data-pr="hw">\u20B916,999</b><small>one-time + GST</small></span></article>
      <div class="spc rv" data-d="1"><div class="sh3"><span class="vt-k"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>Optional support charges</span><em>per month \xB7 plus taxes</em></div>
        <div class="sg" id="cbSg">
          <div data-b="0" style="--k:0"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg></i><span>1 to 10 employees</span><b data-pr="s0">\u20B9999</b></div>
          <div data-b="1" style="--k:1"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg></i><span>10 to 24 employees</span><b data-pr="s1">\u20B91,499</b></div>
          <div data-b="2" style="--k:2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg></i><span>24 to 50 employees</span><b data-pr="s2">\u20B91,999</b></div>
          <div data-b="3" style="--k:3"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg></i><span>50 to 100 employees</span><b data-pr="s3">\u20B93,999</b></div>
        </div></div>
    </div>

    <div class="calc rv" id="configure">
      <div class="cin">
        <div class="fld"><label for="cEmp">Employees on the network <small id="cEmpL">8 employees</small></label>
          <div class="seats"><div class="stp"><button type="button" data-step="-1" aria-label="Fewer employees">\u2212</button><input type="number" id="cEmpN" min="1" max="100" value="8" aria-label="Employees"><button type="button" data-step="1" aria-label="More employees">+</button></div>
          <input class="rng" type="range" id="cEmp" min="1" max="100" step="1" value="8" aria-label="Employees slider"></div>
          <div class="cbands" id="cBands"><button type="button" data-g="5">5</button><button type="button" data-g="10">10</button><button type="button" data-g="20">20</button><button type="button" data-g="25">25</button><button type="button" data-g="40">40</button><button type="button" data-g="50">50</button><button type="button" data-g="75">75</button><button type="button" data-g="100">100</button></div></div>
        <div class="fld"><span class="lb">Plan <small id="cPlanL">suggested: Essentials</small></span>
          <div class="seg cb-ps" id="cPlan"><button data-v="ess" class="on">Essentials<small>\u2264 10</small></button><button data-v="plus">Plus<small>\u2264 25</small></button><button data-v="pro">Pro<small>\u2264 50</small></button><button data-v="max">Max<small>\u2264 100</small></button></div>
          <p class="c-min" id="cMin"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg><span id="cMinT">This plan covers fewer users than your team.</span></p></div>
        <div class="fld"><span class="lb">Term <small id="cTermL">1 year</small></span>
          <div class="seg" id="cTerm"><button data-v="1" class="on">1 year</button><button data-v="2">2 years<small data-sv="2"></small></button><button data-v="3">3 years<small data-sv="3"></small></button><button data-v="5">5 years<small data-sv="5"></small></button></div></div>
        <label class="tgl" for="cSup"><input type="checkbox" id="cSup"><span class="sw"></span><span>Optional support plan <b id="cSupP">\u20B9999</b> / month<small id="cSupS">1 to 10 employees bracket \xB7 billed for every month of the term.</small></span></label>
        <div class="fld"><label for="cHwN">Additional hardware appliances <small id="cHwL">none</small></label>
          <div class="seats"><div class="stp"><button type="button" data-step="-1" aria-label="Fewer appliances">\u2212</button><input type="number" id="cHwN" min="0" max="20" value="0" aria-label="Additional appliances"><button type="button" id="cHwP" data-step="1" aria-label="More appliances">+</button></div><span class="c-hw"><b data-pr="hw">\u20B916,999</b> each \xB7 one-time \xB7 e.g. a branch or a spare</span></div></div>
      </div>
      <div class="cout" aria-live="polite">
        <span class="ck">Your Cybird estimate</span>
        <div class="ctot" id="oTot">\u20B90</div>
        <div class="csub" id="oSub">for the term, excl. GST</div>
        <div class="crows" id="oRows"></div>
        <div class="crows">
          <div class="crow save"><span id="oSvL">Term saving vs 1-year renewals</span><b id="oSv">\u20B90</b></div>
          <div class="crow"><span>Subtotal, excl. GST</span><b id="oSt">\u20B90</b></div>
          <div class="crow"><span>GST (18%)</span><b id="oGst">\u20B90</b></div>
          <div class="crow"><span>Payable incl. GST</span><b id="oPay">\u20B90</b></div>
        </div>
        <div class="cef cb-cb"><div class="cef-h"><span>Effective cost per user / month</span><em id="oPum">\u20B90</em></div><div class="cb-t" id="oCb"><i style="background:#1565D8"></i><i style="background:#FF8C1A"></i><i style="background:#5FE08D"></i></div><div class="cb-l"><span><i style="background:#1565D8"></i>bundle</span><span><i style="background:#FF8C1A"></i>support</span><span><i style="background:#5FE08D"></i>hardware</span></div></div>
        <div class="cact"><button class="btn btn-orange btn-block cb-mag" id="oAdd" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg> Add to cart</button><button class="btn btn-line btn-block" data-open="xhCallback" data-topic="Schedule 1:1 demo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg> Schedule 1:1 demo</button><button class="btn btn-line btn-block cb-tr" data-open="xhCallback" data-topic="Cybird \u2014 free trial"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zM12 8s2-5 4.5-3.5S15 8 12 8z"/></svg> Ask for a FREE trial</button></div>
        <div class="cfine">Brochure prices in INR, excluding 18% GST. Bundles include hardware + security for the chosen term. Support is optional and billed per month of the term. Additional appliances are one-time.</div>
      </div>
    </div>
  </div>
</section>

<!-- ================= IN THE BOX + MADE IN INDIA ================= -->
<section class="sec" id="inbox">
  <div class="wrap">
    <div class="cb-ib">
      <div class="ib rv" id="cbIb">
        <div class="ib-h"><span class="vt-k"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8l-9-5-9 5 9 5 9-5z"/><path d="M3 8v8l9 5 9-5V8M12 13v8"/></svg>In the box</span><button type="button" class="ib-r" id="cbIbR"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg> Unbox again</button></div>
        <div class="ib-s">
          <div class="bx" aria-hidden="true"><span class="lid"></span><span class="body"><b>CYBIRD X2</b></span></div>
          <div class="ib-i">
            <div style="--k:0"><i data-gl="router"></i><b>Cybird X2 device</b></div>
            <div style="--k:1"><i data-gl="plug"></i><b>Power adapter</b></div>
            <div style="--k:2"><i data-gl="cable"></i><b>Ethernet cable</b></div>
            <div style="--k:3"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg></i><b>Quick start guide</b></div>
          </div>
        </div>
      </div>
      <div class="mi rv" data-d="1" id="cbMi">
        <span class="mi-k"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 22V4M4 4h12l-2 4 2 4H4"/></svg>Made in India</span>
        <h3>Made in India. <span>Securing India.</span></h3>
        <p>Enterprise-grade security, built for SMBs \u2014 by Cybird (Netrakshak Technologies), distributed and supported nationally by XcellHost from Mumbai.</p>
        <div class="mi-s"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Easy to deploy</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>24\xD77 protection</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3a3 3 0 00-3 3 3 3 0 00-2 5 3 3 0 001 5 3 3 0 005 3V3zM15 3a3 3 0 013 3 3 3 0 012 5 3 3 0 01-1 5 3 3 0 01-5 3V3z"/></svg>AI-powered security</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>Centralized management</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="6" height="8" rx="1"/><rect x="15" y="8" width="6" height="8" rx="1"/><path d="M9 12h6M12 9l3 3-3 3"/></svg>Scalable &amp; future ready</span></div>
        <span class="mi-tri" aria-hidden="true"><i></i><i></i><i></i></span>
      </div>
    </div>
  </div>
</section>

<section class="sec" id="why">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Why buy through XcellHost</span><h2>Cybird, <span class="acc">distributed and supported by XcellHost.</span></h2><p>XcellHost is Cybird's National Distributor in India \u2014 a Mumbai team that has run cloud and security for Indian businesses since 1999.</p></div>
    <div class="dband rv"><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></i><span><b>Rupee billing, GST invoice</b><p>Bundles, hardware and support on one GST invoice in INR.</p></span><span class="n">01</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg></i><span><b>1:1 demo &amp; free trial</b><p>See Cybird on your own network before you commit.</p></span><span class="n">02</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg></i><span><b>Set-up help</b><p>We help you plan Wi-Fi, users, guest access and policies, then go live.</p></span><span class="n">03</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></i><span><b>Branches and partners</b><p>Multi-site rollouts and a channel for IT partners and MSPs nationwide.</p></span><span class="n">04</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg></i><span><b>Support from Mumbai</b><p>Phone, WhatsApp and email, with optional monthly support plans.</p></span><span class="n">05</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></i><span><b>Certified operations</b><p>ISO 27001, 27017, 27018 and 20000-1 and SOC 2 in our own operations.</p></span><span class="n">06</span></div></div>
    <div class="cb-mq rv" aria-label="What Cybird covers">
      <span class="mq-l">All in one box</span>
      <div class="mq-w"><div class="mq-m"><span data-gl2="wifi">Business Wi-Fi 6</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Advanced firewall</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>Secure web gateway</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>DNS filtering</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>App &amp; bandwidth control</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>WPA2-Enterprise</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>Network access control</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Zero touch provisioning</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>WireGuard VPN</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>Multi-WAN</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>Reports &amp; alerts</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>Cybird Cloud</span><span data-gl2="wifi">Business Wi-Fi 6</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>Advanced firewall</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>Secure web gateway</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="6" rx="1.5"/><rect x="3" y="15" width="18" height="6" rx="1.5"/><path d="M12 9v6M7 6h.01M7 18h.01"/></svg>DNS filtering</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8z"/></svg>App &amp; bandwidth control</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>WPA2-Enterprise</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg>Network access control</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Zero touch provisioning</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg>WireGuard VPN</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>Multi-WAN</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>Reports &amp; alerts</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>Cybird Cloud</span></div></div>
    </div>
  </div>
</section>

<!-- ================= WHY ================= -->


<!-- ================= VIDEO ================= -->


<!-- ================= FAQ ================= -->
<section class="sec cybird-assurance" id="cybird-assurance" aria-labelledby="cybirdSecurityTitle">
  <div class="wrap">
    <h2 class="assurance-heading" id="cybirdSecurityTitle">Security &amp; compliance \u2014 Cybird X2</h2>
    <p class="assurance-intro">Cybird X2 combines per-user Wi-Fi access, network segmentation, an advanced firewall, secure web gateway and DNS filtering in one appliance. Give staff, office devices and guests separate access, apply application and bandwidth policies, and use Cybird Cloud alerts and reports to keep track of your network.</p>
    <dl class="cybird-security-grid">
      <div><dt>Wi-Fi identity</dt><dd>Per-user WPA2-Enterprise access</dd></div>
      <div><dt>Network separation</dt><dd>Staff, IoT and guest VLANs</dd></div>
      <div><dt>Threat filtering</dt><dd>Firewall, secure web gateway and DNS filtering</dd></div>
      <div><dt>Policy controls</dt><dd>Application and bandwidth policies</dd></div>
      <div><dt>Remote access</dt><dd>WireGuard VPN</dd></div>
      <div><dt>Visibility</dt><dd>Cybird Cloud alerts and reports</dd></div>
    </dl>
    <p class="assurance-note">XcellHost's ISO 27001, 27017, 27018 and 20000-1 and SOC 2 certifications cover its own operations.</p>

    <h3 class="assurance-heading" id="cybirdSupportTitle">Why XcellHost for Cybird X2</h3>
    <div class="dband" aria-labelledby="cybirdSupportTitle">
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l3 3 4 .6.6 4 2 3-3 3-.6 4-4 .6-3-2-3 2-.6-4-3-3 2-3 .6-4 4-.6z"/><path d="M9 12l2 2 4-4"/></svg></i><span><b>National Distributor</b><p>Cybird bundles, hardware and support through XcellHost in India.</p></span><span class="n" aria-hidden="true">01</span></div>
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></i><span><b>Since 1999</b><p>Experience running cloud and security for Indian businesses.</p></span><span class="n" aria-hidden="true">02</span></div>
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7h16M4 17h16M8 3v8M16 13v8"/><circle cx="8" cy="7" r="2"/><circle cx="16" cy="17" r="2"/></svg></i><span><b>Help with set-up</b><p>Plan Wi-Fi, users, guest access and policies before going live.</p></span><span class="n" aria-hidden="true">03</span></div>
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg></i><span><b>Support from Mumbai</b><p>Phone, WhatsApp and email, with optional monthly support plans.</p></span><span class="n" aria-hidden="true">04</span></div>
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4M9 15l2 2 4-4"/></svg></i><span><b>1:1 demo &amp; free trial</b><p>See Cybird on your own network before you commit.</p></span><span class="n" aria-hidden="true">05</span></div>
      <div><i aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></i><span><b>Rupee billing, GST invoice</b><p>Bundles, hardware and support on one GST invoice in INR.</p></span><span class="n" aria-hidden="true">06</span></div>
    </div>

    <h3 class="assurance-heading" id="cybirdReviewsTitle">What customers say</h3>
    <div class="cybird-review-grid" aria-labelledby="cybirdReviewsTitle">`, `</div>
  </div>
</section>

<section class="sec" id="faq">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">FAQ</span><h2>Questions, <span class="acc">answered.</span></h2></div>
    <div class="faq rv">
      <div class="fq open"><button aria-expanded="true">What is included in a Cybird bundle?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Each Cybird security appliance bundle is sold as hardware + security for the term you choose (1, 2, 3 or 5 years): the Cybird X2 appliance with business Wi-Fi, advanced firewall, secure web gateway and DNS filtering, smart controls, insights and cloud management. Plans differ by the number of users covered: Essentials up to 10, Plus up to 25, Pro up to 50 and Max up to 100.</p></div></div>
      <div class="fq"><button aria-expanded="false">Do I need to buy the \u20B916,999 hardware appliance separately?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>The brochure describes the plans as bundles of hardware + security, so a bundle is what you buy to get started. The \u20B916,999 (+ GST) customer hardware appliance price applies when you want an additional or spare appliance \u2014 for example for another branch. XcellHost will confirm exactly what your quote includes before you order.</p></div></div>
      <div class="fq"><button aria-expanded="false">Will Cybird X2 work with my internet provider?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Cybird X2 connects to your existing broadband or fibre connection through its gigabit WAN port and takes over Wi-Fi, security and control for the office behind it. During set-up XcellHost checks how your provider's line is delivered so the connection is configured correctly.</p></div></div>
      <div class="fq"><button aria-expanded="false">Does it support Wi-Fi 6?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. Cybird X2 has dual-band 802.11ax (Wi-Fi 6) on 2.4 GHz and 5 GHz with 2\xD72 MU-MIMO and link rates up to 1200 Mbps, plus four gigabit LAN ports for wired devices.</p></div></div>
      <div class="fq"><button aria-expanded="false">How many users can one Cybird handle?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Bundles are sized by users: up to 10 (Essentials), 25 (Plus), 50 (Pro) or 100 (Max). Firewall throughput is up to 900 Mbps*, depending on the services you enable, your configuration and deployment. Use the configurator above to pick a plan for your team size.</p></div></div>
      <div class="fq"><button aria-expanded="false">Can I connect two internet lines (multi-WAN)?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Cybird lists multi-WAN high availability among the X2's capabilities, so the office can stay online if one link drops. The X2 has one dedicated WAN port; XcellHost will confirm how a second line is connected for your set-up.</p></div></div>
      <div class="fq"><button aria-expanded="false">Is there a VPN for staff working remotely?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. Cybird X2 supports WireGuard VPN with throughput up to 300 Mbps*, so remote and work-from-home staff can reach the office securely. *Performance depends on enabled services, configuration and deployment conditions.</p></div></div>
      <div class="fq"><button aria-expanded="false">Do I need an IT person to manage it?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>No. Cybird is cloud-managed: settings, policies, alerts and reports live in Cybird Cloud and can be managed from anywhere. Zero touch provisioning automates device setup, so a new site needs very little manual configuration. IT partners and MSPs can manage many customers from the same platform.</p></div></div>
      <div class="fq"><button aria-expanded="false">Who sets it up?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>XcellHost helps you plan users, guest Wi-Fi and policies and get the appliance live. Zero touch provisioning means the device pulls its configuration from Cybird Cloud once connected. Set-up options for your location are confirmed with your quote.</p></div></div>
      <div class="fq"><button aria-expanded="false">What warranty comes with Cybird X2?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>A 1-year standard warranty, which can be extended. The X2 is CE, FCC and RoHS compliant.</p></div></div>
      <div class="fq"><button aria-expanded="false">Can I try it before I buy?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. Ask for a FREE trial or schedule a 1:1 demo with XcellHost and see Cybird on your own network. Call +91 22 6711 1555, WhatsApp +91 86570 32540 or email sales@xcellhost.cloud.</p></div></div>
      <div class="fq"><button aria-expanded="false">We are an IT partner or MSP. Can we work with Cybird?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. Cybird is designed for IT partners and MSPs, with centralized management, multi-site visibility, remote monitoring, smart alerts, simplified deployment and faster troubleshooting. XcellHost, as National Distributor, onboards partners across India.</p></div></div>
    </div>
  </div>
</section>

<!-- ================= CTA ================= -->
<section class="sec" id="contact">
  <div class="wrap">
    <div class="lcta rv">
      <div><h2>Secure your network today.</h2><p class="sub">Schedule a 1:1 demo or ask for a FREE trial of Cybird X2. XcellHost Cloud Services Pvt Ltd, 209 Laxmi Plaza, Bldg No. 9, Laxmi Industrial Estate, Andheri (W), Mumbai 400053.</p>
        <div class="row"><button class="btn btn-orange cb-mag" data-open="xhCallback" data-topic="Schedule 1:1 demo">Schedule 1:1 demo \u2192</button><button class="btn b-w" data-open="xhCallback" data-topic="Cybird \u2014 free trial"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zM12 8s2-5 4.5-3.5S15 8 12 8z"/></svg> Ask for a FREE trial</button><a class="btn b-w" href="tel:+912267111555"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg> +91-22-67111555</a><a class="btn b-w" href="https://wa.me/918657032540" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg> +91 86570 32540</a><a class="btn b-w" href="mailto:sales@xcellhost.cloud"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg> sales@xcellhost.cloud</a></div></div>
      <div class="seal"><img src="https://www.xcellhost.top/assets/images/partner-handshake.svg" alt="" loading="lazy" onerror="this.onerror=null;this.parentNode.classList.add('noimg')"><span class="sl">CYBIRD<br>NATIONAL DISTRIBUTOR</span></div>
    </div>
    <div class="proof rv"><span>ISO 9001 \xB7 27001 \xB7 27017 \xB7 27018 \xB7 20000-1</span><span>SOC 2 Type I &amp; II</span><span>MeitY empanelled</span><span>24\xD77 NOC &amp; SOC</span><span>Since 1999 \xB7 Mumbai</span></div>
  </div>
</section>

<!-- ================= RELATED ================= -->
<section class="sec" id="family">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Related services</span><h2>More layers <span class="acc">around your network.</span></h2></div>
    <div class="cb-xs">
      <a class="xsib rv" href="/network-access-control-nac" target="_top"><span class="xi1" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 11v3a8 8 0 01-2 5M8 7.5A6 6 0 0118 11v1M6 11a6 6 0 01.5-2.5M16 14a14 14 0 01-1 5M4 15c.5-1.3.5-2.6.5-4"/></svg></i></span><span class="xt"><small>Larger networks</small><b>Genian Network Access Control</b></span><span class="xa">Explore <span class="ar">\u2192</span></span></a>
      <a class="xsib rv" data-d="1" href="/managed-microsoft-sentinel" target="_top"><span class="xi1 o" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></i></span><span class="xt"><small>SIEM \xB7 SOC</small><b>Managed Microsoft Sentinel</b></span><span class="xa">Explore <span class="ar">\u2192</span></span></a>
      <a class="xsib rv" data-d="2" href="/acronis-direct-cloud-backup" target="_top"><span class="xi1 g" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9"/><path d="M12 12v8M9 15l3-3 3 3"/></svg></i></span><span class="xt"><small>Backup</small><b>Acronis Direct Cloud Backup</b></span><span class="xa">Explore <span class="ar">\u2192</span></span></a>
      <a class="xsib rv" href="/website-security-solutions" target="_top"><span class="xi1" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V8a4 4 0 018 0v3"/></svg></i></span><span class="xt"><small>TLS &amp; seals</small><b>Website Security Solutions</b></span><span class="xa">Explore <span class="ar">\u2192</span></span></a>
      <a class="xsib rv" data-d="1" href="#simulate"><span class="xi1 o" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg></i></span><span class="xt"><small>Try it</small><b>Threat simulator</b></span><span class="xa">Open <span class="ar">\u2192</span></span></a>
      <a class="xsib rv" data-d="2" href="#configure"><span class="xi1 g" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg></i></span><span class="xt"><small>You are here</small><b>Cybird X2 bundles</b></span><span class="xa">Build <span class="ar">\u2192</span></span></a>
    </div>
  </div>
</section>

</main>
<script>
/* XcellHost v2 core runtime \u2014 exposes window.XH */
(function(){
  'use strict';
  var d=document,root=d.documentElement;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia('(pointer:fine)').matches;
  function $(s,c){return (c||d).querySelector(s);} function $$(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));}
  function store(k,v){try{if(v===undefined){return JSON.parse(localStorage.getItem(k));}localStorage.setItem(k,JSON.stringify(v));}catch(e){return null;}}
  var XH=window.XH={reduce:reduce,fine:fine,$:$,$$:$$,store:store};
  XH.inr=function(n,dec){n=+n||0;return '\u20B9'+n.toLocaleString('en-IN',{minimumFractionDigits:dec||0,maximumFractionDigits:dec||0});};

  /* ---------- toast ---------- */
  var toastEl=$('#xhToast'),toastT,tt;
  XH.toast=function(m){if(!toastEl)return;$('#xhToastT').textContent=m;toastEl.classList.add('on');clearTimeout(tt);tt=setTimeout(function(){toastEl.classList.remove('on');},2600);};

  /* ---------- theme ---------- */
  var tbtn=$('#xhTheme');
  function paintTheme(){var dk=root.getAttribute('data-theme')==='dark';if(tbtn){$('.tl',tbtn).textContent=dk?'Dark':'Light';tbtn.setAttribute('aria-pressed',dk);}}
  if(tbtn)tbtn.addEventListener('click',function(){var dk=root.getAttribute('data-theme')!=='dark';root.setAttribute('data-theme',dk?'dark':'light');try{localStorage.setItem('xh-theme',dk?'dark':'light');}catch(e){}paintTheme();d.dispatchEvent(new CustomEvent('xh:theme',{detail:{dark:dk}}));});
  paintTheme();
  XH.dark=function(){return root.getAttribute('data-theme')==='dark';};

  /* ---------- header, progress ---------- */
  var hdr=$('#xhHdr'),prog=$('#xhProgress');
  function onScroll(){var y=window.scrollY,h=d.documentElement.scrollHeight-innerHeight;if(prog)prog.style.width=(h>0?y/h*100:0)+'%';if(hdr)hdr.classList.toggle('scrolled',y>8);}
  addEventListener('scroll',onScroll,{passive:true});onScroll();

  /* ---------- mega menu ---------- */
  var nis=$$('#xhNav .ni'),hoverT;
  function closeMega(except){nis.forEach(function(n){if(n!==except){n.classList.remove('open');$('button',n).setAttribute('aria-expanded','false');}});}
  nis.forEach(function(n){
    var b=$('button',n);
    b.addEventListener('click',function(e){e.stopPropagation();var o=!n.classList.contains('open');closeMega(n);n.classList.toggle('open',o);b.setAttribute('aria-expanded',o);});
    if(fine){n.addEventListener('mouseenter',function(){clearTimeout(hoverT);hoverT=setTimeout(function(){closeMega(n);n.classList.add('open');b.setAttribute('aria-expanded','true');},90);});
      n.addEventListener('mouseleave',function(){clearTimeout(hoverT);hoverT=setTimeout(function(){n.classList.remove('open');b.setAttribute('aria-expanded','false');},160);});}
  });
  d.addEventListener('click',function(e){if(!e.target.closest('#xhNav'))closeMega();});

  /* ---------- mobile nav ---------- */
  var mnav=$('#xhMnav');
  function mOpen(o){if(!mnav)return;mnav.classList.toggle('open',o);mnav.setAttribute('aria-hidden',!o);d.body.classList.toggle('lock',o);}
  var bg=$('#xhBurger');if(bg)bg.addEventListener('click',function(){mOpen(true);});
  $$('[data-mclose]').forEach(function(x){x.addEventListener('click',function(){mOpen(false);});});
  if(mnav)mnav.addEventListener('click',function(e){if(e.target.tagName==='A')mOpen(false);});

  /* ---------- modals ---------- */
  var lastFocus=null;
  XH.open=function(id,opts){var m=d.getElementById(id);if(!m)return;lastFocus=d.activeElement;m.classList.add('open');d.body.classList.add('lock');
    if(opts&&opts.topic){var s=$('#xhCbTopic');if(s){ensureTopic(opts.topic);s.value=opts.topic;}}
    setTimeout(function(){var f=$('input:not([type=hidden]),select,textarea,button.x',m);if(f)f.focus();},60);
    m.dispatchEvent(new CustomEvent('xh:open',{detail:opts||{}}));};
  XH.close=function(id){var m=typeof id==='string'?d.getElementById(id):id;if(!m)return;m.classList.remove('open');if(!$('.modal.open')&&!$('.cart.open'))d.body.classList.remove('lock');if(lastFocus&&lastFocus.focus)lastFocus.focus();};
  d.addEventListener('click',function(e){
    var o=e.target.closest('[data-open]');if(o){e.preventDefault();var opts={topic:o.getAttribute('data-topic')};XH.open(o.getAttribute('data-open'),opts);return;}
    var c=e.target.closest('[data-close]');if(c){XH.close(c.closest('.modal'));}
  });
  var vb=$('.cvid');if(vb)vb.addEventListener('click',function(){var yt=vb.getAttribute('data-yt');if(yt){var box=$('#xhVideo .mc > div');if(box)box.innerHTML='<iframe src="'+yt+'" style="width:100%;height:100%;border:0;border-radius:14px" allow="autoplay; encrypted-media" allowfullscreen></iframe>';}});

  /* ---------- callback topics ---------- */
  function ensureTopic(t){var s=$('#xhCbTopic');if(!s||!t)return;if(!$$('option',s).some(function(o){return o.value===t;})){var op=d.createElement('option');op.textContent=t;s.appendChild(op);}}
  (window.XH_TOPICS||[]).forEach(ensureTopic);

  /* ---------- forms (validation + lead capture) ---------- */
  var handlers={};
  XH.onForm=function(name,fn){handlers[name]=fn;};
  function validField(inp){var w=inp.closest('.fi');var ok=inp.checkValidity()&&!(inp.required&&!String(inp.value).trim());if(w)w.classList.toggle('err',!ok);return ok;}
  d.addEventListener('submit',function(e){
    var f=e.target.closest('[data-xhform]');if(!f)return;e.preventDefault();
    var ok=true,first=null;$$('input,select,textarea',f).forEach(function(i){if(!validField(i)){ok=false;first=first||i;}});
    if(!ok){if(first)first.focus();return;}
    var data={};$$('input,select,textarea',f).forEach(function(i){if(i.name)data[i.name]=i.type==='checkbox'?i.checked:i.value;});
    var name=f.getAttribute('data-xhform');data._form=name;data._page=location.pathname.split('/').pop();data._at=new Date().toISOString();
    var leads=store('xh-leads')||[];leads.push(data);store('xh-leads',leads.slice(-50));
    d.dispatchEvent(new CustomEvent('xh:lead',{detail:data}));
    if(handlers[name]&&handlers[name](data,f)===false)return;
    if(name==='newsletter'){f.reset();XH.toast('Subscribed \u2014 thank you!');return;}
    var mc=f.closest('.mc')||f.parentNode;
    var msg=f.getAttribute('data-done')||'Thanks, '+(data.name?data.name.split(' ')[0]:'there')+'! Our team will be in touch shortly.';
    mc.innerHTML='<div class="done"><div class="dk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></div><h4>Request received</h4><p>'+msg+'</p></div>';
    XH.toast('Request received');
  });
  d.addEventListener('input',function(e){var w=e.target.closest&&e.target.closest('.fi.err');if(w)validField(e.target);});

  /* ---------- cart ---------- */
  var CART=store('xh-cart')||[];
  var cartEl=$('#xhCart'),cnt=$('#xhCartCnt');
  function cartSave(){store('xh-cart',CART);}
  function cartRender(){
    var box=$('#xhCartItems');if(!box)return;
    if(!CART.length){box.innerHTML='<div class="empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg>Your cart is empty.<br>Configure a plan to get started.</div>';}
    else box.innerHTML=CART.map(function(it,i){return '<div class="it"><div class="t"><div><b>'+it.name+'</b><small>'+(it.sub||'')+'</small></div><button class="rm" data-rm="'+i+'" aria-label="Remove"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg></button></div><div class="bt"><span class="q"><button data-dq="'+i+'" aria-label="Decrease">\u2212</button><span>'+it.qty+'</span><button data-iq="'+i+'" aria-label="Increase">+</button></span><span class="pz">'+XH.inr(it.price*it.qty)+'</span></div></div>';}).join('');
    var q=CART.reduce(function(a,b){return a+b.qty;},0),sub=CART.reduce(function(a,b){return a+b.price*b.qty;},0);
    if(cnt){cnt.textContent=q;cnt.classList.toggle('on',q>0);}
    $('#xhCartN').textContent=q+(q===1?' item':' items');$('#xhCartSub').textContent=XH.inr(sub);$('#xhCartGst').textContent=XH.inr(sub*.18);$('#xhCartTot').textContent=XH.inr(sub*1.18);
  }
  function bump(){if(!cnt)return;cnt.classList.remove('bump');void cnt.offsetWidth;cnt.classList.add('bump');}
  function cartOpen(o){if(!cartEl)return;cartEl.classList.toggle('open',o);cartEl.setAttribute('aria-hidden',!o);d.body.classList.toggle('lock',o||!!$('.modal.open'));}
  XH.cart={add:function(it){it.qty=it.qty||1;var ex=CART.filter(function(c){return c.key&&c.key===it.key;})[0];if(ex)ex.qty+=it.qty;else CART.push(it);cartSave();cartRender();bump();XH.toast('Added to cart \u2014 '+it.name);cartOpen(true);},open:function(){cartOpen(true);},items:function(){return CART.slice();}};
  if(cartEl){cartEl.addEventListener('click',function(e){
    var t=e.target.closest('[data-rm],[data-iq],[data-dq],[data-cclose]');if(!t)return;
    if(t.hasAttribute('data-cclose')){cartOpen(false);return;}
    if(t.hasAttribute('data-rm'))CART.splice(+t.getAttribute('data-rm'),1);
    if(t.hasAttribute('data-iq'))CART[+t.getAttribute('data-iq')].qty++;
    if(t.hasAttribute('data-dq')){var i=+t.getAttribute('data-dq');if(CART[i].qty>1)CART[i].qty--;else CART.splice(i,1);}
    cartSave();cartRender();bump();});}
  var cb=$('#xhCartBtn');if(cb)cb.addEventListener('click',function(){cartOpen(true);});
  cartRender();

  /* ---------- search ---------- */
  var sr=$('#xhSearch'),si=$('#xhSearchIn'),res=$('#xhSearchRes'),hl=0,hits=[];
  function sOpen(o){if(!sr)return;sr.classList.toggle('open',o);d.body.classList.toggle('lock',o);if(o){si.value='';sRun();setTimeout(function(){si.focus();},30);}}
  function sRun(){var q=si.value.trim().toLowerCase();var idx=window.XH_INDEX||[];
    hits=idx.filter(function(x){return !q||(x.n+' '+x.d+' '+x.c).toLowerCase().indexOf(q)>-1;}).slice(0,12);hl=0;
    res.innerHTML=hits.length?hits.map(function(x,i){return '<a href="'+x.h+'"'+(i===0?' class="hl"':'')+'><b>'+x.n+'</b><span>'+x.c+' \xB7 '+x.d+'</span></a>';}).join(''):'<div class="none">No matches for \u201C'+si.value.replace(/</g,'&lt;')+'\u201D. Try \u201Ccloud\u201D, \u201Cemail\u201D or <a href="#" data-open="xhCallback" style="color:var(--blue);font-weight:600">ask an expert</a>.</div>';}
  if(sr){$('#xhSearchBtn').addEventListener('click',function(){sOpen(true);});si.addEventListener('input',sRun);
    sr.addEventListener('click',function(e){if(e.target===sr)sOpen(false);if(e.target.closest('a'))sOpen(false);});
    si.addEventListener('keydown',function(e){var as=$$('a',res);if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();hl=(hl+(e.key==='ArrowDown'?1:-1)+as.length)%Math.max(as.length,1);as.forEach(function(a,i){a.classList.toggle('hl',i===hl);});}else if(e.key==='Enter'&&as[hl]){location.href=as[hl].getAttribute('href');sOpen(false);}});}
  d.addEventListener('keydown',function(e){
    if(e.key==='Escape'){if(sr&&sr.classList.contains('open'))sOpen(false);var m=$('.modal.open');if(m)XH.close(m);if(cartEl&&cartEl.classList.contains('open'))cartOpen(false);if(mnav&&mnav.classList.contains('open'))mOpen(false);closeMega();}
    if((e.key==='k'&&(e.ctrlKey||e.metaKey))||(e.key==='/'&&!/input|textarea|select/i.test(d.activeElement.tagName))){e.preventDefault();sOpen(true);}
  });

  /* ---------- reveal, counters ---------- */
  var io='IntersectionObserver' in window?new IntersectionObserver(function(en){en.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');if(x.target.hasAttribute('data-count'))countUp(x.target);io.unobserve(x.target);}});},{threshold:.14,rootMargin:'0px 0px -40px 0px'}):null;
  XH.observe=function(scope){$$('.rv,[data-count],.step',scope).forEach(function(el){if(io)io.observe(el);else el.classList.add('in');});};
  function countUp(el){var to=parseFloat(el.getAttribute('data-count')),dec=+(el.getAttribute('data-dec')||0),pre=el.getAttribute('data-pre')||'',suf=el.getAttribute('data-suf')||'';
    if(reduce){el.textContent=pre+to.toLocaleString('en-IN',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;return;}
    var t0=null,dur=1400;function f(t){t0=t0||t;var p=Math.min(1,(t-t0)/dur),e=1-Math.pow(1-p,4);el.textContent=pre+(to*e).toLocaleString('en-IN',{minimumFractionDigits:dec,maximumFractionDigits:dec})+suf;if(p<1)requestAnimationFrame(f);}requestAnimationFrame(f);}
  XH.observe();

  /* ---------- FAQ ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('.fq > button');if(!b)return;var q=b.parentNode,a=$('.fa',q),o=!q.classList.contains('open');q.classList.toggle('open',o);b.setAttribute('aria-expanded',o);a.style.maxHeight=o?a.scrollHeight+'px':'0px';});
  function resizeFaqs(){$$('.fq.open .fa').forEach(function(a){var height=a.scrollHeight+'px';if(a.style.maxHeight!==height)a.style.maxHeight=height;});}
  resizeFaqs();addEventListener('resize',resizeFaqs);
  if(d.fonts&&d.fonts.ready)d.fonts.ready.then(resizeFaqs);

  /* ---------- tabs: <div data-tabs="g"><button data-tab="k">\u2026  panels: <div data-panel="k" data-group="g"> ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('[data-tabs] [data-tab]');if(!b)return;var bar=b.closest('[data-tabs]'),g=bar.getAttribute('data-tabs'),k=b.getAttribute('data-tab');
    $$('[data-tab]',bar).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-selected',x===b);});
    $$('[data-panel][data-group="'+g+'"]').forEach(function(p){p.classList.toggle('on',p.getAttribute('data-panel')===k);});
    bar.dispatchEvent(new CustomEvent('xh:tab',{detail:{key:k}}));});

  /* ---------- segmented controls: <div class="seg" data-name="x"><button data-v="..."> ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('.seg button');if(!b)return;var s=b.parentNode;$$('button',s).forEach(function(x){x.classList.toggle('on',x===b);x.setAttribute('aria-pressed',x===b);});s.dataset.value=b.getAttribute('data-v');s.dispatchEvent(new CustomEvent('change',{bubbles:true}));});
  $$('.seg').forEach(function(s){var on=$('button.on',s)||$('button',s);if(on){on.classList.add('on');s.dataset.value=on.getAttribute('data-v');}});

  /* ---------- range fill + steppers ---------- */
  function fillRange(r){var p=(r.value-r.min)/(r.max-r.min)*100;r.style.setProperty('--p',p+'%');}
  $$('input[type=range].rng').forEach(function(r){fillRange(r);r.addEventListener('input',function(){fillRange(r);});});
  XH.fillRange=fillRange;
  d.addEventListener('click',function(e){var b=e.target.closest('.stp button');if(!b)return;var inp=$('input',b.parentNode),mn=+(inp.min||0),mx=+(inp.max||9999),st=+(inp.step||1);inp.value=Math.max(mn,Math.min(mx,(+inp.value||0)+st*(+b.getAttribute('data-step'))));inp.dispatchEvent(new Event('input',{bubbles:true}));});
  d.addEventListener('change',function(e){var i=e.target;if(i.closest&&i.closest('.stp')){var mn=+(i.min||0),mx=+(i.max||9999);i.value=Math.max(mn,Math.min(mx,Math.round(+i.value||mn)));i.dispatchEvent(new Event('input',{bubbles:true}));}});

  /* ---------- copy ---------- */
  d.addEventListener('click',function(e){var b=e.target.closest('[data-copy]');if(!b)return;var t=b.getAttribute('data-copy')||location.href;(navigator.clipboard?navigator.clipboard.writeText(t):Promise.reject()).then(function(){XH.toast('Copied to clipboard');},function(){var ta=d.createElement('textarea');ta.value=t;d.body.appendChild(ta);ta.select();try{d.execCommand('copy');XH.toast('Copied to clipboard');}catch(x){}ta.remove();});});

  /* ---------- flash a value change ---------- */
  XH.flash=function(el){if(!el||reduce)return;el.classList.remove('flash');void el.offsetWidth;el.classList.add('flash');};

  /* ---------- download helper ---------- */
  XH.download=function(name,text,type){var b=new Blob([text],{type:type||'text/plain'});var a=d.createElement('a');a.href=URL.createObjectURL(b);a.download=name;d.body.appendChild(a);a.click();setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},500);};

  /* ---------- visibility helper for animations ---------- */
  XH.whenVisible=function(el,cb){if(!el)return;if(!('IntersectionObserver' in window)){cb(true);return;}new IntersectionObserver(function(en){en.forEach(function(x){cb(x.isIntersecting);});},{threshold:.05}).observe(el);};
})();

/* XcellHost live-UI runtime additions (typewriter, Ask-AI, chatbot, video embeds) */
(function(){
  'use strict';
  var d=document,XH=window.XH,$=XH.$,$$=XH.$$;

  /* typewriter: <div class="lh-type" data-words='["a","b"]'><span class="tw"></span><span class="cur"></span></div> */
  $$('.lh-type[data-words]').forEach(function(el){
    var words;try{words=JSON.parse(el.getAttribute('data-words'));}catch(e){return;}
    var out=$('.tw',el)||el,wi=0,ci=0,del=false,vis=true,tm;
    if(XH.reduce){out.textContent=words[0];return;}
    function tick(){if(!vis){tm=setTimeout(tick,400);return;}
      var w=words[wi];ci+=del?-1:1;out.textContent=w.slice(0,ci);
      var t=del?28:55;if(!del&&ci===w.length){del=true;t=1700;}else if(del&&ci===0){del=false;wi=(wi+1)%words.length;t=350;}
      tm=setTimeout(tick,t);}
    XH.whenVisible(el,function(v){vis=v;});tick();
  });

  /* Ask AI chips: <div class="lh-ask" data-q="question"> with <a data-ai="chatgpt|claude|perplexity|google|copilot"> */
  var AI={chatgpt:'https://chatgpt.com/?q=',claude:'https://claude.ai/new?q=',perplexity:'https://www.perplexity.ai/search?q=',google:'https://www.google.com/search?udm=50&q=',copilot:'https://copilot.microsoft.com/?q='};
  $$('.lh-ask[data-q]').forEach(function(box){var q=encodeURIComponent(box.getAttribute('data-q'));
    $$('a[data-ai]',box).forEach(function(a){var k=a.getAttribute('data-ai');if(AI[k]){a.href=AI[k]+q;a.target='_blank';a.rel='noopener';}});});

  /* click-to-play YouTube: any [data-yt] frame */
  function play(fr){var id=fr.getAttribute('data-yt');if(!id||fr.querySelector('iframe'))return;
    var f=d.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+id+'?autoplay=1&rel=0';f.allow='autoplay; encrypted-media; picture-in-picture';f.allowFullscreen=true;f.title='Video';fr.appendChild(f);}
  d.addEventListener('click',function(e){var fr=e.target.closest('[data-yt]');if(fr&&!fr.classList.contains('cvid'))play(fr);});
  d.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches&&e.target.matches('[data-yt]')){e.preventDefault();play(e.target);}});

  /* hero network canvas (live "net") + pointer tilt */
  $$('.hero.lh canvas.lh-net').forEach(function(cv){
    var hero=cv.closest('.hero'),cx=cv.getContext('2d'),W,H,dpr=Math.min(2,window.devicePixelRatio||1),P=[],run=true,mx=-999,my=-999;
    function size(){W=hero.offsetWidth;H=hero.offsetHeight;cv.width=W*dpr;cv.height=H*dpr;cx.setTransform(dpr,0,0,dpr,0,0);var n=Math.round(Math.min(90,W*H/16000));P=[];for(var i=0;i<n;i++)P.push({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.35,vy:(Math.random()-.5)*.35,r:Math.random()*1.6+.6,o:Math.random()<.12});}
    function draw(){cx.clearRect(0,0,W,H);for(var i=0;i<P.length;i++){var a=P[i];a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;
      for(var k=i+1;k<P.length;k++){var b=P[k],dx=a.x-b.x,dy=a.y-b.y,dd=dx*dx+dy*dy;if(dd<12000){cx.strokeStyle='rgba(127,176,255,'+(.16*(1-dd/12000))+')';cx.lineWidth=1;cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(b.x,b.y);cx.stroke();}}
      var ex=a.x-mx,ey=a.y-my,ed=ex*ex+ey*ey;if(ed<26000){cx.strokeStyle='rgba(255,140,26,'+(.35*(1-ed/26000))+')';cx.beginPath();cx.moveTo(a.x,a.y);cx.lineTo(mx,my);cx.stroke();}
      cx.fillStyle=a.o?'rgba(255,140,26,.85)':'rgba(160,200,255,.75)';cx.beginPath();cx.arc(a.x,a.y,a.r,0,6.283);cx.fill();}
      if(run)requestAnimationFrame(draw);}
    size();addEventListener('resize',size);
    hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();mx=e.clientX-r.left;my=e.clientY-r.top;});
    hero.addEventListener('pointerleave',function(){mx=my=-999;});
    if(XH.reduce){run=false;draw();return;}
    XH.whenVisible(hero,function(v){var was=run;run=v;if(v&&!was)requestAnimationFrame(draw);});requestAnimationFrame(draw);
  });
  if(XH.fine&&!XH.reduce)$$('.hero.lh .stage').forEach(function(st){var t=$('.lh-tilt',st);if(!t)return;
    st.addEventListener('pointermove',function(e){var r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform='rotateY('+(x*7)+'deg) rotateX('+(-y*7)+'deg)';});
    st.addEventListener('pointerleave',function(){t.style.transform='';});});

  /* chatbot */
  var bot=$('#xhBot'),bb=$('#xhBotBtn'),msgs=$('#xhBotMsgs');
  function botOpen(o){if(!bot)return;bot.classList.toggle('open',o);bb.setAttribute('aria-expanded',o);}
  if(bot){
    bb.addEventListener('click',function(){botOpen(!bot.classList.contains('open'));});
    $('[data-botclose]',bot).addEventListener('click',function(){botOpen(false);});
    var page=(d.querySelector('[data-product]')||{}).getAttribute?d.querySelector('[data-product]').getAttribute('data-product'):'this plan';
    var R={
      plan:['Which plan do I need?','It depends on team size and what you use today. Our specialists review your setup for free and recommend the right <b>'+page+'</b> plan \u2014 want me to book that?'],
      price:['Pricing & GST','All prices on this page are in INR and exclude 18% GST. Yearly billing is cheapest. Use the calculator on the page to see your exact total, or ask us for volume pricing above 300 seats.'],
      demo:['Book a demo','Great \u2014 I\\'ve opened the demo form. Pick a time and a specialist will call you within one business hour.']
    };
    function say(t,me){var m=d.createElement('div');m.className='msg'+(me?' me':'');m.innerHTML=t;msgs.appendChild(m);msgs.scrollTop=msgs.scrollHeight;}
    $('#xhBotQr').addEventListener('click',function(e){var b=e.target.closest('button[data-q]');if(!b)return;var r=R[b.getAttribute('data-q')];
      say(r[0],true);setTimeout(function(){say(r[1]);if(b.getAttribute('data-q')==='demo'){setTimeout(function(){botOpen(false);XH.open('xhCallback',{topic:'Book a demo'});},700);}},420);});
    d.addEventListener('keydown',function(e){if(e.key==='Escape')botOpen(false);});
  }
})();

<\/script>
<script>
(function(){
  
(function(){
 var host=window.parent;
 function viewport(){document.documentElement.style.setProperty('--cybird-vh',(host.innerHeight/100)+'px');window.dispatchEvent(new Event('resize'));}
 function scroll(){window.dispatchEvent(new Event('scroll'));}
 host.addEventListener('scroll',scroll,{passive:true});host.addEventListener('resize',viewport);
 window.addEventListener('unload',function(){host.removeEventListener('scroll',scroll);host.removeEventListener('resize',viewport);});
 viewport();
})();
var XH=window.XH;
  XH.open=function(id,options){
    if(id==='xhCallback') document.dispatchEvent(new CustomEvent('import-callback',{detail:options&&options.topic||'Cybird X2 enquiry'}));
  };
  XH.cart.add=function(item){document.dispatchEvent(new CustomEvent('import-cart',{detail:item}));};
  document.querySelectorAll('.mq-m span').forEach(function(item,index){if(index>=12)item.setAttribute('aria-hidden','true');});
})();<\/script>
<script>
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,FINE=XH.fine,d=document;
  var DPR=Math.min(2,window.devicePixelRatio||1),TAU=Math.PI*2;
  function $id(i){return d.getElementById(i);}
  function setT(id,t){var e=typeof id==='string'?$id(id):id;if(e&&e.textContent!==t)e.textContent=t;}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function eo(t){return 1-Math.pow(1-t,3);}
  function spring(u){return u>1.4?1:1-Math.exp(-7*u)*Math.cos(8*u);}
  function mix(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];}
  function rgba(c,a){return 'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+','+(+a).toFixed(3)+')';}
  function rng(seed){var s=seed;return function(){s=(s*9301+49297)%233280;return s/233280;};}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function restart(el,cls){if(R||!el)return;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls);}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}
  function inPoly(x,y,p){var c=false;for(var i=0,j=p.length-1;i<p.length;j=i++){var xi=p[i][0],yi=p[i][1],xj=p[j][0],yj=p[j][1];if(((yi>y)!==(yj>y))&&(x<(xj-xi)*(y-yi)/(yj-yi)+xi))c=!c;}return c;}

  /* ---------------------------------------------------------
     Brochure prices (INR, excl. 18% GST) \u2014 single source of truth
     --------------------------------------------------------- */
  var PL=[
    {k:'ess',n:'Essentials',u:10,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0116 0"/></svg>',p:{1:14999,2:26999,3:37999,5:71999}},
    {k:'plus',n:'Plus',u:25,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>',p:{1:24999,2:44999,3:63999,5:99999}},
    {k:'pro',n:'Pro',u:50,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg>',p:{1:44999,2:80999,3:114999,5:179999}},
    {k:'max',n:'Max',u:100,ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg>',p:{1:94999,2:170999,3:241999,5:379999}}];
  var SUP=[{hi:10,p:999,l:'1 to 10 employees'},{hi:24,p:1499,l:'10 to 24 employees'},{hi:50,p:1999,l:'24 to 50 employees'},{hi:100,p:3999,l:'50 to 100 employees'}];
  var HW=16999,TERMS=[1,2,3,5],GST=.18;
  function plan(k){for(var i=0;i<PL.length;i++)if(PL[i].k===k)return PL[i];return PL[0];}
  function saving(pl,t){var full=pl.p[1]*t,v=full-pl.p[t];return {amt:v,pct:t>1?v/full*100:0,full:full};}
  function supFor(n){for(var i=0;i<SUP.length;i++)if(n<=SUP[i].hi)return i;return SUP.length-1;}
  function suggest(n){for(var i=0;i<PL.length;i++)if(n<=PL[i].u)return PL[i];return PL[PL.length-1];}
  var PR={ess1:PL[0].p[1],hw:HW,s0:999,s1:1499,s2:1999,s3:3999};
  $$('[data-pr]').forEach(function(e){var k=e.getAttribute('data-pr');if(PR[k])e.textContent=XH.inr(PR[k]);});
  /* computed saving range per term, for the term toggles (not the brochure label) */
  $$('[data-sv]').forEach(function(e){var t=+e.getAttribute('data-sv'),ps=PL.map(function(p){return Math.round(saving(p,t).pct);}),lo=Math.min.apply(null,ps),hi=Math.max.apply(null,ps);e.textContent='save '+(lo===hi?lo:lo+'\u2013'+hi)+'%';});

  /* ---------------------------------------------------------
     Inline glyphs (24\xD724 stroke) for DOM + canvas
     --------------------------------------------------------- */
  var GLY={
    wifi:'M2 8.6a15 15 0 0120 0 M5.2 12a10.5 10.5 0 0113.6 0 M8.6 15.4a5.6 5.6 0 016.8 0 M12 19h.01',
    lap:'M4 5h16v10H4z M2 19h20 M9 19l1-2h4l1 2',
    phn:'M8 2h8a1.5 1.5 0 011.5 1.5v17A1.5 1.5 0 0116 22H8a1.5 1.5 0 01-1.5-1.5v-17A1.5 1.5 0 018 2z M11 18.5h2',
    prn:'M7 9V3h10v6 M7 17H4v-7h16v7h-3 M7 13h10v8H7z M17 12h.01',
    cam:'M3 8l12-3.5 2 6L5 14z M17 7.5l3.5-1v5l-3.5-.6 M8 13.4l1 3.6h5 M14 17v3 M11 20h6',
    cld:'M7 19h10.5a4.5 4.5 0 00.6-8.96A6.5 6.5 0 005.3 11.6 3.8 3.8 0 007 19z',
    glb:'M12 3a9 9 0 100 18 9 9 0 000-18z M3 12h18 M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z',
    bld:'M4 21V7l8-4 8 4v14 M9 21v-5h6v5 M8 9h.01 M12 9h.01 M16 9h.01 M8 12.5h.01 M12 12.5h.01 M16 12.5h.01',
    shd:'M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z M8.5 12l2.5 2.5 4.5-5',
    router:'M3 13h18v6H3z M7 13V4 M17 13V4 M6.5 16h.01 M9.5 16h.01 M13 16h4',
    plug:'M9 2v5 M15 2v5 M6 7h12v4a6 6 0 01-12 0z M12 17v5',
    cable:'M6 2h6v5H6z M7.5 2V.8 M10.5 2V.8 M9 7v5a4 4 0 004 4h2a4 4 0 014 4v2',
    pad:'M6.5 8h11a4.5 4.5 0 014.5 4.5v.5a3.5 3.5 0 01-6.3 2.1L14.5 14h-5l-1.2 1.1A3.5 3.5 0 012 13v-.5A4.5 4.5 0 016.5 8z M7 10.5v3 M5.5 12h3 M16 11h.01 M18 13h.01'
  };
  function svg(inner){return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">'+inner+'</svg>';}
  function gly(k){return svg('<path d="'+GLY[k]+'"/>');}
  var AGL={
    wifiA:svg('<path class="a3" d="M2 8.6a15 15 0 0120 0"/><path class="a2" d="M5.2 12a10.5 10.5 0 0113.6 0"/><path class="a1" d="M8.6 15.4a5.6 5.6 0 016.8 0"/><path d="M12 19h.01" stroke-width="2.6"/>'),
    wall:svg('<g class="a1"><path d="M8 5h13v14H8z M8 9.7h13 M8 14.3h13 M13 5v4.7 M17.5 5v4.7 M11 9.7v4.6 M15.5 9.7v4.6 M13 14.3V19 M17.5 14.3V19"/></g><path class="a2" d="M1.5 12H7 M4.5 9.5L7 12l-2.5 2.5" stroke="#c0392b"/>'),
    globeA:svg('<circle cx="12" cy="12" r="8.5"/><g class="a1"><path d="M3.5 12h17 M12 3.5c2.3 2.4 3.5 5.2 3.5 8.5s-1.2 6.1-3.5 8.5c-2.3-2.4-3.5-5.2-3.5-8.5S9.7 5.9 12 3.5z"/></g><circle class="a2" cx="18.5" cy="5.5" r="3" stroke="#c0392b"/>'),
    sliders:svg('<path d="M3 6h18 M3 12h18 M3 18h18" opacity=".35"/><circle class="a1" cx="9" cy="6" r="2.4" fill="currentColor"/><circle class="a2" cx="15" cy="12" r="2.4" fill="currentColor"/><circle class="a3" cx="10" cy="18" r="2.4" fill="currentColor"/>'),
    bars:svg('<path d="M3 21h18" /><rect class="a1" x="5" y="12" width="3.4" height="8" rx="1"/><rect class="a2" x="10.3" y="7" width="3.4" height="13" rx="1"/><rect class="a3" x="15.6" y="3.5" width="3.4" height="16.5" rx="1"/>'),
    gear:svg('<g class="a1"><circle cx="12" cy="12" r="3.2"/><circle cx="12" cy="12" r="7"/><path d="M12 1.8v3 M12 19.2v3 M1.8 12h3 M19.2 12h3 M4.8 4.8l2.1 2.1 M17.1 17.1l2.1 2.1 M4.8 19.2l2.1-2.1 M17.1 6.9l2.1-2.1"/></g>'),
    ztp:svg('<rect x="3" y="12.5" width="18" height="7.5" rx="2"/><path d="M7 16.3h.01 M10 16.3h.01"/><path class="a1" d="M13.5 1.5L9.5 7.5h4l-2 4.5 5-6.5h-4z" fill="currentColor" stroke-width="1.2"/><circle class="a2" cx="17" cy="16.3" r="2"/>'),
    nac:svg('<rect x="3" y="4.5" width="18" height="15" rx="2"/><path d="M8.5 12a2 2 0 100-4 2 2 0 000 4z M5.5 16c.5-1.6 1.6-2.4 3-2.4s2.5.8 3 2.4 M14 9.5h4 M14 13h3"/><path class="a1" d="M2 12h20" stroke="#FF8C1A" stroke-width="1.6"/>')
  };
  $$('[data-gl]').forEach(function(e){var k=e.getAttribute('data-gl');e.innerHTML=AGL[k]||gly(k);});
  $$('[data-gl2]').forEach(function(e){e.insertAdjacentHTML('afterbegin',gly(e.getAttribute('data-gl2')));});
  var P2={};function path2(k){if(!P2[k]&&window.Path2D)P2[k]=new Path2D(GLY[k]);return P2[k];}

  /* =========================================================
     Shared ticker \u2014 one requestAnimationFrame for every loop
     ========================================================= */
  var subs=[],raf=0,last=0;
  function frame(t){raf=0;var dt=last?Math.min(48,t-last):16;last=t;var any=false;
    for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){any=true;s.fn(t,dt);}}
    if(any)raf=requestAnimationFrame(frame);else last=0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function glowSprite(rgb,size){var c=d.createElement('canvas');c.width=c.height=size;var x=c.getContext('2d'),g=x.createRadialGradient(size/2,size/2,0,size/2,size/2,size/2);
    g.addColorStop(0,'rgba('+rgb+',1)');g.addColorStop(.28,'rgba('+rgb+',.5)');g.addColorStop(1,'rgba('+rgb+',0)');x.fillStyle=g;x.fillRect(0,0,size,size);return c;}
  var tweens={},twId=0,twOn=loop(function(t,dt){var any=false;for(var k in tweens){var o=tweens[k];o.p=Math.min(1,o.p+dt/(o.ms||650));var v=o.a+(o.b-o.a)*eo(o.p);o.el.textContent=o.f(v);if(o.p<1)any=true;else delete tweens[k];}if(!any)twOn(false);});
  function tween(el,to,f,ms){if(!el)return;if(!el._tw)el._tw='t'+(twId++);var from=el._v===undefined?0:el._v;el._v=to;if(R||from===to){el.textContent=f(to);delete tweens[el._tw];return;}tweens[el._tw]={el:el,a:from,b:to,p:0,f:f,ms:ms};twOn(true);}
  function inr(v){return XH.inr(Math.round(v));}

  var hero=$id('cbHero');
  var GRN=[95,224,141],BLU=[127,176,255],AMB=[255,177,92],RED=[255,90,74],NEU=[150,172,215],ORA=[255,150,50],PUR=[170,150,255],CYA=[95,205,225];

  /* =========================================================
     1. Hero background \u2014 city skyline in three depth planes, rooftop signals
     ========================================================= */
  (function(){
    var cv=$id('cbBg');if(!cv||!hero)return;
    var cx=cv.getContext('2d'),W=0,H=0,LAY=[],WIN=[],ROOF=[],PX=0,PY=0,PXT=0,PYT=0,spB=glowSprite('130,185,255',24),spO=glowSprite('255,160,60',24),PK=[];
    function FX(x){var u=clamp(x/W/.4,0,1);return .06+.94*u*u*(3-2*u);}
    function build(){W=cv.offsetWidth||hero.offsetWidth;H=hero.offsetHeight;if(!W||!H)return;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);
      var r=rng(41);LAY=[];WIN=[];ROOF=[];PK=[];
      for(var ly=0;ly<3;ly++){var oc=d.createElement('canvas');oc.width=Math.round((W+60)*DPR);oc.height=Math.round((H+60)*DPR);var x=oc.getContext('2d');x.setTransform(DPR,0,0,DPR,30*DPR,30*DPR);
        var base=H+2,hmax=H*[.26,.36,.5][ly],bx=-20;
        while(bx<W+20){var bw=(ly===2?28:20)+r()*(ly===2?54:40),bh=hmax*(.35+r()*.65),f=FX(bx+bw/2);
          x.globalAlpha=f*[.16,.22,.3][ly];x.fillStyle=['#14306b','#123a85','#0f3f99'][ly];x.fillRect(bx,base-bh,bw-3,bh);
          x.globalAlpha=f*[.18,.3,.42][ly];x.strokeStyle='rgb(127,176,255)';x.lineWidth=1;x.beginPath();x.moveTo(bx,base-bh);x.lineTo(bx+bw-3,base-bh);x.stroke();
          for(var wy=base-bh+8;wy<base-8;wy+=9)for(var wx=bx+5;wx<bx+bw-8;wx+=8){var q=r();if(q<.18){x.globalAlpha=f*(.25+.4*r())*[.5,.7,1][ly];x.fillStyle=q<.03?'#FFB15C':'#9cc4ff';x.fillRect(wx,wy,2.2,3);if(q<.045&&WIN.length<70)WIN.push({x:wx,y:wy,ly:ly,ph:r()*TAU,o:q<.02});}}
          if(ly===2&&r()<.35&&bh>hmax*.6){x.globalAlpha=f*.6;x.strokeStyle='rgb(160,200,255)';x.beginPath();x.moveTo(bx+bw/2,base-bh);x.lineTo(bx+bw/2,base-bh-14);x.stroke();ROOF.push([bx+bw/2,base-bh-14,f]);}
          bx+=bw;}
        LAY.push(oc);}
    }
    function draw(t,dt){if(!W)return;
      PX+=(PXT-PX)*Math.min(1,dt*.004);PY+=(PYT-PY)*Math.min(1,dt*.004);
      cx.setTransform(DPR,0,0,DPR,0,0);cx.clearRect(0,0,W,H);
      for(var ly=0;ly<3;ly++){var dp=[4,9,16][ly];cx.globalAlpha=1;cx.drawImage(LAY[ly],0,0,LAY[ly].width,LAY[ly].height,-30+PX*dp,-30+PY*dp*.4,W+60,H+60);}
      var i,w,dp2;
      for(i=0;i<WIN.length;i++){w=WIN[i];dp2=[4,9,16][w.ly];var a=.5+.5*Math.sin(t*.0012+w.ph);cx.globalAlpha=a*FX(w.x)*.9;cx.drawImage(w.o?spO:spB,w.x-5+PX*dp2,w.y-4+PY*dp2*.4,12,12);}
      /* rooftop Wi-Fi signals: expanding arcs */
      cx.lineWidth=1.2;
      for(i=0;i<ROOF.length;i++){var rf=ROOF[i],x=rf[0]+PX*16,y=rf[1]+PY*6.4;for(var k=0;k<2;k++){var u=((t*.00035+i*.37+k*.5)%1);cx.globalAlpha=(1-u)*.45*rf[2];cx.strokeStyle='#7fb0ff';cx.beginPath();cx.arc(x,y,4+u*34,-Math.PI*.82,-Math.PI*.18);cx.stroke();}
        cx.globalAlpha=rf[2]*(.6+.4*Math.sin(t*.004+i));cx.drawImage(spO,x-5,y-5,10,10);}
      /* packets hopping between rooftops */
      if(ROOF.length>1){if(PK.length<6&&Math.random()<dt/260){var a2=Math.floor(Math.random()*ROOF.length),b2=Math.floor(Math.random()*ROOF.length);if(a2!==b2)PK.push({a:a2,b:b2,t:t,d:1600+Math.random()*1200});}
        for(i=PK.length-1;i>=0;i--){var p=PK[i],uu=(t-p.t)/p.d;if(uu>=1){PK.splice(i,1);continue;}var A=ROOF[p.a],B=ROOF[p.b],mx=(A[0]+B[0])/2,my=Math.min(A[1],B[1])-50,v=1-uu,px=v*v*A[0]+2*v*uu*mx+uu*uu*B[0]+PX*16,py=v*v*A[1]+2*v*uu*my+uu*uu*B[1]+PY*6.4;
          cx.globalAlpha=Math.sin(uu*Math.PI)*.85*FX(px);cx.drawImage(spB,px-5,py-5,10,10);}}
      cx.globalAlpha=1;}
    build();var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){build();if(R)draw(4000,16);},150);});
    if(R){draw(4000,16);return;}
    hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();PXT=((e.clientX-r.left)/r.width-.5)*2;PYT=((e.clientY-r.top)/r.height-.5)*2;});
    hero.addEventListener('pointerleave',function(){PXT=PYT=0;});
    var on=loop(draw);XH.whenVisible(hero,on);
  })();

  /* =========================================================
     2. Hero stage \u2014 power up \u2192 connect \u2192 block \u2192 control \u2192 cloud \u2192 sites \u2192 protect (21.5 s)
     ========================================================= */
  (function(){
    var cbv=$id('cbv'),sc=$id('cbvSc'),cv=$id('cbvCv'),img=$id('cbvImg');if(!cbv||!cv)return;
    var ctx=cv.getContext('2d'),fxl=$id('cbvFx'),spot=$id('cbvSpot');
    var cId=$id('cbvId'),cBl=$id('cbvBl'),cAc=$id('cbvAc'),cCl=$id('cbvCl'),cEnd=$id('cbvEnd'),acV=$id('cbvAcV'),CARDS=[cId,cBl,cAc,cCl];
    var lg=$id('cbvLg'),lgp=$id('cbvLgP'),fill=$id('cbvFill'),tk=$('.cbv-tk',cbv),rail=$$('#cbvRail>span');
    var KD=$$('#cbvKp>div'),KB=[0,1,2,3].map(function(i){return $id('cbvK'+i);}),KE=[0,1,2,3].map(function(i){return $id('cbvD'+i);}),BW=[0,1,2].map(function(i){return $id('cbvW'+i);});
    var sprB=glowSprite('110,170,255',64),sprO=glowSprite('255,150,50',64),sprG=glowSprite('95,224,141',64),sprR=glowSprite('255,90,70',64),sprW=glowSprite('255,236,200',64),sprP=glowSprite('170,150,255',64),sprC=glowSprite('95,205,225',64);
    var SPC={b:sprB,o:sprO,g:sprG,r:sprR,w:sprW,p:sprP,c:sprC};
    var ACT=[0,3200,7200,10600,13600,16400,18900],LOOP=21500,ACTN=['power up','connect','block','control','cloud','multi-site','protected'];
    var LED=[[.359,.76],[.425,.766],[.49,.774],[.56,.78],[.625,.79]],ANT=[[.204,.035],[.38,.035],[.73,.035],[.92,.03]];
    var DEV=[
      {k:'lap',x:.1,y:.3,c:'st',lab:'priya \xB7 staff',wf:1},
      {k:'phn',x:.09,y:.62,c:'st',lab:'arjun \xB7 staff',wf:1},
      {k:'prn',x:.21,y:.88,c:'io',lab:'printer \xB7 IoT',wf:0},
      {k:'cam',x:.38,y:.93,c:'io',lab:'camera \xB7 IoT',wf:0},
      {k:'phn',x:.63,y:.93,c:'gu',lab:'guest \xB7 VLAN 99',wf:1},
      {k:'lap',x:.8,y:.88,c:'gu',lab:'guest \xB7 VLAN 99',wf:1}];
    var CC={st:BLU,io:CYA,gu:PUR},CS={st:'b',io:'c',gu:'p'};
    var W=0,H=0,FS=9,BG=[6,18,48],DUST=[],FLOOR=null,PHOTO=null,PK=[],PART=[],RING=[],WR=[],SPR={},D={x:0,y:0,w:0,h:0},CL={x:0,y:0},NET={x:0,y:0},BR=[{x:0,y:0,t:-1},{x:0,y:0,t:-1}];
    var S={fx:0,fy:0,fs:1.3,px:0,py:0,pxT:0,pyT:0,ptr:false};
    var T=0,ci=0,act=-1,lastFill='',lastFx='',logS='',logT=0,logN=-1,emA=0,ledT=[-1,-1,-1,-1,-1],pwrT=-1,wifiT=-1,cloudT=-1,shT=-1,shC='r',endT=-1,thrT=-1,thrEnd=-1,wrA=0;
    var SS=DPR*1.3;
    function font(sz,wt){return (wt||600)+' '+sz+'px "IBM Plex Mono",ui-monospace,monospace';}
    function spr(txt,h,bd,bg,tc,dot,wt){ctx.font=font(FS,wt);var w=ctx.measureText(txt).width+(dot?24:16),c=d.createElement('canvas'),pw=Math.ceil(w+4),ph=Math.ceil(h+4);c.width=Math.ceil(pw*SS);c.height=Math.ceil(ph*SS);var x=c.getContext('2d');x.scale(SS,SS);
      rr(x,2,2,w,h,h/2);if(bg){x.fillStyle=bg;x.fill();}if(bd){x.lineWidth=1.2;x.strokeStyle=bd;x.stroke();}
      if(dot){x.fillStyle=dot;x.beginPath();x.arc(2+9,2+h/2,2.6,0,TAU);x.fill();}
      x.font=font(FS,wt);x.textAlign='center';x.textBaseline='middle';x.fillStyle=tc;x.fillText(txt,2+w/2+(dot?4:0),2+h/2+.5);c.lw=pw;c.lh=ph;return c;}
    function blit(s,x,y,a,k){if(!s||a<=0)return;k=k||1;ctx.globalAlpha=Math.min(1,a);ctx.drawImage(s,x-s.lw*k/2,y-s.lh*k/2,s.lw*k,s.lh*k);}
    function sprites(){var h=W<420?14:16;
      DEV.forEach(function(dv,i){var c=CC[dv.c];SPR['d'+i]=spr(dv.lab,h,rgba(c,.75),'rgba(10,26,60,.92)','#e6efff',rgba(c,1),600);});
      SPR.cl=spr('Cybird Cloud',h,null,null,'#cfe0ff',null,700);SPR.net=spr('Internet',h,null,null,'#cfe0ff',null,700);
      SPR.b0=spr('Branch 1',h,'rgba(95,224,141,.7)','rgba(14,60,40,.92)','#fff','#5FE08D',700);SPR.b1=spr('Branch 2',h,'rgba(95,224,141,.7)','rgba(14,60,40,.92)','#fff','#5FE08D',700);
      ['PWR','SYS','WAN','LAN','WIFI'].forEach(function(n,i){SPR['l'+i]=spr(n+' \u25CF',h-2,'rgba(95,224,141,.7)','rgba(10,40,30,.92)','#8ff0b2',null,700);});
      SPR.blk=spr('BLOCKED',h,'#ff8a80','rgba(120,20,20,.95)','#fff',null,700);SPR.cap=spr('CAPPED',h,'#FFB15C','rgba(110,60,10,.95)','#fff',null,700);}
    function photo(){if(!img||!img.complete||!img.naturalWidth||!D.w)return;var s=DPR*1.4;PHOTO=d.createElement('canvas');PHOTO.width=Math.round(D.w*s);PHOTO.height=Math.round(D.h*s);var x=PHOTO.getContext('2d');x.imageSmoothingQuality='high';x.drawImage(img,0,0,PHOTO.width,PHOTO.height);}
    function size(){
      W=sc.clientWidth;H=sc.clientHeight;if(!W)return;
      cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);FS=W<420?8:9;
      D.w=Math.min(W*.44,232);D.h=D.w*411/760;D.x=W*.5;D.y=H*.6;
      CL.x=W*.5;CL.y=H*.12;NET.x=W*.92;NET.y=H*.5;BR[0].x=W*.15;BR[0].y=H*.12;BR[1].x=W*.85;BR[1].y=H*.12;
      DEV.forEach(function(dv){dv.X=W*dv.x;dv.Y=H*dv.y;dv.K=.84+.3*dv.y;});
      var r=rng(5);DUST=[];for(var i=0;i<(W<420?40:70);i++)DUST.push([r()*W,r()*H,r()*TAU,.6+r()*1.2]);
      FLOOR=d.createElement('canvas');FLOOR.width=Math.round((W+40)*DPR);FLOOR.height=Math.round((H+40)*DPR);var f=FLOOR.getContext('2d');f.setTransform(DPR,0,0,DPR,20*DPR,20*DPR);
      var vx=W/2,vy=-H*.6,hz=H*.3;f.strokeStyle='rgb(127,176,255)';f.lineWidth=1;
      for(i=-14;i<=14;i++){var bx=W/2+i*W*.09,u=(hz-vy)/(H+20-vy),tx=vx+(bx-vx)*u;f.globalAlpha=.07;f.beginPath();f.moveTo(tx,hz);f.lineTo(bx,H+20);f.stroke();}
      for(i=0;i<10;i++){var yy=hz+(H+20-hz)*Math.pow(i/9,1.7);f.globalAlpha=.035+.05*i/9;f.beginPath();f.moveTo(-20,yy);f.lineTo(W+20,yy);f.stroke();}
      var cs=getComputedStyle(sc).backgroundColor.match(/\\d+/g);if(cs)BG=[+cs[0],+cs[1],+cs[2]];
      if(!S.fx){S.fx=D.x;S.fy=D.y-D.h*.1;}
      sprites();photo();
    }
    function ledP(i){return [D.x-D.w/2+D.w*LED[i][0],D.y-D.h/2+D.h*LED[i][1]];}
    function antP(i){return [D.x-D.w/2+D.w*ANT[i][0],D.y-D.h/2+D.h*ANT[i][1]];}
    function wanP(){return [D.x+D.w*.46,D.y+D.h*.18];}
    function upP(){return [D.x+D.w*.05,D.y-D.h*.3];}
    function portP(dv){if(dv.wf){var best=0,bd=1e9;for(var i=0;i<4;i++){var a=antP(i),dd=Math.abs(a[0]-dv.X);if(dd<bd){bd=dd;best=i;}}return antP(best);}return [D.x+(dv.X<D.x?-1:1)*D.w*.3,D.y+D.h*.42];}
    function cam(sd,pp){var s=1+(S.fs-1)*sd;ctx.setTransform(DPR*s,0,0,DPR*s,DPR*(W/2-S.fx*s+S.px*pp),DPR*(H/2-S.fy*s+S.py*pp*.7));}
    function burst(x,y,n,cols,spd){for(var k=0;k<n;k++){var a=Math.random()*TAU,v=(.03+Math.random()*.08)*(spd||1);PART.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-.02,l:0,m:600+Math.random()*700,c:cols[k%cols.length],s:6+Math.random()*7});}}
    function log(s){logS=s;logT=T;logN=-1;}
    function setAct(a){act=a;cbv.className='cbv a'+a;rail.forEach(function(r,k){r.classList.toggle('on',k===a);r.classList.toggle('dn',k<a);});setT('cbvLive','sample \xB7 '+ACTN[a]);}
    function kpi(i,cls){KD[i].classList.remove('good','bad');if(cls)KD[i].classList.add(cls);}
    function card(el,st){el.className=el.className.replace(/\\s*(show|out)\\b/g,'')+(st?' '+st:'');}
    function bars(a){BW.forEach(function(b,i){b.style.transform='scaleX('+a[i]+')';});}
    function reset(){
      DEV.forEach(function(dv){dv.t0=-1;});BR.forEach(function(b){b.t=-1;});
      PK.length=0;PART.length=0;RING.length=0;WR.length=0;ledT=[-1,-1,-1,-1,-1];pwrT=-1;wifiT=-1;cloudT=-1;shT=-1;endT=-1;thrT=-1;thrEnd=-1;
      CARDS.forEach(function(c){card(c,'');});cEnd.className='cbv-end';$$('li',cBl).forEach(function(l){l.classList.remove('in');});$$('li',cCl).forEach(function(l){l.classList.remove('in');});
      acV.classList.remove('in');bars([.32,.88,.5]);
      KB[0].textContent='0';KB[1].textContent='0';KB[2].textContent='0';KB[3].textContent='1';KE[0].textContent='booting';KE[1].textContent='gateway';KE[2].textContent='controls';KE[3].textContent='cloud';[0,1,2,3].forEach(function(i){kpi(i);});
      lgp.textContent='\u203A';
    }
    function pk(a,b,dur,c,bend,tail){PK.push({a:a,b:b,t:T,d:dur,c:c,o:bend||0,tl:tail===undefined?4:tail});}
    function qPos(a,b,u,bend,o){var mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=b[0]-a[0],dy=b[1]-a[1],qx=mx-dy*bend,qy=my+dx*bend,v=1-u;o[0]=v*v*a[0]+2*v*u*qx+u*u*b[0];o[1]=v*v*a[1]+2*v*u*qy+u*u*b[1];return o;}
    function devBend(dv){return dv.wf?(dv.X<D.x?-.18:.18):(dv.X<D.x?.22:-.22);}
    function join(i){var dv=DEV[i];dv.t0=T;var c=CC[dv.c];RING.push({x:dv.X,y:dv.Y,t:T,c:c,s:.18});pk([dv.X,dv.Y],portP(dv),600,CS[dv.c],devBend(dv));burst(dv.X,dv.Y,8,[CS[dv.c],'w']);
      KB[0].textContent=String(i+1);bump(KB[0]);
      log(['priya@office \xB7 WPA2-Enterprise \xB7 staff VLAN 10','arjun@office \xB7 WPA2-Enterprise \xB7 staff VLAN 10','printer \xB7 wired LAN \xB7 IoT VLAN 30','IP camera \xB7 wired LAN \xB7 IoT VLAN 30','guest phone \xB7 guest portal \xB7 VLAN 99 \xB7 internet only','guest laptop \xB7 guest portal \xB7 VLAN 99 \xB7 internet only'][i]);}
    function block(kind){shT=T;shC='r';var p=[D.x+D.w*.18,D.y-D.h*.05];RING.push({x:p[0],y:p[1],t:T,c:RED,s:.3});burst(p[0],p[1],24,['r','o','w'],1.3);restart(cbv,'alarm');
      var n=kind+1;KB[1].textContent=String(n);bump(KB[1]);kpi(1,'bad');$id('cbvB'+kind).classList.add('in');
      log(kind?'invoice_0412.pdf.exe \xB7 malware download \xB7 blocked by threat protection':'bank-kyc-update.xyz \xB7 phishing \xB7 blocked by DNS filter');}
    var CUES=[[0,function(){reset();pwrT=T;log('Cybird X2 \xB7 power on');}]];
    [0,1,2,3,4].forEach(function(i){CUES.push([380+i*430,function(){ledT[i]=T;var p=ledP(i);burst(p[0],p[1],6,['g','w'],.6);RING.push({x:p[0],y:p[1],t:T,c:GRN,s:.06});
      log(['PWR \xB7 power OK','SYS \xB7 firmware verified \xB7 security services starting','WAN \xB7 internet link up on the gigabit WAN port','LAN \xB7 4 \xD7 gigabit LAN ports ready','WIFI \xB7 Wi-Fi 6 broadcasting on 2.4 & 5 GHz'][i]);if(i===4)KE[0].textContent='ready';}]);});
    CUES.push([2400,function(){wifiT=T;}]);
    DEV.forEach(function(dv,i){CUES.push([3400+i*400,function(){join(i);}]);});
    CUES.push([5500,function(){card(cId,'show');kpi(0,'good');KE[0].textContent='6 online';}]);
    CUES.push([7000,function(){card(cId,'out');}]);
    CUES.push([7300,function(){log('priya clicks a link in an email \xB7 bank-kyc-update.xyz');pk([DEV[0].X,DEV[0].Y],portP(DEV[0]),620,'r',devBend(DEV[0]),5);}]);
    CUES.push([7950,function(){card(cBl,'show');block(0);}]);
    CUES.push([8800,function(){log('download requested \xB7 invoice_0412.pdf.exe');pk(wanP(),[NET.x,NET.y],520,'b',.12);}]);
    CUES.push([9350,function(){pk([NET.x,NET.y],wanP(),620,'r',-.12,5);}]);
    CUES.push([9980,function(){block(1);}]);
    CUES.push([10400,function(){card(cBl,'out');KE[1].textContent='2 stopped';kpi(1,'good');}]);
    CUES.push([10750,function(){thrT=T;log('guest phone \xB7 video streaming \xB7 bandwidth spike');}]);
    CUES.push([11000,function(){card(cAc,'show');}]);
    CUES.push([12000,function(){thrEnd=T;bars([.86,.22,.42]);acV.classList.add('in');KB[2].textContent='1';bump(KB[2]);kpi(2,'good');KE[2].textContent='applied';
      var g=DEV[4];RING.push({x:g.X,y:g.Y,t:T,c:AMB,s:.2});log('App control \xB7 streaming capped \xB7 business apps first');}]);
    CUES.push([12600,function(){KB[2].textContent='2';bump(KB[2]);log('Policy \xB7 guest Wi-Fi limited to internet only');}]);
    CUES.push([13350,function(){card(cAc,'out');}]);
    CUES.push([13750,function(){cloudT=T;RING.push({x:CL.x,y:CL.y,t:T,c:BLU,s:.25});burst(CL.x,CL.y,14,['b','w']);log('Cybird Cloud \xB7 centralized management connected');}]);
    CUES.push([14100,function(){card(cCl,'show');}]);
    [0,1,2].forEach(function(j){CUES.push([14450+j*420,function(){$id('cbvC'+j).classList.add('in');}]);});
    CUES.push([15300,function(){log('Alerts and daily report synced to Cybird Cloud');}]);
    CUES.push([16150,function(){card(cCl,'out');}]);
    [0,1].forEach(function(j){CUES.push([16700+j*800,function(){var b=BR[j];b.t=T;RING.push({x:b.x,y:b.y,t:T,c:GRN,s:.2});burst(b.x,b.y,12,['g','w']);KB[3].textContent=String(2+j);bump(KB[3]);
      if(j)kpi(3,'good');KE[3].textContent=(2+j)+' sites';log('Branch '+(j+1)+' online \xB7 zero touch provisioning from Cybird Cloud');}]);});
    CUES.push([19000,function(){endT=T;cEnd.className='cbv-end show';cbv.classList.add('win');lgp.textContent='\u2713';RING.push({x:D.x,y:D.y,t:T,c:GRN,s:.5});RING.push({x:D.x,y:D.y,t:T+200,c:BLU,s:.4});burst(D.x,D.y-D.h*.2,30,['g','b','w'],1.3);log('One device. Total protection.');}]);
    CUES.push([20950,function(){cEnd.className='cbv-end out';}]);
    CUES.sort(function(a,b){return a[0]-b[0];});
    function emit(dt){var rate=[0,170,200,110,150,160,240][act]||200;if(!rate)return;emA+=dt;
      while(emA>rate){emA-=rate;var on=DEV.filter(function(x){return x.t0>=0;});
        if(act>=4&&cloudT>=0&&Math.random()<.3){pk(upP(),[CL.x,CL.y+10],760,'b',.15*(Math.random()-.5),3);continue;}
        if(act>=5&&Math.random()<.35){var b=BR[Math.random()<.5?0:1];if(b.t>=0){pk([b.x,b.y],[CL.x,CL.y],900,'g',-.12,3);continue;}}
        if(!on.length)continue;var dv=on[Math.floor(Math.random()*on.length)];
        if(act===3&&thrT>=0&&Math.random()<(thrEnd<0?.65:.18)){var g=DEV[4];pk([g.X,g.Y],portP(g),thrEnd<0?420:900,'o',devBend(g),thrEnd<0?6:2);continue;}
        if(act!==2&&Math.random()<.3){pk(wanP(),[NET.x,NET.y],700,'g',.12*(Math.random()<.5?1:-1),3);continue;}
        var out=Math.random()<.5;pk(out?[dv.X,dv.Y]:portP(dv),out?portP(dv):[dv.X,dv.Y],700+Math.random()*300,CS[dv.c],out?devBend(dv):-devBend(dv),3);}}
    var tmp=[0,0];
    function update(dt){
      var e=1-Math.exp(-dt/450);
      if(!S.ptr){S.pxT=Math.sin(T*.00042)*.35;S.pyT=Math.cos(T*.00031)*.28;}
      S.px+=(S.pxT-S.px)*Math.min(1,dt*.0045);S.py+=(S.pyT-S.py)*Math.min(1,dt*.0045);
      var fx=W/2,fy=H/2,fs=1;
      if(act===0){fs=1.32;fx=D.x;fy=D.y-D.h*.05;}
      else if(act===1){fs=1.0;}
      else if(act===2){fs=1.1;fx=lerp(W/2,NET.x,.22);fy=lerp(H/2,D.y,.25);}
      else if(act===3){fs=1.06;fx=lerp(W/2,DEV[4].X,.2);fy=lerp(H/2,DEV[4].Y,.16);}
      else if(act===4){fs=1.05;fy=lerp(H/2,CL.y,.22);}
      else if(act===5){fs=.9;fy=H*.47;}
      else{fs=1.02;fy=H*.53;}
      S.fx+=(fx-S.fx)*e;S.fy+=(fy-S.fy)*e;S.fs+=(fs-S.fs)*e;
      if(T<20700)emit(dt);
      if(wifiT>=0){wrA+=dt;if(wrA>380){wrA=0;WR.push({a:Math.floor(Math.random()*4),t:T});}}
      for(var i=PK.length-1;i>=0;i--){if((T-PK[i].t)/PK[i].d>=1)PK.splice(i,1);}
      for(i=WR.length-1;i>=0;i--){if(T-WR[i].t>1300)WR.splice(i,1);}
      for(i=PART.length-1;i>=0;i--){var q=PART[i];q.l+=dt;if(q.l>=q.m){PART.splice(i,1);continue;}q.x+=q.vx*dt;q.y+=q.vy*dt;q.vx*=.985;q.vy*=.985;}
    }
    function tile(x,y,s,col,a,glyph){var c=ctx;c.globalAlpha=a;rr(c,x-s/2,y-s/2,s,s,s*.26);c.fillStyle='rgba(9,24,58,.96)';c.fill();c.lineWidth=1.4;c.strokeStyle=rgba(col,.95);c.stroke();
      var p=path2(glyph);if(p){c.save();c.translate(x-s*.32,y-s*.32);var k=s*.64/24;c.scale(k,k);c.lineWidth=1.9;c.lineCap='round';c.lineJoin='round';c.strokeStyle='#e6efff';c.stroke(p);c.restore();}}
    function shield(x,y,s,a,col){var c=ctx,p=path2('shd');if(!p)return;c.save();c.globalAlpha=a;c.translate(x-s/2,y-s/2);var k=s/24;c.scale(k,k);c.fillStyle=rgba(col,.22);c.fill(p);c.lineWidth=2.2;c.lineJoin='round';c.lineCap='round';c.strokeStyle=rgba(col,1);c.stroke(p);c.restore();}
    function render(t){
      var i,c=ctx,k;
      c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,W,H);
      /* ---- far plane ---- */
      cam(.3,4);c.globalAlpha=1;c.drawImage(FLOOR,0,0,FLOOR.width,FLOOR.height,-20,-20,W+40,H+40);
      c.fillStyle='rgb(170,205,255)';for(i=0;i<DUST.length;i++){var du=DUST[i];c.globalAlpha=.25+.3*Math.sin(t*.0017+du[2]);c.fillRect(du[0],du[1],du[3],du[3]);}
      /* ---- mid plane ---- */
      cam(1,10);
      var ts=W<420?22:27,on=pwrT>=0?clamp((T-pwrT)/700,0,1):0;
      /* links: uplink to cloud, WAN to internet, branches */
      c.setLineDash([3,5]);c.lineDashOffset=-t*.03;c.lineWidth=1.2;
      var up=upP(),wn=wanP(),ca=cloudT>=0?Math.min(1,(T-cloudT)/500):0;
      c.globalAlpha=.16+.5*ca;c.strokeStyle=ca?'#7fb0ff':'#4a6aa8';c.beginPath();c.moveTo(up[0],up[1]);c.quadraticCurveTo(up[0]+10,(up[1]+CL.y)/2,CL.x,CL.y+12);c.stroke();
      c.globalAlpha=ledT[2]>=0?(act===2?.65:.35):.1;c.strokeStyle=act===2?'#ff8a80':'#5FE08D';c.beginPath();c.moveTo(wn[0],wn[1]);c.quadraticCurveTo((wn[0]+NET.x)/2,wn[1]-18,NET.x-14,NET.y);c.stroke();
      for(k=0;k<2;k++){var b=BR[k];if(b.t<0)continue;var bu=clamp((T-b.t)/600,0,1);c.globalAlpha=.5*bu;c.strokeStyle='#5FE08D';c.beginPath();c.moveTo(b.x+(k?-12:12),b.y);c.quadraticCurveTo((b.x+CL.x)/2,b.y-16,CL.x+(k?14:-14),CL.y);c.stroke();}
      /* device connections */
      for(i=0;i<DEV.length;i++){var dv=DEV[i];if(dv.t0<0)continue;var cu=clamp((T-dv.t0)/420,0,1),col=CC[dv.c],pp=portP(dv);
        c.globalAlpha=(dv.wf?.42:.5)*cu;c.strokeStyle=rgba(col,1);c.lineWidth=dv.wf?1.1:1.5;if(!dv.wf)c.setLineDash([]);else c.setLineDash([2,4]);
        c.beginPath();for(k=0;k<=16;k++){qPos([dv.X,dv.Y],pp,k/16*cu,devBend(dv),tmp);if(k)c.lineTo(tmp[0],tmp[1]);else c.moveTo(tmp[0],tmp[1]);}c.stroke();}
      c.setLineDash([]);
      /* throttle valve on the streaming guest */
      if(thrT>=0&&act===3){var g=DEV[4],gp=portP(g);qPos([g.X,g.Y],gp,.5,devBend(g),tmp);var hv=thrEnd>=0?clamp((T-thrEnd)/500,0,1):0;c.globalAlpha=.4+.6*hv;c.drawImage(sprO,tmp[0]-18,tmp[1]-18,36,36);if(hv>0)blit(SPR.cap,tmp[0],tmp[1]-16,hv,.6+.4*spring(hv*1.4));}
      /* cloud, internet, branches */
      var cg=48+ca*30*(1+.15*Math.sin(t*.004));c.globalAlpha=.25+.55*ca;c.drawImage(sprB,CL.x-cg/2,CL.y-cg/2,cg,cg);tile(CL.x,CL.y,ts*1.1,ca?BLU:NEU,.55+.45*ca,'cld');blit(SPR.cl,CL.x+ts*.55+30,CL.y,.6+.4*ca);
      var na=ledT[2]>=0?1:.45;c.globalAlpha=.4*na;c.drawImage(act===2?sprR:sprG,NET.x-22,NET.y-22,44,44);tile(NET.x,NET.y,ts,act===2?RED:GRN,na,'glb');blit(SPR.net,NET.x-6,NET.y+ts*.5+10,na*.9);
      for(k=0;k<2;k++){var b2=BR[k];if(b2.t<0)continue;var au=(T-b2.t)/700,sc2=au<1.4?Math.max(0,spring(au)):1;c.globalAlpha=.5;c.drawImage(sprG,b2.x-26,b2.y-26,52,52);tile(b2.x,b2.y,ts*sc2,GRN,Math.min(1,au*2),'bld');blit(SPR['b'+k],b2.x,b2.y+ts*.5+10,Math.min(1,au*2));}
      /* devices + identity labels */
      for(i=0;i<DEV.length;i++){var d2=DEV[i];if(d2.t0<0)continue;var au2=(T-d2.t0)/700,s2=ts*d2.K*(au2<1.4?Math.max(0,spring(au2)):1),cl2=CC[d2.c];
        c.globalAlpha=.45;var g3=s2*2.1;c.drawImage(SPC[CS[d2.c]],d2.X-g3/2,d2.Y-g3/2,g3,g3);
        tile(d2.X,d2.Y,s2,cl2,Math.min(1,au2*2),d2.k);
        var upL=d2.Y>H*.8,ly=d2.Y+(upL?-1:1)*(s2/2+10),sl=SPR['d'+i];if(sl){var hw=sl.lw/2+2,lx=clamp(d2.X,hw,Math.max(hw,W-hw));blit(sl,lx,ly,Math.min(1,au2*1.5)*(act===2||act===4||act===5?.55:1));}}
      /* Wi-Fi rings from antenna tips */
      for(i=0;i<WR.length;i++){var wr=WR[i],wu=(T-wr.t)/1300,ap=antP(wr.a);c.globalAlpha=(1-wu)*.6;c.strokeStyle='#9cc4ff';c.lineWidth=1.3;c.beginPath();c.arc(ap[0],ap[1],4+wu*44,-Math.PI*.85,-Math.PI*.15);c.stroke();}
      /* the Cybird X2 photo, with power-up spring and LEDs */
      if(PHOTO){var ps=pwrT>=0?spring(Math.min(1.4,(T-pwrT)/800)):1,pw=D.w*(.92+.08*ps),ph=D.h*(.92+.08*ps),gl=40+20*on;
        c.globalAlpha=.35+.35*on;c.drawImage(endT>=0?sprG:sprB,D.x-pw*.75,D.y-ph*.2,pw*1.5,ph*.9);
        c.globalAlpha=.55+.45*on;c.drawImage(PHOTO,D.x-pw/2,D.y-ph/2,pw,ph);
        for(k=0;k<5;k++){var lp=[D.x-pw/2+pw*LED[k][0],D.y-ph/2+ph*LED[k][1]];c.globalAlpha=1;c.fillStyle='#10161f';c.beginPath();c.arc(lp[0],lp[1],2.6,0,TAU);c.fill();
          if(ledT[k]>=0){var lu=(T-ledT[k])/500,blink=k===2||k===4?(.75+.25*Math.sin(t*.02+k)):1;c.globalAlpha=Math.min(1,lu*2)*blink;c.fillStyle=k===3&&act===2?'#ffb15c':'#7dff9e';c.beginPath();c.arc(lp[0],lp[1],2.2,0,TAU);c.fill();c.globalAlpha=Math.min(1,lu*2)*.9*blink;c.drawImage(sprG,lp[0]-9,lp[1]-9,18,18);
            if(act===0&&lu<.95&&(k===4||ledT[k+1]<0))blit(SPR['l'+k],lp[0],D.y+ph*.5+12,Math.min(1,lu*3)*(lu>.75?1-(lu-.75)/.2:1),.9);}}}
      /* ---- near plane ---- */
      cam(1.07,16);
      for(i=0;i<PK.length;i++){var p=PK[i],u=(T-p.t)/p.d;if(u<0||u>1)continue;var spk=SPC[p.c]||sprB;
        for(var j=p.tl;j>=0;j--){var uj=u-j*.04;if(uj<0)continue;qPos(p.a,p.b,uj,p.o,tmp);var sz=j?8-j:11;c.globalAlpha=.9*(1-j/(p.tl+1))*Math.min(1,u*5);c.drawImage(spk,tmp[0]-sz/2,tmp[1]-sz/2,sz,sz);}}
      if(shT>=0){var su=(T-shT)/1300;if(su<1){var sp2=spring(Math.min(1.4,su*2.2)),sx=D.x+D.w*.18,sy=D.y-D.h*.05;shield(sx,sy-6,34*sp2,su<.75?1:(1-su)/.25,RED);blit(SPR.blk,sx,sy+20,su<.75?1:(1-su)/.25,.9);}}
      for(i=0;i<PART.length;i++){var q2=PART[i],lf=1-q2.l/q2.m;c.globalAlpha=lf*.95;var spp=SPC[q2.c]||sprB;c.drawImage(spp,q2.x-q2.s/2,q2.y-q2.s/2,q2.s,q2.s);}
      for(i=RING.length-1;i>=0;i--){var rg=RING[i],rgu=(T-rg.t)/900;if(rgu<0)continue;if(rgu>=1){RING.splice(i,1);continue;}var rad=(16+rgu*W*.5)*(rg.s||1);c.globalAlpha=(1-rgu)*.7;c.strokeStyle=rgba(rg.c,1);c.lineWidth=2;c.beginPath();c.ellipse(rg.x,rg.y,rad,rad*.6,0,0,TAU);c.stroke();}
      if(endT>=0){var eu=clamp((T-endT)/900,0,1);shield(D.x+D.w*.06,D.y-D.h*.62,26*spring(Math.min(1.4,eu*1.6)),eu,GRN);}
      c.globalAlpha=1;
      var fo=Math.max(clamp((T-21000)/500,0,1),1-clamp(T/400,0,1));
      if(fo>0){c.setTransform(DPR,0,0,DPR,0,0);c.fillStyle=rgba(BG,fo);c.fillRect(0,0,W,H);}
    }
    function hud(){
      var a=0;for(var k=ACT.length-1;k>=0;k--){if(T>=ACT[k]){a=k;break;}}
      if(a!==act){var w=cbv.classList.contains('win');setAct(a);if(w&&a===6)cbv.classList.add('win');}
      var fs='scaleX('+(T/LOOP).toFixed(3)+')';if(fs!==lastFill){fill.style.transform=fs;lastFill=fs;}
      var nn=Math.min(logS.length,Math.floor((T-logT)/14));if(nn!==logN){logN=nn;lg.textContent=logS.slice(0,nn);}
      var tf=(S.px*12).toFixed(1)+'px '+(S.py*8).toFixed(1)+'px';if(tf!==lastFx){fxl.style.translate=tf;lastFx=tf;}
    }
    function tick(t,dt){
      if(!W)return;T+=dt;if(T>=LOOP){T-=LOOP;ci=0;}
      while(ci<CUES.length&&CUES[ci][0]<=T){CUES[ci][1]();ci++;}
      update(dt);render(t);hud();
    }
    function finalFrame(){
      reset();setAct(6);DEV.forEach(function(dv){dv.t0=100;});BR.forEach(function(b){b.t=100;});ledT=[100,100,100,100,100];pwrT=1;cloudT=100;wifiT=-1;
      KB[0].textContent='6';KE[0].textContent='6 online';kpi(0,'good');KB[1].textContent='2';KE[1].textContent='2 stopped';kpi(1,'good');KB[2].textContent='2';KE[2].textContent='applied';kpi(2,'good');KB[3].textContent='3';KE[3].textContent='3 sites';kpi(3,'good');
      cEnd.className='cbv-end fin';lgp.textContent='\u2713';lg.textContent='One device. Total protection.';fill.style.transform='scaleX(1)';
      T=19500;act=6;S.fs=1;S.fx=W/2;S.fy=H*.53;endT=-1;render(0);
    }
    size();
    function onSize(){var was=W;size();if(R){finalFrame();return;}if(!was)reset();}
    if('ResizeObserver' in window)new ResizeObserver(onSize).observe(sc);else addEventListener('resize',onSize);
    if(img&&!img.complete)img.addEventListener('load',function(){photo();if(R)finalFrame();});
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){size();if(R)finalFrame();});
    if(R){finalFrame();if(tk)tk.classList.add('paused');return;}
    reset();
    var stage=cbv.closest('.stage')||sc;
    stage.addEventListener('pointermove',function(e){var r=sc.getBoundingClientRect();S.ptr=true;S.pxT=clamp(((e.clientX-r.left)/r.width-.5)*2,-1.2,1.2);S.pyT=clamp(((e.clientY-r.top)/r.height-.5)*2,-1.2,1.2);});
    stage.addEventListener('pointerleave',function(){S.ptr=false;});
    sc.addEventListener('pointermove',function(e){var r=sc.getBoundingClientRect();spot.style.transform='translate('+(e.clientX-r.left).toFixed(0)+'px,'+(e.clientY-r.top).toFixed(0)+'px)';sc.classList.add('hov');});
    sc.addEventListener('pointerleave',function(){sc.classList.remove('hov');});
    var on=loop(tick);XH.whenVisible(cbv,function(v){on(v);if(tk)tk.classList.toggle('paused',!v);});
  })();

  /* =========================================================
     3. Global micro-interactions
     ========================================================= */
  $$('.cb-kin').forEach(function(h){var i=0;h.setAttribute('aria-label',h.textContent.replace(/\\s+/g,' ').trim());
    (function walk(n){Array.prototype.slice.call(n.childNodes).forEach(function(c){
      if(c.nodeType===3){var f=d.createDocumentFragment();c.textContent.split(/(\\s+)/).forEach(function(p){if(!p)return;if(/^\\s+$/.test(p))f.appendChild(d.createTextNode(p));else{var s=d.createElement('span');s.className='w';s.setAttribute('aria-hidden','true');s.style.setProperty('--i',i++);s.textContent=p;f.appendChild(s);}});c.parentNode.replaceChild(f,c);}
      else if(c.nodeType===1)walk(c);});})(h);});
  $$('.cb-sd').forEach(function(s){function w(){s.style.setProperty('--sw',(s.clientWidth-48)+'px');}w();addEventListener('resize',w);XH.whenVisible(s,function(v){s.classList.toggle('run',v&&!R);});});
  ['cbFlow'].forEach(function(id){var f=$id(id);if(f)XH.whenVisible(f,function(v){f.classList.toggle('run',v&&!R);});});
  (function(){var f=$('.cb-ft');if(f)XH.whenVisible(f,function(v){f.classList.toggle('run',v&&!R);});
    $$('.cb-ft .ft').forEach(function(c){c.addEventListener('click',function(){c.classList.toggle('tap');});});
    $$('.kb').forEach(function(k){XH.whenVisible(k,function(v){k.classList.toggle('run',v&&!R);if(v&&!k._c){k._c=1;var b=$('[data-to]',k);if(b){var to=+b.getAttribute('data-to');setTimeout(function(){tween(b,to,function(x){return String(Math.round(x));},1200);},R?0:350);}}});});
  })();
  if(!R){
    var shs=$$('main .sec .sh'),ptick=false;
    var para=function(){ptick=false;var vh=innerHeight,rs=shs.map(function(e){return e.getBoundingClientRect();});
      shs.forEach(function(e,i){var r=rs[i];if(r.bottom<-80||r.top>vh+80)return;var p=(r.top+r.height/2-vh*.5)/vh;e.style.translate='0 '+(clamp(p,-1,1)*-16).toFixed(1)+'px';});};
    addEventListener('scroll',function(){if(!ptick){ptick=true;requestAnimationFrame(para);}},{passive:true});para();
  }
  if(FINE&&!R){
    $$('.cb-mag').forEach(function(b){
      b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.classList.add('mg');b.style.translate=(x*16).toFixed(1)+'px '+(y*11).toFixed(1)+'px';});
      b.addEventListener('pointerleave',function(){b.classList.remove('mg');b.style.translate='';});
    });
    $$('.cb-tl').forEach(function(c){
      c.addEventListener('pointermove',function(e){if(c.classList.contains('rv')&&!c.classList.contains('in'))return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
        c.classList.add('tilting');c.style.transform='perspective(900px) rotateX('+((.5-y)*6).toFixed(2)+'deg) rotateY('+((x-.5)*7).toFixed(2)+'deg) translateY(-4px)';c.style.setProperty('--gx',(x*100).toFixed(1)+'%');c.style.setProperty('--gy',(y*100).toFixed(1)+'%');});
      c.addEventListener('pointerleave',function(){c.classList.remove('tilting');c.style.transform='';});
    });
  }
  function ulMove(tabs){var ul=$('.ul',tabs),b=$('button.on',tabs);if(!ul||!b)return;ul.style.width=b.offsetWidth+'px';ul.style.transform='translateX('+b.offsetLeft+'px)';}

  /* =========================================================
     4. How it works \u2014 sticky stage that morphs through six layouts
     ========================================================= */
  (function(){
    var jr=$id('cbJr');if(!jr)return;
    var st=$id('cbJrSt'),lis=$$('li',st),jv=$id('cbJrV'),cv=$id('cbJrCv'),ctx=cv.getContext('2d'),rb=$$('#cbJrRail b'),rf=$id('cbJrFill'),hdT=$id('cbJrT'),cap=$id('cbJrCap');
    var NT=30,NL=6;
    var CNT=[6,6,6,4,5,3],CATN=['Employees','Laptops & desktops','Mobile devices','Printers & IoT','Guests','IP phones & cameras'],CATC=[[127,176,255],[90,150,240],[150,190,255],CYA,PUR,[80,180,200]];
    var CAP=[['Every device','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>','Your business network','30 devices \xB7 6 kinds \xB7 staff and guests'],
      ['One login per person','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>','Secure Wi-Fi \xB7 per-user access','Staff on VLAN 10 \xB7 IoT on VLAN 30 \xB7 guests on VLAN 99'],
      ['Checked on the way through','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>','Cybird X2 inspects','Firewall \xB7 web & DNS \xB7 threat protection \xB7 app control'],
      ['Out to the apps you use','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>','Secure internet connection','Clean traffic out \xB7 3 threats stopped at the box'],
      ['Managed from anywhere','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>','Cybird Cloud','Centralized management \xB7 threat intelligence'],
      ['Reports you can act on','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>','Visibility & insights','Dashboards \xB7 alerts \xB7 reports \xB7 usage analytics']];
    var CAT=[];CNT.forEach(function(n,c){for(var j=0;j<n;j++)CAT.push(c);});
    var BAND=function(i){var c=CAT[i];return c===4?2:(c===3||c===5)?1:0;};
    var BAD={2:1,14:1,24:1};
    var r=rng(23),SEED=[],inCat=[],inBand=[],inGood=[],cc={},bc={},gc=0;
    for(var i=0;i<NT;i++){var c=CAT[i],b=BAND(i);inCat.push(cc[c]=(cc[c]===undefined?0:cc[c]+1));inBand.push(bc[b]=(bc[b]===undefined?0:bc[b]+1));inGood.push(BAD[i]?-1:gc++);SEED.push({jx:r(),jy:r(),s:r()});}
    var BANDC=[BLU,CYA,PUR],BANDN=[18,7,5];
    var DST=['Microsoft 365','Google Workspace','Cloud apps','Web browsing','Banking & finance','E-commerce'];
    var CLOUD=(function(){var pts=[];for(var k=0;k<NT;k++){var a=k/NT*TAU-Math.PI/2,rr2=1+.22*Math.abs(Math.sin(a*2.5))-.1*Math.max(0,Math.sin(a));pts.push([Math.cos(a)*rr2,Math.sin(a)*rr2*.62]);}return pts;})();
    var LAY=[
      function(i,g){var c=CAT[i],bx=g.W*[.2,.5,.8][c%3],by=g.top+g.RH*[.3,.76][Math.floor(c/3)],j=inCat[i],cols=3,row=Math.floor(j/cols),col=j%cols,nr=Math.ceil(CNT[c]/cols),ncol=Math.min(cols,CNT[c]),sp=g.W*.045;
        return {x:bx+(col-(ncol-1)/2)*sp,y:by+(row-(nr-1)/2)*sp+(g.mini?0:4),w:g.W*.03,h:g.W*.03,r:4,c:CATC[c],a:1};},
      function(i,g){var b=BAND(i),k=inBand[i],n=BANDN[b],per=b===0?9:n,row=Math.floor(k/per),col=k%per,y=g.top+g.RH*[.24,.58,.84][b]+(b===0?(row-.5)*g.W*.045:0),x=g.W*(.36+.58*(per>1?col/(per-1):.5)),pulse=b===0?1+.12*Math.sin(g.t*.004+k):1;
        return {x:x,y:y,w:g.W*.026*pulse,h:g.W*.026*pulse,r:g.W*.02,c:BANDC[b],a:1};},
      function(i,g){var lane=i%6,y0=g.top+g.RH*(.14+lane*.14),yc=g.top+g.RH*.5,u=((g.t/4200)+SEED[i].s)%1,x,y,bad=BAD[i];
        if(u<.48){var q=u/.48;x=g.W*lerp(.05,.42,q);y=lerp(y0,yc+(lane-2.5)*g.RH*.04,eio(q));}
        else if(bad){var hold=(u-.48)/.52;x=g.W*.42+Math.sin(g.t*.05+i)*1.5;y=yc+(lane-2.5)*g.RH*.04;return {x:x,y:y,w:g.W*.03,h:g.W*.03,r:4,c:RED,a:1-hold*.7};}
        else{var q2=(u-.48)/.52;x=g.W*lerp(.58,.96,q2);y=lerp(yc+(lane-2.5)*g.RH*.04,y0,eio(q2));}
        return {x:x,y:y,w:g.W*.026,h:g.W*.026,r:4,c:bad&&u<.48?AMB:GRN,a:Math.min(1,Math.sin(u*Math.PI)*2.5)};},
      function(i,g){if(BAD[i]){var bk=Object.keys(BAD).indexOf(String(i));return {x:g.W*(.1+bk*.05),y:g.top+g.RH*.9,w:g.W*.026,h:g.W*.026,r:4,c:RED,a:.55};}
        var j=inGood[i],dd=j%6,k=Math.floor(j/6),x=g.W*(.78+(k-2)*.035),y=g.top+g.RH*(.1+dd*.16);
        return {x:x,y:y+Math.sin(g.t*.002+i)*1.5,w:g.W*.026,h:g.W*.026,r:g.W*.02,c:GRN,a:1};},
      function(i,g){var p=CLOUD[i],R2=Math.min(g.W*.3,g.RH*.62),ph=g.t*.0003;var a=Math.atan2(p[1],p[0])+ph,m=Math.hypot(p[0],p[1]);
        return {x:g.W*.5+Math.cos(a)*m*R2,y:g.top+g.RH*.36+Math.sin(a)*m*R2*.62/0.62*.62,w:g.W*.026,h:g.W*.026,r:g.W*.02,c:BAD[i]?AMB:BLU,a:1};},
      function(i,g){if(i<12){var bx0=g.W*.06,bx1=g.W*.5,bw=(bx1-bx0)/12,hh=g.RH*(.16+((i*7)%5)*.07+i*.012)*(1+Math.sin(g.t*.002+i)*.03);return {x:bx0+(i+.5)*bw,y:g.top+g.RH*.86-hh/2,w:bw*.64,h:hh,r:3,c:i%4===3?AMB:BLU,a:.95};}
        var j=i-12,an=-Math.PI/2+j/18*TAU+g.t*.00022,Rr=Math.min(g.W*.16,g.RH*.3),s2=Math.min(g.W*.04,g.RH*.07);
        return {x:g.W*.76+Math.cos(an)*Rr,y:g.top+g.RH*.5+Math.sin(an)*Rr,w:s2,h:s2,r:s2*.3,c:j<15?GRN:RED,a:1};}
    ];
    function txt(c,s,x,y,sz,col,al,align,wt){c.globalAlpha=al;c.fillStyle=col;c.font=(wt||600)+' '+sz+'px "IBM Plex Mono",monospace';c.textAlign=align||'left';c.textBaseline='middle';c.fillText(s,x,y);}
    var OVER=[
      function(c,g,w){for(var k=0;k<6;k++){var bx=g.W*[.2,.5,.8][k%3],by=g.top+g.RH*[.3,.76][Math.floor(k/3)],bw=g.W*.27,bh=g.RH*.36;c.globalAlpha=w;rr(c,bx-bw/2,by-bh/2-(g.mini?0:8),bw,bh+(g.mini?0:8),10);c.fillStyle='rgba(127,176,255,.05)';c.fill();c.strokeStyle=rgba(CATC[k],.35);c.lineWidth=1;c.stroke();
          if(!g.mini)txt(c,CATN[k]+' \xB7 '+CNT[k],bx-bw/2+8,by-bh/2+2,9,rgba(CATC[k],1),w,'left',700);}},
      function(c,g,w){var ax=g.W*.13,ay=g.top+g.RH*.52;c.globalAlpha=w;c.fillStyle='#0c2350';rr(c,ax-g.W*.05,ay-12,g.W*.1,24,7);c.fill();c.strokeStyle='#7fb0ff';c.lineWidth=1.3;c.stroke();
        for(var k=0;k<3;k++){var u=((g.t*.0006)+k/3)%1;c.globalAlpha=w*(1-u)*.7;c.strokeStyle='#9cc4ff';c.beginPath();c.arc(ax,ay-12,6+u*26,-Math.PI*.85,-Math.PI*.15);c.stroke();}
        var lab=['Staff \xB7 WPA2-Enterprise \xB7 VLAN 10','IoT \xB7 VLAN 30','Guests \xB7 internet only \xB7 VLAN 99'];
        for(k=0;k<3;k++){var y=g.top+g.RH*[.24,.58,.84][k];c.globalAlpha=w*.35;c.strokeStyle=rgba(BANDC[k],1);c.setLineDash([3,5]);c.lineDashOffset=-g.t*.03;c.beginPath();c.moveTo(ax+g.W*.05,ay);c.quadraticCurveTo(g.W*.28,y,g.W*.34,y);c.stroke();c.setLineDash([]);
          if(!g.mini)txt(c,lab[k],g.W*.36,y-(k===0?g.W*.045:0)-14,9,rgba(BANDC[k],1),w,'left',700);}
        if(!g.mini)txt(c,'secure Wi-Fi',ax,ay+22,9,'#9fb6de',w,'center');},
      function(c,g,w){var bx=g.W*.42,bw=g.W*.16,by=g.top+g.RH*.2,bh=g.RH*.6;c.globalAlpha=w;rr(c,bx,by,bw,bh,12);c.fillStyle='rgba(21,101,216,.22)';c.fill();c.strokeStyle='#7fb0ff';c.lineWidth=1.5;c.stroke();
        var ms=['Firewall','Web \xB7 DNS','Threats','Apps'];for(var k=0;k<4;k++){var my=by+bh*(.16+k*.22),hot=Math.floor(g.t/700)%4===k;c.globalAlpha=w*(hot?1:.6);rr(c,bx+6,my-8,bw-12,16,5);c.fillStyle=hot?'#1565D8':'rgba(127,176,255,.12)';c.fill();if(!g.mini)txt(c,ms[k],bx+bw/2,my,8.5,'#fff',w*(hot?1:.75),'center',700);}
        if(!g.mini){txt(c,'Cybird X2',bx+bw/2,by-10,10,'#fff',w,'center',700);txt(c,'blocked',bx-6,g.top+g.RH*.86,9,'#ff9a8f',w,'right');txt(c,'clean \u2192',g.W*.96,g.top+g.RH*.06,9,'#8ff0b2',w,'right');}},
      function(c,g,w){for(var k=0;k<6;k++){var y=g.top+g.RH*(.1+k*.16);c.globalAlpha=w;rr(c,g.W*.5,y-g.RH*.065,g.W*.47,g.RH*.13,8);c.fillStyle='rgba(95,224,141,.06)';c.fill();c.strokeStyle='rgba(95,224,141,.3)';c.lineWidth=1;c.stroke();if(!g.mini)txt(c,DST[k],g.W*.52,y,9.5,'#cfe0ff',w,'left',600);}
        var sx=g.W*.3,sy=g.top+g.RH*.5,p=path2('shd');c.globalAlpha=w*.35;c.strokeStyle='#5FE08D';c.setLineDash([3,5]);c.lineDashOffset=-g.t*.03;c.beginPath();c.moveTo(g.W*.06,sy);c.lineTo(g.W*.48,sy);c.stroke();c.setLineDash([]);
        if(p){c.save();c.globalAlpha=w;c.translate(sx-14,sy-14);c.scale(28/24,28/24);c.fillStyle='rgba(22,163,74,.3)';c.fill(p);c.strokeStyle='#5FE08D';c.lineWidth=2;c.stroke(p);c.restore();}
        if(!g.mini){txt(c,'secure internet',sx,sy+24,9,'#8ff0b2',w,'center');txt(c,'stopped at Cybird X2',g.W*.06,g.top+g.RH*.98,9,'#ff9a8f',w,'left');}},
      function(c,g,w){var cx=g.W*.5,cy=g.top+g.RH*.36;if(!g.mini){txt(c,'Cybird Cloud',cx,cy-6,13,'#fff',w,'center',700);txt(c,'management \xB7 threat intelligence',cx,cy+12,8.5,'#9fb6de',w,'center');}
        var sites=[['Office',.2],['Branch',.5],['Remote',.8]];for(var k=0;k<3;k++){var sx=g.W*sites[k][1],sy=g.top+g.RH*.9;c.globalAlpha=w*.4;c.strokeStyle='#7fb0ff';c.setLineDash([3,5]);c.lineDashOffset=g.t*.04;c.beginPath();c.moveTo(sx,sy-10);c.lineTo(cx+(sx-cx)*.3,cy+g.RH*.2);c.stroke();c.setLineDash([]);
          c.globalAlpha=w;rr(c,sx-g.W*.07,sy-10,g.W*.14,20,6);c.fillStyle='#0c2350';c.fill();c.strokeStyle='#7fb0ff';c.lineWidth=1;c.stroke();txt(c,g.mini?'':sites[k][0],sx,sy,8.5,'#cfe0ff',w,'center',600);
          var u=((g.t*.0005)+k*.33)%1,px=lerp(sx,cx+(sx-cx)*.3,u),py=lerp(sy-10,cy+g.RH*.2,u);c.globalAlpha=w*Math.sin(u*Math.PI);c.fillStyle='#9cc4ff';c.beginPath();c.arc(px,py,2.5,0,TAU);c.fill();}},
      function(c,g,w){var cx=g.W*.76,cy=g.top+g.RH*.5;txt(c,'30',cx,cy-4,g.mini?20:30,'#ffffff',w,'center',700);txt(c,'devices \xB7 sample',cx,cy+(g.mini?14:20),g.mini?7.5:9.5,'#9fb6de',w,'center');
        c.globalAlpha=w*.35;c.strokeStyle='rgba(127,176,255,1)';c.lineWidth=1;c.beginPath();c.moveTo(g.W*.06,g.top+g.RH*.86);c.lineTo(g.W*.5,g.top+g.RH*.86);c.stroke();
        txt(c,g.mini?'events / day':'events by day \xB7 sample',g.W*.06,g.top+g.RH*.94,g.mini?7.5:9.5,'#9fb6de',w);
        if(!g.mini){var al=['Phishing blocked \xB7 priya','New device \xB7 approved','Streaming capped'],k2=Math.floor(g.t/1600)%3;rr(c,g.W*.06,g.top+g.RH*.04,g.W*.4,22,7);c.globalAlpha=w;c.fillStyle='rgba(255,140,26,.18)';c.fill();txt(c,'\u25CF '+al[k2],g.W*.08,g.top+g.RH*.04+11,9,'#FFB15C',w,'left',700);}}
    ];
    function draw(c,W,H,p,t,top,bot,mini){
      c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,W,H);
      var g={W:W,H:H,top:top,RH:bot-top,t:t,mini:mini},k=Math.min(NL-2,Math.floor(p)),f=clamp(p-k,0,1),fe=eio(f),w=[0,0,0,0,0,0];w[k]+=1-fe;w[k+1]+=fe;
      for(var L=0;L<NL;L++)if(w[L]>.02)OVER[L](c,g,w[L]);
      c.globalAlpha=1;
      for(var i=0;i<NT;i++){var A=LAY[k](i,g),B=LAY[k+1](i,g),fi=eio(clamp(f*1.4-i/NT*.4,0,1));
        var x=lerp(A.x,B.x,fi),y=lerp(A.y,B.y,fi),ww=lerp(A.w,B.w,fi),hh=lerp(A.h,B.h,fi),al=lerp(A.a,B.a,fi),col=mix(A.c,B.c,fi);
        if(al<=.01)continue;c.globalAlpha=al;rr(c,x-ww/2,y-hh/2,ww,hh,lerp(A.r,B.r,fi));
        c.fillStyle=rgba(col,.92);c.fill();c.strokeStyle='rgba(255,255,255,.18)';c.lineWidth=1;c.stroke();}
      c.globalAlpha=1;
    }
    var pT=0,pS=0,kr=-1,W=0,H=0,mini=$$('.jr-mc',st).map(function(m,k){var o={el:m,k:k,vis:false,ctx:m.getContext('2d'),W:0,H:0};XH.whenVisible(m,function(v){o.vis=v;});return o;});
    function measure(){
      var vh=parent.innerHeight,frameTop=frameElement.getBoundingClientRect().top;
      var header=parent.document.querySelector('.xh-header'),headerBottom=header?header.getBoundingClientRect().bottom:0;
      var pinTop=Math.max(16,headerBottom+16),y=-frameTop+vh*.5;
      if(jv.offsetParent!==null){
        var track=jr.getBoundingClientRect(),limit=Math.max(0,st.offsetHeight-jv.offsetHeight);
        var offset=clamp(pinTop-frameTop-track.top,0,limit);
        jv.style.transform='translate3d(0,'+offset.toFixed(2)+'px,0)';
        y=-frameTop+pinTop+jv.offsetHeight/2;
      }else jv.style.transform='';
      var cs=lis.map(function(l){var rc=l.getBoundingClientRect();return rc.top+rc.height/2;}),n=NL-1;
      if(y<=cs[0])pT=0;else if(y>=cs[n])pT=n;else for(var k=0;k<n;k++){if(y>=cs[k]&&y<cs[k+1]){pT=k+(y-cs[k])/(cs[k+1]-cs[k]);break;}}}
    function sizeBig(){W=cv.clientWidth;H=cv.clientHeight;if(!W)return;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);}
    function sizeMini(o){var w=o.el.clientWidth,h=o.el.clientHeight;if(w!==o.W||h!==o.H){o.W=w;o.H=h;o.el.width=Math.round(w*DPR);o.el.height=Math.round(h*DPR);}}
    function steps(k){if(k===kr)return;kr=k;lis.forEach(function(l,i){l.classList.toggle('on',i===k);l.classList.toggle('hot',i===k);});
      rb.forEach(function(b,i){b.classList.toggle('on',i<=k);b.classList.toggle('hot',i===k);});
      var cp=CAP[k];setT('cbJrN','Step '+(k+1)+' of 6');setT(hdT,cp[0]);$id('cbJrCi').innerHTML=cp[1];setT('cbJrCb',cp[2]);setT('cbJrCs',cp[3]);
      if(!R){[hdT,cap].forEach(function(e){restart(e,'sw');});}}
    var bigVis=false,lastRf='';
    function tick(t,dt){
      var big=jv.offsetParent!==null&&bigVis;
      if(big){if(cv.clientWidth!==W||cv.clientHeight!==H)sizeBig();
        pS+=(pT-pS)*(1-Math.exp(-dt/150));if(Math.abs(pT-pS)<.001)pS=pT;
        steps(clamp(Math.round(pS),0,NL-1));var rfs='scaleY('+(pS/(NL-1)).toFixed(3)+')';if(rfs!==lastRf){rf.style.transform=rfs;lastRf=rfs;}
        draw(ctx,W,H,pS,t,H*.17,H*.8,false);}
      mini.forEach(function(o){if(!o.vis||!o.el.offsetParent)return;sizeMini(o);if(o.W)draw(o.ctx,o.W,o.H,o.k,t,o.H*.1,o.H*.92,true);});
    }
    addEventListener('scroll',measure,{passive:true});addEventListener('resize',function(){measure();sizeBig();});
    measure();pS=pT;sizeBig();steps(clamp(Math.round(pS),0,NL-1));
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){measure();sizeBig();});
    if(R){var stat=function(){measure();pS=Math.round(pT);steps(pS);sizeBig();if(W)draw(ctx,W,H,pS,0,H*.17,H*.8,false);rf.style.transform='scaleY('+(pS/(NL-1))+')';mini.forEach(function(o){sizeMini(o);if(o.W)draw(o.ctx,o.W,o.H,o.k,0,o.H*.1,o.H*.92,true);});};
      addEventListener('scroll',stat,{passive:true});addEventListener('resize',stat);stat();return;}
    var on=loop(tick);XH.whenVisible(jr,function(v){bigVis=v;on(v);});
  })();

  /* =========================================================
     5. Hardware explorer \u2014 flip front/back, hotspots, spec rows
     ========================================================= */
  (function(){
    var dx=$id('cbDx');if(!dx)return;
    var stg=$id('cbDxSt'),card=$id('cbDxC'),tabs=$('.dx-t',dx),tb=$$('button',tabs),pop=$id('cbDxP'),hint=$id('cbDxHint'),sh=$('.dx-sh',dx),faces=$$('.dx-f',dx),rows=$$('#cbSpT>div');
    var HS={ant:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-6"/><circle cx="12" cy="14" r="8"/></svg>','Wi-Fi \xB7 antennas','Dual-band 802.11ax Wi-Fi 6','2.4 GHz & 5 GHz \xB7 2\xD72 MU-MIMO \xB7 up to 1200 Mbps'],
      led:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12h4l3-8 4 16 3-8h4"/></svg>','Status lights','PWR \xB7 SYS \xB7 WAN \xB7 LAN \xB7 WIFI','Power, system, internet, wired and Wi-Fi status at a glance. Firewall throughput up to 900 Mbps*.'],
      usbf:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>','Front panel','USB port','A USB port on the front panel; the specifications list 2 \xD7 USB 3.0.'],
      cpu:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg>','Inside the X2','MediaTek 1.3 GHz dual-core ARM','1 GB DDR4 memory \xB7 128 MB NAND flash storage'],
      dc:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>','Power','DC 12 V / 2 A','Power adapter included in the box \xB7 operating temperature 0\u201340 \xB0C'],
      rst:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>','Back panel','Reset button','Recessed reset button next to the power input.'],
      usb3:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>','Back panel','2 \xD7 USB 3.0','Two USB 3.0 ports on the back panel.'],
      wan:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>','WAN','1 \xD7 WAN 10/100/1000 Mbps','Connects to your ISP modem or fibre router \xB7 WireGuard VPN up to 300 Mbps*'],
      lan:['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="5" rx="1"/><rect x="2" y="17" width="6" height="5" rx="1"/><rect x="16" y="17" width="6" height="5" rx="1"/><path d="M12 7v5M5 17v-3h14v3"/></svg>','LAN','4 \xD7 LAN 10/100/1000 Mbps','Gigabit ports for PCs, printers, IP phones, cameras or a switch']};
    var rot=0,tgt=0,drag=false,sx=0,sr=0,idle=0,touched=false,cur='ant';
    function show(k){var h=HS[k];if(!h)return;cur=k;$id('cbDxPi').innerHTML=h[0];setT('cbDxPk',h[1]);setT('cbDxPb',h[2]);setT('cbDxPe',h[3]);restart(pop,'sw');
      $$('.hs',dx).forEach(function(b){b.classList.toggle('on',b.getAttribute('data-h')===k);});rows.forEach(function(r){r.classList.toggle('hl',r.getAttribute('data-h')===k);});}
    function side(){var b=Math.cos(rot*Math.PI/180)<0?1:0;tb.forEach(function(x,i){x.classList.toggle('on',i===b);});ulMove(tabs);faces.forEach(function(f,i){f.style.pointerEvents=i===b?'auto':'none';});return b;}
    function apply(){card.style.transform='rotateX(6deg) rotateY('+rot.toFixed(2)+'deg)';var c=Math.abs(Math.cos(rot*Math.PI/180));sh.style.setProperty('--sx',(.55+.45*c).toFixed(3));side();}
    tb.forEach(function(b){b.addEventListener('click',function(){touched=true;var v=+b.getAttribute('data-v'),base=Math.round(tgt/360)*360;tgt=base+(v?180:0);if(R){rot=tgt;apply();}show(v?'wan':'ant');on(true);});});
    $$('.hs',dx).forEach(function(b){b.addEventListener('click',function(e){e.stopPropagation();touched=true;show(b.getAttribute('data-h'));});});
    stg.addEventListener('pointerdown',function(e){if(e.target.closest('.hs'))return;drag=true;touched=true;sx=e.clientX;sr=tgt;stg.classList.add('drag');hint.classList.add('gone');try{stg.setPointerCapture(e.pointerId);}catch(x){}});
    stg.addEventListener('pointermove',function(e){if(!drag)return;tgt=sr+(e.clientX-sx)*.6;if(R){rot=tgt;apply();}});
    function up(){if(!drag)return;drag=false;stg.classList.remove('drag');tgt=Math.round(tgt/180)*180;if(R){rot=tgt;apply();}var b=Math.abs(Math.round(tgt/180))%2;show(b?'wan':'ant');}
    stg.addEventListener('pointerup',up);stg.addEventListener('pointercancel',up);
    var on=loop(function(t,dt){idle+=dt;var sway=(!drag&&!touched)?Math.sin(t*.0009)*14:0;rot+=(tgt+sway-rot)*(1-Math.exp(-dt/(drag?60:220)));apply();});
    apply();show('ant');ulMove(tabs);addEventListener('resize',function(){ulMove(tabs);});
    if(R)return;XH.whenVisible(dx,function(v){on(v);});
  })();

  /* =========================================================
     6. Threat simulator
     ========================================================= */
  (function(){
    var box=$id('cbSim');if(!box)return;
    var evB=$id('smEvB'),go=$id('smGo'),pipe=$id('smPipe'),pn=$$('.pn',pipe),ln=$id('smLn'),pkE=$id('smPk'),md=$id('smMd'),MS={},vd=$id('smVd'),logE=$id('smLog');
    $$('span',md).forEach(function(s){MS[s.getAttribute('data-m')]=s;});
    var IC={lap:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg>',phn:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>',unk:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg>'};
    var EV={
      phish:{ic:'lap',sb:'Staff laptop',sn:'priya \xB7 VLAN 10',w:'WPA2-Enterprise \xB7 staff',db:'Fake KYC site',dn:'bank-kyc-update.xyz',out:['nac','fw','web'],stop:'web',vt:'Blocked \u2014 phishing site',vm:'Secure Web Gateway \xB7 DNS filtering',vw:'A block page instead of the fake login. The attempt shows up as an alert.'},
      mal:{ic:'lap',sb:'Staff laptop',sn:'priya \xB7 VLAN 10',w:'WPA2-Enterprise \xB7 staff',db:'File download',dn:'invoice_0412.pdf.exe',out:['nac','fw','web'],ret:['tp'],stop:'tp',vt:'Blocked \u2014 malware download',vm:'Threat protection \xB7 multi-layer security',vw:'The file never reaches the laptop; the download is cancelled.'},
      unk:{ic:'unk',sb:'Unknown device',sn:'not registered',w:'shared password tried',db:'Office network',dn:'staff LAN',out:['nac'],stop:'nac',vt:'Denied \u2014 unknown device',vm:'Network Access Control \xB7 verifies users, devices & permissions',vw:'The device is refused until IT approves it.'},
      gprn:{ic:'phn',sb:'Guest phone',sn:'visitor \xB7 VLAN 99',w:'guest Wi-Fi',db:'Office printer',dn:'IoT VLAN 30',out:['nac','fw'],stop:'fw',vt:'Blocked \u2014 guests stay off the office LAN',vm:'Secure Business Wi-Fi (separate guest access) \xB7 firewall policy',vw:'The visitor still has internet, just not your printer or files.'},
      app:{ic:'phn',sb:'Staff phone',sn:'arjun \xB7 VLAN 10',w:'WPA2-Enterprise \xB7 staff',db:'Streaming app',dn:'restricted 10:00\u201318:00',out:['nac','fw','web','tp','app'],stop:'app',vt:'Blocked \u2014 app restricted by policy',vm:'Smart Controls & Policies \xB7 application control',vw:'A notice that the app is not allowed during work hours.'},
      ok:{ic:'lap',sb:'Staff laptop',sn:'priya \xB7 VLAN 10',w:'WPA2-Enterprise \xB7 staff',db:'Microsoft 365',dn:'trusted cloud app',out:['nac','fw','web','tp','app'],stop:null,vt:'Allowed \u2014 clean traffic',vm:'All checks passed \xB7 business app prioritised',vw:'Mail and files open normally.'}};
    var cur='phish',tl=null,tally={ok:0,bad:0},n=0,lastL='',lastP='';
    function pick(k){cur=k;var e=EV[k];$$('button',evB).forEach(function(b){b.classList.toggle('on',b.getAttribute('data-e')===k);});
      $id('smPI').innerHTML=IC[e.ic];setT('smN0b',e.sb);setT('smN0',e.sn);setT('smN1',e.w);setT('smN3b',e.db);setT('smN3',e.dn);clear();}
    function clear(){pn.forEach(function(p){p.classList.remove('hit','bad','ok','dim');});Object.keys(MS).forEach(function(m){MS[m].className='';});ln.style.transform='scaleX(0)';ln.classList.remove('bad');pkE.style.opacity='0';pkE.className='pk';vd.className='sm-vd';setT('smVb','Ready');setT('smVm','\u2014');setT('smVw','Press \u201CRun it\u201D.');setT('smN2','inspect');}
    function pkAt(pos){var w=pipe.clientWidth*.25;var tx='translateX('+(pos*w).toFixed(1)+'px)';if(tx!==lastP){pkE.style.transform=tx;lastP=tx;}}
    function verdict(e){var bad=!!e.stop;vd.className='sm-vd '+(bad?'bad':'ok');restart(vd,'pop');$id('smVi').innerHTML=bad?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>':'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>';setT('smVb',e.vt);setT('smVm',e.vm);setT('smVw',e.vw);
      if(bad)tally.bad++;else tally.ok++;setT('smTally',tally.ok+' allowed \xB7 '+tally.bad+' blocked');
      var ph=$('.ph',logE);if(ph)ph.remove();var li=d.createElement('li');n++;li.innerHTML='<i class="'+(bad?'r':'g')+'">'+(bad?'\u2715':'\u2713')+'</i><span>#'+n+' '+e.sb.toLowerCase()+' \u2192 '+e.dn+' \xB7 '+(bad?e.vm.split(' \xB7 ')[0].toLowerCase():'allowed')+'</span>';logE.insertBefore(li,logE.firstChild);while(logE.children.length>6)logE.removeChild(logE.lastChild);}
    /* timeline: list of {t,fn} plus continuous packet position */
    function run(){var e=EV[cur];clear();go.classList.remove('pl');void go.offsetWidth;go.classList.add('pl');
      if(R){(e.out.concat(e.ret||[])).forEach(function(m){MS[m].className=m===e.stop?'stop':'pass';});pn[2].classList.add(e.stop?'bad':'ok');if(!e.stop||e.ret)pn[3].classList.add(e.ret?'dim':'ok');verdict(e);return;}
      var seg=[],t=0;function add(a,b,ms,cls){seg.push({a:a,b:b,t0:t,t1:t+ms,cls:cls});t+=ms;}
      var ev=[];function at(fn){ev.push({t:t,fn:fn});}
      pkE.style.opacity='1';
      at(function(){pn[0].classList.add('hit');});add(0,1,650);at(function(){pn[1].classList.add('hit');});add(1,2,650);at(function(){pn[2].classList.add('hit');setT('smN2','inspecting\u2026');});
      var stopOut=e.ret?null:e.stop;
      e.out.forEach(function(m){at(function(){MS[m].className='chk';});t+=330;if(m===stopOut){at(function(){MS[m].className='stop';});}else at(function(){MS[m].className='pass';});});
      if(stopOut){at(function(){pkE.classList.add('bad','boom');ln.classList.add('bad');pn[2].classList.add('bad');pn[3].classList.add('dim');setT('smN2','blocked');verdict(e);});}
      else if(e.ret){add(2,3,600);at(function(){pn[3].classList.add('hit');setT('smN2','request allowed');});t+=250;at(function(){pkE.classList.add('bad');});add(3,2,650,'bad');
        e.ret.forEach(function(m){at(function(){MS[m].className='chk';});t+=360;at(function(){MS[m].className='stop';});});
        at(function(){pkE.classList.add('boom');ln.classList.add('bad');pn[2].classList.add('bad');pn[3].classList.add('dim');setT('smN2','blocked');verdict(e);});}
      else{add(2,3,650);at(function(){pn[3].classList.add('ok');pn[2].classList.add('ok');setT('smN2','all checks passed');pkE.style.opacity='0';verdict(e);});}
      tl={seg:seg,ev:ev,T:0,end:t+50,ei:0,pos:0};simOn(true);}
    var simOn=loop(function(t2,dt){if(!tl){simOn(false);return;}tl.T+=dt;var T=tl.T;
      while(tl.ei<tl.ev.length&&tl.ev[tl.ei].t<=T){tl.ev[tl.ei].fn();tl.ei++;}
      for(var i=0;i<tl.seg.length;i++){var s=tl.seg[i];if(T>=s.t0&&T<=s.t1){tl.pos=lerp(s.a,s.b,eio((T-s.t0)/(s.t1-s.t0)));break;}if(T>s.t1)tl.pos=s.b;}
      pkAt(tl.pos);var lf='scaleX('+(tl.pos/3).toFixed(3)+')';if(lf!==lastL){ln.style.transform=lf;lastL=lf;}
      if(T>=tl.end){tl=null;}});
    evB.addEventListener('click',function(e){var b=e.target.closest('button[data-e]');if(!b)return;pick(b.getAttribute('data-e'));});
    go.addEventListener('click',run);
    pick('phish');
  })();

  /* =========================================================
     7. Partners \u2014 India multi-site map
     ========================================================= */
  (function(){
    var box=$id('cbMs'),cv=$id('cbMsCv');if(!box||!cv)return;
    var ctx=cv.getContext('2d'),lis=$$('#cbMsL li'),W=0,H=0,BASE=null,mode=0,mT=0,DUR=3600,MT=0;
    var POLY=[[68.2,23.7],[69.5,22.4],[70.4,20.9],[72.6,21.1],[72.9,19],[73.4,16],[74.4,14],[75,12],[76,10],[77,8.1],[77.6,8.3],[78.2,9],[79.3,10.3],[79.9,11.5],[80.3,13.3],[80.1,15.2],[81.3,16.4],[82.3,16.6],[84,18.3],[85.5,19.6],[86.9,20.8],[87.5,21.6],[88.6,21.8],[89.1,22.1],[88.9,23.9],[88.2,24.8],[88.6,26.4],[89.8,26],[89.9,25.3],[92,24.9],[92.3,23.6],[92.6,22],[93.3,23.2],[94.2,23.9],[94.6,25.2],[95.2,26.6],[96.2,27.3],[97.3,27.9],[96,29.4],[94,28.9],[92.5,27.8],[91.6,27.8],[89.6,26.9],[88.8,27.2],[88.1,27.9],[85.8,27.4],[84.2,27.4],[82.7,27.9],[81,28.6],[80.1,30.2],[79.3,31],[78.8,31.6],[78.4,32.6],[79.4,32.9],[79.6,33.5],[80.2,34.1],[80.3,35.2],[79.8,35.6],[78.4,35.9],[77.8,35.5],[77,35.9],[76.6,36.6],[75.9,36.9],[75,37.1],[74.4,37],[73.5,36.9],[72.5,36.4],[72.6,35.5],[73.4,34.8],[73.6,33.9],[73.9,33.2],[74.6,32.6],[74.6,31],[73.9,30],[72.9,29],[71.3,28],[70.4,26.9],[70.1,25.5],[71.1,24.4],[69.6,24.3],[68.8,24]];
    var CITY=[['Mumbai',72.88,19.08,-1],['Delhi',77.1,28.7,1],['Bengaluru',77.59,12.97,-1],['Chennai',80.27,13.08,1],['Kolkata',88.36,22.57,1],['Hyderabad',78.49,17.39,1],['Ahmedabad',72.57,23.02,-1],['Pune',73.86,18.52,1],['Jaipur',75.79,26.91,-1],['Lucknow',80.95,26.85,1],['Kochi',76.27,9.93,-1],['Guwahati',91.74,26.14,1],['Chandigarh',76.78,30.73,1],['Bhubaneswar',85.82,20.3,1],['Indore',75.86,22.72,1],['Nagpur',79.09,21.15,1]];
    var ALERT=7,NEWS=15,MODES=[['Centralized management','Cybird Cloud','every site, one dashboard'],['Multi-site visibility','16 sites \xB7 sample','status of every location together'],['Remote monitoring','Live telemetry','devices and traffic, no site visit'],['Smart alerts','Alert \xB7 Pune','link issue flagged in seconds'],['Simplified deployment','New site \xB7 Nagpur','zero touch provisioning'],['Faster troubleshooting','Pune \xB7 resolved','fixed from the dashboard']];
    var spB=glowSprite('120,180,255',40),spG=glowSprite('95,224,141',40),spR=glowSprite('255,90,70',40),spO=glowSprite('255,160,60',40);
    var sc2=1,ox=0,oy=0,HUB=[0,0];
    function P(lon,lat){return [ox+(lon-68)*sc2,oy+(37.5-lat)*sc2*1.08];}
    function build(){W=cv.clientWidth;H=cv.clientHeight;if(!W)return;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);
      sc2=Math.min((W-30)/29.5,(H-118)/(29.5*1.08));ox=(W-29.5*sc2)/2;oy=70+(H-128-29.5*1.08*sc2)/2;HUB=[W*.5,40];
      BASE=d.createElement('canvas');BASE.width=cv.width;BASE.height=cv.height;var b=BASE.getContext('2d');b.setTransform(DPR,0,0,DPR,0,0);
      b.beginPath();POLY.forEach(function(q,i){var p=P(q[0],q[1]);if(i)b.lineTo(p[0],p[1]);else b.moveTo(p[0],p[1]);});b.closePath();b.fillStyle='rgba(21,101,216,.1)';b.fill();b.strokeStyle='rgba(127,176,255,.45)';b.lineWidth=1.2;b.stroke();
      b.fillStyle='rgba(127,176,255,.28)';for(var la=8.3;la<=37;la+=.75)for(var lo=68.3;lo<=97.3;lo+=.75)if(inPoly(lo,la,POLY)){var p2=P(lo,la);b.fillRect(p2[0]-.7,p2[1]-.7,1.4,1.4);}}
    function setMode(m,user){mode=m;mT=0;lis.forEach(function(l,i){l.classList.toggle('on',i===m);var u=$('u',l);if(u){u.style.animation='none';void u.offsetWidth;u.style.animation='';}});
      var md=MODES[m];var st=$id('cbMsN');setT(st,md[0]);restart(st,'sw');setT('cbMsFb',md[1]);setT('cbMsFs',md[2]);if(user)MT=1;}
    lis.forEach(function(l,i){l.addEventListener('click',function(){setMode(i,true);});});
    box.style.setProperty('--dur',DUR+'ms');lis.forEach(function(l){l.style.setProperty('--dur',DUR+'ms');});
    function draw(t){var c=ctx;c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,W,H);c.drawImage(BASE,0,0,W,H);
      var u=mT/DUR,i,p;
      /* cloud hub */
      var hp=path2('cld');c.globalAlpha=.6;c.drawImage(spB,HUB[0]-34,HUB[1]-34,68,68);if(hp){c.save();c.globalAlpha=1;c.translate(HUB[0]-15,HUB[1]-15);c.scale(30/24,30/24);c.fillStyle='rgba(21,101,216,.9)';c.fill(hp);c.strokeStyle='#cfe0ff';c.lineWidth=1.6;c.stroke(hp);c.restore();}
      for(i=0;i<CITY.length;i++){var cy=CITY[i];if(i===NEWS&&mode<4)continue;p=P(cy[1],cy[2]);
        var alert=i===ALERT&&(mode===3||(mode===5&&u<.35)),fixed=i===ALERT&&mode===5&&u>=.35,nw=i===NEWS&&mode===4,nu=nw?clamp((u-.15)/.4,0,1):1;
        /* link to hub */
        var la=mode===0?.5:mode===2?.28:.18;c.globalAlpha=la*nu;c.strokeStyle=alert?'#ff5a4a':'#7fb0ff';c.lineWidth=1;c.setLineDash(nw?[3,4]:[]);c.beginPath();var mx=(p[0]+HUB[0])/2,my=Math.min(p[1],HUB[1])+20;c.moveTo(p[0],p[1]);c.quadraticCurveTo(mx,my,HUB[0],HUB[1]+12);c.stroke();c.setLineDash([]);
        /* packets */
        if(mode===0||mode===2||mode===4&&nw){var pu=((t*.0004)+i*.13)%1;if(mode===2)pu=1-pu;var v=1-pu,qx=v*v*p[0]+2*v*pu*mx+pu*pu*HUB[0],qy=v*v*p[1]+2*v*pu*my+pu*pu*(HUB[1]+12);c.globalAlpha=Math.sin(pu*Math.PI)*.9*nu;c.drawImage(mode===2?spO:spB,qx-5,qy-5,10,10);}
        /* site */
        var pulse=mode===1?(.5+.5*Math.sin(t*.006-i*.7)):0,sz=4+pulse*2;c.globalAlpha=.55*nu+pulse*.3;c.drawImage(alert?spR:(fixed||mode===1||nw)?spG:spB,p[0]-11,p[1]-11,22,22);
        c.globalAlpha=nu;c.fillStyle=alert?'#ff5a4a':fixed||nw?'#5FE08D':'#cfe0ff';c.beginPath();c.arc(p[0],p[1],nw?sz*spring(Math.min(1.4,nu*1.4)):sz*.8,0,TAU);c.fill();
        if(alert){var au=(t%1200)/1200;c.globalAlpha=1-au;c.strokeStyle='#ff5a4a';c.lineWidth=1.5;c.beginPath();c.arc(p[0],p[1],6+au*18,0,TAU);c.stroke();}
        if(mode===1||alert||fixed||nw||(mode===0&&i<4)){c.globalAlpha=nu*.95;c.font='600 9.5px "IBM Plex Mono",monospace';c.textAlign='left';c.textBaseline='middle';var lab=cy[0]+(alert?' \xB7 alert':fixed?' \xB7 resolved \u2713':nw?' \xB7 ZTP':'');var tw=c.measureText(lab).width,lx=cy[3]<0?p[0]-9-tw:p[0]+9;if(lx+tw>W-6)lx=p[0]-9-tw;if(lx<6)lx=p[0]+9;
          c.fillStyle='rgba(7,20,48,.85)';rr(c,lx-4,p[1]-8,tw+8,16,5);c.fill();c.fillStyle=alert?'#ff9a8f':fixed||nw?'#8ff0b2':'#cfe0ff';c.fillText(lab,lx,p[1]);}}
      /* remote monitoring: sweeping scan line */
      if(mode===2){var sx=W*(.05+.9*((t*.00025)%1));c.globalAlpha=.5;c.strokeStyle='#FFB15C';c.lineWidth=1.2;c.beginPath();c.moveTo(sx,60);c.lineTo(sx,H-60);c.stroke();c.globalAlpha=.08;c.fillStyle='#FFB15C';c.fillRect(sx-40,60,40,H-120);}
      c.globalAlpha=1;}
    function tick(t,dt){if(!W)build();if(!W)return;if(!box.matches(':hover')){mT+=dt;if(mT>=DUR){setMode((mode+1)%6);}}draw(t);}
    build();setMode(0);addEventListener('resize',function(){build();if(R)draw(0);});
    box.addEventListener('pointerenter',function(){box.classList.add('paused');});box.addEventListener('pointerleave',function(){box.classList.remove('paused');});
    if(R){mode=0;draw(0);lis.forEach(function(l){l.addEventListener('click',function(){mT=DUR*.6;draw(0);});});return;}
    var on=loop(tick);XH.whenVisible(box,on);
  })();

  /* =========================================================
     8. Pricing \u2014 term toggle, plan cards, ez-card, configurator
     ========================================================= */
  (function(){
    var tm=$id('cbTm'),plB=$id('cbPl'),cfg=$id('configure');if(!plB||!cfg)return;
    var st={plan:'ess',term:1,emp:8,ovr:false,sup:false,hw:0};
    plB.innerHTML=PL.map(function(p,i){return '<button type="button" class="pc k'+i+'" style="--k:'+i+'" data-p="'+p.k+'" role="radio">'+(p.k==='plus'?'<span class="fl">popular size</span>':'')+
      '<span class="pn"><i>'+p.ic+'</i><span><b>Cybird '+p.n+'</b><small>up to '+p.u+' users</small></span></span><span class="mt"><i style="--u:'+(p.u/100)+'"></i></span>'+
      '<span class="pr"><span class="am">\u20B90</span> <small>+ GST</small></span><span class="py">\u2014</span><span class="svp">\u2014</span><span class="inc"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>firewall + web security</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a5 5 0 01-.6-10A6 6 0 0118 9a4.5 4.5 0 01-.5 9z"/></svg>cloud-managed</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>per-user Wi-Fi</span></span><span class="ck2">Configure \u2192</span></button>';}).join('');
    var pcs=$$('.pc',plB);
    function cards(){pcs.forEach(function(c,i){var p=PL[i],t=st.term,pr=p.p[t],sv=saving(p,t),am=$('.am',c),pill=$('.svp',c);
      tween(am,pr,inr,700);setT($('.py',c),t>1?inr(pr/t)+' / year effective \xB7 '+t+' years':'per year \xB7 hardware + security');
      var cls='svp',txt;if(t===1){cls+=' nil';txt='Pay yearly \xB7 switch to 2\u20135 yr to save';}else{var pc=Math.round(sv.pct);txt='Save '+pc+'% \xB7 '+inr(sv.amt)+' vs '+t+' \xD7 1 yr';if(pc<10)cls+=' lo';}
      if(pill.textContent!==txt){pill.textContent=txt;pill.className=cls;restart(pill,'sw');}
      c.classList.toggle('on',p.k===st.plan);c.setAttribute('aria-checked',p.k===st.plan);});}
    function ez(){var p=plan(st.plan),t=st.term,pr=p.p[t],sv=saving(p,t);setT('pcName','Cybird '+p.n);setT('pcSku','hardware + security bundle \xB7 up to '+p.u+' users');setT('pcTerm',t+(t>1?' years':' year'));setT('pcFrom',inr(p.p[1])+' + GST / yr');
      tween($id('pcT'),pr,inr,700);tween($id('pcY'),pr/t,inr,700);setT('pcSvL',t>1?'Saving vs '+t+' \xD7 1-year':'Longer terms save');setT('pcPill',t>1?Math.round(sv.pct)+'% \xB7 '+inr(sv.amt):'2 yr \xB7 3 yr \xB7 5 yr');}
    function syncTerm(){$$('button',tm).forEach(function(b){b.classList.toggle('on',+b.getAttribute('data-t')===st.term);});ulMove(tm);
      var ct=$id('cTerm');$$('button',ct).forEach(function(b){var o=+b.getAttribute('data-v')===st.term;b.classList.toggle('on',o);b.setAttribute('aria-pressed',o);});ct.dataset.value=String(st.term);setT('cTermL',st.term+(st.term>1?' years':' year'));}
    function syncPlan(){var cp=$id('cPlan'),sg=suggest(st.emp);$$('button',cp).forEach(function(b){var k=b.getAttribute('data-v');b.classList.toggle('on',k===st.plan);b.classList.toggle('sug',k===sg.k&&k!==st.plan);});cp.dataset.value=st.plan;
      var p=plan(st.plan);setT('cPlanL',st.plan===sg.k?'suggested: '+sg.n:'chosen: '+p.n+' \xB7 suggested '+sg.n);
      var mn=$id('cMin');if(p.u<st.emp){mn.classList.add('on');setT('cMinT','Cybird '+p.n+' covers up to '+p.u+' users \u2014 your team has '+st.emp+'. We suggest '+sg.n+'.');}else mn.classList.remove('on');}
    var emp=$id('cEmp'),empN=$id('cEmpN'),bands=$$('#cBands button'),hwN=$id('cHwN'),sup=$id('cSup'),sgd=$$('#cbSg>div');
    function setEmp(v,src){v=clamp(Math.round(+v||1),1,100);st.emp=v;if(src!=='r'){emp.value=v;XH.fillRange(emp);}if(src!=='n')empN.value=v;setT('cEmpL',v+(v===1?' employee':' employees'));
      bands.forEach(function(b){b.classList.toggle('on',+b.getAttribute('data-g')===v);});
      var sg=suggest(v);if(!st.ovr||plan(st.plan).u<v){st.plan=sg.k;st.ovr=false;}calc();}
    function calc(){var p=plan(st.plan),t=st.term,bi=supFor(st.emp),sb=SUP[bi],months=12*t;
      var bundle=p.p[t],supC=st.sup?sb.p*months:0,hwC=st.hw*HW,sub=bundle+supC+hwC,sv=saving(p,t);
      setT('cSupP',inr(sb.p));setT('cSupS',sb.l+' bracket \xB7 '+inr(sb.p)+' \xD7 '+months+' months for a '+t+'-year term.');sgd.forEach(function(x,i){x.classList.toggle('on',i===bi&&st.sup);});
      setT('cHwL',st.hw?st.hw+' \xD7 '+inr(HW):'none');
      var rows=[['Cybird '+p.n+' bundle \xB7 '+t+(t>1?' years':' year'),'hardware + security \xB7 up to '+p.u+' users',bundle]];
      if(st.sup)rows.push(['Support plan \xB7 '+sb.l,inr(sb.p)+' / month \xD7 '+months+' months',supC]);
      if(st.hw)rows.push(['Additional appliance \xD7 '+st.hw,inr(HW)+' each \xB7 one-time',hwC]);
      var html=rows.map(function(r){return '<div class="crow"><span>'+r[0]+'<small>'+r[1]+'</small></span><b>'+inr(r[2])+'</b></div>';}).join('');var ro=$id('oRows');if(ro._h!==html){ro._h=html;ro.innerHTML=html;}
      tween($id('oTot'),sub,inr,700);setT('oSub','for '+t+(t>1?' years':' year')+', excl. GST');
      setT('oSvL',t>1?'Bundle saving vs '+t+' \xD7 1-year ('+Math.round(sv.pct)+'%)':'Term saving (choose 2\u20135 years)');tween($id('oSv'),sv.amt,inr,700);
      tween($id('oSt'),sub,inr,700);tween($id('oGst'),sub*GST,inr,700);tween($id('oPay'),sub*(1+GST),inr,700);
      tween($id('oPum'),sub/months/st.emp,function(v){return XH.inr(v)+' / user / month';},700);
      var bs=$$('#oCb i');[bundle,supC,hwC].forEach(function(v,i){bs[i].style.width=(sub?v/sub*100:0).toFixed(2)+'%';});
      st._c={p:p,t:t,bundle:bundle,sb:sb,months:months,supC:supC};
      syncPlan();syncTerm();cards();ez();}
    tm.addEventListener('click',function(e){var b=e.target.closest('button[data-t]');if(!b)return;st.term=+b.getAttribute('data-t');calc();});
    $id('cTerm').addEventListener('change',function(e){st.term=+e.currentTarget.dataset.value;calc();});
    $id('cPlan').addEventListener('change',function(e){st.plan=e.currentTarget.dataset.value;st.ovr=true;calc();});
    plB.addEventListener('click',function(e){var b=e.target.closest('.pc');if(!b)return;var p=plan(b.getAttribute('data-p'));st.plan=p.k;st.ovr=true;if(st.emp>p.u||st.emp<=(PL[PL.indexOf(p)-1]||{u:0}).u){setEmp(p.u);st.plan=p.k;}calc();
      if(e.target.closest('.ck2'))cfg.scrollIntoView({behavior:R?'auto':'smooth',block:'start'});});
    emp.addEventListener('input',function(){setEmp(emp.value,'r');});
    empN.addEventListener('input',function(){setEmp(empN.value,'n');});
    bands.forEach(function(b){b.addEventListener('click',function(){setEmp(b.getAttribute('data-g'));});});
    hwN.addEventListener('input',function(){st.hw=clamp(Math.round(+hwN.value||0),0,20);calc();});
    sup.addEventListener('change',function(){st.sup=sup.checked;calc();});
    $id('oAdd').addEventListener('click',function(){var c=st._c;if(!c)return;
      XH.cart.add({key:'cybird-'+c.p.k+'-'+c.t,name:'Cybird '+c.p.n+' bundle',sub:c.t+(c.t>1?' years':' year')+' \xB7 hardware + security \xB7 up to '+c.p.u+' users',price:c.bundle,qty:1});
      if(st.sup)XH.cart.add({key:'cybird-sup-'+c.sb.p+'-'+c.months,name:'Cybird support plan',sub:c.sb.l+' \xB7 '+XH.inr(c.sb.p)+' / month \xD7 '+c.months+' months',price:c.sb.p*c.months,qty:1});
      if(st.hw)XH.cart.add({key:'cybird-hw',name:'Cybird hardware appliance (additional)',sub:'Cybird cyber security customer hardware appliance \xB7 one-time',price:HW,qty:st.hw});});
    setEmp(8);ulMove(tm);addEventListener('resize',function(){ulMove(tm);});
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){ulMove(tm);});
  })();

  /* =========================================================
     9. In the box \u2014 unbox on view, replay
     ========================================================= */
  (function(){var ib=$id('cbIb');if(!ib)return;var done=false;
    XH.whenVisible(ib,function(v){if(v&&!done){done=true;setTimeout(function(){ib.classList.add('open');},R?0:300);}});
    $id('cbIbR').addEventListener('click',function(){ib.classList.remove('open');void ib.offsetWidth;setTimeout(function(){ib.classList.add('open');},R?0:120);});
  })();

  /* marquee + sections pause offscreen */
  $$('.cb-mq').forEach(function(m){XH.whenVisible(m,function(v){m.classList.toggle('paused',!v||R);});});
})();

<\/script>
</body></html>
`])), CYBIRD_REVIEW_CARDS);
export {
  CYBIRD_DOCUMENT
};
//# sourceMappingURL=chunk-HBL5NVZC.js.map
