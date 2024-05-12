/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'less_than_350': { 'max': '350px' },
        'less_than_400': { 'max': '400px' },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

