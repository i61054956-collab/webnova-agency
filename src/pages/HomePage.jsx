import SeoHead from '../components/common/SeoHead';
import HeroSection from '../components/sections/HeroSection';
import TrustSection from '../components/sections/TrustSection';
import ServicesSection from '../components/sections/ServicesSection';
import IndustriesSection from '../components/sections/IndustriesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import PricingSection from '../components/sections/PricingSection';
import ProcessSection from '../components/sections/ProcessSection';
import AboutSection from '../components/sections/AboutSection';
import ContactSection from '../components/sections/ContactSection';
import { siteConfig } from '../config/siteConfig';

export default function HomePage() {
  return (
    <>
      <SeoHead
        title={`${siteConfig.brandName} — ${siteConfig.tagline} | AI-Powered Digital Agency`}
        description="Transform your business ideas into modern digital experiences with web development, e-commerce, custom web apps, and AI automation in Tamil Nadu, Puducherry, and across India."
      />
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <IndustriesSection />
      <PortfolioSection />
      <PricingSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
    </>
  );
}
