import {
  QuantitySelectorComponent
} from "./chunk-GQ5QB3XB.js";
import {
  SeoService
} from "./chunk-WBLAWHJR.js";
import "./chunk-XXOOERF5.js";
import "./chunk-LN7P5EZP.js";
import {
  InsightsSectionComponent
} from "./chunk-3UBXKXB6.js";
import "./chunk-6DVXASVN.js";
import "./chunk-KILYRBTU.js";
import "./chunk-CJMXCYTU.js";
import "./chunk-WBGN3H4A.js";
import "./chunk-M5OSJJBF.js";
import "./chunk-QOKK55KD.js";
import "./chunk-3YIWEYUK.js";
import "./chunk-WKMOKKQB.js";
import "./chunk-TKO65HOC.js";
import {
  CallbackTopicService
} from "./chunk-6N6WYEKF.js";
import {
  OverlayService
} from "./chunk-PHEWPDI5.js";
import "./chunk-7OXZXASL.js";
import "./chunk-7DLAAEIP.js";
import "./chunk-SVYSXSWK.js";
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-7JITLDDL.js";
import "./chunk-BAM5JHNH.js";

// src/app/pages/google-workspace.page.ts
function GoogleWorkspacePage_Conditional_425_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "del");
    \u0275\u0275text(1, "\u20B91,080");
    \u0275\u0275elementEnd();
  }
}
var GoogleWorkspacePage = class _GoogleWorkspacePage {
  seo = inject(SeoService);
  overlay = inject(OverlayService);
  topics = inject(CallbackTopicService);
  host = inject(ElementRef);
  cleanups = [];
  typewriterTimer;
  constructor() {
    this.seo.set("Google Workspace India \u2014 Authorised Reseller | XcellHost", "Buy Google Workspace in India from XcellHost. Gemini AI, Gmail, Meet, Drive and 60+ apps with INR billing, free migration and 24\xD77 support.", "/google-workspace/");
  }
  ngAfterViewInit() {
    this.startTypewriter();
    this.host.nativeElement.querySelectorAll(".faq2-q").forEach((button) => {
      const onClick = () => button.parentElement?.classList.toggle("open");
      button.addEventListener("click", onClick);
      this.cleanups.push(() => button.removeEventListener("click", onClick));
    });
    const videoFrame = this.host.nativeElement.querySelector("#ppVid");
    const loadVideo = (videoId) => {
      if (!videoFrame)
        return;
      const iframe = document.createElement("iframe");
      iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autoplay=1`;
      iframe.title = "Google Workspace overview";
      iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture";
      iframe.allowFullscreen = true;
      videoFrame.replaceChildren(iframe);
    };
    const playButton = this.host.nativeElement.querySelector("#pvPlay");
    if (playButton) {
      const onPlay = () => loadVideo("hh1uJDL0nBQ");
      playButton.addEventListener("click", onPlay);
      this.cleanups.push(() => playButton.removeEventListener("click", onPlay));
    }
    this.host.nativeElement.querySelectorAll(".pv-tab").forEach((tab) => {
      const onClick = () => {
        this.host.nativeElement.querySelectorAll(".pv-tab").forEach((item) => item.classList.remove("active"));
        tab.classList.add("active");
        loadVideo(tab.dataset["vid"] ?? "hh1uJDL0nBQ");
      };
      tab.addEventListener("click", onClick);
      this.cleanups.push(() => tab.removeEventListener("click", onClick));
    });
  }
  quantities = signal([1, 1, 1, 1], ...ngDevMode ? [{ debugName: "quantities" }] : []);
  monthlyTotal(index) {
    return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format([99, 270, 864][index] * this.quantities()[index]);
  }
  setQuantity(index, quantity) {
    this.quantities.update((values) => values.map((value, i) => i === index ? quantity : value));
  }
  openCallback(event, plan, index) {
    event.preventDefault();
    this.topics.ask(plan && index !== void 0 ? "Google Workspace ? " + plan + " ? " + this.quantities()[index] + " users" : "Google Workspace");
    this.overlay.open("callback");
  }
  submitForm(event) {
    event.preventDefault();
    const form = event.currentTarget;
    form.reset();
    if (form.classList.contains("pp-form")) {
      const message = this.host.nativeElement.querySelector("#fmsg");
      if (message)
        message.textContent = "Thanks \u2014 our team will call you within one business day.";
    }
  }
  ngOnDestroy() {
    if (this.typewriterTimer)
      clearTimeout(this.typewriterTimer);
    this.cleanups.forEach((cleanup) => cleanup());
  }
  startTypewriter() {
    const target = this.host.nativeElement.querySelector("#tw");
    if (!target)
      return;
    const lines = [
      "Gemini AI in Gmail, Docs & Meet",
      "Professional email on your domain",
      "2 TB pooled Drive storage",
      "Free migration from any platform"
    ];
    let line = 0;
    let character = 0;
    let deleting = false;
    const tick = () => {
      const text = lines[line];
      character += deleting ? -1 : 1;
      target.textContent = text.slice(0, character);
      let delay = deleting ? 38 : 62;
      if (!deleting && character === text.length) {
        deleting = true;
        delay = 1700;
      } else if (deleting && character === 0) {
        deleting = false;
        line = (line + 1) % lines.length;
        delay = 260;
      }
      this.typewriterTimer = setTimeout(tick, delay);
    };
    tick();
  }
  static \u0275fac = function GoogleWorkspacePage_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GoogleWorkspacePage)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GoogleWorkspacePage, selectors: [["xh-google-workspace-page"]], decls: 900, vars: 14, consts: [["id", "ppage", 1, "ppage", "as-page"], [1, "pp-hero"], [1, "pph-map"], [1, "wm-ring"], [1, "wm-ring", "r2"], [1, "pph-grid"], [1, "pph-aur", "pph-a1"], [1, "pph-aur", "pph-a2"], [1, "pph-aur", "pph-a3"], [1, "pph-scan"], [1, "orb", "orb-1"], ["aria-hidden", "true", 1, "pph-scene", "has-illus", "standalone-illus"], [1, "pph-illus"], ["viewBox", "0 0 540 330", "xmlns", "http://www.w3.org/2000/svg", "role", "img", "aria-label", "Google Workspace illustration", 1, "pph-illus-img"], ["id", "gWin", "x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", "0", "stop-color", "#FFFFFF"], ["offset", "1", "stop-color", "#E9F0FB"], ["id", "gGem", "x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["offset", "0", "stop-color", "#4285F4"], ["offset", "0.55", "stop-color", "#9B72CB"], ["offset", "1", "stop-color", "#D96570"], ["x", "26", "y", "22", "width", "488", "height", "276", "rx", "18", "fill", "url(#gWin)", "stroke", "#C7D8F4", "stroke-width", "1.5"], ["x", "26", "y", "22", "width", "488", "height", "40", "rx", "18", "fill", "#0A2A57"], ["x", "26", "y", "48", "width", "488", "height", "14", "fill", "#0A2A57"], ["cx", "50", "cy", "42", "r", "5", "fill", "#FF5F57"], ["cx", "68", "cy", "42", "r", "5", "fill", "#FFBD2E"], ["cx", "86", "cy", "42", "r", "5", "fill", "#28C840"], ["x", "206", "y", "34", "width", "128", "height", "16", "rx", "8", "fill", "#12386F"], ["x", "26", "y", "62", "width", "66", "height", "236", "fill", "#F2F6FC"], ["x", "42", "y", "78", "width", "34", "height", "34", "rx", "9", "fill", "#EA4335"], ["x", "42", "y", "122", "width", "34", "height", "34", "rx", "9", "fill", "#34A853"], ["x", "42", "y", "166", "width", "34", "height", "34", "rx", "9", "fill", "#4285F4"], ["x", "42", "y", "210", "width", "34", "height", "34", "rx", "9", "fill", "#0F9D58"], ["x", "42", "y", "254", "width", "34", "height", "34", "rx", "9", "fill", "#FBBC04"], ["x", "108", "y", "80", "width", "382", "height", "44", "rx", "10", "fill", "#FFFFFF", "stroke", "#DCE5F2"], ["cx", "130", "cy", "102", "r", "12", "fill", "#EA4335", "opacity", ".18"], ["x", "152", "y", "92", "width", "132", "height", "8", "rx", "4", "fill", "#1C2A3A", "opacity", ".6"], ["x", "152", "y", "107", "width", "204", "height", "7", "rx", "3.5", "fill", "#51607A", "opacity", ".4"], ["x", "108", "y", "134", "width", "382", "height", "44", "rx", "10", "fill", "#FFFFFF", "stroke", "#DCE5F2"], ["cx", "130", "cy", "156", "r", "12", "fill", "#4285F4", "opacity", ".18"], ["x", "152", "y", "146", "width", "106", "height", "8", "rx", "4", "fill", "#1C2A3A", "opacity", ".6"], ["x", "152", "y", "161", "width", "180", "height", "7", "rx", "3.5", "fill", "#51607A", "opacity", ".4"], ["x", "108", "y", "190", "width", "382", "height", "98", "rx", "12", "fill", "#FFFFFF", "stroke", "#C9D9F5"], ["transform", "translate(134,222)"], ["d", "M0 -16l4.2 11.8L16 0 4.2 4.2 0 16l-4.2-11.8L-16 0l11.8-4.2z", "fill", "url(#gGem)"], ["x", "162", "y", "208", "width", "150", "height", "9", "rx", "4.5", "fill", "#1C2A3A", "opacity", ".62"], ["x", "162", "y", "226", "width", "300", "height", "7", "rx", "3.5", "fill", "#51607A", "opacity", ".38"], ["x", "162", "y", "242", "width", "262", "height", "7", "rx", "3.5", "fill", "#51607A", "opacity", ".3"], ["x", "162", "y", "262", "width", "86", "height", "16", "rx", "8", "fill", "#4285F4", "opacity", ".16"], ["x", "256", "y", "262", "width", "70", "height", "16", "rx", "8", "fill", "#34A853", "opacity", ".16"], ["transform", "translate(452,246) scale(0.72) translate(-24,-24)"], ["cx", "24", "cy", "24", "r", "30", "fill", "#fff", "stroke", "#DCE5F2"], ["d", "M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z", "fill", "#4285F4"], ["d", "M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z", "fill", "#34A853"], ["d", "M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z", "fill", "#FBBC04"], ["d", "M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z", "fill", "#EA4335"], [1, "pph-powered-mark", "pph-powered-image"], [1, "pw-lbl"], [1, "g-lockup"], ["width", "24", "height", "24", "viewBox", "0 0 48 48", "aria-hidden", "true"], [1, "g-word"], [1, "pw-sub"], [1, "wrap"], [1, "pp-crumb"], [1, "pp-title-brand"], [1, "pp-brand-xcell"], [1, "pp-brand-family"], [1, "pp-title-divider"], [1, "pp-title-name"], [1, "pp-tagline"], [1, "pp-tagline-support"], [1, "pp-typewriter"], ["id", "tw"], [1, "pp-chips"], [1, "pp-chip", "price"], [1, "pp-chip"], [1, "pp-hero-grid"], [1, "pp-hero-l"], [1, "pp-hpoints"], [1, "pp-hpoint"], [1, "tick"], [1, "hero-ctas"], ["href", "#contact", 1, "btn", "btn-primary", 3, "click"], ["href", "#pricing", 1, "btn", "btn-ghost"], ["type", "button", "disabled", "", 1, "btn", "btn-ghost"], [1, "pp-trust"], [1, "pp-body"], [1, "pp-sec"], [1, "pp-ov"], [1, "pp-stats"], [1, "pp-stat"], [1, "pp-gemini"], [1, "lbl"], ["width", "16", "height", "16", "viewBox", "0 0 32 32", "aria-hidden", "true"], ["id", "gm1", "x1", "0", "y1", "0", "x2", "1", "y2", "1"], ["d", "M16 0l4.2 11.8L32 16l-11.8 4.2L16 32l-4.2-11.8L0 16l11.8-4.2z", "fill", "url(#gm1)"], [1, "pp-gemgrid"], [1, "gemcard"], [1, "pp-gemfoot"], [1, "pp-ov", 2, "margin-bottom", "6px"], [1, "pp-apps"], [1, "pp-app"], ["aria-hidden", "true", 1, "ai"], ["viewBox", "0 0 48 36"], ["d", "M4 36h8V18L0 9v23a4 4 0 0 0 4 4z", "fill", "#4285F4"], ["d", "M36 36h8a4 4 0 0 0 4-4V9l-12 9z", "fill", "#34A853"], ["d", "M36 4v14l12-9V6a4.5 4.5 0 0 0-7.2-3.6z", "fill", "#FBBC04"], ["d", "M12 18V4l12 9 12-9v14l-12 9z", "fill", "#EA4335"], ["d", "M0 6v3l12 9V4L7.2 2.4A4.5 4.5 0 0 0 0 6z", "fill", "#C5221F"], ["viewBox", "0 0 87 72"], ["d", "M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z", "fill", "#00832d"], ["d", "M0 51.5V66c0 3.32 2.69 6 6 6h14.5l3-10.96-3-9.54-9.95-3z", "fill", "#0066da"], ["d", "M20.5 0L0 20.5l10.55 3 9.95-3 2.95-9.41z", "fill", "#e94235"], ["d", "M20.5 20.5H0v31h20.5z", "fill", "#2684fc"], ["d", "M82.6 8.68L69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.13 4.85-2.37V11c0-2.53-2.95-3.93-4.91-2.32zM49.5 36v15.5H20.5V72h43c3.31 0 6-2.69 6-6V53.08z", "fill", "#00ac47"], ["d", "M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.31-2.69-6-6-6z", "fill", "#ffba00"], ["viewBox", "0 0 87 78"], ["d", "M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z", "fill", "#0066da"], ["d", "M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44A9.06 9.06 0 000 53h27.5z", "fill", "#00ac47"], ["d", "M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.5z", "fill", "#ea4335"], ["d", "M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z", "fill", "#00832d"], ["d", "M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z", "fill", "#2684fc"], ["d", "M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z", "fill", "#ffba00"], ["viewBox", "0 0 48 64"], ["d", "M30 0H6a6 6 0 0 0-6 6v52a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V18z", "fill", "#4285F4"], ["d", "M30 0v18h18z", "fill", "#fff", "opacity", ".35"], ["x", "11", "y", "28", "width", "26", "height", "3.5", "rx", "1.75", "fill", "#fff"], ["x", "11", "y", "37", "width", "26", "height", "3.5", "rx", "1.75", "fill", "#fff"], ["x", "11", "y", "46", "width", "17", "height", "3.5", "rx", "1.75", "fill", "#fff"], ["d", "M30 0H6a6 6 0 0 0-6 6v52a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V18z", "fill", "#0F9D58"], ["x", "11", "y", "28", "width", "26", "height", "22", "rx", "2", "fill", "#fff"], ["x", "11", "y", "35", "width", "26", "height", "1.6", "fill", "#0F9D58"], ["x", "11", "y", "42", "width", "26", "height", "1.6", "fill", "#0F9D58"], ["x", "23", "y", "28", "width", "1.6", "height", "22", "fill", "#0F9D58"], ["d", "M30 0H6a6 6 0 0 0-6 6v52a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V18z", "fill", "#F4B400"], ["x", "11", "y", "30", "width", "26", "height", "18", "rx", "2.5", "fill", "#fff"], ["viewBox", "0 0 48 48"], ["d", "M40 4H8a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h6v9l10-9h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z", "fill", "#00AC47"], ["cx", "16", "cy", "20", "r", "3", "fill", "#fff"], ["cx", "24", "cy", "20", "r", "3", "fill", "#fff"], ["cx", "32", "cy", "20", "r", "3", "fill", "#fff"], ["x", "4", "y", "4", "width", "40", "height", "40", "rx", "5", "fill", "#fff", "stroke", "#DADCE0", "stroke-width", "2"], ["d", "M4 9a5 5 0 0 1 5-5h30a5 5 0 0 1 5 5v4H4z", "fill", "#4285F4"], ["x", "4", "y", "34", "width", "40", "height", "10", "rx", "0", "fill", "#34A853", "opacity", ".9"], ["d", "M4 39v0a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5z", "fill", "#34A853"], ["x", "24", "y", "32", "text-anchor", "middle", "font-family", "Arial,Helvetica,sans-serif", "font-size", "16", "font-weight", "700", "fill", "#4285F4"], [1, "pp-appsfoot"], [1, "pp-vids"], [1, "pv-tabs"], ["type", "button", "data-vid", "hh1uJDL0nBQ", 1, "pv-tab", "active"], ["type", "button", "data-vid", "hh1uJDL0nBQ", 1, "pv-tab"], ["id", "ppVid", 1, "pv-frame"], ["type", "button", "id", "pvPlay", 1, "pv-poster"], [1, "pv-play"], [1, "pv-plabel"], [1, "pv-note"], ["id", "pricing", 1, "pp-sec"], [1, "pp-ov", 2, "margin-bottom", "22px"], [1, "pp-plans"], [1, "ppl"], [1, "tag"], [1, "amt"], [1, "save"], [1, "no"], ["label", "No. of users", 3, "valueChange", "value", "max"], [1, "btns"], [1, "ppl", "hot"], ["label", "No. of users", 3, "valueChange", "value"], [1, "pp-partner"], [1, "pp-partnerhead"], [1, "seal"], ["width", "42", "height", "42", "viewBox", "0 0 48 48", "aria-hidden", "true"], [1, "txt"], [1, "pp-partnergrid"], [1, "pp-steps"], [1, "pstep"], [1, "num"], [1, "pp-bens"], [1, "pb"], [1, "ic"], [1, "pp-uses"], [1, "pu"], [1, "pu-ic"], [1, "pp-secrows"], [1, "psrow"], [1, "pp-secfoot"], [1, "pp-why"], [1, "pw"], [1, "pw-ic"], [1, "pp-tcards"], [1, "tcard"], [1, "quote-badge"], [1, "tav"], [1, "tname"], [1, "trole"], [1, "tstars"], [1, "pp-faq"], [1, "faq2", "open"], ["type", "button", 1, "faq2-q"], [1, "faq2-ic"], [1, "faq2-a"], [1, "faq2"], [1, "pp-related"], ["href", "#", 1, "rel"], ["pageSlug", "google-workspace"], ["id", "contact", 1, "pp-cta"], [1, "pp-ctabtns"], ["href", "#", 1, "btn", "btn-ghost"], ["href", "https://wa.me/918657032540", 1, "btn", "btn-wa"], [1, "pp-proof"], ["aria-labelledby", "newsletter-title", 1, "newsletter"], [1, "wrap", "newsletter-inner"], ["id", "newsletter-title"], [1, "newsletter-form", 3, "submit"], ["for", "newsletter-email", 2, "position", "absolute", "left", "-9999px"], ["id", "newsletter-email", "type", "email", "placeholder", "Enter your email", "required", ""], ["type", "submit"]], template: function GoogleWorkspacePage_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2);
      \u0275\u0275element(3, "div", 3)(4, "div", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275element(5, "span", 5)(6, "span", 6)(7, "span", 7)(8, "span", 8)(9, "span", 9)(10, "span", 10);
      \u0275\u0275elementStart(11, "div", 11)(12, "div", 12);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(13, "svg", 13)(14, "defs")(15, "linearGradient", 14);
      \u0275\u0275element(16, "stop", 15)(17, "stop", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "linearGradient", 17);
      \u0275\u0275element(19, "stop", 18)(20, "stop", 19)(21, "stop", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(22, "rect", 21)(23, "rect", 22)(24, "rect", 23)(25, "circle", 24)(26, "circle", 25)(27, "circle", 26)(28, "rect", 27)(29, "rect", 28)(30, "rect", 29)(31, "rect", 30)(32, "rect", 31)(33, "rect", 32)(34, "rect", 33)(35, "rect", 34)(36, "circle", 35)(37, "rect", 36)(38, "rect", 37)(39, "rect", 38)(40, "circle", 39)(41, "rect", 40)(42, "rect", 41)(43, "rect", 42);
      \u0275\u0275elementStart(44, "g", 43);
      \u0275\u0275element(45, "path", 44);
      \u0275\u0275elementEnd();
      \u0275\u0275element(46, "rect", 45)(47, "rect", 46)(48, "rect", 47)(49, "rect", 48)(50, "rect", 49);
      \u0275\u0275elementStart(51, "g", 50);
      \u0275\u0275element(52, "circle", 51)(53, "path", 52)(54, "path", 53)(55, "path", 54)(56, "path", 55);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(57, "div", 56)(58, "span", 57);
      \u0275\u0275text(59, "Powered by");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "span", 58);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(61, "svg", 59);
      \u0275\u0275element(62, "path", 52)(63, "path", 53)(64, "path", 54)(65, "path", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(66, "span", 60);
      \u0275\u0275text(67, "Google ");
      \u0275\u0275elementStart(68, "b");
      \u0275\u0275text(69, "Workspace");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(70, "span", 61);
      \u0275\u0275text(71, "Authorised Reseller \xB7 India");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(72, "div", 62)(73, "div", 63);
      \u0275\u0275text(74, "Home \u203A Cloud \u203A Email & Collaboration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "h1")(76, "span", 64)(77, "span", 65);
      \u0275\u0275text(78, "Xcell");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "span", 66);
      \u0275\u0275text(80, "Cloud");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(81, "span", 67);
      \u0275\u0275text(82, "|");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "span", 68);
      \u0275\u0275text(84, "Google Workspace");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(85, "p", 69);
      \u0275\u0275text(86, "Professional Gmail, 2 TB Drive, HD video meetings and Gemini AI \u2014 in one subscription.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "p", 70);
      \u0275\u0275text(88, "Gmail \xB7 Meet \xB7 Drive \xB7 Docs \xB7 Gemini AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "div", 71);
      \u0275\u0275element(90, "span", 72)(91, "i");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "div", 73)(93, "span", 74);
      \u0275\u0275text(94, "From \u20B999/user/mo \xB7 annual");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "span", 75);
      \u0275\u0275text(96, "Gemini AI from Starter \u2014 no extra charge");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "span", 75);
      \u0275\u0275text(98, "GST invoice \xB7 INR billing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(99, "div", 76)(100, "div", 77)(101, "div", 78)(102, "div", 79);
      \u0275\u0275element(103, "span", 80);
      \u0275\u0275text(104, "Gemini AI included from Starter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "div", 79);
      \u0275\u0275element(106, "span", 80);
      \u0275\u0275text(107, "Free data migration, zero data loss");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "div", 79);
      \u0275\u0275element(109, "span", 80);
      \u0275\u0275text(110, "99.9% uptime SLA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "div", 79);
      \u0275\u0275element(112, "span", 80);
      \u0275\u0275text(113, "MX, SPF, DKIM & DMARC set up by us");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 81)(115, "a", 82);
      \u0275\u0275listener("click", function GoogleWorkspacePage_Template_a_click_115_listener($event) {
        return ctx.openCallback($event);
      });
      \u0275\u0275text(116, "Get a Quote");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "a", 83);
      \u0275\u0275text(118, "View Plans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "button", 84);
      \u0275\u0275text(120, "7 Day's Free Trail");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(121, "div", 85)(122, "div", 62)(123, "span")(124, "b");
      \u0275\u0275text(125, "ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275text(126, " & ");
      \u0275\u0275elementStart(127, "b");
      \u0275\u0275text(128, "20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(129, " certified");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "span")(131, "b");
      \u0275\u0275text(132, "Google Cloud");
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, " Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "span")(135, "b");
      \u0275\u0275text(136, "10,000+");
      \u0275\u0275elementEnd();
      \u0275\u0275text(137, " customers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "span")(139, "b");
      \u0275\u0275text(140, "Since 1999");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "span")(142, "b");
      \u0275\u0275text(143, "99.95% uptime SLA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(144, "span")(145, "b");
      \u0275\u0275text(146, "24\xD77");
      \u0275\u0275elementEnd();
      \u0275\u0275text(147, " NOC + SOC");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(148, "div", 86)(149, "div", 62)(150, "div", 87);
      \u0275\u0275text(151, "Overview \u2014 What is Google Workspace?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p", 88);
      \u0275\u0275text(153, " Google Workspace gives your business a professional ");
      \u0275\u0275elementStart(154, "b");
      \u0275\u0275text(155, "@yourcompany.com");
      \u0275\u0275elementEnd();
      \u0275\u0275text(156, " email address instead of @gmail.com, plus admin controls, 20 GB to 5 TB+ of storage, meeting recording, eSignature, Gemini AI and a 99.9% uptime SLA \u2014 none of which exist in free Gmail. It is one subscription covering Gmail, Meet, Drive, Docs, Sheets, Slides, Chat, Calendar and 50+ more apps. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "p", 88);
      \u0275\u0275text(158, " XcellHost is an authorised Google Workspace reseller in India. We size the right plan, verify your domain, configure DNS and email authentication, migrate your existing mailboxes from any platform, and support the deployment 24\xD77 \u2014 billed in INR with a GST-compliant invoice. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "div", 89)(160, "div", 90)(161, "b");
      \u0275\u0275text(162, "60+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(163, "span");
      \u0275\u0275text(164, "Apps in one subscription");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(165, "div", 90)(166, "b");
      \u0275\u0275text(167, "99.9%");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(168, "span");
      \u0275\u0275text(169, "Uptime SLA guaranteed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 90)(171, "b");
      \u0275\u0275text(172, "5 TB+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "span");
      \u0275\u0275text(174, "Storage per user on Enterprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(175, "div", 90)(176, "b");
      \u0275\u0275text(177, "\u20B999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(178, "span");
      \u0275\u0275text(179, "Entry price per user / month");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(180, "div", 87);
      \u0275\u0275text(181, "Gemini AI \u2014 now in Google Workspace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 91)(183, "div", 92);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(184, "svg", 93)(185, "defs")(186, "linearGradient", 94);
      \u0275\u0275element(187, "stop", 18)(188, "stop", 19)(189, "stop", 20);
      \u0275\u0275elementEnd()();
      \u0275\u0275element(190, "path", 95);
      \u0275\u0275elementEnd();
      \u0275\u0275text(191, " Now in Google Workspace ");
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(192, "h3");
      \u0275\u0275text(193, "Your team's AI assistant \u2014 built in, not bolted on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(194, "p");
      \u0275\u0275text(195, " From the Starter plan onwards, every user gets Gemini AI across Gmail, Docs, Meet and Sheets \u2014 plus NotebookLM and Workspace Studio. No separate licence, no extra per-seat charge. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "div", 96)(197, "div", 97)(198, "b");
      \u0275\u0275text(199, "Gemini in Gmail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(200, "span");
      \u0275\u0275text(201, "Draft full emails from a one-line prompt, summarise long threads in seconds, and get smart replies tailored to the conversation.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(202, "div", 97)(203, "b");
      \u0275\u0275text(204, "Gemini in Docs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(205, "span");
      \u0275\u0275text(206, "Write first drafts, rewrite in a different tone, create tables from prompts and research anything \u2014 from inside your document.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(207, "div", 97)(208, "b");
      \u0275\u0275text(209, "NotebookLM");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(210, "span");
      \u0275\u0275text(211, "Upload your PDFs, Drive files or web pages. Ask questions and get cited answers from your own documents.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(212, "div", 97)(213, "b");
      \u0275\u0275text(214, "Workspace Studio");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(215, "span");
      \u0275\u0275text(216, "Build no-code automations across Gmail, Sheets, Drive and your other tools \u2014 without writing a line of code.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(217, "p", 98);
      \u0275\u0275text(218, "Gemini AI available on Starter, Standard and Enterprise plans \u2014 not on Base.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(219, "div", 87);
      \u0275\u0275text(220, "Everything in one subscription");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(221, "p", 99);
      \u0275\u0275text(222, "60+ apps included. These are the eight your team will use every day.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(223, "div", 100)(224, "div", 101)(225, "span", 102);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(226, "svg", 103);
      \u0275\u0275element(227, "path", 104)(228, "path", 105)(229, "path", 106)(230, "path", 107)(231, "path", 108);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(232, "div")(233, "b");
      \u0275\u0275text(234, "Gmail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(235, "span");
      \u0275\u0275text(236, "Professional @yourcompany.com email with a 99.9% uptime SLA");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(237, "div", 101)(238, "span", 102);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(239, "svg", 109);
      \u0275\u0275element(240, "path", 110)(241, "path", 111)(242, "path", 112)(243, "path", 113)(244, "path", 114)(245, "path", 115);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(246, "div")(247, "b");
      \u0275\u0275text(248, "Meet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(249, "span");
      \u0275\u0275text(250, "HD video meetings with recording, captions and screen share");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(251, "div", 101)(252, "span", 102);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(253, "svg", 116);
      \u0275\u0275element(254, "path", 117)(255, "path", 118)(256, "path", 119)(257, "path", 120)(258, "path", 121)(259, "path", 122);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(260, "div")(261, "b");
      \u0275\u0275text(262, "Drive");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(263, "span");
      \u0275\u0275text(264, "Cloud storage with team shared drives and offline access");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(265, "div", 101)(266, "span", 102);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(267, "svg", 123);
      \u0275\u0275element(268, "path", 124)(269, "path", 125)(270, "rect", 126)(271, "rect", 127)(272, "rect", 128);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(273, "div")(274, "b");
      \u0275\u0275text(275, "Docs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(276, "span");
      \u0275\u0275text(277, "Real-time document collaboration with full version history");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(278, "div", 101)(279, "span", 102);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(280, "svg", 123);
      \u0275\u0275element(281, "path", 129)(282, "path", 125)(283, "rect", 130)(284, "rect", 131)(285, "rect", 132)(286, "rect", 133);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(287, "div")(288, "b");
      \u0275\u0275text(289, "Sheets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(290, "span");
      \u0275\u0275text(291, "Collaborative spreadsheets with pivot tables and AI analysis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(292, "div", 101)(293, "span", 102);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(294, "svg", 123);
      \u0275\u0275element(295, "path", 134)(296, "path", 125)(297, "rect", 135);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(298, "div")(299, "b");
      \u0275\u0275text(300, "Slides");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(301, "span");
      \u0275\u0275text(302, "Presentations with real-time co-editing and clean templates");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(303, "div", 101)(304, "span", 102);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(305, "svg", 136);
      \u0275\u0275element(306, "path", 137)(307, "circle", 138)(308, "circle", 139)(309, "circle", 140);
      \u0275\u0275elementEnd()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(310, "div")(311, "b");
      \u0275\u0275text(312, "Chat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(313, "span");
      \u0275\u0275text(314, "Team messaging, Spaces and file sharing integrated with Drive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(315, "div", 101)(316, "span", 102);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(317, "svg", 136);
      \u0275\u0275element(318, "rect", 141)(319, "path", 142)(320, "rect", 143)(321, "path", 144);
      \u0275\u0275elementStart(322, "text", 145);
      \u0275\u0275text(323, "31");
      \u0275\u0275elementEnd()()();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(324, "div")(325, "b");
      \u0275\u0275text(326, "Calendar");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(327, "span");
      \u0275\u0275text(328, "Shared team calendars with smart scheduling and booking pages");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(329, "p", 146);
      \u0275\u0275text(330, "+ ");
      \u0275\u0275elementStart(331, "b");
      \u0275\u0275text(332, "Google Forms, Sites, Keep, Tasks, Vault, AppSheet, Gemini, NotebookLM and the Admin console");
      \u0275\u0275elementEnd();
      \u0275\u0275text(333, " \u2014 all included.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(334, "div", 87);
      \u0275\u0275text(335, "See Google Workspace in action");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(336, "div", 147)(337, "div", 148)(338, "button", 149);
      \u0275\u0275text(339, "\u25B6 Product Intro");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(340, "button", 150);
      \u0275\u0275text(341, "\u25B6 Gemini in Workspace");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(342, "div", 151)(343, "button", 152)(344, "span", 153);
      \u0275\u0275text(345, "\u25B6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(346, "span", 154);
      \u0275\u0275text(347, "How Google Workspace helps Indian businesses collaborate, automate and stay secure with Gemini AI");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(348, "p", 155);
      \u0275\u0275text(349, "Official Google Workspace overview \xB7 Source: Google Workspace YouTube");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(350, "div", 156);
      \u0275\u0275text(351, "Google Workspace pricing in India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(352, "p", 157);
      \u0275\u0275text(353, "Annual plans \xB7 INR billing \xB7 GST invoice \xB7 save roughly 16% versus monthly billing. All prices exclude 18% GST.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(354, "div", 158)(355, "div", 159)(356, "span", 160);
      \u0275\u0275text(357, "Micro Business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(358, "h4");
      \u0275\u0275text(359, "Base");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(360, "div", 161)(361, "b");
      \u0275\u0275text(362);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "span");
      \u0275\u0275text(364);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(365, "span", 162);
      \u0275\u0275text(366, "Max 20 users \xB7 20 GB pooled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "ul")(368, "li");
      \u0275\u0275text(369, "Custom email \u2014 @yourcompany.com");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "li");
      \u0275\u0275text(371, "Google Meet \u2014 100 participants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "li");
      \u0275\u0275text(373, "20 GB Drive storage (pooled)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "li");
      \u0275\u0275text(375, "Docs, Sheets, Slides, Calendar, Chat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "li");
      \u0275\u0275text(377, "Basic admin & security controls");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(378, "li", 163);
      \u0275\u0275text(379, "Gemini AI");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "li", 163);
      \u0275\u0275text(381, "Meeting recording");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "li", 163);
      \u0275\u0275text(383, "eSignature");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(384, "xh-quantity-selector", 164);
      \u0275\u0275listener("valueChange", function GoogleWorkspacePage_Template_xh_quantity_selector_valueChange_384_listener($event) {
        return ctx.setQuantity(0, $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(385, "div", 165)(386, "a", 82);
      \u0275\u0275listener("click", function GoogleWorkspacePage_Template_a_click_386_listener($event) {
        return ctx.openCallback($event, "Base", 0);
      });
      \u0275\u0275text(387, "Buy Now");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(388, "div", 166)(389, "span", 160);
      \u0275\u0275text(390, "Most Popular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(391, "h4");
      \u0275\u0275text(392, "Starter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(393, "div", 161)(394, "b");
      \u0275\u0275text(395);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(396, "span");
      \u0275\u0275text(397);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(398, "span", 162);
      \u0275\u0275text(399, "Up to 300 users \xB7 30 GB pooled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "ul")(401, "li");
      \u0275\u0275text(402, "Everything in Base");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(403, "li");
      \u0275\u0275text(404, "Gemini AI in Gmail, Docs & Meet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "li");
      \u0275\u0275text(406, "NotebookLM research assistant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "li");
      \u0275\u0275text(408, "Google Vids AI video creator");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(409, "li");
      \u0275\u0275text(410, "Workspace Studio automation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "li");
      \u0275\u0275text(412, "Manage up to 300 users");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(413, "xh-quantity-selector", 164);
      \u0275\u0275listener("valueChange", function GoogleWorkspacePage_Template_xh_quantity_selector_valueChange_413_listener($event) {
        return ctx.setQuantity(1, $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "div", 165)(415, "a", 82);
      \u0275\u0275listener("click", function GoogleWorkspacePage_Template_a_click_415_listener($event) {
        return ctx.openCallback($event, "Starter", 1);
      });
      \u0275\u0275text(416, "Buy Now");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(417, "div", 159)(418, "span", 160);
      \u0275\u0275text(419, "Best Storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(420, "h4");
      \u0275\u0275text(421, "Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "div", 161)(423, "b");
      \u0275\u0275text(424);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(425, GoogleWorkspacePage_Conditional_425_Template, 2, 0, "del");
      \u0275\u0275elementStart(426, "span");
      \u0275\u0275text(427);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(428, "span", 162);
      \u0275\u0275text(429, "Up to 300 users \xB7 2 TB pooled");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(430, "ul")(431, "li");
      \u0275\u0275text(432, "Everything in Starter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "li");
      \u0275\u0275text(434, "2 TB cloud storage (pooled)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(435, "li");
      \u0275\u0275text(436, "Meet recording + noise cancellation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(437, "li");
      \u0275\u0275text(438, "150-participant meetings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(439, "li");
      \u0275\u0275text(440, "Built-in eSignature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(441, "li");
      \u0275\u0275text(442, "Workspace Migrate tool");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(443, "li");
      \u0275\u0275text(444, "Mail merge + custom email layouts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(445, "xh-quantity-selector", 164);
      \u0275\u0275listener("valueChange", function GoogleWorkspacePage_Template_xh_quantity_selector_valueChange_445_listener($event) {
        return ctx.setQuantity(2, $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(446, "div", 165)(447, "a", 82);
      \u0275\u0275listener("click", function GoogleWorkspacePage_Template_a_click_447_listener($event) {
        return ctx.openCallback($event, "Standard", 2);
      });
      \u0275\u0275text(448, "Buy Now");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(449, "div", 159)(450, "span", 160);
      \u0275\u0275text(451, "Large Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(452, "h4");
      \u0275\u0275text(453, "Enterprise");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "div", 161)(455, "b");
      \u0275\u0275text(456, "Contact us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "span");
      \u0275\u0275text(458, "custom \xB7 volume discounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(459, "span", 162);
      \u0275\u0275text(460, "No user limit \xB7 5 TB+ per user");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "ul")(462, "li");
      \u0275\u0275text(463, "Everything in Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(464, "li");
      \u0275\u0275text(465, "1,000 Meet participants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(466, "li");
      \u0275\u0275text(467, "Live streaming in Meet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(468, "li");
      \u0275\u0275text(469, "S/MIME end-to-end encryption");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(470, "li");
      \u0275\u0275text(471, "Data Loss Prevention (DLP)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "li");
      \u0275\u0275text(473, "Cloud Identity Premium");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "li");
      \u0275\u0275text(475, "Context-aware access policies");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "li");
      \u0275\u0275text(477, "Enterprise data regions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(478, "xh-quantity-selector", 167);
      \u0275\u0275listener("valueChange", function GoogleWorkspacePage_Template_xh_quantity_selector_valueChange_478_listener($event) {
        return ctx.setQuantity(3, $event);
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(479, "div", 165)(480, "a", 82);
      \u0275\u0275listener("click", function GoogleWorkspacePage_Template_a_click_480_listener($event) {
        return ctx.openCallback($event, "Enterprise", 3);
      });
      \u0275\u0275text(481, "Buy Now");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(482, "p", 155);
      \u0275\u0275text(483, "\u{1F4B3} Prices exclude 18% GST. The Standard plan shows an introductory rate \u2014 the regular price is \u20B91,080/user/month. Pay online via UPI \xB7 Cards \xB7 NetBanking. Contact XcellHost for volume discounts and multi-year deals.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(484, "div", 87);
      \u0275\u0275text(485, "Why buy through XcellHost?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(486, "div", 168)(487, "div", 169)(488, "div", 170);
      \u0275\u0275namespaceSVG();
      \u0275\u0275elementStart(489, "svg", 171);
      \u0275\u0275element(490, "path", 52)(491, "path", 53)(492, "path", 54)(493, "path", 55);
      \u0275\u0275elementEnd();
      \u0275\u0275namespaceHTML();
      \u0275\u0275elementStart(494, "small");
      \u0275\u0275text(495, "Google Partner");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(496, "div", 172)(497, "b");
      \u0275\u0275text(498, "XcellHost \u2014 authorised Google Workspace reseller in India");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(499, "span");
      \u0275\u0275text(500, "Beat-any-quote pricing \xB7 GST invoice same day \xB7 free migration included with every plan.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(501, "a", 82);
      \u0275\u0275listener("click", function GoogleWorkspacePage_Template_a_click_501_listener($event) {
        return ctx.openCallback($event);
      });
      \u0275\u0275text(502, "Get Best Price");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(503, "div", 173)(504, "div")(505, "b");
      \u0275\u0275text(506, "Authorised Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(507, "span");
      \u0275\u0275text(508, "Genuine licences from a verified Google partner. Full support entitlements, no third-party risk.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(509, "div")(510, "b");
      \u0275\u0275text(511, "INR Billing + GST");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(512, "span");
      \u0275\u0275text(513, "Pay in Indian Rupees. GST-compliant invoice for every purchase \u2014 claim input tax credit easily.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(514, "div")(515, "b");
      \u0275\u0275text(516, "Free Migration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "span");
      \u0275\u0275text(518, "Complete migration from cPanel, Microsoft 365, Zoho or any platform. Zero data loss, minimal downtime.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(519, "div")(520, "b");
      \u0275\u0275text(521, "India Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "span");
      \u0275\u0275text(523, "Local team by phone and WhatsApp, 24\xD77 \u2014 in English and Hindi, by real engineers.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(524, "div", 87);
      \u0275\u0275text(525, "Switching from cPanel, Outlook or Zoho? We handle the entire move.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "p", 99);
      \u0275\u0275text(527, "Full migration service included with every Google Workspace deployment.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(528, "div", 174)(529, "div", 175)(530, "span", 176);
      \u0275\u0275text(531, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(532, "b");
      \u0275\u0275text(533, "Audit & Plan");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(534, "span");
      \u0275\u0275text(535, "We review your domain, DNS, mailbox count and current setup, then recommend the right plan and migration window.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(536, "div", 175)(537, "span", 176);
      \u0275\u0275text(538, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(539, "b");
      \u0275\u0275text(540, "DNS & Security");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(541, "span");
      \u0275\u0275text(542, "MX records, SPF, DKIM and DMARC configured correctly from day one \u2014 no email delivery issues post-cutover.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(543, "div", 175)(544, "span", 176);
      \u0275\u0275text(545, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(546, "b");
      \u0275\u0275text(547, "Data Migration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(548, "span");
      \u0275\u0275text(549, "Emails, contacts and calendars moved from your old provider using Workspace Migrate or direct IMAP \u2014 zero data loss.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(550, "div", 175)(551, "span", 176);
      \u0275\u0275text(552, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "b");
      \u0275\u0275text(554, "Go-Live & Onboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "span");
      \u0275\u0275text(556, "Your team switches over. We monitor the cutover window and provide 30-day post-migration support.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(557, "div", 87);
      \u0275\u0275text(558, "Benefits for your business");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "div", 177)(560, "article", 178)(561, "span", 179);
      \u0275\u0275text(562, "\u20B9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(563, "p")(564, "b");
      \u0275\u0275text(565, "Lower cost of ownership");
      \u0275\u0275elementEnd();
      \u0275\u0275text(566, "No mail server, no AMC, no refresh cycles \u2014 one predictable per-user price in INR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(567, "article", 178)(568, "span", 179);
      \u0275\u0275text(569, "\u{1F3E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(570, "p")(571, "b");
      \u0275\u0275text(572, "Work from anywhere");
      \u0275\u0275elementEnd();
      \u0275\u0275text(573, "Browser, mobile and offline access keep your team productive from office, home or site");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(574, "article", 178)(575, "span", 179);
      \u0275\u0275text(576, "\u2726");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(577, "p")(578, "b");
      \u0275\u0275text(579, "AI without a separate contract");
      \u0275\u0275elementEnd();
      \u0275\u0275text(580, "Gemini ships inside the plan from Starter \u2014 no add-on SKU, no second vendor");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(581, "article", 178)(582, "span", 179);
      \u0275\u0275text(583, "\u{1F4C8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "p")(585, "b");
      \u0275\u0275text(586, "Scale on demand");
      \u0275\u0275elementEnd();
      \u0275\u0275text(587, "Add users, storage or domains the day you need them \u2014 not next quarter");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(588, "div", 87);
      \u0275\u0275text(589, "Who uses Google Workspace?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(590, "div", 180)(591, "div", 181)(592, "span", 182);
      \u0275\u0275text(593, "\u{1F4BC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "b");
      \u0275\u0275text(595, "CA Firms & Finance");
      \u0275\u0275elementEnd();
      \u0275\u0275text(596, "Secure client email + shared docs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(597, "div", 181)(598, "span", 182);
      \u0275\u0275text(599, "\u{1F4BB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(600, "b");
      \u0275\u0275text(601, "IT & Software Teams");
      \u0275\u0275elementEnd();
      \u0275\u0275text(602, "Dev collaboration + project comms");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(603, "div", 181)(604, "span", 182);
      \u0275\u0275text(605, "\u{1F3E5}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(606, "b");
      \u0275\u0275text(607, "Healthcare Clinics");
      \u0275\u0275elementEnd();
      \u0275\u0275text(608, "Patient comms + appointment booking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(609, "div", 181)(610, "span", 182);
      \u0275\u0275text(611, "\u{1F6CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(612, "b");
      \u0275\u0275text(613, "Retail Chains");
      \u0275\u0275elementEnd();
      \u0275\u0275text(614, "Inventory docs + vendor coordination");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(615, "div", 181)(616, "span", 182);
      \u0275\u0275text(617, "\u{1F3E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(618, "b");
      \u0275\u0275text(619, "Real Estate Firms");
      \u0275\u0275elementEnd();
      \u0275\u0275text(620, "Property docs + client follow-up");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(621, "div", 181)(622, "span", 182);
      \u0275\u0275text(623, "\u{1F3ED}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(624, "b");
      \u0275\u0275text(625, "Manufacturing");
      \u0275\u0275elementEnd();
      \u0275\u0275text(626, "Plant comms + supply chain docs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "div", 181)(628, "span", 182);
      \u0275\u0275text(629, "\u{1F680}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(630, "b");
      \u0275\u0275text(631, "Startups");
      \u0275\u0275elementEnd();
      \u0275\u0275text(632, "All-in-one platform from day one");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(633, "div", 181)(634, "span", 182);
      \u0275\u0275text(635, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(636, "b");
      \u0275\u0275text(637, "NGOs & Nonprofits");
      \u0275\u0275elementEnd();
      \u0275\u0275text(638, "Google for Nonprofits special pricing");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(639, "div", 87);
      \u0275\u0275text(640, "Security & compliance \u2014 Google Workspace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(641, "p", 88);
      \u0275\u0275text(642, " The threat model for cloud email is identity-first \u2014 phishing, OAuth consent abuse, session hijacking and unmanaged devices. The controls are chosen to match it: 2-Step Verification and context-aware access before cutover, domain authentication configured at go-live, and Vault retention set to the policy your auditors asked for. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(643, "div", 183)(644, "div", 184)(645, "span");
      \u0275\u0275text(646, "At rest");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(647, "b");
      \u0275\u0275text(648, "AES-256 encryption");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(649, "div", 184)(650, "span");
      \u0275\u0275text(651, "In transit");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(652, "b");
      \u0275\u0275text(653, "TLS enforced between MTAs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(654, "div", 184)(655, "span");
      \u0275\u0275text(656, "Message-level");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(657, "b");
      \u0275\u0275text(658, "S/MIME on Enterprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(659, "div", 184)(660, "span");
      \u0275\u0275text(661, "Domain authentication");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(662, "b");
      \u0275\u0275text(663, "SPF \xB7 DKIM \xB7 DMARC by XcellHost");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(664, "div", 184)(665, "span");
      \u0275\u0275text(666, "Access control");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(667, "b");
      \u0275\u0275text(668, "2-Step Verification + context-aware access");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(669, "div", 184)(670, "span");
      \u0275\u0275text(671, "Data protection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(672, "b");
      \u0275\u0275text(673, "DLP rules on Enterprise");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(674, "div", 184)(675, "span");
      \u0275\u0275text(676, "Legal hold");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(677, "b");
      \u0275\u0275text(678, "Google Vault retention & eDiscovery");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(679, "div", 184)(680, "span");
      \u0275\u0275text(681, "Incident response");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(682, "b");
      \u0275\u0275text(683, "Named engineer, 15-min ack");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(684, "p", 185);
      \u0275\u0275text(685, "XcellHost is ISO 27001 and ISO 20000-1 certified \xB7 Indian Tier-4 datacenters \xB7 DPDPA and RBI aligned \xB7 24\xD77 NOC and SOC.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(686, "div", 87);
      \u0275\u0275text(687, "Why XcellHost for Google Workspace");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(688, "div", 186)(689, "div", 187)(690, "span", 188);
      \u0275\u0275text(691, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "b");
      \u0275\u0275text(693, "Authorised Reseller");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(694, "span");
      \u0275\u0275text(695, "Genuine Google Workspace licences with full support entitlements and a direct escalation path.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(696, "div", 187)(697, "span", 188);
      \u0275\u0275text(698, "\u{1F504}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(699, "b");
      \u0275\u0275text(700, "Free Migration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(701, "span");
      \u0275\u0275text(702, "From Microsoft 365, Zoho Mail, GoDaddy, cPanel or on-premises Exchange \u2014 zero data loss.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(703, "div", 187)(704, "span", 188);
      \u0275\u0275text(705, "\u{1F9FE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(706, "b");
      \u0275\u0275text(707, "INR Billing with GST Invoice");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(708, "span");
      \u0275\u0275text(709, "Proper GST documentation on every purchase, so your business can claim input tax credit.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(710, "div", 187)(711, "span", 188);
      \u0275\u0275text(712, "\u23F0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(713, "b");
      \u0275\u0275text(714, "Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(715, "span");
      \u0275\u0275text(716, "27 years running production cloud and email for Indian businesses.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(717, "div", 187)(718, "span", 188);
      \u0275\u0275text(719, "\u{1F4DE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(720, "b");
      \u0275\u0275text(721, "24\xD77 Managed Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(722, "span");
      \u0275\u0275text(723, "Phone, WhatsApp and ticket \u2014 in English and Hindi, by real engineers.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(724, "div", 187)(725, "span", 188);
      \u0275\u0275text(726, "\u2699");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(727, "b");
      \u0275\u0275text(728, "Full Technical Setup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(729, "span");
      \u0275\u0275text(730, "Domain verification, MX records, SPF, DKIM, DMARC and admin policies \u2014 all handled by us.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(731, "div", 87);
      \u0275\u0275text(732, "What customers say");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(733, "div", 189)(734, "div", 190)(735, "div", 191);
      \u0275\u0275text(736, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(737, "div", 192);
      \u0275\u0275text(738, "IT");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(739, "div", 193);
      \u0275\u0275text(740, "IT Operations Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(741, "div", 194);
      \u0275\u0275text(742, "Software services \xB7 Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(743, "div", 195);
      \u0275\u0275text(744, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(745, "p");
      \u0275\u0275text(746, "The rollout was well organised and the cutover window was monitored end to end. Shared drives and Meet recording were configured before the team even logged in.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(747, "div", 190)(748, "div", 191);
      \u0275\u0275text(749, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(750, "div", 192);
      \u0275\u0275text(751, "BO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(752, "div", 193);
      \u0275\u0275text(753, "Business Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(754, "div", 194);
      \u0275\u0275text(755, "Retail chain \xB7 Starter");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(756, "div", 195);
      \u0275\u0275text(757, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(758, "p");
      \u0275\u0275text(759, "We moved off cPanel mail and stopped fighting deliverability the same week. Gemini in Gmail turned out to be the thing the team actually uses daily.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(760, "div", 190)(761, "div", 191);
      \u0275\u0275text(762, "\u201D");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "div", 192);
      \u0275\u0275text(764, "CA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(765, "div", 193);
      \u0275\u0275text(766, "Practice Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(767, "div", 194);
      \u0275\u0275text(768, "CA firm \xB7 Standard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(769, "div", 195);
      \u0275\u0275text(770, "\u2605\u2605\u2605\u2605\u2605");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(771, "p");
      \u0275\u0275text(772, "Pricing was transparent, the GST invoice arrived the same day, and nobody tried to upsell us a plan we did not need. That is rarer than it should be.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(773, "div", 87);
      \u0275\u0275text(774, "Frequently asked questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(775, "div", 196)(776, "div", 197)(777, "button", 198);
      \u0275\u0275text(778, "What is Google Workspace and how is it different from free Gmail?");
      \u0275\u0275elementStart(779, "span", 199);
      \u0275\u0275text(780, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(781, "div", 200)(782, "p");
      \u0275\u0275text(783, "Google Workspace gives your business a professional @yourcompany.com email address instead of @gmail.com. It includes admin controls, 20 GB to 5 TB+ storage, meeting recording, eSignature, Gemini AI and a 99.9% uptime SLA \u2014 none of which are in free Gmail.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(784, "div", 201)(785, "button", 198);
      \u0275\u0275text(786, "Does Google Workspace include Gemini AI?");
      \u0275\u0275elementStart(787, "span", 199);
      \u0275\u0275text(788, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(789, "div", 200)(790, "p");
      \u0275\u0275text(791, "Yes \u2014 Gemini AI is included from the Starter plan (\u20B9270/user/month) at no extra cost. You get an AI assistant inside Gmail, Docs, Meet and Sheets, plus NotebookLM (AI research assistant) and Google Vids. The Base plan does not include Gemini AI.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(792, "div", 201)(793, "button", 198);
      \u0275\u0275text(794, "Which plan is right for an Indian SMB?");
      \u0275\u0275elementStart(795, "span", 199);
      \u0275\u0275text(796, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(797, "div", 200)(798, "p");
      \u0275\u0275text(799, "Starter at \u20B9270/user/month suits most Indian SMBs \u2014 it includes Gemini AI, 30 GB storage and full admin controls for up to 300 users. Base (\u20B999) suits teams under 20 users who do not yet need AI features. Standard (\u20B9864) is the pick when your team needs 2 TB storage, meeting recording and eSignature.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(800, "div", 201)(801, "button", 198);
      \u0275\u0275text(802, "Does the pricing include GST?");
      \u0275\u0275elementStart(803, "span", 199);
      \u0275\u0275text(804, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(805, "div", 200)(806, "p");
      \u0275\u0275text(807, "No \u2014 the listed prices exclude 18% GST. As an authorised Google Workspace reseller in India, XcellHost provides a GST-compliant invoice for every purchase so you can claim input tax credit.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(808, "div", 201)(809, "button", 198);
      \u0275\u0275text(810, "Can XcellHost migrate our existing email to Google Workspace?");
      \u0275\u0275elementStart(811, "span", 199);
      \u0275\u0275text(812, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(813, "div", 200)(814, "p");
      \u0275\u0275text(815, "Yes \u2014 XcellHost provides complete email migration from any platform including Microsoft 365, GoDaddy, cPanel hosting, Zoho Mail and on-premises Exchange. We migrate emails, contacts and calendars with zero data loss and minimal downtime.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(816, "div", 201)(817, "button", 198);
      \u0275\u0275text(818, "How long does setup take?");
      \u0275\u0275elementStart(819, "span", 199);
      \u0275\u0275text(820, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(821, "div", 200)(822, "p");
      \u0275\u0275text(823, "Domain verification, MX records and basic admin configuration are typically completed within 24 hours. Full email migration from an existing provider takes 2\u20135 business days depending on mailbox count and data volume.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(824, "div", 201)(825, "button", 198);
      \u0275\u0275text(826, "Can I keep my existing domain?");
      \u0275\u0275elementStart(827, "span", 199);
      \u0275\u0275text(828, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(829, "div", 200)(830, "p");
      \u0275\u0275text(831, "Yes \u2014 you keep your existing domain (for example @yourcompany.com). We verify the domain, update your DNS settings and configure Google Workspace to send and receive on your existing address. No email address changes needed.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(832, "div", 201)(833, "button", 198);
      \u0275\u0275text(834, "What happens if I need to cancel?");
      \u0275\u0275elementStart(835, "span", 199);
      \u0275\u0275text(836, "+");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(837, "div", 200)(838, "p");
      \u0275\u0275text(839, "If you cancel, access to Google Workspace apps and your @yourcompany.com email stops at the end of the billing cycle. You can export all your data using Google Takeout before cancellation. XcellHost can also migrate your data to another platform if needed.");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(840, "div", 87);
      \u0275\u0275text(841, "Related products");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(842, "div", 202)(843, "a", 203)(844, "b");
      \u0275\u0275text(845, "Google Workspace Backup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(846, "span");
      \u0275\u0275text(847, "Secure your Gmail, Calendar, Contacts and Drive \u2014 retention beyond Google's own limits.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(848, "a", 203)(849, "b");
      \u0275\u0275text(850, "Microsoft 365");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(851, "span");
      \u0275\u0275text(852, "Office apps, Teams and Microsoft Copilot AI \u2014 the leading alternative.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(853, "a", 203)(854, "b");
      \u0275\u0275text(855, "Zoho Mail");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(856, "span");
      \u0275\u0275text(857, "Cost-effective business email for Indian SMBs \u2014 great for email-only needs.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(858, "a", 203)(859, "b");
      \u0275\u0275text(860, "Secure DMARC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(861, "span");
      \u0275\u0275text(862, "Managed SPF, DKIM and DMARC to stop domain spoofing and protect deliverability.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275element(863, "xh-insights-section", 204);
      \u0275\u0275elementStart(864, "div", 205)(865, "div")(866, "h3");
      \u0275\u0275text(867, "Ready to move your team to Google Workspace?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(868, "p");
      \u0275\u0275text(869, "FREE Consultation \xB7 FREE Demo \xB7 FREE Trial \xB7 24\xD77 support in English & Hindi \xB7 GST invoice in INR");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(870, "div", 206)(871, "a", 82);
      \u0275\u0275listener("click", function GoogleWorkspacePage_Template_a_click_871_listener($event) {
        return ctx.openCallback($event);
      });
      \u0275\u0275text(872, "Request a callback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(873, "a", 83);
      \u0275\u0275text(874, "\u26A1 Buy Now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(875, "a", 207);
      \u0275\u0275text(876, "\u2B07 Infosheet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(877, "a", 208);
      \u0275\u0275text(878, "Talk on WhatsApp");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(879, "div", 209)(880, "span");
      \u0275\u0275text(881, "\u{1F3C5} ISO 27001");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(882, "span");
      \u0275\u0275text(883, "\u{1F3C5} ISO 20000-1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(884, "span");
      \u0275\u0275text(885, "\u{1F91D} Google Cloud Partner");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(886, "span");
      \u0275\u0275text(887, "\u{1F570} Since 1999");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(888, "span");
      \u0275\u0275text(889, "\u{1F512} Secure Payments \u2014 UPI \xB7 Cards \xB7 NetBanking");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(890, "section", 210)(891, "div", 211)(892, "h2", 212);
      \u0275\u0275text(893, "Get the latest updates on new features, tutorials, and cloud hosting tips.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "form", 213);
      \u0275\u0275listener("submit", function GoogleWorkspacePage_Template_form_submit_894_listener($event) {
        return ctx.submitForm($event);
      });
      \u0275\u0275elementStart(895, "label", 214);
      \u0275\u0275text(896, "Email address");
      \u0275\u0275elementEnd();
      \u0275\u0275element(897, "input", 215);
      \u0275\u0275elementStart(898, "button", 216);
      \u0275\u0275text(899, "Subscribe Now");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(362);
      \u0275\u0275textInterpolate(ctx.monthlyTotal(0));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.quantities()[0] === 1 ? "per user / month" : "/month for " + ctx.quantities()[0] + " users", " \xB7 annual + GST");
      \u0275\u0275advance(20);
      \u0275\u0275property("value", ctx.quantities()[0])("max", 20);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.monthlyTotal(1));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.quantities()[1] === 1 ? "per user / month" : "/month for " + ctx.quantities()[1] + " users", " \xB7 annual + GST");
      \u0275\u0275advance(16);
      \u0275\u0275property("value", ctx.quantities()[1])("max", 300);
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.monthlyTotal(2));
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.quantities()[2] === 1 ? 425 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.quantities()[2] === 1 ? "per user / month" : "/month for " + ctx.quantities()[2] + " users", " \xB7 annual + GST");
      \u0275\u0275advance(18);
      \u0275\u0275property("value", ctx.quantities()[2])("max", 300);
      \u0275\u0275advance(33);
      \u0275\u0275property("value", ctx.quantities()[3]);
    }
  }, dependencies: [InsightsSectionComponent, QuantitySelectorComponent], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  --g-blue:#4285F4;\n  --g-red:#EA4335;\n  --g-yellow:#FBBC04;\n  --g-green:#34A853;\n  --g-grey:#5F6368;\n}\n[_ngcontent-%COMP%]:root {\n  --navy:#041E42;\n  --navy-2:#0A2A57;\n  --blue:#1565D8;\n  --blue-soft:#E8F0FD;\n  --orange:#FF8C1A;\n  --ice:#F2F6FC;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --line:#DCE5F2;\n  --white:#FFF;\n  --ok:#2ECC71;\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n  --g-blue:#4285F4;\n  --g-red:#EA4335;\n  --g-yellow:#FBBC04;\n  --g-green:#34A853;\n  --g-grey:#5F6368;\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml[_ngcontent-%COMP%] {\n  scroll-behavior: smooth;\n}\nbody[_ngcontent-%COMP%] {\n  font-family: var(--body);\n  color: var(--ink);\n  background: #fff;\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n  text-decoration: none;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n.wrap[_ngcontent-%COMP%] {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\nh1[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 800;\n  font-size: clamp(32px, 4.4vw, 48px);\n  line-height: 1.12;\n  letter-spacing: -.025em;\n  margin-bottom: 18px;\n}\nh2[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: clamp(25px, 3vw, 34px);\n  color: var(--navy);\n  letter-spacing: -.015em;\n  line-height: 1.2;\n  margin-bottom: 12px;\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  transition: .15s;\n  border: 1.5px solid transparent;\n  cursor: pointer;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: #fff;\n  animation: _ngcontent-%COMP%_glow 2.8s ease-in-out infinite;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: #e97a08;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  border-color: var(--line);\n  color: var(--navy);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.pp-hero[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .35);\n  color: #fff;\n}\n.pp-hero[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, .08);\n  color: #fff;\n}\n.pp-hero[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:disabled {\n  background: transparent;\n  border-color: rgba(255, 255, 255, .35);\n  color: #fff;\n  cursor: not-allowed;\n  opacity: .65;\n  font-family: inherit;\n  line-height: inherit;\n}\n.pp-cta[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%] {\n  border-color: rgba(255, 255, 255, .45);\n  color: #fff;\n}\n.pp-cta[_ngcontent-%COMP%]   .btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n  border-color: #fff;\n}\n.btn-wa[_ngcontent-%COMP%] {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.btn-wa[_ngcontent-%COMP%]:hover {\n  background: #1eb955;\n  border-color: #1eb955;\n  color: #fff;\n}\n.utility[_ngcontent-%COMP%] {\n  background: var(--navy);\n  color: #b9c9e2;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  z-index: 52;\n  overflow: hidden;\n}\n.utility[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px 24px;\n  min-height: 38px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.utility[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.utility[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #b9c9e2;\n}\n.utility[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.utility[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 6px 22px;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.utility[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  padding: 2px 0;\n  font-size: 12.5px;\n}\n.ubar-nums[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  padding-left: 18px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.utility[_ngcontent-%COMP%]   .phone[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  color: #fff;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #5FE08D !important;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa[_ngcontent-%COMP%]:hover {\n  color: #8ff0b0 !important;\n}\n.promo[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      #0E4CAB);\n  color: #fff;\n  text-align: center;\n  font-size: 13.5px;\n  padding: 8px 16px;\n}\n.promo[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #ffd9ac;\n}\n.promo[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  background: rgba(255, 255, 255, .15);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.promo[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: underline;\n}\n.xh-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #fff;\n  border-bottom: 1px solid #E7EBF3;\n  box-shadow: 0 8px 24px rgba(18, 42, 90, .06);\n}\n.xh-nav-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 80px;\n}\n.xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 74px;\n  width: auto;\n  display: block;\n}\n.xh-main-nav[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: 8px;\n}\n.xh-menu-link[_ngcontent-%COMP%] {\n  font: 600 13px/13px var(--body);\n  color: #263552;\n  background: none;\n  border: 0;\n  padding: 30px 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n  transition: color .15s;\n}\n.xh-menu-link[_ngcontent-%COMP%]:hover, \n.xh-menu-link.is-active[_ngcontent-%COMP%] {\n  color: var(--blue);\n}\n.xh-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.xh-icon-btn[_ngcontent-%COMP%] {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  cursor: pointer;\n  transition: .15s;\n}\n.xh-icon-btn[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.xh-mobile-toggle[_ngcontent-%COMP%] {\n  display: none;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n}\n.xh-mobile-toggle[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 19px;\n  height: 2px;\n  background: var(--navy);\n  border-radius: 2px;\n}\n.ppage[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.pp-hero[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      900px 420px at 80% -20%,\n      #0E3A78 0%,\n      var(--navy) 60%);\n  color: #fff;\n  padding: 56px 0;\n  position: relative;\n  overflow: hidden;\n  isolation: isolate;\n  min-height: 420px;\n  display: flex;\n  align-items: center;\n}\n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 3;\n  width: 100%;\n}\n.pph-grid[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .4;\n  background-image:\n    linear-gradient(rgba(127, 178, 255, .1) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(127, 178, 255, .1) 1px,\n      transparent 1px);\n  background-size: 44px 44px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at 30% 40%,\n      #000,\n      transparent 75%);\n  mask-image:\n    radial-gradient(\n      circle at 30% 40%,\n      #000,\n      transparent 75%);\n  animation: _ngcontent-%COMP%_pphgrid 20s linear infinite;\n}\n.pph-aur[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: .55;\n  z-index: 1;\n  pointer-events: none;\n  mix-blend-mode: screen;\n}\n.pph-a1[_ngcontent-%COMP%] {\n  width: 520px;\n  height: 520px;\n  left: -8%;\n  top: -30%;\n  background:\n    radial-gradient(\n      circle,\n      #1565D8,\n      transparent 65%);\n  animation: _ngcontent-%COMP%_aflow1 17s ease-in-out infinite alternate;\n}\n.pph-a2[_ngcontent-%COMP%] {\n  width: 480px;\n  height: 480px;\n  right: -6%;\n  top: -10%;\n  background:\n    radial-gradient(\n      circle,\n      #0C4EA8,\n      transparent 65%);\n  opacity: .4;\n  animation: _ngcontent-%COMP%_aflow2 21s ease-in-out infinite alternate;\n}\n.pph-a3[_ngcontent-%COMP%] {\n  width: 420px;\n  height: 420px;\n  left: 40%;\n  bottom: -40%;\n  background:\n    radial-gradient(\n      circle,\n      #7C3AED,\n      transparent 62%);\n  opacity: .28;\n  animation: _ngcontent-%COMP%_aflow3 19s ease-in-out infinite alternate;\n}\n.pph-scan[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 34%;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(127, 178, 255, .14),\n      transparent);\n  animation: _ngcontent-%COMP%_pphscan 7s ease-in-out infinite;\n}\n.pph-map[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n  overflow: hidden;\n}\n.pph-map[_ngcontent-%COMP%]   .wm-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  width: 520px;\n  height: 520px;\n  transform: translate(-50%, -50%);\n  border: 1px dashed rgba(143, 184, 255, .22);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_wmSpin 60s linear infinite;\n}\n.pph-map[_ngcontent-%COMP%]   .wm-ring.r2[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n  animation-duration: 42s;\n  animation-direction: reverse;\n  border-color: rgba(143, 184, 255, .16);\n}\n.orb[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(70px);\n  opacity: .3;\n  pointer-events: none;\n  z-index: 1;\n}\n.orb-1[_ngcontent-%COMP%] {\n  width: 340px;\n  height: 340px;\n  background: #1565D8;\n  top: -90px;\n  left: -70px;\n  animation: _ngcontent-%COMP%_drift 14s ease-in-out infinite;\n}\n.pph-scene[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 4%;\n  bottom: 0;\n  width: 48%;\n  z-index: 2;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 22%,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 22%,\n      #000);\n}\n.pph-illus[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 0;\n}\n.pph-illus-img[_ngcontent-%COMP%] {\n  width: 88%;\n  max-width: 520px;\n  max-height: 300px;\n  object-fit: contain;\n  filter: drop-shadow(0 18px 40px rgba(4, 30, 66, .35));\n  animation: _ngcontent-%COMP%_illusfloat 5.5s ease-in-out infinite;\n}\n.pph-powered-image[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 18px;\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: 0 5px 16px rgba(0, 20, 55, .18);\n}\n.pph-powered-image[_ngcontent-%COMP%]   .pw-lbl[_ngcontent-%COMP%] {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: #8FA2BD;\n}\n.pph-powered-image[_ngcontent-%COMP%]   .pw-sub[_ngcontent-%COMP%] {\n  font: 600 10px var(--body);\n  color: #51607A;\n  letter-spacing: .04em;\n}\n.g-lockup[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n}\n.g-lockup[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  flex: none;\n  display: block;\n}\n.g-word[_ngcontent-%COMP%] {\n  font: 500 19px/1 "Google Sans", var(--body);\n  color: #3c4043;\n  letter-spacing: -.01em;\n  white-space: nowrap;\n}\n.g-word[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: var(--g-grey);\n}\n.pp-crumb[_ngcontent-%COMP%] {\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: #7FB2FF;\n  margin-bottom: 14px;\n  animation: _ngcontent-%COMP%_pprise .5s cubic-bezier(.19, 1, .22, 1) .12s both;\n}\n.pp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  margin: 0 0 14px;\n  color: #fff;\n  font: 800 clamp(22px, 3.8vw, 42px)/1.12 var(--disp);\n  letter-spacing: -.025em;\n  animation: _ngcontent-%COMP%_pprise .55s cubic-bezier(.19, 1, .22, 1) .2s both;\n}\n.pp-title-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  flex: none;\n  font: inherit;\n  line-height: 1;\n  letter-spacing: 0;\n}\n.pp-brand-xcell[_ngcontent-%COMP%] {\n  color: #E60012;\n}\n.pp-brand-family[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.pp-title-divider[_ngcontent-%COMP%] {\n  margin-left: .18em;\n  color: #fff;\n  opacity: .55;\n}\n.pp-title-name[_ngcontent-%COMP%] {\n  margin-left: .18em;\n}\n.pp-tagline[_ngcontent-%COMP%] {\n  font-size: 17px;\n  color: #c7d5ec;\n  max-width: 60ch;\n  margin-bottom: 10px;\n  animation: _ngcontent-%COMP%_pprise .55s cubic-bezier(.19, 1, .22, 1) .3s both;\n}\n.pp-tagline-support[_ngcontent-%COMP%] {\n  width: fit-content;\n  margin: 0 0 16px;\n  color: #67B7FF;\n  font: 700 clamp(18px, 1.7vw, 23px)/1.35 var(--body);\n  text-wrap: balance;\n}\n.pp-typewriter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  min-height: 32px;\n  margin: 0 0 10px;\n  color: #69B6FF;\n  font: 600 clamp(17px, 1.4vw, 22px)/1.35 var(--body);\n}\n.pp-typewriter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 2px;\n  height: 1.15em;\n  margin-left: 4px;\n  background: currentColor;\n  animation: _ngcontent-%COMP%_ppcursor .75s steps(1, end) infinite;\n}\n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-crumb[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-tagline[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-tagline-support[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-typewriter[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-chips[_ngcontent-%COMP%], \n.pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-hero-grid[_ngcontent-%COMP%] {\n  max-width: 58%;\n}\n.pp-hero-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 36px;\n  align-items: start;\n}\n.pp-hpoints[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  gap: 10px 32px;\n  width: fit-content;\n  max-width: 100%;\n  margin: 8px 0 18px;\n}\n.pp-hpoint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 14px;\n  color: #cfe0f7;\n}\n.pp-hpoint[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%] {\n  flex: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--blue);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-hpoint[_ngcontent-%COMP%]   .tick[_ngcontent-%COMP%]:before {\n  content: "\\2713";\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n}\n.pp-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 22px;\n}\n.pp-chip[_ngcontent-%COMP%] {\n  font: 600 12px var(--mono);\n  background: rgba(255, 255, 255, .1);\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 99px;\n  padding: 7px 16px;\n}\n.pp-chip.price[_ngcontent-%COMP%] {\n  background: rgba(255, 140, 26, .16);\n  border-color: rgba(255, 140, 26, .5);\n  color: #ffd9ac;\n}\n.hero-ctas[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  animation: _ngcontent-%COMP%_pprise .55s cubic-bezier(.19, 1, .22, 1) .46s both;\n}\n.pp-trust[_ngcontent-%COMP%] {\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.pp-trust[_ngcontent-%COMP%]   .wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  font-size: 12.5px;\n  color: var(--slate);\n  font-weight: 500;\n}\n.pp-trust[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.pp-body[_ngcontent-%COMP%] {\n  padding: 28px 0 35px 0;\n}\n.pp-sec[_ngcontent-%COMP%] {\n  font: 700 15px/1.35 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin: 19px 0 16px 0;\n}\n.pp-sec[_ngcontent-%COMP%]:first-child {\n  margin-top: 0;\n}\n.pp-ov[_ngcontent-%COMP%] {\n  font-size: 16.5px;\n  color: var(--ink);\n  line-height: 1.75;\n  max-width: 75ch;\n}\n.pp-ov[_ngcontent-%COMP%]    + .pp-ov[_ngcontent-%COMP%] {\n  margin-top: 14px;\n}\n.pp-ov[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n}\n.pp-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-top: 24px;\n}\n.pp-stat[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px 18px;\n  background: var(--ice);\n  text-align: center;\n}\n.pp-stat[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font: 800 26px var(--disp);\n  color: var(--navy);\n  letter-spacing: -.02em;\n  line-height: 1.1;\n}\n.pp-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 5px;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.pp-gemini[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  border-radius: 18px;\n  padding: 34px;\n  background:\n    linear-gradient(\n      115deg,\n      var(--navy),\n      #0E3A78 70%);\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n.pp-gemini[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(127, 178, 255, .08) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(127, 178, 255, .08) 1px,\n      transparent 1px);\n  background-size: 38px 38px;\n  pointer-events: none;\n}\n.pp-gemini[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.pp-gemini[_ngcontent-%COMP%]   .lbl[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: #B9CFFF;\n  margin-bottom: 12px;\n}\n.pp-gemini[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: clamp(21px, 2.4vw, 28px);\n  font-weight: 700;\n  line-height: 1.25;\n  margin-bottom: 10px;\n  letter-spacing: -.02em;\n}\n.pp-gemini[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  color: #cfe0fa;\n  font-size: 14.5px;\n  line-height: 1.7;\n  margin-bottom: 22px;\n  max-width: 78ch;\n}\n.pp-gemgrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.gemcard[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, .06);\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 14px;\n  padding: 20px 18px;\n}\n.gemcard[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15px;\n  color: #fff;\n  margin-bottom: 6px;\n}\n.gemcard[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #c2d6f5;\n  line-height: 1.6;\n}\n.pp-gemfoot[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  font: 500 12.5px var(--mono);\n  color: #9FBEEC;\n}\n.pp-apps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-top: 20px;\n}\n.pp-app[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px 18px;\n  background: #fff;\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  transition: .18s;\n}\n.pp-app[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 10px 24px rgba(21, 101, 216, .1);\n  transform: translateY(-3px);\n}\n.pp-app[_ngcontent-%COMP%]   .ai[_ngcontent-%COMP%] {\n  flex: none;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-app[_ngcontent-%COMP%]   .ai[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  max-height: 40px;\n}\n.pp-app[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15px;\n  color: var(--navy);\n  line-height: 1.3;\n  margin-bottom: 3px;\n}\n.pp-app[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-appsfoot[_ngcontent-%COMP%] {\n  margin-top: 14px;\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.pp-appsfoot[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: var(--navy);\n}\n.pp-vids[_ngcontent-%COMP%] {\n  width: min(900px, 100%);\n  margin: 0 0 12px;\n}\n.pv-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.pv-tab[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--slate);\n  font: 600 13.5px var(--body);\n  padding: 9px 20px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: .2s;\n}\n.pv-tab[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.pv-tab.active[_ngcontent-%COMP%] {\n  background: var(--navy);\n  border-color: var(--navy);\n  color: #fff;\n}\n.pv-frame[_ngcontent-%COMP%] {\n  aspect-ratio: 16/9;\n  border-radius: 16px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy),\n      #0E3A78 60%,\n      #0C4EA8);\n  position: relative;\n  box-shadow: 0 20px 50px rgba(4, 30, 66, .25);\n}\n.pv-frame[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  display: block;\n}\n.pv-poster[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  background: transparent;\n}\n.pv-poster[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(4, 30, 66, .35),\n      rgba(4, 30, 66, .6));\n}\n.pv-play[_ngcontent-%COMP%] {\n  position: relative;\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .95);\n  color: var(--navy);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  padding-left: 5px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .35);\n  transition: transform .2s;\n}\n.pv-poster[_ngcontent-%COMP%]:hover   .pv-play[_ngcontent-%COMP%] {\n  transform: scale(1.08);\n  background: #fff;\n}\n.pv-plabel[_ngcontent-%COMP%] {\n  position: relative;\n  color: #fff;\n  font: 600 14px var(--body);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, .5);\n}\n.pv-note[_ngcontent-%COMP%] {\n  font-size: 11.5px;\n  color: #8FA2BD;\n  margin-top: 10px;\n}\n.pp-plans[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n.ppl[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 16px;\n  padding: 24px 20px;\n  background: #fff;\n  text-align: center;\n  position: relative;\n  transition:\n    transform .3s,\n    box-shadow .3s,\n    border-color .3s;\n  display: flex;\n  flex-direction: column;\n}\n.ppl[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 36px rgba(4, 30, 66, .1);\n}\n.ppl.hot[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n}\n.ppl[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -11px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--blue);\n  color: #fff;\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  white-space: nowrap;\n}\n.ppl.hot[_ngcontent-%COMP%]   .tag[_ngcontent-%COMP%] {\n  background: var(--orange);\n}\n.ppl[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--navy);\n  margin-bottom: 8px;\n}\n.ppl[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%] {\n  font-family: var(--mono);\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.ppl[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 26px;\n}\n.ppl[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   del[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #9AA8BE;\n  margin-left: 6px;\n  font-weight: 500;\n}\n.ppl[_ngcontent-%COMP%]   .amt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11.5px;\n  color: var(--slate);\n  margin-top: 2px;\n}\n.ppl[_ngcontent-%COMP%]   .save[_ngcontent-%COMP%] {\n  font: 600 11px var(--mono);\n  color: #128A42;\n  background: rgba(29, 168, 85, .1);\n  border-radius: 99px;\n  padding: 3px 10px;\n  display: inline-block;\n  margin-bottom: 14px;\n}\n.ppl[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  text-align: left;\n  margin: 0 0 16px;\n  flex: 1;\n}\n.ppl[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.5;\n  padding: 5px 0 5px 20px;\n  position: relative;\n}\n.ppl[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: var(--ok);\n  font-weight: 700;\n  font-size: 11px;\n}\n.ppl[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.no[_ngcontent-%COMP%] {\n  color: #9AA8BE;\n}\n.ppl[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.no[_ngcontent-%COMP%]:before {\n  content: "\\2715";\n  color: #C8D3E3;\n}\n.ppl[_ngcontent-%COMP%]   .btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ppl[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.pp-partner[_ngcontent-%COMP%] {\n  margin-top: 18px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 26px;\n  background: #fff;\n}\n.pp-partnerhead[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n  padding-bottom: 20px;\n  border-bottom: 1px solid var(--line);\n  margin-bottom: 20px;\n}\n.pp-partnerhead[_ngcontent-%COMP%]   .seal[_ngcontent-%COMP%] {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 24px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--ice);\n}\n.pp-partnerhead[_ngcontent-%COMP%]   .seal[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font: 600 9px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.pp-partnerhead[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 240px;\n}\n.pp-partnerhead[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16.5px;\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.pp-partnerhead[_ngcontent-%COMP%]   .txt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.pp-partnergrid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.pp-partnergrid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.pp-partnergrid[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.pp-steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.pstep[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 22px 20px;\n  background: var(--ice);\n  position: relative;\n}\n.pstep[_ngcontent-%COMP%]   .num[_ngcontent-%COMP%] {\n  font: 800 13px var(--mono);\n  color: #fff;\n  background: var(--blue);\n  border-radius: 8px;\n  padding: 4px 10px;\n  display: inline-block;\n  margin-bottom: 12px;\n  letter-spacing: .06em;\n}\n.pstep[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16px;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.pstep[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.pp-feats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.pp-feat[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px 20px;\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  transition: .15s;\n  background: #fff;\n}\n.pp-feat[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 22px rgba(21, 101, 216, .1);\n}\n.pp-feat[_ngcontent-%COMP%]   .fic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n  font-weight: 700;\n}\n.pp-feat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.pp-feat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--navy);\n  font-size: 14.5px;\n  margin-bottom: 3px;\n}\n.pp-feat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 8px 0 0;\n}\n.pp-feat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.5;\n  padding: 3px 0 3px 15px;\n  position: relative;\n}\n.pp-feat[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: var(--blue);\n  font-weight: 700;\n}\n.pp-bens[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.pb[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: #fff;\n}\n.pb[_ngcontent-%COMP%]   .ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  background: rgba(29, 168, 85, .12);\n  color: #128A42;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n.pb[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.pb[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--navy);\n  font-size: 14.5px;\n  margin-bottom: 2px;\n}\n.pp-uses[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  grid-auto-rows: 1fr;\n  gap: 12px;\n  align-items: stretch;\n}\n.pu[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 12px;\n  padding: 16px 18px;\n  background: var(--ice);\n  font-size: 13.5px;\n  color: var(--ink);\n  min-width: 0;\n  height: 100%;\n}\n.pu-ic[_ngcontent-%COMP%] {\n  font-size: 19px;\n  display: block;\n  margin-bottom: 6px;\n}\n.pu[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  color: var(--navy);\n  margin-bottom: 3px;\n  font-size: 14px;\n}\n.pp-secrows[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0 34px;\n  margin: 20px 0 6px;\n}\n.psrow[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 14px;\n  padding: 12px 0;\n  border-bottom: 1px dashed var(--line);\n}\n.psrow[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.psrow[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font: 600 13.5px var(--mono);\n  color: var(--navy);\n  text-align: right;\n}\n.pp-secfoot[_ngcontent-%COMP%] {\n  margin: 18px 0 0;\n  font-size: 13px;\n  color: var(--slate);\n  font-family: var(--mono);\n}\n.pp-why[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.pw[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: var(--ice);\n}\n.pw-ic[_ngcontent-%COMP%] {\n  display: flex;\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: #fff;\n  border: 1px solid var(--line);\n  font-size: 18px;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n.pw[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  margin-bottom: 3px;\n}\n.pw[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12.5px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.pp-tcards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.tcard[_ngcontent-%COMP%] {\n  position: relative;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px 22px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(4, 30, 66, .06);\n  transition: transform .3s;\n}\n.tcard[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n.quote-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: 0 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-family: Georgia, serif;\n}\n.tav[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  margin: 0 auto 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #7C3AED);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: 700 22px var(--disp);\n}\n.tname[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: var(--disp);\n  font-weight: 700;\n  color: var(--navy);\n  font-size: 16px;\n}\n.trole[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-bottom: 12px;\n}\n.tstars[_ngcontent-%COMP%] {\n  text-align: center;\n  color: var(--orange);\n  letter-spacing: 2px;\n  margin-bottom: 14px;\n}\n.tcard[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.6;\n  text-align: center;\n  margin: 0;\n}\n.pp-faq[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.faq2[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  overflow: hidden;\n  transition: border-color .25s, box-shadow .25s;\n  align-self: start;\n}\n.faq2.open[_ngcontent-%COMP%] {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq2-q[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 18px 20px;\n  font: 700 15px var(--disp);\n  color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.faq2-ic[_ngcontent-%COMP%] {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 600;\n  transition: transform .3s, background .25s;\n}\n.faq2.open[_ngcontent-%COMP%]   .faq2-ic[_ngcontent-%COMP%] {\n  transform: rotate(135deg);\n  background: var(--blue);\n  color: #fff;\n}\n.faq2-a[_ngcontent-%COMP%] {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .35s cubic-bezier(.4, 0, .2, 1);\n}\n.faq2.open[_ngcontent-%COMP%]   .faq2-a[_ngcontent-%COMP%] {\n  max-height: 460px;\n}\n.faq2-a[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding: 0 20px 18px;\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.pp-related[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.rel[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px;\n  background: var(--ice);\n  transition: .2s;\n  display: block;\n}\n.rel[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  background: #fff;\n  box-shadow: 0 10px 24px rgba(21, 101, 216, .1);\n  transform: translateY(-3px);\n}\n.rel[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15px;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.rel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.pp-blog[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.bl[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px;\n  background: #fff;\n  transition: .2s;\n  display: block;\n}\n.bl[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 10px 26px rgba(21, 101, 216, .1);\n  transform: translateY(-3px);\n}\n.bl[_ngcontent-%COMP%]   .kicker[_ngcontent-%COMP%] {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin-bottom: 8px;\n}\n.bl[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 15.5px;\n  font-weight: 700;\n  color: var(--navy);\n  line-height: 1.35;\n  margin-bottom: 8px;\n}\n.bl[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.bl[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-top: 10px;\n  font: 600 12.5px var(--body);\n  color: var(--blue);\n}\n.pp-blogbtn-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin: 22px 0 4px;\n}\n.pp-blogbtn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  color: #fff;\n  border: none;\n  padding: 12px 26px;\n  border-radius: 99px;\n  font-weight: 600;\n  font-size: 14px;\n  box-shadow: 0 10px 26px rgba(21, 101, 216, .22);\n  transition: transform .25s, box-shadow .25s;\n}\n.pp-blogbtn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 34px rgba(21, 101, 216, .3);\n  color: #fff;\n}\n.pp-contact[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 22px;\n  margin-top: 18px;\n}\n.pp-ccard[_ngcontent-%COMP%] {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 26px;\n  background: var(--ice);\n}\n.pp-ccard[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.pp-ccard[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin-bottom: 16px;\n}\n.pp-clist[_ngcontent-%COMP%] {\n  list-style: none;\n  display: grid;\n  gap: 10px;\n}\n.pp-clist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 13px 16px;\n  transition: .15s;\n}\n.pp-clist[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .1);\n}\n.pp-clist[_ngcontent-%COMP%]   .ci[_ngcontent-%COMP%] {\n  flex: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.pp-clist[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 14px;\n  color: var(--navy);\n}\n.pp-clist[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.pp-form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 12px;\n}\n.pp-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font: 600 12px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 5px;\n}\n.pp-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.pp-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 14px;\n  font: 400 14px var(--body);\n  color: var(--ink);\n  background: #fff;\n  transition: .15s;\n}\n.pp-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.pp-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue);\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.pp-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  min-height: 88px;\n  resize: vertical;\n}\n.pp-form[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.pp-formnote[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--slate);\n  text-align: center;\n}\n.pp-cta[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  background:\n    linear-gradient(\n      105deg,\n      var(--blue),\n      #0C3E8F);\n  color: #fff;\n  border-radius: 16px;\n  padding: 36px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.pp-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-size: 22px;\n  font-weight: 700;\n}\n.pp-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #cfe0fa;\n  font-size: 14.5px;\n  margin-top: 4px;\n}\n.pp-ctabtns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.pp-proof[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 22px;\n}\n.pp-proof[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font: 600 12px var(--body);\n  color: var(--slate);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 8px 16px;\n  background: #fff;\n}\n.newsletter[_ngcontent-%COMP%] {\n  background: var(--ice);\n  border-top: 1px solid var(--line);\n  padding: 19px 0 19px 0;\n}\n.newsletter-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 26px;\n  flex-wrap: wrap;\n}\n.newsletter[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: clamp(18px, 2vw, 23px);\n  margin: 0;\n  max-width: 52ch;\n  color: var(--navy);\n}\n.newsletter-form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 12px 16px;\n  font: 400 14px var(--body);\n  min-width: 260px;\n  background: #fff;\n}\n.newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: var(--blue);\n}\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: var(--orange);\n  color: #fff;\n  border: 0;\n  border-radius: 10px;\n  padding: 12px 24px;\n  font: 600 14px var(--body);\n  cursor: pointer;\n  transition: .15s;\n}\n.newsletter-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #e97a08;\n}\nfooter[_ngcontent-%COMP%] {\n  background: #3B63E8;\n  color: #fff;\n  padding: 48px 0 28px;\n  font-size: 14px;\n}\n.nf-top[_ngcontent-%COMP%] {\n  margin-bottom: 28px;\n}\n.nf-logo[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.nf-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 46px;\n  width: auto;\n  background: #fff;\n  padding: 5px 8px;\n  border-radius: 8px;\n}\n.nf-tag[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #DCE6FF;\n  line-height: 1.5;\n}\n.nf-tag[_ngcontent-%COMP%]   em[_ngcontent-%COMP%] {\n  color: #BBD0FF;\n  font-style: normal;\n  font-size: 11px;\n}\n.nf-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #E4ECFF;\n  margin: 0 0 20px;\n  max-width: 94ch;\n  text-align: justify;\n  text-align-last: left;\n}\n.nf-social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.nfs[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n}\n.nf-rows[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 22px;\n  margin-bottom: 6px;\n}\n.nf-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: baseline;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.nf-rlbl[_ngcontent-%COMP%] {\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 15px;\n  color: #fff;\n  min-width: 120px;\n  flex: none;\n  margin: 0;\n}\n.nf-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 22px;\n  flex: 1;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #E4ECFF;\n  font-size: 14px;\n  transition: color .2s;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  content: "\\203a";\n  color: #BBD0FF;\n  margin-right: 6px;\n}\n.nf-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.nf-cert-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin: 16px 0;\n  flex-wrap: wrap;\n  border-top: 1px solid rgba(255, 255, 255, .1);\n  padding-top: 16px;\n}\n.nf-isos[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-iso[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #2E4FC4;\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 62px;\n  color: #fff;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 14px;\n}\n.nf-iso[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 9px;\n  letter-spacing: .05em;\n  color: #BBD0FF;\n}\n.nf-pays[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-pay[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #1C2A3A;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 7px 12px;\n  border-radius: 6px;\n}\n.nf-bottom[_ngcontent-%COMP%] {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 12.5px;\n  color: #C3D3FF;\n}\n.wa-fab[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 22px;\n  bottom: 22px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #25D366;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  box-shadow: 0 12px 30px rgba(37, 211, 102, .4);\n  z-index: 200;\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  right: 22px;\n  bottom: 22px;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 10px 26px rgba(4, 30, 66, .14);\n  z-index: 200;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .25s;\n}\n.back-to-top.show[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n@keyframes _ngcontent-%COMP%_pprise {\n  0% {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes _ngcontent-%COMP%_ppcursor {\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes _ngcontent-%COMP%_illusfloat {\n  0%, to {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes _ngcontent-%COMP%_pphgrid {\n  to {\n    background-position: 44px 44px;\n  }\n}\n@keyframes _ngcontent-%COMP%_pphscan {\n  0%, to {\n    transform: translateY(-10%);\n    opacity: .5;\n  }\n  50% {\n    transform: translateY(230%);\n    opacity: 1;\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow1 {\n  0% {\n    transform: translate(0) scale(1);\n  }\n  to {\n    transform: translate(90px, 50px) scale(1.18);\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow2 {\n  0% {\n    transform: translate(0) scale(1.1);\n  }\n  to {\n    transform: translate(-80px, 60px) scale(.95);\n  }\n}\n@keyframes _ngcontent-%COMP%_aflow3 {\n  0% {\n    transform: translate(0) scale(1);\n  }\n  to {\n    transform: translate(60px, -45px) scale(1.22);\n  }\n}\n@keyframes _ngcontent-%COMP%_wmSpin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@keyframes _ngcontent-%COMP%_drift {\n  0%, to {\n    transform: translate(0) scale(1);\n  }\n  50% {\n    transform: translate(34px, -26px) scale(1.08);\n  }\n}\n@keyframes _ngcontent-%COMP%_glow {\n  0%, to {\n    box-shadow: 0 0 rgba(255, 140, 26, .5);\n  }\n  50% {\n    box-shadow: 0 0 0 13px rgba(255, 140, 26, 0);\n  }\n}\n@media (max-width: 1100px) {\n  .xh-main-nav[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-mobile-toggle[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .pp-feats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-stats[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .pp-plans[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .pp-gemgrid[_ngcontent-%COMP%], \n   .pp-partnergrid[_ngcontent-%COMP%], \n   .pp-steps[_ngcontent-%COMP%], \n   .pp-related[_ngcontent-%COMP%], \n   .pp-blog[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 1000px) {\n  .pp-bens[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-why[_ngcontent-%COMP%], \n   .pp-uses[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-apps[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 900px) {\n  .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-crumb[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-tagline[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-tagline-support[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-typewriter[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-chips[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]    > .wrap[_ngcontent-%COMP%]    > .pp-hero-grid[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .pph-scene[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    top: 0;\n    padding: 8px 0 4px;\n    order: -1;\n    -webkit-mask-image: none;\n    mask-image: none;\n  }\n  .pph-illus-img[_ngcontent-%COMP%] {\n    width: 58%;\n    max-width: 260px;\n  }\n  .pph-map[_ngcontent-%COMP%]   .wm-ring[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .pp-gemini[_ngcontent-%COMP%] {\n    padding: 26px;\n  }\n  .pp-contact[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-tcards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 820px) {\n  .pp-hero[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n@media (max-width: 760px) {\n  .pp-feats[_ngcontent-%COMP%], \n   .pp-bens[_ngcontent-%COMP%], \n   .pp-plans[_ngcontent-%COMP%], \n   .pp-why[_ngcontent-%COMP%], \n   .pp-uses[_ngcontent-%COMP%], \n   .pp-secrows[_ngcontent-%COMP%], \n   .pp-faq[_ngcontent-%COMP%], \n   .pp-stats[_ngcontent-%COMP%], \n   .pp-apps[_ngcontent-%COMP%], \n   .pp-gemgrid[_ngcontent-%COMP%], \n   .pp-partnergrid[_ngcontent-%COMP%], \n   .pp-steps[_ngcontent-%COMP%], \n   .pp-related[_ngcontent-%COMP%], \n   .pp-blog[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .pp-hero[_ngcontent-%COMP%] {\n    min-height: 340px;\n    padding: 40px 0;\n  }\n  .pp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .pp-tagline[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .pp-body[_ngcontent-%COMP%] {\n    padding: 20px 0 28px 0;\n  }\n  .pp-cta[_ngcontent-%COMP%] {\n    padding: 28px 22px;\n  }\n  .pp-cta[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .hero-ctas[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%], \n   .pp-ctabtns[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .pv-frame[_ngcontent-%COMP%] {\n    border-radius: 12px;\n  }\n  .nf-bottom[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .newsletter-form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .newsletter-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n@media (max-width: 620px) {\n  .pp-hpoints[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    width: 100%;\n  }\n  .pp-form[_ngcontent-%COMP%]   .row2[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .xh-nav-wrap[_ngcontent-%COMP%] {\n    height: 64px;\n    padding: 0 14px;\n    gap: 10px;\n  }\n  .xh-brand[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 52px;\n  }\n  .xh-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .xh-icon-btn[_ngcontent-%COMP%], \n   .xh-mobile-toggle[_ngcontent-%COMP%] {\n    width: 38px;\n    height: 38px;\n    border-radius: 10px;\n  }\n  .promo[_ngcontent-%COMP%] {\n    font-size: 12px;\n    padding: 7px 12px;\n  }\n  .pp-partner[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .pph-grid[_ngcontent-%COMP%], \n   .pph-aur[_ngcontent-%COMP%], \n   .pph-scan[_ngcontent-%COMP%], \n   .pph-map[_ngcontent-%COMP%]   .wm-ring[_ngcontent-%COMP%], \n   .pph-illus-img[_ngcontent-%COMP%], \n   .orb[_ngcontent-%COMP%], \n   .btn-primary[_ngcontent-%COMP%], \n   .pp-crumb[_ngcontent-%COMP%], \n   .pp-hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .pp-tagline[_ngcontent-%COMP%], \n   .hero-ctas[_ngcontent-%COMP%] {\n    animation: none;\n    opacity: 1;\n    transform: none;\n  }\n}\n.quantity-total[_ngcontent-%COMP%] {\n  color: #041e42;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0 0 14px;\n  text-align: center;\n}\n/*# sourceMappingURL=google-workspace.page.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GoogleWorkspacePage, [{
    type: Component,
    args: [{ selector: "xh-google-workspace-page", standalone: true, imports: [InsightsSectionComponent, QuantitySelectorComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<!-- ============ PRODUCT PAGE ============ -->\r
<div id="ppage" class="ppage as-page">\r
\r
  <!-- ---------- HERO ---------- -->\r
  <section class="pp-hero">\r
    <div class="pph-map"><div class="wm-ring"></div><div class="wm-ring r2"></div></div>\r
    <span class="pph-grid"></span>\r
    <span class="pph-aur pph-a1"></span>\r
    <span class="pph-aur pph-a2"></span>\r
    <span class="pph-aur pph-a3"></span>\r
    <span class="pph-scan"></span>\r
    <span class="orb orb-1"></span>\r
\r
    <div class="pph-scene has-illus standalone-illus" aria-hidden="true">\r
      <div class="pph-illus">\r
        <svg class="pph-illus-img" viewBox="0 0 540 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Google Workspace illustration">\r
          <defs>\r
            <linearGradient id="gWin" x1="0" y1="0" x2="1" y2="1">\r
              <stop offset="0" stop-color="#FFFFFF"/><stop offset="1" stop-color="#E9F0FB"/>\r
            </linearGradient>\r
            <linearGradient id="gGem" x1="0" y1="0" x2="1" y2="1">\r
              <stop offset="0" stop-color="#4285F4"/><stop offset="0.55" stop-color="#9B72CB"/><stop offset="1" stop-color="#D96570"/>\r
            </linearGradient>\r
          </defs>\r
          <!-- window -->\r
          <rect x="26" y="22" width="488" height="276" rx="18" fill="url(#gWin)" stroke="#C7D8F4" stroke-width="1.5"/>\r
          <rect x="26" y="22" width="488" height="40" rx="18" fill="#0A2A57"/>\r
          <rect x="26" y="48" width="488" height="14" fill="#0A2A57"/>\r
          <circle cx="50" cy="42" r="5" fill="#FF5F57"/><circle cx="68" cy="42" r="5" fill="#FFBD2E"/><circle cx="86" cy="42" r="5" fill="#28C840"/>\r
          <rect x="206" y="34" width="128" height="16" rx="8" fill="#12386F"/>\r
          <!-- app rail, Google product colours -->\r
          <rect x="26" y="62" width="66" height="236" fill="#F2F6FC"/>\r
          <rect x="42" y="78"  width="34" height="34" rx="9" fill="#EA4335"/>\r
          <rect x="42" y="122" width="34" height="34" rx="9" fill="#34A853"/>\r
          <rect x="42" y="166" width="34" height="34" rx="9" fill="#4285F4"/>\r
          <rect x="42" y="210" width="34" height="34" rx="9" fill="#0F9D58"/>\r
          <rect x="42" y="254" width="34" height="34" rx="9" fill="#FBBC04"/>\r
          <!-- inbox rows -->\r
          <rect x="108" y="80" width="382" height="44" rx="10" fill="#FFFFFF" stroke="#DCE5F2"/>\r
          <circle cx="130" cy="102" r="12" fill="#EA4335" opacity=".18"/>\r
          <rect x="152" y="92" width="132" height="8" rx="4" fill="#1C2A3A" opacity=".6"/>\r
          <rect x="152" y="107" width="204" height="7" rx="3.5" fill="#51607A" opacity=".4"/>\r
          <rect x="108" y="134" width="382" height="44" rx="10" fill="#FFFFFF" stroke="#DCE5F2"/>\r
          <circle cx="130" cy="156" r="12" fill="#4285F4" opacity=".18"/>\r
          <rect x="152" y="146" width="106" height="8" rx="4" fill="#1C2A3A" opacity=".6"/>\r
          <rect x="152" y="161" width="180" height="7" rx="3.5" fill="#51607A" opacity=".4"/>\r
          <!-- Gemini assist card -->\r
          <rect x="108" y="190" width="382" height="98" rx="12" fill="#FFFFFF" stroke="#C9D9F5"/>\r
          <g transform="translate(134,222)">\r
            <path d="M0 -16l4.2 11.8L16 0 4.2 4.2 0 16l-4.2-11.8L-16 0l11.8-4.2z" fill="url(#gGem)"/>\r
          </g>\r
          <rect x="162" y="208" width="150" height="9" rx="4.5" fill="#1C2A3A" opacity=".62"/>\r
          <rect x="162" y="226" width="300" height="7" rx="3.5" fill="#51607A" opacity=".38"/>\r
          <rect x="162" y="242" width="262" height="7" rx="3.5" fill="#51607A" opacity=".3"/>\r
          <rect x="162" y="262" width="86" height="16" rx="8" fill="#4285F4" opacity=".16"/>\r
          <rect x="256" y="262" width="70" height="16" rx="8" fill="#34A853" opacity=".16"/>\r
          <!-- Google G badge -->\r
          <g transform="translate(452,246) scale(0.72) translate(-24,-24)">\r
            <circle cx="24" cy="24" r="30" fill="#fff" stroke="#DCE5F2"/>\r
            <path d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" fill="#4285F4"/>\r
            <path d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" fill="#34A853"/>\r
            <path d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" fill="#FBBC04"/>\r
            <path d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" fill="#EA4335"/>\r
          </g>\r
        </svg>\r
        <div class="pph-powered-mark pph-powered-image">\r
          <span class="pw-lbl">Powered by</span>\r
          <span class="g-lockup">\r
            <svg width="24" height="24" viewBox="0 0 48 48" aria-hidden="true">\r
              <path d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" fill="#4285F4"/>\r
              <path d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" fill="#34A853"/>\r
              <path d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" fill="#FBBC04"/>\r
              <path d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" fill="#EA4335"/>\r
            </svg>\r
            <span class="g-word">Google <b>Workspace</b></span>\r
          </span>\r
          <span class="pw-sub">Authorised Reseller &middot; India</span>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <div class="wrap">\r
      <div class="pp-crumb">Home &rsaquo; Cloud &rsaquo; Email &amp; Collaboration</div>\r
      <h1>\r
        <span class="pp-title-brand"><span class="pp-brand-xcell">Xcell</span><span class="pp-brand-family">Cloud</span></span>\r
        <span class="pp-title-divider">|</span>\r
        <span class="pp-title-name">Google Workspace</span>\r
      </h1>\r
      <p class="pp-tagline">Professional Gmail, 2 TB Drive, HD video meetings and Gemini AI &mdash; in one subscription.</p>\r
      <p class="pp-tagline-support">Gmail &middot; Meet &middot; Drive &middot; Docs &middot; Gemini AI</p>\r
      <div class="pp-typewriter"><span id="tw"></span><i></i></div>\r
\r
      <div class="pp-chips">\r
        <span class="pp-chip price">From &#8377;99/user/mo &middot; annual</span>\r
        <span class="pp-chip">Gemini AI from Starter &mdash; no extra charge</span>\r
        <span class="pp-chip">GST invoice &middot; INR billing</span>\r
      </div>\r
\r
      <div class="pp-hero-grid">\r
        <div class="pp-hero-l">\r
          <div class="pp-hpoints">\r
            <div class="pp-hpoint"><span class="tick"></span>Gemini AI included from Starter</div>\r
            <div class="pp-hpoint"><span class="tick"></span>Free data migration, zero data loss</div>\r
            <div class="pp-hpoint"><span class="tick"></span>99.9% uptime SLA</div>\r
            <div class="pp-hpoint"><span class="tick"></span>MX, SPF, DKIM &amp; DMARC set up by us</div>\r
          </div>\r
          <div class="hero-ctas">\r
            <a class="btn btn-primary" href="#contact" (click)="openCallback($event)">Get a Quote</a>\r
            <a class="btn btn-ghost" href="#pricing">View Plans</a>\r
            \r
            <button class="btn btn-ghost" type="button" disabled>7 Day's Free Trail</button>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- ---------- TRUST STRIP ---------- -->\r
  <div class="pp-trust">\r
    <div class="wrap">\r
      <span><b>ISO 27001</b> &amp; <b>20000-1</b> certified</span>\r
      <span><b>Google Cloud</b> Partner</span>\r
      <span><b>10,000+</b> customers</span>\r
      <span><b>Since 1999</b></span>\r
      <span><b>99.95% uptime SLA</b></span>\r
      <span><b>24&times;7</b> NOC + SOC</span>\r
    </div>\r
  </div>\r
\r
  <!-- ---------- BODY ---------- -->\r
  <div class="pp-body">\r
    <div class="wrap">\r
\r
      <!-- OVERVIEW -->\r
      <div class="pp-sec">Overview &mdash; What is Google Workspace?</div>\r
      <p class="pp-ov">\r
        Google Workspace gives your business a professional <b>@yourcompany.com</b> email address instead of @gmail.com,\r
        plus admin controls, 20 GB to 5 TB+ of storage, meeting recording, eSignature, Gemini AI and a 99.9% uptime SLA\r
        &mdash; none of which exist in free Gmail. It is one subscription covering Gmail, Meet, Drive, Docs, Sheets,\r
        Slides, Chat, Calendar and 50+ more apps.\r
      </p>\r
      <p class="pp-ov">\r
        XcellHost is an authorised Google Workspace reseller in India. We size the right plan, verify your domain,\r
        configure DNS and email authentication, migrate your existing mailboxes from any platform, and support the\r
        deployment 24&times;7 &mdash; billed in INR with a GST-compliant invoice.\r
      </p>\r
\r
      <div class="pp-stats">\r
        <div class="pp-stat"><b>60+</b><span>Apps in one subscription</span></div>\r
        <div class="pp-stat"><b>99.9%</b><span>Uptime SLA guaranteed</span></div>\r
        <div class="pp-stat"><b>5 TB+</b><span>Storage per user on Enterprise</span></div>\r
        <div class="pp-stat"><b>&#8377;99</b><span>Entry price per user / month</span></div>\r
      </div>\r
\r
      <!-- GEMINI -->\r
      <div class="pp-sec">Gemini AI &mdash; now in Google Workspace</div>\r
      <div class="pp-gemini">\r
        <div class="lbl">\r
          <svg width="16" height="16" viewBox="0 0 32 32" aria-hidden="true">\r
            <defs><linearGradient id="gm1" x1="0" y1="0" x2="1" y2="1">\r
              <stop offset="0" stop-color="#4285F4"/><stop offset="0.55" stop-color="#9B72CB"/><stop offset="1" stop-color="#D96570"/>\r
            </linearGradient></defs>\r
            <path d="M16 0l4.2 11.8L32 16l-11.8 4.2L16 32l-4.2-11.8L0 16l11.8-4.2z" fill="url(#gm1)"/>\r
          </svg>\r
          Now in Google Workspace\r
        </div>\r
        <h3>Your team's AI assistant &mdash; built in, not bolted on</h3>\r
        <p>\r
          From the Starter plan onwards, every user gets Gemini AI across Gmail, Docs, Meet and Sheets &mdash; plus\r
          NotebookLM and Workspace Studio. No separate licence, no extra per-seat charge.\r
        </p>\r
        <div class="pp-gemgrid">\r
          <div class="gemcard"><b>Gemini in Gmail</b><span>Draft full emails from a one-line prompt, summarise long threads in seconds, and get smart replies tailored to the conversation.</span></div>\r
          <div class="gemcard"><b>Gemini in Docs</b><span>Write first drafts, rewrite in a different tone, create tables from prompts and research anything &mdash; from inside your document.</span></div>\r
          <div class="gemcard"><b>NotebookLM</b><span>Upload your PDFs, Drive files or web pages. Ask questions and get cited answers from your own documents.</span></div>\r
          <div class="gemcard"><b>Workspace Studio</b><span>Build no-code automations across Gmail, Sheets, Drive and your other tools &mdash; without writing a line of code.</span></div>\r
        </div>\r
        <p class="pp-gemfoot">Gemini AI available on Starter, Standard and Enterprise plans &mdash; not on Base.</p>\r
      </div>\r
\r
      <!-- APPS -->\r
      <div class="pp-sec">Everything in one subscription</div>\r
      <p class="pp-ov" style="margin-bottom:6px">60+ apps included. These are the eight your team will use every day.</p>\r
      <div class="pp-apps">\r
\r
        <div class="pp-app">\r
          <span class="ai" aria-hidden="true">\r
            <svg viewBox="0 0 48 36"><path d="M4 36h8V18L0 9v23a4 4 0 0 0 4 4z" fill="#4285F4"/><path d="M36 36h8a4 4 0 0 0 4-4V9l-12 9z" fill="#34A853"/><path d="M36 4v14l12-9V6a4.5 4.5 0 0 0-7.2-3.6z" fill="#FBBC04"/><path d="M12 18V4l12 9 12-9v14l-12 9z" fill="#EA4335"/><path d="M0 6v3l12 9V4L7.2 2.4A4.5 4.5 0 0 0 0 6z" fill="#C5221F"/></svg>\r
          </span>\r
          <div><b>Gmail</b><span>Professional @yourcompany.com email with a 99.9% uptime SLA</span></div>\r
        </div>\r
\r
        <div class="pp-app">\r
          <span class="ai" aria-hidden="true">\r
            <svg viewBox="0 0 87 72"><path d="M49.5 36l8.53 9.75 11.47 7.33 2-17.02-2-16.64-11.69 6.44z" fill="#00832d"/><path d="M0 51.5V66c0 3.32 2.69 6 6 6h14.5l3-10.96-3-9.54-9.95-3z" fill="#0066da"/><path d="M20.5 0L0 20.5l10.55 3 9.95-3 2.95-9.41z" fill="#e94235"/><path d="M20.5 20.5H0v31h20.5z" fill="#2684fc"/><path d="M82.6 8.68L69.5 19.42v33.66l13.16 10.79c1.97 1.54 4.85.13 4.85-2.37V11c0-2.53-2.95-3.93-4.91-2.32zM49.5 36v15.5H20.5V72h43c3.31 0 6-2.69 6-6V53.08z" fill="#00ac47"/><path d="M63.5 0h-43v20.5h29V36l20-16.57V6c0-3.31-2.69-6-6-6z" fill="#ffba00"/></svg>\r
          </span>\r
          <div><b>Meet</b><span>HD video meetings with recording, captions and screen share</span></div>\r
        </div>\r
\r
        <div class="pp-app">\r
          <span class="ai" aria-hidden="true">\r
            <svg viewBox="0 0 87 78"><path d="M6.6 66.85l3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8H0c0 1.55.4 3.1 1.2 4.5z" fill="#0066da"/><path d="M43.65 25L29.9 1.2c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44A9.06 9.06 0 000 53h27.5z" fill="#00ac47"/><path d="M73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75L86.1 57.5c.8-1.4 1.2-2.95 1.2-4.5H59.8l5.85 11.5z" fill="#ea4335"/><path d="M43.65 25L57.4 1.2C56.05.4 54.5 0 52.9 0H34.4c-1.6 0-3.15.45-4.5 1.2z" fill="#00832d"/><path d="M59.8 53H27.5L13.75 76.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z" fill="#2684fc"/><path d="M73.4 26.5l-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3L43.65 25 59.8 53h27.45c0-1.55-.4-3.1-1.2-4.5z" fill="#ffba00"/></svg>\r
          </span>\r
          <div><b>Drive</b><span>Cloud storage with team shared drives and offline access</span></div>\r
        </div>\r
\r
        <div class="pp-app">\r
          <span class="ai" aria-hidden="true">\r
            <svg viewBox="0 0 48 64"><path d="M30 0H6a6 6 0 0 0-6 6v52a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V18z" fill="#4285F4"/><path d="M30 0v18h18z" fill="#fff" opacity=".35"/><rect x="11" y="28" width="26" height="3.5" rx="1.75" fill="#fff"/><rect x="11" y="37" width="26" height="3.5" rx="1.75" fill="#fff"/><rect x="11" y="46" width="17" height="3.5" rx="1.75" fill="#fff"/></svg>\r
          </span>\r
          <div><b>Docs</b><span>Real-time document collaboration with full version history</span></div>\r
        </div>\r
\r
        <div class="pp-app">\r
          <span class="ai" aria-hidden="true">\r
            <svg viewBox="0 0 48 64"><path d="M30 0H6a6 6 0 0 0-6 6v52a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V18z" fill="#0F9D58"/><path d="M30 0v18h18z" fill="#fff" opacity=".35"/><rect x="11" y="28" width="26" height="22" rx="2" fill="#fff"/><rect x="11" y="35" width="26" height="1.6" fill="#0F9D58"/><rect x="11" y="42" width="26" height="1.6" fill="#0F9D58"/><rect x="23" y="28" width="1.6" height="22" fill="#0F9D58"/></svg>\r
          </span>\r
          <div><b>Sheets</b><span>Collaborative spreadsheets with pivot tables and AI analysis</span></div>\r
        </div>\r
\r
        <div class="pp-app">\r
          <span class="ai" aria-hidden="true">\r
            <svg viewBox="0 0 48 64"><path d="M30 0H6a6 6 0 0 0-6 6v52a6 6 0 0 0 6 6h36a6 6 0 0 0 6-6V18z" fill="#F4B400"/><path d="M30 0v18h18z" fill="#fff" opacity=".35"/><rect x="11" y="30" width="26" height="18" rx="2.5" fill="#fff"/></svg>\r
          </span>\r
          <div><b>Slides</b><span>Presentations with real-time co-editing and clean templates</span></div>\r
        </div>\r
\r
        <div class="pp-app">\r
          <span class="ai" aria-hidden="true">\r
            <svg viewBox="0 0 48 48"><path d="M40 4H8a4 4 0 0 0-4 4v24a4 4 0 0 0 4 4h6v9l10-9h16a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z" fill="#00AC47"/><circle cx="16" cy="20" r="3" fill="#fff"/><circle cx="24" cy="20" r="3" fill="#fff"/><circle cx="32" cy="20" r="3" fill="#fff"/></svg>\r
          </span>\r
          <div><b>Chat</b><span>Team messaging, Spaces and file sharing integrated with Drive</span></div>\r
        </div>\r
\r
        <div class="pp-app">\r
          <span class="ai" aria-hidden="true">\r
            <svg viewBox="0 0 48 48"><rect x="4" y="4" width="40" height="40" rx="5" fill="#fff" stroke="#DADCE0" stroke-width="2"/><path d="M4 9a5 5 0 0 1 5-5h30a5 5 0 0 1 5 5v4H4z" fill="#4285F4"/><rect x="4" y="34" width="40" height="10" rx="0" fill="#34A853" opacity=".9"/><path d="M4 39v0a5 5 0 0 0 5 5h30a5 5 0 0 0 5-5z" fill="#34A853"/><text x="24" y="32" text-anchor="middle" font-family="Arial,Helvetica,sans-serif" font-size="16" font-weight="700" fill="#4285F4">31</text></svg>\r
          </span>\r
          <div><b>Calendar</b><span>Shared team calendars with smart scheduling and booking pages</span></div>\r
        </div>\r
\r
      </div>\r
      <p class="pp-appsfoot">&#43; <b>Google Forms, Sites, Keep, Tasks, Vault, AppSheet, Gemini, NotebookLM and the Admin console</b> &mdash; all included.</p>\r
\r
      <!-- VIDEO -->\r
      <div class="pp-sec">See Google Workspace in action</div>\r
      <div class="pp-vids">\r
        <div class="pv-tabs">\r
          <button class="pv-tab active" type="button" data-vid="hh1uJDL0nBQ">&#9654; Product Intro</button>\r
          <button class="pv-tab" type="button" data-vid="hh1uJDL0nBQ">&#9654; Gemini in Workspace</button>\r
        </div>\r
        <div class="pv-frame" id="ppVid">\r
          <button class="pv-poster" type="button" id="pvPlay">\r
            <span class="pv-play">&#9654;</span>\r
            <span class="pv-plabel">How Google Workspace helps Indian businesses collaborate, automate and stay secure with Gemini AI</span>\r
          </button>\r
        </div>\r
        <p class="pv-note">Official Google Workspace overview &middot; Source: Google Workspace YouTube</p>\r
      </div>\r
\r
      <!-- PRICING -->\r
      <div class="pp-sec" id="pricing">Google Workspace pricing in India</div>\r
      <p class="pp-ov" style="margin-bottom:22px">Annual plans &middot; INR billing &middot; GST invoice &middot; save roughly 16% versus monthly billing. All prices exclude 18% GST.</p>\r
      <div class="pp-plans">\r
\r
        <div class="ppl">\r
          <span class="tag">Micro Business</span>\r
          <h4>Base</h4>\r
          <div class="amt"><b>{{ monthlyTotal(0) }}</b><span>{{ quantities()[0] === 1 ? 'per user / month' : '/month for ' + quantities()[0] + ' users' }} &middot; annual + GST</span></div>\r
          <span class="save">Max 20 users &middot; 20 GB pooled</span>\r
          <ul>\r
            <li>Custom email &mdash; @yourcompany.com</li>\r
            <li>Google Meet &mdash; 100 participants</li>\r
            <li>20 GB Drive storage (pooled)</li>\r
            <li>Docs, Sheets, Slides, Calendar, Chat</li>\r
            <li>Basic admin &amp; security controls</li>\r
            <li class="no">Gemini AI</li>\r
            <li class="no">Meeting recording</li>\r
            <li class="no">eSignature</li>\r
          </ul>\r
          <xh-quantity-selector label="No. of users" [value]="quantities()[0]" [max]="20" (valueChange)="setQuantity(0, $event)" />\r
          <div class="btns"><a class="btn btn-primary" href="#contact" (click)="openCallback($event, 'Base', 0)">Buy Now</a></div>\r
        </div>\r
\r
        <div class="ppl hot">\r
          <span class="tag">Most Popular</span>\r
          <h4>Starter</h4>\r
          <div class="amt"><b>{{ monthlyTotal(1) }}</b><span>{{ quantities()[1] === 1 ? 'per user / month' : '/month for ' + quantities()[1] + ' users' }} &middot; annual + GST</span></div>\r
          <span class="save">Up to 300 users &middot; 30 GB pooled</span>\r
          <ul>\r
            <li>Everything in Base</li>\r
            <li>Gemini AI in Gmail, Docs &amp; Meet</li>\r
            <li>NotebookLM research assistant</li>\r
            <li>Google Vids AI video creator</li>\r
            <li>Workspace Studio automation</li>\r
            <li>Manage up to 300 users</li>\r
          </ul>\r
          <xh-quantity-selector label="No. of users" [value]="quantities()[1]" [max]="300" (valueChange)="setQuantity(1, $event)" />\r
          <div class="btns"><a class="btn btn-primary" href="#contact" (click)="openCallback($event, 'Starter', 1)">Buy Now</a></div>\r
        </div>\r
\r
        <div class="ppl">\r
          <span class="tag">Best Storage</span>\r
          <h4>Standard</h4>\r
          <div class="amt"><b>{{ monthlyTotal(2) }}</b>@if (quantities()[2] === 1) { <del>&#8377;1,080</del> }<span>{{ quantities()[2] === 1 ? 'per user / month' : '/month for ' + quantities()[2] + ' users' }} &middot; annual + GST</span></div>\r
          <span class="save">Up to 300 users &middot; 2 TB pooled</span>\r
          <ul>\r
            <li>Everything in Starter</li>\r
            <li>2 TB cloud storage (pooled)</li>\r
            <li>Meet recording + noise cancellation</li>\r
            <li>150-participant meetings</li>\r
            <li>Built-in eSignature</li>\r
            <li>Workspace Migrate tool</li>\r
            <li>Mail merge + custom email layouts</li>\r
          </ul>\r
          <xh-quantity-selector label="No. of users" [value]="quantities()[2]" [max]="300" (valueChange)="setQuantity(2, $event)" />\r
          <div class="btns"><a class="btn btn-primary" href="#contact" (click)="openCallback($event, 'Standard', 2)">Buy Now</a></div>\r
        </div>\r
\r
        <div class="ppl">\r
          <span class="tag">Large Teams</span>\r
          <h4>Enterprise</h4>\r
          <div class="amt"><b>Contact us</b><span>custom &middot; volume discounts</span></div>\r
          <span class="save">No user limit &middot; 5 TB+ per user</span>\r
          <ul>\r
            <li>Everything in Standard</li>\r
            <li>1,000 Meet participants</li>\r
            <li>Live streaming in Meet</li>\r
            <li>S/MIME end-to-end encryption</li>\r
            <li>Data Loss Prevention (DLP)</li>\r
            <li>Cloud Identity Premium</li>\r
            <li>Context-aware access policies</li>\r
            <li>Enterprise data regions</li>\r
          </ul>\r
          <xh-quantity-selector label="No. of users" [value]="quantities()[3]" (valueChange)="setQuantity(3, $event)" />\r
          <div class="btns"><a class="btn btn-primary" href="#contact" (click)="openCallback($event, 'Enterprise', 3)">Buy Now</a></div>\r
        </div>\r
\r
      </div>\r
      <p class="pv-note">&#128179; Prices exclude 18% GST. The Standard plan shows an introductory rate &mdash; the regular price is &#8377;1,080/user/month. Pay online via UPI &middot; Cards &middot; NetBanking. Contact XcellHost for volume discounts and multi-year deals.</p>\r
\r
      <!-- PARTNER STRIP -->\r
      <div class="pp-sec">Why buy through XcellHost?</div>\r
      <div class="pp-partner">\r
        <div class="pp-partnerhead">\r
          <div class="seal">\r
            <svg width="42" height="42" viewBox="0 0 48 48" aria-hidden="true">\r
              <path d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z" fill="#4285F4"/>\r
              <path d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z" fill="#34A853"/>\r
              <path d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z" fill="#FBBC04"/>\r
              <path d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z" fill="#EA4335"/>\r
            </svg>\r
            <small>Google Partner</small>\r
          </div>\r
          <div class="txt">\r
            <b>XcellHost &mdash; authorised Google Workspace reseller in India</b>\r
            <span>Beat-any-quote pricing &middot; GST invoice same day &middot; free migration included with every plan.</span>\r
          </div>\r
          <a class="btn btn-primary" href="#contact" (click)="openCallback($event)">Get Best Price</a>\r
        </div>\r
        <div class="pp-partnergrid">\r
          <div><b>Authorised Partner</b><span>Genuine licences from a verified Google partner. Full support entitlements, no third-party risk.</span></div>\r
          <div><b>INR Billing + GST</b><span>Pay in Indian Rupees. GST-compliant invoice for every purchase &mdash; claim input tax credit easily.</span></div>\r
          <div><b>Free Migration</b><span>Complete migration from cPanel, Microsoft 365, Zoho or any platform. Zero data loss, minimal downtime.</span></div>\r
          <div><b>India Support</b><span>Local team by phone and WhatsApp, 24&times;7 &mdash; in English and Hindi, by real engineers.</span></div>\r
        </div>\r
      </div>\r
\r
      <!-- MIGRATION -->\r
      <div class="pp-sec">Switching from cPanel, Outlook or Zoho? We handle the entire move.</div>\r
      <p class="pp-ov" style="margin-bottom:6px">Full migration service included with every Google Workspace deployment.</p>\r
      <div class="pp-steps">\r
        <div class="pstep"><span class="num">01</span><b>Audit &amp; Plan</b><span>We review your domain, DNS, mailbox count and current setup, then recommend the right plan and migration window.</span></div>\r
        <div class="pstep"><span class="num">02</span><b>DNS &amp; Security</b><span>MX records, SPF, DKIM and DMARC configured correctly from day one &mdash; no email delivery issues post-cutover.</span></div>\r
        <div class="pstep"><span class="num">03</span><b>Data Migration</b><span>Emails, contacts and calendars moved from your old provider using Workspace Migrate or direct IMAP &mdash; zero data loss.</span></div>\r
        <div class="pstep"><span class="num">04</span><b>Go-Live &amp; Onboard</b><span>Your team switches over. We monitor the cutover window and provide 30-day post-migration support.</span></div>\r
      </div>\r
\r
      <!-- BENEFITS -->\r
      <div class="pp-sec">Benefits for your business</div>\r
      <div class="pp-bens">\r
        <article class="pb"><span class="ic">&#8377;</span><p><b>Lower cost of ownership</b>No mail server, no AMC, no refresh cycles &mdash; one predictable per-user price in INR</p></article>\r
        <article class="pb"><span class="ic">&#127968;</span><p><b>Work from anywhere</b>Browser, mobile and offline access keep your team productive from office, home or site</p></article>\r
        <article class="pb"><span class="ic">&#10022;</span><p><b>AI without a separate contract</b>Gemini ships inside the plan from Starter &mdash; no add-on SKU, no second vendor</p></article>\r
        <article class="pb"><span class="ic">&#128200;</span><p><b>Scale on demand</b>Add users, storage or domains the day you need them &mdash; not next quarter</p></article>\r
      </div>\r
\r
      <!-- USE CASES -->\r
      <div class="pp-sec">Who uses Google Workspace?</div>\r
      <div class="pp-uses">\r
        <div class="pu"><span class="pu-ic">&#128188;</span><b>CA Firms &amp; Finance</b>Secure client email + shared docs</div>\r
        <div class="pu"><span class="pu-ic">&#128187;</span><b>IT &amp; Software Teams</b>Dev collaboration + project comms</div>\r
        <div class="pu"><span class="pu-ic">&#127973;</span><b>Healthcare Clinics</b>Patient comms + appointment booking</div>\r
        <div class="pu"><span class="pu-ic">&#128717;</span><b>Retail Chains</b>Inventory docs + vendor coordination</div>\r
        <div class="pu"><span class="pu-ic">&#127968;</span><b>Real Estate Firms</b>Property docs + client follow-up</div>\r
        <div class="pu"><span class="pu-ic">&#127981;</span><b>Manufacturing</b>Plant comms + supply chain docs</div>\r
        <div class="pu"><span class="pu-ic">&#128640;</span><b>Startups</b>All-in-one platform from day one</div>\r
        <div class="pu"><span class="pu-ic">&#129309;</span><b>NGOs &amp; Nonprofits</b>Google for Nonprofits special pricing</div>\r
      </div>\r
\r
      <!-- SECURITY -->\r
      <div class="pp-sec">Security &amp; compliance &mdash; Google Workspace</div>\r
      <p class="pp-ov">\r
        The threat model for cloud email is identity-first &mdash; phishing, OAuth consent abuse, session hijacking and\r
        unmanaged devices. The controls are chosen to match it: 2-Step Verification and context-aware access before\r
        cutover, domain authentication configured at go-live, and Vault retention set to the policy your auditors asked for.\r
      </p>\r
      <div class="pp-secrows">\r
        <div class="psrow"><span>At rest</span><b>AES-256 encryption</b></div>\r
        <div class="psrow"><span>In transit</span><b>TLS enforced between MTAs</b></div>\r
        <div class="psrow"><span>Message-level</span><b>S/MIME on Enterprise</b></div>\r
        <div class="psrow"><span>Domain authentication</span><b>SPF &middot; DKIM &middot; DMARC by XcellHost</b></div>\r
        <div class="psrow"><span>Access control</span><b>2-Step Verification + context-aware access</b></div>\r
        <div class="psrow"><span>Data protection</span><b>DLP rules on Enterprise</b></div>\r
        <div class="psrow"><span>Legal hold</span><b>Google Vault retention &amp; eDiscovery</b></div>\r
        <div class="psrow"><span>Incident response</span><b>Named engineer, 15-min ack</b></div>\r
      </div>\r
      <p class="pp-secfoot">XcellHost is ISO 27001 and ISO 20000-1 certified &middot; Indian Tier-4 datacenters &middot; DPDPA and RBI aligned &middot; 24&times;7 NOC and SOC.</p>\r
\r
      <!-- WHY XCELLHOST -->\r
      <div class="pp-sec">Why XcellHost for Google Workspace</div>\r
      <div class="pp-why">\r
        <div class="pw"><span class="pw-ic">&#129309;</span><b>Authorised Reseller</b><span>Genuine Google Workspace licences with full support entitlements and a direct escalation path.</span></div>\r
        <div class="pw"><span class="pw-ic">&#128260;</span><b>Free Migration</b><span>From Microsoft 365, Zoho Mail, GoDaddy, cPanel or on-premises Exchange &mdash; zero data loss.</span></div>\r
        <div class="pw"><span class="pw-ic">&#129534;</span><b>INR Billing with GST Invoice</b><span>Proper GST documentation on every purchase, so your business can claim input tax credit.</span></div>\r
        <div class="pw"><span class="pw-ic">&#9200;</span><b>Since 1999</b><span>27 years running production cloud and email for Indian businesses.</span></div>\r
        <div class="pw"><span class="pw-ic">&#128222;</span><b>24&times;7 Managed Support</b><span>Phone, WhatsApp and ticket &mdash; in English and Hindi, by real engineers.</span></div>\r
        <div class="pw"><span class="pw-ic">&#9881;</span><b>Full Technical Setup</b><span>Domain verification, MX records, SPF, DKIM, DMARC and admin policies &mdash; all handled by us.</span></div>\r
      </div>\r
\r
      <!-- TESTIMONIALS -->\r
      <div class="pp-sec">What customers say</div>\r
      <div class="pp-tcards">\r
        <div class="tcard">\r
          <div class="quote-badge">&rdquo;</div>\r
          <div class="tav">IT</div>\r
          <div class="tname">IT Operations Team</div>\r
          <div class="trole">Software services &middot; Standard</div>\r
          <div class="tstars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>\r
          <p>The rollout was well organised and the cutover window was monitored end to end. Shared drives and Meet recording were configured before the team even logged in.</p>\r
        </div>\r
        <div class="tcard">\r
          <div class="quote-badge">&rdquo;</div>\r
          <div class="tav">BO</div>\r
          <div class="tname">Business Operations</div>\r
          <div class="trole">Retail chain &middot; Starter</div>\r
          <div class="tstars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>\r
          <p>We moved off cPanel mail and stopped fighting deliverability the same week. Gemini in Gmail turned out to be the thing the team actually uses daily.</p>\r
        </div>\r
        <div class="tcard">\r
          <div class="quote-badge">&rdquo;</div>\r
          <div class="tav">CA</div>\r
          <div class="tname">Practice Partner</div>\r
          <div class="trole">CA firm &middot; Standard</div>\r
          <div class="tstars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>\r
          <p>Pricing was transparent, the GST invoice arrived the same day, and nobody tried to upsell us a plan we did not need. That is rarer than it should be.</p>\r
        </div>\r
      </div>\r
\r
      <!-- FAQ -->\r
      <div class="pp-sec">Frequently asked questions</div>\r
      <div class="pp-faq">\r
        <div class="faq2 open">\r
          <button class="faq2-q" type="button">What is Google Workspace and how is it different from free Gmail?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Google Workspace gives your business a professional @yourcompany.com email address instead of @gmail.com. It includes admin controls, 20 GB to 5 TB+ storage, meeting recording, eSignature, Gemini AI and a 99.9% uptime SLA &mdash; none of which are in free Gmail.</p></div>\r
        </div>\r
        <div class="faq2">\r
          <button class="faq2-q" type="button">Does Google Workspace include Gemini AI?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Yes &mdash; Gemini AI is included from the Starter plan (&#8377;270/user/month) at no extra cost. You get an AI assistant inside Gmail, Docs, Meet and Sheets, plus NotebookLM (AI research assistant) and Google Vids. The Base plan does not include Gemini AI.</p></div>\r
        </div>\r
        <div class="faq2">\r
          <button class="faq2-q" type="button">Which plan is right for an Indian SMB?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Starter at &#8377;270/user/month suits most Indian SMBs &mdash; it includes Gemini AI, 30 GB storage and full admin controls for up to 300 users. Base (&#8377;99) suits teams under 20 users who do not yet need AI features. Standard (&#8377;864) is the pick when your team needs 2 TB storage, meeting recording and eSignature.</p></div>\r
        </div>\r
        <div class="faq2">\r
          <button class="faq2-q" type="button">Does the pricing include GST?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>No &mdash; the listed prices exclude 18% GST. As an authorised Google Workspace reseller in India, XcellHost provides a GST-compliant invoice for every purchase so you can claim input tax credit.</p></div>\r
        </div>\r
        <div class="faq2">\r
          <button class="faq2-q" type="button">Can XcellHost migrate our existing email to Google Workspace?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Yes &mdash; XcellHost provides complete email migration from any platform including Microsoft 365, GoDaddy, cPanel hosting, Zoho Mail and on-premises Exchange. We migrate emails, contacts and calendars with zero data loss and minimal downtime.</p></div>\r
        </div>\r
        <div class="faq2">\r
          <button class="faq2-q" type="button">How long does setup take?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Domain verification, MX records and basic admin configuration are typically completed within 24 hours. Full email migration from an existing provider takes 2&ndash;5 business days depending on mailbox count and data volume.</p></div>\r
        </div>\r
        <div class="faq2">\r
          <button class="faq2-q" type="button">Can I keep my existing domain?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>Yes &mdash; you keep your existing domain (for example @yourcompany.com). We verify the domain, update your DNS settings and configure Google Workspace to send and receive on your existing address. No email address changes needed.</p></div>\r
        </div>\r
        <div class="faq2">\r
          <button class="faq2-q" type="button">What happens if I need to cancel?<span class="faq2-ic">+</span></button>\r
          <div class="faq2-a"><p>If you cancel, access to Google Workspace apps and your @yourcompany.com email stops at the end of the billing cycle. You can export all your data using Google Takeout before cancellation. XcellHost can also migrate your data to another platform if needed.</p></div>\r
        </div>\r
      </div>\r
\r
      <!-- RELATED -->\r
      <div class="pp-sec">Related products</div>\r
      <div class="pp-related">\r
        <a class="rel" href="#"><b>Google Workspace Backup</b><span>Secure your Gmail, Calendar, Contacts and Drive &mdash; retention beyond Google's own limits.</span></a>\r
        <a class="rel" href="#"><b>Microsoft 365</b><span>Office apps, Teams and Microsoft Copilot AI &mdash; the leading alternative.</span></a>\r
        <a class="rel" href="#"><b>Zoho Mail</b><span>Cost-effective business email for Indian SMBs &mdash; great for email-only needs.</span></a>\r
        <a class="rel" href="#"><b>Secure DMARC</b><span>Managed SPF, DKIM and DMARC to stop domain spoofing and protect deliverability.</span></a>\r
      </div>\r
\r
      <xh-insights-section pageSlug="google-workspace" />\r
\r
      <!-- CTA -->\r
      <div class="pp-cta" id="contact">\r
        <div>\r
          <h3>Ready to move your team to Google Workspace?</h3>\r
          <p>FREE Consultation &middot; FREE Demo &middot; FREE Trial &middot; 24&times;7 support in English &amp; Hindi &middot; GST invoice in INR</p>\r
        </div>\r
        <div class="pp-ctabtns">\r
          <a class="btn btn-primary" href="#contact" (click)="openCallback($event)">Request a callback</a>\r
          <a class="btn btn-ghost" href="#pricing">&#9889; Buy Now</a>\r
          <a class="btn btn-ghost" href="#">&#11015; Infosheet</a>\r
          <a class="btn btn-wa" href="https://wa.me/918657032540">Talk on WhatsApp</a>\r
</div>\r
      </div>\r
\r
      <div class="pp-proof">\r
        <span>&#127941; ISO 27001</span>\r
        <span>&#127941; ISO 20000-1</span>\r
        <span>&#129309; Google Cloud Partner</span>\r
        <span>&#128368; Since 1999</span>\r
        <span>&#128274; Secure Payments &mdash; UPI &middot; Cards &middot; NetBanking</span>\r
      </div>\r
\r
    </div>\r
  </div>\r
</div>\r
\r
<!-- ============ NEWSLETTER ============ -->\r
<section class="newsletter" aria-labelledby="newsletter-title">\r
  <div class="wrap newsletter-inner">\r
    <h2 id="newsletter-title">Get the latest updates on new features, tutorials, and cloud hosting tips.</h2>\r
    <form class="newsletter-form" (submit)="submitForm($event)">\r
      <label for="newsletter-email" style="position:absolute;left:-9999px">Email address</label>\r
      <input id="newsletter-email" type="email" placeholder="Enter your email" required>\r
      <button type="submit">Subscribe Now</button>\r
    </form>\r
  </div>\r
</section>\r
\r
`, styles: ['/* src/app/pages/google-workspace.page.css */\n:host {\n  display: block;\n  --g-blue:#4285F4;\n  --g-red:#EA4335;\n  --g-yellow:#FBBC04;\n  --g-green:#34A853;\n  --g-grey:#5F6368;\n}\n:root {\n  --navy:#041E42;\n  --navy-2:#0A2A57;\n  --blue:#1565D8;\n  --blue-soft:#E8F0FD;\n  --orange:#FF8C1A;\n  --ice:#F2F6FC;\n  --ink:#1C2A3A;\n  --slate:#51607A;\n  --line:#DCE5F2;\n  --white:#FFF;\n  --ok:#2ECC71;\n  --disp:"Sora",sans-serif;\n  --body:"IBM Plex Sans",sans-serif;\n  --mono:"IBM Plex Mono",monospace;\n  --g-blue:#4285F4;\n  --g-red:#EA4335;\n  --g-yellow:#FBBC04;\n  --g-green:#34A853;\n  --g-grey:#5F6368;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\nhtml {\n  scroll-behavior: smooth;\n}\nbody {\n  font-family: var(--body);\n  color: var(--ink);\n  background: #fff;\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n}\na {\n  color: inherit;\n  text-decoration: none;\n}\nimg {\n  max-width: 100%;\n}\n.wrap {\n  max-width: 1240px;\n  margin: 0 auto;\n  padding: 0 24px;\n}\nh1 {\n  font-family: var(--disp);\n  font-weight: 800;\n  font-size: clamp(32px, 4.4vw, 48px);\n  line-height: 1.12;\n  letter-spacing: -.025em;\n  margin-bottom: 18px;\n}\nh2 {\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: clamp(25px, 3vw, 34px);\n  color: var(--navy);\n  letter-spacing: -.015em;\n  line-height: 1.2;\n  margin-bottom: 12px;\n}\n.btn {\n  display: inline-block;\n  font-weight: 600;\n  font-size: 14px;\n  padding: 10px 20px;\n  border-radius: 8px;\n  transition: .15s;\n  border: 1.5px solid transparent;\n  cursor: pointer;\n}\n.btn-primary {\n  background: var(--orange);\n  color: #fff;\n  animation: glow 2.8s ease-in-out infinite;\n}\n.btn-primary:hover {\n  background: #e97a08;\n}\n.btn-ghost {\n  border-color: var(--line);\n  color: var(--navy);\n}\n.btn-ghost:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.pp-hero .btn-ghost {\n  border-color: rgba(255, 255, 255, .35);\n  color: #fff;\n}\n.pp-hero .btn-ghost:hover {\n  border-color: #fff;\n  background: rgba(255, 255, 255, .08);\n  color: #fff;\n}\n.pp-hero .btn-ghost:disabled {\n  background: transparent;\n  border-color: rgba(255, 255, 255, .35);\n  color: #fff;\n  cursor: not-allowed;\n  opacity: .65;\n  font-family: inherit;\n  line-height: inherit;\n}\n.pp-cta .btn-ghost {\n  border-color: rgba(255, 255, 255, .45);\n  color: #fff;\n}\n.pp-cta .btn-ghost:hover {\n  background: rgba(255, 255, 255, .12);\n  color: #fff;\n  border-color: #fff;\n}\n.btn-wa {\n  background: #25D366;\n  color: #fff;\n  border-color: #25D366;\n}\n.btn-wa:hover {\n  background: #1eb955;\n  border-color: #1eb955;\n  color: #fff;\n}\n.utility {\n  background: var(--navy);\n  color: #b9c9e2;\n  font-size: 13px;\n  padding: 8px 0;\n  position: relative;\n  z-index: 52;\n  overflow: hidden;\n}\n.utility .wrap {\n  display: flex;\n  align-items: center;\n  gap: 14px 24px;\n  min-height: 38px;\n  flex-wrap: nowrap;\n  overflow-x: auto;\n  white-space: nowrap;\n  scrollbar-width: none;\n}\n.utility .wrap::-webkit-scrollbar {\n  display: none;\n}\n.utility a {\n  color: #b9c9e2;\n}\n.utility a:hover {\n  color: #fff;\n}\n.utility .links {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 6px 22px;\n  align-items: center;\n  flex: 0 0 auto;\n}\n.utility .links > a {\n  white-space: nowrap;\n  padding: 2px 0;\n  font-size: 12.5px;\n}\n.ubar-nums {\n  display: inline-flex;\n  align-items: center;\n  gap: 16px;\n  margin-left: auto;\n  padding-left: 18px;\n  border-left: 1px solid rgba(255, 255, 255, .14);\n  white-space: nowrap;\n  flex: 0 0 auto;\n}\n.utility .phone {\n  font-family: var(--mono);\n  color: #fff;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  color: #5FE08D !important;\n  font-weight: 600;\n  font-size: 12.5px;\n  white-space: nowrap;\n}\n.uwa:hover {\n  color: #8ff0b0 !important;\n}\n.promo {\n  background:\n    linear-gradient(\n      90deg,\n      var(--blue),\n      #0E4CAB);\n  color: #fff;\n  text-align: center;\n  font-size: 13.5px;\n  padding: 8px 16px;\n}\n.promo b {\n  color: #ffd9ac;\n}\n.promo .code {\n  font-family: var(--mono);\n  background: rgba(255, 255, 255, .15);\n  padding: 1px 8px;\n  border-radius: 4px;\n}\n.promo a {\n  text-decoration: underline;\n}\n.xh-header {\n  position: sticky;\n  top: 0;\n  z-index: 100;\n  background: #fff;\n  border-bottom: 1px solid #E7EBF3;\n  box-shadow: 0 8px 24px rgba(18, 42, 90, .06);\n}\n.xh-nav-wrap {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 24px;\n  height: 80px;\n}\n.xh-brand img {\n  height: 74px;\n  width: auto;\n  display: block;\n}\n.xh-main-nav {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: 8px;\n}\n.xh-menu-link {\n  font: 600 13px/13px var(--body);\n  color: #263552;\n  background: none;\n  border: 0;\n  padding: 30px 10px;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  white-space: nowrap;\n  transition: color .15s;\n}\n.xh-menu-link:hover,\n.xh-menu-link.is-active {\n  color: var(--blue);\n}\n.xh-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-left: auto;\n}\n.xh-icon-btn {\n  width: 42px;\n  height: 42px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  cursor: pointer;\n  transition: .15s;\n}\n.xh-icon-btn:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.xh-mobile-toggle {\n  display: none;\n  width: 44px;\n  height: 44px;\n  border-radius: 12px;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n}\n.xh-mobile-toggle span {\n  width: 19px;\n  height: 2px;\n  background: var(--navy);\n  border-radius: 2px;\n}\n.ppage {\n  background: #fff;\n}\n.pp-hero {\n  background:\n    radial-gradient(\n      900px 420px at 80% -20%,\n      #0E3A78 0%,\n      var(--navy) 60%);\n  color: #fff;\n  padding: 56px 0;\n  position: relative;\n  overflow: hidden;\n  isolation: isolate;\n  min-height: 420px;\n  display: flex;\n  align-items: center;\n}\n.pp-hero > .wrap {\n  position: relative;\n  z-index: 3;\n  width: 100%;\n}\n.pph-grid {\n  position: absolute;\n  inset: 0;\n  z-index: 0;\n  pointer-events: none;\n  opacity: .4;\n  background-image:\n    linear-gradient(rgba(127, 178, 255, .1) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(127, 178, 255, .1) 1px,\n      transparent 1px);\n  background-size: 44px 44px;\n  -webkit-mask-image:\n    radial-gradient(\n      circle at 30% 40%,\n      #000,\n      transparent 75%);\n  mask-image:\n    radial-gradient(\n      circle at 30% 40%,\n      #000,\n      transparent 75%);\n  animation: pphgrid 20s linear infinite;\n}\n.pph-aur {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(80px);\n  opacity: .55;\n  z-index: 1;\n  pointer-events: none;\n  mix-blend-mode: screen;\n}\n.pph-a1 {\n  width: 520px;\n  height: 520px;\n  left: -8%;\n  top: -30%;\n  background:\n    radial-gradient(\n      circle,\n      #1565D8,\n      transparent 65%);\n  animation: aflow1 17s ease-in-out infinite alternate;\n}\n.pph-a2 {\n  width: 480px;\n  height: 480px;\n  right: -6%;\n  top: -10%;\n  background:\n    radial-gradient(\n      circle,\n      #0C4EA8,\n      transparent 65%);\n  opacity: .4;\n  animation: aflow2 21s ease-in-out infinite alternate;\n}\n.pph-a3 {\n  width: 420px;\n  height: 420px;\n  left: 40%;\n  bottom: -40%;\n  background:\n    radial-gradient(\n      circle,\n      #7C3AED,\n      transparent 62%);\n  opacity: .28;\n  animation: aflow3 19s ease-in-out infinite alternate;\n}\n.pph-scan {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 34%;\n  z-index: 1;\n  pointer-events: none;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(127, 178, 255, .14),\n      transparent);\n  animation: pphscan 7s ease-in-out infinite;\n}\n.pph-map {\n  position: absolute;\n  inset: 0;\n  z-index: 1;\n  pointer-events: none;\n  overflow: hidden;\n}\n.pph-map .wm-ring {\n  position: absolute;\n  top: 50%;\n  left: 60%;\n  width: 520px;\n  height: 520px;\n  transform: translate(-50%, -50%);\n  border: 1px dashed rgba(143, 184, 255, .22);\n  border-radius: 50%;\n  animation: wmSpin 60s linear infinite;\n}\n.pph-map .wm-ring.r2 {\n  width: 340px;\n  height: 340px;\n  animation-duration: 42s;\n  animation-direction: reverse;\n  border-color: rgba(143, 184, 255, .16);\n}\n.orb {\n  position: absolute;\n  border-radius: 50%;\n  filter: blur(70px);\n  opacity: .3;\n  pointer-events: none;\n  z-index: 1;\n}\n.orb-1 {\n  width: 340px;\n  height: 340px;\n  background: #1565D8;\n  top: -90px;\n  left: -70px;\n  animation: drift 14s ease-in-out infinite;\n}\n.pph-scene {\n  position: absolute;\n  right: 0;\n  top: 4%;\n  bottom: 0;\n  width: 48%;\n  z-index: 2;\n  pointer-events: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 22%,\n      #000);\n  mask-image:\n    linear-gradient(\n      90deg,\n      transparent,\n      #000 22%,\n      #000);\n}\n.pph-illus {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  padding: 10px 0;\n}\n.pph-illus-img {\n  width: 88%;\n  max-width: 520px;\n  max-height: 300px;\n  object-fit: contain;\n  filter: drop-shadow(0 18px 40px rgba(4, 30, 66, .35));\n  animation: illusfloat 5.5s ease-in-out infinite;\n}\n.pph-powered-image {\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  padding: 10px 18px;\n  border-radius: 8px;\n  background: #fff;\n  box-shadow: 0 5px 16px rgba(0, 20, 55, .18);\n}\n.pph-powered-image .pw-lbl {\n  font: 600 9.5px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: #8FA2BD;\n}\n.pph-powered-image .pw-sub {\n  font: 600 10px var(--body);\n  color: #51607A;\n  letter-spacing: .04em;\n}\n.g-lockup {\n  display: inline-flex;\n  align-items: center;\n  gap: 9px;\n}\n.g-lockup svg {\n  flex: none;\n  display: block;\n}\n.g-word {\n  font: 500 19px/1 "Google Sans", var(--body);\n  color: #3c4043;\n  letter-spacing: -.01em;\n  white-space: nowrap;\n}\n.g-word b {\n  font-weight: 500;\n  color: var(--g-grey);\n}\n.pp-crumb {\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: #7FB2FF;\n  margin-bottom: 14px;\n  animation: pprise .5s cubic-bezier(.19, 1, .22, 1) .12s both;\n}\n.pp-hero h1 {\n  display: flex;\n  align-items: baseline;\n  flex-wrap: wrap;\n  margin: 0 0 14px;\n  color: #fff;\n  font: 800 clamp(22px, 3.8vw, 42px)/1.12 var(--disp);\n  letter-spacing: -.025em;\n  animation: pprise .55s cubic-bezier(.19, 1, .22, 1) .2s both;\n}\n.pp-title-brand {\n  display: inline-flex;\n  align-items: baseline;\n  flex: none;\n  font: inherit;\n  line-height: 1;\n  letter-spacing: 0;\n}\n.pp-brand-xcell {\n  color: #E60012;\n}\n.pp-brand-family {\n  color: #fff;\n}\n.pp-title-divider {\n  margin-left: .18em;\n  color: #fff;\n  opacity: .55;\n}\n.pp-title-name {\n  margin-left: .18em;\n}\n.pp-tagline {\n  font-size: 17px;\n  color: #c7d5ec;\n  max-width: 60ch;\n  margin-bottom: 10px;\n  animation: pprise .55s cubic-bezier(.19, 1, .22, 1) .3s both;\n}\n.pp-tagline-support {\n  width: fit-content;\n  margin: 0 0 16px;\n  color: #67B7FF;\n  font: 700 clamp(18px, 1.7vw, 23px)/1.35 var(--body);\n  text-wrap: balance;\n}\n.pp-typewriter {\n  display: flex;\n  align-items: center;\n  min-height: 32px;\n  margin: 0 0 10px;\n  color: #69B6FF;\n  font: 600 clamp(17px, 1.4vw, 22px)/1.35 var(--body);\n}\n.pp-typewriter i {\n  display: inline-block;\n  width: 2px;\n  height: 1.15em;\n  margin-left: 4px;\n  background: currentColor;\n  animation: ppcursor .75s steps(1, end) infinite;\n}\n.pp-hero > .wrap > .pp-crumb,\n.pp-hero > .wrap > h1,\n.pp-hero > .wrap > .pp-tagline,\n.pp-hero > .wrap > .pp-tagline-support,\n.pp-hero > .wrap > .pp-typewriter,\n.pp-hero > .wrap > .pp-chips,\n.pp-hero > .wrap > .pp-hero-grid {\n  max-width: 58%;\n}\n.pp-hero-grid {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 36px;\n  align-items: start;\n}\n.pp-hpoints {\n  display: grid;\n  grid-template-columns: repeat(2, max-content);\n  gap: 10px 32px;\n  width: fit-content;\n  max-width: 100%;\n  margin: 8px 0 18px;\n}\n.pp-hpoint {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  font-size: 14px;\n  color: #cfe0f7;\n}\n.pp-hpoint .tick {\n  flex: none;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: var(--blue);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-hpoint .tick:before {\n  content: "\\2713";\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 1;\n}\n.pp-chips {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  align-items: center;\n  margin-bottom: 22px;\n}\n.pp-chip {\n  font: 600 12px var(--mono);\n  background: rgba(255, 255, 255, .1);\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 99px;\n  padding: 7px 16px;\n}\n.pp-chip.price {\n  background: rgba(255, 140, 26, .16);\n  border-color: rgba(255, 140, 26, .5);\n  color: #ffd9ac;\n}\n.hero-ctas {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n  animation: pprise .55s cubic-bezier(.19, 1, .22, 1) .46s both;\n}\n.pp-trust {\n  background: var(--ice);\n  border-bottom: 1px solid var(--line);\n}\n.pp-trust .wrap {\n  display: flex;\n  justify-content: space-between;\n  gap: 14px;\n  flex-wrap: wrap;\n  padding: 16px 24px;\n  font-size: 12.5px;\n  color: var(--slate);\n  font-weight: 500;\n}\n.pp-trust b {\n  color: var(--navy);\n  font-family: var(--mono);\n}\n.pp-body {\n  padding: 28px 0 35px 0;\n}\n.pp-sec {\n  font: 700 15px/1.35 var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin: 19px 0 16px 0;\n}\n.pp-sec:first-child {\n  margin-top: 0;\n}\n.pp-ov {\n  font-size: 16.5px;\n  color: var(--ink);\n  line-height: 1.75;\n  max-width: 75ch;\n}\n.pp-ov + .pp-ov {\n  margin-top: 14px;\n}\n.pp-ov b {\n  color: var(--navy);\n}\n.pp-stats {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-top: 24px;\n}\n.pp-stat {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px 18px;\n  background: var(--ice);\n  text-align: center;\n}\n.pp-stat b {\n  display: block;\n  font: 800 26px var(--disp);\n  color: var(--navy);\n  letter-spacing: -.02em;\n  line-height: 1.1;\n}\n.pp-stat span {\n  display: block;\n  margin-top: 5px;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.pp-gemini {\n  margin-top: 18px;\n  border-radius: 18px;\n  padding: 34px;\n  background:\n    linear-gradient(\n      115deg,\n      var(--navy),\n      #0E3A78 70%);\n  color: #fff;\n  position: relative;\n  overflow: hidden;\n}\n.pp-gemini:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background-image:\n    linear-gradient(rgba(127, 178, 255, .08) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(127, 178, 255, .08) 1px,\n      transparent 1px);\n  background-size: 38px 38px;\n  pointer-events: none;\n}\n.pp-gemini > * {\n  position: relative;\n  z-index: 1;\n}\n.pp-gemini .lbl {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font: 600 11px var(--mono);\n  letter-spacing: .16em;\n  text-transform: uppercase;\n  color: #B9CFFF;\n  margin-bottom: 12px;\n}\n.pp-gemini h3 {\n  font-family: var(--disp);\n  font-size: clamp(21px, 2.4vw, 28px);\n  font-weight: 700;\n  line-height: 1.25;\n  margin-bottom: 10px;\n  letter-spacing: -.02em;\n}\n.pp-gemini > p {\n  color: #cfe0fa;\n  font-size: 14.5px;\n  line-height: 1.7;\n  margin-bottom: 22px;\n  max-width: 78ch;\n}\n.pp-gemgrid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.gemcard {\n  background: rgba(255, 255, 255, .06);\n  border: 1px solid rgba(255, 255, 255, .16);\n  border-radius: 14px;\n  padding: 20px 18px;\n}\n.gemcard b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15px;\n  color: #fff;\n  margin-bottom: 6px;\n}\n.gemcard span {\n  font-size: 13px;\n  color: #c2d6f5;\n  line-height: 1.6;\n}\n.pp-gemfoot {\n  margin-top: 18px;\n  font: 500 12.5px var(--mono);\n  color: #9FBEEC;\n}\n.pp-apps {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n  margin-top: 20px;\n}\n.pp-app {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px 18px;\n  background: #fff;\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  transition: .18s;\n}\n.pp-app:hover {\n  border-color: var(--blue);\n  box-shadow: 0 10px 24px rgba(21, 101, 216, .1);\n  transform: translateY(-3px);\n}\n.pp-app .ai {\n  flex: none;\n  width: 40px;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pp-app .ai svg {\n  width: 100%;\n  height: auto;\n  max-height: 40px;\n}\n.pp-app b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15px;\n  color: var(--navy);\n  line-height: 1.3;\n  margin-bottom: 3px;\n}\n.pp-app span {\n  display: block;\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.5;\n}\n.pp-appsfoot {\n  margin-top: 14px;\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.pp-appsfoot b {\n  color: var(--navy);\n}\n.pp-vids {\n  width: min(900px, 100%);\n  margin: 0 0 12px;\n}\n.pv-tabs {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.pv-tab {\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--slate);\n  font: 600 13.5px var(--body);\n  padding: 9px 20px;\n  border-radius: 99px;\n  cursor: pointer;\n  transition: .2s;\n}\n.pv-tab:hover {\n  border-color: var(--blue);\n  color: var(--blue);\n}\n.pv-tab.active {\n  background: var(--navy);\n  border-color: var(--navy);\n  color: #fff;\n}\n.pv-frame {\n  aspect-ratio: 16/9;\n  border-radius: 16px;\n  overflow: hidden;\n  background:\n    linear-gradient(\n      120deg,\n      var(--navy),\n      #0E3A78 60%,\n      #0C4EA8);\n  position: relative;\n  box-shadow: 0 20px 50px rgba(4, 30, 66, .25);\n}\n.pv-frame iframe {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  display: block;\n}\n.pv-poster {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  background: transparent;\n}\n.pv-poster:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      rgba(4, 30, 66, .35),\n      rgba(4, 30, 66, .6));\n}\n.pv-play {\n  position: relative;\n  width: 68px;\n  height: 68px;\n  border-radius: 50%;\n  background: rgba(255, 255, 255, .95);\n  color: var(--navy);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 24px;\n  padding-left: 5px;\n  box-shadow: 0 10px 30px rgba(0, 0, 0, .35);\n  transition: transform .2s;\n}\n.pv-poster:hover .pv-play {\n  transform: scale(1.08);\n  background: #fff;\n}\n.pv-plabel {\n  position: relative;\n  color: #fff;\n  font: 600 14px var(--body);\n  text-shadow: 0 2px 8px rgba(0, 0, 0, .5);\n}\n.pv-note {\n  font-size: 11.5px;\n  color: #8FA2BD;\n  margin-top: 10px;\n}\n.pp-plans {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n}\n.ppl {\n  border: 1.5px solid var(--line);\n  border-radius: 16px;\n  padding: 24px 20px;\n  background: #fff;\n  text-align: center;\n  position: relative;\n  transition:\n    transform .3s,\n    box-shadow .3s,\n    border-color .3s;\n  display: flex;\n  flex-direction: column;\n}\n.ppl:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 16px 36px rgba(4, 30, 66, .1);\n}\n.ppl.hot {\n  border-color: var(--blue);\n}\n.ppl .tag {\n  position: absolute;\n  top: -11px;\n  left: 50%;\n  transform: translateX(-50%);\n  background: var(--blue);\n  color: #fff;\n  font: 600 10px var(--mono);\n  letter-spacing: .08em;\n  padding: 4px 12px;\n  border-radius: 99px;\n  white-space: nowrap;\n}\n.ppl.hot .tag {\n  background: var(--orange);\n}\n.ppl h4 {\n  font-family: var(--disp);\n  font-size: 17px;\n  font-weight: 700;\n  color: var(--navy);\n  margin-bottom: 8px;\n}\n.ppl .amt {\n  font-family: var(--mono);\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.ppl .amt b {\n  font-size: 26px;\n}\n.ppl .amt del {\n  font-size: 15px;\n  color: #9AA8BE;\n  margin-left: 6px;\n  font-weight: 500;\n}\n.ppl .amt span {\n  display: block;\n  font-size: 11.5px;\n  color: var(--slate);\n  margin-top: 2px;\n}\n.ppl .save {\n  font: 600 11px var(--mono);\n  color: #128A42;\n  background: rgba(29, 168, 85, .1);\n  border-radius: 99px;\n  padding: 3px 10px;\n  display: inline-block;\n  margin-bottom: 14px;\n}\n.ppl ul {\n  list-style: none;\n  text-align: left;\n  margin: 0 0 16px;\n  flex: 1;\n}\n.ppl ul li {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.5;\n  padding: 5px 0 5px 20px;\n  position: relative;\n}\n.ppl ul li:before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  top: 5px;\n  color: var(--ok);\n  font-weight: 700;\n  font-size: 11px;\n}\n.ppl ul li.no {\n  color: #9AA8BE;\n}\n.ppl ul li.no:before {\n  content: "\\2715";\n  color: #C8D3E3;\n}\n.ppl .btns {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.ppl .btn {\n  padding: 10px 14px;\n  font-size: 13px;\n}\n.pp-partner {\n  margin-top: 18px;\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 26px;\n  background: #fff;\n}\n.pp-partnerhead {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n  padding-bottom: 20px;\n  border-bottom: 1px solid var(--line);\n  margin-bottom: 20px;\n}\n.pp-partnerhead .seal {\n  flex: none;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 16px 24px;\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  background: var(--ice);\n}\n.pp-partnerhead .seal small {\n  font: 600 9px var(--mono);\n  letter-spacing: .14em;\n  text-transform: uppercase;\n  color: var(--slate);\n}\n.pp-partnerhead .txt {\n  flex: 1;\n  min-width: 240px;\n}\n.pp-partnerhead .txt b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16.5px;\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.pp-partnerhead .txt span {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.pp-partnergrid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.pp-partnergrid div b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  margin-bottom: 4px;\n}\n.pp-partnergrid div span {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.pp-steps {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 14px;\n}\n.pstep {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 22px 20px;\n  background: var(--ice);\n  position: relative;\n}\n.pstep .num {\n  font: 800 13px var(--mono);\n  color: #fff;\n  background: var(--blue);\n  border-radius: 8px;\n  padding: 4px 10px;\n  display: inline-block;\n  margin-bottom: 12px;\n  letter-spacing: .06em;\n}\n.pstep b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 16px;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.pstep span {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.pp-feats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 14px;\n}\n.pp-feat {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px 20px;\n  display: flex;\n  gap: 14px;\n  align-items: flex-start;\n  transition: .15s;\n  background: #fff;\n}\n.pp-feat:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 22px rgba(21, 101, 216, .1);\n}\n.pp-feat .fic {\n  flex: none;\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 17px;\n  font-weight: 700;\n}\n.pp-feat p {\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.pp-feat p b {\n  display: block;\n  color: var(--navy);\n  font-size: 14.5px;\n  margin-bottom: 3px;\n}\n.pp-feat ul {\n  list-style: none;\n  margin: 8px 0 0;\n}\n.pp-feat ul li {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.5;\n  padding: 3px 0 3px 15px;\n  position: relative;\n}\n.pp-feat ul li:before {\n  content: "\\2022";\n  position: absolute;\n  left: 0;\n  color: var(--blue);\n  font-weight: 700;\n}\n.pp-bens {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.pb {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-items: flex-start;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: #fff;\n}\n.pb .ic {\n  flex: none;\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  background: rgba(29, 168, 85, .12);\n  color: #128A42;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n.pb p {\n  font-size: 14px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.pb p b {\n  display: block;\n  color: var(--navy);\n  font-size: 14.5px;\n  margin-bottom: 2px;\n}\n.pp-uses {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  grid-auto-rows: 1fr;\n  gap: 12px;\n  align-items: stretch;\n}\n.pu {\n  border: 1.5px solid var(--line);\n  border-radius: 12px;\n  padding: 16px 18px;\n  background: var(--ice);\n  font-size: 13.5px;\n  color: var(--ink);\n  min-width: 0;\n  height: 100%;\n}\n.pu-ic {\n  font-size: 19px;\n  display: block;\n  margin-bottom: 6px;\n}\n.pu b {\n  display: block;\n  color: var(--navy);\n  margin-bottom: 3px;\n  font-size: 14px;\n}\n.pp-secrows {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0 34px;\n  margin: 20px 0 6px;\n}\n.psrow {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  gap: 14px;\n  padding: 12px 0;\n  border-bottom: 1px dashed var(--line);\n}\n.psrow span {\n  font-size: 13.5px;\n  color: var(--slate);\n}\n.psrow b {\n  font: 600 13.5px var(--mono);\n  color: var(--navy);\n  text-align: right;\n}\n.pp-secfoot {\n  margin: 18px 0 0;\n  font-size: 13px;\n  color: var(--slate);\n  font-family: var(--mono);\n}\n.pp-why {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 12px;\n}\n.pw {\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 18px;\n  background: var(--ice);\n}\n.pw-ic {\n  display: flex;\n  width: 38px;\n  height: 38px;\n  border-radius: 11px;\n  background: #fff;\n  border: 1px solid var(--line);\n  font-size: 18px;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 10px;\n}\n.pw b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 14.5px;\n  color: var(--navy);\n  margin-bottom: 3px;\n}\n.pw span {\n  font-size: 12.5px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.pp-tcards {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 18px;\n}\n.tcard {\n  position: relative;\n  border: 1px solid var(--line);\n  border-radius: 18px;\n  padding: 26px 22px;\n  background: #fff;\n  box-shadow: 0 10px 30px rgba(4, 30, 66, .06);\n  transition: transform .3s;\n}\n.tcard:hover {\n  transform: translateY(-4px);\n}\n.quote-badge {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 56px;\n  height: 56px;\n  border-radius: 0 18px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-family: Georgia, serif;\n}\n.tav {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  margin: 0 auto 12px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #7C3AED);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font: 700 22px var(--disp);\n}\n.tname {\n  text-align: center;\n  font-family: var(--disp);\n  font-weight: 700;\n  color: var(--navy);\n  font-size: 16px;\n}\n.trole {\n  text-align: center;\n  font-size: 12.5px;\n  color: var(--slate);\n  margin-bottom: 12px;\n}\n.tstars {\n  text-align: center;\n  color: var(--orange);\n  letter-spacing: 2px;\n  margin-bottom: 14px;\n}\n.tcard p {\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.6;\n  text-align: center;\n  margin: 0;\n}\n.pp-faq {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px;\n}\n.faq2 {\n  border: 1.5px solid var(--line);\n  border-radius: 14px;\n  background: #fff;\n  overflow: hidden;\n  transition: border-color .25s, box-shadow .25s;\n  align-self: start;\n}\n.faq2.open {\n  border-color: var(--blue);\n  box-shadow: 0 12px 30px rgba(21, 101, 216, .1);\n}\n.faq2-q {\n  width: 100%;\n  text-align: left;\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 18px 20px;\n  font: 700 15px var(--disp);\n  color: var(--navy);\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n}\n.faq2-ic {\n  flex: none;\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: var(--ice);\n  color: var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 600;\n  transition: transform .3s, background .25s;\n}\n.faq2.open .faq2-ic {\n  transform: rotate(135deg);\n  background: var(--blue);\n  color: #fff;\n}\n.faq2-a {\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height .35s cubic-bezier(.4, 0, .2, 1);\n}\n.faq2.open .faq2-a {\n  max-height: 460px;\n}\n.faq2-a p {\n  padding: 0 20px 18px;\n  font-size: 13.5px;\n  color: var(--slate);\n  line-height: 1.65;\n}\n.pp-related {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.rel {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px;\n  background: var(--ice);\n  transition: .2s;\n  display: block;\n}\n.rel:hover {\n  border-color: var(--blue);\n  background: #fff;\n  box-shadow: 0 10px 24px rgba(21, 101, 216, .1);\n  transform: translateY(-3px);\n}\n.rel b {\n  display: block;\n  font-family: var(--disp);\n  font-size: 15px;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.rel span {\n  font-size: 12.8px;\n  color: var(--slate);\n  line-height: 1.55;\n}\n.pp-blog {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 12px;\n}\n.bl {\n  border: 1px solid var(--line);\n  border-radius: 14px;\n  padding: 20px;\n  background: #fff;\n  transition: .2s;\n  display: block;\n}\n.bl:hover {\n  border-color: var(--blue);\n  box-shadow: 0 10px 26px rgba(21, 101, 216, .1);\n  transform: translateY(-3px);\n}\n.bl .kicker {\n  font: 600 10.5px var(--mono);\n  letter-spacing: .12em;\n  text-transform: uppercase;\n  color: var(--blue);\n  margin-bottom: 8px;\n}\n.bl h3 {\n  font-family: var(--disp);\n  font-size: 15.5px;\n  font-weight: 700;\n  color: var(--navy);\n  line-height: 1.35;\n  margin-bottom: 8px;\n}\n.bl p {\n  font-size: 13px;\n  color: var(--slate);\n  line-height: 1.6;\n}\n.bl .more {\n  display: inline-block;\n  margin-top: 10px;\n  font: 600 12.5px var(--body);\n  color: var(--blue);\n}\n.pp-blogbtn-wrap {\n  display: flex;\n  justify-content: center;\n  margin: 22px 0 4px;\n}\n.pp-blogbtn {\n  background:\n    linear-gradient(\n      135deg,\n      var(--blue),\n      #0C3E8F);\n  color: #fff;\n  border: none;\n  padding: 12px 26px;\n  border-radius: 99px;\n  font-weight: 600;\n  font-size: 14px;\n  box-shadow: 0 10px 26px rgba(21, 101, 216, .22);\n  transition: transform .25s, box-shadow .25s;\n}\n.pp-blogbtn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 34px rgba(21, 101, 216, .3);\n  color: #fff;\n}\n.pp-contact {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 22px;\n  margin-top: 18px;\n}\n.pp-ccard {\n  border: 1px solid var(--line);\n  border-radius: 16px;\n  padding: 26px;\n  background: var(--ice);\n}\n.pp-ccard h3 {\n  font-family: var(--disp);\n  font-size: 19px;\n  font-weight: 700;\n  color: var(--navy);\n  margin-bottom: 6px;\n}\n.pp-ccard > p {\n  font-size: 13.5px;\n  color: var(--slate);\n  margin-bottom: 16px;\n}\n.pp-clist {\n  list-style: none;\n  display: grid;\n  gap: 10px;\n}\n.pp-clist a {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border: 1px solid var(--line);\n  border-radius: 12px;\n  padding: 13px 16px;\n  transition: .15s;\n}\n.pp-clist a:hover {\n  border-color: var(--blue);\n  box-shadow: 0 8px 20px rgba(21, 101, 216, .1);\n}\n.pp-clist .ci {\n  flex: none;\n  width: 34px;\n  height: 34px;\n  border-radius: 9px;\n  background: var(--blue-soft);\n  color: var(--blue);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 15px;\n}\n.pp-clist b {\n  display: block;\n  font-size: 14px;\n  color: var(--navy);\n}\n.pp-clist span {\n  display: block;\n  font-size: 12.5px;\n  color: var(--slate);\n}\n.pp-form {\n  display: grid;\n  gap: 12px;\n}\n.pp-form label {\n  display: block;\n  font: 600 12px var(--mono);\n  letter-spacing: .06em;\n  text-transform: uppercase;\n  color: var(--slate);\n  margin-bottom: 5px;\n}\n.pp-form input,\n.pp-form textarea {\n  width: 100%;\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 11px 14px;\n  font: 400 14px var(--body);\n  color: var(--ink);\n  background: #fff;\n  transition: .15s;\n}\n.pp-form input:focus,\n.pp-form textarea:focus {\n  outline: none;\n  border-color: var(--blue);\n  box-shadow: 0 0 0 3px rgba(21, 101, 216, .12);\n}\n.pp-form textarea {\n  min-height: 88px;\n  resize: vertical;\n}\n.pp-form .row2 {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.pp-formnote {\n  font-size: 12px;\n  color: var(--slate);\n  text-align: center;\n}\n.pp-cta {\n  margin-top: 22px;\n  background:\n    linear-gradient(\n      105deg,\n      var(--blue),\n      #0C3E8F);\n  color: #fff;\n  border-radius: 16px;\n  padding: 36px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 24px;\n  flex-wrap: wrap;\n}\n.pp-cta h3 {\n  font-family: var(--disp);\n  font-size: 22px;\n  font-weight: 700;\n}\n.pp-cta p {\n  color: #cfe0fa;\n  font-size: 14.5px;\n  margin-top: 4px;\n}\n.pp-ctabtns {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.pp-proof {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  justify-content: center;\n  margin-top: 22px;\n}\n.pp-proof span {\n  font: 600 12px var(--body);\n  color: var(--slate);\n  border: 1px solid var(--line);\n  border-radius: 99px;\n  padding: 8px 16px;\n  background: #fff;\n}\n.newsletter {\n  background: var(--ice);\n  border-top: 1px solid var(--line);\n  padding: 19px 0 19px 0;\n}\n.newsletter-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 26px;\n  flex-wrap: wrap;\n}\n.newsletter h2 {\n  font-size: clamp(18px, 2vw, 23px);\n  margin: 0;\n  max-width: 52ch;\n  color: var(--navy);\n}\n.newsletter-form {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.newsletter-form input {\n  border: 1.5px solid var(--line);\n  border-radius: 10px;\n  padding: 12px 16px;\n  font: 400 14px var(--body);\n  min-width: 260px;\n  background: #fff;\n}\n.newsletter-form input:focus {\n  outline: none;\n  border-color: var(--blue);\n}\n.newsletter-form button {\n  background: var(--orange);\n  color: #fff;\n  border: 0;\n  border-radius: 10px;\n  padding: 12px 24px;\n  font: 600 14px var(--body);\n  cursor: pointer;\n  transition: .15s;\n}\n.newsletter-form button:hover {\n  background: #e97a08;\n}\nfooter {\n  background: #3B63E8;\n  color: #fff;\n  padding: 48px 0 28px;\n  font-size: 14px;\n}\n.nf-top {\n  margin-bottom: 28px;\n}\n.nf-logo {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 16px;\n  flex-wrap: wrap;\n}\n.nf-logo img {\n  height: 46px;\n  width: auto;\n  background: #fff;\n  padding: 5px 8px;\n  border-radius: 8px;\n}\n.nf-tag {\n  font-size: 12px;\n  color: #DCE6FF;\n  line-height: 1.5;\n}\n.nf-tag em {\n  color: #BBD0FF;\n  font-style: normal;\n  font-size: 11px;\n}\n.nf-desc {\n  font-size: 13px;\n  line-height: 1.7;\n  color: #E4ECFF;\n  margin: 0 0 20px;\n  max-width: 94ch;\n  text-align: justify;\n  text-align-last: left;\n}\n.nf-social {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n.nfs {\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n}\n.nf-rows {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 22px;\n  margin-bottom: 6px;\n}\n.nf-row {\n  display: flex;\n  gap: 20px;\n  align-items: baseline;\n  margin-bottom: 18px;\n  flex-wrap: wrap;\n}\n.nf-rlbl {\n  font-family: var(--disp);\n  font-weight: 600;\n  font-size: 15px;\n  color: #fff;\n  min-width: 120px;\n  flex: none;\n  margin: 0;\n}\n.nf-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px 22px;\n  flex: 1;\n}\n.nf-links a {\n  color: #E4ECFF;\n  font-size: 14px;\n  transition: color .2s;\n}\n.nf-links a:before {\n  content: "\\203a";\n  color: #BBD0FF;\n  margin-right: 6px;\n}\n.nf-links a:hover {\n  color: #fff;\n}\n.nf-cert-row {\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  margin: 16px 0;\n  flex-wrap: wrap;\n  border-top: 1px solid rgba(255, 255, 255, .1);\n  padding-top: 16px;\n}\n.nf-isos {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-iso {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background: #2E4FC4;\n  border: 1px solid rgba(255, 255, 255, .25);\n  border-radius: 8px;\n  padding: 8px 12px;\n  min-width: 62px;\n  color: #fff;\n  font-family: var(--disp);\n  font-weight: 700;\n  font-size: 14px;\n}\n.nf-iso b {\n  font-size: 9px;\n  letter-spacing: .05em;\n  color: #BBD0FF;\n}\n.nf-pays {\n  display: flex;\n  gap: 8px;\n  flex-wrap: wrap;\n  flex: 1;\n}\n.nf-pay {\n  background: #fff;\n  color: #1C2A3A;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 7px 12px;\n  border-radius: 6px;\n}\n.nf-bottom {\n  border-top: 1px solid rgba(255, 255, 255, .18);\n  padding-top: 20px;\n  display: flex;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n  font-size: 12.5px;\n  color: #C3D3FF;\n}\n.wa-fab {\n  position: fixed;\n  left: 22px;\n  bottom: 22px;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #25D366;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  box-shadow: 0 12px 30px rgba(37, 211, 102, .4);\n  z-index: 200;\n}\n.back-to-top {\n  position: fixed;\n  right: 22px;\n  bottom: 22px;\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  border: 1.5px solid var(--line);\n  background: #fff;\n  color: var(--navy);\n  font-size: 18px;\n  cursor: pointer;\n  box-shadow: 0 10px 26px rgba(4, 30, 66, .14);\n  z-index: 200;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity .25s;\n}\n.back-to-top.show {\n  opacity: 1;\n  pointer-events: auto;\n}\n@keyframes pprise {\n  0% {\n    opacity: 0;\n    transform: translateY(22px);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n@keyframes ppcursor {\n  50% {\n    opacity: 0;\n  }\n}\n@keyframes illusfloat {\n  0%, to {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n@keyframes pphgrid {\n  to {\n    background-position: 44px 44px;\n  }\n}\n@keyframes pphscan {\n  0%, to {\n    transform: translateY(-10%);\n    opacity: .5;\n  }\n  50% {\n    transform: translateY(230%);\n    opacity: 1;\n  }\n}\n@keyframes aflow1 {\n  0% {\n    transform: translate(0) scale(1);\n  }\n  to {\n    transform: translate(90px, 50px) scale(1.18);\n  }\n}\n@keyframes aflow2 {\n  0% {\n    transform: translate(0) scale(1.1);\n  }\n  to {\n    transform: translate(-80px, 60px) scale(.95);\n  }\n}\n@keyframes aflow3 {\n  0% {\n    transform: translate(0) scale(1);\n  }\n  to {\n    transform: translate(60px, -45px) scale(1.22);\n  }\n}\n@keyframes wmSpin {\n  to {\n    transform: translate(-50%, -50%) rotate(360deg);\n  }\n}\n@keyframes drift {\n  0%, to {\n    transform: translate(0) scale(1);\n  }\n  50% {\n    transform: translate(34px, -26px) scale(1.08);\n  }\n}\n@keyframes glow {\n  0%, to {\n    box-shadow: 0 0 rgba(255, 140, 26, .5);\n  }\n  50% {\n    box-shadow: 0 0 0 13px rgba(255, 140, 26, 0);\n  }\n}\n@media (max-width: 1100px) {\n  .xh-main-nav {\n    display: none;\n  }\n  .xh-mobile-toggle {\n    display: flex;\n  }\n  .pp-feats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-stats {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .pp-plans {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .pp-gemgrid,\n  .pp-partnergrid,\n  .pp-steps,\n  .pp-related,\n  .pp-blog {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 1000px) {\n  .pp-bens {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-why,\n  .pp-uses {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .pp-apps {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n@media (max-width: 900px) {\n  .pp-hero > .wrap > .pp-crumb,\n  .pp-hero > .wrap > h1,\n  .pp-hero > .wrap > .pp-tagline,\n  .pp-hero > .wrap > .pp-tagline-support,\n  .pp-hero > .wrap > .pp-typewriter,\n  .pp-hero > .wrap > .pp-chips,\n  .pp-hero > .wrap > .pp-hero-grid {\n    max-width: 100%;\n  }\n  .pph-scene {\n    position: relative;\n    width: 100%;\n    top: 0;\n    padding: 8px 0 4px;\n    order: -1;\n    -webkit-mask-image: none;\n    mask-image: none;\n  }\n  .pph-illus-img {\n    width: 58%;\n    max-width: 260px;\n  }\n  .pph-map .wm-ring {\n    display: none;\n  }\n  .pp-gemini {\n    padding: 26px;\n  }\n  .pp-contact {\n    grid-template-columns: 1fr;\n  }\n  .pp-tcards {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 820px) {\n  .pp-hero {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n@media (max-width: 760px) {\n  .pp-feats,\n  .pp-bens,\n  .pp-plans,\n  .pp-why,\n  .pp-uses,\n  .pp-secrows,\n  .pp-faq,\n  .pp-stats,\n  .pp-apps,\n  .pp-gemgrid,\n  .pp-partnergrid,\n  .pp-steps,\n  .pp-related,\n  .pp-blog {\n    grid-template-columns: 1fr;\n  }\n  .pp-hero {\n    min-height: 340px;\n    padding: 40px 0;\n  }\n  .pp-hero h1 {\n    font-size: 26px;\n  }\n  .pp-tagline {\n    font-size: 15px;\n  }\n  .pp-body {\n    padding: 20px 0 28px 0;\n  }\n  .pp-cta {\n    padding: 28px 22px;\n  }\n  .pp-cta h3 {\n    font-size: 19px;\n  }\n  .hero-ctas .btn,\n  .pp-ctabtns .btn {\n    width: 100%;\n    text-align: center;\n  }\n  .pv-frame {\n    border-radius: 12px;\n  }\n  .nf-bottom {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 8px;\n  }\n  .newsletter-form {\n    width: 100%;\n  }\n  .newsletter-form input {\n    flex: 1;\n    min-width: 0;\n  }\n}\n@media (max-width: 620px) {\n  .pp-hpoints {\n    grid-template-columns: 1fr;\n    width: 100%;\n  }\n  .pp-form .row2 {\n    grid-template-columns: 1fr;\n  }\n  .xh-nav-wrap {\n    height: 64px;\n    padding: 0 14px;\n    gap: 10px;\n  }\n  .xh-brand img {\n    height: 52px;\n  }\n  .xh-actions .btn {\n    display: none;\n  }\n  .xh-icon-btn,\n  .xh-mobile-toggle {\n    width: 38px;\n    height: 38px;\n    border-radius: 10px;\n  }\n  .promo {\n    font-size: 12px;\n    padding: 7px 12px;\n  }\n  .pp-partner {\n    padding: 20px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .pph-grid,\n  .pph-aur,\n  .pph-scan,\n  .pph-map .wm-ring,\n  .pph-illus-img,\n  .orb,\n  .btn-primary,\n  .pp-crumb,\n  .pp-hero h1,\n  .pp-tagline,\n  .hero-ctas {\n    animation: none;\n    opacity: 1;\n    transform: none;\n  }\n}\n.quantity-total {\n  color: #041e42;\n  font-size: 13px;\n  font-weight: 600;\n  margin: 0 0 14px;\n  text-align: center;\n}\n/*# sourceMappingURL=google-workspace.page.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GoogleWorkspacePage, { className: "GoogleWorkspacePage", filePath: "src/app/pages/google-workspace.page.ts", lineNumber: 25 });
})();
export {
  GoogleWorkspacePage
};
//# sourceMappingURL=chunk-TLCAUKCG.js.map
