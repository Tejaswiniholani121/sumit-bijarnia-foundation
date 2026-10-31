import { Link } from 'react-router-dom';
import PageShell from '../components/PageShell';
import PageMeta from '../components/PageMeta';
import { siteConfig } from '../config/site';

const registrations = [
  ['Section 8 Company', 'The Sumit Bijarnia Foundation is incorporated as a Section 8 company under the Companies Act, 2013, for charitable and social-impact purposes.', `CIN: ${siteConfig.registration.cin}`],
  ['NPO DARPAN Registered', 'The Foundation is registered on the NGO DARPAN portal of NITI Aayog, Government of India.', `NPO DARPAN ID: ${siteConfig.registration.darpanId}`],
  ['12AB Registered', 'The Foundation is registered under the applicable provisions of the Income Tax Act relating to charitable institutions.', `URN No.: ${siteConfig.registration.urn12ab}`],
  ['80G Approved', 'The Foundation holds approval under Section 80G, subject to applicable conditions and requirements. Eligible donors may be able to claim a deduction for qualifying donations under Section 80G.', `URN No.: ${siteConfig.registration.urn80g}`],
];

const donorDetails = [
  ['Full Name', 'To correctly identify the donor and prepare applicable donation documentation.'],
  ['PAN / Applicable Identification', 'For statutory reporting and tax documentation, where required.'],
  ['Address', 'For applicable donor records and statutory reporting requirements.'],
  ['Donation Amount', 'To accurately record and report the contribution where required.'],
  ['Email / Contact Details', 'To send your receipt, applicable documentation and relevant communication.'],
];

const donationSteps = [
  ['01', 'You Donate', 'Your contribution is received through an authorised payment channel.'],
  ['02', 'You Receive a Receipt', 'A donation receipt is provided for your records.'],
  ['03', 'We Complete Applicable Reporting', 'Where required, qualifying donation details are reported through the applicable statutory process.'],
  ['04', 'You Receive Applicable Documentation', 'Where applicable, the prescribed Certificate of Donation in Form 114 is provided.'],
  ['05', 'You Claim Your Eligible Deduction', 'If your donation qualifies, you can use the applicable documentation when filing your income-tax return.'],
];

const faqs = [
  ['Can I claim a tax deduction for my donation?', 'Your donation may qualify for a deduction under Section 80G if the Foundation and the donation meet the applicable conditions. Please verify your eligibility and applicable tax provisions.'],
  ['Can I claim an 80G deduction under the new tax regime?', 'No. A deduction under Section 80G cannot be claimed under the new tax regime, subject to prevailing tax provisions.'],
  ['What tax document will I receive?', 'You will receive a donation receipt. Where applicable, the Foundation will also provide the prescribed Certificate of Donation in Form 114 following the applicable statutory reporting process.'],
  ['How do I claim my eligible 80G deduction?', 'If your donation qualifies, use the applicable donation details and documentation while filing your income-tax return. The deduction remains subject to the applicable provisions and your tax regime.'],
  ['Is there a limit on cash donations?', 'For Section 80G purposes, no deduction is allowed for donations made in cash exceeding ₹2,000.'],
  ['Can an NRI claim a deduction?', 'Eligibility depends on the donor’s circumstances and the applicable provisions of Indian tax law. Donors should refer to the prevailing Income Tax provisions or seek professional tax advice where required.'],
  ['Does the Foundation determine my tax liability?', 'No. The Foundation provides applicable donation documentation but does not determine an individual donor’s tax liability or guarantee a particular tax deduction.'],
];

export default function RegistrationTax() {
  return (
    <PageShell className="v2-page registration-v3">
      <PageMeta title="Registration & Tax Information" description="Registration, tax and donor documentation information for the Sumit Bijarnia Foundation." />

      <section className="v3-registration-hero">
        <div className="container" data-stagger>
          <span className="eyebrow light">Registration & Tax Information</span>
          <h1>Built with purpose.<br/><em>Committed to transparency.</em></h1>
          <p>The Sumit Bijarnia Foundation is incorporated as a Section 8 company under the Companies Act, 2013, for charitable and social-impact purposes.</p>
          <p>We believe donors should have clear information about who they are supporting, how contributions are recorded and what documentation they can expect.</p>
          <Link to="/promise" className="btn btn-light">Read Our Promise <span className="btn-arrow">↗</span></Link>
        </div>
      </section>

      <section className="v2-section v3-registration-section"><div className="container"><div className="v2-section-head" data-reveal><span className="eyebrow">Our registrations</span><h2>Clear credentials. Easy to verify.</h2></div><div className="v3-registration-grid" data-stagger>{registrations.map(([title, copy, id]) => <article key={title}><span>✓</span><h3>{title}</h3><p>{copy}</p><strong>{id}</strong></article>)}</div><p className="v3-tax-note">Please verify your eligibility and the applicable deduction conditions before claiming a tax benefit.</p></div></section>

      <section className="v2-section v3-donor-details"><div className="container v3-donor-details-grid"><div data-reveal><span className="eyebrow">Why do we ask for your details?</span><h2>To keep your donation properly recorded.</h2><p>Certain donor details may be required to maintain accurate records and complete applicable statutory reporting and tax documentation.</p><p>As per Indian Income Tax Department directives, a donor is required to add their Full Name, Address & PAN to claim tax exemption.</p></div><div className="v3-detail-list" data-stagger>{donorDetails.map(([title, copy]) => <div key={title}><h3>{title}</h3><p>{copy}</p></div>)}</div></div></section>

      <section className="v2-section v3-documentation-flow"><div className="container"><div className="v2-section-head" data-reveal><span className="eyebrow">From donation to documentation</span><h2>A clear path from contribution to records.</h2></div><div className="v3-doc-steps" data-stagger>{donationSteps.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="v3-tax-note">The Foundation provides applicable donation documentation. The donor is responsible for determining eligibility and claiming any applicable deduction.</p></div></section>

      <section className="v2-section v3-tax-deduction"><div className="container v3-tax-deduction-card" data-reveal><span className="eyebrow light">Can I claim a tax deduction?</span><h2>Your donation may be eligible under Section 80G.</h2><p>If your donation qualifies under the applicable provisions of Section 80G, you may be able to claim a tax deduction. The applicable deduction depends on the nature of the donation, the prevailing Income Tax provisions and the donor’s applicable tax regime.</p><strong>Important: A donation does not automatically qualify for a tax deduction.</strong></div></section>

      <section className="v2-section v3-tax-faq"><div className="container"><div className="v2-section-head" data-reveal><span className="eyebrow">Frequently asked questions</span><h2>Donation and tax documentation, explained simply.</h2></div><div className="v3-faq-grid" data-stagger>{faqs.map(([question, answer]) => <article key={question}><h3>{question}</h3><p>{answer}</p></article>)}</div></div></section>

      <section className="v2-section v3-verification"><div className="container v3-verification-grid"><div data-reveal><span className="eyebrow">Verification & documentation</span><h2>Official information, available clearly.</h2><p>The Foundation maintains its statutory registration and tax documentation in accordance with applicable requirements. Relevant registration details and identification numbers are provided above for transparency.</p><p>Supporting documents can be made available for verification upon request.</p><Link to="/contact" className="btn btn-primary">Contact Us <span className="btn-arrow">↗</span></Link></div><div className="v3-important-info" data-reveal><span className="eyebrow">Important information for donors</span><p>Please retain your donation receipt and any applicable tax documentation for your records.</p><p>Tax benefits are subject to applicable law, the eligibility of the donation and the donor’s applicable tax regime.</p><p>The Foundation cannot guarantee an individual tax deduction or determine your personal tax liability.</p><p>For the latest rules and reporting requirements, please refer to the official Income Tax Department or seek professional tax advice where required.</p></div></div></section>

      <section className="v3-official-info"><div className="container"><div><span>Official information</span><p><a href="https://www.incometax.gov.in/iec/foportal/" target="_blank" rel="noreferrer">Income Tax Department — Section 80G Information ↗</a> · <a href="https://www.incometax.gov.in/iec/foportal/" target="_blank" rel="noreferrer">Income Tax Department — Form 113 & Form 114 ↗</a></p></div><div><span>Last Updated: September 2026</span><strong>Section 8 Company · NPO DARPAN Registered · 12AB Registered · 80G Approved</strong><p>SUMIT BIJARNIA FOUNDATION · A Life Remembered. A Purpose Continued.</p></div></div></section>
    </PageShell>
  );
}
