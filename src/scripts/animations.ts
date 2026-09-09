import { animate, stagger } from 'animejs';

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function reveal(selector: string, opts: any = {}) {
  const els = document.querySelectorAll<HTMLElement>(selector);
  if (!els.length) return;
  // Asegura visibilidad inicial para usuarios sin JS ya resuelta por CSS, aquí partimos de opacity 0
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target as HTMLElement;
          const children = container.querySelectorAll<HTMLElement>(':scope > [data-item]');
          const targets = children.length ? children : [container];
          if (prefersReduced) {
            targets.forEach((el) => {
              (el as HTMLElement).style.opacity = '1';
              (el as HTMLElement).style.transform = 'none';
            });
          } else {
            animate(targets as any, {
              opacity: [0, 1],
              translateY: [12, 0],
              duration: opts.duration ?? 600,
              delay: stagger(opts.stagger ?? 40),
              easing: 'easeOutExpo',
              ...opts.overrides,
            } as any);
          }
          io.unobserve(container);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => io.observe(el));
}

function heroEntrance() {
  const hero = document.querySelector('[data-hero]');
  if (!hero) return;
  if (prefersReduced) {
    hero.querySelectorAll('[data-hero-item]').forEach((el) => {
      (el as HTMLElement).style.opacity = '1';
      (el as HTMLElement).style.transform = 'none';
    });
    return;
  }
  animate('[data-hero-item]' as any, {
    opacity: [0, 1],
    translateY: [16, 0],
    duration: 700,
    delay: stagger(80, { start: 100 }),
    easing: 'easeOutExpo',
  } as any);

  // KPI tiles inside hero with subtle scale
  animate('[data-hero-kpi] [data-item]' as any, {
    opacity: [0, 1],
    translateY: [12, 0],
    scale: [0.96, 1],
    duration: 600,
    delay: stagger(60, { start: 450 }),
    easing: 'easeOutExpo',
  } as any);
}

function chartDraw() {
  const charts = document.querySelectorAll<HTMLElement>('[data-chart]');
  if (!charts.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target as HTMLElement;
          const paths = el.querySelectorAll('polyline, polygon, rect, circle');
          if (prefersReduced) {
            io.unobserve(el);
            return;
          }
          // Animate line draw via strokeDashoffset if polyline
          const line = el.querySelector('polyline');
          if (line) {
            const len = 400;
            (line as SVGPolylineElement).style.strokeDasharray = String(len);
            (line as SVGPolylineElement).style.strokeDashoffset = String(len);
            animate(line as any, {
              strokeDashoffset: [len, 0],
              duration: 1200,
              easing: 'easeOutExpo',
            } as any);
          }
          animate(el.querySelectorAll('[data-bar]') as any, {
            scaleY: [0, 1],
            duration: 700,
            delay: stagger(70),
            easing: 'easeOutExpo',
          } as any);
          io.unobserve(el);
        }
      });
    },
    { threshold: 0.3 }
  );
  charts.forEach((c) => io.observe(c));
}

function headerParallax() {
  if (prefersReduced) return;
  const header = document.querySelector('header') as HTMLElement;
  if (!header) return;
  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        const progress = Math.min(y / 120, 1);
        header.style.boxShadow =
          y > 8 ? '0 1px 3px rgba(26,26,26,0.06), 0 8px 24px rgba(26,26,26,0.05)' : 'none';
        header.style.backgroundColor = y > 8 ? `rgba(255,255,255,${0.78 + progress * 0.14})` : 'rgba(255,255,255,0.80)';
        (header.style as any).backdropFilter = y > 8 ? `blur(${12 + progress * 6}px) saturate(1.15)` : 'blur(16px) saturate(1.2)';
        ticking = false;
      });
    },
    { passive: true }
  );
}

document.addEventListener('DOMContentLoaded', () => {
  heroEntrance();
  reveal('[data-reveal]', { stagger: 40, duration: 650 });
  reveal('[data-reveal-grid]', { stagger: 28, duration: 580 });
  reveal('[data-reveal-timeline]', { stagger: 55, duration: 620 });
  chartDraw();
  headerParallax();

  // Hover micro-interaction — solo en cards interactivas
  if (!prefersReduced) {
    document.querySelectorAll<HTMLElement>('[data-hover-lift][data-interactive="true"]').forEach((card) => {
      card.addEventListener('mouseenter', () => {
        animate(card as any, { translateY: -2, duration: 180, easing: 'easeOutQuad' } as any);
      });
      card.addEventListener('mouseleave', () => {
        animate(card as any, { translateY: 0, duration: 220, easing: 'easeOutQuad' } as any);
      });
    });
  }
});
