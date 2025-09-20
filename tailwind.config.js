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
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        'solienne': {
          'black': '#000000',
          'white': '#FFFFFF',
          'gray': '#1F2937'
        }
      },
      letterSpacing: {
        'helvetica': '0.1em',
        'ultra-wide': '0.2em'
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out',
        'fade-up': 'fadeUp 1s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    },
  },
  plugins: [],
}