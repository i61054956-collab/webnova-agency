import { motion } from 'framer-motion';
import { ArrowRight, Compass, Sparkles } from 'lucide-react';
import Button from '../common/Button';
import Hero3DVisual from './Hero3DVisual';
import { siteConfig } from '../../config/siteConfig';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pb-20 pt-12 sm:pt-16 lg:pb-28 lg:pt-20">
      {/* Background atmospheric lighting */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-tech-grid [mask-image:radial-gradient(ellipse_at_center,black_35%,transparent_78%)]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-electric/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-violet/15 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-electric/30 bg-deepnavy/60 px-4 py-1.5 text-xs font-medium text-electric backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{siteConfig.brandName} — {siteConfig.tagline}</span>
            </div>

            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.08] tracking-tight text-snow sm:text-5xl lg:text-[3.4rem]">
              Your Business Deserves a{' '}
              <span className="bg-gradient-to-r from-electric via-sky-300 to-violet bg-clip-text text-transparent">
                Powerful Digital Presence.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-softgrey sm:text-lg">
              We transform business ideas into modern digital experiences through professional web
              development, intelligent automation and innovative technology.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button to="/contact" size="lg">
                Start Your Project
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button to="/portfolio" variant="secondary" size="lg">
                <Compass className="h-4 w-4 text-electric" />
                Explore Our Work
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-snow/10 pt-6 text-xs text-softgrey">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-electric" />
                Tamil Nadu & Puducherry Focus
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-violet" />
                Serving Clients Across India
              </span>
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Transparent Starting Estimates
              </span>
            </div>
          </motion.div>

          {/* 3D-Inspired Visual Column */}
          <div className="lg:col-span-6">
            <Hero3DVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
