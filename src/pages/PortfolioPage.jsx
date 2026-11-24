import SeoHead from '../components/common/SeoHead';
import PortfolioSection from '../components/sections/PortfolioSection';
import PricingSection from '../components/sections/PricingSection';
import ContactSection from '../components/sections/ContactSection';
import { siteConfig } from '../config/siteConfig';

export default function PortfolioPage() {
  return (
    <>
      <SeoHead
        title={`Demo Portfolio | ${siteConfig.brandName}`}
        description="Explore interactive demonstration website concepts for fashion stores, restaurants, and educational institutions."
      />
      <div className="pt-6">
        <PortfolioSection />
        <PricingSection />
        <ContactSection />
      </div>
    </>
  );
}
