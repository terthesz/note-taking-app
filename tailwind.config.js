/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [ './pages/**/*.{ts,tsx,js,jsx}', './components/**/*.{ts,tsx,js,jsx}' ],
  theme: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
}
