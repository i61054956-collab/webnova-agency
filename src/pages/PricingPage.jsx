import SeoHead from '../components/common/SeoHead';
import PricingSection from '../components/sections/PricingSection';
import ProcessSection from '../components/sections/ProcessSection';
import ContactSection from '../components/sections/ContactSection';
import { siteConfig } from '../config/siteConfig';

export default function PricingPage() {
  return (
    <>
      <SeoHead
        title={`Pricing | ${siteConfig.brandName}`}
        description="Transparent starting website and e-commerce estimates starting from ₹4,999 for growing businesses in India."
      />
      <div className="pt-6">
        <PricingSection />
        <ProcessSection />
        <ContactSection />
      </div>
    </>
  );
}
