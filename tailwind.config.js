module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue : {
          linkedin : '#2867B2',
          background: "#10121b",
          navbar: "#037fff"
        }
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/assets/dots.svg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
