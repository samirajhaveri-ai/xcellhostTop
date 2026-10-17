/** Main content, styling and animations from the user-supplied xcellhost-veritas.html. */
export const VERITAS_DOCUMENT: string = String.raw`<!DOCTYPE html>
<html lang="en-IN" data-theme="light">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>XcellGrow | Veritas — Rank on Google, Get Cited by ChatGPT</title>
<meta name="description" content="Veritas AI visibility and SEO platform from XcellHost: site audits for Google and AI crawlers, keyword research, rank tracking, local SEO with geogrid, prompt tracking across ChatGPT, Perplexity, Gemini and Google AI Overviews, and an AI SEO writer with sources. Veritas list prices from ₹1,500/month + GST, 7-day free trial, GST invoice in INR, onboarding and support from XcellHost Mumbai.">
<meta property="og:title" content="XcellGrow | Veritas — Rank on Google, Get Cited by ChatGPT"><meta property="og:description" content="Veritas AI visibility and SEO platform from XcellHost: site audits for Google and AI crawlers, keyword research, rank tracking, local SEO with geogrid, prompt tracking across ChatGPT, Perplexity, Gemini and Google AI Overviews, and an AI SEO writer with sources. Veritas list prices from ₹1,500/month + GST, 7-day free trial, GST invoice in INR, onboarding and support from XcellHost Mumbai."><meta property="og:type" content="website">
<meta name="theme-color" content="#041E42">
<script>try{var t=localStorage.getItem('xh-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}</script>
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,600;0,9..144,700;1,9..144,600;1,9..144,700&family=Sora:wght@500;600;700;800&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap" rel="stylesheet">
<style>
/* =====================================================================
   XcellHost v2 core — xcellhost.top design system
   Brand: #0066FF blue · #0B132B navy · #FF8A00 orange · #c0392b "Host" red
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
.faq{display:flex;flex-direction:column;gap:10px;max-width:880px}
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
   LIVE THEME — matches www.xcellhost.top product pages (xh-product-page)
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

/* ---------- section headings → live mono labels ---------- */
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
.lft .row .v a:before{content:"›";margin-right:6px;opacity:.7}
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
   Veritas AI Visibility & SEO — XcellGrow reseller page (prefix vr- / scoped)
   ===================================================================== */
#overview,#journey,#platform,#check,#sov,#local,#teams,#finder,#pricing,#configure,#trial,#resources,#partners,#why,#watch,#faq,#contact,#family{scroll-margin-top:90px}

/* generic rounded "V" tile (not a vendor logo) */
.vr-v{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:7px;background:#1565D8;color:#fff;font:800 13px/1 var(--f-disp);box-shadow:inset 0 0 0 1px rgba(255,255,255,.25);flex-shrink:0}
.hero.lh .lh-powered.vr-pw{bottom:-26px}
@media(max-width:980px){.hero.lh .lh-powered.vr-pw{bottom:auto}}
.vr-pw em{display:block;font:500 9px/1.45 var(--f-mono);letter-spacing:.04em;color:#9fb6de;font-style:normal;margin-top:5px;max-width:210px}
.hero.lh .lh-chip.vr-c2{bottom:-18px;right:-14px}
@media(max-width:980px){.hero.lh .lh-chip.vr-c2{bottom:auto;top:-30px;right:auto;left:-6px}}
.vr-anc{display:flex;flex-wrap:wrap;gap:6px 14px;margin:-4px 0 16px}
.vr-anc a{display:inline-flex;align-items:center;gap:6px;font:600 12px var(--f-mono);color:#B6C2DA;border-bottom:1px dashed rgba(182,194,218,.4);padding-bottom:2px;transition:color .2s,border-color .2s}
.vr-anc a:hover{color:#fff;border-color:#FF8C1A}
.vr-anc svg{width:13px;height:13px;color:#7fb0ff}

/* ---------- micro-interactions ---------- */
.vr-mag{transition:transform .2s var(--ease),background .2s,color .2s,border-color .2s,box-shadow .25s,translate .5s cubic-bezier(.3,1.5,.5,1)}
.vr-mag.mg{transition:transform .2s var(--ease),background .2s,color .2s,border-color .2s,box-shadow .25s,translate .12s linear;box-shadow:0 14px 34px -12px rgba(255,140,26,.75)}
.vr-tl{position:relative}
.vr-tl.tilting{transition:transform .14s linear,box-shadow .35s,border-color .3s!important}
.vr-tl:after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity .35s;z-index:3;
  background:radial-gradient(260px circle at var(--gx,50%) var(--gy,50%),rgba(21,101,216,.13),transparent 60%),linear-gradient(105deg,transparent calc(var(--gx,50%) - 22%),rgba(21,101,216,.07) var(--gx,50%),transparent calc(var(--gx,50%) + 22%))}
.vr-tl.tilting:after{opacity:1}
html[data-theme="dark"] .vr-tl:after{background:radial-gradient(260px circle at var(--gx,50%) var(--gy,50%),rgba(127,176,255,.15),transparent 60%),linear-gradient(105deg,transparent calc(var(--gx,50%) - 22%),rgba(255,255,255,.07) var(--gx,50%),transparent calc(var(--gx,50%) + 22%))}
.vr-kin .w{display:inline-block;opacity:0;transform:translateY(.6em) rotate(2deg);transform-origin:0 100%;transition:opacity .5s var(--ease-o),transform .75s cubic-bezier(.2,1.35,.4,1);transition-delay:calc(var(--i)*60ms + .1s)}
.rv.in .vr-kin .w,.vr-kin.in .w{opacity:1;transform:none}
.vr-sd{position:relative;max-width:var(--maxw);height:40px;margin:4px auto;padding:0 24px;opacity:1!important;transform:none!important}
.vr-sd svg{width:100%;height:40px;display:block;overflow:visible}
.vr-sd path{fill:none;stroke:var(--line-2);stroke-width:1.5;stroke-dasharray:1 1;stroke-dashoffset:1;vector-effect:non-scaling-stroke;transition:stroke-dashoffset 1.6s var(--ease-o)}
.vr-sd.in path{stroke-dashoffset:0;stroke:#9cbcf0}
html[data-theme="dark"] .vr-sd.in path{stroke:#2b4d8a}
.vr-sd i{position:absolute;left:24px;top:17px;width:7px;height:7px;border-radius:50%;background:#FF8C1A;box-shadow:0 0 10px 3px rgba(255,140,26,.55);opacity:0}
.vr-sd.in.run i{animation:vrSd 5.5s var(--ease) infinite 1s}
@keyframes vrSd{0%{opacity:0;transform:translateX(0)}8%{opacity:1}92%{opacity:1}100%{opacity:0;transform:translateX(calc(var(--sw,1100px) - 7px))}}
@keyframes vrBlink{50%{opacity:.25}}
@keyframes vrBump{0%{transform:translateY(-3px) scale(1.14)}}
@keyframes vrSwap{0%{opacity:0;transform:translateY(8px)}}
@keyframes vrPing{0%{opacity:.9;transform:scale(1)}100%{opacity:0;transform:scale(2.2)}}
@keyframes vrUp{0%{opacity:0;transform:translateY(12px)}}
.bump{animation:vrBump .5s var(--ease-o)}
.vr-cur{display:inline-block;width:2px;height:1em;background:currentColor;vertical-align:-2px;margin-left:1px;animation:vrBlink .8s steps(1) infinite}

/* ===================== HERO ===================== */
#vrHero .hero-grid>*{min-width:0}
#vrHero .lh-title .nm{font-size:.7em}
#vrHero .stage>.lh-tilt{width:100%;max-width:510px;min-width:0}
.hero.lh .hero-bg canvas.vr-bg{position:absolute;top:0;right:0;width:64%;height:100%;background:radial-gradient(40% 32% at 62% 50%,rgba(40,90,210,.2),rgba(40,90,210,.05) 55%,transparent 75%)}
@media(max-width:980px){.hero.lh .hero-bg canvas.vr-bg{width:100%;opacity:.5}}

.vrv{position:relative;width:100%;max-width:510px;background:#0A1838;border:1px solid rgba(127,176,255,.22);border-radius:20px;box-shadow:0 40px 90px -30px rgba(0,0,0,.75),inset 0 1px 0 rgba(255,255,255,.06);overflow:hidden;color:#EAF2FF}
html[data-theme="dark"] .vrv{background:#08122A;border-color:rgba(127,176,255,.18)}
.vrv:after{content:"";position:absolute;inset:0;border-radius:20px;border:2px solid #16a34a;opacity:0;pointer-events:none}
.vrv.win:after{animation:vrFlash 1.8s var(--ease-o)}
.vrv.alarm:before{content:"";position:absolute;inset:0;border-radius:20px;border:2px solid #ff5a4a;opacity:0;pointer-events:none;z-index:5;animation:vrAlarm 1.1s var(--ease-o)}
@keyframes vrFlash{0%,25%{opacity:.9}100%{opacity:0}}
@keyframes vrAlarm{0%,30%{opacity:.85}100%{opacity:0}}
.vrv-h{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 16px;border-bottom:1px solid rgba(127,176,255,.14)}
.vrv-h b{font-family:var(--f-disp);font-size:14px;display:flex;align-items:center;gap:9px;color:#fff;white-space:nowrap;min-width:0}
.vrv-h b span{overflow:hidden;text-overflow:ellipsis}
.vrv-h b i{width:28px;height:28px;border-radius:8px;background:#1565D8;color:#fff;display:grid;place-items:center;flex-shrink:0}
.vrv-h b i svg{width:15px;height:15px}
.vrv-live{font:500 10.5px var(--f-mono);color:#9fb6de;display:flex;align-items:center;gap:6px;white-space:nowrap;flex-shrink:0}
.vrv-live:before{content:"";width:7px;height:7px;border-radius:50%;background:#7fb0ff;flex-shrink:0;animation:vrBlink 1.2s infinite}
.vrv.a2 .vrv-live:before{background:#ff5a4a;animation-duration:.6s}
.vrv.a3 .vrv-live:before{background:#FF8C1A;animation-duration:.8s}
.vrv.a4 .vrv-live:before,.vrv.a5 .vrv-live:before{background:#5FE08D;animation-duration:1.6s}
.vrv-rail{position:relative;display:grid;grid-template-columns:repeat(6,1fr);gap:4px;padding:10px 12px 12px}
.vrv-rail>span{position:relative;z-index:1;text-align:center;font:600 10px var(--f-mono);color:#7f93ba;padding:5px 2px;border-radius:99px;background:#0D1F47;border:1px solid rgba(127,176,255,.16);white-space:nowrap;transition:color .3s,background .3s,border-color .3s,transform .45s cubic-bezier(.3,1.6,.5,1),box-shadow .3s}
.vrv-rail>span.on{color:#fff;background:#1565D8;border-color:#7fb0ff;transform:translateY(-2px) scale(1.06);box-shadow:0 0 0 3px rgba(21,101,216,.25),0 6px 18px -6px rgba(80,150,255,.8)}
.vrv.a2 .vrv-rail>span.on{background:#c0392b;border-color:#ff8a80;box-shadow:0 0 0 3px rgba(192,57,43,.25)}
.vrv.a3 .vrv-rail>span.on{background:#FF8C1A;border-color:#FFB15C;box-shadow:0 0 0 3px rgba(255,140,26,.25)}
.vrv.a4 .vrv-rail>span.on,.vrv.a5 .vrv-rail>span.on{background:#16a34a;border-color:#5FE08D;box-shadow:0 0 0 3px rgba(22,163,74,.25)}
.vrv-rail>span.dn{color:#8ff0b2;border-color:rgba(95,224,141,.5);background:rgba(22,163,74,.14)}
.vrv-rail .tr{position:absolute;left:12px;right:12px;bottom:5px;height:2px;border-radius:2px;background:rgba(127,176,255,.12);overflow:hidden}
.vrv-rail .tr b{display:block;height:100%;width:100%;background:#5FE08D;transform-origin:left;transform:scaleX(0)}
.vrv-sc{position:relative;height:300px;overflow:hidden;border-top:1px solid rgba(127,176,255,.08);border-bottom:1px solid rgba(127,176,255,.08);background:#061230 radial-gradient(60% 70% at 50% 55%,rgba(40,90,210,.3),transparent 75%);perspective:900px}
html[data-theme="dark"] .vrv-sc{background-color:#040c22}
.vrv-sc canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
.vrv-near{z-index:4}
.vrv-spot{position:absolute;left:0;top:0;width:260px;height:260px;margin:-130px 0 0 -130px;border-radius:50%;background:radial-gradient(circle,rgba(160,205,255,.16),rgba(160,205,255,.05) 38%,transparent 68%);opacity:0;transition:opacity .45s;pointer-events:none;will-change:transform;z-index:1}
.vrv-sc.hov .vrv-spot{opacity:1}
.vrv-cam{position:absolute;inset:0;z-index:2;transform-origin:50% 50%;will-change:transform;transform-style:preserve-3d}
/* search bar */
.vrv-q{position:absolute;left:12px;right:12px;top:12px;height:32px;display:flex;align-items:center;gap:8px;padding:0 12px;border-radius:99px;background:#F4F8FF;color:#041E42;box-shadow:0 10px 30px -12px rgba(0,0,0,.8),0 0 0 3px rgba(127,176,255,.18);font:500 12px var(--f-body);transition:box-shadow .4s}
.vrv-q i{color:#1565D8;display:grid;place-items:center}
.vrv-q i svg{width:14px;height:14px}
.vrv-q span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.vrv-q .cu{width:1.5px;height:14px;background:#1565D8;animation:vrBlink .8s steps(1) infinite;flex-shrink:0}
.vrv.a0 .vrv-q{box-shadow:0 10px 30px -12px rgba(0,0,0,.8),0 0 0 4px rgba(255,140,26,.45)}
/* panels */
.vrv-serp,.vrv-ai{position:absolute;top:54px;bottom:12px;border-radius:13px;background:rgba(9,24,58,.94);border:1px solid rgba(127,176,255,.26);box-shadow:0 22px 44px -18px rgba(0,0,0,.85);opacity:0;transform:translateY(26px) rotateX(16deg) scale(.94);transition:opacity .5s,transform .8s cubic-bezier(.2,1.3,.4,1),border-color .4s,box-shadow .4s;overflow:hidden}
.vrv-serp{left:12px;width:calc(54% - 16px)}
.vrv-ai{right:12px;width:calc(46% - 4px)}
.vrv.s-serp .vrv-serp,.vrv.s-ai .vrv-ai{opacity:1;transform:none}
.vrv.s-dim .vrv-serp,.vrv.s-dim .vrv-ai,.vrv.s-dim .vrv-q{opacity:.28}
.vrv .sh2{display:flex;align-items:center;gap:7px;padding:7px 9px;border-bottom:1px solid rgba(127,176,255,.14);font:700 10px var(--f-mono);color:#cfe0ff;white-space:nowrap;overflow:hidden}
.vrv .sh2 em{margin-left:auto;font:500 8.5px var(--f-mono);font-style:normal;color:#7f93ba}
.vrv .sh2 b{font:700 10px var(--f-mono);overflow:hidden;text-overflow:ellipsis}
.vrv .sh2 .g,.vr-vs .g{width:16px;height:16px;border-radius:50%;background:#fff;color:#1565D8;display:grid;place-items:center;font:800 10px var(--f-disp);flex-shrink:0}
.vrv .sh2 .a,.vr-vs .a{width:16px;height:16px;border-radius:5px;background:#16a34a;color:#fff;display:grid;place-items:center;font:700 10px var(--f-disp);flex-shrink:0;transition:background .4s}
.vrv-serp .rows{position:relative;height:calc(100% - 30px)}
.vrv-serp .r{position:absolute;left:6px;right:6px;top:0;height:23px;display:flex;align-items:center;gap:6px;padding:0 6px;border-radius:7px;background:rgba(127,176,255,.06);border:1px solid transparent;will-change:transform;transition:background .4s,border-color .4s}
.vrv-serp .r em{font:700 9px var(--f-mono);font-style:normal;color:#7f93ba;width:16px;flex-shrink:0;font-variant-numeric:tabular-nums}
.vrv-serp .r i{width:9px;height:9px;border-radius:3px;background:var(--c,#7fb0ff);flex-shrink:0}
.vrv-serp .r span{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.vrv-serp .r b{font:600 9px var(--f-mono);color:#cfe0ff;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vrv-serp .r s{display:block;height:3px;border-radius:2px;background:rgba(127,176,255,.22);width:var(--w,70%)}
.vrv-serp .r.me{background:rgba(255,140,26,.14);border-color:rgba(255,177,92,.7)}
.vrv-serp .r.me b{color:#FFD3A0}
.vrv-serp .r.me em{color:#FFB15C}
.vrv-serp .r.me.up{background:rgba(22,163,74,.2);border-color:#5FE08D;box-shadow:0 0 0 3px rgba(95,224,141,.15)}
.vrv-serp .r.me.up b,.vrv-serp .r.me.up em{color:#8ff0b2}
.vrv-ai p{padding:8px 10px 0;font:500 10px/1.5 var(--f-body);color:#dbe7fb;min-height:84px}
.vrv-ai p mark{background:rgba(127,176,255,.18);color:#fff;border-radius:3px;padding:0 2px}
.vrv-ai p mark.me{background:#16a34a;color:#fff}
.vrv-ai p .vr-cur{background:#7fb0ff}
.vrv-ai .vd{position:absolute;left:10px;right:10px;bottom:10px;display:flex;align-items:center;gap:6px;padding:6px 8px;border-radius:9px;background:rgba(192,57,43,.22);border:1px solid rgba(255,90,74,.6);opacity:0;transform:scale(.8);transition:opacity .3s,transform .5s cubic-bezier(.3,1.7,.5,1),background .4s,border-color .4s}
.vrv-ai .vd.in{opacity:1;transform:none}
.vrv-ai .vd i{width:8px;height:8px;border-radius:50%;background:#ff5a4a;flex-shrink:0}
.vrv-ai .vd b{font:700 9.5px var(--f-mono);color:#ffb3a8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0}
.vrv-ai .vd small{font:500 8px var(--f-mono);color:#9fb6de;flex-shrink:0}
.vrv-ai .vd.ok{background:rgba(22,163,74,.24);border-color:#5FE08D}
.vrv-ai .vd.ok i{background:#5FE08D}
.vrv-ai .vd.ok b{color:#8ff0b2}
.vrv.s-cited .vrv-ai{border-color:rgba(95,224,141,.7);box-shadow:0 22px 44px -18px rgba(0,0,0,.85),0 0 0 3px rgba(95,224,141,.12)}
.vrv.s-miss .vrv-ai{border-color:rgba(255,90,74,.6)}
/* site scan card */
.vrv-site{position:absolute;left:50%;top:50%;width:268px;padding:9px 10px 10px;border-radius:14px;background:rgba(7,20,48,.96);border:1px solid rgba(255,177,92,.55);box-shadow:0 24px 50px -16px rgba(0,0,0,.85),0 0 0 4px rgba(255,140,26,.1);opacity:0;transform:translate(-50%,-38%) scale(.88) rotateX(14deg);transition:opacity .45s,transform .7s cubic-bezier(.2,1.3,.4,1);z-index:3}
.vrv.s-site .vrv-site{opacity:1;transform:translate(-50%,-50%)}
.vrv-site .sb{display:flex;align-items:center;gap:4px;margin-bottom:7px}
.vrv-site .sb i{width:6px;height:6px;border-radius:50%;background:#23406f}
.vrv-site .sb span{margin-left:6px;font:600 9.5px var(--f-mono);color:#cfe0ff;flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vrv-site .sb em{font:700 9.5px var(--f-mono);font-style:normal;color:#FFB15C;font-variant-numeric:tabular-nums}
.vrv-site .wf{position:relative;height:54px;border-radius:8px;background:rgba(127,176,255,.06);overflow:hidden;margin-bottom:7px}
.vrv-site .wf span{position:absolute;border-radius:3px;background:rgba(127,176,255,.2)}
.vrv-site .w1{left:8px;top:7px;width:40%;height:7px}.vrv-site .w2{left:8px;top:19px;width:70%;height:4px}.vrv-site .w3{left:8px;top:27px;width:62%;height:4px}
.vrv-site .w4{left:8px;top:38px;width:26%;height:10px}.vrv-site .w5{right:8px;top:7px;width:26%;height:24px}.vrv-site .w6{right:8px;top:36px;width:26%;height:12px}
.vrv-site .wf .beam{left:0;right:0;top:0;height:2px;border-radius:0;background:#FFB15C;box-shadow:0 0 12px 3px rgba(255,177,92,.55);opacity:0}
.vrv-site ul{list-style:none;display:flex;flex-direction:column;gap:3px}
.vrv-site li{display:flex;justify-content:space-between;align-items:center;gap:6px;font:500 9.5px var(--f-body);color:#dbe7fb;padding:3px 7px;border-radius:6px;background:rgba(192,57,43,.16);border:1px solid rgba(255,90,74,.35);opacity:0;transform:translateX(-10px) scale(.96);transition:opacity .3s,transform .5s cubic-bezier(.3,1.6,.5,1),background .35s,border-color .35s}
.vrv-site li span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.vrv-site li.in{opacity:1;transform:none}
.vrv-site li em{font:700 8px var(--f-mono);font-style:normal;padding:1px 6px;border-radius:99px;background:#c0392b;color:#fff;white-space:nowrap;transition:background .3s}
.vrv-site li.ok{background:rgba(22,163,74,.18);border-color:rgba(95,224,141,.55);animation:vrSnap .5s cubic-bezier(.3,1.6,.5,1)}
.vrv-site li.ok em{background:#16a34a}
@keyframes vrSnap{0%{transform:scale(1.07)}}
/* score */
.vrv-score{position:absolute;left:50%;top:50%;width:132px;height:132px;opacity:0;transform:translate(-50%,-50%) scale(.3);z-index:5;pointer-events:none}
.vrv-score.show{animation:vrMtr .95s cubic-bezier(.2,1.5,.35,1) forwards}
.vrv-score.out{animation:vrMtrOut .5s var(--ease) forwards}
.vrv-score.fin{opacity:1;transform:translate(-50%,-50%)}
@keyframes vrMtr{0%{opacity:0;transform:translate(-50%,-50%) scale(.3)}40%{opacity:1}100%{opacity:1;transform:translate(-50%,-50%) scale(1)}}
@keyframes vrMtrOut{0%{opacity:1;transform:translate(-50%,-50%)}100%{opacity:0;transform:translate(-50%,-50%) scale(.85)}}
.vrv-score:before{content:"";position:absolute;inset:6px;border-radius:50%;background:rgba(5,22,40,.95);box-shadow:0 0 0 4px rgba(95,224,141,.16),0 24px 50px -14px rgba(0,0,0,.85)}
.vrv-score svg{position:absolute;inset:0;width:100%;height:100%;transform:rotate(-90deg)}
.vrv-score .bg,.vr-md .rg .bg,.vr-ck .dn-w .bg{fill:none;stroke:rgba(255,255,255,.1);stroke-width:9}
.vrv-score .fg{fill:none;stroke:#5FE08D;stroke-width:9;stroke-linecap:round;stroke-dasharray:1 1;stroke-dashoffset:1}
.vrv-score .v{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.vrv-score .v b{font:800 36px/1 var(--f-disp);color:#fff;letter-spacing:-.03em;font-variant-numeric:tabular-nums}
.vrv-score .v small{font:600 7.5px var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:#9fb6de;margin-top:4px;text-align:center;max-width:90px}
.vrv-score .ring{position:absolute;inset:0;border-radius:50%;border:2px solid #5FE08D;opacity:0}
.vrv-score.show .ring{animation:vrRing 1.1s var(--ease-o) .35s}
@keyframes vrRing{0%{opacity:.9;transform:scale(1)}100%{opacity:0;transform:scale(1.6)}}
/* KPI */
.vrv-kp{display:grid;grid-template-columns:repeat(4,1fr);border-bottom:1px solid rgba(127,176,255,.12)}
.vrv-kp>div{padding:9px 6px 10px;text-align:center;border-right:1px solid rgba(127,176,255,.12);min-width:0}
.vrv-kp>div:last-child{border-right:0}
.vrv-kp span{display:block;font:500 9px var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:#9fb6de;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vrv-kp b{display:block;font:700 16px/1.25 var(--f-disp);color:#cfe0ff;font-variant-numeric:tabular-nums;transition:color .5s}
.vrv-kp em{display:inline-block;font:700 9px var(--f-mono);font-style:normal;padding:1px 6px;border-radius:99px;background:rgba(127,176,255,.16);color:#9fb6de;white-space:nowrap;transition:background .4s,color .4s;max-width:100%;overflow:hidden;text-overflow:ellipsis}
.vrv-kp .bad b{color:#ff9a8f}.vrv-kp .bad em{background:rgba(192,57,43,.3);color:#ffb3a8}
.vrv-kp .warn b{color:#FFB15C}.vrv-kp .warn em{background:rgba(255,140,26,.25);color:#FFD3A0}
.vrv-kp .good b{color:#8ff0b2}.vrv-kp .good em{background:#16a34a;color:#fff}
.vrv-en{display:grid;grid-template-columns:repeat(4,1fr);gap:6px;padding:10px 12px 0}
.vrv-en span{display:flex;align-items:center;justify-content:center;gap:5px;font:600 9.5px var(--f-mono);color:#7f93ba;padding:5px 4px;border-radius:99px;border:1px solid rgba(127,176,255,.18);background:#0D1F47;white-space:nowrap;overflow:hidden;transition:color .35s,background .35s,border-color .35s,transform .5s cubic-bezier(.3,1.7,.5,1)}
.vrv-en i{width:7px;height:7px;border-radius:50%;background:#3a4f78;flex-shrink:0;transition:background .3s,box-shadow .3s}
.vrv-en span.no{color:#ffb3a8;border-color:rgba(255,90,74,.5)}
.vrv-en span.no i{background:#ff5a4a}
.vrv-en span.on{color:#fff;background:rgba(22,163,74,.28);border-color:#5FE08D;transform:translateY(-2px)}
.vrv-en span.on i{background:#5FE08D;box-shadow:0 0 0 3px rgba(95,224,141,.25)}
.vrv-lg{display:flex;align-items:center;gap:8px;height:32px;margin:10px 12px 12px;padding:0 10px;border-radius:9px;background:#030a1c;border:1px solid rgba(127,176,255,.16);overflow:hidden}
.vrv-lg .pr{font:700 11px var(--f-mono);color:#7fb0ff;flex-shrink:0;transition:color .3s}
.vrv.a2 .vrv-lg .pr{color:#ff5a4a}.vrv.a3 .vrv-lg .pr{color:#FFB15C}
.vrv.a4 .vrv-lg .pr,.vrv.a5 .vrv-lg .pr{color:#5FE08D}
.vrv-lg code{font:500 10.5px var(--f-mono);color:#dbe7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
@media(max-width:560px){
  .vrv-h{padding:10px 12px}.vrv-h b{font-size:12.5px}.vrv-live{display:none}
  .vrv-rail{padding:9px 8px 11px;gap:3px}.vrv-rail>span{font-size:7.5px;padding:4px 0}
  .vrv-sc{height:286px}
  .vrv-q{font-size:10.5px;left:8px;right:8px}
  .vrv-serp{left:8px;width:calc(54% - 10px)}.vrv-ai{right:8px;width:calc(46% - 2px)}
  .vrv-serp .r{left:4px;right:4px;gap:4px;padding:0 4px}.vrv-serp .r b{font-size:8px}
  .vrv-ai p{font-size:9px;padding:6px 7px 0}.vrv-ai .vd b{font-size:8.5px}.vrv-ai .vd small{display:none}
  .vrv-site{width:240px}
  .vrv-kp b{font-size:13.5px}.vrv-kp span{font-size:8px;letter-spacing:.02em}.vrv-kp em{font-size:8px;padding:1px 4px}
  .vrv-en{gap:4px;padding:9px 8px 0}.vrv-en span{font-size:8px;gap:3px;padding:4px 2px}.vrv-en i{width:5px;height:5px}
  .vrv-score{width:116px;height:116px}.vrv-score .v b{font-size:30px}
}

/* ===================== OVERVIEW · GOOGLE vs AI ===================== */
.vr-vs{margin-bottom:30px;overflow-x:clip}
.vs-q{display:flex;align-items:center;gap:10px;max-width:640px;margin:0 auto 18px;padding:12px 18px;border-radius:99px;background:var(--surface);border:1.5px solid var(--line-2);box-shadow:var(--sh);font:500 15px var(--f-body);color:var(--ink)}
.vs-q i{color:#1565D8;display:grid}.vs-q i svg{width:18px;height:18px}
html[data-theme="dark"] .vs-q i{color:#7fb0ff}
.vs-q span{flex:1;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vs-q em{font:500 10.5px var(--f-mono);font-style:normal;color:var(--muted);white-space:nowrap}
@media(max-width:560px){.vs-q em{display:none}.vs-q{font-size:13.5px}}
.vs-g{display:grid;grid-template-columns:minmax(0,1fr) 54px minmax(0,1fr);gap:0;align-items:stretch}
.vs-p{position:relative;border-radius:20px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh);padding:16px 16px 70px;overflow:hidden;opacity:0;transform:perspective(900px) rotateY(10deg) translateY(24px);transition:opacity .6s,transform 1s cubic-bezier(.2,1.2,.4,1)}
.vs-p.ai{transform:perspective(900px) rotateY(-10deg) translateY(24px);background:#041E42;border-color:rgba(127,176,255,.25);color:#dbe7fb}
html[data-theme="dark"] .vs-p.ai{background:#050d22}
.vr-vs.go .vs-p{opacity:1;transform:none}
.vs-p .ph{display:flex;align-items:center;gap:8px;margin-bottom:12px}
.vs-p .ph b{font:700 14px var(--f-disp);color:var(--ink)}
.vs-p.ai .ph b{color:#fff}
.vs-p .ph em{margin-left:auto;font:500 10px var(--f-mono);font-style:normal;color:var(--muted)}
.vs-p.ai .ph em{color:#7f93ba}
.vs-p .g{box-shadow:0 0 0 1px var(--line-2)}
.vs-p ol{list-style:none;display:flex;flex-direction:column;gap:7px}
.vs-p li{display:flex;gap:10px;align-items:center;padding:8px 10px;border-radius:11px;background:var(--surface-2);border:1px solid var(--line);opacity:0;transform:translateY(10px);transition:opacity .4s,transform .55s cubic-bezier(.3,1.5,.5,1),border-color .3s,background .3s}
.vs-p li.in{opacity:1;transform:none}
.vs-p li em{font:700 11px var(--f-mono);font-style:normal;color:var(--muted);width:18px}
.vs-p li span{flex:1;min-width:0}
.vs-p li b{display:block;font:600 13px var(--f-body);color:#1565D8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
html[data-theme="dark"] .vs-p li b{color:#7fb0ff}
.vs-p li small{display:block;font:500 11px var(--f-mono);color:var(--muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.vs-p li.me{border-color:#16a34a;background:#e9f8ef}
html[data-theme="dark"] .vs-p li.me{background:rgba(22,163,74,.14)}
.vs-p li.me b{color:#0f7a37}
html[data-theme="dark"] .vs-p li.me b{color:#8ff0b2}
.vs-p.ai p{font:500 14px/1.65 var(--f-body);color:#dbe7fb;min-height:118px}
.vs-p.ai p mark{background:rgba(127,176,255,.2);color:#fff;border-radius:4px;padding:0 3px}
.vs-src{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.vs-src span{font:500 10.5px var(--f-mono);color:#9fb6de;border:1px solid rgba(127,176,255,.25);border-radius:99px;padding:3px 9px;opacity:0;transform:scale(.8);transition:opacity .3s,transform .45s cubic-bezier(.3,1.7,.5,1)}
.vs-src span.in{opacity:1;transform:none}
.vs-f{position:absolute;left:16px;right:16px;bottom:16px;display:flex;align-items:center;gap:10px;padding:10px 12px;border-radius:12px;opacity:0;transform:translateY(10px) scale(.95);transition:opacity .4s,transform .6s cubic-bezier(.3,1.6,.5,1)}
.vs-f.in{opacity:1;transform:none}
.vs-f i{width:26px;height:26px;border-radius:8px;display:grid;place-items:center;color:#fff;flex-shrink:0}
.vs-f i svg{width:14px;height:14px}
.vs-f span{font:500 13px var(--f-body)}
.vs-f.g{background:#e9f8ef;border:1px solid rgba(22,163,74,.4);color:#0f5f2c}
.vs-f.g i{background:#16a34a}
html[data-theme="dark"] .vs-f.g{background:rgba(22,163,74,.14);color:#8ff0b2}
.vs-f.r{background:rgba(192,57,43,.2);border:1px solid rgba(255,90,74,.6);color:#ffb3a8}
.vs-f.r i{background:#c0392b}
.vs-f.r.in{animation:vrShk .45s .5s}
@keyframes vrShk{25%{translate:-4px 0}75%{translate:4px 0}}
.vs-mid{display:grid;place-items:center;position:relative}
.vs-mid:before{content:"";position:absolute;top:10%;bottom:10%;left:50%;width:1.5px;background:var(--line-2)}
.vs-mid span{position:relative;width:36px;height:36px;border-radius:50%;background:#FF8C1A;color:#fff;display:grid;place-items:center;font:800 12px var(--f-disp);box-shadow:0 0 0 6px rgba(255,140,26,.16)}
.vr-vs.go .vs-mid span{animation:vrPop .7s cubic-bezier(.3,1.7,.5,1) .4s both}
@keyframes vrPop{0%{transform:scale(0)}}
.vs-bt{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:18px}
.vs-bt>div{display:grid;grid-template-columns:auto 1fr;gap:2px 12px;padding:14px 16px;border-radius:16px;background:var(--surface-2);border:1px solid var(--line)}
.vs-bt .vi{grid-row:span 2;width:38px;height:38px;border-radius:11px;background:var(--chip);color:#1565D8;display:grid;place-items:center}
.vs-bt .vi.o{background:#fff3e0;color:#F57C00}.vs-bt .vi.g{background:#e4f7ec;color:#16a34a}
html[data-theme="dark"] .vs-bt .vi{background:var(--chip);color:#7fb0ff}html[data-theme="dark"] .vs-bt .vi.o{color:#FFB15C}html[data-theme="dark"] .vs-bt .vi.g{color:#5FE08D}
.vs-bt .vi svg{width:18px;height:18px}
.vs-bt b{font:700 15px var(--f-disp);color:var(--ink)}
.vs-bt p{font-size:13px;line-height:1.5;color:var(--text)}
@media(max-width:860px){.vs-g{grid-template-columns:1fr}.vs-mid{height:50px}.vs-mid:before{top:0;bottom:0}.vs-bt{grid-template-columns:1fr}}

/* ===================== JOURNEY (sticky) ===================== */
.vr-jr{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.18fr);gap:34px;align-items:start}
.jr-st{list-style:none;display:flex;flex-direction:column;padding:8vh 0 14vh}
.jr-st li{position:relative;min-height:54vh;display:flex;flex-direction:column;justify-content:center;padding:18px 0 18px 60px;opacity:.36;transition:opacity .45s}
.jr-st li.on{opacity:1}
.jr-st li .n{position:absolute;left:0;top:50%;margin-top:-22px;width:44px;height:44px;border-radius:13px;display:grid;place-items:center;font:700 14px var(--f-mono);background:var(--surface-2);border:1.5px solid var(--line-2);color:var(--muted);transition:background .4s,color .4s,border-color .4s,transform .5s cubic-bezier(.3,1.6,.5,1)}
.jr-st li.on .n{background:#1565D8;border-color:#1565D8;color:#fff;transform:scale(1.08)}
.jr-st li.hot .n{box-shadow:0 0 0 6px rgba(21,101,216,.16)}
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
.jr-hd b{font:800 18px var(--f-disp);color:#fff;letter-spacing:-.01em}
.jr-hd b.sw,.jr-cap.sw{animation:vrSwap .5s var(--ease-o)}
.jr-hd em{margin-left:auto;font:500 10px var(--f-mono);font-style:normal;color:#7f93ba}
.jr-cap{position:absolute;left:16px;right:16px;bottom:16px;z-index:2;display:flex;align-items:center;gap:11px;padding:10px 12px;border-radius:13px;background:rgba(7,20,48,.88);border:1px solid rgba(127,176,255,.25)}
.jr-cap i{width:32px;height:32px;border-radius:9px;background:#FF8C1A;color:#fff;display:grid;place-items:center;flex-shrink:0}
.jr-cap i svg{width:16px;height:16px}
.jr-cap b{display:block;font:700 13px var(--f-disp);color:#fff}
.jr-cap small{display:block;font:500 10.5px var(--f-mono);color:#9fb6de}
@media(max-width:900px){
  .vr-jr{grid-template-columns:1fr}
  .jr-v{display:none}
  .jr-st{padding:0;gap:16px}
  .jr-st li{min-height:0;opacity:1;padding:18px;border:1px solid var(--line);border-radius:18px;background:var(--surface);box-shadow:var(--sh-s)}
  .jr-st li .n{position:static;margin:0 0 10px;width:38px;height:38px}
  .jr-st li .n,.jr-st li.on .n{transform:none;background:#1565D8;border-color:#1565D8;color:#fff;box-shadow:none!important}
  .jr-mc{display:block;width:100%;height:200px;margin-top:14px;border-radius:14px;background:#041E42}
  html[data-theme="dark"] .jr-mc{background:#050d22}
}

/* ===================== MODULES ===================== */
.vr-md{border-radius:24px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh);padding:12px}
.md-t{position:relative;display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:4px;padding:5px;border-radius:16px;background:var(--surface-2);border:1px solid var(--line)}
.md-t button{position:relative;z-index:1;display:flex;align-items:center;justify-content:center;gap:7px;border:0;background:none;padding:11px 6px;border-radius:12px;font:600 13px var(--f-disp);color:var(--muted);cursor:pointer;transition:color .3s;white-space:nowrap}
.md-t button i{display:grid;place-items:center}.md-t button svg{width:16px;height:16px}
.md-t button.on{color:#fff}
.md-t button:not(.on):hover{color:var(--ink)}
.md-t .ul{position:absolute;left:0;top:5px;bottom:5px;border-radius:12px;background:#1565D8;box-shadow:0 8px 20px -8px rgba(21,101,216,.8);transition:transform .55s cubic-bezier(.3,1.3,.5,1),width .55s cubic-bezier(.3,1.3,.5,1)}
.md-t .pg{position:absolute;left:12px;right:12px;bottom:1px;height:2px;border-radius:2px;background:rgba(255,255,255,.55);transform-origin:left;transform:scaleX(0)}
@media(max-width:860px){.md-t{grid-template-columns:repeat(3,minmax(0,1fr))}.md-t .ul{display:none}.md-t button.on{background:#1565D8}}
@media(max-width:460px){.md-t button{font-size:11.5px;gap:5px;padding:9px 4px}.md-t button svg{width:13px;height:13px}}
.md-b{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.3fr);gap:24px;padding:22px 12px 12px;align-items:center}
@media(max-width:900px){.md-b{grid-template-columns:1fr;padding:18px 4px 4px}}
.md-tx h3{font:800 24px var(--f-disp);color:var(--ink);letter-spacing:-.01em;margin-bottom:8px}
.md-tx p{font-size:15px;line-height:1.65;color:var(--text);margin-bottom:12px}
.md-tx ul{list-style:none;display:flex;flex-direction:column;gap:8px}
.md-tx li{display:flex;gap:10px;align-items:flex-start;font-size:14px;line-height:1.5;color:var(--text);animation:vrUp .5s var(--ease-o) both;animation-delay:calc(var(--k)*80ms + .1s)}
.md-tx li i{width:26px;height:26px;border-radius:8px;background:var(--chip);color:#1565D8;display:grid;place-items:center;flex-shrink:0}
html[data-theme="dark"] .md-tx li i{color:#7fb0ff}
.md-tx li i svg{width:14px;height:14px}
.md-tx .src{display:inline-block;margin-top:12px;font:500 11px var(--f-mono);color:var(--muted)}
.md-tx.sw h3,.md-tx.sw p{animation:vrSwap .5s var(--ease-o)}
.md-v{position:relative;display:grid;min-height:330px;border-radius:18px;background:#041E42;border:1px solid rgba(127,176,255,.22);overflow:hidden;perspective:1000px}
html[data-theme="dark"] .md-v{background:#050d22}
.md-v:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(127,176,255,.14) 1px,transparent 1.2px);background-size:16px 16px;opacity:.6}
.mk{position:relative;grid-area:1/1;padding:14px;color:#dbe7fb;opacity:0;visibility:hidden;transform:translateX(40px) rotateY(-14deg) scale(.95);transform-origin:0 50%;transition:opacity .45s,transform .7s cubic-bezier(.2,1.2,.4,1),visibility 0s .7s}
.mk.on{opacity:1;visibility:visible;transform:none;transition:opacity .45s .12s,transform .8s cubic-bezier(.2,1.2,.4,1) .08s,visibility 0s}
.mk.out{transform:translateX(-40px) rotateY(14deg) scale(.95);transform-origin:100% 50%}
.mk-h{position:relative;display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
.mk-h span{display:flex;align-items:center;gap:7px;font:700 12px var(--f-mono);color:#cfe0ff}
.mk-h svg{width:14px;height:14px;color:#7fb0ff}
.mk-h em{font:500 10px var(--f-mono);font-style:normal;color:#7f93ba}
.mk .lb{display:block;font:600 9.5px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#9fb6de;margin-bottom:6px}
.mk .lg2{display:flex;align-items:center;gap:6px;font:500 9.5px var(--f-mono);color:#9fb6de;margin-top:6px;flex-wrap:wrap}
/* shared rings */
.vr-md .rg{position:relative;width:104px;height:104px;flex-shrink:0}
.vr-md .rg svg{width:100%;height:100%;transform:rotate(-90deg)}
.vr-md .rg .bg{stroke-width:10}
.vr-md .rg .fg{fill:none;stroke:#5FE08D;stroke-width:10;stroke-linecap:round;stroke-dasharray:1 1;stroke-dashoffset:1}
.mk.go .rg .fg{transition:stroke-dashoffset 1.4s cubic-bezier(.3,1,.4,1) .2s;stroke-dashoffset:calc(1 - var(--to))}
.vr-md .rg b{position:absolute;left:0;right:0;top:32px;text-align:center;font:800 28px var(--f-disp);color:#fff;font-variant-numeric:tabular-nums}
.vr-md .rg small{position:absolute;left:0;right:0;top:66px;text-align:center;font:600 7px var(--f-mono);text-transform:uppercase;letter-spacing:.02em;color:#9fb6de}
/* seo */
.mk-seo{position:relative;display:grid;grid-template-columns:auto 1fr;gap:12px 16px}
.mk-seo .is{display:flex;flex-direction:column;gap:7px;justify-content:center}
.mk-seo .is span{display:grid;grid-template-columns:110px 1fr 34px;align-items:center;gap:8px}
.mk-seo .is b{font:500 10.5px var(--f-body);color:#cfe0ff;white-space:nowrap}
.mk-seo .is i{height:8px;border-radius:99px;background:#ff5a4a;transform-origin:left;transform:scaleX(0);width:calc(var(--w)*100%)}
.mk-seo .is i.o{background:#FF8C1A}.mk-seo .is i.r{background:#c0392b}.mk-seo .is i.g{background:#5FE08D}
.mk.go .mk-seo .is i{transform:scaleX(1);transition:transform .9s cubic-bezier(.3,1.2,.5,1) calc(var(--k)*.12s + .3s)}
.mk-seo .is em{font:700 10px var(--f-mono);font-style:normal;color:#fff;text-align:right}
.mk-seo .kw{grid-column:1/-1;width:100%;border-collapse:collapse;font:500 10.5px var(--f-mono)}
.mk-seo .kw th{text-align:left;font-weight:600;color:#7f93ba;padding:3px 6px;border-bottom:1px solid rgba(127,176,255,.15)}
.mk-seo .kw td{padding:5px 6px;color:#dbe7fb;border-bottom:1px solid rgba(127,176,255,.08)}
.mk-seo .kw tr{opacity:0;transform:translateX(-10px)}
.mk.go .mk-seo .kw tbody tr{opacity:1;transform:none;transition:opacity .4s calc(var(--k)*.1s + .5s),transform .5s cubic-bezier(.3,1.4,.5,1) calc(var(--k)*.1s + .5s)}
.mk-seo .kw thead tr{opacity:1;transform:none}
.mk-seo .kw b.up{color:#8ff0b2}.mk-seo .kw b.dn{color:#ff9a8f}
.mk-seo .bl{grid-column:1/-1;display:grid;grid-template-columns:1fr;gap:2px}
.mk-seo .bars,.mk-seo .lost{display:grid;grid-template-columns:repeat(8,1fr);gap:5px;align-items:end}
.mk-seo .bars{height:42px}.mk-seo .lost{height:16px;align-items:start}
.mk-seo .bars i,.mk-seo .lost i{display:block;border-radius:3px;background:#5FE08D;height:calc(var(--h)*100%);transform:scaleY(0);transform-origin:bottom}
.mk-seo .lost i{background:#ff5a4a;transform-origin:top}
.mk.go .mk-seo .bars i,.mk.go .mk-seo .lost i{transform:none;transition:transform .7s cubic-bezier(.3,1.4,.5,1) calc(var(--k)*.06s + .7s)}
.mk-seo .lg i{display:inline-block;width:8px;height:8px;border-radius:2px;background:#5FE08D;margin:0 4px 0 8px}.mk-seo .lg i.r{background:#ff5a4a}
.mk-seo .lg{font:500 9.5px var(--f-mono);color:#9fb6de;margin-top:4px}
/* ai */
.mk-ai .ph,.mk-ai .pr{display:grid;grid-template-columns:minmax(0,1fr) repeat(4,58px);gap:6px;align-items:center}
.mk-ai .ph b{font:600 9px var(--f-mono);color:#9fb6de;text-align:center;white-space:nowrap}
.mk-ai .pr{padding:7px 8px;border-radius:9px;background:rgba(127,176,255,.07);margin-top:5px;opacity:0;transform:translateY(8px)}
.mk.go .mk-ai .pr{opacity:1;transform:none;transition:opacity .4s calc(var(--k)*.12s + .15s),transform .5s cubic-bezier(.3,1.4,.5,1) calc(var(--k)*.12s + .15s)}
.mk-ai .pr span{font:500 10.5px var(--f-mono);color:#dbe7fb;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mk-ai .pr i{justify-self:center;width:14px;height:14px;border-radius:50%;background:#23406f;transform:scale(0)}
.mk.go .mk-ai .pr i{transform:none;transition:transform .45s cubic-bezier(.3,1.8,.5,1),background .3s;transition-delay:calc(var(--k)*.12s + .6s)}
.mk-ai .pr i.y{background:#16a34a;box-shadow:0 0 0 3px rgba(95,224,141,.2)}
.mk-ai .pr i.n{background:rgba(192,57,43,.6)}
.mk-ai .sv{margin-top:12px}
.mk-ai .br{display:grid;grid-template-columns:96px 1fr 38px;gap:8px;align-items:center;margin-top:5px}
.mk-ai .br b{font:600 10px var(--f-body);color:#fff;white-space:nowrap}
.mk-ai .br.c b{color:#9fb6de;font-weight:500}
.mk-ai .br i{display:block;height:10px;border-radius:99px;background:#FF8C1A;width:calc(var(--w)*100%);transform-origin:left;transform:scaleX(0)}
.mk-ai .br.c i{background:#3a5a94}
.mk.go .mk-ai .br i{transform:scaleX(1);transition:transform 1s cubic-bezier(.3,1.2,.5,1) calc(var(--k)*.12s + .9s)}
.mk-ai .br em{font:700 10px var(--f-mono);font-style:normal;color:#fff;text-align:right}
.mk-ai .fx{margin-top:12px;opacity:0}
.mk.go .mk-ai .fx{opacity:1;transition:opacity .4s 1.6s}
.mk-ai .fx span{display:flex;align-items:center;gap:7px;font:500 10.5px var(--f-mono);color:#FFD3A0;padding:7px 10px;border-radius:9px;background:rgba(255,140,26,.14);border:1px dashed rgba(255,177,92,.6)}
.mk-ai .fx svg{width:13px;height:13px;flex-shrink:0}
@media(max-width:560px){.mk-ai .ph,.mk-ai .pr{grid-template-columns:minmax(0,1fr) repeat(4,30px);gap:3px}.mk-ai .ph b{font-size:0}.mk-ai .ph b:before{font-size:8px;content:attr(data-s)}.mk-ai .br{grid-template-columns:78px 1fr 32px}}
/* local */
.mk-loc{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:14px;align-items:start}
.mk-loc .gg{display:grid;grid-template-columns:repeat(5,1fr);gap:6px;padding:10px;border-radius:12px;background:rgba(127,176,255,.06);border:1px solid rgba(127,176,255,.15)}
.mk-loc .gg i{aspect-ratio:1;border-radius:50%;display:grid;place-items:center;font:700 10px var(--f-mono);font-style:normal;color:#fff;transform:scale(0);background:var(--c)}
.mk.go .mk-loc .gg i{transform:none;transition:transform .45s cubic-bezier(.3,1.8,.5,1) calc(var(--k)*30ms + .2s)}
.mk-loc .gg i.me{box-shadow:0 0 0 3px #fff}
.mk-loc .gp{padding:10px;border-radius:12px;background:#fff;color:#041E42;margin-bottom:10px}
.mk-loc .gp b{display:block;font:700 12.5px var(--f-disp)}
.mk-loc .gp .st{display:block;font-size:12px;color:#F57C00;margin:2px 0 6px}
.mk-loc .gp .st em{font:500 10.5px var(--f-mono);font-style:normal;color:#5b6b8c}
.mk-loc .gp .ln{display:block;height:5px;border-radius:3px;background:#e7edf7;margin-top:4px}
.mk-loc .gp .ln i{display:block;height:100%;border-radius:3px;background:#c8d6ee;width:calc(var(--w)*100%)}
.mk-loc .rv2{padding:10px;border-radius:12px;background:rgba(127,176,255,.08);border:1px solid rgba(127,176,255,.2)}
.mk-loc .rh{display:flex;align-items:center;gap:6px;font:600 10px var(--f-mono);color:#FFB15C}
.mk-loc .rh svg{width:12px;height:12px}
.mk-loc .rv2 p{font:500 11.5px/1.45 var(--f-body);color:#fff;margin:4px 0 8px}
.mk-loc .rp{padding:8px 9px;border-radius:9px;background:rgba(22,163,74,.16);border-left:3px solid #5FE08D}
.mk-loc .rp b{display:block;font:700 9.5px var(--f-mono);color:#8ff0b2;margin-bottom:3px}
.mk .ty{font:500 11px/1.5 var(--f-body);color:#dbe7fb;min-height:3em;display:block}
@media(max-width:560px){.mk-loc{grid-template-columns:1fr}.mk-loc .gg{max-width:240px}}
/* content */
.mk-con{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:14px}
.mk-con .ed{padding:12px;border-radius:12px;background:#F4F8FF;color:#041E42}
.mk-con .ed .tt{display:block;font:800 14px/1.3 var(--f-disp);margin-bottom:8px}
.mk-con .ed .ty{color:#24324f;font-size:11.5px;min-height:7.5em}
.mk-con .ed .ty sup,.mk-con .ed .ty b{color:#1565D8;font:700 9px var(--f-mono)}
.mk-con .src{display:flex;flex-wrap:wrap;gap:5px;margin-top:8px}
.mk-con .src span{font:500 9.5px var(--f-mono);color:#1565D8;background:#e3edff;border-radius:99px;padding:2px 8px;opacity:0;transform:scale(.7)}
.mk.go .mk-con .src span{opacity:1;transform:none;transition:opacity .3s,transform .45s cubic-bezier(.3,1.7,.5,1)}
.mk.go .mk-con .src span:nth-child(1){transition-delay:2.2s}.mk.go .mk-con .src span:nth-child(2){transition-delay:2.4s}.mk.go .mk-con .src span:nth-child(3){transition-delay:2.6s}
.mk-con .sd{display:flex;flex-direction:column;gap:12px;align-items:center}
.mk-con .cal{width:100%}
.mk-con .cg{display:grid;grid-template-columns:repeat(7,1fr);gap:4px}
.mk-con .cg i{aspect-ratio:1;border-radius:5px;background:rgba(127,176,255,.1);transform:scale(.4);opacity:0}
.mk.go .mk-con .cg i{opacity:1;transform:none;transition:transform .4s cubic-bezier(.3,1.6,.5,1),opacity .3s}
.mk-con .cg i.p,.mk-con .lg2 i.p{background:#16a34a}.mk-con .cg i.a,.mk-con .lg2 i.a{background:#FF8C1A}.mk-con .cg i.d,.mk-con .lg2 i.d{background:#1565D8}
.mk-con .lg2 i{width:8px;height:8px;border-radius:2px;display:inline-block}
@media(max-width:560px){.mk-con{grid-template-columns:1fr}.mk-con .sd{flex-direction:row;align-items:flex-start}}
/* linkedin */
.mk-li{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:12px}
.mk-li .po{grid-row:span 2;padding:12px;border-radius:12px;background:#fff;color:#041E42}
.mk-li .pa{display:flex;gap:8px;align-items:center;margin-bottom:8px}
.mk-li .av{width:30px;height:30px;border-radius:8px;background:#1565D8;color:#fff;display:grid;place-items:center;font:800 13px var(--f-disp)}
.mk-li .pa b{display:block;font:700 12px var(--f-disp)}.mk-li .pa small{display:block;font:500 9.5px var(--f-mono);color:#5b6b8c}
.mk-li .po .ty{color:#24324f;font-size:11.5px;min-height:6em}
.mk-li .pb2{display:flex;flex-wrap:wrap;gap:6px;margin-top:10px}
.mk-li .pb2 span{display:inline-flex;align-items:center;gap:5px;font:600 9.5px var(--f-mono);color:#1565D8;background:#e3edff;border-radius:99px;padding:4px 9px}
.mk-li .pb2 svg{width:11px;height:11px}
.mk-li .hg{display:grid;grid-template-columns:repeat(7,1fr);gap:3px}
.mk-li .hg i{aspect-ratio:1.4;border-radius:3px;background:rgba(21,101,216,var(--a));opacity:0}
.mk.go .mk-li .hg i{opacity:1;transition:opacity .35s calc(var(--k)*14ms + .2s)}
.mk-li .hg i.hot{background:#FF8C1A;box-shadow:0 0 0 2px rgba(255,140,26,.35)}
.mk-li .an svg{width:100%;height:64px;display:block}
.mk-li .an .ar2{fill:rgba(95,224,141,.14);opacity:0}
.mk-li .an .ln2{fill:none;stroke:#5FE08D;stroke-width:2;vector-effect:non-scaling-stroke;stroke-dasharray:1 1;stroke-dashoffset:1}
.mk.go .mk-li .an .ln2{stroke-dashoffset:0;transition:stroke-dashoffset 1.4s var(--ease-o) .6s}
.mk.go .mk-li .an .ar2{opacity:1;transition:opacity .6s 1.4s}
@media(max-width:560px){.mk-li{grid-template-columns:1fr}.mk-li .po{grid-row:auto}.mk-li .an{display:none}}
/* ads */
.mk-ads{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr);gap:12px}
.mk-ads .ad{grid-row:span 2;border-radius:12px;background:#fff;color:#041E42;overflow:hidden}
.mk-ads .im{position:relative;height:110px;background:#0C3E8F;overflow:hidden}
.mk-ads .im i{position:absolute;border-radius:50%}
.mk-ads .im .s1{width:120px;height:120px;left:-20px;top:20px;background:#1565D8}
.mk-ads .im .s2{width:70px;height:70px;right:30px;top:14px;background:#FF8C1A}
.mk-ads .im .s3{width:160px;height:60px;right:-40px;bottom:-30px;border-radius:40px;background:#16a34a}
.mk.go .mk-ads .im i{animation:vrFloat 6s ease-in-out infinite alternate}
.mk.go .mk-ads .im .s2{animation-duration:4.5s}
@keyframes vrFloat{to{translate:14px -8px}}
.mk-ads .im span{position:absolute;left:10px;bottom:8px;font:600 9.5px var(--f-mono);color:#fff;background:rgba(4,30,66,.6);border-radius:99px;padding:2px 8px}
.mk-ads .hl{padding:10px 12px 6px}
.mk-ads .hl .ty{font:800 13.5px/1.3 var(--f-disp);color:#041E42;min-height:2.6em}
.mk-ads .hl small{display:block;font:500 10.5px var(--f-mono);color:#5b6b8c}
.mk-ads .vv{display:flex;gap:5px;padding:4px 12px 12px}
.mk-ads .vv span{font:600 9.5px var(--f-mono);color:#5b6b8c;border:1px solid #d6e0f0;border-radius:99px;padding:3px 8px;transition:all .3s}
.mk-ads .vv span.on{background:#1565D8;border-color:#1565D8;color:#fff}
.mk-ads .pub{display:flex;flex-direction:column;gap:7px}
.mk-ads .ch2{display:flex;align-items:center;gap:7px;font:600 11px var(--f-body);color:#fff;padding:8px 10px;border-radius:10px;background:rgba(127,176,255,.1);border:1px solid rgba(127,176,255,.25);opacity:.4;transform:translateX(10px)}
.mk-ads .ch2 svg{width:14px;height:14px}
.mk.go .mk-ads .ch2{opacity:1;transform:none;transition:opacity .4s 1.4s,transform .5s cubic-bezier(.3,1.5,.5,1) 1.4s,border-color .3s 1.6s}
.mk.go .mk-ads .ch2.g{transition-delay:1.6s}
.mk.go .mk-ads .ch2{border-color:#5FE08D}
.mk-ads .mt{display:grid;grid-template-columns:1fr;gap:6px}
.mk-ads .mt>div{display:flex;justify-content:space-between;align-items:baseline;padding:7px 10px;border-radius:10px;background:rgba(127,176,255,.07)}
.mk-ads .mt span{font:500 10px var(--f-mono);color:#9fb6de}
.mk-ads .mt b{font:800 16px var(--f-disp);color:#fff;font-variant-numeric:tabular-nums}
@media(max-width:560px){.mk-ads{grid-template-columns:1fr}.mk-ads .ad{grid-row:auto}}
@media(max-width:900px){.md-v{min-height:0}}

/* ===================== CHECK TOOL ===================== */
.vr-ck{display:grid;grid-template-columns:minmax(0,.8fr) minmax(0,1.3fr);gap:22px;align-items:start}
@media(max-width:960px){.vr-ck{grid-template-columns:1fr}}
.ck-in{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:22px;box-shadow:var(--sh);display:flex;flex-direction:column;gap:16px}
.ck-in .fld{margin:0}
.ck-in input{width:100%;border:1.5px solid var(--line-2);background:var(--surface);border-radius:11px;padding:10px 12px;font-size:14px;color:var(--ink);outline:0;transition:border-color .2s,box-shadow .2s}
.ck-in input:focus{border-color:#1565D8;box-shadow:0 0 0 4px rgba(21,101,216,.12)}
.ck-dm{display:flex;align-items:center;border:1.5px solid var(--line-2);border-radius:11px;overflow:hidden;background:var(--surface);transition:border-color .2s,box-shadow .2s}
.ck-dm:focus-within{border-color:#1565D8;box-shadow:0 0 0 4px rgba(21,101,216,.12)}
.ck-dm span{font:500 13px var(--f-mono);color:var(--muted);padding:0 0 0 12px}
.ck-dm input{border:0!important;box-shadow:none!important;padding-left:2px}
.ck-e{display:none;font-size:11.5px;color:#c0392b;margin-top:5px}
.ck-in .bad .ck-dm{border-color:#c0392b}.ck-in .bad .ck-e{display:block}
.ck-c{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
@media(max-width:480px){.ck-c{grid-template-columns:1fr}}
.ck-s{display:flex;flex-wrap:wrap;gap:6px;margin-top:8px}
.ck-s button{border:1px solid var(--line-2);background:var(--surface-2);border-radius:99px;padding:4px 10px;font:500 11.5px var(--f-mono);color:var(--muted);cursor:pointer;transition:border-color .2s,color .2s,transform .25s var(--ease-o)}
.ck-s button:hover{transform:translateY(-2px);color:var(--ink);border-color:#1565D8}
.ck-n{display:flex;gap:9px;align-items:flex-start;font-size:12.5px;line-height:1.5;color:var(--text);padding:10px 12px;border-radius:12px;background:#fff3e0;border:1px solid rgba(255,140,26,.35)}
html[data-theme="dark"] .ck-n{background:rgba(255,140,26,.12);color:#FFD3A0}
.ck-n svg{width:15px;height:15px;color:#F57C00;flex-shrink:0;margin-top:2px}
.ck-out{position:relative;border-radius:22px;background:#041E42;border:1px solid rgba(127,176,255,.22);padding:18px;color:#dbe7fb;box-shadow:var(--sh-l);overflow:hidden}
html[data-theme="dark"] .ck-out{background:#050d22}
.ck-out:before{content:"";position:absolute;inset:0;background-image:radial-gradient(rgba(127,176,255,.12) 1px,transparent 1.2px);background-size:18px 18px;opacity:.6;pointer-events:none}
.ck-out>*{position:relative}
.ck-hd{display:flex;align-items:center;gap:10px;margin-bottom:14px;flex-wrap:wrap}
.ck-hd .st{display:inline-flex;align-items:center;gap:6px;font:600 10.5px var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:#9fb6de;background:rgba(127,176,255,.1);border:1px solid rgba(127,176,255,.2);border-radius:99px;padding:4px 10px}
.ck-hd .st i{width:7px;height:7px;border-radius:50%;background:#7fb0ff}
.ck-out.run .ck-hd .st i{background:#FF8C1A;animation:vrBlink .6s infinite}
.ck-out.done .ck-hd .st i{background:#5FE08D}
.ck-hd b{font:800 18px var(--f-disp);color:#fff;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.ck-hd em{margin-left:auto;font:500 10px var(--f-mono);font-style:normal;color:#FFB15C;border:1px dashed rgba(255,177,92,.5);border-radius:99px;padding:3px 9px}
.ck-out .lb{display:block;font:600 10px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#9fb6de;margin-bottom:8px}
.ck-cr{padding:12px;border-radius:14px;background:rgba(127,176,255,.06);border:1px solid rgba(127,176,255,.15);margin-bottom:12px}
.cr-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:8px}
.cr-h span{display:flex;align-items:center;gap:6px;font:600 11px var(--f-mono);color:#cfe0ff}
.cr-h svg{width:13px;height:13px;color:#7fb0ff}
.cr-h em{font:600 11px var(--f-mono);font-style:normal;color:#FFB15C;font-variant-numeric:tabular-nums}
.ck-out.done .cr-h em{color:#8ff0b2}
.cr-b{height:8px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden}
.cr-b i{display:block;height:100%;width:100%;background:#FF8C1A;transform-origin:left;transform:scaleX(0)}
.ck-out.done .cr-b i{background:#5FE08D;transition:background .4s}
.cr-p{display:grid;grid-template-columns:repeat(24,1fr);gap:3px;margin-top:9px}
.cr-p i{aspect-ratio:1;border-radius:3px;background:rgba(127,176,255,.1);transition:background .25s,transform .35s cubic-bezier(.3,1.7,.5,1)}
.cr-p i.ok{background:#1f5fbf}.cr-p i.w{background:#FF8C1A}.cr-p i.e{background:#c0392b}.cr-p i.a{background:#a07cff}
.cr-p i.hit{transform:scale(1.35)}
.ck-g{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:12px;margin-bottom:12px}
@media(max-width:620px){.ck-g{grid-template-columns:1fr}}
.ck-is,.ck-dn,.ck-kw{padding:12px;border-radius:14px;background:rgba(127,176,255,.06);border:1px solid rgba(127,176,255,.15)}
.ck-is .ir{display:grid;grid-template-columns:repeat(3,1fr);gap:6px;margin-bottom:8px}
.ck-is .ir span{display:flex;flex-direction:column;align-items:center;gap:1px;padding:7px 4px;border-radius:10px;background:rgba(0,0,0,.18);font:500 9.5px var(--f-mono);color:#9fb6de;text-align:center}
.ck-is .ir b{font:800 20px var(--f-disp);color:#fff;font-variant-numeric:tabular-nums}
.ck-is .ir .e b{color:#ff9a8f}.ck-is .ir .w b{color:#FFB15C}.ck-is .ir .a b{color:#c4b2ff}
.ck-is ul{list-style:none;display:flex;flex-direction:column;gap:4px}
.ck-is li{display:flex;align-items:center;gap:7px;font:500 11px var(--f-body);color:#dbe7fb;padding:5px 8px;border-radius:8px;background:rgba(0,0,0,.18);animation:vrUp .45s var(--ease-o) both;animation-delay:calc(var(--k)*90ms)}
.ck-is li i{width:7px;height:7px;border-radius:50%;flex-shrink:0;background:#c0392b}
.ck-is li i.w{background:#FF8C1A}.ck-is li i.a{background:#a07cff}
.ck-is li span{flex:1;min-width:0}
.ck-is li em{font:600 9.5px var(--f-mono);font-style:normal;color:#9fb6de}
.dn-w{position:relative;width:150px;height:150px;margin:0 auto 6px}
.dn-w svg{width:100%;height:100%;transform:rotate(-90deg)}
.dn-w .bg{stroke-width:16}
.dn-w .sg{fill:none;stroke-width:16;stroke-dasharray:0 1;transition:stroke-dasharray 1.1s cubic-bezier(.3,1.1,.4,1),stroke-dashoffset 1.1s cubic-bezier(.3,1.1,.4,1)}
.dn-c{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.dn-c b{font:800 26px var(--f-disp);color:#fff;font-variant-numeric:tabular-nums}
.dn-c small{font:600 8.5px var(--f-mono);text-transform:uppercase;letter-spacing:.06em;color:#9fb6de}
.dn-l{display:grid;grid-template-columns:1fr 1fr;gap:4px 10px}
.dn-l span{display:flex;align-items:center;gap:6px;font:500 10.5px var(--f-body);color:#cfe0ff;min-width:0}
.dn-l span b{margin-left:auto;font:700 10.5px var(--f-mono);color:#fff}
.dn-l i{width:9px;height:9px;border-radius:3px;flex-shrink:0}
.dn-l span s{text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;min-width:0}
.dn-e{display:grid;grid-template-columns:repeat(4,1fr);gap:4px;margin-top:10px}
.dn-e span{display:flex;flex-direction:column;align-items:center;gap:4px;font:500 9px var(--f-mono);color:#9fb6de;text-align:center}
.dn-e em{display:block;width:100%;height:5px;border-radius:99px;background:rgba(255,255,255,.08);overflow:hidden;font-style:normal}
.dn-e em i{display:block;height:100%;background:#FF8C1A;transform-origin:left;transform:scaleX(0);transition:transform .9s cubic-bezier(.3,1.2,.5,1)}
.ck-kw{margin-bottom:12px;overflow-x:auto}
.ck-kw table{width:100%;border-collapse:collapse;font:500 11.5px var(--f-mono);min-width:420px}
.ck-kw th{text-align:left;font-weight:600;color:#7f93ba;padding:4px 8px;border-bottom:1px solid rgba(127,176,255,.15);font-size:10px;text-transform:uppercase;letter-spacing:.05em}
.ck-kw td{padding:7px 8px;color:#dbe7fb;border-bottom:1px solid rgba(127,176,255,.08)}
.ck-kw tr.ph td{color:#7f93ba;text-align:center;padding:16px}
.ck-kw tbody tr:not(.ph){animation:vrUp .45s var(--ease-o) both;animation-delay:calc(var(--k)*100ms)}
.ck-kw .df{display:inline-block;width:52px;height:6px;border-radius:99px;background:rgba(255,255,255,.1);vertical-align:middle;margin-right:6px;overflow:hidden}
.ck-kw .df i{display:block;height:100%;border-radius:99px}
.ck-kw .gp2{font:700 9.5px var(--f-mono);padding:2px 7px;border-radius:99px;background:rgba(255,140,26,.2);color:#FFD3A0}
.ck-kw .gp2.ai{background:rgba(160,124,255,.22);color:#d8ccff}
.ck-cta{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;padding:12px 14px;border-radius:14px;background:rgba(255,140,26,.12);border:1px solid rgba(255,177,92,.45);opacity:.45;transition:opacity .4s}
.ck-out.done .ck-cta{opacity:1;animation:vrUp .6s var(--ease-o)}
.ck-cta>span{display:flex;align-items:center;gap:8px;font-size:13px;color:#FFD3A0;flex:1;min-width:220px}
.ck-cta>span b{color:#fff}
.ck-cta svg{width:16px;height:16px;flex-shrink:0}

/* ===================== SOV RACE ===================== */
.vr-sv{border-radius:24px;background:#041E42;border:1px solid rgba(127,176,255,.22);padding:18px;color:#dbe7fb;box-shadow:var(--sh-l)}
html[data-theme="dark"] .vr-sv{background:#050d22}
.sv-h{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px}
.sv-t{position:relative;display:flex;gap:2px;padding:4px;border-radius:12px;background:rgba(127,176,255,.08);border:1px solid rgba(127,176,255,.18);overflow-x:auto;max-width:100%;scrollbar-width:none}
.sv-t::-webkit-scrollbar{display:none}
.sv-t button{position:relative;z-index:1;border:0;background:none;padding:7px 12px;border-radius:9px;font:600 12px var(--f-body);color:#9fb6de;cursor:pointer;white-space:nowrap;transition:color .3s}
.sv-t button.on{color:#fff}
.sv-t .ul{position:absolute;left:0;top:4px;bottom:4px;border-radius:9px;background:#1565D8;transition:transform .5s cubic-bezier(.3,1.3,.5,1),width .5s cubic-bezier(.3,1.3,.5,1)}
.sv-r{display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(127,176,255,.3);background:rgba(127,176,255,.08);color:#cfe0ff;border-radius:99px;padding:6px 12px;font:600 12px var(--f-body);cursor:pointer;transition:background .2s}
.sv-r:hover{background:rgba(127,176,255,.18)}
.sv-r svg{width:13px;height:13px}
.sv-b{display:grid;grid-template-columns:minmax(0,1fr) 240px;gap:18px}
@media(max-width:820px){.sv-b{grid-template-columns:1fr}}
.sv-race{position:relative;height:244px;overflow:hidden}
.sv-race .rb{position:absolute;left:0;right:0;top:0;height:52px;display:grid;grid-template-columns:130px 1fr;gap:10px;align-items:center;will-change:transform}
.sv-race .rb .nm2{display:flex;align-items:center;gap:8px;font:600 13px var(--f-body);color:#cfe0ff;min-width:0}
.sv-race .rb .nm2 i{width:24px;height:24px;border-radius:7px;display:grid;place-items:center;font:800 11px var(--f-disp);color:#fff;flex-shrink:0;background:var(--c)}
.sv-race .rb .nm2 s{text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.sv-race .rb .tk2{position:relative;height:34px;border-radius:10px;background:rgba(255,255,255,.04)}
.sv-race .rb .tk2 b{position:absolute;left:0;top:0;bottom:0;border-radius:10px;background:var(--c);width:100%;transform-origin:left;will-change:transform}
.sv-race .rb .tk2 em{position:absolute;top:50%;transform:translateY(-50%);font:700 12px var(--f-mono);font-style:normal;color:#fff;white-space:nowrap;will-change:left}
.sv-race .rb.me .nm2{color:#fff}
.sv-race .rb.me .tk2{box-shadow:0 0 0 1px rgba(255,177,92,.4)}
.sv-race .rb .cr{position:absolute;right:-4px;top:-8px;font:700 9px var(--f-mono);color:#fff;background:#16a34a;border-radius:99px;padding:2px 7px;opacity:0;transform:scale(.4);transition:opacity .3s,transform .5s cubic-bezier(.3,1.8,.5,1)}
.sv-race .rb.lead .cr{opacity:1;transform:none}
@media(max-width:560px){.sv-race .rb{grid-template-columns:96px 1fr;gap:6px}.sv-race .rb .nm2{font-size:11.5px}.sv-race .rb .nm2 i{width:20px;height:20px}}
.sv-side{display:flex;flex-direction:column;gap:12px}
.sv-side .wk{display:flex;align-items:baseline;gap:8px;padding:12px 14px;border-radius:14px;background:rgba(127,176,255,.07);border:1px solid rgba(127,176,255,.18)}
.sv-side .wk small{font:600 10px var(--f-mono);text-transform:uppercase;letter-spacing:.08em;color:#9fb6de}
.sv-side .wk b{font:800 34px var(--f-disp);color:#fff;font-variant-numeric:tabular-nums;line-height:1}
.sv-side .wk em{font:500 11px var(--f-mono);font-style:normal;color:#7f93ba}
.sv-tr{padding:12px 14px;border-radius:14px;background:rgba(127,176,255,.07);border:1px solid rgba(127,176,255,.18)}
.sv-tr .lb{display:block;font:600 10px var(--f-mono);text-transform:uppercase;letter-spacing:.08em;color:#9fb6de;margin-bottom:6px}
.sv-tr svg{width:100%;height:70px;display:block}
.sv-tr .ar2{fill:rgba(255,140,26,.16)}
.sv-tr .ln2{fill:none;stroke:#FF8C1A;stroke-width:2;vector-effect:non-scaling-stroke;stroke-linejoin:round}
.sv-ev{font:500 12px/1.5 var(--f-mono);color:#FFD3A0;padding:10px 12px;border-radius:12px;background:rgba(255,140,26,.1);border-left:3px solid #FF8C1A;min-height:60px}
.sv-ev.sw{animation:vrSwap .45s var(--ease-o)}
.sv-n{margin-top:12px;font:500 11px var(--f-mono);color:#7f93ba}

/* ===================== GEOGRID ===================== */
.vr-gg{display:grid;grid-template-columns:minmax(0,1.25fr) minmax(0,.9fr);gap:22px;align-items:center}
@media(max-width:920px){.vr-gg{grid-template-columns:1fr}}
.gg-m{position:relative;border-radius:22px;background:#041E42;border:1px solid rgba(127,176,255,.22);overflow:hidden;box-shadow:var(--sh-l)}
html[data-theme="dark"] .gg-m{background:#050d22}
.gg-m svg{display:block;width:100%;height:auto}
.gg-tag{position:absolute;left:12px;bottom:12px;font:600 10px var(--f-mono);color:#9fb6de;background:rgba(4,30,66,.85);border:1px solid rgba(127,176,255,.25);border-radius:99px;padding:4px 10px}
#vrGgS .sea{fill:#06204a}
#vrGgS .land{fill:#0d2c5e;stroke:rgba(127,176,255,.35);stroke-width:1.2}
#vrGgS .rd{fill:none;stroke:rgba(127,176,255,.18);stroke-width:1.4}
#vrGgS .rd.m{stroke:rgba(255,177,92,.28);stroke-width:2.2}
#vrGgS .lb2{font:600 10px var(--f-mono);fill:#7f93ba;letter-spacing:.06em}
#vrGgS .pin{transition:transform .5s cubic-bezier(.3,1.7,.5,1)}
#vrGgS .pin circle{transition:fill .5s}
#vrGgS .pin text{font:700 10.5px var(--f-mono);fill:#fff;text-anchor:middle;dominant-baseline:central;pointer-events:none}
#vrGgS .me circle.c2{fill:#fff}
#vrGgS .me path{fill:#1565D8}
#vrGgS .rp2{fill:none;stroke:#5FE08D;stroke-width:2;opacity:0}
.gg-p{display:flex;flex-direction:column;gap:16px}
.gg-p .fld{margin:0}
.gg-p .seg button{padding:9px 8px;font-size:12.5px}
.gg-st{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.gg-st>div{padding:12px;border-radius:14px;background:var(--surface);border:1px solid var(--line);text-align:center;box-shadow:var(--sh-s)}
.gg-st span{display:block;font:600 10px var(--f-mono);text-transform:uppercase;letter-spacing:.06em;color:var(--muted)}
.gg-st b{display:block;font:800 26px var(--f-disp);color:var(--ink);font-variant-numeric:tabular-nums}
.gg-lg{display:flex;gap:14px;flex-wrap:wrap;font:500 12px var(--f-mono);color:var(--muted)}
.gg-lg span{display:inline-flex;align-items:center;gap:6px}
.gg-lg i{width:12px;height:12px;border-radius:50%}
.gg-lg .g{background:#16a34a}.gg-lg .y{background:#7fb0ff}.gg-lg .o{background:#FF8C1A}.gg-lg .r{background:#c0392b}
.gg-w{list-style:none;display:flex;flex-direction:column;gap:8px}
.gg-w li{display:flex;align-items:center;gap:10px;font-size:14px;color:var(--text)}
.gg-w svg{width:16px;height:16px;color:#1565D8;flex-shrink:0}
html[data-theme="dark"] .gg-w svg{color:#7fb0ff}

/* ===================== TEAMS ===================== */
.vr-tm{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
@media(max-width:960px){.vr-tm{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.vr-tm{grid-template-columns:1fr}}
.vr-tm .tm{background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:22px;box-shadow:var(--sh-s);transition:box-shadow .35s,border-color .3s;display:flex;flex-direction:column}
.vr-tm .tm:hover{box-shadow:var(--sh);border-color:var(--line-2)}
.vr-tm .ti{width:46px;height:46px;border-radius:13px;background:var(--chip);color:#1565D8;display:grid;place-items:center;margin-bottom:14px;transition:transform .45s cubic-bezier(.3,1.6,.5,1)}
.vr-tm .tm:hover .ti{transform:rotate(-8deg) scale(1.08)}
.vr-tm .ti.o{background:#fff3e0;color:#F57C00}.vr-tm .ti.g{background:#e4f7ec;color:#16a34a}.vr-tm .ti.n{background:#041E42;color:#fff}
html[data-theme="dark"] .vr-tm .ti{background:var(--chip);color:#7fb0ff}html[data-theme="dark"] .vr-tm .ti.o{color:#FFB15C}html[data-theme="dark"] .vr-tm .ti.g{color:#5FE08D}html[data-theme="dark"] .vr-tm .ti.n{background:#0C3E8F;color:#fff}
.vr-tm .ti svg{width:21px;height:21px;stroke-dasharray:80;stroke-dashoffset:80;transition:stroke-dashoffset 1.2s var(--ease-o) .3s}
.vr-tm .tm.in .ti svg{stroke-dashoffset:0}
.vr-tm h3{font:800 18px var(--f-disp);color:var(--ink);margin-bottom:6px}
.vr-tm p{font-size:14px;line-height:1.6;color:var(--text);margin-bottom:12px}
.vr-tm .ex{margin-top:auto;font:500 11.5px var(--f-mono);color:var(--muted);padding-top:10px;border-top:1px dashed var(--line-2)}

/* ===================== PLAN FINDER ===================== */
.vr-pf{display:grid;grid-template-columns:minmax(0,.85fr) minmax(0,1.2fr);gap:22px;align-items:start}
@media(max-width:960px){.vr-pf{grid-template-columns:1fr}}
.pf-in{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:22px;box-shadow:var(--sh);display:flex;flex-direction:column;gap:14px}
.pf-in .fld{margin:0}
.pf-in .fld>label small{font-variant-numeric:tabular-nums}
.pf-n{display:flex;flex-direction:column;gap:8px}
.pf-n .tgl{font-size:13.5px}
.pf-out{display:flex;flex-direction:column;gap:14px}
.pf-cols{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:10px}
@media(max-width:560px){.pf-cols{grid-template-columns:1fr 1fr}}
.pf-cols .pc2{position:relative;border-radius:18px;padding:14px 12px;background:var(--surface);border:1.5px solid var(--line);box-shadow:var(--sh-s);transition:transform .6s cubic-bezier(.3,1.6,.5,1),border-color .3s,box-shadow .35s,opacity .35s}
.pf-cols .pc2.no{opacity:.55}
.pf-cols .pc2.rec{transform:translateY(-10px);border-color:#FF8C1A;box-shadow:0 18px 40px -16px rgba(255,140,26,.55)}
.pf-cols .pc2 .hd{display:block;font:800 14px var(--f-disp);color:var(--ink);margin-bottom:2px}
.pf-cols .pc2 .p{display:block;font:600 11px var(--f-mono);color:var(--muted);margin-bottom:10px}
.pf-cols .pc2 .fl{position:absolute;top:-10px;left:50%;transform:translateX(-50%) scale(0);font:700 9px var(--f-mono);letter-spacing:.06em;text-transform:uppercase;color:#fff;background:#FF8C1A;border-radius:99px;padding:3px 9px;white-space:nowrap;transition:transform .5s cubic-bezier(.3,1.8,.5,1)}
.pf-cols .pc2.rec .fl{transform:translateX(-50%) scale(1)}
.pf-cols .mt2{display:flex;flex-direction:column;gap:6px}
.pf-cols .mt2 span{display:grid;grid-template-columns:1fr;gap:2px;font:500 9.5px var(--f-mono);color:var(--muted)}
.pf-cols .mt2 em{display:block;height:6px;border-radius:99px;background:var(--surface-2);border:1px solid var(--line);overflow:hidden;font-style:normal}
.pf-cols .mt2 em i{display:block;height:100%;width:100%;border-radius:99px;background:#1565D8;transform-origin:left;transform:scaleX(0);transition:transform .7s cubic-bezier(.3,1.2,.5,1),background .3s}
.pf-cols .mt2 em i.ov{background:#c0392b}
.pf-cols .mt2 .x2{color:#c0392b}
.pf-cols .ft{display:flex;flex-direction:column;gap:3px;margin-top:10px;padding-top:8px;border-top:1px dashed var(--line-2)}
.pf-cols .ft span{display:flex;align-items:center;gap:5px;font:500 10px var(--f-mono);color:var(--muted)}
.pf-cols .ft span i{width:12px;height:12px;border-radius:4px;display:grid;place-items:center;font:700 8px var(--f-mono);font-style:normal;background:var(--surface-2);color:var(--muted);flex-shrink:0}
.pf-cols .ft span.y i{background:#16a34a;color:#fff}.pf-cols .ft span.n i{background:#c0392b;color:#fff}
.pf-rec{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:16px 18px;border-radius:18px;background:#041E42;color:#fff;box-shadow:var(--sh)}
html[data-theme="dark"] .pf-rec{background:#0B1730;border:1px solid #23375e}
.pf-rec .ri{width:44px;height:44px;border-radius:13px;background:#FF8C1A;display:grid;place-items:center;flex-shrink:0}
.pf-rec .ri svg{width:22px;height:22px}
.pf-rec>span:nth-child(2){flex:1;min-width:200px}
.pf-rec small{display:block;font:600 10px var(--f-mono);text-transform:uppercase;letter-spacing:.1em;color:#9fb6de}
.pf-rec b{display:block;font:800 22px var(--f-disp)}
.pf-rec b.sw{animation:vrSwap .45s var(--ease-o)}
.pf-rec em{display:block;font:500 12px var(--f-body);font-style:normal;color:#B6C2DA}

/* ===================== PRICING ===================== */
.vr-bt{display:flex;align-items:center;gap:14px;flex-wrap:wrap;margin-bottom:18px}
.vr-bt .seg{min-width:280px}
.vr-bt .seg small{display:inline-block;margin-left:6px;font:700 10px var(--f-mono);color:#fff;background:#16a34a;border-radius:99px;padding:1px 7px}
.vr-bt .bn{font:500 12px var(--f-mono);color:var(--muted)}
.vr-pr{display:grid;grid-template-columns:360px 1fr;gap:22px;margin-bottom:26px;align-items:stretch}
@media(max-width:1060px){.vr-pr{grid-template-columns:1fr}}
.ez-card .ez-ms .vr-v{width:22px;height:22px}
.vr-pl{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
@media(max-width:620px){.vr-pl{grid-template-columns:1fr}}
.vr-pl .pc{position:relative;text-align:left;display:flex;flex-direction:column;gap:5px;background:var(--surface);border:1.5px solid var(--line);border-radius:18px;padding:16px 16px 14px;cursor:pointer;font:inherit;color:inherit;box-shadow:var(--sh-s);transition:border-color .25s,box-shadow .3s,background .25s;opacity:0;transform:translateY(16px)}
.vr-pl.in .pc{animation:vrPlIn .7s cubic-bezier(.3,1.4,.5,1) forwards;animation-delay:calc(var(--k)*110ms)}
@keyframes vrPlIn{to{opacity:1;transform:none}}
.vr-pl .pc:hover{border-color:var(--line-2)}
.vr-pl .pc.on{border-color:#1565D8;background:var(--chip);box-shadow:0 0 0 3px rgba(21,101,216,.12),var(--sh)}
.vr-pl .pc .fl{position:absolute;top:-1px;right:14px;font:700 9px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#fff;background:#FF8C1A;border-radius:0 0 7px 7px;padding:3px 8px}
.vr-pl .pc .pn{display:flex;align-items:center;gap:9px}
.vr-pl .pc .pn i{width:32px;height:32px;border-radius:10px;background:#1565D8;color:#fff;display:grid;place-items:center;flex-shrink:0}
.vr-pl .pc .pn i svg{width:16px;height:16px}
.vr-pl .pc.k1 .pn i{background:#FF8C1A}.vr-pl .pc.k2 .pn i{background:#0C3E8F}.vr-pl .pc.k3 .pn i{background:#16a34a}
.vr-pl .pc .pn b{font:800 16px var(--f-disp);color:var(--ink)}
.vr-pl .pc .gb{font:600 11px var(--f-mono);color:#1565D8}
html[data-theme="dark"] .vr-pl .pc .gb{color:#7fb0ff}
.vr-pl .pc .pr{font:800 24px var(--f-disp);color:var(--ink);letter-spacing:-.02em;margin-top:2px;font-variant-numeric:tabular-nums}
.vr-pl .pc .pr small{font:500 11px var(--f-mono);color:var(--muted);letter-spacing:0}
.vr-pl .pc .ob{font:500 11px var(--f-mono);color:var(--muted);min-height:1.4em}
.vr-pl .pc .ob s{color:var(--muted);opacity:.7}
.vr-pl .pc .ob b{color:#16a34a}
.vr-pl .pc ul{list-style:none;display:flex;flex-direction:column;gap:5px;margin-top:6px;padding-top:9px;border-top:1px dashed var(--line-2)}
.vr-pl .pc li{display:flex;gap:8px;align-items:flex-start;font-size:12.5px;line-height:1.4;color:var(--text)}
.vr-pl .pc li i{width:18px;height:18px;border-radius:5px;background:var(--chip);color:#1565D8;display:grid;place-items:center;flex-shrink:0}
html[data-theme="dark"] .vr-pl .pc li i{color:#7fb0ff}
.vr-pl .pc li i svg{width:10px;height:10px}
.vr-pl .pc .ck2{margin-top:auto;padding-top:8px;font:700 12.5px var(--f-disp);color:#1565D8}
html[data-theme="dark"] .vr-pl .pc .ck2{color:#7fb0ff}
.vr-pl .pc .pr.flip{animation:vrFlip .5s var(--ease-o)}
@keyframes vrFlip{0%{opacity:0;transform:rotateX(70deg)}}
/* comparison table */
.vr-ct{margin-bottom:28px}
.ct-h{display:flex;justify-content:space-between;align-items:baseline;gap:10px;flex-wrap:wrap;margin-bottom:10px}
.ct-h b{font:800 18px var(--f-disp);color:var(--ink)}
.ct-h span{font:500 12px var(--f-mono);color:var(--muted)}
#vrCtT{min-width:720px}
#vrCtT th small{display:block;font:600 9.5px var(--f-mono);text-transform:uppercase;letter-spacing:.06em;color:#F57C00}
#vrCtT td:first-child{display:flex;align-items:center;gap:9px;font-weight:600;color:var(--ink)}
#vrCtT td:first-child svg{width:15px;height:15px;color:#1565D8;flex-shrink:0}
html[data-theme="dark"] #vrCtT td:first-child svg{color:#7fb0ff}
#vrCtT td{font-size:13px}
#vrCtT tr.pr2 td{font:700 14px var(--f-disp);color:var(--ink)}
#vrCtT tr.pr2 td:first-child{font:600 13px var(--f-body)}
#vrCtT tr.gp td{font:600 10.5px var(--f-mono);text-transform:uppercase;letter-spacing:.1em;color:var(--muted);background:var(--surface-2);display:table-cell}
#vrCtT td.no{color:var(--muted)}
#vrCtT td em{display:inline-grid;place-items:center;width:22px;height:22px;border-radius:50%;background:#16a34a;color:#fff;font:700 12px/1 var(--f-body);font-style:normal;transform:scale(0) rotate(-90deg)}
.vr-ct.go #vrCtT td em{transform:none;transition:transform .5s cubic-bezier(.3,1.8,.5,1);transition-delay:calc(var(--r)*45ms + var(--c)*70ms)}
#vrCtT tbody tr{opacity:0;transform:translateX(-12px)}
.vr-ct.go #vrCtT tbody tr{opacity:1;transform:none;transition:opacity .4s calc(var(--r)*40ms),transform .55s cubic-bezier(.3,1.4,.5,1) calc(var(--r)*40ms)}
.ct-n{margin-top:10px;font:500 11.5px var(--f-mono);color:var(--muted);line-height:1.6}
/* add-on services */
.vr-as{display:grid;grid-template-columns:minmax(0,.8fr) repeat(3,minmax(0,1fr));gap:14px;margin-bottom:26px;align-items:stretch}
@media(max-width:1060px){.vr-as{grid-template-columns:1fr 1fr}}
@media(max-width:600px){.vr-as{grid-template-columns:1fr}}
.as-h{display:flex;flex-direction:column;justify-content:center}
.as-h b{font:800 22px var(--f-disp);color:var(--ink);margin:4px 0 6px}
.as-h p{font-size:13.5px;color:var(--text);line-height:1.55}
.vr-as .as{position:relative;display:flex;flex-direction:column;gap:6px;padding:18px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s);transition:box-shadow .3s,border-color .3s}
.vr-as .as:hover{box-shadow:var(--sh);border-color:var(--line-2)}
.vr-as .as.pop{border-color:#FF8C1A}
.vr-as .as .fl{position:absolute;top:-1px;right:14px;font:700 9px var(--f-mono);letter-spacing:.08em;text-transform:uppercase;color:#fff;background:#FF8C1A;border-radius:0 0 7px 7px;padding:3px 8px}
.vr-as .ai{width:40px;height:40px;border-radius:12px;background:var(--chip);color:#1565D8;display:grid;place-items:center;margin-bottom:4px}
.vr-as .ai.o{background:#fff3e0;color:#F57C00}.vr-as .ai.g{background:#e4f7ec;color:#16a34a}
html[data-theme="dark"] .vr-as .ai{background:var(--chip);color:#7fb0ff}html[data-theme="dark"] .vr-as .ai.o{color:#FFB15C}html[data-theme="dark"] .vr-as .ai.g{color:#5FE08D}
.vr-as .ai svg{width:19px;height:19px}
.vr-as .as>b{font:800 15.5px var(--f-disp);color:var(--ink)}
.vr-as .as p{font-size:13px;line-height:1.55;color:var(--text)}
.vr-as .as .pr{margin-top:auto;padding-top:8px;font:500 12px var(--f-mono);color:var(--muted)}
.vr-as .as .pr b{font:800 20px var(--f-disp);color:var(--ink)}
/* configurator */
#configure>*{min-width:0}
#configure .seg button{padding:9px 6px}
#configure .fld .lb,#configure .fld>label{display:flex;flex-wrap:wrap;justify-content:space-between;gap:2px 10px;font-weight:600;font-size:14px;color:var(--ink);margin-bottom:9px}
#configure .fld .lb small,#configure .fld>label small{font:500 12px var(--f-mono);color:#1565D8}
html[data-theme="dark"] #configure .fld .lb small,html[data-theme="dark"] #configure .fld>label small{color:#7fb0ff}
#configure .tgl{align-items:flex-start;border:1px solid var(--line);border-radius:12px;padding:12px 14px;background:var(--surface-2);transition:opacity .3s}
#configure .tgl .sw{margin-top:2px}
#configure .tgl small{display:block;font-weight:500;font-size:12px;color:var(--muted);margin-top:3px;line-height:1.45}
#configure .tgl b{color:var(--blue);font-family:var(--f-mono);font-size:13px;margin-left:4px}
html[data-theme="dark"] #configure .tgl b{color:#7fb0ff}
#configure .seg.dis{opacity:.5;pointer-events:none}
.vr-ws{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
.vr-ws .hn{font:500 12px var(--f-mono);color:var(--muted)}
.cout .crow small{display:block;font:500 10.5px var(--f-mono);color:#8F9BB6}
.cout .crow.save.off{display:none}
.vr-cb{margin:-4px 0 20px}
.cef-h{display:flex;justify-content:space-between;gap:8px;margin-bottom:10px}
.cef-h span{font-family:var(--f-mono);font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:#B6C2DA}
.cef-h em{font-style:normal;font:600 11px var(--f-mono);color:#8ff0b2}
.cb-t{display:flex;height:14px;border-radius:99px;overflow:hidden;background:rgba(255,255,255,.08)}
.cb-t i{display:block;height:100%;width:0;transition:width .8s cubic-bezier(.3,1.2,.5,1)}
.cb-l{display:flex;flex-wrap:wrap;gap:4px 12px;margin-top:8px;font:500 10.5px var(--f-mono);color:#b9c9e2}
.cb-l span{display:inline-flex;align-items:center;gap:5px}
.cb-l i{width:8px;height:8px;border-radius:2px;display:inline-block}
.vr-trb svg{width:15px;height:15px}
#oAdd.hide{display:none}
.cout.quote .ctot{font-size:30px}
@media(max-width:900px){.calc{grid-template-columns:1fr}}
@media(max-width:480px){.calc .cin,.calc .cout{padding:20px 16px}}

/* ===================== TRIAL ===================== */
.vr-tr{display:grid;grid-template-columns:minmax(0,.9fr) minmax(0,1.1fr);gap:26px;align-items:start;padding:28px;border-radius:26px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh)}
@media(max-width:920px){.vr-tr{grid-template-columns:1fr;padding:20px}}
.vr-tr h2,.vr-pt h2{font-family:var(--f-disp);font-size:clamp(24px,3vw,32px);line-height:1.2;color:var(--ink);margin:6px 0 10px;letter-spacing:-.01em}
.vr-tr h2 .acc,.vr-pt h2 .acc{color:#1565D8}
html[data-theme="dark"] .vr-tr h2 .acc,html[data-theme="dark"] .vr-pt h2 .acc{color:#7fb0ff}
.tr-l>p,.pt-l>p{font-size:15px;line-height:1.65;color:var(--text);margin-bottom:16px}
.tr-s{list-style:none;display:flex;flex-direction:column;gap:12px}
.tr-s li{display:flex;gap:12px;align-items:flex-start}
.tr-s i{width:34px;height:34px;border-radius:10px;background:var(--chip);color:#1565D8;display:grid;place-items:center;flex-shrink:0}
html[data-theme="dark"] .tr-s i{color:#7fb0ff}
.tr-s i svg{width:16px;height:16px}
.tr-s b{display:block;font:700 14px var(--f-disp);color:var(--ink)}
.tr-s span{font-size:13px;color:var(--muted);line-height:1.5}
.tr-f .fi.pre input{border-color:#FF8C1A;box-shadow:0 0 0 4px rgba(255,140,26,.14);transition:border-color 1.4s,box-shadow 1.4s}
.vr-tr.flash{animation:vrGlow 1.6s var(--ease-o)}
@keyframes vrGlow{0%{box-shadow:0 0 0 6px rgba(255,140,26,.45),var(--sh)}}

/* ===================== RESOURCES ===================== */
.vr-rs{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
@media(max-width:900px){.vr-rs{grid-template-columns:1fr 1fr}}
@media(max-width:480px){.vr-rs{grid-template-columns:1fr}}
.vr-rs .rs{display:flex;flex-direction:column;gap:6px;padding:18px;border-radius:18px;background:var(--surface);border:1px solid var(--line);box-shadow:var(--sh-s);transition:box-shadow .3s,border-color .3s}
.vr-rs .rs:hover{box-shadow:var(--sh);border-color:#1565D8}
.vr-rs .ri{width:40px;height:40px;border-radius:12px;background:var(--chip);color:#1565D8;display:grid;place-items:center;margin-bottom:6px}
.vr-rs .ri.o{background:#fff3e0;color:#F57C00}.vr-rs .ri.g{background:#e4f7ec;color:#16a34a}.vr-rs .ri.n{background:#041E42;color:#fff}
html[data-theme="dark"] .vr-rs .ri{background:var(--chip);color:#7fb0ff}html[data-theme="dark"] .vr-rs .ri.o{color:#FFB15C}html[data-theme="dark"] .vr-rs .ri.g{color:#5FE08D}html[data-theme="dark"] .vr-rs .ri.n{background:#0C3E8F;color:#fff}
.vr-rs .ri svg{width:19px;height:19px}
.vr-rs b{font:700 15px var(--f-disp);color:var(--ink)}
.vr-rs small{font:500 11px var(--f-mono);color:var(--muted)}
.vr-rn{display:flex;align-items:center;gap:8px;margin-top:14px;font:500 11.5px var(--f-mono);color:var(--muted)}
.vr-rn svg{width:13px;height:13px;flex-shrink:0}

/* ===================== PARTNERS ===================== */
.vr-pt{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr);gap:26px;align-items:start}
@media(max-width:920px){.vr-pt{grid-template-columns:1fr}}
.pt-hub{position:relative;height:220px;border-radius:20px;background:#041E42;border:1px solid rgba(127,176,255,.22);overflow:hidden;margin-bottom:14px}
html[data-theme="dark"] .pt-hub{background:#050d22}
.pt-hub>svg{position:absolute;inset:0;width:100%;height:100%}
#vrHubL path{fill:none;stroke:rgba(127,176,255,.35);stroke-width:1.4;stroke-dasharray:4 5;vector-effect:non-scaling-stroke}
#vrHubL circle{fill:#FF8C1A}
.pt-hub .hc{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:2;display:flex;flex-direction:column;align-items:center;gap:4px;padding:12px 16px;border-radius:16px;background:#1565D8;color:#fff;box-shadow:0 0 0 8px rgba(21,101,216,.2),0 18px 40px -12px rgba(0,0,0,.7)}
.pt-hub .hc svg{position:static;width:22px;height:22px}
.pt-hub .hc b{font:700 12px var(--f-disp);white-space:nowrap}
.pt-hub .ws{position:absolute;z-index:2;display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:10px;background:rgba(13,31,71,.95);border:1px solid rgba(127,176,255,.3);font:600 11px var(--f-mono);color:#cfe0ff;white-space:nowrap;transform:translate(-50%,-50%) scale(0);transition:transform .6s cubic-bezier(.3,1.7,.5,1);transition-delay:calc(var(--a)*.12s + .3s)}
.pt-hub.go .ws{transform:translate(-50%,-50%) scale(1)}
.pt-hub .ws i{width:8px;height:8px;border-radius:50%;background:#5FE08D}
.pt-w{display:flex;flex-wrap:wrap;gap:8px}
.pt-w span{display:inline-flex;align-items:center;gap:7px;font:600 12.5px var(--f-body);color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:99px;padding:6px 12px}
.pt-w svg{width:14px;height:14px;color:#1565D8}
html[data-theme="dark"] .pt-w svg{color:#7fb0ff}
.pt-f{background:var(--surface);border:1px solid var(--line);border-radius:22px;padding:22px;box-shadow:var(--sh)}

/* ===================== WHY + MARQUEE + CROSS-LINKS ===================== */
.vr-mq{margin-top:22px;display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center}
@media(max-width:700px){.vr-mq{grid-template-columns:1fr;gap:10px}}
.vr-mq .mq-l{font:600 11px var(--f-mono);letter-spacing:.1em;text-transform:uppercase;color:var(--muted);max-width:240px;line-height:1.6}
.vr-mq .mq-w{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.vr-mq .mq-m{display:flex;gap:10px;width:max-content;animation:vrMq 38s linear infinite}
.vr-mq .mq-w:hover .mq-m,.vr-mq.paused .mq-m{animation-play-state:paused}
.vr-mq .mq-m span{display:inline-flex;align-items:center;gap:7px;font:600 12.5px var(--f-body);color:var(--ink);background:var(--surface);border:1px solid var(--line);border-radius:99px;padding:7px 13px 7px 9px;white-space:nowrap}
.vr-mq .mq-m span svg{width:15px;height:15px;color:#1565D8}
html[data-theme="dark"] .vr-mq .mq-m span svg{color:#7fb0ff}
@keyframes vrMq{to{transform:translateX(-50%)}}
.vr-xs{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
@media(max-width:1000px){.vr-xs{grid-template-columns:1fr 1fr}}
@media(max-width:640px){.vr-xs{grid-template-columns:1fr}}
.vr-xs .xsib{display:flex;align-items:center;gap:14px;background:var(--surface);border:1px solid var(--line);border-radius:16px;padding:14px 16px;box-shadow:var(--sh-s);transition:transform .35s var(--ease-o),box-shadow .35s,border-color .3s}
.vr-xs .xsib:hover{transform:translateY(-4px);box-shadow:var(--sh);border-color:#1565D8}
.vr-xs .xi1 i{width:42px;height:42px;border-radius:12px;background:var(--chip);color:#1565D8;display:grid;place-items:center;transition:transform .4s var(--ease-o)}
.vr-xs .xi1.o i{background:#fff3e0;color:#F57C00}.vr-xs .xi1.g i{background:#e4f7ec;color:#16a34a}
html[data-theme="dark"] .vr-xs .xi1 i{background:var(--chip);color:#7fb0ff}html[data-theme="dark"] .vr-xs .xi1.o i{color:#FFB15C}html[data-theme="dark"] .vr-xs .xi1.g i{color:#5FE08D}
.vr-xs .xi1 svg{width:20px;height:20px}
.vr-xs .xsib:hover .xi1 i{transform:rotate(-8deg) scale(1.08)}
.vr-xs .xt{flex:1;min-width:0}
.vr-xs .xt small{display:block;font:500 10.5px var(--f-mono);color:var(--muted);text-transform:uppercase;letter-spacing:.06em}
.vr-xs .xt b{display:block;font:700 14.5px var(--f-disp);color:var(--ink)}
.vr-xs .xa{font-weight:700;font-size:12.5px;color:#1565D8;white-space:nowrap}
html[data-theme="dark"] .vr-xs .xa{color:#7fb0ff}
.vr-xs .xa .ar{display:inline-block;transition:transform .25s}
.vr-xs .xsib:hover .xa .ar{transform:translateX(4px)}

/* ===================== REDUCED MOTION ===================== */
@media(prefers-reduced-motion:reduce){
  .vrv *,.vr-sd *,.vr-kin .w,.vr-mq .mq-m,.vr-pl .pc,.vs-p,.vs-p li,.vs-src span,.vs-f,.mk,.mk *,.md-tx li,#vrCtT tbody tr,#vrCtT td em,.pt-hub .ws,.vr-tm .ti svg,.ck-is li,.ck-kw tbody tr,.pf-cols .pc2,.pf-cols .mt2 em i{animation:none!important;transition:none!important}
  .vr-kin .w,.vr-pl .pc,.vs-p,.vs-p li,.vs-src span,.vs-f,#vrCtT tbody tr,#vrCtT td em{opacity:1!important;transform:none!important}
  .pt-hub .ws{transform:translate(-50%,-50%)!important}
  .vr-sd path,.vr-tm .ti svg{stroke-dashoffset:0!important}
}

</style>

<style>
/* The Angular application supplies the navbar, footer, cart and enquiry dialogs. */
html,body{height:auto!important;min-height:0!important;overflow:hidden!important}
body{margin:0}
main{display:flow-root}
@media(min-width:901px){
 .jr-st{padding:0 0 140px;gap:20px}
 .jr-st li{min-height:clamp(240px,calc(var(--veritas-vh,8px)*32),320px);padding-block:24px}
 .jr-v{position:relative;top:0;will-change:transform}
}
.jr-rail,.jr-in{height:min(520px,calc(var(--veritas-vh,8px)*100 - 130px))}
#vrHero .lh-title{white-space:nowrap;font-size:var(--veritas-title-size,30px)!important}
#vrHero .lh-title .nm{display:inline;font-size:1em}
#vrHero .lh-ask{flex-wrap:nowrap;gap:8px;max-width:100%;overflow-x:auto;box-sizing:border-box;scrollbar-width:thin}
#vrHero .lh-ask .k{flex:0 0 auto;white-space:nowrap;letter-spacing:0;font-size:10px}
#vrHero .lh-ask .chips{flex:0 0 auto;flex-wrap:nowrap;gap:5px}
#vrHero .lh-ask a{flex:0 0 auto;white-space:nowrap;font-size:10px;padding:0 6px;gap:4px}
#vrHero .veritas-brand-below-ai{display:flex;align-items:center;flex-wrap:nowrap;gap:10px;margin-top:16px;color:#c7d5ec;font:400 13px/1.4 var(--f-body)}
#vrHero .veritas-brand-below-ai img{display:block;flex:0 0 auto;width:144px;height:36px;object-fit:cover;object-position:center;background:#fff;border-radius:4px}
</style></head>
<body data-preserve-copy>
<main id="main">
<!-- ================= HERO ================= -->
<section class="hero lh" id="vrHero" data-product="Veritas AI Visibility &amp; SEO Platform">
  <div class="hero-bg" aria-hidden="true"><div class="lh-grid"></div><div class="lh-dots"></div><span class="lh-aur a1"></span><span class="lh-aur a2"></span><div class="lh-scan"></div><canvas class="vr-bg" id="vrBg"></canvas><canvas class="lh-net"></canvas></div>
  <div class="wrap">
    <div class="hero-grid">
      <div>
        <div class="crumb" data-in="1"><a href="/" target="_top">Home</a><span class="sep">›</span><a href="/explore-marketplace" target="_top">Marketplace</a><span class="sep">›</span><span class="c">Veritas</span></div>
        <h1 class="lh-title" data-in="1"><span class="x">Xcell</span><span class="brd">Grow</span><span class="dv">|</span><span class="nm">Veritas AI Visibility &amp; SEO</span></h1>
        <p class="lh-tag" data-in="2">Rank on Google. Get named by ChatGPT.</p>
        <p class="lh-tag2" data-in="2">Veritas puts site audits, keyword research, rank tracking, local SEO and AI-answer visibility in one workspace. XcellHost sells it in rupees, switches it on for you and supports your team from Mumbai.</p>
        <div class="lh-type" data-in="3" data-words='["See why ChatGPT recommends your competitor","Find the pages Google and AI crawlers skip","Track your map rank street by street","Turn your own documents into cited articles"]'><span class="tw"></span><span class="cur"></span></div>
        <div class="lh-points" data-in="3"><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg></span>Site audit for Google &amp; AI crawlers</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></span>Keyword research &amp; rank tracking</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg></span>Prompt tracking on 4 AI engines</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></span>Local SEO · Google Business Profile</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg></span>AI writer that cites your sources</div><div><span class="tk"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></span>From ₹1,500 / month + GST</div></div>
        <div class="lh-ctas" data-in="4">
          <a href="#trial" class="btn btn-orange vr-mag" data-trial>Start free trial <span class="ar">→</span></a>
          <a href="#check" class="btn btn-gl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg> Analyze my site</a>
          <a href="#pricing" class="btn btn-gl"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.6 13.4L13.4 20.6a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/></svg> See plans</a>
        </div>
        <div class="vr-anc" data-in="4"><a href="#platform"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>Modules</a><a href="#local"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>Geogrid</a><a href="#finder"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M16 8l-2 6-6 2 2-6z"/></svg>Plan finder</a><a href="https://wa.me/918657032540" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg>WhatsApp us</a></div>
        <div class="lh-ask" data-in="5" data-q="Explain Veritas by Optivus Technologies — an AI visibility and SEO platform for Indian businesses that combines site audits for Google and AI crawlers, keyword research, rank tracking, local SEO with Google Business Profile and geogrid rank tracking, prompt tracking across ChatGPT, Perplexity, Gemini and Google AI Overviews, AEO/GEO fixes, an AI SEO writer with sources and LinkedIn publishing — and why to buy it through XcellHost (xcellhost.top) with INR GST billing, onboarding and managed AI-visibility services"><span class="k"><b>✦</b>Ask AI about Veritas</span><span class="chips"><a data-ai="chatgpt" href="#"><i></i>ChatGPT</a><a data-ai="claude" href="#"><i></i>Claude</a><a data-ai="perplexity" href="#"><i></i>Perplexity</a><a data-ai="google" href="#"><i></i>Google AI</a><a data-ai="copilot" href="#"><i></i>Copilot</a></span></div>
        <div class="veritas-brand-below-ai"><span>Powered by</span><span aria-hidden="true">|</span><span>Veritas</span></div>
      </div>
      <div class="stage" data-in="4">
        <span class="lh-orbit"></span><span class="lh-orbit o2"></span>
        <div class="lh-chip" style="top:-36px;right:-22px"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg></i><span>ChatGPT · Perplexity · Gemini · AI Overviews<small>prompt tracking on 4 engines</small></span></div>
        <div class="lh-chip c2 vr-c2"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></i><span>From ₹1,500/mo + GST<small>7-day free trial · per Veritas</small></span></div>
        <div class="lh-tilt"><div class="vrv" id="vrv" role="img" aria-label="Animated illustration with sample data, in six acts: a buyer types a search; Google lists the sample brand at position 8; an AI answer streams in and does not mention the brand; a Veritas scan sweeps the site, audit issues pop up and AI-readable fixes snap into place; the brand climbs to position 2 on Google; the AI answer streams again and now cites the brand across ChatGPT, Perplexity, Gemini and AI Overviews; a sample visibility score settles at 72.">
          <div class="vrv-h"><b><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg></i><span>XcellGrow console · Veritas</span></b><span class="vrv-live" id="vrvLive">sample · search</span></div>
          <div class="vrv-rail" id="vrvRail"><span>Search</span><span>Google</span><span>AI answer</span><span>Scan · fix</span><span>Climb</span><span>Cited</span><em class="tr"><b id="vrvFill"></b></em></div>
          <div class="vrv-sc" id="vrvSc">
            <canvas class="vrv-far" id="vrvFar"></canvas>
            <span class="vrv-spot" id="vrvSpot"></span>
            <div class="vrv-cam" id="vrvCam">
              <div class="vrv-q" id="vrvQ"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></i><span id="vrvQt"></span><em class="cu"></em></div>
              <div class="vrv-serp" id="vrvSerp"><div class="sh2"><span class="g">G</span>Google · results <em id="vrvSerpN">sample</em></div><div class="rows" id="vrvRows"></div></div>
              <div class="vrv-ai" id="vrvAi"><div class="sh2"><span class="a" id="vrvAiE">✦</span><b id="vrvAiN">AI answer · ChatGPT</b></div><p id="vrvAiT"></p><span class="vd" id="vrvAiV"><i></i><b id="vrvAiVb">Not mentioned · 0 visits</b><small>sample</small></span></div>
              <div class="vrv-site" id="vrvSite"><div class="sb"><i></i><i></i><i></i><span>yourbrand.in · scan</span><em id="vrvScanP">0%</em></div>
                <div class="wf"><span class="w1"></span><span class="w2"></span><span class="w3"></span><span class="w4"></span><span class="w5"></span><span class="w6"></span><span class="beam" id="vrvBeam"></span></div>
                <ul id="vrvIss"><li data-k="0"><span>No structured data (schema)</span><em>fix</em></li><li data-k="1"><span>Answers buried in long copy</span><em>fix</em></li><li data-k="2"><span>Missing FAQ for buyer questions</span><em>fix</em></li><li data-k="3"><span>Thin service pages</span><em>fix</em></li><li data-k="4"><span>No plain-text brand summary</span><em>fix</em></li></ul></div>
            </div>
            <canvas class="vrv-near" id="vrvNear"></canvas>
            <div class="vrv-score" id="vrvScore"><svg viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="50"/><circle class="fg" id="vrvScoreA" cx="60" cy="60" r="50" pathLength="1"/></svg><div class="v"><b id="vrvScoreV">0</b><small>AI visibility · sample</small></div><span class="ring"></span></div>
          </div>
          <div class="vrv-kp" id="vrvKp">
            <div><span>Google rank</span><b id="vrvK0">—</b><em id="vrvD0">searching</em></div>
            <div><span>AI mentions</span><b id="vrvK1">0/4</b><em id="vrvD1">engines</em></div>
            <div><span>Audit issues</span><b id="vrvK2">0</b><em id="vrvD2">not scanned</em></div>
            <div><span>Visibility</span><b id="vrvK3">0</b><em id="vrvD3">sample</em></div>
          </div>
          <div class="vrv-en" id="vrvEn"><span data-e="0"><i></i>ChatGPT</span><span data-e="1"><i></i>Perplexity</span><span data-e="2"><i></i>Gemini</span><span data-e="3"><i></i>AI Overviews</span></div>
          <div class="vrv-lg"><span class="pr" id="vrvLgP">›</span><code id="vrvLg">Buyer opens a search</code></div>
        </div></div>
      </div>
    </div>
  </div>
</section>
<div class="lh-trust"><div class="wrap"><span>From <b data-pr="st-m">₹1,500</b> / month + GST</span><span><b>7-day</b> free trial · per Veritas</span><span>Per <b>workspace</b>, not per seat</span><span><b>4 AI engines</b> tracked</span><span><b>GST</b> invoice in INR</span><span><b>Since 1999</b> · Mumbai</span></div></div>

<!-- ================= OVERVIEW: GOOGLE vs AI ================= -->
<section class="sec" id="overview">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Why it matters now</span><h2 class="vr-kin">Ranking on Google isn't enough anymore — <span class="acc">buyers ask AI first.</span></h2><p>The same question goes to Google and to an AI assistant. Google can rank you and still send a visit. The AI answer can name three of your competitors and never mention you. Veritas watches both.</p></div>
    <div class="vr-vs rv" id="vrVs">
      <div class="vs-q"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></i><span id="vrVsQ">best chartered accountant firm for startups in Pune</span><em>same question · two places</em></div>
      <div class="vs-g">
        <div class="vs-p" id="vrVsG"><div class="ph"><span class="g">G</span><b>Google search</b><em>sample</em></div><ol id="vrVsGl"></ol><div class="vs-f g"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></i><span><b>Ranked #3</b> · earns a click</span></div></div>
        <div class="vs-mid" aria-hidden="true"><span>vs</span></div>
        <div class="vs-p ai" id="vrVsA"><div class="ph"><span class="a">✦</span><b>AI assistant answer</b><em>sample</em></div><p id="vrVsAt"></p><div class="vs-src" id="vrVsS"></div><div class="vs-f r"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg></i><span><b>Not mentioned</b> · 0 visits</span></div></div>
      </div>
      <div class="vs-bt"><div><span class="vi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg></span><b>Google ranks</b><p>Keywords, positions, competitors and backlinks — tracked over time.</p></div><div><span class="vi o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg></span><b>AI mentions</b><p>Whether ChatGPT, Perplexity, Gemini and Google AI Overviews name you for the prompts buyers use.</p></div><div><span class="vi g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 10V8M11 6h2M17 6h2M3 21l12-12"/></svg></span><b>The fixes</b><p>Specific page changes that make you easier to rank and easier to quote.</p></div></div>
    </div>
    <div class="pp-cols rv">
      <p class="pp-ov"><b>Veritas</b> is an AI visibility and SEO platform built by Optivus Technologies. It audits your site the way Google and AI crawlers read it, researches and tracks keywords, monitors your Google Business Profile and map rank, and checks which brands AI assistants recommend for the prompts your buyers type — then tells you what to change and helps you write it.</p>
      <p class="pp-ov"><b>XcellHost</b> resells Veritas on xcellhost.cloud. You get a <b>GST invoice in rupees</b>, a guided setup of your workspace, Search Console and GA4, and support from our Mumbai team on phone, WhatsApp and email. If you would rather not run it yourself, we offer a managed AI-visibility service on top.</p>
    </div>
    <div class="prov-strip rv"><span class="k">Tracks visibility in</span><div class="prov"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Google Search</div><div class="prov"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>ChatGPT</div><div class="prov"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M16 8l-2 6-6 2 2-6z"/></svg>Perplexity</div><div class="prov"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .8-5.2 4.8L18 21l-6-3.5L6 21l1.2-6.9L2 9.3l7-.8z"/></svg>Gemini</div><div class="prov"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>Google AI Overviews</div></div>
  </div>
</section>

<div class="vr-sd rv" aria-hidden="true"><svg viewBox="0 0 1200 40" preserveAspectRatio="none"><path d="M0 20H520l14-12 14 24 14-24 14 12H1200" pathLength="1"/></svg><i></i></div>

<!-- ================= JOURNEY ================= -->
<section class="sec" id="journey">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">How it works</span><h2 class="vr-kin">Six steps from invisible to cited — <span class="acc">scroll through one workspace.</span></h2><p>The same 30 pages of a sample business move from an audit, to keyword research, to AI prompt tracking, to fixes, to new content and finally to a report.</p></div>
    <div class="vr-jr" id="vrJr">
      <ol class="jr-st" id="vrJrSt">
        <li data-k="0"><span class="n">01</span><small>Day one</small><b>Audit</b><p>Veritas crawls the site the way Google and AI crawlers do and flags what blocks them: broken pages, slow templates, missing structured data, thin copy and answers that are hard to lift out.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg>Page audit · full site audit</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="1"><span class="n">02</span><small>Week one</small><b>Research keywords</b><p>Find the searches worth winning by volume and difficulty, see the gaps your competitors already cover and pick the ones that match what you sell.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Keyword research · keyword gap</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="2"><span class="n">03</span><small>Every week</small><b>Track AI prompts</b><p>Add the questions buyers ask an assistant. Veritas checks ChatGPT, Perplexity, Gemini and Google AI Overviews and records who gets named — you or a competitor.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>Prompt tracking · 4 engines</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="3"><span class="n">04</span><small>Fix list</small><b>Fix pages (AEO / GEO)</b><p>Each page gets concrete changes: add structured data, put the answer first, add an FAQ, tighten headings and write a clear summary of who you are — the AI-readable fixes.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 10V8M11 6h2M17 6h2M3 21l12-12"/></svg>Answer &amp; generative engine optimisation</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="4"><span class="n">05</span><small>On a calendar</small><b>Publish content</b><p>The AI writer drafts from your own site and documents and shows the source for each claim. Drafts move through approvals and publish to WordPress in one click.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>Calendar · approvals · WordPress</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
        <li data-k="5"><span class="n">06</span><small>Monthly</small><b>Measure</b><p>Ranks, AI mentions, traffic from GA4 and Search Console and backlinks in one report — so you can see what moved and what to do next.</p><em><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>GA4 · Search Console · reports</em><canvas class="jr-mc" aria-hidden="true"></canvas></li>
      </ol>
      <div class="jr-v" id="vrJrV">
        <div class="jr-rail" id="vrJrRail" aria-hidden="true"><span class="tk"><i id="vrJrFill"></i></span><b data-k="0">Audit</b><b data-k="1">Keywords</b><b data-k="2">AI prompts</b><b data-k="3">Fix pages</b><b data-k="4">Publish</b><b data-k="5">Measure</b></div>
        <div class="jr-in" role="img" aria-label="Diagram that morphs as you scroll: thirty page tiles are scanned for issues, become keyword bubbles plotted by volume and difficulty, sort into four AI engine columns showing mentioned and not mentioned, line up as a fix checklist turning green, fill a publishing calendar and finally form a rising chart and a visibility ring. Sample data.">
          <div class="jr-hd"><span class="st" id="vrJrN">Step 1 of 6</span><b id="vrJrT">Audit</b><em>sample data</em></div>
          <canvas id="vrJrCv"></canvas>
          <div class="jr-cap" id="vrJrCap"><i id="vrJrCi"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg></i><span><b id="vrJrCb">Site audit · Google &amp; AI crawlers</b><small id="vrJrCs">30 pages crawled · 11 with issues</small></span></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= PLATFORM MODULES ================= -->
<section class="sec" id="platform">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">The platform</span><h2 class="vr-kin">SEO, AI visibility and content — <span class="acc">six modules, one login.</span></h2><p>Pick a module to see what it does. The screens are illustrations with sample data; features are as described by Veritas.</p></div>
    <div class="vr-md rv" id="vrMd">
      <div class="md-t" id="vrMdT" role="tablist" aria-label="Veritas modules">
        <button type="button" role="tab" data-m="seo" class="on"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg></i><span>SEO</span></button>
        <button type="button" role="tab" data-m="ai"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg></i><span>AI Visibility</span></button>
        <button type="button" role="tab" data-m="loc"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></i><span>Local SEO</span></button>
        <button type="button" role="tab" data-m="con"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg></i><span>Content</span></button>
        <button type="button" role="tab" data-m="li"><i><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 8.5h4V21H3zM9 8.5h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21H17.4v-5.5c0-1.3 0-3-1.85-3s-2.14 1.4-2.14 2.9V21H9z"/></svg></i><span>LinkedIn</span></button>
        <button type="button" role="tab" data-m="ads"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg></i><span>Ads add-on</span></button>
        <span class="ul" aria-hidden="true"></span>
      </div>
      <div class="md-b">
        <div class="md-tx" id="vrMdTx" aria-live="polite"></div>
        <div class="md-v" id="vrMdV">
          <!-- SEO -->
          <div class="mk on" data-m="seo">
            <div class="mk-h"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg>Site audit · yourbrand.in</span><em>sample</em></div>
            <div class="mk-seo">
              <div class="rg"><svg viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="48"/><circle class="fg" cx="60" cy="60" r="48" pathLength="1" style="--to:.78"/></svg><b data-to="78">0</b><small>health score</small></div>
              <div class="is"><span style="--w:.82;--k:0"><b>Errors</b><i></i><em>12</em></span><span style="--w:.55;--k:1"><b>Warnings</b><i class="o"></i><em>34</em></span><span style="--w:.35;--k:2"><b>AI-crawler blocks</b><i class="r"></i><em>3</em></span><span style="--w:.94;--k:3"><b>Pages OK</b><i class="g"></i><em>186</em></span></div>
              <table class="kw"><thead><tr><th>Keyword</th><th>Vol.</th><th>Rank</th></tr></thead><tbody><tr style="--k:0"><td>gst filing for startups</td><td>2.4k</td><td><b class="up">7 ↑3</b></td></tr><tr style="--k:1"><td>ca firm near me</td><td>8.1k</td><td><b class="up">12 ↑5</b></td></tr><tr style="--k:2"><td>startup company registration</td><td>5.6k</td><td><b class="dn">18 ↓1</b></td></tr><tr style="--k:3"><td>virtual cfo services</td><td>1.3k</td><td><b class="up">4 ↑2</b></td></tr></tbody></table>
              <div class="bl"><span class="lb">Backlinks · 8 weeks</span><div class="bars"><i style="--h:.4;--k:0"></i><i style="--h:.55;--k:1"></i><i style="--h:.5;--k:2"></i><i style="--h:.7;--k:3"></i><i style="--h:.62;--k:4"></i><i style="--h:.82;--k:5"></i><i style="--h:.76;--k:6"></i><i style="--h:.95;--k:7"></i></div><div class="lost"><i style="--h:.2;--k:0"></i><i style="--h:.1;--k:1"></i><i style="--h:.3;--k:2"></i><i style="--h:.15;--k:3"></i><i style="--h:.12;--k:4"></i><i style="--h:.25;--k:5"></i><i style="--h:.08;--k:6"></i><i style="--h:.14;--k:7"></i></div><span class="lg"><i></i>gained <i class="r"></i>lost</span></div>
            </div>
          </div>
          <!-- AI -->
          <div class="mk" data-m="ai">
            <div class="mk-h"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>AI prompts · 4 engines</span><em>sample</em></div>
            <div class="mk-ai">
              <div class="ph"><span></span><b data-s="GPT">ChatGPT</b><b data-s="PPX">Perplexity</b><b data-s="GEM">Gemini</b><b data-s="AIO">AI Overv.</b></div>
              <div class="pr" style="--k:0"><span>best ca firm for startups in pune</span><i class="y"></i><i class="y"></i><i class="n"></i><i class="y"></i></div>
              <div class="pr" style="--k:1"><span>who handles gst notices for smes</span><i class="n"></i><i class="y"></i><i class="n"></i><i class="n"></i></div>
              <div class="pr" style="--k:2"><span>virtual cfo for a d2c brand</span><i class="y"></i><i class="n"></i><i class="y"></i><i class="y"></i></div>
              <div class="pr" style="--k:3"><span>startup registration help mumbai</span><i class="n"></i><i class="n"></i><i class="n"></i><i class="y"></i></div>
              <div class="sv"><span class="lb">Who gets mentioned · share of answers</span>
                <div class="br" style="--w:.42;--k:0"><b>Your brand</b><i></i><em>42%</em></div><div class="br c" style="--w:.61;--k:1"><b>Competitor A</b><i></i><em>61%</em></div><div class="br c" style="--w:.28;--k:2"><b>Competitor B</b><i></i><em>28%</em></div></div>
              <div class="fx"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 10V8M11 6h2M17 6h2M3 21l12-12"/></svg>AEO fix · add an FAQ answering “fees for startup GST filing”</span></div>
            </div>
          </div>
          <!-- LOCAL -->
          <div class="mk" data-m="loc">
            <div class="mk-h"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>Local SEO · Google Business Profile</span><em>sample</em></div>
            <div class="mk-loc">
              <div class="gg" id="vrMkGg"></div>
              <div class="gb"><div class="gp"><b>Your Clinic · Andheri W</b><span class="st">★★★★☆ <em>4.6 · 212 reviews</em></span><span class="ln"><i style="--w:.9"></i></span><span class="ln"><i style="--w:.65"></i></span></div>
                <div class="rv2"><span class="rh"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .8-5.2 4.8L18 21l-6-3.5L6 21l1.2-6.9L2 9.3l7-.8z"/></svg>New review · 3★</span><p>“Waited 40 minutes past my slot.”</p><div class="rp"><b>AI-drafted reply</b><span class="ty" data-t="Sorry about the wait — we have added a second front-desk slot in the evenings. Please call us and we will put you first next time."></span></div></div></div>
            </div>
          </div>
          <!-- CONTENT -->
          <div class="mk" data-m="con">
            <div class="mk-h"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>AI SEO writer · from your sources</span><em>sample</em></div>
            <div class="mk-con">
              <div class="ed"><b class="tt">GST registration for startups: a 2026 checklist</b><p class="ty" data-t="A startup must register for GST once turnover crosses the threshold for its state[1]. Keep PAN, incorporation certificate and address proof ready[2]; our team files within three working days[3]."></p><div class="src"><span>[1] gst-guide.pdf</span><span>[2] /services/gst</span><span>[3] /about</span></div></div>
              <div class="sd"><div class="rg sm"><svg viewBox="0 0 120 120"><circle class="bg" cx="60" cy="60" r="48"/><circle class="fg" cx="60" cy="60" r="48" pathLength="1" style="--to:.86"/></svg><b data-to="86">0</b><small>content score</small></div>
                <div class="cal"><span class="lb">Calendar</span><div class="cg"><i></i><i class="p"></i><i></i><i class="a"></i><i></i><i></i><i class="p"></i><i></i><i class="a"></i><i></i><i class="d"></i><i></i><i></i><i class="p"></i></div><span class="lg2"><i class="p"></i>published <i class="a"></i>in approval <i class="d"></i>draft</span></div></div>
            </div>
          </div>
          <!-- LINKEDIN -->
          <div class="mk" data-m="li">
            <div class="mk-h"><span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 8.5h4V21H3zM9 8.5h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21H17.4v-5.5c0-1.3 0-3-1.85-3s-2.14 1.4-2.14 2.9V21H9z"/></svg>LinkedIn · company page</span><em>sample</em></div>
            <div class="mk-li">
              <div class="po"><div class="pa"><span class="av">Y</span><span><b>Your Company</b><small>Draft · brand voice: plain, expert</small></span></div><p class="ty" data-t="Most startups file their first GST return late because nobody owns it. Here is the 5-step routine we give every founder in week one ↓"></p><div class="pb2"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Best time · Tue 9:30</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>Schedule</span></div></div>
              <div class="hm"><span class="lb">Best times to post</span><div class="hg" id="vrMkHm"></div><span class="lg2">Mon → Sun · 8 am → 8 pm</span></div>
              <div class="an"><span class="lb">Impressions · 6 weeks</span><svg viewBox="0 0 200 60" preserveAspectRatio="none"><path class="ar2" d="M0 52 L33 46 L66 48 L100 34 L133 30 L166 18 L200 10 L200 60 L0 60Z"/><path class="ln2" d="M0 52 L33 46 L66 48 L100 34 L133 30 L166 18 L200 10" pathLength="1"/></svg></div>
            </div>
          </div>
          <!-- ADS -->
          <div class="mk" data-m="ads">
            <div class="mk-h"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L3 14h8l-1 8 10-12h-8z"/></svg>Muse · ads assistant (add-on)</span><em>sample</em></div>
            <div class="mk-ads">
              <div class="ad"><div class="im"><i class="s1"></i><i class="s2"></i><i class="s3"></i><span>AI image</span></div><div class="hl"><b class="ty" data-t="GST filing for startups — done in 3 days"></b><small>Fixed fee · CA-led · Pune &amp; Mumbai</small></div><div class="vv"><span class="on">Variant A</span><span>Variant B</span><span>Variant C</span></div></div>
              <div class="pub"><span class="lb">Publish to</span><span class="ch2 m"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8c0-1 .3-1.7 1.8-1.7H17V2.9c-.9-.1-1.7-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5V10H7v4h3v8z"/></svg>Meta Ads</span><span class="ch2 g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Google Ads</span></div>
              <div class="mt"><div><span>Spend</span><b data-to="18400" data-pre="₹">0</b></div><div><span>Clicks</span><b data-to="1260">0</b></div><div><span>Cost / result</span><b data-to="146" data-pre="₹">0</b></div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ================= CHECK TOOL ================= -->
<section class="sec" id="check">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Analyze my site · demo</span><h2 class="vr-kin">Enter your site and three competitors — <span class="acc">watch a visibility scan play out.</span></h2><p>This demo shows the kind of report Veritas builds. The numbers are generated for illustration from what you type; the real analysis runs inside Veritas once your trial is switched on.</p></div>
    <div class="vr-ck rv" id="vrCk">
      <form class="ck-in" id="vrCkF" novalidate>
        <div class="fld"><label for="ckD">Your website</label><div class="ck-dm"><span>https://</span><input id="ckD" value="yourbrand.in" autocomplete="off" spellcheck="false" aria-describedby="ckDe"></div><small class="ck-e" id="ckDe">Enter a domain like yourbrand.in</small></div>
        <div class="fld"><span class="lb">Three competitors</span><div class="ck-c"><input id="ckC1" value="Competitor A" aria-label="Competitor 1"><input id="ckC2" value="Competitor B" aria-label="Competitor 2"><input id="ckC3" value="Competitor C" aria-label="Competitor 3"></div></div>
        <div class="fld"><label for="ckP">A question your buyers ask an AI assistant</label><input id="ckP" value="best ca firm for startups in pune" autocomplete="off"><div class="ck-s" id="ckS"><button type="button">best ca firm for startups in pune</button><button type="button">dentist near andheri open sunday</button><button type="button">top d2c skincare brand for oily skin</button><button type="button">cloud backup provider india</button></div></div>
        <button type="submit" class="btn btn-orange btn-block vr-mag" id="ckGo"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg> Run demo analysis</button>
        <p class="ck-n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.3 3.9L1.8 18a2 2 0 001.7 3h17a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0zM12 9v4M12 17h.01"/></svg><span><b>Demo — illustrative results; real analysis inside Veritas.</b> Nothing is fetched from your site here.</span></p>
      </form>
      <div class="ck-out" id="vrCkO" aria-live="polite">
        <div class="ck-hd"><span class="st" id="ckSt"><i></i>Ready</span><b id="ckDm">yourbrand.in</b><em>demo · illustrative</em></div>
        <div class="ck-cr"><div class="cr-h"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg>Crawl</span><em id="ckCrN">0 / 0 pages</em></div><div class="cr-b"><i id="ckCrB"></i></div><div class="cr-p" id="ckCrP"></div></div>
        <div class="ck-g">
          <div class="ck-is"><span class="lb">Issues found</span><div class="ir"><span class="e"><b id="ckI0">0</b>errors</span><span class="w"><b id="ckI1">0</b>warnings</span><span class="a"><b id="ckI2">0</b>AI-readability</span></div><ul id="ckIl"></ul></div>
          <div class="ck-dn"><span class="lb">AI share of voice · 4 engines</span><div class="dn-w"><svg viewBox="0 0 140 140" id="ckDn"><circle class="bg" cx="70" cy="70" r="52"/></svg><div class="dn-c"><b id="ckSv">0%</b><small>your share</small></div></div><div class="dn-l" id="ckDl"></div><div class="dn-e" id="ckDe2"></div></div>
        </div>
        <div class="ck-kw"><span class="lb">Keyword opportunities</span><table><thead><tr><th>Keyword</th><th>Volume</th><th>Difficulty</th><th>Gap</th></tr></thead><tbody id="ckKw"><tr class="ph"><td colspan="4">Run the demo to see opportunities.</td></tr></tbody></table></div>
        <div class="ck-cta" id="ckCta"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zM12 8s2-5 4.5-3.5S15 8 12 8z"/></svg><b>Want the real report?</b> Start a 7-day trial — XcellHost switches on your workspace with these details.</span><a href="#trial" class="btn btn-orange btn-sm vr-mag" id="ckTr">Start free trial →</a></div>
      </div>
    </div>
  </div>
</section>

<div class="vr-sd rv" aria-hidden="true"><svg viewBox="0 0 1200 40" preserveAspectRatio="none"><path d="M0 20H520l14-12 14 24 14-24 14 12H1200" pathLength="1"/></svg><i></i></div>

<!-- ================= SHARE OF VOICE RACE ================= -->
<section class="sec" id="sov">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">AI share of voice</span><h2 class="vr-kin">Who AI assistants recommend, week by week — <span class="acc">and the moment you overtake.</span></h2><p>A sample race of brand mentions across tracked prompts. Pick an engine to replay it. In Veritas this comes from your own prompts and competitors.</p></div>
    <div class="vr-sv rv" id="vrSv">
      <div class="sv-h"><div class="sv-t" id="vrSvT" role="tablist" aria-label="Engine"><button type="button" data-e="all" class="on">All engines</button><button type="button" data-e="0">ChatGPT</button><button type="button" data-e="1">Perplexity</button><button type="button" data-e="2">Gemini</button><button type="button" data-e="3">AI Overviews</button><span class="ul" aria-hidden="true"></span></div><button type="button" class="sv-r" id="vrSvR"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg> Replay</button></div>
      <div class="sv-b">
        <div class="sv-race" id="vrSvRc"></div>
        <div class="sv-side"><span class="wk"><small>Week</small><b id="vrSvW">1</b><em>of 12</em></span><div class="sv-tr"><span class="lb">Your share · trend</span><svg viewBox="0 0 200 70" preserveAspectRatio="none" id="vrSvSp"><path class="ar2" id="vrSvSa"/><path class="ln2" id="vrSvSl"/></svg></div><p class="sv-ev" id="vrSvE">Tracking 40 buyer prompts · sample</p></div>
      </div>
      <p class="sv-n">Sample data · illustrative. Starts after an audit and the first round of AEO fixes; real results depend on your market and content.</p>
    </div>
  </div>
</section>

<!-- ================= LOCAL GEOGRID ================= -->
<section class="sec" id="local">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Local SEO · geogrid</span><h2 class="vr-kin">Your map rank, street by street — <span class="acc">not just from your own front door.</span></h2><p>A geogrid checks your Google Maps position from many points around your location. Below is a stylised Mumbai grid with sample ranks — switch keyword or flip before / after.</p></div>
    <div class="vr-gg rv" id="vrGg">
      <div class="gg-m"><svg id="vrGgS" viewBox="0 0 520 440" role="img" aria-label="Stylised map of Mumbai's western suburbs with a 7 by 7 grid of rank pins around a business in Andheri. Sample ranks."></svg><span class="gg-tag">Stylised map · sample ranks</span></div>
      <div class="gg-p">
        <div class="fld"><span class="lb">Keyword</span><div class="seg" id="vrGgK"><button data-v="0" class="on">dentist near me</button><button data-v="1">ca firm</button><button data-v="2">interior designer</button></div></div>
        <div class="fld"><span class="lb">View</span><div class="seg" id="vrGgV"><button data-v="b">Before</button><button data-v="a" class="on">After 90 days</button></div></div>
        <div class="gg-st"><div><span>Avg. rank</span><b id="vrGgA">0</b></div><div><span>Top-3 pins</span><b id="vrGgT">0</b></div><div><span>Not in top 20</span><b id="vrGgN">0</b></div></div>
        <div class="gg-lg"><span><i class="g"></i>1–3</span><span><i class="y"></i>4–10</span><span><i class="o"></i>11–20</span><span><i class="r"></i>20+</span></div>
        <ul class="gg-w"><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>Google Business Profile management &amp; listing tracking</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .8-5.2 4.8L18 21l-6-3.5L6 21l1.2-6.9L2 9.3l7-.8z"/></svg>Review analysis with AI-drafted replies</li><li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>Geogrid rank tracking from Growth upward</li></ul>
      </div>
    </div>
  </div>
</section>

<!-- ================= TEAMS ================= -->
<section class="sec" id="teams">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Who it's for</span><h2>Built for every team that needs to be found — <span class="acc">from one clinic to fifty clients.</span></h2><p>Each brand or client lives in its own workspace. Pricing is per workspace, so adding a colleague does not add a seat fee.</p></div>
    <div class="vr-tm">
      <article class="tm rv vr-tl"><span class="ti"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg></span><h3>Agencies</h3><p>One login, a separate workspace per client, white-glove reports. Add AI visibility to the SEO retainers you already sell.</p><span class="ex">Digital agencies · web studios · SEO consultants</span></article>
      <article class="tm rv vr-tl" data-d="1"><span class="ti o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg></span><h3>SaaS &amp; IT services</h3><p>Win the comparison and shortlist prompts buyers ask before a demo — “best HRMS for 200 staff”, “Tally alternatives”.</p><span class="ex">Software products · IT services · cloud partners</span></article>
      <article class="tm rv vr-tl" data-d="2"><span class="ti g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg></span><h3>Ecommerce &amp; D2C</h3><p>Cover every category on Google and in AI answers, and spot when a marketplace listing outranks your own store.</p><span class="ex">D2C skincare, apparel, food and home brands</span></article>
      <article class="tm rv vr-tl"><span class="ti n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg></span><h3>Local &amp; multi-location</h3><p>Map rank around each branch, reviews answered quickly, listings kept consistent across locations.</p><span class="ex">Clinics · dental chains · restaurants · coaching centres</span></article>
      <article class="tm rv vr-tl" data-d="1"><span class="ti"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="1"/><path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01M9 15h.01M15 15h.01M10 21v-3h4v3"/></svg></span><h3>B2B &amp; professional firms</h3><p>Buyers research on Google, ChatGPT and LinkedIn before they call. Be present in all three.</p><span class="ex">CA firms · law firms · manufacturers · real estate</span></article>
      <article class="tm rv vr-tl" data-d="2"><span class="ti o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5M3 17.5l9 5 9-5"/></svg></span><h3>Enterprise &amp; groups</h3><p>Many brands and sites, each in its own workspace, with Marketing Plus onboarding, SLA support and a dedicated success manager.</p><span class="ex">Group companies · franchise networks · listed firms</span></article>
    </div>
  </div>
</section>

<!-- ================= PLAN FINDER ================= -->
<section class="sec" id="finder">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Plan finder</span><h2 class="vr-kin">Tell us what you track — <span class="acc">we'll point to the smallest plan that fits.</span></h2><p>Move the sliders. Each plan's meters fill against its limits; the first plan that covers everything lifts out.</p></div>
    <div class="vr-pf rv" id="vrPf">
      <div class="pf-in">
        <div class="fld"><label for="pfK">Keywords per domain <small id="pfKl">120</small></label><input class="rng" type="range" id="pfK" min="10" max="1000" step="10" value="120"></div>
        <div class="fld"><label for="pfC">Competitors <small id="pfCl">5</small></label><input class="rng" type="range" id="pfC" min="1" max="30" step="1" value="5"></div>
        <div class="fld"><label for="pfP">AI visibility prompts <small id="pfPl">8</small></label><input class="rng" type="range" id="pfP" min="1" max="100" step="1" value="8"></div>
        <div class="fld"><label for="pfW">Connected websites <small id="pfWl">1</small></label><input class="rng" type="range" id="pfW" min="1" max="6" step="1" value="1"></div>
        <div class="fld"><label for="pfU">Team members <small id="pfUl">2</small></label><input class="rng" type="range" id="pfU" min="1" max="10" step="1" value="2"></div>
        <div class="fld"><span class="lb">Also need</span><div class="pf-n"><label class="tgl" for="pfL"><input type="checkbox" id="pfL"><span class="sw"></span><span>Local SEO &amp; geogrid</span></label><label class="tgl" for="pfLi"><input type="checkbox" id="pfLi"><span class="sw"></span><span>LinkedIn page management</span></label><label class="tgl" for="pfB"><input type="checkbox" id="pfB"><span class="sw"></span><span>Backlink &amp; brand-mention monitoring</span></label></div></div>
      </div>
      <div class="pf-out">
        <div class="pf-cols" id="vrPfC"></div>
        <div class="pf-rec" id="vrPfR" aria-live="polite"><span class="ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg></span><span><small>Recommended</small><b id="vrPfN">Growth</b><em id="vrPfW">covers 120 keywords, 5 competitors and 8 prompts</em></span><button type="button" class="btn btn-orange btn-sm vr-mag" id="vrPfGo">Load in configurator →</button></div>
      </div>
    </div>
  </div>
</section>

<!-- ================= PRICING ================= -->
<section class="sec" id="pricing">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Plans &amp; pricing</span><h2>Per workspace, not per seat — <span class="acc">Veritas list prices, billed by XcellHost in rupees.</span></h2><p>Every plan includes one SEO domain and AI visibility on four engines. Annual billing saves 20%. Prices exclude 18% GST.</p></div>
    <div class="vr-bt rv"><div class="seg" id="vrBill"><button data-v="m">Monthly</button><button data-v="a" class="on">Annual <small>save 20%</small></button></div><span class="bn">Annual is charged once for 12 months; shown here per month.</span></div>
    <div class="pr-top vr-pr">
      <div class="ez-card rv" id="pcard"><span class="ez-off">7-day trial</span>
        <div class="ez-top"><span class="ez-ms"><span class="vr-v">V</span>Veritas</span><a class="ez-ext" href="#configure" aria-label="Configure"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg></a></div>
        <div class="ez-fam">XcellGrow · Veritas AI Visibility &amp; SEO</div>
        <h3 id="pcName">Growth</h3>
        <div class="ez-sku" id="pcSku">local SEO &amp; AI search for small teams · per workspace</div>
        <div class="ez-row"><span>Users</span><b class="ez-from" id="pcUs">up to 3</b></div>
        <div class="ez-row"><span>Starting from</span><b class="ez-from" id="pcFrom">₹1,200 / month</b></div>
        <div class="ez-gst">Veritas list price · excl. GST</div>
        <div class="ez-pr"><span class="ez-tag m" id="pcBl">Annual</span><span><span class="ez-amt" id="pcM">₹0</span> <small style="color:#9fb6de">/ month</small></span></div>
        <div class="ez-pr"><span class="ez-tag y">Per year</span><span><span class="ez-amt" id="pcY">₹0</span> <small style="color:#9fb6de">/ year</small></span></div>
        <div class="ez-save"><span id="pcSvL">Annual saving</span><b id="pcPill">₹0</b></div>
        <div class="ez-cta"><a href="tel:+912267111555"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg>Call now</a><a class="q" href="#" data-open="xhCallback" data-topic="Veritas — quotation"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>Get quotation</a></div>
        <a href="#trial" class="ez-buy" style="display:block;text-align:center" data-trial>Start 7-day free trial →</a>
        <div class="ez-gst" style="text-align:center;margin:10px 0 0">Veritas list prices · XcellHost GST invoice · excl. 18% GST</div>
      </div>
      <div class="vr-pl" id="vrPl" role="radiogroup" aria-label="Plan"></div>
    </div>

    <div class="vr-ct rv" id="vrCt">
      <div class="ct-h"><b>Compare every limit</b><span>Tick = included · Veritas list limits</span></div>
      <div class="tbl-w"><table class="tbl" id="vrCtT">
        <thead><tr><th></th><th>Starter</th><th class="hl">Growth<small>recommended</small></th><th>Business</th><th>Marketing Plus</th></tr></thead>
        <tbody>
          <tr class="pr2"><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>Monthly billing</td><td data-pr="st-m">₹1,500</td><td class="hl" data-pr="gr-m">₹7,500</td><td data-pr="bu-m">₹12,000</td><td>Custom</td></tr>
          <tr class="pr2"><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>Annual (per month)</td><td data-pr="st-a">₹1,200</td><td class="hl" data-pr="gr-a">₹6,000</td><td data-pr="bu-a">₹9,600</td><td>Custom</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Keywords per domain</td><td>50</td><td class="hl">150</td><td>500</td><td>Unlimited</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>Competitors</td><td>3</td><td class="hl">10</td><td>20</td><td>Unlimited</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>AI visibility prompts</td><td>5</td><td class="hl">10</td><td>25</td><td>100</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>Content conversations / month</td><td>10</td><td class="hl">100</td><td>250</td><td>Unlimited</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 10V8M11 6h2M17 6h2M3 21l12-12"/></svg>AI images / month</td><td>5</td><td class="hl">25</td><td>50</td><td>250</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>Version history</td><td>30 days</td><td class="hl">90 days</td><td>365 days</td><td>Unlimited</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>Users</td><td>1</td><td class="hl">up to 3</td><td>up to 5</td><td>Custom</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>SEO domains</td><td>1</td><td class="hl">1</td><td>1</td><td>3</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>Connected websites</td><td>1</td><td class="hl">1</td><td>3</td><td>Unlimited</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 8.5h4V21H3zM9 8.5h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21H17.4v-5.5c0-1.3 0-3-1.85-3s-2.14 1.4-2.14 2.9V21H9z"/></svg>LinkedIn pages</td><td class="no">—</td><td class="hl no">—</td><td>1</td><td>3</td></tr>
          <tr class="gp"><td colspan="5">Features</td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg>Page &amp; full site audit</td><td><em>✓</em></td><td class="hl"><em>✓</em></td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Keyword research, content ideas, keyword gap</td><td><em>✓</em></td><td class="hl"><em>✓</em></td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>GA4 &amp; Search Console</td><td><em>✓</em></td><td class="hl"><em>✓</em></td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V9M7 14l5-5 5 5M4 3h16"/></svg>One-click WordPress publishing</td><td><em>✓</em></td><td class="hl"><em>✓</em></td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>AI visibility on 4 engines</td><td><em>✓</em></td><td class="hl"><em>✓</em></td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>Local SEO · Google Business Profile</td><td class="no">—</td><td class="hl"><em>✓</em></td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg>Listing tracking</td><td class="no">—</td><td class="hl"><em>✓</em></td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .8-5.2 4.8L18 21l-6-3.5L6 21l1.2-6.9L2 9.3l7-.8z"/></svg>Review analysis &amp; AI replies</td><td class="no">—</td><td class="hl"><em>✓</em></td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>Geogrid rank tracking</td><td class="no">—</td><td class="hl"><em>✓</em></td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>Reports</td><td class="no">—</td><td class="hl"><em>✓</em></td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>Backlink monitoring &amp; gap</td><td class="no">—</td><td class="hl no">—</td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a2.6 2.6 0 00-1.8-1.8C18.5 6 12 6 12 6s-6.5 0-8.2.4A2.6 2.6 0 002 8.2 27 27 0 002 12a27 27 0 00.4 3.8 2.6 2.6 0 001.8 1.8C5.5 18 12 18 12 18s6.5 0 8.2-.4a2.6 2.6 0 001.8-1.8A27 27 0 0022 12a27 27 0 00-.4-3.8zM10 15V9l5 3z"/></svg>Brand mentions incl. YouTube &amp; Reddit</td><td class="no">—</td><td class="hl no">—</td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 8.5h4V21H3zM9 8.5h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21H17.4v-5.5c0-1.3 0-3-1.85-3s-2.14 1.4-2.14 2.9V21H9z"/></svg>LinkedIn management</td><td class="no">—</td><td class="hl no">—</td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>Publish to up to 3 sites</td><td class="no">—</td><td class="hl no">—</td><td><em>✓</em></td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="4"/><path d="M2 21a7 7 0 0114 0M16 11l2 2 4-4"/></svg>Personalised onboarding · monthly hygiene check</td><td class="no">—</td><td class="hl no">—</td><td class="no">—</td><td><em>✓</em></td></tr>
          <tr><td><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>SLA support · dedicated CSM</td><td class="no">—</td><td class="hl no">—</td><td class="no">—</td><td><em>✓</em></td></tr>
        </tbody>
      </table></div>
      <p class="ct-n">Veritas list prices and limits as published by Veritas; XcellHost raises the GST invoice. During the 7-day trial some limits are lower (for example, competitors capped at 3), per Veritas.</p>
    </div>

    <div class="vr-as rv" id="vrAs">
      <div class="as-h"><span class="eyebrow">XcellHost add-on services</span><b>Want it done for you?</b><p>Optional services from XcellHost on top of any Veritas plan. Indicative · excl. 18% GST.</p></div>
      <article class="as vr-tl"><span class="ai"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg></span><b>Veritas onboarding &amp; setup</b><p>Workspace, domain, Search Console and GA4 connected; competitors, keywords and first AI prompts loaded; a walkthrough for your team.</p><span class="pr"><b data-pr="onb">₹4,999</b> one-time</span></article>
      <article class="as vr-tl pop"><span class="fl">most hands-off</span><span class="ai o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg></span><b>Managed AI-visibility service</b><p>XcellHost runs Veritas for you: monthly audit fixes, 4 content pieces a month, prompt tracking and a monthly report call.</p><span class="pr"><b data-pr="mng">₹14,999</b> / month</span></article>
      <article class="as vr-tl"><span class="ai g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 10V8M11 6h2M17 6h2M3 21l12-12"/></svg></span><b>GEO / AEO website fix sprint</b><p>A two-week sprint on your key pages: structured data, FAQ blocks, answer-first rewrites and a plain-text brand summary.</p><span class="pr"><b data-pr="geo">₹24,999</b> one-time</span></article>
    </div>

    <div class="calc rv" id="configure">
      <div class="cin">
        <div class="fld"><span class="lb">Plan <small id="cPlL">Growth</small></span>
          <div class="seg" id="cPlan"><button data-v="st">Starter</button><button data-v="gr" class="on">Growth</button><button data-v="bu">Business</button><button data-v="mp">Marketing Plus</button></div></div>
        <div class="fld"><span class="lb">Billing <small id="cBiL">Annual · −20%</small></span>
          <div class="seg" id="cBill"><button data-v="m">Monthly</button><button data-v="a" class="on">Annual<small>−20%</small></button></div></div>
        <div class="fld"><label for="cWsN">Workspaces <small id="cWsL">1 brand / client</small></label>
          <div class="vr-ws"><div class="stp"><button type="button" data-step="-1" aria-label="Fewer workspaces">−</button><input type="number" id="cWsN" min="1" max="50" value="1" aria-label="Workspaces"><button type="button" data-step="1" aria-label="More workspaces">+</button></div><span class="hn">Agencies: one workspace per client.</span></div></div>
        <label class="tgl" for="cOnb"><input type="checkbox" id="cOnb" checked><span class="sw"></span><span>Veritas onboarding &amp; setup <b data-pr="onb">₹4,999</b> one-time / workspace<small>Domain, Search Console, GA4, competitors, keywords and first prompts loaded; team walkthrough.</small></span></label>
        <label class="tgl" for="cMng"><input type="checkbox" id="cMng"><span class="sw"></span><span>Managed AI-visibility service <b data-pr="mng">₹14,999</b> / month / workspace<small>XcellHost runs Veritas: monthly audit fixes, 4 content pieces, reporting.</small></span></label>
        <label class="tgl" for="cGeo"><input type="checkbox" id="cGeo"><span class="sw"></span><span>GEO / AEO website fix sprint <b data-pr="geo">₹24,999</b> one-time / workspace<small>Structured data, FAQ blocks, answer-first rewrites on your key pages.</small></span></label>
      </div>
      <div class="cout" aria-live="polite">
        <span class="ck">Your estimate</span>
        <div class="ctot" id="oTot">₹0</div>
        <div class="csub" id="oSub">first year, excl. GST</div>
        <div class="crows" id="oRows"></div>
        <div class="crows">
          <div class="crow"><span>Recurring per month (equivalent)</span><b id="oMo">₹0</b></div>
          <div class="crow"><span>One-time</span><b id="oOne">₹0</b></div>
          <div class="crow save" id="oSvR"><span>Annual saving vs monthly</span><b id="oSv">₹0</b></div>
          <div class="crow"><span>Due now, excl. GST</span><b id="oNow">₹0</b></div>
          <div class="crow"><span>GST (18%)</span><b id="oGst">₹0</b></div>
          <div class="crow"><span>Payable now incl. GST</span><b id="oPay">₹0</b></div>
        </div>
        <div class="cef vr-cb"><div class="cef-h"><span>Where the money goes</span><em id="oSh">—</em></div><div class="cb-t" id="oCb"></div><div class="cb-l" id="oCbL"></div></div>
        <div class="cact"><button class="btn btn-orange btn-block vr-mag" id="oAdd" type="button"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg> Add to cart</button><button class="btn btn-line btn-block" id="oQuo" data-open="xhCallback" data-topic="Veritas — quotation">Get quotation</button><a class="btn btn-line btn-block vr-trb" href="#trial" data-trial><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="4" rx="1"/><path d="M5 12v9h14v-9M12 8v13M12 8S10 3 7.5 4.5 9 8 12 8zM12 8s2-5 4.5-3.5S15 8 12 8z"/></svg> Start 7-day free trial</a></div>
        <div class="cfine" id="oFine">Veritas list prices; XcellHost GST invoice. Annual = per-month price × 12, charged upfront. XcellHost services are indicative placeholders, excl. 18% GST. Trial and billing arranged by XcellHost; terms per Veritas.</div>
      </div>
    </div>
  </div>
</section>

<!-- ================= TRIAL FORM ================= -->
<section class="sec" id="trial">
  <div class="wrap">
    <div class="vr-tr rv">
      <div class="tr-l"><span class="eyebrow">Start free trial</span><h2>Seven days on the plan you choose — <span class="acc">switched on by XcellHost.</span></h2>
        <p>Send your details and we set up your Veritas workspace, connect your domain and walk you through the first audit. Trial and billing are arranged by XcellHost; trial terms are per Veritas.</p>
        <ul class="tr-s"><li><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></i><span><b>Same or next business day</b>We confirm your workspace and trial dates.</span></li><li><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></i><span><b>GST invoice in INR</b>Nothing is charged during the trial.</span></li><li><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg></i><span><b>Cancel any time</b>Cancellation takes effect at the end of the paid period.</span></li></ul></div>
      <div class="tr-f"><form class="form" data-xhform="veritas-trial" id="vrTrF" data-done="Thanks! The XcellHost team will set up your Veritas trial and call you within one business day." novalidate>
        <div class="fi"><label for="trN">Name</label><input id="trN" name="name" required autocomplete="name"><span class="em">Please enter your name</span></div>
        <div class="fi"><label for="trE">Work email</label><input id="trE" name="email" type="email" required autocomplete="email"><span class="em">Enter a valid email</span></div>
        <div class="fi"><label for="trP">Phone / WhatsApp</label><input id="trP" name="phone" type="tel" required autocomplete="tel"><span class="em">Enter a phone number</span></div>
        <div class="fi"><label for="trD">Website</label><input id="trD" name="website" required placeholder="yourbrand.in" autocomplete="url"><span class="em">Enter your website</span></div>
        <div class="fi"><label for="trPl">Plan to trial</label><select id="trPl" name="plan"><option>Starter</option><option selected>Growth</option><option>Business</option><option>Marketing Plus (quotation)</option><option>Not sure — advise me</option></select></div>
        <div class="fi"><label for="trC">Competitors (optional)</label><input id="trC" name="competitors" placeholder="up to 3, comma separated"></div>
        <div class="fi full"><label for="trQ">A buyer question to track (optional)</label><input id="trQ" name="prompt" placeholder="e.g. best ca firm for startups in pune"></div>
        <button type="submit" class="btn btn-orange btn-block full vr-mag">Request my trial <span class="ar">→</span></button>
        <p class="fine full">By sending this you agree to be contacted by XcellHost about Veritas. No payment is taken on this page.</p>
      </form></div>
    </div>
  </div>
</section>

<!-- ================= RESOURCES ================= -->
<section class="sec" id="resources">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Resources</span><h2>Free tools and guides — <span class="acc">from the Veritas team.</span></h2><p>These links open on getveritas.io in a new tab.</p></div>
    <div class="vr-rs">
      <a class="rs rv vr-tl" href="https://www.getveritas.io/tools" target="_blank" rel="noopener"><span class="ri"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg></span><b>Free SEO &amp; AI search tools</b><small>getveritas.io/tools ↗</small></a>
      <a class="rs rv vr-tl" data-d="1" href="https://www.getveritas.io/blog" target="_blank" rel="noopener"><span class="ri o"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4.5A2.5 2.5 0 016.5 2H20v18H6.5A2.5 2.5 0 004 22.5z"/><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/></svg></span><b>Blog &amp; guides</b><small>getveritas.io/blog ↗</small></a>
      <a class="rs rv vr-tl" data-d="2" href="https://www.getveritas.io/glossary" target="_blank" rel="noopener"><span class="ri g"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/></svg></span><b>SEO &amp; AEO glossary</b><small>getveritas.io/glossary ↗</small></a>
      <a class="rs rv vr-tl" data-d="3" href="https://www.getveritas.io/videos" target="_blank" rel="noopener"><span class="ri n"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="14" height="14" rx="2"/><path d="M16 10l6-3v10l-6-3"/></svg></span><b>Product walkthrough videos</b><small>getveritas.io/videos ↗</small></a>
    </div>
    <p class="vr-rn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg><span>External resources published by Veritas (Optivus Technologies). XcellHost is not responsible for third-party content.</span></p>
  </div>
</section>

<!-- ================= PARTNERS ================= -->
<section class="sec" id="partners">
  <div class="wrap">
    <div class="vr-pt rv">
      <div class="pt-l"><span class="eyebrow">For agencies</span><h2 class="vr-kin">Your clients are asking about AI search — <span class="acc">resell Veritas with XcellHost.</span></h2>
        <p>Add AI visibility to your SEO, web or marketing retainer. One partner login covers every client workspace; XcellHost handles billing in rupees and backs you with onboarding and support.</p>
        <div class="pt-hub" id="vrHub" aria-hidden="true"><span class="hc"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg><b>Partner login</b></span><span class="ws" style="--a:0"><i></i>Client A</span><span class="ws" style="--a:1"><i></i>Client B</span><span class="ws" style="--a:2"><i></i>Client C</span><span class="ws" style="--a:3"><i></i>Client D</span><span class="ws" style="--a:4"><i></i>Client E</span><svg viewBox="0 0 400 220" preserveAspectRatio="none"><g id="vrHubL"></g></svg></div>
        <div class="pt-w"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>SEO agencies</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>Digital marketing agencies</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6l-6 6 6 6M16 6l6 6-6 6"/></svg>Website development companies</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>Growth partners &amp; consultants</span></div></div>
      <div class="pt-f"><form class="form" data-xhform="veritas-partner" data-done="Thanks! XcellHost's partner team will call you to discuss reselling Veritas." novalidate>
        <div class="fi"><label for="ptN">Name</label><input id="ptN" name="name" required autocomplete="name"><span class="em">Please enter your name</span></div>
        <div class="fi"><label for="ptA">Agency name</label><input id="ptA" name="company" required autocomplete="organization"><span class="em">Enter your agency name</span></div>
        <div class="fi"><label for="ptE">Email</label><input id="ptE" name="email" type="email" required autocomplete="email"><span class="em">Enter a valid email</span></div>
        <div class="fi"><label for="ptP">Phone</label><input id="ptP" name="phone" type="tel" required autocomplete="tel"><span class="em">Enter a phone number</span></div>
        <div class="fi"><label for="ptK">Agency type</label><select id="ptK" name="type"><option>SEO agency</option><option>Digital marketing agency</option><option>Website development</option><option>Growth partner / consultant</option></select></div>
        <div class="fi"><label for="ptC">Active clients</label><select id="ptC" name="clients"><option>1 – 5</option><option selected>6 – 20</option><option>21 – 50</option><option>50+</option></select></div>
        <button type="submit" class="btn btn-orange btn-block full vr-mag">Talk to the partner team <span class="ar">→</span></button>
      </form></div>
    </div>
  </div>
</section>

<!-- ================= WHY ================= -->
<section class="sec" id="why">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Why XcellHost</span><h2>Veritas, <span class="acc">sold and supported by XcellHost.</span></h2><p>Powered by Veritas from Optivus Technologies; billed, set up and supported by a Mumbai team that has served Indian businesses since 1999.</p></div>
    <div class="dband rv"><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg></i><span><b>Rupee billing, one invoice</b><p>Veritas subscription and XcellHost services on one GST invoice in INR.</p></span><span class="n">01</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a4 4 0 015 5L12 19a2.8 2.8 0 01-4-4z"/><path d="M5 3l3 3-2 2-3-3"/></svg></i><span><b>Set up for you</b><p>Workspace, domain, Search Console, GA4, competitors and first prompts loaded.</p></span><span class="n">02</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 10V8M11 6h2M17 6h2M3 21l12-12"/></svg></i><span><b>Fixes, not just reports</b><p>Optional GEO / AEO sprint on your key pages by our web team.</p></span><span class="n">03</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg></i><span><b>Support from Mumbai</b><p>Phone, WhatsApp and email from our 24×7 NOC &amp; SOC team; product issues escalated to Veritas.</p></span><span class="n">04</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg></i><span><b>Run it for you</b><p>Managed AI-visibility service with monthly fixes, content and a report call.</p></span><span class="n">05</span></div><div><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg></i><span><b>Certified operations</b><p>ISO 27001, 27017, 27018, 20000-1 and SOC 2 Type I &amp; II in our own operations.</p></span><span class="n">06</span></div></div>
    <div class="vr-mq rv" aria-label="What Veritas connects to">
      <span class="mq-l">Works with</span>
      <div class="mq-w"><div class="mq-m"><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>Google Analytics 4</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Google Search Console</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>Google Business Profile</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V9M7 14l5-5 5 5M4 3h16"/></svg>WordPress</span><span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 8.5h4V21H3zM9 8.5h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21H17.4v-5.5c0-1.3 0-3-1.85-3s-2.14 1.4-2.14 2.9V21H9z"/></svg>LinkedIn pages</span><span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8c0-1 .3-1.7 1.8-1.7H17V2.9c-.9-.1-1.7-.2-2.6-.2-2.6 0-4.4 1.6-4.4 4.5V10H7v4h3v8z"/></svg>Meta Ads</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>Google Ads</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>ChatGPT</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M16 8l-2 6-6 2 2-6z"/></svg>Perplexity</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .8-5.2 4.8L18 21l-6-3.5L6 21l1.2-6.9L2 9.3l7-.8z"/></svg>Gemini</span><span><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>AI Overviews</span><span><svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a2.6 2.6 0 00-1.8-1.8C18.5 6 12 6 12 6s-6.5 0-8.2.4A2.6 2.6 0 002 8.2 27 27 0 002 12a27 27 0 00.4 3.8 2.6 2.6 0 001.8 1.8C5.5 18 12 18 12 18s6.5 0 8.2-.4a2.6 2.6 0 001.8-1.8A27 27 0 0022 12a27 27 0 00-.4-3.8zM10 15V9l5 3z"/></svg>YouTube mentions</span></div></div>
    </div>
  </div>
</section>

<!-- ================= VIDEO ================= -->
<section class="sec" id="watch">
  <div class="wrap">
    <div class="lvid rv"><span class="lbl">▶ Watch it in action</span>
      <div class="fr" data-yt="s1Rxs7rWd2I" role="button" tabindex="0" aria-label="Play video"><img src="https://i.ytimg.com/vi/s1Rxs7rWd2I/hqdefault.jpg" alt="" loading="lazy" onerror="this.onerror=null;this.remove()"><span class="cap">XcellHost · marketplace</span><span class="pb"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></span></div>
    </div>
  </div>
</section>

<!-- ================= FAQ ================= -->
<section class="sec" id="faq">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">FAQ</span><h2>Questions, <span class="acc">answered.</span></h2></div>
    <div class="faq rv">
      <div class="fq open"><button aria-expanded="true">What does an AI visibility platform actually do?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>It shows whether AI assistants such as ChatGPT, Perplexity, Gemini and Google AI Overviews mention your brand when buyers ask the questions you care about — and which competitors they name instead. Veritas pairs that with classic SEO (audits, keywords, ranks, backlinks) and gives you the page changes that improve both.</p></div></div>
      <div class="fq"><button aria-expanded="false">How is Veritas different from traditional SEO suites such as Semrush or Ahrefs?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Those are established SEO research suites with deep keyword and backlink data. Veritas positions itself differently: SEO, AI-answer visibility, local SEO and content creation in one workspace, priced per workspace in rupees, with recommended actions rather than only dashboards. Many teams pick based on whether they need breadth of research data or one place to audit, fix, write and track.</p></div></div>
      <div class="fq"><button aria-expanded="false">How is it different from AI writers like Jasper or Copy.ai?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>General AI writers are built for drafting copy quickly. Veritas's writer works from your own site and documents and shows the source for each claim, and it sits next to keyword data, content scoring, approvals and publishing — so drafts are written for search and AI answers, and reviewing them is a check rather than a rewrite.</p></div></div>
      <div class="fq"><button aria-expanded="false">How does Veritas track AI visibility?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>You add the prompts your buyers ask. Veritas runs them across ChatGPT, Perplexity, Gemini and Google AI Overviews on a schedule and records whether your brand is mentioned, which competitors are, and which sources are cited. Plans include 5 to 100 tracked prompts.</p></div></div>
      <div class="fq"><button aria-expanded="false">What happens when my free trial ends?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Per Veritas, the trial lasts 7 days on the plan you choose and nothing is charged during it; Veritas normally needs a payment method (card, UPI Autopay or e-mandate via Razorpay) set up first. When you buy through XcellHost, trial and billing are arranged by XcellHost on a GST invoice; terms per Veritas. At the end you continue on any plan, or stop.</p></div></div>
      <div class="fq"><button aria-expanded="false">Can I cancel any time?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. Tell us and the cancellation takes effect at the end of the period you have paid for, so you keep access until then. Annual plans are paid upfront for 12 months.</p></div></div>
      <div class="fq"><button aria-expanded="false">Is GST charged, and can I pay in another currency?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Prices are in INR and 18% GST is added. Through XcellHost you receive a GST invoice from XcellHost Cloud Services Pvt. Ltd. For billing in another currency, ask us — we will confirm what is possible.</p></div></div>
      <div class="fq"><button aria-expanded="false">How is my data handled?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Per Veritas, data is stored in its managed cloud and each customer gets its own database and knowledge graph, rather than shared tables filtered by an ID. Ask us for Veritas's data processing terms if you need them for a vendor review.</p></div></div>
      <div class="fq"><button aria-expanded="false">Do you support agencies managing many clients?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. Each client gets a separate workspace and pricing is per workspace, not per seat. Agencies can also resell Veritas through XcellHost's partner programme — see the agency section above.</p></div></div>
      <div class="fq"><button aria-expanded="false">Do you offer enterprise plans?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Marketing Plus is the enterprise tier: unlimited websites, keywords and competitors, 3 SEO domains, 3 LinkedIn pages, 100 AI prompts, personalised onboarding, a monthly hygiene check, SLA-backed support and a dedicated customer success manager. It is priced per engagement — ask XcellHost for a quotation.</p></div></div>
      <div class="fq"><button aria-expanded="false">Why buy Veritas through XcellHost?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>You get the same Veritas plans at Veritas list prices, plus a GST invoice in rupees from an Indian company you can call, a guided setup, and optional services — managed AI visibility and a GEO / AEO fix sprint — from a team that has run websites and infrastructure for Indian businesses since 1999.</p></div></div>
      <div class="fq"><button aria-expanded="false">Who supports me — XcellHost or Veritas?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Start with XcellHost on +91 22 6711 1555, WhatsApp or support@xcellhost.cloud. We handle onboarding, billing and how-to questions and escalate product issues to the Veritas team.</p></div></div>
      <div class="fq"><button aria-expanded="false">Can XcellHost run Veritas for me?<i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg></i></button><div class="fa"><p>Yes. The managed AI-visibility service (indicative ₹14,999 per month, excl. GST) covers monthly audit fixes, four content pieces, prompt tracking and a monthly report call. You keep full access to your workspace.</p></div></div>
    </div>
  </div>
</section>

<!-- ================= CTA ================= -->
<section class="sec" id="contact">
  <div class="wrap">
    <div class="lcta rv">
      <div><h2>Find out what AI assistants say about you.</h2><p class="sub">Start a 7-day Veritas trial through XcellHost. We switch on your workspace, run the first audit with you and quote any extras in rupees.</p>
        <div class="row"><a class="btn btn-orange vr-mag" href="#trial" data-trial>Start free trial →</a><a class="btn b-w" href="tel:+912267111555"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/></svg> +91 22 6711 1555</a><a class="btn b-w" href="https://wa.me/918657032540" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.9s.7-2.1 1-2.4c.3-.3.6-.3.8-.3h.6c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .6l-.4.6-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.2 1.4 2.5 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l2 1c.3.1.5.2.5.3.1.2.1.7-.1 1.3z"/></svg> WhatsApp</a><a class="btn b-w" href="mailto:sales@xcellhost.cloud"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg> sales@xcellhost.cloud</a></div></div>
      <div class="seal"><img src="https://www.xcellhost.top/assets/images/partner-handshake.svg" alt="" loading="lazy" onerror="this.onerror=null;this.parentNode.classList.add('noimg')"><span class="sl">XCELLGROW<br>BY XCELLHOST</span></div>
    </div>
    <div class="proof rv"><span>ISO 9001 · 27001 · 27017 · 27018 · 20000-1</span><span>SOC 2 Type I &amp; II</span><span>MeitY empanelled</span><span>24×7 NOC &amp; SOC</span><span>Since 1999</span></div>
  </div>
</section>

<!-- ================= RELATED ================= -->
<section class="sec" id="family">
  <div class="wrap">
    <div class="sh rv"><span class="eyebrow">Related services</span><h2>Everything around your website — <span class="acc">from XcellHost.</span></h2></div>
    <div class="vr-xs">
      <a class="xsib rv" href="/vps-hosting" target="_top"><span class="xi1" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="7" rx="2"/><rect x="3" y="13" width="18" height="7" rx="2"/><path d="M7 7.5h.01M7 16.5h.01"/></svg></i></span><span class="xt"><small>Fast hosting</small><b>NVMe VPS Hosting</b></span><span class="xa">Explore <span class="ar">→</span></span></a>
      <a class="xsib rv" data-d="1" href="/website-security-solutions" target="_top"><span class="xi1 o" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></i></span><span class="xt"><small>TLS &amp; site seals</small><b>Website Security</b></span><span class="xa">Explore <span class="ar">→</span></span></a>
      <a class="xsib rv" data-d="2" href="/bio-link-digital-visiting-card" target="_top"><span class="xi1 g" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><path d="M14 10h5M14 14h4M5 17a3.5 3.5 0 016 0"/></svg></i></span><span class="xt"><small>Get found</small><b>Bio-link Digital Visiting Card</b></span><span class="xa">Explore <span class="ar">→</span></span></a>
      <a class="xsib rv" href="/general-compute" target="_top"><span class="xi1" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/></svg></i></span><span class="xt"><small>Cloud servers</small><b>General Compute</b></span><span class="xa">Explore <span class="ar">→</span></span></a>
      <a class="xsib rv" data-d="1" href="#check"><span class="xi1 o" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg></i></span><span class="xt"><small>Try it</small><b>Analyze my site demo</b></span><span class="xa">Open <span class="ar">→</span></span></a>
      <a class="xsib rv" data-d="2" href="#pricing"><span class="xi1 g" aria-hidden="true"><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg></i></span><span class="xt"><small>You are here</small><b>Veritas</b></span><span class="xa">Plans <span class="ar">→</span></span></a>
    </div>
  </div>
</section>

</main>
<script>
/* XcellHost v2 core runtime — exposes window.XH */
(function(){
  'use strict';
  var d=document,root=d.documentElement;
  var reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine=window.matchMedia('(pointer:fine)').matches;
  function $(s,c){return (c||d).querySelector(s);} function $$(s,c){return Array.prototype.slice.call((c||d).querySelectorAll(s));}
  function store(k,v){try{if(v===undefined){return JSON.parse(localStorage.getItem(k));}localStorage.setItem(k,JSON.stringify(v));}catch(e){return null;}}
  var XH=window.XH={reduce:reduce,fine:fine,$:$,$$:$$,store:store};
  XH.inr=function(n,dec){n=+n||0;return '₹'+n.toLocaleString('en-IN',{minimumFractionDigits:dec||0,maximumFractionDigits:dec||0});};

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

  /* Use the site's existing enquiry form for trial and partner requests. */
  d.addEventListener('submit',function(e){
    var form=e.target.closest('[data-xhform]');if(!form)return;e.preventDefault();
    if(!form.reportValidity())return;
    var plan=$('[name="plan"]',form),name=form.getAttribute('data-xhform');
    var topic=name==='veritas-trial'?'Veritas ? 7-day free trial'+(plan?' ? '+plan.value:''):'Veritas partner programme';
    d.dispatchEvent(new CustomEvent('import-callback',{detail:topic}));
  });

  /* ---------- cart ---------- */
  var CART=store('xh-cart')||[];
  var cartEl=$('#xhCart'),cnt=$('#xhCartCnt');
  function cartSave(){store('xh-cart',CART);}
  function cartRender(){
    var box=$('#xhCartItems');if(!box)return;
    if(!CART.length){box.innerHTML='<div class="empty"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1.5"/><circle cx="18" cy="21" r="1.5"/><path d="M2 3h3l2.6 13.4a1.5 1.5 0 001.5 1.1h9.5a1.5 1.5 0 001.5-1.2L22 7H6"/></svg>Your cart is empty.<br>Configure a plan to get started.</div>';}
    else box.innerHTML=CART.map(function(it,i){return '<div class="it"><div class="t"><div><b>'+it.name+'</b><small>'+(it.sub||'')+'</small></div><button class="rm" data-rm="'+i+'" aria-label="Remove"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14"/></svg></button></div><div class="bt"><span class="q"><button data-dq="'+i+'" aria-label="Decrease">−</button><span>'+it.qty+'</span><button data-iq="'+i+'" aria-label="Increase">+</button></span><span class="pz">'+XH.inr(it.price*it.qty)+'</span></div></div>';}).join('');
    var q=CART.reduce(function(a,b){return a+b.qty;},0),sub=CART.reduce(function(a,b){return a+b.price*b.qty;},0);
    if(cnt){cnt.textContent=q;cnt.classList.toggle('on',q>0);}
    $('#xhCartN').textContent=q+(q===1?' item':' items');$('#xhCartSub').textContent=XH.inr(sub);$('#xhCartGst').textContent=XH.inr(sub*.18);$('#xhCartTot').textContent=XH.inr(sub*1.18);
  }
  function bump(){if(!cnt)return;cnt.classList.remove('bump');void cnt.offsetWidth;cnt.classList.add('bump');}
  function cartOpen(o){if(!cartEl)return;cartEl.classList.toggle('open',o);cartEl.setAttribute('aria-hidden',!o);d.body.classList.toggle('lock',o||!!$('.modal.open'));}
  XH.cart={add:function(it){it.qty=it.qty||1;var ex=CART.filter(function(c){return c.key&&c.key===it.key;})[0];if(ex)ex.qty+=it.qty;else CART.push(it);cartSave();cartRender();bump();XH.toast('Added to cart — '+it.name);cartOpen(true);},open:function(){cartOpen(true);},items:function(){return CART.slice();}};
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
    res.innerHTML=hits.length?hits.map(function(x,i){return '<a href="'+x.h+'"'+(i===0?' class="hl"':'')+'><b>'+x.n+'</b><span>'+x.c+' · '+x.d+'</span></a>';}).join(''):'<div class="none">No matches for “'+si.value.replace(/</g,'&lt;')+'”. Try “cloud”, “email” or <a href="#" data-open="xhCallback" style="color:var(--blue);font-weight:600">ask an expert</a>.</div>';}
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
  resizeFaqs();addEventListener('resize',resizeFaqs);if(d.fonts&&d.fonts.ready)d.fonts.ready.then(resizeFaqs);

  /* ---------- tabs: <div data-tabs="g"><button data-tab="k">…  panels: <div data-panel="k" data-group="g"> ---------- */
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
      plan:['Which plan do I need?','It depends on team size and what you use today. Our specialists review your setup for free and recommend the right <b>'+page+'</b> plan — want me to book that?'],
      price:['Pricing & GST','All prices on this page are in INR and exclude 18% GST. Yearly billing is cheapest. Use the calculator on the page to see your exact total, or ask us for volume pricing above 300 seats.'],
      demo:['Book a demo','Great — I\'ve opened the demo form. Pick a time and a specialist will call you within one business hour.']
    };
    function say(t,me){var m=d.createElement('div');m.className='msg'+(me?' me':'');m.innerHTML=t;msgs.appendChild(m);msgs.scrollTop=msgs.scrollHeight;}
    $('#xhBotQr').addEventListener('click',function(e){var b=e.target.closest('button[data-q]');if(!b)return;var r=R[b.getAttribute('data-q')];
      say(r[0],true);setTimeout(function(){say(r[1]);if(b.getAttribute('data-q')==='demo'){setTimeout(function(){botOpen(false);XH.open('xhCallback',{topic:'Book a demo'});},700);}},420);});
    d.addEventListener('keydown',function(e){if(e.key==='Escape')botOpen(false);});
  }
})();

</script>
<script>
(function(){
 var XH=window.XH,host=window.parent;
 XH.open=function(id,options){if(id==='xhCallback')document.dispatchEvent(new CustomEvent('import-callback',{detail:options&&options.topic||'Veritas enquiry'}));};
 XH.cart.add=function(item){document.dispatchEvent(new CustomEvent('import-cart',{detail:item}));};
 function viewport(){document.documentElement.style.setProperty('--veritas-vh',(host.innerHeight/100)+'px');window.dispatchEvent(new Event('resize'));}
 function scroll(){window.dispatchEvent(new Event('scroll'));}
 host.addEventListener('scroll',scroll,{passive:true});host.addEventListener('resize',viewport);
 window.addEventListener('unload',function(){host.removeEventListener('scroll',scroll);host.removeEventListener('resize',viewport);});
 viewport();
})();</script>
<script>
(function(){
  'use strict';
  var XH=window.XH,$=XH.$,$$=XH.$$,R=XH.reduce,FINE=XH.fine,d=document;
  var DPR=Math.min(2,window.devicePixelRatio||1),TAU=Math.PI*2;
  function $id(i){return d.getElementById(i);}
  function setT(id,t){var e=typeof id==='string'?$id(id):id;if(e&&e.textContent!==t)e.textContent=t;}
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function fmt(n){return Math.round(n).toLocaleString('en-IN');}
  function eio(t){return t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2;}
  function eo(t){return 1-Math.pow(1-t,3);}
  function spring(u){return u>1.4?1:1-Math.exp(-7*u)*Math.cos(8*u);}
  function mix(a,b,t){return [a[0]+(b[0]-a[0])*t,a[1]+(b[1]-a[1])*t,a[2]+(b[2]-a[2])*t];}
  function rgba(c,a){return 'rgba('+(c[0]|0)+','+(c[1]|0)+','+(c[2]|0)+','+(+a).toFixed(3)+')';}
  function rng(seed){var s=seed%233280;if(s<0)s+=233280;return function(){s=(s*9301+49297)%233280;return s/233280;};}
  function hash(str){var h=7;for(var i=0;i<str.length;i++)h=(h*31+str.charCodeAt(i))%1000003;return h;}
  function rr(c,x,y,w,h,r){r=Math.max(0,Math.min(r,w/2,h/2));c.beginPath();c.moveTo(x+r,y);c.arcTo(x+w,y,x+w,y+h,r);c.arcTo(x+w,y+h,x,y+h,r);c.arcTo(x,y+h,x,y,r);c.arcTo(x,y,x+w,y,r);c.closePath();}
  function esc(s){return String(s).replace(/[&<>"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c];});}
  function restart(el,cls){if(R||!el)return;el.classList.remove(cls);void el.offsetWidth;el.classList.add(cls);}
  function bump(el){if(!el||R)return;el.classList.remove('bump');void el.offsetWidth;el.classList.add('bump');}

  /* ---------------------------------------------------------
     Prices (INR, excl. 18% GST) — single source of truth
     Veritas list prices (per month); XcellHost services are indicative placeholders
     --------------------------------------------------------- */
  var P={'st-m':1500,'st-a':1200,'gr-m':7500,'gr-a':6000,'bu-m':12000,'bu-a':9600,onb:4999,mng:14999,geo:24999};
  $$('[data-pr]').forEach(function(e){var k=e.getAttribute('data-pr');if(P[k])e.textContent=XH.inr(P[k]);});
  var PLANS={
    st:{n:'Starter',k:'st',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>',u:'1 user',s:'content & on-page SEO for one person',kw:50,cp:3,pr:5,ws:1,us:1,loc:0,li:0,bl:0,f:['Page & full site audit','Keyword research & keyword gap','GA4, Search Console, WordPress','AI visibility on 4 engines']},
    gr:{n:'Growth',k:'gr',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>',u:'up to 3 users',s:'local SEO & AI search for small teams',kw:150,cp:10,pr:10,ws:1,us:3,loc:1,li:0,bl:0,f:['Everything in Starter','Google Business Profile & listings','Reviews with AI-drafted replies','Geogrid rank tracking & reports'],rec:1},
    bu:{n:'Business',k:'bu',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>',u:'up to 5 users',s:'off-page SEO & LinkedIn',kw:500,cp:20,pr:25,ws:3,us:5,loc:1,li:1,bl:1,f:['Everything in Growth','Backlink monitoring & gap','Brand mentions incl. YouTube & Reddit','LinkedIn page · publish to 3 sites']},
    mp:{n:'Marketing Plus',k:'mp',ic:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15v-3a8 8 0 0116 0v3"/><rect x="2" y="14" width="5" height="7" rx="2"/><rect x="17" y="14" width="5" height="7" rx="2"/></svg>',u:'custom',s:'enterprise · white-glove deployment',kw:1e9,cp:1e9,pr:100,ws:1e9,us:1e9,loc:1,li:1,bl:1,f:['Unlimited sites, keywords, competitors','3 SEO domains · 3 LinkedIn pages','Personalised onboarding · hygiene check','SLA support · dedicated CSM']}
  };
  var PK=['st','gr','bu','mp'];

  /* =========================================================
     Shared ticker — one requestAnimationFrame for every loop
     ========================================================= */
  var subs=[],raf=0,last=0;
  function frame(t){raf=0;var dt=last?Math.min(48,t-last):16;last=t;var any=false;
    for(var i=0;i<subs.length;i++){var s=subs[i];if(s.on){any=true;s.fn(t,dt);}}
    if(any)raf=requestAnimationFrame(frame);else last=0;}
  function kick(){if(!raf)raf=requestAnimationFrame(frame);}
  function loop(fn){var s={fn:fn,on:false};subs.push(s);return function(v){s.on=!!v;if(v)kick();};}
  function glowSprite(rgb,size){var c=d.createElement('canvas');c.width=c.height=size;var x=c.getContext('2d'),g=x.createRadialGradient(size/2,size/2,0,size/2,size/2,size/2);
    g.addColorStop(0,'rgba('+rgb+',1)');g.addColorStop(.28,'rgba('+rgb+',.5)');g.addColorStop(1,'rgba('+rgb+',0)');x.fillStyle=g;x.fillRect(0,0,size,size);return c;}
  var tweens={},twOn=loop(function(t,dt){var any=false;for(var k in tweens){var o=tweens[k];o.p=Math.min(1,o.p+dt/(o.ms||650));var v=o.a+(o.b-o.a)*eo(o.p);o.el.textContent=o.f(v);if(o.p<1)any=true;else delete tweens[k];}if(!any)twOn(false);});
  var twId=0;
  function tween(el,to,f,ms){if(!el)return;if(!el._tw)el._tw='t'+(twId++);var from=el._v===undefined?0:el._v;el._v=to;if(R||from===to){el.textContent=f(to);delete tweens[el._tw];return;}tweens[el._tw]={el:el,a:from,b:to,p:0,f:f,ms:ms};twOn(true);}
  function onView(el,fn){if(!el)return function(){};var on=loop(fn);XH.whenVisible(el,function(v){on(v&&!R);});return on;}

  var hero=$id('vrHero');
  var GRN=[95,224,141],BLU=[127,176,255],AMB=[255,177,92],RED=[255,90,74],SKY=[127,176,255],ORA=[255,150,50],VIO=[160,124,255],NEU=[90,112,160];

  /* =========================================================
     1. Hero background — query constellation on three depth planes
     ========================================================= */
  (function(){
    var cv=$id('vrBg');if(!cv||!hero)return;
    var cx=cv.getContext('2d'),W=0,H=0,ND=[],ED=[],LAY=[],PX=0,PY=0,PXT=0,PYT=0,spO=glowSprite('255,160,60',24),spB=glowSprite('130,185,255',24),spG=glowSprite('110,230,150',24),STAR=null;
    function FX(x){var u=clamp(x/W/.42,0,1);return .08+.92*u*u*(3-2*u);}
    function star(){var c=d.createElement('canvas');c.width=c.height=24;var x=c.getContext('2d');x.translate(12,12);x.fillStyle='rgb(200,225,255)';x.beginPath();
      for(var k=0;k<8;k++){var a=k*Math.PI/4,r=k%2?2:10;x.lineTo(Math.cos(a)*r,Math.sin(a)*r);}x.closePath();x.fill();return c;}
    function build(){W=cv.offsetWidth||hero.offsetWidth;H=hero.offsetHeight;if(!W||!H)return;cv.width=Math.round(W*DPR);cv.height=Math.round(H*DPR);STAR=STAR||star();
      var r=rng(43),n=W<700?22:44;ND=[];ED=[];LAY=[];
      for(var ly=0;ly<3;ly++){var oc=d.createElement('canvas');oc.width=Math.round((W+60)*DPR);oc.height=Math.round((H+60)*DPR);var x=oc.getContext('2d');x.setTransform(DPR,0,0,DPR,30*DPR,30*DPR);oc.x=x;LAY.push(oc);}
      for(var i=0;i<n;i++)ND.push({x:W*(.1+.9*r()),y:H*(.04+.92*r()),ly:r()<.4?0:r()<.6?1:2,ph:r()*TAU,st:r()<.18});
      for(i=0;i<n;i++){var a=ND[i],best=[];for(var j=0;j<n;j++){if(i===j||ND[j].ly!==a.ly)continue;var dx=ND[j].x-a.x,dy=ND[j].y-a.y,dd=dx*dx+dy*dy;best.push([dd,j]);}
        best.sort(function(p,q){return p[0]-q[0];});for(var k=0;k<Math.min(2,best.length);k++){var b=best[k][1];if(b>i&&best[k][0]<Math.pow(W*.22,2))ED.push({a:i,b:b,ly:a.ly,ph:r(),sp:(.00012+r()*.00018)*(a.ly+1),c:r()<.15?'o':r()<.3?'g':'b'});}}
      ED.forEach(function(e){var A=ND[e.a],B=ND[e.b],c=LAY[e.ly].x;c.strokeStyle='rgb(140,190,255)';c.lineWidth=e.ly===2?1.1:.8;c.globalAlpha=FX((A.x+B.x)/2)*(e.ly===2?.2:e.ly===1?.13:.08);c.beginPath();c.moveTo(A.x,A.y);c.lineTo(B.x,B.y);c.stroke();});
      ND.forEach(function(p){var c=LAY[p.ly].x;c.globalAlpha=FX(p.x)*(p.ly===2?.55:.35);c.fillStyle='rgb(150,195,255)';c.beginPath();c.arc(p.x,p.y,p.ly===2?2.2:1.5,0,TAU);c.fill();});
    }
    function draw(t,dt){if(!W)return;
      PX+=(PXT-PX)*Math.min(1,dt*.004);PY+=(PYT-PY)*Math.min(1,dt*.004);
      cx.setTransform(DPR,0,0,DPR,0,0);cx.clearRect(0,0,W,H);
      for(var ly=0;ly<3;ly++){var dp=ly===2?16:ly===1?9:4;cx.globalAlpha=1;cx.drawImage(LAY[ly],0,0,LAY[ly].width,LAY[ly].height,-30+PX*dp,-30+PY*dp*.6,W+60,H+60);}
      for(var i=0;i<ED.length;i++){var e=ED[i],A=ND[e.a],B=ND[e.b],dp2=e.ly===2?16:e.ly===1?9:4,u=(e.ph+t*e.sp)%1,x=lerp(A.x,B.x,u)+PX*dp2,y=lerp(A.y,B.y,u)+PY*dp2*.6,sz=e.ly===2?10:e.ly===1?7:5;
        cx.globalAlpha=FX(x)*(e.ly===2?.85:.55)*Math.sin(u*Math.PI);cx.drawImage(e.c==='o'?spO:e.c==='g'?spG:spB,x-sz/2,y-sz/2,sz,sz);}
      for(i=0;i<ND.length;i++){var p=ND[i];if(!p.st)continue;var dp3=p.ly===2?16:p.ly===1?9:4,tw=.5+.5*Math.sin(t*.0016+p.ph),s=(p.ly===2?12:8)*(.6+.4*tw);cx.globalAlpha=FX(p.x)*tw*.75;cx.drawImage(STAR,p.x+PX*dp3-s/2,p.y+PY*dp3*.6-s/2,s,s);}
      cx.globalAlpha=1;}
    build();var rt;addEventListener('resize',function(){clearTimeout(rt);rt=setTimeout(function(){build();if(R)draw(4000,16);},150);});
    if(R){draw(4000,16);return;}
    hero.addEventListener('pointermove',function(e){var r=hero.getBoundingClientRect();PXT=((e.clientX-r.left)/r.width-.5)*2;PYT=((e.clientY-r.top)/r.height-.5)*2;});
    hero.addEventListener('pointerleave',function(){PXT=PYT=0;});
    var on=loop(draw);XH.whenVisible(hero,on);
  })();

  /* =========================================================
     2. Hero stage — search → Google #8 → AI ignores you → scan & fix → climb to #2 → cited (21 s)
     ========================================================= */
  (function(){
    var vrv=$id('vrv'),sc=$id('vrvSc');if(!vrv||!sc)return;
    var cam=$id('vrvCam'),far=$id('vrvFar'),near=$id('vrvNear'),fc=far.getContext('2d'),nc=near.getContext('2d'),spot=$id('vrvSpot');
    var qt=$id('vrvQt'),serp=$id('vrvSerp'),rowsEl=$id('vrvRows'),ai=$id('vrvAi'),aiT=$id('vrvAiT'),aiV=$id('vrvAiV'),aiVb=$id('vrvAiVb'),aiN=$id('vrvAiN'),site=$id('vrvSite'),beam=$id('vrvBeam'),scanP=$id('vrvScanP');
    var iss=$$('#vrvIss li'),en=$$('#vrvEn span'),score=$id('vrvScore'),scA=$id('vrvScoreA'),scV=$id('vrvScoreV'),lg=$id('vrvLg'),lgp=$id('vrvLgP'),fill=$id('vrvFill'),rail=$$('#vrvRail>span');
    var KD=$$('#vrvKp>div'),KB=[0,1,2,3].map(function(i){return $id('vrvK'+i);}),KE=[0,1,2,3].map(function(i){return $id('vrvD'+i);});
    var sprB=glowSprite('110,170,255',64),sprO=glowSprite('255,150,50',64),sprG=glowSprite('95,224,141',64),sprR=glowSprite('255,90,70',64),sprW=glowSprite('255,226,180',64);
    var ACT=[0,3000,6200,9600,13600,16600],LOOP=21000,ACTN=['search','google','ai answer','scan & fix','climb','cited'];
    var Q='best chartered accountant for startups in pune';
    var RES=[['competitor-a.in','#7fb0ff',.82],['top-ca-firms-list.com','#a07cff',.7],['reddit · r/indianstartups','#FF8C1A',.6],['competitor-b.co.in','#7fb0ff',.75],['startup-guide.blog','#5FB3E8',.64],['competitor-c.com','#7fb0ff',.7],['news · gst deadlines','#9fb6de',.55],['yourbrand.in','#FFB15C',.72]];
    var AI1=[['For startups in Pune, the firms most often recommended are '],['Competitor A',1],[', '],['Competitor B',1],[' and '],['Competitor C',1],[' — each publishes clear fee pages and answers on GST and company registration.']];
    var AI2=[['For startups in Pune, firms often recommended are '],['yourbrand.in',2],[', '],['Competitor A',1],[' and '],['Competitor B',1],['. yourbrand.in lists fixed GST-filing fees and answers common registration questions.']];
    var ENG=['ChatGPT','Perplexity','Gemini','AI Overviews'];
    var W=0,H=0,T=0,ci=0,act=-1,FLOOR=null,DUST=[],PART=[],TRL=[],RING=[],ROWS=[],rowH=24,lastFill='',logS='',logT=0,logN=-1,aiSeg=null,aiT0=-1,aiN0=-1,aiDur=2400,scoreT=-1,scanT=-1,BG=[6,18,48];
    var S={px:0,py:0,pxT:0,pyT:0,ptr:false,cx:0,cy:0,cs:1,tx:0,ty:0,ts:1,fx:-1,fy:-1};
    var order=[0,1,2,3,4,5,6,7];
    /* rows */
    rowsEl.innerHTML=RES.map(function(r,i){return '<div class="r'+(i===7?' me':'')+'" style="--c:'+r[1]+';--w:'+Math.round(r[2]*100)+'%"><em>'+(i+1)+'</em><i></i><span><b>'+esc(r[0])+'</b><s></s></span></div>';}).join('');
    ROWS=$$('.r',rowsEl).map(function(el,i){return {el:el,num:$('em',el),slot:i,from:i,t0:-1e9,y:i,inT:-1,lastY:'',lastO:''};});
    function size(){W=sc.clientWidth;H=sc.clientHeight;if(!W)return;
      [far,near].forEach(function(c){c.width=Math.round(W*DPR);c.height=Math.round(H*DPR);});
      rowH=Math.max(20,Math.min(26,(rowsEl.clientHeight-6)/8));
      var r=rng(5);DUST=[];for(var i=0;i<(W<420?36:60);i++)DUST.push([r()*W,r()*H,r()*TAU,.6+r()*1.1]);
      FLOOR=d.createElement('canvas');FLOOR.width=Math.round((W+40)*DPR);FLOOR.height=Math.round((H+40)*DPR);var f=FLOOR.getContext('2d');f.setTransform(DPR,0,0,DPR,20*DPR,20*DPR);
      var vx=W/2,vy=-H*.6,hz=H*.1;f.strokeStyle='rgb(127,176,255)';f.lineWidth=1;
      for(i=-14;i<=14;i++){var bx=W/2+i*W*.09,u=(hz-vy)/(H+20-vy),tx=vx+(bx-vx)*u;f.globalAlpha=.07;f.beginPath();f.moveTo(tx,hz);f.lineTo(bx,H+20);f.stroke();}
      for(i=0;i<11;i++){var yy=hz+(H+20-hz)*Math.pow(i/10,1.7);f.globalAlpha=.035+.05*i/10;f.beginPath();f.moveTo(-20,yy);f.lineTo(W+20,yy);f.stroke();}
      var cs=getComputedStyle(sc).backgroundColor.match(/\d+/g);if(cs)BG=[+cs[0],+cs[1],+cs[2]];
    }
    /* positions in stage (pre-camera) coordinates */
    function rowPt(i,o){var r=ROWS[i];o=o||[0,0];o[0]=serp.offsetLeft+serp.offsetWidth*.5;o[1]=serp.offsetTop+rowsEl.offsetTop+r.y*rowH+rowH/2+3;return o;}
    function elPt(el,fx,fy){return [el.offsetLeft+el.offsetWidth*(fx===undefined?.5:fx),el.offsetTop+el.offsetHeight*(fy===undefined?.5:fy)];}
    function issPt(k){var li=iss[k];return [site.offsetLeft-site.offsetWidth/2+li.offsetLeft+li.offsetWidth*.85,site.offsetTop-site.offsetHeight/2+li.offsetTop+li.offsetHeight/2];}
    function burst(x,y,n,cols,spd){for(var k=0;k<n;k++){var a=Math.random()*TAU,v=(.03+Math.random()*.08)*(spd||1);PART.push({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v-.02,l:0,m:600+Math.random()*700,c:cols[k%cols.length],s:6+Math.random()*7});}}
    function trail(a,b,dur,c,bend){TRL.push({a:a,b:b,t:T,d:dur,c:c,o:bend||.2});}
    function ring(x,y,c,s){RING.push({x:x,y:y,t:T,c:c,s:s||1});}
    function log(s){logS=s;logT=T;logN=-1;}
    function kpi(i,cls){KD[i].classList.remove('good','bad','warn');if(cls)KD[i].classList.add(cls);}
    function setAct(a){act=a;var keep=['s-serp','s-ai','s-site','s-dim','s-miss','s-cited','win'].filter(function(c){return vrv.classList.contains(c);});vrv.className='vrv a'+a+' '+keep.join(' ');
      rail.forEach(function(r,k){r.classList.toggle('on',k===a);r.classList.toggle('dn',k<a);});setT('vrvLive','sample · '+ACTN[a]);}
    function flag(c,on){vrv.classList.toggle(c,!!on);}
    function aiHTML(seg,n,cur){var out='',left=n;for(var i=0;i<seg.length&&left>0;i++){var s=seg[i],t=s[0].slice(0,left);left-=t.length;out+=s[1]?'<mark'+(s[1]===2?' class="me"':'')+'>'+esc(t)+'</mark>':esc(t);}return out+(cur?'<span class="vr-cur"></span>':'');}
    function aiLen(seg){return seg.reduce(function(a,s){return a+s[0].length;},0);}
    function stream(seg,dur){aiSeg=seg;aiT0=T;aiDur=dur;aiN0=-1;}
    function moveRow(i,slot,delay){var r=ROWS[i];r.from=r.y;r.slot=slot;r.t0=T+(delay||0);}
    function reset(){
      T=0;PART.length=0;TRL.length=0;RING.length=0;aiSeg=null;aiT.innerHTML='';aiV.className='vd';scoreT=-1;scanT=-1;
      vrv.className='vrv a0';score.className='vrv-score';scA.style.strokeDashoffset='1';scV.textContent='0';
      ROWS.forEach(function(r,i){r.slot=i;r.from=i;r.y=i;r.t0=-1e9;r.inT=-1;r.el.style.opacity='0';r.lastO='0';r.num.textContent=String(i+1);});ROWS[7].el.classList.remove('up');
      iss.forEach(function(l){l.className='';});en.forEach(function(e){e.className='';});beam.style.opacity='0';scanP.textContent='0%';
      KB[0].textContent='—';KE[0].textContent='searching';KB[1].textContent='0/4';KE[1].textContent='engines';KB[2].textContent='0';KE[2].textContent='not scanned';KB[3].textContent='0';KE[3].textContent='sample';[0,1,2,3].forEach(function(i){kpi(i);});
      aiN.textContent='AI answer · ChatGPT';lgp.textContent='›';qt.textContent='';cam.style.opacity='';
    }
    var CUES=[[0,function(){reset();log('Buyer opens a search');}]];
    CUES.push([2650,function(){var p=elPt($id('vrvQ'),.92);burst(p[0],p[1],14,['o','w']);ring(p[0],p[1],'255,177,92',.35);log('Search · “'+Q+'”');}]);
    CUES.push([3000,function(){flag('s-serp',1);ROWS.forEach(function(r,i){r.inT=T+i*90;});log('Google returns ten blue links');}]);
    CUES.push([4300,function(){var p=rowPt(7);ring(p[0],p[1],'255,177,92',.45);burst(p[0],p[1],10,['o','w']);KB[0].textContent='#8';kpi(0,'warn');KE[0].textContent='bottom of page 1';bump(KB[0]);log('Google · yourbrand.in ranks #8 for this query');}]);
    CUES.push([6200,function(){flag('s-ai',1);stream(AI1,2500);log('AI assistant writes its own answer…');}]);
    CUES.push([8800,function(){aiV.className='vd in';aiVb.textContent='Not mentioned · 0 visits';flag('s-miss',1);restart(vrv,'alarm');var p=elPt(ai,.5,.85);burst(p[0],p[1],18,['r','o','w'],1.2);kpi(1,'bad');KE[1].textContent='not mentioned';log('AI answer names three competitors — not you');}]);
    [0,1,2,3].forEach(function(k){CUES.push([8950+k*140,function(){en[k].className='no';}]);});
    CUES.push([9600,function(){flag('s-dim',1);flag('s-site',1);scanT=T;KE[2].textContent='scanning';log('Veritas scan · Google & AI crawlers');}]);
    iss.forEach(function(l,k){CUES.push([10000+k*300,function(){l.className='in';var p=issPt(k);burst(p[0],p[1],6,['r','w']);var n=[3,6,9,12,14][k];KB[2].textContent=String(n);kpi(2,'bad');KE[2].textContent='issues';bump(KB[2]);}]);});
    CUES.push([11600,function(){log('Applying AI-readable fixes · schema · FAQ · answer-first');}]);
    iss.forEach(function(l,k){CUES.push([11750+k*260,function(){l.className='in ok';l.querySelector('em').textContent='fixed';var p=issPt(k);burst(p[0],p[1],10,['g','w']);ring(p[0],p[1],'95,224,141',.18);var n=[11,8,5,3,2][k];KB[2].textContent=String(n);kpi(2,k>2?'good':'warn');KE[2].textContent=k>2?'fixed':'fixing';}]);});
    CUES.push([13250,function(){flag('s-site',0);flag('s-dim',0);flag('s-miss',0);}]);
    CUES.push([13700,function(){var p0=rowPt(7).slice();moveRow(7,1);for(var i=1;i<7;i++)moveRow(i,i+1,60+i*30);ROWS[7].el.classList.add('up');
      setTimeout(function(){},0);trail(p0,[p0[0],p0[1]-rowH*6],900,'g',.6);log('yourbrand.in climbs · #8 → #2');}]);
    CUES.push([14300,function(){var p=rowPt(7);ring(p[0],p[1],'95,224,141',.5);burst(p[0],p[1],18,['g','w'],1.2);KB[0].textContent='#2';kpi(0,'good');KE[0].textContent='▲ 6 places';bump(KB[0]);}]);
    CUES.push([16600,function(){aiV.className='vd';aiT.innerHTML='';stream(AI2,2300);log('AI answer re-generated with your fixed pages…');
      var a=rowPt(7),b=elPt(ai,.3,.35);for(var k=0;k<3;k++)TRL.push({a:a,b:b,t:T+k*160,d:800,c:'g',o:-.25});}]);
    CUES.push([18950,function(){aiV.className='vd in ok';aiVb.textContent='Cited · yourbrand.in';flag('s-cited',1);var p=elPt(ai,.5,.85);burst(p[0],p[1],20,['g','w'],1.2);ring(p[0],p[1],'95,224,141',.4);}]);
    [0,1,2,3].forEach(function(k){CUES.push([19050+k*230,function(){en[k].className='on';aiN.textContent='AI answer · '+ENG[k];KB[1].textContent=(k+1)+'/4';kpi(1,'good');KE[1].textContent='cited';bump(KB[1]);var p=elPt(ai,.5,.95);trail(p,[W*(.125+.25*k),H+14],520,'g',.1);}]);});
    CUES.push([19300,function(){scoreT=T;score.className='vrv-score show';flag('win',1);KE[3].textContent='settled';kpi(3,'good');lgp.textContent='✓';ring(W/2,H/2,'95,224,141',1);ring(W/2,H/2,'127,176,255',.7);burst(W/2,H/2,30,['g','b','w'],1.3);log('Cited on 4 engines · AI visibility 72 (sample)');}]);
    CUES.push([20500,function(){score.className='vrv-score out';}]);
    CUES.sort(function(a,b){return a[0]-b[0];});
    var tmp=[0,0];
    function trPos(p,u,o){var a=p.a,b=p.b,mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=b[0]-a[0],dy=b[1]-a[1],qx=mx-dy*p.o,qy=my+dx*p.o,v=1-u;o[0]=v*v*a[0]+2*v*u*qx+u*u*b[0];o[1]=v*v*a[1]+2*v*u*qy+u*u*b[1];return o;}
    function focus(){var c=[W/2,H/2],fs=1,f=c;
      if(act===0){fs=1.05;f=[W/2,H*.3];}
      else if(act===1){fs=1.05;f=T>4300?rowPt(7):[serp.offsetLeft+serp.offsetWidth/2,H*.55];}
      else if(act===2){fs=1.06;f=[ai.offsetLeft+ai.offsetWidth/2,H*.5];}
      else if(act===3){fs=.97;f=c;}
      else if(act===4){fs=1.06;f=rowPt(7);}
      else{fs=T>19300?1:1.04;f=T>19300?c:[ai.offsetLeft+ai.offsetWidth/2,H*.55];}
      var IN=W<=560?8:12,hx=W/2-IN,hy=H/2-IN,cap=1+(IN-6.5)/Math.max(hx,hy);fs=Math.min(fs,cap);S.ts=fs;S.tx=-(f[0]-c[0])*.22;S.ty=-(f[1]-c[1])*.3;}
    function slack(h,s){var IN=W<=560?8:12;return Math.max(0,IN-6-(h-IN)*(s-1));}
    function update(dt){
      var e=1-Math.exp(-dt/450);
      if(!S.ptr){S.pxT=Math.sin(T*.00042)*.35;S.pyT=Math.cos(T*.00031)*.28;}
      S.px+=(S.pxT-S.px)*Math.min(1,dt*.0045);S.py+=(S.pyT-S.py)*Math.min(1,dt*.0045);
      focus();S.cx+=(S.tx-S.cx)*e;S.cy+=(S.ty-S.cy)*e;S.cs+=(S.ts-S.cs)*e;
      /* rows */
      for(var i=0;i<ROWS.length;i++){var r=ROWS[i],u=(T-r.t0)/760;r.y=u<0?r.from:lerp(r.from,r.slot,u>1.4?1:spring(u));}
      for(i=PART.length-1;i>=0;i--){var q=PART[i];q.l+=dt;if(q.l>=q.m){PART.splice(i,1);continue;}q.x+=q.vx*dt;q.y+=q.vy*dt;q.vx*=.985;q.vy*=.985;}
      /* ambient trails between panels */
      if(act===1&&Math.random()<dt/260){var a=[W/2,28],b=rowPt(Math.floor(Math.random()*8));trail(a,b,700,'b',.15*(Math.random()-.5));}
      if(act===2&&aiSeg&&Math.random()<dt/200){trail([W/2,28],elPt(ai,.5,.3),700,Math.random()<.5?'b':'o',.2*(Math.random()-.5));}
      if(act===5&&Math.random()<dt/240){trail(rowPt(7),elPt(ai,.2+.6*Math.random(),.4),800,'g',-.2);}
    }
    function renderFar(t){var c=fc,px=S.px*4,py=S.py*3;c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,W,H);
      c.globalAlpha=1;c.drawImage(FLOOR,0,0,FLOOR.width,FLOOR.height,-20+px,-20+py,W+40,H+40);
      c.fillStyle='rgb(170,205,255)';for(var i=0;i<DUST.length;i++){var du=DUST[i];c.globalAlpha=.25+.3*Math.sin(t*.0017+du[2]);c.fillRect(du[0]+px*1.5,du[1]+py*1.5,du[3],du[3]);}
      /* sweep glow during scan */
      if(scanT>=0&&act===3){var u=((T-scanT)%1600)/1600;c.globalAlpha=.25*(1-u);c.strokeStyle='#FFB15C';c.lineWidth=2;c.beginPath();c.ellipse(W/2,H/2,40+u*W*.5,20+u*H*.4,0,0,TAU);c.stroke();}
      c.globalAlpha=1;}
    function renderNear(){var c=nc,s=S.cs,ox=W/2-W/2*s+(S.ox||0),oy=H/2-H/2*s+(S.oy||0);c.setTransform(DPR,0,0,DPR,0,0);c.clearRect(0,0,W,H);
      c.setTransform(DPR*s,0,0,DPR*s,DPR*ox,DPR*oy);
      for(var i=TRL.length-1;i>=0;i--){var p=TRL[i],u=(T-p.t)/p.d;if(u<0)continue;if(u>=1){TRL.splice(i,1);continue;}var sp=p.c==='g'?sprG:p.c==='o'?sprO:p.c==='r'?sprR:sprB;
        for(var j=5;j>=0;j--){var uj=u-j*.035;if(uj<0)continue;trPos(p,uj,tmp);var sz=j?9-j:13;c.globalAlpha=.9*(1-j/6)*Math.min(1,u*5)*Math.min(1,(1-u)*6);c.drawImage(sp,tmp[0]-sz/2,tmp[1]-sz/2,sz,sz);}}
      for(i=0;i<PART.length;i++){var q=PART[i],lf=1-q.l/q.m;c.globalAlpha=lf*.95;var spp=q.c==='g'?sprG:q.c==='o'?sprO:q.c==='r'?sprR:q.c==='w'?sprW:sprB;c.drawImage(spp,q.x-q.s/2,q.y-q.s/2,q.s,q.s);}
      for(i=RING.length-1;i>=0;i--){var rg=RING[i],ru=(T-rg.t)/900;if(ru<0)continue;if(ru>=1){RING.splice(i,1);continue;}var rad=(14+ru*W*.5)*rg.s;c.globalAlpha=(1-ru)*.7;c.strokeStyle='rgba('+rg.c+',1)';c.lineWidth=2;c.beginPath();c.ellipse(rg.x,rg.y,rad,rad*.6,0,0,TAU);c.stroke();}
      c.globalAlpha=1;
      var fo=Math.max(clamp((T-20550)/450,0,1),1-clamp(T/400,0,1));if(fo>0){c.setTransform(DPR,0,0,DPR,0,0);c.fillStyle=rgba(BG,fo);c.fillRect(0,0,W,H);}
    }
    var lastCam='';
    function hud(){
      var a=0;for(var k=ACT.length-1;k>=0;k--){if(T>=ACT[k]){a=k;break;}}if(a!==act)setAct(a);
      var fs='scaleX('+(T/LOOP).toFixed(3)+')';if(fs!==lastFill){fill.style.transform=fs;lastFill=fs;}
      /* typed query */
      var qn=clamp(Math.floor((T-200)/48),0,Q.length);if(qt._n!==qn){qt._n=qn;qt.textContent=Q.slice(0,qn);}
      /* camera */
      var mx=slack(W/2,S.cs),my=slack(H/2,S.cs);S.ox=clamp(S.cx+S.px*8,-mx,mx);S.oy=clamp(S.cy+S.py*6,-my,my);var ct='translate3d('+S.ox.toFixed(1)+'px,'+S.oy.toFixed(1)+'px,0) scale('+S.cs.toFixed(4)+')';
      if(ct!==lastCam){cam.style.transform=ct;lastCam=ct;}
      var fo=T>20550?1-clamp((T-20550)/450,0,1):1;cam.style.opacity=fo<1?fo.toFixed(2):'';
      /* rows */
      for(var i=0;i<ROWS.length;i++){var r=ROWS[i],o=r.inT<0?0:clamp((T-r.inT)/320,0,1),yy=(r.y*rowH+(1-eo(o))*30).toFixed(1),os=o.toFixed(2);
        if(yy!==r.lastY){r.el.style.transform='translateY('+yy+'px)';r.lastY=yy;}if(os!==r.lastO){r.el.style.opacity=os;r.lastO=os;}
        var num=String(Math.round(r.y)+1);if(r.num.textContent!==num)r.num.textContent=num;}
      /* ai stream */
      if(aiSeg){var L=aiLen(aiSeg),n=clamp(Math.floor((T-aiT0)/aiDur*L),0,L);if(n!==aiN0){aiN0=n;aiT.innerHTML=aiHTML(aiSeg,n,n<L);}}
      /* scan */
      if(scanT>=0&&act===3){var su=((T-scanT)%1100)/1100;beam.style.opacity='1';beam.style.transform='translateY('+(su*52).toFixed(1)+'px)';setT(scanP,Math.min(100,Math.round((T-scanT)/1900*100))+'%');}
      else if(beam.style.opacity==='1')beam.style.opacity='0';
      /* score */
      if(scoreT>=0){var u=(T-scoreT)/1100,v=72*spring(u);setT(scV,String(clamp(Math.round(v),0,99)));var off=(1-clamp(v/100,0,1)).toFixed(4);if(scA._o!==off){scA._o=off;scA.style.strokeDashoffset=off;}setT(KB[3],String(clamp(Math.round(v),0,99)));}
      var nn=Math.min(logS.length,Math.floor((T-logT)/14));if(nn!==logN){logN=nn;lg.textContent=logS.slice(0,nn);}
    }
    function tick(t,dt){if(!W)return;T+=dt;if(T>=LOOP){T-=LOOP;ci=0;}
      while(ci<CUES.length&&CUES[ci][0]<=T){CUES[ci][1]();ci++;}
      update(dt);renderFar(t);renderNear();hud();}
    function finalFrame(){reset();T=19800;setAct(5);flag('s-serp',1);flag('s-ai',1);flag('s-cited',1);
      ROWS.forEach(function(r,i){r.inT=0;var s=i===7?1:i===0?0:i+1;r.slot=s;r.from=s;r.y=s;r.t0=-1e9;});ROWS[7].el.classList.add('up');
      aiSeg=null;aiT.innerHTML=aiHTML(AI2,9999,false);aiV.className='vd in ok';aiVb.textContent='Cited · yourbrand.in';en.forEach(function(e){e.className='on';});aiN.textContent='AI answer · 4 engines';
      KB[0].textContent='#2';KE[0].textContent='▲ 6 places';kpi(0,'good');KB[1].textContent='4/4';KE[1].textContent='cited';kpi(1,'good');KB[2].textContent='2';KE[2].textContent='fixed';kpi(2,'good');KB[3].textContent='72';KE[3].textContent='settled';kpi(3,'good');
      score.className='vrv-score fin';scA.style.strokeDashoffset='.28';scV.textContent='72';lgp.textContent='✓';lg.textContent='Cited on 4 engines · AI visibility 72 (sample)';qt.textContent=Q;
      fill.style.transform='scaleX(1)';S.cs=1;S.cx=S.cy=0;cam.style.transform='none';
      ROWS.forEach(function(r){r.el.style.opacity='1';r.el.style.transform='translateY('+(r.y*rowH)+'px)';r.num.textContent=String(r.y+1);});
      renderFar(0);nc.clearRect(0,0,near.width,near.height);}
    size();
    function onSize(){var was=W;size();if(R){finalFrame();return;}if(!was)reset();}
    if('ResizeObserver' in window)new ResizeObserver(onSize).observe(sc);else addEventListener('resize',onSize);
    if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){size();if(R)finalFrame();});
    if(R){finalFrame();return;}
    reset();
    var stage=vrv.closest('.stage')||sc;
    stage.addEventListener('pointermove',function(e){var r=sc.getBoundingClientRect();S.ptr=true;S.pxT=clamp(((e.clientX-r.left)/r.width-.5)*2,-1.2,1.2);S.pyT=clamp(((e.clientY-r.top)/r.height-.5)*2,-1.2,1.2);});
    stage.addEventListener('pointerleave',function(){S.ptr=false;});
    sc.addEventListener('pointermove',function(e){var r=sc.getBoundingClientRect();spot.style.transform='translate('+(e.clientX-r.left).toFixed(0)+'px,'+(e.clientY-r.top).toFixed(0)+'px)';sc.classList.add('hov');});
    sc.addEventListener('pointerleave',function(){sc.classList.remove('hov');});
    var on=loop(tick);XH.whenVisible(vrv,on);
  })();

  /* =========================================================
     3. Global micro-interactions
     ========================================================= */
  $$('.vr-kin').forEach(function(h){var i=0;h.setAttribute('aria-label',h.textContent.replace(/\s+/g,' ').trim());
    (function walk(n){Array.prototype.slice.call(n.childNodes).forEach(function(c){
      if(c.nodeType===3){var f=d.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(function(p){if(!p)return;if(/^\s+$/.test(p))f.appendChild(d.createTextNode(p));else{var s=d.createElement('span');s.className='w';s.setAttribute('aria-hidden','true');s.style.setProperty('--i',i++);s.textContent=p;f.appendChild(s);}});c.parentNode.replaceChild(f,c);}
      else if(c.nodeType===1)walk(c);});})(h);});
  $$('.vr-sd').forEach(function(s){function w(){s.style.setProperty('--sw',(s.clientWidth-48)+'px');}w();addEventListener('resize',w);XH.whenVisible(s,function(v){s.classList.toggle('run',v&&!R);});});
  if(!R){
    var shs=$$('main .sec .sh'),ptick=false;
    var para=function(){ptick=false;var vh=innerHeight,rs=shs.map(function(e){return e.getBoundingClientRect();});
      shs.forEach(function(e,i){var r=rs[i];if(r.bottom<-80||r.top>vh+80)return;var p=(r.top+r.height/2-vh*.5)/vh;e.style.translate='0 '+(clamp(p,-1,1)*-16).toFixed(1)+'px';});};
    addEventListener('scroll',function(){if(!ptick){ptick=true;requestAnimationFrame(para);}},{passive:true});para();
  }
  if(FINE&&!R){
    $$('.vr-mag').forEach(function(b){
      b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;b.classList.add('mg');b.style.translate=(x*16).toFixed(1)+'px '+(y*11).toFixed(1)+'px';});
      b.addEventListener('pointerleave',function(){b.classList.remove('mg');b.style.translate='';});
    });
    $$('.vr-tl').forEach(function(c){
      c.addEventListener('pointermove',function(e){if(c.classList.contains('rv')&&!c.classList.contains('in'))return;var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;
        c.classList.add('tilting');c.style.transform='perspective(900px) rotateX('+((.5-y)*6).toFixed(2)+'deg) rotateY('+((x-.5)*7).toFixed(2)+'deg) translateY(-4px)';c.style.setProperty('--gx',(x*100).toFixed(1)+'%');c.style.setProperty('--gy',(y*100).toFixed(1)+'%');});
      c.addEventListener('pointerleave',function(){c.classList.remove('tilting');c.style.transform='';});
    });
  }
  function ulMove(tabs){var ul=$('.ul',tabs),b=$('button.on',tabs);if(!ul||!b)return;ul.style.width=b.offsetWidth+'px';ul.style.transform='translateX('+b.offsetLeft+'px)';}
  /* typewriter for [data-t] (used in module mocks) */
  function typeIn(el,ms,cb){if(!el)return;var s=el.getAttribute('data-t');if(R){el.textContent=s;return;}el._typ={s:s,t:0,ms:ms||1600,cb:cb};typOn(true);}
  var typing=[],typOn=loop(function(t,dt){var any=false;$$('[data-t]').forEach(function(el){var o=el._typ;if(!o)return;o.t+=dt;var n=Math.min(o.s.length,Math.floor(o.t/o.ms*o.s.length));if(el._n!==n){el._n=n;el.innerHTML=esc(o.s.slice(0,n))+(n<o.s.length?'<span class="vr-cur"></span>':'');}if(n<o.s.length)any=true;else{el._typ=null;if(o.cb)o.cb();}});if(!any)typOn(false);});

  /* =========================================================
     4. Overview — the same question on Google and in an AI answer
     ========================================================= */
  (function(){
    var vs=$id('vrVs');if(!vs)return;
    var gl=$id('vrVsGl'),at=$id('vrVsAt'),src=$id('vrVsS'),fg=$('.vs-f.g',vs),fr=$('.vs-f.r',vs),q=$id('vrVsQ'),QS=q.textContent;
    var G=[['top-startup-ca-firms.com','directory · 12 firms compared'],['reddit · r/pune','“which CA do you use?”'],['yourfirm.in','CA firm · startups · GST','me'],['competitor-a.in','Startup CA services'],['startup-guide.blog','How to pick a CA in 2026']];
    var AT=[['For startups in Pune, three firms come up most often: '],['Competitor A',1],[', '],['Competitor B',1],[' and '],['Competitor C',1],['. Each publishes fixed fees and plain answers on GST registration.']];
    var SRC=['competitor-a.in','reddit.com','startup-guide.blog'];
    gl.innerHTML=G.map(function(g,i){return '<li'+(g[2]?' class="me"':'')+'><em>'+(i+1)+'</em><span><b>'+esc(g[0])+'</b><small>'+esc(g[1])+'</small></span></li>';}).join('');
    src.innerHTML=SRC.map(function(s){return '<span>'+esc(s)+'</span>';}).join('');
    var lis=$$('li',gl),ss=$$('span',src),L=AT.reduce(function(a,s){return a+s[0].length;},0);
    function html(n,cur){var out='',left=n;for(var i=0;i<AT.length&&left>0;i++){var t=AT[i][0].slice(0,left);left-=t.length;out+=AT[i][1]?'<mark>'+esc(t)+'</mark>':esc(t);}return out+(cur?'<span class="vr-cur"></span>':'');}
    function fin(){vs.classList.add('go');q.textContent=QS;lis.forEach(function(l){l.classList.add('in');});at.innerHTML=html(L,false);ss.forEach(function(s){s.classList.add('in');});fg.classList.add('in');fr.classList.add('in');}
    if(R){fin();return;}
    var T=0,lastN=-1,qn=-1,started=false;
    function rst(){T=0;lastN=-1;lis.forEach(function(l){l.classList.remove('in');});ss.forEach(function(s){s.classList.remove('in');});fg.classList.remove('in');fr.classList.remove('in');at.innerHTML='';}
    var on=loop(function(t,dt){T+=dt;if(T>15000){rst();}
      var n=clamp(Math.floor(T/22),0,QS.length);if(n!==qn){qn=n;q.textContent=QS.slice(0,n);}
      if(T>500)vs.classList.add('go');
      lis.forEach(function(l,i){if(T>1100+i*220)l.classList.add('in');});
      if(T>2400)fg.classList.add('in');
      var an=clamp(Math.floor((T-1600)/3000*L),0,L);if(an!==lastN){lastN=an;at.innerHTML=html(an,an<L&&an>0);}
      ss.forEach(function(s,i){if(T>4700+i*200)s.classList.add('in');});
      if(T>5400)fr.classList.add('in');});
    XH.whenVisible(vs,function(v){if(v&&!started){started=true;}on(v);});
  })();

  /* =========================================================
     5. Journey — sticky stage morphing through six layouts
     ========================================================= */
  (function(){
    var jr=$id('vrJr');if(!jr)return;
    var st=$id('vrJrSt'),lis=$$('li',st),jv=$id('vrJrV'),cv=$id('vrJrCv'),ctx=cv.getContext('2d'),rb=$$('#vrJrRail b'),rf=$id('vrJrFill'),hdT=$id('vrJrT'),cap=$id('vrJrCap');
    var NT=30,NL=6;
    var CAP=[['Audit','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg>','Site audit · Google & AI crawlers','30 pages crawled · 11 with issues'],
      ['Keywords','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>','Keyword research · keyword gap','42 opportunities · 9 already won by competitors'],
      ['AI prompts','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>','Prompt tracking · 4 engines','you are named in 9 of 30 answers'],
      ['Fix pages','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 10V8M11 6h2M17 6h2M3 21l12-12"/></svg>','AEO / GEO fixes','schema · FAQ · answer-first · brand summary'],
      ['Publish','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>','Content calendar · approvals','12 articles · 3 in approval · WordPress'],
      ['Measure','<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>','Monthly report','AI mentions 9 → 21 of 30 · sample']];
    var r=rng(29),SEED=[];
    for(var i=0;i<NT;i++)SEED.push({iss:r()<.37?(r()<.5?2:1):0,vol:r(),dif:r(),men:r()<.3,eng:i%4,k:Math.floor(i/4)});
    var ENGN=['ChatGPT','Perplexity','Gemini','AI Overv.'];
    function txt(c,s,x,y,sz,col,al,align,wt){c.globalAlpha=al;c.fillStyle=col;c.font=(wt||600)+' '+sz+'px "IBM Plex Mono",monospace';c.textAlign=align||'left';c.textBaseline='middle';c.fillText(s,x,y);}
    var LAY=[
      function(i,g){var col=i%6,row=Math.floor(i/6),x=g.W*(.12+col*.152),y=g.top+g.RH*(.1+row*.2),sw=((g.t/3400)%1)*1.2-.1,ny=(y-g.top)/g.RH,hit=sw>ny,s=SEED[i];
        return {x:x,y:y,w:g.W*.12,h:g.RH*.14,r:5,c:hit&&s.iss?(s.iss===2?RED:AMB):SKY,a:hit?1:.55};},
      function(i,g){var s=SEED[i],x=g.W*(.1+.82*s.vol),y=g.top+g.RH*(.1+.78*s.dif),sz=g.W*(.022+.04*s.vol),opp=s.vol>.5&&s.dif<.5;
        return {x:x,y:y,w:sz,h:sz,r:sz/2,c:opp?GRN:s.dif>.7?RED:SKY,a:opp?1:.7};},
      function(i,g){var s=SEED[i],x=g.W*[.18,.4,.62,.84][s.eng],y=g.top+g.RH*(.16+s.k*.105),men=s.men||(i%7===0);
        return {x:x,y:y,w:g.W*.15,h:g.RH*.075,r:4,c:men?GRN:[130,60,70],a:men?1:.75};},
      function(i,g){var col=i%3,row=Math.floor(i/3),x=g.W*(.2+col*.3),y=g.top+g.RH*(.08+row*.092),k=(g.t/180)%(NT+12),done=i<k;
        return {x:x,y:y,w:g.W*.25,h:g.RH*.06,r:4,c:done?GRN:RED,a:done?1:.7};},
      function(i,g){var col=i%6,row=Math.floor(i/6),x=g.W*(.14+col*.145),y=g.top+g.RH*(.14+row*.18),k=(g.t/260)%(NT+10),c=i<k-6?GRN:i<k-2?AMB:i<k?BLU:NEU;
        return {x:x,y:y,w:g.W*.1,h:g.RH*.13,r:6,c:c,a:i<k?1:.45};},
      function(i,g){if(i<12){var bx0=g.W*.06,bx1=g.W*.52,bw=(bx1-bx0)/12,hh=g.RH*(.14+i*.05)*(1+Math.sin(g.t*.002+i)*.02);return {x:bx0+(i+.5)*bw,y:g.top+g.RH*.86-hh/2,w:bw*.64,h:hh,r:3,c:i>7?GRN:i>3?AMB:SKY,a:.95};}
        var j=i-12,an=-Math.PI/2+j/18*TAU+g.t*.00022,Rr=Math.min(g.W*.15,g.RH*.3),s2=Math.min(g.W*.038,g.RH*.07);
        return {x:g.W*.77+Math.cos(an)*Rr,y:g.top+g.RH*.5+Math.sin(an)*Rr,w:s2,h:s2,r:s2/2,c:j<13?GRN:NEU,a:1};}
    ];
    var OVER=[
      function(c,g,w){var sw=((g.t/3400)%1)*1.2-.1,y=g.top+g.RH*sw;c.globalAlpha=w*.7;c.strokeStyle='#FFB15C';c.lineWidth=1.6;c.beginPath();c.moveTo(g.W*.04,y);c.lineTo(g.W*.96,y);c.stroke();c.globalAlpha=w*.1;c.fillStyle='#FFB15C';c.fillRect(g.W*.04,y-g.RH*.08,g.W*.92,g.RH*.08);
        if(!g.mini){txt(c,'crawler sweep · Googlebot + AI crawlers',g.W*.05,g.top-g.RH*.04,9.5,'#FFD3A0',w);}},
      function(c,g,w){var y0=g.top+g.RH*.94;c.globalAlpha=w*.4;c.strokeStyle='rgba(127,176,255,1)';c.lineWidth=1;c.beginPath();c.moveTo(g.W*.06,y0);c.lineTo(g.W*.95,y0);c.moveTo(g.W*.06,y0);c.lineTo(g.W*.06,g.top+g.RH*.04);c.stroke();
        c.globalAlpha=w*.08;c.fillStyle='#5FE08D';c.fillRect(g.W*.51,g.top+g.RH*.06,g.W*.43,g.RH*.42);
        if(!g.mini){txt(c,'search volume →',g.W*.95,y0+12,9,'#9fb6de',w,'right');txt(c,'↑ easier',g.W*.075,g.top+g.RH*.07,9,'#9fb6de',w);txt(c,'opportunity zone',g.W*.93,g.top+g.RH*.1,9.5,'#8ff0b2',w,'right',700);}},
      function(c,g,w){for(var k=0;k<4;k++){var x=g.W*[.18,.4,.62,.84][k];c.globalAlpha=w;rr(c,x-g.W*.095,g.top+g.RH*.06,g.W*.19,g.RH*.9,10);c.fillStyle='rgba(127,176,255,.04)';c.fill();c.strokeStyle='rgba(127,176,255,.22)';c.lineWidth=1;c.stroke();
          txt(c,g.mini?ENGN[k].slice(0,4):ENGN[k],x,g.top+g.RH*.02,g.mini?8:10,'#cfe0ff',w,'center',700);}},
      function(c,g,w){if(g.mini)return;var lab=['Structured data','Answer-first copy','FAQ blocks'];for(var k=0;k<3;k++)txt(c,lab[k],g.W*(.2+k*.3),g.top-g.RH*.01,9.5,'#cfe0ff',w,'center',700);
        var k2=Math.min(NT,Math.floor((g.t/180)%(NT+12)));txt(c,k2+' of 30 fixes applied',g.W*.96,g.top+g.RH*1.0,9.5,'#8ff0b2',w,'right');},
      function(c,g,w){var dn=['Mon','Tue','Wed','Thu','Fri','Sat'];if(!g.mini)for(var k=0;k<6;k++)txt(c,dn[k],g.W*(.14+k*.145),g.top+g.RH*.02,9.5,'#9fb6de',w,'center',700);
        var px=g.W*.5,py=g.top+g.RH*.98;if(!g.mini)txt(c,'→ WordPress · one click',px,py,9.5,'#8ff0b2',w,'center');},
      function(c,g,w){var cx=g.W*.77,cy=g.top+g.RH*.5;txt(c,'21/30',cx,cy-4,g.mini?16:26,'#ffffff',w,'center',700);txt(c,'AI mentions',cx,cy+(g.mini?12:18),g.mini?7.5:9.5,'#9fb6de',w,'center');
        c.globalAlpha=w*.35;c.strokeStyle='rgba(127,176,255,1)';c.lineWidth=1;c.beginPath();c.moveTo(g.W*.06,g.top+g.RH*.86);c.lineTo(g.W*.52,g.top+g.RH*.86);c.stroke();
        txt(c,g.mini?'clicks / mo':'organic clicks · 12 months',g.W*.06,g.top+g.RH*.94,g.mini?7.5:9.5,'#9fb6de',w);}
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
      var cp=CAP[k];setT('vrJrN','Step '+(k+1)+' of 6');setT(hdT,cp[0]);$id('vrJrCi').innerHTML=cp[1];setT('vrJrCb',cp[2]);setT('vrJrCs',cp[3]);
      if(!R){[hdT,cap].forEach(function(e){restart(e,'sw');});}}
    var bigVis=false,lastRf='';
    function tick(t,dt){
      var big=jv.offsetParent!==null&&bigVis;
      if(big){if(cv.clientWidth!==W||cv.clientHeight!==H)sizeBig();
        pS+=(pT-pS)*(1-Math.exp(-dt/150));if(Math.abs(pT-pS)<.001)pS=pT;
        steps(clamp(Math.round(pS),0,NL-1));var rfs='scaleY('+(pS/(NL-1)).toFixed(3)+')';if(rfs!==lastRf){rf.style.transform=rfs;lastRf=rfs;}
        draw(ctx,W,H,pS,t,H*.17,H*.8,false);}
      mini.forEach(function(o){if(!o.vis||!o.el.offsetParent)return;sizeMini(o);if(o.W)draw(o.ctx,o.W,o.H,o.k,t,o.H*.12,o.H*.9,true);});
    }
    addEventListener('scroll',measure,{passive:true});addEventListener('resize',function(){measure();sizeBig();});
    measure();pS=pT;sizeBig();steps(clamp(Math.round(pS),0,NL-1));
    if(R){var stat=function(){measure();pS=Math.round(pT);steps(pS);sizeBig();if(W)draw(ctx,W,H,pS,0,H*.17,H*.8,false);rf.style.transform='scaleY('+(pS/(NL-1))+')';mini.forEach(function(o){sizeMini(o);if(o.W)draw(o.ctx,o.W,o.H,o.k,0,o.H*.12,o.H*.9,true);});};
      addEventListener('scroll',stat,{passive:true});addEventListener('resize',stat);stat();return;}
    var on=loop(tick);XH.whenVisible(jr,function(v){bigVis=v;on(v);});
  })();

  /* =========================================================
     6. Platform modules — tabs with morphing mock screens
     ========================================================= */
  (function(){
    var md=$id('vrMd');if(!md)return;
    var tabs=$id('vrMdT'),tx=$id('vrMdTx'),mks=$$('.mk',md),btns=$$('button',tabs);
    var TX={
      seo:['SEO','Audit the site for Google and AI crawlers, research keywords and track ranks against your competitors.',[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 012-2h2M17 3h2a2 2 0 012 2v2M21 17v2a2 2 0 01-2 2h-2M7 21H5a2 2 0 01-2-2v-2M3 12h18"/></svg>','Site audit for Google & AI crawlers'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>','Keyword research & rank tracking'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/></svg>','Competitor & keyword gap'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>','Backlinks gained and lost']]],
      ai:['AI Visibility','Track the prompts buyers ask across four AI engines and see who gets mentioned — you or a competitor.',[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a8 8 0 01-11.6 7.1L3 21l1.9-6.4A8 8 0 1121 12z"/></svg>','Prompt tracking: ChatGPT, Perplexity, Gemini, AI Overviews'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 10V8M11 6h2M17 6h2M3 21l12-12"/></svg>','AEO / GEO fixes per page'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3.5"/><path d="M2 20a7 7 0 0114 0M17 11a3 3 0 000-6M22 20a6 6 0 00-4-5.6"/></svg>','Mentions vs competitors'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 007 0l3-3a5 5 0 00-7-7l-1 1M14 11a5 5 0 00-7 0l-3 3a5 5 0 007 7l1-1"/></svg>','Sources each engine cites']]],
      loc:['Local SEO','Keep your Google Business Profile in shape, see your map rank around each location and answer reviews fast.',[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/></svg>','Google Business Profile & listings'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>','Geogrid map-rank tracking'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3 6.5 7 .8-5.2 4.8L18 21l-6-3.5L6 21l1.2-6.9L2 9.3l7-.8z"/></svg>','Review analysis & AI-drafted replies'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="13" rx="1.5"/><path d="M12 16v5M8 21h8M7 11l3-3 3 3 4-4"/></svg>','Reports per location']]],
      con:['Content','An AI SEO writer that drafts from your own site and documents, with a source for every claim.',[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M8 13h8M8 17h6"/></svg>','Writer with sources from your site & docs'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 14l4-4"/><path d="M3.3 17a9 9 0 1117.4 0"/></svg>','Content scoring before you publish'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>','Calendar & approvals'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21V9M7 14l5-5 5 5M4 3h16"/></svg>','One-click WordPress publishing']]],
      li:['LinkedIn','Write company-page posts in your brand voice, schedule them for the best times and track results.',[['<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 005 0 2.5 2.5 0 00-2.52-2.5zM3 8.5h4V21H3zM9 8.5h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4 0 4.75 2.6 4.75 6V21H17.4v-5.5c0-1.3 0-3-1.85-3s-2.14 1.4-2.14 2.9V21H9z"/></svg>','AI post writer in brand voice'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>','Best time to post'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 9h18M8 3v4M16 3v4"/></svg>','Scheduling'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></svg>','Post analytics']]],
      ads:['Ads add-on · Muse','An ads assistant that writes copy and images and publishes to Meta and Google Ads. Sold as an add-on.',[['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 4V2M15 10V8M11 6h2M17 6h2M3 21l12-12"/></svg>','Ad copy & AI images'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>','Publish to Meta & Google Ads'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4h12M6 9h12M15 20L8 13h2a4 4 0 000-8"/></svg>','Spend, clicks and cost per result'],['<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 11-3-6.7L21 8"/><path d="M21 3v5h-5"/></svg>','Variants to test']]]
    };
    /* mini geogrid + heatmap */
    var gg=$id('vrMkGg');if(gg){var gr=rng(3),h='';for(var i=0;i<25;i++){var x=i%5-2,y=Math.floor(i/5)-2,dd=Math.sqrt(x*x+y*y),rk=Math.max(1,Math.round(1+dd*2.6+gr()*3)),c=rk<=3?'#16a34a':rk<=10?'#1565D8':rk<=20?'#FF8C1A':'#c0392b';h+='<i style="--c:'+c+';--k:'+Math.round(dd*4+gr()*2)+'"'+(i===12?' class="me"':'')+'>'+(rk>20?'20+':rk)+'</i>';}gg.innerHTML=h;}
    var hm=$id('vrMkHm');if(hm){var hr=rng(8),hh='';for(var k=0;k<42;k++){var col=k%7,row=Math.floor(k/7),a=.12+.5*hr()*(col<5?1:.4)*(row===1||row===4?1.5:1);hh+='<i style="--a:'+Math.min(.9,a).toFixed(2)+';--k:'+k+'"'+(k===8||k===29?' class="hot"':'')+'></i>';}hm.innerHTML=hh;}
    var cur='seo',auto=!R,vis=false,el=0,PER=7000,pg=d.createElement('span');pg.className='pg';
    function count(m){$$('[data-to]',m).forEach(function(b){var to=+b.getAttribute('data-to'),pre=b.getAttribute('data-pre')||'';b._v=0;tween(b,to,function(x){return pre+fmt(x);},1300);});}
    function text(k){var t=TX[k];tx.innerHTML='<h3>'+t[0]+'</h3><p>'+t[1]+'</p><ul>'+t[2].map(function(l,i){return '<li style="--k:'+i+'"><i>'+l[0]+'</i><span>'+l[1]+'</span></li>';}).join('')+'</ul><span class="src">Features as described by Veritas · screens are illustrative</span>';restart(tx,'sw');}
    var adT=0,adV=0;
    function show(k,user){if(user)auto=false;var prev=cur;cur=k;el=0;
      btns.forEach(function(b){var o=b.getAttribute('data-m')===k;b.classList.toggle('on',o);b.setAttribute('aria-selected',o);if(o&&auto)b.appendChild(pg);});
      if(!auto&&pg.parentNode)pg.parentNode.removeChild(pg);
      ulMove(tabs);text(k);
      mks.forEach(function(m){var o=m.getAttribute('data-m')===k;m.classList.remove('out');if(!o&&m.classList.contains('on')){m.classList.add('out');}m.classList.toggle('on',o);if(!o)m.classList.remove('go');});
      var m=$('.mk[data-m="'+k+'"]',md);if(R){m.classList.add('go');$$('[data-t]',m).forEach(function(e){e.textContent=e.getAttribute('data-t');});$$('[data-to]',m).forEach(function(b){b.textContent=(b.getAttribute('data-pre')||'')+fmt(+b.getAttribute('data-to'));});return;}
      requestAnimationFrame(function(){requestAnimationFrame(function(){m.classList.add('go');});});
      count(m);$$('[data-t]',m).forEach(function(e,i){e.textContent='';typeIn(e,k==='con'?2000:1500);});
      if(k==='ads'){adT=0;adV=0;}
    }
    tabs.addEventListener('click',function(e){var b=e.target.closest('button[data-m]');if(b)show(b.getAttribute('data-m'),true);});
    tabs.addEventListener('keydown',function(e){if(e.key!=='ArrowRight'&&e.key!=='ArrowLeft')return;var i=btns.findIndex(function(b){return b.classList.contains('on');}),n=(i+(e.key==='ArrowRight'?1:-1)+btns.length)%btns.length;btns[n].focus();show(btns[n].getAttribute('data-m'),true);});
    addEventListener('resize',function(){ulMove(tabs);});
    var vv=$$('.mk-ads .vv span',md),hl=$('.mk-ads .hl .ty',md),HL=['GST filing for startups — done in 3 days','Your first GST return, filed by a CA','Startup compliance, one fixed fee'];
    var on=onView(md,function(t,dt){if(auto){el+=dt;pg.style.transform='scaleX('+Math.min(1,el/PER).toFixed(3)+')';if(el>=PER){var i=btns.findIndex(function(b){return b.classList.contains('on');});show(btns[(i+1)%btns.length].getAttribute('data-m'));}}
      if(cur==='ads'){adT+=dt;if(adT>2600){adT=0;adV=(adV+1)%3;vv.forEach(function(s,i){s.classList.toggle('on',i===adV);});hl.setAttribute('data-t',HL[adV]);typeIn(hl,900);}}});
    XH.whenVisible(md,function(v){if(v&&!vis){vis=true;show('seo');}});
    ulMove(tabs);text('seo');
  })();

  /* =========================================================
     7. Analyze my site — demo scan (illustrative)
     ========================================================= */
  var lastCheck=null;
  (function(){
    var f=$id('vrCkF');if(!f)return;
    var out=$id('vrCkO'),dIn=$id('ckD'),cIn=[$id('ckC1'),$id('ckC2'),$id('ckC3')],pIn=$id('ckP'),crB=$id('ckCrB'),crN=$id('ckCrN'),crP=$id('ckCrP'),dn=$id('ckDn'),dl=$id('ckDl'),de=$id('ckDe2'),kw=$id('ckKw'),il=$id('ckIl');
    var NC=72;crP.innerHTML=new Array(NC+1).join('<i></i>');var cells=$$('i',crP);
    var SEGC=['#FF8C1A','#1565D8','#7fb0ff','#3a5a94','#23406f'];
    var SNS='http://www.w3.org/2000/svg',segs=[];for(var k=0;k<5;k++){var c=d.createElementNS(SNS,'circle');c.setAttribute('class','sg');c.setAttribute('cx','70');c.setAttribute('cy','70');c.setAttribute('r','52');c.setAttribute('pathLength','100');c.setAttribute('stroke',SEGC[k]);dn.appendChild(c);segs.push(c);}
    var ENGN=['ChatGPT','Perplexity','Gemini','AI Overv.'];
    de.innerHTML=ENGN.map(function(e){return '<span><em><i></i></em>'+e+' <b>0%</b></span>';}).join('');var deI=$$('em i',de),deB=$$('b',de);
    $('#ckS').addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;pIn.value=b.textContent;pIn.focus();});
    var ISS=[['e','Pages blocked to AI crawlers in robots rules','robots'],['e','Broken internal links','links'],['w','Slow largest contentful paint on mobile','speed'],['a','No structured data on service pages','schema'],['a','Answers buried below the fold','AEO'],['w','Duplicate title tags','titles'],['a','No FAQ for common buyer questions','FAQ'],['e','Missing canonical tags','canonical'],['w','Images without alt text','images'],['a','No plain-text brand summary page','GEO']];
    var S=null,T=0,running=false;
    function clean(v){return String(v||'').trim().replace(/^https?:\/\//i,'').replace(/^www\./i,'').replace(/\/.*$/,'').toLowerCase();}
    function core(p){var stop={best:1,top:1,for:1,in:1,near:1,me:1,the:1,a:1,an:1,of:1,with:1,to:1,'2026':1,good:1,which:1,who:1,is:1,open:1};return p.toLowerCase().split(/\s+/).filter(function(w){return w&&!stop[w];}).slice(0,4).join(' ')||p.toLowerCase();}
    function setup(){var dom=clean(dIn.value),ok=/^[a-z0-9-]+(\.[a-z0-9-]+)+$/.test(dom);dIn.closest('.fld').classList.toggle('bad',!ok);if(!ok){dIn.focus();return null;}
      var comp=cIn.map(function(x,i){return (x.value||'').trim().slice(0,28)||('Competitor '+'ABC'[i]);}),pr=(pIn.value||'').trim().slice(0,80)||'best ca firm for startups in pune',r=rng(hash(dom+'|'+comp.join('|')+'|'+pr));
      var pages=Math.round(60+r()*180),pool=ISS.slice().sort(function(){return r()-.5;}).slice(0,6).map(function(x){return [x[0],x[1],x[2],Math.max(1,Math.round(r()*(x[0]==='e'?14:24)))];});
      var e=0,w=0,a=0;pool.forEach(function(x){if(x[0]==='e')e+=x[3];else if(x[0]==='w')w+=x[3];else a+=x[3];});
      var me=8+Math.round(r()*20),c1=22+Math.round(r()*18),c2=12+Math.round(r()*14),c3=6+Math.round(r()*12),ot=Math.max(4,100-me-c1-c2-c3);var sum=me+c1+c2+c3+ot;
      var sv=[me,c1,c2,c3,ot].map(function(v){return Math.round(v/sum*1000)/10;});
      var eng=[0,1,2,3].map(function(){return clamp(Math.round(me/sum*100+(r()-.5)*18),2,60);});
      var cr=core(pr),kws=[[pr,0],[cr+' fees',0],[cr+' near me',0],['how to choose '+cr,1],[cr+' vs '+comp[0].toLowerCase(),1]].map(function(k){return {k:k[0],v:Math.round((200+r()*5800)/10)*10,d:Math.round(15+r()*70),g:k[1]?'AI answer gap':r()<.5?'competitor ranks':'not ranking'};});
      return {dom:dom,comp:comp,pr:pr,pages:pages,pool:pool,e:e,w:w,a:a,sv:sv,eng:eng,kws:kws,r:r,cellC:cells.map(function(){var q=r();return q<.68?'ok':q<.82?'w':q<.92?'a':'e';})};}
    function donut(S,p){var off=0;segs.forEach(function(c,k){var v=S?S.sv[k]*p:0;c.setAttribute('stroke-dasharray',v.toFixed(2)+' '+(100-v).toFixed(2));c.setAttribute('stroke-dashoffset',(-off).toFixed(2));off+=v;});}
    function legend(S){var nm=['You · '+S.dom].concat(S.comp).concat(['Others']);dl.innerHTML=nm.map(function(n,k){return '<span><i style="background:'+SEGC[k]+'"></i><s>'+esc(n)+'</s><b>'+S.sv[k]+'%</b></span>';}).join('');}
    function start(){var s=setup();if(!s)return;S=s;lastCheck=s;T=0;running=true;
      out.classList.remove('done');out.classList.add('run');setT('ckSt','');$id('ckSt').innerHTML='<i></i>Scanning';setT('ckDm',s.dom);
      cells.forEach(function(c){c.className='';});il.innerHTML='';kw.innerHTML='<tr class="ph"><td colspan="4">Looking for opportunities…</td></tr>';
      ['ckI0','ckI1','ckI2','ckSv'].forEach(function(id){var e=$id(id);e._v=0;e.textContent=id==='ckSv'?'0%':'0';});donut(null,0);dl.innerHTML='';deI.forEach(function(i){i.style.transform='scaleX(0)';});deB.forEach(function(b){b.textContent='0%';});
      if(R){T=5000;step(0);}else runOn(true);
      d.dispatchEvent(new CustomEvent('vr:check',{detail:s}));}
    var lastCell=-1,phase=0;
    function step(dt){T+=dt;var s=S;
      var cu=clamp(T/2300,0,1),pn=Math.round(s.pages*eo(cu));setT(crN,pn+' / '+s.pages+' pages');crB.style.transform='scaleX('+eo(cu).toFixed(3)+')';
      var cn=Math.floor(cu*NC);for(var k=lastCell+1;k<=Math.min(cn,NC-1);k++){cells[k].className=s.cellC[k]+(k===cn&&!R?' hit':'');if(k>0&&cells[k-1])cells[k-1].classList.remove('hit');}lastCell=cn;
      if(T>400&&phase<1){phase=1;tween($id('ckI0'),s.e,fmt,1900);tween($id('ckI1'),s.w,fmt,1900);tween($id('ckI2'),s.a,fmt,1900);}
      if(T>2400&&phase<2){phase=2;cells.forEach(function(c){c.classList.remove('hit');});il.innerHTML=s.pool.slice(0,5).map(function(x,i){return '<li style="--k:'+i+'"><i class="'+x[0]+'"></i><span>'+esc(x[1])+'</span><em>'+x[3]+'</em></li>';}).join('');
        legend(s);requestAnimationFrame(function(){donut(s,1);});tween($id('ckSv'),s.sv[0],function(x){return (Math.round(x*10)/10)+'%';},1200);
        deI.forEach(function(i,k){i.style.transform='scaleX('+(s.eng[k]/60).toFixed(3)+')';});deB.forEach(function(b,k){b.textContent=s.eng[k]+'%';});}
      if(T>3300&&phase<3){phase=3;kw.innerHTML=s.kws.map(function(k,i){var col=k.d<40?'#16a34a':k.d<65?'#FF8C1A':'#c0392b';return '<tr style="--k:'+i+'"><td>'+esc(k.k)+'</td><td>'+fmt(k.v)+'</td><td><span class="df"><i style="width:'+k.d+'%;background:'+col+'"></i></span>'+k.d+'</td><td><span class="gp2'+(k.g==='AI answer gap'?' ai':'')+'">'+k.g+'</span></td></tr>';}).join('');}
      if(T>4200&&phase<4){phase=4;running=false;runOn(false);out.classList.remove('run');out.classList.add('done');$id('ckSt').innerHTML='<i></i>Demo complete';if(userRun)XH.toast('Demo scan complete — illustrative results');}
    }
    var runOn=loop(function(t,dt){if(running)step(dt);});
    var userRun=false;f.addEventListener('submit',function(e){e.preventDefault();lastCell=-1;phase=0;userRun=true;start();});
    var auto=false;XH.whenVisible(out,function(v){if(v&&!auto){auto=true;setTimeout(function(){if(!S){lastCell=-1;phase=0;start();}},R?0:500);}});
    dIn.addEventListener('input',function(){dIn.closest('.fld').classList.remove('bad');});
    $id('ckTr').addEventListener('click',function(){var s=lastCheck||setup()||{dom:clean(dIn.value),comp:cIn.map(function(x){return x.value;}),pr:pIn.value};prefill({website:s.dom,competitors:(s.comp||[]).join(', '),prompt:s.pr});});
  })();

  /* trial-form prefill (from check tool, plan cards, CTAs) */
  function prefill(o){var map={website:'trD',competitors:'trC',prompt:'trQ',plan:'trPl'};
    Object.keys(o).forEach(function(k){var el=$id(map[k]);if(!el||o[k]===undefined||o[k]==='')return;
      if(el.tagName==='SELECT'){$$('option',el).forEach(function(op){if(op.textContent.indexOf(o[k])===0)el.value=op.value||op.textContent;});}else el.value=o[k];
      var w=el.closest('.fi');if(w){w.classList.add('pre');setTimeout(function(){w.classList.remove('pre');},2600);}});
    var tr=$('.vr-tr');restart(tr,'flash');}

  /* =========================================================
     8. AI share-of-voice race (sample)
     ========================================================= */
  (function(){
    var sv=$id('vrSv');if(!sv)return;
    var rc=$id('vrSvRc'),tabs=$id('vrSvT'),wk=$id('vrSvW'),ev=$id('vrSvE'),sa=$id('vrSvSa'),sl=$id('vrSvSl');
    var NAMES=['Your brand','Competitor A','Competitor B','Competitor C'],COL=['#FF8C1A','#1565D8','#5FB3E8','#3a5a94'],INI=['Y','A','B','C'];
    var EVT=[[0,'Week 1 · tracking 40 buyer prompts across 4 engines'],[2,'Week 3 · schema and FAQ fixes go live'],[4,'Week 5 · four answer-first articles published'],[7,'Week 8 · you overtake Competitor A in AI answers'],[10,'Week 11 · cited for 3 new prompts']];
    function series(eng){var r=rng(17+(eng==='all'?0:+eng+1)*13),me=[],a=[],b=[],c=[];
      for(var w=0;w<12;w++){var u=w/11;me.push(clamp(10+30*(1/(1+Math.exp(-(u-.5)*8)))+(r()-.5)*3+(eng==='all'?0:(r()-.5)*6),3,60));a.push(clamp(33-6*u+(r()-.5)*3,5,60));b.push(clamp(22-2*u+(r()-.5)*3,4,60));c.push(clamp(14-3*u+(r()-.5)*2,3,60));}
      return [me,a,b,c];}
    rc.innerHTML=NAMES.map(function(n,i){return '<div class="rb'+(i===0?' me':'')+'" style="--c:'+COL[i]+'"><span class="nm2"><i>'+INI[i]+'</i><s>'+esc(n)+'</s></span><span class="tk2"><b></b><em></em></span>'+(i===0?'<span class="cr">#1 in AI answers</span>':'')+'</div>';}).join('');
    var RB=$$('.rb',rc).map(function(el){return {el:el,bar:$('.tk2 b',el),lab:$('.tk2 em',el),nm:$('.nm2 s',el),y:0,ly:'',lx:'',ls:''};});
    var DATA=series('all'),T=0,DUR=10800,done=false,evK=-1;
    function val(i,u){var x=u*11,k=Math.min(10,Math.floor(x)),f=x-k;return lerp(DATA[i][k],DATA[i][k+1],sstep(f));}
    function sstep(t){return t*t*(3-2*t);}
    function render(u,dt){var v=RB.map(function(_,i){return val(i,u);}),ord=v.map(function(x,i){return i;}).sort(function(a,b){return v[b]-v[a];}),slot=[];ord.forEach(function(i,k){slot[i]=k;});
      var mx=50,h=rc.clientHeight/4;
      RB.forEach(function(r,i){var ty=slot[i]*h,e=dt?1-Math.exp(-dt/180):1;r.y+=(ty-r.y)*e;var ys=r.y.toFixed(1);if(ys!==r.ly){r.el.style.transform='translateY('+ys+'px)';r.ly=ys;}
        var s=clamp(v[i]/mx,.02,1),ss=s.toFixed(4);if(ss!==r.ls){r.bar.style.transform='scaleX('+ss+')';r.ls=ss;}
        var lxs='min(calc('+(s*100).toFixed(2)+'% + 8px), calc(100% - 50px))';if(lxs!==r.lx){r.lab.style.left=lxs;r.lx=lxs;}r.lab.textContent=v[i].toFixed(1)+'%';});
      RB[0].el.classList.toggle('lead',slot[0]===0);
      var w=Math.min(12,Math.floor(u*11)+1);setT(wk,String(w));
      var ek=-1;EVT.forEach(function(e,k){if(w-1>=e[0])ek=k;});if(ek!==evK){evK=ek;if(ek>=0){ev.textContent=EVT[ek][1];restart(ev,'sw');}}
      var pts=[],n=Math.max(2,Math.floor(u*11)+2);for(var k=0;k<Math.min(12,n);k++){var kk=Math.min(k,u*11);pts.push([kk/11*200,70-DATA[0][k]/50*64]);}
      pts[pts.length-1]=[u*200,70-v[0]/50*64];
      var dl='M'+pts.map(function(p){return p[0].toFixed(1)+' '+p[1].toFixed(1);}).join(' L');sl.setAttribute('d',dl);sa.setAttribute('d',dl+' L'+pts[pts.length-1][0].toFixed(1)+' 70 L0 70Z');}
    function play(eng){DATA=series(eng);T=0;done=false;evK=-1;if(R){render(1,0);return;}on(true);}
    var on=loop(function(t,dt){T+=dt;var u=clamp(T/DUR,0,1);render(u,dt);if(u>=1&&!done){done=true;setTimeout(function(){on(false);},400);}});
    tabs.addEventListener('click',function(e){var b=e.target.closest('button[data-e]');if(!b)return;$$('button',tabs).forEach(function(x){x.classList.toggle('on',x===b);});ulMove(tabs);play(b.getAttribute('data-e'));});
    $id('vrSvR').addEventListener('click',function(){play(($('button.on',tabs)||{}).getAttribute?$('button.on',tabs).getAttribute('data-e'):'all');});
    d.addEventListener('vr:check',function(e){var s=e.detail;NAMES=[s.dom].concat(s.comp);RB.forEach(function(r,i){r.nm.textContent=NAMES[i];});});
    addEventListener('resize',function(){ulMove(tabs);});
    var seen=false;XH.whenVisible(sv,function(v){ulMove(tabs);if(v&&!seen){seen=true;play('all');}});
    render(0,0);
  })();

  /* =========================================================
     9. Geogrid — stylised Mumbai map with rank pins
     ========================================================= */
  (function(){
    var svg=$id('vrGgS');if(!svg)return;
    var NS='http://www.w3.org/2000/svg';
    function el(t,a,p){var e=d.createElementNS(NS,t);for(var k in a)e.setAttribute(k,a[k]);(p||svg).appendChild(e);return e;}
    /* stylised west coast: x of coastline at given y */
    var COAST=[[0,150],[40,132],[80,118],[120,128],[150,108],[185,96],[215,112],[250,92],[290,84],[330,100],[360,86],[400,76],[440,70]];
    function coastX(y){for(var i=1;i<COAST.length;i++){if(y<=COAST[i][0]){var a=COAST[i-1],b=COAST[i],f=(y-a[0])/(b[0]-a[0]);return a[1]+(b[1]-a[1])*f;}}return 70;}
    el('rect',{x:0,y:0,width:520,height:440,class:'sea'});
    el('path',{class:'land',d:'M520 0 L'+COAST.map(function(p){return p[1]+' '+p[0];}).join(' L')+' L520 440 Z'});
    /* creek + lake (stylised) */
    el('path',{class:'sea',d:'M150 108 C190 118 230 104 262 112 C240 122 200 124 165 120 Z'});
    el('ellipse',{class:'sea',cx:430,cy:268,rx:28,ry:18});
    /* roads */
    el('path',{class:'rd m',d:'M300 0 C305 120 296 220 310 440'});
    el('path',{class:'rd',d:'M232 0 C236 140 214 260 222 440'});
    el('path',{class:'rd',d:'M175 140 C170 230 160 330 150 440'});
    el('path',{class:'rd',d:'M150 200 C260 210 360 200 520 236'});
    el('path',{class:'rd',d:'M190 330 C300 320 400 330 520 300'});
    [['GOREGAON',330,40],['ANDHERI W',150,161],['ANDHERI E',330,253],['POWAI',400,345],['BANDRA',176,420],['ARABIAN SEA',14,300]].forEach(function(l){var t=el('text',{x:l[1],y:l[2],class:'lb2'});t.textContent=l[0];});
    var CX=262,CY=226,SP=56,G=[];
    var pins=el('g',{});
    for(var j=-3;j<=3;j++)for(var i=-3;i<=3;i++){var x=CX+i*SP,y=CY+j*SP*.82;if(x<coastX(y)+10||x<12||x>508||y<14||y>426)continue;var dd=Math.sqrt(i*i+j*j);
      var g=el('g',{class:'pin',transform:'translate('+x+' '+y+')'},pins),c=el('circle',{r:14,fill:'#3a5a94'},g),t=el('text',{},g);G.push({g:g,c:c,t:t,d:dd,i:i,j:j,x:x,y:y,rk:0,scale:1});}
    var me=el('g',{class:'me',transform:'translate('+CX+' '+(CY)+')'});var rp=el('circle',{class:'rp2',r:20},me);el('circle',{class:'c2',r:10},me);el('path',{d:'M0 -6 a6 6 0 1 1 -.01 0 Z'},me);
    G=G.filter(function(p){return !(p.i===0&&p.j===0);});
    var BASE=[[3.2,5.2],[2.4,4.4],[4.2,6.4]],AFT=[[1,2.1],[1,1.8],[1.4,2.8]];
    var K=0,V='a',lastAt=-1;
    function rank(p,k,v){var r=rng(hash('g'+k+'|'+p.i+'|'+p.j)),b=v==='a'?AFT[k]:BASE[k];return Math.round(clamp(b[0]+p.d*b[1]+(r()-.4)*3,1,21));}
    function col(rk){return rk<=3?'#16a34a':rk<=10?'#1565D8':rk<=20?'#FF8C1A':'#c0392b';}
    var an=[];
    function apply(anim){var sum=0,top=0,out=0;G.forEach(function(p){var rk=rank(p,K,V);p.to=rk;sum+=Math.min(rk,21);if(rk<=3)top++;if(rk>20)out++;
        if(!anim||R){p.c.setAttribute('fill',col(rk));p.t.textContent=rk>20?'20+':String(rk);p.g.style.transform='';}else{p.at=performance.now()+p.d*110;p.done=false;}});
      tween($id('vrGgA'),Math.round(sum/G.length*10)/10,function(x){return (Math.round(x*10)/10).toFixed(1);});tween($id('vrGgT'),top,fmt);tween($id('vrGgN'),out,fmt);
      if(anim&&!R){lastAt=performance.now();on(true);}}
    var on=loop(function(t){var now=performance.now(),any=false;
      G.forEach(function(p){if(p.done)return;var u=(now-p.at)/520;if(u<0){any=true;return;}if(u>=1){p.done=true;p.g.style.transform='';return;}any=true;
        if(u>.35&&p.t.textContent!==(p.to>20?'20+':String(p.to))){p.c.setAttribute('fill',col(p.to));p.t.textContent=p.to>20?'20+':String(p.to);}
        var s=u<.35?1-u/.35*.6:.4+.6*spring((u-.35)/.65*1.2);p.g.style.transform='scale('+s.toFixed(3)+')';});
      var ru=(now-lastAt)/1400;if(ru<1){rp.setAttribute('r',(20+ru*200).toFixed(1));rp.style.opacity=(1-ru).toFixed(2);any=true;}else rp.style.opacity='0';
      if(!any)on(false);});
    G.forEach(function(p){p.g.style.transformBox='fill-box';p.g.style.transformOrigin='center';});
    $id('vrGgK').addEventListener('change',function(e){K=+(this.dataset.value||0);apply(true);});
    $id('vrGgV').addEventListener('change',function(e){V=this.dataset.value||'a';apply(true);});
    $id('vrGgK').dataset.value='0';$id('vrGgV').dataset.value='a';
    apply(false);
    var seen=false;XH.whenVisible(svg,function(v){if(v&&!seen){seen=true;V='b';apply(false);setTimeout(function(){V='a';apply(true);},900);}});
  })();

  /* =========================================================
     10. Plan finder
     ========================================================= */
  var loadPlan=function(){};
  (function(){
    var pf=$id('vrPf');if(!pf)return;
    var cols=$id('vrPfC'),IN={kw:$id('pfK'),cp:$id('pfC'),pr:$id('pfP'),ws:$id('pfW'),us:$id('pfU')},TG={loc:$id('pfL'),li:$id('pfLi'),bl:$id('pfB')};
    var MET=[['kw','keywords'],['cp','competitors'],['pr','AI prompts'],['ws','websites'],['us','users']],FT=[['loc','Local SEO'],['li','LinkedIn'],['bl','Backlinks']];
    cols.innerHTML=PK.map(function(k){var p=PLANS[k];return '<div class="pc2" data-k="'+k+'"><span class="fl">best fit</span><span class="hd">'+p.n+'</span><span class="p">'+(k==='mp'?'Custom':XH.inr(P[k+'-a'])+'/mo · annual')+'</span><div class="mt2">'+MET.map(function(m){return '<span data-m="'+m[0]+'">'+m[1]+' · '+(p[m[0]]>1e8?'∞':p[m[0]])+'<em><i></i></em></span>';}).join('')+'</div><div class="ft">'+FT.map(function(f){return '<span data-f="'+f[0]+'"><i></i>'+f[1]+'</span>';}).join('')+'</div></div>';}).join('');
    var rec='gr';
    function calc(){var need={};MET.forEach(function(m){need[m[0]]=+IN[m[0]].value;setT('pf'+{kw:'Kl',cp:'Cl',pr:'Pl',ws:'Wl',us:'Ul'}[m[0]],fmt(need[m[0]]));});FT.forEach(function(f){need[f[0]]=TG[f[0]].checked?1:0;});
      var best=null;PK.forEach(function(k){var p=PLANS[k],ok=true,c=$('.pc2[data-k="'+k+'"]',cols);
        MET.forEach(function(m){var lim=p[m[0]],u=lim>1e8?Math.min(.35,need[m[0]]/1000):need[m[0]]/lim,i=$('[data-m="'+m[0]+'"] i',c),over=need[m[0]]>lim;if(over)ok=false;i.style.transform='scaleX('+Math.min(1,u).toFixed(3)+')';i.classList.toggle('ov',over);$('[data-m="'+m[0]+'"]',c).classList.toggle('x2',over);});
        FT.forEach(function(f){var s=$('[data-f="'+f[0]+'"]',c),has=!!p[f[0]];s.className=need[f[0]]?(has?'y':'n'):'';$('i',s).textContent=need[f[0]]?(has?'✓':'×'):'';if(need[f[0]]&&!has)ok=false;});
        c.classList.toggle('no',!ok);if(ok&&!best)best=k;});
      best=best||'mp';$$('.pc2',cols).forEach(function(c){c.classList.toggle('rec',c.getAttribute('data-k')===best);});
      var n=$id('vrPfN');if(best!==rec){rec=best;n.textContent=PLANS[best].n;restart(n,'sw');}else setT(n,PLANS[best].n);
      setT('vrPfW','covers '+fmt(need.kw)+' keywords, '+need.cp+' competitor'+(need.cp>1?'s':'')+', '+need.pr+' prompt'+(need.pr>1?'s':'')+' and '+need.us+' user'+(need.us>1?'s':'')+(best==='mp'?' — quoted per engagement':''));}
    Object.keys(IN).forEach(function(k){IN[k].addEventListener('input',calc);});Object.keys(TG).forEach(function(k){TG[k].addEventListener('change',calc);});
    $id('vrPfGo').addEventListener('click',function(){loadPlan(rec,true);});
    calc();
  })();

  /* =========================================================
     11. Pricing — billing toggle, plan cards, comparison table, configurator, cart
     ========================================================= */
  (function(){
    if(!$id('configure'))return;
    var pl=$id('vrPl'),bill=$id('vrBill'),cPlan=$id('cPlan'),cBill=$id('cBill'),wsN=$id('cWsN'),cOnb=$id('cOnb'),cMng=$id('cMng'),cGeo=$id('cGeo'),add=$id('oAdd'),cout=$('.cout',$id('configure')),lines=[];
    pl.innerHTML=PK.map(function(k,i){var p=PLANS[k];return '<button type="button" class="pc k'+i+'" data-p="'+k+'" role="radio" aria-checked="false" style="--k:'+i+'">'+(p.rec?'<span class="fl">recommended</span>':'')+
      '<span class="pn"><i>'+p.ic+'</i><b>'+p.n+'</b></span><span class="gb">'+p.u+' · '+p.s+'</span><span class="pr" data-pp="'+k+'">'+(k==='mp'?'Custom':'₹0')+(k==='mp'?'':' <small>/ month</small>')+'</span><span class="ob" data-po="'+k+'"></span>'+
      '<ul>'+p.f.map(function(f){return '<li><i><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg></i>'+f+'</li>';}).join('')+'</ul><span class="ck2">'+(k==='mp'?'Get a quotation →':'Choose '+p.n+' →')+'</span></button>';}).join('');
    XH.whenVisible(pl,function(v){if(v)pl.classList.add('in');});if(R)pl.classList.add('in');
    /* comparison table stagger vars + reveal */
    var ct=$id('vrCt');$$('#vrCtT tbody tr').forEach(function(tr,ri){tr.style.setProperty('--r',ri);$$('td',tr).forEach(function(td,ci){td.style.setProperty('--c',ci);td.style.setProperty('--r',ri);});});
    XH.whenVisible(ct,function(v){if(v)ct.classList.add('go');});if(R)ct.classList.add('go');
    function seg(el,v){el.dataset.value=String(v);$$('button',el).forEach(function(b){b.classList.toggle('on',b.getAttribute('data-v')===String(v));});}
    function st(){return {p:cPlan.dataset.value||'gr',b:cBill.dataset.value||'a',n:clamp(Math.round(+wsN.value||1),1,50),onb:cOnb.checked,mng:cMng.checked,geo:cGeo.checked};}
    var SEGC={plan:'#1565D8',mng:'#16a34a',one:'#FF8C1A'},SEGN={plan:'Veritas plan',mng:'Managed service',one:'One-time services'};
    var prevB=null;
    function cards(b){PK.forEach(function(k){if(k==='mp'){$('[data-po="mp"]',pl).textContent='quoted per engagement';return;}
      var pp=$('[data-pp="'+k+'"]',pl),v=P[k+'-'+b];if(!pp._b){pp._b=1;pp.innerHTML='<span>₹0</span> <small>/ month</small>';}tween($('span',pp),v,function(x){return XH.inr(x);},600);
      if(prevB&&prevB!==b)restart(pp,'flip');
      $('[data-po="'+k+'"]',pl).innerHTML=b==='a'?'<s>'+XH.inr(P[k+'-m'])+'</s> · billed '+XH.inr(v*12)+' / yr · <b>save '+XH.inr((P[k+'-m']-v)*12)+'</b>':'or '+XH.inr(P[k+'-a'])+' / mo billed annually';});prevB=b;}
    function calc(fl){
      var s=st(),p=PLANS[s.p],q=s.p==='mp',ann=s.b==='a',mo=ann?12:1,n=s.n;
      seg(bill,s.b);setT('cPlL',p.n);setT('cBiL',ann?'Annual · −20% · 12 months upfront':'Monthly');setT('cWsL',n+(n>1?' brands / clients':' brand / client'));
      cBill.classList.toggle('dis',q);
      lines=[];
      if(!q){var pm=P[s.p+'-'+s.b];lines.push({key:'veritas-'+s.p+'-'+s.b,name:'Veritas '+p.n+' — '+(ann?'annual (12 months)':'monthly'),sub:n+' workspace'+(n>1?'s':'')+' × '+mo+' month'+(mo>1?'s':'')+' · Veritas list price',price:pm,qty:n*mo,lab:'Veritas '+p.n+' · '+n+' × '+mo+' mo',sm:XH.inr(pm)+' / workspace / month',g:'plan',m:pm*n});}
      if(s.onb)lines.push({key:'veritas-onboarding',name:'Veritas onboarding & setup (XcellHost)',sub:n+' workspace'+(n>1?'s':'')+' · one-time · indicative',price:P.onb,qty:n,lab:'Onboarding & setup × '+n,sm:'one-time',g:'one',o:1});
      if(s.mng)lines.push({key:'veritas-managed',name:'Managed AI-visibility service (XcellHost)',sub:n+' × '+mo+' month'+(mo>1?'s':'')+' · indicative',price:P.mng,qty:n*mo,lab:'Managed AI visibility · '+n+' × '+mo+' mo',sm:XH.inr(P.mng)+' / month',g:'mng',m:P.mng*n});
      if(s.geo)lines.push({key:'veritas-geo-sprint',name:'GEO / AEO website fix sprint (XcellHost)',sub:n+' workspace'+(n>1?'s':'')+' · one-time · indicative',price:P.geo,qty:n,lab:'GEO / AEO fix sprint × '+n,sm:'one-time',g:'one',o:1});
      var now=lines.reduce(function(a,l){return a+l.price*l.qty;},0),one=lines.reduce(function(a,l){return a+(l.o?l.price*l.qty:0);},0),mon=lines.reduce(function(a,l){return a+(l.m||0);},0),save=!q&&ann?(P[s.p+'-m']-P[s.p+'-a'])*12*n:0;
      cout.classList.toggle('quote',q);add.classList.toggle('hide',q);add.disabled=q;$id('oQuo').classList.toggle('btn-orange',q);$id('oQuo').classList.toggle('btn-line',!q);
      if(q){var t=$id('oTot');delete tweens[t._tw];t._v=undefined;t.textContent='Custom quote';setT('oSub','Marketing Plus is priced per engagement — add-ons shown below');}
      else{tween($id('oTot'),now,function(x){return XH.inr(x);});setT('oSub','due now, excl. GST · '+(ann?'annual: per-month × 12, charged upfront':'billed monthly'));}
      var rh=(q?'<div class="crow"><span>Veritas Marketing Plus<small>quoted per engagement</small></span><b>Custom</b></div>':'')+lines.map(function(l){return '<div class="crow"><span>'+l.lab+'<small>'+l.sm+'</small></span><b>'+XH.inr(l.price*l.qty)+'</b></div>';}).join(''),oR=$id('oRows');if(oR._h!==rh){oR._h=rh;oR.innerHTML=rh;}
      setT('oMo',XH.inr(mon)+(q?' + plan':''));setT('oOne',XH.inr(one));setT('oSv',XH.inr(save));$id('oSvR').classList.toggle('off',!save);
      setT('oNow',XH.inr(now)+(q?' + plan':''));setT('oGst',XH.inr(now*.18));setT('oPay',XH.inr(now*1.18)+(q?' + plan':''));
      var grp={},tot=now||1;lines.forEach(function(l){grp[l.g]=(grp[l.g]||0)+l.price*l.qty;});
      var cb=$id('oCb'),keys=['plan','mng','one'];if(!cb._b){cb.innerHTML=keys.map(function(k){return '<i data-g="'+k+'" style="background:'+SEGC[k]+'"></i>';}).join('');cb._b=1;}
      keys.forEach(function(k){$('i[data-g="'+k+'"]',cb).style.width=((grp[k]||0)/tot*100).toFixed(2)+'%';});
      $id('oCbL').innerHTML=keys.filter(function(k){return grp[k];}).map(function(k){return '<span><i style="background:'+SEGC[k]+'"></i>'+SEGN[k]+' '+Math.round(grp[k]/tot*100)+'%</span>';}).join('');
      setT('oSh',n>1?XH.inr(now/n)+' per workspace':(ann&&!q?'12 months covered':'—'));
      /* plan cards + ez-card */
      cards(s.b);
      $$('.pc',pl).forEach(function(b){var o=b.getAttribute('data-p')===s.p;b.classList.toggle('on',o);b.setAttribute('aria-checked',o);});
      setT('pcName',p.n);setT('pcSku',p.s+' · per workspace');setT('pcUs',p.u);setT('pcBl',ann?'Annual':'Monthly');
      if(q){setT('pcFrom','Custom');['pcM','pcY'].forEach(function(id){var e=$id(id);delete tweens[e._tw];e._v=undefined;e.textContent='Custom';});setT('pcSvL','Pricing');setT('pcPill','per engagement');}
      else{setT('pcFrom',XH.inr(P[s.p+'-a'])+' / month');tween($id('pcM'),P[s.p+'-'+s.b],function(x){return XH.inr(x);});tween($id('pcY'),P[s.p+'-'+s.b]*12,function(x){return XH.inr(x);});
        setT('pcSvL',ann?'Annual saving':'Switch to annual, save');setT('pcPill',XH.inr((P[s.p+'-m']-P[s.p+'-a'])*12)+' / yr');}
      if(fl){XH.flash($id('oTot'));XH.flash($id('pcName'));}
    }
    loadPlan=function(k,scroll){seg(cPlan,k);calc(true);if(scroll){var c=$id('configure');parent.scrollTo({top:parent.scrollY+frameElement.getBoundingClientRect().top+c.getBoundingClientRect().top-148,behavior:R?'auto':'smooth'});XH.toast(PLANS[k].n+' loaded in the configurator');}};
    pl.addEventListener('click',function(e){var b=e.target.closest('.pc[data-p]');if(!b)return;var k=b.getAttribute('data-p');if(k==='mp'){seg(cPlan,k);calc(true);XH.open('xhCallback',{topic:'Veritas — Marketing Plus quotation'});return;}loadPlan(k,false);});
    bill.addEventListener('change',function(){seg(cBill,bill.dataset.value||'a');calc(true);});
    [cPlan,cBill].forEach(function(x){x.addEventListener('change',function(){calc(true);});});
    [cOnb,cMng,cGeo].forEach(function(x){x.addEventListener('change',function(){calc(true);});});
    wsN.addEventListener('input',function(){calc(false);});
    add.addEventListener('click',function(){if(add.disabled)return;lines.forEach(function(l){XH.cart.add({key:l.key,name:l.name,sub:l.sub,price:l.price,qty:l.qty});});});
    /* trial links carry the current plan */
    $$('[data-trial]').forEach(function(a){a.addEventListener('click',function(){var k=cPlan.dataset.value||'gr';if(a.closest('#pricing'))prefill({plan:PLANS[k].n});});});
    seg(cPlan,'gr');seg(cBill,'a');seg(bill,'a');calc(false);
  })();

  /* =========================================================
     12. Partner hub — client workspaces wired to one login
     ========================================================= */
  (function(){
    var hub=$id('vrHub');if(!hub)return;var g=$id('vrHubL'),ws=$$('.ws',hub),NS='http://www.w3.org/2000/svg',P2=[[.14,.22],[.86,.2],[.1,.78],[.9,.8],[.5,.88]],paths=[],dots=[];
    ws.forEach(function(w,i){w.style.left=(P2[i][0]*100)+'%';w.style.top=(P2[i][1]*100)+'%';
      var p=d.createElementNS(NS,'path');p.setAttribute('d','M200 110 Q'+(200+(P2[i][0]*400-200)*.5)+' '+(P2[i][1]*220<110?40:180)+' '+(P2[i][0]*400)+' '+(P2[i][1]*220));g.appendChild(p);paths.push(p);
      var c=d.createElementNS(NS,'circle');c.setAttribute('r','3.5');c.style.opacity='0';g.appendChild(c);dots.push({c:c,p:p,ph:i*.2});});
    XH.whenVisible(hub,function(v){if(v)hub.classList.add('go');});if(R){hub.classList.add('go');return;}
    var Ls=null;onView(hub,function(t){if(!Ls)Ls=paths.map(function(p){return p.getTotalLength();});dots.forEach(function(o,i){var u=((t/2200)+o.ph)%1,pt=o.p.getPointAtLength((i%2?u:1-u)*Ls[i]);o.c.setAttribute('cx',pt.x.toFixed(1));o.c.setAttribute('cy',pt.y.toFixed(1));o.c.style.opacity=Math.sin(u*Math.PI).toFixed(2);});});
  })();

  /* =========================================================
     13. Marquee — seamless loop, paused off screen
     ========================================================= */
  (function(){var mq=$('.vr-mq');if(!mq)return;var m=$('.mq-m',mq);m.innerHTML+=m.innerHTML;$$('span',m).slice(m.children.length/2).forEach(function(s){s.setAttribute('aria-hidden','true');});
    XH.whenVisible(mq,function(v){mq.classList.toggle('paused',!v);});})();
})();

</script>
<script>
(function(){
 var title=document.querySelector('#vrHero .lh-title'),pending=0,lastWidth=-1;
 function fit(){
  pending=0;var width=title.clientWidth;if(!width)return;
  var maxSize=Math.min(44,Math.max(30,innerWidth*.034));
  title.style.setProperty('--veritas-title-size',maxSize+'px');
  var range=document.createRange();range.selectNodeContents(title);
  var textWidth=range.getBoundingClientRect().width;
  if(textWidth>width)title.style.setProperty('--veritas-title-size',(maxSize*(width-2)/textWidth)+'px');
 }
 function schedule(){if(!pending)pending=requestAnimationFrame(fit);}
 var observer=new ResizeObserver(function(entries){var width=entries[0].contentRect.width;if(width!==lastWidth){lastWidth=width;schedule();}});
 observer.observe(title);document.fonts.ready.then(schedule);addEventListener('resize',schedule);
 addEventListener('pagehide',function(){observer.disconnect();cancelAnimationFrame(pending);removeEventListener('resize',schedule);},{once:true});
 schedule();
})();
</script>
</body></html>
`;
