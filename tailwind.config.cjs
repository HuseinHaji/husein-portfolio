/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['system-ui', 'ui-sans-serif', 'sans-serif'],
        },
        colors: {
          bg: '#F8FAFC',
          surface: '#FFFFFF',
          border: '#E2E8F0',
          text: '#0F172A',
          muted: '#475569',
          accent: '#2563EB',
          'accent-hover': '#1D4ED8',
        },
      },
    },
    plugins: [],
  }
  