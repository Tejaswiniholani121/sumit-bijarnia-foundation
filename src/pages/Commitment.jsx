import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import DonateButton from '../components/DonateButton';
import PageMeta from '../components/PageMeta';
import bareLogo from '../assets/images/bare-chemistry-logo-transparent.png';
import foundationLogo from '../assets/images/foundation-logo-transparent.png';
import sumit from '../assets/images/sumit-founder-updated.png';
import rahul from '../assets/images/rahul-founder-updated.png';
import dimple from '../assets/images/dimple-founder-updated.png';
import diksha from '../assets/images/deeksha-founder-updated.png';
import { siteConfig } from '../config/site';

const founders = [
  { name: 'Sumit Bijarnia', role: 'Founding Member', image: sumit },
  { name: 'Rahul Bijarnia', role: 'Founding Member', image: rahul },
  { name: 'Dimple Bijarnia', role: 'Co-Founder', image: dimple },
  { name: 'Deeksha Bijarnia', role: 'Co-Founder', image: diksha }
];

export default function Commitment() {
  return (
    <PageShell className="v2-page commitment-v2">
      <PageMeta title="Our Commitment" description="Care that goes beyond skin: 5% of every Bare Chemistry sale supports the Sumit Bijarnia Foundation." />

      <section className="v2-commitment-hero">
        <div className="v2-bc-glow" />
        <div className="container v2-commitment-hero-grid">
          <div data-stagger><span className="eyebrow bc-kicker">Our commitment</span><h1>Care that goes<br/><em>beyond skin.</em></h1><p>Bare Chemistry was built around a simple belief: care should be purposeful, considered and honest. Today, that belief extends beyond the product through the work of the Sumit Bijarnia Foundation.</p></div>
          <div className="v2-bc-logo-stage" data-mask><img src={bareLogo} alt="Bare Chemistry" /></div>
        </div>
      </section>

      <section className="v2-section v2-bare-belief"><div className="container v2-bare-belief-grid"><div data-reveal><span className="eyebrow">The Bare belief</span><h2>Skincare should work with your skin, not against it.</h2><p>Bare Chemistry believes in keeping skincare purposeful—understanding what skin needs, choosing ingredients with intention and avoiding unnecessary complexity.</p></div><div className="v2-belief-words" data-stagger><article><strong>Barrier First.</strong><p>Long-term skin health and barrier protection before unnecessary complexity.</p></article><article><strong>Simple Always.</strong><p>Every ingredient has a purpose. So every formulation does too.</p></article></div></div></section>

      <section className="v2-section v2-founder-section"><div className="container"><div className="v2-section-head" data-reveal><span className="eyebrow">The people behind the journey</span><h2>A shared beginning. A purpose that continues.</h2><p>Sumit Bijarnia was a founding member of Bare Chemistry and an important part of its early journey. The Foundation carries forward his connection to the brand and the values that shaped those formative years.</p><p>Bare Chemistry continues its work in skincare. The Sumit Bijarnia Foundation carries that spirit of care further into social impact.</p></div><div className="v2-founder-grid" data-stagger>{founders.map((person, index) => <figure key={person.name}><div className="v2-founder-photo"><img src={person.image} alt={person.name} /></div><figcaption><span>0{index + 1}</span><strong>{person.name}</strong><p>{person.role}</p></figcaption></figure>)}</div></div></section>

      <section className="v2-section v2-care-beyond"><div className="container v2-care-card" data-reveal><p>CARE SHOULD GO BEYOND SKIN.</p><h2>Every ingredient has a purpose.<br/>So does every purchase.</h2><span>Because caring for skin should also mean caring beyond ourselves.</span></div></section>

      <section className="v2-section v2-measurable"><div className="container v2-measurable-grid"><div className="v2-big-five" data-reveal>5<span>%</span></div><div data-reveal><span className="eyebrow light">A measurable commitment</span><h2>{siteConfig.bareChemistryCommitment}</h2><p>Your purchase helps support the Foundation as it develops initiatives across skin health, healthcare, education, rural development and community well-being.</p></div></div></section>

      <section className="v2-section v2-purchase-purpose"><div className="container v2-split-heading"><div data-reveal><span className="eyebrow">From purchase to purpose</span><h2>A little care can go beyond the product.</h2></div><div data-reveal><p>The same thinking that guides what goes into a Bare Chemistry product guides what we hope every purchase can make possible beyond it.</p><p>Through this commitment, Bare Chemistry helps support the Foundation as it develops thoughtful programmes, partnerships and on-ground initiatives.</p><Link className="text-link" to="/initiatives">Explore Our Initiatives <span>↗</span></Link></div></div></section>

      <section className="v2-section v2-approach-card-section"><div className="container v2-approach-card" data-reveal><span className="eyebrow">Our approach</span><h2>Purposeful. Responsible. Transparent.</h2><p>The Foundation is at the beginning of its journey. Support from Bare Chemistry will help create the foundation for programmes and partnerships as they are responsibly developed.</p><p>We aim to use resources thoughtfully, respond to genuine needs and communicate clearly about the work we undertake.</p></div></section>

      <section className="v3-relationship-section"><div className="container"><div className="v2-relationship-card v3-relationship-card" data-reveal><div className="v2-brand-lockup large"><img src={bareLogo} alt="Bare Chemistry" className="v2-bare-logo"/><span className="v2-lockup-divider v3-logo-line"/><img src={foundationLogo} alt="Sumit Bijarnia Foundation" className="v2-foundation-lockup"/></div><div><h2>Care doesn’t stop at the product.</h2><h3>It can become part of something bigger.</h3><p>Every purchase creates an opportunity to extend care a little further—supporting the work of the Sumit Bijarnia Foundation as it turns thoughtful ideas into practical action.</p><div className="v2-actions"><Link to="/initiatives" className="btn btn-light">Explore Our Initiatives</Link><DonateButton className="btn btn-ghost-light">Support the Foundation</DonateButton></div></div></div></div></section>
    </PageShell>
  );
}
