import { Link } from 'react-router-dom';
import { Mail, MapPin, Phone, MessageSquare } from 'lucide-react';
import BrandLogo from '../common/BrandLogo';
import { siteConfig } from '../../config/siteConfig';

export default function Footer() {
  const year = new Date().getFullYear();

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    `Hello ${siteConfig.brandName}, I would like to discuss a website or digital project.`
  )}`;

  return (
    <footer className="relative border-t border-snow/10 bg-[#060A14]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand summary */}
          <div className="space-y-4">
            <BrandLogo showTagline />
            <p className="text-sm leading-relaxed text-softgrey">
              An AI-powered digital agency and web development startup helping small and medium-sized
              businesses across Tamil Nadu, Puducherry, and India build a credible, modern digital presence.
            </p>
            <p className="font-mono text-xs text-electric/90">
              {siteConfig.nationwideNote}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-snow">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-softgrey">
              <li><Link to="/" className="transition hover:text-electric">Home</Link></li>
              <li><Link to="/services" className="transition hover:text-electric">Services</Link></li>
              <li><Link to="/solutions" className="transition hover:text-electric">Industry Solutions</Link></li>
              <li><Link to="/portfolio" className="transition hover:text-electric">Demo Portfolio</Link></li>
              <li><Link to="/pricing" className="transition hover:text-electric">Pricing</Link></li>
              <li><Link to="/about" className="transition hover:text-electric">About Us</Link></li>
              <li><Link to="/contact" className="transition hover:text-electric">Contact</Link></li>
            </ul>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-snow">
              Capabilities
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-softgrey">
              <li><Link to="/services" className="transition hover:text-electric">Business Website Development</Link></li>
              <li><Link to="/services" className="transition hover:text-electric">E-commerce Websites</Link></li>
              <li><Link to="/services" className="transition hover:text-electric">Custom Web Applications</Link></li>
              <li><Link to="/services" className="transition hover:text-electric">AI Integration & Automation</Link></li>
              <li><Link to="/services" className="transition hover:text-electric">Website Redesign</Link></li>
              <li><Link to="/services" className="transition hover:text-electric">Website Maintenance & Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-snow">
              Connect
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-softgrey">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                <span>{siteConfig.contact.location}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-electric" />
                <a href={siteConfig.contact.phoneHref} className="transition hover:text-snow">
                  {siteConfig.contact.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-electric" />
                <a href={`mailto:${siteConfig.contact.email}`} className="break-all transition hover:text-snow">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-emerald-400/30 bg-emerald-500/10 px-3.5 py-2 text-xs font-medium text-emerald-300 transition hover:bg-emerald-500/20"
                >
                  <MessageSquare className="h-3.5 w-3.5" />
                  WhatsApp Enquiry
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-snow/10 pt-8 text-xs text-softgrey sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.brandName}. {siteConfig.tagline} All rights reserved.
          </p>
          <p className="text-softgrey/80">
            Pricing figures shown are starting estimates. Portfolio showcases clearly labelled demonstration concepts.
          </p>
        </div>
      </div>
    </footer>
  );
}
