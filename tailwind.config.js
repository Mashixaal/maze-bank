/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      "custom1": "#78dcca",
      customYellow: {
        "yellowlight": "#FFDD00",
        "yellowdark": "#9B8806",
      },
      customBlue: {
        "blue": "#B2F8FC",
      },

      red: colors.red,
      gray: colors.gray,
      orange: colors.orange,
    },
    extend: {},
  },
  plugins: [],
}