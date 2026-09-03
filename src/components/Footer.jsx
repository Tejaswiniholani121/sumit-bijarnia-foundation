import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialIcons from './SocialIcons';
import { navItems } from '../data/content';
import { siteConfig } from '../config/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-glow"></div>
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo-card"><Logo /></div>
          <p>Carrying purpose forward through thoughtful action in skin health, healthcare, education and community wellbeing.</p>
          <SocialIcons variant="light" />
        </div>
        <div>
          <h3>Explore</h3>
          <div className="footer-links">{navItems.slice(0, 4).map(i => <Link key={i.to} to={i.to}>{i.label}</Link>)}</div>
        </div>
        <div>
          <h3>Support</h3>
          <div className="footer-links"><Link to="/support">Support Us</Link><Link to="/contact">Contact</Link><Link to="/privacy">Privacy Policy</Link><Link to="/terms">Terms</Link></div>
        </div>
        <div>
          <h3>Contact</h3>
          <div className="footer-contact">
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phoneHref}`}>{siteConfig.phoneDisplay}</a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom"><span>© 2026 Sumit Bijarnia Foundation.</span><span>Built around purpose, dignity and action.</span></div>
    </footer>
  );
}
