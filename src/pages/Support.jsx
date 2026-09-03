import { Link } from "react-router-dom";
import PageShell from "../components/PageShell";
import DonateButton from "../components/DonateButton";
import { focusAreas, supportVisuals } from "../data/content";
import PageMeta from "../components/PageMeta";

export default function Support() {
  return (
    <PageShell className="support-page">
      <PageMeta
        title="Support Us"
        description="Support the Sumit Bijarnia Foundation as its social-impact programmes take shape."
      />
      <section className="inner-hero support-hero">
        <div className="support-halo"></div>
        <div className="container support-hero-grid">
          <div data-stagger>
            <span className="eyebrow light">Support the mission</span>
            <h1>Your support can help intention become action.</h1>
            <p>
              As programmes take shape, contributions can help the Foundation
              build responsible initiatives across skin health, healthcare,
              education and community wellbeing.
            </p>
            <DonateButton className="btn btn-light">Donate Now</DonateButton>
          </div>
          <div className="support-photo-card" data-mask>
            <img
              src={supportVisuals.supportHero}
              alt={supportVisuals.supportHeroAlt}
              loading="lazy"
            />
            <div className="support-photo-badge">
              CARE
              <br />
              IN
              <br />
              ACTION
            </div>
          </div>
        </div>
      </section>

      <section className="support-use section-pad">
        <div className="container">
          <div className="support-use-head" data-reveal>

  <div className="support-use-visual">
    <img
      src={supportVisuals.supportHero}
      alt="Community support and meaningful social impact"
    />
  </div>

  <div className="support-use-copy">

    <span className="eyebrow">
      Where support may help
    </span>

    <h2>
      Your support,<br />
      directed with purpose.
    </h2>

    <p>
      Contributions will support carefully developed initiatives across
      skin health, healthcare, education and community support as the
      Foundation’s programmes take shape.
    </p>

  </div>

</div>
          <div className="support-use-list" data-stagger>
            {focusAreas.map((a) => (
              <div key={a.number}>
                <div className="support-use-image">
                  <img src={a.image} alt={a.alt} loading="lazy" />
                </div>
                <span>{a.number}</span>
                <h3>{a.title}</h3>
                <p>{a.short}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="gateway-section section-pad">
        <div className="container gateway-card" data-reveal>
          <div>
            <span className="eyebrow light">Donation gateway</span>
            <h2>Secure donation access is being prepared.</h2>
            <p>
              Once the official Razorpay/payment link is available, every Donate
              button on this website can be activated from one central setting.
            </p>
          </div>
          <DonateButton className="btn btn-light">
            Donation Gateway
          </DonateButton>
        </div>
      </section>

      <section className="other-support section-pad-sm">
        <div className="container other-support-grid">
          <div data-reveal>
            <span className="eyebrow">Beyond donations</span>
            <h2>There are other ways to build impact together.</h2>
          </div>
          <div className="support-options" data-stagger>
            <Link to="/contact">
              <strong>Partner</strong>
              <span>
                Explore responsible collaborations with the Foundation.
              </span>
              <b>↗</b>
            </Link>
            <Link to="/contact">
              <strong>Volunteer</strong>
              <span>Express interest in future on-ground opportunities.</span>
              <b>↗</b>
            </Link>
            <Link to="/contact">
              <strong>Start a conversation</strong>
              <span>
                Have an idea aligned with the Foundation’s focus areas?
              </span>
              <b>↗</b>
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
