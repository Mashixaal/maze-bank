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

      customGreen: {
        "green": "#DFF515",
      },

      customGreenNormal: {
        "greennormal": "#3FFD00",
      },

      customElectric: {
        "electric": "#16F5C5",
      },
      
      red: colors.red,
      gray: colors.gray,
      orange: colors.orange,
      lime: colors.lime,
      yellow:colors.yellow,
      green:colors.green,
      
    },
    extend: {
      backgroundImage: {
        'maze-bank': "url('../img/money.jpg')",
        'maze-bank2': "url('../img/maze-bank.jpg')",
        'money-body': "url('../img/money-body.jpg')",
        'bank-body': "url('../img/bank-body.jpg')",
        
      }
    },
  },
  plugins: [],
}