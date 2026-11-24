import { Link } from 'react-router-dom';

const variants = {
  primary:
    'bg-gradient-to-r from-electric to-violet text-midnight font-semibold shadow-glow hover:brightness-110 active:scale-[0.99]',
  secondary:
    'border border-snow/15 bg-deepnavy/45 text-snow hover:border-electric/60 hover:bg-deepnavy/80',
  ghost:
    'text-softgrey hover:text-snow hover:bg-snow/5',
};

const sizes = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-3.5 text-sm md:text-base',
};

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  type = 'button',
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 focus-visible:ring-offset-midnight disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
