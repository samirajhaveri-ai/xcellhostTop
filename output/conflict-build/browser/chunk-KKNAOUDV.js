import {
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-EVL5GQOW.js";
import {
  LeadService
} from "./chunk-MAWJHU3X.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-7JITLDDL.js";

// src/app/sections/gpu-lead-hero.component.ts
var _forTrack0 = ($index, $item) => $item[0] + $item[1];
function GpuLeadHeroComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "span", 9)(2, "i");
    \u0275\u0275text(3, "RK");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "i");
    \u0275\u0275text(5, "AM");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "i");
    \u0275\u0275text(7, "VS");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "i");
    \u0275\u0275text(9, "NP");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "span")(11, "b");
    \u0275\u0275text(12, "\u2605\u2605\u2605\u2605\u2605");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "small");
    \u0275\u0275text(14, "Trusted by 10,000+ businesses");
    \u0275\u0275elementEnd()()();
  }
}
function GpuLeadHeroComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article")(1, "span")(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "small");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const feature_r1 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(feature_r1[0]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(feature_r1[1]);
  }
}
function GpuLeadHeroComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, GpuLeadHeroComponent_Conditional_8_For_2_Template, 6, 2, "article", null, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.copy().features);
  }
}
function GpuLeadHeroComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "span");
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "Request received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Your GPU specialist will contact you with access and sizing steps.");
    \u0275\u0275elementEnd()();
  }
}
function GpuLeadHeroComponent_Conditional_11_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function GpuLeadHeroComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1, "Start with \u20B920,000 free credits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "h2");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 11);
    \u0275\u0275text(5, "Share your details and we\u2019ll send the access steps by email.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "form", 12, 0);
    \u0275\u0275listener("ngSubmit", function GpuLeadHeroComponent_Conditional_11_Template_form_ngSubmit_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275elementStart(8, "label");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(9, "svg", 13);
    \u0275\u0275element(10, "circle", 14)(11, "path", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(12, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function GpuLeadHeroComponent_Conditional_11_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.name, $event) || (ctx_r1.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "label", 17)(14, "span", 18);
    \u0275\u0275text(15, "\u{1F1EE}\u{1F1F3}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "b");
    \u0275\u0275text(17, "+91");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function GpuLeadHeroComponent_Conditional_11_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.phone, $event) || (ctx_r1.phone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "label");
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 13);
    \u0275\u0275element(21, "rect", 20)(22, "path", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(23, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function GpuLeadHeroComponent_Conditional_11_Template_input_ngModelChange_23_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.email, $event) || (ctx_r1.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "button", 23);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, GpuLeadHeroComponent_Conditional_11_Conditional_26_Template, 2, 1, "p", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p", 25);
    \u0275\u0275text(28, "We value your privacy and never share your information with third parties. See our ");
    \u0275\u0275elementStart(29, "a", 26);
    \u0275\u0275text(30, "Privacy Policy");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, ".");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const gpuLeadForm_r4 = \u0275\u0275reference(7);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Get ", ctx_r1.copy().accessTitle, " access in minutes");
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.name);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.phone);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.email);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", gpuLeadForm_r4.invalid || ctx_r1.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting() ? "Submitting\u2026" : "Claim \u20B920,000 free credits", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.error() ? 26 : -1);
  }
}
var GPU_HERO_COPY = {
  "nvidia-l40s": gpu("Rent NVIDIA L40S Cloud GPUs", "Run generative AI, rendering, virtual workstations and video pipelines on one versatile 48 GB GPU.", "48 GB", "GDDR6 ECC VRAM", "Universal", "AI + graphics"),
  "nvidia-l4": gpu("Rent NVIDIA L4 Cloud GPUs for ", "Serve AI, video and visual-computing workloads with a compact, energy-efficient GPU built for production.", "24 GB", "GDDR6 VRAM", "Low power", "Efficient inference"),
  "nvidia-a30": gpu("Rent NVIDIA A30 Cloud GPUs ", "Accelerate training, inference and high-performance computing with flexible GPU partitioning.", "24 GB", "HBM2 VRAM", "MIG ready", "Shared securely"),
  "nvidia-a2": gpu("Rent NVIDIA A2 Cloud GPUs ", "Deploy cost-efficient inference, computer vision and analytics without oversized infrastructure.", "16 GB", "GDDR6 VRAM", "Entry level", "Production AI"),
  "nvidia-h200": gpu("Rent NVIDIA H200 Cloud GPUs", "Run bigger LLMs with 141 GB HBM3e. Start in minutes and scale multi-GPU capacity on demand.", "141 GB", "HBM3e VRAM", "On demand", "H200 access"),
  "nvidia-h100": gpu("Rent NVIDIA H100 Cloud GPUs", "Train and serve large models with Hopper Tensor Cores, NVLink and production-ready GPU infrastructure.", "80 GB", "HBM3 VRAM", "NVLink", "Multi-GPU scale"),
  "nvidia-a100": gpu("Rent NVIDIA A100 Cloud GPUs", "Train, fine-tune and serve demanding models with proven Ampere performance and flexible MIG isolation.", "80 GB", "HBM2e VRAM", "MIG ready", "Up to 7 instances"),
  "nvidia-b300-nodes": gpu("Reserve NVIDIA B300 Nodes", "Plan Blackwell Ultra capacity for large-scale reasoning, training and high-throughput inference.", "Blackwell", "Ultra architecture", "Multi-GPU", "Node capacity"),
  "rtx-pro-6000": gpu("Rent RTX PRO 6000 Cloud GPUs", "Use 96 GB of professional GPU memory for generative AI, simulation, rendering and digital twins.", "96 GB", "GDDR7 ECC VRAM", "Pro graphics", "AI + rendering"),
  "nvidia-rtx-6000-ada": gpu("Rent RTX 6000 Ada Cloud GPUs", "Give remote teams professional graphics, ray tracing and AI acceleration without buying workstations.", "48 GB", "GDDR6 ECC VRAM", "Ada", "Pro visualization"),
  "rtx-a6000": gpu("Rent RTX A6000 Cloud GPUs", "Run large scenes, simulations and deep-learning workloads with proven 48 GB Ampere performance.", "48 GB", "GDDR6 ECC VRAM", "NVLink", "Up to 96 GB"),
  "rtx-8000": gpu("Rent RTX 8000 Cloud GPUs", "Move rendering, CAD and visualization workloads to affordable professional GPUs hosted in India.", "48 GB", "GDDR6 ECC VRAM", "NVLink", "Render at scale"),
  "gpu-clusters": gpu("Build NVIDIA GPU Clusters", "Scale distributed training, inference and HPC across high-speed multi-node GPU infrastructure.", "Multi-node", "GPU clusters", "High speed", "Cluster fabric"),
  "nvidia-vera-rubin": gpu("Reserve NVIDIA Vera Rubin Capacity", "Plan next-generation rack-scale AI infrastructure with guided sizing, deployment and operations in India.", "Next gen", "AI infrastructure", "Rack scale", "Early access")
};
var COMPACT_GPU_PAGE_SLUGS = /* @__PURE__ */ new Set([
  "nvidia-l40s",
  "nvidia-l4",
  "nvidia-a30",
  "nvidia-a2",
  "nvidia-h200",
  "nvidia-h100",
  "nvidia-a100",
  "nvidia-b300-nodes",
  "rtx-pro-6000",
  "nvidia-rtx-6000-ada",
  "rtx-a6000",
  "rtx-8000",
  "gpu-clusters",
  "nvidia-vera-rubin"
]);
function gpu(headline, description, metric, metricLabel, scale, scaleLabel) {
  return {
    headline,
    description,
    accessTitle: headline.replace(/^Rent |^Reserve |^Build /, "").replace(/ for .+$/, ""),
    features: [
      [metric, metricLabel],
      ["Up to 60%", "Lower infrastructure cost*"],
      [scale, scaleLabel],
      ["Enterprise", "Security for teams"]
    ]
  };
}
var GpuLeadHeroComponent = class _GpuLeadHeroComponent {
  leads = inject(LeadService);
  slug = input.required(...ngDevMode ? [{ debugName: "slug" }] : []);
  productName = input.required(...ngDevMode ? [{ debugName: "productName" }] : []);
  usesCompactLayout = computed(() => COMPACT_GPU_PAGE_SLUGS.has(this.slug()), ...ngDevMode ? [{ debugName: "usesCompactLayout" }] : []);
  copy = computed(() => GPU_HERO_COPY[this.slug()] ?? gpu(`Rent ${this.productName()} Cloud GPUs on Demand`, "Launch secure GPU capacity in India with guided sizing, INR billing and 24\xD77 engineering support.", "On demand", "GPU capacity", "Scale fast", "From PoC to production"), ...ngDevMode ? [{ debugName: "copy" }] : []);
  name = "";
  phone = "";
  email = "";
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : []);
  submitted = signal(false, ...ngDevMode ? [{ debugName: "submitted" }] : []);
  error = signal("", ...ngDevMode ? [{ debugName: "error" }] : []);
  async submit() {
    if (this.submitting())
      return;
    this.submitting.set(true);
    this.error.set("");
    const product = this.productName();
    const result = await this.leads.submit("callback", {
      name: this.name.trim(),
      phone: this.phone.trim(),
      email: this.email.trim(),
      product,
      request: "GPU access with \u20B920,000 free credits"
    });
    this.submitting.set(false);
    if (result.skipped) {
      const message = `Hi, I want access to ${product} with \u20B920,000 free credits.
Name: ${this.name.trim()}
Phone: ${this.phone.trim()}
Work email: ${this.email.trim()}`;
      globalThis.location.assign(this.leads.whatsappLink(message));
      return;
    }
    if (!result.ok) {
      this.error.set("We could not submit your request. Please try again.");
      return;
    }
    this.submitted.set(true);
  }
  static \u0275fac = function GpuLeadHeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GpuLeadHeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GpuLeadHeroComponent, selectors: [["xh-gpu-lead-hero"]], inputs: { slug: [1, "slug"], productName: [1, "productName"] }, decls: 12, vars: 9, consts: [["gpuLeadForm", "ngForm"], [1, "gpu-lead-hero"], [1, "gpu-lead-shell"], [1, "gpu-lead-copy"], ["aria-label", "Five-star customer rating", 1, "gpu-social-proof"], [3, "id"], [1, "gpu-lead-features"], [1, "gpu-lead-card"], ["role", "status", 1, "gpu-lead-success"], ["aria-hidden", "true", 1, "gpu-avatars"], [1, "gpu-credit-pill"], [1, "gpu-form-intro"], [3, "ngSubmit"], ["viewBox", "0 0 24 24", "aria-hidden", "true"], ["cx", "12", "cy", "8", "r", "4"], ["d", "M4 21a8 8 0 0 1 16 0"], ["type", "text", "name", "name", "autocomplete", "name", "placeholder", "Name*", "aria-label", "Name", "required", "", 3, "ngModelChange", "ngModel"], [1, "gpu-phone-field"], ["aria-hidden", "true"], ["type", "tel", "name", "phone", "autocomplete", "tel", "inputmode", "tel", "placeholder", "Phone Number*", "aria-label", "Phone number", "minlength", "8", "required", "", 3, "ngModelChange", "ngModel"], ["x", "3", "y", "5", "width", "18", "height", "14", "rx", "3"], ["d", "m5 8 7 5 7-5"], ["type", "email", "name", "email", "autocomplete", "email", "placeholder", "Work Email*", "aria-label", "Work email", "required", "", "email", "", 3, "ngModelChange", "ngModel"], ["type", "submit", 3, "disabled"], ["role", "alert", 1, "gpu-form-error"], [1, "gpu-privacy"], ["href", "/company/privacy-policy"]], template: function GpuLeadHeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 1)(1, "div", 2)(2, "div", 3);
      \u0275\u0275conditionalCreate(3, GpuLeadHeroComponent_Conditional_3_Template, 15, 0, "div", 4);
      \u0275\u0275elementStart(4, "h1", 5);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(8, GpuLeadHeroComponent_Conditional_8_Template, 3, 0, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "div", 7);
      \u0275\u0275conditionalCreate(10, GpuLeadHeroComponent_Conditional_10_Template, 7, 0, "div", 8)(11, GpuLeadHeroComponent_Conditional_11_Template, 32, 7);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("gpu-lead-hero-inline", ctx.usesCompactLayout());
      \u0275\u0275attribute("aria-labelledby", "gpuLeadTitle-" + ctx.slug());
      \u0275\u0275advance(3);
      \u0275\u0275conditional(!ctx.usesCompactLayout() ? 3 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("id", "gpuLeadTitle-" + ctx.slug());
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.copy().headline);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.copy().description);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.usesCompactLayout() ? 8 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.submitted() ? 10 : 11);
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, EmailValidator, NgModel, NgForm], styles: ['\n\n[_nghost-%COMP%] {\n  display: block;\n  width: 100vw;\n  max-width: none;\n  margin-left: calc(50% - 50vw);\n}\n.gpu-lead-hero[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n  margin: 32px 0 48px;\n  padding: 36px 0;\n  background:\n    radial-gradient(\n      circle at 78% 16%,\n      rgba(47, 128, 237, 0.34),\n      transparent 34%),\n    radial-gradient(\n      circle at 18% 105%,\n      rgba(255, 140, 26, 0.12),\n      transparent 32%),\n    linear-gradient(\n      112deg,\n      #041e42 0%,\n      #0b376f 52%,\n      #10264a 100%);\n  color: #fff;\n  font-family: var(--body, "IBM Plex Sans", sans-serif);\n  box-shadow: 0 18px 46px rgba(24, 48, 106, 0.16);\n}\n.gpu-lead-hero[_ngcontent-%COMP%]:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 75% 20%,\n      rgba(255, 255, 255, 0.1),\n      transparent 32%),\n    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.035) 1px,\n      transparent 1px);\n  background-size:\n    auto,\n    46px 46px,\n    46px 46px;\n  pointer-events: none;\n}\n.gpu-lead-shell[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.18fr) minmax(390px, 0.82fr);\n  align-items: center;\n  gap: 72px;\n  width: min(1290px, calc(100% - 48px));\n  margin: 0 auto;\n}\n.gpu-lead-copy[_ngcontent-%COMP%] {\n  max-width: 720px;\n}\n.gpu-social-proof[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.gpu-avatars[_ngcontent-%COMP%] {\n  display: flex;\n  padding-left: 8px;\n}\n.gpu-avatars[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  margin-left: -8px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      145deg,\n      #63789d,\n      #17233d);\n  font: 700 9px/1 var(--body);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n}\n.gpu-social-proof[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n}\n.gpu-social-proof[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  color: #ffc332;\n  font: 800 20px/1 var(--body);\n  letter-spacing: 2px;\n}\n.gpu-social-proof[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n}\n.gpu-lead-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0;\n  color: #fff;\n  font: 750 clamp(38px, 4.2vw, 62px)/1.08 var(--disp, "Sora", sans-serif);\n  letter-spacing: -0.035em;\n  text-wrap: balance;\n}\n.gpu-lead-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 650px;\n  margin: 26px 0 34px;\n  color: #f2f6ff;\n  font-size: 18px;\n  line-height: 1.45;\n}\n.gpu-lead-features[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.gpu-lead-features[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  min-height: 76px;\n  padding: 15px 22px;\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  border-radius: 12px;\n  background: rgba(95, 125, 204, 0.34);\n  box-shadow: inset 0 1px rgba(255, 255, 255, 0.04);\n}\n.gpu-feature-icon[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  color: #c9c9eb;\n  flex: 0 0 40px;\n}\n.gpu-feature-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.gpu-lead-features[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%]:last-child {\n  display: grid;\n}\n.gpu-lead-features[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 16px;\n  line-height: 1.2;\n}\n.gpu-lead-features[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  margin-top: 3px;\n  color: #fff;\n  font-size: 15px;\n  line-height: 1.2;\n}\n.gpu-lead-card[_ngcontent-%COMP%] {\n  min-height: 500px;\n  padding: 15px 70px 25px;\n  border-radius: 7px;\n  background: #fff;\n  color: #101327;\n  box-shadow: 0 26px 70px rgba(2, 15, 48, 0.25);\n  text-align: center;\n}\n.gpu-credit-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  padding: 7px 18px;\n  border-radius: 999px;\n  background: #008b45;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 1;\n}\n.gpu-lead-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 18px 0 5px;\n  color: #111426;\n  font: 700 21px/1.25 var(--disp, "Sora", sans-serif);\n}\n.gpu-form-intro[_ngcontent-%COMP%] {\n  margin: 0 0 24px;\n  color: #111426;\n  font-size: 13px;\n}\n.gpu-lead-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 18px;\n}\n.gpu-lead-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  height: 52px;\n  padding: 0 22px;\n  border: 1px solid #c8cbe3;\n  border-radius: 20px;\n  background: #f9f9fc;\n  transition: 0.2s;\n}\n.gpu-lead-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:focus-within {\n  border-color: #365ac7;\n  box-shadow: 0 0 0 3px rgba(54, 90, 199, 0.1);\n}\n.gpu-lead-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 21px;\n  height: 21px;\n  fill: none;\n  stroke: #5f6197;\n  stroke-width: 1.6;\n  flex: none;\n}\n.gpu-lead-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #16182d;\n  font: 16px/1.2 var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #424359;\n  opacity: 1;\n}\n.gpu-phone-field[_ngcontent-%COMP%] {\n  gap: 8px !important;\n}\n.gpu-phone-field[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  font-size: 19px;\n}\n.gpu-phone-field[_ngcontent-%COMP%]    > b[_ngcontent-%COMP%] {\n  padding-right: 8px;\n  border-right: 1px solid #fefeff;\n  font-size: 14px;\n  font-weight: 500;\n}\n.gpu-lead-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-height: 49px;\n  margin-top: 5px;\n  border: 0;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff8c1a,\n      #e96f00);\n  color: #fff;\n  font: 700 15px/1 var(--body);\n  cursor: pointer;\n  transition: 0.2s;\n}\n.gpu-lead-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 9px 24px rgba(233, 111, 0, 0.32);\n}\n.gpu-lead-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  cursor: not-allowed;\n  opacity: 0.58;\n}\n.gpu-privacy[_ngcontent-%COMP%] {\n  margin: 24px -12px 0;\n  padding-top: 17px;\n  border-top: 1px solid #d8d8de;\n  color: #131522;\n  font-size: 11px;\n  line-height: 1.45;\n}\n.gpu-privacy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #1151c8;\n  text-decoration: underline;\n}\n.gpu-form-error[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #b42318;\n  font-size: 12px;\n}\n.gpu-lead-success[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  align-content: center;\n  min-height: 430px;\n}\n.gpu-lead-success[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  display: grid;\n  place-items: center;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #e8f8ef;\n  color: #008b45;\n  font-size: 34px;\n}\n.gpu-lead-success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n}\n.gpu-lead-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  max-width: 320px;\n  color: #4e5670;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%] {\n  padding: 26px 0 28px;\n  font-family: var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-shell[_ngcontent-%COMP%] {\n  display: block;\n  width: min(1240px, calc(100% - 48px));\n  text-align: center;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-copy[_ngcontent-%COMP%] {\n  max-width: none;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-social-proof[_ngcontent-%COMP%] {\n  justify-content: center;\n  margin-bottom: 22px;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  max-width: none;\n  font: 700 clamp(30px, 3vw, 36px)/1.15 var(--disp, "Sora", sans-serif);\n  letter-spacing: -0.02em;\n  text-align: center;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  max-width: 920px;\n  margin: 18px auto 24px;\n  font: 400 16px/1.55 var(--body, "IBM Plex Sans", sans-serif);\n  text-align: center;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%] {\n  min-height: 0;\n  padding: 0;\n  background: transparent;\n  color: #fff;\n  box-shadow: none;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-credit-pill[_ngcontent-%COMP%] {\n  margin-bottom: 11px;\n  font-family: var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  color: #fff;\n  font: 700 15px/1.35 var(--disp, "Sora", sans-serif);\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-form-intro[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  color: #f2f6ff;\n  font: 400 13px/1.45 var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  grid-template-columns: minmax(180px, 1fr) minmax(210px, 1fr) minmax(210px, 1fr) minmax(235px, 0.9fr);\n  gap: 12px;\n  align-items: start;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  height: 44px;\n  padding: 0 16px;\n  border-color: rgba(255, 255, 255, 0.72);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.96);\n  text-align: left;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  font: 400 14px/1.2 var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 44px;\n  min-height: 44px;\n  margin: 0;\n  padding: 0 18px;\n  font: 700 13px/1 var(--body, "IBM Plex Sans", sans-serif);\n  white-space: nowrap;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-form-error[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  color: #fff;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-privacy[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 11px auto 0;\n  padding-top: 0;\n  border: 0;\n  color: rgba(255, 255, 255, 0.82);\n  font: 400 10px/1.45 var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-privacy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-success[_ngcontent-%COMP%] {\n  min-height: 180px;\n  color: #fff;\n}\n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-success[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n@media (max-width: 1080px) {\n  .gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 1000px) {\n  .gpu-lead-hero[_ngcontent-%COMP%] {\n    padding: 32px 0;\n  }\n  .gpu-lead-shell[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 38px;\n  }\n  .gpu-lead-copy[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .gpu-lead-card[_ngcontent-%COMP%] {\n    width: min(620px, 100%);\n    margin: 0 auto;\n  }\n  .gpu-lead-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], \n   .gpu-lead-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    max-width: 800px;\n  }\n  .gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 620px) {\n  .gpu-lead-hero[_ngcontent-%COMP%] {\n    padding: 42px 0;\n  }\n  .gpu-lead-shell[_ngcontent-%COMP%] {\n    width: calc(100% - 32px);\n  }\n  .gpu-lead-copy[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: clamp(34px, 10.5vw, 48px);\n  }\n  .gpu-lead-copy[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    margin: 20px 0 26px;\n    font-size: 16px;\n  }\n  .gpu-lead-features[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .gpu-lead-features[_ngcontent-%COMP%]   article[_ngcontent-%COMP%] {\n    min-height: 66px;\n    padding: 12px 16px;\n  }\n  .gpu-lead-card[_ngcontent-%COMP%] {\n    min-height: 0;\n    padding: 24px 18px;\n  }\n  .gpu-credit-pill[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .gpu-lead-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n  .gpu-social-proof[_ngcontent-%COMP%] {\n    margin-bottom: 20px;\n  }\n  .gpu-lead-hero-inline[_ngcontent-%COMP%] {\n    padding: 28px 0;\n  }\n  .gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 0;\n  }\n  .gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    grid-column: auto;\n  }\n  .gpu-lead-hero-inline[_ngcontent-%COMP%]   .gpu-lead-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .gpu-lead-card[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=gpu-lead-hero.component.css.map */'], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GpuLeadHeroComponent, [{
    type: Component,
    args: [{ selector: "xh-gpu-lead-hero", standalone: true, imports: [FormsModule], changeDetection: ChangeDetectionStrategy.OnPush, template: `<section\r
  class="gpu-lead-hero"\r
  [class.gpu-lead-hero-inline]="usesCompactLayout()"\r
  [attr.aria-labelledby]="'gpuLeadTitle-' + slug()"\r
>\r
  <div class="gpu-lead-shell">\r
    <div class="gpu-lead-copy">\r
      @if (!usesCompactLayout()) {\r
        <div class="gpu-social-proof" aria-label="Five-star customer rating">\r
          <span class="gpu-avatars" aria-hidden="true"><i>RK</i><i>AM</i><i>VS</i><i>NP</i></span>\r
          <span><b>\u2605\u2605\u2605\u2605\u2605</b><small>Trusted by 10,000+ businesses</small></span>\r
        </div>\r
      }\r
      <h1 [id]="'gpuLeadTitle-' + slug()">{{ copy().headline }}</h1>\r
      <p>{{ copy().description }}</p>\r
\r
      @if (!usesCompactLayout()) {\r
      <div class="gpu-lead-features">\r
        @for (feature of copy().features; track feature[0] + feature[1]; let index = $index) {\r
          <article>\r
            <!-- <span class="gpu-feature-icon" [attr.data-icon]="index" aria-hidden="true">\r
              @switch (index) {\r
                @case (0) { <svg viewBox="0 0 24 24"><path d="M5 4h14v16H5zM8 7h8M8 17h8M9 20v2m6-2v2" /></svg> }\r
                @case (1) { <svg viewBox="0 0 24 24"><path d="M6 5h12M6 9h12M9 5c6 0 6 8 0 8H6l9 7" /></svg> }\r
                @case (2) { <svg viewBox="0 0 24 24"><path d="M6 18a4 4 0 0 1 0-8 6 6 0 0 1 11.5-1.7A4.5 4.5 0 1 1 18 18z" /></svg> }\r
                @default { <svg viewBox="0 0 24 24"><path d="m12 3 8 3v6c0 5-3.2 8.2-8 9-4.8-.8-8-4-8-9V6zM9 12l2 2 4-4" /></svg> }\r
              }\r
            </span> -->\r
            <span><strong>{{ feature[0] }}</strong><small>{{ feature[1] }}</small></span>\r
          </article>\r
        }\r
      </div>\r
      }\r
    </div>\r
\r
    <div class="gpu-lead-card">\r
      @if (submitted()) {\r
        <div class="gpu-lead-success" role="status">\r
          <span>\u2713</span>\r
          <h2>Request received</h2>\r
          <p>Your GPU specialist will contact you with access and sizing steps.</p>\r
        </div>\r
      } @else {\r
        <span class="gpu-credit-pill">Start with \u20B920,000 free credits</span>\r
        <h2>Get {{ copy().accessTitle }} access in minutes</h2>\r
        <p class="gpu-form-intro">Share your details and we\u2019ll send the access steps by email.</p>\r
        <form (ngSubmit)="submit()" #gpuLeadForm="ngForm">\r
          <label>\r
            <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>\r
            <input type="text" name="name" [(ngModel)]="name" autocomplete="name" placeholder="Name*" aria-label="Name" required />\r
          </label>\r
          <label class="gpu-phone-field">\r
            <span aria-hidden="true">\u{1F1EE}\u{1F1F3}</span><b>+91</b>\r
            <input type="tel" name="phone" [(ngModel)]="phone" autocomplete="tel" inputmode="tel" placeholder="Phone Number*" aria-label="Phone number" minlength="8" required />\r
          </label>\r
          <label>\r
            <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m5 8 7 5 7-5"/></svg>\r
            <input type="email" name="email" [(ngModel)]="email" autocomplete="email" placeholder="Work Email*" aria-label="Work email" required email />\r
          </label>\r
          <button type="submit" [disabled]="gpuLeadForm.invalid || submitting()">\r
            {{ submitting() ? 'Submitting\u2026' : 'Claim \u20B920,000 free credits' }}\r
          </button>\r
          @if (error()) { <p class="gpu-form-error" role="alert">{{ error() }}</p> }\r
        </form>\r
        <p class="gpu-privacy">We value your privacy and never share your information with third parties. See our <a href="/company/privacy-policy">Privacy Policy</a>.</p>\r
      }\r
    </div>\r
  </div>\r
</section>\r
`, styles: ['/* src/app/sections/gpu-lead-hero.component.css */\n:host {\n  display: block;\n  width: 100vw;\n  max-width: none;\n  margin-left: calc(50% - 50vw);\n}\n.gpu-lead-hero {\n  position: relative;\n  overflow: hidden;\n  box-sizing: border-box;\n  margin: 32px 0 48px;\n  padding: 36px 0;\n  background:\n    radial-gradient(\n      circle at 78% 16%,\n      rgba(47, 128, 237, 0.34),\n      transparent 34%),\n    radial-gradient(\n      circle at 18% 105%,\n      rgba(255, 140, 26, 0.12),\n      transparent 32%),\n    linear-gradient(\n      112deg,\n      #041e42 0%,\n      #0b376f 52%,\n      #10264a 100%);\n  color: #fff;\n  font-family: var(--body, "IBM Plex Sans", sans-serif);\n  box-shadow: 0 18px 46px rgba(24, 48, 106, 0.16);\n}\n.gpu-lead-hero:before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 75% 20%,\n      rgba(255, 255, 255, 0.1),\n      transparent 32%),\n    linear-gradient(rgba(255, 255, 255, 0.035) 1px, transparent 1px),\n    linear-gradient(\n      90deg,\n      rgba(255, 255, 255, 0.035) 1px,\n      transparent 1px);\n  background-size:\n    auto,\n    46px 46px,\n    46px 46px;\n  pointer-events: none;\n}\n.gpu-lead-shell {\n  position: relative;\n  z-index: 1;\n  display: grid;\n  grid-template-columns: minmax(0, 1.18fr) minmax(390px, 0.82fr);\n  align-items: center;\n  gap: 72px;\n  width: min(1290px, calc(100% - 48px));\n  margin: 0 auto;\n}\n.gpu-lead-copy {\n  max-width: 720px;\n}\n.gpu-social-proof {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.gpu-avatars {\n  display: flex;\n  padding-left: 8px;\n}\n.gpu-avatars i {\n  display: grid;\n  place-items: center;\n  width: 34px;\n  height: 34px;\n  margin-left: -8px;\n  border: 2px solid #fff;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      145deg,\n      #63789d,\n      #17233d);\n  font: 700 9px/1 var(--body);\n  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);\n}\n.gpu-social-proof > span:last-child {\n  display: grid;\n}\n.gpu-social-proof b {\n  color: #ffc332;\n  font: 800 20px/1 var(--body);\n  letter-spacing: 2px;\n}\n.gpu-social-proof small {\n  margin-top: 4px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n}\n.gpu-lead-copy h1 {\n  max-width: 760px;\n  margin: 0;\n  color: #fff;\n  font: 750 clamp(38px, 4.2vw, 62px)/1.08 var(--disp, "Sora", sans-serif);\n  letter-spacing: -0.035em;\n  text-wrap: balance;\n}\n.gpu-lead-copy > p {\n  max-width: 650px;\n  margin: 26px 0 34px;\n  color: #f2f6ff;\n  font-size: 18px;\n  line-height: 1.45;\n}\n.gpu-lead-features {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 16px;\n}\n.gpu-lead-features article {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  min-height: 76px;\n  padding: 15px 22px;\n  border: 1px solid rgba(255, 255, 255, 0.04);\n  border-radius: 12px;\n  background: rgba(95, 125, 204, 0.34);\n  box-shadow: inset 0 1px rgba(255, 255, 255, 0.04);\n}\n.gpu-feature-icon {\n  display: grid;\n  place-items: center;\n  width: 40px;\n  height: 40px;\n  color: #c9c9eb;\n  flex: 0 0 40px;\n}\n.gpu-feature-icon svg {\n  width: 30px;\n  height: 30px;\n  fill: none;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.gpu-lead-features article > span:last-child {\n  display: grid;\n}\n.gpu-lead-features strong {\n  color: #fff;\n  font-size: 16px;\n  line-height: 1.2;\n}\n.gpu-lead-features small {\n  margin-top: 3px;\n  color: #fff;\n  font-size: 15px;\n  line-height: 1.2;\n}\n.gpu-lead-card {\n  min-height: 500px;\n  padding: 15px 70px 25px;\n  border-radius: 7px;\n  background: #fff;\n  color: #101327;\n  box-shadow: 0 26px 70px rgba(2, 15, 48, 0.25);\n  text-align: center;\n}\n.gpu-credit-pill {\n  display: inline-flex;\n  padding: 7px 18px;\n  border-radius: 999px;\n  background: #008b45;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 800;\n  line-height: 1;\n}\n.gpu-lead-card h2 {\n  margin: 18px 0 5px;\n  color: #111426;\n  font: 700 21px/1.25 var(--disp, "Sora", sans-serif);\n}\n.gpu-form-intro {\n  margin: 0 0 24px;\n  color: #111426;\n  font-size: 13px;\n}\n.gpu-lead-card form {\n  display: grid;\n  gap: 18px;\n}\n.gpu-lead-card label {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  height: 52px;\n  padding: 0 22px;\n  border: 1px solid #c8cbe3;\n  border-radius: 20px;\n  background: #f9f9fc;\n  transition: 0.2s;\n}\n.gpu-lead-card label:focus-within {\n  border-color: #365ac7;\n  box-shadow: 0 0 0 3px rgba(54, 90, 199, 0.1);\n}\n.gpu-lead-card label svg {\n  width: 21px;\n  height: 21px;\n  fill: none;\n  stroke: #5f6197;\n  stroke-width: 1.6;\n  flex: none;\n}\n.gpu-lead-card input {\n  width: 100%;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  color: #16182d;\n  font: 16px/1.2 var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-card input::placeholder {\n  color: #424359;\n  opacity: 1;\n}\n.gpu-phone-field {\n  gap: 8px !important;\n}\n.gpu-phone-field > span {\n  font-size: 19px;\n}\n.gpu-phone-field > b {\n  padding-right: 8px;\n  border-right: 1px solid #fefeff;\n  font-size: 14px;\n  font-weight: 500;\n}\n.gpu-lead-card button {\n  min-height: 49px;\n  margin-top: 5px;\n  border: 0;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      #ff8c1a,\n      #e96f00);\n  color: #fff;\n  font: 700 15px/1 var(--body);\n  cursor: pointer;\n  transition: 0.2s;\n}\n.gpu-lead-card button:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 9px 24px rgba(233, 111, 0, 0.32);\n}\n.gpu-lead-card button:disabled {\n  cursor: not-allowed;\n  opacity: 0.58;\n}\n.gpu-privacy {\n  margin: 24px -12px 0;\n  padding-top: 17px;\n  border-top: 1px solid #d8d8de;\n  color: #131522;\n  font-size: 11px;\n  line-height: 1.45;\n}\n.gpu-privacy a {\n  color: #1151c8;\n  text-decoration: underline;\n}\n.gpu-form-error {\n  margin: 0;\n  color: #b42318;\n  font-size: 12px;\n}\n.gpu-lead-success {\n  display: grid;\n  place-items: center;\n  align-content: center;\n  min-height: 430px;\n}\n.gpu-lead-success > span {\n  display: grid;\n  place-items: center;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  background: #e8f8ef;\n  color: #008b45;\n  font-size: 34px;\n}\n.gpu-lead-success h2 {\n  font-size: 28px;\n}\n.gpu-lead-success p {\n  max-width: 320px;\n  color: #4e5670;\n}\n.gpu-lead-hero-inline {\n  padding: 26px 0 28px;\n  font-family: var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-hero-inline .gpu-lead-shell {\n  display: block;\n  width: min(1240px, calc(100% - 48px));\n  text-align: center;\n}\n.gpu-lead-hero-inline .gpu-lead-copy {\n  max-width: none;\n}\n.gpu-lead-hero-inline .gpu-social-proof {\n  justify-content: center;\n  margin-bottom: 22px;\n}\n.gpu-lead-hero-inline .gpu-lead-copy h1 {\n  max-width: none;\n  font: 700 clamp(30px, 3vw, 36px)/1.15 var(--disp, "Sora", sans-serif);\n  letter-spacing: -0.02em;\n  text-align: center;\n}\n.gpu-lead-hero-inline .gpu-lead-copy > p {\n  max-width: 920px;\n  margin: 18px auto 24px;\n  font: 400 16px/1.55 var(--body, "IBM Plex Sans", sans-serif);\n  text-align: center;\n}\n.gpu-lead-hero-inline .gpu-lead-card {\n  min-height: 0;\n  padding: 0;\n  background: transparent;\n  color: #fff;\n  box-shadow: none;\n}\n.gpu-lead-hero-inline .gpu-credit-pill {\n  margin-bottom: 11px;\n  font-family: var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-hero-inline .gpu-lead-card h2 {\n  margin: 0 0 4px;\n  color: #fff;\n  font: 700 15px/1.35 var(--disp, "Sora", sans-serif);\n}\n.gpu-lead-hero-inline .gpu-form-intro {\n  margin-bottom: 15px;\n  color: #f2f6ff;\n  font: 400 13px/1.45 var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-hero-inline .gpu-lead-card form {\n  grid-template-columns: minmax(180px, 1fr) minmax(210px, 1fr) minmax(210px, 1fr) minmax(235px, 0.9fr);\n  gap: 12px;\n  align-items: start;\n}\n.gpu-lead-hero-inline .gpu-lead-card label {\n  height: 44px;\n  padding: 0 16px;\n  border-color: rgba(255, 255, 255, 0.72);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.96);\n  text-align: left;\n}\n.gpu-lead-hero-inline .gpu-lead-card label svg {\n  width: 18px;\n  height: 18px;\n}\n.gpu-lead-hero-inline .gpu-lead-card input {\n  font: 400 14px/1.2 var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-hero-inline .gpu-lead-card button {\n  height: 44px;\n  min-height: 44px;\n  margin: 0;\n  padding: 0 18px;\n  font: 700 13px/1 var(--body, "IBM Plex Sans", sans-serif);\n  white-space: nowrap;\n}\n.gpu-lead-hero-inline .gpu-form-error {\n  grid-column: 1/-1;\n  color: #fff;\n}\n.gpu-lead-hero-inline .gpu-privacy {\n  max-width: 680px;\n  margin: 11px auto 0;\n  padding-top: 0;\n  border: 0;\n  color: rgba(255, 255, 255, 0.82);\n  font: 400 10px/1.45 var(--body, "IBM Plex Sans", sans-serif);\n}\n.gpu-lead-hero-inline .gpu-privacy a {\n  color: #fff;\n}\n.gpu-lead-hero-inline .gpu-lead-success {\n  min-height: 180px;\n  color: #fff;\n}\n.gpu-lead-hero-inline .gpu-lead-success h2,\n.gpu-lead-hero-inline .gpu-lead-success p {\n  color: #fff;\n}\n@media (max-width: 1080px) {\n  .gpu-lead-hero-inline .gpu-lead-card form {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .gpu-lead-hero-inline .gpu-lead-card button {\n    grid-column: 1/-1;\n  }\n}\n@media (max-width: 1000px) {\n  .gpu-lead-hero {\n    padding: 32px 0;\n  }\n  .gpu-lead-shell {\n    grid-template-columns: 1fr;\n    gap: 38px;\n  }\n  .gpu-lead-copy {\n    max-width: none;\n  }\n  .gpu-lead-card {\n    width: min(620px, 100%);\n    margin: 0 auto;\n  }\n  .gpu-lead-copy h1,\n  .gpu-lead-copy > p {\n    max-width: 800px;\n  }\n  .gpu-lead-hero-inline .gpu-lead-card {\n    width: 100%;\n  }\n}\n@media (max-width: 620px) {\n  .gpu-lead-hero {\n    padding: 42px 0;\n  }\n  .gpu-lead-shell {\n    width: calc(100% - 32px);\n  }\n  .gpu-lead-copy h1 {\n    font-size: clamp(34px, 10.5vw, 48px);\n  }\n  .gpu-lead-copy > p {\n    margin: 20px 0 26px;\n    font-size: 16px;\n  }\n  .gpu-lead-features {\n    grid-template-columns: 1fr;\n    gap: 10px;\n  }\n  .gpu-lead-features article {\n    min-height: 66px;\n    padding: 12px 16px;\n  }\n  .gpu-lead-card {\n    min-height: 0;\n    padding: 24px 18px;\n  }\n  .gpu-credit-pill {\n    font-size: 13px;\n  }\n  .gpu-lead-card h2 {\n    font-size: 19px;\n  }\n  .gpu-social-proof {\n    margin-bottom: 20px;\n  }\n  .gpu-lead-hero-inline {\n    padding: 28px 0;\n  }\n  .gpu-lead-hero-inline .gpu-lead-card {\n    width: 100%;\n    padding: 0;\n  }\n  .gpu-lead-hero-inline .gpu-lead-card form {\n    grid-template-columns: 1fr;\n  }\n  .gpu-lead-hero-inline .gpu-lead-card button {\n    grid-column: auto;\n  }\n  .gpu-lead-hero-inline .gpu-lead-card h2 {\n    font-size: 18px;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .gpu-lead-card button {\n    transition: none;\n  }\n}\n/*# sourceMappingURL=gpu-lead-hero.component.css.map */\n'] }]
  }], null, { slug: [{ type: Input, args: [{ isSignal: true, alias: "slug", required: true }] }], productName: [{ type: Input, args: [{ isSignal: true, alias: "productName", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GpuLeadHeroComponent, { className: "GpuLeadHeroComponent", filePath: "src/app/sections/gpu-lead-hero.component.ts", lineNumber: 69 });
})();

export {
  GpuLeadHeroComponent
};
//# sourceMappingURL=chunk-KKNAOUDV.js.map
