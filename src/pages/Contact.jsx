import { useState } from 'react';
import PageShell from '../components/PageShell';
import SocialIcons from '../components/SocialIcons';
import { siteConfig } from '../config/site';
import PageMeta from '../components/PageMeta';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: 'General enquiry', message: '' });
  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${form.subject} - ${form.name || 'Website enquiry'}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <PageShell className="contact-page"><PageMeta title="Contact Us" description="Contact the Sumit Bijarnia Foundation for enquiries, partnerships, volunteering and donation questions." />
      <section className="contact-hero section-pad"><div className="container contact-grid"><div className="contact-copy" data-stagger><span className="eyebrow">Contact us</span><h1>Let’s start with a conversation.</h1><p>For general enquiries, collaboration ideas, future volunteering or donation-related questions, reach the Foundation directly.</p><div className="contact-direct"><a href={`mailto:${siteConfig.email}`}><span>Email</span><strong>{siteConfig.email}</strong><b>↗</b></a><a href={`tel:${siteConfig.phoneHref}`}><span>Phone</span><strong>{siteConfig.phoneDisplay}</strong><b>↗</b></a></div><div className="contact-social"><span>Find the Foundation online</span><SocialIcons /></div></div><form className="contact-form" onSubmit={submit} data-reveal><div className="form-row"><label>Name<input required name="name" value={form.name} onChange={update} placeholder="Your name" /></label><label>Email<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@email.com" /></label></div><div className="form-row"><label>Phone<input name="phone" value={form.phone} onChange={update} placeholder="Optional" /></label><label>Reason<select name="subject" value={form.subject} onChange={update}><option>General enquiry</option><option>Partnership</option><option>Volunteer interest</option><option>Donation query</option></select></label></div><label>Message<textarea required name="message" value={form.message} onChange={update} rows="7" placeholder="Tell us how we can help..."></textarea></label><button className="btn btn-primary" type="submit"><span>Send Enquiry</span><span className="btn-arrow">↗</span></button><small>This opens your default email app with the enquiry pre-filled. A direct form service can be connected later if required.</small></form></div></section>
    </PageShell>
  );
}