/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          'neight': ['Neight', 'sans-serif'],
          'crimson': ['CrimsonText', 'sans-serif'],
        },
      },
    },
    plugins: [
      require('tailwind-scrollbar'),
    ],
  }