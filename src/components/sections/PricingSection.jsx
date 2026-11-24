import { motion } from 'framer-motion';
import { Check, Info, ArrowRight } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import Button from '../common/Button';
import { pricingTiers } from '../../data/agencyData';

export default function PricingSection() {
  return (
    <section id="pricing" className="relative border-y border-snow/10 bg-[#0A1120]/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Transparent Starting Estimates"
          title="Clear Investment Tiers Built for Real Growth."
          description="Choose a starting tier aligned with your current business stage. Every engagement begins with clear scope definition and honest estimates."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingTiers.map((tier, idx) => (
            <motion.article
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 ${
                tier.featured
                  ? 'border border-electric/50 bg-gradient-to-b from-deepnavy/80 to-midnight shadow-glow'
                  : 'glass-panel glass-panel-hover'
              }`}
            >
              {tier.featured && (
                <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-electric to-violet px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-midnight">
                  Popular Choice
                </span>
              )}

              <div>
                <h3 className="font-display text-xl font-bold text-snow">{tier.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-softgrey">{tier.description}</p>

                <div className="mt-6 border-y border-snow/10 py-4">
                  <span className="block font-mono text-[11px] uppercase tracking-wider text-electric">
                    {tier.pricePrefix}
                  </span>
                  <span className="mt-1 block font-display text-3xl font-bold text-snow">
                    {tier.price}
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-sm text-softgrey">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button
                  to={`/contact?budget=${encodeURIComponent(tier.budgetOption)}`}
                  variant={tier.featured ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {tier.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Important pricing transparency notice */}
        <div className="mt-10 rounded-2xl border border-electric/20 bg-deepnavy/35 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-electric" />
            <div className="space-y-1.5 text-xs leading-relaxed text-softgrey sm:text-sm">
              <p className="font-semibold text-snow">Pricing & Scope Transparency</p>
              <p>
                All prices listed above are starting estimates; final quotations depend on exact page count,
                custom features, content readiness, and integration requirements.
              </p>
              <p>
                Domain registration, web hosting, paid third-party plugins/APIs, payment gateway fees, and
                applicable taxes are explained and billed separately. Specific revision rounds and deliverables
                are clearly agreed upon before project kickoff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
