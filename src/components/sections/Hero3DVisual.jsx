import { motion } from 'framer-motion';
import { Bot, Code2, Layers, ShieldCheck, Sparkles, Zap } from 'lucide-react';

export default function Hero3DVisual() {
  return (
    <div className="relative mx-auto flex w-full max-w-[540px] items-center justify-center py-6 lg:py-0">
      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 rounded-full bg-gradient-to-tr from-electric/20 via-violet/20 to-transparent blur-3xl"
      />

      {/* 3D Perspective Container */}
      <motion.div
        initial={{ opacity: 0, y: 24, rotateX: 8, rotateY: -10 }}
        animate={{ opacity: 1, y: 0, rotateX: 4, rotateY: -6 }}
        whileHover={{ rotateX: 0, rotateY: 0, scale: 1.01 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        style={{ transformPerspective: 1200 }}
        className="relative w-full"
      >
        {/* Main Floating Futuristic Agency Dashboard */}
        <div className="glass-panel relative overflow-hidden rounded-3xl p-5 shadow-glow sm:p-6">
          {/* Top chrome */}
          <div className="flex items-center justify-between border-b border-snow/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
            </div>
            <div className="rounded-full border border-electric/25 bg-midnight/80 px-3 py-1 font-mono text-[10px] tracking-wider text-electric">
              AI-POWERED WEB ARCHITECTURE
            </div>
          </div>

          {/* Core layout grid inside the interface */}
          <div className="mt-5 grid gap-4 sm:grid-cols-12">
            {/* Left module: Responsive Canvas Preview */}
            <div className="rounded-2xl border border-snow/10 bg-midnight/75 p-4 sm:col-span-7">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-softgrey">
                  <Layers className="h-3.5 w-3.5 text-electric" />
                  Digital Experience Engine
                </span>
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              {/* Abstract layered wireframe UI */}
              <div className="mt-4 space-y-2.5">
                <div className="h-3 w-24 rounded-full bg-gradient-to-r from-electric to-violet" />
                <div className="h-5 w-4/5 rounded-lg bg-snow/15" />
                <div className="h-3 w-full rounded bg-snow/10" />
                <div className="h-3 w-2/3 rounded bg-snow/10" />
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2">
                <div className="rounded-xl border border-electric/25 bg-electric/10 p-2.5">
                  <Code2 className="h-4 w-4 text-electric" />
                  <p className="mt-1.5 font-mono text-[10px] text-snow">React UI</p>
                </div>
                <div className="rounded-xl border border-violet/25 bg-violet/10 p-2.5">
                  <Bot className="h-4 w-4 text-violet" />
                  <p className="mt-1.5 font-mono text-[10px] text-snow">AI Flow</p>
                </div>
                <div className="rounded-xl border border-snow/10 bg-deepnavy/60 p-2.5">
                  <Zap className="h-4 w-4 text-electric" />
                  <p className="mt-1.5 font-mono text-[10px] text-snow">Fast Load</p>
                </div>
              </div>
            </div>

            {/* Right module: Intelligent Automation Nodes */}
            <div className="flex flex-col justify-between gap-3 sm:col-span-5">
              <div className="rounded-2xl border border-violet/25 bg-gradient-to-br from-violet/15 to-midnight/90 p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-violet" />
                  <span className="font-mono text-[10px] uppercase tracking-wider text-snow">
                    Smart Enquiry Flow
                  </span>
                </div>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center justify-between rounded-lg bg-midnight/80 px-2.5 py-1.5 text-[11px] text-softgrey">
                    <span>Lead Capture</span>
                    <span className="font-mono text-electric">Active</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-midnight/80 px-2.5 py-1.5 text-[11px] text-softgrey">
                    <span>WhatsApp Sync</span>
                    <span className="font-mono text-emerald-400">Ready</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-snow/10 bg-midnight/80 p-4">
                <div className="flex items-center gap-2 text-xs font-medium text-snow">
                  <ShieldCheck className="h-4 w-4 text-electric" />
                  <span>Responsive & SEO-Ready</span>
                </div>
                <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-deepnavy">
                  <motion.div
                    initial={{ width: '30%' }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 1.4, ease: 'easeOut' }}
                    className="h-full rounded-full bg-gradient-to-r from-electric to-violet"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Code-style footer bar */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-snow/10 bg-midnight/90 px-4 py-2.5 font-mono text-[11px] text-softgrey">
            <span>
              <span className="text-electric">status:</span> architecture_ready
            </span>
            <span className="text-violet">Tamil Nadu • Puducherry • India</span>
          </div>
        </div>

        {/* Floating accent badge 1 */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="glass-panel absolute -left-3 -top-4 hidden rounded-2xl px-4 py-2.5 shadow-glow sm:flex sm:items-center sm:gap-2.5"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-electric/15 text-electric">
            <Sparkles className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-snow">Modern Stack</p>
            <p className="font-mono text-[10px] text-softgrey">Clean & Scalable</p>
          </div>
        </motion.div>

        {/* Floating accent badge 2 */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="glass-panel absolute -bottom-4 -right-2 hidden rounded-2xl px-4 py-2.5 shadow-glow-violet sm:flex sm:items-center sm:gap-2.5"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-violet/20 text-violet">
            <Bot className="h-4 w-4" />
          </span>
          <div>
            <p className="text-xs font-semibold text-snow">AI Automation</p>
            <p className="font-mono text-[10px] text-softgrey">Business-Focused</p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
