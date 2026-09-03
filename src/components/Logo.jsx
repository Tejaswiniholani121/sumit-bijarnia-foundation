import logo from '../assets/images/foundation-logo-tight.png';

export default function Logo({ className = '' }) {
  return <img className={`foundation-logo ${className}`} src={logo} alt="Sumit Bijarnia Foundation" />;
}
