/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#2b3945',
        'very-dark-blue': { bg: '#202c37', 'lm-text': '#111517' },
        'dark-gray': '#858585',
        'very-light-gray': '#fafafa',
        white: '#ffffff',
      },
      screens: {
        mobile: '375px',
        desktop: '1440px',
      },
      fontFamily: {
        sans: ['Nunito Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
