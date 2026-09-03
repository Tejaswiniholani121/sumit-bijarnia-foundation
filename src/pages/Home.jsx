import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import SectionHeading from "../components/SectionHeading";
import DonateButton from "../components/DonateButton";
import { focusAreas } from "../data/content";
import sumitPhoto from "../assets/images/sumit-bijarnia.jpeg";
import bareLogo from "../assets/images/bare-chemistry-logo.png";
import PageMeta from "../components/PageMeta";

export default function Home() {
  const skinFocus = focusAreas[0];

  return (
    <PageShell className="home-page">
      <PageMeta
        title="Home"
        description="Purpose that lives on - social-impact initiatives in skin health, healthcare, education and community wellbeing."
      />
      <section className="hero hero-home">
        <div className="hero-orbit orbit-one"></div>
        <div className="hero-orbit orbit-two"></div>
        <div className="container hero-grid">
          <div className="hero-copy" data-stagger>
            <span className="eyebrow hero-eyebrow">
              Sumit Bijarnia Foundation
            </span>
            <h1 className="hero-title">
              <span>A legacy</span>
              <span>carried forward..</span>
            </h1>
            <p className="hero-lead">
              Through thoughtful action in skin health, healthcare, education and community support.
            </p>
            <div className="hero-actions">
              <Link to="/initiatives" className="btn btn-light">
                <span>Explore Our Work</span>
                <span className="btn-arrow">↗</span>
              </Link>
              <DonateButton className="btn btn-ghost-light">
                Support Our Mission
              </DonateButton>
            </div>
            <div className="hero-note">
              <span className="pulse-dot"></span>
              <span>Built for meaningful, long-term social impact.</span>
            </div>
          </div>
          <div className="hero-visual" data-mask>
            <div className="hero-photo-wrap" data-parallax>
              <img src={sumitPhoto} alt="Sumit Bijarnia" />
            </div>
            <div className="hero-photo-caption">
              <span><strong>Sumit Bijarnia</strong></span>
              <strong>Beloved Founding Member of Bare Chemistry.</strong>
            </div>
          </div>
        </div>
        <div className="hero-bottom-line">
          <span></span>
          <p>Care. Purpose. Action. Continuity.</p>
          <span></span>
        </div>
      </section>

      <section className="intro-manifesto section-pad">
        <div className="container manifesto-grid">
          <div data-reveal>
            <span className="eyebrow">Why we exist</span>
            <h2>
              Not simply to remember.
              <br />
              To keep meaning moving.
            </h2>
          </div>
          <div className="manifesto-copy" data-reveal>
            <p>
              The Sumit Bijarnia Foundation carries forward the name of Sumit
              Bijarnia, a beloved founding member of Bare Chemistry, through
              social initiatives designed around care, access and opportunity.
            </p>
            <Link className="text-link" to="/about-sumit">
              About Sumit <span>↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="focus-section section-pad-sm">
  <div className="container">

    <div className="focus-intro-grid">

      <SectionHeading
        eyebrow="Our focus"
        title="Where meaningful action can begin."
        copy="The Foundation is new, so our work is presented as areas of action we intend to build responsibly - without invented impact claims or numbers."
      />

      <div className="focus-collage" data-stagger>

        <div className="focus-collage-img focus-collage-large">
          <img
            src={focusAreas[1].image}
            alt="Healthcare"
          />
          <span>Healthcare</span>
        </div>

        <div className="focus-collage-img">
          <img
            src={focusAreas[2].image}
            alt="Education"
          />
          <span>Education</span>
        </div>

        <div className="focus-collage-img">
          <img
            src={focusAreas[3].image}
            alt="Community Development"
          />
          <span>Community</span>
        </div>

      </div>

    </div>

   
        </div>
      </section>

      <section className="skin-feature section-pad">
        <div className="container skin-grid">
          <div className="skin-photo-card" data-mask>
            <img src={skinFocus.image} alt={skinFocus.alt} loading="lazy" />
            <div className="skin-photo-overlay">
              <div className="skin-chip">Awareness • Access • Dignity</div>
              <div className="skin-word">
                SKIN
                <br />
                HEALTH
              </div>
            </div>
          </div>
          <div className="skin-copy" data-reveal>
            <span className="eyebrow">A central focus</span>
            <h2>Skin health is health.</h2>
            <p>
              Skin concerns can affect comfort, confidence and everyday
              wellbeing. The Foundation aims to make skin-health awareness,
              preventive care and access to the right support easier to reach -
              particularly for underserved communities.
            </p>
            <ul className="minimal-list">
              <li>Skin-health awareness & education</li>
              <li>Preventive care & hygiene awareness</li>
              <li>Dermatology support / camps as programmes are developed</li>
              <li>Need-based access to care</li>
            </ul>
            <Link className="btn btn-outline" to="/initiatives">
              <span>View Initiatives</span>
              <span className="btn-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="commitment-preview section-pad">
        <div className="commitment-aura"></div>
        <div className="container commitment-preview-grid">
          <div className="bc-frame" data-mask>
            <img src={bareLogo} alt="Bare Chemistry" />
          </div>
          <div data-reveal>
            <span className="eyebrow light">Our commitment</span>
            <div className="five-inline">
              <strong>5%</strong>
              <span>of Bare Chemistry’s profits</span>
            </div>
            <h2>
              From a brand journey
              <br />
              to a larger purpose.
            </h2>
            <p>
              Bare Chemistry has committed 5% of its profits to support the work
              of the Sumit Bijarnia Foundation across skin health, healthcare,
              education and community-led initiatives.
            </p>
            <Link to="/commitment" className="btn btn-light">
              <span>See the Commitment</span>
              <span className="btn-arrow">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="closing-cta section-pad">
        <div className="container closing-card" data-reveal>
          <span className="eyebrow">Be part of what comes next</span>
          <h2>Small acts can become lasting change.</h2>
          <p>
            As the Foundation’s programmes take shape, your support can help
            turn intent into responsible action.
          </p>
          <div className="closing-actions">
            <DonateButton />
            <Link to="/contact" className="btn btn-outline">
              Connect With Us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
