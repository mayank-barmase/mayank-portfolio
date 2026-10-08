/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0b1020', panel: '#121a2f', edge: '#243049', accent: '#7c9cff', violet: '#a78bfa' },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: { lineIn: { from: { opacity: 0, transform: 'translateX(-8px)' }, to: { opacity: 1, transform: 'none' } } },
      animation: { lineIn: 'lineIn .5s ease-out both' },
    },
  },
  plugins: [],
}
