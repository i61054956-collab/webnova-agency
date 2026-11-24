import { motion } from 'framer-motion';
import { Compass, Award, Eye, HeartHandshake, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import { siteConfig } from '../../config/siteConfig';

const values = [
  {
    title: 'Innovation',
    description: 'Applying modern web architecture and practical AI tools where they add genuine value.',
    icon: Sparkles,
  },
  {
    title: 'Quality',
    description: 'Clean code, intentional visual hierarchy, and reliable responsiveness on every screen.',
    icon: Compass,
  },
  {
    title: 'Transparency',
    description: 'Honest estimates, clear scopes, and realistic timelines with zero misleading claims.',
    icon: Eye,
  },
  {
    title: 'Customer Satisfaction & Long-Term Relationships',
    description: 'Partnering closely with growing businesses across Tamil Nadu, Puducherry, and India.',
    icon: HeartHandshake,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative border-y border-snow/10 bg-[#0A1120]/60 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-violet/30 bg-violet/10 px-3.5 py-1 font-mono text-xs uppercase tracking-[0.18em] text-violet">
              About {siteConfig.brandName}
            </span>

            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-snow sm:text-4xl">
              Technology Should Create Opportunities, Not Complications.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-softgrey">
              {siteConfig.brandName} is a growing technology startup focused on helping small and
              medium-sized businesses establish, modernize, and strengthen their digital presence.
            </p>
            <p className="mt-4 text-base leading-relaxed text-softgrey">
              Starting with a strong focus on Tamil Nadu and Puducherry while serving clients
              nationwide across India, we combine thoughtful UI/UX design, reliable web engineering,
              and intelligent automation so business owners can focus on serving their customers
              without wrestling with complicated technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/contact">Discuss Your Project</Button>
              <Button to="/services" variant="secondary">Explore Capabilities</Button>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                  className="glass-panel glass-panel-hover rounded-2xl p-6"
                >
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-electric/30 bg-electric/10 text-electric">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold text-snow">
                    {val.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-softgrey">
                    {val.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
