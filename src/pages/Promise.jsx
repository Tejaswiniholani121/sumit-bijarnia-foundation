import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import PageMeta from '../components/PageMeta';
import { promisePillars } from '../data/content';


export default function PromisePage() {
  return (
    <PageShell className="v2-page promise-v2">
      <PageMeta title="Our Promise" description="Built on trust and guided by purpose: the principles that shape how the Sumit Bijarnia Foundation works." />
      <section className="v2-inner-hero v2-promise-hero"><div className="container" data-stagger><span className="eyebrow light">Our promise</span><h1>Built on trust.<br/><em>Guided by purpose.</em></h1><p>We believe trust is built through transparency, thoughtful action and accountability. These promises guide how we work, how we operate and how we build the Foundation—today and as it grows.</p></div></section>

      <section className="v2-section v2-promise-body"><div className="container">{promisePillars.map((pillar) => <article className="v2-promise-pillar" key={pillar.number}><div className="v2-promise-intro" data-reveal><span className="v2-promise-number">{pillar.number}</span><div><span className="eyebrow">{pillar.title}</span><h2>{pillar.intro}</h2><p>{pillar.copy}</p></div></div><div className="v2-promise-list" data-stagger>{pillar.promises.map(([title,copy], index) => <div key={title}><span>{String(index + 1).padStart(2,'0')}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></article>)}</div></section>

      <section className="v2-section v2-impact-honesty"><div className="container v2-honesty-card" data-reveal><span className="eyebrow light">We will be honest about impact</span><h2>We will not claim impact before it has been created and measured.</h2><p>As the Foundation grows, we will share meaningful updates that help supporters understand where their support goes, what it enables and what difference it makes.</p><Link to="/initiatives" className="btn btn-light">View Our Initiatives</Link></div></section>

      <section className="v2-section v2-promise-close"><div className="container" data-reveal><div className="v2-mantra-dark">CARE · PURPOSE · ACTION · IMPACT</div><h2>Our promise is simple:</h2><p>To work with transparency. Act with purpose. Use resources responsibly. And remain honest about the impact we create.</p><strong>SUMIT BIJARNIA FOUNDATION</strong><span>A Life Remembered. A Purpose Continued.</span></div></section>
    </PageShell>
  );
}
