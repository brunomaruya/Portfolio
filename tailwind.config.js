/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'navbar-on-scroll': 'rgba(17, 25, 40, 0.75)',
        'primary-color': 'rgb(14 165 233)',
      },
      backgroundImage: {
        'hero-pattern': "url('/public/images/code.jpg')",
      },
    },
  },
  plugins: [],
};
