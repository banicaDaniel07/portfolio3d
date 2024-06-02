/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'less-than-350': { 'max': '350px' },
        'less-than-400': { 'max': '400px' },
        'less_than_1060': { 'max': '1060px' },
      },
      width: {
        'calc-100vw-minus-2rem': 'calc(100vw - 2rem)',
      },
      blur: {
        '1px': '1px'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

