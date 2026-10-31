import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import DonateButton from '../components/DonateButton';
import FocusGrid from '../components/FocusGrid';
import PageMeta from '../components/PageMeta';
import skillsImage from '../assets/images/community-skills.jpeg';
import healthImage from '../assets/images/healthcare-community.png';
import ruralImage from '../assets/images/rural-community.jpeg';
import { siteConfig } from '../config/site';

export default function Support() {
  return (
    <PageShell className="v2-page support-v2">
      <PageMeta title="Support Us" description="Support the Sumit Bijarnia Foundation through donations, partnerships, volunteering and meaningful collaboration." />

      <section className="v2-inner-hero v2-support-hero"><div className="container v2-support-hero-grid"><div data-stagger><span className="eyebrow light">01 — Support the mission</span><h1>Your support can help<br/><em>turn purpose into action.</em></h1><p>Whether through a contribution, collaboration or simply spreading the word, every form of support can help the Foundation turn thoughtful ideas into meaningful work.</p><div className="v2-actions"><DonateButton className="btn btn-light"/><Link to="/contact" className="btn btn-ghost-light">Join Us</Link></div></div><div className="v2-support-photo-stack" data-stagger><img src={ruralImage} alt="Rural community"/><img src={skillsImage} alt="Community skills and learning"/><img src={healthImage} alt="Community healthcare"/></div></div></section>

      <section className="v2-section v2-support-areas"><div className="container"><div className="v2-section-head" data-reveal><span className="eyebrow">02 — Where your support can help</span><h2>Purpose, put into action.</h2><p>Your contribution can help the Foundation develop initiatives, partnerships and opportunities across the areas where meaningful action can make a difference.</p></div><FocusGrid /></div></section>

      <section className="v2-section v3-donation-invite"><div className="container v3-donation-invite-card" data-reveal><div className="v3-donation-icon">↗</div><div><span className="eyebrow light">03 — Donate with purpose</span><h2>Share your details.<br/>Continue securely.</h2><p>Start with a short donor form so the Foundation can keep clear records and prepare applicable documentation. You’ll then continue to the official payment page.</p><div className="v3-donation-tags"><span>Clear donor records</span><span>Applicable documentation</span><span>Secure payment step</span></div></div><DonateButton className="btn btn-light">Start Donation</DonateButton></div></section>

      <section className="v2-section v2-beyond-donations"><div className="container"><div className="v2-section-head" data-reveal><span className="eyebrow">04 — Beyond donations</span><h2>There are other ways to build impact together.</h2></div><div className="v2-support-options" data-stagger><Link to="/contact"><span>01</span><h3>Partner</h3><p>Bring knowledge, resources or expertise to a meaningful collaboration.</p><strong>Get in Touch ↗</strong></Link><Link to="/contact"><span>02</span><h3>Volunteer</h3><p>Share your time and skills to help the Foundation’s work take shape.</p><strong>Get Involved ↗</strong></Link><Link to="/contact"><span>03</span><h3>Connect & Share</h3><p>Have an idea, opportunity or resource to share—or help more people discover the Foundation.</p><strong>Contact Us ↗</strong></Link></div></div></section>

      <section className="v2-section v2-support-note"><div className="container" data-reveal><p>For donation-related questions, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or message the Foundation on <a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">WhatsApp</a>.</p></div></section>
    </PageShell>
  );
}
