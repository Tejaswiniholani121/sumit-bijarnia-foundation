import PageShell from '../components/PageShell';
import PageMeta from '../components/PageMeta';
import { siteConfig } from '../config/site';

export default function Terms() {
  return (
    <PageShell className="v2-page">
      <PageMeta title="Terms of Use" description="Terms of Use for the Sumit Bijarnia Foundation website." />
      <section className="v2-section v2-legal-page"><article className="v2-legal-wrap">
        <span className="eyebrow">Terms of Use</span><h1>Website Terms of Use</h1><p>Last Updated: 12 October 2026</p>
        <p>These Terms of Use apply to your use of the Sumit Bijarnia Foundation website. By using this website, you agree to use it lawfully, responsibly and in a manner that does not interfere with the rights of others or the operation of the website.</p>
        <hr/><h2>1. About this website</h2><p>This website provides information about the Foundation, its purpose, evolving areas of work, ways to support the Foundation and official contact channels. Programmes and initiatives may develop over time as they are defined, resourced and implemented.</p>
        <h2>2. Website information</h2><p>We aim to keep website information clear and current. However, content may be updated as the Foundation’s programmes, registrations, processes, partnerships and activities evolve. Nothing on this website should be treated as professional legal, medical, financial or tax advice.</p>
        <h2>3. Donations</h2><p>Donations may be processed through an authorised third-party payment provider, including the Foundation’s official third-party donation page. The payment provider’s terms and privacy practices may also apply to the transaction.</p><p>Where applicable, donation receipts or tax documentation will be provided in accordance with the Foundation’s processes and applicable requirements. Donors are responsible for providing accurate information where documentation is required.</p>
        <h2>4. External links</h2><p>This website may link to payment services, social-media platforms or other third-party websites. The Foundation does not control those third-party services and is not responsible for their content, availability, security or privacy practices.</p>
        <h2>5. Intellectual property</h2><p>Unless otherwise stated, website content, branding, text, graphics and original materials associated with the Sumit Bijarnia Foundation are intended for the Foundation’s use. Please do not copy, reproduce or commercially use Foundation materials without appropriate permission.</p>
        <h2>6. Acceptable use</h2><p>You must not attempt to disrupt the website, gain unauthorised access, introduce malicious code, misuse contact channels, impersonate another person or use the website for unlawful or fraudulent purposes.</p>
        <h2>7. Privacy</h2><p>Personal information submitted through this website is handled in accordance with the Foundation’s Privacy Policy and applicable processes.</p>
        <h2>8. Changes to these terms</h2><p>These Terms of Use may be updated from time to time to reflect changes in the website, donation facilities, Foundation activities or applicable requirements. The latest version will be published on this page.</p>
        <h2>9. Contact</h2><p>For questions about these terms, contact <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> or write to the Foundation at {siteConfig.address}.</p>
      </article></section>
    </PageShell>
  );
}
