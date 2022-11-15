// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#545DFF',
        background: '#FCFCFF',
        secondary: '#D2D2D2',
        tertiary: '#FFE7BD',
        textPrimary: '#727272',
        textSecondary: '#707070C4',
      },
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        label: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
