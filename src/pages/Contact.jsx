import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import SocialIcons from '../components/SocialIcons';
import PageMeta from '../components/PageMeta';
import { siteConfig } from '../config/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General Enquiry', message: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.subject} - ${form.name || 'Website enquiry'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nReason: ${form.subject}\n\n${form.message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PageShell className="v2-page contact-v2">
      <PageMeta title="Contact Us" description="Contact the Sumit Bijarnia Foundation for general enquiries, collaborations, volunteering, partnerships or donation-related questions." />
      <section className="v2-section v2-contact-section"><div className="container v2-contact-grid"><div className="v2-contact-copy" data-stagger><span className="eyebrow">Contact us</span><h1>Let’s start with a conversation.</h1><p>For general enquiries, collaboration ideas, volunteering, partnerships or donation-related questions, reach the Foundation directly.</p><div className="v2-contact-details"><div><span>Email</span><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></div><div><span>Phone / WhatsApp</span><a href={siteConfig.whatsappUrl} target="_blank" rel="noreferrer">{siteConfig.phoneDisplay}</a></div><div><span>Address</span><p>{siteConfig.address}</p></div></div><div className="v2-social-block"><span>Find the Foundation online</span><SocialIcons /></div></div><form className="v2-contact-form" onSubmit={submit} data-reveal><span className="eyebrow">Get in touch</span><div className="form-row"><label>Name<input required name="name" value={form.name} onChange={update} placeholder="Your name" /></label><label>Email<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com" /></label></div><div className="form-row"><label>Phone<input name="phone" value={form.phone} onChange={update} placeholder="Your phone number" /></label><label>Reason<select name="subject" value={form.subject} onChange={update}><option>General Enquiry</option><option>Partnership</option><option>Volunteering</option><option>Donation</option><option>Idea</option><option>Other</option></select></label></div><label>Message<textarea required name="message" value={form.message} onChange={update} rows="7" placeholder="Tell us how we can help." /></label><button className="btn btn-primary" type="submit">Send Enquiry <span className="btn-arrow">↗</span></button><p className="v2-privacy-note">We respect your privacy. Your information will only be used to respond to your enquiry. <Link to="/privacy">Privacy Policy →</Link></p></form></div></section>
    </PageShell>
  );
}
