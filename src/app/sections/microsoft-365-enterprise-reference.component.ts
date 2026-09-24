import { AfterViewInit, Component, ElementRef, OnDestroy, ViewEncapsulation, inject } from '@angular/core';

@Component({
  selector: 'xh-microsoft-365-enterprise-reference',
  standalone: true,
  templateUrl: './microsoft-365-enterprise-reference.component.html',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class Microsoft365EnterpriseReferenceComponent implements AfterViewInit, OnDestroy {
  private readonly host: ElementRef<HTMLElement> = inject(ElementRef);
  private readonly cleanups: Array<() => void> = [];

  ngAfterViewInit(): void {
    const root = this.host.nativeElement.shadowRoot;
    if (!root) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const toTop = root.querySelector<HTMLButtonElement>('#toTop');
    if (toTop) {
      const scrollToTop = () => window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
      const toggleToTop = () => toTop.classList.toggle('show', window.scrollY > 500);
      toTop.addEventListener('click', scrollToTop);
      window.addEventListener('scroll', toggleToTop, { passive: true });
      toggleToTop();
      this.cleanups.push(() => {
        toTop.removeEventListener('click', scrollToTop);
        window.removeEventListener('scroll', toggleToTop);
      });
    }

    const revealItems = Array.from(root.querySelectorAll<HTMLElement>('.rv'));
    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('in'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
      );
      revealItems.forEach((item) => observer.observe(item));
      this.cleanups.push(() => observer.disconnect());
    }

    root.querySelectorAll<HTMLElement>('.tilt').forEach((card) => {
      const move = (event: MouseEvent) => {
        const bounds = card.getBoundingClientRect();
        const x = (event.clientX - bounds.left) / bounds.width - 0.5;
        const y = (event.clientY - bounds.top) / bounds.height - 0.5;
        card.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) translateY(-6px)`;
      };
      const leave = () => (card.style.transform = '');
      card.addEventListener('mousemove', move);
      card.addEventListener('mouseleave', leave);
      this.cleanups.push(() => {
        card.removeEventListener('mousemove', move);
        card.removeEventListener('mouseleave', leave);
      });
    });

    root.querySelectorAll<HTMLElement>('.mag').forEach((button) => {
      const move = (event: MouseEvent) => {
        const bounds = button.getBoundingClientRect();
        button.style.transform = `translate(${(event.clientX - bounds.left - bounds.width / 2) * 0.16}px, ${(event.clientY - bounds.top - bounds.height / 2) * 0.3}px)`;
      };
      const leave = () => (button.style.transform = '');
      button.addEventListener('mousemove', move);
      button.addEventListener('mouseleave', leave);
      this.cleanups.push(() => {
        button.removeEventListener('mousemove', move);
        button.removeEventListener('mouseleave', leave);
      });
    });

    root.querySelectorAll<HTMLButtonElement>('.faq-q').forEach((question) => {
      const toggle = () => {
        const item = question.closest<HTMLElement>('.faq-i');
        const answer = item?.querySelector<HTMLElement>('.faq-a');
        if (!item || !answer) return;
        const shouldOpen = !item.classList.contains('open');
        root.querySelectorAll<HTMLElement>('.faq-i.open').forEach((openItem) => {
          openItem.classList.remove('open');
          openItem.querySelector<HTMLButtonElement>('.faq-q')?.setAttribute('aria-expanded', 'false');
          const openAnswer = openItem.querySelector<HTMLElement>('.faq-a');
          if (openAnswer) openAnswer.style.maxHeight = '';
        });
        if (shouldOpen) {
          item.classList.add('open');
          question.setAttribute('aria-expanded', 'true');
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
      };
      question.addEventListener('click', toggle);
      this.cleanups.push(() => question.removeEventListener('click', toggle));
    });

    root.querySelectorAll<HTMLFormElement>('form[data-demo]').forEach((form) => {
      const submit = (event: SubmitEvent) => {
        event.preventDefault();
        const button = form.querySelector<HTMLButtonElement>('button[type="submit"]');
        if (button) button.firstChild!.textContent = 'Request received ';
        form.reset();
      };
      form.addEventListener('submit', submit);
      this.cleanups.push(() => form.removeEventListener('submit', submit));
    });

    const hero = root.querySelector<HTMLElement>('.pp-hero');
    const spot = root.querySelector<HTMLElement>('.spot');
    if (hero && spot) {
      const move = (event: MouseEvent) => {
        const bounds = hero.getBoundingClientRect();
        spot.style.left = `${event.clientX - bounds.left}px`;
        spot.style.top = `${event.clientY - bounds.top}px`;
        spot.style.opacity = '1';
      };
      const leave = () => (spot.style.opacity = '0');
      hero.addEventListener('mousemove', move);
      hero.addEventListener('mouseleave', leave);
      this.cleanups.push(() => {
        hero.removeEventListener('mousemove', move);
        hero.removeEventListener('mouseleave', leave);
      });
    }

    this.animateCounters(root, reducedMotion);
    this.startHeroNetwork(root, reducedMotion);
  }

  ngOnDestroy(): void {
    this.cleanups.splice(0).forEach((cleanup) => cleanup());
  }

  private animateCounters(root: ShadowRoot, reducedMotion: boolean): void {
    const counters = Array.from(root.querySelectorAll<HTMLElement>('[data-count]'));
    const renderFinal = (element: HTMLElement) => {
      const raw = element.dataset['count'] ?? '0';
      const value = Number.parseFloat(raw);
      const decimals = (raw.split('.')[1] ?? '').length;
      element.textContent = `${element.dataset['prefix'] ?? ''}${decimals ? value.toFixed(decimals) : value.toLocaleString('en-IN')}${element.dataset['suffix'] ?? ''}`;
    };
    if (reducedMotion || !('IntersectionObserver' in window)) {
      counters.forEach(renderFinal);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          observer.unobserve(element);
          const raw = element.dataset['count'] ?? '0';
          const target = Number.parseFloat(raw);
          const decimals = (raw.split('.')[1] ?? '').length;
          const prefix = element.dataset['prefix'] ?? '';
          const suffix = element.dataset['suffix'] ?? '';
          const started = performance.now();
          const step = (now: number) => {
            const progress = Math.min(1, (now - started) / 1700);
            const value = target * (1 - Math.pow(1 - progress, 3));
            element.textContent = `${prefix}${decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-IN')}${suffix}`;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.5 },
    );
    counters.forEach((counter) => observer.observe(counter));
    this.cleanups.push(() => observer.disconnect());
  }

  private startHeroNetwork(root: ShadowRoot, reducedMotion: boolean): void {
    const canvas = root.querySelector<HTMLCanvasElement>('#pcv');
    if (!canvas || reducedMotion) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let particles: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const pointer = { x: -9999, y: -9999 };
    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      const count = Math.min(110, Math.floor((width * height) / 13000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
      }));
    };
    const move = (event: MouseEvent) => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
    };
    const leave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;
      });
      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];
        for (let other = index + 1; other < particles.length; other += 1) {
          const candidate = particles[other];
          const distance = Math.hypot(particle.x - candidate.x, particle.y - candidate.y);
          if (distance >= 120) continue;
          context.strokeStyle = `rgba(138,180,255,${(0.16 * (1 - distance / 120)).toFixed(3)})`;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(candidate.x, candidate.y);
          context.stroke();
        }
        const pointerDistance = Math.hypot(particle.x - pointer.x, particle.y - pointer.y);
        if (pointerDistance < 170) {
          context.strokeStyle = `rgba(255,140,26,${(0.4 * (1 - pointerDistance / 170)).toFixed(3)})`;
          context.beginPath();
          context.moveTo(particle.x, particle.y);
          context.lineTo(pointer.x, pointer.y);
          context.stroke();
        }
        context.fillStyle = 'rgba(138,180,255,.85)';
        context.beginPath();
        context.arc(particle.x, particle.y, 1.6, 0, Math.PI * 2);
        context.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.parentElement?.addEventListener('mousemove', move);
    canvas.parentElement?.addEventListener('mouseleave', leave);
    frame = requestAnimationFrame(draw);
    this.cleanups.push(() => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      canvas.parentElement?.removeEventListener('mousemove', move);
      canvas.parentElement?.removeEventListener('mouseleave', leave);
    });
  }
}
