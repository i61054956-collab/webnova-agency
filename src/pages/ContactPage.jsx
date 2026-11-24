import SeoHead from '../components/common/SeoHead';
import ContactSection from '../components/sections/ContactSection';
import { siteConfig } from '../config/siteConfig';

export default function ContactPage() {
  return (
    <>
      <SeoHead
        title={`Contact | ${siteConfig.brandName}`}
        description="Start your website or custom digital project with us. Reach out via our project form or WhatsApp."
      />
      <div className="pt-6">
        <ContactSection />
      </div>
    </>
  );
}
