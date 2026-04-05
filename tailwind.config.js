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
        bg: '#080C14',
        surface: '#0D1117',
        card: '#111827',
        border: '#1E2D3D',
        cyan: {
          400: '#22D3EE',
          500: '#06B6D4',
          glow: '#00D4FF',
        },
        text: {
          primary: '#F0F6FC',
          secondary: '#8B9DC3',
          muted: '#4A5568',
        },
      },
      backgroundImage: {
        'grid-pattern': `linear-gradient(rgba(30,45,61,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(30,45,61,0.4) 1px, transparent 1px)`,
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
