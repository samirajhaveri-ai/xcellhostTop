import { DOCUMENT } from '@angular/common';
import { Injectable, DestroyRef, afterNextRender, inject } from '@angular/core';

const PRESERVE = 'script, style, noscript, template, code, pre, [contenteditable]:not([contenteditable="false"]), [data-preserve-copy]';
const COPY_ATTRIBUTES = ['alt', 'title', 'placeholder', 'aria-label'];

/** Presentation only: catalogue keys, routes, form values and API data stay intact. */
export function formatSiteCopy(value: string): string {
  return value.replace(/(^|[\s([{"“‘>])and(?=$|[\s)\]},.!?:;"”’<])/gi, '$1&');
}

/** Apply the site's copy style to routed content, live CMS text and local frames. */
@Injectable({ providedIn: 'root' })
export class SiteCopyService {
  private readonly document = inject(DOCUMENT);
  private readonly destroyRef = inject(DestroyRef);
  private readonly documents = new Map<Document, { observer: MutationObserver; onLoad: EventListener }>();
  private readonly frames = new Map<HTMLIFrameElement, Document>();
  private readonly pending = new Set<Node>();
  private scheduled = false;
  private destroyed = false;

  constructor() {
    // Wait for hydration before changing server-rendered text.
    afterNextRender(() => this.watchDocument(this.document));
    this.destroyRef.onDestroy(() => {
      this.destroyed = true;
      for (const document of this.documents.keys()) this.unwatchDocument(document);
      this.frames.clear();
      this.pending.clear();
    });
  }

  private watchDocument(document: Document): void {
    const window = document.defaultView;
    if (!window || this.documents.has(document) || !document.documentElement) return;
    const observer = new window.MutationObserver((records) => {
      for (const record of records) {
        if (record.type === 'childList') {
          for (const node of Array.from(record.addedNodes)) this.pending.add(node);
        } else {
          this.pending.add(record.target);
        }
      }
      this.schedule();
    });
    const onLoad: EventListener = (event) => {
      const target = event.target as Element | null;
      if (target?.nodeType === 1 && target.tagName === 'IFRAME') this.watchFrame(target as HTMLIFrameElement);
    };
    this.documents.set(document, { observer, onLoad });
    document.addEventListener('load', onLoad, true);
    this.formatTree(document.documentElement);
    observer.observe(document.documentElement, {
      childList: true, subtree: true, characterData: true,
      attributes: true, attributeFilter: COPY_ATTRIBUTES,
    });
  }

  private unwatchDocument(document: Document): void {
    const entry = this.documents.get(document);
    entry?.observer.disconnect();
    if (entry) document.removeEventListener('load', entry.onLoad, true);
    this.documents.delete(document);
  }

  private watchFrame(frame: HTMLIFrameElement): void {
    try {
      const document = frame.contentDocument;
      const previous = this.frames.get(frame);
      if (previous && previous !== document) this.unwatchDocument(previous);
      if (!document) { this.frames.delete(frame); return; }
      this.frames.set(frame, document);
      this.watchDocument(document);
    } catch {
      // External video and third-party widgets own their content.
    }
  }

  private schedule(): void {
    if (this.scheduled || this.destroyed) return;
    this.scheduled = true;
    queueMicrotask(() => {
      this.scheduled = false;
      if (this.destroyed) return;
      const nodes = [...this.pending];
      this.pending.clear();
      for (const node of nodes) if (node.isConnected) this.formatTree(node);
      for (const [frame, document] of this.frames) {
        if (!frame.isConnected || !this.documents.has(frame.ownerDocument)) {
          this.unwatchDocument(document);
          this.frames.delete(frame);
        }
      }
    });
  }

  private formatTree(root: Node): void {
    const parent = root.nodeType === 1 ? root as Element : root.parentElement;
    if (parent?.closest(PRESERVE) || (root.nodeType === 3 && parent?.closest('textarea'))) return;
    this.formatNode(root);
    if (root.nodeType === 3 || (root.nodeType === 1 && (root as Element).tagName === 'TEXTAREA')) return;
    const walker = root.ownerDocument?.createTreeWalker(root, 5, {
      acceptNode: (node) => {
        if (node.nodeType !== 1) return 1;
        const element = node as Element;
        if (element.matches(PRESERVE)) return 2;
        if (element.tagName === 'TEXTAREA') { this.formatNode(element); return 2; }
        return 1;
      },
    });
    if (!walker) return;
    let node: Node | null;
    while ((node = walker.nextNode())) this.formatNode(node);
  }

  private formatNode(node: Node): void {
    if (node.nodeType === 3) {
      const original = node.nodeValue ?? '';
      const formatted = formatSiteCopy(original);
      if (formatted !== original) node.nodeValue = formatted;
    } else if (node.nodeType === 1) {
      const element = node as Element;
      for (const attribute of COPY_ATTRIBUTES) {
        const original = element.getAttribute(attribute);
        if (original === null) continue;
        const formatted = formatSiteCopy(original);
        if (formatted !== original) element.setAttribute(attribute, formatted);
      }
      if (element.tagName === 'IFRAME') this.watchFrame(element as HTMLIFrameElement);
    }
  }
}
