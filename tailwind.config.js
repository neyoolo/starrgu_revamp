/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: '#05060A',
        'void-elevated': 'rgba(10, 11, 18, 0.5)',
        'brand-blue': '#0222F1',
        'brand-aqua': '#27E2D8',
        'brand-orange': '#F53A0F',
        'brand-gold': '#FCAE04',
        'brand-frost': '#F8FFFF',
        'glass-bg': 'rgba(255, 255, 255, 0.03)',
        'glass-border': 'rgba(255, 255, 255, 0.1)',
        'glass-border-hover': 'rgba(2, 34, 241, 0.22)',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        mono: ['JetBrains Mono', 'SF Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'status-pulse': 'statusPulse 2s ease-out infinite',
      },
    },
  },
  plugins: [],
}
