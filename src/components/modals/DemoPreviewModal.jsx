import { useEffect, useState } from 'react';
import { X, Monitor, Smartphone, ArrowRight, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

function DemoMockupCanvas({ project }) {
  if (project.previewType === 'fashion') {
    return (
      <div className="overflow-hidden rounded-xl border border-snow/10 bg-[#0B1222]">
        <div className="flex items-center justify-between border-b border-snow/10 bg-[#0F192E] px-4 py-3 text-xs">
          <span className="font-display font-bold tracking-widest text-snow">AURELIA LOOM</span>
          <div className="hidden gap-4 text-softgrey sm:flex">
            <span>New Arrivals</span>
            <span>Handloom</span>
            <span>Bridal</span>
            <span>Contact</span>
          </div>
          <span className="rounded-md bg-electric/15 px-2.5 py-1 font-mono text-[10px] text-electric">
            BAG (2)
          </span>
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-5">
          <div className="flex flex-col justify-center space-y-3 sm:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-electric">
              Festive Craft Collection
            </span>
            <h4 className="font-display text-2xl font-bold text-snow">
              Modern Drapes, Woven Heritage.
            </h4>
            <p className="text-xs leading-relaxed text-softgrey">
              Explore curated silk blends, contemporary kurtas, and boutique tailoring with instant WhatsApp size assistance.
            </p>
            <div className="flex gap-2 pt-1">
              <span className="rounded-lg bg-electric px-3 py-1.5 text-xs font-semibold text-midnight">
                Shop Collection
              </span>
              <span className="rounded-lg border border-snow/15 px-3 py-1.5 text-xs text-snow">
                Book Fitting
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:col-span-2">
            <div className="rounded-lg border border-snow/10 bg-gradient-to-br from-electric/20 to-violet/20 p-3">
              <div className="h-20 rounded bg-snow/10" />
              <p className="mt-2 text-[11px] font-medium text-snow">Silk Edit</p>
              <p className="font-mono text-[10px] text-electric">₹3,499</p>
            </div>
            <div className="rounded-lg border border-snow/10 bg-gradient-to-br from-violet/20 to-deepnavy/60 p-3">
              <div className="h-20 rounded bg-snow/10" />
              <p className="mt-2 text-[11px] font-medium text-snow">Linen Kurta</p>
              <p className="font-mono text-[10px] text-electric">₹2,199</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (project.previewType === 'restaurant') {
    return (
      <div className="overflow-hidden rounded-xl border border-snow/10 bg-[#0D101D]">
        <div className="flex items-center justify-between border-b border-snow/10 bg-[#14192E] px-4 py-3 text-xs">
          <span className="font-display font-bold tracking-wider text-snow">DAKSHIN EMBER</span>
          <div className="hidden gap-4 text-softgrey sm:flex">
            <span>Menu</span>
            <span>Ambience</span>
            <span>Private Dining</span>
          </div>
          <span className="rounded-md bg-violet/25 px-2.5 py-1 font-mono text-[10px] text-violet">
            RESERVE TABLE
          </span>
        </div>
        <div className="space-y-4 p-5">
          <div className="rounded-xl border border-violet/25 bg-gradient-to-r from-violet/15 via-deepnavy/40 to-midnight p-5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-violet">
              Coastal & Heritage Kitchen
            </span>
            <h4 className="mt-1 font-display text-2xl font-bold text-snow">
              Crafted Spices. Memorable Evenings.
            </h4>
            <p className="mt-1.5 max-w-md text-xs text-softgrey">
              Direct table reservations, live chef tasting menu, and event catering enquiries without third-party commission apps.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { name: 'Signature Thali', tag: 'Chef Special', price: '₹480' },
              { name: 'Pepper Roast Platter', tag: 'Evening Menu', price: '₹390' },
              { name: 'Filter Brew & Dessert', tag: 'Café', price: '₹240' },
            ].map((dish) => (
              <div key={dish.name} className="rounded-lg border border-snow/10 bg-midnight/70 p-3">
                <p className="font-mono text-[10px] text-violet">{dish.tag}</p>
                <p className="mt-1 text-xs font-semibold text-snow">{dish.name}</p>
                <p className="mt-1 font-mono text-[11px] text-softgrey">{dish.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-snow/10 bg-[#0A1324]">
      <div className="flex items-center justify-between border-b border-snow/10 bg-[#101D36] px-4 py-3 text-xs">
        <span className="font-display font-bold text-snow">HORIZON CREST ACADEMY</span>
        <div className="hidden gap-4 text-softgrey sm:flex">
          <span>Academics</span>
          <span>Campus</span>
          <span>Notices</span>
        </div>
        <span className="rounded-md bg-electric/20 px-2.5 py-1 font-mono text-[10px] text-electric">
          ADMISSIONS OPEN
        </span>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-3">
        <div className="space-y-3 sm:col-span-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-electric">
            K-12 & STEM Learning Campus
          </span>
          <h4 className="font-display text-xl font-bold text-snow sm:text-2xl">
            Clear Information for Parents & Future Scholars.
          </h4>
          <p className="text-xs leading-relaxed text-softgrey">
            Organized curriculum overview, faculty highlights, downloadable prospectus, and streamlined admission enquiry forms.
          </p>
          <div className="flex flex-wrap gap-2 pt-1">
            <span className="rounded-lg bg-electric px-3 py-1.5 text-xs font-semibold text-midnight">
              Apply for Admission
            </span>
            <span className="rounded-lg border border-snow/15 px-3 py-1.5 text-xs text-snow">
              Academic Calendar
            </span>
          </div>
        </div>
        <div className="space-y-2 rounded-lg border border-snow/10 bg-midnight/70 p-3">
          <p className="font-mono text-[10px] uppercase tracking-wider text-electric">Campus Notices</p>
          <div className="space-y-2 text-[11px] text-softgrey">
            <div className="rounded border border-snow/5 bg-snow/5 p-2">
              Admissions Enquiry Window Open
            </div>
            <div className="rounded border border-snow/5 bg-snow/5 p-2">
              Annual Science Expo Schedule
            </div>
            <div className="rounded border border-snow/5 bg-snow/5 p-2">
              Parent Orientation Portal
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DemoPreviewModal({ project, onClose }) {
  const [viewportMode, setViewportMode] = useState('desktop');

  useEffect(() => {
    setViewportMode('desktop');
    if (!project) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-modal-title"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-midnight/85 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.22 }}
            className="glass-panel relative z-10 max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-2xl p-6 shadow-glow sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close demo preview"
              className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-snow/15 bg-deepnavy/60 text-softgrey transition hover:border-electric/50 hover:text-snow"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex flex-wrap items-center gap-2.5 pr-10">
              <span className="rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-amber-300">
                {project.badge}
              </span>
              <span className="font-mono text-xs text-electric">{project.category}</span>
            </div>

            <h3 id="demo-modal-title" className="mt-3 font-display text-2xl font-bold text-snow sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-2 text-sm text-softgrey">{project.shortDescription}</p>

            {/* Demo disclaimer banner */}
            <div className="mt-4 flex items-start gap-2.5 rounded-xl border border-electric/20 bg-electric/5 px-4 py-3 text-xs text-softgrey">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
              <span>
                This is an interactive <strong className="text-snow">demonstration concept</strong> created to
                illustrate layout quality and user experience—not a claimed past client deployment.
              </span>
            </div>

            {/* Viewport switcher */}
            <div className="mt-5 flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-wider text-softgrey">
                Interactive Layout Preview
              </span>
              <div className="inline-flex rounded-lg border border-snow/15 bg-midnight p-1">
                <button
                  type="button"
                  onClick={() => setViewportMode('desktop')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition ${
                    viewportMode === 'desktop'
                      ? 'bg-deepnavy text-electric'
                      : 'text-softgrey hover:text-snow'
                  }`}
                >
                  <Monitor className="h-3.5 w-3.5" />
                  Desktop
                </button>
                <button
                  type="button"
                  onClick={() => setViewportMode('mobile')}
                  className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition ${
                    viewportMode === 'mobile'
                      ? 'bg-deepnavy text-electric'
                      : 'text-softgrey hover:text-snow'
                  }`}
                >
                  <Smartphone className="h-3.5 w-3.5" />
                  Mobile Frame
                </button>
              </div>
            </div>

            <div className="mt-4 flex justify-center rounded-2xl border border-snow/10 bg-midnight/80 p-4">
              <div className={viewportMode === 'mobile' ? 'w-full max-w-[360px]' : 'w-full'}>
                <DemoMockupCanvas project={project} />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {project.highlights.map((point) => (
                <div
                  key={point}
                  className="rounded-xl border border-snow/10 bg-midnight/60 px-4 py-3 text-xs text-softgrey"
                >
                  <span className="mr-2 text-electric">•</span>
                  {point}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-snow/10 pt-5">
              <span className="text-xs text-softgrey">
                Want a custom website in this category for your business?
              </span>
              <Button to="/contact" onClick={onClose}>
                Build Something Similar
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
