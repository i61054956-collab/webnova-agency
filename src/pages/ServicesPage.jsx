import SeoHead from '../components/common/SeoHead';
import ServicesSection from '../components/sections/ServicesSection';
import ProcessSection from '../components/sections/ProcessSection';
import ContactSection from '../components/sections/ContactSection';
import { siteConfig } from '../config/siteConfig';

export default function ServicesPage() {
  return (
    <>
      <SeoHead
        title={`Services | ${siteConfig.brandName}`}
        description="Business websites, e-commerce stores, custom web applications, AI automation, website redesign, and ongoing maintenance."
      />
      <div className="pt-6">
        <ServicesSection />
        <ProcessSection />
        <ContactSection />
      </div>
    </>
  );
}
