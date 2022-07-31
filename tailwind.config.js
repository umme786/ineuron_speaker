module.exports = {
  content: ["./src/**/*.{html,js}",
                "./src/index.html"],
  theme: {

     fontFamily: {
      'DMSansmedium': ['"DM Sans"'],
      'OpenSans_extrabold': ['Open Sans'],
      'OpenSansbold': ['"Open Sans"'],
      'DMSansRegular': ['DM Sans'],
    },

    extend: {
      colors: {
        'grayCustom': '#1b1814',
        'grayform': '#21201f',
        'focus': '#191816',
      },
      backgroundImage: {
        'bgimage': "url('../public/images/greenBg.png')",
        'bgsmall': "url('../public/images/small.png')",
      },
    },
  },
  plugins: [],
}
