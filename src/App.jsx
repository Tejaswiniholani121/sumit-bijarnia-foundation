import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Header from './components/Header';
import AmbientFx from './components/AmbientFx';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Initiatives from './pages/Initiatives';
import Commitment from './pages/Commitment';
import PromisePage from './pages/Promise';
import Support from './pages/Support';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import RegistrationTax from './pages/RegistrationTax';
import NotFound from './pages/NotFound';

function ScrollManager() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname]);
  return null;
}

export default function App() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, touchMultiplier: 1.1 });
    let raf;
    const frame = (time) => { lenis.raf(time); raf = requestAnimationFrame(frame); };
    raf = requestAnimationFrame(frame);
    return () => { cancelAnimationFrame(raf); lenis.destroy(); };
  }, []);

  return (
    <>
      <ScrollManager />
      <AmbientFx />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-sumit" element={<About />} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/commitment" element={<Commitment />} />
        <Route path="/promise" element={<PromisePage />} />
        <Route path="/support" element={<Support />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/registration-tax" element={<RegistrationTax />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}
