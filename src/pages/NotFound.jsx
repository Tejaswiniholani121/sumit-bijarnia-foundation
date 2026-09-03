import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import PageMeta from '../components/PageMeta';
export default function NotFound(){return <PageShell><PageMeta title="Page Not Found" description="The page you requested could not be found." /><section className="not-found"><div><span className="eyebrow">404</span><h1>This page has wandered off.</h1><p>Let’s take you back to the Foundation.</p><Link to="/" className="btn btn-primary">Back Home</Link></div></section></PageShell>}