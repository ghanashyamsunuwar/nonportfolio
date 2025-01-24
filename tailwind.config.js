/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        premier: {
          navy: '#0A2342',
          gold: '#C6A962',
          cream: '#F5EFE7',
          slate: '#2D4356',
        }
      }
    },
  },
  plugins: [],
};