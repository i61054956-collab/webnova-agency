/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#080D19',
        deepnavy: '#142B49',
        electric: '#38BDF8',
        violet: '#8B5CF6',
        snow: '#F8FAFC',
        softgrey: '#94A3B8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #38BDF8 0%, #8B5CF6 100%)',
        'surface-gradient': 'linear-gradient(180deg, rgba(20, 43, 73, 0.45) 0%, rgba(8, 13, 25, 0.85) 100%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(56, 189, 248, 0.35)',
        'glow-violet': '0 0 45px -12px rgba(139, 92, 246, 0.35)',
      },
    },
  },
  plugins: [],
};
