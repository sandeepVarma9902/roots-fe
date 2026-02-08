/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          rootszy: {
            brown: '#5A3A24',
            green: '#4F8A29',
            peach: '#F5D6C6',
            sand: '#FCEFE6',
          },
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
        },
        animation: {
          fadeIn: 'fadeIn 0.2s ease-out',
          scaleIn: 'scaleIn 0.3s ease-out',
        },
      },
  
    },
    plugins: [],
  }