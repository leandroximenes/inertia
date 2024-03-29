/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './resources/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.yellow,
        neutral: colors.gray,
      },
    },
  },
  plugins: [],
};
