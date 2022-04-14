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
        "main-hover": "#39cb00",
        accent: "#195a00",
        call: "#6301be",
        "call-hover": "#b260ff"
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