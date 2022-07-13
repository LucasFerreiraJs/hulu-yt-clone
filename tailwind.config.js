/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // just in time compiler
  darkMode: false, // or 'media' or class
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      screens:{
        "3xl": "2000px"
      }

    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
