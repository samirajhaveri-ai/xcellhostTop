import {
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  setClassMetadata,
  ɵɵdefineDirective
} from "./chunk-7JITLDDL.js";

// src/app/sections/product/hero-net.directive.ts
var HeroNetDirective = class _HeroNetDirective {
  el = inject(ElementRef);
  raf = 0;
  view = null;
  onResize = () => this.size();
  constructor() {
    afterNextRender(() => this.start());
  }
  ngOnDestroy() {
    const win = this.view;
    if (!win)
      return;
    if (this.raf && typeof win.cancelAnimationFrame === "function") {
      win.cancelAnimationFrame(this.raf);
    }
    if (typeof win.removeEventListener === "function") {
      win.removeEventListener("resize", this.onResize);
    }
    this.view = null;
  }
  /** Match the canvas backing store to the hero box it sits in. */
  size() {
    const cv = this.el.nativeElement;
    const host = cv.parentElement;
    if (!host)
      return;
    cv.width = host.offsetWidth;
    cv.height = host.offsetHeight;
  }
  start() {
    const cv = this.el.nativeElement;
    const win = cv.ownerDocument.defaultView;
    if (!win || typeof win.matchMedia !== "function" || typeof win.requestAnimationFrame !== "function" || typeof win.addEventListener !== "function" || win.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return;
    const ctx = cv.getContext("2d");
    if (!ctx || !cv.parentElement)
      return;
    this.view = win;
    const count = win.innerWidth < 700 ? 16 : 34;
    const points = Array.from({ length: count }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 6e-4,
      vy: (Math.random() - 0.5) * 6e-4
    }));
    this.size();
    win.addEventListener("resize", this.onResize);
    const frame = () => {
      if (!cv.width || !cv.height)
        this.size();
      const w = cv.width;
      const h = cv.height;
      if (w && h) {
        ctx.clearRect(0, 0, w, h);
        for (const p of points) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > 1)
            p.vx *= -1;
          if (p.y < 0 || p.y > 1)
            p.vy *= -1;
        }
        ctx.lineWidth = 1;
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            const a = points[i];
            const b = points[j];
            const dx = (a.x - b.x) * w;
            const dy = (a.y - b.y) * h;
            const d = Math.sqrt(dx * dx + dy * dy);
            if (d < 140) {
              ctx.strokeStyle = "rgba(127,178,255," + (0.18 * (1 - d / 140)).toFixed(3) + ")";
              ctx.beginPath();
              ctx.moveTo(a.x * w, a.y * h);
              ctx.lineTo(b.x * w, b.y * h);
              ctx.stroke();
            }
          }
        }
        ctx.fillStyle = "rgba(180,210,255,.85)";
        for (const p of points) {
          ctx.beginPath();
          ctx.arc(p.x * w, p.y * h, 1.5, 0, 7);
          ctx.fill();
        }
      }
      this.raf = win.requestAnimationFrame(frame);
    };
    this.raf = win.requestAnimationFrame(frame);
  }
  static \u0275fac = function HeroNetDirective_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroNetDirective)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _HeroNetDirective, selectors: [["canvas", "xhHeroNet", ""]] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeroNetDirective, [{
    type: Directive,
    args: [{
      selector: "canvas[xhHeroNet]",
      standalone: true
    }]
  }], () => [], null);
})();

export {
  HeroNetDirective
};
//# sourceMappingURL=chunk-CRL34XPE.js.map
