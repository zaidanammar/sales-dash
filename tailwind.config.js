// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#545DFF',
        background: '#FCFCFF',
        secondary: '#F3F4FF',
        tertiary: '#FFE7BD',
        textPrimary: '#727272',
        textDark: '#212121',
        textDark2: '#7A7A7A',
      },
      fontFamily: {
        nunito: ['Nunito Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}