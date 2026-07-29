import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#F5F3F3',
        gray: '#9CA3AF',
        darkGray: '#1F2937',
        black: '#070709',
        darkOrange: '#FF6C00',
        lightOrange: 'rgba(255, 108, 0, 0.2)',
        bgAlpha: 'rgba(7, 7, 9, 0.95)',
        brand: {
          dark: '#07070A',
          surface: '#0E0F14',
          card: 'rgba(18, 19, 26, 0.75)',
          border: 'rgba(255, 255, 255, 0.08)',
          orange: '#FF6C00',
          amber: '#FF4500',
          gold: '#E5C158',
          muted: '#9CA3AF',
        },
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        rye: ['Cinzel', 'serif'], // Modern luxury replacement for Rye
        playfair: ['Plus Jakarta Sans', 'sans-serif'],
        orelega: ['Syne', 'sans-serif'],
      },
      backgroundImage: {
        heroDesktop: `url(/images/hero-desktop-2x.png)`,
        heroTablet: `url(/images/hero-tablet-2x.png)`,
        heroMobile: `url(/images/hero-mobile-2x.png)`,
        contactsDesktop: `url(/images/contacts-desktop-2x.png)`,
        contactsTablet: `url(/images/contacts-tablet-2x.png)`,
        contactsMobile: `url(/images/contacts-mobile-2x.png)`,
        'radial-glow': 'radial-gradient(circle at center, rgba(255,108,0,0.15) 0%, transparent 70%)',
        'dark-mesh': 'radial-gradient(at 0% 0%, rgba(255, 108, 0, 0.08) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(229, 193, 88, 0.05) 0px, transparent 50%)',
      },
      boxShadow: {
        'glow-orange': '0 0 25px rgba(255, 108, 0, 0.35)',
        'glow-gold': '0 0 25px rgba(229, 193, 88, 0.25)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
