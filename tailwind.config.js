/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#F2DFEA',
        plum: '#59254B',
        mauve: '#A6809C',
        mauveLight: '#BFA3B8',
        purple: '#733D6F',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
