import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import DonateButton from '../components/DonateButton';
import PageMeta from '../components/PageMeta';
import sumitPhoto from '../assets/images/sumit-bijarnia.jpeg';
import sumitAlt from '../assets/images/sumit-alternate.png';
import ruralCommunity from '../assets/images/rural-community.jpeg';
import healthcareCommunity from '../assets/images/healthcare-community.png';
import { principles } from '../data/content';

export default function About() {
  return (
    <PageShell className="v2-page about-v2">
      <PageMeta title="About Sumit" description="The story behind the Sumit Bijarnia Foundation and the purpose carried forward in Sumit Bijarnia's name." />

      <section className="v2-inner-hero v2-about-hero">
        <div className="container v2-about-hero-grid">
          <div data-stagger><span className="eyebrow">The story behind the Foundation</span><h1>The person behind<br/><em>the purpose.</em></h1><p>Sumit Bijarnia was a founding member of Bare Chemistry and an important part of its early journey. His contribution went beyond a single role—he was involved wherever the young business needed support, helping turn an idea into something tangible and buildable.</p></div>
          <div className="v2-about-photo" data-mask><img src={sumitPhoto} alt="Sumit Bijarnia" /><div className="v2-about-photo-caption"><strong>SUMIT BIJARNIA</strong><span>1997–2026</span><p>Founding Member of Bare Chemistry</p></div></div>
        </div>
      </section>

      <section className="v2-section v2-story-band v3-story-band">
        <div className="container v2-story-stack v3-story-stack">
          <article data-reveal>
            <div className="v3-story-title"><span className="eyebrow">What he saw</span><h2>A need beyond the product.</h2></div>
            <div className="v3-story-content"><p>Through his market interactions, Sumit became increasingly aware of the gap in skincare awareness and access across rural communities. Many people had fewer choices, less information and limited access to skincare that was simple, purposeful and easy to trust.</p><p>For him, this was more than a gap in the market. It was a need worth addressing. Those observations became part of the early thinking behind Bare Chemistry: <strong>understand real needs, simplify skincare and make better skin health more accessible.</strong></p></div>
          </article>

          <div className="v3-story-photo-pair" data-stagger>
            <figure><img src={ruralCommunity} alt="People in a rural farming community" /></figure>
            <figure><img src={healthcareCommunity} alt="Doctor providing care to a child with a parent" /></figure>
          </div>

          <article data-reveal>
            <div className="v3-story-title"><span className="eyebrow">A thought beyond the business</span><h2>Bare Chemistry could contribute beyond its products.</h2></div>
            <div className="v3-story-content"><p>Sumit had also been thinking about how Bare Chemistry could contribute beyond its products. He envisioned creating a Foundation that could support skincare awareness and access, along with other areas where support could make a difference.</p><p>His thought at the time was to contribute <strong>1% of Bare Chemistry’s sales</strong> towards this purpose. The idea had not yet taken shape when he passed away.</p></div>
          </article>

          <article className="v3-bare-thinking" data-reveal>
            <div className="v3-story-title"><span className="eyebrow">The thinking behind Bare Chemistry</span><h2>A simpler way to think about skincare.</h2></div>
            <div className="v3-story-content"><p>Some of the observations and ideas from those early days became part of a broader way of thinking about skincare: it should be easier to understand, purposeful in what it contains and honest in what it promises.</p><div className="v2-value-grid"><div><strong>Skin First</strong><p>Long-term skin health, barrier protection and comfort come before trends and unnecessary complexity.</p></div><div><strong>Simplicity</strong><p>Keep skincare easy to understand, with purposeful formulations and no unnecessary overload.</p></div><div><strong>Purpose</strong><p>Choose ingredients for a clear reason—to support the product, the skin or the experience.</p></div><div><strong>Trust</strong><p>Be transparent about what a product is designed to do, set realistic expectations and deliver what is promised.</p></div></div><p className="v2-signoff">Inspired by simplicity · Built for healthy skin · Rooted in trust · Committed to giving back</p></div>
          </article>

          <article data-reveal>
            <div className="v3-story-title"><span className="eyebrow">The person behind the work</span><h2>A person who cared deeply for others.</h2></div>
            <div className="v3-story-content"><p>Beyond his work, Sumit was known for caring deeply for others. He was someone people could turn to, and he had a deep respect for his elders. For those who knew him, kindness, respect and being there for others were simply part of who he was.</p><p><strong>That spirit of care and respect continues to influence the way the Foundation works.</strong></p></div>
          </article>
        </div>
      </section>

      <section className="v2-section v2-foundation-story">
        <div className="container v2-foundation-grid">
          <div data-reveal><span className="eyebrow light">The Foundation</span><h2>From an unfinished idea to a purpose carried forward.</h2><p>Following Sumit’s passing, the Sumit Bijarnia Foundation was established to honour his life, his contribution to Bare Chemistry and the values that shaped his journey.</p><p>The Foundation carries forward the thought he had once expressed—to use a part of Bare Chemistry’s success to support work that can help people, beginning with the areas he cared about and extending to other meaningful social needs.</p></div>
          <div className="v2-five-story" data-reveal><span>From</span><strong>1%</strong><p>an early idea around giving back</p><span>to</span><strong>5%</strong><p>of every Bare Chemistry sale supporting the Foundation.</p></div>
        </div>
        <div className="container v2-foundation-copy" data-reveal><p>Today, the Foundation’s work extends across <strong>skin health, healthcare, education, rural development and community well-being.</strong> The Foundation is building its own path—listening to real needs, developing thoughtfully and supporting initiatives where practical action can make a meaningful difference.</p></div>
      </section>

      <section className="v2-section v2-mission-section">
        <div className="container v2-mission-grid" data-stagger><article><span className="eyebrow">Mission</span><h2>Turn purpose into action that improves everyday lives.</h2><p>We work across skin health, healthcare, education, rural development and community well-being, with dignity, accessibility and practical action at the centre.</p></article><article><span className="eyebrow">Vision</span><h2>A future where care and opportunity are easier to reach.</h2><p>We want to build work that remains rooted in real needs, develops responsibly and creates meaningful, lasting impact.</p></article></div>
      </section>

      <section className="v2-section v2-principles-section">
        <div className="container"><div className="v2-section-head" data-reveal><span className="eyebrow">How we want to work</span><h2>Guided by a few simple principles.</h2></div><div className="v2-principles" data-stagger>{principles.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><div className="v2-mantra-dark">CARE · PURPOSE · ACTION · IMPACT</div></div>
      </section>

      <section className="v2-section v2-about-close">
        <div className="container v2-about-close-card" data-reveal><div className="v2-about-close-photo"><img src={sumitAlt} alt="Sumit Bijarnia" /></div><div><span className="eyebrow light">Remembering him through the work we carry forward</span><h2 className="v3-close-lines"><span>In his name.</span><span>Through action.</span><span>For lives that can be changed.</span></h2><div className="v2-actions"><Link to="/initiatives" className="btn btn-light">Explore Our Work</Link><DonateButton className="btn btn-ghost-light">Support the Mission</DonateButton></div></div></div>
      </section>
    </PageShell>
  );
}
