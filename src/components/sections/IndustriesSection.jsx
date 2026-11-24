import { motion } from 'framer-motion';
import {
  Shirt,
  UtensilsCrossed,
  GraduationCap,
  Armchair,
  Gem,
  Stethoscope,
  Package,
  Briefcase,
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import { industriesData } from '../../data/agencyData';

const iconMap = {
  Shirt,
  UtensilsCrossed,
  GraduationCap,
  Armchair,
  Gem,
  Stethoscope,
  Package,
  Briefcase,
};

export default function IndustriesSection() {
  return (
    <section id="solutions" className="relative border-y border-snow/10 bg-[#0A1120]/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Industry Solutions"
          title="Technology Built Around Your Business."
          description="Different industries attract customers in different ways. We structure your website so visitors understand your offerings immediately and take action."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industriesData.map((industry, idx) => {
            const Icon = iconMap[industry.iconName];
            return (
              <motion.article
                key={industry.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-6"
              >
                <div>
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-violet/30 bg-violet/15 text-violet">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-snow">
                    {industry.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-softgrey">
                    {industry.summary}
                  </p>
                </div>

                <div className="mt-5 border-t border-snow/10 pt-4">
                  <p className="font-mono text-[10px] uppercase tracking-wider text-electric">
                    Business Impact
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-snow/85">
                    {industry.howItHelps}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
