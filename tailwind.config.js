const defaultTheme = require('tailwindcss/defaultTheme');
// const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B2B2B',
        red: '#D2042D',
        yellow: '#FFC300',
        green: '#00FF00',
        blue: '#0096FF',
        gray: '#818589',
        darkblue: '#4c4cff',
      },
      fontFamily: {
        sans: ['Poppins', ...defaultTheme.fontFamily.sans],
        newake: ['Newake', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        h1: '2.75rem', // 44px
        h2: '2rem', // 32px
        h3: '1.5rem', // 24px
        h4: '1.25rem', // 20px
        h5: '1rem', // 16px
        h6: '0.75rem', // 12px
      },
    },
    container: (theme) => ({
      center: true,
      padding: theme('spacing.4'),
    }),
  },
  plugins: [],
};
