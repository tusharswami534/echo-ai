/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sky-blue': '#32C7F1',
        'dark-blue'  : '#01000B'
      }
    },
  },
  plugins: [],
}