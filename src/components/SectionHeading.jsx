export default function SectionHeading({ eyebrow, title, copy, align = 'left', light = false }) {
  return (
    <div className={`section-heading ${align} ${light ? 'light' : ''}`} data-reveal>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}
