import { siteConfig } from '../config/site';

const Icon = ({ type }) => {
  if (type === 'instagram') return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.7" r="1.15" fill="currentColor" stroke="none"/></svg>
  );
  if (type === 'facebook') return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.7 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.4-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8h3.4Z" fill="currentColor" stroke="none"/></svg>
  );
  if (type === 'youtube') return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 8.1a3 3 0 0 0-2.1-2.1C17 5.5 12 5.5 12 5.5s-5 0-6.9.5A3 3 0 0 0 3 8.1 31 31 0 0 0 2.5 12 31 31 0 0 0 3 15.9 3 3 0 0 0 5.1 18c1.9.5 6.9.5 6.9.5s5 0 6.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-3.9 31 31 0 0 0-.5-3.9ZM10.1 15V9l5.1 3-5.1 3Z" fill="currentColor" stroke="none"/></svg>
  );
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.6 8.1H3.4V20h3.2V8.1ZM5 3a1.9 1.9 0 1 0 0 3.8A1.9 1.9 0 0 0 5 3Zm4.2 5.1V20h3.2v-5.9c0-1.6.3-3.1 2.3-3.1s2 1.8 2 3.2V20H20v-6.4c0-3.2-.7-5.7-4.5-5.7-1.8 0-3 1-3.5 1.9h-.1V8.1H9.2Z" fill="currentColor" stroke="none"/></svg>
  );
};

export default function SocialIcons({ variant = 'dark', className = '' }) {
  return (
    <div className={`social-row ${variant} ${className}`} aria-label="Social media">
      {Object.entries(siteConfig.socials).map(([key, href]) => (
        <a key={key} className="social-icon" href={href} target="_blank" rel="noreferrer" aria-label={`Open ${key}`}>
          <Icon type={key} />
        </a>
      ))}
    </div>
  );
}
