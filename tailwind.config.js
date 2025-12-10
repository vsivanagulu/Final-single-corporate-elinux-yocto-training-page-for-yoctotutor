/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./corporate-trainings/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': '#0d47a1',
        'primary-dark': '#1a237e',
        'secondary': '#00acc1',
        'secondary-bright': '#26c6da',
        'accent': '#ff6f00',
        'accent-light': '#ffa726',
        'light': '#f5f5f5',
        'dark-text': '#333333',
        'light-text': '#666666',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1a237e 0%, #0d47a1 50%, #00acc1 100%)',
        'gradient-accent': 'linear-gradient(135deg, #ff6f00 0%, #ffa726 100%)',
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
        'pulse-glow': 'pulse-glow 3s infinite ease-in-out',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            transform: 'scale(1)',
            filter: 'brightness(1.0)',
          },
          '50%': {
            transform: 'scale(1.02)',
            filter: 'brightness(1.1)',
          },
        }
      }
    },
  },
  plugins: [],
}