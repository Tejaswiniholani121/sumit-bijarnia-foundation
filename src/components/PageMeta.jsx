import { useEffect } from 'react';

export default function PageMeta({ title, description }) {
  useEffect(() => {
    const full = title ? `${title} | Sumit Bijarnia Foundation` : 'Sumit Bijarnia Foundation';
    document.title = full;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute('content', description);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogTitle) ogTitle.setAttribute('content', full);
    if (ogDesc && description) ogDesc.setAttribute('content', description);
  }, [title, description]);
  return null;
}
