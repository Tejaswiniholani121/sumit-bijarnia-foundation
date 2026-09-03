import { useEffect, useRef } from 'react';

export default function AmbientFx() {
  const glow = useRef(null);
  const progress = useRef(null);
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;
    const move = (e) => {
      if (!finePointer || reduce || !glow.current) return;
      glow.current.style.transform = `translate3d(${e.clientX - 190}px, ${e.clientY - 190}px, 0)`;
    };
    const scroll = () => {
      if (!progress.current) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const pct = max > 0 ? window.scrollY / max : 0;
      progress.current.style.transform = `scaleX(${pct})`;
    };
    window.addEventListener('pointermove', move, { passive: true });
    window.addEventListener('scroll', scroll, { passive: true });
    scroll();
    return () => { window.removeEventListener('pointermove', move); window.removeEventListener('scroll', scroll); };
  }, []);
  return <><div ref={progress} className="scroll-progress" aria-hidden="true"></div><div ref={glow} className="cursor-glow" aria-hidden="true"></div></>;
}
