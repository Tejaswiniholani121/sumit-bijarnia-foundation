import PageShell from '../components/PageShell';
import PageMeta from '../components/PageMeta';
import privacyPolicy from '../content/privacy-policy.md?raw';

function clean(text) {
  return text
    .replace(/\\&#xA;/g, ' ')
    .replace(/&#x20;/g, ' ')
    .replace(/\\@/g, '@')
    .replace(/\\\./g, '.')
    .replace(/\*\*/g, '')
    .trim();
}

function PrivacyContent() {
  const lines = privacyPolicy.split(/\r?\n/).map(clean).filter(Boolean);
  return lines.map((rawLine, index) => {
    const line = rawLine.replace(/^\\\*/, '*');
    if (line === '⸻') return <hr key={index} />;
    if (line === 'PRIVACY POLICY') return <span className="eyebrow" key={index}>Privacy Policy</span>;
    if (/^\d+\.\s/.test(line)) return <h2 key={index}>{line}</h2>;
    if (/^[A-Z][A-Z\s&/–—-]{3,}$/.test(line) && line.length < 90) return <h3 key={index}>{line}</h3>;
    if (line.startsWith('* ')) return <p className="legal-bullet" key={index}>{line.slice(2).replace(/^\*|\*$/g, '')}</p>;
    return <p key={index}>{line.replace(/^\*|\*$/g, '')}</p>;
  });
}

export default function Privacy() {
  return <PageShell className="v2-page"><PageMeta title="Privacy Policy" description="Privacy Policy for the Sumit Bijarnia Foundation website." /><section className="v2-section v2-legal-page"><article className="v2-legal-wrap"><PrivacyContent /></article></section></PageShell>;
}
