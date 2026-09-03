import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import DonateButton from '../components/DonateButton';
import { focusAreas, supportVisuals } from '../data/content';
import PageMeta from '../components/PageMeta';

export default function Initiatives() {
  return (
    <PageShell className="initiatives-page"><PageMeta title="Our Initiatives" description="Explore the Foundation's evolving focus areas in skin health, healthcare, education and community development." />
      <section className="inner-hero initiatives-hero">
        <div className="container wide-hero-copy" data-stagger>
          <span className="eyebrow light">Our initiatives</span>
          <h1>Areas of action.<br/><span>Built with intention.</span></h1>
          <p>The Foundation is at the beginning of its journey. These are the focus areas we aim to develop responsibly as programmes, partnerships and on-ground work take shape.</p>
        </div>
        <div className="hero-grid-lines"></div>
      </section>

      <section className="skin-deep section-pad">
        <div className="container skin-deep-grid">
          <div className="sticky-label"><span>01</span><div>Core focus</div></div>
          <div className="skin-deep-content">
            <div data-reveal><span className="eyebrow">Skin Health & Wellbeing</span><h2>Awareness, access and dignity around skin health.</h2><p>Skin health can be overlooked until discomfort, stigma or access barriers make everyday life harder. We aim to build initiatives that make trustworthy awareness and appropriate care easier to reach.</p></div>
            <div className="action-pill-grid" data-stagger>
              <div><strong>Awareness</strong><span>Practical education around common skin-health concerns.</span></div>
              <div><strong>Prevention</strong><span>Hygiene and preventive-care awareness.</span></div>
              <div><strong>Access</strong><span>Dermatology support or camps as programmes are developed.</span></div>
              <div><strong>Care</strong><span>Need-based pathways for underserved communities.</span></div>
            </div>
          </div>
          <div className="skin-deep-photo" data-mask><img src={focusAreas[0].image} alt={focusAreas[0].alt} loading="lazy" /></div>
        </div>
      </section>

      <section className="initiative-editorial section-pad-sm">
        <div className="container">
          {focusAreas.slice(1).map((item) => (
            <article className="initiative-story" key={item.number}>
              <div className="initiative-index">{item.number}</div>
              <div className="initiative-title" data-reveal><span className="eyebrow">Area of action</span><h2>{item.title}</h2></div>
              <div className="initiative-copy" data-reveal><p>{item.body}</p><span className="future-tag">Planned / evolving initiative</span></div>
              <div className="initiative-art initiative-photo" data-mask><img src={item.image} alt={item.alt} loading="lazy" /></div>
            </article>
          ))}
        </div>
      </section>

      <section className="future-section section-pad">
        <div className="container future-grid">
          <div data-reveal><span className="eyebrow light">Future social initiatives</span><h2>We will stay open to where responsible support is needed most.</h2></div>
          <div data-reveal><p>The Foundation may expand into additional social-impact areas over time. New initiatives will be added only as they are defined, resourced and ready to be delivered responsibly.</p><Link className="text-link light-link" to="/contact">Start a conversation <span>↗</span></Link></div>
        </div>
        <div className="container future-image-wrap" data-mask><img className="future-image" src={supportVisuals.initiativesBanner} alt={supportVisuals.initiativesBannerAlt} loading="lazy" /></div>
      </section>

      <section className="closing-cta section-pad"><div className="container closing-card" data-reveal><span className="eyebrow">Support work as it takes shape</span><h2>Help turn planned initiatives into practical action.</h2><p>Our donation gateway is being prepared. You can still connect with the Foundation today.</p><div className="closing-actions"><DonateButton /><Link className="btn btn-outline" to="/contact">Contact Us</Link></div></div></section>
    </PageShell>
  );
}
