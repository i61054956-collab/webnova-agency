import SeoHead from '../components/common/SeoHead';
import IndustriesSection from '../components/sections/IndustriesSection';
import ServicesSection from '../components/sections/ServicesSection';
import ContactSection from '../components/sections/ContactSection';
import { siteConfig } from '../config/siteConfig';

export default function SolutionsPage() {
  return (
    <>
      <SeoHead
        title={`Industry Solutions | ${siteConfig.brandName}`}
        description="Tailored website and technology solutions for fashion stores, restaurants, schools, furniture showrooms, jewellery, clinics, retail, and service businesses."
      />
      <div className="pt-6">
        <IndustriesSection />
        <ServicesSection />
        <ContactSection />
      </div>
    </>
  );
}
