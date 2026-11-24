import Button from '../components/common/Button';
import SeoHead from '../components/common/SeoHead';
import { siteConfig } from '../config/siteConfig';

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <SeoHead title={`Page Not Found | ${siteConfig.brandName}`} />
      <span className="font-mono text-sm uppercase tracking-widest text-electric">404</span>
      <h1 className="mt-3 font-display text-4xl font-bold text-snow sm:text-5xl">
        Page Not Found
      </h1>
      <p className="mt-4 text-base text-softgrey">
        The page you are looking for does not exist or has been moved.
      </p>
      <div className="mt-8">
        <Button to="/">Return to Homepage</Button>
      </div>
    </section>
  );
}
