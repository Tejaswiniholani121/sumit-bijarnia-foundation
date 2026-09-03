import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { navItems } from '../data/content';
import Logo from './Logo';
import DonateButton from './DonateButton';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell">
        <NavLink to="/" className="brand-link" aria-label="Sumit Bijarnia Foundation home"><Logo /></NavLink>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>{item.label}</NavLink>)}
        </nav>
        <div className="nav-actions">
          <DonateButton className="btn btn-primary nav-donate">Donate Now</DonateButton>
          <button className={`menu-toggle ${open ? 'open' : ''}`} onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">
            <span></span><span></span>
          </button>
        </div>
      </div>
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        <div className="mobile-menu-inner">
          {navItems.map((item, index) => <NavLink key={item.to} style={{'--i': index}} to={item.to}>{item.label}<span>↗</span></NavLink>)}
          <DonateButton className="btn btn-primary mobile-donate">Donate Now</DonateButton>
        </div>
      </div>
    </header>
  );
}
