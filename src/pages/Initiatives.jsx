import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import DonateButton from '../components/DonateButton';
import PageMeta from '../components/PageMeta';
import educationCommunity from '../assets/images/education-community.jpeg';
import ruralCommunity from '../assets/images/rural-community.jpeg';
import { focusAreas, skinAreas } from '../data/content';

export default function Initiatives() {
  return (
    <PageShell className="v2-page initiatives-v2">
      <PageMeta title="Our Initiatives" description="Where purpose becomes action across skin health, healthcare, education, rural development and community well-being." />

      <section className="v2-inner-hero v2-initiatives-hero v3-initiatives-hero">
        <div className="container v3-initiatives-hero-grid">
          <div data-stagger><span className="eyebrow light">Our initiatives</span><h1>Where purpose<br/><em>becomes action.</em></h1><p>The Foundation is at the beginning of its journey. We are starting with a focused set of areas where thoughtful, responsible work can respond to real needs—particularly where awareness, access or opportunity may be limited.</p></div>
          <div className="v3-initiatives-hero-photo" data-mask><img src={educationCommunity} alt="Teacher engaging with children in a community learning setting" /></div>
        </div>
      </section>

      <section className="v2-section v2-core-focus"><div className="container v2-core-grid"><div className="v2-core-photo" data-mask><img src={focusAreas[0].image} alt={focusAreas[0].alt} /></div><div data-reveal><span className="eyebrow">01 — Core focus</span><h2>Skin Health</h2><h3>Making skin health easier to understand and access.</h3><p>{focusAreas[0].body}</p><span className="v2-status">{focusAreas[0].status}</span></div></div><div className="container"><div className="v2-section-head compact" data-reveal><span className="eyebrow">Areas of work</span></div><div className="v2-skin-areas" data-stagger>{skinAreas.map(([number,title,copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>

      <section className="v2-section v2-initiative-list"><div className="container">{focusAreas.slice(1).map((area) => <article className="v2-initiative-row" key={area.number}><div className="v2-initiative-photo" data-mask><img src={area.image} alt={area.alt} /></div><div data-reveal><span className="eyebrow">Area of action</span><div className="v2-row-number">{area.number}</div><h2>{area.title}</h2><h3>{area.short}</h3><p>{area.body}</p><span className="v2-status">{area.status}</span></div></article>)}</div></section>

      <section className="v3-initiatives-bridge"><div className="container v3-bridge-grid" data-reveal><div><img src={ruralCommunity} alt="Rural community members in a field" /></div><div><span className="eyebrow light">Looking ahead</span><h2>Our focus may grow with the needs we encounter.</h2><p>The Foundation may expand into additional social-impact areas over time. New initiatives will be added only as they are defined, resourced and ready to be delivered responsibly.</p><Link className="text-link light-link" to="/contact">Start a Conversation <span>↗</span></Link></div></div></section>

      <section className="v2-section v2-final-cta light v3-initiatives-final"><div className="container v2-final-card light-card" data-reveal><span className="eyebrow">Support work as it takes shape</span><h2>Help turn planned initiatives into practical action.</h2><p>As the Foundation develops, your support can help us turn programmes, partnerships and ideas into practical work on the ground.</p><div className="v2-actions"><DonateButton /><Link to="/contact" className="btn btn-outline">Contact Us</Link></div></div></section>
    </PageShell>
  );
}
