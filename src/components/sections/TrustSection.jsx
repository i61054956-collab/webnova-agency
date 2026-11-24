import { motion } from 'framer-motion';
import { TrendingUp, Cpu, Wallet, LifeBuoy } from 'lucide-react';
import { trustPillars } from '../../data/agencyData';

const iconMap = {
  TrendingUp,
  Cpu,
  Wallet,
  LifeBuoy,
};

export default function TrustSection() {
  return (
    <section className="relative border-y border-snow/10 bg-[#0A1120]/70 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trustPillars.map((item, idx) => {
            const Icon = iconMap[item.iconName];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="glass-panel glass-panel-hover rounded-2xl p-6"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-electric">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-snow">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-softgrey">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
