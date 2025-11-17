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
        }
      }
    },
    plugins: [],
  }