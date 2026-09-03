import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import PageShell from '../components/PageShell';
import bareLogo from '../assets/images/bare-chemistry-logo.png';
import sumit from '../assets/images/sumit-bijarnia.jpeg';
import rahul from '../assets/images/rahul-bijarnia.jpeg';
import dimple from '../assets/images/dimple-bijarnia.jpeg';
import diksha from '../assets/images/diksha-bijarnia.jpeg';
import { siteConfig } from '../config/site';
import PageMeta from '../components/PageMeta';

gsap.registerPlugin(ScrollTrigger);

const people = [
  { name: 'Sumit Bijarnia', image: sumit },
  { name: 'Rahul Bijarnia', image: rahul },
  { name: 'Dimple Bijarnia', image: dimple },
  { name: 'Diksha Bijarnia', image: diksha }
];

export default function Commitment() {
  const five = useRef(null);
  useLayoutEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(five.current, { scale: .62, opacity: 0, filter: 'blur(12px)' }, {
        scale: 1, opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out',
        scrollTrigger: { trigger: five.current, start: 'top 82%', once: true }
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <PageShell className="commitment-page"><PageMeta title="Our Commitment" description="Learn about Bare Chemistry's 5% profit commitment to the work of the Sumit Bijarnia Foundation." />
      <section className="bc-hero">
        <div className="bc-green-orb orb-a"></div><div className="bc-green-orb orb-b"></div>
        <div className="container bc-hero-grid">
          <div data-stagger><span className="eyebrow bc-kicker">Our commitment</span><h1>Two journeys.<br/><span>One larger purpose.</span></h1><p>The relationship between Bare Chemistry and the Sumit Bijarnia Foundation is rooted in continuity - carrying a shared journey forward through social impact.</p></div>
          <div className="bc-logo-stage" data-mask><img src={bareLogo} alt="Bare Chemistry" /><div className="bc-logo-glow"></div></div>
        </div>
      </section>

      <section className="founders-section section-pad">
        <div className="container">
          <div className="founders-head" data-reveal>

  <div className="founders-intro-visual">
    <div className="founders-logo-box">
      <img src={bareLogo} alt="Bare Chemistry" />
    </div>

    <span>Bare Chemistry</span>
  </div>

  <div className="founders-intro-copy">
    <span className="eyebrow">
      The people behind the journey
    </span>

    <h2>
      A shared beginning.<br />
      A commitment that continues.
    </h2>

    <p>
      Sumit Bijarnia was a beloved founding member of Bare Chemistry.
      The Foundation’s connection to the brand is carried forward
      alongside Rahul Bijarnia, Dimple Bijarnia and Diksha Bijarnia.
    </p>
  </div>

</div>
          <div className="editorial-people" data-stagger>
            {people.map((person, index) => (
              <figure className={`person-tile person-${index+1}`} key={person.name}>
                <div className="person-image"><img src={person.image} alt={person.name} /></div>
                <figcaption><span>0{index+1}</span><strong>{person.name}</strong></figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="five-section section-pad">
        <div className="container five-grid">
          <div className="five-sticky"><div className="five-number" ref={five}>5<span>%</span></div><div className="five-glow"></div></div>
          <div className="five-story">
            <div className="five-chapter" data-reveal><span className="eyebrow light">A measurable commitment</span><h2>Part of every profit story can become part of a social-impact story.</h2><p>{siteConfig.bareChemistryCommitment}</p></div>
            <div className="five-chapter" data-reveal><span className="chapter-no">01</span><h3>Skin health & wellbeing</h3><p>Supporting awareness, preventive care and access-focused programmes as the Foundation develops its work.</p></div>
            <div className="five-chapter" data-reveal><span className="chapter-no">02</span><h3>Healthcare</h3><p>Helping create space for community health awareness and responsible need-based support.</p></div>
            <div className="five-chapter" data-reveal><span className="chapter-no">03</span><h3>Education & community</h3><p>Enabling future initiatives that improve access to learning, opportunity and everyday wellbeing.</p></div>
          </div>
        </div>
      </section>

      <section className="bridge-section section-pad-sm"><div className="container bridge-grid"><div className="bridge-word">BUSINESS</div><div className="bridge-line"><span></span><strong>TO</strong><span></span></div><div className="bridge-word">PURPOSE</div></div></section>

      <section className="closing-cta section-pad"><div className="container closing-card" data-reveal><span className="eyebrow">See where the commitment can go</span><h2>Purpose becomes real through the work it enables.</h2><p>Explore the Foundation’s evolving areas of action and the communities they aim to serve.</p><div className="closing-actions"><Link to="/initiatives" className="btn btn-primary">Explore Initiatives</Link><Link to="/support" className="btn btn-outline">Support Us</Link></div></div></section>
    </PageShell>
  );
}