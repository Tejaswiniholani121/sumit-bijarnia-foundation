import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function PageShell({ children, className = '' }) {
  const root = useRef(null);
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(root.current, { opacity: 0 }, { opacity: 1, duration: .55, ease: 'power2.out' });
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, { y: 54, opacity: 0, duration: .9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%', once: true } });
      });
      gsap.utils.toArray('[data-stagger]').forEach((el) => {
        gsap.from([...el.children], { y: 46, opacity: 0, duration: .75, stagger: .11, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 84%', once: true } });
      });
      gsap.utils.toArray('[data-mask]').forEach((el) => {
        gsap.fromTo(el, { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 1.15, ease: 'power4.inOut', scrollTrigger: { trigger: el, start: 'top 83%', once: true } });
      });
      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const img = el.querySelector('img');
        if (!img) return;
        gsap.fromTo(img, { yPercent: -6, scale: 1.06 }, { yPercent: 6, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: .7 } });
      });
    }, root);
    return () => { ctx.revert(); ScrollTrigger.refresh(); };
  }, []);
  return <main ref={root} className={`page-shell ${className}`}>{children}</main>;
}
