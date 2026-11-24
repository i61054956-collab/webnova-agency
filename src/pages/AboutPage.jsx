import SeoHead from '../components/common/SeoHead';
import AboutSection from '../components/sections/AboutSection';
import TrustSection from '../components/sections/TrustSection';
import ProcessSection from '../components/sections/ProcessSection';
import ContactSection from '../components/sections/ContactSection';
import { siteConfig } from '../config/siteConfig';

export default function AboutPage() {
  return (
    <>
      <SeoHead
        title={`About Us | ${siteConfig.brandName}`}
        description="Learn about our growing technology startup focused on helping businesses establish and improve their digital presence."
      />
      <div className="pt-6">
        <AboutSection />
        <TrustSection />
        <ProcessSection />
        <ContactSection />
      </div>
    </>
  );
}
