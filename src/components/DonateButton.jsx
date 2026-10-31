import { Link } from 'react-router-dom';

export default function DonateButton({
  children = 'Donate Now',
  className = 'btn btn-primary',
}) {
  return (
    <Link className={className} to="/donate">
      <span>{children}</span>
      <span className="btn-arrow" aria-hidden="true">↗</span>
    </Link>
  );
}
