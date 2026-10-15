import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵgetCurrentView,
  ɵɵnextContext,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-7JITLDDL.js";

// src/app/sections/smb-section-nav.component.ts
var _forTrack0 = ($index, $item) => $item.target;
function SmbSectionNavComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementStart(0, "a", 3);
    \u0275\u0275domListener("click", function SmbSectionNavComponent_For_3_Template_a_click_0_listener($event) {
      const link_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.scrollToSection(link_r2.target, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const link_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", ctx_r2.activeTarget() === link_r2.target);
    \u0275\u0275attribute("href", "#" + link_r2.target, \u0275\u0275sanitizeUrl)("aria-current", ctx_r2.activeTarget() === link_r2.target ? "location" : null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(link_r2.label);
  }
}
var SmbSectionNavComponent = class _SmbSectionNavComponent {
  label = input("Page sections", ...ngDevMode ? [{ debugName: "label" }] : []);
  links = input.required(...ngDevMode ? [{ debugName: "links" }] : []);
  frameSelector = input(null, ...ngDevMode ? [{ debugName: "frameSelector" }] : []);
  highlightSelection = input(false, ...ngDevMode ? [{ debugName: "highlightSelection" }] : []);
  selectedTarget = signal(null, ...ngDevMode ? [{ debugName: "selectedTarget" }] : []);
  activeTarget = computed(() => this.highlightSelection() ? this.links().find((link) => link.target === this.selectedTarget())?.target ?? this.links()[0]?.target : null, ...ngDevMode ? [{ debugName: "activeTarget" }] : []);
  scrollToSection(target, event) {
    event.preventDefault();
    const selector = this.frameSelector();
    const frame = selector ? document.querySelector(selector) : null;
    const section = document.getElementById(target) ?? frame?.contentDocument?.getElementById(target);
    if (!section)
      return;
    this.selectedTarget.set(target);
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${target}`);
    const frameTop = frame && section.ownerDocument === frame.contentDocument ? frame.getBoundingClientRect().top : 0;
    const top = section.getBoundingClientRect().top + frameTop + window.scrollY - 148;
    window.scrollTo({ top: Math.max(0, top), behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  }
  static \u0275fac = function SmbSectionNavComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SmbSectionNavComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SmbSectionNavComponent, selectors: [["xh-smb-section-nav"]], hostVars: 2, hostBindings: function SmbSectionNavComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      \u0275\u0275classProp("reference-navigation", ctx.highlightSelection());
    }
  }, inputs: { label: [1, "label"], links: [1, "links"], frameSelector: [1, "frameSelector"], highlightSelection: [1, "highlightSelection"] }, decls: 4, vars: 1, consts: [[1, "smb-section-nav"], [1, "smb-section-nav-track"], [3, "active"], [3, "click"]], template: function SmbSectionNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "nav", 0)(1, "div", 1);
      \u0275\u0275repeaterCreate(2, SmbSectionNavComponent_For_3_Template, 2, 5, "a", 2, _forTrack0);
      \u0275\u0275domElementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275attribute("aria-label", ctx.label());
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.links());
    }
  }, styles: ['\n\n[_nghost-%COMP%] {\n  position: sticky;\n  top: 78px;\n  z-index: 40;\n  display: block;\n  width: 100%;\n}\n.smb-section-nav[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 20px;\n  border-bottom: 1px solid #e7ebf1;\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: 0 5px 18px rgba(4, 30, 66, 0.06);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.smb-section-nav-track[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  width: max-content;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 4px;\n  overflow-x: auto;\n  border-radius: 999px;\n  background: #f2f3f6;\n  scrollbar-width: none;\n}\n.smb-section-nav-track[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\na[_ngcontent-%COMP%]:hover, \na[_ngcontent-%COMP%]:focus-visible, \na.active[_ngcontent-%COMP%] {\n  color: #075fc7;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(4, 30, 66, 0.12);\n}\n.reference-navigation[_nghost-%COMP%]   .smb-section-nav[_ngcontent-%COMP%] {\n  padding-block: 4px;\n  border-bottom: 0;\n  box-shadow: none;\n}\na[_ngcontent-%COMP%]:focus-visible {\n  outline: 2px solid #1d73df;\n  outline-offset: 1px;\n}\na[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 9px 15px;\n  border-radius: 999px;\n  color: #3d4759;\n  font: 600 13px/1.25 var(--body, "IBM Plex Sans", sans-serif);\n  text-decoration: none;\n  white-space: nowrap;\n  transition:\n    color 0.2s ease,\n    background-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n@media (max-width: 900px) {\n  [_nghost-%COMP%] {\n    top: 70px;\n  }\n  .smb-section-nav[_ngcontent-%COMP%] {\n    padding-inline: 12px;\n  }\n  .smb-section-nav-track[_ngcontent-%COMP%] {\n    justify-content: flex-start;\n  }\n  a[_ngcontent-%COMP%] {\n    padding: 9px 13px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=smb-section-nav.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SmbSectionNavComponent, [{
    type: Component,
    args: [{ selector: "xh-smb-section-nav", standalone: true, host: { "[class.reference-navigation]": "highlightSelection()" }, changeDetection: ChangeDetectionStrategy.OnPush, template: `<nav class="smb-section-nav" [attr.aria-label]="label()">\r
  <div class="smb-section-nav-track">\r
    @for (link of links(); track link.target) {\r
      <a [attr.href]="'#' + link.target" [class.active]="activeTarget() === link.target" [attr.aria-current]="activeTarget() === link.target ? 'location' : null" (click)="scrollToSection(link.target, $event)">{{ link.label }}</a>\r
    }\r
  </div>\r
</nav>\r
`, styles: ['/* src/app/sections/smb-section-nav.component.css */\n:host {\n  position: sticky;\n  top: 78px;\n  z-index: 40;\n  display: block;\n  width: 100%;\n}\n.smb-section-nav {\n  width: 100%;\n  padding: 10px 20px;\n  border-bottom: 1px solid #e7ebf1;\n  background: rgba(255, 255, 255, 0.96);\n  box-shadow: 0 5px 18px rgba(4, 30, 66, 0.06);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n}\n.smb-section-nav-track {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n  width: max-content;\n  max-width: 100%;\n  margin: 0 auto;\n  padding: 4px;\n  overflow-x: auto;\n  border-radius: 999px;\n  background: #f2f3f6;\n  scrollbar-width: none;\n}\n.smb-section-nav-track::-webkit-scrollbar {\n  display: none;\n}\na:hover,\na:focus-visible,\na.active {\n  color: #075fc7;\n  background: #fff;\n  box-shadow: 0 2px 8px rgba(4, 30, 66, 0.12);\n}\n:host(.reference-navigation) .smb-section-nav {\n  padding-block: 4px;\n  border-bottom: 0;\n  box-shadow: none;\n}\na:focus-visible {\n  outline: 2px solid #1d73df;\n  outline-offset: 1px;\n}\na {\n  flex: 0 0 auto;\n  padding: 9px 15px;\n  border-radius: 999px;\n  color: #3d4759;\n  font: 600 13px/1.25 var(--body, "IBM Plex Sans", sans-serif);\n  text-decoration: none;\n  white-space: nowrap;\n  transition:\n    color 0.2s ease,\n    background-color 0.2s ease,\n    box-shadow 0.2s ease;\n}\n@media (max-width: 900px) {\n  :host {\n    top: 70px;\n  }\n  .smb-section-nav {\n    padding-inline: 12px;\n  }\n  .smb-section-nav-track {\n    justify-content: flex-start;\n  }\n  a {\n    padding: 9px 13px;\n    font-size: 12px;\n  }\n}\n/*# sourceMappingURL=smb-section-nav.component.css.map */\n'] }]
  }], null, { label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], links: [{ type: Input, args: [{ isSignal: true, alias: "links", required: true }] }], frameSelector: [{ type: Input, args: [{ isSignal: true, alias: "frameSelector", required: false }] }], highlightSelection: [{ type: Input, args: [{ isSignal: true, alias: "highlightSelection", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SmbSectionNavComponent, { className: "SmbSectionNavComponent", filePath: "src/app/sections/smb-section-nav.component.ts", lineNumber: 16 });
})();

export {
  SmbSectionNavComponent
};
//# sourceMappingURL=chunk-JECKRT3F.js.map
