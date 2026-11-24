import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Globe,
  ShoppingBag,
  Code2,
  Sparkles,
  RefreshCw,
  ShieldCheck,
  Check,
  ArrowRight,
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import ServiceModal from '../modals/ServiceModal';
import { servicesData } from '../../data/agencyData';

const iconMap = {
  Globe,
  ShoppingBag,
  Code2,
  Sparkles,
  RefreshCw,
  ShieldCheck,
};

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null);

  return (
    <section id="services" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Engineered Digital Solutions for Modern Businesses."
          description="From business websites and e-commerce stores to custom web applications and practical AI automation, every solution is built for performance and clarity."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.iconName];
            return (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-6 sm:p-7"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-electric/30 bg-gradient-to-br from-electric/15 to-violet/15 text-electric">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 font-display text-xl font-bold text-snow">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-softgrey">
                    {service.shortDescription}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-snow/10 pt-5">
                    {service.benefits.slice(0, 3).map((benefit) => (
                      <li key={benefit} className="flex items-start gap-2.5 text-xs text-softgrey sm:text-sm">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveService(service)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-electric transition hover:gap-3 hover:text-snow"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ServiceModal service={activeService} onClose={() => setActiveService(null)} />
    </section>
  );
}
