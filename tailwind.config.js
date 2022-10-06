/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      './src/**/*.{html,ts}'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extends: {
      opacity: ['disabled'],
      backgroundColor: ['disabledy']
    },
  },
  plugins: [],
}
