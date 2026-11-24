import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import BrandLogo from '../common/BrandLogo';
import Button from '../common/Button';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'About', to: '/about' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-snow/10 bg-midnight/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-midnight/50 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          aria-label="Go to homepage"
          className="rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric"
        >
          <BrandLogo showTagline />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `rounded-lg px-3.5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-deepnavy/70 text-electric'
                    : 'text-softgrey hover:bg-snow/5 hover:text-snow'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button to="/contact" size="sm">
            Start Your Project
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={mobileOpen}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-snow/15 bg-deepnavy/50 text-snow transition hover:border-electric/50 lg:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile navigation drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-snow/10 bg-midnight/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-5 sm:px-6" aria-label="Mobile Navigation">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-deepnavy/80 text-electric'
                        : 'text-softgrey hover:bg-snow/5 hover:text-snow'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="mt-3 pt-3 border-t border-snow/10">
                <Button to="/contact" className="w-full">
                  Start Your Project
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
