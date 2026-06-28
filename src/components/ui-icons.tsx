// Small line icons used in chrome (buttons, rows). Ported from the prototype.
import type { SVGProps } from 'react';

const base: SVGProps<SVGSVGElement> = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
};

export const StarSolid = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 2l2.4 5.6L20 8l-4 4 1 6-5-3-5 3 1-6-4-4 5.6-.4z" />
  </svg>
);

export const Logo = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...p}>
    <path d="M3 22 Q16 4 29 22" />
    <circle cx="16" cy="14" r="4" fill="var(--honey)" stroke="var(--honey)" />
    <path d="M3 22h26" />
  </svg>
);

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.2} {...p}><path d="M5 12h14M13 6l6 6-6 6" /></svg>
);

export const Shuffle = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M4 7h4l8 10h4M4 17h4l3-3.5M16 7h4M17 4l3 3-3 3M17 14l3 3-3 3" /></svg>
);

export const Globe = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18M3 12h18" /></svg>
);

export const Close = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} strokeWidth={2.2} {...p}><path d="M6 6l12 12M18 6L6 18" /></svg>
);

export const Speaker = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M11 5 6 9H3v6h3l5 4z" /><path d="M16 8a5 5 0 0 1 0 8" /><path d="M19 5a9 9 0 0 1 0 14" /></svg>
);

export const Chevron = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M9 18l6-6-6-6" /></svg>
);

export const Clock = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
);

export const Play = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M8 5v14l11-7z" /></svg>
);

export const Check = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M5 13l4 4L19 7" /></svg>
);

export const Heart = (p: SVGProps<SVGSVGElement>) => (
  <svg {...base} {...p}><path d="M12 20s-7-4.35-9.5-8.5C1 8.5 2.5 5.5 5.5 5.5 7.5 5.5 9 7 12 9c3-2 4.5-3.5 6.5-3.5 3 0 4.5 3 3 6C19 15.65 12 20 12 20z" /></svg>
);

export const HeartSolid = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}>
    <path d="M12 20s-7-4.35-9.5-8.5C1 8.5 2.5 5.5 5.5 5.5 7.5 5.5 9 7 12 9c3-2 4.5-3.5 6.5-3.5 3 0 4.5 3 3 6C19 15.65 12 20 12 20z" />
  </svg>
);
