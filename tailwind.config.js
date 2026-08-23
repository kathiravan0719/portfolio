/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      screens: {
        xs: '375px',
        '3xl': '1920px',
      },
      colors: {
        bg: '#000000',
        surface: '#0a0a0a',
        card: 'rgba(255, 255, 255, 0.04)',
        border: 'rgba(255, 255, 255, 0.08)',
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          glow: '#00D4FF',
        },
        indigo: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        emerald: {
          400: '#34D399',
          500: '#10B981',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A1A1AA',
          muted: '#52525B',
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
