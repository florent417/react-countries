/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      desktop: '1440px',
    },
    colors: {
      'dark-blue': '#2b3945',
      'very-dark-blue': { bg: '#202c37', 'lm-text': '#111517' },
      'dark-gray': '#858585',
      'very-light-gray': '#fafafa',
      white: '#ffffff',
    },
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
