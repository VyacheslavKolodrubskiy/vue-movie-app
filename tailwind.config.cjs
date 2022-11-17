/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        primary: '#EBEEF5',
        secondary: '#8E95A9',
        accent: '#7B6EF6',
      },
    },
    backgroundImage: {
      main: 'url(~/assets/images/main-bg.webp)',
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        xl: '1200px',
      },
    },
    screens: {
      xl: { max: '1200px' },
      lg: { max: '992px' },
      md: { max: '768px' },
      sm: { max: '675px' },
      xs: { max: '576px' },
      xxs: { max: '475px' },
    },
  },
  plugins: [],
}
