import { motion } from 'framer-motion';
import SectionHeading from '../common/SectionHeading';
import { processSteps } from '../../data/agencyData';

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Process"
          title="Structured Execution from Concept to Launch."
          description="A transparent six-stage workflow designed so you always know what is being built, reviewed, and delivered next."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="glass-panel glass-panel-hover relative overflow-hidden rounded-2xl p-6 sm:p-7"
            >
              <span className="font-mono text-3xl font-bold text-electric/25">
                {item.step}
              </span>
              <div className="mt-3 flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-electric to-violet" />
                <h3 className="font-display text-xl font-bold text-snow">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-softgrey">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
