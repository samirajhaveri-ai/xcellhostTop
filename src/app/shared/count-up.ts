/**
 * The count-up ramp shared by the hero `.stat-line` figures and the
 * `.why .k` figures. Both used the same easing in the original
 * (`1 - (1 - p)³`); only the delays, durations and formatting differed.
 */

/** One figure driven by {@link runCountUp}. */
export interface CountUpFigure {
  /** the number counted up to */
  readonly value: number;
  /** decimal places to keep (0 → grouped integer) */
  readonly dec: number;
  /** text appended to every frame, e.g. `'%'` or `'+'` */
  readonly suffix: string;
  /** ms to wait before this figure starts moving */
  readonly delay?: number;
  /** ms the ramp takes */
  readonly duration?: number;
  /** exact text to settle on — the original restored the untouched label */
  readonly final?: string;
}

/** The `.why .k` figures ran for 1100 ms in the original. */
const DEFAULT_DURATION_MS = 1100;

/** `10000 → "10,000"`, `99.95 → "99.95"` — the original `fmt()`. */
export function formatCount(value: number, dec: number): string {
  return dec ? value.toFixed(dec) : Math.round(value).toLocaleString('en-IN');
}

/** The text a figure settles on once the ramp finishes. */
export function finalCount(figure: CountUpFigure): string {
  return figure.final ?? formatCount(figure.value, figure.dec) + figure.suffix;
}

/**
 * `"99.9%" → {value: 99.9, dec: 1, suffix: "%"}` — the original
 * `/^([\d.,]+)(.*)$/` split used for the `.why .k` figures. Returns `null`
 * when the label does not start with a number (nothing to animate).
 */
export function parseCount(
  text: string,
  extra?: Omit<CountUpFigure, 'value' | 'dec' | 'suffix'>
): CountUpFigure | null {
  const m = /^([\d.,]+)(.*)$/.exec(text);
  if (!m) return null;
  const value = Number.parseFloat(m[1].replace(/,/g, ''));
  if (!Number.isFinite(value)) return null;
  // the original chose `toFixed(1)` for any non-integer target
  return { value, dec: value % 1 !== 0 ? 1 : 0, suffix: m[2], final: text, ...extra };
}

/**
 * Ramps every figure from zero with a single rAF loop and pushes the formatted
 * strings to `emit` on each frame. Returns the cancel function — always call it
 * from `ngOnDestroy` / `DestroyRef.onDestroy`.
 */
export function runCountUp(
  figures: readonly CountUpFigure[],
  emit: (values: readonly string[]) => void
): () => void {
  if (!figures.length) return () => {};

  let raf = 0;
  const t0 = performance.now();

  const step = (t: number): void => {
    let running = false;
    const out = figures.map((f) => {
      const span = f.duration ?? DEFAULT_DURATION_MS;
      const p = Math.min(Math.max((t - t0 - (f.delay ?? 0)) / span, 0), 1);
      if (p >= 1) return finalCount(f);
      running = true;
      return formatCount(f.value * (1 - Math.pow(1 - p, 3)), f.dec) + f.suffix;
    });
    emit(out);
    raf = running ? requestAnimationFrame(step) : 0;
  };

  raf = requestAnimationFrame(step);

  return () => {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
  };
}
