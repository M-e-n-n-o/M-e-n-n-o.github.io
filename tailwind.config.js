const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {

      screens: {
        '2xl': "1500px",
        'wide': "2000px",
        'putin': "2500px"
      },

      colors: {
        main: "#247e00",
        "main-hover": "#173042",
        accent: "#195a00",
        call: "#173042",
        "call-hover": "#236477"
      },

      spacing: {
        fifteenP: '15%',
        eightP: '8%',
        fiveP: '5%'
      }
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("current-page", "&.active");
      addVariant("children", "&>*");
      addVariant("decendants", "& *");
    })
  ],
};