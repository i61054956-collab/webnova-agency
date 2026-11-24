import { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Layers, Sparkles } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import DemoPreviewModal from '../modals/DemoPreviewModal';
import { demoPortfolioData } from '../../data/agencyData';

function PreviewThumbnail({ type }) {
  if (type === 'fashion') {
    return (
      <div className="relative h-52 overflow-hidden rounded-xl border border-snow/10 bg-gradient-to-br from-[#101C36] via-[#0A1020] to-[#1D1536] p-4">
        <div className="flex items-center justify-between text-[10px] text-softgrey">
          <span className="font-display font-bold tracking-widest text-snow">AURELIA LOOM</span>
          <span className="rounded bg-electric/15 px-2 py-0.5 font-mono text-electric">LOOKBOOK</span>
        </div>
        <div className="mt-5 grid grid-cols-3 gap-2.5">
          <div className="col-span-2 space-y-2">
            <div className="h-2.5 w-16 rounded bg-electric/60" />
            <div className="h-4 w-32 rounded bg-snow/20" />
            <div className="h-2.5 w-24 rounded bg-snow/10" />
            <div className="mt-3 inline-block rounded-md bg-electric px-2.5 py-1 text-[9px] font-semibold text-midnight">
              Explore Collection
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-16 rounded-lg border border-snow/10 bg-gradient-to-b from-electric/25 to-violet/20" />
            <div className="h-8 rounded-lg border border-snow/10 bg-snow/5" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'restaurant') {
    return (
      <div className="relative h-52 overflow-hidden rounded-xl border border-snow/10 bg-gradient-to-br from-[#19132E] via-[#0B1020] to-[#11243E] p-4">
        <div className="flex items-center justify-between text-[10px] text-softgrey">
          <span className="font-display font-bold tracking-wider text-snow">DAKSHIN EMBER</span>
          <span className="rounded bg-violet/25 px-2 py-0.5 font-mono text-violet">DINING</span>
        </div>
        <div className="mt-5 rounded-lg border border-violet/25 bg-midnight/75 p-3">
          <div className="h-2 w-20 rounded bg-violet/70" />
          <div className="mt-2 h-4 w-40 rounded bg-snow/20" />
          <div className="mt-3 flex gap-2">
            <span className="rounded bg-violet/20 px-2 py-0.5 text-[9px] text-snow">Digital Menu</span>
            <span className="rounded bg-snow/10 px-2 py-0.5 text-[9px] text-softgrey">Book Table</span>
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-3 gap-2">
          <div className="h-10 rounded-lg border border-snow/10 bg-snow/5" />
          <div className="h-10 rounded-lg border border-snow/10 bg-snow/5" />
          <div className="h-10 rounded-lg border border-snow/10 bg-snow/5" />
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-52 overflow-hidden rounded-xl border border-snow/10 bg-gradient-to-br from-[#0F203D] via-[#09101E] to-[#131936] p-4">
      <div className="flex items-center justify-between text-[10px] text-softgrey">
        <span className="font-display font-bold text-snow">HORIZON CREST</span>
        <span className="rounded bg-electric/20 px-2 py-0.5 font-mono text-electric">ADMISSIONS</span>
      </div>
      <div className="mt-5 grid grid-cols-5 gap-2.5">
        <div className="col-span-3 space-y-2 rounded-lg border border-snow/10 bg-midnight/75 p-3">
          <div className="h-2 w-16 rounded bg-electric/70" />
          <div className="h-3.5 w-28 rounded bg-snow/20" />
          <div className="h-2.5 w-24 rounded bg-snow/10" />
          <div className="mt-2 inline-block rounded bg-electric/20 px-2 py-0.5 text-[9px] text-electric">
            Admissions Portal
          </div>
        </div>
        <div className="col-span-2 space-y-2">
          <div className="rounded-lg border border-snow/10 bg-snow/5 p-2 text-[9px] text-softgrey">
            Circulars
          </div>
          <div className="rounded-lg border border-snow/10 bg-snow/5 p-2 text-[9px] text-softgrey">
            Academics
          </div>
          <div className="rounded-lg border border-snow/10 bg-snow/5 p-2 text-[9px] text-softgrey">
            Campus Info
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [selectedDemo, setSelectedDemo] = useState(null);

  return (
    <section id="portfolio" className="relative py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Showcase & Concept Demos"
          title="Interactive Demonstration Projects."
          description="Explore our demonstration concepts illustrating the visual quality, structure, and mobile-ready design we craft. Note: These are demonstration projects, not real client deployments."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {demoPortfolioData.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="glass-panel glass-panel-hover flex flex-col justify-between rounded-2xl p-5 sm:p-6"
            >
              <div>
                <div className="relative">
                  <PreviewThumbnail type={project.previewType} />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-amber-400/40 bg-midnight/90 px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-300 backdrop-blur-md">
                    <Sparkles className="h-3 w-3" />
                    {project.badge}
                  </span>
                </div>

                <div className="mt-5 flex items-center gap-2 font-mono text-xs text-electric">
                  <Layers className="h-3.5 w-3.5" />
                  <span>{project.category}</span>
                </div>

                <h3 className="mt-2 font-display text-xl font-bold text-snow">
                  {project.title}
                </h3>

                <p className="mt-2.5 text-sm leading-relaxed text-softgrey">
                  {project.shortDescription}
                </p>
              </div>

              <div className="mt-6 border-t border-snow/10 pt-5">
                <button
                  type="button"
                  onClick={() => setSelectedDemo(project)}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-electric/35 bg-electric/10 px-4 py-2.5 text-sm font-semibold text-electric transition hover:bg-electric hover:text-midnight"
                >
                  <Eye className="h-4 w-4" />
                  View Demo
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <DemoPreviewModal project={selectedDemo} onClose={() => setSelectedDemo(null)} />
    </section>
  );
}
