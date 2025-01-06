/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#32C7F1',
        'dark-blue'  : '#01000B',
        'light-pink' : '#B3B2B6'
      },
      backgroundImage:{
        'slider-gradient' : 'linear-gradient(180deg, rgba(59, 40, 246, 0.22) 0%, rgba(59, 40, 246, 0) 100%)' ,
        'button-gradient' : 'linear-gradient(103.52deg, #3A3EF5 18.99%, #32C8F1 82.34%)'
      }
    },
  },
  plugins: [],
}