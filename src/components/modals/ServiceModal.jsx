import { useEffect } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../common/Button';

export default function ServiceModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
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
            transition={{ duration: 0.2 }}
            className="glass-panel relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-6 shadow-glow sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close service details"
              className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-snow/15 bg-deepnavy/60 text-softgrey transition hover:border-electric/50 hover:text-snow"
            >
              <X className="h-4 w-4" />
            </button>

            <span className="inline-block rounded-full border border-electric/30 bg-electric/10 px-3 py-1 font-mono text-xs uppercase tracking-wider text-electric">
              Service Overview
            </span>

            <h3 id="service-modal-title" className="mt-4 font-display text-2xl font-bold text-snow sm:text-3xl">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-softgrey sm:text-base">
              {service.shortDescription}
            </p>

            <div className="mt-6 rounded-xl border border-snow/10 bg-midnight/60 p-4">
              <p className="font-mono text-xs uppercase tracking-wider text-electric">Ideal For</p>
              <p className="mt-1 text-sm text-snow/90">{service.idealFor}</p>
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-snow">
                  Key Benefits
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {service.benefits.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-softgrey">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-electric" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-display text-sm font-semibold uppercase tracking-wider text-snow">
                  Typical Scope
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-softgrey">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-violet" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-snow/10 pt-6">
              <p className="text-xs text-softgrey">
                Need a scope tailored to your business?
              </p>
              <Button
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                onClick={onClose}
              >
                Enquire About This Service
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
