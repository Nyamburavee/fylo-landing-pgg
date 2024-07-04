/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        veryDarkBlue: 'hsl(243, 87%, 12%)',
        desaturatedBlue: 'hsl(238, 22%, 44%)',
        brightBlue: 'hsl(224, 93%, 58%)',
        moderateCyan:'hsl(170, 45%, 43%)',
        lightGrayishBlue: 'hsl(240, 75%, 98%)',
        lightGray: 'hsl(0, 0%, 75%)'

      }
    },
    backgroundImage: {
      'mobile': "url('/public/bg-curve-mobile.svg')",
      'desktop': "url('/public/bg-curve-desktop.svg')"

    }
  },
  plugins: [],
}