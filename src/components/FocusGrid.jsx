import { focusAreas } from '../data/content';

export default function FocusGrid({ showCopy = true, className = '' }) {
  return (
    <div className={`v2-focus-grid ${className}`} data-stagger>
      {focusAreas.map((area) => (
        <article className="v2-focus-card" key={area.number}>
          <div className="v2-focus-image"><img src={area.image} alt={area.alt} loading="lazy" /></div>
          <div className="v2-focus-meta"><span>{area.number}</span><strong>{area.title}</strong></div>
          {showCopy && <p>{area.short}</p>}
        </article>
      ))}
    </div>
  );
}
