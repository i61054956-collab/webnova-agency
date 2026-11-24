import { motion } from 'framer-motion';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl text-left'} ${className}`}
    >
      {eyebrow && (
        <div
          className={`mb-3 inline-flex items-center gap-2 rounded-full border border-electric/25 bg-electric/10 px-3.5 py-1 font-mono text-xs uppercase tracking-[0.18em] text-electric ${
            isCenter ? 'justify-center' : ''
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-electric" />
          {eyebrow}
        </div>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight text-snow sm:text-4xl lg:text-[2.65rem] lg:leading-[1.14]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-softgrey sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
