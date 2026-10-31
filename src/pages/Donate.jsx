import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import PageMeta from '../components/PageMeta';
import { siteConfig } from '../config/site';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  pan: '',
  address: '',
  amount: '',
  wants80G: false,
  consent: false,
};

export default function Donate() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const update = (event) => {
    const { name, value, type, checked } = event.target;
    setForm((current) => ({ ...current, [name]: type === 'checkbox' ? checked : value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setMessage('');

    const payload = {
      'Full Name': form.name,
      'Email': form.email,
      'Phone': form.phone,
      'PAN / Applicable Identification': form.pan || 'Not provided',
      'Address': form.address,
      'Intended Donation Amount': form.amount ? `₹${form.amount}` : 'Not specified',
      '80G Documentation Requested': form.wants80G ? 'Yes' : 'No',
      '_subject': `Donation details — ${form.name}`,
      '_template': 'table',
      '_captcha': 'false',
    };

    try {
      const response = await fetch(siteConfig.donationFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Form delivery failed');

      setStatus('success');
      setMessage('Details received. Taking you to the secure payment page…');
      window.setTimeout(() => {
        window.location.href = siteConfig.donationUrl;
      }, 900);
    } catch (error) {
      setStatus('error');
      setMessage('We could not submit your details right now. Please try again or contact the Foundation before donating.');
    }
  };

  return (
    <PageShell className="v2-page donate-v3">
      <PageMeta title="Donate" description="Share your donor details and continue to the Sumit Bijarnia Foundation's official payment page." />

      <section className="v3-donate-hero">
        <div className="container v3-donate-hero-grid">
          <div data-stagger>
            <span className="eyebrow light">Support the mission</span>
            <h1>Turn support into<br/><em>meaningful action.</em></h1>
            <p>Share the details needed for accurate donation records and applicable documentation. Once submitted, you will continue to the Foundation’s secure payment page.</p>
            <div className="v3-donate-trust-row">
              <span>Section 8 Company</span><span>12AB Registered</span><span>80G Approved</span>
            </div>
          </div>
          <div className="v3-donate-note" data-reveal>
            <span className="eyebrow light">Before you continue</span>
            <h2>Your details help us keep donation records clear.</h2>
            <p>Full name, address and applicable identification may be needed for statutory reporting and tax documentation. Please enter accurate information.</p>
            <Link to="/registration-tax" className="text-link light-link">Registration & Tax Information <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="v2-section v3-donor-form-section">
        <div className="container v3-donor-layout">
          <div className="v3-donor-copy" data-reveal>
            <span className="eyebrow">Donor information</span>
            <h2>One short form.<br/>Then continue securely.</h2>
            <p>The information you provide will be sent to <strong>{siteConfig.email}</strong> for donation records and applicable documentation.</p>
            <div className="v3-donation-steps">
              <div><span>01</span><p>Share your donor details.</p></div>
              <div><span>02</span><p>Continue to the official payment page.</p></div>
              <div><span>03</span><p>Keep your receipt and applicable documentation.</p></div>
            </div>
          </div>

          <form className="v3-donor-form" onSubmit={submit} data-reveal>
            <div className="form-row">
              <label>Full Name<input required name="name" value={form.name} onChange={update} placeholder="Your full name" /></label>
              <label>Email<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" /></label>
            </div>
            <div className="form-row">
              <label>Phone<input required name="phone" value={form.phone} onChange={update} placeholder="Your phone number" /></label>
              <label>Donation Amount<input inputMode="numeric" name="amount" value={form.amount} onChange={update} placeholder="Amount in ₹" /></label>
            </div>
            <label>Address<textarea required name="address" value={form.address} onChange={update} rows="4" placeholder="Full postal address" /></label>
            <label>PAN / Applicable Identification<input name="pan" value={form.pan} onChange={update} placeholder="Required where applicable for tax documentation" /></label>
            <label className="v3-check-row"><input type="checkbox" name="wants80G" checked={form.wants80G} onChange={update} /><span>I may require applicable 80G donation documentation.</span></label>
            <label className="v3-check-row"><input required type="checkbox" name="consent" checked={form.consent} onChange={update} /><span>I confirm that the information provided is accurate and may be used for donation records, statutory reporting and applicable documentation.</span></label>

            <button className="btn btn-primary v3-donor-submit" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting…' : 'Continue to Donation'} <span className="btn-arrow">↗</span>
            </button>
            {message && <p className={`v3-form-status ${status}`}>{message}</p>}
            <p className="v2-privacy-note">Your information will be handled for donation-related purposes. <Link to="/privacy">Privacy Policy →</Link></p>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
