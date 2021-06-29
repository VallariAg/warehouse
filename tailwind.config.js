module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'profile-bg': "url('/src/static/profile-logo-bg.png')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
