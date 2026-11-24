import { siteConfig } from '../../config/siteConfig';

export default function BrandLogo({ showTagline = false, className = '' }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-electric/35 bg-deepnavy/70 shadow-glow">
        <svg viewBox="0 0 36 36" className="h-6 w-6" fill="none" aria-hidden="true">
          <path
            d="M6 10L12 26L18 14L24 26L30 10"
            stroke="url(#brandLogoGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="brandLogoGrad" x1="6" y1="10" x2="30" y2="26" gradientUnits="userSpaceOnUse">
              <stop stopColor="#38BDF8" />
              <stop offset="1" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-snow">
          {siteConfig.brandName}
        </span>
        {showTagline && (
          <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-electric">
            {siteConfig.tagline}
          </span>
        )}
      </div>
    </div>
  );
}
