/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Bebas Neue', 'sans-serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'open-pulse': {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 0 0 rgba(22, 163, 74, 0.4)' },
          '50%': { opacity: '1', boxShadow: '0 0 0 6px rgba(22, 163, 74, 0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'open-pulse': 'open-pulse 2s ease-in-out infinite',
        'hero-enter': 'fade-in-up 0.7s ease-out both',
      },
      transitionDuration: {
        '250': '250ms',
      },
      colors: {
        mulligan: {
          blue: '#1d4ed8',
          'blue-light': '#2563eb',
          'blue-dark': '#1e40af',
          gray: '#64748b',
          'gray-light': '#94a3b8',
          'gray-dark': '#334155',
        }
      }
    },
  },
  plugins: [],
}
