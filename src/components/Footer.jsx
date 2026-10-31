import { Link } from 'react-router-dom';
import Logo from './Logo';
import SocialIcons from './SocialIcons';
import { siteConfig } from '../config/site';

export default function Footer() {
  return (
    <footer className="site-footer v2-footer v3-footer">
      <div className="container v3-footer-top">
        <div className="v2-footer-brand">
          <Logo />
          <h3>{siteConfig.tagline}</h3>
          <p>Carrying purpose forward through thoughtful action in skin health, healthcare, education, rural development and community well-being.</p>
          <div className="v3-registration-summary">
            <p>{siteConfig.registration.type}</p>
            <strong>CIN: {siteConfig.registration.cin}</strong>
            <div className="v3-credential-line">12AB Registered <b>·</b> 80G Approved <b>·</b> NPO DARPAN Registered</div>
          </div>
          <SocialIcons variant="light" />
        </div>

        <div className="v3-footer-nav">
          <div>
            <h4>Explore</h4>
            <Link to="/">Home</Link>
            <Link to="/about-sumit">About Sumit</Link>
            <Link to="/initiatives">Our Initiatives</Link>
            <Link to="/commitment">Our Commitment</Link>
            <Link to="/promise">Our Promise</Link>
          </div>
          <div>
            <h4>Support</h4>
            <Link to="/support">Support Us</Link>
            <Link to="/contact">Contact Us</Link>
          </div>
          <div>
            <h4>Legal</h4>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/registration-tax">Registration & Tax Information</Link>
          </div>
        </div>

        <div className="v2-footer-contact v3-footer-contact">
          <h4>Contact</h4>
          <div><span>Registered Office</span><p>{siteConfig.address}</p></div>
          <div><span>Email</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div>
          <div><span>Phone / WhatsApp</span><a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">{siteConfig.phoneDisplay}</a></div>
        </div>
      </div>
      <div className="container v2-footer-bottom"><span>© 2026 Sumit Bijarnia Foundation.</span><span>CARE · PURPOSE · ACTION · IMPACT</span></div>
    </footer>
  );
}
