import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import DonateButton from '../components/DonateButton';
import FocusGrid from '../components/FocusGrid';
import PageMeta from '../components/PageMeta';
import sumitPhoto from '../assets/images/sumit-bijarnia.jpeg';
import bareLogo from '../assets/images/bare-chemistry-logo-transparent.png';
import foundationLogo from '../assets/images/foundation-logo-transparent.png';
import blendEducation from '../assets/images/education-community.jpeg';
import blendHealthcare from '../assets/images/healthcare-community.png';
import blendRural from '../assets/images/rural-community.jpeg';
import { focusAreas } from '../data/content';
import { siteConfig } from '../config/site';

export default function Home() {
  return (
    <PageShell className="v2-page home-v2">
      <PageMeta title="Home" description="Carrying Sumit Bijarnia's purpose forward through thoughtful action in skin health, healthcare, education, rural development and community well-being." />

      <section className="v2-home-hero v3-home-hero">
        <div className="v3-hero-live-blend" aria-hidden="true">
          <img src={blendEducation} alt="" />
          <img src={blendHealthcare} alt="" />
          <img src={blendRural} alt="" />
        </div>
        <div className="v2-aurora v2-aurora-a" />
        <div className="v2-aurora v2-aurora-b" />
        <div className="container v2-hero-grid">
          <div className="v2-hero-copy" data-stagger>
            <span className="eyebrow light">Sumit Bijarnia Foundation</span>
            <h1>A Legacy<br/><em>Carried Forward.</em></h1>
            <p>Through thoughtful action in skin health, healthcare, education, rural development and community well-being.</p>
            <div className="v2-actions">
              <Link to="/initiatives" className="btn btn-light">Explore Our Work <span className="btn-arrow">↗</span></Link>
              <DonateButton className="btn btn-ghost-light">Support Our Mission</DonateButton>
            </div>
            <div className="v2-impact-note">Built for meaningful, long-term social impact.</div>
          </div>
          <div className="v2-hero-portrait" data-mask>
            <div className="v2-hero-photo"><img src={sumitPhoto} alt="Sumit Bijarnia" /></div>
            <div className="v2-hero-caption"><strong>SUMIT BIJARNIA <span>(1997–2026)</span></strong><p>A Life Remembered. A Purpose Continued.</p></div>
          </div>
        </div>
        <div className="v2-mantra">CARE · PURPOSE · ACTION · IMPACT</div>
      </section>

      <section className="v2-section v2-why">
        <div className="container v2-split-heading">
          <div data-reveal><span className="eyebrow">Why we exist</span><h2>Not simply to remember.<br/>To carry his purpose forward.</h2></div>
          <div data-reveal><p>Created in memory of Sumit Bijarnia, a founding member of Bare Chemistry, the Foundation carries forward the values that shaped his journey through thoughtful action—creating opportunities for better health, education and well-being, particularly where access matters most.</p><Link className="text-link" to="/about-sumit">About Sumit <span>↗</span></Link></div>
        </div>
      </section>

      <section className="v2-section v2-focus-home">
        <div className="container">
          <div className="v2-section-head" data-reveal><span className="eyebrow">Our focus</span><h2>Where meaningful action can begin.</h2><p>We are starting with purpose and building with care—focusing our efforts where thoughtful action can create meaningful, lasting impact.</p></div>
          <FocusGrid />
          <div className="v2-focus-link" data-reveal><Link to="/initiatives" className="btn btn-outline">Explore Our Work <span className="btn-arrow">↗</span></Link></div>
        </div>
      </section>

      <section className="v2-section v2-skin-spotlight">
        <div className="container v2-feature-grid">
          <div className="v2-feature-image" data-mask><img src={focusAreas[0].image} alt={focusAreas[0].alt} /></div>
          <div data-reveal><span className="eyebrow">A central focus</span><h2>Skin health is health.</h2><p>Skin concerns can affect comfort, confidence and everyday well-being. We aim to make skin-health awareness, preventive care and access to appropriate support easier to reach—particularly for underserved communities.</p><Link className="text-link" to="/initiatives">View Initiatives <span>↗</span></Link></div>
        </div>
      </section>

      <section className="v2-section v2-home-commitment">
        <div className="container v2-commitment-card" data-reveal>
          <div className="v2-brand-lockup">
            <img src={bareLogo} alt="Bare Chemistry" className="v2-bare-logo" />
            <span className="v2-lockup-divider" />
            <img src={foundationLogo} alt="Sumit Bijarnia Foundation" className="v2-foundation-lockup" />
          </div>
          <div className="v2-commitment-copy"><span className="eyebrow light">Our commitment</span><div className="v2-five">5%</div><h2>Care that goes beyond skin.</h2><p>{siteConfig.bareChemistryCommitment}</p><p className="v2-usp">Every ingredient has a purpose. So does every purchase.</p><Link to="/commitment" className="btn btn-light">See Our Commitment <span className="btn-arrow">↗</span></Link></div>
        </div>
      </section>

      <section className="v2-section v2-promise-preview">
        <div className="container">
          <div className="v2-section-head" data-reveal><span className="eyebrow">Our promise</span><h2>Trust, built into the way we work.</h2><p>We believe in being transparent about our work, thoughtful in our actions and honest about the impact we create.</p></div>
          <div className="v2-promise-mini" data-stagger>
            <article><span>01</span><h3>Transparency</h3><p>Open about our work, resources and progress.</p></article>
            <article><span>02</span><h3>Thoughtful Action</h3><p>Listen first. Act with purpose. Use resources wisely.</p></article>
            <article><span>03</span><h3>From Contribution to Impact</h3><p>Show where support goes, what it enables and what difference it makes.</p></article>
          </div>
          <Link className="text-link" to="/promise">Read Our Promise <span>↗</span></Link>
        </div>
      </section>

      <section className="v2-section v2-final-cta">
        <div className="container v2-final-card" data-reveal><span className="eyebrow light">Be part of what comes next</span><h2>Small acts can create lasting change.</h2><p>As the Foundation’s programmes take shape, your support can help turn purpose into action.</p><div className="v2-actions"><DonateButton className="btn btn-light" /><Link to="/contact" className="btn btn-ghost-light">Connect With Us</Link></div></div>
      </section>
    </PageShell>
  );
}
