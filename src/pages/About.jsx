import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import SectionHeading from '../components/SectionHeading';
import DonateButton from '../components/DonateButton';
import sumitPhoto from '../assets/images/sumit-bijarnia.jpeg';

import { principles } from '../data/content';
import PageMeta from '../components/PageMeta';
import { supportVisuals } from '../data/content';

export default function About() {
  return (
    <PageShell className="about-page"><PageMeta title="About Sumit" description="About Sumit Bijarnia and the purpose carried forward through the Sumit Bijarnia Foundation." />
      <section className="inner-hero about-hero">
        <div className="container about-hero-grid">
          <div data-stagger>
            <span className="eyebrow">About Sumit</span>
            <h1>The person behind<br/><em>the purpose.</em></h1>
            <p>Sumit Bijarnia was a beloved founding member of Bare Chemistry and an integral part of its journey. The Foundation carries his name forward through meaningful action and social impact.</p>
          </div>
          <div className="portrait-stage" data-mask>
            <div className="portrait-frame" data-parallax><img src={sumitPhoto} alt="Sumit Bijarnia" /></div>
            <div className="portrait-name">
  <strong>Sumit Bijarnia</strong>
  <span>Beloved Founding Member of Bare Chemistry</span>
</div>
            
          </div>
        </div>
      </section>

      <section className="quote-section section-pad">
        <div className="container quote-grid">
          <div className="quote-mark">“</div>
          <blockquote data-reveal>Some lives leave behind more than memories.<br/><strong>They leave behind values worth carrying forward.</strong></blockquote>
        </div>
      </section>

      <section className="story-section section-pad-sm">
        <div className="container story-grid">
          <SectionHeading eyebrow="The foundation" title="From memory to meaningful action." />
          <div className="story-copy" data-reveal>
            <p>The Sumit Bijarnia Foundation was created with a simple but enduring intention: to let a name, a journey and the meaning attached to it continue through work that can genuinely help people.</p>
            <p>Rather than centring the Foundation on grief, its focus is forward-looking - on creating access, awareness, care and opportunity across social-impact areas that matter.</p>
            <p>As programmes take shape, the Foundation will work deliberately: listening first, building responsibly, and supporting initiatives where practical action can make a meaningful difference.</p>
          </div>
        </div>
      </section>

      <section className="mission-vision section-pad">
        <div className="container mission-grid" data-stagger>
          <div className="mission-panel navy"><span className="eyebrow light">Mission</span><h2>Turn purpose into action that improves everyday lives.</h2><p>To develop thoughtful social initiatives in skin health, healthcare, education and community wellbeing, with dignity and accessibility at the centre.</p></div>
          <div className="mission-panel pale"><span className="eyebrow">Vision</span><h2>A future where care and opportunity are easier to reach.</h2><p>To grow a Foundation that creates responsible, sustained impact while keeping its work rooted in people, real needs and meaningful outcomes.</p></div>
        </div>
      </section>

      <section className="principles-section section-pad-sm">
        <div className="container">
          <SectionHeading eyebrow="How we want to work" title="Guided by a few simple principles." />
          <div className="principles-grid" data-stagger>{principles.map(([title, copy], i) => <div className="principle" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div>
        </div>
      </section>

      <section className="about-end section-pad">
  <div className="container about-end-card" data-reveal>

    <div className="about-end-heading">
      <h2>
        In his name.<br />
        Through action.<br />
        <span>For lives that can be changed.</span>
      </h2>
    </div>

    <div className="about-end-visual">
      <img
        src={supportVisuals.supportHero}
        alt="Community support and meaningful social impact"
      />

      <div className="about-end-overlay"></div>

      <div className="about-end-content">
        <p>
          The story continues through the work we choose to build from here.
        </p>

        <div className="closing-actions">
          <Link className="btn btn-light" to="/initiatives">
            Explore Our Work
          </Link>

          <DonateButton className="btn btn-ghost-light">
            Support the Mission
          </DonateButton>
        </div>
      </div>
    </div>

  </div>
</section>
    </PageShell>
  );
}